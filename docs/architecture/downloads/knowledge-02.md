<!-- chapter-id: 04 -->

# 04 三图模块字典

## 2026-09-20 校订：模块字典的适用范围与新增条目

原字典保留原三图的稳定节点 ID，避免既有业务流程锚点失效。新 MBOS 图的模块、FDBus 端点、配置路径和状态集中加入 [18 章模块表](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/18.html)，不凭相似名字与原图节点自动合并。

| 新证据条目 | 归纳结果 | 字典使用规则 |
|---|---|---|
| MBOSDiagnosticManager | 新图标记 os 层已弃用 | 不再作为新图当前诊断入口；旧图条目是历史视图 |
| DiagnosticService | 新图标记对应服务已去掉 | 不等于 CarDiagnosticService/整机诊断一并移除 |
| MBWindowManagerService | 主要包含三指手势监测 | 不等价于 Android WMS 全部职责 |
| MonitorQnx | 新图连接 mb.diagnostics、mb.can | Qnx 字符串不证明 OS 身份 |
| OfflineConfigStroe | 新图原始拼写，离线配置节点 | 保留拼写检索，实际类名待源码确认 |
| Camera LocalService/RpcService | MT8668 Host 本地与跨域服务 | 分开记录本地 Binder 与 RpcBinder/VSOCK |
| Weston surface/layer/screen | 显示对象及映射关系 | 不与 Android Window/Display ID 混用 |

Camera 来源 [S019 · MT8668_Hypervisor_Camera_User_Manual_CN_V1.0.pdf · PDF第7-8页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0002.html#page-7)；Weston 来源 [U039 · weston介绍和应用.pdf · PDF第9-14页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0021.html#page-9)。以下原字典的“待 MT8676 确认”不应仅因有新材料就批量删掉：只更新能够由本次来源直接覆盖的事实。

---

## 4.1 如何检索和使用

每张卡以不可变 `module-id` 为主键；可搜索模块显示名、别名、occurrence ID、
协议或故障词。先看“证据与可信度”，再沿输入→内部处理→输出定位最早断点。
这里的上游/下游只转述权威清单中的已复核箭头或明确标注的标准机制推断；
未出现直接关系时不会根据方框行列或上下位置补边。

一个逻辑模块可以在多张图或同一图出现多次。卡片合并的是名称/身份索引，
不是把 occurrence 强行合成一个 PID。容器的 children 按 occurrence 分开列出；
图例 occurrence 只解释箭头，不被描述成服务。

## 4.2 全量索引

| module-id | 显示名 | 域/层 | kind | 可信度 | anchor | 首 occurrence |
|---|---|---|---|---|---|---|
| `mod-application-b291beb` | [`Application`](#mod-application-b291beb) | UOS/Android；TBox；SOS/Yocto / Application；Guest(UOS Tbox)；Host(SOS YOCTO)/Application；Guest(UOS Android)/Application | container | diagram-confirmed | `mod-application-b291beb` | `d01-001` |
| `mod-launcher-2aeb566` | [`Launcher`](#mod-launcher-2aeb566) | UOS/Android / Application | runtime | diagram-confirmed | `mod-launcher-2aeb566` | `d01-002` |
| `mod-systemui-20ddbc7` | [`SystemUI`](#mod-systemui-20ddbc7) | UOS/Android；Cross-domain / Application；Framework/JAVA Services | runtime | diagram-confirmed | `mod-systemui-20ddbc7` | `d01-003` |
| `mod-notificationcenter-890b965` | [`NotificationCenter`](#mod-notificationcenter-890b965) | UOS/Android / Application | runtime | diagram-confirmed | `mod-notificationcenter-890b965` | `d01-004` |
| `mod-mediacenter-0583aa9` | [`MediaCenter`](#mod-mediacenter-0583aa9) | UOS/Android / Application | runtime | diagram-confirmed | `mod-mediacenter-0583aa9` | `d01-005` |
| `mod-filemanager-c48f55f` | [`FileManager`](#mod-filemanager-c48f55f) | UOS/Android / Application | runtime | diagram-confirmed | `mod-filemanager-c48f55f` | `d01-006` |
| `mod-taskcube-f54ab9d` | [`TaskCube`](#mod-taskcube-f54ab9d) | UOS/Android / Application | runtime | diagram-confirmed | `mod-taskcube-f54ab9d` | `d01-007` |
| `mod-e-manual-60269ef` | [`E-Manual`](#mod-e-manual-60269ef) | UOS/Android / Application | runtime | diagram-confirmed | `mod-e-manual-60269ef` | `d01-008` |
| `mod-online-video-5a69a97` | [`Online Video`](#mod-online-video-5a69a97) | UOS/Android / Application | runtime | diagram-confirmed | `mod-online-video-5a69a97` | `d01-009` |
| `mod-scenemode-cbaa160` | [`SceneMode`](#mod-scenemode-cbaa160) | UOS/Android / Application | runtime | diagram-confirmed | `mod-scenemode-cbaa160` | `d01-010` |
| `mod-carsettings-67e8e47` | [`CarSettings`](#mod-carsettings-67e8e47) | UOS/Android / Application | runtime | diagram-confirmed | `mod-carsettings-67e8e47` | `d01-011` |
| `mod-factorymode-99f0e9b` | [`FactoryMode`](#mod-factorymode-99f0e9b) | UOS/Android / Application | runtime | diagram-confirmed | `mod-factorymode-99f0e9b` | `d01-012` |
| `mod-hicar-131c64a` | [`Hicar`](#mod-hicar-131c64a) | UOS/Android / Application | runtime | diagram-confirmed | `mod-hicar-131c64a` | `d01-013` |
| `mod-calendar-adab509` | [`Calendar`](#mod-calendar-adab509) | UOS/Android / Application | runtime | diagram-confirmed | `mod-calendar-adab509` | `d01-014` |
| `mod-acsettings-e27f4bb` | [`AcSettings`](#mod-acsettings-e27f4bb) | UOS/Android / Application | runtime | diagram-confirmed | `mod-acsettings-e27f4bb` | `d01-015` |
| `mod-speechagent-36a9bb2` | [`SpeechAgent`](#mod-speechagent-36a9bb2) | UOS/Android / Application | runtime | diagram-confirmed | `mod-speechagent-36a9bb2` | `d01-016` |
| `mod-usercenter-cc190ee` | [`UserCenter`](#mod-usercenter-cc190ee) | UOS/Android / Application | runtime | diagram-confirmed | `mod-usercenter-cc190ee` | `d01-017` |
| `mod-gaodemap-6f5f749` | [`GaoDeMap`](#mod-gaodemap-6f5f749) | UOS/Android / Application | runtime | diagram-confirmed | `mod-gaodemap-6f5f749` | `d01-018` |
| `mod-themestore-297d869` | [`ThemeStore`](#mod-themestore-297d869) | UOS/Android / Application | runtime | diagram-confirmed | `mod-themestore-297d869` | `d01-019` |
| `mod-coreservice-c5a1ef9` | [`CoreService`](#mod-coreservice-c5a1ef9) | UOS/Android / Application | runtime | diagram-confirmed | `mod-coreservice-c5a1ef9` | `d01-020` |
| `mod-ota-825d0cf` | [`OTA`](#mod-ota-825d0cf) | UOS/Android / Application | runtime | diagram-confirmed | `mod-ota-825d0cf` | `d01-021` |
| `mod-smartscene-107ca1f` | [`SmartScene`](#mod-smartscene-107ca1f) | UOS/Android / Application | runtime | diagram-confirmed | `mod-smartscene-107ca1f` | `d01-022` |
| `mod-btphone-ae3380b` | [`BtPhone`](#mod-btphone-ae3380b) | UOS/Android / Application | runtime | diagram-confirmed | `mod-btphone-ae3380b` | `d01-023` |
| `mod-sentrymode-3f154e1` | [`SentryMode`](#mod-sentrymode-3f154e1) | UOS/Android / Application | runtime | diagram-confirmed | `mod-sentrymode-3f154e1` | `d01-024` |
| `mod-crosscountry-9b27666` | [`CrossCountry`](#mod-crosscountry-9b27666) | UOS/Android / Application | runtime | diagram-confirmed | `mod-crosscountry-9b27666` | `d01-025` |
| `mod-mojiweather-4481960` | [`MojiWeather`](#mod-mojiweather-4481960) | UOS/Android / Application | runtime | diagram-confirmed | `mod-mojiweather-4481960` | `d01-026` |
| `mod-changbaktv-4402495` | [`ChangBaKTV`](#mod-changbaktv-4402495) | UOS/Android / Application | runtime | diagram-confirmed | `mod-changbaktv-4402495` | `d01-027` |
| `mod-voice-recognition-5cdde82` | [`Voice Recognition`](#mod-voice-recognition-5cdde82) | UOS/Android / Voice Recognition | container | diagram-confirmed | `mod-voice-recognition-5cdde82` | `d01-028` |
| `mod-iflytek-06d4a81` | [`Iflytek`](#mod-iflytek-06d4a81) | UOS/Android / Voice Recognition | runtime | diagram-confirmed | `mod-iflytek-06d4a81` | `d01-029` |
| `mod-framework-fb001b2` | [`Framework`](#mod-framework-fb001b2) | UOS/Android / Framework | container | diagram-confirmed | `mod-framework-fb001b2` | `d01-030` |
| `mod-java-services-5cc44f3` | [`JAVA Services`](#mod-java-services-5cc44f3) | Cross-domain / Framework/JAVA Services | container | diagram-confirmed | `mod-java-services-5cc44f3` | `d01-031` |
| `mod-activity-manager-47ba02a` | [`Activity Manager`](#mod-activity-manager-47ba02a) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-activity-manager-47ba02a` | `d01-032` |
| `mod-notification-manager-d4f5ee0` | [`Notification Manager`](#mod-notification-manager-d4f5ee0) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-notification-manager-d4f5ee0` | `d01-033` |
| `mod-inputmethod-service-9e9806d` | [`InputMethod Service`](#mod-inputmethod-service-9e9806d) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-inputmethod-service-9e9806d` | `d01-034` |
| `mod-media-0c77aee` | [`Media`](#mod-media-0c77aee) | Cross-domain；UOS/Android / Framework/JAVA Services；Framework/Media；HAL | multi-role | diagram-confirmed | `mod-media-0c77aee` | `d01-035` |
| `mod-wifiservice-f80b168` | [`WifiService`](#mod-wifiservice-f80b168) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-wifiservice-f80b168` | `d01-036` |
| `mod-resource-manager-3e669f4` | [`Resource Manager`](#mod-resource-manager-3e669f4) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-resource-manager-3e669f4` | `d01-038` |
| `mod-input-manager-da67aeb` | [`Input Manager`](#mod-input-manager-da67aeb) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-input-manager-da67aeb` | `d01-039` |
| `mod-window-manager-a35e3f1` | [`Window Manager`](#mod-window-manager-a35e3f1) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-window-manager-a35e3f1` | `d01-040` |
| `mod-usb-service-c479a2a` | [`USB Service`](#mod-usb-service-c479a2a) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-usb-service-c479a2a` | `d01-041` |
| `mod-location-service-be1de74` | [`Location Service`](#mod-location-service-be1de74) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-location-service-be1de74` | `d01-042` |
| `mod-broadcastradio-1c44ba3` | [`BroadcastRadio`](#mod-broadcastradio-1c44ba3) | Cross-domain；UOS/Android / Framework/JAVA Services；HAL | runtime | diagram-confirmed | `mod-broadcastradio-1c44ba3` | `d01-043` |
| `mod-power-manager-dbb635f` | [`Power Manager`](#mod-power-manager-dbb635f) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-power-manager-dbb635f` | `d01-044` |
| `mod-network-service-ac6737c` | [`Network Service`](#mod-network-service-ac6737c) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-network-service-ac6737c` | `d01-045` |
| `mod-telephony-491886e` | [`Telephony`](#mod-telephony-491886e) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-telephony-491886e` | `d01-046` |
| `mod-audioservice-d3b01ad` | [`AudioService`](#mod-audioservice-d3b01ad) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-audioservice-d3b01ad` | `d01-048` |
| `mod-bluetooth-c3b4148` | [`Bluetooth`](#mod-bluetooth-c3b4148) | Cross-domain；UOS/Android / Framework/JAVA Services；HAL | runtime | diagram-confirmed | `mod-bluetooth-c3b4148` | `d01-049` |
| `mod-package-manager-d71e541` | [`Package Manager`](#mod-package-manager-d71e541) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-package-manager-d71e541` | `d01-050` |
| `mod-content-provider-0d39688` | [`Content Provider`](#mod-content-provider-0d39688) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-content-provider-0d39688` | `d01-051` |
| `mod-connectivity-service-d5090eb` | [`Connectivity Service`](#mod-connectivity-service-d5090eb) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-connectivity-service-d5090eb` | `d01-052` |
| `mod-bluetooth-bt-profiles-3f31043` | [`Bluetooth &BT Profiles`](#mod-bluetooth-bt-profiles-3f31043) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-bluetooth-bt-profiles-3f31043` | `d01-053` |
| `mod-storage-manager-5d8d1cf` | [`Storage Manager`](#mod-storage-manager-5d8d1cf) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-storage-manager-5d8d1cf` | `d01-054` |
| `mod-mbos-manager-31d43ea` | [`MBOS Manager`](#mod-mbos-manager-31d43ea) | Cross-domain / Framework/JAVA Services | runtime | diagram-confirmed | `mod-mbos-manager-31d43ea` | `d01-055` |
| `mod-media-scanner-a3ed010` | [`Media Scanner`](#mod-media-scanner-a3ed010) | Cross-domain / Framework/Media | runtime | diagram-confirmed | `mod-media-scanner-a3ed010` | `d01-057` |
| `mod-media-provider-3e0a9e8` | [`Media Provider`](#mod-media-provider-3e0a9e8) | Cross-domain / Framework/Media | runtime | diagram-confirmed | `mod-media-provider-3e0a9e8` | `d01-058` |
| `mod-media-player-2acd9f3` | [`Media Player`](#mod-media-player-2acd9f3) | Cross-domain / Framework/Media | runtime | diagram-confirmed | `mod-media-player-2acd9f3` | `d01-059` |
| `mod-car-services-3ac07fc` | [`Car Services`](#mod-car-services-3ac07fc) | Cross-domain / Framework/Car Services | container | diagram-confirmed | `mod-car-services-3ac07fc` | `d01-060` |
| `mod-car-lib-85f228e` | [`Car Lib`](#mod-car-lib-85f228e) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-car-lib-85f228e` | `d01-061` |
| `mod-carservice-dcf52ad` | [`CarService`](#mod-carservice-dcf52ad) | Cross-domain；UOS/Android / Framework/Car Services；Guest(UOS Android)/Platform；UOS(Android)/Vehicle | runtime | diagram-confirmed | `mod-carservice-dcf52ad` | `d01-062` |
| `mod-carbluetooth-service-9fc3943` | [`CarBluetooth Service`](#mod-carbluetooth-service-9fc3943) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carbluetooth-service-9fc3943` | `d01-063` |
| `mod-carbluetooth-userservice-20b1c98` | [`CarBluetooth UserService`](#mod-carbluetooth-userservice-20b1c98) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carbluetooth-userservice-20b1c98` | `d01-064` |
| `mod-carconfigurationservice-1b8e22e` | [`CarConfigurationService`](#mod-carconfigurationservice-1b8e22e) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carconfigurationservice-1b8e22e` | `d01-065` |
| `mod-carinput-service-df5ca9b` | [`CarInput Service`](#mod-carinput-service-df5ca9b) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carinput-service-df5ca9b` | `d01-066` |
| `mod-radioservice-14d42f6` | [`RadioService`](#mod-radioservice-14d42f6) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-radioservice-14d42f6` | `d01-067` |
| `mod-carlocation-service-903e699` | [`CarLocation Service`](#mod-carlocation-service-903e699) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carlocation-service-903e699` | `d01-068` |
| `mod-carpower-service-5720a7a` | [`CarPower Service`](#mod-carpower-service-5720a7a) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carpower-service-5720a7a` | `d01-069` |
| `mod-carmedia-service-57875a1` | [`CarMedia Service`](#mod-carmedia-service-57875a1) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carmedia-service-57875a1` | `d01-070` |
| `mod-carproperty-service-67a55bf` | [`CarProperty Service`](#mod-carproperty-service-67a55bf) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carproperty-service-67a55bf` | `d01-071` |
| `mod-tboxservice-7fb1cc0` | [`TboxService`](#mod-tboxservice-7fb1cc0) | Cross-domain / Framework/Car Services；Framework/System | runtime | diagram-confirmed | `mod-tboxservice-7fb1cc0` | `d01-072` |
| `mod-cardiagnosticservice-c179a14` | [`CarDiagnosticService`](#mod-cardiagnosticservice-c179a14) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-cardiagnosticservice-c179a14` | `d01-073` |
| `mod-carinfo-service-d3457fd` | [`CarInfo Service`](#mod-carinfo-service-d3457fd) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carinfo-service-d3457fd` | `d01-074` |
| `mod-cardrivingstateservice-fd8e8b7` | [`CarDrivingStateService`](#mod-cardrivingstateservice-fd8e8b7) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-cardrivingstateservice-fd8e8b7` | `d01-075` |
| `mod-carnight-service-c3f3441` | [`CarNight Service`](#mod-carnight-service-c3f3441) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carnight-service-c3f3441` | `d01-076` |
| `mod-carprojection-service-b031954` | [`CarProjection Service`](#mod-carprojection-service-b031954) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carprojection-service-b031954` | `d01-077` |
| `mod-carpowermanagementservice-6684dc9` | [`CarPowermanagementService`](#mod-carpowermanagementservice-6684dc9) | Cross-domain / Framework/Car Services | runtime | diagram-confirmed | `mod-carpowermanagementservice-6684dc9` | `d01-078` |
| `mod-native-services-382b5e8` | [`Native Services`](#mod-native-services-382b5e8) | Cross-domain / Framework/Native Services | container | diagram-confirmed | `mod-native-services-382b5e8` | `d01-079` |
| `mod-surface-flinger-04f3047` | [`Surface Flinger`](#mod-surface-flinger-04f3047) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-surface-flinger-04f3047` | `d01-080` |
| `mod-input-flinger-b2ee0a7` | [`Input Flinger`](#mod-input-flinger-b2ee0a7) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-input-flinger-b2ee0a7` | `d01-081` |
| `mod-mediaserver-cc66649` | [`MediaServer`](#mod-mediaserver-cc66649) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-mediaserver-cc66649` | `d01-082` |
| `mod-camera-service-a5f4b30` | [`Camera Service`](#mod-camera-service-a5f4b30) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-camera-service-a5f4b30` | `d01-083` |
| `mod-boot-animation-b98643d` | [`Boot Animation`](#mod-boot-animation-b98643d) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-boot-animation-b98643d` | `d01-084` |
| `mod-audio-flinger-96df5c1` | [`Audio Flinger`](#mod-audio-flinger-96df5c1) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-audio-flinger-96df5c1` | `d01-085` |
| `mod-audio-policy-2d90656` | [`Audio Policy`](#mod-audio-policy-2d90656) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-audio-policy-2d90656` | `d01-086` |
| `mod-androidauto-service-09eba60` | [`AndroidAuto Service`](#mod-androidauto-service-09eba60) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-androidauto-service-09eba60` | `d01-087` |
| `mod-carplay-service-844da6e` | [`CarPlay Service`](#mod-carplay-service-844da6e) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-carplay-service-844da6e` | `d01-088` |
| `mod-bt-service-9febf5a` | [`BT Service`](#mod-bt-service-9febf5a) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-bt-service-9febf5a` | `d01-089` |
| `mod-broadcastradio-service-97be8b7` | [`BroadcastRadio Service`](#mod-broadcastradio-service-97be8b7) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-broadcastradio-service-97be8b7` | `d01-090` |
| `mod-mbos-service-5a35713` | [`MBOS Service`](#mod-mbos-service-5a35713) | Cross-domain / Framework/Native Services | runtime | diagram-confirmed | `mod-mbos-service-5a35713` | `d01-091` |
| `mod-system-bc0792d` | [`System`](#mod-system-bc0792d) | Cross-domain / Framework/System | container | diagram-confirmed | `mod-system-bc0792d` | `d01-092` |
| `mod-update-engine-9c3a1ab` | [`Update Engine`](#mod-update-engine-9c3a1ab) | Cross-domain / Framework/System | runtime | diagram-confirmed | `mod-update-engine-9c3a1ab` | `d01-093` |
| `mod-avm-75bc0b9` | [`AVM`](#mod-avm-75bc0b9) | Cross-domain；SOS/Yocto / Framework/System；Host(SOS YOCTO)/Application | runtime | diagram-confirmed | `mod-avm-75bc0b9` | `d01-094` |
| `mod-rvc-199fba4` | [`RVC`](#mod-rvc-199fba4) | Cross-domain；SOS/Yocto / Framework/System；Host(SOS YOCTO)/Application | runtime | diagram-confirmed | `mod-rvc-199fba4` | `d01-095` |
| `mod-vold-00d021f` | [`vold`](#mod-vold-00d021f) | Cross-domain / Framework/System | runtime | diagram-confirmed | `mod-vold-00d021f` | `d01-096` |
| `mod-netd-c31208c` | [`netd`](#mod-netd-c31208c) | Cross-domain / Framework/System | runtime | diagram-confirmed | `mod-netd-c31208c` | `d01-098` |
| `mod-lmkd-b87d14a` | [`lmkd`](#mod-lmkd-b87d14a) | Cross-domain / Framework/System | runtime | diagram-confirmed | `mod-lmkd-b87d14a` | `d01-099` |
| `mod-adas-service-b7d4bef` | [`ADAS Service`](#mod-adas-service-b7d4bef) | Cross-domain / Framework/System | runtime | diagram-confirmed | `mod-adas-service-b7d4bef` | `d01-100` |
| `mod-mblog-95eca7d` | [`MBLog`](#mod-mblog-95eca7d) | Cross-domain / Framework/System | runtime | diagram-confirmed | `mod-mblog-95eca7d` | `d01-101` |
| `mod-fcm-service-e761bea` | [`FCM Service`](#mod-fcm-service-e761bea) | Cross-domain / Framework/System | runtime | pending | `mod-fcm-service-e761bea` | `d01-102` |
| `mod-android-runtime-07eedda` | [`Android Runtime`](#mod-android-runtime-07eedda) | UOS/Android / Android Runtime | container | diagram-confirmed | `mod-android-runtime-07eedda` | `d01-103` |
| `mod-art-abfe09c` | [`ART`](#mod-art-abfe09c) | UOS/Android / Android Runtime | runtime | diagram-confirmed | `mod-art-abfe09c` | `d01-104` |
| `mod-core-libraries-28c6bdf` | [`Core Libraries`](#mod-core-libraries-28c6bdf) | UOS/Android / Android Runtime | runtime | diagram-confirmed | `mod-core-libraries-28c6bdf` | `d01-105` |
| `mod-infra-541cc9b` | [`Infra`](#mod-infra-541cc9b) | UOS/Android / Infra | container | diagram-confirmed | `mod-infra-541cc9b` | `d01-106` |
| `mod-fdbus-f41d7c4` | [`FDBus`](#mod-fdbus-f41d7c4) | UOS/Android；Cross-domain；SOS/Yocto；TBox / Infra；Legend；SOS(Yocto)/Communication；UOS(Android)/Communication；UOS(TBox)/Communication | multi-role | diagram-confirmed | `mod-fdbus-f41d7c4` | `d01-107` |
| `mod-canservice-24db020` | [`CanService`](#mod-canservice-24db020) | UOS/Android；SOS/Yocto / Infra；Host(SOS YOCTO)/Infrastructure；SOS(Yocto)/Communication | runtime | diagram-confirmed | `mod-canservice-24db020` | `d01-108` |
| `mod-boost-f7d80df` | [`boost`](#mod-boost-f7d80df) | UOS/Android / Infra | runtime | diagram-confirmed | `mod-boost-f7d80df` | `d01-109` |
| `mod-mb-ipc-86598dd` | [`MB_ipc`](#mod-mb-ipc-86598dd) | UOS/Android / Infra | runtime | diagram-confirmed | `mod-mb-ipc-86598dd` | `d01-110` |
| `mod-protobuf-9d3fdc4` | [`protobuf`](#mod-protobuf-9d3fdc4) | UOS/Android / Infra | runtime | diagram-confirmed | `mod-protobuf-9d3fdc4` | `d01-111` |
| `mod-update-server-60b9399` | [`Update_server`](#mod-update-server-60b9399) | UOS/Android / Infra | runtime | diagram-confirmed | `mod-update-server-60b9399` | `d01-112` |
| `mod-vsomeip-176195d` | [`vsomeip`](#mod-vsomeip-176195d) | UOS/Android / Infra | runtime | diagram-confirmed | `mod-vsomeip-176195d` | `d01-113` |
| `mod-libraries-27c968e` | [`Libraries`](#mod-libraries-27c968e) | UOS/Android / Libraries | container | diagram-confirmed | `mod-libraries-27c968e` | `d01-114` |
| `mod-webkit-d4dc348` | [`Webkit`](#mod-webkit-d4dc348) | UOS/Android / Libraries | runtime | diagram-confirmed | `mod-webkit-d4dc348` | `d01-115` |
| `mod-openmax-04da84a` | [`OpenMax`](#mod-openmax-04da84a) | UOS/Android / Libraries | runtime | diagram-confirmed | `mod-openmax-04da84a` | `d01-116` |
| `mod-bionic-e134f0b` | [`Bionic`](#mod-bionic-e134f0b) | UOS/Android / Libraries | runtime | diagram-confirmed | `mod-bionic-e134f0b` | `d01-117` |
| `mod-carplay-plug-in-acd0a4f` | [`CarPlay plug-in`](#mod-carplay-plug-in-acd0a4f) | UOS/Android / Libraries | runtime | diagram-confirmed | `mod-carplay-plug-in-acd0a4f` | `d01-118` |
| `mod-opengles-889a244` | [`OpenGLES`](#mod-opengles-889a244) | UOS/Android / Libraries | runtime | diagram-confirmed | `mod-opengles-889a244` | `d01-119` |
| `mod-sqlite-9f09ccb` | [`SQLite`](#mod-sqlite-9f09ccb) | UOS/Android / Libraries | runtime | diagram-confirmed | `mod-sqlite-9f09ccb` | `d01-120` |
| `mod-chromium-32166e8` | [`Chromium`](#mod-chromium-32166e8) | UOS/Android / Libraries | runtime | diagram-confirmed | `mod-chromium-32166e8` | `d01-121` |
| `mod-iap2-cb26e3d` | [`iAP2`](#mod-iap2-cb26e3d) | UOS/Android / Libraries | runtime | diagram-confirmed | `mod-iap2-cb26e3d` | `d01-122` |
| `mod-stagefright-plug-3594245` | [`StageFright plug`](#mod-stagefright-plug-3594245) | UOS/Android / Libraries | runtime | diagram-confirmed | `mod-stagefright-plug-3594245` | `d01-123` |
| `mod-bluetooth-stack-1573223` | [`Bluetooth Stack`](#mod-bluetooth-stack-1573223) | UOS/Android / Libraries | runtime | diagram-confirmed | `mod-bluetooth-stack-1573223` | `d01-124` |
| `mod-external-8d10c69` | [`External`](#mod-external-8d10c69) | UOS/Android / External | container | diagram-confirmed | `mod-external-8d10c69` | `d01-125` |
| `mod-exfat-tool-e5e2d51` | [`exfat tool`](#mod-exfat-tool-e5e2d51) | UOS/Android / External | runtime | diagram-confirmed | `mod-exfat-tool-e5e2d51` | `d01-126` |
| `mod-wpa-supplicant-8-24dce0f` | [`wpa_supplicant_8`](#mod-wpa-supplicant-8-24dce0f) | UOS/Android / External | runtime | diagram-confirmed | `mod-wpa-supplicant-8-24dce0f` | `d01-127` |
| `mod-ntfs-tool-2042e3c` | [`ntfs_tool`](#mod-ntfs-tool-2042e3c) | UOS/Android / External | runtime | diagram-confirmed | `mod-ntfs-tool-2042e3c` | `d01-128` |
| `mod-tf-hot-plug-0c48548` | [`tf_hot_plug`](#mod-tf-hot-plug-0c48548) | UOS/Android / External | runtime | diagram-confirmed | `mod-tf-hot-plug-0c48548` | `d01-129` |
| `mod-e2fs-rpgs-3a29c7b` | [`e2fs|rpgs`](#mod-e2fs-rpgs-3a29c7b) | UOS/Android / External | runtime | diagram-confirmed | `mod-e2fs-rpgs-3a29c7b` | `d01-130` |
| `mod-logd-a9b0688` | [`logd`](#mod-logd-a9b0688) | UOS/Android / External | runtime | diagram-confirmed | `mod-logd-a9b0688` | `d01-131` |
| `mod-hal-3c5b432` | [`HAL`](#mod-hal-3c5b432) | UOS/Android / HAL；Guest(UOS Android)/Platform | multi-role | diagram-confirmed | `mod-hal-3c5b432` | `d01-132` |
| `mod-audio-acdac20` | [`Audio`](#mod-audio-acdac20) | UOS/Android；SOS/Yocto / HAL；Host(SOS YOCTO)/Drivers | runtime | diagram-confirmed | `mod-audio-acdac20` | `d01-133` |
| `mod-display-574ff9b` | [`Display`](#mod-display-574ff9b) | UOS/Android；SOS/Yocto / HAL；Host(SOS YOCTO)/Drivers | runtime | diagram-confirmed | `mod-display-574ff9b` | `d01-135` |
| `mod-power-7548ab5` | [`Power`](#mod-power-7548ab5) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-power-7548ab5` | `d01-137` |
| `mod-usb-09716c4` | [`USB`](#mod-usb-09716c4) | UOS/Android / HAL；Kernel | runtime | diagram-confirmed | `mod-usb-09716c4` | `d01-138` |
| `mod-ril-edc8d82` | [`RIL`](#mod-ril-edc8d82) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-ril-edc8d82` | `d01-139` |
| `mod-drm-efc0f9e` | [`DRM`](#mod-drm-efc0f9e) | UOS/Android / HAL；Kernel | runtime | diagram-confirmed | `mod-drm-efc0f9e` | `d01-140` |
| `mod-camera-4da9c9a` | [`Camera`](#mod-camera-4da9c9a) | UOS/Android；SOS/Yocto / HAL；Kernel；Host(SOS YOCTO)/OS Runtime | multi-role | diagram-confirmed | `mod-camera-4da9c9a` | `d01-142` |
| `mod-sensors-711bf35` | [`Sensors`](#mod-sensors-711bf35) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-sensors-711bf35` | `d01-143` |
| `mod-wifi-f35a5a2` | [`WIFI`](#mod-wifi-f35a5a2) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-wifi-f35a5a2` | `d01-144` |
| `mod-lights-646a059` | [`Lights`](#mod-lights-646a059) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-lights-646a059` | `d01-145` |
| `mod-location-d219c68` | [`Location`](#mod-location-d219c68) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-location-d219c68` | `d01-146` |
| `mod-bootctrl-4bc3e0b` | [`BootCtrl`](#mod-bootctrl-4bc3e0b) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-bootctrl-4bc3e0b` | `d01-147` |
| `mod-audiocontrol-e44e0ae` | [`AudioControl`](#mod-audiocontrol-e44e0ae) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-audiocontrol-e44e0ae` | `d01-148` |
| `mod-radio-d432c35` | [`radio`](#mod-radio-d432c35) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-radio-d432c35` | `d01-149` |
| `mod-vehiclehal-4b9388c` | [`VehicleHAL`](#mod-vehiclehal-4b9388c) | UOS/Android / HAL；UOS(Android)/Vehicle | runtime | diagram-confirmed | `mod-vehiclehal-4b9388c` | `d01-150` |
| `mod-tbox-41f3772` | [`Tbox`](#mod-tbox-41f3772) | UOS/Android；TBox / HAL；Guest(UOS Tbox) | multi-role | diagram-confirmed | `mod-tbox-41f3772` | `d01-151` |
| `mod-configstorehal-3af9666` | [`configstoreHAL`](#mod-configstorehal-3af9666) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-configstorehal-3af9666` | `d01-152` |
| `mod-mbgnss-d6e0f37` | [`mbgnss`](#mod-mbgnss-d6e0f37) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-mbgnss-d6e0f37` | `d01-153` |
| `mod-mbsensors-c2a4f47` | [`mbsensors`](#mod-mbsensors-c2a4f47) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-mbsensors-c2a4f47` | `d01-154` |
| `mod-mbos-hal-2cf3361` | [`MBOS HAL`](#mod-mbos-hal-2cf3361) | UOS/Android / HAL；UOS(Android)/Vehicle | runtime | diagram-confirmed | `mod-mbos-hal-2cf3361` | `d01-155` |
| `mod-mblogd-c9ac784` | [`mblogd`](#mod-mblogd-c9ac784) | UOS/Android / HAL | runtime | diagram-confirmed | `mod-mblogd-c9ac784` | `d01-156` |
| `mod-kernel-74808d3` | [`Kernel`](#mod-kernel-74808d3) | UOS/Android / Kernel | container | diagram-confirmed | `mod-kernel-74808d3` | `d01-157` |
| `mod-iap2-mfi-34f0115` | [`iAP2/MFI`](#mod-iap2-mfi-34f0115) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-iap2-mfi-34f0115` | `d01-158` |
| `mod-scheduler-cdcb4d8` | [`Scheduler`](#mod-scheduler-cdcb4d8) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-scheduler-cdcb4d8` | `d01-159` |
| `mod-alsa-8f216ba` | [`ALSA`](#mod-alsa-8f216ba) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-alsa-8f216ba` | `d01-160` |
| `mod-codec-a336769` | [`Codec`](#mod-codec-a336769) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-codec-a336769` | `d01-161` |
| `mod-opengl-64772f9` | [`OpenGL`](#mod-opengl-64772f9) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-opengl-64772f9` | `d01-162` |
| `mod-emmc-ufs-sd-cac7f94` | [`eMMC/UFS/SD`](#mod-emmc-ufs-sd-cac7f94) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-emmc-ufs-sd-cac7f94` | `d01-163` |
| `mod-rtc-4eac074` | [`RTC`](#mod-rtc-4eac074) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-rtc-4eac074` | `d01-164` |
| `mod-mdp-c7d6801` | [`MDP`](#mod-mdp-c7d6801) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-mdp-c7d6801` | `d01-166` |
| `mod-network-53ebc57` | [`Network`](#mod-network-53ebc57) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-network-53ebc57` | `d01-167` |
| `mod-memory-89c8a28` | [`Memory`](#mod-memory-89c8a28) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-memory-89c8a28` | `d01-168` |
| `mod-vfs-9913e8a` | [`VFS`](#mod-vfs-9913e8a) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-vfs-9913e8a` | `d01-169` |
| `mod-sensor-9101fc1` | [`Sensor`](#mod-sensor-9101fc1) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-sensor-9101fc1` | `d01-170` |
| `mod-mt66xx-a4ad0c0` | [`MT66XX`](#mod-mt66xx-a4ad0c0) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-mt66xx-a4ad0c0` | `d01-171` |
| `mod-ccci-7afb523` | [`CCCI`](#mod-ccci-7afb523) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-ccci-7afb523` | `d01-172` |
| `mod-ethernet-23946c7` | [`Ethernet`](#mod-ethernet-23946c7) | UOS/Android；SOS/Yocto / Kernel；Host(SOS YOCTO)/Drivers；Guest(UOS Android)/Platform | runtime | diagram-confirmed | `mod-ethernet-23946c7` | `d01-173` |
| `mod-peripheral-uart-spi-gpio-adc-18f46a9` | [`Peripheral(UART SPI GPIO ADC...)`](#mod-peripheral-uart-spi-gpio-adc-18f46a9) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-peripheral-uart-spi-gpio-adc-18f46a9` | `d01-176` |
| `mod-bootloader-8b92f48` | [`BootLoader`](#mod-bootloader-8b92f48) | UOS/Android / Kernel | runtime | diagram-confirmed | `mod-bootloader-8b92f48` | `d01-177` |
| `mod-3rd-party-d973780` | [`3rd Party`](#mod-3rd-party-d973780) | Cross-domain / Legend | legend | diagram-confirmed | `mod-3rd-party-d973780` | `d01-178` |
| `mod-mcu-98bb0d0` | [`MCU`](#mod-mcu-98bb0d0) | MCU；SoC/Virtualization / MCU/SWCs；Virtualization/Hardware；MCU | multi-role | diagram-confirmed | `mod-mcu-98bb0d0` | `d02-001` |
| `mod-swcs-1a1c498` | [`SWCs`](#mod-swcs-1a1c498) | MCU / MCU/SWCs | container | diagram-confirmed | `mod-swcs-1a1c498` | `d02-002` |
| `mod-item-f20b335` | [`仪表应用`](#mod-item-f20b335) | MCU / MCU/SWCs | runtime | diagram-confirmed | `mod-item-f20b335` | `d02-003` |
| `mod-item-ba91a6f` | [`行车电脑`](#mod-item-ba91a6f) | MCU / MCU/SWCs | runtime | diagram-confirmed | `mod-item-ba91a6f` | `d02-004` |
| `mod-item-226c25e` | [`电源管理`](#mod-item-226c25e) | MCU / MCU/SWCs | runtime | diagram-confirmed | `mod-item-226c25e` | `d02-005` |
| `mod-item-abe38e8` | [`警示灯控制`](#mod-item-abe38e8) | MCU / MCU/SWCs | runtime | diagram-confirmed | `mod-item-abe38e8` | `d02-006` |
| `mod-adas-475098f` | [`ADAS应用`](#mod-adas-475098f) | MCU / MCU/SWCs | runtime | diagram-confirmed | `mod-adas-475098f` | `d02-007` |
| `mod-dsp-e7758dd` | [`DSP控制`](#mod-dsp-e7758dd) | MCU / MCU/SWCs | runtime | diagram-confirmed | `mod-dsp-e7758dd` | `d02-008` |
| `mod-item-b1f62c2` | [`功能安全`](#mod-item-b1f62c2) | MCU / MCU/SWCs | runtime | diagram-confirmed | `mod-item-b1f62c2` | `d02-009` |
| `mod-item-daeb7bd` | [`功能诊断`](#mod-item-daeb7bd) | MCU / MCU/SWCs | runtime | diagram-confirmed | `mod-item-daeb7bd` | `d02-010` |
| `mod-rte-40e8bc6` | [`RTE`](#mod-rte-40e8bc6) | MCU；Cross-domain / MCU/RTE；Legend | multi-role | diagram-confirmed | `mod-rte-40e8bc6` | `d02-011` |
| `mod-e2e-16f7613` | [`E2E`](#mod-e2e-16f7613) | MCU / MCU/RTE | runtime | diagram-confirmed | `mod-e2e-16f7613` | `d02-012` |
| `mod-os-de8aa86` | [`OS`](#mod-os-de8aa86) | MCU / MCU/Platform | runtime | diagram-confirmed | `mod-os-de8aa86` | `d02-013` |
| `mod-bsw-aa26638` | [`BSW`](#mod-bsw-aa26638) | MCU / MCU/Platform | runtime | diagram-confirmed | `mod-bsw-aa26638` | `d02-014` |
| `mod-mcal-96dcb02` | [`MCAL`](#mod-mcal-96dcb02) | MCU / MCU/Platform | container | diagram-confirmed | `mod-mcal-96dcb02` | `d02-015` |
| `mod-can-aa884ac` | [`CAN`](#mod-can-aa884ac) | MCU / MCU/Platform | runtime | diagram-confirmed | `mod-can-aa884ac` | `d02-016` |
| `mod-spi-576bfa9` | [`SPI`](#mod-spi-576bfa9) | MCU；Cross-domain；TBox / MCU/Platform；Legend；MCU；UOS(TBox)/Communication | multi-role | diagram-confirmed | `mod-spi-576bfa9` | `d02-017` |
| `mod-fbl-a9bf6a9` | [`FBL`](#mod-fbl-a9bf6a9) | MCU / MCU/Platform | runtime | diagram-confirmed | `mod-fbl-a9bf6a9` | `d02-018` |
| `mod-guest-uos-tbox-e2b3c90` | [`Guest(UOS Tbox)`](#mod-guest-uos-tbox-e2b3c90) | TBox / Guest(UOS Tbox) | container | diagram-confirmed | `mod-guest-uos-tbox-e2b3c90` | `d02-019` |
| `mod-gps-1776fa3` | [`GPS`](#mod-gps-1776fa3) | TBox / Guest(UOS Tbox) | runtime | diagram-confirmed | `mod-gps-1776fa3` | `d02-022` |
| `mod-telephony-service-2a343ef` | [`Telephony Service`](#mod-telephony-service-2a343ef) | TBox / Guest(UOS Tbox) | runtime | diagram-confirmed | `mod-telephony-service-2a343ef` | `d02-023` |
| `mod-virtual-cominfra-6901da3` | [`Virtual cominfra`](#mod-virtual-cominfra-6901da3) | TBox / Guest(UOS Tbox) | runtime | diagram-confirmed | `mod-virtual-cominfra-6901da3` | `d02-024` |
| `mod-virtual-clk-3e5d962` | [`Virtual CLK`](#mod-virtual-clk-3e5d962) | TBox / Guest(UOS Tbox) | runtime | diagram-confirmed | `mod-virtual-clk-3e5d962` | `d02-025` |
| `mod-kernel-drivers-49f75a9` | [`Kernel& Drivers`](#mod-kernel-drivers-49f75a9) | TBox；UOS/Android / Guest(UOS Tbox)；Guest(UOS Android)/Platform | multi-role | diagram-confirmed | `mod-kernel-drivers-49f75a9` | `d02-026` |
| `mod-ccci-driver-09ef2e7` | [`CCCI Driver`](#mod-ccci-driver-09ef2e7) | TBox / Guest(UOS Tbox) | runtime | diagram-confirmed | `mod-ccci-driver-09ef2e7` | `d02-027` |
| `mod-host-sos-yocto-037600d` | [`Host(SOS YOCTO)`](#mod-host-sos-yocto-037600d) | SOS/Yocto / Host(SOS YOCTO)/Application | container | diagram-confirmed | `mod-host-sos-yocto-037600d` | `d02-028` |
| `mod-cluster-d75dc68` | [`Cluster`](#mod-cluster-d75dc68) | SOS/Yocto / Host(SOS YOCTO)/Application；SOS(Yocto)/Cluster | multi-role | diagram-confirmed | `mod-cluster-d75dc68` | `d02-031` |
| `mod-dms-477e565` | [`DMS`](#mod-dms-477e565) | SOS/Yocto / Host(SOS YOCTO)/Application | runtime | diagram-confirmed | `mod-dms-477e565` | `d02-032` |
| `mod-adas-3e3c94a` | [`ADAS`](#mod-adas-3e3c94a) | SOS/Yocto / Host(SOS YOCTO)/Application | runtime | diagram-confirmed | `mod-adas-3e3c94a` | `d02-034` |
| `mod-os-runtime-7dbe70e` | [`OS Runtime`](#mod-os-runtime-7dbe70e) | SOS/Yocto / Host(SOS YOCTO)/OS Runtime | container | diagram-confirmed | `mod-os-runtime-7dbe70e` | `d02-035` |
| `mod-weston-11378f3` | [`Weston`](#mod-weston-11378f3) | SOS/Yocto / Host(SOS YOCTO)/OS Runtime | runtime | diagram-confirmed | `mod-weston-11378f3` | `d02-036` |
| `mod-gstreamer-237cba2` | [`Gstreamer`](#mod-gstreamer-237cba2) | SOS/Yocto / Host(SOS YOCTO)/OS Runtime | runtime | diagram-confirmed | `mod-gstreamer-237cba2` | `d02-038` |
| `mod-infrastructure-951d9aa` | [`Infrastructure`](#mod-infrastructure-951d9aa) | SOS/Yocto；UOS/Android / Host(SOS YOCTO)/Infrastructure；Guest(UOS Android)/Platform | multi-role | diagram-confirmed | `mod-infrastructure-951d9aa` | `d02-039` |
| `mod-lifecycle-033df3d` | [`Lifecycle`](#mod-lifecycle-033df3d) | SOS/Yocto / Host(SOS YOCTO)/Infrastructure | runtime | diagram-confirmed | `mod-lifecycle-033df3d` | `d02-040` |
| `mod-soa-ipc-89a47d9` | [`SOA/IPC`](#mod-soa-ipc-89a47d9) | SOS/Yocto / Host(SOS YOCTO)/Infrastructure | runtime | diagram-confirmed | `mod-soa-ipc-89a47d9` | `d02-041` |
| `mod-vehicleif-6b34661` | [`VehicleIF`](#mod-vehicleif-6b34661) | SOS/Yocto / Host(SOS YOCTO)/Infrastructure | runtime | diagram-confirmed | `mod-vehicleif-6b34661` | `d02-043` |
| `mod-audiomgr-b835d85` | [`AudioMgr`](#mod-audiomgr-b835d85) | SOS/Yocto / Host(SOS YOCTO)/Infrastructure | runtime | diagram-confirmed | `mod-audiomgr-b835d85` | `d02-044` |
| `mod-logmgr-28d0e52` | [`LogMgr`](#mod-logmgr-28d0e52) | SOS/Yocto / Host(SOS YOCTO)/Infrastructure | runtime | diagram-confirmed | `mod-logmgr-28d0e52` | `d02-045` |
| `mod-drivers-a40ad45` | [`Drivers`](#mod-drivers-a40ad45) | SOS/Yocto / Host(SOS YOCTO)/Drivers | container | diagram-confirmed | `mod-drivers-a40ad45` | `d02-046` |
| `mod-isp-7fcd9ed` | [`ISP`](#mod-isp-7fcd9ed) | SOS/Yocto / Host(SOS YOCTO)/Drivers | runtime | diagram-confirmed | `mod-isp-7fcd9ed` | `d02-047` |
| `mod-guest-uos-android-0a38e26` | [`Guest(UOS Android)`](#mod-guest-uos-android-0a38e26) | UOS/Android / Guest(UOS Android)/Application | container | diagram-confirmed | `mod-guest-uos-android-0a38e26` | `d02-051` |
| `mod-item-1eb005c` | [`车载应用`](#mod-item-1eb005c) | UOS/Android / Guest(UOS Android)/Application | runtime | diagram-confirmed | `mod-item-1eb005c` | `d02-053` |
| `mod-item-411f8eb` | [`生态应用`](#mod-item-411f8eb) | UOS/Android / Guest(UOS Android)/Application | runtime | diagram-confirmed | `mod-item-411f8eb` | `d02-054` |
| `mod-item-8726257` | [`行车记录仪`](#mod-item-8726257) | UOS/Android / Guest(UOS Android)/Application | runtime | diagram-confirmed | `mod-item-8726257` | `d02-055` |
| `mod-item-f815834` | [`地图导航`](#mod-item-f815834) | UOS/Android / Guest(UOS Android)/Application | runtime | diagram-confirmed | `mod-item-f815834` | `d02-056` |
| `mod-item-df3dd6a` | [`语音识别`](#mod-item-df3dd6a) | UOS/Android / Guest(UOS Android)/Application | runtime | diagram-confirmed | `mod-item-df3dd6a` | `d02-057` |
| `mod-item-d040128` | [`远程监控`](#mod-item-d040128) | UOS/Android / Guest(UOS Android)/Application | runtime | diagram-confirmed | `mod-item-d040128` | `d02-058` |
| `mod-aosp-33e68d2` | [`AOSP`](#mod-aosp-33e68d2) | UOS/Android / Guest(UOS Android)/Platform | runtime | diagram-confirmed | `mod-aosp-33e68d2` | `d02-059` |
| `mod-mbos-88110a1` | [`MBOS`](#mod-mbos-88110a1) | UOS/Android / Guest(UOS Android)/Platform | runtime | pending | `mod-mbos-88110a1` | `d02-061` |
| `mod-runtime-c4740e4` | [`Runtime`](#mod-runtime-c4740e4) | UOS/Android / Guest(UOS Android)/Platform | runtime | diagram-confirmed | `mod-runtime-c4740e4` | `d02-062` |
| `mod-nebula-os-743be1c` | [`Nebula os`](#mod-nebula-os-743be1c) | Nebula OS / Nebula os | container | pending | `mod-nebula-os-743be1c` | `d02-067` |
| `mod-uos-vm-process-9c6130d` | [`UOS VM process`](#mod-uos-vm-process-9c6130d) | Nebula OS / Nebula os | runtime | diagram-confirmed | `mod-uos-vm-process-9c6130d` | `d02-068` |
| `mod-sos-vm-process-65b0918` | [`SOS VM process`](#mod-sos-vm-process-65b0918) | Nebula OS / Nebula os | runtime | diagram-confirmed | `mod-sos-vm-process-65b0918` | `d02-069` |
| `mod-micro-kernel-03bfe00` | [`Micro Kernel`](#mod-micro-kernel-03bfe00) | Nebula OS / Nebula os | runtime | diagram-confirmed | `mod-micro-kernel-03bfe00` | `d02-070` |
| `mod-hypervisor-803e245` | [`Hypervisor`](#mod-hypervisor-803e245) | SoC/Virtualization / Virtualization/Hardware | runtime | diagram-confirmed | `mod-hypervisor-803e245` | `d02-071` |
| `mod-soc-f387eb7` | [`SOC`](#mod-soc-f387eb7) | SoC/Virtualization / Virtualization/Hardware | runtime | diagram-confirmed | `mod-soc-f387eb7` | `d02-072` |
| `mod-ipcl-d437f7b` | [`IPCL`](#mod-ipcl-d437f7b) | Cross-domain；MCU / Legend；MCU | multi-role | pending | `mod-ipcl-d437f7b` | `d03-003` |
| `mod-binder-cf26f69` | [`Binder`](#mod-binder-cf26f69) | Cross-domain / Legend | legend | diagram-confirmed | `mod-binder-cf26f69` | `d03-005` |
| `mod-someip-ff7a8a3` | [`SomeIp`](#mod-someip-ff7a8a3) | Cross-domain；UOS/Android / Legend；UOS(Android)/Communication | multi-role | diagram-confirmed | `mod-someip-ff7a8a3` | `d03-006` |
| `mod-attach-1afff01` | [`Attach`](#mod-attach-1afff01) | Cross-domain / Legend | legend | diagram-confirmed | `mod-attach-1afff01` | `d03-007` |
| `mod-api-d93d10f` | [`API`](#mod-api-d93d10f) | Cross-domain / Legend | legend | diagram-confirmed | `mod-api-d93d10f` | `d03-008` |
| `mod-sos-yocto-15eb9a4` | [`SOS(Yocto)`](#mod-sos-yocto-15eb9a4) | SOS/Yocto / SOS(Yocto)/Cluster | container | diagram-confirmed | `mod-sos-yocto-15eb9a4` | `d03-009` |
| `mod-client-1bdd79b` | [`Client`](#mod-client-1bdd79b) | SOS/Yocto / SOS(Yocto)/Cluster | runtime | diagram-confirmed | `mod-client-1bdd79b` | `d03-011` |
| `mod-canclient-092a07f` | [`CanClient`](#mod-canclient-092a07f) | SOS/Yocto / SOS(Yocto)/Cluster | runtime | diagram-confirmed | `mod-canclient-092a07f` | `d03-012` |
| `mod-clients-some-ip-a337b3d` | [`Clients(SOME/IP)`](#mod-clients-some-ip-a337b3d) | SOS/Yocto；UOS/Android / SOS(Yocto)/Communication；UOS(Android)/Communication | runtime | diagram-confirmed | `mod-clients-some-ip-a337b3d` | `d03-014` |
| `mod-doip-32bb927` | [`DoIP`](#mod-doip-32bb927) | SOS/Yocto；UOS/Android / SOS(Yocto)/Communication；UOS(Android)/Communication | runtime | diagram-confirmed | `mod-doip-32bb927` | `d03-015` |
| `mod-routingmanager-some-ip-8b378d6` | [`RoutingManager (SOME/IP守护进程)`](#mod-routingmanager-some-ip-8b378d6) | SOS/Yocto；UOS/Android / SOS(Yocto)/Communication；UOS(Android)/Communication | runtime | diagram-confirmed | `mod-routingmanager-some-ip-8b378d6` | `d03-016` |
| `mod-fdbus-name-server-1a2ac42` | [`FDBus name_server`](#mod-fdbus-name-server-1a2ac42) | SOS/Yocto；UOS/Android；TBox / SOS(Yocto)/Communication；UOS(Android)/Communication；UOS(TBox)/Communication | runtime | diagram-confirmed | `mod-fdbus-name-server-1a2ac42` | `d03-018` |
| `mod-fdbus-host-server-495a163` | [`FDBus host_server`](#mod-fdbus-host-server-495a163) | SOS/Yocto / SOS(Yocto)/Communication | runtime | diagram-confirmed | `mod-fdbus-host-server-495a163` | `d03-019` |
| `mod-uos-android-59df117` | [`UOS(Android)`](#mod-uos-android-59df117) | UOS/Android / UOS(Android)/Application | container | diagram-confirmed | `mod-uos-android-59df117` | `d03-020` |
| `mod-app-7d10434` | [`app`](#mod-app-7d10434) | UOS/Android / UOS(Android)/Application | runtime | diagram-confirmed | `mod-app-7d10434` | `d03-021` |
| `mod-mbos-6367700` | [`mbos架构`](#mod-mbos-6367700) | UOS/Android / UOS(Android)/Vehicle | legend | diagram-confirmed | `mod-mbos-6367700` | `d03-025` |
| `mod-client-hal-proxy-543288a` | [`Client HAL Proxy`](#mod-client-hal-proxy-543288a) | UOS/Android / UOS(Android)/Binder | runtime | diagram-confirmed | `mod-client-hal-proxy-543288a` | `d03-026` |
| `mod-service-hal-proxy-d446b69` | [`Service HAL Proxy`](#mod-service-hal-proxy-d446b69) | UOS/Android / UOS(Android)/Binder | runtime | diagram-confirmed | `mod-service-hal-proxy-d446b69` | `d03-027` |
| `mod-client-proxy-e159392` | [`Client Proxy`](#mod-client-proxy-e159392) | UOS/Android / UOS(Android)/Binder | runtime | diagram-confirmed | `mod-client-proxy-e159392` | `d03-028` |
| `mod-service-stub-4f0623e` | [`Service Stub`](#mod-service-stub-4f0623e) | UOS/Android / UOS(Android)/Binder | runtime | diagram-confirmed | `mod-service-stub-4f0623e` | `d03-029` |
| `mod-di-83dc75e` | [`DI`](#mod-di-83dc75e) | MCU / MCU | container | diagram-confirmed | `mod-di-83dc75e` | `d03-037` |
| `mod-swc-818632e` | [`SWC`](#mod-swc-818632e) | MCU / MCU | runtime | diagram-confirmed | `mod-swc-818632e` | `d03-038` |
| `mod-ivi-ae3827e` | [`IVI`](#mod-ivi-ae3827e) | MCU / MCU | container | diagram-confirmed | `mod-ivi-ae3827e` | `d03-039` |
| `mod-swc-network-acdf359` | [`SWC (Network)`](#mod-swc-network-acdf359) | MCU / MCU | runtime | diagram-confirmed | `mod-swc-network-acdf359` | `d03-040` |
| `mod-com-f33b74e` | [`Com`](#mod-com-f33b74e) | MCU / MCU | runtime | diagram-confirmed | `mod-com-f33b74e` | `d03-042` |
| `mod-vehicle-interface-01da3eb` | [`Vehicle Interface`](#mod-vehicle-interface-01da3eb) | MCU / MCU | runtime | diagram-confirmed | `mod-vehicle-interface-01da3eb` | `d03-043` |
| `mod-feature1-a87fc2a` | [`feature1`](#mod-feature1-a87fc2a) | MCU / MCU | legend | diagram-confirmed | `mod-feature1-a87fc2a` | `d03-044` |
| `mod-feature2-446ad0d` | [`feature2`](#mod-feature2-446ad0d) | MCU / MCU | legend | diagram-confirmed | `mod-feature2-446ad0d` | `d03-045` |
| `mod-uos-tbox-fa2aaf5` | [`UOS(TBox)`](#mod-uos-tbox-fa2aaf5) | TBox / UOS(TBox)/Application | container | diagram-confirmed | `mod-uos-tbox-fa2aaf5` | `d03-048` |
| `mod-tbox-app-3fc1c6b` | [`TBOX-APP`](#mod-tbox-app-3fc1c6b) | TBox / UOS(TBox)/Application | container | diagram-confirmed | `mod-tbox-app-3fc1c6b` | `d03-049` |
| `mod-update-0a25ba5` | [`update`](#mod-update-0a25ba5) | TBox / UOS(TBox)/Application | runtime | diagram-confirmed | `mod-update-0a25ba5` | `d03-050` |
| `mod-xcall-6e02dd5` | [`xcall`](#mod-xcall-6e02dd5) | TBox / UOS(TBox)/Application | runtime | diagram-confirmed | `mod-xcall-6e02dd5` | `d03-051` |
| `mod-health-monitor-c6b1271` | [`health_monitor`](#mod-health-monitor-c6b1271) | TBox / UOS(TBox)/Application | runtime | diagram-confirmed | `mod-health-monitor-c6b1271` | `d03-052` |
| `mod-modem-service-290ee38` | [`modem_service`](#mod-modem-service-290ee38) | TBox / UOS(TBox)/Application | runtime | diagram-confirmed | `mod-modem-service-290ee38` | `d03-053` |
| `mod-syslog-e0543ba` | [`syslog`](#mod-syslog-e0543ba) | TBox / UOS(TBox)/Application | runtime | diagram-confirmed | `mod-syslog-e0543ba` | `d03-054` |
| `mod-dynamic-5452220` | [`dynamic`](#mod-dynamic-5452220) | TBox / UOS(TBox)/Application | runtime | diagram-confirmed | `mod-dynamic-5452220` | `d03-055` |
| `mod-business-6a577a7` | [`business`](#mod-business-6a577a7) | TBox / UOS(TBox)/Application | runtime | diagram-confirmed | `mod-business-6a577a7` | `d03-056` |
| `mod-gnss-server-d46bd4e` | [`gnss_server`](#mod-gnss-server-d46bd4e) | TBox / UOS(TBox)/Application | runtime | diagram-confirmed | `mod-gnss-server-d46bd4e` | `d03-057` |
| `mod-communication-mcu-2bb2d5e` | [`communication (MCU)`](#mod-communication-mcu-2bb2d5e) | TBox / UOS(TBox)/Application | runtime | diagram-confirmed | `mod-communication-mcu-2bb2d5e` | `d03-058` |
| `mod-core-communication-6e340d2` | [`core communication`](#mod-core-communication-6e340d2) | TBox / UOS(TBox)/Application | runtime | diagram-confirmed | `mod-core-communication-6e340d2` | `d03-059` |
| `mod-canservice-dk-can-91af543` | [`CanService (DK CAN)`](#mod-canservice-dk-can-91af543) | TBox / UOS(TBox)/Communication | runtime | diagram-confirmed | `mod-canservice-dk-can-91af543` | `d03-060` |

## 4.3 阅读边界

- “图中存在”不等于“独立进程存在”；实际 PID、线程和服务注册需运行时证据。
- “容器包含”不等于调用；“箭头图例”也不是可启动的服务。
- 标准 Android、Linux、AUTOSAR 或 SOME/IP 机制只解释通常工作方式，
  不升级为 MT8676 私有实现事实。
- `modem_service` 与 `fb_modemServices` 身份分离；图中 `SDK Server` 也不
  等同于任何具体 UMDP 进程。

## 4.4 Android/Application 应用与第三方应用

<!-- module-id: mod-launcher-2aeb566 -->
<a id="mod-launcher-2aeb566"></a>
### `Launcher`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-002，标签 `Launcher`）。Occurrence 角色：d01-002（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] 作为 Home/桌面入口组织应用入口、车机主页和用户返回桌面的落点。
- **处理的数据或资源**：[可信度：标准机制推断] 应用清单、桌面卡片、当前用户、前后台 Task 与可启动 Activity。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 解析入口与用户操作，向 Activity 管理链提交启动请求并维护 Home 可见状态。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常随当前 Android 用户启动；进程回收后由系统按 Home 角色重新创建，项目自启策略待确认。
- **常见故障模式**：[可信度：标准机制推断] Home 角色未解析、主线程阻塞、启动 Intent 被拒绝、窗口已创建但首帧未提交。
- **日志与观测点**：[可信度：标准机制推断] 先对齐用户/进程代际、Activity 启动记录、Window 可见性和首帧时间；最早断点是启动请求是否进入 Activity 管理链。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-notificationcenter-890b965 -->
<a id="mod-notificationcenter-890b965"></a>
### `NotificationCenter`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-004，标签 `NotificationCenter`）。Occurrence 角色：d01-004（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] 聚合通知并提供通知列表、展开、清除和点击分发界面。
- **处理的数据或资源**：[可信度：标准机制推断] 通知记录、渠道、优先级、用户范围、图标文本及 PendingIntent 类动作。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 接收 Notification Manager 分发，按用户和策略过滤排序并驱动通知 UI。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常跟随 Android 用户和 SystemUI/应用生命周期；具体进程归属由包配置确认。
- **常见故障模式**：[可信度：标准机制推断] 通知未发布、被渠道策略拦截、用户范围错误、列表缓存不刷新或点击动作失效。
- **日志与观测点**：[可信度：标准机制推断] 依次核对发布者、Notification Manager 入库/分发、通知中心接收与 UI 更新；最早断点是通知记录是否建立。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mediacenter-0583aa9 -->
<a id="mod-mediacenter-0583aa9"></a>
### `MediaCenter`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-005，标签 `MediaCenter`）。Occurrence 角色：d01-005（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 媒体娱乐应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体源、播放状态、内容目录和渲染资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取媒体娱乐能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 媒体娱乐输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、媒体娱乐状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-filemanager-c48f55f -->
<a id="mod-filemanager-c48f55f"></a>
### `FileManager`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-006，标签 `FileManager`）。Occurrence 角色：d01-006（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 账号内容应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 用户内容、账户状态、配置和界面资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取账号内容能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 账号内容输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、账号内容状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-taskcube-f54ab9d -->
<a id="mod-taskcube-f54ab9d"></a>
### `TaskCube`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-007，标签 `TaskCube`）。Occurrence 角色：d01-007（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 系统入口应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 页面导航、任务状态和窗口内容
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取系统入口能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 系统入口输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、系统入口状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-e-manual-60269ef -->
<a id="mod-e-manual-60269ef"></a>
### `E-Manual`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-008，标签 `E-Manual`）。Occurrence 角色：d01-008（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 账号内容应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 用户内容、账户状态、配置和界面资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取账号内容能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 账号内容输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、账号内容状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-online-video-5a69a97 -->
<a id="mod-online-video-5a69a97"></a>
### `Online Video`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-009，标签 `Online Video`）。Occurrence 角色：d01-009（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 媒体娱乐应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体源、播放状态、内容目录和渲染资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取媒体娱乐能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 媒体娱乐输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、媒体娱乐状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-scenemode-cbaa160 -->
<a id="mod-scenemode-cbaa160"></a>
### `SceneMode`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-010，标签 `SceneMode`）。Occurrence 角色：d01-010（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 车辆控制应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆状态、控制意图、配置和界面模型
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取车辆控制能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 车辆控制输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、车辆控制状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-factorymode-99f0e9b -->
<a id="mod-factorymode-99f0e9b"></a>
### `FactoryMode`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-012，标签 `FactoryMode`）。Occurrence 角色：d01-012（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 工厂制造与产线诊断应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 检测项、诊断结果、标定参数和产线会话
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取工厂制造与产线诊断能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 工厂制造与产线诊断输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、工厂制造与产线诊断状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-hicar-131c64a -->
<a id="mod-hicar-131c64a"></a>
### `Hicar`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-013，标签 `Hicar`）。Occurrence 角色：d01-013（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 手机互联/投屏连接应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 手机会话、投屏状态、媒体通道和连接资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取手机互联/投屏连接能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 手机互联/投屏连接输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、手机互联/投屏连接状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-calendar-adab509 -->
<a id="mod-calendar-adab509"></a>
### `Calendar`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-014，标签 `Calendar`）。Occurrence 角色：d01-014（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 账号内容应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 用户内容、账户状态、配置和界面资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取账号内容能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 账号内容输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、账号内容状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-acsettings-e27f4bb -->
<a id="mod-acsettings-e27f4bb"></a>
### `AcSettings`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-015，标签 `AcSettings`）。Occurrence 角色：d01-015（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 车辆控制应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆状态、控制意图、配置和界面模型
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取车辆控制能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 车辆控制输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、车辆控制状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-speechagent-36a9bb2 -->
<a id="mod-speechagent-36a9bb2"></a>
### `SpeechAgent`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-016，标签 `SpeechAgent`）。Occurrence 角色：d01-016（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 语音交互应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 音频输入、识别意图、会话状态和反馈资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取语音交互能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 语音交互输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、语音交互状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-usercenter-cc190ee -->
<a id="mod-usercenter-cc190ee"></a>
### `UserCenter`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-017，标签 `UserCenter`）。Occurrence 角色：d01-017（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 账号内容应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 用户内容、账户状态、配置和界面资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取账号内容能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 账号内容输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、账号内容状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-gaodemap-6f5f749 -->
<a id="mod-gaodemap-6f5f749"></a>
### `GaoDeMap`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-018，标签 `GaoDeMap`）。Occurrence 角色：d01-018（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 导航出行应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 路线、定位、地图状态和导航界面资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取导航出行能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 导航出行输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、导航出行状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-themestore-297d869 -->
<a id="mod-themestore-297d869"></a>
### `ThemeStore`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-019，标签 `ThemeStore`）。Occurrence 角色：d01-019（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 账号内容应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 用户内容、账户状态、配置和界面资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取账号内容能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 账号内容输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、账号内容状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-coreservice-c5a1ef9 -->
<a id="mod-coreservice-c5a1ef9"></a>
### `CoreService`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-020，标签 `CoreService`）。Occurrence 角色：d01-020（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] 为多项车载应用提供共享的核心业务能力与状态协调入口。
- **处理的数据或资源**：[可信度：标准机制推断] 跨应用公共状态、配置、会话、账号或车辆事件；精确数据合同待接口资料确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 图中未给出内部 API；应从服务注册、调用入口、状态缓存与事件发布四点恢复真实职责。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程/服务所有者和开机阶段待包清单与启动配置确认；重启后需检查 Client 重绑。
- **常见故障模式**：[可信度：标准机制推断] 服务未注册、初始化依赖未 Ready、旧 Client 句柄、缓存未重建或回调未重注册。
- **日志与观测点**：[可信度：标准机制推断] 抓取进程树、服务注册表、调用端超时、服务入口和状态发布；最早断点是服务是否 Ready 而非仅有 PID。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-ota-825d0cf -->
<a id="mod-ota-825d0cf"></a>
### `OTA`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-021，标签 `OTA`）。Occurrence 角色：d01-021（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 系统维护应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 升级任务、版本、进度、约束条件和结果
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取系统维护能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 系统维护输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、系统维护状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-smartscene-107ca1f -->
<a id="mod-smartscene-107ca1f"></a>
### `SmartScene`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-022，标签 `SmartScene`）。Occurrence 角色：d01-022（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 车辆控制应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆状态、控制意图、配置和界面模型
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取车辆控制能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 车辆控制输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、车辆控制状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-btphone-ae3380b -->
<a id="mod-btphone-ae3380b"></a>
### `BtPhone`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-023，标签 `BtPhone`）。Occurrence 角色：d01-023（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 手机互联/投屏连接应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 手机会话、投屏状态、媒体通道和连接资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取手机互联/投屏连接能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 手机互联/投屏连接输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、手机互联/投屏连接状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-sentrymode-3f154e1 -->
<a id="mod-sentrymode-3f154e1"></a>
### `SentryMode`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-024，标签 `SentryMode`）。Occurrence 角色：d01-024（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 车辆控制应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆状态、控制意图、配置和界面模型
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取车辆控制能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 车辆控制输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、车辆控制状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-crosscountry-9b27666 -->
<a id="mod-crosscountry-9b27666"></a>
### `CrossCountry`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-025，标签 `CrossCountry`）。Occurrence 角色：d01-025（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 导航出行应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 路线、定位、地图状态和导航界面资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取导航出行能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 导航出行输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、导航出行状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mojiweather-4481960 -->
<a id="mod-mojiweather-4481960"></a>
### `MojiWeather`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-026，标签 `MojiWeather`）。Occurrence 角色：d01-026（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 账号内容应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 用户内容、账户状态、配置和界面资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取账号内容能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 账号内容输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、账号内容状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-changbaktv-4402495 -->
<a id="mod-changbaktv-4402495"></a>
### `ChangBaKTV`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-027，标签 `ChangBaKTV`）。Occurrence 角色：d01-027（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 媒体娱乐应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体源、播放状态、内容目录和渲染资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取媒体娱乐能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 媒体娱乐输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、媒体娱乐状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-voice-recognition-5cdde82 -->
<a id="mod-voice-recognition-5cdde82"></a>
### `Voice Recognition`

别名：无已登记别名。出现位置：original-diagram-01/Voice Recognition（d01-028，标签 `Voice Recognition`）。Occurrence 角色：d01-028（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-028 直接包含 `Iflytek`。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Voice Recognition。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Voice Recognition 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Voice Recognition` 是功能域或驱动分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该功能域或驱动分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕功能域或驱动分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该功能域或驱动分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该功能域或驱动分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-iflytek-06d4a81 -->
<a id="mod-iflytek-06d4a81"></a>
### `Iflytek`

别名：无已登记别名。出现位置：original-diagram-01/Voice Recognition（d01-029，标签 `Iflytek`）。Occurrence 角色：d01-029（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Voice Recognition。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Voice Recognition。；[可信度：标准机制推断] `Iflytek` 是原图确认的运行节点；名称和位置可确认，内部实现尚无直接资料。
- **处理的数据或资源**：[可信度：标准机制推断] `Iflytek` 处理的数据、资源与接口字段需由源码、IDL、配置或业务 trace 确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 不得从方框相邻关系补写调用链；应从已标注箭头和运行时关联证据还原处理阶段。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 所有者、启动、Ready、重启和重连边界待运行时资料确认。
- **常见故障模式**：[可信度：标准机制推断] 模块未 Ready、接口不匹配、输入陈旧、输出未消费或跨代际状态污染。
- **日志与观测点**：[可信度：标准机制推断] 先取得 `Iflytek` 的进程/服务身份、入口日志和输入输出时间戳；最早断点是确认真实端点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-1eb005c -->
<a id="mod-item-1eb005c"></a>
### `车载应用`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Android)/Application（d02-053，标签 `车载应用`）。Occurrence 角色：d02-053（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Guest(UOS Android)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。；[可信度：标准机制推断] Android 车辆控制应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆状态、控制意图、配置和界面模型
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取车辆控制能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 车辆控制输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、车辆控制状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-411f8eb -->
<a id="mod-item-411f8eb"></a>
### `生态应用`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Android)/Application（d02-054，标签 `生态应用`）。Occurrence 角色：d02-054（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Guest(UOS Android)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。；[可信度：标准机制推断] Android 账号内容应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 用户内容、账户状态、配置和界面资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取账号内容能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 账号内容输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、账号内容状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-8726257 -->
<a id="mod-item-8726257"></a>
### `行车记录仪`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Android)/Application（d02-055，标签 `行车记录仪`）。Occurrence 角色：d02-055（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Guest(UOS Android)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。；[可信度：标准机制推断] Android 车辆观察应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆图像/状态、事件记录和展示资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取车辆观察能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 车辆观察输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、车辆观察状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-f815834 -->
<a id="mod-item-f815834"></a>
### `地图导航`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Android)/Application（d02-056，标签 `地图导航`）。Occurrence 角色：d02-056（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Guest(UOS Android)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。；[可信度：标准机制推断] Android 导航出行应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 路线、定位、地图状态和导航界面资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取导航出行能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 导航出行输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、导航出行状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-df3dd6a -->
<a id="mod-item-df3dd6a"></a>
### `语音识别`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Android)/Application（d02-057，标签 `语音识别`）。Occurrence 角色：d02-057（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Guest(UOS Android)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。；[可信度：标准机制推断] Android 语音交互应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 音频输入、识别意图、会话状态和反馈资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取语音交互能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 语音交互输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、语音交互状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-d040128 -->
<a id="mod-item-d040128"></a>
### `远程监控`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Android)/Application（d02-058，标签 `远程监控`）。Occurrence 角色：d02-058（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Guest(UOS Android)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Application。；[可信度：标准机制推断] Android 车辆观察应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆图像/状态、事件记录和展示资源
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取车辆观察能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 车辆观察输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、车辆观察状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-app-7d10434 -->
<a id="mod-app-7d10434"></a>
### `app`

别名：无已登记别名。出现位置：original-diagram-03/UOS(Android)/Application（d03-021，标签 `app`）。Occurrence 角色：d03-021（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 UOS(Android)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：UOS/Android 上层应用容器，调用车载服务并提交 Android 窗口内容。；[可信度：标准机制推断] Android 系统入口应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 页面导航、任务状态和窗口内容
- **输入**：[可信度：待 MT8676 确认] 用户 Input、Activity Lifecycle、CarService/MBOSHAL 状态与业务事件
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取系统入口能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] Binder/API 请求、Window/Surface 更新和用户结果
- **上游**：[可信度：待 MT8676 确认] Activity Manager；Input Manager；CarService/MBOSHAL。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Window Manager；CarService；MBOS HAL。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Binder；Activity/Window API；项目业务 API。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 系统入口输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、系统入口状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.5 Android/Java Framework 服务与 Media

<!-- module-id: mod-systemui-20ddbc7 -->
<a id="mod-systemui-20ddbc7"></a>
### `SystemUI`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-003，标签 `SystemUI`）；original-diagram-01/Framework/JAVA Services（d01-037，标签 `SystemUI`）。Occurrence 角色：d01-003（runtime）：运行节点标签；是否独立进程仍需运行时证据；d01-037（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；Cross-domain；层级 Application；Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Android 系统栏、系统级窗口与状态提示组件；图中同时出现应用和 Framework 位置。；[可信度：标准机制推断] 承载状态栏、导航栏、系统提示及部分车辆状态的系统级 UI。
- **处理的数据或资源**：[可信度：标准机制推断] 通知、系统状态、车辆状态、窗口 Insets、显示与用户交互事件。
- **输入**：[可信度：待 MT8676 确认] Notification/系统状态、Window 焦点、Input 和电源事件
- **内部处理**：[可信度：标准机制推断] 订阅状态并更新视图，通过 Window 管理链创建系统窗口，再向渲染链提交图层。
- **输出**：[可信度：待 MT8676 确认] SystemUI Window/Surface、系统提示和用户操作事件
- **上游**：[可信度：待 MT8676 确认] Notification Manager；Window Manager；Power Manager。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Surface Flinger；Input Manager；系统设置/服务。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Binder；Window API；Notification API。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 标准 Android 中通常为持久系统进程；崩溃重启后的订阅与缓存恢复需单独验证。
- **常见故障模式**：[可信度：标准机制推断] 状态源未到、缓存代际陈旧、Window token 异常、主线程阻塞、Surface 未出帧。
- **日志与观测点**：[可信度：标准机制推断] 联查 SystemUI 进程、订阅入口、状态模型、Window/Surface 和 SurfaceFlinger 图层；最早断点是源事件是否进入 SystemUI。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-java-services-5cc44f3 -->
<a id="mod-java-services-5cc44f3"></a>
### `JAVA Services`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-031，标签 `JAVA Services`）。Occurrence 角色：d01-031（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-031 直接包含 `Activity Manager`、`Notification Manager`、`InputMethod Service`、`Media`、`WifiService`、`SystemUI`、`Resource Manager`、`Input Manager`、`Window Manager`、`USB Service`、`Location Service`、`BroadcastRadio`、`Power Manager`、`Network Service`、`Telephony`、`AudioService`、`Bluetooth`、`Package Manager`、`Content Provider`、`Connectivity Service`、`Bluetooth &BT Profiles`、`Storage Manager`、`MBOS Manager`。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：JAVA Services 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `JAVA Services` 是软件栈层级分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该软件栈层级分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕软件栈层级分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该软件栈层级分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该软件栈层级分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-activity-manager-47ba02a -->
<a id="mod-activity-manager-47ba02a"></a>
### `Activity Manager`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-032，标签 `Activity Manager`）。Occurrence 角色：d01-032（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Android Activity/Task 与应用进程生命周期管理服务。；[可信度：标准机制推断] 管理 Android 应用进程、Activity/Task、用户与前后台生命周期。
- **处理的数据或资源**：[可信度：标准机制推断] Intent、Task、Activity token、进程优先级、用户和生命周期事件。
- **输入**：[可信度：待 MT8676 确认] 应用启动/停止请求、Intent、进程与 Lifecycle 事件
- **内部处理**：[可信度：标准机制推断] 解析启动目标，协调进程创建、Activity 状态迁移并向 Window Manager 交接可见性。
- **输出**：[可信度：待 MT8676 确认] Activity 状态、Task/进程调度请求和 Lifecycle 回调
- **上游**：[可信度：待 MT8676 确认] Launcher/app；Package Manager。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 应用进程；Window Manager。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Binder；Activity/Task API。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 标准 Android 中由 system_server 承载；其进程代际影响所有应用生命周期会话。
- **常见故障模式**：[可信度：标准机制推断] 启动解析失败、进程反复死亡、Task 状态不一致、ANR 或生命周期回调超时。
- **日志与观测点**：[可信度：标准机制推断] 核对 activity/process/task 状态、ANR trace 与启动时间线；最早断点是请求是否解析到目标组件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-notification-manager-d4f5ee0 -->
<a id="mod-notification-manager-d4f5ee0"></a>
### `Notification Manager`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-033，标签 `Notification Manager`）。Occurrence 角色：d01-033（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Notification Manager 是 Framework 管理边界，维护对应系统资源和客户端状态。
- **处理的数据或资源**：[可信度：标准机制推断] 客户端请求、资源记录、权限、状态缓存和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 system_server 或已注册服务宿主中仲裁资源并调用下层。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常随其宿主系统进程存在；实际进程归属由服务注册表确认。
- **常见故障模式**：[可信度：标准机制推断] 服务未注册、权限拒绝、状态表不一致、回调死亡或下层失败。
- **日志与观测点**：[可信度：标准机制推断] 检查服务注册、宿主进程、请求入口、状态表和下层结果；最早断点是请求是否进入管理器。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-inputmethod-service-9e9806d -->
<a id="mod-inputmethod-service-9e9806d"></a>
### `InputMethod Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-034，标签 `InputMethod Service`）。Occurrence 角色：d01-034（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Android 输入 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 输入请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 输入服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→输入入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-wifiservice-f80b168 -->
<a id="mod-wifiservice-f80b168"></a>
### `WifiService`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-036，标签 `WifiService`）；original-diagram-01/Framework/JAVA Services（d01-047，标签 `WifiService`）。Occurrence 角色：d01-036（runtime）：运行节点标签；是否独立进程仍需运行时证据；d01-047（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Android 网络连接 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 网络连接请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。 图 1 中该标签重复出现；只能确认两个 occurrence，不能确认是同一实例，也不能确认是有意拆分，需服务注册与进程树证明。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 网络连接服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→网络连接入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-resource-manager-3e669f4 -->
<a id="mod-resource-manager-3e669f4"></a>
### `Resource Manager`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-038，标签 `Resource Manager`）。Occurrence 角色：d01-038（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Resource Manager 是 Framework 管理边界，维护对应系统资源和客户端状态。
- **处理的数据或资源**：[可信度：标准机制推断] 客户端请求、资源记录、权限、状态缓存和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 system_server 或已注册服务宿主中仲裁资源并调用下层。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常随其宿主系统进程存在；实际进程归属由服务注册表确认。
- **常见故障模式**：[可信度：标准机制推断] 服务未注册、权限拒绝、状态表不一致、回调死亡或下层失败。
- **日志与观测点**：[可信度：标准机制推断] 检查服务注册、宿主进程、请求入口、状态表和下层结果；最早断点是请求是否进入管理器。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-input-manager-da67aeb -->
<a id="mod-input-manager-da67aeb"></a>
### `Input Manager`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-039，标签 `Input Manager`）。Occurrence 角色：d01-039（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] 接收、分类并按焦点把触摸、按键等输入事件分派给目标窗口。
- **处理的数据或资源**：[可信度：标准机制推断] 输入设备、按键/触摸事件、焦点窗口、输入通道和超时状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 标准机制中经 InputReader/InputDispatcher 完成读取、策略过滤、命中测试与分发。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常属于系统服务生命周期；输入设备热插拔和窗口通道死亡会重建相关状态。
- **常见故障模式**：[可信度：标准机制推断] 设备未注册、事件未读、焦点错误、输入通道阻塞或分发超时。
- **日志与观测点**：[可信度：标准机制推断] 按设备节点→InputReader→Dispatcher→焦点窗口→应用回调追踪；最早断点是原始事件是否被读取。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-window-manager-a35e3f1 -->
<a id="mod-window-manager-a35e3f1"></a>
### `Window Manager`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-040，标签 `Window Manager`）。Occurrence 角色：d01-040（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Android Window、焦点、层级和 SurfaceControl 事务管理服务。；[可信度：标准机制推断] 管理窗口层级、焦点、可见性、旋转与显示区域，并连接应用窗口和 Surface。
- **处理的数据或资源**：[可信度：标准机制推断] Window token、布局参数、Display、焦点、Insets、SurfaceControl 事务。
- **输入**：[可信度：待 MT8676 确认] 应用 Window/Layout 请求、Input 焦点、Display 配置
- **内部处理**：[可信度：标准机制推断] 验证 token，计算布局/层级并把 SurfaceControl 事务提交给 SurfaceFlinger。
- **输出**：[可信度：待 MT8676 确认] SurfaceControl/Layer 事务、窗口状态与焦点变化
- **上游**：[可信度：待 MT8676 确认] Activity Manager；app/SystemUI；Input Manager。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Surface Flinger；Input Flinger；Display。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Binder；Window API；SurfaceControl。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 标准 Android 中由 system_server 承载；显示重配和客户端死亡会触发窗口清理。
- **常见故障模式**：[可信度：标准机制推断] token 无效、焦点卡死、窗口可见但无 Surface、事务未提交或旋转状态不同步。
- **日志与观测点**：[可信度：标准机制推断] 联查窗口树、焦点、SurfaceControl、显示配置和 SurfaceFlinger；最早断点是窗口是否进入可见窗口树。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-usb-service-c479a2a -->
<a id="mod-usb-service-c479a2a"></a>
### `USB Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-041，标签 `USB Service`）。Occurrence 角色：d01-041（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Android 系统服务 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 系统服务请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 系统服务服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→系统服务入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-location-service-be1de74 -->
<a id="mod-location-service-be1de74"></a>
### `Location Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-042，标签 `Location Service`）。Occurrence 角色：d01-042（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Android 系统服务 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 系统服务请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 系统服务服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→系统服务入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-power-manager-dbb635f -->
<a id="mod-power-manager-dbb635f"></a>
### `Power Manager`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-044，标签 `Power Manager`）。Occurrence 角色：d01-044（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Power Manager 是 Framework 管理边界，维护对应系统资源和客户端状态。
- **处理的数据或资源**：[可信度：标准机制推断] 客户端请求、资源记录、权限、状态缓存和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 system_server 或已注册服务宿主中仲裁资源并调用下层。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常随其宿主系统进程存在；实际进程归属由服务注册表确认。
- **常见故障模式**：[可信度：标准机制推断] 服务未注册、权限拒绝、状态表不一致、回调死亡或下层失败。
- **日志与观测点**：[可信度：标准机制推断] 检查服务注册、宿主进程、请求入口、状态表和下层结果；最早断点是请求是否进入管理器。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-network-service-ac6737c -->
<a id="mod-network-service-ac6737c"></a>
### `Network Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-045，标签 `Network Service`）。Occurrence 角色：d01-045（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Android 网络连接 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 网络连接请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 网络连接服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→网络连接入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-telephony-491886e -->
<a id="mod-telephony-491886e"></a>
### `Telephony`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-046，标签 `Telephony`）。Occurrence 角色：d01-046（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Android 网络连接 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 网络连接请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 网络连接服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→网络连接入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-audioservice-d3b01ad -->
<a id="mod-audioservice-d3b01ad"></a>
### `AudioService`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-048，标签 `AudioService`）。Occurrence 角色：d01-048（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Android 媒体音频 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体音频请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 媒体音频服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→媒体音频入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-package-manager-d71e541 -->
<a id="mod-package-manager-d71e541"></a>
### `Package Manager`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-050，标签 `Package Manager`）。Occurrence 角色：d01-050（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Package Manager 是 Framework 管理边界，维护对应系统资源和客户端状态。
- **处理的数据或资源**：[可信度：标准机制推断] 客户端请求、资源记录、权限、状态缓存和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 system_server 或已注册服务宿主中仲裁资源并调用下层。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常随其宿主系统进程存在；实际进程归属由服务注册表确认。
- **常见故障模式**：[可信度：标准机制推断] 服务未注册、权限拒绝、状态表不一致、回调死亡或下层失败。
- **日志与观测点**：[可信度：标准机制推断] 检查服务注册、宿主进程、请求入口、状态表和下层结果；最早断点是请求是否进入管理器。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-content-provider-0d39688 -->
<a id="mod-content-provider-0d39688"></a>
### `Content Provider`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-051，标签 `Content Provider`）。Occurrence 角色：d01-051（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Content Provider 管理结构化内容及查询/更新接口，并由 Android 进程承载。
- **处理的数据或资源**：[可信度：标准机制推断] URI、行/对象、数据库事务、权限和变更通知。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者后执行查询/写入并发布内容变化。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] Provider 由所属应用进程承载，随该宿主进程创建/回收。
- **常见故障模式**：[可信度：标准机制推断] URI/权限错误、数据库锁、事务失败、索引陈旧或通知丢失。
- **日志与观测点**：[可信度：标准机制推断] 检查宿主进程、Provider 调用、数据库事务和 notify；最早断点是 URI 请求是否到达 Provider。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-connectivity-service-d5090eb -->
<a id="mod-connectivity-service-d5090eb"></a>
### `Connectivity Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-052，标签 `Connectivity Service`）。Occurrence 角色：d01-052（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Android 网络连接 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 网络连接请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 网络连接服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→网络连接入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-bluetooth-bt-profiles-3f31043 -->
<a id="mod-bluetooth-bt-profiles-3f31043"></a>
### `Bluetooth &BT Profiles`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-053，标签 `Bluetooth &BT Profiles`）。Occurrence 角色：d01-053（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Android 网络连接 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 网络连接请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 网络连接服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→网络连接入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-storage-manager-5d8d1cf -->
<a id="mod-storage-manager-5d8d1cf"></a>
### `Storage Manager`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-054，标签 `Storage Manager`）。Occurrence 角色：d01-054（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/JAVA Services。；[可信度：标准机制推断] Storage Manager 是 Framework 管理边界，维护对应系统资源和客户端状态。
- **处理的数据或资源**：[可信度：标准机制推断] 客户端请求、资源记录、权限、状态缓存和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 system_server 或已注册服务宿主中仲裁资源并调用下层。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常随其宿主系统进程存在；实际进程归属由服务注册表确认。
- **常见故障模式**：[可信度：标准机制推断] 服务未注册、权限拒绝、状态表不一致、回调死亡或下层失败。
- **日志与观测点**：[可信度：标准机制推断] 检查服务注册、宿主进程、请求入口、状态表和下层结果；最早断点是请求是否进入管理器。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mbos-manager-31d43ea -->
<a id="mod-mbos-manager-31d43ea"></a>
### `MBOS Manager`

<!-- explanation-refresh:mbos-manager -->
**资料核对后的架构解释（2026-09-20）**

用户 MBOS 图把管理入口展开为 Monitor、Ipc、Window、TBox、Configstore 等 Manager；MBOSDiagnosticManager 注释为 os 层已弃用。保留原字典 MBOS Manager 聚合节点，只在解释中标明当前图示成员与退役状态；不将该聚合框认定为一个独立进程。具体 Manager→Service 绑定需 AIDL/源码，不能由上下排列自动补边。[MBOS-20260920 · 盟博OS架构-用户提供-20260920.png](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0022.html)
<!-- /explanation-refresh -->


别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-055，标签 `MBOS Manager`）。Occurrence 角色：d01-055（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/JAVA Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：用户补图确认 Monitor/Ipc/Window/TBox/Configstore 等管理入口，DiagnosticManager 的 os 层已弃用。聚合节点不等于独立进程；实际接口与宿主仍待版本证据。[MBOS-20260920 · 盟博OS架构-用户提供-20260920.png](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0022.html)
- **处理的数据或资源**：[可信度：待 MT8676 确认] 客户端请求、资源记录、权限、状态缓存和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：新图只确认容器级 Binder 边界；未提供 Manager 的宿主进程证据，不据此断言全部运行于 system_server。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：待 MT8676 确认] 通常随其宿主系统进程存在；实际进程归属由服务注册表确认。
- **常见故障模式**：[可信度：待 MT8676 确认] 服务未注册、权限拒绝、状态表不一致、回调死亡或下层失败。
- **日志与观测点**：[可信度：待 MT8676 确认] 检查服务注册、宿主进程、请求入口、状态表和下层结果；最早断点是请求是否进入管理器。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。 [可信度：待 MT8676 确认] 私有接口、端点身份、参数和恢复策略均待 MT8676 确认。

<!-- module-id: mod-media-scanner-a3ed010 -->
<a id="mod-media-scanner-a3ed010"></a>
### `Media Scanner`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Media（d01-057，标签 `Media Scanner`）。Occurrence 角色：d01-057（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Media。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Media。；[可信度：标准机制推断] 扫描卷中文件并把媒体元数据写入 Media Provider 索引。
- **处理的数据或资源**：[可信度：标准机制推断] 卷状态、文件路径、MIME/标签、扫描代际和媒体数据库记录。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由挂载/显式扫描触发，遍历文件、解析元数据并更新 Provider。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 按扫描任务存在；执行线程/进程归属需包与运行记录确认。
- **常见故障模式**：[可信度：标准机制推断] 卷未挂载、扫描未触发、文件权限/解析失败、索引未提交或重复记录。
- **日志与观测点**：[可信度：标准机制推断] 按卷事件→扫描任务→文件计数→Media Provider 事务检查；最早断点是扫描触发是否产生。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-media-provider-3e0a9e8 -->
<a id="mod-media-provider-3e0a9e8"></a>
### `Media Provider`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Media（d01-058，标签 `Media Provider`）。Occurrence 角色：d01-058（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Media。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Media。；[可信度：标准机制推断] Media Provider 管理结构化内容及查询/更新接口，并由 Android 进程承载。
- **处理的数据或资源**：[可信度：标准机制推断] URI、行/对象、数据库事务、权限和变更通知。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者后执行查询/写入并发布内容变化。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] Provider 由所属应用进程承载，随该宿主进程创建/回收。
- **常见故障模式**：[可信度：标准机制推断] URI/权限错误、数据库锁、事务失败、索引陈旧或通知丢失。
- **日志与观测点**：[可信度：标准机制推断] 检查宿主进程、Provider 调用、数据库事务和 notify；最早断点是 URI 请求是否到达 Provider。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-media-player-2acd9f3 -->
<a id="mod-media-player-2acd9f3"></a>
### `Media Player`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Media（d01-059，标签 `Media Player`）。Occurrence 角色：d01-059（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Media。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Media。；[可信度：标准机制推断] Android 媒体音频 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体音频请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 媒体音频服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→媒体音频入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.6 Car Lib、CarService 与车辆子服务

<!-- module-id: mod-carsettings-67e8e47 -->
<a id="mod-carsettings-67e8e47"></a>
### `CarSettings`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-011，标签 `CarSettings`）。Occurrence 角色：d01-011（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Application。；[可信度：标准机制推断] Android 车辆控制应用，承载对应用户功能；分类来自人工审阅的模块表和 UOS/Android 域，不由名称子串推断。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆状态、控制意图、配置和界面模型
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 经公开 Android Framework 或经确认的车辆接口获取车辆控制能力，更新业务状态并提交窗口内容；私有绑定待证据确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Android 包、用户和实际 Activity/Service 宿主生命周期；常驻策略以包配置为准。
- **常见故障模式**：[可信度：标准机制推断] 车辆控制输入未到、权限/依赖失败、主线程阻塞、状态模型或首帧异常。
- **日志与观测点**：[可信度：标准机制推断] 检查 Android 应用宿主、业务入口、车辆控制状态模型、窗口和首帧；最早断点是用户动作是否进入业务状态机。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-car-services-3ac07fc -->
<a id="mod-car-services-3ac07fc"></a>
### `Car Services`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-060，标签 `Car Services`）。Occurrence 角色：d01-060（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-060 直接包含 `Car Lib`、`CarService`、`CarBluetooth Service`、`CarBluetooth UserService`、`CarConfigurationService`、`CarInput Service`、`RadioService`、`CarLocation Service`、`CarPower Service`、`CarMedia Service`、`CarProperty Service`、`TboxService`、`CarDiagnosticService`、`CarInfo Service`、`CarDrivingStateService`、`CarNight Service`、`CarProjection Service`、`CarPowermanagementService`。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Car Services 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Car Services` 是软件栈层级分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该软件栈层级分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕软件栈层级分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该软件栈层级分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该软件栈层级分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-car-lib-85f228e -->
<a id="mod-car-lib-85f228e"></a>
### `Car Lib`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-061，标签 `Car Lib`）。Occurrence 角色：d01-061（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] Car Lib 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carservice-dcf52ad -->
<a id="mod-carservice-dcf52ad"></a>
### `CarService`

别名：`Car Service`。出现位置：original-diagram-01/Framework/Car Services（d01-062，标签 `Car Service`）；original-diagram-02/Guest(UOS Android)/Platform（d02-060，标签 `CarService`）；original-diagram-03/UOS(Android)/Vehicle（d03-022，标签 `CarService`）。Occurrence 角色：d01-062（runtime）：运行节点标签；是否独立进程仍需运行时证据；d02-060（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-022（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；UOS/Android；层级 Framework/Car Services；Guest(UOS Android)/Platform；UOS(Android)/Vehicle。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain / UOS/Android，层级为 Framework/Car Services / Guest(UOS Android)/Platform / UOS(Android)/Vehicle。；[可信度：标准机制推断] Android 车辆框架核心服务，向应用暴露车辆能力并协调 Car 子服务与 VehicleHAL。
- **处理的数据或资源**：[可信度：标准机制推断] Vehicle Property、用户/电源/驾驶状态、输入、媒体、诊断和投影会话。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按能力路由到各 Car 子服务；车辆属性链经 CarProperty Service 与 VehicleHAL 做 GET/SET/SUBSCRIBE。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常随 Android 汽车服务启动；服务重启会使 Binder Client、订阅和属性缓存需要重建。
- **常见故障模式**：[可信度：标准机制推断] 服务未注册、子服务未 Ready、Vehicle Property 映射错误、Binder 死亡或订阅丢失。
- **日志与观测点**：[可信度：标准机制推断] 对齐 CarService PID/注册、子服务入口、VehicleHAL 请求与回调；最早断点是应用调用是否到达对应 Car 子服务。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carbluetooth-service-9fc3943 -->
<a id="mod-carbluetooth-service-9fc3943"></a>
### `CarBluetooth Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-063，标签 `CarBluetooth Service`）。Occurrence 角色：d01-063（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 协调车辆场景中的蓝牙连接、Profile 状态与 CarService 侧策略。
- **处理的数据或资源**：[可信度：标准机制推断] 蓝牙适配器/设备、Profile、配对、连接、通话与媒体状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 Bluetooth Framework/Stack；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 适配器未 Ready、Profile 状态不同步、用户切换后旧连接或回调丢失。
- **日志与观测点**：[可信度：标准机制推断] 按 适配器状态→Profile 连接→CarBluetooth Service 状态→消费者回调 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carbluetooth-userservice-20b1c98 -->
<a id="mod-carbluetooth-userservice-20b1c98"></a>
### `CarBluetooth UserService`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-064，标签 `CarBluetooth UserService`）。Occurrence 角色：d01-064（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 把蓝牙能力按 Android 用户隔离并处理用户切换时的状态迁移。
- **处理的数据或资源**：[可信度：标准机制推断] 当前用户、用户解锁状态、设备归属、配对记录和 Profile 会话。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 CarBluetooth Service/用户生命周期；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 用户 ID 错配、切换后旧对象未释放、未解锁用户访问或状态串用户。
- **日志与观测点**：[可信度：标准机制推断] 按 用户切换事件→UserService 实例代际→设备/连接归属→回调目标用户 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carconfigurationservice-1b8e22e -->
<a id="mod-carconfigurationservice-1b8e22e"></a>
### `CarConfigurationService`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-065，标签 `CarConfigurationService`）。Occurrence 角色：d01-065（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 向车载应用提供车辆/平台配置读取与变化通知边界。
- **处理的数据或资源**：[可信度：标准机制推断] 配置键、车型/区域/功能开关、版本和变化代际。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 配置存储或厂商配置提供端；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 键缺失、版本不匹配、缓存未失效、默认值掩盖真实配置或事件未发布。
- **日志与观测点**：[可信度：标准机制推断] 按 配置源版本→读取入参→缓存命中→返回值/变化通知 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carinput-service-df5ca9b -->
<a id="mod-carinput-service-df5ca9b"></a>
### `CarInput Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-066，标签 `CarInput Service`）。Occurrence 角色：d01-066（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 把车辆按键、旋钮等输入转换为 Android 输入或车载业务事件。
- **处理的数据或资源**：[可信度：标准机制推断] 按键码、旋钮增量、长短按、时间戳、设备/显示目标和焦点。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 Input Manager/VehicleHAL 输入端；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 输入源无事件、键值映射错误、焦点目标错误、重复/丢事件或长按状态卡死。
- **日志与观测点**：[可信度：标准机制推断] 按 原始输入→VehicleHAL/输入适配→CarInput Service→目标窗口/业务 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-radioservice-14d42f6 -->
<a id="mod-radioservice-14d42f6"></a>
### `RadioService`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-067，标签 `RadioService`）。Occurrence 角色：d01-067（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 封装广播收音机调谐、节目、频段与播放状态。
- **处理的数据或资源**：[可信度：标准机制推断] 频段、频点、节目列表、信号质量、音频源和收藏状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 BroadcastRadio Service/HAL；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 调谐超时、节目列表陈旧、信号质量异常、音源路由未切换或回调丢失。
- **日志与观测点**：[可信度：标准机制推断] 按 调谐请求→RadioService→BroadcastRadio HAL→节目/音频回读 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carlocation-service-903e699 -->
<a id="mod-carlocation-service-903e699"></a>
### `CarLocation Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-068，标签 `CarLocation Service`）。Occurrence 角色：d01-068（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 面向车辆应用提供定位状态并协调车辆定位能力。
- **处理的数据或资源**：[可信度：标准机制推断] 经纬度、速度、航向、精度、时间戳、定位源与可用状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 Location Service/GNSS 或车辆定位端；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 定位源未 Ready、时间戳陈旧、坐标/单位错误、权限拒绝或回调停止。
- **日志与观测点**：[可信度：标准机制推断] 按 定位源→Location Service→CarLocation Service→应用回调及新鲜度 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carpower-service-5720a7a -->
<a id="mod-carpower-service-5720a7a"></a>
### `CarPower Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-069，标签 `CarPower Service`）。Occurrence 角色：d01-069（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 协调 Android 汽车电源状态、唤醒/休眠准备和应用电源回调。
- **处理的数据或资源**：[可信度：标准机制推断] 电源状态、唤醒原因、关机准备、超时请求和参与者完成状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 VehicleHAL/Power HAL/电源控制端；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 状态跳变、参与者未完成、休眠条件不满足、唤醒原因丢失或回调代际错误。
- **日志与观测点**：[可信度：标准机制推断] 按 车辆电源事件→CarPower Service 状态机→参与者回调→下层确认 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carmedia-service-57875a1 -->
<a id="mod-carmedia-service-57875a1"></a>
### `CarMedia Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-070，标签 `CarMedia Service`）。Occurrence 角色：d01-070（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 协调车载媒体源、当前播放组件与按用户/区域的媒体状态。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体源、会话、播放状态、浏览根、用户/区域和音频焦点关联。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 MediaSession/AudioService/媒体应用；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 媒体源解析失败、Session 死亡、用户/区域错配、播放状态陈旧或焦点不同步。
- **日志与观测点**：[可信度：标准机制推断] 按 媒体选择→CarMedia Service→目标 Session→播放/Audio 状态回读 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carproperty-service-67a55bf -->
<a id="mod-carproperty-service-67a55bf"></a>
### `CarProperty Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-071，标签 `CarProperty Service`）。Occurrence 角色：d01-071（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 管理 Vehicle Property 的 GET、SET、SUBSCRIBE、缓存和 Client 分发。
- **处理的数据或资源**：[可信度：标准机制推断] propertyId、areaId、value、status、timestamp、采样率和订阅者。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 VehicleHAL；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 属性/区域不支持、类型或缩放错误、SET 无回读、事件陈旧或订阅未恢复。
- **日志与观测点**：[可信度：标准机制推断] 按 Client 请求→CarProperty Service→VehicleHAL→属性事件/回读→Client 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-cardiagnosticservice-c179a14 -->
<a id="mod-cardiagnosticservice-c179a14"></a>
### `CarDiagnosticService`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-073，标签 `CarDiagnosticService`）。Occurrence 角色：d01-073（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 向车载应用提供诊断状态、故障码或诊断会话的受控访问边界。
- **处理的数据或资源**：[可信度：标准机制推断] 诊断请求、DTC、会话/安全状态、ECU 响应和错误码。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 VehicleHAL/诊断网关；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 会话未建立、权限/安全访问拒绝、ECU 无响应、DTC 解析错误或请求超时。
- **日志与观测点**：[可信度：标准机制推断] 按 应用请求→权限/会话→诊断传输→ECU 响应→结果解析 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carinfo-service-d3457fd -->
<a id="mod-carinfo-service-d3457fd"></a>
### `CarInfo Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-074，标签 `CarInfo Service`）。Occurrence 角色：d01-074（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 提供车辆静态信息和能力描述供应用查询。
- **处理的数据或资源**：[可信度：标准机制推断] 车型、品牌、版本、能力集、标识与配置来源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 VehicleHAL/配置提供端；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 信息源缺失、版本/车型错配、缓存跨升级或权限过滤错误。
- **日志与观测点**：[可信度：标准机制推断] 按 信息源版本→CarInfo Service 缓存→查询调用→应用展示 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-cardrivingstateservice-fd8e8b7 -->
<a id="mod-cardrivingstateservice-fd8e8b7"></a>
### `CarDrivingStateService`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-075，标签 `CarDrivingStateService`）。Occurrence 角色：d01-075（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 汇总车速、挡位等状态，产出驾驶限制判定供 UI/应用策略使用。
- **处理的数据或资源**：[可信度：标准机制推断] 车速、挡位、驻车、点火状态、时间戳和驾驶状态枚举。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 CarProperty Service/VehicleHAL；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 输入陈旧、阈值/枚举错误、状态抖动、限制未解除或消费者缓存旧值。
- **日志与观测点**：[可信度：标准机制推断] 按 车辆属性→新鲜度/状态判定→驾驶状态发布→策略消费者 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carnight-service-c3f3441 -->
<a id="mod-carnight-service-c3f3441"></a>
### `CarNight Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-076，标签 `CarNight Service`）。Occurrence 角色：d01-076（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 根据昼夜/灯光状态向应用和系统界面发布夜间模式。
- **处理的数据或资源**：[可信度：标准机制推断] 灯光、环境亮度、时间/主题策略和当前 night mode。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 CarProperty Service/传感器或 Lights 状态；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 灯光事件未到、模式翻转抖动、主题消费者未刷新或状态跨用户。
- **日志与观测点**：[可信度：标准机制推断] 按 灯光/亮度源→CarNight Service 判定→模式事件→UI 主题结果 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carprojection-service-b031954 -->
<a id="mod-carprojection-service-b031954"></a>
### `CarProjection Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-077，标签 `CarProjection Service`）。Occurrence 角色：d01-077（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 管理 CarPlay/AndroidAuto 等手机投屏会话、资源仲裁与状态。
- **处理的数据或资源**：[可信度：标准机制推断] 投屏设备、连接/认证、视频 Surface、音频焦点、输入和会话状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 CarPlay/AndroidAuto Service 与 USB/蓝牙链；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 认证失败、会话未建立、Surface 无帧、音频路由错误或断连清理不完整。
- **日志与观测点**：[可信度：标准机制推断] 按 设备连接→认证/会话→视频 Surface/音频→输入回传→断连释放 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carpowermanagementservice-6684dc9 -->
<a id="mod-carpowermanagementservice-6684dc9"></a>
### `CarPowermanagementService`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Car Services（d01-078，标签 `CarPowermanagementService`）。Occurrence 角色：d01-078（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services。；[可信度：标准机制推断] 图中命名的车辆电源管理子服务；与 CarPower Service 是否分层或重名待确认。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆电源状态、策略、参与者、唤醒/休眠结果及依赖 Ready。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验调用者和参数，维护服务状态并把请求路由至 CarPower Service/VehicleHAL/电源端（实际分工待确认）；精确 Binder 接口、线程和缓存实现需由源码/IDL 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 CarService/Android 用户生命周期工作；CarService 或下层代际变化后需重绑、重订阅并刷新状态。
- **常见故障模式**：[可信度：标准机制推断] 服务身份混淆、状态机重复、参与者超时、休眠/唤醒握手不闭环。
- **日志与观测点**：[可信度：标准机制推断] 按 先确认服务注册身份，再对齐状态输入、策略决策、参与者完成和下层回读 逐跳对时；最早断点是该子服务入口是否收到有效请求/新鲜事件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.7 Native Services 与 System 服务

<!-- module-id: mod-tboxservice-7fb1cc0 -->
<a id="mod-tboxservice-7fb1cc0"></a>
### `TboxService`

别名：`Tbox Service`。出现位置：original-diagram-01/Framework/Car Services（d01-072，标签 `TboxService`）；original-diagram-01/Framework/System（d01-097，标签 `Tbox Service`）。Occurrence 角色：d01-072（runtime）：运行节点标签；是否独立进程仍需运行时证据；d01-097（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Car Services；Framework/System。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Car Services / Framework/System。；[可信度：标准机制推断] 在座舱侧封装 TBox 连接、状态和远程业务访问边界。
- **处理的数据或资源**：[可信度：标准机制推断] 连接状态、远控命令、定位/网络/呼叫结果和服务上下线事件。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 把上层请求映射到 TBox 通信端并维护会话/状态；私有协议待确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随座舱服务启动；TBox 或跨域服务重启后需检测新代际并恢复订阅。
- **常见故障模式**：[可信度：标准机制推断] 跨域端点不可达、会话失效、命令超时、回调丢失或旧状态缓存。
- **日志与观测点**：[可信度：标准机制推断] 对齐 Client 请求、跨域发送、TBox 接收、执行和回执；最早断点是请求是否离开座舱域。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-native-services-382b5e8 -->
<a id="mod-native-services-382b5e8"></a>
### `Native Services`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-079，标签 `Native Services`）。Occurrence 角色：d01-079（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-079 直接包含 `Surface Flinger`、`Input Flinger`、`MediaServer`、`Camera Service`、`Boot Animation`、`Audio Flinger`、`Audio Policy`、`AndroidAuto Service`、`CarPlay Service`、`BT Service`、`BroadcastRadio Service`、`MBOS Service`。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Native Services 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Native Services` 是软件栈层级分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该软件栈层级分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕软件栈层级分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该软件栈层级分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该软件栈层级分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-surface-flinger-04f3047 -->
<a id="mod-surface-flinger-04f3047"></a>
### `Surface Flinger`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-080，标签 `Surface Flinger`）。Occurrence 角色：d01-080（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] 系统级图层合成服务，消费各生产者 BufferQueue 中的 GraphicBuffer 并输出显示帧。
- **处理的数据或资源**：[可信度：标准机制推断] SurfaceControl 图层、BufferQueue、GraphicBuffer、合成事务、显示时序与硬件合成结果。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 锁存可用缓冲、计算可见区域/合成策略，交给硬件合成或图形管线并提交显示。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常由 Android init 拉起；重启会使客户端 Surface/BufferQueue 代际失效。
- **常见故障模式**：[可信度：标准机制推断] 图层未创建、无新 buffer、acquire fence 未完成、合成超时、显存耗尽或旧 Surface 未释放。
- **日志与观测点**：[可信度：标准机制推断] 同时检查图层列表、BufferQueue 槽位、fence、帧时间和显存；最早断点是生产者是否成功 queueBuffer。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-input-flinger-b2ee0a7 -->
<a id="mod-input-flinger-b2ee0a7"></a>
### `Input Flinger`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-081，标签 `Input Flinger`）。Occurrence 角色：d01-081（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] Android 输入 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 输入请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 输入服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→输入入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mediaserver-cc66649 -->
<a id="mod-mediaserver-cc66649"></a>
### `MediaServer`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-082，标签 `MediaServer`）。Occurrence 角色：d01-082（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] 承载或协调媒体框架的播放、录制、Codec 与媒体资源访问边界。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体 URI/FD、解复用数据、Codec 会话、音视频 Buffer 与资源仲裁状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 建立媒体会话并把数据路径分派到解码、音频或显示组件；具体进程拆分随 Android 版本而异。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 标准 Android 由 init/服务管理机制维护；客户端死亡应回收会话和 Codec 资源。
- **常见故障模式**：[可信度：标准机制推断] 数据源打不开、Codec 初始化失败、Buffer 堵塞、Binder 会话死亡或资源泄漏。
- **日志与观测点**：[可信度：标准机制推断] 串联客户端会话、媒体服务、Codec、AudioFlinger/Surface；最早断点是媒体数据源是否成功打开。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-camera-service-a5f4b30 -->
<a id="mod-camera-service-a5f4b30"></a>
### `Camera Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-083，标签 `Camera Service`）。Occurrence 角色：d01-083（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] 仲裁 Camera 客户端、设备会话、采集请求和输出 Surface。
- **处理的数据或资源**：[可信度：标准机制推断] Camera ID、权限/优先级、CaptureRequest、V4L2/HAL 帧及输出 Buffer。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 验证访问权，建立设备会话，把请求下发 Camera HAL，并将 Buffer 交付消费者。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 标准 Android 中由原生服务管理；客户端死亡、HAL 断连或设备热复位需关闭并重建会话。
- **常见故障模式**：[可信度：标准机制推断] 设备枚举失败、相机被占用、请求队列停滞、Buffer 未归还、HAL/ISP 超时。
- **日志与观测点**：[可信度：标准机制推断] 核对 Camera Service 会话、HAL request/result、Buffer 状态和 ISP/V4L2；最早断点是设备 open/configure 是否成功。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-boot-animation-b98643d -->
<a id="mod-boot-animation-b98643d"></a>
### `Boot Animation`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-084，标签 `Boot Animation`）。Occurrence 角色：d01-084（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] 启动阶段的原生渲染客户端，向显示合成链提交开机动画帧。
- **处理的数据或资源**：[可信度：标准机制推断] 动画资源、Surface、GraphicBuffer、帧时序和退出条件。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 创建显示 Surface、解码/绘制帧并在系统启动完成后退出。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 由启动流程拉起并正常一次性退出，不是一般 Binder 管理服务。
- **常见故障模式**：[可信度：标准机制推断] 资源缺失、Surface 创建失败、帧停滞、退出条件未到或图层遮挡。
- **日志与观测点**：[可信度：标准机制推断] 检查启动时间线、资源读取、Surface/queueBuffer 和退出属性；最早断点是首帧是否提交。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-audio-flinger-96df5c1 -->
<a id="mod-audio-flinger-96df5c1"></a>
### `Audio Flinger`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-085，标签 `Audio Flinger`）。Occurrence 角色：d01-085（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] 混合播放流、管理录音轨和音频线程，并把 PCM 数据送往 Audio HAL/ALSA。
- **处理的数据或资源**：[可信度：标准机制推断] PCM buffer、track/record 会话、采样率、声道、时钟与 underrun 状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 选择输出线程，重采样/混音并经 Audio HAL 写入 ALSA；录音方向反向搬运。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 标准 Android 原生服务由 init 管理；客户端死亡清理 track，设备切换会重开输出流。
- **常见故障模式**：[可信度：标准机制推断] track 未创建、路由错误、underrun、写阻塞、HAL 断连或 ALSA 设备异常。
- **日志与观测点**：[可信度：标准机制推断] 按 AudioTrack→AudioFlinger 线程→Audio HAL→ALSA 检查帧计数和 underrun；最早断点是 track 是否进入活动线程。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-audio-policy-2d90656 -->
<a id="mod-audio-policy-2d90656"></a>
### `Audio Policy`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-086，标签 `Audio Policy`）。Occurrence 角色：d01-086（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] Android 媒体音频 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体音频请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 媒体音频服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→媒体音频入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-androidauto-service-09eba60 -->
<a id="mod-androidauto-service-09eba60"></a>
### `AndroidAuto Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-087，标签 `AndroidAuto Service`）。Occurrence 角色：d01-087（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] Android 系统服务 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 系统服务请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 系统服务服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→系统服务入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carplay-service-844da6e -->
<a id="mod-carplay-service-844da6e"></a>
### `CarPlay Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-088，标签 `CarPlay Service`）。Occurrence 角色：d01-088（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] Android 系统服务 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 系统服务请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 系统服务服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→系统服务入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-bt-service-9febf5a -->
<a id="mod-bt-service-9febf5a"></a>
### `BT Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-089，标签 `BT Service`）。Occurrence 角色：d01-089（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] Android 媒体音频 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体音频请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 媒体音频服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→媒体音频入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-broadcastradio-service-97be8b7 -->
<a id="mod-broadcastradio-service-97be8b7"></a>
### `BroadcastRadio Service`

别名：`BroadCast RadioService`。出现位置：original-diagram-01/Framework/Native Services（d01-090，标签 `BroadCast RadioService`）。Occurrence 角色：d01-090（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/Native Services。；[可信度：标准机制推断] Android 媒体音频 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体音频请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 媒体音频服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→媒体音频入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mbos-service-5a35713 -->
<a id="mod-mbos-service-5a35713"></a>
### `MBOS Service`

<!-- explanation-refresh:mbos-service -->
**资料核对后的架构解释（2026-09-20）**

新图的 MBOsService 含 MonitorService、IpcService、MBWindowManagerService。MonitorService 包括 Storage/Stability/Cpu/Mem/Bsp/Qnx；MBWindowManagerService 注释为主要监测三指手势。DiagnosticService 被标记已移除对应服务，因此原聚合框继续保留，但该节点不再解释为新图中的活动诊断必经路径；这不代表整机诊断功能取消。[MBOS-20260920 · 盟博OS架构-用户提供-20260920.png](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0022.html)
<!-- /explanation-refresh -->


别名：无已登记别名。出现位置：original-diagram-01/Framework/Native Services（d01-091，标签 `MBOS Service`）。Occurrence 角色：d01-091（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/Native Services。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：用户补图展开 MonitorService、IpcService 和以三指手势监测为主的 MBWindowManagerService；DiagnosticService 对应服务被标记移除。[MBOS-20260920 · 盟博OS架构-用户提供-20260920.png](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0022.html)
- **处理的数据或资源**：[可信度：待 MT8676 确认] 系统服务请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：待 MT8676 确认] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：待 MT8676 确认] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：待 MT8676 确认] 系统服务服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：待 MT8676 确认] 检查注册→宿主→系统服务入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。 [可信度：待 MT8676 确认] 私有接口、端点身份、参数和恢复策略均待 MT8676 确认。

<!-- module-id: mod-system-bc0792d -->
<a id="mod-system-bc0792d"></a>
### `System`

别名：无已登记别名。出现位置：original-diagram-01/Framework/System（d01-092，标签 `System`）。Occurrence 角色：d01-092（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-092 直接包含 `Update Engine`、`AVM`、`RVC`、`vold`、`TboxService`、`netd`、`lmkd`、`ADAS Service`、`MBLog`、`FCM Service`。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/System。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：System 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `System` 是软件栈层级分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该软件栈层级分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕软件栈层级分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该软件栈层级分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该软件栈层级分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-update-engine-9c3a1ab -->
<a id="mod-update-engine-9c3a1ab"></a>
### `Update Engine`

别名：无已登记别名。出现位置：original-diagram-01/Framework/System（d01-093，标签 `Update Engine`）。Occurrence 角色：d01-093（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/System。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。；[可信度：标准机制推断] 执行系统更新包校验、分区写入、进度报告与切换控制。
- **处理的数据或资源**：[可信度：标准机制推断] 更新 payload、分区/slot、校验摘要、进度、错误码和启动控制元数据。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验包并流式写入非活动分区，完成后设置启动目标；项目是否采用 A/B 待确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 长生命周期任务受电源与存储条件约束；重启后是否续传由实现合同确认。
- **常见故障模式**：[可信度：标准机制推断] 包校验失败、空间不足、写入 I/O 错误、电源中断或启动槽切换失败。
- **日志与观测点**：[可信度：标准机制推断] 联查下载摘要、update engine 状态、块写入和 BootCtrl；最早断点是 payload 校验是否通过。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-vold-00d021f -->
<a id="mod-vold-00d021f"></a>
### `vold`

别名：无已登记别名。出现位置：original-diagram-01/Framework/System（d01-096，标签 `vold`）。Occurrence 角色：d01-096（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/System。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。；[可信度：标准机制推断] 管理可移动/采用存储卷的发现、挂载、卸载、加密及块设备事件。
- **处理的数据或资源**：[可信度：标准机制推断] 块设备、分区、文件系统、卷状态、挂载点和密钥元数据。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 消费内核 uevent，识别卷并调用文件系统工具完成检查与挂载。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 由 Android init 管理；设备热插拔触发卷状态机，异常卸载后需确认资源释放。
- **常见故障模式**：[可信度：标准机制推断] 块设备未枚举、文件系统损坏、挂载权限错误、卷忙或密钥不可用。
- **日志与观测点**：[可信度：标准机制推断] 联查 uevent、块设备、vold 状态、挂载表和文件系统工具返回；最早断点是内核是否上报设备。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-netd-c31208c -->
<a id="mod-netd-c31208c"></a>
### `netd`

别名：无已登记别名。出现位置：original-diagram-01/Framework/System（d01-098，标签 `netd`）。Occurrence 角色：d01-098（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/System。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。；[可信度：标准机制推断] 执行 Android 网络接口、路由、防火墙、DNS 与 Socket 标记等底层配置。
- **处理的数据或资源**：[可信度：标准机制推断] 网络接口、路由表、规则、解析配置、UID 策略和 Socket 状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 接收 Framework 网络控制请求并转化为内核网络配置。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常由 Android init 拉起；重启后内核残留状态与 Framework 期望需重新对账。
- **常见故障模式**：[可信度：标准机制推断] 接口未起、路由/规则错误、DNS 失败、权限拒绝或 netlink 配置不一致。
- **日志与观测点**：[可信度：标准机制推断] 核对 Framework 请求、netd 日志、接口/路由/规则与 Socket；最早断点是控制请求是否到达 netd。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-lmkd-b87d14a -->
<a id="mod-lmkd-b87d14a"></a>
### `lmkd`

别名：无已登记别名。出现位置：original-diagram-01/Framework/System（d01-099，标签 `lmkd`）。Occurrence 角色：d01-099（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/System。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。；[可信度：标准机制推断] 根据内存压力与进程优先级终止候选进程，避免系统进入不可恢复的内存耗尽。
- **处理的数据或资源**：[可信度：标准机制推断] 内存压力、进程 oom 分值、RSS、回收状态和杀进程记录。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 监视内核压力指标，结合进程优先级选择并终止候选者。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 由 init 管理并持续监控；其杀进程结果会触发 Activity Manager 的进程重建。
- **常见故障模式**：[可信度：标准机制推断] 压力阈值不当、关键进程被杀、内存泄漏导致频繁回收或事件监控失效。
- **日志与观测点**：[可信度：标准机制推断] 对齐内存压力、lmkd kill 记录、目标进程分值和重建时间；最早断点是压力从何处持续增长。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-adas-service-b7d4bef -->
<a id="mod-adas-service-b7d4bef"></a>
### `ADAS Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/System（d01-100，标签 `ADAS Service`）。Occurrence 角色：d01-100（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/System。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。；[可信度：标准机制推断] 承接驾驶辅助状态/告警并向座舱业务提供服务化输出。
- **处理的数据或资源**：[可信度：标准机制推断] ADAS 目标、告警、置信度、时间戳、车辆状态及显示/提示请求。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 校验时效和状态，按策略转换为 UI/音频提示；算法源与接口绑定待确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 由平台启动/依赖管理；源服务重启后需重建订阅并丢弃旧代际告警。
- **常见故障模式**：[可信度：标准机制推断] 源数据陈旧、枚举不匹配、告警风暴、回调丢失或消费者未更新。
- **日志与观测点**：[可信度：标准机制推断] 关联源帧/告警 ID、服务接收、策略输出和 UI/音频结果；最早断点是新鲜告警是否到达服务。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mblog-95eca7d -->
<a id="mod-mblog-95eca7d"></a>
### `MBLog`

别名：无已登记别名。出现位置：original-diagram-01/Framework/System（d01-101，标签 `MBLog`）。Occurrence 角色：d01-101（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/System。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。；[可信度：标准机制推断] Android 系统服务 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 系统服务请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：标准机制推断] 系统服务服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：标准机制推断] 检查注册→宿主→系统服务入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-fcm-service-e761bea -->
<a id="mod-fcm-service-e761bea"></a>
### `FCM Service`

别名：无已登记别名。出现位置：original-diagram-01/Framework/System（d01-102，标签 `FCM Service`）。Occurrence 角色：d01-102（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Framework/System。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Framework/System。；[可信度：待 MT8676 确认] Android 系统服务 Framework 组件，向客户端暴露对应平台能力。
- **处理的数据或资源**：[可信度：待 MT8676 确认] 系统服务请求、权限、状态记录、资源句柄和回调。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：待 MT8676 确认] 在实际宿主进程中校验请求、维护状态并调用对应 HAL/原生组件。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：待 MT8676 确认] 进程归属可能是 system_server 或原生宿主，必须由服务注册/进程树确认。
- **常见故障模式**：[可信度：待 MT8676 确认] 系统服务服务未注册、权限拒绝、线程/队列堵塞、缓存或下层状态异常。
- **日志与观测点**：[可信度：待 MT8676 确认] 检查注册→宿主→系统服务入口→下层返回；最早断点是请求是否到达正确宿主。
- **证据与可信度**：[可信度：待 MT8676 确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。 [可信度：待 MT8676 确认] 私有接口、端点身份、参数和恢复策略均待 MT8676 确认。

## 4.8 Android Runtime、Infrastructure、Libraries 与 External

<!-- module-id: mod-android-runtime-07eedda -->
<a id="mod-android-runtime-07eedda"></a>
### `Android Runtime`

别名：无已登记别名。出现位置：original-diagram-01/Android Runtime（d01-103，标签 `Android Runtime`）。Occurrence 角色：d01-103（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-103 直接包含 `ART`、`Core Libraries`。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Android Runtime。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Android Runtime 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Android Runtime` 是软件栈层级分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该软件栈层级分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕软件栈层级分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该软件栈层级分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该软件栈层级分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-art-abfe09c -->
<a id="mod-art-abfe09c"></a>
### `ART`

别名：无已登记别名。出现位置：original-diagram-01/Android Runtime（d01-104，标签 `ART`）。Occurrence 角色：d01-104（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Android Runtime。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Android Runtime。；[可信度：标准机制推断] Android 应用运行时，执行 dex/字节码、类加载、垃圾回收与运行时编译。
- **处理的数据或资源**：[可信度：标准机制推断] 应用堆、类元数据、线程、dex/oat 代码和垃圾回收状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在各应用/系统 Java 进程内执行方法、分配对象并回收堆。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] ART 随宿主应用或 system_server 进程存在，不形成独立常驻服务。
- **常见故障模式**：[可信度：标准机制推断] 类加载/验证失败、垃圾回收停顿、堆耗尽、运行时崩溃。
- **日志与观测点**：[可信度：标准机制推断] 检查宿主进程 tombstone、堆/GC、线程和类加载日志；最早断点是异常所属宿主进程。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-core-libraries-28c6bdf -->
<a id="mod-core-libraries-28c6bdf"></a>
### `Core Libraries`

别名：无已登记别名。出现位置：original-diagram-01/Android Runtime（d01-105，标签 `Core Libraries`）。Occurrence 角色：d01-105（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Android Runtime。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Android Runtime。；[可信度：标准机制推断] Core Libraries 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-infra-541cc9b -->
<a id="mod-infra-541cc9b"></a>
### `Infra`

别名：无已登记别名。出现位置：original-diagram-01/Infra（d01-106，标签 `Infra`）。Occurrence 角色：d01-106（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-106 直接包含 `FDBus`、`CanService`、`boost`、`MB_ipc`、`protobuf`、`Update_server`、`vsomeip`。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Infra。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Infra 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Infra` 是软件栈层级分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该软件栈层级分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕软件栈层级分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该软件栈层级分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该软件栈层级分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-canservice-24db020 -->
<a id="mod-canservice-24db020"></a>
### `CanService`

别名：`canservice`。出现位置：original-diagram-01/Infra（d01-108，标签 `canservice`）；original-diagram-02/Host(SOS YOCTO)/Infrastructure（d02-042，标签 `CanService`）；original-diagram-03/SOS(Yocto)/Communication（d03-013，标签 `CanService`）。Occurrence 角色：d01-108（runtime）：运行节点标签；是否独立进程仍需运行时证据；d02-042（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-013（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；SOS/Yocto；层级 Infra；Host(SOS YOCTO)/Infrastructure；SOS(Yocto)/Communication。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：SOS 车辆数据服务，连接 MCU/IPCL 数据与 FDBus/SOME-IP/客户端。；[可信度：标准机制推断] 汇聚 CAN 信号并向 SOS/Android 侧 Client 提供服务化车辆数据。
- **处理的数据或资源**：[可信度：标准机制推断] CAN frame、signal value、timestamp、quality、订阅和控制请求。
- **输入**：[可信度：待 MT8676 确认] 来自 IPCL/VehicleIF 的 CAN 解码信号、Client 订阅和控制请求
- **内部处理**：[可信度：标准机制推断] 接收帧并按映射解析信号，维护新鲜度后通过 FDBus/图示链路分发。
- **输出**：[可信度：待 MT8676 确认] 向 CanClient/Cluster/VehicleHAL 发布 Topic/Event，向 MCU 下发命令
- **上游**：[可信度：待 MT8676 确认] MCU Vehicle Interface；IPCL；VehicleIF。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] CanClient；Clients(SOME/IP)；Cluster；VehicleHAL（关系待项目确认）。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] CAN；IPCL；FDBus；SOME/IP。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 具体启动者待 SOS/Android 配置确认；重启后 Client 订阅与信号缓存需恢复。
- **常见故障模式**：[可信度：标准机制推断] 总线无帧、DBC/缩放不匹配、时间戳陈旧、FDBus 未注册或订阅丢失。
- **日志与观测点**：[可信度：标准机制推断] 按 CAN 驱动→帧计数→信号解析→CanService 发布→Client 接收；最早断点是原始 CAN frame 是否到达。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-boost-f7d80df -->
<a id="mod-boost-f7d80df"></a>
### `boost`

别名：无已登记别名。出现位置：original-diagram-01/Infra（d01-109，标签 `boost`）。Occurrence 角色：d01-109（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Infra。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Infra。；[可信度：标准机制推断] boost 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mb-ipc-86598dd -->
<a id="mod-mb-ipc-86598dd"></a>
### `MB_ipc`

别名：无已登记别名。出现位置：original-diagram-01/Infra（d01-110，标签 `MB_ipc`）。Occurrence 角色：d01-110（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Infra。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Infra。；[可信度：标准机制推断] MB_ipc 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-protobuf-9d3fdc4 -->
<a id="mod-protobuf-9d3fdc4"></a>
### `protobuf`

别名：无已登记别名。出现位置：original-diagram-01/Infra（d01-111，标签 `protobuf`）。Occurrence 角色：d01-111（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Infra。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Infra。；[可信度：标准机制推断] protobuf 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-update-server-60b9399 -->
<a id="mod-update-server-60b9399"></a>
### `Update_server`

别名：无已登记别名。出现位置：original-diagram-01/Infra（d01-112，标签 `Update_server`）。Occurrence 角色：d01-112（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Infra。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Infra。；[可信度：标准机制推断] `Update_server` 是原图确认的运行节点；名称和位置可确认，内部实现尚无直接资料。
- **处理的数据或资源**：[可信度：标准机制推断] `Update_server` 处理的数据、资源与接口字段需由源码、IDL、配置或业务 trace 确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 不得从方框相邻关系补写调用链；应从已标注箭头和运行时关联证据还原处理阶段。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 所有者、启动、Ready、重启和重连边界待运行时资料确认。
- **常见故障模式**：[可信度：标准机制推断] 模块未 Ready、接口不匹配、输入陈旧、输出未消费或跨代际状态污染。
- **日志与观测点**：[可信度：标准机制推断] 先取得 `Update_server` 的进程/服务身份、入口日志和输入输出时间戳；最早断点是确认真实端点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-vsomeip-176195d -->
<a id="mod-vsomeip-176195d"></a>
### `vsomeip`

别名：无已登记别名。出现位置：original-diagram-01/Infra（d01-113，标签 `vsomeip`）。Occurrence 角色：d01-113（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Infra。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Infra。；[可信度：标准机制推断] vsomeip 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-libraries-27c968e -->
<a id="mod-libraries-27c968e"></a>
### `Libraries`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-114，标签 `Libraries`）。Occurrence 角色：d01-114（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-114 直接包含 `Webkit`、`OpenMax`、`Bionic`、`CarPlay plug-in`、`OpenGLES`、`SQLite`、`Chromium`、`iAP2`、`StageFright plug`、`Bluetooth Stack`。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Libraries 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Libraries` 是软件栈层级分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该软件栈层级分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕软件栈层级分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该软件栈层级分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该软件栈层级分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-webkit-d4dc348 -->
<a id="mod-webkit-d4dc348"></a>
### `Webkit`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-115，标签 `Webkit`）。Occurrence 角色：d01-115（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Libraries。；[可信度：标准机制推断] Webkit 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-openmax-04da84a -->
<a id="mod-openmax-04da84a"></a>
### `OpenMax`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-116，标签 `OpenMax`）。Occurrence 角色：d01-116（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Libraries。；[可信度：标准机制推断] OpenMax 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-bionic-e134f0b -->
<a id="mod-bionic-e134f0b"></a>
### `Bionic`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-117，标签 `Bionic`）。Occurrence 角色：d01-117（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Libraries。；[可信度：标准机制推断] Bionic 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-carplay-plug-in-acd0a4f -->
<a id="mod-carplay-plug-in-acd0a4f"></a>
### `CarPlay plug-in`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-118，标签 `CarPlay plug-in`）。Occurrence 角色：d01-118（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Libraries。；[可信度：标准机制推断] CarPlay plug-in 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-opengles-889a244 -->
<a id="mod-opengles-889a244"></a>
### `OpenGLES`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-119，标签 `OpenGLES`）。Occurrence 角色：d01-119（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Libraries。；[可信度：标准机制推断] OpenGLES 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-sqlite-9f09ccb -->
<a id="mod-sqlite-9f09ccb"></a>
### `SQLite`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-120，标签 `SQLite`）。Occurrence 角色：d01-120（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Libraries。；[可信度：标准机制推断] SQLite 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-chromium-32166e8 -->
<a id="mod-chromium-32166e8"></a>
### `Chromium`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-121，标签 `Chromium`）。Occurrence 角色：d01-121（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Libraries。；[可信度：标准机制推断] Chromium 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-iap2-cb26e3d -->
<a id="mod-iap2-cb26e3d"></a>
### `iAP2`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-122，标签 `iAP2`）。Occurrence 角色：d01-122（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Libraries。；[可信度：标准机制推断] iAP2 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-stagefright-plug-3594245 -->
<a id="mod-stagefright-plug-3594245"></a>
### `StageFright plug`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-123，标签 `StageFright plug`）。Occurrence 角色：d01-123（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Libraries。；[可信度：标准机制推断] StageFright plug 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-bluetooth-stack-1573223 -->
<a id="mod-bluetooth-stack-1573223"></a>
### `Bluetooth Stack`

别名：无已登记别名。出现位置：original-diagram-01/Libraries（d01-124，标签 `Bluetooth Stack`）。Occurrence 角色：d01-124（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Libraries。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Libraries。；[可信度：标准机制推断] Bluetooth Stack 是被应用或服务加载的库/框架能力，不是独立服务进程。
- **处理的数据或资源**：[可信度：标准机制推断] 函数调用参数、库内部对象、buffer/数据库/协议状态和宿主资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由宿主进程通过 API/ABI 调用；精确行为取决于调用路径与版本。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期归宿主进程和其对象引用；该库不单独拥有 PID、Ready 状态或重启策略。
- **常见故障模式**：[可信度：标准机制推断] 加载/符号失败、版本不兼容、对象或 buffer 泄漏、调用参数错误。
- **日志与观测点**：[可信度：标准机制推断] 先确定宿主进程、加载版本和调用栈，再查库错误；最早断点是宿主调用是否进入库。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-external-8d10c69 -->
<a id="mod-external-8d10c69"></a>
### `External`

别名：无已登记别名。出现位置：original-diagram-01/External（d01-125，标签 `External`）。Occurrence 角色：d01-125（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-125 直接包含 `exfat tool`、`wpa_supplicant_8`、`ntfs_tool`、`tf_hot_plug`、`e2fs|rpgs`、`logd`。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 External。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：External 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `External` 是软件栈层级分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该软件栈层级分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕软件栈层级分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该软件栈层级分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该软件栈层级分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-exfat-tool-e5e2d51 -->
<a id="mod-exfat-tool-e5e2d51"></a>
### `exfat tool`

别名：无已登记别名。出现位置：original-diagram-01/External（d01-126，标签 `exfat tool`）。Occurrence 角色：d01-126（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 External。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 External。；[可信度：标准机制推断] exfat tool 是按需执行的外部工具或辅助程序，不是常驻服务。
- **处理的数据或资源**：[可信度：标准机制推断] 文件系统/设备参数、输入文件、退出码和标准错误。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由存储服务、脚本或维护流程按需调用并以退出状态返回结果。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期是一次命令执行，归调用它的宿主进程/脚本；无独立 Ready/重连。
- **常见故障模式**：[可信度：标准机制推断] 可执行文件缺失、参数/权限错误、介质损坏、非零退出或执行超时。
- **日志与观测点**：[可信度：标准机制推断] 检查宿主进程的 exec 记录、命令参数、退出码和 stderr；最早断点是工具是否被成功启动。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-wpa-supplicant-8-24dce0f -->
<a id="mod-wpa-supplicant-8-24dce0f"></a>
### `wpa_supplicant_8`

别名：无已登记别名。出现位置：original-diagram-01/External（d01-127，标签 `wpa_supplicant_8`）。Occurrence 角色：d01-127（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 External。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 External。；[可信度：标准机制推断] 长期运行的 Wi-Fi supplicant 服务依赖，维护无线网络关联、认证和连接状态；精确进程归属待 MT8676 启动配置确认。
- **处理的数据或资源**：[可信度：标准机制推断] 网络配置、扫描结果、关联状态、认证密钥上下文和控制接口事件。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 持续驱动扫描、选择网络、关联与认证状态机，并向上层报告连接变化。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Wi-Fi 能力启动并持续运行；接口或网络异常后需重新关联/重连，具体监督策略待配置确认。
- **常见故障模式**：[可信度：标准机制推断] 扫描无结果、关联拒绝、认证失败、控制接口断开、状态机卡滞或重连循环。
- **日志与观测点**：[可信度：标准机制推断] 检查服务启动、控制接口、扫描/关联/认证事件和断线重连时间线；最早断点是 supplicant 是否收到目标网络配置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-ntfs-tool-2042e3c -->
<a id="mod-ntfs-tool-2042e3c"></a>
### `ntfs_tool`

别名：无已登记别名。出现位置：original-diagram-01/External（d01-128，标签 `ntfs_tool`）。Occurrence 角色：d01-128（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 External。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 External。；[可信度：标准机制推断] ntfs_tool 是按需执行的外部工具或辅助程序，不是常驻服务。
- **处理的数据或资源**：[可信度：标准机制推断] 文件系统/设备参数、输入文件、退出码和标准错误。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由存储服务、脚本或维护流程按需调用并以退出状态返回结果。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期是一次命令执行，归调用它的宿主进程/脚本；无独立 Ready/重连。
- **常见故障模式**：[可信度：标准机制推断] 可执行文件缺失、参数/权限错误、介质损坏、非零退出或执行超时。
- **日志与观测点**：[可信度：标准机制推断] 检查宿主进程的 exec 记录、命令参数、退出码和 stderr；最早断点是工具是否被成功启动。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-tf-hot-plug-0c48548 -->
<a id="mod-tf-hot-plug-0c48548"></a>
### `tf_hot_plug`

别名：无已登记别名。出现位置：original-diagram-01/External（d01-129，标签 `tf_hot_plug`）。Occurrence 角色：d01-129（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 External。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 External。；[可信度：标准机制推断] tf_hot_plug 是按需执行的外部工具或辅助程序，不是常驻服务。
- **处理的数据或资源**：[可信度：标准机制推断] 文件系统/设备参数、输入文件、退出码和标准错误。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由存储服务、脚本或维护流程按需调用并以退出状态返回结果。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期是一次命令执行，归调用它的宿主进程/脚本；无独立 Ready/重连。
- **常见故障模式**：[可信度：标准机制推断] 可执行文件缺失、参数/权限错误、介质损坏、非零退出或执行超时。
- **日志与观测点**：[可信度：标准机制推断] 检查宿主进程的 exec 记录、命令参数、退出码和 stderr；最早断点是工具是否被成功启动。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-e2fs-rpgs-3a29c7b -->
<a id="mod-e2fs-rpgs-3a29c7b"></a>
### `e2fs|rpgs`

别名：无已登记别名。出现位置：original-diagram-01/External（d01-130，标签 `e2fs|rpgs`）。Occurrence 角色：d01-130（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 External。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 External。；[可信度：标准机制推断] e2fs|rpgs 是按需执行的外部工具或辅助程序，不是常驻服务。
- **处理的数据或资源**：[可信度：标准机制推断] 文件系统/设备参数、输入文件、退出码和标准错误。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 由存储服务、脚本或维护流程按需调用并以退出状态返回结果。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 生命周期是一次命令执行，归调用它的宿主进程/脚本；无独立 Ready/重连。
- **常见故障模式**：[可信度：标准机制推断] 可执行文件缺失、参数/权限错误、介质损坏、非零退出或执行超时。
- **日志与观测点**：[可信度：标准机制推断] 检查宿主进程的 exec 记录、命令参数、退出码和 stderr；最早断点是工具是否被成功启动。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-logd-a9b0688 -->
<a id="mod-logd-a9b0688"></a>
### `logd`

别名：无已登记别名。出现位置：original-diagram-01/External（d01-131，标签 `logd`）。Occurrence 角色：d01-131（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 External。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 External。；[可信度：标准机制推断] `logd` 是原图确认的运行节点；名称和位置可确认，内部实现尚无直接资料。
- **处理的数据或资源**：[可信度：标准机制推断] `logd` 处理的数据、资源与接口字段需由源码、IDL、配置或业务 trace 确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 不得从方框相邻关系补写调用链；应从已标注箭头和运行时关联证据还原处理阶段。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 所有者、启动、Ready、重启和重连边界待运行时资料确认。
- **常见故障模式**：[可信度：标准机制推断] 模块未 Ready、接口不匹配、输入陈旧、输出未消费或跨代际状态污染。
- **日志与观测点**：[可信度：标准机制推断] 先取得 `logd` 的进程/服务身份、入口日志和输入输出时间戳；最早断点是确认真实端点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-infrastructure-951d9aa -->
<a id="mod-infrastructure-951d9aa"></a>
### `Infrastructure`

别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Infrastructure（d02-039，标签 `Infrastructure`）；original-diagram-02/Guest(UOS Android)/Platform（d02-064，标签 `Infrastructure`）。Occurrence 角色：d02-039（container）：分组容器；只表达该 occurrence 的包含边界；d02-064（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：d02-039 直接包含 `Lifecycle`、`SOA/IPC`、`CanService`、`VehicleIF`、`AudioMgr`、`LogMgr`。

**Occurrence 分解**：

- `d02-039`（role=container）作用=SOS Host Infrastructure 分组；数据/资源=Lifecycle/SOA/CanService 等子项；生命周期=容器无独立生命周期；故障边界=Host 容器误作服务；观测点=Host containment。
- `d02-064`（role=runtime）作用=Android 平台基础设施 runtime；数据/资源=IPC、日志、资源和平台状态；生命周期=随 Android Guest/服务；故障边界=未注册、阻塞或状态陈旧；观测点=Android 服务注册。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；UOS/Android；层级 Host(SOS YOCTO)/Infrastructure；Guest(UOS Android)/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：container×1、runtime×1）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SOS/Yocto / UOS/Android，层级为 Host(SOS YOCTO)/Infrastructure / Guest(UOS Android)/Platform。；[可信度：标准机制推断] Infrastructure 在 SOS/Yocto Host 是基础设施分组容器，在 Android Guest 是平台基础设施 runtime 标签。
- **处理的数据或资源**：[可信度：标准机制推断] Host Lifecycle/SOA/CanService 等子项目录，以及 Android 平台 IPC、日志或资源基础能力。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] Host container 只组织服务；Android runtime occurrence 提供平台基础设施能力，精确进程需服务注册证明。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器无独立生命周期；Android 平台基础设施随 Guest/服务管理启动并按真实端点恢复。
- **常见故障模式**：[可信度：标准机制推断] 容器误当服务、Android 基础设施未注册、依赖未就绪、队列阻塞或跨域状态陈旧。
- **日志与观测点**：[可信度：标准机制推断] 先按 Host/Android occurrence 分流，再查具体子服务或服务注册；最早断点是实际运行端点身份。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.9 HAL

<!-- module-id: mod-media-0c77aee -->
<a id="mod-media-0c77aee"></a>
### `Media`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-035，标签 `Media`）；original-diagram-01/Framework/Media（d01-056，标签 `Media`）；original-diagram-01/HAL（d01-134，标签 `Media`）。Occurrence 角色：d01-035（runtime）：运行节点标签；是否独立进程仍需运行时证据；d01-056（container）：分组容器；只表达该 occurrence 的包含边界；d01-134（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：d01-056 直接包含 `Media Scanner`、`Media Provider`、`Media Player`。

**Occurrence 分解**：

- `d01-035`（role=runtime）作用=JAVA Services 媒体运行入口；数据/资源=Framework 媒体请求/会话；生命周期=随实际 Framework 宿主；故障边界=服务入口或会话失败；观测点=服务注册、调用与回调。
- `d01-056`（role=container）作用=Framework/Media 分组；数据/资源=Media Scanner/Provider/Player 子项；生命周期=容器无独立生命周期；故障边界=子项归属误读；观测点=containment 与子项身份。
- `d01-134`（role=runtime）作用=Media HAL 运行适配边界；数据/资源=设备请求、状态与 buffer；生命周期=随 HAL 服务/设备；故障边界=HAL 未注册或设备失败；观测点=HAL 调用与驱动返回。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；UOS/Android；层级 Framework/JAVA Services；Framework/Media；HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：container×1、runtime×2）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain / UOS/Android，层级为 Framework/JAVA Services / Framework/Media / HAL。；[可信度：标准机制推断] 同名 `Media` 标签分别表示 JAVA Services 运行能力、Framework/Media 分组和 HAL 媒体适配边界；不能合并为一个实例。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体会话、索引/播放状态、buffer、设备能力和各 occurrence 的子模块目录。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 运行 occurrence 分别处理 Framework 媒体请求或 HAL 设备适配；container occurrence 只组织 Media Scanner/Provider/Player。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器随架构定义存在；运行 occurrence 的宿主和恢复分别由 Framework 服务注册或 HAL 配置确认。
- **常见故障模式**：[可信度：标准机制推断] 身份误合并、媒体请求未进入运行端、HAL 设备未就绪、buffer 堵塞或容器被误当服务。
- **日志与观测点**：[可信度：标准机制推断] 按 JAVA Services→Framework/Media 子项→Media HAL 分段查服务入口、会话、buffer 和设备返回；最早断点是目标 occurrence 的真实宿主。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-broadcastradio-1c44ba3 -->
<a id="mod-broadcastradio-1c44ba3"></a>
### `BroadcastRadio`

别名：`BroadCast Radio`、`BroadCastRadio`。出现位置：original-diagram-01/Framework/JAVA Services（d01-043，标签 `BroadCast Radio`）；original-diagram-01/HAL（d01-141，标签 `BroadCastRadio`）。Occurrence 角色：d01-043（runtime）：运行节点标签；是否独立进程仍需运行时证据；d01-141（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；UOS/Android；层级 Framework/JAVA Services；HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain / UOS/Android，层级为 Framework/JAVA Services / HAL。；[可信度：标准机制推断] 抽象广播收音机调谐和节目发现。
- **处理的数据或资源**：[可信度：标准机制推断] 频段、频点、节目、信号质量、扫描和回调状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 radio tuner 驱动/硬件 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 调谐失败、扫描不结束、节目数据陈旧、回调丢失或音频源未切换。
- **日志与观测点**：[可信度：标准机制推断] 按 RadioService→BroadcastRadio HAL→tuner→节目/音频回读 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-bluetooth-c3b4148 -->
<a id="mod-bluetooth-c3b4148"></a>
### `Bluetooth`

别名：无已登记别名。出现位置：original-diagram-01/Framework/JAVA Services（d01-049，标签 `Bluetooth`）；original-diagram-01/HAL（d01-136，标签 `Bluetooth`）。Occurrence 角色：d01-049（runtime）：运行节点标签；是否独立进程仍需运行时证据；d01-136（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；UOS/Android；层级 Framework/JAVA Services；HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain / UOS/Android，层级为 Framework/JAVA Services / HAL。；[可信度：标准机制推断] 抽象蓝牙控制器与协议栈能力。
- **处理的数据或资源**：[可信度：标准机制推断] 适配器状态、HCI 类命令/事件、设备、连接和 Profile 数据。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Bluetooth Stack/控制器驱动 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 控制器未 Ready、固件/传输异常、配对失败、连接抖动或事件丢失。
- **日志与观测点**：[可信度：标准机制推断] 按 Framework→Bluetooth 服务/Stack→控制器传输→事件回调 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-hal-3c5b432 -->
<a id="mod-hal-3c5b432"></a>
### `HAL`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-132，标签 `HAL`）；original-diagram-02/Guest(UOS Android)/Platform（d02-063，标签 `HAL`）。Occurrence 角色：d01-132（container）：分组容器；只表达该 occurrence 的包含边界；d02-063（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：d01-132 直接包含 `Audio`、`Media`、`Display`、`Bluetooth`、`Power`、`USB`、`RIL`、`DRM`、`BroadcastRadio`、`Camera`、`Sensors`、`WIFI`、`Lights`、`Location`、`BootCtrl`、`AudioControl`、`radio`、`VehicleHAL`、`Tbox`、`configstoreHAL`、`mbgnss`、`mbsensors`、`MBOS HAL`、`mblogd`。

**Occurrence 分解**：

- `d01-132`（role=container）作用=HAL 容器；数据/资源=Audio/Display/VehicleHAL 等子项；生命周期=容器无独立生命周期；故障边界=容器被误当 HAL 服务；观测点=HAL containment。
- `d02-063`（role=runtime）作用=Android Guest 硬件抽象运行层；数据/资源=接口、句柄、回调与 buffer；生命周期=随 Guest HAL 服务；故障边界=注册/版本/设备失败；观测点=服务注册到驱动返回。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL；Guest(UOS Android)/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：container×1、runtime×1）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL / Guest(UOS Android)/Platform。；[可信度：标准机制推断] HAL 标签分别表示图 1 的 HAL 容器和 Android Guest 平台中的硬件抽象运行边界。
- **处理的数据或资源**：[可信度：标准机制推断] HAL 子模块目录、接口请求/回调、设备句柄、状态码和 buffer。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] HAL 容器只分组 Audio/Display/VehicleHAL 等子项；Guest runtime occurrence 才承接上层合同并访问驱动。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器无运行生命周期；Guest HAL 的注册、版本和死亡重绑由 manifest/服务配置确认。
- **常见故障模式**：[可信度：标准机制推断] 误把 HAL 容器当服务、接口版本不匹配、服务未注册、设备 open 失败或回调丢失。
- **日志与观测点**：[可信度：标准机制推断] 先确认 occurrence，再查 Guest 服务注册、接口版本、请求入参和驱动返回；最早断点是目标 HAL 入口。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-audio-acdac20 -->
<a id="mod-audio-acdac20"></a>
### `Audio`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-133，标签 `Audio`）；original-diagram-02/Host(SOS YOCTO)/Drivers（d02-049，标签 `Audio`）。Occurrence 角色：d01-133（runtime）：运行节点标签；是否独立进程仍需运行时证据；d02-049（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；SOS/Yocto；层级 HAL；Host(SOS YOCTO)/Drivers。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android / SOS/Yocto，层级为 HAL / Host(SOS YOCTO)/Drivers。；[可信度：标准机制推断] 抽象音频设备打开、流配置与读写。
- **处理的数据或资源**：[可信度：标准机制推断] 音频设备、PCM buffer、采样率/声道和路由参数。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Audio codec/ALSA 驱动 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 设备 open 失败、参数不兼容、写阻塞、underrun 或路由错误。
- **日志与观测点**：[可信度：标准机制推断] 按 AudioFlinger/Host Client→Audio HAL→ALSA→codec 帧计数 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-display-574ff9b -->
<a id="mod-display-574ff9b"></a>
### `Display`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-135，标签 `Display`）；original-diagram-02/Host(SOS YOCTO)/Drivers（d02-048，标签 `Display`）。Occurrence 角色：d01-135（runtime）：运行节点标签；是否独立进程仍需运行时证据；d02-048（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；SOS/Yocto；层级 HAL；Host(SOS YOCTO)/Drivers。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android / SOS/Yocto，层级为 HAL / Host(SOS YOCTO)/Drivers。；[可信度：标准机制推断] 抽象显示输出、图层提交和显示参数。
- **处理的数据或资源**：[可信度：标准机制推断] 显示模式、图层、buffer、fence、亮度/时序和输出状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 DRM/KMS、MDP 或 Host 显示后端 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 显示未枚举、模式设置失败、fence 超时、图层未提交或热插拔状态错误。
- **日志与观测点**：[可信度：标准机制推断] 按 合成请求→Display HAL/后端→DRM/KMS→扫描输出 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-power-7548ab5 -->
<a id="mod-power-7548ab5"></a>
### `Power`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-137，标签 `Power`）。Occurrence 角色：d01-137（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 抽象电源模式、性能提示和低功耗状态。
- **处理的数据或资源**：[可信度：标准机制推断] 电源 hint、模式、唤醒源、休眠状态和性能约束。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 内核电源/调频与平台电源控制 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] hint 未生效、休眠被阻止、唤醒源异常、状态不同步或功耗约束残留。
- **日志与观测点**：[可信度：标准机制推断] 按 Power Manager→Power HAL→内核节点/唤醒源→状态回读 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-ril-edc8d82 -->
<a id="mod-ril-edc8d82"></a>
### `RIL`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-139，标签 `RIL`）。Occurrence 角色：d01-139（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 连接 Android Telephony 与 Modem 控制/状态能力。
- **处理的数据或资源**：[可信度：标准机制推断] SIM、注册、信号、数据、呼叫、SMS 请求和 unsolicited 事件。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Modem 接口/CCCI 或厂商 Radio 服务 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] Radio 服务未 Ready、请求超时、序号错配、unsolicited 丢失或 Modem 重启后旧会话。
- **日志与观测点**：[可信度：标准机制推断] 按 Telephony→RIL 请求序号→Modem→响应/事件→Framework 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-sensors-711bf35 -->
<a id="mod-sensors-711bf35"></a>
### `Sensors`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-143，标签 `Sensors`）。Occurrence 角色：d01-143（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 抽象传感器枚举、启停、采样和事件批处理。
- **处理的数据或资源**：[可信度：标准机制推断] sensor handle、采样率、事件、timestamp、精度和 flush 状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 传感器 hub/内核驱动 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 传感器缺失、采样率错误、事件停更、时间戳跳变或 flush 不返回。
- **日志与观测点**：[可信度：标准机制推断] 按 Framework→Sensors HAL→驱动/hub→事件队列 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-wifi-f35a5a2 -->
<a id="mod-wifi-f35a5a2"></a>
### `WIFI`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-144，标签 `WIFI`）。Occurrence 角色：d01-144（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 抽象无线网卡控制与状态。
- **处理的数据或资源**：[可信度：标准机制推断] 接口、扫描、连接、信号、密钥引用和驱动状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 wpa_supplicant/无线驱动 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 接口未起、扫描无结果、认证失败、漫游抖动或驱动固件异常。
- **日志与观测点**：[可信度：标准机制推断] 按 Connectivity/WifiService→HAL/supplicant→驱动→连接事件 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-lights-646a059 -->
<a id="mod-lights-646a059"></a>
### `Lights`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-145，标签 `Lights`）。Occurrence 角色：d01-145（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 抽象背光、按键灯及车辆灯光类输出。
- **处理的数据或资源**：[可信度：标准机制推断] light ID、颜色/亮度、闪烁模式和设备状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 LED/backlight 驱动或车辆控制端 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] light ID 映射错误、亮度不生效、设备节点失败或状态回读缺失。
- **日志与观测点**：[可信度：标准机制推断] 按 SystemUI/Car 服务→Lights HAL→驱动/车辆端→物理结果 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-location-d219c68 -->
<a id="mod-location-d219c68"></a>
### `Location`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-146，标签 `Location`）。Occurrence 角色：d01-146（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 抽象定位引擎启停、配置和位置事件。
- **处理的数据或资源**：[可信度：标准机制推断] 位置、速度、航向、精度、时间戳、NMEA 类原始数据和引擎状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 GNSS/mbgnss 与定位设备 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 引擎未启动、无卫星数据、时间戳陈旧、回调停止或定位源错误。
- **日志与观测点**：[可信度：标准机制推断] 按 Location Service→Location HAL→GNSS→位置回调 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-bootctrl-4bc3e0b -->
<a id="mod-bootctrl-4bc3e0b"></a>
### `BootCtrl`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-147，标签 `BootCtrl`）。Occurrence 角色：d01-147（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 管理可启动 slot、成功标记和回滚相关控制。
- **处理的数据或资源**：[可信度：标准机制推断] slot、可启动/成功状态、重试计数和启动元数据。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 BootLoader/分区元数据 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] slot 标记错误、写入失败、升级后未标成功或重复回滚。
- **日志与观测点**：[可信度：标准机制推断] 按 Update Engine→BootCtrl→启动元数据→BootLoader 选择 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-audiocontrol-e44e0ae -->
<a id="mod-audiocontrol-e44e0ae"></a>
### `AudioControl`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-148，标签 `AudioControl`）。Occurrence 角色：d01-148（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 承接汽车音频路由、焦点/增益和总线控制边界。
- **处理的数据或资源**：[可信度：标准机制推断] usage/context、zone、gain、mute、路由与设备状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Audio HAL/车辆功放或 DSP 控制 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] zone/context 映射错、增益未生效、mute 残留、功放未 Ready。
- **日志与观测点**：[可信度：标准机制推断] 按 Car Audio/AudioPolicy→AudioControl→HAL/功放→状态回读 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-radio-d432c35 -->
<a id="mod-radio-d432c35"></a>
### `radio`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-149，标签 `radio`）。Occurrence 角色：d01-149（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 表示厂商 radio HAL/适配项；精确接口身份需 manifest 确认。
- **处理的数据或资源**：[可信度：标准机制推断] Radio/Modem 请求、状态与回调句柄。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 RIL/Modem 端 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 接口版本不匹配、服务未注册、请求超时或事件丢失。
- **日志与观测点**：[可信度：标准机制推断] 按 Telephony/RIL→radio HAL→Modem→response/event 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-vehiclehal-4b9388c -->
<a id="mod-vehiclehal-4b9388c"></a>
### `VehicleHAL`

别名：`VehicleHal`。出现位置：original-diagram-01/HAL（d01-150，标签 `VehicleHAL`）；original-diagram-03/UOS(Android)/Vehicle（d03-023，标签 `VehicleHal`）。Occurrence 角色：d01-150（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-023（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL；UOS(Android)/Vehicle。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Android Vehicle HAL 边界，连接 CarService 与车辆属性提供端。；[可信度：标准机制推断] Android Vehicle HAL 边界，把 CarService 的 Vehicle Property 合同映射到车辆数据提供端。
- **处理的数据或资源**：[可信度：标准机制推断] propertyId、areaId、value、status、timestamp 及 GET/SET/SUBSCRIBE 请求。
- **输入**：[可信度：待 MT8676 确认] CarService 的 Vehicle Property GET/SET/SUBSCRIBE、下层属性事件
- **内部处理**：[可信度：标准机制推断] 校验属性合同、转发控制、接收车辆事件并保持时间戳/状态语义。
- **输出**：[可信度：待 MT8676 确认] SET 状态、GET 结果和 Vehicle Property 变化事件
- **上游**：[可信度：待 MT8676 确认] CarService。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] CanService/FDBus/IPCL 适配端（具体项目映射待确认）。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] AIDL/HIDL Vehicle HAL；Vehicle Property API。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL 服务由启动清单与服务管理器控制；服务代际变化后 CarService 需重连和重订阅。
- **常见故障模式**：[可信度：标准机制推断] propertyId/area 映射错误、时间戳陈旧、SET 无回读、HAL 断连或事件风暴。
- **日志与观测点**：[可信度：标准机制推断] 记录 CarService 请求、VehicleHAL 入口/出口、属性时间戳和下层事件；最早断点是 property 请求是否进入 HAL。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-configstorehal-3af9666 -->
<a id="mod-configstorehal-3af9666"></a>
### `configstoreHAL`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-152，标签 `configstoreHAL`）。Occurrence 角色：d01-152（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 提供平台配置查询的 HAL 适配边界。
- **处理的数据或资源**：[可信度：标准机制推断] 配置键、版本、属性和值。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 vendor 配置存储 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 配置缺失、版本错配、默认值掩盖错误或服务未注册。
- **日志与观测点**：[可信度：标准机制推断] 按 调用方→configstoreHAL→配置源→返回值/版本 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mbgnss-d6e0f37 -->
<a id="mod-mbgnss-d6e0f37"></a>
### `mbgnss`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-153，标签 `mbgnss`）。Occurrence 角色：d01-153（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 厂商 GNSS HAL/适配模块，连接 Android 定位与 GNSS 提供端。
- **处理的数据或资源**：[可信度：标准机制推断] 定位、卫星、NMEA 类数据、引擎状态和时间戳。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 GNSS 驱动/定位引擎 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 引擎未 Ready、回调停止、数据陈旧、源切换错误或设备断连。
- **日志与观测点**：[可信度：标准机制推断] 按 Location Service→mbgnss→GNSS 设备→位置/状态回调 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mbsensors-c2a4f47 -->
<a id="mod-mbsensors-c2a4f47"></a>
### `mbsensors`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-154，标签 `mbsensors`）。Occurrence 角色：d01-154（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 厂商传感器 HAL/适配模块。
- **处理的数据或资源**：[可信度：标准机制推断] 传感器 handle、事件、采样率、timestamp 和校准状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 传感器 hub/驱动 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 枚举缺失、事件停更、采样/时间戳错误或校准异常。
- **日志与观测点**：[可信度：标准机制推断] 按 Sensor Framework→mbsensors→hub/驱动→事件 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mbos-hal-2cf3361 -->
<a id="mod-mbos-hal-2cf3361"></a>
### `MBOS HAL`

<!-- explanation-refresh:mbos-hal -->
**资料核对后的架构解释（2026-09-20）**

新图 HAL 的 IpcServer 是 FDBus 服务端 mb.os；IpcClientHud 指向 mb.qnx.ivi_service，IpcClientCmd 指向 mb.qnxcmd_service；MonitorQnx 连接 mb.diagnostics 并通过 CanClient 接收 mb.can。MonitorBsp 的 WLAN SSR/PCIe 节点用于状态观察。图中的“数据”没有定义为视频原始帧，不能据此描述成 AVM/DVR 像素全部经 FDBus；Qnx 名称也不能单独证明 OS 身份。[MBOS-20260920 · 盟博OS架构-用户提供-20260920.png](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0022.html)
<!-- /explanation-refresh -->


别名：`MBOSHAL`。出现位置：original-diagram-01/HAL（d01-155，标签 `MBOS HAL`）；original-diagram-03/UOS(Android)/Vehicle（d03-024，标签 `MBOSHAL`）。Occurrence 角色：d01-155（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-024（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL；UOS(Android)/Vehicle。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：用户补图确认 IpcServer/多个 IpcClient/Monitor 的角色与部分 FDBus 端点，分别承担业务 IPC、状态采集与跨域访问；具体进程与消息合同未给出。[MBOS-20260920 · 盟博OS架构-用户提供-20260920.png](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0022.html)
- **处理的数据或资源**：[可信度：待 MT8676 确认] 私有请求、状态和资源句柄；IDL、字段、所有权与缓存合同均未冻结。
- **输入**：[可信度：待 MT8676 确认] app/CarService 或 MBOS Client 请求（图示关系）
- **内部处理**：[可信度：待 MT8676 确认] 不得把名称推导为具体路由；应以 IDL、服务注册和 trace 还原 Proxy/服务端处理。
- **输出**：[可信度：待 MT8676 确认] pending：结果、事件和错误模型待确认
- **上游**：[可信度：待 MT8676 确认] app；CarService（可能关系，待确认）。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] MBOS/跨域服务（pending）。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 项目私有 API（pending）。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：待 MT8676 确认] 所有者、Ready、重启与 Client 重绑规则待启动配置和实现证据确认。
- **常见故障模式**：[可信度：待 MT8676 确认] 私有服务未注册、版本不兼容、旧句柄、回调丢失或跨域端点未 Ready。
- **日志与观测点**：[可信度：待 MT8676 确认] 先取进程树、服务注册、IDL 版本、请求/响应关联和双方日志；最早断点是 Proxy 是否找到目标端点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。 [可信度：待 MT8676 确认] 私有接口、端点身份、参数和恢复策略均待 MT8676 确认。

<!-- module-id: mod-mblogd-c9ac784 -->
<a id="mod-mblogd-c9ac784"></a>
### `mblogd`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-156，标签 `mblogd`）。Occurrence 角色：d01-156（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL。；[可信度：标准机制推断] 厂商日志守护/适配标签；进程身份和存储策略待确认。
- **处理的数据或资源**：[可信度：标准机制推断] 日志记录、级别、buffer、落盘/上传状态和存储配额。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 logd/文件系统或厂商日志端 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、buffer 溢出、挂载不可用、级别过滤错误或写盘失败。
- **日志与观测点**：[可信度：标准机制推断] 按 生产者→mblogd 接收计数→buffer→存储/上传结果 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.10 Kernel、Drivers 与 BootLoader

<!-- module-id: mod-usb-09716c4 -->
<a id="mod-usb-09716c4"></a>
### `USB`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-138，标签 `USB`）；original-diagram-01/Kernel（d01-174，标签 `USB`）。Occurrence 角色：d01-138（runtime）：运行节点标签；是否独立进程仍需运行时证据；d01-174（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL；Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL / Kernel。；[可信度：标准机制推断] 抽象 USB 端口、角色、功能与设备状态。
- **处理的数据或资源**：[可信度：标准机制推断] 端口、host/device 角色、功能组合、枚举和连接状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 USB gadget/host 控制器驱动 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 未枚举、角色切换失败、功能配置不一致、供电异常或断连未清理。
- **日志与观测点**：[可信度：标准机制推断] 按 Framework/服务→USB HAL→控制器/设备枚举→状态事件 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-drm-efc0f9e -->
<a id="mod-drm-efc0f9e"></a>
### `DRM`

别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-140，标签 `DRM`）；original-diagram-01/Kernel（d01-165，标签 `DRM`）。Occurrence 角色：d01-140（runtime）：运行节点标签；是否独立进程仍需运行时证据；d01-165（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 HAL；Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 HAL / Kernel。；[可信度：标准机制推断] 在 HAL occurrence 中抽象显示资源/模式；在 Kernel occurrence 中代表内核 DRM 框架。
- **处理的数据或资源**：[可信度：标准机制推断] connector/crtc/plane、framebuffer、fence 和 mode 状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 DRM/KMS 内核与显示硬件 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL/适配端受 init、服务管理器、设备电源和上层 Client 生命周期约束；重启后需重新打开设备、绑定并注册回调。
- **常见故障模式**：[可信度：标准机制推断] 资源分配失败、atomic commit 失败、fence 不完成或显示设备重置。
- **日志与观测点**：[可信度：标准机制推断] 按 SurfaceFlinger/Host compositor→HAL→DRM atomic commit→vblank 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-camera-4da9c9a -->
<a id="mod-camera-4da9c9a"></a>
### `Camera`

<!-- explanation-refresh:camera-module -->
**资料核对后的架构解释（2026-09-20）**

MT8676 手册将 CameraTurbo/MW/sensor/driver 的硬件相关服务放在 Yocto，同时有 Android/Yocto camerahalserver 与启动依赖；MT8668 手册明确 Android 通过 RpcBinder/VSOCK 访问 Host，Host 以 LocalService 服务本地、以 RpcService 服务跨域消费者。原 Camera 框继续表示服务边界；具体 cameraId、buffer 格式、fence 和恢复时序由该平台配置决定。[S145 · MT8676_Hypervisor_Camera_User_Manual_V1.1.pdf · PDF第4-8页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0006.html#page-4) [S019 · MT8668_Hypervisor_Camera_User_Manual_CN_V1.0.pdf · PDF第6-8页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0002.html#page-6)
<!-- /explanation-refresh -->


别名：无已登记别名。出现位置：original-diagram-01/HAL（d01-142，标签 `Camera`）；original-diagram-01/Kernel（d01-175，标签 `Camera`）；original-diagram-02/Host(SOS YOCTO)/OS Runtime（d02-037，标签 `Camera`）。Occurrence 角色：d01-142（runtime）：运行节点标签；是否独立进程仍需运行时证据；d01-175（runtime）：运行节点标签；是否独立进程仍需运行时证据；d02-037（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

**Occurrence 分解**：

- `d01-142`（role=runtime）作用=Camera HAL runtime；数据/资源=request/result 与 HAL buffer；生命周期=随 Camera HAL 服务；故障边界=配置/回调/buffer 失败；观测点=Camera HAL request/result。
- `d01-175`（role=runtime）作用=Kernel Camera runtime；数据/资源=设备节点、中断与 DMA buffer；生命周期=随内核 probe；故障边界=probe/中断/队列失败；观测点=内核日志和帧计数。
- `d02-037`（role=runtime）作用=SOS/Yocto Camera runtime；数据/资源=Host 相机会话与帧；生命周期=随 SOS Host 服务；故障边界=会话/取帧失败；观测点=SOS Camera 会话。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；SOS/Yocto；层级 HAL；Kernel；Host(SOS YOCTO)/OS Runtime。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：runtime×3）
- **核心作用**：MTK 对应版本中，Yocto Host 执行硬件相关控制，本地/跨域消费者经相应服务访问；Android 服务/API 入口不意味着硬件控制器归 Android 独占。[S145 · MT8676_Hypervisor_Camera_User_Manual_V1.1.pdf · PDF第6-8页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0006.html#page-6) [S019 · MT8668_Hypervisor_Camera_User_Manual_CN_V1.0.pdf · PDF第6-8页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0002.html#page-6)
- **处理的数据或资源**：[可信度：标准机制推断] HAL 请求/结果、Kernel 设备节点/中断/buffer、SOS 摄像头会话和帧。
- **输入**：[可信度：待 MT8676 确认] Sensor 图像、V4L2/HAL 配置和采集请求
- **内部处理**：[可信度：标准机制推断] Camera HAL 映射请求，Kernel occurrence 驱动硬件，SOS/Yocto occurrence 管理 Host 摄像头会话；三者不是同一进程。
- **输出**：[可信度：待 MT8676 确认] Frame Buffer、timestamp/sequence 和 Camera error
- **上游**：[可信度：待 MT8676 确认] Camera Service 或 SOS Camera Client；ISP。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Gstreamer/RVC/AVM/DMS；应用 Surface。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Camera HAL；V4L2；DMA-BUF/Fence。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 各 occurrence 分别由 HAL 服务、内核 probe 或 SOS Host 启动管理；复位恢复边界不能跨层套用。
- **常见故障模式**：[可信度：标准机制推断] HAL 配置失败、Kernel probe/帧队列异常、SOS 会话未建立、buffer 未归还或身份误合并。
- **日志与观测点**：[可信度：标准机制推断] 按 Camera HAL request/result→Kernel buffer/中断→SOS 会话分别核对；最早断点是故障所属层的第一处断流。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-kernel-74808d3 -->
<a id="mod-kernel-74808d3"></a>
### `Kernel`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-157，标签 `Kernel`）。Occurrence 角色：d01-157（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-157 直接包含 `iAP2/MFI`、`Scheduler`、`ALSA`、`Codec`、`OpenGL`、`eMMC/UFS/SD`、`RTC`、`DRM`、`MDP`、`Network`、`Memory`、`VFS`、`Sensor`、`MT66XX`、`CCCI`、`Ethernet`、`USB`、`Camera`、`Peripheral(UART SPI GPIO ADC...)`、`BootLoader`。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] `Kernel` 是功能域或驱动分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该功能域或驱动分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕功能域或驱动分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该功能域或驱动分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该功能域或驱动分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-iap2-mfi-34f0115 -->
<a id="mod-iap2-mfi-34f0115"></a>
### `iAP2/MFI`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-158，标签 `iAP2/MFI`）。Occurrence 角色：d01-158（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 连接 Apple 配件协议/认证相关驱动或平台能力。
- **处理的数据或资源**：[可信度：标准机制推断] 配件会话、认证、USB/蓝牙传输和协议帧。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 USB/蓝牙与认证硬件 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 认证失败、会话断开、传输停滞或版本不兼容。
- **日志与观测点**：[可信度：标准机制推断] 按 CarPlay/iAP2→传输→认证→会话状态 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-scheduler-cdcb4d8 -->
<a id="mod-scheduler-cdcb4d8"></a>
### `Scheduler`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-159，标签 `Scheduler`）。Occurrence 角色：d01-159（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 调度可运行线程并实施优先级/时间片策略。
- **处理的数据或资源**：[可信度：标准机制推断] 线程状态、优先级、运行队列和 CPU 时间。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 CPU/中断与任务 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 高优先级饥饿、负载过高、实时线程超时或绑核不当。
- **日志与观测点**：[可信度：标准机制推断] 按 业务线程唤醒→运行队列→实际运行延迟 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-alsa-8f216ba -->
<a id="mod-alsa-8f216ba"></a>
### `ALSA`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-160，标签 `ALSA`）。Occurrence 角色：d01-160（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 提供 Linux 音频设备、PCM 和 mixer 接口。
- **处理的数据或资源**：[可信度：标准机制推断] PCM ring buffer、hw/sw params、mixer control 和设备状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Audio codec/DSP 驱动 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 设备不存在、参数不匹配、XRUN、写阻塞或 mixer 路由错误。
- **日志与观测点**：[可信度：标准机制推断] 按 Audio HAL/Host→ALSA PCM/mixer→driver→codec 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-codec-a336769 -->
<a id="mod-codec-a336769"></a>
### `Codec`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-161，标签 `Codec`）。Occurrence 角色：d01-161（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 表示音视频编解码或音频 codec 资源；具体 occurrence 语义需上下文确认。
- **处理的数据或资源**：[可信度：标准机制推断] 压缩帧/PCM、格式参数、buffer、时钟和设备寄存器。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 硬件 codec/媒体引擎 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 格式不支持、初始化失败、buffer 饥饿、时钟/电源异常。
- **日志与观测点**：[可信度：标准机制推断] 按 调用端→codec 配置→输入/输出帧计数→硬件状态 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-opengl-64772f9 -->
<a id="mod-opengl-64772f9"></a>
### `OpenGL`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-162，标签 `OpenGL`）。Occurrence 角色：d01-162（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 提供图形渲染接口与命令提交。
- **处理的数据或资源**：[可信度：标准机制推断] 纹理、shader、framebuffer、图形上下文和 fence。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 图形驱动/显示 buffer 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 上下文丢失、shader 错误、显存不足、命令阻塞或 fence 超时。
- **日志与观测点**：[可信度：标准机制推断] 按 应用/HWUI→OpenGL 命令→驱动→buffer/fence 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-emmc-ufs-sd-cac7f94 -->
<a id="mod-emmc-ufs-sd-cac7f94"></a>
### `eMMC/UFS/SD`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-163，标签 `eMMC/UFS/SD`）。Occurrence 角色：d01-163（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 管理板载与可移动存储控制器/介质。
- **处理的数据或资源**：[可信度：标准机制推断] 块请求、队列、分区、介质健康和 I/O 错误。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 存储控制器/介质 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 设备未枚举、I/O 超时、坏块、链路降级或热拔出。
- **日志与观测点**：[可信度：标准机制推断] 按 VFS/块层→控制器队列→介质完成/错误 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-rtc-4eac074 -->
<a id="mod-rtc-4eac074"></a>
### `RTC`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-164，标签 `RTC`）。Occurrence 角色：d01-164（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 提供实时时钟读取、设置与闹钟唤醒。
- **处理的数据或资源**：[可信度：标准机制推断] 墙钟时间、alarm、唤醒中断和校准状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 RTC 硬件 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 时间漂移、设置失败、alarm 未触发或 suspend 唤醒失败。
- **日志与观测点**：[可信度：标准机制推断] 按 时间服务→RTC ioctl→硬件寄存器→中断 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mdp-c7d6801 -->
<a id="mod-mdp-c7d6801"></a>
### `MDP`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-166，标签 `MDP`）。Occurrence 角色：d01-166（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 承担显示/媒体数据路径中的缩放、旋转、颜色或搬运。
- **处理的数据或资源**：[可信度：标准机制推断] 图像 buffer、格式、裁剪、变换、DMA/fence。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 显示硬件/内存 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 格式不支持、带宽不足、DMA/fence 超时或 buffer 映射错误。
- **日志与观测点**：[可信度：标准机制推断] 按 合成/Camera→MDP job→buffer/fence→显示 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-network-53ebc57 -->
<a id="mod-network-53ebc57"></a>
### `Network`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-167，标签 `Network`）。Occurrence 角色：d01-167（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 提供内核网络协议栈与设备接口。
- **处理的数据或资源**：[可信度：标准机制推断] packet、Socket、路由、邻居和接口统计。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Ethernet/WIFI/Modem NIC 驱动 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 接口 down、丢包、路由错误、拥塞或 Socket 资源耗尽。
- **日志与观测点**：[可信度：标准机制推断] 按 应用 Socket→协议栈→路由/接口→收发计数 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-memory-89c8a28 -->
<a id="mod-memory-89c8a28"></a>
### `Memory`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-168，标签 `Memory`）。Occurrence 角色：d01-168（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 管理物理/虚拟内存、页分配与回收。
- **处理的数据或资源**：[可信度：标准机制推断] page、匿名/文件映射、slab、swap/zram 和压力指标。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 物理内存/IOMMU 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 泄漏、碎片、分配失败、回收抖动或映射错误。
- **日志与观测点**：[可信度：标准机制推断] 按 进程增长→分配类型→回收/压力→kill/失败 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-vfs-9913e8a -->
<a id="mod-vfs-9913e8a"></a>
### `VFS`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-169，标签 `VFS`）。Occurrence 角色：d01-169（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 统一文件系统路径、inode、mount 和文件操作。
- **处理的数据或资源**：[可信度：标准机制推断] 路径、inode、dentry、mount、FD 和页缓存。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 具体文件系统/块设备 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 路径/权限错误、mount 丢失、inode/FD 耗尽或 I/O 阻塞。
- **日志与观测点**：[可信度：标准机制推断] 按 应用文件调用→VFS→文件系统→块 I/O 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-sensor-9101fc1 -->
<a id="mod-sensor-9101fc1"></a>
### `Sensor`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-170，标签 `Sensor`）。Occurrence 角色：d01-170（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 连接物理传感器设备与上层事件。
- **处理的数据或资源**：[可信度：标准机制推断] 原始采样、中断、校准、timestamp 和设备状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 传感器总线/硬件 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] probe 失败、中断不来、采样停滞、校准或时间戳异常。
- **日志与观测点**：[可信度：标准机制推断] 按 HAL→设备节点→驱动采样/中断→事件 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mt66xx-a4ad0c0 -->
<a id="mod-mt66xx-a4ad0c0"></a>
### `MT66XX`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-171，标签 `MT66XX`）。Occurrence 角色：d01-171（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 图中 MediaTek 无线/连接芯片驱动族标签。
- **处理的数据或资源**：[可信度：标准机制推断] 固件、控制命令、无线数据与芯片状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 MT66XX 芯片/总线 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 固件加载失败、芯片未 Ready、总线错误或重置循环。
- **日志与观测点**：[可信度：标准机制推断] 按 上层网络/蓝牙→驱动→固件/芯片状态 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-ccci-7afb523 -->
<a id="mod-ccci-7afb523"></a>
### `CCCI`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-172，标签 `CCCI`）。Occurrence 角色：d01-172（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：MediaTek AP 与 Modem 之间的跨核通信内核通道。；[可信度：标准机制推断] 提供 AP 与 Modem 间的标准跨核通信接口。
- **处理的数据或资源**：[可信度：标准机制推断] 控制/数据通道、Modem 状态、队列和错误计数。
- **输入**：[可信度：待 MT8676 确认] Telephony/RIL/UMDP 的 Modem 请求和 Modem 上行事件
- **内部处理**：[可信度：标准机制推断] 围绕 Modem 域 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] Modem response/URC、通道状态和驱动错误
- **上游**：[可信度：待 MT8676 确认] RIL/Telephony/UMDP Platform Adapter。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Modem firmware/baseband。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] CCCI；Shared Memory/Interrupt（标准机制）。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] Modem 未 Ready、通道堵塞、重置、消息丢失或版本不匹配。
- **日志与观测点**：[可信度：标准机制推断] 按 RIL/服务→CCCI channel→Modem→response/event 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-ethernet-23946c7 -->
<a id="mod-ethernet-23946c7"></a>
### `Ethernet`

别名：`ethernet`。出现位置：original-diagram-01/Kernel（d01-173，标签 `ethernet`）；original-diagram-02/Host(SOS YOCTO)/Drivers（d02-050，标签 `Ethernet`）；original-diagram-02/Guest(UOS Android)/Platform（d02-066，标签 `Ethernet`）。Occurrence 角色：d01-173（runtime）：运行节点标签；是否独立进程仍需运行时证据；d02-050（runtime）：运行节点标签；是否独立进程仍需运行时证据；d02-066（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；SOS/Yocto；层级 Kernel；Host(SOS YOCTO)/Drivers；Guest(UOS Android)/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android / SOS/Yocto，层级为 Kernel / Host(SOS YOCTO)/Drivers / Guest(UOS Android)/Platform。；[可信度：标准机制推断] 管理以太网 MAC/PHY、链路和 packet 收发。
- **处理的数据或资源**：[可信度：标准机制推断] link、frame、队列、错误/丢包和接口配置。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Ethernet 控制器/PHY 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] link down、协商失败、CRC/丢包、队列堵塞或驱动重置。
- **日志与观测点**：[可信度：标准机制推断] 按 网络栈→NIC queue→MAC/PHY→对端统计 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-peripheral-uart-spi-gpio-adc-18f46a9 -->
<a id="mod-peripheral-uart-spi-gpio-adc-18f46a9"></a>
### `Peripheral(UART SPI GPIO ADC...)`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-176，标签 `Peripheral(UART SPI GPIO ADC...)`）。Occurrence 角色：d01-176（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 汇总 UART、SPI、GPIO、ADC 等外设驱动族。
- **处理的数据或资源**：[可信度：标准机制推断] 外设设备、寄存器、中断、DMA、采样和错误状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 板级外设 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] pinmux/时钟错误、probe 失败、中断缺失、传输超时或电平异常。
- **日志与观测点**：[可信度：标准机制推断] 按 Client→设备节点/driver→控制器→物理信号 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-bootloader-8b92f48 -->
<a id="mod-bootloader-8b92f48"></a>
### `BootLoader`

别名：无已登记别名。出现位置：original-diagram-01/Kernel（d01-177，标签 `BootLoader`）。Occurrence 角色：d01-177（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Kernel。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Kernel。；[可信度：标准机制推断] 完成早期硬件初始化、镜像校验/选择并启动 Kernel。
- **处理的数据或资源**：[可信度：标准机制推断] 启动介质、镜像、slot、签名、启动参数和复位原因。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 SoC/存储与 Kernel 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 受 BootLoader、Kernel probe、设备 bind、suspend/resume 和错误恢复阶段约束。
- **常见故障模式**：[可信度：标准机制推断] 镜像校验失败、slot 选择错、硬件初始化失败或启动参数异常。
- **日志与观测点**：[可信度：标准机制推断] 按 复位→BootLoader 日志→镜像/slot→Kernel entry 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.11 MCU：MCAL、BSW、OS、RTE、SWC 与应用功能

<!-- module-id: mod-swcs-1a1c498 -->
<a id="mod-swcs-1a1c498"></a>
### `SWCs`

别名：无已登记别名。出现位置：original-diagram-02/MCU/SWCs（d02-002，标签 `SWCs`）。Occurrence 角色：d02-002（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d02-002 直接包含 `仪表应用`、`行车电脑`、`电源管理`、`警示灯控制`、`ADAS应用`、`DSP控制`、`功能安全`、`功能诊断`。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/SWCs。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：SWCs 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `SWCs` 是功能域或驱动分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该功能域或驱动分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕功能域或驱动分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该功能域或驱动分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该功能域或驱动分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-f20b335 -->
<a id="mod-item-f20b335"></a>
### `仪表应用`

别名：无已登记别名。出现位置：original-diagram-02/MCU/SWCs（d02-003，标签 `仪表应用`）。Occurrence 角色：d02-003（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/SWCs。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。；[可信度：标准机制推断] `仪表应用` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `仪表应用` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `仪表应用` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-ba91a6f -->
<a id="mod-item-ba91a6f"></a>
### `行车电脑`

别名：无已登记别名。出现位置：original-diagram-02/MCU/SWCs（d02-004，标签 `行车电脑`）。Occurrence 角色：d02-004（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/SWCs。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。；[可信度：标准机制推断] `行车电脑` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `行车电脑` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `行车电脑` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-226c25e -->
<a id="mod-item-226c25e"></a>
### `电源管理`

别名：无已登记别名。出现位置：original-diagram-02/MCU/SWCs（d02-005，标签 `电源管理`）。Occurrence 角色：d02-005（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/SWCs。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。；[可信度：标准机制推断] `电源管理` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `电源管理` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `电源管理` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-abe38e8 -->
<a id="mod-item-abe38e8"></a>
### `警示灯控制`

别名：无已登记别名。出现位置：original-diagram-02/MCU/SWCs（d02-006，标签 `警示灯控制`）。Occurrence 角色：d02-006（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/SWCs。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。；[可信度：标准机制推断] `警示灯控制` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `警示灯控制` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `警示灯控制` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-adas-475098f -->
<a id="mod-adas-475098f"></a>
### `ADAS应用`

别名：无已登记别名。出现位置：original-diagram-02/MCU/SWCs（d02-007，标签 `ADAS应用`）。Occurrence 角色：d02-007（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/SWCs。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。；[可信度：标准机制推断] `ADAS应用` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `ADAS应用` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `ADAS应用` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-dsp-e7758dd -->
<a id="mod-dsp-e7758dd"></a>
### `DSP控制`

别名：无已登记别名。出现位置：original-diagram-02/MCU/SWCs（d02-008，标签 `DSP控制`）。Occurrence 角色：d02-008（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/SWCs。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。；[可信度：标准机制推断] `DSP控制` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `DSP控制` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `DSP控制` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-b1f62c2 -->
<a id="mod-item-b1f62c2"></a>
### `功能安全`

别名：无已登记别名。出现位置：original-diagram-02/MCU/SWCs（d02-009，标签 `功能安全`）。Occurrence 角色：d02-009（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/SWCs。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。；[可信度：标准机制推断] `功能安全` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `功能安全` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `功能安全` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-item-daeb7bd -->
<a id="mod-item-daeb7bd"></a>
### `功能诊断`

别名：无已登记别名。出现位置：original-diagram-02/MCU/SWCs（d02-010，标签 `功能诊断`）。Occurrence 角色：d02-010（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/SWCs。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/SWCs。；[可信度：标准机制推断] `功能诊断` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `功能诊断` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `功能诊断` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-rte-40e8bc6 -->
<a id="mod-rte-40e8bc6"></a>
### `RTE`

别名：无已登记别名。出现位置：original-diagram-02/MCU/RTE（d02-011，标签 `RTE`）；original-diagram-03/Legend（d03-001，标签 `RTE`）。Occurrence 角色：d02-011（container）：分组容器；只表达该 occurrence 的包含边界；d03-001（legend）：关系图例；只解释图中连线或颜色语义。包含导航：d02-011 直接包含 `E2E`。

**Occurrence 分解**：

- `d02-011`（role=container）作用=AUTOSAR RTE 分组；数据/资源=端口、Runnable、E2E 与 SWC 子项；生命周期=随 MCU 配置/初始化；故障边界=映射或调度失败；观测点=RTE 配置和 Runnable。
- `d03-001`（role=legend）作用=RTE 箭头图例；数据/资源=连线机制标签；生命周期=图例无运行生命周期；故障边界=误把图例当服务；观测点=箭头两端端口。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；Cross-domain；层级 MCU/RTE；Legend。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：container×1、legend×1）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU / Cross-domain，层级为 MCU/RTE / Legend。；[可信度：标准机制推断] RTE 是 AUTOSAR Runtime Environment：图 2 occurrence 为 RTE 分组，图 3 occurrence 为通信箭头图例。
- **处理的数据或资源**：[可信度：标准机制推断] AUTOSAR 端口、Runnable 调用、数据元素、事件、E2E 状态和 RTE 配置。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] container occurrence 组织 RTE/E2E 边界；legend occurrence 说明连线采用 RTE 机制，不是独立服务。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] RTE 配置随 MCU 软件构建并在 OS/SWC 初始化时生效；图例无运行生命周期。
- **常见故障模式**：[可信度：标准机制推断] 端口映射错误、Runnable 未触发、E2E 校验失败、数据陈旧或把 RTE 箭头当进程。
- **日志与观测点**：[可信度：标准机制推断] 核对 RTE 配置、端口映射、Runnable 激活、E2E 结果和输入输出时间戳；最早断点是源端口是否更新。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-e2e-16f7613 -->
<a id="mod-e2e-16f7613"></a>
### `E2E`

别名：无已登记别名。出现位置：original-diagram-02/MCU/RTE（d02-012，标签 `E2E`）。Occurrence 角色：d02-012（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/RTE。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/RTE。；[可信度：标准机制推断] `E2E` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `E2E` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `E2E` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-os-de8aa86 -->
<a id="mod-os-de8aa86"></a>
### `OS`

别名：无已登记别名。出现位置：original-diagram-02/MCU/Platform（d02-013，标签 `OS`）。Occurrence 角色：d02-013（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/Platform。；[可信度：标准机制推断] `OS` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `OS` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `OS` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-bsw-aa26638 -->
<a id="mod-bsw-aa26638"></a>
### `BSW`

别名：无已登记别名。出现位置：original-diagram-02/MCU/Platform（d02-014，标签 `BSW`）。Occurrence 角色：d02-014（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/Platform。；[可信度：标准机制推断] `BSW` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `BSW` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `BSW` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mcal-96dcb02 -->
<a id="mod-mcal-96dcb02"></a>
### `MCAL`

别名：无已登记别名。出现位置：original-diagram-02/MCU/Platform（d02-015，标签 `MCAL`）。Occurrence 角色：d02-015（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d02-015 直接包含 `CAN`、`SPI`。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/Platform。；[可信度：标准机制推断] `MCAL` 是功能域或驱动分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该功能域或驱动分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕功能域或驱动分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该功能域或驱动分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该功能域或驱动分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-can-aa884ac -->
<a id="mod-can-aa884ac"></a>
### `CAN`

别名：无已登记别名。出现位置：original-diagram-02/MCU/Platform（d02-016，标签 `CAN`）。Occurrence 角色：d02-016（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/Platform。；[可信度：标准机制推断] `CAN` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `CAN` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `CAN` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-fbl-a9bf6a9 -->
<a id="mod-fbl-a9bf6a9"></a>
### `FBL`

别名：无已登记别名。出现位置：original-diagram-02/MCU/Platform（d02-018，标签 `FBL`）。Occurrence 角色：d02-018（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU/Platform。；[可信度：标准机制推断] `FBL` 位于 MCU 实时软件链，负责其名称所示的控制、适配或基础能力。
- **处理的数据或资源**：[可信度：标准机制推断] `FBL` 相关车辆信号、周期/事件、质量状态及受控硬件资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 按 AUTOSAR 标准机制可经历 MCAL/BSW/RTE/SWC 边界；实际 runnable、端口和映射待配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受 MCU 上电、OS 调度和 RTE 初始化阶段约束；具体周期/优先级待工程配置确认。
- **常见故障模式**：[可信度：标准机制推断] 初始化未完成、信号映射错误、数据陈旧、E2E 检查失败或 runnable 未调度。
- **日志与观测点**：[可信度：标准机制推断] 核对 `FBL` 初始化、runnable/任务、输入信号时间戳与输出端口；最早断点是输入是否进入该模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-ipcl-d437f7b -->
<a id="mod-ipcl-d437f7b"></a>
### `IPCL`

别名：无已登记别名。出现位置：original-diagram-03/Legend（d03-003，标签 `IPCL`）；original-diagram-03/MCU（d03-046，标签 `IPCL`）。Occurrence 角色：d03-003（legend）：关系图例；只解释图中连线或颜色语义；d03-046（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

**Occurrence 分解**：

- `d03-003`（role=legend）作用=IPCL 箭头图例；数据/资源=跨处理器连线标签；生命周期=图例无运行生命周期；故障边界=误把图例当服务；观测点=箭头两端真实端点。
- `d03-046`（role=runtime）作用=MCU 侧 IPCL runtime；数据/资源=跨域消息、SPI 帧和队列；生命周期=随 MCU/IPCL 初始化；故障边界=帧/队列/复位错误；观测点=入队出队和 SPI 计数。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；MCU；层级 Legend；MCU。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：legend×1、runtime×1）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中 MCU、SOS 与 TBox 间的跨处理器通信层；私有实现 pending。；[可信度：待 MT8676 确认] IPCL 是图 3 的跨处理器通信机制：一个 occurrence 为箭头图例，一个为 MCU 侧 runtime 通信层。
- **处理的数据或资源**：[可信度：待 MT8676 确认] 跨域消息、SPI 帧、收发队列、序号/校验候选状态和复位代际。
- **输入**：[可信度：待 MT8676 确认] Vehicle Interface/SWC 与 CanService(DK CAN) 的跨域消息
- **内部处理**：[可信度：待 MT8676 确认] legend occurrence 只解释 IPCL 连线；runtime occurrence 在 MCU 侧封装/解封消息并连接 SPI，私有 Channel 待确认。
- **输出**：[可信度：待 MT8676 确认] 对端消息、Sequence/CRC 状态和链路错误
- **上游**：[可信度：待 MT8676 确认] Vehicle Interface；CanService；CanService (DK CAN)。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] SPI 驱动；对端 IPCL Consumer。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] IPCL（pending）；SPI；Sequence/CRC（待确认）。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：待 MT8676 确认] 图例无生命周期；runtime 端随 MCU/IPCL/SPI 初始化，复位后需清理旧队列并重新同步。
- **常见故障模式**：[可信度：待 MT8676 确认] SPI 不通、帧不同步、校验失败、队列积压、版本不兼容或复位后旧消息污染。
- **日志与观测点**：[可信度：待 MT8676 确认] 对齐 IPCL 入队/出队、SPI 收发帧、序号、错误和复位代际；最早断点是发送端是否形成完整帧。
- **证据与可信度**：[可信度：待 MT8676 确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。 [可信度：待 MT8676 确认] 私有接口、端点身份、参数和恢复策略均待 MT8676 确认。

<!-- module-id: mod-di-83dc75e -->
<a id="mod-di-83dc75e"></a>
### `DI`

别名：无已登记别名。出现位置：original-diagram-03/MCU（d03-037，标签 `DI`）。Occurrence 角色：d03-037（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d03-037 直接包含 `SWC`。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：DI 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `DI` 是功能域或驱动分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该功能域或驱动分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕功能域或驱动分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该功能域或驱动分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该功能域或驱动分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-swc-818632e -->
<a id="mod-swc-818632e"></a>
### `SWC`

别名：无已登记别名。出现位置：original-diagram-03/MCU（d03-038，标签 `SWC`）；original-diagram-03/MCU（d03-041，标签 `SWC`）。Occurrence 角色：d03-038（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-041（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU。；[可信度：标准机制推断] AUTOSAR 软件组件运行节点，承载具体车辆功能算法/状态机。
- **处理的数据或资源**：[可信度：标准机制推断] RTE 端口数据、runnable 事件、内部状态和输出命令。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 RTE/BSW 服务 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] runnable 未调度、端口数据陈旧、状态机错误或输出未更新。
- **日志与观测点**：[可信度：标准机制推断] 按 RTE 输入→runnable→状态机→RTE 输出 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-ivi-ae3827e -->
<a id="mod-ivi-ae3827e"></a>
### `IVI`

别名：无已登记别名。出现位置：original-diagram-03/MCU（d03-039，标签 `IVI`）。Occurrence 角色：d03-039（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d03-039 直接包含 `SWC`、`SWC (Network)`。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：IVI 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `IVI` 是功能域或驱动分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该功能域或驱动分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕功能域或驱动分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该功能域或驱动分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该功能域或驱动分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-swc-network-acdf359 -->
<a id="mod-swc-network-acdf359"></a>
### `SWC (Network)`

别名：无已登记别名。出现位置：original-diagram-03/MCU（d03-040，标签 `SWC (Network)`）。Occurrence 角色：d03-040（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU。；[可信度：标准机制推断] 承担 MCU IVI 区域的网络通信软件组件职责。
- **处理的数据或资源**：[可信度：标准机制推断] 网络状态、跨域消息、RTE 端口和链路健康。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 RTE/Vehicle Interface/IPCL 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 网络状态不同步、消息未路由、链路复位或输出陈旧。
- **日志与观测点**：[可信度：标准机制推断] 按 RTE 输入→Network SWC→Vehicle Interface/IPCL 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-com-f33b74e -->
<a id="mod-com-f33b74e"></a>
### `Com`

别名：无已登记别名。出现位置：original-diagram-03/MCU（d03-042，标签 `Com`）。Occurrence 角色：d03-042（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU，层级为 MCU。；[可信度：标准机制推断] 完成 MCU 通信信号与 I-PDU 的打包、解包和更新状态管理。
- **处理的数据或资源**：[可信度：标准机制推断] signal、I-PDU、update bit、timeout 和质量状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 PduR/CanIf 等 BSW 链 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 信号映射错、timeout、update bit 异常、PDU 未收发。
- **日志与观测点**：[可信度：标准机制推断] 按 CAN/PDU→Com 解包→RTE 信号/反向发送 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-vehicle-interface-01da3eb -->
<a id="mod-vehicle-interface-01da3eb"></a>
### `Vehicle Interface`

别名：无已登记别名。出现位置：original-diagram-03/MCU（d03-043，标签 `Vehicle Interface`）。Occurrence 角色：d03-043（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：MCU 内把 RTE/SWC 车辆数据映射到 IPCL 的接口组件。；[可信度：标准机制推断] MCU 侧车辆接口，连接 SWC 业务与 IPCL/跨域车辆消息。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆信号、控制命令、质量、时间戳和跨域帧。
- **输入**：[可信度：待 MT8676 确认] RTE Port/SWC 状态、COM/CAN 信号和控制请求
- **内部处理**：[可信度：标准机制推断] 围绕 RTE/SWC 与 IPCL 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] IPCL Message、车辆状态和下发结果
- **上游**：[可信度：待 MT8676 确认] RTE；SWC；Com。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] IPCL。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] AUTOSAR RTE/COM；IPCL。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 映射错误、数据陈旧、控制无回读、IPCL 未 Ready。
- **日志与观测点**：[可信度：标准机制推断] 按 SWC/RTE→Vehicle Interface→IPCL→对端 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.12 SOS/Yocto：应用、Runtime、Infrastructure、服务与驱动

<!-- module-id: mod-avm-75bc0b9 -->
<a id="mod-avm-75bc0b9"></a>
### `AVM`

别名：无已登记别名。出现位置：original-diagram-01/Framework/System（d01-094，标签 `AVM`）；original-diagram-02/Host(SOS YOCTO)/Application（d02-030，标签 `AVM`）。Occurrence 角色：d01-094（runtime）：运行节点标签；是否独立进程仍需运行时证据；d02-030（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；SOS/Yocto；层级 Framework/System；Host(SOS YOCTO)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain / SOS/Yocto，层级为 Framework/System / Host(SOS YOCTO)/Application。；[可信度：标准机制推断] 融合多路摄像头形成环视画面并输出给显示系统。
- **处理的数据或资源**：[可信度：标准机制推断] 多路相机帧、标定参数、车辆状态、拼接纹理和显示 Surface。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 对齐帧、畸变校正、拼接渲染并根据车辆状态切换视图。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常受车辆场景和 Camera/显示资源管理；进出场景需完整释放会话与 Buffer。
- **常见故障模式**：[可信度：标准机制推断] 相机缺帧、标定错误、时间不同步、拼接超时、Surface/图层未显示。
- **日志与观测点**：[可信度：标准机制推断] 按触发状态→Camera 帧→同步/拼接→Surface→显示图层检查；最早断点是各路相机是否按代际出帧。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-rvc-199fba4 -->
<a id="mod-rvc-199fba4"></a>
### `RVC`

别名：无已登记别名。出现位置：original-diagram-01/Framework/System（d01-095，标签 `RVC`）；original-diagram-02/Host(SOS YOCTO)/Application（d02-033，标签 `RVC`）。Occurrence 角色：d01-095（runtime）：运行节点标签；是否独立进程仍需运行时证据；d02-033（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；SOS/Yocto；层级 Framework/System；Host(SOS YOCTO)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain / SOS/Yocto，层级为 Framework/System / Host(SOS YOCTO)/Application。；[可信度：标准机制推断] 在倒车触发后建立后视 Camera 到显示的低时延链路。
- **处理的数据或资源**：[可信度：标准机制推断] 倒挡状态、后摄帧、引导线参数、Surface 和显示层级。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 验证触发，打开后摄/选择流，叠加引导信息并提交显示。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随倒车场景进入退出；退出时应关闭 Camera 会话并释放 Surface/Buffer。
- **常见故障模式**：[可信度：标准机制推断] 倒挡事件未到、Camera 打开失败、首帧慢、图层被遮挡或退出后资源泄漏。
- **日志与观测点**：[可信度：标准机制推断] 按倒挡源→RVC 状态机→Camera→首帧→SurfaceFlinger 查验；最早断点是触发事件时间戳。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-host-sos-yocto-037600d -->
<a id="mod-host-sos-yocto-037600d"></a>
### `Host(SOS YOCTO)`

别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Application（d02-028，标签 `Host(SOS YOCTO)`）。Occurrence 角色：d02-028（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d02-028 直接包含 `Application`、`OS Runtime`、`Infrastructure`、`Drivers`。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Host(SOS YOCTO) 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Host(SOS YOCTO)` 是操作系统或虚拟机归属边界，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕操作系统或虚拟机归属边界按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该操作系统或虚拟机归属边界在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-cluster-d75dc68 -->
<a id="mod-cluster-d75dc68"></a>
### `Cluster`

别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Application（d02-031，标签 `Cluster`）；original-diagram-03/SOS(Yocto)/Cluster（d03-010，标签 `Cluster`）。Occurrence 角色：d02-031（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-010（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d03-010 直接包含 `Client`、`CanClient`。

**Occurrence 分解**：

- `d02-031`（role=runtime）作用=SOS 仪表应用 runtime；数据/资源=指示灯、告警、车辆状态和画面；生命周期=随 SOS/显示服务；故障边界=CanService/状态机/Weston 失败；观测点=CAN 到 Weston 时间线。
- `d03-010`（role=container）作用=Cluster 客户端分组；数据/资源=Client/CanClient 子项；生命周期=容器无独立生命周期；故障边界=客户端归属误读；观测点=Cluster containment。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Application；SOS(Yocto)/Cluster。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：container×1、runtime×1）
- **核心作用**：[可信度：架构图确认] 清单角色说明：SOS/Yocto 仪表应用，消费车辆状态并形成仪表图形与告警输出。；[可信度：标准机制推断] Cluster 在图 2 是 SOS/Yocto 仪表应用 runtime，在图 3 是包含 Client/CanClient 的仪表分组容器。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆信号、指示灯/告警、状态机、Client 连接、主题资源和 Weston 显示 buffer。
- **输入**：[可信度：待 MT8676 确认] CanClient/Client 的车辆状态、Lifecycle Ready、告警配置与图形资源
- **内部处理**：[可信度：标准机制推断] runtime occurrence 经 CanService 更新仪表状态机并向 Weston 提交画面；container occurrence 只组织 Cluster 客户端子项。
- **输出**：[可信度：待 MT8676 确认] 提交给 Weston 的 Wayland Surface/帧，以及仪表 Ready/故障状态
- **上游**：[可信度：待 MT8676 确认] CanClient；Client；CanService（经图示 API/FDBus/SOME-IP 链）。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Weston；Display/DRM；诊断日志消费者。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] API；FDBus 或 SOME/IP（依图示子链）；Wayland。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 应用随 SOS 服务和显示栈启动；容器无独立生命周期，Client/显示重启后由运行应用恢复。
- **常见故障模式**：[可信度：标准机制推断] CanService 无新数据、指示灯映射错误、状态机抑制、Client 断连、Weston 未出帧或容器被误当进程。
- **日志与观测点**：[可信度：标准机制推断] 按 CAN→CanService→Cluster Client→状态机→Weston 对齐时间戳；最早断点是新鲜信号是否进入应用。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-dms-477e565 -->
<a id="mod-dms-477e565"></a>
### `DMS`

别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Application（d02-032，标签 `DMS`）。Occurrence 角色：d02-032（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Application。；[可信度：标准机制推断] SOS/Yocto 应用，执行驾驶员监测业务并向座舱输出状态/告警。
- **处理的数据或资源**：[可信度：标准机制推断] 驾驶员状态、告警、置信度和时间戳
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 SOS Host 进程中接收驾驶员监测输入、执行状态/策略处理并发布结果；具体算法接口待 Host 配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 SOS/Yocto Host 启动管理和业务依赖工作；实际 unit、进程和恢复策略待 Host 配置确认。
- **常见故障模式**：[可信度：标准机制推断] 驾驶员监测输入陈旧、时间戳错位、算法/服务未就绪、结果未发布或消费者未更新。
- **日志与观测点**：[可信度：标准机制推断] 按 SOS 输入→DMS 处理→状态/告警输出对齐时间戳；最早断点是新鲜输入是否进入 Host 应用。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-adas-3e3c94a -->
<a id="mod-adas-3e3c94a"></a>
### `ADAS`

别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Application（d02-034，标签 `ADAS`）。Occurrence 角色：d02-034（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Application。；[可信度：标准机制推断] SOS/Yocto 应用，执行驾驶辅助业务并向座舱输出状态/告警。
- **处理的数据或资源**：[可信度：标准机制推断] 感知/辅助状态、告警、置信度和时间戳
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 SOS Host 进程中接收驾驶辅助输入、执行状态/策略处理并发布结果；具体算法接口待 Host 配置确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 SOS/Yocto Host 启动管理和业务依赖工作；实际 unit、进程和恢复策略待 Host 配置确认。
- **常见故障模式**：[可信度：标准机制推断] 驾驶辅助输入陈旧、时间戳错位、算法/服务未就绪、结果未发布或消费者未更新。
- **日志与观测点**：[可信度：标准机制推断] 按 SOS 输入→ADAS 处理→状态/告警输出对齐时间戳；最早断点是新鲜输入是否进入 Host 应用。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-os-runtime-7dbe70e -->
<a id="mod-os-runtime-7dbe70e"></a>
### `OS Runtime`

别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/OS Runtime（d02-035，标签 `OS Runtime`）。Occurrence 角色：d02-035（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d02-035 直接包含 `Weston`、`Camera`、`Gstreamer`。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/OS Runtime。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：OS Runtime 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `OS Runtime` 是功能域或驱动分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该功能域或驱动分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕功能域或驱动分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该功能域或驱动分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该功能域或驱动分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-weston-11378f3 -->
<a id="mod-weston-11378f3"></a>
### `Weston`

<!-- explanation-refresh:weston-module -->
**资料核对后的架构解释（2026-09-20）**

PVT 将 Weston 的 shell、renderer、output backend 和输入处理分开：surface 承载客户端内容，layer 组织显示顺序，screen 对应输出。可见性由完整映射、裁剪/目标矩形、透明度和 render order 共同决定，进程存活不等于物理屏出图。FAQ 的 gpu_server/pvtsoft_layer_surface 依赖属于其交付方案，不能推出所有平台的 systemd 依赖。[U039 · weston介绍和应用.pdf · PDF第4-18页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0021.html#page-4)
<!-- /explanation-refresh -->


别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/OS Runtime（d02-036，标签 `Weston`）。Occurrence 角色：d02-036（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/OS Runtime。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：按 PVT 文档解释 shell、renderer、output backend 与输入处理；IVI-shell 组织 surface/layer/screen，最终显示还依赖 buffer/fence、DRM 和物理输出。[U039 · weston介绍和应用.pdf · PDF第4-18页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0021.html#page-4)
- **处理的数据或资源**：[可信度：标准机制推断] Wayland Surface/buffer、输出模式、图层、输入焦点和帧回调。
- **输入**：[可信度：待 MT8676 确认] Cluster/RVC/AVM 的 Wayland Surface、Buffer、Damage 和输入焦点
- **内部处理**：[可信度：标准机制推断] 接收客户端 buffer，进行场景合成并提交显示后端。
- **输出**：[可信度：待 MT8676 确认] DRM/KMS PageFlip、frame callback 和合成错误
- **上游**：[可信度：待 MT8676 确认] Cluster；RVC；AVM；Gstreamer。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Display；DRM/KMS。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Wayland；DRM/KMS；DMA-BUF/Fence（标准机制）。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 通常由 Host 启动管理；客户端或后端重启会重建 Surface 与输出状态。
- **常见故障模式**：[可信度：标准机制推断] 客户端未连接、buffer 未提交、输出后端失败、帧回调停滞或 Surface 泄漏。
- **日志与观测点**：[可信度：标准机制推断] 检查 Weston 客户端、Surface/buffer、输出后端与帧回调；最早断点是客户端是否成功 commit buffer。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-gstreamer-237cba2 -->
<a id="mod-gstreamer-237cba2"></a>
### `Gstreamer`

<!-- explanation-refresh:gstreamer-module -->
**资料核对后的架构解释（2026-09-20）**

此框解释为媒体 pipeline 的组织层。PVT 播放示例把解码、v4l2convert、dmabuf 导入/输出和 waylandsink 组合起来；pipeline 配置不同会改变颜色转换、额外读写和消费者依赖。某一 pad 或 sink 停止推进可能向上游形成背压，因此需同时查源帧/解码输出、buffer、sink 与 Weston，不能只据 gst 进程存活判断通路正常。示例设备号与 caps 不直接作为项目配置。[U047 · 软件开发培训-音视频解码常见问题及分析.pdf · PDF第12页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0023.html#page-12)
<!-- /explanation-refresh -->


别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/OS Runtime（d02-038，标签 `Gstreamer`）。Occurrence 角色：d02-038（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/OS Runtime。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：SOS 媒体 pipeline 框架，用于 Camera/Codec/显示数据流。；[可信度：标准机制推断] 以 pipeline 组织媒体源、解码、转换和 sink 的流式处理框架。
- **处理的数据或资源**：[可信度：标准机制推断] 媒体 caps、packet/frame、buffer、timestamp、pipeline state 与 bus message。
- **输入**：[可信度：待 MT8676 确认] Camera/ISP Frame、pipeline 配置和时钟
- **内部处理**：[可信度：标准机制推断] 协商 caps，驱动 element 状态并在 buffer 链上传递音视频数据。
- **输出**：[可信度：待 MT8676 确认] 处理后的 Buffer、EOS/QoS/Error 事件
- **上游**：[可信度：待 MT8676 确认] Camera；ISP；媒体 Source。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] RVC/AVM/Weston；Codec/Sink。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] GStreamer pipeline；V4L2；DMA-BUF。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] pipeline 由业务创建和销毁；状态切换失败或 element 重启需重建上下文。
- **常见故障模式**：[可信度：标准机制推断] caps 协商失败、element missing、buffer 堵塞、时间戳跳变或 sink 不出帧。
- **日志与观测点**：[可信度：标准机制推断] 导出 pipeline、state change、bus error 和各 pad buffer 时间；最早断点是源 element 是否产生 buffer。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-lifecycle-033df3d -->
<a id="mod-lifecycle-033df3d"></a>
### `Lifecycle`

别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Infrastructure（d02-040，标签 `Lifecycle`）。Occurrence 角色：d02-040（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Infrastructure。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Infrastructure。；[可信度：标准机制推断] `Lifecycle` 位于 SOS/Yocto Host，承担其名称对应的本机服务或业务能力。
- **处理的数据或资源**：[可信度：标准机制推断] `Lifecycle` 的业务请求、状态、IPC/媒体 buffer 或设备资源；精确合同以 Host 配置为准。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 标准 Linux/Yocto 机制下由进程调用库/驱动并经 IPC 服务消费者；图中未给出逐跳实现。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动者、unit、依赖和 Ready 判据待 Host 启动配置确认，不能仅凭方框位置推断。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、依赖未 Ready、IPC 断连、队列/媒体 buffer 堵塞或设备调用失败。
- **日志与观测点**：[可信度：标准机制推断] 先查 `Lifecycle` PID/启动日志、依赖、接口入口和下层返回；最早断点是请求是否进入模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-soa-ipc-89a47d9 -->
<a id="mod-soa-ipc-89a47d9"></a>
### `SOA/IPC`

别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Infrastructure（d02-041，标签 `SOA/IPC`）。Occurrence 角色：d02-041（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Infrastructure。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Infrastructure。；[可信度：标准机制推断] `SOA/IPC` 位于 SOS/Yocto Host，承担其名称对应的本机服务或业务能力。
- **处理的数据或资源**：[可信度：标准机制推断] `SOA/IPC` 的业务请求、状态、IPC/媒体 buffer 或设备资源；精确合同以 Host 配置为准。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 标准 Linux/Yocto 机制下由进程调用库/驱动并经 IPC 服务消费者；图中未给出逐跳实现。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动者、unit、依赖和 Ready 判据待 Host 启动配置确认，不能仅凭方框位置推断。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、依赖未 Ready、IPC 断连、队列/媒体 buffer 堵塞或设备调用失败。
- **日志与观测点**：[可信度：标准机制推断] 先查 `SOA/IPC` PID/启动日志、依赖、接口入口和下层返回；最早断点是请求是否进入模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-vehicleif-6b34661 -->
<a id="mod-vehicleif-6b34661"></a>
### `VehicleIF`

<!-- explanation-refresh:vehicleif-module -->
**资料核对后的架构解释（2026-09-20）**

PVT vehicle 方案示例为 MCU 经 SPI/GPIO 进入 SOS mcu_ipc_service，再经 property_service/FDBus 进入 Android VHAL/CarService。它解释原 VehicleIF/CanService 一带“物理报文到业务属性”的边界，但不能凭名字把 VehicleIF 自动等同于某个已命名进程。DBC、缩放、有效性、缓存与事件订阅仍须项目合同；请求接收和 ECU 状态变化分开验证。[S281 · vehicle方案.pdf · PDF第2-3页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0024.html#page-2)
<!-- /explanation-refresh -->


别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Infrastructure（d02-043，标签 `VehicleIF`）。Occurrence 角色：d02-043（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Infrastructure。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Infrastructure。；[可信度：标准机制推断] SOS/Yocto 域的车辆接口边界，封装车辆数据/控制与上层业务之间的适配。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆信号、控制命令、质量/时间戳和服务连接状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 将底层车辆语义映射为上层接口；具体绑定和 IDL 待确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 由 Host 服务监督；下层重连后需刷新缓存并重建发布关系。
- **常见故障模式**：[可信度：标准机制推断] 映射错误、时间戳陈旧、服务不可达、控制无回读或缓存跨代际。
- **日志与观测点**：[可信度：标准机制推断] 比对原始信号、VehicleIF 入/出参和消费者结果；最早断点是下层状态是否进入接口。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-audiomgr-b835d85 -->
<a id="mod-audiomgr-b835d85"></a>
### `AudioMgr`

<!-- explanation-refresh:audiomgr-module -->
**资料核对后的架构解释（2026-09-20）**

AudioMgr 的架构职责按策略/路由管理理解，与真正搬运 PCM 的 AFE/MEMIF/DAI 和物理端口分开。8676/8668 的输入 ADSP 路径与 TDM 通道不同；AudioMgr 框无需移动，但它最终下发的 route、录音算法位置、回声参考和恢复对象应按新平台重核。[S045 · Audio模块 8676 vs 8668.pdf · PDF第2-4页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0013.html#page-2) [S049 · MT8668_Audio_HW_Interface_User_Guide_V1.1.pdf · PDF第4-7页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0014.html#page-4)
<!-- /explanation-refresh -->


别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Infrastructure（d02-044，标签 `AudioMgr`）。Occurrence 角色：d02-044（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Infrastructure。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：SOS 音频路由与策略管理组件。；[可信度：标准机制推断] SOS/Yocto 域的音频会话、焦点和路由协调模块。
- **处理的数据或资源**：[可信度：标准机制推断] 音频用例、焦点、音量、路由、设备状态和 PCM 流控制。
- **输入**：[可信度：待 MT8676 确认] 应用 Stream、焦点/路由请求、设备和车辆场景状态
- **内部处理**：[可信度：标准机制推断] 按策略选择输入输出路径并协调 GStreamer/Audio 驱动；精确策略待配置确认。
- **输出**：[可信度：待 MT8676 确认] ALSA/DSP 控制、路由状态和 Audio error
- **上游**：[可信度：待 MT8676 确认] SOS Application；Lifecycle；车辆场景。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Audio Driver；ALSA；DSP/Codec。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Audio API；ALSA；Mixer/DSP control。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 Host 音频基础设施启动；设备切换和服务重启需恢复路由与焦点。
- **常见故障模式**：[可信度：标准机制推断] 焦点冲突、路由指错、设备未 Ready、静音状态残留或播放链阻塞。
- **日志与观测点**：[可信度：标准机制推断] 核对用例→焦点→路由→设备→PCM 帧；最早断点是 AudioMgr 是否接受并解析音频请求。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-logmgr-28d0e52 -->
<a id="mod-logmgr-28d0e52"></a>
### `LogMgr`

<!-- explanation-refresh:logmgr-module -->
**资料核对后的架构解释（2026-09-20）**

LogMgr 的职责不止打印日志，还要解释生命周期中谁采集、何时落盘、跨域如何关联。PVT 增补 Host 读取 UOS pstore，以及 shutdown 时日志进程退出后的块持久化路径。DRAM ramoops 与块设备持久化不是同一保证；恢复后可看到日志，也不证明故障前最后一段已经保存。[S272 · MTK_Log_SOS_dump_uos_pstore.pdf · PDF第3页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0025.html#page-3) [S273 · MTK_Log_SOS_shutdown_pstore_dump_to_BLK.pdf · PDF第3页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0026.html#page-3)
<!-- /explanation-refresh -->


别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Infrastructure（d02-045，标签 `LogMgr`）。Occurrence 角色：d02-045（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Infrastructure。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Infrastructure。；[可信度：标准机制推断] `LogMgr` 位于 SOS/Yocto Host，承担其名称对应的本机服务或业务能力。
- **处理的数据或资源**：[可信度：标准机制推断] `LogMgr` 的业务请求、状态、IPC/媒体 buffer 或设备资源；精确合同以 Host 配置为准。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 标准 Linux/Yocto 机制下由进程调用库/驱动并经 IPC 服务消费者；图中未给出逐跳实现。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动者、unit、依赖和 Ready 判据待 Host 启动配置确认，不能仅凭方框位置推断。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、依赖未 Ready、IPC 断连、队列/媒体 buffer 堵塞或设备调用失败。
- **日志与观测点**：[可信度：标准机制推断] 先查 `LogMgr` PID/启动日志、依赖、接口入口和下层返回；最早断点是请求是否进入模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-drivers-a40ad45 -->
<a id="mod-drivers-a40ad45"></a>
### `Drivers`

别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Drivers（d02-046，标签 `Drivers`）。Occurrence 角色：d02-046（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d02-046 直接包含 `ISP`、`Display`、`Audio`、`Ethernet`。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Drivers。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Drivers 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Drivers` 是功能域或驱动分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该功能域或驱动分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕功能域或驱动分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该功能域或驱动分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该功能域或驱动分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-isp-7fcd9ed -->
<a id="mod-isp-7fcd9ed"></a>
### `ISP`

别名：无已登记别名。出现位置：original-diagram-02/Host(SOS YOCTO)/Drivers（d02-047，标签 `ISP`）。Occurrence 角色：d02-047（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 Host(SOS YOCTO)/Drivers。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SOS/Yocto，层级为 Host(SOS YOCTO)/Drivers。；[可信度：标准机制推断] `ISP` 位于 SOS/Yocto Host，承担其名称对应的本机服务或业务能力。
- **处理的数据或资源**：[可信度：标准机制推断] `ISP` 的业务请求、状态、IPC/媒体 buffer 或设备资源；精确合同以 Host 配置为准。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 标准 Linux/Yocto 机制下由进程调用库/驱动并经 IPC 服务消费者；图中未给出逐跳实现。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动者、unit、依赖和 Ready 判据待 Host 启动配置确认，不能仅凭方框位置推断。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、依赖未 Ready、IPC 断连、队列/媒体 buffer 堵塞或设备调用失败。
- **日志与观测点**：[可信度：标准机制推断] 先查 `ISP` PID/启动日志、依赖、接口入口和下层返回；最早断点是请求是否进入模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-sos-yocto-15eb9a4 -->
<a id="mod-sos-yocto-15eb9a4"></a>
### `SOS(Yocto)`

别名：无已登记别名。出现位置：original-diagram-03/SOS(Yocto)/Cluster（d03-009，标签 `SOS(Yocto)`）。Occurrence 角色：d03-009（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d03-009 直接包含 `Cluster`、`CanService`、`Clients(SOME/IP)`、`DoIP`、`RoutingManager (SOME/IP守护进程)`、`FDBus`。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 SOS(Yocto)/Cluster。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：SOS(Yocto) 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `SOS(Yocto)` 是操作系统或虚拟机归属边界，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕操作系统或虚拟机归属边界按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该操作系统或虚拟机归属边界在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-client-1bdd79b -->
<a id="mod-client-1bdd79b"></a>
### `Client`

别名：无已登记别名。出现位置：original-diagram-03/SOS(Yocto)/Cluster（d03-011，标签 `Client`）。Occurrence 角色：d03-011（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 SOS(Yocto)/Cluster。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SOS/Yocto，层级为 SOS(Yocto)/Cluster。；[可信度：标准机制推断] `Client` 位于 SOS/Yocto Host，承担其名称对应的本机服务或业务能力。
- **处理的数据或资源**：[可信度：标准机制推断] `Client` 的业务请求、状态、IPC/媒体 buffer 或设备资源；精确合同以 Host 配置为准。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 标准 Linux/Yocto 机制下由进程调用库/驱动并经 IPC 服务消费者；图中未给出逐跳实现。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动者、unit、依赖和 Ready 判据待 Host 启动配置确认，不能仅凭方框位置推断。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、依赖未 Ready、IPC 断连、队列/媒体 buffer 堵塞或设备调用失败。
- **日志与观测点**：[可信度：标准机制推断] 先查 `Client` PID/启动日志、依赖、接口入口和下层返回；最早断点是请求是否进入模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-canclient-092a07f -->
<a id="mod-canclient-092a07f"></a>
### `CanClient`

别名：无已登记别名。出现位置：original-diagram-03/SOS(Yocto)/Cluster（d03-012，标签 `CanClient`）。Occurrence 角色：d03-012（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 SOS(Yocto)/Cluster。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Cluster 内的车辆数据客户端。；[可信度：标准机制推断] `CanClient` 位于 SOS/Yocto Host，承担其名称对应的本机服务或业务能力。
- **处理的数据或资源**：[可信度：标准机制推断] `CanClient` 的业务请求、状态、IPC/媒体 buffer 或设备资源；精确合同以 Host 配置为准。
- **输入**：[可信度：待 MT8676 确认] CanService 发布的车辆 Topic/Event、初始快照和连接状态
- **内部处理**：[可信度：标准机制推断] 标准 Linux/Yocto 机制下由进程调用库/驱动并经 IPC 服务消费者；图中未给出逐跳实现。
- **输出**：[可信度：待 MT8676 确认] 向 Cluster 状态机提供新鲜车辆状态和连接异常
- **上游**：[可信度：待 MT8676 确认] CanService。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Cluster。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] API；FDBus/SOME-IP（依实际部署确认）。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动者、unit、依赖和 Ready 判据待 Host 启动配置确认，不能仅凭方框位置推断。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、依赖未 Ready、IPC 断连、队列/媒体 buffer 堵塞或设备调用失败。
- **日志与观测点**：[可信度：标准机制推断] 先查 `CanClient` PID/启动日志、依赖、接口入口和下层返回；最早断点是请求是否进入模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-fdbus-host-server-495a163 -->
<a id="mod-fdbus-host-server-495a163"></a>
### `FDBus host_server`

别名：`host_server (fdbus)`。出现位置：original-diagram-03/SOS(Yocto)/Communication（d03-019，标签 `host_server (fdbus)`）。Occurrence 角色：d03-019（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；层级 SOS(Yocto)/Communication。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：FDBus Host 级端点/跨主机连接管理组件。；[可信度：标准机制推断] `FDBus host_server` 位于 SOS/Yocto Host，承担其名称对应的本机服务或业务能力。
- **处理的数据或资源**：[可信度：标准机制推断] `FDBus host_server` 的业务请求、状态、IPC/媒体 buffer 或设备资源；精确合同以 Host 配置为准。
- **输入**：[可信度：待 MT8676 确认] Host 注册、远端连接请求和网络状态
- **内部处理**：[可信度：标准机制推断] 标准 Linux/Yocto 机制下由进程调用库/驱动并经 IPC 服务消费者；图中未给出逐跳实现。
- **输出**：[可信度：待 MT8676 确认] Host 连接结果、路由状态和错误
- **上游**：[可信度：待 MT8676 确认] FDBus name_server；远端 FDBus Host。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] FDBus Client/Service。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] FDBus host protocol；TCP/Unix Socket（待配置确认）。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动者、unit、依赖和 Ready 判据待 Host 启动配置确认，不能仅凭方框位置推断。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、依赖未 Ready、IPC 断连、队列/媒体 buffer 堵塞或设备调用失败。
- **日志与观测点**：[可信度：标准机制推断] 先查 `FDBus host_server` PID/启动日志、依赖、接口入口和下层返回；最早断点是请求是否进入模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.13 Android Guest 部署块

<!-- module-id: mod-guest-uos-android-0a38e26 -->
<a id="mod-guest-uos-android-0a38e26"></a>
### `Guest(UOS Android)`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Android)/Application（d02-051，标签 `Guest(UOS Android)`）。Occurrence 角色：d02-051（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d02-051 直接包含 `Application`、`AOSP`、`CarService`、`MBOS`、`Runtime`、`HAL`、`Infrastructure`、`Kernel& Drivers`、`Ethernet`。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Guest(UOS Android)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Guest(UOS Android) 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Guest(UOS Android)` 是操作系统或虚拟机归属边界，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕操作系统或虚拟机归属边界按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该操作系统或虚拟机归属边界在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-aosp-33e68d2 -->
<a id="mod-aosp-33e68d2"></a>
### `AOSP`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Android)/Platform（d02-059，标签 `AOSP`）。Occurrence 角色：d02-059（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Guest(UOS Android)/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Platform。；[可信度：标准机制推断] `AOSP` 是原图确认的运行节点；名称和位置可确认，内部实现尚无直接资料。
- **处理的数据或资源**：[可信度：标准机制推断] `AOSP` 处理的数据、资源与接口字段需由源码、IDL、配置或业务 trace 确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 不得从方框相邻关系补写调用链；应从已标注箭头和运行时关联证据还原处理阶段。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 所有者、启动、Ready、重启和重连边界待运行时资料确认。
- **常见故障模式**：[可信度：标准机制推断] 模块未 Ready、接口不匹配、输入陈旧、输出未消费或跨代际状态污染。
- **日志与观测点**：[可信度：标准机制推断] 先取得 `AOSP` 的进程/服务身份、入口日志和输入输出时间戳；最早断点是确认真实端点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-runtime-c4740e4 -->
<a id="mod-runtime-c4740e4"></a>
### `Runtime`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Android)/Platform（d02-062，标签 `Runtime`）。Occurrence 角色：d02-062（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Guest(UOS Android)/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Platform。；[可信度：标准机制推断] `Runtime` 是原图确认的运行节点；名称和位置可确认，内部实现尚无直接资料。
- **处理的数据或资源**：[可信度：标准机制推断] `Runtime` 处理的数据、资源与接口字段需由源码、IDL、配置或业务 trace 确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 不得从方框相邻关系补写调用链；应从已标注箭头和运行时关联证据还原处理阶段。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 所有者、启动、Ready、重启和重连边界待运行时资料确认。
- **常见故障模式**：[可信度：标准机制推断] 模块未 Ready、接口不匹配、输入陈旧、输出未消费或跨代际状态污染。
- **日志与观测点**：[可信度：标准机制推断] 先取得 `Runtime` 的进程/服务身份、入口日志和输入输出时间戳；最早断点是确认真实端点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-uos-android-59df117 -->
<a id="mod-uos-android-59df117"></a>
### `UOS(Android)`

别名：无已登记别名。出现位置：original-diagram-03/UOS(Android)/Application（d03-020，标签 `UOS(Android)`）。Occurrence 角色：d03-020（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d03-020 直接包含 `app`、`CarService`、`VehicleHAL`、`MBOS HAL`、`Client HAL Proxy`、`Service HAL Proxy`、`Client Proxy`、`Service Stub`、`Clients(SOME/IP)`、`RoutingManager (SOME/IP守护进程)`、`DoIP`、`FDBus`。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 UOS(Android)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：UOS(Android) 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `UOS(Android)` 是操作系统或虚拟机归属边界，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕操作系统或虚拟机归属边界按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该操作系统或虚拟机归属边界在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.14 TBox Guest 部署块

<!-- module-id: mod-application-b291beb -->
<a id="mod-application-b291beb"></a>
### `Application`

别名：无已登记别名。出现位置：original-diagram-01/Application（d01-001，标签 `Application`）；original-diagram-02/Guest(UOS Tbox)（d02-020，标签 `Application`）；original-diagram-02/Host(SOS YOCTO)/Application（d02-029，标签 `Application`）；original-diagram-02/Guest(UOS Android)/Application（d02-052，标签 `Application`）。Occurrence 角色：d01-001（container）：分组容器；只表达该 occurrence 的包含边界；d02-020（container）：分组容器；只表达该 occurrence 的包含边界；d02-029（container）：分组容器；只表达该 occurrence 的包含边界；d02-052（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-001 直接包含 `Launcher`、`SystemUI`、`NotificationCenter`、`MediaCenter`、`FileManager`、`TaskCube`、`E-Manual`、`Online Video`、`SceneMode`、`CarSettings`、`FactoryMode`、`Hicar`、`Calendar`、`AcSettings`、`SpeechAgent`、`UserCenter`、`GaoDeMap`、`ThemeStore`、`CoreService`、`OTA`、`SmartScene`、`BtPhone`、`SentryMode`、`CrossCountry`、`MojiWeather`、`ChangBaKTV`、`Voice Recognition`；d02-020 直接包含 `Tbox`；d02-029 直接包含 `AVM`、`Cluster`、`DMS`、`RVC`、`ADAS`；d02-052 直接包含 `车载应用`、`生态应用`、`行车记录仪`、`地图导航`、`语音识别`、`远程监控`。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；TBox；SOS/Yocto；层级 Application；Guest(UOS Tbox)；Host(SOS YOCTO)/Application；Guest(UOS Android)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Application 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Application` 是软件栈层级分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该软件栈层级分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕软件栈层级分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该软件栈层级分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该软件栈层级分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-fdbus-f41d7c4 -->
<a id="mod-fdbus-f41d7c4"></a>
### `FDBus`

别名：`FDBUS`、`fdbus`、`Fdbus`。出现位置：original-diagram-01/Infra（d01-107，标签 `FDBUS`）；original-diagram-03/Legend（d03-004，标签 `fdbus`）；original-diagram-03/SOS(Yocto)/Communication（d03-017，标签 `Fdbus`）；original-diagram-03/UOS(Android)/Communication（d03-033，标签 `Fdbus`）；original-diagram-03/UOS(TBox)/Communication（d03-061，标签 `Fdbus`）。Occurrence 角色：d01-107（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-004（legend）：关系图例；只解释图中连线或颜色语义；d03-017（container）：分组容器；只表达该 occurrence 的包含边界；d03-033（container）：分组容器；只表达该 occurrence 的包含边界；d03-061（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d03-017 直接包含 `FDBus name_server`、`FDBus host_server`；d03-033 直接包含 `FDBus name_server`；d03-061 直接包含 `FDBus name_server`。

**Occurrence 分解**：

- `d01-107`（role=runtime）作用=Android Infra FDBus 运行能力；数据/资源=注册、会话与消息；生命周期=随 Android 宿主；故障边界=name_server/会话不可用；观测点=注册表和收发计数。
- `d03-004`（role=legend）作用=FDBus 箭头图例；数据/资源=连线机制标签；生命周期=图例无运行生命周期；故障边界=误把图例当服务；观测点=检查箭头两端真实端点。
- `d03-017`（role=container）作用=SOS FDBus 分组；数据/资源=name_server/host_server 子项；生命周期=容器无独立生命周期；故障边界=SOS 子项归属误读；观测点=SOS FDBus 子项。
- `d03-033`（role=container）作用=Android FDBus 分组；数据/资源=name_server 子项；生命周期=容器无独立生命周期；故障边界=Android 子项归属误读；观测点=Android name_server。
- `d03-061`（role=container）作用=TBox FDBus 分组；数据/资源=name_server 子项；生命周期=容器无独立生命周期；故障边界=TBox 子项归属误读；观测点=TBox name_server。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；Cross-domain；SOS/Yocto；TBox；层级 Infra；Legend；SOS(Yocto)/Communication；UOS(Android)/Communication；UOS(TBox)/Communication。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：container×3、legend×1、runtime×1）
- **核心作用**：[可信度：架构图确认] 清单角色说明：跨进程/跨域服务与主题消息总线；多个 occurrence 内含命名服务。；[可信度：标准机制推断] FDBus 同时是 Android Infra 运行能力、图 3 箭头图例和三个域内 name_server/host_server 分组。
- **处理的数据或资源**：[可信度：标准机制推断] 服务名、注册记录、会话、消息、Topic/订阅状态和各域 FDBus 子项目录。
- **输入**：[可信度：待 MT8676 确认] Client/Service 注册、Topic 发布订阅、请求响应和连接事件
- **内部处理**：[可信度：标准机制推断] 运行 occurrence 负责 FDBus IPC；legend 只标连线机制；container occurrence 组织各域 name_server/host_server。
- **输出**：[可信度：待 MT8676 确认] 请求/响应/Topic、服务上下线及会话错误
- **上游**：[可信度：待 MT8676 确认] FDBus Client/Producer；FDBus Service/Provider。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] FDBus name_server；FDBus host_server；订阅者/服务消费者。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] FDBus；Socket/IPC（具体传输待配置确认）。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 运行端随宿主启动并建立注册/会话；域内容器无独立生命周期，端点变化后由真实客户端恢复订阅。
- **常见故障模式**：[可信度：标准机制推断] name_server 不可达、注册丢失、会话失效、Topic 订阅未恢复、消息积压或跨域身份误合并。
- **日志与观测点**：[可信度：标准机制推断] 对齐 name_server 注册、客户端会话、host_server 收发和订阅代际；最早断点是服务注册是否可见。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-tbox-41f3772 -->
<a id="mod-tbox-41f3772"></a>
### `Tbox`

别名：`tbox`。出现位置：original-diagram-01/HAL（d01-151，标签 `tbox`）；original-diagram-02/Guest(UOS Tbox)（d02-021，标签 `Tbox`）。Occurrence 角色：d01-151（runtime）：运行节点标签；是否独立进程仍需运行时证据；d02-021（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

**Occurrence 分解**：

- `d01-151`（role=runtime）作用=Android HAL 的 Tbox 适配 runtime；数据/资源=座舱请求、回调与远端状态；生命周期=随 HAL 服务；故障边界=HAL 未注册或跨域超时；观测点=HAL 入口与跨域发送。
- `d02-021`（role=runtime）作用=TBox Guest 远程通信 runtime；数据/资源=蜂窝/定位/远程通信会话；生命周期=随 TBox Guest；故障边界=Guest 或远程通信不可用；观测点=Guest 启动和通信会话。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；TBox；层级 HAL；Guest(UOS Tbox)。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：runtime×2）
- **核心作用**：[可信度：架构图确认] 清单角色说明：同名方框在 Android HAL 与 Guest(UOS Tbox) Application 中承担不同角色。；[可信度：标准机制推断] 两个 `Tbox` runtime occurrence 分别表示 Android HAL 的 tbox 适配标签和 TBox Guest 部署节点。
- **处理的数据或资源**：[可信度：标准机制推断] HAL 请求/回调、Guest 连接状态、远程通信会话和车联网业务资源。
- **输入**：[可信度：待 MT8676 确认] 多角色：必须按 occurrence_roles 读取输入
- **内部处理**：[可信度：标准机制推断] HAL occurrence 适配座舱调用；TBox Guest occurrence 承载远程通信能力，两者身份和进程归属需分别确认。
- **输出**：[可信度：待 MT8676 确认] 多角色：必须按 occurrence_roles 读取输出
- **上游**：[可信度：待 MT8676 确认] 图中未给出统一 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未给出统一 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Android HAL API / TBox Application API（按 occurrence）。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] HAL 服务与 TBox Guest 分别启动；Guest 重启后座舱侧是否重绑由跨域合同确认。
- **常见故障模式**：[可信度：标准机制推断] HAL 未注册、Guest 未启动、跨域会话失效、远程通信不可用或把两个 runtime 标签当同一实例。
- **日志与观测点**：[可信度：标准机制推断] 按座舱 HAL→跨域端点→TBox Guest 远程通信逐跳对时；最早断点是请求是否离开 HAL occurrence。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-spi-576bfa9 -->
<a id="mod-spi-576bfa9"></a>
### `SPI`

别名：`spi`。出现位置：original-diagram-02/MCU/Platform（d02-017，标签 `SPI`）；original-diagram-03/Legend（d03-002，标签 `SPI`）；original-diagram-03/MCU（d03-047，标签 `spi`）；original-diagram-03/UOS(TBox)/Communication（d03-063，标签 `spi`）。Occurrence 角色：d02-017（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-002（legend）：关系图例；只解释图中连线或颜色语义；d03-047（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-063（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

**Occurrence 分解**：

- `d02-017`（role=runtime）作用=MCU Platform SPI runtime；数据/资源=控制器、从设备和帧；生命周期=随 MCU 驱动初始化；故障边界=传输错误或从设备无响应；观测点=控制器完成/错误计数。
- `d03-002`（role=legend）作用=SPI 箭头图例；数据/资源=总线连线标签；生命周期=图例无运行生命周期；故障边界=误把图例当进程；观测点=箭头两端控制器/端点。
- `d03-047`（role=runtime）作用=MCU 侧 SPI runtime；数据/资源=IPCL 帧和收发 buffer；生命周期=随 MCU/IPCL 初始化；故障边界=帧错位或队列积压；观测点=MCU 收发帧。
- `d03-063`（role=runtime）作用=TBox 侧 SPI runtime；数据/资源=DK CAN/IPCL 传输帧；生命周期=随 TBox 通信组件；故障边界=传输错误或复位不同步；观测点=TBox SPI 计数。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；Cross-domain；TBox；层级 MCU/Platform；Legend；MCU；UOS(TBox)/Communication。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：legend×1、runtime×3）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU / Cross-domain / TBox，层级为 MCU/Platform / Legend / MCU / UOS(TBox)/Communication。；[可信度：标准机制推断] SPI 是控制器与从设备之间的同步串行总线；图中既有运行节点/链路端点，也有箭头图例。
- **处理的数据或资源**：[可信度：标准机制推断] SPI 帧、片选、时钟、收发 buffer、序号/校验候选字段和控制器错误计数。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] runtime occurrence 发起或接收控制器传输；legend occurrence 只说明链路类型，私有帧格式待 MT8676 确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 运行端随驱动、MCU 或 TBox 通信组件初始化；图例无生命周期，复位后双方需重新同步。
- **常见故障模式**：[可信度：标准机制推断] 从设备无响应、模式/频率不匹配、短帧、传输错误、校验失败、队列积压或复位不同步。
- **日志与观测点**：[可信度：标准机制推断] 对齐控制器提交/完成、片选、收发帧计数、错误寄存器和双方时间戳；最早断点是首个传输是否完成。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-guest-uos-tbox-e2b3c90 -->
<a id="mod-guest-uos-tbox-e2b3c90"></a>
### `Guest(UOS Tbox)`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Tbox)（d02-019，标签 `Guest(UOS Tbox)`）。Occurrence 角色：d02-019（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d02-019 直接包含 `Application`、`GPS`、`Telephony Service`、`Virtual cominfra`、`Virtual CLK`、`Kernel& Drivers`。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 Guest(UOS Tbox)。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Guest(UOS Tbox) 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Guest(UOS Tbox)` 是操作系统或虚拟机归属边界，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕操作系统或虚拟机归属边界按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该操作系统或虚拟机归属边界在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-gps-1776fa3 -->
<a id="mod-gps-1776fa3"></a>
### `GPS`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Tbox)（d02-022，标签 `GPS`）。Occurrence 角色：d02-022（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 Guest(UOS Tbox)。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 Guest(UOS Tbox)。；[可信度：标准机制推断] `GPS` 位于 TBox Guest，处理其标签对应的通信或车联网业务。
- **处理的数据或资源**：[可信度：标准机制推断] `GPS` 的蜂窝/定位/车辆消息、会话状态或虚拟设备资源；精确字段待 TBox 接口确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 TBOX-APP、通信基础设施或驱动边界间转换/路由；图中未证明具体私有绑定。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖、Ready 和重启策略待 TBox 启动清单确认。
- **常见故障模式**：[可信度：标准机制推断] 端点未 Ready、会话失效、跨域超时、队列积压、驱动断连或状态跨代际。
- **日志与观测点**：[可信度：标准机制推断] 按 `GPS` 入口→路由/IPC→对端接收追踪关联 ID；最早断点是入口是否收到新鲜请求。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-telephony-service-2a343ef -->
<a id="mod-telephony-service-2a343ef"></a>
### `Telephony Service`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Tbox)（d02-023，标签 `Telephony Service`）。Occurrence 角色：d02-023（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 Guest(UOS Tbox)。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 Guest(UOS Tbox)。；[可信度：标准机制推断] TBox Guest 的电话/蜂窝业务服务边界。
- **处理的数据或资源**：[可信度：标准机制推断] 呼叫、SIM、网络注册、信号和服务状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Modem/RIL/虚拟通信端 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 服务未 Ready、Modem 断连、请求超时、事件丢失或重启后旧会话。
- **日志与观测点**：[可信度：标准机制推断] 按 TBox Client→Telephony Service→Modem→response/event 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-virtual-cominfra-6901da3 -->
<a id="mod-virtual-cominfra-6901da3"></a>
### `Virtual cominfra`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Tbox)（d02-024，标签 `Virtual cominfra`）。Occurrence 角色：d02-024（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 Guest(UOS Tbox)。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 Guest(UOS Tbox)。；[可信度：标准机制推断] 为 TBox Guest 提供虚拟通信基础设施边界。
- **处理的数据或资源**：[可信度：标准机制推断] 虚拟通道、队列、buffer、连接和对端状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Hypervisor/Host backend 或 CCCI 适配 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 前后端未配对、队列堵塞、中断丢失、buffer 映射或复位代际错误。
- **日志与观测点**：[可信度：标准机制推断] 按 Guest frontend→virtual queue/channel→Host/backend 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-virtual-clk-3e5d962 -->
<a id="mod-virtual-clk-3e5d962"></a>
### `Virtual CLK`

<!-- explanation-refresh:clock-module -->
**资料核对后的架构解释（2026-09-20）**

三系统时间文档补充了日历时间和时区传播链，但未把此节点和特定校时 API 一一绑定。应分别记录 UTC、时区、单调时钟、Camera/媒体时间基；时区一致不证明绝对时间一致，三个 OS 的单调时间也不能直接相减。联网 NTP 与 Android 上游同步的仲裁需要工程配置。[U002 · 3OS time synchronization.pdf · PDF第1-2页](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0016.html#page-1)
<!-- /explanation-refresh -->


别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Tbox)（d02-025，标签 `Virtual CLK`）。Occurrence 角色：d02-025（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 Guest(UOS Tbox)。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 Guest(UOS Tbox)。；[可信度：标准机制推断] 向 TBox Guest 提供虚拟时钟/计时能力。
- **处理的数据或资源**：[可信度：标准机制推断] 时间基准、timer、clock event 和同步状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Hypervisor/Host clock source 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 时钟漂移、timer 不触发、暂停恢复跳变或同步失败。
- **日志与观测点**：[可信度：标准机制推断] 按 Guest clock request/event→virtual clock backend→时间源 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-kernel-drivers-49f75a9 -->
<a id="mod-kernel-drivers-49f75a9"></a>
### `Kernel& Drivers`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Tbox)（d02-026，标签 `Kernel& Drivers`）；original-diagram-02/Guest(UOS Android)/Platform（d02-065，标签 `Kernel& Drivers`）。Occurrence 角色：d02-026（container）：分组容器；只表达该 occurrence 的包含边界；d02-065（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：d02-026 直接包含 `CCCI Driver`。

**Occurrence 分解**：

- `d02-026`（role=container）作用=TBox Guest Kernel& Drivers 分组；数据/资源=CCCI Driver 子项；生命周期=容器无独立生命周期；故障边界=容器误作运行层；观测点=TBox driver containment。
- `d02-065`（role=runtime）作用=Android Guest Kernel& Drivers runtime；数据/资源=系统调用、设备节点、中断和 I/O；生命周期=随 Guest boot/probe；故障边界=probe/bind/I/O 失败；观测点=Android kernel/driver 日志。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；UOS/Android；层级 Guest(UOS Tbox)；Guest(UOS Android)/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：container×1、runtime×1）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Guest(UOS TBox/Android) 内核与驱动层的合并架构方框。；[可信度：标准机制推断] Kernel& Drivers 分别是 TBox Guest 的分组容器和 Android Guest 的内核/驱动运行层。
- **处理的数据或资源**：[可信度：标准机制推断] TBox 驱动子项目录、Android Guest 系统调用、设备节点、中断、内存和 I/O 状态。
- **输入**：[可信度：待 MT8676 确认] Guest Service/HAL 的 syscall/ioctl、virtio 请求、CCCI/Ethernet 数据
- **内部处理**：[可信度：标准机制推断] container occurrence 组织 CCCI Driver；runtime occurrence 执行 Android Guest 内核和设备驱动。
- **输出**：[可信度：待 MT8676 确认] virtio descriptor/IRQ、CCCI/Ethernet/设备事件和内核错误
- **上游**：[可信度：待 MT8676 确认] Guest HAL/Runtime；Tbox/Telephony Service。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Hypervisor/Host backend；CCCI Driver；Ethernet backend。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Linux Driver API；virtio；CCCI/Ethernet。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器无独立生命周期；Android runtime occurrence 随 Guest boot、driver probe 和 suspend/resume 工作。
- **常见故障模式**：[可信度：标准机制推断] 误把容器当内核进程、Guest 未启动、驱动 probe/bind 失败、虚拟设备未配对、中断或 I/O 异常。
- **日志与观测点**：[可信度：标准机制推断] 按 TBox 子项或 Android Guest boot→probe→设备节点→I/O 计数分支检查；最早断点是目标驱动是否 bind。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-ccci-driver-09ef2e7 -->
<a id="mod-ccci-driver-09ef2e7"></a>
### `CCCI Driver`

别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Tbox)（d02-027，标签 `CCCI Driver`）。Occurrence 角色：d02-027（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 Guest(UOS Tbox)。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 Guest(UOS Tbox)。；[可信度：标准机制推断] TBox Guest 中连接 AP/Modem 通信的 CCCI 驱动标签。
- **处理的数据或资源**：[可信度：标准机制推断] CCCI channel、Modem 状态、控制/数据消息和错误计数。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Modem/虚拟后端 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] Modem 未 Ready、通道堵塞、重置、消息丢失或版本不兼容。
- **日志与观测点**：[可信度：标准机制推断] 按 Telephony/Data→CCCI Driver→Modem→event/response 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-fdbus-name-server-1a2ac42 -->
<a id="mod-fdbus-name-server-1a2ac42"></a>
### `FDBus name_server`

别名：`name_server (fdbus)`。出现位置：original-diagram-03/SOS(Yocto)/Communication（d03-018，标签 `name_server (fdbus)`）；original-diagram-03/UOS(Android)/Communication（d03-034，标签 `name_server (fdbus)`）；original-diagram-03/UOS(TBox)/Communication（d03-062，标签 `name_server (fdbus)`）。Occurrence 角色：d03-018（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-034（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-062（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；UOS/Android；TBox；层级 SOS(Yocto)/Communication；UOS(Android)/Communication；UOS(TBox)/Communication。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：FDBus 服务名到端点的注册与查询组件。；[可信度：标准机制推断] `FDBus name_server` 位于 SOS/Yocto Host，承担其名称对应的本机服务或业务能力。
- **处理的数据或资源**：[可信度：标准机制推断] `FDBus name_server` 的业务请求、状态、IPC/媒体 buffer 或设备资源；精确合同以 Host 配置为准。
- **输入**：[可信度：待 MT8676 确认] 服务注册/注销、Client 查询和心跳
- **内部处理**：[可信度：标准机制推断] 标准 Linux/Yocto 机制下由进程调用库/驱动并经 IPC 服务消费者；图中未给出逐跳实现。
- **输出**：[可信度：待 MT8676 确认] 端点解析结果、服务上线/下线通知
- **上游**：[可信度：待 MT8676 确认] FDBus Service；FDBus Client。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] FDBus 会话建立端。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] FDBus naming protocol。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动者、unit、依赖和 Ready 判据待 Host 启动配置确认，不能仅凭方框位置推断。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、依赖未 Ready、IPC 断连、队列/媒体 buffer 堵塞或设备调用失败。
- **日志与观测点**：[可信度：标准机制推断] 先查 `FDBus name_server` PID/启动日志、依赖、接口入口和下层返回；最早断点是请求是否进入模块。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-uos-tbox-fa2aaf5 -->
<a id="mod-uos-tbox-fa2aaf5"></a>
### `UOS(TBox)`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-048，标签 `UOS(TBox)`）。Occurrence 角色：d03-048（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d03-048 直接包含 `TBOX-APP`、`CanService (DK CAN)`、`FDBus`。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：UOS(TBox) 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] TBox 应用组件。`UOS(TBox)` 是操作系统或虚拟机归属边界，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕操作系统或虚拟机归属边界按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该操作系统或虚拟机归属边界的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该操作系统或虚拟机归属边界在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-tbox-app-3fc1c6b -->
<a id="mod-tbox-app-3fc1c6b"></a>
### `TBOX-APP`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-049，标签 `TBOX-APP`）。Occurrence 角色：d03-049（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d03-049 直接包含 `update`、`xcall`、`health_monitor`、`modem_service`、`syslog`、`dynamic`、`business`、`gnss_server`、`communication (MCU)`、`core communication`。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：TBOX-APP 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] TBox 应用组件。`TBOX-APP` 是功能域或驱动分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该功能域或驱动分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕功能域或驱动分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该功能域或驱动分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该功能域或驱动分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-update-0a25ba5 -->
<a id="mod-update-0a25ba5"></a>
### `update`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-050，标签 `update`）。Occurrence 角色：d03-050（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。；[可信度：标准机制推断] TBox 应用组件，负责 `update` 标签对应的车联网业务或平台任务。
- **处理的数据或资源**：[可信度：标准机制推断] 蜂窝/定位/车辆消息、任务状态、会话或组件资源；精确字段待 TBox 接口确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 TBOX-APP 内处理本地请求并通过通信基础设施访问 MCU、Modem 或对端服务。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 TBox Guest 和 TBOX-APP 启动；组件/对端复位后的恢复边界待 TBox 配置确认。
- **常见故障模式**：[可信度：标准机制推断] 组件未就绪、输入陈旧、内部队列积压、对端不可达、超时或结果未消费。
- **日志与观测点**：[可信度：标准机制推断] 检查 TBOX-APP 启动、`update` 入口、通信层收发和对端结果；最早断点是新鲜请求是否进入组件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-xcall-6e02dd5 -->
<a id="mod-xcall-6e02dd5"></a>
### `xcall`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-051，标签 `xcall`）。Occurrence 角色：d03-051（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。；[可信度：标准机制推断] TBox 应用组件，负责 `xcall` 标签对应的车联网业务或平台任务。
- **处理的数据或资源**：[可信度：标准机制推断] 蜂窝/定位/车辆消息、任务状态、会话或组件资源；精确字段待 TBox 接口确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 TBOX-APP 内处理本地请求并通过通信基础设施访问 MCU、Modem 或对端服务。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 TBox Guest 和 TBOX-APP 启动；组件/对端复位后的恢复边界待 TBox 配置确认。
- **常见故障模式**：[可信度：标准机制推断] 组件未就绪、输入陈旧、内部队列积压、对端不可达、超时或结果未消费。
- **日志与观测点**：[可信度：标准机制推断] 检查 TBOX-APP 启动、`xcall` 入口、通信层收发和对端结果；最早断点是新鲜请求是否进入组件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-health-monitor-c6b1271 -->
<a id="mod-health-monitor-c6b1271"></a>
### `health_monitor`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-052，标签 `health_monitor`）。Occurrence 角色：d03-052（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。；[可信度：标准机制推断] TBox 应用组件，负责 `health_monitor` 标签对应的车联网业务或平台任务。
- **处理的数据或资源**：[可信度：标准机制推断] 蜂窝/定位/车辆消息、任务状态、会话或组件资源；精确字段待 TBox 接口确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 TBOX-APP 内处理本地请求并通过通信基础设施访问 MCU、Modem 或对端服务。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 TBox Guest 和 TBOX-APP 启动；组件/对端复位后的恢复边界待 TBox 配置确认。
- **常见故障模式**：[可信度：标准机制推断] 组件未就绪、输入陈旧、内部队列积压、对端不可达、超时或结果未消费。
- **日志与观测点**：[可信度：标准机制推断] 检查 TBOX-APP 启动、`health_monitor` 入口、通信层收发和对端结果；最早断点是新鲜请求是否进入组件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-modem-service-290ee38 -->
<a id="mod-modem-service-290ee38"></a>
### `modem_service`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-053，标签 `modem_service`）。Occurrence 角色：d03-053（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中 TBOX-APP 内的 modem_service 业务组件；不等同于 fb_modemServices。；[可信度：标准机制推断] TBox 应用组件。图中 TBOX-APP 的蜂窝业务组件；身份不等同于 `fb_modemServices`。
- **处理的数据或资源**：[可信度：标准机制推断] 网络、SIM、数据、语音等业务请求和状态；具体范围待接口确认。
- **输入**：[可信度：待 MT8676 确认] TBOX-APP 蜂窝/呼叫/网络业务请求
- **内部处理**：[可信度：标准机制推断] 图中只确认其位于 TBOX-APP；是否调用 Favalon Client、是否为 wrapper 均待证据。
- **输出**：[可信度：待 MT8676 确认] Modem 业务状态/结果（确切接口待确认）
- **上游**：[可信度：待 MT8676 确认] TBOX-APP business/core communication。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；可能调用 UMDP/Favalon 服务，待调用链确认。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；候选为 Favalon SDK Client API（hypothesis/pending）。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 进程/线程归属与重启策略待 TBox 启动清单确认；不得套用 UMDP unit 结论。
- **常见故障模式**：[可信度：标准机制推断] 组件未 Ready、下层服务不可用、旧 Handle、超时后重复动作或回调未恢复。
- **日志与观测点**：[可信度：标准机制推断] 补取启动清单、进程树、二进制哈希、服务注册名和调用 trace；最早断点是业务请求是否离开 modem_service。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-syslog-e0543ba -->
<a id="mod-syslog-e0543ba"></a>
### `syslog`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-054，标签 `syslog`）。Occurrence 角色：d03-054（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。；[可信度：标准机制推断] TBox 应用组件，负责 `syslog` 标签对应的车联网业务或平台任务。
- **处理的数据或资源**：[可信度：标准机制推断] 蜂窝/定位/车辆消息、任务状态、会话或组件资源；精确字段待 TBox 接口确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 TBOX-APP 内处理本地请求并通过通信基础设施访问 MCU、Modem 或对端服务。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 TBox Guest 和 TBOX-APP 启动；组件/对端复位后的恢复边界待 TBox 配置确认。
- **常见故障模式**：[可信度：标准机制推断] 组件未就绪、输入陈旧、内部队列积压、对端不可达、超时或结果未消费。
- **日志与观测点**：[可信度：标准机制推断] 检查 TBOX-APP 启动、`syslog` 入口、通信层收发和对端结果；最早断点是新鲜请求是否进入组件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-dynamic-5452220 -->
<a id="mod-dynamic-5452220"></a>
### `dynamic`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-055，标签 `dynamic`）。Occurrence 角色：d03-055（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。；[可信度：标准机制推断] TBox 应用组件，负责 `dynamic` 标签对应的车联网业务或平台任务。
- **处理的数据或资源**：[可信度：标准机制推断] 蜂窝/定位/车辆消息、任务状态、会话或组件资源；精确字段待 TBox 接口确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 TBOX-APP 内处理本地请求并通过通信基础设施访问 MCU、Modem 或对端服务。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 TBox Guest 和 TBOX-APP 启动；组件/对端复位后的恢复边界待 TBox 配置确认。
- **常见故障模式**：[可信度：标准机制推断] 组件未就绪、输入陈旧、内部队列积压、对端不可达、超时或结果未消费。
- **日志与观测点**：[可信度：标准机制推断] 检查 TBOX-APP 启动、`dynamic` 入口、通信层收发和对端结果；最早断点是新鲜请求是否进入组件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-business-6a577a7 -->
<a id="mod-business-6a577a7"></a>
### `business`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-056，标签 `business`）。Occurrence 角色：d03-056（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。；[可信度：标准机制推断] TBox 应用组件，负责 `business` 标签对应的车联网业务或平台任务。
- **处理的数据或资源**：[可信度：标准机制推断] 蜂窝/定位/车辆消息、任务状态、会话或组件资源；精确字段待 TBox 接口确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 TBOX-APP 内处理本地请求并通过通信基础设施访问 MCU、Modem 或对端服务。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 TBox Guest 和 TBOX-APP 启动；组件/对端复位后的恢复边界待 TBox 配置确认。
- **常见故障模式**：[可信度：标准机制推断] 组件未就绪、输入陈旧、内部队列积压、对端不可达、超时或结果未消费。
- **日志与观测点**：[可信度：标准机制推断] 检查 TBOX-APP 启动、`business` 入口、通信层收发和对端结果；最早断点是新鲜请求是否进入组件。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-gnss-server-d46bd4e -->
<a id="mod-gnss-server-d46bd4e"></a>
### `gnss_server`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-057，标签 `gnss_server`）。Occurrence 角色：d03-057（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Application。；[可信度：标准机制推断] TBox 应用组件。TBOX-APP 内的 GNSS 服务组件，向业务提供定位数据。
- **处理的数据或资源**：[可信度：标准机制推断] 位置、速度、航向、卫星/精度、时间戳和引擎状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 GPS/GNSS 下层或 core communication 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 引擎未 Ready、无定位、时间戳陈旧、回调停止或源错误。
- **日志与观测点**：[可信度：标准机制推断] 按 GNSS source→gnss_server→TBOX-APP consumer 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-communication-mcu-2bb2d5e -->
<a id="mod-communication-mcu-2bb2d5e"></a>
### `communication (MCU)`

别名：`communication (mcu)`。出现位置：original-diagram-03/UOS(TBox)/Application（d03-058，标签 `communication (mcu)`）。Occurrence 角色：d03-058（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：TBOX-APP 内面向 MCU 的通信组件。；[可信度：标准机制推断] TBox 应用组件。TBox 侧面向 MCU 的通信适配模块，承接 TBOX-APP 与 MCU/SPI 链路。
- **处理的数据或资源**：[可信度：标准机制推断] MCU 命令、状态、帧序号、链路健康及 SPI 收发 buffer。
- **输入**：[可信度：待 MT8676 确认] TBOX 业务命令、MCU 状态和连接生命周期
- **内部处理**：[可信度：标准机制推断] 在业务消息与 MCU 帧之间转换，并与 core communication 双向交换。
- **输出**：[可信度：待 MT8676 确认] MCU 请求/响应、状态事件和链路错误
- **上游**：[可信度：待 MT8676 确认] TBOX-APP business/update/xcall。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] CanService (DK CAN)；MCU IPCL。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] SPI；IPCL（私有实现 pending）。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 由 TBOX-APP 所属监督边界管理；MCU 或 SPI 重置后需清理旧会话。
- **常见故障模式**：[可信度：标准机制推断] SPI 未通、帧边界/校验错误、队列积压、两端版本不一致或旧状态。
- **日志与观测点**：[可信度：标准机制推断] 对齐 TBOX-APP 入参、封帧、SPI 计数和 MCU 收包；最早断点是业务消息是否进入 communication (MCU)。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-core-communication-6e340d2 -->
<a id="mod-core-communication-6e340d2"></a>
### `core communication`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Application（d03-059，标签 `core communication`）。Occurrence 角色：d03-059（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Application。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：TBOX-APP 核心跨域通信组件，连接业务与 FDBus/SOME-IP 服务。；[可信度：标准机制推断] TBox 应用组件。TBOX-APP 内部通信枢纽，连接业务组件、MCU 通信和 FDBus 侧。
- **处理的数据或资源**：[可信度：标准机制推断] TBOX-APP 内部请求、状态、服务上下线和跨域消息。
- **输入**：[可信度：待 MT8676 确认] business/modem/GNSS 等业务请求、服务发现和网络状态
- **内部处理**：[可信度：标准机制推断] 依据目标端把消息路由至 communication (MCU) 或 FDBus；精确 Topic/IDL 待确认。
- **输出**：[可信度：待 MT8676 确认] FDBus/SOME-IP 请求、响应、事件和连接状态
- **上游**：[可信度：待 MT8676 确认] TBOX-APP business；modem_service；gnss_server。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] FDBus；Clients(SOME/IP)；SOS/Android 服务端。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] FDBus；SOME/IP。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 随 TBOX-APP 启动；下游端点重启后需恢复注册、连接和业务订阅。
- **常见故障模式**：[可信度：标准机制推断] 路由表错误、目标端未 Ready、队列阻塞、旧 Session 或消息代际混淆。
- **日志与观测点**：[可信度：标准机制推断] 用关联 ID 对齐入口、路由决策、出队和对端接收；最早断点是 TBOX-APP 是否选中正确出口。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-canservice-dk-can-91af543 -->
<a id="mod-canservice-dk-can-91af543"></a>
### `CanService (DK CAN)`

别名：无已登记别名。出现位置：original-diagram-03/UOS(TBox)/Communication（d03-060，标签 `CanService (DK CAN)`）。Occurrence 角色：d03-060（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 TBox；层级 UOS(TBox)/Communication。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 TBox，层级为 UOS(TBox)/Communication。；[可信度：标准机制推断] TBox 侧 DK CAN 服务边界，图示通过 SPI/IPCL 与 MCU 车辆链路相连。
- **处理的数据或资源**：[可信度：标准机制推断] DK CAN frame/signal、IPCL 消息、时间戳与链路状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 在 CAN 业务语义与 IPCL/SPI 传输之间适配；私有帧格式待确认。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 服务所有者和启动顺序待 TBox 配置确认；IPCL 复位后需重建链路状态。
- **常见故障模式**：[可信度：标准机制推断] 服务未起、IPCL 未 Ready、SPI 错帧、信号映射错误或数据陈旧。
- **日志与观测点**：[可信度：标准机制推断] 按 CanService (DK CAN) 入口→IPCL→SPI→MCU 检查计数与时间戳；最早断点是请求是否进入 DK CAN 服务。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.15 Hypervisor、SoC 与部署容器

<!-- module-id: mod-mcu-98bb0d0 -->
<a id="mod-mcu-98bb0d0"></a>
### `MCU`

别名：无已登记别名。出现位置：original-diagram-02/MCU/SWCs（d02-001，标签 `MCU`）；original-diagram-02/Virtualization/Hardware（d02-073，标签 `MCU`）；original-diagram-03/MCU（d03-036，标签 `MCU`）。Occurrence 角色：d02-001（container）：分组容器；只表达该 occurrence 的包含边界；d02-073（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-036（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d02-001 直接包含 `SWCs`、`RTE`、`OS`、`BSW`、`MCAL`、`FBL`；d03-036 直接包含 `DI`、`IVI`、`Com`、`Vehicle Interface`、`IPCL`。

**Occurrence 分解**：

- `d02-001`（role=container）作用=MCU/SWCs 分组；数据/资源=SWC 子项；生命周期=容器无独立生命周期；故障边界=SWC 归属误读；观测点=SWC containment。
- `d02-073`（role=runtime）作用=SoC 外部 MCU 硬件 runtime；数据/资源=CPU/内存/外设和车辆信号；生命周期=受上电与 Boot 约束；故障边界=硬件未启动或复位；观测点=电源、Boot 和心跳。
- `d03-036`（role=container）作用=图 3 MCU 域分组；数据/资源=DI/IVI/IPCL 等子项；生命周期=容器无独立生命周期；故障边界=域容器被误当进程；观测点=MCU 域 containment。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；SoC/Virtualization；层级 MCU/SWCs；Virtualization/Hardware；MCU。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：container×2、runtime×1）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 MCU / SoC/Virtualization，层级为 MCU/SWCs / Virtualization/Hardware / MCU。；[可信度：标准机制推断] MCU 标签分别表示 SWCs 分组、SoC 外部 MCU 硬件节点和图 3 MCU 域容器。
- **处理的数据或资源**：[可信度：标准机制推断] SWC 子项、车辆信号、硬件资源、SPI/IPCL 边界和 MCU 域模块目录。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] container occurrence 组织 SWC 或 MCU 域组件；runtime occurrence 代表与 SoC 相连的 MCU 硬件执行实体。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器无独立生命周期；硬件 MCU 受上电、Boot、OS/RTE 初始化和复位序列约束。
- **常见故障模式**：[可信度：标准机制推断] 容器/硬件身份混淆、MCU 未启动、SWC 未调度、接口信号陈旧或复位后端点代际不一致。
- **日志与观测点**：[可信度：标准机制推断] 按电源/Boot→OS/RTE→SWC→SPI/IPCL 查状态；最早断点是 MCU 硬件是否完成启动。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-hypervisor-803e245 -->
<a id="mod-hypervisor-803e245"></a>
### `Hypervisor`

别名：无已登记别名。出现位置：original-diagram-02/Virtualization/Hardware（d02-071，标签 `Hypervisor`）。Occurrence 角色：d02-071（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SoC/Virtualization；层级 Virtualization/Hardware。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SoC/Virtualization，层级为 Virtualization/Hardware。；[可信度：标准机制推断] 在 SoC 上隔离并调度多个 VM，控制虚拟 CPU、内存、中断和设备分配边界。
- **处理的数据或资源**：[可信度：标准机制推断] VM 配置、内存映射、虚拟中断、设备直通/虚拟 I/O 与调度状态。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 创建 Guest、实施空间隔离并把物理或虚拟设备连接到所属 VM。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 位于 Guest 之前启动；Guest 重启不等同于 Hypervisor 或后端设备重建。
- **常见故障模式**：[可信度：标准机制推断] VM 未启动、虚拟中断丢失、共享内存/IOMMU 映射错误、后端未 Ready 或调度饥饿。
- **日志与观测点**：[可信度：标准机制推断] 联查 VM 状态、虚拟设备前后端、中断、共享内存和 IOMMU；最早断点是资源是否分配给正确 VM。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-soc-f387eb7 -->
<a id="mod-soc-f387eb7"></a>
### `SOC`

别名：无已登记别名。出现位置：original-diagram-02/Virtualization/Hardware（d02-072，标签 `SOC`）。Occurrence 角色：d02-072（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SoC/Virtualization；层级 Virtualization/Hardware。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 SoC/Virtualization，层级为 Virtualization/Hardware。；[可信度：标准机制推断] `SOC` 是原图确认的运行节点；名称和位置可确认，内部实现尚无直接资料。
- **处理的数据或资源**：[可信度：标准机制推断] `SOC` 处理的数据、资源与接口字段需由源码、IDL、配置或业务 trace 确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 不得从方框相邻关系补写调用链；应从已标注箭头和运行时关联证据还原处理阶段。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 所有者、启动、Ready、重启和重连边界待运行时资料确认。
- **常见故障模式**：[可信度：标准机制推断] 模块未 Ready、接口不匹配、输入陈旧、输出未消费或跨代际状态污染。
- **日志与观测点**：[可信度：标准机制推断] 先取得 `SOC` 的进程/服务身份、入口日志和输入输出时间戳；最早断点是确认真实端点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.16 Nebula OS 与 VM 进程

<!-- module-id: mod-nebula-os-743be1c -->
<a id="mod-nebula-os-743be1c"></a>
### `Nebula os`

别名：无已登记别名。出现位置：original-diagram-02/Nebula os（d02-067，标签 `Nebula os`）。Occurrence 角色：d02-067（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d02-067 直接包含 `UOS VM process`、`SOS VM process`、`Micro Kernel`。

- **位置与所属域**：[可信度：架构图确认] 域 Nebula OS；层级 Nebula os。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Nebula os 是架构容器/分组，不是运行时处理节点。；[可信度：待 MT8676 确认] `Nebula os` 是操作系统或虚拟机归属边界，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：待 MT8676 确认] 该操作系统或虚拟机归属边界只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：待 MT8676 确认] 围绕操作系统或虚拟机归属边界按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：待 MT8676 确认] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：待 MT8676 确认] 该操作系统或虚拟机归属边界的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：待 MT8676 确认] 核对该操作系统或虚拟机归属边界在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：待 MT8676 确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。 [可信度：待 MT8676 确认] 私有接口、端点身份、参数和恢复策略均待 MT8676 确认。

<!-- module-id: mod-uos-vm-process-9c6130d -->
<a id="mod-uos-vm-process-9c6130d"></a>
### `UOS VM process`

别名：无已登记别名。出现位置：original-diagram-02/Nebula os（d02-068，标签 `UOS VM process`）。Occurrence 角色：d02-068（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Nebula OS；层级 Nebula os。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Nebula OS，层级为 Nebula os。；[可信度：标准机制推断] Nebula OS 中标注的 UOS VM 管理/承载进程；精确职责待确认。
- **处理的数据或资源**：[可信度：标准机制推断] UOS VM 状态、资源、启动/停止请求和错误。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Micro Kernel/Hypervisor 接口 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、VM 状态卡住、资源分配失败或控制响应超时。
- **日志与观测点**：[可信度：标准机制推断] 按 进程 PID→VM 请求→Micro Kernel/Hypervisor→状态回读 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-sos-vm-process-65b0918 -->
<a id="mod-sos-vm-process-65b0918"></a>
### `SOS VM process`

别名：无已登记别名。出现位置：original-diagram-02/Nebula os（d02-069，标签 `SOS VM process`）。Occurrence 角色：d02-069（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Nebula OS；层级 Nebula os。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Nebula OS，层级为 Nebula os。；[可信度：标准机制推断] Nebula OS 中标注的 SOS VM 管理/承载进程；精确职责待确认。
- **处理的数据或资源**：[可信度：标准机制推断] SOS VM 状态、资源、启动/停止请求和错误。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 Micro Kernel/Hypervisor 接口 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 进程未起、VM 状态卡住、资源分配失败或控制响应超时。
- **日志与观测点**：[可信度：标准机制推断] 按 进程 PID→VM 请求→Micro Kernel/Hypervisor→状态回读 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-micro-kernel-03bfe00 -->
<a id="mod-micro-kernel-03bfe00"></a>
### `Micro Kernel`

别名：无已登记别名。出现位置：original-diagram-02/Nebula os（d02-070，标签 `Micro Kernel`）。Occurrence 角色：d02-070（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Nebula OS；层级 Nebula os。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Nebula OS，层级为 Nebula os。；[可信度：标准机制推断] Nebula OS 图中的微内核运行节点，提供基础隔离/调度；私有实现待确认。
- **处理的数据或资源**：[可信度：标准机制推断] 任务、地址空间、IPC/中断和 VM 控制资源。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 围绕 VM process/Hypervisor 或硬件 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 调度/IPC 异常、资源映射失败、VM 控制超时或内核崩溃。
- **日志与观测点**：[可信度：标准机制推断] 按 VM process 请求→Micro Kernel 对象/IPC→底层结果 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

## 4.17 协议/链路图例与分组框

<!-- module-id: mod-framework-fb001b2 -->
<a id="mod-framework-fb001b2"></a>
### `Framework`

别名：无已登记别名。出现位置：original-diagram-01/Framework（d01-030，标签 `Framework`）。Occurrence 角色：d01-030（container）：分组容器；只表达该 occurrence 的包含边界。包含导航：d01-030 直接包含 `JAVA Services`、`Media`、`Car Services`、`Native Services`、`System`。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Framework。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] container（分组容器，不是运行时进程）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Framework 是架构容器/分组，不是运行时处理节点。；[可信度：标准机制推断] `Framework` 是软件栈层级分组，用于表达架构分组、归属或隔离边界，本身不是运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 该软件栈层级分组只记录 occurrence 的直接子模块和域/层级边界；容器自身不承载业务 payload。
- **输入**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输入属于其实际子模块
- **内部处理**：[可信度：标准机制推断] 围绕软件栈层级分组按 occurrence 组织直接子项并保持所有权边界；业务逻辑由实际子模块执行。
- **输出**：[可信度：待 MT8676 确认] 不适用于分组容器本身；业务输出属于其实际子模块
- **上游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；containment 不是运行时调用边。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 不适用于分组容器本身；应进入具体子模块后再判断调用关系。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 分组容器本身不实现接口或协议；协议属于实际子模块。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 容器本身没有运行生命周期；启动、停止和恢复均属于实际子模块。
- **常见故障模式**：[可信度：标准机制推断] 该软件栈层级分组的常见误判是把分组框当成运行实例，或把不同 occurrence 的子项错误合并。
- **日志与观测点**：[可信度：标准机制推断] 核对该软件栈层级分组在原图中的 containment、直接子项和各子模块身份；最早断点是先选定真正的运行节点。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-3rd-party-d973780 -->
<a id="mod-3rd-party-d973780"></a>
### `3rd Party`

别名：无已登记别名。出现位置：original-diagram-01/Legend（d01-178，标签 `3rd Party`）。Occurrence 角色：d01-178（legend）：颜色/所有权图例；黄色表示第三方组件，不表示通信箭头。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Legend。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] legend（图例，不是服务）
- **核心作用**：[可信度：架构图确认] 清单角色说明：非运行时图例或连线标注。；[可信度：标准机制推断] 表示图 1 的第三方颜色/所有权图例，不是协议箭头或运行服务。
- **处理的数据或资源**：[可信度：标准机制推断] 只表达方框来源/所有权分类，不承载 payload。
- **输入**：[可信度：待 MT8676 确认] 图注
- **内部处理**：[可信度：标准机制推断] 读图时用颜色识别第三方组件；具体进程和接口仍看对应组件卡。
- **输出**：[可信度：待 MT8676 确认] 图注含义
- **上游**：[可信度：待 MT8676 确认] 所连接发送端（图中具体箭头）。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 所连接接收端（图中具体箭头）。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 3rd Party。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 图例无启动和资源生命周期。
- **常见故障模式**：[可信度：标准机制推断] 误把颜色图例当通信协议或第三方守护进程。
- **日志与观测点**：[可信度：标准机制推断] 回到被着色组件的包、进程和接口查证；最早断点是先确认实际组件身份。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-01]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mbos-88110a1 -->
<a id="mod-mbos-88110a1"></a>
### `MBOS`

<!-- explanation-refresh:mbos-boundary -->
**资料核对后的架构解释（2026-09-20）**

本节点仍代表原图中的平台扩展层。用户新图使 Manager/Service/HAL 的聚合职责和部分端点可解释，但权限、消息 ID、线程模型、精确超时、第三个 Update Client 名称与量产版本尚无对应源码证据。图示 Binder 连接的是容器边界，内部 FDBus 角色是另一层通信解释，不能合并为一条跨 OS 内核 Binder 链。[MBOS-20260920 · 盟博OS架构-用户提供-20260920.png](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0022.html)
<!-- /explanation-refresh -->


别名：无已登记别名。出现位置：original-diagram-02/Guest(UOS Android)/Platform（d02-061，标签 `MBOS`）。Occurrence 角色：d02-061（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 Guest(UOS Android)/Platform。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 UOS/Android，层级为 Guest(UOS Android)/Platform。；[可信度：待 MT8676 确认] `MBOS` 是原图确认的运行节点；名称和位置可确认，内部实现尚无直接资料。
- **处理的数据或资源**：[可信度：待 MT8676 确认] `MBOS` 处理的数据、资源与接口字段需由源码、IDL、配置或业务 trace 确认。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：待 MT8676 确认] 不得从方框相邻关系补写调用链；应从已标注箭头和运行时关联证据还原处理阶段。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：待 MT8676 确认] 所有者、启动、Ready、重启和重连边界待运行时资料确认。
- **常见故障模式**：[可信度：待 MT8676 确认] 模块未 Ready、接口不匹配、输入陈旧、输出未消费或跨代际状态污染。
- **日志与观测点**：[可信度：待 MT8676 确认] 先取得 `MBOS` 的进程/服务身份、入口日志和输入输出时间戳；最早断点是确认真实端点。
- **证据与可信度**：[可信度：待 MT8676 确认] [证据：original-diagram-02]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。 [可信度：待 MT8676 确认] 私有接口、端点身份、参数和恢复策略均待 MT8676 确认。

<!-- module-id: mod-binder-cf26f69 -->
<a id="mod-binder-cf26f69"></a>
### `Binder`

别名：无已登记别名。出现位置：original-diagram-03/Legend（d03-005，标签 `Binder`）。Occurrence 角色：d03-005（legend）：关系图例；只解释图中连线或颜色语义。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Legend。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] legend（图例，不是服务）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain，层级为 Legend。；[可信度：标准机制推断] `Binder` 在该 occurrence 中是箭头图例，不是服务或独立运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 它描述连接的机制类别，不拥有业务数据、线程、队列或设备。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] 用于解释箭头语义；私有端点、配置和参数必须由接口/抓包补证。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 图例没有启动、Ready 或重启生命周期。
- **常见故障模式**：[可信度：标准机制推断] 常见误判是把图例名称当成守护进程，或把一条箭头扩展为所有模块间连接。
- **日志与观测点**：[可信度：标准机制推断] 应到箭头两端真实进程查注册、收发和错误；最早断点是确认两端端点身份。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-someip-ff7a8a3 -->
<a id="mod-someip-ff7a8a3"></a>
### `SomeIp`

别名：无已登记别名。出现位置：original-diagram-03/Legend（d03-006，标签 `SomeIp`）；original-diagram-03/UOS(Android)/Communication（d03-035，标签 `SomeIp`）。Occurrence 角色：d03-006（legend）：关系图例；只解释图中连线或颜色语义；d03-035（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

**Occurrence 分解**：

- `d03-006`（role=legend）作用=SOME/IP 箭头图例；数据/资源=服务通信连线标签；生命周期=图例无运行生命周期；故障边界=误把图例当守护进程；观测点=箭头两端 Client/Service。
- `d03-035`（role=runtime）作用=Android SomeIp runtime；数据/资源=服务发现、RoutingManager 会话和订阅；生命周期=随 Android 通信栈；故障边界=发现/路由/订阅失败；观测点=RoutingManager 与事件计数。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；UOS/Android；层级 Legend；UOS(Android)/Communication。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] multi-role（不同 occurrence 角色：legend×1、runtime×1）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中出现的组件；所属域为 Cross-domain / UOS/Android，层级为 Legend / UOS(Android)/Communication。；[可信度：标准机制推断] SomeIp 在图 3 既是 SOME/IP 箭头图例，也是 Android 通信域中的 runtime 模块标签。
- **处理的数据或资源**：[可信度：标准机制推断] Service/Instance/Method/Event、服务发现状态、RoutingManager 会话、请求响应和订阅。
- **输入**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **内部处理**：[可信度：标准机制推断] legend occurrence 只说明箭头采用 SOME/IP；runtime occurrence 通过 RoutingManager 完成服务发现、路由和事件订阅。
- **输出**：[可信度：待 MT8676 确认] 图中未明确；待对应业务流程、IDL/接口或日志确认
- **上游**：[可信度：待 MT8676 确认] 图中未明确；不得从方框排列顺序推断 upstream。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 图中未明确；将在相关业务流程中解析 downstream。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] 图中未标注；待接口、配置或日志证据确认。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 图例无生命周期；runtime 端随 Android 通信栈启动，服务重启后需重新发现、注册和订阅。
- **常见故障模式**：[可信度：标准机制推断] 服务发现失败、RoutingManager 不可达、版本/实例不匹配、请求超时、事件未订阅或旧 Session。
- **日志与观测点**：[可信度：标准机制推断] 核对服务发现、RoutingManager 注册/路由、请求响应与事件订阅；最早断点是目标 Service/Instance 是否可见。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-attach-1afff01 -->
<a id="mod-attach-1afff01"></a>
### `Attach`

别名：无已登记别名。出现位置：original-diagram-03/Legend（d03-007，标签 `Attach`）。Occurrence 角色：d03-007（legend）：关系图例；只解释图中连线或颜色语义。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Legend。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] legend（图例，不是服务）
- **核心作用**：[可信度：架构图确认] 清单角色说明：非运行时图例或连线标注。；[可信度：标准机制推断] `Attach` 在该 occurrence 中是箭头图例，不是服务或独立运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 它描述连接的机制类别，不拥有业务数据、线程、队列或设备。
- **输入**：[可信度：待 MT8676 确认] 图注
- **内部处理**：[可信度：标准机制推断] 用于解释箭头语义；私有端点、配置和参数必须由接口/抓包补证。
- **输出**：[可信度：待 MT8676 确认] 图注含义
- **上游**：[可信度：待 MT8676 确认] 所连接发送端（图中具体箭头）。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 所连接接收端（图中具体箭头）。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Attach。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 图例没有启动、Ready 或重启生命周期。
- **常见故障模式**：[可信度：标准机制推断] 常见误判是把图例名称当成守护进程，或把一条箭头扩展为所有模块间连接。
- **日志与观测点**：[可信度：标准机制推断] 应到箭头两端真实进程查注册、收发和错误；最早断点是确认两端端点身份。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-api-d93d10f -->
<a id="mod-api-d93d10f"></a>
### `API`

别名：无已登记别名。出现位置：original-diagram-03/Legend（d03-008，标签 `API`）。Occurrence 角色：d03-008（legend）：关系图例；只解释图中连线或颜色语义。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 Cross-domain；层级 Legend。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] legend（图例，不是服务）
- **核心作用**：[可信度：架构图确认] 清单角色说明：非运行时图例或连线标注。；[可信度：标准机制推断] `API` 在该 occurrence 中是箭头图例，不是服务或独立运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 它描述连接的机制类别，不拥有业务数据、线程、队列或设备。
- **输入**：[可信度：待 MT8676 确认] 图注
- **内部处理**：[可信度：标准机制推断] 用于解释箭头语义；私有端点、配置和参数必须由接口/抓包补证。
- **输出**：[可信度：待 MT8676 确认] 图注含义
- **上游**：[可信度：待 MT8676 确认] 所连接发送端（图中具体箭头）。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 所连接接收端（图中具体箭头）。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] API。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 图例没有启动、Ready 或重启生命周期。
- **常见故障模式**：[可信度：标准机制推断] 常见误判是把图例名称当成守护进程，或把一条箭头扩展为所有模块间连接。
- **日志与观测点**：[可信度：标准机制推断] 应到箭头两端真实进程查注册、收发和错误；最早断点是确认两端端点身份。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-clients-some-ip-a337b3d -->
<a id="mod-clients-some-ip-a337b3d"></a>
### `Clients(SOME/IP)`

别名：无已登记别名。出现位置：original-diagram-03/SOS(Yocto)/Communication（d03-014，标签 `Clients(SOME/IP)`）；original-diagram-03/UOS(Android)/Communication（d03-030，标签 `Clients(SOME/IP)`）。Occurrence 角色：d03-014（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-030（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；UOS/Android；层级 SOS(Yocto)/Communication；UOS(Android)/Communication。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：图中 SOME/IP Client 集合，调用服务并订阅事件。；[可信度：标准机制推断] 代表调用或订阅 SOME/IP 服务的客户端集合，不证明它们同属一个进程。
- **处理的数据或资源**：[可信度：标准机制推断] 方法请求、响应、事件订阅、服务可用性和连接代际。
- **输入**：[可信度：待 MT8676 确认] RoutingManager 的发现结果、Service Event 和业务请求
- **内部处理**：[可信度：标准机制推断] 通过 RoutingManager 发现/连接服务并发送调用或订阅。
- **输出**：[可信度：待 MT8676 确认] 方法响应、事件回调、连接/订阅状态
- **上游**：[可信度：待 MT8676 确认] RoutingManager (SOME/IP守护进程)；Service Stub。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Client Proxy；业务 Client/Cluster。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] SOME/IP；SOME/IP-SD。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 各 Client 生命周期由所属业务进程管理；RoutingManager 重启后需重新发现。
- **常见故障模式**：[可信度：标准机制推断] Client 未初始化、服务不可用、实例/版本错误、超时或事件未订阅。
- **日志与观测点**：[可信度：标准机制推断] 按 Client init→Find→连接→request/subscribe→callback 追踪；最早断点是 Client 是否看到服务可用。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-doip-32bb927 -->
<a id="mod-doip-32bb927"></a>
### `DoIP`

别名：`DoIp (Diagnostics)`、`DoIp (Master)`。出现位置：original-diagram-03/SOS(Yocto)/Communication（d03-015，标签 `DoIp (Diagnostics)`）；original-diagram-03/UOS(Android)/Communication（d03-032，标签 `DoIp (Master)`）。Occurrence 角色：d03-015（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-032（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；UOS/Android；层级 SOS(Yocto)/Communication；UOS(Android)/Communication。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Diagnostics over IP 节点；图中分别作为 Diagnostics 和 Master。；[可信度：标准机制推断] 承载基于 IP 的车辆诊断连接与消息传输。
- **处理的数据或资源**：[可信度：标准机制推断] 车辆发现、逻辑地址、诊断 payload、会话和连接状态。
- **输入**：[可信度：待 MT8676 确认] DoIP discovery/routing activation、UDS request 与 TCP 状态
- **内部处理**：[可信度：标准机制推断] 围绕 诊断 Client/ECU 或网关 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] UDS positive/negative response、路由状态和超时
- **上游**：[可信度：待 MT8676 确认] DoIP Tester/Master；RoutingManager (SOME/IP守护进程)。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 目标 ECU/CanService/诊断服务（具体映射待确认）。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] DoIP；TCP/IP；UDS。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 发现失败、路由激活失败、TCP 断连、超时或地址错误。
- **日志与观测点**：[可信度：标准机制推断] 按 诊断请求→DoIP 会话→网络→ECU response 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-routingmanager-some-ip-8b378d6 -->
<a id="mod-routingmanager-some-ip-8b378d6"></a>
### `RoutingManager (SOME/IP守护进程)`

别名：`Routingmanaged (SOEM/IP守护进程)`。出现位置：original-diagram-03/SOS(Yocto)/Communication（d03-016，标签 `Routingmanaged (SOEM/IP守护进程)`）；original-diagram-03/UOS(Android)/Communication（d03-031，标签 `Routingmanaged (SOEM/IP守护进程)`）。Occurrence 角色：d03-016（runtime）：运行节点标签；是否独立进程仍需运行时证据；d03-031（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 SOS/Yocto；UOS/Android；层级 SOS(Yocto)/Communication；UOS(Android)/Communication。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：SOME/IP 服务发现、路由和 EventGroup 管理守护进程。；[可信度：标准机制推断] 维护 SOME/IP 本机路由、服务发现和 Client/Service 端点连接。
- **处理的数据或资源**：[可信度：标准机制推断] service/instance/method/event 标识、订阅、路由表和连接状态。
- **输入**：[可信度：待 MT8676 确认] Service Offer/Find、SubscribeEventGroup、方法/事件报文
- **内部处理**：[可信度：标准机制推断] 注册本地端点、参与发现并将请求/事件路由到目标端点。
- **输出**：[可信度：待 MT8676 确认] 服务发现结果、方法路由、事件分发和订阅错误
- **上游**：[可信度：待 MT8676 确认] SOME/IP Provider/Client；网络接口。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Clients(SOME/IP)；Service Stub/Client Proxy。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] SOME/IP-SD；SOME/IP；UDP/TCP/Multicast。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 作为守护进程有独立 PID/代际；重启会使本地注册与订阅全部重建。
- **常见故障模式**：[可信度：标准机制推断] 路由守护未起、服务发现失败、版本/实例不匹配、事件组未订阅或连接抖动。
- **日志与观测点**：[可信度：标准机制推断] 检查守护 PID、路由表、Offer/Find、订阅和端点日志；最早断点是目标服务是否被发现。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-mbos-6367700 -->
<a id="mod-mbos-6367700"></a>
### `mbos架构`

别名：无已登记别名。出现位置：original-diagram-03/UOS(Android)/Vehicle（d03-025，标签 `mbos架构`）。Occurrence 角色：d03-025（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 UOS(Android)/Vehicle。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] legend（图例，不是服务）
- **核心作用**：[可信度：架构图确认] 清单角色说明：非运行时图例或连线标注。；[可信度：标准机制推断] `mbos架构` 在该 occurrence 中是箭头图例，不是服务或独立运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 它描述连接的机制类别，不拥有业务数据、线程、队列或设备。
- **输入**：[可信度：待 MT8676 确认] 图注
- **内部处理**：[可信度：标准机制推断] 用于解释箭头语义；私有端点、配置和参数必须由接口/抓包补证。
- **输出**：[可信度：待 MT8676 确认] 图注含义
- **上游**：[可信度：待 MT8676 确认] 所连接发送端（图中具体箭头）。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 所连接接收端（图中具体箭头）。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] mbos架构。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 图例没有启动、Ready 或重启生命周期。
- **常见故障模式**：[可信度：标准机制推断] 常见误判是把图例名称当成守护进程，或把一条箭头扩展为所有模块间连接。
- **日志与观测点**：[可信度：标准机制推断] 应到箭头两端真实进程查注册、收发和错误；最早断点是确认两端端点身份。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-client-hal-proxy-543288a -->
<a id="mod-client-hal-proxy-543288a"></a>
### `Client HAL Proxy`

别名：`Client Hal (Proxy)`。出现位置：original-diagram-03/UOS(Android)/Binder（d03-026，标签 `Client Hal (Proxy)`）。Occurrence 角色：d03-026（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 UOS(Android)/Binder。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Android Client 与跨域 Client Proxy 之间的 HAL/接口代理。；[可信度：标准机制推断] 把 Android Client 的 HAL 调用代理到 SOME/IP Client。
- **处理的数据或资源**：[可信度：标准机制推断] HAL 方法、参数、请求上下文、返回值和错误。
- **输入**：[可信度：待 MT8676 确认] app/CarService API 调用与参数
- **内部处理**：[可信度：标准机制推断] 围绕 Client Proxy/Clients(SOME/IP) 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] Client Proxy 请求、结果和错误
- **上游**：[可信度：待 MT8676 确认] app；CarService。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Client Proxy。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] API；Attach（图例）；项目 HAL 接口。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] Proxy 未绑定、序列化错误、超时、旧 Session 或返回错配。
- **日志与观测点**：[可信度：标准机制推断] 按 app/HAL call→Client HAL Proxy→Client Proxy→SOME/IP 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-service-hal-proxy-d446b69 -->
<a id="mod-service-hal-proxy-d446b69"></a>
### `Service HAL Proxy`

别名：`Service Hal (Proxy)`。出现位置：original-diagram-03/UOS(Android)/Binder（d03-027，标签 `Service Hal (Proxy)`）。Occurrence 角色：d03-027（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 UOS(Android)/Binder。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：Android Service 与跨域 Service Stub 之间的 HAL/接口代理。；[可信度：标准机制推断] 把 SOME/IP Service 入口适配为 Android HAL/服务调用。
- **处理的数据或资源**：[可信度：标准机制推断] SOME/IP request、服务参数、结果和错误。
- **输入**：[可信度：待 MT8676 确认] Service Stub 分发的请求与 Payload
- **内部处理**：[可信度：标准机制推断] 围绕 Service Stub/目标 HAL 服务 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] Service 结果、错误和事件
- **上游**：[可信度：待 MT8676 确认] Service Stub。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 本地 Service/MBOS HAL。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] API；Attach（图例）；项目 HAL 接口。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] Stub 未注册、反序列化错误、服务调用失败或响应未返回。
- **日志与观测点**：[可信度：标准机制推断] 按 SOME/IP→Service Stub→Service HAL Proxy→目标服务 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-client-proxy-e159392 -->
<a id="mod-client-proxy-e159392"></a>
### `Client Proxy`

别名：`Client (Proxy)`。出现位置：original-diagram-03/UOS(Android)/Binder（d03-028，标签 `Client (Proxy)`）。Occurrence 角色：d03-028（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 UOS(Android)/Binder。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：把上层 Client 调用转换为 SOME/IP 请求的代理。；[可信度：标准机制推断] SOME/IP 客户端代理，完成方法/事件的序列化与会话管理。
- **处理的数据或资源**：[可信度：标准机制推断] 方法参数、请求 ID、响应、事件订阅和服务状态。
- **输入**：[可信度：待 MT8676 确认] Client 方法调用、参数和 session/request ID
- **内部处理**：[可信度：标准机制推断] 围绕 Clients(SOME/IP)/RoutingManager 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] 方法返回值、超时和异步事件
- **上游**：[可信度：待 MT8676 确认] Client HAL Proxy；业务 Client。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Clients(SOME/IP)；RoutingManager (SOME/IP守护进程)。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Proxy API；SOME/IP。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 服务不可用、请求超时、响应错配、事件未订阅或 Session 失效。
- **日志与观测点**：[可信度：标准机制推断] 按 HAL Proxy→Client Proxy→RoutingManager→response/event 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-service-stub-4f0623e -->
<a id="mod-service-stub-4f0623e"></a>
### `Service Stub`

别名：`Service (Stub)`。出现位置：original-diagram-03/UOS(Android)/Binder（d03-029，标签 `Service (Stub)`）。Occurrence 角色：d03-029（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 UOS/Android；层级 UOS(Android)/Binder。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] runtime（运行节点标签；是否独立进程需运行时证据确认）
- **核心作用**：[可信度：架构图确认] 清单角色说明：接收 SOME/IP 请求并分发到本地 Service 的 Stub。；[可信度：标准机制推断] SOME/IP 服务端桩，解码请求、调用实现并编码响应/事件。
- **处理的数据或资源**：[可信度：标准机制推断] request、method、参数、response、error 和 event。
- **输入**：[可信度：待 MT8676 确认] RoutingManager 送达的方法请求和 Payload
- **内部处理**：[可信度：标准机制推断] 围绕 Service HAL Proxy/服务实现 完成适配、状态维护和数据传递；精确接口/配置仍以 MT8676 运行证据为准。
- **输出**：[可信度：待 MT8676 确认] SOME/IP 方法响应、错误码和事件
- **上游**：[可信度：待 MT8676 确认] Clients(SOME/IP)；RoutingManager (SOME/IP守护进程)。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] Service HAL Proxy；本地 Service。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] Stub API；SOME/IP。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 启动所有者、依赖和 Ready 以所属域配置为准；端点或域重启后必须验证重连、重订阅和状态重建。
- **常见故障模式**：[可信度：标准机制推断] 未注册、解码失败、实现超时、响应丢失或事件未发布。
- **日志与观测点**：[可信度：标准机制推断] 按 RoutingManager→Service Stub→实现→response/event 对齐计数、时间戳和代际；最早断点是该链第一处无有效输入/无输出的位置。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-feature1-a87fc2a -->
<a id="mod-feature1-a87fc2a"></a>
### `feature1`

别名：无已登记别名。出现位置：original-diagram-03/MCU（d03-044，标签 `feature1`）。Occurrence 角色：d03-044（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] legend（图例，不是服务）
- **核心作用**：[可信度：架构图确认] 清单角色说明：非运行时图例或连线标注。；[可信度：标准机制推断] `feature1` 在该 occurrence 中是箭头图例，不是服务或独立运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 它描述连接的机制类别，不拥有业务数据、线程、队列或设备。
- **输入**：[可信度：待 MT8676 确认] 图注
- **内部处理**：[可信度：标准机制推断] 用于解释箭头语义；私有端点、配置和参数必须由接口/抓包补证。
- **输出**：[可信度：待 MT8676 确认] 图注含义
- **上游**：[可信度：待 MT8676 确认] 所连接发送端（图中具体箭头）。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 所连接接收端（图中具体箭头）。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] feature1。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 图例没有启动、Ready 或重启生命周期。
- **常见故障模式**：[可信度：标准机制推断] 常见误判是把图例名称当成守护进程，或把一条箭头扩展为所有模块间连接。
- **日志与观测点**：[可信度：标准机制推断] 应到箭头两端真实进程查注册、收发和错误；最早断点是确认两端端点身份。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。

<!-- module-id: mod-feature2-446ad0d -->
<a id="mod-feature2-446ad0d"></a>
### `feature2`

别名：无已登记别名。出现位置：original-diagram-03/MCU（d03-045，标签 `feature2`）。Occurrence 角色：d03-045（runtime）：运行节点标签；是否独立进程仍需运行时证据。包含导航：无容器子项；该模块按运行节点或图例解释。

- **位置与所属域**：[可信度：架构图确认] 域 MCU；层级 MCU。逻辑卡合并同名 occurrence，但不合并其运行实例。
- **模块类型**：[可信度：架构图确认] legend（图例，不是服务）
- **核心作用**：[可信度：架构图确认] 清单角色说明：非运行时图例或连线标注。；[可信度：标准机制推断] `feature2` 在该 occurrence 中是箭头图例，不是服务或独立运行时进程。
- **处理的数据或资源**：[可信度：标准机制推断] 它描述连接的机制类别，不拥有业务数据、线程、队列或设备。
- **输入**：[可信度：待 MT8676 确认] 图注
- **内部处理**：[可信度：标准机制推断] 用于解释箭头语义；私有端点、配置和参数必须由接口/抓包补证。
- **输出**：[可信度：待 MT8676 确认] 图注含义
- **上游**：[可信度：待 MT8676 确认] 所连接发送端（图中具体箭头）。这里只转述清单中经复核的箭头/标准机制说明；未由方框行列相邻关系补边。
- **下游**：[可信度：待 MT8676 确认] 所连接接收端（图中具体箭头）。若清单写“待确认”，必须以运行时发送、接收和关联 ID 形成闭环。
- **接口与协议**：[可信度：待 MT8676 确认] feature2。图中标签、标准机制和项目私有绑定必须分层判断。
- **生命周期**：[可信度：标准机制推断] 图例没有启动、Ready 或重启生命周期。
- **常见故障模式**：[可信度：标准机制推断] 常见误判是把图例名称当成守护进程，或把一条箭头扩展为所有模块间连接。
- **日志与观测点**：[可信度：标准机制推断] 应到箭头两端真实进程查注册、收发和错误；最早断点是确认两端端点身份。
- **证据与可信度**：[可信度：架构图确认] [证据：original-diagram-03]。[可信度：架构图确认] 该证据确认图中名称/位置/显式关系；[可信度：待 MT8676 确认] 不自动证明独立进程、私有接口或逐跳实现。


---

[返回主题导航](README.md) · [本次来源索引](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/22.html)
