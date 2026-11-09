# Day 57 — 跨域架构评审实战：车辆状态提示链与决议闭环

计划学习日期：2026-11-09，星期一，Asia/Shanghai；Week 18。能力评价仍处于第二阶段，Day 57 是面向 L4 的设计训练，材料发布不代表掌握。建议用时 60 分钟。完整扫描全部状态的答卷 Issue 与评论后，本次没有新的真实作答；个人薄弱点与掌握程度仍待验证。

本课把 Day 51—56 的需求、接口、方案权衡、观测、评审和发布知识用于一份可审计的跨域评审决议。案例只用于练方法；车型、SoC、硬件版本、具体协议、时限、告警等级、提示音策略和实测结果均**待项目确认**，不能当成现车事实。

## 1. 官方依据与使用边界

- [NASA Technical Assessment](https://www.nasa.gov/reference/6-7-technical-assessment/)：技术评审需定义目的、准入和成功判据，跟踪并解决行动项；评审结果为决策提供证据。
- [NASA Decision Analysis](https://www.nasa.gov/reference/6-8-decision-analysis/)：先定义决策、强制条件和可度量准则，再比较备选、假设与不确定性，记录建议、最终决策及其理由。
- [NASA Product Verification](https://www.nasa.gov/reference/5-3-product-verification/)：需求符合性须有客观证据或有权豁免，偏差项须闭环；端到端验证用于证明接口兼容和系统功能。
- [AOSP Vehicle HAL overview](https://source.android.com/docs/automotive/vhal)：VHAL 定义车辆属性及其元数据，是 AAOS 侧车辆属性入口的公共机制，不证明本车上游网关或音频路径。
- [AOSP AIDL VHAL interface](https://source.android.com/docs/automotive/vhal/vhal-interface)：属性状态可为可用、不可用或错误；状态变化事件应把不可用/错误传给上层。实际属性、区域、更新模式与语义以当前版本接口定义为准。

## 2. 一小时路线

| 时间 | 任务 | 当段产物 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 5 题 | 评审边界短答 |
| 10—30 分钟 | 学习“决议合同”和“跨域完成阶梯”两个概念 | 决议与证据表 |
| 30—50 分钟 | 推演教学构造案例，找首个可证实断点 | 六流图、双时间线、竞争假设 |
| 50—60 分钟 | 独立形成架构评审意见 | 《跨域架构评审决议 V1》 |

回顾题（先独立回答）：

1. 为什么运输 ACK、VHAL 属性更新和用户看到正确提示是三个不同的完成阶段？
2. 评审中的“建议通过”与批准决议、配置基线生效分别由什么证据连接？
3. 旧 VM 的回调晚到时，哪些字段可阻止它覆盖当前权威状态？
4. 一条跨域时间线的两个事件间隔小于时钟映射误差时，如何描述先后？
5. 什么证据足以关闭评审发现项；哪些记录只能证明行动已分派？

## 3. 两个核心概念

### 3.1 评审决议是带版本的合同

评审输入冻结 Need/场景、系统需求、接口版本、当前与候选架构、状态 authority、资源/时序预算、风险、验证矩阵及证据索引。结论只能在明确范围内作出：**通过、附条件通过、退回、证据不足暂停**。每一项附条件结论都要有 finding ID、影响、Owner、完成期限、可读工件、复验判据、批准角色和 reopen 条件。行动项“已创建”、研发回复“已修复”、测试“已执行”、结果“符合判据”和决策主体“批准”是不同里程碑。

追踪链为 `Need → Req → Scenario → architecture/interface version → finding → change/test → raw evidence → disposition → approved baseline`，反向也能从失败证据找到需求和决策。未知的项目时限或阈值写 TBD，并给出负责关闭的角色与所需测量，不能凭经验填入。

### 3.2 跨域业务完成要跨越控制、数据、状态、电源与证据边界

教学构造业务：车辆模式发生变化后，仪表外的座舱 HMI 更新文字，且可选提示音按策略播放。**这不是某车型功能配置声明。**候选运行域为 MCU/车身信号源、Yocto Host 网关、Hypervisor/Guest 边界、Android AAOS/VHAL/CarService/HMI、音频执行链；TBox 是否参与、实际网关归属和传输协议均待项目图纸与构建确认。

| 路径 | 上下游责任 | 评审必须看见的结果 |
| --- | --- | --- |
| 控制 | 模式源发布意图 → 网关/策略 → HMI/音频请求 | request、接受/拒绝原因、去重与取消 |
| 数据 | 当前模式值及状态、sequence、source timestamp → VHAL/消费者 | schema、有效性、新鲜度、实际展示值 |
| 状态 | MCU/源权威状态 → Host cache → Guest cache → HMI/音频状态 | authority、读回、代际、未知态 |
| 电源 | 唤醒/STR/VM 重建 → 服务及依赖恢复 | readiness 屏障、旧代冻结、新代重取 |
| 证据 | 各域同一事务及源事件关联 | boot/VM/process generation、tx/sequence、域内时间、映射误差、drop counter、工件 hash |

**完成阶梯：**源状态已采样 → Host 接收 → transport ACK → Guest/VHAL 接收 → 当前代消费者应用 → HMI 可见读回／音频物理输出 → 与源权威状态一致的用户业务完成。ACK 仅证明对应接口阶段，不能代替业务完成。提示音若属于同一业务验收，须单独证明策略、音频数据与执行端；音频请求 accepted 也不是听到声音。

~~~mermaid
sequenceDiagram
  participant M as MCU/权威模式源
  participant Y as Yocto Host/网关候选
  participant V as Hypervisor/Guest 边界
  participant A as Android VHAL/CarService
  participant H as HMI/提示音策略
  participant O as 显示/音频执行端
  M->>Y: mode=value, sourceSeq, sourceEpoch, status
  Y-->>M: 接收 ACK（仅局部）
  Y->>V: mode + schema + epoch + sourceTime
  V->>A: 当前 VM generation 的属性事件
  A->>H: 属性状态/值/关联键
  H->>O: HMI 更新/提示音请求
  O-->>H: 当前帧可见/音频输出读回
  H->>M: 仅在权限与协议允许时对账权威状态
  Note over M,O: 完成判据需当前代、正确值、新鲜度、可见/可听结果及可追溯证据
~~~

复位或超时后，先冻结原 transaction 和原 deadline，查询权威源与执行端，再按幂等键决定继续、补偿或有界重试；终态未知时隔离旧资源与旧消息，不得盲目发新命令。若 source、Host、Guest 的 generation 不一致，旧代 callback 只入审计，不得更新新代状态。具体重试预算、TTL、弱网/掉电行为由本项目需求和安全分析确定。

## 4. 教学构造：模式提示滞后的一次评审

以下 E1—E8 完全虚构，只用于演示证据分层，不能写入实车故障库。

| 证据 | 构造记录 | 能证明的范围 |
| --- | --- | --- |
| E1 | 同一 power cycle 下，模式源先发布 seq 81 的 A，再发布 seq 82 的 B | 源内顺序；跨域时间仍需校准 |
| E2 | Host 网关记录 seq 82 已入缓存，并向 Guest 发送 | Host 局部发送，不证明 Guest 接收 |
| E3 | Guest 重建后 VM generation 从 g7 变为 g8 | Guest 生命周期变化；Host/MCU 是否复位须另证 |
| E4 | g8 的 VHAL 记录 seq 82、status=available，随后 HMI 消费者记录 seq 81、来源 generation=g7 | 新代已见 B；旧代事件仍进入 HMI 消费路径 |
| E5 | HMI 读回显示 A，音频策略仅记录 request accepted，缺执行端读回 | 可见结果与源 B 不一致；声音结果未知 |
| E6 | transport heartbeat 和其他属性持续 | 公共通道仍有活动，不能证明目标属性全链正确 |
| E7 | 各域有共同 sourceSeq 锚点，但两条 wall-clock 日志误差区间重叠 | 只可按域内顺序与 ID 关联，不可凭墙钟给出毫秒级因果 |
| E8 | 缺 g7 队列清理与 g8 HMI 消费者去重规则的原始跟踪 | 旧事件由何处泄出、代码缺陷与触发点尚未证实 |

**完整故障分析：**现象是 HMI 显示 A，而权威源已进入 B；音频是否实际播放未知。按 sourceSeq、power cycle、VM generation 重建双时间线，当前最早可证实的异常边界在 **g8 HMI 消费路径出现 g7/seq81 事件并导致旧值可见**。E4 与 E5 支持直接失效，E3 是可能触发条件，E6 是公共链活跃的背景/局部反证，E7 限制跨域排序，E8 是根因缺口。不能仅凭“VM 重建后出现”断言 Hypervisor 是根因，也不能因重启 HMI 后恢复而认定原因。

竞争假设至少包括：旧回调未按 generation 过滤、Host 补发队列的 schema/epoch 解释错误、HMI 消费者乱序更新、读回/采集串错会话。区分实验应在同一构建和受控环境中分别注入 Guest 重建、旧回调晚到、seq 乱序、Host 重连与属性不可用，记录同一 ID 在 Host 出队、Guest 接收、VHAL 更新、HMI 消费和可见帧的里程碑。只有找到首个实际违规接口和可复现机制，才可提升根因置信度。

**恢复设计：**g8 就绪后先阻断 g7 事件；从源 authority 取最新值及可用性，校验 sequence/epoch，再更新 HMI；状态无法确认时显示不可用/待同步并进入有界恢复。声音若进入验收，补齐音频执行端读回并防止旧代重复播报。直接修复方与接口合同方需在证据指向具体组件后确定；目前首轮由系统集成/跨域接口 Owner 牵头，MCU 源、Host 网关、Android VHAL/HMI、音频与测试各提供相邻里程碑。

~~~mermaid
stateDiagram-v2
  [*] --> Candidate
  Candidate --> BaselineFrozen: 需求/接口/证据索引齐备
  BaselineFrozen --> ReviewOpen: 准入判据满足
  ReviewOpen --> EvidenceGap: 关键证据缺失
  ReviewOpen --> FindingsOpen: 发现接口/恢复风险
  EvidenceGap --> ReviewOpen: 补齐可读证据
  FindingsOpen --> Rework: Owner 接受行动
  Rework --> Reverify: 变更+对应版本测试
  Reverify --> FindingsOpen: 失败/旧代污染
  Reverify --> DecisionReady: 判据、风险、回归齐备
  DecisionReady --> Approved: 有权主体记录决定
  DecisionReady --> Rejected: 硬门槛不满足
  Approved --> ControlledBaseline: 配置状态记账
  ControlledBaseline --> ReviewOpen: 新证据/版本/风险触发重审
~~~

## 5. 可执行验证与评审关闭

以下是**待执行**的测试设计；测试账号、信号、工具、版本和注入权限待项目确认。每行保存 reqId、build/配置 hash、sourceSeq、boot/VM generation、时间映射误差、原始工件 URI/hash、测试人和判据结果。

| 场景与步骤 | 关键观测 | 通过判据 |
| --- | --- | --- |
| 正常 A→B；读取源、Host、Guest、HMI 与执行端 | 同一 seq/epoch，分层 ACK 与读回 | 当前正确值按项目时限可见；音频若要求则证实输出 |
| Guest 重建时发送 A→B；待 g8 ready 后重取源 | g7/g8 事件、消费者状态、源读回 | 旧代零覆盖，新代状态最终一致 |
| 注入重复、乱序、超时和取消 | 幂等键、deadline、旧队列、错误分类 | 无重复副作用；未知终态进入有界恢复 |
| 源属性 unavailable/error，随后恢复 | status、age、UI 降级与恢复记录 | 不展示未经确认的旧值；恢复后重新验收 |
| Host 或 MCU 局部复位、STR 恢复 | power/boot/generation 与依赖屏障 | 正确重订阅/重建；跨域状态对账 |
| 采集 drop、时钟误差、证据缺片 | collector drop、artifact 完整性 | 证据不足标 unknown，关键 finding 不关闭 |
| 相邻业务并发及混合版本 | HMI、音频、资源、接口兼容 | 不可接受回归为零或有权处置 |

评审关闭逐条核对：最早断点的可读证据、对应修改与版本、正常/异常/恢复/回滚回归、当前代业务读回、残余风险接受和配置基线。项目参数未定、测试未执行、工件不可读或学习者未作答均不可写“已通过”。

## 6. 独立作业：《跨域架构评审决议 V1》

**作业场景与教学案例不同：**某构造平台在摄像头服务局部重启后，AVM 请求已收到 ACK，页面仍偶发显示上一次会话的画面；同时 Host 记录一个 buffer 回收超时。已知信息仅到此处，**不附参考答案、示范作答或预设根因**。请独立完成：

1. 定义当前车型/版本与材料范围、用户现象、Need、至少两条可验证 system shall 和业务验收判据；未知项目参数列 TBD 与关闭证据。
2. 画 MCU/触发源、Yocto Host、Hypervisor、Android Guest、Camera、Display 的控制/数据/状态/电源/证据六流图，标实际连接待确认的边。
3. 画含 request/ACK、buffer/fence、present/可见读回、超时、reset、旧会话消息的时序或状态图；区分局部完成与业务完成。
4. 建立至少三种竞争假设、各自支持证据/反证/缺口、最小区分实验和首轮责任域。不得仅用“服务重启后恢复”定根因。
5. 给出两个可行恢复/架构方案，先检查硬门槛，再做证据化权衡、风险与残余风险处理；记录建议与待有权主体决定的事项。
6. 建立评审 finding 表和正常、故障、恢复、旧代、资源未知终态、混合版本、回滚及相邻业务的验证矩阵；逐条写关闭判据、原始证据、Owner 与重新打开条件。
7. 最后写一段给研发或管理层的 TPM 摘要：当前能确认什么、哪些只是可能、下一步谁提供哪份证据、什么条件才能批准设计。

个人反思由你本人填写：本次最可能被 ACK 掩盖的业务缺口是什么？你的方案在哪个假设变化时可能翻转？哪一项证据会最先改变评审结论？

## 7. 提交与技能覆盖

本课编号 **day-57**。使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。提交前可脱敏；答卷与附件公开。未提交前仅记待验证，评审将在真实作答出现后逐题进行。

本次从 **F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/** 读取并检查全部 21 项 SKILL.md。深入使用综合路由、跨域日志、平台架构、跨域消息、虚拟化、MCU 与 TPM 分责参考；稳定性、启动、电源、AVM、显示和音频用于故障/回归边界，证据材料不足以对实车定责；性能、以太网、无线、触摸、日志风暴、USB、DB/KE 在本教学链路中未见触发，保留为相邻影响检查；5Y/8D 只有在真实根因与验证材料齐备后才适用。当前缺口：现车车型/SoC/构建、真实域连接与协议、信号定义、音频/显示验收、时钟误差、原始日志、门禁阈值、测试执行和学习者作答。

**独立总结：**本课训练的用户现象是教学构造的车辆状态提示滞后；主链从权威模式源经 Host/Guest/VHAL 到 HMI 和可选音频。构造证据仅支持旧代事件进入新代消费路径这一直接断点；泄出位置和根因仍待区分实验，置信度仅限该构造材料。TPM 首轮协调系统集成与跨域接口，并向各域索取同一 sourceSeq/generation 的原始里程碑；在当前代业务读回、异常恢复、证据质量和评审发现关闭前不宣称设计通过。
