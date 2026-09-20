# SRC0227 MT8676_Hypervisor_UART_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_UART_User_Manual_V1.0.pdf

SHA-256：34c55692de982f925c405fdb7a4c181377ab366a914c00b0f83dc09bfd00cde5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0227.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-11-20
MT8676 Hypervisor UART User Manual 
 
 
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-11-20 陈李亮 正式版 
 
  
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 4 
1 Hypervisor UART························································································································································ 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 名词解释 ······················································································································································ 5 
1.2 UART 虚拟化方式 ···················································································································································· 6 
 虚拟化说明 ·················································································································································· 6 
 UART 虚拟化握手流程 ································································································································· 6 
 UART 虚拟化特征 ········································································································································· 7 
 测试与调试 ·················································································································································· 8 
1.3 Passthrough 直通方式 ············································································································································· 8 
 直通说明 ······················································································································································ 8 
 具体实作 ······················································································································································ 9 
 测试和调试 ················································································································································ 11 
 常见问题及故障排除································································································································· 12 
 寻求联发科技帮助 ···································································································································· 12 
附件一 附加条款 ····························································································································································· 13 
 
 
图片目录 
图 1-1. UART 虚拟化布局图 ······················································································································································ 5 
图 1-2. 握手流程图···································································································································································· 6 
图 1-3. SOS 部分改动 ································································································································································ 9 
图 1-4. UOS-DTS 部分改动 ······················································································································································ 10 
图 1-5. UOS-KO 部分改动 ························································································································································ 10 
图 1-6. Hypervisor 部分改动 ··················································································································································· 11 
 
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
表格目录 
表 1-1. 名词解释········································································································································································ 5 
表 1-2. 代码路径········································································································································································ 6 
表 1-3. UART 驱动代码路径 ······················································································································································ 8 
 
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
1 Hypervisor UART 
1.1 概述 
 简单介绍 
本章节主要介绍 MT8676 Hypervisor UART 的软件以及功能，虚拟化总体布局如图 1-1 所示。
 
图 1-1. UART 虚拟化布局图 
 名词解释 
表 1-1. 名词解释 
缩写 解释 
DMA 直接内存访问 
GUEST 前端系统 
HOST 后端系统 
TTYS(x) 直通绑定的 UART 节点 
UART 通用异步收发器 
VPORT(x)P(x) 前端生成的 UART 虚拟节点 
 
 
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
1.2 UART 虚拟化方式 
 虚拟化说明 
对于多 OS 系统来说，由于多个外部 devices 需要用到 UART 进行通信，但受平台 UART 数量限制的影响无法实施，
因此考虑对 UART 模块进行虚拟化使得不同 devices 可以在不同 OS 系统中使用 UART 模块，具体代码路径参考表 
1-1。 
 
表 1-2. 代码路径 
前端路径 后端路径 
kernel/drivers/char/virtio_console.c kernel/modules/mt8676/virt/grt/vhost_uart/uart.c 
 
  UART 虚拟化握手流程 
 
图 1-2. 握手流程图 
 
对于多 OS 系统虚拟化而言，最关键的是建立前后端的通信连接。如 图 1-2 所示，总共可分为四部分： 
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
1. 前端（Guest）发送 VIRTIO_CONSOLE_DEVICES_READY 事件信号给后端（Host），代表着前端（Guest）devices 
已准备好。 
2. 后端（Host）收到信号后会往前端（Guest）发送 VHOST_CONSOLE_PORT_ADD 事件信号给前端（Guest），代
表后端（Host）收到请求连接的信号需要前端添加相应的 PORT 节点。 
3. 当前端（Guest）收到信号后会往后端（Host）发送 VIRTIO_CONSOLE_PORT_READY 事件信号，并且此刻会在前
端（Guest）生成虚拟化节点 VPORT(x)P(x)，x 是随机生成的号码。 
4. 当后端（Host）收到信号后会在后端（Host）将生成的节点添加至列表中，此刻代表整体握手流程结束。  
 
  UART 虚拟化特征 
1. 前端事件信号： 
a) VIRTIO_CONSOLE_DEVICE_READY 
设备准备 
 
b) VIRTIO_CONSOLE_PORT_ADD 
节点添加 
 
c) VIRTIO_CONSOLE_PORT_REMOVE 
移除节点 
 
d) VIRTIO_CONSOLE_PORT_READY 
节点准备 
 
e) VIRTIO_CONSOLE_PORT_OPEN 
开启节点 
 
2. 后端事件信号： 
a) VHOST_CONSOLE_DEVICE_READY 
设备准备 
 
b) VHOST_CONSOLE_PORT_ADD 
节点添加 
 
c) VHOST_CONSOLE_PORT_REMOVE 
移除节点 
 
d) VHOST_CONSOLE_PORT_READY 
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
节点准备 
 
e) VHOST_CONSOLE_PORT_OPEN 
开启节点 
 
f) VHOST_CONSOLE_PORT_READ 
读取节点 
 
 测试与调试 
1. 查看前端是否生成了 UART 虚拟节点 
find . -name vport* 
 
2. UART 获取数据，可以使用以下命令接收 UART 数据并通过 console 打印出来 
cat /dev/vport* 
 
3. UART 发送数据，可以使用以下命令让 UART 发送字符串 “123” 
echo 123 > /dev/vport* 
 
1.3 Passthrough 直通方式 
 直通说明 
对于多 OS 而言，每个 OS 下都存在一套 MTK UART 驱动代码，如表 1-3 所示。 
UART 的 virt 方式目前支持读/写/开/关四种操作，需要通过 Passthrough 直通的方式来进行修改波特率/开启软控流/
开启硬控流的操作，也就是在对应的 OS 下开启 UART 驱动代码。 
 
表 1-3. UART 驱动代码路径 
系统 UART 路径 APDMA 路径 
Android kernel/kernel_device_modules-
6.1/tty/serial/8250/8250_mtk.c 
kernel/kernel_device_modules-
6.1/dma/mediatek/mtk-uart-apdma.c 
Yocto src/kernel/linux/v6.1_mt8676/co_device_modul
e/drivers/tty/serial/8250/8250_mtk.c 
src/kernel/linux/v6.1_mt8676/co_device_module/driv
ers/dma/mediatek/mtk-uart-apdma.c 
 
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
 具体实作 
本次以 L+A+L 系统中的 SOS (Yocto) 的 UART2 Passthrough 到 UOS (Android) 端举例说明。 
1.3.2.1 SOS (Yocto)部分改动 
SOS (Yocto) 部分改动较小，只需要确保 auto8676p1_64_hyp_sos.dts 文件中的 UART2 节点属性 status 从 “okay” 改为 
“disabled” 即可，如图 1-3 所示。 
 
 
图 1-3. SOS 部分改动 
1.3.2.2 UOS (Android)部分改动 
UOS (Android) 改动有两处： 
1. dts 修改 
UOS (Android) 系统需修改 auto8676p1_64_bsp_vm.dts 文件，将 UART2 节点进行开启，并且将 UART2 对应的 pin 
脚切为 UART 模式，使得平台开机后 pin 脚会自动切到 UART 模式上。具体改动如图 1-4 所示。 
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
 
图 1-4. UOS-DTS 部分改动 
 
2. ko_table 修改 
由于在 UOS (Android) 端并未添加 UART 相关 ko 文件，因此还需要在 ko_order_table 文件中添加，如图 1-5 所示。 
          
图 1-5. UOS-KO 部分改动 
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
1.3.2.3 Hypervisor 部分改动 
由于 Hypervisor 部分将中断号全部开启在 SOS (Yocto) 端，需要把 UOS (Android) 端所使用到的中断号开启，因此需
要在 uos_alps_pv8676.lua 文件中将 UART2 的中断号开在 UOS 端，如图 1-6 所示。
 
图 1-6. Hypervisor 部分改动 
 
1. UART2 的中断号在 MT6897.dts 文件中可以查询为 252，而写到 LUA 文件中需要增加 32，因此 UART2 的中断号
在 uos_alps_pv8676.lua 文件中为 284。 
2. 当 UART2 开启 DMA 模式时，DMA 拥有 DMA TX/DMA RX 两个通道，因此 UART2 的 DMA 查表可以查询为
223，224，通过增加 32 可得到在 lua 文件中为 255，256。  
 
 测试和调试 
在对应开启 UART 驱动的 OS 下执行如下操作进行测试： 
1. 设置波特率 921600，8 位数据位，1 位停止位，无奇偶校验，如 UART2 
stty -F /dev/ttyS2 ispeed 921600 ospeed 921600 cs8 
 
2. 获取当前 UART 波特率以及数据位配置信息 
stty -F /dev/ttyS2 -a 
 
3. UART 获取数据，可以使用以下命令接收 UART2 数据并通过 console 打印出来 
cat /dev/ttyS2 
 
4. UART 发送数据，可以使用以下命令让 UART2 发送字符串”123” 
echo 123 > /dev/ttyS2 
 
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
MT8676 Hypervisor UART 
 User Manual 
Confidential B 
 常见问题及故障排除 
1.3.4.1 改完后 Android 起不来 
1. 请检查平台中（非 codebase）uos_alps_pv8676.lua 文件是否包含了 UART 中断号，具体可在 shell 中敲击命令： 
vi /vendor/etc/hyper_android/uos_alps_xx.lua 
请务必保证平台中的 lua 文件包含 UART 所需的中断号。 
 
2. 如开机 log 中出现类似于如下 log 
init: [name:main&]8250_mtk: Unknown symbol UARTHUB_md_adsp_fifo_ctrl (err -2) 
请检查 ko_order_table 文件是否正确修改到，并且 3 个 ko 是否有如图 1-5 方式正确添加。 
1.3.4.2 改完后测试 UART 未成功 
1. 请检查修改的 UOS/SOS 对应的 dts 是否正确，前文是以 L+A+L 系统为例，如是 L+A 系统则 dts 文件不一样，请
确认是否正确修改 dts 文件。 
2. 请检查 dts 配置是否正确，请使用 Linux 命令检查 UART 引脚 mode 是否切换至 UART 模式  
Kernel 里查看 PIN 的状态，可输入以下命令进行查询: 
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
 
 寻求联发科技帮助 
若经过前文的排查仍无法解决您的问题，向联发科技寻求帮助时请提供相关日志 /DTS/cat mt_gpio 等信息。 
 
 
  
 
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
MT8676 Hypervisor UART 
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
# SRC0228 MT8676_Hypervisor_Vcodec_User_Manual_V1.2.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Vcodec_User_Manual_V1.2.pdf

SHA-256：2ca0cfa195c8759df452547652c024c8fa9a4d86a817aaab06675d56f0008432

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0228.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.2 
出版日期：  2024-11-25 
MT8676 Hypervisor Vcodec 
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-10-28 刘有高 正式版 
1.1 2024-11-11 刘有高 在章节 1.3.1.2 中增加了 video playback 架构的适用范围 
1.2 2024-11-25 刘有高 在章节 1.3.1.2 和 1.3.1.3 删除 Yocto+Android 内容 
  
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
MT8676 Hypervisor Vcodec 
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
 缩略词 ·························································································································································· 5 
 性能 ······························································································································································ 5 
1.3 架构/流程概要 ························································································································································ 6 
 软件架构 ······················································································································································ 6 
1.4 配置/客制指南 ························································································································································ 8 
 解码器 codec 配置 ······································································································································· 8 
 解码器支持路数配置··································································································································· 9 
 Secure 解码器配置 ······································································································································ 9 
 编码器 codec 配置 ······································································································································· 9 
 编码器支持路数配置································································································································· 10 
 Secure 编码器配置 ···································································································································· 10 
 Playback 功能客制化 ································································································································· 11 
1.5 常见问题/故障排除 ·············································································································································· 11 
 MTK C2_hal CMD ········································································································································ 11 
 MMDVFS CMD ············································································································································ 12 
 VCodec CMD ··············································································································································· 12 
 Video Dump 功能 ······································································································································· 12 
 黑屏 ···························································································································································· 13 
 花屏 ···························································································································································· 13 
 卡顿 ···························································································································································· 14 
附件一 附加条款 ····························································································································································· 15 
 
  
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
图片目录 
图 1-1. Android 系统 playback 架构 ········································································································································· 7 
图 1-2. Hypervisor 系统 playback 架构 ····································································································································· 8 
图 1-3. Hypervisor 系统 SVP playback 架构 ······························································································································ 8 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 5 
表 1-2. Video 文件格式 ····························································································································································· 5 
表 1-3. Vcodec 性能 ··································································································································································· 6 
 
  
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
1 视频编解码基本介绍 
1.1 目的 
本架构设计文档旨在描述具体的系统架构，以确保 Android 和 Yocto 系统能够在虚拟化环境中有效地共享硬件资
源，同时向用户提供连贯和高性能的体验。 
 
1.2 范围 
本文档着重描述系统的高层架构，涵盖了从硬件层到应用层的设计考虑，以及不同组件之间的通信和互动关系。  
 
 缩略词 
表 1-1. 缩略词 
缩略词 全称 释义 
HAL Hardware Abstraction Layer 硬件抽象层 
V4L2 Video for Linux Two Linux 系统 video 框架 
VCodec Video Codec 视频编解码器 
VCP Video CoProcess Video 协处理器 
Vdec Video Decoder 视频解码器 
Venc Video Encoder 视频编码器 
VirtIO Virt Input/Output 虚拟输入输出 
 
 性能 
下表是目前系统中支持的视频文件格式。 
表 1-2. Video 文件格式 
文件格式 文件后缀 MT8676 Android U0 备注 
MKV “.mkv”,”mka” √ - 
MP4 “.mp4”,”.m4a”,”.m4v”,”.3g2”,”.3gp”,”.3gpp”,”
3gpp2” 
√ - 
PS ”.mpg” √ vob 不支持 
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
文件格式 文件后缀 MT8676 Android U0 备注 
TS “.ts”,”.m2ts”,”.mts” √ - 
WEBM “.webm” √ - 
AVI “.avi” X Android S phase out 
WMV “.wmv”,”.asf” X Android S phase out 
FLV “.flv”,”.f4v” X Android S phase out 
RMVB “.rmvb”,”.rm” X - 
 
针对视频的编解码模块，下表是具体支持的参数列表信息。 
表 1-3. Vcodec 性能 
类别 编解码器 
规格 
分辨率 帧率 位速率 位深 属性/级别 
解码器 H.264 4096x2176 60 160 Mbps 8/10 CBP ,MP ,HP , High 10 / 5.2 
H.265 4096x2176 60 160 Mbps 8/10 Main / 5.1 
Main 10 / 5.1 
VP9 4096x2176 60 120 Mbps 8/10 Profile 0/2 
AV1 4096x2176 60 120 Mbps 8/10 Main/level5.1 
编码器 H.264 3840x2160 60 160 Mbps 8/10 BP ,MP ,HP , High 10 / 5.2 
H.265 3840x2160 60 160 Mbps 8/10 Main, Main10 / 5.1 
并发 
(硬件性能) 
- 4K60 VDEC + 4K60 VENC 或等效吞吐量 
 
1.3 架构/流程概要 
 软件架构 
本章节主要介绍目前系统中 video playback 相关的架构图。 
 
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
1.3.1.1 Android 
在单系统中，video playback 的架构如下图所示。 
 
图 1-1. Android 系统 playback 架构 
 
1.3.1.2 Hypervisor 
在 Hypervisor 系统中，video playback 的架构如下图所示（该架构适用于 L(w/ Vcodec)+A 或者 L(w/ Vcodec)+L(w/o 
Vcodec)+A）。 
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
 
图 1-2. Hypervisor 系统 playback 架构 
 
1.3.1.3 Hypervisor SVP 
在 Hypervisor 系统中，secure video playback 的架构如下图所示。 
 
图 1-3. Hypervisor 系统 SVP playback 架构 
 
1.4 配置/客制指南 
 解码器 codec 配置 
下图是系统中配置的解码器支持的 codec 信息。 
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
 
 
 解码器支持路数配置 
下图是系统中配置的解码器支持路数信息。 
 
 
 Secure 解码器配置 
下图是系统中支持 secure 解码器的配置信息。 
 
 编码器 codec 配置 
下图是系统中支持的编码器对应的的配置信息。 
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
 
 
 编码器支持路数配置 
下图是系统中编码器支持的通道数的配置信息。 
 
 
 Secure 编码器配置 
下图是系统中支持 secure 编码器的配置信息。 
 
 
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
 
 Playback 功能客制化 
1.4.7.1 HDR 
关于 HDR 功能，需要具体项目进行客制化支持。 
 
1.4.7.2 SVP Playback 
关于 secure video plyabck 功能，需要具体项目进行客制化支持。 
 
1.5 常见问题/故障排除 
 MTK C2_hal CMD 
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
Enable debug level logs by <TAG> filter. E.g. V4L2Device 
adb shell "setprop vendor.mtk.c2.enable.vcodec.log.V4L2Device 4" 
adb shell "setprop vendor.mtk.c2.enable.vcodec.log 4" 
adb shell "setprop vendor.mtk.c2.enable.vcodec.log.<TAG> 4" 
 
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
 MMDVFS CMD 
Force clock to specific step by OPP  
param1: 0→ Vcore  1→vmm 
OPP 0: highest clock rate 
adb shell "echo 0 0 > /sys/module/mtk_mmdvfs_debug/parameters/force_step" 
 
Vote clock to specific step by OPP:  
adb shell "echo 0 0 > /sys/module/mtk_mmdvfs_debug/parameters/vote_step" 
 
Dump current clk: 
adb shell "echo fmeter > /proc/clkdbg ; cat /proc/clkdbg | grep –e vdec –e cam" 
 
Dump MMDVFS OPP: 
adb shell "cat /proc/mmdvfs/mmdvfs_opp" 
 
 VCodec CMD 
Vcodec log Enable/Disable 
1: Enable 
2: Disable 
adb shell "echo 1 > /sys/module/mtk_vcodec_dec_v2/parameters/mtk_vcodec_dbg" 
 
Vcodec log level control 
codec_log:  common codec log level (0~31) 
vpud_log: vcodec wrap log level (0~7) 
job_log: job log level (0~7)s 
adb shell "echo -codec_log 7 -vpud_log 3 -job_log 3 > 
/sys/module/mtk_vcodec_dec_v2/parameters/mtk_vdec_vcp_log" 
 
 Video Dump 功能 
Decoder input dump (bit-stream to decode) 
The dumped file is saved in \data\vendor\vcodec\vdec_input_<timestamp>_<instance>.bs 
E.g., \data\vendor\vcodec\vdec_input_20200716T133851.521_0xE80D6000.bs 
adb shell "setprop vendor.mtk.c2.vdec.dump.input 1" 
 
Decoder output dump(decoded video frames) 
The dumped file is saved in: 
\data\vendor\vcodec\vdec_output_<timestamp>_<instance>_W<width>H<height>.yuv 
E.g., \data\vendor\vcodec\vdec_output_20200716T133851.521_0xE80D6000_W1280H720.yuv 
adb shell "setprop vendor.mtk.c2.vdec.dump.output 1" 
 
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
Decoder CC output dump(decoded video frames after color convert) 
The dumped file is saved in: 
\data\vendor\vcodec\vdec_output_cc_<timestamp>_<instance>_W<width>H<height>.yuv 
E.g., \data\vendor\vcodec\vdec_output_cc_20200716T133851.521_0xE80D6000_W1280H720.yuv 
adb shell "setprop vendor.mtk.c2.vdec.dump.output.cc 1" 
 
Decoder profiling data dump(binary debugging log) 
The dumped file is saved in \data\vendor\vcodec\vdec_profiling_<timestamp>_<instance>.dat 
E.g., \data\vendor\vcodec\vdec_profiling_20200716T133851.521_0xE80D6000.dat 
adb shell "setprop vendor.mtk.c2.vdec.profiling 1" 
 
 黑屏 
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
 
 花屏 
• 确认解码数据正常 
确认解码模块有收到正常的 video 码流数据： 
adb shell "setprop vendor.mtk.c2.vdec.dump.input 1 
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
MT8676 Hypervisor Vcodec 
User Manual 
Confidential B 
 
• Force GPU 是否 OK 
adb shell service call SurfaceFlinger 1008 i32 1 
 
• 确认 display 模块显示正常 
参考 display 文档确认显示逻辑。 
如果以上几点都 OK，最后就需要 Video playback owner 详细查看 log 来定位问题。 
 卡顿 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Hypervisor Vcodec 
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
# SRC0229 MT8676_Hypervisor_AI_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_AI_User_Manual_V1.0.pdf

SHA-256：0ffc4e91d4e3f5728e433a2fda0e617597d4c3d660df96a02091bd3ac6364e0c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0229.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-11-13
MT8676 Hypervisor AI User Manual 
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
MT8676 Hypervisor AI 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-13 Wmeng.Wu Official release 
 
  
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
MT8676 Hypervisor AI 
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
 APU Virtualization ········································································································································· 4 
 AI Architecture ·············································································································································· 4 
 NeuroPilot Development Guide ···················································································································· 5 
 Configuration/Customization Guideline ··················································································································· 6 
 Explanation of NeuroPilot Debug Commands ······························································································ 6 
 The APU Trace Tool Captures the Trace ········································································································ 7 
 Information about the Operators Supported by Specific MediaTek Platform’s NPU ··············································· 9 
Appendix 1 Terms and Conditions ···································································································································· 10 
 
 
List of Figures 
Figure 1-1. AI architecture ·························································································································································· 5 
Figure 1-2. NeuroPilot online document ···································································································································· 6 
Figure 1-3. APU HW status ························································································································································· 8 
Figure 1-4. APU frequency status ··············································································································································· 8 
Figure 1-5. Relationship of supported operators ······················································································································· 9 
 
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
MT8676 Hypervisor AI 
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
 APU Virtualization 
 
Improved compatibility: After APU virtualization, using the NeuroPilot approach for the User level, which remains 
consistent with a single system. 
 
 AI Architecture 
NeuroPilot is a set of software tools and APIs for developing efficient artificial intelligence applications on the MediaTek 
platform; it is the core of the MediaTek artificial intelligence ecosystem. “Edge AI” is supported by NeuroPilot, which 
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
MT8676 Hypervisor AI 
User Manual 
Confidential B 
means executing AI on local devices rather than remotely on servers. This can result in faster AI tasks while also protecting 
data and privacy. 
 
 
Figure 1-1. AI architecture 
 
Currently, the MT8676 software stack is shown in Figure 1-1, and it mainly includes the following layers: 
 
• CV/NN Application Layer: This layer contains user-written code for running AI applications. The layer also includes the 
MediaTek interpreter, which is an Android TensorFlow Lite interpreter optimized for MediaTek-NPU, and the TFLite 
Shim API, a wrapper layer built on top of the MediaTek interpreter aimed at simplifying API calls. 
• NN runtime layer: This layer contains the runtime libraries that provide NN acceleration, including NNAPI and 
MediaTek Neural Compiler/Runtime. 
• Middleware layer: This layer allows dynamic control of the MediaTek AI computing core and provides service quality 
control for NN workloads. 
• Driver Layer: This layer provides drivers for the specialized MediaTek AI computing core. 
 
 NeuroPilot Development Guide 
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
MT8676 Hypervisor AI 
User Manual 
Confidential B 
 
Figure 1-2. NeuroPilot online document 
 
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
Enable Kernel Log    :   adb shell "echo 15 > /sys/class/misc/apusys/log/klog" 
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
MT8676 Hypervisor AI 
User Manual 
Confidential B 
• adb shell stop neuralnetworks_hal_service_mtk_neuron 
• adb shell start neuralnetworks_hal_service_mtk_neuron 
 
 The APU Trace Tool Captures the Trace 
 Use the Trace tool to Obtain the Path 
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
 
Running the two scripts below is optional. Enabling them will result in the system trace containing APU middleware and 
neuron trace. 
 
• 08-mdw_trace_enable.bat - To obtain tracing information from the APU middleware. 
• 08-neuron_rt_trace_enable.bat - To obtain tracing information from the neuron runtime. 
 
Three files will be generated in the end, choose to view as needed (Please use https://ui.perfetto.dev/ to open the trace.) 
 
• apusys.trace - apusys trace only 
• System trace - system trace only 
• combine.trace - apusys + system trace 
 
 Analysis Example of APU Trace  
The trace files obtained by capturing and parsing with MediaTek APU Systrace usually have the following three: 
 
• apusys.trace (Only includes the status of tasks on various devices such as MDLA/MVPU during APU operation and 
information on APU Frequency, DRAM access, TCM access, etc.) 
• system.trace (Regular system trace only, including CPU information and information about other processes/threads in 
the system) 
• combine.trace (apusys + system trace) 
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
MT8676 Hypervisor AI 
User Manual 
Confidential B 
 
In actual scenarios, there is often a need to clarify the debugging requirements for the threads running APU in the current 
system. The following SOP can be referred to: 
 
1. Open the apusys.trace file using Perfetto UI, find the Tasks block running on the MDLA or MVPU (Main AI Compute 
Unit) Core, and you can obtain the following information: 
– Does the corresponding Task run in SMP multi-core parallel mode? If running in multi-core MDLA mode, there will 
be multiple Tasks with the same color/pid as shown in Figure 1-3: 
 
 
Figure 1-3. APU HW status 
 
– The DRAM/TCM occupancy situation corresponding to the Task  
– The operating frequency of the MDLA/MVPU Cores during the corresponding Task execution period 
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
MT8676 Hypervisor AI 
User Manual 
Confidential B 
 Information about the Operators Supported by Specific MediaTek 
Platform’s NPU 
 
Figure 1-5. Relationship of supported operators 
 
As shown in Figure 1-5, the operators supported by the MediaTek platform NPU are divided into three levels from small to 
large: 
 
• PyTorch/TensorFlow Ops -> TFLite Ops: By using the mtk_converter tool, the original Ops in .pt or .pb models are 
converted to TFLite Ops. This mapping process will undergo initial Ops filtering to block Ops not supported by the 
platform’s NPU (HW). For a list of PyTorch/TensorFlow Ops that can be recognized and converted to TFLite Ops by the 
converter tool, please refer to the Online Document: Developer Tools -> Model Development -> Converter -> 
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
MT8676 Hypervisor AI 
User Manual 
Confidential B 
Appendix 1 Terms and Conditions 
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
# SRC0230 MT8676_Hypervisor_Camera_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Camera_User_Manual_V1.1.pdf

SHA-256：8ffa08647b60118ffaff0affaef01189ca3800981abd021e1af3af5cb20ed357

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0230.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-11-22
MT8676 Hypervisor Camera  
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
MT8676 Hypervisor Camera 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-10-31 Jian.Xiang Official release 
1.1 2024-11-22 Jian.Xiang Modified the description in Section 1.3.1 Architecture 
 
  
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
MT8676 Hypervisor Camera 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
1 Hypervisor Camera ···················································································································································· 4 
1.1 Overview ·································································································································································· 4 
1.2 Camera Turbo ··························································································································································· 5 
 Architecture ·················································································································································· 5 
 Control Flow ·················································································································································· 6 
1.3 Camera Virtualization ··············································································································································· 8 
 Architecture ·················································································································································· 8 
1.4 Debug Share ····························································································································································· 9 
 Log ································································································································································· 9 
Exhibit 1 Terms and Conditions ········································································································································ 10 
 
 
List of Figures 
Figure 1-1. Camera architecture overview ································································································································· 4 
Figure 1-2. Camera MW architecture ········································································································································· 5 
Figure 1-3. MW class flow ·························································································································································· 6 
Figure 1-4. MW class flow ·························································································································································· 7 
Figure 1-5. Camera Virtualization architecture ·························································································································· 8 
 
 
 
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
MT8676 Hypervisor Camera 
User Manual 
Confidential B 
1 Hypervisor Camera 
1.1 Overview 
 
Figure 1-1. Camera architecture overview 
 
Camera Turbo is mainly divided into three parts: 
 
• The Entry layer is the entrance to MW. Different OSs can adapt MW by calling the code of the entry layer through the 
adapt layer.  
• The Custom layer is the customization layer through which customers can perform customized operations. 
• The IF layer is the interface layer used by the entry layer. The logic of camera session and native camera is generated 
here. The IF layer mainly implements the flow framework of request and config-related operations. 
• The Core layer is the core layer of MW. It mainly communicates with the driver, sends the request and gets the result 
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
MT8676 Hypervisor Camera 
User Manual 
Confidential B 
1.2 Camera Turbo  
 Architecture 
 
Figure 1-2. Camera MW architecture 
 
The main architecture diagram of Camera Turbo is the Entry layer, IF layer and Core layer. The Custom layer is mainly for 
customer use. If not used, it can be bypassed directly. 
 
• The Entry layer is mainly composed of Camera and CameraProvider. The CameraProvider mainly provides the Camera 
list to the upper layer and obtains and controls the properties of the Camera. The Camera mainly provides the 
interface to the upper layer to control the control behavior of the camera sensor. 
• The IF layer is mainly the pipeline, which is the manager that builds the underlying node connection relationship. 
ImageProc mainly facilitates callback to provide customers with customized behaviors. At the same time, customers 
can also customize the pipeline through ImagePro. 
• The Core layer is mainly composed of subclasses of ImageNode. The subclasses interact with the underlying driver to 
implement different operations on the request. For example, FdNode is mainly for face recognition, captureNode for 
Camera function, MCNRNode for image processing, and the final result will be passed through ImageNode callback. 
to IF layer.  
 
 
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
MT8676 Hypervisor Camera 
User Manual 
Confidential B 
 Control Flow  
 
Figure 1-3. MW class flow 
 
Figure 1-3 is mainly the class flow interaction diagram between Entry and Custom. It is mainly that the upper layer gets the 
camera through the open interface of CameraProvider, and the camera gets the CustomizationManger by calling Camera 
TurboEngine. CustomizationManger is the manager of the Custom layer, which facilitates the management of customer-
specific customization behaviors. 
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
MT8676 Hypervisor Camera 
User Manual 
Confidential B 
 
Figure 1-4. MW class flow 
 
The interaction logic between the IF layer and Core is mainly that the open interface of the upper CameraProvider calls the 
NativeCameraManager. The NativeCameraManager allocates the NativeCamera that can be operated at the bottom layer. 
Each NativeCamera has pipeline attributes, which determines the actual flows of each NativeCamera. The camera 
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
MT8676 Hypervisor Camera 
User Manual 
Confidential B 
1.3 Camera Virtualization  
 Architecture 
 
Figure 1-5. Camera Virtualization architecture 
 
The guest (Android) and host (Yocto) systems are running simultaneously, and operations on both systems are performed 
separately. There is a guest camerahalserver process on the Android side, and a host camerahalserver process on the Yocto 
side. The APP is on the Android side, and the camera underlying is on the Yocto side (MW/sensor/driver). The 
camerahalserver on the Android side takes pictures from the camerahalserver on the Yocto side as a guest role. The 
camerahalserver on the Yocto side needs to run first so that the Android camera APP can be opened. When it is necessary 
to restart the camerahalserver, the Yocto side is restarted first, and then the Android side’s camerahalserver is killed. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Camera Feature Layer
 CameraProvider
 Camera
CameraTurboEngine
Camera Driver
Camera HW
Binder Interface
 RpcCameraProvider
 RpcCamera
Camerahalserver
Binder 
Driver
Gstreamer Framework
mtkcamsrc
Camera Feature Layer
 CameraProvider
 Camera
Android Adaptor Layer
Camera HIDL Interface
Camerahalserver
Camera Native Framework
Camera Java Framework
Camera APP
VSOCK
 VSOCK
Cameraserver
Android Yocto
Userspace
Kernel Android Request/Result
Yocto Request/Result
Merged Request/Result
mtkmdp
 h264enc
 mp4mux
 filesink
h264parse
mtkmdp
 Dms algo
 waylandsink
APP
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
MT8676 Hypervisor Camera 
User Manual 
Confidential B 
1.4 Debug Share  
 Log 
camerahalserver:  [3457][TINY_NATIVECAMERAMANAGER] open cam::0 + 
camerahalserver:  [3457][RpcCamera] [RpcCamera] Cam::0, userId 0, logEn 0, ctor 
camerahalserver:  [3995][TINY_NATIVECAMERA] [operator()] Power On Sensor Success 
camerahalserver:  [3457][RpcCamera] [configure] Cam::0, userId 0 + 
camerahalserver:  [3457][TINY_CAMERA] [configure] cam[0] user[0] configure + 
camerahalserver:  [3457][TINY_IMAGEPROC] [addMultiCallback] [captureProc] add 
callback:0x7f6002b350 for user:0 
camerahalserver:  [4061][TINY_NATIVECAMERA] [0][operator()] [user::0]current pipeline 
active ... 
camerahalserver:  [4061][TINY_PIPELINE] ppl::0, active, root 0x7f60021fd0 + 
camerahalserver:  [3457][TinyMW/TinyPolicy] [TinyMW/TinyPolicy::initialize] + 
camerahalserver:  [3457][TinyMW/TinyPolicy] [TinyMW/TinyPolicy::initialize] - 
camerahalserver:  [3457][TINY_PIPELINE] ppl::0, init + 
camerahalserver:  [3457][TINY_PIPELINE] init - 
camerahalserver:  [3457][TINY_NATIVECAMERA] [0][configStreams] [user::0]curpipe init - 
camerahalserver:  [3457][TINY_NATIVECAMERA] [0][pushRequest] [user:0 R:0] + 
camerahalserver:  [3457][TINY_NATIVECAMERA] [0][pushRequest] [user:0 R:0] - 
camerahalserver:  [3994][TinyMW/TinyPolicy] [TinyMW/TinyPolicy::onEvaluateRequest] 
AppRequest: 0 in Device + 
camerahalserver:  [3994][TINY_ROOTNODE] [0](  86)[enqReqLoop] user:0 frameId:0 
camerahalserver:  [3994][TINY_IMAGENODE] [P1Node_0]( 101)[input][Cam::0] [NODEDBG_FRAME 
R:0,F:0] input 
camerahalserver:  [3994][TINY_IMAGENODE] [ImgSrc_256]( 101)[input][Cam::0] [NODEDBG_FRAME 
R:0,F:0] input 
camerahalserver:  [4101][TINY_IMAGEPROC] [notify] [0][P1Proc][0x7f600395b0]notify shutter 
user:0 shutter:195729495000 
camerahalserver:  [4101][TINY_IMAGENODE] [P1Node_0]( 370)[applyRelease][Cam::0] R0:F0 
camerahalserver:  [3988][TINY_IMAGENODE] [McnrNode_1]( 101)[input][Cam::0] [NODEDBG_FRAME 
R:0,F:0] input 
camerahalserver:  [4020][TINY_IMAGENODE] [McnrNode_1]( 370)[applyRelease][Cam::0] R0:F0 
camerahalserver:  [4020][TINY_IMAGENODE] [McnrNode_1]( 241)[applyResult][Cam::0] 
[NODEDBG_FRAME R:0,F:0] out, result(0), #processing(0) 
camerahalserver:  [4020][CustLayer] [processCaptureResult] processCaptureResult camId:0 
userId 0, frameId:0 
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
MT8676 Hypervisor Camera 
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
# SRC0231 MT8676_Hypervisor_Clock_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Clock_User_Manual_V1.1.pdf

SHA-256：967c72386c0189e4666dfdef6b7112f51a052ec138e07deb872bd97ce0eaf484

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0231.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-11-12
MT8676 Hypervisor Clock 
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
MT8676 Hypervisor Clock  
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-10-28 Guanghui Wang Official release 
1.1 2024-11-12 Guanghui Wang Added Tbox in Section 1.2.2 SW Architecture 
 
  
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
MT8676 Hypervisor Clock  
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 Clock Common Interface ············································································································································ 4 
1.1 Overview ·································································································································································· 4 
 Abbreviations ················································································································································ 4 
1.2 Architecture/Process Overview ································································································································ 4 
 HW Architecture ··········································································································································· 4 
 SW Architecture ············································································································································ 5 
1.3 Frequently Asked Questions/Troubleshooting ········································································································· 6 
 Command to Dump Clock ····························································································································· 6 
 Command to Query Clock Frequency ··········································································································· 7 
 Command to Enable/Disable Clock ··············································································································· 7 
 Debug Method for Clock Hanging when Accessing HW Registers ································································ 7 
Exhibit 1 Terms and Conditions ·········································································································································· 9 
 
List of Figures 
Figure 1-1. HW architecture ······················································································································································· 4 
Figure 1-2. Yocto/Android/Tbox architecture····························································································································· 5 
Figure 1-3. Hypervisor (Yocto + Android + Tbox) architecture ··································································································· 6 
 
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
MT8676 Hypervisor Clock  
User Manual 
Confidential B 
1 Clock Common Interface 
1.1 Overview 
This chapter mainly introduces the MT8676 Clock architecture. 
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
CCF (Linux) Common Clock Framework 
CG Clock Gate 
Divider Divider 
MUX Multiplexer 
PLL  Phase-Locked Loop 
 
1.2 Architecture/Process Overview 
 HW Architecture 
INTERNAL USE
Confidential B
1
PLLs
 CGs
Dividers
 MUXs
26M
Device 
driver
CCF
PLL/MUX/CG 
register to CCF 
when bootup
CG driver
MUX driver
divider driver
PLL driver
Call CCF APIs:
Clk_prepare/clk_enable/clk
_disable/clk_unprepare…
 
Figure 1-1. HW architecture 
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
MT8676 Hypervisor Clock  
User Manual 
Confidential B 
 SW Architecture 
1.2.2.1 Yocto/Android/Tbox 
INTERNAL USE
Confidential B
1
PLLs CGsDividers MUXs26M
Device 
driver
CCF
PLL/MUX/CG 
register to CCF 
when booting up
CG driver
MUX driver
Divider driver
PLL driver
Call CCF APIs:
clk_prepare/clk_enable/clk
_disable/clk_unprepare…
 
Figure 1-2. Yocto/Android/Tbox architecture 
 
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
MT8676 Hypervisor Clock  
User Manual 
Confidential B 
1.2.2.2 Hypervisor (Yocto + Android + Tbox) 
 
Figure 1-3. Hypervisor (Yocto + Android + Tbox) architecture 
 
1.3 Frequently Asked Questions/Troubleshooting 
 Command to Dump Clock  
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; }  
clkdbg dump_clks | grep xxxxx 
The format of output is as follows: 
The 1st column represents the clock name, the 2nd column represents On/off, the 3rd column represents is_prepared, the 
4th column represents is_enabled, the 5th column represents the clock  frequency, and the last column represents the 
parent name of current clock. 
[  topckgen: mdp1_ck              :  ON,   0,   0,  687499969,              mdp1_sel] 
[dispsys0_config: dispsys0_mdp_aal0    :  ON,   1,   1,  687499969,              disp0_ck] 
[dispsys0_config: dispsys0_mdp_rdma0   :  ON,   0,   0,  687499969,              disp0_ck] 
 
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
MT8676 Hypervisor Clock  
User Manual 
Confidential B 
 Command to Query Clock Frequency  
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg fmeter | grep xxxxx 
 
The output is as follows: 
The 1st column represents the clock name, and the 2nd column represents the frequency value, 0 means the clock is 
turned off. 
fm_mdp0_ck                   : 0 
fm_mdp1_ck                   : 0 
fm_mdpll1_fs26m_guide        : 26000 
 
 Command to Enable/Disable Clock 
Command to enable clock: 
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg prepare_enable xxxxx 
 
e.g. 
clkdbg prepare_enable mdp0_sel 
clk_prepare_enable(mdp0_sel): 0 
 
The 1st line is command, and the 2nd line is output: 0 means returning OK, otherwise returning error code. 
Upon dumping again, it can be seen that the above command has turned on the corresponding clock. 
root@auto8676p164:~# clkdbg dump_clks | grep mdp0_sel 
[  topckgen: mdp0_sel             :  ON,   1,   1,  687499969,              mmpll_d4] 
 
Command to disable clock: 
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg disable_unprepare xxxxx 
 
 Debug Method for Clock Hanging when Accessing HW Registers 
The most common issue of the clock is hanging when accessing a related HW register, this is usually caused by the power 
of the current clock or the power domain not being turned on. 
 
• If the parent clock is not turned on, the above command can be used to dump the clock to confirm whether the 
parent clock is normally turned on, or whether it has been turned off by other programs. 
• If the power domain of clock is not turned on, the command of dumping power domain can be used to check the 
power domain status. 
Cat clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg dump_genpd | grep xxxxx 
 
e.g. 
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
MT8676 Hypervisor Clock  
User Manual 
Confidential B 
Cat clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg dump_genpd | grep adsp 
 
The format of result is as follows: 
The 1st column is power domain name, and the 2nd column is the status: active means on, suspended and 
POWER_OFF mean off. 
The sub-nodes of power domain are names and status of sub-devices. 
root@auto8676p164:~# clkdbg dump_genpd 
+ [ovl1-shutdown            ACTIVE] 
        - (power-domain-chk-41   0,  suspended) 
        - (1460e000.smi-ovl1-sram-sub-comm1                                                   
0,  suspended)        
- [csi-rx                POWER_OFF] 
        - (power-domain-chk-42   0,  suspended) 
        - (disable-unused:disable-unused-pd-csi-rx@0                                          
0,  suspended) 
        - (genpd:1:1a00e000.seninf-top                                                        
0,  suspended) 
 
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
MT8676 Hypervisor Clock  
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
# SRC0232 MT8676_Hypervisor_Display_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Display_User_Manual_V1.1.pdf

SHA-256：ed864e63e29b06eef375c22005d19b1d1669ec4108f069de0097bb459ac0b1ac

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0232.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-11-13
MT8676 Hypervisor Display 
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-10-28 Scott Wang Official release 
1.1 2024-11-13 Scott Wang 
• Added Tbox in Section 1.2.2.2 Hypervisor (Yocto + 
Android + Tbox) 
• Added Table 1-3. Connector device node introduction 
 
 
  
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 Display & Multi-Screen ·············································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 Abbreviation·················································································································································· 4 
 Capability ······················································································································································ 4 
1.2 Architecture/Process Overview ································································································································ 5 
 HW Architecture ··········································································································································· 5 
 SW Architecture ············································································································································ 6 
1.3 Configuration/Customization Guideline ··················································································································· 8 
 Host Yocto Configuration ······························································································································ 8 
 Guest Android Configuration ························································································································ 9 
1.4 Frequently Asked Questions/Troubleshooting ······································································································· 10 
 hwc CMD ····················································································································································· 10 
 Display Driver CMD ····································································································································· 10 
 Pattern ························································································································································ 11 
 Black Screen ················································································································································ 12 
 Screen Distortion/Flickering ························································································································ 12 
 Screen Freeze/Lag ······································································································································· 12 
Exhibit 1 Terms and Conditions ········································································································································ 14 
 
 
List of Figures 
Figure 1-1. Display HW architecture ·········································································································································· 5 
Figure 1-2. Display Android architecture ···································································································································· 6 
Figure 1-3. Display Yocto + Android architecture ······················································································································· 7 
 
List of Tables 
Table 1-1. Abbreviation ······························································································································································ 4 
Table 1-2. Capability ··································································································································································· 4 
Table 1-3. Connector device node introduction ························································································································· 8 
 
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
MT8676 Hypervisor Display 
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
 
 Capability 
Table 1-2. Capability 
Name Capability 
DISP pipeline 10bit pipe x 3 (MAX 688MHz at 0.75V) 
DSI 
DSI0 + DSI1 
C/D PHY Combo 4-lane x 2 
DPHY: 2.5Gbps/lane 
DP DP1.4, 4-lane 8.1Gbps/lane 
(4-lane mode conflict with USB3) 
Panel number 1 ~ 6 
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1.2 Architecture/Process Overview 
 HW Architecture 
 
Figure 1-1. Display HW architecture 
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
 SW Architecture 
1.2.2.1 Android 
 
Figure 1-2. Display Android architecture 
  
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1.2.2.2 Hypervisor (Yocto + Android + Tbox) 
 
 
 
Figure 1-3. Display Yocto + Android architecture 
 
A driver-level virtualization solution is currently being utilized. Disp_pq and disp interface (DSI/DP) are virtualized, while 
OVL remains in direct pass-through control, balancing performance considerations. 
The complete CRTC driver (including OVL, disp_pq, dsi/dp) operates in Host Operating System. The Guest Operating System 
utilizes Virt-Connector/Encoder to access the Host Operating System's DRM driver via virtio to obtain display mode and 
control CRTC. The Guest OS updates layers using a pass-through method to directly drive OVL without the need for 
communication with the Host. 
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
Taking MediaTek public project “auto8676p1_64_hyp_6p (yocto 2 screens + android 4 screens)” as an example. There are 
six CRTCs in Yocto Kernel, CRTC0/1(DSI0) and CRTC4/5(DP) are for Android screen, CRTC 2/3(DSI1) is for Yocto screen. In 
Android Kernel, connector/encoder is virtual, dts nodes are virt_dsi0_0/virt_dsi0_1/virt_dp_0/virt_dp_1.  
Table 1-3. Connector device node introduction 
Device Node Introduction 
dsi0 
dsi1 
dp_intf 
Connector device node on host OS 
virt_dsi0_0 
virt_dsi1_0 
virt_dp_0 
Connector device node on guest OS 
virt_dsi0_1 virt_dsi1_1 
virt_dp_1 When enable superframe, connector device node for 2nd panel 
 
1.3 Configuration/Customization Guideline 
 Host Yocto Configuration 
The Kernel configuration of all multi-screen display (Android + Yocto) should be applied to Host Yocto Kernel, referred to 
the related chapter in MT8676_Android_Display_User_Manual_V1.0. 
• Kernel config path: 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/ 
• Kernel dts path: 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/ 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/ 
• Kernel ko table path: 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/ko_order_table 
 
You can refer to MediaTek public project: auto8676p1_64_hyp_6p (yocto 2 screens + android 4 screens), which is shown as 
below. 
 
• Kernel config file: 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/auto8676p1_64_hyp_6p.defconfig 
• Kernel dts file: 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/auto8676p1_64_hyp_6p.dts 
meta/meta-mediatek-mt8676-hyp/recipes-
kernel/linux/files/dtsi/cust_mt8676_display_config_hyp_6p.dtsi 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/cust_mt8676_displ
ay_interface.dtsi 
 
Please note the following two points: 
1. In the DP Serdes node, the width and height of the screen need to be filled into the crop-size. 
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
 
2. virt_xxx_1 node in DTS represents the second screen output of the interface. It is only necessary to enable it when 
superframe is enabled. 
 
 Guest Android Configuration 
You can refer to MediaTek public project: auto8676p1_64_vm_6p. 
Kernel dts file: 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/cust_mt8676_displ
ay_config_vm_6p.dtsi 
• The core change is to disable the original nodes representing the actual Hardware dsi/dp in dts and enable the 
virt_dsi/dp nodes. virt_xxx_1 node representing the second screen output of this interface, and only needs to be 
enabled when superframe is enabled. 
 
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
• Add the CRTC OVL configuration. In general, the CRTC OVL configuration of the Guest OS should be consistent with the 
corresponding CRTC OVL configuration on the Host OS. 
 
 
1.4 Frequently Asked Questions/Troubleshooting 
 hwc CMD 
• Log CMD: 
adb shell setprop persist.vendor.debug.hwc.log V && adb shell setprop 
vendor.debug.hwc.skip_log 0 && adb shell dumpsys SurfaceFlinger  
 
• Dump sf info: 
adb shell dumpsys SurfaceFlinger > sf.log 
 
• Force GPU (GPU compose): 
adb shell service call SurfaceFlinger 1008 i32 1 
 
 Display Driver CMD 
“On” means enable log output, “Off” means disable log output. 
 
Frequently used display mobile log: 
adb shell “echo mobile:on > /d/mtkfb” 
 
If you want to capture the boot log, you need to modify the code directly: 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
More detailed log: 
adb shell “echo detail:on > /d/mtkfb” 
 
If you want to capture the boot log, you need to modify the code directly: 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
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
First, you need to enable register debug. 
 
 
 
• dsi0 pattern: 
adb shell "echo reg_write 0x1400d178 0xc61 > /proc/clkdbg;cat /proc/clkdbg“ 
• dsi1 pattern: 
adb shell "echo reg_write 0x1420d178 0xc61 > /proc/clkdbg;cat /proc/clkdbg“ 
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
• dp pattern: 
adb shell "echo reg_write 0x1400bf00 0x41 > /proc/clkdbg;cat /proc/clkdbg“ 
 Black Screen 
• Is the backlight on 
• If exist bridge ic, is the bridge ic OK? 
• Is dsi/dp pattern OK 
• Is screencap OK 
adb shell screencap -d 0/1 /sdcard/1.png 
 
After confirming that all the above check points are satisfactory, the display owner should make analysis. 
 
 Screen Distortion/Flickering 
• Check the log to see if there is DISP_OVL/RDMA underflow/abnormal 
– Check size setting 
▪ cmd:  
adb shell “echo mobile:on > /d/mtkfb” 
– Check clk/dram frequency 
▪ clk  
o dump: 
adb shell " echo fmeter > /proc/clkdbg ; cat /proc/clkdbg | grep –e disp" 
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
MT8676 Hypervisor Display 
User Manual 
Confidential B 
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

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 Hypervisor Display 
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
# SRC0233 MT8676_Hypervisor_GNSS_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_GNSS_User_Manual_V1.0.pdf

SHA-256：14958f21236f05586caa4aa472693ff476bac4ada9d67b4df6e5271c2d789fdd

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0233.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-11-13
MT8676 Hypervisor GNSS User Manual 
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
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-13 Neo.Sun Official release 
 
 
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
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 GNSS ·········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief introduction ·········································································································································· 4 
 GNSS Abbreviations ······································································································································ 4 
1.2 Architecture/Process Overview ································································································································ 4 
 GNSS Architecture ········································································································································· 4 
1.3 Configuration/Customization Guideline ··················································································································· 5 
 Fixed Rate Configuration ······························································································································· 5 
 Multi-Satellite Navigation System Configuration ·························································································· 6 
1.4 GNSS API··································································································································································· 6 
 Code Path ······················································································································································ 6 
 GpsInterface ·················································································································································· 7 
 CallBack ························································································································································· 7 
 Demo Code ··················································································································································· 8 
1.5 Frequently Asked Questions/Troubleshooting ········································································································· 9 
 Issues Related to Logs ··································································································································· 9 
 Testing-related Issues ···································································································································· 9 
 GNSS Path ··················································································································································· 10 
Exhibit 1 Terms and Conditions ········································································································································ 11 
 
List of Figures 
Figure 1-1.GNSS architecture ···················································································································································· 5 
Figure 1-2. Fixed Rate configuration ·········································································································································· 6 
Figure 1-3. GNSS configuration ·················································································································································· 6 
Figure 1-4. MNLD test ······························································································································································ 10 
 
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
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
1 GNSS 
1.1 Overview 
 Brief introduction 
This section introduces the basic functions of MT8676 Global Navigation Satellite System (GNSS) and solutions to common 
issues. 
 GNSS Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
COLD start With time-assisted information, the end user will not encounter this scenario. 
FULL start Without any auxiliary information, equivalent to the scenario where an end user 
uses a positioning application for the first time after purchasing a mobile phone. 
GNSS Global Navigation Satellite System 
Hot start With all auxiliary information, the end user’s current positioning occurs less than 2 
to 4 hours after the last positioning. 
NMEA 
National Marine Electronics Association. A communication protocol used for data 
exchange between marine electronic devices, widely applied in GPS/GNSS receiver 
data output. 
TTFF Time To First Fix. The time required for a navigation device to successfully acquire 
the first valid positioning data from startup. 
UOS User Operating System 
WARM start With time and location-assisted information, the end user’s current positioning 
occurs more than 2 to 4 hours after the last positioning. 
 
1.2 Architecture/Process Overview 
 GNSS Architecture 
MT8676 GNSS architecture is as follows, GNSS is in T-box UOS which is also called Yocto UOS: 
 
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
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
 
Figure 1-1.GNSS architecture 
 
1.3 Configuration/Customization Guideline 
 Fixed Rate Configuration 
The fixed rate refers to the rate at which GNSS reports location information. Currently, the MT8676 supports fixed rates of: 
1Hz, 2Hz, 5Hz, and 10Hz, with a default configuration of 1Hz output. The method to modify the fixed rate is as follows: 
 
Method 1: Modify the code and configure the fix_interval parameter. fix_interval = 100 corresponds to 10Hz; fix_interval = 
1000 corresponds to 1Hz. 
Modifications are required in the Yocto environment at 
/src/connectivity/gps/4.0/mtk_mnld/mnld_entity/src/gps_controller.c. 
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
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
 
Figure 1-2. Fixed Rate configuration 
 
Method 2: Dynamically modify the configuration file, take effect after restarting GNSS, modify on the Yocto side. 
Command: echo fix_interval=1000 >> /data/etc/gnss/mnl.prop    /Configured to 1Hz, effective 
after restarting GPS. 
 
 Multi-Satellite Navigation System Configuration 
 MT8676 supports GPS + GLONASS + Galileo + BeiDou multi-satellite navigation positioning systems. The GNSS operation 
mode is configured to MTK_CONFIG_GPS_GLONASS_BEIDOU_GALILEO_NAVIC. The default configuration provides optimal 
GNSS performance. Use the default configuration. 
 
 
Figure 1-3. GNSS configuration 
 
1.4 GNSS API 
 Code Path 
Code path: 
/src/connectivity/gps/4.0/gps_hal 
 
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
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
 GpsInterface 
typedef struct { 
    size_t          size;    // Set sizeof(GpsInterface) 
int (*init)(GpsCallbacks_ext* callbacks);        // Initialize callback 
    int   (*start)( void );                                               //gps start  
    int   (*stop)( void );                                               //gps stop  
    void  (*cleanup)( void );                                      //cleanup gps 
 
    int   (*inject_time)(GpsUtcTime time, int64_t timeReference,int uncertainty);         
// Inject UTC time 
 
    int  (*inject_location)(double latitude, double longitude, float accuracy); 
// Inject the current location from another location provider. Latitude and longitude are in 
degrees, and accuracy is in meters. 
 
    void  (*delete_aiding_data)(GpsAidingData flags); 
// Specify that information defined in flags will not be used during the next startup call. 
For cold startup, GPS_DELETE_ALL will be passed. 
 
int   (*set_position_mode)(GpsPositionMode mode, GpsPositionRecurrence recurrence, 
              uint32_t min_interval, uint32_t preferred_accuracy, uint32_t preferred_time, 
              bool lowPowerMode); 
// The main purpose is to set the reporting frequency of nmea and location: min_interval 
 
    const void* (*get_extension)(const char* name); 
// Obtain a pointer to extension information 
    
    int  (*inject_fused_location)(double latitude, double longitude, float accuracy); 
// Inject fused location 
  
     int   (*fix_interval)(uint32_t interval); 
       // Dynamically set the reporting frequency, 100: 10Hz, 1000: 1Hz 
 
     int   (*op_mode)(uint8_t opmode); 
// Dynamically set operation mode 
 
     int   (*elevation_angle)(uint8_t angle); 
// Dynamically set elevation angle constraint 
    
    int   (*l5_disable)(bool disable); 
// Dynamically set L5 to enable or disable 
 
    int   (*gps_start_week_num)(uint32_t week); 
//Dynamically set GPS start week number 
 
 CallBack 
typedef struct { 
    
    gps_location_ext_callback location_cb;     // Callback for reporting location; retrieve location 
from here, commonly used. 
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
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
    gps_status_callback status_cb;                     // GPS status callback, GPS status such as start 
and stop 
    gps_sv_status_callback sv_status_cb;          //sv status callback 
    gps_nmea_callback nmea_cb;                       // Callback for reporting NMEA data; retrieve NMEA 
data from this point, commonly used. 
gps_set_capabilities set_capabilities_cb; // Capabilities are used in XTS certification. Obtain 
supported capabilities before executing specific test items. 
gps_acquire_wakelock acquire_wakelock_cb;      // Request callback for wakelock 
gps_release_wakelock release_wakelock_cb;        // Callback for wakelock status 
    gps_create_thread create_thread_cb;                     // Callback for creating a thread 
gps_request_utc_time request_utc_time_cb;         // Callback for obtaining UTC time 
gnss_set_system_info set_system_info_cb;            // Callback for setting system information 
gnss_sv_status_ext_callback gnss_sv_status_cb;   //Obtain the GNSS SV status extension callback 
 
    gnss_set_name_callback set_name_cb;                  //set nmea callback 
     
    gnss_request_location_callback request_location_cb;    //request locktion callback 
gps_location_ext_callback agps_location_cb;       // Obtain AGPS location 
 
gnss_output_rtcm3_callback output_rtcm3_cb;       // Retrieve RTCM callback 
gnss_set_signal_type_capabilities_callback set_signal_type_callback; // Set signal type capabilities, 
such as carrier frequency. 
 
 Demo Code 
Refer to the usage of mnld_test to invoke GpsInterface and callback. 
Mnld_test path: src/connectivity/gps/4.0/gnss_test 
 
For example: to call init and fix_interval in GpsInterface 
GpsInterface_ext* mnld_test_gpsinfs = NULL; 
GpsCallbacks_ext* mnld_test_cbs = NULL; 
mnld_test_cbs = (GpsCallbacks_ext*)calloc(1, sizeof(GpsCallbacks_ext)); 
 mnld_test_cbs->size = sizeof(GpsCallbacks_ext); 
 struct gps_device_t_ext *gpsdev = NULL; 
gpsdev = &linux_gps_device;                      // Define variable initialization 
 mnld_test_gpsinfs = (GpsInterface_ext*)gpsdev->get_gps_interface(gpsdev); 
  if(mnld_test_gpsinfs != NULL) 
   { 
         LOGI("mnld_test_gpsinfs is not null");                                                                                                                                                  
mnld_test_gpsinfs->init(mnld_test_cbs); 
          mnld_test_gpsinfs->fix_interval(1000); 
     } 
 
The use of callbacks can also refer to mnld_test, mnld_fm_gps_location_callback, and mnld_fm_gps_status_callback, 
which are all callback receiving functions, for example: 
GpsCallbacks_ext mnld_fm_gps_callbacks = { 
    .size = sizeof(GpsCallbacks_ext), 
    .location_cb = mnld_fm_gps_location_callback, 
    .status_cb = mnld_fm_gps_status_callback, 
…… 
 
Examine the mnld_test code closely; it contains specific interface calls and callback usage. 
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
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
 
1.5 Frequently Asked Questions/Troubleshooting 
 Issues Related to Logs 
• What logs do MediaTek engineers need for problem analysis? 
The Android side requires: /data/debuglogger/mobilelog 
T-box UOS (Yocto) side requires: /data/debuglogger/mobilelog, and NMEA log 
The T-box UOS (Yocto) mobilelog is enabled by default; to enable the NMEA log, you need to create the 
/data/etc/gnss/mnl.prop file and write the following in it: 
debug.dbg2file=1 
debug.filename=/data/debuglogger/gpsdebug.log 
 
After saving and restarting, the NMEA log will appear in /data/debuglogger/gpsdebug.log. 
 
• How to connect powergps 
First, enter the following command: 
adb shell "echo \"pmtk.serial.port=7000\" > /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug_type=0\" >> /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug.debug_nmea=1\" >> /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug.dbg2file=1\" >> /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug.filename=/data/debuglogger/gpsdebug.log\" >> 
/data/etc/gnss/mnl.prop" 
 
After restarting, enter the following again: 
adb forward tcp:7000 tcp:7000 
 
And use mnld_test to open GPS: 
adb shell 
mnld_test start c & 
 
 Testing-related Issues 
• Before testing, it is necessary to check whether there is satellite signal and whether it is in an open sky environment. 
Testing the GNSS satellite search or positioning function requires an open sky  environment for the signal, such as an 
open outdoor area or a laboratory with a signal amplifier. 
The ability to locate is based on the prerequisite that there are more than 6 satellites with a CNR of 40~43 dBm. ---> 
When measuring GNSS , it is important to pay attention to this; if the current signal environment does not meet the 
requirements, place a comparison device in the same environment for comparison. 
 
• How to test the TTFF of these startup methods: FULL start, WARM start, COLD start, and HOT start? 
On the Android side, use YGPS in engineering mode or execute the following adb command to open Y GPS. Test using 
the FULL, COLD, WARM, and HOT buttons: 1. Access engineering mode. 2. Open YGPS using adb command. 3. Select 
FULL, COLD, WARM, or HOT button for testing. 
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
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
adb shell am  start com.mediatek.ygps/.YgpsActivity 
 
T-box UOS (Yocto) side can utilize mnld_test. 
Start test(open gps): mnld_test –h 
 
 
Figure 1-4. MNLD test 
  
According to the prompt, for example, if you need to test a cold start, you can use the following command: 
mnld_test start c & 
 
Enter the following command to log data to the serial port, which allows viewing of TTFF and other information. 
journalctl -f --no-tail -o short-precise |grep mnldtest 
 
 GNSS Path 
Source code: 
Android: vendor\mediatek\proprietary\hardware\connectivity\gnss 
T-box UOS (Yocto): src/connectivity/gps/4.0 
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
MT8676 Hypervisor GNSS 
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
# SRC0234 MT8676_Hypervisor_GPIO_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_GPIO_User_Manual_V1.0.pdf

SHA-256：852e551201a0d34065d5651a2e32f5023cb750c2a213666f0552a10899623bcb

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0234.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-10-28
MT8676 Hypervisor GPIO 
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
MT8676 Hypervisor GPIO 
User Manual 
Confidential B 
Version History 
 
Version Date Author Description 
1.0 2024-10-28 Lei Xue Official release 
 
  
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
MT8676 Hypervisor GPIO 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 GPIO ·········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 Abbreviations ················································································································································ 4 
1.2 Architecture/Process Overview ································································································································ 4 
 GPIO Introduction ········································································································································· 4 
 Pinctrl Subsystem and GPIO Subsystem ········································································································ 5 
1.3 Configuration/Customization Guideline ··················································································································· 5 
 Pinctrl Usage ················································································································································· 5 
 GPIO Usage ··················································································································································· 6 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 7 
 How to Check and Modify the PIN Status in Kernel ······················································································ 7 
 The Pin Level during Power-on Does Not Match the Default Reset Value ···················································· 7 
Exhibit 1 Terms and Conditions ·········································································································································· 8 
 
 
List of Figures 
Figure 1-1. Pinctrl subsystem and GPIO subsystem ··················································································································· 5 
 
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
MT8676 Hypervisor GPIO 
User Manual 
Confidential B 
1 GPIO 
1.1 Overview 
 Brief Introduction 
This chapter introduces the hardware features, software configuration and functions of GPIO controller, also contains the 
debugging methods for common problems. 
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
DATAIN The value read by the pin is valid only when IES = 1. 
DATAOUT Set output High/Low in GPIO mode 
DIR Set Pin input/output in GPIO mode 
DRV General driving settings for the pin 
EH I2C-type pin-specific driving settings 
IES Input enable 
MODE Pinmux settings, just fill in the mode number 
PD When the pull-down is enabled for some pins, the PU must be set to 0. 
PU When the pull-up is enabled for some pins, the PD must be set to 0. 
PUPD Pull up/down settings for some pins with adjustable internal pull -up and pull-
down resistances 
R0/R1 Enable pull-up and pull-down resistors (available for some pins) 
RSEL Adjust pull-up and pull-down resistances for some pins (available for some 
pins) 
SMT Waveform filtering function 
 
1.2 Architecture/Process Overview 
 GPIO Introduction 
GPIO means General-Purpose Input/Output. In embedded systems, GPIO is an interface for digital signal interaction with 
external devices. It can read or control the status of external devices by setting it to input or output mode. 
MediaTek SoC provides PIN Controller hardware unit to implement: 
 
• Pin function configuration. For example, whether the I/O pin is a normal GPIO or some special function pin (such as 
the CMD signal on the EMMC). 
• Pin characteristic configuration. For example, the setting of pull-up/down resistance, the setting of drive-strength. 
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
MT8676 Hypervisor GPIO 
User Manual 
Confidential B 
Provide GPIO Controller hardware unit to: 
• Configure the direction of GPIO. 
– If it is output, you can configure it as high level or low level. 
– If it is input, you can get the level status on the GPIO pin. 
 
 Pinctrl Subsystem and GPIO Subsystem 
 
Figure 1-1. Pinctrl subsystem and GPIO subsystem 
 
1.3 Configuration/Customization Guideline 
 Pinctrl Usage 
The usage process of Pinctrl is as follows: 
 
1. Configure the pin under the dts pio node, which needs to pay attention to the following points: 
(1) The configured state name (mmc0_pins_default in the following example). The state name is the index keyword of 
the setting in dts, so be careful to identify it. 
(2) Group the pins under the state (pin_cmd_dat {…} in the following example). Each group of pins must have the 
same pinconf setting. If there are different settings, multiple groups of settings can be written in one state. 
(3) Configure pinmux (pinmux = <…> in the following example). Pinmux will describe the pin to be set and determine 
its function. The referenced definition comes from the file include/dt-bindings/pinctrl/mt6897-pinfunc.h. 
(4) Configure pinconf (input-enable in the following example, etc.). After configuring pin config after pinmux, you can 
set the pull-up and pull-down states, input high/low, driving capability, input enable, etc. 
2. Configuration under each module node in dts. The following are the references to pinctrl under each module node in 
dts: 
/* dts Sample */ 
pinctrl-names = "default", "state_uhs"; 
pinctrl-0 = <&mmc0_pins_default>; 
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
MT8676 Hypervisor GPIO 
User Manual 
Confidential B 
pinctrl-1 = <&mmc0_pins_uhs>; 
 
3. Call in driver 
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
 
 GPIO Usage 
The usage process of GPIO is as follows: 
 
1. Configuration under the dts module node. 
/* dts Sample */ 
&your_device_node { 
/* xx 代表gpio number, e.g. xx = 155 */ 
test-gpios=<&pio xx GPIO_ACTIVE_HIGH>; 
}; 
 
2. Call in driver 
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
MT8676 Hypervisor GPIO 
User Manual 
Confidential B 
1.4 Frequently Asked Questions/Troubleshooting 
 How to Check and Modify the PIN Status in Kernel 
Use the mtk_gpio debug node to check and modify the PIN status. 
#: cat /proc/mtk_gpio/soc.pinctrl 
PIN: [MODE] [DIR] [DOUT] [DIN] [PULL_EN] [PULL_SEL] [IES] [SMT] [DRIVE] ( [R1] [R0] ) 
   0: 0 0 0 0 1 0 1 0 0 
   1: 0 0 0 0 1 0 1 0 0 
   2: 0 1 1 1 1 0 1 0 0 
   3: 6 0 0 0 1 0 1 0 0 
 
Description: 
 MODE: Aux.Function selection, range: 0~7 
 DIR: 0 for input mode; 1 for output mode (this is register value of MediaTek’s DIR bit)  
 DOUT/DIN: 0 for low; 1 for high 
 DRIVE: Driving current selection, range: 0/1/2/3/4/5/6/7 
 IES/SMT: 0 for disable; 1 for enable 
 PULLEN/R1/R0: 0 for disable; 1/2/3 for enable 
– For pin with 2 pull resistors, R1 and R0 are shown. 
– For pin with 1 pull resistor, R1 and R0 are not shown. 
 PULLSEL: 0 for selecting pull-down resistor; 1 for pull-up resistor 
 
 The Pin Level during Power-on Does Not Match the Default Reset Value 
1. First check whether the dws file has configured this pin to a non-reset default state. 
2. Then check whether there is any peripheral circuit impact. 
3. Check whether preloader/lk has actively called the GPIO interface to set it. 
 
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
MT8676 Hypervisor GPIO 
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
# SRC0235 MT8676_Hypervisor_GPU_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_GPU_User_Manual_V1.1.pdf

SHA-256：d85a6dc3de1ff28783808d490ab9789fc607250f9736c74ff8a22101cddcb4a0

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0235.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-11-08
MT8676 Hypervisor GPU User Manual 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-10-28 Xiaofen Huang Official release 
1.1 2024-11-08 Xiaofen Huang 
• Added L+A/L+L+A into Section 1.2.1 Hypervisor Graphics 
System Framework 
• Added API Support note into Table 1-1. Arm Mali-G615 
feature support 
 
  
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
MT8676 Hypervisor GPU 
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
 Why a GPU is Needed ··································································································································· 4 
 How to Use a GPU ········································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 5 
 Hypervisor Graphics System Framework ······································································································ 5 
 Arm Mali-G615 Architecture and Feature Support ······················································································· 5 
1.3 Frequently Asked Questions/Troubleshooting ········································································································· 7 
 GPU Rendering Analysis ································································································································ 7 
 GPU Performance Analysis ···························································································································· 8 
Exhibit 1 Terms and Conditions ········································································································································ 11 
 
 
List of Figures 
Figure 1-1. Hypervisor graphics system framework ··················································································································· 5 
Figure 1-2. Arm Immortalis-G615 architecture ·························································································································· 6 
 
List of Tables 
Table 1-1. Arm Mali-G615 feature support ································································································································ 7 
 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
1 GPU 
1.1 Overview 
This section mainly introduces the basic knowledge of the MT8676 Graphics Processing Unit (GPU). 
The MT8676 GPU uses the Arm Mali-G615. 
 
 What is a GPU 
A GPU, also known as a graphics processor, visual processor, or display chip, is a microprocessor specialized in performing 
image and graphics-related computations on personal computers, workstations, gaming consoles, and some mobile 
devices such as tablets and smartphones. 
 
 Why a GPU is Needed 
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
 
 How to Use a GPU 
There are two ways to use a GPU. One way is for the developed application to call the GPU device through a general 
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
MT8676 Hypervisor GPU 
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
 Hypervisor Graphics System Framework 
Please refer to Figure 1-1 for the Hypervisor graphics system framework based on L(w/ GPU)+A or L(w/ GPU)+L(w/o 
GPU)+A: 
 
 
Figure 1-1. Hypervisor graphics system framework 
 
 Arm Mali-G615 Architecture and Feature Support 
Please refer to Figure 1-2 for the Arm Mali-G615 architecture. 
Dependency 
Virtio queue 
Yocto shading 
Yocto display 
Android shading 
Android display 
 
ASG ring buffer 
operation 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
 
Figure 1-2. Arm Immortalis-G615 architecture 
 
Please refer to Table 1-1 for the Arm Mali-G615 feature support. 
 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
Table 1-1. Arm Mali-G615 feature support 
Features Value Description Note 
Anti-Aliasing 
• 4x MSAA 
• 8x MSAA 
• 16x MSAA 
4x Multi-Sampling Anti-Aliasing 
(MSAA) with minimal 
performance drop. 
– 
API Support 
• OpenGL® ES 1.1, 2.0, 3.1, 3.2 
• Vulkan 1.1,1.2,1.3 
• OpenCL™ 1.1, 1.2, 2.0 Full 
Profile 
Full support for next-generation 
and legacy 2D/3D graphics 
applications. 
For L+A or L+L+A, 
only OpenGL® ES 
1.1, 2.0, 3.1 
supported on 
Android Guest. 
Bus Interface AMBA®4 ACE, ACE-LITE and AXI 
Compatible with a wide range of 
bus interconnect and peripheral 
IP . 
– 
L2 Cache Configurable 512KB – 2M 2 or 4 slices of 256K or 512K each – 
Scalability 1 to 6 cores 
Configurable from 1 to 6 cores 
delivering a specific capability for 
a Mali GPU 
– 
Adaptive Scalable 
Texture Compression 
(ASTC) 
Low Dynamic Range (LDR) and High 
Dynamic Range (HDR). 
Supports both 2D and 3D images. 
ASTC offers several advantages 
over existing texture 
compression schemes by 
improving image quality, 
reducing memory bandwidth and 
thus energy use. 
– 
Arm Frame Buffer 
Compression (AFBC) 
• Version 1.3.2 
• 4x4 pixel block size 
AFBC is a lossless image 
compression format that 
provides random access to pixel 
data to a 4x4 pixel block 
granularity. It is employed to 
reduce memory bandwidth both 
internally within the GPU and 
externally throughout the SoC. 
– 
 
1.3 Frequently Asked Questions/Troubleshooting 
 GPU Rendering Analysis  
1.3.1.1 Android Issue Analysis 
When screen rendering anomalies occur, the issue can generally be analyzed from three aspects: SF/HWC/Display, GPU, 
and APK. To determine if it is an SF/HWC/Display issue, first check the log for any display-related errors and proceed with 
further analysis based on the log. Additionally, the platform has two compositing methods, which can be done through 
OVL or GPU. You can disable hardware OVL and force the use of GPU for compositing to check for anomalies. Finally, you 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
can use the screenrecord command to record the screen and check if the recording also shows rendering anomalies. If it is 
determined to be an SF/HWC/Display issue, you can contact the relevant owner for further analysis. 
 
For GPU issues, search the log for errors related to keywords such as Mali/EGL/GLES/HWUI and proceed with further 
analysis based on the errors. You can also use some debugging tools. These tools can help analyze the problem. 
Additionally, you can conduct comparative experiments related to the GPU. 
 
For APK issues, you need to analyze together with the APK team to determine if there are problems with using GL 
interfaces during rendering or if incorrect textures are being passed for rendering. 
 
1.3.1.2 Yocto Issue Analysis 
When screen rendering anomalies occur, the issue can generally be analyzed from three aspects: Weston/Display, GPU, 
and Application. To determine if it is a Weston/Display issue, first check the log for any display-related errors and proceed 
with further analysis based on the log. Additionally, the platform has two compositing methods, which can be done 
through OVL or GPU. You can disable hardware OVL and force the use of GPU for compositing to check for anomalies. If it is 
determined to be a Display issue, you can contact the relevant owner for further analysis. 
 
For GPU issues, search the log for errors related to keywords such as Mali/EGL/GLES and proceed with further analysis 
based on the errors. You can also use some debugging tools, such as Mali Graphics Debugger. These tools can help analyze 
the problem. Additionally, you can conduct comparative experiments related to the GPU. 
 
For Application issues, you need to analyze together with the application team to determine if there are problems with 
using GL interfaces during rendering or if incorrect textures are being passed for rendering. 
 
1.3.1.3 GPU-Related Comparative Experiments 
Common comparative experiments are as follows: 
(1) Whether the issue is related to the Hypervisor system version. 
(2) Whether the issue can be reproduced on the previous generation GPU framework (Midgard/Bifrost) platform. 
(3) Whether the issue is related to the GPU driver version. 
(4) Whether the issue can be reproduced with AFBC turned off. 
(5) Whether the issue can be reproduced by forcing glFinish. 
(6) Whether the issue can be reproduced with partial update turned off. 
(7) Whether the issue is related to ASTC or MSAA. 
(8) RenderEngine backend switching experiment. 
(9) Other aspects, etc. 
 
 GPU Performance Analysis 
For analyzing GPU performance issues, there are generally three aspects to consider: GPU issues, APK issues, and issues 
related to other modules or the system. For GPU issues, you can check the Hypervisor log and kernel log for error logs with 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
keywords such as Mali/EGL/GLES/HWUI and proceed with further analysis based on the logs. Tools like systrace or perfetto 
can be used to capture and analyze the problem scenario, and Arm Streamline can be used to check hardware execution to 
identify which specific part is affecting GPU performance. Targeted comparative experiments can also be conducted to 
break down the parts affecting performance. 
 
For the APK part, systrace or perfetto can also be used to analyze whether the issue is caused by the APK. Issues related to 
other modules or the system can be analyzed through logs and flame graphs. 
1.3.2.1 Common GPU Performance Comparison Experiments 
Common comparative experiments for substandard GPU performance are as follows: 
(1) Whether the fixed performance mode passes 
(2) Presence of unlimited frequency factors (e.g., thermal) 
(3) Whether it is related to the power policy strategy 
(4) Whether it is related to driver overhead 
(5) Whether it is related to memory bandwidth/GPU QoS 
(6) Whether it is related to the GPU driver version 
(7) Arm Mali Offline Compiler 
(8) Other aspects, etc 
 
1.3.2.2 Performance Optimization Suggestions 
The following are several suggestions for GPU performance optimization: 
 
(1)  Identify Performance Bottlenecks 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
Arm GPU Best Practices Developer Guide 
Link: https://developer.arm.com/documentation/101897/0301?lang=en 
  
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
MT8676 Hypervisor GPU 
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
# SRC0236 MT8676_Hypervisor_I2C_User_Manual_V1.2.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_I2C_User_Manual_V1.2.pdf

SHA-256：17d10bf0927d089d53543739067f9ab0c96ae856bb81a71bd28ce0dcda524f62

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0236.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.2 
Release date:  2025-03-17
MT8676 Hypervisor I2C User Manual 
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
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-15 Housong Zhang Official release 
1.1 2024-12-27 RyanW Wang  Added Section 1.3.3 Interrupt Configuration Instruction and 
1.3.4 Virtual I2C Configuration 
1.2 2025-03-17 Shunchang Wang Added Section 1.3.5 Node Configuration and Section 1.3.6 
Configuration for Special Application Requirements  
 
  
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
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 I2C ············································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 Abbreviations ················································································································································ 4 
1.2 Architecture/Process Overview ································································································································ 4 
 I2C Introduction ············································································································································ 5 
 MT8676 I2C Features ···································································································································· 5 
 I2C Transmission Format ······························································································································· 5 
1.3 Configuration/Customization Guideline ··················································································································· 6 
 DTS Configuration ········································································································································· 6 
 Frequency ····················································································································································· 6 
 Interrupt Configuration Instruction ·············································································································· 7 
 Virtual I2C Configuration ······························································································································· 7 
 Node Configuration ······································································································································· 8 
 Configuration for Special Application Requirements ···················································································· 8 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 9 
 I2C Issue Debugging Methods······················································································································· 9 
 GPIO Mode Check ········································································································································· 9 
 Waveform Measurement ······························································································································ 9 
 How to Print I2C Register Information ·········································································································· 9 
 MediaTek Support Seeking ························································································································· 10 
Exhibit 1 Terms and Conditions ········································································································································ 11 
 
 
List of Figures 
Figure 1-1. Pin connection between I2C master and I2C slave ·································································································· 4 
Figure 1-2. I2C transmission format ··········································································································································· 5 
 
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
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
1 I2C 
1.1 Overview 
 Brief Introduction 
This chapter introduces the hardware, software and functions of the MT8676 I2C controller.   
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
DMA Direct Memory Access 
FIFO First Input First Output 
FM Fast Mode 
FM+ Fast Mode Plus 
GPIO General Purpose Inputs-Outputs 
HS mode High Speed Mode 
I/O Input/Output 
I2C Inter-IC 
SCL Serial Clock Line 
SDA Serial Data Line 
SM Standard Mode 
 
1.2 Architecture/Process Overview 
 
Figure 1-1. Pin connection between I2C master and I2C slave 
 
I2C 
Master 
 
SCL 
SDA 
 
 
SCL 
SDA 
 
 
I2C 
Slave 
 
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
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
 I2C Introduction 
The I2C controller is a bi-directional, two-wire serial interface that utilizes Serial Clock Line (SCL) and Serial Data Line (SDA) 
signals. These signals are capable of being driven by either the master or the slave in I2C. This generic controller supports 
the master role and conforms to the I2C specification. 
 
 MT8676 I2C Features 
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
– Multi-transfer with repeated start condition  
 
 I2C Transmission Format 
Figure 1-2 illustrates the basic transfer format utilized by the SM/FM/FM+ of I2C.  
Initially, the master sends a start condition. Following this, the master sends the 7-bit static address of the I2C slave device 
with which it intends to communicate. Once the slave responds to the addressing, the master sends/receives the data. 
Upon completion of the data transfer, the master sends a stop condition and the bus returns to the free state. 
       
Slave Address AS DATA A P
Slave Address AS DATA nA P
Master Write
Master Read
 
Figure 1-2. I2C transmission format 
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
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
1.3 Configuration/Customization Guideline 
 DTS Configuration 
Path: src/kernel/linux/v-xx/arch/arm64/boot/dts/mediatek/xxxx.dts 
 
• Add I2C pin to set I2C pinmux 
&pio { 
 i2c2_pins: i2c2-default { 
  pins-bus { 
   pinmux = <PINMUX_GPIO188__FUNC_SCL2>, 
    <PINMUX_GPIO189__FUNC_SDA2>; 
   bias-pull-up = <MTK_PULL_SET_RSEL_111>; 
  }; 
 };  
}; 
 
• Add slave device node  
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
 
 Frequency 
I2C controller supports data rates of 100 Kbps, 400 Kbps, and 1 Mbps. 
Add clock-frequency = <xxxxx> to set I2C frequency. 
&i2c2 { 
 status = "okay"; 
 pinctrl-names = "default"; 
 pinctrl-0 = <&i2c2_pins>; 
 clock-frequency = <400000>; 
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
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
 Interrupt Configuration Instruction 
When the MT8676 Hypervisor I2C operates in interrupt passthrough mode, the interrupt is by default directed to the Yocto 
side. If the interrupt is configured to the Android side, access to this interrupt on the Yocto side becomes unavailable. If 
you wish to modify the I2C interrupt in this manner, please seek assistance from MediaTek. 
 
 Virtual I2C Configuration  
Path: src/kernel/linux/v-xx/arch/arm64/boot/dts/mediatek/xxxx.dts 
 
• Virtual I2C nodes 
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
 
• Add slave device on virtual I2C bus 
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
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
 Node Configuration 
The master node should be set to “disabled” by default. 
i2cX: i2c@xxxx { 
 compatible = "mediatek,mt6897-i2c"; 
 .... 
 status = "disabled"; 
  }; 
 
The status of the corresponding device node should be set to “okay” according to which project to use. 
&i2cX { 
 status = "okay"; 
}; 
 
 Configuration for Special Application Requirements 
If there is a power consumption requirement and you need to configure I2C to a low level during suspend, the following 
method is required: 
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
 
Note: This method is only for the configuration method using internal pull-up. External pull-up needs to achieve this function by 
controlling the power supply of the external pull-up. 
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
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
1.4 Frequently Asked Questions/Troubleshooting 
 I2C Issue Debugging Methods 
Most I2C problems can be debugged by trying the following methods: 
 
• Check the salve device initialization and power supply 
• Check whether the DTS configuration and GPIO mode attributes are correct 
• Check whether the I2C register information is correct (you can provide log to RD) 
 
 GPIO Mode Check 
To view the status of pins in the Kernel, enter the following commands: 
# cd /sys 
# find –name mt_gpio 
# cat mt_gpio // 
 
For example: 
# cat /sys/devices/platform/soc/1000b000.pinctrl/mt_gpio 
PIN: [MODE] [DIR] [DOUT] [DIN] [PULL_EN] [PULL_SEL] [IES] [SMT] [DRIVE] ( [R1] [R0] ) 
0: 0 0 0 0 1 0 1 0 0 
1: 0 0 0 0 1 0 1 0 0 
2: 0 1 1 1 1 0 1 0 0 
3: 6 0 0 0 1 0 1 0 0 
 
 Waveform Measurement 
Use an oscilloscope to measure if the I2C waveforms meet expectations. 
 
 How to Print I2C Register Information 
Add the following content in driver/i2c/busses/i2C-mt65xx.c 
static void i2c_dump_register(struct mtk_i2c *i2c) 
{ 
 dev_dbg(i2c->dev, "SLAVE_ADDR: 0x%x, INTR_MASK: 0x%x\n", 
  mtk_i2c_readw(i2c, OFFSET_SLAVE_ADDR), 
  mtk_i2c_readw(i2c, OFFSET_INTR_MASK)); 
 dev_dbg(i2c->dev, "INTR_STAT: 0x%x, CONTROL: 0x%x\n", 
  mtk_i2c_readw(i2c, OFFSET_INTR_STAT), 
  mtk_i2c_readw(i2c, OFFSET_CONTROL)); 
Modify dev_dbg as dev_err. 
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
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
 MediaTek Support Seeking 
If you are still unable to resolve your issue after the troubleshooting steps mentioned earlier, and when seeking help from 
MediaTek, please also provide the relevant logs containing I2C register information, waveform charts, DTS, and the output 
from cat mt_gpio as mentioned previously. 
 
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
MT8676 Hypervisor I2C 
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
# SRC0237 MT8676_Hypervisor_OP-TEE_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_OP-TEE_User_Manual_V1.0.pdf

SHA-256：7cf96d09b15aa3c3cd7d4ca93b7b06556afdbd00e6638b0037f2f5e9c7ad80f4

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0237.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
version：  1.0 
Release date： 2024-12-20
MT8676 Hypervisor OP-TEE 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-12-20 Fei Yan Official release 
 
 
  
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 4 
List of Tables ······································································································································································ 4 
1 Overview ··································································································································································· 5 
1.1 Trustzone Function Overview ··································································································································· 5 
1.2 OP-TEE Overview ······················································································································································ 7 
2 OP-TEE Framework and Functionality ························································································································ 9 
2.1 OP-TEE Core Components with Virtualization Enabled ···························································································· 9 
2.2 Enabling OP-TEE on MediaTek Platform ················································································································· 11 
 Yocto Branch ··············································································································································· 12 
 Android Branch ··········································································································································· 13 
2.3 Secure Storage Mechanism ···································································································································· 14 
 REE File System ··········································································································································· 14 
 RPMB File System ········································································································································ 15 
2.4 Introduction to CA and TA ······································································································································ 16 
3 Application Development Based on OP-TEE ············································································································· 18 
3.1 Writing CA and TA with GP API ······························································································································· 18 
3.2 Example Program ··················································································································································· 19 
 CA Files ························································································································································ 19 
 TA Files ························································································································································ 21 
3.3 Compilation and Execution ···································································································································· 22 
 Yocto Domain ·············································································································································· 23 
 Android Domain ·········································································································································· 26 
4 OP-TEE Testing and Debugging ································································································································· 28 
4.1 OP-TEE Self-Test Method ········································································································································ 28 
4.2 Introduction to OP-TEE Related Logs······················································································································ 29 
 User Space ·················································································································································· 29 
 Linux Kernel ················································································································································· 30 
 Secure World ··············································································································································· 30 
4.3 Common OP-TEE Exceptions and Analysis ············································································································· 31 
5 Appendix ································································································································································· 33 
5.1 Reference Documents ············································································································································ 33 
Exhibit 1 Terms and Conditions ········································································································································ 34 
 
 
 
 
 
 
 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
List of Figures 
Figure 1-1. Normal World and Secure World ····························································································································· 5 
Figure 1-2. Arm exception levels ················································································································································ 6 
Figure 1-3. Reserverd OP-TEE memory ······································································································································ 6 
Figure 1-4. OP-TEE architecture ················································································································································· 8 
Figure 2-1. Composition of OP-TEE without virtualization ······································································································· 10 
Figure 2-2. Composition of OP-TEE with virtualization ············································································································ 11 
Figure 2-3. Secure storage based on OP-TEE ···························································································································· 14 
Figure 4-1. OP-TEE log ······························································································································································ 31 
 
List of Tables 
Table 4-1. Xtest test items ························································································································································ 28 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
1 Overview 
This document introduces the features of OP-TEE, its structural design, and the composition of its various components. 
And the following topics are explained: 1. Writing CA and TA. 2. Performing self-testing. 3. Debugging. 
 
The structure of this document is as follows: 
Chapter 1 Presents an overview that introduces the basic concepts of TrustZone and OP-TEE. 
Chapter 2 Presents the framework and functions of OP-TEE. 
Chapter 3 Describes the development of applications based on OP-TEE. 
Chapter 4 Describes testing and debugging, including debugging methods for the OP-TEE OS and Trusted 
Application (TA). 
Chapter 5 Lists the reference documents. 
 
1.1 Trustzone Function Overview 
TrustZone is the name of the security architecture in the Arm A-profile architecture. TrustZone provides two execution 
environments and enforces hardware-based isolation between them across the entire system, as illustrated in Figure 1-1. 
 
Figure 1-1 shows schematic diagram of the Normal World and the Secure World. The Normal World runs a rich software 
stack, which typically includes a large number of applications, a complex operating system (such as Linux), and possibly a 
hypervisor. This software stack is large and complex. Although measures can be taken to enhance its security, it remains 
more susceptible to attacks due to its large attack surface. 
 
In contrast, the Secure World runs a smaller and simpler software stack known as the Trusted Execution Environment 
(TEE). Typically, the TEE includes several trusted services hosted by a lightweight Kernel. These trusted services provide 
functions such as key management. The attack surface of this software stack is significantly smaller, which greatly reduces 
its vulnerability to attacks. 
 
Figure 1-1. Normal World and Secure World 
 
Armv8 and v9 divide the CPU into four exception levels, namely EL0, EL1, EL2, and EL3. At the EL0, EL1, and EL2 levels, the 
processor can be in either a secure state or a non-secure state, which is controlled by the SCR_EL3.NS bit. You will typically 
see the following notation:  
NS-EL1: Non-secure state, Exception Level 1;  
S-EL1: Secure state, Exception Level 1. 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
EL3 is always in a secure state, regardless of the value of the SCR_EL3.NS bit. 
 
The arrangement of secure states and exception levels is shown in Figure 1-2. 
 
Figure 1-2. Arm exception levels 
 
To ensure the security of TrustZone, a series of hardware isolation technologies is provided by Arm, including interrupt 
isolation, on-chip RAM/ROM isolation, off-chip RAM/ROM isolation, peripheral hardware isolation, and external RAM and 
ROM isolation. The provided isolation technologies can be referenced in Arm technical documentation. 
 
A more powerful Memory Protection Unitis offered by MediaTek to ensure that only secure CPUs can access the memory 
areas where TrustZone resides. Non-secure CPUs and various peripherals are prevented from accessing these memory 
areas through multiple means. 
 
Figure 1-3. Reserverd OP-TEE memory 
 
Figure 1-3 is an example diagram of reserved TEE memory and SMPU protecting this reserved memory. This memory is 
only accessible by the Secure CPU, meaning that, as mentioned earlier, only the CPU in S-EL0, S-EL1, or EL3 can access it. 
Other scenarios, such as user space programs, Linux Kernel programs, and hypervisor programs, do not have the right to 
access this memory. 
 
 
          
             
      
             
   
   
   
      
       
      
       
          
                            
                
          
                        
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
1.2 OP-TEE Overview 
OP-TEE is an open-source Secure OS. Figure 1-4 is an architecture diagram provided by the official OP-TEE documentation. 
The OP-TEE core runs in S-EL1, and trusted applications run in S-EL0. Trusted applications communicate with the OP-TEE 
core through the TEE Internal API. The TEE Internal API is a standard API developed by the GlobalPlatform organization. 
GlobalPlatform is dedicated to developing standard APIs that support not only OP-TEE but also many different TEEs. 
Adopting the GP standard means that TEE applications designed for other TEEs supporting the GP interface can be easily 
ported to OP-TEE, and vice versa, TEE applications designed for OP-TEE can be easily ported to other TEEs supporting the 
GP interface. 
 
In the non-secure state, there is an OP-TEE driver in the kernel space. It is responsible for handling low-level 
communication with the OP-TEE core. In the non-secure user space (EL0), there is a user space library (libopenteec.so) that 
implements the GlobalPlatform API. The TEE Client API is the interface used by applications to access TAs (Trusted 
Applications). OP-TEE also includes a component called tee-supplicant. The tee-supplicant handles transactions that need 
to be returned to the REE (Rich Execution Environment) world for processing, such as loading UTAs (User Trusted 
Applications) from the file system, or when the TEE secure storage function needs to save encrypted data in Flash or 
RPMB. Since the TEE itself cannot read or write Flash or RPMB, it needs to switch back to the REE to complete the 
read/write operations through the tee-supplicant. 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
Figure 1-4. OP-TEE architecture 
 
 
 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
2 OP-TEE Framework and Functionality 
2.1 OP-TEE Core Components with Virtualization Enabled 
This chapter focuses on the composition of OP-TEE when virtualization is enabled. 
 
Figure 2-1 shows the components of OP-TEE when virtualization is not enabled. The components are as follows: 
 
• Tee-supplicant: The TEE daemon that handles tasks requiring a switch back to the REE, such as loading UTAs and 
secure storage read/write operations. 
• libopenteec.so: Provides the client-side GP API, used for communication between CA and TA. 
• OPTEE linux driver: Provides APIs such as shared memory, executes SMC, and communicates with the Secure World. 
• OPTEE OS: Provides all the functionalities at the OP-TEE kernel layer. 
• PTA (Pseudo Trusted Applications): Provides APIs that can be called by CA or UTA. Some system services are provided 
as PTAs. PTAs run at the OP-TEE kernel layer and are packaged together with OP-TEE OS. 
 
Applications based on OP-TEE: 
 
Applications run on OP-TEE as CA/TA. 
• CA (Client Agent): Runs in the REE (Non-Secure World). 
• TA (Trusted App): Runs in the TEE (Secure World). Operations and keys that need protection can be placed in the TA. 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
Figure 2-1. Composition of OP-TEE without virtualization 
 
When virtualization is not enabled, the initialization of OP-TEE takes place upon the jump from ATF to BL32. 
 
When OP-TEE virtualization is enabled, OP-TEE will create a corresponding OP-TEE VM for each Host VM within the TEE. As 
shown in Figure 2-2, the L+L+A architecture includes two Linux virtual machines and one Android virtual machine, namely: 
 
• SOS (Linux Virtual Machine) 
• UOS (Android Virtual Machine) 
• UOS (Linux virtual machine, also known as the T-Box domain) 
 
After enabling virtualization, when ATF jumps to BL32 for initialization, it will only initialize the OP-TEE nexus core layer. 
Before each virtual machine is created, the Hypervisor layer will send an SMC command (OPTEE_SMC_VM_CREATED) to 
OP-TEE to create the corresponding OP-TEE virtual machine and initialize the necessary data structures for the OP-TEE VM 
in the pre-allocated secure memory. 
 
REE 
Tee-supplicant 
OPTEE Linux Driver 
OPTEE OS 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
The TEE requests from the SOS (Linux virtual machine) will enter OP-TEE-VM1. When OP-TEE-VM1 returns to the REE 
through RPC or RET , it will also return to the SOS domain. 
Requests from the UOS (Android Virtual Machine) enter OP-TEE-VM2. Upon returning from the TEE, responses return to 
UOS (A). 
The same applies to the UOS (Linux Virtual Machine), also referred to as the T-Box domain. 
OP-TEE-VM1, VM2 and VM3 are completely isolated in physical memory and do not affect each other. 
 
 
Figure 2-2. Composition of OP-TEE with virtualization 
 
2.2 Enabling OP-TEE on MediaTek Platform 
Modifications must be made to both the Yocto and Android branches to enable or disable OP-TEE.  
The following sections describe the changes needed for the Yocto branch and the Android branch, respectively. 
 
 
HyperVisor 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
 Yocto Branch 
Check whether the following directories exist. If any of these directories are missing, this indicates an incomplete release, 
and you can contact MediaTek for assistance. 
• src/bsp/trustzone/optee/3.18.0/optee_client 
• prebuilt/bsp/trustzone/optee/3.18.0/optee_os 
• prebuilt/bsp/trustzone/optee/3.18.0/source 
• prebuilt/bsp/trustzone/optee/3.18.0/ta/pkcs11 
 
After confirming that all directories exist, here is the method for configuring OP-TEE: 
 
Yocto Branch Configuration 
There are two configurations related to OP-TEE in the Yocto branch, each serving a specific function: 
 
• TEE_SUPPORT: Indicates which TEE is supported. Setting it to “optee” enables OP-TEE. 
• TEE_TEST_SUPPORT: Indicates whether to include the OP-TEE test tool xtest during compilation. This configuration is 
only effective for OP-TEE. 
 
The configurations are defined in the Yocto conf file.  
The reference path for the public version is: meta/meta-mediatek-mt8676-
hyp/conf/machine/auto8676p1_64_hyp.conf  
Please modify the corresponding location based on your project. 
 
To enable OP-TEE, set the configurations as follows: 
TEE_SUPPORT = "optee" 
TEE_TEST_SUPPORT = "yes" 
 
To disable OP-TEE, set the configurations as follows: 
TEE_SUPPORT = "none" 
TEE_TEST_SUPPORT = "no" 
 
Kernel Configuration 
The required modifications for the kernel are as follows: 
a. Enable the following two configurations in the kernel: 
CONFIG_MTK_OPTEE_SUPPORT=m 
CONFIG_OPTEE_REE_CONSOLE=y 
 
In newer versions, setting TEE_SUPPORT to “optee” automatically enables these two kernel configurations. For older 
versions that do not adopt this mechanism, manually enable these configurations in the corresponding kernel 
configuration. 
 
b. Add the required kernel modules to the .ko table 
• tee.ko,/../kernel_device_modules-
6.1/drivers/tee/optee/tee/tee.ko,ramdisk,Y,Y,user/userdebug/eng 
• optee.ko,/../kernel_device_modules-
6.1/drivers/tee/optee/tee/optee.ko,ramdisk,Y,Y,user/userdebug/eng 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
c. Add the following description to the dts 
&firmware { 
 optee { 
  compatible = "linaro,optee-tz"; 
  method = "smc"; 
 }; 
}; 
 
 Android Branch 
Please check if the following directories exist; if any of these directories are missing, it indicates an incomplete release, and 
you should contact MediaTek for assistance: 
• vendor/mediatek/proprietary/trustzone/optee/3.18.0/optee_client 
• vendor/mediatek/proprietary/trustzone/optee/3.18.0/secure_spmlib 
 
Android Branch Configuration 
There are two configurations related to OP-TEE in the Android branch, each serving a specific function: 
 
• MTK_OPTEE_SUPPORT: Indicates whether OP-TEE is enabled at the vendor layer. If enabled, the OP-TEE binaries will 
be packaged into tee.img. 
• MGVI_MTK_OPTEE_SUPPORT: An HAL layer configuration. This configuration does not affect the enabling or disabling 
of OP-TEE, but Android domain features based on OP-TEE might use this configuration to determine their own 
enabling or disabling. Therefore, it is recommended to enable this as well. 
 
The configurations are defined in the following locations: 
The definition of MTK_OPTEE_SUPPORT occurs in ProjectConfig.mk. 
Example file path for the MediaTek public version: 
• device/mediateksample/auto8676p1_64_bsp_vm/ProjectConfig.mk 
 
MGVI_MTK_OPTEE_SUPPORT is defined in VendorConfig.mk 
Example file path for the MediaTek public version: 
• device/mediatek/vendor/mgvi_spm_64_armv82_tbox/VendorConfig.mk 
 
To enable OP-TEE, set the configurations as follows: 
MTK_OPTEE_SUPPORT = yes 
MGVI_MTK_OPTEE_SUPPORT = yes 
 
To disable OP-TEE, set the configurations to ‘no’ or simply remove the definitions: 
The required modifications for the kernel are identical to those for Yocto. Refer to the previous section for details. Use the 
same method to enable OP-TEE configurations in the Android domain kernel layer. 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
2.3 Secure Storage Mechanism 
Secure storage in OP-TEE is implemented according to the GlobalPlatform TEE core API definition. This specification 
requires storing general data and key materials. It ensures confidentiality and integrity of stored data, as well as atomicity 
of storage modification operations. Atomicity means that the entire operation either completes successfully or no write 
occurs.Currently, there are two secure storage implementations in OP-TEE: 
 
 REE File System 
Uses an external (non-secure) file system to store encrypted data. This method relies on the file system of the Normal 
World, but all sensitive operations (such as encryption and decryption) are performed within the Secure World. The 
implementation principle is illustrated in Figure 2-3.  
 
Figure 2-3. Secure storage based on OP-TEE 
 
This type of secure storage is supported by OP-TEE by default. 
 
Note:  
• Data saved using the REE FS form of secure storage will be stored in the file system of the corresponding VM. Users or programs 
cannot read the contents of the file from the REE side, but users or programs with read/write permissions may tamper with or 
delete this file. 
 
The default storage location in the Yocto domain is: /var/lib/tee or /data/vendor/tee 
To modify this path, follow the steps below: 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
In the Yocto branch, locate: 
meta/meta-mediatek/recipes-bsp/trustzone/optee-client_3.18.0.bb 
Modify the definition of CFG_TEE_FS_PARENT_PATH. 
 
The default storage location in the Android domain is: /data/vendor/tee 
 
In the Android branch, locate: 
vendor/mediatek/proprietary/trustzone/optee/3.18.0/optee_client/Android.bp 
Modify the definition of -DTEE_FS_PARENT_PATH. 
 
Note:  
• Please modify this directory according to your needs. When making changes, ensure that the tee-supplicant has permission to 
create the directory and that the partition where the directory is located will not be reset due to a reboot or factory reset. 
 
 RPMB File System 
For secure storage based on RPMB, data encryption and decryption methods resemble those utilized in the REE File System 
(FS) method. However, the storage medium changes from a regular file system to the RPMB area attached to UFS or 
Embedded MultiMediaCard (eMMC). Utilizing tamper-proof and replay-protection features of RPMB enhances security. 
The storage principle aligns with that depicted in Figure 2-3, except that the "Linux File System" in the lower left corner is 
replaced with the RPMB driver. 
 
To support RPMB-based secure storage in a virtualized project, the UFS hardware must support multiple RPMB regions 
(e.g., UFS 3.0 and above; eMMC does not support this). Therefore, this storage method is not supported by default, and 
you need to contact MediaTek to confirm whether this method is supported on your hardware. 
 
When writing TA programs, you need to specify parameters to implement data storage using either the REE file system or 
the RPMB file system. Two OP-TEE specific storage identifiers are defined: TEE_STORAGE_PRIVATE_REE and 
TEE_STORAGE_PRIVATE_RPMB.  
 
TEE_STORAGE_PRIVATE_REE indicates that data will be saved in the REE file system. 
TEE_STORAGE_PRIVATE_RPMB indicates that data will be saved in the RPMB file system. 
 
Note:  
• Regardless of whether the REE FS or RPMB storage method is used, the data stored by each VM is not shared; that is, data written 
by one domain can only be read by that same domain. 
 
Verify the functionality of secure storage on the platform by executing the xtest 6001 test item. 
* regression_6001 Test TEE_CreatePersistentObject 
 o regression_6001.1 Storage id: 00000001 
   regression_6001.1 OK 
 o regression_6001.2 Storage id: 80000000  -> REE FS secure storage  
   regression_6001.2 OK 
 o regression_6001.3 Storage id: 80000100  -> RPMB secure storage 
   regression_6001.3 OK 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
   regression_6001 OK 
 
If the regression_6001.3 test item is not executed during the execution of the xtest 6001 test, this indicates that the 
current device does not support RPMB. Possible reasons include unprovisioned RPMB keys or an inadequate software and 
hardware environment. For RPMB support, contact MediaTek for further investigation. 
 
Refer to Section 4.1 of this document for information on executing xtest. 
 
2.4 Introduction to CA and TA 
In OP-TEE, CA typically refers to “Client Application”. A CA represents an application operating in the Normal World (REE) 
that communicates with a Trusted Application (TA) functioning in the Trusted World (TEE). The TA is requested by the CA to 
perform secure operations through invocation of the TEE API. 
 
The basic interaction flow between CA and TA is as follows: 
1. CA Launch: The client application is launched in the Normal World. 
2. Initialize TEE Session: The CA initializes a session with the TA through the TEE API. 
3. Send Command: The CA sends a command request to the TA, asking it to perform specific secure operations. 
4. TA Processes Request: The TA processes the request in the Trusted World and returns the results. 
5. Receive Result: The CA receives the result returned by the TA and processes it as needed. 
6. Close Session: After the operation is complete, the CA closes the session with the TA. 
 
CAs can be written in either user space or kernel space based on specific needs. 
 
In OP-TEE, TA refers to “Trusted Application”. OP-TEE supports three types of Trusted Applications (TAs): User Mode Trusted 
Applications (UTA), Static Trusted Applications (PTA, also known as Pseudo TA), and Early User Mode Trusted Applications 
(Early UTA). These application types differ in terms of functionality, execution timing, and runtime environment. The 
following are their main differences: 
 
User Mode Trusted Application (UTA) 
• Runtime Environment: UTAs run in user mode, as opposed to kernel mode. This means they execute in an isolated 
environment, providing higher security. 
• Deployment: UTAs are typically deployed as separate applications and can be loaded and managed through secure 
storage. 
• Use Case: UTAs are suitable for handling highly sensitive data or performing security-critical tasks, such as encryption 
operations and key management. 
 
Static Trusted Application (PTA) 
• Runtime Environment: PTAs run in the TEE kernel mode. Compared to UTAs, they have higher privileges and more 
direct access to TEE core services. 
• Deployment: PTAs are usually statically integrated during the TEE OS build process and are not loaded as separate 
applications. 
• Use Case: PTAs are used to implement functions that require higher privileged access to TEE resources, such as 
managing and controlling other components or services within the TEE. 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
Early User Mode Trusted Application (UTA) 
• Runtime Environment: Early UTAs also run in user mode, but are loaded and executed at an early stage of system 
startup. 
• Deployment: Similar to regular UTAs, but they start earlier during the TEE initialization process to handle early-stage 
security tasks. 
• Use Case: Early UTAs are typically used to perform security checks or configurations during the system startup process, 
such as verifying the integrity of the boot configuration or securely configuring early hardware resources. 
 
Note:  
• Currently, OP-TEE based on the MediaTek platform only supports the development of UTAs. If you have development needs for 
PTAs or early UTAs, please contact MediaTek. 
 
UTAs are placed in the file system: 
• Yocto domain path: /lib/optee_armtz/ 
• Android domain path: /vendor/lib/optee_armtz/ 
 
If a TA is required in both the Yocto and Android domains, a copy must be placed in the file systems of both domains. 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
3 Application Development Based on OP-TEE 
Both the Yocto and Android domains support OP-TEE, and the APIs required for the Yocto and Android domains are the 
same. This means that the CA and TA code for the Yocto and Android domains can be exactly the same. If your program 
needs to run in the Yocto domain, you need to package the CA and TA executable files into the Yocto domain’s file system. 
Similarly, if it needs to run in the Android domain, you need to package the executable files into the Android domain’s file 
system.  
 
3.1 Writing CA and TA with GP API 
OP-TEE supports the GP (GlobalPlatform) API, which means that your CA and TA programs can be easily ported to other 
TEE OSes that support the GP API. You can find information about the GP API on the internet. 
 
The GP API used on the CA side starts with TEEC. You can find the relevant definitions in the header file located at 
${PATH}/optee/3.18.0/optee_client/public/tee_client_api_extensions.h. 
 
• In the Yocto branch, the path is: src/bsp/trustzone 
• In the Android branch, the path is: vendor/mediatek/proprietary/trustzone 
 
The main APIs responsible for communication with the TEE on the CA side are as follows: 
 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
The APIs related to shared memory operations on the CA side are as follows: 
 
1. TEEC_Result TEEC_RegisterSharedMemory(TEEC_Context *context, 
TEEC_SharedMemory *sharedMem); 
 
2. TEEC_Result TEEC_AllocateSharedMemory(TEEC_Context *context, 
TEEC_SharedMemory *sharedMem); 
 
3. void TEEC_ReleaseSharedMemory(TEEC_SharedMemory *sharedMemory); 
 
The GP APIs within the TEE start with TEE_ and involve various operations within the TEE, such as encryption and 
decryption operations, secure file read and write operations, etc. For detailed information, please refer to the relevant GP 
documentation, which will not be elaborated here. 
 
To write a TA, you must implement the following five APIs: 
 
1. TEE_Result TA_CreateEntryPoint(void) 
 
2. void TA_DestroyEntryPoint(void) 
 
3. _Result TA_OpenSessionEntryPoint(uint32_t param_types, 
  TEE_Param __maybe_unused params[4], 
       void __maybe_unused **sess_ctx) 
 
4. void TA_CloseSessionEntryPoint(void __maybe_unused *sess_ctx) 
 
5. TEE_Result TA_InvokeCommandEntryPoint(void __maybe_unused *sess_ctx, 
uint32_t cmd_id, 
          uint32_t param_types, TEE_Param params[4]) 
 
Next, the process of writing a simple CA and TA using an example program will be explained. 
 
3.2 Example Program 
A sample code has been written by MediaTek to demonstrate how to create a simple demo program. This sample code is 
applicable in both the Yocto and Android domains. You can contact MediaTek to obtain the complete source files. 
The demo code provided by MeidaTek will be explained in this chapter. 
 
 CA Files 
The development of the CA part mainly involves using the TEE Client API introduced in Section 3.1, including how to 
initialize the context, open/close sessions, and use different parameter types to interact with the TA. You can refer to the 
demo’s call flow for CA development. 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
The following is the process for initializing and destroying the TEE context as well as opening and closing sessions. If there 
is no need for multi-instance TA concurrency, it is recommended to refer to the demo and use global variables to control 
the context and session count to a single instance. 
 
static TEEC_Session g_stTeecSession = {0}; 
static TEEC_Context g_stTeecContext = {0}; 
static bool g_bIsTeecInitialized = false; 
 
TEEC_Result initTzContext() 
{ 
const       TEEC_UUID stTeecUuid = {0xa60589fd, 0x0158, 0x40eb, {0xa7, 0x74, 0xa3, 
0x98, 0xb1, 0xd6, 0x98, 0x32}}; 
TEEC_Result u32TeecResult = TEEC_ERROR_GENERIC; 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
TEEC_CloseSession(&g_stTeecSession); 
TEEC_FinalizeContext(&g_stTeecContext); 
 
u32TeecResult = TEEC_SUCCESS; 
g_bIsTeecInitialized = false; 
 
exit: 
return u32TeecResult; 
} 
 
When the CA sends a command to the TA, it needs to use the TEEC_InvokeCommand function. This function supports 
passing different types of parameters from the CA to the TA. The following is an example of how to use this function with 
value-type parameters. 
 
TEEC_Result testValueParameter() 
{ 
TEEC_Result u32TeecResult = TEEC_ERROR_GENERIC; 
uint32_t u32RetOrig = 0; 
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
 
 TA Files 
The TA part implements various operations requested by the CA based on different command identifiers. The TA developer 
needs to define their own UUID, which is passed in when the CA calls TEEC_OpenSession. Additionally, this demo defines 
the TA as a single instance in user_ta_header_defines.h, meaning that the TA binary will only be loaded once in OP-TEE 
memory and will not be loaded multiple times. The TA_STACK_SIZE and TA_DATA_SIZE need to be adjusted according to 
the implementation of each TA. 
 
#define TA_UUID { 0xa60589fd, 0x0158, 0x40eb, {0xa7, 0x74, 0xa3, 0x98, 0xb1, 0xd6, 
0x98, 0x32} } 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
TEE_Result TA_CreateEntryPoint(void) 
 
#define TA_FLAGS (TA_FLAG_SINGLE_INSTANCE | \ 
TA_FLAG_MULTI_SESSION \ 
) 
 
#define TA_STACK_SIZE  (2 * 1024) 
#define TA_DATA_SIZE  (32 * 1024) 
 
Upon receipt of a command sent by the CA, the parameters are checked based on the command identifier, and the 
corresponding functionality is implemented. 
 
TEE_Result TA_InvokeCommandEntryPoint(void *pSessionContext, uint32_t nCommandID, 
uint32_t nParamTypes, TEE_Param pParams[4]) 
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
 
3.3 Compilation and Execution 
The compilation of the CA requires the library file libopenteec.so; the compilation of the TA requires the development 
package provided by Mediatek. 
 
The development package for the Android domain is located at 
vendor/mediatek/proprietary/trustzone/optee/3.18.0/secure_spmlib. 
The development package for the Yocto domain is located at prebuilt/bsp/trustzone/optee/3.18.0/optee_os. 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
 Yocto Domain 
For compiling CA/TA in the Yocto domain, it is recommended to use the native Yocto method. You can refer to the following 
example: 
inherit fog 
inherit deploy 
 
DESCRIPTION = "demo_tz_app" 
LICENSE = "MediaTekProprietary" 
LIC_FILES_CHKSUM = 
"file://${PROPRIETARY_LICENSE_PATH}/MediaTekProprietary;md5=c5d17c6905715d0948a3d60876
02d12d" 
 
SRC_URI = "fog://src/bsp/tzapp2/demo_tz_app;name=demo_tz_app" 
PACKAGES = "${PN}" 
INHIBIT_PACKAGE_DEBUG_SPLIT = "1" 
 
SRCREV_demo_tz_app = "${AUTOREV}" 
S = "${WORKDIR}/git" 
 
DEPENDS += "optee-client 
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
}" 
 
 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
In src/bsp/tzapp2/demo_tz_app, a makefile is provided for the bb file to call. 
.PHONY: all clean install 
 
all: 
$(MAKE) -C demoCA setup 
$(MAKE) -C demoCA build BUILD_FROM_YOCTO=${BUILD_FROM_YOCTO} 
$(MAKE) -C demoTA TA_DEV_KIT_DIR=${TA_DEV_KIT_DIR} 
LIBGCC_LOCATE_CFLAGS=${LIBGCC_LOCATE_CFLAGS} 
 
clean: 
$(MAKE) -C demoCA clean 
$(MAKE) -C demoTA clean 
 
install: 
install -d $(DESTDIR)/usr/bin 
install -m 755 demoCA/out/demoTzApp $(DESTDIR)/usr/bin 
install -d ${DESTDIR}${nonarch_base_libdir}/optee_armtz 
install -m 0444 demoTA/out/*.ta ${DESTDIR}${nonarch_base_libdir}/optee_armtz 
 
uninstall: 
rm -f $(DESTDIR)/usr/bin/demoTzApp 
rm -f ${DESTDIR}${nonarch_base_libdir}/optee_armtz/$(BINARY).ta 
 
The makefile for the CA is as follows: 
TOP_DIR  = ${CURDIR} 
OBJ_PATH = ./out 
TARGET := demoTzApp 
 
SRC += $(TOP_DIR)/src/main.c 
INC += -I./include 
LIBS += -lopenteec 
 
CFLAGS := $(INC)                                   \ 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
$(OBJS): %.o:%.c 
$(CC) $(CPPFLAGS) $(CFLAGS) -o $(OBJ_PATH)/$(notdir $@) -c $< 
 
$(OBJS_S): %.o:%.S 
$(CC) $(CPPFLAGS) $(CFLAGS) -o $(OBJ_PATH)/$(notdir $@) -c $< 
 
clean: 
 @rm -rf $(OBJ_PATH) 
 
The compilation of the TA requires both a makefile and a sub.mk file.  
The makefile is as follows: 
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
 
sub.mk is as follows: 
global-incdirs-y += include 
srcs-y += src/demo_ta_entry.c 
srcs-y += src/demo_ta_commands.c 
 
The compilation command reference is as follows: 
source meta/poky/oe-init-build-env && bitbake demo-tz-app -c cleansstate; bitbake demo-tz-
app 2>&1 | tee mtk_demo.log 
 
The command compiles both the CA and TA files. 
You can view the compiled artifacts at the following paths: 
• Yocto CA: 
build/tmp/work/aarch64-poky-linux/demo-tz-app/1.0/git/demoCA/out/demoTzApp 
 
• Yocto TA： 
build/tmp/work/aarch64-poky-linux/demo-tz-app/1.0/git/demoTA/out/a60589fd-0158-40eb-a774-
a398b1d69832.ta 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
Push the TA (a60589fd-0158-40eb-a774-a398b1d69832.ta) into the /lib/optee_armtz/ directory on the platform; Push 
the CA (demoTzApp) into any writable directory on the platform, change its permissions to executable, and then you can 
run the demo program. 
 
 Android Domain 
For the Android domain, it is recommended to use the built-in Android build system for compiling the CA. The Android.bp 
file can be written as follows: 
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
 
Using MT8676 platform as an example, the compilation command is: 
source build/envsetup.sh && export OUT_DIR=out_demo && lunch vext_auto8676p1_64_bsp_vm_tbox-
userdebug && mmm vendor/mediatek/proprietary/trustzone/demo_tz_app/demoCA | tee 
make_demoCA.log 
 
For the Android domain, TA compilation uses a script. Refer to the following example: 
export TA_DEV_KIT_DIR=$PWD/export-ta_arm64 
if [ -d ${TA_DEV_KIT_DIR} ]; then 
echo "TA_DEV_KIT_DIR = ${TA_DEV_KIT_DIR}" 
else 
tar xzf tz_optee_3.18.0_dev_kit.tar.gz 
echo -e "\033[1;32m #### uncompress: TA_DEV_KIT_DIR = ${TA_DEV_KIT_DIR}. ####\033[m" 
fi 
 
#### !!! Need to modify ANDROID_TOP !!! ### 
ANDROID_TOP=/xxx/alps-mp-xxx—20xx_xx_xx_xx_xx 
export PATH=${ANDROID_TOP}/prebuilts/clang/clang-tee/linux-x86/bin/:${PATH} 
export COMPILER=clang 
export O=out 
 
make clean 
make 
 
Place the Android OP-TEE TA development package provided by MediaTek, along with the TA compilation makefile and 
sub.mk from Section 3.3.1, in the same directory for compilation. 
 
Note:  
• Before using this script, you need to set the ANDROID_TOP value to the path of the MediaTek Android baseline. 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
You can view the compiled artifacts at the following path: 
• Android CA: 
out_demo/target/product/auto8676p1_64_bsp_vm_tbox/vendor/bin/demoTzApp 
 
• Android TA: 
vendor/mediatek/proprietary/trustzone/demo_tz_app/demoTA/out/a60589fd-0158-40eb-a774-
a398b1d69832.ta 
 
Push the TA (a60589fd-0158-40eb-a774-a398b1d69832.ta) into the /vendor/lib/optee_armtz/ directory on the 
platform; Push the CA (demoTzApp) into any writable directory on the platform, change its permissions to executable, and 
then you can run the demo program. 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
4 OP-TEE Testing and Debugging 
4.1 OP-TEE Self-Test Method 
The official self-test tool of OP-TEE is called xtest. 
 
In the Yocto domain, the xtest code will be released by MediaTek and can be compiled and packaged into the load. 
In the Android domain, due to release policy reasons, the xtest source code is not provided by MediaTek. Push the binary 
files to the platform for testing. 
You can review the source code to observe the test items. Table 4-1shows a brief summary of the content: 
 
Table 4-1. Xtest test items 
Xtest Item Test Purpose Description 
xtest_1 Basic functionality tests of OP-TEE, such as entering and exiting the TEE, TA panic tests, etc. 
xtest_2 Socket-related tests 
xtest_4 Encryption and decryption algorithm test 
xtest_5 Shared memory tests 
xtest_6 Secure storage-related tests 
xtest_8 Miscellaneous tests such as KDF, Mbed, etc. 
Pkcs11 Tests related to PKCS #11 components 
 
Within the Yocto domain 
xtest consists of the following files: 
/usr/bin/xtest -> The executable program for xtest 
/lib/optee_armtz/*.ta -> UTAs that xtest depends on   
Start executing xtest by entering xtest in the serial console or adb shell. 
 
In the Android domain, xtest consists of the following files: 
/vendor/bin/xtest -> The executable program for xtest 
/vendor/lib/optee_armtz/*.ta -> UTAs that xtest depends on   
 
Before executing xtest in the Android domain, you need to switch to administrator privileges using su, disable SELinux with 
setenforce 0, and then execute xtest. 
# su 
# setenforce 0 
# xtest 
 
Upon completion of xtest, the number of test items that passed and failed will be printed. 
 
If xtest cannot be executed at all, it indicates that the current OP-TEE environment is abnormal, possibly due to an 
incomplete OP-TEE setup. Please perform the following self-checks:  
 
 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
1. Check if optee.ko and tee.ko are correctly inserted: 
# lsmod | grep tee 
Under normal circumstances, the TEE and OP-TEE drivers should be correctly loaded. 
 
2. Check if the tee-supplicant process is running: Enter the folloiwng command: 
# ps -A | grep tee 
Verify the existence of the tee-supplicant process. 
Under normal circumstances, you should see the tee-supplicant process running in the background; for example: 
adb -e shellsh-3.2# ps -A | grep tee 
   2250 ?        00:00:00 tee-supplicant 
 
auto8676p1_64_bsp_vm_tbox:/ $ ps -A | grep tee 
nobody         451     1    2452248  13708 0                   0 S 
android.hardware.security.keymint@3.0-service.tee 
system         803     1    2191704  10548 0                   0 S 
android.hardware.gatekeeper-service.tee 
root          1125     1    2176420  10168 0                   0 S tee-supplicant 
 
4.2 Introduction to OP-TEE Related Logs 
As introduced earlier, the function call flow from CA to TA generally involves the following parts:  
CA -> libopenteec.so -> Linux kernel -> ATF -> OP-TEE OS -> TA  
How the logs are printed in each of these modules will be explained when introducing logs. 
The logic in libopenteec.so, the Linux Kernel, and ATF remains relatively simple and does not typically encounter issues. 
The most common problems generally occur in the CA, TA, and OP-TEE OS. 
 User Space 
User space includes the CA and libopenteec.so. 
 
CA Logs: The logs on the CA side are written and maintained by the application developer. For example, if it is a Yocto 
domain application, you can use printf to print logs. If it is an Android domain application, logs are output using Android-
specific logging methods such as ALOG. 
 
Note:  
• The last parameter err_origin of the TEEC_OpenSession and TEEC_InvokeCommand APIs can indicate the stage at which an 
error occurs. It is strongly recommended that application developers print this log. 
 
For example: 
res = TEEC_OpenSession(&ctx, &sess, &uuid, 
TEEC_LOGIN_PUBLIC, NULL, NULL, &err_origin); 
if (res != TEEC_SUCCESS) 
errx(1, "TEEC_Opensession failed with code 0x%x origin 0x%x", res, err_origin); 
 
res = TEEC_InvokeCommand(&sess, TA_HELLO_WORLD_CMD_INC_VALUE, &op,  &err_origin); 
if (res != TEEC_SUCCESS) 
errx(1, "TEEC_InvokeCommand failed with code 0x%x origin 0x%x", res, err_origin); 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
The err_origin values range from 1 to 4, with the following meanings: 
 
• TEEC_ORIGIN_API (0x00000001): An error occurring at the user space layer. 
• TEEC_ORIGIN_COMMS (0x00000002): An error occurring in Linux/ATF communication. 
• TEEC_ORIGIN_TEE (0x00000003): An error occurring at the OP-TEE Kernel layer. 
• TEEC_ORIGIN_TRUSTED_APP (0x00000004): Error occurring at the TA layer. 
 
libopenteec.so links with the CA code written by the developer. The log print method is the same as that of CA. 
 
 Linux Kernel 
Error logs in the OP-TEE Linux Kernel are generated by pr_err and displayed in dmesg. 
 
 Secure World 
The Secure World comprises both the OP-TEE OS and TA. 
 
OP-TEE OS: Defines four log levels: FMSG, DMSG, IMSG, and EMSG. 
The default log level for the OP-TEE OS is 1. This configuration allows only EMSG logs to be output. 
For security reasons, the OP-TEE log level cannot be dynamically adjusted. If you need to adjust the log level, you must 
modify the OP-TEE configuration and recompile OP-TEE. The modification path is: 
vendor/mediatek/proprietary/trustzone/optee/3.18.0/optee_os/mk/config.mk 
 
# Log levels for the TEE core. Defines which core messages are displayed 
# on the secure console. Disabling core log (level set to 0) also disables 
# logs from the TAs. 
# 0: none 
# 1: error 
# 2: error + info 
# 3: error + info + debug 
# 4: error + info + debug + flow 
CFG_TEE_CORE_LOG_LEVEL ?= 1 
 
Note:  
• MediaTek releases the OP-TEE image in binary form, with the log level set to 1 by default. If you need to adjust the log level of the 
TEE OS, please contact MediaTek. 
 
The OP-TEE OS layer has added a Guest ID to indicate which VM the current code is executing in; for example: 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
Figure 4-1. OP-TEE log 
 
The TA logs are designed similarly to the OP-TEE OS logs, with four log levels defined: FMSG, DMSG, IMSG, and EMSG. The 
default log level is 1, which only allows EMSG logs to be output. If you wish to adjust the log level of the TA, the TA 
developer can freely do so. The log level of the TA can be set by defining the value of CFG_TEE_TA_LOG_LEVEL in the TA’s 
makefile, with the default value being 1.  
 
Note:  
• Logs from S-EL0 (TA) and S-EL1 (OP-TEE) in the Secure World are sent back to the corresponding domain’s kernel layer and output at 
the pr_info level. You can capture the kernel logs, which will include OP-TEE logs from S-EL0/1, using tools like dmesg. For example: 
adb shell dmesg -w > log.txt 
 
4.3 Common OP-TEE Exceptions and Analysis 
The open-source community has documentation on how to analyze and handle OP-TEE abort dumps and call stacks. Please 
refer to: [OPTEE Debug: Abort Dumps] (https://optee.readthedocs.io/en/latest/debug/abort_dumps.html) 
 
A brief description is provided in this section based on the content of the link. 
 
Upon encountering an abort or panic, panic logs are printed by the TEE OS or TA. 
 
The log showing “TEE load address” and “call stack” indicates that an exception occurs in the OP-TEE OS. 
E/TC:2 1 TEE load address @ 0x6cc30000    
E/TC:2 1 Call stack: 
E/TC:2 1 0x6ccb5fe0 
The panic information of the OP-TEE OS will be analyzed by MediaTek. 
 
When the exception occurs in the TA written by the developer, the developer needs to analyze the error cause themselves. 
Here, an example from the open-source community documentation is used to illustrate. When the call stack shows “Status 
of TA”, it indicates that the exception occurs in the TA. 
 
E/TC:0 TA panicked with code 0x0 
E/TC:0 Status of TA 484d4143-2d53-4841-3120-4a6f636b6542 (0xe07ba50) (active) 
E/TC:0 arch: arm load address: 0x101000 ctx-idr: 1 
E/TC:0 stack: 0x100000 4096 
E/TC:1 5 0 xxxxx 
 
 Guest ID(VM ID) 
Core ID 
Thread ID 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
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
 
The first analysis method is to use the script provided by the open-source community for direct parsing, which is 
recommended as the first choice: 
$ cat dump.txt | ./optee_os/scripts/symbolize.py -d ./optee_examples/*/ta 
 
If the first method does not resolve the issue, you can try manual parsing. The parsing method is as follows: 
1. Find the corresponding {uuid}.dmp file for the TA. 
– When compiled in a Yocto environment, the dmp file is located under build/tmp/work/xxxx. 
– When compiled in an Android environment, the dmp file resides under out. 
 
2. Calculate the offset by subtracting the TA’s load address from the crash address. For example: 
Offset calculation: Offset = 0x001044A8 - 0x101000 = 34A8 
 
3. Use a text tool to open the {uuid}.dmp file. 
 
4. Find the position corresponding to 34A8 in the {uuid}.dmp file to determine the approximate location of the panic. 
 
 
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
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
5 Appendix 
5.1 Reference Documents 
1. OP-TEE Open Source Community Documentation:  
https://optee.readthedocs.io/en/latest/index.html 
2. Arm Developer Documentation on TrustZone: 
https://developer.arm.com/documentation/102418/0102?lang=en 
 
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
MT8676 Hypervisor OP-TEE 
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
# SRC0238 MT8676_Hypervisor_OTA_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_OTA_User_Manual_V1.0.pdf

SHA-256：521a9a0645921d9a6407e2f17f4d32c059cffdc2e88cb484958d808151cfbf8b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0238.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-12-27
MT8676 Hypervisor OTA User Manual 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-12-27 Ming Ji Official release 
 
  
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 4 
List of Tables ······································································································································································ 5 
1 Hypervisor (L+L+A) OTA Solution Description············································································································· 6 
2 Hypervisor OTA Abbreviation ····································································································································· 7 
3 Overall Centralized Upgrade of Hypervisor (L+L+A) ···································································································· 8 
3.1 Enable the Overall Centralized Upgrade Solution ···································································································· 8 
3.2 Program Overview ···················································································································································· 8 
 Basic Functionality ········································································································································ 8 
3.3 Architecture/Process Overview ································································································································ 9 
 Hypervisor (L+L+A) OTA Upgrade Architecture ····························································································· 9 
 Hypervisor (L+L+A) otapackage Compilation Architecture ········································································· 10 
3.4 How to Compile Hypervisor (L+L+A) OTA Package ································································································· 11 
 Compile hypervisor_target_files.zip ··········································································································· 11 
 Compile Hypervisor (L+L+A) Full Upgrade Package····················································································· 12 
 Compile Hypervisor (L+L+A) Incremental Upgrade Package ······································································· 12 
3.5 Analysis of Upgrade Package Structure ·················································································································· 13 
3.6 How to Perform Hypervisor (L+L+A) OTA Upgrade ································································································· 14 
 Full Package Upgrade (Normal Mode) ········································································································ 14 
 Incremental Upgrade (Normal Mode) ········································································································ 15 
3.7 How to Modify the Signature of the Upgrade Package ·························································································· 15 
3.8 How to Remove/Add OTA Upgrade Partitions ········································································································ 16 
 Source of OTA Upgrade Partition ················································································································ 16 
 Remove OTA Upgrade Partition ·················································································································· 16 
 Add OTA Upgrade Partition ························································································································· 18 
3.9 Selection of Image Loading for AB system ············································································································· 21 
 Boot Control Information Description ········································································································ 21 
 Image Loading Selection Process ················································································································ 22 
3.10 Manually Configure Boot Slot ································································································································ 22 
3.11 System Rollback ······················································································································································ 22 
 Basic Principles of System Rollback ············································································································· 23 
 System Rollback Detection Process ············································································································· 24 
 Changes in Boot Control Parameters for System Rollback ·········································································· 25 
 System Rollback Test Cases ························································································································· 26 
3.12 Power Outage Upgrade Protection ························································································································ 28 
 Upgrade Status Information ························································································································ 28 
 Resume Upgrade Inspection Process ·········································································································· 29 
4 Partial Centralized Upgrade of Hypervisor (L+L+A) ··································································································· 31 
4.1 Enable Partial Centralized Upgrade Scheme ·········································································································· 31 
4.2 Program Overview ·················································································································································· 31 
 Basic Functionality ······································································································································ 31 
4.3 Architecture/Process Overview ······························································································································ 32 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 Hypervisor (L+L+A) OTA Upgrade Architecture ··························································································· 32 
 Hypervisor (L+L+A) Upgrade Package Compilation Architecture ································································ 33 
4.4 How to Compile Hypervisor OTA Upgrade Package ······························································································· 35 
 Compile Hypervisor Linux OS (L+L) OTA Upgrade Package ········································································· 35 
 Compile the Hypervisor Android OS Upgrade Package ··············································································· 37 
4.5 Analysis of Upgrade Package Structure ·················································································································· 38 
4.6 How to Perform Hypervisor (L+L+A) OTA Upgrade ································································································· 38 
 Full Package Upgrade (Normal Mode) ········································································································ 38 
 Incremental Package Upgrade (Normal Mode) ··························································································· 39 
4.7 How to Modify the Signature of the Hypervisor Linux OS (L+L) Upgrade Package ················································ 40 
4.8 How to Remove/Add OTA Upgrade Partitions ········································································································ 41 
 Source of OTA Upgrade Partition ················································································································ 41 
 Remove OTA Upgrade Partition ·················································································································· 41 
 OTA Upgrade Partition ································································································································ 42 
4.9 Selection of Boot Slot ············································································································································· 45 
 Boot Control Information Description ········································································································ 45 
 Boot Slot Selection Mechanism ·················································································································· 47 
4.10 Android Merge ······················································································································································· 48 
4.11 System Rollback ······················································································································································ 49 
 Basic Principles of System Rollback ············································································································· 49 
 System Rollback Process ····························································································································· 50 
 System Test Cases ······································································································································· 51 
4.12 Power Outage Upgrade Protection ························································································································ 53 
 Upgrade Status Information ························································································································ 53 
 Resume Upgrade Inspection Process ·········································································································· 54 
Attachment 1 Additional Terms ······································································································································· 55 
 
List of Figures 
Figure 3-1. Hypervisor (L+L+A) OTA update architecture ··········································································································· 9 
Figure 3-2. Hypervisor (L+L+A) otapackage compilation architecture ····················································································· 10 
Figure 3-3. Hypervisor (L+L+A) otapackage structure ·············································································································· 13 
Figure 3-4. payload.bin composition structure ························································································································ 14 
Figure 3-5. OTA upgrade partition source ································································································································ 16 
Figure 3-6 Hypervisor (L+L+A) boot control parameters ·········································································································· 21 
Figure 3-7. Hypervisor (L+L+A) image loading process ············································································································ 22 
Figure 3-8. Yocto boot failure scenario after OTA upgrade ······································································································ 23 
Figure 3-9. Android boot failure scenario after OTA upgrade ·································································································· 23 
Figure 3-10. T-box boot failure scenario after OTA upgrade ···································································································· 24 
Figure 3-11. Hypervisor (L+L+A) rollback detection process ···································································································· 24 
Figure 3-12. Yocto & Android & T-box boot status ··················································································································· 25 
Figure 3-13. Yocto & Android & T-box boot status ··················································································································· 25 
Figure 3-14. Yocto & Android & T-box boot status ··················································································································· 26 
Figure 3-15. Yocto & Android & T-box boot status ··················································································································· 26 
Figure 3-16. Upgrade status information ································································································································· 29 
Figure 3-17. Hypervisor resume update flow ··························································································································· 30 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Figure 3-18. Hypervisor check resume update flow ················································································································· 30 
Figure 4-1. Hypervisor (L+L+A) OTA update architecture ········································································································· 32 
Figure 4-2. Hypervisor L+L (Yocto + T-box) compilation otapackage architecture ·································································· 33 
Figure 4-3. Hypervisor Android compilation upgrade package architecture ··········································································· 34 
Figure 4-4. OTA upgrade partition source ································································································································ 41 
Figure 4-5. Hypervisor (L+L+A) boot control parameters ········································································································· 46 
Figure 4-6. Hypervisor (L+L+A) boot slot selection mechanism ······························································································ 47 
Figure 4-7. Android merge mechanism ···································································································································· 48 
Figure 4-8. Yocto boot failure scenario after OTA upgrade ······································································································ 49 
Figure 4-9. Android boot failure scenario after OTA upgrade ·································································································· 49 
Figure 4-10. T-box boot failure scenario after OTA upgrade ···································································································· 50 
Figure 4-11. Hypervisor rollback flow ······································································································································ 51 
Figure 4-12. Upgrade status information ································································································································· 53 
 
List of Tables 
Table 2-1. Abbreviation ······························································································································································ 7 
Table 3-1. otapackage component description ························································································································ 13 
Table 3-2. payload.bin component description ························································································································ 14 
Table 3-3. Hypervisor (L+L+A) boot control parameter description ························································································· 21 
Table 3-4. Upgrade status information description ·················································································································· 29 
Table 4-1. Boot control parameter description ························································································································ 46 
Table 4-2. Upgrade status information description ·················································································································· 53 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
1 Hypervisor (L+L+A) OTA Solution Description 
Note: L+L+A refers to Yocto (Linux OS) + T-box (Linux OS) + Android (Android OS) 
 
For the OTA update of Hypervisor (L+L+A), MediaTek supports the following two update schemes: 
• Solution 1: Overall centralized upgrade, which means Yocto serves as the Host OS to unify the upgrade of Yocto + T-
box + Android. For detailed introduction, please refer to Chapter 3 Overall Centralized Upgrade of Hypervisor (L+L+A)  
• Solution 2: Partial centralized upgrade, which means Yocto serves as the Host OS to uniformly upgrade Yocto + T-box, 
while Android uses the Android Update Engine for separate upgrades. For detailed introduction, please refer to 
Chapter 4 Partial Centralized Upgrade of Hypervisor (L+L+A). 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
2 Hypervisor OTA Abbreviation 
Table 2-1. Abbreviation 
Abbreviations Explanation 
Bootctl Boot Control  
A/B slot identification structure, stored in the misc partition 
LK2 Little Kernel 2 
Microkernel 
OTA Over-The-Air 
OTA download upgrade, a remote update technology 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
3 Overall Centralized Upgrade of Hypervisor (L+L+A)  
This chapter primarily introduces the centralized upgrade scheme of Hypervisor (L+L+A) OTA Update, which includes: 1. 
Configuration settings to enable this scheme; 2. Overview of the scheme architecture; 3. Compilation of upgrade packages; 
4. System rollback procedures. This scheme is enabled by default in the public version. 
 
3.1 Enable the Overall Centralized Upgrade Solution 
If you need to enable the centralized upgrade solution, please set the following configurations: 
1. Add SUPPORT_BOOTCTRL_V3 := yes in <yocto_project_name>.mk and <tbox_project_name>.mk in LK2 
For example: 
src/bsp/lk2/project/auto8676p1_64_hyp.mk 
SUPPORT_BOOTCTRL_V3 := yes 
src/bsp/lk2/project/auto8676p1_64_uos_tbox.mk 
SUPPORT_BOOTCTRL_V3 := yes 
 
2. Add SUPPORT_BOOTCTRL = "3" in the < yocto_project_name >.conf and < tbox_project_name >.conf in meta. 
For example: 
meta/meta-mediatek-mt8676-hyp/conf/machine/auto8676p1_64_hyp.conf 
SUPPORT_BOOTCTRL = “3” 
meta/meta-mediatek-mt8676-hyp/conf/machine /auto8676p1_64_uos_tbox.conf 
SUPPORT_BOOTCTRL = “3” 
 
Note: Please do not support different types of OTA upgrade schemes simultaneously in a single project.mk or project.conf. 
 
3.2 Program Overview 
 Basic Functionality 
Hypervisor (L+L+A) overall centralized upgrade plan supports the following functions: 
• Support seamless updates in the device background. 
• Support system rollback to prevent the system from becoming inoperable after an upgrade failure. 
• Support integrity and accuracy verification of the upgrade package. 
• Support simultaneous upgrades of multiple OSs. 
• Support full package upgrades and incremental upgrades. 
• Support manual switching between A and B. 
• Support power outage relay upgrades. 
 
But it also has the following limitations: 
• Updating the partition layout is not supported, the partition layout must remain consistent between versions before 
and after the upgrade. Subsequent modifications to the partition layout cannot be made through OTA updates. 
• Mutual upgrades between AB partitions and non-AB partitions are not supported. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
• The partition image that needs to be upgraded must be in xxx.img format, for example: boot.img, and other file 
formats are not supported. 
• The partition type that requires upgrading must be a read-only (RO) partition. 
• Android Virtual AB is not supported. 
• OS upgrades are not supported independently. 
 
3.3 Architecture/Process Overview 
 Hypervisor (L+L+A) OTA Upgrade Architecture 
 
Figure 3-1. Hypervisor (L+L+A) OTA update architecture 
 
Figure 3-1 describes the overall centralized upgrade solution architecture of the Hypervisor (L+L+A). The following 
information can be obtained from the figure: 
1. The Hypervisor (L+L+A) OTA upgrade package supports obtaining it from the OTA Server or local storage space. 
MediaTek currently only supports OTA upgrades through local upgrade packages, downloading the upgrade package 
from the OTA Server using the network needs to be implemented by the OEM. 
2. Hypervisor OTA upgrade is completed entirely on Yocto OS (Host OS), and other Guest OSs (Android OS + T-box OS) do 
not participate in the upgrade operation. 
3. For example, completing the OTA upgrade through a local upgrade package, the general process of Hypervisor (L+L+A) 
OTA upgrade is as follows: 
1) Store the upgrade package in the local platform storage environment. 
2) Execute OTA update script to call update_engine sideload to trigger the upgrade. 
3) Use Package Security Verify to check the integrity and accuracy of the upgrade package. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
4) Use Partition Write to write the data in the upgrade package to the corresponding partition storage space 
through the UFS Driver. 
5) Use Partition Verify to perform accuracy verification on the data updated and written to the partition, ensuring 
the accuracy of the actual written data. 
6) Use Switch Next Boot Slot to set the next system boot slot, ensuring that the system boots from the updated slot 
next time. 
 
 Hypervisor (L+L+A) otapackage Compilation Architecture 
 
Figure 3-2. Hypervisor (L+L+A) otapackage compilation architecture 
 
Figure 3-2 describes the architecture of the Hypervisor (L+L+A) OTA overall centralized upgrade solution to compile the 
upgrade package. The following information can be obtained from the figure: 
1. Hypervisor (L+L+A) overall centralized upgrade only requires compiling one OTA upgrade package. 
2. The Hypervisor (L+L+A) compilation upgrade package must be performed in the Hypervisor Android compilation 
environment. 
3. The general process for compiling the hypervisor upgrade package is as follows: 
– Compile Hypervisor yocto_target_files.zip. 
– Compile Hypervisor uos_tbox_target_files.zip. 
– Compile Hypervisor Android target_files.zip. 
– Merge yocto_target_files.zip, uos_tbox_target_files.zip, and targetfiles.zip into the final 
hypervisor_target_files.zip. 
– Compile the full upgrade package and incremental upgrade package using hypervisor_target_files.zip in the 
Android build environment. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Note: For detailed instructions on compiling the Hypervisor OTA upgrade package, please refer to Section 3.4 How to Compile Hypervisor 
(L+L+A) OTA Package. 
 
3.4 How to Compile Hypervisor (L+L+A) OTA Package 
 Compile hypervisor_target_files.zip 
1. Build yocto_target_files.zip 
The target_files.zip of Yocto OS (Host OS) is compiled by Hypervisor_make_yocto_targetfiles.py, the script is located at: 
meta/meta-mediatek-mt8676-hyp/recipes-devtools/ota-tools/files 
 
During the Yocto OS compilation stage, the system will automatically execute this script for packaging, and the final 
yocto_target_files.zip is located at: 
build/tmp/deploy/images/<project_name>/yocto_target_files.zip 
 
2. Build uos_tbox_target_files.zip 
The target_files.zip of T-box OS (Guest OS) is generated by Hypervisor_make_uos_tbox_targetfiles.py, the script is located 
at: 
meta/meta-mediatek-mt8676-hyp/recipes-devtools/uos-tbox-ota-tools/files 
 
During the T-box OS compilation stage, the system will automatically execute this script for packaging, and the final 
uos_tbox_target_files.zip is located at: 
build/tmp/deploy/images/<project_name>/uos_tbox_target_files.zip 
 
3. Build Android target_files.zip 
The target_files.zip of Android is automatically compiled during the build Android OS phase, and the final target_files.zip is 
located at: 
out/target/product/<project name>/merged/ target_files.zip 
 
4. Build hypervisor_target_files.zip 
hypervisor_target_files.zip needs to use the Hypervisor_3OS_merge_targetfiles.py script to merge yocto_target_files.zip, 
uos_tbox_target_files.zip, and target_files.zip to produce it. Hypervisor_3OS_merge_targetfiles.py is located at: 
device/mediateksample/<project name>/Hypervisor_3OS_merge_targetfiles.py 
 
After obtaining yocto_target_files.zip, uos_tbox_target_files.zip, and target_files.zip, execute the following command in 
the Android compilation environment to obtain hypervisor_target_files.zip: 
python3 Hypervisor_3OS_merge_targetfiles.py <parameter1> <parameter2> <parameter3> 
Note: 
• Hypervisor_3OS_merge_targetfiles.py: A script to compile hypervisor_target_files.zip 
• <Parameter 1>: the path of yocto_target_files.zip 
• <Parameter 2>: The path of uos_tbox_target_files.zip 
• <Parameter 3>: the path of target_files.zip 
 
Output file: 
A file named hypervisor_target_files.zip will be generated in the current directory. This is the target_files.zip package of 
Hypervisor (L+L+A). 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
For example: 
python3 device/mediateksample/auto8676p1_64_bsp_vm/Hypervisor_3OS_merge_targetfiles.py 
3OS_target_files/yocto_target_files.zip 3OS_target_files/uos_tbox_target_files.zip 
3OS_target_files/target_files.zip 
 
 Compile Hypervisor (L+L+A) Full Upgrade Package 
After compiling hypervisor_target_files.zip as referenced in Section 3.4.1 Compile hypervisor_target_files.zip , compile the 
full upgrade package for Hypervisor (L+L+A) in the Android OS compilation environment. 
Compilation instructions: 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall hypervisor_target_files.zip 
otapackage_full.zip 
Note: 
• ota_from_target_files: Upgrade package compilation script 
• build/make/target/product/security/testkey: The key path for signing the upgrade package, MediaTek defaults to using the testkey 
provided by Google, your company can specify another key path using the -k parameter . To change the signing key of the upgrade 
package, please refer to Section 3.7 How to Modify the Signature of the Upgrade Package. 
• hypervisor_target_files.zip: Hypervisor (L+L+A) target files.zip 
• otapackage_full.zip: The final generated Hypervisor full upgrade package, the package name can be freely specified. 
• Ensure compilation of the upgrade package in the Hypervisor (L+L+A) Android OS environment. Execute “source” and “lunch” 
before compiling the full upgrade package, failure to do so will result in a complete compilation failure. 
 
 Compile Hypervisor (L+L+A) Incremental Upgrade Package 
Prerequisites: 
To compile the incremental upgrade package, prepare two copies of hypervisor_target_files.zip in advance: 1. The first 
copy is for the source version of hypervisor_target_files.zip, named source_hypervisor_target_files.zip. 2. The second copy 
is for the target version of hypervisor_target_files.zip, named target_hypervisor_target_files.zip. 
 
Note: Please ensure that the base version load burned on the platform and the base version hypervisor_target_files.zip are obtained 
from the same compilation; otherwise, it will lead to OTA incremental upgrade failure. 
 
Compilation instructions: 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall -i 
source_hypervisor_target_files.zip target_hypervisor_target_files.zip otapackage_delta.zip 
Note: 
• ota_from_target_files: Upgrade package compilation script 
• build/make/target/product/security/testkey: The key path for signing the upgrade package, MediaTek defaults to using the testkey 
provided by Google, your company can specify another key path using the -k parameter . To change the signing key of the upgrade 
package, please refer to Section 3.7 How to Modify the Signature of the Upgrade Package. 
• source_hypervisor_target_files.zip: Source version of hypervisor_target_files.zip 
• target_hypervisor_target_files.zip: Target version of hypervisor_target_files.zip 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
• otapackage_delta.zip: The final generated Hypervisor (L+L+A) incremental upgrade package, the package name can be specified at 
will. 
• Ensure that the upgrade package is compiled in the Hypervisor Android build environment. Execute “source” and “lunch” before 
compiling the full package; otherwise, incremental package compilation will fail. 
 
3.5 Analysis of Upgrade Package Structure 
Hypervisor (L+L+A) OTA upgrade package is a compressed zip file, and its main components are as follows: 
 
Figure 3-3. Hypervisor (L+L+A) otapackage structure 
 
The components of the Hypervisor (L+L+A) otapackage in Figure 3-3 are described in the following table: 
 
Table 3-1. otapackage component description 
Name Description 
metadata Store the metadata information of the upgrade package, including the upgrade version, 
upgrade type, etc. 
metadata.pb Store the metadata information of the upgrade package, including the upgrade version, 
upgrade type, etc. 
otacert Upgrade package signature verification information 
apex_info.pb Android apex module configuration information 
care_map.pb System fingerprint information 
payload.bin Upgrade image information 
payload_properties.txt The size and hash information of payload.bin and metadata 
 
As can be seen from Table 3-1, the system upgrade information is stored in payload.bin, and its composition structure is as 
follows: 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 
Figure 3-4. payload.bin composition structure 
 
As can be seen from Figure 3-4, the main components of payload.bin are shown in Table 3-2:  
 
Table 3-2. payload.bin component description 
Name Description 
Header 
Magic Number Magic string “CrAU” identifying that this is an update payload. 
Major Version Payload major version number. 
Manifest Size Manifest size in bytes. 
Manifest Signature Size Manifest signature blob size in bytes 
protobuf Manifest The list of operations to be performed. 
protobuf Manifest Signature The signatures of the first five fields. There could be multiple 
signatures if the key has changed. 
blobs [] Payload Data The list of binary blobs used by operations in the metadata. 
signature Payload Signature The signature of the entire payload, except for the metadata 
signature. There could be multiple signatures if the key has changed. 
 
3.6 How to Perform Hypervisor (L+L+A) OTA Upgrade 
 Full Package Upgrade (Normal Mode) 
Test Environment: 
1. The PC has a Python 3 environment 
2. Flash base load in the DUT 
3. Get OTA package 
 
Testing Steps: 
1. Device connection Yocto adb environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_delta.zip > update.txt 2>&1 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
– hypervisor_update.py: Update script 
– otapackage_delta.zip: OTA package, unlimited package name 
– > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
Expected Results: 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The first restart after the upgrade should successfully enter the HomeScreen 
3. Check whether setting-version has been updated 
Note: If the test upgrade fails, please provide the update log and UART log in CR. 
 
 Incremental Upgrade (Normal Mode) 
Test Environment: 
1. The PC has a Python 3 environment 
2. Flash base load in DUT must be consistent with the base version provided to the OTA owner 
3. Get the OTA package from the OTA owner 
 
Testing Steps 
1. Device connection Yocto ADB environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_delta.zip > update.txt 2>&1 
– hypervisor_update.py: Update script 
– otapackage_delta.zip: OTA package, unlimited package name 
– > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
Expected Results: 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The first restart after the upgrade should successfully enter the Home Screen 
3. Check whether the setting version has been updated 
Note: If the test upgrade fails, please provide the update log and UART log in CR. 
 
3.7 How to Modify the Signature of the Upgrade Package 
During the OTA upgrade process, two keys will be used: xxx.pk8 and xxx.x509.pem. The key in xxx.pk8 format is used to 
sign the upgrade package during the compilation of the upgrade package, while the key in xxx.x509.pem format is used to 
verify the upgrade package during the OTA upgrade process. 
 
If you need to use a customized key, please follow the steps below: 
1. Replace the specified path of the -k parameter in the compilation instructions of the upgrade package in Section 3.4.2 
Compile Hypervisor (L+L+A) Full Upgrade Package and 3.4.3 Compile Hypervisor (L+L+A) Incremental Upgrade Package 
with the actual paths of xxx.pk8 and xxx.x509.pem. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
2. Replace the actual xxx.x509.pem file in meta/meta-mediaTek/recipes-support/update-engine-sideload-u/files/ota/    
otacerts.zip. 
 
3.8 How to Remove/Add OTA Upgrade Partitions 
 Source of OTA Upgrade Partition 
 
Figure 3-5. OTA upgrade partition source 
 
The confirmation steps for the OTA upgrade partition are as follows: 
1. During the compilation stage, the information in the partition table is packaged and converted into 
MTXXX_Android_scatter.txt, for example: MT6897_Android_scatter.txt. 
2. Record the partitions in MT6897_Android_scatter.txtn where is_upgradable is true to ab_partitions.txt. 
3. Package ab_partitions.txt into the target_files.zip of each OS. 
4. When compiling the upgrade package, the partition images recorded in ab_partitions.txt are packaged into the 
upgrade package. 
Note: When checking the is_upgradable status of the partition, the is_upgradable of the _a partition will be prioritized. For example, 
when the is_upgradable of the xxxx_a partition is true and the is_upgradable of xxx_b is false, the system will still record that partition 
as an OTA upgrade partition. 
 
 Remove OTA Upgrade Partition 
Note: Reducing the OTA upgrade partition will only disable the OTA upgrade for specific AB partitions and will not change the disabled 
AB upgrade partition to a single partition. 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Hypervisor (L+L+A) includes three different OS projects, and its image composition includes: Yocto partition image + 
Android partition image + T-box partition image. Hypervisor (L+L+A) also includes two partition tables, one partition table 
is located in the Yocto codebase, the partition table contains all partition information of Yocto + Android + T-box, and this 
partition table is used during the compilation of Yocto and T-box; the other partition table is located in the Android 
codebase, the partition table only contains Android partition information, and this partition table is only used during the 
compilation of Android. 
• Yocto & T-box partition table: 
meta/meta-mediatek-mt8676-hyp/recipes-
bsp/ptgen/files/<project_name>/partition_table_emmc_hyp_ab.csv 
 
• Android partition table: 
device/mediateksample/<project_name>/partition_table_emmc_hyp_ab.csv 
 
The following are the methods for reducing OTA upgrade partitions for each OS: 
Yocto OS (Host OS) 
Change the OTA_Update status from Y to N in the Yocto partition table to disable the OTA upgrade partition. 
For example: 
• Before modification: 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
 
• After modification: 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
 
Android OS (Guest OS) 
Change the OTA_Update status from Y to N in the Yocto partition table for the OTA upgrade section. No modifications are 
required for the Android partition table. 
For example: 
• Before modification: 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,Y,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• After modification: 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,N,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
T-box OS (Guest OS) 
Change the OTA_Update status from Y to N in the Tbox partition table for the section that requires disabling OTA upgrade. 
For example: 
• Before modification: 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,Y,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
• After modification: 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,N,N,AUTO,Y 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
 Add OTA Upgrade Partition 
The newly added OTA upgrade partition must meet the following prerequisites: 
1. The partition must simultaneously contain <partition_name>_a & <partition_name>_b, for example: boot_a & 
boot_b. 
2. The partition must be a read-only partition. 
3. The partition image format and image name must be <partition_name>.img, for example: boot.img. 
 
3.8.3.1 Set the Existing AB Partition as the OTA Partition 
The steps for each OS to set the existing AB partitions in the partition table as OTA partitions are as follows: 
Yocto OS (Host OS) 
Change the OTA_Update status from N to Y in the Yocto partition table for the OTA upgrade section. 
For example: 
• Before modification: 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
 
• After modification: 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
 
Android OS (Guest OS) 
Change the OTA_Update status from N to Y in the Yocto partition table and Android partition table under the OTA upgrade 
section. 
For example: 
• Before modification: 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,N,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• After modification: 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,Y,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
Add the new Android OTA partition name to the ignored_partitions in Hypervisor_make_yocto_targetfiles.py. This addition 
allows skipping the partition during the compilation of yocto_target_files.zip, preventing errors related to non-existent 
partition images during the compilation phase. 
For example: 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor', 'tee', 'bl2-tbox', 'boot_uos_tbox'}   >> Add the 
newly added partitions to the list 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
T-box OS (Guest OS) 
Change the OTA_Update status from N to Y in the T-box partition table for the section that requires disabling OTA upgrade. 
For example: 
• Before modification: 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,N,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• After modification: 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,Y,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
Add the new T-box OTA partition name to the ignored_partitions in Hypervisor_make_yocto_targetfiles.py. This addition 
allows skipping the partition during the compilation of yocto_target_files.zip, preventing errors related to non-existent 
partition images during the compilation phase. 
For example: 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor', 'tee', 'bl2-tbox', 'boot_uos_tbox'}   >> Add the 
newly added partitions to the list 
 
Add the new T-box OTA partition name within the partitions of Hypervisor_make_uos_tbox_targetfiles.py. Ensure that the 
T-box compilation stage packages the partition image into uos_tbox_target_files.zip. 
For example: 
if __name__ == "__main__": 
    target_path = "sos_tbox_images" 
    partitions = ['bl2-tbox', 'boot_uos_tbox']   >> Add the newly added partition to the 
list 
 
3.8.3.2 Add a Non-existent AB Partition as an OTA Partition 
The steps to add the OTA partition for the AB partition that does not exist in the partition table of each OS are as follows: 
Yocto OS (Host OS) 
Add the corresponding AB partition in the Yocto partition table, and ensure that the partition image is 
<partition_name>.img, taking the addition of the customer partition as an example: 
• After modification (the partition size is set to 8MB): 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
After completing the partition addition, add logic to determine the AB partition during the boot loading phase of the 
customer partition to ensure that the system loads into the correct partition. 
 
Android OS (Guest OS) 
Add the corresponding AB partitions in the Yocto partition table and Android partition table, and ensure that the partition 
image is <partition_name>.img, taking the addition of the customer partition as an example: 
• After modification (the partition size is set to 8MB): 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
Add the new Android OTA partition name to the ignored_partitions in Hypervisor_make_yocto_targetfiles.py. This addition 
allows skipping the partition during the compilation of yocto_target_files.zip to prevent errors related to non-existent 
partition images during the compilation phase. 
For example: 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor',  'customer', 'tee', 'bl2-tbox', 
'boot_uos_tbox'}   >> Add the newly added partitions to the list 
 
T-box OS (Guest OS) 
Add the corresponding AB partition in the Yocto partition table, and ensure that the partition image is 
<partition_name>.img, taking the addition of the customer partition as an example: 
• After modification (the partition size is set to 8MB): 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
Add the new Android OTA partition name to the ignored_partitions in Hypervisor_make_yocto_targetfiles.py. This addition 
allows skipping the partition during the compilation of yocto_target_files.zip, preventing errors related to non-existent 
partition images during the compilation phase. 
For example: 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor',  'tee', 'bl2-tbox', 'boot_uos_tbox', 
'customer'}   >> Add the newly added partitions to the list 
 
Add the new T-box OTA partition name in the partitions of Hypervisor_make_uos_tbox_targetfiles.py. Ensure that the T-
box compilation stage packages the partition image into uos_tbox_target_files.zip. 
For example: 
if __name__ == "__main__": 
    target_path = "sos_tbox_images" 
    partitions = ['bl2-tbox', 'boot_uos_tbox', 'customer']   >>Add the newly added partition 
to the list 
 
Note: 
1. When adding a non-existent AB partition as an OTA partition, please ensure that the newly added partition is mounted 
as a read-only partition. 
2. When adding a non-existent AB partition as an OTA partition, please ensure that the system can load and start 
normally after the new partition is added, and then verify the OTA upgrade. 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
3.9 Selection of Image Loading for AB system 
 Boot Control Information Description 
The AB system contains two boot slots: slot_a and slot_b, each slot has its own independent boot control metadata. The 
system boot will select to load the partition image of slot_a or slot_b based on the boot control information stored in the 
misc partition, where the key information contained in the boot control is as follows: 
 
Figure 3-6 Hypervisor (L+L+A) boot control parameters 
 
The description of each boot control parameter in Figure 3-6 is shown in Table 3-3: 
Table 3-3. Hypervisor (L+L+A) boot control parameter description 
Name Description 
priority 
The boot priority of the slot, with a default initial value of 15, the system chooses to 
boot from the slot with a higher priority; if the priorities are the same, it boot from 
slot_a. 
tries_remaining The current remaining reboot count for the slot android is 7 by default; when the value 
is 0, it will trigger a system rollback. 
successful_boot Android boot success flag, 1: boot successful, 0: boot failed 
yocto_tries_remaining The remaining reboot count of the current slot yocto is 3 by default; when the value is 
0, it will trigger a system rollback. 
yocto_successful_boot Yocto boot success flag, 1: boot successful, 0: boot failed 
tbox_tries_remaining The remaining restart count of the current slot T-box is 3 by default, and when the value 
is 0, it will trigger a system rollback. 
tbox_successful_boot T-box boot success flag, 1: boot successful, 0: boot failed 
 
Note: Boot Control Source Code is located at: src/bsp/lk2/platform/mediatek/common/bootctrl/bootctrl_v3 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 Image Loading Selection Process 
 
Figure 3-7. Hypervisor (L+L+A) image loading process 
 
The image loading process started by the AB system is shown in Figure 3-7: 
① The system boot and enters the Boot ROM stage. 
② Boot Rom will read the values of specific registers on UFS/EMMC to decide whether to load the preloader_a or 
preloader_b partition image. 
③ The system boot and enters the preloader stage. 
④ The system reads the priority values of slot_a and slot_b in the Boot Control information. 
⑤ When the priority value of slot_a is greater than or equal to the priority value of slot_b, the system determines that 
the current boot slot is slot_a, and during the subsequent boot process, it will load the image in partition A; when the 
priority value of slot_a is less than the priority value of slot_b, the system determines that the current boot slot is 
slot_b, and during the subsequent boot process, it will load the image in partition B. 
Note: The AB loading selection of the preloader partition is determined by the values of specific registers on UFS/eMMC, not by the slot 
priority of boot control metadata. For detailed information, please consult the Boot ROM & preloader owner . 
 
3.10 Manually Configure Boot Slot 
The Hypervisor (L+L+A) supports manual configuration of the boot slot using commands on the Yocto platform. 
 
Prerequisites: 
The system has successfully performed an OTA upgrade at least once, ensuring that the image information is available in 
both partitions AB to avoid system boot failure after switching the boot slot. 
 
Switching command: 
Shell domain Set slot_a as the boot slot Set slot_b as the boot slot 
Yocto shell update_engine_sideload --switch_slot=0 update_engine_sideload --switch_slot=1 
 
3.11 System Rollback 
This section mainly introduces how to roll back to the old version before the upgrade to prevent the device from becoming 
bricked after the Hypervisor (L+L+A) OTA upgrade is completed and the system fails to boot from the new version for the 
first time. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 Basic Principles of System Rollback 
Since the Hypervisor (L+L+A) Project involves multiple OS, the overall rollback plan adopted by MediaTek follows the 
principles below: 
• Linux OS (Yocto + T-box) & Android OS overall rollback, that is, when any one OS fails to start from the new version for 
the first time, all OSs must roll back to the old system startup to ensure that all OSs' AB startup slots are consistent. 
• Only in the scenario where the first boot from the new system fails after a successful OTA upgrade will the rollback 
mechanism be triggered; regular boot failures will not trigger the rollback mechanism. 
 
Taking Yocto, T-box, and Android 3OS (L+L+A) OTA as an example, the system will have the following three rollback 
scenarios: 
Scenario 1: Yocto OS failed to boot from the new version 
 
 
Figure 3-8. Yocto boot failure scenario after OTA upgrade 
 
Figure 3-8 describes the version switching status of Yocto and Android after the Hypervisor (L+L+A) OTA upgrade, when 
Yocto fails to start from the new version and triggers a rollback. The scenario is described as follows: 
• Yocto, Android, and T-box all boot from version V1. 
• The system executes an OTA upgrade to version V2 and sets version V2 as the version for the next startup. 
• Yocto fails to start from version V2; at this time, Android and T-box have not yet started. 
• Trigger rollback. Yocto, Android, and T-box switch to version V1 for startup. 
 
Scenario 2: Android OS failed to boot from the new version 
 
 
Figure 3-9. Android boot failure scenario after OTA upgrade 
 
Figure 3-9 describes the version switching status of Yocto, Android, and T-box after the Hypervisor (L+L+A) is upgraded 
from V1 -> V2 OTA. When Yocto successfully boots from the new version V2 and Android fails to boot from the new version 
V2, triggering a rollback, the scenario is described as follows: 
• Yocto, Android, and T-box all start from version V1. 
• The system executes an OTA upgrade to version V2 and sets version V2 as the version for the next startup. 
• Yocto successfully boots from version V2, Android fails to boot from version V2, T-box boot status is unknown  
• Trigger rollback. Yocto, Android, and T-box switch to V1 version for startup. 
 
Scenario 3: T-box OS failed to start from the new version 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 
Figure 3-10. T-box boot failure scenario after OTA upgrade 
 
Figure 3-10 describes the version switching status of Yocto, Android, and T-box after the Hypervisor (L+L+A) is upgraded 
from V1 -> V2 OTA. When Yocto and Android successfully start from the new version V2, and T-box fails to start from the 
new version, triggering a rollback, the scenario is described as follows: 
• Yocto, Android, and T-box all start from version V1. 
• The system executes an OTA upgrade to version V2 and sets version V2 as the version for the next startup. 
• Yocto and Android successfully boot from version V2; T-box fails to boot from version V2. 
• Trigger rollback. Yocto, Android, and T-box switch to V1 version for startup. 
 
 System Rollback Detection Process 
The system rollback detection process of the Hypervisor (L+L+A) is set in the LK2 stage of each OS. The detailed process is 
shown in Figure 3-11: 
 
 
Figure 3-11. Hypervisor (L+L+A) rollback detection process 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 Changes in Boot Control Parameters for System Rollback 
As shown in Figure 3-11, the essence of the system rollback mechanism is to repeatedly judge and adjust the Boot Control 
information, and only by triggering repeated system restarts to reduce the tries_remaining value of a system to 0 can the 
overall system rollback be triggered. The startup of Hypervisor (L+L+A) 3OS can be divided into the following four 
scenarios: 
Scenario 1: Yocto & Android & T-box all boot successfully (reboot after OTA upgrade) 
 
Figure 3-12. Yocto & Android & T-box boot status 
 
The changes in the boot control parameter values at each stage are as follows: 
 
 
Scenario 2: Yocto & Android boot successfully, T-box fails to boot (reboot after OTA upgrade) 
 
Figure 3-13. Yocto & Android & T-box boot status 
 
The changes in the boot control parameter values at each stage are as follows: 
 
 
Scenario 3: Yocto & T-box boot successfully, Android fails to boot (reboot after OTA upgrade) 
slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 14 15 14 15
yocto_tries_remaining 3 3 1 3 1 1 1 1 1 1
yocto_successful_boot 1 0 1 0 1 1 1 1 1 1
tries_remaining 7 7 1 7 1 7 1 1 1 1
successful_boot 1 0 1 0 1 0 1 1 1 1
tbox_tries_remaining 3 3 1 3 1 3 1 3 1 1
tbox_successful_boot 1 0 1 0 1 0 1 0 1 1
Tbox reboot
successfully after
OTA upgrade
Android reboot
successfully after
OTA upgrade
yocto
android
tbox
Normal boot No reboot after OTA
upgrade
Yocto reboot
successfully after
OTA upgrade
slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 14 15 14 15 15 14
yocto_tries_remaining 3 3 1 3 1 1 1 1 1 1 1 0
yocto_successful_boot 1 0 1 0 1 1 1 1 1 1 1 0
tries_remaining 7 7 1 7 1 7 1 1 1 1 1 0
successful_boot 1 0 1 0 1 0 1 1 1 1 1 0
tbox_tries_remaining 3 3 1 3 1 3 1 3 1 0 1 0
tbox_successful_boot 1 0 1 0 1 0 1 0 1 0 1 0
yocto
Tbox reboot fail after
OTA upgrade
Android reboot
successfully after
OTA upgrade
android
tbox
Triggering system
rollback
Yocto reboot
successfully after
OTA upgrade
Normal boot No reboot after OTA
upgrade
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 
Figure 3-14. Yocto & Android & T-box boot status 
 
The changes in the boot control parameter values at each stage are as follows: 
 
 
Scenario 4: Yocto boot failed, Android & T-box have not boot yet (reboot after OTA upgrade) 
 
Figure 3-15. Yocto & Android & T-box boot status 
 
The changes in the boot control parameter values at each stage are as follows: 
 
 
 System Rollback Test Cases 
3.11.4.1 Yocto OS Boot Failed 
Test Environment: 
1. The PC has a Python 3 environment 
2. Flash base load in the DUT 
3. Get the OTA package from the OTA owner 
 
Testing Steps: 
slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 14 15 14 15 15 14
yocto_tries_remaining 3 3 1 3 1 1 1 1 1 1 1 0
yocto_successful_boot 1 0 1 0 1 1 1 1 1 1 1 0
tries_remaining 7 7 1 7 1 7 1 7 1 0 1 0
successful_boot 1 0 1 0 1 0 1 0 1 0 1 0
tbox_tries_remaining 3 3 1 3 1 3 1 1 1 1 1 0
tbox_successful_boot 1 0 1 0 1 0 1 1 1 1 1 0
yocto
android
tbox
Triggering system
rollbackNormal boot No reboot after OTA
upgrade
Yocto reboot
successfully after
OTA upgrade
Tbox reboot
successfully after
OTA upgrade
Android reboot fail
after OTA upgrade
slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 15 14
yocto_tries_remaining 3 3 1 3 1 0 1 0
yocto_successful_boot 1 0 1 0 1 0 1 0
tries_remaining 7 7 1 7 1 7 1 0
successful_boot 1 0 1 0 1 0 1 0
tbox_tries_remaining 3 3 1 3 1 3 1 0
tbox_successful_boot 1 0 1 0 1 0 1 0
android
tbox
yocto
Triggering system
rollbackNormal boot No reboot after OTA
upgrade
Yocto reboot fail
after OTA upgrade
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
1. Device connection Yocto ADB environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_full.zip > update.txt 2>&1 
3. Check whether the upgrade has been completed successfully, update.txt contains:  
[INFO:update_attempter_android.cc(600)] Update successfully applied, waiting to reboot. 
4. Execute in the Yocto ADB environment: 
– adb shell 
– blockdev --setrw /dev/disk/by-partlabel/yocto-boot_b 
– dd if=/dev/urandom of=/dev/disk/by-partlabel/yocto-boot_b bs=1M count=1 
– reboot 
Note: 
• hypervisor_update.py: Update script 
• otapackage_full.zip: OTA package, unlimited package name 
• > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
Expected Results: 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The system triggers the rollback mechanism and boots to the Home Screen 
3. Setting version should be the same as before the upgrade 
Note: If the test upgrade fails, please provide the update log and UART log in CR 
 
3.11.4.2 Android OS Boot Failed 
Test Environment: 
1. The PC has a Python 3 environment 
2. Flash base load in the DUT 
3. Get the OTA package from the OTA owner 
 
Testing Steps 
1. Device connection Yocto ADB environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_full.zip > update.txt 2>&1 
3. Check whether the upgrade has been completed successfully, update.txt contains:  
[INFO:update_attempter_android.cc(600)] Update successfully applied, waiting to reboot. 
4. Execute in the Yocto ADB environment: 
– adb shell 
– blockdev --setrw /dev/disk/by-partlabel/init_boot_b 
– dd if=/dev/urandom of=/dev/disk/by-partlabel/init_boot_b bs=1M count=1 
– reboot 
Note: 
• hypervisor_update.py: Update script 
• otapackage_full.zip: OTA package, unlimited package name 
• > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Expected Results: 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The system triggers the rollback mechanism and boots to the Home Screen 
3. Setting version should be the same as before the upgrade 
Note: If the test upgrade fails, please provide the update log and UART log in CR. 
 
3.11.4.3 T-box OS Boot Failed 
Test Environment: 
1. The PC has a Python 3 environment 
2. Flash base load in the DUT 
3. Get the OTA package from the OTA owner 
 
Testing Steps: 
1. Device connection Yocto ADB environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_full.zip > update.txt 2>&1 
3. Check whether the upgrade has been completed successfully, update.txt contains:  
[INFO:update_attempter_android.cc(600)] Update successfully applied, waiting to reboot. 
4. Execute in the Yocto ADB environment: 
– adb shell 
– blockdev --setrw /dev/disk/by-partlabel/boot_uos_tbox_b 
– dd if=/dev/urandom of=/dev/disk/by-partlabel/boot_uos_tbox_b bs=1M count=1 
– reboot 
Note: 
• hypervisor_update.py: Update script 
• otapackage_full.zip: OTA package, unlimited package name 
• > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
Expected Results: 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The system triggers the rollback mechanism and boots to the Home Screen 
3. Setting version should be the same as before the upgrade 
Note: If the test upgrade fails, please provide the update log and UART log in CR. 
 
3.12 Power Outage Upgrade Protection 
 Upgrade Status Information 
Since the device may be interrupted due to abnormal power failure during the OTA upgrade process, in order to ensure 
that the device can continue to complete the upgrade from the interruption point after power failure and restart during 
the OTA upgrade process, the system needs to save the upgrade status information in real time. The Hypervisor (L+L+A) 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
overall centralized upgrade solution saves the upgrade status information in the data/misc/update_engine/prefs 
directory of the yocto-userdata partition by default. The stored information is shown in Figure 3-16: 
 
 
Figure 3-16. Upgrade status information  
 
The description of each upgrade status information in the prefs directory is shown in Table 3-4: 
 
Table 3-4. Upgrade status information description 
Prefs name Prefs value Description 
kPrefsUpdateStateNextOperation update-state-next-operation Record the next operation that needs to be 
performed. 
kPrefsUpdateCheckResponseHash update-check-response-hash Record the hash value of the last upgrade 
package. 
kPrefsResumedUpdateFailures resumed-update-failures 
Record the number of times the upgrade is 
interrupted. By default, an upgrade can be 
interrupted a maximum of 10 times. If it exceeds 
10 times, the system will force a complete re-
upgrade. 
kPrefsUpdateStateNextDataOffset update-state-next-data-offset 
Record the offset address of the data 
downloaded from the upgrade package next 
time. 
kPrefsUpdateStateSHA256Context update-state-sha-256-context Record the hash value of the upgrade status 
information 
kPrefsManifestMetadataSize manifest-metadata-size Record the size of metadata data 
kPrefsManifestSignatureSize manifest-signature-size Record the size of the signature data 
 
 Resume Upgrade Inspection Process 
Before the OTA upgrade, the system will determine whether the current upgrade is a new update or a resume update. The 
information for this detection comes from the data saved in the prefs directory. The detection process is shown in Figure 
3-17: 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 
Figure 3-17. Hypervisor resume update flow 
 
The detailed process of checking whether the information stored in the prefs directory meets the resume upgrade 
conditions is shown in Figure 3-18: 
 
 
Figure 3-18. Hypervisor check resume update flow 
 
As can be seen from Figure 3-18, only when the prefs information meets all the conditions will the system recognize this 
upgrade as a resume update; if any of the conditions are not met, the system will restart the upgrade and clear the 
previously saved upgrade status information. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
4 Partial Centralized Upgrade of Hypervisor (L+L+A) 
This chapter primarily introduces the Hypervisor (L+L+A) OTA update centralized upgrade solution. It includes configuration 
settings for enabling this solution, an overview of the solution architecture, upgrade package compilation, and system 
rollback. This public version does not support the solution by default and is provided for customer reference only. 
 
4.1 Enable Partial Centralized Upgrade Scheme 
If you need to enable the centralized upgrade plan, please set the following configurations: 
1. Add SUPPORT_BOOTCTRL_V1 := yes in <yocto_project_name>.mk and <tbox_project_name>.mk of LK2 
For example: 
src/bsp/lk2/project/auto8676p1_64_hyp_sos.mk 
SUPPORT_BOOTCTRL_V1 := yes 
src/bsp/lk2/project/auto8676p1_64_uos_tbox.mk 
SUPPORT_BOOTCTRL_V1 := yes 
 
2. Add SUPPORT_BOOTCTRL = "1" in the < yocto_project_name >.conf and < tbox_project_name >.conf in meta. 
For example: 
meta/meta-mediatek-mt8676-hyp/conf/machine/auto8676p1_64_hyp_sos.conf 
SUPPORT_BOOTCTRL = “1” 
meta/meta-mediatek-mt8676-hyp/conf/machine /auto8676p1_64_uos_tbox.conf 
SUPPORT_BOOTCTRL = “1” 
 
Note: Please do not support different types of OTA upgrade schemes simultaneously in a single project.mk or project.conf. 
 
4.2 Program Overview 
 Basic Functionality 
Hypervisor (L+L+A) partial centralized upgrade plan supports the following functions: 
• Support seamless updates in the device background. 
• Support system rollback to prevent the system from becoming inoperable after an upgrade failure. 
• Support integrity and accuracy verification of the upgrade package. 
• Support Android & Linux independent upgrades, i.e. Yocto upgrades Yocto and T-box, Android upgrades Android 
• Support full package upgrades and incremental upgrades. 
• Support Android Virtual AB. 
• Support power outage relay upgrades. 
 
But it also has the following limitations: 
• Updating the partition layout is not supported; the partition layout must remain consistent between versions before 
and after the upgrade. Subsequent modifications to the partition layout cannot be made through OTA updates. 
• Mutual upgrades between AB partitions and non-AB partitions are not supported. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
• The partition image that needs to be upgraded must be in xxx.img format, for example: boot.img, and other file 
formats are not supported. 
• The partition type that requires upgrading must be a read-only (RO) partition. 
• Manual switching between A and B is not supported. 
• OS upgrades are not supported independently. 
 
4.3 Architecture/Process Overview 
 Hypervisor (L+L+A) OTA Upgrade Architecture 
 
Figure 4-1. Hypervisor (L+L+A) OTA update architecture 
 
Figure 4-1 describes the architecture of the centralized upgrade solution for the Hypervisor (L+L+A). The following 
information can be obtained from the figure: 
1. The Hypervisor (L+L+A) OTA upgrade package supports obtaining it from the OTA Server or local storage space. 
MediaTek currently only supports OTA upgrades through local upgrade packages; downloading the upgrade package 
from the OTA Server using the network needs to be implemented by the OEM. 
2. Hypervisor (L+L+A) OTA upgrade is divided into two parts: Linux and Android. The upgrade of the Linux OS is 
completed entirely on Yocto OS (Host OS), and T-box (Guest OS) does not participate in the upgrade operation; the 
upgrade of Android OS (Guest OS) is completed by Android OS. The purpose of independent upgrades for Linux and 
Android is to support Android Virtual AB (VAB) functionality. 
3. Since the upgrades of Linux OS and Android OS are independent of each other, taking local upgrades as an example, 
the general process of Hypervisor (L+L+A) OTA upgrades is as follows: 
Linux OS upgrade: 
1) Store the upgrade package in the local platform storage environment. 
2) Execute OTA update script to call update_engine sideload to trigger the upgrade. 
3) Use Package Security Verify to check the integrity and accuracy of the upgrade package. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
4) Use Partition Write to write the data in the upgrade package to the corresponding partition storage space 
through the UFS Driver. 
5) Use Partition Verify to perform accuracy verification on the data updated and written to the partition, ensuring 
the accuracy of the actual written data. 
6) Use Switch Next Boot Slot to set the next system boot slot, ensuring that the system boots from the updated slot 
next time. 
 
Android OS upgrade: 
1) Store the upgrade package in the local platform storage environment. 
2) Execute OTA update script to call android update_engine to trigger the upgrade. 
3) Use Package Security Verify to check the integrity and accuracy of the upgrade package. 
4) Use Partition Write to write the data in the upgrade package to the corresponding partition storage space 
through the UFS Driver. 
5) Use Partition Verify to perform accuracy verification on the data updated and written to the partition, ensuring 
the accuracy of the actual written data. 
6) Use Switch Next Boot Slot to set the next system boot slot, ensuring that the system boots from the updated slot 
next time. 
 
 Hypervisor (L+L+A) Upgrade Package Compilation Architecture 
The Hypervisor (L+L+A) upgrade requires compiling two upgrade packages: one for upgrading L+L (Yocto + T-box) and 
another for upgrading A (Android). The compilation of both upgrade packages must be completed in the Android 
environment. 
4.3.2.1 Compilation of the Hypervisor L+L (Yocto + T-box) otapackage 
 
Figure 4-2. Hypervisor L+L (Yocto + T-box) compilation otapackage architecture 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Figure 4-2 describes the architecture of the Hypervisor L+L (Yocto + T-box) OTA compilation upgrade package. The following 
information can be obtained from the figure: 
1. Each Linux OS generates a target_files.zip during the compilation stage, used to package the partition image files that 
need to be upgraded for each OS. 
2. In the Android OS compilation environment, a yocto_target_base.zip has been prepared in advance to ensure that the 
final hypervisor_yocto_target_files.zip conforms to the directory structure of the input target_files.zip of the Android 
native compilation script ota_form_target_files.py. 
3. The upgrade package for Hypervisor L+L (Yocto + T-box) must be performed in the compilation environment of 
Hypervisor Android, because it is necessary to use the relevant Android compilation tools. 
4. The general process of compiling the upgrade package for Hypervisor L+L (Yocto + T-box) is as follows: 
– Compile each Linux OS project to obtain the respective OS's target_files.zip 
For example: yocto_target_files.zip (Yocto OS), uos_tbox_target_files.zip (T-box OS) 
– Merge all Linux OS target_files.zip and yocto_target_base.zip into the final hypervisor_yocto_target_files.zip 
– Use hypervisor_yocto_target_files.zip to compile and generate the full upgrade package and incremental upgrade 
package of Linux OS in the Android compilation environment. 
Note: For detailed instructions on compiling the Hypervisor L+L (Yocto + T-box) OTA upgrade package, please refer to Section 4.4.1 
Compile Hypervisor Linux OS (L+L) OTA Upgrade Package. 
 
4.3.2.2 Hypervisor Android Upgrade Package Compilation 
 
Figure 4-3. Hypervisor Android compilation upgrade package architecture 
 
Figure 4-3 describes the architecture of the Hypervisor Android OTA compilation upgrade package. The following 
information can be obtained from the figure: 
1. Android OS generates a target_files.zip during the compilation stage, which is used to package the partition images 
that need to be upgraded for Android OS. 
2. The general process for compiling the Hypervisor Android upgrade package is as follows: 
– Compile the Android OS project to obtain the Android OS target_files.zip 
For example: target_file.zip (Android OS) 
– Use Android target_files.zip to compile and generate a full upgrade package and a incremental upgrade package 
for the Android OS in the Android compilation environment. 
Note: For detailed instructions on compiling the Hypervisor Android OTA upgrade package, please refer to Section 4.4.2 Compile the 
Hypervisor Android OS Upgrade Package. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
4.4 How to Compile Hypervisor OTA Upgrade Package 
 Compile Hypervisor Linux OS (L+L) OTA Upgrade Package 
4.4.1.1 Compile Linux OS target_files.zip 
1. Build Yocto OS target_files.zip 
The target_files.zip of Yocto OS (Host OS) is generated by Hypervisor_make_yocto_targetfiles.py, the script is located at: 
meta/meta-mediatek-mt8676-hyp/recipes-devtools/ota-tools/files 
 
During the compilation stage of Yocto OS, the system will automatically execute this script for packaging, and the final 
yocto_targetfile.zip is located at: 
build/tmp/deploy/images/<project_name>/yocto_target_files.zip 
 
2. Build T-box OS target_files.zip 
The target_files.zip of Tbox OS (Guest OS) is generated by Hypervisor_make_uos_tbox_targetfiles.py, the script is located 
at: 
meta/meta-mediatek-mt8676-hyp/recipes-devtools/uos-tbox-ota-tools/files 
 
During the compilation phase of T-box OS, the system will automatically execute this script for packaging, and the final 
uos_tbox_target_files.zip is located at: 
build/tmp/deploy/images/<project_name>/uos_tbox_target_files.zip 
 
3. Build hypervisor_yocto_target_files.zip 
After compiling to obtain Yocto OS target_files.zip and Tbox OS target_files.zip, please execute the following command in 
the Android compilation environment: 
python3 Hypervisor_yocto_merge_targetfiles.py <parameter1> <parameter2> <parameter3> 
 
Note: 
• Hypervisor_yocto_merge_targetfiles.py: Script to compile hypervisor_yocto_target_files.zip 
• <Parameter 1>: The path of Yocto OS target_files.zip 
• <Parameter 2>: The path of T-box OS target_files.zip 
• <Parameter 3>: the path of yocto_target_base.zip 
 
Output file: 
A file named hypervisor_yocto_target_files.zip will be generated in the current directory. This file represents the final 
target_files.zip package of the Linux OS. 
For example: 
python3 
device/mediateksample/auto8676p1_64_bsp_vm_tbox/Hypervisor_yocto_merge_targetfiles.py 
tbox_target_file/yocto_target_files.zip  
tbox_target_file/uos_tbox_target_files.zip 
device/mediateksample/auto8676p1_64_bsp_vm_tbox/yocto_target_base.zip              
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
4.4.1.2 Compile Linux OS OTA Upgrade Package 
After compiling hypervisor_yocto_target_files.zip in Section 4.4.1.1 Compile Linux OS target_files.zip, you can compile the 
upgrade package of Linux OS (L+L) in the compilation environment of Hypervisor Android OS. 
 
1. Build full otapackage 
Compilation instructions: 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall 
hypervisor_yocto_target_files.zip otapackage_yocto_full.zip 
Note: 
• ota_from_target_files: Upgrade package compilation script 
• build/make/target/product/security/testkey: The key path for signing the upgrade package, MediaTek defaults to using the testkey 
provided by Google, your company can specify another key path, use the -k parameter to specify. 
• hypervisor_yocto_target_files.zip:Hypervisor Linux OS (L+L) target_files.zip 
• otapackage_yocto_full.zip: The final generated Hypervisor Linux OS (L+L) full upgrade package, the package name can be specified 
arbitrarily. 
• Ensure compilation of the upgrade package in the Hypervisor Android build environment. Execute “source” and “lunch” before 
compiling the full package; otherwise, full package compilation will fail. 
 
2. Build incremental otapackage 
Prerequisites: 
To compile the incremental package, prepare two copies of hypervisor_yocto_target_files.zip in advance: The first copy is 
for the base version (source version) of hypervisor_yocto_target_files.zip, named 
source_hypervisor_yocto_target_files.zip; The second copy is for the target version of hypervisor_yocto_target_files.zip, 
named target_hypervisor_yocto_target_files.zip. 
Note: Please ensure that the base version load burned on the platform and the base version hypervisor_yocto_target_files.zip are 
obtained from the same compilation; otherwise, it will lead to OTA incremental upgrade failure. 
 
Compilation instructions: 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall -i 
source_hypervisor_yocto_target_files.zip target_hypervisor_yocto_target_files.zip 
otapackage_yocto_delta.zip 
Note: 
• ota_from_target_files: Upgrade package compilation script 
• build/make/target/product/security/testkey: The key path for signing the upgrade package, MediaTek defaults to using the testkey 
provided by Google. Your company can specify another key path by using the -k parameter . 
• source_hypervisor_yocto_target_files.zip:the source version of hypervisor_yocto_target_files.zip 
• target_hypervisor_yocto_target_files.zip:target version of hypervisor_yocto_target_files.zip 
• otapackage_yocto_delta.zip: The final generated Hypervisor Linux OS (L+L) incermental upgrade package, the package name can be 
specified at will. 
• Ensure that the upgrade package is compiled in the Hypervisor Android build environment. Execute “source” and “lunch” before 
compiling the full package; otherwise, incremental package compilation will fail. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 Compile the Hypervisor Android OS Upgrade Package 
4.4.2.1 Compile Android OS target_files.zip 
The target_files.zip of Android OS is automatically generated when compiling the Android project using split build, and it is 
located at: 
out/target/product/<project_name>/merged/target_files.zip 
 
4.4.2.2 Compile the Android OS Upgrade Package 
After compiling Android target_files.zip in Section 4.4.2.1 Compile Android OS target_files.zip, you can compile the Android 
OS upgrade package in the Hypervisor Android OS compilation environment.  
 
1. Build full otapackage 
Compilation instructions: 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 
target_files.zip otapackage_android_full.zip 
Note: 
• ota_from_target_files: Upgrade package compilation script 
• target_files.zip:Hypervisor Android OS target_files.zip 
• otapackage_android_full.zip: The final generated Hypervisor Android OS (L+L) full upgrade package, the package name can be 
specified arbitrarily. 
• Ensure compilation of the upgrade package in the Hypervisor Android build environment. Execute “source” and “lunch” before 
compiling the full package to prevent compilation failure. 
 
2. Build incremental otapackage 
Prerequisites: 
To compile the incremental package, prepare two copies of the Android OS target_files.zip in advance: The base version 
(source version) target_files.zip, named source_target_files.zip; and the target version of target_files.zip, named 
target_target_files.zip. 
Note: Please ensure that the base version load burned on the platform and the base version target_files.zip are obtained from the same 
compilation; otherwise, it will lead to OTA incremental upgrade failure. 
 
Compilation instructions: 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -i 
source_target_files.zip target_target_files.zip otapackage_android_delta.zip 
Note: 
• ota_from_target_files: Upgrade package compilation script 
• source_target_files.zip: Source version of Android target_files.zip 
• target_target_files.zip: Target version of Android target_files.zip 
• otapackage_android_delta.zip: The final generated Android OS incremental upgrade package, and the package name can be 
specified arbitrarily. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
4.5 Analysis of Upgrade Package Structure 
Please refer to the description in Section 3.5 Analysis of Upgrade Package Structure. 
 
4.6 How to Perform Hypervisor (L+L+A) OTA Upgrade 
 Full Package Upgrade (Normal Mode) 
Test Environment: 
1. The PC has a Python 3 environment 
2. Flash base load in the DUT 
3. Get OTA package (including Android OS package and Linux OS package) 
 
Testing Steps: 
Note: Please complete the Android OS upgrade first, and then perform the Linux OS upgrade to avoid system startup failure caused by 
mismatched slots of each OS when the platform powers off and restarts after completing an OS upgrade. 
Update Android OS: 
1. The device connects to the adb environment, defaulting to connect to Android adb. 
2. Execute the following command to connect to Yocto adb 
─ adb forward tcp:7777 tcp:6666 
─ adb connect 127.0.0.1:7777 
3. Execute adb devices to check whether adb is connected successfully. The correct connection is as follows: 
List of devices attached 
0123456789ABCDEF        device               >> Android device 
127.0.0.1:7777  device                               >> Yocto device 
4. Execute the Android OS upgrade script: python3 hypervisor_android_update.py -s 0123456789ABCDEF -
-file otapackage_android_full.zip > update_android_full.txt 2>&1 
– hypervisor_android_update.py: Android OS upgrade script 
– 0123456789ABCDEF: Android OS device adb number 
– otapackage_android_full.zip: Android OS OTA full upgrade package, no restrictions on the upgrade package name 
– update_android_full.txt: Android OS Upgrade Log 
 
Update Linux OS: 
1. The device connects to the adb environment, defaulting to connect to Android adb. 
2. Check whether Linux adb is connected; if not connected, please execute the following command to connect Yocto adb. 
– adb forward tcp:7777 tcp:6666 
– adb connect 127.0.0.1:7777 
3. Execute adb devices to check whether adb is connected successfully. A correct connection is as follows: 
List of devices attached 
0123456789ABCDEF        device               >> Android device 
127.0.0.1:7777  device                               >> Yocto device 
4. Execute the Linux OS upgrade script: python3 hypervisor_yocto_update.py -s 127.0.0.1:7777 --file 
otapackage_yocto_full.zip > update_yocto_full.txt 2>&1 
– hypervisor_yocto_update.py: Linux OS upgrade script 
– 127.0.0.1:7777: Linux OS device adb number 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
– otapakcage_yocto_full.zip: Linux OS OTA full upgrade package, no restrictions on the upgrade package name 
– update_yocto_full.txt: Linux OS Upgrade Log 
5. When both Android OS and Linux OS have been upgraded, restart the device (execute reboot in the Yocto shell 
environment) 
 
Expected Results: 
1. Android OS & Linux OS have both been upgraded, and the upgrade success log is printed in update_android_full.txt: 
[INFO:update_engine_client_android.cc(103)] onPayloadApplicationComplete(ErrorCode::kSuccess (0)) 
The log of the successful upgrade printed in update_yocto_full.txt: [INFO:update_attempter_android.cc(600)] Update 
successfully applied, waiting to reboot. 
2. If the upgrade success log is not printed in update_android_full.txt, please execute adb -s 0123456789ABCDEF 
pull data/misc/update_engine_log to capture the update_engine log for RD analysis. 
3. If the upgrade is successful, please restart the device, and the first restart after the upgrade should successfully enter 
the Home Screen. 
4. Check whether the system version number has been updated after a successful restart. 
Note: If the upgrade fails, please provide update_android_full.txt, update_engine_log and update_yocto_full.txt to the corresponding 
OTA owner; if it is a reboot failure after the upgrade, please also provide a serial log of the reboot after the upgrade. 
 
 Incremental Package Upgrade (Normal Mode) 
Test Environment: 
1. The PC has a Python 3 environment 
2. Flash base load in the DUT 
3. Get OTA package (including Android OS package and Linux OS package) 
 
Testing Steps: 
Note: Please complete the Android OS upgrade first, and then perform the Linux OS upgrade to avoid system startup failure caused by 
mismatched slots of each OS when the platform powers off and restarts after completing an OS upgrade. 
Update Android OS: 
1. The device connects to the adb environment, defaulting to connect to Android adb. 
2. Execute the following command to connect to Yocto adb 
– adb forward tcp:7777 tcp:6666 
– adb connect 127.0.0.1:7777 
3. Execute adb devices to check whether adb is connected successfully. The correct connection is as follows: 
List of devices attached 
0123456789ABCDEF        device               >> Android device 
127.0.0.1:7777  device                               >> Yocto device 
4. Execute the Android OS upgrade script: python3 hypervisor_android_update.py -s 0123456789ABCDEF --
file otapackage_android_delta.zip > update_android_delta.txt 2>&1 
– hypervisor_android_update.py: Android OS upgrade script 
– 0123456789ABCDEF: Android OS device adb number 
– otapackage_android_delta.zip: Android OS OTA full upgrade package, no restrictions on the upgrade package 
name 
– update_android_delta.txt: Android OS upgrade log 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Update Linux OS: 
1. The device connects to the adb environment, defaulting to connect to Android adb. 
2. Check whether Linux adb is connected; if not connected, please execute the following command to connect yocto SOS 
adb. 
─ adb forward tcp:7777 tcp:6666 
─ adb connect 127.0.0.1:7777 
3. Execute adb devices to check whether adb is connected successfully. The correct connection is as follows: 
List of devices attached 
0123456789ABCDEF        device               >> Android device 
127.0.0.1:7777  device                               >> Yocto device 
4. Execute the Linux OS upgrade script: python3 hypervisor_yocto_update.py -s 127.0.0.1:7777 --file 
otapackage_yocto_delta.zip > update_yocto_delta.txt 2>&1 
─ hypervisor_yocto_update.py: Linux OS upgrade script 
─ 127.0.0.1:7777: Linux OS device adb number 
─ otapakcage_yocto_delta.zip: Linux OS OTA full upgrade package, no restrictions on the upgrade package name 
─ update_yocto_delta.txt: Linux OS Upgrade Log 
5. When both Android OS and Linux OS have been upgraded, restart the device (execute reboot in the Yocto shell 
environment) 
 
Expected Results: 
1. Android OS & Linux OS have both been upgraded, and the upgrade success log is printed in update_android_delta.txt: 
[INFO:update_engine_client_android.cc(103)] onPayloadApplicationComplete(ErrorCode::kSuccess (0)) 
update_yocto_delta.txt prints the upgrade success log: [INFO:update_attempter_android.cc(600)] Update successfully 
applied, waiting to reboot. 
2. If the upgrade success log is not printed in update_android_full.txt, please execute adb -s 0123456789ABCDEF 
pull data/misc/update_engine_log to capture the update_engine log for RD analysis. 
3. If the upgrade is successful, please restart the device, and the first restart after the upgrade should successfully enter 
the Home Screen. 
4. Check whether the system version number has been updated after a successful restart. 
Note: If the upgrade fails, please provide update_android_full.txt, update_engine_log and update_yocto_full.txt to the corresponding 
OTA owner; if it is a failure after rebooting post-upgrade, please also provide a serial log of the reboot after the upgrade. 
 
4.7 How to Modify the Signature of the Hypervisor Linux OS (L+L) Upgrade 
Package 
During the OTA upgrade process, two keys will be used: xxx.pk8 and xxx.x509.pem. The key in xxx.pk8 format is used to 
sign the upgrade package during the compilation of the upgrade package, while the key in xxx.x509.pem format is used to 
verify the upgrade package during the OTA upgrade process. 
 
If you need to use a customized key, please follow the steps below: 
1. Replace the specified path of the -k parameter in the upgrade package compilation instruction in Section 4.4.1.2 
Compile Linux OS OTA Upgrade Package with the actual xxx.pk8 and xxx.x509.pem paths used. 
2. Replace the actual xxx.x509.pem file in meta/meta-mediatek/recipes-support/update-engine-sideload-
u/files/ota/ otacerts.zip. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
4.8 How to Remove/Add OTA Upgrade Partitions 
 Source of OTA Upgrade Partition 
 
Figure 4-4. OTA upgrade partition source 
 
The confirmation steps for the OTA upgrade partition are as follows: 
1. During the compilation phase, the information in the partition table is packaged and converted into 
MTXXX_Android_scatter.txt, for example: MT6897_Android_scatter.txt. 
2. Record the partitions in MT6897_Android_scatter.txtn where is_upgradable is true to ab_partitions.txt; 
3. Package ab_partitions.txt into the target_files.zip of each OS. 
4. When compiling the upgrade package, the partition images recorded in ab_partitions.txt are packaged into the 
upgrade package. 
Note: When checking the is_upgradable status of the partition, the is_upgradable of the _a partition will be prioritized. For example, 
when the is_upgradable of xxxx_a partition is true and the is_upgradable of xxx_b is false, the system will still record that partition as an 
OTA upgrade partition. 
 
 Remove OTA Upgrade Partition 
Note: Reducing the OTA upgrade partition will only disable the OTA upgrade for specific AB partitions and will not change the disabled 
AB upgrade partition to a single partition. 
The Hypervisor (L+L+A) includes three different OS projects, and its image composition includes: Yocto partition image + 
Android partition image + T-box partition image. The Hypervisor (L+L+A) also includes two partition tables; one partition 
table is located in the Yocto codebase, and the partition table contains all partition information for Yocto + Android + T-box. 
This partition table is used during the compilation of Yocto and T-box stages; the other partition table is located in the 
Android codebase, and the partition table only contains Android partition information. This partition table is only used 
during the compilation of the Android stage. 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
• Yocto & T-box partition table: 
meta/meta-mediatek-mt8676-hyp/recipes-
bsp/ptgen/files/<project_name>/partition_table_emmc_hyp_ab.csv 
 
• Android partition table: 
device/mediateksample/<project_name>/partition_table_emmc_hyp_ab.csv 
 
The following are the methods for reducing OTA upgrade partitions for each OS: 
1. Yocto OS (Host OS) 
Change the OTA_Update status from Y to N in the Yocto partition table to disable the OTA upgrade partition. 
For example: 
• Before modification: 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
 
• After modification: 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
 
2. Android OS (Guest OS) 
Change the OTA_Update status in the Android & Yocto partition table from Y to N to disable the OTA upgrade partition. 
For example: 
• Before modification: 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,Y,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• After modification: 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,N,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
3. Tbox OS (Guest OS) 
Change the OTA_Update status from Y to N in the Tbox partition table for the section that requires disabling OTA upgrade. 
For example: 
• Before modification: 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,Y,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
• After modification: 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,N,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
 OTA Upgrade Partition 
The newly added OTA upgrade partition must meet the following prerequisites: 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
1. The partition must simultaneously contain <partition_name>_a & <partition_name>_b, for example: boot_a & 
boot_b. 
2. The partition must be a read-only partition. 
3. The partition image format and image name must be <partition_name>.img, for example: boot.img. 
 
4.8.3.1 Set the Existing AB Partition as the OTA Partition 
The steps for each OS to set the existing AB partitions in the partition table as OTA partitions are as follows: 
 
1. Yocto OS (Host OS) 
Change the OTA_Update status from N to Y in the Yocto partition table for the OTA upgrade section. 
For example: 
• Before modification: 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
 
• After modification: 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
 
2. Android OS (Guest OS) 
Change the OTA_Update status from N to Y in the Yocto partition table and Android partition table under the OTA upgrade 
section. 
For example: 
• Before modification: 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,N,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• After modification: 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,Y,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
Add the new Android OTA partition name to the ignored_partitions in Hypervisor_make_yocto_targetfiles.py. This addition 
allows skipping the partition during the compilation of yocto_target_files.zip, preventing errors related to non-existent 
partition images during the compilation phase. 
For example: 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor', 'tee', 'bl2-tbox', 'boot_uos_tbox'}   >> Add the 
newly added partitions to the list 
 
3. T-box OS (Guest OS) 
Change the OTA_Update status from N to Y in the T-box partition table for the section that requires disabling OTA upgrade. 
For example: 
• Before modification: 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,N,N,AUTO,Y 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• After modification: 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,Y,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
Add the new T-box OTA partition name to the ignored_partitions in Hypervisor_make_yocto_targetfiles.py. This addition 
allows skipping this partition during the compilation of yocto_target_files.zip to prevent errors related to non-existent 
partition images during the compilation phase. 
For example: 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor', 'tee', 'bl2-tbox', 'boot_uos_tbox'}   >> Add the 
newly added partitions to the list 
 
Add the new T-box OTA partition name in the partitions of Hypervisor_make_uos_tbox_targetfiles.py. Ensure that the T-
box compilation stage packages the partition image into uos_tbox_target_files.zip. 
For example: 
if __name__ == "__main__": 
    target_path = "sos_tbox_images" 
    partitions = ['bl2-tbox', 'boot_uos_tbox']   >> Add the newly added partition to the 
list 
 
4.8.3.2 Add a Non-existent AB Partition as an OTA Partition 
The steps to add the OTA partition for the AB partition that does not exist in the partition table of each OS are as follows: 
 
1. Yocto OS (Host OS) 
Add the corresponding AB partition in the Yocto partition table, and ensure that the partition image is 
<partition_name>.img, taking the addition of the customer partition as an example: 
• After modification (the partition size is set to 8MB): 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
After completing the partition addition, add logic to determine the AB partition during the boot loading phase of the 
customer partition to ensure that the system loads into the correct partition. 
 
2. Android OS (Guest OS) 
Add the corresponding AB partitions in the Yocto partition table and Android partition table, and ensure that the partition 
image is <partition_name>.img, taking the addition of the customer partition as an example: 
• After modification (the partition size is set to 8MB): 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
Add the new Android OTA partition name to the ignored_partitions in  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 45

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 45 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Hypervisor_make_yocto_targetfiles.py. This addition allows skipping the partition during the compilation of 
yocto_target_files.zip, preventing errors related to non-existent partition images during the compilation phase. 
For example: 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor',  'customer', 'tee', 'bl2-tbox', 
'boot_uos_tbox'}   >> Add the newly added partitions to the list 
 
3. T-box OS (Guest OS) 
Add the corresponding AB partition in the Yocto partition table, and ensure that the partition image is 
<partition_name>.img, taking the addition of the customer partition as an example: 
• After modification (the partition size is set to 8MB): 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
Add the new Android OTA partition name to the ignored_partitions in Hypervisor_make_yocto_targetfiles.py. This addition 
allows skipping the partition during the compilation of yocto_target_files.zip, preventing errors related to non-existent 
partition images during the compilation phase. 
For example: 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor',  'tee', 'bl2-tbox', 'boot_uos_tbox', 
'customer'}   >> Add the newly added partitions to the list 
 
Add the new T-box OTA partition name in the partitions of Hypervisor_make_uos_tbox_targetfiles.py. Ensure that the T-
box compilation stage packages the partition image into uos_tbox_target_files.zip. 
For example: 
if __name__ == "__main__": 
    target_path = "sos_tbox_images" 
    partitions = ['bl2-tbox', 'boot_uos_tbox', 'customer']   >>Add the newly added partition 
to the list 
 
Note: 
1. When adding a non-existent AB partition as an OTA partition, please ensure that the newly added partition is mounted 
as a read-only partition. 
2. When adding a non-existent AB partition as an OTA partition, please ensure that the system can load and start 
normally after the new partition is added, and then verify the OTA upgrade. 
 
4.9 Selection of Boot Slot 
 Boot Control Information Description 
Due to the independent upgrades of Linux OS and Android OS in the Hypervisor (L+L+A) partial centralized upgrade 
scheme, in order to facilitate the management of each OS’s boot slot, the boot control parameters of Hypervisor (L+L+A) 
also include two independent copies, which are used to control the boot slot selection for Linux OS and Android OS 
respectively. The storage locations and key information of each boot control parameter are as follows: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 46

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 46 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 
Figure 4-5. Hypervisor (L+L+A) boot control parameters 
 
The description of each boot control parameter in Figure 4-5 is shown in Table 4-1:  
 
Table 4-1. Boot control parameter description 
System type Name Description 
Android 
priority 
Indicates the priority of the Android UOS Slot, with an initial value of 
15. The system defaults to selecting the slot with a higher priority to 
start. 
tries_remaining 
Indicates the number of reboot attempts for the Android UOS 
Android slot, the default value is 7, and 0 means that a rollback 
needs to be triggered. 
successful_boot Android UOS startup success flag, 1: Startup successful, 0: Startup 
failed 
Linux 
priority Indicates the priority of the Linux Slot, with an initial value of 15. The 
system defaults to selecting the slot with a higher priority to start. 
sos_tries_remaining Indicates the number of reboot attempts for the Linux SOS slot, the 
default value is 7, and 0 means that a rollback needs to be triggered. 
sos_successful_boot Linux SOS startup success flag, 1: Startup successful, 0: Startup failed 
uos_tbox_tries_remaining Indicates the number of restart times for the T-box UOS slot, the 
default value is 7, and 0 means that a rollback needs to be triggered. 
uos_tbox_successful_boot Linux T-box UOS startup success flag, 1: Success, 0: Failure 
 
Note: Boot Control Source Code is located at: src/bsp/lk2/platform/mediatek/common/bootctrl/bootctrl_v1 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 47

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 47 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 Boot Slot Selection Mechanism 
Since Hypervisor (L+L+A) has two independent boot control information, in order to avoid inconsistent boot slots for Linux 
OS and Android OS, Hypervisor (L+L+A) adds a boot slot selection mechanism in Linux SOS LK2 to ensure  that Linux OS and 
Android OS always start from the same slot. The flow of the selection mechanism is shown in Figure 4-6: 
 
 
Figure 4-6. Hypervisor (L+L+A) boot slot selection mechanism 
 
The boot slot selection mechanism flow shown in Figure 4-6 is described as follows: 
① Start Linux Host OS. 
② Linux Host OS enters LK2 stage, checks whether the current boot slot of Linux OS and Android OS is consistent. 
③ If the current boot slot of the Linux OS is consistent with that of the Android OS, then boot directly from that slot. 
④ If the current boot slot of the Linux OS is inconsistent with that of the Android OS, then continue to check whether the 
successful_boot of both the Linux Host OS and the Linux Guest OS under the current Linux OS boot slot are 1. 
⑤ If the successful_boot of both the Linux Host OS and Linux Guest OS under the current Linux OS boot slot is 1, then 
modify the priority of Android OS to be consistent with the Linux OS, set the boot region to be consistent with the 
current Linux OS boot slot, and finally restart the Linux SOS to ensure that the Linux OS and Android OS boot slots are 
consistent. 
⑥ If the successful_boot of both the Linux Host OS and the Linux Guest OS under the current Linux OS boot slot is not 1, 
then continue to check whether the successful_boot of the current Android OS is 1. 
⑦ If the current Android OS’s successful_boot is 1, then modify the Linux OS's priority to be consistent with the Android 
OS, set the boot region to be consistent with the current Android OS boot slot, and finally restart the Linux SOS to 
ensure that the Linux OS and Android OS boot slots are consistent. 
⑧ If all OS’s success_boot values are not 1, it is determined that the current boot slot is unavailable, and the system 
startup fails. 
Note: The source code related to Rollback is located at: src/bsp/lk2/platform/mediatek/common/bootctrl/bootctrl_v1 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 48

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 48 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
4.10 Android Merge  
The Hypervisor (L+L+A) Android OS supports Virtual A/B. After the Android OS upgrade completes and successfully boots 
from the new slot for the first time, the Android OS merges the new slot super partition image stored in either the super 
partition or userdata partition to overwrite the old slot super partition.Image data indicates that only one available super 
image of Android OS exists at this time. Therefore, before initiating the Android OS merge flow, ensure that all Linux OSs 
(OS) and Android OSs (OS) have successfully started. This prevents scenarios where a failure in starting one OS after the 
Android OS merge triggers the rollback mechanism, resulting in a failed rollback of the Android OS. 
 
 
Figure 4-7. Android merge mechanism 
 
Figure 4-7 describes the prerequisites for Android OS to start the merge. The process is as follows: 
① Start Yocto OS, check whether Yocto OS has successfully booted, that is, whether sos_successful_boot has been set to 
1. 
② If sos_successful_boot is not set to 1 before the value of sos_tries_remaining decreases to 0, then Yocto OS is 
determined to have failed to boot, triggering the rollback mechanism. 
③ If Yocto OS starts successfully, the system will set sos_successful_boot to 1 and start Android OS and T-box OS. 
④ If uos_tbox_successful_boot is not set to 1 before the value of uos_tbox_tries_remaining decreases to 0, then T-box 
OS is deemed to have failed to start, triggering the rollback mechanism. 
⑤ If successful_boot is not set to 1 before the tries_remaining value decreases to 0, then the Android OS is deemed to 
have failed to boot, triggering the rollback mechanism. 
⑥ If Android UOS starts successfully, the value of successful_boot is set to 1. At this time, Android UOS will monitor the 
startup status of Yocto OS and Tbox OS. 
⑦ If Yocto OS and T-box OS's successful_boot are both set to 1, which means boot is successful, Android OS will then 
start the merge process. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 49

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 49 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
⑧ If both Yocto OS and T-box OS’s successful_boot are not 1, then Android OS will monitor in a loop. 
 
4.11 System Rollback 
This section primarily describes how the Hypervisor (L+L+A) handles system rollback to the previous version after an OTA 
upgrade fails during the first boot from the new version, preventing device bricking. 
 
 Basic Principles of System Rollback 
Since the Hypervisor (L+L+A) Project involves multiple OSs, and the Android OS needs to support Virtual AB, the rollback 
adopted by MediaTek follows the principles below: 
• Linux OS & Android OS overall rollback, that is, when any one OS fails to start from the first new version, all OSs must 
roll back to the old system startup to ensure that all OSs’ AB slots are consistent. 
• Only in the scenario where the first boot from the new system fails after a successful OTA upgrade will the rollback 
mechanism be triggered; regular boot failures will not trigger the rollback mechanism. 
 
Taking Yocto, T-box, and Android 3 OS (L+L+A) OTA as an example, the system will have the following three rollback 
scenarios: 
Scenario 1: Yocto OS failed to boot from the new version 
 
 
Figure 4-8. Yocto boot failure scenario after OTA upgrade 
 
Figure 4-8 describes the version switching status of Yocto, T-box, and Android after the Hypervisor (L+L+A) OTA upgrade 
from V1 -> V2 is completed. When Yocto OS fails to start from the new version V2 and triggers a rollback, the scenario is 
described as follows: 
• Yocto, Android, and T-box all start from version  V1. 
• The system executes an OTA upgrade to version V2 and sets version V2 as the version for the next startup. 
• Yocto fails to start from version V2; at this time, Android and T-box have not yet been initiated. 
• Trigger rollback. Yocto, Android, and T-box switch to V1 version for startup. 
 
Scenario 2: Android OS fails to boot from the new version 
 
 
Figure 4-9. Android boot failure scenario after OTA upgrade 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 50

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 50 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Figure 4-9 describes the version switching status of Yocto, Android, and T-box after the Hypervisor (L+L+A) is upgraded 
from V1 -> V2 OTA. When Yocto OS successfully boots from the new version V2 and Android OS fails to boot from the new 
version V2, triggering a rollback, the scenario is described as follows: 
• Yocto, Android, and T-box all start from version V1. 
• The system executes an OTA upgrade to version V2 and sets version V2 as the next boot version. 
• Yocto successfully started from version 2. Android failed to start from version 2. The T-box startup status is unknown. 
• Trigger rollback. Yocto, Android, and T-box switch to V1 version for startup. 
 
Scenario 3: T-box OS failed to boot from the new version 
 
 
Figure 4-10. T-box boot failure scenario after OTA upgrade 
 
Figure 4-10 describes the version switching status of Yocto, Android, and T-box after the Hypervisor (L+L+A) is upgraded 
from V1 -> V2 OTA. When Yocto OS and Android OS successfully boot from the new version V2, and T-box OS fails to boot 
from the new version, triggering a rollback. The scenario is described as follows: 
• Yocto, Android, and T-box all start from version V1. 
• The system executes an OTA upgrade to version V2 and sets version V2 as the version for the next startup. 
• Yocto and Android successfully boot from version V2; T-box fails to boot from version V2. 
• Trigger rollback. Yocto, Android, and T-box switch to V1 version for startup. 
 
 System Rollback Process 
The system mechanism of Hypervisor (L+L+A) is set in the LK2 startup phase of each OS. The detailed process is shown in 
Figure 4-11: 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 51

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 51 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 
Figure 4-11. Hypervisor rollback flow 
 
 System Test Cases 
4.11.3.1 Yocto OS Boot Failed 
Test Environment:  
1. The PC has a Python 3 environment 
2. Flash base load in the DUT 
3. Get the OTA package from the OTA owner 
 
Testing Steps: 
1. Refer to Section 4.6 How to Perform Hypervisor (L+L+A) OTA Upgrade to execute the Hypervisor (L+L+A) OTA upgrade, 
and do not restart the device after the upgrade. 
2. Execute the following command in the Yocto OS shell environment: 
─ adb -s 127.0.0.1:7777 shell 
─ blockdev --setrw /dev/disk/by-partlabel/yocto-boot_b 
─ dd if=/dev/urandom of=/dev/disk/by-partlabel/yocto-boot_b bs=1M count=1 
─ reboot 
 
Expected Results: 
1. Yocto SOS system startup failed and triggered the rollback mechanism to successfully start from the pre-upgrade 
system. 
2. The system version number remains consistent with the version before the upgrade. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 52

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 52 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
4.11.3.2 Android OS Boot Failed 
Test Environment: 
1. The PC has a Python 3 environment 
2. Flash base load in the DUT 
3. Get the OTA package from the OTA owner 
 
Testing Steps: 
1. Refer to Section  4.6 How to Perform Hypervisor (L+L+A) OTA Upgrade to perform Hypervisor (L+L+A) OTA upgrade. Do 
not reboot the device after the upgrade. 
2. Execute the following command in the Android SOS environment: 
─ adb -s 127.0.0.1:7777 shell 
─ blockdev --setrw /dev/disk/by-partlabel/init_boot_b 
─ dd if=/dev/urandom of=/dev/disk/by-partlabel/init_boot_b bs=1M count=1 
─ reboot 
 
Expected Results: 
1. The Android UOS system failed to start and triggered the rollback mechanism to successfully start from the pre-
upgrade system. 
2. The system version number remains consistent with the version before the upgrade. 
 
4.11.3.3 T-box OS Boot Failed 
Test Environment: 
1. The PC has a Python 3 environment 
2. Flash base load in the DUT 
3. Get the OTA package from the OTA owner 
 
Testing Steps: 
1. Refer to Section 4.6 How to Perform Hypervisor (L+L+A) OTA Upgrade to perform Hypervisor (L+L+A) OTA upgrade. Do 
not reboot the device after the upgrade. 
2. Execute the following command in the Android SOS environment: 
─ adb -s 127.0.0.1:7777 shell 
─ blockdev --setrw /dev/disk/by-partlabel/boot_uos_tbox_b 
─ dd if=/dev/urandom of=/dev/disk/by-partlabel/ boot_uos_tbox_b bs=1M count=1 
─ reboot 
 
Expected Results: 
1. T-box UOS system startup failed and triggered the rollback mechanism to successfully start from the pre-upgrade 
system. 
2. The system version number remains consistent with the version before the upgrade. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 53

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 53 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
4.12 Power Outage Upgrade Protection 
Since the device may be interrupted by abnormal power failure during the OTA upgrade process, in order to ensure that 
the device can continue to complete the upgrade from the interruption point after power failure and restart during the 
OTA upgrade process, the system needs to save the upgrade status information in real time. The Linux OS upgrade status 
information is stored in the data/misc/update_engine/prefs directory of the yocto-userdata partition of Yocto SOS 
by default, and the Android OS upgrade status information is stored in the data/misc/update_engine/prefs directory 
of the userdata partition of Android UOS by default. 
 
 Upgrade Status Information 
Hypervisor (L+L+A) Linux OS and Android OS have consistent upgrade status information saved during the OTA upgrade 
process, mainly including the following information: 
 
Figure 4-12. Upgrade status information 
 
Table 4-2 describes the functions of each upgrade status information: 
 
Table 4-2. Upgrade status information description 
Prefs name Prefs value Description 
kPrefsUpdateStateNextOperation update-state-next-operation Record the next operation that needs to be 
performed. 
kPrefsUpdateCheckResponseHash update-check-response-hash Record the hash value of the last upgrade 
package. 
kPrefsResumedUpdateFailures resumed-update-failures 
Record the number of times the upgrade is 
interrupted; by default, an upgrade can be 
interrupted a maximum of 10 times. If it exceeds 
10 times, the system will force a complete re-
upgrade. 
kPrefsUpdateStateNextDataOffset update-state-next-data-offset 
Record the offset address of the data 
downloaded from the upgrade package next 
time. 
kPrefsUpdateStateSHA256Context update-state-sha-256-context Record the hash value of the upgrade status 
information 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 54

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 54 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Prefs name Prefs value Description 
kPrefsManifestMetadataSize manifest-metadata-size Record the size of metadata data 
kPrefsManifestSignatureSize manifest-signature-size Record signature data size 
 
 Resume Upgrade Inspection Process 
Please refer to the description in Section 3.12.2 Resume Upgrade Inspection Process. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 55

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 55 
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Attachment 1 Additional Terms 
The acquisition, download, and use of this document and its related information by you (or your company or other legal entity collectively referred to as 
"you") are contingent upon your acceptance of these additional terms. The use, acquisition, or download of this document indicates acceptance of these 
additional terms and agreement to be bound by them. If there is disagreement with being bound by these additional terms, do not use, acquire, or 
download this document and immediately delete or destroy all copies of this document. 
 
This document contains confidential and proprietary information of MediaTek Inc. and its affiliates (hereinafter collectively referred to as "MediaTek") or 
its authorized representatives. This information is intended solely for internal use related to the MediaTek chipset described in this document and must 
not be used for any other purpose, including but not limited to confirming or providing evidence supporting any potential patent infringement claims 
against MediaTek, its suppliers, and/or its direct or indirect customers. Unauthorized use or disclosure of this document and the information contained 
herein is prohibited. Compensation shall be provided to MediaTek for any losses or damages incurred due to unauthorized use or disclosure of any part 
or all of this document and the information contained herein. 
 
MediaTek and its licensors retain all rights to ownership and composition of this document and do not grant any intellectual property rights (whether 
express or implied, through estoppel or otherwise). MediaTek may change the content of this document at any time without prior notice. MediaTek 
assumes no liability related to the use or reliance on this document or any consequences arising from such use or reliance, including but not limited to 
indirect damages or incidental damages. 
 
This document and any other materials, information, or technical support provided by MediaTek are delivered on an as-is basis. MediaTek assumes no 
responsibility for any express, implied, statutory, or other forms of warranty, particularly regarding merchantability, non-infringement, suitability for a 
particular purpose, completeness or accuracy of information, or any warranties arising from trade practices or transactions. MediaTek shall not be liable 
for any deliverables made to meet specified requirements or comply with specific standards or standard organizations. 
 
Without limiting the aforementioned terms, MediaTek does not assume any warranty or guarantee regarding the applicability of its products for any 
specific purpose, nor does it bear any liability for damages arising from the application or use of products, circuits, or software. Responsibility for all 
design, validation, and testing related to the integration of personal products with MediaTek products rests solely with the user. Ensure that the 
integrated products comply with relevant standards and any safety requirements or other specifications. 
 
This supplementary clause and all actions related to this supplementary clause or this document shall be governed, interpreted, and clarified by the laws 
of Taiwan, without applying principles of conflict of laws. 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0239 MT8676_Hypervisor_Reserved_Memory_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Reserved_Memory_User_Manual_V1.1.pdf

SHA-256：bdd771d7f372ce12285255b6ec0adc0d9a1fc0fc27a951dba5d30b7d5d7635ed

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0239.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-11-12 
MT8676 Reserved Memory  
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
MT8676 Reserved Memory 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-10-28 Lixin Li • Official release 
1.1 2024-11-12 Lixin Li 
• Added the description of suitable frame into Section 1.1 
Overview 
 
  
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
MT8676 Reserved Memory 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
 Overview ·································································································································································· 4 
 How to Add a New Reserved Memory? ··················································································································· 4 
 How to Add a New Reserved Memory Node in Kernel dts? ········································································· 4 
 How to Use mblock to Reserve Memory?····································································································· 5 
 How Does the Kernel Driver Obtain Reserved Memory for Use? ············································································ 7 
 How to Free a Reserved Memory? ··························································································································· 8 
Exhibit 1 Terms and Conditions ·········································································································································· 9 
 
 
List of Figures 
Figure 1-1. Diagram of the relationship between reserved memory and Memtotal ································································· 4 
Figure 1-2. mblock_alloc usage example ··································································································································· 6 
Figure 1-3. mblock_query_reserved_by_name usage example ································································································· 7 
Figure 1-4. Kernel driver gets reserved memory example ········································································································· 7 
Figure 1-5. mblock_free usage example ···································································································································· 8 
Figure 1-6. free_reserved_page usage example ························································································································ 8 
 
 
 
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
MT8676 Reserved Memory 
User Manual 
Confidential B 
1 Reserved Memory 
 Overview 
For Yocto and Android, the meaning and usage of reserved memory are basically the same. This text is suitable for LA/LLA 
frame. 
In short, it refers to a portion of memory resources managed by the Kernel that is reserved for the Kernel system itself or 
for other module functions. The reserved memory can be used independently by specific modules without interference 
from other modules. However, this also results in a reduction of the overall dynamically allocatable memory for the 
system. 
 
Figure 1-1. Diagram of the relationship between reserved memory and Memtotal  
 
HW Dram size = MemTotal + HW Reserved Memory + Kernel Reserved Memory 
Reserved memory mainly includes HW module reserved memory and Kernel reserved memory: 
 
1. HW module reserved memory: This is a portion of memory reserved for certain hardware or features on the platform 
(such as TEE, SCP , display, etc.) for their independent use. 
2. Kernel reserved memory: This is memory reserved by the Kernel for storing its code, data, and critical functional data 
structures (such as struct page) and buffers. 
 
 How to Add a New Reserved Memory? 
There are currently two ways to add a new reserved memory: 
 
1. Add a new reserved memory node in the Kernel dts file; 
2. Call the mblock API in LK2 to add a new reserved memory (recommended). 
 
 How to Add a New Reserved Memory Node in Kernel dts? 
Find the reserved memory node in Kernel dts and add your own reserved memory child node under it. 
reserved-memory { 
    xxx-reserved-memory { 
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
MT8676 Reserved Memory 
User Manual 
Confidential B 
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
 
• The blue words: The start address of the reserved memory; 
• The red words: The size; 
• alignment: The alignment size; 
• compatible: Associate the corresponding driver, and execute the corresponding driver to perform special processing 
on this reserved memory during the Kernel startup process; 
• no-map: Adding this attribute means that this memory will not be linearly mapped from PA → VA, and the Kernel will 
not manage this memory; 
 
This is a method natively provided by the Kernel. For more information on the meanings of various nodes, please refer to 
https://android.googlesource.com/kernel/msm/+/android-7.1.0_r0.2/Documentation/devicetree/bindings/reserved-
memory/reserved-memory.txt 
 
 How to Use mblock to Reserve Memory? 
mblock is a mechanism developed by MediaTek to manage reserved memory in LK2. The APIs used for adding a reserved 
memory are mblock_alloc and mblock_alloc_range. 
 
The following parameters need to be specified when using mblock: 
 
• reserved_size: Reserved memory size; 
• align: Reserved memory alignment size; 
• lower_bound: Reserved memory address lower limit; 
• limit: Reserved memory address upper limit; 
• expected_address: Specify the expected start address. If it is free, it will be assigned to this start address; if it is 
already occupied, an error will be reported. If expected_address is not specified, a range that meets the size 
requirements will be dynamically found based on the upper and lower limits of the address. 
• mapping: Reserved memory mapping type, 0 is no-map, 1 is mapping, 2 is reusable; 
• name: The name of the reserved memory; 
• mblock alloc direction: By default, it will search from limit to lower_bound~limit, and return a free address 
that meets the requirements; if no address that meets the requirements is found, it will fail. 
 
 
 
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
MT8676 Reserved Memory 
User Manual 
Confidential B 
 
The example is as follows: 
 
Figure 1-2. mblock_alloc usage example 
 
If alloc succeeds, the following log will be displayed. Start: 0x8fa00000 is the start address of alloc. 
mblock_alloc_range_no_lock:535: start: 0x8fa00000, sz: 0x600000 lower_bound: 0x0, limit: 
0x90000000,mblock_alloc_range_no_lock:537: map:0 name:apu_apusys-rv_secure 
 
1. The principle of allocating reserved memory using mblock_alloc is the same as that of reserved memory in dts. At 
the end of LK2, the information of reserved memory allocated by mblock_alloc will be written into the fdt as dts 
nodes and the corresponding log is as follows: 
mblock_fdt_reserved_append:1595: mblock-reserved-memory is appended successfully 
 
2. In other files of LK2, if you need to query previously reserved memory, you can use the 
mblock_query_reserved_by_name(xxx, 0) function, where the parameter xxx is the name of the reserved 
memory. This function returns a Reserved structure, in which reserved->size indicates the size of the queried memory, 
and reserved->start indicates the start address of the queried memory. 
 
 
 
 
 
 
 
 
 
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
MT8676 Reserved Memory 
User Manual 
Confidential B 
 
The example is as follows: 
 
 
Figure 1-3. mblock_query_reserved_by_name usage example 
 
 How Does the Kernel Driver Obtain Reserved Memory for Use? 
In the Kernel driver, find the specified node through the compatible name, parse the start physical address and size of the 
corresponding reserved memory, and then map it to a virtual address. After that, you can use this memory.  
 
The example is as follows:  
 
 
Figure 1-4. Kernel driver gets reserved memory example 
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
MT8676 Reserved Memory 
User Manual 
Confidential B 
 How to Free a Reserved Memory? 
In the LK2 stage, the APIs used to free a block of reserved memory are mblock_free and mblock_free_partial. 
int mblock_free(u64 addr): Free the entire reserved memory starting with addr. 
int mblock_free_partial(u64 addr, u64 size): Free the reserved memory starting at addr with a size of size. 
 
The following parameters should be specified when using the APIs: 
 
• addr: If the whole block is freed, fill in the start addr of the reserved memory returned by alloc; if part of the 
block is freed, fill in the start addr of the reserved memory that you want to free; 
• size: The size to be freed. 
 
The usage example is as follows: 
 
Figure 1-5. mblock_free usage example 
 
The corresponding log on successful free is as follows: 
mblock_free_with_size:970: start 0x1c0000000 size: 0x7c00000, name: LK_KERNEL 
 
Note:  
• Currently, the mblock-related functions mblock_alloc and mblock_free are only supported for use in the LK2 stage. If the 
reserved memory is used up in the LK stage, it can be freed using mblock_free.  
• If it needs to be retained for use in the Kernel stage for a period of time before being freed, the API free_reserved_page can be 
called after the Kernel has started to free it.  
 
An example is as follows. 
 
Figure 1-6. free_reserved_page usage example 
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
MT8676 Reserved Memory 
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
# SRC0240 MT8676_Hypervisor_SDCard_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_SDCard_User_Manual_V1.1.pdf

SHA-256：98681c23e3754eb7f42c755cf1ca36a24c997d3586e3c596f8c8760e73dcd76b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0240.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-11-18
MT8676 Hypervisor SDCard 
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
MT8676 Hypervisor SDCard 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-10-28 Andy-ld Lu Official release 
1.1 2024-11-18 Andy-ld Lu Added support for Yocto-tbox UOS 
 
  
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
MT8676 Hypervisor SDCard 
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
 Yocto SOS Passthrough ·································································································································· 5 
 UOS Passthrough ··········································································································································· 8 
1.4 Frequently Asked Questions/Troubleshooting ······································································································· 10 
 SDCard Not Recognized, VDD Voltage Could Not Be Measured ································································· 10 
 SDCard Is Recognized While Power On with Card but Failed While Hot-Plug ············································· 10 
Exhibit 1 Terms and Conditions ········································································································································ 11 
 
 
List of Figures 
Figure 1-1. Initialization flow of the UHS-I card ························································································································· 5 
Figure 1-2. DTS node for SDCard ················································································································································ 6 
Figure 1-3. Pinctrl node of SDR104 mode ·································································································································· 7 
Figure 1-4. Power configuration of SDCard in the dts of Yocto SOS ··························································································· 8 
Figure 1-5. Power configuration of SDCard in the dts of UOS ···································································································· 9 
Figure 1-6. Remove the corresponding interrupt number on SOS ····························································································· 9 
Figure 1-7. Add the corresponding interrupt number on UOS··································································································· 9 
Figure 1-8. DWS setting for detect pin ····································································································································· 10 
 
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
MT8676 Hypervisor SDCard 
User Manual 
Confidential B 
1 SDCard 
1.1 Overview 
 Brief Introduction 
This Chapter introduces the hardware features, software configuration, and function of the SDCard controller. It also 
includes the debugging methods for common problems. 
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviations Explanation 
DDR50 Double Data Rate up to 50MB/s@50MHz 
MMC MultiMedia Card 
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
up to 2TB, theoretical maximum speed of read/write could be up to 104MB/s. 
 
The major pins and their functions are described as below: 
(1) CLK: The clock signal, host controller or SDCard transmits one cmd/data bit at each clock cycle, up to 208MHz in UHS-I 
speed mode; 
(2) CMD: Command and response shared pin, command is transmitted from the host controller to the SDCard, and 
response is from the SDCard to the host controller; 
(3) DAT0~3: Data lines, data could be transmitted from SDCard to host controller (read), and could also be transmitted 
from host controller to SDCard (write); 
(4) VDD: Power supply pin of SDCard, which is normally configured to 3.3V voltage, the scope specified in the SD protocol 
is 2.7V~3.6V; 
(5) CD: The detection pin of the SDCard normally achieves GPIO level variation when the card is inserted or removed 
through the mechanical structure of SDCard holder. 
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
MT8676 Hypervisor SDCard 
User Manual 
Confidential B 
 
 
Figure 1-1. Initialization flow of the UHS-I card 
 
 MT8676 SDCard Feature 
(1) Compatible with SD3.0 protocol standards 
(2) Support Basic DMA and Descriptor DMA modes 
(3) Support Bus speed mode: Default Speed/High Speed/SDR12/SDR25/SDR50/SDR104/DDR50  
(4) Support 1/4-bit bus width 
 
1.3 Configuration/Customization Guideline 
 Yocto SOS Passthrough 
1.3.1.1 Kernel Config 
In the configuration file:  
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/auto8676p1_64_hyp_defconfig 
 
(1) Enable SDCard support 
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
MT8676 Hypervisor SDCard 
User Manual 
Confidential B 
CONFIG_MMC = y 
(2) Enable MediaTek host driver support 
CONFIG_MMC_MTK_PRO = m 
 
1.3.1.2 DTS Node 
 
Figure 1-2. DTS node for SDCard 
 
(1) SD2.0 card needs to configure “cap-sd-highspeed”, SD3.0 ultra-high speed card needs to configure “sd-uhs-xxx”; 
(2) SD driving strength could be configured in the pinctrl node of the corresponding mode, such as in the SDR104 mode 
shown as Figure 1-3; 
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
MT8676 Hypervisor SDCard 
User Manual 
Confidential B 
 
Figure 1-3. Pinctrl node of SDR104 mode 
 
(3) SDCard detect pin could be configured by “cd-gpios”, GPIO_ACTIVE_LOW represents low card insertion level, and 
GPIO_ACTIVE_HIGH represents high card insertion level; 
(4) The configurations of “vmmc-supply” and “vqmmc-supply” are according to actual used SDCard VDD power and Host 
I/O power. If there is a need to use fast-power-off (VMCH hardware power off when SDCard is pulled out) function, 
“vmmc-supply” should be configured as &mt6373_vmch_eint_high (match with GPIO_ACTIVE_LOW of “cd-gpios”) or 
&mt6373_vmch_low (match with GPIO_ACTIVE_HIGH of “cd-gpios”); and if there is no need to use fast-power-off 
function, “vmmc-supply” should be configured as &mt6373_vmch. 
 
1.3.1.3 KO Table 
Add host driver ko to the following ko table path, “ramdisk” is configured in the column three, which means that ko would 
be installed into initramfs. 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/ko_order_table/ 
auto8676p1_64_hyp/ko_order_table.csv: 
 
 
1.3.1.4 Device Mounting 
The SDCard is mounted to the share folder on the Yocto SOS side, and made multi-system accessible through virtio-fs. For 
example, to implement dual-system access on the Android-IVI UOS side, the reference for the mount command is as 
follows: 
mkdir -p /data/share/media/sdcard 
mount -t ext4 /dev/mmcblk0p1 /data/share/media/sdcard 
The corresponding access path on the Android UOS side is /data/vendor/share/media/sdcard. 
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
MT8676 Hypervisor SDCard 
User Manual 
Confidential B 
 UOS Passthrough 
1.3.2.1 Kernel Config 
The configuration method remains identical to that in Section 1.3.1.1, and it is already configured by default on Android-
IVI. 
File location in Yocto-tbox: meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/linux-mtk-extension-
uos/auto8676p1_64_uos_tbox_defconfig 
 
1.3.2.2 DTS Node 
The configuration method remains identical to that in Section 1.3.1.2. 
 
1.3.2.3 KO Table 
Add host driver ko to the ko table file. 
File location in Android-IVI: device/mediateksample/auto8676p1_64_bsp_vm/ko_order_table.csv 
File location in Yocto-tbox: meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/ko_order_table/ 
auto8676p1_64_uos_tbox/ko_order_table.csv 
 
 
1.3.2.4 Configuration of Other Related Resources 
(1) Power virtualization support 
– Add support for the two power supplies of the SDCard in the “hyp_regulator_host” of the dts file meta/meta-
mediatek-mt8676-hyp/recipes-kernel/linux/files/auto8676p1_64_hyp.dts on the Yocto SOS side. 
 
 
Figure 1-4. Power configuration of SDCard in the dts of Yocto SOS 
 
– Remove the settings for the two power supplies of the SDCard in the dts on the UOS side. 
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
MT8676 Hypervisor SDCard 
User Manual 
Confidential B 
 
Figure 1-5. Power configuration of SDCard in the dts of UOS 
 
(2) Interrupt virtualization support 
The configuration in thyp-sdk should be modified to include support for interrupt number 166 (which requires an increase 
of 32 to reach 198) for the SDCard host on the UOS side. 
– Remove the interrupt number in sos_mt8676.json 
 
 
Figure 1-6. Remove the corresponding interrupt number on SOS 
 
– Add the interrupt number in uos_alps_pv8676.lua(Android-IVI) or uos_tbox_pv8676.lua(Yocto-tbox) 
 
 
Figure 1-7. Add the corresponding interrupt number on UOS 
 
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
MT8676 Hypervisor SDCard 
User Manual 
Confidential B 
1.4 Frequently Asked Questions/Troubleshooting 
 SDCard Not Recognized, VDD Voltage Could Not Be Measured 
(1) Check the correction of Kernel config and DTS according to Section 1.3; 
(2) If VDD supplied power is MT6373, and detect pin is connected to SD_DET pin of MT6373, please check if the 
configured power node of “vmmc-supply” is matched with the polarity of detect pin; 
(3) If the result of step (2) is okay, please configure “vmmc-supply” as &mt6373_vmch and check VDD voltage, correct 
voltage represents there is a problem in fast-power-off function, submit PMIC issue to MediaTeK; 
(4) If VDD could not power up yet in step (3), please catch Kernel log and submit SDCard issue to MediaTeK. 
 
 SDCard Is Recognized While Power On with Card but Failed While Hot-Plug 
(1) Check the correction of “cd-gpios” configuration in DTS according to the Section 1.3.1.2; 
(2) If DTS configuration is okay, check the correction of the GPIO configuration for detect pin in the file 
src/devtools/dct/dws/mt6897/${PROJECT}.dws (Yocto path) or 
vendor/mediatek/proprietary/tools/dct/dws/mt6897/${PROJECT}.dws (Android path), refer to the 
configuration shown in Figure 1-8: 
 
 
Figure 1-8. DWS setting for detect pin 
 
(3) If the DTS and DWS configuration are all okay but SDCard could not be recognized yet while hot-plug, please measure 
the level of the detect pin in the state of card inserting and removing and submit the SDCard issue to MediaTeK if the 
result of measurement meets expectations. 
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
MT8676 Hypervisor SDCard 
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
# SRC0241 MT8676_Hypervisor_Secure_Boot_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Secure_Boot_User_Manual_V1.0.pdf

SHA-256：8fb29ac94bce928de429376509412d010820fe3b00843f9322862f1ab45f1dd5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0241.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:   1.0 
Publication date:  2024-11-14
MT8676 Hypervisor Secure Boot  
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-14 Peak Official version 
 
  
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
MT8676 Hypervisor Secure Boot 
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
 BootRom ······················································································································································· 4 
1.2 Secure Boot ······························································································································································ 5 
 Secure Boot Check Process ··························································································································· 5 
1.3 Download Agent Authentication (DAA) ··················································································································· 7 
1.4 Security Feature Configuration ································································································································ 7 
 Generate Key Pairs. ······································································································································· 7 
 Enable Secure Boot. ······································································································································ 9 
 Compilation Software ································································································································· 10 
 Signature First-Loader ································································································································· 10 
 Signature FIT Format Image ························································································································ 11 
 Sign the Yocto File System Image. ··············································································································· 11 
 Sign the MTK Android Format Image. ········································································································· 11 
1.5 Signature DA ··························································································································································· 12 
1.6 Generate Authfile ··················································································································································· 12 
Exhibit 1 Terms and Conditions ········································································································································ 13 
 
List of Figures 
Figure 1-1. Secure boot check flow ············································································································································ 6 
Figure 1-2. dakey.h ····································································································································································· 8 
 
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
1 Secure Boot 
1.1 Overview 
This document provides an overview of the secure boot feature in the MT8676 SoC and its accompanying SDK. During the 
design and deployment cycle of this product, functionalities and features may change. These changes will be documented 
in subsequent versions of this document. Additionally, this document describes how to enable secure features. 
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
DA Download Agent download proxy  
DAA Download Agent Authentication 
DRAM Dynamic Random Access Memory 
eFuse Electronic Fuse  
eMMC Embedded MultiMedia Card  
EVB Evaluation Board  
FIT Flattened Image Tree 
LK2 Litter Kernel 2 
NVM Non-Volatile Memory  
PC Power Control 
ROM Read-only Memory 
SBC Secure Boot Check  
SDK Software Development Kit 
SoC System-on-Chip 
SRAM Static Random Access Memory  
TEE Trusted Execution Environment  
UART Universal Asynchronous Receiver/Transmitter  
USB USB  
USBDL USB Download 
 
 BootRom 
BROM (BootROM) is the software in SoC ROM that cannot be modified. It is the first software executed by the application 
processor. The main work summary is as follows: 
• Perform basic hardware configuration for the System on Chip (SoC) as follows:  
1. Set the Phase-Locked Loop (PLL).  
2. Configure clocks.  
3. Initiate system startup. 
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
• Load the first-stage bootloader from the startup device UFS/eMMC/NAND to initiate the system. 
• Communicate with the host PC tool to load Download Agent (DA) software for mirroring downloads to external Flash 
devices that lack software or have corrupted software. 
• Perform secure boot checks on the first-stage bootloader or download agent using multiple secure boot check keys. 
 
1.2 Secure Boot 
 Secure Boot Check Process 
The Secure Boot check process is used to create a trusted execution chain from the hardware root of trust. It can be 
enabled by burning SBC_EN in eFuse. This process is performed every time the system recovers from power-on reset. 
Figure 1-1 Demonstrates the basic secure boot check process. Detailed descriptions are as follows.  
 
1. After power-on reset, BROM uses the following process to verify the secure boot check (SBC) public key (SBC_PUBK) in 
non-volatile memory (NVM, such as eMMC or NAND). BROM sequentially uses the public key hash (SBC_PUBK_HASH) 
from eFuse. 
(1) Read the hash value of the secure boot check public key (SBC_PUBK) from eFuse (SBC_PUBK_HASH). 
(2) Read the SBC public key (SBC_PUBK) from NVM. 
(3) Calculate the hash value of the data from (2). 
(4) Check whether the data from (1) and (3) is the same. 
 
2. BROM loads and verifies bl2.img (Yocto LK2), which is the first stage of bootloader. First, BROM reads Yocto LK2 from 
NVM into the SoC’s SRAM and uses the secure boot check public key (SBC_PUBK) to authenticate Yocto LK2. If Yocto 
LK2 verification is successful, Yocto LK2 will be executed. The verification method uses SHA256 to compute the hash 
value, RSA (2048 bits), and MTK or PSS padding (determined by the header of the first stage bootloader) for 
verification. 
Note:  
• If the external storage is NAND flash memory, BROM supports the second copy of LK2. When BROM cannot load the first copy 
of LK2, BROM attempts to load and authenticate the second copy of LK2. 
 
3. After the first stage bootloader, it runs in the Yocto LK2 stage, where LK2 will verify the Yocto FIT image, Hypervisor, 
and Android-related images. 
 
4. Yocto LK2 loads the FIT image (such as the Yocto kernel and other FIT images) from NVM into a non-secure DRAM area 
and verifies it. It uses the VERIFIED public key embedded in LK2 to authenticate and verify the FIT signature of the FIT 
image, and detects the HASH values of each sub-image in the Fit image. The verification method uses SHA256 to 
compute the hash value, RSA (2048 bits), and MTK or PSS padding for verification. 
 
5. Yocto LK2 also loads the MTK signed format image (such as TEE, Hypervisor image) from NVM into a secure DRAM 
area and verifies it. It uses the ROOT public key embedded in the LK2 program to authenticate the image’s CERT1 and 
uses the IMAGE public key extracted from CERT1 to authenticate the image’s CERT2. If CERT2 verification is successful, 
this image will be considered legitimate and will continue with the subsequent process. The verification method uses 
SHA256 to calculate the hash value, RSA (2048 bits), and MTK or PSS for verification. 
 
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
6. After Yocto LK2 verifies the images required for 4 and 5 mentioned above, it will jump to TEE. TEE will start the 
Hypervisor image gz.img. The Hypervisor will first start the Yocto Kernel and then verify the startup of the Android LK2 
image and Tbox LK2 image. 
 
7. After the Yocto Kernel is executed, the root_check function provided by MediaTek in the Yocto Kernel can be used to 
implement sampling verification of the read-only system. 
 
8. The method for verifying Android LK2 and Tbox LK2 by the Hypervisor needs to be provided by the Hypervisor vendor. 
Currently, it is Qianchuan. 
 
9. Android LK2 will verify the Android Kernel through AVB. After executing in the Android Linux system, it can verify the 
read-only image through dm-verity (on block devices) in the Linux Kernel. 
Note: 
• Currently, dm-verity supports only block devices in Linux (eMMC on EXT4). 
 
10. Tbox LK2 will load the Tbox Kernel image into the DRAM area for verification. The Tbox Kernel image is in FIT format. 
Tbox LK2 will use the VERIFIED public key embedded in Tbox LK2 to authenticate and verify the FIT signature of the FIT 
image and check the HASH values of each sub-image in the Fit image. The verification method uses SHA256 to 
calculate the hash value, RSA (2048 bits), and MTK or PSS padding for verification. 
 
11. After the Tbox Kernel is executed, it can implement sampling verification of the read-only system through the 
root_check function provided by MediaTek in the Yocto Kernel. 
 
 
Figure 1-1. Secure boot check flow 
 
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
1.3 Download Agent Authentication (DAA) 
When the device software in the external memory (eMMC/NAND/...) is empty or damaged, the host PC tool can 
communicate with the BROM in the SoC, load a DA software into the SRAM of the SoC and execute DA to download the 
image process. When Enable_DAA is burned, the DA will be authenticated by BROM, and the following process is called 
Download Agent Authentication (DAA). 
 
1. The host PC tool sends the authentication file (AuthFile) to BROM via USB or UART. 
2. BROM performs authentication on AuthFile. 
(1) BROM reads the Secure Boot Check (SBC) public key (SBC_PUBK) from the AuthFile and uses the public key hash 
(SBC_PUBK_HASH~SBC_PUBK_HASH1) and the corresponding disable bits 
(SBC_PUBK_HASH_DIS~SBC_PUBK_HASH1_DIS) to authenticate the hash of the SBC key. 
(2) BROM uses SBC_PUBK to verify AuthFile. 
(3) BROM obtains the DAA key from the AuthFile. 
3. The host PC tool sends DA. 
4. BROM uses the DAA key to verify DA through SHA256/RSA-2048. 
5. BROM jumps to DA to execute the firmware download process. 
 
Note: 
• The SBC_PUBK and DAA keys can be different to enhance security levels. 
• In addition to BROM, the first-stage bootloader also supports the DA protocol, which can be used to verify DA using 
SHA256/RSA2048. 
 
1.4 Security Feature Configuration 
 Generate Key Pairs. 
Generate two pairs of keys (including private key and public key) in Yocto: SBC_KEY and VERIFIED_KEY. Place them in the 
Yocto system directory meta/meta-MediaTek/conf/machine/keys. 
1. The command to generate the Yocto private key: 
openssl genrsa -F4 -out sbc_key.pem 2048 
openssl genrsa -F4 -out verified_key.pem 2048 
openssl req -batch -new -x509 -key verified_key.pem -out verified_key.crt 
 
2. The command to generate the Yocto public key: 
openssl rsa -in sbc_key.pem -pubout > sbc_pubk.pem 
openssl rsa -in verified_key.pem -pubout > verified_pubk.pem 
 
Two pairs of keys are generated for android OS, including a private key and a public key: the root key (ROOT_KEY) and the 
image key (IMAGE_KEY). Use pem_to_der.py to convert the format of the root key to DER format in 
vendor/MediaTek/proprietary/scripts/sign-image_v2/der_extractor. 
 
 
 
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
3. The command to generate an Android private key: 
openssl genrsa -out root_prvk.pem 2048 
python pem_to_der.py root_prvk.pem root_prvk.der 
openssl genrsa -out img_prvk.pem 2048  
 
4. The command to generate the Android public key: 
openssl rsa -in root_prvk.pem -pubout > root_pubk.pem 
python pem_to_der.py root_pubk.pem root_pubk.der 
openssl rsa -in img_prvk.pem -pubout > img_pubk.pem 
 
Keep using the same method to generate the DA key pair to sign and verify the DA (da_prvk.pem/da_pubk.pem). In 
addition, Yocto private key content is recommended overwrite the Android private key content, and the Yocto public key 
content overwrite the Android public key content, so that the configuration will be simpler. 
 
1.4.1.1 Generate oemkey.h 
Export the root key (root_pubk.der), use der_extractor to generate oemkey.h, this tool is located in the 
vendor/MediaTek/proprietary/scripts/sign-image_v2/der_extractor/ directory. Please place oemkey.h in 
the following path: 
Android DA: $DA_Kit/Raphael-da/custom/$PLATFORM/oemkey.h 
Yocto LK2: $LK/target/$PROJECT/inc/oemkey.h 
 
Command: 
chmod 777 der_extractor 
./der_extractor root_pubk.der oemkey.h ANDROID_SBC 
 
1.4.1.2 Generate dakey.h 
The dakey.h file contains the public key for verifying DA_BR.bin by LK2. The corresponding private key is used to sign 
DA_BR.bin. 
Command: 
chmod 777 der_extractor 
./der_extractor da_pubk.der dakey.h ANDROID_SBC 
 
Place dakey.h in the following path: 
Yocto LK2: $LK2/target/$PROJECT/include/dakey.h 
 
Note:  
• After generating dakey.h, please replace “OEM” with “DA” (Figure 1-2). 
 
Figure 1-2. dakey.h 
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
 
 Enable Secure Boot. 
1.4.2.1 Android Software Security Configuration 
The default security configuration for the Android side software is enabled; you can check the following configurations: 
1. LK2 configuration software (Hypervisor Android’s LK2 is compiled in Yocto) 
Yocto LK2: $LK/project/${PROJECT}.mk 
 MTK_SECURITY_SW_SUPPORT=yes 
 
 
2. Kernel settings 
32-bit Kernel 
<kernel path>/arch/arm/configs/<project>_debug_defconfig 
<kernel path>/arch/arm/configs/<project>_defconfig 
 
64-bit Kernel 
<kernel path>/arch/arm64/configs/<project>_debug_defconfig 
<kernel path>/arch/arm64/configs/<project>_defconfig 
 
CONFIG_MTK_SECURITY_SW_SUPPORT=y 
 
1.4.2.2 Software Security Configuration for Yocto 
meta/meta-mediatek-mt8xxx/conf/machine/[project].conf 
SECURE_BOOT_ENABLE = “yes” 
ENABLE_ROOTFS_CHECK= “yes” 
 
1.4.2.3 TBox Software Security Configuration 
meta/meta-mediatek-mt8xxx/conf/machine/[project]uos_tbox.conf 
SECURE_BOOT_ENABLE = “yes” 
ENABLE_ROOTFS_CHECK= “yes” 
1.4.2.4 BROM Enables Secure Configuration. 
The above three points all enable the security verification configuration at the software level. To enable the BROM 
verification first-loader (the first-loader in this project is Yocto LK2), you need to write the eFuse field. 
 
1. Generate SCB_PUBK HASH: 
Tool path: meta/meta-MediaTek/recipes-bsp/lk/files/pbp 
Command: 
chmod 777 der_extractor 
python pbp.py -j sbc_key.pem -func keyhash_pss -o keyhash 
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
 
2. Write SBC_PUBK HASH into eFuse: 
 
Step 1: Use “hexdump -C keyhash” or “xxd -c 32 keyhash” to display the hexadecimal keyhash. 
Note: You must use the -c parameter to generate a standard hexadecimal ASCII display result. 
 
hexdump -C keyhash 
00000000 16 b1 oe fc 5e 4e 06 76 e9 d9 6e 40 0c 51 ca 36 | ……. 
00000010 d1 be 93 d2 67 fd 3e af db f6 f7 89 4a 2c 40 18   |…….. 
xxd -c 32 keyhash 
00000000 16b1 oefc 5e4e 0676 e9d9 6e40 0c51 ca36 d1be 93d2 67fd 3eaf dbf6 f789 4a2c 
4018    ……… 
 
Do not use 'hexdump keyhash' for display. 
hexdump keyhash 
00000000 b116 fc0e 4e5e 7606 d9e9 406e 510c 36ca 
00000010 bed1 d293 fd67 ad3e f6db 89f7 2c4a 1840 
 
Step 2: Convert the result to a hexadecimal string. Remove the spaces between characters: 
16b10efc5e4e0676e9d96e400c51ca36d1be93d267fd3eafdbf6f7894a2c4018 
 
Step 3: Execute the ewriter command: 
ewriter 1 0 32 16b10efc5e4e0676e9d96e400c51ca36d1be93d267fd3eafdbf6f7894a2c4018 
 
Refer to the MTK_eFuse_Writer_User_Guide for more detailed usage of the ewriter tool. 
 
Note:  
• To enable the BROM secure boot verification function of the IC, in addition to writing the above SBC_PUBK0_HASH field, it is also 
necessary to write SBC_EN. The eFuse can only be written once, so it is not recommended to write eFuse to enable the BROM 
secure boot verification function of the IC during the project development phase. 
 
 Compilation Software 
Compile the entire project. 
 
 Signature First-Loader 
1. Signing the first-loader (this project is Yocto LK2) will use two keys: sbc_key.pem and verified_key.pem. 
2. Key placement directory: 
<yocto branch>/meta/meta-mediatek/conf/machine/keys/ 
3. When compiling Yocto LK2, enabling the security configuration will automatically sign Yocto LK2. 
4. Signing process: Package the SBC public key and the verified public into the key cert, and signed them using the SBC 
priate key; calculate the image hash, package the hash and verified pub key into the content cert, and sign them using 
the verified priv key; finally, concatenate the key cert and content cert to the end of the original image to generate the 
signed image. 
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
 Signature FIT Format Image 
1. The first-loader signature (this project is Yocto LK2) requires the verified_key.pem key. 
2. Key placement directory: 
<yocto branch>/meta/meta-mediatek/conf/machine/keys/ 
3. When compiling each FIT image, enabling security configuration will automatically sign the corresponding image. 
4. Signing process: The FIT image is an open-source standard format image, so the uboot-mkimage tool will be used to 
sign the image, mainly calculating the original HASH and storing it in the HASH node, and using the verified private key 
to sign the nodes in the FIT image except for the data node after concatenation, saving the signed result in the 
signature node. 
 
 Sign the Yocto File System Image. 
1. The signed Yocto file system will also utilize the verified_key.pem key. 
2. Key placement directory: 
<yocto branch>/meta/meta-mediatek/conf/machine/keys/ 
3. When compiling each file system image, enabling security configuration automatically signs the corresponding image. 
4. Signature process: MediaTek will provide the file system signature tool mtd_verify. This tool will extract N pieces of 
data from the original file system image based on the input parameters, each with a fixed size and fixed interval; it will 
concatenate the extracted parts to calculate the hash, use the verified private key to sign the HASH; and save the 
information of the input parameters and Signature at the end of the original image. 
 
 Sign the MTK Android Format Image. 
1.4.7.1 Generate Keys for cert1 and cert2. 
1. Use root_prvk.pem and img_prvk.pem to generate cert1 and cert2_key. 
2. Run the following command. 
python ./vendor/mediatek/proprietary/scripts/sign-image_v2/img_key_deploy.py mt6897  
cert1_key_path=${KEY_PATH}/root_prvk.pem cert2_key_path=${KEY_PATH}/img_prvk.pem 
root_key_padding=pss 2>&1 | tee  SecureGen.log 
 
Note:  
• Do not enter the ./vendor/MediaTek/proprietary/scripts/sign-image_v2/ directory to execute 
img_key_deploy.py. Execute this command in the root directory of the code repository. 
• Check whether cert1 and cert2_key for all images have been updated in the following locations. 
vendor\mediatek\proprietary\custom\mt6897\security\cert_config\cert1\ 
vendor\mediatek\proprietary\custom\mt6897\security\cert_config\cert2_key\ 
 
1.4.7.2 Signed Image 
After generating cert1 and cert2_key, run the signing script to generate <image>-verified.bin or <image>-
verified.img. 
 
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
Command: 
python ./vendor/mediatek/proprietary/scripts/sign-image_v2/SignFlow.py <platform> <project> 
2>&1 | tee signflow.log 
or 
./vendor/mediatek/proprietary/scripts/sign-image/sign_image.sh 2>&1 | tee signflow.log 
Lunch the project before compilation. 
 
1.5 Signature DA 
1. Key path setting 
Export the DA public key (da_prvk.pem). Place it in the Android path 
vendor/MediaTek/proprietary/scripts/secure_chip_tool/custom_keys. 
 
2. Place the DA that needs to be signed in the prebuilt/resignda/ directory, and execute the following command to 
sign the DA: 
cd vendor/mediatek/proprietary/scripts/secure_chip_tool/ 
python MTK/resign_da.py prebuilt/resignda/DA_BR.bin MT6897 
settings/Legacy/da/bbchips_pss.ini all out/resignda/DA_BR-resing.bin 
 
1.6 Generate Authfile 
The DA’s public key is included in the authfile and is used by BROM to authenticate the DA. Therefore, if DAA is enabled, an 
authfile is required when using flashtool to download the image. All .ini files located in the following locations have been 
configured for this project. 
./vendor/mediatek/proprietary/scripts/secure_chip_tools/settings/Legacy/authfile/ 
 
Replace the .pem files for the DA and root private key located at the following location. 
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

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Hypervisor Secure Boot 
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
# SRC0242 MT8676_Hypervisor_Suspend_Resume_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Suspend_Resume_V1.1.pdf

SHA-256：bd4864cd0a6775ff1eec3b0d071925dd4f406cea71fedd8505d11cba7d07eac7

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0242.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-11-13
MT8676 Hypervisor Suspend & Resume 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-10-28 Xiaojun Zheng Official release 
1.1 2024-11-13 Xiaojun Zheng Added L+L+A 
 
  
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
MT8676 Hypervisor Suspend & Resume 
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
 Hypervisor Suspend Flow ······························································································································ 4 
 Hypervisor Resume Flow ······························································································································ 6 
1.3 Frequently Asked Questions/Troubleshooting ········································································································· 7 
 How to Determine if the System Has Successfully Entered Sleep Mode ······················································ 7 
 How to Identify Wakeup Sources ·················································································································· 8 
 Wakeup Source Analysis ······························································································································· 8 
 How to Analyze Issues with Failing to Enter Sleep Mode ············································································· 9 
 How to Analyze High Power Consumption During Sleep Mode ·································································· 10 
 Hypervisor Debug Command ······················································································································ 10 
Exhibit 1 Terms and Conditions ········································································································································ 12 
 
List of Figures 
Figure 1-1. Hypervisor suspend flow ·········································································································································· 5 
Figure 1-2. Hypervisor resume flow ··········································································································································· 6 
Figure 1-3. Wakelock dump ······················································································································································ 10 
 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
1 Suspend/Resume 
1.1 Overview 
This chapter mainly introduces the MT8676 suspend/resume process and common troubleshooting methods. 
 
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
 
In the MT8676 Hypervisor VM set (L+L+A), both Host OS SoS and Guest OS Tbox are Yocto, while Guest OS IVI is Android. 
System-level suspend is initiated by Host OS, which triggers Guest OS to follow the suspend flow. Once all the Guest OS 
complete their suspend process, then Host OS can enter suspend mode. After Host OS completes its suspend, the entire 
system can enter a deep sleep mode for power saving. 
 
1.2 Architecture/Process Overview 
 Hypervisor Suspend Flow 
The framework diagram for Hypervisor Suspend is shown in Figure 1-1 (taking EINT trigger system entry and exit from 
sleep as an example). 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
CONFIDENTIALA
MediaTek Proprietary and Confidential. © 2021 MediaTek Inc. All rights reserved.
MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved.
STR L+L+A enter STR (Triggered by MCU)
1
ATF CPUx WFI
HW SoC        MCUSPM GPIO128
GPIO35 GPIO35: MCU2AP
GPIO128: AP2MCU
Notify MCU
Yocto Userspace
Native Suspend flow
s2idle
Android Framework
Android Kernel
Car Power Management 
Service
Native Suspend 
flow
s2idle
Yocto
Kernel
Hypervisor Suspend
vCPUx thread
State Manager
SW
/sys/guest_os/
android(tbox)/
pm_state
Key Event Display Off
Power Management 
Service
Surface
Flinger
Vehicle 
hal
Car Power 
Policy
System Suspend
(enable)
HW
Composer
Record UOS
Suspend status
Car Event 
driver
Suspend
vCPUx thread
Get guest os
suspend status
Trigger guest os
suspendTrigger SuspendInput subsystem
1
2
3
4
5
6
7 8
9
10
11
12
13
14
15
ARM
mbox
State Manager
Kernel 
Suspend flow
Car Event 
driver
SoS Tbox IVI
Yocto
 
Figure 1-1. Hypervisor suspend flow 
 
Main flow description: 
 
1. The platform’s entry and exit from sleep mode is primarily initiated by the MCU. The MCU controls the SoC’s sleep 
state through the status of GPIO35 (MCU2AP). When GPIO35 is pulled low, it triggers an interrupt, which is 
distributed by the Hypervisor to the SoS for processing. Upon receiving the interrupt, the SoS Kernel reports a Key 
Event. 
2. In SoS UserSpace, MediaTek has added a control logic called SleepManager (State Manager) for managing the power 
state of the Guest OS. This logic is primarily implemented by the SoC obtaining key events through the Input 
Subsystem. 
3. Upon detecting a sleep event, SoS UserSpace writes a powerkey event to 
/sys/guest_os/android(tbox)/pm_state, initiating a sleep request to the two Guest OS (Android/Yocto). 
4. SoS Kernel Driver notifies Suspend request via Mailbox to the Car Event Driver of the two Guest OS. 
5. In the Car Event Driver, a virtual Power Key (Keyevent=87) is reported to trigger the complete sleep process on the 
Android side. 
6. In Guest OS IVI, since the Vehicle HAL does not have an existing interface to connect with the Car EVENT Driver, input 
subsystem support is added here to wait for the virtual Power Key sent by the Kernel. Upon receiving it, VHAL notifies 
the Car Power Management Service to start the sleep process. 
7. The Power Management Service still listens for the Power Key Event (Keyevent=116), bypassing the PMS flow. 
8. The display-related hardware is turned off. 
9. CPMS triggers the suspend flow without a wakelock check, triggering the Android Kernel Suspend. The Kernel 
Suspend Flow is the same as that in a native single system. According to the execution order, it sequentially calls the 
Prepare/Suspend/Suspend_late callbacks registered by the devices, completing the necessary preparations for 
each device driver during the suspend phase. 
10. After each device enters sleep mode, an s2idle SMC command is sent to the Arm Trusted Firmware (ATF) to shut 
down the CPU core. This command will be intercepted by the Hypervisor, which will then suspend the corresponding 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
vCPU thread. Once Android’s sleep process is complete, the Hypervisor will update the recorded Android state from 
running to suspend, making it convenient for the Host OS to query the status through a node. 
11. After triggering Guest OS sleep, the Host OS side blocks and waits until it retrieves the suspend success of the two 
Guest OS from the node /sys/guest_os/android(tbox)/pm_state. 
12. After all Guest OS suspend, the Host OS reports key code 87 to trigger the display-related shutdown. Then, it checks 
the Wakelock status. If there is no any lock, it will triggers the Host OS Kernel Suspend Flow (echo mem > 
/sys/power/state). 
13. Upon executing the Host OS Kernel Suspend and completing the Device Suspend, an s2idle SMC command is sent 
to the ATF to shut down the CPU core. This command will be intercepted by the Hypervisor, which will then suspend 
the corresponding vCPU thread. Afterward, the virtual machine performs a backup, and the Hypervisor sends the 
s2idle command to the ATF again to actually shut down the physical CPU. 
14. In the ATF, before CPU0 executes the Wait For Interrupt (WFI) instruction, GPIO128 (AP2MCU) is pulled low to notify 
the MCU that the SoC has completed the Host OS and Guest OS Suspend Flow. 
15. Once the Arm-related hardware is shut down, the SPM (System Power Management MCU) takes over the system’s 
resources. It controls the DRAM to enter self-refresh mode, shuts down the 26M clock and VCORE, and notifies the 
PMIC to enter Low Power Mode. At this point, the entire sleep process is complete, and the system is in a low-power 
state, waiting for a wake-up event to occur. 
 
 Hypervisor Resume Flow 
“Resume Flow” is the opposite of “Suspend Flow”, referring to Figure 1-2: 
 
CONFIDENTIALA
MediaTek Proprietary and Confidential. © 2021 MediaTek Inc. All rights reserved.
MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved.
STR L+L+A Wakeup logic 
2
ATF CPUx ON
HW SoC        MCUSPM
GPIO1
GPIO128
GPIO35 GPIO35: MCU2AP
GPIO128: AP2MCU
Notify MCU
Yocto Userspace
Native Resume flow
Android Framework
Android Kernel
Car Power Management 
Service
Native Resume flow
Yocto
Kernel
Hypervisor Resume
vCPUx thread
State Manager
SW
Key Event Display ON
Power Management 
Service
Surface
Flinger
Vehicle 
hal
Car Power 
Policy
System Suspend
(disable)
HW
Composer
Car Event 
driver
Resume
vCPUx thread
Wake up
Guest OS
Input subsystem
1
2
3
4
5 6
7
9
10
11 12
13
ARM
/sys/guest_os/
android(tbox)/
pm_state
Get guest OS State
/sys/guest_os/
android(tbox)/
resume mbox
State Manager
Kernel 
Resume flow
Car Event 
driver
SoS Tbox IVI
Yocto
8
 
Figure 1-2. Hypervisor resume flow 
 
 
 
 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
Main process: 
1. After the MCU receives a wake-up event, it pulls up GPIO35 (MCU2AP). The SPM receives an External Interrupt (EINT) 
and sequentially activates the released resources, such as notifying the PMIC to exit Low Power Mode, turning on 
VCORE and 26M, and sending a command to notify DRAM to exit self-refresh. 
2. Power on CPU0, execute the CPU Resume process, then jump to the address set before Suspend, and start the system 
Resume process. 
3. Pull up GPIO128 to send a message to the MCU indicating that the SoC has woken up. (The timing of notifying the 
MCU can be adjusted as needed, such as waiting for Android Resume to complete before pulling up GPIO128). 
4. After the vCPUx thread in the Hypervisor is restored, it jumps to the Host OS Linux Kernel and then executes the 
Native Kernel Resume Flow, reporting the wake-up event through a Key Event. 
5. The SleepManager in SoS will decide whether to go back to sleep or continue the wake-up flow based on the event 
reported by the Input subsystem. For example, pulling up GPIO35 by the MCU will continue the wake-up flow. 
6. If it is a Key Event that can wake up the entire system, keyevent 87 is reported to resume Weston, and a wakelock is 
held to prevent the system from going back to sleep. 
7. Write to the node /sys/guest_os/android(tbox)/resume to trigger Guest OS wake-up. 
8. After receiving it, the Hypervisor resumes the vCPU0 thread. 
9. Enable Non-Boot CPUs, resume vCPU1~7 threads, and start the IVI and Tbox Kernel Resume Flow. 
10. Based on the CPMS architecture, there is no need to determine the keyevent; by default, all events can trigger the 
entire system to resume. 
11. On the Host OS side, the status of the two Guest OS (Android/Tbox) can be queried through the node 
/sys/guest_os/android(tbox)/pm_state using the Mailbox mechanism. If the Guest OS kernel Resume is 
completed, the related status will be updated to Running. 
12. On the android side, after receiving the wake-up event, the Car Power Management Service will disable System 
Suspend to prevent accidental sleep triggers. On the Tbox side, the SleepManager actively holds the wakelock. 
13. Notify the display-related modules to turn on. At this point, the entire wake-up process is complete, and human-
machine interaction can begin. 
 
1.3 Frequently Asked Questions/Troubleshooting 
 How to Determine if the System Has Successfully Entered Sleep Mode 
Screen-off might only indicate that the system has entered light sleep mode, which does not necessarily mean that it has 
successfully entered deep sleep mode. To determine if the system has successfully entered suspend mode, you need to 
check the kernel log. If the system has successfully entered suspend mode, the kernel log will stop printing. 
To enable more detailed debug log information for determining if the system has successfully entered suspend mode, you 
need to run the following commands. 
 
adb shell "echo 8 8 8 8 > /proc/sys/kernel/printk" 
adb shell "echo 1 > /sys/module/kernel/parameters/initcall_debug" 
adb shell "echo 1 > /proc/mtprintk" 
 
 
 
 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
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
 
 How to Identify Wakeup Sources 
Search for the keyword “suspend wake up by” in the kernel log to identify the wakeup source. 
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
[SPM] suspend wake up by  PCM_TIMER, timer_out = 65612 
 
 Wakeup Source Analysis 
Table 1-1 is a list of wakeup sources supported by the MT8676 platform. 
 
Table 1-1. MT8676 wakeup source list 
Name Control Bit Description Can it be Disabled 
R12_PCM_TIMER 0 Timer event for its timeout setting Y 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
Name Control Bit Description Can it be Disabled 
R12_KP_IRQ_B 2 Keypad pressed/released action been detected Y 
R12_APWDT_EVENT_B 3 RGU wakes up CPU in suspend mode. Y 
R12_APXGPT1_EVENT_B 4 AP GPT timer timeout event Y 
R12_CONN2AP_SPM_WAKEUP_B 5 Connectivity IC (Wi-Fi/BT/GPS) event Y 
R12_EINT_EVENT_B 6 EINT event  N 
R12_CONN_WDT_IRQ_B 7 Connectivity IC watchdog timeout event  Y 
R12_CCIF0_EVENT_B 8 MD to AP CCIF wakeup event Y 
R12_CCIF1_EVENT_B 9 MD to AP CCIF wakeup event Y 
R12_SSPM2SPM_WAKEUP_B 10 SSPM event Y 
R12_SCP2SPM_WAKEUP_B 11 SCP sensor event N 
R12_ADSP2SPM_WAKEUP_B 12 ADSP event Y 
R12_USBX_CDSC_B 14 USB event Y 
R12_USBX_POWERDWN_B 15 USB remote wakeup Y 
R12_SYS_TIMER_EVENT_B 18 System timer  N 
R12_EINT_EVENT_SECURE_B 19 EINT event  N 
R12_SCP_CIRQ_IRQ_B 22 SCP_CIRQ wakeup event Y 
R12_MD2AP_PEER_EVENT_B 23 MD event Y 
R12_MD1_WDT_B 25 MD1 watchdog timeout Y 
R12_REG_CPU_WAKEUP_B 28 Internal Wakeup N 
R12_APUSYS_WAKE_HOST_B 29 APUSYS event Y 
R12_PCIE_WAKEUP_EVENT_B 30 PCIe event Y 
R12_MSDC_WAKEUP_EVENT_B 31 MSDC event Y 
 
The wakeup sources in the list can be disabled through the following way, but only the wakeup sources marked as “Y” in 
the “Can it be Disabled” column can be disabled. 
 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
• Check which modules in the kernel are holding wakelocks 
 cat /sys/kernel/debug/wakeup_sources 
 
Observe the 5th column “active_since” in the output. The number that is non-zero and continuously increasing indicates 
the wakelock that is preventing the system from entering standby mode. 
 
For example, in Figure 1-3, the USB wakelock is blocking the system from entering standby mode. 
 
 
Figure 1-3. Wakelock dump 
 
The command needs to be entered via UART because plugging in a USB device can prevent the system from entering 
standby mode. 
 
 How to Analyze High Power Consumption during Sleep Mode 
• First check for frequent wakeup issues. If there are frequent wakeup issues, please refer to Section 1.3.3 to identify the 
wakeup sources. 
• If the system successfully enters sleep mode but the power consumption is still high, first check for any peripherals 
that may not be properly powered down. 
• If the high power consumption is traced to the MediaTek SoC, please provide logs to MediaTek for further analysis. 
 
 Hypervisor Debug Command 
1. Check the status of the IVI(Android) OS on the SoS side, while “running" indicates that Android is currently running, 
while “suspend” indicates that Android has been suspended. 
cat /sys/guest_os/android/pm_state  
 
2. Tigger the IVI(Android) OS to enter suspend mode on the SoS side. 
echo powerkey > /sys/guest_os/android/pm_state  
 
3. Trigger the IVI(Android) OS to resume on the SoS side. 
echo 0 > /sys/guest_os/android/resume 
  
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
4. Check the status of the Tbox OS on the SoS side, while “running" indicates that Tbox is currently running, while 
“suspend” indicates that Tbox has been suspended. 
cat /sys/guest_os/tbox/pm_state  
 
5. Tigger the Tbox OS to enter suspend mode on the SoSside. 
echo powerkey > /sys/guest_os/tbox/pm_state  
 
6. Trigger the Tbox OS to resume on the SoS side. 
echo 1 > /sys/guest_os/tbox/resume 
  
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
MT8676 Hypervisor Suspend & Resume 
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
# SRC0243 MT8676_Hypervisor_System_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_System_User_Manual_V1.1.pdf

SHA-256：ccd5b795d5d99a4025fbec2a577ea68db61c30aa10ece3c1c352a18ebf98eae8

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0243.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-11-19
MT8676 Hypervisor System User Manual 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-04 Kai Peng • Official release 
1.1 2024-11-19 Kai Peng 
• Added the descriptions of full virtualization L+A+L.  
• Added Section 1.2.3 Thyp sdk Prebuilt File  
• Added Section 0  
• Add Shared Folders 
• Added Section 1.5.1 Switch USB  
  
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 Hypervisor System ····················································································································································· 5 
1.1 Abbreviations ··························································································································································· 5 
1.2 System Architecture ················································································································································· 5 
 Project ··························································································································································· 6 
 Code Structure ·············································································································································· 7 
 Thyp sdk Prebuilt File ···································································································································· 7 
1.3 Compilation and Flashing ········································································································································· 9 
 Build Server ··················································································································································· 9 
 Compile Instructions ··································································································································· 10 
 Software Composition ································································································································ 12 
 Flashing Software ········································································································································ 13 
1.4 Customization························································································································································· 16 
 Adjust Virtual Machine Memory ················································································································· 16 
 Adjust Virtual Machine CPU ························································································································ 16 
 Add Shared Folders ····································································································································· 17 
1.5 Debugging Techniques ··········································································································································· 18 
 Switch USB ·················································································································································· 18 
 ADB ····························································································································································· 18 
 Query Virtual Machine Status ····················································································································· 19 
Exhibit 1 Terms and Conditions ········································································································································ 20 
 
List of Figures 
Figure 1-1. Full virtualization L+A+L architecture ······················································································································· 6 
Figure 1-2. Partial virtualization L+A+L architecture ·················································································································· 6 
Figure 1-3. Thyp SDK prebuilt files directory structure ·············································································································· 8 
Figure 1-4. Download SP_Flash_Tool ······································································································································· 14 
Figure 1-5. Load flash.xml ························································································································································ 15 
Figure 1-6. Flashing software ··················································································································································· 15 
Figure 1-7. L+A+L memory layout ············································································································································ 16 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 5 
Table 1-2. Yocto Hypervisor project ··········································································································································· 7 
Table 1-3. Hypervisor code ························································································································································· 7 
Table 1-4. Thyp SDK prebuilt files explanation ··························································································································· 8 
Table 1-5. Yocto build server requirements ······························································································································· 9 
Table 1-6. Android build server requirements ························································································································· 10 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
Table 1-7. SOS image file ·························································································································································· 12 
Table 1-8. UOS Android image file ··········································································································································· 13 
Table 1-9. UOS T-Box image file ················································································································································ 13 
Table 1-10. adb shell instruction ·············································································································································· 18 
 
 
 
  
 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
1 Hypervisor System 
The MT8676 Hypervisor SDK consists of three main components: Yocto, Android, and Thyp SDK. This chapter primarily 
introduces the system content related to Yocto and Android with the Hypervisor. For an introduction to the Yocto single 
system, please refer to the document MT8676_Yocto_System_User_Manual, and for the Android single system, please 
refer to the document MT8676_Android_System_User_Manual. This chapter includes content on system architecture, 
compilation and flashing, customization, debugging tools and techniques. 
 
1.1 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
SOS Service OS 
UOS User OS 
nebula The GoldenRiverTek hypervisor micro kernel 
 
1.2 System Architecture 
The MT8676 Hypervisor supports two architectures. One is the full virtualization L+A+L architecture, as shown in Figure 
1-1. The other is the partial virtualization L+A+L architecture, as shown in Figure 1-2. Both architectures consist of four 
main components. The first is the GoldenRiverTek Hypervisor and the Nebula microkernel. The second one is SOS, which 
acts as the host and primarily runs the hypervisor and backend virtualization drivers. The third one is UOS Android, which 
acts as the guest and primarily runs the frontend virtualization drivers and some passthrough hardware drivers. The fourth 
one is UOS T-Box, which acts as the guest and primarily runs the T-Box and GPS drivers. Both SOS and UOS T-Box are Linux 
systems, compiled through the Yocto build framework. UOS Android is an Android system. 
 
The main difference between the full virtualization architecture and the partial virtualization architecture is that modules 
such as APU, GPU, Camera, and Codec are changed from being virtualized to being directly passed through to UOS 
Android. 
 
MT8676 has only one USB hardware, so it can only be passed through to one operating system at a time. For the full 
virtualization architecture, it is passed through to the SOS by default. For the partial virtualization architecture, it is passed 
through to UOS Android by default. For the method to switch the USB, please refer to Section 1.5.1. 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
Nebula OS Guest (UOS Android)Host (SOS)
Hypervisor
Hardware
UOS VM Process
Micro Kernel
SOS VM Process
Touch
MDP
USB*
Display
GPIO
TF-A
ARCarBT
注释： passthrough virtual
Guest (UOS Tbox)
UART
I2C
SPI
UFS
conninfra
CLK
Etherne
t
PMIC
DVFS
Thermal
SMISensorAudio
Codec
Camera
GPU
SSPM
APU
Touch
MDP
USB*
Display
conninfr
a
virtio
console
I2C
SPI
virtio
blk
GPIO
CLK
vmnet
PMIC
DVFS
Thermal
SMISensor TboxAudio
Codec
Camera
GPU
APU
WiFi BT
CLK
USB*
Audio
DVFS
virtio
console
Sensor virtio 
blk
Tbox
vmnet
PMIC
Thermal
GPS
TBoxAPADMSClusterRVC AVM
USB* Only one system can use the USB. By default, it is passthrough to the SOS.
GPS
conninfr
a
GPIO
 
Figure 1-1. Full virtualization L+A+L architecture 
 
Nebula OS Guest (UOS Android)Host (SOS)
Hypervisor
Hardware
UOS VM Process
Micro Kernel
SOS VM Process
Touch
MDP
USB*
Display
GPIO
TF-A
ARCarBT
注释： passthrough virtual
Guest (UOS Tbox)
UART
I2C
SPI
UFS
conninfra
CLK
Etherne
t
PMIC
DVFS
Thermal
SMISensorAudio
SSPM
Touch
MDP
USB*
Display
conninfr
a
virtio
console
I2C
SPI
virtio
blk
GPIO
CLK
vmnet
PMIC
DVFS
Thermal
SMISensor TboxAudio
Codec
Camera
GPU
APU
WiFi BT
CLK
USB*
Audio
DVFS
virtio
console
Sensor virtio 
blk
Tbox
vmnet
PMIC
Thermal
GPS
TBoxAPADMSClusterRVC AVM
USB* Only one system can use the USB. By default, it is passthrough to the UOS Android.
GPS
conninfr
a
GPIO
 
Figure 1-2. Partial virtualization L+A+L architecture 
 
 Project 
Table 1-2 lists the Yocto project and Android project provided by the MT8676 Hypervisor SDK, with a total of two sets. It is 
important to note that the Yocto project and Android project correspond one-to-one and cannot be mixed. Yocto requires 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
two projects. In the following text, SOS refers to auto8676p1_64_hyp or auto8676p1_64_hyp_sos. UOS Android refers to 
auto8676p1_64_bsp_vm or auto8676p1_64_bsp_vm_tbox. UOS T-Box refers to auto8676p1_64_uos_tbox. 
 
Table 1-2. Yocto Hypervisor project 
Yocto (SOS) Yocto (UOS T-Box) Android (UOS Android) Explanation 
auto8676p1_64_hyp auto8676p1_64_uos_tbox auto8676p1_64_bsp_vm Full Virtualization. 
auto8676p1_64_hyp_sos  auto8676p1_64_uos_tbox auto8676p1_64_bsp_vm_tbox Partial Virtualization. 
 
 Code Structure 
The MT8676 Hypervisor is an extension based on the single Yocto system and single Android system, with some 
Hypervisor-related code added on top of the single system. Therefore, the code structure is exactly the same. For the code 
structure of the single system, please refer to the documents MT8676_Yocto_System_User_Manual and 
MT8676_Android_System_User_Manual. The full virtualization architecture and the partial virtualization architecture 
share the same codebase. 
 
Table 1-3. Hypervisor code 
System Path Explanation 
Yocto meta/meta-mediatek-mt8676-hyp The MT8676 Yocto virtualization layer includes some 
configuration files and bb files related to virtualization. 
Yocto src/kernel/modules/mt8676/virt/grt Virtualization drivers on the Yocto side 
Yocto prebuilt/hypervisor/grt_mt8676 The GoldenRiverTek thyp sdk prebuilt file 
Android vendor/mediatek/kernel_modules/virt Virtualization drivers on the Android side 
Android device/mediateksample/auto8676p1_64_bsp
_vm 
Configuration files for the Android auto8676p1_64_bsp_vm 
project 
Android device/mediateksample/auto8676p1_64_bsp
_vm_tbox 
Configuration files for the Android 
auto8676p1_64_bsp_vm_tbox project 
 
 Thyp sdk Prebuilt File 
The prebuilt files for the Thyp SDK are stored in the prebuilt/hypervisor/grt_mt8676 directory of the Yocto 
codebase. These mainly include the Nebula virtual machine image, the virtual machine manager program, and 
virtualization configuration files. The directory structure is shown in Figure 1-3. The auto8676p1_64_hyp directory contains 
files related to the full virtualization architecture, the auto8676p1_64_hyp_sos directory contains files related to the 
partially virtualization architecture, and the auto8676p1_64_uos_tbox directory contains configuration files for UOS T-Box. 
For the function and description of each file, please refer to Table 1-4. Except for gz.img, all other files are installed in the 
root file system of SOS. 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
 
Figure 1-3. Thyp SDK prebuilt files directory structure 
 
Table 1-4. Thyp SDK prebuilt files explanation 
File or Directory Explanation Path 
gz.img 
The firmware for the GoldenRiverTek Nebula virtual 
machine. The configuration file for SOS is packaged in 
gz.img. 
gz_a partition. 
nbl_vmm Virtual Machine Manager. For SOS, a UOS is a nbl_vmm 
process. /usr/bin 
vm_srv_cfg.pb.txt Virtual machine service configuration file. /vendor/etc/hyper_android 
nbl_vm_srv 
Virtual machine service program. It reads the 
configuration from the vm_srv_cfg_8676.pb.txt file and 
starts the nbl_vmm process based on the 
configuration. 
/usr/bin 
nbl_vm_srv.service A systemd service, used to start the nbl_vm_srv 
process. /usr/lib/systemd/system 
nbl_vm_pre.sh Used to execute some tasks before the virtual machine 
starts. /vendor/etc/hyper_android 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
File or Directory Explanation Path 
nbl_vm_srv_post.service A systemd service, used to execute some tasks after 
the virtual machine has started. /usr/lib/systemd/system 
nbl_vm_post_android.sh Used to execute some tasks after UOS Android has 
started. /vendor/etc/hyper_android 
nbl_vm_post_tbox.sh Used to execute some tasks after UOS T-Box has 
started. /vendor/etc/hyper_tbox 
nbl_vm_ctl 
Virtual machine control program. It can start and stop 
virtual machines, as well as query some basic 
information about the virtual machines. 
/usr/bin 
uos_alps_bootloader_lk2.pb.
txt 
Bootloader file for UOS Android. It is used to configure 
bootloader-related information. /vendor/etc/hyper_android 
uos_alps_pv8676.lua 
Configuration file for UOS Android virtual machine. It is 
used to configure the virtual machine's CPU, memory, 
interrupts, etc. 
/vendor/etc/hyper_android 
uos_tbox_bootloader_lk2.pb.
txt Bootloader file for UOS T-Box. /vendor/etc/hyper_tbox 
uos_tbox_pv8676.lua Configuration file for UOS T-Box virtual machine. /vendor/etc/hyper_tbox 
gpu_server GPU virtualization host-side handler. /usr/bin 
video_server vcodec virtualization host-side handler. /usr/bin 
virtiofsd virtio filesystem backend program. /usr/bin 
symbols Symbol files for storing nbl_vmm, nbl_vm_srv, 
nbl_vm_ctl, and other files, used for debugging. N/A 
 
1.3 Compilation and Flashing 
 Build Server 
Table 1-5 lists the requirements for the build host to compile MT8676 Yocto 5.0. Table 1-6 lists the requirements for the 
build host to compile MT8676 Android. 
 
Table 1-5. Yocto build server requirements 
Item Requirement 
Disk Space Not less than 300GB 
Memory Not less than 32GB 
Distribution Version Ubuntu 20.04, 22.04, etc., for specific versions refer to Supported Linux 
Distributions1. 
                                                                 
 
1 https://docs.yoctoproject.org/ref-manual/system-requirements.html#supported-linux-distributions  
 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
Item Requirement 
Build host tools Refer to Required Packages for the Build Host2. 
Git Version 1.8.3.1 or higher 
tar Version 1.28 or higher 
Python Version 3.8.0 or higher 
GNU Make Version 4.0 or higher 
 
Table 1-6. Android build server requirements 
Item Requirement 
Disk Space At least 250GB 
PC Memory At least 24GB 
Version Ubuntu 18.04 (Recommended) 
Tools which should be installed 
for compilation  Refer to http://source.android.com/source/initializing.html 
Git >1.9.1 
Shell >4.4.1 (Ubuntu18.04 default built-in version) (Recommended) 
Perl >5.26.1 (Ubuntu18.04 default built-in version) (Recommended) 
Python Python 2.7.17&Python 3.6.9 (Ubuntu18.04 default built-in version) (Recommended) 
GNU Make >4.1 (Ubuntu18.04 default built-in version) (Recommended) 
 
 Compile Instructions 
For the L+A+L architecture, you need to compile Yocto auto8676p1_64_hyp_sos, Yocto auto8676p1_64_hyp_uos_tbox, 
and Android auto8676p1_64_bsp_vm. The compilation instructions are as follows. Since some environment variables will 
be set during the compilation process, it is recommended to use three different terminals to compile the two Yocto 
projects and Android separately to avoid interference. To compile two different Yocto projects from the same codebase, a 
parameter is passed to the oe-init-build-env script to specify the name of the build directory. Additionally, the build target 
for auto8676p1_64_hyp_uos_tbox is mtk-core-image-auto8676-uos. 
 
The Yocto auto8676p1_64_hyp_sos build artifacts are located in the build-sos/tmp/deploy/auto8676p1_64_hyp_sos 
directory. The Yocto auto8676p1_64_hyp_uos_tbox build artifacts are located in the build-
uos/tmp/deploy/auto8676p1_64_uos_tbox directory. The Android build artifacts are located in the 
out/target/product/auto8676p1_64_bsp_vm_tbox/merged directory. 
 
After the compilation is complete, please copy the image files listed in Table 1-8 and Table 1-9 to the SOS build directory. 
 
# terminal 1，Yocto（SOS） auto8676p1_64_hyp 
cd path/to/yocto-codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-hyp/conf/templates/auto8676p1_64_hyp 
                                                                 
 
2 https://docs.yoctoproject.org/ref-manual/system-requirements.html#required-packages-for-the-build-host  
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
source meta/poky/oe-init-build-env build-sos 
bitbake mtk-core-image-auto8676 
 
# terminal 2，Yocto（UOS Tbox） auto8676p1_64_uos_tbox 
cd path/to/yocto-codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-
hyp/conf/templates/auto8676p1_64_uos_tbox 
source meta/poky/oe-init-build-env build-tbox 
bitbake mtk-core-image-auto8676-uos 
 
# terminal 3，Android auto8676p1_64_bsp_vm 
cd path/to/android-codebase 
python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py --run 
full_auto8676p1_64_bsp_vm-userdebug 
 
For the partial virtualization architecture, you need to compile Yocto (SOS) auto8676p1_64_hyp_sos, Yocto (UOS T-Box) 
auto8676p1_64_uos_tbox, and Android (UOS Android) auto8676p1_64_bsp_vm_tbox. The compilation instructions are as 
follows. 
 
The compilation outputs for SOS are located in the build-sos/tmp/deploy/images/auto8676p1_64_hyp_sos 
directory. The compilation outputs for UOS T-Box are located in the build-
uos/tmp/deploy/images/auto8676p1_64_uos_tbox directory. The compilation outputs for Android are located in 
the out/target/product/auto8676p1_64_bsp_vm_tbox/merged directory. 
 
After the compilation is completed, please copy the image files listed in Table 1-8 and Table 1-9 to the SOS build directory. 
 
// terminal 1，Yocto（SOS） auto8676p1_64_hyp_sos 
cd path/to/yocto-codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-
hyp/conf/templates/auto8676p1_64_hyp_sos 
source meta/poky/oe-init-build-env build-sos 
bitbake mtk-core-image-auto8676 
 
// terminal 2，Yocto auto8676p1_64_uos_tbox 
cd path/to/yocto-codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-
hyp/conf/templates/auto8676p1_64_uos_tbox 
source meta/poky/oe-init-build-env build-tbox 
bitbake mtk-core-image-auto8676-uos 
 
// terminal 3，Android auto8676p1_64_bsp_vm_tbox 
cd path/to/android-codebase 
python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py --run 
full_auto8676p1_64_bsp_vm_tbox-userdebug 
 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
 Software Composition 
Table 1-7 lists the image files for SOS, Table 1-8 lists the image files for UOS Android, and Table 1-9 lists the image files for 
UOS T-Box. 
 
Table 1-7. SOS image file 
File Name Partition Explanation 
MT6897_Android_scatter.xml N/A Partition table, compiled by Yocto ptgen-v2.bb. 
download_agent/DA_BR.bin N/A Download agent, used for flashing. Compiled by collect.bb. 
bl2.img preloader_a 
preloader_b Yocto Bootloader, compiled by Yocto lk2.bb. 
modem.img modem_a Modem firmware, compiled by Yocto modem.bb. 
spmfw.img spmfw_a System power management firmware, compiled by collect.bb. 
mcf_ota.img mcf_ota_a Compiled by Yocto collect.bb. 
pi_img.img pi_img_a Compiled by Yocto collect.bb. 
dpm.img dpm_a Compiled by Yocto collect.bb. 
scp.img scp_a System Companion Processor firmware, compiled by Yocto tinysys-
scp.bb 
ccu.img ccu_a Camera Control Unit firmware, compiled by collect.bb 
vcp.img vcp_a VCP firmware, compiled by tinysys-vcp.bb. 
sspm.img sspm_a Secure System Power Manager firmware, compiled by collect.bb. 
mcupm.img mcupm_a Power/performance manager firmware, compiled by collect.bb. 
gpueb.img gpueb_a GPU firmware, compiled by tinysys-gpueb.bb. 
apusys.img apusys_a APU firmware, compiled by tinysys-apusys.bb. 
gz.img gz_a GoldenRiverTek nebula hypervisor firmware, compiled by nbl-vmm-
hyp.bb. 
connsys_bt.img connsys_bt_a BT firmware, compiled by collect.bb. 
connsys_wifi.img connsys_wifi_a WIFI firmware, compiled by collect.bb. 
connsys_gnss.img connsys_gnss_a GNSS firmware, compiled by gps-fw_1.0.0.bb. 
logo.img logo_a Logo, compiled by makelogo.bb. 
audio_dsp.img audio_dsp_a Audio DSP firmware, compiled by collect.bb. 
system.ext4 system Yocto root filesystem, compiled by mtk-core-image-auto8676.bb 
userdata.ext4 yocto-userdata Yocto /data partition, compiled by mkusrdata.bbclass. 
bl2-an.img bl2-an Android bootloader, compiled by bl2-an.bb. 
yocto-boot.img yocto-boot_a 
Linux kernel in FIT format, including Kernel img, dtb, and initramfs. 
Compiled by linux-mtk-extension_6.1.bb. The initramfs is compiled 
by core-image-minimal-initramfs.bb. 
 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
Table 1-8. UOS Android image file 
File Name Partition Explanation 
vbmeta.img vbmeta_a The meta data for the system and vendor layers, compiled by Android. 
vbmeta_system.img vbmeta_system_a The meta data for the system layer, compiled by Android. 
vbmeta_vendor.img vbmeta_vendor_a The meta data for the vendor system layer, compiled by Android. 
boot.img boot_a The Android kernel image, compiled by Android. 
vendor_boot.img vendor_boot_a The Android ramdisk ko image, compiled by Android. 
init_boot.img init_boot_a The Android init image, compiled by Android. 
dtbo.img dtbo_a The Android dtb overlay image, compiled by Android. 
tee.img tee_a The ATF, compiled by Android. 
super.img super The Android super image, compiled by Android. 
userdata.img userdata The Android userdata partition, compiled by Android. 
 
Table 1-9. UOS T-Box image file 
File Name Partition Explanation 
bl2-tbox.img bl2-tbox_a UOS T-Box bootloader, compiled by Yocto lk2.bb.  
boot_uos_tbox.img boot_uos_tbox_a The UOS T-Box Linux kernel in fit format, including the kernel image 
and dtb, compiled by linux-mtk-extension-uos_6.1.bb. 
system_uos_tbox.ext4 system_uos_tbox The UOS T-Box root filesystem, compiled by Yocto mtk-core-image-
auto8676-uos.bb. 
userdata_uos_tbox.ext4 userdata_uos_tbox The UOS T-Box /data partition, compiled by Yocto mkusrdata.bbclass. 
 
 Flashing Software 
The flashing software requires a Type-C cable and the SP_Flash_Tool tool. If you do not have the SP_Flash_Tool tool, please 
visit the Online3 website to download it. After opening the webpage, search for SP_Flash_Tool and download the latest 
version, as shown in Figure 1-4. After the download is complete, extract the downloaded archive. 
 
                                                                 
 
3 https://online.mediatek.com/apps/tool/  
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
 
Figure 1-4. Download SP_Flash_Tool 
 
First, connect the platform to the computer using a Type-C cable. Then double-click on 
SP_Flash_Tool_V6/SPFlashToolV6.exe to open the burning tool. For the first step, select the Download-XML file, click the 
choose button in the top right corner, and select the download_agent/flash.xml file under the software package. For the 
second step, select Format All + Download from the dropdown menu below the Download button, as shown in Figure 1-5. 
For the third step, ensure that the platform is powered off. For the fourth step, click the Download button. For the fifth 
step, hold down the download key (KPCOL0, SW907) without releasing to power on the platform, and the burning will 
automatically start, as shown in Figure 1-6. At this point, you can release the download key. 
If you encounter an error popup, first power off the platform and click the stop button to exit the download mode. Make 
sure the platform is completely powered off before attempting to burn again. 
 
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
MT8676 Hypervisor System 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
1.4 Customization 
 Adjust Virtual Machine Memory 
Figure 1-7 shows the memory layout of the L+A+L architecture. The configuration file meta/meta-mediatek-mt8676-
hyp/conf/common/memory-size.inc in the Yocto codebase determines the memory size for each operating system. The 
memory size for SOS is determined by the variable SOS_DRAM_SIZE, with a default value of 6 GB. The memory size for UOS 
T-Box is determined by the variable UOS_TBOX_DRAM_SIZE, with a default value of 1 GB. UOS Android uses all the 
remaining memory and is not controlled by any specific variable. On the public platform, the total physical memory is 
16GB, so the memory for UOS Android is 9GB. It is important to note that some modules will request reserved memory in 
the bootloader, and this memory is allocated from SOS_DRAM_SIZE. To ensure the normal operation of SOS, it is 
recommended that SOS_DRAM_SIZE not be less than 2 GB. 
 
# SOS Yocto memory size 
SOS_DRAM_SIZE = "0x180000000" 
 
# for 3os 
UOS_TBOX_DRAM_SIZE = "0x40000000" 
 
SOS UOS Android
SOS_DRAM_SIZE uos android dram size
UOS Tbox
UOS_TBOX_DRAM_SIZE
 
Figure 1-7. L+A+L memory layout 
 
 Adjust Virtual Machine CPU 
The number of CPUs for the virtual machine and their binding relationship with the physical CPUs are determined by the 
virtual machine’s configuration file. Please refer to Table 1-4 for the paths of the virtual machine configuration files. In the 
following example configuration, a total of 8 vCPUs are allocated to the virtual machine. The array pCPUs determines the 
binding relationship between physical CPUs and virtual CPUs. The index represents the vCPU, and the value represents the 
pCPU. For instance, vCPU0 is bound to pCPU3, vCPU1 is bound to pCPU1, vCPU2 is bound to pCPU2, vCPU3 is bound to 
pCPU0, and so on. Please ensure that the number of CPUs equals the length of the pCPUs array; otherwise, the virtual 
machine will fail to start. On the MT8676 platform, there are three CPU clusters in total: pCPU0~pCPU3 belong to the same 
cluster, pCPU4~pCPU6 belong to another cluster, and pCPU7 belongs to the third cluster. Do not bind CPUs across different 
clusters, as this will prevent the CPUs from performing optimally. 
 
--  cpus 
uos_config:setCpus(8) 
--************************************************************** 
 
--  physical-cpus 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
Pcpus = {3, 1, 2, 0, 4, 5, 6, 7} 
for i = 1, #Pcpus do 
    uos_config:setBindcpus(Pcpus[i]) 
end 
--************************************************************** 
 
 Add Shared Folders 
If you want to share a folder from SOS to UOS, you can achieve this through the virtio filesystem. The following are the 
implementation steps. For the configuration file paths mentioned below, please refer to Table 1-4. 
 
Step 1: Modify vm_srv_cfg.pb.txt to add the virtiofsd backend program for the target UOS. For example, the following 
sample code adds a virtiofsd backend program to UOS T-Box. The shared-dir parameter is used to specify the shared folder, 
and the socket-path and tag parameters will be used later. 
 
vmrecords { 
  name: "tbox" 
  …… 
 
  backends { 
    exec: "virtiofsd" 
    args: "--socket-path=/tmp/virtiofs_tbox_socket0" 
    args: "--shared-dir=/mnt/vendor/nvdata" 
    args: "--tag=tbox_nvdata" 
    args: "--sandbox=none" 
    args: "--modcaps=+sys_admin" 
  } 
} 
 
Step 2: Modify the UOS configuration file and add the following code. The first parameter is the tag, and the second 
parameter is the socket path. Please refer to the values from Step 1 for these two parameters. Here, take UOS T-Box as an 
example, and you need to modify the uos_tbox_pv8676.lua file. 
 
uos_config:setFs("tbox_nvdata", "/tmp/virtiofs_tbox_socket0") 
 
Step 3: Power off and restart the entire system. After UOS has fully started, enter the UOS shell. Execute the following 
command to test the mount. The third parameter tbox_nvdata is the tag parameter set in Step 1. If the mount is 
successful, it indicates that the folder sharing is successful. If it fails, go back and check Step 1 and Step 2. 
 
mkdir -p /tmp/test_mount 
mount -t virtiofs tbox_nvdata /tmp/test_mount 
 
Step 4: Set up auto-mount on startup. For UOS Android, modify the 
device/mediateksample/<project>/init.project.rc file. For UOS T-Box, modify the meta/meta-mediatek-
mt8676-hyp/recipes-core/base-files/auto8676p1_64_uos_tbox/fstab file. 
 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
1.5 Debugging Techniques 
For debugging techniques related to Yocto, please refer to the document MT8676_Yocto_System_User_Manual. For 
debugging techniques related to Android, please refer to the document MT8676_Android_System_User_Manual. This 
section will only introduce debugging techniques related to the Hypervisor. 
 
 Switch USB 
The MT8676 has only one USB hardware, so only one operating system can use the USB at a time. For a fully virtualized 
architecture, the USB is passed through to the SOS by default. For a partially virtualized architecture, the USB is passed 
through to the UOS Android by default. You can execute one of the following commands to switch the USB to the specified 
system. The commands can be executed on any system. If executing them on UOS Android, please switch to the root user. 
After executing the command, you need to power off and restart the system for the settings to take effect. 
 
# switch to SOS 
sysenv_test write USB_SWITCH Y 
# switch to UOS Android 
sysenv_test write USB_SWITCH A 
# switch to UOS Tbox 
sysenv_test write USB_SWITCH T 
 
 ADB 
The operating system with the USB uses the physical adb. The other two systems use network ADB. Table 1-10 lists the 
commands to enter the ADB shell for each system. For example, in a fully virtualized architecture, the USB is assigned to 
the SOS by default, so you need to use the command in the first row. 
Table 1-10. adb shell instruction 
USB SOS UOS Android UOS T-Box 
SOS adb -d shell 
adb -d forward tcp:7666 tcp:6666 
adb connect 127.0.0.1:7666 
adb -s 127.0.0.1:7666 shell 
adb -d forward tcp:7667 tcp:6667 
adb connect 127.0.0.1:7667 
adb -s 127.0.0.1:7667 shell 
UOS 
Android 
adb -d forward tcp:7665 tcp:6665 
adb connect 127.0.0.1:7665 
adb -s 127.0.0.1:7665 shell 
adb -d shell 
adb -d forward tcp:7667 tcp:6667 
adb connect 127.0.0.1:7667 
adb -s 127.0.0.1:7667 shell 
UOS T-
Box 
adb -d forward tcp:7665 tcp:6665 
adb connect 127.0.0.1:7665 
adb -s 127.0.0.1:7665 shell 
adb -d forward tcp:7666 tcp:6666 
adb connect 127.0.0.1:7666 
adb -s 127.0.0.1:7666 shell 
adb -d shell 
 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
 Query Virtual Machine Status 
On the SOS, execute the command cat /sys/guest_os/android/pm_state to query the status of UOS Android. 
Execute the command cat /sys/guest_os/tbox/pm_state to query the status of UOS T-Box. 
 
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
MT8676 Hypervisor System 
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
# SRC0244 MT8676_Hypervisor_T-Box_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_T-Box_User_Manual_V1.1.pdf

SHA-256：65f0b3b1b2de428a064b2557ee7f7fb06fda0647bf55ec9fecbac0d4f5c2abef

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0244.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-12-06
MT8676 Hypervisor T-Box User Manual 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-13 Yali Wu Official release 
1.1 2024-12-06 Yali Wu Modified Figure 1-1. Hypervisor T-Box architecture  
 
  
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 T-Box ·········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 T-Box Abbreviations ······································································································································ 4 
1.2 Architecture/Process Overview ································································································································ 4 
 T-Box Architecture ········································································································································· 4 
 T-Box API Usage ············································································································································· 5 
1.3 Frequently Asked Questions/Troubleshooting ······································································································· 27 
 SIM/CALL/SMS/Telephony Network Tips ···································································································· 27 
 Data Tips ····················································································································································· 28 
 Network Tips ··············································································································································· 28 
 IMS Tips ······················································································································································· 28 
Exhibit 1 Terms and Conditions ········································································································································ 29 
 
 
List of Figures 
Figure 1-1. Hypervisor T-Box architecture ·································································································································· 4 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 4 
Table 1-2. Modem state and IMEI interface description ············································································································ 5 
Table 1-3. SIM interface description ·········································································································································· 5 
Table 1-4. Telephony NW interface description ························································································································· 9 
Table 1-5. Data interface description ······································································································································· 13 
Table 1-6. Call module interface description ···························································································································· 20 
Table 1-7. Call interface description ········································································································································· 22 
Table 1-8. IMS interface description ········································································································································ 23 
Table 1-9. eCall control interface description ··························································································································· 24 
Table 1-10. AT blacklist interface description ··························································································································· 26 
Table 1-11. MIPC keep alive interface description ··················································································································· 27 
 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
1 T-Box 
1.1 Overview 
 Brief Introduction 
This section introduces the Hypervisor T-Box architecture, API usage and precautions. 
 
 T-Box Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
API Application Programming Interface 
APN Access Point Name 
T-Box Telematics-BOX 
 
1.2 Architecture/Process Overview 
 T-Box Architecture 
 
Figure 1-1. Hypervisor T-Box architecture 
 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
 T-Box API Usage 
1.2.2.1 Modem State/IMEI Interface and Call Sequence Description 
All other T-Box APIs require modem ready to work properly except ML_GetModemStat. 
 
Table 1-2. Modem state and IMEI interface description 
Interface/Struct Description 
Int ML_GetModemStat(char *stat, uint32_t statlen) Get modem state, stat will return “ready” if modem has boot 
up success. 
Int ML_GetImei(char* imei, size_t imeiLen) Get IMEI of device. 
On success, 0 is returned. On error, -1 is returned.  
 
1.2.2.2 SIM Interface and Call Sequence Description 
All other SIM APIs require SIM present to work properly except ML_GetCardStatus. 
 
Table 1-3. SIM interface description 
Interface/Struct Description 
typedef enum 
{ 
    E_ML_SIM_CARD_STATE_UNKNOWN                     = 
0xB01,    /**< Card state unknown. */ 
    E_ML_SIM_CARD_STATE_ABSENT                      = 0xB02,    /**< 
Card is absent. */ 
    E_ML_SIM_CARD_STATE_PRESENT                     = 0xB03,    /**< 
Card is present. */ 
    E_ML_SIM_CARD_STATE_ERROR_UNKNOWN               = 
0xB04,    /**< Unknown error state. */ 
    E_ML_SIM_CARD_STATE_ERROR_POWER_DOWN            = 
0xB05,    /**< Power down. */ 
    E_ML_SIM_CARD_STATE_ERROR_POLL_ERROR            = 
0xB06,    /**< Poll error. */ 
    E_ML_SIM_CARD_STATE_ERROR_NO_ATR_RECEIVED       = 
0xB07,    /**<  Failed to receive an answer to reset.  */ 
    E_ML_SIM_CARD_STATE_ERROR_VOLT_MISMATCH         = 
0xB08,    /**< Voltage mismatch. */ 
    E_ML_SIM_CARD_STATE_ERROR_PARITY_ERROR          = 
0xB09,    /**< Parity error. */ 
    E_ML_SIM_CARD_STATE_ERROR_SIM_TECHNICAL_PROBLEMS= 
0xB0A,    /**< Card returned technical problems. */ 
}E_ML_SIM_CARD_STATE_TYPE_T;  /**< Card state. */ 
SIM card status structure. Mainly focus on 
PRESENT , which means the card has been 
recognized, and ABSENT , which means the SIM 
card has not been recognized. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
Int32_t ML_Sim_GetCardStatus(ML_SIM_CARD_STATUS_INFO_T 
*pvsSimStatus) 
Get SIM state. The value of pvsSimStatus will 
return “present” when SIM card is present. 
Function return value is int type. On success, 0 is 
returned. On error, -1 is returned. 
Int ML_SIM_GetICCID(char *iccid, size_t iccidLen) Get the SIM card ICCID. ICCID (Integrated Circuit 
Card Identifier) is a number used to uniquely 
identify each SIM card. 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
Int ML_SIM_GetMsisdn(char *msisdn, size_t msisdnLen) Get the SIM card Msisdn. Here it refers to the 
phone number. 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
Int ML_SIM_GetImsi(char *imsi, size_t imsilen) Get the SIM card IMSI. IMSI (International Mobile 
Subscriber Identity) is a number used to uniquely 
identify a user in a mobile network. 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
Int ML_SIM_GetMccMnc(char *mcc, size_t mccLen, char*mnc, 
size_t mncLen) 
Get SIM card mccmnc. MCCMNC (Mobile Country 
Code and Mobile Network Code) is a number used 
to uniquely identify a mobile network operator. 
MCCMNC consists of two parts: MCC (Mobile 
Country Code) and MNC (Mobile Network Code). 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
int32_t ML_Sim_GetCardFullStatus  
( ML_SIM_CARD_FULL_STATUS_INFO_T *  pvsSimStatus ) 
Get complete SIM card information. 
The returned structure contains card status, pin 
status, SIM app information, etc. 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
typedef struct  
{  
  E_ML_CardState card_state;  
  E_ML_PinState  universal_pin_state;             /* applicable to USIM 
and CSIM: E_ML_PINSTATE_xxx */  
  int           gsm_umts_subscription_app_index; /* value < 
E_ML_CARD_MAX_APPS, -1 if none */  
  int           cdma_subscription_app_index;     /* value < 
E_ML_CARD_MAX_APPS, -1 if none */  
  int           ims_subscription_app_index;      /* value < 
E_ML_CARD_MAX_APPS, -1 if none */  
  int           num_applications;                /* value <= 
E_ML_CARD_MAX_APPS  E_ML_AppStatus 
applications[E_ML_CARD_MAX_APPS];  
} ML_SIM_CARD_FULL_STATUS_INFO_T; 
SIM card detailed information structure. 
int ML_SIM_ChangePin  ( int32_t  slotIndex,   PIN1: Used to protect the SIM card from 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
  const char *  oldPin,   
  const char *  newPin,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
unauthorized use. 
PIN2: Used to protect specific SIM card functions, 
such as fixed dialing numbers. 
PUK: Used to unlock a SIM card locked by PIN1. 
PUK2: Used to unlock functions locked by PIN2. 
 
Modify the pin value. 
Note: You need to lock the card before changing 
the pin. 
 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
 
Output parameter: errorCode; On error, errorCode 
is returned. For errorCode, refer to the RIL_Errno 
enumeration in ril.h. 
 
Output parameter: retryTimes; The number of 
attempts, the default is 3, and -1 is returned when 
the pin input is wrong. 
int ML_SIM_ChangePin2  ( int32_t  slotIndex,   
  const char *  oldPin2,   
  const char *  newPin2,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 )    
Modify the value of pin2. 
Note: You need to lock before changing pin2. 
Int return value: On success, 0 is returned. On 
error, -1 is returned. 
Output parameter: errorCode; On error, errorCode 
is returned. For errorCode, refer to the RIL_Errno 
enumeration in ril.h. 
Output parameter: retryTimes; The number of 
attempts, the default is 3, and -1 is returned when 
the pin input is wrong. 
int ML_SIM_EnterPin  ( int32_t  slotIndex,   
  const char *  pin,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
Unlock the pin. 
Note: The pin can only be unlocked after it is 
locked. 
Int return value: On success, 0 is returned. On 
error, -1 is returned. 
Output parameter: errorCode; On error, errorCode 
is returned. For errorCode, refer to the RIL_Errno 
enumeration in ril.h. 
Output parameter: retryTimes; The number of 
attempts, the default is 3, and -1 is returned when 
the pin input is wrong. 
int ML_SIM_EnterPin2  ( int32_t  slotIndex,   
  const char *  pin2,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
Unlock pin2. 
Note: Pin2 can only be unlocked after locking 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
Output parameter: errorCode; On error, errorCode 
is returned. For errorCode, refer to the RIL_Errno 
enumeration in ril.h. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
Output parameter: retryTimes; The number of 
attempts, the default is 3, and -1 is returned when 
pin2 input is wrong. 
int ML_SIM_EnterPuk  ( int32_t  slotIndex,   
  const char *  puk,   
  const char *  pin,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
Unlock PUK. Used to unlock a SIM card locked by 
PIN1. When the user enters the wrong PIN1 for 
more than a certain number of times, the SIM card 
will be locked. At this time, you need to enter the 
PUK code to unlock and reset PIN1. 
Note: You need to lock before you can unlock puk 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
Output parameter: errorCode; On error, errorCode 
is return. For errorCode, refer to the RIL_Errno 
enumeration in ril.h. 
Output parameter: retryTimes; The number of 
attempts, the default is 3, and -1 is returned when 
puk is entered incorrectly. 
int ML_SIM_EnterPuk2  ( int32_t  slotIndex,   
  const char *  puk2,   
  const char *  pin2,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 )   
Unlock PUK2. Used to unlock a SIM card locked by 
PIN2. When the user enters the wrong PIN2 for 
more than a certain number of times, the SIM card 
will be locked. At this time, you need to enter the 
PUK code to unlock and reset PIN2. 
Note: You need to lock before you can unlock puk 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
Output parameter: errorCode; On error, errorCode 
is return. For errorCode, refer to the RIL_Errno 
enumeration in ril.h. 
Output parameter: retryTimes; The number of 
attempts, the default is 3, and -1 is returned when 
puk2 is entered incorrectly. 
int ML_SIM_SetFacilityLock  ( int32_t  slotIndex,   
  const char *  facility,   
  int32_t  lockState,   
  const char *  password,   
  int32_t  serviceClass,   
  const char *  appId,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
Set the pin lock state. 
Note: This can only be set when the device is 
unlocked. If this function is called when the device 
is locked, an error will be returned. 
Input parameters: 
Facility: device type 
LockState: 1: locked 0: unlocked 
Int return value: On success, 0 is returned. On 
error, -1 is returned. 
int ML_SIM_IccCloseLogicalChannelBySlot  ( int32_t  slotIndex,   
  int32_t  channel   
 )   ) 
Close the IO logical channel. 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
int ML_SIM_IccOpenLogicalChannelBySlot  ( int32_t  slotIndex,   
  const char *  aid,   
  int32_t  p2,   
  int32_t  channel   
 )    
Open IO logical channel. 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
int ML_SIM_IccTransmitApduLogicalChannelBySlot  ( int32_t  
slotIndex,   
  int32_t  channel,   
  int32_t  cla,   
  int32_t  instruction,   
  int32_t  p1,   
  int32_t  p2,   
  int32_t  p3,   
  const char *  data   
 ) 
Send apdu command. 
Input parameters: 
int32_t channel : logical channel 
int32_t cla: Class byte of APDU command 
int32_t instruction: Instruction byte of APDU 
command. 
int32_t p1, 
int32_t p2, 
int32_t p3, 
Refers to the parameters of APDU command. Used 
to further specify the operation of the command 
const char * data Data field of APDU command 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
int ML_SIM_SetCardPower  ( int32_t  CardPowerState ) Set the SIM card power state, that is, reset the SIM 
card. 
Input parameters: 
int32_t CardPowerState 0: power off 1: power on 
2: pass through mode 
int return value: On success, 0 is returned. On 
error, -1 is returned. 
 
1.2.2.3 Telephony NW Interface and Call Sequence Description 
Table 1-4. Telephony NW interface description 
Interface/Struct Description 
typedef enum 
{ 
    E_ML_NW_PS_UNKNOWN          = 0x00, 
    E_ML_NW_PS_ATTACHED         = 0x01, 
    E_ML_NW_PS_DETACHED         = 0x02, 
}E_ML_NW_PS_REG_STATE_TYPE_T; 
Struct of PS registration state. 
typedef enum 
{ 
    E_ML_NW_CS_UNKNOWN          = 0x00, 
    E_ML_NW_CS_ATTACHED         = 0x01, 
    E_ML_NW_CS_DETACHED         = 0x02, 
}E_ML_NW_CS_REG_STATE_TYPE_T; 
Struct of CS registration state. 
int ML_GetNetState( 
E_ML_NW_PS_REG_STATE_TYPE_T * ps,  
E_ML_NW_CS_REG_STATE_TYPE_T * cs  
) 
Get CS/PS registration state. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
Notice: This interface should be used after SIM present. 
int32_t ML_GetOperatorCode ( Get operator name. Value of op_code is “1” when sim operator is 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
uint8_t * op_code 
) 
CU. Value of op_code is “0” when SIM operator is CMCC. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
Notice: This interface should be used after SIM present. 
typedef enum 
{ 
    E_ML_NW_RAT_GSM                     = 0, 
    E_ML_NW_RAT_UTRAN                   = 2, 
    E_ML_NW_RAT_GSMW_EGPRS              = 3, 
    E_ML_NW_RAT_UTRANW_HSDPA            = 4, 
    E_ML_NW_RAT_UTRANW_HSUPA            = 5, 
    E_ML_NW_RAT_UTRANW_HSDPA_AND_HSUPA  = 6, 
    E_ML_NW_RAT_E_UTRAN                 = 7, 
#ifdef SPM_TELEPHONY_NR_SUPPORT 
    E_ML_NW_RAT_NR                      = 8, 
#endif 
}E_ML_NW_RADIO_ACCESS_TYPE_T; 
Struct of radio access type. 
int ML_GetRadioAccessType ( 
E_ML_NW_RADIO_ACCESS_TYPE_T * access_type 
) 
Get radio access type of network registered. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
Notice: This interface should be used after SIM present. 
int ML_GetSignalStrength ( 
int8_t * sig_level 
) 
 
Get signal strength level. Sig_level: 0~4. For signal level thresholds, 
refer to AOSP default classification. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
Notice: This interface should be used after SIM present. 
int ML_SetAirplaneMode ( 
uint8_t on_off 
) 
 
Set airplane mode. Input value “on_off” will be set to 1 if airplane 
on. Input value “on_off” will be set to 0 if airplane off. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
Notice: This interface should be used after SIM present. 
typedef void 
(*ml_signal_strength_cb_t)(ML_SignalStrength *state); 
Signal strength call back function. 
int ML_SignalStregthInit ( 
ml_signal_strength_cb_t evt_cb 
) 
Init signal strength call back function. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
typedef enum 
{ 
    E_ML_AUTO = 0, 
    E_ML_2GONLY = 1, 
    E_ML_3GONLY = 2, 
    E_ML_4GONLY = 3, 
#ifdef SPM_TELEPHONY_NR_SUPPORT 
Struct of network mode. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
    E_ML_5GONLY = 4, 
    E_ML_5GAUTO = 5, 
    E_ML_5G4GAUTO = 6, 
#endif 
}ml_nw_net_mode_e; 
int ML_SetNetMode ( 
ml_nw_net_mode_e mode 
) 
Set network mode. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int ML_GetNetMode ( 
ml_nw_net_mode_e * mode 
) 
Get network mode. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int ML_GetFullSignalStrength  ( int  slot_id,   
  ML_SignalStrength *  fullMsg   
 ) 
Get all signal strength information. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int getAvailableNetworksWithActAsync  ( int  slot_id ) Scans for available networks with ACT Response function is 
ML_InitAvailableNetworksWithActResponseCb() 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int getCellInfoListAsync  ( int  slot_id ) Request all of the current cell information known to the radio. The 
radio must return a list of all current cells, including the neighboring 
cells. If for a particular cell information isn't known then the 
appropriate unknown value will be returned. Response function is 
ML_getCellInfoListResponseCb() 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int ML_getCellInfoListResponseCb  ( int32_t  slot_id,   
  ml_get_cell_info_list_response  response   
 ) 
Response ML_getCellInfoListResponseCb of getCellInfoListAsync   
int32_t getDataRegistrationState  ( int32_t  slot_id ) Request current data registration state. Response function is 
ML_getDataRegistrationStateResponseCb() 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int ML_getDataRegistrationStateResponseCb  ( int32_t  
slot_id,   
  ml_get_data_registration_state_response  response   
 ) 
Response getDataRegistrationStateResponseCb of 
getDataRegistrationState 
int32_t getNetworkSelectionMode  ( int32_t  slot_id,   
  ML_NetworkSelectionMode *  mode   
 ) 
Query current network selection mode. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
int32_t getNitzTime  ( int32_t  slot_id,   
  char **  nitzTime,   
  int32_t  tz_valid   
 ) 
acquire NITZ information (UTC time and time zone). need free 
nitzTime after used asprintf(&nitzTime, 
"%02d/%02d/%02d,%02d:%02d:%02d%+03d,%d", pNitzInfo->year 
% 100, pNitzInfo->month, pNitzInfo->day, pNitzInfo->hour, 
pNitzInfo->minute, pNitzInfo->second, pNitzInfo-
>time_zone_offset_minutes / 15, pNitzInfo-
>daylight_saving_offset_minutes / 60); 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int getOperatorSync  ( int  slot_id,   
  char **  longName,   
  char **  shortName,   
  char **  numeric   
 ) 
Request current operator ONS or EONS. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int setUsageSetting  ( int  slot_id,   
  int  usageSeting   
 )   
Set the UE usage setting for data/voice centric usage. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int getUsageSetting  ( int  slot_id,   
  int *  usageSetting   
 )   
Get the UE usage setting for data/voice centric usage. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int32_t getVoiceRegistrationState  ( int32_t  slot_id ) Request current voice registration state. Response function is 
ML_getVoiceRegistrationStateResponseCb() 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int ML_getVoiceRegistrationStateResponseCb  ( int32_t  
slot_id,   
  ml_get_voice_registration_state_response  response   
 ) 
Response function of getVoiceRegistrationState   
int ML_CsNetworkInit  ( int32_t  slot_id,   
  ml_cs_network_change_cb_t  evt_cb   
 )   
Initialization network module, and callback function registered. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int ML_PsNetworkInit  ( int32_t  slot_id,   
  ml_ps_network_change_cb_t  evt_cb   
 ) 
Initialization ps network module, and callback function registered. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int ML_imsNetworkStateChangedInit  ( int32_t  slot_id,   
  ml_ims_network_state_changed_cb_t  evt_cb   
 ) 
Indicates when IMS registration state has changed. To get IMS 
registration state and IMS SMS format, callee needs to invoke 
getImsRegState(). 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
 int ML_networkStateChangedInit  ( int32_t  slot_id,   
  ml_network_state_changed_cb_t  evt_cb   
 ) 
Indicates when voice or data network state changed. Callee must 
invoke 
getOperator(),getVoiceRegistrationState(),getDataRegistrationState() 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int ML_nitzTimeReceivedInit  ( int32_t  slot_id,   
  ml_nitz_time_received_t  evt_cb   
 ) 
Initialization nitz time change, and callback function registered. 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int32_t setNetworkSelectionModeAutomatic  ( int32_t  
slot_id ) 
Specify that the network must be selected automatically. Response 
function is ML_setNetworkSelectionModeAutomaticResponseCb() 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int 
ML_setNetworkSelectionModeAutomaticResponseCb  
( int32_t  slot_id,   
  
ml_set_network_selection_mode_automatic_response  
response   
 )    
Response function   of setNetworkSelectionModeAutomatic   
int32_t setNetworkSelectionModeManual  ( int32_t  
slot_id,   
  const char *  operatorNumeric,   
  ML_AccessNetwork  ran   
 ) 
Manually select a specified network. This request must not respond 
until the new operator is selected and registered. Per TS 23.122, the 
RAN is just the initial suggested value. If registration fails, the RAN is 
not available afterwards, or the RAN is not within the network types 
specified by IRadioNetwork::setAllowedNetworkTypeBitmap, then 
the modem will need to select the next best RAN for network 
registration. Response function is 
ML_setNetworkSelectionModeManualResponseCb() 
Function return value is int type. On success, 0 is returned. On error, 
-1 is returned. 
int ML_setNetworkSelectionModeManualResponseCb  
( int32_t  slot_id,   
  ml_set_network_selection_mode_manual_response  
response   
 ) 
Response function of setNetworkSelectionModeManual   
 
1.2.2.4 Data Interface and Call Sequence Description 
Table 1-5. Data interface description 
Interface/Struct Description 
typedef enum { 
    ML_DATA_CALL_TYPE_IPV4 = 0, 
    ML_DATA_CALL_TYPE_IPV6, 
    ML_DATA_CALL_TYPE_IPV4V6, 
} ml_data_call_ip_family_e; 
IP family enum defined. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
typedef enum { 
    ML_APN_PDP_TYPE_IPV4 = 0, 
    ML_APN_PDP_TYPE_PPP , 
    ML_APN_PDP_TYPE_IPV6, 
    ML_APN_PDP_TYPE_IPV4V6, 
} ml_apn_pdp_type_e; 
APN PDP type enum defined. 
typedef enum { 
    ML_APN_AUTH_PROTO_DEFAULT = 0, 
    ML_APN_AUTH_PROTO_NONE, 
    ML_APN_AUTH_PROTO_PAP , 
    ML_APN_AUTH_PROTO_CHAP , 
    ML_APN_AUTH_PROTO_PAP_CHAP , 
} ml_apn_auth_proto_e; 
APN authentication protocol type enum defined. 
typedef struct { 
unsigned char profile_idx; 
ml_apn_pdp_type_e pdp_type; 
ml_apn_auth_proto_e auth_proto; 
char apn_name[ML_APN_NAME_SIZE]; 
char username[ML_APN_USERNAME_SIZE]; 
char password[ML_APN_PASSWORD_SIZE]; 
}ml_apn_info_s 
Struct of apn info  
profile_idx: 1 – 8 (1: Public profile ID; 2-8: Private 
profile ID, support up to 7 private APNs) 
pdp_type: IPV4/IPV6/IPV4V6; for details, refer to 
ml_apn_pdp_type_e enum 
auth_proto: default/none/pap/chap/pap_chap  
apn_name: APN name 
typedef enum { 
    ML_DATA_CALL_ERROR_NONE = 0, 
    ML_DATA_CALL_ERROR_INVALID_PARAMS, 
} ml_data_call_error_e; 
Data call error enum defined. 
typedef enum { 
    ML_DATA_CALL_IDLE, 
    ML_DATA_CALL_CONNECTING, 
    ML_DATA_CALL_CONNECTED, 
    ML_DATA_CALL_DISCONNECTING, 
    ML_DATA_CALL_DISCONNECTED, 
    ML_DATA_CALL_RETRYING, 
    ML_DATA_CALL_FAILED, 
    ML_DATA_CALL_SCANNING, 
} ml_data_call_state_e; 
Data call state enum defined. 
struct ml_v4_address_status { 
    struct in_addr ip; 
    struct in_addr gateway;  
    struct in_addr pri_dns; 
    struct in_addr sec_dns; 
}; 
IPV4 address status struct. 
struct ml_v6_address_status { 
    struct in6_addr ip; 
    struct in6_addr gateway; 
    struct in6_addr pri_dns; 
    struct in6_addr sec_dns; 
}; 
IPV6 address status struct. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
struct ml_pkt_stats { 
    unsigned long pkts_tx; 
    unsigned long pkts_rx; 
    long long bytes_tx; 
    long long bytes_rx;  
    unsigned long pkts_dropped_tx; 
    unsigned long pkts_dropped_rx; 
}; 
Packet status struct. 
struct ml_v4_info { 
    char name[16];  
    ml_data_call_state_e state; 
    bool reconnect;  
    struct ml_v4_address_status addr;  
    struct ml_pkt_stats stats;  
}; 
IPV4 info struct.  
name: APN name 
state: IPV4 data call state 
reconnect: IPV4 re-dial flag 
addr: IPV4 address 
stats: IPV4 packet status 
struct ml_v6_info { 
    char name[16];  
    ml_data_call_state_e state; 
    bool reconnect; 
    struct ml_v6_address_status addr; 
    struct ml_pkt_stats stats; 
}; 
IPV6 info struct.  
name: APN name 
state: IPV6 data call state 
reconnect: IPV6 re-dial flag 
addr: IPV6 address 
stats: IPV6 packet status 
typedef struct { 
    char profile_idx; 
    ml_data_call_ip_family_e ip_family; 
    struct ml_v4_info v4; 
    struct ml_v6_info v6; 
} ml_data_call_info_s; 
Data call info struct. 
typedef struct { 
    char profile_idx; 
    char name[16]; 
    ml_data_call_ip_family_e ip_family; 
    ml_data_call_state_e state; 
    ml_data_call_error_e err; 
    struct ml_v4_address_status v4; 
    struct ml_v6_address_status v6; 
} ml_data_call_state_s; 
Data call state struct. 
typedef void (*ml_data_call_evt_cb_t)(ml_data_call_state_s 
*state); 
Data callback function. 
Parameters: 
    in: ml_data_call_state_s *state 
typedef enum { 
    PDP_FAIL_NONE = 0, 
    /* an integer cause code defined in TS 24.008 
       section 6.1.3.1.3 or TS 24.301 Release 8+ Annex B. 
       If the implementation does not have access to the exact cause 
codes, 
       then it should return one of the following values, 
       as the UI layer needs to distinguish these 
       cases for error notification and potential retries. */ 
    PDP_FAIL_OPERATOR_BARRED = 0x08, 
Data call fail cause enum defined. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
    PDP_FAIL_NAS_SIGNALLING = 0x0E, 
    PDP_FAIL_MBMS_CAPABILITIES_INSUFFICIENT = 0x18, 
    PDP_FAIL_LLC_SNDCP = 0x19, 
    PDP_FAIL_INSUFFICIENT_RESOURCES = 0x1A, 
    PDP_FAIL_MISSING_UKNOWN_APN = 0x1B, 
    PDP_FAIL_UNKNOWN_PDP_ADDRESS_TYPE = 0x1C, 
    PDP_FAIL_USER_AUTHENTICATION = 0x1D, 
    PDP_FAIL_ACTIVATION_REJECT_GGSN = 0x1E, 
    PDP_FAIL_ACTIVATION_REJECT_UNSPECIFIED = 0x1F, 
    PDP_FAIL_SERVICE_OPTION_NOT_SUPPORTED = 0x20, 
    PDP_FAIL_SERVICE_OPTION_NOT_SUBSCRIBED = 0x21, 
    PDP_FAIL_SERVICE_OPTION_OUT_OF_ORDER = 0x22, 
    PDP_FAIL_NSAPI_IN_USE = 0x23, 
    PDP_FAIL_REGULAR_DEACTIVATION = 0x24, 
    PDP_FAIL_QOS_NOT_ACCEPTED = 0x25, 
    PDP_FAIL_NETWORK_FAILURE = 0x26, 
    PDP_FAIL_UMTS_REACTIVATION_REQ = 0x27, 
    PDP_FAIL_FEATURE_NOT_SUPP = 0x28, 
    PDP_FAIL_TFT_SEMANTIC_ERROR = 0x29, 
    PDP_FAIL_TFT_SYTAX_ERROR = 0x2A, 
    PDP_FAIL_UNKNOWN_PDP_CONTEXT = 0x2B, 
    PDP_FAIL_FILTER_SEMANTIC_ERROR = 0x2C, 
    PDP_FAIL_FILTER_SYTAX_ERROR = 0x2D, 
    PDP_FAIL_PDP_WITHOUT_ACTIVE_TFT = 0x2E, 
    PDP_FAIL_MULTICAST_GROUP_MEMBERSHIP_TIMEOUT = 0x2F, 
    PDP_FAIL_BCM_VIOLATION = 0x30, 
    PDP_FAIL_LAST_PDN_DISC_NOT_ALLOWED = 0x31, 
    PDP_FAIL_ONLY_IPV4_ALLOWED = 0x32, 
    PDP_FAIL_ONLY_IPV6_ALLOWED = 0x33, 
    PDP_FAIL_ONLY_SINGLE_BEARER_ALLOWED = 0x34, 
    PDP_FAIL_ESM_INFO_NOT_RECEIVED = 0x35, 
    PDP_FAIL_PDN_CONN_DOES_NOT_EXIST = 0x36, 
    PDP_FAIL_MULTI_CONN_TO_SAME_PDN_NOT_ALLOWED = 
0x37, 
    PDP_FAIL_COLLISION_WITH_NW_INITIATED_REQUEST = 0x38, 
    PDP_FAIL_ESM_UNSUPPORTED_QCI_VALUE = 0x3B, 
    PDP_FAIL_BEARER_HANDLING_NOT_SUPPORT = 0x3C, 
    PDP_FAIL_MAX_ACTIVE_PDP_CONTEXT_REACHED = 0x41, 
    PDP_FAIL_UNSUPPORTED_APN_IN_CURRENT_PLMN = 0x42, 
    PDP_FAIL_INVALID_TRANSACTION_ID = 0x51, 
    PDP_FAIL_MESSAGE_INCORRECT_SEMANTIC = 0x5F, 
    PDP_FAIL_INVALID_MANDATORY_INFO = 0x60, 
    PDP_FAIL_MESSAGE_TYPE_UNSUPPORTED = 0x61, 
    PDP_FAIL_MSG_TYPE_NONCOMPATIBLE_STATE = 0x62, 
    PDP_FAIL_UNKNOWN_INFO_ELEMENT = 0x63, 
    PDP_FAIL_CONDITIONAL_IE_ERROR = 0x64, 
    PDP_FAIL_MSG_AND_PROTOCOL_STATE_UNCOMPATIBLE = 
0x65, 
    PDP_FAIL_PROTOCOL_ERRORS = 0x6F,             /* no retry */ 
    PDP_FAIL_APN_TYPE_CONFLICT = 0x70, 
    PDP_FAIL_INVALID_PCSCF_ADDR = 0x71, 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
    PDP_FAIL_INTERNAL_CALL_PREEMPT_BY_HIGH_PRIO_APN = 
0x72, 
    PDP_FAIL_EMM_ACCESS_BARRED = 0x73, 
    PDP_FAIL_EMERGENCY_IFACE_ONLY = 0x74, 
    PDP_FAIL_IFACE_MISMATCH = 0x75, 
    PDP_FAIL_COMPANION_IFACE_IN_USE = 0x76, 
    PDP_FAIL_IP_ADDRESS_MISMATCH = 0x77, 
    PDP_FAIL_IFACE_AND_POL_FAMILY_MISMATCH = 0x78, 
    PDP_FAIL_EMM_ACCESS_BARRED_INFINITE_RETRY = 0x79, 
    PDP_FAIL_AUTH_FAILURE_ON_EMERGENCY_CALL = 0x7A, 
    PDP_FAIL_LOCAL_REJECT_ACT_REQ_DUE_TO_REACH_RETRY_C
OUNTER = 0x0E0F, 
    PDP_FAIL_TCM_ESM_TIMER_TIMEOUT = 0x0F46, 
    PDP_FAIL_PAM_ATT_PDN_ACCESS_REJECT_IMS_PDN_BLOCK_TE
MP = 0x1402, 
    PDP_FAIL_DATA_NOT_ALLOW = 0x1671, 
    PDP_FAIL_OEM_DCFAILCAUSE_1 = 0x1001, 
    PDP_FAIL_OEM_DCFAILCAUSE_2 = 0x1002, 
    PDP_FAIL_OEM_DCFAILCAUSE_3 = 0x1003, 
    PDP_FAIL_OEM_DCFAILCAUSE_4 = 0x1004, 
    PDP_FAIL_OEM_DCFAILCAUSE_5 = 0x1005, 
    PDP_FAIL_OEM_DCFAILCAUSE_6 = 0x1006, 
    PDP_FAIL_OEM_DCFAILCAUSE_7 = 0x1007, 
    PDP_FAIL_OEM_DCFAILCAUSE_8 = 0x1008, 
    PDP_FAIL_OEM_DCFAILCAUSE_9 = 0x1009, 
    PDP_FAIL_OEM_DCFAILCAUSE_10 = 0x100A, 
    PDP_FAIL_OEM_DCFAILCAUSE_11 = 0x100B, 
    PDP_FAIL_OEM_DCFAILCAUSE_12 = 0x100C, 
    PDP_FAIL_OEM_DCFAILCAUSE_13 = 0x100D, 
    PDP_FAIL_OEM_DCFAILCAUSE_14 = 0x100E, 
    PDP_FAIL_OEM_DCFAILCAUSE_15 = 0x100F, 
    PDP_FAIL_VOICE_REGISTRATION_FAIL = -1, 
    PDP_FAIL_DATA_REGISTRATION_FAIL = -2, 
    PDP_FAIL_SIGNAL_LOST = -3, 
    PDP_FAIL_PREF_RADIO_TECH_CHANGED = -4, 
    PDP_FAIL_RADIO_POWER_OFF = -5, 
    PDP_FAIL_TETHERED_CALL_ACTIVE = -6, 
    PDP_FAIL_ROUTER_ADVERTISEMENT_FAIL = -7, 
    PDP_FAIL_LOST_CONNECTION = 0x10004, 
    PDP_FAIL_ERROR_UNSPECIFIED = 0xffff, 
}ML_DataCallFailCause; 
int ML_APN_Get ( 
unsigned char profile_idx, 
ml_apn_info_s * apn  
) 
Get APN info from input value “profile_idx”. 
Parameters: 
in: unsigned char profile_idx  
out: ml_apn_info_s *apn 
APN initial flow:   
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
After the card is recognized at startup, 
mtktelephonyservice will determine whether 
/data/vendor/telephony/apn.db exists. If not, it 
generates /data/vendor/telephony/apn.db 
according to /vendor/etc/apns_conf.xml. Then it 
obtains the APN of the SIM card from apn.db 
through the card’s mccmnc and sets the APN to 
the modem. 
Notice: 
    This interface needs to be called after the card is 
recognized, that is, after ML_Sim_GetCardStatus() 
returns present. 
int ML_APN_Set ( 
const ml_apn_info_s * apn 
) 
Set APN to modem and apn 
database(/data/vendor/telephony/apn.db) 
Parameters: 
in: const ml_apn_info_s * apn 
Notice: 
    This interface needs to be called after the card is 
recognized  
int ML_DataCallInit ( 
ml_data_call_evt_cb_t evt_cb 
) 
Register the data call status change callback 
function, and call back the evt_cb function when 
the data call status changes. 
Parameters: 
 in: ml_data_call_evt_cb_t evt_cb 
int ML_DataCallStart ( 
const ml_data_call_s * data_call,  
ml_data_call_error_e * err ) 
Establish public/private PDN connection. 
This is synchronous interface. It sends PDN 
establishment command to modem, and this 
interface returns after modem returns. 
Parameters: 
    in: const ml_data_call_s * data_call 
    out: ml_data_call_error_e * err  
int ML_DataCallStop ( 
char profile_idx,  
ml_data_call_ip_family_e ip_family,  
ml_data_call_error_e * err ) 
 
Disconnect the public/private PDN connection. 
This is synchronous interface. It sends the PDN 
establishment command to the modem, and this 
interface will return only after the modem returns. 
Parameters: 
    in: char profile_idx 
    in: ml_data_call_ip_family_e ip_family  
    out: ml_data_call_error_e * err  
int ML_DataCallStart_Ext ( 
const ml_data_call_s * data_call,  
ml_data_call_error_e * err ) 
Establish public/private PDN connection. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
This asynchronous interface, returns directly after 
issuing the PDN establishment command, without 
waiting for the modem execution result. The 
status of establishing PDN is called back to the APP 
through the callback function registered by 
ML_DataCallInit. 
Parameters: 
    in: const ml_data_call_s * data_call 
    out: ml_data_call_error_e * err  
int ML_DataCallStop_Ext ( 
char profile_idx,  
ml_data_call_ip_family_e ip_family,  
ml_data_call_error_e * err ) 
 
Disconnect public/private PDN connection 
Asynchronous interface, returns directly after 
issuing the disconnect PDN command, without 
waiting for the modem execution result. The 
disconnect PDN status is called back to the APP 
through the callback function registered by 
ML_DataCallInit. 
Parameters: 
    in: char profile_idx 
    in: ml_data_call_ip_family_e ip_family  
    out: ml_data_call_error_e * err  
int ML_getDataCallReason ( 
int32_t profile_idx,  
ML_DataCallFailCause * reason ) 
 
When PDN establishment fails, get failcause. 
Parameters: 
    in: profile_idx 
    in/out: reason   
Int ML_DataCallInfoGet( 
char profile_idx, 
ml_data_call_ip_family_e ip_family, 
ml_data_call_info_s *info, 
ml_data_call_error_e *err 
) 
Get data call information according to profile_idx 
and ip_family. 
Parameters: 
    in: char profile_idx 
    in: ml_data_call_ip_family_e ip_family 
    out: ml_data_call_info_s *info 
  out: ml_data_call_error_e *err 
int ML_SetDataDefaultSim  ( int32_t  slotId ) Set the main data card slot id. 
 
Before set the main data card slot, for example, 
set the main data slot from slot0 to slot1, you 
should deactive all the pdn connections, and the 
call ML_SetDataDefaultSim(1), then create the 
pdn connections on slot1 
int ML_GetDataDefaultSim  (  ) Get the main data card slot. 
 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
1.2.2.5 Call Interface and Call Sequence Description 
All call module interfaces need to be called based on network registration. 
Table 1-6. Call module interface description 
Interface/Struct Description 
typedef struct { 
    int32_t                       CallId; 
    char                        PhoneNum[32]; 
    E_ML_VCALL_STATE_TYPE_T     State; 
    int32_t             call_end_reason; 
} ML_VCALL_INFO_T; 
Struct of call message information. 
CallId: Current call index; 
PhoneNum[32]: The opponent's phone numer; 
State: Call state; 
call_end_reason: The reason of call end; 
typedef void (*ML_VCALL_MSGCB_T) ( 
    ML_VCALL_INFO_T       *pvsMsg); 
Call state callback function. 
Int32_t ML_VcallInit(ML_VCALL_MSGCB_T 
cb_func) 
Register the call state callback function. 
The callback function is triggered when a call comes in, and the call 
information is returned through the callback function. 
Parameters: 
    out: ML_VCALL_MSGCB_T cb_func; 
Int ML_VcallStart(const char *PhoneNumber) Dial a call. 
Parameters: 
    in: const char *PhoneNumber; 
Int ML_VcallAnswer(void) Answer the call. 
You can only answer the call when the call is incoming. You cannot 
answer the call in other states and will return an error. 
The function return value is int type. On success, 0 is returned. On 
error, -1 is returned.  
Int ML_VcallEnd (void) Hang up the phone. 
You can only hang up the phone when you are in a call state. You 
cannot hang up the phone in other states and will return an error. 
The function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
int32_t ML_VcallCancel  ( void   ) Cancel call callback function 
The function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
int32_t ML_VcallCliStart  ( const char *  
PhoneNumber,   
  int32_t  cli   
 )   
Broadcast the call and set whether the other end is displayed. 
Parameters: 
Input: const char *PhoneNumber; 
int32_t cli 0: default 1: Disable display 2: Enable display 
The function return value is int type. On success, 0 is returned. On 
error, -1 is returned.  
int32_t ML_VcallControl  ( int32_t  controlType,   
  int32_t  call_id   
 )   
Suspend and resume a call. 
Parameters: 
Input: int32_t controlType 0: Suspend a call 1: Resume a call 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
int32_t call_id 
The function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
void ML_SetAutoAnswerMode  ( bool  onoff ) Set up automatic answering. 
Parameters: 
Input: bool onoff 
int32_t ML_VcallDtmfStart  ( const char *  
Number ) 
dtmf dialing starts 
Parameters: 
Input: const char * Number dialing number 
The function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
int32_t ML_VcallDtmfStop  ( void   ) dtmf dialing ends 
Note that this API needs to be used with VcallDtmfStart. Press Stop 
after Start to end 
The function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
int32_t ML_VcallGetCallWaiting  ( int32_t  
serviceClass,   
  bool *  enable,   
  int32_t *  serviceClassReturn   
 ) 
Query the call waiting status. 
Parameters: 
1: Voice 
2: Data (referring to all bearer services) 
8: Short Message Service (SMS) 
16: Data Circuit Sync 
32: Data Circuit Async 
64: Dedicated Packet Access 
128: Dedicated PAD Access 
Input: int32_t serviceClass specifies the service class 
Output: bool * enable 
int32_t * serviceClassReturn 
int32_t ML_VcallSetCallWaiting  ( bool  enable,   
  int32_t  serviceClass   
 )   
Set call waiting status. 
Parameters: 
Input: int32_t serviceClass specifies the service class 
bool * enable 
int32_t ML_VcallStopCallId  ( int32_t  call_id )   Hang up the phone with the specified id. 
Parameters: 
Input: int32_t call_id 
 
1.2.2.6 SMS Interface and Call Sequence Description  
The SMS interfaces must be called based on the network registration. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Table 1-7. Call interface description 
Interface/Struct Description 
typedef enum { 
    E_ML_SMS_FORMAT_GSM_7BIT        = 0, 
    E_ML_SMS_FORMAT_BINARY_DATA     = 1, 
    E_ML_SMS_FORMAT_UCS2            = 2, 
    E_ML_SMS_FORMAT_IRA             = 3, 
   }E_ML_SMS_FORMAT_T; 
Enum of SMS format type. 
typedef struct { 
    E_ML_SMS_FORMAT_T       format; 
    char                    PhoneNum[ML_SMS_MAX_ADDR_LENGTH];  
    int32_t                   SmsDataLen; 
    char                    SmsData[ML_SMS_MAX_MT_MSG_LENGTH]; 
} ML_SMS_INFO_T; 
Struct of SMS information. 
typedef void (*ML_SMS_RXMSGCB_T) ( 
    ML_SMS_INFO_T       *pvsMsg 
); 
SMS callback function. 
Int ML_SmsInit(ML_SMS_RXMSGCB_T cb_func) Register SMS callback function. 
The callback function is triggered when receiving 
SMS, and the SMS information is returned through 
the callback function. 
Parameters: 
    out: ML_SMS_RXMSGCB_T cb_func; 
Int32_t ML_Sms_Sent(const ML_SMS_INFO_T *pvsSms) Send SMS. 
This ia asynchronous interface. After sending SMS 
request, it will asynchronously wait for md to return 
response, and will not block the thread. 
Parameters: 
    in: const ML_SMS_INFO_T *pvsSms; 
int32_t ML_SmsInitWithSlot  ( int32_t  slot_id,   
  ML_SMS_RXMSGCB_T  cb_func   
 ) 
Initialization SMS module with slot id, and callback 
function registered.  
Function return value is int type. On success, 0 is 
returned. On error, -1 is returned. 
int32_t ML_SmsInitNoDecoder  ( int32_t  slot_id,   
  ML_SMS_IND_T  cb_func   
 ) 
Indicates when new SMS is received. default is 
disable. enable this function , please open: 
meta/meta-mediatek-
mtxxxxx/conf/machine/autoxxxx.conf then modify 
MTK_SMS_CODEC_SUPPORT = "no" => 
MTK_SMS_CODEC_SUPPORT = "yes". 
Function return value is int type. On success, 0 is 
returned. On error, -1 is returned. 
int sendSmsNoEncoderAsync  ( int  slot_id,   
  char *  smscPdu,   
  char *  pdu   
 )   
Send an SMS message. Based on the returned error, 
caller decides to resend if sending sms fails. 
RadioError:SMS_SEND_FAIL_RETRY means retry (i.e. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
error cause is 332) and RadioError:GENERIC_FAILURE 
means no retry (i.e. error cause is 500) default is 
disable. enable this function, please open: 
meta/meta-mediatek-
mtxxxxx/conf/machine/autoxxxx.conf then modify 
MTK_SMS_CODEC_SUPPORT = "no" => 
MTK_SMS_CODEC_SUPPORT = "yes". 
Function return value is int type. On success, 0 is 
returned. On error, -1 is returned. 
int ML_sendSmsNoEncoderResponseCb  ( int32_t  slot_id,   
  ml_send_sms_no_encoder_async_response  response   
 ) 
Response function of sendSmsNoEncoderAsync   
 
1.2.2.7 IMS Interface and Call Sequence Description 
Table 1-8. IMS interface description 
Interface/Struct Description 
Int ML_EnableIms(uint8_t on_off) Enable/disable the IMS registration. 
Input parameter: On_off is 1, which means the IMS function is 
enabled. 
On_off is 0, which means the IMS function is disabled. 
Int ML_GetImsRegState(int8_t *reg_state ) Get the IMS registration status. 
Output parameter: Reg_state value is 1, which means IMS is 
registered. Reg_state value is 0, which means IMS is not 
registered. 
int ML_EnableVolte  ( uint8_t  on_off ) Enable ims for volte. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
int ML_EnableVonr  ( uint8_t  on_off ) Enable ims for vonr, if you need to disable volte and vonr, please 
use ML_EnableIms(0).  
This API only supports slot0. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
int32_t setVoNrEnabled  ( int32_t  slot_id,   
  bool  enable   
 )   
Set Voice NR enable state. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
int32_t isVoNrEnabled  ( int32_t  slot_id,   
  bool *  enable   
 )   
Query current Voice NR enable state. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
1.2.2.8 Ecall Interface and Call Sequence Description 
Table 1-9. eCall control interface description 
Interface/Struct Description 
typedef struct { 
    int32_t call_id; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
}ml_ecall_set_msd; 
Struct of MSD information. 
typedef struct { 
    int32_t arg_num; 
    int32_t type; 
    char address[128]; 
}ml_ecall_set_num; 
Struct of test number/reconfiguration number information. 
typedef enum { 
    ML_EMER_CAT_MANUAL_ECALL = 1, 
    ML_EMER_CAT_AUTO_ECALL   = 2, 
}ml_ecall_category; 
Enum of ecall category. 
typedef enum { 
    ML_ECALL_TEST        = 1, 
    ML_ECALL_EMERGENCY   = 2, 
    ML_ECALL_RECONFIG    = 3, 
}ml_ecall_variant; 
Enum of ecall variant. 
typedef enum{ 
    ML_DOMAIN_AUTO = 0,      /* Automatic mode - 
LTE(IMS), WG(CS), 1x(C2K) */ 
    ML_DOMAIN_CS_ONLY = 1,   /* CS domain only - 
WG(CS) */ 
    ML_DOMAIN_3GPP_ONLY = 2, /* 3GPP only - 
LTE(IMS), WG(CS) */ 
    ML_DOMAIN_3GPP2 = 3,     /* 3GPP2 only - 
1x(C2K)) */ 
    ML_DOMAIN_IMS_1xCS = 4,  /* IMS and 1x CS only 
- LTE(IMS), 1x(C2K) */ 
    ML_DOMAIN_CS_1x = 5,     /* WG CS and 1x CS 
only - WG(CS), 1x(C2K) */ 
    ML_DOMAIN_IMS_ONLY = 6,  /* only IMS call 
allowed */ 
}ml_ecall_domain; 
Enum of radio domain when make ecall. 
typedef struct{ 
    ml_ecall_category   ecall_cat; 
    ml_ecall_variant   ecall_variant; 
    char address[20]; 
Struct of input parameter when requesting to make an ecall. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
    ml_ecall_domain domain; 
}ml_ecall_req_msg; 
typedef struct{ 
    int32_t data1; 
    int32_t data2; 
    int32_t data3; 
    int32_t data4; 
}ml_ecall_pri; 
Ecall priority parameter structure. data1>data2>data3>data4. 
The input parameters should be 1 2 3 4, which means:  
1 - eCall URI set by the customer; 
2 - eCall URI saved by USIM; 
3 - eCall number set by the customer; 
4 - eCall number saved by USIM; 
typedef enum{ 
    E_ML_ECALL_SENDING_START = 1, 
    E_ML_ECALL_SENDING_MSD = 2, 
    E_ML_ECALL_LLACK_RECEIVED = 3, 
    E_ML_ECALL_ALACK_POSITIVE_RECEIVED = 4, 
    E_ML_ECALL_ALACK_CLEARDOWN_RECEIVED = 5, 
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
Enum of ecall indication type. 
typedef struct{ 
    ML_ECall_Indication ind; 
    int call_id; 
Struct of ecall indication. 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
Interface/Struct Description 
} ML_ECALL_IND_T; 
typedef void (*ML_ECALL_MSGCB_T)( 
    ML_ECALL_IND_T       *pvsMsg 
); 
Callback function for reporting ecall indication. 
int32_t ML_EcallIndicationInit( 
ML_ECALL_MSGCB_T cb_func); 
Register the ecall indication callback function, and call back the 
cb_func function when the ecall status changes. 
Parameters: 
In: ML_ECALL_MSGCB_T cb_func 
int32_t ML_ResetIvs(void); Reset ecall state in modem and reconnect audio channel. 
int32_t ML_SetMSD(ml_ecall_set_msd* msd); Set MSD. 
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
Trigger an ecall and transmit MSD data in one command. 
Parameters: 
    In: ml_ecall_req_msg* msg 
int32_t ML_SetEmsdpri(ml_ecall_pri* pri); Set priority of test/reconfiguration eCall number/URI 
The default priority is “1>3>2>4”. 
Parameters: 
    In: ml_ecall_pri* pri 
 
1.2.2.9 Suspend of Modem Interface and Call Sequence Description 
Table 1-10. AT blacklist interface description 
Interface/Struct Description 
Int ML_SendAT(const char* atCmd, char* finalRsp, uint32_t resp_len, 
int64_t timout_ms); 
Int ML_SetUnsolResponseFilter(ML_UnsolResponseFilter filter) 
Before entering IPO, enable the AT URC 
blacklist filtering function: 
1. Call ML_SendAT function to send AT 
command: AT+EURCFLT=1. 
2. Call ML_SetUnsolResponseFilter(0) 
After exiting IPO, disable the AT URC blacklist 
filtering function: 
1. Call ML_SendAT function to send AT 
command: AT+EURCFLT=0 
2. Call ML_SetUnsolResponseFilter(0xFF) 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
 
Table 1-11. MIPC keep alive interface description 
Interface/Struct Description 
typedef struct { 
ML_keepaliveType type; 
char sourceAddress[MAX_INADDR_LEN]; 
int32_t sourcePort; 
char desinationAddress[MAX_INADDR_LEN]; 
int32_t desinationPort; 
int32_t maxKeepAliveIntervalMillis; 
int32_t profile_idx; 
} ML_keepaliveRequest 
typedef struct { 
KEEPALIVE_ACTIVE = 0, 
KEEPALIVE_INACTIVE, 
KEEPALIVE_PENDING 
} ML_keepaliveStatusCode 
typedef struct { 
int32_t sessionHandle; 
ML_KeepaliveStatusCode code; 
} ML_keepaliveStatusCode 
int ML_StartKeepAlive  ( ML_KeepaliveRequest  req,   
  ML_KeepaliveStatus *  ml_status   
 )  
int ML_StopKeepAlive  ( uint32_t  sessionHandle ) 
int ML_SetKeepAliveStatusInd  ( ml_keepalive_cb_t  evt_cb )   
To keep Internet PDN/PDU session in connected mode 
by sending a dummy packet without waking up AP 
processor. 
Flow： 
 
1. AP calls ML_StartKeepalive. The callback 
keepaliveStatus status is pending, indicating that it 
is waiting for the AP to send the first UL packet. 
2. After the MD receives the first UL packet sent by 
the AP , the callback keepaliveStatus status is 
active, indicating that the MD can send keep-alive 
packets. 
3. If an exception occurs, the callback 
keepaliveStatus status is inactive when the 
modem finally fails to receive the network keep-
alive response. 
 
1.3 Frequently Asked Questions/Troubleshooting 
 SIM/CALL/SMS/Telephony Network Tips 
1. How to turn off/on a specific network type, refer to “[FAQ17447] [NW] Turn off a specific network type”. 
2. SIM test failure pre-debug: 
(1) The initial value of IMEI is empty and needs to be burned before it can be obtained. 
(2) If SIM recognition is abnormal, capture the test scene mtklog including the boot process to assist in further 
analysis. 
3. Network test failure pre-debug:  
(1) Confirm that the platform has burned RF/IMEI, the antenna is correctly installed, and the SIM card is correctly 
inserted and has no outstanding fees. 
(2) If (1) still fails to attach network after confirmation, capture the test scene mtklog including the boot process to 
assist in further analysis. 
4. CALL/SMS test failure pre-debug: 
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
MT8676 Hypervisor T-Box 
 User Manual 
Confidential B 
(1) Use the following command to confirm whether the platform has successfully attached network. If not, solve 
the network problem first. 
adb shell /usr/bin/mlclient_test --gtest_filter=MLClientTest.ML_GetNetState 
(2) If (1) has been successfully attached to the network. Capture the test scene mtklog to assist in further analysis. 
 
 Data Tips 
Modification of APN configuration file, refer to “[FAQ21414] MTK apns-conf.xml configuration guide”. 
The configuration file used by T-Box is named apns-conf.xml, code path: src/telephonyware/3.1/libvendor-
ril/apn/resource/apns-conf.xml, install path in the platform /system/etc/tele/apns-
conf-.xml. 
 
If you modify /system/etc/tele/apns-conf.xml directly, you need to delete apn.db and restart to take effect. 
apn.db path: /data/vendor/telephony/apn.db 
 
 Network Tips 
1. Checking for successful network establishment: 
1) The network interface is up and the IP address exists, confirmed by the ifconfig command. 
2) Network IP rule & IP route & DNS settings, confirmed by the IP rule/IP route/dumpsys netd/dumpsys 
dnsresolver commands. 
2. Checking for network connectivity: 
Manually ping a certain IP or URL to see if it can be pinged. 
 
 IMS Tips 
1. How to enable or disable IMS automatically when the device is powered on by default? 
1) The current system automatically enables IMS when the device is powered on by default. 
2) You can change whether IMS is supported by changing MTK_VOLTE_SUPPORT to yes or no in ProjectConfig.mk. 
 
 
 
 
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
MT8676 Hypervisor T-Box 
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
# SRC0245 MT8676_Hypervisor_Touch_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Touch_User_Manual_V1.1.pdf

SHA-256：4bdcab0b5af6c8e3bf7a605806faadd8aee05e1486d661a7a9a965ee235c3b7f

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0245.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-11-22
MT8676 Hypervisor Touch 
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
MT8676 Hypervisor Touch 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-04 Pavel.Xu Official release 
1.1 2024-11-22 Pavel.Xu Modified the Hypervisor description in Section 1.1 Overview  
 
 
  
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
MT8676 Hypervisor Touch 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
1 Touch ········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
1.2 Touch Driver Porting ················································································································································· 4 
 Porting Source Code ······································································································································ 4 
 Touch Porting ················································································································································ 5 
1.3 Touch Pass-Through Configuration ··························································································································· 6 
1.4 Setting of Touch Virtualization ································································································································· 6 
 Touch Virtualization Flow ······························································································································ 6 
 Setting of Touch Virtualization Code ············································································································· 7 
1.5 Touch Common Issues ·············································································································································· 8 
1.6 Relationship between Touch and Panel ··················································································································· 9 
Exhibit 1 Terms and Conditions ········································································································································ 10 
  
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
MT8676 Hypervisor Touch 
User Manual 
Confidential B 
1 Touch 
1.1 Overview 
Typically, porting a Touch driver from a general source involves debugging according to the specifications provided by the 
manufacturer, with a primary focus on configuring I2C and GPIO. For panels connected via SerDes, attention should be paid 
to SerDes pass-through configuration. If Hypervisor systems are involved, virtualization must be used to complete the 
process. MT8676 has two ways to porting: the Touch Virtualization Scheme and the Touch Pass-Through Scheme. Detailed 
introductions are provided below. 
 
1.2 Touch Driver Porting  
 Porting Source Code  
After obtaining the Touch Vendor source code from MediaTek or a third-party vendor, the following steps are generally 
required to ensure that the Touch driver itself can work correctly: 
 
1. When obtaining the source code, there may be a kernel version upgrade. In this case, you need to first port it to the 
corresponding version to ensure it can build successfully. The main files to be modified include the Touch driver file, 
deconfig, DTS, and ko_table. If specific platforms may require configuring additional files, please consult a system 
engineer for assistance. 
2. According to the schematic, confirm the GPIO used for the interrupt/reset pin of the corresponding Touch and 
configure it in the DTS file. 
3. Based on the compatible string in the Touch driver, write it into the DTS Touch node. 
 
Reference DTS configuration is as follows:  
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
As shown above, 
• i2c 0:  Touch mounting node location 
• clock-frequency = <100000>;  The clk of I2C clk, it is usually set from 100k to 400k 
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
MT8676 Hypervisor Touch 
User Manual 
Confidential B 
• compatible = "ilitek,touch";    The compatible string of Touch  
• interrupts = <9 0x0>;      Touch interrupt GPIO   
• ilitek,reset-gpio = <&pio 60 0x0>;  Touch reset GPIO   
 
 Touch Porting   
Common debug commands:  
1. With the commands as below, the trajectory line of Touch will be displayed: 
settings put system pointer_location 1 
settings put system show_touches 1 
 
2. Check the log: 
echo 1 > /proc/mtprintk 
 
3. Check the status of GPIO pin: 
find -name  soc.pinctrl 
cd /proc/mtk_gpio 
cat soc.pinctrl 
 
4. Check the ko status:  
Lsmod |grep touch_name 
 
After porting the Touch source code to the platform and ensuring it can build successfully, if the Touch does not work after 
the platform starts, the following points generally need attention: 
 
1. Check whether the Touch driver probe has completed running. Generally, the following types of errors may prevent it 
from running successfully: 
– DTS mismatch: This issue requires checking whether the Touch node is enabled in the DTS and whether the 
compatible string matches. 
– I2C returns -6: This error indicates that the Touch device is not recognized. You need to check whether the 
hardware connections are correct and whether the power supply is normal. If everything is correct, you need to 
measure the I2C waveform for further clarification. 
– I2C returns -110: You need to check whether the I2C part is working properly. 
2. Intermittent Touch not working: Generally, the power supply voltage of the Touch has specific limits. You can print the 
voltage value during the Touch driver probe to clarify the issue. 
3. Touch position deviation: You need to adapt the Touch according to the display size. 
4. Touch module leakage issue: Determine whether the Touch actively powers off and pulls down the corresponding 
GPIO during suspend. 
5. Check the power-on sequence of the interrupt and reset pins: Specific Touch drivers have specific requirements for the 
timing of these two pins, which need to be configured according to the specification. 
6. Configure SerDes: Refer to the SerDes manual. The public version of MediaTek now supports 6-panel touch in the 
following figure. 
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
MT8676 Hypervisor Touch 
User Manual 
Confidential B 
 
 
The reference SerDes configuration is as follows, and you need to refer to 96789 and 96752 manuals for the corresponding 
configuration. 
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
 
1.3 Touch Pass-Through Configuration 
Touch pass-through configuration means configuring the Touch driver on the Yocto and Android sides as needed. This 
depends on the completion of GPIO, I2C and EINT virtualization. Once the underlying virtualization is completed, the Touch 
driver can be configured without considering the virtualization part, and you can simply repeat the steps for configuring 
Touch in a single system. 
 
1.4 Setting of Touch Virtualization 
 Touch Virtualization Flow 
For Touch security, the Touch driver is placed on the Yocto side. In this case, Touch virtualization is required. The general 
flow diagram of the public version of Touch virtualization is as follows: 
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
MT8676 Hypervisor Touch 
User Manual 
Confidential B 
 
 
1. Yocto acts as the host side, with the Touch driver placed on the Yocto side. The Touch input device node “mtk-tpd-
yocto” is registered and created on the Yocto side. 
2. The Hypervisor SDK starts services to poll and monitor “mtk-tpd-yocto” for events, retrieves events from “mtk-tpd-
yocto”, and transmits the events to the Android side via virtio-input.  
3. The Android side reports the transmitted Touch events to the upper framework for processing.  
 
 Setting of Touch Virtualization Code 
With the touch driver already configured on the Yocto side, the following configurations need to be added to set up Touch 
virtualization: 
1． Enable Touch Virtualization 
– The path for change:  
*\src\hypervisor\grt_mt8676\thyp-sdk\vmm\nbl_vmm\BUILD.bazel 
 
– The location of the code: 
cc_binary( 
    name = "nbl_vmm_mix", 
    srcs = [ 
        "main.cc", 
    ], 
    deps = [ 
      ":input", 
] 
 
2． Based on the Touch node information on the Yocto side, configure the Touch nodes that need to be forwarded. 
– The path for change:  
*\src\hypervisor\grt_mt8676\thyp-sdk\products\mt8676-mix\guest-
configs\uos_alps_pv8676.lua 
 
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
MT8676 Hypervisor Touch 
User Manual 
Confidential B 
– The location of the code: 
--  input 
uos_config:setInput("/dev/input/event2") 
 
3． Configure the raw touch size for virtualized Touch.  
– The path for change:  
*\src\hypervisor\grt_mt8676\thyp-sdk\products\mt8676-mix\guest-
configs\uos_alps_pv8676.lua 
 
– The location of the code: 
--  display 
--[[ 
void setDisplayParam(int id, int x, int y,int has_touch, int type) 
type: VIRTIO_INPUT_MOUSE:1; VIRTIO_INPUT_SINGLE_TOUCH:2; VIRTIO_INPUT_MULTI_TOUCH:3 
--]] 
uos_config:setDisplayParam(0,720,800,1,2) 
 
4． Please note the following: 
– Currently, touch virtualization can support up to 4 virtual nodes. 
– Currently, touch virtualization transmission only supports Type A protocol. 
 
1.5 Touch Common Issues 
1. Touch virtualization is not effective. 
Enter getevent -l on both Yocto and Android sides and touch the screen. For example: 
– If no Touch data is generated on the Yocto side, check the source Touch driver configuration.， 
– If no Touch data is generated on the Android side, check whether Touch virtualization is enabled and whether the 
corresponding touch node name is set. 
 
2. There is a deviation between the Touch point position and the display. 
Enter the following command on the Android side to display the Touch trajectory lines and check for any deviation and 
its pattern.  
settings put system pointer_location 1 
settings put system show_touches 1 
 
Enter getevent -I on the Android side to check if the Touch raw_size corresponds to the display size. If not, adjust 
the display_size information in NBL. 
 
3. When multiple Touch devices need to be virtualized, incorrect data may be used in the Touch raw_size. 
Ensure that when configuring uos_alps_pv8676.lua, the order of display_size matches the order in which the Touch 
drivers are loaded. 
 
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
MT8676 Hypervisor Touch 
User Manual 
Confidential B 
1.6 Relationship between Touch and Panel 
As shown in the figure below, the input module binds the Touch node to the panel using the location information of the 
node. When other nodes are generated before the Touch node, the location number may change, causing the binding to 
fail. To ensure the following through the ko_table, any subsequent ko that generates nodes should be placed after the 
Touch node to avoid binding issues. 
 
 
 
 
 
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
MT8676 Hypervisor Touch 
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

