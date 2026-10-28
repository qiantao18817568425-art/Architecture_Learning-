# Day 51 — 方案设计 I：需求分解、场景边界与系统级验收合同

正式安排日期：2026-10-28，星期三，Asia/Shanghai。Week 16。能力阶段仍为第二阶段“系统链路与问题分析”，从本课开始衔接阶段三的方案设计方法；发布材料不等于能力升级。目标深度：L3，能把一句模糊功能诉求分解为可追踪、可验证、可恢复的系统合同，并能说明跨域边界与验收证据。总用时约 60 分钟。

执行前已完整扫描仓库开放和关闭状态的答卷 Issue、全部评论与附件，没有发现授权学习者的新答卷或补交。本课及 Day 34—50 均等待真实作答评审。

## 1. 官方依据与项目边界

官方资料核验日期：2026-10-28。

- [NASA Systems Engineering Handbook：System Design Processes](https://www.nasa.gov/reference/4-0-system-design-processes/)：从 stakeholder expectations、ConOps/use cases 出发，递归形成 technical requirements、logical decomposition 和 design solution；需求应覆盖输入、输出、约束、接口、功能、性能与行为。
- [NASA Systems Engineering Handbook：Appendix C/D](https://www.nasa.gov/reference/system-engineering-handbook-appendix/)：好的需求应清晰、单一、完整、可验证，并带容差、依据和假设；Verification Matrix 用唯一标识把“shall”需求连接到验证方法与证据。
- [NASA Software Engineering Handbook：Software Requirements](https://swehb.nasa.gov/spaces/SWEHBVB/pages/32604503/SWE-050%2B-%2BSoftware%2BRequirements)：技术需求应唯一、定量、可测，清晰完整、一致，并可追踪到更高层需求。
- [Automotive SPICE Process Reference Model 4.5：ENG.2](https://automotivespice.com/fileadmin/software-download/automotiveSIG_PRM_v45.pdf)：系统需求分析应把客户需求转为系统技术需求，分析正确性与可测试性，并建立双向追踪；验证准则需说明定性和定量的验证条件。

当前没有指定车型、SoC/build、现车拓扑、DBC/IDL、功能安全等级、目标时延、温度/电源边界和实机基线。下文的 AVM 场景、阈值变量和接口名称用于训练方法；任何项目数值均标为 TBD/待项目确认，不写成现车事实。

## 2. 一小时主线

| 时间 | 学习任务 | 输出 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 5 题 | 区分需求、设计、ACK、完成和证据 |
| 10—20 分钟 | 核心概念一 | 需求分层与双向追踪 |
| 20—30 分钟 | 核心概念二 | 场景边界与系统级验收合同 |
| 30—50 分钟 | 工程案例 | “挂 R 挡后显示 360”从模糊诉求到可验收合同 |
| 50—60 分钟 | 可复用产物 | 《需求—场景—验收—证据追踪矩阵 V1》 |

回顾题：

1. Day 50 的 `QoS request accepted`、GPU fence、present 和 business accepted 为什么是四种不同完成语义？
2. “系统要快”“启动后尽快显示”为什么不能直接作为测试通过判据？
3. requirement、architecture decision 和 implementation detail 应怎样分开？
4. 为什么 happy path 通过仍不能说明 reset、旧消息、并发和降级边界正确？
5. 没有统一 generation、request ID 和单调时间时，跨 Android、Yocto、MCU 的日志能否直接证明因果？

## 3. 核心概念一：从愿望到可追踪的系统需求

需求不是“把某个模块做出来”，而是系统在已定义边界内必须提供的可观察能力。先写 stakeholder need 与 ConOps，再形成 system requirement；随后按功能、性能、接口、状态/模式、安全、资源、诊断与恢复分解到 subsystem/interface requirement。设计方案回答“如何实现”，验证合同回答“怎样证明满足”。

### 3.1 六层分解

| 层级 | 核心问题 | 必须产出 |
| --- | --- | --- |
| 利益相关方需要 | 用户为何需要、什么算成功 | Need ID、场景、MOE、约束、批准者 |
| 运行场景/ConOps | 谁在什么环境、状态和生命周期中使用 | actor、前置、触发、主流程、异常、结束 |
| 系统需求 | 系统必须做什么、做到多好 | 唯一 ReqID、shall、量化判据、来源 |
| 架构分配 | 哪个域/模块承担什么职责 | Android Guest、Yocto Host、MCU、TBox、Hypervisor、外设边界 |
| 接口与派生需求 | 每次交接如何定义输入、输出、时序和错误 | IDL/DBC/schema、ACK、deadline、generation、恢复 |
| 验证与确认 | 怎么证明“按规格做对”且“真实场景做的是对的” | verification method、validation scenario、证据与关闭准则 |

~~~mermaid
flowchart TD
  N[Stakeholder need / MOE] --> C[ConOps and bounded scenarios]
  C --> S[System shall requirements]
  S --> F[Functional / performance / interface / state / recovery]
  F --> A[Architecture allocation]
  A --> X[Subsystem and interface contracts]
  X --> V[Verification criteria and evidence]
  V --> B[Business validation in intended use]
  B -. gap or change .-> N
  S -. bidirectional traceability .-> V
  A -. rationale and assumptions .-> S
~~~

### 3.2 需求质量闸门

每条需求至少检查：唯一、必要、单一、明确、可行、量化、可验证、可追踪、无矛盾、层级正确。把“快速、稳定、友好、正常、适当、尽快、等”改为变量和边界；变量暂未知时写 `TBD-xxx`，同时记录 Owner、决策依据和关闭日期，不把猜测固化为事实。

示例对比：

- 模糊：挂 R 挡后系统快速显示 360。
- 可分析：在前置状态 P、有效倒挡事件 E、当前 powerCycle/VM generation G 下，系统应在 `T_total <= TBD_AVM_LATENCY` 内提供与当前 E/G 匹配的新鲜四路融合画面；若任一必需输入或链路在 `T_fault <= TBD` 内不可用，应进入定义的降级状态并输出可追踪故障证据。

这仍不是最终需求：P、E、新鲜度、四路完整性、画面质量、降级方式、恢复条件、显示目标、计时起止点和安全边界都要展开。

## 4. 核心概念二：场景边界与系统级验收合同

### 4.1 场景要有边界，不只写主流程

一份可验收场景至少包含：

1. actor 与目标用户结果；
2. 车型/配置/build、power state、boot/VM/process/device generation；
3. 前置条件和禁止条件；
4. 触发、去抖、取消与并发事件；
5. 控制路径、数据路径、状态路径和电源路径；
6. 正常、边界、异常、恢复和退出；
7. 输入有效性、timestamp/sequence、freshness；
8. deadline、容差、资源与安全约束；
9. 降级、重试、幂等、旧消息拒绝、权威状态重取；
10. 可观察证据、验证方法和 business accepted 判据。

### 4.2 四条路径必须分画

| 路径 | AVM 示例 | 验收问题 |
| --- | --- | --- |
| 控制 | 倒挡事件 → 仲裁 → show/start → pipeline/layer | 谁请求、谁批准、取消如何传播？ |
| 数据 | camera frame → buffer/fence → stitch → present/scanout | 是否为当前 generation 的新鲜、完整、正确数据？ |
| 状态 | source ready、session active、first frame、visible、degraded | 谁是权威状态，何时允许迁移？ |
| 电源 | rail/reset/clock → Host/Guest/device ready | 当前模式是否允许服务，resume 后如何重建？ |

### 4.3 ACK 到业务完成的阶梯

| 里程碑 | 可以证明 | 不能替代 |
| --- | --- | --- |
| request received | 对端收到请求 | 语义合法、已执行 |
| request accepted / ACK | 当前接口接受处理 | 下游 ready、物理输出 |
| local applied | 本模块状态已更新 | 下游消费和端到端结果 |
| device/data complete | 设备或数据任务完成 | 当前用户场景可见且正确 |
| state readback | 权威状态可读取 | 新鲜度、画面/声音质量、deadline |
| business accepted | 当前 generation 的结果在场景边界内正确、及时、可恢复 | 不能反推所有上游从未发生异常 |

## 5. 工程案例：挂 R 挡后“360 已启动”但屏幕仍是旧画面

以下为构造案例，不代表当前车辆，也不预设练习结论。

### 5.1 模糊需求暴露的问题

原句：“挂 R 挡后 360 在规定时间内出现。”

缺口包括：什么事件算挂 R；计时从 CAN/MCU/Host/应用哪一层开始；冷启动、STR resume、VM recreate 是否同一预算；360 是 request accepted、AVM session active、首帧、四路融合帧还是物理屏可见；旧帧能否算出现；一路缺失如何降级；退出 R 挡、重复事件和反向乱序如何处理；哪些日志可证明通过。

### 5.2 系统链路与职责

| 节点 | 输入/职责 | 输出/证据 | 边界 |
| --- | --- | --- | --- |
| 车辆信号/MCU | 接收并资格化挡位事件 | sequence、source timestamp、有效性 | 当前 DBC/去抖待确认 |
| Yocto Host/gateway | 解析、缓存、发布目标状态 | producer sequence、publish、generation | channel alive 不等于 topic fresh |
| Android/AVM policy | 校验场景、仲裁 show/start | request ID、decision、reject/defer reason | ACK 不等于画面 |
| Camera/Host pipeline | 启动四路采集与处理 | per-camera sequence、PTS、buffer/fence | 某一路 FPS 不代表四路完整 |
| Hypervisor/共享资源 | 隔离 VM 与共享 buffer/device | VM/device generation、mapping、queue | 旧句柄不得跨代生效 |
| Weston/SF/HWC/DRM | 合成、present、scanout | layer、fence、present/vblank | present 不自动证明用户可见 |
| 屏端/用户结果 | 当前画面物理可见 | 新鲜度、质量、deadline、降级状态 | 最终 business accepted |

### 5.3 构造证据账本

| 证据 | 构造观察 | 当前最大解释范围 |
| --- | --- | --- |
| E1 | 当前 R 挡 sequence 到达 gateway，topic freshness 正常 | 上游事件与发布推进；不证明业务消费 |
| E2 | AVM policy 对 request 返回 accepted | 请求被接受；不证明 pipeline 或显示完成 |
| E3 | Camera 四路均有递增 frame sequence | 采集在推进；不证明 buffer 交付/融合/可见 |
| E4 | 旧 VM generation 的 surface handle 在 resume 后被重用 | 支持代际错误假设；需验证 consumer 是否实际绑定旧对象 |
| E5 | 当前 generation 首帧 fence signaled，但 present ID 未对应物理屏 | 数据阶段完成；缺少显示映射/scanout闭环 |
| E6 | 用户看到旧画面，切换页面后恢复 | 证明恢复动作覆盖一段链路；不能单独确定根因 |

最早可证实的断点只能写成：**当前 generation 的新鲜帧已经在上游产生，但从共享 buffer/surface 到目标物理屏的完成链未闭环**。E4 和 E5 支持“generation/映射/消费边界”优先，但还不能唯一确定根因。

### 5.4 竞争假设与区分实验

| 假设 | 所需支持证据 | 反证/最小实验 |
| --- | --- | --- |
| H1 旧 surface/buffer 跨代复用 | handle、producer/consumer generation、bind 记录 | 强制当前代重新分配并核对同一 frame ID |
| H2 目标 display/layer 映射错误 | physical screen、displayId、output、layer、present ID | 固定图案分别注入当前 producer 与目标 output；需授权 |
| H3 consumer 背压或 fence 未消费 | dequeue/acquire/present wait 和 owner | 保持 producer 不变，隔离 consumer 并追同一 fence |
| H4 topic 新鲜但业务状态机 guard 错误 | subscriber callback、cache、state transition | 注入递增脱敏 sequence，核对 guard 输入输出 |
| H5 电源/设备 ready 晚于 request | power/display/device ready 与 request 单调时间 | ready 后仅重放当前代请求，观察首帧链 |
| H6 四路采集虽活跃但融合输入不完整 | 每路 frame/PTS、stitch input/output | 单路受控替代源，检查融合质量与降级；需授权 |

### 5.5 状态、超时与恢复合同

~~~mermaid
stateDiagram-v2
  [*] --> Inactive
  Inactive --> Requested: valid current-generation trigger
  Requested --> Accepted: policy ACK
  Accepted --> DataReady: all required inputs current and fresh
  DataReady --> Presented: current frame present/scanout evidence
  Presented --> BusinessAccepted: correct + fresh + within deadline
  Requested --> Degraded: prerequisite missing / timeout
  Accepted --> Degraded: pipeline or input timeout
  DataReady --> Degraded: present deadline missed
  Degraded --> Recovering: authoritative state and resources rebuilt
  Recovering --> Requested: replay current intent only
  Recovering --> Inactive: trigger no longer valid
  BusinessAccepted --> Inactive: cancel / exit
~~~

超时从场景触发开始，不因局部 retry 重置。reset/reconnect 后必须重新取得权威挡位与当前 generation，拒绝旧 request/frame/surface；重放要带幂等键。恢复成功后仍需验证当前画面新鲜、四路质量、deadline 和相邻业务，不以“服务活着”结束。

## 6. 系统级验收合同模板

| 字段 | 必填内容 |
| --- | --- |
| 需求身份 | ReqID、版本、来源 Need/ConOps、rationale、Owner、批准者 |
| 范围 | in-scope、out-of-scope、车型/配置/build、假设、TBD/TBR及关闭计划 |
| 场景 | actor、前置、禁止条件、触发、并发、取消、退出 |
| 分层职责 | Android Guest、Yocto Host、MCU、TBox、Hypervisor、外设输入/输出 |
| 接口 | source、consumer、schema/DBC/IDL、request/sequence/timestamp、generation |
| 完成语义 | received、ACK、applied、device/data complete、readback、business accepted |
| 时间与质量 | 起止点、deadline、P95/P99/最大值、freshness、容差、质量门槛 |
| 异常恢复 | timeout、retry、idempotency、cancel、degrade、reset、旧消息、恢复出口 |
| 证据 | 日志、counter、trace、状态快照、物理输出、时钟与误差、保存位置 |
| V&V | verification 方法/用例、validation 场景、通过判据、回归、签署 |

Verification 回答“是否符合技术要求”，Validation 回答“在预期使用环境中是否满足真实需要”。模块单测、接口 ACK、系统端到端和用户场景确认不可互相替代。

## 7. 可执行验证矩阵

| 用例 | 变量/步骤 | 必采证据 | 通过判据 | 状态 |
| --- | --- | --- | --- | --- |
| 正常热态 | 当前 generation 触发一次 | 全链 request/frame/present ID | business accepted 在 TBD deadline 内 | 待执行 |
| 冷启动 | 服务未 ready 前后触发 | boot/VM generation、queue/replay | 无丢失、无旧代执行、当前意图完成 | 待执行 |
| STR resume | request 早到/晚到各一次 | suspend attempt、ready barrier、首帧 | 只重放当前意图，恢复预算满足 | 待执行 |
| VM recreate | in-flight 时重建 Guest | VM/device/surface generation | 旧资源隔离，当前状态重取 | 待执行 |
| 消息异常 | 丢包、重复、乱序、迟到 | sequence、source/arrival time、cache | 幂等、freshness 与超时语义正确 | 待执行 |
| 单路无帧 | 任一路输入失效 | per-camera frame/PTS、降级状态 | 在 TBD 内明确降级且无假正常 | 待执行 |
| 显示阻塞 | consumer/present 延迟 | fence、queue、present/vblank | 超时可见、恢复有界、旧帧不冒充 |
| 退出竞态 | R 挡退出与首帧并发 | cancel ID、state transition | 取消后不显示过期场景 |
| 长稳与并发 | 导航/视频/音频并发 | deadline、resource、相邻业务 | 关键场景通过且无相邻回归 |
| 证据缺失 | 关闭一个非关键观测点 | health/coverage status | 明确“不具备判定条件”，不误判通过 |

## 8. 今日可复用产物：《需求—场景—验收—证据追踪矩阵 V1》

至少建立五列追踪：`Need/ConOps → System Req → Architecture allocation → Interface/subsystem Req → Verification/Validation evidence`。每一行都必须有唯一 ID、双向链接、Owner、状态、版本和变更影响；每个 TBD 都要有关闭人和关闭条件。另附四流图、状态机、ACK 完成阶梯、异常恢复表和验证矩阵。

## 9. 今日独立练习

新题不附参考答案、示范作答或预设根因。

场景：产品只给出一句“用户挂 R 挡后应快速看到清晰的 360 画面，异常时不能长时间黑屏”。请独立完成：

1. 列出至少 12 个澄清问题，覆盖用户、车辆状态、生命周期、接口、时序、质量、安全、降级和验证；
2. 写 1 条 stakeholder need、2 条 system requirements、至少 6 条派生需求；所有未知数值用 TBD 管理；
3. 画控制、数据、状态和电源四条路径，标出 Android Guest、Yocto Host、MCU、Hypervisor 和外设边界；
4. 写出完整场景：正常、早到、迟到、取消、重复、乱序、STR、VM recreate、单路无帧和显示阻塞；
5. 定义 received/ACK/applied/device complete/readback/business accepted；
6. 保留至少五个竞争假设，并为每个假设写支持证据、反证和尽量单变量的实验；
7. 完成验证矩阵和双向追踪表，区分 verification 与 validation；
8. 写出首轮牵头、触发方、直接修复方、接口/恢复策略方和验证方；未知人员/期限保持待确认。

## 10. 提交说明

本课编号 **day-51**。使用页面末尾“上传／提交答卷”或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。请提交需求分解、四流图、状态机、完成阶梯、竞争假设、验证矩阵和《需求—场景—验收—证据追踪矩阵 V1》。个人反思由你本人填写：我过去最容易把“需求”“实现方案”还是“局部 ACK”误当成系统验收？

## 附录：21 项 T12T 技能覆盖检查

技能来源：F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/。本次先读取 `t12t-cockpit-diagnosis`、`t12t-log-analysis`、`t12t-platform-architecture`，再逐项读取其余 18 个 `SKILL.md`，已完成全部 21 项覆盖检查。

| 技能 | 本次适用性 |
| --- | --- |
| t12t-cockpit-diagnosis | 适用，深入：从现象到主链、最早断点和竞争假设 |
| t12t-log-analysis | 适用，深入：统一时基、generation、证据分级与缺口 |
| t12t-platform-architecture | 适用，深入：域边界、控制/数据/状态/电源路径与观测点 |
| t12t-display-black-freeze | 条件适用：AVM 的 present/scanout/物理屏验收边界 |
| t12t-touch-input | 条件适用：输入类需求可复用场景和完成语义；本课无触摸实证 |
| t12t-avm-camera-stream | 适用：R 挡—四路帧—融合—送显链路；无现车实证 |
| t12t-power-sleep-str | 适用：冷启/STR、ready barrier 和恢复预算 |
| t12t-audio-path | 条件适用：音频需求可复用 zone/route/物理输出合同 |
| t12t-stability-crash-reset | 适用：VM/process/device generation 与分层复位 |
| t12t-performance-jank | 适用：deadline、P95/P99、资源并发与端到端时延 |
| t12t-ethernet-sgmii | 条件适用：网络链路需求须分物理、carrier、L3、服务完成 |
| t12t-wireless-phone-link | 条件适用：角色、L2/L3、会话与业务激活合同 |
| t12t-cross-domain-msg | 适用，深入：topic freshness、sequence、ACK、旧消息和幂等 |
| t12t-boot-hmi | 适用：启动 generation、早到请求、first frame 与 HMI ready |
| t12t-log-storm | 条件适用：证据预算、轮转和可观测性不能破坏业务 |
| t12t-usb-typec-storage | 条件适用：设备/块/卷/App 的分层完成合同 |
| t12t-virtualization-tee | 适用：Guest/Host、virtqueue、共享对象和安全服务边界 |
| t12t-db-ke-forensics | 条件适用：异常包完整性和 build/symbol 约束应进入证据合同 |
| t12t-mcu | 适用：车辆事件、状态机、电源/心跳与协议字典边界 |
| t12t-tpm-triage | 适用，深入：需求 Owner、供证、行动项和关闭标准 |
| t12t-tpm-5y8d | 暂不展开：没有真实根因、发生原因和逃逸原因，不强造 5Y/8D |

本课实际深入使用：`t12t-cockpit-diagnosis`、`t12t-log-analysis`、`t12t-platform-architecture`、`t12t-cross-domain-msg` 和 `t12t-tpm-triage`；并用 AVM、显示、启动、电源、虚拟化、稳定性与性能专项约束案例边界。关键证据缺口：现车拓扑、车型/SoC/build、DBC/IDL、AVM/显示映射、项目 deadline/质量门槛、功能安全要求、跨域时钟误差、完整实机 trace 与真实作答。缺口关闭前只提供方法和待验证合同，不宣称现车方案通过。
