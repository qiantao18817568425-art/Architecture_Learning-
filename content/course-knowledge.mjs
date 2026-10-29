// Reusable architecture knowledge distilled from assigned Day lessons.
// Course exercises and unverified project constants stay in the course archive.
export const courseKnowledge = {
  '02': `## 课程沉淀：VM Reset 的故障域、重建顺序与升级边界

关联课程：Day 41、Day 42。VM Reset 的第一步是区分 App / process、Android Guest、虚拟设备后端、VMM/Hypervisor、Host 与 SoC/MCU 故障域。看门狗只证明监督对象在规定窗口内没有满足喂狗合同；它不能独立证明根因，也不能自动决定恢复半径。

恢复按“冻结旧代 → 处置在途事务 → 重建虚拟设备 → 重建 Guest 服务 → 重取当前权威状态 → 端到端验收”推进。每次恢复携带 bootId、VM generation、device generation 和 transactionId；旧队列通知、旧 fence、旧 callback 与旧业务状态不得更新新代。只有局部恢复超时、失败或共享资源证据指向更大故障域时，才升级到设备 reset、整 VM 重建、Host/SoC reset。具体 VMID、设备直通/共享方式、看门狗阈值和恢复时限均待当前项目确认。

## 模块分层、权威状态与恢复责任

Day 52 把模块责任拆成策略/权威、执行、数据所有权、状态权威和恢复协调五类。每个模块责任卡记录部署域、唯一 Owner、输入/输出、前置/后置、资源、权威状态、失败模式、恢复动作、观测点和升级边界。HMI 展示状态、服务进程 Running 或命令 ACK 均不能替代资源/业务 Owner 的当前状态读回。

跨 VM 或服务复位时，由恢复协调者建立新 generation 和依赖屏障；各 Owner 在新代重建资源、交换权威快照后才放行业务。旧代 callback、timeout、fence、handle、completion 和 cancel 只归档，不得推进新代状态；sequenceId 需与 producer identity、bootId/generation 组合使用。

[AOSP AVF architecture](https://source.android.com/docs/core/virtualization/architecture)与[OASIS Virtio 1.3](https://docs.oasis-open.org/virtio/virtio/v1.3/virtio-v1.3.html)用于核对通用职责和设备 reset 后重新初始化的边界；它们不是本车型实现证明。`,

  '05': `## 课程沉淀：SOME/IP 消息成功与业务完成的边界

关联课程：Day 43、Day 44。SOME/IP 的 Response、Return Code、OfferService 和 Subscribe ACK 只覆盖各自协议步骤。架构评审必须继续检查 source、producer、router、consumer 和 actuator/display 是否处理同一代、同一对象且足够新的数据。Request ID 关联请求响应；发布订阅还需 sequence、source timestamp、receive timestamp、TTL/周期和当前 session/generation 才能判断重复、丢失、乱序和陈旧。

恢复不能只做 reconnect。先识别最小故障域，再按 subscriber/resubscribe、service restart、Guest 网络重建、virtio/backend、VLAN/IP/routing/firewall、PHY/PCS/交换机逐级扩大，并在每一级验证数据恢复推进。`,

  '06': `## 课程沉淀：进程、Guest 与 Host 稳定性边界

关联课程：Day 41、Day 42。应用崩溃、system_server 异常、Guest kernel panic、VM 被 VMM 终止、Host panic 和硬件复位属于不同层级。恢复成功只说明某条路径重新可用，不能倒推原始根因。证据要固定 crash/kill/reset reason、PC/LR/SP 或 tombstone、VM generation、virtqueue/in-flight 状态、Host 资源和物理设备状态。

首选最小安全恢复：服务重启前确认共享状态可重建；VM 重建前处置设备所有权与在途 buffer；Host/SoC reset 前保存跨层证据。升级策略必须有预算、最大次数、冷却时间、用户影响和最终降级出口。`,

  '07': `## 课程沉淀：Yocto Host 的网络与虚拟设备证据

关联课程：Day 41—44。Yocto Host 可能同时承载 VMM、virtio backend、vSwitch、物理网卡驱动、SOME/IP 服务或跨域代理。排障时分别记录 Guest 前端、backend 队列、Host netdev、VLAN/IP/routing、防火墙、MAC/PCS/PHY 和服务进程状态；其中任一层 ready 都不能外推整条业务已恢复。

VM 重建或链路 flap 后，Host 需要拒绝旧 generation 的 queue/packet/completion，并让新前端重新协商、建链和订阅。实际部署、接口名、服务归属及权限策略以当前车型配置为准。`,

  '08': `## 课程沉淀：MCU 健康事件、复位原因与 DTC 边界

关联课程：Day 45。MCU 侧 heartbeat、SWT/WDT、CAN E2E、供电和外设自检先形成健康观测；是否映射 EventID、何时 qualification、是否生成 DTC、保存哪些首错环境数据，必须由诊断字典和 operation cycle 明确定义。reset reason、DTC 与普通日志互补，不能互相替代。

跨 SoC/MCU 关联至少保留 power cycle、MCU boot counter、SoC bootId、monotonic/local tick 及一次共同事件。tick 单位、16 小时时差、复位码、DTC 编号、去抖、老化和清除策略均按本次软件与硬件版本核验。`,

  '10': `## 课程沉淀：诊断读取链与清除边界

关联课程：Day 45、Day 46。外部 tester 经 DoIP/CAN、路由和 DCM/诊断管理读取故障时，要分开验证链路可达、会话、安全访问、目标 ECU 路由、DTC memory entry、Snapshot/Extended Data 和响应结果。能读取其他 DTC 只降低公共链故障优先级，不能证明目标事件已生成。

DoIP Routing Activation 只建立当前 tester/socket 到配置目标的路由资格；0x8002 positive ACK 只证明 DoIP 节点接受处理该诊断消息。它们都不能替代 DCM/应用的最终 UDS 响应。若 ACK 后无最终响应，应沿 DoIP → router/PduR → DCM → Dem/handler 找相同 SA、TA、SID、transaction 与 generation 的首个缺失里程碑。

清除 DTC 是受会话、权限和条件约束的诊断操作，不代表业务已经修复。0x14 正响应后还要 0x19 readback、核对 Dem/NvM 终态、覆盖 active fault 与下一 operation cycle，并验证再次注入能生成新的 incident。清除前保存 DTC、status、Snapshot/Extended Data、配置版本、tester trace 和原始日志。`,

  '11': `## 课程沉淀：显示首帧不能由服务 Ready 或图层 submit 代替

关联课程：Day 38、Day 40。显示恢复需要把屏幕对象、displayId/connector/CRTC/plane、layer、buffer、frameId 和 boot/generation 绑定在同一次恢复中。服务 Ready、窗口存在、buffer dequeue、queueBuffer、HWC validate/present、DRM atomic commit、vblank/scanout、链路锁定、背光点亮与用户可见是逐层里程碑，前一层 ACK 不能代替后一层完成。

首帧证据梯级至少覆盖 producer 提交新鲜 buffer、acquire fence 可用、consumer/HWC 处理、present/retire 进展、DRM/scanout 与面板/背光实态。恢复时丢弃旧 generation 的 frame/fence/callback，并用新鲜帧而非旧画面亮屏作为验收。具体 SerDes、屏 ID、GPIO/IRQ、fence 语义和时限待项目版本确认。

[AOSP BufferQueue 与 Gralloc](https://source.android.com/docs/core/graphics/arch-bq-gralloc)、[AOSP 同步框架](https://source.android.com/docs/core/graphics/sync)和[Linux DRM UAPI](https://docs.kernel.org/gpu/drm-uapi.html)给出通用边界。`,

  '12': `## 课程沉淀：音频焦点、路由、DSP 与功放的分层完成语义

关联课程：Day 35、Day 36、Day 37。完整音频链要同时画控制流、PCM 数据流、状态流和时间流：source/usage/session → focus/policy → mixer/route → Audio HAL/ALSA → DSP/Codec/数字链路 → Amp → speaker/目标音区。Focus gain、Track running、HAL write、DSP playback、Amp ready 或 mute off 都不能单点证明目标区已经可听。

多音区权威映射为 user/occupant → audioZone → volumeGroup → bus/device → DSP port → Amp channel → speaker。duck/mute/restore 使用当前 holder 与当前目标增益，旧 unduck 或旧 route completion 不能覆盖新一轮会话。电话、导航、提示音和 ANC 共享部分资源，但 AEC、ANC、播放和采集有不同数据路径与完成条件；恢复时必须按 session、zone、route、bootId/epoch 重建并验收。

[AOSP Automotive Audio](https://source.android.com/docs/automotive/audio)、[Audio Control HAL](https://source.android.com/docs/automotive/audio/audio-control-hal)和[Linux ASoC](https://docs.kernel.org/sound/soc/overview.html)用于核对通用职责。车型的 DSP、Codec、功放、A2B/数字接口和阈值仍待确认。`,

  '13': `## 课程沉淀：Ethernet / SOME-IP 的链路、服务、会话与数据新鲜度

关联课程：Day 43、Day 44、Day 46。“网络在线”至少拆成四层：物理/链路（SerDes/PCS/PHY/MAC/carrier）、网络（VLAN/IP/ARP/ND/routing/firewall）、服务（process/socket/Offer/Find/Subscribe/TTL）、业务数据（sequence/source timestamp/quality/consumer apply）。物理 link up、SD 可发现、RPC 会话存活和目标 topic 新鲜是四个不同结论。

故障定位以最后正常输入和首个缺失输出为边界；consumer timeout 通常只是检测点。恢复按最小影响半径逐级推进，并在每一级验证 session 重建、订阅有效、sequence 继续、数据足够新且业务状态正确。ACK、SOME/IP E_OK、订阅成功与业务完成分别记录，不互相替代。

DoIP Routing Activation 在 TCP 之上建立 tester 注册和逻辑地址路由；DoIP 还包含 Alive Check、source/target address 和诊断消息 ACK。TCP connected、Routing Activation accepted、DoIP 0x8002、UDS 正/负响应、DTC/例程状态与业务验收是不同里程碑。reset/reconnect 后要重建 routing、session 与 security，并按 connection、bootId/generation 拒绝旧响应。

[AUTOSAR SOME/IP](https://www.autosar.org/fileadmin/standards/R21-11/FO/AUTOSAR_PRS_SOMEIPProtocol.pdf)、[SOME/IP-SD](https://www.autosar.org/fileadmin/standards/R21-11/FO/AUTOSAR_PRS_SOMEIPServiceDiscoveryProtocol.pdf)、[AUTOSAR DoIP](https://www.autosar.org/fileadmin/standards/R22-11/CP/AUTOSAR_SWS_DiagnosticOverIP.pdf)和[Linux Operational States](https://docs.kernel.org/networking/operstates.html)用于机制核验。`,

  '14': `## 课程沉淀：STR / Resume 的屏障、代际与恢复预算

关联课程：Day 38、Day 39、Day 40、Day 47、Day 48。STR、s2idle、熄屏、runtime PM、冷启动和 VM recreate 必须依据 power state、内核 PM 阶段、bootId/generation、设备上下文和耗时判定。恢复顺序由真实依赖决定：电源/时钟、Host/backend、Guest/driver、系统服务、业务状态、数据路径和物理输出分别设里程碑。

依赖图描述谁依赖谁，等待图描述运行时谁正在等谁；两者应同时审查以识别环路。全局 deadline 从用户触发开始，不因局部重试重新计时。目标改变、取消或 generation 更新时，旧工作必须结束；迟到 ACK、旧状态和旧帧不得推进当前状态机。最终验收使用当前目标下的新鲜业务输出，而非单个模块 Ready。

[AOSP 车辆电源管理](https://source.android.com/docs/automotive/power/power)、[Linux 系统睡眠状态](https://docs.kernel.org/admin-guide/pm/sleep-states.html)和[Linux 设备电源管理](https://docs.kernel.org/driver-api/pm/devices.html)提供通用机制，项目状态名、屏障和预算待确认。

### OTA 版本合同、安装状态机与跨域提交

OTA 的完成链为：版本/依赖预检 → 包下载与真实性/完整性验证 → 非活动或暂存目标写入 → post-install → 激活 → trial boot → 本地健康 → 跨域兼容 → 全局提交或协调回滚。下载完成、包校验、写入完成、set-active ACK、系统启动、健康门禁、mark-successful 与整车业务验收是不同里程碑，前一项不能替代后一项。

单域状态至少区分 available、downloading、verified、installing、staged、activation-pending、trial-boot、committed、rollback-pending、rolled-back、failed/unknown。掉电或进程/VM 重启后，先以持久 journal、当前版本、Slot/SoftwareCluster 状态和 boot/generation readback 收敛，再决定 resume、retry 或 rollback；旧 campaign/旧 generation 的完成回调不得推进当前事务。

跨域 campaign 使用依赖图和提交屏障管理 Hypervisor、Yocto Host、Android Guest、MCU、TBox 与其他 ECU。每域 staged 或 locally healthy 只说明局部状态；只有所有规定成员对同一 campaign generation 完成本地健康、接口/数据兼容、关键业务和安全门禁，才允许全局提交。回退目标还必须同时满足安全 rollback protection、数据格式和接口依赖，不能机械地“全部回旧版”。

~~~mermaid
flowchart LR
  P[Version / dependency contract] --> V[Package verify]
  V --> S[Stage inactive target]
  S --> A[Activate target generation]
  A --> H[Local health gates]
  H --> X[Cross-domain compatibility]
  X --> C[Global commit]
  H --> R[Rollback / degrade]
  X --> R
~~~

[AOSP A/B updates](https://source.android.com/docs/core/ota/ab)、[Android Verified Boot](https://source.android.com/docs/security/features/verifiedboot/avb)以及[AUTOSAR UCM](https://www.autosar.org/fileadmin/standards/R22-11/AP/AUTOSAR_SWS_UpdateAndConfigurationManagement.pdf)用于核对通用机制；当前车型的分区、包、密钥、rollback index、依赖图、车辆状态和门禁仍需项目证据。`,

  '15': `## 课程沉淀：健康状态、故障码与跨复位证据合同

关联课程：Day 35—48。诊断链应明确为：Health signal → event → qualification → DTC → snapshot → storage → tester。Monitor 报告接口返回、事件 qualified、DTC memory entry 创建、NVRAM 持久化、tester 成功读取和业务恢复属于不同完成点。

事件合同至少包含 component/instance、EventID/DTC、severity、monitor result、debounce、enable/storage condition、operation cycle、status byte、occurrence、first/most-recent fail、vehicle/build/config、powerCycle/bootId/VM generation/process incarnation/incidentId、monotonic 与域内时间、Snapshot/Extended Data、log/dump/pstore/tombstone 引用、hash 和 retention。跨复位后旧代事件不得修改新代状态；DTC 清除、老化与业务恢复分别管理。

~~~mermaid
flowchart LR
  H[Health signal] --> M[Monitor]
  M --> E[Event report]
  E --> Q[Debounce / qualification]
  Q --> D[DTC status]
  D --> S[Snapshot / Extended Data]
  S --> N[Persistent storage]
  N --> C[DCM / Diagnostic Management]
  C --> T[Tester via CAN / DoIP]
  E -. incidentId / bootId / generation .-> L[Log / dump / pstore / tombstone]
~~~

### UDS/DoIP 服务链与清除闭环

tester → TCP/DoIP Entity → Routing Activation → diagnostic router/PduR → DCM → Dem/应用/Routine → UDS response 是逐层链路。DoIP ACK 只证明诊断消息被 DoIP 节点接受处理；NRC 0x78 只表示仍在等待最终结果；UDS 正响应只按该 SID 的服务合同解释。三者都不能直接证明用户业务已经恢复。

0x19 读取要把 DTC/status/Snapshot 与 incident、operation cycle、bootId/generation 和业务日志关联。0x14 清除前保存原始证据，清除后做 readback、复位/掉电一致性、active fault、下一 cycle 和故障再注入验证。若清除或例程在复位时终态未知，必须记录为 unknown 并以新代 readback 收敛；旧连接或旧 ECU generation 的迟到响应不得更新当前事务。

《健康事件—DTC 证据合同》和《UDS/DoIP 诊断服务—清除—验证闭环合同》用于评审“谁监控、何时成立、保存什么、怎样读取、跨复位如何关联、清除和恢复怎样验收”。[AUTOSAR Dem](https://www.autosar.org/fileadmin/standards/R22-11/CP/AUTOSAR_SWS_DiagnosticEventManager.pdf)、[DCM](https://www.autosar.org/fileadmin/standards/R22-11/CP/AUTOSAR_SWS_DiagnosticCommunicationManager.pdf)、[DoIP](https://www.autosar.org/fileadmin/standards/R22-11/CP/AUTOSAR_SWS_DiagnosticOverIP.pdf)、[Platform Health Management](https://www.autosar.org/fileadmin/standards/R22-11/AP/AUTOSAR_SWS_PlatformHealthManagement.pdf)与[Linux ramoops](https://docs.kernel.org/admin-guide/ramoops.html)用于机制核验。`,

  '19': `## 课程沉淀：共享缓冲、DMA/IOMMU 与资源生命周期合同

关联课程：Day 49。共享资源必须区分 authority/policy owner、allocator/exporter、importer/device attachment、producer、consumer 和最终回收者。拿到 handle、完成 allocation、建立 IOMMU mapping、提交硬件任务、fence signaled、consumer release 与用户业务完成是不同里程碑，不能互相替代。

CPU 虚拟地址、RAM 物理地址与设备使用的 DMA/IOVA 地址属于不同地址空间。IOMMU 提供地址翻译和访问隔离，但不会自动完成 buffer ownership handoff、cache 同步、fence 等待、引用回收或 reset 后旧映射失效。资源合同至少记录 resource/buffer ID、exporter/importer/device、format/usage/security、power/boot/VM/device/mapping generation、attachment/map/unmap、fence context/seq/status、pool/queue 水位、deadline、backpressure、降级与业务验收。

共享缓冲按 allocate/export → attach/map → producer write → producer fence → consumer read → release fence → unmap/reclaim 推进。reset、VM recreate 或 device reset 后，先停止或隔离 DMA、固定在途证据、建立新 generation、重建 attachment/mapping，再恢复数据流；旧 handle、旧 fence、旧 release 和旧 timeout 不得更新新代账本。无法证明设备已停止访问时，资源进入 quarantine 而不是立即回收复用。

~~~mermaid
stateDiagram-v2
  [*] --> Allocated
  Allocated --> Mapped: export / attach / map
  Mapped --> ProducerWriting
  ProducerWriting --> Ready: producer fence
  Ready --> ConsumerReading
  ConsumerReading --> Released: release fence
  Released --> ProducerWriting: current generation reuse
  Released --> Reclaimed: unmap + no live reference
  ProducerWriting --> Quarantined: reset / ownership unknown
  ConsumerReading --> Quarantined: reset / ownership unknown
~~~

### GPU、DDR 带宽预算、拥塞与帧截止期合同

关联课程：Day 50。单流有效载荷可写为 \`width × height × bytes_per_pixel × fps\`，但 DDR 需求必须按实际的每次读写 pass 累加，并明确 format/stride/padding、压缩、cache、复制、缩放、合成、编码参考帧、扫描输出和并发 client。理论峰值、可持续有效带宽、\`avg_bw\`/\`peak_bw\` 请求、实测 transaction 与业务吞吐是不同口径；请求被接受不等于资源已经按 deadline 交付。

性能闭环以当前 generation 的帧截止期为主线：trigger/produce → producer fence → queue/acquire → GPU/HWC complete → present/scanout → fresh-and-correct business acceptance。GPU utilization、频率、DDR 总 counter、PSI 或平均 FPS 都不能单独证明根因；至少要用统一 frame/request ID 和单调时间，将 FrameTimeline、GPU stages/counters、BufferQueue/fence、ICC/DDR per-client、devfreq/thermal、PSI/sched/I/O 与用户结果放在同窗比较。

~~~mermaid
flowchart LR
  T[Trigger / expected frame] --> P[Producer]
  P --> Q[BufferQueue / fence]
  Q --> G[GPU / HWC]
  G --> S[Present / scanout]
  S --> B[Fresh business frame]
  C[Camera / codec / CPU clients] --> M[DDR / interconnect arbitration]
  M --> P
  M --> G
  R[devfreq / thermal / QoS] -. available service .-> M
  O[FrameTimeline / counters / PSI] -. evidence .-> Q
  O -. evidence .-> M
~~~

发生 jank/冻帧时先确认最早超预算的阶段，再保留 DDR/互连拥塞、GPU 工作量或降频、consumer 背压、CPU/cgroup 调度、额外 copy/cache、日志/I/O 风暴等竞争假设。区分实验尽量只改变一个变量；关闭某功能后恢复只证明并发条件相关，不能自动确定最终责任。所有车型阈值、counter 名、频率和 QoS 配置均待当前版本证据确认。

[AOSP BufferQueue 与 Gralloc](https://source.android.com/docs/core/graphics/arch-bq-gralloc)、[AOSP Synchronization framework](https://source.android.com/docs/core/graphics/sync)、[Linux DMA mapping guide](https://docs.kernel.org/core-api/dma-api-howto.html)、[Linux dma-buf](https://docs.kernel.org/driver-api/dma-buf.html)、[Linux Interconnect framework](https://docs.kernel.org/driver-api/interconnect.html)、[Linux PSI](https://docs.kernel.org/accounting/psi.html)、[Perfetto FrameTimeline](https://perfetto.dev/docs/data-sources/frametimeline)和[Perfetto GPU tracing](https://perfetto.dev/docs/data-sources/gpu)用于核对通用机制；当前车型的 allocator、IOMMU/SMMU、cache 属性、stream/VM/device ID、格式、counter、QoS、频率、阈值和恢复顺序仍需项目证据。`,

  '20': `## 课程沉淀：Day 35—52 的统一关联键与旧消息规则

跨音频、STR、显示、VM、Ethernet/SOME-IP 和诊断链，统一关联键至少包含 vehicle/config/build、powerCycle、Host bootId、VM generation、process incarnation、session/request/transaction/frame/incident ID、对象/音区/显示/服务实例和域内 monotonic 时间。跨域时间必须记录映射方法和误差；两事件间隔小于误差时，不只凭时间排序断言因果。

每个接口分别定义 received/ACK、local applied/completed、downstream observable 和 business accepted。超时、取消、复位后按 generation 拒绝旧消息；重试保留原始 deadline，并说明幂等键、在途事务终态和状态重取策略。

## 需求分解、场景边界与系统级验收合同

Day 51 将模糊功能诉求分成“Need/ConOps → system shall requirement → architecture allocation → subsystem/interface contract → verification evidence → intended-use validation”。每条需求应有唯一标识、来源、rationale、Owner、版本、量化判据和双向 traceability；未知项目值写成 TBD，并记录关闭责任与条件，不能将猜测固化成平台事实。

场景合同同时定义 actor、前置与禁止条件、触发/取消/并发、power/boot/VM/device generation、控制/数据/状态/电源路径、deadline/freshness/质量边界、降级与恢复出口。request received、ACK、local applied、device/data complete、state readback 与 business accepted 分层验收；局部成功不能替代当前代、正确、新鲜、及时且可恢复的系统结果。

~~~mermaid
flowchart LR
  N[Need and ConOps] --> R[System requirement]
  R --> A[Architecture allocation]
  A --> I[Interface and subsystem contracts]
  I --> V[Verification evidence]
  V --> B[Business validation]
  B -. gap or change .-> N
  G[Generation / freshness / deadline / recovery] -. constrains .-> I
~~~

## 接口合同、完成语义与旧代隔离

Day 52 的 Interface Control Table 至少覆盖身份/版本、数据语义、关联键、前置、时间/TTL、分层完成、错误分类、一致性/readback、生命周期、恢复和证据治理。每条接口明确 transport ACK、command accepted、logical completed 与 business accepted；上游成功不能外推下游、物理端点或用户结果已经成立。

超时首先代表最终状态未知。固定动作是冻结 transaction 证据、查询权威状态、按相同幂等键选择继续/补偿/有限重试，超过恢复预算后降级并升级。换新 transactionId 盲重发可能有副作用的命令，会破坏因果和对账。
`,

  '23': `## 课程沉淀：Day 35—52 的通用验证闭环

可复用验证矩阵覆盖：正常链、边界时序、瞬态/持续故障、丢包/乱序/重复、局部服务重启、Guest/设备/Host 分层复位、旧消息重放、资源压力、证据容量/轮转、恢复失败升级和相邻业务回归。每项记录目标、前置、注入、步骤、观测点、预期、实测、原始证据链接和通过判据。

关闭标准同时回答：用户业务是否恢复；当前状态是否与权威源一致；旧代是否被隔离；DTC/log/dump 是否可追溯；恢复预算是否满足；共享资源和相邻业务是否回归。没有实机记录时只标“待执行”，不能把课程矩阵写成已验证结论。

## 需求—场景—验收—证据追踪矩阵

追踪矩阵至少包含 Need/ConOps、System Req、Architecture allocation、Interface/Sub-system Req、verification criteria、validation scenario 和原始 evidence。每一列保存 ID、版本、Owner、状态与变更影响，并建立双向 traceability；每一行既能从需求追到测试，也能从失败证据反查需求、场景与责任边界。

Verification 回答是否满足技术规格，validation 回答在预期使用环境中是否满足真实需要。验证矩阵应覆盖正常、边界、异常、恢复、旧消息、分层复位、资源并发、证据缺失和相邻业务回归；没有实机证据时状态只能是待执行。

## 模块—接口—恢复验证矩阵

验证矩阵将 module/interface/Owner、前置、注入、ACK/completed/business accepted、权威 readback、generation、恢复预算、降级、原始证据和通过判据放在同一行。正常路径之外至少覆盖：调用超时但动作可能已执行、peer reset、旧 callback/handle/fence、依赖恢复乱序、幂等重试、资源安全回收和相邻业务回归。

架构关闭同时要求责任唯一、接口语义无歧义、旧代零污染、恢复有界、用户结果和权威状态一致。测试未执行、附件不可读或车型参数未确认时只能标待验证，不得写成平台事实。`
};
