# Week 17 — 周日整合：跨层取证、恢复设计与评审验证闭环

学习日期：2026-11-08，星期日，Asia/Shanghai。能力评价仍处于第二阶段“系统链路与问题分析”，本次训练链路取证 L3 与方案评审 L4。范围仅为本周已安排的 Day 53—56：A/B 权衡、可观测性与验证、评审基线、变更与发布门禁。Day 49—52 的资源和接口知识可作为前置工具。今天不推进 Day 57，不提前讲下一专题。建议用时 60 分钟。

开始前已完整扫描答卷 Issue 的开放与关闭状态及评论，授权学习者没有新答卷或补交，本聊天也没有新增作答。Day 34—56 与本周复盘仍待真实作答评审；个人薄弱点尚待验证。本课的构造记录只供独立练习，不附参考答案、示范作答、预设根因或替你填写的个人反思。

## 1. 本周材料与资料边界

| 本周课程 | 在本次整合中的作用 |
| --- | --- |
| [Day 53](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-53.html) | 两种恢复方案的硬门槛、权衡、敏感性和决策记录 |
| [Day 54](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-54.html) | 跨域关联键、时钟误差、完成阶梯与可观测性合同 |
| [Day 55](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-55.html) | 评审基线、发现项、行动项与关闭证据 |
| [Day 56](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-56.html) | 混合版本、发布影响、回滚及风险接受门禁 |

2026-11-08 复核的官方资料：AOSP 将 VHAL 定义为车辆属性读、写、订阅的抽象接口，但本车采用的后端、上游传输和属性字典须以当前构建确认。NASA 的决策分析要求记录备选、准则、假设、不确定性和最终决策；产品验证需要把版本、需求、方法、结果与异常放在同一证据链。OpenTelemetry 的语义约定可帮助各域统一观测字段名，不替代本车的时钟校准和业务验收。

[AOSP VHAL Overview](https://source.android.com/docs/automotive/vhal) · [NASA Decision Analysis](https://www.nasa.gov/reference/6-8-decision-analysis/) · [NASA Product Verification](https://www.nasa.gov/reference/5-3-product-verification/) · [NASA Technical Assessment](https://www.nasa.gov/reference/6-7-technical-assessment/) · [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/)

## 2. 一小时安排

| 时间 | 已学知识的整合任务 | 交付 |
| --- | --- | --- |
| 0—10 分钟 | 四题回顾 | 独立短答，未知写待确认 |
| 10—30 分钟 | 证据合同与有界恢复两条主线 | 跨层链路和恢复草图 |
| 30—50 分钟 | 构造故障的取证、方案和验证 | 证据账本、竞争假设、测试矩阵 |
| 50—60 分钟 | 形成可复用的评审包 | 一页决策记录及本人反思 |

四题回顾：

1. 发送、收到、ACK、业务状态应用、HMI 可见和业务验收分别需要哪一个端点证明？
2. 两域时间戳无法可靠比较时，哪些关联键与域内顺序仍可支持断点定位？
3. 旧 generation 的回调迟到、状态终态 unknown、恢复后重连，各需要怎样的处理和证据？
4. 修复已合入、finding 已关闭、回滚作业 completed 和发布获批，各由什么证据与角色确认？

## 3. 已学方法的整合框架

请先闭卷画出本周的决策与验证关系，再用 Day 53—56 核对。下面的图只说明作业流程，不给构造案例的答案。

~~~mermaid
flowchart LR
  A[冻结输入与版本] --> B[按运行域和代际建证据账本]
  B --> C[比较相邻接口的输入 状态 输出]
  C --> D[列竞争假设与区分实验]
  D --> E[设计有界恢复和验证矩阵]
  E --> F[评审风险与发布门禁]
  F -->|新证据或变化| B
~~~

本次须画自己的业务链：车辆状态源 → MCU 与 Host 边界 → 跨域传输 → Android Guest 的 VHAL/CarService → HMI → 用户可见结果。TBox 是否参与由当前拓扑判断；Hypervisor 的 VM generation 及电源/复位边界要单列。控制、数据、状态、电源/复位、共享资源与证据六流分别标色或编号。各边填输入、前置状态、权威状态源、输出、ACK/业务完成、deadline、旧消息、超时、复位和可观测字段。协议、车型、SoC、软硬件版本、属性含义与时限均待项目确认。

恢复草图须写清：什么条件允许局部恢复，何时扩大恢复范围，状态未知时如何取得权威值，怎样限制重试预算，如何隔离旧代数据，何时进入降级，哪个端点证明恢复后的业务结果。不要把 heartbeat、服务存活或一次重连成功直接写成系统完成。

## 4. 综合案例：混合版本后状态图标停在旧值

以下为**教学构造**，并非 T12T/T29/T16A 实机记录。一次受控混合版本发布和 VM 重建后，HMI 上某车辆状态图标仍显示先前值；重新建立一条服务连接后图标变为当前值。状态 `S0/S1` 只是题目占位符，具体属性、控制权限、风险等级和端到端时限均待项目字典确认。各域时钟未经完整校准，记录编号仅是材料整理顺序，不代表跨域发生顺序。

| 编号 | 待分析的原始摘录或材料 |
| --- | --- |
| E1 | 发布清单写 Host `H42`、Guest `G41`；Guest 二进制哈希栏为空，接口协商记录 `compatible`，MCU 固件和回滚基线栏待确认。 |
| E2 | MCU 采样记录的目标状态序列为 401、402、403，末条值 `S1`；该字段的协议版本和跨域时钟映射未随样本提交。 |
| E3 | Host 接收缓存记录目标序列 403、值 `S1`；同窗有目标 topic 的 publish 403，未附接收端逐消息确认。 |
| E4 | 跨域 channel heartbeat 持续；目标 topic 的接收侧最后一条可读记录为序列 401，采集器在该窗口的 drop counter 增长。 |
| E5 | Hypervisor 记录 Guest instance 从 V12 结束并建立 V13；Android 侧能查到 V12 的订阅登记，V13 的登记与拒旧审计未归档。 |
| E6 | Android 某次属性读取返回 `success` 与缓存值 `S0`；source timestamp、source age、generation 和业务验收记录均为空。 |
| E7 | HMI 录像显示图标仍为 `S0`；屏端采样时间与 Guest 时钟误差未知，录像未附 frameId、请求 ID 或显示映射。 |
| E8 | 现场只记录“重新建立服务连接后图标变为 S1”；动作前后 VHAL、Host、Guest 的状态快照和完整重试范围未留存。 |
| E9 | Finding F7 标为 closed，说明写“已合入恢复补丁”；验证工件的 build ID 早于该补丁，混合版本/旧代回调测试栏为空。 |
| E10 | 回滚作业显示 completed；Host/Guest 版本读回、缓存迁移、相邻车辆状态与长稳结果仍未附证据。 |

### 4.1 跨层取证

1. 为 E1—E10 逐条写“来源、原始时间/时钟、版本、boot/VM generation、关联 ID、直接/相关/背景/反证/缺失、支持范围及局限”。没有采集的字段标未观测；不要写成没发生。
2. 在每个运行域内找最后能证实的成功交接和下一个预期输出。将“明确失败、未观测、无法关联、相互冲突”分开记录；跨域先后只有在误差允许时才推断。
3. 给至少三个处于不同边界的竞争假设，每个写能否定它的观测。区分直接失效、此前触发候选、加剧因素和恢复后的结果；先确定可证实的最小边界，再谈责任。
4. 设计一个最先执行的单变量区分实验。写明正常对照、保留的原始证据、预期区分力、停止条件和 Owner 责任域。实验仅在项目授权的可恢复环境执行。

### 4.2 恢复设计与方案权衡

比较两种候选恢复范围：A 为协调组件统一重建受影响链路，B 为从最早受影响的接口开始局部重取权威状态。它们只是待评价的方案范围，不预设优胜或根因。自行补充前置条件、权威状态、generation、重放/幂等策略、有限重试、超时终态、失败出口、降级影响面、性能与资源预算、观测点及业务验收端点。

| 评审项 | A 的证据与未知项 | B 的证据与未知项 | 硬门槛/权衡准则 | 决策权与复审条件 |
| --- | --- | --- | --- | --- |
| 当前状态恢复与旧代隔离 |  |  |  |  |
| 时间、资源与影响半径 |  |  |  |  |
| 混合版本及回滚兼容 |  |  |  |  |
| 证据质量与业务验收 |  |  |  |  |

### 4.3 测试与评审闭环

写至少六行可执行验证矩阵，覆盖正常值变化、早到/迟到/乱序、旧 generation 回调、Host/Guest 重启、目标 topic 停报、采集丢失或时钟误差过大、混合版本、回滚与相邻状态回归。每行填：注入点与前置条件、版本/时钟/关联键、原始工件、业务端点结果、pass/fail/unknown 判据、恢复预算和退出条件。所有计划测试当前状态写“待执行”；实机结果不得由题目推定。

为 F7、发布和回滚分别列出：基线、发现项和变更 ID、关闭所需的同版本证据、批准角色、风险接受条件、重新打开条件。首轮牵头、触发供证、直接修复、接口/恢复策略、独立验证与发布批准要分开；未知人员和截止日期写待确认。

## 5. 十分钟可复用产物

提交《Week 17 跨层取证—恢复—发布评审包》：

1. 四题短答、一张六流图和跨域时间/代际对照表。
2. E1—E10 证据账本、三个以上竞争假设、反证及一个优先实验。
3. A/B 恢复边界和状态图、硬门槛与敏感性表。
4. 六行以上验证矩阵、F7 关闭表、发布/回滚门禁与 TPM 责任表。
5. 200 字左右本人评审意见，并由你本人回答：最可能把哪一跳的局部成功误作业务完成？哪条缺失证据最可能改变你的决定？

当前个人薄弱点保持“待真实作答验证”。本次复盘复用既有架构知识库第 20 章的接口与证据合同、第 23 章的验证、评审和发布门禁；构造案例结论及个人答案不写为平台事实。

[架构第 20 章](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/20.html) · [架构第 23 章](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/23.html) · [知识银河](https://qiantao18817568425-art.github.io/Cockpit_Knowledge_Galaxy/)

## 6. 提交与归档

本单元编号 **week-17-sunday**。从页面末尾“上传／提交答卷”提交文字、架构图与证据表，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。答卷和批改会公开同步 GitHub，请仅提交已脱敏且可公开的资料；本人编辑答卷或以 `[补交]` 开头的评论会生成新评审版本。

## 附录：T12T 优化版 21 项覆盖

本次从 `F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/` 依序读取三个通用入口及其余 18 项，完成 21/21 适用性检查。深入使用平台域路径、日志时间与证据、跨域消息和 TPM 分责；题中不是实车日志。

| 技能 | 本次适用性 |
| --- | --- |
| t12t-cockpit-diagnosis | 深入，现象、主链和证据边界 |
| t12t-log-analysis | 深入，时钟、generation 与最早可证实断点 |
| t12t-platform-architecture | 深入，Guest/Host/MCU/Hypervisor 边界与六流 |
| t12t-display-black-freeze | 条件适用，HMI 端点及屏幕映射，缺物理屏实证 |
| t12t-touch-input | 不适用，本题没有触控事件 |
| t12t-avm-camera-stream | 不适用，本题没有 Camera/AVM 事件 |
| t12t-power-sleep-str | 条件适用，VM 重建与电源态须区分，缺 suspend attempt |
| t12t-audio-path | 不适用，本题没有音频故障 |
| t12t-stability-crash-reset | 条件适用，仅知 Guest generation 变化，直接重启机制待证 |
| t12t-performance-jank | 材料不足，无端到端时延和资源基线 |
| t12t-ethernet-sgmii | 不适用，物理承载未确认且无有线链证据 |
| t12t-wireless-phone-link | 不适用，无无线/手机互联记录 |
| t12t-cross-domain-msg | 深入，target topic freshness 与消息完成分层 |
| t12t-boot-hmi | 条件适用，重建后 ready、订阅与端点可见性待证 |
| t12t-log-storm | 条件适用，仅知采集丢失；没有日志风暴量化证据 |
| t12t-usb-typec-storage | 不适用，无 USB/存储材料 |
| t12t-virtualization-tee | 条件适用，VM generation 已知；无虚拟事务或 TEE 原始证据 |
| t12t-db-ke-forensics | 材料不足，无异常包 |
| t12t-mcu | 条件适用，车辆状态源与协议字典待确认 |
| t12t-tpm-triage | 深入，首轮牵头与验证/批准责任拆分 |
| t12t-tpm-5y8d | 材料不足，无确认根因与修复验证，不展开 5Y/8D |

关键缺口为本车车型/SoC/build、现车拓扑、属性/协议字典、跨域时钟误差、完整采集覆盖、发布权限与真实学习者答卷。
