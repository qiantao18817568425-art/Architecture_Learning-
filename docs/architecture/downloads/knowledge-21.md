# SRC0273 MT8676_Yocto_Thermal_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Thermal_User_Manual_V1.0.pdf

SHA-256：76602ab493abc0563af0897a6debe65e41a325b68a0ad7d6c23ecb1906a37b08

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0273.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-08-12
MT8676 Yocto Thermal 
User Manual 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Thermal 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 酒召清 正式版 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto Thermal 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 热管理 ······································································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 架构/流程概述 ························································································································································ 4 
1.3 配置/客制指南 ························································································································································ 5 
 热管理策略 ·················································································································································· 5 
1.4 常见问题/故障排除 ················································································································································ 7 
附件一 附加条款 ······························································································································································· 8 
 
 
图片目录 
图 1-1. Thermal 2.0 软件架构 ··················································································································································· 4 
 
表格目录 
表 1-1. 设备上可用的策略（under/data/thermal/）·············································································································· 5 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto Thermal 
User Manual 
Confidential B 
1 热管理 
1.1 概述 
设备的热管理有两个主要目标： 
 
• 控制组件温度以避免被热损坏。 
• 控制整个产品的温度以确保人体安全并符合安全规定。 设备中的热是由于 IC 高功率累积而来的。高功率跟
高时钟速度、电压和性能有关系。 
 
从热管理的角度，控制温度的方法是控制散热及发热。控制散热可以通过添加各种热管理解决方案，如 TIM、铜
箔、导管等，将热有效地传递（三种热传递方式：热传导、热辐射、热对流）到整个产品和空气或接触面上。控
制发热可以根据温度降低/限制功耗来实现，这是本文档的主要关注点。 
 
 
1.2 架构/流程概述 
 
图 1-1. Thermal 2.0 软件架构 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto Thermal 
User Manual 
Confidential B 
thermal_core 是一个本地 Linux 应用程序，其主要功能是解析.conf 格式的热管理策略。 
 
CPU/GPU/APU 会各自根据 thermal_core 设置下来的目标 Tj 和监测到的温度做热管理调节。 
 
1.3 配置/客制指南 
 热管理策略 
策略在 source code 里的路径是src/apps/spm-base/thermal-conf/mt8676，支持加密格式。 
表 1-1. 设备上可用的策略（under/data/thermal/） 
Thermal policy Permanent? Encrypted? Description 
thermal.conf Yes Yes Default thermal policy 
disable_thermal.conf Yes Yes Disable thermal throttling and thermal protection 
disable_thermal_temp.conf No Yes Same as the above, except it needs to re-apply after 
device rebooted 
disable_throttling.conf No Yes Disable thermal throttling 
disable_skin_control.conf No Yes 
Disable MTK skin control close loop (always keep 
Target Tj to 95℃) 
Thermal_policy_XX.conf 
(XX = 00~19 except 00, 02, 
08) 
On demand Yes Can add your own policy setting and switch via power 
HAL 
thermal_policy_08.conf No Yes Thermal policy for benchmark 
 
 
1.3.1.1 热管理策略命令 
应用一个热管理策略 
adb shell "thermal-int apply [policy_name]" 
E.g., adb shell "thermal-int apply disable_throttling.conf" 
 
1.3.1.2 热管理策略格式 
• Permanent policy 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto Thermal 
User Manual 
Confidential B 
• Linux thermal framework (LTF) 
–  “policy”: Support power_allocator and step_wise. 
 
 
• Disable LTF throttling 
 
 
• Disable LTF shutdown cooler and LVTS thermal reboot
 
 
• Closed loop Tskin control 
– trip_pcb: PCB temperature to enable closed loop. 
– target_tpcb: Target PCB temperature for closed loop. 
 
 
• Backlight cooler 
–  “reduce-brightness”: Reduce brightness xx %. 
 
 
• CPU frequency table mapping 
–  “cluster”: CPU cluster id. 
 
 
• CPU core isolation table mapping 
–  “CPU”: CPU core to be isolated. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto Thermal 
User Manual 
Confidential B 
 
 
• GPU frequency table mapping 
 
 
1.4 常见问题/故障排除 
打开 thermal_core log: 
adb shell " thermal-int debug_log 1" 
 
How to decrypt or encrypt thermal configuration files: 
https://online.mediatek.com/apps/faq/detail?list=HW&faqid=FAQ27718 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Thermal 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto Thermal 
User Manual 
Confidential B 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0274 MT8676_Yocto_UART_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_UART_User_Manual_V1.1.pdf

SHA-256：63e4e4b10e6b30733a25b70ce55ebed8f4f6b6ae98e0692ae6e94550dd93b1ae

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0274.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2025-03-12
MT8676 Yocto UART 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto UART 
User Manual 
Confidential B 
版本记录 
 
版本 日期 作者 描述 
1.0 2024-08-12 陈李亮 正式版 
1.1 2025-03-12 陈李亮 修改章节 1.3.4 添加 GPIO 设定 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto UART 
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
 MT8676 UART 特征 ······································································································································ 5 
1.3 配置/客制化指南 ···················································································································································· 6 
 Linux 构建配置 ············································································································································· 6 
 添加 UART DTS 节点 ····································································································································· 6 
 添加 APDMA DTS 节点 ································································································································· 7 
 添加 GPIO 设定 ············································································································································ 7 
 测试和调试 ·················································································································································· 8 
1.4 常见问题/故障排查 ················································································································································ 9 
 UART 无法输入输出 ····································································································································· 9 
 UART 乱码问题 ············································································································································· 9 
 UART 不打印内核日志 ································································································································· 9 
附件一 附加条款 ····························································································································································· 10 
 
 
图片目录 
图 1-1. SoC UART 和设备 UART 之间的引脚连接 ···················································································································· 4 
 
表格目录 
表 1-1. 名词解释········································································································································································ 4 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto UART 
User Manual 
Confidential B 
1 UART 
1.1 概述 
 简单介绍 
本章节介绍 MT8676 UART 控制器的硬件、软件及其功能。 
 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto UART 
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
 
图 1-1 展示的是 SoCError! Reference source not found.与外围设备通过 UART 进行数据传输的硬件连接，其中 RTS 和
CTS 用于硬件流控管理，可以根据使用场景决定移除或保留。  
 
 MT8676 UART 特征 
• 提供 4 路串口 
• UART0/UART1 是 2 针（TX、RX）UART 通道 
• UART2/UART3 是一个 4 针（TX、RX、CTS、RTS）UART 通道 
• UART3 挂载一个 UARTHUB，默认是 UARTHUB 模式 
• 支持 M16C450 和 M16550A 操作模式 
• 兼容标准软件驱动程序 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto UART 
User Manual 
Confidential B 
• 传输系统：异步 
• 数据长度：5 到 8 位 
• 硬件流控：基于 CTS/RTS 的自动收发控制 
• 软件流控：使用特殊字符 Xon/Xoff 进行软件流控 
• 波特率可编程为 300 bps 至 3 Mbps 
• 中断请求：接收中断/发送中断 
• 数据传输：支持 DMA（发送/接收）传输 
 
1.3 配置/客制化指南 
 Linux 构建配置  
配置项目： 
• 分配在 Linux 内核下支持的最大 UART（通用异步收发器/发射器）端口数量 
CONFIG_SERIAL_8250_NR_UARTS=4 
CONFIG_SERIAL_8250_RUNTIME_UARTS=4 
 
(1) 启用 UART DMA 支持 
CONFIG_DMA_MTK_UART=y 
(2) 启用对 8250 UART 协议 和 MTK UART 驱动的支持 
CONFIG_SERIAL_8250=y 
 
 添加 UART DTS 节点 
Device node of UART: 
uart0: serial@11001000 { 
                        compatible = "mediatek,mt6577-uart"; 
                        reg = <0 0x11001000 0 0x1000>; 
                        interrupts = <GIC_SPI 250 IRQ_TYPE_LEVEL_HIGH 0>; 
                        clocks = <&clk26m>, <&infracfg CLK_INFRA_UART0>; 
                        clock-names = "baud", "bus"; 
                        dmas = <&apdma 0 &apdma 1>; 
                        dma-names = "tx", "rx"; 
   }; 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto UART 
User Manual 
Confidential B 
 添加 APDMA DTS 节点 
Device node of APDMA: 
apdma: dma-controller@11300b80 { 
   compatible = "mediatek,mt6985-uart-dma"; 
   reg =   <0 0x11300b80 0 0x80>, 
               <0 0x11300c00 0 0x80>, 
    <0 0x11300c80 0 0x80>, 
    <0 0x11300d00 0 0x80>, 
    <0 0x11300d80 0 0x80>, 
    <0 0x11300e00 0 0x80>, 
    <0 0x11300e80 0 0x80>, 
    <0 0x11300f00 0 0x80>; 
   interrupts =    <GIC_SPI 219 IRQ_TYPE_LEVEL_HIGH 0>, 
              <GIC_SPI 220 IRQ_TYPE_LEVEL_HIGH 0>, 
             <GIC_SPI 221 IRQ_TYPE_LEVEL_HIGH 0>, 
            <GIC_SPI 222 IRQ_TYPE_LEVEL_HIGH 0>, 
            <GIC_SPI 223 IRQ_TYPE_LEVEL_HIGH 0>, 
            <GIC_SPI 224 IRQ_TYPE_LEVEL_HIGH 0>, 
             <GIC_SPI 225 IRQ_TYPE_LEVEL_HIGH 0>, 
             <GIC_SPI 226 IRQ_TYPE_LEVEL_HIGH 0>; 
   clocks = <&pericfg_ao_clk CLK_PERAOP_DMA_BCLK>; 
   clock-names = "apdma"; 
   dma-requests = <8>; 
                         #dma-cells = <1>; 
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
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto UART 
User Manual 
Confidential B 
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
 
 测试和调试 
1. 设置波特率 921600，8 位数据位, 1 位停止位, 无奇偶校验,如 UART1 
stty -F /dev/ttyS1 ispeed 921600 ospeed 921600 cs8 
 
2. 获取当前 UART 波特率以及数据位配置信息 
stty -F /dev/ttyS1 -a 
 
3. UART 数据获取，可以使用以下命令接收 UART1 数据并通过 console 打印出来 
cat /dev/ttyS1 
 
4. UART 发送数据，可以使用以下命令让 UART1 发送字符串”123” 
echo 123 > /dev/ttyS1 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto UART 
User Manual 
Confidential B 
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
 
 UART 不打印内核日志 
User 版本中，在默认情况下，image 进入 shell 之后便不再打印内核日志，而 engine/user-debug image 则默认继续
打印内核日志。可以参考以下方法进行修改： 
• echo 1 > /proc/mtprint：用于在 adb shell 可用后启用 UART 日志记录 
• setprop persist.uartconsole.enable 1：用于在启动后启用 UART 日志记录 
• 通过修改代码为用户加载默认启用 UART 日志记录 
vendor/mediatek/proprietary/bootable/bootloader/lk/app/mt_boot/mt_boot.c 
cmdline_append("printk.disable_uart=0"); // BUILD_TYPE_USER 
 
device/mediatek/mt6873/init.mt6873.rc mask "write /proc/bootprof 0" 
# write /proc/bootprof 0 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto UART 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0275 MT8676_Yocto_USB_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_USB_User_Manual_V1.0.pdf

SHA-256：998ce13df79878658efbe1a84a3751e69d7ac328acb5939eb628fafc9ed8ca40

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0275.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本号:  1.0 
出版日期:  2024-08-12
MT8676 Yocto USB 
User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto USB 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 王战勇 正式版 
 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto USB 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
1 MTK USB ···································································································································································· 5 
1.1 基本介绍 ·································································································································································· 5 
1.2 MTK USB 概况 ·························································································································································· 5 
1.3 MTK USB 内核配置 ·················································································································································· 6 
 MTK USB 连接器（connector）的使用状况······························································································· 8 
 MTK USB 配置内核通用 USB 连接器配置选项··························································································· 8 
 MTK USB USBIF 兼容性测试补丁 ················································································································ 9 
1.4 MT8676 xHCI USB 2.0 部分 USBIF 兼容性测试程序 ······························································································· 9 
 一些背景信息 ·············································································································································· 9 
 怎么使用 xHCI USB 2.0 工具集? ················································································································ 10 
1.5 微调 xHCI 眼图（eye-pattern）质量的参数 ········································································································ 10 
 微调 Phy RG_USB20_VRT_VREF_SEL 参数 ································································································· 10 
 微调 Phy RG_USB20_TERM_VREF_SEL 参数 ····························································································· 11 
 微调 PHY RG_USB20_HSTX_SRCCTRL 参数 ································································································ 11 
 微调 PHY RG_USB20_PHY_REV 参数 ········································································································· 12 
1.6 微调主模式 USB 2.0 规范眼图参数 ····················································································································· 13 
 怎么定位 sysfs hqa 的位置? ······················································································································ 13 
 把工作目录切换到 hqa 节点的目录 ········································································································· 13 
 调节眼图参数的节点文件 ························································································································· 13 
 USBIF USB 2.0 信号兼容性测试工具集的节点 ························································································· 13 
 用来强制主机进入 USB 3.0 信号兼容性测试模式的节点 ······································································· 14 
1.7 怎样理解主模式 USB 2.0 规范眼图交互命令 RG* or hqa 的 u2p, index 参数 ··················································· 14 
 hqa ······························································································································································ 14 
 RG* ······························································································································································ 16 
 不要忘记把眼图测试的出来的参数发回给 USB 维护的工程师 ···························································· 17 
1.8 怎么调整从模式下 USBIF 电器特性兼容性测试的眼图参数？ ········································································· 18 
 从模式下眼图参数调节的 sysfs 节点位置 ······························································································· 18 
 从模式下眼图参数读取（二进制格式） ································································································· 18 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto USB 
User Manual 
Confidential B 
 从模式下眼图参数修改 ····························································································································· 19 
 不要忘记把眼图测试的出来的参数发回给 USB 维护的工程师 ···························································· 19 
1.9 怎样理解 usb3hqa 命令行参数中的 u3p ············································································································· 19 
 usb3hqa ······················································································································································ 19 
 推荐使用易于人类理解的命令方式进入 USB 3.0 Gen1 USBIF 电器特性兼容性测试模式 ··················· 19 
 以专家方式强制设置寄存器进入主机模式 USB 3.0 Gen1 USBIF 电器特性兼容性测试模式 ··············· 20 
1.10 xHCI USB 2.0 USBIF 电器特性兼容性测试模式命令 ···························································································· 21 
 主机高速信号质量 (EL_2, EL_3, EL_6, EL_7) ····························································································· 21 
 主机控制器数据包参数 (EL_21, EL_22, EL_23, EL_25, EL_55) ·································································· 21 
 主机 CHIRP 时序 (EL_33, EL_34, EL_35) ····································································································· 21 
 主机的挂起/恢复时序 (EL_39, EL_41) ······································································································· 21 
 Host Test J/K, SE0_NAK (EL_8, EL_9) ··········································································································· 21 
 Drop Test ····················································································································································· 21 
附件一 附加条款 ····························································································································································· 22 
 
 
图片目录 
图 1-1. MT8676 MTK USB HW 框图 ·········································································································································· 5 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto USB 
User Manual 
Confidential B 
1 MTK USB 
1.1 基本介绍 
MTK USB 主机（Host）和从机（Device）最大支持到 USB 3.1 Gen1, 并且 USB 2.0 的从机模式可以支持 BC1.2 的协
议。 
• 主机 xHCI 支持 USB 3.0 Gen1 物理链路端口（Port）和 USB 2.0 物理链路端口（Port），最多能支持 32 个 USB
端点（EndPonit）。 
• 从机 MTU3 支持 8 对发/收（TX/RX） USB 端点端口，它们共享 8K 的 SRAM, 最多支持八个联发科数据传输队
列通道。 
 
1.2 MTK USB 概况 
图 1-1 展示了 MTK 公版 USB 框图： 
 
图 1-1. MT8676 MTK USB HW 框图 
 
MT8676 只有一个 MTK USB 的硬件模块， 在联发科 SLT 演示板的名字叫 MT8676_P1V1_SMT2， 它习惯把 USB 2.0 和
USB 3.0 分开来使用： 
在 Type-C 端口接线： 规划用来和电脑连线， 扮演从机角色， 使用 ADB 调试程序。 
在 Type-A 端口接线： 规划作为一个开放的端口， 扮演主机模式为用户接入各种 USB 设备。 
 
无论如何， 只能保持一个端口上的物理连通性是好的，原因是演示板没有一个切换器来自动选择 Type-C 的接线还
是 Type-A 的接线，只能保持一路的物理贯通，这样才能保证物理链路上的信号符合 USBIF 协会的要求。 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto USB 
User Manual 
Confidential B 
• Type-C 端口： 
这个端口只有 USB2.0 的接线，可以用来和 PC 连接，缺省设置成从机模式， 并且 TypeA 上插入任何设备都会对于
这个端口有较大的影响。 SMT1 的演示版本目前仍然不支持 Type-C 的协议。 
 
• Type-A 端口： 
这个端口可以支持 USB 3.0 及以下规范的 USB 设备， 它可以支持全功能的 USB 3.0 规范。 缺省模式从机模式， 不
得不用下面的命令来切换主机模式。 
 
下面的命令可以阻止系统进入睡眠： 
Su 
echo lock > /sys/power/wake_lock 
 
主机（Host）模式： 
echo 2 >/sys/devices/platform/soc/11201000.usb0/mode 
 
从机（Device）模式： 
echo 3 >/sys/devices/platform/soc/11201000.usb0/mode 
 
空闲（None）模式： 
echo 0 >/sys/devices/platform/soc/11201000.usb0/mode 
 
注解： 
• 推荐使用下面的顺序来切换各种模式: -->空闲模式-→主机模式 -→空闲模式-→从机模式-→… 
 
1.3 MTK USB 内核配置  
• MTU3 代码位置： 
<work project>/kernel/kernel_device_modules-6.1/drivers/usb/mtu3 
 
• MTU3 应该配置的内核选项： 
CONFIG_DEVICE_MODULES_USB_MTU3=m 
CONFIG_DEVICE_MODULES_USB_MTU3_DUAL_ROLE=y 
 
• MTU3 相关的部分属性列表： 
注解： 这里仅仅列出项目有用的信息， 如果不是专家，建议不要擅自去修改没有列出的属性值 。 
– mediatek,u3p-dis-msk: 每个 Bit 表示一个口， 最低位 0 代表物理端口 1， 以此类推。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto USB 
User Manual 
Confidential B 
– enable-manual-drd: 这个选项很少用到， 除非在只有 Type-A， 无法使用 Type-C 或者 MicroUSB 口的情形。 
– usb-role-switch: 这个是 Linux kernel 开源社区主推的模式。 
– extcon:  这个只是能使用，但已经弱化了，Linux kernel 开源社区不推荐这种方式。 
 
• xHCI 代码位置： 
<work project>/kernel/kernel_device_modules-6.1/drivers/misc/mediatek/usb_xhci  
 
• xHCI 应该配置的内核选项： 
CONFIG_DEVICE_MODULES_USB_XHCI_MTK=m 
 
• xHCI 相关的部分属性列表： 
注解： 这里仅仅列出项目有用的信息， 如果不是专家，建议不要擅自去修改没有列出的属性值 。 
–  usb3-lpm-capable: 每个 Bit 表示一个口， 最低位 0 代表物理端口 1， 以此类推。 
如果 xHCI 的 DTS 中的父亲节点是 MTU3, 这个属性的设置将会被忽略. 
 
• xSPHY 代码位置： 
<work project>/kernel/kernel_device_modules-6.1/drivers/phy/mediatek 
 
• xSPHY 应该配置的内核选项： 
CONFIG_DEVICE_MODULES_PHY_MTK_XSPHY=m 
 
• xSPHY 相关的部分属性列表： 
注解： 这里仅仅列出项目有用的信息， 如果不是专家，建议不要擅自去修改没有列出的属性值。 
 
• 对于从机模式 USBIF 眼图参数 
– mediatek,eye-src 
– mediatek,eye-vrt 
– mediatek,eye-term 
– mediatek,rev6 
 
• 对于主机模式 USBIF 眼图参数 
– mediatek,eye-src-host 
– mediatek,eye-vrt-host 
– mediatek,eye-term-host 
– mediatek,rev6-host 
– mediatek,discth 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto USB 
User Manual 
Confidential B 
 MTK USB 连接器（connector）的使用状况 
SMT1 
Po
rt 
TYPE A OTG TYPE C （RTQ7883） Jack Comment 
I2C 
(5th) 
vBus 
CTRL 
Switcher Ena
ble 
Intr 
vBus 
Ctrl 
vBus 
Fault 
I
D 
vBus
Det 
vBus 
CTRL 
S
C
L 
S
D
A 
P
MI
C 
GP
IO 
Mux 
Power 
Mux 
Sel 
Ena
ble 
Type
C Intr 
Po
rt0 
Yes   Yes Choose One in Type-C and Type-
A 
      6   1
6
3 
1
6
4 
        98   Type
C 
Default Device with USB 2.0, and 
Manual switch USB Role 
                  101 102     Type
A 
Default Device with USB 2.0, and 
Manual switch USB Role 
                          Micro
USB 
  
SMT2 
Po
rt 
TYPE A OTG TYPE C （RTQ7883） Jack Comment 
I2C (5 
th) 
vBus 
CTRL 
Switcher Ena
ble 
Type
C Intr 
vBus 
Ctrl 
vBus 
Fault 
I
D 
vBus
Det 
vBus 
CTRL 
S
C
L 
S
D
A 
P
MI
C 
GP
IO 
Mux 
Power 
Mux 
Sel 
Ena
ble 
Type
C Intr 
Po
rt0 
Yes   Yes Choose One in Type-C and Type-
A 
      6   1
6
3 
1
6
4 
        98 48 Type
C 
  
                  101 102     Type
A 
Obey Type-C Role 
                          Micro
USB 
  
 
 MTK USB 配置内核通用 USB 连接器配置选项 
• USB CONN 代码位置：  
<work project>/kernel/kernel_device_modules-6.1/drivers/misc/mediatek/extcon 
 
• USB CONN 应该配置的内核选项： 
CONFIG_DEVICE_MODULES_USB_CONN_GPIO=m 
 
• USB CONN 相关的部分属性列表： 
id-gpio 和 vbus-gpio 之前必须要出现一个， 最好是两个都出现。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto USB 
User Manual 
Confidential B 
– id-gpio: 对应的到 USB ID 引脚。 See GPIO binding. 
– vbus-gpio: 对应的到 USB VBUS pin. 
– wakeup-source: GPIO used for wake-source. 
 
 MTK USB USBIF 兼容性测试补丁 
这些补丁只能挑选提交（cherry-pick）到你的项目, 你可以联系你的项目联发科产品经理获取这些补丁包。 
 
https://gerrit.mediatek.inc/c/quark/kernel_device_modules-6.1/+/8792849 
https://gerrit.mediatek.inc/c/quark/kernel_device_modules-6.1/+/8931041 
https://gerrit.mediatek.inc/c/quark/kernel_device_modules-6.1/+/8931042 
 
cd <work project>/kernel/kernel_device_modules-6.1/ 
git apply <braaa.patch> 
 
USBIF 兼容性测试补丁代码位置： 
<work project>/kernel/kernel_device_modules-6.1/drivers/misc/mediatek/usb_xhci  
<work project>/kernel/kernel_device_modules-6.1/drivers/usb/mtu3 
<work project>/kernel/kernel_device_modules-6.1/drivers/phy/mediatek 
 
USBIF 兼容性测试补丁应该配置的内核选项： 
CONFIG_DEVICE_MODULES_USB_MTK_HQA_TEST=y 
 
注解：  
• 切换主机（host）模式端口， 用find/sys/devices -name hqa -type f 这条命令可以找到 hqa 属性 sysfs 节点 
• 用 lsusb 可以列出你插在端口上的设备， 帮助你确认当前是否处于主机模式 
 
1.4 MT8676 xHCI USB 2.0 部分 USBIF 兼容性测试程序 
 一些背景信息 
MT8676 支持 1 个 USB 2.0 端口， USB 2.0 端口的偏移地址信息。 
port        offset    bank 
u2 port0    0x0000    MISC 
            0x0100    FMREG 
            0x0300    U2PHY_COM 
u3 port0    0x0700    SPLLC 
            0x0800    CHIP 
            0x0900    U3PHYD 
            0x0a00    U3PHYD_BANK2 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto USB 
User Manual 
Confidential B 
            0x0b00    U3PHYA 
            0x0c00    U3PHYA_DA 
u2 port1    0x1000    MISC 
            0x1100    FMREG 
            0x1300    U2PHY_COM 
u3 port1    0x1700    SPLLC 
            0x1800    CHIP 
            0x1900    U3PHYD 
            0x1a00    U3PHYD_BANK2 
            0x1b00    U3PHYA 
            0x1c00    U3PHYA_DA 
u2 port2    0x2000    MISC 
            0x2100    FMREG 
            0x2300    U2PHY_COM 
 
 怎么使用 xHCI USB 2.0 工具集? 
CONFIG_DEVICE_MODULES_USB_MTK_HQA_TEST=y 
CONFIG_DEBUG_FS=y 
 
1.5 微调 xHCI 眼图（eye-pattern）质量的参数 
  微调 Phy RG_USB20_VRT_VREF_SEL 参数  
• VRT 参考电压选择 
– Register:  
– Bit field: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto USB 
User Manual 
Confidential B 
 
 微调 Phy RG_USB20_TERM_VREF_SEL 参数 
• HS_TX TERM 参考电压选择 
– Register:  
 
– Bit field: 
 
 微调 PHY RG_USB20_HSTX_SRCCTRL 参数 
• 高速斜率控制 
– Register: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Yocto USB 
User Manual 
Confidential B 
              
– Bit field: 
 
 
 微调 PHY RG_USB20_PHY_REV 参数 
• 高速预失真控制 
– Register: 
 
– Bit field: 
31:30 RG_USB20_PHY_REV:    pre-emphasis control 
                                                     2b'00 means no drive 
                                                     2b'01 means 1st gear 
                                                     2b'10 means 2nd gear 
                                                     2b'11 means 3rd gear 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Yocto USB 
User Manual 
Confidential B 
1.6 微调主模式 USB 2.0 规范眼图参数 
 怎么定位 sysfs hqa 的位置? 
Su 
dmesg -n 1 
在/sys 目录下查找文件名为 hqa 的文件。 
你将看到下面这些回显： 
/sys/devices/platform/soc/11201000.usb0/11200000.xhci0/hqa 
/sys/devices/platform/soc/11201000.usb0/11200000.xhci0 就是 sysfs hqa 的节点位置。 
 
 把工作目录切换到 hqa 节点的目录 
cd /sys/devices/platform/soc/11201000.usb0/11200000.xhci0 
 
ls -al 
 
你应该关注以下 hqa 和 RG*文件之间的关系。 
 
 调节眼图参数的节点文件 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_CHGDT_EN 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_USB20_BGR_DIV 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_USB20_DISCTH 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_USB20_HSTX_SRCTRL 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_USB20_INTR_EN 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_USB20_PHY_REV 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_USB20_PLL_BW 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_USB20_REV4 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_USB20_SQTH 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_USB20_TERM_VREF_SEL 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 RG_USB20_VRT_VREF_SEL 
 
 USBIF USB 2.0 信号兼容性测试工具集的节点 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 hqa 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 Yocto USB 
User Manual 
Confidential B 
 用来强制主机进入 USB 3.0 信号兼容性测试模式的节点 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 usb3hqa 
 
1.7 怎样理解主模式 USB 2.0 规范眼图交互命令 RG* or hqa 的 u2p, index 参
数 
 hqa 
通过敲入cat hqa 可以获取在线命令帮助， 它提示了很多有用的信息。 
 
echo -n <item> <port-id> > hqa 
 
通用格式： USB<spec:20 or 30) Port<port-id: n> 
 
<item> 红色的参数应该从下列红色的命令列表中选择其中一个： 
test.j: Test_J 
test.k: Test_K 
test.se0: Test_SE0_NAK 
test.packet: Test_PACKET 
test.suspend: Port Suspend 
test.resume: Port Resume 
test.enumbus: Enumerate Bus 
test.getdesc: Get Device Discriptor 
test.debug: debug Port infor 
pm.u1u2: Port U1,U2 
 
<port-id> 根据下列命令行提示，筛选出合适的绿色的端口参数。 
 
USB30 Port1: 0x0A0003C0 
 
USB30 Port1 蓝色关键字 USB30 执行 USB 3.0 Gen1 规范, 它的端口号 port-id 为 1。 
 
USB20 Port2: 0x00000E03 
USB20 Port2 PORTMSC[31,28] 4b'0000: 0x00000000 
 
USB20 Port2 蓝色关键字 USB20 执行 USB 2.0 规范, 它的端口号 port-id 为 2。 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Yocto USB 
User Manual 
Confidential B 
PORTMSC[31,28]能够回显模拟电器特性模式使能情况，每个位分别映射到 TEST_J, TEST_K, TEST_SE0_NAK 和 
TEST_PACKET，对应 USBIF 兼容性电器特性的模拟测试选项。 
在需要继续做数字（MAC）电器特性模式实验前， 不得不用重启系统的方法来清除掉 PORTMSC[31,28]。 
 
注解： 
• test.debug 不属于 USBIF 兼容性测试设计的参数， 而是专门用来测试兼容性测试的端口参数是否符合预期的
端口参数，当你需要筛选出符合预期的端口参数时， test.debug 这个参数非常有用，特别是在你对芯片内的
真实端口和参数不太清楚的情况下。 
这个 test.debug 的回显信息输出的 log 是通过 printk 打印的， 请用下面的命令行参数形式来过滤出相关的信息。 
 
dmesg |grep xhci 
 
例如: 插入一个你想要做 USBIF 兼容性测试的端口，插入一个 USB 设备： 
 
console:/sys/devices/platform/soc/11201000.usb0/11200000.xhci0 # cat hqa 
info: 
        echo -n item port-id > hqa 
port-id: based on the number of USB3 ports, e.g. 
                xHCI with 1 u3p, 2 u2p: 1st u2p-id is 2(1+1), 2nd is 3 
items: 
        test.j: Test_J 
        test.k: Test_K 
        test.se0: Test_SE0_NAK 
        test.packet: Test_PACKET 
        test.suspend: Port Suspend 
        test.resume: Port Resume 
        test.enumbus: Enumerate Bus 
test.getdesc: Get Device Descriptor 
test.debug: debug Port information 
        pm.u1u2: Port U1,U2 
USB30 Port1: 0x00001203 
Powered, connected, and enabled. Link: U0. PortSpeed: SuperSpeed Gen1x1. Change: Wake: 
USB20 Port2: 0x0A0002A0 
Powered, not connected, disabled link: RxDetect PortSpeed: UNKNOWN-Speed Change: Wake: WCE 
WOE 
USB20 Port2 PORTMSC[31,28] 4b'0000: 0x00000000 
console:/sys/devices/platform/soc/11201000.usb0/11200000.xhci0 # echo -n test.debug 1 >hqa 
console:/sys/devices/platform/soc/11201000.usb0/11200000.xhci0 # dmesg |grep xhci 
[  612.198919] sh: xhci-mtk 11200000.xhci0: [name:xhci_mtk_hcd_v2&][0] test.debug 
[  612.198966] sh: xhci-mtk 11200000.xhci0: [name:xhci_mtk_hcd_v2&][1] 1 
[  612.198990] sh: xhci-mtk 11200000.xhci0: [name:xhci_mtk_hcd_v2&]mu3h t_debug_port test 
port1 
[  612.199016] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]configured 
[  612.199035] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]New USB device found, idVendor=13fe, 
idProduct=6300, bcdDevice= 1.00 
[  612.199059] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]New USB device strings: Mfr=1, Product=2, 
SerialNumber=3 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Yocto USB 
User Manual 
Confidential B 
[  612.199078] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]Product: USB DISK 3.0 
[  612.199096] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]Manufacturer: 
[  612.199111] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]SerialNumber: 0700378539191802 
[  612.199128] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]D:  Ver= 3.20 Cls=00(>ifc ) Sub=00 
Prot=00 MxPS= 9 #Cfgs=  1 
[  612.199155] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]P:  Vendor=13fe ProdID=6300 Rev= 1.00 
 
 RG* 
敲入下面这个命令 cat RG_USB20_TERM_VREF_SEL, 可以获取很多有用的信息。 
 
echo -n u2p index binary_format_value > RG_USB20_TERM_VREF_SEL 
 
通用格式: USB<spec:20 or 30> Port<u2p: n> (Phy<index: m> enable) 
 
USB20 Port2: 0x00000E03 
USB20 Port2 (Phy0: enable): 0x11E40000 0x000004004 
RG_CHGDT_EN            = 1b0 
RG_USB20_BGR_DIV       = 2b10 
RG_USB20_DISCTH        = 4b1001 
RG_USB20_HSTX_SRCTRL   = 3b011 
RG_USB20_INTR_EN       = 1b1 
RG_USB20_PHY_REV       = 2b01 
RG_USB20_PLL_BW        = 3b011 
RG_USB20_REV4          = 1b0 
RG_USB20_SQTH          = 4b0010 
RG_USB20_TERM_VREF_SEL = 3b100 
RG_USB20_VRT_VREF_SEL  = 3b100 
USB20 Port2 (Phy0: enable) 蓝色关键字 USB20 执行 USB 2.0 规范, 它的端口号 u2p 为 2, 它的 index 为 0。 
 
下面是一个演示案例： 
对于 USB 2.0 规范， 调小 RG_USB20_VRT_VREF_SEL  = 3b100 参数, 然后： 
usage:  
=========current HQA setting check========= 
USB30 Port1: 0x0A0002A0 
USB20 Port2: 0x0A0002A0 
USB20 Port2 (Phy0: enable): 0x11E40000 0x000004004 
    RG_CHGDT_EN            = 1b0 
        RG_USB20_BGR_DIV       = 2b10 
        RG_USB20_DISCTH        = 4b1001 
        RG_USB20_HSTX_SRCTRL   = 3b011 
        RG_USB20_INTR_EN       = 1b1 
        RG_USB20_PHY_REV       = 2b01 
        RG_USB20_PLL_BW        = 3b011 
        RG_USB20_REV4          = 1b0 
        RG_USB20_SQTH          = 4b0010 
        RG_USB20_TERM_VREF_SEL = 3b100 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Yocto USB 
User Manual 
Confidential B 
        RG_USB20_VRT_VREF_SEL  = 3b100 
 
 RG_USB20_VRT_VREF_SEL usage: 
   echo u2p index 3b011 > RG_USB20_VRT_VREF_SEL 
        parameter: u2p: 2 
        parameter: index: 0 
 e.g.: echo 2 0 3b101 > RG_USB20_VRT_VREF_SEL 
 
  port2 binding phy 0, tune 3b'010 as VRT_VREF value 
 
注解： 
14:12 RG_USB20_VRT_VREF_SEL 
VRT reference voltage selection (share circuit) 
000:700mV 
001:720mV 
010:740mV 
011:760mV 
100:770mV 
101:780mV 
110:800mV 
111:820mV 
 
 不要忘记把眼图测试的出来的参数发回给 USB 维护的工程师 
这些合适的眼图参数应该和眼图报告一起提供出来，需要更新到与测试平台向关联的项目*.dts 文件中。 
 
&u2port0 { 
mediatek,eye-src-host = <0x04>; 
mediatek,eye-vrt-host = <0x04>; 
mediatek,eye-term-host = <0x07>; 
mediatek,rev6-host = <0x07>;  
status = “okay” 
} 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8676 Yocto USB 
User Manual 
Confidential B 
1.8 怎么调整从模式下 USBIF 电器特性兼容性测试的眼图参数？ 
 
测试工具包下载: https://www.usb.org/document-library/xhsett 
测试眼图手册下载: https://www.usb.org/sites/default/files/HSETT_Instruction_0_4_1.pdf 
 
 从模式下眼图参数调节的 sysfs 节点位置 
console:/proc/mtk_usb/usb-phy0/u2_phy # ls -al 
total 0 
dr-xr-xr-x 8 root root 0 2024-03-28 13:20 . 
dr-xr-xr-x 4 root root 0 2024-03-28 13:20 .. 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 discth 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 intr_ofs 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 phy_rev6 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 rx_sqth 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 term_sel 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 vrt_sel 
 
 
 从模式下眼图参数读取（二进制格式） 
console:/proc/mtk_usb/usb-phy0/u2_phy # cat * 
discth = 1001 
intr_ofs = 0 
intr_val = 100011 
phy_rev6 = 01 
rx_sqth = 0010 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Yocto USB 
User Manual 
Confidential B 
term_sel = 100 
vrt_sel = 010 
 
 从模式下眼图参数修改 
请使用二进输入格式前缀'0'的形式来修改参数。 
例如：discth = 1001 表示当前这个 discth 的参数是十进制 9, 然后修改为十进制 10。 
echo 01010 > discth 
 
 不要忘记把眼图测试的出来的参数发回给 USB 维护的工程师 
这些合适的眼图参数应该和眼图报告一起提供出来，需要更新到和测试平台向关联的项目*.dts 文件中。 
&u2port0 { 
mediatek,eye-src = <0x04>; 
mediatek,eye-vrt = <0x04>; 
mediatek,eye-term = <0x07>; 
mediatek,rev6 = <0x07>;  
status = “okay” 
} 
 
1.9 怎样理解 usb3hqa 命令行参数中的 u3p 
 usb3hqa 
 推荐使用易于人类理解的命令方式进入 USB 3.0 Gen1 USBIF 电器特性兼
容性测试模式 
通过敲入cat usb3hqa 可以获取在线命令帮助, 它提示了很多有用的信息。 
 
echo -n item port-id > usb3hqa 
 
通用格式: USB<spec:30) Port<port-id: n> 
 
port-id chooses one suitable number within online help 
 
USB30 Port1: 0x0A0003C0 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 Yocto USB 
User Manual 
Confidential B 
USB30 Port1 蓝色关键字 USB30 执行  USB 3.0 规范, 它的端口号 port-id 为 1。 
 
PORTPLS[8,5] 这几个位域可以用来检查是否已经在 USB 3.0 USBIF 电器特性兼容性测试模式，这些位值 U0,U1, U2 等
等，在这里，如果执行了 usb3hqa 命令，0x0A 表示 “Compliance mode”。 
 
注解： 
• 键入下面命令：cat usb3hqa | grep Compliance 可以用来确认当前是否工作在 USB 3.0 USBIF 电器特性兼容性测试模
式。 
 
 以专家方式强制设置寄存器进入主机模式 USB 3.0 Gen1 USBIF 电器特性
兼容性测试模式 
console:/sys/devices/platform/soc/11201000.usb0/11200000.xhci0 # cat reg 
SSUSB register operation interface help info. 
rx - read xhci  reg: offset [len] 
rm - read mu3d  reg: offset [len] 
ri - read ippc  reg: offset [len] 
rp - read phy3  reg: offset [len] 
ru - read phy2  reg: offset [len] 
wx - write xhci reg: offset value 
wm - write mu3d reg: offset value 
wi - write ippc reg: offset value 
wp - write phy3 reg: offset value 
wu - write phy2 reg: offset value 
sx - set xhci mac reg bits: offset bit_start mask value 
sm - set mu3d mac reg bits: offset bit_start mask value 
si - set ippc     reg bits: offset bit_start mask value 
sp - set phy3     reg bits: offset bit_start mask value 
su - set phy2     reg bits: offset bit_start mask value 
px - print xhci mac reg bits: offset bit_start mask 
pm - print mu3d mac reg bits: offset bit_start mask 
pi - print ippc     reg bits: offset bit_start mask 
pp - print phy3     reg bits: offset bit_start mask 
pu - print phy2     reg bits: offset bit_start mask 
 
 
注解： 
• 除了 bit_star（DEC），其他数字应该是十六进制的 
echo wx 0x420 0x10340 > reg 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Yocto USB 
User Manual 
Confidential B 
1.10 xHCI USB 2.0 USBIF 电器特性兼容性测试模式命令 
 主机高速信号质量 (EL_2, EL_3, EL_6, EL_7) 
CLI:  echo -n test.packet [port] > hqa 
 
 主机控制器数据包参数 (EL_21, EL_22, EL_23, EL_25, EL_55) 
CLI:  echo -n test.getdesc [port] > hqa 
 
 主机 CHIRP 时序 (EL_33, EL_34, EL_35) 
CLI:  echo –n test.enumbus [port] > hqa 
 
 主机的挂起/恢复时序 (EL_39, EL_41) 
CLI (suspend):  echo -n test.suspend [port] > hqa 
CLI (resume):   echo -n test.resume [port] > hqa 
 
 Host Test J/K, SE0_NAK (EL_8, EL_9) 
CLI  (J): echo -n test.j [port] > hqa 
CLI  (K): echo -n test.k [port] > hqa 
CLI  (SE0): echo -n test.se0 [port] > hqa 
 
 Drop Test 
CLI: none 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8676 Yocto USB 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0276 MT8676_Yocto_AEE_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_AEE_User_Manual_V1.0.pdf

SHA-256：891b4546ef85b38067503ecea54567949d7214111f0cc57ecbae2f260fac05d9

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0276.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-11-04 
MT8676 Yocto AEE 
User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto AEE 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-04 Cheng Lee Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto AEE 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 AEE ············································································································································································ 4 
 Purpose ···································································································································································· 4 
 Scope ········································································································································································ 4 
 Definitions and Abbreviations ·································································································································· 4 
 Definition ······················································································································································ 4 
 Abbreviation·················································································································································· 4 
 Architecture Overview ············································································································································· 5 
 DB Type Introduction ···································································································································· 5 
 DB Type Introduction ···································································································································· 5 
 Architecture Overview ············································································································································· 5 
 How to Enable AEE ········································································································································ 5 
 Set AEE Mode ················································································································································ 6 
 Set Max DB Count ········································································································································· 6 
 How to Use DB ························································································································································· 6 
 Pull DB ··························································································································································· 6 
 Download GAT Tool ······································································································································· 6 
 Extract DB······················································································································································ 6 
 Get Symbols ·················································································································································· 7 
 Analyze DB ···················································································································································· 7 
Exhibit 1 Terms and Conditions ·········································································································································· 9 
 
List of Figures 
Figure 1-1. Download GAT tool from MediatekOnline ··············································································································· 6 
Figure 1-2. MediatekDBViewer tool UI······································································································································· 7 
Figure 1-3. Analyze DB ······························································································································································· 7 
Figure 1-4. Launch GDB ······························································································································································ 8 
 
List of Tables 
Table 1-1. Abbreviation ······························································································································································ 4 
Table 1-2. DB type information ·················································································································································· 5 
 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto AEE 
User Manual 
Confidential B 
1 AEE 
 Purpose 
This document provides the guidelines for using the AEE feature to debug exceptions on devices. 
 
 Scope 
This document is applicable to MediaTek Yocto system. 
 
 
 Definitions and Abbreviations 
 Definition 
For the purposes of the present document, the following terms and definitions are applied. 
 
 AEE 
Advanced Exception Engine (AEE) is an exception catching and debugging information generation mechanism. When an 
exception happens, the device will collect debug information and package into DB (database) files. 
 
 Abbreviation 
Please note the abbreviations and their explanations are provided in Table 1-1. They are used in many fundamental 
definitions and explanations in this document and are specific to the information that this document contains. 
 
Table 1-1. Abbreviation 
Abbreviation  Description  
AEE Advanced Exception Engine  
EE External Exception  
HW Reboot  Hardware Reboot Exception  
HWT  Hardware Watchdog Timeout  
KE Kernel Driver Exception  
NE Native Process Exception  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto AEE 
User Manual 
Confidential B 
 Architecture Overview 
 DB Type Introduction 
AEE generates different types of DB as shown in Table 1-2. 
 
Table 1-2. DB type information 
Layer Type Level When DB is Generated?  
 
Native 
NE  
Exception 
When userspace processes receive an exception signal  
(SIGILL/SIGABRT/SIGBUS/SIGFPE/SIGSEGV)  
System API dump When userspace processes call AEE-provided interface  
 
 
Kernel  
KE 
 
Fatal 
When kernel panic occurs  
HWT When kernel watchdog timeout occurs  
HW Reboot When watchdog timeout occurs and the device hangs for 
a long time  
Kernel API dump Exception When kernel driver calls AEE-provided interface  
External EE Exception When external IC exception occurs  
 
 DB Type Introduction 
After exception happens, AEE DB will be stored to /data/aee_exp. Those *.dbg files are DB files.  
e.g. 
--db.00.SystemAPI  
--db.00.SystemAPI.dbg : This is a DB file which has the .dbg suffix.  
--ZZ_INTERNAL : This file simply describes the exception.  
--db.01.NE  
--db.01.NE.dbg  
--ZZ_INTERNAL 
 
 Architecture Overview 
All AEE configurations are in conf file: meta/meta-mediatek-<platform>/conf/machine/<project>.conf. 
 
 How to Enable AEE 
AEE feature will be disabled by default on customer side.  
If customer needs to enable AEE, please add MTK_LOG_CUSTOMER_SUPPORT = “yes” to conf file. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto AEE 
User Manual 
Confidential B 
 Set AEE Mode 
AEE mode is set to 4 by default on customer side, which only generates fatal DB. If customers want to generate normal DB 
and fatal DB, they need to set setprop persist.vendor.mtk.aee.mode 3. 
If customers want to specify AEE mode during build time, please add MTK_AEE_MODE="3" to conf file. 
 
 Set Max DB Count 
According to DB types described in Table 1-2, the DB level includes Fatal and Normal.  
The default max count of fatal DB is 8 and the default max count of Normal DB is 8. 
Users can modify MTK_AEE_FATAL_DB_CNT/MTK_AEE_DB_CNT to change the max count.  
e.g. 
MTK_AEE_DB_CNT = “4”  
MTK_AEE_FATAL_DB_CNT = “4” 
 
 How to Use DB 
 Pull DB 
Pull platform DB to PC: adb pull /data/aee_exp 
 
 Download GAT Tool 
Please search GAT on MOL to download the latest version, as shown in Figure 1-1. 
 
 
Figure 1-1. Download GAT tool from MediatekOnline 
 
 Extract DB 
Open MediatekDBViewer in GAT tool. If your PC is running in a Windows operating system, please execute:  
GAT(Official)_ALPS\GAT_exe_v4.2034.3\gat-win32-x86_64-4.2034.3.c\gat-win32-x86_64-
4\tools\MediatekDBViewer.bat. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto AEE 
User Manual 
Confidential B 
 
Figure 1-2. MediatekDBViewer tool UI 
 
Click “Select DB File” button in Figure 1-2, then select the DB file (*.dbg) you want to analyze and click “start” to begin 
extraction. All the extracted files will be listed on the left side of the UI. 
The basic file is __exp_main.txt which describes the basic information of the exception. 
 
 Get Symbols 
You may need to get debug symbols before analyzing DB. You can use unpack-symbols.sh to get symbols:  
1. Find script: meta/meta-mediatek/recipes-devtools/unpack-symbols-tool/files/unpack-symbols.sh  
2. Copy the unpack-symbols.sh to the path: build/tmp/deploy/images/<project>/  
3. Run script: bash unpack_symbols.sh  
4. Symbol folders will be generated in the new path, which includes all the symbols.  
 
 Analyze DB 
1. For NE/KE/HWT issue:  
Method 1:  
Click “Set Symbols path” and “Analyze” (as shown in Figure 1-3), and then out.json file will show the detailed trace. 
 
 
Figure 1-3. Analyze DB 
Method 2:  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto AEE 
User Manual 
Confidential B 
Click “Set Symbols path” and “Launch GDB” (as shown in Figure 1-4), GDB window will show up, then you can get 
backtrace by using bt command in GDB. 
 
 
Figure 1-4. Launch GDB 
 
2. For HW_Reboot issue:  
HW_Reboot is a special issue: it cannot get backtrace, so you can only check some other debug files in DB 
(SYS_LAST_CPU_BUS/DFD). 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto AEE 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0277 MT8676_Yocto_AI_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_AI_User_Manual_V1.0.pdf

SHA-256：c9b8980cc5a633a56c827ae664ded94dabf777bf3409051347de96b59f32c87b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0277.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-11-22
MT8676 Yocto AI User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto AI 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-22 Maolei Wang Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto AI 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 AI ··············································································································································································· 4 
 Overview ·································································································································································· 4 
 Abbreviations ················································································································································ 4 
 Architecture/Process Overview ································································································································ 4 
 AI Architecture ·············································································································································· 4 
 NeuroPilot Development Guideline ·············································································································· 5 
 Configuration/Customization Guideline ··················································································································· 6 
 Explanation of NeuroPilot Debug Commands ······························································································ 6 
 The APU Trace Tool Captures the Trace ········································································································ 7 
 Information about the Operators Supported by Specific MediaTek Platform’s NPU ··············································· 9 
Exhibit 1 Terms and Conditions ········································································································································ 10 
 
List of Figures 
Figure 1-1. AI architecture ·························································································································································· 5 
Figure 1-2. NeuroPilot online documents ·································································································································· 6 
Figure 1-3. APU HW status ························································································································································· 8 
Figure 1-4. APU frequency status ··············································································································································· 8 
Figure 1-5. Relationship between supported operators ············································································································ 9 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 4 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto AI 
User Manual 
Confidential B 
1 AI 
 Overview  
This section describes the functions related to MT8676 AI/VPU. 
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
AI Artificial Intelligence  
MDLA MediaTek Deep Learning Accelerator 
MVPU MediaTek Vision Processing Unit   
NeuroPilot MediaTek’s Ecosystem for AI Development 
 
 Architecture/Process Overview 
 AI Architecture 
NeuroPilot is a set of software tools and APIs for developing efficient artificial intelligence applications on the MediaTek 
platform; it is the core of the MediaTek artificial intelligence ecosystem. “Edge AI” is supported by NeuroPilot, which 
means executing AI on local devices rather than remotely on servers. This can result in faster AI tasks while also protecting 
data and privacy. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto AI 
User Manual 
Confidential B 
 
Figure 1-1. AI architecture 
 
The MT8676 Yocto software stack, as illustrated in Figure 1-1, offers developers diverse development pathways. Developers 
can utilize the NCC-TFLite tool to convert TFLite models into DLA format, and subsequently deploy these models seamlessly 
to the MediaTek target platform using the Neuron Runtime API. Additionally, this software stack supports direct access to 
MTK's built-in computer vision (CV) algorithms through OpenVX, facilitating rapid implementation of common CV tasks. For 
scenarios requiring higher levels of customization, developers can opt to use OpenCL to write and implement their own CV 
algorithms, thereby meeting specific application requirements. 
 
 NeuroPilot Development Guideline 
To access NeuroPilot Online Document, customers are required to apply for an account first. This account can then be used 
to access MediaTek online document website. The website provides various development materials including 
development-related data, conversion tools, SDKs, SampleCode, as well as information on the support and limitations of 
model OP for each target. Customers seeking access to the online document can reach out to CPM for assistance with the 
application process.  
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto AI 
User Manual 
Confidential B 
 
Figure 1-2. NeuroPilot online documents 
 
After applying for access to NeuroPilot, go to https://neuropilot.MediaTek.com/ -> Software Development -> log in to your 
account -> under “NeuroPilot SDK & Document”, select the target NeuroPilot {version} -> Latest Version NeuroPilot Online 
Doc -> 2. Getting Started Guide -> 2.2. NeuroPilot Workflow -> 2.2.3.1. Android Development. 
 
 Configuration/Customization Guideline 
 Explanation of NeuroPilot Debug Commands 
If customers encounter an apusys error issue, please first turn on the following log switches, reproduce the problem, and 
then provide MediaTek with the complete machine log and the apusys_rv_xfile (used to decode apusys_log) on the test 
machine. The log options and retrieval paths are as follows: 
Enable NNAPI AOSP log       : adb shell "setprop debug.nn.vlog 1" 
Enable TFlite log                    : adb shell setprop debug.mtk_tflite.vlog true 
Enable Execution plan           : adb shell setprop debug.neuron.runtime.ShowExecPlan true 
Enable ShowQoSInfo             : adb shell setprop debug.neuron.runtime.ShowQoSInfo true 
Enable Kernel Log    : adb shell "echo 15 > /sys/class/misc/apusys/log/klog" 
Enable uPLog                          : adb shell "echo 5 > /proc/apusys_logger/log" 
Enable User Log                      : adb shell setprop debug.apusys.loglevel 15 
Enable apusys_rv_xfile: adb pull /proc/apusys_rv/apusys_rv_xfile (used for decoding apusys_log) 
 
After turning on these required switches, a service restart is needed for the changes to take effect: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto AI 
User Manual 
Confidential B 
• adb shell stop neuralnetworks_hal_service_mtk_neuron 
• adb shell start neuralnetworks_hal_service_mtk_neuron 
 The APU Trace Tool Captures the Trace 
 Use the Trace Tool to Obtain the Path 
APU Systrace is a tool used for analyzing and debugging the operational status of basic computing units (such as EDMA, 
MDLA, MVPU) on the AI Processing Unit (APU) of MediaTek platforms. It helps developers quickly analyze the performance 
of model algorithms running on the APU and debug issues. 
To get the APU trace tool, go to https://neuropilot.MediaTek.com/  -> Software Development -> log in -> select the target 
NeuroPilot {version} under “NeuroPilot SDK & Document” -> Latest Version NeuroPilot Online Doc –> Downloads to 
download APU Systrace Tool. 
 
 How to Use APU Trace Tool  
To record APU trace, execute 02-trace_start_all.bat -> run the test program -> 02-trace_stop.bat.  
• 02-trace_start_all.bat - start recording trace 
• 02-trace_stop.bat - stop tracing and pull trace files 
 
The following two scripts are optional to run. Enabling them will result in the system trace containing APU middleware and 
neuron trace. 
• 08-mdw_trace_enable.bat - To obtain tracing information from the APU middleware. 
• 08-neuron_rt_trace_enable.bat - To obtain tracing information from the neuron runtime. 
 
Three files will be generated in the end, choose to view as needed (Please use https://ui.perfetto.dev/ to open the trace.) 
• apusys.trace - apusys trace only 
• System trace - system trace only 
• combine.trace - apusys + system trace 
 
 Analysis Example of APU Trace  
There are usually three trace files obtained by capturing and parsing with MediaTek APU Systrace as shown below: 
 
• apusys.trace (Only including the status of tasks on various devices such as MDLA/MVPU during APU operation and 
information on APU Frequency, DRAM access, TCM access, etc.) 
• system.trace (Regular system trace only, including CPU information and information about other processes/threads in 
the system) 
• combine.trace (apusys + system trace) 
 
In actual scenarios, there is often a need to clarify the debugging requirements for the threads running APU in the current 
system. The following SOP can be referred to: 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto AI 
User Manual 
Confidential B 
1. Open the apusys.trace file using Perfetto UI, find the Tasks block running on the MDLA or MVPU (Main AI Compute 
Unit) Core, and you can obtain the following information: 
– Does the corresponding Task run in SMP multi-core parallel mode? If running in multi-core MDLA mode, there will be 
multiple Tasks with the same color/pid as shown in Figure 1-3: 
 
 
Figure 1-3. APU HW status 
 
– The DRAM/TCM occupancy situation corresponding to the Task  
– The operating frequency of the MDLA/MVPU Cores during the corresponding Task execution period. 
– You can also check whether the AI algorithm is executed periodically by running Tasks with the same pid on MDLA 
Core. 
 
 
Figure 1-4. APU frequency status 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto AI 
User Manual 
Confidential B 
 Information about the Operators Supported by Specific MediaTek 
Platform’s NPU 
 
Figure 1-5. Relationship between supported operators 
 
As shown in Figure 1-5, the operators supported by the MediaTek platform NPU are divided into three levels from small to 
large: 
 
• PyTorch/TensorFlow Ops -> TFLite Ops: By using the mtk_converter tool, the original Ops in .pt or .pb models are 
converted to TFLite Ops. This mapping process will undergo initial Ops filtering to block Ops not supported by the 
platform’s NPU (HW). For a list of PyTorch/TensorFlow Ops that can be recognized and converted to TFLite Ops by the 
converter tool, please refer to the online documents: Developer Tools -> Model Development -> Converter -> 
Converter Tool Supported Operators. 
• TFLite Ops -> NPU HW(MDLA/MVPU) Operations: By using the ncc-tflite (compiler) in neuronsdk, the converted TFLite 
model is compiled into a dla file. During this mapping process, the Specification (Restrictions) in the NPU HW 
(MDLA/MVPU) Operations Guidelines will be referenced to check the detailed parameters of each op in TFLite. For 
information on which TFLite Ops can be recognized and compiled into dla files by the ncc-tflite tool, please refer to 
Supported Operations. 
• NPU HW (MDLA/MVPU) Operations: Ops that can truly run on NPU (MDLA or MVPU). 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto AI 
User Manual 
Confidential B 
Exhibit 1 Terms and Conditions 
Your access to and use of this document and the information contained herein (collectively this “Document”) is subject to your (including the corporation 
or other legal entity you represent, collectively “You”) acceptance of the terms and conditions set forth below (“T&C”).  By using, accessing or 
downloading this Document, You are accepting the T&C and agree to be bound by the T&C.  If You don’t agree to the T&C, You may not use this 
Document and shall immediately destroy any copy thereof. 
 
This Document contains information that is confidential and proprietary to MediaTek Inc. and/or its affiliates (collectively “MediaTek”) or its licensors and 
is provided solely for Your internal use with MediaTek’s chipset(s) described in this Document and shall not be used for any other purposes (including but 
not limited to identifying or providing evidence to support any potential patent infringement claim against MediaTek or any of MediaTek’s suppliers 
and/or direct or indirect customers).  Unauthorized use or disclosure of the information contained herein is prohibited.  You agree to indemnify MediaTek 
for any loss or damages suffered by MediaTek for Your unauthorized use or disclosure of this Document, in whole or in part. 
 
MediaTek and its licensors retain titles and all ownership rights in and to this Document and no license (express or implied, by estoppels or otherwise) to 
any intellectual propriety rights is granted hereunder .  This Document is subject to change without further notification.  MediaTek does not assume any 
responsibility arising out of or in connection with any use of, or reliance on, this Document, and specifically disclaims any and all liability, including, 
without limitation, consequential or incidental damages. 
 
THIS DOCUMENT AND ANY OTHER MATERIALS OR TECHNICAL SUPPORT PROVIDED BY MEDIATEK IN CONNECTION WITH THIS DOCUMENT , IF ANY , ARE 
PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY , OR OTHERWISE.  MEDIATEK SPECIFICALLY DISCLAIMS 
ALL WARRANTIES OF MERCHANTABILITY , NON-INFRINGEMENT, FITNESS FOR A PARTICULAR PURPOSE, COMPLETENESS OR ACCURACY AND ALL 
WARRANTIES ARISING OUT OF TRADE USAGE OR OUT OF A COURSE OF DEALING OR COURSE OF PERFORMANCE.  MEDIATEK SHALL NOT BE RESPONSIBLE 
FOR ANY MEDIATEK DELIVERABLES MADE TO MEET YOUR SPECIFICATIONS OR TO CONFORM TO A PARTICULAR STANDARD OR OPEN FORUM. 
 
Without limiting the generality of the foregoing, MediaTek makes no warranty, representation or guarantee regarding the suitability of its products for 
any particular purpose, nor does MediaTek assume any liability arising out of the application or use of any product, circuit or software.  You agree that 
You are solely responsible for the designing, validating and testing Your product incorporating MediaTek’s product and ensure such product meets 
applicable standards and any safety, security or other requirements. 
 
The above T&C and all acts in connection with the T&C or this Document shall be governed, construed and interpreted in accordance with the laws of 
Taiwan, without giving effect to the principles of conflicts of law. 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0278 MT8676_Yocto_Audio_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Audio_User_Manual_V1.0.pdf

SHA-256：10a842dbdf313a2720f4715e1cbcfe1a1b26fa312fb387764361cdff54a168e4

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0278.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto Audio 
User Manual 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Audio 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Qimei Liu Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto Audio 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 Audio ········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 Abbreviation·················································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
 Hardware ······················································································································································ 4 
 Software ························································································································································ 8 
 Audio Driver ·················································································································································· 8 
1.3 Configuration/Customization Guideline ················································································································· 13 
 Kernel DTS ··················································································································································· 13 
 Audio Device Configuration ························································································································ 14 
1.4 Frequently Asked Questions/Troubleshooting ······································································································· 15 
 How to Test Audio Driver? ·························································································································· 15 
 How to Enable Audio Log? ·························································································································· 16 
Exhibit 1 Terms and Conditions ········································································································································ 17 
 
 
List of Figures 
Figure 1-1. Audio system ···························································································································································· 5 
Figure 1-2. AFE block diagram ···················································································································································· 7 
Figure 1-3. Yocto audio system ·················································································································································· 8 
Figure 1-4. Audio driver architecture ········································································································································· 9 
Figure 1-5. Audio driver components······································································································································· 10 
Figure 1-6. Audio devices ························································································································································· 10 
Figure 1-7. Audio CPU DAI ························································································································································ 11 
Figure 1-8. DPCM devices························································································································································· 12 
Figure 1-9. Playback & capture devices ···································································································································· 13 
Figure 1-10. MTK Audio DTS ····················································································································································· 14 
Figure 1-11. Audio path for playing music ······························································································································· 15 
 
List of Tables 
Table 1-1. Abbreviation ······························································································································································ 4 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto Audio 
User Manual 
Confidential B 
1 Audio 
1.1 Overview 
 Brief Introduction 
This chapter introduces the hardware, software, and basic functionalities of the MT8676 Audio system. 
 
 Abbreviation 
Table 1-1. Abbreviation 
Abbreviation Explanation 
AFE Audio Front End 
DAI Digital Audio Interface 
DTS Device Tree Source 
I2S Integrated Interchip Sound (I2S) is a digital audio transmission standard defined by Philips in 1986 and 
revised in 1996. It is used for the transmission of digital audio data between devices. 
PCM Pulse Code Modulation (PCM) is a method used to digitally represent analog signals. In PCM, the 
amplitude of the analog signal is sampled at uniform intervals, and each sample is quantized to the 
nearest value within a range of digital steps. This process converts the analog signal into a digital format 
that can be easily transmitted and processed by digital systems. 
TDM Time Division Multiplexing (TDM) is a method of transmitting and receiving multiple signals over a 
common communication channel by dividing the time frame into several time slots. Each signal is 
assigned a specific time slot during which it can transmit its data. This allows multiple signals to share 
the same transmission medium while maintaining their individual data integrity. 
 
1.2 Architecture/Process Overview 
 Hardware 
The overall hardware composition of the MT8676 Audio System is illustrated in Figure 1-1: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
Figure 1-1. Audio system 
 
The audio hardware includes external hardware interfaces, AFE_Interconn, AFE_Tinyconn, and AFE_Memif, as well as the 
backend Codec 6338. The external hardware interfaces are as follows: 
 
• Master I2S output *5 
• Master I2S input *4 
• Master TDM output *1 
• Master TDM input *1 
• Slave PCM interface for internal modem *1 
• Proprietary audio interface for MTK PMIC codec *1 
• Slave I2S input interface with SRC for connsys FM *1 
• PDM interface for DMIC *2 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
 
Figure 1-2. AFE block diagram 
 
The internal AFE hardware interfaces can be categorized into two types: 
 
• Memory Interfaces:  
This is known as AFE_memif, this part functions similarly to DMA. It is primarily responsible for transferring PCM data from 
upper-layer applications to the specified downlink (DL) port for playback or capturing PCM data from the specified uplink 
(UL) port and transmitting it to upper-layer applications. 
 
• Connect Interfaces: 
There are two types: AFE_interconn and AFE_tiny_conn. The main difference between them is the supported data bit 
width. AFE_interconn supports up to 24-bit data, while AFE_tiny_conn can support up to 32-bit data. Both serve the same 
purpose, which is to connect the DL or UL of Memif with backend hardware interfaces like I2S/TDM, creating an I/O path 
for data transmission with external devices. For playback, this means sending DL data to the specified output port (e.g., 
I2S/TDM out). Conversely, for capture, it means connecting the UL interface to the specified input port (e.g., I2S/TDM in) to 
capture data from external devices. Additionally, HW SRC, gain control, and mix functions can be added to the I/O path. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 Software 
The software architecture of the MT8676 Yocto Audio System is illustrated in Figure 1-3: 
 
 
Figure 1-3. Yocto audio system 
 
The ALSA Lib module is the native audio module for Linux. Detailed information about this module can be found online, so 
it will not be elaborated upon here. This document primarily focuses on explaining the proprietary MTK Audio Driver. 
 
 Audio Driver 
Audio driver is based on the standard ALSA ASoC architecture: 
 
• Machine: Refers to a specific machine or development board. It is evident that the Machine is almost non-reusable, as 
the hardware implementation on each Machine can be different—different CPUs, different Codecs, and different audio 
input and output devices. The Machine provides a carrier for the CPU, Codec, and input/output devices. The MT8676 
reference board is one such Machine, and a customized development board is also a Machine. 
• Platform: Generally, refers to a specific SoC platform, such as the MT8676. Audio-related components usually include 
the clock, DMA, I2S, PCM, etc., within the SoC. Once the SoC is specified, we can assume it will have a corresponding 
Platform, which is related only to the SoC and not to the Machine. The AFE mentioned above belongs to the Platform. 
• Codec: Generally, refers to I2S/TDM interfaces, D/A, A/D, mixers, Power Amplifiers (PA), etc. It usually includes multiple 
inputs (Mic, Line-in, I2S, PCM) and multiple outputs (headphones, speakers, earpiece, Line-out). The Codec is also a 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto Audio 
User Manual 
Confidential B 
reusable component; the same Codec can be used by different Machines. The Codec corresponding to the MT8676 
reference board is the PMIC 6338, and the external DSP used by customers is also considered as a Codec. 
 
 
Figure 1-4. Audio driver architecture 
 
Corresponding drivers for the above three components: 
• Machine driver: Responsible for handling machine-specific controls and audio events (for example, turning on an 
amplifier when playing audio). The Platform and Codec drivers cannot work independently; they must be combined by 
the Machine driver to complete the audio processing of the entire device. 
• Platform driver: Contains the configuration and control of the audio DMA and audio interfaces (I2S, PCM, etc.) for the 
SoC platform. It must not include any code related to the board or machine. 
• Codec driver: A key design principle in ASoC is that the Codec driver must be platform-independent. It includes some 
audio controls, audio interfaces, definitions for DAMP (Dynamic Audio Power Management), and certain Codec IO 
functions. To ensure hardware independence, any platform-specific and machine-specific code must be moved to the 
Platform and Machine drivers. 
The Audio Driver modules corresponding to the MT8676 platform are shown as Figure 1-5: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
Figure 1-5. Audio driver components 
 
These components of the Audio Driver are initialized sequentially during the Kernel initialization process after the system 
starts. Once the system startup is complete, you can view the corresponding device information in the adb shell console 
interface: 
 
Figure 1-6. Audio devices 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
According to the DPCM architecture, the ALSA driver virtualizes memory interfaces as Front End (FE) devices and external 
hardware interfaces as Back End (BE) devices. FE and BE are connected through connection interfaces to form an audio 
path, which can be used for audio data transmission. Since both FE and BE are audio interfaces within the MT8675 SoC, the 
ALSA Driver treats them uniformly as CPU DAI. The further backend PMIC or external DSP is considered the Codec DAI. 
 
 
Figure 1-7. Audio CPU DAI 
 
The ALSA driver constructs a series of Control/Mixer APIs to control the DAI and establish the audio path. The devices used 
to control these APIs are known as Control devices. Similarly, the devices used to control specific FEs and read/write data 
are known as PCM devices. 
 
Figure 1-8 shows the Control device nodes and PCM device nodes for the MT8676 platform: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
Figure 1-8. DPCM devices 
 
The correspondence between PCM nodes and AFE is illustrated in Figure 1-9: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
Figure 1-9. Playback & capture devices 
 
In playback scenarios, such as playing music, the application layer writes audio data to the Playback PCM node, which is 
then transmitted to the backend speakers or amplifiers to produce sound. Conversely, in capture scenarios, such as 
recording, the application layer reads audio data from the Capture PCM node, obtaining the audio data input from external 
devices like microphones. 
 
1.3 Configuration/Customization Guideline 
 Kernel DTS 
The configuration of the ALSA driver is primarily completed in the DTS (Device Tree Source) files, which include the 
configuration of device nodes for drivers related to Audio, such as Machine, Platform, and Codec. These configurations 
encompass register addresses, memory addresses, interrupt numbers, and other parameters. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 Yocto Audio 
User Manual 
Confidential B 
The DTS configuration files for the MT8676 are located at: 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/. The main 
configuration files are as follows: 
mt6897.dts 
auto8676p1_64.dts 
 
The corresponding configurations for Machine, Platform, and Codec are shown as Figure 1-10: 
 
 
Figure 1-10. MTK Audio DTS 
 
When the Kernel initializes, the various components of the Audio Driver can obtain the necessary parameters from the DTS 
configuration, such as register addresses, memory addresses, clock configurations, and GPIO settings. During the use of the 
Audio Driver, these parameters are used to configure the audio hardware and establish the audio path. therefore, when 
developing on the customer platform, it is essential to customize the corresponding DTS configuration according to the 
actual hardware conditions. 
 
 Audio Device Configuration 
Before an Audio APP can perform read/write operations on a specific PCM device node, it needs to configure some 
mixer/control settings to open the audio path or enable certain audio hardware interfaces. 
For example, to play music on the MT8676 reference board, the following steps are used to establish the audio path 
through the Playback_2 node, connecting DL2 → ADDA_DL → PMIC 6338 → Speaker: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
Figure 1-11. Audio path for playing music 
 
The kcontrol settings are as follows: 
• Connects DL2 to PMIC 
'ADDA_DL_CH1 DL2_CH1' 1 
'ADDA_DL_CH2 DL2_CH2' 1 
'ADDA_DL_CH3 DL2_CH1' 1 
'ADDA_DL_CH4 DL2_CH2' 1 
 
• Connects PMIC to Speaker: 
'HPL Mux'  'Audio Playback' 
'HPR Mux'  'Audio Playback' 
 
1.4 Frequently Asked Questions/Troubleshooting 
 How to Test Audio Driver? 
When the Audio Driver is ready, you can use the built-in Yocto tools aplay, arecord, and amixer for manual testing. amixer is 
used to connect the audio path, aplay is used for playing sound, and arecord is used for recording from the MIC. For 
example, to play audio through Playback_2, the command line is as follows: 
 
adb shell 
amixer cset name='ADDA_DL_CH1 DL2_CH1' 1 
amixer cset name='ADDA_DL_CH2 DL2_CH2' 1 
amixer cset name='ADDA_DL_CH3 DL2_CH1' 1 
amixer cset name='ADDA_DL_CH4 DL2_CH2' 1 
amixer cset name='HPL Mux'  'Audio Playback' 
amixer cset name='HPR Mux'  'Audio Playback' 
aplay -Dhw:0,2 /tmp/test_music.wav & 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 How to Enable Audio Log? 
When developing or troubleshooting bugs, you need to enable the Audio Driver log to pinpoint issues. 
Enable the Audio Driver log: echo 7 > /proc/sys/kernel/printk 
After setting this, you can use adb shell logcat to view the output logs. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Yocto Audio 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0279 MT8676_Yocto_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf

SHA-256：0a8a2336080c09009f28bc5399bdb384e3ed1650a84c58ec6c0a93bf5351bb0b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0279.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2025-06-12
MT8676 Yocto Camera Sensor Driver 
JSON Arch User Manual 
JSON Arch 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2025-06-12 Jianmin Zhou Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
1 Camera Driver JSON Arch ··········································································································································· 4 
1.1 Overview ·································································································································································· 4 
1.2 Configuration/Customization Guideline ··················································································································· 4 
 How to Add a New Sensor ···························································································································· 4 
 How to Add a New Tuning File ···················································································································· 26 
Exhibit 1 Terms and Conditions ········································································································································ 28 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
1 Camera Driver JSON Arch 
1.1 Overview 
This chapter primarily discusses the sensor porting method for the MT8676 camera post decoupling Refactor, along with 
the debugging approach and considerations for related issues. 
For the design architecture and principles of camera refactor, please refer to the following document: MT8678 JSON Design 
EN.pptx. 
 
1.2 Configuration/Customization Guideline 
This section primarily discusses the porting guide for the camera refactor decoupling architecture. 
 
 How to Add a New Sensor 
JSON conversion only supports YUV sensors. 
1.2.1.1 Porting File List 
Yocto: 
• Kernel Space 
– \src\kernel\linux\v6.1_mt8676\co_device_modules\arch\arm64\boot\dts\mediatek\cust_mt8
676_camera_v4l2.dtsi 
– \src\kernel\modules\mt8676\camera\imgsensor\src-v4l2\$(sensor_name).json 
• User Space 
– \src\multimedia\camera-hal\mt8676\mtkcam-
core\external\firmware\sensor\$(sensor_name).bin 
– \src\multimedia\camera-hal\mt8676\mtkcam-
core\external\firmware\camera\metadata\$(sensor_name)\$(sensor_name).json 
– \src\multimedia\camera-hal\mt8676\hardware\mtkcam-
core\external\firmware\camera\tuning\$(sensor_name)_tuning_param.json 
• Config Files 
– \src\meta\meta-mediatek-mt8676\recipes-multimedia\mtkcam-mt8676\mtkcam-mt8676.bb 
 
1.2.1.2 Add Sensor Firmware Files to the Kernel 
Yocto： 
• Kernel Space 
– \src\kernel\modules\mt8676\camera\imgsensor\src-v4l2 
• User Space 
– \src\multimedia\camera-hal\mt8676\mtkcam-
core\external\firmware\sensor\$(sensor_name).bin 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
$(sensor_name).json file is generated by a dedicated tool: Camera Firmware JSON Generator. This tool is a web page 
interface where developers can fill in the required form content according to the prompts on the page, and finally click 
save to generate $(sensor_name).json file. 
The meaning of the parameters in the web tool form can be found in the document MT8678 JSON Design EN.ppt. 
 
 
 
The $(sensor_name).json file that is generated needs to be saved to the 
\src\kernel\modules\mt8676\camera\imgsensor\src-v4l2\ directory. 
 
 
Execute the command “python3 gen_sensor_firmware.py ./sensor_name.json” in the src-v4l2/ directory. 
 
 
 
After the successful execution of the script, a file named sensor_name.bin is generated in the src-v4l2/ directory. 
 
 
The generated $(sensor_name).bin binary file can be pushed to the /vendor/firmware/sensor/ directory on the 
development board using adb. Subsequently, the development board can be restarted. 
Click “载入 JSON” to load existing sensor JSON files for modification. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
Note: By pushing the firmware.bin file to the /vendor/firmware/sensor/ directory on the development board 
using adb, firmware debugging can be facilitated without the need to rebuild the driver source code repeatedly. 
 
After confirming that the firmware does not require any further modifications, save the JSON file. Subsequently, during the 
next full build process, all firmware files will be compiled into the image. Following the complete burning process, the 
development board system will include all firmware.bin files. 
 
1.2.1.3 Modify dts Files 
Yocto: 
\src\kernel\linux\v6.1_mt8676\co_device_modules\arch\arm64\boot\dts\mediatek\cust_mt8676_cam
era_v4l2.dtsi 
 
By analyzing the hardware schematic, the current sensor’s connection to a specific I2C can be identified. Then, sensor 
configuration should be added under the corresponding I2C, as illustrated below: 
• Added Sensor0 
 
Note: If the sensor needs to be changed in the legacy method, then a new attribute needs to be added under the sensor 
node: mediatek, legacy-search; 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
Concerning the correlation between seninf and sensor, please refer to the diagram below. The value of csi-port in 
seninf_top represents the actual hardware-connected csi-port. 
 
 
The part corresponding to the configuration in dts is as follows. It is necessary to refer to the sensor’s specification sheet 
for configuring the power-on sequence. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
Additional note: For the fixed regulator, para1 and para2 need to be configured the same as in the dts, with identical 
values. 
The format of pw_seq in the most recent version of the code max96712mipiyuv_sensor.c is as follows: 
 
 
 
1.2.1.4 Add New Meta Files 
Copy a metadata template folder (\src\multimedia\camera-hal\mt8676\mtkcam-
core\external\firmware\metadata\max96712_mipi_yuv), and change the folder name to the sensor name 
currently being ported (e.g., xxxx_mipi_yuv). 
Modify the sensor name in the names of all JSON files under the xxxx_mipi_yuv folder and also in these files to the nam
e of the sensor currently being ported. Ensure that the letter casing matches the format used in the template file. 
Take max96712_mipi_yuv as an example. The folder names in all JSON files containing max96712_mipi_yuv or 
MAX96712_MIPI_YUV need to be changed to the name of the sensor currently being ported. 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
Note: 
• A sensor has several different types of JSON files (all with the suffix _SENSOR_DRVNAME_xxx.json), and each JSON file needs to be 
modified in the manner described above. 
• If it is a raw or another type of sensor, you need to copy the corresponding sensor type’s JSON and modify it based on that. 
• If you need to modify the resolution, you can refer to the following JSON and change it to the new resolution. 
 
 
 
After the modification is completed, the xxxx_mipi_yuv/ folder should be pushed to the 
/vendor/firmware/camera/metadata/ folder on the development board using adb push. The system should then be 
rebooted. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
After confirming that no more modifications are needed for the metadata, place the respective metadata file in the 
\src\multimedia\camera-hal\mt8676\mtkcam-core\external\firmware\metadata\max96712_mipi_yuv 
directory. Subsequently, execute the full build command to build all firmware files into the image. Following complete 
burning, all metadata files will be included in the development board system. 
 
Note: If errors similar to the following occur during the full build process, it indicates differences in native basic tags between different 
versions. During version migration, some tags will be synchronized to mtk_metadata_tag.h, and therefore a script will be needed to 
update MapStringToEnum.cpp. 
 
mtkcam-core/external/MapStringToEnum.cpp:738:41: error: use of undeclared identifier 
'MTK_MFNR_FEA                                       TURE_STORE_BSS2META'; did you mean 
'MTK_MFNR_FEATURE_START'? 
{"MTK_MFNR_FEATURE_STORE_BSS2META", MTK_MFNR_FEATURE_STORE_BSS2META}, 
^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
 
Update the script execution method: Go to the mtkcam-core/external/ directory, and execute python MapStringTo
Enum.py.. 
The full build command should be executed again. 
 
1.2.1.5 Configure Sensor Format 
Modification should be made in the web interface Camera Firmware JSON Generator. 
Configure UYVY or YUYV according to the format output by the bridge: 
 
 
Locate all instances where sensor_output_dataformat is configured and change them to the actual format. 
 
1.2.1.6 Configure Mode Structure 
Modification should be made in the web interface Camera Firmware JSON Generator. 
The relevant parameters of the setting are to be confirmed with the vendor and filled into the structure. 
 
Pclk->pixel clock, Unit: Hz 
Linelength->HTS 
Framelength->VTS 
Linelength × framelength = pclk 
Grabwindow_width -> camera size width (This value is not available on MT8676 and will be filled in the solution section 
later). 
Grabwindow_height -> camera size height (This value is not available on MT8676 and will be filled in the solution section 
later). 
Mipi_pixel_rate-> mipi datarate × lane_number/bitdepth, YUV bitdepth = 16 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
The following diagram borrows an explanation of winsize info from a previous version to describe the meanings of each 
field. 
 
 
Limitation: Full size (4:3) or full size (16:9) width and height need 4x alignment. 
 
The size (width and height) of the sensor output should match the size of Grabwindow_width/Grabwindow_height. 
 
Grab window request: 
1. The width must be a multiple of 16 and the height must be a multiple of 4. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
2. The viewing angles are consistent at the same ratio; the ratios of 4:3 and 16:9 require that the window output by 
the sensor ensures that the horizontal direction is consistent with the full size. 
3. The grab window setting recommendations are consistent with the window output by the sensor. In special 
cases: grabwindow width(height) ≤ sensor output width(height) - startx(y) 
 
1.2.1.7 Configure static_ctx 
Modification should be made in the web interface Camera Firmware JSON Generator. 
1. The sensor_id field below is filled with the corresponding sensor ID. 
2. The i2c_add_table below generally only needs to be configured with 0x52, which is the actual address of the 
deserializer. 
3. Configure the resolution; this is the value of grabwindow mentioned earlier. 
4. Configure mipi_lane_num, which represents the number of MIPI lanes here. 
 
 
5. cam_type is filled according to the type of module scene. If it is a single sensor, you can fill in 
MTK_SENSOR_TYPE_SINGLE, which has the following values to choose: 
 
– SENSOR_TYPE_COMB_AVM represents the combined frame AVM. 
– SENSOR_TYPE_MULTI represents multicam. 
– SENSOR_TYPE_MULTI_ASYNC Indicates a multicam camera with independent VC channels. 
– SENSOR_TYPE_NON_COMB_AVM represents non-combined AVM. 
 
6. sensor_output_dataformat represents the format of the data output by the module, filled in the actual format. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
Regarding the configuration of multicam group info, refer to the following configuration in the JSON web tool: 
 
 
 
The format in the final JSON file will include sensor ID and VC information from one master sensor and four slave sensors in 
their respective DTS files. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
Regarding the configuration of multicam_group_info, you can refer to the following configuration: 
You need to fill in the number of VC channels, and you need to fill in four channels. If it is a multicam with only two or 
three drivers, you also need to fill in the information of 4 channels. For channels that are not used, just fill in 0 for 
vc_data_type. 
 
 
1.2.1.8 Configure VC Information 
Modification should be made in the web interface Camera Firmware JSON Generator. 
A single VC can be configured as follows: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
If there are multiple VCs, primarily modify the channel and user_data_desc. 
 
1.2.1.9 Configure to Get the Sensor ID 
Modification should be made in the web interface Camera Firmware JSON Generator. 
  
 
1.2.1.10 Configure Sensor Init 
Modification should be made in the web interface Camera Firmware JSON Generator. 
The primary task involves configuring the module’s settings, which necessitates debugging and generation by both the 
customer and the vendor. 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
1.2.1.11 Configure get_sensor_usage 
Modification should be made in the web interface Camera Firmware JSON Generator. 
 
 
Its values can be selected as follows: COMB represents combined frame AVM; MUTI represents multicam; NONCOMB 
represents non-combined frame AVM; MUTICAM_SYNC represents a multi cam camera where the slave is independent and 
does not affect each other, and for a single sensor configuration, it should be set as SINGLE. 
 
 
1.2.1.12 Configure Streaming Control 
Modify in the web interface Camera Firmware JSON Generator. 
All initialization settings should be placed within the sensor_init() function. The functions for enabling and disabling 
MIPI should be placed in the streaming_control() function. 
 
 
1.2.1.13 subdrv_static_ctx Structure Member Analysis 
Member Meaning 
sensor_id Sensor ID define in kd_imgsensor.h. 
reg_addr_sensor_id Sensor register address where sensor ID is read. Up to 3 bytes.  
i2c_addr_table I2C write ID, end in 0xff, 4 for maximum. Ex. i2c_addr_table = {0x20, 0x6e, 0xff},. 
eeprom_info The address of eeprom_info_struct. If there is no eeprom device, set to 0. 
eeprom_num Array size of the eeprom_info_struct. If there is no eeprom device, set to 0.  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
Member Meaning 
resolution Full pixel size of sensor output. 
mirror Set IMAGE_HV_MIRROR if the sensor orientation is 180 degrees difference from 
module orientation. 
mclk Overwrite MCLK frequency (MHz) 
isp_driving_current Overwrite MCLK driving current (mA) 
sensor_interface_type Data output interface type. Set default MIPI. 
mipi_sensor_type C-PHY or D-PHY 
mipi_lane_num How many lanes/trios of MIPI-PHY 
ob_pedestal OB offset. General is 64. 
sensor_output_dataformat Bayer order, 4-cell order and SW/HW remo. 
ana_gain_def Default analog gain. Set 4x. 1024base. 
ana_gain_min Minimum analog gain. 1024base. 
ana_gain_max Maximum analog gain. 1024base. 
ana_gain_type Sony: type 0;       OV: type 1;       Samsung: type 2;       Hinyx: type 3;       GC: type 4  
ana_gain_step Minimum valid step of analog gain. 1024base. 
ana_gain_table Use valid analog gain table. Remove unsuitable value which is not linearity. 1024base. 
ana_gain_table_size Size of analog gain table 
min_gain_iso Set minimum ISO 100. 
exposure_def Default exposure line. Set 0x3D0. 
exposure_min Minimum exposure line 
exposure_max Maximum exposure line 
exposure_step Minimum valid step of exposure line 
exposure_margin Maximum margin of exposure line 
frame_length_max Maximum framelength 
ae_effective_frame AE effective frame 
frame_time_delay_frame The frame “frame length” setting takes effect. Sony sensor is filled in 3; other sensors 
are filled in 2. 
start_exposure_offset Parameter tuned in CTS sensor fusion test. 
pdaf_type Reference enum IMGSENSOR_PDAF_SUPPORT_TYPE_ENUM 
hdr_type Reference enum IMGSENSOR_HDR_SUPPORT_TYPE_ENUM 
seamless_switch_support If sensor supports seamless switch, set 1 to enable seamless switch function.  
temperature_support Set to 1 if sensor supports temperature sensor readout. 
g_temp Implement get temperature function. 
g_gain2reg Implement analog gain to register mapping rule. 
s_gph Implement set enable/disable group hold function. 
s_cali Implement the function to write data from eeprom_info_struct to sensor (ex: QSC, 
cross-talk, …) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
Member Meaning 
Member Meaning 
reg_addr_stream Sensor register address where streaming on/off is controlled. 
reg_addr_mirror_flip Sensor register address where mirror/flip on/off is controlled. No use to set to 0.  
reg_addr_exposure Sensor register address where exposure line is set. Up to 3 channels of exposure. Up 
to 3 bytes. 
long_exposure_support Set to 1 if sensor supports long exposure left shift function. 
reg_addr_exposure_lshift Sensor register address where long exposure left shift is set. 
reg_addr_ana_gain Sensor register address where analog gain is set. Up to 3 chann els of exposure. Up to 
3 bytes. 
reg_addr_frame_length Sensor register address where framelength is set.  
reg_addr_temp_en If “temperature_support” is set to 1. Sensor register address where temperature 
sensor on/off is controlled. 
reg_addr_temp_read If “temperature_support” is set to 1. Sensor register address where temperature 
output is read. 
reg_addr_auto_extend For Sony sensor, sensor register address where auto extend function enable/disable is 
controlled. 
reg_addr_frame_count For Samsung sensor, sensor register address where frame count is read to determine 
if sensor stream is off or not. 
reg_addr_fast_mode For Sony sensor, sensor register address where fast mode on/off is controlled.  
init_setting_table The address of sensor initial setting table 
init_setting_len Array size of the sensor initial setting table 
mode The address of subdrv_mode_struct 
sensor_mode_num Array size of the subdrv_mode_struct 
list The address of customized feature control list 
list_len Array size of the customized feature control list 
checksum_value The calculated value when Test Pattern output, for Camera Auto Test  
 
1.2.1.14 Sensor Mode Setting 
Subdrv_mode_struct mode_struct[] structure array is used to store data configurations for different Sensor Modes. 
The following example using “preview” illustrates some fields that customers need to modify. For a YUV sensor, the sensor 
mode and preview are generally identical. However, for a raw sensor, there may be differences based on specific 
requirements for configuration. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
The following is the explanation in .c code.  
 
 
1.2.1.15 Driver Functions 
 Driver Operation Function List 
The list of driver functions is as follows: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
In the code for the imgsensor starting with the adapter name, it is often called to the driver code through the 
subdrv_call method, which is the function list above, for example: 
 
 
The call above will be called to the get_sensor_id in the function list above. 
There are many functions in the list above that start with “common”. This section utilizes a common processing flow. It 
does not need to be specifically implemented in the sensor driver. Further elaboration will not be provided below. 
The following is a description of the get_imgsensor_id and open functions that your company may change. 
 
 get_imgsensor_id Function 
During startup, the search sensor process retrieves the ID by utilizing the get_imgsensor_id function. If the retrieval of 
the ID is successful, the UI will display the camera APP’s icon. 
The primary purpose of the following function is to acquire the sensor ID and determine whether there is a link to the 
module. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
 Open Function 
This function will be called every time when the camera is accessed. 
Read sensor_id to verify if the I2C communication is functioning properly. 
The sensor_init function is called to initialize some variables in the ctx structure. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
Note: 
1. Explanation about resolution 
Due to different scenarios, the size of the image provided to the user space and the size of VC actually received by seninf 
are different. 
So there will be two resolutions in the driver, and customers can use the driver of max96712isx, a non-combined frame 
AVM, as an example. 
The following macros should be searched for to compare configurations. 
 
 
2. Regarding the part of GPIO power supply in DTS, you can also choose the regulator packaging method. 
The usage is as follows. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
 
3. UT test command 
C:\Users>adb shell sentest_v4l2    //just search sensor, not streaming 
 
[show_Sensors]sensorNum 2 
[show_Sensors]name:SENSOR_DRVNAME_OV05A20_MIPI_RAW type:0 
[show_Sensors]index:0, SensorDevIdx:1 
[show_Sensors]name:SENSOR_DRVNAME_IMX576_MIPI_RAW type:0 
[show_Sensors]index:1, SensorDevIdx:2 
[main]Param: 1 <sensorDev> <scenario> <fps> 
[main]<sensorDev> : main(1), Sub(2), Main2(4), sub2(8), Main3(16) 
[main]<scenario>  : Pre(0), Cap(1), VD(2), slim1(3), slim2(4) 
 
The output shows that sensorNum is not 0 and display the specific name of the sensor, indicating the search sensor is 
successful. Then test the output of the sensor. 
 
 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
C:\Users> adb shell sentest_v4l2  1 0     //search sensor, then open main (1) sensor 
preview (0) 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
4. The command to check seninf status is as follows. Once the results are found, they can be sent to MediaTek for 
confirmation. 
 
 
5. Access max96712 directly via I2C commands 
The following is the value read from register 0x108. 
echo 0x8a0  0x84> /sys/devices/platform/soc/13b30000.i2c/i2c-8/8-0052/debug_i2c_ops 
 
 
The folloiwng is 0x8a0 register written as 0x84. 
echo 0x52 0x8a0 0x84> /sys/devices/platform/11cc0000.i2c/i2c-8/8-0052/debug_i2c_ops 
 
6. The command to enable sensor driver log 
echo 1 > /sys/module/imgsensor/parameters/sensor_debug 
 
7. If the serial port log printing stops, open the UART command: 
adb shell setprop persist.vendor.uartconsole.enable 1 
 
 How to Add a New Tuning File 
Design principles reference: MT8678 JSON Design EN.pptx 
Add method: When porting a new sensor, in the tuning section, simply add a 
${SENSOR_DRIVER_NAME}_tuning_param.json file. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 27 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
Note: 
• If you need to build into the image, place the JSON file in the \src\multimedia\camera-hal\mt8676\mtkcam-coremtkcam-
core\external\firmware\camera\tuning directory 
• If you need to add a sensor’s tuning JSON file separately, use adb push to push the tuning JSON file to the 
vendor/firmware/camera/tuning/ directory 
 
${SENSOR_DRIVER_NAME}_tuning_param.json: Copy an existing template and modify the name of 
sensor_driver_name. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 28 
MT8676 Yocto Camera Sensor Driver JSON Arch 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0280 MT8676_Yocto_Camera_Driver_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Camera_Driver_User_Manual_V1.1.pdf

SHA-256：3bd2f904e632b94eb9bdfdf1278eb700d8fbdbcdc993de502352e7d7d8616408

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0280.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-10-15
MT8676 Yocto Camera Driver 
User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Jianmin Zhou Official release 
1.1 2024-10-15 Jianmin Zhou Added multicam configuration info into Section 1.3.1.9 
Configure static_ctx 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
1 Camera driver ···························································································································································· 4 
1.1 Overview ·································································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
1.3 Configuration/Customization Guideline ··················································································································· 4 
 How to Add a New Sensor ···························································································································· 4 
1.3.1.1 Porting File List ································································································································ 5 
1.3.1.2 Modify Config Files ························································································································· 5 
1.3.1.3 Add Sensor Files to Kernel ·············································································································· 5 
1.3.1.4 How to Add Sensor ID and Sensor Name ························································································ 5 
1.3.1.5 Modify dts Files ······························································································································· 6 
1.3.1.6 Add New Meta Files ························································································································ 8 
1.3.1.7 Configure Sensor Format ················································································································ 8 
1.3.1.8 Configure modestruct ····················································································································· 8 
1.3.1.9 Configure static_ctx ······················································································································ 10 
1.3.1.10 Configure VC Info ·························································································································· 11 
1.3.1.11 Configure Get Sensor ID Function ································································································· 12 
1.3.1.12 Configure Sensor Init Function······································································································ 12 
1.3.1.13 Configure get_sensor_usage Function ·························································································· 13 
1.3.1.14 Sensor Mode Setting ····················································································································· 15 
1.3.1.15 Driver Functions ···························································································································· 16 
Exhibit 1 Terms and Conditions ········································································································································ 23 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
1 Camera driver 
1.1 Overview 
This section mainly introduces the MT8676 camera porting method and debugging methods and ideas for related issues. 
 
1.2 Architecture/Process Overview 
Camera driver is mainly divided into two parts: user space and kernel space. Both sides pass parameters through IOCTL. 
Raw sensor metadata, etc. are placed in user space; sensor related settings and power control are placed in kernel space. 
 
 
 
1.3 Configuration/Customization Guideline 
This section mainly introduces the Camera driver porting guide. 
 
 How to Add a New Sensor 
This part is basically the same for YUV and raw sensor steps. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
1.3.1.1 Porting File List 
• Config Files 
– \src\kernel\linux\ v6.1_mt8676\ 
co_device_module\arch\arm64\configs\auto8676p1_64_defconfig 
• Kernel Space 
– \src\kernel\linux\v6.1_mt8676\co_device_module\drivers\misc\mediatek\imgsensor\inc\
kd_imgsensor.h 
– \src\kernel\linux\v6.1_mt8676\co_device_module\arch\arm64\boot\dts\mediatek\cust_mt
8676_camera_v4l2.dtsi 
– \src\kernel\modules\mt8676\camera\imgsensor\src-v4l2\ 
• User Space 
– \src\multimedia\mtkcam-mt8676\mtkcam-utils\kernel-headers\mediatek\kd_imgsensor.h 
– \src\multimedia\camera-hal\mt8676\custom\common\hal\imgsensor_metadata\sensor\ 
– \src\multimedia\camera-hal\mt8676\custom\mt6897\hal\imgsensor_metadata\ 
 
1.3.1.2 Modify Config Files 
• \src\kernel\linux\ 
v6.1_mt8676\co_device_module\arch\arm64\configs\auto8676p1_64_defconfig 
– CONFIG_CUSTOM_KERNEL_IMGSENSOR = “xxxx_mipi_raw  xxxx_mipi_raw xxxx_mipi_yuv” 
 
Add the new sensor name above. 
 
1.3.1.3 Add Sensor Files to Kernel 
• \src\kernel\modules\mt8676\camera\imgsensor\src-v4l2\common\$CamDrv\ 
Refer to other sensors to add your own sensor driver directory in the above directory. For the naming format, refer to the 
figure below. 
 
 
 
1.3.1.4 How to Add Sensor ID and Sensor Name 
• \src\multimedia\mtkcam-mt8676\mtkcam-utils\kernel-headers\mediatek\kd_imgsensor.h 
• \src\kernel\linux\v6.1_mt8676\co_device_module\drivers\misc\mediatek\imgsensor\inc\kd_i
mgsensor.h 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
Make the following additions to the above two files. 
• Add sensor ID  
 
 
• Add sensor name 
 
 
1.3.1.5 Modify dts Files 
\src\kernel\linux\v6.1_mt8676\co_device_module\arch\arm64\boot\dts\mediatek\cust_mt8676_came
ra_v4l2.dtsi 
Find out which I2C the current sensor is connected to by analyzing the hardware schematic diagram, and then add the 
sensor configuration under the corresponding I2C, for example, as follows: 
• Added sensor0 
 
 
 
 
Regarding the relationship between seninf and sensor, you can refer to the figure below. The value of csi-port in seninf_top 
is the csi-port actually connected to the hardware.  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
 
The part corresponding to the configuration in dts is the power-on sequence as follows. This needs to be configured by 
referring to the power-on sequence in the sensor specification sheet. 
 
 
 
Take max96712 sensor as an example.  
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
1.3.1.6 Add New Meta Files 
Refer to the max96712_mipi_yuv file to modify and add. You can copy it directly, and then modify the file name and sensor 
name in the file. 
• \src\multimedia\camera-hal\mt8676\custom\common\hal\imgsensor_metadata\sensor\ 
• \src\multimedia\camera-hal\mt8676\custom\mt6897\hal\imgsensor_metadata\ 
 
If you need to add a new resolution, you can refer to the following code to add a new resolution. 
 
 
 
1.3.1.7 Configure Sensor Format 
Configure UYVY or YUYV according to the format output by the bridge: 
\src\kernel\modules\mt8676\camera\imgsensor\src-
v4l2\common\max96712_mipi_yuv\max96712mipiyuv_Sensor.c 
Find all places where sensor_output_dataformat is configured and change it to the actual format.
 
 
1.3.1.8 Configure modestruct  
Confirm with the sensor vendor that the relevant parameters of the setting are filled in the structure. 
 
Pclk->pixel clock, Unit Hz 
Linelength->HTS 
Framelength->VTS 
linelength × framelength × fps= pclk 
Grabwindow_width-> camera size width (There is no such value on mt8676. This value will be filled in in the solution 
position later.) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
Grabwindow_height->camera size height (There is no such value on mt8676. This value will be filled in in the solution 
position later.) 
Mipi_pixel_rate-> mipi datarate × lane_number/bitdepth, YUV bitdepth = 16 
 
 
The following figure borrows an explanation of winsize info from a previous version to describe the meaning of each field. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
Limitation: full size (4:3) or full size (16:9) width and height need 4x alignment 
 
Configure the sensor output size width and height, consistent with Grabwindow_width/Grabwindow_height size. 
Grab window request: 
 
1. The width must be a multiple of 16 and the height must be a multiple of 4. 
2. The viewing angles are consistent at the same ratio; the ratios of 4:3 and 16:9 require that the window output by the 
sensor ensures that the horizontal direction is consistent with the full size. 
3. The grab window setting recommendations are consistent with the window output by the sensor. In special cases: 
grabwindow width(height) ≤ sensor output width(height) - startx(y) 
 
1.3.1.9 Configure static_ctx 
1. The sensor_id field below is filled with the corresponding sensor id. 
2. The following i2c_add_table generally only configures 0x52, which is the address of the actual deserializer. 
3. Configure resolution, here is the value of grabwindow mentioned earlier. 
4. Configure mipi_lane_num, which represents the number of mipi lanes. 
5. cam_type is filled in according to the type of the module scene. If it is a single sensor, you can fill in 
MTK_SENSOR_TYPE_SINGLE. It has the following values you can choose:  
– SENSOR_TYPE_COMB_AVM means combined frame AVM 
– SENSOR_TYPE MUTI means multicam 
– SENSOR_TYPE_NON_COMB_AVM means non-combined frame avm 
If it is configured as SENSOR_TYPE_MUTI, you also need to configure group_info as follow: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
 
6. sensor_output_dataformat indicates the format of the data output by the module. Just fill in the actual format. 
 
 
 
1.3.1.10 Configure VC Info 
A single vc channel can be configured as follows: 
 
 
 
If you have multiple VC channels, you can configure it as follows, mainly modifying channel and user_data_desc. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
 
1.3.1.11 Configure Get Sensor ID Function 
  
 
1.3.1.12 Configure Sensor Init Function 
The following function mainly configures the settings of the module, which needs to be debugged and generated by the 
customer and vendor. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
1.3.1.13 Configure get_sensor_usage Function 
 
Its value can be selected from the following. COMB represents combined frames AVM, MUTI represents multicam, 
NONCOMB represents uncombined frame AVM,Single sensor is configured as SINGLE. 
 
 
 Streaming Control 
All initialization settings are placed in the sensor_init() function. MIPI enable and disable functions are placed in the 
streaming_control() function. 
 
 
 subdrv_static_ctx Structure Member Analysis 
Member Meaning 
sensor_id Sensor ID defined in kd_imgsensor.h.  
reg_addr_sensor_id Sensor register address where sensor ID is read. Up to 3 bytes. 
i2c_addr_table I2C write ID, end in 0xff, 4 for maximum. E.g., i2c_addr_table = {0x20, 0x6e, 0xff}, . 
eeprom_info The address of eeprom_info_struct. If there is no eeprom device, set to 0. 
eeprom_num Array size of the eeprom_info_struct. If there is no eeprom device, set to 0. 
Resolution Full pixel size of sensor output. 
mirror Set IMAGE_HV_MIRROR if the sensor orientation is 180 degrees difference from module 
orientation. 
mclk Overwrite MCLK frequency (MHz) 
isp_driving_current Overwrite MCLK driving current (mA) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
Member Meaning 
sensor_interface_type Data output interface type. Set default MIPI. 
mipi_sensor_type C-PHY or D-PHY. 
mipi_lane_num How many lanes/trios of MIPI-PHY. 
Ob_pedestal OB offset. General is 64. 
sensor_output_dataformat Bayer order, 4-cell order and SW/HW remo. 
ana_gain_def Default analog gain. Set 4x. 1024base. 
ana_gain_min Minimum analog gain. 1024base. 
ana_gain_max Maximum analog gain. 1024base. 
ana_gain_type Sony:type 0;       OV:type 1;       Samsung:type 2;       Hinyx:type 3;       GC:type 4 
ana_gain_step Minimum valid step of analog gain. 1024base. 
ana_gain_table Use valid analog gain table. Remove unsuitable value which is not linearity. 1024base. 
ana_gain_table_size Size of analog gain table. 
min_gain_iso Set minimum ISO 100. 
exposure_def Default exposure line. Set 0x3D0. 
exposure_min Minimum exposure line. 
exposure_max Maximum exposure line. 
exposure_step Minimum valid step of exposure line. 
exposure_margin Maximum margin of exposure line. 
frame_length_max Maximum framelength 
ae_effective_frame AE effective frame 
frame_time_delay_frame The frame “frame length” setting takes effect. Sony sensor filled in 3; other sensors filled in 2. 
start_exposure_offset Parameter tuned in CTS sensor fusion test. 
pdaf_type Reference enum IMGSENSOR_PDAF_SUPPORT_TYPE_ENUM. 
hdr_type Reference enum IMGSENSOR_HDR_SUPPORT_TYPE_ENUM. 
seamless_switch_support If sensor supports seamless switch, set 1 to enable seamless switch function. 
temperature_support Set to 1 if sensor supports temperature sensor readout. 
g_temp Implement get temperature function. 
g_gain2reg Implement analog gain to register mapping rule. 
s_gph Implement set enable/disable group hold function. 
s_cali Implement the function to write data from eeprom_info_struct to sensor (e.g., QSC, cross-
talk, …) 
reg_addr_stream Sensor register address where streaming on/off is controlled. 
Reg_addr_mirror_flip Sensor register address where mirror/flip on/off is controlled. No use when set to 0. 
reg_addr_exposure Sensor register address where exposure line is set. Up to 3 channels of exposure. Up to 3 bytes. 
long_exposure_support Set to 1 if sensor supports long exposure left shift function. 
reg_addr_exposure_lshift Sensor register address where long exposure left shift is set. 
reg_addr_ana_gain Sensor register address where analog gain is set. Up to 3 channels of exposure. Up to 3 bytes. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
Member Meaning 
reg_addr_frame_length Sensor register address where framelength is set.  
reg_addr_temp_en If “temperature_support” is set to 1. Sensor register address where temperature sensor on/off 
is controlled. 
reg_addr_temp_read If “temperature_support” is set to 1. Sensor register address where temperature output is read. 
reg_addr_auto_extend For Sony sensor, sensor register address where auto extend function enable/disable is 
controlled. 
reg_addr_frame_count For Samsung sensor, sensor register address where frame count is read to determine whether 
sensor stream is off or not. 
reg_addr_fast_mode For Sony sensor, sensor register address where fast mode on/off is controlled. 
init_setting_table The address of sensor initial setting table 
init_setting_len Array size of the sensor initial setting table 
mode The address of subdrv_mode_struct 
sensor_mode_num Array size of the subdrv_mode_struct 
list The address of customized feature control list 
list_len Array size of the customized feature control list 
checksum_value The calculated value when Test Pattern output, for Camera Auto Test 
 
1.3.1.14 Sensor Mode Setting 
Subdrv_mode_struct mode_struct[] structure array is used to store the data configuration of different Sensor Modes. 
The following uses preview mode as an example to illustrate some fields that need to be modified by the customer. For 
YUV sensor, generally the subsequent sensor mode and preview mode are exactly the same. There may be differences for 
the raw sensor, and you need to configure it according to actual needs. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
 
1.3.1.15 Driver Functions 
 Driver Operation Function List 
The list of driver function is as follows: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
 
In the imgsensor code starting with the adapter name, it is often called into the driver code through subdrv_call, which is 
the function list above, such as: 
 
 
The above call will call get_sensor_id in the function list above. 
There are many functions starting with common in the above list. This part uses a common processing flow. No need to 
implement them specially in sensor driver. 
 
The following is a description of the get_imgsensor_id and open functions that your company may change. 
 
 get_imgsensor_id Function 
When the search sensor is turned on, the ID will be read through the get_imgsensor_id function. If the ID can be read 
successfully, the icon of the camera APP will be displayed on the UI. 
The following functions are mainly used to obtain the sensor ID and determine whether there is a link to the module. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
 
 Open Function 
It will be called every time when the camera is opened. 
Read sensorid to confirm whether I2C communication is normal. 
Call the sensor_init function to initialize the sensor registers.
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
 
 
Remark： 
1. A note about resolution 
Because for different scenarios, the size of the image given to user space is different from the size of the actual VC 
channel charged by seninf. 
Therefore, there will be two resolutions in the driver. Customers can take max96712, the uncombined frame avm 
driver, as an example. 
Search for the following macros to compare configurations. 
 
 
 
2. Regarding the GPIO power supply part in dts, you can also choose the regulator packaging method. 
Usage is as follows: 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
 
 
UT test command 
C:\Users>adb shell sentest_v4l2    //just search sensor, not streaming 
[show_Sensors]sensorNum 2 
[show_Sensors]name:SENSOR_DRVNAME_OV05A20_MIPI_RAW type:0 
[show_Sensors]index:0, SensorDevIdx:1 
[show_Sensors]name:SENSOR_DRVNAME_IMX576_MIPI_RAW type:0 
[show_Sensors]index:1, SensorDevIdx:2 
[main]Param: 1 <sensorDev> <scenario> <fps> 
[main]<sensorDev> : main(1), Sub(2), Main2(4), sub2(8), Main3(16)  
[main]<scenario>  : Pre(0), Cap(1), VD(2), slim1(3), slim2(4) 
show that sensorNum is not 0, and display the specific name of the sensor, that is, the search sensor is successful, Then 
test the output of the sensor. 
C:\Users> adb shell sentest_v4l2  1 0     //search sensor, then open main (1) sensor preview (0) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
 
Check the seninf status command as follows. After finding the result, you can send it to MediaTek for confirmation. 
CMD:  
cat /sys/devices/platform/soc/1a00e000.seninf-top/status 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8676 Yocto Camera Driver 
 User Manual 
Confidential B 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8676 Yocto Camera Driver 
 User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0281 MT8676_Yocto_Camera_Turbo_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Camera_Turbo_User_Manual_V1.0.pdf

SHA-256：0ae0c98cf80898dc33926df07ceb901de63989dee620579d37dbfe25f7bdd6cd

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0281.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto Camera Turbo  
User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8678 Android Camera Turbo 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Houchu.Fan Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8678 Android Camera Turbo 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
1 Camera Turbo ···························································································································································· 4 
1.1 Camera Architecture Overview ································································································································ 4 
1.2 Camera Turbo ··························································································································································· 5 
 Architecture ·················································································································································· 5 
 Control Flow ·················································································································································· 6 
Exhibit 1 Terms and Conditions ·········································································································································· 8 
 
 
List of Figures 
Figure 1-1. Camera architecture overview ································································································································· 4 
Figure 1-2. Camera MW architecture ········································································································································· 5 
Figure 1-3. MW class flow ·························································································································································· 6 
Figure 1-4. MW class flow ·························································································································································· 7 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8678 Android Camera Turbo 
User Manual 
Confidential B 
1 Camera Turbo 
1.1 Camera Architecture Overview 
 
Figure 1-1. Camera architecture overview 
 
Camera Turbo is mainly divided into four parts: 
 
• The entry layer is the entrance to MW. Different OSs can adapt MW by calling the code of the entry layer through the 
adapt layer.  
• The custom layer is the customization layer through which customers can perform customized operations. 
• The IF layer is the interface layer used by the entry layer. The logic of camera session and native camera is generated 
here. The IF layer mainly implements the flow framework of request and config-related operations. 
• The core layer is the core layer of MW. It mainly communicates with the driver, sends the request and gets the result 
back, and finally calls back to the APP through the IF layer. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8678 Android Camera Turbo 
User Manual 
Confidential B 
 
1.2 Camera Turbo  
 Architecture 
 
Figure 1-2. Camera MW architecture 
 
The main architecture diagram of Camera Turbo is the entry layer, IF layer and core layer. The custom layer is mainly for 
customer use. If there is no need to use it, bypass it directly. 
 
• The entry layer is mainly composed of Camera and CameraProvider. The CameraProvider mainly provides the Camera 
list to the upper layer and obtains and controls the properties of the Camera. The Camera mainly provides the 
interface to the upper layer to control the control behavior of the camera sensor. 
• The IF layer is mainly the pipeline, which is the manager that builds the underlying node connection relationship. 
ImageProc mainly facilitates callback to provide customers with customized behaviors. At the same time, customers 
can also customize the pipeline through ImageProc. 
• The core layer is mainly composed of subclasses of ImageNode. The subclasses interact with the underlying driver to 
implement different operations on the request. For example, FdNode is mainly for face recognition, captureNode for 
camera function, MCNRNode for image processing, and the final result will be passed through ImageNode callback to 
IF layer.  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8678 Android Camera Turbo 
User Manual 
Confidential B 
 Control Flow  
 
Figure 1-3. MW class flow 
 
Figure 1-3 is mainly the class flow interaction diagram between entry and custom. It mainly tells that the upper layer gets 
the Camera through the open interface of CameraProvider, and the Camera gets the CustomizationManger by calling 
Camera TurboEngine. CustomizationManger is the manager of the custom layer, which facilitates the management of 
customer-specific customization behaviors.   
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8678 Android Camera Turbo 
User Manual 
Confidential B 
 
Figure 1-4. MW class flow 
 
The interaction logic between the IF layer and CORE is mainly that the open interface of the upper CameraProvider  calls 
the NativeCameraManager. The NativeCameraManager allocates the NativeCamera that can be operated at the bottom 
layer. Each NativeCamera has pipeline attributes, which determines the actual flows of each NativeCamera. The Camera’s 
configuration will create a new CameraSession. CameraSessionc creates its own Pipeline. The connected ImageProc is 
saved in the Pipeline. ImageProc will create the corresponding ImageNode. Each CameraSession has its own ImageProc list. 
Users can perform customized behaviors in ImageProc. ImageProc will use MediumHandler, which is the callback interface. 
ImageNode callback will use ImageProc. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8678 Android Camera Turbo 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0282 MT8676_Yocto_Display_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Display_User_Manual_V1.0.pdf

SHA-256：1a3df9ee9ed82f61f16ed055650e6e09f958f4af98ec14f96566e35236419a06

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0282.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto Display 
User Manual 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Display  
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Scott Wang Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto Display  
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Tables ······································································································································································ 3 
1 Display & Multi-Screen ·············································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 Abbreviation·················································································································································· 4 
 Capbility ························································································································································ 4 
1.2 Architecture/Process Overview ································································································································ 5 
 HW Architecture ··········································································································································· 5 
 SW Architecture ············································································································································ 6 
1.2.2.1 Android ··········································································································································· 6 
1.2.2.2 Hypervisor (Yocto + Android) ·········································································································· 7 
1.3 Configuration/Customization Guideline ··················································································································· 7 
 DSI SuperFrame Dual Panel Configuration ···································································································· 7 
 DP SuperFrame Dual Panel Configuration····································································································· 7 
 LCM Rotation Configuration ·························································································································· 8 
 OVL Configuration ········································································································································· 8 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 8 
 hwc CMD ······················································································································································· 8 
 Display Driver CMD ······································································································································· 8 
 Pattern ·························································································································································· 9 
 Black Screen ················································································································································ 10 
 Screen Distortion/Flickering ························································································································ 10 
 Screen Freeze/Lag ······································································································································· 11 
Exhibit 1 Terms and Conditions ········································································································································ 12 
 
 
List of Tables 
Table 1-1. Abbreviation ······························································································································································ 4 
Table 1-2. Capability ··································································································································································· 4 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto Display  
User Manual 
Confidential B 
1 Display & Multi-Screen 
1.1 Overview 
 Brief Introduction 
This chapter mainly introduces the MT8676 display architecture and multi-screen configuration guide. 
 
 Abbreviation 
Table 1-1. Abbreviation 
Abbreviation Explanation 
CRTC Cathode Ray Tube Controller 
DP DisplayPort 
DPI Digital Parallel Interface 
DSC Display Stream Compression 
DSI Display Serial Interface 
DTS Device Tree  
HWC Hardware Composer 
LCM Liquid Crystal Display Module 
SerDes Serializer/Deserializer 
 
 Capbility 
Table 1-2. Capability 
DISP pipeline 10bit pipe x 3 (MAX 688MHz at 0.75V) 
DSI 
DSI0 + DSI1 
C/D PHY Combo 4-lane x 2 
DPHY: 2.5Gbps/lane 
DP DP1.4, 4-lane 8.1Gbps/lane 
(4-lane mode conflict with USB3) 
Panel number 1~6 
OVL layers OVL0~OVL7: Total 16 layers 
OVL De-comp. AFBC (RGBA8888/RGB888/RGB565) 
Compression VESA DSC 1.2 (2 slice x 2) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto Display  
User Manual 
Confidential B 
1.2 Architecture/Process Overview 
 HW Architecture 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto Display  
User Manual 
Confidential B 
 SW Architecture 
1.2.2.1 Android 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto Display  
User Manual 
Confidential B 
1.2.2.2 Hypervisor (Yocto + Android) 
 
 
1.3 Configuration/Customization Guideline 
 DSI SuperFrame Dual Panel Configuration  
DSI0/1 supports outputting side by side superframe and driving dual-screen display. 
You need to open the virt_dsi node in dts (the figure below is a DSI0 configuration sample). For other LCM configurations, 
please refer to MT8676_DSI_Panel_User_Manual_V1.0. 
 
 
 DP SuperFrame Dual Panel Configuration 
DP supports outputting side by side superframe and driving dual-screen display. 
You need to open the virt_dp node in dts. For other LCM configurations, please refer to 
MT8676_DSI_Panel_User_Manual_V1.0. 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Display  
User Manual 
Confidential B 
 LCM Rotation Configuration 
Path: device/mediateksample/project/device-vext.mk 
PRODUCT_PROPERTY_OVERRIDES += ro.vendor.sf.orientation_external1=xxx 
 
Above ro.vendor.sf.orientation_externaX indicates the rotation angle of the corresponding X screen. If the screen 
is in portrait or landscape orientation, it generally needs to be set to 90°. 
 
 OVL Configuration 
You can configure the OVL usage of each CRTC in the dispsys_config node in DTS. The following sample code configures 
four OVLs for CRTC0, for a total of eight layers. 
 
 
1.4 Frequently Asked Questions/Troubleshooting 
 hwc CMD 
Log cmd: 
adb shell setprop persist.vendor.debug.hwc.log V && adb shell setprop 
vendor.debug.hwc.skip_log 0 && adb shell dumpsys SurfaceFlinger 
 
Dump sf info: 
adb shell dumpsys SurfaceFlinger > sf.log 
 
Force gpu (gpu compose) 
adb shell service call SurfaceFlinger 1008 i32 1 
 
 Display Driver CMD 
On means enable log output, Off means disable log output. 
 
Frequently used display mobile log: 
adb shell “echo mobile:on > /d/mtkfb” 
If you want to capture the boot log, you need to modify the code directly: 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto Display  
User Manual 
Confidential B 
 
 
More detail log： 
adb shell “echo detail:on > /d/mtkfb” 
If you want to capture the boot log, you need to modify the code directly: 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
 
Fence log: 
adb shell “echo fence:on > /d/mtkfb” 
If you want to capture the boot log, you need to modify the code directly: 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
Irq log: 
adb shell “echo irq:on > /d/mtkfb” 
If you want to capture the boot log, you need to modify the code directly: 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
Get display diagnose dump log: 
adb shell "echo diagnose > /sys/kernel/debug/mtkfb && cat /sys/kernel/debug/mtkfb" > 
mtkfb.txt 
 
 Pattern 
First, you need to open the register debug. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto Display  
User Manual 
Confidential B 
 
 
• dsi0 pattern: 
adb shell "echo reg_write 0x1400d178 0xc61 > /proc/clkdbg;cat /proc/clkdbg“ 
• dsi1 pattern: 
adb shell "echo reg_write 0x1420d178 0xc61 > /proc/clkdbg;cat /proc/clkdbg“ 
• dp pattern: 
adb shell "echo reg_write 0x1400bf00 0x41 > /proc/clkdbg;cat /proc/clkdbg“ 
 
 Black Screen 
• Is the backlight on? 
• If a bridge IC exists, is the bridge IC OK? 
• Is the dsi/dp pattern OK? 
• Is the screencap OK? 
adb shell screencap -d 0/1 /sdcard/1.png 
After confirming that all the above check points are satisfactory, the display owner should make analysis. 
 
 Screen Distortion/Flickering 
• Check the log to see if there is DISP_OVL/RDMA underflow/abnormal 
– Check size setting 
▪ cmd: adb shell “echo mobile:on > /d/mtkfb” 
– Check clk/dram frequency 
▪ clk  
o dump: 
adb shell "echo fmeter > /proc/clkdbg ; cat /proc/clkdbg | grep –e disp" 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto Display  
User Manual 
Confidential B 
o force max: 
adb shell "echo 0 0 > /sys/module/mtk_mmdvfs_debug/parameters/force_step" 
▪ dvfs 
o dump: 
adb shell "cat /sys/kernel/helio-dvfsrc/dvfsrc_dump | grep -e uv -e Mbps" 
o force max: 
adb shell "echo 0 > /sys/kernel/helio-dvfsrc/dvfsrc_force_vcore_dvfs_opp" 
• Is force GPU OK 
adb shell service call SurfaceFlinger 1008 i32 1 
• Is dsi/dp pattern OK 
 
 Screen Freeze/Lag 
• Check main log to see if there is fence timeout 
 
• Check kernel log to see if there is underflow/abnormal 
• Enable fence log, check fence release 
adb shell “echo fence:on > /d/mtkfb” 
• User systrace to analysis performance issue 
adb shell perfetto -o /data/misc/perfetto-traces/trace -t 10s sched freq idle am wm gfx 
view input 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Yocto Display  
User Manual 
Confidential B 
Exhibit 1 Terms and Conditions 
Your access to and use of this document and the information contained herein (collectively this “Document”) is subject to your (including the corporation 
or other legal entity you represent, collectively “You”) acceptance of the terms and conditions set forth below (“T&C”).  By using, accessing or 
downloading this Document, You are accepting the T&C and agree to be bound by the T&C.  If You don’t agree to the T&C, You may not use this 
Document and shall immediately destroy any copy thereof. 
 
This Document contains inf ormation that is confidential and proprietary to MediaTek Inc. and/or its affiliates (collectively “MediaTek”) or its licensors 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0283 MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf

SHA-256：2ba0a3c4a44efa041e98cf80796269750afc21e050ed0aecbdeb0448ee397079

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0283.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12 
MT8676 Yocto DSI Panel 
User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Henry Tu Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
1 Overview ··································································································································································· 4 
2 Preconditions for Bring Up ········································································································································· 5 
2.1 Obtain the Following Information from the Panel Vendor ······················································································· 5 
2.2 HW Schematic Review ·············································································································································· 5 
3 Early-Stage Preparation ············································································································································· 6 
3.1 SW env: LK2 ······························································································································································ 6 
3.2 SW env: Kernel-6.1 ··················································································································································· 7 
4 Important Notes ························································································································································ 9 
5 LK Drivers ································································································································································ 10 
5.1 Add New LCM Driver in LK2 ··································································································································· 10 
5.2 Porting LCM Driver in LK········································································································································· 11 
5.3 DSI Command Usage in LK ····································································································································· 19 
6 Kernel DRM Drivers ················································································································································· 21 
6.1 Add Kernel LCM Driver in Kernel ···························································································································· 21 
6.2 Porting LCM Driver in Kernel ·································································································································· 24 
7 Extremely precise FPS ·············································································································································· 29 
8 Bring up Debug SOP ················································································································································· 30 
8.1 Panel Not Work in LK Stage ···································································································································· 30 
8.2 Panel Does Work in the Kernel Stage ····················································································································· 31 
8.3 Panel Does not Work in Resume Stage ·················································································································· 31 
8.4 Panel Flicker ··························································································································································· 32 
9 Dump Reg ································································································································································ 34 
9.1 LK Stage ·································································································································································· 34 
9.2 Kernel Dump Reg ···················································································································································· 34 
9.3 Adb cmd Debug Reg Setting ··································································································································· 34 
9.4 Test Pattern CMD···················································································································································· 35 
9.5 Analyze Reg ···························································································································································· 35 
10 How to Use MTK max96789 Panel Driver ················································································································· 38 
Exhibit 1 Terms and Conditions ········································································································································ 44 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
1 Overview 
This document aims to present a SOP for panel driver porting, along with the associated debugging skills. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
2 Preconditions for Bring Up 
2.1 Obtain the Following Information from the Panel Vendor 
• The panel vendor needs to illuminate the panel on the fixture using an external input signal 
• Gets “power on/off sequence, port number, ddic number, cmd/vdo mode, Cphy/dphy, Lane number” and so on 
• Initiates/deinitiates cmd (must be the command mentioned in item 1) 
• Width/height/vfp/vbp/vsa/hfp/hbp/hsa/fps/mipi clock and so on 
• Bist mode cmd (optional) 
• Sends cmd to ddic with dcs/generic or another type 
• cmd<0xB0 used with DCS; cmd >= 0xB0 used with Generic by default 
• DSC parameter, slice number (make sure the SoC supports those DSC parameters first) 
• How to implement other functions (backlight/fps change/cabc…) 
• If the panel connects to SOC with a bridge, get those settings from the panel vendor or bridge vendor 
 
2.2 HW Schematic Review 
• Configures panel power control 
– If HW design uses MTK’s regulator, you can obtain the control function from the PMIC owner (function in LK/Kernel) 
– If HW design uses a 3rd party PMIC, obtain the control function from the 3rd party vendor 
• Configures GPIO 
– Configures GPIO in DWS using the GPIO table 
• Configures backlight 
– Pulls the backlight control GPIO to high when bringing it up, then configures it to the correct function later  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
3 Early-Stage Preparation 
3.1 SW env: LK2 
Note: 
• If there is no link, skip this step. 
 
1. Adds a new LCM driver 
2. Modifies LCM support list in $(project).mk 
3. Adds the panel driver ko to ko_order_table in the device folder 
4. Adds the LCM driver setting to the list 
5. Adds LCM driver info in lcmd_drv.h 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
3.2 SW env: Kernel-6.1 
Note:  
• The settings for Kernel-6.6 are the same as below, but the paths are different 
 
1. Adds a new panel driver 
2. Adds LCM config in kconfig 
3. Adds LCM config in makefile 
4. Adds LCM config in kernel config 
5. Adds LCM config in kleaf 
6. Adds LCM config in dts 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
4 Important Notes 
• To prevent panel flickering when boot from LK to kernel, settings of DSI/MIPI_TX/panel are all based on LK 
parameters after kernel startup. Only after suspend/resume, all DSI and panel parameters are obtained  from the 
Kernel. If the parameters after suspend/resume are different from those at power-on startup, please check the 
differences in these three parts of the settings. 
• It is normal for the system to not work properly when the kernel panel driver is not ready, as the Kernel will fetch 
some parameters for display at startup. 
• The parameters marked as 'must set' on the following pages are mandatory, while other parts should be filled in as 
needed. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
5 LK Drivers 
• How to determine whether the project uses LK or LK2? 
– The MTK_LK_VERSION in the projectconfig.mk in the Device folder corresponds to the project 
• LK2 key path: /vendor/mediatek/proprietary/bootable/bootloader/lk2/ 
• LK key path: /vendor/mediatek/proprietary/bootable/bootloader/lk/ 
• MTK key path: /vendor/mediatek/proprietary/bootable/bootloader/lk2/ 
• OR: /vendor/mediatek/proprietary/bootable/bootloader/lk/ 
 
5.1 Add New LCM Driver in LK2 
• Step 1: Adds your <lcm driver> 
– Adds your <lcm driver> into the following path: 
▪ Creates a new folder under the /vendor/mediatek/proprietary/bootable/bootloader/lk2/dev/lcm/ 
directory, note that the folder name should be the same as the name added in the second step of the mk file, it 
is recommended to copy the existing driver and rename it 
▪ The name of driver (xxx.c) need same as folder name 
▪ Please refer to Section 6.2 Porting LCM Driver in Kernel for detail information 
– Takes <max96789_dsi_vdo> for example:  
• Step 2: Adds your <lcm config> in <project> makefile 
– Adds your <lcm confing> in <project>.mk 
vendor\mediatek\proprietary\bootable\bootloader\lk2\project\<project>.mk 
– Takes < max96789_dsi_vdo > for example: 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
▪ Single panel setting: 
▪ Multi-panel setting: 
• Step 3: Adds your <lcm main structure> into lcm list 
– Adds your <lcm main structure> into lcm list in vendor\mediatek\proprietary\: 
▪ bootable\bootloader\lk2\dev\lcm\mt65xx_lcm_list.c  
▪ bootable\bootloader\lk2\dev\lcm\include\lcm_drv.h 
– Takes < max96789_dsi_vdo > for example: 
• Step 4: Switches the logo if the LCM resolution is different 
– Modify define marco of BOOT_LOGO in device\mediatekprojects\<project>\projectconfig.mk 
– Take < max96789_dsi_vdo > for example: 
• Step 5: Rebuilds LK 
– Rebuilds lk and re-download lk.img. 
 
5.2 Porting LCM Driver in LK 
• Step 1: Implements the lcm_drv structure (must set) 
– Takes <tv101wum_n16_wuxga_dsi_video_boe_rtq6752.c> for example: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
• Step 2: Fills the LCM parameters (must set) 
– Configures the basic information according to the HW connection, LCM type, DSI mode, LCM size, and PLL in the 
lcm_get_params function 
▪ LCM width/height 
▪ LCMparams (dsi setting, must set)  
▪ LCMparams (video timing, must set) 
▪ esd config (optional) 
▪ PLL configuration (PLL_CLOCK and data_rate must set at least one) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
▪ ssc config (optional)  
▪ MiPi clock mode config (optional) 
▪ cphy/dphy config (by case) 
▪ Dual port setting (by case) 
– Sets the cmd or vdo mode depending on the panel. Please ask the panel vendor how to set it  
– DSC parameter configuration: obtain parameters from the vendor. 
▪ If DSC needs to be enabled, DSC must be enabled and DSC parameters must be set. 
▪ DSC enablement depends on the panel, and DSC parameters need to be provided by the panel vendor. 
▪ MTK specific parameter dsc_cfg: Set to 0x22 for 8bpc to 8bpp, set to 0x828 for 10bpc to 8bpp. 
▪ Other parameters correspond one-to-one with the parameters provided by the panel vendor. 
▪ Note that the range of rc_buf_thresh is 14-126. If the vendor’s data is much larger than this, shift the data to the 
right with 6 bits 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
o Demo for DCS settings 
o Vendor dsc setting example 1 
o Vendor dsc setting example 2 
– GPIO configuration (refer to GPIO SOP) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
 
• Step 3: Implements the LCM init power function (must set) 
– According to the init process specified in the LCM datasheet, pull down/up the reset pin, delay, and set the LCM init 
register 
• Step 4: Implements the LCM init function (must set) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
– According to the init process specified in the LCM datasheet, pull down/up the reset pin, delay, and set the LCM init 
register: 
• Step 5: Implements LCM suspend/resume functions (optional) 
• Step 6: LCM compare function porting (if multi-panel is compatible, need LCM Compare ID function) 
• Step 7: LCM set backlight function porting (only need config when LCM PWM used) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
 
•  Step 8: Fills in the  initialization parameters (must set) 
• Step 9: Other used settings (copy from other drivers, must set) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
5.3 DSI Command Usage in LK 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
   
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
6 Kernel DRM Drivers 
• Key path: /kernel/ kernel_device_modules-6.1/drivers/gpu/drm/ 
• MTK key path: /kernel/ kernel_device_modules-6.1/drivers/gpu/drm/metiatek/Mediatek_v2 
 
 
6.1 Add Kernel LCM Driver in Kernel 
• Step 1: Adds your <lcm driver> 
• Step 2: Adds your <lcm msg> to Kconfig & Makefile 
• Step 3: Checks ProjectConfig. 
– Adds your DRM panel configuration and set it to 'm' 
– Adds below GKI config to device/mediatekxxx/$(project)/ko_order_table.csv 
– Adds ko to kleaf kernel/kernel_device_modules-6.1/kernel/kleaf/ 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
 
• Step 4: Set the LCM node to the project DTS. 
– /kernel/ kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/$(project).dts 
– ➔Sets panel name must be the same as of_device_id in your DRM driver 
– Checks GPIO pins ➔ lcm_reset, bl_en, avdd_en, avee_en & other control pins 
– Adds you panel dts node, from 0 to N, and you must follow the following rules.  
– Single port setting 
panel@0 { 
        compatible = "hx83112b,fhdp_dsi_cmd_auo_rt4801_drv";"; 
        reg = <0>;>; 
        pm-enable-gpios = <&pio 103 0>;>; 
        reset-gpios = <&pio 44 0>;>; 
        pinctrl-names = "default";"; 
        port { 
                panel_in: endpoint {in: endpoint { 
                        remote-endpoint = <&dsi_out>;remote-endpoint = 
<&dsi_out>; 
                }; 
        }; 
}; 
panel1@1 { 
        compatible = "lg,fhdp_dsi_cmd";"; 
        reg = <0>;>; 
        pm-enable-gpios = <&pio 103 0>;>; 
        reset-gpios = <&pio 44 0>;>; 
        pinctrl-names = "default";"; 
        port { 
               panel_in1: endpoint { 
                       remote-endpoint = <&dsi_out>;remote-endpoint = 
<&dsi_out>; 
               }; 
CUSTOM_LK_LCM=“hx83112b_fhdp_dsi_vdo_auo_rt4801 lg_fhdp_dsi_cmd"  
Kernel node must set panel 0~X，refer to lk 
Config CUSTOM_LK_LCM = “LCM_B,LCM_A”. 
So dts note need to set as: 
panel@0{ 
        Compatible = “LCM_B” 
}; 
panel1@1{ 
        Compatible = “LCM_A” 
}; 
&dsi0 { 
    status = "okay";"; 
    #address-cells = <1>;>; 
    #size-cells = <0>;>; 
    panel@0 { 
        compatible = "lg,0565g40108"; 
        reg = <0>;>; 
        pm-enable-gpios = <&pio 103 0>; 
        reset-gpios = <&pio 44 0>; 
       pinctrl-names = "default";"; 
       port { 
           panel_in: endpoint {in: endpoint { 
               remote-endpoint = <&dsi_out>;remote-endpoint = <&dsi_out>; 
           }; 
      }; 
}; 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
– Dual port setting 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
 
6.2 Porting LCM Driver in Kernel 
• Panel driver structure brief introduction (must set) 
– DRM original structure  
– MTK extension structure  
– MTK extension structure (DSC) 
 
 
Pixel clock 
Frame Width 
HFP 
HSA 
HBP 
Frame Height 
VFP 
VSA 
VBP 
FPS 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
 
• Panel driver function’s brief introduction 
– DRM original function 
– DRM extension function 
Panel power disable 
Panel suspend sequence 
Panel power on 
Panel initialize sequence 
Panel mode configuration  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
• Porting the probe function (must set) 
• Porting the remove function (must set) 
• Porting prepare function (must set) 
• Port the panel_init function (must set) 
• Porting enable function (must set) 
• Porting disable function (must set) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 27 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
• Porting the unprepare function (must set) 
• Port the get_modes function (must set) 
• Porting MTK extension reset function (optional) 
• Porting MTK extension set_backlight_cmdq function (by case) 
• Port MTK extension ext_param_set function (by case) 
• Porting MTK extension: ata_check function (optional) 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 28 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
• Port the MTK extension parameters structure (must set) 
Notes: 
• In super frame mode, the pll_clk/crop_width/crop_height/physcial_width/physical_height must be set, 
otherwise, the pll_clk must be set 
– Pll_clk: mipi clock 
– Crop width/crop height: In super frame mode, it should be set to correspond to the width/height of one of the panels 
– Physical_width/physical_height: In super frame mode, physical_with should be set to the sum of the widths of the two panels. 
And the physical_height should be set to the larger of the two panels 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 29 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
7 Extremely precise FPS 
• In pen case, very precise FPS (120+-0.01) is required, which can be achieved through data_rate_khz 
• First, calculate the approximate value (value of “ideal bit freq”) through the table (ask PM for it) and fill it into 
data_rate, then fine-tune it through data_rate_khz 
• Note: even if data_rate_khz is set, data_rate/pll_clk also needs to be set (whether it's LK or Kernel) 
• Data_rate_khz needs to be fine-tuned based on the measurement of FPS, and currently cannot be calculated 
theoretically. 
• Vdo_per_frame_lp_enable corresponds to the “video mode keep hs mode” in the table below, which has a relatively 
large impact on the FPS of vdo mode 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 30 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
8 Bring up Debug SOP 
8.1 Panel Not Work in LK Stage 
• Does backlight work？ 
– If yes, check the next step. 
– If not, is the backlight setting correct? (The backlight uses the DTS setting even when it is in LK) 
– Can override this by pulling the backlight control GPIO to high when bringing it up 
– If backlight control is done by I2C, seek help from the I2C vendor. 
▪ disp_pwm mode 
▪ I2C mode 
▪ Lcm pwm mode 
• Is the panel power supply correct? 
– If yes, check the next step 
– If not, measure the voltage of each path. If any one is abnormal, ask the PMIC owner how to control. 
• Is the panel power-on sequence correct? 
– Measure the voltage with an oscilloscope. 
• Does the Init command work? (Read DDIC register: 0x0A; if not 0, it means okay. If not okay, panel support is needed. 
Ask for the panel vendor.) 
– If yes, check the next step. 
– If not 
▪ Send the init command with generic or DCS. 
▪ Test the BIST pattern (obtain it from the panel vendor). 
o BIST can work, which means panel power control is correct. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 31 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
o BIST cannot work 
o Does the configuration need a lane swap? 
o Use a logic analyzer to capture the data of sending the init command to the panel vendor for inspection. 
• Does the MIPI signal meet the requirements? (CPHY needs to measure the signal of the pin at the panel side) 
– Dphy wave with video data 
– Dphy wave without VDO data 
– Cphy wave 
• Does the logo file exist? If there is no logo file, only a line of text is displayed on the screen, which needs to be 
carefully observed 
 
8.2 Panel Does Work in the Kernel Stage 
• Check the status of the panel power 
– At the Kernel stage, the regulator will disable when nobody is using it, and the panel driver needs to get and enable 
it. 
• Check the backlight status 
– AAL may turn off the backlight when it malfunctions. Disable AAL and test again. 
– Does the backlight control function run? 
• Check the status of the Kernel panel driver 
– Observe the log to see if the driver loads normally. 
– Is ESD enabled? Disable it and test again  
– Does multi-FPS support? Only enable one of them when bringing it up 
8.3 Panel Does not Work in Resume Stage 
• Check the status of the panel power 
– Check the status of the panel power-on code work 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
• Check the backlight status 
– Check the backlight control code's work status 
• Check the status of the Kernel panel driver 
– Observe the log to see if the driver loads normally 
– Dump the register and compare it with LK 
 
8.4 Panel Flicker 
• Does DSC enable 
– Yes, check the DSC parameters 
▪ Does DSC test pattern work normal? (Used cmd:echo reg_write 0x14015078 0x400000FF > /proc/clkdbg ; cat 
/proc/clkdbg) 
o Yes, call for help from the display owner 
o No, is there a normal work time? If yes, dump and compare reg when work normal and wrong 
o Dump cmd:  
a) Kernel stage: adb shell “echo mobile:on > /d/mtkfb“;adb shell ”echo diagnose>/d/mtkfb && cat 
/d/mtkfb” >  mtkfb.txt and search “DSC” 
b) LK stage: call the dump function at the end of the ddp_dsc_config 
o Typical DSC flicker: 
– Similar flickering may be caused by AFBC, try turning off AFBC and test it again 
▪ Turn off AFBC command: 
adb shell setprop debug.mediatek.disp_decompress 0 
adb shell stop 
adb shell start  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 33 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
▪ Typical AFBC flicker: 
• Check the DSI test pattern work status 
– DSI test pattern cmd:echo reg_write 0x14017178 0x31 > /proc/clkdbg ; cat /proc/clkdbg 
▪ 0x1401xxxx is dsi base addr, its value will vary depending on the soc 
▪ You can obtain it with the dsix node in the dts file 
▪ 0x178 is the DSI test pattern address, obtain it using SOC CODA (get CODA from CPM) 
– If yes, call for help from the display owner. 
– If not, does the log contain the phrase 'dsi underrun'? 
▪ Is there a normal work time 
o Yes, dumping and comparing work normally and incorrectly for DSI/MIPITX/DSC registers. 
o Dump cmd: adb shell “echo mobile:on > /d/mtkfb“;adb shell ”echo diagnose>/d/mtkfb && cat /d/mtkfb” 
>  mtkfb.txt search “dsi” in it 
▪ Does it only appear after a certain operation (such as switching FPS)? 
o Dump and compare the register when it works normally and when it is faulty. 
o For example (works incorrectly after changing fps): 
o Call for help from the DDIC vendor. 
o Is the order of changes in mmclk correct when change fps? (When mmclk increases, set mmclk first and then 
switch fps. when mmclk decreases, switch fps first and then set mmclk. refer to the 
mtk_dsi_set_mmclk_by_datarate function for the calculation method of mmclk, and refer to the 
mtk_crtc_disp_mode_switch_begin function for the switching logic) 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
9 Dump Reg 
9.1 LK Stage 
• Call DSI_DumpRegister() in end of Ddp_dsi.c/ddp_dsi_trigger() 
• Call dsc_dump() in end of Ddp_dsi.c/dsc_config() 
• LK display log off by default in ddp_log.h,need turn on it frist 
9.2 Kernel Dump Reg  
• Get dump information from the log 
– Use the following commands when the screen is shown and provide the mtkfb.txt file. 
▪ adb shell "echo mobile:on > /d/mtkfb“ 
▪ adb shell "echo diagnose>/d/mtkfb && cat /d/mtkfb" >  mtkfb.txt 
• How to enable the command: clkdbg 
– File path: kernel-xx/drivers/clk/mediatek/clkdbg.c/common_cmds[] 
– Func: clkdbg_reg_read() and clkdbg_reg_write() 
– How: if clkdbg_reg_read() and clkdbg_reg_write() was enclosed within pre-defined directives #if 
defined( CONFIG_MTK_ENG_BUILD, mask it 
 
9.3 Adb cmd Debug Reg Setting 
• Command for reading/writing register 
– Read reg: echo reg_read addr> /proc/clkdbg ; cat /proc/clkdbg 
– Read reg with length: echo reg_read_len addr length> /proc/clkdbg ; cat /proc/clkdbg 
– Write reg: echo reg_write addr value> /proc/clkdbg ; cat /proc/clkdbg 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 35

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 35 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
▪ For example: 
o echo reg_read 0x1400D178 > /proc/clkdbg ; cat /proc/clkdbg 
o echo reg_write 0x1400D178 0x31 > /proc/clkdbg ; cat /proc/clkdbg 
o echo reg_read_len 0x1400D000 0x00001000 > /proc/clkdbg ; cat /proc/clkdbg 
Notes: 
• Usually, MTK supporter say let xxx’s yyy be zzz, xxx means some module, get this module’s base addr with Debug SOP, yyy means 
offset, zzz means set value 
• The executed cmd will be: echo reg_write xxx_base_addr+yyy zzz> /proc/clkdbg ; cat /proc/clkdbg 
• For example, to adjust driving strength of MIPI, supporter will say: make mipi_tx’s 0x10 reg bit6-9 to 0111, the cmd is: echo 
reg_read 0x11f60010 > /proc/clkdbg;cat /proc/clkdbg,  //mipi_tx base addr is 0x11f60000, read 0x11f60010 first (if 
read return 0) 
• Let return date 0 bit6-9 or 0111 get 0x1c0: echo reg_write 0x11f60010 0x1c0> /proc/clkdbg ; cat 
/proc/clkdbg 
 
9.4 Test Pattern CMD 
• ADB cmd: 
– echo reg_write “DSI/DSC_base_reg+offset_addr” value> /proc/clkdbg ; cat /proc/clkdbg 
– Get DSI/DSC base reg with this sop in page 130 
– Offset: 
▪ Dsi:0x178 or 0x17c  
▪ Dsc:0x78 or 0x6c，ask it for MTK 
– Value: 
▪ Dsi: 0xc41 
▪ Dsc: 0x4000FFFF (blue), or ask for MTK 
• Add the cmd in the code: 
– DSI: call DSI_OUTREG32(NULL, DSI_REG_BASE[0]+offset, value); at the end of func:Ddp_dsi_trigger 
– DSC: call DISP_REG_SET(handle, base+offset, value); at the end of func:dsc_config 
– Offset/value refers to ADB command 
 
9.5 Analyze Reg 
• This is just an example. Get the correct offset from Coda. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 36

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 36 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
• DSI part (Other Regs are debug or status reg, which can be ignored) 
• MIPI TX part (Other registers are for debugging or status, which can be ignored) 
 
 
• DSC part (Other regs are debug or status registers, which can be ignored) 
Bit0=1 means DSI start, if 0 means DSI 
not enable or dump fail 
DSI status, ignore it 
VSA VBP VFP VACT 
HAS_WC HBP_WC 
VB_PS_WC/HFP_WC BLLP 
NOTE: HSA_WC=HAS*3-10，the same as HBP/HFP 
Read status reg 
DSI Timing control 
DSI PHY Timing 
control 
Read status reg 
 Phy vol sel 
Pll control 1/2/3/4 
Pll control 0 
Lane swap setting 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 37

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 37 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
  
  
DSC control 
 DSC status 
 DSC PIC W 
DSC PIC H 
DSC PPS0-19 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 38 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
10 How to Use MTK max96789 Panel Driver 
A driver for the serializer-deserializer max96789+max96752 is provided by MTK, and this driver can be referred to by 
developers for development. 
How to use it: 
1. Add birdge-serdes-max96789.ko/panel-serdes-max96789.ko to the KO table (if it does not exist)  
2. Set MTK_LCM_LIST_SUPPORT="max96789_dsi_vdo" in LK's project.mk  
3. Add birdge-serdes-max96789.ko/panel-serdes-max96789.ko to kleaf (if it does not exist)  
4. Add CONFIG_DRM_PANEL_SERDES=m to defconfig (if it does not exist) 
5. If enable the hotplug function, need to set CONFIG_ENABLE_SERDES_HOTPLUG=y in defconfig. If use the interrupt 
method, need set “#define ENABLE_HOTPLUG_INT 1” in birdge-serdes-max96789.c 
6. Add the following settings to DTS. 
7. Other settings are hard-coded in the driver. If they do not meet the needs, they can be stripped out and written to 
DTS. 
&i2c1 
{                                                                               
              
    status = "okay"; 
    max96789: max96789@40 {                  // max96789 setting, must set 
        compatible = "maxiam,max96789";      // compatible name, must set 
        reg = <0x40>;                        // IIC addr of max96789, must set  
        reset-gpios = <&pio 24 0>;           // GPIO of max96789 pwdn pin, must 
set 
        interrupt-parent = <&pio>; 
        interrupts = <187 IRQ_TYPE_EDGE_RISING>;// must set when enable 
interrupt mode for hotplug 
        pinctrl-names = "default"; 
        inited-in-lk = <0>;                  // set to 1 when max96789 
initialize in LK 
        setting = <&setting_compatible>;     // panel setting, must set 
    }; 
}; 
&max96789 { 
    setting_compatible: compatible-node {    // compatible panel setting, only 
for demo! 
        comp-cmd = <                   // Command of determine which compatible 
panel it is  
            0x01 0x1a 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 
0xd4 // format: <r/w><iic addr><cmd len><cmd data>, only for demo 
           // r/w: read cmd=0, write cmd=1 
           // iic addr: iic addr for read device 
           // cmd len: cmd data len for write 
           // cmd data: cmd data 
            0x00 0x1a 0x0b // read cmd, format: <r/w><iic addr><cmd len>, must 
in the end of “comp-cmd” and must only one read cmd 
        >; 
        comp-exp {         // compatible panel setting 
            comp-setting = <0xf0 0x10 &setting_bt>,  // first compatible panel 
setting, format: <mask><exception data><panel setting node>  
               // mask: the return data of read cmd AND the mask 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 39

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 39 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
// exception: the data of exception, if it equal to return data AND mask, will 
used this panel setting 
// panel setting node: which panel setting with this setting 
                   <0xff 0xff &setting_hy>;  // NOTE: default setting If none of 
the previous items match 
        }; 
    }; 
    setting_bt: setting@1 {        // panel setting, must set at least one 
        ser-super-frame = <0>;     // super frame set to 1, otherwise set to 0 
        ser-init-cmd = <           // init cmd of serializer, format: 
<reg><data><delay>, must set 
            0x0001 0x08 0x00 
            0x0203 0x00 0x00       // reg: reg addr 
            0x1404 0x29 0x00       // data: data to write 
            0x1504 0x29 0x00       // delay: how long to delay after send this 
cmd, unit: ms 
            ………………… 
        >; 
        ser-deinit-cmd = <            // serializer deinit cmd, must set 
            0x0010 0x80 0x20 
        >; 
        des-link-status-cmd = <       // detect deserializer link status 
command, if enable hotplug must set 
            0x001f 0x18 0x0 
        >; 
        desdef {                      // deserializer setting, must set 
            des-i2c-addr = <0x4c>;    // iic addr of deserializer 
            bl-i2c-addr = <0x1a>;     // iic addr of backlight 
            bl-dummy-i2c-addr = <0x1f>; // if iic addr of backlight same as 
touch panel, use it to avoid alloc i2c_client fail 
            des-init-command = <      // init command for deserializer 
                0x01ce 0x5e 2 
                0x06ff 0x22 0x0       // must set if hotplug enable, we read 
this to find if deserializer was initialized, must same as link-indicate-command 
            >; 
            link-indicate-command = < // must set if hotplug enable, must same 
as one of “des-init-command” 
                0x06ff 0x22 0x0 
            >; 
            bl-on-command = <          // command of turn on backlight, get it 
from panel vendor 
                0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
            >; 
            bl-off-command = <         // command of turn off backlight 
                0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x00 0x00 0x85 
            >; 
            panel-mode-setting {             // panel timing, must set 
                panel-mode-width = <1920>;   // width 
                panel-mode-height = <1080>;  // height 
                panel-mode-hfp = <40>;       // HFP 
                panel-mode-hsa = <40>;       // HSA 
                panel-mode-hbp = <80>;       // HBP 
                panel-mode-vfp = <24>;       // VFP 
                panel-mode-vsa = <2>;        // VSA 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 40

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 40 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
                panel-mode-vbp = <10>;       // VBP 
                panel-mode-vrefresh = <60>;  // frame per second 
                panel-mode-pll = <478>;      // mipi pll clock, driver will 
calculate a PLL according with the panel timing. If any deviation, it will 
replace the driver-calculated result. 
                panel-mode-lppf = <1>;       // set it to 1 when need MIPI enter 
LP status per-frame 
                panel-mode-width-mm = <129>; // panel physical width, unit: mm  
                panel-mode-height-mm = <64>; // panel physical height, unit: mm 
            }; 
        }; 
    }; 
    setting_hy: setting@2 { 
        ser-dual-link = <0>; 
        ser-init-command = < 
            0x0001 0x08 0x00 
            ……………… 
        >; 
        desdef { 
            des-i2c-addr = <0x4c>; 
            bl-i2c-addr = <0x1a>; 
            des-init-command = < 
                0x01ce 0x4e 2 
            >; 
            bl-on-command = < 
                0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
            >; 
            bl-off-command = < 
                0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x00 0x00 0x85 
            >; 
            panel-mode-setting { 
                panel-mode-width = <1920>; 
                panel-mode-height = <1080>; 
                panel-mode-hfp = <40>; 
                panel-mode-hsa = <40>; 
                panel-mode-hbp = <80>; 
                panel-mode-vfp = <24>; 
                panel-mode-vsa = <2>; 
                panel-mode-vbp = <10>; 
                panel-mode-vrefresh = <60>; 
                panel-mode-pll = <478>; 
                panel-mode-lppf = <1>; 
                panel-mode-width-mm = <129>; 
                panel-mode-height-mm = <64>; 
            }; 
        }; 
    }; 
    superframe_setting: setting@3 {    // demo of super frame setting  
        ser-super-frame = <1>;         // must set to 1 when super frame enable 
        ser-init-command = <  
            0x0002 0x73 0x0 
            ………………… 
        >; 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 41

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 41 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
        ser-timing-command = <  // super frame timming setting, must set when 
super frame enable 
            0x385 0x50 0x0 
            0x386 0x02 0x0 
            0x387 0x00 0x0 
            0x3A5 0x18 0x0            // Note: the order of reg addr connot 
change! 
            0x3A7 0x00 0x0 
            0x3A6 0xa0 0x0 
            0x3A8 0x38 0x0 
            0x3A9 0x04 0x0 
            0x3AA 0x50 0x0 
            0x3AC 0x0A 0x0 
            0x3AB 0x00 0x0 
            0x3AD 0x00 0x0 
            0x3AE 0x0f 0x0 
        >; 
        serdes-dual-setting-command = <   // remap deserializer addr, get more 
info from MAXIAM 
            0 0x0010 0x21 255  
            1 0x0000 0x90 0  
            2 0x0073 0x31 0 
            2 0x0042 0x36 0  
            2 0x0043 0x34 0   
            0 0x0010 0x22 255 
            1 0x0000 0x94 0  
            3 0x0073 0x32 0 
            3 0x0042 0x38 0 
            3 0x0043 0x34 0  
            0 0x0010 0x23 255 
            3 0x0050 0x01 0 
        >; 
        ser-lut-command = <              // lut command for asymmetric super 
frame 
        >; 
        ser-deinit-command = <  
            0x0010 0x80 0x20 
        >; 
        des-link-status-command = <  
            0x001f 0x18 0x0 
        >; 
        desdef {                     // deserializer default setting, must set 
            des-i2c-addr = <0x4c>;   // deserializer default i2c addr, must set 
            bl-i2c-addr = <0x1a>;    // deserializer backlight default i2c addr 
        }; 
        desa {               // linka deserializer config, must set when super 
frame enable 
            des-i2c-addr = <0x48>; // linka des i2c addr, it was remap by 
serializer 
            bl-i2c-addr = <0x1b>;  // linka backlight i2c addr, it was remap by 
serializer 
            des-init-command = <       // linka deserializer initialize command 
                0x01ce 0x5e 2 
                0x06ff 0x22 0x0    // must set if hotplug enable, we read this 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 42

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 42 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
to find if deserializer was initialized, must same as link-indicate-command  
            >; 
            link-indicate-command = <  // must set if hotplug enable, must same 
as one of “des-init-command” 
                0x06ff 0x22 0x0 
            >; 
            bl-on-command = <            // the meaning same as single link 
                0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
            >; 
            bl-off-command = <           // the meaning same as single link 
                0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x00 0x00 0x85 
            >; 
            panel-mode-setting {          // the meaning same as single link 
setting 
                panel-mode-width = <1920>; 
                panel-mode-height = <1080>; 
                panel-mode-hfp = <40>;    // Note: it must be an integer 
multiple of 4 
                panel-mode-hsa = <41>;    // Note: The sum of it and the value 
of desb minus 10 must be an integer multiple of 4 
                panel-mode-hbp = <79>;    // Note: The sum of it and the value 
of desb minus 10 must be an integer multiple of 4 
                panel-mode-vfp = <24>;    // Note: must be desa_vfp/desb_vfp = 
desa_ height/desb_height in asymmetrice mode 
                panel-mode-vsa = <3>      // Note: must be desa_vsa/desb_vsa = 
desa_ height/desb_height in asymmetrice mode; 
                panel-mode-vbp = <9>;     // Note: must be desa_vbp/desb_vbp = 
desa_ height/desb_height in asymmetrice mode 
                panel-mode-vrefresh = <60>; 
                panel-mode-pll = <478>;   // super frame not used it 
                panel-mode-lppf = <1>;    // super frame must set to 1 
                panel-mode-width-mm = <129>; 
                panel-mode-height-mm = <64>; 
            }; 
        }; 
        desb {               // the meaning same as linka, must set when super 
frame enable 
            des-i2c-addr = <0x4a>; 
            bl-i2c-addr = <0x1c>; 
            des-init-command = < 
                0x01ce 0x5e 2 
                0x06ff 0x22 0x0  
            >; 
            link-indicate-command = <  
                0x06ff 0x22 0x0 
            >; 
            bl-on-command = < 
                0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
            >; 
            bl-off-command = < 
                0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x00 0x00 0x85 
            >; 
            panel-mode-setting { 
                panel-mode-width = <1920>; 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 43

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 43 
MT8676 Yocto DSI Panel 
User Manual 
Confidential B 
                panel-mode-height = <1080>; 
                panel-mode-hfp = <40>; 
                panel-mode-hsa = <41>; 
                panel-mode-hbp = <79>; 
                panel-mode-vfp = <24>; 
                panel-mode-vsa = <3>; 
                panel-mode-vbp = <9>; 
                panel-mode-vrefresh = <60>; 
                panel-mode-pll = <478>; 
                panel-mode-lppf = <1>; 
                panel-mode-width-mm = <129>; 
                panel-mode-height-mm = <64>; 
            }; 
        }; 
    }; 
 
}; 
&dsi0 { 
    status = "okay"; 
    #address-cells = <1>; 
    #size-cells = <0>; 
    panel1@0 { 
        compatible = "lcm,dsi,max96789";  // panel setting 
        reg = <0>; 
        ser = <&max96789>;                // panel link with which serializer, 
must set 
        port { 
            panel_in1: endpoint { 
                remote-endpoint = <&dsi_out>; 
            }; 
        }; 
    }; 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 44

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 44 
MT8676 Yocto DSI Panel 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0284 MT8676_Yocto_eCall_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_eCall_User_Manual_V1.0.pdf

SHA-256：d5672b3d4f5d7f56aae6086e5a2c1f1cb7352465475a875f3432c2550ed705db

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0284.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto eCall  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Liuyutian Liu Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 eCall··········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Introduction ·················································································································································· 4 
 Specification Introduction ····························································································································· 4 
1.2 Architecture/Process Overview ································································································································ 6 
 eCall Architecture ·········································································································································· 6 
 eCall Flow ······················································································································································ 6 
 eCall API Usage ··········································································································································· 11 
1.3 eCall Timer ····························································································································································· 14 
 EU CS eCall Timer ········································································································································ 14 
Exhibit 1 Terms and Conditions ········································································································································ 17 
 
 
List of Figures 
Figure 1-1. eCall system overview ·············································································································································· 4 
Figure 1-2. eCall SW architecture ··············································································································································· 6 
Figure 1-3. eCall flow chart of PSAP ········································································································································· 11 
 
List of Tables 
Table 1-1. CS eCall functional specification ································································································································ 4 
Table 1-2. CS eCall test specification ·········································································································································· 5 
Table 1-3. IMS eCall functional specification ······························································································································ 5 
Table 1-4. IMS eCall test specification ········································································································································ 5 
Table 1-5. Ecall control interface description ··························································································································· 11 
Table 1-6. eCall timers in EN16062··········································································································································· 14 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
1 eCall 
1.1 Overview 
 Introduction 
eCall is an in-vehicle road safety system which automatically calls the emergency services in case of a serious accident. As 
soon as the eCall sensors register a severe impact on a vehicle or a call is initiated manually, eCall In-Vehicle System (IVS) 
establishes e112 voice connection with the relevant Public Safety Answering Point (PSAP).  
Send a Minimum Set of Data (MSD) over the voice connection to PSAP , that includes accurate geo-location data 
In April 2015, the European Parliament made it mandatory for all new models of cars to be equipped with eCall technology 
from 31 March 2018 onward. The eCall system overview is depicted in Figure 1-1. 
 
 
Figure 1-1. eCall system overview 
 
 Specification Introduction 
Basically there are two different types of eCall specification, one is for modem protocol such as 3GPP specification, the 
other is for high-layer application specification such EN specification. Generally MediaTek will cover modem protocol part 
and provide SDK for customer to integrate high-layer application specification with their own application. 
The tables below simply show the different specifications. For detailed information, please refer to the original 
specifications from official websites. 
Table 1-1. CS eCall functional specification 
Spec Name Description 
ETSI TS 126.267 (3GPP TS 26.267) General description 
ETSI TS 126.268 (3GPP TS 26.268) ANSI-C reference code 
ETSI TS 127.007 (3GPP TS 27.007) 6.27 Initiate eCall +CECALL 
ETSI TS 122.101 (3GPP TS 22.101) 10.7 Transfer of data during emergency calls 
ETSI TS 124.008 (3GPP TS 24.008) 4.4.7 eCall inactivity procedure 
3GPP TS31.102 SIM related requirement for eCall 
ETSI TS 102 936-1 5. UMTS network access eCall NAD conformance tests 6.GSM 
network access eCall NAD conformance tests 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
Spec Name Description 
EN 16062 eCall high level application requirements (HLAP) 
EN 16072 PE eCall Operating Requirements 
EN 15722 eCall minimum set of data (MSD) 
GOST 33465-2015 Protocols of data exchange between in-vehicle emergency call 
device/system and emergency response system infrastructure 
GOST 33464-2015 In-vehicle emergency call device/system. General technical 
requirement 
 
Table 1-2. CS eCall test specification 
Spec Name Description 
ETSI TS 126.269 (3GPP TS 26.269) eCall Data Transfer; In-band modem solution; conformance test 
ETSI TS134 123-1 13.3 eCall Emergency Call Procedures 
ETSI TS 151 010-1 Conformance specification 
26.9.6a Structured Calls/eCall 
ETSI TS103 412 Pan-European eCall end to end and in-band modem 
conformance testing; Prose test specification 
EN16454 Intelligent transport systems –ESafety- Ecall end to end 
conformance testing 
GOST 33467-2015 Functional test methods of in-vehicle emergency call 
device/system and data transfer protocols 
GOST 33470-2015 
Test methods for wireless communication modules of in-vehicle 
emergency call system 
ETSI TS 103 428 eCall HLAP Interoperability Testing 
 
Table 1-3. IMS eCall functional specification 
Spec Name Description 
TS24.229 eCall over IMS(NG-eCall) general spec 
RFC8147 NG-eCall SIP part spec 
TS23.122 NG-eCall eCall only mode 
TS24.301 EMM requirement for eCall only mode 
TS23.401 eCall only mode 
TS24.008 MM requirement for eCall only mode 
TS23.216 NG-eCall SRVCC 
TS23.167 eCall over IMS(NG-eCall) general spec 
TS27.007 AT CMD of eCall 
TS31.102 SIM-related requirement for eCall 
 
Table 1-4. IMS eCall test specification 
Spec Name Description 
TS34.229-1 SIP layer test spec of NG-eCall 
TS36.523 UE conformance test spec of NG-eCall 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
1.2 Architecture/Process Overview 
 eCall Architecture 
The Software architecture is depicted in Figure 1-2.  
Currently, the MTK solution supports eCall setup and in-band modem TX/RX, compliant with ETSI/3GPP standards (green 
rectangle), and provides proprietary ML interface for invoking eCall RIL commands. Customers need to integrate the eCall 
platform and application (red rectangle) with the eCall ML interface and use the product to pass eCall test cases. 
 
 
Figure 1-2. eCall SW architecture 
 
 eCall Flow 
Although there are different eCall scenarios, the keys steps are the same.  Basically, customer APP needs to handle eCall 
flow according to the following steps:  
1. Initiate an ML_MakeFastEcall 
2. Maintain eCall timer of IVS side which is specified in EN16062 
3. Issue RIL_REQUEST_ECALL_RESET_IVS after receiving RIL_UNSOL_ECALL_ALACK_POSITIVE_RECEIVED. Then IVS and 
PSAP can resume voice call connection and talk to each other 
4. Upon receiving RIL_UNSOL_ECALL_DISCONNECTED or RIL_UNSOL_ECALL_ABNORMAL_HANGUP , disconnect the call. 
The PSAP uses this method to instruct the IVS to disconnect the call.. 
 
Figure 1-3 shows the detailed description of eCall flow sequence. 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
 
Figure 1-3. eCall flow chart of PSAP 
 
 eCall API Usage 
The eCall APIs shown in Table 1-5 are planed to develop on MT8676. If there are updates in the subsequent development, 
updated documents will be provided.. 
Table 1-5. eCall control interface description 
Interface/Struct Description 
typedef struct { 
    int32_t call_id; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
}ml_ecall_set_msd; 
Struct of MSD information 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
Interface/Struct Description 
typedef struct { 
    int32_t arg_num; 
    int32_t type; 
    char address[128]; 
}ml_ecall_set_num; 
Struct of test number/reconfiguration number information 
typedef enum { 
    ML_EMER_CAT_MANUAL_ECALL = 1, 
    ML_EMER_CAT_AUTO_ECALL   = 2, 
}ml_ecall_category; 
Enum of eCall category 
typedef enum { 
    ML_ECALL_TEST        = 1, 
    ML_ECALL_EMERGENCY   = 2, 
    ML_ECALL_RECONFIG    = 3, 
}ml_ecall_variant; 
Enum of eCall varient 
typedef enum{ 
    ML_DOMAIN_AUTO = 0,      /* Automatic mode - 
LTE(IMS), WG(CS), 1x(C2K) */ 
    ML_DOMAIN_CS_ONLY = 1,   /* CS domain only - 
WG(CS) */ 
    ML_DOMAIN_3GPP_ONLY = 2, /* 3GPP only - 
LTE(IMS), WG(CS) */ 
    ML_DOMAIN_3GPP2 = 3,     /* 3GPP2 only - 
1x(C2K)) */ 
    ML_DOMAIN_IMS_1xCS = 4,  /* IMS and 1x CS 
only - LTE(IMS), 1x(C2K) */ 
    ML_DOMAIN_CS_1x = 5,     /* WG CS and 1x CS 
only - WG(CS), 1x(C2K) */ 
    ML_DOMAIN_IMS_ONLY = 6,  /* only IMS call 
allowed */ 
}ml_ecall_domain; 
Enum of radio domain when make eCall 
typedef struct{ 
    ml_ecall_category   ecall_cat; 
    ml_ecall_variant   ecall_variant; 
    char address[20]; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
    ml_ecall_domain domain; 
}ml_ecall_req_msg; 
Struct of input parameter when requesting to make an eCall. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
Interface/Struct Description 
typedef struct{ 
    int32_t data1; 
    int32_t data2; 
    int32_t data3; 
    int32_t data4; 
}ml_ecall_pri; 
eCall priority parameter structure. data1>data2>data3>data4. 
The input parameters should be 1, 2, 3, 4, which means:  
1: eCall URI set by the customer 
2: eCall URI saved by USIM 
3: eCall number set by the customer 
4: eCall number saved by USIM 
typedef enum{ 
    E_ML_ECALL_SENDING_START = 1, 
    E_ML_ECALL_SENDING_MSD = 2, 
    E_ML_ECALL_LLACK_RECEIVED = 3, 
    E_ML_ECALL_ALACK_POSITIVE_RECEIVED = 4, 
    E_ML_ECALL_ALACK_CLEARDOWN_RECEIVED = 
5, 
    E_ML_ECALL_DIALING = 9, 
    E_ML_ECALL_ALERTING = 10, 
    E_ML_ECALL_ACTIVE = 11, 
    E_ML_ECALL_DISCONNECTED = 12, 
    E_ML_ECALL_IMS_ACTIVE = 13, 
    E_ML_ECALL_IMS_DISCONNECTED = 14, 
    E_ML_ECALL_ABNORMAL_HANGUP=15, 
    E_ML_ECALL_IMS_MSD_ACK = 20, 
    E_ML_ECALL_IMS_UPDATE_MSD = 21, 
    E_ML_ECALL_IMS_IN_BAND_TRANSFER = 22, 
    E_ML_ECALL_IMS_MSD_NACK = 23, 
    E_ML_ECALL_IMS_SRVCC = 24, 
    E_ML_ECALL_ONLY_DEREGISTRATION = 31, 
    E_ML_ECALL_MAY_DEREGISTER = 32, 
    E_ML_ECALL_PSAP_CALLBACK_START = 40, 
    
E_ML_ECALL_PSAP_CALLBACK_IMS_UPDATE_MSD 
= 41, 
    E_ML_ECALL_T2_TIMEOUT = 52, 
    E_ML_ECALL_T5_TIMEOUT = 55, 
    E_ML_ECALL_T6_TIMEOUT = 56, 
    E_ML_ECALL_T7_TIMEOUT = 57, 
    E_ML_ECALL_UNSPECIFIED = 0xffff, 
}ML_ECall_Indication; 
Enum of eCall indication type 
typedef struct{ 
    ML_ECall_Indication ind; 
    int call_id; 
Struct of eCall indication 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
Interface/Struct Description 
} ML_ECALL_IND_T; 
typedef void (*ML_ECALL_MSGCB_T)( 
    ML_ECALL_IND_T       *pvsMsg 
); 
Callback function for reporting eCall indication 
int32_t ML_EcallIndicationInit( 
ML_ECALL_MSGCB_T cb_func); 
Register the eCall indication callback function, and call back the 
cb_func function when the eCall status changes. 
Parameters: 
In: ML_ECALL_MSGCB_T cb_func 
int32_t ML_ResetIvs(void); Reset eCall state in modem and reconnect audio channel. 
int32_t ML_SetMSD(ml_ecall_set_msd* msd); 
Set MSD. 
Parameters: 
In: ml_ecall_set_msd* msd 
int32_t ML_SetTestNumber( 
  ml_ecall_set_num* test_num); 
Set test number or URI. 
Parameters: 
In: ml_ecall_set_num* test_num 
int32_t ML_SetReconfNumber( 
  ml_ecall_set_num* reconf_num); 
Set reconfig number or URI. 
Parameters: 
In: ml_ecall_set_num* test_num 
int32_t ML_MakeFastEcall( 
  ml_ecall_req_msg* msg); 
Trigger an eCall and transmit MSD data in one command. 
Parameters: 
In: ml_ecall_req_msg* msg 
int32_t ML_SetEmsdpri(ml_ecall_pri* pri); 
Set priority of test/reconfiguration eCall number/URI 
The default priority is “1>3>2>4”. 
Parameters: 
In: ml_ecall_pri* pri 
 
1.3 eCall Timer 
 EU CS eCall Timer 
In an eCall transaction, there are 10 timers defined in EN 16062. MediaTek has implemented T2, T3, T5, T6, T7, T10 in 
modem side. T1, T9 should be handled by IVS customer APP; T4 and T8 are PSAP timers and should be handled by PSAP 
application. 
Table 1-6. eCall timers in EN16062 
Name Origin Description Requirements Value 
T1 IVS Manually initiated eCall(MIeC) false triggering cancellation period 
•       START: T1 starts as soon as the eCall is manually activated 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
Name Origin Description Requirements Value 
•       STOP: T1 stops when Vehicle occupants cancel the manually triggered eCall 
transaction. 
•       EXPIRY: Upon expiry of T1 the IVS-NAD shall start call setup 
T2 IVS 
IVS Call Cleardown Fallback Timer (CCFT) 
•       START: T2 starts as soon as the IVS-NAD starts with call setup 
•       STOP: T2 stops when the IVS-NAD receives a call clear-down indication 
from the mobile network or a call clear-down message from the PSAP . 
•       EXPIRY: Upon expiry of T2 the IVS-NAD shall clear down the call 
3600 s (1h) 
T3 IVS 
IVS INITIATION signal duration 
•       START: T3 is started as soon as the IVS-NAD starts sending the INITIATION 
signal 
•       STOP: T3 stops when the IVS-NAD receives a SEND MSD signal from the 
PSAP , at which time the IVS-NAD shall stop sending the INITIATION signal. 
•       EXPIRY: Upon expiry of T3 the IVS-NAD shall stop sending the INITIATION 
signal 
2 s 
T4 PSAP 
PSAP wait for INITIATION signal period 
•       START: T4 starts as soon as the PSAP eCall modem has answered the call 
•       STOP: T4 stops when the PSAP eCall modem detects an INITIATION signal 
send by the IVS. 
•       EXPIRY: Upon expiry of T4, the PSAP eCall modem shall route the call to a 
PSAP operator 
5 s 
T5 IVS 
IVS wait for SEND MSD period 
•       START: T5 starts as soon as the IVS-NAD received notification that the call is 
first answered 
•       STOP: T5 stops when the IVS-NAD detects a SEND MSD signal sent by the 
PSAP . 
•       EXPIRY: Upon expiry of T5 the IVS-NAD shall reconnect the IVS audio 
system and terminate eCall specific behavior(i.e. it shall not proceed with the 
sending of MSD data) until requested to do otherwise. 
5 s 
T6 IVS 
IVS wait for AL-ACK period 
•       START: T6 starts as soon as the IVS-NAD has received LL-ACK 
•       STOP: T6 stops when the IVS-NAD receives an AL-ACK message 
•       EXPIRY: Upon expiry of T6, the IVS-NAD shall mark the transfer of the MSD 
as unsuccessful and reconnect the IVS audio system and terminate eCall specific 
behavior until requested to do otherwise 
5 s 
T7 IVS 
IVS MSD maximum transmission time 
•       START: T7 starts as soon as the IVS-NAD starts sending the MSD data 
•       STOP: T7 stops when the IVS-NAD receives an LL-ACK message 
20 s 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Yocto eCall 
MT8676 User Manual 
Confidential B 
Name Origin Description Requirements Value 
•       EXPIRY: Upon expiry of T7, the IVS-NAD shall mark the transfer of the MSD 
as unsuccessful and reconnect the IVS audio system and terminate eCall specific 
behavior until requested to do otherwise 
T8 PSAP 
PSAP MSD maximum reception time 
•       START: T8 starts as soon as the PSAP starts sending the SEND MSD signal 
•       STOP: T8 stops when the PSAP eCall modem receives a valid MSD 
(reception being acknowledged by sending an LL-ACK) 
•       EXPIRY: Upon expiry of T8, the PSAP eCall modem shall route the call to a 
PSAP operator 
20 s 
T9 IVS 
IVS NAD minimum network registration period 
•       START: T9 starts as soon as the IVS-NAD clears down a call, or gets notified 
that a call has been cleared down in accordance with EN 16072 Clause 7.17.3 
•       STOP: T9 is uninterruptable; until T9 expires the IVS-NAD shall remain 
registered on the serving network, and remain available to receive calls from the 
PSAP and rescue workers 
•       EXPIRY: Upon expiry of T9, the IVS-NAD may deregister from the serving 
network (see T10) 
3600 s 
T10 IVS 
IVS NAD network ‘Deregistration Fallback Timer’ (DFT) 
•       START: T10 starts as soon as the IVS-NAD clears down a call, or gets notified 
that a call has been cleared down 
•       STOP: T10 stops if the IVS-NAD receives or makes a new call 
•       EXPIRY: Upon expiry of T10, the IVS-NAD shall deregister itself from the 
serving network 
12 h  
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Yocto eCall 
MT8676 User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0285 MT8676_Yocto_FastRVC_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_FastRVC_User_Manual_V1.0.pdf

SHA-256：24e652ef273aedee47e2de50ce1d78e6d46c57cc8a01655854081e27d9245582

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0285.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto FastRVC User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto FastRVC 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 YunJie Wu Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto FastRVC 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
1 FastRVC ······································································································································································ 4 
1.1 Overview ·································································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
1.3 Configuration/Customization Guideline ··················································································································· 5 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 6 
1.4.1 FastRvc Issue Debug ······································································································································ 6 
1.4.2 FastRVC Debug Log Function ························································································································ 6 
Exhibit 1 Terms and Conditions ·········································································································································· 7 
 
 
List of Figures 
Figure 1-1. FastRVC flow····························································································································································· 4 
Figure 1-2. instantcam flow ························································································································································ 5 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto FastRVC 
User Manual 
Confidential B 
1 FastRVC 
1.1 Overview 
This chapter introduces the basic functions of MT8676 FastRVC and how to debug FastRVC problems. 
 
Fast RVC stands for Fast Rear View Camera, which is used to achieve fast reversing. Fast reversing requires the rear camera 
image to be displayed within 4 to 6 seconds after cold start and within 1 second after hot start. The FastRVC (instantcam) 
program was developed to realize the fast reversing function. 
 
1.2 Architecture/Process Overview 
BootLoader
Linux Kernel
Systemd Init
System 
Services
Launcher
instantcam
Wait reverse 
signal
Init Display
Start 
Camera
Show Image
Y
N
 
Figure 1-1. FastRVC flow 
 
Fast RVC (instantcam) is a process started by systemd during the boot phase. It mainly monitors the reversing events and 
sends them to the framebuffer to display the reversing screen. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto FastRVC 
User Manual 
Confidential B 
Confidential B
instantcam
ipc binder
FBS
Turbo
ISP
Sensor
DRM
Start camera Callback frame
 
Figure 1-2. instantcam flow 
 
The modules involved in the process of starting FastRVC and displaying the image are shown in Figure 1-2. The functions of 
each module are as follows:  
 
• IPC binder provides inter-process communication between instantcam and camerahalserver. 
• Turbo is a new architecture of MediaTek MW, which is used to manage upper-layer requests and obtain sensor image 
data from the underlying isp.  
• ISP is responsible for processing sensor data and passing it to turbo through conversion.  
• FBS is a part of MediaTek display, which is used to process the frame obtained from instantcam and send it to DRM for 
display. 
 
1.3 Configuration/Customization Guideline 
The reversing signal is enabled by default at startup: 
src/multimedia/mtkcam-mt8678/mtkInstantCam/instantcam.cpp 
- property_get("vendor.ins.rvc.test", value, "3"); 
+ property_get("vendor.ins.rvc.test", value, "1"); 
 
Specify the sensor type of the current project: 
src/multimedia/mtkcam-mt8678/mtkInstantCam/instantcam.cpp 
param.sensorType = Mtk::MTK_SENSOR_FEATURE_SENSOR_TYPE_DMS 
 
Indicates using the DMS sensor in muti as the sensor of FastRVC, which can be modified as needed. 
 
  
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto FastRVC 
User Manual 
Confidential B 
1.4 Frequently Asked Questions/Troubleshooting 
 FastRvc Issue Debug 
1.4.1.1 FastRvc Quick Reverse Function Show Image Time 
Time nodes of the startup phase:  
 
adb shell cat /proc/bootprof  [unit:ms] 
 
There are differences across different hardware platforms, requiring customer debugging. Actual measured data should be 
used as a reference. 
 
1.4.1.2 FastRVC Customization Function Causing Image Stuck 
Customers reported that the screen freezes during the boot phase. The reason is that customers use the PROP_SET 
function in the main thread of the display function, which makes the boot phase more time-consuming. It is recommended 
that customers avoid setting PROP_SET for each frame, and use sub-threads to handle time-consuming operations to avoid 
jamming the main thread. 
 
 FastRVC Debug Log Function 
Basic analysis requires providing boot-up phase log, serial port log and logcat log. 
For problems with instantcam log that cannot be printed or is missing during the boot -up phase, customers can use the 
add_boot_event function to output the log to bootprof for subsequent customized development. For key log 
troubleshooting, refer to this method to print and troubleshoot. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto FastRVC 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0286 MT8676_Yocto_General_Introduction_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_General_Introduction_V1.0.pdf

SHA-256：b4d883053c20fd02ea9760703770ab5b6cac14cb54889c8a1c6ec1c6b8fa0758

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0286.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Android General Introduction 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto 
General Introduction 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Xinmei Tan Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto 
General Introduction 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 MT8676 General Introduction ···································································································································· 4 
1.1 MT8676 Overview ···················································································································································· 4 
1.2 MT8676 Basic Infomation ········································································································································ 4 
1.3 MT8676 System Block Diagram ································································································································ 5 
1.4 MT8676 SoC Specification ········································································································································ 5 
Exhibit 1 Terms and Conditions ·········································································································································· 7 
 
 
List of Figures 
Figure 1-1. MT8676 system block ·············································································································································· 5 
 
List of Tables 
Table 1-1. MT8676 SoC specification ········································································································································· 6 
 
 
 
 
 
 
  
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto 
General Introduction 
Confidential B 
1 MT8676 General Introduction 
1.1 MT8676 Overview 
The MT8676 is a high-end automotive-grade 5G System-On-Chip (SoC) launched by MediaTek. It is designed for integrated 
cockpit and parking systems, offering exceptional cost-performance. 
 
The MT8676 device is a highly integrated and scalable application automotive processor with rich multimedia features and 
AI capabilities. The chip integrates 4 Arm® Makalu and 4 Arm® Klein, along with a powerful multi-standard video codec. 
Furthermore, an extensive set of interfaces is integrated for camera modules, external audio components, UFS/SD cards, 
and external modules. 
 
The ARM® Makalu application processor offers substantial computing power to support the latest open-source operating 
systems, as well as In-Vehicle-Infotainment (IVI) and Cockpit Domain Controller (CDC) applications. The ARM® Klein provide 
adequate computing power for dedicated tasks, such as software-based graphic rendering and real-time operating system 
in critical execution environments. 
 
In addition, the SMMU with unique performance enhancements for hard real-time masters, integrated in MT8676, provide 
a straightforward hardware mechanism that minimizes the virtualization overhead of hypervisors. This is particularly 
beneficial when multiple operating systems coexist for various application domains, thus optimizing overall system 
performance. 
 
The new Gen 7 APU in MT8676 is capable to adapt to the latest AI trends in achieving maximizing effective performance in 
AI-multimedia, AI-camera, and AI-voice experiences. The APU Gen 7 also aims to ensure that AI-enhanced technologies 
perform sustainably across various conditions for extended durations. 
 
The multi-standard video accelerator and an advanced audio subsystem are also integrated to provide advanced 
multimedia applications and services such as streaming audio and video, a multitude of decoders and encoders. 
The high-performance CPU, DSP , and hardware coprocessors are combined to provide a powerful modem subsystem 
capable of supporting NR Sub6, LTE Cat 18, Category 24 HSDPA downlink and Category 7 HSUPA uplink data rates, as well 
as Class 12 GPRS, EDGE. 
 
MT8676 also embodies wireless communication devices, including WLAN, Bluetooth and GPS. With four advanced radio 
technologies by Combo chipsets, MT8676 provides the best and most convenient connectivity solution in the industry. 
 
The chip supports rich automotive camera features, such as around view monitoring, back view monitoring, automotive 
driving recoding, and driver monitoring. These features can be employed via the maximum 16x video stream inputs with 
MIPI-CSI2, or Ethernet AVB inputs. The rich display interface (MIPI-DSI and DP) allows for support of up to 6 display panels, 
further enhancing its usability in various automotive applications. 
 
1.2 MT8676 Basic Information 
• System：  Yocto 5.0 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto 
General Introduction 
Confidential B 
• Kernel：   kernel-6.1 
• Chipset： MT8676 + MT6197 (RF) + MT6637 (CON) + MT6363 & MT6373 & MT6319O & MT6319U (PMIC) 
 
1.3 MT8676 System Block Diagram 
MT8676 system block diagram is shown in Figure 1-1: 
 
CONN
Cellular 
RF
PMIC (x4)
Gyro
 CAM 
DER
MT8676
Bridge
SER
Codec
UFS 3.1
 LP5x
UART
IIC
TDM
I2S
AMP
A2B
 A2B
DC/DC
MCU
eSIM
eSE
 TF
4nm
IVI + 5GTbox
Modem
ISP
Clock IC
ADSP
PAMID
APT
Bridge
SER
I/Q
Bridge
SER
VDEC
VENC
APU
HUD 
 Cluster
Headrest1
 Headrest2
IVI
 Co-pilot
eCall/32960
eCall SPK/MIC
4ANT + 2ANT
Dual SIM
Reserve ext. 3BT interface
Reserve C-V2X I/O
PCBA 2SPK/4MIC
Reserve ext. MCU(APA)
DSI
AVM
YUV 1080P/30*4
SER
CAM 
DER
 SER
 DMS+IMS+OMS*2
YUV 1080P/30*4
CAM 
DER
 SER DVR+Reserve*2
RAW 8MP/30*3
CAM 
DER
 SER
CAM 
DER
 SER
Streaming
YUV 1080P/60
CMS*2
RAW 1080P/60*2
CAM 
DER
 SER
 Or DP-IN Switch game device
Ethernet
GW
100
 1000
USB 
Hub
USB3.0*2
USB2.0*4
1000Mbps*1
100Mbps*1
DVR
C-V2X
IIC
Ext 3BT
Wi-Fi/BT
/GPS BB
UART
SPI
USB3
USB2
PCIe
64bit
DSI
DP
CSI
CSI
CSI
CSI
CSI
CSI
 
Figure 1-1. MT8676 system block 
 
1.4 MT8676 SoC Specification 
MT8676 SoC specification is shown in Table 1-1: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto 
General Introduction 
Confidential B 
Table 1-1. MT8676 SoC specification 
Category 5G SoC MT8676 
Process 4nm 
CPU   170K DMIPS 
GPU Mali-G615 MC6 
1.8T FLOPS 
APU MVPUx1 + MDLAx2, 21.5TOPS 
DRAM LP5x 64bit/7500Mbps, 24GB 
Flash UFS4.0 2lane x1 
Camera   19CAM, CSI x6 
Display   
6 Display 
DSI 8lane/2.5Gbps + DP1.4 4lane 
Up to 8K1K 
Video Decoder 4K/60, H.264/H.265 
Video Encoder 4K/60, H.264/H.265 
Audio 
ADSP HiFi3*2/800MHz 
TDM: 8OUT&8IN, I2S: 4OUT&5IN 
Modem   5G 3CC R16 & LTE Cat-19 
Connectivity  Wi-Fi 6E, BT5.3, GNSS 4M2B/10Hz 
Ethernet Ext PCIe MAC/PHY 
PCIe PCIe3.0 1lane 8Gbps x1 
USB USB3.2 Gen 1 x 1 
OS Yocto 5.0 
AECQ & ASIL AECQ-104, QM/System cluster ASIL-B 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto 
General Introduction 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0287 MT8676_Yocto_GPS_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_GPS_User_Manual_V1.0.pdf

SHA-256：4348c8ad81a08a4f3823b86e5b3e52a03b2033367285087ceb84b11907034a17

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0287.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto GPS User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto GPS 
 User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Neo.Sun Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto GPS 
 User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 GPS ············································································································································································ 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 GPS Abbreviations ········································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
 GPS Architecture ··········································································································································· 4 
 Common Flow ··············································································································································· 5 
1.3 Configuration/Customization Guideline ··················································································································· 6 
 Fix Rate Configuration ··································································································································· 6 
 Gnss Mode Configuration ····························································································································· 6 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 7 
 Log Related Issues ········································································································································· 7 
 Testing Related Issues ··································································································································· 7 
 GNSS Path ····················································································································································· 8 
Exhibit 1 Terms and Conditions ·········································································································································· 9 
 
 
List of Figures 
Figure 1-1.GPS architecture ······················································································································································ 5 
Figure 1-2. Common flow ··························································································································································· 5 
Figure 1-3. Fix Rate configuration ·············································································································································· 6 
Figure 1-4. GNSS configuration ·················································································································································· 6 
Figure 1-5. Mnld test ·································································································································································· 7 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 4 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto GPS 
 User Manual 
Confidential B 
1 GPS 
1.1 Overview 
 Brief Introduction 
This section introduces the basic functions of the MT8676 GPS and the solutions to common problems. 
 
 GPS Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
COLD start With time-assisted information, the end user will not encounter this scenario. 
FULL start Without any auxiliary information, equivalent to the scenario where an end user 
uses a positioning application for the first time after purchasing a mobile phone. 
GNSS Global Navigation Satellite System 
GPS Global Positioning System 
Hot start With all auxiliary information, the end user’s current positioning occurs less than 2 
to 4 hours after the last positioning. 
NMEA 
National Marine Electronics Association. A communication protocol used for data 
exchange between marine electronic devices, widely applied in GPS/GNSS receiver 
data output. 
TTFF Time To First Fix. The time required for a navigation device to successfully acquire 
the first valid positioning data from startup. 
WARM start With time and location-assisted information, the end user’s current positioning 
occurs more than 2 to 4 hours after the last positioning. 
 
1.2 Architecture/Process Overview 
 GPS Architecture 
MT8676 GPS architecture: 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto GPS 
 User Manual 
Confidential B 
 
Figure 1-1.GPS architecture 
 
 Common Flow 
 
Figure 1-2. Common flow 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto GPS 
 User Manual 
Confidential B 
1.3 Configuration/Customization Guideline 
 Fix Rate Configuration 
Fix Rate refers to the rate at which GNSS reports position information. The fixed rates currently supported by MT8676 
include: 1Hz, 2Hz, 5Hz, and 10Hz, with the default configuration being 1Hz output. The method to change the fixed rate is 
as follows: 
 
Method1: Modify the code to configure the fix_interval parameter. fix_interval = 100 corresponds to 10Hz; 
fix_interval = 1000 corresponds to 1Hz. 
 
 
Figure 1-3. Fix Rate configuration 
 
Method2: Dynamically modify the configuration file, which will take effect after restarting GNSS. Command: echo 
fix_interval=1000 >> /etc/gnss/mnl.prop /Set to 1Hz, effective after GPS restart. 
 
 Gnss Mode Configuration 
MT8676 supports GPS + GLONASS + Galileo + BeiDou multi-satellite navigation positioning systems. The default 
configuration for gnssopmode is set to MTK_CONFIG_GPS_GLONASS_BEIDOU_GALILEO_NAVIC (the default configuration 
offers the best GNSS performance, and it is recommended to use the default configuration). 
 
 
Figure 1-4. GNSS configuration 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto GPS 
 User Manual 
Confidential B 
1.4 Frequently Asked Questions/Troubleshooting 
 Log Related Issues 
• What logs do MediaTek engineers need for problem analysis? 
/data/debuglogger/mobilelog and NMEA log 
The mobilelog is enabled by default. To enable the NMEA log, you need to create the /etc/gnss/mnl.prop file and 
write the following into it: 
debug.dbg2file=1 
debug.filename=/data/debuglogger/gpsdebug.log 
Save and reboot, and the NMEA log will appear in /data/debuglogger/gpsdebug.log. 
 
 Testing Related Issues 
• Before testing, it is necessary to check whether there is a satellite signal and whether it is in an open sky 
environment. 
To test GNSS satellite search or positioning functions, the signal needs to be in an open sky environment, such as an 
open outdoor area or a laboratory with a signal amplifier. 
The prerequisite for successful positioning is having more than 6 satellites with a CNR of 40~43 dBm. ---> It is crucial 
to pay attention to this when testing GNSS. If you are unsure whether the current signal environment meets the 
requirements, place a comparison device in the same environment for comparison. 
 
• How to test the TTFF (Time To First Fix) for different startup modes such as FULL start, WARM start, COLD start, and 
HOT start? 
You can use mnld_test. 
Start test(open gps): mnld_test –h 
 
 
Figure 1-5. Mnld test 
  
According to the instructions, for example, if you need to test a cold start, you can use the following command: 
mnld_test start c & 
You can enter the following command to output the log to the serial port, where you can see TTFF and other 
information: 
journalctl -f --no-tail -o short-precise |grep mnldtest 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto GPS 
 User Manual 
Confidential B 
 GNSS Path  
Recipes & source code: 
meta/meta-mediatak/recipes-connectivity/mnld 
src/connectivity/gps/4.0 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto GPS 
 User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0288 MT8676_Yocto_GPU_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_GPU_User_Manual_V1.0.pdf

SHA-256：770f8cb07c3235be482ca06e9dfab05697e9af6b5e5223bab221e78c81b7745b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0288.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto GPU User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto GPU 
 User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Lingxiao Wang Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto GPU 
 User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 GPU ··········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 What is a GPU ··············································································································································· 4 
 Why GPU is Needed ······································································································································ 4 
 How to Use the GPU ····································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 5 
 Yocto Graphics System Framework ··············································································································· 5 
 Arm Mali-G615 Architecture and Feature Support ······················································································· 5 
1.3 Frequently Asked Questions/Troubleshooting ········································································································· 7 
 GPU Rendering Analysis ································································································································ 7 
 GPU Performance Analysis ···························································································································· 8 
Exhibit 1 Terms and Conditions ········································································································································ 10 
 
 
List of Figures 
Figure 1-1. Yocto graphics system framework ···························································································································· 5 
Figure 1-2. Arm Mali-G615 architecture ···································································································································· 6 
 
List of Tables 
Table 1-1. Arm Mali-G615 feature support ································································································································ 6 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto GPU 
 User Manual 
Confidential B 
1 GPU 
1.1 Overview 
This section mainly introduces the basic knowledge of the MT8676 Graphics Processing Unit (GPU). 
MT8676 GPU uses the Arm Mali-G615, with a computing power of 1.8T FLOPS. 
 
 What is a GPU  
A GPU, also known as a graphics processor, visual processor, or display chip, is a microprocessor specialized in performing 
image and graphics-related computations on personal computers, workstations, gaming consoles, and some mobile 
devices such as tablets and smartphones. 
 
 Why GPU is Needed 
The GPU, as the “heart” of the hardware graphics card, holds a status equivalent to that of the CPU in a computer system. 
The GPU can also be used as an important criterion to distinguish between 2D and 3D hardware graphics cards. 2D 
hardware graphics cards primarily use the CPU to handle features and 3D images, which is referred to as “software 
acceleration.” 
 
The GPU parallel programming model is entirely different from the CPU serial programming model, resulting in many 
excellent algorithms on the CPU not being directly mappable to the GPU. Additionally, the GPU architecture is akin to a 
shared memory multiprocessor structure, leading to significant differences between parallel programs designed for the 
GPU and serial programs for the CPU. The GPU mainly employs key technologies such as cubic environment mapping, 
hardware Transform and Lighting (T&L), vertex blending, bump mapping, texture compression, and a dual-texture four-
pixel 256-bit rendering engine. 
 
Due to the highly parallel nature of graphics rendering tasks, the GPU can effectively improve processing power and 
memory bandwidth simply by increasing the number of parallel processing units and memory control units. 
 
The design purposes of the GPU and CPU are fundamentally different. The CPU is designed to handle general-purpose 
tasks and thus has complex control units, whereas the GPU is primarily used to handle computationally intensive but less 
logically complex tasks. The processing units in the GPU can be more extensively utilized as execution units. Therefore, 
compared to the CPU, the GPU has unparalleled advantages in application scenarios characterized by large amounts of 
repetitive data set computations and frequent memory access. 
 
 How to Use the GPU 
There are two ways to use the GPU. One way is for the developed application to call the GPU device through a general 
graphics library interface. The other way is for the GPU itself to provide an API programming interface, allowing the 
application to directly call the GPU device through the provided API. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto GPU 
 User Manual 
Confidential B 
Using the GPU through a general graphics library involves utilizing existing graphics function libraries such as OpenGL or 
Direct3D. This method controls the GPU’s internal shaders to perform the required computations by writing in a shading 
language. 
 
Currently, the industry-recognized graphics programming interfaces are mainly OpenGL and DirectX. OpenGL is the 
preferred environment for developing interactive and portable 2D and 3D graphics applications and is the most widely 
used standard for graphics applications. Any environment that adheres to the OpenGL standard will produce the same 
visual effects. Similar to OpenGL, DirectX (Direct Extension) is also a graphics API. To meet the needs of GPU applications, 
DirectX defines new versions in a timely manner based on the expansion and progress of new GPU product features, 
providing functionalities almost in sync with those offered by the GPU. 
 
1.2 Architecture/Process Overview 
 Yocto Graphics System Framework 
Please refer to Figure 1-1 for the Yocto graphics system framework: 
 
 
Figure 1-1. Yocto graphics system framework 
 
 Arm Mali-G615 Architecture and Feature Support 
Please refer to Figure 1-2 for the Arm Mali-G615 architecture. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto GPU 
 User Manual 
Confidential B 
 
Figure 1-2. Arm Mali-G615 architecture 
 
Please refer to Table 1-1 for the Arm Mali-G615 feature support. 
 
Table 1-1. Arm Mali-G615 feature support 
Features Value Description 
Anti-Aliasing • 4x MSAA 
• 8x MSAA 
• 16x MSAA 
4x Multi-Sampling Anti-Aliasing 
(MSAA) with minimal 
performance drop. 
API Support • OpenGL® ES 1.1, 2.0, 3.1, 3.2 
• Vulkan 1.1, 1.2, 1.3 
• OpenCL™ 1.1, 1.2, 2.0 Full Profile 
Full support for next-generation 
and legacy 2D/3D graphics 
applications. 
Adaptive Scalable Texture 
Compression (ASTC) 
Low Dynamic Range (LDR) and High Dynamic 
Range (HDR). 
Supports both 2D and 3D images. 
ASTC offers several advantages 
over existing texture compression 
schemes by improving image 
quality, reducing memory 
bandwidth and thus energy use. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto GPU 
 User Manual 
Confidential B 
Features Value Description 
Arm Frame Buffer Compression 
(AFBC) 
• Version 1.3.2 
• 4x4 pixel block size 
AFBC is a lossless image 
compression format that provides 
random access to pixel data to a 
4x4 pixel block granularity. It is 
employed to reduce memory 
bandwidth both internally within 
the GPU and externally 
throughout the SoC. 
Arm Fixed Rate Compression 
(AFRC) 
• Version 1.0 
• 4x4 pixel block size 
AFRC is a lossy image compression 
format. AFRC can be used for 
compressing external texture 
inputs and framebuffer outputs 
from the GPU. Configurable 
compression ratio provides 
guaranteed bandwidth reduction 
for such surfaces and memory 
footprint saving. 
Variable Rate Shading • Pipeline, primitive and attachment 
shading rates 
• Up to 4x4 shading rate 
Variable Rate Shading decouples 
fragment shading frequency from 
rasterization frequency, providing 
the opportunity to make energy 
savings while maintaining 
perceived visual quality. 
 
1.3 Frequently Asked Questions/Troubleshooting 
 GPU Rendering Analysis  
When screen rendering anomalies occur, the issue can generally be analyzed from three aspects: Weston/Display, GPU, 
and Application. To determine if it is an Weston/Display issue, first check the log for any display-related errors and proceed 
with further analysis based on the log. Additionally, the platform has two compositing methods, which can be done 
through OVL or GPU. You can disable hardware OVL and force the use of GPU for compositing to check for anomalies. 
Finally, you can use the screenrecord command to record the screen and check if the recording also shows rendering 
anomalies. If it is determined to be an Weston/Display issue, you can contact the relevant owner for further analysis. 
 
For GPU issues, search the log for errors related to keywords such as Mali/EGL/GLES and proceed with further analysis 
based on the errors. You can also use some debugging tools, such as Mali Graphics Debugger, etc. These tools can help 
analyze the problem. Additionally, you can conduct comparative experiments related to the GPU. 
 
For Application issues, you need to analyze together with the Application team to determine if there are problems with 
using GL interfaces during rendering or if incorrect textures are being passed for rendering. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto GPU 
 User Manual 
Confidential B 
1.3.1.1 GPU-Related Comparative Experiments 
Common comparative experiments are as follows: 
(1) Whether the issue is related to the Yocto system version. 
(2) Whether the issue can be reproduced on the previous generation GPU framework (Midgard/Bifrost) platform. 
(3) Whether the issue is related to the GPU driver version. 
(4) Whether the issue can be reproduced with AFBC turned off. 
(5) Whether the issue can be reproduced by forcing glFinish. 
(6) Whether the issue can be reproduced with partial update turned off. 
(7) Whether the issue is related to ASTC or MSAA. 
(8) RenderEngine backend switching experiment. 
(9) Other aspects, etc. 
 
 GPU Performance Analysis 
For analyzing GPU performance issues, there are generally three aspects to consider: GPU issues, Application issues, and 
issues related to other modules or the system. For GPU issues, you can check the Yocto log and kernel log for error logs 
with keywords such as Mali/EGL/GLES and proceed with further analysis based on the logs. Tools like systrace or perfetto 
can be used to capture and analyze the problem scenario, and Arm Streamline can be used to check hardware execution to 
identify which specific part is affecting GPU performance. Targeted comparative experiments can also be conducted to 
break down the parts affecting performance. 
 
For the Application part, systrace or perfetto can also be used to analyze whether the issue is caused by the Application. 
Issues related to other modules or the system can be analyzed through logs and flame graphs. 
1.3.2.1 Common GPU Performance Comparison Experiments 
Common comparative experiments for substandard GPU performance are as follows: 
(1) Whether the fixed performance mode passes. 
(2) Presence of unlimited frequency factors (e.g., thermal). 
(3) Whether it is related to the Power Policy strategy. 
(4) Whether it is related to driver overhead. 
(5) Whether it is related to memory bandwidth/GPU QoS. 
(6) Whether it is related to the GPU driver version. 
(7) Arm Mali Offline Compiler. 
(8) Other aspects, etc. 
 
1.3.2.2 Performance Optimization Suggestions 
The following are several suggestions for GPU performance optimization: 
 
(1)  Identify Performance Bottlenecks 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto GPU 
 User Manual 
Confidential B 
Determine which specific part is affecting the platform’s performance, such as the CPU, GPU (vertex or fragment), 
bandwidth, etc. Once the performance bottleneck is identified, targeted optimizations can be made. 
 
(2) Heavy Vertex Load 
A heavy vertex load can cause stuttering during GPU rendering. When using OpenGL, avoid having excessively large 
vertex attribute data. 
 
(3) Heavy Fragment Load 
Minimize overdraw and avoid using unnecessary precision and optimize mathematical expressions in shaders. Using 
simple and efficient statements in shaders can reduce the fragment load. 
 
(4) Bandwidth Bottleneck 
Optimization directions for bandwidth typically include: AFBC, ASTC, render size, mipmapping, pixel format, etc. 
 
(5) Driver Overhead 
Avoid using certain interfaces that cause the CPU and GPU to run serially (e.g., glReadPixels, glFinish). Optimize the 
number of gl interface calls per frame and advocate the use of VBO, EBO, VAO, etc. 
 
(6) Developer Guide (From Arm Developer) 
Arm GPU Best Practices Developer Guide 
Link: https://developer.arm.com/documentation/101897/0301?lang=en 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto GPU 
 User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0289 MT8676_Yocto_Log_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Log_User_Manual_V1.0.pdf

SHA-256：e81eb416e8a55892bae2a2815438b8287b064e6c8970f892b2cc3fef585dab5a

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0289.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto Log 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Log 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 徐夏吟 正式版本 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto Log 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 Log ············································································································································································· 4 
1.1 概述·········································································································································································· 4 
 简单介绍 ······················································································································································ 4 
 名词解释 ······················································································································································ 4 
1.2 架构/流程概述 ························································································································································ 4 
 Log 架构介绍 ················································································································································ 4 
 Kernel Log 接口介绍 ···································································································································· 5 
 Userspace Log 接口介绍 ······························································································································ 5 
 Journalctl 命令介绍 ······································································································································ 5 
 Mobilelog 介绍 ············································································································································· 6 
 Mdlogger 介绍 ·············································································································································· 6 
1.3 配置/客制化指南 ···················································································································································· 6 
 Mobilelog 控制介绍 ····································································································································· 6 
 Mdlogger 配置介绍 ······································································································································ 7 
1.4 常见问题/故障排除 ················································································································································ 8 
附件一 附加条款 ······························································································································································· 9 
 
 
图片目录 
图 1-1. Yocto MTK log 流程 ························································································································································ 4 
 
表格目录 
表 1-1. 名词解释········································································································································································ 4 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto Log 
User Manual 
Confidential B 
1 Log 
1.1 概述 
 简单介绍 
此文主要介绍在 Yocto 系统上，MTK log 架构和常用 log 抓取方法。 
 
 名词解释 
表 1-1. 名词解释 
缩略词 解释 
Bootloader log AP 端开机阶段 Bootloader 的 log 
dmesg 一个命令，用于输出 Kernel log，用法后文详述 
Journalctl 一个命令，用于输出 Userspace log，用法后文详述 
Kernel log AP 端 Kernel driver 层 log 
Mdlogger MTK 的 log daemon，记录 modem 端 log 到 storage 
Mobilelog MTK 的 log daemon，记录 AP 端 log 到 storage 
Modemlog Modem 端的 log 
UART console 通过串口输出 log 
Userspace log AP 端 Userspace 层 log 
1.2 架构/流程概述 
 Log 架构介绍 
 
图 1-1. Yocto MTK log 流程 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto Log 
User Manual 
Confidential B 
Yocto 上 MTK 依赖原生 log 机制，并做了一些优化，主要增加收集各种 log 到 storage 一处。 
如图，AP 端所有 log 都会被 Mobilelog 收集， Modem 端 log 会被 Mdlogger 收集，都保存到/data/debuglogger
路径下。 
同时，保留了通过命令灵活抓取 Kernel log 和 Userspace log 的功能。 
 
 Kernel Log 接口介绍 
#include <linux/printk.h> 
使用其中的：pr_err/pr_warn/pr_info 等接口， 各接口实际定义如下： 
#define pr_emerg(fmt, ...) \ 
   printk(KERN_EMERG pr_fmt(fmt), ##__VA_ARGS__) 
  #define pr_alert(fmt, ...) \ 
   printk(KERN_ALERT pr_fmt(fmt), ##__VA_ARGS__) 
  #define pr_crit(fmt, ...) \ 
   printk(KERN_CRIT pr_fmt(fmt), ##__VA_ARGS__) 
  #define pr_err(fmt, ...) \ 
   printk(KERN_ERR pr_fmt(fmt), ##__VA_ARGS__) 
  #define pr_warn(fmt, ...) \ 
 printk(KERN_WARNING pr_fmt(fmt), ##__VA_ARGS__) 
  #define pr_notice(fmt, ...) \ 
   printk(KERN_NOTICE pr_fmt(fmt), ##__VA_ARGS__) 
    #define pr_info(fmt, ...) \ 
   printk(KERN_INFO pr_fmt(fmt), ##__VA_ARGS__) 
 
 Userspace Log 接口介绍 
• Syslog 
#include <syslog.h> 
void syslog(int priority, const char *message, ... /* argument */); 
 
其中 priority 表示 log level， 可设为： 
LOG_EMERG/LOG_ALERT/LOG_CRIT/LOG_ERR/LOG_WARNING/LOG_NOTICE/LOG_INFO/LOG_DEBUG 
 
• 标准输出/标准错误接口 
#include <stdio.h> 
int printf(const char* format, ...);                      ----    向 stdout 中输出，等同于 fprintf（stdout，"xxx\n"） 
int perror(const char* format, ...);                      ----    向 stderr 中输出，等同于 fprintf（stderr，"xxx\n"） 
int fprintf( FILE *stream, const char *format, ... );       ---- stream 为 stdout/stderr/other steam 
int vprintf(const char* format, va_list arg);         ---- 注意，此 function 一般同 va_start/va_end 配套使用。 
int vfprintf(FILE *fp, const char *format, va_list ap) 
 
 Journalctl 命令介绍 
Journalctl 命令可灵活输出 userspace log， 常见用法: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto Log 
User Manual 
Confidential B 
adb shell journalctl -f --no-tail > C:\ journal.log 
 
-f 表示持续输出 log 
--no-tail 表示同时输出 log buffer 内容 
> C:\ journal.log 表示将 log 重定向到 PC 文件。 
 Mobilelog 介绍 
Mobilelog 是 MTK 的 log daemon, 记录 AP 端 log 到平台/data/debuglogger/mobilelog 下。 
其下包含很多支 APLog_*。当停掉录制 log，然后再开始 录制 log 时，就会生成一支新的 APLog。当平台重启时，
重启后也会将 log 录制到新的 APLog 中。 
其下主要包括： 
main_log_*       存储 Userspace log 
kernel_log_*    存储 Kernel log 
pl_lk                   存储此次开机阶段 Bootloader log 
adsp_* / scp_* / sspm_* / vcp_*  /…     存储一些 tinysys 的 log 
 Mdlogger 介绍 
Modemlog 是 MTK 的 log daemon，记录 Modem 端 log 到平台/data/debuglogger/mdlog1 下。 
其下包含很多支 MDLog_*。 当停掉录制 log， 然后再开始录制 log 时，就会生成一支新的 MDLog。当平台重启
时，重启后也会将 log 录制到新的 MDLog 中。 
 
其下主要包括： 
MDDB_PHONE_unlwtg_n.EDB 存储 MDDB， 即 Modem 的数据库 
MDLog1_* 存储 Modem log 
1.3 配置/客制化指南 
Kernel Log 输出到UART 控制台时控制Log Levelecho <level> > /proc/sys/kernel/printk       
level 可以设为 0-8， 设的越大，能输出的 log level 越多， 当设为 8 时，表示所有 log level 都可以输出， 
e.g., echo 8 > /proc/sys/kernel/printk 
 Mobilelog 控制介绍 
请注意，Mobilelog 在 user 版本默认没有构建，如需放开，请在 meta/meta-mediatek-mt8676/recipes-
auto/images/mtk-core-image-auto8676.bb 中添加：MTK_LOG_CUSTOMER_SUPPORT = “yes” 
1.3.1.1 启停命令（重启后仍生效） 
deep_start/ deep_stop 启/停 Mobilelog，且启停状态重启后延续： 
adb shell mobile_log_d --control deep_start 
adb shell mobile_log_d --control deep_stop 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto Log 
User Manual 
Confidential B 
1.3.1.2 启停命令（只影响此次开机） 
start/stop 启/停 Mobilelog，但不影响重启后 mobilelog 的启停状态： 
adb shell mobile_log_d --control start 
adb shell mobile_log_d --control stop 
 
1.3.1.3 Log Size 管控 
• 编译阶段设定默认 log size：（单位是 MB） 
src/devtools/mobile_log_d/config.h 中：SIZE_DEFAULT 
 
• 动态通过命令设定 log size： （单位是 MB） 
adb shell mobile_log_d --control logsize=100    
 
 Mdlogger 配置介绍 
请注意，Mdlogger 同 Mobilelog 一样，在客户版本是默认没构建，如需放开，请在 meta/meta-mediatek-
mt8676/recipes-auto/images/mtk-core-image-auto8676.bb 中， 添加：MTK_LOG_CUSTOMER_SUPPORT = 
“yes” 
1.3.2.1 暂停/恢复命令 
暂停：     
emdlogger_ctrl 9 
 
恢复：   
emdlogger_ctrl 8 
 
1.3.2.2 停止/启动命令 
停止 log:   
emdlogger_ctrl 7 
 
 
启动有几种模式，分别对应不同的命令： 
emdlogger_ctrl  3    表示 Modem log 通过 USB 发送到 PC 端， 通过 ELT tool 查看 
emdlogger_ctrl  4    表示 Modem log 存到 storage 
1.3.2.3 Log Size 管控 
• 编译阶段设定默认 log size：（单位是 MB） 
src/devtools/mdlogger/emdlogger/logrecycle.cpp 中： getLogRecycleSize 函数修改其ret = 600 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Log 
User Manual 
Confidential B 
 
b．动态通过命令设定 log size  （单位是 MB） 
emdlogger_ctrl  21 <size>    
 
1.4 常见问题/故障排除 
常常客户对 Modemlog/Mobilelog 会有疑问，称日志找不到， 常因 storage 满了后导致 log 无法存储，或者 log 被
rotate 机制删除。 
如发现异常或有疑问，都请提供/data/debuglogger 下所有文件。提交问题至 eservice，提交对应的异常 log，详
细说明是哪一种类的 log 发生的异常，以及复现场景和复现概率。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto Log 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0290 MT8676_Yocto_OTA_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_OTA_User_Manual_V1.0.pdf

SHA-256：15941d5cdc16d0019d9d620f878422f7206776525cceaebd0e9f3174014d7d3e

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0290.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-09-19 
MT8676 Yocto OTA User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto OTA 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-09-19 Yiru Feng Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto OTA 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 OTA ············································································································································································ 4 
1.1 Overview ·································································································································································· 4 
1.1.1 Brief Introduction ·········································································································································· 4 
1.1.2 Purpose ························································································································································· 4 
1.1.3 Who Should Read This Document················································································································· 4 
1.1.4 How to Use This Manual ······························································································································· 4 
1.2 OTA Update Definitions ············································································································································ 5 
1.3 OTA Abbreviation ····················································································································································· 5 
1.4 Enable A/B System Updates Service ························································································································· 5 
1.5 Architecture Overview ············································································································································· 5 
1.5.1 AB System Updates Process ·························································································································· 6 
1.5.1.1 How to Use Yocto Full/Delta OTA ···································································································· 7 
1.5.2 A/B System Partition Layout ························································································································· 8 
1.5.3 Build otapackage Architecture (Temporary Solution) ··················································································· 9 
1.5.3.1 Build Yocto targetfiles.zip ················································································································ 9 
1.5.3.2 Build Full otapackage.zip··············································································································· 10 
1.5.3.3 Build Delta otapackage.zip ············································································································ 10 
1.5.4 Change Verification Key for otapackage.zip ································································································ 11 
1.5.5 LK2 Boot Control Flow ································································································································· 12 
Exhibit 1 Terms and Conditions ········································································································································ 13 
 
List of Figures 
Figure 1-1. Yocto OTA update architecture ································································································································ 6 
Figure 1-2. Yocto AB partition layout ········································································································································· 8 
Figure 1-3. Yocto build otapackage architecture ························································································································ 9 
Figure 1-4. Yocto LK2 boot flow ··············································································································································· 12 
 
List of Tables 
Table 1-1. Chapter overview ······················································································································································ 4 
Table 1-2. Abbreviations ····························································································································································· 5 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto OTA 
User Manual 
Confidential B 
1 OTA 
1.1 Overview 
1.1.1 Brief Introduction 
The introduction to Yocto A/B system update is as follows: 
 
• The system update method is A/B update, where the device runs two completely parallel systems, active_slot and 
non-active_slot. 
• On the disk, always keep a bootable system so that the device will not become bricked. 
• During the LK2 phase, the active_slot is confirmed and the corresponding partition data is loaded based on the AB 
flag set in the misc partition. 
• The OTA upgrade runs in the background in normal mode, without user awareness. 
 
1.1.2 Purpose 
A guide to AB system updates is provided to users in this document. 
The document primarily discusses the methods for generating OTA packages and testing on the Yocto platform; it also 
covers the utilization of the AB flag in the boot process. 
 
1.1.3 Who Should Read This Document 
This document is mainly aimed at the following groups: 
• Engineers with knowledge of OTA A/B system updates (seamless updates) 
 
1.1.4 How to Use This Manual 
The distribution of information within this document is explained in this section, along with the provision of tips and 
examples to facilitate locating and comprehending information within this document. 
Table 1-1 outlines the chapters in this document. 
Table 1-1. Chapter overview 
No. Chapter Contents 
1.1 Introduction Described the scope and layout of this document 
1.2 OTA Update Definitions Definition of OTA upgrade 
1.3 Abbreviations OTA abbreviation 
1.4 Enable the A/B System 
Updates Service 
Open the required service for AB system upgrade on the MediaTek 
platform. 
1.5.1 A/B System Update Process Introduction to the architecture and upgrade methods of the AB system 
1.5.2 A/B System Partition Layout Introduction to A/B partitioning 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto OTA 
User Manual 
Confidential B 
No. Chapter Contents 
1.5.3 Build otapackage Architecture Introduce how to create OTA full upgrade package and differential 
upgrade package 
1.5.4 Change Verification Key for 
otapackage.zip 
Introduce the upgrade package signing key and its customization 
1.5.5 LK2 Boot Control Flow Introduction to bootctl parameters in Yocto LK2 phase 
 
1.2 OTA Update Definitions 
The professional terminology of OTA is defined as follows: 
 
Full Update: A full update refers to the complete update of the partition data to be upgraded on the device, with the 
update package containing complete image information for each partition. 
Delta Update: A delta update, also known as incremental update, refers to updating the differential part of the device’s 
partition data to the corresponding partition data of the target version. The upgrade package only contains the differential 
parts of two versions, which can greatly reduce the size of the upgrade package. 
 
Note: Only install the corresponding incremental update package on old or source devices used when compiling 
differential packages. 
 
1.3 OTA Abbreviation 
Table 1-2. Abbreviations 
Abbreviations Explanation 
Bootctl Boot control, A/B slot identification structure, stored in the misc partition 
LK2 Little Kernel 2, Yocto boot stage 
OTA Over-The-Air, divided into full updates and delta updates. 
 
1.4 Enable A/B System Updates Service 
Please add the following module to the corresponding project.bb file: 
• recipes-auto/images/mtk-core-image-auto8676.bb:  
–   update-engine-sideload-u \  
–   update-verifier-u \ 
 
update-engine-sideload-u: OTA upgrade module, perform partition read and write operations 
update-verifier-u: After successful OTA reboot, modify the new slot flag 
 
1.5 Architecture Overview 
This section first briefly describes the various modules of the system and their relationships: 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto OTA 
User Manual 
Confidential B 
1. A/B system update process 
2. A/B system partition layout 
3. Build otapackage architecture 
4. Change the verification key for otapackage.zip 
5. LK2 boot control flow 
 
1.5.1 AB System Updates Process 
 
Figure 1-1. Yocto OTA update architecture 
 
Figure 1-1 depicts the overall architecture of Yocto OTA update, from which the following information can be obtained: 
1. Yocto OTA updates can be divided into two steps: get otapackage and trigger process. 
MediaTek only provides OTA capabilities. otapackage is stored in the local environment and uses update script 
triggering the process.  
Customers can store otapackage in remote server or storage devices and implement triggering methods like APP 
themselves. 
 
2. Taking local update as an example, the general flow of OTA update is as follows: 
– Store the update package in the local PC environment. 
– Executing the OTA update script calls update_engine sideload to trigger the update. 
– Verify the integrity and accuracy of the update package (refer to Section 1.5.4 for key verification details) 
– Update the update data in the update package to the corresponding partitions respectively. 
– Validate the data that has been updated in the partition to ensure data accuracy. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto OTA 
User Manual 
Confidential B 
– Update the system boot control parameters, i.e. Bootctl information, to ensure that the system loads new slot 
partition data at the next boot. 
– Switch boot region to ensure that the system loads new preloader partition data at the next startup. 
– Reboot the device. 
 
1.5.1.1 How to Use Yocto Full/Delta OTA 
Test Environment Setup 
1. The PC has a Python 3 environment. 
2. Flash the base load in the DUT. 
3. Get OTA package. 
 
Test Step 
1. Device connected to Yocto ADB environment 
2. Execute the update script: python3 hypervisor_update.py --file otapackage_delta.zip > update.txt 
2>&1 
Note: 
▪ hypervisor_update.py: Update script 
▪ otapackage_delta.zip: OTA package, unlimited package name 
▪ > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
Expected result 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The first restart after the upgrade should successfully enter the home screen. 
3. Check whether the setting version has been updated. 
Note: If the test upgrade fails, please provide the update log and UART log in CR. 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto OTA 
User Manual 
Confidential B 
1.5.2 A/B System Partition Layout 
 
Figure 1-2. Yocto AB partition layout 
 
Yocto AB partition layout is as shown in Figure 1-2, and AB partition configuration can be done in the partition table: 
meta/meta-mediatek-mt8676/recipes-bsp/ptgen/files/auto8676p1_64/partition_table_emmc_ab.csv 
 
To reduce the update of AB partition, the target partition must first be modified to a single partition, and the entry in the 
partition table corresponding to “OTA_Update” should be changed to “N”. 
 
 
For the update of AB partitions, it is necessary to simultaneously create two new partitions, partition_a and partition_b, 
and set the corresponding “OTA_Update” field in the partition table to “Y”. The size of AB partitions must remain 
consistent. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto OTA 
User Manual 
Confidential B 
1.5.3 Build otapackage Architecture (Temporary Solution) 
 
Figure 1-3. Yocto build otapackage architecture 
 
Figure 1-3 describes the architecture of the Yocto OTA compilation update package, from which the following information 
can be obtained: 
 
1. Compiling the Yocto update package temporarily needs to be done using Android’s compilation environment 
2. Yocto Only compiles the update package roughly following the flow below: 
– Compile Yocto targetfiles.zip 
– Using the Yocto targetfiles.zip, compile and generate full update packages and differential update packages in the 
Android compilation environment. 
 
1.5.3.1 Build Yocto targetfiles.zip 
The Yocto targetfiles.zip needs manual replacement of all AB images of the new version to /default_target/IMAGE 
and /RADIO, then rezip to generate yocto_target.zip. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto OTA 
User Manual 
Confidential B 
 
 
Execute the command “zip -r yocto_target.zip .” in the current /default_target/ directory. 
 
1.5.3.2 Build Full otapackage.zip 
After obtaining yocto_target.zip, the full update package for Yocto can be compiled in the Android build environment. 
 
Compilation instructions: 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall yocto_target.zip.zip 
otapackage_full.zip 
 
Note: 
• ota_from_target_files: Update package compilation script 
• build/make/target/product/security/testkey: The key path for signing the update package. MediaTek defaults to 
using the testkey provided by Google, but your company can specify a different key path using the -k parameter . 
To change the verification key, please refer to Section 1.5.4. 
• yocto_target.zip: Yocto target files.zip 
• otapackage_full.zip: The final Yocto full update package, the package name can be freely specified. 
• Please make sure to compile the update package in the Android build environment and ensure that “source & lunch” is executed 
before compiling the entire package. 
 
1.5.3.3 Build Delta otapackage.zip 
Prerequisite: 
To compile a differential package, it is necessary to prepare two copies of yocto_target.zip in advance. One is the base 
version (source version) of yocto_target.zip, named as source_yocto_target.zip here; the other is the target version of 
yocto_target.zip, named as target_yocto_target.zip here. 
 
Note: Please ensure that the base version load burned on the platform and the base version target_files.zip are compiled from the same 
build. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto OTA 
User Manual 
Confidential B 
 
Compilation instruction: 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall -i 
source_yocto_target_files.zip target_yocto_target_files.zip otapackage_delta.zip 
 
Note: 
• ota_from_target_files: Update package compilation script 
• build/make/target/product/security/testkey: The key path for signing the update package. MediaTek defaults to 
using the testkey provided by Google. Your company can specify a different key path by using the -k parameter . 
To change the signature key, please refer to Section 1.5.4. 
• source_yocto_target.zip: yocto_target.zip for the source version  
• target_yocto_target.zip: yocto_target.zip for the target version 
• otapackage_delta.zip: The final Yocto differential update package, the package name can be freely specified 
• Please make sure to compile the update package in the Android build environment and ensure that “source & lunch” is executed 
before compiling the entire package. 
 
1.5.4 Change Verification Key for otapackage.zip 
OTA update will use two keys: xxx.pk8 and xxx.x509.pem. 
 
1. The key in xxx.pk8 format is used for signing the update package during packaging. 
2. The key in xxx.x509.pem format is used to verify the update package during the OTA update process. 
 
Please refer to the following two steps to modify the signature key of the update package: 
1. Replace the compilation instructions in 1.5.3.2 for compiling the full package and in 1.5.3.3 for compiling the 
differential package after changing the -k parameter to use the paths of xxx.pk8 and xxx.x509.pem files. 
2. Replace the actual xxx.x509.pem file used inside otacerts.zip located at meta/meta-MediaTek/recipes-
support/update-engine-sideload-u/files/ota. 
 
After the key is replaced, it is necessary to confirm that the following two files are consistent before the update verification 
can be passed. 
• /META-INF/com/android/otacert file for otapackage.zip file 
• /system/etc/security/otacerts.zip file on the device 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Yocto OTA 
User Manual 
Confidential B 
1.5.5 LK2 Boot Control Flow 
 
Figure 1-4. Yocto LK2 boot flow 
 
1. Upon completion of the OTA update, a restart is initiated, leading to the startup of Yocto OS and entering the Yocto 
LK2 phase. 
2. Check if Yocto has been successfully booted in the current slot by verifying if the value of “Yocto successful boot” in 
the boot control is 1. 
3. If a value of 1 is assigned to “Yocto successful boot”, it indicates that the current slot is “bootable”, no action should 
be taken, and the machine will proceed with booting. In case “Yocto successful boot” holds a value of 0, indicating 
that the current slot has not booted successfully previously, then verify if the restart count for the current slot 
exceeds 0 by examining tries_remaining within boot control. 
4. If the value of tries_remaining is above 0, decrement it by 1 and proceed with the boot process; otherwise, indicating 
that the current slot is “not bootable”, mark it as invalid by setting both its priority and "Yocto successful boot” to 0. 
5. Next, the current availability of slots is checked to determine if there are any with a priority other than 0. If none are 
found, an error message is generated by the system. If available, the priority of the rollback slot is set to 15 and Yocto 
is triggered to restart for completing the rollback. 
6. When Yocto successfully boots, set the value of “Yocto successful boot” for the current slot to 1. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Yocto OTA 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0291 MT8676_Yocto_Property_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Property_User_Manual_V1.0.pdf

SHA-256：46a716eaaab4bd02df26d46de6c90065da8d51fc5b5a0d39c58dfe0b0b106fb9

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0291.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2025-01-22 
MT8676 Yocto Property User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Property 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2025-01-22 Min Kuang Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto Property 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
1 Yocto Property ··························································································································································· 4 
 Functionality of Yocto Property ································································································································ 4 
 Provide the build.prop and local.prop ·········································································································· 4 
 Support setprop/getprop Command ············································································································ 4 
 Support Persist Property ······························································································································· 4 
 The API Supported by libprop.so ·················································································································· 5 
 Support Property Watch ······························································································································· 5 
 Specific Property Cross-OS Synchronization ································································································· 5 
 Yocto Property Framework ······································································································································· 6 
 Property Source Code ·············································································································································· 6 
 How to Use libprop.so ·············································································································································· 6 
 How to Add a Property to local.prop························································································································ 7 
 Property Watch ························································································································································ 7 
 Specific Property Cross-OS Synchronization ············································································································· 8 
Exhibit 1 Terms and Conditions ········································································································································ 10 
 
List of Figures 
Figure 1-1. getprop ····································································································································································· 4 
Figure 1-2. Property API ····························································································································································· 5 
Figure 1-3. Property flow ··························································································································································· 6 
Figure 1-4. prop.bb ····································································································································································· 7 
Figure 1-5. watchprop ································································································································································ 7 
Figure 1-6. watchprop API ·························································································································································· 8 
Figure 1-7. Property cross-OS synchronization flow ·················································································································· 8 
Figure 1-8. setprop from Android to Yocto································································································································· 9 
Figure 1-9. setprop from Yocto to Android································································································································· 9 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto Property 
User Manual 
Confidential B 
1 Yocto Property 
 Functionality of Yocto Property 
 Provide the build.prop and local.prop 
 
Figure 1-1. getprop 
 
 Support setprop/getprop Command 
For example: setprop xxx xxx 
      getprop xxx or getprop | grep xxx (xxx refers to property key and value) 
 
 Support Persist Property 
For example: setprop persist.xxx xxx 
         getprop persist.xxx 
         cat data/property/xxx 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto Property 
User Manual 
Confidential B 
 The API Supported by libprop.so 
 
Figure 1-2. Property API 
 
 Support Property Watch 
See Section 1.6. 
 
 Specific Property Cross-OS Synchronization 
See Section 1.7. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto Property 
User Manual 
Confidential B 
 Yocto Property Framework 
 
Figure 1-3. Property flow 
 
The Yocto property includes a prop daemon service and a libprop.so. Modules that link to libprop.so can invoke its API. The 
following steps describe the communication process:  
1. When a process calls property set, communication occurs with prop. 
2. Prop writes the property to shared memory. 
3. When a process calls property get, it directly reads from shared memory. 
 
 Property Source Code 
Yocto: 
• source path: src/apps/atom-base/progs/property/ 
• bb path: 
meta/meta-mediatek/recipes-devtool/prop/prop.bb 
meta/meta-mediatek/recipes-devtool/prop/propsync.bb  
meta/meta-mediatek/recipes-devtool/libprop/ libprop.bb 
 
Android: 
• Source path: vendor/mediatek/proprietary/external/propsync/ 
 
 How to Use libprop.so 
If a module wants to call the property API, it needs to link libprop.so, the steps are as follows: 
 
1. Modify the bb file 
    DEPENDS = "libprop” 
 
2. Add to the makefile 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto Property 
User Manual 
Confidential B 
    LDFLAGS:  -lprop 
 
3. Include properties.h in the source code 
    #include <prop/properties.h> 
 
4. xxx.service depends on prop.service (especially since it starts earlier than prop during boot, it is necessary to wait 
until prop is ready before use.) 
    After=prop.service 
 
 How to Add a Property to local.prop 
In prop.bb, place the properties that need to be generated during build time in local.prop. 
 
 
Figure 1-4. prop.bb 
 Property Watch 
1. The property_watch() function is developed to monitor a specific key. When this key is set, it notifies the process that 
calls property_watch to execute the callback function. 
UT test method: On the Yocto side, execute watchprop -w xxx(key) xxx(value) 
 
Figure 1-5. watchprop 
 
2. If a module wants to monitor a specific property, call the property_watch function directly and implement a custom 
callback function. 
Note: Property watch includes synchronous callback and asynchronous callback. 
If the return value of the callback is not a concern or if the callback implementation involves blocking and time-
consuming actions, use asynchronous callbacks by calling property_watch_async(). 
To obtain the callback return value through the property_set function, please use property_watch(). 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Property 
User Manual 
Confidential B 
 
 
Figure 1-6. watchprop API 
 
 Specific Property Cross-OS Synchronization 
 
Figure 1-7. Property cross-OS synchronization flow 
 
1. Android synchronization with Yocto (in the Android rc file, set the property to be monitored. When this property is 
set, it will trigger the process “synclient” to run. The synclient will communicate with the Yocto propsyncservice 
through vsocket. Then, the Yocto propsyncserver will set the property.) 
 
UT test: 
1) Monitor sys.boot_test in init.project.rc 
 
 
2) On the Android side: adb shell setprop sys.boot_test done 
3) On the Yocto side check: adb shell getprop sys.boot_test 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto Property 
User Manual 
Confidential B 
 
 
Figure 1-8. setprop from Android to Yocto 
 
2. Yocto synchronization with Android (Call the property_set_sync_android function directly. The callback function 
communicates with the Android synserver or synserverv through a vsocket. Subsequently, synserver or synserverv 
sets this property.) 
 
UT test:   
1) On the Yocto side: 
adb shell watchprop -s xxx(key) xxx(value) 0 0  (vendorproperty)        
adb shell watchprop -s xxx(key) xxx(value) 1 0  (system property) 
2) Check on Android: adb shell getprop xxx 
 
 
Figure 1-9. setprop from Yocto to Android 
 
Note: Please turn off selinux before testing (adb shell setenforce 0) 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto Property 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0292 MT8676_Yocto_SDCard_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_SDCard_User_Manual_V1.0.pdf

SHA-256：4b5c8e0b65ad55b7f059b403ff24aac8e0d82aca793028bb9675724f892810cc

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0292.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto SDCard  
User Manual 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto SDCard 
User Manual 
Confidential B 
Version History 
 
Version Date Author Description 
1.0 2024-08-12 Andy-ld Lu Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto SDCard 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 SDCard ······································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 Abbreviations ················································································································································ 4 
1.2 Architecture/Process Overview ································································································································ 4 
 SDCard Introduction ······································································································································ 4 
 MT8676 SDCard Feature ······························································································································· 5 
1.3 Configuration/Customization Guideline ··················································································································· 5 
 Kernel Config ················································································································································· 5 
 DTS Node ······················································································································································ 6 
 KO Table ························································································································································ 7 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 7 
 SDCard is not Recognized, VDD Voltage could not be Measured ································································· 7 
 SDCard is Recognized while Power On with Card but Failed while Hot-plug ················································ 7 
Exhibit 1 Terms and Conditions ·········································································································································· 9 
 
 
List of Figures 
Figure 1-1. Initialization flow of UHS-I card ································································································································ 5 
Figure 1-2. DTS node for SDCard ················································································································································ 6 
Figure 1-3. Pinctrl node of SDR104 mode ·································································································································· 6 
Figure 1-4. dws setting for detect pin ········································································································································ 8 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 4 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto SDCard 
User Manual 
Confidential B 
1 SDCard 
1.1 Overview 
 Brief Introduction 
This chapter introduces the hardware features, software configuration and function of SDCard controller, also contains the 
debugging methods for common problems. 
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
DDR50 Double Data Rate up to 50MB/s@50MHz 
SDR104 Signal Data Rate up to 104MB/s@208MHz 
SDR12 Signal Data Rate up to 12.5MB/s@25MHz 
SDR25 Signal Data Rate up to 25MB/s@50MHz 
SDR50 Signal Data Rate up to 50MB/s@100MHz 
UHS-I Ultra High Speed Phase I card 
 
1.2 Architecture/Process Overview 
 SDCard Introduction 
SDCard is a new generation of high-speed storage device based on semiconductor flash memory and developed from 
MultiMedia Card (MMC) format. It has high memory capacity, fast data transfer rate, great mobility flexibility, and good 
security, which is widely used on portable devices. In the SD3.0 protocol, theoretical maximum capacity of SDCard could be 
up to 2TB, the theoretical maximum speed of read/write could be up to 104MB/s. 
 
The major pins and functions are described as below: 
(1) CLK: Clock signal, host controller or SDCard transmit one cmd/data bit at each clock cycle, up to 208MHz in UHS-I 
speed mode; 
(2) CMD: Command and response shared pin, command is transmitted from host controller to SDCard, and response is 
from SDCard to host controller; 
(3) DAT0~3: Data lines, data could be transmitted from SDCard to host controller(read), and could also be transmitted 
from host controller to SDCard (write); 
(4) VDD: Power supply pin of SDCard, which is normally configured to 3.3V voltage, the scope specified in the SD protocol 
is 2.7V~3.6V; 
(5) CD: Detect pin of SDCard, normally achieve GPIO level variation pin in the state of card inserting and removing through 
the mechanical structure of SDCard holder. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto SDCard 
User Manual 
Confidential B 
 
Figure 1-1. Initialization flow of UHS-I card 
 
 MT8676 SDCard Feature 
(1) Compatible with SD3.0 protocol standards 
(2) Supports Basic DMA and Descriptor DMA mode 
(3) Supports Bus speed mode: Default Speed/High Speed/SDR12/SDR25/SDR50/SDR104/DDR50 
(4) Supports 1/4bits bus width 
 
1.3 Configuration/Customization Guideline 
 Kernel Config 
(1) Enables SDCard support 
CONFIG_MMC = y 
 
(2) Enables Mediatek host driver support 
CONFIG_MMC_MTK_PRO = m 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto SDCard 
User Manual 
Confidential B 
 DTS Node 
 
Figure 1-2. DTS node for SDCard 
 
(1) SD2.0 card needs to configure ”cap-sd-highspeed”, SD3.0 ultra-high speed card needs to configure ”sd-uhs-xxx”; 
(2) SD driving strength could be configured in the pinctrl node of the corresponding mode, such as below SDR104 mode, 
such as the SDR104 mode shown as Figure 1-3; 
 
 
Figure 1-3. Pinctrl node of SDR104 mode 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto SDCard 
User Manual 
Confidential B 
(3) SDCard detect pin could be configured by ”cd-gpios”, GPIO_ACTIVE_LOW represent low card insertion level, and 
GPIO_ACTIVE_HIGH represent high card insertion level; 
(4) The ”vmmc-supply” and ”vqmmc-supply” are configured according to actual used SDCard VDD power and Host I/O 
power. If it is necessary to use fast-power-off (VMCH hardware power off when SDCard is pulled out) function, “vmmc-
supply” should be configured as &mt6373_vmch_eint_high (match with GPIO_ACTIVE_LOW of “cd-gpios”) or 
&mt6373_vmch_low (match with GPIO_ACTIVE_HIGH of “cd-gpios”); and if it is unnecessary to use fast-power-off 
function, “vmmc-supply” should be configured as &mt6373_vmch. 
 
 KO Table 
Adds host driver ko to the following ko table path, “ramdisk” is configured in the column three, which means that ko would 
be installed into initramfs. 
meta/meta-mediatek-mt8676/recipes-kernel/linux/ko_order_table/${PROJECT}/ko_order_table.csv: 
 
 
 
1.4 Frequently Asked Questions/Troubleshooting 
 SDCard is not Recognized, VDD Voltage could not be Measured 
(1) Checks the correction of Kernel config and DTS according to the previous section; 
(2) If VDD supplied power is MT6373, and detect pin is connected to SD_DET pin of MT6373, check if the configured 
power node of “vmmc-supply” is matched with the polarity of detect pin; 
(3) If the result of step (2) is okay, configure “vmmc-supply” as &mt6373_vmch and check VDD voltage, correct voltage 
represents there is problem in fast-power-off function, submit PMIC issue to MTK; 
(4) If VDD could not power up yet in step (3), catch kernel log and submit SDCard issue to MTK. 
 
 SDCard is Recognized while Power On with Card but Failed while Hot-plug 
(1) Checks the correction of “cd-gpios” configuration in DTS according to the previous section; 
(2) If DTS configuration is correct , check the correction of the GPIO configuration for detect pin in the file whose path is 
src/devtools/dct/dws/mt6897/${PROJECT}.dws, refer to the configuration shown in Figure 1-4; 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto SDCard 
User Manual 
Confidential B 
 
Figure 1-4. dws setting for detect pin 
 
(3) If the DTS and dws configuration are all correct but SDCard could not be recognized yet while hot-plug, measure the 
level of detect pin in the state of card inserting and removing, submit SDCard issue to MTK if the result of 
measurement meets expectations. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto SDCard 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0293 MT8676_Yocto_Secure_Boot_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Secure_Boot_User_Manual_V1.0.pdf

SHA-256：3b4bd744f5de8c2618fdfea7aead92f8fdade1ba59dd682f1a4ed84de96da412

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0293.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:   1.0 
Publication date:  2024-11-20
MT8676 Yocto Secure Boot  
User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Secure Boot 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-20 Steven.Gao Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto Secure Boot 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 Secure Boot ······························································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Abbreviations ················································································································································ 4 
 BootROM ······················································································································································ 4 
1.2 Secure Boot ······························································································································································ 5 
 Secure Boot Check Process ··························································································································· 5 
1.3 Download Agent Authentication (DAA) ··················································································································· 6 
1.4 Security Feature Configuration ································································································································ 7 
 Generate a Key Pair ······································································································································· 7 
 Enable Secure Boot ······································································································································· 7 
 Compilation Software ··································································································································· 8 
 Independent Remote Signature Environment ······························································································ 8 
1.5 Signature DA ····························································································································································· 9 
 Generate dakey.h ·········································································································································· 9 
 Signature DA ··············································································································································· 10 
 Generate Authfile ········································································································································ 10 
Exhibit 1 Terms and Conditions ········································································································································ 11 
 
List of Figures 
Figure 1-1. Secure boot check process ······································································································································· 6 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 4 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto Secure Boot 
User Manual 
Confidential B 
1 Secure Boot 
1.1 Overview 
This document aims to provide an overview of the secure boot feature in the MT8676 SoC and its accompanying SDK. 
During the design and deployment cycle of this product, functionalities and features may change; these changes will be 
documented in subsequent versions of this document. Additionally, this document describes how to enable secure 
features. 
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
DA Download Agent (including DA_BR and DA_PL) 
DAA Download Agent Authentication 
DRAM Data Random Access Memory 
eFuse Electronic Fuse 
eMMC Embedded MultiMedia Card 
EVB Evaluation Board 
LK Little Kernel 
NVM Non-Volatile Memory 
PC Power Control 
PLL Phase-Locked Loop 
ROM Read-only Memory 
SBC Secure Boot Check 
SDK Software Development Package 
SoC System-on-Chip 
SRAM Static Random Access Memory 
TEE Trusted Execution Environment 
UART Universal Asynchronous Receiver/Transmitter 
USB Universal Serial Bus 
USBDL USB Download 
 
 BootROM 
BROM (BootROM) is the software in SoC ROM that cannot be modified. It is the first software executed by the application 
processor. The main work summary is as follows: 
 
• Perform basic hardware configuration for the System on Chip (SoC), such as setting the Phase-Locked Loop (PLL) and 
clock, to initiate system startup. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto Secure Boot 
User Manual 
Confidential B 
• Load the first-stage bootloader from the startup device UFS/eMMC/NAND to initiate the system. 
• Communicate with the host PC tool to load Download Agent (DA) software for mirroring downloads to external Flash 
devices that lack software or have corrupted software. 
• Perform secure boot checks on the first-stage bootloader or download agent using multiple secure boot check keys. 
 
1.2 Secure Boot 
 Secure Boot Check Process 
Secure boot check process for establishing a trusted execution chain from hardware trust. It can be enabled by burning 
SBC_EN in eFuse. This process is performed every time the system recovers from power-on reset. Figure 1-1 shows the 
basic secure boot check flow. Detailed description is as follows: 
 
1. After power-on reset, BROM uses the following process to verify the secure boot check (SBC) public key (SBC_PUBK) in 
non-volatile memory (NVM, such as eMMC or NAND). BROM sequentially uses the public key hash ( SBC_PUBK_HASH) 
from eFuse. 
(1) Read the hash value(SBC_PUBK_HASH) of the secure boot check public key (SBC_PUBK) from eFuse. 
(2) Read the SBC public key (SBC_PUBK) from NVM. 
(3) Calculate the hash value of the data from (2). 
(4) Check whether the data from (1) and (3) is the same. 
 
2. BROM loads and verifies the First-loader, which is the first stage bootloader. First, BROM reads the First-loader from 
NVM into the SoC's SRAM and uses the Secure Boot Check Public Key (SBC_PUBK) to authenticate the First-loader. If 
the First-loader verification is successful, the First-loader will be executed. The verification method uses SHA256 to 
compute the hash value and RSA (2048 bits) to verify the signature. The First-loader contains key cert, content cert, 
and image content; the specific process is as follows: 
(1) Use SBC_PUBK to verify First-loader key cert. 
(2) If the First-loader key cert validation is successful, compare the image pub key in the key cert with the image pub 
key in the content cert. 
(3) If (2) is consistent, then use the image pub key to verify the First-loader content cert. 
(4) Verification successful, and finally calculate the hash value of the First -loader image and compare it with the hash  
value stored in the content cert. 
Note: 
• If the external storage is NAND flash memory, BROM supports the second copy of First-loader. When BROM cannot load the first 
copy of First-loader, BROM will attempt to load/authenticate the second copy of First-loader. 
 
3. After the first stage bootloader, fitimage was introduced for subsequent verification. This includes images such as kernel 
and TEE. 
 
4. First-loader loads the Linux kernel loading program from NVM into a non-secure DRAM area and verifies it. It uses the 
VERIFIED public key embedded in First-loader to authenticate the kernel FIT signature and detects the HASH values of 
each sub-image in the Fit image. The verification method uses SHA256 to compute the hash value, RSA (2048 bits), 
and MTK or PSS padding for verification. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto Secure Boot 
User Manual 
Confidential B 
5. First-loader loads the TEE loader from NVM into a non-secure DRAM area and verifies it. It uses the VERIFIED public 
key embedded in the First-loader to authenticate and verify the TEE FIT signature and detects the HASH values of each 
sub-image in the Fit image. The verification method uses SHA256 to compute the hash value, RSA (2048 bits), and 
MTK or PSS padding for verification. 
 
6. After executing in the Linux system, the kernel can implement sampling verification of the read-only system through the 
rootf_check function provided by mtk in the Linux kernel. 
 
 
Figure 1-1. Secure boot check process 
 
1.3 Download Agent Authentication (DAA) 
When the device software in the external memory (eMMC/NAND/...) is empty or damaged, the host PC tool can 
communicate with the BROM in the SoC, load a DA software into the SRAM of the SoC and execute DA to download the 
image process. When Enable_DAA is burned, the DA will be authenticated by BROM, and the following process is called 
Download Agent Authentication (DAA). 
 
1. The host PC tool sends the authentication file (AuthFile) to BROM via USB or UART. 
2. BROM authenticates the AuthFile. 
(1) BROM reads the Secure Boot Check (SBC) public key (SBC_PUBK) from the AuthFile and uses the public key hash 
(SBC_PUBK_HASH~SBC_PUBK_HASH1) and the corresponding disable bits 
(SBC_PUBK_HASH_DIS~SBC_PUBK_HASH1_DIS) to authenticate the hash of the SBC key. 
(2) BROM uses SBC_PUBK to verify AuthFile. 
(3) BROM obtains the DAA key from the AuthFile. 
3. The host PC tool sends DA. 
4. BROM uses the DAA key to verify DA through SHA256/RSA-2048. 
5. BROM jumps to DA to execute the firmware download process. 
Note: 
• The SBC_PUBK and DAA keys can differ to enhance security levels. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto Secure Boot 
User Manual 
Confidential B 
1.4 Security Feature Configuration 
 Generate a Key Pair 
Generate two pairs of keys (including private keys and public keys): 1. SBC_KEY 2. VERIFIED_KEY. Place them in the 
directory: meta/meta-MediaTek/conf/machine/keys. 
 
1. The command to generate a private key: 
openssl genrsa -F4 -out sbc_key.pem 2048 
openssl genrsa -F4 -out verified_key.pem 2048 
openssl req -batch -new -x509 -key verified_key.pem -out verified_key.crt 
2. The command to generate a public key: 
openssl rsa -in sbc_key.pem -pubout > sbc_pubk.pem 
openssl rsa -in verified_key.pem -pubout > verified_pubk.pem 
 
Generate the Digital Authentication (DA) key pair for signing and verification using the same method 
(da_prvk.pem/da_pubk.pem). The DA can be identical to or different from the Secure Boot Controller (SBC) key. 
 
 Enable Secure Boot 
1.4.2.1 Generate SCB Public Key HASH 
1. Tool path: 
meta/meta-mediatek/recipes-bsp/lk/files/pbp 
2. Command: 
chmod 777 der_extractor 
python pbp.py -j sbc_key.pem -func keyhash_pss -o keyhash 
 
1.4.2.2 Blow SBC_PUBK0_HASH_Field 
Step 1: Use hexdump -C keyhash or xxd -c 32 keyhash to display the hexadecimal keyhash. 
Note:  
• You must use the -c parameter to generate a standard hexadecimal ASCII display result. 
 
hexdump -C keyhash 
00000000 16 b1 oe fc 5e 4e 06 76 e9 d9 6e 40 0c 51 ca 36 | ……. 
00000010 d1 be 93 d2 67 fd 3e af db f6 f7 89 4a 2c 40 18   |…….. 
 
 
xxd -c 32 keyhash 
00000000 16b1 oefc 5e4e 0676 e9d9 6e40 0c51 ca36 d1be 93d2 67fd 3eaf dbf6 f789 4a2c 
4018    ……… 
 
Do not use hexdump keyhash for display. 
hexdump keyhash 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Secure Boot 
User Manual 
Confidential B 
00000000 b116 fc0e 4e5e 7606 d9e9 406e 510c 36ca 
00000010 bed1 d293 fd67 ad3e f6db 89f7 2c4a 1840 
 
Step 2: Convert the result to a hexadecimal string. Remove the spaces between characters: 
16b10efc5e4e0676e9d96e400c51ca36d1be93d267fd3eafdbf6f7894a2c4018 
 
Step 3: Execute the ewriter command: 
ewriter 1 0 32 16b10efc5e4e0676e9d96e400c51ca36d1be93d267fd3eafdbf6f7894a2c4018 
 
For more detailed usage of the ewriter tool, refer to the MTK_eFuse_Writer_User_Guide. 
 
Note:  
• To enable the BROM secure boot verification function of the SoC, in addition to writing the above SBC_PUBK0_HASH field, it is also 
necessary to write SBC_EN. The eFuse can only be written once, so it is not recommended to write eFuse to enable the BROM 
secure boot verification function of the IC during the project development phase. 
 
1.4.2.3 Enable Secure Boot Configuration in the Software 
meta/meta-mediatek-mt8xxx/conf/machine/[project].conf 
SECURE_BOOT_ENABLE = “yes”  
ENABLE_ROOTFS_CHECK= “yes”  
 
This configuration is enabled by default in the public version to allow software-level secure boot and secure download 
without using eFuse, facilitating the verification of the secure boot process for software above LK. 
 
 Compilation Software 
Compile the entire project. 
 
 Independent Remote Signature Environment 
The MTK SDK supports an independent signing environment. In this mode, only the public key can be placed in the code 
repository, with the final signing operation performed later. 
 
1.4.4.1 Preparation of the Independent Signature Environment 
Step 1: Enable the configuration for remote standalone signing. After enabling STANDALONE_SIGN_PREPARE, the signing 
action will be placed in a standalone signing environment; therefore, after enabling this macro, the compiled image is by 
default unsigned. 
SECURE_BOOT_ENABLE = “yes” 
STANDALONE_SIGN_PREPARE =  “yes” 
ENABLE_ROOTFS_CHECK = “yes”  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto Secure Boot 
User Manual 
Confidential B 
Step 2: Keep the verified_pubk.pem file in the meta/meta-MediaTek/conf/machine/keys directory, and place 
other keys in a separate signing environment. 
 
Step 3:  Compile the image. 
 
1.4.4.2 Signed Image 
The independent signature environment toolkit is located at: meta/meta-MediaTek-mt8676/recipes-
devtools/standalone_sign_env. Customers can place the toolkit on a specific server according to their needs. 
 
Step 1: 
Place the relevant keys ${SBC_KEY}.pem and ${VERIFIED_KEY}.pem into the 'keys' folder. 
 
Step 2: Execute the signing script: sh sign_images.sh 
If everything functions correctly, the signed image will be placed in the 'signed' folder. 
 
Note:  
• sign_images.sh is an example file of the MTK SDK. It is strongly recommended that you use this file and modify it according to your 
needs. 
 
1.5 Signature DA 
DA Authentication (DAA) is a solution from MediaTek that ensures the security of firmware download progress. Before 
starting authentication, ensure that Secure Boot Check (SBC) is enabled and that the secure boot test has passed. The 
following steps are required for signing DAA using Android-related scripts and source code in Yocto: 1. Enable SBC. 2. Verify 
secure boot test completion. 3. Utilize Android scripts and source code for DAA signing. 
 
 Generate dakey.h 
Export the DA public key (da_pubk.pem), use der_extractor to generate dakey.h, this tool is located in the 
android source vendor/MediaTek/proprietary/scripts/sign-image_v2/der_extractor/ directory, please 
place the generated dakey.h in the following yocto path: 
[LK2] $LK2/target/$PROJECT/include/dakey.h 
 
Command: 
chmod 777 der_extractor 
python pem_to_der.py da_pubk.pem da_pubk.der 
./der_extractor da_pubk.der dakey.h ANDROID_SBC 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto Secure Boot 
User Manual 
Confidential B 
 Signature DA 
1. Key path settings 
Export the DA public key (da_prvk.pem) and place it in the Android path 
vendor/mediatek/proprietary/scripts/secure_chip_tool/custom_keys directory. 
 
2. Place the DA that needs to be signed in the prebuilt/resignda/ directory, and execute the following command to 
sign the DA: 
cd vendor/mediatek/proprietary/scripts/secure_chip_tool/ 
python MTK/resign_da.py prebuilt/resignda/DA_BR.bin MT6897 
settings/Legacy/da/bbchips_pss.ini all out/resignda/DA_BR-resing.bin 
 
 Generate Authfile 
The public key of DA is included in the authfile. BROM uses it to verify DA. Therefore, if DAA is enabled, the authfile is 
required when using flashtool to download the image. All .ini files located in the following path (Android branch) have 
been configured for this project. 
./vendor/mediatek/proprietary/scripts/secure_chip_tools/settings/Legacy/authfile/ 
 
Replace the .pem files located at the following positions: DA and root private key (rename sbc_key.pem to 
root_prvk.pem). 
./vendor/mediatek/proprietary/scripts/secure_chip_tools/custom_keys/ 
 
Authfile generation command: 
python MTK/toolauth.py -i settings/Legacy/authfile/toolauth_key.ini -g 
settings/Legacy/authfile/toolauth_gfh_config_pss.ini out/toolauth/auth_sv5.auth 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto Secure Boot 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0294 MT8676_Yocto_Sentry_Mode_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Sentry_Mode_User_Manual_V1.0.pdf

SHA-256：f59aa6695702a0834c4fa3b8b65fb74b5a69f444f39e0c2c629e3a26347fb8eb

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0294.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-09-19
MT8676 Yocto Sentry Mode 
User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Sentry Mode 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-09-19 Qing Wu Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto Sentry Mode 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 Sentry Mode ······························································································································································ 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 Abbreviation·················································································································································· 4 
1.2 Architecture······························································································································································ 5 
 Hardware Path in SCP···································································································································· 5 
 Hardware Path in APMCU ····························································································································· 6 
1.3 SW Control Flow ······················································································································································· 6 
 Enable Sentry Mode ······································································································································ 6 
 Low Power Mode ·········································································································································· 7 
 Wake Up Mode ············································································································································· 7 
 IPI Communication between APMCU and SCP ····························································································· 8 
 Memory Sharing between APMCU and SCP ································································································· 8 
1.4 How to Run Sentry Mode ········································································································································· 8 
 Sensor ··························································································································································· 8 
 App Setting ···················································································································································· 8 
 Recording ······················································································································································ 9 
Exhibit 1 Terms and Conditions ········································································································································ 10 
 
List of Figures 
Figure 1-1. Sentry mode architecture ········································································································································ 5 
Figure 1-2. Sentry mode HW path in SCP ··································································································································· 5 
Figure 1-3. Sentry mode HW path in APMCU ···························································································································· 6 
Figure 1-4. Sentry mode enable flow ········································································································································· 6 
Figure 1-5. Sentry mode wake up flow······································································································································· 7 
Figure 1-6. IPI Communication between APMCU and SCP ········································································································· 8 
Figure 1-7. Memory sharing between APMCU and SCP ············································································································· 8 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 4 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto Sentry Mode 
User Manual 
Confidential B 
1 Sentry Mode 
1.1 Overview 
 Brief Introduction 
The document introduces the implementation principles and operation methods of the Sentry Mode for MT8676. Sentry 
Mode refers to the real-time monitoring of the surroundings of the vehicle using external cameras when the vehicle is not 
in operation. It records video before and after detecting a threat (such as a collision or an anomaly detected by AI). 
 Abbreviation 
Table 1-1. Abbreviations 
Abbreviation Expalnation 
APK Android Package Kit 
APMCU Application Processor Microcontroller Unit 
CAM_BE Camera Back End 
CAM_FE Camera Front End 
CAMSV Camera Subsystem 
DRAM Dynamic Random-Access Memory 
GST GStreamer 
IPI Inter-Processor Interrupt 
MDP Media Data Processor 
MIPI Mobile Industry Processor Interface 
MIPICSI MIPI Camera Serial Interface 
PQDIP Picture Quality Digital Image Processor 
SCP System Control Processor 
SoC System on Chip 
V4L2 Video for Linux 2 
VDEC Video Decoder 
VENC Video Encoder 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto Sentry Mode 
User Manual 
Confidential B 
1.2 Architecture 
 
Figure 1-1. Sentry mode architecture 
 
The architecture of Sentry Mode is divided into two parts: SCP and APMCU. 
The SCP is a coprocessor on the System on Chip (SoC) that can operate at low power consumption while the system Central 
Processing Unit (CPU) is in sleep mode. The camera data collection, artificial intelligence (AI) detection, and collision 
detection functions for Sentry mode are all performed within SCP . 
APMCU is the main processor of the SoC and remains in sleep mode during the detection process in Sentry Mode. When a 
threat is detected, the SCP wakes up the APMCU, and video recording is performed within the APMCU. 
 
 Hardware Path in SCP 
 
Figure 1-2. Sentry mode HW path in SCP 
 
In SCP, the hardware path for Sentry mode is as shown in Figure 1-2. 
The surround view camera is connected to MediaTek platform via serdes. MIPICSI receives mipi signal and then CAMSV (ISP 
P1 module) captures YUV422 data and stores it in DRAM. PQDIP (ISP P2 module) resizes the YUV422 data and converts its 
format to generate two streams. One stream is sent to AI detect module for AI detection, such as detecting if there are 
people nearby; the other stream is sent to video encoder module for data compression and storage. CAM_BE is 
responsible for data storage updates and communication with APMCU. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto Sentry Mode 
User Manual 
Confidential B 
 Hardware Path in APMCU 
 
Figure 1-3. Sentry mode HW path in APMCU 
 
In a hypervisor architecture, the APMCU for Sentry Mode operates on Yocto OS.  
The main functions of the Sentry Mode APK include: 
1. Enable or disable sentry mode 
2. Detect g-sensor signal 
3. Trigger video recording 
 
Video recording is achieved through GST to create a pipeline, which includes CAM_FE -> VDEC -> MDP -> VENC -> filesink. 
Communication between CAM_FE and the CAM_BE module in SCP via IPI is established to acquire camera images. The 
image layout is in a landscape format with H265 encoding. First, the video decoder (VDEC) converts the format to YUV420. 
Then, the MDP changes the image layout to a grid format. Finally, the video encoder (VENC) re-encodes the images into 
H265 format and stores them as an MP4 file. 
 
1.3 SW Control Flow 
 Enable Sentry Mode 
 
Figure 1-4. Sentry mode enable flow 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto Sentry Mode 
User Manual 
Confidential B 
Through the V4L2 interface, the application sends the sentry mode on/off settings to CAM_FE. Upon receiving the 
command, CAM_FE passes the settings to CAM_BE on the SCP side via IPI. After receiving the command, CAM_BE 
performs the corresponding operations to enable or disable sentry mode. 
 Low Power Mode 
Upon receiving the sentry mode on message, the pipeline in SCP is established as depicted in Figure 1-2 for saving the 
camera images and detecting the threats. 
 Wake Up Mode 
 
Figure 1-5. Sentry mode wake up flow 
 
1. Threat Detection: 
– G-sensor detects collision or AI detects a person or an object approaching the vehicle. 
2. SCP Analysis and Wake-Up: 
– SCP Analysis: The System Control Processor (SCP) analyzes the detected threat or anomaly. 
– Send Wake-Up Event: The SCP sends a wake-up event to the System Power Management (SPM). 
– SPM Power-On: The SPM powers on the Application Processor Microcontroller Unit (APMCU, ARM) and performs a 
kernel resume. 
3. Message Transmission: 
– SCP Transmits Message: The SCP transmits the collision message to the APMCU via Inter-Processor Interrupt (IPI) 
using the SCP Driver. 
4. Event Polling: 
– Application Polling: The Sentry Mode application (Sentry Mode APK) polls for G-sensor events to confirm the threat 
or anomaly. 
5. Video Recording: 
– Create Data Processing Pipeline: The Sentry Mode application creates a data processing pipeline using GStreamer 
(GST). 
– Start Video Recording: The application starts video recording to capture footage before and after the detected 
threat or anomaly. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Sentry Mode 
User Manual 
Confidential B 
 IPI Communication between APMCU and SCP 
 
Figure 1-6. IPI Communication between APMCU and SCP 
 
In Sentry Mode, the APMCU and SCP communicate via the mailbox. This includes settings for enabling or disabling Sentry 
Mode, as well as enqueueing and dequeueing camera image buffers 
 Memory Sharing between APMCU and SCP 
 
Figure 1-7. Memory sharing between APMCU and SCP 
 
As shown in Figure 1-7, a portion of Dynamic Random-Access Memory (DRAM) is reserved for use by Sentry Mode. In this 
way, in low-power mode, the SCP stores camera images in the reserved memory which can also be accessed by Yocto. 
When an anomaly is detected, Yocto can directly access this buffer and record it as an MP4 file, without the need for buffer 
copying between FreeRTOS and Yocto. 
 
1.4 How to Run Sentry Mode 
 Sensor 
In Sentry Mode, an AVM YUV sensor needs to be connected to the SPM8676 reference board. Specifically, a MAX96712 
camera daughterboard should be connected to the CON12 slot on the SPM8676 reference board, and four YUV sensors 
should be connected to the CON501 slot on the daughterboard. 
 App Setting 
Enter the following command in the Yocto shell interface: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto Sentry Mode 
User Manual 
Confidential B 
 
 
The sentry mode application interface shown as below will pop up, allowing you to click start/stop to enable or disable the 
sentry mode. 
 
 
 Recording 
In the event of a collision, 10 seconds of data before and after the collision will be recorded and stored in the /data/ 
directory. 
• Path: /data 
• Name: sentry_data_year_month_day_hour_minute_second.mp4 (Correct time can only be obtained when the 
platform is connected to the network, otherwise the default time of the platform will be used.) 
• Format: MP4 
• Duration: 20s 
• Video Layout: Horizontal strip 
 
 
If you need to display it in a grid format, you need to enter the following command. 
adb shell setprop vendor.sentrydvr.changepipeline.enable 1 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto Sentry Mode 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0295 MT8676_Yocto_SPI_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_SPI_User_Manual_V1.1.pdf

SHA-256：1befc8374cfe1ae3cf3c9f80b352f9f3cc640a12eb79b74443eeb9a2da669b1e

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0295.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2025-03-24
MT8676 Yocto SPI 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto SPI 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Jia Xue Official release 
1.1 2025-03-24 Alex Gan Added Section 1.3.2 Node Configuration 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto SPI 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 SPI ············································································································································································· 4 
1.1 Overview ·································································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
1.3 Configuration/Customization Guideline ··················································································································· 8 
1.4 Frequently Asked Questions/Troubleshooting ······································································································· 11 
Exhibit 1 Terms and Conditions ········································································································································ 14 
 
 
List of Figures 
Figure 1-1. Pin connection between SPI master and SPI slave ··································································································· 4 
Figure 1-2. Waveforms of four communication modes ·············································································································· 5 
Figure 1-3. Master device connected to multiple device pins ··································································································· 5 
Figure 1-4. SPI transmission format ··········································································································································· 6 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 4 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto SPI 
User Manual 
Confidential B 
1 SPI 
1.1 Overview 
 Introduction 
This chapter introduces the hardware, software and functions of the MT8676 SPI controller.  
 
 Abbreviation 
Table 1-1. Abbreviations 
Abbreviation Explanation 
CPHA Clock Phase 
CPOL Clock Polarity 
CS Chip Select Pin 
DMA Direct Memory Access 
FIFO First In First Out 
MISO Master In Slave Out 
MOSI Master Out Slave In 
PIO Programmed Input/Output Model 
SCLK SPI Clock 
SPI Serial Peripheral Interface 
 
1.2 Architecture/Process Overview 
 Introduction to SPI 
 
SPI interface is a bit-serial, four-pin transmission protocol. Figure 1-1 is an example of the connection between SPI master 
and SPI slave. SPI controller interface is a master responsible of the data transmission with the slave. 
 
 MT8676 SPI Characteristics 
• Provides eight SPI ports 
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
 
 Figure 1-1. Pin connection between SPI master and SPI slave 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto SPI 
User Manual 
Confidential B 
• Supports two transmission modes: DMA and FIFO 
• FIFO mode supports up to 32 bytes in a single transmission 
• If the transmission length is less than 1024 bytes, DMA mode supports up to 1024 bytes 
• DMA mode supports multiples of 1024 bytes (length = number of cycles * 1024, where 1 ≤ number of cycles ≤ 256). 
• The maximum transmission frequency is 52 MHz 
• There are four communication modes available (Mode 0, 1, 2, 3), as shown in Figure 1-2. 
• This essentially defines the SCLK edge on which the MOSI line switches, the SCLK edge on which the master samples 
• the MISO line, and the stable level of the SCLK signal (e.g., the clock level when the clock is not active, either high or 
low). Each mode is defined by a pair of parameters called "Clock Polarity" (CPOL) and "Clock Phase" (CPHA). 
 
Figure 1-2. Waveforms of four communication modes 
 
• SPI controller has only one CS pin. That is to say, it can only support a single slave. However, you can use GPIO as CS to 
support multiple devices, as shown in Figure 1-3. 
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
 Figure 1-3. Master device connected to multiple device pins 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto SPI 
User Manual 
Confidential B 
 SPI Transmission Format 
In DMA mode, the data to be transmitted should be prepared in advance in the system. In PIO mode, the system should 
first push the data to be transmitted into the SPI TX FIFO. Upon receiving the START command, the SPI will continuously 
send data to the slave while receiving data from the slave. 
 
 
Figure 1-4. SPI transmission format 
1.2.3.1 Interface Description 
1.2.3.2 spi_sync 
Prototype Parameter Return Value 
int spi_sync（struct 
spi_device *spi, struct 
spi_message *message） 
SPI: Pointer to the structure spi_device Return 0 if successful, 
otherwise return an error 
code Message: Pointer to the structure spi_message 
 
1.2.3.3 spi_async 
Prototype Parameter Return Value 
int spi_async（struct 
spi_device *spi, struct 
spi_message *message） 
SPI: Pointer to the structure spi_device Return 0 if successful, 
otherwise return an error 
code Message: Pointer to the structure spi_message 
 
1.2.3.4 spi_write_then_read 
The parameters for this routine always use a small buffer for copying and should not be used for more than 32 bytes. 
Performance-sensitive or bulk transfer code should instead use spi_{async, sync}() calls with DMA-safe buffers. 
Prototype Parameter Return Value 
int spi_write_then_read
（struct spi_device *spi，
const void *txbuf, unsigned 
n_tx, unsigned n_tx， void 
*rxbuf， unsigned n_rx ） 
SPI: Pointer to the structure spi_device 
Return 0 if successful, 
otherwise return an error 
code 
txbuf: Data to be written 
n_tx: Size of txbuf (in bytes) 
Rxbuf: Buffer where data will be read into 
n_rx: Size of rxbuf (in bytes) 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto SPI 
User Manual 
Confidential B 
1.2.3.5 Programming Guide 
1.2.3.6 Data Transfer with spi_sync 
Data is exchanged between SPI controller and SPI slave devices, and thus the steps for sending data are the same as those 
for receiving data. For example, sending and receiving data. 
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
 
1.2.3.1 Data Transfer with spi_async 
spi_sync function is synchronous. If you wish to use an asynchronous function, you should use spi_async instead. 
Please note that the callback function should be registered to spi_message.complete. Source code path: 
drivers/spi/spi.c. 
spi_message.complete callback function: 
 
static void xxxxxx_complete(void *args) 
{ 
 //transfer was success……; 
} 
 
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
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto SPI 
User Manual 
Confidential B 
 
ret = spi_async(spi, &msg); 
if(ret) { 
 ……; 
} 
 
1.3 Configuration/Customization Guideline 
 Device Tree 
Source code path: kernel-xxx/arch/arm64/boot/dts/mediatek/ 
• Add pinctrl to set  SPI pinmux 
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
 
• Add slave device on the SPI bus  
&spi { 
 pinctrl-names = "default"; 
 pinctrl-0 = <&spi_pins>; 
 status = "okay"; 
 spidev0: spi@0 { 
  compatible = "mediatek,spi-mt65xx-test"; 
  reg = <0>; 
  spi-max-frequency = <1000000>; 
 }; 
}; 
 
 Node Configuration 
In the device tree, the SPI node is in the “disabled” state by default: status = "disabled": 
spi: spi@xxxxxxxx { 
   compatible = "mediatek,mtxxxx-spi"; 
   mediatek,pad-select = <0>; 
   ...... 
   ...... 
   status = "disabled";//Default disabled 
  }; 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto SPI 
User Manual 
Confidential B 
 
When in use, configure it in the corresponding project DTS: status = "okay": 
&spi { 
 pinctrl-names = "default"; 
 pinctrl-0 = <&spi_pins>; 
 mediatek,pad-select = <0>;  
 status = "okay";// Manually configure to enable 
 spidev0: spi@0 { 
  compatible = "mediatek,spi-mt65xx-test"; 
  reg = <0>; 
  spi-max-frequency = <1000000>; 
                 }; 
     }; 
 
 PAD_SEL 
On some ICs, a set of SPIs may have different GPIOs available for selection. The specific group of GPIOs used by SPI is 
determined based on the GPIO table information. For instance, on the MT8675, SPI4 has options SPI4_A, SPI4_B, and 
SPI4_C. At this point, it is necessary to add mediatek,pad-select = <x>; in the dts file. 
&spi { 
 pinctrl-names = "default"; 
 pinctrl-0 = <&spi_pins>; 
 mediatek,pad-select = <0>; // x = 0, 1, 2 correspond to A, B, C, respectively. 
 status = "okay"; 
 spidev0: spi@0 { 
  compatible = "mediatek,spi-mt65xx-test"; 
  reg = <0>; 
  spi-max-frequency = <1000000>; 
 }; 
}; 
 
 Frequency 
SPI controller supports even division frequency scaling, with the maximum frequency for the SPI controller being 52 MHz, 
and SPI_SCK ≤ 52MHz. You can set the SPI_CLK in two ways: 
1. In the device tree, configure the property spi-max-frequency, for example, spi-max-frequency = 
<1000000>; to set the default SPI_CLK to 1MHz.  
2. In the device driver, configure the speed_hz field of the spi_transfer structure, for example, xfer->speed_hz = 
1000000; to set the SPI_CLK to 1MHz, which will take effect for this transfer. 
 
 SPI Mode 
You can set the SPI mode in two ways: 
1. Set the SPI mode in the device tree 
&spi { 
pinctrl-names = "default"; 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto SPI 
User Manual 
Confidential B 
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
 
2. Set the SPI mode in the device driver program 
static int xxxxxx_probe(struct spi_device *spi) 
{ 
 ……; 
 spi->mode = SPI_MODE_0; // SPI_MODE_0, SPI_MODE_1, SPI_MODE_2, SPI_MODE_3 
 ……; 
} 
 
 FIFO and DMA Mode 
SPI controller supports data transmission in DMA mode and FIFO mode. The controller automatically selects the mode 
based on the length of the data being transferred. FIFO mode is used when the length is less than or equal to 32 bytes, and 
DMA mode is used when the length is greater than 32 bytes. 
 
 Support for Multiple Devices 
If you want to add multiple devices on the SPI bus, you can use GPIOs to support SPI_CS. For example, to add two SPI 
devices on SPI bus 0, use GPIO136 and GPIO30 as SPI_CS1 and SPI_CS2, respectively, as shown below (the GPIO numbers 
are used only as examples; please refer to the actual numbers in your setup): 
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
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto SPI 
User Manual 
Confidential B 
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
 
 Testing and Debugging 
You can follow the steps introduced above to configure SPI and then verify if the data transmission function is working 
properly, for example, to verify SPI bus 0: Connect SPI_MOSI to SPI_MISO on the hardware platform. Use spi-mt65xx-dev.c 
as the device driver. Enter the following test commands: 
echo -w len=32 > /sys/bus/spi/devices/spixxx/spi 
echo -w len=1024 > /sys/bus/spi/devices/spixxx/spi 
 
spixxx represents different groups of SPI, subject to what is actually displayed. 
 
1.4 Frequently Asked Questions/Troubleshooting 
 SPI Issue Debugging Methods 
Most SPI issues encountered can first be debugged in the following ways: 
• Check if the DTS configuration, GPIO mode, and pad-select properties are correct. 
• Verify that the SPI register information is correct. 
• Measure the waveform to see if it meets expectations, such as whether the TX data is correctly output and whether the 
voltage values are normal. 
• If receiving data is abnormal and somewhat regular, such as shifting, try lowering the speed or adjusting the value of 
tick_dly. 
• Ensure that the device driver code is standard, such as whether the TX and RX buffers are allocated and whether the 
TX/RX data lengths are the same. 
 
 DTS Configuration 
Please check if the DTS configuration is correct based on the information provided earlier. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Yocto SPI 
User Manual 
Confidential B 
 Confirm GPIO Mode 
To view the status of pins in the Kernel, enter the following commands: 
# cd /sys 
# find –name mt_gpio 
# cat mt_gpio 
 
e.g., 
# cat /sys/devices/platform/soc/1000b000.pinctrl/mt_gpio 
PIN: [MODE] [DIR] [DOUT] [DIN] [PULL_EN] [PULL_SEL] [IES] [SMT] [DRIVE] ( [R1] [R0] ) 
0: 0 0 0 0 1 0 1 0 0 
1: 0 0 0 0 1 0 1 0 0 
2: 0 1 1 1 1 0 1 0 0 
3: 6 0 0 0 1 0 1 0 0 
 
 Measuring Waveforms 
Use an oscilloscope to measure if the SPI waveforms meet expectations. 
 
 How to Print SPI Register Information 
Add the following content in driver/spi/spi-mt65xx.c 
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
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Yocto SPI 
User Manual 
Confidential B 
Call spi_dump_reg() before invoking mtk_spi_enable_transfer() in 
both mtk_spi_fifo_transfer() and mtk_spi_dma_transfer() functions. 
 
 Seeking MTK Support 
If you are still unable to resolve your issue after the troubleshooting steps mentioned earlier, and when seeking help from 
MTK, please also provide the relevant logs containing SPI register information, waveform charts, dts, and the output 
from cat mt_gpio as mentioned previously. 
 
 
 
  
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 Yocto SPI 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0296 MT8676_Yocto_Suspend_Resume_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Suspend_Resume_User_Manual_V1.0.pdf

SHA-256：c79914693d64bbc7c84fdc1ddefe2e0dbe51d5e63764a4376d3753b1f11f0752

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0296.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto Suspend and Resume  
User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Suspend and Resume 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Xiaojun Zheng Official release 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto Suspend and Resume 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 Suspend/Resume ······················································································································································· 4 
1.1 Overview ·································································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
1.2.1 Android Suspend/Resume Flow ···················································································································· 4 
1.2.2 Kernel Suspend/Resume Flow ······················································································································ 6 
1.3 Configuration/Customization Guideline ··················································································································· 7 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 7 
1.4.1 How to Determine if the System Has Successfully Entered Sleep Mode ······················································ 7 
1.4.2 How to Identify Wakeup Sources ·················································································································· 8 
1.4.3 Wakeup Source Analysis ······························································································································· 8 
1.4.4 How to Analyze Issues with Failing to Enter Sleep Mode ············································································· 9 
1.4.5 How to Analyze High Power Consumption During Sleep Mode ·································································· 10 
Exhibit 1 Terms and Conditions ········································································································································ 11 
 
 
List of Figures 
Figure 1-1. Yotco Suspend/Resume flow ···································································································································· 5 
Figure 1-2. Yocto Suspend/Resume source code ······················································································································· 5 
Figure 1-3. Kernel Suspend/Resume flow ·································································································································· 6 
Figure 1-4. Wakelock dump ······················································································································································ 10 
 
List of Tables 
Table 1-1. MT8676 wakeup source list ······································································································································· 8 
 
 
  
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto Suspend and Resume 
User Manual 
Confidential B 
1 Suspend/Resume 
1.1 Overview 
This chapter mainly introduces the MT8676 Suspend/Resume process and common troubleshooting methods. 
 
On the MT8676 platform, suspend refers to suspend to RAM, a state where all devices enter a low-power mode, with only 
RAM self-refresh remaining. 
 
Suspend Power State: The entire system is in standby, with very low power consumption.  
 
• Tasks “freezed” 
• External devices/internal modules powered off or in low-power mode 
• System PLL/clock close 
• ARM off 
• DRAM self-refresh 
• PMIC in low-power mode 
• Vcore off 
• SPM running 
• Wait for HW wakeup event 
 
1.2 Architecture/Process Overview 
 Android Suspend/Resume Flow 
The Yocto system’s Suspend process mainly consists of two major phases. The first phase is screen-off, which involves 
turning off the display, followed by triggering the kernel suspend process with the command echo mem > 
/sys/power/state. During the first phase, depending on the upper layer’s use of Weston/KDE, there are different 
methods to turn off the display. For Yocto versions equipped with KDE, the screen can be turned off by pressing the power 
key, and the screen can be turned back on by pressing the power key upon resume. For Yocto versions equipped with 
Weston, the screen can be turned off with the command systemctl stop weston, and turned back on upon resume 
with the command systemctl restart weston. Refer to Figure 1-1: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto Suspend and Resume 
User Manual 
Confidential B 
 
Figure 1-1. Yotco Suspend/Resume flow 
 
The corresponding source code is as follows. 
  
Figure 1-2. Yocto Suspend/Resume source code 
 
Main flow description: 
1. Key_event_thread: Sets up monitoring for input events and checks if any input events occur. If the event type is a 
key event and the key value is the power key, a notification of the power event press is sent. 
2. Read the value of /sys/power/wakeup_count: If there is an active wakeup source at this time, the process will be 
blocked in the kernel. 
3. Return wakeup_count: This happens when there are no active wakeup sources. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto Suspend and Resume 
User Manual 
Confidential B 
4. Write back wakeup_count: If the write-back is successful, the process continues. 
5. Write mem to /sys/power/state: This initiates the Kernel Suspend process.  
 
 Kernel Suspend/Resume Flow 
The flow of Kernel Suspend/Resume is shown in Figure 1-3. 
 
 
Figure 1-3. Kernel Suspend/Resume flow 
 
When the upper layer writes mem to /sys/power/state, it triggers the Kernel Suspend process. 
 
1. Process Freeze:  
– First, user space processes are frozen. 
– Next, kernel threads are frozen. 
– If a wakelock is detected during this step, the suspend process will be aborted. If the freeze is successful, the 
suspend process continues. 
2. Device Suspend Flow: 
– The system calls the registered prepare, suspend, and suspend_late callbacks for each device in sequence. 
This completes the necessary preparations for each device driver during the sleep phase. 
3. Enter s2idle: 
– The system enters s2idle_enter(), setting s2idle_state to S2IDLE_STATE_ENTER: All CPUs enter the idle 
loop. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto Suspend and Resume 
User Manual 
Confidential B 
4. Enter TF-A psci_cpu_suspend: 
– The system enters the Trusted Firmware-A (TF-A) psci_cpu_suspend. 
5. Power Down Unused Hardware: 
– Unused hardware is powered down, and the entire system enters low-power sleep mode. 
 
After entering the sleep mode, if there is a wakeup request from a wakeup source, the system will wake up and enter the 
resume process. The resume process is the reverse of the suspend process. 
 
1.3 Configuration/Customization Guideline 
Since the Suspend/Resume flow is largely based on the native Android and Kernel flow, there are not many custom settings 
required. 
 
1.4 Frequently Asked Questions/Troubleshooting 
 How to Determine if the System Has Successfully Entered Sleep Mode 
Screen-off might only indicate that the system has entered light sleep, which does not necessarily mean that it has 
successfully entered deep sleep. To determine if the system has successfully entered suspend mode, you need to check the 
kernel log. If the system has successfully entered suspend mode, the kernel log will stop printing. 
 
To enable more detailed debug log information for determining if the system has successfully entered suspend mode, you 
need to run the following commands. 
adb shell "echo 8 8 8 8 > /proc/sys/kernel/printk" 
adb shell "echo 1 > /sys/module/kernel/parameters/initcall_debug" 
adb shell "echo 1 > /proc/mtprintk" 
 
In the kernel log, the following keywords indicate the progress of the suspend process. 
 
1. “PM: Syncing filesystems ...”: 
This indicates that the kernel has started the suspend process. 
2. “suspend of devices complete after xxx msecs”: 
  This indicates that the device suspend phase has been completed. 
3. “late suspend of devices complete after xxx msecs”: 
  This indicates that the late suspend phase for devices has been completed. 
4. “noirq suspend of devices complete after xxx msecs”: 
  This indicates that the noirq (no interrupt request) suspend phase for devices has been completed. 
5. “suspend enter”: 
This indicates that the suspend process is complete and the system has entered the suspend state. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Suspend and Resume 
User Manual 
Confidential B 
 How to Identify Wakeup Sources 
Search for the keyword “suspend wake up by” in the kernel log to identify the wakeup source. 
Ex. 
e.g. 
Pwrkey Wakeup (and other EINT Wakeups)： 
[SPM] suspend wake up by R12_EINT_EVENT_B, timer_out = 207308 
 
To determine which specific EINT caused the wakeup, first look for the log entry: 
EINT xxx is pending 
 
Then, use the following command to see which interrupt corresponds to xxx: 
cat /proc/interrupts 
 
Modem-Related Wakeup： 
[SPM] suspend wake up by R12_CCIF0_EVENT_B, timer_out = 1825253 
 
Timer (PCM_Timer) Wakeup： 
[SPM] suspend wake up by PCM_TIMER, timer_out = 65612 
 
 Wakeup Source Analysis 
Table 1-1 is a list of wakeup sources supported by the MT8676 platform. 
 
Table 1-1. MT8676 wakeup source list 
Name Control Bit Description Can it be Disabled 
R12_PCM_TIMER 0 Timer event for its timeout setting Y 
R12_KP_IRQ_B 2 Keypad pressed/released action been detected Y 
R12_APWDT_EVENT_B 3 RGU wakes up CPU in suspend mode. Y 
R12_APXGPT1_EVENT_B 4 AP GPT timer timeout event Y 
R12_CONN2AP_SPM_WAKEUP_B 5 Connectivity IC(Wi-Fi/BT/GPS) event Y 
R12_EINT_EVENT_B 6 EINT event  N 
R12_CONN_WDT_IRQ_B 7 Connectivity IC watchdog timeout event  Y 
R12_CCIF0_EVENT_B 8 MD to AP CCIF wakeup event Y 
R12_CCIF1_EVENT_B 9 MD to AP CCIF wakeup event Y 
R12_SSPM2SPM_WAKEUP_B 10 SSPM event Y 
R12_SCP2SPM_WAKEUP_B 11 SCP sensor event N 
R12_ADSP2SPM_WAKEUP_B 12 ADSP event Y 
R12_USBX_CDSC_B 14 USB event Y 
R12_USBX_POWERDWN_B 15 USB remote wakeup Y 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto Suspend and Resume 
User Manual 
Confidential B 
Name Control Bit Description Can it be Disabled 
R12_SYS_TIMER_EVENT_B 18 System timer  N 
R12_EINT_EVENT_SECURE_B 19 EINT event  N 
R12_SCP_CIRQ_IRQ_B 22 SCP_CIRQ wakeup event Y 
R12_MD2AP_PEER_EVENT_B 23 MD event Y 
R12_MD1_WDT_B 25 MD1 watchdog timeout Y 
R12_REG_CPU_WAKEUP_B 28 Internal Wakeup N 
R12_APUSYS_WAKE_HOST_B 29 APUSYS event Y 
R12_PCIE_WAKEUP_EVENT_B 30 PCIe event Y 
R12_MSDC_WAKEUP_EVENT_B 31 MSDC event Y 
 
The wakeup sources in the list that can be disabled through the following way, but only the wakeup sources marked as 
"Can it be Disabled" with “Y” in the column can be disabled. 
 
The wakeup sources in the list can be disabled through the following way, but only the wakeup sources marked as“Y” in the 
“Can it be Disabled” column can be disabled. 
 
You can quickly disable the desired wakeup sources using the system-provided debug command. 
 
1. Use the following command to read the current system wakeup source settings. 
cat /proc/mtk_lpm/power/suspend_ctrl | grep -i wake_src 
   
2. In Table 1-1, find the control bit of the wakeup source you want to disable in the “Control Bit” column. Then, set the 
corresponding bit of the read wake_src to 0, and finally use the following command to write the modified wake_src 
back into the system (do not modify the control bits of wakeup sources you do not want to disable): 
echo wake_src 0x******** > /proc/mtk_lpm/power/suspend_ctrl 
 
3. If you want to re-enable a wakeup source, set the corresponding control bit back to 1. 
 
 How to Analyze Issues with Failing to Enter Sleep Mode 
If the system fails to enter sleep mode after the screen turns off, you can use the following commands to determine which 
wakelock is preventing the system from entering sleep mode. 
 
• check which modules in the kernel are holding wakelocks. 
cat /sys/kernel/debug/wakeup_sources 
 
Observe the 5th column “active_since” in the output. The number that is non-zero and continuously increasing indicates 
the wakelock that is preventing the system from entering standby mode. 
 
For example, in Figure 1-4, the USB wakelock is blocking the system from entering standby mode. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto Suspend and Resume 
User Manual 
Confidential B 
 
Figure 1-4. Wakelock dump 
 
The command needs to be entered via UART because plugging in a USB device can prevent the system from entering 
standby mode. 
 
 How to Analyze High Power Consumption During Sleep Mode 
• First check for frequent wakeup issues. If there are frequent wakeup issues, please refer to Section 1.4.2 to identify the 
wakeup sources. 
• If the system successfully enters sleep mode but the power consumption is still high, first check for any peripherals 
that may not be properly powered down. 
• If the high power consumption is traced to the MediaTek SoC, please provide logs to MediaTek for further analysis. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto Suspend and Resume 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0297 MT8676_Yocto_System_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_System_User_Manual_V1.0.pdf

SHA-256：5cdc83a70bf8c0e2512b766ace98f1ba2edb221b9b9e9b7d11eef1ddd9edd2f7

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0297.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto System User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto System 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0  2024-08-12 Kai Peng Official release 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto System 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 4 
List of Tables ······································································································································································ 4 
1 System ······································································································································································· 5 
1.1 Abbreviations ··························································································································································· 5 
1.2 Yocto System Architecture ······································································································································· 6 
1.2.1 Software Architecture ··································································································································· 6 
1.2.2 Yocto Meta Layers ········································································································································· 6 
1.2.3 Code Structure ·············································································································································· 7 
1.2.4 Common File Paths ······································································································································· 9 
1.2.5 Partition Table ············································································································································· 10 
1.3 Yocto Compilation and Flashing ····························································································································· 12 
1.3.1 Build Server ················································································································································· 12 
1.3.2 Compiling Software ····································································································································· 12 
1.3.3 Software Composition ································································································································ 13 
1.3.4 Flashing Software ········································································································································ 14 
1.3.5 Compile SDK ················································································································································ 16 
1.3.6 Use SDK ······················································································································································· 16 
1.4 Yocto Customization ··············································································································································· 17 
1.4.1 Common Variables ······································································································································ 17 
1.4.2 Basic Structure of a bb File·························································································································· 18 
1.4.3 Boot on Startup ··········································································································································· 19 
1.4.4 Dependencies ············································································································································· 20 
1.4.5 Out-of-tree Drivers ······································································································································ 21 
1.4.6 image bb ····················································································································································· 23 
1.4.7 Introduction to fog ······································································································································ 23 
1.4.8 Create Project ············································································································································· 24 
1.4.9 Create Meta Layer ······································································································································· 24 
1.5 Yocto Build Mode ··················································································································································· 25 
1.5.1 Yocto Build Mode Usage ····························································································································· 26 
1.5.2 Yocto Build Mode Adaptation ····················································································································· 26 
1.6 Yocto Debugging Techniques ·································································································································· 27 
1.6.1 Build Directory Structure ···························································································································· 27 
1.6.2 Commonly Used Subdirectories in the Work Directory ·············································································· 28 
1.6.3 Printing Variable Values ······························································································································ 29 
1.6.4 Accelerating Yocto Compilation ·················································································································· 30 
1.7 Boot Process ··························································································································································· 31 
1.7.1 BootROM ···················································································································································· 31 
1.7.2 LK2 ······························································································································································ 31 
1.7.3 Kernel ·························································································································································· 32 
1.7.4 initramfs ······················································································································································ 33 
1.7.5 systemd ······················································································································································· 33 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Yocto System 
User Manual 
Confidential B 
1.8 Common Debugging Tools in Yocto ························································································································ 34 
Exhibit 1 Terms and Conditions ········································································································································ 35 
 
List of Figures 
Figure 1-1. Yocto software architecture ····································································································································· 6 
Figure 1-2. MT8676 meta layers ················································································································································· 6 
Figure 1-3. Code structure ························································································································································· 8 
Figure 1-4. Download SP_Flash_Tool ······································································································································· 14 
Figure 1-5. Load flash.xml ························································································································································ 15 
Figure 1-6. Flashing Software ··················································································································································· 15 
Figure 1-7. Installing SDK ·························································································································································· 16 
Figure 1-8. SDK installation directory structure ······················································································································· 17 
Figure 1-9. meta layer directory structures ······························································································································ 25 
Figure 1-10. After Compilation Directory Structure ················································································································· 28 
Figure 1-11. Boot Process ························································································································································· 31 
Figure 1-12. kernel_init ···························································································································································· 32 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 5 
Table 1-2. meta layer Description ·············································································································································· 7 
Table 1-3. Main module path ····················································································································································· 8 
Table 1-4. Common File Paths ···················································································································································· 9 
Table 1-5. Partition Table Format ··············································································································································· 9 
Table 1-6. Ko Table Format ······················································································································································· 10 
Table 1-7. Partition Table ·························································································································································· 10 
Table 1-8. build server requirements ······································································································································· 12 
Table 1-9. Image File Descriptions ············································································································································ 13 
Table 1-10. Yocto Common Variables ······································································································································· 17 
Table 1-11. create project ························································································································································ 24 
Table 1-12. Yocto build mode ··················································································································································· 25 
Table 1-13. build variant ··························································································································································· 26 
Table 1-15. Commonly Used Files and Directories in the Build Directory ················································································ 28 
Table 1-16. Commonly Used Subdirectories in the Work Directory ························································································· 29 
Table 1-16. Common Services ·················································································································································· 33 
Table 1-17. Common Debugging Tools in Yocto ······················································································································· 34 
 
 
 
  
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Yocto System 
User Manual 
Confidential B 
1 System 
This section mainly introduces the MT8676 Yocto system-related content and methods for dealing with common system 
issues. 
 
1.1 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
bb Bitbake recipe file, a bb file describes how to build a specific software package. 
Bitbake The core build tool of the Yocto project, which parses bb and bbclass files and executes tasks. 
CCU Camera Control Unit 
DPM DRAM power manager, processing instructions from SPM, controlling DRAM speed, and managing 
entry/exit from low power states. 
layer Also known as a metadata layer, used by Yocto to manage bb and configuration files. Layers can be 
developed and maintained independently. 
MCUPM CPU-specific power/performance manager. 
NeuroPilot NeuroPilot1 is a set of software tools and APIs for developing efficient AI applications on the MediaTek 
platform. 
OE OpenEmbedded, which provides the essential components for building embedded Linux systems, 
including common toolchains, libraries, and applications. 
Poky The reference distribution of the Yocto project. It is a complete build system used to create embedded 
Linux images. 
SCP System Companion Processor, a subsystem that performs always-on tasks while the system is in a low 
power state. 
SPM System power management 
SSPM Secure System Power Manager 
T-box Telematics-BOX 
tinysys Refers to processors other than the main processor, such as APUSYS. 
VCP Video Controller Processor 
Yocto An open-source project that enables the creation of custom Linux distributions for embedded systems. 
                                                                 
 
1 https://neuropilot.mediatek.inc/  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Yocto System 
User Manual 
Confidential B 
1.2 Yocto System Architecture 
 Software Architecture 
Confidential B
GStreamer and  Plugins
v4l-utils
V4L2 Decode
V4L2 Encode
V4L2 Convert
Wayland sink
V4L2 ALSA
libdrm
opengl es
Weston/Wayland
GPU DDK
DRM Proprietary
neuron
sdk
Proprietary
V4L2 DriverISP Driver ALSA Driver DRM 
Driver
APUSYS 
Driver LK
ATF
Application
EGL
alsa lib
Camera 
Core
Camera 
Linux 
Adapter
Camera HW 
Node Lib
Middleware
Fusion rild
Proprietary
CCCI 
Driver
Telephony 
service
Camera Video Audio Display Graphics Tbox AI GPS Firmware
V4L2**(internal use)
Audio sink
GPU Driver
GPU 
DVFS
Proprietary
Mnld
GNSS hal
GNSS driver
 
Figure 1-1. Yocto software architecture 
 
 Yocto Meta Layers 
The MT8676 Yocto meta layers, as shown in Figure 1-2, are primarily composed of four parts: the Yocto core layer, the OSS 
layer, the MediaTek feature layer, and the MediaTek platform layer. Table 1-2 provides detailed descriptions of the contents 
included in each layer. 
 
 
Figure 1-2. MT8676 meta layers 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Yocto System 
User Manual 
Confidential B 
Table 1-2. Meta layer description 
Layer Explanation 
meta-mediatek-classes-overlay Overlays Yocto bbclasses, for custom bbclasses. 
meta2 
Contains the core metadata of OpenEmbedded, does not include distribution releases, 
only provides support for simulators. 
meta-poky Contains the configuration and metadata for the Poky distribution release. 
meta-yocto-bsp3 Contains the BSP for reference hardware of the Yocto Project. 
meta-filesystems Contains metadata related to file systems, such as fuse, owfs, ntfs-3g, etc. 
meta-python Contains metadata related to Python. 
meta-multimedia Contains metadata related to multimedia. 
meta-networking Contains metadata related to networking. 
meta-oe Other shared OE metadata 
meta-clang Contains metadata related to clang and llvm. 
meta-qt5 Contains metadata related to qt5. 
meta-mediatek The basic MediaTek layer, including bbclasses and platform-independent packages 
written by MediaTek. 
meta-mediatek-gpl The MediaTek GPL layer, including packages such as u-boot. 
meta-mediatek-gplv2 The MediaTek GPLv2 layer, including GPLv2 versions of packages such as grep. 
meta-mediatek-gstreamer The MediaTek GStreamer layer 
meta-mediatek-ml-np Contains packages related to MediaTek NeuroPilot. 
meta-mediatek-mt8676 The MT8676 BSP layer, containing configuration files and metadata for the MT8676 BSP . 
 
 Code Structure 
The MT8676 Yocto code structure is as shown in Figure 1-3.  
 
• The meta directory contains all the Yocto metadata, for detailed explanation please refer to Section 1.2.2.  
• The patch directory contains patches applied by MediaTek to OSS.  
• The prebuilt directory contains precompiled files, such as executables, dynamic libraries, images, and toolchains, etc.  
• The src directory contains all the source code files.  
 
Table 1-3 lists the paths of the main modules and their brief descriptions. 
                                                                 
 
2 https://git.openembedded.org/openembedded-core/tree/README.OE-Core.md  
3 https://git.yoctoproject.org/poky/tree/meta-yocto-bsp/README.hardware.md  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto System 
User Manual 
Confidential B 
 
Figure 1-3. Code structure 
 
Table 1-3. Main module path 
Layer Explanation 
meta/meta-mediatek-mt8676 MT8676 platform layer 
src/bsp/lk2 
src/bsp/dramk_8676 bootloader source code 
src/kernel/linux/v6.1_mt8676/co_common Linux Kernel 6.1 source code 
src/kernel/linux/v6.1_mt8676/co_device_module MTK Linux kernel 6.1 device drivers 
src/kernel/modules out-of-tree device drivers 
src/apps/spm-base 
src/apps/atom-base 
Application source code 
src/connectivity Wi-Fi related source code 
src/ml/neuropilot NeuroPilot4 related source code 
src/telephony 
src/telephonyware 
Source code related to car T-Box (telephony) data/call/SMS 
firmware. 
src/tinysys Source code related to tinysys 
 
                                                                 
 
4 https://neuropilot.mediatek.inc/  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto System 
User Manual 
Confidential B 
 Common File Paths 
Table 1-4 lists some common file paths in the Yocto system and their functions. 
 
Table 1-4. Common file paths 
Path Explanation 
meta/meta-mediatek-mt8676/conf/machine/auto8676p1_64.conf Project configuration file 
meta/meta-mediatek-mt8676/recipes-
bsp/ptgen/files/auto8676p1_64/partition_table_emmc_ab.csv 
Partition table. The format of the partition table 
is referred to in Section 1.2.4.1. 
meta/meta-mediatek-mt8676/recipes-
kernel/linux/ko_order_table/auto8676p1_64/ko_order_table.csv 
ko table, determining the loading order of ko. 
The format is referred to in Section 1.2.4.2. 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot
/dts/mediatek/auto8676p1_64.dts kernel dts file 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/conf
igs/auto8676p1_64_defconfig kernel defconfig file 
src/devtools/dct/dws/mt6897/auto8676p1_64.dws dws file, mainly used for configuring GPIO 
meta-mediatek-mt8676/recipes-core/base-files/base-
files/auto8676p1_64/fstab fstab file, controlling partition mounting 
meta-mediatek-mt8676/recipes-auto/images/mtk-core-image-
auto8676.bb 
MT8676 image bb, used to generate the root 
filesystem 
 
1.2.4.1 Partition Table Format 
The partition table is a CSV file that can be edited with a text editor or Excel. For an explanation of each column, please 
refer to Table 1-5. 
 
Table 1-5. Partition table format 
Column Header Description 
Partition_Name Partition name 
Type Partition type, EXT4 or Raw data 
Size_KB Partition size in kilobytes (KB) 
Region(emmc) The eMMC physical partition where the partition is located, EMMC_BOOT1, EMMC_BOOT2, or 
EMMC_USER. 
Region(ufs) The UFS physical partition where the partition is located, UFS_LU0, UFS_LU1 (BOOT), or UFS_LU2 
(USER). 
Reserved Reserved partition, Y (Yes) or N (No). 
Download Whether to flash the partition, Y (Yes) or N (No). If Y , Download_File cannot be empty. 
Download_File The filename to be flashed 
OTA_Update Whether the partition is updated during OTA (Over-The-Air) update. 
EmptyBoot_Needed Not used 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Yocto System 
User Manual 
Confidential B 
Column Header Description 
Operation_Type 
BOOTLOADERS: The preloader partition 
AUTO: A regular partition 
PROTECTED: A backup partition for firmware updates 
NEEDRESIZE: The user data partition 
RESERVED: Same as the Reserved field, a reserved partition 
Default_Exist Y (Yes) or N (No), where Y indicates the partition exists. 
 
1.2.4.2 ko Table Format 
The ko table is a CSV file that can be edited with a text editor or Excel. For an explanation of each column, please refer to 
Table 1-6. 
Table 1-6. ko table format 
Column Header Description 
KO name (*.ko) Filename, including the .ko extension. 
KO path This field is currently not used. 
Vendor/Ramdisk in Normal(vendor/ramdisk) Can be filled with “vendor” or “ramdisk”, indicating whether the ko is 
placed in rootfs or ramdisk. 
Need loaded before BootTime.completed(Y/N) This field is currently not used. 
Recovery(Y/N) This field is currently not used. 
Build mode 
Compilation mode, indicating which specified mode is used. For 
example, “user/userdebug/eng” means all three modes are used; 
“userdebug/eng” means only userdebug and eng modes are used, 
user mode is not used. 
 
 Partition Table 
Table 1-7 lists the partition table and partition descriptions for MT8676. 
 
Table 1-7. Partition table 
Partition_Name Type Download_File Description 
preloader_a Raw data bl2.img Bootloader partition 
pgpt Raw data NONE GPT partition table 
misc Raw data NONE Stores a flag used during 
OTA upgrade process. 
para Raw data NONE 
Stores system environment 
information used by LK and 
kernel. 
yocto-expdb Raw data NONE Used to store AEE DB. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Yocto System 
User Manual 
Confidential B 
Partition_Name Type Download_File Description 
nvcfg EXT4 NONE 
Data stored directly 
through AP side FS by 
various modules 
nvdata EXT4 NONE Stores NVRAM data. 
protect1 EXT4 NONE Store SIM lock data. 
protect2 EXT4 NONE Store SIM lock data backup. 
seccfg Raw data NONE Stores information related 
to secure boot. 
otp Raw data NONE eMMC OTP (one-time-
program, e.g. IMEI) 
pstore Raw data NONE Saves some extra logs, such 
as power off charge. 
modem_a Raw data modem.img modem image 
spmfw_a Raw data spmfw.img spmfw image 
mcf_ota_a EXT4 mcf_ota.img mfc_ota image 
audio_dsp_a Raw data audio_dsp.img audio_dsp image 
pi_img_a Raw data pi_img.img pi_img  image 
dpm_a Raw data dpm.img dmp image 
scp_a Raw data scp-fit.img SCP image 
ccu_a Raw data ccu.img CCU image 
vcp_a Raw data vcp.img VCP image 
sspm_a Raw data sspm.img SSPM image 
mcupm_a Raw data mcupm.img MCUPM image 
gpueb_a Raw data gpueb.img GPUEB image 
apusys_a Raw data apusys.img APUSYS image 
boot_a Raw data boot.img Kernel image 
tee_a Raw data tee.img ATF image 
connsys_bt_a Raw data connsys_bt.img Not used, reserved. 
connsys_wifi_a Raw data connsys_wifi.img Not used, reserved. 
connsys_gnss_a Raw data connsys_gnss.img GNSS image 
logo_a Raw data logo.img logo image 
nvram Raw data NONE Backup partition for 
NVDATA 
boot_para Raw data NONE Stores DRAM calibration 
data. 
dram_para Raw data NONE Stores DRAM calibration 
data. 
system EXT4 system.ext4 rootfs image 
userdata EXT4 userdata.ext4 User data 
sgpt Raw data NONE GPT partition backup 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Yocto System 
User Manual 
Confidential B 
1.3 Yocto Compilation and Flashing 
This section describes the requirements for the host machine to compile Yocto, the instructions for compiling the software 
and methods for flashing it, as well as the instructions for compiling the SDK and how to use it. 
 
 Build Server 
Table 1-8 lists the requirements for the compilation host to compile MT8676 Yocto 5.0. 
 
Table 1-8. Build server requirements 
Item Requirement 
Disk Space Not less than 300GB. 
Memory Not less than 32GB. 
Distribution Version Ubuntu 20.04, 22.04, etc., for specific versions refer to Supported Linux Distributions5. 
Build host tools Refer to Required Packages for the Build Host6. 
Git Version 1.8.3.1 or higher 
tar Version 1.28 or higher 
Python Version 3.8.0 or higher 
GNU Make Version 4.0 or higher 
 
 Compiling Software 
The instructions for compiling MT8676 Yocto software are as follows. First, switch to the directory where the codebase is 
located. The environment variable TEMPLATECONF is used to specify the path where the files bblayers.conf.sample and 
local.conf.sample are located. The source command is used to initialize the Yocto build environment. This command will 
create a build directory, copy bblayers.conf.sample and local.conf.sample to the build/conf directory, and rename them to 
bblayers.conf and local.conf. Note that the script will change the current working directory to build. The final bitbake 
command starts the compilation. If you need to compile again, just execute the last command. If the terminal is exited and 
re-logged in, or a new terminal is used, all commands must be executed again. 
cd path/to/codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676/conf/templates/auto8676p1_64 
source meta/poky/oe-init-build-env 
bitbake mtk-core-image-auto8676 
 
                                                                 
 
5 https://docs.yoctoproject.org/ref-manual/system-requirements.html#supported-linux-distributions  
6 https://docs.yoctoproject.org/ref-manual/system-requirements.html#required-packages-for-the-build-host  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Yocto System 
User Manual 
Confidential B 
 Software Composition 
After the software compilation is complete, the software can be found in the build/tmp/deploy/images/auto8676p1_64 
directory. Table 1-9 lists the main image files and their descriptions. 
 
Table 1-9. Image file descriptions 
文件名 分区 说明 
MT6897_Android_scatter.xml N/A Partition table, compiled by ptgen-v2.bb 
download_agent/DA_BR.bin N/A Download agent, used for flashing. Compiled by collect.bb. 
bl2.img preloader_a 
preloader_b Bootloader, compiled by lk2.bb 
modem.img modem_a Modem firmware, compiled by modem.bb 
spmfw.img spmfw_a System power management firmware, compiled by collect.bb 
mcf_ota.img mcf_ota_a Compiled by collect.bb 
audio_dsp.img audio_dsp_a Audio DSP firmware, compiled by collect.bb 
pi_img.img pi_img_a Compiled by collect.bb 
dpm.img dpm_a Compiled by collect.bb 
scp-fit.img scp_a System Companion Processor firmware, compiled by tinysys-
scp.bb 
ccu.img ccu_a Camera Control Unit firmware, compiled by collect.bb 
vcp.img vcp_a VCP firmware, compiled by tinysys-vcp.bb 
sspm.img sspm_a Secure System Power Manager firmware, compiled by 
collect.bb 
mcupm.img mcupm_a Power/performance manager firmware, compiled by 
collect.bb 
gpueb.img gpueb_a GPU firmware, compiled by tinysys-gpueb.bb 
apusys.img apusys_a APU firmware, compiled by tinysys-apusys.bb 
boot.img boot_a 
Linux kernel in FIT format, including kernel img, dtb, and 
initramfs. Compiled by linux-mtk-extension_6.1.bb. The 
initramfs is compiled by core-image-minimal-initramfs.bb. 
tee.img tee_a ATF, compiled by collect.bb 
connsys_bt.img connsys_bt_a Reserved partition, not actually used. Compiled by collect.bb. 
connsys_wifi.img connsys_wifi_a Reserved partition, not actually used. Compiled by collect.bb. 
connsys_gnss.img connsys_gnss_a GNSS firmware, compiled by collect.bb 
logo.img logo_a Logo, compiled by makelogo.bb 
system.ext4 system Root filesystem, compiled by mtk-core-image-auto8676.bb 
userdata.ext4 userdata /data partition, compiled by mkusrdata.bbclass 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 Yocto System 
User Manual 
Confidential B 
 Flashing Software 
The flashing software requires a Type-C cable and the SP_Flash_Tool tool. If you do not have the SP_Flash_Tool tool, please 
visit the Online7 website to download it. After opening the webpage, search for SP_Flash_Tool and download the latest 
version, as shown in Figure 1-4. After the download is complete, extract the downloaded archive. 
 
 
Figure 1-4. Download SP_Flash_Tool 
 
First, connect the platform to the computer using a Type-C cable. Then double-click on 
SP_Flash_Tool_V6/SPFlashToolV6.exe to open the burning tool. For the first step, select the Download-XML file, click the 
choose button in the top right corner, and select the download_agent/flash.xml file under the software package. For the 
second step, select Format All + Download from the dropdown menu below the Download button, as shown in Figure 1-5. 
For the third step, ensure that the platform is powered off. For the fourth step, click the Download button. For the fifth 
step, hold down the download key (KPCOL0, SW907) without releasing, power on the platform, and the burning will 
automatically start, as shown in Figure 1-6. At this point, you can release the download key. 
If you encounter an error popup, first power off the platform and click the Stop button to exit the download mode. Make 
sure the platform is completely powered off before attempting to burn again. 
                                                                 
 
7 https://online.mediatek.com/apps/tool/  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Yocto System 
User Manual 
Confidential B 
 
Figure 1-5. Load flash.xml 
 
 
Figure 1-6. Flashing software 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Yocto System 
User Manual 
Confidential B 
 Compile SDK 
To compile the SDK, use the following command. Compared to compiling software, the bitbake command includes an 
additional option “-c populate_sdk”. 
cd path/to/codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676/conf/templates/auto8676p1_64 
source meta/poky/oe-init-build-env 
bitbake mtk-core-image-auto8676 -c populate_sdk 
 
 Use SDK 
After the SDK is successfully compiled, the installation package can be found in the build/tmp/deploy/sdk directory. For 
MT8676 Yocto5.0, the name of the installation package is poky-glibc-x86_64-mtk-core-image-auto8676-aarch64-
auto8676p1_64-toolchain-5.0.sh. 
The installation process is as shown in Figure 1-7. First, clear the environment variable LD_LIBRARY_PATH, as failure to do 
so will result in the SDK setup failing. The second step is to start the installation script, enter the installation directory for 
the SDK, input “y” to confirm the installation, and wait for the installation to complete. Follow the prompts from the 
installation script to execute the setup script, and now you can use the toolchain installed with the SDK. 
 
 
Figure 1-7. Installing SDK 
 
The SDK installation directory structure, as shown in Figure 1-8, includes the root directory containing environment setup 
scripts, version information, and other files. The “sysroots/aarch64-poky-linux” directory contains all the executable files, 
header files, dynamic libraries, static libraries, etc., compiled by MT8676 Yocto, facilitating third-party development in non-
Yocto environments. The ELF files in this directory are in aarch64 format. The “sysroots/x86_64-pokysdk-linux” directory 
contains some local tools, for example, the aarch64 toolchain is located in “sysroots/x86_64-pokysdk-
linux/usr/bin/aarch64-poky-linux” directory. There are also many other versions of toolchains available for use, such as 
aarch64-pokymllib32-linux, arm-poky-linux, etc. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Yocto System 
User Manual 
Confidential B 
 
Figure 1-8. SDK installation directory structure 
  
1.4 Yocto Customization 
 Common Variables 
Table 1-10 lists some commonly used variables that are frequently utilized when writing BitBake (.bb) files. There are an 
extremely large number of variables in Yocto, and merely referring to Table 1-10 is far from sufficient to master Yocto. For a 
review of all variable values, please refer to Section 1.6.3. 
 
Table 1-10. Yocto common variables 
Variable Name Description 
MACHINE Specifies the target device. Generally defined in local.conf. 
MTK_PROJECT Specifies the project name. Generally defined in <machine>.conf. 
PN Package name. Generally parsed from the filename, for example, for foo_2.6.bb, PN=foo. 
PV 
Package version. Generally parsed from the filename, for example, for foo_2.6.bb, PV=2.6. If the 
filename does not specify a version number, such as bar.bb, then PV defaults to 1.0. PV can also be 
set directly in the bb file. 
SRC_URI Source code URI. Supports protocols such as file, http, https, git, etc. 
WORKDIR bb working directory. All tasks of bb are completed in the working directory. 
S Source code directory. The do_fetch task downloads the source code specified by the SRC_URI 
variable to the S directory. 
B Build directory. The do_compile task works in this directory. 
D Installation directory. The do_install task installs the products after compilation into this directory. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8676 Yocto System 
User Manual 
Confidential B 
 Basic Structure of a bb File 
bb files are Bitbake recipe files, which describe how to build a specific software package, including build dependencies, 
where to get the source code, how to apply patches, how to compile and install the software, and how to package it. bb 
files consist of a series of variable definitions and executable tasks. For syntax and operators related to bb files, please refer 
to the Bitbake documentation
8
. 
The meta-skeleton9 layer provides several example bb files. Taking hello_1.0.bb10 as an example, let’s introduce the basic 
structure of a bb file. Initially, it defines some basic information about the software package, such as description, group, 
license, and the checksum of the license file. This information is communicated to the Bitbake build engine through some 
standard variables. 
DESCRIPTION = "Simple helloworld application" 
SECTION = "examples" 
LICENSE = "MIT" 
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302" 
 
The SRC_URI variable specifies where to download the source code from, and the S variable specifies the location of the 
source code. Bitbake supports multiple protocols for downloading source code, such as file, git, http, https, ssh, s3, and 
more. In this case, the file protocol is used. For the file protocol, Bitbake will look for files in the paths specified by the 
FILESEXTRAPATHS variable. Similar to the PATH environment variable, the FILESEXTRAPATHS variable consists of several 
paths separated by colons. 
SRC_URI = "file://helloworld.c" 
 
S = "${WORKDIR}/sources" 
UNPACKDIR = "${S}" 
 
The do_compile task is used for compiling the software. Bitbake provides a default empty implementation, so it is 
necessary to override this task. The names of Bitbake tasks must start with “do_”, and they support either shell tasks or 
Python tasks. The do_compile defined here is a shell task. In shell tasks, variables defined in the bb file can be referenced 
using the format ${VAR_NAME}. 
do_compile() { 
 ${CC} ${LDFLAGS} helloworld.c -o helloworld 
} 
 
The do_install task is used to install the software, and the software must be installed into the ${D} directory. Bitbake 
defines a series of variables for installing different types of files. For example, executable files should be installed into 
${bindir}, dynamic libraries into ${libdir}, and configuration files into ${sysconfdir}. 
do_install() { 
 install -d ${D}${bindir} 
 install -m 0755 helloworld ${D}${bindir} 
} 
 
                                                                 
 
8 https://docs.yoctoproject.org/bitbake/2.8/bitbake-user-manual/bitbake-user-manual-metadata.html  
9 https://git.yoctoproject.org/poky/tree/meta-skeleton  
10 https://git.yoctoproject.org/poky/tree/meta-skeleton/recipes-skeleton/hello-single/hello_1.0.bb  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Yocto System 
User Manual 
Confidential B 
Sometimes, software packages maintain their own set of configuration, compilation, and installation scripts, eliminating 
the need to reimplement these in the bb file. For example, packages that use autotools can typically be configured, 
compiled, and installed using the standard commands “./configure && make && make install”. For these packages, there is 
no need to write “do_compile” or “do_install” tasks from scratch; instead, you can use the tasks provided by Yocto. Taking 
hello_2.10.bb11 as an example, you only need to inherit the “autotools-brokensep” class to compile packages that use 
autotools. This significantly reduces the burden of writing bb files. 
DESCRIPTION = "GNU Helloworld application" 
SECTION = "examples" 
LICENSE = "GPL-3.0-only" 
LIC_FILES_CHKSUM = "file://COPYING;md5=d32239bcb673463ab874e80d47fae504" 
 
SRC_URI = "${GNU_MIRROR}/hello/hello-${PV}.tar.gz" 
SRC_URI[sha256sum] = "31e066137a962676e89f69d1b65382de95a7ef7d914b8cb956f41ea72e0f516b" 
 
inherit autotools-brokensep gettext 
 
 Boot on Startup 
Based on the hello_1.0.bb introduced in Section 1.4.2, this section describes how to automatically run a certain program at 
startup. The MT8676 Yocto uses systemd as the init process, so you first need to write a service file. Below is an example of 
a helloworld.service file. For more information about systemd services, you can refer to the systemd documentation. 
[Unit] 
Description=hello world service 
After=basic.target 
 
[Service] 
Type=oneshot 
ExecStart=/usr/bin/helloworld 
 
[Install] 
WantedBy=multi-user.target 
 
Add the service file to the SRC_URI variable. 
SRC_URI = "file://helloworld.c file://helloworld.service" 
 
Since the service file does not require compilation, the do_compile task remains unchanged. In the do_install task, the 
service file needs to be installed into the directory specified by systemd. 
do_install() { 
 install -d ${D}${bindir} 
 install -m 0755 helloworld ${D}${bindir} 
 install -d ${D}${systemd_unitdir}/system 
 install helloworld.service ${D}${systemd_unitdir}/system 
} 
 
                                                                 
 
11 https://git.yoctoproject.org/poky/tree/meta-skeleton/recipes-skeleton/hello-autotools/hello_2.10.bb  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 Yocto System 
User Manual 
Confidential B 
Inherit the systemd class, specify the name of the service, and enable boot on startup. The code is as follows. With this, 
the configuration for boot on startup is complete. 
inherit systemd 
SYSTEMD_PACKAGES = “${PN}” 
SYSTEMD_SERVICE:${PN} = “helloworld.service” 
 
The complete version of hello_1.0.bb that supports boot on startup is as follows. 
DESCRIPTION = "Simple helloworld application" 
SECTION = "examples" 
LICENSE = "MIT" 
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302" 
 
SRC_URI = "file://helloworld.c file://helloworld.service" 
 
S = "${WORKDIR}/sources" 
UNPACKDIR = "${S}" 
 
do_compile() { 
 ${CC} ${LDFLAGS} helloworld.c -o helloworld 
} 
 
do_install() { 
 install -d ${D}${bindir} 
 install -m 0755 helloworld ${D}${bindir} 
 install -d ${D}${systemd_unitdir}/system 
 install helloworld.service ${D}${systemd_unitdir}/system 
} 
 
inherit systemd 
SYSTEMD_PACKAGES = “${PN}” 
SYSTEMD_SERVICE:${PN} = “helloworld.service” 
 
 Dependencies 
When building packages, dependencies can be a headache, but Yocto handles this issue well. If foo.bb depends on the 
products of bar.bb during compilation, you simply need to add the following code to foo.bb to append the dependent 
package to the DEPENDS variable. Yocto will ensure that bar is compiled before foo, and during the compilation of foo, it 
will copy the files installed by bar in ${D} to the working directory of foo (${WORKDIR}). This allows the compilation of foo 
to freely use the files installed by bar, such as static libraries, dynamic libraries, header files, etc. 
# foo.bb 
DEPENDS += “bar” 
 
If foo.bb depends on bar.bb at runtime, you need to add the following code to foo.bb. Note that the “R” at the beginning 
of the variable RDEPENDS stands for runtime, and there is an additional “:${PN}”, which is necessary. 
# foo.bb 
RDEPENDS:${PN} += “bar” 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Yocto System 
User Manual 
Confidential B 
 Out-of-tree Drivers 
Compiling out-of-tree drivers is a special case because it requires using symbols from the kernel and other out-of-tree 
drivers, while also providing its own compiled symbols for use by other out-of-tree drivers. Considering that there are 
many out-of-tree drivers for the MT8676, to avoid numerous dependency issues, a template is provided here. Compiling 
out-of-tree drivers requires kernel symbols, so it depends on virtual/kernel. 
DESCRIPTION = "sample out of tree driver" 
LICENSE = "GPL-2.0-only" 
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/GPL-2.0-only;md5=801f80980d171dd642561083
3a22dbe6" 
DEPENDS = "virtual/kernel" 
 
When compiling out-of-tree drivers, it is essential to inherit the module class. This class provides the necessary functions 
and environment to build kernel modules. In this case, the source code is fetched using the fog protocol, and for more 
details about the fog protocol, you should refer to Section 1.4.7. Additionally, kernel-toolchain.inc is used to set up the 
toolchain.  
# for out-of-tree module bb, must inherit *module* 
inherit fog module 
SRC_URI = "fog://src/kernel/modules/module-name;name=module-name" 
SRCREV_module-name = "${AUTOREV}" 
 
require conf/common/kernel-toolchain.inc 
 
S = "${WORKDIR}/git" 
MODULE = "${S}" 
LINUX_SRC = "${STAGING_KERNEL_DIR}" 
MODULE_NAME = "gpio_sap_ctrl" 
 
The variable EXTRA_SYMBOLS is used to specify additional symbol files. Since the MT8676 Linux kernel is divided into 
common and device module parts, EXTRA_SYMBOLS by default includes the symbol files from the device module. If 
symbols from other out-of-tree drivers are required, first append the module name to the DEPENDS variable, and then, 
following the example, append the path of the symbol file to the EXTRA_SYMBOLS variable. 
# device_module symvers 
EXTRA_SYMBOLS += "${TMPDIR}/work-shared/${MACHINE}/device-module-build-artifacts/Module.sy
mvers" 
 
# if you moudle need other out-of-tree module symbol, please append DEPENDS & EXTRA_SYMBOL
S. below is sample. 
# DEPENDS += "oot-module1 oot-module2" 
# EXTRA_SYMBOLS += "${RECIPE_SYSROOT}${includedir}/oot-module1/Module.symvers" 
# EXTRA_SYMBOLS += "${RECIPE_SYSROOT}${includedir}/oot-module2/Module.symvers" 
 
If the Makefile requires additional variables, they can be passed to the Makefile using the export directive. At the same 
time, there is no need to write the do_compile and do_install tasks yourself. The module class will handle them. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8676 Yocto System 
User Manual 
Confidential B 
# export Makefile required variables. If need more, please add here. 
export M="${MODULE}" 
export EXTRA_SYMBOLS 
export KBUILD_EXTRA_SYMBOLS 
 
# no need write self do_compile / do_install function 
# module.bbclass will handle it 
 
The complete template is as follows: 
DESCRIPTION = "sample out of tree driver" 
LICENSE = "GPL-2.0-only" 
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/GPL-2.0-only;md5=801f80980d171dd642561083
3a22dbe6" 
DEPENDS = "virtual/kernel" 
 
# for out-of-tree module bb, must inherit *module* 
inherit fog module 
SRC_URI = "fog://src/kernel/modules/module-name;name=module-name" 
SRCREV_module-name = "${AUTOREV}" 
 
require conf/common/kernel-toolchain.inc 
 
S = "${WORKDIR}/git" 
MODULE = "${S}" 
LINUX_SRC = "${STAGING_KERNEL_DIR}" 
MODULE_NAME = "gpio_sap_ctrl" 
 
# device_module symvers 
EXTRA_SYMBOLS += "${TMPDIR}/work-shared/${MACHINE}/device-module-build-artifacts/Module.sy
mvers" 
 
# if you moudle need other out-of-tree module symbol, please append DEPENDS & EXTRA_SYMBOL
S. below is sample. 
# DEPENDS += "oot-module1 oot-module2" 
# EXTRA_SYMBOLS += "${RECIPE_SYSROOT}${includedir}/oot-module1/Module.symvers" 
# EXTRA_SYMBOLS += "${RECIPE_SYSROOT}${includedir}/oot-module2/Module.symvers" 
 
INSANE_SKIP:${PN} += "already-stripped" 
INSANE_SKIP:${PN} += "installed-vs-shipped" 
 
# append EXTRA_SYMBOLS to KBUILD_EXTRA_SYMBOLS 
python __anonymous () { 
    d.appendVar('KBUILD_EXTRA_SYMBOLS', " " + d.getVar('EXTRA_SYMBOLS')) 
} 
 
# export Makefile required variables. If need more, please add here. 
export M="${MODULE}" 
export EXTRA_SYMBOLS 
export KBUILD_EXTRA_SYMBOLS 
 
# no need write self do_compile / do_install function 
# module.bbclass will handle it 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8676 Yocto System 
User Manual 
Confidential B 
 image bb 
The image bb is used to generate the root file system. Take core-image-minimal.bb12 as an example for introduction. The 
image bb must inherit from the core-image class. The IMAGE_INSTALL variable is used to specify the software packages 
that need to be installed in the root file system. If you want to install more software packages into the root file system, you 
just need to append the packages to the IMAGE_INSTALL variable. The image bb for MT8676 is mtk-core-image-
auto8676.bb. 
SUMMARY = "A small image just capable of allowing a device to boot." 
 
IMAGE_INSTALL = "packagegroup-core-boot ${CORE_IMAGE_EXTRA_INSTALL}" 
 
IMAGE_LINGUAS = " " 
 
LICENSE = "MIT" 
 
inherit core-image 
 
IMAGE_ROOTFS_SIZE ?= "8192" 
IMAGE_ROOTFS_EXTRA_SPACE:append = "${@bb.utils.contains("DISTRO_FEATURES", "systemd", " + 
4096", "", d)}" 
 
The file format for the root file system image is specified in <machine>.conf. Taking auto8676p1_64.conf as an example, 
the format of the root file system image is ext4. 
# auto8676p1_64.conf 
IMAGE_FSTYPES ?= "ext4" 
 
 Introduction to fog 
fog stands for “file or git”, and it is a source code download protocol extended by MediaTek. fog operates on a per-git-
repository basis, pulling the entire repository into ${WORKDIR}. The fog:// protocol will convert the source code download 
protocol to either file:// or git:// based on certain rules. 
 
Here is an example of using fog. First, you need to inherit the fog class, then append the source code path in the fog:// 
protocol format to the SRC_URI variable. The name parameter must be set and is used to set the name of the module. The 
SRC_REV variable is used to specify the version of the module, which is generally set to ${AUTOREV}. Finally, the S variable 
must be set to “${WORKDIR}/git” or a subdirectory of the git directory, depending on where the build entry point is. 
inherit fog 
SRC_URI = "fog://src/path;name=module-name" 
SRCREV_module-name = "${AUTOREV}" 
 
S = "${WORKDIR}/git" 
 
fog supports multiple git repositories, as shown in the following example. Compared to a single git repository, you must 
specify the destsuffix parameter, which is used to designate the subdirectory where the repository is located. You also 
                                                                 
 
12 https://git.yoctoproject.org/poky/tree/meta/recipes-core/images/core-image-minimal.bb  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
MT8676 Yocto System 
User Manual 
Confidential B 
need to set multiple entries in SRC_URI. Additionally, SRCREV_FORMAT is introduced, which is used to set the format of 
SRCREV. 
inherit fog 
SRC_URI="fog://src/path;name=module-name1;destsuffix=git/sub-dir1" 
SRC_URI="fog://src/path;name=module-name2;destsuffix=git/sub-dir2" 
SRC_URI="fog://src/path;name=module-name3;destsuffix=git/sub-dir3" 
SRCREV_module-name1 = "${AUTOREV}" 
SRCREV_module-name2 = "${AUTOREV}" 
SRCREV_module-name3 = "${AUTOREV}" 
SRCREV_FORMAT="module-name1_module-name2_module-name3" 
 
S = "${WORKDIR}/git" 
 
 Create Project 
Table 1-11 lists the files that need to be created for setting up a new project. It is recommended to copy from 
auto8676p1_64 and then modify the relevant files. Alternatively, you can use the one-click creation script meta/meta-
mediatek-mt8676/scripts/create_project.sh and follow the prompts to operate. 
 
Table 1-11. Create project 
Item Example 
machine.conf meta/meta-mediatek-mt8676/conf/machine/auto8676p1_64.conf 
templates meta/meta-mediatek-mt8676/conf/templates/auto8676p1_64/bblayers.conf.sample 
meta/meta-mediatek-mt8676/conf/templates/auto8676p1_64/local.conf.sample 
dts src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/auto8676p1_64.dts 
defconfig src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/configs/auto8676p1_64_defconfig 
partition table meta/meta-mediatek-mt8676/recipes-bsp/ptgen/files/ auto8676p1_64/partition_table.csv 
ko table meta/meta-mediatek-mt8676/recipes-
kernel/linux/ko_order_table/auto8676p1_64/ko_order_table.csv 
fstab meta/meta-mediatek-mt8676/recipes-core/base-files/base-files/auto8676p1_64/fstab 
collect-bins prebuilt/bsp/collect-bins/mt8676/auto8676p1_64 
dws src/devtools/dct/dws/mt6897/auto8676p1_64.dws 
lk2 src/bsp/lk2/project/auto8676p1_64.mk 
scp src/tinysys/mt8676/scp/project/RV55_A/mt6897/auto8676p1_64 
 
 Create Meta Layer 
A Yocto meta layer is essentially a directory containing a conf/layer.conf file, and it is recommended that the directory 
name starts with “meta-”, such as meta-foo, meta-bar, etc. Therefore, to create a meta layer, you first need to create a 
conf/layer.conf file. Taking the creation of meta-foo as an example, the sample layer.conf is as follows. BBPATH adds the 
current layer path to the Bitbake search path, BBFILES specifies the path where the bb files are located, 
BBFILE_COLLECTIONS assigns a unique identifier to the current layer, BBFILE_PATTERN sets the directory prefix for the bb 
files, and BBFILE_PRIORITY sets the priority of the bb files, with higher numbers indicating higher priority. If two layers 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
MT8676 Yocto System 
User Manual 
Confidential B 
have bb files with the same name, the one with the higher priority is used. LAYERSERIES_COMPAT is used to set the Yocto 
versions supported by the layer. 
# We have a conf and classes directory, add to BBPATH 
BBPATH .= ":${LAYERDIR}" 
 
# We have a recipes-* directories, add to BBFILES 
BBFILES += "${LAYERDIR}/recipes-*/*/*.bb \ 
        ${LAYERDIR}/recipes-*/*/*.bbappend" 
 
BBFILE_COLLECTIONS += "foo" 
BBFILE_PATTERN_foo = "^${LAYERDIR}/" 
BBFILE_PRIORITY_foo = "10" 
 
LAYERSERIES_COMPAT_foo = "scarthgap" 
 
Figure 1-9 shows the directory structure of a meta layer. In addition to the conf/layer.conf file, the classes directory is used 
to store bbclass files, and the conf/machine and conf/templates directories are used to store project-related files. 
Directories starting with “recipes-” are used to store bb and bbappend files. The structure of these directories depends on 
the BBFILES variable, which is generally set to “${LAYERDIR}/recipes-*/*/*.bb ${LAYERDIR}/recipes-*/*/*.bbappend”. 
 
 
Figure 1-9. Meta layer directory structures 
 
1.5 Yocto Build Mode 
Yocto does not define a build mode by default, and can only compile one type of software. However, during the project 
cycle, different software are needed at different stages. MediaTek has proposed a solution similar to Android for 
DEV/SQC/MP . Table 1-12 lists the differences between the various build modes. 
 
Table 1-12. Yocto build mode 
Build Mode Android Config Setting Yocto Config Setting Usage 
user 
1. Disable debug configs 
(TFA/LK/Preloader/Kernel/TEE/Fwk/APK/….) 
2. Disable debug features (AEE/UART/ADB/…) 
1. Disable debug configs 
(TFA/LK2.0/Kernel/TEE/APP/….) 
2. Disable debug features 
(AEE/UART/ADB/…) 
1. Products MP 
2. SQC performance 
test 
userdebug 1. Disable debug configs 
(TFA/LK/Preloader/Kernel/TEE/Fwk/APK/….) 
1. Disable debug configs 
(TFA/LK2.0/Kernel/TEE/APP/….) 
1. SQC main test 
2. RD DEV/UT/IT test 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
MT8676 Yocto System 
User Manual 
Confidential B 
Build Mode Android Config Setting Yocto Config Setting Usage 
2. Enable debug features (AEE/UART/ADB/…) 2. Enable debug features 
(AEE/UART/ADB/…) 
eng 
1. Enable debug configs 
(TFA/LK/Preloader/Kernel/TEE/Fwk/APK/….) 
2. Enable debug features (AEE/UART/ADB/…) 
1. Enable debug configs 
(TFA/LK2.0/Kernel/TEE/APP/….) 
2. Enable debug features 
(AEE/UART/ADB/…) 
1. RD debug 
 
 Yocto Build Mode Usage 
MediaTek Yocto uses the environment variable TARGET_BUILD_VARIANT to distinguish between three build modes. The 
value of the environment variable can be set to user, userdebug, or eng, which are used to compile user software, 
userdebug software, and eng software, respectively. If the environment variable is not set, or if the value is not one of user, 
userdebug, or eng, then userdebug software will be compiled. 
 
To differentiate these three modes in the bb files, MediaTek appends different values to the variables DISTRO_FEATURES 
and OVERRIDES based on the value of the environment variable TARGET_BUILD_VARIANT, as shown in Table 1-13. 
 
Table 1-13. Build variant 
TARGET_BUILD_VARIANT DISTRO_FEATURES OVERRIRES 
user variant-user variant-user 
userdebug variant-userdebug variant-userdebug 
eng variant-eng variant-eng 
 
The following are the instructions for compiling eng software. If you need to compile user or userdebug software, you only 
need to change the value of the environment variable TARGET_BUILD_VARIANT. 
cd path/to/codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676/conf/templates/auto8676p1_64 
export TARGET_BUILD_VARIANT=eng 
source meta/poky/oe-init-build-env 
bitbake mtk-core-image-auto8676 
 
 Yocto Build Mode Adaptation 
Modules need to be adapted to the build mode in order to compile the actual user, userdebug, or eng software. First, it is 
necessary to define the differences between these three modes, and then make targeted modifications to the bb files for 
adaptation. Here are two examples to illustrate how to adapt. 
 
Taking the Linux kernel (linux-mtk-extension_6.1.bb) as an example, the Linux kernel uses defconfig for configuration. User 
software only needs to use the project defconfig file, userdebug software uses both the project defconfig and the 
userdebug.config files, and eng software uses the project defconfig and the eng.config files. The relevant adaptation code 
is as follows. The variable VARIANT_CONFIG defines the additional config file, which is empty by default. If it’s userdebug, 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 27 
MT8676 Yocto System 
User Manual 
Confidential B 
then it is set to userdebug.config, and similarly for eng. Here, Yocto’s conditional variable syntax is used. Finally, a piece of 
code is prepended before the do_configure task to merge the two config files using the merge_config.sh script. 
VARIANT_CONFIG = "" 
VARIANT_CONFIG:variant-eng       = "${S}/${KCONFIG_EXT_PREFIX}/kernel/configs/eng.config" 
VARIANT_CONFIG:variant-userdebug = 
"${S}/${KCONFIG_EXT_PREFIX}/kernel/configs/userdebug.config" 
 
do_configure:prepend() { 
 bbnote "VARIANT_CONFIG is ${VARIANT_CONFIG}" 
 
 install -d ${B}/arch/${KERNEL_ARCH}/configs/ 
 KCONFIG_CONFIG=${B}/arch/${KERNEL_ARCH}/configs/${KBUILD_CONFIG} \ 
  ${S}/scripts/kconfig/merge_config.sh -m \ 
  -r ${MODULEDIR}/arch/${KERNEL_ARCH}/configs/${KBUILD_CONFIG} \ 
  ${VARIANT_CONFIG} 
 ... 
} 
 
Using adb (android_tools_5.1.1.r37.bbappend) as an example, user software requires adb to be disabled, while userdebug 
and eng software require adb to be enabled. The relevant adaptation code is as follows. Here, Yocto’s conditional variable 
syntax is used to clear the SYSTEMD_SERVICES and FILES variables only when building user software, and to append 
instructions to the do_install task to delete the related files. 
# variant user disable adbd 
SYSTEMD_SERVICE:${PN}-adbd:variant-user = "" 
FILES:${PN}-adbd:variant-user = "" 
do_install:append:variant-user() { 
    rm -rfv "${D}${bindir}/adbd" 
    rm -rfv "${D}${systemd_unitdir}/system/android-tools-adbd.service" 
} 
 
# avoid build fail 
INSANE_SKIP:${PN} += "installed-vs-shipped" 
 
1.6 Yocto Debugging Techniques 
 Build Directory Structure 
After the software compilation is complete, the directory structure is shown in Figure 1-10. Compared to the original 
directory structure, there are additional directories: build, downloads, and sstate-cache. The build directory is specified by 
the variable TOPDIR and contains intermediate files from the compilation, images, RPM packages, and other files. For 
information about the downloads directory and sstate-cache, please refer to Section 1.6.4. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 28 
MT8676 Yocto System 
User Manual 
Confidential B 
 
Figure 1-10. Directory structure after compilation 
 
The build directory contains a lot of information, and being familiar with the build directory is helpful for debugging Yocto. 
The variable TOPDIR points to the build directory. Table 1-14 lists the commonly used files and directories in the build 
directory. 
 
Table 1-14. Commonly used files and directories in the build directory 
File or Directory Description 
build/conf/local.conf Copied from local.conf.sample. 
build/conf/bblayers.conf Copied from bblayers.conf.sample. 
build/conf/templateconf.cfg Contains the value of the environment variable TEMPLATECONF. 
build/tmp/deploy/images/<project> Contains image files for flashing. 
build/tmp/deploy/rpm Contains RPM packages generated after bb compilation. 
build/tmp/deploy/license Subdirectories are formatted as <PN>, containing license information for the 
corresponding bb. 
build/tmp/sysroots-components Subdirectories are formatted as <ARCH>/<PN>, containing files installed to the 
rootfs by the corresponding bb. 
build/tmp/work 
Subdirectories are formatted as <ARCH>/<PN>/<PV>, corresponding to the work 
directory of bb. All tasks of bb are completed in the work directory. For details, 
please refer to Section 1.6.2. 
build/tmp/work-shared Shared work directory. If files need to be shared between bbs, they can be 
placed in this directory. 
 
 Commonly Used Subdirectories in the Work Directory 
The work directory is located under build/tmp/work, and all tasks of a bb (BitBake recipe) are completed in this work 
directory. The variable WORKDIR points to the work directory of the bb. Table 1-15 lists the commonly used subdirectories 
in the work directory. By utilizing the files in the work directory, you can quickly clarify issues. For example, if do_compile 
fails, you can check the temp/run.do_compile and log.do_compile files; to confirm which package a file has been packaged 
into, you can check the packages-split directory. 
 
 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 29 
MT8676 Yocto System 
User Manual 
Confidential B 
Table 1-15. Commonly used subdirectories in the work directory 
File or Directory Description 
git Stores the source code specified by the SRC_URI variable. Some bbs place the source code in a 
${PN}-${PV} subdirectory. The S variable points to this directory. 
build Directory for storing intermediate and final compilation files. The B variable points to this 
directory. Sometimes the B variable is equal to the S variable. 
recipe-sysroot Stores files of the packages specified by the DEPENDS variable. Header files and libraries are 
searched for in this directory during compilation. 
recipe-sysroot-native Similar to the recipe-sysroot directory, it stores files of the “*-native” packages specified by the 
DEPENDS variable, including local tools used during compilation, such as cross-compilers. 
image Stores files installed by the do_install task. The D variable points to this directory. 
package Stores the final packaged files. 
packages-split 
Similar to the package directory, but divided into subdirectories by package name. Generally, in 
addition to the default ${PN} package, Yocto also adds several packages like ${PN}-dbg, ${PN}-
dev, ${PN}-doc, etc. 
sysroot-destdir 
The files in this directory are a subset of those in the image directory. If they are depended 
upon by another bb, the files in this directory will be copied to the recipe-sysroot or recipe-
sysroot-native directory of the other bbs. 
temp 
Contains task scripts and running logs. For example, for the do_compile task, run.do_compile is 
the task script, and log.do_compile is the task log. The log.task_order file records the execution 
time and order of tasks. 
 
 Printing Variable Values 
Yocto has a vast number of variables, and the variable operators in Yocto are very flexible. Additionally, there are many 
configuration files, which makes it difficult to determine the final value of a variable. We can use the “-e” option of bitbake 
to print out the process of all variable changes as well as their final values, which can greatly improve the efficiency of 
debugging. Take the WORKDIR variable of systemd as an example. Execute the following command to save the 
environment variables of systemd to a file named systemd.env. Since there are so many variables, redirecting and saving to 
a file makes analysis easier. 
bitbake systemd -e > systemd.env 
 
When you open the systemd.env file, you can search and find content similar to the following. You can see that the 
WORKDIR variable is manipulated twice: the first time, its value is set on line 407 of bitbake.conf; the second time, its value 
for the tag doc is set on line 467 of documentation.conf. Finally, the value of the WORKDIR variable is printed. Using this 
method, you can easily locate which configuration file has performed what operation on the variable. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 30 
MT8676 Yocto System 
User Manual 
Confidential B 
# 
# $WORKDIR [2 operations] 
#   set /mt8676/codebase/meta/poky/meta/conf/bitbake.conf:407 
#     "${BASE_WORKDIR}/${MULTIMACH_TARGET_SYS}/${PN}/${PV}" 
#   set /mt8676/codebase/meta/poky/meta/conf/documentation.conf:467 
#     [doc] "The pathname of the working directory in which the OpenEmbedded build system 
builds a recipe. This directory is located within the TMPDIR directory structure and changes 
as different packages are built." 
# pre-expansion value: 
#   "${BASE_WORKDIR}/${MULTIMACH_TARGET_SYS}/${PN}/${PV}" 
WORKDIR="/mt8676/codebase/build/tmp/work/aarch64-poky-linux/systemd/255.4" 
 
 Accelerating Yocto Compilation 
Starting from scratch, Yocto compilation is very slow, mainly in two aspects. First, Yocto will download a large number of 
source packages and code repositories. Second, many unmodified software packages will also be compiled from scratch. 
You can save the intermediate files generated after the Yocto compilation is completed to speed up the next compilation. 
After the Yocto compilation is completed, the directories downloads and sstate-cache will be generated. The downloads 
directory contains the downloaded source packages and code repositories, specified by the variable DL_DIR; the sstate-
cache directory contains the compilation cache, specified by the variable SSTATE_DIR. 
 
Before the first compilation, create the file build/conf/site.conf and add the following code. This line of code will package 
the downloaded code repositories into a compressed file. After the compilation is completed, copy and save the 
downloads and sstate-cache directories. Suppose they are saved to the “/path/to/your/saved/downloads/” directory and 
the “/path/to/your/saved/sstate-cache/” directory, respectively. 
BB_GENERATE_MIRROR_TARBALLS = "1" 
 
Before the second compilation, create the file build/conf/site.conf and add the following code. SOURCE_MIRROR_URL 
points to the saved “downloads” directory, and SSTATE_MIRRORS points to the saved “sstate-cache” directory (note that 
there is a fixed “PATH” at the end). If the .bb file has not been modified, Yocto will directly take the results of the previous 
compilation from the SSTATE_MIRRORS directory. If the sstate cache does not hit, and the software package needs to be 
downloaded for compilation, Yocto will prioritize obtaining the software package from SOURCE_MIRROR_URL. 
SOURCE_MIRROR_URL ?= "file:///path/to/your/saved/downloads/" 
INHERIT += "own-mirrors" 
BB_GENERATE_MIRROR_TARBALLS = "1" 
 
SSTATE_MIRRORS = "file://.* file:///path/to/your/saved/sstate-cache/PATH" 
BB_SIGNATURE_HANDLER = "OEBasicHash" 
BB_HASHSERVE = "" 
 
It should be noted that after the .bb file is modified, the sstate cache will become invalid, so the sstate cache should be 
updated regularly. The “downloads” directory generally does not become invalid. If you do not want to use the sstate 
cache, you can add the “--no-setscene” option to bitbake. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 31 
MT8676 Yocto System 
User Manual 
Confidential B 
1.7 Boot Process 
The boot process of the MT8676 Yocto is shown in Figure 1-11. It mainly consists of four major parts: Bootloader, kernel, 
initramfs, and systemd. 
 
 
Figure 1-11. Boot process 
 
 BootROM 
BootROM is a hardware device (similar to SRAM/DRAM), containing a segment of factory-installed, unmodifiable, and 
solidified program. After power-on, the BootROM starts executing the pre-set bootcode internally, loads the bootloader 
LK2 into SRAM, and then executes it. The main functions are as follows: 
 
• Boot and load LK2 into SRAM for execution. 
• When no valid image or code is detected, BootROM guides the system into download mode. 
• Perform some verification work. 
• Hardware initialization, such as serial ports, flash, etc. 
 
 LK2 
LK2, also known as the bootloader, runs in SRAM (which does not require initialization). The main functions of LK2 are as 
follows: 
 
• Initialize DRAM and various peripherals. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
MT8676 Yocto System 
User Manual 
Confidential B 
• Load TF-A (Trusted Firmware-A) and jump to TF-A for initialization. 
• Load the kernel. 
• Load tinysys (such as GPUEB, SCP , VCP , etc.). 
• Jump to the kernel. 
 
 Kernel 
The kernel is the core component of an operating system, responsible for managing computer hardware and software 
resources and providing basic services for the operating system and applications. The kernel is the first component loaded 
by the operating system and runs in memory as the core of the entire system, controlling all system resources such as CPU, 
memory, input/output, file systems, etc. The kernel provides low-level services and interfaces for applications to call and 
use. 
 
Kernel Assembly Phase (starting from ENTRY(_stext)): 
 
1. Set to SVC mode and disable all interrupts. 
2. Obtain CPU ID. 
3. Verify the device tree blob (dtb). 
4. Create page table entries. 
5. Configure the r13 register, which sets the function to jump to after enabling the MMU. 
6. Enable the MMU. 
7. Jump to start_kernel, entering the C phase. 
 
Kernel C Phase (starting from kernel_init): This phase mainly completes the initialization work related to the hardware 
platform. After the related initialization is finished, it executes the init program. 
 
kernel_init
Setup architecture-related 
environment
Initialize memory structure
Initialize device drivers
Enable MMU, establish page 
tables
Initialize serial port
.............
Start the init process
do_basic_setup
numa_default_policy
run_init_process
 
Figure 1-12. kernel_init 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 33 
MT8676 Yocto System 
User Manual 
Confidential B 
 initramfs 
initramfs is an intermediate layer between the kernel and systemd. Its primary function is to load some basic kernel 
modules to prepare for switching the root filesystem (rootfs) and executing systemd. After the kernel initialization is 
completed, the init script under initramfs is run first. The init script will parse the kernel boot parameters and export them 
as shell environment variables. Then it calls the initialization scripts in the /init.d directory. On the MT8676 platform, the 
/init.d directory contains scripts such as 10-kmod, 11-partlabel, 12-format, 90-rootfs, 99-finish, etc. 
 
10-kmod loads the kernel modules specified in the /etc/modules.list file. The /etc/modules.list is generated based on the 
ko table file. If the “Vendor/Ramdisk in Normal(vendor/ramdisk)” column is ramdisk, then the /etc/modules.list file will 
include this kernel module. For the format of the ko table, please refer to Section 1.2.4.1. The /etc/modules.list should 
contain some basic kernel modules, such as the UFS driver, etc. 
 
11-partlabel is responsible for parsing the names of partitions and creating symbolic links in /dev/disk/by-partlabel. Scripts 
like 12-format and 90-rootfs depend on these symbolic links. 
 
12-format is responsible for formatting partitions such as nvdata, protect1, protect2, etc. 
 
90-rootfs is responsible for mounting the rootfs partition to the /rootfs directory. The rootfs partition is specified by the 
kernel boot parameter “root=PARTLABEL=system”. 
 
99-finish is responsible for mounting procfs, sysfs, devfs in the /rootfs directory and switching the root directory to /rootfs. 
Finally, it starts systemd. 
 
 systemd 
systemd is a system and service manager for Linux systems. Compared to the traditional SysVinit, systemd offers modern 
features such as parallel startup, dependency management, and on-demand activation. 
 
After systemd takes control, it first performs a series of pre-initialization tasks, such as setting default environment 
variables and initializing the logging system. It then reads and parses unit files located in directories like 
/etc/systemd/system and /lib/systemd/system. These files define the configuration for services, mount points, devices, and 
other resources. 
 
Based on the dependencies described in the unit files, systemd constructs a dependency tree. Then, systemd attempts to 
reach the default target specified by /etc/systemd/system/default.target, which is composed of a set of interdependent 
units. Systemd will start the services that the default target depends on in parallel and ensure that the services start in the 
correct order according to the dependency tree. 
 
Table 1-16. Common services 
Service Description 
systemd-modules-load Reads configuration files under /etc/modules-load.d and loads kernel modules. The file 
/etc/modules-load.d/10-kernel-modules.conf includes vendor kernel modules from the ko 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
MT8676 Yocto System 
User Manual 
Confidential B 
Service Description 
table. 
systemd-udevd Responsible for managing the creation and removal of device nodes. 
android-tools-adbd ADB (Android Debug Bridge) daemon 
weston Weston desktop service 
prop Property service process. The tools getprop and setprop interact with this service. 
mdpd_8676 MDP background service process 
camerahalserver Camera service process 
thermal-daemon Thermal daemon process 
 
1.8 Common Debugging Tools in Yocto 
Table 1-17. Common debugging tools in Yocto 
Tool Description 
log 
The primary source of information for analyzing all issues. For information about the Yocto log 
system, please refer to the document MTK_Yocto_Log_Tool_Guide, which can be downloaded in 
Online. 
AEE 
When an exception occurs, AEE collects relevant debugging information into a db (datafile) file. It is 
a powerful tool for debugging platform abnormal reboots, kernel exceptions, user program 
exceptions, etc. Please refer to the document MTK_Yocto_AEE_Tool_Guide, which can be 
downloaded in Online. 
kasan Used for debugging kernel memory leaks, please use the auto8676p1_64_kasan project. In addition 
to kasan, there are other tools for debugging memory leaks such as kmemleak, asan, valgrind, etc. 
ftrace Captures kernel trace logs to analyze performance issues. 
systemd-analyze Captures the startup time of systemd services to analyze boot time. 
strace Captures system calls made by a program. 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 35

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 35 
MT8676 Yocto System 
User Manual 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

