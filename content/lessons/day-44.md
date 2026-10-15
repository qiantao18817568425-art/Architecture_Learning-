# Day 44 — Ethernet / SOME-IP II：故障隔离、恢复策略与测试闭环

计划学习日期：2026-10-14，星期三，Asia/Shanghai；于2026-10-15按用户明确要求补录。补录不表示10月14日已经发布、学习或完成。能力阶段：第二阶段“系统链路与问题分析”。目标：把服务异常收敛到最小故障域，并设计不会放大故障的恢复与验收。总用时约60分钟。

## 1. 资料与边界

官方资料核验日期：2026-10-15。

- [AUTOSAR SOME/IP Protocol Specification R21-11](https://www.autosar.org/fileadmin/standards/R21-11/FO/AUTOSAR_PRS_SOMEIPProtocol.pdf)：用于request/response、notification、error、Request ID、版本和Return Code边界。
- [AUTOSAR SOME/IP-SD Specification R21-11](https://www.autosar.org/fileadmin/standards/R21-11/FO/AUTOSAR_PRS_SOMEIPServiceDiscoveryProtocol.pdf)：用于Offer/Find/Subscribe、TTL、启动/关闭行为和SD状态机。
- [Linux Operational States](https://docs.kernel.org/networking/operstates.html)：admin状态、carrier和接口可用性应分层判断。
- [Linux networking APIs / phylink](https://docs.kernel.org/networking/kapi.html)：PCS、PHY、in-band状态与carrier同步属于独立链路环节，具体驱动实现以项目版本为准。
- [RFC 8085 UDP Usage Guidelines](https://www.rfc-editor.org/rfc/rfc8085.html)：UDP消息可能丢失、重复或重排；应用必须设计拥塞、重试和恢复，而不能把keep-alive当可靠业务完成。

当前缺少现车拓扑、交换机与PHY配置、VLAN/IP/路由、防火墙、SOME/IP实现、服务部署、SD参数、E2E、安全和真实故障数据。下文所有阈值、重试、ID、错误码和owner均待项目确认。

执行前答卷扫描无新增；Day 34—44待真实评审。本课重新检查F盘全部21项T12T技能，深入以太网、跨域消息、日志证据、平台架构、稳定性、日志风暴与TPM分责。

## 2. 一小时主线

| 时间 | 学习任务 | 输出 |
| --- | --- | --- |
| 0—10分钟 | 回顾4题 | 恢复边界短答 |
| 10—30分钟 | 两个核心概念 | 故障域矩阵、恢复阶梯 |
| 30—50分钟 | 工程案例 | 故障树与区分实验 |
| 50—60分钟 | 可复用产物 | 《SOME/IP恢复与关闭矩阵 V1》 |

回顾题：

1. link、carrier、IP、socket、Offer、Subscribe、event fresh为什么不能合并？
2. reconnect后恢复最多证明什么？
3. 对非幂等method进行timeout retry会产生什么风险？
4. 为什么先恢复最小对象，再扩大到服务、网络接口或VM？

## 3. 核心概念一：按共享范围隔离故障

架构师不仅找“哪条日志报错”，还要比较同一资源的其他消费者：

| 影响范围 | 优先检查 | 需要的反证 |
| --- | --- | --- |
| 单字段/单event | source、映射、producer cache、topic路由、consumer freshness | 同服务其他event持续 |
| 单Service/Instance | service进程、endpoint、SD状态、版本与资源 | 同ECU其他服务正常 |
| 单VLAN/接口 | route、VLAN、防火墙、netdev、MAC/PCS/PHY | 其他VLAN/接口链路 |
| 多服务/多ECU | 交换机公共端口、时钟/电源、网络管理 | 独立路径消费者 |
| 单VM/Guest | virtio-net、vSwitch/backend、Guest网络栈 | Host与其他VM同物理口 |
| 全SoC/整车网络 | 公共电源、交换机、SoC/Host、网络管理 | 域外或独立电源路径 |

责任落到“最后有输入、首个无预期输出”的最小域。最后打印timeout的consumer通常只是检测者；交换机、PHY或SOME/IP名字出现在日志中也不等于它们是根因。

~~~mermaid
flowchart TD
    F[用户业务失败] --> A{同服务其他event正常?}
    A -- 是 --> T[单topic/source/route/freshness]
    A -- 否 --> B{同ECU其他服务正常?}
    B -- 是 --> S[单Service/Instance/endpoint]
    B -- 否 --> C{同接口其他VLAN或peer正常?}
    C -- 是 --> V[VLAN/route/firewall/配置]
    C -- 否 --> D{Host或其他VM共享物理口正常?}
    D -- 是 --> G[Guest/virtio-net/vSwitch上下文]
    D -- 否 --> P[公共MAC/PCS/PHY/Switch/电源]
~~~

## 4. 核心概念二：恢复阶梯与完成合同

建议从最小范围依次评估：

1. **刷新当前状态**：重读source、重发当前值、重建consumer cache；
2. **重订阅**：解除旧Eventgroup并以新session/generation订阅；
3. **重连endpoint**：重建TCP/UDP socket或RPC channel；
4. **重启单服务**：重建producer/router资源；
5. **重置网络接口/虚拟设备**：影响同接口所有服务；
6. **重建VM/Host**：影响半径最大，仅在前级无法隔离且满足升级条件时使用。

每一级都必须定义：

- 触发条件和防抖；
- 只执行一次的incident/generation；
- 旧请求、旧订阅、旧event的清理；
- 在途method的幂等性与最终状态；
- 恢复budget和升级上限；
- resource ready与business complete；
- 失败时保留原始证据，不让恢复日志覆盖首个断点。

### ACK与业务完成

| 事件 | 最多证明 |
| --- | --- |
| link up/carrier on | 当前链路层报告可用 |
| socket connect成功 | 传输端点建立 |
| OfferService/Subscribe ACK | 发现或订阅控制关系成立 |
| SOME/IP Response E_OK | 对应request被协议端成功处理 |
| 当前代首个event | 数据面恢复一个里程碑 |
| consumer状态更新 | 本地业务状态接收当前数据 |
| 用户结果/读回验收 | 业务完成 |

若method启动异步动作，E_OK不能替代完成事件。若method timeout后重试，必须先知道原请求是否可能已经执行；否则可能产生重复动作。

## 5. 恢复时序

~~~mermaid
sequenceDiagram
    participant C as Client
    participant SD as SOME/IP-SD
    participant S as Server
    participant N as Network/Endpoint
    participant B as Business Verifier

    C->>S: method r44 / session g14
    S-->>C: Response E_OK（协议处理）
    S-->>B: 异步业务执行
    B-->>C: business complete / current state

    Note over C,S: 故障后进入最小恢复
    C->>C: invalidate old session g14
    C->>SD: SubscribeEventgroup / g15
    SD-->>C: Subscribe ACK（控制面）
    S->>N: event seq=501 / g15
    N-->>C: event seq=501 / g15
    C->>B: current state applied
    B-->>C: business complete

    S--xC: late response r44 / old g14
    Note over S,C: 旧代拒绝；不能完成新请求
~~~

超时策略应区分：

- detection timeout：触发证据固定与SUSPECT；
- operation timeout：单个request的合同；
- freshness timeout：目标数据年龄；
- recovery timeout：重订阅/重连/重启；
- end-to-end deadline：用户业务最终期限。

局部重试的总时间必须受端到端deadline约束。多个层各自“重试三次”可能把总恢复时间无限叠加，必须由一个coordinator持有剩余预算。

## 6. 教学构造案例：冷启动后单服务反复离线

合成场景：冷启动后，目标服务A反复Offer/StopOffer；同接口的服务B稳定。carrier始终Up，IP与ARP正常。A的provider进程未退出。日志显示A的Offer开始后，client订阅ACK成功，但首个event迟迟不到；随后client freshness timeout并触发reconnect。每次reconnect后仍重复。目标source在provider cache中已有新值，但publish trigger没有执行。手工触发一次cache update后event立即到达。

分析：

1. 同接口B稳定、carrier/IP/ARP正常，降低公共物理链和L3故障优先级；
2. A反复Offer说明SD状态变化，但不能解释数据面首event缺失；
3. provider进程存活不能证明publish状态机ready；
4. source cache已有新值而producer未publish，最早可见断点位于publish trigger/state guard；
5. client freshness timeout是检测结果，reconnect只重建client/session，未改变server内部状态，因此无效；
6. 手工cache update后恢复说明该动作覆盖producer状态，但不独立证明根因；需要比较正常启动的resource-ready与publish-trigger顺序；
7. 竞争假设包括：resource ready事件丢失、旧generation guard阻止首次publish、启动竞态导致trigger先于订阅状态、配置/版本使eventgroup映射不一致；
8. 最小实验要逐一固定source update、resource ready、Offer、Subscribe、publish trigger和首event顺序，不直接归责网络。

### 故障责任表

| 角色 | 本案任务 | 关闭证据 |
| --- | --- | --- |
| Provider owner | 证明cache→publish trigger→event | 当前代首event与连续sequence |
| SOME/IP/SD owner | 证明Offer/Subscribe与映射 | 控制面状态及版本一致 |
| Network owner | 提供carrier/IP/抓包反证 | 同窗包与错误计数 |
| Consumer owner | 提供lastGood/firstStale与恢复 | 当前代cache更新 |
| TPM | 统一generation、时钟、测试场景 | 行动项都有Owner和验收 |

## 7. 可执行测试闭环

| 场景 | 故障注入/操作 | 关键证据 | 通过标准 |
| --- | --- | --- | --- |
| T1 冷启动顺序 | 采集正常与异常启动 | resource ready、Offer、Subscribe、首event | 顺序稳定，早到事件有处理 |
| T2 单topic停更 | 只停止publish trigger | source/cache/event/freshness | 隔离到producer，不重置整网 |
| T3 TTL过期 | 停止Offer refresh | SD状态、subscription、业务降级 | 过期后旧服务不可用且可恢复 |
| T4 provider重启 | 保持链路与client | session/generation/首event | 旧订阅失效，新代闭环 |
| T5 client重启 | 保持provider | 旧cache/重订阅/状态重取 | 不显示旧值，当前态恢复 |
| T6 迟到response | 延迟旧session响应 | 幂等键与拒绝日志 | 不重复业务、不污染新请求 |
| T7 link flap | 受控down/up | PCS/PHY/carrier/IP/SD/event | 分层恢复，有界且可观测 |
| T8 重复失败 | 连续让publish不ready | 升级次数、降级、证据留存 | 不形成重连/日志风暴 |

不要在量产车上执行未授权故障注入。通过标准必须用当前项目业务目标和基线填写，不能直接采用示例时限。

## 8. 今日练习与交付

新题不附参考答案：

1. 为“单event、单服务、单VLAN、单VM、全接口”设计消费者矩阵和区分证据；
2. 针对一个非幂等method，设计request identity、timeout、查询最终状态和安全重试；
3. 把案例拆成trigger、direct failure、aggravator、consequence和recovery；
4. 设计从重订阅到VM重建的升级门槛，写清每一级影响半径；
5. 输出TPM行动项表：动作、Owner、输入、输出、截止待确认、验证标准。

今日交付物：《SOME/IP恢复与关闭矩阵 V1》，包含故障域树、恢复阶梯、ACK/完成表、超时预算、T1—T8测试和责任表。课程编号为 **day-44**。使用页面末尾“上传／提交答卷”提交。

## 9. 21项技能覆盖（选读）

深入：cockpit-diagnosis、log-analysis、platform-architecture、ethernet-sgmii、cross-domain-msg、boot-hmi、log-storm、stability-crash-reset、tpm-triage。条件适用：power-sleep-str、performance-jank、virtualization-tee、mcu。其余显示、触摸、AVM、音频、无线、USB、DB/KE与5Y/8D在当前案例中不适用或材料不足。

关键缺口：现车物理和虚拟网络拓扑、服务部署、正常启动顺序、SD与SOME/IP配置、method幂等合同、状态查询接口、恢复coordinator、实测预算、故障注入权限和关闭样本。
