# Week 13 — 周六巩固：显示首帧、VM Reset 与证据链训练

计划学习日期：2026-10-10，星期六，Asia/Shanghai；于2026-10-15按用户明确要求补录。补录时间与计划日期分开记录，不表示10月10日已经发布、学习或完成。本单元只覆盖本周已实际安排的 Day 40—41，不推进 Day、不提前讲未来课。建议用时60分钟。

## 1. 今日边界与答卷状态

执行补录前已扫描全部状态的答卷 Issue 及评论，没有新答卷。Day 40—41的掌握情况仍待真实作答验证，因此本次题目不预设个人薄弱点、不提供答案，也不代写反思。

本单元继续使用两条主线：

- 显示链：请求/状态 → 内容生产 → buffer/fence → 合成 → present/scanout → 物理链与背光 → 用户可见；
- VM恢复链：故障分层 → kill/destroy → 新generation → device/session重绑 → 当前状态重取 → business complete。

## 2. 60分钟安排

| 时间 | 任务 | 交付 |
| --- | --- | --- |
| 0—10分钟 | 闭卷回顾4题 | 关键判断短答 |
| 10—25分钟 | 画两张图 | 显示链路图、VM恢复状态图 |
| 25—45分钟 | 综合故障题 | 证据账本与竞争假设 |
| 45—55分钟 | 设计验证 | 最小实验矩阵 |
| 55—60分钟 | 自评 | 待确认项和下次取证清单 |

## 3. 闭卷回顾

1. 截图正常、SurfaceFlinger有layer、HWC present成功、DRM atomic commit成功、面板可见分别覆盖哪一段？
2. Host boot ID连续而VM generation变化，可以确认什么，不能确认什么？
3. VM destroy后的GPU/Display告警为什么默认放入cleanup槽？
4. “backend ready”与“画面business complete”之间至少还缺哪四个里程碑？

## 4. 独立画图

### 作业A：显示首帧证据图

用Mermaid画出当前理解的显示链。必须包含Android Guest、Host/Yocto、Hypervisor或虚拟设备边界、buffer/fence、合成、DRM/scanout、SerDes/面板与背光。每条边标注输入、状态前提、输出、可观察证据和未知的本车实现。

### 作业B：VM恢复状态图

从旧VM进入故障开始，画到新VM业务恢复结束。必须区分旧代quiesce/terminate、device与session reset/rebind、旧消息隔离、当前状态重取、业务探针，以及失败后的降级或有界升级。

## 5. 综合故障题

教学场景：一次唤屏后，目标屏背光亮但无新画面。Host连续；Android Guest从G40变为G41。VMM记录destroy/create；新Guest中Launcher进程存在。Host显示backend创建新context并返回ready，但没有同一新generation的首帧present证据。旧generation的一个fence completion在create后到达。另一块屏正常。

请独立完成：

1. 把事件分到“直接终止、终止前诱因、终止后cleanup、恢复验证”四类；
2. 写出当前能确认的故障层级和不能确认的根因；
3. 沿显示链找“最后有输入、首个无预期输出”，缺证据处标未观测；
4. 提出至少3个相互竞争的假设，每个假设分别写支持证据、反证和区分实验；
5. 设计旧fence的generation校验与审计处理；
6. 写出首轮分析Owner、恢复策略Owner、直接修复Owner和验证Owner，未知人员保持待确认。

新题不附参考答案。不要把“另一块屏正常”直接写成物理显示完全正常；它只降低公共故障点的优先级。

## 6. 证据账本模板

| 编号 | 原始时间/时钟 | boot/VM generation | 对象/关联ID | 事件 | 类型 | 支持与局限 |
| --- | --- | --- | --- | --- | --- | --- |
| E1 |  |  |  |  | 直接/相关/反证/缺失 |  |

至少覆盖Host与Guest boot ID/uptime、VM destroy/create与caller/reason、request/buffer/fence/surface/layer/display映射、first submit/present/vblank/scanout/背光/用户可见、旧代completion拒绝点、新代business complete。

## 7. 最小验证矩阵

请设计四个实验，不要执行未经授权的设备操作：

| 实验 | 只改变什么 | 必须观察 | 通过标准 |
| --- | --- | --- | --- |
| 正常重建基线 |  |  |  |
| reset中有在途帧 |  |  |  |
| 注入旧代迟到完成 |  |  |  |
| 新代backend延迟ready |  |  |  |

## 8. 今日交付

提交《Week 13周六证据链练习包》，包含两张图、综合故障题、证据账本和四项验证。课程编号为 **week-13-saturday**。使用页面末尾“上传／提交答卷”提交文字或可读附件；仓库公开，请勿上传未脱敏项目日志、密钥或身份信息。

## 9. 技能覆盖与证据缺口

本次从F盘优化版目录检查全部21项T12T技能。深入：cockpit-diagnosis、log-analysis、platform-architecture、display-black-freeze、stability-crash-reset、virtualization-tee、cross-domain-msg、boot-hmi、tpm-triage。条件适用：power-sleep-str、performance-jank、db-ke-forensics、mcu、log-storm。其余音频、触摸、AVM、网络、无线、USB与5Y/8D在当前题目中不适用或材料不足。

关键缺口：本车车型/SoC/软硬件版本、display与物理屏映射、VM/device/session generation、VMM reason字典、共享设备拓扑和实机证据。

