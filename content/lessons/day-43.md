# Day 43 — Ethernet / SOME-IP I：服务可用性、会话与数据新鲜度

计划学习日期：2026-10-13，星期二，Asia/Shanghai；于2026-10-15按用户明确要求补录。补录时间与计划日期分开记录，不表示10月13日已经发布、学习或完成。能力阶段：第二阶段“系统链路与问题分析”。总用时约60分钟，附录选读。

## 1. 资料、版本与边界

官方资料核验日期：2026-10-15。

- [AUTOSAR SOME/IP Protocol Specification R21-11](https://www.autosar.org/fileadmin/standards/R21-11/FO/AUTOSAR_PRS_SOMEIPProtocol.pdf)：用于核对Message ID、Request ID、Protocol/Interface Version、Message Type与Return Code等协议字段。Response成功只表示该请求的协议处理结果，不能代替物理链、服务新鲜度或用户业务验收。
- [AUTOSAR SOME/IP Service Discovery Specification R21-11](https://www.autosar.org/fileadmin/standards/R21-11/FO/AUTOSAR_PRS_SOMEIPServiceDiscoveryProtocol.pdf)：用于理解OfferService、FindService、SubscribeEventgroup、TTL与SD状态机。
- [Linux网络接口Operational States](https://docs.kernel.org/networking/operstates.html)：管理up与可传输用户数据不是同一概念；carrier只是分层证据之一。
- [RFC 9293 TCP](https://www.rfc-editor.org/rfc/rfc9293.html)：TCP连接与keep-alive有独立语义；一个探测无响应不能被简单解释为peer永久死亡。

当前没有本车车型、SoC、交换机/PHY拓扑、VLAN、IP规划、AUTOSAR release、SOME/IP栈实现、Service/Instance/Eventgroup ID、TTL、周期、E2E Profile、进程映射或实车日志。所有ID、时限、状态码和拓扑均待项目确认。教学重点是分层方法，不把规范默认值当项目配置。

执行前已扫描全部答卷Issue和评论，无新答卷；Day 34—43仍待真实作答评审。本课从F盘优化版目录检查全部21项T12T技能，深入平台架构、日志、以太网、跨域消息、启动与TPM分责。

## 2. 一小时主线

| 时间 | 学习任务 | 输出 |
| --- | --- | --- |
| 0—10分钟 | 回顾4题 | 分层判断短答 |
| 10—30分钟 | 两个核心概念 | 可用性四层、freshness账本 |
| 30—50分钟 | 工程案例 | 双链路与最早断点 |
| 50—60分钟 | 可复用产物 | 《SOME/IP服务可用性证据表 V1》 |

回顾题：

1. netdev admin up、carrier up、IP可达、OfferService存在各自证明什么？
2. 为什么SD服务可发现不等于目标event持续新鲜？
3. Response的E_OK与用户业务完成之间还缺哪些步骤？
4. heartbeat正常但单一topic停止，首查顺序应该怎样改变？

## 3. 核心概念一：把“服务在线”拆成四层

| 层 | 关键问题 | 成功证据 | 不能推出 |
| --- | --- | --- | --- |
| 物理/链路 | PCS、PHY、carrier是否建立？ | 当前接口的link/carrier与错误计数 | IP、SD或业务可用 |
| 网络/传输 | IP/VLAN/route/ARP邻居、UDP/TCP端点是否通？ | 双端地址、socket、抓包和计数 | 服务已Offer或版本匹配 |
| SOME/IP/SD | Service/Instance可发现，Eventgroup订阅有效？ | Offer/Find/Subscribe与TTL/session | 目标数据持续更新 |
| 业务/freshness | 当前source产生新数据，consumer正确消费？ | sourceSeq→publish→arrival→callback→state | 上游没有独立缺陷 |

物理链alive、RPC/SD会话alive、目标topic fresh、业务状态正确必须写成四个结论。SOME/IP-SD负责发现与订阅关系；它不替代source、producer、router、consumer的端到端新鲜度。

~~~mermaid
flowchart LR
    SRC[CAN或业务Source] --> P[Producer Cache]
    P --> S[序列化 SOME/IP]
    S --> EP[UDP/TCP Endpoint]
    EP --> NET[VLAN/IP/MAC]
    NET --> PHY[MAC/PCS/PHY/Switch]
    PHY --> RNET[Peer MAC/IP]
    RNET --> D[反序列化/Router]
    D --> SUB[Subscriber Callback]
    SUB --> C[Consumer Cache/Freshness]
    C --> B[业务状态与用户结果]
    SD[SOME/IP-SD Offer/Find/Subscribe/TTL] -.控制关系.-> S
    SD -.控制关系.-> D
~~~

控制流与数据流要分开：Offer/Subscribe是控制关系；event payload、method request/response是数据或业务事务。链路恢复后，控制面重建不自动证明数据面已经产生新sequence。

## 4. 核心概念二：会话可用与数据新鲜度

### Request/Response

同一请求至少关联Client ID、Session ID或当前实现的Request ID，并观察：

1. client创建并发送request；
2. server接收且版本/方法匹配；
3. server执行并生成response；
4. client收到并匹配当前session；
5. consumer应用结果；
6. 用户业务状态达到目标。

协议response或Return Code只覆盖第3—4步的合同语义。若方法是“请求开始某动作”，E_OK可能只是接受执行；必须另定义业务完成事件或读回验证。

### Publish/Subscribe

新鲜度账本至少记录：

| 字段 | 用途 |
| --- | --- |
| sourceSeq/sourceTime | 上游是否产生新值 |
| producerSeq/publishTime | cache与publish是否继续 |
| SD/sessionGeneration | 当前Offer/Subscribe属于哪一代 |
| arrivalTime/callbackSeq | transport/router是否交付 |
| cacheGeneration/lastGood | consumer是否写入当前代 |
| firstStale/sourceAge | 谁在什么时钟上判过期 |

TTL未到期最多支持“当前SD状态尚未按规则失效”；它不能证明目标event已经在业务周期内更新。类似地，TCP连接仍ESTABLISHED或UDP端点存在，也不能证明producer仍在publish。

## 5. 状态与时序

~~~mermaid
sequenceDiagram
    participant S as Service Provider
    participant SD as SOME/IP-SD
    participant N as Network
    participant C as Client/Consumer
    participant B as Business State

    S->>SD: OfferService service/instance/version/TTL
    SD-->>C: Offer observed
    C->>SD: SubscribeEventgroup / client generation g13
    SD-->>C: Subscribe ACK（控制面）
    S->>N: Event seq=201 / sourceTime
    N-->>C: Event seq=201
    C->>B: cache update g13 / seq=201
    B-->>C: business state updated

    Note over S,C: 服务会话保持，但目标source停止更新
    S->>SD: Offer refresh continues
    SD-->>C: service still offered
    C->>C: sourceAge超过项目阈值（待确认）
    C-->>B: stale/degraded
    Note over C,B: SD在线不等于目标topic新鲜
~~~

超时与恢复规则：

- 链路down/up时增加network/session generation，旧response与旧event不得写当前cache；
- TTL过期、Subscribe丢失、server restart、client restart分别记录，不合并成“断网”；
- reconnect后重新Offer/Find/Subscribe，并要求目标topic出现当前代的新sequence；
- request超时区分未发出、server未收、未处理、response丢失、旧session无法匹配；
- retry必须有界并携带幂等键；不能因重连重复执行非幂等业务；
- source-age使用明确时钟；跨域wall clock未校准时不直接相减。

## 6. 教学构造案例：服务仍可发现但车速冻结

以下事件为合成教学数据：

| 证据 | 构造事件 | 边界 |
| --- | --- | --- |
| E1 | netdev carrier持续Up，双端TX/RX byte均增长 | 反证整条物理链中断；不能证明目标topic |
| E2 | provider持续发送OfferService，client TTL未过期 | SD控制面仍在；不能证明event新鲜 |
| E3 | door与climate event sequence持续递增 | 反证共享channel整体失效 |
| E4 | speed sourceSeq在320停止；producerSeq也停在320 | 最早可观察断点在source→producer之前或内部 |
| E5 | consumer每周期报告speed stale，lastGood=320 | 检测结果，不是根因 |
| E6 | reconnect SOME/IP session后仍没有speed 321 | 恢复动作未改变上游断点 |
| E7 | 在producer入口注入递增测试sequence后consumer恢复 | 将断点收窄到真实source到producer入口 |

完整分析：

1. 用户现象是车速显示冻结，范围是单一业务对象；
2. E1与E3降低整链、交换机公共端口或RPC channel整体失效的优先级；
3. E2只证明服务发现控制关系仍在；
4. E4是最早可证实断点，E5是下游检测；
5. E6说明重连覆盖session，但不能证明session原先是根因；
6. E7把transport/router/consumer的大部分路径作为可用基线，但真实source、CAN接收、映射与producer触发仍需逐层区分；
7. 当前责任边界先落在source/CAN/gateway/producer链，SOME/IP与consumer owner继续提供反证和关联计数；
8. 置信度：单topic上游停止为中高；具体CAN停报、解析错误或publish trigger异常为待验证假设。

## 7. 日志与可执行验证

统一字段建议：

domain | clockId | bootId | networkGeneration | service/instance | interfaceVersion | client/session | eventgroup/topic | requestId | sourceSeq | producerSeq | arrivalSeq | sourceTime | publishTime | arrivalTime | lastGood | firstStale | TTL | phase | result

| 测试 | 操作 | 观察 | 通过标准 |
| --- | --- | --- | --- |
| T1 正常启动 | 同步采集Link→IP→Offer→Subscribe→首个event | 每层里程碑与generation | 可重建完整基线 |
| T2 单topic停更 | 保持其他topic与SD正常，停止目标source | source/publish/arrival/freshness | 断点落到正确层，不误报整链 |
| T3 provider重启 | 受控重启provider | TTL、Offer、Subscribe、首个新event | 旧session失效，当前代恢复 |
| T4 client重启 | 受控重启consumer | cache、订阅、旧event | 不消费旧代，重新建立freshness |
| T5 request迟到 | 延迟旧session response | Request ID/session/generation | 旧response不完成新请求 |
| T6 链路抖动 | 受控link down/up | carrier/IP/SD/data恢复顺序 | 每层状态可观测，重试有界 |

参数与故障注入仅限获批环境；具体TTL、周期与timeout全部待项目确认。

## 8. 今日练习与交付

新题不附参考答案：

1. 画出一个车信号从CAN/source到Android HMI的控制流和数据流，逐边写观测点；
2. 对“carrier Up、Offer存在、订阅ACK成功、数据仍冻结”提出4个竞争假设；
3. 设计request/response与event两套generation和旧消息拒绝规则；
4. 写一张正常/异常freshness账本，说明时钟、sequence回绕和重启如何处理；
5. 扩展：比较TCP连接存活、应用heartbeat、SD TTL和目标event新鲜度的覆盖范围。

今日交付物：《SOME/IP服务可用性证据表 V1》，包含四层可用性、双链图、freshness字段、ACK与业务完成、T1—T5验证。课程编号为 **day-43**。使用页面末尾“上传／提交答卷”提交。

## 9. 21项技能覆盖（选读）

深入：cockpit-diagnosis、log-analysis、platform-architecture、ethernet-sgmii、cross-domain-msg、boot-hmi、tpm-triage。条件适用：power-sleep-str、performance-jank、stability-crash-reset、log-storm、virtualization-tee、mcu。显示、触摸、AVM、音频、无线、USB、DB/KE与5Y/8D在当前案例中不适用或材料不足。

关键缺口：现车MAC/PCS/PHY/Switch/VLAN拓扑、SOME/IP栈与AUTOSAR release、ID与版本字典、TTL/周期/超时、E2E与安全配置、各层sequence埋点和实机正常/异常样本。
