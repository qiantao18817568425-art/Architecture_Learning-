// Reusable architecture knowledge distilled from assigned Day lessons.
// Course exercises and unverified project constants stay in the course archive.
export const courseKnowledge = {
  '02': `## 课程沉淀：VM Reset 的故障域、重建顺序与升级边界

关联课程：Day 41、Day 42。VM Reset 的第一步是区分 App / process、Android Guest、虚拟设备后端、VMM/Hypervisor、Host 与 SoC/MCU 故障域。看门狗只证明监督对象在规定窗口内没有满足喂狗合同；它不能独立证明根因，也不能自动决定恢复半径。

恢复按“冻结旧代 → 处置在途事务 → 重建虚拟设备 → 重建 Guest 服务 → 重取当前权威状态 → 端到端验收”推进。每次恢复携带 bootId、VM generation、device generation 和 transactionId；旧队列通知、旧 fence、旧 callback 与旧业务状态不得更新新代。只有局部恢复超时、失败或共享资源证据指向更大故障域时，才升级到设备 reset、整 VM 重建、Host/SoC reset。具体 VMID、设备直通/共享方式、看门狗阈值和恢复时限均待当前项目确认。

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

关联课程：Day 45。外部 tester 经 DoIP/CAN、路由和 DCM/诊断管理读取故障时，要分开验证链路可达、会话、安全访问、目标 ECU 路由、DTC memory entry、Snapshot/Extended Data 和响应结果。能读取其他 DTC 只降低公共链故障优先级，不能证明目标事件已生成。

清除 DTC 是受会话、权限和条件约束的诊断操作，不代表业务已经修复。关闭问题前应同时验证触发条件消失、业务恢复、事件状态按 operation cycle 收敛、持久记录和审计符合要求，并能在再次注入时生成新的 incident。`,

  '11': `## 课程沉淀：显示首帧不能由服务 Ready 或图层 submit 代替

关联课程：Day 38、Day 40。显示恢复需要把屏幕对象、displayId/connector/CRTC/plane、layer、buffer、frameId 和 boot/generation 绑定在同一次恢复中。服务 Ready、窗口存在、buffer dequeue、queueBuffer、HWC validate/present、DRM atomic commit、vblank/scanout、链路锁定、背光点亮与用户可见是逐层里程碑，前一层 ACK 不能代替后一层完成。

首帧证据梯级至少覆盖 producer 提交新鲜 buffer、acquire fence 可用、consumer/HWC 处理、present/retire 进展、DRM/scanout 与面板/背光实态。恢复时丢弃旧 generation 的 frame/fence/callback，并用新鲜帧而非旧画面亮屏作为验收。具体 SerDes、屏 ID、GPIO/IRQ、fence 语义和时限待项目版本确认。

[AOSP BufferQueue 与 Gralloc](https://source.android.com/docs/core/graphics/arch-bq-gralloc)、[AOSP 同步框架](https://source.android.com/docs/core/graphics/sync)和[Linux DRM UAPI](https://docs.kernel.org/gpu/drm-uapi.html)给出通用边界。`,

  '12': `## 课程沉淀：音频焦点、路由、DSP 与功放的分层完成语义

关联课程：Day 35、Day 36、Day 37。完整音频链要同时画控制流、PCM 数据流、状态流和时间流：source/usage/session → focus/policy → mixer/route → Audio HAL/ALSA → DSP/Codec/数字链路 → Amp → speaker/目标音区。Focus gain、Track running、HAL write、DSP playback、Amp ready 或 mute off 都不能单点证明目标区已经可听。

多音区权威映射为 user/occupant → audioZone → volumeGroup → bus/device → DSP port → Amp channel → speaker。duck/mute/restore 使用当前 holder 与当前目标增益，旧 unduck 或旧 route completion 不能覆盖新一轮会话。电话、导航、提示音和 ANC 共享部分资源，但 AEC、ANC、播放和采集有不同数据路径与完成条件；恢复时必须按 session、zone、route、bootId/epoch 重建并验收。

[AOSP Automotive Audio](https://source.android.com/docs/automotive/audio)、[Audio Control HAL](https://source.android.com/docs/automotive/audio/audio-control-hal)和[Linux ASoC](https://docs.kernel.org/sound/soc/overview.html)用于核对通用职责。车型的 DSP、Codec、功放、A2B/数字接口和阈值仍待确认。`,

  '13': `## 课程沉淀：Ethernet / SOME-IP 的链路、服务、会话与数据新鲜度

关联课程：Day 43、Day 44。“网络在线”至少拆成四层：物理/链路（SerDes/PCS/PHY/MAC/carrier）、网络（VLAN/IP/ARP/ND/routing/firewall）、服务（process/socket/Offer/Find/Subscribe/TTL）、业务数据（sequence/source timestamp/quality/consumer apply）。物理 link up、SD 可发现、RPC 会话存活和目标 topic 新鲜是四个不同结论。

故障定位以最后正常输入和首个缺失输出为边界；consumer timeout 通常只是检测点。恢复按最小影响半径逐级推进，并在每一级验证 session 重建、订阅有效、sequence 继续、数据足够新且业务状态正确。ACK、SOME/IP E_OK、订阅成功与业务完成分别记录，不互相替代。

[AUTOSAR SOME/IP](https://www.autosar.org/fileadmin/standards/R21-11/FO/AUTOSAR_PRS_SOMEIPProtocol.pdf)、[SOME/IP-SD](https://www.autosar.org/fileadmin/standards/R21-11/FO/AUTOSAR_PRS_SOMEIPServiceDiscoveryProtocol.pdf)和[Linux Operational States](https://docs.kernel.org/networking/operstates.html)用于机制核验。`,

  '14': `## 课程沉淀：STR / Resume 的屏障、代际与恢复预算

关联课程：Day 38、Day 39、Day 40。STR、s2idle、熄屏、runtime PM、冷启动和 VM recreate 必须依据 power state、内核 PM 阶段、bootId/generation、设备上下文和耗时判定。恢复顺序由真实依赖决定：电源/时钟、Host/backend、Guest/driver、系统服务、业务状态、数据路径和物理输出分别设里程碑。

依赖图描述谁依赖谁，等待图描述运行时谁正在等谁；两者应同时审查以识别环路。全局 deadline 从用户触发开始，不因局部重试重新计时。目标改变、取消或 generation 更新时，旧工作必须结束；迟到 ACK、旧状态和旧帧不得推进当前状态机。最终验收使用当前目标下的新鲜业务输出，而非单个模块 Ready。

[AOSP 车辆电源管理](https://source.android.com/docs/automotive/power/power)、[Linux 系统睡眠状态](https://docs.kernel.org/admin-guide/pm/sleep-states.html)和[Linux 设备电源管理](https://docs.kernel.org/driver-api/pm/devices.html)提供通用机制，项目状态名、屏障和预算待确认。`,

  '15': `## 课程沉淀：健康状态、故障码与跨复位证据合同

关联课程：Day 35—45。诊断链应明确为：Health signal → event → qualification → DTC → snapshot → storage → tester。Monitor 报告接口返回、事件 qualified、DTC memory entry 创建、NVRAM 持久化、tester 成功读取和业务恢复属于不同完成点。

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

《健康事件—DTC 证据合同》用于评审“谁监控、何时成立、保存什么、怎样读取、跨复位如何关联、清除和恢复怎样验收”。[AUTOSAR Dem](https://www.autosar.org/fileadmin/standards/R22-11/CP/AUTOSAR_SWS_DiagnosticEventManager.pdf)、[DCM](https://www.autosar.org/fileadmin/standards/R22-11/CP/AUTOSAR_SWS_DiagnosticCommunicationManager.pdf)、[Platform Health Management](https://www.autosar.org/fileadmin/standards/R22-11/AP/AUTOSAR_SWS_PlatformHealthManagement.pdf)与[Linux ramoops](https://docs.kernel.org/admin-guide/ramoops.html)用于机制核验。`,

  '20': `## 课程沉淀：Day 35—45 的统一关联键与旧消息规则

跨音频、STR、显示、VM、Ethernet/SOME-IP 和诊断链，统一关联键至少包含 vehicle/config/build、powerCycle、Host bootId、VM generation、process incarnation、session/request/transaction/frame/incident ID、对象/音区/显示/服务实例和域内 monotonic 时间。跨域时间必须记录映射方法和误差；两事件间隔小于误差时，不只凭时间排序断言因果。

每个接口分别定义 received/ACK、local applied/completed、downstream observable 和 business accepted。超时、取消、复位后按 generation 拒绝旧消息；重试保留原始 deadline，并说明幂等键、在途事务终态和状态重取策略。`,

  '23': `## 课程沉淀：Day 35—45 的通用验证闭环

可复用验证矩阵覆盖：正常链、边界时序、瞬态/持续故障、丢包/乱序/重复、局部服务重启、Guest/设备/Host 分层复位、旧消息重放、资源压力、证据容量/轮转、恢复失败升级和相邻业务回归。每项记录目标、前置、注入、步骤、观测点、预期、实测、原始证据链接和通过判据。

关闭标准同时回答：用户业务是否恢复；当前状态是否与权威源一致；旧代是否被隔离；DTC/log/dump 是否可追溯；恢复预算是否满足；共享资源和相邻业务是否回归。没有实机记录时只标“待执行”，不能把课程矩阵写成已验证结论。`
};
