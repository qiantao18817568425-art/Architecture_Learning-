# Day 58 — 智能座舱域控制器入门架构方案：系统边界、六流图与验收合同

计划学习日期：2026-11-10，星期二，Asia/Shanghai；Week 18。能力评价仍在第二阶段；今天开始综合架构设计训练，材料发布不代表已经掌握。建议用时 60 分钟。本次先扫描全部状态的答卷 Issue 与评论，没有新的真实作答；既有作业的个人薄弱点仍待验证。

目标产物是《智能座舱域控制器入门架构方案 V1》的**可评审骨架**：让一项用户需要能沿场景、系统需求、部署边界、六流接口、资源/时序预算、异常恢复和验收证据走通。本课不指定某款车的实际拓扑。车型、SoC、软硬件构建、网关位置、TBox 参与方式、相机/屏幕/音频配置、协议、时限、资源上限与安全目标均**待项目确认**。

## 1. 官方依据与边界

- [NASA Stakeholder Expectations Definition](https://www.nasa.gov/reference/4-1-stakeholder-expectations-definition/)：用运行概念和场景界定用户期待、正常与故障运行、命令和数据架构。
- [NASA Logical Decomposition](https://www.nasa.gov/reference/4-3-logical-decomposition/)：把需求分解成逻辑功能、行为和可分配的架构元素。
- [NASA Design Solution Definition](https://www.nasa.gov/reference/4-4-design-solution-definition/)与[Interface Management](https://www.nasa.gov/reference/6-3-interface-management/)：候选方案、接口基线和变更影响应可追踪。
- [NASA Product Verification](https://www.nasa.gov/reference/5-3-product-verification/)：用客观证据证明需求与端到端接口符合性；偏差须处置。
- [AOSP Vehicle HAL](https://source.android.com/docs/automotive/vhal)、[AAOS Power Management](https://source.android.com/docs/automotive/power/power)、[Android Virtualization Architecture](https://source.android.com/docs/automotive/virtualization/architecture)：分别核对 Android 侧车辆属性、通用电源握手和虚拟设备边界。这些公开机制不证明现车采用相同部署、信号或时限。

## 2. 一小时路线

| 时间 | 任务 | 当段产物 |
| --- | --- | --- |
| 0—10 分钟 | 独立回答 5 道回顾题 | 场景与完成语义检查 |
| 10—30 分钟 | 学习“系统边界与六视图”“预算与验收合同” | 方案目录、跨域接口表 |
| 30—50 分钟 | 推演构造故障和两个候选设计 | 最早断点、取证/恢复与权衡表 |
| 50—60 分钟 | 独立写 V1 方案骨架 | 可提交的架构方案与待确认清单 |

回顾题（先独立作答）：

1. Need、可验证的 system shall、架构分配和用户场景验收各回答什么问题？
2. 为什么 `request ACK`、服务 `ready`、首帧 `present` 和用户实际看见不能互相代替？
3. Guest 重建后，如何防止旧会话的 buffer、callback 或状态覆盖当前业务？
4. 多域时钟误差区间重叠时，哪些关联键可以比墙钟顺序提供更强证据？
5. 对两个候选架构做比较前，哪些约束必须先作为硬门槛核验？

## 3. 两个核心概念

### 3.1 先定义系统边界，再画六种视图

**系统对象（SoI）**是本次方案真正负责交付的用户能力及其受控边界。以“请求倒车画面并显示当前会话的新鲜影像”为教学构造场景，外部参与者可能有挡位权威源、驾驶员、TBox 和整车电源控制；内部候选部署域可能有 MCU、Yocto Host、Hypervisor、Android Guest、Camera、Display。TBox 在此场景可以不参与，但必须在环境图上明确“无业务输入/待确认”，不能把它悄悄从全车边界消去。当前车型的实际连接和系统责任以现车图纸、接口定义及版本清单校正。

同一个框架要分别交付六张相互可追踪的图或表，不能把物理线、进程和用户结果混成一张无语义方框图：

| 视图 | 要回答的问题 | 最小标注 |
| --- | --- | --- |
| 场景/需求 | 谁在何条件下需要什么结果？ | actor、Need、触发/禁止、系统需求 ID、验收场景 |
| 逻辑/职责 | 谁做决策、谁持有权威状态、谁执行？ | 功能、唯一责任域、输入/输出、失败边界 |
| 部署/接口 | 软件运行在哪里，跨了哪条接口？ | Guest/Host/MCU/TBox/Hypervisor/外设，接口版本与数据所有权 |
| 六流/时序 | 控制、数据、状态、电源、资源、证据怎样流动？ | 同一事务 ID、generation、deadline、读回和错误分支 |
| 预算/权衡 | 时限与资源约束如何分配，候选方案何时可接受？ | 端到端 deadline、分段预算、并发、内存/带宽、裕量、测量方法 |
| 验证/演进 | 如何证明系统工作并安全恢复？ | requirement→test→artifact、版本、回滚、风险和 reopen 条件 |

这里“六流”指**控制、数据、状态、电源、资源、证据**；它们与上述六张方案视图不是同一种分类。控制流是触发和决策；数据流是帧或属性载荷；状态流由权威源和读回定义；电源流决定谁先唤醒、谁 ready；资源流定义 buffer/handle/fence 的分配、持有与释放；证据流记录可复核的里程碑。运行域之间的线均应标 `已证实/待项目确认`。

~~~mermaid
flowchart LR
  X[驾驶员/挡位事件] --> M[MCU或车身权威源·待确认]
  M -- 控制/状态 --> Y[Yocto Host·网关与资源候选]
  Y -- 虚拟接口·待确认 --> V[Hypervisor/virtio 边界]
  V --> A[Android Guest·策略/HMI 候选]
  C[Camera·帧生产者] -- 数据/资源 --> Y
  Y -- buffer及fence --> V
  A -- 图层/显示请求 --> D[Display·物理输出]
  P[电源与唤醒协调·归属待确认] -. 电源/ready .-> M
  P -. 电源/ready .-> Y
  P -. 电源/ready .-> A
  T[TBox·本场景是否参与待确认] -. 外部环境 .-> Y
  E[证据合同：build/boot/generation/session/frame/时间误差] -. 逐接口关联 .-> Y
  E -. 逐接口关联 .-> A
  E -. 逐接口关联 .-> D
~~~

### 3.2 系统预算和验收合同必须能逐接口对账

端到端时限不能用一个“整机性能目标”替代。先用系统需求定义从**有效触发**到**当前会话首个可见新鲜帧**的 deadline；再把采集、传输、Guest 消费、合成、显示及允许的恢复开销分配为分段预算，并记录竞争负载和裕量。用同一环境、同一时钟映射和可重复的原始证据测量；没有当前车型数据时一律填 `TBD`，写明关闭角色与试验。资源预算也要给出峰值/持续带宽、buffer 数、共享内存、IOMMU 映射、fence 等待和释放责任；请求带宽或分配成功不等于按时获得帧。

| 合同 | 局部完成 | 系统完成与未知态 |
| --- | --- | --- |
| 触发与命令 | 收到 request / transport ACK | 权威条件仍有效、当前代策略接受、取消/覆盖可追踪 |
| 帧与资源 | buffer 分配、入队、fence signal | 当前 session 的新帧经消费者消费、旧资源安全归还 |
| 显示与状态 | Guest 提交图层 / present callback | 显示端读回或可见结果满足场景；失败可降级且状态不谎报 |
| 电源与恢复 | 某服务 ready、VM 已启动 | 依赖屏障完成、权威状态重取、旧代零污染，恢复在预算内 |
| 证据与决策 | 日志文件存在 | 同一版本/场景/代际能从需求追到原始工件，缺证据记 unknown |

每条接口同时写清 schema/version、对象和来源、authority、request/session/frame ID、boot/VM/device generation、源时间及映射误差、TTL/deadline、ACK 与业务完成点、错误分类、超时终态、幂等/取消、reset 后重取和安全降级。超时只能说明在窗口内未取得所需完成证据；最终动作可能已发生。冻结原事务，查询权威状态与执行端，再按同一幂等键决定继续、补偿或有界重试；无法判定时标 unknown 并升级。旧代消息和旧 handle 不得污染新代。

~~~mermaid
sequenceDiagram
  participant M as 权威触发/MCU
  participant Y as Yocto Host/资源协调
  participant V as Hypervisor/虚拟接口
  participant A as Android Guest/HMI
  participant C as Camera
  participant D as Display
  M->>Y: trigger + sourceSeq + powerCycle
  Y-->>M: transport ACK（仅本跳）
  Y->>C: 当前 session/generation 请求新帧
  C-->>Y: frameId + buffer + fence + sourceTime
  Y->>V: 当前代资源所有权交接
  V->>A: frameId/handle/fence + generation
  A->>D: 仅在 ready 与 fence 满足后提交
  D-->>A: present/可见读回（项目判据待确认）
  Note over M,D: 业务完成要求当前触发、当前代新鲜帧和用户可见结果
  opt 超时/Guest重建/取消
    Y->>Y: 冻结旧事务和资源，查权威状态
    Y->>A: 新代重协商与重取；旧回调仅归档
  end
~~~

## 4. 教学构造故障：服务都 ready，画面仍是旧会话

以下 E1—E8 是**教学构造记录，不是实车日志或预设真实根因**。现象：某次从 STR 唤醒后进入倒车画面，UI 容器已显示，但短时间内只见上一次会话的静止帧。目标车型时限、显示策略和安全目标均待确认。

| 证据 | 构造记录 | 证据边界 |
| --- | --- | --- |
| E1 | 同一 power cycle 中，权威源 seq 104 触发新会话 s9 | 源内顺序可知；跨域时间仍需校准 |
| E2 | Host 收到 s9，返回 ACK，服务状态 ready | 仅 Host 接收/存活，不证明帧推进 |
| E3 | Camera producer 对 s9 记录 frame 801 已入队、fence f801 发信号 | 生产者局部完成，不证明 Guest 拿到同一 buffer |
| E4 | 虚拟接口记录旧 VM generation g4 的 frame 790 完成回调；新代为 g5 | 存在旧代异步事件，不证明其最终被 HMI 使用 |
| E5 | g5 的 Guest 消费记录 frame 790，显示提交关联 s8 | 当前代消费链出现旧会话标识 |
| E6 | Display 读回对应 frame 790，画面取证与静止旧帧一致 | 证明用户可见旧帧；不证明旧帧由哪一层重新注入 |
| E7 | frame 801 的 Host 出队到 Guest 导入缺可读记录，collector 有 drop | 不能把缺日志等同未传输；证据质量不足 |
| E8 | 重启 HMI 后新帧可见，但无 buffer 释放和跨域队列快照 | 证明某恢复动作有效，不证明根因在 HMI |

**故障分析：**按 powerCycle、s8/s9、g4/g5 和 frameId 重建双时间线。最早可证实的错误交接是 **g5 Guest 消费/显示提交了 s8 的 frame 790**，而 s9 的 frame 801 已在 Camera 生产者局部完成；E7 使 Host→Guest 的实际首错位置未知。E4 是潜在触发或相关异步事件，E8 是后续恢复；不把它们写成根因。竞争假设包括旧代回调没有隔离、Host buffer/handle 复用误标、Guest 自身保留上一会话纹理，以及采集记录/读回串会话。对每一条分别索取 Host 出队/VM 导入、handle generation、Guest 消费队列、HMI 提交和显示读回的同一事务证据，再在受控环境单独注入 Guest 重建、旧 callback 晚到、资源复用和采集 drop。当前结论只对构造 E1—E8 成立；真实车证据与责任归属仍未知。

**恢复与责任：**先阻断 g4/s8 的 callback 与 handle，冻结未归还 buffer 并查询权威倒车条件；g5 完成依赖和资源重协商后索取 s9 的新帧，验证当前帧显示和旧资源安全释放。若无法取得新鲜帧，进入项目定义的安全降级/超时升级，不展示伪装为实时的旧帧。系统集成与跨域接口 Owner 首轮牵头；Camera producer、Host/虚拟接口、Guest/HMI、Display、电源/MCU 与测试分别提供相邻节点证据，直接修复方由首个真实违规接口决定。TBox 若不参与此场景，需由拓扑与信号表确认。

方案比较示意：**A** 让 Host 统一持有 frame/session 权威并在 VM 边界执行 generation 过滤；**B** 让 Guest 对消费和可见帧作强验证，Host 保留资源安全隔离。两者都必须满足当前车型的安全、功能、恢复、资源和证据硬门槛，才比较成本、复杂度、延时与故障隔离。E7 未补齐前不能宣告哪一方案更优；实际设备所有权、虚拟化方式与收益须测量。

## 5. 可执行验证与可复用方案目录

以下均是**待执行**的设计。先冻结车型/SoC、软件 build、接口/信号版本、测试环境、权限、触发与读回手段。每个测试保存 reqId、testId、原始日志/trace/帧工件 URI/hash、sourceSeq、session/frame、boot/VM/device generation、域内时间与映射误差、执行人、预期/实测、结论。

| 场景与步骤 | 关键观测 | 待批准的通过判据 |
| --- | --- | --- |
| 正常触发与取消；逐层采集到首帧读回 | request/ACK、frame/fence、present、物理可见 | 当前会话新鲜帧在项目时限内可见；取消后无迟到显示 |
| STR 恢复及 Guest/Host/Camera 局部重启，逐一注入 | ready 屏障、代际、资源归还、源状态重取 | 旧帧零覆盖；有界恢复或明确安全降级 |
| 重复、乱序、旧代 callback、handle 复用及超时未知终态 | 幂等键、TTL、queue、buffer/fence 生命周期 | 无旧代副作用，终态 unknown 有明确出口 |
| 并发音频/导航/其他摄像头及资源压力 | DDR/内存/IO/GPU/显示 deadline、丢帧与相邻业务 | 满足预算和相邻业务门槛；阈值须由实测/需求定 |
| 证据采集 drop、跨域时间误差与构建混配 | collector drop、同步误差、版本矩阵 | 无证据时标 unknown；混合版本按合同兼容或禁止 |
| 方案变更、回滚及恢复失败 | 基线版本、接口影响、降级和回滚工件 | 回滚后当前代业务/资源/状态和诊断证据可核验 |

提交方案 V1 的可复用目录：①版本与系统边界；②Need/场景/需求与验收 ID；③逻辑与部署图；④六流时序、接口/状态权威表；⑤端到端及分段预算、资源所有权；⑥正常/异常/复位/旧消息/降级；⑦A/B 硬门槛和权衡；⑧需求—测试—证据矩阵；⑨风险、待确认项、责任域与决策记录。每个 TBD 都要写关闭所需资料和负责角色。

## 6. 独立作业：《域控制器入门架构方案 V1》

请从**你有权限描述的一项实际座舱业务**中选题，可脱敏；若不便使用项目材料，可选择构造的“车辆状态变化后，座舱显示正确状态并按策略提示”作为题目。题目只给场景，**不附参考答案、示范作答或预设根因**。请独立提交：

1. 明确当前车型/SoC/软硬件版本、资料可信度和系统边界；写一个 Need、两个可验证的 system shall、至少三个正常/异常场景及各自用户验收。
2. 画逻辑、部署和六流图，逐边标 MCU、Yocto Host、Hypervisor、Android Guest、TBox、外设是否参与、谁为 authority、谁拥有资源。未知连接标待项目确认。
3. 选一条主业务画 Mermaid 时序或状态图，含 request/ACK、局部完成、业务完成、超时、取消、reset、旧消息和恢复；说明哪一项证据证明用户结果。
4. 给出分段时间/资源预算与测量计划。未知阈值写 TBD；列 Owner、所需实验和若不满足时的降级出口。
5. 给出两个可行架构选择、硬门槛、证据化权衡和至少三个竞争故障假设；不得把服务 ready 或重启后恢复直接写成根因。
6. 建需求—接口—测试—原始证据追踪矩阵，至少覆盖正常、STR/局部复位、旧代、超时未知终态、资源压力、混合版本、回滚和相邻业务；注明待执行与关闭判据。
7. 最后写给研发/管理层的 TPM 摘要：当前确定/待验证、首轮牵头、触发方、直接修复方、接口/恢复策略方、验证方如何以证据划界，什么条件允许进入评审。

个人反思由你本人填写：你最不确定的系统边界是什么？哪一份真实材料最可能改变你的 A/B 选择？

## 7. 提交、技能覆盖与总结

本课编号 **day-58**。使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。可先脱敏；答卷及附件将公开同步。没有作答时只记待验证，收到真实作答后逐题批改。

本次优先读取 **F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/** 的全部 21 项 `SKILL.md` 并逐项做适用性检查。深入使用综合路由、跨域日志、平台架构、跨域消息、电源/STR、虚拟化、MCU、AVM/显示、性能资源、TPM 分责；启动 HMI、稳定性和 DB/KE 用于复位及证据边界；音频用于相邻业务回归。触摸、以太网、无线、日志风暴、USB 在本构造主链没有直接触发，保留资源/回归检查；5Y/8D 需真实根因与验证材料后才形成。缺口是当前车型/SoC/构建、连接图、系统需求、时限与资源实测、原始跨域日志、测试执行和学习者作答。技能资料不替代现车接口和实测。

**独立总结：**用户现象是教学构造的 STR 后倒车画面显示旧帧；架构主链由权威触发经 MCU/Host/虚拟边界/Guest 到 Camera/Display，电源与资源生命周期贯穿。构造证据可确认新 Guest 消费路径出现旧会话帧，Host→Guest 首错位置及根因尚不能确定；对构造断点的置信度较高，对真实车型根因没有置信结论。下一步用同一 session/generation/frame 的接口证据区分旧回调、资源复用和 Guest 保留画面，系统集成先牵头取证，责任归属随最早真实违规接口确定。方案要经当前代可见结果、异常恢复、资源安全和版本回归验证，才能进入受控评审。
