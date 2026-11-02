# Day 53 — 方案设计 III：A/B 方案权衡、风险与决策记录

学习日期：2026-11-02，星期一，Asia/Shanghai；Week 17。能力阶段仍按第二阶段“系统链路与问题分析”记录，今天进入方案设计与评审训练。目标不是凭偏好选方案，而是把需求、硬门槛、评价准则、证据、不确定性、风险和最终决策连成可追溯闭环。建议用时 60 分钟。

执行前已扫描仓库全部开放与关闭 Issue、全部评论和附件索引；授权学习者没有新答卷、正文编辑或本人 `[补交]` 评论。因此 Day 34—53 均保持待评审，材料发布不代表已经学习或掌握。现车参数、组织决策权和测试数据未知时一律标“待项目确认”，不把教学案例写成平台事实。

## 1. 官方依据与边界

官方资料核验日期：2026-11-02。

- [NASA Systems Engineering Handbook：Decision Analysis](https://www.nasa.gov/reference/6-8-decision-analysis/)：先理解决策上下文与决策权，定义客观、可区分且可度量的准则，再识别备选、选择方法、评价结果并记录最终决定；复杂决策应写明假设、不确定性和敏感性。
- [NASA Systems Engineering Handbook：Design Solution Definition](https://www.nasa.gov/reference/4-4-design-solution-definition/)：备选方案应在决策前通过 trade study 比较性能、可实现性、成本、进度和风险；结论与支撑分析进入配置管理基线。
- [NASA Systems Engineering Handbook：Technical Risk Management](https://www.nasa.gov/reference/6-4-technical-risk-management/)：风险由导致性能下降的场景、发生可能性和后果构成，并包含不确定性；需要持续识别、缓解、监控和触发处置。
- [NASA Systems Engineering Handbook：Appendix](https://www.nasa.gov/reference/system-engineering-handbook-appendix/)：trade study report 应保存系统目标/约束、评价方法、数据来源、备选、结果、不确定性、敏感性、选择规则和建议。
- [Automotive SPICE PRM 4.5：ENG.3](https://automotivespice.com/fileadmin/software-download/automotiveSIG_PRM_v45.pdf)：系统架构设计需要定义元素、接口和动态行为，分配需求，评价备选架构，并保持双向追踪和一致性。

这些来源给出通用方法，不规定本车型应选择集中式还是分布式恢复。当前车型、SoC/build、Guest/Host/Hypervisor/MCU/TBox 拓扑、接口语义、资源预算、ASIL/安全目标、恢复 deadline、成本和组织决策权均待项目确认。

## 2. 一小时安排

| 时间 | 任务 | 必交输出 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 5 题 | 5 条短答，未知项标 TBD |
| 10—30 分钟 | 学会硬门槛、评分、敏感性与风险 | 一张决策模型 |
| 30—50 分钟 | 完成 STR 后 AVM A/B 案例 | 两方案架构、权衡矩阵、竞争风险 |
| 50—60 分钟 | 固化可复用产物 | 《架构权衡与决策记录 V1》 |

回顾题：

1. 为什么 transport ACK、command accepted、logical completed 与 business accepted 不能共用一个“成功”字段？
2. 一个候选方案若不满足必须性需求，为什么不能靠其他高分补偿？
3. 权重、评分和证据置信度分别表达什么？三者混在一起会造成什么风险？
4. reset 或 generation 改变后，旧 callback、timeout、handle 和完成事件如何避免污染当前决策验证？
5. “恢复更快”要由哪些统一起点、终点、分位数、失败率和原始证据支撑？

## 3. 核心概念一：先过硬门槛，再做加权权衡

决策对象先写成一个可验证问题：

> 在已确认的车型/版本/边界内，为满足一组唯一编号的系统需求，应由哪个决策权主体在何时从哪些备选中选择什么，并用什么证据关闭哪些风险？

评价分两层：

1. **硬门槛（must/constraint）：**法规与安全目标、必须满足的功能/性能、资源上限、接口兼容、数据隔离、恢复终态、证据留存、量产时间窗。任一项不满足，方案直接标为“不合格”或“需修改”，不能用加权总分抵消。
2. **增强准则（trade criteria）：**性能余量、复杂度、开发/测试成本、进度、可维护性、故障隔离、可观测性、扩展性、供应链与运维影响。只有通过硬门槛的方案才进入评分。

对准则 (i) 与方案 (j)，可以使用：

[
Score_j = \sum_i w_i \times s_{ij}
]

其中 `w_i` 是经决策权主体批准且总和为 1 的权重，`s_ij` 是按预先定义量表和同一证据口径得到的评分。另行记录 evidence confidence，不能因证据薄弱而假装得到精确分数。

每项评分至少保存：

- requirement/criterion ID、单位、方向和合格阈值；
- 数据来源、版本、样本量、环境、时间窗和 artifact URI/hash；
- 测量方法、模型假设、误差/区间和证据置信度；
- Owner、复核者、决策权主体和批准时间；
- 缺失证据及其收集成本。

## 4. 核心概念二：敏感性分析、风险三元组与停止规则

单一总分不是结论。至少做四种检查：

- **权重敏感性：**在批准范围内改变关键权重，观察推荐方案是否翻转；
- **评分区间：**用 best/nominal/worst 或置信区间替代伪精确单点；
- **关键假设敏感性：**改变并发数、恢复 deadline、资源余量、故障率或测试覆盖，观察结论；
- **支配与门槛：**若某方案在所有关键指标均不劣且至少一项更优，可标为支配候选；否则保留权衡。

风险三元组写成：

[
Risk = (scenario, likelihood, consequence)
]

每条风险还要记录触发信号、预防/缓解、contingency、Owner、截止、残余风险、接受人和复核日期。没有项目统计时，likelihood 只能标定性或 TBD，不能从一次教学故障推算量产概率。

停止规则必须提前定义。例如：

- 若两方案的推荐在合理权重/评分区间内不翻转，且关键风险证据充分，可以提交决策；
- 若结论会因一个高价值缺失证据翻转，应先做区分实验；
- 若收集信息的成本/进度影响大于其可能改变决策的价值，由决策权主体记录接受不确定性；
- 若硬门槛或安全约束未关闭，不得用“时间紧”默许通过。

## 5. 工程案例：STR 后 AVM 恢复协调采用 A 还是 B

教学构造场景：STR resume 后，Android HMI 发出 AVM 请求；Camera producer、共享 buffer、Hypervisor/Host backend、Display consumer 和物理可见端点需要按当前 generation 恢复。历史记录出现过 accepted 后业务画面未恢复、旧 callback 迟到、共享 attachment 终态未知、局部 rebind 有时恢复。当前证据不能预设根因。

两个候选架构：

- **方案 A：Host 集中式恢复协调。**Host coordinator 持有恢复 epoch、依赖屏障、资源租约和最终对账；Guest/Camera/Display 分别上报里程碑，由 coordinator 决定放行、局部恢复、扩大恢复或降级。
- **方案 B：域内自治 + 显式一致性合同。**各域维护本域权威状态和恢复状态机，通过 versioned contract、幂等键、generation 与 readback 协同；没有单一运行时协调者，冲突通过 reconciliation 收敛。

~~~mermaid
flowchart LR
  subgraph A[方案 A：Host 集中协调]
    AH[Android HMI] --> AC[Host Recovery Coordinator]
    AC --> AP[Camera Producer]
    AP --> AR[Shared Resource Broker]
    AR --> AD[Display Consumer]
    AD --> AV[Visible Endpoint]
    AC -.epoch / barrier / evidence.-> AL[Decision Ledger]
  end
  subgraph B[方案 B：域内自治]
    BH[Android State Owner] <-->|versioned contract| BP[Camera Owner]
    BP <-->|buffer / fence / generation| BR[Resource Owner]
    BR <-->|readback / reconcile| BD[Display Owner]
    BD --> BV[Visible Endpoint]
    BH -.distributed evidence.-> BL[Decision Ledger]
    BP -.distributed evidence.-> BL
    BR -.distributed evidence.-> BL
    BD -.distributed evidence.-> BL
  end
~~~

### 5.1 六条路径与接口完成阶梯

对 A、B 分别画控制、数据、状态、电源/复位、资源、证据六条路径，并标出 Android Guest、Yocto Host、Hypervisor、MCU/TBox 和 Camera/Display 外设边界。每个跨域接口定义：

`request → received/ACK → accepted → local applied → downstream readback → business accepted`

同时写明：

- timeout 的起点、单步预算、总 deadline 和终态 unknown；
- query/retry/cancel/compensate 的幂等条件；
- peer reset、VM/device generation 改变和 in-flight 事务处置；
- 旧 callback/fence/handle/timeout/cancel 的拒绝与审计；
- 资源所有权未知时的 quarantine；
- 当前代、新鲜、正确、及时且用户可见的业务完成判据。

### 5.2 构造证据与完整故障分析

| 编号 | 构造记录 | 当前最多能证明 |
| --- | --- | --- |
| E1 | resume 后 current VM generation 为 G18，HMI 请求 T771 收到 accepted | 当前代意图被接收，不证明依赖和画面完成 |
| E2 | Camera source sequence 递增，producer fence 正常 | producer 在产帧，不证明 consumer 或可见端完成 |
| E3 | G17 的 SurfaceReady 在 G18 到达，缺拒绝审计 | 存在旧消息，不证明已被错误应用 |
| E4 | 一个 attachment 只有 detach request，没有最终 release | 生命周期证据不闭环，不证明它阻塞当前帧 |
| E5 | consumer acquire P99 超 deadline，总 GPU/DDR counter 同窗升高 | 下游等待与资源活动同窗，不证明唯一原因 |
| E6 | present 有记录，visible endpoint 无 current frame readback | 局部显示里程碑存在，业务验收缺失 |
| E7 | 局部 rebind 后恢复，扩大 VM recreate 也可恢复 | 两种动作覆盖某些状态，不证明初始根因 |
| E8 | 第一异常前 15 秒日志被轮转覆盖 | 最早触发存在证据缺口 |

按固定顺序完成故障分析：

1. 统一 boot/VM/device generation、transaction/frame/buffer/fence/attachment ID 和域内单调时间；无法校准时不做跨域严格排序。
2. 对每个方案标出最后成功交接、下一个预期输出、observer 和“失败/未观测/无法关联/证据冲突”类别。
3. 提出至少四个竞争假设：旧代隔离失败、资源生命周期未闭环、consumer/资源背压、业务验收/状态对账错误。
4. 分开触发候选、直接失效、加剧因素、恢复动作和后续清理；恢复成功不独立证明根因。
5. 为每个假设设计单变量实验，并说明 A/B 哪个架构更容易观察、隔离、恢复和验证。

### 5.3 A/B 权衡矩阵

先填硬门槛，再填增强准则；本课不预置权重、评分或胜出方案。

| 类型 | ID | 准则/约束 | 量表/阈值 | 方案 A 证据与区间 | 方案 B 证据与区间 | 缺口/实验 |
| --- | --- | --- | --- | --- | --- | --- |
| 硬门槛 | M1 | 当前代旧消息零污染 |  |  |  |  |
| 硬门槛 | M2 | 资源所有权可证明且可安全回收 |  |  |  |  |
| 硬门槛 | M3 | 总恢复 deadline 与明确降级 |  |  |  |  |
| 硬门槛 | M4 | 端到端业务验收与证据留存 |  |  |  |  |
| 权衡 | C1 | 故障隔离与恢复半径 |  |  |  |  |
| 权衡 | C2 | 接口/状态复杂度 |  |  |  |  |
| 权衡 | C3 | 资源和时延开销 |  |  |  |  |
| 权衡 | C4 | 可观测性与可测试性 |  |  |  |  |
| 权衡 | C5 | 版本演进、维护和供应商边界 |  |  |  |  |
| 权衡 | C6 | 开发、验证、量产与运维成本 |  |  |  |  |

## 6. 决策状态机：建议不等于基线生效

~~~mermaid
stateDiagram-v2
  [*] --> NeedDefined
  NeedDefined --> AlternativesOpen: decision authority + scope confirmed
  AlternativesOpen --> Gating: evidence package ready
  Gating --> Rework: any mandatory criterion fails
  Rework --> AlternativesOpen: option or requirement updated
  Gating --> Evaluating: all mandatory criteria pass
  Evaluating --> EvidenceGap: recommendation flips in sensitivity range
  EvidenceGap --> Evaluating: discriminating evidence collected
  Evaluating --> Recommended: robust result + residual risks explicit
  Recommended --> Decided: authority records rationale
  Decided --> Baselined: interfaces / requirements / tests under change control
  Baselined --> Verifying: implementation and fault injection
  Verifying --> Accepted: business and risk closure criteria pass
  Verifying --> Reopened: criteria fail / assumption changes
  Reopened --> AlternativesOpen
~~~

决策记录至少包含：

- ID、标题、状态、日期、Owner、复核者、决策权主体；
- 车型/SoC/build、适用范围、问题、需求和硬约束；
- 备选方案、评价准则、权重批准人、评分量表与选择规则；
- 数据来源、模型、假设、不确定性、敏感性和证据置信度；
- 风险三元组、缓解、contingency、残余风险和风险接受人；
- 推荐与最终决定、理由、反对意见和未选择方案；
- 对接口、资源、状态机、测试、成本、进度和组织边界的后果；
- rollout、rollback/degrade、验证矩阵、证据链接；
- 基线版本、变更影响、过期条件和 reopen trigger。

## 7. 可执行验证

| 用例 | 单变量/注入 | A/B 共同证据 | 通过判据 | 状态 |
| --- | --- | --- | --- | --- |
| 正常冷启与 STR |  | 统一 trigger→visible 时间线 | 当前代业务完成 | 待执行 |
| 旧 callback/fence/handle |  | 接受/拒绝审计 | 旧代零污染 | 待执行 |
| consumer 阻塞 |  | queue/fence/FrameTimeline | 隔离且有界恢复 | 待执行 |
| GPU/DDR/CPU/IO 并发 |  | per-stage/per-client + P95/P99 | deadline 与余量满足 | 待执行 |
| peer/service/device/VM reset |  | generation、in-flight、readback | 权威状态收敛 | 待执行 |
| 资源回收失败 |  | attachment/map/ref ledger | 不重复释放、不早复用 | 待执行 |
| 日志轮转与证据缺失 |  | retention/drop/incident 索引 | 关键决策证据可追溯 | 待执行 |
| 版本滚动与接口不兼容 |  | contract/version/feature flags | 安全拒绝或降级 | 待执行 |
| 相邻显示/导航/音频业务 |  | 共享资源与用户结果 | 无不可接受回归 | 待执行 |
| 连续 20 轮 STR |  | 成功率、尾时延、资源泄漏 | 项目阈值满足 | 待执行 |

同一故障注入、负载、硬件、软件、采集与判据下对比 A/B。未执行保持“待执行”；禁止把模拟分数写成实机结果。破坏性注入只在获得项目授权且可恢复的环境开展。

## 8. 练习与可复用产物

提交《架构权衡与决策记录 V1》：

1. 决策问题、范围、决策权主体与利益相关方；
2. requirement/constraint、硬门槛和 traceability；
3. A/B 六流架构、上下游职责和接口完成阶梯；
4. 权衡矩阵、评分量表、数据来源与证据置信度；
5. 权重/评分/关键假设敏感性分析和停止规则；
6. 至少六条风险三元组、缓解、contingency 与残余风险接受；
7. E1—E8 证据资格表、竞争假设和区分实验；
8. timeout/reset/旧消息/资源未知终态的恢复状态机；
9. 正常、边界、故障、恢复、长稳和相邻业务验证矩阵；
10. 推荐与最终决定分离的 ADR：推荐、决策、理由、后果、基线、rollout/rollback、reopen trigger。

个人反思由你本人填写：

- 我是否先决定了答案，再倒推权重？
- 哪个分数最依赖未经验证的假设？
- 哪条硬门槛仍没有实机证据？
- 什么新信息会让我改变建议或重新打开决策？

## 9. 提交说明

本课编号 **day-53**。使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。请提交回顾题、A/B 六流图、权衡矩阵、敏感性分析、风险三元组、竞争假设、恢复状态机、验证矩阵和《架构权衡与决策记录 V1》。答卷、附件和批改公开，请只提交可公开且已脱敏的材料。

## 附录：21 项 T12T 技能覆盖检查

技能来源：`F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/`。本次已读取全部 21 个 `SKILL.md` 并完成适用性检查。

| 技能 | 本次判断 |
| --- | --- |
| t12t-cockpit-diagnosis | 适用，深入：决策主链、最早断点、竞争假设和证据上限 |
| t12t-log-analysis | 适用，深入：跨域时间、generation、最后成功交接与未观测边界 |
| t12t-platform-architecture | 适用，深入：A/B 域边界、六流、责任、接口和资源路径 |
| t12t-display-black-freeze | 适用：present、visible endpoint、current frame 与显示恢复判据 |
| t12t-touch-input | 材料不足：仅列相邻业务回归，无触摸证据 |
| t12t-avm-camera-stream | 适用：逐路 source、buffer/fence、consumer 与业务画面 |
| t12t-power-sleep-str | 适用：STR barrier、epoch、恢复顺序和 deadline |
| t12t-audio-path | 条件适用：共享资源与相邻业务回归，无音频故障证据 |
| t12t-stability-crash-reset | 适用，深入：服务/device/VM 分层复位、恢复半径与升级 |
| t12t-performance-jank | 适用，深入：尾时延、资源余量、同条件 A/B 实验和敏感性 |
| t12t-ethernet-sgmii | 材料不足：无 PHY/carrier/IP 证据 |
| t12t-wireless-phone-link | 材料不足：无无线或手机互联证据 |
| t12t-cross-domain-msg | 适用，深入：ACK/readback、freshness、幂等、unknown 和拒旧 |
| t12t-boot-hmi | 适用：依赖就绪、早到请求、replay 和首帧 |
| t12t-log-storm | 条件适用：证据容量与轮转，无日志速率实证 |
| t12t-usb-typec-storage | 不适用：无 USB/块设备/卷生命周期证据 |
| t12t-virtualization-tee | 适用：Guest/Host、VM generation、共享资源和隔离边界 |
| t12t-db-ke-forensics | 条件适用：出现 fatal/reset 才进入异常包八步；当前无异常包 |
| t12t-mcu | 条件适用：电源/车辆意图与 epoch，无协议字典及实机日志 |
| t12t-tpm-triage | 适用，深入：决策权、供证 Owner、接口责任、验证与升级闭环 |
| t12t-tpm-5y8d | 暂不展开：无确认根因、逃逸原因和修复验证，不强造 5Y/8D |

实际深入使用了平台架构、证据方法、跨域消息、性能、稳定性复位与 TPM 分责参考手册。关键缺口仍为现车版本/拓扑、硬门槛、权重批准、资源/时延基线、量产风险统计、完整 trace、故障注入授权和学习者真实作答；补齐前只能形成待评审的决策方法和证据计划，不能宣布现车方案胜出或验证通过。
