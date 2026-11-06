# Day 56 — 方案评审 II：变更影响、风险关闭与发布门禁

计划学习日期：2026-11-05，星期四，Asia/Shanghai；因任务漏发，于 2026-11-06 首次补录和发布。Week 17。今天训练把评审结论转成受控变更和可审计发布：变更对象、影响范围、风险、兼容、迁移、回滚、复验和批准必须同一条链闭环。建议用时 60 分钟。

答卷扫描无新增，Day 34—56 继续待真实作答评审。课程中的门禁、风险等级、时限和案例均为方法模板，不是现车平台事实。

## 1. 官方依据

- [NASA Configuration Management](https://www.nasa.gov/reference/6-5-configuration-management/)：配置识别、变更管理、状态记账和配置验证共同保证产品与批准信息一致；外部接口变更需要相关方协调批准。
- [NASA Technical Risk Management](https://www.nasa.gov/reference/6-4-technical-risk-management/)：持续识别风险来源、可能性和后果，制定缓解、监控并在决策中显式处理不确定性。
- [NASA Product Verification](https://www.nasa.gov/reference/5-3-product-verification/)：产品、需求、环境、工具和程序版本都要记录；变更导致不符合项修正后需要重新验证。
- [NASA Technical Assessment](https://www.nasa.gov/reference/6-7-technical-assessment/)：评审、度量、发现项和行动项为技术决策提供状态证据。
- [Automotive SPICE PRM 4.5](https://automotivespice.com/fileadmin/software-download/automotiveSIG_PRM_v45.pdf)：变更、问题、配置、架构和验证结果需要建立一致性和追踪。

## 2. 一小时安排

| 时间 | 任务 | 产物 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 5 题 | 变更边界短答 |
| 10—30 分钟 | 建立影响分析与配置控制 | Change Impact Graph |
| 30—50 分钟 | 完成跨域发布案例 | 风险、迁移、回滚、验证 |
| 50—60 分钟 | 做发布决定 | 《发布就绪与变更记录 V1》 |

回顾题：

1. 为什么代码已合入不等于接口基线已批准或车辆版本可发布？
2. 外部接口字段新增、语义改变和默认值改变分别影响哪些消费者？
3. waiver、deviation、风险接受和测试未执行为什么不能混用？
4. rollback 成功能证明什么，不能证明什么？
5. 变更后哪些需求、场景、接口、资源、状态机、证据和测试必须重新追踪？

## 3. 变更影响图：不要只列“修改文件”

变更记录最少包含：

- changeId、触发原因、提议者、决策权主体、计划版本；
- 当前 baseline 与目标 baseline 的需求、架构、接口、配置、代码、模型、测试和证据 hash；
- 直接修改、上游输入、下游消费者、共享资源、状态 authority、恢复策略和运维影响；
- 兼容矩阵、迁移顺序、feature gate、mixed-version 窗口和旧数据处理；
- 安全/法规/性能/资源/进度风险及残余风险接受；
- 验证范围、相邻业务回归、发布门禁、rollout、rollback/degrade；
- 实施结果、配置状态记账、复验和关闭证据。

~~~mermaid
flowchart LR
  C[Change request] --> R[Requirements / ConOps]
  R --> A[Architecture allocation]
  A --> I[Interfaces / schema / version]
  I --> S[State authority / lifecycle]
  I --> U[Resources / timing / capacity]
  S --> X[Recovery / migration / rollback]
  U --> X
  X --> V[Verification + validation]
  V --> G[Release gate]
  G --> B[New baseline]
  C -. impact / rationale .-> L[Change ledger]
  V -. evidence / discrepancy .-> L
  B -. configuration status .-> L
~~~

影响分析按“对象—依赖—失败方式—证据—Owner”展开。仅查编译依赖会遗漏运行时 topic、共享 buffer、状态缓存、DTC、日志 schema、测试夹具和运维工具。

## 4. 发布门禁：通过不是一个布尔值

| 门禁 | 最低证据 | 不能通过的情况 |
| --- | --- | --- |
| 基线一致 | 需求/架构/接口/代码/配置/测试版本一致 | 版本或 hash 不明 |
| 接口兼容 | 双端版本矩阵、协商/拒绝/降级 | silent reinterpretation |
| 状态迁移 | authority、旧状态转换、幂等、拒旧 | 旧代可覆盖当前状态 |
| 资源与性能 | 峰值、尾时延、容量、回收、长稳 | 只看平均值 |
| 异常恢复 | timeout/reset/断电/混合版本/回滚 | 无限重试或未知终态继续运行 |
| 证据质量 | trace、时钟、drop、artifact/hash | 关键判据证据缺失 |
| 风险关闭 | 缓解、contingency、残余风险接受 | 硬门槛未关闭 |
| 验证与回归 | 正常、边界、故障、恢复、相邻业务 | 关键用例未执行且无有权豁免 |
| 发布治理 | rollout、观察窗、停止/回滚、Owner | 无停止权或回滚条件 |

传输 ACK、包安装成功、服务 ready、健康检查通过和用户业务完成是不同里程碑。发布门禁要指定每一层的证明者与原始工件。

## 5. 工程案例：AVM 恢复从集中协调改为域内自治

教学构造变更：当前版本使用 Host coordinator；新版本拟改为域内自治与 versioned contract，以减少集中点和提升扩展性。未知现车数据不预设该变更更优。

### 5.1 混合版本与发布时序

~~~mermaid
sequenceDiagram
  participant M as MCU/Vehicle Intent
  participant H as HMI Guest
  participant Y as Yocto/Host
  participant C as Camera Domain
  participant D as Display Domain
  M->>H: AVM intent + source generation
  H->>Y: capability/version negotiation
  Y-->>H: supported contract + epoch
  Y->>C: current intent / migration state
  C->>D: frame + schema + resource generation
  D-->>H: applied / visible readback
  Note over H,D: 旧版、混合版、新版分别验证；不兼容必须明确拒绝或降级
~~~

### 5.2 构造证据

| 编号 | 构造记录 | 当前最多能证明 |
| --- | --- | --- |
| E1 | 新 HMI 与旧 Host 的 capability negotiation 成功 | 协商消息成功，不证明业务语义兼容 |
| E2 | 新 Camera 发出 schema v3，旧 Display 未识别可选字段 | 存在兼容风险，需确认默认/忽略语义 |
| E3 | mixed-version 下 accepted 正常，但 visible readback 偶发旧帧 | 业务异常与混合版本相关，最早断点待证 |
| E4 | rollback 后恢复 | 回退覆盖了问题条件，不证明变更是唯一根因 |
| E5 | 新版 P50 更好，P99 和失败率样本不足 | 不能宣布性能整体改善 |
| E6 | 一项资源 attachment 在切换 epoch 时终态 unknown | 所有权不明，禁止早复用或重复释放 |
| E7 | 故障注入未覆盖 Host reset 与掉电中断 | 恢复验证缺口 |
| E8 | 观察窗没有 collector drop 统计 | “未见异常”可信度受限 |

### 5.3 完整分析与竞争假设

1. 用 changeId、baseline、build、contract version、epoch/generation、tx/frame/resource ID 关联；
2. 校准多域时间，确认最早出现不兼容、状态错位或证据缺失的位置；
3. 保留 schema 解释、旧状态迁移、资源 epoch、consumer 背压、visible readback 与 collector 缺口等竞争假设；
4. 区分变更触发、直接失效、加剧因素、回滚动作和回滚后的 cleanup；
5. 比较全新版本、混合版本、升级中断、回滚中断、peer reset 和断电；
6. 对终态 unknown 的资源执行 readback/quarantine，不盲目重试释放；
7. 只有关闭硬门槛、风险、验证和治理门禁后，决策权主体才能批准新 baseline。

## 6. 变更与发布状态机

~~~mermaid
stateDiagram-v2
  [*] --> Proposed
  Proposed --> ImpactAnalyzed: dependencies + risks + owners
  ImpactAnalyzed --> Rejected: hard constraint fails
  ImpactAnalyzed --> ApprovedForImplementation: authority approves
  ApprovedForImplementation --> Implemented
  Implemented --> VerificationReady: baseline + environment frozen
  VerificationReady --> Failed: discrepancy / evidence quality fail
  Failed --> Rework
  Rework --> ImpactAnalyzed
  VerificationReady --> ReleaseCandidate: criteria pass
  ReleaseCandidate --> RollingOut: staged release
  RollingOut --> Observing: health + business + evidence quality
  Observing --> Released: exit criteria met
  Observing --> RollingBack: stop trigger / risk threshold
  RollingBack --> PreviousBaseline: rollback verified
  PreviousBaseline --> ImpactAnalyzed
~~~

回滚不是“恢复旧包”就结束。还要验证旧配置、数据库/状态、资源、DTC、缓存、接口版本和业务结果都回到受支持 baseline；不可逆数据迁移必须有兼容或恢复策略。

## 7. 风险、豁免与关闭

- **风险接受：**有权主体在已知 scenario、likelihood、consequence、缓解和残余风险后接受；
- **waiver/deviation：**对某项批准要求的偏离，必须记录范围、期限和批准权；
- **未执行：**没有证据，不能自动转为 waiver；
- **测试失败：**是 discrepancy，需要纠正、重新设计或有权处理，不能用“风险已知”抹掉；
- **证据不可读/不完整：**结论为 unknown，关键门禁应阻断。

风险关闭必须有触发信号、行动完成、复验结果和残余风险接受。到期或条件变化时重新打开。

## 8. 可执行验证

| 场景 | 变量 | 关键证据 | 通过判据 | 状态 |
| --- | --- | --- | --- | --- |
| 旧→新正常升级 | 版本顺序 | negotiation/migration/readback | 当前业务状态正确 | 待执行 |
| 新旧混合运行 | 双端组合 | schema/feature/epoch | 兼容或明确拒绝/降级 | 待执行 |
| 升级中断 | service/VM/掉电 | transaction/generation | 可恢复且无双写 | 待执行 |
| rollback | 变更后回退 | 配置/状态/资源/业务 | 回到受支持 baseline | 待执行 |
| 旧消息与旧资源 | 注入旧代 | 拒绝/quarantine 审计 | 当前代零污染 | 待执行 |
| 性能与长稳 | 并发、温度、资源压力 | P95/P99/失败率/泄漏 | 项目阈值满足 | 待执行 |
| 证据系统失效 | drop/clock/schema | evidence quality | unknown/阻断策略正确 | 待执行 |
| 相邻业务 | 导航/音频/显示并发 | 用户结果与共享资源 | 无不可接受回归 | 待执行 |

## 9. 练习与可复用产物

提交《发布就绪与变更记录 V1》：

1. change request、当前/目标 baseline 与决策权；
2. 需求—架构—接口—状态—资源—恢复—测试影响图；
3. 版本/能力协商与 mixed-version 兼容矩阵；
4. E1—E8 证据资格、竞争假设和区分实验；
5. 风险三元组、缓解、contingency、残余风险和接受人；
6. rollout、观察窗、stop trigger、rollback/degrade 与证据冻结；
7. 正常、升级、混合、异常中断、回滚、长稳、相邻业务验证矩阵；
8. 发布门禁结论：通过/有条件通过/拒绝/证据不足暂停。

个人反思由你本人填写：哪个依赖最容易漏出影响分析？哪个 rollback 假设尚未被验证？如果发布窗口内出现业务恢复但证据质量下降，你是否继续，谁有权决定？

## 10. 提交说明

本课编号 **day-56**。使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。

## 附录：21 项 T12T 技能覆盖

已读取 F 盘优化版全部 21 项。深入使用综合路由、日志证据、平台架构、跨域消息、启动、稳定性、虚拟化和 TPM 分责；电源、显示、AVM、性能、日志风暴、MCU约束升级/回滚场景；音频、触摸、有线、无线、USB作为共享资源与相邻业务回归；DB/KE 仅在异常包出现后执行；5Y/8D 在确认根因和修复验证后展开。当前缺口为真实配置项、版本兼容矩阵、批准权、风险阈值、混合版本实测、回滚证据、故障注入授权和学习者作答。
