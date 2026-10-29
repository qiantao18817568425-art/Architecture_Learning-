# Day 52 — 方案设计 II：模块分层、接口合同与状态/异常恢复

正式安排日期：2026-10-29，星期四，Asia/Shanghai。Week 16。能力阶段仍为第二阶段“系统链路与问题分析”，本课继续衔接阶段三的方案设计方法；发布材料不等于能力升级。目标深度：L3，能把需求分配为有边界的模块责任，用接口合同定义完成语义，并把复位、旧消息与恢复验证纳入设计。总用时约 60 分钟。

执行前已扫描仓库开放和关闭状态的答卷 Issue、全部评论与附件，没有发现授权学习者的新答卷或补交。Day 34—51 均等待真实作答评审。

## 1. 官方依据与项目边界

官方资料核验日期：2026-10-29。

- [NASA Systems Engineering Handbook：System Design Processes](https://www.nasa.gov/reference/4-0-system-design-processes/)：逻辑分解形成分层功能架构，再把功能分配到系统元素，并持续评估接口与约束。
- [NASA Systems Engineering Handbook：Interface Management](https://www.nasa.gov/reference/6-3-interface-management/)：接口应被识别、记录、协商、批准、基线化并纳入变更控制，不能只在代码联调时口头约定。
- [NASA Systems Engineering Handbook：Appendix](https://www.nasa.gov/reference/system-engineering-handbook-appendix/)：Interface Requirements Document 的典型内容覆盖功能、物理、数据、环境、安全、验证和责任边界。
- [Automotive SPICE PRM 4.5：ENG.3](https://automotivespice.com/fileadmin/software-download/automotiveSIG_PRM_v45.pdf)：系统架构设计应定义系统元素、内外部接口和动态行为，把需求分配到元素，并保持双向追踪与一致性。
- [AUTOSAR Adaptive Platform：Execution Management R24-11](https://www.autosar.org/fileadmin/standards/R24-11/AP/AUTOSAR_AP_SWS_ExecutionManagement.pdf)：Execution Management 负责 Function Group State 与进程生命周期协调；业务状态仍需由业务 Owner 明确定义，不能把“进程已运行”当成功能完成。

当前没有指定车型、SoC/build、现车拓扑、IDL/DBC、目标时延、功能安全等级与实机基线。以下 AVM、VM generation、超时和接口名均为教学构造；项目参数保持 TBD，不能写成现车事实。

## 2. 一小时主线

| 时间 | 学习任务 | 可复用输出 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 5 题 | 区分需求、模块、接口、状态与证据 |
| 10—20 分钟 | 模块分层与责任卡 | 模块责任分配表 |
| 20—30 分钟 | 接口合同与完成语义 | Interface Control Table |
| 30—50 分钟 | STR 后 AVM 不可见案例 | 状态/异常恢复与竞争假设 |
| 50—60 分钟 | 评审与验证设计 | 模块—接口—恢复验证矩阵 |

回顾题：

1. Day 51 的 system requirement、architecture allocation 与 implementation detail 有何边界？
2. 为什么唯一 requirement ID 仍不足以证明需求已被实现和验收？
3. command ACK、logical completed、business accepted 与用户可见结果分别由谁证明？
4. 同一 sequenceId 在 VM 重建前后为什么可能指向不同事务？
5. 如果接口超时后最终状态未知，盲重试会制造什么副作用？

## 3. 核心概念一：模块不是框，而是一组可问责合同

### 3.1 五类责任必须分开

| 责任类型 | 设计问题 | AVM 示例 |
| --- | --- | --- |
| 策略/权威 | 谁决定“应该发生什么” | 体验编排决定倒挡优先显示 |
| 执行 | 谁把命令变成动作 | Camera 服务启流，显示服务绑定图层 |
| 数据所有权 | 谁生产、解释并维护数据 | Camera 拥有流和帧元数据 |
| 状态权威 | 谁能声明当前真实状态 | Display Owner 声明 current visible surface |
| 恢复协调 | 谁在复位后组织重建顺序 | Recovery Coordinator 建新代并依赖就绪恢复 |

一个模块责任卡至少写清：部署域、唯一 Owner、输入与前置条件、输出与后置条件、权威状态、资源所有权、允许依赖、失败模式、恢复动作、观测点和升级边界。HMI 可以展示状态，但不能因为自己画出了“环视中”就成为物理送显状态的 Owner。

### 3.2 分层与跨域边界

~~~mermaid
flowchart LR
  MCU[MCU：挡位事实] -->|GearEvent + epoch| ORCH[体验编排：策略 Owner]
  ORCH -->|StartAVM + transactionId| CAM[Yocto/Camera：流 Owner]
  CAM -->|buffer + fence + generation| DISP[Display/HWC：呈现 Owner]
  DISP -->|VisibleState + frameId| ORCH
  ORCH -->|BusinessResult| HMI[Android HMI]
  REC[恢复协调器] -.建立新 generation 与屏障.-> ORCH
  REC -.依赖就绪后重建.-> CAM
  REC -.当前代绑定与读回.-> DISP
~~~

控制路径决定何时启动；数据路径承载 frame/buffer/fence；状态路径返回当前权威事实；电源与复位路径改变哪些状态仍可信。四条路径必须分别画出，不能用一根“服务调用成功”箭头代替。

## 4. 核心概念二：接口合同要定义“未知结果”与恢复

### 4.1 十一项 Interface Control Table

每条接口至少包含：

1. 身份：接口版本、发送/接收方、Owner、部署域；
2. 数据：字段、单位、范围、endianness、有效性与来源；
3. 关联：transactionId、sequenceId、bootId、generation；
4. 前置：依赖服务、车辆模式、资源与权限；
5. 时间：deadline、TTL、超时起点和单调时钟；
6. 完成：transport ACK、command accepted、logical completed、business accepted；
7. 错误：可重试、不可重试、部分成功、取消和未知最终状态；
8. 一致性：权威状态、readback、版本/epoch、冲突解决；
9. 生命周期：创建、使用、撤销、复位和跨代隔离；
10. 恢复：幂等键、有限重试、对账、降级和升级条件；
11. 证据与治理：日志字段、计数器、trace、验证方法、基线与变更审批。

### 4.2 ACK 梯子与超时后的四步

| 层级 | 可以证明 | 不能证明 |
| --- | --- | --- |
| Transport ACK | 报文到达对端传输栈 | 对端业务已执行 |
| Command accepted | 对端接受并排队 | 资源已准备、动作已完成 |
| Logical completed | 本模块动作和后置条件成立 | 端到端用户结果成立 |
| Business accepted | 当前事务的系统验收条件成立 | 未定义范围外的物理事实 |

超时不是失败的同义词，它首先表示调用方不知道最终状态。固定处理顺序是：冻结 transaction 证据 → 查询权威状态/readback → 按相同幂等键决定继续、补偿或有限重试 → 超过恢复预算后降级并升级。禁止换新 transactionId 盲重发可能有副作用的命令。

### 4.3 复位与旧代隔离

~~~mermaid
stateDiagram-v2
  [*] --> Unbound
  Unbound --> Binding: new generation
  Binding --> Ready: dependencies and state readback
  Ready --> Active: current transaction accepted
  Active --> Reconciling: timeout or peer reset
  Reconciling --> Active: authoritative state matches
  Reconciling --> Degraded: recovery budget exhausted
  Ready --> Unbound: local or peer generation changes
  Active --> Unbound: local or peer generation changes
  Degraded --> Binding: approved recovery
~~~

复位后先建立新 bootId/generation，再恢复依赖和权威快照；旧代 callback、timeout、fence、handle、completion 和 cancel 只能归档，不得推进新代状态。sequenceId 只有与 producer identity 和 generation 组合后才可唯一关联。

## 5. 工程案例：STR 后 StartAVM 已 ACK，但屏幕仍是桌面

这是训练案例，不是实车结论。构造条件：STR resume 后 Android Guest 被重建；HMI 发起 StartAVM，Camera 返回 accepted；随后一个旧 VM generation 的 SurfaceReady callback 被新 Guest 接受，编排器误判“显示依赖已就绪”，但当前代 surface/buffer 没有重新绑定，因此屏幕保持桌面。

### 5.1 不先猜根因，先列竞争假设

| 假设 | 支持证据 | 排除证据 | 首轮责任域 |
| --- | --- | --- | --- |
| 挡位触发未到 | MCU/CAN 当前代无事件 | 同 transaction 的新鲜 GearEvent 存在 | MCU/跨域 |
| Camera 未启流 | 当前代帧计数不增 | producer frameId 和 fence 连续推进 | Camera |
| 旧代回调污染状态 | callback generation 小于 current | 全链拒旧计数为零且绑定为当前代 | 编排/虚拟化 |
| Display 未绑定当前 surface | layer/plane 仍指桌面 | 当前代 layer、present 与 visible readback 一致 | Display |
| HMI 仅展示错误 | 物理画面已切换而 UI 状态旧 | 屏端/approved endpoint 同样未见 AVM | HMI/Display |

### 5.2 最早可证实断点

按同一单调时间轴和 boot/VM generation 对齐：MCU GearEvent → Orchestrator StartAVM → Camera accepted → 当前代首帧 → buffer/fence 消费 → HWC present → approved visible endpoint。若 Camera 当前代帧已产生，而 Display 没有当前代 surface binding，且旧 callback 被接受，则最早可证实断点在“编排器的代际校验/显示资源重绑定”交界；ACK 只是此前阶段成功，不能证明最终上屏。

### 5.3 恢复设计

1. VM reset 触发时撤销旧代 readiness 与 active transaction；
2. Recovery Coordinator 发布新 generation，并等待 Display、Camera、HMI 各自 Ready；
3. Display Owner 为新代创建 surface，回传可读回的 binding token；
4. Camera 仅向新代 buffer pool 生产，旧 handle/fence 进入隔离或安全回收；
5. 编排器以同一业务意图重建 transaction，并要求 current visible surface 回读；
6. 超过 T_recover 或 N_rebind（均 TBD）进入 Degraded，保留证据并提示不可用，禁止无限重启。

## 6. 模块—接口—恢复验证矩阵

| 节点/接口 | TPM 应问 | 最小证据 | 验证判据 | 建议责任域 |
| --- | --- | --- | --- | --- |
| MCU→编排 GearEvent | 来源、有效期、epoch 谁定义 | CAN/网关事件与单调时间 | 当前代事件可关联且不过期 | MCU/跨域 |
| 编排→Camera StartAVM | accepted 后还缺什么 | txId、generation、queue/stream state | ACK 与 logical completed 分开 | 编排/Camera |
| Camera→Display buffer | handle/fence 谁拥有 | bufferId、producer/consumer fence、frameId | 当前代 acquire/release 成对 | Camera/Display |
| Display visible readback | 谁能证明真的呈现 | layer/plane/present/屏端证据 | 当前 transaction 的 fresh frame 可见 | Display/测试 |
| VM reset/rebind | 谁建代、谁放行 | bootId、generation、ready barrier、拒旧计数 | 旧消息零污染，新代顺序可重复 | 虚拟化/恢复协调 |
| 失败降级 | 预算耗尽怎么办 | timeout/retry/degraded reason | 有限恢复、可观察、可升级 | 系统架构/TPM |

可执行验证：

- 正常路径：冷启动、STR resume、重复进退 R 挡，验证四级完成语义和 current visible readback。
- 竞态：在 accepted、首帧、present 前后分别注入 VM recreate，证明旧 callback 被拒绝。
- 超时：让 Camera 或 Display 延迟返回，验证先查权威状态再决定同幂等键重试。
- 资源：复位时保留在途 buffer/fence，验证旧 handle 不进入新代并最终安全回收。
- 相邻业务：回归桌面、倒车退出、前视/AVM切换、音频提示和其他共享显示消费者。
- 长稳：统计 generation mismatch、orphan transaction、rebind latency、recovery success 与 degraded 次数。

项目阈值、车型连接、显示端点、恢复次数和 Owner 名称必须在设计评审中确认；本课不伪造实机通过。

## 7. 60 分钟产物与独立作业

提交《模块—接口—恢复验证包 V1》，不要照抄正文，也不要附参考答案：

1. 选一个座舱功能，画控制、数据、状态、电源/复位四条路径，并标 Android Guest、Yocto Host、MCU、TBox、Hypervisor 或外设边界。
2. 为至少 5 个模块写责任卡，明确策略、执行、数据、状态和恢复 Owner。
3. 选择 3 条关键接口，填写十一项 Interface Control Table；每条区分 ACK、logical completed 与 business accepted。
4. 画一张含正常、超时、peer reset、旧消息、对账和降级的时序图或状态图。
5. 列 4 个竞争假设，每个给一条支持证据和一条可排除证据。
6. 写 6 条可执行测试，至少覆盖 VM/服务复位、未知最终状态、幂等重试、旧代资源和相邻业务回归。
7. 写一段 200—300 字架构评审意见：指出最危险的责任空洞、接口歧义和关闭条件。

提交入口：[Day 52 答卷 Issue](https://github.com/qiantao18817568425-art/Architecture_Learning-/issues/new?template=learning-answer.yml&title=%5B%E7%AD%94%E5%8D%B7%5D%20Day%2052&unit=day-52)。可在正文上传图片、PDF 或其他附件；补交评论以“[补交]”开头。原始答卷、附件链接与批改记录将同步归档。

## 8. 21 项 T12T 技能覆盖说明

本课从 F 盘优化版技能包读取并检查全部 21 个入口。实际深入使用：cockpit-diagnosis、log-analysis、platform-architecture、cross-domain-msg、stability-crash-reset、virtualization-tee、tpm-triage。display、AVM、power/STR、boot/HMI 用于案例链路和恢复边界；audio、touch、Ethernet、wireless、USB、performance、MCU、DB/KE、log-storm 与 5Y/8D 在本案例无直接证据或仅作适用性检查，未据此虚构结论。关键证据缺口是车型/SoC/build、现车部署图、IDL/DBC、真实 generation 规则、阈值与实机 trace。
