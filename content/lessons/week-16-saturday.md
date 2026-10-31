# Week 16 — 周六巩固：资源—接口—恢复综合案例与证据链训练

学习日期：2026-10-31，星期六，Asia/Shanghai；Week 16。能力阶段仍为第二阶段“系统链路与问题分析”。今天只巩固本周实际安排的 Day 49—52，不推进 Day 53、不新增普通专题，也不提前讲未来课。建议用时 60 分钟。

执行前已完整扫描仓库全部开放与关闭 Issue、全部评论及附件索引；授权学习者没有新答卷、正文编辑或本人 `[补交]` 评论。因此 Day 34—52 继续标记为待评审，材料发布不代表已经学习或掌握。本课只提供独立作答、画图、证据链和恢复决策训练，不附参考答案、示范作答或预设根因，个人反思由你本人填写。

## 1. 巩固范围与事实边界

| 已安排单元 | 今天必须串起来的合同 |
| --- | --- |
| [Day 49：资源所有权、DMA/IOMMU 与共享缓冲](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-49.html) | authority、export/import、mapping、fence、generation、回收与隔离 |
| [Day 50：GPU、DDR 带宽预算与性能验证](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-50.html) | avg/peak、并发、P95/P99、deadline、背压与单变量实验 |
| [Day 51：需求分解、场景边界与系统验收](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-51.html) | Need/ConOps、system requirement、架构分配、V&V 双向追踪 |
| [Day 52：模块、接口与异常恢复](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-52.html) | 模块责任、接口完成阶梯、unknown 终态、旧代拒绝与有界恢复 |
| [Week 16 周五复盘](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/week-16-friday.html) | 需求—接口—资源—运行—恢复—证据六层评审门禁 |

官方资料复核日期：2026-10-31。今天不扩展新专题，只沿用本周已核验的 AOSP BufferQueue/Gralloc 与 Synchronization、Linux DMA API/dma-buf/Interconnect/PSI、Perfetto FrameTimeline/GPU tracing、NASA System Design/Interface Management 和 Automotive SPICE ENG.3 的通用机制。它们不能证明现车实现。

当前仍缺车型、SoC/build、真实域与物理连接、allocator/IOMMU/GPU/DDR/显示配置、IDL/DBC、业务 deadline、资源基线、接口完成语义、恢复预算和实机 trace。题中名称、时序、数值及故障记录均为教学构造；未知项目参数保持待确认。

## 2. 一小时独立训练

| 时间 | 任务 | 必交输出 |
| --- | --- | --- |
| 0—8 分钟 | 回答 5 道快问 | 5 条短答，未知项标 TBD |
| 8—20 分钟 | 白纸重画六流架构 | 域边界、Owner、输入/输出、观测点 |
| 20—40 分钟 | 分析综合案例 | 双时间线、最早断点、竞争假设 |
| 40—52 分钟 | 设计恢复与验证 | 状态图、恢复阶梯、验证矩阵 |
| 52—60 分钟 | 形成评审包并反思 | 《跨域资源异常评审包 V1》 |

快问不附参考答案：

1. buffer handle 可访问、IOMMU mapping 成功、producer fence 完成、approved endpoint 可见分别由谁证明？
2. 为什么平均带宽有余量仍可能出现 P99 帧超期？还缺哪些队列、pass、并发和尾时延证据？
3. 当接口返回 accepted 但最终状态未知时，为什么不能换新 transactionId 盲重试？
4. VM generation 改变后，旧 callback、fence、handle、timeout 和 cancel 各自怎样隔离与审计？
5. “局部 rebind 后恢复”最多支持什么机制判断？为什么不能单独证明根因？

## 3. 画图训练：六条路径必须指向同一事务

请先独立画出控制、数据、状态、电源/复位、资源和证据六条路径。标注 Android Guest、Yocto Host、Hypervisor、MCU 与 Camera/Display 外设边界，并为每条跨域边写出 `input → authority/state → output → observer`。

~~~mermaid
flowchart LR
  MCU[MCU：车辆意图/电源状态] -->|event + epoch| ORCH[策略与恢复协调]
  ORCH -->|request + txId + generation| CAM[Camera / producer]
  CAM -->|buffer + fence + frameId| HV[Hypervisor / shared resource]
  HV -->|mapping + current generation| DISP[Display / consumer]
  DISP -->|present + visible readback| ORCH
  ORCH -->|business result| HMI[Android HMI]
  BUDGET[GPU/DDR/CPU/IO budget] -.约束.-> CAM
  BUDGET -.约束.-> DISP
  LEDGER[Evidence ledger] -.关联六流.-> ORCH
  LEDGER -.资源/队列/尾时延.-> BUDGET
~~~

图后写清：

- 哪个模块拥有策略、执行、数据、当前状态和恢复协调权；
- 哪些 ACK 只证明传输或排队，哪些 readback 才能证明逻辑与业务完成；
- resourceId/bufferId/fenceId 如何与 boot/VM/device generation 绑定；
- deadline 从何时开始、复位后是否继续累计、谁有权降级；
- 证据丢失、时钟未校准或 attachment 所有权未知时，哪些动作必须禁止。

## 4. 综合案例：STR 后 AVM 周期性冻帧，局部 rebind 可恢复

以下是教学构造记录，不预设根因。不同域时间未完成校准，编号只表示收集顺序，不能直接建立跨域因果。

| 编号 | 构造记录 | 当前最多能证明 |
| --- | --- | --- |
| E1 | STR resume 后 Android VM generation 从 G71 变为 G72，HMI 发出 StartAVM T902 | 新代存在业务意图，不证明依赖或资源已恢复 |
| E2 | Camera 返回 accepted，四路 source sequence 持续递增 | 请求被接受且源端产帧，不证明共享与显示链完成 |
| E3 | G71 的 SurfaceReady callback 在 G72 到达；缺接受/拒绝审计 | 存在迟到消息，不证明已污染新代 |
| E4 | producer fence 正常完成，consumer acquire 间歇超出帧 deadline | 交接后存在等待，不足以选择唯一瓶颈 |
| E5 | GPU busy 与 DDR 总 counter 同窗升高，无 per-client、pass 和峰值窗口 | 共享资源活动增加，不证明 AVM 是原因或受害者 |
| E6 | Host 账本中一个旧 attachment 只有 detach request，没有最终 release | 生命周期未闭环，不证明它阻塞当前资源 |
| E7 | BufferQueue backlog 从 1 增至 4，随后主动丢帧 | consumer/下游服务率不足或阻塞，需要继续分层 |
| E8 | HWC present 仍有记录，但 approved visible endpoint 没有 current frame readback | 局部里程碑存在，业务验收未闭环 |
| E9 | 重新绑定当前 generation 的 surface 后恢复 15 分钟 | rebind 覆盖某段状态，不证明最初触发 |
| E10 | 15 分钟后并发导航动画时再次冻帧 | 并发与故障同窗，缺单变量实验 |
| E11 | 采集期间日志轮转覆盖了第一次冻帧前 20 秒 | 最早证据存在缺口，不能用后果倒推触发 |
| E12 | 扩大 VM recreate 后稳定，但旧资源与队列证据被清空 | 大范围恢复有效且造成证据损失，不证明 VM 是根因 |

### 4.1 双时间线与最早断点

分别画：

1. **业务时间线：**车辆意图 → StartAVM → accepted → 首帧 → present → visible readback → business accepted。
2. **资源时间线：**generation → export/import → map → producer fence → consumer acquire/release → detach/reclaim。

每条事件记录原始时间、时钟类型、共同锚点、误差、boot/VM/device generation、transactionId、frameId、bufferId/fenceId。无法校准时只保留域内先后。

独立回答：

- 最后一个已证实成功交接是什么？下一个预期输出是什么？
- 该输出是明确失败、未观测、无法关联还是证据冲突？
- E11 让哪些因果结论失去资格？
- E9 与 E12 分别只能支持到什么恢复覆盖范围？
- 哪个域是首轮供证牵头，哪些域暂时不能最终定责？

### 4.2 竞争假设与证据账本

至少提出六个可证伪假设，分别覆盖：代际校验、资源生命周期、consumer 背压、GPU/DDR/调度资源、显示绑定/可见端点、错误业务验收。每个假设填写：支持证据、反证、缺失证据、尽量单变量的实验、成立/否定判据。

| 假设 | 支持 | 反证 | 缺失证据 | 区分实验 | 判据 |
| --- | --- | --- | --- | --- | --- |
| H1 |  |  |  |  |  |
| H2 |  |  |  |  |  |
| H3 |  |  |  |  |  |
| H4 |  |  |  |  |  |
| H5 |  |  |  |  |  |
| H6 |  |  |  |  |  |

证据账本必须区分直接、强相关、反证、背景和缺失证据。GPU/DDR 总 counter、高 backlog、旧 callback、rebind 恢复都不能在缺少关联键时直接写成根因。

## 5. 恢复设计：先对账，再扩大半径

~~~mermaid
stateDiagram-v2
  [*] --> IntentKnown
  IntentKnown --> Binding: current generation created
  Binding --> Ready: dependencies + authority readback
  Ready --> Active: request accepted
  Active --> Verifying: current frame and visible evidence
  Verifying --> Accepted: business criteria met
  Active --> Reconciling: timeout / peer reset / ownership unknown
  Verifying --> Reconciling: stale frame / deadline miss
  Reconciling --> Active: authority confirms resumable state
  Reconciling --> Rebinding: resource or interface state invalid
  Rebinding --> Ready: new binding readback
  Reconciling --> Degraded: recovery budget exhausted
  Degraded --> Binding: approved wider recovery
~~~

为每个动作填写触发条件、前置 readback、影响面、不可逆风险、证据损失、成功判据和失败出口：查询权威状态、拒绝旧代、同幂等键有限重试、局部 rebind、单服务重建、device reset、VM recreate、明确降级。恢复不得重置总 deadline，也不得在 attachment 所有权未知时重复释放或复用。

## 6. 可执行验证矩阵

| 用例 | 单变量注入 | 必采证据 | 通过判据 | 回退/退出 | 状态 |
| --- | --- | --- | --- | --- | --- |
| 正常冷启与 STR |  |  |  |  | 待执行 |
| 旧 callback/fence/handle |  |  |  |  | 待执行 |
| consumer 阻塞 |  |  |  |  | 待执行 |
| GPU/DDR/CPU/IO 并发 |  |  |  |  | 待执行 |
| request timeout 与迟到完成 |  |  |  |  | 待执行 |
| 服务/device/VM 分层复位 |  |  |  |  | 待执行 |
| 资源回收失败 |  |  |  |  | 待执行 |
| 日志轮转/证据缺失 |  |  |  |  | 待执行 |
| 相邻显示/导航业务 |  |  |  |  | 待执行 |
| 连续 20 轮 STR |  |  |  |  | 待执行 |

未执行项目保持“待执行”。破坏性故障注入只允许在项目授权且可恢复的环境开展，不因写出测试步骤就记录通过。

## 7. 可复用产物：《跨域资源异常评审包 V1》

提交以下内容：

1. 控制/数据/状态/电源/资源/证据六流图；
2. 业务与资源双时间线和时间校准表；
3. 模块责任卡及三条关键接口的十一项合同；
4. ACK → logical complete → visible readback → business accepted 完成阶梯；
5. 资源生命周期、avg/peak、P95/P99/max、headroom 与背压预算表；
6. E1—E12 证据账本和六个竞争假设；
7. 对账、拒旧、幂等重试、局部恢复、扩大恢复与降级状态图；
8. 十项验证矩阵和原始工件索引；
9. TPM 分责表：首轮牵头、触发候选、直接修复、接口/资源/恢复策略、验证；
10. 200—300 字评审意见：通过/有条件通过/拒绝、风险、Owner、关闭证据和升级条件。

个人反思由你本人填写：

- 我最容易把哪个局部里程碑误当成业务完成？
- 我的假设是否都能被一个明确观测否定？
- 哪个恢复动作大于当前证据支持的故障范围？
- 如果只能新增三个观测点，我会放在哪里，分别关闭哪个关键不确定性？

## 8. 提交说明

本课编号 **week-16-saturday**。请提交快问、六流图、双时间线、证据账本、竞争假设、恢复状态图、验证矩阵、《跨域资源异常评审包 V1》和个人反思。

使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。答卷、附件和批改公开，请只提交可公开且已脱敏的材料。编辑原答卷或本人以 `[补交]` 开头评论会触发新版本评审。

## 附录：21 项 T12T 技能覆盖检查

技能来源：`F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/`。本次已读取全部 21 个 `SKILL.md` 并完成适用性检查。

| 技能 | 本次判断 |
| --- | --- |
| t12t-cockpit-diagnosis | 适用，深入：主链、最早断点、证据等级与竞争假设 |
| t12t-log-analysis | 适用，深入：双时间线、代际关联、未观测边界 |
| t12t-platform-architecture | 适用，深入：Guest/Host/Hypervisor/MCU/外设边界与六流 |
| t12t-display-black-freeze | 适用：present、scanout、屏端可见与新鲜帧完成语义 |
| t12t-touch-input | 材料不足：只纳入相邻业务回归，无触摸原始证据 |
| t12t-avm-camera-stream | 适用：请求、逐路 source、buffer、首帧与业务画面 |
| t12t-power-sleep-str | 适用：STR、ready barrier、代际与恢复顺序 |
| t12t-audio-path | 条件适用：共享资源与相邻业务回归，无音频故障证据 |
| t12t-stability-crash-reset | 适用：分层复位、连续性与恢复半径 |
| t12t-performance-jank | 适用，深入：deadline、队列、GPU/DDR、尾时延与单变量实验 |
| t12t-ethernet-sgmii | 材料不足：无 PHY/carrier/IP 证据 |
| t12t-wireless-phone-link | 材料不足：无无线或手机互联证据 |
| t12t-cross-domain-msg | 适用，深入：sequence、ACK、freshness、readback 与拒旧 |
| t12t-boot-hmi | 适用：早到请求、依赖就绪与当前首帧 |
| t12t-log-storm | 条件适用：日志轮转与首错覆盖，无速率实证 |
| t12t-usb-typec-storage | 不适用：无 USB/块设备/卷生命周期证据 |
| t12t-virtualization-tee | 适用：VM generation、共享资源和隔离边界 |
| t12t-db-ke-forensics | 条件适用：若出现 fatal/reset 才进入固定八步；当前无异常包 |
| t12t-mcu | 条件适用：车辆意图与电源状态源，无协议字典和实机日志 |
| t12t-tpm-triage | 适用，深入：首轮、供证、修复、策略与验证责任 |
| t12t-tpm-5y8d | 暂不展开：无确认根因、逃逸原因和修复验证，不强造 5Y/8D |

关键证据缺口是现车车型/SoC/build、真实拓扑和物理映射、协议字典、资源/性能基线、完整实机 trace、故障注入授权与学习者真实作答。补齐前只能形成可证伪假设、评审条件和初步责任域，不能宣布现车根因、验证通过或个人掌握。
