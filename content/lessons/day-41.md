# Day 41 — Hypervisor / VM Reset I：故障域与设备状态重建

学习日期：2026-10-08，星期四，Asia/Shanghai；Week 13。能力阶段：第二阶段“系统链路与问题分析”。目标：L3 证据排障，尝试 L4 VM 恢复契约设计。总用时约 60 分钟，附录可选。

10月7日远端没有正式课程记录，本课按真实当天和实际进度安排 Day 41，不补造昨日发布，也不跳到 Day 42。执行前已完整扫描所有状态的答卷 Issue 及评论，无新答卷；Day 34—41 仍待真实作答验证。

## 1. 资料、版本与教学边界

本课承接 [Day 38 状态与恢复](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-38.html)、[Day 39 恢复依赖与预算](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-39.html) 和 [Day 40 显示首帧证据](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-40.html)，把“重启后恢复”拆成两个可评审问题：**到底哪一层失效**，以及**新 VM 如何重新获得可信设备状态**。

官方资料核验日期：2026-10-08。

- [Android Automotive Virtualization](https://source.android.com/docs/automotive/virtualization)：AAOS 可以作为 Guest VM 与其他车载 OS 共同运行；本车是否采用同样方案仍须核对。
- [AOSP AVF architecture](https://source.android.com/docs/core/virtualization/architecture)：解释 Hypervisor、VMM、vCPU、虚拟设备后端和 virtqueue 的职责边界。AVF 是参考实现，不能直接当成本项目实现。
- [OASIS Virtio 1.3](https://docs.oasis-open.org/virtio/virtio/v1.3/virtio-v1.3.html)：设备状态归零表示 device reset 完成；此后必须重新初始化，且在重新初始化前设备不能继续与队列交互。DEVICE_NEEDS_RESET 出现时，在途请求是否完成不能靠猜测。
- [Linux Kernel virtio documentation](https://docs.kernel.org/driver-api/virtio/virtio.html)：用于复核 Guest driver、virtqueue 与设备配置接口的通用关系。

**当前没有本车车型、SoC、硬件阶段、Hypervisor/VMM版本、VM配置、virtio设备清单、设备直通/共享策略、TEE字典或实机日志。** 下文拓扑与日志均为教学构造；VMID、队列编号、reset reason、watchdog阈值、设备所有权和时限全部待项目确认。

本课已读取 T12T 优化版全部21项技能入口并逐项检查。深入使用通用三入口、虚拟化/TEE、稳定性复位、跨域消息和 TPM 首轮分责；显示、启动、电源用于验证恢复结果与触发边界。附录记录其余专项的适用性。

## 2. 一小时主线与回顾

| 时间 | 学习任务 | 输出 |
| --- | --- | --- |
| 0—10分钟 | 回顾4题 | 重启层级和完成语义短答 |
| 10—30分钟 | 两个核心概念 | 故障域表、设备重建契约 |
| 30—50分钟 | 工程案例 | 一条双时间线和竞争假设 |
| 50—60分钟 | 可复用产物 | 《VM恢复与设备重建检查表 V1》 |

回顾题：

1. PID变化、Guest boot ID变化、VM generation变化分别能证明哪一层重建？
2. VM create成功、Guest boot completed、目标业务恢复之间还缺哪些里程碑？
3. 为什么 VM destroy 之后出现的 GPU、Display 或 Camera 告警默认先放入 cleanup 槽？
4. 一个旧 requestId 在 VM 重建后到达，接收方至少要校验哪些代际字段？

## 3. 核心概念一：先判故障域，再谈根因

“Android重启了”常把多个故障域混在一起。架构师应先回答：**谁停止、谁连续、谁被重新创建**。

| 层级 | 直接证据 | 保持连续的对象 | 仍不能推出 |
| --- | --- | --- | --- |
| L1 App/服务 | fatal、退出和PID/实例变化 | Guest boot与VM generation连续 | Framework或VM重启 |
| L2 Framework | system_server/zygote重建、boot phase重走 | Guest boot ID和uptime连续 | Guest kernel重启 |
| L3 Guest OS | Guest boot ID/uptime重置、Guest kernel启动 | Host boot ID连续 | Host或SoC重启 |
| L4 VM | VMM kill/terminate/destroy/create、generation变化 | Host boot ID与VMM实例连续 | 最初触发来自Hypervisor |
| L5 Host | Host boot ID/uptime重置、全部Guest生命周期变化 | MCU可能连续 | SoC或MCU必然复位 |
| L6/L7 SoC、MCU、PMIC | bootloader/reset/rail/MCU计数等当前版本证据 | 视复位域而定 | 冷启动原因或上游责任 |

只有同一对象、同一 generation、可信时间轴上的证据才能组合。VM destroy/create 是 L4 生命周期直接证据；它可能是 Guest panic 后的响应、VMM watchdog策略、电源策略或外部管理命令的结果。恢复动作说明覆盖范围，不等于最初触发。

~~~mermaid
flowchart LR
    U[用户现象] --> L1[L1 App或服务]
    L1 --> L2[L2 Framework]
    L2 --> L3[L3 Guest OS]
    L3 --> L4[L4 VM与Hypervisor]
    L4 --> L5[L5 Host或Yocto]
    L5 --> L6[L6 SoC]
    L6 --> L7[L7 MCU或PMIC]
    L4 --> VF[Guest frontend]
    VF --> VQ[virtqueue与transport]
    VQ --> BE[Host backend或VMM]
    BE --> PD[物理设备或驱动]
    PD --> OUT[业务输出]
~~~

故障域与设备事务是两条相关但不同的线：上方回答生命周期在哪一层中断，下方回答目标请求停在哪一段。不能看到 fence timeout 就直接定责物理GPU，也不能看到 KillAndWait 就把所有 Guest 侧超时忽略。

## 4. 核心概念二：重建 VM 不等于重建设备状态

新 VM 必须得到一套与新 generation 一致的资源，而不是继续消费旧 VM 的残留：

| 对象 | 旧代需要终止或隔离 | 新代需要重新建立 | 完成证据 |
| --- | --- | --- | --- |
| VM/Guest | 旧vCPU、内存映射、旧callback | 新VM generation、Guest boot身份 | Host与Guest双侧generation一致 |
| virtio设备 | 停止旧queue通知；处理在途请求的不确定性 | feature协商、device status、queue地址与ready | 当前接口定义的ready，且新queue可闭环 |
| buffer/DMA/IOMMU | 旧handle、mapping、fence不可跨代误用 | 新映射、所有权和访问权限 | 同一新代buffer完成submit→complete |
| 跨域会话 | 旧session、subscription、credit和request失效 | 新session/generation、订阅与freshness | 新sequence到consumer并更新状态 |
| 业务资源 | 旧surface、audio route、camera session等失效 | 当前目标重新绑定 | 目标业务的可见/可听/可用验收 |

重建契约至少包含：

- **身份**：boot ID、VM generation、service generation、device generation、session generation。
- **栅栏**：旧代不再产生新完成；迟到回调必须被拒绝或隔离。
- **顺序**：reset完成 → feature/queue初始化 → backend ready → subscription/resource rebind → 业务重放。
- **在途请求**：明确 cancel、失败、重试或重放策略；不允许把未知完成状态直接记成功。
- **完成语义**：ACK只表示收到或进入恢复流程；设备ready只表示局部完成；业务完成需目标结果验收。
- **预算**：teardown、reset、recreate、rebind、replay和业务验收共享总deadline，重试必须有界。

OASIS Virtio规范要求 device reset 完成后状态回到0；驱动随后重新初始化。若设备报告 DEVICE_NEEDS_RESET，在途请求不能被假设为“全完成”或“全没完成”。这正是为什么恢复契约需要 request identity、幂等键和最终验收。

## 5. 正常与异常时序

~~~mermaid
sequenceDiagram
    participant G as Guest前端 G7
    participant V as Hypervisor/VMM
    participant B as Host后端
    participant D as 物理设备
    participant C as 业务验收

    G->>B: submit r41 / deviceGen d7
    B->>D: physical job j41
    D-->>B: complete j41
    B-->>G: used ring + interrupt
    G-->>C: 业务输出与当前身份
    C-->>G: business complete

    Note over G,V: 故障后旧代 G7 进入终止
    V->>G: quiesce / kill policy
    V->>B: detach G7 device contexts
    B-->>V: teardown ACK（局部完成）
    V->>V: create G8
    V->>B: reset / bind deviceGen d8
    B-->>V: backend ready（局部完成）
    V-->>G: expose device to G8
    G->>B: negotiate + queues ready
    G->>B: replay r42 / G8 / d8
    B->>D: physical job j42
    D-->>B: complete j42
    B-->>G: completion G8
    G-->>C: 当前业务结果
    C-->>G: business complete

    B--xG: 迟到 completion r41 / G7
    Note over B,G: 必须拒绝或隔离，不能污染 G8
~~~

需要把三条“完成”分开：

1. teardown ACK：旧资源清理流程已受理或达到合同定义的局部完成；
2. backend/device ready：新代虚拟设备可以接收请求；
3. business complete：新代请求已在目标业务端产生正确效果。

若VM create后仅看到Guest启动和服务存活，没有queue闭环、资源重绑与业务验收，最多能说“计算域恢复”，不能说“座舱功能恢复”。

## 6. 教学构造案例：VM恢复后仪表画面仍旧

以下事件为合成案例，不是实车证据。所有ID和相对时间仅服务推理。

| 证据 | 构造事件 | 类型与边界 |
| --- | --- | --- |
| E1 | Host boot ID连续；Guest G7 的boot ID在故障后变化为G8 | 直接支持VM/Guest重建，不支持Host reset |
| E2 | G7的显示请求r41已进入backend，physical job尚无完成记录 | 在途状态未知；不能写完成或未执行 |
| E3 | VMM记录G7 terminate/destroy，随后create G8 | L4直接生命周期证据 |
| E4 | destroy后出现旧display context missing | 默认cleanup；尚不能倒推触发 |
| E5 | backend为G8创建d8并返回ready，Guest服务也ready | 局部恢复，不等于正确画面可见 |
| E6 | 一条r41 completion迟到，只携带旧device context，没有被generation guard拒绝 | 直接证据：旧完成进入新消费窗口 |
| E7 | consumer把r41结果写入当前状态，r42被判“无需刷新” | 直接证据：旧代污染新代业务状态 |
| E8 | 清理当前cache并重新发r42后，目标画面正确显示 | 恢复范围证据；不独立证明最初VM为何重建 |

分析步骤：

1. **现象与范围**：VM重建后目标屏显示旧状态，其他未共享该consumer的业务正常。
2. **定层**：E1、E3确认L4 VM重建；Host连续。没有证据支持SoC或MCU复位。
3. **三槽**：E3是直接终止机制；E2是kill前未完成事务；E4是cleanup；VM为何进入destroy仍待VMM reason或Guest fatal证据。
4. **设备事务断点**：E6表明旧代completion越过代际边界，E7证明它污染当前cache。这解释“恢复后旧画面”。
5. **不要越界**：E8只说明cache/replay覆盖了症状，不能证明VM重建由display引起，也不能证明物理显示设备无缺陷。
6. **竞争假设**：H1 backend completion缺少generation校验；H2 consumer虽有generation但持久化cache恢复时丢失来源代际；H3 r42确实到达，但状态机的幂等键只使用requestId，未包含generation。
7. **区分实验**：分别记录backend发出、transport到达、consumer写cache三点的VM/device/session generation；在隔离环境注入一条旧代迟到完成，检查每层是否拒绝。
8. **修复边界**：backend负责携带并校验device generation；transport负责不把旧队列完成注入新VM；consumer负责对旧代数据fail-closed并触发当前状态重取。
9. **验证**：正常重建、destroy中有在途请求、迟到回调、重复回调、重建再次失败五类都必须覆盖。

当前可确认的教学结论是“代际隔离缺失导致旧完成污染新状态”；**VM最初被重建的触发原因仍未证实**。

## 7. 日志与证据设计

统一字段建议：

domain | originalTime | clockId | bootId | vmGeneration | serviceGeneration | deviceGeneration | sessionGeneration | requestId | queue/index | job/fence | phase | result | deadlineRemaining

取证顺序：

1. 先判各域连续性，不能跨boot或VM generation拼接；
2. 再沿同一请求检查 Guest submit → avail/kick → Host dequeue → physical submit/complete → used/IRQ → Guest callback；
3. 单独记录VMM kill caller、reason、policy和destroy/create；
4. destroy后的资源错误放cleanup槽，除非证明同一context在kill前已异常并传播到kill；
5. 有DB/KE、panic、tombstone或watchdog包时，先按固定八步做异常包取证；
6. secure日志只记录脱敏UUID、command、result和关联ID，不复制payload、key或token。

## 8. 可执行验证

| 测试 | 操作 | 必须观察 | 通过标准 |
| --- | --- | --- | --- |
| T1 正常重建 | 在获批实验环境执行受控VM重建 | 旧代quiesce、destroy、新代create、queue初始化、业务恢复 | 旧代无后续有效完成；新代业务闭环 |
| T2 在途请求 | 物理job处理中触发受控重建 | request最终状态、buffer/fence释放、重放决策 | 无双重完成、无泄漏、无假成功 |
| T3 迟到完成 | 注入带旧generation的completion | backend、transport、consumer拒绝点 | 旧数据不进入新cache，且有可审计记录 |
| T4 backend慢恢复 | 延迟backend ready但保持总deadline | 早到请求处理、重试预算、最终状态 | 明确defer/reject；ready后仅重放当前代 |
| T5 连续失败 | 新VM初始化再次失败 | 重试上限、降级、用户状态和诊断保留 | 不无限循环；失败可见且证据不被覆盖 |

T1—T3为本课必做设计，T4—T5为扩展。设备操作、故障注入和VM重建仅限已授权实验环境；本课不授权控制实车。

## 9. 今日练习与交付

以下题目不附参考答案，请独立作答：

1. 看到“Guest service ready → VMM create success → 黑屏”时，写出至少6个仍缺失的恢复里程碑，并说明每个里程碑的完成证据。
2. 一条virtio请求在VM reset时处于in-flight。设计它的身份字段、最终状态、重放规则和buffer释放规则，避免双重完成与旧代污染。
3. 给出一张竞争假设表：Guest先fatal、VMM策略先kill、backend事务卡住三种假设分别需要什么直接证据和反证。
4. 扩展：如果Host与另一VM使用同一物理设备，如何通过消费者矩阵区分全局设备故障与单queue/context故障？
5. 扩展：设计“局部虚拟设备reset”和“整VM重建”两个恢复方案，比较影响范围、恢复时间、状态残留、实现复杂度与验证成本。

今日交付物：《VM恢复与设备状态重建检查表 V1》，至少包含：

- L1—L7连续性表；
- VM、device、session、request四类generation；
- teardown、device ready、business complete三种完成语义；
- 在途请求、迟到回调、buffer/fence、旧cache处理；
- T1—T3测试步骤、Owner、预期证据和通过标准。

课程编号为 **day-41**。完成后使用页面末尾“上传／提交答卷”提交文字或附件；也可从[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)进入。请勿上传不可公开的项目日志、密钥或未脱敏身份信息。

## 附录：21项技能适用性检查（选读）

| 技能 | 判断 | 本课覆盖 |
| --- | --- | --- |
| cockpit-diagnosis | 适用，深入 | 先定层、再定事务断点与责任边界 |
| log-analysis | 适用，深入 | 跨域时间、generation和三槽证据 |
| platform-architecture | 适用，深入 | Guest/Host/Hypervisor/设备边界 |
| display-black-freeze | 条件适用 | 业务验收示例为画面；不把显示后果当VM触发 |
| touch-input | 当前不适用 | 未涉及触摸链 |
| avm-camera-stream | 当前不适用 | 未涉及Camera源流 |
| power-sleep-str | 材料不足 | 若电源事件早于VM重建再进入attempt分析 |
| audio-path | 当前不适用 | 未涉及音频链 |
| stability-crash-reset | 适用，深入 | L1—L7、连续性与直接终止机制 |
| performance-jank | 材料不足 | 尚无backend调度、CPU或IO证据 |
| ethernet-sgmii | 当前不适用 | 未涉及有线物理链 |
| wireless-phone-link | 当前不适用 | 未涉及无线或手机互联 |
| cross-domain-msg | 适用，深入 | generation、迟到消息和freshness |
| boot-hmi | 条件适用 | VM重建后的ready与业务首帧分离 |
| log-storm | 材料不足 | 连续重建可能造成刷屏，但无量化证据 |
| usb-typec-storage | 当前不适用 | 未涉及USB/卷生命周期 |
| virtualization-tee | 适用，深入 | virtqueue、device reset、VM生命周期 |
| db-ke-forensics | 条件适用 | 若有异常包必须按固定八步取证 |
| mcu | 材料不足 | 未知是否参与本次VM管理或电源策略 |
| tpm-triage | 适用，深入 | 触发、直接修复、恢复和验证Owner分开 |
| tpm-5y8d | 当前不适用 | 无真实根因与逃逸证据，不生成5Y/8D |

关键缺口：本车拓扑与版本、VM/device映射、VMM reason字典、实际reset能力、在途请求合同、共享设备拓扑、TEE安全字典和实机证据。下一课按实际日期与星期规则处理，不提前给出“看门狗责任”题的答案。
