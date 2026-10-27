# Day 50 — 系统资源 II：GPU、DDR 带宽预算、拥塞与性能验证

正式安排日期：2026-10-27，星期二，Asia/Shanghai。Week 16。能力阶段仍为第二阶段“系统链路与问题分析”；本课承接 Day 49 的共享资源生命周期，训练把 GPU、DDR、互连、队列和帧截止期放进同一份可验证预算。目标深度：L3，能建立带宽模型、区分平均值与峰值、定位最早可证实的性能断点，并设计不预设根因的区分实验。总用时约 60 分钟。

执行前已扫描仓库全部状态的答卷 Issue、评论与附件，没有发现授权学习者的新答卷或补交。本课发布不代表已经掌握；Day 34—50 均等待真实作答评审。

## 1. 官方依据与项目边界

官方资料核验日期：2026-10-27。

- [Perfetto：FrameTimeline](https://perfetto.dev/docs/data-sources/frametimeline)：Android 12 及以上可记录 expected/actual frame timeline，并区分应用、SurfaceFlinger、GPU composition、Buffer Stuffing 等 jank 类型。
- [Perfetto：GPU tracing](https://perfetto.dev/docs/data-sources/gpu)：可采集平台支持的 GPU counters、render stages、GPU memory、GPU log，并结合 ftrace 查看 GPU 频率；具体 counter 名称和可用性由厂商实现决定。
- [Linux：Interconnect framework](https://docs.kernel.org/driver-api/interconnect.html)：设备驱动可用 interconnect path 表达并聚合平均带宽与峰值带宽需求；请求被接受不等于业务已按 deadline 完成。
- [Linux：PSI（Pressure Stall Information）](https://docs.kernel.org/accounting/psi.html)：CPU、memory、I/O 的 `some`/`full` stall 可描述任务被资源阻塞的时间比例；PSI 是压力结果信号，不直接给出唯一根因。
- [AOSP：BufferQueue and Gralloc](https://source.android.com/docs/core/graphics/arch-bq-gralloc) 与 [Synchronization framework](https://source.android.com/docs/core/graphics/sync)：用于核对生产者/消费者队列和 fence 完成边界。

当前缺少现车车型、SoC/build、GPU 型号与 counter、DDR 代际/通道/频率、互连拓扑、压缩与 cache 命中率、像素格式/stride、每个处理 pass、QoS/ICC/devfreq/thermal 策略、并发业务组合和实机 trace。下文公式、状态、故障样本和数值都是教学方法或构造证据，不是车型事实；项目阈值与验证授权均待确认。

## 2. 一小时主线

| 时间 | 学习任务 | 输出 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 5 题 | 把资源生命周期与帧完成阶梯连接起来 |
| 10—20 分钟 | 核心概念一 | DDR 需求模型、平均/峰值预算与余量 |
| 20—30 分钟 | 核心概念二 | 帧 deadline、拥塞信号与多假设证据链 |
| 30—50 分钟 | 工程案例 | AVM + 导航动画并发后的周期性冻帧 |
| 50—60 分钟 | 可复用产物 | 《GPU—DDR—帧截止期预算与证据合同 V1》 |

回顾题：

1. Day 49 中 handle、IOMMU mapping、producer fence 和业务完成为什么不能互相替代？
2. 一帧 3840×1536、2 byte/pixel、30 fps 的 payload 为什么不能直接等同整机 DDR 流量？
3. GPU utilization 达到 95% 能证明 GPU 是首个瓶颈吗？还缺哪些时间和队列证据？
4. 平均 FPS 为 30 为什么仍可能出现用户可见冻帧？
5. reset、thermal 降频或 QoS 策略改变后，为什么旧窗口的均值不能代表当前 generation？

## 3. 核心概念一：先拆账，再谈“带宽不足”

单个 stream 的原始有效载荷可写成：

`payload_Bps = width × height × bytes_per_pixel × fps`

但 DDR 预算应按每一次实际读写逐项相加：

`demand_Bps = Σ(sizeimage × fps × read_passes_or_write_passes)`

模型还要显式记录格式/stride/padding、压缩比、cache 命中、tile、复制、缩放、合成、编码参考帧、扫描输出以及同时发生的其他 client。理论峰值、可持续有效带宽、驱动声明的 `avg_bw`/`peak_bw`、硬件计数器测得流量和业务吞吐是五种不同口径。

| 口径 | 回答的问题 | 常见误用 |
| --- | --- | --- |
| 理论峰值 | 器件和通道的理想上限是多少 | 直接当成量产可用预算 |
| 可持续有效带宽 | 当前频率/仲裁/温度/协议开销下可稳定提供多少 | 用单次 benchmark 替代全部并发场景 |
| `avg_bw` 请求 | 一段时间的平均需求 | 忽略 burst 和帧边界 |
| `peak_bw` 请求 | 短时峰值/突发需求 | 把请求 ACK 当成交付保证 |
| 实测 transaction | 控制器/互连实际读写多少 | 不区分是谁、为何发生和是否按时 |
| 业务结果 | 帧、音频、控制是否在 deadline 内正确完成 | 只看平均 FPS 或模块 Ready |

预算不能只写百分比，应保留绝对单位、采样窗口、并发场景、P50/P95/P99/最大值、headroom 和来源。若理论总量低于上限但峰值集中在同一帧窗口，仍可能发生排队；若总流量很高但 QoS、公平性和 deadline 均满足，也不能仅凭高带宽判故障。

~~~mermaid
flowchart LR
  C[Camera / codec / CPU producer] --> M[DDR / interconnect]
  A[Android UI / GPU render] --> M
  H[HWC / display scanout] --> M
  V[Video encode / decode] --> M
  M --> Q[Arbitration / QoS / queue]
  Q --> G[GPU / ISP / MML / Vcodec consumers]
  Q --> D[Display / storage / network consumers]
  P[Power / thermal / devfreq policy] -. controls available service .-> M
  O[Counters / trace / PSI / queue depth] -. observes .-> M
~~~

## 4. 核心概念二：性能故障是“截止期没满足”，不是某个利用率高

用户看到的一帧通常要经过应用或 Camera producer、GPU/硬件处理、BufferQueue/fence、SurfaceFlinger/HWC、DRM/显示扫描。每段都可能工作正常，却因等待前一段、资源争用或消费背压而错过统一 deadline。

### 4.1 ACK 与完成阶梯

| 里程碑 | 能证明什么 | 不能证明什么 |
| --- | --- | --- |
| QoS/ICC 请求 ACK | 请求被接口接受 | 时钟/互连已应用、带宽已交付 |
| GPU submit/queue ACK | 工作进入队列 | GPU 已完成或按帧 deadline 完成 |
| fence signaled | 对应异步工作已完成或报错 | 下游已经消费、屏端可见 |
| SurfaceFlinger/HWC present | 合成/呈现链推进到本地阶段 | 当前帧已经物理显示且新鲜正确 |
| counter/频率升高 | 某资源活动或策略变化 | 它是根因而非后果 |
| PSI `some/full` | 采样窗口存在 CPU/memory/I/O stall | stall 的唯一源头、受影响 client 或业务失败 |
| FrameTimeline jank | expected 与 actual frame timeline 不满足 | 仅凭分类就确定底层根因 |
| business accepted | 当前 generation 的新鲜帧按 deadline 正确可见 | 反推所有上游从未发生异常 |

### 4.2 帧 deadline 状态图

~~~mermaid
stateDiagram-v2
  [*] --> Triggered
  Triggered --> Producing
  Producing --> Ready: producer fence
  Ready --> Queued
  Queued --> Rendering
  Rendering --> Composed: GPU/HWC fence
  Composed --> Presented
  Presented --> Accepted: fresh + correct + within deadline
  Producing --> Missed: deadline expired
  Queued --> Missed: backpressure / wait
  Rendering --> Missed: execution / contention
  Composed --> Missed: present / scanout delay
  Missed --> Degraded: drop / lower quality / preserve safety path
  Missed --> Recovering: current-generation recovery
  Recovering --> Triggered: authoritative restart
~~~

全局 deadline 从用户/传感器触发开始，不因局部 retry 重置。每条 trace 必须带 powerCycle、bootId、VM/process/device generation、frame/request ID 和单调时间。跨域时间误差大于候选事件间隔时，只能保留竞争假设。

## 5. 完整故障分析：AVM + 导航动画并发后的周期性冻帧

以下是教学构造案例，不代表当前车辆，不预设练习结论。

### 5.1 构造证据

| 证据 | 构造观察 | 能证明 / 不能证明 |
| --- | --- | --- |
| E1 | 挂 R 挡后控制 ACK 按时，Camera source sequence 连续 | 控制与采集尚在推进；不证明后续画面按时 |
| E2 | 导航动画开始后，FrameTimeline 显示若干 actual frame 错过 expected timeline | 证明端到端帧截止期失败；不直接给出底层根因 |
| E3 | 同一窗口 BufferQueue backlog 和 acquire/fence wait 增长 | 支持消费者背压或上游完成变慢；不能区分谁先变慢 |
| E4 | GPU utilization 较高但频率同时下降，温度接近策略门限；门限和策略值待确认 | 支持 thermal/devfreq 假设；仍需策略事件和频率驻留时间 |
| E5 | DDR 总 transaction 上升，但没有 per-client、读写 pass 或互连仲裁 counter | 支持共享资源压力存在；不足以确认 DDR 是首因 |
| E6 | PSI memory `some` 上升，`full` 不显著，未见明确 reclaim/major fault 时间线 | 证明部分任务受 memory stall；不证明容量耗尽或 DDR 饱和 |
| E7 | 关闭导航动画后冻帧消失；Camera、AVM、显示未重启 | 证明并发条件相关；不能单独在 GPU 与 DDR 间选根因 |
| E8 | 降低 AVM 输出分辨率后 P99 fence wait 改善，但 GPU 频率策略也随负载改变 | 支持负载敏感；实验同时改变多个变量，不能唯一归因 |

### 5.2 最早可证实断点

E1 说明源 sequence 尚连续；E2 与 E3 说明当前 generation 的帧已在 consumer/渲染/合成路径错过 deadline，且队列/等待开始积压。当前最早可证实断点是：**生产到呈现之间的帧服务时间超过预算并形成背压**。现有证据不能在 GPU 执行变慢、thermal/devfreq、DDR/互连拥塞、额外 copy/format pass、SurfaceFlinger/HWC 消费或 CPU 调度之间选出唯一根因。

### 5.3 竞争假设与区分实验

| 假设 | 支持信号 | 反证/区分实验 |
| --- | --- | --- |
| H1 DDR/互连拥塞 | per-client bytes/latency、仲裁等待与 frame wait 同窗上升 | 固定频率与画质，逐项移除 client；读取 per-client/ICC counter，而非只看总量 |
| H2 GPU 工作量或降频 | GPU stage duration、queue depth、frequency residency、thermal event 先于 jank | 保持 DDR 流量近似，降低 shader/overdraw；或固定 workload 比较频率策略窗口 |
| H3 BufferQueue/consumer 背压 | dequeue/acquire/present wait、BufferStuffing 与 queue depth 先升 | 保持 producer 速率，隔离 consumer/显示；检查最早堵塞的 fence 与 owner |
| H4 CPU/cgroup 调度 | runnable delay、throttle、关键线程唤醒延迟与 jank 对齐 | 改变 CPU quota/优先级或隔离后台任务，并保持 GPU/DDR负载可比 |
| H5 格式/额外 copy/cache | memcpy/MML/format pass、cache miss、transaction 放大 | 核对 stream→format→stride→pass→consumer 表，禁用单一转换后比较计数 |
| H6 日志/存储风暴 | I/O PSI、写入量、log drop/rotate 与 deadline 同窗 | 限速或关闭非关键日志，验证资源和证据留存是否同时恢复 |

每个实验只尽量改变一个变量，并记录副作用；“关闭一个功能后恢复”只能说明该条件参与竞争，不能自动把该功能团队定为根因 Owner。

## 6. 跨层取证与 TPM 分责

| 架构节点 | TPM 应提出的问题 | 所需证据 | 首轮责任域 | 验收 |
| --- | --- | --- | --- | --- |
| App/AVM producer | 哪一帧何时触发、生产、排队？ | frame/request ID、FrameTimeline、BufferQueue | 应用/AVM | 当前帧在预算内生产 |
| GPU/render | submit 到 fence 哪段增加？频率为何变化？ | GPU stages/counters、频率、thermal、queue | 图形/BSP | P99 stage 满足预算且可解释 |
| SF/HWC/Display | 合成、present、scanout 谁先迟到？ | layer、fence、present/vblank、屏端证据 | 图形/显示 | 当前新鲜帧物理可见 |
| DDR/interconnect | 谁请求 avg/peak，谁实际占用，谁等待？ | ICC/QoS、controller/per-client counter、仲裁延迟 | BSP/性能 | 并发下关键 client deadline 满足 |
| Memory/CPU/I/O | 是否 reclaim、throttle、stall 或日志风暴？ | PSI、sched/cgroup、vmstat、I/O/log rate | 系统/内核 | stall 不破坏关键路径 |
| Power/thermal | 频率/温控动作是否先于故障？ | devfreq/thermal residency、策略 generation | 电源/性能 | 策略边界内结果稳定 |
| 集成/架构 | 预算、优先级、降级和证据合同谁批准？ | 场景预算表、共享资源图、版本配置 | 系统架构/集成 | 端到端和相邻业务同时通过 |
| 测试 | 哪些并发、温度、长稳和故障注入已覆盖？ | 原始 trace、用例版本、判据与复现率 | 测试 | 可重复、可追溯、未伪造 |

首轮牵头由系统性能/架构集成 Owner 组织；各节点提供原始事实。最终根因 Owner 等待“最早变化 + 区分实验 + 修复回归”闭环，不按最后一条报错或最高利用率定责。

## 7. 可执行验证矩阵

| 用例 | 步骤/变量 | 必采观测 | 通过判据 | 状态 |
| --- | --- | --- | --- | --- |
| 单业务基线 | AVM、UI、视频分别运行 | frame timeline、queue/fence、GPU/DDR/PSI | P50/P95/P99 与最大值有基线 | 待执行 |
| 典型并发 | AVM + 导航动画 + 视频/编码 | 同一时钟的全链 trace | 关键帧 deadline 满足，非关键业务按策略降级 | 待执行 |
| 峰值突发 | 同一窗口触发多 client burst | `avg_bw`/`peak_bw`、仲裁、queue | 无无界积压，峰值策略可解释 | 待执行 |
| 热态长稳 | 升温后持续并发；温度边界待确认 | thermal/devfreq、GPU stage、DDR、P99 | 热态仍满足或受控降级 | 待执行 |
| consumer 阻塞 | 延迟 HWC/display consumer | BufferQueue、fence owner、drop/backpressure | 背压有界，不污染安全画面 |
| memory 压力 | 受控施加压力；需授权 | PSI、reclaim、OOM、queue | 关键链受保护，证据不丢失 | 待执行 |
| 日志压力 | 提高非关键日志并受控限速 | I/O PSI、write rate、轮转、deadline | 限速有效，关键证据保留 | 待执行 |
| Guest/device reset | 在帧 in-flight 时复位 | generation、旧 fence、资源账本 | 旧代不推进新代，恢复当前帧 | 待执行 |
| QoS 请求失败/迟到 | 故障注入或仿真；需授权 | 请求、apply/readback、deadline | 明确失败/降级，不把 ACK 当交付 | 待执行 |
| 画质阶梯 | 逐级调整分辨率/fps/pass | 每次只改变一组变量 | 建立容量曲线而非一次性结论 | 待执行 |
| 相邻业务回归 | 音频、输入、网络、存储并发 | 各自 deadline/错误/资源 | 关键相邻业务无回归 | 待执行 |

所有实测阈值、工具、counter、故障注入和温度条件待项目确认；未经授权不操作车机或注入硬件故障。

## 8. 今日可复用产物：《GPU—DDR—帧截止期预算与证据合同 V1》

模板至少包含：

1. 当前车型/SoC/build、业务场景、并发矩阵、温度/电源状态和所有未知项；
2. stream/client、分辨率、format/stride、fps、buffer count、每次 read/write pass；
3. payload、DDR 读写、常驻内存、`avg_bw`、`peak_bw`、有效容量、余量与计算来源；
4. GPU/ISP/MML/Vcodec/Display/CPU 等 client 的 Owner、优先级、QoS 与降级；
5. 统一 frame deadline 及各阶段预算，received/ACK/applied/device complete/business accepted 分层；
6. frame/request/buffer、powerCycle/bootId/VM/process/device generation 与时钟误差；
7. FrameTimeline、GPU stages/counters、frequency/thermal、ICC/DDR counter、BufferQueue/fence、PSI/sched/I/O 观测点；
8. timeout、backpressure、drop、retry、reset、旧帧隔离和恢复出口；
9. 竞争假设、最早断点、单变量区分实验与反证；
10. P50/P95/P99/max、原始 trace、版本、Owner、期限、回归与关闭记录。

## 9. 今日独立练习

新题不附参考答案、示范作答或预设根因。

场景：挂 R 挡后 AVM 正常起画；导航动画出现时每隔数秒冻住一帧，随后自行恢复。现有线索仅有“GPU utilization 高、DDR 总 counter 上升、memory PSI some 上升”，没有 per-client 计数。

请独立完成：

1. 画出 Camera/AVM、Android UI、GPU、DDR/interconnect、SF/HWC、Display 的控制、数据和状态流；
2. 用变量而非假定车型常数建立 payload、DDR read/write pass、`avg_bw`、`peak_bw` 和 headroom 模型；
3. 给出帧完成阶梯，说明每个 ACK 不能替代什么；
4. 标出你能证明的最早断点，并保留至少五个竞争假设；
5. 为每个假设提出一项支持证据、一项反证和一个尽量单变量的实验；
6. 设计 thermal、consumer 背压、memory pressure、Guest reset 和日志风暴下的恢复与降级；
7. 完成验证矩阵和《GPU—DDR—帧截止期预算与证据合同 V1》；
8. 写出 TPM 首轮牵头、各域供证、最终修复与测试责任，未知人员和期限保持待确认。

## 10. 提交说明

本课编号 **day-50**。使用页面末尾“上传／提交答卷”或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。请提交回顾题、三流图、预算表、完成阶梯、竞争假设、区分实验、恢复设计、验证矩阵和证据合同。个人反思由你本人填写：我过去最容易把哪一个高利用率或局部 ACK 误认为根因/完成？

## 附录：21 项 T12T 技能覆盖检查

技能来源：F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/。本次已先读三个入口，再逐项读取其余 18 个 SKILL.md，完成全部 21 项适用性检查。

| 技能 | 本次判断 |
| --- | --- |
| t12t-cockpit-diagnosis | 适用，深入：跨域主链、最早性能断点与竞争假设 |
| t12t-log-analysis | 适用，深入：统一 frame 时间线、证据强弱和因果边界 |
| t12t-platform-architecture | 适用，深入：Guest/Host、GPU、DDR、Display 与设备边界 |
| t12t-display-black-freeze | 适用，深入：BufferQueue、fence、compose、present、scanout |
| t12t-touch-input | 条件适用：输入卡顿与共享 CPU/DDR 争用时深入；本课无触摸实证 |
| t12t-avm-camera-stream | 适用，深入：Camera sequence、AVM 帧、处理 pass 与新鲜度 |
| t12t-power-sleep-str | 适用：devfreq/thermal/power generation 与恢复；无现车策略实证 |
| t12t-audio-path | 条件适用：音频 XRUN/实时 deadline 可作相邻回归；本课非音频主链 |
| t12t-stability-crash-reset | 适用：Guest/device reset、旧帧和恢复半径 |
| t12t-performance-jank | 适用，深入：FrameTimeline、GPU、DDR、PSI、调度与尾时延 |
| t12t-ethernet-sgmii | 条件适用：网络 DMA/并发流量参与资源竞争时深入 |
| t12t-wireless-phone-link | 条件适用：投屏/无线视频并发成为 client 时深入 |
| t12t-cross-domain-msg | 适用：QoS 请求、readback、deadline、旧代与幂等 |
| t12t-boot-hmi | 适用：启动/恢复后首帧与资源重新建立 |
| t12t-log-storm | 适用，深入：I/O 压力、采样限速、轮转与证据保留 |
| t12t-usb-typec-storage | 条件适用：USB/存储 I/O 进入并发场景时深入 |
| t12t-virtualization-tee | 适用，深入：虚拟设备、IOMMU、Guest/Host 资源与安全隔离 |
| t12t-db-ke-forensics | 条件适用：拥塞/非法访问导致 fatal/reset 时固定异常包 |
| t12t-mcu | 条件适用：电源状态、外设触发与跨域时间线；当前无 MCU 实证 |
| t12t-tpm-triage | 适用，深入：预算合同、供证、区分实验和关闭责任 |
| t12t-tpm-5y8d | 暂不展开：构造案例没有真实根因和逃逸证据，不强造 5Y/8D |

本课实际深入使用：t12t-cockpit-diagnosis、t12t-log-analysis、t12t-platform-architecture、t12t-performance-jank、t12t-avm-camera-stream、t12t-display-black-freeze、t12t-power-sleep-str、t12t-log-storm、t12t-stability-crash-reset、t12t-cross-domain-msg、t12t-virtualization-tee 和 t12t-tpm-triage。关键证据缺口包括：当前车型/SoC/build、GPU/DDR/互连拓扑和 counter、格式/stride/pass、cache/压缩、QoS/ICC/devfreq/thermal 配置、并发业务、统一 trace、保留策略和授权测试环境。
