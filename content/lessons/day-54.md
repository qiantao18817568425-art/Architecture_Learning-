# Day 54 — 方案设计 IV：可观测性与验证设计

计划学习日期：2026-11-03，星期二，Asia/Shanghai；因任务漏发，于 2026-11-06 首次补录和发布。Week 17，能力阶段仍按第二阶段“系统链路与问题分析”记录。今天把“出了问题能看见”升级为架构合同：每项需求、接口、状态、资源和恢复动作都必须有可关联、可校准、可留存、可判定的证据。建议用时 60 分钟。

执行前已扫描仓库全部开放与关闭 Issue、全部评论和附件索引；授权学习者没有新答卷、正文编辑或本人 `[补交]` 评论。Day 34—54 继续待评审；补发课件不代表已经学习或掌握。车型、SoC/build、部署、字段字典、阈值和实机数据未知时均标“待项目确认”。

## 1. 官方依据与边界

官方资料核验日期：2026-11-06。

- [OpenTelemetry Signals](https://opentelemetry.io/docs/concepts/signals/)：trace、metric、log 和 baggage 从不同角度描述系统活动，信号之间应通过上下文关联。
- [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/)：统一字段名称和语义，减少跨组件、跨平台解释歧义。
- [OpenTelemetry Logs](https://opentelemetry.io/docs/concepts/signals/logs/)：结构化日志需要稳定 schema；仅“JSON 格式”并不自动等于字段稳定、可验证。
- [NASA Product Verification](https://www.nasa.gov/reference/5-3-product-verification/)：验证应回到批准的需求基线，明确方法、环境、版本、程序、原始结果、偏差和纠正措施。
- [NASA Systems Engineering Handbook Appendix](https://www.nasa.gov/reference/system-engineering-handbook-appendix/)：V&V 计划需要把需求、方法、责任、环境、判据和结果建立可追踪关系。
- [Automotive SPICE PRM 4.5](https://automotivespice.com/fileadmin/software-download/automotiveSIG_PRM_v45.pdf)：系统架构、验证、问题解决和变更管理需要保持一致性、追踪和可复核的工作产品。

这些来源提供通用方法，不说明本车已经部署 OpenTelemetry，也不规定具体埋点、周期、容量或隐私策略。T12T/T29/T16A 的 Android Guest、Yocto Host、Hypervisor、MCU、TBox 与物理外设边界必须由现车资料确认。

## 2. 一小时安排

| 时间 | 任务 | 必交输出 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 5 题 | 五段短答，未知项标 TBD |
| 10—30 分钟 | 设计“需求—观测—判据”合同 | 一张可观测性合同表 |
| 30—50 分钟 | 完成 STR 后 AVM 证据设计案例 | 六流图、证据点和故障分析 |
| 50—60 分钟 | 固化验证产物 | 《可观测性与 V&V 计划 V1》 |

回顾题：

1. transport ACK、command accepted、local applied、downstream observable 和 business accepted 各需要谁证明？
2. 为什么没有日志只能写“未观测”，不能写“没有发生”？
3. traceId、bootId、VM generation、frameId 和 monotonic time 分别解决什么关联问题？
4. 为什么平均时延正常不能替代 P95/P99、失败率和 deadline miss 证据？
5. 旧代 callback 被拒绝时，什么证据能证明“拒绝正确且没有污染当前状态”？

## 3. 核心概念一：把可观测性写成架构合同

每个关键交接建立一行 Observability Contract：

| 字段 | 设计要求 |
| --- | --- |
| Object | requirement/interface/state/resource/recovery step 的唯一 ID 与版本 |
| Producer | 谁产生事实，属于哪个运行域、进程和 generation |
| Observer | 谁采集，采集失败如何显式暴露 |
| Signal | event/log/metric/trace/readback/dump/physical measurement |
| Correlation | powerCycle、bootId、VM/device/process generation、txId、sequence、frame/buffer/fence ID |
| Clock | wall/monotonic/boottime/MCU tick、单位、锚点、换算和误差 |
| Semantics | received/accepted/applied/completed/business accepted 的精确定义 |
| Quality | 完整性、采样、drop、延迟、schema/version、校准和可信度 |
| Retention | 容量、轮转、触发冻结、artifact URI/hash、访问和脱敏 |
| Decision | 哪个判据消费证据，pass/fail/unknown 如何计算 |

关键规则：

- 服务在线、channel heartbeat、目标 topic 新鲜、consumer 状态更新和用户结果是五个不同结论。
- 同一字段必须有 schema/version；字段不存在、采集失败、解析失败和真实值为空不能共用一个 null。
- 关联 ID 应贯穿请求、资源、状态和业务结果；仅靠相近墙上时间不能拼接跨域因果。
- 采样、聚合和隐私脱敏必须保留判定所需信息；否则“有数据”仍不能支持结论。
- 观测系统自身也要可观测：drop counter、queue backlog、clock sync、collector generation、存储余量和轮转状态属于证据质量。

~~~mermaid
flowchart LR
  N[Need / Requirement] --> A[Architecture & Interface]
  A --> R[Runtime request / state / resource]
  R --> O[Observation contract]
  O --> C[Correlation + clock calibration]
  C --> Q[Evidence quality gate]
  Q --> V[Verification criterion]
  V --> B[Business acceptance]
  R -. traceId / generation .-> O
  O -. raw artifact / hash .-> E[Evidence ledger]
  V -. verdict / discrepancy .-> E
~~~

## 4. 核心概念二：验证设计不是“列测试用例”

一项验证记录至少包含：

1. requirementId、版本和双向 traceability；
2. 验证对象及精确配置基线；
3. 方法：analysis、inspection、demonstration 或 test；
4. 前置、环境、工具版本、校准状态和数据质量门槛；
5. 输入、故障注入、步骤和停止条件；
6. 必采原始证据与关联字段；
7. 量化通过/失败/unknown 判据；
8. 结果、偏差、重试理由、纠正措施和复验；
9. Owner、复核者、批准者和 artifact URI/hash。

验证和确认分开：

- **Verification：**实现是否满足批准的技术需求与接口合同；
- **Validation：**在真实或代表性场景中，用户目的是否被正确满足。

ACK 只证明当前接口定义的接收或接受，不证明最终状态。超时首先意味着终态 unknown：冻结证据、查询 authority/readback、判断幂等与 generation，再决定继续等待、同幂等键重试、补偿、局部恢复或降级。复位后必须重新建立当前代的证据链，旧消息只能拒绝并审计。

## 5. 工程案例：STR 后 AVM 偶发“accepted 但无当前新鲜画面”

教学构造场景：STR resume 后，HMI 发出 AVM 请求；Camera producer、共享资源、Host/Hypervisor、Display consumer 和屏端需在当前 generation 收敛。不要预设根因。

### 5.1 观测点设计

~~~mermaid
sequenceDiagram
  participant H as Android HMI
  participant X as Cross-domain Router
  participant C as Camera Producer
  participant R as Resource/Hypervisor
  participant D as Display Consumer
  participant P as Physical/Visible Endpoint
  H->>X: StartAVM(txId,generation)
  X-->>H: received / accepted
  X->>C: apply current intent
  C->>R: frame(bufferId,fence,sequence)
  R->>D: current-generation handoff
  D->>P: present(frameId)
  P-->>H: visible readback + business accepted
  Note over H,P: 每一跳记录 monotonic time、version、result、drop 与 artifact
~~~

| 位置 | 必采证据 | 证据上限 |
| --- | --- | --- |
| HMI 意图 | txId、目标屏、generation、deadline | 证明请求产生，不证明对端收到 |
| Router | receive/route/queue/drop、schema 版本 | 证明当前层处理，不证明 Camera 应用 |
| Camera | source sequence、首帧、buffer/fence | 证明 producer 产帧，不证明 consumer |
| Resource | owner、map/attach/ref、fence、quarantine | 证明资源交接状态，不证明画面可见 |
| Display | acquire/latch/present/vblank | 证明局部呈现里程碑，不证明正确屏与新鲜内容 |
| Visible endpoint | 当前 frame readback、屏映射、用户条件 | 证明业务结果，需要与原始意图关联 |

### 5.2 构造证据与完整故障分析

| 编号 | 构造记录 | 当前最多能证明 |
| --- | --- | --- |
| E1 | G21 的请求 T900 被 accepted | 当前接口接受，不证明下游完成 |
| E2 | Camera sequence 递增，traceId 缺失 | producer 活跃，但无法确认是否对应 T900 |
| E3 | G20 callback 在 G21 到达并被记录为 stale | 旧消息存在；是否被正确拒绝需看状态写入审计 |
| E4 | resource ledger 有一次 attach，无最终 release | 生命周期未闭环，不证明它阻塞本次帧 |
| E5 | consumer acquire P99 超出待确认 deadline | consumer 等待异常，触发点仍未知 |
| E6 | present 计数增长，目标屏 visible readback 缺失 | 局部显示推进，端到端验收缺口 |
| E7 | collector 报 drop counter 增长 | 证据不完整；不能据缺失日志判断未执行 |
| E8 | rebind 后恢复 | 重建覆盖了某段状态，不证明初始根因 |

分析顺序：

1. 绑定同一 powerCycle、boot/VM/device generation、tx/frame/buffer/fence ID；
2. 校准各域时钟并记录误差，小于误差的先后不用于定因果；
3. 找最后有证据的成功交接和首个缺失预期输出；
4. 区分“真实失败、未采集、采集丢失、无法关联、证据冲突”；
5. 保留旧代污染、资源生命周期、consumer 背压、显示映射、证据系统失真等竞争假设；
6. 为每个假设设计一个尽量单变量的区分实验；
7. 将恢复动作、后续 cleanup 与最初触发分开。

## 6. 证据生命周期与降级

~~~mermaid
stateDiagram-v2
  [*] --> Defined
  Defined --> Instrumented: schema + correlation + clock
  Instrumented --> Collecting
  Collecting --> Qualified: completeness / drop / calibration pass
  Collecting --> Suspect: missing / drift / schema mismatch
  Suspect --> Recollecting: safe repeat possible
  Suspect --> Unknown: evidence cannot be repaired
  Qualified --> Evaluated: criterion executed
  Evaluated --> Passed: objective evidence meets criterion
  Evaluated --> Failed: discrepancy found
  Failed --> Correcting
  Correcting --> Recollecting
  Passed --> Archived: baseline + artifact hash
  Unknown --> Escalated: decision authority accepts or blocks
~~~

观测不可用时，业务设计不能默默继续：

- 安全/硬门槛判据证据缺失：阻断通过；
- 非关键增强指标缺失：标 unknown，记录风险接受人和 reopen trigger；
- collector 失效：按项目定义降级、保留本地关键证据或触发 incident freeze；
- 日志风暴：先保留关键事件和 drop/rotation 证据，再做限流；不能用“全局关日志”掩盖根因。

## 7. 可执行验证矩阵

| 用例 | 单变量/注入 | 必采证据 | 通过判据 | 状态 |
| --- | --- | --- | --- | --- |
| 正常冷启/STR | 无故障 | 全链 trace + visible readback | 当前代业务完成 | 待执行 |
| 请求早到/迟到 | 改变 ready 相对顺序 | queue/replay/generation | 不丢失、不旧代污染 | 待执行 |
| 旧 callback/fence | 注入旧 generation | 拒绝与状态写入审计 | 旧代零污染 | 待执行 |
| consumer 阻塞 | 单点阻塞 | queue/fence/P95/P99 | 有界超时与恢复 | 待执行 |
| collector 丢包 | 受控降低证据质量 | drop/schema/clock status | verdict 转 unknown 或阻断 | 待执行 |
| service/device/VM reset | 分层复位 | continuity + authority readback | 状态与资源收敛 | 待执行 |
| 证据轮转 | 压缩留存窗口 | freeze/index/hash | 关键链仍可追溯 | 待执行 |
| 相邻业务与长稳 | 共享资源并发 | per-client + 用户结果 | 无不可接受回归 | 待执行 |

## 8. 练习与可复用产物

提交《可观测性与 V&V 计划 V1》：

1. 需求—接口—状态—资源—业务结果追踪矩阵；
2. 控制、数据、状态、电源、资源、证据六流图；
3. 至少 12 行 Observability Contract；
4. correlation key、时钟校准、schema/version 与 drop/retention 设计；
5. E1—E8 证据资格表、最早断点、至少五个竞争假设与区分实验；
6. ACK→accepted→applied→observable→business accepted 完成阶梯；
7. timeout/reset/旧消息/证据缺失的状态机；
8. 正常、边界、故障、恢复、长稳与相邻业务验证矩阵；
9. artifact 索引、hash、Owner、复核者和判据。

个人反思由你本人填写：哪三个观测点最能改变方案决策？哪个字段最容易因跨域重名而误关联？哪项判据会被采样或轮转破坏？若证据缺失，你会阻断、降级还是接受风险，谁有权决定？

## 9. 提交说明

本课编号 **day-54**。使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。请只提交公开、脱敏材料。

## 附录：21 项 T12T 技能覆盖检查

技能来源：`F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/`。本次已读取全部 21 个 `SKILL.md`。

| 结论 | 技能 |
| --- | --- |
| 深入使用 | t12t-cockpit-diagnosis、t12t-log-analysis、t12t-platform-architecture、t12t-cross-domain-msg、t12t-boot-hmi、t12t-stability-crash-reset、t12t-tpm-triage |
| 适用约束 | t12t-display-black-freeze、t12t-avm-camera-stream、t12t-power-sleep-str、t12t-performance-jank、t12t-log-storm、t12t-virtualization-tee、t12t-mcu |
| 相邻业务回归 | t12t-touch-input、t12t-audio-path、t12t-ethernet-sgmii、t12t-wireless-phone-link、t12t-usb-typec-storage |
| 条件入口 | t12t-db-ke-forensics（出现异常包才执行固定八步）、t12t-tpm-5y8d（有确认根因与修复验证后再展开） |

关键缺口：现车车型/SoC/build、真实拓扑与协议字典、需求阈值、统一关联字段、collector 配置、证据容量、实机 trace、故障注入授权和学习者真实作答。补齐前只能形成可观测性与验证设计，不能宣称现车验证通过。
