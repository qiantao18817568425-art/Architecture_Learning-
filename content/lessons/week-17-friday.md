# Week 17 — 周五反思总结：权衡、可观测性、评审与发布闭环

学习日期：2026-11-06，星期五，Asia/Shanghai；Week 17。今天只复盘本周实际安排并于今天补录的 Day 53—56，不推进 Day 57，不提前讲未来专题。建议用时 60 分钟。

执行前已扫描仓库全部开放与关闭 Issue、评论和附件索引，授权学习者没有新答卷或补交。Day 34—56 继续待评审；没有真实作答时不虚构掌握、错题或薄弱点。本复盘题不附参考答案、示范作答或预设根因，个人反思由你本人填写。

## 1. 本周范围

| 单元 | 核心产物 | 不能混淆 |
| --- | --- | --- |
| [Day 53](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-53.html) | A/B 权衡、硬门槛、敏感性、风险与 ADR | 推荐、最终决定、基线生效 |
| [Day 54](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-54.html) | 可观测性合同与 V&V 计划 | 有日志、证据合格、判据通过 |
| [Day 55](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-55.html) | 评审章程、场景走查、发现项和关闭证据 | 会议结束、发现项关闭、方案批准 |
| [Day 56](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-56.html) | 变更影响、发布门禁、rollout/rollback | 合入、安装、健康检查、业务验收 |

## 2. 一小时安排

| 时间 | 任务 | 输出 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 5 题 | 五段短答 |
| 10—25 分钟 | 重画知识地图 | 一张闭环图 |
| 25—45 分钟 | 综合故障与架构题 | 证据账本、假设、评审发现 |
| 45—55 分钟 | 发布决策与行动项 | 门禁结论和 TPM 表 |
| 55—60 分钟 | 个人反思 | 学习者本人填写 |

回顾题：

1. 硬门槛、权衡准则、评分、证据置信度和残余风险各解决什么问题？
2. 一条跨域请求从 received 到 business accepted 至少要经过哪些可区分里程碑？
3. 评审发现项何时才能关闭，为什么“已修改”不够？
4. mixed-version 下如何证明兼容、明确拒绝或安全降级？
5. 哪些情况必须把验证结论标为 unknown，而不是 pass 或 fail？

## 3. 知识地图

~~~mermaid
flowchart LR
  N[Need / ConOps] --> R[Requirements + hard gates]
  R --> A[Alternatives + trade study]
  A --> D[Decision + ADR]
  D --> O[Observability contract]
  O --> V[Verification / validation]
  V --> P[Architecture review]
  P --> C[Controlled change]
  C --> G[Release gate]
  G --> M[Monitor / rollback / reopen]
  M -. new evidence / risk .-> A
  O -. raw evidence .-> L[Evidence ledger]
  P -. findings / actions .-> L
  G -. approval / baseline .-> L
~~~

闭环必须保持同一组关联：requirementId、decisionId、changeId、baseline/build、scenarioId、txId、boot/VM/device generation、artifact URI/hash 和批准记录。

## 4. 综合题：新版 AVM 恢复上线后偶发旧帧

教学构造记录：

| 编号 | 记录 | 证据上限 |
| --- | --- | --- |
| E1 | A/B trade study 推荐域内自治，但一项权重对结论敏感 | 推荐尚不稳健 |
| E2 | 评审有条件通过，两个阻断行动项未附关闭证据 | 不能视为完全批准 |
| E3 | mixed-version capability negotiation 成功 | 不证明语义与状态迁移正确 |
| E4 | accepted 后 Camera sequence 正常，Display visible readback 偶发旧帧 | 源端活跃、端点结果异常；中间断点未知 |
| E5 | 旧 generation callback 到达，缺状态写入审计 | 存在污染可能，尚未证明已应用 |
| E6 | resource epoch 切换时一项 attachment 终态 unknown | 所有权证据不闭环 |
| E7 | rollback 后恢复，但 rollback 前 collector drop 增长 | 回退覆盖问题条件；最初证据不完整 |
| E8 | 相邻导航画面未执行回归 | 发布影响仍有空洞 |

独立完成：

1. 画控制、数据、状态、电源/复位、资源、证据六流图；
2. 资格化 E1—E8，标直接、相关、反证、背景或缺失；
3. 找最后成功交接与首个缺失预期输出；
4. 提出至少六个竞争假设，不预设根因；
5. 为每个假设设计单变量区分实验；
6. 检查 ACK、accepted、applied、present、visible、business accepted；
7. 判断评审与发布门禁是否允许继续、暂停或回滚；
8. 给出首轮牵头、触发候选、直接修复、接口/恢复、验证和批准责任。

## 5. 决策—评审—发布状态

~~~mermaid
stateDiagram-v2
  [*] --> Alternatives
  Alternatives --> Recommended: gates + evidence + sensitivity
  Recommended --> Decided: authority records decision
  Decided --> Baselined: configuration control
  Baselined --> ReviewReady: entry criteria met
  ReviewReady --> Conditional: findings remain
  Conditional --> ReviewReady: closure evidence
  ReviewReady --> ReleaseCandidate: review exits
  ReleaseCandidate --> RollingOut
  RollingOut --> Accepted: business + risk + evidence gates pass
  RollingOut --> RolledBack: stop trigger
  Accepted --> Reopened: assumption / risk / evidence changes
  Reopened --> Alternatives
~~~

## 6. 复盘产物

提交《Week 17 架构方案评审包》：

1. 需求、硬门槛、A/B 权衡、敏感性和风险三元组；
2. 可观测性合同、时钟/关联、证据质量和 V&V 矩阵；
3. 评审章程、场景走查、发现项、行动项与关闭证据；
4. 变更影响、兼容/迁移、rollout/rollback 和发布门禁；
5. E1—E8 证据账本、竞争假设和区分实验；
6. 一页结论：通过/有条件通过/拒绝/证据不足暂停，及其决策权。

个人反思由你本人填写：

- 我最容易在哪个环节把局部成功写成系统完成？
- 哪个关键结论依赖证据质量而非业务逻辑？
- 如果只能关闭三个风险，我如何说明优先级？
- 什么新证据会迫使我重新打开决策？

## 7. 提交说明

本课编号 **week-17-friday**。使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。周六只围绕 Day 53—56 做巩固、独立作答、画图和证据链训练，不推进 Day 57。

## 附录：21 项 T12T 技能覆盖

已从 F 盘优化版目录读取全部 21 项并完成覆盖检查。深入使用综合路由、日志证据、平台架构、跨域消息、启动、稳定性与 TPM 分责；显示、AVM、电源、性能、虚拟化、MCU用于案例主链；其余专项进入相邻业务和回归范围。DB/KE 与 5Y/8D 因无异常包、确认根因和修复验证，不强行展开。关键缺口仍是现车基线、原始 trace、接口字典、风险/门禁批准权、实机验证和学习者作答。
