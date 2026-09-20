<!-- chapter-id: 16 -->
# 16 全量附录与索引

> 本章于 2026-09-20 按原架构补充正文解释；原图、模块/流程 ID 和分层保持原样。新证据的版本限定随段落标注。[本轮更新说明](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0369.html)。


本章由规范库存确定性生成，用于从名称、ID、证据或章节反向定位正文。索引记录不增加新的调用关系；模块的上下游、流程阶段和术语分类仍以对应库存及正文为准。

- 模块总数：265
- 流程总数：47
- 术语总数：190
- 证据总数：165

## 16.0 章节快速导航

| 锚点 | 内容 |
|---|---|
| chapter-00 | 第 00 章：前言与证据 |
| chapter-01 | 第 01 章：读图方法 |
| chapter-02 | 第 02 章：整机架构 |
| chapter-03 | 第 03 章：SDK/UMDP |
| chapter-04 | 第 04 章：模块字典 |
| chapter-05 | 第 05 章：通信机制 |
| chapter-06 | 第 06 章：Android 内部 |
| chapter-07 | 第 07 章：Yocto 内部 |
| chapter-08 | 第 08 章：MCU 内部 |
| chapter-09 | 第 09 章：TBox 内部 |
| chapter-10 | 第 10 章：车辆流程 |
| chapter-11 | 第 11 章：显示相机流程 |
| chapter-12 | 第 12 章：音频语音流程 |
| chapter-13 | 第 13 章：通信模组流程 |
| chapter-14 | 第 14 章：生命周期流程 |
| chapter-15 | 第 15 章：统一诊断 |
| chapter-16 | 第 16 章：附录索引 |

## 16.1 模块索引

<!-- explanation-refresh:index-explanation -->
**资料核对后的架构解释（2026-09-20）**

本次解释校订按原章节和模块/流程定位，原module-inventory、flow-inventory、occurrence及图像保持不变。新证据引用使用S/U/E来源ID和PDF物理页；用户MBOS图独立标为项目补图。原图事实、MTK版本实现、PVT参考方案、站点教学方法与待验证工程项分开使用；不能把一种来源的标签批量升级为另一种可信度。
<!-- /explanation-refresh -->


| ID | 模块 | 域 | 层 | 类型 | 作用摘要 | 上游 | 下游 | 协议/机制 | 可信度 | 证据 |
|---|---|---|---|---|---|---|---|---|---|---|
<!-- module-index: mod-application-b291beb -->
| `mod-application-b291beb` | `Application` | UOS/Android、TBox、SOS/Yocto | Application、Guest(UOS Tbox)、Host(SOS YOCTO)/Application、Guest(UOS Android)/Application | container | Application 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01、original-diagram-02 |
<!-- module-index: mod-launcher-2aeb566 -->
| `mod-launcher-2aeb566` | `Launcher` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-systemui-20ddbc7 -->
| `mod-systemui-20ddbc7` | `SystemUI` | UOS/Android、Cross-domain | Application、Framework/JAVA Services | runtime | Android 系统栏、系统级窗口与状态提示组件；图中同时出现应用和 Framework 位置。 | Notification Manager、Window Manager、Power Manager | Surface Flinger、Input Manager、系统设置/服务 | Binder、Window API、Notification API | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-notificationcenter-890b965 -->
| `mod-notificationcenter-890b965` | `NotificationCenter` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mediacenter-0583aa9 -->
| `mod-mediacenter-0583aa9` | `MediaCenter` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-filemanager-c48f55f -->
| `mod-filemanager-c48f55f` | `FileManager` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-taskcube-f54ab9d -->
| `mod-taskcube-f54ab9d` | `TaskCube` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-e-manual-60269ef -->
| `mod-e-manual-60269ef` | `E-Manual` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-online-video-5a69a97 -->
| `mod-online-video-5a69a97` | `Online Video` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-scenemode-cbaa160 -->
| `mod-scenemode-cbaa160` | `SceneMode` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carsettings-67e8e47 -->
| `mod-carsettings-67e8e47` | `CarSettings` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-factorymode-99f0e9b -->
| `mod-factorymode-99f0e9b` | `FactoryMode` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-hicar-131c64a -->
| `mod-hicar-131c64a` | `Hicar` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-calendar-adab509 -->
| `mod-calendar-adab509` | `Calendar` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-acsettings-e27f4bb -->
| `mod-acsettings-e27f4bb` | `AcSettings` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-speechagent-36a9bb2 -->
| `mod-speechagent-36a9bb2` | `SpeechAgent` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-usercenter-cc190ee -->
| `mod-usercenter-cc190ee` | `UserCenter` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-gaodemap-6f5f749 -->
| `mod-gaodemap-6f5f749` | `GaoDeMap` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-themestore-297d869 -->
| `mod-themestore-297d869` | `ThemeStore` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-coreservice-c5a1ef9 -->
| `mod-coreservice-c5a1ef9` | `CoreService` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-ota-825d0cf -->
| `mod-ota-825d0cf` | `OTA` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-smartscene-107ca1f -->
| `mod-smartscene-107ca1f` | `SmartScene` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-btphone-ae3380b -->
| `mod-btphone-ae3380b` | `BtPhone` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-sentrymode-3f154e1 -->
| `mod-sentrymode-3f154e1` | `SentryMode` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-crosscountry-9b27666 -->
| `mod-crosscountry-9b27666` | `CrossCountry` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mojiweather-4481960 -->
| `mod-mojiweather-4481960` | `MojiWeather` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-changbaktv-4402495 -->
| `mod-changbaktv-4402495` | `ChangBaKTV` | UOS/Android | Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-voice-recognition-5cdde82 -->
| `mod-voice-recognition-5cdde82` | `Voice Recognition` | UOS/Android | Voice Recognition | container | Voice Recognition 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-iflytek-06d4a81 -->
| `mod-iflytek-06d4a81` | `Iflytek` | UOS/Android | Voice Recognition | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Voice Recognition。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-framework-fb001b2 -->
| `mod-framework-fb001b2` | `Framework` | UOS/Android | Framework | container | Framework 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-java-services-5cc44f3 -->
| `mod-java-services-5cc44f3` | `JAVA Services` | Cross-domain | Framework/JAVA Services | container | JAVA Services 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-activity-manager-47ba02a -->
| `mod-activity-manager-47ba02a` | `Activity Manager` | Cross-domain | Framework/JAVA Services | runtime | Android Activity/Task 与应用进程生命周期管理服务。 | Launcher/app、Package Manager | 应用进程、Window Manager | Binder、Activity/Task API | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-notification-manager-d4f5ee0 -->
| `mod-notification-manager-d4f5ee0` | `Notification Manager` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-inputmethod-service-9e9806d -->
| `mod-inputmethod-service-9e9806d` | `InputMethod Service` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-media-0c77aee -->
| `mod-media-0c77aee` | `Media` | Cross-domain、UOS/Android | Framework/JAVA Services、Framework/Media、HAL | multi-role | 图中出现的组件；所属域为 Cross-domain / UOS/Android，层级为 Framework/JAVA Services / Framework/Media / HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-wifiservice-f80b168 -->
| `mod-wifiservice-f80b168` | `WifiService` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-resource-manager-3e669f4 -->
| `mod-resource-manager-3e669f4` | `Resource Manager` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-input-manager-da67aeb -->
| `mod-input-manager-da67aeb` | `Input Manager` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-window-manager-a35e3f1 -->
| `mod-window-manager-a35e3f1` | `Window Manager` | Cross-domain | Framework/JAVA Services | runtime | Android Window、焦点、层级和 SurfaceControl 事务管理服务。 | Activity Manager、app/SystemUI、Input Manager | Surface Flinger、Input Flinger、Display | Binder、Window API、SurfaceControl | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-usb-service-c479a2a -->
| `mod-usb-service-c479a2a` | `USB Service` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-location-service-be1de74 -->
| `mod-location-service-be1de74` | `Location Service` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-broadcastradio-1c44ba3 -->
| `mod-broadcastradio-1c44ba3` | `BroadcastRadio` | Cross-domain、UOS/Android | Framework/JAVA Services、HAL | runtime | 图中出现的组件；所属域为 Cross-domain / UOS/Android，层级为 Framework/JAVA Services / HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-power-manager-dbb635f -->
| `mod-power-manager-dbb635f` | `Power Manager` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-network-service-ac6737c -->
| `mod-network-service-ac6737c` | `Network Service` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-telephony-491886e -->
| `mod-telephony-491886e` | `Telephony` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-audioservice-d3b01ad -->
| `mod-audioservice-d3b01ad` | `AudioService` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-bluetooth-c3b4148 -->
| `mod-bluetooth-c3b4148` | `Bluetooth` | Cross-domain、UOS/Android | Framework/JAVA Services、HAL | runtime | 图中出现的组件；所属域为 Cross-domain / UOS/Android，层级为 Framework/JAVA Services / HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-package-manager-d71e541 -->
| `mod-package-manager-d71e541` | `Package Manager` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-content-provider-0d39688 -->
| `mod-content-provider-0d39688` | `Content Provider` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-connectivity-service-d5090eb -->
| `mod-connectivity-service-d5090eb` | `Connectivity Service` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-bluetooth-bt-profiles-3f31043 -->
| `mod-bluetooth-bt-profiles-3f31043` | `Bluetooth &BT Profiles` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-storage-manager-5d8d1cf -->
| `mod-storage-manager-5d8d1cf` | `Storage Manager` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mbos-manager-31d43ea -->
| `mod-mbos-manager-31d43ea` | `MBOS Manager` | Cross-domain | Framework/JAVA Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-media-scanner-a3ed010 -->
| `mod-media-scanner-a3ed010` | `Media Scanner` | Cross-domain | Framework/Media | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Media。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-media-provider-3e0a9e8 -->
| `mod-media-provider-3e0a9e8` | `Media Provider` | Cross-domain | Framework/Media | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Media。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-media-player-2acd9f3 -->
| `mod-media-player-2acd9f3` | `Media Player` | Cross-domain | Framework/Media | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Media。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-car-services-3ac07fc -->
| `mod-car-services-3ac07fc` | `Car Services` | Cross-domain | Framework/Car Services | container | Car Services 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-car-lib-85f228e -->
| `mod-car-lib-85f228e` | `Car Lib` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carservice-dcf52ad -->
| `mod-carservice-dcf52ad` | `CarService` | Cross-domain、UOS/Android | Framework/Car Services、Guest(UOS Android)/Platform、UOS(Android)/Vehicle | runtime | 图中出现的组件；所属域为 Cross-domain / UOS/Android，层级为 Framework/Car Services / Guest(UOS Android)/Platform / UOS(Android)/Vehicle。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01、original-diagram-02、original-diagram-03 |
<!-- module-index: mod-carbluetooth-service-9fc3943 -->
| `mod-carbluetooth-service-9fc3943` | `CarBluetooth Service` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carbluetooth-userservice-20b1c98 -->
| `mod-carbluetooth-userservice-20b1c98` | `CarBluetooth UserService` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carconfigurationservice-1b8e22e -->
| `mod-carconfigurationservice-1b8e22e` | `CarConfigurationService` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carinput-service-df5ca9b -->
| `mod-carinput-service-df5ca9b` | `CarInput Service` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-radioservice-14d42f6 -->
| `mod-radioservice-14d42f6` | `RadioService` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carlocation-service-903e699 -->
| `mod-carlocation-service-903e699` | `CarLocation Service` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carpower-service-5720a7a -->
| `mod-carpower-service-5720a7a` | `CarPower Service` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carmedia-service-57875a1 -->
| `mod-carmedia-service-57875a1` | `CarMedia Service` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carproperty-service-67a55bf -->
| `mod-carproperty-service-67a55bf` | `CarProperty Service` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-tboxservice-7fb1cc0 -->
| `mod-tboxservice-7fb1cc0` | `TboxService` | Cross-domain | Framework/Car Services、Framework/System | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services / Framework/System。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-cardiagnosticservice-c179a14 -->
| `mod-cardiagnosticservice-c179a14` | `CarDiagnosticService` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carinfo-service-d3457fd -->
| `mod-carinfo-service-d3457fd` | `CarInfo Service` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-cardrivingstateservice-fd8e8b7 -->
| `mod-cardrivingstateservice-fd8e8b7` | `CarDrivingStateService` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carnight-service-c3f3441 -->
| `mod-carnight-service-c3f3441` | `CarNight Service` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carprojection-service-b031954 -->
| `mod-carprojection-service-b031954` | `CarProjection Service` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carpowermanagementservice-6684dc9 -->
| `mod-carpowermanagementservice-6684dc9` | `CarPowermanagementService` | Cross-domain | Framework/Car Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-native-services-382b5e8 -->
| `mod-native-services-382b5e8` | `Native Services` | Cross-domain | Framework/Native Services | container | Native Services 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-surface-flinger-04f3047 -->
| `mod-surface-flinger-04f3047` | `Surface Flinger` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-input-flinger-b2ee0a7 -->
| `mod-input-flinger-b2ee0a7` | `Input Flinger` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mediaserver-cc66649 -->
| `mod-mediaserver-cc66649` | `MediaServer` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-camera-service-a5f4b30 -->
| `mod-camera-service-a5f4b30` | `Camera Service` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-boot-animation-b98643d -->
| `mod-boot-animation-b98643d` | `Boot Animation` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-audio-flinger-96df5c1 -->
| `mod-audio-flinger-96df5c1` | `Audio Flinger` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-audio-policy-2d90656 -->
| `mod-audio-policy-2d90656` | `Audio Policy` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-androidauto-service-09eba60 -->
| `mod-androidauto-service-09eba60` | `AndroidAuto Service` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carplay-service-844da6e -->
| `mod-carplay-service-844da6e` | `CarPlay Service` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-bt-service-9febf5a -->
| `mod-bt-service-9febf5a` | `BT Service` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-broadcastradio-service-97be8b7 -->
| `mod-broadcastradio-service-97be8b7` | `BroadcastRadio Service` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mbos-service-5a35713 -->
| `mod-mbos-service-5a35713` | `MBOS Service` | Cross-domain | Framework/Native Services | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-system-bc0792d -->
| `mod-system-bc0792d` | `System` | Cross-domain | Framework/System | container | System 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-update-engine-9c3a1ab -->
| `mod-update-engine-9c3a1ab` | `Update Engine` | Cross-domain | Framework/System | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-avm-75bc0b9 -->
| `mod-avm-75bc0b9` | `AVM` | Cross-domain、SOS/Yocto | Framework/System、Host(SOS YOCTO)/Application | runtime | 图中出现的组件；所属域为 Cross-domain / SOS/Yocto，层级为 Framework/System / Host(SOS YOCTO)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01、original-diagram-02 |
<!-- module-index: mod-rvc-199fba4 -->
| `mod-rvc-199fba4` | `RVC` | Cross-domain、SOS/Yocto | Framework/System、Host(SOS YOCTO)/Application | runtime | 图中出现的组件；所属域为 Cross-domain / SOS/Yocto，层级为 Framework/System / Host(SOS YOCTO)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01、original-diagram-02 |
<!-- module-index: mod-vold-00d021f -->
| `mod-vold-00d021f` | `vold` | Cross-domain | Framework/System | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-netd-c31208c -->
| `mod-netd-c31208c` | `netd` | Cross-domain | Framework/System | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-lmkd-b87d14a -->
| `mod-lmkd-b87d14a` | `lmkd` | Cross-domain | Framework/System | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-adas-service-b7d4bef -->
| `mod-adas-service-b7d4bef` | `ADAS Service` | Cross-domain | Framework/System | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mblog-95eca7d -->
| `mod-mblog-95eca7d` | `MBLog` | Cross-domain | Framework/System | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-fcm-service-e761bea -->
| `mod-fcm-service-e761bea` | `FCM Service` | Cross-domain | Framework/System | runtime | 图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | pending | original-diagram-01 |
<!-- module-index: mod-android-runtime-07eedda -->
| `mod-android-runtime-07eedda` | `Android Runtime` | UOS/Android | Android Runtime | container | Android Runtime 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-art-abfe09c -->
| `mod-art-abfe09c` | `ART` | UOS/Android | Android Runtime | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Android Runtime。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-core-libraries-28c6bdf -->
| `mod-core-libraries-28c6bdf` | `Core Libraries` | UOS/Android | Android Runtime | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Android Runtime。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-infra-541cc9b -->
| `mod-infra-541cc9b` | `Infra` | UOS/Android | Infra | container | Infra 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-fdbus-f41d7c4 -->
| `mod-fdbus-f41d7c4` | `FDBus` | UOS/Android、Cross-domain、SOS/Yocto、TBox | Infra、Legend、SOS(Yocto)/Communication、UOS(Android)/Communication、UOS(TBox)/Communication | multi-role | 跨进程/跨域服务与主题消息总线；多个 occurrence 内含命名服务。 | FDBus Client/Producer、FDBus Service/Provider | FDBus name_server、FDBus host_server、订阅者/服务消费者 | FDBus、Socket/IPC（具体传输待配置确认） | diagram-confirmed | original-diagram-01、original-diagram-03 |
<!-- module-index: mod-canservice-24db020 -->
| `mod-canservice-24db020` | `CanService` | UOS/Android、SOS/Yocto | Infra、Host(SOS YOCTO)/Infrastructure、SOS(Yocto)/Communication | runtime | SOS 车辆数据服务，连接 MCU/IPCL 数据与 FDBus/SOME-IP/客户端。 | MCU Vehicle Interface、IPCL、VehicleIF | CanClient、Clients(SOME/IP)、Cluster、VehicleHAL（关系待项目确认） | CAN、IPCL、FDBus、SOME/IP | diagram-confirmed | original-diagram-01、original-diagram-02、original-diagram-03 |
<!-- module-index: mod-boost-f7d80df -->
| `mod-boost-f7d80df` | `boost` | UOS/Android | Infra | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Infra。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mb-ipc-86598dd -->
| `mod-mb-ipc-86598dd` | `MB_ipc` | UOS/Android | Infra | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Infra。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-protobuf-9d3fdc4 -->
| `mod-protobuf-9d3fdc4` | `protobuf` | UOS/Android | Infra | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Infra。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-update-server-60b9399 -->
| `mod-update-server-60b9399` | `Update_server` | UOS/Android | Infra | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Infra。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-vsomeip-176195d -->
| `mod-vsomeip-176195d` | `vsomeip` | UOS/Android | Infra | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Infra。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-libraries-27c968e -->
| `mod-libraries-27c968e` | `Libraries` | UOS/Android | Libraries | container | Libraries 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-webkit-d4dc348 -->
| `mod-webkit-d4dc348` | `Webkit` | UOS/Android | Libraries | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Libraries。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-openmax-04da84a -->
| `mod-openmax-04da84a` | `OpenMax` | UOS/Android | Libraries | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Libraries。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-bionic-e134f0b -->
| `mod-bionic-e134f0b` | `Bionic` | UOS/Android | Libraries | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Libraries。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-carplay-plug-in-acd0a4f -->
| `mod-carplay-plug-in-acd0a4f` | `CarPlay plug-in` | UOS/Android | Libraries | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Libraries。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-opengles-889a244 -->
| `mod-opengles-889a244` | `OpenGLES` | UOS/Android | Libraries | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Libraries。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-sqlite-9f09ccb -->
| `mod-sqlite-9f09ccb` | `SQLite` | UOS/Android | Libraries | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Libraries。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-chromium-32166e8 -->
| `mod-chromium-32166e8` | `Chromium` | UOS/Android | Libraries | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Libraries。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-iap2-cb26e3d -->
| `mod-iap2-cb26e3d` | `iAP2` | UOS/Android | Libraries | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Libraries。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-stagefright-plug-3594245 -->
| `mod-stagefright-plug-3594245` | `StageFright plug` | UOS/Android | Libraries | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Libraries。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-bluetooth-stack-1573223 -->
| `mod-bluetooth-stack-1573223` | `Bluetooth Stack` | UOS/Android | Libraries | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Libraries。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-external-8d10c69 -->
| `mod-external-8d10c69` | `External` | UOS/Android | External | container | External 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-exfat-tool-e5e2d51 -->
| `mod-exfat-tool-e5e2d51` | `exfat tool` | UOS/Android | External | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 External。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-wpa-supplicant-8-24dce0f -->
| `mod-wpa-supplicant-8-24dce0f` | `wpa_supplicant_8` | UOS/Android | External | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 External。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-ntfs-tool-2042e3c -->
| `mod-ntfs-tool-2042e3c` | `ntfs_tool` | UOS/Android | External | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 External。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-tf-hot-plug-0c48548 -->
| `mod-tf-hot-plug-0c48548` | `tf_hot_plug` | UOS/Android | External | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 External。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-e2fs-rpgs-3a29c7b -->
| `mod-e2fs-rpgs-3a29c7b` | `e2fs/rpgs` | UOS/Android | External | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 External。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-logd-a9b0688 -->
| `mod-logd-a9b0688` | `logd` | UOS/Android | External | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 External。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-hal-3c5b432 -->
| `mod-hal-3c5b432` | `HAL` | UOS/Android | HAL、Guest(UOS Android)/Platform | multi-role | 图中出现的组件；所属域为 UOS/Android，层级为 HAL / Guest(UOS Android)/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01、original-diagram-02 |
<!-- module-index: mod-audio-acdac20 -->
| `mod-audio-acdac20` | `Audio` | UOS/Android、SOS/Yocto | HAL、Host(SOS YOCTO)/Drivers | runtime | 图中出现的组件；所属域为 UOS/Android / SOS/Yocto，层级为 HAL / Host(SOS YOCTO)/Drivers。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01、original-diagram-02 |
<!-- module-index: mod-display-574ff9b -->
| `mod-display-574ff9b` | `Display` | UOS/Android、SOS/Yocto | HAL、Host(SOS YOCTO)/Drivers | runtime | 图中出现的组件；所属域为 UOS/Android / SOS/Yocto，层级为 HAL / Host(SOS YOCTO)/Drivers。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01、original-diagram-02 |
<!-- module-index: mod-power-7548ab5 -->
| `mod-power-7548ab5` | `Power` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-usb-09716c4 -->
| `mod-usb-09716c4` | `USB` | UOS/Android | HAL、Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL / Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-ril-edc8d82 -->
| `mod-ril-edc8d82` | `RIL` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-drm-efc0f9e -->
| `mod-drm-efc0f9e` | `DRM` | UOS/Android | HAL、Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL / Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-camera-4da9c9a -->
| `mod-camera-4da9c9a` | `Camera` | UOS/Android、SOS/Yocto | HAL、Kernel、Host(SOS YOCTO)/OS Runtime | multi-role | 跨 HAL/Kernel/SOS occurrence 的相机采集能力；各 occurrence 角色分开记录。 | Camera Service 或 SOS Camera Client、ISP | Gstreamer/RVC/AVM/DMS、应用 Surface | Camera HAL、V4L2、DMA-BUF/Fence | diagram-confirmed | original-diagram-01、original-diagram-02 |
<!-- module-index: mod-sensors-711bf35 -->
| `mod-sensors-711bf35` | `Sensors` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-wifi-f35a5a2 -->
| `mod-wifi-f35a5a2` | `WIFI` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-lights-646a059 -->
| `mod-lights-646a059` | `Lights` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-location-d219c68 -->
| `mod-location-d219c68` | `Location` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-bootctrl-4bc3e0b -->
| `mod-bootctrl-4bc3e0b` | `BootCtrl` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-audiocontrol-e44e0ae -->
| `mod-audiocontrol-e44e0ae` | `AudioControl` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-radio-d432c35 -->
| `mod-radio-d432c35` | `radio` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-vehiclehal-4b9388c -->
| `mod-vehiclehal-4b9388c` | `VehicleHAL` | UOS/Android | HAL、UOS(Android)/Vehicle | runtime | Android Vehicle HAL 边界，连接 CarService 与车辆属性提供端。 | CarService | CanService/FDBus/IPCL 适配端（具体项目映射待确认） | AIDL/HIDL Vehicle HAL、Vehicle Property API | diagram-confirmed | original-diagram-01、original-diagram-03 |
<!-- module-index: mod-tbox-41f3772 -->
| `mod-tbox-41f3772` | `Tbox` | UOS/Android、TBox | HAL、Guest(UOS Tbox) | multi-role | 同名方框在 Android HAL 与 Guest(UOS Tbox) Application 中承担不同角色。 | 图中未给出统一 upstream | 图中未给出统一 downstream | Android HAL API / TBox Application API（按 occurrence） | diagram-confirmed | original-diagram-01、original-diagram-02 |
<!-- module-index: mod-configstorehal-3af9666 -->
| `mod-configstorehal-3af9666` | `configstoreHAL` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mbgnss-d6e0f37 -->
| `mod-mbgnss-d6e0f37` | `mbgnss` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mbsensors-c2a4f47 -->
| `mod-mbsensors-c2a4f47` | `mbsensors` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mbos-hal-2cf3361 -->
| `mod-mbos-hal-2cf3361` | `MBOS HAL` | UOS/Android | HAL、UOS(Android)/Vehicle | runtime | 图中 MBOS 私有 HAL 边界，内部职责尚无直接 MT8676 资料。 | app、CarService（可能关系，待确认） | MBOS/跨域服务（pending） | 项目私有 API（pending） | diagram-confirmed | original-diagram-01、original-diagram-03 |
<!-- module-index: mod-mblogd-c9ac784 -->
| `mod-mblogd-c9ac784` | `mblogd` | UOS/Android | HAL | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 HAL。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-kernel-74808d3 -->
| `mod-kernel-74808d3` | `Kernel` | UOS/Android | Kernel | container | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-iap2-mfi-34f0115 -->
| `mod-iap2-mfi-34f0115` | `iAP2/MFI` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-scheduler-cdcb4d8 -->
| `mod-scheduler-cdcb4d8` | `Scheduler` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-alsa-8f216ba -->
| `mod-alsa-8f216ba` | `ALSA` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-codec-a336769 -->
| `mod-codec-a336769` | `Codec` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-opengl-64772f9 -->
| `mod-opengl-64772f9` | `OpenGL` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-emmc-ufs-sd-cac7f94 -->
| `mod-emmc-ufs-sd-cac7f94` | `eMMC/UFS/SD` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-rtc-4eac074 -->
| `mod-rtc-4eac074` | `RTC` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mdp-c7d6801 -->
| `mod-mdp-c7d6801` | `MDP` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-network-53ebc57 -->
| `mod-network-53ebc57` | `Network` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-memory-89c8a28 -->
| `mod-memory-89c8a28` | `Memory` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-vfs-9913e8a -->
| `mod-vfs-9913e8a` | `VFS` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-sensor-9101fc1 -->
| `mod-sensor-9101fc1` | `Sensor` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mt66xx-a4ad0c0 -->
| `mod-mt66xx-a4ad0c0` | `MT66XX` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-ccci-7afb523 -->
| `mod-ccci-7afb523` | `CCCI` | UOS/Android | Kernel | runtime | MediaTek AP 与 Modem 之间的跨核通信内核通道。 | RIL/Telephony/UMDP Platform Adapter | Modem firmware/baseband | CCCI、Shared Memory/Interrupt（标准机制） | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-ethernet-23946c7 -->
| `mod-ethernet-23946c7` | `Ethernet` | UOS/Android、SOS/Yocto | Kernel、Host(SOS YOCTO)/Drivers、Guest(UOS Android)/Platform | runtime | 图中出现的组件；所属域为 UOS/Android / SOS/Yocto，层级为 Kernel / Host(SOS YOCTO)/Drivers / Guest(UOS Android)/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01、original-diagram-02 |
<!-- module-index: mod-peripheral-uart-spi-gpio-adc-18f46a9 -->
| `mod-peripheral-uart-spi-gpio-adc-18f46a9` | `Peripheral(UART SPI GPIO ADC...)` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-bootloader-8b92f48 -->
| `mod-bootloader-8b92f48` | `BootLoader` | UOS/Android | Kernel | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Kernel。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-3rd-party-d973780 -->
| `mod-3rd-party-d973780` | `3rd Party` | Cross-domain | Legend | legend | 非运行时图例或连线标注。 | 所连接发送端（图中具体箭头） | 所连接接收端（图中具体箭头） | 3rd Party | diagram-confirmed | original-diagram-01 |
<!-- module-index: mod-mcu-98bb0d0 -->
| `mod-mcu-98bb0d0` | `MCU` | MCU、SoC/Virtualization | MCU/SWCs、Virtualization/Hardware、MCU | multi-role | 图中出现的组件；所属域为 MCU / SoC/Virtualization，层级为 MCU/SWCs / Virtualization/Hardware / MCU。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02、original-diagram-03 |
<!-- module-index: mod-swcs-1a1c498 -->
| `mod-swcs-1a1c498` | `SWCs` | MCU | MCU/SWCs | container | SWCs 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-f20b335 -->
| `mod-item-f20b335` | `仪表应用` | MCU | MCU/SWCs | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-ba91a6f -->
| `mod-item-ba91a6f` | `行车电脑` | MCU | MCU/SWCs | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-226c25e -->
| `mod-item-226c25e` | `电源管理` | MCU | MCU/SWCs | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-abe38e8 -->
| `mod-item-abe38e8` | `警示灯控制` | MCU | MCU/SWCs | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-adas-475098f -->
| `mod-adas-475098f` | `ADAS应用` | MCU | MCU/SWCs | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-dsp-e7758dd -->
| `mod-dsp-e7758dd` | `DSP控制` | MCU | MCU/SWCs | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-b1f62c2 -->
| `mod-item-b1f62c2` | `功能安全` | MCU | MCU/SWCs | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-daeb7bd -->
| `mod-item-daeb7bd` | `功能诊断` | MCU | MCU/SWCs | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-rte-40e8bc6 -->
| `mod-rte-40e8bc6` | `RTE` | MCU、Cross-domain | MCU/RTE、Legend | multi-role | 图中出现的组件；所属域为 MCU / Cross-domain，层级为 MCU/RTE / Legend。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02、original-diagram-03 |
<!-- module-index: mod-e2e-16f7613 -->
| `mod-e2e-16f7613` | `E2E` | MCU | MCU/RTE | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/RTE。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-os-de8aa86 -->
| `mod-os-de8aa86` | `OS` | MCU | MCU/Platform | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-bsw-aa26638 -->
| `mod-bsw-aa26638` | `BSW` | MCU | MCU/Platform | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-mcal-96dcb02 -->
| `mod-mcal-96dcb02` | `MCAL` | MCU | MCU/Platform | container | 图中出现的组件；所属域为 MCU，层级为 MCU/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-can-aa884ac -->
| `mod-can-aa884ac` | `CAN` | MCU | MCU/Platform | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-spi-576bfa9 -->
| `mod-spi-576bfa9` | `SPI` | MCU、Cross-domain、TBox | MCU/Platform、Legend、MCU、UOS(TBox)/Communication | multi-role | 图中出现的组件；所属域为 MCU / Cross-domain / TBox，层级为 MCU/Platform / Legend / MCU / UOS(TBox)/Communication。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02、original-diagram-03 |
<!-- module-index: mod-fbl-a9bf6a9 -->
| `mod-fbl-a9bf6a9` | `FBL` | MCU | MCU/Platform | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-guest-uos-tbox-e2b3c90 -->
| `mod-guest-uos-tbox-e2b3c90` | `Guest(UOS Tbox)` | TBox | Guest(UOS Tbox) | container | Guest(UOS Tbox) 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-gps-1776fa3 -->
| `mod-gps-1776fa3` | `GPS` | TBox | Guest(UOS Tbox) | runtime | 图中出现的组件；所属域为 TBox，层级为 Guest(UOS Tbox)。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-telephony-service-2a343ef -->
| `mod-telephony-service-2a343ef` | `Telephony Service` | TBox | Guest(UOS Tbox) | runtime | 图中出现的组件；所属域为 TBox，层级为 Guest(UOS Tbox)。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-virtual-cominfra-6901da3 -->
| `mod-virtual-cominfra-6901da3` | `Virtual cominfra` | TBox | Guest(UOS Tbox) | runtime | 图中出现的组件；所属域为 TBox，层级为 Guest(UOS Tbox)。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-virtual-clk-3e5d962 -->
| `mod-virtual-clk-3e5d962` | `Virtual CLK` | TBox | Guest(UOS Tbox) | runtime | 图中出现的组件；所属域为 TBox，层级为 Guest(UOS Tbox)。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-kernel-drivers-49f75a9 -->
| `mod-kernel-drivers-49f75a9` | `Kernel& Drivers` | TBox、UOS/Android | Guest(UOS Tbox)、Guest(UOS Android)/Platform | multi-role | Guest(UOS TBox/Android) 内核与驱动层的合并架构方框。 | Guest HAL/Runtime、Tbox/Telephony Service | Hypervisor/Host backend、CCCI Driver、Ethernet backend | Linux Driver API、virtio、CCCI/Ethernet | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-ccci-driver-09ef2e7 -->
| `mod-ccci-driver-09ef2e7` | `CCCI Driver` | TBox | Guest(UOS Tbox) | runtime | 图中出现的组件；所属域为 TBox，层级为 Guest(UOS Tbox)。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-host-sos-yocto-037600d -->
| `mod-host-sos-yocto-037600d` | `Host(SOS YOCTO)` | SOS/Yocto | Host(SOS YOCTO)/Application | container | Host(SOS YOCTO) 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-cluster-d75dc68 -->
| `mod-cluster-d75dc68` | `Cluster` | SOS/Yocto | Host(SOS YOCTO)/Application、SOS(Yocto)/Cluster | multi-role | SOS/Yocto 仪表应用，消费车辆状态并形成仪表图形与告警输出。 | CanClient、Client、CanService（经图示 API/FDBus/SOME-IP 链） | Weston、Display/DRM、诊断日志消费者 | API、FDBus 或 SOME/IP（依图示子链）、Wayland | diagram-confirmed | original-diagram-02、original-diagram-03 |
<!-- module-index: mod-dms-477e565 -->
| `mod-dms-477e565` | `DMS` | SOS/Yocto | Host(SOS YOCTO)/Application | runtime | 图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-adas-3e3c94a -->
| `mod-adas-3e3c94a` | `ADAS` | SOS/Yocto | Host(SOS YOCTO)/Application | runtime | 图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-os-runtime-7dbe70e -->
| `mod-os-runtime-7dbe70e` | `OS Runtime` | SOS/Yocto | Host(SOS YOCTO)/OS Runtime | container | OS Runtime 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-weston-11378f3 -->
| `mod-weston-11378f3` | `Weston` | SOS/Yocto | Host(SOS YOCTO)/OS Runtime | runtime | SOS/Yocto Wayland 合成器。 | Cluster、RVC、AVM、Gstreamer | Display、DRM/KMS | Wayland、DRM/KMS、DMA-BUF/Fence（标准机制） | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-gstreamer-237cba2 -->
| `mod-gstreamer-237cba2` | `Gstreamer` | SOS/Yocto | Host(SOS YOCTO)/OS Runtime | runtime | SOS 媒体 pipeline 框架，用于 Camera/Codec/显示数据流。 | Camera、ISP、媒体 Source | RVC/AVM/Weston、Codec/Sink | GStreamer pipeline、V4L2、DMA-BUF | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-infrastructure-951d9aa -->
| `mod-infrastructure-951d9aa` | `Infrastructure` | SOS/Yocto、UOS/Android | Host(SOS YOCTO)/Infrastructure、Guest(UOS Android)/Platform | multi-role | 图中出现的组件；所属域为 SOS/Yocto / UOS/Android，层级为 Host(SOS YOCTO)/Infrastructure / Guest(UOS Android)/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-lifecycle-033df3d -->
| `mod-lifecycle-033df3d` | `Lifecycle` | SOS/Yocto | Host(SOS YOCTO)/Infrastructure | runtime | 图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Infrastructure。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-soa-ipc-89a47d9 -->
| `mod-soa-ipc-89a47d9` | `SOA/IPC` | SOS/Yocto | Host(SOS YOCTO)/Infrastructure | runtime | 图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Infrastructure。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-vehicleif-6b34661 -->
| `mod-vehicleif-6b34661` | `VehicleIF` | SOS/Yocto | Host(SOS YOCTO)/Infrastructure | runtime | 图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Infrastructure。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-audiomgr-b835d85 -->
| `mod-audiomgr-b835d85` | `AudioMgr` | SOS/Yocto | Host(SOS YOCTO)/Infrastructure | runtime | SOS 音频路由与策略管理组件。 | SOS Application、Lifecycle、车辆场景 | Audio Driver、ALSA、DSP/Codec | Audio API、ALSA、Mixer/DSP control | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-logmgr-28d0e52 -->
| `mod-logmgr-28d0e52` | `LogMgr` | SOS/Yocto | Host(SOS YOCTO)/Infrastructure | runtime | 图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Infrastructure。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-drivers-a40ad45 -->
| `mod-drivers-a40ad45` | `Drivers` | SOS/Yocto | Host(SOS YOCTO)/Drivers | container | Drivers 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-isp-7fcd9ed -->
| `mod-isp-7fcd9ed` | `ISP` | SOS/Yocto | Host(SOS YOCTO)/Drivers | runtime | 图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Drivers。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-guest-uos-android-0a38e26 -->
| `mod-guest-uos-android-0a38e26` | `Guest(UOS Android)` | UOS/Android | Guest(UOS Android)/Application | container | Guest(UOS Android) 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-1eb005c -->
| `mod-item-1eb005c` | `车载应用` | UOS/Android | Guest(UOS Android)/Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-411f8eb -->
| `mod-item-411f8eb` | `生态应用` | UOS/Android | Guest(UOS Android)/Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-8726257 -->
| `mod-item-8726257` | `行车记录仪` | UOS/Android | Guest(UOS Android)/Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-f815834 -->
| `mod-item-f815834` | `地图导航` | UOS/Android | Guest(UOS Android)/Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-df3dd6a -->
| `mod-item-df3dd6a` | `语音识别` | UOS/Android | Guest(UOS Android)/Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-item-d040128 -->
| `mod-item-d040128` | `远程监控` | UOS/Android | Guest(UOS Android)/Application | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-aosp-33e68d2 -->
| `mod-aosp-33e68d2` | `AOSP` | UOS/Android | Guest(UOS Android)/Platform | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-mbos-88110a1 -->
| `mod-mbos-88110a1` | `MBOS` | UOS/Android | Guest(UOS Android)/Platform | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | pending | original-diagram-02 |
<!-- module-index: mod-runtime-c4740e4 -->
| `mod-runtime-c4740e4` | `Runtime` | UOS/Android | Guest(UOS Android)/Platform | runtime | 图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Platform。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-nebula-os-743be1c -->
| `mod-nebula-os-743be1c` | `Nebula os` | Nebula OS | Nebula os | container | Nebula os 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | pending | original-diagram-02 |
<!-- module-index: mod-uos-vm-process-9c6130d -->
| `mod-uos-vm-process-9c6130d` | `UOS VM process` | Nebula OS | Nebula os | runtime | 图中出现的组件；所属域为 Nebula OS，层级为 Nebula os。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-sos-vm-process-65b0918 -->
| `mod-sos-vm-process-65b0918` | `SOS VM process` | Nebula OS | Nebula os | runtime | 图中出现的组件；所属域为 Nebula OS，层级为 Nebula os。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-micro-kernel-03bfe00 -->
| `mod-micro-kernel-03bfe00` | `Micro Kernel` | Nebula OS | Nebula os | runtime | 图中出现的组件；所属域为 Nebula OS，层级为 Nebula os。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-hypervisor-803e245 -->
| `mod-hypervisor-803e245` | `Hypervisor` | SoC/Virtualization | Virtualization/Hardware | runtime | 图中出现的组件；所属域为 SoC/Virtualization，层级为 Virtualization/Hardware。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-soc-f387eb7 -->
| `mod-soc-f387eb7` | `SOC` | SoC/Virtualization | Virtualization/Hardware | runtime | 图中出现的组件；所属域为 SoC/Virtualization，层级为 Virtualization/Hardware。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-02 |
<!-- module-index: mod-ipcl-d437f7b -->
| `mod-ipcl-d437f7b` | `IPCL` | Cross-domain、MCU | Legend、MCU | multi-role | 图中 MCU、SOS 与 TBox 间的跨处理器通信层；私有实现 pending。 | Vehicle Interface、CanService、CanService (DK CAN) | SPI 驱动、对端 IPCL Consumer | IPCL（pending）、SPI、Sequence/CRC（待确认） | pending | original-diagram-03 |
<!-- module-index: mod-binder-cf26f69 -->
| `mod-binder-cf26f69` | `Binder` | Cross-domain | Legend | legend | 图中出现的组件；所属域为 Cross-domain，层级为 Legend。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-someip-ff7a8a3 -->
| `mod-someip-ff7a8a3` | `SomeIp` | Cross-domain、UOS/Android | Legend、UOS(Android)/Communication | multi-role | 图中出现的组件；所属域为 Cross-domain / UOS/Android，层级为 Legend / UOS(Android)/Communication。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-attach-1afff01 -->
| `mod-attach-1afff01` | `Attach` | Cross-domain | Legend | legend | 非运行时图例或连线标注。 | 所连接发送端（图中具体箭头） | 所连接接收端（图中具体箭头） | Attach | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-api-d93d10f -->
| `mod-api-d93d10f` | `API` | Cross-domain | Legend | legend | 非运行时图例或连线标注。 | 所连接发送端（图中具体箭头） | 所连接接收端（图中具体箭头） | API | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-sos-yocto-15eb9a4 -->
| `mod-sos-yocto-15eb9a4` | `SOS(Yocto)` | SOS/Yocto | SOS(Yocto)/Cluster | container | SOS(Yocto) 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-client-1bdd79b -->
| `mod-client-1bdd79b` | `Client` | SOS/Yocto | SOS(Yocto)/Cluster | runtime | 图中出现的组件；所属域为 SOS/Yocto，层级为 SOS(Yocto)/Cluster。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-canclient-092a07f -->
| `mod-canclient-092a07f` | `CanClient` | SOS/Yocto | SOS(Yocto)/Cluster | runtime | Cluster 内的车辆数据客户端。 | CanService | Cluster | API、FDBus/SOME-IP（依实际部署确认） | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-clients-some-ip-a337b3d -->
| `mod-clients-some-ip-a337b3d` | `Clients(SOME/IP)` | SOS/Yocto、UOS/Android | SOS(Yocto)/Communication、UOS(Android)/Communication | runtime | 图中 SOME/IP Client 集合，调用服务并订阅事件。 | RoutingManager (SOME/IP守护进程)、Service Stub | Client Proxy、业务 Client/Cluster | SOME/IP、SOME/IP-SD | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-doip-32bb927 -->
| `mod-doip-32bb927` | `DoIP` | SOS/Yocto、UOS/Android | SOS(Yocto)/Communication、UOS(Android)/Communication | runtime | Diagnostics over IP 节点；图中分别作为 Diagnostics 和 Master。 | DoIP Tester/Master、RoutingManager (SOME/IP守护进程) | 目标 ECU/CanService/诊断服务（具体映射待确认） | DoIP、TCP/IP、UDS | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-routingmanager-some-ip-8b378d6 -->
| `mod-routingmanager-some-ip-8b378d6` | `RoutingManager (SOME/IP守护进程)` | SOS/Yocto、UOS/Android | SOS(Yocto)/Communication、UOS(Android)/Communication | runtime | SOME/IP 服务发现、路由和 EventGroup 管理守护进程。 | SOME/IP Provider/Client、网络接口 | Clients(SOME/IP)、Service Stub/Client Proxy | SOME/IP-SD、SOME/IP、UDP/TCP/Multicast | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-fdbus-name-server-1a2ac42 -->
| `mod-fdbus-name-server-1a2ac42` | `FDBus name_server` | SOS/Yocto、UOS/Android、TBox | SOS(Yocto)/Communication、UOS(Android)/Communication、UOS(TBox)/Communication | runtime | FDBus 服务名到端点的注册与查询组件。 | FDBus Service、FDBus Client | FDBus 会话建立端 | FDBus naming protocol | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-fdbus-host-server-495a163 -->
| `mod-fdbus-host-server-495a163` | `FDBus host_server` | SOS/Yocto | SOS(Yocto)/Communication | runtime | FDBus Host 级端点/跨主机连接管理组件。 | FDBus name_server、远端 FDBus Host | FDBus Client/Service | FDBus host protocol、TCP/Unix Socket（待配置确认） | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-uos-android-59df117 -->
| `mod-uos-android-59df117` | `UOS(Android)` | UOS/Android | UOS(Android)/Application | container | UOS(Android) 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-app-7d10434 -->
| `mod-app-7d10434` | `app` | UOS/Android | UOS(Android)/Application | runtime | UOS/Android 上层应用容器，调用车载服务并提交 Android 窗口内容。 | Activity Manager、Input Manager、CarService/MBOSHAL | Window Manager、CarService、MBOS HAL | Binder、Activity/Window API、项目业务 API | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-mbos-6367700 -->
| `mod-mbos-6367700` | `mbos架构` | UOS/Android | UOS(Android)/Vehicle | legend | 非运行时图例或连线标注。 | 所连接发送端（图中具体箭头） | 所连接接收端（图中具体箭头） | mbos架构 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-client-hal-proxy-543288a -->
| `mod-client-hal-proxy-543288a` | `Client HAL Proxy` | UOS/Android | UOS(Android)/Binder | runtime | Android Client 与跨域 Client Proxy 之间的 HAL/接口代理。 | app、CarService | Client Proxy | API、Attach（图例）、项目 HAL 接口 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-service-hal-proxy-d446b69 -->
| `mod-service-hal-proxy-d446b69` | `Service HAL Proxy` | UOS/Android | UOS(Android)/Binder | runtime | Android Service 与跨域 Service Stub 之间的 HAL/接口代理。 | Service Stub | 本地 Service/MBOS HAL | API、Attach（图例）、项目 HAL 接口 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-client-proxy-e159392 -->
| `mod-client-proxy-e159392` | `Client Proxy` | UOS/Android | UOS(Android)/Binder | runtime | 把上层 Client 调用转换为 SOME/IP 请求的代理。 | Client HAL Proxy、业务 Client | Clients(SOME/IP)、RoutingManager (SOME/IP守护进程) | Proxy API、SOME/IP | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-service-stub-4f0623e -->
| `mod-service-stub-4f0623e` | `Service Stub` | UOS/Android | UOS(Android)/Binder | runtime | 接收 SOME/IP 请求并分发到本地 Service 的 Stub。 | Clients(SOME/IP)、RoutingManager (SOME/IP守护进程) | Service HAL Proxy、本地 Service | Stub API、SOME/IP | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-di-83dc75e -->
| `mod-di-83dc75e` | `DI` | MCU | MCU | container | DI 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-swc-818632e -->
| `mod-swc-818632e` | `SWC` | MCU | MCU | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-ivi-ae3827e -->
| `mod-ivi-ae3827e` | `IVI` | MCU | MCU | container | IVI 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-swc-network-acdf359 -->
| `mod-swc-network-acdf359` | `SWC (Network)` | MCU | MCU | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-com-f33b74e -->
| `mod-com-f33b74e` | `Com` | MCU | MCU | runtime | 图中出现的组件；所属域为 MCU，层级为 MCU。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-vehicle-interface-01da3eb -->
| `mod-vehicle-interface-01da3eb` | `Vehicle Interface` | MCU | MCU | runtime | MCU 内把 RTE/SWC 车辆数据映射到 IPCL 的接口组件。 | RTE、SWC、Com | IPCL | AUTOSAR RTE/COM、IPCL | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-feature1-a87fc2a -->
| `mod-feature1-a87fc2a` | `feature1` | MCU | MCU | legend | 非运行时图例或连线标注。 | 所连接发送端（图中具体箭头） | 所连接接收端（图中具体箭头） | feature1 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-feature2-446ad0d -->
| `mod-feature2-446ad0d` | `feature2` | MCU | MCU | legend | 非运行时图例或连线标注。 | 所连接发送端（图中具体箭头） | 所连接接收端（图中具体箭头） | feature2 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-uos-tbox-fa2aaf5 -->
| `mod-uos-tbox-fa2aaf5` | `UOS(TBox)` | TBox | UOS(TBox)/Application | container | UOS(TBox) 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-tbox-app-3fc1c6b -->
| `mod-tbox-app-3fc1c6b` | `TBOX-APP` | TBox | UOS(TBox)/Application | container | TBOX-APP 是架构容器/分组，不是运行时处理节点。 | 父级包含关系见 containment_occurrences | 直接子项见 containment_occurrences | 不适用（架构容器） | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-update-0a25ba5 -->
| `mod-update-0a25ba5` | `update` | TBox | UOS(TBox)/Application | runtime | 图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-xcall-6e02dd5 -->
| `mod-xcall-6e02dd5` | `xcall` | TBox | UOS(TBox)/Application | runtime | 图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-health-monitor-c6b1271 -->
| `mod-health-monitor-c6b1271` | `health_monitor` | TBox | UOS(TBox)/Application | runtime | 图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-modem-service-290ee38 -->
| `mod-modem-service-290ee38` | `modem_service` | TBox | UOS(TBox)/Application | runtime | 图中 TBOX-APP 内的 modem_service 业务组件；不等同于 fb_modemServices。 | TBOX-APP business/core communication | 图中未明确；可能调用 UMDP/Favalon 服务，待调用链确认 | 图中未标注；候选为 Favalon SDK Client API（hypothesis/pending） | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-syslog-e0543ba -->
| `mod-syslog-e0543ba` | `syslog` | TBox | UOS(TBox)/Application | runtime | 图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-dynamic-5452220 -->
| `mod-dynamic-5452220` | `dynamic` | TBox | UOS(TBox)/Application | runtime | 图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-business-6a577a7 -->
| `mod-business-6a577a7` | `business` | TBox | UOS(TBox)/Application | runtime | 图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-gnss-server-d46bd4e -->
| `mod-gnss-server-d46bd4e` | `gnss_server` | TBox | UOS(TBox)/Application | runtime | 图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-communication-mcu-2bb2d5e -->
| `mod-communication-mcu-2bb2d5e` | `communication (MCU)` | TBox | UOS(TBox)/Application | runtime | TBOX-APP 内面向 MCU 的通信组件。 | TBOX-APP business/update/xcall | CanService (DK CAN)、MCU IPCL | SPI、IPCL（私有实现 pending） | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-core-communication-6e340d2 -->
| `mod-core-communication-6e340d2` | `core communication` | TBox | UOS(TBox)/Application | runtime | TBOX-APP 核心跨域通信组件，连接业务与 FDBus/SOME-IP 服务。 | TBOX-APP business、modem_service、gnss_server | FDBus、Clients(SOME/IP)、SOS/Android 服务端 | FDBus、SOME/IP | diagram-confirmed | original-diagram-03 |
<!-- module-index: mod-canservice-dk-can-91af543 -->
| `mod-canservice-dk-can-91af543` | `CanService (DK CAN)` | TBox | UOS(TBox)/Communication | runtime | 图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Communication。 | 图中未明确；不得从方框排列顺序推断 upstream | 图中未明确；将在相关业务流程中解析 downstream | 图中未标注；待接口、配置或日志证据确认 | diagram-confirmed | original-diagram-03 |

## 16.2 业务流程索引

| ID | 名称 | 类别 | 触发/源 | 主阶段 | 反馈 | 故障点 | 责任域 | 证据 | 可信度 |
|---|---|---|---|---|---|---|---|---|---|
<!-- flow-index: flow-01 -->
| `flow-01` | 仪表指示灯 | 车辆与仪表 | 点火后 CAN 告警位变化或 MCU 判定灯状态变化 | CAN 信号源、MCU MCAL/COM/RTE/SWC、SPI/IPCL、CanService/FDBus、Cluster.CanClient 或 VehicleHAL、告警状态机、Weston/SurfaceFlinger、物理屏 | Cluster 收到带 Sequence/Validity 的状态并确认告警状态机、图标和闪烁输出一致 | CAN 信号无效/超时、RTE-SWC 到 SPI/IPCL 序号或 CRC 断链、CanService Topic 旧值、Cluster 告警优先级/互斥错误 | 车身 ECU/MCU SWC、SOS CanService/Cluster、显示合成域 | original-diagram-02、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-02 -->
| `flow-02` | 车速、转速、里程和行车电脑 | 车辆与仪表 | 车轮/发动机信号周期更新或里程累计条件满足 | 传感器/ECU、CAN、MCU RTE/SWC、SPI/IPCL、CanService、Cluster/行车电脑、显示 | Cluster 对车速/转速新鲜度和里程累计结果做状态确认并刷新指针/数字 | CAN 周期丢失、里程累计持久化失败、IPCL Topic 延迟、Cluster 插值/单位换算错误 | 动力/车身 ECU、MCU 行车电脑 SWC、SOS Cluster | original-diagram-02、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-03 -->
| `flow-03` | 档位、车门、灯光、安全带 | 车辆与仪表 | 档位、门灯或安全带离散信号发生边沿变化 | 车身 ECU、CAN、MCU SWC、IPCL、Vehicle Property/Cluster、HMI | Vehicle Property/Cluster 回读最终枚举与有效位并确认 HMI 状态 | 枚举/Invalid 映射错误、CAN debounce 超时、Vehicle Property 缓存旧值、HMI 互斥规则错误 | 车身 ECU/MCU、CanService/VehicleHAL、Cluster/HMI | original-diagram-02、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-04 -->
| `flow-04` | 空调读取与控制 | 车辆与仪表 | 用户在 AcSettings 调整温度/风量/模式或空调 ECU 主动上报 | AcSettings/HMI、CarService/VehicleHAL、CanService、IPCL、MCU/空调 ECU、状态反馈 | SET 请求收到接受/拒绝 ACK，随后以 ECU 状态回读确认最终空调值 | Binder 权限/Service 未就绪、VehicleHAL SET 超时、CanService-IPCL 下发失败、ECU 拒绝或回读不一致 | Android AcSettings/CarService、SOS CanService、MCU/空调 ECU | original-diagram-01、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-05 -->
| `flow-05` | 方向盘按键、旋钮和硬按键 | 车辆与仪表 | GPIO/CAN 硬按键按下、释放、长按或旋转增量到达 | 硬件输入、MCU/输入驱动、IPCL、Input Service/CarInput Service、应用、反馈 | Input/CarInput 收到完整按键序列，目标应用消费并按需要回传灯/音反馈；目标消费者完成状态确认 | 按下/释放丢边沿、MCU debounce 错误、IPCL queue 堵塞、焦点路由到错误应用 | MCU 输入 SWC、Android Input/CarInput、前台应用 | original-diagram-01、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-06 -->
| `flow-06` | Vehicle Property 缓存、订阅和新鲜度 | 车辆与仪表 | 应用 GET/SUBSCRIBE 或 VehicleHAL 上报属性事件 | CanService/VehicleHAL、属性缓存、CarService、Binder 订阅、应用状态机 | CarService 记录 timestamp/status，订阅者收到同 generation 新值并可 GET 回读；目标消费者完成状态确认 | HAL event 丢失、property ID/area 错配、缓存时间戳不更新、Binder callback backlog | VehicleHAL/CarService、属性生产者、应用订阅者 | original-diagram-01、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-07 -->
| `flow-07` | MCU/SoC 心跳 | 车辆与仪表 | MCU 周期任务或 SoC watchdog 周期产生心跳帧 | MCU 周期任务、E2E/Sequence、SPI/IPCL、SoC 监控、超时降级/复位 | 双方更新最后接收时间和 sequence，并在连续周期内确认 Alive/恢复 | OS Task 未调度、E2E counter 跳变、SPI/IPCL 队列卡死、监控阈值或复位策略错误 | MCU 安全/电源域、IPCL 驱动、SoC health_monitor | original-diagram-02、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-08 -->
| `flow-08` | DTC、UDS、DoIP | 车辆与仪表 | 诊断仪建立 DoIP 路由激活并发送 UDS 请求 | 诊断仪/DoIP Master、RoutingManager、DoIP Diagnostics、CanService/MCU、DTC 服务、诊断响应 | DoIP/UDS 返回与 request SID 对应的正/负响应，DTC 状态在 ECU 侧确认 | DoIP discovery/routing 激活失败、SOME/IP/Socket 断链、UDS session/security 不满足、CAN ECU 无响应 | 诊断工具/DoIP Master、SOS Routing/DoIP、目标 ECU/MCU 诊断 | original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-09 -->
| `flow-09` | Cluster 启动、取数、合成和上屏 | 显示与驾驶辅助 | Lifecycle 宣告 Cluster 依赖 Ready 或 HMI 冷启动 | Lifecycle、Cluster、CanClient/Client、状态机、Weston/显示驱动、物理屏 | Cluster Client/CanClient 完成订阅、首帧数据有效并由 Weston PageFlip 确认上屏 | 依赖服务未 Ready、首次订阅/快照缺失、状态机资源加载失败、Weston/DRM PageFlip 超时 | SOS Lifecycle、Cluster、CanService、Weston/Display | original-diagram-02、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-10 -->
| `flow-10` | RVC | 显示与驾驶辅助 | 倒挡信号有效或 RVC 安全触发到达 | 倒挡触发、Camera/ISP、RVC 服务、合成器、Display、状态反馈 | RVC 确认 Camera 首帧、持续帧时间戳和显示层可见，退出倒挡后释放资源 | 倒挡 Topic 不新鲜、Camera/ISP 无帧、GStreamer pipeline error、显示层被遮挡/未释放 | MCU/CanService、Camera/ISP/RVC、Weston/Display | original-diagram-01、original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-11 -->
| `flow-11` | AVM | 显示与驾驶辅助 | 低速环视按键、转向/泊车条件或自动触发满足 | 车辆触发、多路 Camera/ISP、AVM 拼接、合成器、Display | AVM 校验多路相机同步和拼接帧，显示层呈现并回报模式状态 | 单路 Camera 丢帧、标定/时间同步异常、拼接 GPU 超时、Weston layer/Fence 卡住 | Camera/ISP、AVM 算法、Weston/Display | original-diagram-01、original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-12 -->
| `flow-12` | DMS | 显示与驾驶辅助 | DMS 相机出帧且驾驶员监测策略启用 | DMS Camera/ISP、DMS 算法、告警状态、Cluster/HMI、驾驶员反馈 | 算法输出置信度/告警状态被 Cluster 接收并确认提示呈现 | IR Camera 无帧、模型/算法超时、告警 IPC 丢失、Cluster 抑制条件错误 | DMS Camera/算法、SOS IPC、Cluster/告警策略 | original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-13 -->
| `flow-13` | ADAS 告警 | 显示与驾驶辅助 | ADAS ECU/SWC 发布碰撞、车道或辅助驾驶告警 | ADAS ECU/SWC、CAN/E2E、MCU/CanService、Cluster 状态机、图标/声音输出 | Cluster/音频端确认告警等级、图标和提示音一致并记录消退 | CAN/E2E invalid、IPCL Topic 过期、优先级/抑制状态错误、音画输出不同步 | ADAS ECU/MCU、CanService、Cluster/Audio | original-diagram-01、original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-14 -->
| `flow-14` | 行车记录仪和哨兵模式 | 显示与驾驶辅助 | 点火/碰撞/哨兵事件或用户录像操作触发 | Camera、Camera Service、编码器/存储、行车记录仪或 SentryMode、文件索引/回放 | 录像文件封装完成、索引可查询并通过回放/缩略图确认 | Camera/ImageReader Buffer 泄漏、编码器堵塞、存储空间/写入失败、MediaProvider 未索引 | Camera/MediaCodec、行车记录仪/SentryMode、Storage/MediaProvider | original-diagram-01、original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-15 -->
| `flow-15` | Android 渲染链 | 显示与驾驶辅助 | VSYNC 到达且 View invalidation/Surface transaction 产生新 Frame | App/View、ViewRootImpl/Choreographer、RenderThread/HWUI、Surface/BufferQueue、SurfaceFlinger、HWC/Display HAL、DRM/MDP、物理屏 | Frame 经 BufferQueue acquire/release Fence 后由 SurfaceFlinger Present Fence 确认显示 | UI/RenderThread 超时、BufferQueue dequeue 卡住、GraphicBuffer/Surface 泄漏、HWC/DRM Present Fence 超时 | Android App/HWUI、SurfaceFlinger/HWC、Display HAL/DRM | original-diagram-01 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-16 -->
| `flow-16` | Yocto Weston 显示链 | 显示与驾驶辅助 | SOS 客户端提交 Wayland Surface commit | SOS App、Wayland Surface、Weston、Display Driver、DRM/KMS、物理屏 | Weston 收到 Buffer commit，DRM PageFlip/vblank 完成并反馈 frame callback | Wayland client 未 commit、DMA-BUF/Fence 未就绪、Weston compositor 卡住、DRM modeset/pageflip 失败 | SOS App、Weston、Display/DRM | original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-17 -->
| `flow-17` | Android/SOS 跨域显示 | 显示与驾驶辅助 | Android Guest 创建跨域 Surface/VirtualDisplay 并提交 Buffer | Guest Surface/Buffer、虚拟显示前端、Hypervisor/共享内存、Host Backend、Weston/SurfaceFlinger、物理屏 | Host backend 消费同一 Buffer/Fence generation，SOS 合成器完成显示并回传 release | Guest frontend descriptor 枯竭、共享内存映射失败、Fence 跨域丢失、VM 重建后 backend 未重绑 | Android Guest、Hypervisor/虚拟显示、SOS Host backend | original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-18 -->
| `flow-18` | 本地和在线视频 | 音频与语音 | 用户播放本地文件/网络 URL 且媒体资源 Ready | Media App、MediaPlayer/StageFright、Codec、Audio/Surface、AudioFlinger/SurfaceFlinger、硬件输出 | MediaPlayer 收到 prepared/first-frame，Audio/Video 时钟持续推进并确认 EOS/停止 | 网络缓冲不足、Demux/Codec 错误、Output Surface 无效、AudioTrack underrun | Media App、MediaServer/Codec、SurfaceFlinger/AudioFlinger | original-diagram-01 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-19 -->
| `flow-19` | 导航播报与 Duck/Mute | 音频与语音 | 地图导航发布 TTS/提示音并申请瞬态 AudioFocus | 地图导航、AudioManager/AudioPolicy、AudioFlinger、DSP/功放、扬声器、焦点反馈 | AudioPolicy 确认 duck/mute 路由，播报结束后原音源恢复 | AudioFocus 拒绝、duck 策略错误、Audio HAL 路由失败、焦点 abandon 丢失 | 地图导航、Audio Policy/AudioFlinger、DSP/功放 | original-diagram-01、original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-20 -->
| `flow-20` | 语音识别和语音车控 | 音频与语音 | 唤醒词命中或方向盘语音键触发采音 | 麦克风、Audio HAL/AEC、Iflytek/ASR、SpeechAgent、CarService/VehicleHAL、MCU/ECU、结果反馈 | ASR 返回语义结果，车控 SET 获得 ECU 回读并由 SpeechAgent 播报确认 | 麦克风/AEC 异常、Iflytek ASR 超时、语义映射错误、CarService/VehicleHAL 控制失败 | Audio/Iflytek、SpeechAgent、CarService/MCU ECU | original-diagram-01、original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-21 -->
| `flow-21` | 蓝牙电话 | 音频与语音 | HFP 来电/拨号事件或用户接听挂断 | Bluetooth Stack/Profile、BtPhone、Telephony/BT Service、AudioPolicy/AudioFlinger、DSP/扬声器 | BT HFP call state、Audio route 和 Modem/手机状态一致确认 | Profile 未连接、HFP AT 超时、SCO 建链失败、AudioFocus/route 冲突 | Bluetooth Stack/BT Service、BtPhone、Audio 系统 | original-diagram-01 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-22 -->
| `flow-22` | Voice/eCall/xCall | 音频与语音 | 紧急呼叫、xcall 命令或用户拨号触发 | 应用/xcall、Favalon Voice Client、fb_modemServices、Telephony/Modem、Audio Service、呼叫事件回调 | Favalon Voice callback 返回 callId/state，语音通路建立并确认 hangup final state | SDK 未初始化、fb_modemServices/Telephony 未 Ready、呼叫同步超时、Audio route 未建立 | TBOX-APP/xcall、fb_modemServices、Telephony/Audio | original-diagram-03、sdk-image-mtk8676-voice-sequence-png | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-23 -->
| `flow-23` | BroadcastRadio | 音频与语音 | 用户选台/搜台或车辆恢复上次频点 | Radio App、BroadcastRadio Service/HAL、radio 驱动、调谐器、AudioFlinger、扬声器 | RadioService/HAL 回报 tuned/metadata，Audio 路由有声并确认焦点 | 天线/调谐器异常、Radio HAL 超时、频点/区域配置错误、Audio route 静音 | Radio App/Service、BroadcastRadio HAL/radio、Audio | original-diagram-01 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-24 -->
| `flow-24` | KTV、麦克风、AEC、ASR | 音频与语音 | 用户进入 KTV/点歌并开启麦克风 | 麦克风、Audio HAL、AEC/混音、ChangBaKTV/ASR、AudioFlinger、DSP/扬声器 | AEC 后话筒与伴奏同步混音，录放延迟/回声指标和 ASR 状态确认 | Mic permission/device busy、AEC reference 缺失、采样率/时钟漂移、AudioTrack underrun | ChangBaKTV、Audio/AEC、DSP/功放 | original-diagram-01 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-25 -->
| `flow-25` | DSP、功放和扬声器 | 音频与语音 | 音频策略选择设备并启动 PCM Stream | Audio App/策略、AudioFlinger、Audio HAL/ALSA、DSP/Codec、功放、扬声器 | ALSA/DSP 路由生效、功放上电且扬声器输出状态确认 | Audio HAL open 失败、ALSA XRUN、DSP 固件/通路异常、功放保护/静音 | AudioFlinger/HAL、ALSA/DSP、功放/扬声器 | original-diagram-01、original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-26 -->
| `flow-26` | SDK Data Call | MT8676 通信模组 | 应用调用 Data init/set APN/start data call | 上层应用、Favalon Data Client、Client Library、fb_modemServices/UMDP、Platform Adapter、Telephony/Modem、结果/回调 | Favalon 同步结果与 data service callback 确认 PDP/接口/IP 地址可用 | Client 未初始化、fb_modemServices 未 Ready、APN/注册失败、callback 丢失或旧 generation | Favalon Data Client、fb_modemServices、Telephony/Modem | sdk-image-mtk8676-data-call-flow-png、sdk-example-data-test-data-test-c | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-27 -->
| `flow-27` | Network 注册、信号和异常检测 | MT8676 通信模组 | Network Client 初始化/注册回调或周期查询信号 | 上层应用、Favalon Network Client、fb_modemServices、mtktelephonyservice/Modem、状态回调/异常检测 | 注册制式/PLMN/信号 callback 与 Modem 当前状态一致确认 | SIM/天线异常、网络注册超时、频繁切网、callback session 失效 | Favalon Network Client、fb_modemServices、Modem/运营商网络 | sdk-image-mtk8676-nw-seq-png、sdk-image-mt8676-abnormal-nw-seq-png | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-28 -->
| `flow-28` | SIM 初始化和卡状态 | MT8676 通信模组 | TBOX 启动或 SIM 插拔/PIN 状态变化 | 应用、Favalon SIM Client、fb_modemServices、Telephony/Modem、SIM 状态回调 | SIM Client 收到 card/PIN/DDS 回调并通过查询确认当前状态 | SIM 物理不可见、PIN/PUK 状态错误、fb_modemServices 未 Ready、回调注册丢失 | Favalon SIM Client、fb_modemServices、Telephony/Modem/SIM | sdk-image-mtk8676-sim-seq-png、sdk-example-sim-test-sim-test-c | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-29 -->
| `flow-29` | SMS 收发 | MT8676 通信模组 | 应用发送 SMS 或网络下发短信 URC | 应用、Favalon SMS Client、fb_modemServices、Telephony/Modem、网络、收发回调 | 发送结果 messageRef/错误码确认，接收回调可 read/list 并持久化 | SMSC/网络不可用、PDU 编码错误、存储满、接收 callback 未注册 | Favalon SMS Client、fb_modemServices、Modem/SMS 网络 | sdk-image-mtk8676-sms-sequence-png、sdk-example-sms-test-sms-test-c | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-30 -->
| `flow-30` | AT 通道 | MT8676 通信模组 | 应用提交 AT 命令或订阅 URC | 应用、Favalon AT Client、UMDP Modem Service、AT/URC 通道、Modem、响应/URC 回调 | 命令按 channel/requestId 返回最终 OK/ERROR，URC 交付注册 Client；目标消费者完成状态确认 | AT channel 未打开、命令超时、URC 解析/路由错误、并发请求串扰 | Favalon AT Client、UMDP Modem Service、CCCI/Modem | umdp-files-umdp-include-fibo-sdk-fibo-at-h、sdk-example-at-test-at-test-c | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-31 -->
| `flow-31` | GNSS/Location | MT8676 通信模组 | 应用 start Location 或设置 NMEA/频率/定位源 | 应用、Favalon Location Client、UMDP Location/Adapter、GNSS/mbgnss、位置/NMEA 回调 | Location callback 提供 timestamp/fix/status，stop 后确认回调停止 | GNSS 未定位、天线/EPO 异常、NMEA mask 错误、callback 线程/会话失效 | Favalon Location Client、UMDP Location Adapter、GNSS | sdk-image-mtk8676-location-sequence-png、sdk-example-gnss-test-gnss-test-c | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-32 -->
| `flow-32` | IMU | MT8676 通信模组 | 应用 start IMU 采样并配置频率 | 应用、Favalon IMU Client、UMDP IMU/Adapter、Sensor/mbsensors、采样回调 | IMU callback sequence/timestamp 连续，stop 后确认资源释放 | Sensor HAL 无数据、采样频率错误、FIFO overrun、callback 丢失 | Favalon IMU Client、UMDP IMU Adapter、Sensor/IMU | sdk-image-mtk8676-imu-sequence-png、sdk-example-imu-test-imu-test-c | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-33 -->
| `flow-33` | Device Management | MT8676 通信模组 | 应用查询版本/IMEI/SN 或切换 Operating Mode | 应用、Favalon DM Client、UMDP Device Service、Platform Adapter、设备信息/模式结果 | DM 同步结果/回调与 Platform Adapter 实际设备状态一致 | fb_modemServices/DM 未 Ready、Platform Adapter 读取失败、权限/参数错误、同步超时 | Favalon DM Client、UMDP Device Service、Platform Adapter | sdk-image-mtk8676-dm-sequence-png、sdk-example-dm-test-dm-test-c | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-34 -->
| `flow-34` | Power/WakeLock/Wakeup | MT8676 通信模组 | ACC/RTC/Modem 唤醒或应用申请/释放 WakeLock | 应用/电源事件、Favalon Power/WakeLock/Wakeup Client、fb_powerMgr、Platform Adapter、系统电源/唤醒源、状态回调 | fb_powerMgr 记录 wake source/WakeLock 引用，Suspend/Resume 后状态一致确认 | fb_modem 依赖未 Ready、WakeLock 泄漏、唤醒源未注册、Suspend 阶段超时 | 应用/Favalon Power Client、fb_powerMgr、Kernel Power/MCU | umdp-files-fb-powermgr-service、sdk-example-wakeup-test-wakeup-test-c | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-35 -->
| `flow-35` | Log Manager | MT8676 通信模组 | 服务产生日志或触发抓取/级别配置 | 应用/服务日志、Favalon Log Client、fb_logMgr、journald/挂载点、持久化/导出 | fb_logMgr 确认 journald 输入、文件落盘/轮转和导出完成 | /data 等挂载未就绪、journald socket 不可用、磁盘满、轮转/权限错误 | 业务服务、fb_logMgr/systemd-journald、Storage | umdp-files-fb-logmgr-service、umdp-files-logmanager-conf-logmanager-conf | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-36 -->
| `flow-36` | 蜂窝远程监控和远控 | MT8676 通信模组 | 云端 TSP 下发远控或 TBox 周期上报 | 云端/TSP、Modem/Data Call、TBOX-APP business/core communication、SOME/IP/FDBus/IPCL、CarService/MCU、执行反馈 | TBOX business 校验云端响应，车辆执行状态经 MCU 回传并由云端确认 | Data Call 断开、鉴权/时钟失败、SOME/IP/IPCL 路由失败、ECU 拒绝/反馈超时 | 云端/TSP、TBOX-APP、SOS/MCU 执行域 | original-diagram-02、original-diagram-03、sdk-image-mtk8676-data-call-flow-png | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-37 -->
| `flow-37` | 冷启动、Hypervisor、VM、HMI | 系统生命周期 | 上电/复位后 BootLoader 进入启动路径 | BootLoader/FBL、Hypervisor/Micro Kernel、SOS/Android/TBox VM、Kernel/systemd/AOSP、服务依赖、Launcher/Cluster/HMI Ready | Hypervisor、各 VM、systemd/AOSP 服务和 HMI 分阶段发布 Ready，最终首帧确认 | Boot/镜像校验失败、VM 未创建、virtio 后端未就绪、关键服务依赖或 HMI 首帧超时 | Boot/Hypervisor、SOS/Android/TBox OS、HMI 应用 | original-diagram-01、original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-38 -->
| `flow-38` | ACC、STR、Suspend、Resume | 系统生命周期 | ACC 状态变化或 STR 条件满足 | ACC/STR 信号、MCU 电源状态机、Hypervisor/VM Lifecycle、PowerManager/fb_powerMgr、Suspend/Resume、业务状态恢复 | MCU/VM/Power 服务完成 suspend ACK，Resume 后 generation 更新且关键状态重订阅 | ACC debounce 错误、WakeLock 阻塞、VM suspend 超时、Resume 后旧 callback/资源未重绑 | MCU 电源域、Hypervisor/VM Lifecycle、Android/UMDP Power | original-diagram-01、original-diagram-02、umdp-files-fb-powermgr-service | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-39 -->
| `flow-39` | OTA、A/B Slot、升级重启 | 系统生命周期 | OTA 包下载并通过签名/版本校验 | OTA/Update Engine、包校验、BootCtrl/A-B Slot、刷写、重启/回滚、版本确认 | update_engine 标记目标 Slot，BootCtrl 重启进入新 Slot 并以版本/health ACK 确认，失败则回滚 | 包校验/空间失败、写 Slot 中断、BootCtrl 标记失败、新 Slot 启动/health 失败触发回滚 | OTA/Update Engine、BootCtrl/BootLoader、系统 health monitor | original-diagram-01 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: flow-40 -->
| `flow-40` | UMDP 服务启动、死亡、自动重启和 Client 重连 | 系统生命周期 | systemd 启动 UMDP 或检测服务进程死亡 | systemd/umdpprocess.ini、UMDP 服务、Client Library、服务死亡检测、自动重启、Client 重连/重新订阅、状态恢复 | systemd Restart 后 fb_modemServices 等重新 Ready，Client 以新 generation 重连/重注册 callback 并查询状态确认 | 依赖 mtktelephonyservice/sound/mount 未 Ready、Restart storm/CPU limit、Client 保留旧 session、重新订阅或状态恢复缺失 | systemd/fb_procMgr、fb_modemServices/fb_audioServices/fb_powerMgr/fb_logMgr、Favalon Client | umdp-files-umdp-config-umdpprocess-ini、umdp-files-fb-modem-service、umdp-files-fb-audio-service、umdp-files-fb-powermgr-service、umdp-files-fb-logmgr-service | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: supp-usb-u-vold-mediascanner-filemanager-c349a32 -->
| `supp-usb-u-vold-mediascanner-filemanager-c349a32` | USB/U盘/vold/MediaScanner/FileManager | 公共附加流程 | USB uevent 报告存储设备插入/拔出 | USB、Kernel/Storage HAL、vold、Media Scanner/Provider、FileManager | vold 挂载状态确认，MediaScanner 完成扫描且 MediaProvider/FileManager 可查询文件 | USB 枚举失败、文件系统/exfat/ntfs 挂载失败、拔出时句柄未释放、MediaProvider 索引未更新 | USB/Kernel/Storage HAL、vold、MediaScanner/MediaProvider/FileManager | original-diagram-01 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: supp-launcher-systemui-notificationcenter-b5c6ca0 -->
| `supp-launcher-systemui-notificationcenter-b5c6ca0` | Launcher/SystemUI/NotificationCenter | 公共附加流程 | 系统启动、Home 操作或应用发布 Notification | System Server、Launcher/SystemUI、Notification Manager、NotificationCenter、用户交互 | Launcher/SystemUI 窗口可见，NotificationManager 入库并由 NotificationCenter 确认展示/清除 | SystemUI crash、Binder notification 失败、Window focus 错误、通知渠道/权限抑制 | Launcher/SystemUI、Notification Manager/NotificationCenter、Window/Input | original-diagram-01 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: supp-hicar-carplay-android-auto-529100d -->
| `supp-hicar-carplay-android-auto-529100d` | HiCar/CarPlay/Android Auto | 公共附加流程 | 手机通过 USB/Wi-Fi 配对并请求投屏 | 手机/USB/无线链路、Projection Service、协议栈、Display/Audio/Input、手机反馈 | Projection Service 确认 session、首个视频帧、音频路由和输入回传 | 认证/iAP2/MFi 失败、USB/Wi-Fi 断链、解码/Surface 无帧、Audio/Input route 错误 | 手机/协议栈、CarProjection/CarPlay/AndroidAuto Service、Display/Audio/Input | original-diagram-01 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: supp-wi-fi-some-ip-0e27a82 -->
| `supp-wi-fi-some-ip-0e27a82` | Wi-Fi/移动网络/虚拟以太网/SOME/IP | 公共附加流程 | 网络接口上线、IP 配置或 SOME/IP 服务发现触发 | 网络硬件/Modem、驱动/HAL、Network Service/netd、虚拟 Ethernet、SOME/IP、应用 | NetworkService/netd 确认路由/DNS，SOME/IP Client 确认 service/eventgroup 可用 | WPA/蜂窝注册失败、DHCP/路由错误、虚拟 Ethernet backend 未就绪、SOME/IP discovery/订阅失败 | WiFi/Modem 驱动、NetworkService/netd、Hypervisor Ethernet/SOME-IP | original-diagram-01、original-diagram-02、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: supp-item-93a8258 -->
| `supp-item-93a8258` | 跨域日志和时间同步 | 公共附加流程 | 各域启动、故障抓取或时间校准事件 | MCU/SOS/Android/TBox 日志源、LogMgr/MBLog/syslog、统一时间基线、关联 ID、采集导出 | MCU/SOS/Android/TBox 时间偏差在阈值内，日志以同一 request/sequence 可关联确认 | RTC/NTP 源不同步、时区/单调时钟混用、日志丢包/轮转、关联 ID 未透传 | 各域时间服务、LogMgr/MBLog/syslog、问题分析负责人 | original-diagram-01、original-diagram-02、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: supp-vm-kill-destroy-recreate-bfb45ac -->
| `supp-vm-kill-destroy-recreate-bfb45ac` | VM kill/destroy/recreate | 公共附加流程 | Hypervisor health monitor 判定 Guest 无响应或测试命令触发重建 | 故障检测、Nebula OS/Hypervisor、VM kill/destroy、VM recreate、虚拟资源重绑、业务状态恢复 | 旧 VM 资源全部回收，新 VM generation Ready，virtio/backend 和业务订阅重新绑定确认 | VM kill 未完成、共享内存/DMA Buffer 残留、virtio backend 旧 session、应用状态未恢复 | Nebula OS/Hypervisor、Host backend、Guest OS/业务服务 | original-diagram-02 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |
<!-- flow-index: supp-factorymode-315592c -->
| `supp-factorymode-315592c` | FactoryMode 和硬件诊断 | 公共附加流程 | 工厂模式进入或产线/售后发起硬件测试 | FactoryMode、诊断 API/DoIP/UDS、HAL/驱动、硬件自检、结果展示/记录 | 每个 HAL/设备测试返回可追溯结果，DTC/报告保存并由界面确认 | FactoryMode 权限/模式失败、HAL/驱动设备占用、UDS/DoIP 无响应、结果未持久化 | FactoryMode、HAL/Kernel/MCU 诊断、产线/售后工具 | original-diagram-01、original-diagram-03 | mixed: diagram-confirmed/MT8676-evidence/standard-mechanism |

## 16.3 术语索引

| ID | 术语 | 英文全称/规范名 | 中文解释 | 分类 | 证据 | 常见混淆 |
|---|---|---|---|---|---|---|
<!-- term-index: term-api-d93d10f -->
| `term-api-d93d10f` | API | Application Programming Interface | 软件能力的调用合同 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-os-de8aa86 -->
| `term-os-de8aa86` | OS | Operating System | 管理硬件、进程和基础服务的软件层 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-i-o-4dfe11a -->
| `term-i-o-4dfe11a` | I/O | Input/Output | 数据进入或离开处理单元的统称 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-id-89f89c0 -->
| `term-id-89f89c0` | ID | Identifier | 用于区分对象、请求、缓冲区或会话的值 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ui-9d57875 -->
| `term-ui-9d57875` | UI | User Interface | 用户查看信息和发出操作的交互层 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ipc-f4aa7e6 -->
| `term-ipc-f4aa7e6` | IPC | Inter-Process Communication | 不同进程交换请求、响应或事件的机制 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ip-ea424d3 -->
| `term-ip-ea424d3` | IP | Internet Protocol | 分组网络的基础寻址与传输层协议 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-abi-441d954 -->
| `term-abi-441d954` | ABI | Application Binary Interface | 二进制之间的调用、布局和符号合同 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-elf-9df4d63 -->
| `term-elf-9df4d63` | ELF | Executable and Linkable Format | Linux 可执行文件和共享库格式 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-pid-dde57e8 -->
| `term-pid-dde57e8` | PID | Process Identifier | 操作系统为进程分配的标识 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-fd-280c808 -->
| `term-fd-280c808` | FD | File Descriptor | Linux 进程引用文件、Socket 或设备的句柄 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-cpu-ff221d4 -->
| `term-cpu-ff221d4` | CPU | Central Processing Unit | 执行指令和调度计算的处理单元 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-irq-6dcf089 -->
| `term-irq-6dcf089` | IRQ | Interrupt Request | 设备向处理器请求中断处理的信号 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-isr-05f5ff0 -->
| `term-isr-05f5ff0` | ISR | Interrupt Service Routine | 响应硬件中断的执行逻辑 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-dma-1ba7997 -->
| `term-dma-1ba7997` | DMA | Direct Memory Access | 设备绕过 CPU 逐字节搬运的数据传输机制 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-iommu-a60e59f -->
| `term-iommu-a60e59f` | IOMMU | Input-Output Memory Management Unit | 设备地址转换与访问隔离单元 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-fifo-07c257b -->
| `term-fifo-07c257b` | FIFO | First In, First Out | 按进入顺序读取的数据队列 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-mcu-98bb0d0 -->
| `term-mcu-98bb0d0` | MCU | Microcontroller Unit | 承载实时车辆软件和外设控制的控制器 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-soc-5631442 -->
| `term-soc-5631442` | SoC | System on Chip | 集成处理器、内存和多种外设控制器的芯片 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-asil-237fc97 -->
| `term-asil-237fc97` | ASIL | Automotive Safety Integrity Level | 汽车功能安全标准中表达安全完整性目标的等级概念；本手册不据此推定 MT8676 分配 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-vm-494e539 -->
| `term-vm-494e539` | VM | Virtual Machine | 由虚拟化层隔离出的运行域 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-sdk-2c059aa -->
| `term-sdk-2c059aa` | SDK | Software Development Kit | 接口、库、示例和集成资料的集合 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-aaos-ddd585b -->
| `term-aaos-ddd585b` | AAOS | Android Automotive Operating System | 面向汽车场景的 Android 系统形态 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-aosp-33e68d2 -->
| `term-aosp-33e68d2` | AOSP | Android Open Source Project | Android 开源平台基础框架和运行环境。 | diagram_confirmed | original-diagram-02 | AOSP 不包含项目私有 CarService/MBOS 实现。 |
<!-- term-index: term-autosar-e2a7ef8 -->
| `term-autosar-e2a7ef8` | AUTOSAR | Automotive Open System Architecture | 汽车电子软件分层与接口标准体系 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-fbl-a9bf6a9 -->
| `term-fbl-a9bf6a9` | FBL | Flash Bootloader | MCU 侧负责启动和刷写相关能力的引导层 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-mcal-96dcb02 -->
| `term-mcal-96dcb02` | MCAL | Microcontroller Abstraction Layer | AUTOSAR 基础软件中面向 MCU 外设的抽象层。 | diagram_confirmed | original-diagram-02 | MCAL 不包含上层 SWC 业务状态机。 |
<!-- term-index: term-bsw-aa26638 -->
| `term-bsw-aa26638` | BSW | Basic Software | AUTOSAR 基础软件服务、ECU 抽象和驱动集合。 | diagram_confirmed | original-diagram-02 | BSW 与应用 SWC 分层不同。 |
<!-- term-index: term-rte-40e8bc6 -->
| `term-rte-40e8bc6` | RTE | Runtime Environment | AUTOSAR SWC 与基础软件之间的运行时接口层。 | diagram_confirmed | original-diagram-02、original-diagram-03 | RTE 端口状态正常不代表底层总线新鲜。 |
<!-- term-index: term-swc-818632e -->
| `term-swc-818632e` | SWC | Software Component | AUTOSAR 应用软件组件，通过 RTE 端口交互。 | diagram_confirmed | original-diagram-02、original-diagram-03 | SWC Runnable 与 OS Task 不是同一概念。 |
<!-- term-index: term-pdu-318d716 -->
| `term-pdu-318d716` | PDU | Protocol Data Unit | 某一协议层处理和传输的数据单元 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-com-682bd8e -->
| `term-com-682bd8e` | COM | AUTOSAR Communication | 把应用信号组织为 I-PDU，并与下层 PDU 路径衔接的 AUTOSAR 基础软件模块 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-crc-3841eea -->
| `term-crc-3841eea` | CRC | Cyclic Redundancy Check | 检测传输或存储数据差错的校验值 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-e2e-16f7613 -->
| `term-e2e-16f7613` | E2E | End-to-End Protection | 使用计数器、CRC、Data ID 等检测重复、丢失和篡改。 | diagram_confirmed | original-diagram-02 | E2E 保护数据完整性，不保证业务语义正确。 |
<!-- term-index: term-hal-3c5b432 -->
| `term-hal-3c5b432` | HAL | Hardware Abstraction Layer | 向上层隐藏硬件和驱动差异的接口层。 | diagram_confirmed | original-diagram-01、original-diagram-02 | 同名 HAL 在 Android 和项目私有栈中职责可能不同。 |
<!-- term-index: term-rpc-c3282cb -->
| `term-rpc-c3282cb` | RPC | Remote Procedure Call | 跨进程或跨节点请求服务并接收结果的调用抽象，不等同于物理链路已通 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-binder-cf26f69 -->
| `term-binder-cf26f69` | Binder | Android Binder IPC | Android 域内面向对象 IPC/RPC 机制。 | method_reference | original-diagram-03 | Binder 存活不等于业务回调已执行。 |
<!-- term-index: term-aidl-762ec61 -->
| `term-aidl-762ec61` | AIDL | Android Interface Definition Language | Android Binder 接口定义语言，可生成代理和存根。 | method_reference | original-diagram-03 | AIDL 是接口描述，不等同 Binder 驱动本身。 |
<!-- term-index: term-hidl-ea4c6cc -->
| `term-hidl-ea4c6cc` | HIDL | HAL Interface Definition Language | 旧版 Android HAL 接口描述和跨进程机制。 | method_reference | original-diagram-01 | HIDL 与新式稳定 AIDL HAL 不应混写。 |
<!-- term-index: term-spi-576bfa9 -->
| `term-spi-576bfa9` | SPI | Serial Peripheral Interface | MCU 与 SoC/TBox 间可用的同步串行物理接口。 | diagram_confirmed | original-diagram-02、original-diagram-03 | SPI 是物理承载，不等于其上的 IPCL 会话。 |
<!-- term-index: term-can-aa884ac -->
| `term-can-aa884ac` | CAN | Controller Area Network | 车辆控制器之间常用的总线通信协议 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-dbc-f20e2bc -->
| `term-dbc-f20e2bc` | DBC | CAN Database file format | 描述 CAN 报文、信号和缩放关系的文件 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-some-ip-dd8388f -->
| `term-some-ip-dd8388f` | SOME/IP | Scalable Service-Oriented Middleware over IP | 车载以太网上的服务发现、方法调用和事件发布机制。 | diagram_confirmed | original-diagram-03 | SOME/IP 服务发现与业务 EventGroup 订阅是不同阶段。 |
<!-- term-index: term-eventgroup-ec5e9e4 -->
| `term-eventgroup-ec5e9e4` | EventGroup | SOME/IP Event Group | SOME/IP 中用于组织和订阅事件的逻辑集合 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-fdbus-f41d7c4 -->
| `term-fdbus-f41d7c4` | FDBus | Fast Distributed Bus | 图中用于进程/域间服务、主题和命名管理的消息总线。 | diagram_confirmed | original-diagram-01、original-diagram-03 | 连接存活不代表 Topic 数据新鲜。 |
<!-- term-index: term-fdbus-2403d4a -->
| `term-fdbus-2403d4a` | FDBUS | FDBus diagram label | 与图中原始大小写保持一致的 FDBus 标签 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-idl-2d2784b -->
| `term-idl-2d2784b` | IDL | Interface Definition Language | 描述跨进程或跨域接口合同的语言 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ipcl-d437f7b -->
| `term-ipcl-d437f7b` | IPCL | Inter-Processor Communication Layer（项目命名） | 图中 MCU 与 SoC/TBox 间的跨处理器通信抽象。 | pending | original-diagram-03 | 私有帧格式、队列和重连细节尚无 MT8676 直接证据。 |
<!-- term-index: term-ap-bc5af77 -->
| `term-ap-bc5af77` | AP | Application Processor | 运行高层操作系统和应用的处理器域 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ccci-7afb523 -->
| `term-ccci-7afb523` | CCCI | Cross Core Communication Interface | MediaTek AP 与 Modem 之间的跨核通信接口。 | diagram_confirmed | original-diagram-01、original-diagram-02 | CCCI 正常不等于 Telephony/UMDP 服务 Ready。 |
<!-- term-index: term-soa-15db305 -->
| `term-soa-15db305` | SOA | Service-Oriented Architecture | 以服务接口组织能力和交互的架构方式 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-pa-39a0f31 -->
| `term-pa-39a0f31` | PA | Platform Adapter | 把上层接口映射到下层平台能力的适配层 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-umdp-189f863 -->
| `term-umdp-189f863` | UMDP | Unified Middleware Development Platform（资料命名） | MT8676 上承载 Modem、Audio、Power、Log 等服务及平台适配的中间件。 | mt8676_primary | umdp-readme-v1-0-226-txt、umdp-fibo-umdp-bb | UMDP 服务重启后 Client 仍需重连和重新订阅。 |
<!-- term-index: term-tbox-d4573ef -->
| `term-tbox-d4573ef` | TBox | Telematics Box | 承载蜂窝通信、定位和远程业务的域 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-dm-05a3b9f -->
| `term-dm-05a3b9f` | DM | Device Management | SDK 中的设备管理业务族 | mt8676_primary | sdk-example-dm-test-dm-test-c | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-up-11a6685 -->
| `term-up-11a6685` | UP | UMDP service-up state label | 冻结头文件中的服务上线事件状态 | mt8676_primary | umdp-files-umdp-include-fibo-sdk-fibo-type-h | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-down-30e504c -->
| `term-down-30e504c` | DOWN | UMDP service-down state label | 冻结头文件中的服务下线事件状态 | mt8676_primary | umdp-files-umdp-include-fibo-sdk-fibo-type-h | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-di-83dc75e -->
| `term-di-83dc75e` | DI | diagram-original module label | DI 英文全称待 MT8676 配置或接口资料确认；仅确认原图 MCU 模块标签。 | pending | original-diagram-03 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-fcm-37bd4b4 -->
| `term-fcm-37bd4b4` | FCM | service label from original diagram | FCM 英文全称和进程身份待 MT8676 启动与接口资料确认；仅确认原图 Service 标签。 | pending | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-gnss-cfe04f5 -->
| `term-gnss-cfe04f5` | GNSS | Global Navigation Satellite System | 卫星定位系统的统称 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-gps-1776fa3 -->
| `term-gps-1776fa3` | GPS | Global Positioning System | GNSS 的一种具体卫星定位系统 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-sim-9563e74 -->
| `term-sim-9563e74` | SIM | Subscriber Identity Module | 蜂窝网络用户身份与鉴权载体 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-sms-9e10d45 -->
| `term-sms-9e10d45` | SMS | Short Message Service | 蜂窝网络短消息能力 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-at-031fd11 -->
| `term-at-031fd11` | AT | Attention Command | 用于控制 Modem 的命令接口族 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-urc-c83f58f -->
| `term-urc-c83f58f` | URC | Unsolicited Result Code | Modem/AT 语境中由服务端异步上报的结果或状态通知 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-asr-0501b43 -->
| `term-asr-0501b43` | ASR | Automatic Speech Recognition | 把语音转换为文本或意图的能力 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-rvc-199fba4 -->
| `term-rvc-199fba4` | RVC | Rear View Camera | 倒车时提供后方图像的业务 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-avm-75bc0b9 -->
| `term-avm-75bc0b9` | AVM | Around View Monitor | 融合多路摄像头生成环视画面的业务 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-dms-477e565 -->
| `term-dms-477e565` | DMS | Driver Monitoring System | 监测驾驶员状态的业务 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-adas-3e3c94a -->
| `term-adas-3e3c94a` | ADAS | Advanced Driver Assistance System | 感知并辅助驾驶决策的系统 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-dsp-d3d45f1 -->
| `term-dsp-d3d45f1` | DSP | Digital Signal Processor | 执行音频等实时信号算法的处理单元 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ecu-9db34b4 -->
| `term-ecu-9db34b4` | ECU | Electronic Control Unit | 车辆中的独立控制器 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ivi-ae3827e -->
| `term-ivi-ae3827e` | IVI | In-Vehicle Infotainment | 座舱媒体、导航和交互业务域 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-imu-35e8627 -->
| `term-imu-35e8627` | IMU | Inertial Measurement Unit | 测量加速度和角速度的传感器组件 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-isp-7fcd9ed -->
| `term-isp-7fcd9ed` | ISP | Image Signal Processor | 处理摄像头原始图像的硬件或模块 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-nic-088b04b -->
| `term-nic-088b04b` | NIC | Network Interface Controller | 连接网络介质的控制器 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-anr-977e8a9 -->
| `term-anr-977e8a9` | ANR | Application Not Responding | Android 判定应用主线程长期无响应的故障 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-surface-cda05ca -->
| `term-surface-cda05ca` | Surface | Android Surface | 生产者向 BufferQueue 提交图形缓冲的绘制目标/句柄。 | method_reference | original-diagram-01 | Java Surface、ANativeWindow、Layer 和 Buffer 不是同一对象。 |
<!-- term-index: term-bufferqueue-e48cb9e -->
| `term-bufferqueue-e48cb9e` | BufferQueue | Android BufferQueue | 连接图形 Buffer 生产者和消费者的队列。 | method_reference | original-diagram-01 | 队列残留与单个 GraphicBuffer 泄漏需分别判断。 |
<!-- term-index: term-graphicbuffer-38a66a1 -->
| `term-graphicbuffer-38a66a1` | GraphicBuffer | Android Graphic Buffer | 由 Gralloc 分配、可跨进程共享的图形缓冲对象。 | method_reference | original-diagram-01 | Java 堆正常不代表 DMA/Graphic 内存未增长。 |
<!-- term-index: term-gralloc-3364fcf -->
| `term-gralloc-3364fcf` | Gralloc | Graphics Memory Allocator | Android 图形缓冲分配和映射接口。 | method_reference | original-diagram-01 | Gralloc 分配通常不完全计入 Java Heap。 |
<!-- term-index: term-surfaceflinger-5cf4abb -->
| `term-surfaceflinger-5cf4abb` | SurfaceFlinger | Android SurfaceFlinger | Android 系统级图层合成服务。 | diagram_confirmed | original-diagram-01 | SurfaceFlinger 正常不代表应用已持续提交新 Buffer。 |
<!-- term-index: term-sf-320144d -->
| `term-sf-320144d` | SF | SurfaceFlinger shorthand | 日志或图表中的 SurfaceFlinger 简称 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-hwc-7f1a02e -->
| `term-hwc-7f1a02e` | HWC | Hardware Composer | 把 SurfaceFlinger 图层映射到显示硬件合成平面。 | method_reference | original-diagram-01 | HWC 是合成接口，不等同 DRM/KMS 驱动。 |
<!-- term-index: term-hwui-5b03c52 -->
| `term-hwui-5b03c52` | HWUI | Android Hardware-Accelerated UI | Android UI 硬件加速渲染管线 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-drm-efc0f9e -->
| `term-drm-efc0f9e` | DRM | Direct Rendering Manager | Linux 内核显示资源管理框架 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-drm-kms-032117f -->
| `term-drm-kms-032117f` | DRM/KMS | Direct Rendering Manager / Kernel Mode Setting | Linux 内核显示资源和模式设置框架。 | method_reference | original-diagram-01 | DRM/KMS 与内容版权 DRM 是不同概念。 |
<!-- term-index: term-opengl-64772f9 -->
| `term-opengl-64772f9` | OpenGL | Open Graphics Library | 跨平台图形渲染接口 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-v4l2-a1ea482 -->
| `term-v4l2-a1ea482` | V4L2 | Video4Linux2 | Linux 摄像头和视频设备接口 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-a2b-ede7b05 -->
| `term-a2b-ede7b05` | A2B | Automotive Audio Bus | 车载音频传输机制；本手册仅把它作为待核验的标准边界 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-alsa-8f216ba -->
| `term-alsa-8f216ba` | ALSA | Advanced Linux Sound Architecture | Linux 音频驱动和用户接口体系 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-pcm-865c26a -->
| `term-pcm-865c26a` | PCM | Pulse-Code Modulation | 数字音频采样数据表示方式 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-mdp-c7d6801 -->
| `term-mdp-c7d6801` | MDP | Media/Data Path（平台显示模块命名） | 图中内核显示数据路径/硬件处理模块。 | diagram_confirmed | original-diagram-01 | 具体硬件能力和管线配置需以 MT8676 驱动为准。 |
<!-- term-index: term-virtio-0e9f514 -->
| `term-virtio-0e9f514` | virtio | Virtual I/O | 虚机前端、virtqueue 与 Host 后端之间的标准虚拟 I/O 模型。 | method_reference | original-diagram-02 | virtio 链路存活不等于 Guest 业务资源已重绑定。 |
<!-- term-index: term-favalon-sdk-486a0e1 -->
| `term-favalon-sdk-486a0e1` | Favalon SDK | Favalon Software Development Kit | MT8676 中间件 Client/Server API，提供同步请求、超时和异步回调。 | mt8676_primary | sdk-mt8676-guide、sdk-image-sdk-architecture-diagram-png | SDK Demo 行为不等于量产策略。 |
<!-- term-index: term-doip-32bb927 -->
| `term-doip-32bb927` | DoIP | Diagnostics over Internet Protocol | 在 IP 网络上传输 UDS 诊断消息。 | diagram_confirmed | original-diagram-03 | DoIP 是承载，UDS 是诊断服务语义。 |
<!-- term-index: term-ril-edc8d82 -->
| `term-ril-edc8d82` | RIL | Radio Interface Layer | Android Telephony 与无线 Modem 能力之间的接口层。 | diagram_confirmed | original-diagram-01 | RIL 与 MT8676 Favalon SDK/UMDP 是不同层级。 |
<!-- term-index: term-uds-74d5943 -->
| `term-uds-74d5943` | UDS | Unified Diagnostic Services | 车辆 ECU 诊断服务集合。 | method_reference | original-diagram-03 | UDS 可承载在 CAN/DoIP 上，不能与承载协议混同。 |
<!-- term-index: term-dtc-8c7836e -->
| `term-dtc-8c7836e` | DTC | Diagnostic Trouble Code | 由诊断逻辑记录和报告的故障码。 | method_reference | original-diagram-03 | DTC 是结果记录，不等同日志中的单次错误。 |
<!-- term-index: term-clk-796e23c -->
| `term-clk-796e23c` | CLK | Clock | 图中虚拟时钟能力的缩写 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-adc-c219348 -->
| `term-adc-c219348` | ADC | Analog-to-Digital Converter | 把模拟量转换为数字采样值的硬件或接口 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-dk-7b3ebc3 -->
| `term-dk-7b3ebc3` | DK | diagram-original qualifier; full expansion pending MT8676 evidence | DK 英文全称待 MT8676 接口或配置资料确认；仅确认原图 CanService 限定标签。 | pending | original-diagram-03 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-dns-3ddc21b -->
| `term-dns-3ddc21b` | DNS | Domain Name System | 把域名解析为网络地址的系统 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-gpio-4eefe16 -->
| `term-gpio-4eefe16` | GPIO | General-Purpose Input/Output | 软件控制或采样离散电平的通用管脚接口 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-hci-c8ae5a9 -->
| `term-hci-c8ae5a9` | HCI | Host Controller Interface | 主机协议栈与蓝牙控制器之间的标准接口 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-nmea-3126ab1 -->
| `term-nmea-3126ab1` | NMEA | National Marine Electronics Association | GNSS 接收器常见的定位文本报文格式 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-rss-fcae0f0 -->
| `term-rss-fcae0f0` | RSS | Resident Set Size | 进程当前驻留在物理内存中的页面规模 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-rtc-4eac074 -->
| `term-rtc-4eac074` | RTC | Real-Time Clock | 断电或低功耗状态下维持日历时间的时钟设备 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-tcp-f544fb3 -->
| `term-tcp-f544fb3` | TCP | Transmission Control Protocol | 面向连接、可靠、有序的传输层协议 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-udp-e9a6f62 -->
| `term-udp-e9a6f62` | UDP | User Datagram Protocol | 无连接的数据报传输协议，不提供端到端可靠、有序交付保证 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-uart-3c85ca6 -->
| `term-uart-3c85ca6` | UART | Universal Asynchronous Receiver/Transmitter | 异步串行通信控制器或接口 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-uid-d946adf -->
| `term-uid-d946adf` | UID | User Identifier | Linux/Android 用于身份和权限判定的数值标识 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-usb-09716c4 -->
| `term-usb-09716c4` | USB | Universal Serial Bus | 主机与外设之间的标准串行总线 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-vfs-9913e8a -->
| `term-vfs-9913e8a` | VFS | Virtual File System | Linux 为不同文件系统提供统一路径、文件和挂载操作的抽象层 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-xrun-fee9f87 -->
| `term-xrun-fee9f87` | XRUN | ALSA overrun/underrun condition | 音频应用未能按时生产或消费 PCM 帧的故障状态 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-art-abfe09c -->
| `term-art-abfe09c` | ART | Android Runtime | 执行 Android 应用字节码、类加载、垃圾回收和运行时编译的环境 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-carplay-651eb86 -->
| `term-carplay-651eb86` | CarPlay | Apple CarPlay | iPhone 与车载系统集成导航、通信和媒体能力的平台 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-opengles-889a244 -->
| `term-opengles-889a244` | OpenGLES | OpenGL for Embedded Systems | 面向嵌入式设备的 OpenGL 图形渲染接口 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-openmax-04da84a -->
| `term-openmax-04da84a` | OpenMax | Open Media Acceleration | 面向媒体编解码和处理组件的标准接口体系 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-sqlite-9f09ccb -->
| `term-sqlite-9f09ccb` | SQLite | SQLite database engine | 进程内嵌的关系型数据库引擎 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-someip-ff7a8a3 -->
| `term-someip-ff7a8a3` | SomeIp | 原图 SOME/IP 标签变体 | 原图对 SOME/IP 通信机制使用的精确标签写法 | method_reference | original-diagram-03 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-stagefright-0c1416d -->
| `term-stagefright-0c1416d` | StageFright | Android Stagefright media framework | Android 原生媒体播放、解复用和编解码框架 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-uri-cb371c9 -->
| `term-uri-cb371c9` | URI | Uniform Resource Identifier | 标识内容、资源或接口目标的字符串 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-iap2-cb26e3d -->
| `term-iap2-cb26e3d` | iAP2 | iPod Accessory Protocol 2 | Apple 设备与附件之间的会话和数据通信协议 | method_reference | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-audioservice-d3b01ad -->
| `term-audioservice-d3b01ad` | AudioService | Android Audio Service | Android Framework 中协调音频控制与系统级状态的服务概念 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-cameradevice-b55848d -->
| `term-cameradevice-b55848d` | CameraDevice | Android CameraDevice API | 表示已打开相机设备连接及其会话入口的标准 API 类型 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-deathrecipient-d6e50b1 -->
| `term-deathrecipient-d6e50b1` | DeathRecipient | Binder DeathRecipient callback | Binder 远端对象死亡时通知客户端的回调接口 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-decorview-68f5d97 -->
| `term-decorview-68f5d97` | DecorView | Android Window decor view | Android Window 中承载内容和系统装饰的顶层 View | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-displaylist-4fd39b2 -->
| `term-displaylist-4fd39b2` | DisplayList | Display List | 记录可供渲染线程重放的绘制操作集合 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-egl-125e270 -->
| `term-egl-125e270` | EGL | Khronos EGL graphics platform interface | 图形 API 与原生窗口、显示和上下文之间的平台接口 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-eventhub-928efca -->
| `term-eventhub-928efca` | EventHub | Android Input EventHub | Android 输入系统读取并汇聚 Linux 输入设备事件的组件 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-gc-99a3e18 -->
| `term-gc-99a3e18` | GC | Garbage Collection | 运行时识别并回收不可达托管对象的机制 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-gl-2ec9953 -->
| `term-gl-2ec9953` | GL | Graphics Library | OpenGL 语境中图形接口或资源的常用简称 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-gles-fa18b10 -->
| `term-gles-fa18b10` | GLES | OpenGL for Embedded Systems | OpenGLES 的常用简称 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-gpu-a6a6318 -->
| `term-gpu-a6a6318` | GPU | Graphics Processing Unit | 执行图形、并行计算和部分合成工作的处理单元 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-imagereader-f906495 -->
| `term-imagereader-f906495` | ImageReader | Android ImageReader API | 以 Surface 为输入并允许应用获取图像 Buffer 的标准组件 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-lmkd-f487191 -->
| `term-lmkd-f487191` | LMKD | Low Memory Killer Daemon | Android 在内存压力下参与选择和终止候选进程的守护进程 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-mediacodec-80ba2f8 -->
| `term-mediacodec-80ba2f8` | MediaCodec | Android MediaCodec API | Android 访问媒体编解码组件与 Buffer/Surface 的标准接口 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-mediaprojection-1a04cca -->
| `term-mediaprojection-1a04cca` | MediaProjection | Android MediaProjection API | Android 授权屏幕内容捕获与投影会话的标准接口 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-mediaserver-cc66649 -->
| `term-mediaserver-cc66649` | MediaServer | Android media native services grouping | Android 原生媒体服务或相关服务分组的架构标签 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-popupwindow-4c6f6d5 -->
| `term-popupwindow-4c6f6d5` | PopupWindow | Android PopupWindow API | 在既有 Window 上方展示临时内容的标准 UI 组件 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-surfacetexture-a6392eb -->
| `term-surfacetexture-a6392eb` | SurfaceTexture | Android SurfaceTexture | 把 Surface producer 的 Buffer 作为图形纹理供消费者使用的组件 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-surfaceview-4341cb6 -->
| `term-surfaceview-4341cb6` | SurfaceView | Android SurfaceView | 在 View 层级中管理独立 Surface 内容的标准组件 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-textureview-6fbcedd -->
| `term-textureview-6fbcedd` | TextureView | Android TextureView | 在普通 View 合成语义中显示 SurfaceTexture 内容的组件 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-viewrootimpl-c0b24ae -->
| `term-viewrootimpl-c0b24ae` | ViewRootImpl | Android ViewRootImpl | 连接 View 树、Window 会话、输入和绘制调度的应用侧实现组件 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-virtualdisplay-cc6e4b8 -->
| `term-virtualdisplay-cc6e4b8` | VirtualDisplay | Android VirtualDisplay API | 把显示内容输出到调用者提供 Surface 的逻辑显示对象 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-wms-89aa6e8 -->
| `term-wms-89aa6e8` | WMS | Window Manager Service | 管理窗口 token、层级、布局、可见性、显示归属和输入焦点的系统服务 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-aec-e1315a1 -->
| `term-aec-e1315a1` | AEC | Acoustic Echo Cancellation | 使用参考信号抑制扬声器回声进入麦克风采集的音频处理机制 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-audiofocus-1c7b65b -->
| `term-audiofocus-1c7b65b` | AudioFocus | Android Audio Focus | 多个音频客户端协调播放优先级、duck、暂停和恢复的策略机制 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-audiorecord-f39a8d9 -->
| `term-audiorecord-f39a8d9` | AudioRecord | Android AudioRecord API | Android 应用从音频输入设备采集 PCM 数据的标准接口 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-bt-95355e8 -->
| `term-bt-95355e8` | BT | Bluetooth | 短距离无线通信技术在座舱蓝牙业务中的常用缩写 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-btphone-ae3380b -->
| `term-btphone-ae3380b` | BtPhone | original-diagram application label | 原图 01 中的蓝牙电话应用标签；包名、进程和接口待项目证据确认 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-hfp-80612a8 -->
| `term-hfp-80612a8` | HFP | Hands-Free Profile | 蓝牙电话控制与免提通话相关的标准 Profile | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ktv-239842f -->
| `term-ktv-239842f` | KTV | Karaoke Television | 座舱点歌、麦克风采集、混音和播放业务的常用名称 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-sco-923b4c3 -->
| `term-sco-923b4c3` | SCO | Synchronous Connection-Oriented link | 蓝牙语音传输使用的同步链路类别 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-speechagent-36a9bb2 -->
| `term-speechagent-36a9bb2` | SpeechAgent | original-diagram application label | 原图 01 中的语音代理应用标签；私有接口和进程身份待项目证据确认 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-url-0e2d9b0 -->
| `term-url-0e2d9b0` | URL | Uniform Resource Locator | 标识在线媒体或网络资源位置的标准字符串 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-vsync-9f691db -->
| `term-vsync-9f691db` | VSYNC | Vertical Synchronization | 显示刷新节奏与帧调度相关的同步事件 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-callid-27804c8 -->
| `term-callid-27804c8` | callId | Favalon Voice call identifier | Favalon Voice 资料中用于关联呼叫及状态回调的呼叫标识 | mt8676_primary | sdk-image-mtk8676-voice-sequence-png | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-xcall-40c1251 -->
| `term-xcall-40c1251` | xCall | original-diagram application label | 原图 03 TBOX-APP 中的呼叫相关标签；具体业务展开和绑定待证据确认 | diagram_confirmed | original-diagram-03 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-acsettings-e27f4bb -->
| `term-acsettings-e27f4bb` | AcSettings | Air-conditioning Settings | 原图 01 中的空调设置应用标签；具体属性、进程与车型控制合同待 MT8676 项目证据确认 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-hmi-860a908 -->
| `term-hmi-860a908` | HMI | Human-Machine Interface | 驾驶员或乘员与座舱功能交互的显示、输入和反馈边界 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-anativewindow-75985af -->
| `term-anativewindow-75985af` | ANativeWindow | Android Native Window | 原生图形生产者连接 Surface/BufferQueue 的标准窗口接口概念 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-changbaktv-4402495 -->
| `term-changbaktv-4402495` | ChangBaKTV | original-diagram application label | 原图 01 中的 KTV 应用标签；包名和资源合同待项目证据确认 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-mediaplayer-6876f06 -->
| `term-mediaplayer-6876f06` | MediaPlayer | Android Media Player | Android 播放媒体源并管理准备、播放和停止状态的标准组件概念 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-sentrymode-3f154e1 -->
| `term-sentrymode-3f154e1` | SentryMode | original-diagram application label | 原图 01 中的哨兵模式应用标签；触发和录像策略待项目证据确认 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-windowleaked-cea1903 -->
| `term-windowleaked-cea1903` | WindowLeaked | Android WindowLeaked exception | Android 检测到组件退出后仍持有窗口时报告的异常类别；不等同于 Surface Buffer 泄漏 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ir-8d784db -->
| `term-ir-8d784db` | IR | Infrared | 不可见红外光谱及相关 Camera/照明能力的常用缩写 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-sid-9c4876c -->
| `term-sid-9c4876c` | SID | UDS Service Identifier | UDS 请求和响应中用于标识诊断服务类别的字段 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-acc-7fd8c7d -->
| `term-acc-7fd8c7d` | ACC | Accessory/ignition power state | 车辆电源状态机中用于触发座舱上电、休眠或唤醒决策的输入概念 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ack-6b1cf8a -->
| `term-ack-6b1cf8a` | ACK | Acknowledgement | 接收方确认某请求、状态或阶段已处理的响应语义 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-apn-4a7de9b -->
| `term-apn-4a7de9b` | APN | Access Point Name | 蜂窝数据业务选择分组数据网络和接入配置的名称 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-dds-0c68227 -->
| `term-dds-0c68227` | DDS | Default Data Subscription | 多 SIM 场景中承担默认蜂窝数据业务的订阅选择 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-factorymode-99f0e9b -->
| `term-factorymode-99f0e9b` | FactoryMode | original-diagram application label | 原图 01 中用于产线、硬件自检或工厂诊断的应用标签；具体命令合同待项目证据确认 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-filemanager-c48f55f -->
| `term-filemanager-c48f55f` | FileManager | original-diagram application label | 原图 01 中负责浏览和操作文件资源的应用标签 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-hicar-a7fd7f0 -->
| `term-hicar-a7fd7f0` | HiCar | Huawei HiCar | 手机与车载系统建立认证、控制、音频和投屏会话的互联方案 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-imei-6af7a1a -->
| `term-imei-6af7a1a` | IMEI | International Mobile Equipment Identity | 蜂窝终端设备身份标识；读取权限与使用范围受产品策略约束 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-mblog-95eca7d -->
| `term-mblog-95eca7d` | MBLog | original-diagram system label | 原图 01 中的日志相关系统标签；内部实现和持久化路径待项目证据确认 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-mediaprovider-fb2396d -->
| `term-mediaprovider-fb2396d` | MediaProvider | Android Media Provider | Android 维护媒体元数据、索引并向应用提供内容查询的组件 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-mediascanner-c015884 -->
| `term-mediascanner-c015884` | MediaScanner | Android Media Scanner | 扫描存储媒体文件并更新媒体索引的机制或组件 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-notificationcenter-890b965 -->
| `term-notificationcenter-890b965` | NotificationCenter | original-diagram application label | 原图 01 中聚合和展示通知的应用标签 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-notificationmanager-f1df9f0 -->
| `term-notificationmanager-f1df9f0` | NotificationManager | Android Notification Manager | Android 管理通知发布、通道和展示策略的系统服务概念 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-ota-825d0cf -->
| `term-ota-825d0cf` | OTA | Over-the-Air Update | 通过网络分发并安装软件更新、验证健康状态和必要时回滚的机制 | diagram_confirmed | original-diagram-01 | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-plmn-cb98aee -->
| `term-plmn-cb98aee` | PLMN | Public Land Mobile Network | 由国家码和网络码等标识的蜂窝运营网络 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-smsc-7a83337 -->
| `term-smsc-7a83337` | SMSC | Short Message Service Center | 存储、转发和投递 SMS 的网络侧服务中心 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-str-5c0138f -->
| `term-str-5c0138f` | STR | Start/Starter power state | 车辆启动相关电源输入；精确电平、枚举和时序需项目配置确认 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-tsp-0c0106c -->
| `term-tsp-0c0106c` | TSP | Telematics Service Provider | 向车辆提供鉴权、远控、数据和运营服务的云端业务平台 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-fb-powermgr-7dbaea9 -->
| `term-fb-powermgr-7dbaea9` | fb_powerMgr | UMDP power manager service identifier | UMDP 资料中的电源管理服务标识；进程关系和业务 Ready 语义由 unit/config 与运行证据分别确认 | mt8676_primary | umdp-files-fb-powermgr-service | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-messageref-aa1c373 -->
| `term-messageref-aa1c373` | messageRef | SMS message reference | SMS 发送流程中用于关联提交结果或状态报告的消息引用 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |
<!-- term-index: term-requestid-0402943 -->
| `term-requestid-0402943` | requestId | Request Identifier | 用于关联同步请求、响应、异步回调和超时后迟到响应的请求标识 | method_reference | — | 术语定义用于统一阅读，不自动证明 MT8676 项目私有接口、参数或进程绑定。 |

## 16.4 证据索引

| ID | 平台 | 版本 | 证据类别 | 允许用途 | 本地工件 | 说明 |
|---|---|---|---|---|---|---|
<!-- evidence-index: sdk-readme -->
| `sdk-readme` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/README.txt` | SDK baseline README. |
<!-- evidence-index: sdk-mt8676-guide -->
| `sdk-mt8676-guide` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/html/md_md_mt8676_01_Sdk_User_Guide.html` | MT8676 SDK user guide; 排除平台 pages are excluded. |
<!-- evidence-index: sdk-image-sdk-architecture-diagram-png -->
| `sdk-image-sdk-architecture-diagram-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/SDK_architecture_diagram.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-sdk-structural-diagram-png -->
| `sdk-image-sdk-structural-diagram-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/SDK_structural_diagram.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-sync-timing-diagram-png -->
| `sdk-image-sync-timing-diagram-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/sync_timing_diagram.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mt8676-abnormal-nw-seq-png -->
| `sdk-image-mt8676-abnormal-nw-seq-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mt8676_abnormal_nw_seq.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-abnormal-data-sequence-png -->
| `sdk-image-mtk8676-abnormal-data-sequence-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_abnormal_data_sequence.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-abnormal-dm-sequence-png -->
| `sdk-image-mtk8676-abnormal-dm-sequence-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_abnormal_dm_sequence.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-abnormal-sim-seq-png -->
| `sdk-image-mtk8676-abnormal-sim-seq-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_abnormal_sim_seq.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-abnormal-sms-seq-png -->
| `sdk-image-mtk8676-abnormal-sms-seq-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_abnormal_sms_seq.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-abnormal-voice-sequence-png -->
| `sdk-image-mtk8676-abnormal-voice-sequence-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_abnormal_voice_sequence.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-answer-call-png -->
| `sdk-image-mtk8676-answer-call-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_answer_call.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-async-start-call-png -->
| `sdk-image-mtk8676-async-start-call-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_async_start_call.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-async-stop-call-png -->
| `sdk-image-mtk8676-async-stop-call-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_async_stop_call.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-data-call-flow-png -->
| `sdk-image-mtk8676-data-call-flow-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_data_call_flow.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-data-deinit-png -->
| `sdk-image-mtk8676-data-deinit-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_data_deinit.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-data-init-png -->
| `sdk-image-mtk8676-data-init-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_data_init.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-data-sequence-png -->
| `sdk-image-mtk8676-data-sequence-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_data_sequence.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-data-set-service-event-cb-png -->
| `sdk-image-mtk8676-data-set-service-event-cb-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_data_set_service_event_cb.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-datafilter-set-active-png -->
| `sdk-image-mtk8676-datafilter-set-active-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_datafilter_set_active.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dialing-call1-png -->
| `sdk-image-mtk8676-dialing-call1-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dialing_call1.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dialing-call2-png -->
| `sdk-image-mtk8676-dialing-call2-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dialing_call2.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-deinitialization-png -->
| `sdk-image-mtk8676-dm-deinitialization-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_deinitialization.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-get-ap-version-png -->
| `sdk-image-mtk8676-dm-get-ap-version-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_get_ap_version.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-get-imei-png -->
| `sdk-image-mtk8676-dm-get-imei-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_get_imei.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-get-modem-version-png -->
| `sdk-image-mtk8676-dm-get-modem-version-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_get_modem_version.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-get-sdk-version-png -->
| `sdk-image-mtk8676-dm-get-sdk-version-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_get_sdk_version.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-get-sn-png -->
| `sdk-image-mtk8676-dm-get-sn-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_get_sn.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-initialization-png -->
| `sdk-image-mtk8676-dm-initialization-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_initialization.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-sequence-png -->
| `sdk-image-mtk8676-dm-sequence-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_sequence.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-set-get-ims-png -->
| `sdk-image-mtk8676-dm-set-get-ims-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_set_get_ims.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-set-operating-mode-png -->
| `sdk-image-mtk8676-dm-set-operating-mode-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_set_operating_mode.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-dm-set-service-event-cb-png -->
| `sdk-image-mtk8676-dm-set-service-event-cb-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_dm_set_service_event_cb.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-end-call1-png -->
| `sdk-image-mtk8676-end-call1-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_end_call1.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-imu-sequence-png -->
| `sdk-image-mtk8676-imu-sequence-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_imu_sequence.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-imu-start-png -->
| `sdk-image-mtk8676-imu-start-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_imu_start.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-imu-stop-png -->
| `sdk-image-mtk8676-imu-stop-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_imu_stop.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-client-deinit-png -->
| `sdk-image-mtk8676-location-client-deinit-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_client_deinit.PNG` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-delete-aiding-data-png -->
| `sdk-image-mtk8676-location-delete-aiding-data-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_delete_aiding_data.PNG` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-get-location-source-png -->
| `sdk-image-mtk8676-location-get-location-source-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_get_location_source.PNG` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-nmea-rmc-png -->
| `sdk-image-mtk8676-location-nmea-rmc-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_nmea_rmc.PNG` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-sequence-png -->
| `sdk-image-mtk8676-location-sequence-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_sequence.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-set-epo-status-png -->
| `sdk-image-mtk8676-location-set-epo-status-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_set_epo_status.PNG` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-set-gps-frequency-png -->
| `sdk-image-mtk8676-location-set-gps-frequency-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_set_gps_frequency.PNG` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-set-location-source-png -->
| `sdk-image-mtk8676-location-set-location-source-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_set_location_source.PNG` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-set-nmea-ind-mask-png -->
| `sdk-image-mtk8676-location-set-nmea-ind-mask-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_set_nmea_ind_mask.PNG` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-start-png -->
| `sdk-image-mtk8676-location-start-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_start.PNG` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-location-stop-png -->
| `sdk-image-mtk8676-location-stop-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_location_stop.PNG` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-multi-channel-scenario-png -->
| `sdk-image-mtk8676-multi-channel-scenario-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_multi_channel_scenario.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-abnormaldetection-2g3gregisterabnormal-png -->
| `sdk-image-mtk8676-nw-abnormaldetection-2g3gregisterabnormal-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_AbnormalDetection_2G3GRegisterAbnormal.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-abnormaldetection-antennaabnormal-png -->
| `sdk-image-mtk8676-nw-abnormaldetection-antennaabnormal-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_AbnormalDetection_AntennaAbnormal.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-abnormaldetection-cfunabnormal-png -->
| `sdk-image-mtk8676-nw-abnormaldetection-cfunabnormal-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_AbnormalDetection_cfunAbnormal.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-abnormaldetection-csdomainabnormal-png -->
| `sdk-image-mtk8676-nw-abnormaldetection-csdomainabnormal-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_AbnormalDetection_CSDomainAbnormal.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-abnormaldetection-datacallabnormal-png -->
| `sdk-image-mtk8676-nw-abnormaldetection-datacallabnormal-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_AbnormalDetection_DataCallAbnormal.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-abnormaldetection-datacallserviceabnormal-png -->
| `sdk-image-mtk8676-nw-abnormaldetection-datacallserviceabnormal-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_AbnormalDetection_DataCallServiceAbnormal.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-abnormaldetection-frequentnetworkswitchabnormal-png -->
| `sdk-image-mtk8676-nw-abnormaldetection-frequentnetworkswitchabnormal-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_AbnormalDetection_FrequentNetworkSwitchAbnormal.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-abnormaldetection-networkregisterabnormal-png -->
| `sdk-image-mtk8676-nw-abnormaldetection-networkregisterabnormal-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_AbnormalDetection_NetworkRegisterAbnormal.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-abnormaldetection-simcardabnormal-png -->
| `sdk-image-mtk8676-nw-abnormaldetection-simcardabnormal-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_AbnormalDetection_SIMCardAbnormal.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-centric-png -->
| `sdk-image-mtk8676-nw-centric-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_centric.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-deinitialization-png -->
| `sdk-image-mtk8676-nw-deinitialization-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_deinitialization.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-initialization-png -->
| `sdk-image-mtk8676-nw-initialization-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_initialization.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-register-reporting-png -->
| `sdk-image-mtk8676-nw-register-reporting-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_register_reporting.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nw-seq-png -->
| `sdk-image-mtk8676-nw-seq-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nw_seq.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nwset-getnetwork-config-png -->
| `sdk-image-mtk8676-nwset-getnetwork-config-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nwset_getnetwork_config.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-nwset-network-configuration-png -->
| `sdk-image-mtk8676-nwset-network-configuration-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_nwset_network_configuration.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-query-signal-strength-png -->
| `sdk-image-mtk8676-query-signal-strength-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_query_signal_strength.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-set-apn-png -->
| `sdk-image-mtk8676-set-apn-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_set_apn.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sim-change-pin-png -->
| `sdk-image-mtk8676-sim-change-pin-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sim_change_pin.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sim-dds-png -->
| `sdk-image-mtk8676-sim-dds-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sim_dds.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sim-deinitialization-png -->
| `sdk-image-mtk8676-sim-deinitialization-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sim_deinitialization.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sim-enable-disable-pin-png -->
| `sdk-image-mtk8676-sim-enable-disable-pin-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sim_enable_disable_pin.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sim-get-function-png -->
| `sdk-image-mtk8676-sim-get-function-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sim_get_function.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sim-initialization-png -->
| `sdk-image-mtk8676-sim-initialization-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sim_initialization.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sim-seq-png -->
| `sdk-image-mtk8676-sim-seq-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sim_seq.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sim-set-service-event-cb-png -->
| `sdk-image-mtk8676-sim-set-service-event-cb-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sim_set_service_event_cb.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sim-unblock-pin-png -->
| `sdk-image-mtk8676-sim-unblock-pin-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sim_unblock_pin.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sim-verify-pin-png -->
| `sdk-image-mtk8676-sim-verify-pin-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sim_verify_pin.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-single-channel-scenario-png -->
| `sdk-image-mtk8676-single-channel-scenario-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_single_channel_scenario.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-deinitialization-png -->
| `sdk-image-mtk8676-sms-deinitialization-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_deinitialization.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-delete-sms-png -->
| `sdk-image-mtk8676-sms-delete-sms-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_delete_sms.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-get-max-store-size-png -->
| `sdk-image-mtk8676-sms-get-max-store-size-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_get_max_store_size.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-get-msg-list-png -->
| `sdk-image-mtk8676-sms-get-msg-list-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_get_msg_list.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-get-sms-center-png -->
| `sdk-image-mtk8676-sms-get-sms-center-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_get_sms_center.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-initialization-png -->
| `sdk-image-mtk8676-sms-initialization-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_initialization.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-read-sms-png -->
| `sdk-image-mtk8676-sms-read-sms-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_read_sms.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-receiving-sms-png -->
| `sdk-image-mtk8676-sms-receiving-sms-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_receiving_sms.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-register-reporting-png -->
| `sdk-image-mtk8676-sms-register-reporting-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_register_reporting.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-send-sms-png -->
| `sdk-image-mtk8676-sms-send-sms-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_send_sms.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-send-sms-async-png -->
| `sdk-image-mtk8676-sms-send-sms-async-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_send_sms_async.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-send-sms-pdu-png -->
| `sdk-image-mtk8676-sms-send-sms-pdu-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_send_sms_pdu.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-send-sms-pdu-async-png -->
| `sdk-image-mtk8676-sms-send-sms-pdu-async-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_send_sms_pdu_async.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-sequence-png -->
| `sdk-image-mtk8676-sms-sequence-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_sequence.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-set-service-event-cb-png -->
| `sdk-image-mtk8676-sms-set-service-event-cb-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_set_service_event_cb.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-set-sms-center-png -->
| `sdk-image-mtk8676-sms-set-sms-center-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_set_sms_center.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-sms-structure-png -->
| `sdk-image-mtk8676-sms-structure-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_sms_structure.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-urc-set-clear-png -->
| `sdk-image-mtk8676-urc-set-clear-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_urc_set_clear.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-voice-init-png -->
| `sdk-image-mtk8676-voice-init-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_voice_init.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-voice-scheme-png -->
| `sdk-image-mtk8676-voice-scheme-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_voice_scheme.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-voice-sequence-png -->
| `sdk-image-mtk8676-voice-sequence-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_voice_sequence.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-voice-set-service-event-cb-png -->
| `sdk-image-mtk8676-voice-set-service-event-cb-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_voice_set_service_event_cb.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-image-mtk8676-voice-uninit-png -->
| `sdk-image-mtk8676-voice-uninit-png` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/assets/sdk/mtk8676_voice_uninit.png` | MT8676 SDK architecture, timing, or sequence image. |
<!-- evidence-index: sdk-example-at-test-at-test-c -->
| `sdk-example-at-test-at-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/at_test/at_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-at-test-makefile -->
| `sdk-example-at-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/at_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-audio-test-audio-test-c -->
| `sdk-example-audio-test-audio-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/audio_test/audio_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-audio-test-makefile -->
| `sdk-example-audio-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/audio_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-data-test-data-test-c -->
| `sdk-example-data-test-data-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/data_test/data_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-data-test-makefile -->
| `sdk-example-data-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/data_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-dm-test-dm-test-c -->
| `sdk-example-dm-test-dm-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/dm_test/dm_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-dm-test-makefile -->
| `sdk-example-dm-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/dm_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-gnss-test-gnss-test-c -->
| `sdk-example-gnss-test-gnss-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/gnss_test/gnss_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-gnss-test-makefile -->
| `sdk-example-gnss-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/gnss_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-imu-test-imu-test-c -->
| `sdk-example-imu-test-imu-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/imu_test/imu_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-imu-test-makefile -->
| `sdk-example-imu-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/imu_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-log-test-log-test-c -->
| `sdk-example-log-test-log-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/log_test/log_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-log-test-makefile -->
| `sdk-example-log-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/log_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-makefile -->
| `sdk-example-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-nw-test-makefile -->
| `sdk-example-nw-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/nw_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-nw-test-nw-test-c -->
| `sdk-example-nw-test-nw-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/nw_test/nw_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-power-test-makefile -->
| `sdk-example-power-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/power_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-power-test-power-test-c -->
| `sdk-example-power-test-power-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/power_test/power_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-sim-test-makefile -->
| `sdk-example-sim-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/sim_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-sim-test-sim-test-c -->
| `sdk-example-sim-test-sim-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/sim_test/sim_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-sms-test-makefile -->
| `sdk-example-sms-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/sms_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-sms-test-sms-test-c -->
| `sdk-example-sms-test-sms-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/sms_test/sms_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-timer-test-makefile -->
| `sdk-example-timer-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/timer_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-timer-test-timer-test-c -->
| `sdk-example-timer-test-timer-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/timer_test/timer_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-voice-test-makefile -->
| `sdk-example-voice-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/voice_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-voice-test-voice-test-c -->
| `sdk-example-voice-test-voice-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/voice_test/voice_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-wakelock-test-makefile -->
| `sdk-example-wakelock-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/wakelock_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-wakelock-test-wakelock-test-c -->
| `sdk-example-wakelock-test-wakelock-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/wakelock_test/wakelock_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-wakeup-test-makefile -->
| `sdk-example-wakeup-test-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/wakeup_test/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-wakeup-test-wakeup-test-c -->
| `sdk-example-wakeup-test-wakeup-test-c` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/examples/wakeup_test/wakeup_test.c` | SDK sample source or Makefile. |
<!-- evidence-index: sdk-example-root-makefile -->
| `sdk-example-root-makefile` | MT8676 | V1.0.166 | primary | mt8676_fact | `docs/mt8676-architecture/sources/sdk/Makefile` | SDK sample source or Makefile. |
<!-- evidence-index: umdp-readme-v1-0-226-txt -->
| `umdp-readme-v1-0-226-txt` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/Readme - V1.0.226.txt` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-config-umdpprocess-ini -->
| `umdp-files-umdp-config-umdpprocess-ini` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/config/umdpprocess.ini` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-fibo-umdp-bb -->
| `umdp-fibo-umdp-bb` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/fibo-umdp.bb` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-config-sdk-version-cfg -->
| `umdp-files-umdp-config-sdk-version-cfg` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/config/sdk_version.cfg` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-logmanager-conf-logmanager-conf -->
| `umdp-files-logmanager-conf-logmanager-conf` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/logmanager_conf/logmanager.conf` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-config-umdploglevel-conf -->
| `umdp-files-umdp-config-umdploglevel-conf` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/config/umdploglevel.conf` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-fb-audio-service -->
| `umdp-files-fb-audio-service` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/fb_audio.service` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-fb-logmgr-service -->
| `umdp-files-fb-logmgr-service` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/fb_logmgr.service` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-fb-modem-service -->
| `umdp-files-fb-modem-service` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/fb_modem.service` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-fb-powermgr-service -->
| `umdp-files-fb-powermgr-service` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/fb_powermgr.service` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-at-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-at-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_at.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-audio-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-audio-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_audio.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-data-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-data-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_data.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-dm-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-dm-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_dm.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-error-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-error-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_error.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-imu-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-imu-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_imu.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-location-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-location-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_location.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-log-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-log-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_log.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-nw-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-nw-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_nw.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-oe-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-oe-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_oe.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-power-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-power-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_power.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-sim-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-sim-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_sim.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-sms-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-sms-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_sms.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-timer-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-timer-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_timer.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-type-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-type-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_type.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-voice-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-voice-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_voice.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-wakelock-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-wakelock-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_wakelock.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-files-umdp-include-fibo-sdk-fibo-wakeup-h -->
| `umdp-files-umdp-include-fibo-sdk-fibo-wakeup-h` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/files/umdp/include/fibo_sdk/fibo_wakeup.h` | UMDP baseline configuration, service, README, or SDK header. |
<!-- evidence-index: umdp-library-service-listing -->
| `umdp-library-service-listing` | MT8676 | V1.0.226 | primary | mt8676_fact | `docs/mt8676-architecture/sources/umdp/deterministic_archive_listing.txt` | Deterministic sorted listing of UMDP libraries and services. |
<!-- evidence-index: original-diagram-01 -->
| `original-diagram-01` | MT8676 | user-provided | diagram_confirmed | mt8676_fact | `docs/mt8676-architecture/assets/original/user_diagram_01.jpg` | User-provided original diagram copied without modification. |
<!-- evidence-index: original-diagram-02 -->
| `original-diagram-02` | MT8676 | user-provided | diagram_confirmed | mt8676_fact | `docs/mt8676-architecture/assets/original/user_diagram_02.jpg` | User-provided original diagram copied without modification. |
<!-- evidence-index: original-diagram-03 -->
| `original-diagram-03` | MT8676 | user-provided | diagram_confirmed | mt8676_fact | `docs/mt8676-architecture/assets/original/user_diagram_03.jpg` | User-provided original diagram copied without modification. |

## 16.5 待确认事项索引

待确认记录不是空白占位，而是证据请求。每一项写明需要补取的工件、可形成的结论、当前不能形成的结论和复核责任域。

| ID | 项目 | 需要补取的工件 | 可形成的结论 | 当前不能形成的结论 | 复核责任域 |
|---|---|---|---|---|---|
<!-- pending-index: term-ipcl-d437f7b -->
| `term-ipcl-d437f7b` | IPCL 的私有展开或绑定 | 当前版本 IDL、配置、启动清单、运行日志或源码 | 确认全称、进程/接口身份和使用边界 | 不能从图中标签推断私有实现、数值合同或责任模块 | 架构/对应域模块负责人 |
<!-- pending-index: term-di-83dc75e -->
| `term-di-83dc75e` | DI 的私有展开或绑定 | 当前版本 IDL、配置、启动清单、运行日志或源码 | 确认全称、进程/接口身份和使用边界 | 不能从图中标签推断私有实现、数值合同或责任模块 | 架构/对应域模块负责人 |
<!-- pending-index: term-fcm-37bd4b4 -->
| `term-fcm-37bd4b4` | FCM 的私有展开或绑定 | 当前版本 IDL、配置、启动清单、运行日志或源码 | 确认全称、进程/接口身份和使用边界 | 不能从图中标签推断私有实现、数值合同或责任模块 | 架构/对应域模块负责人 |
<!-- pending-index: term-dk-7b3ebc3 -->
| `term-dk-7b3ebc3` | DK 的私有展开或绑定 | 当前版本 IDL、配置、启动清单、运行日志或源码 | 确认全称、进程/接口身份和使用边界 | 不能从图中标签推断私有实现、数值合同或责任模块 | 架构/对应域模块负责人 |
<!-- pending-index: mod-fcm-service-e761bea -->
| `mod-fcm-service-e761bea` | FCM Service 的实现关系 | 当前版本接口、配置、进程树、双端日志或抓包 | 确认 occurrence 对应、上下游与资源所有权 | 不能从方框相邻或同名自动合并运行实例 | Cross-domain |
<!-- pending-index: mod-mbos-88110a1 -->
| `mod-mbos-88110a1` | MBOS 的实现关系 | 当前版本接口、配置、进程树、双端日志或抓包 | 确认 occurrence 对应、上下游与资源所有权 | 不能从方框相邻或同名自动合并运行实例 | UOS/Android |
<!-- pending-index: mod-nebula-os-743be1c -->
| `mod-nebula-os-743be1c` | Nebula os 的实现关系 | 当前版本接口、配置、进程树、双端日志或抓包 | 确认 occurrence 对应、上下游与资源所有权 | 不能从方框相邻或同名自动合并运行实例 | Nebula OS |
<!-- pending-index: mod-ipcl-d437f7b -->
| `mod-ipcl-d437f7b` | IPCL 的实现关系 | 当前版本接口、配置、进程树、双端日志或抓包 | 确认 occurrence 对应、上下游与资源所有权 | 不能从方框相邻或同名自动合并运行实例 | Cross-domain、MCU |

## 16.6 索引使用与维护规则

1. 修改正文前先确认对应库存 ID；新增模块、流程或术语必须先更新规范库存，再重新生成本章。
2. 证据 ID 必须能在 manifest 解析；路径只用于定位冻结工件，不把目录名或其他平台内容升级为目标平台事实。
3. 模块索引中的上下游是库存中的证据化关系或明确推断，不因表格同一行而形成额外调用边。
4. 待确认项关闭时应附证据 ID、适用版本和复核人，并同步更新正文置信度。
5. 发布前执行全量测试、确定性双构建、00–16 装配、标准与严格校验及术语扫描。
