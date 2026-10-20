# Day 46 — 诊断架构 II：UDS/DoIP 服务链、清除边界与闭环验证

学习日期：2026-10-20，星期二，Asia/Shanghai；Week 15。能力阶段：第二阶段“系统链路与问题分析”。目标深度：从“tester 能连上、能收到响应”继续进入诊断服务的链路、权限、状态、证据和恢复设计，能区分 DoIP 传输确认、UDS 服务结果、DTC 清除与业务修复。总用时约 60 分钟。

执行前已完整扫描仓库全部状态的 Issue 及评论；当前没有答卷 Issue、编辑版本、本人 [补交] 评论、附件或本聊天新增作答。因此 Day 34—46 均保持待评审，本课不把材料发布记为已经掌握。

## 1. 今日资料、术语与项目边界

官方资料核验日期：2026-10-20。

- [AUTOSAR Diagnostic Communication Manager R22-11](https://www.autosar.org/fileadmin/standards/R22-11/CP/AUTOSAR_SWS_DiagnosticCommunicationManager.pdf)：用于 DCM 与 PduR、Dem、应用服务的边界，以及 UDS 0x10、0x14、0x19、0x27、0x3E、正负响应和 P2/P2* 处理。
- [AUTOSAR Diagnostic over IP R22-11](https://www.autosar.org/fileadmin/standards/R22-11/CP/AUTOSAR_SWS_DiagnosticOverIP.pdf)：用于 DoIP TCP 连接、Routing Activation、Alive Check、诊断消息 0x8001、正向 ACK 0x8002 和负向 ACK 0x8003 的边界。
- [AUTOSAR Diagnostic Event Manager R22-11](https://www.autosar.org/fileadmin/standards/R22-11/CP/AUTOSAR_SWS_DiagnosticEventManager.pdf)：用于 DTC 选择、读取、清除、状态、事件内存和 operation cycle 的职责边界。
- [AUTOSAR Diagnostic Extract Template R22-11](https://www.autosar.org/fileadmin/standards/R22-11/CP/AUTOSAR_TPS_DiagnosticExtractTemplate.pdf)：用于诊断服务、访问权限和 ReadDTCInformation 0x19 的模型边界。
- 本仓库[第 10 章：业务流程](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/10.html)、[第 13 章：网络通信](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/13.html)和[第 15 章：统一诊断手册](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/15.html)，用于连接现有架构与诊断链。

本课使用以下标准服务名作学习锚点：DiagnosticSessionControl 0x10、ClearDiagnosticInformation 0x14、ReadDTCInformation 0x19、ReadDataByIdentifier 0x22、SecurityAccess 0x27、RoutineControl 0x31、TesterPresent 0x3E。某车型支持哪些服务、子功能、DID、DTC group、NRC、P2/P2*、安全等级和连接数，全部以当前项目 ODX/DEXT、诊断规范、ARXML、网关路由表和实车 trace 为准。

当前缺少车型、SoC、ECU 拓扑、DoIP Entity/Gateway 部署、tester source address、ECU target address、VLAN/IP、防火墙、Routing Activation 类型、并发 tester 规则、UDS 会话与安全配置、DTC group、Dem memory、P2/P2*、S3、清除审计、复位策略和实机报文。下文示例地址、时限和事件均为教学构造，不写成平台事实。

本次从 F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/ 重新读取全部 21 项技能入口，并读取平台路径、跨域时间与证据、跨域消息、以太网、MCU、稳定性复位和 TPM 分责参考手册。深入使用通用三入口、跨域消息、以太网、稳定性复位、MCU 和 TPM 分责专项。

## 2. 一小时主线

| 时间 | 学习任务 | 输出 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 5 题 | 分清链路、传输 ACK、服务响应、清除与修复 |
| 10—30 分钟 | 两个核心概念 | UDS/DoIP 服务链；清除与恢复状态机 |
| 30—50 分钟 | 工程案例 | “DoIP ACK 成功但没有最终 UDS 响应”完整分析 |
| 50—60 分钟 | 可复用产物 | 《UDS/DoIP 诊断服务—清除—验证闭环合同 V1》 |

回顾题：

1. tester TCP 已连接、Routing Activation 成功，为什么仍不能证明目标 ECU 能完成诊断服务？
2. DoIP 0x8002 正向 ACK、UDS 正响应、Dem 清除完成、用户故障消失分别证明什么？
3. 0x19 能读到一个历史 DTC，为什么不能直接关联到本次用户现象？
4. ECU 或 VM 复位后，哪些字段必须防止旧响应落入新会话？
5. 清除 DTC 后立即读不到记录，为什么仍不能关闭问题？

## 3. 核心概念一：UDS/DoIP 是分层服务链

### 3.1 角色、控制流、数据流和状态流

~~~mermaid
flowchart LR
    T[External / internal tester] -->|TCP + Routing Activation| E[DoIP Entity / Gateway]
    E -->|source/target logical address| R[Diagnostic router / PduR]
    R -->|UDS request PDU| C[DCM / Diagnostic Manager]
    C -->|session / security / format / condition| A[Service handler / SW-C / Routine]
    C -->|DTC select / read / clear| D[Dem / Diagnostic memory]
    A -->|result / pending / error| C
    D -->|DTC status / record / clear result| C
    C -->|UDS positive / negative response| R
    R --> E
    E -->|DoIP diagnostic response| T
~~~

| 层级 | 主要职责 | 最小输入 | 关键输出 | 不能由它单独证明 |
| --- | --- | --- | --- | --- |
| Ethernet/IP/TCP | 链路、寻址、连接与字节传输 | VLAN/IP/route/socket | TCP 建连、重传、断开 | Routing Activation 或 ECU 服务可用 |
| DoIP Entity/Gateway | tester 注册、逻辑地址、路由激活、alive、诊断消息封装 | tester SA、target address、activation type | 0x0006、0x8002/0x8003、转发 | UDS 服务成功、DTC 已清除 |
| 路由/PduR | 把目标诊断 PDU 交给相应 DCM/ECU | 路由表、PDU、目标 | Rx/Tx indication、路由结果 | 应用已执行或业务已恢复 |
| DCM/DM | SID/子功能、格式、会话、安全、条件、时序、响应 | UDS 请求与当前上下文 | 正响应、NRC、0x78 pending | 下游物理动作或故障根因消失 |
| Dem/应用/Routine | DTC 数据、清除、DID、例程和真实动作 | 已授权请求 | 数据、清除/例程结果、错误 | tester 已收到、用户体验已恢复 |
| tester/售后平台 | 请求编排、关联、显示、审计 | 车型配置、地址、服务合同 | trace、结果和工单 | 车端所有证据都完整 |

控制流包含建链、Routing Activation、会话切换、安全解锁、SID/子功能和取消；数据流是 UDS payload 及 DID/DTC/快照；状态流是 socket、routing、session、security、service、Dem memory 与业务状态；时间流必须把 TCP、DoIP、P2/P2*、S3、复位和重连放在同一条可关联时间线上。

### 3.2 同一次请求的完成语义

~~~mermaid
sequenceDiagram
    participant T as Tester
    participant D as DoIP Entity
    participant C as DCM
    participant M as Dem / Service
    T->>D: Routing Activation Request
    D-->>T: Routing Activation Response
    T->>D: 0x8001 + SA/TA + UDS request
    D-->>T: 0x8002 DoIP positive ACK
    D->>C: Routed diagnostic PDU
    C->>C: Session / security / format / condition checks
    C->>M: Read / clear / routine request
    alt operation pending
        C-->>T: UDS NRC 0x78 ResponsePending
        M-->>C: final result
    else rejected
        C-->>T: UDS negative response + NRC
    end
    C-->>T: Final UDS response
    T->>T: Correlate trace and verify business/DTC state
~~~

| 里程碑 | 最多证明 |
| --- | --- |
| TCP connected | 两端建立 TCP 连接 |
| Routing Activation accepted | 该 socket/tester 在当前规则下可向配置目标路由 |
| DoIP 0x8002 positive ACK | DoIP 节点按协议接受处理该诊断消息；不是 UDS 正响应 |
| PduR/DCM Rx indication | 诊断 PDU 进入对应接收路径 |
| NRC 0x78 | 服务尚未给出最终结果，tester 应按合同继续等待；不是成功 |
| UDS negative response | 服务在当前请求上下文中拒绝或失败，NRC 要结合会话、权限、条件和实现解释 |
| UDS positive response | 该服务按规范定义完成到其响应点 |
| 0x14 positive response | 指定范围的诊断信息已按服务合同清除；不代表故障机制已修复 |
| 后续 0x19 读取与故障再注入 | 验证记录、状态和新 incident 是否符合策略 |
| 业务端到端验收 | 当前用户功能在目标条件下恢复 |

### 3.3 关联键与超时

每条 trace 至少保留：vehicle/build/config、tester identity、TCP 连接实例、source address、target address、Routing Activation 类型与结果、UDS SID/子功能/参数摘要、请求序号或 tester transactionId、session、安全等级、P2/P2* 计时、NRC、ECU boot counter/bootId、VM/process generation、Dem client/memory、DTC/status byte、原始时间和 monotonic 锚点。

TCP 有序并不等于应用永远不会看到“旧结果”。tester 重连、网关/ECU/VM 复位、服务重启、超时重试和多 tester 并发都可能产生跨代迟到响应。设计中必须明确：

- 原请求的 deadline 是否跨重试保持；
- 哪些服务可安全重试，幂等键是什么；
- reset/reconnect 后是否重新做 Routing Activation、session 和 security；
- 旧 TCP 连接、旧 ECU bootId 或旧 generation 的响应如何丢弃；
- in-flight clear/routine 在复位时是 committed、aborted 还是 unknown；
- 0x78 最大持续、最大次数和失败出口；
- 诊断服务超时后由 tester 重试、网关取消还是 ECU 内部继续，谁保存最终审计。

具体 P2/P2*、S3、DoIP inactivity/alive、重试次数和退避均待项目确认，不能从教材填写量产值。

## 4. 核心概念二：清除记录、状态恢复与缺陷修复是三件事

### 4.1 清除闭环

~~~mermaid
stateDiagram-v2
    [*] --> FaultActive
    FaultActive --> Recorded: event qualified / DTC stored
    Recorded --> ClearRequested: authorized 0x14
    ClearRequested --> ClearPending: Dem / NvM processing
    ClearPending --> RecordCleared: final positive response
    ClearPending --> ClearFailed: NRC / timeout / reset / storage error
    RecordCleared --> FaultActive: trigger still present or fault reappears
    RecordCleared --> Revalidated: normal operation + 0x19 + business checks
    Revalidated --> Closed: repair and regression evidence complete
    ClearFailed --> Recorded: state reconciled by readback
~~~

清除前先保存原始 DTC、status、Snapshot/Extended Data、配置版本、tester trace 和关联日志。清除后要重新读取目标范围，核对 Dem/NvM 和 tester 视图；再分别覆盖“触发仍在”“触发消失但未走完恢复 cycle”“下一 operation cycle 再现”“复位后重现”“相邻 DTC/共享资源受到影响”。

### 4.2 0x19 与 0x14 的边界

0x19 ReadDTCInformation 用于读取 DTC 状态和相关记录，具体子功能与数据取决于项目配置。读取成功说明当前响应上下文中返回了所请求的数据；它不自动证明 DTC 与本次用户现象同一 incident。必须用时间、operation cycle、boot/generation、快照、occurrence、first/most recent fail 和业务日志完成关联。

0x14 ClearDiagnosticInformation 请求 ECU 清除指定 groupOfDTC 的错误内存。执行前通常还受会话、安全、条件、并发和电源状态约束。正响应只按 0x14 服务合同解释，不得写成“根因消除”或“修复验证通过”。若 active monitor 仍报告失败，DTC 可能在同一或后续 cycle 重新建立；这是要验证的状态行为，不应被误称为“清除接口失效”。

### 4.3 恢复设计

| 异常 | 首选动作 | 必须保存 | 恢复后验收 |
| --- | --- | --- | --- |
| DoIP socket 断开 | 保留原 transaction，重连并重新激活路由 | TCP/DoIP reason、SA/TA、连接实例 | 新连接、新 routing、目标 ECU 可达 |
| 0x8002 后无 UDS 响应 | 沿 DoIP→router→DCM→handler 查首缺里程碑 | 双端 pcap、PduR/DCM trace、boot/generation | 最终响应或明确 NRC/超时边界 |
| 长时间 0x78 | 观察下游 pending 原因和 budget | pending 次数、P2*、routine/Dem 状态 | 最终结果、取消和失败出口 |
| 清除中 ECU reset | 标记事务 unknown，复位后 readback | reset reason、clear audit、NvM 状态 | 记录一致、无半清除、旧响应被拒 |
| tester 超时重试 | 使用项目定义的幂等/互斥策略 | 原 deadline、retry id、in-flight 状态 | 只有一个权威终态 |
| 清除后故障重现 | 新 incident 关联真实触发 | 新快照、occurrence、业务状态 | 责任回到触发/修复链，不归咎清除本身 |

## 5. 完整故障分析：DoIP ACK 成功但没有最终 UDS 响应

以下是教学构造案例，用来演示证据方法；事实和结论不代表当前车辆。

### 5.1 现象与构造证据

tester 向座舱网关后的目标 ECU 发起 0x19 读取。Routing Activation 成功，每次请求都收到 DoIP 0x8002；tester 在 P2* 预算后超时，没有最终 UDS 响应。重连后偶发恢复。

| 证据 | 构造事实 | 证据边界 |
| --- | --- | --- |
| E1 | tester pcap 显示 TCP 连续、0x0006 成功、0x8001 后收到 0x8002 | 证明 DoIP 接受消息，不证明 DCM 或目标 ECU完成服务 |
| E2 | 网关 DoIP trace 记录 SA/TA 和转发调用成功 | 证明进入路由调用，不证明 PduR 下游确认 |
| E3 | 目标 ECU DCM 仅在失败样本缺少同一请求 Rx marker | 把首个可证实断点收窄到路由→目标接收边界；“缺少”仍需确认日志覆盖 |
| E4 | 失败窗内目标 ECU bootId 连续，DCM 进程 PID 未变 | 降低整 ECU/服务重启优先级，不排除队列、路由配置或线程阻塞 |
| E5 | 其他 target address 的 0x22 正常 | 降低 tester 和公共 TCP 链故障优先级，不证明当前目标路由正常 |
| E6 | 重连后恢复，但没有路由表、队列和线程状态 | 恢复是相关证据，不能独立证明 socket 是根因 |
| E7 | 双端时钟只有 wall clock，误差未知 | 不能只按毫秒先后拼接跨 ECU 因果 |

### 5.2 最早断点与竞争假设

1. 最后已证实成功：网关 DoIP 接受 0x8001 并产生 0x8002，同时记录调用路由。
2. 下一预期里程碑：目标路由/PduR 接收相同 SA、TA、SID 和同一连接代际的请求。
3. 当前最早可证实异常边界：网关路由出口到目标 DCM 接收入口之间。
4. 直接失效：tester 没有收到最终 UDS 响应；这不是根因描述。
5. 竞争假设：目标路由配置/状态失配；队列或跨域 channel 阻塞；DCM 接收日志丢失但请求实际进入；目标 worker 饥饿；重连触发状态重建；旧连接/旧 generation 状态干扰。
6. 区分实验：同一构建、同一地址和同一 SID 下，给网关出口、channel/PduR、目标入口统一 requestId；采集队列深度、drop reason、线程状态、boot/generation、双端时间锚点；A/B 只改变目标、连接或并发度。
7. 当前不能归责：不能依据 0x8002 归责 Dem，也不能依据重连恢复直接归责 TCP/DoIP；没有目标 DCM 入口之后的证据，暂不把读取服务本身作为最早断点。

### 5.3 TPM 协查与关闭

| 架构边界 | TPM 应问的问题 | 所需证据 | 首轮责任域 | 关闭判据 |
| --- | --- | --- | --- | --- |
| tester→DoIP | 是否同一车型配置、SA/TA、连接实例 | tester trace、pcap、配置哈希 | 测试工具/集成 | 请求与 ACK 可关联 |
| DoIP→router | 0x8002 在本实现表示到哪一层 | DoIP trace、接口合同、返回码 | 网关/DoIP | 接口完成语义明确 |
| router/channel→DCM | 请求何处首次消失 | queue、drop、route、Rx marker | 通信/目标 ECU | 同一 requestId 逐跳闭环 |
| DCM→Dem | 是否收到、校验、pending 或 NRC | session/security/SID/NRC/trace | DCM/诊断 | 最终响应可解释 |
| reset/reconnect | 哪一代连接和 ECU 状态有效 | bootId、generation、reset reason | 平台/稳定性 | 旧响应拒绝、新状态重建 |
| 业务与诊断验证 | 恢复是否只靠重连 | 重复运行、并发、故障注入 | 系统验证 | 正常、异常、恢复均通过 |

对研发或管理层可这样说明：现有证据只证明 tester 到 DoIP 节点的连接和消息接受成功，最终 UDS 响应缺失的最早证据边界在网关路由出口到目标 DCM 入口之间。当前先由诊断通信/系统集成牵头补齐逐跳 requestId、队列、路由和目标接收证据；根因和最终修复 Owner 要等区分实验。重连恢复不能替代根因，关闭要覆盖同一目标、并发 tester、复位、超时和旧连接隔离。

## 6. 可执行测试矩阵

| 用例 | 注入/步骤 | 关键观测 | 通过标准 | 状态 |
| --- | --- | --- | --- | --- |
| 正常读取 | 激活路由后执行 0x19 | TCP、0x0006、0x8002、DCM、Dem、最终响应 | 逐层 request 可关联 | 待执行 |
| 无路由激活 | 未激活直接发诊断消息 | DoIP 状态与拒绝原因 | 按合同拒绝且无下游副作用 | 待执行 |
| 错 SA/TA | 使用未授权或不存在地址 | route、0x8003/NRC/审计 | 明确拒绝并记录边界 | 待执行 |
| 会话不满足 | 默认会话访问受限服务 | session、SID、NRC | 拒绝可解释，不执行下游动作 | 待执行 |
| 安全未解锁 | 访问受保护清除/例程 | security level、attempt、NRC | 权限生效且审计完整 | 待执行 |
| 0x78/pending | 让服务受控延迟 | P2/P2*、pending 次数、最终结果 | 不提前成功、不无限 pending | 待执行 |
| 目标 ECU reset | 请求前/中/响应前复位 | boot/generation、in-flight、readback | 终态明确或标 unknown，旧响应拒绝 | 待执行 |
| 网关/VM 重建 | 重建诊断承载域 | connection/routing/session/security | 按顺序重建，无旧代污染 | 待执行 |
| TCP 断开重连 | 请求在途时断链 | socket、retry id、服务执行状态 | 无双执行，终态可审计 | 待执行 |
| 多 tester 并发 | 同时读/清相同 DTC | connection、lock、client/memory | 策略确定，无竞态破坏 | 待执行 |
| 清除 active fault | 故障仍在时执行 0x14 | clear、event、DTC re-entry | 清除语义正确，新事件可追踪 | 待执行 |
| 清除中掉电 | Dem/NvM 处理期间受控断电 | storage、reset reason、readback | 无半条记录，状态一致 | 待执行 |
| 清除后复现 | 清除后重新注入同一故障 | new incident、快照、occurrence | 新事件可生成并与旧审计分离 | 待执行 |
| 日志/队列压力 | 受控提升并发与日志量 | drop、latency、retention | 关键证据不被覆盖，超时可解释 | 待执行 |

不要在量产车或未授权设备上执行 SecurityAccess 尝试、清除 DTC、RoutineControl、ECU reset、故障注入、掉电或压力测试。所有访问、阈值和通过标准以项目授权与诊断规范为准。

## 7. 今日独立练习

新题不附参考答案、示范作答或预设根因。

构造场景：售后 tester 通过 DoIP 对座舱相关 ECU 执行一次受权限保护的 DTC 清除。工具显示“成功”，同一时刻 HMI 故障提示消失；下一次上电后提示再次出现，目标 DTC 的 Snapshot 时间与本次现象无法直接对齐。

请独立完成：

1. 画 tester→DoIP→router→DCM→Dem→NvM→tester 的时序图，并标出每层 ACK、NRC、最终响应和业务完成；
2. 分别写出控制流、数据流、状态流和时间/代际流；
3. 至少提出三个竞争假设，填写支持、反证、缺口和单变量实验；
4. 定义“工具显示成功”在没有原始 trace 时最多能证明什么；
5. 设计 clear 前保护、clear 中掉电、clear 后 readback、下一 operation cycle 与故障再注入；
6. 设计 timeout、reset、reconnect、多 tester、旧响应和重复 clear 策略；
7. 给出首轮牵头、触发方、直接修复方、接口/恢复策略方和验证方，以及关闭标准。

## 8. 可复用产物：《UDS/DoIP 诊断服务—清除—验证闭环合同 V1》

至少包含：

1. 拓扑与地址：tester、DoIP Entity/Gateway、router、目标 ECU、SA/TA、VLAN/IP；
2. 连接合同：TCP、Routing Activation、Alive Check、并发和断开；
3. 服务合同：SID/子功能、session、安全、条件、P2/P2*、NRC、最终响应；
4. DTC 合同：memory、group、status、Snapshot/Extended Data、operation cycle；
5. 清除合同：授权、范围、原始证据保护、Dem/NvM 终态、审计；
6. 关联合同：vehicle/build/config、connection、transaction、bootId/generation、DTC/incident；
7. 恢复合同：超时、重试、reset、reconnect、旧响应、unknown 终态与 readback；
8. 验证合同：正常、权限、异常、掉电、并发、复现、相邻 ECU 和业务回归。

## 9. 提交说明

本课编号 **day-46**。请提交 5 道回顾题、两张图、构造场景分析、竞争假设、证据账本、测试矩阵、TPM 分责表和《UDS/DoIP 诊断服务—清除—验证闭环合同 V1》。个人反思由你本人填写：我最容易把哪一个“成功”误判为故障已经修复？缺哪一个关联字段时我会误拼两个 incident？

使用页面末尾“上传／提交答卷”，或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。答卷、附件与批改公开，请只提交可公开且已脱敏的学习材料。编辑原答卷或本人以 [补交] 开头评论会生成新版本并重新评审。

## 附录：21 项 T12T 技能覆盖检查

| 技能 | 本次判断 |
| --- | --- |
| t12t-cockpit-diagnosis | 适用，深入：现象、版本、材料、时间和运行域入口 |
| t12t-log-analysis | 适用，深入：跨域时间、证据分级、最早断点和缺失证据 |
| t12t-platform-architecture | 适用，深入：tester、网关、Android/Yocto、MCU、TBox、Hypervisor 与 ECU 边界 |
| t12t-display-black-freeze | 条件适用：清除后 HMI 提示变化不等于显示链修复；当前无显示证据 |
| t12t-touch-input | 本课无触摸现象，专项不展开 |
| t12t-avm-camera-stream | 条件适用：Camera DTC 可走同类诊断链，当前无视频流材料 |
| t12t-power-sleep-str | 适用：operation cycle、上电复现、掉电与清除持久化边界 |
| t12t-audio-path | 条件适用：音频 ECU/DSP/Amp 诊断可复用合同，当前无音频故障 |
| t12t-stability-crash-reset | 适用，深入：ECU/VM/服务 reset、连续性与旧响应隔离 |
| t12t-performance-jank | 条件适用：worker 饥饿、队列和超时是假设，尚无性能实测 |
| t12t-ethernet-sgmii | 适用，深入：Ethernet/IP/TCP/DoIP 分层，link up 不等于诊断完成 |
| t12t-wireless-phone-link | 本课无无线/手机互联现象，专项不展开 |
| t12t-cross-domain-msg | 适用，深入：SA/TA、request 逐跳、timeout、旧代和业务完成 |
| t12t-boot-hmi | 适用：上电、诊断服务恢复与 HMI 提示重建需分层 |
| t12t-log-storm | 条件适用：高频诊断与 trace 可能覆盖首错，需 rate limit 和 retention |
| t12t-usb-typec-storage | 条件适用：离线诊断包和存储可相关，当前无 USB/文件系统异常 |
| t12t-virtualization-tee | 适用：诊断网关/服务所在 VM 与安全边界待项目确认 |
| t12t-db-ke-forensics | 条件适用：若 reset/crash 发生需关联异常包，当前无 DB/KE |
| t12t-mcu | 适用，深入：MCU DCM/Dem、reset reason、operation cycle 和现车协议核验 |
| t12t-tpm-triage | 适用，深入：首轮牵头、路由边界、根因 Owner 与验证 Owner 分离 |
| t12t-tpm-5y8d | 暂不展开：构造题无确认根因、发生原因和逃逸原因，不强行生成 5Y/8D |

关键证据缺口：车型/SoC/ECU 与虚拟化拓扑、诊断和安全配置、ODX/DEXT/ARXML、DoIP 路由与 SA/TA、VLAN/IP、P2/P2*/S3、NRC、DTC group/memory、operation cycle、Dem/NvM 清除语义、并发 tester、跨域时间锚点、reset/boot/generation、真实 pcap/trace、故障注入授权与业务关闭样本。
