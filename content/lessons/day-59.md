# Day 59 — STR 后黑屏根因分析：电源连续性、显示分层与最早断点

计划学习日期：2026-11-11，星期三，Asia/Shanghai；Week 18。建议用时 60 分钟。完整扫描全部状态答卷 Issue 与评论后，没有新的真实作答；能力评价仍为第二阶段，Day34—59 的个人掌握待验证。本课是综合交付中的故障分析训练，课程材料与教学构造记录不代表现车结论。

目标产物：《STR 后黑屏根因分析 V1》。当前车型、SoC、软件构建、屏幕映射、Yocto/Android/MCU/TBox/Hypervisor 实际连接、STR 时限、屏电与背光策略、显示器件及安全目标均**待项目确认**；下文只给通用诊断方法和明确标注的教学构造案例。

## 1. 官方依据与适用边界

- [AAOS Power Management](https://source.android.com/docs/automotive/power/power) 与 [Power Policy](https://source.android.com/docs/automotive/power/power_policy)：核对 VHAL/CPMS 电源状态协调和显示策略的通用机制；不能据此认定本车由哪一个域控制屏电。
- [Linux 设备电源管理](https://docs.kernel.org/driver-api/pm/devices.html)：核对 suspend/resume 设备回调及 late/noirq 阶段。实际驱动顺序、失败处理以本版内核与代码为准。
- [AOSP 图形架构](https://source.android.com/docs/core/graphics/architecture)、[BufferQueue/Gralloc](https://source.android.com/docs/core/graphics/arch-bq-gralloc)、[Sync Fence](https://source.android.com/docs/core/graphics/sync)、[HWC](https://source.android.com/docs/core/graphics/implement-hwc)：核对生产、消费、合成及同步边界。Android 图层链不能直接证明 Yocto、SerDes、面板和背光状态。
- 课程链：[Day 38](../lessons/day-38.html) 的 STR 状态、[Day 40](../lessons/day-40.html) 的显示首帧、[Day 41](../lessons/day-41.html) 的 VM 故障域、[Day 54](../lessons/day-54.html) 的可观测性、[Day 58](../lessons/day-58.html) 的方案合同。它们是前置方法，不是这次的实车证据。

## 2. 一小时路线与回顾

| 时间 | 学习活动 | 当段产物 |
| --- | --- | --- |
| 0—10 分钟 | 独立回答五题 | 现象、运行周期和完成语义 |
| 10—30 分钟 | 两个核心概念：STR 连续性；显示四层 | 分层图、关键状态 |
| 30—50 分钟 | 推演教学构造证据、竞争假设和最早断点 | 故障分析表 |
| 50—60 分钟 | 独立完成另一道故障分析作业 | V1 分析包 |

回顾题（先独立作答）：

1. 如何用 bootId、uptime、suspend entry/exit、VM generation 区分真正 STR、suspend abort、Guest 重建与整机冷启动？
2. “唤醒命令 ACK”“服务 ready”“图层 present”“屏端真实可见”分别证明什么？
3. Android 截图正常而实屏黑，能排除哪些层，不能排除哪些层？
4. 多域时钟无法严格排序时，如何用 powerCycle、bootId、device generation、displayId、frameId 与事件关联？
5. 恢复后亮屏为什么不能单独证明先前根因？

## 3. 两个核心概念

### 3.1 先判运行周期，再找恢复屏障

黑屏首先要确定“哪一次开屏”：本次是否真的进入 STR 并成功 resume，是否 suspend 在 late/noirq 阶段中止，是否只发生 Guest/显示服务重建，还是 Host/SoC/MCU 复位。采集同一 power cycle 下的电源状态请求、各域 suspend/resume 边界、bootId/uptime、VM generation、设备 reset reason、显示策略与屏电读回。单个“resume”字样、单条 wakeup reason 或用户感觉“像唤醒”都不够。跨域墙钟先说明同步源、偏差与采集缺口；时间误差区间重叠时，改用域内单调序、握手 ID 与代际建立偏序，不强行排出唯一先后。

正常路径按当前项目配置核对：唤醒权威源/MCU 或其他电源控制者 → Host/设备恢复 → 虚拟接口及 Guest（若参与）→ 图形生产/合成 → 显示控制器与外链 → 面板/背光。TBox 通常应先通过现车拓扑确认是否在本显示主链或仅提供外部唤醒条件，不能凭概念图将其写为根因域。每条依赖都记录 request、ACK、ready、状态读回、超时、重试、取消和代际。ACK 是接收或协议阶段完成；业务完成必须由当前显示目标的可见性证据和项目验收判据证明。

~~~mermaid
stateDiagram-v2
  [*] --> Active
  Active --> Quiescing: suspend 请求+powerCycle
  Quiescing --> Suspended: 所有依赖确认
  Quiescing --> Active: abort/超时并记录原因
  Suspended --> Resuming: 有效唤醒
  Resuming --> Visible: 电源/设备/图形/物理显示逐层读回
  Resuming --> Unknown: 截止期内无可见证据
  Unknown --> Visible: 当前代重新验收
  Unknown --> Degraded: 有界重试失败或安全策略触发
  Visible --> Quiescing: 下一次 suspend
  Degraded --> Active: 受控恢复后重新验收
~~~

### 3.2 黑屏按内容、合成/scanout、物理链路、屏电四层拆解

| 层 | 关键输入/输出与证据 | 常见误判 |
| --- | --- | --- |
| 内容源 | 当前 session 的新鲜 buffer、frameId、fence、producer/consumer 日志、截图 | 截图正常只覆盖已被采集的逻辑画面，不证明实屏可见 |
| 合成与 scanout | Surface/BufferQueue、SF/HWC 或相应 Host compositor、plane/CRTC、present/vblank、目标 displayId | submit、present callback 不能证明目标物理面板收到有效像素 |
| 物理传输与面板 | serializer/deserializer 或其他实际链路的 link/lock、CRC/错误计数、panel init/readback、屏端采样 | link up 不等于当前像素正确；器件与 ID 先按本车确认 |
| 电源与背光 | rail、reset、enable、PWM/亮度、背光/面板状态读回及策略 | 屏电请求 ACK 不等于 rail 达标或亮度可见 |

控制流是唤醒与显示模式决策；数据流是新鲜像素和 buffer/fence；状态流是权威 power/display/VM generation 及读回；电源流是 rail、reset、backlight；资源流是 handle、DMA、plane 与链路占用；证据流是每一交接的原始工件。先确定目标屏的物理 ID、Guest displayId 与 Host connector 的映射，才能比较“截图正常”“另一屏正常”和“这块屏黑”。比较同版本同条件的正常唤醒，定位**最后一个被证实正常的节点**及其后的**第一个被证实异常的节点**；缺记录应标 unknown，不能当成未发生。

~~~mermaid
sequenceDiagram
  participant P as 唤醒权威/MCU·待确认
  participant H as Yocto Host/设备·待确认
  participant V as Hypervisor/虚拟接口·若参与
  participant A as Android Guest/图形·若参与
  participant D as scanout/物理链路
  participant B as 面板/背光
  P->>H: wake(powerCycle, generation)
  H-->>P: ACK 仅证明本跳接收
  H->>H: resume 驱动、电源与设备读回
  H->>V: 新代接口/资源 ready
  V->>A: 当前代显示设备可用
  A->>D: 当前 frameId + buffer/fence + displayId
  D->>B: scanout、链路训练、面板/背光使能
  B-->>H: 物理状态/可见性读回·方式待确认
  Note over P,B: 业务完成须同一目标屏在当前代满足可见判据
  opt 超时/局部复位/旧回调
    H->>H: 冻结旧事务，隔离旧代资源，查询权威状态
    H->>D: 最小安全恢复，限次重训/重建
    D-->>H: 读回并重新验收，失败转降级/升级
  end
~~~

## 4. 教学构造案例：STR 后中控黑屏

以下 E1—E10 **均为教学构造数据**，不对应真实车辆。假设某配置下中控由 Host 显示输出链送屏，Guest 负责画面内容；这只是训练前提，实际拓扑必须确认。现象：一次唤醒后中控持续黑，仪表正常。目标时限、仪表与中控资源隔离方式均待确认。

| 证据 | 构造记录 | 可证明/不能证明 |
| --- | --- | --- |
| E1 | 同一 bootId B7、powerCycle P12，Host 记录 suspend entry、低功耗驻留及 resume exit；无新 Host boot | 支持本次真正 STR；仍需核查采集完整性 |
| E2 | MCU/电源权威发 wake(P12)，Host 返回 ACK，rail 读回达到配置范围 | 支持接收和部分电源恢复；不证明显示链或背光 |
| E3 | Guest VM generation G5 前后不变，Guest 图形服务 ready | 降低 Guest 重建可能性；不证明内容到屏 |
| E4 | 当前 frame F221 经 BufferQueue 消费，fence signal，Guest 截图含正确页面 | 内容源在截图边界可用；不证明目标物理屏 |
| E5 | 中控 displayId 2 的 HWC present 与 Host scanout/vblank 计数继续增长，仪表 displayId 0 正常 | 合成/提交有推进；计数不证明中控像素送达 |
| E6 | 中控背光使能和亮度读回在配置范围，面板 rail 正常 | 排除一部分全断电/零亮度假设；读回点需核对 |
| E7 | 中控物理链路的接收端 lock=0、CRC 错误计数上升；仪表独立链路 lock=1 | 首个明确异常落在中控物理传输层；不定位具体器件或为何未锁定 |
| E8 | resume 路径记录 display-link ready 缓存值=true，跳过了本轮 retrain；同代接收端 lock 读回为 false | 支持状态与物理读回不一致；缓存为何未失效仍需代码/trace |
| E9 | 在受控台架中，只清除该 ready 缓存并执行当前代 retrain，中控 lock 恢复且当前帧实屏可见 | 支持机制假设的构造差分；真实车需复现和回归 |
| E10 | 一次整机重启后中控恢复，重启前部分 link trace 因轮转丢失 | 是后续恢复，不足以证明 Host 或 Guest 是根因；缺片要保留 |

**分层推理：**先固定 B7/P12/G5、displayId 2、F221 和各域时间误差。E1 支持 STR 连续性；E4—E6 支持内容、提交、部分屏电状态，但它们都不是可见性证明。E7 是第一项可证实的异常观测：中控接收端未 lock；E8 给出上游可能机制——旧 ready 缓存使重训被跳过。E9 的受控差分加强这一假设；在教学构造内可提出“resume 未以物理读回校验缓存并重训”的候选发生原因，尚需驱动代码、完整 trace 和多次注入验证。触发条件是 STR；直接失效是中控物理链路未恢复；用户后果是黑屏；E10 只是清理。仪表正常只缩小共享故障域，不能单独排除上游共用资源问题。

**竞争假设与区分实验：**H1 为内容/合成未产生当前帧，检查带 frameId 的 producer→HWC→scanout 与同一 displayId 的截图/读回；H2 为背光/面板电源失效，逐点测 rail、enable、PWM 与屏端读回；H3 为物理链路训练/锁定失败，检查 TX/RX 状态、错误计数、训练调用和分代缓存；H4 为目标屏映射错位，核对 Guest displayId→Host connector→线束/面板的版本化映射。E4—E8 倾向 H3，却仍要核查观测点是否真实对应中控。采集缺片不能作 H1/H2 的全局排除证据。

**恢复设计：**先保护证据与当前代，禁止旧 powerCycle/设备代的 ready、完成回调和显示资源推进新事务；查询当前电源权威、panel/链路物理状态。在现车安全策略允许时，对最小故障域做有界 retrain，必要时设备 reset，再按依赖屏障恢复 scanout/图形，最后以目标屏当前帧可见性验收。超时若无法判断动作是否已经执行，冻结重试并读回设备状态；仍 unknown 时按项目安全策略降级或升级，不能无限重训或仅改 UI 为“已恢复”。限次、间隔、总预算与降级形态都待项目确认。

| 架构节点/接口 | TPM 应问与所需证据 | 建议责任域 | 验证判据 |
| --- | --- | --- | --- |
| 电源权威→Host | 本轮 STR/abort/复位是哪一种？powerCycle、状态握手、rail 原始读回 | 电源/MCU + Host 首轮 | 同一周期状态一致 |
| Guest→compositor→scanout | F221 是否送到目标 displayId？buffer/fence、present、plane/CRTC、截图 | Guest 图形 + Host 显示 | 当前代帧跨每个接口推进 |
| TX→RX→面板/背光 | lock 何时失效？训练调用、寄存器、CRC、panel/背光读回 | 显示驱动/硬件直接修复候选 | 链路及可见结果均恢复 |
| 恢复协调/验证 | 缓存何时失效？旧回调是否拒绝？不同版本、并发、失败注入记录 | 架构/集成 + 测试验证 | 有界恢复、零旧代污染、相邻业务通过 |

责任表只给首轮协查域。最终根因 Owner、触发方、直接修复方和接口策略方须按真实第一违规交接和代码/硬件证据划定；未知人员与期限待确认。发生原因与测试逃逸原因分开查，不能强行补足 5Y 或宣称实车已修复。

## 5. 可执行验证与证据合同

所有试验先冻结车型/SoC、硬件料号、软件 build、线束/屏映射、测试温度与供电、权限和安全条件；以下为**待执行**方案。每轮保存 caseId、testId、build/config、bootId、powerCycle、VM/device generation、displayId、frameId、源时间与误差、原始 trace/寄存器/照片或仪器工件 URI/hash、预期与实测、执行者。可见性判据及量化时限由项目需求确定。

1. 正常冷启动、正常 STR、suspend abort、Guest 单独重建分别执行，确认各自状态机和目标屏首个当前帧；不得把不同路径混为“唤醒”。
2. 对目标链路单独注入 retrain 失败、RX 不 lock、背光失效、内容源停帧、显示映射错误和 trace drop；逐一记录最后正常点、第一异常点与 unknown。对照另一个屏，但检查共享资源。
3. 在不同唤醒时序下重复、乱序、超时、旧代 callback/ready、设备 reset、取消；验收旧代零污染、幂等、有界恢复和明确降级。
4. 与音频、AVM、导航、其他屏及系统负载并发；核对共享电源、DDR/GPU、显示资源、相邻业务和安全功能。混合版本/回滚、长稳与多次循环需执行。
5. 修复候选要做同环境 A/B：原版本可复现、只改动目标机制后差分成立、异常注入无回归，再检查最坏场景和真实用户可见结果。未执行或证据不可读一律“待验证”。

闭环记录：现象和影响 → 版本/运行周期 → 正常链 → 最早可证实断点 → 竞争假设与反证 → 责任边界 → 最小修复 → 正常/异常/恢复/相邻业务回归 → 原始证据与有权关闭。若新证据与假设冲突，重新打开问题。Day58 方案的需求—接口—预算—验证矩阵应能反向链接本分析的每一个验收点。

## 6. 独立作业：《STR 后黑屏根因分析 V1》

请用你有权分享的脱敏真实案例，或以下**仅给症状的独立题**作答：车辆从低功耗状态返回后，中控黑屏，仪表显示正常；某服务报告 ready。题目没有预设根因、示范作答或参考答案。请独立提交：

1. 定义车型/版本/证据可信度与目标屏映射；说明怎样区别真 STR、abort、Guest/Host/SoC 重启，哪些数据缺失会使结论只能为 unknown。
2. 画 MCU/电源权威、Yocto Host、Hypervisor、Android Guest、TBox（参与与否待确认）、显示外设边界及控制、数据、状态、电源、资源、证据六流；附正常与异常 Mermaid 时序/状态图。
3. 给出从 wake request/ACK 到目标屏可见新帧的阶段完成表，列超时、复位、旧消息、取消与幂等规则；指出每个节点的原始日志/读回。
4. 列至少三项竞争假设、支持与反证所需资料、最早可证实断点的判定方式；明确直接失效、此前触发、加剧因素和后续清理，不能凭 ready 或重启恢复下根因结论。
5. 设计最小安全恢复、失败降级、预算与升级边界；给可执行的正常、STR、abort、局部重建、旧代、资源并发、混合版本、相邻业务测试和证据工件。
6. 产出 TPM 协查表：首轮牵头、触发方、直接修复方、接口/恢复策略方、验证方各问什么、取什么、何时可关闭；未知责任和时限标待确认。

个人反思由你本人填写：本题最可能让你误判的是哪一层完成信号？哪份证据最能改变你的初始假设？

## 7. 提交、技能覆盖与独立总结

本课编号 **day-59**。在页面末尾选择“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。可先脱敏；答卷及附件将公开同步。没有真实作答时只记待验证；收到后先逐题批改再安排新任务。

本次从 **F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/** 读取并检查了全部 21 项 SKILL.md。深入使用综合路由、跨域日志、平台架构、显示黑屏、STR 电源、启动 HMI、稳定性复位、虚拟化、MCU、跨域消息和 TPM 分责，并按其参考手册核查分层观测。DB/KE 用于复位异常的取证候选；AVM、性能、音频用于并发及相邻业务。触摸、以太网、无线、日志风暴、USB 在本构造主链没有直接证据，保留适用性/回归检查；5Y/8D 待真实原因和验证数据，不代填。关键证据缺口为现车版本与拓扑、目标屏映射、原始跨域日志、物理测量、需求时限和测试结果。

**独立总结：**本课用户现象为教学构造的 STR 后中控黑屏。涉及电源权威、Host/Guest 图形、虚拟边界和目标屏外链。构造 E1—E10 支持本轮为 STR、内容与合成已有推进、物理接收端未锁定，最早明确异常在中控物理传输层；旧 ready 缓存跳过重训是待代码与差分试验进一步确认的机制假设。对构造中的直接失效置信度较高，对真实车辆根因无可给出的置信结论。下一步先固定版本和目标屏映射、统一运行周期与时间，再取 TX/RX 训练、寄存器、屏电及逐接口帧证据，按差分试验划定直接修复方；TPM 由系统集成牵头协调电源/MCU、Host/Guest 图形、显示硬件与测试。只有当前帧可见、异常恢复有界、旧代零污染及相邻业务回归具备原始证据，才能讨论关闭。
