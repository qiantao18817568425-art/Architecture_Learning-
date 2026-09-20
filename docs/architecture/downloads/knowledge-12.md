# SRC0096 MT8668_DSI_Bringup_SOP_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_DSI_Bringup_SOP_CN_V1.0.pdf

SHA-256：0554d880bcfb92541cd01ef47d5d5163b578054f8cb5170ba2204b625af4c77c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0096.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28 
MT8668 DSI Bring Up SOP 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 柴莹 正式版 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
表格目录 ··········································································································································································· 6 
1 概述 ··········································································································································································· 7 
1.1 目的·········································································································································································· 7 
1.2 DSI HW 架构 ···························································································································································· 7 
1.3 DSI Interface 能力 ···················································································································································· 7 
1.4 DSI 屏幕 Timing 要求 ··············································································································································· 7 
2 缩略词 ······································································································································································· 8 
2.1 缩略词 ······································································································································································ 8 
3 DSI Android Porting 指南 ··········································································································································· 9 
3.1 Android SW 架构······················································································································································ 9 
3.2 Android 通用文件路径 ············································································································································ 9 
3.3 LK2 Driver Porting ·················································································································································· 10 
3.3.1 LK2 文件架构 ·············································································································································· 10 
3.3.2 MIPI Panel Driver -jd9365da_wxga_dsi_vdo.c ···························································································· 10 
3.3.3 SerDes Panel Driver - serdes_dsi_vdo.c ······································································································ 10 
3.3.4 DTS 文件介绍 ············································································································································· 11 
3.3.5 DTS 参数介绍 ············································································································································· 11 
3.3.6 如何新增一个 LK 的 Driver ························································································································ 17 
3.3.7 LK Driver Function 介绍 ······························································································································ 18 
3.3.8 LK 参数 get_params 介绍 ··························································································································· 19 
3.3.9 DSI0 BootLogo 设定 ···································································································································· 23 
3.3.10 DWS 设定 ···················································································································································· 23 
3.4 Kernel Driver Porting ·············································································································································· 25 
3.4.1 Kernel Driver 文件路径 ······························································································································ 25 
3.4.2 Kernel Driver 文件参考 ······························································································································ 25 
3.4.3 DTS 文件介绍 ············································································································································· 26 
3.4.4 DTS 参数介绍 ············································································································································· 26 
3.4.5 如何添加一个新的 Kernel Driver··············································································································· 26 
3.4.6 Kernel Driver Function 介绍 ······················································································································· 28 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3.4.7 Kernel 参数介绍 ········································································································································· 29 
3.5 disp_pwm 方式背光控制 ······································································································································ 34 
3.5.1 disp_pwm dws 设定 ··································································································································· 34 
3.5.2 leds dts 设定 ··············································································································································· 35 
3.5.3 disp_pwm LK 流程 ······································································································································ 37 
3.5.4 disp_pwm Kernel 流程································································································································ 38 
4 DSI Yocto Porting 指南 ············································································································································· 39 
4.1 Yocto 通用文件路径 ·············································································································································· 39 
4.2 LK & Kernel Driver Porting ······································································································································ 39 
4.2.1 DSI0 BootLogo 设定 ···································································································································· 39 
5 DSI Hypervisor Porting 指南 ···································································································································· 41 
5.1 Hypervisor SW 架构 ··············································································································································· 41 
6 DSI Superframe Porting 指南 ··································································································································· 42 
6.1 Superframe 概念 ···················································································································································· 42 
6.2 Superframe 架构 ···················································································································································· 42 
6.3 Superframe DTS 设定 ············································································································································· 42 
6.3.1 Physical DSI 节点········································································································································· 43 
6.3.2 Virtual DSI 节点 ·········································································································································· 43 
6.3.3 加串器节点 ················································································································································ 44 
6.3.4 Superframe Setting 节点 ···························································································································· 45 
6.4 如何关闭 Superframe ············································································································································ 48 
6.5 DSI Superframe Timing ··········································································································································· 49 
6.5.1 Panel to DSI Timing Function ······················································································································ 49 
6.5.2 Panel to Display Function ···························································································································· 50 
6.5.3 Log 确认 Timing 信息 ································································································································· 50 
6.6 Superframe SerDes 控制 ········································································································································ 50 
7 DSI Dual-link Porting 指南 ······································································································································· 52 
7.1 Driver 中要如何配置 ············································································································································· 52 
7.1.1 Physical DSI0 节点 ······································································································································ 52 
7.1.2 Physical DSI1 节点 ······································································································································ 53 
7.1.1 加串器节点 ················································································································································ 53 
7.1.2 Dual-link Setting 节点 ································································································································· 54 
8 SerDes 调试指南 ····················································································································································· 59 
8.1 Ser-max96789 Debug Register ······························································································································· 59 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
Confidential B 
MT8668 
DSI Bring Up SOP 
 8.2 Des-max96752 Debug Register ······························································································································ 62 
8.3 Debug 流程 ···························································································································································· 62 
9 DSI 输出时序控制 ··················································································································································· 64 
9.1 LK Boot 流程 ·························································································································································· 64 
9.2 Kernel Boot or Resume 流程 ·································································································································· 65 
10 DSI DSC Porting 指南 ··············································································································································· 67 
10.1 DSC 介绍 ································································································································································ 67 
10.2 DSC 参数 ································································································································································ 67 
10.3 DSC SW 介绍 ·························································································································································· 69 
11 LCM 问题调试 ························································································································································· 70 
11.1 DSI Pattern ····························································································································································· 70 
11.2 DSI Register 介绍 ··················································································································································· 71 
11.3 DSI Register Dump 介绍 ········································································································································· 73 
11.4 DSI 调试流程 ························································································································································· 73 
11.5 帧率异常 ································································································································································ 74 
11.6 I2C 通信异常 ························································································································································· 74 
12 DSI DPHY CTS 测试问题 ··········································································································································· 76 
12.1 测试仪器 ································································································································································ 76 
12.2 测试平台准备 ························································································································································ 76 
12.3 常见 Failed 项目分析 ············································································································································ 77 
12.3.1 1.3.4/1.4.4 VOD0/VOD1 Pulse & 1.3.7 VCMTX ··························································································· 77 
12.3.2 1.3.8 Voltage Mismatch & 1.4.8 VCMTX Mismatch ···················································································· 79 
12.3.3 1.3.1~3 & 1.3.13~16 MIPI Timing ················································································································ 79 
12.3.4 1.3.11~12 Tr/Tf & 1.5.4 Data to Clock Skew ································································································ 82 
12.3.5 什么情况开 DEM ········································································································································ 84 
12.3.6 1.5.5 & 1.5.6 HS Skew Calibration Burst ······································································································ 84 
13 LCM Timing 介绍 ····················································································································································· 86 
13.1 Power On/Off Sequence········································································································································· 86 
13.2 Interface Timing ····················································································································································· 86 
13.3 Display Timing ························································································································································ 86 
14 DSI Interface 介绍 ··················································································································································· 88 
14.1 HS ··········································································································································································· 88 
14.2 LP ············································································································································································ 88 
14.3 HS & LP 状态切换图 ·············································································································································· 88 
14.4 DSI MIPI D-PHY Timing Spec ··································································································································· 89 
14.4.1 Data Lane Spec ············································································································································ 89 
14.4.2 Clock Lane Spec ··········································································································································· 90 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
14.5 Video Mode 介绍 ··················································································································································· 91 
14.5.1 HFP Keep HS ················································································································································ 91 
14.5.2 DSI_Frame_Rate_Cal_for_Customer 介绍 ·································································································· 92 
15 DSI 波形量测 ··························································································································································· 94 
15.1 如何测量帧率 ························································································································································ 94 
15.2 如何测量信号 ························································································································································ 95 
16 DSI 屏幕评估 ··························································································································································· 97 
附件一 附加条款 ····························································································································································· 98 
 
表格目录 
表 2-1. 缩略词 ··········································································································································································· 8 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
1 概述 
1.1 目的 
本文档主要介绍 MT8668 DSI Interface 屏幕显示的 Driver Porting 和 Issue Debug 的方法。 
 
1.2 DSI HW 架构 
MT8668 总共有两路 DSI Port，公版搭配加串器 max96789 实现单屏或者多屏显示。可以实现不等高非对称的超级
帧显示。 
 
 
 
 
 
 
 
 
 
 
1.3 DSI Interface 能力 
Port DSI0 DSI1 
MT8668 
4 lanes/3 trios 
DPHY: 3.3Gbps/lane 
CPHY: 2.88Gsps/trio 
4 lanes/3 trios 
DPHY: 3.3Gbps/lane 
CPHY: 2.88Gsps/trio 
 
1.4 DSI 屏幕 Timing 要求 
具体请参考章节 14.5.2。Display 对屏幕的 timing 有要求，请提供屏幕的详细 Timing 给 MTK 评估。如果已经做过评
估，请忽略。 
MT8668 DSI0 
Serializer 
MAX96789 
DSI1 
Serializer 
MAX96789 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
2 缩略词 
2.1 缩略词 
表 2-1. 缩略词 
缩略词 解释 
DPI Display Pixel Interface 
DSI Display Serial Interface 
HBP Horizontal Back Porch 
HFP Horizontal Front Porch 
HS High speed 
Htotal Horizontal total pixels 
JEIDA Japan Electronic Industry Development Association 
LP Low Power 
LVDS Low-Voltage Differential Signaling 
MIPI Mobile Industry Processor Interface 
RX Receive 
TX Transmit 
UI Unit Interval 
VBP Vertical Back Porch 
VESA Video Electronics Standards Association 
VFP Vertical Front Porch 
Vtotal Vertical Total Lines 
Serdes Serializer+Deserializer 
Ser Serializer 
Des Deserializer 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3 DSI Android Porting 指南 
System Branch Kernel Version 
Android B alps-mp-b0.mp1 Kernel-6.12 
 
3.1 Android SW 架构 
 
 
3.2 Android 通用文件路径 
文件 路径 
LK2 vendor\mediatek\proprietary\bootable\bootloader\lk2 
Android  Kernel Kernel\kernel_device_modules-6.12 
Project Device\mediateksample\auto8668p1_64 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
文件 路径 
dws Vendor\mediatek\proprietary\tools\dct\dws\mt6881\ auto8668p1_64.dws 
 
3.3 LK2 Driver Porting 
LK 部分的 driver 主要用于 boot logo 的显示，DSI0 可以在 LK 显示 boot logo，DSI1 不支持 LK 显示，默认从 Kernel 启
动。 
 
3.3.1 LK2 文件架构 
橙色区域文件是 Porting Driver 需要修改或者参考的文件。 
LCM Driver 
dev\lcm\serdes_dsi_vdo\serdes_dsi_vdo.c 
dev\lcm\jd9365da_wxga_dsi_vdo\jd9365da_wxga_dsi_vdo.c 
dev\lcm\mt65xx_lcm_list.c 
dev\lcm\include\lcm_drv.h 
LK Project.mk Project\auto8668p1_64.mk 
Kernel DTS 
arch\arm64\boot\dts\mediatek\cust_mt8668_display_interface.dtsi 
arch\arm64\boot\dts\mediatek\cust_mt8668_display_config_main.dtsi 
arch\arm64\boot\dts\mediatek\cust_mt8668_display_serdes_config.dtsi 
Display Driver Platform\mediatek\mt6881\disp\ddp_dsi.c, disp_lcm.c, primary_display.c, 
mt_disp_drv.c, ddp_manager.c, ddp_dsc.c, ddp_dither.c… 
 
3.3.2 MIPI Panel Driver -jd9365da_wxga_dsi_vdo.c 
如果 Porting MIPI Panel Driver，可以参考这份文件，此 Driver 在公版有点亮 MIPI 屏幕。 
 
3.3.3 SerDes Panel Driver - serdes_dsi_vdo.c 
如果 Porting SerDes Panel Driver, 可以参考这份文件，Driver 的写法是从 dts Panel 的节点里面 Parser 出对应的 Panel 
Timing 和 SerDes 的设定。如果沿用这个 Driver，可以把 dts 中的参数更改为要 Bringup 的 SerDes 参数和屏幕 Timing
即可。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3.3.4 DTS 文件介绍 
Mt6881.dts 
Chip 的 dts 相关设定，DSI 等 Display 根节点会放在这份文件
里面，节点默认关闭 
Auto8668p1_64.dts Project dts，可以拉到文件最后，查看使用的 dtsi 文件 
cust_mt8668_display_interface.dtsi 
Interface (DSI), Panel, SerDes bridge, GPIO, leds 等相关 Display
设定，默认节点关闭。 
cust_mt8668_display_config_main.dtsi 覆盖 cust_mt8668_display_interface.dtsi，开启需要打开的节点 
cust_mt8668_display_serdes_config.dtsi SerDes panel setting 
注：一般情况修改橙色部分的文件即可。 
 
3.3.5 DTS 参数介绍 
单屏的 DTS Setting 包含三部分：DSI 节点，加串器的节点 与 panel SerDes setting 节点。其中 DSI 与加串器设定都在
cust_mt8668_display_interface.dtsi 文件里，SerDes panel setting 的设定在 cust_mt8668_display_serdes_config.dtsi  文
件中。可以根据 porting 的屏幕参数和 HW 情况做客制化。 
 
3.3.5.1 DSI 节点 
MIPI Panel 以子节点方式挂在 DSI 节点下，Panel Driver 会注册为 MIPI Device Driver。加串器（96789）作为 bridge 
通过remote-endpoint 挂在 dsi 的 port 上。 如果平台没有 mipi panel driver，可以把 panel1 的节点去掉，只保留
加串器部分的即可。 
 
&dsi0 {○1 
 status = "disabled"; 
 #address-cells = <1>; 
 #size-cells = <0>; 
 panel1 {○2 
  compatible = "boe,jd9365da"; 
  reg = <0>; 
  power-gpios = <&pio 195 0>; 
  reset-gpios = <&pio 60 0>; 
  pinctrl-names = "default"; 
  port { 
   panel1_in: endpoint { 
    remote-endpoint = <&dsi_out>; 
   }; 
  }; 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
Confidential B 
MT8668 
DSI Bring Up SOP 
  }; 
 
 ports { 
  port { 
   reg = <0>; 
   dsi_out: endpoint { 
    remote-endpoint = <&max96789_in>;○3 
   }; 
  }; 
 }; 
}; 
&mipi_tx_config0 {○4 
 status = "okay"; 
}; 
 
序号 释义 
○1 DSI0 的节点 
○2 MIPI Panel 的节点，没有可以删除 
○3 加串器的 port 节点，必填。DSI Port 通过 Remote Endpoint 相连 
○4 MIPI PHY 节点，每个 DSI 都对应一个 PHY 的节点，DSI 节点打开时，PHY 的节点也要开启。 
 
3.3.5.2 加串器节点 
Ser max96789 是 I2C Device，会挂在对应的 I2C 的节点下。需要根据 HW 原理图配置 I2C 和 GPIO。 
&i2c10 {○1 
 status = "okay"; 
 
 max96789: max96789@40 {○2 
  compatible = "maxiam,max96789,dsi0"; 
  status = "disabled"; 
  reg = <0x40>;○3 
  reset-gpios = <&pio 98 0>;○4 
  // only for test 
  //interrupt-parent = <&pio>;○5 
  //interrupts = <187 IRQ_TYPE_EDGE_RISING>; 
  pinctrl-names = "default"; 
  setting = <&config_compatible>;○6 
  port { 
   max96789_in: endpoint { 
    remote-endpoint = <&dsi_out>;○7 
   }; 
  }; 
 }; 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
序号 释义 
○1 max96789 在哪个 I2C 下，必填 
○2 Ser max96789 的节点 
○3 Max96789 I2C 地址，必填 
○4 Max96789 Power Down Pin ，不同 GPIO 需要客制化 
○5 使用中断方式的 hotplug 使用，默认用轮询 
○6 屏幕兼容的 Setting，如果没有做兼容设定，可以直接引用屏幕的节点，例如 Setting = 
<&huayang_1080>; 
○7 remote-endpoint 指向 DSI， 与 DSI port 相连 
 
3.3.5.3 I2C 命令格式说明 
格式 释义 
写命令格式 1 <i2c addr>   <reg width>  <reg addr>  <data>  <delay ms> 
写命令格式 2 <i2c addr>  <reg width>  <cmd len>    <data> 
读命令格式 <i2c addr>  <reg width>  <reg addr>   <mask>  <except data> 
i2c addr 要操作设备的 i2c client 地址 
reg width 
i2c 设备的 reg 地址长度，只支持 16/8/0 三种 
16   表示 reg 地址是 2 个 byte 
8     表示 reg 地址是 1 个 byte 
0     表示不指定 reg 地址，后面全是数据 
 
reg addr 要读写的 reg 的地址 
data 要写到 reg 的数据 
delay ms 发送完该命令后 delay 多少毫秒 
cmd len reg 地址长度为 0 时，后面有多少 byte 的数据 
mask 读出的数据跟这个数据做与操作 
except data 读出的数据与 mask 做完与操作后预期的数据 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3.3.5.4 屏幕兼容设定 
Max96789 的节点中有包含兼容的屏幕设定，方法是给屏端地址为 0x1a 的 MCU 发一串指令，通过读出来值，看是
哪个屏幕。例如读出来值&0xff (mask) 后，如果是 0xff，那么就可以拿到&huayang_1080 的节点。如何来做屏幕兼
容，需要根据屏幕的 HW 情况来判断，这部分需要根据不同的情况做客制化。 
config_compatible: compatible-node {○1 
 comp-cmd = <○2 
  0x1a 0x00 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0xd4 
  >;○3 
 comp-type =○4 
  <0x1a 0x08 0x08 0xf0 0x10 &config_bt>,○5 
  <0x1a 0x08 0x08 0xff 0xff &huayang_1080>; 
}; 
 
 
序号 释义 
○1 多个屏幕兼容节点，没有可以不添加 
○2 多屏兼容的 cmd，使用多屏兼容时必须填写 
○3 多屏兼容时写的命令，参考写命令格式 1 
○4 预期的回读对比数据，使用多屏兼容时必须填写 
○5 
预期的多屏兼容设置，参考读命令格式 
使用多屏兼容时必须填写，读出来的值跟 mask 做与操作，再跟 except data 做对比，如果一
致，则使用该行 Panel Setting。 
 
3.3.5.5 Panel Setting 节点 
屏幕 setting 的节点包含加串器，解串器，背光以及 Panel 的 Timing 设定。这部分需要根据屏幕的设定来更改。设
定放在 cust_mt8668_display_serdes_config.dtsi 文件中，并且挂在加串器 max96789 的节点下。 
&max96789 { 
 huayang_1080: config1 {○1  
  pre-init-cmd = <○2  
   0x40 0x10 0x0001 0x08 0x00○3  
   0x40 0x10 0x0203 0x00 0x00 
   0x40 0x10 0x1404 0x29 0x00 
   0x40 0x10 0x1504 0x29 0x00 
   0x40 0x10 0x14a4 0xc8 0x00 
   0x40 0x10 0x15a4 0xc8 0x00 
   0x40 0x10 0x140a 0x00 0x00 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
Confidential B 
MT8668 
DSI Bring Up SOP 
    0x40 0x10 0x150a 0x00 0x00 
   0x40 0x10 0x140b 0x00 0x00 
   0x40 0x10 0x150b 0x00 0x00 
   0x40 0x10 0x0330 0x04 0x00 
   0x40 0x10 0x0331 0x33 0x00 
   0x40 0x10 0x0333 0xe4 0x00 
   0x40 0x10 0x0308 0x7c 0x00 
   0x40 0x10 0x0053 0x10 0x00 
   0x40 0x10 0x005b 0x12 0x14 
   0x40 0x10 0x0140 0x20 0x00 
   0x40 0x10 0x0002 0x53 0x05 
   0x40 0x10 0x0010 0x31 0xc8 
   0x40 0x10 0x02dc 0x04 0x00 
   0x40 0x10 0x02dd 0xaa 0x00 
   0x40 0x10 0x02de 0x6a 0x00 
  >; 
                 post-init-cmd = <>;○4  
  deinit-cmd = <○5  
   0x40 0x10 0x0010 0x80 0x20 
  >; 
  linka-init-cmd = <○6  
   0x4c 0x10 0x06ff 0x11 0x0 
   0x4c 0x10 0x01ce 0x4e 0x0 
   0x4c 0x10 0x020c 0x03 0x0 
   0x4c 0x10 0x020d 0xaa 0x0 
   0x4c 0x10 0x020e 0x4a 0x0 
   0x1a 0x00 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 
0xd○7  
  >; 
  ser-status = <○8  
   0x40 0x10 0x00d 0x80 0x80 
   0x40 0x10 0x102 0x80 0x80 
   0x40 0x10 0x55d 0x70 0x70 
  >; 
  linka-status = <○9  
                  0x40 0x10 0x01f 0x08 0x08 
   0x48 0x10 0x6ff 0x11 0x11 
  >; 
  panel-timing-a {○10 
   width = <1920>; 
   height = <1080>; 
   hfp = <40>; 
   hsa = <42>; 
   hbp = <78>; 
   vfp = <24>; 
   vsa = <3>; 
   vbp = <9>; 
   fps = <60>; 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
   width-mm = <129>;○11 
   height-mm = <64>; 
  }; 
 }; 
  
 
 
序号 解释 
○1  屏幕 setting 节点 
○2  Pre Ser 初始化命令，在 bridge pre_enable 中执行。 
○3  初始化序列，参考写命令格式 1 
○4  post ser 初始化命令，在 bridge pre_eanble 中执行，不需要可以不用添加 
○5  ser disabled 命令，在 bridge disabled 中执行 
○6  des linkA 初始化命令，在 bridge enable 中执行 
○7  背光序列 
○8  
检测 ser 状态，读 i2c 命令，注意只支持如下 3 条命令并且要按顺序填写 
0x40 0x10 0x00d 0x80 0x80                            # 串行器是否能 detect 到 
 0x40 0x10 0x102 0x80 0x80                            # 96789 检查 PCLK 是否 detect 到 
 0x40 0x10 0x55d 0x70 0x70                            # 96789 检查 HS/VS/DE 是否 detect 到 
如果其他的 ser 需要客制化这部分寄存器 
○9  
检测 linka 状态，注意只支持两条命令且要保持顺序，第一条检测是否连接，第二 条检测是否
被初始化 
 0x40 0x10 0x01f 0x08 0x08                         # max96789 检查 linka 是否有接入 
 0x48 0x10 0x6ff 0x11 0x11                          # max96789 检查 linka 是否有被初始化，通过往一个用
不到且能读写的 reg 里写任意值再读出来判断它是否被初始化，可以根据情况客制化 
○10  屏幕 Timing 设定，必须填写 
○11  屏的物理尺寸，单位 mm，用来计算 PPI。可以从屏幕的 Spec 中拿到。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3.3.6 如何新增一个 LK 的 Driver 
以 SerDes Driver serdes_dsi_vdo 为例： 
1. 新增 panel 文件：vendor\mediatek\proprietary\bootable\bootloader\lk2\dev\lcm，如下图 
 
 
2. 修改vendor\mediatek\proprietary\bootable\bootloader\lk2\project\$(project).mk 文件，将
Panel Driver 设置为新增文件，注意命名规则 
 
 
3. 修改vendor\mediatek\proprietary\bootable\bootloader\lk2\dev\lcm\mt65xx_lcm_list.c 文件，
将 Panel Driver 加入 list 
 
 
4. 修改文件：vendor\mediatek\proprietary\bootable\bootloader\lk2\dev\lcm\include\lcm_drv.h，
Extern 新增 Panel 
 
 
5. 新增 Driver 中实现相关的参数和 Function 设定。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3.3.7 LK Driver Function 介绍 
LK LCM Driver 主要为实现 LCM_DRIVER 结构体的成员，方便后续 Display 获取相关参数和控制初始化时序。如果需
要增加客制化的 Function，可以在 LCM_DRIVER 里面添加实现。 
 
 
Function 名称 解释 是否需要修改 (Yes/No/Optional) 
name 定义 Driver 名字 Y 
set_util_funcs lcm_util 结构体初始化 N 
get_params 获取 Panel 基本参数，详见下一章节 Y 
init_power 控制上电时序 Y 
init 
Panel 或者 bridge 的初始化 
注：代码默认按照 lcm_init_power -> 
lcm_init 的顺序跑。此时 DSI 还没有送信号
出来，对时序有要求需要注意。 
Y 
suspend 
suspend_power 
休眠吃 Kernel lcm driver 里的配置，可不配
置 
N 
resume 
resume_power 
唤醒吃 Kernel lcm driver 里的配置，可不配
置 
N 
compare_id 
项目兼容多款屏时使用：若
MTK_LCM_LIST_SUPPORT 中定义了多个
屏，开机时会轮流跑每个屏驱的初始化和
O 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
Function 名称 解释 是否需要修改 (Yes/No/Optional) 
该函数读取寄存器，若读取到的值符合预
期，则说明该驱动适配当前屏。 
Set_fdt 
从 fdt 中 paser dts 中的加串器以及屏幕的
参数。公版已经做好，如果有其它客制化
的部分需要自己添加。 
O 
set_backlight 
如果背光需要在出视频流之后打开，可以
在这个函数里面实现。 
O 
 
3.3.8 LK 参数 get_params 介绍 
LCM Driver 的lcm_get_params 函数里会将当前 Panel 的参数传给 DSI 和 Display Driver，从而让 MIPI TX 端输出符
合 Panel 要求的 MIPI 波形，客户可以参考表格并根据场景 Panel Spec 修改lcm_get_params 里的参数。SerDes 
Driver 中需要配置的 default 参数如下图所示，以供参考。SerDes Driver 中如果 dts 中有设定，Driver 会从 dts 中
Parse 出对应的 Panel 设定，覆盖 default 设定。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
一般情况上图的 SerDes 设定可以覆盖 SerDes 的使用场景，其他参数可以不设定。具体的参数介绍，可以参考如下
说明。vendor\mediatek\proprietary\bootable\bootloader\lk2\dev\lcm\include\lcm_drv.h，
LCM_PARAMS 结构体中部分参数未使用到，参考下表修改 Yes/Optional 的参数即可。 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
type Panel Interface 类型，可选 DSI/DPI/DBI Y 
width/height 每帧的图像数据的像素宽高 Y 
mode 
屏正常送图时的传输模式，分为以下四种 (详见
mipi_DSI_specification)，根据 LCM Spec 配置： 
CMD_MODE 
SYNC_PULSE_VDO_MODE 
Y 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
SYNC_EVENT_VDO_MODE 
BURST_VDO_MODE 
switch_mode_enable mode 切换 O 
switch_mode 切换的 mode O 
Packet_size 未使用的参数，无需修改 N 
PS 
选择 pixel stream type，常见有以下四种： 
LOOSELY-RGB666 
PACKED-RGB666 
PACKED-RGB565 
PACKED-RGB888 
Y 
LANE_NUM MIPI Lane 数 Y 
physical_width 
Panel 物理宽高，单位 mm 
O 
physical_height O 
data_format 
LCD 数据格式，包含以下参数： 
color_order: RGB SWAP，支持 RGB/BGR 顺序传输 
trans_seq: Data bit 的传输顺序，即最高位(MSB)/最
低位(LSB)先传输 
Padding: 未使用参数，无需修改 
Format: 数据格式，例如 RGB888/666/565… 
Y 
vertical_sync_active Display timing vertical params. VSA Y 
vertical_backporch Display timing vertical params. VBP Y 
vertical_frontporch Display timing vertical params. VFP Y 
vertical_active_line Display timing vertical params. VACT Y 
vertical_frontporch_for
_low_power 
Low Power Feature，表示当系统无需画面刷新时，
调整 VFP 为该值来降帧，以达到降低功耗目的（前
提要求屏端支持动态切换该帧率）。通过
FPS/fps_new = vtotal_new/VTOTAL 计算得到
vfp_low_power。 
O 
horizontal_sync_active Display timing vertical params. HSA Y 
horizontal_backporch Display timing vertical params. HBP Y 
horizontal_frontporch Display timing vertical params. HFP Y 
horizontal_active_pixel Display timing vertical params. HACT Y 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
ssc_disable 
展频开关，展频可减少对其它信号的电磁干扰，但
要求 Panel 支持展频。 
1 表示关闭展频，0 表示开启展频。 
SerDes 一般情况建议关闭展频 
O 
ssc_range 
展频范围，可设定 0~5，单位为‰ 
例如默认 ssc_range = 5，即向下展频宽度为 5‰. 
O 
PLL_CLOCK MIPI RX 采样的 Clock Y 
data_rate 对于 DSI 的 data rate = 2* PLL_CLOCK Y 
data_rate_khz 
MIPI 采样率，equal data_rate* 1000，有 FPS 精度要
求时需配置 
O 
cont_clock 
开启连续时钟。 
1: Enable 连续时钟，clock lane 不进入 LP。 
0: Disable 连续时钟，clock lane 每帧进入一次 LP (每
行间保持 hs) 
SerDes 一般情况建议设为连续时钟。 
O 
clk_lp_per_line_enable 
1: Lock lane 每行进入一次 LP(仅在 cont_clock = 0 时
才生效)。 
O 
esd_check_enable ESD check 功能配置： 
esd_check_enable = 1;//开启 ESD Check 
customization_esd_check_enable = 1; //read LCM 
register 
 
customization_esd_check_enable = 0 //DSI_TE EINT 
O 
customization_esd_che
ck_enable O 
lcm_esd_check_table[] O 
IsCphy 
使能 CPHY 接口时配置。cphy 设置为 1，dphy 设置
为 0。 
O 
vdo_per_frame_lp_ena
ble 
使能 data 每帧回一次 LP（但要求
clk_lp_per_line_enable≠1，即 clock 不能每行回 LP
）。细节介绍请参考章节 14.5.1。 
O 
lane_swap_en Lane 硬件连接错误时使能 O 
lane_swap Lane0/1/2/3 序的 SWAP O 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
pn_swap P/N SWAP (仅支持在同一个 lane 内交换) O 
HS_TRAIL 
PHY Timing 配置，MIPI Test Timing Fail 时配置 
O 
HS_ZERO O 
HS_PRPE O 
LPX O 
 
3.3.9 DSI0 BootLogo 设定 
首先到如下路径找到当前屏幕尺寸所对应的 Logo 资源文件夹，如果没有所需大小的资源文件夹，也可以修改裁剪
LK Logo 对应当前使用屏幕的分辨率，然后到如下路径中新增一个图片资源，添加方法如下： 
1. 在下面目录下新增或查找图片资源文件 vendor/mediatek/proprietary/external/BootLogo/logo/ 
注：新增的图片资源以目录名为前缀，可参考其他目录。 
 
2. 将下面的.mk 文件中的 BOOT_LOGO config 修改为上方找到的或新增的图片目录。
device/mediatekprojects/{project_name}/ProjectConfig.mk 
 
3. 由于当前的纯 Android 公版会启用多分辨率 Logo 功能，因此 BOOT_LOGO 配置为 uhd。对应的 uhd 文件夹中包
含多个不同分辨率的 uboot Logo 资源，用于在显示 Logo 时根据所连接屏幕的显示宽度和高度适配显示不同尺
寸的 Logo。 
在添加不同尺寸的 uboot Logo 图片后，需要在 BootLogo/logo/rules.mk 文件的 LOGO_RESOURCE_OBJ_LIST1 
中相应地添加图片记录，以便将其打包进 logo.img 中。每个新增的不同分辨率 Logo 的索引值（index）对应
其在 LOGO_RESOURCE_OBJ_LIST1 中被添加的顺序位置（索引从 0 开始）。 
对应的 Logo 显示相关的源代码路径如下： 
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/mediatek/common/logo 
vendor/mediatek/proprietary/bootable/bootloader/lk2/lib/libshowlog 
 
3.3.10 DWS 设定 
dws 路径：\vendor\mediatek\proprietary\tools\dct\dws\mt6881\<Project>.dws 
 
可以通过 DCT 修改或直接修改 dws 文件，需要根据屏使用的 GPIO 和 I2C 配置，以下为配置后的 dws 中 GPIO 和
I2C 的模板： 
GPIO 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
Confidential B 
MT8668 
DSI Bring Up SOP 
 <gpio174> 
                <eint_mode>false</eint_mode> 
                <def_mode>0</def_mode> 
                <inpull_en>true</inpull_en> 
                <inpull_selhigh>false</inpull_selhigh> 
                <def_dir>OUT</def_dir> 
                <out_high>false</out_high> 
                <varName0>GPIO_LCM_LED_EN</varName0> 
                <smt>true</smt> 
                <ies>true</ies> 
</gpio174> 
 
I2C 
 <gpio125> 
                <eint_mode>false</eint_mode> 
                <def_mode>1</def_mode> 
                <inpull_en>true</inpull_en> 
                <inpull_selhigh>true</inpull_selhigh> 
                <def_dir>IN</def_dir> 
                <out_high>false</out_high> 
                <varName0>GPIO_I2C1_SCA_PIN</varName0> 
                <smt>true</smt> 
                <ies>true</ies> 
</gpio125> 
<gpio126> 
                <eint_mode>false</eint_mode> 
                <def_mode>1</def_mode> 
                <inpull_en>true</inpull_en> 
                <inpull_selhigh>true</inpull_selhigh> 
                <def_dir>IN</def_dir> 
                <out_high>false</out_high> 
                <varName0>GPIO_I2C1_SDA_PIN</varName0> 
                <smt>true</smt> 
                <ies>true</ies> 
</gpio126> 
 
 
进入系统后，可以通过以下指令确定 GPIO/I2C 是否配置成功： 
#cat  /proc/mtk_gpio/soc.pinctrl 
  
注： 
• MODE: Aux.Function selection, range: 0~7 
• DIR: 0 for input mode; 1 for output mode (This is register value of MTK’s DIR bit)  
• DOUT/DIN: 0 for low; 1 for high 
• DRIVE: Driving current selection, range: 0/1/2/3/4/5/6/7，定义参考平台对应 GPIO table 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
Confidential B 
MT8668 
DSI Bring Up SOP 
 • IES/SMT: 0 for disable; 1 for enable 
• PULLEN/R1/R0: 0 for disable; 1/2/3 for enable 
• For pin with 2 pull resistors, R1 and R0 are shown 
• For pin with 1 pull resistor, R1 and R0 are not shown 
• PULLSEL: 0 for selecting pull-down resistor; 1 for pull-up resistor 
 
3.4 Kernel Driver Porting 
Kernel Driver 用于 Kernel 启动的 DSI1 对应的 LCM（DSI0 默认 LK 启动），并且控制所有的 DSI Port 的 LCM Suspend
和 Resume。 
 
3.4.1 Kernel Driver 文件路径 
名称 路径 
LCM Driver 
kernel/kernel_device_modules_6.12/drivers/gpu/drm/panel/bridge-serdes.c 
kernel/kernel_device_modules_6.12/drivers/gpu/drm/panel/ bridge-serdes.h 
kernel/kernel_device_modules_6.12/drivers/gpu/drm/panel/panel-boe-jd9365da-vod.c 
kernel/kernel_device_modules_6.12/drivers/gpu/drm/panel/Kconfig 
kernel/kernel_device_modules_6.12/drivers/gpu/drm/panel/BUILD.bazel 
Project.mk Device/mediateksample/{Project}/ProjectConfig.mk 
Kernel config kernel/kernel_device_modules_6.12/arch/arm64/configs/mgk_64_k612_defconfig 
Kernel kleaf Kernel/kernel_device_modules_6.12/kernel/kleaf/mgk_64.bzl 
KO Order Table Device/mediateksample/{Project}/ko_order_table.csv 
Kernel DTS 
arch\arm64\boot\dts\mediatek\cust_mt8668_display_interface.dtsi 
arch\arm64\boot\dts\mediatek\cust_mt8668_display_config_main.dtsi 
arch\arm64\boot\dts\mediatek\cust_mt8668_display_serdes_config.dtsi 
Display Driver kernel/kernel_device_modules-6.12/drivers/gpu/drm/metiatek/Mediatek_v2/mtk_dsi.c, 
mtk_mipi_tx.c, mtk_disp_dsc.c,mtk_drm_crtc.c,mtk_panel_ext.c,… 
 
3.4.2 Kernel Driver 文件参考 
SerDes 的 Panel Driver，请参照 Panel 目录下的 bridge-serdes.c，Driver 的写法是从 dts Panel 的节点里面 Parse 出对
应的 Panel Timing 和 SerDes 的设定。如果沿用这个 Driver，可以把 dts 中的参数更改为要 Bringup 的 SerDes 参数和
屏幕 Timing。如果需要 Porting MIPI 的 Panel Driver，请参照 panel 目录下的panel-boe-jd8365da-vdo.c 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3.4.3 DTS 文件介绍 
请参考章节 3.3.4。 
 
3.4.4 DTS 参数介绍 
请参考章节 3.3.5。 
 
3.4.5 如何添加一个新的 Kernel Driver 
Kernel 的 Driver 都是以 KO 的方式加载的，如果需要添加新的 Driver，需要注意在 Kleaf 和 KO table 中添加。Panel 
的 KO 是 ramdisk KO，需要注意添加的位置会影响初始化的顺序，建议参考公版添加位置。 
 
1. 添加新的 Driver。 
 
 
2. 在 kconfig 加入新的 Driver。 
  
 
3. 在 panel BUILD.bazel 中加入新的 Driver。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 27 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
4. 修改 defconfig 文件。 
 
 
5. 在 kleaf 中添加 driver。 
 
 
6. 在 KO order table 里面添加 KO，table 的 module 会被顺序加载，请将新增的 Panel Module 添加到合适的位置，
避免太早或太晚 init。请参照公版添加 Panel Module 的位置。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 28 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
7. 在 dts 中加入 Driver。 
 
 
8. 实现 Driver 中的 Function 和参数设定。 
 
3.4.6 Kernel Driver Function 介绍 
Kernel SerDes driver DSI 是通过 DRM panel 的 function 来实现 SerDes 的开关操作以及 display mode 的参数传递。 
 
 
MTK DSI Panel 扩展客制化函数 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 29 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
Function 名称 解释 是否需要修改 (Yes/No/Optional) 
probe Panel 注册函数，LCM 的初始化和探测 Y 
remove 用于移除并释放 LCM 相关的资源 Y 
prepare 
用于准备 LCM Power On 和初始化，此时 DSI 还没有开
始送信号出来。 
Y 
enable 
用于启动 DRM Panel，也可以控制背光。此时 DSI 已经
Start，已经有 MIPI 信号输出。对时序有要求的话，需
要注意。 
Y 
disable 用于启动 DRM Panel，点亮背光 Y 
unprepare 用于取消 DRM Panel 的初始化 Y 
get_modes 用于获取并设置 Panel 的显示模式 Y 
reset 用于控制屏幕的 Reset O 
ata_check SerDes 屏幕不需要设定 N 
get_real_vdo_timing 
SerDes 当 superframe 时，给 DSI 送实际输出的
timing，superframe 必须实现 
O 
get_link_status 
SerDes 屏幕是否有接上，开机的时候会 check 状态，
并且会上报 connector 状态 
O 
 
3.4.7 Kernel 参数介绍 
1. default_mode 结构体是 DRM 会通过 get_modes 函数获取 Panel 的 Timing 信息，这部分参数必须要配置。 
static const struct drm_display_mode default_mode = { 
.clock = PCLK, 
.hdisplay = FRAME_WIDTH, 
.hsync_start = FRAME_WIDTH + HFP, 
.hsync_end = FRAME_WIDTH + HFP + HSA, 
.htotal = FRAME_WIDTH + HFP + HSA + HBP, 
.vdisplay = FRAME_HEIGHT, 
.vsync_start = FRAME_HEIGHT + VFP,  
.vsync_end = FRAME_HEIGHT + VFP + VSA, 
.vtotal = FRAME_HEIGHT+ VFP + VSA + VBP, 
}; 
 
SerDes Driver 中通过 serdes_bridge_get_modes 函数实现，可以通过 log 确认 timing 参数设定是否正常。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 30 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
clock 
以 kHz 为单位的像素时钟频率，total 的频率，包含
blank 区间。这个 clock 为 pixel clock，计算公式为： 
htotal x vtotal x fps 
Y 
hdisplay 水平方向的显示分辨率宽度 Y 
hsync_start 水平同步信号开始的位置 Y 
hsync_end 水平同步信号结束的位置 Y 
htotal 水平方向的总像素数 Y 
vdisplay 垂直方向的显示分辨率高度 Y 
vsync_start 垂直同步信号开始的位置 Y 
vsync_end  垂直同步信号结束的位置 Y 
vtotal 垂直方向的总像素数 Y 
 
2. MTK 扩展 Panel 参数结构体 ext_params 必须实现。 
static struct mtk_panel_params ext_params = { 
 .pll_clk = 446, 
 .data_rate = DATARATE, 
 //.vfp_low_power = 112, 
 .cust_esd_check = 0, 
 .esd_check_enable = 0, 
 .lcm_esd_check_table[0] = { 
  .cmd = 0x0A, .count = 1, .para_list[0] = 0x9C, 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 31 
Confidential B 
MT8668 
DSI Bring Up SOP 
  }, 
 .ssc_enable = 0, 
 .physical_width = FRAME_WIDTH, 
 .physical_height = FRAME_HEIGHT, 
}; 
 
SerDes Driver 中，是在 driver probe 时会赋值。 
 
 
参数 解释 是否需要修改 
(Yes/No/Optional) 
pll_clk 
MIPI PLL 时钟频率，此处配置会覆盖使用 PCLK 计算出的的 MIPI 
Clock，在超级帧模式下，必须设置 pll_clk 
Y 
data_rate 
数据传输速率，等于 pll_clk*2, 此处配置会覆盖.pll_clk 配置的 MIPI 
Clock，如果需要精确的 datarate，可以配置次参数 
Y 
phy_timcon DSI 物理层时间配置，此处配置会覆盖计算得出的 MIPI 时序 O 
crop_width 
superframe 单个屏幕的裁剪宽度，在超级帧模式下，应设置为与面
板之一的宽度/高度相对应 
O 
crop_height 
superframe 单个屏幕的裁剪高度，在超级帧模式下，应设置为与面
板之一的宽度/高度相对应 
O 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
参数 解释 是否需要修改 
(Yes/No/Optional) 
vfp_low_power 
低功耗模式下的垂直前沿间隔，进入 idle mode 时改变 VFP，从而降
低刷新率。 
会造成帧率频繁抖动，SerDes/Bridge 屏建议关闭 
N 
esd_check_enable ESD check 开关 N 
cust_esd_check 
自定义 ESD check 方式，SerDes/Bridge 屏由于屏幕在远端，此功能
无法使用 
N 
lcm_esd_check_table LCM ESD DDIC table，ESD READ DDIC 需要读取的寄存器地址和数量 N 
ssc_enable 
SSC (展频时钟) 使能，减少 EMI，会造成帧率和时钟轻微抖动。 
SerDes/Bridge 不一定支持，如需要请确认后配置 
O 
ssc_range SSC 范围，1‰~5‰，展频范围由 SPEC 规范 O 
physical_width 
物理宽度（mm），上层会使用此参数调整 DPI，在超级帧模式
下，physical_width 应设置为两个面板宽度之和。 
Y 
physical_height 
物理高度（mm），上层会使用此参数调整 DPI。在超级帧模式下
，physical_height 应设置为两个面板中较大的一个的高度。 
Y 
dsc_params 用于配置 DSC 详细参数，如需要使用请咨询 O 
prefetch_time 调整 VSYNC 时间点，调整时序以满足特定的时序要求 O 
output_mode 
输出模式， 
Single Port Mode: 常规模式 
Dual Port Mode: 使用两路 DSI 来输出一幅画面 
dsc single mode: 开启 DSC，dsc dual port setting 在 dsc_params 中 
O 
is_cphy C-PHY 配置，使能 C-PHY O 
lane_swap_en MIPI Lane 交换，可选值：MIPITX_PHY_LANE_0~3，CK、RX O 
lane_pn_swap 交换 Lane PN，只能交换同一组 Lane 的 PN，不能交换不同组的 O 
Vdo_keep_hs_perline 使能 data 每帧回一次 LP，建议开启。细节介绍请参考章节 14.5.1 Y 
 
3. 添加 DSI 基本格式属性，必须配置。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 33 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
DSI->mode_flags 参考如下设定： 
 
SerDes driver 中 serdes_bridge_attach 中赋值，这部分一定要添加，否则默认会是 CMD mode。 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
lanes 
使用的 DSI 数据通道数，DSI 支持 1~4 条 lane，lane 数越
多，总带宽越大，目前使用的大多数 panel 都为 4 条 lane 
Y 
format 
DSI 传输的像素格式，默认为 MIPI_DSI_FMT_RGB888，如需
输出其他 format，需另行咨询评估 
Y 
mode_flags 
DSI 模式，定义传输模式和特性。 
主要配置 DSI 使用的 4 种 mode 
MIPI_DSI_MODE_VIDEO：启用 VDO mode，未配置则为 CMD 
mode。 
MIPI_DSI_MODE_VIDEO_BURST: 
使能 BURST_VDO_MODE 
MIPI_DSI_MODE_VIDEO_SYNC_PULSE： 
使能 SYNC_PULSE_VDO_MODE 
Y 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
MIPI_DSI_MODE_NO_EOT_PACKET： 
HS 禁用 EoT packet 
MIPI_DSI_CLOCK_NON_CONTINUOUS: 
使能非连续时钟，非连续时钟会在 blanking 区间进入 LP 
mode，会有额外的 data phy cycle。 
MIPI_DSI_MODE_LPM: 
使能 LP send cmd，拿掉后会在 HS send cmd。目前默认 LP 
send cmd，此 config 未使用 
 
3.5 disp_pwm 方式背光控制 
背光的亮度控制方式有多种，有普通 PWM 控制，I2C 通信的 Driver 产生 PWM 控制，屏幕端 MCU 产生 PWM 控
制，disp_pwm 控制等方式。使用那种方式是由屏幕的 HW 来决定的。在调背光的 Feature 时需要明确屏幕用的是
那种，这个章节只说明背光由 disp_pwm 控制的情况要如何配置，MT8668 可以支持两路disp_pwm。 
 
3.5.1 disp_pwm dws 设定 
HW 原理图中确认使用的 disp_pwm 哪个 GPIO，下图中是co_device_module\include\dt-
bindings\pinctrl\mt6881-pinfunc.h 里面查到disp_pwm Pin。具体是从哪个 pin 输出，需要原理图确认，把
DWS 中的 GPIO Pin Function 设定为disp_pwm。以 PINMUX_GPIO6__FUNC_DISP_PWM 为例，需要将 GPIO6 
def_mode 设定为 1. 
 #define PINMUX_GPIO6__FUNC_DISP_PWM (MTK_PIN_NO(6) | 1) 
 #define PINMUX_GPIO7__FUNC_DISP_PWM1 (MTK_PIN_NO(7) | 1) 
 #define PINMUX_GPIO52__FUNC_DISP_PWM1 (MTK_PIN_NO(52) | 3) 
 #define PINMUX_GPIO61__FUNC_DISP_PWM (MTK_PIN_NO(61) | 1) 
 
下图中 DWS 的设定供参考。由于 GPIO 可能会被其他模块使用，需要在 dts 中确认是否有其他模块使用这根
GPIO。如果有被使用，则需要删除，不然 GPIO 的 Mode 可能会被更改，导致没有波形输出。 
           <gpio6> 
                <eint_mode>false</eint_mode> 
                <def_mode>1</def_mode> 
                <inpull_en>true</inpull_en> 
                <inpull_selhigh>false</inpull_selhigh> 
                <def_dir>IN</def_dir> 
                <out_high>false</out_high> 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 35

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 35 
Confidential B 
MT8668 
DSI Bring Up SOP 
                 <varName0>GPIO_PWM_BL_PIN</varName0> 
                <smt>true</smt> 
                <ies>true</ies> 
            </gpio6> 
 
3.5.2 leds dts 设定 
背光的亮度值会通过 leds 节点传下来一个 Brightness Level 值，然后这个值会转换为 Duty 和 Period 的值给到
disp_pwm Driver 去设定占空比。leds 的节点中会引用 disp_pwm 节点，来实现背光的控制。leds 的根节点在
mt6897.dtsi 中，如果需要多屏的 leds 控制，需要建立多个 leds 节点。下图中是两个 leds 节点的参考。两路
disp_pwm 的节点在 mt6897.dtsi 中，如果需要开启，需要先把对应节点中 status 由“disabled”改为“okay”。 
mtk_leds: mtk_leds { 
           backlight { ① 
               label = "lcd-backlight"; 
               max-brightness = <2047>;② 
               max-hw-brightness = <255>;③ 
           }; 
       }; 
mtk_leds1: mtk_leds1 { 
           backlight { 
               label = "lcd-backlight1"; 
               max-brightness = <2047>; 
               max-hw-brightness = <255>; 
           }; 
       }; 
&mtk_leds { 
   compatible = "mediatek,pwm-leds"; 
   backlight { 
       led_mode = <5>;④ 
       pwm_config = <0 1 0 0 0>;⑥ 
       pwms = <&disp_pwm 0 39385>;⑤ 
       pwm-names = "lcd-backlight"; 
   }; 
}; 
&mtk_leds1 {○7 
   compatible = "mediatek,pwm-leds"; 
   backlight { 
       led_mode = <5>; 
       pwm_config = <0 1 0 0 0>; 
       pwms = <&disp_pwm1 0 39385>; 
       pwm-names = "lcd-backlight1"; 
   }; 
}; 
disp_pwm: disp-pwm0@1100e000 { 
 compatible = "mediatek,disp_pwm0", 
  "mediatek,mt6881-disp-pwm0"; 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 36

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 36 
Confidential B 
MT8668 
DSI Bring Up SOP 
  reg = <0 0x1100e000 0 0x1000>; 
 interrupts = <GIC_SPI 254 IRQ_TYPE_LEVEL_HIGH 0>; 
 #pwm-cells = <2>; 
 clocks = <&cksys_clk CLK_CK_DISP_PWM_SEL>; 
 clock-names = "main"; 
 status = "okay"; 
}; 
 
disp_pwm1: disp-pwm1@1100f000 { 
 compatible = "mediatek,disp_pwm0", 
  "mediatek,mt6881-disp-pwm0"; 
 reg = <0 0x1100f000 0 0x1000>; 
 interrupts = <GIC_SPI 254 IRQ_TYPE_LEVEL_HIGH 0>; 
 #pwm-cells = <2>; 
 clocks = <&cksys_clk CLK_CK_DISP_PWM_SEL>; 
 clock-names = "main"; 
 status = "okay"; 
}; 
 
序号 解释 
① 第 1 路背光的节点 
② 允许用户设置的最大背光值 
③ 最大硬件背光值，背光 IC 支持到 255 级则为 255 (若对亮度级没有特别要求则保持默认值) 
④ 
PWM 的控制方式： 
4: LCM PWM 
5: DISP_PWM 
6: I2C PWM 
⑤ 
格式为: <&Source Channel Period_ns> 
Source: disp_pwm 来源，如 disp_pwm，disp_pwm1 
需要注意确认 dts 中 source 的节点是否有打开 
Channel: disp_pwm 中未使用，无需配置 
peroid_ns: 即输出 PWM 波形的周期(单位：ns)，即 PWM 频率的倒数 
⑥ 
仅 LK 使用，格式为<clock_source div>，后 3 个参数 disp_pwm 没有使用。 
0=26M, div=1，默认输出 12.695kHz。 div 范围 0~255，固定亮度值输出。 
pwm 输出频率 = 26 ∗ 10^6
1024 ∗ (𝑑𝑖𝑣 + 1) 
当 Kernel 起来之后，会按照⑤中设定的 PWM 频率输出。 
○7  第 2 路 leds 节点，用的 disp_pwm1 控制背光 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 37

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 37 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3.5.3 disp_pwm LK 流程 
LK 的背光亮度和 PWM 频率是一个固定的值。其中 PWM 频率默认为 12.965kHz，调整范围有限。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 38 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3.5.4 disp_pwm Kernel 流程 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 39

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 39 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
4 DSI Yocto Porting 指南 
System Branch Kernel Version 
Yocto master-spm Kernel-6.12 
 
4.1 Yocto 通用文件路径 
文件 路径 
LK2 src\bsp\lk2\ 
Kernel src\Kernel\linux\v6.12_mt8668\co_device_modules\ 
meta Meta\meta-mediatek-mt8668\ 
Kernel DTS 
Src/kernel/linux/v6.12_mt8668/co_device_modules/arch/arm64/boot/ 
dts/mediatek/ 
Kernel config 
Src/kernel/linux/v6.12_mt8668/co_device_modules/arch/arm64/configs/ 
mgk_64_k612_defconfig 
Kernel kleaf 
Src/kernel/linux/v6.12_mt8668/co_device_modules/kernel/kleaf/ 
mgk_64.bzl 
KO Order Table 
meta/meta-mediatek-mt8668/recipes-
kernel/linux/ko_order_table/auto8668p1_64/ko_order_table.csv 
 
dws 
src\devtools\dct\dws\mt6881\ 
auto8668p1_64.dws 
注：对于 DSI Panel Driver，Yocto 与 Android 的差异主要是文件路径和 project 的差异，Driver 部分是一样的。 
 
4.2 LK & Kernel Driver Porting 
LK 部分的 Driver 主要用于 BootLogo 的显示，DSI0 可以在 LK 显示 BootLogo，DSI1 没有支持 LK 显示，默认从 Kernel
启动。Yocto 部分 LK &kernel driver 与 android 部分一致，只有文件路径或者 project 的差异。其它部分请参考
Android 的部分。 
 
4.2.1 DSI0 BootLogo 设定 
首先到如下路径找到当前屏幕大小所对应的 Logo 资源文件夹，如果没有所需大小的资源文件夹，也可以修改裁剪
LK Logo 对应当前使用屏幕的分辨率，然后到如下路径中新增一个图片资源，添加方法如下： 
注：Hyper 双系统只会在 Yocto 端有 Logo，Android 端是不会有 LK Logo 的！ 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 40

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 40 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
1. 在下面目录下新增或查找图片资源文件 
src/apps/atom-base/progs/makelogo 
注：新增的图片资源以目录名为前缀，可参考其他目录。 
 
2. 将对应当前使用的 conf 文件中的 BOOT_LOGO config 修改配置为上方找到的或新增的图片目录名。 
meta/meta-mediatek-mt8668/conf/machine/{project}.conf 
公版默认都是配置在 meta/meta-mediatek-mt8668/conf/machine/auto8668p1_64.conf 中，因为其他
project 都会继承这个 project。 
 
3. 因当前公版支持多分辨率 Logo 功能，所以对应的 BOOT_LOGO 配置的是 uhd，该配置下，将会 build in 多个不
同分辨率的 uboot Logo 资源，以供显示时根据当前 Display 对应的屏幕宽、高来选择不同分辨率 Logo 的索引值
（index）进行 Show。 
上述的 Logo Index，是需要在 makelogo 目录下的rules.mk 中对应分辨率图片资源添加到 RESOURCE_OBJ_LIST
中的顺序而定，同时也需要将 add 的新图片对应添加到 bmp_to_raw 操作中。 
对应的 Logo 显示相关源代码路径： 
src/bsp/lk2/platform/mediatek/common/logo 
src/bsp/lk2/lib/libshowlogo 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 41

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 41 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
5 DSI Hypervisor Porting 指南 
System Branch Kernel Version 
Android B alps-mp-b0.mp1 Kernel-6.12 
Yocto master-spm Kernel-6.12 
 
5.1 Hypervisor SW 架构 
多系统时，Yocto 为 host 端，Android 为 Server 端。DSI 的 Driver 以及 SerDes 的 Driver 都会放在 Yocto 端，Android
端会通过虚拟化实现，并没有实体的 DSI 和 SerDes Driver。所以在 Yocto 端多系统与单 Yocto 的差异为不同的
Project。当 Porting Hypervisor Project 时候，需要注意 Project 部分的差异，其他部分 Driver Porting 请参考第 4 章。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 42

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 42 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
6 DSI Superframe Porting 指南 
DSI 支持超级帧，可以实现一个 DSI Port 输出两个屏幕的画面，从而支持更多的屏幕。超级帧包含等高和不等高两
种情况。 
 
6.1 Superframe 概念 
SoC 将两个屏幕的画面 Side by Side 拼成一张大帧的画面送给 DSI Port，DSI Port 再输出给加串器，加串器把收到的
数据分割成两个屏幕的画面，分别送给不同的解串器显示在不同的屏幕上。对于不等高的 superframe 的支持需要
提前做 SoC, SerDes，屏厂的 3 方评估。不等高 superframe 需要 SoC 按照 SerDes 可以支持的比例做小图（高度小
的）的插值，插值后会是一张与大图等高的图，再与大图做左右拼接后通过 DSI 输出。加串器收到拼接后的图除了
分割，还需要将小图中的数据做过滤，丢掉插入的 dummy 数据。再分别送给解串器显示。所以需要确认大屏和小
屏的高度比例，SerDes 是否可以做拆分的同时 SoC 是否可以做插值。另外由于 DSI 输出的 V blanking timing 只有一
种，需要确认屏幕 Blanking Timing 调整后是否超出了规格。 
 
6.2 Superframe 架构 
 
 
6.3 Superframe DTS 设定 
Superframe DTS 设定包含 4 部分：Physical 的 DSI 节点，Virtual 的 DSI 节点，加串器的节点还有 Superframe 的设定
的节点。 
SOC 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 43

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 43 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
6.3.1 Physical DSI 节点 
与单屏部分设定一致，可以参考章节 3.3.5.1。 
&dsi0 { 
 status = "disabled"; 
 #address-cells = <1>; 
 #size-cells = <0>; 
 panel1 { 
  compatible = "boe,jd9365da"; 
  reg = <0>; 
  power-gpios = <&pio 195 0>; 
  reset-gpios = <&pio 60 0>; 
  pinctrl-names = "default"; 
  port { 
   panel1_in: endpoint { 
    remote-endpoint = <&dsi_out>; 
   }; 
  }; 
 }; 
 
 ports { 
  port { 
   reg = <0>; 
   dsi_out: endpoint { 
    remote-endpoint = <&max96789_in>; 
   }; 
  }; 
 }; 
};  
&mipi_tx_config0 { 
 status = "okay"; 
}; 
 
6.3.2 Virtual DSI 节点 
virt_dsi0 是虚拟出一路 DSI，DSI 的控制还是在 dsi0 上。另外 port 指向max96789_v0。 
&virt_dsi0 {○1  
 reg = <0>; 
 ports { 
  port { 
   dsiv0_out: endpoint { 
    remote-endpoint = <&max96789_v0_in>;○2  
   }; 
  }; 
 }; 
}; 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 44

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 44 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
序号 释义 
○1  Virtual path virt_dsi0 的节点 
○2  指向虚拟的 max96789 节点 
 
6.3.3 加串器节点 
加串器也会虚拟出一个 virtual 的节点，同时 master 配置为实体的 max96789 节点。 
&i2c10 { 
 status = "okay"; 
 
 max96789: max96789@40 { 
  compatible = "maxiam,max96789,dsi0"; 
  status = "disabled"; 
  reg = <0x40>; 
  reset-gpios = <&pio 98 0>; 
  // only for test 
  //interrupt-parent = <&pio>; 
  //interrupts = <187 IRQ_TYPE_EDGE_RISING>; 
  pinctrl-names = "default"; 
  setting = <&huayang_dsi_superframe>;○1  
  port { 
   max96789_in: endpoint { 
    remote-endpoint = <&dsi_out>; 
   }; 
  }; 
 }; 
 
 max96789_v0: max96789-v0@4a {○2  
  compatible = "maxiam,max96789,dsi,virtual"; 
  status = "disabled"; 
  reg = <0x4a>; 
  master = <&max96789>;○3  
  port { 
   max96789_v0_in: endpoint { 
    remote-endpoint = <&dsiv0_out>; 
   }; 
  }; 
 }; 
 
序号 释义 
○1  配置为超级帧的屏幕参数 
○2  虚拟的 max96789 节点 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 45

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 45 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
序号 释义 
○1  配置为超级帧的屏幕参数 
○3  保存实体的 max96789 节点 
 
6.3.4 Superframe Setting 节点 
Superframe Setting 与其他 Panel 的 Setting 一样，都挂在 max96789 的节点下，需要将 superframe 的 flag 设为 1 给
driver 使用。 
&max96789 { 
 huayang_dsi_superframe: config2 {○1  
  superframe = <1>;○2  
 
  pre-init-cmd = <○3  
   0x40 0x10 0x0002 0x73 0x00 
   0x40 0x10 0x0053 0x10 0x00 
   0x40 0x10 0x0057 0x21 0x00 
   0x40 0x10 0x0332 0x4e 0x00 
   0x40 0x10 0x0333 0xe4 0x00 
   0x40 0x10 0x0004 0xf2 0x00 
   0x40 0x10 0x0308 0x5c 0x00 
   0x40 0x10 0x0311 0x03 0x00 
   0x40 0x10 0x0331 0x03 0x00 
   0x40 0x10 0x0330 0x06 0x00 
   0x40 0x10 0x031c 0x98 0x00 
   0x40 0x10 0x0321 0x24 0x00 
   0x40 0x10 0x031d 0x98 0x00 
   0x40 0x10 0x0322 0x24 0x00 
   0x40 0x10 0x0326 0xe4 0x00 
   0x40 0x10 0x03a4 0xc1 0x00 
   0x40 0x10 0x032a 0x07 0x00 
   0x40 0x10 0x0002 0x73 0x05 
   0x40 0x10 0x02dc 0x04 0x00 
   0x40 0x10 0x02dd 0xaa 0x00 
   0x40 0x10 0x02de 0x6a 0x00 
   0x40 0x10 0x02d9 0x04 0x00 
   0x40 0x10 0x02da 0xa9 0x00 
   0x40 0x10 0x02db 0x69 0x00 
   0x40 0x10 0x0385 0x50 0x00 
   0x40 0x10 0x0386 0x02 0x00 
   0x40 0x10 0x0387 0x00 0x00 
   0x40 0x10 0x03a5 0x18 0x00 
   0x40 0x10 0x03a7 0x00 0x00 
   0x40 0x10 0x03a6 0xa0 0x00 
   0x40 0x10 0x03a8 0x38 0x00 
   0x40 0x10 0x03a9 0x04 0x00 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 46

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 46 
Confidential B 
MT8668 
DSI Bring Up SOP 
    0x40 0x10 0x03aa 0x50 0x00 
   0x40 0x10 0x03ac 0x0a 0x00 
   0x40 0x10 0x03ab 0x00 0x00 
   0x40 0x10 0x03ad 0x00 0x00 
   0x40 0x10 0x03ae 0x0f 0x00 
  >; 
  i2c-remap-cmd = <○4  
   0x40 0x10 0x0010 0x21 0x64 
   0x4c 0x10 0x0000 0x90 0x00 
   0x48 0x10 0x0073 0x31 0x00 
   0x48 0x10 0x0042 0x36 0x00 
   0x48 0x10 0x0043 0x34 0x00 
   0x48 0x10 0x0044 0x62 0x00 
   0x48 0x10 0x0045 0x28 0x00 
   0x40 0x10 0x0010 0x22 0x64 
   0x4c 0x10 0x0000 0x94 0x00 
   0x4a 0x10 0x0073 0x32 0x00 
   0x4a 0x10 0x0042 0x38 0x00 
   0x4a 0x10 0x0043 0x34 0x00 
   0x4a 0x10 0x0044 0x64 0x00 
   0x4a 0x10 0x0045 0x28 0x00 
   0x40 0x10 0x0010 0x23 0x64 
   0x4a 0x10 0x0050 0x01 0x00 
  >; 
  post-init-cmd = <>;○5  
  linka-init-cmd = <○6  
   0x48 0x10 0x01ce 0x4c 0x00 
   0x48 0x10 0x06ff 0x11 0x00 
   0x48 0x10 0x020c 0x03 0x00 
   0x48 0x10 0x020d 0xaa 0x00 
   0x48 0x10 0x020e 0x4a 0x00 
   0x1b 0x00 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 
0xd4 
  >; 
  linkb-init-cmd = <○7  
   0x4a 0x10 0x01ce 0x4c 0x00 
   0x4a 0x10 0x06ff 0x11 0x00 
   0x4a 0x10 0x020c 0x03 0x00 
   0x4a 0x10 0x020d 0xaa 0x00 
   0x4a 0x10 0x020e 0x4a 0x00 
   0x1c 0x00 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 
0xd4 
  >; 
 
  linka-deinit-cmd = <○8  
   0x1b 0x00 0x0b 0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x00 0x00 
0x85 
  >; 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 47

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 47 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
  linkb-deinit-cmd = <○9  
   0x1c 0x00 0x0b 0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x00 0x00 
0x85 
  >; 
 
  ser-status = <○10 
          0x40 0x10 0x0d 0x80 0x80 
                         0x40 0x10 0x102 0x80 0x80 
                         0x40 0x10 0x55d 0x70 0x70 
  >; 
  linka-status = <○11 
   0x40 0x10 0x1f 0x08 0x08 
                          0x48 0x10 0x6ff 0x11 0x11 
  >; 
  linkb-status = <○12 
   0x40 0x10 0x1f 0x10 0x10 
                          0x4a 0x10 0x6ff 0x11 0x11 
  >; 
  panel-timing-a {○13 
   width = <1920>; 
   height = <1080>; 
   hfp = <40>; 
   hsa = <41>; 
   hbp = <79>; 
   vfp = <24>; 
   vsa = <3>; 
   vbp = <9>; 
   fps = <60>; 
   width-mm = <129>; 
   height-mm = <64>; 
  }; 
  panel-timing-b {○14 
   width = <1920>; 
   height = <1080>; 
   hfp = <40>; 
   hsa = <41>; 
   hbp = <79>; 
   vfp = <24>; 
   vsa = <3>; 
   vbp = <9>; 
   fps = <60>; 
   width-mm = <129>; 
   height-mm = <64>; 
  }; 
 }; 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 48

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 48 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
序号 释义 
○1  superframe Setting 节点 
○2  是否是 superframe，superframe 设为 1 
○3  加串器 max96789 超级帧的 pre 初始化设定。 
○4  当同款屏幕 des I2C 地址或者 touch 地址冲突的时候，需要将 I2C 地址做 remap 
○5  Post 初始化序列，如果有需要就填入，没有可以删除 
○6  Linka 的屏幕（DSI0 对应的屏幕）des 和背光等初始化序列 
○7  Linkb 的屏幕（virt_DSI0 对应的屏幕）des 和背光等初始化序列 
○8  Linka deinit 序列 
○9  Linkb deinit 序列 
○10  
检测 ser 状态，是读 i2c 命令，注意只支持如下 3 条命令并且要按顺序填写 
0x40 0x10 0x00d 0x80 0x80                            # 串行器是否能 detect 到 
 0x40 0x10 0x102 0x80 0x80                            # 96789 检查 PCLK 是否 detect 到 
 0x40 0x10 0x55d 0x70 0x70                            # 96789 检查 HS/VS/DE 是否 detect 到 
如果其他的 ser 需要客制化这部分寄存器 
○11  
检测 linka 状态，注意只支持两条命令且要保持顺序，第一条检测是否连接，第二条检测是否被初始
化 
 0x40 0x10 0x01f 0x08 0x08                         # max96789 检查 linka 是否有接入 
 0x48 0x10 0x6ff 0x11 0x11                          # max96789 检查 linka 是否有被初始化，通过往一个用不到且
能读写的 reg 里写任意值再读出来判断它是否被初始化，可以根据情况客制化  
○12  检测 linkb 状态, 同 linka 
○13  Linka 接的屏幕的 timing 
○14  Linkb 接的屏幕的 timing 
 
6.4 如何关闭 Superframe 
如果 DSI0 不需要输出超级帧，只需要输出单屏。可以将 dts 中 virt_dsi0 的节点关掉，同时将加串器的节点中
Setting 改为单屏的设定，或者兼容屏幕的设定。 
&max96789_1 { 
 status = "okay"; 
 setting = <&huayang_1080p>; 
}; 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 49

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 49 
Confidential B 
MT8668 
DSI Bring Up SOP 
 &virt_dsi0 { 
 status = "disabled"; 
}; 
&max96789_v0 { 
         status = "disabled"; 
}; 
 
6.5 DSI Superframe Timing 
DSI 在超级帧的时候输出的是两个屏幕的 Size，DSI Timing 需要按照两个屏幕的设定，目前的 Code Flow 中已经在超
级帧的时候把 desa 和 desb 的 Panel Timing 横向做了相加。送给 Display 的 Timing 需要的是单个屏幕的 timing。 
 
6.5.1 Panel to DSI Timing Function 
  
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 50

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 50 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
6.5.2 Panel to Display Function 
  
 
 
6.5.3 Log 确认 Timing 信息 
 
 
需要确认 Log 中 Display Timing 为单屏的 Timing，DSI Timing 为两个屏幕的 Timing，设定才是正确的。如果不是这
样，请检查设定。 
 
6.6 Superframe SerDes 控制 
超级帧的时候 SerDes driver 中会将指向 dsi0 节点的 driver 设定为 port = 0，virtual 的节点设定为 port = 1，从而实现
两个 des 和屏幕的控制。如果增加其它 SerDes 的 compatible，注意 driver data 部分也要设对，不要随意更改。 
Panel Timing 
DSI Timing 
Display Timing 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 51

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 51 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
  
 
 
另外 virtual 的节点中要设定 master 的节点，virtual 部分的 driver 的控制都会指向 master 节点。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 52

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 52 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
7 DSI Dual-link Porting 指南 
什么是 dual-link 场景？ 
 
 
 
 
 
 
 
 
 
如上图中所示，当 2 个 DSI port 的数据都送给同一个加串器，然后加串器将数据送给不同的屏幕显示。也就是说加
串器需要支持 2 个 DSI 的输入（两进两出）。这个场景适用于屏幕分辨率不高，单 link 可以支持，需要节省成本且
屏幕数量少的场景。 
 
7.1 Driver 中要如何配置 
以下以 DSI0 & DSI1 使用同一个 max96789 为例。 
 
7.1.1 Physical DSI0 节点 
与单屏部分设定一致，可以参考章节 3.3.5.1。 
&dsi0 { 
 status = "disabled"; 
 #address-cells = <1>; 
 #size-cells = <0>; 
 panel1 { 
  compatible = "boe,jd9365da"; 
  reg = <0>; 
  power-gpios = <&pio 195 0>; 
  reset-gpios = <&pio 60 0>; 
  pinctrl-names = "default"; 
  port { 
   panel1_in: endpoint { 
    remote-endpoint = <&dsi_out>; 
   }; 
  }; 
 }; 
 
MT8668 
DSI0 
Serializer  
DSI1 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 53

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 53 
Confidential B 
MT8668 
DSI Bring Up SOP 
  ports { 
  port { 
   reg = <0>; 
   dsi_out: endpoint { 
    remote-endpoint = <&max96789_in>; 
   }; 
  }; 
 }; 
};  
&mipi_tx_config0 { 
 status = "okay"; 
}; 
 
7.1.2 Physical DSI1 节点 
dsi1 的节点，port 指向max96789_v0。 
&dsi1 {○1  
 reg = <0>; 
 ports { 
  port { 
   dsi1_out: endpoint { 
    remote-endpoint = <&max96789_v0_in>;○2  
   }; 
  }; 
 }; 
}; 
&mipi_tx_config1 { 
 status = "okay"; 
}; 
 
序号 释义 
○1  Dsi1 的节点 
○2  指向虚拟的 max96789 节点 
 
7.1.1 加串器节点 
加串器会虚拟出一个 virtual 的节点，同时 master 配置为实体的 max96789 节点。并且 port 指向 dsi1 节点。 
&i2c10 { 
 status = "okay"; 
 
 max96789: max96789@40 { 
  compatible = "maxiam,max96789,dsi0"; 
  status = "disabled"; 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 54

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 54 
Confidential B 
MT8668 
DSI Bring Up SOP 
   reg = <0x40>; 
  reset-gpios = <&pio 98 0>; 
  // only for test 
  //interrupt-parent = <&pio>; 
  //interrupts = <187 IRQ_TYPE_EDGE_RISING>; 
  pinctrl-names = "default"; 
  setting = <&dsi_duallink>;○1  
  port { 
   max96789_in: endpoint { 
    remote-endpoint = <&dsi_out>; 
   }; 
  }; 
 }; 
 
 max96789_v0: max96789-v0@4a {○2  
  compatible = "maxiam,max96789,dsi,virtual"; 
  status = "disabled"; 
  reg = <0x4a>; 
  master = <&max96789>;○3  
  port { 
   max96789_v0_in: endpoint { 
    remote-endpoint = <&dsi1_out>;○4  
   }; 
  }; 
 }; 
 
序号 释义 
○1  配置为 dual-link 的屏幕参数 
○2  虚拟的 max96789 节点 
○3  保存实体的 max96789 节点 
○4  虚拟的加串器节点指向 dsi1 的节点 
 
7.1.2 Dual-link Setting 节点 
Dual-link Setting 与其他 Panel 的 Setting 一样，都挂在 max96789 的节点下，需要将 dual-link 的 flag 设为 1 给 driver 
使用。 
&max96789 { 
 dsi_duallink: config3 {○1  
  dual-link = <1>;○2  
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 55

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 55 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
  pre-init-cmd = <○3  
   0x40 0x10 0x0002 0x73 0x00 
   0x40 0x10 0x0053 0x10 0x00 
   0x40 0x10 0x0057 0x21 0x00 
   0x40 0x10 0x0332 0x4e 0x00 
   0x40 0x10 0x0333 0xe4 0x00 
   0x40 0x10 0x0004 0xf2 0x00 
   0x40 0x10 0x0308 0x5c 0x00 
   0x40 0x10 0x0311 0x03 0x00 
   0x40 0x10 0x0331 0x03 0x00 
   0x40 0x10 0x0330 0x06 0x00 
   0x40 0x10 0x031c 0x98 0x00 
   0x40 0x10 0x0321 0x24 0x00 
   0x40 0x10 0x031d 0x98 0x00 
   0x40 0x10 0x0322 0x24 0x00 
   0x40 0x10 0x0326 0xe4 0x00 
   0x40 0x10 0x03a4 0xc1 0x00 
   0x40 0x10 0x032a 0x07 0x00 
   0x40 0x10 0x0002 0x73 0x05 
   0x40 0x10 0x02dc 0x04 0x00 
   0x40 0x10 0x02dd 0xaa 0x00 
   0x40 0x10 0x02de 0x6a 0x00 
   0x40 0x10 0x02d9 0x04 0x00 
   0x40 0x10 0x02da 0xa9 0x00 
   0x40 0x10 0x02db 0x69 0x00 
   0x40 0x10 0x0385 0x50 0x00 
   0x40 0x10 0x0386 0x02 0x00 
   0x40 0x10 0x0387 0x00 0x00 
   0x40 0x10 0x03a5 0x18 0x00 
   0x40 0x10 0x03a7 0x00 0x00 
   0x40 0x10 0x03a6 0xa0 0x00 
   0x40 0x10 0x03a8 0x38 0x00 
   0x40 0x10 0x03a9 0x04 0x00 
   0x40 0x10 0x03aa 0x50 0x00 
   0x40 0x10 0x03ac 0x0a 0x00 
   0x40 0x10 0x03ab 0x00 0x00 
   0x40 0x10 0x03ad 0x00 0x00 
   0x40 0x10 0x03ae 0x0f 0x00 
  >; 
  i2c-remap-cmd = <○4  
   0x40 0x10 0x0010 0x21 0x64 
   0x4c 0x10 0x0000 0x90 0x00 
   0x48 0x10 0x0073 0x31 0x00 
   0x48 0x10 0x0042 0x36 0x00 
   0x48 0x10 0x0043 0x34 0x00 
   0x48 0x10 0x0044 0x62 0x00 
   0x48 0x10 0x0045 0x28 0x00 
   0x40 0x10 0x0010 0x22 0x64 
   0x4c 0x10 0x0000 0x94 0x00 
   0x4a 0x10 0x0073 0x32 0x00 
   0x4a 0x10 0x0042 0x38 0x00 
   0x4a 0x10 0x0043 0x34 0x00 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 56

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 56 
Confidential B 
MT8668 
DSI Bring Up SOP 
    0x4a 0x10 0x0044 0x64 0x00 
   0x4a 0x10 0x0045 0x28 0x00 
   0x40 0x10 0x0010 0x23 0x64 
   0x4a 0x10 0x0050 0x01 0x00 
  >; 
  post-init-cmd = <>;○5  
  linka-init-cmd = <○6  
   0x48 0x10 0x01ce 0x4c 0x00 
   0x48 0x10 0x06ff 0x11 0x00 
   0x48 0x10 0x020c 0x03 0x00 
   0x48 0x10 0x020d 0xaa 0x00 
   0x48 0x10 0x020e 0x4a 0x00 
   0x1b 0x00 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 
0x00 0x00 0xd4 
  >; 
  linkb-init-cmd = <○7  
   0x4a 0x10 0x01ce 0x4c 0x00 
   0x4a 0x10 0x06ff 0x11 0x00 
   0x4a 0x10 0x020c 0x03 0x00 
   0x4a 0x10 0x020d 0xaa 0x00 
   0x4a 0x10 0x020e 0x4a 0x00 
   0x1c 0x00 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 
0x00 0x00 0xd4 
  >; 
 
  linka-deinit-cmd = <○8  
   0x1b 0x00 0x0b 0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 
0x00 0x00 0x85 
  >; 
 
  linkb-deinit-cmd = <○9  
   0x1c 0x00 0x0b 0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 
0x00 0x00 0x85 
  >; 
 
  ser-status = <○10 
          0x40 0x10 0x0d 0x80 0x80 
                         0x40 0x10 0x102 0x80 0x80 
                         0x40 0x10 0x55d 0x70 0x70 
  >; 
  linka-status = <○11 
   0x40 0x10 0x1f 0x08 0x08 
                          0x48 0x10 0x6ff 0x11 0x11 
  >; 
  linkb-status = <○12 
   0x40 0x10 0x1f 0x10 0x10 
                          0x4a 0x10 0x6ff 0x11 0x11 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 57

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 57 
Confidential B 
MT8668 
DSI Bring Up SOP 
   >; 
 
  panel-timing-a {○13 
   width = <1920>; 
   height = <1080>; 
   hfp = <40>; 
   hsa = <41>; 
   hbp = <79>; 
   vfp = <24>; 
   vsa = <3>; 
   vbp = <9>; 
   fps = <60>; 
   width-mm = <129>; 
   height-mm = <64>; 
  }; 
  panel-timing-b {○14 
   width = <800>; 
   height = <480>; 
   hfp = <40>; 
   hsa = <41>; 
   hbp = <79>; 
   vfp = <24>; 
   vsa = <3>; 
   vbp = <9>; 
   fps = <60>; 
   width-mm = <129>; 
   height-mm = <64>; 
  }; 
 }; 
 
序号 释义 
○1  Dual-link Setting 节点 
○2  是否是 dual-link，设为 1 
○3  加串器 max96789 dual-link 的 pre 初始化设定 
○4  当屏幕 des I2C 地址 或者 touch 地址冲突的时候，需要将 I2C 地址做 remap 
○5  Post 初始化序列，如果有需要就填入，没有可以删除 
○6  Linka 的屏幕（DSI0 对应的屏幕）des 和背光等初始化序列 
○7  Linkb 的屏幕（DSI1 对应的屏幕）des 和背光等初始化序列 
○8  Linka deinit 序列 
○9  Linkb deinit 序列 
○10  
检测 ser 状态，是读 i2c 命令，注意只支持如下 3 条命令并且要按顺序填写 
0x40 0x10 0x00d 0x80 0x80                            # 串行器是否能 detect 到 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 58

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 58 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
序号 释义 
 0x40 0x10 0x102 0x80 0x80                            # 96789 检查 PCLK 是否 detect 到 
 0x40 0x10 0x55d 0x70 0x70                            # 96789 检查 HS/VS/DE 是否 detect 到 
如果其他的 ser 需要客制化这部分寄存器 
○11  
检测 linka 状态，注意只支持两条命令且要保持顺序，第一条检测是否连接，第二条检测是否
被初始化 
 0x40 0x10 0x01f 0x08 0x08                         # max96789 检查 linka 是否有接入 
 0x48 0x10 0x6ff 0x11 0x11                          # max96789 检查 linka 是否有被初始化，通过往一个用
不到且能读写的 reg 里写任意值再读出来判断它是否被初始化，可以根据情况客制化  
○12  检测 Linkb 状态，同 linka 
○13  Linka 接的屏幕的 timing 
○14  Linkb 接的屏幕的 timing 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 59

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 59 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
8 SerDes 调试指南 
车机的平台中 DSI 输出大部分都是通过 SerDes 接屏幕显示，DSI 的屏幕显示异常时，需要与 SerDes 一起 Debug。
可以通过 SerDes Pattern 和寄存器等来辅助分析问题。SerDes I2C Register 的读写，可以通过 I2C-Tools 实现。这里总
结的是我们公版在 max96789 和 max96752 的 Debug 上经验积累，以供参考。这部分是跟厂商 Debug 的记录，最终
的解释请与厂商确认。 
 
8.1 Ser-max96789 Debug Register 
加串器 max96789 是 DSI RX，可以通过 RX 端收数据的情况来查看。 
0x102 bit7 确认是否有收到 MIPI Clock，并且 Detect 到 Pixel Clock。如果 bit7 为 0，在点板阶段请先确认 HW 上 MIPI
信号接线是否正常，是否有做 Swap，pn 信号是否画反。 
 
0x55D 确认是否有收到 video 信号，并且 Detect 到 DE, H/V sync。 
 
 
0x339, 0x33b, 0x33a, 0x33c 确认 PHY0/1 收到 LP 和 HS 的数据是否有 Error，寄存器读一次会清 0，如果有 Error 可以
多读几次。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 60

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 60 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
0x3a0, 0x3a2 确认收到的 MIPI 输出是否有 ECC 和 CRC Error。 
 
 
 
若以上寄存器如果都正常，说明 max96789 是有正确的收到 DSI 的数据，并且没有 Error。如果屏幕还是不亮需要确
认屏幕的 Timing 设定是否正常，可以同时打一下 max96789 的 Pattern 给屏幕，来确认一下是否可以亮，如果 789 
Pattern 也不亮，建议联系 maxin 和屏厂解决。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 61

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 61 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
0x332, 0x333, 0x334, 0x335 确认 Lane Swap 和 p/n Swap 设定是否正常。 
 
 
 
0x13, 0x1F 确认 GMSL Link Lock 状态。 
 
 
 
0x3A4 可以关掉 max96789 的 DPI Deskew Bit0。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 62

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 62 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
当画面出现水平方向偏移的时候，可以尝试将 deskew 开起来，并且同时需要配置 panel 的 timing 给 96789，这样
deskew 工作才正常。具体参数可以请美信来设定。 
 
8.2 Des-max96752 Debug Register 
0x108 确认是否有 Video Lock 和 Video PKT Detect 
 
0x1ce 画面出现锯齿的时候可以尝试 Swap 一下。 
 
 
8.3 Debug 流程 
下图中是对以上寄存器说明和 Debug 方法的流程总结，可以按照这个流程来定位问题。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 63

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 63 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 64

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 64 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
9 DSI 输出时序控制 
对于 Bridge 或者是 SerDes，会对 DSI 输出信号的时间点有要求，例如需要在先做初始化，再送 DSI 信号，或者需要
先送 DSI 信号，再做初始化。本章节主要说明如何调整 LCM Driver 中初始化的时间点。 
 
9.1 LK Boot 流程 
默认的 Code Flow，disp_lcm_init() 会去调用 LCM Driver 中的init_power 和init 函数，此时 DSI 没送信号。 
 
 
 
// （1）DSI config， DSI 还没出信号 
// （2）LCM driver-> init_power & init 
//（3）DSI HS start， 只出 HS clock 信号 
//（4）DSI start， HS data 和 clock 都开始输出 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 65

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 65 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
如果需要在 DSI 出 Data 和 Clock 后，跑 LCM 的初始化，需要把 disp_lcm_init()放到dpmgr_path_trigger 之
后。另外可以把disp_lcm_init()拆成disp_lcm_init_power()和disp_lcm_init()做更细致的客制化。 
 
在上图的 LK 开机 Flow 中，DSI & LC 的部分在下图红框中位置供参考。 
 
 
9.2 Kernel Boot or Resume 流程 
Kernel 中默认的 Flow 是drm_panel_prepare 时 DSI 没有信号输出，drm_panel_enable 时 DSI 已经开始送信号
了。可以根据需要调整 drm_panel_prepare 和drm_panel_enable 的位置来满足时序要求。例如需要 DSI 送
clock 信号，才开始初始化，就可以把 drm_panel_prepare 放到mtk_dsi_clk_hs_mode 之后，来保证时序，具体
情况根据需求客制化。 
 
// DSI 送 HS clock 信号 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 66

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 66 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
//DSI 送 data 和 clock 信号 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 67

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 67 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
10 DSI DSC Porting 指南 
目前没有支持 VESA DSC DSI Serializer，可以支持 DSC 的 MIPI 屏幕。 
 
 
 
 
 
 
 
 
10.1 DSC 介绍 
DSC 代表 VESA 显示流压缩（DSC）标准，这是由 VESA 定义的用于压缩和解压缩图像显示流的标准。该标准规定了
压缩和解压缩视频比特流的算法，包括压缩视频比特流的语法和语义。它具有实时压缩、传输、解压缩和显示的
能力。使用 DSC 的好处是可以节省带宽，从而支持更高的分辨率或更高的帧率。 DSC 支持 RGB 8 位的 1/2 和 1/3 压
缩比，RGB 10 位支持 1/3.75 的压缩比。 
 
10.2 DSC 参数 
DSC 参数的填充主要关注 LK LCM_DSC_CONFIG_PARAMS 结构体和 Kernel mtk_panel_dsc_params 结构体中的成员，
需要把 Panel Vendor 提供的 DSC 参数填写到对应 LCM Driver get_lcm_params()函数中，Kernel 需填写在对应 LCM 
Driver mtk_panel_params 结构体中。有时 Panel Vendor 提供的可能是原始的 128 bytes pps 数据，这需要进行额外
的转换工作，为避免转换过程出错建议请 Vendor 提供转换后的参数直接填入屏驱。开启 DSC 压缩后，需要注意
Driver 中ext_params 中的.data_rate 设定需要把 Hactive 乘以压缩比。因为 DSC 只会对 Active 的数据做压缩，
Blanking 的部分是保持不变的。Data_rate 的计算公式如下： 
DPHY Compression 
𝑏𝑙𝑎𝑛𝑘𝑖𝑛𝑔 𝑟𝑎𝑡𝑖𝑜 = (𝐻𝐹𝑃 + 𝐻𝐵𝑃 + 𝐻𝑆𝐴 + 𝐻𝑎𝑐𝑡) × (𝑉𝐹𝑃 + 𝑉𝐵𝑃 + 𝑉𝑆𝐴 + 𝑉𝑎𝑐𝑡)
𝐻𝑎𝑐𝑡 × 𝑉𝑎𝑐𝑡  
𝑑𝑎𝑡𝑎𝑟𝑎𝑡𝑒 = 𝐻𝑎𝑐𝑡 × 𝑉𝑎𝑐𝑡 × 𝑓𝑝𝑠 × 𝑐𝑜𝑚𝑝𝑟𝑒𝑠𝑠𝑖𝑜𝑛 𝑟𝑎𝑡𝑖𝑜 × 𝑏𝑝𝑝 + 𝐻𝑎𝑐𝑡 × 𝑉𝑎𝑐𝑡 × 𝑓𝑝𝑠 × (𝑏𝑙𝑎𝑛𝑘𝑖𝑛𝑔 𝑟𝑎𝑡𝑖𝑜 − 1) × 𝑏𝑝𝑝
𝑙𝑎𝑛𝑒_𝑛𝑢𝑚  
 
对于 Driver 中drm_display_mode 中 Clock 的设定则不需要乘以压缩比，设定跟没有开 DSC 的情况是一样的。 
MT8668 
DSI DSC 
Encoder 
 
 
 
 
MIPI Panel 
DSC 
Decoder 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 68

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 68 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
DSC 参数 描述 
enable DSC enable flag 
dual_dsc_enable Enable 2 DSC engine flag 
bdg_dsc_enable MT6382 DSC enable flag（无需配置） 
ver DSC version 
slice_mode 
Select slice division as 1-slice mode or 2-slice mode. 
0: 1-slice mode 
1: 2-slice mode 
rgb_swap 
Select 24-bit input pixel format as RGB or BGR type 
0: RGB type 
1: BGR type 
dsc_cfg 
Config flatness determination threshold 
2: 8bpc 
8: 10 bpc 
Config ICH enable; 0: ICH disable; 1: ICH enable 
rct_on 
Converts RGB to YcoCg 
0: YUV in 
1: RGB in 
bit_per_channel Bit per channel, unit is bit 
dsc_line_buf_depth Align setting with DDIC vendor 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 69

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 69 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
DSC 参数 描述 
bp_enable Block prediction enable flag 
bit_per_pixel Bit per pixel * 16, unit is bit 
pic_height Equal to frame_height 
pic_width Equal to frame_width 
slice_height Align setting with DDIC vendor; there are usually 8, 16, 32, 40, etc. 
slice_width Frame_width/silce_mode 
chunk_size Equal slice_width × bit_per_pixel/8 
rc_buf_thresh Parameters that must be filled 
dsc_rc_range_paramsters Parameters that must be filled 
 
10.3 DSC SW 介绍 
DSC 的 Source Code 仅需要关注 LK ddp_dsc.c 和 Kernel mtk_disp_dsc.c 两个文件，这两个文件也相对简单，仅
实现了如下几个函数： 
LK ddp_dsc.c 
 
 
Kernel mtk_disp_dsc.c 
 
 
在 Module init 后就会从 LCM Driver 中把 DSC 参数通过dsc_cofig 和mtk_dsc_config 接口写进对应的 DSC 寄存
器。如果 LCM Driver 中 DSC 参数错误就会导致 DSC Encoder 压缩与 DDIC DSC Decoder 不一致导致花屏问题，因此
LCM Driver 中 DSC 参数完整性和正确性就显得尤为重要。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 70

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 70 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
11 LCM 问题调试 
屏幕在点屏阶段和 DV 测试阶段的问题会有些差异。在点板点屏阶段，针对屏幕的问题，除了分析软件部分的设定
还需要考虑 HW 的设计是否正确和焊接是否可靠等问题。DV 测试阶段的黑花卡更侧重分析 SW Flow 的 Bug。下图
针对常见的问题做了一个简单的分析步骤，这样在针对复杂的屏幕的问题的时候，通过 DSI 的 Pattern 是否显示正
常作为一个切入点，能够快速切割定位问题，而不会觉得无从下手。另外需要提到的是黑屏的问题，首先需要确
认是的背光是否正常，再做后面的分析。 
 
 
11.1 DSI Pattern 
1. Userdebug 版本可以使用 GCE 的 CMD 来打 Pattern: 
DSI0 
adb shell "echo gce_wr:0x1401a178,0x61,0xffffffff > /sys/kernel/debug/mtkfb" 
 
 
 
 
 
 
 
DSI1 
adb shell "echo gce_wr:0x1401b178,0x61,0xffffffff > /sys/kernel/debug/mtkfb” 
 
可以通过gce_rd 确认是否有写成功： 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 71

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 71 
Confidential B 
MT8668 
DSI Bring Up SOP 
 adb shell "echo gce_rd: 0x1401a178 > /sys/kernel/debug/mtkfb; cat /sys/kernel/debug/mtkfb 
| grep gce_rd” 
 
2. User 版本 GCE CMD 不能使用，可以使用 Clock Debug 的 CMD，需要在 Kernel config 中先将 CONFIG 打开后才能
使用，Userdebug 版本也可以用 Clock Debug 的 CMD，同样需要打开 CONFIG。 
CONFIG_MTK_CLKMGR_DEBUG=y 
 
DSI0 
adb shell "echo reg_write 0x1401a178 0x61 > /proc/clkdbg ; cat /proc/clkdbg" 
 
DSI1 
adb shell "echo reg_write 0x1401b178 0x61 > /proc/clkdbg ; cat /proc/clkdbg" 
 
可以通过 reg_read 确认是否有写成功： 
adb shell "echo reg_read 0x1401a178 > /proc/clkdbg ; cat /proc/clkdbg" 
 
11.2 DSI Register 介绍 
DSI0 Base register 0x1401a000 DSI0 mip tx base 0x11e50000 
DSI1 Base register 0x1401b000 DSI1 mip tx base 0x11e10000 
 
DSI Register 都是 Base 地址加上一个 Offset，具体的 Offset 以及定义可以参考 Register Map。下表中介绍一下常用的
DSI 的 Register 的含义，方便 Debug 的时候使用。 
地址 名称 介绍 
000 DSI_START Bit0 为 1 表示 DSI 信号有输出 
004 DSI_INTSTA 
中断的状态, 例如 bit12 表示有 buffer underrun, 可以查看 DSI 信号的状
态 
038 DSI_SIZE_CON 
Panel active 的 size,  
Bit30 ~ Bit16: 高; Bit14 ~ Bit0: 宽 
010 DSI_COM_CON Bit0: DSI_RESET , software reset  
Bit2: DPHY_RESET , MIPI TX software reset 
014 DSI_MODE_CON Bit1~Bit0 Video mode  
018 DSI_TXRX_CON 
Bit16 为 0 代表 continue clock 
Bit5 ~ Bit2: Lane number 
01c DSI_PS_CON 
 
Bit19 ~ Bit16: Data format 
3: RGB888 
5: DSC 压缩数据 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 72

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 72 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
地址 名称 介绍 
020 DSI_VSA_NL = Panel VPW 
024 DSI_VBP_NL = Panel VBP 
028 DSI_VFP_NL = Panel VFP 
02c DSI_VACT_NL = Panel height 
050 DSI_HSA_WC = Panel HSA*3-10 
054 DSI_HBP_WC = Panel HBP*3-10 
058 DSI_HFP_WC 
Bit14 ~ Bit0 = Panel HFP*3-12 
Bit31 为 1 表示开启 active 的数据每个 frame 回 LP , HFP 一直 keep HS 
110 DSI_PHY_TIMCON0 
MIPI Data Lane Timing HQA Test 可能会调整 
Bit(s) Name Description 
31:24 DA_HS_TRAIL timing parameter: T_HS-Trail 
23:16 DA_HS_ZERO timing parameter: T_HS-Zero 
15:8 DA_HS_PREP timing parameter: T_HS-Prepare 
7:0 LPX timing parameter: T_LPX 
   
 
114 DSI_PHY_TIMCON1 MIPI Data Lane Timing HQA Test 可能会调整 
11e50008 MIPITX_CDPHY_VOLTAGE_SEL 
MIPI Swing 调整 
9:6 RG_DSI_HSTX_LDO_REF_SEL Selects 0.4V/0.5V ref voltage 
(20mV/step, covers 0.3 to 0.6V) 
  4'b0000: Min. voltage 
  4'b1000: Typical voltage 
  4'b0111: Max. voltage 
 
1401a178 DSI_SELF_PAT_CON0 DSI Pattern, 可以出纯色, 灰阶等 Pattern 
11e5002C MIPITX_PLL_CON0 MIPI Clock PCW, Clock 不同设定会有差异 
11e50030 MIPITX_PLL_CON1 MIPI Clock 开关和 Divide 
11e50034 MIPITX_PLL_CON2 
MIPI Clock 展频设定 
Bit1 为 1 表示开启展频 
11e50038 MIPITX_PLL_CON3 MIPI Clock 展频设定 
11e50004 MIPITX_CDPHY_LANE_CON 
Bit(s) Name Description 
9 RG_DSI_DEM_EN Enables DSI de-emphasis 
  1'b0: Off 
  1'b1: On 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 73

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 73 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
11.3 DSI Register Dump 介绍 
可以通过 CMD Dump 所有的 DSI Register： 
adb shell "echo diagnose>/proc/mtkfb && cat /proc/mtkfb" > d:\mtkfb.txt 
 
Dump 的结果如下图中所示 
 
 
 
 
 
通过reg_read_len CMD 读寄存器，使用前需要打开 config:  
CONFIG_MTK_CLKMGR_DEBUG=y 
 
adb shell "echo reg_read_len addr len> /proc/clkdbg ; cat /proc/clkdbg"   
 
其中 len 指的是偏移地址长度，会依次读出 addr+offset 的寄存器值。 
 
假设想要 Dump DSI0 0x00~0x100 的地址的值命令如下： 
adb shell "echo reg_read_len 0x1401a000 0x100> /proc/clkdbg ; cat /proc/clkdbg" 
 
当diagnose CMD 使用异常的时候，可以使用这个 CMD Dump 相关的寄存器。 
 
11.4 DSI 调试流程 
下图为简单的 DSI Debug 流程图，可以结合 SerDes 的状态一起来看，max96789 结合章节 8.3 同步分析。 
                                                                  DSI0 BASE 
offset Base+offset Base+offset+4 Base+offset+8
8 
Base+offset+C 
 
 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 74

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 74 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
11.5 帧率异常 
检查 Panel Driver 中 Pixel Clock 设定与 data_rate 设定是否正常。文档中搜索关键字，可以找到 Driver 中参数的介绍
位置确认。 
 
11.6 I2C 通信异常 
1. 确认加串器电源晶振是否正常，确认软件时序和 I2C 地址设定，测量 I2C 信号电压是否正常。 
2. 请参考章节 3.3.10 确认 DWS 设定是否正常。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 75

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 75 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3. 确认 I2C 上拉电阻和驱动电流设定是否正常。 
1). dts 中找到使用的 I2C 节点： 
&i2c4 { 
    pinctrl-names = “default”; 
    pinctrl-0 = <&i2c4_pins>; 
}; 
 
2). 在&pio 节点下添加如下内容： 
&pio { 
    i2c4_pins: i2c4-default { 
        pins-bus { 
            pinmux = <PINMUX_GPIO190__FUNC_SCL4>, 
 <PINMUX_GPIO191__FUNC_SDA4>; 
bias-pull-up = <MTK_PULL_SET_RSEL_111>; 
drive-strength = <MTK_DRIVE_2mA>;  
        }; 
    }; 
}; 
 
参数 定义 
PINMUX_GPIO190__FUNC_SCL4 
PINMUX_GPIO191__FUNC_SDA4 
include/dt-bting/pinctrl/mt6881-pinfunc 查找对应的 I2C 
pinmux 
bias-pull-up=<MTK_PULL_SET_RSEL_111> 
I2C 上拉电阻设定： 
000: PU75K, PD75K 
001: PU10K, PD5K 
010: PU5K, PD75K 
011: PU4K, PD5K 
100: PU3K, PD75K 
101: PU2K, PD5K 
110: PU1.5K, PD75K 
111: PU1K, PD5K 
建议使用 111, 1K 上拉电阻，不要超过 5K 
drive-strength = <MTK_DRIVE_2mA> include/dt-bting/pinctrl/mt65xx.h 查看驱动电流的范围 
关掉上拉 + //bias-pull-up = <MTK_PULL_SET_RSEL_111>; 
+ bias-disable; 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 76

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 76 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
12 DSI DPHY CTS 测试问题 
CTS 测试的主要目的是验证设备是否符合 MIPI DSI DPHY 规范。CTS 测试主要包含一下几个方面： 
1. 电气特性测试：电压，边沿等是否满足规格 
2. 协议一致性测试：MIPI Timing 是否满足规格 
3. 信号完整性测试：测试信号质量，眼图，Skew 是否满足规格 
 
12.1 测试仪器 
由于是高速信号，对信号的测试环境和仪器要求比较高。需要使用专用的带 DPHY 协议的测试仪器，并且使用专用
的探头，探尖，tip 来连接信号到仪器上，同时在使用前需要对仪器做校准。如果没有相关的测试仪器，需要找第
三方机构做测试。 
 
12.2 测试平台准备 
1. 测试需要焊接差分信号 clock_p, clock_n, data_p, data_n 的测试点。测试点建议选在靠近 Bridge 的输入端。同时
焊接的 GND 线尽量不要离的很远，线长尽量控制在 1~2cm。data_p 的接法示意图如下图所示，4 根信号共需
要接 4 个 Tip 到示波器上。 
2. 测试的平台需要接屏测试，并且屏幕可以显示正常。这样是为了 保证 Bridge 或者 RX 的设定都正常，并且负载
端是正常的。 
3. 测试的平台可以播放视频，视频的内容建议随机一些，越随机越好。或者放一张比较花的图片，避免大面积的
黑和白。测试平台接 adb，方便 Debug 使用。 
4. 测试前需要检查每个信号都是稳定正常的，确保焊接，Tip 和 Probe Head 都正常。 
5. DSI 输出设定要关闭展频，同时要记住 DSI Clock，或者测试前量测一下 Clock。 
 
 
 
 
 
 
 
 
MT8668 
DSI0 
Serializer 
MAX96789 
data_p 
GND 
Tip 
 Probe head 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 77

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 77 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
12.3 常见 Failed 项目分析 
Continue Clock HS 部分的测试项目如下，红色方框中的项目主要是电气特性相关，绿色方框的项目主要是 MIPI 
Timing 协议一致性相关，蓝色方框的项目主要是信号质量相关。 
 
 
12.3.1 1.3.4/1.4.4 VOD0/VOD1 Pulse & 1.3.7 VCMTX 
Clock 和 Data 默认设定都是 200MV，如果偏小，可以调整 HSTX 输出电压，增大驱动能力。 
 
 
 
参考 DSI 寄存器介绍中 MIPITX_CDPHY_VOLTAGE_SEL 寄存器 0x11e50008，20mV 一个 Step，可以通过adb 更改寄存
器逐渐调大满足 Spec。建议调大之后观察这几组值的变化看是否符合预期。 
 名称 默认值 建议调整范围 
D-PHY RG_DSI0_HSTX_LDO_REF_SEL 4’b100 
0110: 0.36V 
0111: 0.38V 
1000: 0.4V 
1001: 0.42V 
1010: 0.44V 
1011: 0.46V 
 
以寄存器 DSI0 为例，DSI1 的寄存器请看寄存器介绍的部分。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 78

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 78 
Confidential B 
MT8668 
DSI Bring Up SOP 
 adb shell "echo gce_rd:0x11e50008 > /sys/kernel/debug/mtkfb; cat /sys/kernel/debug/mtkfb | 
grep gce_rd" 
[   83.560777][mtkfb_dbg] gce_rd:0x11e50008 
[   83.560784]display_debug cmd gce_rd:0x11e50008 
[   83.561045][reg_dbg] gce_rd: addr(0x11e50008) = 0x44441200 
 
更改 Bit6 ~ Bit9 的值： 
电压值 Bit6 ~ Bit9 寄存器 
0.4V 1000 0x44441200 
0.42V 1001 0x44441240 
0.44V 1010 0x44441280 
0.46V 1011 0x444412C0 
0.48V 1100 0x44441300 
 
根据情况调整需要增加的电压值，例如调整到 0.42V。 
adb shell "echo gce_wr: 0x11e50008,0x44441240,0xffffffff > /sys/kernel/debug/mtkfb" 
 
12.3.1.1 SW 如何调整电压 
LK: 
--- a/platform/mediatek/mt8668/disp/ddp_dsi.c 
+++ b/platform/mediatek/mt8668/disp/ddp_dsi.c 
@@ -2293,6 +2293,8 @@ void DSI_DPHY_clk_setting(enum DISP_MODULE_ENUM module, void *cmdq, 
LCM_DSI_PARA 
 #endif 
         if (data_Rate < 2500) 
             MIPITX_OUTREGBIT(DSI_PHY_REG[i]+MIPITX_VOLTAGE_SEL, FLD_RG_DSI_PRD_REF_SEL, 
0x0); 
+ 
+               MIPITX_OUTREGBIT(DSI_PHY_REG[i]+MIPITX_VOLTAGE_SEL, 
FLD_RG_DSI_HSTX_LDO_REF_SEL, 0x9);//0.42V 
 #if 0 
         if (data_Rate > 2000) 
             MIPITX_OUTREGBIT(DSI_PHY_REG[i]+MIPITX_VOLTAGE_SEL, FLD_RG_DSI_V2I_REF_SEL, 
0x4); 
 
--- a/platform/mediatek/mt8668/disp/ddp_reg_mipi.h 
+++ b/platform/mediatek/mt8668/disp/ddp_reg_mipi.h 
@@ -13,6 +13,7 @@ 
 #define MIPITX_LANE_CON                    (0x0004UL) 
 #define MIPITX_VOLTAGE_SEL                (0x0008UL) 
 #define FLD_RG_DSI_PRD_REF_SEL              REG_FLD(6, 0) 
+#define FLD_RG_DSI_HSTX_LDO_REF_SEL         REG_FLD(4, 6) 
 #define FLD_RG_DSI_V2I_REF_SEL              REG_FLD(4, 10) 
 
Kernel: 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 79

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 79 
Confidential B 
MT8668 
DSI Bring Up SOP 
 --- a/drivers/gpu/drm/mediatek/mediatek_v2/mtk_mipi_tx.c 
+++ b/drivers/gpu/drm/mediatek/mediatek_v2/mtk_mipi_tx.c 
@@ -2308,6 +2308,9 @@ static int mtk_mipi_tx_pll_dphy_config_mt6991(struct mtk_mipi_tx 
*mipi_tx) 
                mtk_mipi_tx_update_bits(mipi_tx, MIPITX_VOLTAGE_SEL_MT6983, 
                        FLD_RG_DSI_PRD_REF_SEL, 0x4); 
+       mtk_mipi_tx_update_bits(mipi_tx, MIPITX_VOLTAGE_SEL_MT6983, 
+                       FLD_RG_DSI_HSTX_LDO_REF_SEL, 0x9 << 6); //0.42V 
 #ifdef IF_ZERO 
        /* No need keep as default */ 
        if (rate > 2000) 
 
12.3.2 1.3.8 Voltage Mismatch & 1.4.8 VCMTX Mismatch 
检查测试环境，探头是否有做校准，PCB Layout 是否等长。 
 
12.3.3 1.3.1~3 & 1.3.13~16 MIPI Timing 
MIPI Timing 如下图中所示可以通过寄存器调整，寄存器 DSI_PHY_TIMCON0 中有说明。 
 
上图中参数需要满足下图中 Spec 规范的范围，其中 UI = 1/datarate，SW 中设定最小单位是 8UI。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 80

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 80 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
12.3.3.1 SW 如何调整 Timing 
以下图中 1.3.15 TEOT Failed 为例，现在测试结果为 299.77ns，此值偏大，Pass Limit Max 值为 133.85ns。 
 
 
 
 
现在需要调整设定，使得 TEOT 小于 133.85ns Pass Spec: 
1. 从 9.3.3 MIPI Timing 图中，找到 TEOT 信号的位置和 Spec 的范围。 
2. 1.4.17 确认 UI=2.404ns。 
3. 根据 UI 计算 TEOT 阈值：TEOT=[~, 105ns+12*UI] = [~, 133.848ns]，也可以直接看提示的 Pass Limit 的值。 
4. 计算 SW 设定最小单位 = 8 * UI = 8*2.404 = 19.232ns，SW 设定寄存器值 < 133.848ns/19.232ns = 6.96。 
5. 根据 UI 计算 HS_TRAIL 阈值：THS_TRAIL> 60ns + 4UI=69.6ns，SW 设定寄存器值 > 69.6ns/19.232= 3.6。 
6. HS_TRAIL 属于 TEOT 一部分，降低 HS_TRAIL，既是减小 TEOT，同时要保证 THS_TRAIL 也要满足 Spec，SW 设定
值为整数，则可以取 4 ~ 6 中的一个值通过adb 设定进去，再测试看看。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 81

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 81 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
12.3.3.2 如何将调好的值写进 SW 
SerDes 的 Driver 可以将参数放到 dts 里面客制化，再给到如下的参数里面。 
LK Panel Driver 
lcm_get_params()里面添加 
 
 
Kernel Panel Driver 
ext_params 里面添加需要调整的参数 
 
 
12.3.3.3 THS_TRAIL Failed 
THS_TRAIL 比较常见的 Failed 情况是示波器没有抓到正确的 HS_TRAIL。这样调整寄存器也是没有用的，可以看到的
现象是测出来的 HS_TRAIL 值非常小，如下图中所示只有 4ns 左右。 
 
 
可以对比下图中正常的波形，正常的 HS TRAIL 是一段 HS 1 的数据，所以碰到这种情况请确认示波器是否有正确设
定，或者重新测试，或者可以手动测量确认。 
Failed 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 82

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 82 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
12.3.4 1.3.11~12 Tr/Tf & 1.5.4 Data to Clock Skew 
信号的质量对 Data 和 Clock 的 Tr/Tf 以及 Data to Clock Skew 的测试项目影响很大。而影响信号质量的根本原因就是
差分信号阻抗的控制，SoC 输出单端 50 欧姆，差分 100 欧姆。要求 PCB Layout 也遵循这个原则，并且要做阻抗控
制，这部分可以跟 HW 对齐，查看具体的 Layout 要求和 PCB 厂商要求阻抗控制。同样 RX 的部分也要按照同样的
阻抗设定，这样才能保证信号的完整性。 
 
12.3.4.1 SoC 的阻抗调整 
SoC 的 MIPI TX 有单端的阻抗调整寄存器，但是不建议调整。目前 SW 设定默认输出有做阻抗的 Calibration 保证
Performance，如果单独调整某根信号的阻抗，很难保证一致性。 
 
12.3.4.2 干扰导致 Skew Fail 
除了测试的信号接线稳定，还要确认平台和仪器的接地也要稳定，注意排查杂讯的干扰。下图中红色箭头不预期
的杂讯，会影响测试结果，需要确认测试环境。 
OK 
HS_TRAIL 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 83

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 83 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
12.3.4.3 阻抗不连续信号问题 
下图中左边 Failed 图片是没有带负载测试的异常波形，极端的阻抗不连续情况，可以看到信号失真很严重，上升
沿和下降沿的位置出现台阶状，右侧图片是带负载测试的正常波形，可以看出阻抗的连续对波形的影响。当信号
失真比较严重时，在排除了测试环境的问题后，就需要检查阻抗的部分。 包含 SoC 输出的阻抗，PCB Layout 阻抗，
RX 端的阻抗。 
  
 
OK 
Failed 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 84

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 84 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
12.3.5 什么情况开 DEM 
当 datarate > 2.5Gbps 时，可以开启 DEM (de-emphasis)。DEM 开启后信号的幅度会降低，同时需要调大信号的幅
度，确保可以满足 Spec。 
以寄存器 DSI0 为例，DSI1 的寄存器请看寄存器介绍的部分。 
adb shell "echo gce_rd:0x11e50004 > /sys/kernel/debug/mtkfb; cat /sys/kernel/debug/mtkfb | 
grep gce_rd" 
[  417.152740][mtkfb_dbg] gce_rd: 0x11e50004 
[  417.152746]display_debug cmd gce_rd: 0x11e50004 
[  417.153133][reg_dbg] gce_rd: addr(0x11e50004) = 0x80 
 
0x11e50004 bit9 为 DEM 开关的寄存器，默认为 off，设 1 为开启： 
adb shell "echo gce_wr:0x11e50004,0x280,0xffffffff > /sys/kernel/debug/mtkfb" 
 
12.3.6 1.5.5 & 1.5.6 HS Skew Calibration Burst 
当 datartate >1.5Gbps 时，Spec 规定 TX 需要向 RX 发送 Skew Pattern，RX 收到后，可以用来校正 PCB Layout 等导致
的 Data 和 Clock 的偏移，为高速信号接收提供保障。Skew Pattern 与 Normal 信号的差异如下图： 
 
Skew Pattern 有两种，Initial 的方式和 Periodic 的方式，Periodic 的方式在 Spec 中是可选的，SoC 不支持这种方式，
只支持 1.5.5 Initial 的方式。 
 
 
 
Support 
Not Support 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 85

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 85 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
12.3.6.1 1.5.5 Initial HS Skew 测试 
Initial 的方式是指在 DSI Normal 的信号之前发送 Skew Pattern，只会发送一次，不会周期重复。如果要测试这个信
号，需要在亮屏之前正确的抓住 Timing。当屏幕亮的时候信号已经发送完毕，是测不到的。 这对信号的测试有难
度，不建议测试。 
 
12.3.6.2 SW Deskew Enable 
Code Flow 中默认大于 1.5G datarate 会开启，需要加串器也要打开 Deskew 的功能，才能实现此功能，完成信号的
校准。加串器设定好后，收到 Pattern，并做完校准，会返回 IRQ，可以通过 IRQ 的状态确认。 
 
//DSI deskew pattern enable 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 86

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 86 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
13 LCM Timing 介绍 
LCM Timing 包括 Power On/Off Sequence、Interface Timing 和 Display Timing 三部分，这是 LCM 能否正常工作的灵魂
三部曲，缺一不可，所以这部分都会明确的写在 LCM 规格中。当我们要 Bringup 的时候首先就是要明确这三部
分，碰到问题时也是从这三方面着手分析。另外车机的屏幕显示中还要包含 SerDes 的部分，加串器将 SoC 的
Interface 的显示数据转为串行的数据传输，解串器再将串行数据转为屏幕的 Interface 的数据，再送给屏幕 T-con 显
示。车机的屏幕模组都将解串器包含进来，这样屏幕的显示系统相对于手机会更复杂。  
 
13.1 Power On/Off Sequence 
上下电时序->Power 和 Reset 部分的控制，Driver 中 Power On/Off 的控制要遵循 Spec 中的时序来设定。这部分与
HW 的设计强相关，需要结合原理图来实现。同样 SerDes 的 Power 和初始化的顺序，也会影响屏幕的显示，这个
是车机也需要考虑的部分。 
 
13.2 Interface Timing 
LCM 的 Interface 有很多种 DSI, LVDS, eDP 等，每种 Interface 都有规格。车机中常用的有 LVDS 和 eDP，其中分辨率
比较大的，例如 2.5K 屏幕或者以上基本都是采用 eDP 的 Interface。 
 
13.3 Display Timing 
虽然 Interface 有很多种，但是传输的 Display 信号都是基本都是包括 Active 和 Blanking 两部分。Active 信号是可视
区，包括 Hactive 和 Vactive，Blanking 信号是非可视区，包括 H blanking 和 V blanking，Blanking 部分又分 sync，
Front Porch 和 Back Porch。这部分在 LCM Spec 中也有明确的说明，我们需要按照 Spec 的设定给 LCM 的 T-CON 输出
正确的 Timing，LCM 才会显示正常。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 87

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 87 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
下图中是 Dual LVDS 1920x1080@60 的屏幕的 Timing Spec，Dual LVDS 的屏幕 Spec 中水平方向要 x2，这部分 Timing
对应的就是 panel-mode-setting 里面的设定。请与屏厂确认保证这部分参数的正确。 
 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 88

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 88 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
14 DSI Interface 介绍 
DSI (Display Serial Interface) 是 MIPI 联盟定制的显示接口规范。协议包含应用层，协议层，链路层和物理层。传输
模式分为 HS->High Speed 和 LP->Low Power。 
 
14.1 HS 
D-PHY HS Swing 200mV, Video 的数据都是通过 HS 传输, 最大传输速度与 D-PHY 版本有关。 
 
14.2 LP 
信号幅度为 1.2V，最大传输速度 80M，一般用于发送 Command 和状态切换。 
 
14.3 HS & LP 状态切换图 
DSI TX 和 RX 都是从 LP11 开始，然后通过 LP01，LP00 SOT 进入 HS 传输状态。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 89

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 89 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
14.4 DSI MIPI D-PHY Timing Spec  
MIPI 的 TX 和 RX 是没有握手协议的，而是要求 TX 和 RX 严格按照 Spec 的 Timing 来发送数据和接受数据。Spec 规
定了从 LP ->HS 和 HS->LP 具体 Timing，TX 和 RX 的 Timing 满足 Spec 由为重要，两边如果不匹配，就会导致数据异
常。 
 
14.4.1 Data Lane Spec 
HS-PREPARE 和 HS-TRAIL 等参数是经常需要调整的参数，需要明白下图中各参数的含义。 Spec 中有规定每个参数的
含义和时间要求。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 90

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 90 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
UI Unit Interval, equal to the duration of any HS state on the Clock Lane （UI 即 MIPI 的 CLK lane 的高速时钟 High-Speed 
clock cycles 周期的一半，这是因为 MIPI 采用 DDR 时钟传输方式） 
 
14.4.2 Clock Lane Spec 
MIPI 协议中有规定 Clock Lane 可以不需要回到 LP，TX 可以直接设定为 Continue Mode，那么下图中 Clock 的 Timing
不是必须的。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 91

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 91 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
14.5 Video Mode 介绍 
Video Mode 分为 Sync Plus，Sync-event，Burst 三种 Mode，对于 MT8668，三种 Mode 都可以支持，对于 RX 端
MIPI 规定支持一种 Mode 就可以。目前最常使用的是 Sync Plus Mode。 
 
14.5.1 HFP Keep HS 
Sync Plus Mode 从 DPI 信号而来，有完整的 H 和 V 同步信号，数据包摆放如下图所示。绿色为 LP 的部分，红色为
HS 的部分。MT8668 可以支持 Active 数据每个 Frame 回 LP，HFP 的时候 keep HS; HFP Keep HS mode 可以让输出的
HFP 更准确，如果 Panel 或者 Bridge 要精确的 HFP，就建议使用这个 Mode。否则当 HFP HS EN = 0 时，HFP 会多出
来回 LP 的 Data Cycle，实际输出的 HFP 会偏大，同时 HFP 会有最小值的要求。两个 Mode 对比，如下图所示。
Driver 中对应的参数为 vdo_per_frame_lp_enable，设为 1 为 HFP_HS_EN=1。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 92

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 92 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
 
14.5.2 DSI_Frame_Rate_Cal_for_Customer 介绍 
这个 excel 表格可以计算出比较精确 FPS 所对应的 DSI datarate，同时也可以确认 Panel Timing 是否可以满足要求。 
 
HS 
LP 
HFP HS EN =1 
HFP HS EN =0 
 4 
 4 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 93

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 93 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
步骤： 
1. 填入屏的 H Timing & V Timing，Video Mode，Lane Num 等参数。 
2. 根据所需要帧率计算 Ideal Bit_Freq，这个参数对于 D-PHY 就是 datarate。 
3. 微调 datarate 得到想要的帧率，datarate 可以精确到 kHz，Driver 中需要填写 data_rate_khz 参数才会生效。 
4. 如果要 timing 比较精准建议打开 Video Mode keep HS MODE, Htotal 要可以被 2 * lane_number 整除。 
 
在做完第 3 步调整 Ideal Bit_Freq 后得到准确的帧率，需要满足 4  的要求，如果只有 Htotal 不满足，建议 HFP 参数
设定微调以满足（屏幕一般都是 DE Mode，一般可以水平方向微调，同时新设定的 HFP 参数，建议知会屏厂
double confirm）。 
另外第 4 步中提到的 Video Mode Keep HS MODE 就是指 vdo_per_frame_lp_enable，可以参考章节 14.5.1。 
Htotal 不满足的时候可以看到实际输出的 HFP 会有小数的情况，这样可能会导致屏幕闪烁或者锯齿。  
 3 
 3 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 94

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 94 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
15 DSI 波形量测 
波形的量测是常用的 Debug 手段。 
 
15.1 如何测量帧率 
图 1 中是一个每 Line 都回 LP 的 Data 的波形，需要将时间轴拉大一些找到 V Blanking 区域，按照下图测量 1 Frame
的时间，60fps 1 Frame 的时间大概为 16.6ms。图 2 中是将 V Blanking 区域放大的波形，可以放大确认抓的信号是
否正确。 
 
 
 
1 frame 
V Blanking 
 V Blanking 
1 
2 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 95

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 95 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
图 3 是开启 Video 每个 frame 回一次 LP，可以看到只有在 Blanking 区域有 LP 波形，其它的时间都是 Keep HS。按
照下图测量 1 frame 的时间，60fps 1 frame 的时间大概为 16.6ms。图 4 是 V blanking 展开的图形，供参考。 
 
 
 
15.2 如何测量信号 
下图是 1 Line 的 Data & clock 的波形，DP & DN 可以看到 LP 和 HS 部分的波形。其中 Data 上 LP 为 1.2V，HS 为
200mV，Clock P 的幅度为 200mV。可以确认信号的电压等是否有异常。 
3 
1 frame 
V Blanking 
V Blanking 
4 
V Blanking 区域 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 96

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 96 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
 
LP 部分放大，可以看到 LP 进入 HS 的时序，再放大可以测量 HS prepare 等参数。 
 
LP11->LP01->LP00->HS
LP 
HS 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 97

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 97 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
16 DSI 屏幕评估 
在未知屏幕的具体 Timing，只知道 resolution 的情况下，如何粗估屏幕带宽？可以按照如下公式计算 datarate 看是
否满足 Spec： 
 
1. DPHY Un-compression 
𝑑𝑎𝑡𝑎𝑟𝑎𝑡𝑒 = 𝐻𝑎𝑐𝑡 × 𝑉𝑎𝑐𝑡 × 𝑓𝑝𝑠 × 𝑏𝑙𝑎𝑛𝑘𝑖𝑛𝑔 𝑟𝑎𝑡𝑖𝑜 × 𝑏𝑝𝑝
𝑙𝑎𝑛𝑒_𝑛𝑢𝑚  
 
2. DPHY Compression 
𝑑𝑎𝑡𝑎𝑟𝑎𝑡𝑒 = 𝐻𝑎𝑐𝑡 × 𝑉𝑎𝑐𝑡 × 𝑓𝑝𝑠 × 𝑐𝑜𝑚𝑝𝑟𝑒𝑠𝑠𝑖𝑜𝑛 𝑟𝑎𝑡𝑖𝑜 × 𝑏𝑝𝑝 + 𝐻𝑎𝑐𝑡 × 𝑉𝑎𝑐𝑡 × 𝑓𝑝𝑠 × (𝑏𝑙𝑎𝑛𝑘𝑖𝑛𝑔 𝑟𝑎𝑡𝑖𝑜 − 1) × 𝑏𝑝𝑝
𝑙𝑎𝑛𝑒_𝑛𝑢𝑚  
 
3. CPHY Un-compression 
𝑑𝑎𝑡𝑎𝑟𝑎𝑡𝑒 =
𝐻𝑎𝑐𝑡 × 𝑉𝑎𝑐𝑡 × 𝑓𝑝𝑠 × 𝑏𝑙𝑎𝑛𝑘𝑖𝑛𝑔 𝑟𝑎𝑡𝑖𝑜 × 𝑏𝑝𝑝 × 7
16
𝑡𝑟𝑖𝑜𝑛𝑢𝑚
 
 
4. CPHY Compression 
𝑑𝑎𝑡𝑎𝑟𝑎𝑡𝑒 = 𝐻𝑎𝑐𝑡 × 𝑉𝑎𝑐𝑡 × 𝑓𝑝𝑠 × 𝑐𝑜𝑚𝑝𝑟𝑒𝑠𝑠𝑖𝑜𝑛 𝑟𝑎𝑡𝑖𝑜 × 𝑏𝑝𝑝 × 7/16 + 𝐻𝑎𝑐𝑡 × 𝑉𝑎𝑐𝑡 × 𝑓𝑝𝑠 × (𝑏𝑙𝑎𝑛𝑘𝑖𝑛𝑔 𝑟𝑎𝑡𝑖𝑜 − 1) × 𝑏𝑝𝑝 × 7/16
𝑡𝑟𝑖𝑜_𝑛𝑢𝑚  
 
𝑏𝑙𝑎𝑛𝑘𝑖𝑛𝑔 𝑟𝑎𝑡𝑖𝑜=1.25， 
RGB888: 
DSC 𝑐𝑜𝑚𝑝𝑟𝑒𝑠𝑠𝑖𝑜𝑛 𝑟𝑎𝑡𝑖𝑜 = 1/3; 
RGB101010: 
DSC 𝑐𝑜𝑚𝑝𝑟𝑒𝑠𝑠𝑖𝑜𝑛 𝑟𝑎𝑡𝑖𝑜 = 1/3.75; 
 
如果计算出的结果比较接近 Spec，建议拿具体的 Panel Timing 来评估。 
粗估带宽满足后，在拿到 Panel 的 Timing 后还需要确认 V Blanking 是否满足，具体参考章节 14.5.2。 
在带宽和 V Blanking 满足后，最后需要给 Display 做 Display Path 等评估，才算完整的评估。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 98

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 98 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0097 MT8668_GNSS_Specification_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_GNSS_Specification_V1.0.pdf

SHA-256：63729693d95a1e713a15ae15da64c5067671f96a94aa360dd1503b57698476d1

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0097.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2026-01-28
MT8668 GNSS Sepcification 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
MT8668 GNSS 
Specification 
Confidential B 
2 
Version History 
Version Date Description 
1.0 2026-01-28 Official release 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
MT8668 GNSS 
Specification 
Confidential B 
3 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Tables ······································································································································································ 4 
1 Introduction······························································································································································· 5 
 Purpose ···································································································································································· 5 
 Scope ········································································································································································ 5 
2 Abbreviations ···························································································································································· 6 
3 Function ···································································································································································· 7 
 RF Chip ····································································································································································· 7 
 Positioning Method ·················································································································································· 7 
 Constellation ···························································································································································· 7 
 Satellite Signal ·························································································································································· 7 
 Satellite-Based Augmentation System (SBAS) ·········································································································· 8 
 One Pulse-Per-Second (1PPS) ··································································································································· 8 
 Active Interference Cancellation (AIC) ····················································································································· 8 
 Coordinate System ··················································································································································· 8 
 Anti-jamming ···························································································································································· 8 
 A-GNSS ····································································································································································· 8 
 eCall 9 
 Oscillator ·································································································································································· 9 
4 Performance ···························································································································································· 10 
 Noise Figure ··························································································································································· 10 
 Max Tracking Channel ············································································································································ 10 
 Time To First Fix (TTFF) ··········································································································································· 10 
 1PPS Accuracy ························································································································································ 10 
 Positioning Accuracy ·············································································································································· 11 
 Velocity Accuracy ··················································································································································· 11 
 Sensitivity ······························································································································································· 12 
 Temperature ··························································································································································· 12 
 Operation Limits ····················································································································································· 12 
 UTC Format ···························································································································································· 12 
 Update Rate ··························································································································································· 12 
 NMEA GGA Sentence Latency ································································································································ 13 
 ADR EDT ································································································································································· 13 
5 Message Output ······················································································································································ 14 
 Message Output ····················································································································································· 14 
6 Contact ···································································································································································· 15 
Exhibit 1 Terms and Conditions ········································································································································ 16 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 4 
MT8668  GNSS 
Specification 
Confidential B 
List of Tables 
Table 2-1. Abbreviations ····························································································································································· 6 
Table 3-1. Supported positioning method·································································································································· 7 
Table 3-2. Supported configured GNSS constellation ················································································································· 7 
Table 3-3. Supported satellite signal baseband frequency ········································································································· 7 
Table 3-4. Supported SBAS ························································································································································· 8 
Table 3-5. Supported A-GNSS functions ····································································································································· 8 
Table 4-1. TTFF specification ···················································································································································· 10 
Table 4-2. Positioning accuracy ················································································································································ 11 
Table 4-3. Velocity accuracy ····················································································································································· 11 
Table 4-4. Sensitivity ································································································································································ 12 
Table 4-5. Temperature ···························································································································································· 12 
Table 4-6. Operation limits ······················································································································································· 12 
Table 4-7. Update rate ······························································································································································ 12 
Table 5-1. Message output ······················································································································································· 14 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 5 
MT8668  GNSS 
Specification 
Confidential B 
1 Introduction 
 Purpose 
The specifications of MediaTek automotive GNSS module, MT8668, are provided in this document. 
 
 Scope 
The supported functions, performance, and message output of MediaTek automotive GNSS module, MT8668, are detailed 
in this document. 
 
Chapter 1 Presents the purpose and scope of the document. 
Chapter 2 Lists the abbreviations. 
Chapter 3 Introduces the supported functions. 
Chapter 4 Introduces the performance. 
Chapter 5 Introduces the message output. 
Chapter 6 Lists the related documents. 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 6 
MT8668  GNSS 
Specification 
Confidential B 
2 Abbreviations 
Table 2-1. Abbreviations 
Abbreviation Explanation 
ADR Automotive Dead Reckoning 
A-GNSS Assisted Global Navigation Satellite System 
AIC Active Interference Cancellation 
CATARC China Automotive Technology and Research Center 
C/N0 Carrier-to-Noise Density Ratio 
EDT Error of Distance Travelled 
EGNOS  European Geostationary Navigation Overlay Service 
EPO Extended Prediction Orbit 
GAGAN  GPS Aided GEO Augmented Navigation 
MSAS  Multi-functional Satellite Augmentation System 
NLP Network Location Provider 
NTP Network Time Protocol 
PPS Pulse-Per-Second 
RTK Real-time Kinematic Positioning 
SDCM  System for Differential Corrections and Monitoring 
SPP Single Point Positioning 
SUPL Secure User Plane Location 
Ta Ambient Temperature 
TCXO Temperature Compensated Crystal Oscillator 
TTFF Time To First Fix 
UTC Coordinated Universal Time 
WAAS  Wide Area Augmentation System 
WGS84 World Geodetic System 1984 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 7 
MT8668  GNSS 
Specification 
Confidential B 
3 Function 
 RF Chip 
MT8668 supports with the RF chip of MT6637. 
 
 Positioning Method 
Table 3-1. Supported positioning method 
Function Positioning Method 
Supported positioning method SPP (Single Point Positioning) 
ADR (Automotive Dead Reckoning) (1) 
(1) Depends on software version. 
 
 Constellation 
Table 3-2. Supported configured GNSS constellation 
Function GNSS Constellation 
Supported configured GNSS constellations BeiDou-Only (1) 
GPS + GLONASS + Galileo + BeiDou + NavIC 
(1) Conforms to latest CATARC specifications and test scenarios. 
 
 Satellite Signal 
Table 3-3. Supported satellite signal baseband frequency 
Signal Baseband Frequency 
GPS L1C/A 1575.420 MHz 
L5 1176.450 MHz 
Galileo E1 1575.420 MHz 
E5a 1176.450 MHz 
GLONASS L1OF 1598.0625 to 1609.3125 MHz 
BeiDou B1I 1561.098 MHz 
B2a 1176.450 MHz 
QZSS 
L1C/A 1575.420 MHz 
L1S 1575.420 MHz 
L5 1176.450 MHz 
NavIC/IRNSS L5 1176.450 MHz 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 8 
MT8668  GNSS 
Specification 
Confidential B 
 Satellite-Based Augmentation System (SBAS) 
Table 3-4. Supported SBAS 
Function SBAS 
Supported SBAS 
WAAS (USA) 
SDCM (Russia) 
EGNOS (Europe) 
MSAS (Japan) 
GAGAN (India) 
 
 One Pulse-Per-Second (1PPS) 
MT8668 supports the function of one pulse-per-second (1PPS) output rate. 
 
 Active Interference Cancellation (AIC) 
MT8668 supports the function of AIC. 
 
 Coordinate System 
MT8668 supports the coordinate system of WGS84. 
 
 Anti-jamming 
MT8668 supports the function of jamming detection and filtering. 
 
Note: 
• Only supports CW tone detection and filtering. 
 
 A-GNSS 
Table 3-5. Supported A-GNSS functions 
Function A-GNSS Function 
Supported A-GNSS functions 
A-GNSS (GPS, BDS, GLO, GAL) (1) 
EPO 
E911 
SUPL 2.0 
(1) Supported constellations depend on service provider . 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 9 
MT8668  GNSS 
Specification 
Confidential B 
 eCall 
MT8668 supports EU eCall GNSS part and ERA-GLONASS(GOST) GNSS part. 
 
 Oscillator 
MT8668 supports with the oscillator of TCXO. 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 10 
MT8668  GNSS 
Specification 
Confidential B 
4 Performance 
 Noise Figure 
MT8668 supports performance in this datasheet with noise figure ≤ 2.5 dB. 
 
 Max Tracking Channel 
MT8668 supports concurrent maximum tracking channel of L1/L5: 90/60. 
 
 Time To First Fix (TTFF) 
Table 4-1. TTFF specification 
GNSS Constellation Start Type (1) TTFF 
GPS + GLONASS + Galileo + BeiDou + NavIC 
Cold start Mean < 26 s 
Max < 40 s 
Warm start Mean < 26 s 
Max < 38 s 
Hot start Mean < 1 s 
Max < 3 s 
Aided with EPO (2) Cold start Mean < 15 s 
Warm start Mean < 5 s 
Aided with A-GNSS (3) 
Cold start Mean < 5 s 
Warm start Mean < 3 s 
Hot start Mean < 1 s 
BeiDou-Only(4) 
Cold start Mean < 30 s 
Max < 40 s 
Warm start Mean < 26 s 
Max < 38 s 
Hot start Mean < 1 s 
Max < 3 s 
(1) Satellite signals at -130dBm, HDOP ≤ 1.5, PDOP ≤ 2.5, tested at 25°C. 
(2) With correct system time or NTP. 
(3) Supported constellations depend on service provider . 
(4) BDS B1I, B1C, B2a ≥ 6SVs. 
 
 1PPS Accuracy 
MT8668 supports 1PPS with accuracy < 80 ns (95% at 25°C) or < 250ns (95% at -40°C ~ 85°C). 
 
Note: 
• Tested with PPS calibration and full set of DCB calibration 
• Satellite signals ≥ -140dBm.  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 11 
MT8668  GNSS 
Specification 
Confidential B 
 Positioning Accuracy 
Table 4-2. Positioning accuracy 
GNSS Constellation Positioning Accuracy (1) 
GPS + GLONASS + Galileo + BeiDou + NavIC(2) SPP Horizontal < 2 m (CEP95) 
Vertical < 4 m (CEP95) 
BeiDou-Only(3) SPP Horizontal < 2 m (CEP95) 
Vertical < 4 m (CEP95) 
(1) Static test scenario with GNSS simulator: Static test for 1 hour under opensky environment (no obstruction above 5° elevation 
angle), with HDOP ≤ 1.5, PDOP ≤ 2.5, and all satellite signals at -130dBm.  
(2) Constellations with at least GPS L1C/A, BDS B1I, B2a, GAL E1, and GLO L1OF. Number of visible satellites with at least 6SV for each 
constellation. 
(3) BDS B1I, B2a ≥ 6SVs. 
 Velocity Accuracy 
Table 4-3. Velocity accuracy 
GNSS Constellation Velocity Accuracy 
GPS + GLONASS + Galileo + BeiDou + NavIC(3) SPP (1) < 0.5 m/s (CEP95) 
SPP under constant speed (2) < 0.27 m/s (CEP95) 
BeiDou-Only(4) SPP (1) < 0.5 m/s (CEP95) 
SPP under constant speed (2) < 0.27 m/s (CEP95) 
(1) Dynamic test scenario with GNSS simulator: 
Dynamic test for 1 hour under opensky environment, with HDOP ≤ 1.5, PDOP ≤ 2.5, and all satellite signals at -130dBm.  
Trajectory settings as follows: 
1. Start moving north at 30 km/h; 
2. Accelerate from 30 km/h to 150 km/h within 85 meters; 
3. Maintain 150 km/h for 730 meters, then decelerate to 30 km/h within 85 meters; 
4. Make a 90-degree clockwise turn with a 20-meter radius at 30 km/h; 
5. Accelerate to 150 km/h within 85 meters; 
6. Maintain 150 km/h for 1230 meters, then decelerate to 30 km/h within 85 meters; 
7. Make another 90-degree clockwise turn with a 20-meter radius at 30 km/h; 
Repeat steps 2 to 7 to complete a rectangular (rounded corners) path and continue the same trajectory until the end of the 
scenario. 
(2) Constant speed test scenario with GNSS simulator: 
Under opensky environment (no obstruction above 5° elevation angle), with HDOP < 1.2, and all satellite signals at -130dBm.  
Vehicle speed configuration: 
1. 0 ~ 1st minute: Speed = 0 km/h. 
2. 1st ~ 3rd minute: Accelerates from 0 km/h to 40 km/h, 80 km/h, and 120 km/h respectively with fixed acceleration. 
3. 3rd ~ 60th minute: Maintain horizontal speed at 40 km/h, 80 km/h and 120 km/h respectively. 
The statistical result is calculated after the receiver speed reaches 40km/h, 80km/h, 120km/h with at least 10 minutes of constant 
speed data. 
(3) Constellations with at least GPS L1C/A, BDS B1I, B1C, B2a, GAL E1, and GLO L1OF. Number of visible satellites with at least 6SV for 
each constellation. 
(4) BDS B1I, B2a ≥ 6SVs. 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 12 
MT8668  GNSS 
Specification 
Confidential B 
 Sensitivity 
Table 4-4. Sensitivity 
GNSS Constellation Sensitivity 
GPS + GLONASS + Galileo + BeiDou  + NavIC Acquisition 
Cold start -148 dBm 
Warm start -151 dBm 
Hot start -163 dBm 
Tracking -165 dBm 
BeiDou-Only Acquisition 
Cold start -142dBm 
Warm start -146dBm 
Hot start -161dBm 
Tracking -161dBm 
 
 Temperature 
Table 4-5. Temperature 
Status Temperature 
Working temperature -40°C to 85°C (Ta) 
 
 Operation Limits 
Table 4-6. Operation limits 
Parameter Operation Limit 
Dynamic < 4 g 
Altitude < 18270 m 
Velocity < 515 m/s 
 
 UTC Format 
MT8668 supports UTC format as hhmmss.mmm. 
 
 Update Rate 
Table 4-7. Update rate 
GNSS Constellation Update Rate 
GPS + GLONASS + Galileo + BeiDou + NavIC 
PVT 1/2/5/10 Hz 
RAW 1/2/5/10 Hz 
ADR (1)  1/2/5/10 Hz 
(1) The update rate of ADR must be equal to the update rate of PVT. 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 13 
MT8668  GNSS 
Specification 
Confidential B 
 NMEA GGA Sentence Latency 
MT8668 supports NMEA GGA sentence latency of 95% < 80 ms. 
 
Note: 
• This feature supports GNSS only (without ADR). 
 
 ADR EDT 
MT8668 supports ADR v4.1 with EDT < 1%. 
 
Note: 
• CEP68 with 1000 to 3000 meters of distance travelled. 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 14 
MT8668  GNSS 
Specification 
Confidential B 
5 Message Output 
 Message Output 
Table 5-1. Message output 
Category Message 
NMEA 0183(1) 
GGA 
GSA 
GSV 
RMC 
VTG 
RTCM v3.2(2) 
Raw measurement data (3) 
Pseudorange 
Carrier (4) 
C/N0 
Doppler (5) 
Ephemeris Ephemeris 
Leap second (By request) 
(1) MT8668 support NMEA 0183 v4.10. 
(2) Partial support, please refer to the RTMC document[2] for details. 
(3) Android raw measurement format. 
(4) Unit: meter. 
(5) Unit: m/s. 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 15 
MT8668  GNSS 
Specification 
Confidential B 
6 Contact 
MediaTek Inc. (Headquarters) 
No.1, Dusing 1st Rd., 
Hsinchu Science Park, 
Hsinchu City 300,  
Taiwan 
Tel: +886-3-567-0766 
https://www.mediatek.tw/ 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.   
 16 
MT8678  GNSS 
Specification 
Confidential B 
Exhibit 1 Terms and Conditions 
Your access to and use of this document and the information contained herein (collectively this “Document”) is subject to your (including the corporation 
or other legal entity you represent, collectively “You”) acceptance of the terms and conditions set forth below (“T&C”).  By using, accessing or 
downloading this Document, You are accepting the T&C and agree to be bound by the T&C.  If You don’t agree to the T&C, You may not use this 
Document and shall immediately destroy any copy thereof. 
 
This Document contains information that is confidential and proprietary to MediaTek Inc. and/or its affiliates (collectively “MediaTek”) or its licensors 
and is provided solely for Your internal use with MediaTek’s chipset(s) described in this Document and shall not be used for any other purposes (including 
but not limited to identifying or providing evidence to support any potential patent infringement claim against MediaTek or any of MediaTek’s suppliers 
and/or direct or indirect customers).  Unauthorized use or disclosure of the information contained herein is prohibited.  You agree to indemnify 
MediaTek for any loss or damages suffered by MediaTek for Your unauthorized use or disclosure of this Document, in whole or in part. 
 
MediaTek and its licensors retain titles and all ownership rights in and to this Document and no license (express or implied, by estoppels or otherwise) to 
any intellectual propriety rights is granted hereunder.  This Document is subject to change without further notification.  MediaTek does not assume any 
responsibility arising out of or in connection with any use of, or reliance on, this Document, and specifically disclaims any and all liability, including, 
without limitation, consequential or incidental damages. 
 
THIS DOCUMENT AND ANY OTHER MATERIALS OR TECHNICAL SUPPORT PROVIDED BY MEDIATEK IN CONNECTION WITH THIS DOCUMENT, IF ANY, ARE 
PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.  MEDIATEK SPECIFICALLY DISCLAIMS 
ALL WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, FITNESS FOR A PARTICULAR PURPOSE, COMPLETENESS OR ACCURACY AND ALL 
WARRANTIES ARISING OUT OF TRADE USAGE OR OUT OF A COURSE OF DEALING OR COURSE OF PERFORMANCE.  MEDIATEK SHALL NOT BE RESPONSIBLE 
FOR ANY MEDIATEK DELIVERABLES MADE TO MEET YOUR SPECIFICATIONS OR TO CONFORM TO A PARTICULAR STANDARD OR OPEN FORUM. 
 
Without limiting the generality of the foregoing, MediaTek makes no warranty, representation or guarantee regarding the suitability of its products for 
any particular purpose, nor does MediaTek assume any liability arising out of the application or use of any product, circuit or software.  You agree that 
You are solely responsible for the designing, validating and testing Your product incorporating MediaTek’s product and ensure such product meets 
applicable standards and any safety, security or other requirements. 
 
The above T&C and all acts in connection with the T&C or this Document shall be governed, construed and interpreted in accordance with the laws of 
Taiwan, without giving effect to the principles of conflicts of law. 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0098 MT8668_Hypervisor_AI_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_AI_User_Manual_CN_V1.0.pdf

SHA-256：e673c34c0d4c3d1ce61e0257104750baeac28715d0a60d7be466bcca4e5c993e

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0098.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Hypervisor AI  
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 HypervisorAI 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 曾俊仙 正式版 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 HypervisorAI 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 AI ··············································································································································································· 4 
 概述·········································································································································································· 4 
 名词解释 ······················································································································································ 4 
 架构/流程概览 ························································································································································ 4 
 AI 架构 ·························································································································································· 4 
 NeuroPilot 开发指南 ···································································································································· 5 
 配置/客制化指南 ···················································································································································· 6 
 NeuroPilot Debug 命令说明 ························································································································· 6 
 NPU Trace 工具抓取 Trace ··························································································································· 7 
 特定 MediaTek 平台 NPU 支持的算子信息 ··········································································································· 9 
附件一 附加条款 ····························································································································································· 10 
 
 
图片目录 
图 1-1. AI 架构 ··········································································································································································· 5 
图 1-2. NeuroPilot 在线文档 ····················································································································································· 6 
图 1-3. NPU trace ······································································································································································· 8 
图 1-4. NPU 硬件状态 ······························································································································································· 8 
图 1-5. 支持的算子的集合关系 ················································································································································ 9 
 
表格目录 
表 1-1. 名词解释········································································································································································ 4 
 
 
  
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 HypervisorAI 
User Manual 
Confidential B 
1 AI 
 概述 
本章节介绍 MT8668 AI 相关功能。 
 
 名词解释 
表 1-1. 名词解释 
缩略词 名称及释义 
AI Artificial Intelligence 人工智能 
NeuroPilot MediaTek’s Ecosystem for AI Development 联发科人工智能生态系统 
MDLA MediaTek Deep Learning Accelerator 联发科深度学习加速器 
 
 架构/流程概览 
 AI 架构 
NeuroPilot 是一套由 MediaTek 开发的用于构建高效人工智能应用程序的软件工具和 API 套件；也是 MediaTek 人工
智能生态系统的核心。NeuroPilot 支持“Edge AI”，即把 AI 放在本地设备上执行，而不是在服务器上远程执行。这可
以使得 AI 任务的执行速度更快，同时也可以保护数据和隐私。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 HypervisorAI 
User Manual 
Confidential B 
 
图 1-1. AI 架构 
 
目前 MT8668 软件栈如图 1-1 所示，主要包括如下层： 
 
• CV/NN 应用层：这一层包含用户编写的用于运行 AI 应用的代码。该层还包括 MediaTek 解释器，它是一个经过 
MediaTek-NPU 优化的 Android TensorFlow Lite 解释器；以及 TFLite Shim API，这是一个基于 MediaTek 解释器之
上的包装层，旨在简化 API 调用。 
• NN runtime 层：这一层包含提供神经网络加速的运行时库，包括 NNAPI 和 MediaTek neuron runtime。 
• Middleware 层：该层允许对 MediaTek AI 计算核心进行动态控制，并在此提供用于神经网络工作负载的服务质
量控制。 
• 驱动层：该层为专用的 MediaTek AI 计算核心提供驱动程序。 
 
 NeuroPilot 开发指南 
要访问 NeuroPilot 在线文档，客户首先需要申请一个账户。然后，可以使用这个账户访问 MediaTek 在线文档网站, 
如图 1-2 所示。该网站提供各种开发资料，包括与开发相关的数据、 convert 等一些转换工具、SDK、SampleCode，
以及每个 target 对模型 OP 的支持和限制条件等。需要访问在线文档的客户可以联系 CPM，以获得申请过程的帮
助。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 HypervisorAI 
User Manual 
Confidential B 
 
图 1-2. NeuroPilot 在线文档 
 
开通 NeuroPilot 访问权限后：进入 https://neuropilot.mediatek.com/ -> Software Development -> 登陆账号 -> 在
“NeuroPilot SDK & Document”下选择目标 NeuroPilot {version} -> Latest Version NeuroPilot Online Doc -> 2. Getting 
Started Guide -> 2.2. NeuroPilot Workflow -> 2.2.3.1. Android Development 
 
 配置/客制化指南 
 NeuroPilot Debug 命令说明 
客户如果遇到 apusys error issue，请先打开以下 log 开关，复现问题，再向 MediaTek 提供整机 log 以及在测试机上
的 apusys_rv_xfile (用于解码 apusys_log)，log options 和获取路径如下： 
Enable NNAPI AOSP log       ：adb shell "setprop debug.nn.vlog 1" 
Enable TFlite log                    ：adb shell setprop debug.mtk_tflite.vlog true 
Enable Execution plan           ：adb shell setprop debug.neuron.runtime.ShowExecPlan true 
Enable ShowQoSInfo             ：adb shell setprop debug.neuron.runtime.ShowQoSInfo true 
Enable Kernel Log    :   adb shell "echo 15 > /sys/class/misc/apusys/log/klog" 
Enable uPLog                          ： adb shell "echo 5 > /proc/apusys_logger/log" 
Enable User Log                      ： adb shell setprop debug.apusys.loglevel 15 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 HypervisorAI 
User Manual 
Confidential B 
Enable apusys_rv_xfile          ： adb pull /proc/apusys_rv/apusys_rv_xfile (用于解码 apusys_log) 
 
将这些需要的开关打开之后再重启 service 使其生效： 
 
• adb shell stop neuralnetworks_hal_service_mtk_neuron 
• adb shell start neuralnetworks_hal_service_mtk_neuron 
 
 NPU Trace 工具抓取 Trace 
 使用 Trace Tool 获取路径 
NPU Systrace Tool 是用于分析和调试 MediaTek 平台上 NPU 基本运算单元（如 EDMA、MDLA）运行状态的工具，可
以帮助开发者快速分析运行在 NPU 上的模型算法的性能和调试问题。 
如何获取 NPU Systrace Tool：进入 https://neuropilot.mediatek.com/  -> Software Development -> 登陆账号 -> 在
“NeuroPilot SDK & Document”下选择目标 NeuroPilot {version} -> Latest Version NeuroPilot Online Doc –> Downloads –> 
NPU Systrace Tool 下载。 
 
 NPU Trace Tool 使用 
如何进行 NPU trace 录制 依次执行 02-trace_start_all.bat –> 运行测试程序 –> 02-trace_stop.bat。其中： 
• 02-trace_start_all.bat    - start to record trace 
• 02-trace_stop.bat           - stop trace and pull trace files 
 
下面两个脚本运行是可选的，如果有开启，最后生成的 system.trace 中会有 npu middleware 和 neuron trace。 
• 08-mdw_trace_enable.bat - To get tracing information from npu middleware. 
• 08-neuron_rt_trace_enable.bat - To get tracing information from neuron runtime. 
 
最后会生成三个文件，根据需要选择查看。请使用 https://ui.perfetto.dev/ 打开 trace 
• npusys.trace - npusys trace only 
• system.trace - system trace only 
• combine.trace - npusys + system trace 
 
 NPU Trace 分析示例 
通常使用 MediaTek NPU Systrace 抓出并解析得到的 trace 文件有以下三个： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 HypervisorAI 
User Manual 
Confidential B 
• npusys.trace（仅包含 APU 运行期间各个 Device，如 MDLA 上 Tasks 的状况和 NPU Frequency, DRAM access, TCM 
access 等信息） 
• system.trace（普通 System trace only，包含 CPU 信息和系统中其他 process/threads 信息） 
• combine.trace（npusys + system trace） 
 
为了理清当前系统中运行在 APU 上的线程，通常需要通过系统调试和跟踪工具来获取相关信息。以下是一个详细
的 SOP，用于识别和调试当前系统中运行在 APU 上的线程。 
1. 使用 perfetto UI 打开 combine.trace 文件，定位到在 MDLA (主要 AI 运算单元) Core 上运行的 Task 块。可以获取
到以下资讯： 
– 对应 Task 执行的推理耗时，可以放大查看其 pid16652 (线程号)，如图 1-3 所示。 
– 对应 Task 是否运行在 SMP 多核并行模式下，若是多核 MDLA 运行，则会有多个相同颜色/pid 的 Tasks，如
图 1-4 所示： 
 
 
图 1-3. NPU trace 
 
 
图 1-4. NPU 硬件状态 
 
– 对应 Task 的 DRAM/TCM 占用情况。 
– 对应 Task 执行期间的 MDLA Cores 运行频率。 
– 还可以通过在 MDLA Core 上运行具有相同 pid 的 Tasks，以判断该 AI 算法是否是周期性执行的。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 HypervisorAI 
User Manual 
Confidential B 
 特定 MediaTek 平台 NPU 支持的算子信息 
 
图 1-5. 支持的算子的集合关系 
 
如图 1-5 所示，MediaTek 平台 NPU 支持的算子，集合由小到大分为 3 个层面: 
 
• Pytorch/TensorFlow Ops -> TFLite Ops：通过使用 mtk_converter tool 将原本的.pt 或 .pb 模型中的 Ops 转为 TFLite 
Ops。这步映射过程会进行初步的 Ops 过滤，挡住平台 NPU (HW) 不支持的 Ops。关于哪些 Pytorch/TensorFlow 
Ops 可以被 converter 工具识别并转为 Tflite Ops，可以参考 Online Document：Developer Tools -> Model 
Development -> Converter -> Converter Tool Supported Operators。 
• TFLite Ops -> NPU HW Operations：通过使用 neuronsdk 中的 ncc-tflite (compiler) 将转出的 TFLite 模型编译为 dla
文件。这步映射过程中会参考 NPU HW Operations Guidelines 中的 Specification (Restrictions) 来检查 TFLite 中每
个 Op 的详细参数。 关于哪些 TFLite Ops 可以被 ncc-tflite 工具识别并编译为 dla 文件，可以参考：Supported 
Operations。 
• NPU HW Operations：真正可以运行在 NPU 上的 Ops。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 HypervisorAI 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0099 MT8668_Hypervisor_Clock_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Clock_User_Manual_CN_V1.0.pdf

SHA-256：398c051fcb7f51504e53d82008b628c435240a964bdc9a46489249f4c24c2501

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0099.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28 
MT8668 Hypervisor Clock 
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor Clock 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 王琦琦 正式版 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor Clock 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
表目录 ··············································································································································································· 3 
1 Clock ·········································································································································································· 4 
1.1 概述·········································································································································································· 4 
1.1.1 基本概述 ······················································································································································ 4 
1.1.2 缩略词 ·························································································································································· 4 
1.2 架构/流程概要 ························································································································································ 5 
1.2.1 HW 架构 ······················································································································································· 5 
1.2.2 SW 架构 ························································································································································ 5 
1.3 常见问题/故障排除 ················································································································································ 7 
1.3.1 Clock Dump ··················································································································································· 7 
1.3.2 测量 Clock 频率 ············································································································································ 7 
1.3.3 打开和关闭 Clock ········································································································································· 8 
1.3.4 Debug: Subsys 读写 Register 卡住 ··············································································································· 8 
附件一 附加条款 ······························································································································································· 9 
表目录 
表 1-1. 缩略词 ··········································································································································································· 4 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor Clock 
User Manual 
Confidential B 
1 Clock 
1.1 概述 
1.1.1 基本概述 
本章节主要介绍 MT8668 Clock 架构，Clock 模块主要有两个功能： 
 
• 将平台支持的 Clock 注册到系统中进行统一管理 
• 操作 HW 以符合相应 User Module 的 Clock 控制需要 
 
1.1.2 缩略词 
表 1-1. 缩略词 
缩略词 全称及释义 
CCF (Linux) Common Clock Framework，Linux 通用时钟框架 
CG Clock Gate 时钟开关，开启和关闭时钟信号 
Divider Divider 除频器，降低频率，输入频率/N = 输出频率 
MUX Multiplexer 多路复用器，用于选择不同的时钟频率 
PLL  Phase-Locked Loop 锁相环，产生一定频率的时钟信号 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor Clock 
User Manual 
Confidential B 
1.2 架构/流程概要 
1.2.1 HW 架构 
 
1.2.2 SW 架构 
1.2.2.1 Yocto/Android 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor Clock 
User Manual 
Confidential B 
1.2.2.2 Hypervisor (Yocto + Android) 
  
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor Clock 
User Manual 
Confidential B 
1.3 常见问题/故障排除 
1.3.1 Clock Dump 
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg dump_clks 
 
输出结果如下 
[   clk_dts: clk_hw_name          :    clk_pwr, clk_is_prepared,  clk_is_enabled,   
clk_rate, clk_parent_name] 
------------------------------------------------------ 
[  topckgen: cksys_axi_sel        :  ON,   1,   1,  156000000,   cksys_mainpll_d7_d2] 
[  topckgen: cksys_axi_peri_sel   :  ON,   1,   1,  156000000,   cksys_mainpll_d7_d2] 
[  topckgen: cksys_axi_ufs_sel    :  ON,   1,   1,  156000000,   cksys_mainpll_d7_d2] 
[  topckgen: cksys_bus_aximem_sel :  ON,   0,   1,  218400000,   cksys_mainpll_d5_d2] 
[  topckgen: cksys_disp0_sel      :  ON,   1,   1,  728000000,      cksys_mainpll_d3] 
[  topckgen: cksys_mminfra_sel    :  ON,   1,   1,  624000000,      cksys_univpll_d4] 
[topckgen: cksys_mmup_sel       :  ON,   1,   1,  728000000,      cksys_mainpll_d3] 
 
clk_is_on 对应值表示 Clock 依赖 Power 是否开启，不是表示 Clock 本身是否开启 
参考下表判断 Clock 开关状态 
clk_is_on clk_is_prepared clk_is_enabled Clock 状态 Comments 
OFF NA NA OFF Power off, 则 Clock off 
ON -1 0 OFF 没有 enable，prepare 为-1 
ON 1 1 ON 有调用 prepare_enable 
ON 0 1 MUX/CG: ON 
PLL: OFF 
MUX/CG: 没有调用
prepare_enable, 但是
MUX/CG status bit 表示
Clock on 
PLL: 有调用 prepare_enable, 
但是与该 PLL 关联的 MUX
都是 off，所以 PLL 真实状
态是 off 
 
1.3.2 测量 Clock 频率 
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg fmeter 
 
输出结果如下 
1: fm_axi_ck                    : 156000 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor Clock 
User Manual 
Confidential B 
2: fm_axi_peri_ck               : 156000 
3: fm_axi_ufs_ck                : 156000 
可以量测的 Clock 有 PLL 和 MUX，Frequency 单位是 kHz，其中数值-1 表示该 Clock 没有打开 
 
1.3.3 打开和关闭 Clock 
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
 
clkdbg prepare_enable xxx // 打开Clock, xxx 是Clock 名字 
 
e.g., 
clkdbg prepare_enable cksys_disp0_sel 
 
clkdbg disable_unprepare xxx // 关闭Clock, xxx 是Clock 名字 
 
e.g., 
clkdbg disable_unprepare cksys_disp0_sel 
 
1.3.4 Debug: Subsys 读写 Register 卡住 
该问题可能与 Clock 相关，通常由下面两点导致 
• 该 Subsys 所需 Clock 没有开启 
• 在 Subsys 工作过程中，该 Subsys 所需 Clock 被其他 module 误关 
 
针对上面两点，可以使用上述命令来手动打开 Clock 验证确认，如果手动打开 Clock 之后验证，问题不再出现，就
说明是 Clock 控制不合理导致，然后需要: 
• 如果 Subsys 对应 driver 没有正常开启、关闭 Clock，请 SW Owner 修改 
• 如果 Subsys 对应 driver 有正常开启、关闭 Clock，就需要 Clock SW 协助添加 debug 来查找哪个 Module 误关
Clock 导致问题 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor Clock 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor Clock 
User Manual 
Confidential B 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0100 MT8668_Hypervisor_DMA_Buffer_Debug_User_Manual_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_DMA_Buffer_Debug_User_Manual_V1.0.pdf

SHA-256：99f3e33f914dcebe4fee976ba04aa4ffca6c5cee48b3dfc760c44abd929d652b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0100.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28 
MT8668 DMA Buffer Debug  
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 孙家琪 正式版 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 概述 ··········································································································································································· 5 
1.1 目的·········································································································································································· 5 
缩略词 ··············································································································································································· 6 
1.2 缩略词 ······································································································································································ 6 
2 何时需要查看 DMA BUF 信息 ··································································································································· 7 
2.1 系统 OOM 时 ··························································································································································· 7 
2.2 系统 Memory 可用量比较少 ·································································································································· 7 
2.3 系统 IOVA 分配失败 ················································································································································ 7 
3 IOVA 通过 DMA Heap Dump 指令获取 DMA BUF 信息 ····························································································· 8 
3.1 Total Memory Show ················································································································································· 8 
3.2 Heap Statistic···························································································································································· 9 
3.3 Dump Memory Info 以及 Processes Statistics ········································································································· 9 
3.4 Buffer Dump ··························································································································································· 10 
4 通过 DB 来获取 DMA BUF 信息 ······························································································································ 11 
4.1 不同类型 DB 的 DMA Heap Info 的存放 File ········································································································ 11 
4.2 Top User 找用量最多的 Module ··························································································································· 11 
4.3 找用量最多的 Process ·········································································································································· 11 
4.4 其他情况 ································································································································································ 12 
5 Hypervisor Android VM UOS DMA BUF 信息 ··········································································································· 14 
6 Hypervisor Yocto SOS DMA BUF 信息 ······················································································································ 15 
附件一 附加条款 ····························································································································································· 16 
 
 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
图片目录 
图 3-1. dumpsys meminfo DMA BUF 占用量 ···························································································································· 7 
图 3-2. IOVA 分配失败示意 ······················································································································································· 7 
图 4-1. DMA BUF 总体信息概览 ··············································································································································· 8 
图 4-2. DMA heap 统计信息说明 ············································································································································· 9 
图 4-3. 进程使用 DMA BUF 状况统计信息说明 ······················································································································ 9 
图 4-4. 使用 DMA BUF 的进程名称统计 ·································································································································· 9 
图 4-5. 具体 DMA BUF 详细信息统计说明 ···························································································································· 10 
图 5-1. Debug name 用量 top user 信息统计 ························································································································· 11 
图 5-2. Process 用量 top user 信息统计 ································································································································· 12 
图 5-3. Debug name 用量 top user 信息统计 ························································································································· 12 
图 5-4. Device attach 信息 ······················································································································································· 13 
图 5-5. Process file count 示意 ················································································································································ 13 
 
表格目录 
表 2-1. 缩略词 ··········································································································································································· 6 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
1 概述 
1.1 目的 
本文档主要介绍 MT8668 DMA BUF 相关 Debug 的方法，包括何时需要查看 DMA BUF 信息、DMA BUF 信息如何获
取、如何查看、如何分析等。 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
缩略词 
1.2 缩略词 
表 0-1. 缩略词 
缩略词 解释 
DMA Direct Memory Access 
IOMMU Input–Output Memory Management Unit 
IOVA Input/Output Virtual Address 
PA Physical Address 
PID Process ID 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
2 何时需要查看 DMA BUF 信息 
2.1 系统 OOM 时 
详细信息可参考小节 4.1。 
 
2.2 系统 Memory 可用量比较少 
例如，for Android，dumpsys meminfo 看到 DMA BUF 占用量较大，需要定位是哪些 modules 占用较大，这可以通过
第 3 章介绍的 CMD 主动抓取 DMA BUF 的详细信息，并参考第 4 章节定位具体 module。 
 
图 2-1. dumpsys meminfo DMA BUF 占用量 
 
2.3 系统 IOVA 分配失败 
当出现如下类似 log 时，表明对应某个 device 的 IOVA region 已不够用，此时有可能是某些 DMA BUF 有 leak 现象，
需要 DMA BUF 详细信息来检查。 
 
 
 
图 2-2. IOVA 分配失败示意 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
3 IOVA 通过 DMA Heap Dump 指令获取 DMA BUF 信息 
抓取指令： 
adb root && adb shell cat /proc/dma_heap/all_heaps 
 
3.1 Total Memory Show 
 
图 3-1. DMA BUF 总体信息概览 
 
dma_heap 中的 memory 统计分为 3 类，三个值加起来就是 dma_heap（Buffer） total memory。 
 
• Buffer 占用的，上图的 DMA BUF buffer total 即是。 
• 由于 DMA BUF 的 exporter 不止 DMA 相关的 heap，所以针对 DMA BUF 的 total size 也做了拆分。Normal 
dma_heap 的 memory 统计，上图的 normal DMA heap buffer total 即是。非 dma_heap 生成的 DMA BUF 的 total 
memory， 上图的 non-dma_heap buffer total 即是。 
• Pool 缓存池缓存的 page，上图的 pool size 即是。目前只有 system heap pool 一个 pool (system heap & mtk_mm 
heap 共 pool，都会有加速效果)。 
• 未还给系统，也没给 pool 的待 free 的 pages，上图的 free list 即是，free list 是 GKI 提供，只会有 1 个。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
3.2 Heap Statistic 
 
图 3-2. DMA heap 统计信息说明 
 
这里展示的是各个 heap 的 buffer 总量，以及 page pool 里面缓存的 memory 的信息。 
3.3 Dump Memory Info 以及 Processes Statistics 
如果 user 没有设定好 debug name，在 leak 的时候比较难查。 我们会根据 rss 信息看哪个 process 能访问的 memory
最大，就 dispatch 给对应的 process owner。请务必设定好 DMA BUF 的 debug name。 
 
图 3-3. 进程使用 DMA BUF 状况统计信息说明 
 
为了更方便的查看此 statistics 数据，下图补上了 PID 名字方便做匹配。 
下图仅仅是示例，与上图对不上，实际情况中一定会对得上的。 
 
图 3-4. 使用 DMA BUF 的进程名称统计 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
3.4 Buffer Dump 
• buf_priv: 开头的是 buffer（heap buffer 结构，非 DMA BUF 结构）的 private 信息，这里面的信息和当前这块
DMA BUF 的 attachment 无关。其含义是：在 buffer 创建后，对应的 dom，第一次来分配 IOVA 的 attach info。 
• attach[x]: 开头的是当前 DMA BUF 的 attachment 信息，只打印有 IOVA 的 attachment。 如果 attachment 不
unmap，有可能导致 IOVA leak。 
 
图 3-5. 具体 DMA BUF 详细信息统计说明 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
4 通过 DB 来获取 DMA BUF 信息 
当遇到 DMA BUF 用量过大导致的 SWT/HANG/OOM/KE 等 issues 时，系统会自动cat /proc/dma_heap/all_heaps
抓取现场 DMA heap 信息，并根据不同状况存放到不同的文件中，可以按照下面的步骤来找出需要优化或存在
leakage 的 module。 
 
4.1 不同类型 DB 的 DMA Heap Info 的存放 File 
• Hang: SYS_DMA_HEAP_RAW 
• SWT/JE/NE: DMA BUF_HEAP_INFO 
• OOM/KE: SYS_KERNEL_LOG (search keyword:"dma_heap: mtk_debug") 
 
4.2 Top User 找用量最多的 Module 
找 Debug name 用量 Top user (通常 case)。 多个编号不同的 debug name 会被认为是同一 User。 用量最多且超过
DMA BUF 总量的 25%, 则需要该 Module owner 检查是否存在 leakage 等情况。 
 
图 4-1. Debug name 用量 top user 信息统计 
 
4.3 找用量最多的 Process  
找 DMA BUF 用量较大的 Process，若特定 Process 用量超过 DMA BUF 总量的 80%，则需对应 owner 检查是否存在
leakage 等情况。 
（1） 如果是 systemui 用量超限，需要 systemui tracking。 
（2） 如果是 surfaceflinger 用量超限，也没有抓到有效的 debug name， 需要 surface flinger tracking。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
 
图 4-2. Process 用量 top user 信息统计 
 
4.4 其他情况 
如果不是以上 case，则需要 DMA BUF Owner 检查，可能会是以下原因 
（1） DB 没有抓到现场， 需要在完整 mobile log 中或者解析上一份的 DB log 进行检查。 
（2） TOP debug name user 使用 DMA BUF 的用量占比没到 25% 需 double confirm, 例如：Leakage 的 buffer 虽然   
size 都很小，但是数量巨大，top user 区域没有 count 到全部。 
 
图 4-3. Debug name 用量 top user 信息统计 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
（3） DMA BUF kernel space leakage 
没有找到用量过大的 debug name or process user, 但是可以看到 kernel space 用量超限，例如： 检查 dump 
file 里的 buffer list 可以看到大多数都是 DISP attach 的，需要 display tracking。 
 
图 4-4. Device attach 信息 
 
（4） DMA BUF FD leakage 
        FD leak 会导致该 process 的 file 大幅增加。 
 
 
图 4-5. Process file count 示意 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
5 Hypervisor Android VM UOS DMA BUF 信息 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
6 Hypervisor Yocto SOS DMA BUF 信息 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
Confidential B 
MT8668 Hypervisor DMA Buffer Debug 
 User Manual 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0101 MT8668_Hypervisor_GNSS_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_GNSS_User_Manual_CN_V1.0.pdf

SHA-256：617e4896eb57b5d039a5f95ee82d1aa655cbf7cb72a4fac18e86d4923575546d

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0101.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Hypervisor GNSS User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 Ashin Wang (王薇) 正式版 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 GNSS ·········································································································································································· 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 GNSS 名词解释 ············································································································································· 5 
1.2 架构/进程概述 ························································································································································ 5 
 GNSS 架构 ····················································································································································· 5 
1.3 配置/客制化指南 ···················································································································································· 6 
 固定速率配置 ·············································································································································· 6 
 多卫星导航系统配置··································································································································· 7 
1.4 GNSS API··································································································································································· 7 
 Code Path ······················································································································································ 7 
 GpsInterface ·················································································································································· 7 
 CallBack ························································································································································· 8 
 Demo Code ··················································································································································· 9 
1.5 常见问题/故障排除 ················································································································································ 9 
 Log 相关问题 ················································································································································ 9 
 测试相关问题 ············································································································································ 10 
 GNSS Path ··················································································································································· 11 
附件一 附加条款 ····························································································································································· 12 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
图片目录 
图 1-1. GNSS 架构 ······································································································································································ 6 
图 1-2. 固定速率配置 ································································································································································ 6 
图 1-3. GNSS 配置 ······································································································································································ 7 
图 1-4. Mnld Test ······································································································································································ 11 
 
表格目录 
表 1-1. 名词解释········································································································································································ 5 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
1 GNSS 
1.1 概述 
 简单介绍 
本章节介绍 MT8668 GNSS 的基本功能以及常见问题的解决方法。 
 GNSS 名词解释 
表 1-1. 名词解释 
缩略词 全称 释义 
COLD start – 有时间辅助资讯，终端用户不会遇到该场景。 
FULL start – 
没有任何的辅助资讯，相当于终端用户第一次买
到手机后使用定位应用的场景。 
GNSS Global Navigation Satellite System 全球导航卫星系统 
Hot start – 
有所有的辅助资讯，终端用户此次定位距离上次
定位小于 2～4 小时。 
NMEA National Marine Electronics Association 
用于在海洋电子设备之间进行数据交换的通信协
议，广泛应用于 GPS/GNSS 接收器数据输出。 
TTFF Time To First Fix 
导航设备从开机到成功获取第一次有效定位数据
所需要的时间。 
WARM start – 
有时间和位置辅助资讯，终端用户此次定位距离
上次定位超过 2～4 个小时。 
 
1.2 架构/进程概述 
 GNSS 架构 
MT8668 GNSS architecture 如图所示： 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
 
图 1-1. GNSS 架构 
1.3 配置/客制化指南 
 固定速率配置 
固定速率（Fix Rate）是指 GNSS 上报位置信息的速率，目前 MT8668 可以支持的固定速率包括：1Hz、2Hz、5Hz 和
10Hz，默认配置是 1Hz 输出。修改固定速率的方法如下： 
 
方法 1：修改代码，配置 fix_interval 参数。fix_interval = 100 对应 10Hz；fix_interval = 1000 对应 1Hz。 
需要改在 Yocto 端/ src/connectivity/gps/4.0/mtk_mnld/mnld_entity/src/gps_controller.c 
 
图 1-2. 固定速率配置 
 
方法 2：动态修改配置文件，重启 GNSS 后生效，在 Yocto 端修改。 
命令： 
echo fix_interval=1000 >> /data/etc/gnss/mnl.prop    /  
配置成 1Hz，重启 GPS 后生效。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
 多卫星导航系统配置 
MT8668 支持 GPS + GLONASS + Galileo + BeiDou 多卫星导航定位系统，gnssopmode 默认配置成
MTK_CONFIG_GPS_GLONASS_BEIDOU_GALILEO_NAVIC（默认配置的 GNSS 性能最佳，建议使用默认配置）。 
 
 
图 1-3. GNSS 配置 
1.4 GNSS API     
 Code Path 
Code path: 
/src/connectivity/gps/4.0/gps_hal 
 
 GpsInterface 
typedef struct { 
    size_t          size;    //设置sizeof(GpsInterface) 
    int   (*init)( GpsCallbacks_ext* callbacks );        //初始化callback 
    int   (*start)( void );                                               //gps start  
    int   (*stop)( void );                                               //gps stop  
    void  (*cleanup)( void );                                      //cleanup gps 
 
    int   (*inject_time)(GpsUtcTime time, int64_t timeReference,int uncertainty);         
//注入utc time 
 
    int  (*inject_location)(double latitude, double longitude, float accuracy); 
//将当前位置从另一个位置提供者注入, Latitude and longitude 以度为单位，精度以米为单位 
 
    void  (*delete_aiding_data)(GpsAidingData flags); 
       //指定下一次调用启动时不会使用在flags 中定义的信息。对于冷启动，会传递 GPS_DELETE_ALL。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
 
int   (*set_position_mode)(GpsPositionMode mode, GpsPositionRecurrence recurrence, 
              uint32_t min_interval, uint32_t preferred_accuracy, uint32_t preferred_time, 
              bool lowPowerMode); 
       //主要是设置nmea 和location 的上报频率：min_interval 
 
    const void* (*get_extension)(const char* name); 
        //get a pointer to extension information 
    
    int  (*inject_fused_location)(double latitude, double longitude, float accuracy); 
        //注入fused location 
  
     int   (*fix_interval)(uint32_t interval); 
       //动态设置上报频率，100:10hz,1000:1hz 
 
     int   (*op_mode)(uint8_t opmode); 
       //动态设置 opmode 
 
     int   (*elevation_angle)(uint8_t angle); 
     //动态设置elevation angle constraint 
    
    int   (*l5_disable)(bool disable); 
     //动态设置L5 enable 或disable 
 
    int   (*gps_start_week_num)(uint32_t week); 
    //动态设置 gps start week num 
 
 CallBack 
typedef struct { 
    
    gps_location_ext_callback location_cb;     //上报location 的callback，从这里获取location，比较常用 
    gps_status_callback status_cb;                     //gps status callback，gps 状态如start、stop 
    gps_sv_status_callback sv_status_cb;          //sv status callback 
    gps_nmea_callback nmea_cb;                       //上报nmea 的callback，从这里获取nmea，比较常用 
    gps_set_capabilities set_capabilities_cb;    //capabilities 在xts 认证会用到，获取支持的capabilities 再
去跑特定测项 
    gps_acquire_wakelock acquire_wakelock_cb;      //请求wakelock 的callback 
    gps_release_wakelock release_wakelock_cb;        //是否wakelock 的callback 
    gps_create_thread create_thread_cb;                     //create thread 的callback 
    gps_request_utc_time request_utc_time_cb;         //获取utc time 的callback 
    gnss_set_system_info set_system_info_cb;            //set system info的callback 
    gnss_sv_status_ext_callback gnss_sv_status_cb;   //获取gnss sv_status_ext 的callback 
 
    gnss_set_name_callback set_name_cb;                  //set nmea callback 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
     
    gnss_request_location_callback request_location_cb;    //request locktion callback 
gps_location_ext_callback agps_location_cb;       //获取agps location 
 
    gnss_output_rtcm3_callback output_rtcm3_cb;       //获取rtcm 的callback 
    gnss_set_signal_type_capabilities_callback set_signal_type_callback;     //set signal type 
capailities，如carrierfrequency 
 
 Demo Code 
可以参考 mnld_test 的用法来调用 GpsInterface 和 callback 
Mnld_test 路径： src/connectivity/gps/4.0/gnss_test 
例如：调用 GpsInterface 中的 init 和 fix_interval： 
GpsInterface_ext* mnld_test_gpsinfs = NULL; 
GpsCallbacks_ext* mnld_test_cbs = NULL; 
mnld_test_cbs = (GpsCallbacks_ext*)calloc(1, sizeof(GpsCallbacks_ext)); 
 mnld_test_cbs->size = sizeof(GpsCallbacks_ext); 
 struct gps_device_t_ext *gpsdev = NULL; 
 gpsdev = &linux_gps_device;                      //定义变量初始化 
 mnld_test_gpsinfs = (GpsInterface_ext*)gpsdev->get_gps_interface(gpsdev); 
  if(mnld_test_gpsinfs != NULL) 
   { 
         LOGI("mnld_test_gpsinfs is not null");                                                                                                                                                  
mnld_test_gpsinfs->init(mnld_test_cbs); 
          mnld_test_gpsinfs->fix_interval(1000); 
     } 
 
Callback 的使用也可以参考 mnld_test、mnld_fm_gps_location_callback、mnld_fm_gps_status_callback，它们都是
callback 的接收函数，例如： 
GpsCallbacks_ext mnld_fm_gps_callbacks = { 
    .size = sizeof(GpsCallbacks_ext), 
    .location_cb = mnld_fm_gps_location_callback, 
    .status_cb = mnld_fm_gps_status_callback, 
…… 
 
建议细看 mnld_test 的 code，有很具体的接口调用和 callback 使用。 
 
1.5 常见问题/故障排除 
 Log 相关问题 
• 联发科技工程师需要哪些 log 用于分析问题？ 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
Android 端需要：/data/debuglogger/mobilelog 
Yocto 端需要：/data/debuglogger/mobilelog，以及 NMEA log 
Yocto 端的 mobilelog 默认会打开，开 NMEA log 需要创建/data/etc/gnss/mnl.prop 文件并在里面写入： 
debug.dbg2file=1  
debug.filename=/data/debuglogger/gpsdebug.log 
 
保存重启，NMEA log 就会出现在/data/debuglogger/gpsdebug.log 
 
• 如何连接 powergps 
先输入如下命令 
adb shell "echo \"pmtk.serial.port=7000\" > /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug_type=0\" >> /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug.debug_nmea=1\" >> /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug.dbg2file=1\" >> /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug.filename=/data/debuglogger/gpsdebug.log\" >> /data/etc/gnss/mnl.prop" 
 
重启后再输入： 
adb forward  tcp:7000 tcp:7000 
 
并使用 mnld_test 打开 GPS： 
adb shell 
mnld_test start c & 
 
 测试相关问题 
• 测试前需要检查是否有卫星信号，是否处于 open sky 的环境 
测试 GNSS 搜星或定位功能，信号需要 open sky 的环境下，例如空旷的室外或者有信号放大器的实验室。 
 能够定位是有前提条件的 CNR 为 40~43dbm 的卫星要>6 颗。 --->测 GNSS 一定要注意这个，如不确认当前信号
环境是否符合要求，拿一个对比机放在同样的环境做对比。  
 
• 如何测试 FULL start、WARM start、COLD start、HOT start 这几种启动方式的 TTFF？ 
Android 端请使用工程模式下的 YGPS 或使用如下 adb 命令打开 YGPS，通过 FULL、COLD、WARM、HOT 按钮来
测试。 
adb shell am  start com.mediatek.ygps/.YgpsActivity 
 
Yocto 端可以使用 mnld_test 
Start test(open gps): mnld_test –h 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
 
图 1-4. Mnld Test 
  
根据提示，例如您需要测试冷启动，可以用如下命令： 
mnld_test start c & 
 
可以输入如下指令将 log 打在串口，可以看到 TTFF 等信息： 
journalctl -f --no-tail -o short-precise |grep mnldtest 
 
 GNSS Path 
Source code: 
Android: vendor\mediatek\proprietary\hardware\connectivity\gnss 
Yocto: src/connectivity/gps/4.0 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Hypervisor GNSS 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0102 MT8668_Hypervisor_GPIO_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_GPIO_User_Manual_CN_V1.0.pdf

SHA-256：81a8c931d00044808287b7a610d13cf5436f72a3538ed9325683dd6434fd60de

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0102.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Hypervisor GPIO  
User Manual 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor GPIO 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 孙立 正式版 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor GPIO 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 GPIO ·········································································································································································· 4 
1.1 概述·········································································································································································· 4 
 简单概述 ······················································································································································ 4 
 名词解释 ······················································································································································ 4 
1.2 架构/流程概述 ························································································································································ 5 
 GPIO 介绍 ····················································································································································· 5 
 Pinctrl 子系统与 GPIO 子系统 ····················································································································· 5 
1.3 配置/客制指南 ························································································································································ 6 
 Pinctrl 使用 ··················································································································································· 6 
 GPIO 使用 ····················································································································································· 6 
1.4 常见问题/故障排除 ················································································································································ 7 
 在 Kernel 中如何查看以及修改 PIN 的状态 ······························································································· 7 
 开机过程中 Pin 脚电平和 Default Reset Value 不符 ·················································································· 8 
附件一 附加条款 ······························································································································································· 9 
 
 
图片目录 
图 1-1. Pinctrl 子系统与 GPIO 子系统 ······································································································································ 5 
 
表格目录 
表 1-1. 名词解释········································································································································································ 4 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor GPIO 
User Manual 
Confidential B 
1 GPIO 
1.1 概述 
 简单概述 
本章节介绍 GPIO 控制器的硬件特性，软件配置和功能，以及常见问题的 调试方法。 
 
 名词解释 
表 1-1. 名词解释 
名词 全称及释义 
DATAIN Pin 读到的值，仅在 IES = 1 时有效 
DATAOUT GPIO mode 时设定 output High/Low 
DIR GPIO mode 时设置 Pin input/output 
DRV Pin 的普通 driving 设定 
EH I2C 类 Pin 专有的 driving 设定 
IES Input enable 
MODE Pinmux 设定，填入 mode number 即可 
PD 部分 pin 打开 pull down 时，PU 需为 0 
PU 部分 pin 打开 pull up 时，PD 需为 0 
PUPD 部分内部上下拉阻值可调的 Pin 的 pull up/down 设定 
R0/R1 上下拉电阻启用（部分 Pin 可用） 
RSEL 部分 Pin 调整上下拉阻值（部分 Pin 可用） 
SMT 波形过滤功能 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor GPIO 
User Manual 
Confidential B 
1.2 架构/流程概述 
 GPIO 介绍 
General-Purpose Input/Output (GPIO），意为通用输入/输出。在嵌入式系统中，GPIO 是一种用于与外部设备进行数
字信号交互的接口。它可以通过设置为输入或输出模式来读取或控制外部设备的状态。  
MediaTek SoC 提供 PIN Controller 硬件单元以实现: 
 引脚功能配置。例如该 I/O pin 是一个普通的 GPIO 还是一些特殊功能引脚（例如 EMMC 上的 CMD 信号）。 
 引脚特性配置。例如 pull-up/down 电阻的设定，drive-strength 的设定。 
 
提供 GPIO Controller 硬件单元以实现： 
 配置 GPIO 的方向。 
– 如果是输出，可以配置为 high level 或者 low level。 
– 如果是输入，可以获取 GPIO 引脚上的电平状态。 
 
 Pinctrl 子系统与 GPIO 子系统 
 
图 1-1. Pinctrl 子系统与 GPIO 子系统 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor GPIO 
User Manual 
Confidential B 
1.3 配置/客制指南 
 Pinctrl 使用 
Pinctrl 的使用流程如下。 
1. 在 dts pio 节点下做 Pin 的配置。需要关注以下几点： 
(1) 配置的 state 名称（下例中 mmc0_pins_default）。state 名称是 dts 对该设定的索引关键字，注意识别。 
(2) 在 state 下对 pin 作分组（下例中 pin_cmd_dat {…}）。每组 pin 一定具有相同的 pinconf 设定，如果有不同
的设定，可以在一个 state 内写入多组设定。 
(3) 配置 pinmux（下例中 pinmux = <…>）。Pinmux 会说明要设定的 pin，并确定其 function，所引用的定义来
自文件 include/dt-bindings/pinctrl/mt6897-pinfunc.h。 
(4) 配置 pinconf（下例中 input-enable 等）。在配置 pinmux 之后配置 pin config，可以设定上拉下拉状态，输
入高/低，driving 能力，输入使能等。 
2. dts 中各 module 节点下的配置。如下是 dts 中各 module 节点下对 pinctrl 的引用： 
/* dts Sample */ 
pinctrl-names = "default", "state_uhs"; 
pinctrl-0 = <&mmc0_pins_default>; 
pinctrl-1 = <&mmc0_pins_uhs>; 
 
3. driver 中的调用 
/* C code Sample */ 
pinctrl *p = bri->pinctrl; 
struct pinctrl_state = bri->pins_gpio 
 
bri->pins_gpio = pinctrl_lookup_state(p, "gpio"); 
if (IS_ERR(bri->pins_gpio)) { 
       dev_dbg(dev, "no gpio or recovery state found for GPIO recovery\n"); 
       bri->pins_gpio = NULL; 
} 
if (bri->pinctrl) 
       pinctrl_select_state(bri->pinctrl, bri->pins_gpio); 
 
 GPIO 使用 
GPIO 的使用流程如下。 
1. dts module 节点下的配置： 
/* dts Sample */ 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor GPIO 
User Manual 
Confidential B 
&your_device_node { 
/* xx 代表gpio number, e.g. xx = 155 */ 
test-gpios=<&pio xx GPIO_ACTIVE_HIGH>; 
}; 
 
2. Driver 中的调用 
/* C code Sample */ 
#include <linux/gpio.h> 
#include <linux/consumer.h> 
struct gpio_desc *gpio_spec; 
 
gpio_spec = devm_gpiod_get(&pdev->dev, "test", GPIOD_OUT_HIGH); 
  
/* Set direction to input mode */ 
gpiod_direction_input(gpio_spec); 
 
/* get input value */ 
gpiod_get_value(gpio_spec); 
 
/* Set direction to output mode and output value*/ 
gpiod_direction_output(gpio_spec, 1 or 0); 
 
gpiod_set_value(gpio_spec, 1 or 0); 
 
/* Free this GPIO if needed*/ 
devm_gpiod_put(&pdev->dev, gpio_spec); 
 
1.4 常见问题/故障排除 
 在 Kernel 中如何查看以及修改 PIN 的状态 
通过 mtk_gpio debug 节点来查看以及修改 PIN 的状态。 
#: cat /proc/mtk_gpio/soc.pinctrl 
PIN: [MODE] [DIR] [DOUT] [DIN] [PULL_EN] [PULL_SEL] [IES] [SMT] [DRIVE] ( [R1] [R0] ) 
   0: 0 0 0 0 1 0 1 0 0 
   1: 0 0 0 0 1 0 1 0 0 
   2: 0 1 1 1 1 0 1 0 0 
   3: 6 0 0 0 1 0 1 0 0 
 
说明： 
 MODE: Aux.Function selection, range: 0~7 
 DIR: 0 for input mode; 1 for output mode (this is register value of MediaTek’s DIR bit)  
 DOUT/DIN: 0 for low; 1 for high 
 DRIVE: Driving current selection, range: 0/1/2/3/4/5/6/7 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor GPIO 
User Manual 
Confidential B 
 IES/SMT: 0 for disable; 1 for enable 
 PULLEN/R1/R0: 0 for disable; 1/2/3 for enable 
– For pin with 2 pull resistors, R1 and R0 are shown. 
– For pin with 1 pull resistor, R1 and R0 are not shown. 
 PULLSEL: 0 for selecting pull-down resistor; 1 for pull-up resistor 
 
 开机过程中 Pin 脚电平和 Default Reset Value 不符 
1. 首先检查 dws 文件是否有将这个 pin 配置成非 reset default 状态。 
2. 然后检查是否有外围电路影响。 
3. 检查是否有 preloader/lk 主动调用 GPIO 接口进行设置。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor GPIO 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0103 MT8668_Hypervisor_GPU_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_GPU_User_Manual_CN_V1.0.pdf

SHA-256：6891b99c5e0953d4958d05b3f7af081567cf8f49b7a33fe7ead8f125c7d1414f

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0103.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Hypervisor GPU User Manual 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor GPU 
 User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 陈昆 正式版 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor GPU 
 User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 GPU ··········································································································································································· 4 
1.1 概述·········································································································································································· 4 
 什么是 GPU ·················································································································································· 4 
 为什么需要 GPU ·········································································································································· 4 
 如何使用 GPU ·············································································································································· 5 
1.2 架构/进程概述 ························································································································································ 5 
 Hypervisor 图形系统框架 ···························································································································· 5 
 Arm Mali-G625 架构及功能 ························································································································· 6 
1.3 常见问题/故障排除 ················································································································································ 7 
 GPU 渲染分析 ·············································································································································· 7 
 GPU 性能分析 ·············································································································································· 9 
附件一 附加条款 ····························································································································································· 11 
 
 
图片目录 
图 1-1. Hypervisor 图形框架 ····················································································································································· 5 
图 1-2. Arm Mali-G625 架构 ······················································································································································ 6 
 
表格目录 
表 1-1. Arm Mali-G625 feature support ····································································································································· 6 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor GPU 
 User Manual 
Confidential B 
1 GPU 
1.1 概述 
本章节主要介绍 MT8668 GPU 的基本知识。 
MT8668 的 GPU 使用的是 Arm Mali-G625。 
 
 什么是 GPU 
GPU：全称是 Graphics Processing Unit，即图形处理器，又称显示核心、视觉处理器、显示芯片，是一种专门在个
人电脑、工作站、游戏机和一些移动设备（如平板电脑、智能手机等）上做图像和图形相关运算工作的微处理
器。 
 
 为什么需要 GPU 
• GPU 作为硬件显卡的“心脏”，地位等同于 CPU 在计算机系统中的作用。同时 GPU 也可以用来作为区分 2D 硬
件显卡和 3D 硬件显卡的重要依据。2D 硬件显卡主要通过使用 CPU 来处理特性和 3D 图像，将其称作“软加
速”。 
 
• GPU 是并行编程模型和 CPU 的串行编程模型完全不同，导致很多 CPU 上优秀的算法都无法直接映射到 GPU
上，并且 GPU 的结构相当于共享存储式多处理结构，因此在 GPU 上设计的并行程序与 CPU 上的串行程序具
有很大的差异。GPU 主要采用立方环境的材质贴图、硬体 T&L、顶点混合、凹凸的映射贴图和纹理压缩、双
重纹理四像素 256 位的渲染引擎等重要技术。 
 
• 由于图形渲染任务具有高度的并行性，因此 GPU 可以仅仅通过增加并行处理单元和存储器控制单元便可有效
的提高处理能力和存储器带宽。 
 
• GPU 设计目的和 CPU 截然不同，CPU 是设计用来处理通用任务，因此具有复杂的控制单元，而 GPU 主要用来
处理计算性强而逻辑性不强的计算任务，GPU 中可利用的处理单元可以更多的作为执行单元。因此，相较于
CPU，GPU 在具备大量重复数据集运算和频繁内存访问等特点的应用场景中具有无可比拟的优势。  
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor GPU 
 User Manual 
Confidential B 
 如何使用 GPU 
• 使用 GPU 有两种方式，一种是开发的应用程序通过通用的图形库接口调用 GPU 设备，另一种是 GPU 自身提
供 API 编程接口，应用程序通过 GPU 提供的 API 编程接口直接调用 GPU 设备。 
 
• 通过通用的图形库的方式使用 GPU，都是通过 OpenGL 或 Direct3D 这一类现有的图形函数库，以编写渲染语
言（Shading Language）的方法控制 GPU 内部的渲染器（Shader）来完成需要的计算。 
 
• 目前业界公认的图形编程接口主要有 OpenGL 和 DirectX 这两种接口。OpenGL 是当前可用于开发可交互、可移
植的 2D 与 3D 图形应用程序的首选环境，也是当前图形应用最广泛的标准。只要在任何一个遵循 OpenGL 标
准的环境下都会产生一样的可视化效果。与 OpenGL 类似，DirectX（Direct eXtension）也是一种图形 API。为
适应 GPU 应用的需求，DirectX 则根据 GPU 新产品功能的扩充与进展及时地定义新的版本，它所提供的功能
几乎与 GPU 提供的功能同步。 
 
1.2 架构/进程概述 
 Hypervisor 图形系统框架 
Hypervisor 图形系统框架如下所示： 
 
 
图 1-1. Hypervisor 图形框架 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor GPU 
 User Manual 
Confidential B 
 Arm Mali-G625 架构及功能 
Arm Mali-G625 架构请参考下图： 
 
 
图 1-2. Arm Mali-G625 架构 
 
Arm Mali-G625 Feature Support 请参考表 1-1： 
表 1-1. Arm Mali-G625 feature support 
Features Value Description 
Anti-Aliasing 
• 2x MSAA 
• 4x MSAA 
• 8x MSAA 
• 16x MSAA 
2x and 4x Multi-Sampling Anti-Aliasing 
(MSAA) with minimal performance drop. 
API Support 
• OpenGL® ES 1.1, 2.0, 3.0，
3.1 
• Vulkan 1.3 
 Hypervisor Guest Android can support all 
core features of OpenGL ES 3.1. 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor GPU 
 User Manual 
Confidential B 
Features Value Description 
•  
Adaptive Scalable Texture 
Compression (ASTC) 
Low Dynamic Range (LDR) and High 
Dynamic Range (HDR). 
Supports both 2D and 3D images. 
ASTC offers several advantages over existing 
texture compression schemes by improving 
image quality, reducing memory bandwidth 
and thus lowering energy consumption. 
Arm Frame Buffer Compression 
(AFBC) 
• Version 1.3.2 
• 4x4 pixel block size 
AFBC is a lossless image compression format 
that provides random access to pixel data to 
a 4x4 pixel block granularity. It is employed 
to reduce memory bandwidth both 
internally within the GPU and externally 
throughout the SoC. 
Arm Fixed Rate Compression 
(AFRC) 
• Version 1.0 
• 4x4 pixel block size 
AFRC is a lossy image compression format. 
AFRC can be used for compressing external 
texture inputs and framebuffer outputs from 
the GPU. Configurable compression ratio 
provides guaranteed bandwidth reduction 
for such surfaces and memory footprint 
saving. 
Notice. Incompatibility with Hypervisor 
guest Android 
Variable Rate Shading 
• Pipeline, primitive and 
attachment shading rates 
• Up to 4x4 shading rate 
Variable Rate Shading decouples fragment 
shading frequency from rasterization 
frequency, providing the opportunity to 
make energy savings while maintaining 
perceived visual quality. 
 
1.3 常见问题/故障排除 
 GPU 渲染分析  
1.3.1.1 Android 端问题分析 
出现屏幕绘制异常时，一般可以从三个方面进行分析，分别是 SF/HWC/Display、GPU 和 APK。判断是否为
SF/HWC/Display 问题，首先可以查看 log 中是否有 display 相关错误，根据 log 进行下一步分析；其次平台有两种叠
图方式，可以通过 OVL 或者 GPU 进行叠图，可以通过关闭 HW OVL，强制使用 GPU 进行叠图，查看异常情况；最
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor GPU 
 User Manual 
Confidential B 
后可以使用 screenrecord 命令进行录屏，查看录屏结果是否也为渲染异常。如果判断为 SF/HWC/Display 问题可以
找相关模块负责人进行下一步分析。 
 
GPU 问题在 log 中搜索是否有 Mali/EGL/GLES/HWUI 等关键字相关的错误，根据错误进行下一步分析。也可以使用
一些调试工具，例如 RendorDoc，这些工具可以帮助分析问题。也可以一些做有关 GPU 的对比实验。 
 
APK 问题需要请 APK 共同分析，是否绘制时使用 GL 接口的问题，或者传入绘制的纹理不对等情况。 
 
1.3.1.1 Yocto 端问题分析 
出现屏幕绘制异常时，一般可以从三个方面进行分析，分别是 Weston/Display、GPU 和应用。判断是否为
Weston/Display 问题，首先可以查看 log 中是否有 display 相关错误，根据 log 进行下一步分析；其次平台有两种叠
图方式，可以通过 OVL 或者 GPU 进行叠图，可以使用 screenrecord 工具进行录屏，查看录屏结果是否也为渲染异
常。如果判断为 Weston/Display 问题可以找相关模块负责人进行下一步分析。 
 
GPU 问题在 log 中搜索是否有 Mali/EGL/GLES 等关键字相关的错误，根据错误进行下一步分析。也可以一些做有关
GPU 的对比实验。 
 
APK 问题需要请 APK 共同分析，是否绘制时使用 GL 接口的问题，或者传入绘制的纹理不对等情况。 
 
1.3.1.2 GPU 相关对比实验 
常见对比实验如下： 
(1) 问题与系统版本是否相关 
(2) 上一代 GPU 框架（Midgard/Bifrost）平台是否可复现 
(3) 问题是否与 GPU Driver Version 有关 
(4) 关掉 AFBC 是否复现 
(5) 强制 glFinish 是否复现 
(6) 关掉 partial update 是否复现 
(7) 问题是否和 ASTC、MSAA 相关 
(8) RenderEngine backend 切换实验 
(9) 其他方面等 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor GPU 
 User Manual 
Confidential B 
 GPU 性能分析 
对于 GPU 的性能问题分析，通常有三个方面包括 GPU 问题、应用问题和其他模块或系统相关问题。GPU 问题可以
查看 Main log 和 kernel log 中有没有 Mali/EGL/GLES 关键字的错误 log，根据 log 进行下一步的分析。可以使用工具
抓问题场景的 systrace 或 perferro 进行分析，以及使用 ARM Streamline 检查 HW 执行情况，查看具体是哪一个部分
影响到 GPU 的性能。也可以做一些针对性的对比实验，细分影响性能的部分。 
对于 APK 部分，也可以使用 systrace 或 perferro 进行分析，是否为 APK 原因。其他模块或系统相关问题可以通过
log 和火焰图进行分析。 
 
1.3.2.1 GPU 性能常见对比实验 
GPU 性能不达标的常见对比实验如下： 
(1) Fix performance mode 是否达标 
(2) 有无限频因素（如 thermal） 
(3) 是否与 Power Policy 策略有关 
(4) 是否与 Driver Overhead 有关 
(5) 是否与内存带宽/GPU QOS 有关 
(6) 是否与 GPU Driver Version 有关 
(7) Arm Mali Offline Compiler 
(8) 其他方面等 
 
1.3.2.2 性能优化建议 
针对 GPU 的性能优化主要有以下几个建议： 
 
(1) 首先确认性能瓶颈 
明确具体是哪一部分影响到平台的性能，具体可以是 CPU、GPU（vertex 或 fragment）、Bandwith 等。确认性能瓶
颈后，有针对性地进行优化。 
 
(2) Vertex 负载过重 
Vertex 负载过重会造成 GPU 绘制时卡顿，在使用 openGL 时需要避免顶点属性资料量过大。 
 
(3) Fragment 负载过重 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor GPU 
 User Manual 
Confidential B 
尽量减少 overdraw，在 shader 中避免使用非必要精度和优化数学表达式等。在 shader 中使用简单有效的语句，可
以减少 Fragment 负载。 
 
(4) 带宽瓶颈 
针对带宽的优化方向通常为：AFBC、ASTC、render size、mipmaping、pixel format 等。 
 
(5) Driver Overhead 
避免使用导致 CPU、GPU 串行运行的某些接口（如 glReadpixels、glFinish），优化每帧 gl 接口的使用数量，提倡使
用 VBO、EBO、VAO 等。 
 
(6) 开发者指南（源自 Arm Developer） 
Arm GPU Best Practices Developer Guide 
链接：https://developer.arm.com/documentation/101897/0301?lang=en。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor GPU 
 User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0104 MT8668_Hypervisor_I2C_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_I2C_User_Manual_CN_V1.0.pdf

SHA-256：3f04bd3f157ad1b1754b3f294cf10fa4cafa94340b4099fab097fc70c5ce8def

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0104.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Hypervisor I2C  
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 李英豪 正式版 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 I2C ············································································································································································· 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 名词解释 ······················································································································································ 5 
1.2 架构/流程概述 ························································································································································ 5 
 I2C 介绍 ························································································································································ 6 
 MT8668 I2C 功能 ·········································································································································· 6 
 I2C 传输格式 ················································································································································ 6 
 I2C 传输流程 ················································································································································ 7 
1.3 配置/客制化指南 ···················································································································································· 7 
 设备树 ·························································································································································· 7 
 频率 ······························································································································································ 8 
 中断配置说明 ·············································································································································· 8 
 虚拟化配置方法 ·········································································································································· 8 
 节点配置 ······················································································································································ 9 
 特殊应用需求的配置································································································································· 10 
1.4 常见问题/故障排除 ·············································································································································· 10 
 I2C 问题调试方法 ······································································································································ 10 
 DTS 配置 ····················································································································································· 10 
 确认 GPIO 模式 ·········································································································································· 11 
 测量波形 ···················································································································································· 11 
 如何打印 I2C 寄存器信息·························································································································· 11 
 寻求联发科技帮助 ···································································································································· 11 
附件一 附加条款 ····························································································································································· 12 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
图片目录 
图 1-1. I2C Master 和 I2C Slave 之间的引脚连接 ····················································································································· 5 
图 1-2. I2C 传输格式 ································································································································································· 7 
图 1-3. I2C 传输流程 ································································································································································· 7 
 
表格目录 
表 1-1. 名词解释········································································································································································ 5 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
1 I2C 
1.1 概述 
 简单介绍 
本文档介绍 MT8668 I2C 控制器的硬件、软件及其功能。 
 名词解释 
表 1-1. 名词解释 
缩写 全称及释义 
DMA Direct Memory Access 直接内存访问 
FIFO First Input First Output 先进先出 
FM Fast Mode 快速模式 
FM+ Fast Mode Plus 快速模式+ 
GPIO General Purpose Inputs-Outputs 通用输入输出 
HS mode High Speed Mode 高速模式 
I/O Input/Output 输入/输出 
I2C Inter-IC 互连集成电路 
SCL Serial Clock Line 串行时钟线 
SDA Serial Data Line 串行数据线 
SM Standard Mode 标准模式 
 
1.2 架构/流程概述 
图 1-1. I2C Master 和 I2C Slave 之间的引脚连接 
 
I2C 
Master 
 
SCL 
SDA 
 
 
SCL 
SDA 
 
 
I2C 
Slave 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
 I2C 介绍 
I2C 控制器是一种双向、双线串行接口，利用串行时钟线（SCL）和串行数据线（SDA） 信号。这些信号可由 I2C 中
的主设备或从设备驱动。此通用控制器支持主设备角色并符合 I2C 规范。 
 MT8668 I2C 功能 
• Start, repeated start and stop conditions generation 
• Bus detection 
• Acknowledge bit generation and detection 
• 7-bit/10-bit addressing 
• Clock stretching 
• Active drive/wired-and I/O configuration 
• I2C has four operating speeds: 
– I2C Standard mode (SM) with speed up to 100 kbit/s 
– I2C Fast mode (FM) with speed up to 400 kbit/s 
– I2C Fast mode Plus (FM+) with speed up to 1 Mbit/s 
– I2C High Speed (HS) mode with speed up to 3.4 Mbit/s 
• Adjustable clock speed for SM/FM/FM+/HS mode operation 
• FIFO mode and DMA mode  
• Multiple transfer formats: 
– Multi-write per transfer 
– Multi-read per transfer 
– Multi-transfer per transaction 
– Combined format transfer with length change capability 
– Combined format transfer with direction change capability 
– Multi-transfer with a repeated start condition  
 
 I2C 传输格式 
图 1-2 说明了 I2C 的 SM/FM/FM+ 使用的基本传输格式。 
首先，主机发送一个启动条件。随后，主机发送它打算与之通信的 I2C 从属设备的 7 位静态地址。一旦从属设备响
应寻址，主机就会发送/接收数据。数据传输完成后，主机发送停止条件，总线返回到自由状态。  
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
Slave Address AS DATA A P
Slave Address AS DATA nA P
Master Write
Master Read
 
图 1-2. I2C 传输格式 
 I2C 传输流程 
图 1-3 说明了虚拟化 I2C 的基本传输流程。 
 
图 1-3. I2C 传输流程 
 
1.3 配置/客制化指南 
 设备树 
源代码路径：src/kernel/linux/v-xx/arch/arm64/boot/dts/mediatek/xxxx.dts 
• 添加 I2C pin 以设置 I2C pinmux 
&pio { 
 i2c2_pins: i2c2-default { 
  pins-bus { 
   pinmux = <PINMUX_GPIO188__FUNC_SCL2>, 
    <PINMUX_GPIO189__FUNC_SDA2>; 
   bias-pull-up = <MTK_PULL_SET_RSEL_111>; 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
  }; 
 };  
}; 
 
• 在 I2C 总线上添加从设备 
&i2c2 { 
 status = "okay"; 
 pinctrl-names = "default"; 
 pinctrl-0 = <&i2c2_pins>; 
 
 nxp_eusb2_repeater_p2: nxp-eusb2-repeater-p2@4f { 
  compatible = "mtk,nxp-eusb2-repeater"; 
  pinctrl-names = "enable", "disable"; 
  pinctrl-0 = <&ptn3222_enable_p2>; 
  pinctrl-1 = <&ptn3222_disable_p2>; 
  reg = <0x4f>; 
  #phy-cells = <0>; 
  status = "okay"; 
 }; 
}; 
 
 频率 
I2C 控制器支持 100K、400K、1M 等频率。 
您可以通过 DTS 设置clock-frequency = <xxxxx>;： 
&i2c2 { 
 status = "okay"; 
 pinctrl-names = "default"; 
 pinctrl-0 = <&i2c2_pins>; 
 clock-frequency = <400000>; 
}; 
 
 中断配置说明 
MT8668 Hypervisor I2C 若是以中断 passthrough 的方式使用，则中断默认送到 Yocto 一侧，如果将中断配置到
Android 侧，则 Yocto 侧无法使用中断。如果您希望以这种方式修改 I2C 中断，请向联发科技寻求协助。 
 
 虚拟化配置方法 
源代码路径：src/kernel/linux/v-xx/arch/arm64/boot/dts/mediatek/xxxx.dts 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
• 虚拟化 I2C 总线节点 
i2c0_virtio:i2c0-virtio{ 
 compatible = "mediatek,virtio-i2c"; 
 id = <0>; 
 status = "disabled"; 
}; 
 
i2c1_virtio:i2c1-virtio{ 
 compatible = "mediatek,virtio-i2c"; 
 id = <0>; 
 status = "disabled"; 
}; 
 
i2c2_virtio:i2c2-virtio{ 
 compatible = "mediatek,virtio-i2c"; 
 id = <0>; 
 status = "disabled"; 
}; 
 
• 在虚拟化 I2C 总线上添加从设备 
&i2c2_virtio { 
 status = "okay"; 
 
 nxp_eusb2_repeater_p2: nxp-eusb2-repeater-p2@4f { 
  compatible = "mtk,nxp-eusb2-repeater"; 
  pinctrl-names = "enable", "disable"; 
  pinctrl-0 = <&ptn3222_enable_p2>; 
  pinctrl-1 = <&ptn3222_disable_p2>; 
  reg = <0x4f>; 
  #phy-cells = <0>; 
  status = "okay"; 
 }; 
}; 
 
 节点配置 
默认需要将 master 节点的 status 配置成 “disabled” 
i2cX: i2c@xxxx { 
 compatible = "mediatek,mt6897-i2c"; 
 .... 
 status = "disabled"; 
  }; 
 
使用哪个项目，就将其子节点的 status 配置成 “okay” 
&i2cX { 
 status = "okay"; 
}; 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
 特殊应用需求的配置 
有功耗需求，需要将 I2C 进 suspend 配置成低电平时相关方法如下: 
&i2cX { 
 status = "okay"; 
 pinctrl-names = "default", "sleep"; 
 pinctrl-0 = <&i2cX_default>; 
 pinctrl-1 = <&i2cX_sleep>; 
}; 
 
&pio { 
 i2cX_default: i2cX-pins-default { 
  pins-bus { 
   pinmux = <PINMUX_GPIOxxx__FUNC_SCLX>, 
    <PINMUX_GPIOxxx__FUNC_SDAX>; 
   bias-pull-up = <MTK_PULL_SET_RSEL_111>; 
  }; 
 }; 
 
 i2c3_sleep: i2c3-pins-sleep { 
  pins-bus { 
   pinmux = <PINMUX_GPIOxxx__FUNC_SCLX>, 
    <PINMUX_GPIOxxx__FUNC_SDAX>; 
   bias-pull-down = <MTK_PULL_SET_RSEL_111>; 
  }; 
 }; 
} 
(此方法只针对使用内部上拉的配置方法，外部上拉需要通过控制外部上 拉的供电实现此功能) 
 
1.4 常见问题/故障排除 
 I2C 问题调试方法 
大多数遇到的 I2C 问题都可先尝试通过如下方式调试： 
• 检查 salve device 初始化，供电是否正常 
• 检查 DTS 配置、GPIO 模式属性是否正确 
• 检查 I2C 寄存器信息是否正确（可以提供 log 给 RD） 
 
 DTS 配置 
请按照前文的提供的信息，检查 DTS 配置是否正确。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
 确认 GPIO 模式 
内核里查看引脚的状态： 
输入以下命令: 
# cd /sys 
# find –name mt_gpio 
# cat mt_gpio // 
 
要输入绝对路径： 
例如： 
# cat /sys/devices/platform/soc/1000b000.pinctrl/mt_gpio 
PIN: [MODE] [DIR] [DOUT] [DIN] [PULL_EN] [PULL_SEL] [IES] [SMT] [DRIVE] ( [R1] [R0] ) 
0: 0 0 0 0 1 0 1 0 0 
1: 0 0 0 0 1 0 1 0 0 
2: 0 1 1 1 1 0 1 0 0 
3: 6 0 0 0 1 0 1 0 0 
 
 测量波形 
使用示波器测量 I2C 波形是否符合预期。 
 如何打印 I2C 寄存器信息 
在driver/i2c/busses/i2C-mt65xx.c 中添加如下内容： 
static void i2c_dump_register(struct mtk_i2c *i2c) 
{ 
 dev_dbg(i2c->dev, "SLAVE_ADDR: 0x%x, INTR_MASK: 0x%x\n", 
  mtk_i2c_readw(i2c, OFFSET_SLAVE_ADDR), 
  mtk_i2c_readw(i2c, OFFSET_INTR_MASK)); 
 dev_dbg(i2c->dev, "INTR_STAT: 0x%x, CONTROL: 0x%x\n", 
  mtk_i2c_readw(i2c, OFFSET_INTR_STAT), 
  mtk_i2c_readw(i2c, OFFSET_CONTROL)); 
将 dev_dbg 改为 dev_err。 
 
 寻求联发科技帮助 
若经过前文的排查仍无法解决您的问题，向联发科技寻求帮助时顺便提供前文提到的包含 I2C 寄存器信息的相关日
志、波形图、DTS、cat mt_gpio 等信息。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Hypervisor I2C 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
 
 
 
  
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0105 MT8668_Hypervisor_OP-TEE_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_OP-TEE_User_Manual_CN_V1.0.pdf

SHA-256：d2f773042f681c31555a701c96f0df9195563c144d33a2d42574e3143f93103d

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0105.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Hypervisor OP-TEE 
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 陈琰 正式版  
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 概述 ··········································································································································································· 5 
1.1 TrustZone 功能简介 ················································································································································· 5 
1.2 OP-TEE 简介 ····························································································································································· 7 
2 OP-TEE 框架和功能 ··················································································································································· 9 
2.1 开启虚拟化后 OP-TEE 核心组件 ···························································································································· 9 
2.2 MediaTek 平台 OP-TEE 开启方式 ························································································································· 12 
2.2.1 Yocto Branch ··············································································································································· 12 
2.2.2 Android Branch ··········································································································································· 13 
2.3 安全存储机制 ························································································································································ 13 
2.3.1 REE 文件系统 ············································································································································· 14 
2.3.2 RPMB 文件系统 ·········································································································································· 15 
2.4 CA 和 TA 介绍 ························································································································································ 16 
3 基于 OP-TEE 的应用开发 ········································································································································ 18 
3.1 编写 CA 和 TA 所依赖的 GP API···························································································································· 18 
3.2 示例程序 ································································································································································ 19 
3.2.1 CA 文件 ······················································································································································· 19 
3.2.2 TA 文件 ······················································································································································· 21 
3.3 编译和运行 ···························································································································································· 22 
3.3.1 Yocto 域 ······················································································································································ 22 
3.3.2 Android 域 ·················································································································································· 25 
4 OP-TEE 的测试与调试 ············································································································································· 28 
4.1 OP-TEE 的自测方式 ··············································································································································· 28 
4.2 OP-TEE 相关 Log 介绍 ··········································································································································· 29 
4.2.1 User Space ·················································································································································· 29 
4.2.2 Linux Kernel ················································································································································· 30 
4.2.3 Secure World ··············································································································································· 30 
4.3 OP-TEE 常见异常与分析 ······································································································································· 31 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
5 替换 OP-TEE TA 的签名与验签密钥 ························································································································ 33 
5.1 OP-TEE TA 签名验签简介 ······································································································································ 33 
5.2 准备工作 ································································································································································ 33 
5.3 替换 OP-TEE 镜像中的验证密钥 ·························································································································· 34 
5.4 替换私钥 ································································································································································ 35 
5.4.1 Yocto 侧替换私钥 ······································································································································· 35 
5.4.2 Android 侧替换私钥 ·································································································································· 35 
5.5 重新签名 TA ··························································································································································· 35 
5.5.1 Yocto 侧重新签名 TA ·································································································································· 36 
5.5.2 Android 侧重新签名 TA ······························································································································ 36 
5.6 验证方式 ································································································································································ 37 
6 附录 ········································································································································································· 38 
6.1 参考文档 ································································································································································ 38 
附件一 附加条款 ····························································································································································· 39 
 
 
图片目录 
图 1-1. 普通世界和可信世界 ···················································································································································· 5 
图 1-2. Arm 异常等级划分 ························································································································································ 6 
图 1-3. 预留的 TEE OS memory ················································································································································· 7 
图 1-4. OP-TEE 架构 ··································································································································································· 8 
图 2-1. 非虚拟化下 OP-TEE 的组成 ········································································································································ 10 
图 2-2. 虚拟化下 OP-TEE 的构成 ············································································································································ 11 
图 2-3. 基于 OP-TEE 的安全存储 ············································································································································ 14 
图 4-1. OP-TEE log 示例 ··························································································································································· 31 
 
表格目录 
表 4-1. xtest 测项 ····································································································································································· 28 
表 5-1. MTK Android 测 TA 说明 ············································································································································· 36 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
1 概述 
该文档介绍了 OP-TEE 的功能、结构设计、各组件的组成、如何编写 CA 和 TA，以及如果自测，如何 Debug。 
本文档的章节安排为： 
第 1 章为概述，介绍 TrustZone 的 OP-TEE 的基本概念。 
第 2 章介绍 OP-TEE 的框架和功能。 
第 3 章介绍如何开发基于 OP-TEE 的应用。 
第 4 章为测试和调试，包含 OP-TEE OS 本身，以及 TA 的调试方式。 
第 5 章介绍了如何替换 OP-TEE TA 的签名与验签秘钥。 
第 6 章为附录，列举了参考文件。 
 
1.1 TrustZone 功能简介 
TrustZone 是 Arm A-profile 架构中的安全架构名称。TrustZone 提供了两个执行环境，并在它们之间通过系统范围的
硬件强制隔离，如 Error! Reference source not found.所示： 
 
Error! Reference source not found.为普通世界和可信世界的示意图。普通世界运行一个丰富的软件栈。这个软件栈
通常包括大量的应用程序集、一个复杂的操作系统（如 Linux），以及一个可能的虚拟机监控器。这样的软件栈庞
大且复杂。尽管可以采取措施提高其安全性，但由于攻击面较大，它们更容易受到攻击。可信世界运行一个更小
且更简单的软件栈，称为可信执行环境（TEE）。通常，TEE 包括由轻量级内核托管的几个可信服务。可信服务提
供诸如密钥管理等功能。这个软件栈的攻击面显著较小， 由于这个软件栈的攻击面显著较小，因此其脆弱性也大
大减少。 
 
图 1-1. 普通世界和可信世界 
      
      
       
       
          
                
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
 
 
Armv8 和 v9 将 CPU 分为 4 种异常等级，分别是 EL0，EL1，EL2 和 EL3。 
在 EL0、EL1 和 EL2 级别，处理器可以处于安全状态或非安全状态，这由 SCR_EL3.NS 位控制。通常会看到如下写
法： 
NS-EL1: 非安全状态，异常级别 1 
S-EL1: 安全状态，异常级别 1 
EL3 始终处于安全状态，无论 SCR_EL3.NS 位的值如何。 
 
安全状态和异常级别的安排如图 1-2 所示： 
 
图 1-2. Arm 异常等级划分 
 
Arm 为了保证 TrustZone 的安全性，提供了一些列的硬件隔离技术，包含中断隔离，片上 RAM/ROM 隔离，片外
RAM/ROM 隔离，外围设备的硬件隔离，外部 RAM 和 ROM 的隔离等。Arm 提供的隔离技术可以参阅 Arm 的技术
文档，在此不再赘述。 
MediaTek 提供了功能更加强大的内存保护单元 (SMPU) 保证 TrustZone 所在的内存区域只能被安全的 CPU 访问，阻
止非安全的 CPU，以及各种外设通过各种方式访问 TrustZone 所在的内存区间。 
 
          
             
      
             
   
   
   
      
       
      
       
          
                            
                
          
                        
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
图 1-3. 预留的 TEE OS memory 
 
图 1-3 是预留的 TEE memory 和 SMPU 保护这段 reserverd memory 的示例图。这段 memory 只允许 Secure CPU 访
问，即对应前文，只有 CPU 处在 S-EL0，S-EL1 或 EL3 时才可以访问;其他场景，例如 user space 程序，Linux Kernel
程序，hypervisor 程序都无权访问此段 memory。 
 
1.2 OP-TEE 简介 
OP-TEE 是一个开源的 Secure OS。图 1-4 是 OP-TEE 官方提供的架构图。 
OP-TEE 内核是运行在 S.EL1 和 S.EL0 中的可信应用程序。可信应用程序通过 TEE 内部 API 与 OP-TEE 内核通信。TEE 
内部 API 是由 GlobalPlatform 组织开发的标准 API。GlobalPlatform 致力于开发标准 API，这些 API 不仅支持 OP-TEE，
还支持许多不同的 TEE。采用 GP 标准意味着在其他支持 GP 接口的 TEE 应用可以方便地移植到 OP-TEE 上，反之亦
然，为 OP-TEE 设计的 TEE 应用也可以方便地移植到其他支持 GP 接口的 TEE 上。 
 
在非安全状态下，内核空间中有一个 OP-TEE 驱动程序。它负责处理与 OP-TEE 内核的低级别通信。 
在非安全用户空间（EL0）中，有一个用户空间库 (libopenteec.so) 实现了 GlobalPlatform API。TEE Client API 是应用
程序用来访问 TA（可信应用程序）的接口。 
OP-TEE 还包括一个称为 tee-supplicant 的组件。tee-supplicant 处理 OP-TEE 需要返回到 REE world 处理的事务，比如
从文件系统中加载 UTA，再比如 TEE 安全存储功能需要把加密后的数据保存在 Flash 或者 RPMB 中，但 TEE 本身无
法读写 flash 或 RPMB，需要切回 REE，通过 tee-supplicant 完成读写。 
0x40000000 
50MB 
(0x3200000) 
Secure OS 
raw 
Reserved secure DRAM 
size 
boot_addr: 
0x7100_0000 
SMPU Protection 
Secure OS reserved memory: 
0x3200000 (50MB) 
end_addr: 
0x741F_FFFF 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
图 1-4. OP-TEE 架构 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
2 OP-TEE 框架和功能 
2.1 开启虚拟化后 OP-TEE 核心组件 
在章节 1.2 中我们简单提到了 OP-TEE 的构成，本章主要介绍开启虚拟化后 OP-TEE 的构成。 
 
图 2-1 是未开启虚拟化时 OP-TEE 的组成，各组件分别为： 
• Tee-supplicant：TEE 守护进程处理 load UTA，secure storage 读写等需要切回 REE 执行的事务 
• libopenteec.so：提供 Client 端 GP API，CA 与 TA 通讯时使用 
• OP-TEE Linux Driver：提供 shared memory 等 API，执行 SMC，与 Secure World 通讯 
• OP-TEE OS：OPTEE Kernel 层提供的所有功能 
• PTA（Pseudo Trusted Applications）：提供 CA 或 UTA 可以调用的 API，一些系统服务会以 PTA 的方式提供，PTA
运行在 OP-TEE Kernel 层，与 OP-TEE OS 打包在一起 
 
基于 OP-TEE 的应用：CA & TA 为运行在 OP-TEE 上的应用 
• CA（Client Agent）：运行在 REE（非安全世界） 
• TA（Trusted App）：运行在 TEE（安全世界），需要受保护的操作和密钥可以放于 TA 中 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
图 2-1. 非虚拟化下 OP-TEE 的组成 
 
未开启虚拟化时，OP-TEE 的初始化在 ATF 跳转 BL32 时进行。 
 
当开启 OP-TEE 虚拟化之后，OP-TEE 会在 TEE 内，为每一个 Host VM，创建一个对应的 OP-TEE 的 VM。 
如图 2-2 所示，我们的 L+L+A 架构包含两个 Linux 的虚拟机和一个 Android 的虚拟机，分别为 
• SOS（Linux 虚拟机） 
• UOS（Android 虚拟机） 
• UOS（Linux 虚拟机） 
 
开启虚拟化后，ATF 跳转 BL32 做初始化时，只会初始化 OP-TEE nexus core 层。 
在每个虚拟机创建之前，Hypervisor 层会发送 SMC command（OPTEE_SMC_VM_CREATED）至 OP-TEE，创建出对应
的 OP-TEE 虚拟机，并在预先分配好的安全内存中初始化 OP-TEE VM 所需的数据结构。 
REE 
Tee-supplicant 
OP-TEE Linux Driver 
OP-TEE OS 
ATF 
EL3 
EL1 
EL0 
TA-1 
TA-n 
PTA 
CA-1 
TEE 
Mem for TEE 
CA-n 
libopenteec.so 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
SOS（Linux 虚拟机）的 TEE 请求会进入到 OP-TEE-VM1 中，OP-TEE-VM1 通过 RPC 或者 RET 返回到 REE 时，也会回
到 SOS 域 
UOS（Android 虚拟机）同理，请求会进入到 OP-TEE-VM2，从 TEE 返回时返回到 UOS（A） 
UOS（Linux 虚拟机）同理。 
OP-TEE-VM1/VM2/VM3 在物理内存上是完全隔离的，互不影响。 
 
 
图 2-2. 虚拟化下 OP-TEE 的构成 
 
 
 
 
Hypervisor 
REE 
EL2 
SOS 
Tee-
supplicant 
OP-TEE 
OP-TEE 
 OP-TEE 
 OP-TEE 
ATF 
EL3 
UOS(A) 
 UOS(L) 
 VM1 
 VM2 
 VM3 
EL3 
EL1 
EL0 
TA-1 
TA-n 
TA-2 
 TA-3 
Tee-
supplicant 
OP-TEE 
Tee-
supplicant 
OP-TEE 
CA1 
TEE 
Mem for TEE VM3 
Mem for TEE VM2 
Mem for TEE VM1 
OP-TEE nexus core 
libopenteec.so 
 libopenteec.so 
 libopenteec.so 
CAn
N 
CA2 
 CA3 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
2.2 MediaTek 平台 OP-TEE 开启方式 
若需要开启或关闭 OP-TEE，需同时修改 Yocto 和 Android branch。下面分别介绍 Yocto branch 和 Android branch 需
要做哪些改动。 
2.2.1 Yocto Branch 
请先检查如下目录存在；若如下目录不存在，则表示 release 不完全，需联系 MediaTek 处理。 
• src/bsp/trustzone/optee/4.7.0/optee_client 
• src/bsp/trustzone/optee/mtk_ext/client 
• src/bsp/trustzone/optee/mtk_driver/secure_driver_spmlib 
• src/bsp/trustzone/optee/mtk_ext/os_spmlib 
• src/bsp/trustzone/optee/mtk_ext/plat_spmlib 
• prebuilt/bsp/trustzone/optee/4.7.0/optee_os 
 
确认一下目录都存在后，下面是 OP-TEE 的 config 配置方法： 
Yocto branch 与 OP-TEE 相关的 Config 有两个，功能分别是： 
TEE_SUPPORT：表示支援哪种 TEE，填入“optee”表示开启 OP-TEE。 
TEE_TEST_SUPPORT：表示是否需要在编译时打包 OP-TEE 测试工具 xtest，此 config 只针对 OP-TEE 有效，默认为开
启。 
 
定义的位置在 Yocto 的 conf 文件，公版参考的路径为 
meta/meta-mediatek-mt8668-hyp/conf/machine/{PROJECT_NAME}.conf 
(PROJECT_NAME 需替换成您使用的Yocto project，例如auto8668p1_64_sos) 
请客户根据自己的 project，选择对应的位置修改。 
 
若需要开启 OP-TEE，请将 config 设定为： 
TEE_SUPPORT = "optee" 
 
若需要关闭 OP-TEE，请将 config 设定为： 
TEE_SUPPORT = "none" 
 
若需要开启 OP-TEE，请将 Kernel dts 中 OP-TEE 节点的 disabled status 删除或者改为 okay status： 
optee { 
 status = "okay"; 
} 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
2.2.2 Android Branch 
请先检查如下目录存在；若如下目录不存在，则表示 release 不完全，需联系 MediaTek 处理 
• vendor/mediatek/proprietary/trustzone/optee/4.7.0/optee_client 
• vendor/mediatek/proprietary/trustzone/optee/mtk_ext/client 
• vendor/mediatek/proprietary/trustzone/optee/mtk_driver/secure_driver_spmlib 
• vendor/mediatek/proprietary/trustzone/optee/mtk_ext/os_spmlib 
• vendor/mediatek/proprietary/trustzone/optee/mtk_ext/plat_spmlib 
• vendor/mediatek/proprietary/trustzone/optee/4.7.0/optee_os_spmlib 
 
Android branch 与 OP-TEE 相关的 config 有两个，分别的功能是 
MTK_OPTEE_SUPPORT：Vendor 层是否打开 OP-TEE，若打开，则会把 OP-TEE 的 binary 打包进 tee.img。 
MGVI_MTK_OPTEE_SUPPORT：HAL 层 config，此 config 不会影响 OP-TEE 的开启或关闭，但 Android 域基于 OP-TEE
的 feature 可能会基于这个 config 判断自身的开启和关闭，故建议一并开启。 
开启的位置为： 
MTK_OPTEE_SUPPORT 在 ProjectConfig.mk 中 
MediaTek 公版示例文件路径为： 
device/mediateksample/{PROJECT_NAME}/ProjectConfig.mk 
(PROJECT_NAME 需替换成您使用的 Android project，例如 auto8668p1_64_vm_uos) 
MGVI_MTK_OPTEE_SUPPORT 定义在 VendorConfig.mk 中， 
MediaTek 公版示例文件路径为: 
device/mediatek/vendor/{PROJECT_NAME}/VendorConfig.mk 
(PROJECT_NAME 需替换成您使用的 Android mgvi project，例如 mgvi_auto_64_armv82_wifi_vm_uos) 
若开启 OP-TEE，则将这两个 config 值为 yes 
MTK_OPTEE_SUPPORT = yes 
MGVI_MTK_OPTEE_SUPPORT = yes 
 
若需要关闭 OP-TEE，将这两个 config 置为 no，或者直接删除这两个 config 的定义皆可。 
Kernel 部分所需修改与 Yocto 相同，请参考上节内容，用同样的方法打开 Android 域 Kernel 层 OP-TEE。 
2.3 安全存储机制 
在 OP-TEE 中，安全存储是根据 GlobalPlatform 的 TEE Core API 定义实现的。该规范要求必须能够存储通用数据和密
钥材料，并保证存储数据的机密性和完整性，以及修改存储的操作的原子性（这里的原子性意味着整个操作要么
成功完成，要么不进行任何写入）。 
 
目前在 OP-TEE 中有两种安全存储实现。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
2.3.1 REE 文件系统 
使用外部（非安全）文件系统来存储加密的数据。这种方式依赖于正常世界（ Normal World）的文件系统，但所有
的敏感操作（如加密和解密）都在安全世界（Secure World）内完成。其实现原理请参阅图 2-3。 
 
图 2-3. 基于 OP-TEE 的安全存储 
 
OP-TEE 默认支持此种方式的安全存储。 
注意： 
• 使用 REE FS 形式的安全存储保存的数据，会保存在对应 VM 的文件系统中，用户或程序无法在 REE 测读取到文件的内容，
但有读写权限的用户或程序可能篡改或删除此文件。 
 
Yocto 域默认存储位置为：/var/lib/tee 或/data/vendor/tee 
若想修改此路径，方式为： 
Yocto branch 上找到 
meta/meta-mediatek/recipes-bsp/trustzone/optee-client_4.7.0.bb 
修改 CFG_TEE_FS_PARENT_PATH的定义。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
Android 域默认存储路径为：/data/vendor/tee 
若想修改此路径，方式为： 
Android branch 上找到 
vendor/mediatek/proprietary/trustzone/optee/4.7.0/optee_clent/Android.mk 
修改 CFG_TEE_FS_PARENT_PATH的定义。 
注意： 
• 请读者根据需求修改此目录，修改时请留意 tee-supplicant 是否有权限创建目录；目录所在分区是否会因重启或者恢复出厂
设置而被重置。 
 
2.3.2 RPMB 文件系统 
基于 RPMB 的安全存储，数据加解密方式与 REE FS 方式类似，只是存储介质由普通文件系统变为存储在 UFS（或
eMMC）附带的 RPMB 区域，利用 RPMB 的防篡改和防重放特性，提供更高的安全性。存储原理与图 2-3 类似，只
是将左下角的 “Linux File System” 替换成 RPMB 的 driver。 
若想在虚拟化的项目上支持基于 RPMB 的安全存储，需要 UFS 硬件支持多个 RPMB region（例如需要 UFS3.0 及以上
版本，eMMC 不支持），因此此种存储方式并不是默认支持的，需联系 MediaTek 确认此方式在您的硬件上是否支
持。 
 
在编写 TA 程序时，需通过参数指定，将数据存储与 REE 文件系统和 RPMB 文件系统实现。 
定义了两个 OP-TEE 特定的存储标识符：TEE_STORAGE_PRIVATE_REE 和 TEE_STORAGE_PRIVATE_RPMB。 
TEE_STORAGE_PRIVATE_REE 表示将数据保存于 REE 文件系统； 
TEE_STORAGE_PRIVATE_RPMB 表示将数据保存于 RPMB 文件系统。 
 
注意： 
• 无论是 REE FS 还是 RPMB 存储方式，各个 VM 存储的数据不互通；即由哪个域写入，就只能从哪个域读取。 
 
在平台上执行 xtest 6001 测项，可以判断中平台上安全存储功能是否正常。 
* regression_6001 Test TEE_CreatePersistentObject 
 o regression_6001.1 Storage id: 00000001 
   regression_6001.1 OK 
 o regression_6001.2 Storage id: 80000000  -> REE FS 方式的安全存储 
   regression_6001.2 OK 
 o regression_6001.3 Storage id: 80000100  -> RPMB 方式的安全存储 
   regression_6001.3 OK 
   regression_6001 OK 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
若执行 xtest 6001 测试时，没有执行 regression_6001.3 测项，则说明当前设备并不支持 RPMB，不支持的原因可能
是 RPMB key 未烧录，或软硬件环境不满足需求；若确定有 RPMB 需求，请联系 MediaTek 做进一步排查。 
有关 xtest 如何执行，可以参阅本文章节 4.1。 
 
2.4 CA 和 TA 介绍 
在 OP-TEE 中，CA 通常指的是"Client Application"（客户端应用程序）。CA 是运行在普通世界（REE，Rich Execution 
Environment）中的应用程序，它与运行在受信世界（TEE，Trusted Execution Environment）中的受信应用程序
（TA，Trusted Application）进行通信。CA 通过调用 TEE API 来请求 TA 执行安全操作。 
 
以下是 CA 和 TA 之间的基本交互流程： 
1. CA 启动：客户端应用程序在普通世界中启动。 
2. 初始化 TEE 会话：CA 通过 TEE API 初始化与 TA 的会话。 
3. 发送命令：CA 向 TA 发送命令请求，要求 TA 执行特定的安全操作。 
4. TA 处理请求：TA 在受信世界中处理请求，并返回结果。 
5. 接收结果：CA 接收 TA 返回的结果，并根据需要进行处理。 
6. 关闭会话：操作完成后，CA 关闭与 TA 的会话。 
 
用户可根据需求，在 user space 或 Kernel space 编写 CA。 
 
在 OP-TEE 中，TA 指 “Trusted Application”(可信应用)。OP-TEE 支持三种类型的可信应用（TA），分别是用户模式
可信应用（UTA）、静态可信应用（PTA，也称为 Pseudo TA）和早期用户模式可信应用（Early UTA）。这些应用类
型在功能、执行时机和运行环境方面有所不同。下面是它们的主要区别：  
1. 用户模式可信应用（UTA） 
• 运行环境：UTA 在用户模式下运行，与操作系统的内核模式相对立。这意味着它们在一个隔离的环境中执行，
提供了更高的安全性。 
• 部署方式：UTA 通常作为单独的应用程序部署，可以通过安全存储进行加载和管理。  
• 用途：UTA 适用于处理高度敏感的数据或执行安全关键的任务，如加密操作、密钥管理等。  
 
2. 静态可信应用（PTA） 
• 运行环境：PTA 在 TEE 内核模式下运行，与 UTA 相比，它们有更高的权限和更直接的访问 TEE 核心服务的能
力。 
• 部署方式：PTA 通常是在 TEE 操作系统构建时静态集成的，不是作为独立应用程序加载的。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
• 用途：PTA 用于实现一些需要更高权限访问 TEE 资源的功能，如管理和控制 TEE 内部的其他组件或服务。 
 
3. 早期用户模式可信应用（Early UTA） 
• 运行环境：Early UTA 也在用户模式下运行，但它们在系统启动的早期阶段被加载和执行。  
• 部署方式：与普通的 UTA 相似，但它们在 TEE 初始化过程中较早启动，用于处理启动早期阶段的安全任务。  
• 用途：Early UTA 通常用于执行系统启动过程中的安全检查或配置，如验证启动配置的完整性或早期硬件资源的
安全配置。 
 
注意： 
• 目前基于 MediaTek 平台的 OP-TEE 只支持开发 UTA，若有 PTA 或 Early UTA 的开发需求，请联系 MediaTek。 
 
UTA 会放置在文件系统上， 
Yocto 域的路径是/lib/optee_armtz/。 
Android 域的路径是/vendor/lib/optee_armtz/。 
若一个 TA 在 Yocto 域和 Android 域都需要，您需要在每个域的文件系统上都放置一份。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
3 基于 OP-TEE 的应用开发 
在 Yocto 域和 Android 域都支持 OP-TEE，且 Yocto 域和 Android 域所需的 API 都是一样的。 
这意味着 Yocto 域和 Android 域的 CA/TA 代码可以完全一样。 
如果您的程序需要运行在 Yocto 域，需要将 CA 和 TA 的执行文件打包进 Yocto 域的文件系统， 
Android 域同理，若需要运行于 Android 域，也需要将执行文件打包进 Android 域的文件系统。 
 
3.1 编写 CA 和 TA 所依赖的 GP API 
OP-TEE 支持 GP (GlobalPlatform) API，意味着您的 CA/TA 程序可以方便的在其他支持 GP API 的 TEE OS 上进行快速移
植。关于 GP API 的资料，您可以自行查阅互联网上的资料。 
 
CA 侧使用的 GP API 以 TEEC 开头，您可以在如下头文件中找到相关定义
${PATH}/optee/4.7.0/optee_client/libteec/include/tee_client_api_extensions.h 
其中，Yocto branch 上的路径为：src/bsp/trustzone 
Android branch 上的路径为：vendor/mediatek/proprietary/trustzone 
 
CA 端负责与 TEE 通讯的 API 主要是以下五个 API： 
1. TEEC_Result TEEC_InitializeContext( 
    const char* name, 
    TEEC_Context* context) 
 
2. void TEEC_FinalizeContext( 
    TEEC_Context* context) 
 
3. TEEC_Result TEEC_OpenSession ( 
    TEEC_Context* context, 
    TEEC_Session* session, 
    const TEEC_UUID* destination, 
    uint32_t connectionMethod, 
    const void* connectionData, 
    TEEC_Operation* operation, 
    uint32_t* returnOrigin) 
 
4. void TEEC_CloseSession ( 
    TEEC_Session* session) 
 
5. TEEC_Result TEEC_InvokeCommand( 
    TEEC_Session* session, 
    uint32_t commandID, 
    TEEC_Operation* operation, 
    uint32_t* returnOrigin) 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
CA 端与共享内存操作有关的 API 是如下三个： 
1. TEEC_Result TEEC_RegisterSharedMemory(TEEC_Context *context, 
TEEC_SharedMemory *sharedMem); 
 
2. TEEC_Result TEEC_AllocateSharedMemory(TEEC_Context *context, 
TEEC_SharedMemory *sharedMem); 
 
3. void TEEC_ReleaseSharedMemory(TEEC_SharedMemory *sharedMemory); 
 
GP 在 TEE 内的 API 以 “TEE_“ 开头，涉及到 TEE 内的各种操作，例如加解密操作，安全文件读写等，请参阅 GP
相关文档，这里不再赘述。 
编写一个 TA，必须实现以下五个 API。 
1. TEE_Result TA_CreateEntryPoint(void) 
 
2. void TA_DestroyEntryPoint(void) 
 
3. _Result TA_OpenSessionEntryPoint(uint32_t param_types, 
TEE_Param __maybe_unused params[4], void __maybe_unused **sess_ctx) 
 
4. void TA_CloseSessionEntryPoint(void __maybe_unused *sess_ctx) 
 
5. TEE_Result TA_InvokeCommandEntryPoint(void __maybe_unused *sess_ctx, 
uint32_t cmd_id, uint32_t param_types, TEE_Param params[4]) 
 
接下来我们结合一个示例程序讲解如何编写一个最简单的 CA 和 TA。 
 
3.2 示例程序 
MediaTek 撰写了一份 sample code，讲解如何写一个简单的 demo 程序，这份 sample code 可同时用于 Yocto 域和
Android 域。如果有需要全部源码文件，可联系 MediaTek 获取。 
本章会基于 MediaTek 的 demo code 做讲解。 
3.2.1 CA 文件 
CA 部分的开发主要是对章节 3.1 介绍的 TEE Client API 的使用，包括如何初始化上下文，如何打开/关闭会话，以及
如何使用不同的参数类型进出 TA。可参考该 demo 的调用流程进行 CA 的开发。 
 
如下是初始化、销毁 TEE 上下文和打开、关闭会话的流程，如果没有多实例 TA 并发的需求，建议参考 demo，使
用全局变量控制上下文和会话数量为单个。 
static TEEC_Session g_stTeecSession = {0}; 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
static TEEC_Context g_stTeecContext = {0}; 
static bool g_bIsTeecInitialized = false; 
 
TEEC_Result initTzContext() 
{ 
const       TEEC_UUID stTeecUuid = {0xa60589fd, 0x0158, 0x40eb, {0xa7, 0x74, 0xa3, 0x98, 
0xb1, 0xd6, 0x98, 0x32}}; 
TEEC_Result u32TeecResult        = TEEC_ERROR_GENERIC; 
uint32_t    u32RetOrig           = 0; 
 
if (true == g_bIsTeecInitialized) 
{ 
u32TeecResult = TEEC_SUCCESS; 
goto exit; 
} 
 
u32TeecResult = TEEC_InitializeContext(NULL, &g_stTeecContext); 
if (TEEC_SUCCESS != u32TeecResult) 
{ 
DLOGE("TEEC_InitializeContext fail, %X", u32TeecResult); 
goto exit; 
} 
 
u32TeecResult = TEEC_OpenSession(&g_stTeecContext, &g_stTeecSession, 
&stTeecUuid,TEEC_LOGIN_PUBLIC, NULL, NULL, &u32RetOrig); 
if (TEEC_SUCCESS != u32TeecResult) 
{ 
TEEC_FinalizeContext(&g_stTeecContext); 
DLOGE("TEEC_OpenSession fail, %X, orig: %X", u32TeecResult, u32RetOrig); 
goto exit; 
} 
 
g_bIsTeecInitialized = true; 
exit: 
return u32TeecResult; 
} 
 
TEEC_Result uninitTzContext() 
{ 
TEEC_Result u32TeecResult = TEEC_ERROR_GENERIC; 
 
if (false == g_bIsTeecInitialized) 
{ 
u32TeecResult = TEEC_ERROR_GENERIC; 
DLOGE("Session not exist!"); 
goto exit; 
} 
 
TEEC_CloseSession(&g_stTeecSession); 
TEEC_FinalizeContext(&g_stTeecContext); 
 
u32TeecResult = TEEC_SUCCESS; 
g_bIsTeecInitialized = false; 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
exit: 
return u32TeecResult; 
} 
 
当 CA 发送命令到 TA 时，需要使用 TEEC_InvokeCommand 函数，该函数支持 CA 带不同类型的参数到 TA，如下以值
类型为例展示该函数的使用方法。 
TEEC_Result testValueParameter() 
{ 
TEEC_Result    u32TeecResult   = TEEC_ERROR_GENERIC; 
uint32_t       u32RetOrig      = 0; 
TEEC_Operation stTeecOperation = {0}; 
 
memset(&stTeecOperation, 0, sizeof(TEEC_Operation)); 
stTeecOperation.paramTypes = TEEC_PARAM_TYPES(TEEC_VALUE_INPUT, 
                TEEC_NONE, 
                TEEC_NONE, 
                TEEC_NONE); 
stTeecOperation.params[0].value.a = 0x11223344; 
stTeecOperation.params[0].value.b = 0x55667788; 
u32TeecResult = TEEC_InvokeCommand(&g_stTeecSession, E_DEMO_CMD_VALUE_INPUT_TEST, 
&stTeecOperation, &u32RetOrig); 
if ((TEEC_SUCCESS != u32TeecResult) || (TEEC_ORIGIN_TRUSTED_APP != u32RetOrig)) 
{ 
DLOGE("TEEC_InvokeCommand fail, result=%X, origin=%X", u32TeecResult, u32RetOrig); 
goto exit; 
} 
 
exit: 
return u32TeecResult; 
} 
 
3.2.2 TA 文件 
TA 部分实现了基于不同的命令标识来执行 CA 请求的各种操作，TA 的开发者要定义自己的 UUID，在 CA 调用
TEEC_OpenSession 时传入。同时该 demo 也在user_ta_header_defines.h 中将 TA 定义为单实例，即 TA 的二进
制在 OP-TEE 内存中只会存一份，不会多次加载。TA_STACK_SIZE 和 TA_DATA_SIZE则需要根据各 TA 的实现自行调整
大小。 
#define TA_UUID { 0xa60589fd, 0x0158, 0x40eb, {0xa7, 0x74, 0xa3, 0x98, 0xb1, 0xd6, 0x98, 
0x32} } 
 
TEE_Result TA_CreateEntryPoint(void) 
 
#define TA_FLAGS (TA_FLAG_SINGLE_INSTANCE | \ 
TA_FLAG_MULTI_SESSION \ 
) 
 
#define TA_STACK_SIZE  (2 * 1024) 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
#define TA_DATA_SIZE  (32 * 1024) 
 
当 TA 收到 CA 发送的命令时，即可根据命令标识来进行参数检查，并进行相应的功能实现。  
TEE_Result TA_InvokeCommandEntryPoint(void *pSessionContext, uint32_t nCommandID, uint32_t 
nParamTypes, TEE_Param pParams[4]) 
{ 
(void)pSessionContext; 
DLOGE("[TA]CommandID :%d \n", nCommandID); 
switch (nCommandID) 
{ 
case E_DEMO_CMD_NO_PARA_TEST: 
(void)pParams; 
return demo_ta_no_para_test(nParamTypes); 
case E_DEMO_CMD_VALUE_INPUT_TEST: 
return demo_ta_value_input_test(nParamTypes,pParams); 
case E_DEMO_CMD_VALUE_OUTPUT_TEST: 
return demo_ta_value_output_test(nParamTypes,pParams); 
case E_DEMO_CMD_VALUE_INOUT_TEST: 
return demo_ta_value_inout_test(nParamTypes,pParams); 
case E_DEMO_CMD_MEMREF_TEMP_INPUT_TEST: 
return demo_ta_memref_temp_input_test(nParamTypes,pParams); 
case E_DEMO_CMD_MEMREF_TEMP_OUTPUT_TEST: 
return demo_ta_memref_temp_output_test(nParamTypes,pParams); 
case E_DEMO_CMD_MEMREF_TEMP_INOUT_TEST: 
return demo_ta_memref_temp_inout_test(nParamTypes,pParams); 
default: 
DLOGE("Unexpected command id: %d", nCommandID); 
return TEE_ERROR_BAD_PARAMETERS; 
} 
} 
 
3.3 编译和运行 
CA 的编译需要依赖库文件 libopenteec.so；TA 的编译需要依赖 MediaTek 提供的开发包。 
Android 域的开发包会放在 vendor/mediatek/proprietary/trustzone/optee/4.7.0/optee_os_spmlib 路
径。 
Yocto 域的开发包放在 prebuilt/bsp/trustzone/optee/4.7.0/optee_os 路径。 
3.3.1 Yocto 域 
Yocto 域 CA/TA 的编译建议通过 Yocto 原生方式，可以参考如下写法： 
inherit fog 
inherit deploy 
 
DESCRIPTION = "demo_tz_app" 
LICENSE = "MediaTekProprietary" 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
LIC_FILES_CHKSUM = 
"file://${PROPRIETARY_LICENSE_PATH}/MediaTekProprietary;md5=c5d17c6905715d0948a3d6087602d12d
" 
 
SRC_URI = "fog://src/bsp/tzapp2/demo_tz_app;name=demo_tz_app" 
PACKAGES = "${PN}" 
INHIBIT_PACKAGE_DEBUG_SPLIT = "1" 
 
SRCREV_demo_tz_app = "${AUTOREV}" 
S = "${WORKDIR}/git" 
 
DEPENDS += "optee-client" 
DEPENDS += "optee-os-tadevkit" 
 
BUILD_FROM_YOCTO ?= "true" 
TA_DEV_KIT_DIR = "${STAGING_INCDIR}/optee/export-user_ta" 
 
EXTRA_OEMAKE = " \ 
CROSS_COMPILE=${TARGET_PREFIX} \ 
TA_DEV_KIT_DIR=${TA_DEV_KIT_DIR} \ 
BUILD_FROM_YOCTO=${BUILD_FROM_YOCTO} \ 
   " 
EXTRA_OEMAKE:append = "LIBGCC_LOCATE_CFLAGS=--sysroot=${STAGING_DIR_HOST}" 
 
INSANE_SKIP:${PN} += "already-stripped" 
FILES:${PN} += "${libdir}" 
FILES:${PN} += "${bindir}" 
FILES:${PN} += "${nonarch_base_libdir}/optee_armtz/" 
 
do_compile() { 
if [ -e makefile ]; then 
oe_runmake 
fi 
} 
 
do_install () { 
if [ -e makefile ]; then 
oe_runmake O="${WORKDIR}" DESTDIR="${D}" install 
fi 
} 
 
在src/bsp/tzapp2/demo_tz_app 中，提供 makefile 来给 bb 文件调用 
.PHONY: all clean install 
 
all: 
 $(MAKE) -C demoCA setup 
 $(MAKE) -C demoCA build BUILD_FROM_YOCTO=${BUILD_FROM_YOCTO} 
 $(MAKE) -C demoTA TA_DEV_KIT_DIR=${TA_DEV_KIT_DIR} 
LIBGCC_LOCATE_CFLAGS=${LIBGCC_LOCATE_CFLAGS} 
 
clean: 
 $(MAKE) -C demoCA clean 
 $(MAKE) -C demoTA clean 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
install: 
 install -d $(DESTDIR)/usr/bin 
 install -m 755 demoCA/out/demoTzApp $(DESTDIR)/usr/bin 
 install -d ${DESTDIR}${nonarch_base_libdir}/optee_armtz 
 install -m 0444 demoTA/out/*.ta ${DESTDIR}${nonarch_base_libdir}/optee_armtz 
 
uninstall: 
 rm -f $(DESTDIR)/usr/bin/demoTzApp 
 rm -f ${DESTDIR}${nonarch_base_libdir}/optee_armtz/$(BINARY).ta 
 
CA 的 makefile 参考如下 
TOP_DIR  = ${CURDIR} 
OBJ_PATH = ./out 
TARGET := demoTzApp 
 
SRC += $(TOP_DIR)/src/main.c 
INC += -I./include 
LIBS += -lopenteec 
 
CFLAGS := $(INC)                            \ 
-Werror                                  \ 
-fPIC -g -O2                             \ 
-fstack-protector 
 
ifeq ($(BUILD_FROM_YOCTO), true) 
CFLAGS += -DANDROID_BUILD=0 
endif 
 
OBJS := $(SRC:.c=.o) 
OBJS_S := $(SRC_S:.S=.o) 
 
.PHONY: all 
 
all: clean setup build 
 
setup: 
 @mkdir -p $(OBJ_PATH) 
 
build: $(OBJS) $(OBJS_S) 
 $(CC) $(CFLAGS) $(LDFLAGS) -o $(OBJ_PATH)/$(TARGET) $(OBJ_PATH)/*.o $(LIBS) 
 
$(OBJS): %.o:%.c 
 $(CC) $(CPPFLAGS) $(CFLAGS) -o $(OBJ_PATH)/$(notdir $@) -c $< 
 
$(OBJS_S): %.o:%.S 
 $(CC) $(CPPFLAGS) $(CFLAGS) -o $(OBJ_PATH)/$(notdir $@) -c $< 
 
clean: 
 @rm -rf $(OBJ_PATH) 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
TA 的编译需要同时提供 makefile 和 sub.mk，makefile 参考如下 
ifneq ($O,) 
out-dir := $O 
else 
out-dir := $(CURDIR)/out 
endif 
O=$(out-dir) 
 
BINARY = a60589fd-0158-40eb-a774-a398b1d69832 
export BINARY 
override LDADD += -L$(O)/../ 
 
-include $(TA_DEV_KIT_DIR)/mk/ta_dev_kit.mk 
 
ifeq ($(wildcard $(TA_DEV_KIT_DIR)/mk/ta_dev_kit.mk), ) 
clean: 
 @echo 'Note: $$(TA_DEV_KIT_DIR)/mk/ta_dev_kit.mk not found, cannot clean TA' 
 @echo 'Note: TA_DEV_KIT_DIR=$(TA_DEV_KIT_DIR)' 
endif 
 
sub.mk 参考如下 
global-incdirs-y += include 
srcs-y += src/demo_ta_entry.c 
srcs-y += src/demo_ta_commands.c 
 
编译命令参考： 
source meta/poky/oe-init-build-env && bitbake demo-tz-app -c cleansstate; bitbake demo-tz-
app 2>&1 | tee mtk_demo.log 
 
该命令会同时编译出 CA & TA 档案。 
可于如下路径查看编译产物： 
Yocto CA: 
• build/tmp/work/aarch64-poky-linux/demo-tz-app/1.0/git/demoCA/out/demoTzApp 
 
Yocto TA： 
• build/tmp/work/aarch64-poky-linux/demo-tz-app/1.0/git/demoTA/out/a60589fd-0158-40eb-a774-
a398b1d69832.ta 
 
将 TA (a60589fd-0158-40eb-a774-a398b1d69832.ta) push 进平台的/lib/optee_armtz/路径下； 
将 CA (demoTzApp) push 进平台的任意可写路径，修改权限为可执行后，即可执行 demo 程序。 
3.3.2 Android 域 
Android 域的 CA 建议使用 Android 自带的编译系统，Android.bp 写法参考如下： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
cc_binary { 
name: "demoTzApp", 
vendor: true, 
owner: "mtk", 
proprietary: true, 
cflags: ["-DANDROID_BUILD=1"], 
local_include_dirs: ["include"], 
srcs: ["src/main.c"], 
shared_libs: ["liblog", "libopenteec"], 
compile_multilib: "both", 
} 
 
以 MT8668 平台为例，编译命令为： 
source build/envsetup.sh && export OUT_DIR=out_demo && lunch 
hal_mgvi_auto_64_armv82_wifi_vm_uos-next-userdebug && mmm 
vendor/mediatek/proprietary/trustzone/demo_tz_app/demoCA | tee make_demoCA.log 
 
Android 域 TA 编译使用脚本，参考如下： 
export TA_DEV_KIT_DIR=$PWD/export-ta_arm64 
if [ -d ${TA_DEV_KIT_DIR} ]; then 
echo "TA_DEV_KIT_DIR = ${TA_DEV_KIT_DIR}" 
else 
tar xzf tz_optee_4.7.0_dev_kit.tar.gz 
echo -e "\033[1;32m #### uncompress: TA_DEV_KIT_DIR = ${TA_DEV_KIT_DIR}. ####\033[m" 
fi 
 
#### !!! Need to modify ANDROID_TOP !!! ### 
ANDROID_TOP=/xxx/alps-mp-xxx—20xx_xx_xx_xx_xx 
export PATH=${ANDROID_TOP}/prebuilts/clang/clang-tee/linux-x86/bin/:${PATH} 
export COMPILER=clang 
export O=out 
 
make clean 
make 
 
将 MediaTek 提供的 Android OP-TEE TA 开发包和章节 3.3.1 提供的 TA 编译的 makefile 和 sub.mk 放到同一级路径下
即可进行编译。 
 
注意： 
• 使用该脚本前，需要自行设定 ANDROID_TOP 值为 MediaTek Android 基线的路径 
 
可于如下路径查看编译产物： 
Android CA: 
• out_demo/target/product/mgvi_auto_64_armv82_wifi_vm_uos/vendor/bin/demoTzApp 
 
Android TA: 
• vendor/mediatek/proprietary/trustzone/demo_tz_app/demoTA/out/a60589fd-0158-40eb-a774-
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 27 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
a398b1d69832.ta 
 
将 TA (a60589fd-0158-40eb-a774-a398b1d69832.ta) push 进平台的/vendor/lib/optee_armtz/路径下； 
将 CA (demoTzApp) push 进平台的任意可写路径，修改权限为可执行后，即可执行 demo 程序。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 28 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
4 OP-TEE 的测试与调试 
4.1 OP-TEE 的自测方式 
OP-TEE 官方有搭配自测工具，名为 xtest。 
在 Yocto 域，MediaTek 会释放 xtest 代码，可编译 xtest 并打包进 load 中；在 Android 域，因 release policy 的原
因，MediaTek 未提供 xtest 源码，需要 push binary 文件进平台中进行测试。 
 
xtest 可以通过查阅源码观察测项内容，这里简单整理如 表 4-1 所示： 
表 4-1. xtest 测项 
Xtest 测项 测试目的简介 
xtest_1 OP-TEE 基本功能测试，如进出 TEE 的测试，TA 的 panic 测试等 
xtest_2 socket 相关测试 
xtest_4 加解密算法测试 
xtest_5 Share memory 测试 
xtest_6 安全存储相关测试 
xtest_8 KDF，Mbed 等杂项测试 
Pkcs11 PKCS11 相关组件测试 
 
在 Yocto 域 xtest 由如下文件组成： 
/usr/bin/xtest -> xtest 的可执行程序 
/lib/optee_armtz/*.ta  -> xtest 测试依赖的 UTA 
在串口或 adb shell 中输入“xtest” 即可开始执行 xtest 测试 
 
在 Android 域 xtest 由如下文件组成： 
/vendor/bin/xtest -> xtest 的可执行程序 
/vendor/lib/optee_armtz/*.ta -> xtest 测试依赖的 UTA 
 
Android 域执行 xtest 前需要用 “su” 切换到管理员权限，然后 setenforce 0 关闭 selinux，然后执行 xtest 
# su 
# setenforce 0 
# xtest 
 
待 xtest 执行完毕后，会打印出有多少测项 pass 和 fail。 
若 xtest 无法执行，则说明当前环境 OP-TEE 异常，请先按照如下方式自查： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 29 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
1. 查看 optee.ko 和 tee.ko 是否有正确 insmod 进去 
# lsmod | grep tee 
正常情况下，应看到 TEE 和 OP-TEE driver 被正确加载。 
 
2. 查看 tee-supplicant 进程是否有运行起来 
通过 adb 或串口进入 shell，输入以下命令 
# ps -A | grep tee 
查看 tee-supplicant 进程是否存在 
正常情况下，tee-supplicant 进程在后台运行，例如 
sh-3.2# ps -A | grep tee 
   2250 ?        00:00:00 tee-supplicant 
 
$ ps -A | grep tee 
root          1125     1    2176420  10168 0                   0 S tee-supplicant 
 
4.2 OP-TEE 相关 Log 介绍 
通过前面的介绍，函数从 CA 跳转入 TA，一般需要通过如下几个部分 
CA -> libopenteec.so -> linux kernel -> ATF -> optee os -> TA 
我们介绍 log 的时候，也会分别介绍这几个模块中的 log 会如何打印。 
Libopenteec.so/linux kernel/ATF 中的逻辑较为简单，一般不会遇到问题，最常见的问题出现在 CA、TA 以及
OP-TEE OS 中。 
 
4.2.1 User Space 
User space 包含 CA 和 libopenteec.so。 
CA 端的 log 由应用开发者自己编写和维护，例如，如果是 Yocto 域的应用，则可以用 printf 打印，如果是 Android
域的应用，则由 ALOG 等 Android 指定的 log 方式输出。 
注：TEEC_OpenSession 和 TEEC_InvokeCommand 这两个 API 的最后一个参数 err_origin 可以表示错误发生在哪个
阶段，强烈建议应用开发者打印出此值，例如： 
res = TEEC_OpenSession(&ctx, &sess, &uuid, 
TEEC_LOGIN_PUBLIC, NULL, NULL, &err_origin); 
if (res != TEEC_SUCCESS) 
errx(1, "TEEC_Opensession failed with code 0x%x origin 0x%x", res, err_origin); 
 
res = TEEC_InvokeCommand(&sess, TA_HELLO_WORLD_CMD_INC_VALUE, &op,  &err_origin); 
if (res != TEEC_SUCCESS) 
errx(1, "TEEC_InvokeCommand failed with code 0x%x origin 0x%x", res, err_origin); 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 30 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
origin 的值为 1-4，其意义分别为，在 user space 层出错；Linux/atf 通讯出错；OP-TEE Kernel 层出错；TA 层出错。 
#define TEEC_ORIGIN_API          0x00000001 
#define TEEC_ORIGIN_COMMS        0x00000002 
#define TEEC_ORIGIN_TEE          0x00000003 
#define TEEC_ORIGIN_TRUSTED_APP  0x00000004 
libopenteec.so 与开发者编写的 CA code 链接在一起，打印方式与 CA 的打印方式相同。 
 
4.2.2 Linux Kernel 
OP-TEE Linux Kernel 中的 error log 由 pr_err 输出，打印在 dmesg 中。 
 
4.2.3 Secure World 
Secure World 包含 OP-TEE OS 和 TA 两部分。 
OP-TEE OS 有定义四种 log level，分别是 FMSG/DMSG/IMSG/EMSG。 
OP-TEE OS 层的 log level 默认设置为 1，即只允许 EMSG 的 log 输出。 
处于安全设计，OP-TEE log level 不允许动态调整，若需要调整 log level，需要修改 OP-TEE 的配置并重新编译 OP-
TEE。修改位置为： 
vendor/mediatek/proprietary/trustzone/optee/4.7.0/optee_os/mk/config.mk 
 
# Log levels for the TEE core. Defines which core messages are displayed 
# on the secure console. Disabling core log (level set to 0) also disables 
# logs from the TAs. 
# 0: none 
# 1: error 
# 2: error + info 
# 3: error + info + debug 
# 4: error + info + debug + flow 
CFG_TEE_CORE_LOG_LEVEL ?= 1 
 
注意： 
• MediaTek 是以二进制形式释放 OP-TEE 镜像，log 等级默认设置为 1，如需调整 TEE OS 的 log 等级，请联系 MediaTek。 
 
OP-TEE OS 层新增加 Guest ID 表达当前 code 执行在哪个 VM，例如： 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 31 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
图 4-1. OP-TEE log 示例 
 
TA 的 log 与 OP-TEE OS 设计类似，有定义四种 log level，分别是 FMSG/DMSG/IMSG/EMSG。 
默认设置为 1，即只允许 EMSG 的 log 输出。 
如希望调整 TA 的 log 等级，可由 TA 开发者自由完成。在 TA 的makefile 中定义 CFG_TEE_TA_LOG_LEVEL 的值即
可设定 TA 的 log level，默认为 1。 
 
注意： 
• S-EL0(TA)和 S-EL1(OPTEE)在 Secure World 的 log 会传回对应域的 Kernel 层，在 Linux Kernel 进行输出，输出等级为 pr_info。
可以通过 dmesg 等方式抓取 Kernel 的 log，其中会包含 OP-TEE 在 S-EL0/1 的 LOG。 
例如： 
adb shell dmesg -w > log.txt 
 
4.3 OP-TEE 常见异常与分析 
开源社区有文档介绍 OP-TEE 的 abort dump 和 call stack 如何分析和处理，请参阅：
https://optee.readthedocs.io/en/latest/debug/abort_dumps.html 
本章节基于此链接内容做简单描述。 
当 TEE OS 或 TA 发生 abort 或 panic 时，会打印 panic 的 log 
 
当 log 中出现“TEE load address”和“call stack”时，表示异常出现在 OP-TEE OS 中。 
E/TC:2 1 TEE load address @ 0x6cc30000    
E/TC:2 1 Call stack: 
E/TC:2 1  0x6ccb5fe0 
 
OP-TEE OS 的 panic 信息会由 MediaTek 分析。 
当异常出现在开发者编写的 TA 中时，需要有开发者自行分析错误原因。 
这里我们直接拿开源社区文档中的例子做说明，当 call stack 中出现 Status of TA”时，表明异常是发生在 TA 中。 
E/TC:1 5 0 xxxxx 
 
 Guest ID，即 VM ID 
Core ID，如果中断未关，则打印成”？” 
Thread ID 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
E/TC:0 TA panicked with code 0x0 
E/TC:0 Status of TA 484d4143-2d53-4841-3120-4a6f636b6542 (0xe07ba50) (active) 
E/TC:0 arch: arm  load address: 0x101000 ctx-idr: 1 
E/TC:0 stack: 0x100000 4096 
E/TC:0 region 0: va 0x100000 pa 0xe31d000 size 0x1000 flags rw- 
E/TC:0 region 1: va 0x101000 pa 0xe300000 size 0xf000 flags r-x 
E/TC:0 region 2: va 0x110000 pa 0xe30f000 size 0x3000 flags r-- 
E/TC:0 region 3: va 0x113000 pa 0xe312000 size 0xb000 flags rw- 
E/TC:0 region 4: va 0 pa 0 size 0 flags --- 
E/TC:0 region 5: va 0 pa 0 size 0 flags --- 
E/TC:0 region 6: va 0 pa 0 size 0 flags --- 
E/TC:0 region 7: va 0 pa 0 size 0 flags --- 
E/TC:0 Call stack: 
E/TC:0 0x001044a8 
E/TC:0 0x0010ba59 
E/TC:0 0x00101093 
E/TC:0 0x001013ed 
E/TC:0 0x00101545 
E/TC:0 0x0010441b 
E/TC:0 0x00104477 
 
第一种分析方式为采用开源社区提供的脚本直接做解析，推荐优先使用这种方式  
$ cat dump.txt | ./optee_os/scripts/symbolize.py -d ./optee_examples/*/ta 
 
若第一种方式解析不出问题所在，也可以尝试手动解析，解析方式为： 
找到此 TA 对应的 {uuid}.dmp 文件， 
如果是基于 Yocto 环境编译，dmp 文件在 build/tmp/work/xxxx 下面 
如果是基于 Android 环境编译，dmp 文件在out 下面 
 
第一步，计算 offset，方式为 crash 是的地址，减去 TA 的 load address，例如 
offset = 0x001044a8 - 0x101000  = 34A8 
 
第二步，使用文本工具打开 {uuid}.dmp 
在{uuid}.dmp 中找到 34A8 对应的位置，即可知道大致发生 panic 的位置 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 33 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
5 替换 OP-TEE TA 的签名与验签密钥 
出于安全性设计，OP-TEE 会在加载 TA 时校验其签名，若校验失败，则拒绝 TA 的载入。 
MTK 在 release OP-TEE 时，会将 OP-TEE TA 验签 key 替换为 MTK 派生的密钥。 
处于安全性考虑，MTK 建议客户替换并自行维护 TA 验签密钥。 
本章将介绍 OP-TEE 4.7.0 版本中，如何替换 TA 验签密钥。 
5.1 OP-TEE TA 签名验签简介 
在章节 2.4 中有介绍三种类型的 TA: UTA，PTA 和 Early UTA。 
其中 PTA 和 Early UTA 会被打包进 tee.img，由 secure boot 验签 tee.img 时保证其安全性。 
普通 UTA 则以{UUID}.ta 的文件方式保存在文件系统中，在编译{UUID}.ta 时会进行签名。 
在 OPTEE 从文件系统中加载{UUID}.ta 时，需校验签名后才可载入安全内存中执行。 
验签 key 使用 RSA 4096，公钥会在编译 OP-TEE OS 时链接进 OP-TEE 镜像中；而私钥存放在编译服务器的 OP-TEE TA
开发包中，在编译 TA 时用于签名 TA。 
 
5.2 准备工作 
1. 确认您的 branch 上已经存在如下 patch： 
分别在 Android 和 Yocto 的 code 中 grep OPTEE_CUSTOMIZED_TA_SIGN_KEY，若无此关键字，则说明您的 codebase
还未包含相关 patch，需要先联系 MTK 释放相关 patch。 
• Android branch 的 grep 目录为vendor/mediatek/proprietary/trustzone/custom/build 
• Yotco branch 的 grep 目录为meta/meta-mediatek 
 
2. 准备好新的密钥，其步骤为： 
在 linux server 上依次执行以下 5 个命令 
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:4096 
 
openssl rsa -pubout -in private_key.pem -out public_key.pem 
 
openssl rsa -pubin -inform PEM -in public_key.pem -outform DER -out public_key.der 
 
openssl asn1parse -in public_key.der -inform DER -strparse 19 -out n_value.der 
 
dd if=n_value.der of=test_rsa_pub_n.bin bs=1 skip=9 count=256 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
执行完后，最终会得到如下 5 个文件 
-rw-rw-r--  1 mtk mtk  270 Jun 11 11:21 n_value.der 
-rw-------  1 mtk mtk 1704 Jun 11 11:20 private_key.pem 
-rw-------  1 mtk mtk  294 Jun 11 11:20 public_key.der 
-rw-rw-r--  1 mtk mtk  451 Jun 11 11:20 public_key.pem 
-rw-rw-r--  1 mtk mtk  256 Jun 11 11:21 test_rsa_pub_n.bin 
 
接下来，请依据章节 5.3，将 test_rsa_pub_n.bin 放入 tee.img 中；依据章节 5.4，需要将 private_key.pem 放于 TA 签
名脚本中；章节 5.5 则介绍如何在不重新编译 TA 的前提下重新签名 TA。 
 
5.3 替换 OP-TEE 镜像中的验证密钥 
MTK 以 binary 方式释放 OP-TEE 镜像，在编译时，OP-TEE 镜像会与 ATF 镜像一起打包成 tee.img。 
我们需要在打包过程中，将 test_rsa_pub_n.bin 替换进 tee.img 中，从而达到替换公钥的目的。 
TEE 的镜像从 Android branch 中编译出，故此处要修改的是 Android branch。 
 
Android branch: 
步骤 1：将章节 5.2 生成的 test_rsa_pub_n.bin 放置在 code tree 中，建议路径为： 
vendor/mediatek/proprietary/trustzone/custom/build/keys/test_rsa_pub_n.bin 
步骤 2：在 project config 中设定 key 的位置 
示例：在vendor/mediatek/proprietary/trustzone/custom/build/project/{PROJECT_NAME}.mk 
(PROJECT_NAME 需替换成您使用的 project，例如 auto8668p1_64_vm_uos) 中添加 
OPTEE_CUSTOMIZED_TA_SIGN_KEY := $(TRUSTZONE_CUSTOM_BUILD_PATH)/keys/test_rsa_pub_n.bin 
步骤 3：编译产生新的 tee.img 
 
注意： 
• xxx.mk 文件替换为您的 project 所使用的文件 
• 步骤 2 中设定的路径需要与步骤 1 中文件摆放路径一致。 
 
可使用如下指令单独编译 tee.img 以提高编译速度 
python3 vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py 
full_{PROJECT_NAME}-userdebug --run --layers vext --target trustzone 
 
编译产物为 out/target/product/{PROJECT_NAME}/tee-verified.img 
PROJECT_NAME 需替换成您使用的 project，例如 auto8668p1_64_vm_uos 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 35

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 35 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
5.4 替换私钥 
5.4.1 Yocto 侧替换私钥 
步骤 1：将章节 5.2 中生成的 private_key.pem 重命名为 ta_sign_key.pem 后放在指定位置 
以 MT8668 为例，路径为 
meta/meta-mediatek/recipes-bsp/trustzone/keys/ta_sign_key.pem 
 
步骤 2：在 project config 中使能 OPTEE_CUSTOMIZED_TA_SIGN_KEY  
以 MT8668 为例，路径为 
meta/meta-mediatek-mt8668-hyp/conf/machine/{PROJECT_NAME}.conf 
(PROJECT_NAME 需替换成您使用的 project，例如 auto8668p1_64_sos) 
 
新增 config： 
OPTEE_CUSTOMIZED_TA_SIGN_KEY = “yes” 
完成以上步骤后，再编译 TA 时就会使用新的 Key 签名 TA。 
 
5.4.2 Android 侧替换私钥 
在编译 TA 时需要用到 OP-TEE TA 开发包，其路径为： 
vendor/mediatek/proprietary/trustzone/optee/4.7.0/optee_os_spmlib/tz_optee_4.7.0_dev_kit.tar
.gz 
 
签名 TA 的 key 位于export-ta_arm64/keys/default_ta.pem 
将章节 5.2 生成的 private_key.pem 重命名为 default_ta.pem 并替换原文件， 
这样再编译 TA 时，就会使用新的 key 签名。 
 
5.5 重新签名 TA 
对于有 source code 的 TA，在编译 TA 的过程中会自动签名 TA，所以只需要按照章节 5.4 的介绍替换私钥，替换之
后编译出的 TA 就会使用新的 Key 签名。 
如果无法重新编译 TA，只想替换签名（例如 MTK binary release 的 TA），本章介绍如何替换签名。 
 
签名 TA 需要使用 OP-TEE 提供的签名脚本 sign_encrypt.py，配合新的私钥，对 TA 重新签名，其用法如下 
需要提前准备好“私钥”和“未签名的 TA” 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 36

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 36 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
export TA_SIGN_KEY= private_key.pem 
export UUID=fd02c9da-306c-48c7-a49c-bbd827ae86ee (替换为您需要签名的TA 的UUID) 
 
pyton3 ${TA_DEV_KIT_DIR}/scripts/sign_encrypt.py --key $TA_PUBLIC_KEY --uuid ${UUID} \ 
    --ta-version 0  
    --in  ${TA_OUT_PATH}/${UUID}.ta.unsigned \ 
    --out ${TA_OUT_PATH}/${UUID}.ta 
 
注意： 
• 如果没有“未签名的 TA”，则需要把“已签名的 TA”的前 328 Byte 移除，来得到“未签名 TA”。 
 
接下来介绍如何重新签名 MTK 以 binary 形式 release 的 TA。 
 
5.5.1 Yocto 侧重新签名 TA 
MTK 在 Yocto 测以 binary release 的 TA 只有 pkcs11 TA。 
受益于 Yocto 编译系统的灵活性，MTK 已经在 pkcs11 TA 的编译脚本中做了相关处理，只要按照章节 5.4.1 替换完私
钥，再次编译时，就会自动重新签名 pkcs11 TA。 
5.5.2 Android 侧重新签名 TA 
而 Android 侧对 MTK binary release 的 TA，需要手动重新签名，并 merge 进 code tree 中。 
同章节 5.4.2 介绍，需要先把 OP-TEE TA 开发包中的私钥替换为新的私钥。 
 
MTK binary release 的 TA 位于如下路径 
vendor/mediatek/proprietary/trustzone/optee/services 
 
• unsigned TA: {uuid}.ta.unsigned 
• MTK signed TA: {uuid}.ta 
 
MTK 提供的 TA 列表和说明如下，根据需求不同，包含的 TA 数量可能不同。 
表 5-1. MTK Android 测 TA 说明 
UUID 类型 用途 
5f902ace-5e5c-4cd8-ae54-87b88c22ddaf Early UTA Keyminit，此 TA 无需重新签名 
fd02c9da-306c-48c7-a49c-bbd827ae86ee UTA PKCS11 
989850bf-4663-9dcd-394c-07a45f4633d2 UTA KeyManager 
edff8ba9-79d6-4ace-a3c8-27dcd51d21ed UTA Widevine 
38ba0cdc-df0e-11e4-9869-233fb6ae4795 UTA GateKeeper 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 37

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 37 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
如下为签名步骤：  
a. cd vendor/mediatek/proprietary/trustzone/optee/4.7.0/optee_os_spmlib 
b. tar -zxvf tz_optee_4.7.0_dev_kit.tar.gz， 
c. 更换 sign key（重命名并覆盖 export-ta_arm64/keys/default_ta.pem） 
d. export PYTHON3="./../../../../../../../prebuilts/clang/host/linux-x86/clang-r487747c/python3/bin/python3" 
e. export UUID="38ba0cdc-df0e-11e4-9869-233fb6ae4795" 
f. ${PYTHON3} export-ta_arm64/scripts/sign_encrypt.py --key export-ta_arm64/keys/default_ta.pem  --uuid ${UUID} --
ta-version 0 --in ${UUID}.ta.unsigned --out ${UUID}.ta 
 
以上步骤一次签名一个 TA，若有多个 TA，需要设定不同的 uuid，循环步骤 d~e. 
重签之后，新的 TA 会覆盖到 MTK binary release。 
注意： 
• 重签之后，会覆盖源文件，记得上传新签名的 TA。 
 
5.6 验证方式 
替换完密钥和重签 TA 后，建议执行一次 TA 的 open/close 动作来确认操作成功。 
若 TA 签名不对，在 open session 时会返回错误码：0xFFFF000F(TEEC_ERROR_SECURITY)。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 38 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
6 附录 
6.1 参考文档 
1. OP-TEE 开源社区文档：https://optee.readthedocs.io/en/latest/index.html 
2. Arm 开发者文档关于 TrustZone 的部分： 
https://developer.arm.com/documentation/102418/0102?lang=en 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 39

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 39 
MT8668 Hypervisor OP-TEE 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0106 MT8668_Hypervisor_Performance_User_Manual_CN_V1.1.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Performance_User_Manual_CN_V1.1.pdf

SHA-256：cb4f3b88886b853b76a47ca65d1c1034520f43ef090f1c95877970331c167534

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0106.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.1 
出版日期:  2026-02-25
MT8668 Hypervisor Performance  
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 黄培俊 正式版 
1.1 2026-02-25 黄培俊 移除虚拟机名称相关的信息 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录   ················································································································································································· 3 
1 概述 ··········································································································································································· 5 
1.1 基本概述 ·································································································································································· 5 
2 CPU 状态查看 ··························································································································································· 6 
2.1 基本概述 ·································································································································································· 6 
2.2 查看 CPU online 的情况 ·········································································································································· 6 
2.3 查看 CPU paused 的情况 ········································································································································ 6 
2.4 查看频率的情况 ······················································································································································ 6 
3 Cgroup 的信息查询（Android 端） ·························································································································· 7 
3.1 基本概况 ·································································································································································· 7 
3.2 如何查看各个 process 的 Cgroup 和 sched 信息··································································································· 7 
3.3 如何查看各个 Cgroup 的 cpuset 范围 ··················································································································· 7 
3.4 如何查看各个 Cgroup 的 unclamp 设置情况 ········································································································ 7 
3.5 如何查看各个 Cgroup 的 latency sensitive 情况 ···································································································· 7 
4 系统 performance 问题查看 ····································································································································· 8 
4.1 基本概述 ·································································································································································· 8 
4.2 Top 信息 ··································································································································································· 8 
4.3 中断的问题 ······························································································································································ 8 
4.4 内存问题 ·································································································································································· 8 
4.5 线程问题 ·································································································································································· 9 
4.6 Boost 问题 ····························································································································································· 10 
4.7 Trace 分析 ······························································································································································ 10 
5 卡顿，黑屏，花屏问题 ·········································································································································· 11 
5.1 hwc CMD ································································································································································ 11 
5.2 显示驱动 CMD ······················································································································································· 11 
5.3 Pattern ···································································································································································· 12 
5.4 黑屏········································································································································································ 12 
5.5 花屏/闪屏 ······························································································································································ 12 
5.6 卡顿········································································································································································ 13 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
5.7 Surfaceflinger Issue Log ·········································································································································· 13 
6 算力优化 ································································································································································· 15 
6.1 Log 的优化 ····························································································································································· 15 
6.2 常用优化策略 ························································································································································ 15 
6.3 异常中断的算力占用 ············································································································································ 16 
6.4 多维观察法 ···························································································································································· 16 
6.5 联动观察法 ···························································································································································· 17 
6.6 动静态观察法 ························································································································································ 17 
附件一 附加条款 ····························································································································································· 18 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
1 概述 
1.1 基本概述 
本章节主要介绍 MT8668 的 CPU 基本能力：4 x B + 4 x L(采用 4 大+ 4 小的结构)。 
 
0 1 2 3 4 5 6 7 
小核 小核 小核 小核 大核 大核 大核 大核 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
2 CPU 状态查看 
2.1 基本概述 
本章将介绍，如何查看 CPU 的在线情况，paused 情况以及 CPU 运行的频率。 
2.2 查看 CPU online 的情况 
使用命令： 
cat /sys/devices/system/cpu/online 
 
2.3 查看 CPU paused 的情况 
使用命令查看 CPU paused 的情况： 
cat /sys/devices/system/cpu/sched_ctl/sched_core_pause_info 
如果是 0x0 就表示 CPU 没有被 paused，如果是非 0 就是表示模块 pause 了 CPU。 
 
2.4 查看频率的情况 
1. 查看 CPU 的最大最小频率的情况： 
cat /sys/devices/system/cpu/cpufreq/policy0/scaling_min_freq 
cat /sys/devices/system/cpu/cpufreq/policy4/scaling_min_freq 
cat /sys/devices/system/cpu/cpufreq/policy7/scaling_min_freq 
cat /sys/devices/system/cpu/cpufreq/policy0/scaling_max_freq 
cat /sys/devices/system/cpu/cpufreq/policy4/scaling_max_freq 
cat /sys/devices/system/cpu/cpufreq/policy7/scaling_max_freq 
 
2. 查看当前各个 CPU 频率的档位： 
cat /sys/devices/system/cpu/cpufreq/policy0/ scaling_available_frequencies 
cat /sys/devices/system/cpu/cpufreq/policy4/ scaling_available_frequencies 
cat /sys/devices/system/cpu/cpufreq/policy7/ scaling_available_frequencies 
 
3. 查看当前 CPU 的频率方法： 
cat /sys/devices/system/cpu/cpufreq/policy0/scaling_cur_freq 
cat /sys/devices/system/cpu/cpufreq/policy4/scaling_cur_freq 
cat /sys/devices/system/cpu/cpufreq/policy7/scaling_cur_freq 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
3 Cgroup 的信息查询（Android 端） 
3.1 基本概况 
本章将介绍，Android 端如何查看 Cgroup 的设定和相关信息。 
3.2 如何查看各个 process 的 Cgroup 和 sched 信息 
1. Process Cgroup 的信息： 
cat /proc/${pid}/cgroup 
 
2. Process sched 的信息： 
cat /proc/${pid}/sched 
 
3. 查看 cpuset 和 cpuctl 下面的 Cgroup 下面的所有 task: 
cat /dev/cpuset/${cgroup}/tasks 
cat /dev/cpuctl/${cgroup}/tasks 
 
3.3 如何查看各个 Cgroup 的 cpuset 范围 
可以使用下面的命令获取各个 Cgroup 的 CPU 使用范围： 
cat /dev/cpuset/${cgroup}/cpus 
 
3.4 如何查看各个 Cgroup 的 unclamp 设置情况 
可以使用下面的命令获取各个 Cgroup 的 unclamp 设定情况： 
cat /dev/cpuctl/${cgroup}/cpu.uclamp.min 
cat /dev/cpuctl/${cgroup}/cpu.uclamp.max 
 
3.5 如何查看各个 Cgroup 的 latency sensitive 情况 
可以使用下面的命令获取各个 Cgroup 的 latency sensitive 设定情况： 
cat /dev/cpuctl/${cgroup}/cpu.uclamp.latency_sensitive 
这个设定是设置 perfer idle 属性的。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
4 系统 performance 问题查看 
4.1 基本概述 
本章将介绍跟系统 performance 相关的各种命令和 log。 
4.2 Top 信息 
Linux 自带的 top 
使用方法跟单系统一样，我们一般会观察 top 中 idle 的结果来判断系统的 loading 的情况。 
注意：在 Android 端看 idle 的时候要减去 Android 关掉的核心数量，例如现在 Android 关掉了 3 个核，那么实际看 idle 的
时候要减去 300%。 
4.3 中断的问题 
1. 查看系统中断情况 
– 总的中断分布： 
cat /proc/interrupts 
– 中断的绑核情况： 
cat /proc/irq/${irq_num}/smp_affinity 
 
2. irq monitor 的使用 
irq monitor 是 MediaTek 监测 irq 使用异常的工具，默认在 userdebug 和 eng 平台上面打开，user 版本不开。 
在开启之后默认会监测系统中 irq 执行超时的 case，在监测到系统中有中断处理时间超过 5ms 的情况，就会在
kernel log 里面打印下面的 log:  
[ 1253.661847] sh: irq_monitor: [name:irq_monitor&]hrtimer: 
[<ffffffdcea0cba10>]irq_mon_hrtimer_func.cfi_jt+0x0/0x8 [irq_monitor], duration 600 ms, from 
1253061633832 ns to 1253661730757 ns on CPU:2 
 
4.4 内存问题 
1. Memory 信息的查看 
cat /proc/meminfo 
dumpsys meminfo  
 
2. 内存不足关键信息 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
– 内存不足的 process 信息： 
▪ Kswapd0：表示内存不足，系统真正通过 kswapd0 大量的回复内存 
▪ kcompacd0：表示内存碎片很多，系统正在通过 kcompacd0 规整内存碎片 
 
– Android 上层回收内存机制： 
▪ Lmkd：Android 上层进行内存回收的 process，可以 main log 里面得到相关的信息 
▪ HeapTaskDaemon：辅助 GC 的回收，一般可以在 trace 中观察到相关的 thread 
 
4.5 线程问题 
1. RT throttle 
– RT throttle 的原理 
因为 RT 线程的优先级比较高，scheduler 为了不让其他线程饿死（长时间得不到调度），设置了
throttle 机制。即一段时间(一个周期)内所有的 RT 线程执行时间总和超过某个阈值，触发 RT throttle 机
制。 
 周期的长度可以从如下的文件节点读出： 
cat /proc/sys/kernel/sched_rt_period_us 
默认为：1000ms 
一个周期内允许 running 的最长时间为: 
cat /proc/sys/kernel/sched_rt_runtime_us 
默认为：950ms 
 
– 问题识别 
当发生 RT throttle 会在 kernel log 打印如下的 log: 
[  583.696433] [C1001824] irq/510-1.nebul: sched: RT throttling activated for cpu 0 
[  583.696440] [C1001824] irq/510-1.nebul: sched: cpu=0, expires=584024000000 
now=583649109573 rt_time=4140666235 runtime=950000000 period=1000000000 
[  583.696445] [C1001824] irq/510-1.nebul: cpu=0, current irq/510-1.nebul (1824) is 
running for 5991740014 nsec 
 
2. workqueue lockup 
– workqueue lockup 原理 
“workqueue lockup”是指工作队列长时间无法完成当前正在运行的工作。可能存在多种原因，例如：  
1.当前正在处理的工作太多。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
2.由于 CPU 被更高优先级的任务占用，工作队列 kthread 未被调度。 
3.由于主机过载，虚拟机没有足够的时间运行。 
– 问题识别 
当出现 workqueue lockup 时会出现下面的 log： 
[ 3450.381929] [    C0] BUG: workqueue lockup - pool cpus=0 node=0 flags=0x0 nice=0 
stuck for 3442s! 
 
3. RCU stall 
– RCU stall 的原理 
RCU（Read-Copy-Update）是一种高效的并发同步机制，广泛应用于 Linux 内核等高并发场景。RCU 
stall 指的是 RCU 机制检测到某些任务长时间没有完成“RCU 读临界区”，导致整个系统的 RCU 回收
（reclaim）过程被阻塞，进而可能影响系统性能甚至引发卡顿 。 
– 问题识别 
[   18.532005][C400018] rcu_exp_gp_kthr: sched: RT throttling activated for cpu 4 
[   18.532006][C400018] rcu_exp_gp_kthr: sched: cpu=4, expires=19004000000 
now=18528004693 rt_time=952270954 runtime=950000000 period=1000000000 
[   18.532007][C400018] rcu_exp_gp_kthr: cpu=4, current rcu_exp_gp_kthr (18) is 
running for 10233701255 nsec 
 
4.6 Boost 问题 
在 Android 有的模块会调用 PowerHAL 的接口来调整系统的资源，在 Android 的 log 里面会打印出来下面相关
的信息 libPowerHal： 
 
 
4.7 Trace 分析 
可以参考下面的 FAQ 学习如何看 trace： 
https://online.mediatek.com/apps/quickstart/QS00157  
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
5 卡顿，黑屏，花屏问题 
5.1 hwc CMD 
• Log CMD: 
adb shell setprop persist.vendor.debug.hwc.log V && adb shell setprop 
vendor.debug.hwc.skip_log 0 && adb shell dumpsys SurfaceFlinger  
 
• Dump sf info: 
adb shell dumpsys SurfaceFlinger > sf.log 
 
• Force GPU （GPU 叠图）： 
adb shell service call SurfaceFlinger 1008 i32 1 
 
5.2 显示驱动 CMD 
On 都表示开，Off 表示关。 
 
常用的 display mobile log: 
adb shell “echo mobile:on > /d/mtkfb” 
 
如果要抓开机 log，需要直接改代码： 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
如果要开更详细的 log： 
adb shell “echo detail:on > /d/mtkfb” 
 
如果要抓开机 log，需要直接改代码： 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
Fence log: 
adb shell “echo fence:on > /d/mtkfb” 
 
如果要抓开机 log，需要直接改代码： 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
 
Irq log: 
adb shell “echo irq:on > /d/mtkfb” 
 
如果要抓开机 log，需要直接改代码： 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
抓 display diagnose dump: 
adb shell "echo diagnose > /sys/kernel/debug/mtkfb && cat /sys/kernel/debug/mtkfb" > 
mtkfb.txt 
5.3 Pattern 
Pattern 命令需要在 Host OS 执行： 
• dsi0 pattern: 
adb shell "echo gce_wr:1400d178,c61,ffffffff > /sys/kernel/debug/mtkfb“ 
• dsi1 pattern： 
adb shell "echo gce_wr:1420d178,c61,ffffffff > /sys/kernel/debug/mtkfb“ 
• dp pattern: 
adb shell "echo gce_wr:1400bf00,41,ffffffff > /sys/kernel/debug/mtkfb“ 
 
5.4 黑屏 
• 背光是否开启 
• 如果有 bridge IC, bridge IC 是否 OK 
• dsi/dp pattern 是否 OK 
• screencap 是否 OK 
adb shell screencap -d 0/1 /sdcard/1.png 
 
如果以上几点都 OK，最后就需要 display owner 详细看 log 来定位问题。 
5.5 花屏/闪屏 
• 看 log 中是否有 DISP_OVL/RDMA underflow/abnormal 
– size 配置是否 OK 
▪ CMD:  
adb shell “echo mobile:on > /d/mtkfb” 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
– clk/dram 不够 
▪ clk  
o dump: 
adb shell " echo fmeter > /proc/clkdbg ; cat /proc/clkdbg | grep –e disp" 
o force 最大： 
adb shell "echo 0 0 > /sys/module/mtk_mmdvfs_debug/parameters/force_step" 
▪ dvfs 
o dump: 
adb shell "cat /sys/kernel/helio-dvfsrc/dvfsrc_dump | grep -e uv -e Mbps" 
o force 最大: 
adb shell "echo 0 > /sys/kernel/helio-dvfsrc/dvfsrc_force_vcore_dvfs_opp" 
• Force GPU 是否 OK 
adb shell service call SurfaceFlinger 1008 i32 1 
• dsi/dp pattern 是否 OK 
 
5.6 卡顿 
• 看 main log 是否有 fence timeout 
 
• 看 kernel log 是否有 underflow/abnormal 的 log 
• 开启 fence log,看对应 fence 是否 release 
adb shell “echo fence:on > /d/mtkfb” 
• 抓 systrace 看耗时位置 
adb shell perfetto -o /data/misc/perfetto-traces/trace -t 10s sched freq idle am wm gfx 
view input 
 
display 卡顿相关 trace 的分析 FAQ： 
https://online.mediatek.com/apps/quickstart/QS00295  
 
5.7 Surfaceflinger Issue Log 
• SF watchdog 
2025-06-02 15:23:00.357  1000   814   814 W surfaceflinger: [SW-WD] <<[composite] >> 
timeout, tid=814, spend=3440ms threshold=3000ms 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
 
• HWC watchdog 
01-01 00:04:54.882   659   733 W hwcomposer: [SWWatchDog] [SW_WDT] Thread(659) timeout. 
id=b400006dea944668 <<[DEV] ioctl(SetCrtc):728>> spend/timeoutThreshold/hangThreshold: 
1535/500/10000 ms   
01-01 00:04:54.882   659   733 W hwcomposer: [SWWatchDog] [SW_WDT] Thread(659) Name:  
composer@3.2-se, State:  D (disk sleep), wait_start:             0.000000, 
sleep_start:      
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
6 算力优化 
6.1 Log 的优化 
1. 单个系统中 log 相关的 process 算力占用不要超过 1k，如果占用过大就需要客户推动 log 优化 
2. 检查客户是否存在的多个 process 功能重复的记录和存储 log 的问题，如果存在，需要客户组织相关模块进
行功能的整合 
3. 在 user 版本的 process 的火焰图中看到 print 和 log 相关字眼的 path，要及时找客户确认打印的合理性 
 
6.2 常用优化策略 
序号 项目 详细说明 
1 debug/test 等 debug 字样的 process 和 flow 在 user 版本上，移除掉 debug 相关的模块 
2 fpsgo，frs，gbe，sbe 等相关 process 和 flow 游戏调优相关的模块，理论上在车机上面都可以拿掉 
3 Freq，dvfs 等相关的字眼的 process 和 flow 
很多的车机客户都是 performance 在跑，遇到调频相关
的 process 和 flow 理论上都可以移除掉 
4 shell 命令，shell 脚本，adb 命令相关 process 
1. 找到 shell 命令是谁触发的，这种一般是 debug 用的 
2. ADB 相关的 process 要求客户不用关注，客户出货的
版本一般没有 ADB 口 
5 Yocto 中 service PID 很大的 process Service 的 PID 比较大可能存在 service 一直重启的情况 
6 APK 带有 DEBUGGABLE flags 发布的 APK 版本为 debug 的，会增加 art 的解析速度 
7 flow 中带有 algo 等算法字样的关键字 
带有算法的模块，可以跟客户讨论将算法移动到 APU 的
可能 
8 kcompactd0 占用比较高 通过 pidstat 找每秒换页次数超过 1000 次的模块 
9 Kswapd0 占用比较高 
需要检查系统是否存在内存泄露，如果没有就需要进行
内存优化 
10 egl 相关的 flow 占用比较高 
找虚拟机厂商看一下 GPU 虚拟化上是否存在可以优化的
点 
11 Can service, someip, dds 相关的 flow 跟客户一起看一下车身信号相关的 flow 是否可以优化 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
序号 项目 详细说明 
12 review 各个 process 的作用 
通过 review process 的作用，来找到 user 版本可以不需
要的 process 
 
6.3 异常中断的算力占用 
中断的异常使用，不仅会带来中断本身的上半部处理总时间变长，也会带来虚拟机中的中断分发逻辑时间变长间
接导致 hypervisor 的算力使用增加。对于中断的算力的优化，我们目前主要集中在异常中断的优化和 timer 中断的
优化两部分进行。 
 
1. 异常中断优化 
我们可以通过 perfmaster 里面的中断的算力分布，来找到消耗算力排名靠前的中断，跟 owner 一起 review 一
下中断的处理是否合理，优化中断上半部中不合理的 flow。 
 
2. Timer 中断优化 
(1) 加上 timer 中断相关的 event：hrtimer_init，hrtimer_start,hrtimer_expire_entry，
hrtimer_expire_exit,hrtimer_cancel，并且抓取 3s 的 ftrace log 
(2) 使用 timer 中断统计的脚本，计算处理各个模块使用 timer 的情况 
(3) 跟排名靠前的模块 owner 一起，review 一下其模块是否有不合理的定时器操作 
 
6.4 多维观察法 
拿到客户的一个算力占用比较大的 process，我们可以通过多个维度来拆解可以优化的点，下面是可以查看的
process 的一些基本信息： 
 
序号 项目 说明 
1 Perfmaster 算力解析表格 找到 process 中算力都是由哪些 thread 贡献的 
2 Perfetto/systrace 文件 
尽量打开 gfx，binder_driver 等 trace event，了解 process 的显示关系
和通讯关系 
3 Perf 火焰图 了解 process 的运行 flow，看一下是否存在可以优化的 flow 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
序号 项目 说明 
4 Log 文件 看一下 process 打印的 log, 看一下是否有异常 Log 打印 
5 Pidstat 结果 可以看到 process 的上下文和内存切换情况 
6 Strace 文件 观察 process 的 syscall 的使用情况 
 
6.5 联动观察法 
系统的 process 的执行往往不是一维的，我们可以通过观察某个 process 的启动前后，其它 process 的算力变化，来
找到可能优化的点。 
举例来说：我们唤醒语音之后，发现 system server，surfaceflinger，HWC，audio 等模块的算力也会随着增加。这
样来看我们在优化语音的时候，就不能单看语音这一个 process，还要看一下被其影响的 process 的算力增加是否
存在可以优化的点。 
在联动观察法中，我们也可以通过 freeze 某个 process，来观察 freeze process 前后系统其它 process 的变化情况： 
（1） 找到 process 的 PID 
（2） 将系统切到: cd /sys/fs/cgroup 目录 
（3） 在该目录下查找 PID 对应的 cgroup 位置：find ./ -name "*pid*" 
（4） Freeze 住该 process：echo 1 > xxx/xxx/cgroup.freeze 
 
6.6 动静态观察法 
车机上面分为台架环境和实车环境，台架环境由于很多车身信号没有接入，会表现出来比实车性能更好的假象。
动静态分析，主要目的是观察车辆在开动前后各个 process 的算力变化情况，找到动态环境下 process 可以优化的
点，以及车身信号是否存在过分/错误下发和模块是否有过分/错误接收的地方。 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8668 Hypervisor Performance  
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0107 MT8668_Hypervisor_Reserved_Memory_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Reserved_Memory_User_Manual_CN_V1.0.pdf

SHA-256：607cd3a86dd30f4b094c07f3d11b5e1b677dee4247a21b2f551355d703621b95

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0107.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28 
MT8668 Hypervisor Reserved Memory  
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor Reserved Memory  
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 徐江 正式版 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor Reserved Memory  
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 Reserved Memory ····················································································································································· 4 
 如何在 Kernel dts 中增加一个新的 Reserved Memory 节点？ ································································· 5 
 如何使用 mblock 来 Reserve Memory？ ···································································································· 5 
附件一 附加条款 ····························································································································································· 10 
 
 
图片目录 
图 1-1. Reserved Memory 与 Memtotal 关系示意图 ··············································································································· 4 
图 1-2. mblock_alloc 使用示例 ················································································································································· 6 
图 1-3. mblock_query_reserved_by_name 使用示例 ·············································································································· 7 
图 1-4. mblock_query_reserved_by_name 使用示例 ·············································································································· 8 
图 1-5. mblock_free 使用示例 ·················································································································································· 9 
图 1-6. free_reserved_page 使用示例 ······································································································································ 9 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor Reserved Memory  
User Manual 
Confidential B 
1 Reserved Memory 
1.1 什么是 Reserved Memory？ 
对于 Yocto 和 Android 来说，reserved memory 的意义和使用方法基本相同。此文档适用于 LA/LLA 架构。 
简单来说，它主要是针对 Kernel 管理的内存资源，其中一部分会预留给 Kernel 系统自身运行或其他模块功能使
用。预留的内存可以由特定模块独立使用，不受其他模块的影响。然而，这也会导致系统整体可动态分配的内存
减少。
 
图 1-1. Reserved Memory 与 MemTotal 关系示意图 
 
HW Dram size = MemTotal + HW Reserved Memory + Kernel Reserved Memory 
Reserved Memory 主要包括 HW Module Reserved Memory 和 Kernel Reserved Memory 两部分： 
 
1. HW Module Reserved Memory：这是为平台上的某些硬件或功能（如 TEE、SCP、显示等）预留的一部分内存，
供其独立使用。 
2. Kernel Reserved Memory：这是 Kernel 为存放其代码、数据以及关键功能的数据结构（如 struct page）和缓冲
区而预留的内存。 
 
1.2 如何新增一块 Reserved Memory？ 
当前，新增一块 reserved memory，有两种方法： 
 
1. 在 Kernel dts 文件中增加一个新的 reserved memory 节点； 
2. 在 LK2 中调用 mblock 的 API 来新增一块 reserved memory（推荐）。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor Reserved Memory  
User Manual 
Confidential B 
 如何在 Kernel dts 中增加一个新的 Reserved Memory 节点？ 
在 Kernel dts 中找到 reserved memory 节点，在这下面添加自己的 reserved memory 的子节点。 
reserved-memory { 
    xxx-reserved-memory { 
        compatible = “xxx”; 
        no-map; 
        size = <0 0x200000>; 
        alignment = <0 0x200000>; 
    }; 
    xxx-reserved-memory { 
        compatible = “xxxx”; 
        reg = <0 0x44400000 0 0x10000>; 
    }; 
    …… 
}; 
 
• 蓝色字体：reserved memory 的 start address； 
• 红色字体：size； 
• alignment：对齐大小；  
• compatible：关联相应的驱动程序，在 Kernel 启动流程阶段执行相应的驱动程序对这块 reserved memory 进
行特殊处理； 
• no-map：加上该属性意味着这块内存不会做 PA → VA 的线性映射，Kernel 也不会管理到这块 memory. 
 
这种是 Kernel 原生提供的方法，更多节点含义可以参考 
https://android.googlesource.com/kernel/msm/+/android-7.1.0_r0.2/Documentation/devicetree/bindings/reserved-
memory/reserved-memory.txt 
 
 如何使用 mblock 来 Reserve Memory？ 
mblock 是 MediaTek 开发在 LK2 阶段管理 reserved memory 的机制，新增一块 reserved memory 所使用的 API 为
mblock_alloc 和mblock_alloc_range。 
使用时需要指定以下参数： 
参数 释义 
reserved_size 预留的内存大小 
align 预留内存的对齐大小 
lower_bound 预留内存的地址下限 
limit 预留内存的地址上限 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor Reserved Memory  
User Manual 
Confidential B 
参数 释义 
expected_address 
指定期望的 start address，如果是 free 的，则会分到这
个 start address；如果已经被占用了会报错。不指定
expected_address 的话，会根据地址上下限动态地去找
一块符合 size 要求的区间 
mapping 
预留内存的 mapping 类型，0 为 no-map，1 为
mapping，2 为 reusable 
name 预留内存的名称 
mblock alloc 的方向 
默认会在 lower_bound~limit 范围内，从 limit 往前寻
找，找到一块 free 的满足要求的 address 返回；如果
找不到满足要求的，则会 fail. 
 
使用示例如下： 
 
图 1-2. mblock_alloc 使用示例 
 
alloc 成功会显示如下 log，start: 0x8fa00000 为 alloc 的 start address。 
mblock_alloc_range_no_lock:535: start: 0x8fa00000, sz: 0x600000 lower_bound: 0x0, limit: 
0x90000000,mblock_alloc_range_no_lock:537: map:0 name:apu_apusys-rv_secure 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor Reserved Memory  
User Manual 
Confidential B 
补充： 
1. 调用mblock_alloc 分配 reserved memory 的原理与 dts 中的 reserved memory 是相同的。LK2 在结束时会将 
mblock_alloc 分配的 reserved memory 信息以 dts 节点的形式写入 fdt 中，对应的 log 为： 
mblock_fdt_reserved_append:1595: mblock-reserved-memory is appended successfully 
 
2. 在 LK2 其他文件中，如果需要查询前面已经 reserved memory，可以使用
mblock_query_reserved_by_name(xxx,0)，参数 xxx 是 reserved memory 的 name，返回结构体 reserved，
其中 reserved->size 是查询到对应的 size，reserved->size 是查询到对应的 start address。  
 
举例如下: 
 
图 1-3. mblock_query_reserved_by_name 使用示例 
 
1.3 Kernel Driver 如何获取 Reserved Memory 使用？ 
在 Kernel driver 中通过 compatible 名称找到指定 node，解析出对应 reserved memory 的 start phys address 和 size，
再映射成 virt address，后续就可以使用这段 memory 了。举例如下： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor Reserved Memory  
User Manual 
Confidential B 
 
图 1-4. mblock_query_reserved_by_name 使用示例 
 
1.4 如何 Free 一块 Reserved Memory？ 
在 LK2 阶段 free 一块 reserved memory 所使用的 API 为mblock_free 和mblock_free_partial。 
 
• int mblock_free(u64 addr);// 以addr 起始的整块 reserved memory 全部 free 
• int mblock_free_partial(u64 addr, u64 size);// free 起始地址为addr，大小为size 的部分的
reserved memory 
 
使用时需要指定以下参数： 
参数 释义 
addr 
整块 free 的话，这里填 alloc 时返回的 reserved 
memory 的 start address；部分 free 的话，这里填希望
被 free 的部分 reserved memory 的 start address 
size 要 free 的大小 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor Reserved Memory  
User Manual 
Confidential B 
 
使用示例如下： 
 
图 1-5. mblock_free 使用示例 
free 成功有如下 log： 
mblock_free_with_size:970: start 0x1c0000000 size: 0x7c00000, name: LK_KERNEL 
 
注意： 
当前，mblock 相关的函数mblock_alloc 和mblock_free 目前仅支持在 LK2 阶段调用。如果在 LK 阶段使用完 reserved 
memory，可以使用mblock_free 来 free；如果需要保留到 Kernel 阶段使用一段时间再释放，可以在 Kernel 启动后调用 
free_reserved_page 接口来 free。 
 
举例如下： 
 
图 1-6. free_reserved_page 使用示例 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor Reserved Memory  
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0108 MT8668_Hypervisor_SDCard_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_SDCard_User_Manual_CN_V1.0.pdf

SHA-256：88161ea5f13a3ae7ded76ed7bdece0805fda9105eabf1b0c08918ce24ec336cc

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0108.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Hypervisor SDCard 
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 卢东 正式版 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 SDCard ······································································································································································· 5 
1.1 概述·········································································································································································· 5 
 基本概述 ······················································································································································ 5 
 缩略词 ·························································································································································· 5 
1.2 架构/流程概述 ························································································································································ 5 
 SDCard 介绍 ·················································································································································· 5 
 MT8668 SDCard 特性 ··································································································································· 6 
1.3 配置/客制指南 ························································································································································ 7 
 Yocto SOS Passthrough ·································································································································· 7 
 UOS Passthrough ··········································································································································· 9 
1.4 常见问题/故障排除 ·············································································································································· 11 
 SD 卡不识别，量测不到 VDD 电压 ·········································································································· 11 
 插 SD 卡开机可以识别，热插拔不识别 ·································································································· 12 
附件一 附加条款 ····························································································································································· 13 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
图片目录 
图 1-1. UHS-I 卡初始化流程 ····················································································································································· 6 
图 1-2. SDCard 的 DTS 节点 ······················································································································································· 7 
图 1-3. SDR104 模式的 pinctrl 节点 ·········································································································································· 8 
图 1-4. SDCard 电源在 Yocto SOS 端 DTS 配置 ······················································································································· 10 
图 1-5. SDCard 电源在 UOS 端 DTS 配置 ································································································································ 10 
图 1-6. SOS 删除相应中断号 ·················································································································································· 11 
图 1-7. UOS 增加相应中断号 ·················································································································································· 11 
图 1-8. 用于检测引脚的 dws 设置 ········································································································································· 12 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 5 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
1 SDCard 
1.1 概述 
 基本概述 
本章节介绍 SDCard 控制器的硬件特性，软件配置和功能，以及常见问题的 debug 方法。 
 
 缩略词 
表 1-1. 缩略词 
缩略词 全称 
DDR50 Double Data Rate up to 50MB/s@50MHz 
MMC MultiMedia Card 
SDR104 Signal Data Rate up to 104MB/s@208MHz 
SDR12 Signal Data Rate up to 12.5MB/s@25MHz 
SDR25 Signal Data Rate up to 25MB/s@50MHz 
SDR50 Signal Data Rate up to 50MB/s@100MHz 
UHS-I Ultra High Speed Phase I card 
 
1.2 架构/流程概述 
 SDCard 介绍 
SDCard 是一种基于半导体快闪存储器的新一代高速存储设备，是从 MMC 卡 (MultiMedia Card) 格式上发展而来，具
有高记忆容量、快速数据传输率、极大的移动灵活性和 良好的安全性，被广泛应用于便携装置上。在 SD3.0 协议
中，SD 卡的理论最大容量可达 2TB，理论最大读写速度可达 104MB/s。 
 
SD 卡主要引脚和功能描述如下： 
(1) CLK: 时钟信号，控制器或 SD 卡在每个时钟周期传输一个 cmd/data bit，在 UHS-I 速度模式下，最高可达
208MHz； 
(2) CMD: 命令和响应复用引脚，命令是由控制器发给 SD 卡，响应是 SD 卡对控制器发送的应答； 
(3) DAT0~3: 数据线，数据可以从 SD 卡传向控制器 (read)，也可以从控制器传向 SD 卡 (write)； 
(4) VDD: SD 卡的供电脚，通常配置 3.3V 电压，协议规定的范围 2.7V~3.6V； 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
(5) CD: SD 卡插入检测，通常借由 SD 卡座机械结构实现有卡/无卡时 GPIO 电平变化。 
 
 
图 1-1. UHS-I 卡初始化流程 
 
 MT8668 SDCard 特性 
(1) 兼容 SD3.0 协议标准 
(2) 支持 Basic DMA 和 Descriptor DMA 模式 
(3) 支持 Bus speed mode: Default Speed/High Speed/SDR12/SDR25/SDR50/SDR104/DDR50  
(4) 支持 1/4bits bus width 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
1.3 配置/客制指南 
 Yocto SOS Passthrough 
1.3.1.1 内核配置 
配置文件位置： 
meta/meta-mediatek-mt8668-hyp/recipes-kernel/linux/files/sos_config/auto8668p1_64_sos.config 
 
(1) 启用 SDCard 支持 
CONFIG_MMC = y 
(2) 启用联发科主机驱动程序支持 
CONFIG_DEVICE_MODULES_MMC_MTK = m 
 
1.3.1.2 DTS 节点 
 
 
图 1-2. SDCard 的 DTS 节点 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
(1) SD2.0 卡支持配置 “cap-sd-highspeed”，SD3.0 高速卡 mode 配置 “sd-uhs-xxx”； 
(2) SD driving strength 可以在对应 mode 的 pinctrl 节点配置，比如下面 SDR104 mode； 
 
 
图 1-3. SDR104 模式的 pinctrl 节点  
 
(3) SD 卡检测脚通过 “cd-gpios”配置 GPIO pin，GPIO_ACTIVE_LOW 表示插卡时低电平，GPIO_ACTIVE_HIGH 则表示
插卡时高电平； 
(4) 根据实际使用的 SD 卡端 VDD 以及 Host 端 IO 供电配置 “vmmc-supply”和 “vqmmc-supply”。如果需要使用 fast 
power off （拔卡时 VMCH 硬件下电）功能，“vmmc-supply”配置节点&mt6373_vmch_eint_high（对应“cd-gpios”
的 GPIO_ACTIVE_LOW）或&mt6373_vmch_low（对应“cd-gpios”的 GPIO_ACTIVE_HIGH）；如果不需要使用 fast 
power off 功能，“vmmc-supply”配置节点&mt6373_vmch。 
 
1.3.1.3 KO 表 
添加 host driver ko 到如下路径的 ko table，第三列配置 “ramdisk”会安装到 initramfs。 
meta/meta-mediatek-mt8668-hyp/recipes-kernel/linux/ko_order_table/ko_order_table.csv: 
 
 
1.3.1.4 设备挂载 
SDCard 在 Yocto SOS 端挂载到 share folder，通过 virtio-fs 实现多系统访问。例如为了在 Android-IVI UOS 端实现双系
统访问，挂载命令参考如下： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
mkdir -p /data/share/media/sdcard 
mount -t ext4 /dev/mmcblk0p1 /data/share/media/sdcard 
在 Android-IVI UOS 端对应的访问路径为/data/vendor/share/media/sdcard。 
 
 UOS Passthrough 
如果只需要在 Android-IVI 或者 Yocto-tbox UOS 端访问 SDCard，请先 disable Yocto SOS 端 SDCard dts 节点，然后进行
以下配置。 
 
1.3.2.1 内核配置 
配置方式与章节 1.3.1.1 相同，Android-IVI 默认已配置。 
Yocto-tbox 位置：meta/meta-mediatek-mt8668-hyp/recipes-kernel/linux-
uos/files/config/auto8668p1_64_uos.config 
 
1.3.2.2 DTS 节点 
配置方式与章节 1.3.1.2 相同。 
 
1.3.2.3 KO 表 
添加 host driver ko 到 ko table 文件。 
Android-IVI 位置：device/mediateksample/auto8668p1_64_vm_uos/ko_order_table.csv 
Yocto-tbox 位置：meta/meta-mediatek-mt8668-hyp/recipes-kernel/linux-
uos/ko_order_table/ko_order_table.csv 
 
 
1.3.2.4 其它相关资源配置 
(1) 电源虚拟化支持 
– 在 Yocto SOS 端 dts 文件meta/meta-mediatek-mt8668-hyp/recipes-
kernel/linux/files/sos_dts/auto8668p1_64_sos.dts 中添加对 SDCard 两路电源的设定，不注册它
们。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
 
图 1-4. SDCard 电源在 Yocto SOS 端 DTS 配置 
 
– 在 Android-IVI 或者 Yocto-tbox UOS 端 dts 中删除 SDCard 两路电源的设定，注册它们。 
 
图 1-5. SDCard 电源在 UOS 端 DTS 配置 
 
(2) 中断虚拟化支持 
在prebuilt/hypervisor/grt 内修改配置增加对 UOS 端 SDCard host 中断号 516 （需要加 32 后等于 548）的
支持。 
– sos_mt8668.lua 中删除中断号 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
 
图 1-6. SOS 删除相应中断号 
 
– uos_alps_pv8668.lua(Android-IVI)或者 uos_tbox_pv8668.lua(Yocto-tbox)中增加中断号 
 
图 1-7. UOS 增加相应中断号 
 
1.4 常见问题/故障排除 
 SD 卡不识别，量测不到 VDD 电压 
(1) 按照章节 1.3 检查 Kernel config 和 DTS 配置是否正确； 
(2) 如果 VDD 供电 power 用的是 MT6373，并且 detect pin 有接到 MT6373 的 SD_DET 脚，请检查 DTS 中 “vmmc-
supply”配置的 power 节点与 detect pin 的极性是否匹配； 
(3) 如果步骤(2)检查结果匹配，请将“vmmc-supply”配置&mt6373_vmch 看 VDD 是否可以上电，可以上电表示 fast 
power off 功能有问题，提 PMIC issue 到 MediaTek； 
(4) 如果步骤(3)不可以上电，抓取 Kernel log 并提 SDCard issue 到 MediaTek。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
 插 SD 卡开机可以识别，热插拔不识别 
(1) 按照章节 1.3.1.2 检查 DTS 中 “cd-gpios”的配置是否正确； 
(2) 如果 DTS 配置没有问题，检查 src/devtools/dct/dws/mt6881/${PROJECT}.dws （Yocto 路径）或者
vendor/mediatek/proprietary/tools/dct/dws/mt6881/${PROJECT}.dws （Android 路径）中 detect pin
对应的 GPIO 配置是否正确，参考如下配置： 
 
图 1-8. 用于检测引脚的 dws 设置 
 
(3) 如果配置检查正确但是热插拔还是无法识别，请再硬件量测下 detect pin 在插/拔卡状态下的电平是否符合预
期，符合预期的话请提 SDCard issue 到 MediaTek。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 Hypervisor SDCard 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0109 MT8668_Hypervisor_Secure_Boot_Remote_Signature_SOP_V0.1.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Secure_Boot_Remote_Signature_SOP_V0.1.pdf

SHA-256：0b8cec92f7cc2731cc97af8f20ba9e1e9516a5f18428688155d3581b99efc52a

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0109.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
双系统安全启动远程签名
V0.1
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
Revision History
Version Date Author Description
0.1 2026-01-28 Steven Gao Initial draft
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
bl2.img, vbmeta.img, vbmeta_system.img, vbmeta_vendor.img, modem.img, 
spmfw.img, pi_img.img, dpm.img, scp.img,  vcp.img, sspm.img, mcupm.img, 
gpueb.img, apusys.img, gz.img, boot.img, vendor_boot.img, init_boot.img, 
dtbo.img, tee.img, consys_gnss.img, connsys_wifi.img, consys_bt.img, 
logo.img, audio_dsp.img, super.img, system.ext4,bl2-an.img, yocto-boot.img
签名Image清单
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
mcf_ota.img, ccu.img, userdata.ext4, userdata.img
未签名image清单
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
从安全部门获取secure boot 使用的公钥，Android 和Yocto key 可以一样
1. 准备公钥和证书
Key Name Key 类型 Key 用途
root_pubk.pem Android root 公钥 Android prebuilt image 签名
img_pubk.pem Android image 公钥 Android prebuilt image 签名
sbc_key.pem yocto root 公钥 Yocto lk签名
verified_key.pem yocto image 公钥 Yocto lk，fit image，rootfs签名
verified_key.crt yocto image 证书 Yocto fit image 公钥
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
1. 抓取android branch
2. cd vendor/mediatek/proprietary/scripts/sign-image_v2
3. 将第4页root pubk key 和image pubk key 复制到hsm_test_keys目录下
4. python img_key_deploy.py mt6881 cert1_key_path=hsm_test_keys
/root_pubk.pem cert2_key_path=hsm_test_keys/img_pubk.pem
root_key_padding=pss | tee gen_cert1_cert2_key.log
5. 更新内容会在 vendor/mediatek/proprietary/custom/mt6881/security/cert_config
2. 替换本地环境的KEY—Android签名key
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
6. 将上一步的两把公钥继续更新到<yocto branch>/meta/meta-mediatek-
mt8668/scripts/sign-image_v2/hsm_test_keys
7. 在上一级sign-image_v2目录执行以下命令生成签名用的证书，
python img_key_deploy.py mt6881 
cert1_key_path=hsm_test_keys/root_pubk.pem
cert2_key_path=hsm_test_keys/img_pubk.pem root_key_padding=pss | tee 
gen_cert1_cert2_key.log
2. 替换本地环境的KEY—Android签名key
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
将第4页Yocto 三把公钥更新到<yocto branch>/meta/meta-
mediatek/conf/machine/keys/ 目录下，预期都是替换文件，不会是新
增文件。
2.替换本地环境的KEY—Yocto签名key
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
1. 抓取android branch
2. cd vendor/mediatek/proprietary/scripts/sign-image_v2/der_extractor
3. python pem_to_der.py root_pubk.pem root_pubk.der
4. chmod 777 der_extractor
5. cd  android根目录
6. ./vendor/mediatek/proprietary/scripts/sign-
image_v2/der_extractor/der_extractor root_pubk.der oemkey.h
ANDROID_SBC
注：
root_pubk.pem 为第4页生成的android root 公钥，该步骤用于生成校验用的oemkey.h文件
2.替换本地环境的KEY—校验公钥
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
2. 准备本地环境的KEY—校验公钥
Yocto lk2 <yocto code>/src/bsp/lk2/target/auto8668p1_64_ufs/include/oemkey.h
Adnroid lk2 <yocto code>/src/bsp/lk2/target/auto8668p1_64_ufs/include/oemkey.h （最
新的版本lk2_an和lk2合并为一包code了）
更新以下文件对应code
不要直接替换oemkey.h文件，将新gen出的oemkey.h内的OEM_PUBK覆盖原始oemkey.h的对应数组，不要修改其他配
置（如果是RSA3072 key, 请覆盖对应的OEM_3072_PUBK_SZ）
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
配置<yocto branch> /meta/meta-mediatek-mt8668/conf/machine/auto8668p1_64.conf
配置<yocto branch> /meta/meta-mediatek-mt8668-hyp/conf/machine/auto8668p1_64_uos.inc
3. 配置本地环境
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
<yocto branch>/meta/meta-mediatek-mt8668/scripts/sign-image_v2/hsm.py
<yocto branch>/meta/meta-mediatek/recipes-bsp/lk/files/pbp/hsm.py
<yocto branch>/meta/meta-mediatek/recipes-bsp/secure-boot/hsm-sign-
env/hsmsigntool/hsm_sign_tool.py
<android branch>/ vendor/mediatek/proprietary/scripts/sign-image_v2/hsm.py
客制化 hsm_rsa_sign 函数
3. 配置本地环境
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
DA 远程签名
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
从安全部门获取secure boot 使用的公钥，可以跟之前的key一样（root和img就是前面文
档生成的两把key）
1. 准备公钥和证书
Key Name Key 类型 Key 用途
root_pubk.pem Android root 公钥 签名auth file
img_pubk.pem Android image 公钥 签名auth file
da_pubk.pem Android da 公钥 签名da
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
将上一步的三把公钥改成跟图片高亮文件一样的名字，更新到
<android branch>/
vendor/mediatek/proprietary/scripts/secure_chip_tools/custom_keys
比如da_pubk.pem 改名成da_prvk.pem 覆盖该目录文件。
2. 替换本地环境的KEY
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
客制化<android branch>/
vendor/mediatek/proprietary/scripts/secure_chip_tools/custom_sign.py 的
hsm_rsa_sign 函数。
Data: hash 值
Key：公钥
Padding：算法的padding属性
Sig：签名后的signature指针
Oem_args: 客制化参数
3. 配置本地环境
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
1. 将da 放到<android branch>/
vendor/mediatek/proprietary/scripts/secure_chip_tools/ 目录下
2. 签名da
python MTK/resign_da.py DA_BR.bin
MT6881 ./settings/Legacy/da/bbchips_pss.ini all DA_BR_resigned.bin
3. 签名auth file
python MTK/toolauth.py -i ./settings/Legacy/authfile/toolauth_key.ini -
g ./settings/Legacy/authfile/toolauth_gfh_config_pss.ini da.auth
原始da： DA_BR.bin
签名后的da： DA_BR_resigned.bin
签名后的auth file： da.auth
4. 执行签名命令
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential
© 2026 MediaTek Inc. All rights reserved. The term “MediaTek” refers to MediaTek Inc. and/or its affiliates.
This document has been prepared solely for informational purposes. The content herein is made available to a restricted number of clients or partners, for 
internal use, pursuant to a license agreement or any other applicable agreement and subject to this notice. THIS DOCUMENT AND ANY ORAL INFORMATION 
PROVIDED BY MEDIATEK IN CONNECTION WITH THIS DOCUMENT (COLLECTIVELY THIS “DOCUMENT”), IF ANY, ARE PROVIDED “AS IS” WITHOUT WA RRANTY OF 
ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. MEDIATEK DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS OR GUARANTEE 
REGARDING THE USE OR THE RESULT OF THE USE OF THIS DOCUMENT IN TERMS OF CORRECTNESS, ACCURACY, TIMELINESS, RELIABILITY, OR OTHERWISE. 
MEDIATEK SPECIFICALLY DISCLAIMS ALL WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE AND ANY 
WARRANTIES ARISING OUT OF COURSE OF PERFORMANCE, COURSE OF DEALING OR USAGE OF TRADE. This Document must be held in strict confidence and may 
not be communicated, reproduced, distributed or disclosed to any third party or to any other person, or being referred to publicly, in whole or in part at any time 
except with MediaTek’s prior written consent, which MediaTek reserves the right to deny for any reason. You agree to indemnify MediaTek for any loss or 
damages suffered by MediaTek for your unauthorized use or disclosure of this Document, in whole or in part.  If you are not the intended recipient of this
document, please delete and destroy all copies immediately.
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.
 MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0110 MT8668_Hypervisor_SPI_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_SPI_User_Manual_CN_V1.0.pdf

SHA-256：9f37a8db2acdc0978f537d46c88228a20c2b8bbed18f24af597ad1e78af26894

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0110.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Hypervisor SPI User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 朱昊 正式版 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 SPI ············································································································································································· 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 名词解释 ······················································································································································ 5 
1.2 架构/流程概述 ························································································································································ 5 
 SPI 介绍 ························································································································································ 6 
 MT8668 SPI 特征 ·········································································································································· 6 
 SPI 传输格式 ················································································································································· 8 
 接口说明 ······················································································································································ 8 
 编程指南 ······················································································································································ 9 
1.3 配置/客制化指南 ·················································································································································· 10 
 设备树 ························································································································································ 10 
 节点配置 ···················································································································································· 11 
 PAD_SEL ······················································································································································ 11 
 频率 ···························································································································································· 12 
 SPI 模式 ······················································································································································ 12 
 FIFO 和 DMA 模式 ······································································································································ 12 
 支持多个设备 ············································································································································ 13 
 测试和调试 ················································································································································ 13 
1.4 常见问题/故障排查 ·············································································································································· 14 
 SPI 问题调试方法 ······································································································································· 14 
 dts 配置 ······················································································································································ 14 
 确认 GPIO 模式 ·········································································································································· 14 
 测量波形 ···················································································································································· 15 
 如何打印 SPI 寄存器信息 ·························································································································· 15 
 寻求 MediaTek 帮助 ··································································································································· 15 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
附件一 附加条款 ····························································································································································· 16 
 
 
图片目录 
图 1-1. SPI Master 和 SPI Slave 之间的引脚连接 ····················································································································· 5 
图 1-2. SPI 总线驱动框架图 ······················································································································································ 6 
图 1-3. 四种通信模式波形 ························································································································································ 7 
图 1-4. 主设备与多设备引脚连接 ··········································································································································· 7 
图 1-5. SPI 传输格式 ·································································································································································· 8 
 
表格目录 
表 1-1. 名词解释········································································································································································ 5 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
1 SPI 
1.1 概述 
 简单介绍 
本章节介绍 MT8668 SPI 控制器的硬件、软件及其功能。  
 名词解释 
表 1-1. 名词解释 
缩写 解释 
CPHA Clock Phase 时钟相位 
CPOL Clock Polarity 时钟极性 
CS Chip Select 芯片选择引脚 
DMA Direct Memory Access 直接内存访问 
FIFO First In First Out 先进先出 
MISO Master In Slave Out, SPI Master 输入数据和 SPI Slave 输出数据 
MOSI Master Out Slave In, SPI Master 输出数据和 SPI Slave 输入数据 
PIO Programmed Input/Output Model 编程输入/输出模型 
SCLK SPI Clock, SPI Master (SPI Controller) 与 SPI Slave 数据传输频率 
SPI Serial Peripheral Interface 串行外设接口 
 
1.2 架构/流程概述 
图 1-1. SPI Master 和 SPI Slave 之间的引脚连接 
SPI 
Master 
 
CS 
CLK 
MOSI 
MISO 
CS 
CLK 
MOSI 
MISO 
SPI 
Slave 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
 
图 1-2. SPI 总线驱动框架图 
 
 SPI 介绍 
SPI 接口是一种串行、四引脚传输协议。图 1-1 是 SPI Master 与 SPI Slave 之间的连接示例。SPI 控制器接口是一个主
机，负责与从机之间的数据传输。通常 SPI 会接的设备有：闪存、触控板等。图 1-2 是 SPI 总线驱动的整体架构和
各个模块之间的关系，详细描述了数据流和调用关系。 
 
 MT8668 SPI 特征 
• 提供 8 个 SPI 端口 
• 支持 DMA 和 FIFO 模式两种传输模式  
• FIFO 模式在一次传输中最多支持 32 个字节 
• 如果传输长度小于 1024 字节，则 DMA 模式最多支持 1024 字节 
• DMA 模式支持 1024 字节的倍数（长度 = 循环次数 * 1024，1 ≤循环次数≤ 256） 
• 最大传输 频率为 52 MHz 
• 有四种通信模式可用（模式 0、1、2、3），参见图  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
• 这基本上定义了 MOSI 线路切换的 SCLK 边沿、主机对 MISO 线路进行采样的 SCLK 边沿和 SCLK 信号稳定电平
（即时钟电平，当时钟未激活时，高电平或低电平）。每种模式都由一对称为  “时钟极性”（CPOL）和“时
钟相位”（CPHA）的参数定义 
 
 
图 1-3. 四种通信模式波形 
 
• SPI 控制器只有一个 CS 引脚，也就是说，它只能支持单从。但是，您可以将 GPIO 用作 CS 来支持多个设备。如
图 1-4 所示。 
 
图 1-4. 主设备与多设备引脚连接 
CS2（GPIOy） 
MOSI 
CLK 
SPI Slave 1 
SPI Master 
GPIO 
SPI Slave 2 
SPI slave 3 
MISO 
CS1（GPIOx） 
CS3（GPIOz） 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
 SPI 传输格式 
在 DMA 模式下，要传输的数据应提前在系统中准备好。在 PIO 模式下，系统应首先推送传输到 SPI TX FIFO 的数
据。收到 START 命令后，SPI 将连续向 Slave 发送数据，同时从 Slave 接收数据。 
 
 
图 1-5. SPI 传输格式 
 
 接口说明 
1.2.4.1 spi_sync 
原型 参数 返回值 
int spi_sync（struct 
spi_device *spi, struct 
spi_message *message） 
SPI：结构体 spi_device 的指针 
成功返回 0，否则返回错误码 
Message ：结构体 spi_message 的指针 
 
1.2.4.2 spi_async 
原型 参数 返回值 
int spi_async（struct 
spi_device *spi, struct 
spi_message *message） 
SPI：结构体 spi_device 的指针 
成功返回 0，否则返回错误码 
Message：结构体 spi_message 的指针 
 
1.2.4.3 spi_write_then_read 
此例程的参数始终使用小型缓冲区进行复制，不应将其用于超过 32 个字节。性能敏感型或批量传输代码应改为使
用带有 dma 安全缓冲区的 spi_{async，sync}（） 调用。 
原型 参数 返回值 
int spi_write_then_read
（struct spi_device *spi，
SPI：结构体 spi_device 的指针 
成功返回 0，否则返回错误码 
txbuf：要写入的数据 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
原型 参数 返回值 
const void *txbuf, unsigned 
n_tx, unsigned n_tx， void 
*rxbuf， unsigned n_rx ） 
n_tx：txbuf 的大小（以字节为单位） 
rxbuf：数据将被读到的缓冲区 
n_rx：rxbuf 的大小（以字节为单位） 
 
 编程指南 
1.2.5.1 以 spi_sync 传输数据 
数据在 SPI 控制器和 SPI 从设备之间交换，因此发送数据的步骤与接收数据的步骤相同。  
例如，发送和接收数据： 
struct spi_message msg; 
struct spi_transfer xfer; 
 
spi_message_init（&msg）; 
memset（&xfer， 0， sizeof（xfer））; 
 
xfer.tx_buf = local_tx_buf; 
xfer.rx_buf = local_rx_buf; 
xfer.len = data_length; 
spi_message_add_tail（&xfer， &msg）; 
 
ret = spi_sync（spi， &msg）; 
if（ret） { 
 ......; 
} 
 
1.2.5.2 以 spi_async 传输数据 
函数spi_sync 是同步的。如果客户想使用异步函数，请改用 spi_async。请注意，回调函数应注册到 
spi_message.complete。 
源代码路径：co_common/drivers/spi/spi.c. 
spi_message.complete callback function: 
 
static void xxxxxx_complete(void *args) 
{ 
 //transfer was success……; 
} 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
Sending and receiving data in asynchronous: 
 
struct spi_message msg; 
struct spi_transfer xfer; 
 
spi_message_init(&msg); 
memset(&xfer, 0, sizeof(xfer)); 
 
xfer.tx_buf = local_tx_buf; 
xfer.rx_buf = local_rx_buf; 
xfer.len = data_length; 
spi_message_add_tail(&xfer, &msg); 
 
msg.complete = xxxxxx_complete; 
msg.context = args; 
 
ret = spi_async(spi, &msg); 
if(ret) { 
 ……; 
} 
 
1.3 配置/客制化指南 
 设备树 
源代码路径：co_device_module/arch/arm64/boot/dts/mediatek/ 
• 添加 pinctrl 以设置 SPI pinmux 
&pio { 
 spi_pins： spi@0 { 
  pins_spi { 
   pinmux = <PINMUX_GPIOxxx__FUNC_SPIM1_CSB>， 
     < PINMUX_GPIOxxx__FUNC_SPIM1_CLK >， 
     < PINMUX_GPIOxxx__FUNC_SPIM1_MO >， 
     < PINMUX_GPIOxxx__FUNC_SPIM1_MI >; 
   bias-disable; 
  }; 
 }; 
}; 
 
• 在 SPI 总线上添加从设备 
&spi { 
 pinctrl-names = "default"; 
 pinctrl-0 = <&spi_pins>; 
 status = "okay"; 
 spidev0: spi@0 { 
  compatible = "mediatek,spi-mt65xx-test"; 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
  reg = <0>; 
  spi-max-frequency = <1000000>; 
                }; 
      }; 
 
 节点配置 
设备树中 SPI 节点默认是 “disabled” 状态: status = "disabled"： 
spi: spi@xxxxxxxx { 
   compatible = "mediatek,mtxxxx-spi"; 
   mediatek,pad-select = <0>; 
   ...... 
   ...... 
   status = "disabled";//默认关闭 
  }; 
 
使用时，在对应 project dts 中进行配置: status = "okay"： 
&spi { 
 pinctrl-names = "default"; 
 pinctrl-0 = <&spi_pins>; 
 mediatek,pad-select = <0>;  
 status = "okay";//手动配置打开 
 spidev0: spi@0 { 
  compatible = "mediatek,spi-mt65xx-test"; 
  reg = <0>; 
  spi-max-frequency = <1000000>; 
                 }; 
     }; 
 
 PAD_SEL 
在某些 IC 上，一组 SPI 会有不同的 GPIO 可以选择，根据 GPIO 表格信息确定 SPI 使用哪组 GPIO。比如在 MT8676
上 SPI7 有SPI7_A/SPI7_B。此时需要在 dts 中添加 mediatek,pad-select = <x>; 
&spi { 
 pinctrl-names = "default"; 
 pinctrl-0 = <&spi_pins>; 
 mediatek,pad-select = <0>; //x = 0 1 分别对应A B。 
 status = "okay"; 
 spidev0: spi@0 { 
  compatible = "mediatek,spi-mt65xx-test"; 
  reg = <0>; 
  spi-max-frequency = <1000000>; 
                 }; 
     };  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
 频率 
SPI 控制器支持偶数倍分频，支持的最大频率 SPI 控制器为 52 MHz，SPI_SCK ≤ 52MHz。 
您可以通过两种方式设置 SPI_CLK： 
1. 在设备树中，配置属性 spi-max-frequency ，例如，spi-max-frequency = <1000000>; 设置默认 SPI_CLK 
= 1MHz。  
2. 在设备驱动中，配置结构 spi_transfer 的字段speed_hz，例如 xfer->speed_hz = 1000000; 设置 SPI_CLK 
= 1MHz，它将在此次传输生效。 
 
 SPI 模式 
您可以通过两种方式设置 SPI 模式： 
1. 在设备树中设置 SPI 模式 
&spi { 
pinctrl-names = "default"; 
pinctrl-0 = <&spi_pins>; 
status = "okay"; 
spidev0: spi@0 { 
 compatible = "mediatek,spi-mt65xx-test"; 
 reg = <0>; 
 spi-cpol = <0>; 
 spi-cpha = <0>; 
 spi-max-frequency = <1000000>; 
        }; 
      }; 
 
2. 在设备驱动程序中设置 SPI 模式 
static int xxxxxx_probe(struct spi_device *spi) 
{ 
 ……; 
 spi->mode = SPI_MODE_0; // SPI_MODE_0, SPI_MODE_1, SPI_MODE_2, SPI_MODE_3 
 ……; 
} 
 
 FIFO 和 DMA 模式 
SPI 控制器支持 DMA 模式和 FIFO 模式传输数据。控制器通过传输数据长度自动选择。FIFO 模式的长度小于或等于
32 字节，DMA 模式的长度 大于 32 字节。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
 支持多个设备 
如果要在 SPI 总线上添加多个设备，可以使用 GPIO 作为支持 SPI_CS。例如，在 SPI 总线 0 上添加两个 SPI deivce，
使用 GPIO136 和 GPIO30 作为 SPI_CS1 和 SPI_CS2，如下所示（GPIO 编号仅作示例使用，请以实际为准）： 
&pio { 
 spi_pins: spi@0 { 
pins_spi { 
   pinmux = //<PINMUX_GPIO136__FUNC_SPIM1_CSB>, //SPI native cs 
     < PINMUX_GPIO137__FUNC_SPIM1_CLK >, 
     < PINMUX_GPIO138__FUNC_SPIM1_MO >, 
     < PINMUX_GPIO139__FUNC_SPIM1_MI >;  
   bias-disable; 
  }; 
pins_spi_cs { 
   pinmux = < PINMUX_GPIO136__FUNC_SPIM1_CSB >, //SPI_CS1 
    < PINMUX_GPIO30__FUNC_GPIO30 >, //SPI_CS2 
   output-high; 
  }; 
 
 }; 
}; 
 
&spi { 
pinctrl-names = "default"; 
pinctrl-0 = <&spi_pins>; 
cs-gpios = <&pio 136 0>,<&pio 30 0>; 
status = "okay"; 
spidev0: spi@0 { 
                            compatible = "xxxxxx"; 
                            reg = <0>; 
               spi-max-frequency = <1000000>; 
 }; 
spidev1: spi@1 { 
                            compatible = "xxxxxx"; 
                            reg = <1>; 
               spi-max-frequency = <1000000>; 
 }; 
}; 
 
 测试和调试 
您可以按照上面介绍的步骤配置 SPI 后验证 数据传输功能是否正常，例如验证 SPI 总线 0： 
将 SPI_MOSI 连接到硬件平台上的 SPI_MISO 或者打开 SPI LOOP BACK，添加对应的测试驱动程序。 
 
输入下列测试命令： 
echo -w len=32 > /sys/ bus/spi/devices/spixxx/spi 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
echo -w len=1024 > /sys/ bus/spi/devices/spixxx/spi 
 
spixxx 代表不同组的 SPI，以实际显示为准。 
 
1.4 常见问题/故障排查 
 SPI 问题调试方法 
大多数遇到的 SPI 问题都可先尝试通过如下方式调试： 
• 检查 dts 配置、GPIO 模式、pad-select 属性是否正确 
• 检查 SPI 寄存器信息是否正确 
• 测量波形是否符合预期，比如 TX 数据是否正确打出、电压值是否正常 
• 若收数据发生异常且比较有规律，比如移位，可以尝试降低 速度或调整 tick_dly 的值 
• 设备驱动代码写法是否标准，比如 TX、RX 缓冲区是否分配，TX、RX 数据长度是否一样 
 
 dts 配置 
请按照前文的提供的信息，检查 dts 配置是否正确 
 
 确认 GPIO 模式 
内核里查看引脚的状态 
输入以下命令: 
# cd /sys 
# find –name mt_gpio 
# cat mt_gpio // 
 
要输入绝对路径 
e.g., 
# cat /sys/devices/platform/soc/1000b000.pinctrl/mt_gpio 
PIN: [MODE] [DIR] [DOUT] [DIN] [PULL_EN] [PULL_SEL] [IES] [SMT] [DRIVE] ( [R1] [R0] ) 
0: 0 0 0 0 1 0 1 0 0 
1: 0 0 0 0 1 0 1 0 0 
2: 0 1 1 1 1 0 1 0 0 
3: 6 0 0 0 1 0 1 0 0 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
 测量波形 
使用示波器测量 SPI 波形是否符合预期。 
 
 如何打印 SPI 寄存器信息 
在driver/spi/spi-mt65xx.c 中添加如下内容 
#define LOG_CLOSE   0 
#define LOG_OPEN    1 
u8 spi_log_status = LOG_OPEN; 
 
#define spi_debug(fmt, args...) do { \ 
 if (spi_log_status == LOG_OPEN) {\ 
  pr_info("[spi]%s() " fmt, __func__, ##args);\ 
 } \ 
} while (0) 
 
 
static void spi_dump_reg(struct mtk_spi *mdata) 
{ 
 spi_debug("||**************%s**************||\n", __func__); 
 spi_debug("cfg0:0x%.8x\n", readl(mdata->base + SPI_CFG0_REG)); 
 spi_debug("cfg1:0x%.8x\n", readl(mdata->base + SPI_CFG1_REG)); 
 spi_debug("cfg2:0x%.8x\n", readl(mdata->base + SPI_CFG2_REG)); 
 spi_debug("cmd :0x%.8x\n", readl(mdata->base + SPI_CMD_REG)); 
 spi_debug("tx_s:0x%.8x\n", readl(mdata->base + SPI_TX_SRC_REG)); 
 spi_debug("rx_d:0x%.8x\n", readl(mdata->base + SPI_RX_DST_REG)); 
 spi_debug("status1:0x%.8x\n", readl(mdata->base + SPI_STATUS1_REG)); 
 spi_debug("pad_sel:0x%.8x\n", readl(mdata->base + SPI_PAD_SEL_REG)); 
 spi_debug("||**************%s end**************||\n", __func__); 
} 
 
分别在mtk_spi_fifo_transfer()and mtk_spi_dma_transfer()两个函数中调用
mtk_spi_enable_transfer() 之前调用spi_dump_reg()。 
 
 寻求 MediaTek 帮助 
若经过前文的排查仍无法解决您的问题，向 MediaTek 寻求帮助时顺便提供前文提到的包含 SPI 寄存器信息的相关
日志、波形图、dts、cat mt_gpio 等信息。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8668 Hypervisor SPI 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
 
 
 
  
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0111 MT8668_Hypervisor_Touch_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Touch_User_Manual_CN_V1.0.pdf

SHA-256：e6746757e7bf0d0665757673e779eb110c22b81a66d71acc0adbdf359190b595

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0111.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本号:  1.0 
出版日期:  2026-01-28
MT8668 Hypervisor Touch 
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 杨和成 正式版 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
1 Touch ········································································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 Touch Driver Porting ················································································································································· 4 
 Porting Source Code ······································································································································ 4 
 调试 Touch ···················································································································································· 5 
1.3 Touch Vhost 虚拟化配置---Version1 ······················································································································· 6 
 Touch Vhost 虚拟化跨域性能 ······················································································································ 7 
 Touch Vhost 虚拟化 Touch-Weston 仲裁机制 ····························································································· 7 
 Touch Vhost 虚拟化 Code 配置···················································································································· 9 
 Touch Vhost 虚拟化 Code 配置常见问题 ·································································································· 10 
1.4 Touch Handler 虚拟化流程---Version2 ·················································································································· 10 
 YOCTO 端流程（handler） ························································································································ 11 
 Android 端流程（vhost） ·························································································································· 12 
 新增 TP 操作 ·············································································································································· 12 
1.5 Virtio 虚拟化 Touch 常见问题 ······························································································································ 12 
1.6 Virtio 虚拟化 Touch 与 Panel 绑定 ······················································································································· 13 
附件一 附加条款 ····························································································································································· 14 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
1 Touch 
1.1 概述 
源 Touch driver 的移植一般按照厂商提供的规格进行调试即可，其主要关注的是 I2C 和 GPIO 的配置。对于接
SerDes 的 panel，需关注 SerDes 透传配置。若涉及 Hypervisor 系统，则需要在源 driver 基础上通过虚拟化方式实现
Touch 功能。MT8668 主要有两类移植方案，即 Touch Virito 虚拟化方案与 Touch Vhost 虚拟化方案，其中 Vhost 虚
拟化为一般采用方式，Virito 虚拟化方案因性能问题作为备用方案。 
 
1.2 Touch Driver Porting  
 Porting Source Code  
从联发科技或第三方厂商拿到 Touch Vendor source code 后，一般需如下步骤，确保 Touch driver 本身可以正常工
作： 
1. 拿到 source code 时，可能存在 kernel 版本升级情况，这时需先移植到对应版本，确保可以编译成功。主要更
改文件 Touch driver file、deconfig、DTS、ko_table，若具体平台需要配置其他文件，请咨询系统工程师帮助。 
2. 依据原理图，确认好对应 Touch 所使用的 interrupt/reset pin 的 GPIO，将所使用的 GPIO 号对应配置到 DTS 文
件中。 
3. 依据 Touch driver 中 compatible 字符，将其对应写到 DTS Touch 节点中。 
 
参考 DTS 配置如下：  
&i2c0 { 
 clock-frequency = <100000>; 
 pinctrl-names = "default"; 
 pinctrl-0 = <&i2c0_pins>; 
 status = "okay"; 
 
 ilitek@41 { 
  compatible = "ilitek,touch"; 
  reg = <0x41>; 
  interrupt-parent = <&pio>; 
  interrupts = <9 0x0>; 
  ilitek,irq-gpio = <&pio 9 0x0>; 
  ilitek,reset-gpio = <&pio 60 0x0>; 
  ilitek,vbus = "vcc_i2c"; 
  ilitek,name = "ilitek_i2c"; 
 }; 
}; 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
其中， 
• i2c 0: Touch 挂载的节点位置 
• clock-frequency = <100000>;   i2c clk 大小，具体大小请参照 spec，公版默认设置为 400k 高速模式 
• compatible = "ilitek,touch"; Touch 匹配字符 
• interrupts = <9 0x0>; Touch 中断 GPIO   
• ilitek,reset-gpio = <&pio 60 0x0>; Touch reset GPIO   
 
 调试 Touch 
常用调试命令：  
1. 显示 Touch 轨迹线：  
settings put system pointer_location 1 
settings put system show_touches 1 
 
2. 查看 log： 
echo 1 > /proc/mtprintk 
 
3. 查看 GPIO 引脚状态： 
find -name  soc.pinctrl 
cd /proc/mtk_gpio 
cat soc.pinctrl 
 
4. 查看 ko 是否正常加载： 
Lsmod |grep touch_name 
 
在将 Touch source code 移植到平台并可以编译成功后，如平台启动后，Touch 未生效，一般需要注意如下点： 
1. Touch 驱动 probe 流程 是否有跑完，一般驱动无法跑完有如下几种类型错误 
– DTS 未匹配，此问题需检查 DTS 中是否有 enable 此 Touch 节点，compatible 字符是否匹配 
– I2C 返回 -6，此错误表明未能识别 Touch 设备，需检查硬件线路是否连接正常， 是否供电正常， 如检查无
误后需要量测 I2C 波形进一步理清 
– I2C 返回 -110，需检查 I2C 部分是否已正常工作 
2. 概率性 Touch 不生效，一般 Touch 的供电电压有具体的限制，可以在 Touch driver probe 时，打印电压值来理清
问题 
3. Touch 位置存在偏差，需根据 display size 进行适配 Touch  
4. Touch 模块存在漏电问题，判断 Touch 在 suspend 时候是否有主动断电，及拉低对应 GPIO 
5. 检查 interrupt 和 reset pin 上电时序， 特定的 Touch driver 对两者的时序有具体要求，需按规格配置 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
6. 配置 SerDes，查询 SerDes 手册，联发科技的公版现已可按如下方式支持 6 panel Touch 
 
 
参考 SerDes 配置如下，需参考 96789 及 96752 手册对应配置： 
superframe_setting_hy: setting3 { 
 ser-super-frame = <1>; 
 ser-init-cmd = < 
   0x02dc 0x04 0x00 /* 96789 INT: des gpio4-> ser gpio10*/ 
   0x02dd 0xaa 0x00 /* 96789 huayang tp ser int GPIO10 */ 
   0x02de 0x6a 0x00 /* 96789 huayang tp ser int GPIO10 */ 
   0x02d9 0x04 0x00 /* 96789 INT: des gpio4 -> ser gpio9 */ 
   0x02da 0xa9 0x00 /* 96789 huayang tp ser int GPIO9 */ 
   0x02db 0x69 0x00 /* 96789 huayang tp ser int GPIO9 */ 
  >; 
 
1.3 Touch Vhost 虚拟化配置---Version1 
为 Touch 安全性，有将 Touch 放置在 Yocto 端，这种情况就需要 Touch 虚拟化来完成，公版 Touch Vhost 虚拟化流程
概图如下所示：  
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
 
 
1. 触摸 panel，产生中断信息，通过 Touch driver 上报 Touch firmware 解析的触摸位置信息。 
2. Yocto 端 weston 接收位置信息，由 weston 来决定是否将触摸事件分发给 Yocto APP。 
3. Touch driver 通过 Vhost 建立的 vritio_queue 将 event data 发送到 Android 端。 
4. Android 端虚拟 Touch driver 接收 Yocto 传过来的 event data。 
5. 虚拟 Touch driver 将 event data 组合后，上报给 input 模块。 
6. Input 模块对 event 信息处理后发往 framework 层进一步处理。 
7. 通过 Weston 传信息，Touch driver 将决定 event 发给 Yocto/Android 哪一端。 
 
 Touch Vhost 虚拟化跨域性能 
一般情况下，我们会认为在 Touch 虚拟化实现中，跨域耗时会占较大的时间比重，在 Virtio 虚拟化时的确是这样，
但当我们采用 Vhost 虚拟化后，从 Yocto 发往 Android 端的耗时可以降低到 1ms 以下，在轻负载的情况下，平均耗
时在 100µs 附近，性能远优于 Virtio 虚拟化方式。 
 
 Touch Vhost 虚拟化 Touch-Weston 仲裁机制 
需求背景： 在 Android display 上 出现 Yocto 的 APP，Touch 需要有选择性的发往一边。 
方案选择： 对于 Yocto APP 位置是否固定，提供两种方案。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
方案一：对于 Yocto 的 APP 固定位置时 
当 Yocto APP 启动后， Weston 会感知到 APP 的位置信息， 然后提前将位置信息下发给 driver，当触摸事件产生
后，Touch driver 将依据触摸的 (x,y) 位置信息和从 Weston 发来的位置区域信息，最终决定将 Touch event 发往哪一
端： 
 
 
但此方案是将业务逻辑下发到 Touch driver，无法处理 Weston input_range 这种情况，也无法满足从 Yocto 进行数据
注入的情况。 
 
 
无法处理 weston input_range 这种情况，黄色框为 Yocto 区域，但是这块区域会留给 Android 响应。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
 
方案二： 每次点击，Touch driver 都会上报第一个 event 中的 down 和 (X+Y) 给到 Yocto， 然后做等待动作，直到 
Weston 下发发往哪一端的的 flag，如果在 time out 时间内没有等待到这个 flag，Touch driver 会默认将 event 发往
Android。 
 
 
以第一个 down 作为判断发往 Android/Yocto OS 的判断点，直到 up 前的所有 event 都将会发给原 OS。 
业务逻辑放在 Weston。 
 
 Touch Vhost 虚拟化 Code 配置 
Touch Vhost 虚拟化与源 Yocto Touch driver 强相关，对于不同的 Touch driver 配置上有细节差异，需针对 Touch 
driver 进行二次配置。Touch Vhost 虚拟化本质上是提供一个 virtio_queue 通道，这个通道提供将 data 从 Yocto 发往
Android 的能力，我们将 Touch driver 的每一次 event 信息都保存成一组 data，将这组 data 传给 Android 后，由
Android 端虚拟化 Touch driver 拿到这组 data 进行重新组装 event，然后将 event 信息发往 framework 层。 
 
1. Yocto 端 Touch driver 配置细节 
对于 Yocto 端的 Touch driver 原有流程保持基本不变， 在原有流程 的 touch down/touch release 后边添加类似如
下 code，同步将 Touch event 发往 Android。 
INIT_WORK(&work->work, touch_event_work_func); 
 sprintf(work->str, "%d %d %d %d %d %d %d", flag, x, y, h, w, 
    id, touch_type); 
queue_work(touch_event_wq, &work->work); 
需要保证 Touch driver 中发送 data 的时序性。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
 
2. Android 端 Touch driver 配置细节 
参照公版已有建立的虚拟 Touch driver， 建立与 Yocto 相对应的虚拟 Touch driver， Yocto 和 Android 两边的联系
通过 Touch_type 建立。 
3. Hypervisor 端 Touch driver 配置细节 
使用公版已有 code 即可，无需另外配置。 
 
 Touch Vhost 虚拟化 Code 配置常见问题 
需要注意第一次配置时，需在 Touch driver 中尽量加全 log，避免多次添加耗时，调试报点逻辑时经常性会遇见各
种细节逻辑问题。 
1. 配置完后，Touch 多指标表现异常 
注意源 Touch driver 使用协议为 Type A 还是 Type B，不同协议 Yocto 与 Android 端的配置逻辑有差别，例如是
否添加 mt_slot 参数。 
 
2. 配置完成后，Down 点击不生效，但滑动无问题 
着重检查是否为时序问题，公版中通过 wait_for_completion_timeout(&touch_event_done, 3); 这个 API 来保证。 
 
1.4 Touch Handler 虚拟化流程---Version2 
 
MT8668 主要采用的是 Version2 方案。Version2 方案是根据 1.3 中提到的 version1 方案的基础上来进一步优化处理
的。 
当点击屏幕时，Touch driver 会上报 event 事件给 Weston，这个过程中 Touch handler 会去监听 event 事件，如果是
需要上报给 Android 的，那么就会通过 virtio_queue 通道将 data 发送给 Vhost driver，然后就会调用 Touch Vhost 对
data 进行组装，最后上报 event 给 framework 层。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
 
Touch Vhost 是根据 Touch handler 发送 data 的 touch_type 进行选择不同设备处理接口的，在接口中又根据 data 中
的 flag 来进行组装 event 事件进行上报。 
 YOCTO 端流程（handler） 
 
1. 注册 handler 
1) 调用 input_register_handler(&my_input_handler)。 
2) 内核会把你的 handler 注册到输入子系统。 
2. 匹配设备 
1) 内核会用 my_ids（id_table）去匹配系统中的 input 设备。 
2) 匹配成功后，调用 my_input_connect 对设备进行连接。 
3) 并且将设备名与监听设备名进行对应绑定 
3. 事件处理 
1) 设备有事件发生时，内核会调用 my_input_event 处理事件。 
2) 首先会判断监听 event 事件类型然后对其进行对应处理，并且设置 event 对应的 flag 方便安卓端进行解
析。 
4. 设备断开 
1) 设备断开，内核会调用 my_input_disconnect 做清理，进行 handler 注销。 
5. 注销 handler 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
1) 调用 input_unregister_handler(&my_input_handler); 注销 handler。 
 
 Android 端流程（vhost） 
1.在 touch_virtul 中会进行接收 Yocto 发送的数据并且根据 touch_type 对不同的设备进行不同的处理 
2.以 mipi 小屏为例，根据不同的 flag 进行不同的 event 事件上报. 参考 report_touch_down_mipi 
 新增 TP 操作 
1.   YOCTO 端(input_handler) 
1.1.在 touch_info 中添加你的监听设备名（自定义） 
1.2.同时需要在 my_ids 数组中做对应的添加 
1.3.在 my_input_connect 中进行新增设备屏幕与其监听设备名的绑定 
1.4.在 my_input_event 中进行设备处理的添加（一般只需要根据监听设备名添加 touch_type 设备类型） 
如果你需要添加其他的上报 event 事件需要进行定义 flag，与其他 event 做好区分即可。 
注：设置的 flag 不能为 0，否则 android 端无法正常接收 
 
2.    Android 端(tpd_control) 
2.1.首先定义 TP 输入设备和端口号（如：static struct input_dev *touch_input_dev_mipi, 
 #define touch_input_dev_mipi_port 0. 注：端口号与 touch_type 是一致的） 
2.2 在 touch_input_init 中进行虚拟设备节点的创建 
2.3 同时在 touch_virtul 中进行对应根据 touch_type 设备类型进行不同操作 
– MIPI 小屏参考 report_touch_down_mipi 进行处理 
– 华阳屏参考 report_touch_down_hy_dsi_0 进行处理 
 
1.5 Virtio 虚拟化 Touch 常见问题 
1. Touch 虚拟化端未生效 
在 Yocto 和 Android 端分别输入getevent -l , 触摸屏幕，如： 
– Yocto 端无报点数据产生， 需检查源 Touch driver 配置 
– Android 端无报点数据产生，检查 Touch 虚拟化是否有 enable、是否有设置了对应的 Touch 节点名字 
 
2. 报点位置与 display 存在偏差  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
在 Android 端输入如下命令，会显示出 Touch 的轨迹线，看是否有偏差及偏差规律。 
settings put system pointer_location 1 
settings put system show_touches 1 
 
在 Android 端输入getevent -i, 查看 Touch raw_size 是否和 display size 对应，如不对应，需调整 NBL 中的
display_size 信息。 
 
3. 有多个需要虚拟化的 Touch 时，Touch raw_size 应用到错误的数据 
需要注意在配置 uos_alps_pv8668.lua 时，display_size 的配置顺序与 Touch driver 加载的顺序一致。 
 
4. 在重载多指快速滑动场景下，可能会出现 Android 端报点丢失的情况，这种情况公版有遇见，且排查为
Android 端 virtio_input 原生 driver 处报点会被 input 模块过滤，且 virtio_input 与 input driver 均为谷歌原生
driver，暂无法修改，建议采用 Vhost 虚拟化规避此问题。 
 
1.6 Virtio 虚拟化 Touch 与 Panel 绑定 
如下图，input 模块通过节点的 location 信息将 Touch 节点与 panel 进行绑定，当有其他节点生成在 Touch 节点前
时，会出现 location num 变化导致绑定失效的问题，需通过 ko_table 保证如下事项，如后续有新加载驱动，并此驱
动有生成节点，则此新驱动需放置在 Touch 节点后，避免绑定异常。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8668 Hypervisor Touch 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0112 MT8668_Hypervisor_UART_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_UART_User_Manual_CN_V1.0.pdf

SHA-256：4e0dab399b5c59e3cca72e38ece9e44c4786d8c6151b51ce548e459680a83c1f

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0112.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Hypervisor UART User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor UART 
User Manual 
Confidential B 
版本记录 
 
版本 日期 作者 描述 
1.0 2026-01-28 李文中 正式版 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor UART 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 UART·········································································································································································· 4 
1.1 概述·········································································································································································· 4 
 简单介绍 ······················································································································································ 4 
 名词解释 ······················································································································································ 4 
1.2 架构/流程概述 ························································································································································ 4 
 UART 介绍 ···················································································································································· 4 
 MT8668 UART 特征 ······································································································································ 5 
 Uart 8250 框架传输 flow ····························································································································· 6 
1.3 配置/客制化指南 ···················································································································································· 6 
 Linux 构建配置 ············································································································································· 6 
 添加 UART DTS 节点 ····································································································································· 7 
 添加 APDMA DTS 节点 ································································································································· 7 
 添加 GPIO 设定 ············································································································································ 8 
 测试和调试 ·················································································································································· 9 
1.4 常见问题/故障排查 ················································································································································ 9 
 UART 无法输入输出 ····································································································································· 9 
 UART 乱码问题 ············································································································································· 9 
 UART 不打印内核日志 ······························································································································· 10 
附件一 附加条款 ····························································································································································· 11 
 
图片目录 
图 1-1. SoC UART 和设备 UART 之间的引脚连接 ···················································································································· 4 
 
表格目录 
表 1-1. 名词解释········································································································································································ 4 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor UART 
User Manual 
Confidential B 
1 UART 
1.1 概述 
 简单介绍 
本章节介绍 MT8668 UART 控制器的硬件、软件及其功能。 
 
 名词解释 
表 1-1. 名词解释 
缩写 解释 
CTS Clear To Send 发送准备 
DMA Direct Memory Access 直接内存访问 
FIFO First In First Out 先入先出 
RTS Request To Send 接收准备 
RX Receiver 接收端口 
TX Transmitter 发送端口 
UART Universal Asynchronous Receiver/Transmitter 通用异步收发器 
 
1.2 架构/流程概述 
 UART 介绍 
 
图 1-1. SoC UART 和设备 UART 之间的引脚连接 
 
UART 是一种串行通信接口协议，常用于将计算机或者微控制器与外围设备进行通信。 TX、RX、CTS 和 RTS 是 UART 
协议中的四个重要信号，它们分别用于传输数据和控制传输流程。  
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor UART 
User Manual 
Confidential B 
TX (Transmit)：发送端口 
TX 为 UART 中的发送端口，即计算机或微控制器用于发送数据的端口。 TX 把待发送的数据逐位地转化为串行数据
帧，并通过序列化后的数据电平在通信线上向外发送。当发送完成， TX 状态将转为低电平。 
 
RX (Receive)：接收端口 
RX 为 UART 中的接收端口，即计算机或微控制器用于接收数据的端口。 RX 将发送端发出的数据经过反序列化后转
化为待接收的数据帧。当数据接收完成后，RX 状态将转为高电平。 
 
CTS (Clear To Send)：发送准备 
CTS 是一个输出口，它向发送方传递一种状态信息，用来指示 RX 端是否已经准备好接收新的数据。当且仅当 CTS 
状态为高电平时，表示 RX 端已准备好接收数据；当 CTS 状态为低电平时，表示 RX 端正在处理数据，此时发送方
应该暂停传输。 
 
RTS (Ready To Send)：接收准备 
RTS 是一个输入口，它向接收方传递一种状态信息，用来指示 TX 端是否已经准备好发送新的数据。当 TX 端已经准
备好发送数据时，RTS 状态为低电平；当 TX 端不准备发送数据时，RTS 状态为高电平，此时接收方应该暂停接收。 
 
CTS 和 RTS 的作用是在数据传输前进行握手协商以避免发送方和接收方竞争同一个时刻来进行数据传输，从而保证
数据传输时的可靠性和稳定性。 
 
综上所述，UART 的 TX、RX、CTS 和 RTS 四个信号是 UART 协议中的核心信号，配合使用可以实现数据的串行传输
及有效的流控管理。 
 
图 1-1 展示的是 SoC 与外围设备通过 UART 进行数据传输的硬件连接，其中 RTS 和 CTS 用于硬件流控管理，可以根
据使用场景决定移除或保留。 
 
 MT8668 UART 特征 
• 提供 3 路串口 
• UART0/UART1 是 2 针（TX、RX）UART 通道 
• UART2 是一个 4 针（TX、RX、CTS、RTS）UART 通道 
• 支持 M16C450 和 M16550A 操作模式 
• 兼容标准软件驱动程序 
• 传输系统：异步 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor UART 
User Manual 
Confidential B 
• 数据长度：5 到 8 位 
• 硬件流控：基于 CTS/RTS 的自动收发控制 
• 软件流控：使用特殊字符 Xon/Xoff 进行软件流控 
• 波特率可编程为 300 bps 至 3 Mbps 
• 中断请求：接收中断/发送中断 
• 数据传输：支持 DMA（发送/接收）传输 
 
 Uart 8250 框架传输 flow 
 
该架构图描绘了 UART 子系统中的双向数据流转机制。在发送路径 TX 上，用户数据经由 TTY 核心及线路规程
N_TTY 处理后，通过驱动层的 start_tx 接口写入硬件 FIFO，最终触发发送中断完成传输。在接收路径 RX 上，物理
硬件收到数据后触发接收中断，驱动层通过中断服务程序（ISR）读取数据，并利用 Workqueue 等下半部机制
（Bottom Half）将数据通过 tty_flip_buffer_push 推送至线路规程缓冲区，最终供用户空间读取。整个过程由 TTY 层
负责流控与缓冲，UART 驱动层负责硬件操作。 
 
1.3 配置/客制化指南 
 Linux 构建配置  
配置项目： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor UART 
User Manual 
Confidential B 
• 分配在 Linux 内核下支持的最大 UART（通用异步收发器/发射器）端口数量 
CONFIG_SERIAL_8250_NR_UARTS=3 
CONFIG_SERIAL_8250_RUNTIME_UARTS=3 
 
• 启用 UART DMA 支持 
CONFIG_DMA_MTK_UART=y 
 
• 启用对 8250 UART 协议 和 MTK UART 驱动的支持 
CONFIG_SERIAL_8250=y 
 
 添加 UART DTS 节点 
uart0: serial@11001000 { 
   compatible = "mediatek,mt6577-uart"; 
   reg = <0 0x11001000 0 0x1000>; 
   interrupts = <GIC_SPI 522 IRQ_TYPE_LEVEL_HIGH 0>; 
   clocks = <&clk26m>, <&pericfg_ao_reg_clk 
CLK_PERICFG_AO_REG_PERI_UART0_UART>; 
   clock-names = "baud", "bus"; 
   dmas = <&apdma 0 &apdma 1>; 
   dma-names = "tx", "rx"; 
   uart-line = <0>; 
  }; 
 
 添加 APDMA DTS 节点 
Device node of APDMA: 
  apdma: dma-controller@11300c00 { 
    compatible = "mediatek,mt6985-uart-dma"; 
    reg = <0 0x11300c00 0 0x80>, 
     <0 0x11300c80 0 0x80>, 
     <0 0x11300d00 0 0x80>, 
     <0 0x11300d80 0 0x80>, 
     <0 0x11300e00 0 0x80>, 
     <0 0x11300e80 0 0x80>; 
                                       interrupts = <GIC_SPI 560 IRQ_TYPE_LEVEL_HIGH 0>, 
     <GIC_SPI 561 IRQ_TYPE_LEVEL_HIGH 0>, 
     <GIC_SPI 562 IRQ_TYPE_LEVEL_HIGH 0>, 
     <GIC_SPI 563 IRQ_TYPE_LEVEL_HIGH 0>, 
     <GIC_SPI 564 IRQ_TYPE_LEVEL_HIGH 0>, 
     <GIC_SPI 565 IRQ_TYPE_LEVEL_HIGH 0>; 
    clocks = <&pericfg_ao_reg_clk 
CLK_PERICFG_AO_REG_PERI_DMA_B_UART>; 
    clock-names = "apdma"; 
    dma-requests = <6>; 
    #dma-cells = <1>; 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor UART 
User Manual 
Confidential B 
  }; 
 
 
 
 添加 GPIO 设定 
• 配置 GPIO 并设置为开，默认为开: 
&uart0 { 
    pinctrl-names = "default", “sleep“; 
    pinctrl-0 = <&uart0_pin_default>; 
pinctrl-1 = <&uart0_pin_sleep>; 
    status = "okay"; 
 }; 
 
• 如在 OS 中未使用，请将状态设置为关: 
&uart0 { 
    pinctrl-names = "default", “sleep“; 
    pinctrl-0 = <&uart0_pin_default>; 
pinctrl-1 = <&uart0_pin_sleep>; 
    status = "disabled"; 
 }; 
 
• 配置 PIO 节点中与 UART 通信相关的默认/休眠引脚： 
 &pio { 
      uart0_pin_default: uart0_pin_uart_mode { 
  pins_rx { 
   pinmux = <PINMUX_GPIOxxx__FUNC_URXD0>; 
   input-enable; 
   bias-pull-up; 
  }; 
  pins_tx { 
   pinmux = <PINMUX_GPIOxxx__FUNC_UTXD0>; 
   output-high; 
  }; 
       }; 
 
uart0_pin_sleep: uart0_pin_gpio_mode { 
  pins_rx { 
   pinmux = <PINMUX_GPIOxxx__FUNC_ GPIOxxx>; 
   bias-pull-down; 
  }; 
  pins_tx { 
   pinmux = <PINMUX_GPIOxxx__FUNC_ GPIOxxx>; 
   bias-pull-down; 
  }; 
       }; 
            } 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor UART 
User Manual 
Confidential B 
 测试和调试 
1. 设置波特率 921600，8 位数据位, 1 位停止位, 无奇偶校验,如 UART1 
stty -F /dev/ttyS1 ispeed 921600 ospeed 921600 cs8 
 
2. 获取当前 UART 波特率以及数据位配置信息 
stty -F /dev/ttyS1 -a 
 
3. UART 数据获取，可以使用以下命令接收 UART1 数据并通过 console 打印出来 
cat /dev/ttyS1 
 
4. UART 发送数据，可以使用以下命令让 UART1 发送字符串”123” 
echo 123 > /dev/ttyS1 
 
1.4 常见问题/故障排查 
 UART 无法输入输出 
1. 请按照前文的提供的信息，检查 dts 配置是否正确 
2. 请使用 Linux 命令检查 UART 引脚模式是否切换至 UART 模式  
    内核里查看 PIN 的状态，输入以下命令: 
# cat /proc/mtk_gpio/soc.pinctrl 
# cd /proc/mtk_gpio/ 
# cat soc.pinctrl 
 
e.g., 
# cat /proc/mtk_gpio/soc.pinctrl 
 
PIN: [MODE] [DIR] [DOUT] [DIN] [PULL_EN] [PULL_SEL] [IES] [SMT] [DRIVE] ( [R1] [R0] ) 
0: 0 0 0 0 1 0 1 0 0 
1: 0 0 0 0 1 0 1 0 0 
2: 0 1 1 1 1 0 1 0 0 
3: 6 0 0 0 1 0 1 0 0 
 
 UART 乱码问题 
1. 请按照前文提供的信息检查波特率是否一致 
2. 请检查 UART source_clk 是否符合预期，通常 source_clk 会设置成 26 MHz. 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor UART 
User Manual 
Confidential B 
 UART 不打印内核日志 
User 版本中，在默认情况下，image 进入 shell 之后便不再打印内核日志，而 engine/user-debug image 则默认继续
打印内核日志。可以参考以下方法进行修改： 
• echo 1 > /proc/mtprint：用于在 adb shell 可用后启用 UART 日志记录 
• setprop persist.uartconsole.enable 1：用于在启动后启用 UART 日志记录 
• 通过修改代码为用户加载默认启用 UART 日志记录 
vendor/mediatek/proprietary/bootable/bootloader/lk/app/mt_boot/mt_boot.c 
cmdline_append("printk.disable_uart=0"); // BUILD_TYPE_USER 
 
device/mediatek/mt6881/init.mt6881.rc mask "write /proc/bootprof 0" 
# write /proc/bootprof 0 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor UART 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
 
 
 
  
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0113 MT8668_Hypervisor_USB_LLA_User_Manual_CN_V1.1.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_USB_LLA_User_Manual_CN_V1.1.pdf

SHA-256：2d16db982b9dbf079f3479b1be9c458f8b541f1c3c4a1824feafec51c62cdcbb

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0113.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.1 
出版日期：  2026-03-20
MT8668 Hypervisor USB LLA 
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 秦文成 正式版本 
1.1 2026-03-20 秦文成 
• 修正小节 1.2.2 USB Hypervisor 软件方案中的虚拟化相关内容 
• 表 1-3. USB 相关 kernel config, ko name 以及对应 code path 中
的代码路径 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 USB ············································································································································································ 5 
1.1 概述·········································································································································································· 5 
1.1.1 基本概述 ······················································································································································ 5 
1.1.2 缩略词 ·························································································································································· 5 
1.2 USB 软硬件架构 ······················································································································································ 6 
1.2.1 USB 硬件架构 ··············································································································································· 6 
1.2.2 USB Hypervisor 软件方案 ···························································································································· 6 
1.3 配置/客制化指南 ···················································································································································· 8 
1.3.1 DTS 配置 ······················································································································································· 8 
1.3.2 Kernel 配置和 ko 相关信息 ······················································································································· 10 
1.3.3 Host/Device 模式切换流程 ························································································································ 11 
1.4 常见问题/故障排除 ·············································································································································· 12 
1.4.1 USB 相关日志 ············································································································································· 12 
1.4.2 常见问题以及调试 ···································································································································· 14 
附件一 附加条款 ····························································································································································· 17 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
图片目录 
图 1-1. MT8668 USB 硬件架构图 ·············································································································································· 6 
图 1-2. USB Hypervisor 软件架构图 ·········································································································································· 7 
图 1-3. mt6881.dts 和 auto8668p1_64.dts 中的 SSUSB 节点 ·································································································· 8 
图 1-4. mt6881.dts 中的 USB PHY 节点 ·································································································································· 10 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 5 
表 1-2. Android/Yocto USB DTS 配置 ······································································································································· 10 
表 1-3. USB 相关 kernel config, ko name 以及对应 code path ······························································································· 11 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
1 USB 
1.1 概述 
1.1.1 基本概述 
本章节介绍主要 MT8668 USB 模块信息,以及 USB 常见问题以及分析方法。 
 
1.1.2 缩略词 
表 1-1. 缩略词 
缩略词 全称 释义 
ADB Android Debug Bridge 
一种多功能命令行工具，用于主机与 Android 设备之间的通
信和调试 
MTU3 MediaTek USB3.0 SSUSB IP 中的 device controller 
PHY Physical Layer USB 的物理层，负责实际的电气和物理信号传输 
SSUSB Super Speed USB 
MediaTeK 设计的 USB IP，支持 USB 3.0 的 host/device 双角
色控制器 
USB Universal Serial Bus 
一种用于计算机与外部设备之间连接、通信和供电的行业
标准 
xHCI eXtensible Host Controller Interface 
USB 3.x 主机控制器规范，在 SSUSB IP 中实现，用于管理 
USB 主机功能 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
1.2 USB 软硬件架构 
1.2.1 USB 硬件架构 
 
图 1-1. MT8668 USB 硬件架构图 
 
• Port0: 最高支持 USB 3.2 gen1, 5Gbps, host/device dual role controller 
• Switch: 最高支持 USB 2.0 480Mbps, 能实现 Hub 与 USB 2.0 之间的切换 
• Hub: 最高支持 4 个 USB 口 
 
1.2.2 USB Hypervisor 软件方案 
MT8668 Hypervisor 采用 Hypervisor 3rd vendor 虚拟化方案，具有 Yocto OS + Android VM OS + TBox VM OS 三个系
统。 
由于 MT8668 SoC 具有 1 个 USB 独立 IP，采用 pass-through 的方案。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
 
图 1-2. USB Hypervisor 软件架构图 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
1.3 配置/客制化指南 
1.3.1 DTS 配置 
1.3.1.1 SSUSB 节点信息 
 
 
图 1-3. mt6881.dts 和 auto8668p1_64.dts 中的 SSUSB 节点 
 
ssusb & usb_host DTS node 中各个 property 字段含义： 
• ssusb: USB device controller mtu3 节点 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
• phys: USB 使用的 u2/u3 phy 
• dr_mode: USB dual role mode，可以设置为 otg/peripheral/host  
• maximum-speed: device controller 使用的速度，可以设置为 super-speed/high-speed/full-speed 
• usb-role-switch: USB role 切换采用 Linux 标准的 usb-role-switch get/set ops 
• role-switch-default-mode: 配合 usb-role-switch 设置 IP default USB mode，可以设置为 otg/peripheral/host 
• mediatek,clk-mgr: 切换到 USB none/device 时，host driver 会卸载以达到更加省电的目的，否则 host driver 会保
留 
• mediatek,force-vbus: 强制 device controller 认为 vbus 存在，用于未连接 vbusvalid 引脚的 PCB 
• usb_host: USB host controller xHCI 节点 
 
1.3.1.2 USB PHY 节点 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
 
图 1-4. mt6881.dts 中的 USB PHY 节点 
 
u2phy & u3phy DTS node 中各个 property 字段含义： 
• u2phy: usb2.0 phy 节点 
• u3phy: usb3.0 phy 节点 
 
1.3.1.3 Android/Yocto/TBox DTS 预期配置差别 
由于 Yocto OS、Android VM OS 和 TBox VM OS 可根据不同的使用场景，在各自的 DTS 文件中动态启用对应的 USB 节
点，并禁用其他节点。下表展示了所有节点均被启用时的情况。  
表 1-2. Android/Yocto USB DTS 配置 
 USB DTS Node TBox Android Yocto 
USB port 
ssusb Enable Enable Enable 
usb_host Enable Enable Enable 
u2phy Enable Enable Enable 
u3phy Enable Enable Enable 
 
1.3.2 Kernel 配置和 ko 相关信息 
Kernel 配置方面，Android、TBox 和 Yocto 保持一致。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
表 1-3. USB 相关 kernel config, ko name 以及对应 code path 
Kernel Config KO Name Code Path 
CONFIG_DEVICE_MODULES_USB_MTU3 mtu3.ko kernel_device_modules-6.12/drivers/usb/mtu3/ 
CONFIG_DEVICE_MODULES_USB_XHCI_MTK xhci-mtk-
hcd-v2.ko 
kernel_device_modules-
6.12/drivers/misc/mediatek/usb/usb_xhci/ 
CONFIG_DEVICE_MODULES_PHY_MTK_XSPHY phy-mtk-
xsphy.ko kernel_device_modules-6.12/drivers/phy/mediatek/ 
 
1.3.3 Host/Device 模式切换流程 
MT8668 软件支持自动切换和手动切换两种模式。 
1.3.3.1 自动切换 
Type-C: 
• OTG cable 接入，Type-C src attach => usb_role_switch_set_role(USB_ROLE_HOST) => mtu3, ssusb_role_sw_set => 
usb switch to host 
• OTG cable 拔出，Type-C src dettach => usb_role_switch_set_role(USB_ROLE_NONE) => mtu3, ssusb_role_sw_set => 
usb switch to none 
• USB cable 接入，Type-C sink attach => usb_role_switch_set_role(USB_ROLE_DEVICE) => mtu3, ssusb_role_sw_set => 
usb switch to device 
• USB cable 拔出，Type-C sink dettach => usb_role_switch_set_role(USB_ROLE_ NONE) => mtu3, ssusb_role_sw_set => 
usb switch to none 
 
1.3.3.2 手动切换 
手动切换是通过 usb-role-switch 创建的 role 节点, 手动写入 CMD 来切换 host/device/none： 
path: /sys/class/usb_role/11201000.usb0-role-switch/role  
 
• 切换到 host mode: echo host > /sys/class/usb_role/11201000.usb0-role-switch/role 
– echo host > /sys/…/role => usb_role_switch_set_role(USB_ROLE_HOST) => mtu3, ssusb_role_sw_set => usb 
switch to host 
• 切换到 device mode: echo device > /sys/class/usb_role/11201000.usb0-role-switch/role 
– echo device > /sys/…/role => usb_role_switch_set_role(USB_ROLE_DEVICE) => mtu3, ssusb_role_sw_set => usb 
switch to device 
• 切换到 none mode: echo none > /sys/class/usb_role/11201000.usb0-role-switch/role 
– echo none > /sys/…/role => usb_role_switch_set_role(USB_ROLE_NONE) => mtu3, ssusb_role_sw_set => usb 
switch to none 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
1.4 常见问题/故障排除 
1.4.1 USB 相关日志 
1.4.1.1 USB 初始化相关日志 
Keyword: mtu3 & xhci & ssusb & xsphy 
 
[    3.852111][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: uwk - reg:0x214, 
version:108  //mtu3 probe start 
[    3.853328][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: supply vbus not found, 
using dummy regulator 
[    3.855731][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: dr_mode: 3, drd: auto 
[    3.857031][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: u2p_dis_msk: 0, 
u3p_dis_msk: 0 
[    3.861439][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: only one power domain. 
[    3.864093][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: sw chip version:0 
[    3.866224][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: device src:-22 
vrt:-22 term:-22 rev6:-22 
[    3.868288][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: host src:-22 
vrt:-22 term:-22 rev6:-22 
[    3.874056][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: u2_intr:35 
intr_ofs:-64 host_intr_ofs:-64 discth:-22 
[    3.875476][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: term_cal:8 
term_ofs:-16 host_term_ofs:-16 
[    3.876771][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: rx_sqth:-22 
host_rx_sqth:-22 
[    3.879081][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: rx_sqd:-22 
host_rx_sqd:-22 
[    3.881332][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: pll_fbksel:-22, 
pll_posdiv: -22 
[    3.883579][T10200000234] mtu3_init_threa: mtk-xsphy 11f53000.usb3-phy0: u3_intr:-22, tx-
imp:-22, rx-imp:-22 
[    3.885902][T10200000234] mtu3_init_threa: mtk-xsphy 11f53000.usb3-phy0: tx-lctxcm1:-22, 
tx-lctxc0:-22, tx-lctxcp1:-22 
[    3.888170][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: phy_u2_device_props=0, 
phy_u2_host_props=0 
[    3.890246][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: 
u2_phy_instance_power_on(0) 
[    3.892124][T10200000234] mtu3_init_threa: mtk-xsphy 11f53000.usb3-phy0: 
u3_phy_instance_power_on apply u3_gen2_hqa. 
[    3.893637][T10200000234] mtu3_init_threa: mtk-xsphy 11f53000.usb3-phy0: 
u3_phy_instance_power_on(0) //phy power on 
[    3.895899][T10700000234] mtu3_init_threa: mtk-xsphy 11f53000.usb3-phy0: Disable 
tx_chirpK. 
[    3.898249][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: wakeup irq 242 
[    3.901885][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: usb3-drd: 1 
[    3.902790][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: ssusb_hwrscs_req_v2_v3 
state=1, spm_ctrl=0x2025007f 
[    3.906200][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: irq 382 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
[    3.907338][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: vbus_draw_enable: 0 
[    3.909906][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: typec: rt-pd-manager 
[    3.910925][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: typec port: port0 
[    3.912943][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: IP version 0x1015(U3 IP) 
[    3.914121][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: fifosz/epnum: Tx=0x2000/8, 
Rx=0x2000/8 
[    3.915308][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: disable accept_lgo 
[    3.916259][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: max_speed_host: super-
speed //max speed 支持 super-speed 
[    3.918212][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: u2_lpm_quirks: 0x0 
[    3.918217][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: dma mask: 36 bits 
[    3.922612][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: supply vbus not 
found, using dummy regulator //xhci probe start 
[    3.924999][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: supply vusb33 not 
found, using dummy regulator 
[    3.927741][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: xHCI Host Controller 
[    3.928826][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: new USB bus 
registered, assigned bus number 1 
[    3.931508][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: hcc params 0x01440f91 
hci version 0x120 quirks 0x0000000000200010 
[    3.933684][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: irq 383, io mem 
0x11200000 
[    3.936072][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: xHCI Host Controller 
[    3.937102][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: new USB bus 
registered, assigned bus number 2 
[    3.939187][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: Host supports USB 3.2 
Enhanced SuperSpeed 
[    3.940465][T10700000234] mtu3_init_threa: usb usb1: New USB device found, idVendor=1d6b, 
idProduct=0002, bcdDevice= 6.12 
[    3.943929][T10700000234] mtu3_init_threa: usb usb1: New USB device strings: Mfr=3, 
Product=2, SerialNumber=1 
[    3.945993][T10700000234] mtu3_init_threa: usb usb1: Product: xHCI Host Controller 
[    3.945996][T10700000234] mtu3_init_threa: usb usb1: Manufacturer: Linux 6.12.38-
android16-5-g477adbee20b6-4k xhci-hcd 
[    3.945998][T10700000234] mtu3_init_threa: usb usb1: SerialNumber: 11200000.xhci0 
[    3.946439][T10700000234] mtu3_init_threa: hub 1-0:1.0: USB hub found 
[    3.948222][T10700000234] mtu3_init_threa: hub 1-0:1.0: 1 port detected 
[    3.950917][T10700000234] mtu3_init_threa: usb usb2: We don't know the algorithms for LPM 
for this host, disabling LPM. 
[    3.952617][T10700000234] mtu3_init_threa: usb usb2: New USB device found, idVendor=1d6b, 
idProduct=0003, bcdDevice= 6.12 
[    3.954502][T10700000234] mtu3_init_threa: usb usb2: New USB device strings: Mfr=3, 
Product=2, SerialNumber=1 
[    3.957038][T10700000234] mtu3_init_threa: usb usb2: Product: xHCI Host Controller 
[    3.959622][T10700000234] mtu3_init_threa: usb usb2: Manufacturer: Linux 6.12.38-
android16-5-g477adbee20b6-4k xhci-hcd 
[    3.962088][T10700000234] mtu3_init_threa: usb usb2: SerialNumber: 11200000.xhci0 
[    3.964636][T10700000234] mtu3_init_threa: hub 2-0:1.0: USB hub found 
[    3.966877][T10700000234] mtu3_init_threa: hub 2-0:1.0: 1 port detected 
[    3.970228][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: xHCI platform device 
register success... //xhci probe done 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
1.4.2 常见问题以及调试 
1.4.2.1 adb 不识别调试流程 
1. PC 设备管理器有认到 USB 设备, 但是 adb devices 没有设备显示 
1) 可能是 PC 驱动存在问题。建议在设备管理器中手动将驱动更新为 Android ADB Interface。 
2) 可能是 serialnumber 没有发送。 可通过以下命令检查相关节点是否有值。 
▪ Android: cat /config/usb_gadget/g1/strings/0x409/serialnumber 
▪ Yocto: cat /sys/kernel/config/usb_gadget/g1/strings/0x409/serialnumber 
如果没有值，说明序列号未写入。可手动执行 echo 0123456789ABCDEF > [节点路径]，然后重新插拔 
USB 线。 
 
2. PC 设备管理器没有 USB 设备连接 
1) 确认当前 USB role 是否已切到 device mode 
可通过执行命令cat /sys/class/usb_role/12001000.usb0-role-switch/role 进行检查，返回结果
应为 device。如果显示为 host 或 none，说明未切换到 device 模式。此时可尝试重新插拔 USB 线，或手动
通过 echo device 切换到 device mode。 
 
2) 检查 USB configfs 配置是否有 ffs.adb 
▪ Android: ls -al /config/usb_gadget/g1/configs/b.1/  
▪ Yocto: ls -al /sys/kernel/config/usb_gadget/g1/configs/c.1/ 
 
3) 检查 adbd 是否正常启动 
▪ Android: ps -a | grep adbd 
▪ Yocto: ps -e | grep adbd 
 
4) 检查 PC adb service 版本是否过旧 
▪ 可通过adb --version 查看当前 adb 版本，建议使用 1.0.39 及以上版本。 
▪ 执行adb kill-server 后再次尝试连接。 
 
1.4.2.2 Host 无法识别 Device 
1. 确认 USB 是否有切换到 host mode 
cat /sys/class/usb_role/12001000.usb0-role-switch/role 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
得到回显应该是 host，如果是 device/none，说明没有切换到 host mode，可以重新插拔 otg 线，或者手动 echo 
host 到这个节点来切换。 
 
2. 确认 xHCI driver 是否有成功挂载 
按照章节 1.4.1.1 确认是否有 xHCI probe log 
 
3. 确认 USB device 是否有绑定到 driver 
cat /sys/kernel/debug/usb/devices 
T:  Bus=01 Lev=00 Prnt=00 Port=00 Cnt=00 Dev#=  1 Spd=480  MxCh= 1 
B:  Alloc=  0/800 us ( 0%), #Int=  0, #Iso=  0 
D:  Ver= 2.00 Cls=09(hub  ) Sub=00 Prot=01 MxPS=64 #Cfgs=  1 
P:  Vendor=1d6b ProdID=0002 Rev= 6.06 
S:  Manufacturer=Linux 6.6.12 xhci-hcd 
S:  Product=xHCI Host Controller 
S:  SerialNumber=112010000.xhci1 
C:* #Ifs= 1 Cfg#= 1 Atr=e0 MxPwr=  0mA 
I:* If#= 0 Alt= 0 #EPs= 1 Cls=09(hub  ) Sub=00 Prot=00 Driver=hub  // driver = hub, 
serialnumber=xhci 说明这个是我们 xhci host 的 roothub 
E:  Ad=81(I) Atr=03(Int.) MxPS=   4 Ivl=256ms 
 
T:  Bus=01 Lev=01 Prnt=01 Port=00 Cnt=01 Dev#=  2 Spd=480  MxCh= 0 
D:  Ver= 2.00 Cls=00(>ifc ) Sub=00 Prot=00 MxPS=64 #Cfgs=  1 
P:  Vendor=090c ProdID=1000 Rev=11.00 
S:  Manufacturer=INNOTECH 
S:  Product=GIGAStick 
S:  SerialNumber=AA04012700022400 
C:* #Ifs= 1 Cfg#= 1 Atr=80 MxPwr=100mA 
I:* If#= 0 Alt= 0 #EPs= 2 Cls=08(stor.) Sub=06 Prot=50 Driver=usb-storage // driver = 
usb-storage, 说明是 U 盘设备 
E:  Ad=81(I) Atr=02(Bulk) MxPS= 512 Ivl=0msE:  Ad=02(O) Atr=02(Bulk) MxPS= 512 
Ivl=31875us 
如果有遇到 Driver=none 的这种情况，说明设备正常识别，但是没有找到对应的 class driver，可能是这种设备
需要开启特别的 Kernel 配置，可以网上搜索如何开启，或者询问 MediaTek。 
 
4. 确认其他因素 
1) USB vbus 是否正常开启，可以量测 port 口是否有 5V vbus。 
2) 这个设备在其他平台，PC 上是否可以正常识别，避免是设备损坏导致不识别问题 。 
3) 信号质量不佳的设备，可以通过加 USB hub 转接的方式来测试是否可以连接。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
1.4.2.3 眼图测试相关 
1. USB host 眼图测试节点和命令 
支持的 CMD 如下： 
1) test packet: 用于眼图测试 
2) test J: 用于 Test J 测试 
3) test K: 用于 Test K 测试 
4) test SE0 NAK: 用于 SE0 NAK 测试 
 
2. 注意事项 
1) 测试前，请确保 USB 已经切换到 host mode。 
▪  cat /sys/class/usb_role/12001000.usb0-role-switch/role ，得到的应该是 host。如果显示
为 device 或 none，说明当前未切换到 host 模式。可尝试重新插拔 OTG 线，或通过手动向对应节点 
echo "host" 以切换至 host 模式。 
2) test packet 命令只能由 roothub 端口发出，外接的 hub 无法转发该命令。如需测试 hub 下游端口的眼图，
请联系 hub 厂商咨询相关测试方法。 
3) 输入 test 命令后，xHCI ip 将进入 test mode，此时插拔 U 盘等设备是否无法识别的，无需担心，将平台重
启后，USB host 功能仍然可以使用。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8668 Hypervisor USB LLA 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0114 MT8668_Hypervisor_Vcodec_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Vcodec_User_Manual_CN_V1.0.pdf

SHA-256：1f7b85f8dfc6e2af860aeb10694148b8769e80f138a14f911edf105d88140256

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0114.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Hypervisor Vcodec 
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 刘志民 正式版 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 视频编解码基本介绍 ················································································································································ 5 
1.1 目的·········································································································································································· 5 
1.2 范围·········································································································································································· 5 
1.2.1 缩略词 ·························································································································································· 5 
1.2.2 性能 ······························································································································································ 5 
1.3 架构/流程概要 ························································································································································ 7 
1.3.1 软件架构 ······················································································································································ 7 
1.4 配置/客制指南 ························································································································································ 8 
1.4.1 解码器 codec 配置 ······································································································································· 8 
1.4.2 解码器支持路数配置··································································································································· 9 
1.4.3 Secure 解码器配置 ······································································································································ 9 
1.4.4 编码器 codec 配置 ······································································································································· 9 
1.4.5 编码器支持路数配置································································································································· 10 
1.4.6 Secure 编码器配置 ···································································································································· 10 
1.4.7 Playback 功能客制化 ································································································································· 11 
1.5 常见问题/故障排除 ·············································································································································· 11 
1.5.1 MTK C2_hal CMD ········································································································································ 11 
1.5.2 MMDVFS CMD ············································································································································ 12 
1.5.3 VCodec CMD ··············································································································································· 12 
1.5.4 Video Dump 功能 ······································································································································· 12 
1.5.5 黑屏 ···························································································································································· 13 
1.5.6 花屏 ···························································································································································· 13 
1.5.7 卡顿 ···························································································································································· 14 
附件一 附加条款 ····························································································································································· 15 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
图片目录 
图 1-1. Android 系统 playback 架构 ········································································································································· 7 
图 1-2. Hypervisor 系统 playback 架构 ····································································································································· 8 
图 1-3. Hypervisor 系统 SVP playback 架构 ······························································································································ 8 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 5 
表 1-2. Video 文件格式 ····························································································································································· 6 
表 1-3. Vcodec 性能 ··································································································································································· 6 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
1 视频编解码基本介绍 
1.1 目的 
本架构设计文档旨在描述具体的系统架构，以确保 Android 和 Yocto 系统能够在虚拟化环境中有效地共享硬件资
源，同时向用户提供连贯和高性能的体验。 
 
1.2 范围 
本文档着重描述系统的高层架构，涵盖了从硬件层到应用层的设计考虑，以及不同组件之间的通信和互动关系。  
 
1.2.1 缩略词 
表 1-1. 缩略词 
缩略词 全称 释义 
HAL Hardware Abstraction Layer 硬件抽象层 
HDR High Dynamic Range 高动态范围技术 
Mbps Megabits Per Second 兆比特每秒 
SVP Secure Video Playback 安全视频播放 
V4L2 Video for Linux Two Linux 系统 video 框架 
VCodec Video Codec 视频编解码器 
VCP Video CoProcess Video 协处理器 
Vdec Video Decoder 视频解码器 
Venc Video Encoder 视频编码器 
VirtIO Virt Input/Output 虚拟输入输出 
 
1.2.2 性能 
下表是目前系统中支持的视频文件格式。 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
表 1-2. Video 文件格式 
文件格式 文件后缀 MT8668 Android B0 备注 
MKV “.mkv”,”mka” √ - 
MP4 “.mp4”,”.m4a”,”.m4v”,”.3g2”,”.3gp”,”.3gpp”,”
3gpp2” √ - 
PS ”.mpg” √ vob 不支持 
TS “.ts”,”.m2ts”,”.mts” √ - 
WEBM “.webm” √ - 
AVI “.avi” X  
WMV “.wmv”,”.asf” X  
FLV “.flv”,”.f4v” X  
RMVB “.rmvb”,”.rm” X - 
 
针对视频的编解码模块，下表是具体支持的参数列表信息。 
表 1-3. Vcodec 性能 
类别 编解码器 
规格 
分辨率 帧率 位速率 位深 属性/级别 
解码器 
H.264 4096x2176 30 100 Mbps 8 CBP , MP , HP/ 5.1 
H.265 4096x2176 30 100 Mbps 8/10 Main / 5.0 
Main 10 / 5.0 
VP9 4096x2176 30 100 Mbps 8/10 Profile 0/2 
编码器 
H.264 3840x2160 30 100 Mbps 8 BP , MP , HP/ 5.1 
H.265 3840x2160 30 100 Mbps 8/10 Main, Main10 / 5.0 
并发 
(硬件性能) 
- 4K30 VDEC + 4K30 VENC 或等效吞吐量 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
1.3 架构/流程概要 
1.3.1 软件架构 
本章节主要介绍目前系统中 video playback 相关的架构图。 
 
1.3.1.1 Android 
在单系统中，video playback 的架构如下图所示。 
 
图 1-1. Android 系统 playback 架构 
 
1.3.1.2 Hypervisor 
在 Hypervisor 系统中，video playback 的架构如下图所示（该架构适用于 L(w/ Vcodec)+A 或者 L(w/ Vcodec)+L(w/o 
Vcodec)+A）。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
 
图 1-2. Hypervisor 系统 playback 架构 
 
1.3.1.3 Hypervisor SVP 
在 Hypervisor 系统中，secure video playback 的架构如下图所示。 
 
图 1-3. Hypervisor 系统 SVP playback 架构 
 
1.4 配置/客制指南 
1.4.1 解码器 codec 配置 
下图是系统中配置的解码器支持的 codec 信息。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
 
 
1.4.2 解码器支持路数配置 
下图是系统中配置的解码器支持路数信息。 
 
 
1.4.3 Secure 解码器配置 
下图是系统中支持 secure 解码器的配置信息。 
 
1.4.4 编码器 codec 配置 
下图是系统中支持的编码器对应的配置信息。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
 
 
1.4.5 编码器支持路数配置 
下图是系统中编码器支持的通道数的配置信息。 
 
 
1.4.6 Secure 编码器配置 
下图是系统中支持 secure 编码器的配置信息。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
 
1.4.7 Playback 功能客制化 
1.4.7.1 HDR 
关于 HDR 功能，需要具体项目进行客制化支持。 
 
1.4.7.2 SVP Playback 
关于 secure video playback 功能，需要具体项目进行客制化支持。 
 
1.5 常见问题/故障排除 
1.5.1 MTK C2_hal CMD 
C2MtkComponent: 
Enable all C2MTK_ALOGV logs of C2MtkComponent 
adb shell "setprop vendor.mtk.c2.enable.comp.log 2" 
 
C2MtkVdec: 
Enable C2MTK_ALOGV logs of C2MtkVdec 
adb shell "setprop vendor.mtk.c2.enable.vdec.log 2" 
 
C2MtkVenc: 
Enable C2MTK_ALOGV logs of C2MtkVenc 
adb shell "setprop vendor.mtk.c2.enable.venc.log 2" 
 
C2MtkBufferManager: 
Enable C2MTK_ALOGV logs of C2MtkBufferManager 
Enable C2MTK_ALOGV internal logs of C2MtkBufferManager 
adb shell "setprop vendor.mtk.c2.enable.bm.log 2" 
adb shell "setprop vendor.mtk.c2.enable.bm.internal.log 1" 
 
VCodec: 
Enable all debug level logs of VCodec 
Enable debug level logs by <TAG> filter. e.g., V4L2Device 
adb shell "setprop vendor.mtk.c2.enable.vcodec.log.V4L2Device 4" 
adb shell "setprop vendor.mtk.c2.enable.vcodec.log 4" 
adb shell "setprop vendor.mtk.c2.enable.vcodec.log.<TAG> 4" 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
1.5.2 MMDVFS CMD 
Force clock to specific step by OPP  
param1: 0→ Vcore 1→vmm 
OPP 0: Highest clock rate 
adb shell "echo 0 0 > /sys/module/mtk_mmdvfs_debug/parameters/force_step" 
 
Vote clock to specific step by OPP: 
adb shell "echo 0 0 > /sys/module/mtk_mmdvfs_debug/parameters/vote_step" 
 
Dump current clk: 
adb shell "echo fmeter > /proc/clkdbg ; cat /proc/clkdbg | grep –e vdec –e cam" 
 
Dump MMDVFS OPP: 
adb shell "cat /proc/mmdvfs/mmdvfs_opp" 
 
1.5.3 VCodec CMD 
Vcodec log Enable/Disable 
1: Enable 
2: Disable 
adb shell "echo 1 > /sys/module/mtk_vcodec_dec /parameters/mtk_vcodec_dbg" 
 
Vcodec log level control 
codec_log: Common codec log level (0~31) 
vpud_log: vcodec wrap log level (0~7) 
job_log: Job log level (0~7) 
adb shell "echo -codec_log 7 -vpud_log 3 -job_log 3 > /sys/module/mtk_vcodec_dec 
/parameters/mtk_vdec_vcp_log" 
 
1.5.4 Video Dump 功能 
Decoder input dump (bit-stream to decode) 
The dumped file is saved in \data\vendor\vcodec\vdec_input_<timestamp>_<instance>.bs 
e.g., \data\vendor\vcodec\vdec_input_20200716T133851.521_0xE80D6000.bs 
adb shell "setprop vendor.mtk.c2.vdec.dump.input 1" 
 
Decoder output dump (decoded video frames) 
The dumped file is saved in: 
\data\vendor\vcodec\vdec_output_<timestamp>_<instance>_W<width>H<height>.yuv 
e.g., \data\vendor\vcodec\vdec_output_20200716T133851.521_0xE80D6000_W1280H720.yuv 
adb shell "setprop vendor.mtk.c2.vdec.dump.output 1" 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
Decoder CC output dump (decoded video frames after color convert) 
The dumped file is saved in: 
\data\vendor\vcodec\vdec_output_cc_<timestamp>_<instance>_W<width>H<height>.yuv 
e.g., \data\vendor\vcodec\vdec_output_cc_20200716T133851.521_0xE80D6000_W1280H720.yuv 
adb shell "setprop vendor.mtk.c2.vdec.dump.output.cc 1" 
 
Decoder profiling data dump (binary debugging log) 
The dumped file is saved in \data\vendor\vcodec\vdec_profiling_<timestamp>_<instance>.dat 
e.g., \data\vendor\vcodec\vdec_profiling_20200716T133851.521_0xE80D6000.dat 
adb shell "setprop vendor.mtk.c2.vdec.profiling 1" 
 
1.5.5 黑屏 
• 确认视频文件是否正常 
• 确认正常启动视频解码模块 
adb shell "setprop vendor.mtk.c2.enable.vdec.log 2" 
 
在 logcat 日志中确认是否有类似下面的信息： 
CCodec : allocate(c2.mtk.vp9.decoder) 
C2MtkComponentStore: find: name=c2.mtk.vp9.decoder, key=c2.mtk.vp9.decoder 
C2MtkVdec: [0xB400007D63859720] IntfImpl: name=c2.mtk.vp9.decoder 
 
• 确认解码数据正常 
确认解码模块有收到正常的 video 码流数据： 
adb shell "setprop vendor.mtk.c2.vdec.dump.input 1 
 
• Force GPU 是否 OK 
adb shell service call SurfaceFlinger 1008 i32 1 
 
• 确认 display 模块显示正常 
参考 display 文档确认显示逻辑。 
如果以上几点都 OK，最后就需要 Video playback owner 详细查看 log 来定位问题。 
 
1.5.6 花屏 
• 确认解码数据正常确认解码模块有收到正常的 video 码流数据： 
adb shell "setprop vendor.mtk.c2.vdec.dump.input 1 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
• Force GPU 是否 OK 
adb shell service call SurfaceFlinger 1008 i32 1 
 
• 确认 display 模块显示正常 
参考 display 文档确认显示逻辑。 
如果以上几点都 OK，最后就需要 Video playback owner 详细查看 log 来定位问题。 
1.5.7 卡顿 
• 确认视频文件是否正常 
• 确认正常启动视频解码模块 
adb shell "setprop vendor.mtk.c2.enable.vdec.log 2" 
 
在 logcat 日志中确认是否有类似下面的信息： 
CCodec : allocate(c2.mtk.vp9.decoder) 
C2MtkComponentStore: find: name=c2.mtk.vp9.decoder, key=c2.mtk.vp9.decoder 
C2MtkVdec: [0xB400007D63859720] IntfImpl: name=c2.mtk.vp9.decoder 
 
• 确认 display 模块显示正常 
参考 display 文档确认显示逻辑。 
如果以上几点都 OK，最后就需要 Video playback owner 详细查看 log 来定位问题。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8668 Hypervisor Vcodec 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0115 MT8668_SCP_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_SCP_User_Manual_CN_V1.0.pdf

SHA-256：45846faca00dec6453b30985c4a59cdd1000a726a730c1fb51682417cd23ae2d

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0115.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 SCP User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 SCP 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 日期 
1.0 2026-01-28 纵华宇 正式版本 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 SCP 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 5 
表格目录 ··········································································································································································· 6 
1 引言 ··········································································································································································· 7 
1.1 用途·········································································································································································· 7 
1.2 文档概览 ·································································································································································· 7 
2 缩写词 ······································································································································································· 8 
3 架构概述 ································································································································································· 10 
3.1 硬件架构 ································································································································································ 10 
3.2 软件架构 ································································································································································ 12 
3.3 源代码树 ································································································································································ 13 
 LK 引导加载程序 ········································································································································ 13 
 Linux 内核驱动 ··········································································································································· 13 
 FreeRTOS Tree ············································································································································· 13 
 TF-A ····························································································································································· 13 
4 构建系统 ································································································································································· 14 
4.1 配置文件 ································································································································································ 14 
 LK 引导加载程序 ········································································································································ 14 
 Linux 内核驱动 ··········································································································································· 14 
 FreeRTOS ····················································································································································· 14 
 TF-A ····························································································································································· 14 
4.2 编译命令 ································································································································································ 15 
 独立编译 ···················································································································································· 15 
 基于安卓软件包编译································································································································· 15 
4.3 镜像布局 ································································································································································ 15 
5 工作流程 ································································································································································· 16 
5.1 启动顺序 ································································································································································ 16 
5.2 SCP 恢复机制 ························································································································································· 17 
 SCP 恢复流程 ············································································································································· 17 
 恢复通知流程 ············································································································································ 18 
5.3 驱动程序指南 ························································································································································ 19 
 驱动程序初始化 ········································································································································ 19 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 SCP 
User Manual 
Confidential B 
 添加新驱动程序 ········································································································································ 19 
 中断 ···························································································································································· 20 
 IRQ 注册 ····················································································································································· 20 
 使能中断 ···················································································································································· 21 
 禁用 IRQ······················································································································································ 21 
 注册唤醒源 ················································································································································ 22 
 锁 ································································································································································ 23 
 DMA ···························································································································································· 23 
 硬件信号量 ················································································································································ 24 
 GPIO 和 EINT ··············································································································································· 26 
 GPIO 使用 ··················································································································································· 27 
 EINT 使用 ···················································································································································· 28 
 处理器间中断 ············································································································································ 28 
5.4 DRAM 访问流程 ···················································································································································· 37 
 在 Linux 内核中保留内存 ·························································································································· 38 
 通过 ID 获取保留内存 ······························································································································· 40 
 在 SCP 端获取保留的 DRAM 区域 ············································································································· 40 
 将 DRAM 地址从 AP 视图重映射到 SCP 视图 ··························································································· 41 
 请求系统总线和 DRAM ····························································································································· 42 
6 调试方法 ································································································································································· 43 
6.1 PRINTF_* 使用 ······················································································································································· 43 
6.2 日志记录 ································································································································································ 43 
6.3 串口········································································································································································ 44 
6.4 ADB Logcat ····························································································································································· 45 
6.5 异常日志分析 ························································································································································ 47 
 Trace Buffer ················································································································································· 48 
6.6 核心转储 ································································································································································ 49 
 LLDB 基本命令············································································································································ 51 
6.7 性能评估和运行记录 ············································································································································ 54 
 性能评估 ···················································································································································· 54 
 运行记录 ···················································································································································· 56 
6.8 低功耗调试日志 ···················································································································································· 63 
 Linux 内核侧 ··············································································································································· 63 
 SCP 侧 ························································································································································· 64 
6.9 地址检测器 ···························································································································································· 64 
 ASAN 使用方法 ·········································································································································· 64 
 如何将代码移动到 DRAM ························································································································· 66 
7 常见问题及解决方法 ·············································································································································· 68 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 SCP 
User Manual 
Confidential B 
7.1 Malloc 失败 ···························································································································································· 68 
7.2 非对齐访问 ···························································································································································· 69 
7.3 代码大小限制 ························································································································································ 70 
 代码大小检查工具的使用 ························································································································· 70 
7.4 Scp_Region_Info 架构 ············································································································································ 71 
7.5 如何扩大 DRAM 区域代码 ··································································································································· 73 
7.6 如何使能 SCP 复位压力测试 ································································································································ 73 
附件一 附加条款 ····························································································································································· 74 
 
图片目录 
图 3-1. MTK 6881 SCP 架构 ····················································································································································· 11 
图 3-2. MTK MT6881 SCP 软件架构 ········································································································································ 12 
图 5-1. SCP 启动流程框图 ······················································································································································· 16 
图 5-2. SCP 重置流程 ······························································································································································ 17 
图 5-3. Tinysys IPI 通用架构 ···················································································································································· 29 
图 6-1. MTK Logger ·································································································································································· 44 
图 6-2. 串口工具设置 ······························································································································································ 45 
图 6-3. 禁用 mobile 日志 ························································································································································ 45 
图 6-4. ADB logcat 输出 ··························································································································································· 46 
图 6-5. 性能评估日志示例 ······················································································································································ 56 
图 6-6. 飞行记录控制台模式示例 ·········································································································································· 58 
图 6-7. 操作方法······································································································································································ 59 
图 6-8. 运行记录的 GUI 显示模式 ·········································································································································· 60 
图 6-9. 详细信息显示 ······························································································································································ 60 
图 6-10. 任务被唤醒的事件 ···················································································································································· 61 
图 6-11. 队列事件的示例 ························································································································································ 61 
图 6-12. 队列事件的详细信息 ················································································································································ 61 
图 6-13. 软件定时器示例 ························································································································································ 61 
图 6-14. 临界区示例································································································································································ 62 
图 6-15. 中断服务程序示例 ···················································································································································· 62 
图 6-16. OS 时钟节拍示例 ······················································································································································ 62 
图 7-1. 内存工具报告 ······························································································································································ 70 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 SCP 
User Manual 
Confidential B 
表格目录 
表 1-1 章节概览········································································································································································· 7 
表 2-1 缩写词 ············································································································································································ 8 
表 3-1. 硬件规格表·································································································································································· 10 
表 3-2. 架构规格表·································································································································································· 12 
表 5-1. EINT 和 GPIO 的映射引脚名称 ··································································································································· 26 
表 5-2. GPIO 控制寄存器表 ···················································································································································· 27 
表 5-3. 标准 DRAM 访问流程 ················································································································································· 38 
表 5-4. 默认重映射规则表 ······················································································································································ 41 
表 6-1. PRINTF 使用场景 ························································································································································· 43 
表 6-2. UART 引脚名称 ···························································································································································· 44 
表 6-3. 编译器选项和定义 ······················································································································································ 54 
表 6-4. 编译器选项·································································································································································· 56 
表 6-5. Flight Record 定义 ······················································································································································· 56 
表 6-6. 编译器选择和定义 ······················································································································································ 64 
表 6-7. 异常类型表·································································································································································· 65 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 SCP 
User Manual 
Confidential B 
1 引言 
1.1 用途 
这份文档介绍了 Sensor-hub Control Processor (SCP)的设计。 
1.2 文档概览 
表 1-1 展示了本文件各章节和附录的概述。 
表 1-1 章节概览 
# 章节 内容 
1 引言 描述本文件的范围和结构。 
2 缩写词 解释并列出本文件中使用的缩写。 
3 架构概述 描述该模块的相关模块及接口。 
4 构建系统 说明配置的安排位置和方式，以及如何通过命令生成 SCP 镜像。 
5 工作流程 描述该模块最重要的流程。 
6 调试方法 介绍该模块的调试方法。 
7 常见问题及解决方法 Q&A 列表。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 SCP 
User Manual 
Confidential B 
2 缩写词 
表 2-1 缩写词 
缩写 全称 中文全称 
ADB Android Debug Bridge 安卓调试桥 
ADSP Audio Digital Signal Processor 音频数字信号处理器 
AOSP Android Open-Source Project 安卓开源项目 
AP Application Processor 应用处理器 
ATF ARM Trusted Firmware ARM 可信固件 
AXI Advanced eXtensible Interface 高级可扩展接口 
CPU Central Processing Unit 中央处理器 
DRAM Data Random Access Memory 数据随机存取存储器 
DSP Digital Signal Processor; Digital Signal Processing 数字信号处理器；数字信号处理 
DTS Digital Theater Systems 数字影院系统 
EINT External Interrupt Controller 外部中断控制器 
EMI External Memory Interface 外部存储器接口 
EMI MPU External Memory Interface Memory Processing 
Unit 外部存储器接口存储处理单元 
GPIO General Purpose Inputs-Outputs 通用输入输出 
GUI Graphical User Interface 图形用户界面 
I2C Inter-Integrated Circuit 集成电路总线（I²C） 
I3C Improved-Inter-Integrated Circuit 改进型集成电路总线（I³C） 
ID Identification 识别 
IRQ Interrupt Request 中断请求 
ISA Instruction Set Architecture 指令集架构 
LPM Low Power Mode 低功耗模式 
MPU Memory Protection Unit 存储保护单元 
NN Neural Network 神经网络 
OS Operation System 操作系统 
RTOS Real-Time Operating System 实时操作系统 
RW Read and Write 读写 
SCP Sensor-hub Controller Processor 传感器集线器控制处理器 
SD Standard Definition 标清 
SPI Serial Peripheral Interface 串行外设接口 
SPM System Power Management 系统电源管理 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 SCP 
User Manual 
Confidential B 
缩写 全称 中文全称 
SRAM Static Random Access Memory 静态随机存取存储器 
sync Synchronize; Synchronization 同步 
TCM Tightly Coupled Memory 紧耦合存储器 
TX Transmit 发送 
UART Universal Asynchronous Receiver/Transmitter 通用异步收发器 
VoW Voice Wake Up 语音唤醒 
WDT Watchdog Timer 看门狗定时器 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 SCP 
User Manual 
Confidential B 
3 架构概述 
系统协处理器（SCP）是一个子系统，设计用于系统处于低功耗状态时执行始终开启的任务。  
3.1 硬件架构 
SCP 由专用处理器、SRAM、DMA 和外设（如 I2C、GPIO）组成。我们引入内部 DSP 和新架构，使得始终开启的应
用程序能够以更低的功耗运行并获得更好的性能。 
• 处理器：SoC 内嵌 MDSP RV55SMP x 1，每个核心有 2 个硬件线程，采用 RISC-V 架构 
– 单精度浮点 
– 压缩指令 
– 用于语音加速的 DSP ISA 
– 每个核心独立的指令缓存 32K，数据缓存 32K 
– 工作频率从 400MHz 到 1.092GHz 
• 内存：1.25MB TCM 
• DMA 吞吐量： 
– 从 TCM 到 DRAM 的数据传输：63.8 MB/s 
– 从 DRAM 到 TCM 的数据传输：39.9 MB/s 
• 外设： 
– I2C x 1，I3C x 5 
– SPI x 4 
– UART x 2 
• 详细信息 
 
表 3-1. 硬件规格表 
名称 mt6881 
Core RV55SMP x 1 (每核 2 个硬件线程) 
Cache 
L1$ I$/ D$: 32KB/32KB 
L2$ 256KB  
TCM 
L1TCM NA 
L2TCM 1.25MB 
外设 • I2C x 1 
• I3C x 5 
• SPI x 4 
• UART x 2 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 SCP 
User Manual 
Confidential B 
名称 mt6881 
DMA 8 channels (0&1 reserved for I2C) 
VoW I/F 4-mic 
Operating Frequency 800MHz@ 0.75V 
1.092 GHz@ 0.8V 
 
  
图 3-1. MTK 6881 SCP 架构 
  
mbox mbox mbox mbox mbox 
VoW 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 SCP 
User Manual 
Confidential B 
3.2 软件架构 
SCP 软件架构基于 AWS FreeRTOS v11.0.0，这是一个支持多任务、互斥、信号量和软件定时器的实时内核。软件包
还包括音频和传感器集线器等中间件，但本文档不讨论这些细节。  
 
SCP 基于 OpenAMP rpmsg/remoterproc 框架的 IPI（处理器间中断）与 Linux 内核通信。我们还提供了其他机制以实
现 AP 和 SCP 之间的协作： 
• IPI（处理器间中断）– 详见第 5.2 章 
• 硬件信号量 – 详见第 5.3.10 节 
• 日志记录– 详见第 6.2 节 
• SCP 恢复机制 – 详见第 5.2 节 
 
表 3-2. 架构规格表 
Item Value 
Platform mt6881 
Project $PROJECT 
Linux version 6.12 
FreeRTOS version 11.0.0 
ISA  RV55 
L2 TCM 1.25MB 
 
 
图 3-2. MTK mt6881 SCP 软件架构 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 SCP 
User Manual 
Confidential B 
3.3 源代码树 
SCP 源代码树包括引导加载程序（即 LK）、Linux 内核和 FreeRTOS。列举如下: 
 LK 引导加载程序 
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/common/scp 
 Linux 内核驱动 
• SCP driver path 
kernel/kernel_device_modules-6.12/drivers/misc/mediatek/scp 
• SCP DTS path 
kernel/kernel_device_modules-6.12/arch/arm64/boot/dts/mediatek/mt6881.dts 
 FreeRTOS Tree 
• RTOS Kernel 
vendor/mediatek/proprietary/tinysys/kernel/FreeRTOS_v11.0.0 
• Platform and peripheral drivers 
vendor/mediatek/proprietary/tinysys/scp 
vendor/mediatek/proprietary/tinysys/common 
• Libraries 
vendor/mediatek/proprietary/tinysys/scp/middleware 
• Toolchain 
prebuilts/clang/md32rv/linux-x86/CodeLine_250 
 TF-A 
vendor/mediatek/proprietary/ trustzone/tf-a-2.12/plat/mediatek/drivers/scp 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8668 SCP 
User Manual 
Confidential B 
4 构建系统 
在编程之前，开发人员可能想知道如何使用基本的 SCP 配置进行编译。本章将展示配置文件的位置和如何通过命
令生成 SCP 镜像。 
4.1 配置文件 
 LK 引导加载程序 
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/meidatek/mt6881/rules.mk 
• MODULES_DEP += platform/$(PLATFORM)/common/scp/RV 
 Linux 内核驱动 
kernel/kernel_device_modules-6.12/arch/arm64/configs/mgk_64_k612_defconfig 
• 启用或禁用 SCP 驱动程序: CONFIG_MTK_TINYSYS_SCP_SUPPORT 
• 切换功能，例如语音唤醒和传感器中心等功能的开关 
 FreeRTOS 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/platform.mk 
• 平台的默认配置额外的 CFLAGS 
• 额外的 LDFLAGS 
驱动程序/中间件的 C 对象文件和包含路径
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/$PROJECT/project.mk 
• 项目配置 
通过覆盖 platform.mk 文件中的选项来自定义项目 
 TF-A 
vendor/mediatek/proprietary/trustzone/tf-a-2.12/plat/mediatek/mt6881/plat_config.mk 
• CONFIG_MTK_SCP := y 
• CONFIG_MTK_SCP_RECOVERY := y 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8668 SCP 
User Manual 
Confidential B 
4.2 编译命令 
有多种方式编译 SCP 镜像，基于 ALPS SW packages，我们列举两种编译方法。 
 
 独立编译 
这种方法可以快速编译 SCP 镜像，在开发时很有用。  
• 编译后输出路径:  ./tinysys_out 
• 编译指令模板: PROJECT=XXX TARGET_BOARD_PLATFORM=XXX BUILD_TYPE=[release, debug] make 
• 示例: 
$ cd vendor/mediatek/proprietary/tinysys/scp 
$ PROJECT=auto8668p1_64 TARGET_BOARD_PLATFORM=mt6881 BUILD_TYPE=debug make -j24 
 
 基于安卓软件包编译 
• 编译后输出路径:  
out/target/product/$PROJECT/obj/TINYSYS_OBJ/tinysys-scp_intermediates/RV55_A/scp 
• 示例: 
$ make tinysys-scp -j24 
$ mmm vendor/mediatek/proprietary/tinysys/scp -j24 
$ cd vendor/mediatek/proprietary/tinysys/scp && mm -j24 
$ mmm vendor/mediatek/proprietary/tinysys/scp:tinysys-scp -j24 
 
4.3 镜像布局 
• EMMC/UFS 存储器中存在的两个分区：scp1 和 scp2 
– scp1: main and active partition 
– scp2: backup for AB system 
• Image: scp.img: 
– tinysys-scp-RV55_A.bin:  firmware/data located in SRAM 
– tinysys-scp-RV55_A.elf:  elf with symbol, for debug purpose 
– tinysys-scp-RV55_A_DRAM.bin: firmware/data located in DRAM 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8668 SCP 
User Manual 
Confidential B 
5 工作流程 
本章将阐述 SCP 的主要工作流程。 
5.1 启动顺序 
在 SCP 镜像准备好之后，我们需要了解镜像是如何加载到 SRAM/DRAM 中以及 SCP 是如何启动运行的。整个流程
由 LK 引导加载程序、Linux 内核和 SCP 固件共同完成，具体如下： 
• LK 引导加载程序：
(vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/mediatek/common/scp/scp.c) 
– 为 SCP 镜像分配永久性 DRAM 内存加载/验证 SCP 镜像设置 EMI MPU（AP 只读） 
• Linux 内核 
– 初始设置(mbox/ipi/logger/…) 
– 启动 SCP 
• SCP 
– 加载程序 ：
(vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/boot55.S) 
▪ 将 SCP 镜像加载到 SRAM 跳转到 FreeRTOS 
– FreeRTOS 
(vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/src/main.c) 
▪ 驱动程序初始化 
▪ 设置 MPU 
 
图 5-1. SCP 启动流程框图 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8668 SCP 
User Manual 
Confidential B 
5.2 SCP 恢复机制 
当 SCP 崩溃或没有响应时，Linux SCP 驱动程序将执行 SCP 恢复。在恢复过程中，SCP 将恢复正常。但我们需要注
意以下几点： 
• 在 SCP 重置时，SCP 驱动程序将清除 SCP SRAM/DRAM 内容，在 ATF 重置 RV55 处理器，并重新执行启动流程。
（清除所有程序文本、bss 和数据段） 
• SCP 仅重置处理器，而不重置外设（如传感器、I2C 模块和其他设备），因此如果有必要，外设驱动程序应在
初始阶段自行重置。 
• Linux SCP 驱动程序 API 的开发人员必须遵循 5.2.2 章节，并确保在恢复期间 Linux 驱动程序与 SCP 之间没有任
何通信。 
• 当 SCP 重新启动时，Linux SCP 驱动程序将重新初始化。与 SCP 驱动程序相关的驱动程序必须确保重新启动流
程不会影响其功能。 
 
 SCP 恢复流程 
当 SCP 异常或一段时间没有响应时，恢复将开始。SCP 内核驱动程序和 SCP 将进入服务中断状态。在此期间，SCP
内核驱动程序将重置 SCP 并向所有已注册通知链的驱动程序发送 SCP_EVENT_STOP。当 SCP 恢复正常后，SCP 内核驱
动程序将向所有驱动程序发送 SCP_EVENT_READY。 
 
图 5-2. SCP 重置流程 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8668 SCP 
User Manual 
Confidential B 
 恢复通知流程 
Linux SCP 驱动程序的开发人员必须遵循此 SCP 事件通知链，以确保 SCP 恢复有效。 
• API：接收通知并调用已注册的回调函数 
void scp_A_register_notify(struct notifier_block *nb) 
description 
注册通知链的回调函数。 
parameters 
nb: 通知链的回调函数 
callback parameters 
SCP_EVENT_READY:  当SCP 初始化完成时，开始与SCP 对应的任务 
SCP_EVENT_STOP: 当SCP 即将重置时，停止与SCP 对应的任务。 
 
注意： 
所有回调函数可能会被多次调用，并且绝对不能被阻塞。 
 
• 示例： 
– 需要包含头文件 <linux/notifier .h>, <mach/scp_helper .h> 
– 调用 scp_register_notify () 时，使用参数: SCP_EVENT_READY or SCP_EVENT_STOP 
static void task_start(void) { 
  // start tasks 
} 
static void task_stop(void) { 
  // stop tasks 
} 
static int app_event(struct notifier_block *this, unsigned long event, void *ptr) { 
    switch (event) { 
        case SCP_EVENT_READY: 
            task_start(); 
            break; 
        case SCP_EVENT_STOP: 
            task_stop(); 
            break; 
    } 
    return NOTIFY_DONE; 
} 
static struct notifier_block app_notifier = { 
    .notifier_call = app_event, 
};  
static int __init scp_app_init(void) { 
    if (scp_is_ready()) { 
        task_start(); 
    } 
    scp_register_notify(&app_notifier); 
} 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8668 SCP 
User Manual 
Confidential B 
注意： 
1. 必须注册通知链，因为在恢复期间 scp_ipi_send() 可能会返回错误。 
2. 必须应用错误处理流程： 
– 在接收到 SCP_EVENT_STOP 后立即停止调用 scp_ipi_send() 
– 在接收到 SCP_EVENT_READY 后恢复调用 scp_ipi_send() 
 
5.3 驱动程序指南 
 驱动程序初始化 
由于在驱动程序初始化时未启用多线程，开发人员必须 
• 确定程序需要跑在哪个 cpu 上： 
– CORE0_HART0 =  cpu0 , CORE1_HART1 = cpu3 
• 在 platform_init_cpuX() 中初始化驱动程序 
• 避免在驱动程序初始化函数中使用阻塞函数，因为这会导致永远阻塞 : 
– vTaskDelay：用于在 FreeRTOS 任务中延迟执行一段时间 
– HW semaphore：硬件信号量，用于在任务之间进行同步和通信 
– Busy loop, e.g., polling registers：忙等待，例如轮询寄存器，用于等待某些条件的发生 
 添加新驱动程序 
要添加新驱动程序，请按照以下步骤操作: 
1. 在适当的目录中创建新的驱动程序文件 (选择如下的目录) 
• 路径 
vendor/mediatek/proprietary/tinysys/common                        /* 通用的tinysys 驱动程序 */ 
vendor/mediatek/proprietary/tinysys/scp/drivers/common  /* scp 通用的驱动程序 */                       
vendor/mediatek/proprietary/tinysys/scp/drivers/RV55_A/mt6881/drivers   /* 平台相关的驱动*/ 
 
2. 添加新的编译选项 
• 路径 
vendor/mediatek/proprietary/tinysys/scp/project/mt6881/platform/platform.mk 
 
• 示例：DMA 驱动程序 
CFG_DMA_SUPPORT = yes 
… 
ifeq ($(CFG_DMA_SUPPORT),yes)                       
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8668 SCP 
User Manual 
Confidential B 
     INCLUDES += $(COMMON_DIR)/drivers/dma/v3/inc        
     INCLUDES += $(SCP_DRIVERS_DIR)/common/dma/inc       
     INCLUDES += $(DRIVERS_PLATFORM_DIR)/dma             
     C_FILES  += $(COMMON_DIR)/drivers/dma/v3/dma.c      
     C_FILES  += $(SCP_DRIVERS_DIR)/common/dma/dma_api.c 
endif  
 
 中断 
mt6881 SCP 支持 15 个优先级的中断，优先级数字越低，优先级越高。如果同时发生多个 IRQ，CPU 将优先处理优
先级最高的 IRQ。绝对不要将中断优先级设置为 2 以上。0 级用于“看门狗”或“系统故障”，1 级用于“睡眠控
制”中断。我们将在本章描述如何在 SCP 中使用中断。  
• 路径 
vendor/mediatek/proprietary/tinysys/common/drivers/irq/v3/inc/irq.h 
 IRQ 注册 
在 IRQ 被处理之前，驱动程序开发人员必须在 IRQ ID 和相应的处理程序之间建立关联。IRQ 根据 INTC_IRQ 的结构
定义，驱动程序开发人员使用以下 API 注册处理程序和 IRQ ID。 
• 架构 
struct INTC_IRQ 
{ 
    uint8_t id; 
    uint8_t group; 
    uint8_t pol; 
} 
    id: IRQ 编号 
    group: 优先级组，从INTC_GRP_0（最高优先级）到INTC_GRP_14（最低优先级） 
    pol: 触发极性，使用INTC_POL_HIGH 或INTC_POL_LOW 
 
 
• API 
int intc_irq_request(struct INTC_IRQ *irq, irq_handler_t handler, void *userdata) 
Description 
Request an irq and register the handler, and default enable the irq handler. 
Parameters 
irq: the irq structure which is declared at intc.h 
handler: irq handler 
userdata: it will deliver to irq handler as a parameter 
Return values 
0: success 
-1: request fail 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8668 SCP 
User Manual 
Confidential B 
• 示例 
struct INTC_IRQ INTC_IRQ_SYSTICK = {0, INTC_GRP_8, INTC_POL_HIGH}; 
 
#include “irq.h” 
 
int ret; 
ret = intc_irq_request(&INTC_IRQ_SYSTICK, test_ist, NULL); 
if (ret != 0) 
        PRINTF_E(“Register irq failed\n”); 
 
 使能中断 
在 IRQ 处理程序注册后，SCP 已准备好服务。下一步是使用以下 API 启用特定的 IRQ。 
• API 
int intc_irq_enable(struct INTC_IRQ *irq) 
Description 
启用指定的IRQ 服务。 
Parameters 
irq: 在intc.h 中声明的IRQ 结构体 
Return values 
0: 成功 
-1: 请求失败 
 
• 示例: 
#include “irq.h” 
 
int ret; 
ret = intc_irq_enable(&INTC_IRQ_SYSTICK); 
if (ret != 0) 
        PRINTF_E(“enable irq failed\n”); 
 
 禁用 IRQ 
相反，当 IRQ 暂时不使用时，驱动程序开发人员必须调用以下 API 使 SCP 停止服务这些 IRQ。 
• API 
int intc_irq_disable(struct INTC_IRQ *irq) 
Description 
禁用指定的IRQ 服务。 
Parameters 
irq: 在intc.h 中声明的IRQ 结构体 
Return values 
0: 成功 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8668 SCP 
User Manual 
Confidential B 
-1: 请求失败 
 
• 示例 
#include “irq.h” 
 
int ret; 
ret = intc_irq_dsiable(&INTC_IRQ_SYSTICK); 
if (ret != 0) 
        PRINTF_E(“disable irq failed\n”); 
 
 注册唤醒源 
当 SCP 处于睡眠状态时，除非设置为唤醒源，否则 IRQ 将不会被处理。以下 API 用于将 IRQ 注册为唤醒源。 
• API 
int intc_irq_wakeup_set(struct INTC_IRQ *irq, unsigned int wake_src) 
Description 
为指定的IRQ 设置唤醒源。 
Parameters 
irq: 在intc.h 中声明的IRQ 结构体 
wake_src: 1 表示唤醒源，0 表示非唤醒源 
Return values 
0: 成功 
-1: 请求失败 
 
• 示例 
#include “irq.h” 
 
int ret; 
ret = intc_irq_wakeup_set(&INTC_IRQ_SYSTICK, 1); 
if (ret != 0) 
        PRINTF_E(“irq wakeup source setup failed\n”); 
 
注意： 
1. ISR 执行时间必须尽可能短，堆栈深度尽可能小。 
2. 绝对不要在 ISR 中使用阻塞 API，例如： 
– 硬件信号量 API 
– 等待 IPI 
– 任何带有轮询外部设备的 API 
3. 绝对不要在 ISR 中使用没有 FromISR 后缀的 FreeRTOS API。 
– 这些是重写版本，具有无阻塞 API 和快速实现。 
4. 如果在 ISR 中唤醒了高优先级任务，必须使用 portYIELD_FROM_ISR()。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8668 SCP 
User Manual 
Confidential B 
 
 锁 
SCP 提供了用于双核同步的自旋锁机制。 使用锁需要打开如下配置项： 
CFG_ATOMIC_PLAT_SUPPORT = yes 
 
• 路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/platform.mk 
 
• API 
spinlock_t SYNC_SECTION lock; 
 
void spinlock_lock(spinlock_t * lock) 
void spinlock_unlock(spinlock_t * lock) 
Description 
获取/释放自旋锁 
Parameters 
lock: SYNC_SECTION 定义的变量 
Return values 
无.  
 
• 头文件路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/inc/mtk_atomic.h 
 
注意： 
1. 绝对不要保持自旋锁超过 1 毫秒，因为在自旋锁和解锁期间会禁用抢占。 
2. 对于不跨越双核的场景，不需要使用自旋锁。 
 
 DMA 
直接内存访问（DMA）是一种支持在指定源/目标之间复制数据而不涉及 CPU 的硬件。SCP DMA 支持以下功能： 
1. 突发 AXI 模式以加速内存传输 
2. 8 个通道，即引擎最多可以同时操作 8 个事务。 
 
• API 
DMA_RESULT scp_dma_transaction(uint32_t dst_addr, uint32_t src_addr, uint32_t len, int8_t 
scp_dma_id, int32_t ch) 
DMA_RESULT scp_dma_transaction_dram(uint32_t dst_addr, uint32_t src_addr, uint32_t len, 
int8_t scp_dma_id, int32_t ch) 
Description 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
MT8668 SCP 
User Manual 
Confidential B 
通过指定的DMA 通道从src_addr 复制数据到dst_addr。 
Parameters 
dst_addr: 目标地址 
src_addr: 源地址 
len: 要复制的字节长度  
scp_dma_id: DMA ID 
ch: channel 通道ID 
Return values 
DMA_RESULT_DONE (=0) 表示成功开始 
DMA_RESULT_NO_FREE_CH (=-1) 表示DMA 硬件忙 
 
• 头文件路径 
vendor/mediatek/proprietary/tinysys/common/drivers/dma/v3/inc/dma.h 
vendor/mediatek/proprietary/tinysys/scp/drivers/common/dma/dma_api.h 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/mt_dma.h 
 
• scp_dma_id 
– scp_dma_id 是在 mt_dma.h 中的 DMA 通道的标识。建议使用不同的 dma_id，这样会更容易调试出通道满
的问题。 
 
• 限制 
– 每个事务的最大数据大小为 262140 字节 
– 使用 4 字节对齐的地址以获得最佳性能 
 
• 示例: 
ret = scp_dma_transaction(dst_buf + dst_w_pos, src_buf + src_r_pos, src_len, 
LOGGER_DMA_ID, NO_RESERVED); 
if (ret != DMA_RESULT_DONE) { 
 PRINTF_E("log dma trans fail%u\n", ret); 
 return 0; 
} 
 
 硬件信号量 
硬件信号量是一种特殊的硬件，它在 Linux 驱动程序和 FreeRTOS 之间提供类似互斥锁的流控制。在 SCP 中有 16 组
硬件信号量。以下 API 使硬件信号量易于使用，它们在 SCP 和 Linux 驱动程序中都可以工作。只需包含正确的头文
件并确保标志相同。 
• API 
int semaphore_get(unsigned int flags) 
int semaphore_release(unsigned int flags) 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
MT8668 SCP 
User Manual 
Confidential B 
Description 
在AP 和SCP 之间使用的信号量。 
Parameters 
flag: 0 ~ 15，对应SCP 中的16 组信号量 
Return values 
0: 获取信号量失败 
1: 获取信号量成功 
 
 
• 头文件路径 
– Kernel/kernel_device_modules -6.12/drivers/misc/mediatek/scp/rv/scp_helper.h 
– vendor/mediatek/proprietary/tinysys/common/drivers/sem/v1/inc/sem.h 
 
• 返回值 
– 1: 成功获取信号量 
– 0: 获取信号量失败 
 
• 示例:   
int get_ semaphore; 
 
while(1) { 
    get_semaphore = semaphore_get(4) 
    if (get_semaphore) 
        break; 
} 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
MT8668 SCP 
User Manual 
Confidential B 
 GPIO 和 EINT 
SCP 还提供 GPIO 和外部中断（EINT），以便外部组件（如陀螺仪传感器）可以向 SCP 发送事件。 
• GPIOs 
– Function set to: TP_GPIO?_AO, 支持 TP_GPIO0_AO~TP_GPIO15_AO 
• EINTs 
– Function set to Aux Func.0(GPIO), 支持 EINT0~15 
表 5-1. EINT 和 GPIO 的映射引脚名称 
Ball name GPIO Reset Default 
Mode EINT Aux Func.0 Aux Func.4 Aux Func.6 
EINT0 0 EINT0 B:GPIO0 
 
B0:TP_GPIO0_AO 
EINT1 0 EINT1 B:GPIO1 
 
B0:TP_GPIO1_AO 
EINT2 0 EINT2 B:GPIO2 
 
B0:TP_GPIO2_AO 
EINT3 0 EINT3 B:GPIO3 
 
B0:TP_GPIO3_AO 
EINT4 0 EINT4 B:GPIO4 
 
B0:TP_GPIO4_AO 
EINT5 0 EINT5 B:GPIO5 
 
B0:TP_GPIO5_AO 
EINT6 0 EINT6 B:GPIO6 
 
B0:TP_GPIO6_AO 
EINT7 0 EINT7 B:GPIO7 
 
B0:TP_GPIO7_AO 
EINT8 0 EINT8 B:GPIO8 B0:TP_GPIO8_AO 
 
EINT9 0 EINT9 B:GPIO9 B0:TP_GPIO9_AO 
 
EINT10 0 EINT10 B:GPIO10 
 
B0:TP_GPIO10_AO 
EINT11 0 EINT11 B:GPIO11 
 
B0:TP_GPIO11_AO 
EINT12 0 EINT12 B:GPIO12 
 
B0:TP_GPIO12_AO 
EINT13 0 EINT13 B:GPIO13 
 
B0:TP_GPIO13_AO 
EINT14 0 EINT14 B:GPIO14 
 
B0:TP_GPIO14_AO 
EINT15 0 EINT15 B:GPIO15 
 
B0:TP_GPIO15_AO 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 27 
MT8668 SCP 
User Manual 
Confidential B 
 GPIO 使用 
GPIO 功能必须首先设置为 TP_GPIO?_AO。请参考 GPIO 引脚复用设置文档以获取详细信息。表 5-2 是 GPIO 控制寄
存器表 
表 5-2. GPIO 控制寄存器表 
Register  
Offset Name Description Access Enumeration 
0x25000 GPIO_DIR GPIO direction RW 0: Input 
1: Output 
0x25004 GPIO_OUT GPIO output RW GPIO output [1:0] 
0x25008 GPIO_IN GPIO input RO GPIO input[1:0] 
0x2500C GPIO_PULL_EN GPIO pull enable RW 0: Disable 
1: Enable 
0x25010 GPIO_PULL_CTRL GPIO pull control RW 0: Pull down 
1: Pull up 
 
控制示例： 
• 拉高 GPIO 1 
– Set GPIO_DIR,  0x60525000[1] = 1 
– Set GPIO_OUT , 0x65025004[1] = 1 
• 读取 GPIO 0  
– Set GPIO_DIR,  0x60525000[0] = 0 
– Read GPIO_IN, 0x60525008[0] 
• 内部上拉 GPIO 3 
– Set GPIO_PULL_EN,     0x6052500c[3] = 1 
– Set GPIO_PULL_CTRL, 0x60525010[3] = 1 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 28 
MT8668 SCP 
User Manual 
Confidential B 
 EINT 使用  
• 路径 
tinysys/common/drivers/eint/v02/src 
 
• API：注册 EINT 回调 
void mt_eint_registration(unsigned int eint_num, unsigned int sens, unsigned int pol, 
void (EINT_FUNC_PTR) (int), unsigned int unmask, 
unsigned int is_auto_umask) 
Description 
注册 EINT 中断处理程序。 
Parameters 
eint num: EINT 编号 
sens:触发类型（LEVEL_SENSITIVE 或 EDGE_SENSITIVE） 
pol: 触发极性（HIGH_LEVEL_TRIGGER 或 LOW_LEVEL_TRIGGER） 
EINT_FUNC_PTR: 中断服务程序（ISR）回调函数 
unmask: 注册后是否启用此 EINT 触发 
Is_auto_unmask: 完成 EINT 服务例程后是否自动重新启用 EINT 触发 
Return values 
无 
 
 
• 示例 
mt_eint_registration(eint_num, LEVEL_SENSITIVE, HIGH_LEVEL_TRIGGER, xxx_Isr,   
EINT_INT_UNMASK, EINT_INT_AUTO_UNMASK_OFF); 
 
– void mt_eint_dis_hw_debounce(unsigned int eint_num): 禁用硬件去抖动功能 
– void mt_eint_soft_set(unsigned int eint_num) : 使用软件触发来清除指定的外部中断 
 处理器间中断 
处理器间中断 (IPI) 是一种在 Linux 和 FreeRTOS 驱动程序之间传递消息的机制。它包括以下部分： 
1. 一块共享内存：用于交换数据 
2. 一组中断：用于相互通知 
 
图 5-3 展示了 Tinysys IPI 架构。软件架构由四层组成： 
1. Synchronization layer: 用于 AP 和 Tinysys 之间通信的公共 API 
2. Rpmsg layer: 提供阻塞/非阻塞发送功能 
3. Queue layer: 进行队列操作和管理功能 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 29 
MT8668 SCP 
User Manual 
Confidential B 
4. Physical layer: 进行物理硬件操作 
 
 
图 5-3. Tinysys IPI 通用架构 
 
邮箱（MailBox）是预定义的。开发人员使用以下 API 将 IPI 发送到 Tinysys，包括 IPI ID 和注册回调函数（ipi_cb）。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 30 
MT8668 SCP 
User Manual 
Confidential B 
5.3.14.1 SCP 端的使用 
i. 在 ipi_id.h, ipi_table.h 和 mbox_pin.h 中添加新的 IPI ID 信息。发送和接收信息由不同的 IPI 表描述。 
• 文件描述 
– ipi_id.h:           定义 IPI ID（必须唯一） 
– ipi_table.h:     定义 IPI 引脚表（引脚槽总数不能超过邮箱槽） 
– mbox_ipi.h:    定义 IPI 引脚槽 
• 路径 
  vendor/mediatek/proprietary/tinysys/scp/drivers/RV55_A/mt6881/mbox/ipi_id.h 
  vendor/mediatek/proprietary/tinysys/scp/drivers/RV55_A/mt6881/mbox/ipi_table.h 
  vendor/mediatek/proprietary/tinysys/scp/drivers/RV55_A/mt6881/mbox/mbox_pin.h 
 
• IPI_TABLE (发送器引脚说明) 
/* mbox pin structure, this is for send definition, 
 * ipi=endpoint=pin 
 * mbox :           (mbox number)mbox number of the pin, up to 16 
 * offset :           (slot)msg offset in share memory, 4 bytes alignment, up to 1024*4 KB 
 * send_opt :      (opt)send opt, 0:send ,1: send for response 
 * lock_opt :      (opt)option 0: mutex, 1: busy wait 
 * msg_size :     (slot)message size in words, 4 bytes alignment 
 * pin_index :    (bit offset)pin index in the mbox 
 * ipi_id :          (ipi_id)ipi_id in the mbox 
 * mutex :         (mutex)mutex for remote response 
 * sema_ack :    (sema_ack)completion for remote response 
 * send_record : send pin record information 
 */ 
struct pin_send { 
         unsigned int mbox:4, 
                         offset:20, 
                         send_opt:2, 
                         lock_opt:2; 
         unsigned int msg_size; 
         unsigned int pin_index; 
         unsigned int ipi_id; 
         SemaphoreHandle_t mutex; 
         SemaphoreHandle_t sema_ack; 
         struct mtk_mbox_send_record send_record; 
}; 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 31 
MT8668 SCP 
User Manual 
Confidential B 
• IPI_TABLE (接收器引脚说明) 
/* 
* mbox pin structure, this is for receive definition, 
* ipi=endpoint=pin 
* mbox:             (mbox number)mbox number of the pin, up to 16 
* offset:           (slot)msg offset in share memory, 4 bytes alignment, up to 1024*4 KB 
* recv_opt:         (opt)recv option,  0:receive ,1: response 
* lock_opt:         (opt)option 0: mutex, 1: busy wait 
* buf_full_opt:     (opt)buffer option 0:drop, 1:assert, 2:overwrite 
* cb_ctx_opt:       (opt)callback option 0:isr context, 1:process context 
* msg_size:         (slot)msg used slots in the mbox, 4 bytes alignment 
* pin_index:        (bit offset)pin index in the mbox 
* ipi_id:           (ipi_id)ipi_id in the mbox 
* notify:           (completion)notify process 
* mbox_pin_cb:      (cb)cb function 
* pin_buf:          (void*)buffer point 
* prdata:           (void*)private data 
* recv_record:      receive pin record information 
*/ 
struct pin_recv { 
unsigned int mbox:4, 
offset:20, 
recv_opt:2, 
lock_opt:2, 
buf_full_opt:2, 
cb_ctx_opt:2; 
unsigned int msg_size; 
unsigned int pin_index; 
unsigned int ipi_id; 
SemaphoreHandle_t notify; 
void (*mbox_pin_cb) (unsigned int id, void *prdata, void *data, unsigned int len); 
void *pin_buf; 
void *prdata; 
struct mtk_mbox_recv_record recv_record; 
}; 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
MT8668 SCP 
User Manual 
Confidential B 
• 示例：在 ipi_id.h 中添加新的 IPI ID 
##Add IPI_NEW_ID at ipi_id.h 
enum { 
 . 
 . 
 IPI_NEW_ID =39, 
 IPI_COUNT 
}; 
 
• 示例：在 mbox_pin.h 中添加新的 PIN 大小定义  
##Add PIN_IPI_NEW_ID_SIZE at mbox_pin.h 
 
#define PIN_IPI_NEW_ID_SIZE  2 
 
• 示例：在 ipi_table.h 中添加新的引脚设置 
– 以下指南不得违反： 
▪ 在同一个邮箱（mbox）中，发送表和接收表的总消息大小（msg_size）不得超过 64。 
▪ 新的引脚设置必须与相同的邮箱编号捆绑在一起。 
##Add new pin setting for send or recv table at ipi_table.h 
 
Struct pin_send mbox_pin_send_table [] = { 
 {0, 0, 0, 0, …, {}}, 
 . 
 . 
 {0, 0, 0, 0, PIN_IPI_NEW_ID_SIZE, 0, IPI_NEW_ID, 0, 0, {}}, 
 {1, 0, 0, 0, …, {}}}, 
 . 
 . 
 {2, 0, 0, 0, …, {}}}, 
 . 
 . 
} 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 33 
MT8668 SCP 
User Manual 
Confidential B 
ii. 注册 IPI 处理程序 
int ipi_register(unsigned int ipi_id, void *cb, void *prdata, void *msg) 
Description: 
To register IPI handler 
Parameters: 
id: id declared in ipi_id.h 
cb: IPI handler, a callback 
prdata: IPI handler parameter, for customiszed  
msg: msg buffer, data recv from AP 
Return values: 
DONE: complete successfully 
ERROR: something wrong in lower layer driver, i.e. mbox  
BUSY: the channel is busy. Need to retry. 
 
• 示例： 
#include “scp_ipi.h” 
 
int ret; 
ret = ipi_register(IPI_NEW_ID, ipi_cb, 0,“ipi_cb name”); 
if (ret != IPI_ACTION_DONE) 
        PRINTF_E(“Register IPI failed\n”); 
 
void ipi_cb(int id, void *prdata, void *data) 
{ 
        /* data: received message from kernel */ 
        unsigned int rcv_data =  *(unsigned int *)data; 
        …. 
  
} 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
MT8668 SCP 
User Manual 
Confidential B 
iii. 接收 IPI 
int ipi_recv(unsigned int ipi_id) 
Description 
API for apps to receive an IPI from AP 
Parameters 
id: IPI id declared in ipi_id.h 
Return values 
DONE: complete successfully 
ERROR: something wrong in lower layer driver, i.e. mbox  
 
• 示例: 
#include “scp_ipi.h” 
 
static void xxx_ipi_task(void *pvParameters) 
{ 
int ret; 
 
while(1) { 
ret = ipi_recv(IPI_NEW_ID); 
if (ret != DONE) 
PRINTF_E(“Send IPI failed\n”); 
} 
} 
 
int ipi_recv_reply(unsigned int ipi_id, void *reply_data, int len) 
Description 
API for apps to receive an IPI from AP and reply 
Parameters 
id:               IPI id declared in ipi_id.h 
reply_data:  the message which will be replied to Linux kernel 
len:             message length(4 bytes as a unit) 
Return values 
DONE: complete successfully 
ERROR: something wrong in lower layer driver, i.e. mbox 
 
• 示例: 
#include “scp_ipi.h” 
 
static void new_ipi_task(void *pvParameters) 
{ 
int ret; 
while(1) { 
ret = ipi_recv_reply(IPI_NEW_ID, (void *)&reply_data, reply_data_len); 
if (ret != DONE) 
PRINTF_E(“Send IPI failed\n”); 
} 
} 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 35

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 35 
MT8668 SCP 
User Manual 
Confidential B 
iv. 发送 IPI 
 
• 示例： 
#include “scp_ipi.h” 
 
ipi_status ret; 
ret = ipi_send (IPI_NEW_ID, (void *)&msg, msg_size, 0, IPI_SCP2AP); 
if (ret != DONE) 
        PRINTF_E(“Send IPI failed\n”); 
 
v. IPI 状态 
如果在运行时使用过程中出现任何问题，请首先检查 API 的返回值，返回值参考如下表所示： 
#define IPI_ACTION_DONE       0 
#define IPI_ILLEGAL          -1     /* illegal ipi index */ 
#define IPI_DUPLEX           -2     /* the ipi has be registered */ 
#define IPI_UNAVAILABLE      -3     /* can't find this ipi pin define */ 
#define IPI_NO_MSGBUF        -4     /* ipi receiver doesn't has message buffer */ 
#define IPI_NO_MEMORY        -5     /* the message length is large than defined */ 
#define IPI_PIN_BUSY         -6     /* send message timeout */ 
#define IPI_RECV_TIMEOUT     -7     /* receive message timeout */ 
#define IPI_MBOX_ERR         -99    /* some error from physical layer */ 
 
  
int ipi_send(unsigned int ipi_id, void *data, int len, unsigned long retry_timeout) 
Description 
API for apps to send an IPI to AP 
Parameters 
id: IPI id declared in ipi_id.h 
data: the message which will be sent to Linux kernel 
len: message length(4 bytes as a unit) 
retry_timeout: the times of retry 
Return values 
DONE: complete successfully 
ERROR: something wrong in lower layer driver, i.e. mbox  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 36

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 36 
MT8668 SCP 
User Manual 
Confidential B 
5.3.14.2 内核端的使用 
i. 在 scp.h 和 mt6881.dts 文件中添加新的 IPI ID 和 pin table 
• 文件描述 
– scp.h: 定义 IPI（ID 必须与 SCP 端同步） 
– mt6881.dts: 定义引脚表（引脚表必须与 SCP 端同步） 
• 路径 
kernel-6.12/drivers/misc/mediatek/scp/include/scp.h 
kernel-6.12/arch/arm64/boot/dts/mediatek/mt6881.dts 
 
在设备树文件（DTS）中描述 SCP IPI 的设置，以确保系统的正常运行和通信。 
 
• 示例：在 scp.h 中添加新的 IPI ID 和消息大小 
## Add new IPI ID and message size at scp.h 
 
. 
. 
. 
#define PIN_IPI_NEW_ID_SIZE     2 
. 
. 
. 
enum { 
 . 
 . 
 IPI_NEW_ID = 39, 
 SCP_IPI_COUNT 
} 
 
• 示例：在 mt6881.dts 中添加新的引脚设置： 
scp: scp@1c400000 { 
 . 
 . 
 send_table = 
 // <id, mbox, send_size> 
 . 
 . 
 <..>; 
 recv_table = 
 //< id, mbox, recv_size, recv_opt>, 
 < 39, 0, 2, 0>, 
 . 
 . 
 <..>; 
 
} 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 37

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 37 
MT8668 SCP 
User Manual 
Confidential B 
ii. 注册一个 IPI 
int mtk_ipi_register(struct mtk_ipi_device *ipidev, int ipi_id, mbox_pin_cb_t cb, void 
*prdata, void *msg) 
Description 
To register IPI handler 
Parameters 
ipidev: ipidev declared in scp.h 
ipi_id: id declared in scp.h 
cb: IPI handler, a callback 
prdata: IPI handler parameter, for customiszed  
msg: msg buffer, data recv from SCP 
Return values 
DONE: complete successfully 
ERROR: something wrong in lower layer driver, i.e. mbox  
 
iii. 发送一个 IPI 
int mtk_ipi_send(struct mtk_ipi_device *ipidev, int ipi_id, int opt, void *data, int len, 
int timeout) 
Description 
API for apps to send an IPI to scp 
Parameters 
ipidev: ipidev declared in scp.h 
ipi_id: IPI id declared in scp.h 
opt: IPI_mode, IPI_SEND_WAIT or IPI_SEND_POLLING, should be sync with pin table 
data: the message which will be sent to SCP 
len: message size(4 bytes as a unit) 
timeout: busy wait , as ms per unit 
Return values 
DONE: complete successfully 
ERROR: something wrong in lower layer driver, i.e. mbox  
SCP_NOT_READY: scp is not ready. Need to retry. 
 
iv. 接收一个 IPI 
int mtk_ipi_recv(struct mtk_ipi_device *ipidev, int ipi_id) 
Description 
API for apps to receive an IPI from scp 
Parameters 
ipidev: ipidev declared in scp.h 
ipi_id: IPI id declared in scp.h 
Return values 
DONE: complete successfully 
ERROR: something wrong in lower layer driver, i.e. mbox  
SCP_NOT_READY: scp is not ready. Need to retry. 
 
5.4 DRAM 访问流程 
由于无论 SCP 的状态如何，DRAM 和系统总线都可能被关闭，SCP 开发人员必须遵循以下步骤以避免系统挂起。以
下是 AP 和 SCP 之间通过 DRAM 共享信息的概述。 
(注: 请参考章节 5.4.3 以获取 SCP 端保留的 DRAM 地址) 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 38 
MT8668 SCP 
User Manual 
Confidential B 
 
 
表 5-3. 标准 DRAM 访问流程 
# 步骤 备注 
0 检查/添加预定义表 scp_reserve_mblock[]  
1 SCP Linux 驱动通过 API 获取保留的物理地址 
 phys_addr_t scp_get_reserve_mem_phys(scp_reserve_mem_id_t id) 
 phys_addr_t scp_get_reserve_mem_virt(scp_reserve_mem_id_t id) 
 phys_addr_t scp_get_reserve_mem_size(scp_reserve_mem_id_t id) 
2 SCP Linux 驱动通过 IPI 将地址发送到 SCP  scp_ipi_send(uint32 id, void* buf, uint len) 
3 SCP 通过 API 访问 DRAM  uint32_t ap_to_scp(uint32_t ap_addr) 
4 
SCP user 在使用前启用 DRAM 资源，在使用
后禁用 DRAM 资源 
 void dvfs_enable_DRAM_resource(scp_reserve_mem_id_t dma_id) 
 void dvfs_disable_DRAM_resource(scp_reserve_mem_id_t dma_id) 
 
 在 Linux 内核中保留内存 
为了在 AP 和 SCP 之间交换数据，需要在 DRAM 中保留一个空间。首先，我们需要在 scp_reserve_mblock[] 中添加条
目。这些定义可以在如下路径找到: 
• 路径: 
{lk2 repo}/platform/mediatek/mt6881/rules.mk 
{kernel repo}/arch/arm64/boot/dts/mediatek/mt6881.dts 
{kernel repo}/drivers/misc/mediatek/scp/include/scp.h 
{kernel repo}/drivers/misc/mediatek/scp/rv/scp_reservedmem_define.h  
5.4.1.1 在共享内存中注册使用者 
步骤1. 在 scp_reserve_mem_id_t 中添加新的 ID 
{kernel repo}/drivers/misc/mediatek/scp/include/scp.h 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 39

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 39 
MT8668 SCP 
User Manual 
Confidential B 
enum scp_reserve_mem_id_t { 
SCP_A_SECDUMP_MEM_ID = 0, 
VOW_MEM_ID, 
SENS_MEM_ID, 
… 
USER_MEM_ID,  // 在此处添加 
NUMS_MEM_ID, 
} 
 
步骤2. 在 scp_reserve_mblock 数据结构中添加成员 
{kernel repo}/drivers/misc/mediatek/scp/rv/scp_reservedmem_define.h 
static struct scp_reserve_mblock scp_reserve_mblock[] = { 
{ 
.num = SCP_A_SECDUMP_MEM_ID, 
.start_phys = 0, 
.start_virt = 0, 
.size = 0, 
}, 
{ 
.num = VOW_MEM_ID, 
.start_phys = 0x0, 
.start_virt = 0x0, 
.size = 0x0, 
}, 
… 
{ 
.num = USER_MEM_ID, 
.start_phys = 0x0, 
.start_virt = 0x0, 
.size = 0x0, 
}, 
} 
 
步骤3. 在设备树文件中添加保留内存的节点 
{kernel repo}/arch/arm64/boot/dts/mediatek/mt6881.dts 
scp: scp@1c400000{ 
… 
scp_mem_tbl = <0 0x0>, 
<1 0xca700>, /* vow */ 
<2 0x100000>, /* sensor main*/ 
..., 
<id, size>;          /*user_mem*/ 
}; 
 
步骤4. 在 Makefile 中增加 SCP 共享内存的大小 
{lk2 repo}/platform/mediatek/mt6881/rules.mk 
SCP_RESERVED_SHARE_DRAM_SIZE:= 0x           //在此变量中添加增量 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 40

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 40 
MT8668 SCP 
User Manual 
Confidential B 
5.4.1.2 扩展共享内存 
以传感器为例，增加 1.5MB 的内存 
{kernel repo}/arch/arm64/boot/dts/mediatek/mt6881.dts 
scp: scp@1c400000{ 
   ... 
scp_mem_tbl = <0 0x0>, 
<1 0xca700>, /* vow */ 
<2 0x280000>, /* sensor main original value is 0x100000 */ 
..., 
}; 
 
{lk2 repo}/platform/mediatek/mt6881/rules.mk 
SCP_RESERVED_SHARE_DRAM_SIZE:= 0x680000      // original = 0x500000  
 
 通过 ID 获取保留内存 
由于 AP CPU 使用虚拟地址，而 SCP 使用物理地址，因此需要提供这两种类型的地址。以下 API 用于通过给定的 ID
获取虚拟/物理地址和大小，这些 ID 在章节 5.4.1 中声明。 
• API 
phys_addr_t scp_get_reserve_mem_phys(scp_reserve_mem_id_t id) 
phys_addr_t scp_get_reserve_mem_virt(scp_reserve_mem_id_t id) 
phys_addr_t scp_get_reserve_mem_size(scp_reserve_mem_id_t id) 
 
• 头文件路径 
kernel/kernel_device_modules-6.12/drivers/misc/mediatek/scp/rv/scp_helper.h 
 
• 返回值 
– 保留内存的起始地址，或 
– 0x0：表示没有映射 
 
在获取物理地址后，开发人员必须通过 IPI 将其传递给 SCP， 如章节 5.3.14.2 所述。 
 在 SCP 端获取保留的 DRAM 区域 
为了保持安全状态并避免恶意的 IPI 消息，SCP_DRAM_REGION 被引入以直接提供 SCP 端保留的 DRAM 区域信息。
以下 API 用于通过给定的 ID 获取物理地址和大小，这些 ID 在章节 5.4.1 中声明。 
• API 
bool scp_get_reserve_mem_by_id(uint32_t id, void **ap_addr, size_t *size) 
• 头文件路径 
vendor/mediatek/proprietary/tinysys/scp/drivers/common/dram_region_mgmt/scp_dram_region.h 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 41

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 41 
MT8668 SCP 
User Manual 
Confidential B 
• 返回值 
– True：*ap_addr 和 size 的值被更新为给定 ID 的起始地址和大小。 
– False：*ap_addr 和 size 的值未被更新。 
 
对于可能在不同项目中通用的代码，CFG_SCP_DRAM_REGION_MANAGE 可以帮助保持兼容性。例如：  
 
 
#ifdef CFG_SCP_DRAM_REGION_MANAGE 
#include “scp_dram_region.h” 
#define USER_MEM_ID   11   //id number from dts 
#endif 
 
 
void init_memory(…..) { 
… 
#ifdef CFG_SCP_DRAM_REGION_MANAGE 
void *addr; 
size_t size; 
 
if (scp_get_reserve_mem_by_id(USER_MEM_ID, &addr, &size)) 
set_dram_addr(addr, size); 
else 
    …. 
#else 
 
// 从IPI 消息中获取地址和大小 
set_dram_addr(msg.addr, msg.size); 
#endif 
… 
} 
 
 将 DRAM 地址从 AP 视图重映射到 SCP 视图 
SCP 是一个 32 位系统，最多只能访问 4G（0xffffffff）地址。如果 SCP 应用程序需要访问高于 4G 的地址，我们需要
使用以下 API 将地址重映射到 SCP 内存窗口。以下是 AP 和 SCP 之间的映射表。 
表 5-4. 默认重映射规则表 
名称 SCP/DMA 大小 AP 端 
External Memory 0x3000_0000 0x3FFF_FFFF 256MB 0x3000_0000 0x3FFF_FFFF 
External Memory 0x5000_0000 0x5FFF_FFFF 256MB 0x4000_0000 0x4FFF_FFFF 
External Memory 0x6000_0000 0x6FFF_FFFF 256MB 0x1000_0000 0x1FFF_FFFF 
External Memory 0x8000_0000 0x8FFF_FFFF 256MB 0x9000_0000 0x9FFF_FFFF 
External Memory 0x9000_0000 0x9FFF_FFFF 256MB 0xA000_0000 0xAFFF_FFFF 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 42

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 42 
MT8668 SCP 
User Manual 
Confidential B 
名称 SCP/DMA 大小 AP 端 
External Memory 0xA000_0000 0xAFFF_FFFF 256MB 0xB000_0000 0xBFFF_FFFF 
External Memory 0xC000_0000 0xCFFF_FFFF 256MB 0xC000_0000 0xCFFF_FFFF 
External Memory 0xD000_0000 0xDFFF_FFFF 256MB 0xD000_0000 0xDFFF_FFFF 
External Memory 0xE000_0000 0xEFFF_FFFF 256MB 0xE000_0000 0xEFFF_FFFF 
External Memory 0xF000_0000 0xFFFF_FFFF 256MB 0xF000_0000 0xFFFF_FFFF 
 
• API 
– uint32_t ap_to_scp(uint32_t ap_addr); 
– uint32_t scp_to_ap(uint32_t scp_addr); 
• 头文件路径 
vendor/mediatek/proprietary/tinysys/scp/drivers/common/dma/inc/dma_api.h 
• 返回值 
– 非零值：映射地址 
– 0x0: 没有找到对应的映射 
 请求系统总线和 DRAM 
由于在没有数据传输或系统挂起时，系统总线和 DRAM 会进入睡眠模式，因此必须调用以下 API 以确保 DRAM 可
以被访问。 
 
• 用于管理任务的 API  
void dvfs_enable_DRAM_resource(scp_reserve_mem_id_t dma_id): before DRAM access 
void dvfs_disable_DRAM_resource(scp_reserve_mem_id_t dma_id): after DRAM access 
注：当 26M 时钟被关闭时，唤醒 DRAM 需要 5 毫秒 
 
• 用于管理中断服务程序的 API 
void dvfs_enable_DRAM_resource_from_isr(scp_reserve_mem_id_t dma_id) 
void dvfs_disable_DRAM_resource_from_isr(scp_reserve_mem_id_t dma_id) 
 
•  头文件路径 
vendor/mediatek/proprietary/tinysys/common/drivers/dma/v3/inc/dma.h 
vendor/mediatek/proprietary/tinysys/scp/drivers/RV55_A/mt6881/dvfs/inc/dvfs.h 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 43

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 43 
MT8668 SCP 
User Manual 
Confidential B 
6 调试方法 
6.1 PRINTF_* 使用 
请不要在 SCP 软件中使用 printf，因为它可能会链接到 C 库并引起问题。相反，我们使用 PRINTF_*，如下表所示。
开发人员必须在使用 PRINTF_* 之前包含头文件 <mt_printf.h>。PRINTF_* 的日志级别和使用场景如下表所示。 
表 6-1. PRINTF 使用场景 
PRINTF_* 级别 使用场景 注 
PRINTF_E <0> 错误信息 - 
PRINTF_W <1> 警告信息 使用者级别镜像 
PRINTF_I <2> 提示信息 - 
PRINTF_D <3> 调试级别信息 工程师级别镜像 
6.2 日志记录 
MTK Logger 是一个 APK，它将各种日志记录到存储设备（如 SD 卡）中。启动它并启用 SCP 日志后，可以在以下路
径获取 SCP 日志： 
• Log base path: 
– 系统数据: /data/debuglogger/ 
– 存储路径: /storage/emulated/0/debuglogger/ 
• 日志路径: ${Log base path}/mobilelog/APLog_XXXX_XXXX_XXXXXX/scp_log_XXXX.curf 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 44

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 44 
MT8668 SCP 
User Manual 
Confidential B 
     
图 6-1. MTK Logger 
6.3 串口 
• 输出引脚 
SCP 有两个个专用的 UART。请确保 PC 的 UART 端口连接到引脚名称 URXD1 和 UTXD1，如下表 8-2 所示，并设置软
件编译选项。 
表 6-2. UART 引脚名称 
引脚名称 功能 
URXD1 SCP UART RX 
UTXD1 SCP UART TX 
 
• 软件编译选项 
– 路径：Configure flags  
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/platform.mk 
CFG_UART_SUPPORT = yes  /* 启用 UART，默认 No */ 
CFG_MTK_SCPUART_SUPPORT = yes /*  使用 SCP UART，默认 Yes */ 
 
• UART 终端设置 
– 波特率：921600 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 45

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 45 
MT8668 SCP 
User Manual 
Confidential B 
 
图 6-2. 串口工具设置 
6.4 ADB Logcat 
ADB Logcat 可以直接从 ADB 或 UART 控制台输出 SCP 日志。 
 
• 使用步骤： 
1. 确保 MTK Logger 中的 SCP 日志已禁用。 (如图 6-3 所示) 
2. 进入 shell 并输入命令 echo 1 > /sys/class/misc/scp/scp_mobile_log 
3. 输入命令： while true; do cat /dev/scp;done 日志将直接输出,如 图 6-4 所示。 
 
   
图 6-3. 禁用 mobile 日志 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 46

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 46 
MT8668 SCP 
User Manual 
Confidential B 
 
 
图 6-4. ADB logcat 输出 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 47

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 47 
MT8668 SCP 
User Manual 
Confidential B 
6.5 异常日志分析 
当异常发生时，SCP 会自动打印异常日志。开发人员可以通过 UART 或 mobile 日志获取这些日志信息。 
• FAULT FETCH, FAULT LOAD和 FAULT STORE：由于访问了 MPU 保护地址导致的错误。  
– FAULT FETCH： PC 跳转到错误地址 
▪ 系统寄存器: mepc 将显示错误的目标地址 
– FAULT LOAD， FAULT STORE：访问了受保护的地址 
▪ 系统寄存器 mepc 将显示错误的 PC，mtval 将显示错误的访问地址。 
[70.168](0) exception: CAUSE_FAULT_LOAD 
[70.168](0)  exception pc: 0x00018b2c  
[70.168](0)  fault load address: 0xffff1110 
[70.168](0) Regs dump 
[70.168](0) x0: 0xca0801e4 ra: 0x00018b24 
[70.168](0) sp: 0x00036ec0 gp: 0x00000000 
… 
[70.168](0) t3: 0x00000000 t4: 0x00000011 
[70.168](0) t5: 0x00000000 t6: 0x00000000 
[70.168](0) pc: 0x00001454 mstatus: 0x05015800 
[70.168](0) mepc: 0x00018b2c 
[70.168](0) mcause: 0x00000005 
[70.168](0) mtval: 0xffff1110 
[70.168](0) T Buffer (10) 
[70.168](0) 00 0x0000fdca:0x0002252c 
[70.168](0) 01 0x0002252c:0x0000fdce 
… 
[70.169](0) 28 0x000108c0:0x0002368e 
[70.169](0) 29 0x00023698:0x000108c4 
[70.169](0) 30 0x000108ca:0x00024518 
[70.169](0) 31 0x00024524:0x00018b24 
[70.169](0) Code: 7545 85aa 0513 1105 <4108> 8593 1145 c188 9205 
 
MISALIGNED FETCH， MISALIGNED LOAD，and MISALIGNED STORE: 通常发生在整数指针（4 字节对齐）访问 1 或 2
字节对齐的地址时。 
– MISALIGNED FETCH： 跳转到未对齐的地址 
▪ 系统寄存器：mepc 将显示错误的地址 
– MISALIGNED LOAD, MISALIGNED STORE： 访问未对齐的地址 
▪ 系统寄存器 mepc 将显示错误的 PC，mtval 将显示访问地址 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 48

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 48 
MT8668 SCP 
User Manual 
Confidential B 
由于指令无法解码导致的错误。示例： 
[2.643](0) exception: CAUSE_ILLEGAL_INSTRUCTION 
[2.643](0) Regs dump 
[2.644](0) x0: 0xa5a5a5a5 ra: 0xa5a5a5a5 
[2.644](0) sp: 0xa5a5a5a5 gp: 0xa5a5a5a5 
… 
[2.651](0) t3: 0x00000000 t4: 0x00000000 
[2.652](0) t5: 0x00000000 t6: 0x00000000 
[2.652](0) pc: 0x00001454 mstatus: 0x05015880 
[2.653](0) mepc: 0x00201720 
[2.654](0) mcause: 0x00000005 
[2.654](0) mtval: 0x2ff13748 
[2.655](0) T Buffer (10) 
[2.656](0) 00 0x0000371a:0x00008fd6 
[2.656](0) 01 0x00008fdc:0x0000371e 
… 
[2.661](0) 28 0x0000f2a4:0x00002eec 
[2.662](0) 29 0x00002eec:0x00006d52 
[2.662](0) 30 0x00006d5c:0x00002ef0 
[2.663](0) 31 0x0000f2a4:0x00003728 
[2.664](0) Code: d194 5133 4521 873f <3748> 2ff1 a5a5 a5a5 a5a5 
 
 
 Trace Buffer 
Trace buffer 日志可以帮助我们分析 CPU 执行的函数调用记录。日志显示了函数调用地址和目标地址。共有 32 个条
目，可以从异常日志的底部获取。  
示例： 
该地址可以使用诸如 lldb 或 addr2line 等工具进行转换 
[2.655](0) T Buffer (10) 
[2.656](0) 00 0x0000371a:0x00008fd6 
[2.656](0) 01 0x00008fdc:0x0000371e 
… 
[2.661](0) 28 0x0000f2a4:0x00002eec 
[2.662](0) 29 0x00002eec:0x00006d52 
[2.662](0) 30 0x00006d5c:0x00002ef0 
[2.663](0) 31 0x0000f2a4:0x00003728 
 
在执行 coredump_cmd.sh 脚本处理 SCP_COREDUMP 文件后，会生成一个可读的文本文件 analysis.txt。该文件列出
了函数调用地址、函数名称和源文件路径的组合。  
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 49

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 49 
MT8668 SCP 
User Manual 
Confidential B 
 
6.6 核心转储 
如果 AP 检测到 SCP 没有响应 IPI 或发生 SCP 看门狗事件，核心转储流程将自动启动。核心转储是 SCP 内存和处理
器寄存器（如程序计数器、堆栈指针、返回地址等）的快照，并尽可能多地保存系统信息（如系统寄存器、缓存
内容）。这些信息使得在故障发生前恢复系统状态成为可能。  
默认情况下，LLDB 被用于支持核心转储调试。有关 LLDB 的详细信息，请参考 LLDB 官网： https://lldb.llvm.org/. 
• LLDB 路径 
– LLDB 可以在alps prebuilts 文件夹中找到, 路径为 prebuilts/clang/md32rv/linux-x86/lldb_v4. 
• 获取核心转储 
– SCP 核心转储将命名为 SYS_SCP_DUMP，位于 SCP EE DB（例如，ex.db.00.EE.dbg）中。如果未找到，请检查 EE 
DB，确认 __exp_main.txt 中的异常类型应为 scp。 
• 开始调试 
• 输入以下命令，初始日志如下所示 
$ prebuilts/clang/md32rv/linux-x86/lldb_v4/coredump_cmd.sh mt6881 tinysys-scp-
RV55_A.elf SCP_COREDUMP 0 
 
(lldb) command script import 
/proj/mtk11261/misc/coredump/scp_coredump_cmdline/bin/coredump/freertos.py                
(lldb) freertos                 
                                                                                        
FreeRTOS Awareness is working ...                                                                                                                                                                                    
 
CPU 0 -- OS Tick: 70125 
CPU 1 -- OS Tick: 0 
OS is in normal state (neither in Critical Section nor in HW ISR) 
TASK-0: IDLE@cpu0 ( TCB: 0x00042c60, State: Running, TCB Number: 8, Priority: 0) 
 Stack (unit in word) size=1024, current used=124, max used=197 
   * frame #0: 0x000231c6 tinysys-scp-RV55_A.elf`mrv_coredump(epc=-61168, regs=0xffff1000) 
at exception.c:1055 
     frame #1: 0x00003eb0 tinysys-scp-RV55_A.elf`atomicCmpXchg32bits(word=<unavailable>, 
prevVal=238376, newVal=<unavailable>) at atomic.c:181 
… 
Flight Recorder is working ...                                           
No Flight Recorder Support             
(lldb) 
注意： 
LLDB 版本必须与 SCP 核心兼容 
RV55 : lldb_v4 
RV33 : lldb 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 50

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 50 
MT8668 SCP 
User Manual 
Confidential B 
 
如果 LLDB 工具意外启动： 
1. 请确认 prebuilts/clang/md32rv/linux-x86/lldb_v4 文件结构未被修改。 
2. 请检查相关日志文件 debug_prosim.log 和 debug_ocd.log。如果未找到 libprofile.so.x.x.x 库，请在 
coredump_cmd.sh 中的 PROSIM 启动命令之前添加以下命令。 
 
3. 使用 coredump_cmd.sh 时会启动三个工具（LLDB、Openocd、PROSIM），工具之间通过 TCP/IP 协议进行通
信。如果远程使用 LLDB 相关工具，请确认 TCP/IP 连接端口未被防火墙阻止。 
 
  
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$MRV_PDK_PROSIM_HOME 
 
#add above this command 
$PROSIM_EXE $PROSIM_OPT   
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 51

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 51 
MT8668 SCP 
User Manual 
Confidential B 
 LLDB 基本命令 
对于高级开发人员或熟悉 GDB 的开发人员， 请参考以 command map 以了解详细信息。 
• 通过命令 "bt" 来获取函数调用的回溯信息 
 (lldb) bt 
* thread #1, name = 'Hart0', stop reason = instruction step into 
  * frame #0: 0x000231c6 tinysys-scp-RV55_A.elf`mrv_coredump(epc=-61168, regs=0xffff1000) 
at exception.c:1055 
    frame #1: 0x00003eb0 tinysys-scp-RV55_A.elf`atomicCmpXchg32bits(word=<unavailable>, 
prevVal=238376, newVal=<unavailable>) at atomic.c:181 
    frame #2: 0x0000befa tinysys-scp-RV55_A.elf`osSetCurrentTid [inlined] 
osSetCurrentTask(task=0x0003a328) at seos.c:153 
    frame #3: 0x0000bee6 tinysys-scp-RV55_A.elf`osSetCurrentTid(tid=<unavailable>) at 
seos.c:212 
    frame #4: 0x0000d872 tinysys-scp-RV55_A.elf`timFireAsNeededAndUpdateAlarms at 
timer.c:145 
    frame #5: 0x0000d608 tinysys-scp-RV55_A.elf`timTimerSetEx(length=<unavailable>, 
jitterPpm=<unavailable>, driftPpm=<unavailable>, info=<unavailable>, data=<unavailable>, 
oneShot=<unavailable>) at timer.c:179 
    frame #6: 0x0000cf4e tinysys-scp-RV55_A.elf`osDefer(callback=<unavailable>, 
cookie=<unavailable>, urgent=<unavailable>) at seos.c:1184 
    frame #7: 0x000467f4 tinysys-scp-RV55_A.elf`ucHeap + 43796 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 52

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 52 
MT8668 SCP 
User Manual 
Confidential B 
 
• 通过命令 "freertos" 来获取操作系统任务的信息: freertos 
(lldb) freertos 
Find 18 tasks 
CPU 0 -- OS Tick: 70125 
CPU 1 -- OS Tick: 0 
Coredump cpu: 0 
OS is in normal state (neither in Critical Section nor in HW ISR) 
 
 
TASK-0: IDLE@cpu0 ( TCB: 0x00042c60, State: Running, TCB Number: 8, Priority: 0) 
 Stack (unit in word) size=1024, current used=124, max used=197 
   * frame #0: 0x000231c6 tinysys-scp-RV55_A.elf`mrv_coredump(epc=-61168, regs=0xffff1000) 
at exception.c:1055 
     frame #1: 0x00003eb0 tinysys-scp-RV55_A.elf`atomicCmpXchg32bits(word=<unavailable>, 
prevVal=238376, newVal=<unavailable>) at atomic.c:181 
     frame #2: 0x0000befa tinysys-scp-RV55_A.elf`osSetCurrentTid [inlined] 
osSetCurrentTask(task=0x0003a328) at seos.c:153 
     frame #3: 0x0000bee6 tinysys-scp-RV55_A.elf`osSetCurrentTid(tid=<unavailable>) at 
seos.c:212 
     frame #4: 0x0000d872 tinysys-scp-RV55_A.elf`timFireAsNeededAndUpdateAlarms at 
timer.c:145 
     frame #5: 0x0000d608 tinysys-scp-RV55_A.elf`timTimerSetEx(length=<unavailable>, 
jitterPpm=<unavailable>, driftPpm=<unavailable>, info=<unavailable>, data=<unavailable>, 
oneShot=<unavailable>) at timer.c:179 
     frame #6: 0x0000cf4e tinysys-scp-RV55_A.elf`osDefer(callback=<unavailable>, 
cookie=<unavailable>, urgent=<unavailable>) at seos.c:1184 
     frame #7: 0x000467f4 tinysys-scp-RV55_A.elf`ucHeap + 43796 
 
… 
 
TASK-17: CHRE@cpu0 ( TCB: 0x0003f910, State: Suspended, TCB Number: 4, Priority: 4) 
 Stack (unit in word) size=1024, current used=132, max used=364 
   * frame #0: 0x00013bc4 tinysys-scp-RV55_A.elf`vTaskExitCritical at tasks_smp.c:4287 
     frame #1: 0x00007aee tinysys-scp-RV55_A.elf`evtQueueDequeue(q=<unavailable>, 
evtTypeP=<unavailable>, evtDataP=<unavailable>, evtFreeDataP=<unavailable>, 
sleepIfNone=<unavailable>) at eventQ.c:171 
     frame #2: 0x0000cbb8 tinysys-scp-RV55_A.elf`osMainDequeueLoop at seos.c:1052 
     frame #3: 0x0000cdfc tinysys-scp-RV55_A.elf`osMain at seos.c:1093 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 53

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 53 
MT8668 SCP 
User Manual 
Confidential B 
• 通过命令 "p $(variable name)" 来打印变量和地址 
(lldb) p mTask 
(alsPsTask) $0 = { 
  id = 259 
  handle = ([0] = 16973827, [1] = 16973828, [2] = 16973829) 
  prevRtcTime = 0 
  mDataSlab = 0x0003c340 
  dataEvt = 0x00000000 
  alsLastSample = 0 
  psLastSample = 1 
  bcRecv = { 
    [0] = { 
      list = { 
        prev = 0x00048290 
        next = 0x002109e0 
      } 
      sensor_type = '\f' 
      receive_event = 0x00206a34 (tinysys-scp-RV33_A.elf`alsPsReceiveEvent at alsps.c:908) 
} 
 
• 通过命令 "x/FMT address" 来转储内存 
(lldb) x/32xw 0x1ef08 
0x0001ef08: 0x003a9593 0x093d3533 0x10063667 0x00bb0ab3 
0x0001ef18: 0x01340633 0x016ab5b3 0x00b60c33 0x008c0463 
0x0001ef28: 0x008c35b3 0x01248633 0x0433955e 0x35b300b6 
0x0001ef38: 0x36330096 0x952e00c4 0x00c50bb3 0xd5334d32 
0x0001ef48: 0xc11d094b 0x001ad593 0x001af513 0xfe1c05b3 
0x0001ef58: 0x001c5c13 0xfe140c33 0x84338005 0xdb93fe1b 
0x0001ef68: 0xeab3001b 0x088500a5 0x652144a2 0x09f4a4b3 
0x0001ef78: 0xcf63157d 0x053700a8 0x24237fff 0x8d451001 
 
• 通过命令 "register read $REG" 来读取 CPU 寄存器的值 
(lldb) register read pc 
      pc = 0x00000038  tinysys-scp-RV33_A.elf`__divtf3 + 54 at divtf3.c 
(lldb) register read 
general: 
        x0 = 0x00000000  tinysys-scp-RV33_A.elf`vPortInitialiseBlocks at heap_2.c:239 
        x1 = 0x0000a32c  tinysys-scp-RV33_A.elf`stackDump + 614 at scp_it.c:128 
... 
       x27 = 0x00000000  tinysys-scp-RV33_A.elf`vPortInitialiseBlocks at heap_2.c:239 
       x28 = 0x0000006d  tinysys-scp-RV33_A.elf`__divtf3 + 107 at divtf3.c:30 
(lldb) register read mepc 
    mepc = 0x0000a32c  tinysys-scp-RV33_A.elf`stackDump + 614 at scp_it.c:128 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 54

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 54 
MT8668 SCP 
User Manual 
Confidential B 
6.7 性能评估和运行记录 
PBFR 是一种性能分析工具，可以监控 CPU 使用情况。它可以分为两个部分： 
• 性能评估 
– 包含每个任务的负载、缓存未命中、停顿和整个系统负载的信息。  
• 运行记录 
– 可以在一段时间内记录 CPU trace。 
 性能评估 
这里将介绍如何使用性能预算来监控任务负载。 
 
• 启用性能评估: 
– 设置配置和定义以启用性能评估。 
▪ 路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/inc/FreeRTOSConfig.h 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/platform.mk 
 
表 6-3. 编译器选项和定义 
# 编译器选项和定义 描述 
1 CFG_PBFR_SUPPORT 
PBFR 主功能控制选项  
Enable: Yes 
Disable: No 
2 #define PBFR_SUPPORT_POLLING 支持通过轮询保存任务最大负载 
3 #define PBFR_SUPPORT_POLLING_MS 10 每 10ms 轮询一次任务活动 
4 #define PBFR_SUPPORT_CACHE_COUNT 支持缓存未命中率 
5 #define PBFR_SUPPORT_IOSTALL 支持 IO 停顿率 
 
• 使用方法 1： 
– 每 10 秒报告一次性能预算  
– CFG_MONITORTASK_ALWAYS_RUN = yes 
• 使用方法 2： 
– 命令：（开始/报告/结束）$ echo 666 0 1 > sys/class/misc/scp/scpctl 
– 第一次输入命令开始记录性能预算信息，在一段时间后，第二次输入命令报告负载信息，第三次输入命令
停止记录。 
– 对于一些定制化的请求，可以在特定位置添加这三个 API 以监控部分任务。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 55

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 55 
MT8668 SCP 
User Manual 
Confidential B 
▪ pbfr_start_loadinfo(0)：开始记录负载信息 
▪ pbfr_report_loadinfo(0)：报告负载信息 
▪ pbfr_stop_loadinfo(0)：停止记录负载信息 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 56

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 56 
MT8668 SCP 
User Manual 
Confidential B 
• 日志解释： 
图 6-5. 性能评估日志示例 
 运行记录 
运行记录是一种调试工具，可以在系统崩溃时记录最后的事件。这里将介绍如何使用飞行记录来监控  CPU 跟踪。 
 
• 启用运行记录： 
– 设置配置并打开定义以获取运行记录。platform.mk 中的配置用于启用运行记录，而 FreeRTOSConfig.h 中的定
义表示可以记录的事件。 
 
• 路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/platform.mk 
 
表 6-4. 编译器选项 
# 编译器选项 解释 
 CFG_PBFR_SUPPORT 
PBFR 主功能控制选项  
Enable: Yes 
Disable: No 
 
• 路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/inc/FreeRTOSConfig.h 
 
表 6-5. Flight Record 定义 
# 飞行记录名称 解释 
1 #define PBFR_SUPPORT_FLIGHT_REC 支持飞行记录 
Task Loading => total_us: 6564492 
[TMon]T01 0: 00.01% max: 06.92% (0)(I$miss=0/0 D$miss=0/0) 
[CHRE]T02 2: 00.45% max: 01.34% (9)(I$miss=0/0 D$miss=0/0) 
[IDLE]T03 0: 15.38% max: 99.58% (2032)(I$miss=0/0 
D$miss=0/0) 
[Tmr S]T04 2: 00.08% max: 01.08% (1)(I$miss=0/0 
D$miss=0/0) 
CPU Loading: 84.62% max: 91.64%(3424) 
CPU 最大负载线程在 60 秒内的最大负载 
CPU 最大负载 
任务负载，最大负载和缓存未命中率 
rraratecount/access count 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 57

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 57 
MT8668 SCP 
User Manual 
Confidential B 
# 飞行记录名称 解释 
2 #define PBFR_MAX_REC_EVENTS 32 支持 32 个跟踪事件（最大：255） 
3 #define PBFR_SUPPORT_REC_TASK 支持任务跟踪事件 
4 #define PBFR_SUPPORT_REC_QUEUE 支持队列跟踪事件 
5 #define PBFR_SUPPORT_REC_SWTIMER 支持软件定时器跟踪事件 
6 #define PBFR_SUPPORT_REC_INT 支持关键部分跟踪事件 
7 #define 
configTRACE_INT_MASK_TIME_BOUD_NS 仅在持续时间超过时间界限时记录关键部分跟踪事件 
8 #define PBFR_SUPPORT_REC_ISR 支持中断服务例程跟踪事件 
9 #define PBFR_SUPPORT_REC_OSTICK 支持操作系统时钟跟踪事件 
 
• 如果构建因内存大小不足而失败，请在 Setting.ini 中更改设置。 
日志：  SCP: {XXX}(size_A>size_B) is out of memory limitation 
将 XXX 的大小（size_B）调大至大于 size_APath 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/Setting.ini 
 
• 使用方法: 
– 将 tinysys-scp-RV55_A.elf 和 SCP coredump 复制到分析文件夹中。 
▪ 分析文件夹: alps/prebuilts/clang/md32rv/linux-x86/lldb_v4 
– 使用核心转储分析工具解析数据以获取 SCP_debug.txt 和 flrec.json. 
– 如果成功，将显示以下日志。  
 
(lldb)command script import 
/proj/mtk11261/misc/coredump/scp_coredump_cmdline/bin/coredump/flrec.py 
(lldb) flrec 
Flight Recorder is working ... 
Flight Record output done. 
(lldb) command script import 
/proj/mtk11261/misc/coredump/scp_coredump_cmdline/bin/coredump/fflrec.py 
(lldb) fflrec 
Flight Recorder is working ... 
('xTickCount:', 82801L) 
len=1000 status=00000003 RP=123 WP=123 last=82809147582 
virtual ns = 82320378580 
Flight Record output done. 
(lldb) 
 
在 chrome://tracing/ 中加载 flrec.json 以获取 GUI 结果。 
 
• 日志解释： 
– 控制台模式： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 58

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 58 
MT8668 SCP 
User Manual 
Confidential B 
▪ 控制台模式将在 SCP_debug.txt 中显示，它显示系统崩溃前记录的事件，并按类型分类显示事件。
Record[X] 表示这是倒数第 X 个事件。 
 
图 6-6. 飞行记录控制台模式示例 
  
[Task events(num=27)] 
Record[7]32.182486230: Switch to task14:DEPUTY from a suspended task 
Record[18]32.201575461: task13:PRINCIPAL wakeup 
Record[20]32.201580076: Switch to task13:PRINCIPAL from a running task 
Record[47]32.201730538: task14:DEPUTY wakeup 
… 
[Queue events:(num=64)] 
Record[0]32.182447769: task13:PRINCIPAL Lock => Mutex25 (amount=0) 
Record[4]32.182466230: task13:PRINCIPAL UnLock => Mutex25 (amount=1) 
Record[22]32.201592384: task13:PRINCIPAL Lock => Mutex25 (amount=0) 
… 
[Interrupt mask from task (critical section) or ISR] 
Record[1] 32.182449922 :  Task critical section time 281.6 us > 100 us 
Record[2] 32.182453076 :  Task critical section time 124 us > 100 us 
Record[3] 32.182463845 :  Task critical section time 124 us > 100 us 
事件的时间戳（微秒） 
显示持续时间超过时间限制的关键部分事件  
调度器从先前状态切换到任务 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 59

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 59 
MT8668 SCP 
User Manual 
Confidential B 
• GUI 模式： 
– 加载步骤 
1. GUI 网站: chrome://tracing/ 
2. 加载 json 文件: flrec.json (分析文件夹中创建) 
– 使用说明： 
▪ 使用键盘 W/S 缩放，A/D 左右移动，或切换按钮以更改鼠标模式。 
 
图 6-7. 操作方法 
  
 
选择事件 
移动界面 
放大/缩小 
选择时间范围 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 60

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 60 
MT8668 SCP 
User Manual 
Confidential B 
– 总览：  
▪ GUI 显示最后的事件流，记录六种类型的事件：任务、队列事件、软件定时器、关键部分、 ISR 事件和
操作系统时钟。 
图 6-8. 运行记录的 GUI 显示模式 
 
▪ 底部的消息显示事件的开始时间和持续时间。 
  
图 6-9. 详细信息显示 
  
事件名称 (任务、队列、临界区…) 
 记录[0]的开始时间 
真实时间 = 记录[0] + 开始时间 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 61

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 61 
MT8668 SCP 
User Manual 
Confidential B 
– 任务 
▪ 任务事件显示任务的唤醒时间和执行时间。 
 
图 6-10. 任务被唤醒的事件 
 
– 队列 
▪ 队列事件显示在执行事件的任务下方，点击事件可以在信息栏中查看队列类型 。 
 
 
图 6-11. 队列事件的示例 
 
 
 
 
图 6-12. 队列事件的详细信息 
 
– 软件定时器 
▪ 软件定时器显示回调函数的执行时间。 
 
图 6-13. 软件定时器示例 
 
– 临界区 
▪ 通过对应的临界区向上，可以找到在临界区中运行的任务。  
唤醒事件 
“PRINCIPAL”任务的队列事件 
点击以获取队列事件的类型 
软件定时器的回调函数 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 62

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 62 
MT8668 SCP 
User Manual 
Confidential B 
 
 
 
图 6-14. 临界区示例 
 
– 中断服务程序（ISR） 
▪ ISR 显示中断服务例程的执行时间和 ISR 编号。 
 
图 6-15. 中断服务程序示例 
 
– OS 时钟节拍 
▪ OS 时钟显示操作系统计时器滴答的时间。 
 
 
 
 
图 6-16. OS 时钟节拍示例 
 
  
当任务 “PRINCIPAL” 正在运行时的临界区 
ISR 事件 
OS 时钟节拍事件 
ISR 数量 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 63

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 63 
MT8668 SCP 
User Manual 
Confidential B 
6.8 低功耗调试日志 
当 AP 被 SCP 频繁唤醒出现问题时，可以利用 AP 和 SCP 日志中打印的资源信息来进一步调试该问题。 
 Linux 内核侧 
在 AP 挂起过程中，如果挂起时的功耗过高，可以通过手机日志判断问题是否由 SCP 引起，以及 SCP 的哪个部分导
致了该问题。 
 
• SPM 驱动日志 
该日志显示在 AP 挂起期间，26M 关闭率为 0，且用户为“scp”。 
[   81.922173][T1700000] swapper/7: 
[name:mtk_lpm_plat_v1&][name:spm&][lpm_suspend_s2idle_prompt:124] - suspend enter 
[   81.922173][T1700000] swapper/7: [name:mtk_lpm_dbg_mt6985&][name:spm&][SPM] suspend 
wake up by  R12_EINT_EVENT_B, timer_out = 138861, r13 = 0x80041ac0, debug_flag = 
0x11200000 0x3, r12 = 0x40, r12_ext = 0x0, raw_sta = 0x0 0x0 0x0, idle_sta = 0x0, req_sta 
=  0x0 0x0 0x0 0x80008000 | 0x7 0xc030000 0xc0c 0x0 | 0x6f03f400 0x0 0xe00, cg_check_sta 
=0x8, isr = 0x0, rt_req_sta0 = 0x0 rt_req_sta1 = 0xa80adf34 rt_req_sta2 = 0x0 rt_req_sta3 
= 0x74 dram_sw_con_3 = 0x0, raw_ext_sta = 0x1408a955, wake_misc = 0x180030, pcm_flag = 
0x3680060 0x180 0x3600060 0x180, req = 0x18f60000, clk_settle = 0x60fe, debug_spare_5 = 
0x5c, debug_spare_6 = 0x0, wlk_cntcv_l = 0x665dc570, wlk_cntcv_h = 0x0, 26M_off_pct = 0, 
vcore_off_pct = 0 
[   81.922173][T1700000] swapper/7: [name:mtk_lpm_dbg_mt6985&][name:spm&][SPM] suspend 
warning:(OneShot) System LPM is blocked by scp 
[   81.922173][T1700000] swapper/7: [name:mtk_lpm_dbg_mt6985&][name:spm&][SPM] HWCG sta 
:[0] 0x0 0x0 0x0 |[1] 0x0 0x0 0x0 |[2] 0x0 0x300000 0x0 |[3] 0x0 0x0 0x0 |[4] 0x0 0x0 0x0 
. 
[   81.922173][T1700000] swapper/7: [name:mtk_lpm_dbg_mt6985&][name:spm&][SPM] PERI_CG sta 
:[0] 0x0 |[1] 0x0 |[2] 0x0 |[3] 0x0 |[4] 0x0 . 
[   81.922173][T1700000] swapper/7: [name:mtk_lpm_dbg_mt6985&][name:spm&][SPM] Suspended 
for 4.237 seconds 
 
• SCP 驱动日志 
该日志显示了 26M 的使用时间及其使用者（用户 8）；同时也显示了 SCP 唤醒锁的持续时间及其使用者
（lock test）。 
 
[   82.041983][T1604826] binder:573_4: [scp_dvfs]: [name:scp&][SCP] 
[mt_scp_dump_sleep_count:2238] - scp_sleep_cnt_0 = 0, scp_sleep_cnt_1 = 89 
[   82.044327][T1604826] binder:573_4: [scp_dvfs]: [name:scp&][SCP] 
[mt_scp_stop_res_prof:2168] [0] suspend time: 4560ms 
[   82.044327][T1604826] binder:573_4: [scp_dvfs]: [name:scp&][SCP] 
[mt_scp_stop_res_prof:2169] [0] [wakelock] total: 4560ms, lock test: 4560ms 
[   82.045965][T1604826] binder:573_4: [scp_dvfs]: [name:scp&][SCP] 
[mt_scp_stop_res_prof:2174] [0] [26M] total: 4560ms, user 8: 4560ms 
[   82.049931][T1604826] binder:573_4: [name:vcp&][VCP] PM_POST_SUSPEND entered 0 1 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 64

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 64 
MT8668 SCP 
User Manual 
Confidential B 
[   82.051550][T1704826] binder:573_4: timesync [name:sensorhub&]host resume boottime 
107622024076 
[   82.052649][T1704826] binder:573_4: timesync [name:sensorhub&]boot 107623122768 sched 
82052648958 android 04-12 19:27:31.155012 
 
 SCP 侧 
• SCP 端日志显示了每个资源的使用时间以及使用者。 
[96.161](0)[0] PRINCIPAL.timesync scp 96160477767 host 107623122768 offset 11465479154 
tick 96161 sched 82052648958 android 04-12 19:27:31.155012 
[96.087](0)[0] suspend time: 4560ms 
[96.087](0)[0] res    total(ms)    uid    time(ms) 
[96.093](0)[0] infra    4560    8    4560     
[96.094](0)[0] apsrc    4560    8    4560     
[96.098](0)[0] vcore    4560    8    4560     
[96.167](0)[0] pmic     4560    8    4560     
[96.169](0)[0] 26m      4560    8    4560     
[96.169](0)[0] vrf18    4560    8    4560     
[96.171](0)[0] emi      4560    8    4560     
[96.172](0)[0] aov      0       0    0 
[96.087](0)[0] res    total(ms)    lock    time(ms) 
[96.090](0)[0] wlock    4560        test    4560     
6.9 地址检测器 
 ASAN 使用方法 
地址检测器（Address Sanitizer, ASAN），是一种地址健全性检查工具，用于发现对堆、栈和全局对象的越界访问，
以及使用已释放内存的错误。 
• 启用 ASAN 
– 设置配置并打开定义以启用 ASAN。 
– 路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/$Project/project.mk 
vendor/mediatek/proprietary/tinysys/scp/build/config.mk 
 
表 6-6. 编译器选择和定义 
# 编译器选项和定义 描述 
1 CFG_ASAN_SUPPORT Enable: yes 
Disable: no 
2 -mllvm -asan-stack  
Check local variable 
Enable: 1 
Disable: 0 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 65

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 65 
MT8668 SCP 
User Manual 
Confidential B 
# 编译器选项和定义 描述 
3 -mllvm -asan-global  
Check global variable 
Enable: 1 
Disable: 0 
4 -mllvm -asan-memintrin 
Check memset/memecpy 
Enable: 1 
Disable: 0 
 
• 异常类型 
表 6-7. 异常类型表 
# 异常类型 描述 
1 ASAN_STACK_LEFT 局部变量下溢 
2 ASAN_STACK_MID 局部变量下溢/上溢 
3 ASAN_STACK_RIGHT 局部变量上溢 
4 ASAN_STACK_PARTIAL 局部变量部分上溢 
5 ASAN_GLOBAL_REDZONE 全局变量上溢 
6 ASAN_HEAP_USE_AFTER_FREE 使用已释放的堆内存 
 
– 问题处理：栈下溢 
 
 
– 问题处理：全局变量上溢 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 66

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 66 
MT8668 SCP 
User Manual 
Confidential B 
 
 
– 问题处理：使用已释放的堆内存 
 
 
 如何将代码移动到 DRAM 
启用 ASAN 后，代码大小将增加约 1.7 倍。因此，SRAM 大小可能不足。用户可以将某些功能或函数移动到 DRAM 
以减少 SRAM 的使用。 
 
• 使用属性 
要在 DRAM 区域指定函数/变量，我们使用在 cache_internal 中定义的缓存宏。请注意，DRAM_REGION_VARIABLE 仅
适用于全局/静态变量，因为局部变量使用栈作为存储。默认情况下，出于性能考虑，我们将栈保留在 SRAM 中。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 67

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 67 
MT8668 SCP 
User Manual 
Confidential B 
#define DRAM_REGION_VARIABLE __attribute__ ((section (".dram_region_variable"))) 
#define DRAM_REGION_FUNCTION __attribute__ ((section (".dram_region_func"))) 
 
• 使用链接脚本 
链接脚本描述了对象（即各个部分）在输出二进制文件中的映射方式。它提供了一种将对象定位到 DRAM 区域的
简便方法。以下是一个模板头文件和链接脚本，用于将 C 文件中的所有部分定位到 DRAM 区域。 
 
1. 首先，您需要检查 cache_ld.h 文件（路径：@project/RV55_A/$platform/$project），在这里您可以看到许
多预定义的宏，格式为 CACHE_***_TEXT 和 CACHE_***_DATA。您可以添加一个新的宏，并自行命名。宏名后
的字符串是期望的 C 文件路径。例如：（“?*” 是通配符比较） 
#define CACHE_BARO_TEXT \ 
    ?*/middleware/contexthub/MEMS_Driver/barometer/?*.o(.text*) \ 
#define CACHE_BARO_DATA \ 
   ?*/middleware/contexthub/MEMS_Driver/barometer/?*.o(.rodata* .data* .bss*) \ 
 
2. 您需要检查 link.ld 文件，它应该包含 CACHE_***_TEXT 和 CACHE_***_DATA 的响应 
您可以添加 CACHE_BARO_TEXT 和 CACHE_BARO_DATA 后的字符串。例如： 
dram_region __dram_start : AT(__dram_start) { 
#ifdef CACHE_BARO_TEXT 
CACHE_BARO_TEXT 
#endif 
*(.dram_region_func) 
*(.dram_region_ro) 
 
#ifdef CACHE_BARO_DATA 
CACHE_BARO_DATA 
#endif 
} 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 68

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 68 
MT8668 SCP 
User Manual 
Confidential B 
7 常见问题及解决方法 
7.1 Malloc 失败 
由于 SRAM 大小有限且较小，malloc 池大小是根据功能量身定制的，当引入新功能而不扩大池大小时， malloc 失败 
是常见的。 
 
注意： 
当发生 malloc 失败时，会显示一条失败消息： 
“ 
[2.232](0) malloc fail  
[2.232](0) [ASSERT] task: CHRE 
” 
此消息显示哪个任务 malloc 失败，随后会跟随核心转储日志。 
 
• 如何解决 
1. 修改scp/project/RV55_A/mt6881/platform/platform.mk, 扩大堆大小，例如 80*1024  
ifeq ($(CFG_CHRE_SUPPORT),yes) 
$(eval TOTAL_HEAP_SIZE=$(shell echo $$(($(TOTAL_HEAP_SIZE) + (80 * 1024))))) 
  change 40 
to 80 
endif 
 
2. 修改 scp/drivers/common/scpctl/scp_scpctl.c, 强制启用任务监控。 
Void scpctl_init(void) 
{ 
… 
 else {  /* monitor task is in suspened state */ 
  scpctl.stat = SCPCTL_STAT_INACTIVE; 
  scpctl.op = SCPCTL_OP_INACTIVE; 
  //vTaskSuspend(xMonitorTask[id]); about line: 244, mark it 
 } 
… 
} 
 
3. 检查剩余堆大小并计算所需堆大小。 
[210.009](0) Heap:free/total:40946/108544 
 
4. 调整堆大小, 剩余堆大小为 40946 字节，40946/1024 = 39.98KB，最小堆大小为 41KB，设置为 43 或 44KB 更
安全。请记得在问题修复后恢复 scp/drivers/common/scpctl/scp_scpctl.c 的更改。 
Ifeq ($(CFG_CHRE_SUPPORT),yes) 
$(eval TOTAL_HEAP_SIZE=$(shell echo $$(($(TOTAL_HEAP_SIZE) + (43 * 1024)))))  
endif 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 69

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 69 
MT8668 SCP 
User Manual 
Confidential B 
7.2 非对齐访问 
SCP MDSP-RV55 理器没有硬件来处理未对齐访问，实施是通过软件完成的。当发生未对齐访问时，处理器将引发异
常并在处理程序中进行软件解决。因此，性能成本显著。 
 
注意： 
当发生未对齐访问时，会显示一条警告消息： 
 
“Warning: MISALIGNED LOAD, pc:0x00001234, addr:0x00042232” 
 
此消息显示有问题的 PC 和处理器要访问的地址。当未对齐访问持续发生时，系统可能忙于打印此消息，并可能导致超时断言 
 
• 示例及解决方法 
大多数未对齐访问是由于结构体应用了 packed 限定符。这可以通过移除它来避免。  
– 示例: 
struct pack_struct { 
    unit32_t size; 
    uint32_t crc; 
    uint8_t type; 
} __attribute__((packed)); 
 
当声明一个结构体数组时，例如 pack_struct st_array[10]，访问结构体成员将是未对齐的。另一种情况是使用整数指
针访问字符数组。这可以通过添加 __attribute__ ((aligned (4))) 来避免。编译器不保证 &char_array[0] 是 4 字节对齐的。 
– 示例: 
uint8_t char_array[64]; 
test_value = *(uint32_t *)(&char_array[0]) 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 70

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 70 
MT8668 SCP 
User Manual 
Confidential B 
7.3 代码大小限制 
mt6881 总 SRAM 大小为 1.25MB，实际的 SCP SRAM 大小可以通过检查符号 _end 来确定。 
剩余的 SRAM 大小： 
mt6881: 0x300000 - _end 
 
在 mt6881 中, 我们可以在 project/RV55_A/mt6881/platform/link.ld.c 文件中将 SRAM 区域长度设置为 1.25MB 
示例： sram : ORIGIN = 0x00000000, LENGTH = 0x00200000. 
当大小超过 1.25MB 限制时，这将导致构建失败。 
 
代码大小检查工具将在每次构建时运行并输出详细信息。检查 图 7-1 ，垂直是项目名称，水平是每个项目的代码大
小。例如，CHRE 的总大小为 62985（总和）字节，其中 .text 部分占总大小的 35598 字节。 
                                       . = ALIGN ( ...sync   .text       Sum 
       C-lib                         0 ...           0         0 
        CHRE         0 ...                        35598    62985 
         DSP         0 ...           0         0 
        DVFS         0 ...        7574      8606 
        Heap         0 ...         334     82275 
  Peripheral         0 ...       18064     26981 
    Platform       256 ...       66300    313481 
        RTOS         0 ...       13776     14536 
      Sensor         0 ...           0         0 
         VOW         0 ...           0         0 
图 7-1. 内存工具报告 
 
 代码大小检查工具的使用 
• 工具 memoryReport.py 是一个脚本，用于在构建时限制代码大小。如果代码大小超过您的设置，它将导致构建
错误。 
– 路径 
vendor/mediatek/proprietary/tinysys/common/tools/memoryReport.py 
– 设置配置文件路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/Setting.ini 
 
– 配置文件格式（setting.ini） 
[TinySys-SCP] 
$File_Name: $Main_feature: $Sub_feature 
[SCP-MT6985] 
$Main_feature : Max_code_size 
$Sub_feature : Max_code_size 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 71

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 71 
MT8668 SCP 
User Manual 
Confidential B 
--------------------------------------------------------------- 
* File_name: Full file path or Partial file path (Ex:middleware/contexthub/perf) 
* Main feature, (Ex: Sensor, Audio), the main feature that this file belongs to 
* Sub feature, (Ex: gyro, pedometer), the sub feature that this file belongs to 
* Main_feature/Sub_feature (after SCP-MT6985): 
    - Main or Sub feature maximum size limit 
  
– 内存检查失败 
▪ 参考示例： 
SCP: I2C(3958>110) is out of memory limitation 
SCP: SPI(6316>1100) is out of memory limitation 
make: *** [tinysys_out/RV55_A/scp/tinysys-scp-RV55_A.elf] Error 13 
 
7.4 Scp_Region_Info 架构 
struct scp_region_info_st 是一个指向 SCP SRAM 中固定地址的指针，用于在 IPI 准备好之前从引导加载程序向 SCP 传递
参数。如果添加了新的成员，记得同步引导加载程序 (lk2), 内核(kernel-6.12) 和 SCP 仓库代码。如果结构在仓库之
间不同步，SCP 可能会启动失败。 
• LK 头文件路径：  
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/mediatek/common/scp/scp_plat_pr
iv.h 
• Kernel 头文件路径： 
kernel/kernel_device_modules-6.12/drivers/misc/mediatek/scp/rv/scp_helper.h 
• SCP 头文件路径： 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/inc/main.h 
• SCP 头文件路径： 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/boot55.S 
 
scp_region_info 也在 boot55.S 中定义。 
scp_region_info: 
.long 0x00000000 /* 0x04 ap_loader_start */ 
.long 0x00000000 /* 0x08 ap_loader_size */ 
... 
.long 0x00100000 /* 0x34 regdump size */ 
.long 0x00000000 /* 0x38 param start address */ 
.long 0x00000000 /* 0x3c ap_params_start  */ 
.long 0x12345678 /* 0x40 a test ID */ 
 
例如，如果在结构 scp_region_info 中添加了一个名为 test ID 的新成员，必须在 boot55.S 中添加默认值。 
在 SCP 端访问 scp_region_info_st 时，必须将其分配给 NULLPTR_BASE，例如： 
void scpctl_init(void)                                                                      
{                                                                                           
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 72

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 72 
MT8668 SCP 
User Manual 
Confidential B 
        int ret  = 0;                                                                       
#ifdef CFG_NULLPTR_TRAP                                                                     
        struct scp_region_info_st region_info = *(struct scp_region_info_st 
*)(NULLPTR_BASE + 0x4); 
#endif                                                                                      
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 73

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 73 
MT8668 SCP 
User Manual 
Confidential B 
7.5 如何扩大 DRAM 区域代码  
默认情况下，我们保留 1MB 的 DRAM 用于存储 DRAM 代码。在极端情况下，如果需要更多空间来存储代码，可以
按照以下方法进行修改。 
1. 修改 LK：增大 0x100000 
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/mediatek/common/scp/RV/scp_pl
at_priv.h 
#ifdef MTK_MINIMUM_SCP_DRAM_SIZE 
#define SCP_DRAM_IMG_SIZE       0x080000    // 0.5MB dram image 
#else 
#define SCP_DRAM_IMG_SIZE       0x100000    // 1.0MB dram image 
#endif 
 
2. 修改 SCP： 增大 0x00100000 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6881/platform/link.ld.c 
MEMORY { 
    … … … 
    dram        :   ORIGIN = 0x00200000, LENGTH = 0x00100000 
    … … … 
7.6 如何使能 SCP 复位压力测试 
方法 1：在 CMD 窗口使用 adb cmd 
adb shell "echo 666 1 1 > /sys/class/misc/scp/scpctl" 
 
方法 2：在 scp linux 内核驱动中修改 scp_reset_stress = true 
Kernel/kernel_device_modules-6.12/drivers/misc/mediatek/scp/rvmt6881/scp_excep.c 
 
int scp_excep_init(void) { 
…. 
 
 
        /* 1: ee on, 0: ee disable */ 
        scp_ee_enable = 1; 
        /* scp reset stress */ 
-       scp_reset_stress = false; 
+       scp_reset_stress = true; 
        /* all coredump need element is prepare done */ 
        complete(&scp_coredump_comp); 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 74

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 74 
MT8668 SCP 
User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0116 MT8668_USB_Customer_Support_SOP_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_USB_Customer_Support_SOP_CN_V1.0.pdf

SHA-256：e2492abe19ec2eda045d46dacb77b1f2385fb5604d099632603326aba014653c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0116.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 USB Customer Support SOP 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 USB Customer Support 
SOP 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 秦文成 正式版 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 USB Customer Support 
SOP 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 USB ············································································································································································ 4 
1.1 概述·········································································································································································· 4 
1.2 名词解释 ·································································································································································· 4 
1.3 MT8668 USB 相关信息 ············································································································································ 5 
1.3.1 硬件介绍 ······················································································································································ 5 
1.3.2 软件介绍 ······················································································································································ 6 
1.4 常见问题及调试指南 ············································································································································ 10 
1.4.1 眼图测试问题 ············································································································································ 10 
1.4.2 Host Mode 问题 ········································································································································· 10 
1.4.3 Device Mode 问题 ······································································································································ 12 
附件一 附加条款 ····························································································································································· 14 
 
图片目录 
图 1-1. MT8668 USB 硬件架构图 ·············································································································································· 5 
图 1-2. MT8668 USB driver 架构图 ··········································································································································· 6 
图 1-3. 信号问题相关 log ························································································································································ 12 
 
 
表格目录 
表 1-1. 名词解释········································································································································································ 4 
表 1-2. MT8668 USB 相关 DTS 主要节点 ·································································································································· 6 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 USB Customer Support 
SOP 
Confidential B 
1 USB 
1.1 概述 
本文件主要介绍 MT8668 平台的 USB 相关内容，并列举了需要联发科支持的常见问题。在提交 CR 之前，请按照本
文件提供的调试流程进行操作，以提升协作效率。 
1.2 名词解释 
表 1-1. 名词解释 
缩略词 全称及释义 
ADB 
Android Debug Bridge 
一种多功能命令行工具，用于主机与 Android 设备之间的通信和调试 
CR 
Customer Request 
客户需求 
DTS 
Device Tree Source 
用于描述硬件设备及其配置的文本文件  
LPM 
Lower Power Management 
降低设备能耗、提升能效的技术和机制 
SSUSB 
SuperSpeed Universal Serial Bus 
联发科设计的 USB IP，支持 USB 3.0 主机和设备双角色控制器 
USB 
Universal Serial Bus 
一种用于计算机与外部设备之间连接、通信和供电的行业标准  
xHCI 
Extensive Host Controller Interface 
USB 3.x 主机控制器规范，在 SSUSB IP 中实现，用于管理 USB 主机功能 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 USB Customer Support 
SOP 
Confidential B 
1.3 MT8668 USB 相关信息 
1.3.1 硬件介绍 
 
图 1-1. MT8668 USB 硬件架构图 
 
• Port: 最高支持 usb3.2 gen1, 5Gbps, host/device dual role controller 
• Switch: 最高支持 usb2.0 480Mbps,能实现 Hub 与 USB2.0 之间的切换 
• Hub: 最高支持 4 个 USB 口 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 USB Customer Support 
SOP 
Confidential B 
1.3.2 软件介绍 
1.3.2.1 USB Driver 架构 
 
图 1-2. MT8668 USB driver 架构图 
 
• MTU3: <work project>/kernel/kernel_device_modules-6.12/drivers/usb/mtu3 
• xHCI: <work project>/kernel/kernel_device_modules-6.12/drivers/misc/mediatek/usb_xhci 
• Extcon: <work project>/kernel/kernel_device_modules-6.12/drivers/misc/mediatek/extcon 
• PHY: <work project>/kernel/kernel_device_modules-6.12/drivers/phy/mediatek/phy-mtk-xsphy.c 
 
1.3.2.2 相关的 DTS 配置 
主要节点位于 mt6881.dts 及 {project}.dts 文件中。 
表 1-2. MT8668 USB 相关 DTS 主要节点 
Port 
DTS 主要节点 
ssusb 
usb_host 
u2phy 
u3phy 
 
从 DTS 配置可以看出，驱动部分主要由 MTU3 和 xHCI 组成，具体说明如下：  
• MTU3：用于实现 USB Dual Role 控制器驱动，并在设备模式下提供相关功能支持。 
• xHCI：采用英特尔公司提供的 USB Host IP，实现主机模式功能。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 USB Customer Support 
SOP 
Confidential B 
1.3.2.3 USB Driver 软件流程 
根据 DTS 配置，USB IP 的初始化主要由 “mtu3_probe” 函数启动并完成。 
以配置为 DRD（Dual Role Device）模式的 USB 为例，其主要软件流程如下：  
 
mtu3_probe 
 get_ssusb_rscs  //解析dts 中ssusb 节点下配置的各种属性 
 ssusb_rscs_init  //初始化资源 
  clk enable 
  phy init 
  phy power on 
 ssusb_gadget_init //初始化device mode 相关的资源 
  mtu3_hw_init 
   mtu3_mem_alloc 
  mtu3_stop 
  mtu3_gadget_setup 
   mtu3_gadget_init_eps 
   usb_add_gadget_udc  //注册mtu3_gadget_ops 
                usb_add_gadget_udc_release 
                    usb_initialize_gadget 
                    usb_add_gadget    //adds a new gadget to the udc class driver list 
                        device_add(&gadget->dev)      
                        udc->gadget 
                        gadget->udc 
        ssusb_dev_debugfs_init(ssusb) 
        Log: ssusb_gadget_init() done… 
    ssusb_host_init //初始化host mode 相关资源 
        ssusb_host_setup 
        of_platform_populate  //解析dts 连接到xhci 的probe 函数 
   xhci_mtk_probe 
        Log:xHCI platform device register success... 
        ssusb_get_platform_driver   //绑定xhci driver 
    ssusb_otg_switch_init(ssusb)  //初始化dual role 资源 
 
开机初始化 log 参考： 
[    3.852111][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: uwk - reg:0x214, 
version:108  //mtu3 probe start 
[    3.853328][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: supply vbus not found, 
using dummy regulator 
[    3.855731][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: dr_mode: 3, drd: auto 
[    3.857031][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: u2p_dis_msk: 0, 
u3p_dis_msk: 0 
[    3.861439][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: only one power domain. 
[    3.864093][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: sw chip version:0 
[    3.866224][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: device src:-22 
vrt:-22 term:-22 rev6:-22 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 USB Customer Support 
SOP 
Confidential B 
[    3.868288][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: host src:-22 
vrt:-22 term:-22 rev6:-22 
[    3.874056][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: u2_intr:35 
intr_ofs:-64 host_intr_ofs:-64 discth:-22 
[    3.875476][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: term_cal:8 
term_ofs:-16 host_term_ofs:-16 
[    3.876771][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: rx_sqth:-22 
host_rx_sqth:-22 
[    3.879081][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: rx_sqd:-22 
host_rx_sqd:-22 
[    3.881332][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: pll_fbksel:-22, 
pll_posdiv: -22 
[    3.883579][T10200000234] mtu3_init_threa: mtk-xsphy 11f53000.usb3-phy0: u3_intr:-22, tx-
imp:-22, rx-imp:-22 
[    3.885902][T10200000234] mtu3_init_threa: mtk-xsphy 11f53000.usb3-phy0: tx-lctxcm1:-22, 
tx-lctxc0:-22, tx-lctxcp1:-22 
[    3.888170][T10200000234] mtu3_init_threa: mtu3 11201000.usb0: phy_u2_device_props=0, 
phy_u2_host_props=0 
[    3.890246][T10200000234] mtu3_init_threa: mtk-xsphy 11f40000.usb-phy0: 
u2_phy_instance_power_on(0) 
[    3.892124][T10200000234] mtu3_init_threa: mtk-xsphy 11f53000.usb3-phy0: 
u3_phy_instance_power_on apply u3_gen2_hqa. 
[    3.893637][T10200000234] mtu3_init_threa: mtk-xsphy 11f53000.usb3-phy0: 
u3_phy_instance_power_on(0) //phy power on 
[    3.895899][T10700000234] mtu3_init_threa: mtk-xsphy 11f53000.usb3-phy0: Disable 
tx_chirpK. 
[    3.898249][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: wakeup irq 242 
[    3.901885][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: usb3-drd: 1 
[    3.902790][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: ssusb_hwrscs_req_v2_v3 
state=1, spm_ctrl=0x2025007f 
[    3.906200][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: irq 382 
[    3.907338][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: vbus_draw_enable: 0 
[    3.909906][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: typec: rt-pd-manager 
[    3.910925][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: typec port: port0 
[    3.912943][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: IP version 0x1015(U3 IP) 
[    3.914121][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: fifosz/epnum: Tx=0x2000/8, 
Rx=0x2000/8 
[    3.915308][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: disable accept_lgo 
[    3.916259][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: max_speed_host: super-
speed //max speed 支持 super-speed 
[    3.918212][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: u2_lpm_quirks: 0x0 
[    3.918217][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: dma mask: 36 bits 
[    3.922612][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: supply vbus not 
found, using dummy regulator //xhci probe start 
[    3.924999][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: supply vusb33 not 
found, using dummy regulator 
[    3.927741][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: xHCI Host Controller 
[    3.928826][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: new USB bus 
registered, assigned bus number 1 
[    3.931508][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: hcc params 0x01440f91 
hci version 0x120 quirks 0x0000000000200010 
[    3.933684][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: irq 383, io mem 
0x11200000 
[    3.936072][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: xHCI Host Controller 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 USB Customer Support 
SOP 
Confidential B 
[    3.937102][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: new USB bus 
registered, assigned bus number 2 
[    3.939187][T10700000234] mtu3_init_threa: xhci-mtk 11200000.xhci0: Host supports USB 3.2 
Enhanced SuperSpeed 
[    3.940465][T10700000234] mtu3_init_threa: usb usb1: New USB device found, idVendor=1d6b, 
idProduct=0002, bcdDevice= 6.12 
[    3.943929][T10700000234] mtu3_init_threa: usb usb1: New USB device strings: Mfr=3, 
Product=2, SerialNumber=1 
[    3.945993][T10700000234] mtu3_init_threa: usb usb1: Product: xHCI Host Controller 
[    3.945996][T10700000234] mtu3_init_threa: usb usb1: Manufacturer: Linux 6.12.38-
android16-5-g477adbee20b6-4k xhci-hcd 
[    3.945998][T10700000234] mtu3_init_threa: usb usb1: SerialNumber: 11200000.xhci0 
[    3.946439][T10700000234] mtu3_init_threa: hub 1-0:1.0: USB hub found 
[    3.948222][T10700000234] mtu3_init_threa: hub 1-0:1.0: 1 port detected 
[    3.950917][T10700000234] mtu3_init_threa: usb usb2: We don't know the algorithms for LPM 
for this host, disabling LPM. 
[    3.952617][T10700000234] mtu3_init_threa: usb usb2: New USB device found, idVendor=1d6b, 
idProduct=0003, bcdDevice= 6.12 
[    3.954502][T10700000234] mtu3_init_threa: usb usb2: New USB device strings: Mfr=3, 
Product=2, SerialNumber=1 
[    3.957038][T10700000234] mtu3_init_threa: usb usb2: Product: xHCI Host Controller 
[    3.959622][T10700000234] mtu3_init_threa: usb usb2: Manufacturer: Linux 6.12.38-
android16-5-g477adbee20b6-4k xhci-hcd 
[    3.962088][T10700000234] mtu3_init_threa: usb usb2: SerialNumber: 11200000.xhci0 
[    3.964636][T10700000234] mtu3_init_threa: hub 2-0:1.0: USB hub found 
[    3.966877][T10700000234] mtu3_init_threa: hub 2-0:1.0: 1 port detected 
[    3.970228][T10700000234] mtu3_init_threa: mtu3 11201000.usb0: xHCI platform device 
register success... //xhci probe done 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 USB Customer Support 
SOP 
Confidential B 
1.4 常见问题及调试指南 
常见问题主要分为以下几类：眼图相关问题、Host 模式问题、Device 模式问题等。在客户反馈问题前，请明确 
MT8668 平台上的 USB 所处的角色，即为 Host 还是 Device。 
 
1.4.1 眼图测试问题 
通常在硬件设计完成且软件调通后，需优先进行眼图测试，以确保  USB 信号质量符合规范要求。 
1.4.1.1 眼图测试指令 
echo “CMD” > /proc/mtk_usb/xhci/ testmode, 
 
支持的 CMD 如下： 
1. test packet: 用于眼图测试 
2. test J: 用于 Test J 测试 
3. test K: 用于 Test K 测试 
4. test SE0 NAK: 用于 SE0 NAK 测试 
 
注意： 
1. 测试前，请确保 USB 已经切换到 host mode。 
– cat /sys/class/usb_role/12001000.usb0-role-switch/role  ，得到的应该是 host。如果显示为 device 或 
none，说明当前未切换到 host 模式。可尝试重新插拔 OTG 线，或通过手动向对应节点 echo "host" 以切换
至 host 模式。 
2. test packet 命令只能由 roothub 端口发出，外接的 hub 无法转发该命令。如需测试 hub 下游端口的眼图，请联
系 hub 厂商咨询相关测试方法。 
3. 输入 test 命令后，xHCI IP 会进入测试模式，此时插拔 U 盘等设备将无法被识别，无需担心。重启平台后，USB 
Host 功能会恢复正常使用。 
 
1.4.2 Host Mode 问题 
最常见的问题是 USB 设备无法识别。在向 MediaTek 提交 CR 之前，建议贵司先按照以下指引进行自查，并将检查
结果一并提供给 MediaTek，以提升问题处理效率。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 USB Customer Support 
SOP 
Confidential B 
1.4.2.1 无法识别插入设备问题 
• 首先确认 USB 眼图信号是否已经通过测试？ 
– 如眼图测试未通过，需先对信号进行调优，确保眼图测试通过后，再重新验证相关问题 。 
 
• 确认是否概率性问题&单台设备问题？该设备在其他平台或者 PC 上是否能正常识别？ 
– 单台设备问题一般认为硬件问题，可能信号不好也可能接触不良 。 
– 多台概率性问题则大概率是信号质量不够好。 
 
• 确认设备是直接连接到平台，还是通过 hub 连接？或者两种连接方式均存在问题？ 
– 如果设备直连平台时无问题，则建议检查 hub 是否存在异常。 
– 如果设备直连平台时有问题，而通过 hub 连接时无问题，则可尝试关闭 host 端的 LPM。方法是在 DTS 文件
的 usb_host 节点下添加usb2-lpm-disable 。 
 
• 查看开机 log 确认 USB driver 都有正常加载？PHY 是否有正常 init？USB 是否有切换到 host mode? 
– 可以参考 1.3.2.3 章节中的开机初始化 log 进行对比。 
– 重点搜索 xHCI，可以参考正常的 log 对比看驱动是否都有正常加载以及 probe 完成。 
– 检查设备 driver 指令: cat /sys/kernel/debug/usb/devices 
– cat /sys/class/usb_role/11201000.usb0-role-switch/role ，得到的应该是 host，如果是 
device/none，说明没有切换到 host mode，可以重新插拔 OTG 线，或者手动 echo host 到这个节点来切换。 
 
• 查看接入设备后的反应及 log，是 log 无任何响应？还是枚举过程中失败？还是枚举完成了但反复断连重连？  
– 若接入设备后 log 没有任何东西： 
▪ 优先检查 host 是否有提供 5V 的 vbus。 
o case 1: 常供电外部 5V，使用万用表或者 vbus pin 设备量取对应位置的电压 
o case 2: 内部 GPIO 供电时，使用命令查看 GPIO:  
cat > /proc/mtk_gpio/soc.pinctrl 
▪ 检查开机 log 中 PHY init 是否正常。 
▪ 检查中断是否正常接收。分别在插入设备前后执行：cat /proc/interrupts | grep “usb | 
xhci”， 查看 host 是否有收到中断（注意：双系统项目很容易出现中断没有配对导致 host 收不到中断，从而
接入设备无反应的问题，所以也请检查中断的配置是否是正确的）。 
– 若枚举过程失败，大多数情况下是信号问题导致的： 
▪ case1: 如图 1-3 信号问题相关 log 所示，此类 log 一般都是由信号问题引起的。在确保眼图测试已经通
过的前提下，请再次尝试。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 USB Customer Support 
SOP 
Confidential B 
 
图 1-3. 信号问题相关 log 
 
▪ case2: 与图 1-3 中信号问题相关 log 类似，建议尝试关闭 host 端的 LPM，以排查是否为该功能导致的问
题。 
方法：在 DTS 文件的 usb_host 节点下添加 usb2-lpm-disable 属性。 
 
– 若 log 显示枚举已完成，但设备反复断开又重新连接： 
▪ case1: 首先需要确保眼图测试已通过。随后可以尝试调高 disconnect threshold，对应 DTS 文件中的
mediatek, rptr-discth 属性。 
注意：此类问题通常是由于之前为通过眼图测试而将 output swing（输出幅度）调高，因此 disconnect threshold 
也需要相应提高，否则容易出现设备反复断连重连的情况。 
 
1.4.3 Device Mode 问题 
常见的 ADB 无法识别问题，以及部分 gadget 配置相关问题，在向 MediaTek 提交 CR 之前，建议贵司按照以下指引
先进行自查，并将检查结果一并提供给 MediaTek，以便后续排查。 
 
1.4.3.1 ADB 不识别调试流程 
• 无法检测到设备的存在（Host 端没有任何反应，例如在 Windows PC 的设备管理器中没有出现新的设备，也没
有弹出窗口提示无法识别的设备）。 
– 确认是否已切换到 device mode 
可通过执行命令cat /sys/class/usb_role/12001000.usb0-role-switch/role 进行检查，返回结果
应为 device。如果显示为 host 或 none，说明未切换到 device 模式。此时可尝试重新插拔 USB 线，或手动
通过 echo device 切换到 device mode。 
– USB3 device 时检查 usb3_en == 1'b1；USB2 device 时 检查 softcon== 1'b1 
cat /sys/kernel/debug/usb/12001000.usb0/regs/reg  
USB3_CONFIG 的 bit0 即为 usb3_en 
POWER_MANAGEMENT 的 bit6 即为 softcon 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 USB Customer Support 
SOP 
Confidential B 
– 检查 USB configfs 配置是否有 ffs.adb 
Android: ls -al /config/usb_gadget/g1/configs/b.1/  
Yocto: ls -al /sys/kernel/config/usb_gadget/g1/configs/c.1/ 
– 检查 configfs UDC name 是否有值，值是否正确 
cat /config/usb_gadget/g1/UDC 
getprop | grep usb 看下 sys.usb.config 是否有设置成功 
– 检查 adbd 是否正常启动 
Android: ps -a | grep adbd 
Yocto: ps -e | grep adbd 
– 检查 PC 上的 adb 服务版本是否过旧 
可通过adb --version 查看当前 adb 版本，建议使用 1.0.39 及以上版本。 
执行adb kill-server 后再次尝试连接。 
• 检测到无法识别的 device（D+已经拉高，host 能检测到有 device 插入）。 
– 怀疑 descriptor 无法传输或者传输错误。 
▪ 检查 USB 中断是否正常收到。可在插入 PC 之前和之后分别执行 cat /proc/interrupts | grep 
“usb”， 观察 USB 中断是否有响应。（注意：在双系统项目中，常见因中断未正确配对导致 USB 无法收到中
断，进而接入 PC 无反应的问题，请务必检查中断配置是否正确。）。 
▪ 确认眼图信号测试通过。 
• PC 设备管理器中显示设备正常，但无法正常工作。 
– 可能是 PC 驱动存在问题。建议在设备管理器中手动将驱动更新为 Android ADB Interface。 
– 可能是 serialnumber 未发送。可通过以下命令检查相关节点是否有值。 
▪ Android: cat /config/usb_gadget/g1/strings/0x409/serialnumber 
▪ Yocto: cat /sys/kernel/config/usb_gadget/g1/strings/0x409/serialnumber 
如果没有值，说明序列号未写入。可手动执行 echo 0123456789ABCDEF > [节点路径]，然后重新插拔 
USB 线。 
– 可尝试串接一个 USB hub。如果通过 hub 连接后设备可以正常工作，则很可能是 LPM（Link Power 
Management）相关问题。 
 
1.4.3.2 Android Gadget 配置问题 
可以直接参考/device/mediatek/mt6881/init.mt6881.usb.rc 文件中的内容进行配置，如有问题再提交 CR 至 
MediaTek 协助处理。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8668 USB Customer Support 
SOP 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附加条款为先决要件。
您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同意受本附加条款之拘束，您将不得使用、
取得或下载本文件并应立即删除或毁弃所有本文件之副本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」 ）或其授权人之机密信息及专有信息，仅供您为本文件所描述之联发
科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对联发科技、其供货商及/或其直接或间接客户所提潜在
专利侵权主张的证据） 。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信
息之一部或全部导致联发科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁反言原则或其他方
式） 。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用或信赖本文件相关或因使用或信赖本文件致生之任何责任，
包括但不限于间接损害或附带损害赔偿责任。 
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何明示、默示、法定或其他形式
之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由贸易惯例或交易、履行过程所生之担保责
任。对于联发科技为符合您所提规格或遵循特定标准或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何因产品、电路或软件
之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技产品所涉及之设计、验证与测试之所有责任，并应确保前述
整合产品符合相关标准及任何安全性要求或其他要件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

