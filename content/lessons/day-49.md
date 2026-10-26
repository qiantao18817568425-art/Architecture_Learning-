# Day 49 — 系统资源 I：资源所有权、DMA/IOMMU 与共享缓冲生命周期

正式安排日期：2026-10-26，星期一，Asia/Shanghai。Week 16。能力阶段仍为第二阶段“系统链路与问题分析”；今天补齐总控队列中尚未实际覆盖的“系统资源”专题，不因材料发布自动升级个人能力。目标深度：L3，能解释跨 Android Guest、Yocto Host、GPU/Camera/Display 等设备的资源所有权、DMA/IOMMU 地址边界、共享缓冲生命周期、同步与恢复合同。总用时约 60 分钟。

执行前已扫描仓库全部状态的答卷 Issue 与评论，没有发现授权学习者的新答卷、补交或附件。本课发布不代表已经掌握；Day 34—49 均等待真实作答评审。2026-10-25 的 Week 15 周日单元远端未发布，本课不补造昨日内容或学习记录。

## 1. 官方依据与项目边界

官方资料核验日期：2026-10-26。

- [AOSP：BufferQueue and Gralloc](https://source.android.com/docs/core/graphics/arch-bq-gralloc)：producer/consumer 通过 buffer handle 共享图形缓冲，dequeue、queue、acquire、release 构成生命周期，实际分配由 usage、format 等合同决定。
- [AOSP：Synchronization framework](https://source.android.com/docs/core/graphics/sync)：fence 显式描述异步硬件操作依赖；buffer 可先传递，consumer 必须等 producer 的完成 fence。
- [Linux：Dynamic DMA mapping Guide](https://docs.kernel.org/core-api/dma-api-howto.html)：CPU 虚拟地址、物理地址和 device/bus DMA 地址是不同空间；dma_map 建立设备可用映射，使用结束后必须按合同解除。
- [Linux：Buffer Sharing and Synchronization（dma-buf）](https://docs.kernel.org/driver-api/dma-buf.html)：exporter、importer、attachment、mapping、reservation/fence 与引用生命周期构成跨设备共享合同。
- [AOSP：AVF architecture](https://source.android.com/docs/core/virtualization/architecture)：用于核对 Guest、VMM/Host 与虚拟设备 backend 的通用责任边界；它不证明当前车型采用相同实现。

当前缺少现车 SoC/build、IOMMU/SMMU 配置、内存堆与 allocator、Camera/GPU/Display 设备归属、Host/Guest 共享机制、cache coherent 属性、protected memory、buffer 格式/stride、配额、阈值和实机 trace。下文拓扑、状态名、故障证据和数值均为教学抽象，不是车型事实；实际 IOVA、VMID、stream ID、地址、错误码和门限不得沿用历史案例，必须由当前版本证据确认。

## 2. 一小时主线

| 时间 | 学习任务 | 输出 |
| --- | --- | --- |
| 0—10 分钟 | 回顾 5 题 | 区分服务 ready、buffer 提交、fence 完成与用户结果 |
| 10—20 分钟 | 核心概念一 | 资源 Owner、使用权、生命周期与资源账本 |
| 20—30 分钟 | 核心概念二 | DMA/IOMMU、dma-buf、fence 与代际隔离 |
| 30—50 分钟 | 工程案例 | Android Guest 重建后 AVM 偶发绿帧/冻帧 |
| 50—60 分钟 | 可复用产物 | 《跨域共享缓冲与设备资源合同 V1》 |

回顾题：

1. Day 40 中 queueBuffer、HWC present、scanout 和用户可见首帧为什么不能互相替代？
2. Day 41—42 的 VM recreate 为什么必须给虚拟设备、队列和在途事务建立新 generation？
3. Day 43—44 的 service alive 为什么不能证明目标数据足够新？
4. Day 47—48 的单域 healthy 为什么不能替代跨域兼容与整车提交？
5. reset 后某个旧 callback 成功返回，为什么不能直接释放或复用当前代资源？

## 3. 核心概念一：资源不是“谁拿到句柄谁拥有”

系统资源至少区分四种角色：

| 角色 | 责任 |
| --- | --- |
| Authority / policy owner | 决定哪些域、设备和业务可使用资源，定义优先级、配额、隔离、降级和回收 |
| Allocator / exporter | 分配 backing storage，定义大小、格式、usage、安全属性，导出可共享对象并管理最终释放 |
| Importer / device attachment | 为具体 consumer/device 建立 attachment 与 DMA 映射，遵守访问方向和同步合同 |
| Producer / consumer | 按 fence 和 ownership handoff 写入/读取，不越过当前 generation、lease 与生命周期 |

“持有 handle/fd”只说明某进程能引用一个共享对象，不等于拥有 backing storage，不等于已映射给目标设备，也不等于可以立即读写。资源 Owner 必须回答：谁分配、谁能访问、谁负责同步、谁可回收、谁承担泄漏/超时、reset 后如何失效、业务完成后由谁最终验收。

### 3.1 资源账本的最小字段

| 维度 | 必填字段 |
| --- | --- |
| 身份 | resourceId、bufferId、exporter、importer、device、power/boot/VM/device generation |
| 形态 | size、format、stride、usage、security/protected、cache 属性；项目值待确认 |
| 生命周期 | allocate/export/attach/map/submit/complete/release/unmap/reclaim 时间与状态 |
| 所有权 | 当前读者/写者、lease、引用计数/attachment、允许的下一状态 |
| 同步 | producer/consumer fence context、seqno、status、deadline |
| 隔离 | IOMMU domain/context、IOVA mapping generation、权限与访问方向 |
| 预算 | pool/queue 水位、单对象占用、并发数、背压、回收和降级策略 |
| 证据 | 关联日志、trace、IOMMU fault、queue/fence、用户业务结果与原始工件链接 |

## 4. 核心概念二：三个地址空间与一条共享缓冲生命线

CPU 虚拟地址、RAM 物理地址和设备使用的 DMA/IOVA 地址不是同一个概念。IOMMU 可以把设备看到的 IOVA 翻译到允许的物理页并隔离访问，但它不会自动替架构完成 Owner 交接、cache 同步、fence 等待、引用释放或 reset 后旧映射失效。

~~~mermaid
flowchart LR
  P[Producer CPU or device] -->|allocate / write| B[Backing buffer]
  B -->|export handle| X[dma-buf / shared object]
  X -->|attach + map| I[IOMMU domain / IOVA]
  I --> D[GPU / ISP / Display / codec]
  P -. producer fence .-> C[Consumer]
  X --> C
  C -. release fence .-> P
  H[Host allocator / backend] --- X
  G[Guest frontend / process] --- C
~~~

对 Android 图形链，BufferQueue 的典型顺序是 dequeue → producer 写入 → queue → consumer acquire → consumer 读取/显示 → release。跨 Linux 设备共享时，dma-buf 的 exporter 提供 backing storage，importer 针对某个 device attach/map；fence 说明异步读写何时完成。具体平台是否使用相同对象、隐式或显式同步、零拷贝或中间复制，都必须用当前实现确认。

### 4.1 教学状态机：对象生命周期与 reset 分支

~~~mermaid
stateDiagram-v2
  [*] --> Allocated
  Allocated --> Exported
  Exported --> Attached
  Attached --> Mapped
  Mapped --> ProducerWriting
  ProducerWriting --> Ready: producer fence signaled
  Ready --> ConsumerReading
  ConsumerReading --> Released: consumer/release fence signaled
  Released --> ProducerWriting: current generation reuse
  Released --> Unmapped: no in-flight access
  Unmapped --> Reclaimed: no references/attachments
  ProducerWriting --> Quarantined: reset / timeout / ownership unknown
  ConsumerReading --> Quarantined: reset / timeout / ownership unknown
  Quarantined --> Released: authoritative reconciliation
  Quarantined --> Failed: cannot prove safe reuse
~~~

reset、VM recreate 或 device reset 后，不得仅凭旧 handle 仍是整数就继续使用。先停止/隔离 DMA，固定 in-flight 与 fault 证据，建立新 device/VM generation，重建 attachment/mapping，重新同步权威状态；旧 generation 的 submit、fence、release 和 timeout 都不得修改新代资源账本。若无法证明设备已停止访问，资源应进入 Quarantined，而不是立即 unmap/reclaim/reuse。

## 5. 上下游职责与完整完成阶梯

以下为教学抽象，非现车拓扑。

~~~mermaid
sequenceDiagram
  participant C as Camera / Producer
  participant H as Yocto Host allocator/backend
  participant I as IOMMU / DMA mapping
  participant G as Android Guest consumer
  participant P as GPU / Composer
  participant D as Display / User result
  G->>H: Request buffer pool(generation, format, usage)
  H-->>G: Allocation/export accepted (local ACK)
  H->>I: Attach/map buffer for target device
  I-->>H: Mapping created (map ACK)
  C->>C: DMA write current frame
  C-->>G: buffer + producer fence + frame/generation
  G->>G: Wait fence, validate identity/freshness
  G->>P: Submit current buffer
  P-->>G: GPU/composition completion fence
  G->>H: Release current-generation ownership
  H->>D: Present/scanout current frame
  D-->>G: Business evidence: fresh frame visible
~~~

| 里程碑 | 能证明什么 | 不能证明什么 |
| --- | --- | --- |
| allocation/export ACK | 对象已分配并可引用 | 目标设备已经映射、数据有效 |
| attach/map ACK | 当前 device 获得可用 DMA 映射 | DMA 已完成、cache/数据已同步 |
| submit/queue ACK | 工作已进入队列 | 硬件完成、consumer 已读 |
| producer fence signaled | 该 fence 所代表的 producer 操作已完成或报错 | consumer 完成、画面可见 |
| consumer/release fence signaled | 该 consumer 的访问已结束 | 其他 consumer 结束、对象可最终回收 |
| HWC/DRM present/scanout | 显示链推进到相应本地节点 | 屏端和用户看到当前新鲜正确内容 |
| business accepted | 当前 generation、正确对象和新鲜度满足用户结果 | 不能反推此前所有异常的唯一根因 |

超时必须指明等待谁、原始 deadline、超时后谁停止 DMA、谁持有对象、是否可重试、是否进入隔离/降级。重试不得重复增加无法回收的 reference/attachment；取消必须能回答在途硬件访问何时真正结束。局部 reset 不应把全局 deadline 重新计时。

## 6. 完整故障分析：Guest 重建后 AVM 偶发绿帧/冻帧

以下为教学构造案例，不代表当前车辆，也不预设你的练习答案。

### 6.1 构造证据

| 证据 | 构造事实 | 证据边界 |
| --- | --- | --- |
| E1 | 倒挡请求与 AVM 服务 ACK 均按时出现 | 证明控制请求到达；不证明帧有效或可见 |
| E2 | Android Guest 发生 recreate，VM generation 从 G7 变为 G8 | 证明 consumer 环境换代；不证明 Host/device 同步完成 |
| E3 | G8 建立了新 buffer pool，但一条 G7 的 release callback 随后到达 | 证明旧代迟到；尚不证明它修改了账本 |
| E4 | Host 账本把相同 buffer slot 标成 free，并在旧 device attachment 仍存在时重新分配 | 证明所有权/生命周期不一致 |
| E5 | IOMMU fault 记录指向已回收映射的 device access；具体地址与 stream ID 仅在私有原始证据保存 | 把断点收窄到 device DMA 访问与 mapping 生命周期边界 |
| E6 | Guest 侧 queueBuffer 和 present 均成功，但 frame generation/CRC 显示内容不是当前新鲜帧 | 证明局部提交成功不能替代业务完成 |
| E7 | 完整停止 producer、重建 mapping 后画面恢复 | 支持恢复路径有效；单独不能证明最初触发为何发生 |

### 6.2 最早可证实断点与竞争假设

最后一致的里程碑是 G8 新 pool 已建立；下一个应满足“只有 G8 的有效引用/attachment 能推动当前账本”。E3—E5 共同支持的最早断点是：**旧代 release 与未完成的 device access 使 Host 的资源账本、IOMMU mapping 和实际 DMA 所有权不一致。**

仍需区分：generation 校验遗漏；producer quiesce 与 unmap 顺序错误；refcount/attachment 泄漏或提前归零；fence 错误被当成成功；slot ID 在不同 pool 复用；cache/format 不一致；IOMMU fault 是原因还是后果。恢复成功不能单独选择其中一个根因。

### 6.3 证据链与 TPM 分责

| 节点 | 应索取证据 | 首轮责任域 | 关闭判据 |
| --- | --- | --- | --- |
| Guest/consumer | VM generation、pool/buffer/frame ID、queue/acquire/release、fence status | Android/AVM | 旧代事件不更新新代 |
| Host allocator/backend | exporter、ref/attachment、map/unmap/reclaim、账本状态 | Yocto/虚拟设备 | 账本与实际访问一致 |
| Producer/device | start/stop、DMA submit/complete、device generation | Camera/驱动 | quiesce 后无在途访问 |
| IOMMU | domain/context、mapping generation、fault 与时间 | BSP/内核/安全 | 只访问授权且存活映射 |
| GPU/Display | import、fence、compose/present/scanout | 图形/显示 | 当前新鲜帧到达物理输出 |
| 系统/集成 | reset 编排、deadline、降级、统一关联键 | 系统架构/集成 | 端到端恢复且无旧代污染 |
| 测试 | 故障注入、长稳、资源压力与原始工件 | 测试 | 通过标准可重复、可追溯 |

首轮牵头应是系统集成/资源合同 Owner；Host、Guest、设备和 IOMMU 分别提供本地事实。最终根因 Owner 等待跨域时间线和区分实验确认，不按最后报错模块定责。

## 7. 可执行验证矩阵

| 用例 | 注入/步骤 | 关键观测 | 通过标准 | 状态 |
| --- | --- | --- | --- | --- |
| 正常生命周期 | allocate→map→produce→consume→release→unmap | 账本、fence、DMA、用户结果 | 状态单向收敛且无泄漏 | 待执行 |
| producer 快于 consumer | 提高 producer 速率或阻塞 consumer | queue/pool 水位、背压、drop | 按策略阻塞/丢弃/降级，无越界复用 | 待执行 |
| consumer 卡住 | 延迟 release fence | reference、attachment、deadline | 不提前回收，超时有明确出口 | 待执行 |
| Guest recreate | Producer 工作中重建 Guest | VM/device/buffer generation | 旧 handle/callback 被拒，新 mapping 重建 | 待执行 |
| Producer/device reset | 在 DMA in-flight 时复位 | quiesce、fence error、IOMMU | 终态可知，不把错误 fence 当成功 | 待执行 |
| 旧 release 迟到 | 重放旧代 release/timeout | generation fence、资源账本 | 不释放当前代对象并留审计 | 待执行 |
| 重复 attach/retry | 重试 import/map | ref/attachment、idempotency key | 幂等，无重复映射或泄漏 | 待执行 |
| IOMMU fault | 权限/失效映射故障注入 | fault、domain、device、generation | 隔离最小故障域并保存证据 | 待执行 |
| 内存压力 | 收紧 pool/heap 或并发业务 | allocation、reclaim、OOM、降级 | 关键链受保护，娱乐先降级 | 待执行 |
| fence timeout/error | 延迟或错误完成 | fence context/seq/status、owner | 不错误复用；按合同恢复/失败 | 待执行 |
| protected buffer | 跨安全域错误访问 | usage/security、拒绝结果 | 未授权域不可读写或降级泄露 | 待执行 |
| 长稳循环 | 反复启动/停止/STR/recreate | 水位、泄漏、fault、业务帧 | 资源基线稳定，证据可追溯 | 待执行 |

实际数值、故障注入授权、采集工具和通过阈值均待项目确认。未经授权不操作车机或注入设备故障。

## 8. 今日可复用产物：《跨域共享缓冲与设备资源合同 V1》

模板至少包含：

1. 业务场景、system-of-interest、上下游、当前车型/build 与未知项；
2. 资源 authority、allocator/exporter、importer、producer、consumer、最终回收者；
3. backing storage、format/stride/usage/security/cache/访问方向；
4. resourceId、bufferId、power/boot/VM/device/mapping generation 与关联时间；
5. allocate/export/attach/map/submit/fence/release/unmap/reclaim 状态机；
6. received/ACK/local complete/device complete/downstream observable/business accepted 阶梯；
7. pool/queue 配额、水位、背压、回收、优先级与降级；
8. timeout、cancel、retry/idempotency、reset、quarantine、旧 handle/callback 拒绝；
9. 跨 Host/Guest/device/IOMMU 的观测点、原始证据与保留策略；
10. 故障注入、实测结果、Owner、期限与变更记录。

## 9. 今日独立练习

新题不附参考答案、示范作答或预设根因。

场景：挂入 R 挡后 AVM 偶发首帧绿屏；Android Guest 最近发生过一次重建，随后画面又自行恢复。当前只有“请求 ACK、Guest present 成功、Host 偶发 IOMMU fault”三类线索。

请独立完成：

1. 画出 Camera/producer → Host allocator/backend → IOMMU → Android Guest → GPU/HWC → Display 的控制、数据和资源状态流；
2. 列出 CPU VA、物理地址、IOVA、handle、bufferId 和 generation 的区别；
3. 为每个资源状态指定 Owner、进入条件、退出条件和不可接受的旧代事件；
4. 区分 allocation/map/queue/fence/present ACK 与用户可见当前新鲜帧；
5. 提出至少四个竞争假设及一项能支持/否定它的证据；
6. 设计 timeout、Guest/device reset、旧 release、重复 retry、内存压力和 IOMMU fault 的恢复；
7. 完成验证矩阵与《跨域共享缓冲与设备资源合同 V1》；
8. 写出 TPM 首轮牵头、各域供证、最终修复和验证责任，未知人员与期限保持待确认。

## 10. 提交说明

本课编号 **day-49**。使用页面末尾“上传／提交答卷”或进入[答卷中心](https://qiantao18817568425-art.github.io/Architecture_Learning-/answers/index.html)。请提交回顾题、三流图、资源状态机、完成阶梯、竞争假设、证据表、恢复设计、验证矩阵和资源合同。个人反思由你本人填写：我过去最容易把哪一种“拿到句柄/收到 ACK”误认为资源已经安全可用？

## 附录：21 项 T12T 技能覆盖检查

技能来源：F:/座舱日志分析/交付物/T12T诊断技能家族-优化版/。本次已先读三个入口，再逐项读取其余 18 个 SKILL.md，完成全部 21 项适用性检查。

| 技能 | 本次判断 |
| --- | --- |
| t12t-cockpit-diagnosis | 适用，深入：跨域拓扑、首个资源断点和竞争假设 |
| t12t-log-analysis | 适用，深入：多 generation 时间线、证据强弱和首错 |
| t12t-platform-architecture | 适用，深入：Android Guest、Yocto Host、Hypervisor、设备与外设边界 |
| t12t-display-black-freeze | 适用：buffer/fence、compose、present、scanout 与屏端完成边界 |
| t12t-touch-input | 条件适用：输入 buffer/DMA 异常时再深入；本课无触摸实证 |
| t12t-avm-camera-stream | 适用，深入：Camera frame、共享 buffer、旧帧与用户可见 AVM |
| t12t-power-sleep-str | 条件适用：STR/电源代际改变资源身份；本课无现车电源实证 |
| t12t-audio-path | 条件适用：音频 DMA/ring buffer 可复用合同；本课案例非音频 |
| t12t-stability-crash-reset | 适用，深入：Guest/device reset、恢复半径和 quarantine |
| t12t-performance-jank | 适用，深入：pool/queue 水位、背压、内存压力；预算量化留给 Day50 |
| t12t-ethernet-sgmii | 条件适用：网络 DMA/descriptor 场景可复用；本课无链路实证 |
| t12t-wireless-phone-link | 条件适用：无线/视频共享资源冲突时再深入；当前无无线证据 |
| t12t-cross-domain-msg | 适用：handle/fence/callback 的身份、超时、幂等与旧代隔离 |
| t12t-boot-hmi | 适用：Guest 重建后资源重取与当前新鲜业务首帧 |
| t12t-log-storm | 支撑：高频 buffer 日志采样、证据容量和轮转 |
| t12t-usb-typec-storage | 条件适用：USB DMA/块 I/O 进入场景时再深入 |
| t12t-virtualization-tee | 适用，深入：虚拟设备 frontend/backend、IOMMU 与安全内存边界 |
| t12t-db-ke-forensics | 条件适用：IOMMU fault 导致 fatal/reset 时固定 DB/KE；当前无异常包 |
| t12t-mcu | 条件适用：电源/外设 ownership 与 reset 协调；当前无 MCU 实证 |
| t12t-tpm-triage | 适用，深入：资源合同、首轮牵头、修复和验证责任边界 |
| t12t-tpm-5y8d | 暂不展开：构造案例没有真实根因与逃逸证据，不强造 5Y/8D |

本课实际深入使用：t12t-cockpit-diagnosis、t12t-log-analysis、t12t-platform-architecture、t12t-display-black-freeze、t12t-avm-camera-stream、t12t-stability-crash-reset、t12t-performance-jank、t12t-cross-domain-msg、t12t-boot-hmi、t12t-virtualization-tee 和 t12t-tpm-triage。关键证据缺口包括：当前车型/SoC/build、资源与设备拓扑、allocator/heap、IOMMU domain/stream、Host/Guest 共享实现、cache/安全属性、pool/queue/带宽阈值、真实 fault/trace、恢复策略和授权测试环境。
