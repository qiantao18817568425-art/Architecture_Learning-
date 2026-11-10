// Reusable architecture knowledge distilled from assigned Day lessons.
// Course exercises and unverified project constants stay in the course archive.
export const courseKnowledge = {
  '02': `## 课程沉淀：VM Reset 的故障域、重建顺序与升级边界

关联课程：Day 41、Day 42。VM Reset 的第一步是区分 App / process、Android Guest、虚拟设备后端、VMM/Hypervisor、Host 与 SoC/MCU 故障域。看门狗只证明监督对象在规定窗口内没有满足喂狗合同；它不能独立证明根因，也不能自动决定恢复半径。

恢复按“冻结旧代 → 处置在途事务 → 重建虚拟设备 → 重建 Guest 服务 → 重取当前权威状态 → 端到端验收”推进。每次恢复携带 bootId、VM generation、device generation 和 transactionId；旧队列通知、旧 fence、旧 callback 与旧业务状态不得更新新代。只有局部恢复超时、失败或共享资源证据指向更大故障域时，才升级到设备 reset、整 VM 重建、Host/SoC reset。具体 VMID、设备直通/共享方式、看门狗阈值和恢复时限均待当前项目确认。

## 模块分层、权威状态与恢复责任

Day 52 把模块责任拆成策略/权威、执行、数据所有权、状态权威和恢复协调五类。每个模块责任卡记录部署域、唯一 Owner、输入/输出、前置/后置、资源、权威状态、失败模式、恢复动作、观测点和升级边界。HMI 展示状态、服务进程 Running 或命令 ACK 均不能替代资源/业务 Owner 的当前状态读回。

跨 VM 或服务复位时，由恢复协调者建立新 generation 和依赖屏障；各 Owner 在新代重建资源、交换权威快照后才放行业务。旧代 callback、timeout、fence、handle、completion 和 cancel 只归档，不得推进新代状态；sequenceId 需与 producer identity、bootId/generation 组合使用。

[AOSP AVF architecture](https://source.android.com/docs/core/virtualization/architecture)与[OASIS Virtio 1.3](https://docs.oasis-open.org/virtio/virtio/v1.3/virtio-v1.3.html)用于核对通用职责和设备 reset 后重新初始化的边界；它们不是本车型实现证明。

## 域控制器系统边界与六视图方案包

关联课程：Day 58。入门架构方案应先定义系统对象、外部参与者、使用场景和现车版本，再交付可相互追踪的场景/需求、逻辑/职责、部署/接口、六流/时序、预算/权衡、验证/演进六种视图。图中的 MCU、Yocto Host、Hypervisor、Android Guest、TBox 和外设各标运行域、输入/输出、状态权威、资源所有者、恢复协调者及观测点；不参与主业务的域也应说明环境关系或待确认，不把候选部署写成车型事实。

六流为控制、数据、状态、电源、资源与证据。一次业务可能跨越多个故障域，但每个接口的负责方、当前代身份和完成阶段必须明确。系统边界改变时，要回查需求分配、接口版本、预算和验收证据。具体车型连接、SoC、虚拟化/设备共享方式与阈值由现车资料确认。

~~~mermaid
flowchart LR
  N[Need/Scenario] --> L[Logic and authority]
  L --> D[Deployment and interface]
  D --> F[Control/Data/State/Power/Resource/Evidence]
  F --> B[Timing and resource budgets]
  B --> V[Verification and evolution]
  V -. failed evidence or changed baseline .-> N
~~~

[NASA Logical Decomposition](https://www.nasa.gov/reference/4-3-logical-decomposition/)与[Interface Management](https://www.nasa.gov/reference/6-3-interface-management/)支持通用分配和接口管理方法；本车型部署必须独立核验。`,

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

  '20': `## 课程沉淀：Day 35—58 的统一关联键与旧消息规则

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

## A/B 方案权衡、风险与决策记录

关联课程：Day 53。架构权衡先确认决策上下文、范围、需求、硬约束、备选和决策权主体。安全/法规、必须功能、资源上限、接口兼容、恢复终态与证据留存属于硬门槛；未通过的方案不能用其他高分抵消。通过门槛后，才按预先定义的客观量表比较性能、成本、进度、复杂度、可维护性、故障隔离、可观测性与扩展性。

加权评分必须分开记录 criterion weight、option score 与 evidence confidence。权重由有权主体批准，评分保存数据来源、版本、环境、样本、模型、误差和 artifact；证据薄弱时用区间或 TBD，不制造精确单点。结论至少经过权重、评分区间和关键假设的敏感性分析；若合理变化会使推荐翻转，应先收集高价值区分证据或由决策权主体明确接受不确定性。

风险写成“导致性能下降的场景—可能性—后果”三元组，并记录触发信号、缓解、contingency、残余风险和接受人。推荐、最终决定和配置基线是三个不同里程碑：技术团队提出建议，决策权主体记录决定与理由，接口/需求/测试进入变更控制后才算基线生效。决策记录还应保存未选方案、后果、rollout/rollback、验证、过期条件和 reopen trigger。

[NASA Decision Analysis](https://www.nasa.gov/reference/6-8-decision-analysis/)、[Design Solution Definition](https://www.nasa.gov/reference/4-4-design-solution-definition/)和[Technical Risk Management](https://www.nasa.gov/reference/6-4-technical-risk-management/)用于核对通用方法；当前项目的硬门槛、权重、风险概率、成本和批准权仍待项目确认。

## 可观测性与证据合同

关联课程：Day 54。可观测性不是“多打日志”，而是让一次业务能跨 Android Guest、Yocto Host、Hypervisor、MCU/TBox 与外设边界被关联、解释和复核。每个事件至少携带 signal/schema version、domain/process、boot/VM/process generation、incident/session/transaction/frame ID、域内单调时间、时间映射误差、状态前后值、结果阶段、错误分类和原始 artifact 指针。trace、metric 与 log 互补：trace 解释一次请求经过哪里，metric 解释总体是否退化，log 保存离散状态与诊断上下文。

收到请求、transport ACK、local applied、downstream observable、权威 readback 与 business accepted 必须分层；超时只说明观测窗口内未取得所需完成证据。复位、重连或 schema 变化后，应以 generation 和版本拒绝旧事件，保留原始 deadline，并在证据缺失时标记 unknown，而不是用“恢复成功”倒推根因。

## 评审基线、发现项与证据准入

关联课程：Day 55。架构评审的输入基线至少冻结 requirement、场景、架构版本、接口/状态/恢复合同、风险、验证矩阵和待确认项。场景走查沿控制、数据、状态、电源和证据路径逐接口询问输入、状态、输出、完成语义、超时与复位；评审 finding 必须有 ID、事实/假设边界、影响、Owner、目标证据、关闭判据和配置版本。会议纪要或口头同意不等于设计关闭。

证据准入要求来源、版本、适用场景、采集方法、时间基准、完整性、可重复性和 artifact URI/hash 可复核。构造案例、未确认车型参数和未执行测试只能作为假设或待办，不能进入平台事实基线。

## 变更影响、风险关闭与发布门禁

关联课程：Day 56。变更影响分析从受控基线出发，追踪 requirement、接口、状态机、依赖、资源、诊断、验证和回滚项。发布门禁区分已修复、已验证、已接受残余风险和临时豁免；每项都要绑定版本、证据、批准角色、有效期与 reopen 条件。混合版本、灰度失败、回滚失败、旧消息和证据丢失必须进入发布前场景，而不是只验证新版本正常路径。

发布、回滚和恢复是三个不同承诺。rollout 成功需当前代业务结果与权威状态一致；rollback 成功还需兼容旧数据/配置、资源安全释放、相邻业务回归和诊断可追溯。当前项目的门禁阈值、批准权限、灰度比例和恢复预算仍待项目确认。

## 跨域架构评审决议与业务完成阶梯

关联课程：Day 57。评审决议把 Need、系统需求、场景、接口/架构版本、finding、变更、测试、原始证据和批准后的受控基线连接成可正反向追踪的链。技术建议、批准决定和配置基线生效属于三个不同里程碑；附条件通过须逐项记录 Owner、可读工件、复验判据、批准角色和重新打开条件，不能把行动项创建或会议同意当成关闭。

跨域状态业务从权威源采样、网关接收、传输 ACK、消费者应用，直到执行端读回与用户结果，逐段定义完成证据。跨 VM/服务复位时把 source sequence 与 boot/VM/process generation、对象、schema、域内时间及映射误差一起校验；旧代事件不得更新新代状态。超时只说明终态未证，先冻结证据、查权威状态，再执行有界重试/补偿/降级。属性不可用或证据缺片时报告 unknown，不继续展示未经确认的旧值。

~~~mermaid
flowchart LR
  N[Need/Scenario] --> R[System Req]
  R --> I[Architecture/Interface Baseline]
  I --> F[Review Finding]
  F --> C[Change and Verification]
  C --> E[Raw Evidence/Readback]
  E --> D[Authorized Disposition]
  D --> B[Controlled Baseline]
  B -. new evidence or version .-> F
~~~

[NASA Technical Assessment](https://www.nasa.gov/reference/6-7-technical-assessment/)、[NASA Decision Analysis](https://www.nasa.gov/reference/6-8-decision-analysis/)、[NASA Product Verification](https://www.nasa.gov/reference/5-3-product-verification/)和[AOSP VHAL](https://source.android.com/docs/automotive/vhal)用于核对通用机制；本车型信号来源、网关部署、协议、提示策略、时限和结果均须由当前版本证据确认。

## 域控制器六流接口与分段预算合同

关联课程：Day 58。系统级结果从有效触发到当前代的用户可见/可听业务结果，沿控制、数据、状态、电源、资源、证据六流逐接口检查。每条线注明 schema/version、authority、对象与 session、boot/VM/device generation、源时间和误差、TTL/deadline、request ACK、局部完成、消费者读回、未知终态、取消、复位重取和安全降级。局部 ready、buffer 入队、fence 或 present 只证明各自阶段，不能替代最终场景验收。

端到端 deadline 分配到采集/计算/传输/消费/输出和恢复预算，同时核算 buffer、共享内存、峰值与持续带宽、IOMMU 映射、并发负载和安全裕量。预算必须有测量方法、当前配置与原始证据；未知阈值用 TBD 标记负责关闭的角色。超时冻结原事务并查权威状态，旧代资源与 callback 隔离后才按幂等合同继续、补偿或有界重试。

~~~mermaid
flowchart LR
  S[Valid trigger] --> C[Control/authority]
  C --> R[Resource owner and data producer]
  R --> V[VM/IPC current generation]
  V --> U[Consumer and output]
  U --> O[Business readback]
  P[Power/ready barrier] -. gates .-> C
  P -. gates .-> V
  E[IDs/time uncertainty/artifact] -. evidence .-> C
  E -. evidence .-> V
  E -. evidence .-> O
~~~

[NASA Stakeholder Expectations](https://www.nasa.gov/reference/4-1-stakeholder-expectations-definition/)与[Design Solution Definition](https://www.nasa.gov/reference/4-4-design-solution-definition/)用于核对场景和方案方法；实际预算及部署待项目确认。

[OpenTelemetry signals](https://opentelemetry.io/docs/concepts/signals/)、[OpenTelemetry semantic conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/)、[NASA Product Verification](https://www.nasa.gov/reference/5-3-product-verification/)、[NASA Technical Assessment](https://www.nasa.gov/reference/6-7-technical-assessment/)、[NASA Configuration Management](https://www.nasa.gov/reference/6-5-configuration-management/)和[NASA Technical Risk Management](https://www.nasa.gov/reference/6-4-technical-risk-management/)用于核对通用机制；OEM 流程与现车数值须以当前项目证据为准。
`,

  '23': `## 课程沉淀：Day 35—58 的通用验证闭环

可复用验证矩阵覆盖：正常链、边界时序、瞬态/持续故障、丢包/乱序/重复、局部服务重启、Guest/设备/Host 分层复位、旧消息重放、资源压力、证据容量/轮转、恢复失败升级和相邻业务回归。每项记录目标、前置、注入、步骤、观测点、预期、实测、原始证据链接和通过判据。

关闭标准同时回答：用户业务是否恢复；当前状态是否与权威源一致；旧代是否被隔离；DTC/log/dump 是否可追溯；恢复预算是否满足；共享资源和相邻业务是否回归。没有实机记录时只标“待执行”，不能把课程矩阵写成已验证结论。

## 需求—场景—验收—证据追踪矩阵

追踪矩阵至少包含 Need/ConOps、System Req、Architecture allocation、Interface/Sub-system Req、verification criteria、validation scenario 和原始 evidence。每一列保存 ID、版本、Owner、状态与变更影响，并建立双向 traceability；每一行既能从需求追到测试，也能从失败证据反查需求、场景与责任边界。

Verification 回答是否满足技术规格，validation 回答在预期使用环境中是否满足真实需要。验证矩阵应覆盖正常、边界、异常、恢复、旧消息、分层复位、资源并发、证据缺失和相邻业务回归；没有实机证据时状态只能是待执行。

## 模块—接口—恢复验证矩阵

验证矩阵将 module/interface/Owner、前置、注入、ACK/completed/business accepted、权威 readback、generation、恢复预算、降级、原始证据和通过判据放在同一行。正常路径之外至少覆盖：调用超时但动作可能已执行、peer reset、旧 callback/handle/fence、依赖恢复乱序、幂等重试、资源安全回收和相邻业务回归。

架构关闭同时要求责任唯一、接口语义无歧义、旧代零污染、恢复有界、用户结果和权威状态一致。测试未执行、附件不可读或车型参数未确认时只能标待验证，不得写成平台事实。

## 方案权衡验证与决策闭环

关联课程：Day 53。对比试验必须让 A/B 在同一硬件、软件、负载、注入、采集与判据下运行，并把 requirement/criterion ID、option/version、testId、artifact URI/hash、环境与结论连接起来。正常、边界、故障、恢复、旧代消息、资源未知终态、证据丢失、版本演进、相邻业务和长稳场景均需覆盖。

方案得分不能替代系统验证。先证明硬门槛，再用原始证据支撑增强准则；未执行项保持待执行。若敏感性分析显示推荐会因关键缺失证据翻转，验证计划应优先收集能区分方案的证据。决策生效后仍需监控触发阈值、残余风险和假设，出现验证失败、接口/车型变化、风险越限或新证据时重新打开决策。

## 可观测性—验证证据闭环

关联课程：Day 54。验证设计先为 requirement/scenario 定义 verification method、注入、观测点、时间与 generation 关联、预期阶段、原始证据和通过判据，再决定采集哪些 traces、metrics、logs 与状态快照。证据合同应能回答最早可证实断点、此前触发、加剧因素和后续清理；“没有看到”只有在采集范围、容量、轮转与时钟可靠时才可转化为否定证据。

## 评审与发布证据门禁

关联课程：Day 55—56。评审矩阵把场景、架构节点/接口、关键问题、所需证据、首轮牵头、直接修复方、接口/恢复策略方和验证方放在同一行。finding 只有在对应版本的可读证据满足关闭判据、回归范围完成且残余风险被有权主体接受后才能关闭。

发布验证至少覆盖正常、边界、异常恢复、混合版本、旧代隔离、rollback、共享资源和相邻业务；发布失败与回滚失败分别定义安全终态和升级条件。豁免不是通过：必须有原因、影响、补偿措施、Owner、到期日、监控阈值和重新打开条件。

## 跨域评审发现项的验证与处置

关联课程：Day 57。每个 finding 从现象与影响出发，关联需求、架构节点、配置版本、最早可证实断点、竞争假设、直接修复方、接口/恢复策略方和验证方。测试计划覆盖正常、Guest/Host/源局部复位、重复乱序、旧代回调、超时未知终态、属性不可用、证据丢失与相邻业务。每项必须列注入方法、同一事务关联键、源与消费者读回、原始工件、通过判据和执行状态；未执行只记待执行。

关闭顺序为：冻结基线 → 修复或受控处理 → 复验目标接口 → 端到端业务读回 → 回归/风险复核 → 有权处置 → 配置记账。若新证据否定假设、构建/协议变化、风险越限或证据质量退化，应重新打开对应 finding，而非沿用旧结论。

## 系统方案 V1 的需求—预算—验证闭环

关联课程：Day 58。架构方案包把 Need/场景、system shall、逻辑与部署责任、六流接口、分段时序/资源预算、异常恢复、A/B 决策、验证与风险串成一条可正反向追踪的基线。每个预算和接口要有负责方、测量环境、版本、原始证据与通过判据；未知车型参数、未执行测试、证据缺片保持 TBD/待执行/unknown。不能用设计图的完整、服务 ready 或一次恢复成功代替符合性证明。

验证至少包含正常与取消、STR/局部复位、旧代/乱序、超时未知终态、资源并发与相邻业务、混合版本、回滚和恢复失败。先检查安全、必须功能、资源、兼容与可观测硬门槛，再对候选架构做同环境对比；决定由有权主体记录并纳入受控配置。若系统边界、需求或版本变化，反向追踪受影响接口、预算、测试与风险后重新评审。

[NASA Product Verification](https://www.nasa.gov/reference/5-3-product-verification/)和[Interface Management](https://www.nasa.gov/reference/6-3-interface-management/)用于核对客观证据与接口基线要求；现车测试结果仍待执行。`
};
