# Week 17 — 周六巩固：方案权衡、观测合同与发布证据训练

学习日期为 2026-11-07，星期六，Asia/Shanghai。范围为本周已安排的 Day 53—56。能力阶段仍按第二阶段“系统链路与问题分析”记录，训练深度为链路分析 L3 与方案评审 L4 练习。今天不推进 Day 57，不提前讲未来课。建议用时 60 分钟。

本次已完整扫描仓库全部状态的 Issue 和评论，未发现授权学习者的新答卷或补交，本聊天也没有新增作答。Day 34—56 及此前复盘继续待真实作答评审。个人薄弱点尚待验证，下面列出待检查维度，个人反思由你本人填写。本次独立练习不附参考答案、示范作答或预设根因。

## 1. 范围与材料

| 已安排课程 | 本次练习重点 |
| --- | --- |
| [Day 53](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-53.html) | 硬门槛、A/B 证据置信度、敏感性、风险及决策记录 |
| [Day 54](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-54.html) | 关联键、时钟误差、完成阶梯、可观测性及验证合同 |
| [Day 55](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-55.html) | 基线、场景走查、发现项、行动项及关闭证据 |
| [Day 56](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-56.html) | 变更影响、混合版本、风险、发布与回滚门禁 |

Day 49—52 的资源与接口知识仅作为前置引用。题中场景和记录是教学构造，车型、SoC/build、协议、显示映射、时限、恢复预算和批准权限均待项目确认。

官方资料于 2026-11-07 复核，沿用本周已覆盖的机制。NASA 的决策分析要求明确准则、备选、证据、不确定性与决策者，技术评估要求定义评审目的和准入/成功条件并跟踪行动项。OpenTelemetry 的语义约定用于统一操作与数据字段名称。

[NASA Decision Analysis](https://www.nasa.gov/reference/6-8-decision-analysis/) · [NASA Technical Assessment](https://www.nasa.gov/reference/6-7-technical-assessment/) · [NASA Product Verification](https://www.nasa.gov/reference/5-3-product-verification/) · [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/)

## 2. 一小时安排

| 时段 | 任务 | 最小交付 |
| --- | --- | --- |
| 0—10 分钟 | 五题回顾 | 每题两三句，未知项写 TBD |
| 10—30 分钟 | 重画知识地图与工程链路 | 一张六流架构图，三条接口合同 |
| 30—50 分钟 | 故障与架构综合题 | 证据账本、三个竞争假设、三项验证 |
| 50—60 分钟 | 形成可复用评审卡并反思 | 一页意见及本人反思 |

**五题回顾**

1. 一项硬门槛需要哪类证据才算满足？若权重改变使 A/B 排序翻转，决策记录应增加什么？
2. received、ACK、accepted、applied、端点可见和 business accepted 分别由谁证明？
3. 两域事件间隔小于时钟映射误差时，如何记录关联和先后？
4. finding 已改代码后，谁依据什么关闭它？什么变更应重新打开？
5. mixed-version、部分发布失败和 rollback 需要哪些独立验证结果？

## 3. 地图与画图

先闭卷重画 Day 53—56 的知识地图，再用课程核对。每条连接写出交付物 ID、版本、Owner 和接受条件。

~~~mermaid
flowchart LR
  T[方案权衡] -->|决策记录| O[观测合同]
  O -->|验证证据| R[架构评审]
  R -->|发现与行动| C[受控变更]
  C -->|门禁证据| P[发布评估]
  P -->|新证据与风险| T
~~~

以上只是本周知识关系提示。工程链路图由你独立画出，必须包含：

- Android Guest 的业务意图和最终反馈。
- Yocto Host 的恢复协调、Camera 与显示执行边界。
- Hypervisor 的运行周期或共享资源边界。
- MCU 的车辆状态与电源输入。
- TBox 的适用性判断，选择参与或不适用并给依据。
- Camera、物理屏及背光的实际观测点。

分别标出控制、数据、状态、电源/复位、资源和证据路径。为关键接口填写输入、前置状态、权威状态源、输出、ACK/完成语义、deadline、generation、超时/取消、迟到/重复消息、复位后重建和日志字段。将未由材料确认的协议、器件及参数写为待项目确认。

选择三条最关键接口做合同即可。完整矩阵留作课后扩展。

## 4. 综合场景与原始记录

某团队计划发布 AVM 的恢复策略变更。方案 A 使用集中恢复协调，方案 B 将部分恢复交给域内组件。两个方案均在 Day 53—56 讨论范围内。项目要求同一请求可追踪、终态可判定、故障恢复有界，具体业务时限与风险接受权限待确认。

灰度样本在 STR 恢复后出现短时旧画面，随后可恢复。下面仅给采集记录。各域使用独立单调时钟，尚缺完整跨域校准，编号表示材料收集顺序。

| 编号 | 构造材料 |
| --- | --- |
| E1 | 方案 B 的加权评价高于 A，一项恢复时间评分来自单轮测试；硬门槛表中两项证据链接为空。 |
| E2 | 变更包为 C17，Host 清单记录新协调组件，Guest 清单缺二进制哈希；接口版本协商返回 compatible。 |
| E3 | Android 记录 request T61、VM generation G9、StartAVM accepted；deadline 与 business accepted 字段未导出。 |
| E4 | Host Camera 的四路 sequence 递增，目标输出记录 present；该 present 没有 frameId 或 requestId。 |
| E5 | 旧 generation G8 的 callback 在 G9 日志中出现，缺接收方接受/拒绝及状态写入审计。 |
| E6 | 显示端点采样显示部分画面仍为上一帧，端点设备时钟与 Host 时钟误差未知。 |
| E7 | 现场做局部 rebind 后画面恢复，采集器 drop counter 在动作前后增长。 |
| E8 | review finding F4 被标记 closed，附件仅写“已提交修复”；验证包的 build 字段属于变更前版本。 |
| E9 | rollback 作业显示 completed，版本读回、状态迁移和相邻导航业务的回归栏为空。 |

### 4.1 故障题

完成一份有证据边界的故障分析：

1. 给 E1—E9 标出事实、推断与缺失信息，并分别说明支持范围。
2. 分域写最后可证实的成功交接和下一个预期输出，区分明确失败、未观测、无法关联及证据冲突。
3. 标出能固定的直接失效边界、此前触发候选、加剧因素和动作后的后果。
4. 用至少三个竞争假设覆盖不同边界，每个假设写一个能否定它的观测。
5. 选一个先做的区分实验，写单变量、对照、采集、预期差异和退出条件。
6. 说明 rebind 和 rollback 记录分别允许作出多大范围的恢复判断。

完整分析由学习者提交。根因、责任结论和实验胜负由实际作答及后续证据决定。

### 4.2 架构与发布题

给出 A/B 决策是否继续成立、F4 如何处理以及灰度发布下一步的意见。每个意见绑定材料编号、未知项、决策权和重新评估条件。

从下面的空白记录组织评审，不预填结论：

| 事项 | 当前判定与依据 | 待补证据 | Owner 责任域 | 接受/退出判据 |
| --- | --- | --- | --- | --- |
| A/B 硬门槛与敏感性 |  |  |  |  |
| 接口完成阶梯 |  |  |  |  |
| 新旧代与当前状态 |  |  |  |  |
| F4 关闭资格 |  |  |  |  |
| 灰度、暂停或回退 |  |  |  |  |

分别指定首轮牵头、触发供证、直接修复、接口/恢复策略、独立验证和批准角色。未知人员及日期写待确认。

## 5. 状态图与验证训练

按本周已学方法自行画恢复状态图，包含 accepted 后结果未知、超时、迟到完成、peer reset、状态重取、有限重试、降级及业务验收。为每条恢复边标前置、总预算、影响面、证据冻结和失败出口。

下面是交卷核查流程，供你确认产物齐备：

~~~mermaid
stateDiagram-v2
  [*] --> Draft
  Draft --> EvidenceMapped: 图和材料逐项关联
  EvidenceMapped --> HypothesesChecked: 写出反证和区分实验
  HypothesesChecked --> DecisionRecorded: 记录理由与未知项
  DecisionRecorded --> Submitted: 本人作答与附件齐备
~~~

最小验证矩阵包含三项，由你选择并填写正常对照、单变量注入、关联键、原始工件和判据，状态统一为“待执行”。检查范围应能覆盖正常路径、异常恢复、旧消息、超时/复位、混合版本和相邻业务。后续实机执行以项目授权与可恢复环境为前提。

## 6. 一页评审卡与待验证维度

提交《Week 17 周六方案与证据评审卡》：

1. 五题短答及一张六流图。
2. 三条接口合同、E1—E9 证据账本及三个竞争假设。
3. 恢复状态图和三项最小验证矩阵。
4. 200 字左右的评审意见，列出决策依据、待办、责任域与重新打开条件。
5. 本人反思，指出一个仍有疑问的判断及改变判断所需的证据。

当前待检查维度包括硬门槛与评分、时钟与代际关联、局部完成与业务验收、发现关闭与发布决策。没有真实答卷，个人薄弱点保持待验证。

知识库沿用第 20 章的证据与接口合同，以及第 23 章的验证与评审门禁。本次练习没有形成经真实作答验证的新整合结论，稳定知识正文沿用已有版本。

[第 20 章](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/20.html) · [第 23 章](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/23.html)

## 7. 提交与归档

本单元编号 **week-17-saturday**。从页面末尾“上传／提交答卷”填写题号、分析与图表，也可进入答卷中心。答卷及批改公开，请提交已脱敏且可公开的材料。原答卷编辑或本人以 `[补交]` 开头的评论会作为新版本评审。

[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)

## 附录：21 项 T12T 技能覆盖

本轮已从 `F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/` 读取全部 21 个入口并完成适用性检查。深入读取平台路径、日志取证和 TPM 分责/报告参考资料，练习中的链路保持教学假设。

| 技能 | 本次适用性 |
| --- | --- |
| t12t-cockpit-diagnosis | 深入，主链、证据分级与竞争假设 |
| t12t-log-analysis | 深入，时钟、运行周期与观测缺口 |
| t12t-platform-architecture | 深入，域边界与六流图 |
| t12t-display-black-freeze | 条件适用，供学习者核对端点与帧关联，缺实机材料 |
| t12t-touch-input | 材料不足，仅考虑相邻业务回归 |
| t12t-avm-camera-stream | 条件适用，源帧到业务画面，缺实机材料 |
| t12t-power-sleep-str | 条件适用，STR 为题设，实际低功耗与唤醒证据待补 |
| t12t-audio-path | 材料不足，无音频故障记录 |
| t12t-stability-crash-reset | 条件适用，恢复半径和代际，缺复位原始证据 |
| t12t-performance-jank | 材料不足，无资源负载或时延基线 |
| t12t-ethernet-sgmii | 不适用，无有线物理链记录 |
| t12t-wireless-phone-link | 不适用，无无线或手机互联记录 |
| t12t-cross-domain-msg | 适用，消息完成、重复与迟到记录的证据边界 |
| t12t-boot-hmi | 条件适用，请求、ready 与当前首帧 |
| t12t-log-storm | 条件适用，仅有采集丢失题设，缺日志速率和留存实证 |
| t12t-usb-typec-storage | 不适用，无 USB/卷/块设备故障材料 |
| t12t-virtualization-tee | 条件适用，generation 与资源边界；无 TEE 案件证据 |
| t12t-db-ke-forensics | 材料不足，无异常包 |
| t12t-mcu | 条件适用，车辆和电源输入；协议与实机记录待确认 |
| t12t-tpm-triage | 深入，供证、修复、策略、验证和批准责任 |
| t12t-tpm-5y8d | 参考关闭结构，根因、逃逸原因与修复结果待证 |

关键缺口为现车基线、同窗多域记录、接口字典、时钟误差、门禁批准权、实机验证以及学习者真实答卷。
