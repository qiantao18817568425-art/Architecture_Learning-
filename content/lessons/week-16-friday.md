# Week 16 — 周五反思总结：资源预算与方案设计合同

学习日期：2026-10-30，星期五，Asia/Shanghai；Week 16。能力阶段仍为第二阶段“系统链路与问题分析”。今天只复盘本周实际安排的 Day 49—52，不推进 Day 53，也不提前讲未来专题。建议用时 60 分钟。

执行前已完整扫描仓库开放与关闭状态的全部 Issue、所有评论及附件索引；授权学习者没有新答卷、原答卷编辑或本人 `[补交]` 评论。因此 Day 34—52 继续记为待评审，课程发布不代表已经学习或掌握。

## 1. 本周范围与事实边界

| 单元 | 本周形成的能力合同 | 复盘时必须保留的边界 |
| --- | --- | --- |
| [Day 49：资源所有权、DMA/IOMMU 与共享缓冲](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-49.html) | authority、exporter/importer、producer/consumer、fence、mapping、generation 与回收 | handle、mapping、fence 和用户结果不能互相替代 |
| [Day 50：GPU、DDR 带宽预算与性能验证](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-50.html) | avg/peak、并发、P50/P95/P99、frame deadline、背压和单变量实验 | 高利用率、总 counter 或平均 FPS 不能直接定根因 |
| [Day 51：需求分解、场景边界与系统验收](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-51.html) | Need/ConOps → System Req → Architecture → Interface → V&V 双向追踪 | 需求、实现、局部 ACK 和系统验收不能混写 |
| [Day 52：模块、接口与异常恢复](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-52.html) | 策略/执行/数据/状态/恢复责任，十一项接口合同，未知终态与旧代隔离 | accepted、logical complete、business accepted 必须由不同证据证明 |

官方资料复核日期：2026-10-30。本次不新增专题，沿用本周已经核验的 [AOSP BufferQueue/Gralloc](https://source.android.com/docs/core/graphics/arch-bq-gralloc)、[AOSP Synchronization](https://source.android.com/docs/core/graphics/sync)、[Linux DMA API](https://docs.kernel.org/core-api/dma-api-howto.html)、[Linux dma-buf](https://docs.kernel.org/driver-api/dma-buf.html)、[Linux Interconnect](https://docs.kernel.org/driver-api/interconnect.html)、[Linux PSI](https://docs.kernel.org/accounting/psi.html)、[Perfetto FrameTimeline](https://perfetto.dev/docs/data-sources/frametimeline)、[NASA System Design](https://www.nasa.gov/reference/4-0-system-design-processes/)、[NASA Interface Management](https://www.nasa.gov/reference/6-3-interface-management/) 与 [Automotive SPICE PRM 4.5](https://automotivespice.com/fileadmin/software-download/automotiveSIG_PRM_v45.pdf) 的机制边界。

当前仍缺车型、SoC/build、真实部署与连接、IDL/DBC、allocator/IOMMU/GPU/DDR/显示配置、业务 deadline、温度与并发基线、接口完成语义、故障注入授权及实机 trace。以下案例为教学构造；所有项目数值、阈值、VMID、stream ID、屏幕与 Camera 映射均保持待确认。

## 2. 一小时安排

| 时间 | 任务 | 必交输出 |
| --- | --- | --- |
| 0—10 分钟 | 独立回答 5 道回顾题 | 五段短答，未知项标 TBD |
| 10—25 分钟 | 重画本周知识地图 | 需求—接口—资源—运行—恢复—证据六层图 |
| 25—45 分钟 | 完成综合故障题 | 时间线、竞争假设、证据账本和恢复决策 |
| 45—55 分钟 | 架构评审与验证门禁 | 评审结论、行动项与验证矩阵 |
| 55—60 分钟 | 个人反思 | 由学习者本人填写，不代写 |

回顾题不附参考答案：

1. 为什么“接口接受资源请求”“设备映射完成”“fence 完成”“当前新鲜帧可见”是四种不同的完成证据？
2. 一条带宽公式怎样从 payload 扩展到 format/stride、读写 pass、并发 client、峰值窗口和 headroom？
3. 当产品需求只有“倒车后快速看到清晰画面”时，哪些未知条件必须进入场景与 TBD 关闭表？
4. 接口超时且最终状态未知时，为什么应先 readback，再决定同幂等键重试、补偿或降级？
5. VM/device generation 改变后，旧 callback、fence、handle、timeout 和 cancel 分别应如何处理？

## 3. 知识地图：一个方案必须同时通过六层合同

~~~mermaid
flowchart LR
  N[Need / ConOps] --> R[System requirement + scenarios]
  R --> A[Architecture allocation + module responsibility]
  A --> I[Interface contract + completion semantics]
  I --> U[Resource lifecycle + budget]
  U --> X[Runtime state + deadline + recovery]
  X --> V[Verification / validation + business acceptance]
  V -.双向追踪.-> N
  I -.txId / generation.-> E[Evidence ledger]
  U -.buffer / fence / counter.-> E
  X -.first break / readback / recovery.-> E
  V -.raw artifact / verdict.-> E
~~~

| 层 | 评审必须回答 | 不能被什么替代 |
| --- | --- | --- |
| 需求与场景 | 谁、何时、在何种车辆/生命周期状态下要什么结果 | 一句产品口号或 UI 文案 |
| 模块责任 | 策略、执行、数据、状态、恢复分别由谁权威负责 | 一张只有方框的组件图 |
| 接口完成 | received、accepted、applied、logical complete、business accepted 如何证明 | 单个 ACK 或服务在线 |
| 资源预算 | 谁分配/映射/同步/回收，峰值和尾时延是否有余量 | 句柄存在、平均值或最高利用率 |
| 异常恢复 | 超时、复位、未知终态、旧代、取消和降级怎样收敛 | 无限重试或扩大重启 |
| 证据与验证 | 哪个原始观测支持哪项判据，谁批准关闭 | 页面绿灯、恢复成功或口头结论 |

架构评审不是依次检查六张孤立的表，而是确认同一个 `scenarioId/transactionId + boot/VM/device generation + monotonic time` 能贯穿六层。任一层换代、超时或资源所有权未知，都要冻结当前证据，查询权威状态，再选择有界恢复。

## 4. 综合故障题：STR 后 AVM 已 accepted，但首帧周期性冻结

以下为教学构造记录，不预设根因。不同域时间尚未校准，记录顺序不等于跨域因果。

| 编号 | 构造记录 | 当前最多能证明 |
| --- | --- | --- |
| E1 | STR resume 后建立新 Android VM generation，HMI 发出 StartAVM | 新代存在业务意图；不证明依赖、资源和显示已恢复 |
| E2 | Camera 服务返回 accepted，四路 source sequence 仍递增 | 请求被接受且源端在产帧；不证明下游按时消费 |
| E3 | 一个旧 generation 的 SurfaceReady callback 在新代到达 | 存在迟到事件；是否污染当前状态尚未知 |
| E4 | 新代出现 BufferQueue backlog 与 fence wait 尾值上升 | 帧服务时间/背压异常；最早变慢节点未知 |
| E5 | GPU 与 DDR 总 counter 同窗升高，但没有 per-client 与 pass 计数 | 存在共享资源活动；不能选择唯一瓶颈 |
| E6 | Host 资源账本中一项旧 attachment 的回收状态不完整 | 生命周期未闭环；不证明它已经破坏当前帧 |
| E7 | HWC present 存在，但 approved visible endpoint 没有当前新鲜 frame readback | 局部呈现里程碑存在，业务验收未闭环 |
| E8 | 重新绑定显示资源后症状消失 | 恢复动作覆盖了某段状态；不能单独证明最初触发 |

### 4.1 独立作答要求

1. 画控制、数据、状态、电源/复位、资源与证据六条路径，标注 Android Guest、Yocto Host、Hypervisor、MCU 与 Camera/Display 外设边界。
2. 为 E1—E8 建立跨域时间校准表，分别记录原始时钟、共同锚点、误差、boot/VM/device generation 与关联 ID；无法对齐时保留域内顺序。
3. 写出“最后一个已证实成功交接”和“下一个预期输出”。未观测只能写未闭环，不能写没有发生。
4. 提出至少六个互相竞争的假设，覆盖接口代际、资源生命周期、GPU/DDR/调度、consumer 背压、显示绑定与错误业务验收；每个假设给支持证据、反证、缺失证据和尽量单变量的实验。
5. 区分 StartAVM accepted、producer fence、GPU/HWC fence、present、visible readback 和 business accepted；为每层指定证明者与原始证据。
6. 设计超时、VM reset、device reset、旧 callback、重复 retry、资源压力和恢复预算耗尽的状态迁移；恢复不得重置全局 deadline。
7. 比较局部 rebind、单域 restart、VM recreate、完整链路重建和明确降级的影响面、不可逆风险、退出条件与证据损失。
8. 完成 TPM 分责：首轮牵头、触发候选、直接失效修复、接口/资源/恢复策略和验证责任分别列出；最终 Owner 等区分实验后确认。

### 4.2 状态与恢复图

~~~mermaid
stateDiagram-v2
  [*] --> IntentKnown
  IntentKnown --> DependenciesBinding
  DependenciesBinding --> Ready: current generation + readback
  Ready --> Active: command accepted
  Active --> Verifying: current frame / resource / visible evidence
  Verifying --> Accepted: business criteria met
  Active --> Reconciling: timeout / peer reset / ownership unknown
  Verifying --> Reconciling: deadline miss / stale evidence
  Reconciling --> Active: authority confirms resumable state
  Reconciling --> Degraded: budget exhausted or unsafe ownership
  Degraded --> DependenciesBinding: approved recovery
  Active --> DependenciesBinding: generation changed
  Verifying --> DependenciesBinding: generation changed
~~~

状态名是教学模板。项目必须定义权威状态来源、TBD deadline、恢复次数、降级体验和安全限制，不能直接复用为现车常量。

## 5. 架构评审门禁与验证矩阵

### 5.1 评审门禁

| 门禁 | 必交证据 | 拒绝通过的条件 |
| --- | --- | --- |
| 场景完整 | 正常、早到、迟到、取消、重复、乱序、STR、复位、资源压力 | 只覆盖 happy path |
| 责任闭环 | 模块责任卡、状态 authority、恢复协调者 | 多个 Owner 或责任空洞 |
| 接口闭环 | 十一项接口合同、完成阶梯、readback、幂等键 | ACK 被写成业务完成 |
| 资源闭环 | 生命周期、mapping/fence、预算、背压、回收与隔离 | 所有权未知仍复用/释放 |
| 异常闭环 | deadline、未知终态、旧代拒绝、降级与升级 | 无限重试、无限重启或 silent failure |
| 证据闭环 | 原始工件、关联字段、正常/异常对照、通过判据 | 只有聚合绿灯或恢复后正常 |

### 5.2 独立填写验证矩阵

| 用例 | 变量/注入 | 必采证据 | 通过判据 | Owner | 状态 |
| --- | --- | --- | --- | --- | --- |
| 正常冷启/STR |  |  |  |  | 待执行 |
| request 早到/迟到 |  |  |  |  | 待执行 |
| VM/服务/device 复位 |  |  |  |  | 待执行 |
| 旧 callback/fence/handle |  |  |  |  | 待执行 |
| GPU/DDR/CPU/IO 并发压力 |  |  |  |  | 待执行 |
| consumer/present 阻塞 |  |  |  |  | 待执行 |
| 结果未知与幂等重试 |  |  |  |  | 待执行 |
| 证据丢失/轮转 |  |  |  |  | 待执行 |
| 相邻业务与长稳 |  |  |  |  | 待执行 |

## 6. 可复用产物：《需求—接口—资源—恢复方案评审包 V1》

提交一页结论、两张图和四张表：

1. 需求—场景—架构—接口—V&V 双向追踪矩阵；
2. 控制/数据/状态/电源/资源/证据六流图；
3. 正常、超时、复位、对账、降级状态图；
4. 模块责任卡与十一项 Interface Control Table；
5. resourceId/bufferId/fence/generation、avg/peak、P95/P99/max 和 headroom 预算表；
6. 竞争假设—支持—反证—缺失—实验表；
7. 验证矩阵与原始工件索引；
8. 200—300 字评审结论：通过/有条件通过/拒绝、关键风险、Owner、关闭证据与升级条件。

个人反思由你本人填写：

- 我本周最容易把哪一种局部 ACK、高利用率或恢复结果误认为业务完成/根因？
- 我的设计在哪个 reset、generation 或资源交接点最容易失去权威状态？
- 如果只能新增三个跨域关联字段或观测点，我会放在哪里，如何证明它们贯穿同一事务？
- 哪个 TBD 若不关闭就不应允许方案通过，为什么？

## 7. 提交与后续

本课编号 **week-16-friday**。请提交 5 道回顾题、六层知识地图、综合故障题、跨域时间表、完成阶梯、竞争假设、恢复设计、评审门禁、验证矩阵、《需求—接口—资源—恢复方案评审包 V1》和个人反思。新题不附参考答案、示范作答或预设根因；收到真实作答后再逐题批改。

使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。仓库、答卷、附件链接与批改公开，请只提交可公开且已脱敏的学习材料。编辑原答卷或本人以 `[补交]` 开头评论会触发新版本评审。

周六只围绕 Day 49—52 做巩固、综合案例、独立作答、画图与证据链训练；不新增普通专题、不推进 Day 53。

## 附录：21 项 T12T 技能覆盖检查

技能来源：`F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/`。本次先读取三个通用入口，再读取其余 18 个 `SKILL.md`，已完成全部 21 项覆盖检查。

| 技能 | 本次适用性与处理 |
| --- | --- |
| t12t-cockpit-diagnosis | 适用，深入：主链、最早断点、证据等级与竞争假设 |
| t12t-log-analysis | 适用，深入：跨域时基、generation、未观测边界与第一断点 |
| t12t-platform-architecture | 适用，深入：Guest/Host/Hypervisor/MCU/外设边界和六条路径 |
| t12t-display-black-freeze | 适用：present、scanout、屏端可见和当前新鲜帧完成语义 |
| t12t-touch-input | 材料不足：相邻业务回归需覆盖输入，本题无触摸原始证据 |
| t12t-avm-camera-stream | 适用：控制请求、四路 source、buffer、首帧和用户画面边界 |
| t12t-power-sleep-str | 适用：STR attempt、ready barrier、供电/恢复代际 |
| t12t-audio-path | 条件适用：共享资源与相邻业务回归；本题无音频故障证据 |
| t12t-stability-crash-reset | 适用：失效层级、VM/device reset、恢复半径与连续性 |
| t12t-performance-jank | 适用，深入：deadline、GPU/DDR、队列、P95/P99 与单变量实验 |
| t12t-ethernet-sgmii | 材料不足：当前案例无有线链路或 carrier/L3 证据 |
| t12t-wireless-phone-link | 材料不足：当前案例无 STA/SoftAP/手机互联证据 |
| t12t-cross-domain-msg | 适用，深入：sequence、freshness、ACK、超时、readback 与拒旧 |
| t12t-boot-hmi | 适用：新 generation 依赖就绪、早到请求和 current first frame |
| t12t-log-storm | 条件适用：性能采集与证据轮转；无 producer/速率实证 |
| t12t-usb-typec-storage | 不适用：本周范围无 USB、块设备或卷生命周期证据 |
| t12t-virtualization-tee | 适用：Guest/Host、虚拟设备、共享资源与安全隔离边界 |
| t12t-db-ke-forensics | 条件适用：若出现 fatal/reset 才执行固定八步；当前无异常包 |
| t12t-mcu | 条件适用：挡位、电源与状态源；本题无 MCU 协议字典/实机日志 |
| t12t-tpm-triage | 适用，深入：首轮牵头、供证、修复、策略与验证责任 |
| t12t-tpm-5y8d | 暂不展开：没有真实根因、逃逸原因和修复验证，不强造 5Y/8D |

本次实际深入使用平台架构、日志证据、性能、跨域消息与 TPM 分责参考手册；AVM、显示、STR、启动、稳定性和虚拟化专项用于约束案例与恢复边界。关键证据缺口是现车车型/SoC/build、部署与物理映射、协议字典、资源与性能基线、完整实机 trace、授权故障注入以及学习者真实作答。补齐前只能形成可证伪假设、评审条件和初步责任域，不能宣布现车根因、验证通过或个人掌握。
