# Week 13 — 周日整合：跨层取证、恢复设计与测试闭环

计划学习日期：2026-10-11，星期日，Asia/Shanghai；于2026-10-15按用户明确要求补录。补录不表示10月11日已经发布、学习或完成。本单元只整合Day 40—41，不新增普通专题、不推进Day、不提前给未来课答案。建议用时60分钟。

## 1. 今日目标

把本周知识压成一套可在真实问题中复用的闭环：

**用户现象 → 版本与拓扑 → 统一时间/generation → 最早断点 → 竞争假设 → 恢复契约 → 可执行验证 → 关闭证据**

执行前答卷扫描无新增。没有真实作答证据时，只记录“待验证”，不虚构掌握或错题。

## 2. 60分钟安排

| 时间 | 任务 | 产物 |
| --- | --- | --- |
| 0—10分钟 | 回顾4题 | 分层判断 |
| 10—25分钟 | 跨层取证 | 一张双时间线 |
| 25—40分钟 | 恢复设计 | 恢复合同 |
| 40—55分钟 | 测试闭环 | 验证矩阵 |
| 55—60分钟 | TPM收口 | 行动项与关闭标准 |

## 3. 回顾题

1. 为什么“VM create成功”不能作为黑屏关闭标准？
2. 显示数据路径和背光/电源路径为何要分开画？
3. 旧generation消息到达新VM时，哪些层都应具备防护？
4. 如何用Host连续、Guest重建和另一消费者状态区分故障域？

## 4. 周日综合案例

教学场景：车辆从低功耗状态恢复后，主屏背光亮但停在旧画面；另一屏可正常刷新。Host boot ID连续，目标Android VM发生一次destroy/create。旧VM最后一帧已submit，但fence状态未知。新VM服务ready，显示backend也ready；目标业务状态仍来自旧cache。清cache并重新触发后画面恢复。

请独立完成以下任务，不预设根因：

### 任务A：双时间线

分别画生命周期线（power/resume → Host连续性 → VM旧代终止 → 新代create → 服务/设备/业务ready）和显示事务线（request → buffer → fence → SurfaceFlinger/HWC或Host合成 → present/scanout → 物理屏可见）。

用共同事件、request/fence或generation对齐；不同域wall clock未校准时只保留域内顺序。

### 任务B：三槽与最早断点

把证据放入A直接kill/reset、B kill/reset前诱因、C destroy后cleanup、R恢复与验收。标出最后成功和首个缺失里程碑。未采集与未打印要写成“未观测”，不能写“未发生”。

### 任务C：恢复合同

至少定义旧代输入关闭和在途帧终态、新代device/session/surface绑定、当前状态重取与旧cache失效、ACK/resource ready/first present/business complete、超时与重试上限、降级与证据留存，以及重复恢复时的incident去重。

### 任务D：关闭矩阵

| 场景 | 操作 | 必须保留证据 | 关闭标准 | Owner |
| --- | --- | --- | --- | --- |
| 正常resume |  |  |  |  |
| VM重建 |  |  |  |  |
| 旧fence迟到 |  |  |  |  |
| backend晚ready |  |  |  |  |
| 状态重取失败 |  |  |  |  |
| 连续两次恢复失败 |  |  |  |  |

## 5. TPM协查表

| 架构节点/接口 | TPM应问的问题 | 所需证据 | 建议责任域 | 验证判据 |
| --- | --- | --- | --- | --- |
| VM生命周期 | 谁调用destroy，reason与target是什么？ | VMM caller/reason/generation | 稳定性/虚拟化 | 终止层级和策略可解释 |
| virtio/backend | 同一请求停在哪个里程碑？ | queue/request/fence/IRQ | Guest/Host backend | 首个缺失阶段可复现 |
| 显示合成 | 新代是否有first present？ | layer/present/vblank | Android/Host显示 | 当前代画面提交并扫描 |
| 状态同步 | 是否重取当前source？ | sequence/session/cache generation | 跨域/状态Owner | 旧值不能覆盖新值 |
| 物理输出 | 背光、链路、面板状态是否匹配？ | GPIO/SerDes/panel/测量 | BSP/硬件 | 可见结果与软件证据一致 |

首轮分析Owner不等于最终根因Owner。没有证据时，Owner列为“待确认”，动作必须包含输入、输出件和验收标准。

## 6. 今日交付

提交《Week 13周日跨层闭环包》，包含双时间线、三槽账本、恢复合同、六项关闭矩阵和TPM协查表。课程编号为 **week-13-sunday**。题目不附答案；请用页面末尾“上传／提交答卷”提交。

## 7. 技能覆盖与边界

本次从F盘优化版目录检查全部21项T12T技能。深入：通用三入口、显示、稳定性、虚拟化、跨域、启动与TPM分责。条件适用：电源、性能、DB/KE、MCU、日志风暴。其他专项当前不适用或材料不足；没有真实根因和逃逸证据，不展开5Y/8D。

关键缺口：真实车型与版本、控制/数据/电源路径、跨域时钟锚点、VM与显示资源映射、旧消息合同、实测恢复时间和用户可见验收。
