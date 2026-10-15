# Day 42 — Hypervisor / VM Reset II：看门狗责任与恢复策略

计划学习日期：2026-10-12，星期一，Asia/Shanghai；于2026-10-15按用户明确要求补录。能力阶段：第二阶段“系统链路与问题分析”。目标：从“超时后重启”提升到可评审的看门狗分层、故障升级与恢复契约设计。总用时约 60 分钟，附录选读。

本课原计划日期为10月12日；10月15日首次发布后，依据用户明确要求补录到原计划日期。台账保留实际补录/发布日期，不把10月12日写成真实发布、学习或完成记录。执行前已扫描全部状态的答卷 Issue 和评论，无新答卷；Day 34—42仍待真实作答评审。

## 1. 资料、版本与教学边界

本课承接 [Day 41 的故障域与设备状态重建](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-41.html)，集中回答四个问题：谁监测谁、什么叫“失去进展”、谁有权结束哪个对象、重建后怎样证明业务真正恢复。

官方资料核验日期：2026-10-15。

- [Linux Watchdog driver API](https://docs.kernel.org/watchdog/watchdog-api.html)：用户态按周期通知 watchdog；通知停止后，watchdog可能复位系统。不同驱动的能力并不完全一致，必须读取本机能力而非照搬参数。
- [Linux Watchdog kernel API](https://docs.kernel.org/watchdog/watchdog-kernel-api.html)：区分 watchdog core、driver、超时和 pretimeout 等机制；项目实现与超时仍需现场确认。
- [AOSP Watchdog 源码](https://android.googlesource.com/platform/frameworks/base/+/master/services/core/java/com/android/server/Watchdog.java)：Android Framework watchdog会检查关键线程/监视器的进展，并保留诊断与终止策略。量产分支行为必须以当前版本源码为准。
- [AOSP AVF architecture](https://source.android.com/docs/core/virtualization/architecture)：提供 Hypervisor、VMM、Guest 和虚拟设备后端的参考职责；AVF不是本项目实现证明。
- [OASIS Virtio 1.3](https://docs.oasis-open.org/virtio/virtio/v1.3/virtio-v1.3.html)：设备reset之后必须重新初始化；在途请求、queue与device status的处理要遵守当前transport和设备规范。

**当前缺少本车车型、SoC与板级版本、Hypervisor/VMM版本、VM配置、watchdog层级与owner、超时/预超时、复位目标、喂狗路径、reason字典、共享设备拓扑和实机日志。** 下文是教学架构与合成日志；VMID、时间、reason、重试次数和阈值均为占位，正式项目必须标“待确认”。

本课从用户指定的F盘优化版目录读取并检查全部21项T12T技能。深入使用通用三入口、稳定性复位、虚拟化/TEE、跨域消息、异常包取证与TPM首轮分责；MCU、电源、启动和显示用于边界校验。附录列出完整覆盖结果。

## 2. 一小时学习主线

| 时间 | 学习任务 | 输出 |
| --- | --- | --- |
| 0—10分钟 | 回顾4题 | 看门狗层级与完成语义短答 |
| 10—30分钟 | 两个核心概念 | 责任矩阵、恢复状态机 |
| 30—50分钟 | 工程案例 | 三槽证据、竞争假设与区分实验 |
| 50—60分钟 | 可复用产物 | 《VM看门狗与恢复责任矩阵 V1》 |

回顾题：

1. Guest service heartbeat停止、VMM执行KillAndWait、Guest boot ID变化，各自最多能证明什么？
2. 为什么“watchdog timeout”常是检测结果，不自动等于最初根因？
3. VM create成功、backend ready和business complete之间有什么区别？
4. 新VM收到旧generation的迟到completion时，为什么不能只按requestId去重？

## 3. 核心概念一：看门狗是检测与升级机制

架构评审不要只问“有没有watchdog”，要把下面五个角色写清楚：

| 角色 | 必答问题 | 合格证据 |
| --- | --- | --- |
| 被监测对象 | 线程、服务、Guest、VM、Host还是硬件域？ | objectId、boot/VM/service generation |
| 进展信号 | 心跳、主循环checkpoint、事务完成还是硬件喂狗？ | progressSeq、lastKick、lastCompletedRequest |
| 检测者 | 谁计算超时，使用什么时钟？ | watchdogOwner、clockId、arm/deadline |
| 升级者 | 谁决定dump、abort、kill、reset或降级？ | caller、policy、reason、targetScope |
| 恢复验证者 | 谁确认资源重绑和业务结果？ | readiness与业务验收里程碑 |

“存活”与“有业务进展”也要分开。心跳线程可能仍在运行，而目标queue、binder线程池、virtqueue或业务状态机已经没有进展；反过来，系统高负载导致心跳迟到，也不等于被监测对象已经永久失效。超时策略至少需要：

- 用单调时钟记录 arm、last progress、pretimeout、expiry 和 recovery；
- 把线程进展、服务进展、VM heartbeat与硬件喂狗分层；
- 在pretimeout阶段先固定证据，避免reset后只剩reason码；
- 抑制重复升级，保证同一incident只由一个策略owner主导；
- 为误报、迟到心跳、时钟漂移和调度饥饿保留竞争假设；
- 限定复位半径：优先恢复最小可隔离对象，扩大范围必须有升级条件。

### 看门狗分层责任表

| 层级示例 | 可能监测对象 | 直接动作 | 需要额外证明 |
| --- | --- | --- | --- |
| Android Framework watchdog | system_server关键线程/monitor | dump、终止Framework进程 | Guest/VM是否也被重建 |
| Guest service watchdog | 业务服务或daemon | restart/abort服务 | 为何服务无进展、是否跨域依赖阻塞 |
| VM heartbeat/watchdog | Guest或VM实例 | VMM kill/destroy/recreate | Guest先fatal还是Host策略先kill |
| Host userspace→hardware watchdog | Host用户态/系统进展 | watchdog到期触发目标域reset | 最后喂狗、driver能力、复位域 |
| MCU/SWT/PMIC watchdog | MCU调度或电源域 | MCU、SoC或电源域复位 | 当前协议字典、reset source和rail证据 |

这些层级不能靠日志中的“WDT”三个字母合并。Android、Hypervisor、MCU SWT和PMIC/hardware watchdog的owner、时钟、复位目标和证据包都不同。

## 4. 核心概念二：恢复必须有状态机和完成合同

恢复策略要回答“从检测到业务恢复”的全部状态，而不是把reset当终点。

~~~mermaid
stateDiagram-v2
    [*] --> RUNNING
    RUNNING --> SUSPECT: 进展超过预警窗口
    SUSPECT --> RUNNING: 当前代进展恢复且证据一致
    SUSPECT --> SNAPSHOT: pretimeout固定证据
    SNAPSHOT --> TERMINATING: 策略确认且去重成功
    TERMINATING --> RECREATING: 旧代隔离与终止完成
    RECREATING --> REBINDING: 新VM和Guest身份建立
    REBINDING --> RESYNCING: 设备、会话、订阅重绑
    RESYNCING --> PROBING: 当前状态重取与新代探针
    PROBING --> READY: 业务验收通过
    PROBING --> DEGRADED: deadline到期或关键依赖失败
    DEGRADED --> RECREATING: 有界升级且预算允许
~~~

每个状态都应有进入条件、退出证据、deadline、owner和失败去向。尤其要区分四种完成：

1. **命令ACK**：接收方确认收到或排队；不证明动作开始。
2. **生命周期完成**：旧VM已终止或新VM已创建；不证明虚拟设备ready。
3. **资源ready**：queue、mapping、session、subscription已经重建；不证明状态新鲜。
4. **业务完成**：当前generation的新请求产生正确可观察结果，例如目标画面首帧present、目标音频可听或目标信号进入当前状态机。

### 旧消息、复位与超时规则

- 每个事件至少携带 bootId、vmGeneration、serviceGeneration、session/deviceGeneration和requestId中的适用组合。
- reset边界关闭旧代输入；旧代completion只能进入审计或隔离路径，不能写入当前cache。
- 在途事务必须有终态：completed、cancelled、failed、unknown之一；unknown不能被当作成功重放。
- 重放需要幂等键包含generation或业务版本，并重新读取当前source state，不能盲播旧快照。
- teardown、create、rebind、resync、probe共享端到端预算；局部重试不得无限消耗总deadline。
- 连续恢复失败要进入明确降级并保留首轮证据，避免重启循环覆盖最早断点。

## 5. 正常、超时与恢复时序

~~~mermaid
sequenceDiagram
    participant M as Monitor/Watchdog
    participant G as Guest G42
    participant V as VMM/Recovery Coordinator
    participant B as Host Backend
    participant S as State Owner/MCU
    participant U as Business Probe

    G-->>M: progressSeq=84 / generation=G42
    G->>B: request r420 / deviceGen=d42
    B-->>G: completion r420 / d42
    G-->>M: progressSeq=85

    Note over G,M: 之后目标事务不再前进，心跳状态待判
    M->>M: pretimeout / snapshot
    M->>V: escalate incident i42 / target G42
    V-->>M: command ACK（仅已受理）
    V->>G: quiesce/terminate G42
    V->>B: detach old contexts G42/d42
    B-->>V: teardown complete（生命周期局部完成）
    V->>V: create G43
    V->>B: bind deviceGen d43
    B-->>V: backend ready（资源局部完成）
    V->>S: request current state / generation G43
    S-->>V: current state + sourceSeq
    V->>U: run business probe G43
    U-->>V: business complete
    V-->>M: recovery complete / current generation G43

    B--xG: late completion r420 / G42 / d42
    Note over B,G: 旧代必须拒绝或隔离
~~~

若只看到monitor发出kill并收到ACK，最多能确认恢复流程被受理。若只看到G43创建和backend ready，也不能确认状态已同步、旧消息被隔离或业务探针通过。

## 6. 教学构造案例：VM watchdog触发后恢复循环

以下是合成案例，不是实车根因。相对时间仅用于练习。

| 证据 | 构造事件 | 角色与边界 |
| --- | --- | --- |
| E1 | Host boot ID连续，Guest G42 boot ID与uptime随后变化 | 支持Guest/VM重建；不支持Host/SoC复位 |
| E2 | G42最后progressSeq=85；最后完成的事务是r420 | 进展基线；尚不解释为何停止 |
| E3 | pretimeout阶段抓到Guest waiter等待virtqueue q3的used entry | kill前诱因候选，需追同一descriptor |
| E4 | Host backend已dequeue同一descriptor，但没有physical complete或backend complete记录 | 最早可观察事务断点位于backend→physical→completion区间 |
| E5 | VM watchdog到期，VMM以reason `待当前字典确认` 执行kill/destroy | 直接终止机制；watchdog是检测/升级者 |
| E6 | destroy后旧queue返回一次迟到completion，因generation不匹配被丢弃 | cleanup/隔离正确；不能倒推它触发kill |
| E7 | G43创建后backend ready，但当前状态重取连续超时，probe失败 | 恢复未业务完成 |
| E8 | recovery coordinator再次触发整VM重建，产生循环 | 恢复策略缺少有界降级或依赖判定 |

完整分析：

1. **现象**：用户看到目标业务长时间不可用，并伴随两次VM重建。
2. **失效层级**：E1、E5确认Host连续下的L4 VM重建。没有证据支持SoC或MCU复位。
3. **三槽证据**：E5是直接终止；E3、E4是终止前触发候选；E6是destroy后的cleanup；E7、E8属于恢复失败与升级后果。
4. **最早可证实断点**：同一descriptor已由backend取出，但未见physical complete或backend complete。现有证据只能把边界放在backend、physical job及completion之间，不能直接定责物理设备。
5. **看门狗边界**：VM watchdog正确检测“无进展”并执行策略，但它未说明q3为何停止。最后打印timeout的monitor是检测者，不自动是根因owner。
6. **恢复缺陷**：G43的create/ready没有闭环到状态重取和业务probe；再次整VM重建未改变失效依赖，因此形成循环。
7. **竞争假设**：H1 backend线程/锁不前进；H2 physical job或dependency未完成；H3 physical complete存在但used ring/IRQ链丢失；H4恢复后的state owner/session没有换代成功。每个假设都要用同一queue、descriptor、job/fence、session和generation区分。
8. **责任边界**：VMM owner负责kill reason与有界升级；virtio/backend owner负责q3事务闭环；物理驱动owner仅在job/fence证据指向时进入；state owner和跨域owner负责G43状态重取；TPM负责组织共同ID和验收标准。
9. **修复方向**：在pretimeout固定ring/backend/job/IRQ证据；恢复前判断依赖是否可用；旧代fail-closed；重复失败转降级并保留原incident；成功仅由business probe签字。
10. **置信度**：VM重建与恢复循环为高；事务断点区间为中；具体backend或物理根因为低，待区分实验。

## 7. 证据与埋点设计

建议统一事件字段：

`domain | originalTime | clockId | bootId | vmGeneration | serviceGeneration | watchdogOwner | monitoredObject | progressSeq | armTime | pretimeoutTime | expiryTime | caller | reason | targetScope | device/queue | descriptor/request/job/fence | sessionGeneration | phase | result | deadlineRemaining | incidentId`

证据顺序：

1. 先用boot ID、uptime、VM generation证明停止与重建层级；
2. 固定watchdog owner、最后成功kick/进展、arm/expiry、caller、reason和reset target；
3. 沿同一事务查submit→avail/kick→dequeue→physical job→complete→used/IRQ→callback；
4. 把直接kill、kill前触发、destroy后cleanup分槽；
5. 用新generation的resource ready、state resync和business probe证明恢复；
6. 有DB/KE或reset包时先核验manifest、类型、身份、寄存器、匹配符号、first fatal、前序上下文与reset佐证；无stack是证据缺口，不是“没有底层问题”；
7. 当前项目reason字典、timeout和复位域缺失时保留原值并标unknown，不能借用历史项目常量。

## 8. 可执行验证矩阵

| 测试 | 操作 | 关键观测 | 通过标准 |
| --- | --- | --- | --- |
| T1 正常进展 | 固定负载运行并记录progressSeq与事务里程碑 | kick、完成、业务结果 | 无误报，进展定义可解释业务 |
| T2 单线程卡住 | 在获批台架阻塞目标线程，保留heartbeat分支 | pretimeout、waiter、caller、target | 仅升级目标范围，证据先于终止保存 |
| T3 迟到心跳 | 注入调度延迟或迟到progress | SUSPECT撤销、incident去重 | 当前代真实进展可恢复，不重复kill |
| T4 backend不完成 | 固定descriptor并阻断一个里程碑 | ring、backend、job/fence、IRQ | 能定位首个缺失阶段，不笼统定责硬件 |
| T5 reset中有在途事务 | 在受控VM重建时保留旧请求 | terminal state、迟到completion、资源释放 | 无双重完成、旧代不污染新代 |
| T6 rebind失败 | 让新代session或subscription建立失败 | ready、state resync、probe、deadline | 不宣告恢复；有界重试后进入降级 |
| T7 重复恢复失败 | 连续两次让同一依赖不可用 | 策略计数、证据留存、影响半径 | 不无限重启；首个incident证据仍可取 |
| T8 邻域回归 | 比较其他VM、Host消费者和共享设备 | 消费者矩阵、同步异常 | 能区分全局设备与单context/queue |

所有故障注入、watchdog到期和VM重建仅限已经授权的隔离环境。本课不授权操作实车。具体超时、次数和降级门槛均待项目评审确认。

## 9. 今日练习与交付

以下题目不附参考答案，请独立完成：

1. 为Android Framework、Guest service、VM、Host hardware和MCU/PMIC五类watchdog填写“被监测对象—进展信号—检测者—动作—复位范围—恢复验收”表。
2. 给出一条“heartbeat仍正常但业务无进展”的时序，指出应该新增哪三个progress checkpoint。
3. 针对案例E1—E8，画出kill前触发、直接终止、cleanup、恢复失败四个槽，并为H1—H4各写一项支持证据和反证。
4. 设计G42→G43恢复状态机的deadline预算。所有数值先写“待项目确认”，说明预算如何从总目标分配到snapshot、terminate、create、rebind、resync和probe。
5. 扩展：比较“重启Guest服务、reset单个virtio设备、重建整VM、重启Host”四种恢复半径的适用条件、状态残留、用户影响和验证成本。

今日交付物：《VM看门狗与恢复责任矩阵 V1》，至少包含：

- 五类watchdog的owner、时钟、进展定义、caller、reason与target scope；
- RUNNING→SUSPECT→SNAPSHOT→TERMINATING→RECREATING→REBINDING→RESYNCING→PROBING→READY/DEGRADED状态；
- ACK、生命周期完成、资源ready、business complete四种语义；
- 旧generation、迟到消息、在途请求和重复incident处理；
- T2、T5、T6、T7的Owner、预期证据与通过标准。

课程编号为 **day-42**。完成后使用页面末尾“上传／提交答卷”提交文字或附件，也可从[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)进入。请勿上传未脱敏项目日志、密钥、受保护payload或身份信息。

## 附录：21项T12T技能适用性检查（选读）

| 技能 | 判断 | 本课覆盖 |
| --- | --- | --- |
| cockpit-diagnosis | 适用，深入 | 从现象路由到稳定性、虚拟化和恢复策略 |
| log-analysis | 适用，深入 | 多时钟、boot/VM generation、三槽证据 |
| platform-architecture | 适用，深入 | Android Guest、Yocto Host、Hypervisor、MCU边界 |
| display-black-freeze | 条件适用 | 可作为business probe；无显示证据不定显示根因 |
| touch-input | 当前不适用 | 未涉及触摸链 |
| avm-camera-stream | 当前不适用 | 未涉及Camera源流与AVM会话 |
| power-sleep-str | 条件适用 | 电源状态早于watchdog时进入；当前材料不足 |
| audio-path | 当前不适用 | 未涉及音频业务 |
| stability-crash-reset | 适用，深入 | L1—L7、直接终止与连续性 |
| performance-jank | 材料不足 | 调度饥饿是假设，尚无CPU/IO/PSI证据 |
| ethernet-sgmii | 当前不适用 | 未涉及有线链路 |
| wireless-phone-link | 当前不适用 | 未涉及无线或手机互联 |
| cross-domain-msg | 适用，深入 | heartbeat与topic progress分离、generation和旧消息 |
| boot-hmi | 条件适用 | VM重建后的服务ready与业务ready分离 |
| log-storm | 材料不足 | 重启循环可能刷屏，需先量化才进入 |
| usb-typec-storage | 当前不适用 | 未涉及USB或卷生命周期 |
| virtualization-tee | 适用，深入 | virtqueue、VMM kill、destroy/create与共享设备 |
| db-ke-forensics | 适用，深入 | watchdog/reset包的固定八步与无stack边界 |
| mcu | 条件适用 | 区分MCU SWT、PMIC和VM watchdog；reason须查当前字典 |
| tpm-triage | 适用，深入 | 触发、直接终止、恢复策略、验证Owner分离 |
| tpm-5y8d | 当前不适用 | 无真实根因和逃逸证据，不编造5Y/8D |

关键证据缺口：当前车型/SoC/软硬件版本、真实VM与共享设备拓扑、watchdog owner与进展定义、超时/预超时、caller/reason字典、reset target、ring/job/IRQ关联ID、异常包完整性、状态重取合同、业务probe和实测恢复预算。下一任务按真实日期与星期规则处理，不提前推进Day 43。
