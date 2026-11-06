# Day 55 — 方案评审 I：评审基线、场景走查与证据准入

计划学习日期：2026-11-04，星期三，Asia/Shanghai；因任务漏发，于 2026-11-06 首次补录和发布。Week 17。今天从“会画方案”进入“能主持可关闭的架构评审”：明确评审对象、版本、进入条件、场景、角色、证据、发现项、决策权和退出条件。建议用时 60 分钟。

答卷扫描覆盖全部开放/关闭 Issue、评论与附件索引，未发现授权学习者新作答。Day 34—55 继续待评审；材料发布不等于掌握。下文案例为教学构造，现车参数与结论均待项目确认。

## 1. 官方依据

- [NASA Technical Assessment](https://www.nasa.gov/reference/6-7-technical-assessment/)：技术评估使用已建立的度量、趋势、偏差和评审结果支撑决策，评审报告应保留发现、建议和行动项。
- [NASA Product Verification](https://www.nasa.gov/reference/5-3-product-verification/)：验证进入前应有批准的需求基线、程序、环境、配置和判据；偏差需要记录、分析、纠正和复验。
- [NASA Systems Engineering Fundamentals](https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/)：系统工程需要管理边界、需求分配、接口、方案权衡、风险与 V&V。
- [Automotive SPICE PRM 4.5](https://automotivespice.com/fileadmin/software-download/automotiveSIG_PRM_v45.pdf)：架构、需求、验证、问题和变更工作产品需要一致、可追踪并接受评审。

官方方法不替代本项目的评审流程、批准权、严重度定义或安全机制；这些均由项目治理文件确认。

## 2. 一小时安排

| 时间 | 任务 | 产物 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 Day 53—54 | 5 题短答 |
| 10—30 分钟 | 建立评审基线和准入门禁 | 评审章程 |
| 30—50 分钟 | 走查 STR 后 AVM A/B 方案 | 场景表、发现项和行动项 |
| 50—60 分钟 | 形成结论 | 《架构评审记录 V1》 |

回顾题：

1. 为什么没有确定的 baseline/version，评审结论无法复现？
2. 需求通过、接口通过、实现通过和业务验收通过分别依赖什么证据？
3. “没有发现问题”与“证据覆盖充分”有什么区别？
4. 为什么评审发现项必须带 Owner、关闭证据和 reopen 条件？
5. A/B 方案评分接近时，评审应如何利用敏感性和高价值缺失证据？

## 3. 评审章程：先定义评什么、谁能决定

评审包至少包含：

- reviewId、类型、目标、范围、非范围、日期、主持人与决策权主体；
- 车型/SoC/build、硬件阶段、软件/接口/模型/测试基线和 hash；
- Need/ConOps、需求、架构、接口、资源、状态机、风险、ADR 与验证追踪；
- 参与角色：业务、系统、Android、Yocto、MCU、Hypervisor、外设、测试、质量/安全、运维；
- 进入条件、成功条件、阻断条件、允许的 waiver/deviation 规则；
- 场景清单、预读材料、证据索引和未关闭 TBD；
- 发现项分类、行动项字段、复评方式和最终批准者。

评审结论只有四类：通过、有条件通过、拒绝、因证据不足暂停。不得用“会议开完”表示通过，也不得把未到场 Owner 的沉默写成同意。

~~~mermaid
flowchart LR
  B[Baseline frozen] --> E[Entry criteria]
  E --> S[Scenario walk-through]
  S --> C[Contract / state / resource checks]
  C --> Q[Evidence qualification]
  Q --> F[Findings + risks]
  F --> D{Decision authority}
  D -->|pass| P[Approved baseline]
  D -->|conditional| A[Actions + closure evidence]
  D -->|reject| R[Rework]
  D -->|insufficient evidence| H[Hold / collect evidence]
  A --> Q
  R --> B
  H --> Q
~~~

## 4. 场景走查：从用户意图到恢复终态

每个场景按同一模板走查：

1. 触发者、车辆/电源/启动状态、目标对象和预期用户结果；
2. 控制、数据、状态、电源/复位、资源和证据六条路径；
3. 每个跨域交接的输入、输出、版本、ID、时钟和 Owner；
4. received/ACK、accepted、applied、readback、business accepted；
5. 正常、早到、迟到、重复、乱序、取消、超时、peer reset、旧代、资源压力和证据丢失；
6. 权威状态、最终一致性、恢复 deadline、降级和升级；
7. 验证方法、环境、原始工件和通过判据。

~~~mermaid
sequenceDiagram
  participant U as User/Vehicle Intent
  participant H as HMI
  participant O as Orchestrator/Router
  participant P as Producer
  participant R as Resource/Hypervisor
  participant C as Consumer/Display
  U->>H: scenario trigger
  H->>O: request(txId,generation)
  O-->>H: received / accepted
  O->>P: apply intent
  P->>R: data + ownership + fence
  R->>C: current-generation handoff
  C-->>H: readback / visible result
  Note over U,C: 评审逐跳询问 输入、状态、输出、失败、证据、恢复
~~~

## 5. 教学案例：评审 STR 后 AVM 的 A/B 恢复架构

候选 A 为 Host 集中协调，候选 B 为域内自治加一致性合同。评审不预设赢家。

### 5.1 评审证据包

| 编号 | 证据 | 资格判断 |
| --- | --- | --- |
| E1 | A/B 架构图均有控制与数据路径，但 B 未标状态 authority | B 的状态责任不完整 |
| E2 | A 有单点 coordinator 故障恢复草案，但无资源开销基线 | 不能评价可用性与性能权衡 |
| E3 | B 有 versioned contract，但混合版本兼容矩阵缺失 | 演进风险待关闭 |
| E4 | 两方案均记录 accepted，只有 A 有 visible readback 原型 | 证据覆盖不对称，不能直接比较 |
| E5 | 旧 callback 注入只跑 1 次且无 drop/clock 质量记录 | 样本与证据质量不足 |
| E6 | VM reset 后两方案都恢复，但 A/B 使用了不同负载 | 对比条件不一致 |
| E7 | 风险表缺残余风险接受人 | 决策治理不闭环 |
| E8 | 一项硬门槛仍标 TBD | 不能进入最终通过 |

### 5.2 完整故障/评审分析

1. 先做 evidence qualification，剔除不可比较、无法关联或配置不一致的结论；
2. 对每个方案检查硬门槛，再检查增强准则，评分和证据置信度分开；
3. 对正常、早到、乱序、旧代、超时、复位、资源压力、证据系统故障逐场景走查；
4. 找每条路径最后成功交接与下一个预期输出，未观测不等于失败；
5. 区分设计缺陷、实现缺陷、验证缺口、材料缺口和治理缺口；
6. 每个发现项写明影响、证据、Owner、到期、关闭证据、复核者和 reopen trigger；
7. 最终结论由有权主体基于硬门槛、残余风险和关闭证据作出。

## 6. 评审门禁与发现项

| 门禁 | 必须回答 | 阻断示例 |
| --- | --- | --- |
| 基线 | 评的是哪一版需求/架构/接口/测试 | 版本或 hash 不明 |
| 场景 | 生命周期、异常和恢复是否覆盖 | 只有 happy path |
| 责任 | authority、执行、恢复、验证是否唯一 | 多 Owner 或无人负责 |
| 接口 | ACK/完成/业务验收、超时、幂等、拒旧 | ACK 被当作业务完成 |
| 资源 | ownership、mapping、fence、回收、预算 | 终态未知仍复用 |
| 证据 | 关联、时钟、质量、留存和判据 | 只有截图或口头结论 |
| 风险 | scenario/likelihood/consequence、缓解、接受人 | 硬风险无接受权 |
| 变更 | 影响、兼容、回滚、复验 | 影响范围未分析 |

发现项模板：

`Finding ID / baseline / scenario / violated criterion / evidence / impact / owner / corrective action / closure evidence / reviewer / due / status / reopen trigger`

“关闭”必须有新证据，不等于 Owner 回复“已修复”。如果补丁改变接口、状态机或恢复策略，需要重新做影响分析并复验受影响场景。

## 7. 可执行验证

| 评审问题 | 最小验证 | 通过判据 | 状态 |
| --- | --- | --- | --- |
| A/B 是否可比较 | 同配置、同负载、同注入、同采集 | 对比条件一致 | 待执行 |
| 旧代是否隔离 | 注入旧 callback/fence/timeout | 拒绝且当前状态不变 | 待执行 |
| reset 是否有界恢复 | service/device/VM 分层复位 | authority 与业务结果收敛 | 待执行 |
| 证据是否可信 | 注入 collector drop/schema mismatch | verdict 变 unknown/阻断 | 待执行 |
| 资源是否安全 | 注入 release 丢失与 consumer 阻塞 | quarantine，不早复用/重复释放 | 待执行 |
| 混合版本是否安全 | 双端版本组合与 feature gate | 兼容、明确拒绝或降级 | 待执行 |
| 相邻业务是否回归 | 显示/音频/导航并发 | 项目判据满足 | 待执行 |

## 8. 练习

提交《架构评审记录 V1》：

1. 评审章程、参与角色、决策权与 baseline 清单；
2. Day 53 A/B 六流图和 Day 54 观测合同；
3. 至少 12 个场景的走查表；
4. E1—E8 证据资格与竞争假设；
5. 硬门槛、权衡矩阵、敏感性与风险接受；
6. 至少 10 个发现项，区分设计/实现/验证/材料/治理；
7. 行动项与关闭证据；
8. 通过/有条件通过/拒绝/暂停的评审结论。

个人反思由你本人填写：我是否因材料齐全而误判设计正确？哪个评审问题能最早暴露跨域责任空洞？什么证据会让我撤销当前结论？

## 9. 提交说明

本课编号 **day-55**。使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。

## 附录：21 项 T12T 技能覆盖

已从 F 盘优化版目录读取全部 21 项。深入使用综合路由、日志证据、平台架构、跨域消息、启动 HMI、稳定性和 TPM 分责；显示、AVM、电源、性能、虚拟化、MCU用于场景与恢复约束；触摸、音频、有线、无线、USB用于相邻业务覆盖；日志风暴用于证据质量；DB/KE 与 5Y/8D 仅在有异常包或确认根因后进入。关键缺口仍为现车基线、真实 Owner/批准权、接口字典、资源/性能数据、完整 trace 和学习者作答。
