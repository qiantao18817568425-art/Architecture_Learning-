# Week 16 — 周日整合：跨层取证、恢复设计、测试闭环与方案整合

学习日期：2026-11-01，星期日，Asia/Shanghai；Week 16。今天只整合本周实际安排的 Day 49—52，不推进 Day 53、不新增普通专题、不提前讲未来课。能力阶段仍按第二阶段“系统链路与问题分析”记录，建议用时 60 分钟。

执行前已扫描仓库全部开放与关闭 Issue、全部评论及附件索引；授权学习者没有新答卷、正文编辑或本人 `[补交]` 评论。因此 Day 34—52 继续标记为待评审，材料发布不代表已经学习或掌握。本课要求你独立完成跨层取证、恢复设计、测试闭环和方案整合，不附参考答案、示范作答或预设根因，个人反思由你本人填写。

## 1. 整合范围与官方边界

| 已安排单元 | 今天纳入整合的稳定合同 |
| --- | --- |
| [Day 49：资源所有权、DMA/IOMMU 与共享缓冲](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-49.html) | authority、export/import、mapping、fence、generation、回收与隔离 |
| [Day 50：GPU、DDR 带宽预算与性能验证](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-50.html) | avg/peak、P95/P99/max、deadline、队列、背压与单变量实验 |
| [Day 51：需求分解、场景边界与系统验收](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-51.html) | Need/ConOps、系统需求、架构分配、V&V 双向追踪 |
| [Day 52：模块、接口与异常恢复](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/day-52.html) | 模块责任、完成阶梯、unknown 终态、拒旧与有界恢复 |
| [Week 16 周五/周六](https://qiantao18817568425-art.github.io/Architecture_Learning-/lessons/week-16-saturday.html) | 六流、双时间线、证据账本、竞争假设与评审门禁 |

官方资料复核日期：2026-11-01。本课不扩展新专题，只复用以下已核验边界：

- [AOSP BufferQueue and Gralloc](https://source.android.com/docs/core/graphics/arch-bq-gralloc) 与 [Synchronization framework](https://source.android.com/docs/core/graphics/sync)：核对 producer/consumer、buffer 与 fence 的生命周期和完成边界。
- [Linux dma-buf](https://docs.kernel.org/driver-api/dma-buf.html)、[Interconnect framework](https://docs.kernel.org/driver-api/interconnect.html) 与 [PSI](https://docs.kernel.org/accounting/psi.html)：核对共享资源、avg/peak 请求与资源压力证据。
- [Perfetto FrameTimeline](https://perfetto.dev/docs/data-sources/frametimeline) 与 [GPU tracing](https://perfetto.dev/docs/data-sources/gpu)：核对帧 deadline、jank 分类、GPU 阶段和平台可用 counter。
- [NASA System Design Processes](https://www.nasa.gov/reference/4-0-system-design-processes/)、[Interface Management](https://www.nasa.gov/reference/6-3-interface-management/) 与 [Automotive SPICE ENG.3](https://automotivespice.com/fileadmin/software-download/automotiveSIG_PRM_v45.pdf)：核对需求分解、接口基线、动态行为、追踪和验证准则。

这些资料说明通用机制，不证明当前车型采用同一实现。现车车型、SoC/build、Guest/Host/Hypervisor/MCU/TBox 与物理连接、allocator/IOMMU/GPU/DDR/显示配置、IDL/DBC、业务 deadline、资源基线、恢复预算和实机 trace 均待项目确认；题中记录是教学构造。

## 2. 一小时任务

| 时间 | 任务 | 必交输出 |
| --- | --- | --- |
| 0—8 分钟 | 回答 5 道回顾题 | 5 条短答，未知项标 TBD |
| 8—23 分钟 | 重建跨层证据链 | 六流图、双时间线、证据资格表 |
| 23—38 分钟 | 设计有界恢复 | 恢复状态机、权限与预算表 |
| 38—53 分钟 | 建立测试闭环 | 需求—用例—证据—判据追踪矩阵 |
| 53—60 分钟 | 形成方案评审包 | 《STR 后 AVM 资源异常整合方案 V1》 |

回顾题：

1. 传输 ACK、执行 accepted、逻辑完成、可见 readback 和业务验收分别能证明什么，不能证明什么？
2. buffer/fence/attachment 与 boot、VM、device generation 如何绑定，旧代消息如何留下接受或拒绝审计？
3. 为什么 GPU/DDR 总 counter、队列积压和局部 rebind 恢复都不能独立证明根因？
4. timeout 后权威状态未知时，查询、重试、取消、回收和扩大复位的先后约束是什么？
5. 一条系统 requirement 怎样追踪到接口合同、资源预算、故障注入、原始证据和最终关闭判据？

## 3. 综合场景与跨层架构

沿用周六教学场景：STR resume 后 Android HMI 请求 AVM；Camera source sequence 递增，producer fence 完成，consumer acquire 间歇超出 deadline；存在旧 generation callback、未闭环 attachment、BufferQueue backlog、总 GPU/DDR counter 同窗升高、可见端点缺 current-frame readback；局部 rebind 和更大范围恢复都曾短期恢复，但第一处异常前部分日志已被轮转覆盖。

你必须把控制、数据、状态、电源/复位、资源、证据六条路径放入同一 transaction/frame/generation 上，并明确 Android Guest、Yocto Host、Hypervisor、MCU/TBox 与 Camera/Display 外设边界。

~~~mermaid
sequenceDiagram
  participant MCU as MCU/Power Authority
  participant APP as Android HMI
  participant ORC as Host Orchestrator
  participant CAM as Camera Producer
  participant HV as Hypervisor/Shared Resource
  participant DISP as Display Consumer
  participant LED as Evidence Ledger
  MCU->>ORC: resume(epoch, bootId)
  APP->>ORC: StartAVM(txId, vmGeneration)
  ORC-->>APP: transport/accepted ACK
  ORC->>CAM: create current-generation stream
  CAM->>HV: buffer + producer fence + frameId
  HV->>DISP: mapped buffer + consumer wait
  DISP-->>ORC: present/visible readback
  ORC-->>APP: business result
  ORC->>LED: authority, state, resource, deadline evidence
  alt timeout, reset or stale generation
    ORC->>LED: freeze evidence before recovery
    ORC->>ORC: query authority and reconcile
    ORC-->>APP: explicit unknown/degraded/final result
  end
~~~

对每条跨域边填写 `input → authority/state → output → observer`。业务时间线与资源时间线分别记录原始时间、时钟类型、共同锚点、误差、boot/VM/device generation、transactionId、frameId、bufferId、fenceId 和 attachmentId；无法校准时只保留域内顺序，不把文件行序当全局时间。

## 4. 跨层取证：从最后成功交接到最早断点

先建立证据资格表，不直接定根因：

| 证据项 | 直接证明 | 不能证明 | 关联键/时间资格 | 缺失项 |
| --- | --- | --- | --- | --- |
| current-generation request 与 ACK |  |  |  |  |
| source sequence / producer fence |  |  |  |  |
| import/map/attachment 生命周期 |  |  |  |  |
| consumer acquire/release 与 backlog |  |  |  |  |
| GPU/DDR/CPU/IO 与 FrameTimeline |  |  |  |  |
| present 与 visible current-frame readback |  |  |  |  |
| reset/rebind/recreate 与恢复结果 |  |  |  |  |
| 日志轮转和未观测窗口 |  |  |  |  |

然后独立完成：

1. 标出最后一个被证实成功的交接、下一个预期输出和对应 observer。
2. 将断点分类为明确失败、未观测、无法关联、证据冲突或已被清理；“没有日志”不能写成“没有发生”。
3. 至少提出六个可证伪竞争假设，覆盖代际、资源生命周期、consumer 背压、GPU/DDR/调度、显示绑定/可见端点、业务验收；每个假设必须写支持、反证、缺失证据、单变量实验和否定判据。
4. 区分触发候选、直接失效、加剧因素、恢复动作和后续清理；恢复成功只能说明覆盖范围，不能单独证明最初根因。
5. 给出当前置信度和证据上限，不能把“首轮供证域”写成“最终根因域”。

## 5. 恢复设计：证据冻结、对账、局部恢复与降级

~~~mermaid
stateDiagram-v2
  [*] --> Observing
  Observing --> Active: current generation + authority ready
  Active --> Verifying: accepted / frame in flight
  Verifying --> Completed: visible current-frame + business criteria
  Active --> EvidenceFrozen: timeout / reset / stale callback
  Verifying --> EvidenceFrozen: deadline miss / unknown state
  EvidenceFrozen --> Reconciling: snapshot IDs, queues, ownership, clocks
  Reconciling --> Active: authority proves resumable current state
  Reconciling --> Rebinding: interface or resource binding invalid
  Rebinding --> Verifying: new binding readback
  Reconciling --> LocalReset: bounded local recovery approved
  LocalReset --> Verifying: new generation and clean ownership
  Reconciling --> WiderRecovery: local budget exhausted
  WiderRecovery --> Verifying: dependencies rebuilt and audited
  WiderRecovery --> Degraded: deadline or safety budget exhausted
  Degraded --> [*]: explicit user-visible terminal result
~~~

为查询权威、拒绝旧代、同幂等键有限重试、局部 rebind、单服务重建、device reset、VM recreate 和降级分别填写：

- 触发条件与执行 Owner；
- 前置 authority readback、资源所有权和幂等条件；
- 总 deadline、单步 timeout、次数/时间预算与复位后是否续算；
- 影响面、不可逆风险、证据损失和相邻业务；
- 成功 readback、失败出口与对用户可见的终态；
- 旧 callback/fence/handle/timeout/cancel 的隔离和审计。

禁止把新 transactionId 盲重试当恢复；attachment 所有权未知时禁止重复释放或复用；扩大复位前先冻结证据，并确保恢复动作不会越过项目授权和安全边界。

## 6. 测试闭环：需求、故障、证据与回归

| 需求/风险 | 场景与单变量注入 | 必采原始证据 | 通过/失败判据 | 恢复/退出 | 状态 |
| --- | --- | --- | --- | --- | --- |
| 正常冷启与 STR 首帧 |  |  |  |  | 待执行 |
| ACK 与业务完成语义 |  |  |  |  | 待执行 |
| 旧 callback/fence/handle |  |  |  |  | 待执行 |
| consumer 阻塞与背压 |  |  |  |  | 待执行 |
| GPU/DDR/CPU/IO 并发 |  |  |  |  | 待执行 |
| timeout、迟到完成与取消 |  |  |  |  | 待执行 |
| 服务/device/VM 分层复位 |  |  |  |  | 待执行 |
| 资源回收失败与所有权未知 |  |  |  |  | 待执行 |
| 日志轮转/证据缺失 |  |  |  |  | 待执行 |
| 相邻显示、导航、音频业务 |  |  |  |  | 待执行 |
| 连续 STR 与长稳压力 |  |  |  |  | 待执行 |

每一行必须回链唯一 requirementId、interface/resource contract、testId、artifact URI/hash、环境版本和执行结论。未执行保持“待执行”；没有原始证据不得写“通过”。破坏性故障注入只在获得项目授权、具备恢复条件的环境执行。

## 7. 方案整合与评审门禁

提交《STR 后 AVM 资源异常整合方案 V1》，至少包含：

1. 现象、影响、适用/不适用范围、车型/SoC/build 与待确认项；
2. Guest/Host/Hypervisor/MCU/TBox/外设边界及六流架构图；
3. 模块责任卡、三条关键接口的十一项合同、资源生命周期与预算；
4. ACK → accepted → logical complete → visible readback → business accepted 完成阶梯；
5. 业务/资源双时间线、证据资格表、最早可证实断点与六个竞争假设；
6. 证据冻结、对账、拒旧、幂等重试、局部/扩大恢复、降级状态机；
7. 需求—用例—证据—判据—结果双向追踪矩阵；
8. 安全、性能、连续性、资源、运维、证据完整性与变更风险；
9. TPM 闭环表：首轮牵头、触发候选、直接修复、接口/资源/恢复策略、验证责任和升级条件；
10. 200—300 字评审结论：通过/有条件通过/拒绝、证据上限、未关闭风险、Owner 与关闭证据。

评审门禁：

- 架构边界、权威状态、接口完成语义和资源所有权能被同一版本基线核对；
- 正常、边界、故障、恢复、旧代、证据丢失、相邻业务和长稳场景均有可执行判据；
- 恢复半径不大于证据支持范围，扩大动作有授权、预算、证据保护和退出路径；
- 所有结论可追到原始工件；未观测、假设和项目待确认项没有被改写成平台事实。

个人反思由你本人填写：

- 哪个跨层交接最容易被我跳过，导致过早定责？
- 哪个恢复动作的半径大于当前证据支持范围？
- 哪个“通过判据”其实只验证了局部 ACK，没有验证用户可见结果？
- 如果只能补三个观测点，我会放在哪里，各自关闭哪个关键不确定性？

## 8. TPM 总结模板

请用一段话向研发或管理层说明：问题位于哪条架构链的哪个待证交接，当前证据能证明什么、不能证明什么；候选触发、直接失效、加剧因素和恢复动作如何区分；首轮供证、直接修复、接口/恢复策略与验证责任分别落在哪个域；方案将如何通过正常、异常恢复和相邻业务回归关闭风险。人员与期限未知时保持 TBD。

## 9. 提交说明

本课编号 **week-16-sunday**。请提交 5 道短答、六流图、双时间线、证据资格表、竞争假设、恢复状态图、验证追踪矩阵、《STR 后 AVM 资源异常整合方案 V1》、TPM 总结和个人反思。

使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。答卷、附件和批改公开，请只提交可公开且已脱敏的材料。编辑原答卷或本人以 `[补交]` 开头评论会触发新版本评审。

## 附录：21 项 T12T 技能覆盖检查

技能来源：`F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/`。本次已读取全部 21 个 `SKILL.md` 并完成适用性检查。

| 技能 | 本次判断 |
| --- | --- |
| t12t-cockpit-diagnosis | 适用，深入：主链、最早断点、证据等级与竞争假设 |
| t12t-log-analysis | 适用，深入：跨域时间、代际、直接失效/触发/加剧/清理边界 |
| t12t-platform-architecture | 适用，深入：Guest/Host/Hypervisor/MCU/TBox/外设边界与六流 |
| t12t-display-black-freeze | 适用：present、scanout、可见端点与 current-frame 语义 |
| t12t-touch-input | 材料不足：只列相邻业务回归，无触摸原始证据 |
| t12t-avm-camera-stream | 适用：逐路 source、buffer、首帧、可见画面与拆流边界 |
| t12t-power-sleep-str | 适用，深入：STR barrier、epoch、恢复顺序和长稳验证 |
| t12t-audio-path | 条件适用：共享资源和相邻业务回归，无音频故障证据 |
| t12t-stability-crash-reset | 适用，深入：服务/device/VM/SoC 分层复位和恢复半径 |
| t12t-performance-jank | 适用，深入：deadline、队列、尾时延、资源压力和单变量实验 |
| t12t-ethernet-sgmii | 材料不足：无 PHY/carrier/IP 证据 |
| t12t-wireless-phone-link | 材料不足：无无线或手机互联证据 |
| t12t-cross-domain-msg | 适用，深入：sequence、freshness、ACK/readback、unknown 与拒旧 |
| t12t-boot-hmi | 适用：早到请求、依赖就绪、replay 与 current 首帧 |
| t12t-log-storm | 条件适用：轮转覆盖和证据留存，无日志速率实证 |
| t12t-usb-typec-storage | 不适用：无 USB/块设备/卷生命周期证据 |
| t12t-virtualization-tee | 适用，深入：VM generation、共享资源、旧代隔离和重建边界 |
| t12t-db-ke-forensics | 条件适用：出现 fatal/reset 才进入固定八步；当前无异常包 |
| t12t-mcu | 条件适用：电源/车辆意图源和 epoch，无协议字典及实机日志 |
| t12t-tpm-triage | 适用，深入：首轮牵头、供证、修复、策略与验证闭环 |
| t12t-tpm-5y8d | 暂不展开：无确认根因、逃逸原因和修复验证，不强造 5Y/8D |

实际深入使用的平台架构、日志证据、电源/STR、稳定性复位、虚拟化、性能、跨域消息与 TPM 分责参考手册共同约束本课。关键缺口仍是现车版本与拓扑、协议字典、资源基线、完整实机 trace、故障注入授权和学习者真实作答；补齐前不能宣布现车根因、验证通过或个人掌握。
