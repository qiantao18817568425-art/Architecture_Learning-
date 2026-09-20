# SRC0246 MT8676_Hypervisor_UART_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_UART_User_Manual_V1.0.pdf

SHA-256：242e09880a72bd8bffef90bd9113e4dd0960f1f199930e3bd80f4b3c9a7ec102

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0246.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-11-22 
MT8676 Hypervisor UART 
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
MT8676 (Hypervisor UART) 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-22 Liliang Chen Official release 
 
  
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
MT8676 (Hypervisor UART) 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 Hypervisor UART························································································································································ 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 Definitions and Abbreviations ······················································································································· 4 
1.1 UART Virtualization ·················································································································································· 5 
1.1.1 Virtualization Instructions ····························································································································· 5 
1.1.2 UART Virtualized Handshake Process············································································································ 5 
1.1.3 UART Virtualization Features ························································································································ 6 
1.1.4 Test and Debugging ······································································································································· 7 
 Passthrough Method ················································································································································ 7 
 Passthrough Instructions······························································································································· 7 
 Specific Implementation ······························································································································· 7 
 Testing and Debugging ·································································································································· 9 
 Common Problems and Troubleshooting ··································································································· 10 
 Assistance from MediaTek ·························································································································· 10 
Exhibit 1 Terms and Conditions ········································································································································ 11 
 
List of Figures 
Table 1-1. Definitions ································································································································································· 4 
Table 1-2. Abbreviations ····························································································································································· 4 
Table 1-3.Code path ··································································································································································· 5 
Table 1-4. UART driver code path ··············································································································································· 7 
 
List of Tables 
Figure 1-1. UART virtualization layout diagram ·························································································································· 4 
Figure 1-2. Handshake flowchart ··············································································································································· 5 
Figure 1-3. SOS modifications ···················································································································································· 8 
Figure 1-4. UOS-DTS modifications ············································································································································ 8 
Figure 1-5. UOS-KO modifications ·············································································································································· 9 
Figure 1-6. Hypervisor modifications ········································································································································· 9 
 
 
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
MT8676 (Hypervisor UART) 
User Manual 
Confidential B 
1 Hypervisor UART 
1.1 Overview 
 Brief Introduction 
This section describes the software and functions of the MT8676 hypervisor UART, as shown in Figure 1-1.
 
Figure 1-1. UART virtualization layout diagram 
 
 Definitions and Abbreviations 
 Definitions 
Table 1-1. Definitions 
Terms Explanation 
GUEST Front-end systems 
HOST Back-end systems 
TTYS(x) Straight-through bound UART nodes 
VPORT(x)P(x) The UART virtual node generated by the front-end 
 
 Abbreviations 
Table 1-2. Abbreviations 
Abbreviation Explanation 
DMA Direct Memory access 
UART Universal Asynchronous Transceiver 
 
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
MT8676 (Hypervisor UART) 
User Manual 
Confidential B 
1.1 UART Virtualization 
1.1.1 Virtualization Instructions 
For multi-OS systems, since multiple external devices need to use UART for communication, but cannot be implemented 
due to the limitation of the number of UARTs on the platform, the UART module is considered to be virtualized so that 
different devices can use the UART module in different OS systems, as shown in Table 1-3 for the specific code path. 
Table 1-3.Code path 
Front-end Path Back-end Path 
kernel/drivers/char/virtio_console.c kernel/modules/mt8676/virt/grt/vhost_uart/uart.c 
 
1.1.2  UART Virtualized Handshake Process 
 
Figure 1-2. Handshake flowchart  
 
For multi-OS system virtualization, the most important thing is to establish a front-end and back-end communication 
connection. As shown in Figure 1-2, it can be divided into four parts: 
 
1. The front-end (Guest) sends the VIRTIO_CONSOLE_DEVICES_READY event signal to the back-end (Host), indicating that 
the front-end (Guest) devices are ready. 
2. After receiving the signal, the backend (Host) will send a VHOST_CONSOLE_PORT_ADD event signal to the frontend 
(Guest), indicating that the back-end (Host) has received a signal requesting a connection and needs the front-end to 
add the corresponding PORT node. 
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
MT8676 (Hypervisor UART) 
User Manual 
Confidential B 
3. When the front-end (Guest) receives the signal, it will send the VIRTIO_CONSOLE_PORT_READY event signal to the 
back-end (Host), and at this moment, a virtualized node VPORT(x)P(x) will be generated on the front-end (Guest), 
where x is a randomly generated number. 
4. When the host receives the signal, it will add the generated node to the list, which means the handshake process is 
over. 
 
1.1.3  UART Virtualization Features 
1. Front-end event signals 
a) VIRTIO_CONSOLE_DEVICE_READY 
Equipment preparation 
 
b) VIRTIO_CONSOLE_PORT_ADD 
Node addition 
 
c) VIRTIO_CONSOLE_PORT_REMOVE 
Node removal 
 
d) VIRTIO_CONSOLE_PORT_READY 
Node preparation 
 
e) VIRTIO_CONSOLE_PORT_OPEN 
Node open 
 
2. Back-end event signals: 
a) VHOST_CONSOLE_DEVICE_READY 
Equipment preparation 
 
b) VHOST_CONSOLE_PORT_ADD 
Node addition 
 
c) VHOST_CONSOLE_PORT_REMOVE 
Node removal 
 
d) VHOST_CONSOLE_PORT_READY 
Node preparation 
 
e) VHOST_CONSOLE_PORT_OPEN 
Node open 
 
f) VHOST_CONSOLE_PORT_READ 
Node read 
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
MT8676 (Hypervisor UART) 
User Manual 
Confidential B 
1.1.4 Test and Debugging 
1. Check whether a UART virtual node is generated on the front-end. 
find . -name vport* 
 
2. To get the UART data, you can use the following command to receive the UART data and print it out in the console. 
cat /dev/vport* 
 
3. The UART can send data; you can use the following command to have the UART send the string "123". 
echo 123 > /dev/vport* 
 
 Passthrough Method 
 Passthrough Instructions 
For multiple OSs, there is a set of MTK UART driver codes for each OS, as shown in Table 1-4. 
The virt mode of UART currently supports read/write/on/off operations, and you need to modify the baud rate, enable soft 
streaming, and enable hard streaming through Passthrough mode, that is, enable the UART driver code under the 
corresponding OS. 
Table 1-4. UART driver code path 
System UART Path APDMA Path 
Android kernel/kernel_device_modules-
6.1/drivers/tty/serial/8250/8250_mtk.c 
Kernel/kernel_device_modules-
6.1/drivers/dma/mediatek/mtk-uart-apdma.c 
Yocto 
src/kernel/linux/v6.1_mt8676/co_device_m
odule/drivers/ 
tty/serial/8250/8250_mtk.c 
src/kernel/linux/v6.1_mt8676/co_device_module/drivers/dma
/mediatek/mtk-uart-apdma.c 
 
 Specific Implementation 
Take the LLA system UART2 of SOS (Yocto) passthrough to UOS (Android) as an example. 
 
 SOS (Yocto) Modifications 
The SOS (Yocto) part is slightly changed, just make sure that the UART2 node property status in the 
auto8676p1_64_hyp_sos.dts file is changed from "okay" to "disabled". As shown in Figure 1-3. 
  
 
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
MT8676 (Hypervisor UART) 
User Manual 
Confidential B 
 
Figure 1-3. SOS modifications 
 
 UOS (Android) Modifications 
There are two modifications for UOS (Android): 
1. dts revise 
The UOS (Android) system needs to modify the auto8676p1_64_bsp_vm.dts file, enable the UART2 node, and switch 
the pin corresponding to UART2 to UART mode, so that the pin will automatically switch to UART mode after the 
platform is turned on. Figure 1-4 shows the modifications. 
 
 
Figure 1-4. UOS-DTS modifications 
 
2. ko_table revise 
Since the UART-related ko files have not been added on the UOS (Android) side, it is also necessary to add them to the 
ko_order_table file, as shown in Figure 1-5. 
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
MT8676 (Hypervisor UART) 
User Manual 
Confidential B 
 
Figure 1-5. UOS-KO modifications 
 Hypervisor Modifications 
Since the hypervisor enables all interrupt numbers on the SOS (Yocto) side, you need to enable the interrupt number used 
by the UOS (Android) side, so you need to enable the interrupt number of UART2 on the UOS side in the 
uos_alps_pv8676.lua file, as shown in Figure 1-6. 
 
Figure 1-6. Hypervisor modifications 
 
1. The interrupt number of UART2 can be queried as 252 in the MT6897.dts file, and 32 needs to be added to the LUA 
file, so the interrupt number of UART2 is 284 in the uos_alps_pv8676.lua file. 
2. When UART2 enables DMA mode, DMA has two channels exist: DMA TX and DMA RX, so the DMA lookup table of 
UART2 can be queried as 223, 224, and by adding 32, it can be obtained as 255,256 in the lua file. 
 
 Testing and Debugging 
Perform the following operations under the OS with the UART driver enabled for testing. 
1. Set baud rate to 921600, 8 bits of data, 1 bit of stop, no parity, e.g., UART2 
stty -F /dev/ttyS2 ispeed 921600 ospeed 921600 cs8 
 
2. Obtain the current UART baud rate and data bit configuration information 
stty -F /dev/ttyS2 -a 
 
3. UART obtains data; you can use the following command to receive UART2 data and print it out in the console. 
cat /dev/ttyS2 
 
4. UART to send data, you can use the following command to have UART2 send the string "123" 
echo 123 > /dev/ttyS2 
 
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
MT8676 (Hypervisor UART) 
User Manual 
Confidential B 
 Common Problems and Troubleshooting 
 Android Cannot Boot after the Modifications. 
1. Please check whether the uos_alps_pv8676.lua file in the platform (non-codebase) contains the UART interrupt 
number, which can be typed in the shell: 
vi /vendor/etc/hyper_android/uos_alps_xx.lua 
It is important to ensure that the lua file in the platform contains the interrupt number required by UART. 
 
2. If a log similar to the following appears in the boot log: 
Init: [name:main&]8250_mtk: Unknown symbol UARTHUB_md_adsp_fifo_ctrl (err -2) 
Verify that the ko_order_table file has been modified correctly and confirm that the three KOs have been added as 
illustrated in Figure 1-5. 
 
 UART Test Failed after the Modifications 
1. Please check whether the modified dts for UOS/SOS is correct. The previous text uses the L+A+L system as an example. 
If it is an L+A system, the dts file will be different. Please confirm whether the dts file has been correctly modified. 
2. Please check whether the dts configuration is correct. Use Linux commands to check whether the UART pin mode has 
been switched to UART mode. To view the status of the PIN in the kernel, you can enter the following command to 
query: 
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
 
 Assistance from MediaTek 
If the issue cannot be resolved after the aforementioned troubleshooting steps, you can ask help from MediaTek with 
provide relevant logs, DTS files, and the output of cat mt_gpio provided. 
 
 
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
MT8676 (Hypervisor UART) 
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
# SRC0247 MT8676_Hypervisor_Vcodec_User_Manual_V1.2.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Vcodec_User_Manual_V1.2.pdf

SHA-256：4e82f0cb886e5414fb29e593684bac3e731738204be92b5a66e89c24340a5fe2

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0247.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:                  1.2 
Release date:        2024-11-25 
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
Version History 
Version Date Author Description 
1.0 2024-10-28 Yougao.Liu Official version 
1.1 2024-11-11 Yougao.Liu Added the scope of application for the video playback 
architecture in Section 1.3.1.2 
1.2 2024-11-25 Yougao.Liu Removed “Yocto+Android” in Section 1.3.1.2 and 1.3.1.3 
  
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
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 Basic Introduction to Video Encoding and Decoding ·································································································· 4 
1.1 Purpose ···································································································································································· 4 
1.2 Scope ········································································································································································ 4 
 Abbreviation·················································································································································· 4 
 Performance ················································································································································· 4 
1.3 Architecture/Process Overview ································································································································ 5 
 Software Architecture ··································································································································· 5 
1.4 Configuration/Customization Guide ························································································································· 7 
 Configuration of the Decoder Codec ············································································································ 7 
 Configuration of the Channel Supported by the Decoder ············································································ 8 
 Configuration of Secure Decoder ·················································································································· 8 
 Configuration of the Encoder Codec ············································································································· 8 
 Configuration of the Channel Supported by the Encoder ············································································· 9 
 Configuration of Secure Encoder ·················································································································· 9 
 Customization of the Playback Feature ······································································································· 10 
1.5 Common Issues/Troubleshooting ·························································································································· 10 
 MTK C2_hal CMD ········································································································································ 10 
 MMDVFS CMD ············································································································································ 10 
 VCodec CMD ··············································································································································· 11 
 Video Dump Feature ··································································································································· 11 
 Black Screen ················································································································································ 12 
 Screen Distortion ········································································································································ 12 
 Occurrence of Lagging or Freezing ·············································································································· 13 
Exhibit 1 Terms and Conditions ········································································································································ 14 
 
 
List of Figures 
Figure 1-1. Android OS playback architecture ···························································································································· 6 
Figure 1-2. Hypervisor OS playback architecture ······················································································································· 7 
Figure 1-3. Hypervisor OS SVP playback architecture ················································································································ 7 
 
List of Tables 
Table 1-1. Abbreviation ······························································································································································ 4 
Table 1-2. Video file format ························································································································································ 5 
Table 1-3. Vcodec performace ···················································································································································· 5 
 
 
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
1 Basic Introduction to Video Encoding and Decoding 
1.1 Purpose 
The specific system architecture is described in this architecture design document to ensure that hardware resources can 
be effectively shared in a virtualized environment between Android and Yocto systems, providing users with a coherent 
and high-performance experience. 
 
1.2 Scope 
This document focuses on describing the high-level architecture of the system, covering design considerations from the 
hardware layer to the application layer, as well as communication and interaction among different components. 
 Abbreviation 
Table 1-1. Abbreviation 
Abbreviation Explanation 
AV1 AOMedia Video 1 
CC Cryptographic Checksum 
CMD Command 
H.264 MPEG-4 Part 10, Advanced Video Coding, MPEG-4 AVC 
HAL Hardware Abstraction Layer 
HDR High Dynamic Range 
Mbps Megabits Per Second 
OPP Operating Performance Point 
PS Location Probability 
SVP Secure Video Playback 
TS Time Slot 
V4L2 Video for Linux Two 
VCodec Video Codec 
VCP Video CoProcess 
Vdec Video Decoder 
Venc Video Encoder 
VirtIO Virt Input/Output 
 
 Performance 
The video file formats currently supported in the system are shown in Table 1-2. 
 
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
Table 1-2. Video file format 
Container File Extension 8676 Android U0 Comment 
MKV “.mkv”,”mka” √ - 
MP4 “.mp4”,”.m4a”,”.m4v”,”.3g2”,”.3gp”,”.3gpp”,”3gpp2” √ - 
PS ”.mpg” √ VOB is not supported 
TS “.ts”,”.m2ts”,”.mts” √ - 
WEBM “.webm” √ - 
AVI “.avi” X Android S phase out 
WMV “.wmv”,”.asf” X Android S phase out 
FLV “.flv”,”.f4v” X Android S phase out 
RMVB “.rmvb”,”.rm” X - 
 
 
Specific supported parameter list information for the video codec module is provided in Table 1-3. 
Table 1-3. Vcodec performace 
Category Codec 
Spec 
Resolution Frame Rate Bit Rate Bit Depth Profile/Level  
Decoder H.264 4096x2176 60 160 Mbps 8/10 CBP , MP , HP , high 10 / 5.2 
H.265 4096x2176 60 160 Mbps 8/10 Main / 5.1 
Main 10 / 5.1 
VP9 4096x2176 60 120 Mbps 8/10 Profile 0/2 
AV1 4096x2176 60 120 Mbps 8/10 Main/level5.1 
Encoder H.264 3840x2160 60 160 Mbps 8/10 BP , MP , HP; High 10 / 5.2 
H.265  3840x2160 60 160 Mbps 8/10 Main, Main10 / 5.1 
Concurrency 
(HW capability) 
- 4K60 VDEC + 4K60 VENC or equivalent throughput 
 
 
1.3 Architecture/Process Overview 
 Software Architecture 
The architecture diagram related to video playback in the current system is the main focus of this chapter. 
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
1.3.1.1 Android 
The architecture of video playback in a single system is depicted in Figure 1-1. 
 
 
Figure 1-1. Android OS playback architecture 
 
1.3.1.2 Hypervisor 
The architecture of video playback in the Hypervisor system is shown in Figure 1-2. It is based on L(w/Vcodec)+A or L(w/o 
Vcodec)+L(w/o Vcodec)+A. 
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
 
Figure 1-2. Hypervisor OS playback architecture 
 
1.3.1.3 Hypervisor SVP  
The architecture for SVP in the Hypervisor system is illustrated in Figure 1-3. 
 
 
Figure 1-3. Hypervisor OS SVP playback architecture 
 
1.4 Configuration/Customization Guide 
 Configuration of the Decoder Codec 
The codec information supported by the decoder configured in the system is depicted in the following diagram. 
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
 
 
 Configuration of the Channel Supported by the Decoder 
The information on the number of the channels supported by the decoder configured in the system is depicted in the 
figure below. 
 
 
 Configuration of Secure Decoder 
The configuration information for secure decoders in the system is depicted in the following diagram. 
 
 
 
 Configuration of the Encoder Codec 
The configuration information corresponding to the supported encoders in the system is depicted in the following diagram. 
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
 
 
 Configuration of the Channel Supported by the Encoder 
The configuration information of the number of channels supported by the encoder in the system is depicted in the 
following diagram. 
 
 
 Configuration of Secure Encoder 
The configuration information for the secure encoder supported in the system is depicted in the following diagram. 
 
 
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
 Customization of the Playback Feature 
1.4.7.1 HDR 
Specific project customization support is required for HDR functionality. 
 
1.4.7.2 SVP Playback 
Customized support for the SVP feature requires specific project customization. 
 
1.5 Common Issues/Troubleshooting 
 MTK C2_hal CMD 
C2MtkComponent: 
All C2MTK_ALOGV logs of C2MtkComponent should be enabled 
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
All debug level logs for VCodec should be enabled. 
Enable debug level logs by <TAG> filter. E.g. V4L2Device 
adb shell "setprop vendor.mtk.c2.enable.vcodec.log.V4L2Device 4" 
adb shell "setprop vendor.mtk.c2.enable.vcodec.log 4" 
adb shell "setprop vendor.mtk.c2.enable.vcodec.log.<TAG> 4" 
 
 MMDVFS CMD 
Clock is forced to a specific step by OPP . 
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
param1: 0→ Vcore  1→vmm 
OPP 0: highest clock rate 
adb shell "echo 0 0 > /sys/module/mtk_mmdvfs_debug/parameters/force_step" 
 
Vote clock to the specific step by OPP:  
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
 
Control the log level for Vcodec. 
codec_log:  Common codec log level (0~31) 
vpud_log: Vcodec wrap log level (0~7) 
job_log: Job log level (0~7)s 
adb shell "echo -codec_log 7 -vpud_log 3 -job_log 3 > 
/sys/module/mtk_vcodec_dec_v2/parameters/mtk_vdec_vcp_log" 
 
 Video Dump Feature 
Input dump for the decoder (bit-stream for decoding) 
The dumped file is saved in \data\vendor\vcodec\vdec_input_<timestamp>_<instance>.bs 
E.g., \data\vendor\vcodec\vdec_input_20200716T133851.521_0xE80D6000.bs 
adb shell "setprop vendor.mtk.c2.vdec.dump.input 1" 
 
Dump of decoded video frames from the decoder output. 
The dumped file is saved 
in \data\vendor\vcodec\vdec_output_<timestamp>_<instance>_W<width>H<height>.yuv 
E.g., \data\vendor\vcodec\vdec_output_20200716T133851.521_0xE80D6000_W1280H720.yuv 
adb shell "setprop vendor.mtk.c2.vdec.dump.output 1" 
 
Dump of decoded video frames from the decoder after color conversion. 
The dumped file is saved in: 
\data\vendor\vcodec\vdec_output_cc_<timestamp>_<instance>_W<width>H<height>.yuv 
E.g., \data\vendor\vcodec\vdec_output_cc_20200716T133851.521_0xE80D6000_W1280H720.yuv 
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
adb shell "setprop vendor.mtk.c2.vdec.dump.output.cc 1" 
 
A binary debugging log containing decoder profiling data has been dumped. 
The dumped file is saved in \data\vendor\vcodec\vdec_profiling_<timestamp>_<instance>.dat 
E.g., \data\vendor\vcodec\vdec_profiling_20200716T133851.521_0xE80D6000.dat 
adb shell "setprop vendor.mtk.c2.vdec.profiling 1" 
 
 Black Screen 
• Verify if the video file is functioning correctly. 
• Ensure that the video decoding module is started up normally. 
adb shell "setprop vendor.mtk.c2.enable.vdec.log 2" 
 
Confirm in the logcat logs if there is information similar to the following: 
CCodec: allocate(c2.mtk.vp9.decoder) 
C2MtkComponentStore: find: name=c2.mtk.vp9.decoder, key=c2.mtk.vp9.decoder 
C2MtkVdec: [0xB400007D63859720] IntfImpl: name=c2.mtk.vp9.decoder 
 
• Confirm that the decoding data is normal. 
Confirm that the decoding module has received the normal video stream data: 
adb shell "setprop vendor.mtk.c2.vdec.dump.input 1 
 
• Is the GPU forced to be OK? 
adb shell service call SurfaceFlinger 1008 i32 1 
 
• The display module's functionality is confirmed to be normal. 
Refer to the display document to confirm the display logic. 
If all the above points are satisfactory, the detailed log analysis for issue localization needs to be performed by the Video 
playback owner. 
 
 Screen Distortion 
• Confirm that the decoding data is normal. 
Confirm that the decoding module has received the normal video stream data: 
adb shell "setprop vendor.mtk.c2.vdec.dump.input 1 
 
• Is the GPU forced to be OK? 
adb shell service call SurfaceFlinger 1008 i32 1 
 
• The display module's functionality is confirmed to be normal. 
Refer to the display document to confirm the display logic. 
If all the above points are satisfactory, the detailed log analysis to identify the issue needs to be performed by the video 
playback owner. 
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
 Occurrence of Lagging or Freezing 
• Verify if the video file is functioning correctly. 
• Ensure the video decoding module is started up normally. 
adb shell "setprop vendor.mtk.c2.enable.vdec.log 2" 
 
Confirm in the logcat logs if there is information similar to the following: 
CCodec: allocate(c2.mtk.vp9.decoder) 
C2MtkComponentStore: find: name=c2.mtk.vp9.decoder, key=c2.mtk.vp9.decoder 
C2MtkVdec: [0xB400007D63859720] IntfImpl: name=c2.mtk.vp9.decoder 
 
• The display module's functionality is confirmed to be normal. 
Refer to the display document to confirm the display logic. 
If all the above points are satisfactory, video playback owner needs to carefully examine the log to locate the issue. 
 
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
# SRC0248 MT8676_Yocto_AEE_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_AEE_User_Manual_V1.0.pdf

SHA-256：b2b210bfd555858f62adb9236fd01798d706eb7b45896a9c8ecb90116cd00799

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0248.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期：  2024-11-04
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
版本记录 
版本 日期 作者 描述 
1.0 2024-11-04 李成 正式版 
 
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 4 
 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 适用范围 ······················································································································································ 5 
 缩略词 ······································································································································································ 5 
 AEE 介绍 ·································································································································································· 5 
 DB 文件类型 ················································································································································· 5 
 DB 文件名称及路径 ····································································································································· 6 
 AEE 配置 ·································································································································································· 6 
 开启 AEE 机制 ·············································································································································· 6 
 设置 AEE 模式 ·············································································································································· 7 
 设置 DB 文件最大个数 ································································································································ 7 
 DB 文件使用 ···························································································································································· 7 
 导出 DB 文件 ················································································································································ 7 
 下载 GAT 工具 ·············································································································································· 7 
 解压 DB 文件 ················································································································································ 8 
 获取 Symbol 文件········································································································································· 8 
 解析 DB 文件 ················································································································································ 8 
附件一 附加条款 ····························································································································································· 10 
 
图片目录 
图 1-1. MediatekOnline 中下载 GAT 工具 ································································································································ 7 
图 1-2. MediatekDBView 工具界面 ··········································································································································· 8 
图 1-3.解析 DB ··········································································································································································· 9 
图 1-4. 启动 GDB ······································································································································································· 9 
 
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
表格目录 
表 1-1.缩略词 ············································································································································································ 5 
表 1-2. DB 文件类型 ·································································································································································· 6 
 
 
 
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
1 AEE 
 概述 
 简单介绍 
Advanced Exception Engine (AEE) 是 MediaTek 的一款调试工具。它在设备开机时启动，并在运行过程中持续监听设
备状态。当设备发生异常时，AEE 会生成一个包含异常现场日志信息的 DB 压缩文件，以供调试使用。 
 
本文件概述了 MediaTek Yocto AEE 的配置和使用方法。 
 
 适用范围 
此文件适用于 MediaTek Yocto 系统平台。 
 
 缩略词 
表 1-1.缩略词 
缩略词 全称及释义 
AEE Advanced Exception Engine  
EE External Exception  
HW Reboot  Hardware Reboot Exception  
HWT  Hardware Watchdog Timeout  
KE Kernel Driver Exception  
NE Native Process Exception  
 
 AEE 介绍 
 DB 文件类型 
不同的 AEE DB 文件类型见表 1-2，按异常代码所属 Layer 划分，可以归类为 Jave layer, Native layer 和 Kernel layer。 
 
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
表 1-2. DB 文件类型 
Layer Type Level When DB is Generated? 
Native 
NE 
Exception 
Native 进程收到异常信号 
(SIGILL/SIGABRT/SIGBUS/SIGFPE/SIGSEGV)  
System API dump 用户空间进程主动调用 AEE 接口 
Kernel  
KE 
Fatal 
Kernel 层发生 panic/oops 异常 
HWT CPU 卡死触发看门狗重启 
HW Reboot 设备触发硬件看门狗重启 
Kernel API dump Exception Kernel 驱动程序主动调用 AEE 接口 
External EE Exception 外部子系统异常，驱动程序主动 AEE 接口 
 
 DB 文件名称及路径 
异常发生后，AEE 生成的DB文件将保存在/data/aee_exp目录下，DB 文件后缀为.dbg。 
e.g. 
--db.00.SystemAPI  
--db.00.SystemAPI.dbg : dbg 文件是一个压缩文件，需要使用联发科GAT工具解析。 
--ZZ_INTERNAL : 明文文件，简单描述DB文件的捕捉到的异常信息。 
--db.01.NE  
--db.01.NE.dbg  
--ZZ_INTERNAL 
 
 AEE 配置 
AEE 配置文件源码路径: meta/meta-mediatek-<platform>/conf/machine/<project>.conf 
 
 开启 AEE 机制 
默认情况下，AEE 机制在客户版本中是关闭的。如果客户需要开启 AEE 机制，请在 AEE 配置文件中添加：  
MTK_LOG_CUSTOMER_SUPPORT = “yes” 
 
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
 设置 AEE 模式 
默认情况下，客户版本的 AEE 模式是 4，此模式下只会生成 Fatal 类型 DB ，不会产生 Normal 类型 DB。 
如果客户需要生成所有 Normal 类型和 Fatal 类型 DB，需要设定persist.vendor.mtk.aee.mode, 
setprop persist.vendor.mtk.aee.mode 3. 
如果客户需要在编译过程中就设定 AEE 模式，请在 AEE 配置文件中添加： 
MTK_AEE_MODE="3"  
 
 设置 DB 文件最大个数 
根据表 1-2 中描述的 DB 类型，DB 级别包括 Fatal 和 Normal 级别。 
Fatal 级别的 DB 文件默认最大个数为 8，Normal 级别 DB 文件默认最大个数也为 8。 
当 DB 文件超过设定个数值，那么会从序号最小的 DB 文件开始覆盖。 
用户可以通过在 conf 文件中指定MTK_AEE_FATAL_DB_CNT/MTK_AEE_DB_CNT 来设置 DB 文件最大个数。 
e.g. 
MTK_AEE_DB_CNT = “4”  
MTK_AEE_FATAL_DB_CNT = “4” 
 
 DB 文件使用 
 导出 DB 文件 
在 Yocto 系统中，DB 默认保存在/data/aee_exp 路径下，通过 adb pull 指令将平台中的 DB 文件导出至 PC 端。 
adb pull /data/aee_exp 
 
 下载 GAT 工具 
如图 1-1 所示，请登录 MediatekOnline 网站，在 Tool 界面栏中搜索 GAT 下载最新版本 GAT 工具。 
 
图 1-1. MediatekOnline 中下载 GAT 工具 
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
 解压 DB 文件 
请打开 GAT 工具中的 MediatekDBViewer 工具，如果 PC 环境为 Windows 操作系统，请执行： 
GAT(Official)_ALPS\GAT_exe_v4.2034.3\gat-win32-x86_64-4.2034.3.c\gat-win32-x86_64-
4\tools\MediatekDBViewer.bat。 
 
图 1-2. MediatekDBView 工具界面 
 
点击“Select DB File”选项，如图 1-2 所示, 选择想要解析的 DB 文件(*.dbg)并点击“start”开始解压，解压后的所
有文件将会在界面左侧列出。其中__exp_main.txt 文件中记录基本的异常信息。 
 
 获取 Symbol 文件 
解析 DB 中 coredump 文件时需要获取到 symbols 文件用于 GDB 工具调试。可以使用 unpack-symbols.sh 脚本获
取所有的 symbol 文件。 
1. 脚本路径: meta/meta-mediatek/recipes-devtools/unpack-symbols-tool/files/unpack-symbols.sh  
2. 将脚本放置到编译产物路径下: build/tmp/deploy/images/<project>/  
3. 执行脚本: bash unpack_symbols.sh  
4. 脚本执行结束后会在当前目录下生成一个 symbol 目录文件，这个目录文件会包含所有 symbol 文件。  
 
 解析 DB 文件 
1. NE/KE/HWT 问题:  
方法 1:  
点击 “Set Symbols path” 指定 symbol 路径并点击 “Analyze” (如图 1-3 所示)，生成的 out.json 文件会展现详细的
分析内容，包含 calltrace 信息。 
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
 
 
图 1-3.解析 DB 
 
方法 2:  
点击 “Set Symbols path” 指定 symbol 路径，然后点击“Launch GDB” (如图 1-4 所示)，将会显示 GDB 调试界面，
可以下达 GDB 指令获取 calltrace 信息。 
 
图 1-4. 启动 GDB 
 
2. HW_Reboot 问题:  
HW_Reboot问题无coredump文件可以分析，需要依赖其他文件信息（SYS_LAST_CPU_BUS/DFD）。 
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
MT8676 Yocto AEE 
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
# SRC0249 MT8676_Yocto_AI_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_AI_User_Manual_V1.0.pdf

SHA-256：38c50e5e32f9a6d9ce2b504f8c3550761c1654ce7e3e8fcaa0c5e6ef07e9ca1f

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0249.html)

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
版本记录 
版本 日期 作者 描述 
1.0 2024-11-22 王茂雷 正式版 
 
  
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
 APU Trace 工具抓取 Trace ··························································································································· 7 
 特定 MediaTek 平台 NPU 支持的算子信息 ··········································································································· 9 
附件一 附加条款 ····························································································································································· 11 
 
 
图片目录 
图 1-1. Yocto AI 架构 ·································································································································································· 5 
图 1-2. NeuroPilot Online Document ········································································································································· 6 
图 1-3. APU trace ······································································································································································· 8 
图 1-4. APU 硬件状态 ································································································································································ 8 
图 1-5. APU 频率状态 ································································································································································ 9 
图 1-6. 支持的算子的集合关系 ················································································································································ 9 
 
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
MT8676 Yocto AI 
User Manual 
Confidential B 
1 AI 
 概述 
本章节介绍 MT8676 AI/VPU 相关功能。 
 
 名词解释 
表 1-1. 名词解释 
缩略词 名称及释义 
AI Artificial Intelligence 人工智能 
MVPU MediaTek Vision Processing Unit  联发科视觉处理器单元 
NeuroPilot MediaTek’s Ecosystem for AI Development 联发科人工智能生态系统 
MDLA MediaTek Deep Learning Accelerator 联发科深度学习加速器 
 
 架构/流程概览 
 AI 架构 
NeuroPilot 是一套由 MediaTek 开发的用于构建高效人工智能应用程序的软件工具和 API 套件；也是 MediaTek 人工
智能生态系统的核心。NeuroPilot 支持“Edge AI”，即把 AI 放在本地设备上执行，而不是在服务器上远程执行。这可
以使得 AI 任务的执行速度更快，同时也可以保护数据和隐私。 
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
 
图 1-1. Yocto AI 架构 
 
MT8676 Yocto 软件栈如图 1-1 所示，为开发者提供了多样化的开发途径。开发者可以利用 NCC-TFLite 工具将 TFLite
模型转换为 DLA 格式，随后通过 Neuron Runtime API 将模型无缝部署到 MTK 目标平台上。此外，该软件栈还支持
直接使用 OpenVX 调用 MTK 内置的计算机视觉（CV）算法，为快速实现常见 CV 任务提供便利。对于需要更高度定
制化的场景，开发者可以选择使用 OpenCL 来编写和实现自己的 CV 算法，从而满足特定的应用需求。 
 
 NeuroPilot 开发指南 
要访问 NeuroPilot 在线文档，客户首先需要申请一个账户。然后，可以使用这个账户访问 MediaTek 在线文档网站, 
如图 1-2 所示。该网站提供各种开发资料，包括与开发相关的数据、 convert 等一些转换工具、SDK、SampleCode，
以及每个 target 对模型 OP 的支持和限制条件等。需要访问在线文档的客户可以联系 CPM，以获得申请过程的帮
助。 
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
 
图 1-2. NeuroPilot Online Document 
 
开通 NeuroPilot 访问权限后: 进入 https://neuropilot.mediatek.com/  -> Software Development -> 登陆账号 -> 在
“NeuroPilot SDK & Document”下选择目标 NeuroPilot {version} -> Latest Version NeuroPilot Online Doc -> 2. Getting 
Started Guide -> 2.2. NeuroPilot Workflow -> 2.2.3.1. Android Development 
 
 配置/客制化指南 
 NeuroPilot Debug 命令说明 
客户如果遇到 apusys error issue，请先打开以下 log 开关，复现问题，再向 MediaTek 提供整机 log 以及在测试机上
的 apusys_rv_xfile (用于解码 apusys_log) ，log options 和获取路径如下： 
Enable NNAPI AOSP log       : adb shell "setprop debug.nn.vlog 1" 
Enable TFlite log                    : adb shell setprop debug.mtk_tflite.vlog true 
Enable Execution plan           : adb shell setprop debug.neuron.runtime.ShowExecPlan true 
Enable ShowQoSInfo             : adb shell setprop debug.neuron.runtime.ShowQoSInfo true 
Enable Kernel Log    : adb shell "echo 15 > /sys/class/misc/apusys/log/klog" 
Enable uPLog                          : adb shell "echo 5 > /proc/apusys_logger/log" 
Enable User Log                      : adb shell setprop debug.apusys.loglevel 15 
Enable apusys_rv_xfile          : adb pull /proc/apusys_rv/apusys_rv_xfile (用于解码 apusys_log) 
 
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
 APU Trace 工具抓取 Trace 
 使用 Trace Tool 获取路径 
APU Systrace 是用于分析和调试 MediaTek 平台上 AI Processing Unit (APU) 基本运算单元（如 EDMA、MDLA、
MVPU）运行状态的工具，可以帮助开发者快速分析运行在 APU 上的模型算法的性能和调试问题。 
如何获取 APU trace tool：进入 https://neuropilot.mediatek.com/  -> Software Development -> 登陆账号 -> 在
“NeuroPilot SDK & Document”下选择目标 NeuroPilot {version} -> Latest Version NeuroPilot Online Doc –> Downloads –> 
APU Systrace Tool 下载。 
 
 APU Trace Tool 使用 
如何进行 APU trace 录制：依次执行 02-trace_start_all.bat –> 运行测试程序 –> 02-trace_stop.bat。其中： 
• 02-trace_start_all.bat                  - Start to record trace 
• 02-trace_stop.bat                         - Stop tracing and pulling trace files 
 
下面两个脚本运行是可选的，如果有开启，最后生成的 system.trace 中会有 apu middleware 和 neuron trace。 
• 08-mdw_trace_enable.bat          - To get tracing information from apu middleware. 
• 08-neuron_rt_trace_enable.bat - To get tracing information from neuron runtime. 
 
最后会生成三个文件，根据需要选择查看。请使用 https://ui.perfetto.dev/ 打开 trace.) 
• apusys.trace - apusys trace only 
• system.trace - system trace only 
• combine.trace - apusys + system trace 
 
 APU Trace 分析示例 
通常使用 MediaTek APU Systrace 抓出并解析得到的 trace 文件有以下三个： 
• apusys.trace（仅包含 APU 运行期间各个 Device，如 MDLA/MVPU 上 Tasks 的状况和 APU Frequency, DRAM 
access, TCM access 等信息） 
• system.trace（普通 System trace only，包含 CPU 信息和系统中其他 process/threads 信息） 
• combine.trace（apusys + system trace） 
 
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
为了理清当前系统中运行在 APU 上的线程，通常需要通过系统调试和跟踪工具来获取相关信息。以下是一个详细
的 SOP，用于识别和调试当前系统中运行在 APU 上的线程。 
1. 使用 perfetto UI 打开 apusys.trace 文件，定位到在 MDLA 或 MVPU (主要 AI 运算单元) Core 上运行的 Task 块。可
以获取到以下资讯： 
– 对应 Task 执行的推理耗时，可以放大查看其 pid16652 (线程号)，如图 1-3 所示。 
– 对应 Task 是否运行在 SMP 多核并行模式下，若是多核 MDLA 运行，则会有多个相同颜色/pid 的 Tasks，如图 
1-4 所示： 
 
 
图 1-3. APU trace 
 
 
图 1-4. APU 硬件状态 
 
– 对应 Task 的 DRAM/TCM 占用情况。 
– 对应 Task 执行期间的 MDLA/MVPU Cores 运行频率。 
– 还可以通过在 MDLA Core 上运行具有相同 pid 的 Tasks，以判断该 AI 算法是否是周期性执行的。 
 
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
 
图 1-5. APU 频率状态 
 
 特定 MediaTek 平台 NPU 支持的算子信息 
 
图 1-6. 支持的算子的集合关系  
 
如图 1-6 所示，MediaTek 平台 NPU 支持的算子，集合由小到大分为 3 个层面: 
 
• Pytorch/TensorFlow Ops -> TFLite Ops：通过使用 mtk_converter tool 将原本的.pt 或 .pb 模型中的 Ops 转为 TFLite 
Ops。这步映射过程会进行初步的 Ops 过滤，挡住平台 NPU (HW) 不支持的 Ops。关于哪些 Pytorch/TensorFlow 
Ops 可以被 converter 工具识别并转为 Tflite Ops，可以参考 Online Document：Developer Tools -> Model 
Development -> Converter -> Converter Tool Supported Operators。 
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
• TFLite Ops -> NPU HW (MDLA/MVPU) Operations：通过使用 neuronsdk 中的 ncc-tflite (compiler) 将转出的 TFLite
模型编译为 dla 文件。这步映射过程中会参考 NPU HW (MDLA/MVPU) Operations Guidelines 中的 Specification 
(Restrictions) 来检查 TFLite 中每个 Op 的详细参数。 关于哪些 TFLite Ops 可以被 ncc-tflite 工具识别并编译为 dla
文件，可以参考：Supported Operations。 
• NPU HW (MDLA/MVPU) Operations：真正可以运行在 NPU (MDLA 或 MVPU) 上的 Ops。 
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
MT8676 Yocto AI 
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
# SRC0250 MT8676_Yocto_Audio_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Audio_User_Manual_V1.0.pdf

SHA-256：ca45b12d0d50bfc6a47c73581aceb32413403a93d1507393e8adad90e6115940

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0250.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-08-12
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Yocto Audio 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 刘齐美 正式版 
 
 
  
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 4 
1 音频 ··········································································································································································· 5 
1.1 概述·········································································································································································· 5 
 简单概述 ······················································································································································ 5 
 缩略词 ·························································································································································· 5 
1.2 架构/流程概述 ························································································································································ 5 
 硬件 ······························································································································································ 5 
 软件 ······························································································································································ 9 
 音频驱动 ······················································································································································ 9 
1.3 配置/客制指南 ······················································································································································ 14 
 Kernel DTS ··················································································································································· 14 
 音频设备配置 ············································································································································ 15 
1.4 常见问题/故障排除 ·············································································································································· 16 
 如何测试音频驱动？································································································································· 16 
 如何启用音频日志？································································································································· 17 
附件一 附加条款 ····························································································································································· 18 
 
 
图片目录 
图 1-1. 音频系统 ······································································································································································· 6 
图 1-2. AFE 框图 ········································································································································································ 8 
图 1-3. Yocto 音频系统 ······························································································································································ 9 
图 1-4. 音频驱动架构 ····························································································································································· 10 
图 1-5. 音频驱动组件 ····························································································································································· 11 
图 1-6. 音频设备 ····································································································································································· 11 
图 1-7. 音频 CPU DAI ······························································································································································· 12 
图 1-8. DPCM 设备 ·································································································································································· 13 
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
图 1-9. 播放和录制设备·························································································································································· 14 
图 1-10. MTK 音频 DTS ···························································································································································· 15 
图 1-11. 播放音乐的音频路径 ················································································································································ 16 
 
表格目录 
表 1-1. 缩略词 ········································································································································································· 5 
 
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
1 音频 
1.1 概述 
 简单概述 
本章节介绍 MT8676 音频的硬件、软件和基本功能。 
 
 缩略词 
表 1-1. 缩略词 
缩略词 全称 释义 
AFE Audio Front End 音频前端 
DAI Digital Audio Interface 数字音频接口 
DTS Device Tree Source 设备树源码 
I2S Integrated Interchip Sound 
是飞利浦在 1986 年定义（1996 年修订）的数字音频传输标准，
用于数字音频数据在器件之间传输 
PCM Pulse Code Modulation 
通过等时间隔（即采样率时钟周期）采样将模拟信号数字化的方
法。PCM 数字音频接口，传输的即是 PCM 格式数据 
TDM Time Division Multiplexing TDM 数字音频接口，可以传输多声道数据 
 
1.2 架构/流程概述 
 硬件 
MT8676 音频系统的硬件整体组成如图 1-1 所示： 
 
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
图 1-1. 音频系统 
 
音频硬件包括对外的硬件接口、AFE_Interconn、AFE_Tinyconn、和 AFE_Memif，以及后端的 Codec 6338。其中，对
外的硬件接口如下： 
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

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
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

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
 
图 1-2. AFE 框图 
 
而内部的 AFE 硬件接口可以归纳为两类： 
 
• 内存接口 
即 AFE_memif。这部分相当于 DMA，主要负责将上层应用 Playback 的 PCM 数据搬运到指定的 DL（downlink） port
输出，或者将 Capture 的 PCM 数据从指定的 UL（uplink） port 捕获后传输给上层应用。 
 
• 连接接口 
连接接口有两种，分别是 AFE_interconn 和 AFE_tiny_conn。两者的主要区别是支持的数据 bit width 不同，前者最大
只支持 24bit 数据，而后者可以支持到 32bit 数据。两者的作用是相同的，主要是负责将 Memif 的 DL 或者 UL 和后
端的 I2S/TDM 等硬件接口连接起来，构建一条和外部设备传输数据的 I/O 通路。对 Playback 而言，即是将 DL 的数
据送到指定的 Output port（即 I2S/TDM out 等）输出；反之，对 Capture 而言，将 UL 接口和指定的 Input port（即
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
I2S/TDM in 等）连通，捕获外部设备输入的数据。另外，中间的 I/O 通路还可以添加 HW SRC、Gain control 以及
mix 等功能。 
 
 软件 
MT8676 的 Yocto 音频系统软件架构如图 1-3 所示： 
 
 
图 1-3. Yocto 音频系统 
 
ALSA Lib 模块，是 Linux 原生的音频模块。这部分相关的资料可以在网上查询了解，这里就不再赘述。本文档主要
是讲解 MTK 专有的音频驱动。 
 音频驱动 
音频驱动是标准的 ALSA ASoC 架构： 
• Machine：是指具体的某一款机器，或者开发板。由此可以看出机器几乎是不可重用的，每个机器上的硬件
实现可能都不一样，CPU 不一样，Codec 不一样，音频的输入、输出设备也不一样，机器为 CPU、Codec、输
入输出设备提供了一个载体。MT8676 公板就是一个机器，客户定制的开发板也是一个机器。 
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
• Platform：一般是指某一个 SoC 平台，比如 MT8676。与音频相关的通常包含该 SoC 中的时钟、DMA、I2S、
PCM 等等，只要指定了 SoC，那么我们可以认为它会有一个对应的 Platform，它只与 SoC 相关，与机器无
关。上面所讲的 AFE 就属于平台。 
• Codec：一般指 I2S/TDM 接口、D/A、A/D、Mixer、PA（功放）等，通常包含多种输入（Mic、Line-in、I2S、
PCM）和多个输出（耳机、喇叭、听筒，Line-out）。Codec 也是可重用的部件，同一个 Codec 可以被不同的
机器使用。MT8676 公板对应的 Codec 就是 PMIC 6338，客户使用的外部 DSP 也属于一种 Codec。 
 
 
图 1-4. 音频驱动架构 
 
对应于上述的三种组件，也有相应的驱动： 
• Machine Driver：负责处理机器特有的一些控件和音频事件（例如，当播放音频时，需要先行打开一个放大
器）；单独的 Platform 和 Codec 驱动是不能工作的，它必须由 Machine 驱动把它们结合在一起才能完成整个
设备的音频处理工作。 
• Platform Driver：它包含了该 SoC 平台的音频 DMA 和音频接口的配置和控制（I2S，PCM 等）；它也不能包含
任何与板子或机器相关的代码。 
• Codec Driver：ASoC 中的一个重要设计原则就是要求 Codec 驱动是平台无关的，它包含了一些音频的控件
（Controls），音频接口，DAMP（动态音频电源管理）的定义和某些 Codec IO 功能。为了保证硬件无关性，
任何特定于平台和机器的代码都要移到平台和机器驱动中。 
MT8676 平台对应的音频驱动模块如下： 
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
图 1-5. 音频驱动组件 
 
音频驱动的这些组件在系统启动后，Kernel 初始化的过程中相继完成初始化并生成相应的驱动设备。系统启动完成
后，可以在 adb shell 的 console 界面查看相应的设备信息： 
 
 
图 1-6. 音频设备 
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
按照 DPCM 架构，ALSA 驱动将内存接口虚拟成 Front End（FE）设备，将对外的硬件接口虚拟成 Back End（BE）设
备。FE 和 BE 通过连接接口串接起来，形成一条音频路径，即可用来进行音频数据的传输。因为 FE 和 BE 都是
MT8675 SoC 里的音频接口，所以，ALSA 驱动将它们统一作为 CPU DAI 来看待。而更后端的 PMIC 或者外部 DSP 就
是 Codec DAI。 
 
 
图 1-7. 音频 CPU DAI 
 
ALSA 驱动会构建一系列的 Control/Mixer APIs 来控制 DAI 并打通音频路径。而用来控制这些 APIs 的设备即是
Control 设备。同样，用来控制具体的 FE 并读写数据的设备节点即是 PCM 设备。 
下图即是 MT8676 平台的 Control 设备节点和 PCM 设备节点： 
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
图 1-8. DPCM 设备 
 
PCM 节点和 AFE 的对应关系如图 1-9 所示： 
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
图 1-9. 播放和录制设备 
 
在播放音乐等 playback 的场景下，应用层就是通过往 Playback 的 PCM 节点写入音频数据，传送到后端的喇叭或者
功放来放出声音；反之，在录音等 Capture 的场景下，应用层从 Capture 的 PCM 节点读取音频数据，获得从外部
MIC 等设备传入的音频数据。 
 
1.3 配置/客制指南 
 Kernel DTS 
ALSA 驱动程序的配置主要是在 DTS 里，里面包含 Audio 相关的 Machine/Platform/Codec 等驱动的设备节点配置，
包括 Register address、memory address、Interrupt number 等。 
 
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
MT8676 的 DTS 配置文件位于： 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/。主要的配置文件如
下： 
mt6897.dts 
auto8676p1_64.dts 
 
相应的 Machine/Platform/Codec 的配置如下： 
 
图 1-10. MTK 音频 DTS 
 
当 Kernel 初始化时，音频驱动的各个组件可以根据 DTS 里的配置，得到相应的 register address、memory address、
clock configuration、GPIO setting 等参数。在 Audio Driver 使用的过程中，就可以使用这些参数完成 Audio Hardware
的设置，打通 Audio Path。所以，客户平台在开发时，也要根据实际硬件的情况定制相对应的 DTS 配置。 
 
 音频设备配置 
音频软件打开某一个 PCM 设备节点进行读写操作之前，需要先进行一些 mixer/control 的设置来打开音频路径，或
者使能一些音频硬件接口。 
下面以公版 MT8676 播放音乐为例，通过 Playback_2 节点，打通DL2→ADDA_DL→PMIC 6338→Speaker 这条音频
路径： 
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
MT8676 Yocto Audio 
User Manual 
Confidential B 
 
图 1-11. 播放音乐的音频路径 
 
设定的配置 kcontrol 如下： 
• Connects DL2 to PMIC 
'ADDA_DL_CH1 DL2_CH1' 1 
'ADDA_DL_CH2 DL2_CH2' 1 
'ADDA_DL_CH3 DL2_CH1' 1 
'ADDA_DL_CH4 DL2_CH2' 1 
 
• Connects PMIC to Speaker: 
'HPL Mux'  'Audio Playback' 
'HPR Mux'  'Audio Playback' 
 
1.4 常见问题/故障排除 
 如何测试音频驱动？ 
当 Audio Driver 已经 ready 的时候，可以使用 Yocto 自带的 aplay/arecord/amixer 来进行手动测试。其中，amixer 用
来将 Audio Path 连通，aplay 用于播放声音，arecord 用来从 MIC 录音。以 Playback_2 播放为例，命令行如下： 
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

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Yocto Audio 
User Manual 
Confidential B 
 如何启用音频日志？ 
在开发或者解决 Bug 的时候，需要打开音频驱动的 log，来定位问题点。 
打开的方式： 
• 开启 Audio Driver 的 log： 
echo 1 > /proc/mtprintk 
• 设置完以后，即可使用 adb shell logcat 来查看输出的 log。 
 
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
MT8676 Yocto Audio 
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
# SRC0251 MT8676_Yocto_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf

SHA-256：e8c210d3eda459a4896411fdcf96720093501f411c3ffb5e73c672f0b80859b1

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0251.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2025-06-12
MT8676 Yocto Camera Sensor Driver 
JSON Arch User Manual 
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
版本记录 
版本 日期 作者 描述 
1.0 2025-06-12 周健民 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
1 Camera Driver JSON Arch ··········································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 配置/客制化指南 ···················································································································································· 4 
 如何添加一个新 sensor ······························································································································· 4 
 如何添加一个新的 Tuning 文件 ················································································································ 26 
附件一 附加条款 ····························································································································································· 28 
 
 
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
1.1 概述 
本章节主要说明 MT8676 Camera 在解耦 Refactor 之后的 sensor 移植方法以及相关问题的调试思路和方法。 
关于 Camera refactor 的设计架构和原理，请参考如下文档： 
• MT8678 JSON Design CN.ppt 
 
1.2 配置/客制化指南 
本节主要介绍 Camera Refactor 解耦架构方式下的移植指南。 
 如何添加一个新 sensor 
JSON 化仅支持 YUV sensor 
1.2.1.1 移植文件列表 
Yocto: 
• Kernel Space 
– \src\kernel\linux\v6.1_mt8676\co_device_module\arch\arm64\boot\dts\mediatek\cust_mt86
76_camera_v4l2.dtsi 
– \src\kernel\modules\mt8676\camera\imgsensor\src-v4l2\$(sensor_name).json 
• User Space 
– \src\multimedia\camera-hal\mt8676\mtkcam-
core\external\firmware\sensor\$(sensor_name).bin 
– \src\multimedia\camera-hal\mt8676\ mtkcam-
core\external\firmware\camera\metadata\$(sensor_name)\$(sensor_name).json 
– \src\multimedia\camera-hal\mt8676\mtkcam-
core\external\firmware\camera\tuning\$(sensor_name)_tuning_param.json 
• Config Files 
– \src\meta\meta-mediatek-mt8676\recipes-multimedia\mtkcam-mt8676\mtkcam-mt8676.bb 
 
1.2.1.2 在 Kernel 中添加 Sensor Firmware 文件 
Yocto： 
• Kernel Space 
– \src\kernel\modules\mt8676\camera\imgsensor\src-v4l2 
• User Space 
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
– \src\multimedia\camera-hal\mt8676\mtkcam-
core\external\firmware\sensor\$(sensor_name).bin 
 
$(sensor_name).json 文件由专用工具：Camera Firmware JSON Generator 产生。此工具是一个 web 网页界面，
开发者可根据页面提示，填入表单所需的内容，最后点击保存即可生成$(sensor_name).json 文件。 
网页工具表单的参数内容含义，可参考 MT8678 JSON Design CN.ppt 文档介绍。 
 
 
生成的$(sensor_name).json 文件需要保存到\src\kernel\modules\mt8676\camera\imgsensor\src-v4l2\
目录。 
 
 
在src-v4l2/目录下，执行 python3 gen_sensor_firmware.py ./sensor_name.json 命令。 
 
 
 
脚本执行成功后，在 src-v4l2/目录下生成sensor_name.bin 文件。 
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
 
 
将生成的$(sensor_name).bin 二进制文件，通过 adb push 到开发板的/vendor/firmware/sensor/目录，重启
开发板即可。 
 
 
注：通过 adb push firmware.bin 文件到开发板的/vendor/firmware/sensor/目录的方式，可以方便固件调
试，无需重复 rebuild driver source code。 
 
在确认 firmware 无需继续修改后，保存好 JSON file，下次 full build 代码即可将所有 firmware 文件编译到 image
中。整体烧录后，开发板系统即包含了所有的 firmware.bin 文件。 
1.2.1.3 修改 dts 文件 
Yocto: 
\src\kernel\linux\v6.1_mt8676\co_device_modules\arch\arm64\boot\dts\mediatek\cust_mt8676_cam
era_v4l2.dtsi 
 
通过分析硬件原理图找到当前 sensor 是挂在哪个 I2C 下面，然后在对应的 I2C 下面增加 sensor 配置，如下所示： 
• 增加了 sensor0 
 
注：如果改 sensor 需走 legacy 方式，则需要在 sensor node 下新增一个属性：mediatek, legacy-search; 
 
 
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
 
 
关于 seninf 和 sensor 的关联，可以参考下图，seninf_top 里 csi-port 的值是硬件实际连接的 csi-port。 
 
 
与 dts 里配置对应的就是上电时序的部分（如下所示），需要参考 sensor 规格书中的上电时序来配置。 
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
 
 
在最新的 max96712mipiyuv_sensor.c 代码版本上 pw_seq 的格式如下： 
 
 
1.2.1.4 增加新的 meta 文件 
复制一份 metadata 模板文件夹（\src\multimedia\camera-hal\mt8676\mtkcam-
core\external\firmware\metadata\max96712_mipi_yuv），将文件夹名称修改为当前移植的 sensor 名字（例
如 xxxx_mipi_yuv）。 
将 xxxx_mipi_yuv 文件夹下的所有 JSON 文件名中及对应 JSON 文件内的 sensor name，修改为当前移植的 sensor 的
名字，注意字母的大小写格式要跟模板文件的写法一致。 
以 max96712_mipi_yuv 为模板，需要将所有包含 max96712_mipi_yuv、MAX96712_MIPI_YUV 字样的 JSON 文件夹名
称修改为当前所移植的 sensor 名字。 
 
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
 
注： 
• 一颗 sensor 有好几份不同类型的 JSON 文件（都是以_SENSOR_DRVNAME_xxx.json 作为后缀），每一份 JSON 都
需要按照上面的方式修改。 
• 如果是 raw 或者其他类型的 sensor，就要复制对应 sensor 类型的 JSON 并以此为基础进行修改。 
• 如需修改分辨率，可以参考下面的 JSON，改为新的分辨率。 
 
 
修改完毕后，将xxxx_mipi_yuv/文件夹，通过 adb push 的方式，push 到开发板的
/vendor/firmware/camera/metadata/文件夹，重新启动即可。 
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
在确认 metadata 无需继续修改后，请将对应的 metadata 文件放到\src\multimedia\camera-
hal\mt8676\mtkcam-core\external\firmware\metadata\max96712_mipi_yuv 目录下，然后执行完整编译工
程的命令，即可将所有 firmware 文件编译到 image 中。整体烧录后，开发板系统即包含了所有的 metadata 文件。 
注：若在 full build 过程中出现类似下面的错误，则表示不同版本之间会有些原生 basic tag 的差异，版本迁移的时
候会同步更新一些 tag 到 mtk_metadata_tag.h，进而需要使用脚本更新 MapStringToEnum.cpp。 
mtkcam-core/external/MapStringToEnum.cpp:738:41: error: use of undeclared identifier 
'MTK_MFNR_FEA                                       TURE_STORE_BSS2META'; did you mean 
'MTK_MFNR_FEATURE_START'? 
{"MTK_MFNR_FEATURE_STORE_BSS2META", MTK_MFNR_FEATURE_STORE_BSS2META}, 
^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
 
更新脚本执行方法：进入 mtkcam-core/external/目录，执行 python MapStringToEnum.py。 
再次重新进行 full build 命令即可。 
1.2.1.5 配置 Sensor Format 
请在 web 界面 Camera Firmware JSON Generator 中修改。 
根据 bridge 输出的 format 配置 UYVY 或者 YUYV： 
 
查找所有配置 sensor_output_dataformat 的地方改为实际的 format。 
1.2.1.6 配置 modestruct  
请在 web 界面 Camera Firmware JSON Generator 中修改。 
与 vendor 确认 setting 的相关参数填入到结构体中。 
 
Pclk->pixel clock，单位 Hz 
Linelength->HTS 
Framelength->VTS 
Linelength × framelength = pclk 
Grabwindow_width-> camera size 宽 （在 MT8676 上没有这个值，之后会填在 solution 的位置） 
Grabwindow_height->camera size 高（在 MT8676 上没有这个值，之后会填在 solution 的位置） 
Mipi_pixel_rate-> mipi datarate × lane_number/bitdepth，YUV bitdepth = 16 
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
 
 
下图是借用了之前版本的一个对 winsize info 的解释，来描述各个字段的含义： 
 
限制: full size（4:3）或 full size（16:9）的宽和高需要进行 4 倍数对齐。 
配置 sensor 输出的 size 宽高，与 Grabwindow_width/Grabwindow_height size 一致 
 
Grab window 要求： 
1. 设置的宽必须是 16 的倍数，高必须为 4 的倍数。 
2. 相同比例下视角一致：4:3 与 16:9 要求 sensor 输出的 window 保证水平方向和 full size 视角一致。 
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
3. Grab window 设置建议和 sensor 输出的 window 一致。 
特殊情况下是：grabwindow_width(height) ≤ sensor output width(height)-startx(y) 
1.2.1.7 配置 static_ctx 
请在 web 界面 Camera Firmware JSON Generator 中修改。 
如下图所示： 
1. sensor_id 字段是填对应的 sensor ID。 
2. i2c_add_table 一般只配置 0x52 即可，就是实际的解串器的地址。 
3. 配置分辨率，这里就是前面说的 grabwindow 的值。 
4. 配置mipi_lane_num，这里表示是 MIPI 的 lane 的个数。 
 
 
5. cam_type 是按照模组场景的类型填写，如果是单 sensor 的话，可以填 MTK_SENSOR_TYPE_SINGLE，它有如下
值可以选择： 
 
– SENSOR_TYPE_COMB_AVM 表示组帧 AVM 
– SENSOR_TYPE_MUTI 表示 multicam 
– SENSOR_TYPE_MULTI_ASYNC 表示各 VC 通道相互独立不影响的 multicam 
– SENSOR_TYPE_NON_COMB_AVM 表示非组帧 AVM 
 
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
6. sensor_output_dataformat 表示模组输出的数据的 format，填实际的 format 即可。 
 
 
关于 multicam group info 的配置，在 JSON web tool 里可以参考如下配置： 
 
 
 
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
最终生成到 JSON file 里会是下面这样的格式，分别是 1 个 master sensor 和 4 个 slave sensor 的 dts 里的 sensor ID 和
VC 信息。 
 
 
关于multicam_group_info 的配置，可以参考如下配置： 
需要填有几路 VC,要填写四路。如果是只有两个或者三个的 multicam，也需要填完 4 个通道的信息，没有使用到的
通道，vc_data_type 填 0 即可。 
 
 
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
1.2.1.8 配置 VC 信息 
请在 web 界面 Camera Firmware JSON Generator 中修改。 
如果是单个 VC，可以进行如下配置： 
 
 
如果是有多个 VC，主要是修改 channel 和user_data_desc。 
1.2.1.9 配置获取 Sensor ID  
请在 web 界面 Camera Firmware JSON Generator 中修改。 
  
1.2.1.10 配置 Sensor Init  
请在 web 界面 Camera Firmware JSON Generator 中修改。 
主要是配置模组的设置，需要客户和 vendor 调试生成 
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
 
1.2.1.11 配置 get_sensor_usage 
请在 web 界面 Camera Firmware JSON Generator 中修改。 
 
它的值可以选择下面几种，COMB 表示组帧 AVM，MUTI 表示 multicam，NONCOMB 表示非组帧 AVM，
MUTICAM_ASYNC 表示 slave 独立不会相互影响的 multicam，单 sensor 的话配置为 SINGLE。 
 
 
1.2.1.12 配置 Streaming Control 
请在 web 界面 Camera Firmware JSON Generator 中修改。 
初始化的设定全部放到 sensor_init() 函数里。MIPI enable 和disable 函数放到streaming_control() 函
数中。 
 
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
1.2.1.13 subdrv_static_ctx 的成员解析 
Member Meaning 
sensor_id Sensor ID define in kd_imgsensor.h. 
reg_addr_sensor_id Sensor register address where sensor ID is read. Up to 3 bytes. 
i2c_addr_table I2C write ID, end in 0xff, 4 for maximum. e.g, i2c_addr_table = {0x20, 0x6e, 0xff},. 
eeprom_info The address of eeprom_info_struct. If there is no eeprom device, set to 0. 
eeprom_num Array size of the eeprom_info_struct. If there is no eeprom device, set to 0.  
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
seamless_switch_support If sensor supports seamless switch, set 1 to enable seamless switch function.  
temperature_support Set to 1 if sensor supports temperature sensor readout. 
g_temp Implement get temperature function. 
g_gain2reg Implement analog gain to register mapping rule. 
s_gph Implement set enable/disable group hold function. 
s_cali Implement the function to write data from eeprom_info_struct to sensor (ex: QSC, 
cross-talk, …) 
Member Meaning 
reg_addr_stream Sensor register address where streaming on/off is controlled. 
reg_addr_mirror_flip Sensor register address where mirror/flip on/off is controlled. No use to set to 0. 
reg_addr_exposure Sensor register address where exposure line is set. Up to 3 channels of exposure. Up 
to 3 bytes. 
long_exposure_support Set to 1 if sensor supports long exposure left shift function. 
reg_addr_exposure_lshift Sensor register address where long exposure left shift is set. 
reg_addr_ana_gain Sensor register address where analog gain is set. Up to 3 channels of exposure. Up to 
3 bytes. 
reg_addr_frame_length Sensor register address where framelength is set.  
reg_addr_temp_en If “temperature_support” is set to 1. Sensor register address where temperature 
sensor on/off is controlled. 
reg_addr_temp_read If “temperature_support” is set to 1. Sensor register address where temperature 
output is read. 
reg_addr_auto_extend For Sony sensor, sensor register address where auto extend function enable/disable  is 
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
 
1.2.1.14 Sensor Mode 配置 
Subdrv_mode_struct mode_struct[] 这个结构体数组是用来存不同 Sensor Mode 的数据配置的。 
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
下面以 Preview 为例子说明了一些需要客户修改的字段，对于 YUV sensor，一般后面的 Sensor Mode 和 Preview 是
完全一样的。对于 raw sensor 可能会有差异，根据实际需要来配置。 
 
 
 
 
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
 
 
1.2.1.15 驱动功能 
 Driver 操作函数 List 
Driver 函数的 list 如下： 
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
 
 
在 adapter 名字开头的imgsensor 的代码里往往是通过 subdrv_call 的方式来调用到 driver 代码里的，就是上面
的函数 list，比如： 
 
上面这个调用就会 call 到上面函数 list 里的get_sensor_id。 
上面 list 里有很多 common 开头的函数，这个部分用的是通用的处理流程。不需要在 sensor driver 里特别实现， 
下面就不做过多介绍了。 
针对贵司可能改到的 get_imgsensor_id 和open 函数，请参考下面两个章节。 
 get_imgsensor_id 函数 
开机 search sensor 时会通过get_imgsensor_id 函数读取 ID。 若能成功读到 ID，在 UI 上显示 Camera APP 的图
标。 
下面函数主要有两个功能：一获取 sensor ID，二判断是否有连接到模组。 
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
 
 open 函数 
每次进 camera 时会调用。 
读sensor_id，确认 I2C 通信是否正常。 
调用sensor_init 函数初始化 ctx 结构体中的一些变量。 
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
 
 
注： 
1. 关于分辨率的说明 
由于场景不同，给到 user space 的图的大小和实际 seninf 收取的 VC 的大小不同， 
所以在 driver 里会有两个分辨率，客户可以以 max96712isx 这个非组帧 AVM 的 driver 为例。 
搜索下面的宏可以对照配置。 
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
 
 
2. 关于 dts 里 GPIO 供电的部分，还可以选择 regulator 封装的方式 
用法如下： 
 
 
 
 
 
 
 
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
3. UT 测试指令 
C:\Users>adb shell sentest_v4l2    //just search sensor, not streaming 
 
[show_Sensors]sensorNum 2 
[show_Sensors]name:SENSOR_DRVNAME_OV05A20_MIPI_RAW type:0 
[show_Sensors]index:0, SensorDevIdx:1 
[show_Sensors]name:SENSOR_DRVNAME_IMX576_MIPI_RAW type:0 
[show_Sensors]index:1, SensorDevIdx:2 
[main]Param: 1 <sensorDev> <scenario> <fps> 
[main]<sensorDev> : main(1), Sub(2), Main2(4), sub2(8), Main3(16) 
[main]<scenario>  : Pre(0), Cap(1), VD(2), slim1(3), slim2(4) 
显示 sensorNum 不为 0，并且展示了传感器的具体名称，说明传感器搜索成功。接下来测试传感器的输出 。 
 
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
4. 查看 seninf 状态的指令如下，查到结果后，可以发给联发科技确认 
 
 
5. 模组上电情况下，通过 I2C 指令直接访问 max96712 
下面是读 0x108 reg 的值： 
echo 0x52 0x108 > /sys/devices/platform/soc/13b30000.i2c/i2c-8/8-0052/debug_i2c_ops 
 
 
 
下面是写 0x8a0 reg 为 0x84： 
echo 0x52 0x8a0 0x84> /sys/devices/platform/11cc0000.i2c/i2c-8/8-0052/debug_i2c_ops 
 
6. 开 sensor driver log 的指令 
echo 1 > /sys/module/imgsensor/parameters/sensor_debug 
 
7. 假如串口 log 打印停止了的话，开 UART 的指令 
adb shell setprop persist.vendor.uartconsole.enable 1 
 
 如何添加一个新的 Tuning 文件 
设计原理参考：MT8678 JSON Design CN.pptx 文档 
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
添加方法： 
Porting 一个新 sensor，在 tuning 的部分，只需要新增一份${SENSOR_DRIVER_NAME}_tuning_param.json 文件即
可。 
 
注： 
• 若需编译进 image，则将 JSON 文件放到 \src\multimedia\camera-hal\mt8676\mtkcam-coremtkcam-
core\external\firmware\camera\tuning\目录 
• 若需单独额外增加 sensor 的 tuning JSON file，则使用 adb push tuning JSON file 到 
vendor/firmware/camera/tuning/ 目录 
 
${SENSOR_DRIVER_NAME}_tuning_param.json 这个文件可以复制一份现有模板，改一下 sensor_driver_name
的名字即可。 
 
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
# SRC0252 MT8676_Yocto_Camera_Driver_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Camera_Driver_User_Manual_V1.1.pdf

SHA-256：781dfbb6e151225f9c1308b8788afc82fee19b61ceadee192e33f09fd992ffa5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0252.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.1 
出版日期:  2024-10-15
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 Jianmin Zhou Official release 
1.1 2024-10-15 Jianmin Zhou 在 1.3.1.9 配置 static_ctx 中增加 Multicam 配置信息 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
1 Camera Driver ···························································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 架构/进程概述 ························································································································································ 4 
1.3 配置/客制化指南 ···················································································································································· 4 
 如何添加一个新的 sensor ··························································································································· 5 
1.3.1.1 移植文件列表 ································································································································ 5 
1.3.1.2 修改 config 文件 ····························································································································· 5 
1.3.1.3 在 Kernel 中添加 sensor 文件 ········································································································ 5 
1.3.1.4 添加 sensor ID 和 sensor name ······································································································ 6 
1.3.1.5 修改 dts 文件 ································································································································· 6 
1.3.1.6 增加新的 meta 文件 ······················································································································ 8 
1.3.1.7 配置 sensor format ························································································································· 8 
1.3.1.8 配置 modestruct ····························································································································· 8 
1.3.1.9 配置 static_ctx ······························································································································ 10 
1.3.1.10 配置 VC 信息 ································································································································ 11 
1.3.1.11 配置获取 sensor ID 函数·············································································································· 12 
1.3.1.12 配置 sensor init 函数 ···················································································································· 12 
1.3.1.13 配置 get_sensor_usage 函数 ······································································································· 13 
1.3.1.14 Sensor Mode 配置 ························································································································ 15 
1.3.1.15 Driver 功能···································································································································· 16 
附件一 附加条款 ····························································································································································· 23 
 
 
 
 
 
 
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
1 Camera Driver 
1.1 概述 
本章节主要说明 MT8676 Yocto camera 移植方法以及相关问题的调试方法和思路。 
 
1.2 架构/进程概述 
Camera driver 主要分 User space 和 Kernel space 两部分，两边通过 IOCTL 传递参数。Raw sensor metadata 等放在
User space；sensor 的相关设定和 power control 是在 Kernel space。 
 
 
 
1.3 配置/客制化指南 
本节主要介绍 Camera driver 移植指南。 
 
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
 如何添加一个新的 sensor 
这部分对于 YUV 和 Raw sensor 步骤基本一致。 
 
1.3.1.1 移植文件列表 
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
 
1.3.1.2 修改 config 文件 
• \src\kernel\linux\ 
v6.1_mt8676\co_device_module\arch\arm64\configs\auto8676p1_64_defconfig 
– CONFIG_CUSTOM_KERNEL_IMGSENSOR = “xxxx_mipi_raw  xxxx_mipi_raw xxxx_mipi_yuv” 
 
在上面增加新的 sensor name。 
 
1.3.1.3 在 Kernel 中添加 sensor 文件 
• \src\kernel\modules\mt8676\camera\imgsensor\src-v4l2\common\$CamDrv\ 
参考其他 sensor，在上面目录增加自己的 sensor driver 的目录，命名格式可以参考下图： 
 
 
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
 
1.3.1.4 添加 sensor ID 和 sensor name 
• \src\multimedia\mtkcam-mt8676\mtkcam-utils\kernel-headers\mediatek\kd_imgsensor.h 
• \src\kernel\linux\v6.1_mt8676\co_device_module\drivers\misc\mediatek\imgsensor\inc\kd_i
mgsensor.h 
 
在以上两个文件内都添加 sensor ID 和 sensor name： 
• 添加 sensor ID 
 
 
• 添加 sensor name 
 
 
1.3.1.5 修改 dts 文件 
\src\kernel\linux\v6.1_mt8676\co_device_module\arch\arm64\boot\dts\mediatek\cust_mt8676_came
ra_v4l2.dtsi 
通过分析硬件原理图找到当前 sensor 是挂在哪个 I2C 下面，然后在对应的 I2C 下面增加 sensor 配置，如下所示： 
• 增加了 sensor0 
 
 
 
关于 seninf 和 sensor 的关联，可以参考下图，seninf_top 里 csi-port 的值是硬件实际连接的 csi-port。 
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
 
 
与 dts 里配置对应的就是上电时序的部分（如下所示），需要参考 sensor 规格书中的上电时序来配置。 
 
 
 
以 max96712 为例 
 
 
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
1.3.1.6 增加新的 meta 文件 
参考 max96712_mipi_yuv 文件进行修改添加，可以直接复制，然后修改文件名和文件内的 sensor name。 
• \src\multimedia\camera-hal\mt8676\custom\common\hal\imgsensor_metadata\sensor\ 
• \src\multimedia\camera-hal\mt8676\custom\mt6897\hal\imgsensor_metadata\ 
 
如需增加新的分辨率，可以参考以下代码： 
 
 
 
1.3.1.7 配置 sensor format 
根据 bridge 输出的 format 配置 UYVY 或者 YUYV： 
\src\kernel\modules\mt8676\camera\imgsensor\src-
v4l2\common\max96712_mipi_yuv\max96712mipiyuv_Sensor.c 
 
查找所有配置 sensor_output_dataformat 的地方改为实际的 format。 
 
 
1.3.1.8 配置 modestruct  
与供应商确认设置 的相关参数填到结构体中。 
 
Pclk->pixel clock， 单位 Hz 
Linelength->HTS 
Framelength->VTS 
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
linelength × framelength × fps= pclk 
Grabwindow_width-> camera size 宽 （在 MT8676 上没有这个值，之后会填在 solution 的位置） 
Grabwindow_height->camera size 高（在 MT8676 上没有这个值，之后会填在 solution 的位置） 
Mipi_pixel_rate-> mipi datarate × lane_number/bitdepth，YUV bitdepth = 16 
 
 
下图是借用了之前版本的一个对 winsize info 的解释，来描述各个字段的含义。 
 
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
 
限制: full size（4:3）或 full size（16:9）的宽和高需要进行 4 倍数对齐。配置 sensor 输出的 宽高，与
Grabwindow_width/Grabwindow_height 的大小一致。 
Grab window 要求： 
1. 设置的宽必须是 16 的倍数，高必须为 4 的倍数。 
2. 相同比例下视角一致：4:3 与 16:9 要求 sensor 输出的 window 保证水平方向和 full size 视角一致。 
3. Grab window 设置建议和 sensor 输出的 window 一致。 
特殊情况下是：grabwindow_width(height) ≤ sensor output width(height)-startx(y) 
 
1.3.1.9 配置 static_ctx 
如下图所示： 
1. sensor_id 字段需填对应的 sensor ID。 
2. i2c_add_table 一般只配置 0x52 即可，即实际的解串器的地址。 
3. 配置分辨率，这里就是前面提到的 grabwindow 的值。 
4. 配置 mipi_lane_num,这里表示是 MIPI 的 lane 的个数。 
5. cam_type 是按照模组场景的类型填写，如果是单 sensor 的话，可以填 MTK_SENSOR_TYPE_SINGLE，它有如下
值可以选择以下几种： 
– SENSOR_TYPE_COMB_AVM 表示组帧 avm 
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
– SENSOR_TYPE MUTI 表示 multicam 
– SENSOR_TYPE_NON_COMB_AVM 表示非组帧 avm 
如配置为 SENSOR_TYPE_MUTI, 还需配置 group_info 如下： 
 
 
6. sensor_output_dataformat 表示模组输出的数据的 format，填实际的 format 即可。 
 
 
 
1.3.1.10 配置 VC 信息 
如果是单个 VC，可以进行如下配置： 
 
 
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
如果是有多个 VC，可以进行如下配置，主要是修改 channel 和 user_data_desc： 
 
 
 
1.3.1.11 配置获取 sensor ID 函数 
  
 
1.3.1.12 配置 sensor init 函数 
下面的函数内主要是配置模组的设置，需要客户和供应商调试生成。 
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
 
 
1.3.1.13 配置 get_sensor_usage 函数 
 
它的值可以选择下面几种，COMB 表示组帧 AVM，MUTI 表示 multicam，NONCOMB 表示非组帧 avm，单 sensor 的
话配置为 SINGLE。 
 
 
 Streaming Control 
初始化的设定全部放到 sensor_init() 函数里。MIPI enable 和 disable 函数放到 streaming_control() 函数中。 
 
 
 subdrv_static_ctx 的成员解析 
Member Meaning 
sensor_id Sensor ID defined in kd_imgsensor.h.  
reg_addr_sensor_id Sensor register address where sensor ID is read. Up to 3 bytes. 
i2c_addr_table I2C write ID, end in 0xff, 4 for maximum. E.g., i2c_addr_table = {0x20, 0x6e, 0xff}, . 
eeprom_info The address of eeprom_info_struct. If there is no eeprom device, set to 0. 
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
eeprom_num Array size of the eeprom_info_struct. If there is no eeprom device, set to 0. 
Resolution Full pixel size of sensor output. 
mirror Set IMAGE_HV_MIRROR if the sensor orientation is 180 degrees difference from module 
orientation. 
mclk Overwrite MCLK frequency (MHz) 
isp_driving_current Overwrite MCLK driving current (mA) 
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
reg_addr_stream Sensor register address where streaming on/off is controlled. 
Reg_addr_mirror_flip Sensor register address where mirror/flip on/off is controlled. No use when set to 0. 
reg_addr_exposure Sensor register address where exposure line is set. Up to 3 channels of exposure. Up to 3 bytes. 
long_exposure_support Set to 1 if sensor supports long exposure left shift function. 
reg_addr_exposure_lshift Sensor register address where long exposure left shift is set. 
reg_addr_ana_gain Sensor register address where analog gain is set. Up to 3 channels of exposure. Up to 3 bytes. 
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
 
1.3.1.14 Sensor Mode 配置 
Subdrv_mode_struct mode_struct[] 这个结构体数组是用来存不同 Sensor Mode 的数据配置的。 
下面以 Preview 为例子说明了一些需要客户修改的字段，对于 YUV sensor，一般后面的 Sensor Mode 和 Preview 是
完全一样的。对于 Raw sensor 可能会有差异，根据实际需要来配置。 
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
 
 
1.3.1.15 Driver 功能 
 Driver 操作函数 list 
Driver 函数的 list 如下： 
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
 
 
在以 adapter 名字开头的 imgsensor 的代码里，其往往是通过 subdrv_call 的方式来调用到 driver 代码里的，就是上
面的函数 list，比如： 
 
 
上面这个调用就会 call 到上面函数 list 里的 get_sensor_id 
上面 list 里有很多 common 开头的函数，这个部分是用的通用的处理流程。不需要在 sensor driver 里特别实现，下
面就不做过多介绍了。 
下面针对贵司可能改到的 get_imgsensor_id 和 open 函数，请参考下面两个章节。 
 
 get_imgsensor_id 函数 
开机 search sensor 时会通过 get_imgsensor_id 函数读取 ID。 若能成功读到 ID，在 UI 上显示 camera APP 的图标. 
下面函数主要有两功能：一获取 sensor ID，二判断是有连接到模组。 
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
 
 
 open 函数 
每次进 camera 时会调用。 
读 sensor ID, 确认 I2C 通信是否正常。 
调用 sensor_init 函数初始化 ctx 结构体中的一些变量。 
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
 
 
 
 
批注： 
1. 关于分辨率的说明 
由于场景不同，给到 User space 的图的大小 和 实际 seninf 收取的 VC 的大小不同， 
所以在 Driver 里会有两个分辨率，客户可以以 max96712isx 这个非组帧 avm 的 Driver 为例。 
搜索下面的宏进行对照配置。 
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
 
 
 
2. 关于 dts 里 GPIO 供电的部分，还可以选择 regulator 封装的方式。 
用法如下： 
 
 
 
 
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
 
 
 
查看 seninf 状态的指令如下，查到结果后，可以发给联发科技确认。 
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
# SRC0253 MT8676_Yocto_Camera_Turbo_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Camera_Turbo_User_Manual_V1.0.pdf

SHA-256：6fb99f5d4fea2f56057a054ce982ffcf47eb47e15dddb956458460b12e92eec3

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0253.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-08-12
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
MT8676 Yocto Camera Turbo 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 Houchu.Fan 正式版 
 
  
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
MT8676 Yocto Camera Turbo 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 Camera 架构概述 ······················································································································································ 4 
2 Camera Turbo ···························································································································································· 5 
2.1 架构·········································································································································································· 5 
2.2 控制流程 ·································································································································································· 6 
附件一 附加条款 ······························································································································································· 8 
 
 
图片目录 
图 1-1. Camera 架构概述 ·························································································································································· 4 
图 2-1. Camera MW 架构 ·························································································································································· 5 
图 2-2. MW 类图 ········································································································································································ 6 
图 2-3. MW 类图 ········································································································································································ 7 
 
 
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
MT8676 Yocto Camera Turbo 
User Manual 
Confidential B 
1 Camera 架构概述 
 
图 1-1. Camera 架构概述 
 
Camera Turbo 主要分为四个部分： 
• 入口层（Entry）：是进入 MW 的入口。不同的操作系统可以调用入口层的代码通过适配层适配  MW。 
• 定制层（Custom）：通过这一层，客户可以执行定制操作。 
• 接口层（IF）：由入口层使用的接口层。在这里生成相机会话和原生相机的逻辑。接口层主要实现请求和配
置相关操作的流程框架。 
• 核心层（Core）：是 MW 的核心层。它主要与驱动程序通信，发送请求并获取结果，最后通过接口层回调到  
APP。 
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
MT8676 Yocto Camera Turbo 
User Manual 
Confidential B 
2 Camera Turbo  
2.1 架构 
 
图 2-1. Camera MW 架构 
 
Camera Turbo 的主要架构图包括入口层、接口层和核心层。定制层主要供客户使用。如果不使用，可以直接绕过。  
 
• 入口层 主要由 Camera 和 CameraProvider 组成。CameraProvider 主要向上层提供相机列表，并获取和控制相
机的属性。Camera 主要提供接口给上层，以控制相机传感器的控制行为。 
• 接口层 主要是管线，它是构建底层节点连接关系的管理器。ImageProc 主要便于回调，为客户提供定制行
为。同时，客户也可以通过 ImageProc 定制管线。 
• 核心层 主要由 ImageNode 的子类组成。这些子类与底层驱动交互，对请求实施不同的操作。例如， FdNode 
主要用于面部识别，captureNode 用于相机功能，MCNRNode 用于图像处理，最终结果将通过 ImageNode 回
调传递到接口层。  
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
MT8676 Yocto Camera Turbo 
User Manual 
Confidential B 
2.2 控制流程  
 
图 2-2. MW 类图 
 
图 2-2 主要是入口层和定制层之间的类流交互图。主要是上层通过  CameraProvider 的 open 接口获取 Camera，
Camera 通过调用 Camera TurboEngine 获取 CustomizationManager。CustomizationManager 是定制层的管理器，通过
它实现对客户定制行为的管理。 
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
MT8676 Yocto Camera Turbo 
User Manual 
Confidential B 
 
图 2-3. MW 类图 
 
接口层（IF layer）与核心层（CORE）之间的交互逻辑主要是上层的 CameraProvider 的 open 接口将调用 
NativeCameraManager。NativeCameraManager 分配可以在底层操作的 NativeCamera。每个 NativeCamera 具有管线
属性，这决定了每个 NativeCamera 实际运行的流程。Camera 的配置会创建一个新的 CameraSession。
CameraSession 创建自己的 Pipeline。连接的 ImageProc 保存在 Pipeline 中。ImageProc 创建相应的 ImageNode。每个 
CameraSession 都有自己的 ImageProc 列表。用户可以在 ImageProc 中执行定制行为。ImageProc 使用 回调接口
MediumHandler。ImageNode 的回调会使用 ImageProc。 
 
 
 
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
MT8676 Yocto Camera Turbo 
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
# SRC0254 MT8676_Yocto_Display_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Display_User_Manual_V1.0.pdf

SHA-256：b229bc10d601f283bcc9faf20155c3633366025030f16e008b2a5d607067fa68

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0254.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-08-12 
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 王煜 正式版 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 显示器 & 多屏 ··························································································································································· 4 
1.1 概述·········································································································································································· 4 
 基本概述 ······················································································································································ 4 
 缩略词 ·························································································································································· 4 
 性能 ······························································································································································ 4 
1.2 架构/流程概要 ························································································································································ 5 
 HW 架构 ······················································································································································· 5 
 SW 架构 ························································································································································ 6 
1.2.2.1 Android ··········································································································································· 6 
1.2.2.2 Hypervisor (Yocto + Android) ·········································································································· 7 
1.3 配置/客制指南 ························································································································································ 7 
 DSI SuperFrame 双屏配置 ···························································································································· 7 
 DP SuperFrame 双屏配置 ····························································································································· 7 
 屏幕旋转角度配置（横屏竖用/竖屏横用） ····························································································· 8 
 OVL 配置 ······················································································································································· 8 
1.4 常见问题/故障排除 ················································································································································ 8 
 hwc CMD ······················································································································································· 8 
 显示驱动 CMD ············································································································································· 8 
 Pattern ·························································································································································· 9 
 黑屏 ···························································································································································· 10 
 花屏/闪屏 ··················································································································································· 10 
 卡顿 ···························································································································································· 11 
附件一 附加条款 ····························································································································································· 12 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 4 
表 1-2. 性能 ··············································································································································································· 4 
 
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
1 显示器 & 多屏 
1.1 概述 
 基本概述 
本章节主要介绍 MT8676 显示器架构以及多屏配置指南。 
 
 缩略词 
表 1-1. 缩略词 
缩略词 全称 释义 
CRTC Cathode Ray Tube Controller 阴极射线管控制器 （即显示控制器） 
DP Display Port 数字式视频接口标准 
DPI Digital Parallel Interface  数字并行接口 
DSC Display Stream Compression 显示流压缩 
DSI Display Serial Interface 显示串行接口 
DTS Device Tree 设备树 
HWC Hardware Composer 硬件合成器 
LCM Liquid Crystal Display Module 液晶显示模组 
SerDes Serializer/Deserializer 加串器/解串器 
 
 性能 
表 1-2. 性能 
DISP pipeline 10bit pipe x 3 (MAX 688MHz at 0.75V) 
DSI DSI0 + DSI1 
C/D PHY Combo 4-lane x 2 
DPHY: 2.5Gbps/lane 
DP DP1.4, 4-lane 8.1 Gbps/lane 
(4-lane mode conflict with USB3) 
Panel number 1~6 
OVL layers OVL0~OVL7: Total 16 layers 
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
OVL De-comp. AFBC (RGBA8888/RGB888/RGB565) 
Compression VESA DSC 1.2 (2 slice x 2) 
 
1.2 架构/流程概要 
 HW 架构 
 
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
 SW 架构 
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
 
 
1.3 配置/客制指南 
 DSI SuperFrame 双屏配置 
DSI0/1 支持输出 side by side superframe，驱动双屏显示。需要在 dts 里打开 virt_dsi 节点(如下是 DSI0 的配法)，其
他 LCM 配置请参考 MT8676_DSI_Panel_User_Manual_V1.0。 
 
 
 DP SuperFrame 双屏配置 
DP 支持输出 side by side superframe，驱动双屏显示。需要在 dts 里打开 virt_dp 节点，其他 LCM 配置请参考
MT8676_DSI_Panel_User_Manual_V1.0。 
 
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
 屏幕旋转角度配置（横屏竖用/竖屏横用） 
路径：device/mediateksample/project/device-vext.mk 
PRODUCT_PROPERTY_OVERRIDES += ro.vendor.sf.orientation_external1=xxx 
 
上述 ro.vendor.sf.orientation_externaX 表示对应 X 屏的旋转角度，如果屏幕是竖屏横显，一般 X 屏就需要
被设置成 90°。 
 
 OVL 配置 
可以在 DTS 中的 dispsys_config 节点中配置每条 CRTC 的 OVL，如下示例代码就是给 CRTC0 配置了 4 个 OVL，一共 8
个图层。 
 
 
1.4 常见问题/故障排除 
 hwc CMD 
Log cmd： 
adb shell setprop persist.vendor.debug.hwc.log V && adb shell setprop 
vendor.debug.hwc.skip_log 0 && adb shell dumpsys SurfaceFlinger  
 
Dump sf info： 
adb shell dumpsys SurfaceFlinger > sf.log 
 
Force gpu （gpu 叠图）： 
adb shell service call SurfaceFlinger 1008 i32 1 
 
 显示驱动 CMD 
On 表示开，Off 表示关。 
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
 
 
 
Irq log: 
adb shell “echo irq:on > /d/mtkfb” 
如果要抓开机 log，需要直接改代码： 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
 
抓 display diagnose dump: 
adb shell "echo diagnose > /sys/kernel/debug/mtkfb && cat /sys/kernel/debug/mtkfb" > 
mtkfb.txt 
 
 Pattern 
首先要打开 register debug。 
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
 
 黑屏 
• 背光是否开启 
• 如果有 bridge ic, 检查 bridge ic 是否 OK 
• dsi/dp pattern 是否 OK 
• screencap 是否 OK 
adb shell screencap -d 0/1 /sdcard/1.png 
 
如果以上几点都 OK，最后就需要 display owner 详细看 log 来定位问题。 
 
 花屏/闪屏 
• 看 log 中是否有 DISP_OVL/RDMA underflow/abnormal 
– size 配置是否 OK 
▪ cmd:  
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
adb shell “echo mobile:on > /d/mtkfb” 
– clk/dram 不够 
▪ clk  
o dump: 
adb shell " echo fmeter > /proc/clkdbg ; cat /proc/clkdbg | grep –e disp" 
o force 最大： 
adb shell "echo 0 0 > /sys/module/mtk_mmdvfs_debug/parameters/force_step" 
▪ dvfs 
o dump: 
adb shell "cat /sys/kernel/helio-dvfsrc/dvfsrc_dump | grep -e uv -e Mbps" 
o force 最大： 
adb shell "echo 0 > /sys/kernel/helio-dvfsrc/dvfsrc_force_vcore_dvfs_opp" 
• Force GPU 是否 OK 
adb shell service call SurfaceFlinger 1008 i32 1 
• dsi/dp pattern 是否 OK 
 
 卡顿 
• 看 main log 是否有 fence timeout 
 
• 看 kernel log 是否有 underflow/abnormal 的 log 
• 开启 fence log,看对应 fence 是否 release 
adb shell “echo fence:on > /d/mtkfb” 
• 抓 systrace 看耗时位置 
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

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Yocto Display 
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
# SRC0255 MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf

SHA-256：36a4f8b59bdec2f096c363d35b0de8b4d8cb04431a30215195a6fad2122094a5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0255.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-08-12 
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 涂红云 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
1 概述 ··········································································································································································· 5 
2 点屏前置条件 ··························································································································································· 5 
2.1 从屏厂或者串行器厂商获取如下信息 ·················································································································· 5 
2.2 原理图审查 ······························································································································································ 5 
3 新增屏驱 ··································································································································································· 6 
3.1 Device 的修改 ·························································································································································· 6 
3.2 LK2 的修改 ······························································································································································· 6 
3.3 Kernel 的修改 ·························································································································································· 7 
4 重要事项 ··································································································································································· 8 
5 LK 驱动 ······································································································································································ 8 
5.1 增加 LK2 屏驱 ·························································································································································· 9 
5.2 编写驱动 ·································································································································································· 9 
6 Kernel DRM 驱动 ····················································································································································· 15 
6.1 增加 Kernel 驱动 ··················································································································································· 16 
6.2 编写驱动 ································································································································································ 16 
7 精确的 FPS 设置 ······················································································································································ 20 
8 Debug SOP ······························································································································································· 21 
8.1 Lk 阶段 Debug ························································································································································ 21 
8.2 Kernel 阶段 Debug ················································································································································· 22 
8.3 Resume 阶段 Debug ·············································································································································· 23 
8.4 花屏 Debug ···························································································································································· 23 
8.5 含有 Bridge 屏的 Debug ········································································································································ 25 
9 Dump Reg ································································································································································ 25 
9.1 LK 阶段 ··································································································································································· 25 
9.2 Kernel Dump reg ···················································································································································· 25 
9.3 adb 命令 dump reg ················································································································································ 26 
9.4 Test Pattern 命令 ··················································································································································· 26 
9.5 分析 reg ································································································································································· 27 
10 使用 MTK max96789 panel driver ···························································································································· 28 
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
附件一 附加条款 ····························································································································································· 37 
 
 
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
1 DSI Panel 
1.1 概述 
本文主要介绍 Panel 驱动移植 SOP 以及相应的 debug 技巧。 
1.2 点屏前置条件 
1.2.1 从屏厂或者串行器厂商获取如下信息 
• 屏厂要在治具上使用外部输入信号点亮屏 
• 点屏前确定“上下电时序、几个 port、几个 ddic、cmd/vdo mode、Cphy/dphy、Lane number” 
• Init/deinit cmd（一定要是第一点提到的 cmd，即“要在治具上使用外部输入信号点亮屏”） 
• Width/height/vfp/vbp/vsa/hfp/hbp/hsa/fps/mipi clock 等等 
• Bist mode cmd（可选，点不亮时要求提供） 
• Dsc 参数，几个 slice（如果要开 dsc，请先根据参考初步判断一下 MTK IC 是否能支持） 
• 其他功能如何实现（backlight/fps change/cabc…） 
• 如果接串行器，串行器要如何设置等等 
 
1.2.2 原理图审查 
• 屏的电源如何控制 
– 如果使用 MTK regulator，请找 PMIC owner 询问如何控制屏的电源（LK、Kernel 配置方法都要获取到） 
– 用第三方 IC 请找第三方要 
• GPIO 如何配置 
– 拿到 GPIO 功能表，DWS 先配置好 
• 背光如何配置 
– Bring up 时可以直接控制 GPIO 拉高实现 
  
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
1.3 新增屏驱 
1.3.1 Device 的修改 
1. 在ko_order_table 中加入 ko 名称 
 
2. 在projectconfig.mk 中修改 bootlogo 设定 
 
 
1.3.2 LK2 的修改 
注意： 
• 如果没有 LK，可以忽略此步骤 
 
1. 添加新的驱动 
 
2. 在$(project).mk 中加入此驱动支持 
 
3. 在lcm list 中加入此驱动 
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
 
4. 在lcmd_drv.h 中加入此驱动 
 
 
1.3.2.1 Kernel 的修改 
注意： 
• Kernel-6.6 时修改类似，只是路径不一样 
 
1. 添加新的驱动 
 
2. 在kconfig 加入新的驱动 
 
3. 在makefile 中加入新的驱动 
 
4. 在kernel config 中加入驱动 
 
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
5. 在kleaf 中加入驱动 
 
6. 在dts 中加入驱动 
 
 
 
1.4 重要事项 
• 为了防止从 lk 转 Kernel 画面抖动，kernel 启动后dsi/mipi_tx/panel 的设置都是用 lk 的参数，
suspend/resume 之后才是全部采用 Kernel 的配置。如果发现 suspend/resume 之后有参数跟上电启动不同，请
检查这三部分的设置区别 
• Kernel 启动时会获取一些参数给 display 使用，在 Kernel panel driver 没有 ready 的情况下系统不能正常工作是
正常现象 
• 后面页面中写的 must set 的参数是必须要写的，其他部分根据需要填写 
1.5 LK 驱动 
LK2 路径: /vendor/mediatek/proprietary/bootable/bootloader/lk2/ 
 
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
 
1.5.1 增加 LK2 屏驱 
参考第 1.3.2 章新增 LK 屏驱文件和修改。 
 
1.5.2 编写驱动 
1. 编写 lcm_drv 结构体（must set） 
– 以<tv101wum_n16_wuxga_dsi_video_boe_rtq6752.c> 为例： 
 
2. 填充 LCM 参数（must set） 
– 按照实际参数参考其他屏驱填写 
▪ Lcm 宽和高（must set） 
 
▪ Lcm 参数（dsi 设置, must set）  
 
▪ Lcm 参数（vdo timing, must set） 
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
 
▪ esd 配置（optional，使用 bridge 必须关掉） 
 
▪ pll config （PLL_CLOCK 和 data_rate 至少要设置 1 个，参考下面公式计算） 
 
▪ 展频配置（optional，使用 bridge 必须关掉） 
 
▪ mipi clock 配置（optional） 
 
▪ cphy/dphy 配置（by case，cphy 设置为 1，dphy 设置为 0） 
 
▪ dual port 设置 （by case） 
 
▪ Dsc 配置 （by case） 
o 如果要用 DSC，必须设置 dsc_enable=1，并设定 DSC 参数 
o 是否需要支持 DSC 取决于屏，且 DSC 参数需要屏厂提供 
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
o MTK 特有参数 dsc_cfg： 
a) 8bpc to 8bpp 设置为 0x22 
b) 10bpc to 8bpp 设置为 0x828 
o 其他参数一一对应到屏厂提供参数 
o 注意观察 rc_buf_thresh 值的范围是 14-126，如果厂商提供的远大于这个，将厂商数据右移 6 位 
o dsc 设定例子 
 
o 厂商提供的 pps 参数例子 1 
 
o 厂商提供的 pps 参数例子 2 
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
 
o GPIO 配置（参考 GPIO SOP） 
 
 
3. 编写 LCM init power 函数 （must set） 
 
 
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
– 按照 hw 设计实际情况编写 
4. 编写 LCM init 函数（must set） 
 
 
– 按照屏的时序编写 
5. 编写 LCM suspend/resume 函数（optional） 
 
6. 编写 LCM compare 函数（如果是多屏兼容才需要） 
 
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
7. 编写背光函数（使用 lcm pwm 才需要） 
 
8.  填充初始化参数（must set） 
9. 参考其他驱动编写其余重要部分（must set） 
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
 
 
1.6 Kernel DRM 驱动 
文件路径: /kernel/ kernel_device_modules-6.1/drivers/gpu/drm/metiatek/Mediatek_v2 
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
 
 
 
1.6.1 增加 Kernel 驱动 
参考章节 1.3.2.1 新增修改 Kernel 驱动。 
 
1.6.2 编写驱动 
1. 填充 Kernel 驱动结构体（must set） 
– DRM 原始结构体 
 
2. 编写 MTK 扩展结构体（must set） 
 
– 在 super frame 模式下, 必须设置 the pll_clk/crop_width/crop_height/physcial_width/physical_height, 
否则必须设置 pll_clk 
– Pll_clk: mipi 时钟 
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
– Crop width/crop height: 在 super frame 模式下, Crop width/crop height 应该被设置为对应于其中一个
panel 的宽度/高度 
– Physical_width/physical_height: 在 super frame 模式下, physical_width 应该被设置为两个 panel 的宽
度之和。physical_height 应该被设置为两个 panel 中较大的那个高度。 
3. 填充 DRM 架构驱动函数（must set） 
– DRM 原始架构函数 
 
4. 编写 probe 函数（must set） 
 
5. 编写 remove 函数（must set） 
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
 
6. 编写 prepare 函数（must set） 
 
7. 编写 init 函数（must set）  
 
8. 编写 enable 函数（must set） 
 
9. 编写 disable 函数（must set） 
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
 
10. 编写 unprepare 函数（must set） 
 
11. 编写 get_modes 函数（must set） 
 
12. 编写 MTK 扩展函数 reset (optional) 
13. 编写 MTK 扩展函数 set_backlight_cmdq function (by case) 
14. 编写 MTK 扩展函数 ext_param_set function (by case) 
15. 编写 MTK 扩展函数 ata_check function (optional) 
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
1.7 精确的 FPS 设置 
• 手写笔应用中，需要 FPS 非常精准（120+-0.01），通过 data_rate_khz 来实现 
• 首先通过表格（找 PM 要）计算出近似值（ideal bit freq）填到 data_rate，再通过 data_rate_khz 进行微调 
• 注意即使设置了 data_rate_khz，data_rate/pll_clk 也需要设置（不管是 LK 还是 kernel 都是） 
• Data_rate_khz 需要微调后实测 FPS，目前不能通过理论计算 
• Vdo_per_frame_lp_enable 对应下面表格 video mod e keep hs mode，此项对 vdo mode fps 影响比较大 
 
 
 
 
 
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
1.8 Debug SOP 
1.8.1 Lk 阶段 Debug 
• LK 屏不亮 
– 背光是否亮？ 
▪ 是，继续下面步骤 
▪ 否，检测背光控制方式是否正确（LK 也会采用 dts 里面的设置） 
o 也可采用直接拉高 GPIO 的方式先避开 
o 如果使用背光 IC，询问对应 vendor 要如何控制 disp_pwm mode 
o 背光控制模式是否正确 
a) Disp_pwm 模式 
 
b) I2C 模式 
 
c) Lcm pwm mode 
                       
• 屏所需要的电压是否有正常供上 
– 是，继续下面步骤 
– 否，用示波器量各路电压，看哪一路不正常，询问 PMIC owner 要如何控制 
▪ 上电时序是否符合屏的要求 
▪ 用示波器量信号 
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
• Init cmd 是否有发成功？（判断标志，读屏的 0x0A 为非 0 值，需屏支持） 
– 是，继续下面步骤 
– 否 
▪ 发送 cmd 是用 generic？还是 dcs？还是混用？默认 cmd<0xb0 用 dcs，cmd>=0xb0 用 generic 
▪ 找屏厂要屏的 BIST pattern 命令，看 BIST 是否能正常出来 
▪ Bist 能亮说明屏的供电没问题 
▪ Bist 也不亮 
o 是否有 lane swap？量 D0P/N 是否有波形出来 
o init cmd 是否给错，用逻辑分析仪抓发送 init cmd 的数据给屏厂检查  
o 如果使用 bridge，检测 bridge 的状态寄存器提供信息给 bridge 厂商分析 
• Mipi 信号是否正常（做 mipi cts 测试，需要所有项都 pass） 
– 有 vdo 数据的 Dphy 波形 
 
– 没有 vdo 数据的 Dphy 波形 
 
– Cphy 波形 
 
• 是否有放 logo 文件？若无 logo 文件，屏上只会显示一行小字，需要仔细观察 
 
1.8.2 Kernel 阶段 Debug 
• 进 Kernel 后屏不亮 
– 量屏的各路电压是否有掉 
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
▪ 进 Kernel 后 regulator 在没人使能会自动关掉，屏驱中需要获取资源并使能它 
– 背光是否有亮？ 
▪ AAL 可能会导致背光关闭，关闭 AAL 看看是否有问题 
▪ 调整背光的函数是否能跑到，如不能需要加 log debug 
– Kernel 屏驱是否有正常加载？ 
▪ 观察 log，看驱动加载是否正常。Kernel 运行过程中需要一些参数 
– 是否有使能 esd，esd 也会导致黑屏 
– 是否有多种 mode 切换？Bring up 阶段先点一个 mode 
 
1.8.3 Resume 阶段 Debug 
• Resume 后屏不亮 
– 量屏的各路电压是否有正常起来 
– 检查屏的 power on code 是否有异常 
– 背光是否有亮？ 
▪ 控制背光 code 是否有异常 
– Kernel 屏驱是否有正常加载？ 
▪ 观察 log，看驱动加载是否正常。 
– 对比跟 LK 的驱动，看两边设置是否一样 
 
1.8.4 花屏 Debug 
• 是否有开 dsc  
– 是，检测 DSC 设置 
▪ 打 DSC test pattern 是否能显示正常（echo reg_write 0x14015078 0x400000FF > /proc/clkdbg ; cat 
/proc/clkdbg） 
o 0x14015xxx 是 dsc base reg，根据 soc 不同而不同，请询问 MTK 工程师正确的值 
o 0x078 是 dsc test pattern reg 地址，根据 soc 不同而不同，请询问 MTK 工程师正确的值 
▪ 能，找 display owner 寻求帮助 
▪ 不能，是否存在正常显示时刻，有正常时刻。dump dsc reg 对比是否有设置不一样 
▪ Dump 命令：adb shell “echo mobile:on > /d/mtkfb“;adb shell ”echo diagnose>/d/mtkfb && 
cat /d/mtkfb” >  mtkfb.txt 搜索 DSC 部分 
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
▪ 典型 dsc 花屏图片： 
▪  
 
▪ 类似花屏是 AFBC 导致，使用如下命令关闭 AFBC 看看： 
adb shell setprop debug.mediatek.disp_decompress 0 
adb shell stop 
adb shell start 
o 典型的 AFBC 花屏: 
 
• 打 DSI test pattern 是否能正常显示 
– 命令（参考 dump reg）：echo reg_write 0x14017178 0x31 > /proc/clkdbg; cat /proc/clkdbg 
▪ 0x1401xxxx 是 dsi reg 地址，根据 soc 不同而不同，请询问 MTK 工程师 
▪ 0x178 是 dsi test pattern 地址，根据 soc 不同而不同，请询问 MTK 工程师 
▪ 能正常显示，找 display owner 寻求帮助 
▪ 不能，log 中是否存在 dsi underrun 字样 
– 是否有显示正常的情况 
▪ 是，dump 正常和不正常时的 DSI/MIPITX/DSC reg 值，看设置是否有不一样 
▪ Dump 命令：adb shell “echo mobile:on > /d/mtkfb“;adb shell ”echo diagnose>/d/mtkfb && 
cat /d/mtkfb” >  mtkfb.txt 搜索 DSI 部分 
▪ Dump 命令：参考 dump reg 这一块，用 adb cmd 的方法读取也可以 
– 是否经过某种操作后才出现（比如切换 fps） 
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
▪ 对比切换前后 reg 是否一样 
▪ 例：切换 fps 后花屏 
o 询问屏厂切换 fps 是否存在限制，是否要发送 cmd 等 
o Fps 切换时 mmclk 改变先后顺序是否正确（mmclk 变高要先设 mmclk 后切 fps，mmclk 变低要先切 fps
后设置 mmclk，mmclk 计算方法参考 mtk_dsi_set_mmclk_by_datarate 函数，切换逻辑参考
mtk_crtc_disp_mode_switch_begin 函数） 
 
1.8.5 含有 Bridge 屏的 Debug 
• 查看 bridge 状态寄存器，可以得知当前 bridge 工作状态 
• 从 bridge vendor 获取帮助 
1.9 Dump Reg 
1.9.1 LK 阶段 
• 在 Ddp_dsi.c/ddp_dsi_trigger() 最后调用 DSI_DumpRegister() 
• 在 Ddp_dsi.c/dsc_config() 最后调用 dsc_dump() 
• LK display log 默认没开，需要在 ddp_log.h 中打开 
 
 
1.9.2 Kernel Dump reg  
• 如何打开寄存器 adb debug 接口 
– 路径：kernel-xx/drivers/clk/mediatek/clkdbg.c/common_cmds[] 
– 函数：clkdbg_reg_read()和 clkdbg_reg_write() 
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
– 方法：如果 clkdbg_reg_read() and clkdbg_reg_write()被#if defined( CONFIG_MTK_ENG_BUILD)包起来了，请把
#if defined( CONFIG_MTK_ENG_BUILD)  mask 掉，同时把定义 clkdbg_reg_read() and clkdbg_reg_write()地方的#if 
defined(CONFIG_MTK_ENG_BUILD) 也 mask 掉，然后就可以用 adb command 改寄存器了 
 
 
1.9.3 adb 命令 dump reg 
• 寄存器读写命令 
– 读：echo reg_read addr> /proc/clkdbg ; cat /proc/clkdbg 
▪ 按长度读：echo reg_read_len addr length> /proc/clkdbg; cat /proc/clkdbg 
– 写：echo reg_write addr value> /proc/clkdbg ; cat /proc/clkdbg 
▪ 举例： 
echo reg_read 0x1400D178 > /proc/clkdbg ; cat /proc/clkdbg 
echo reg_write 0x1400D178 0x31 > /proc/clkdbg ; cat /proc/clkdbg 
echo reg_read_len 0x1400D000 0x00001000 > /proc/clkdbg ; cat /proc/clkdbg 
▪ 注意： 
o 通常 MTK supporter 会说请把 xxx 的 yyy 写 zzz，其中 xxx 代表某个模块，通过前面 Debug SOP 章节获取该模块的
基地址，yyy 代表偏移量，zzz 代表 value 
o 该语句最终需要执行的命令是：echo reg_write xxx 基地址+yyy zzz> /proc/clkdbg; cat 
/proc/clkdbg 
o 例如调整 mipi 的驱动能力，supporter 会说把 mipi_tx 的 0x10 bit6-9 写 0111 
o 执行的命令是：echo reg_read 0x11f60010 > /proc/clkdbg;cat /proc/clkdbg，//mipi_tx 基地址
0x11f60000，先读 mipi tx 的 0x10，假如读到是 0，将 0 的 bit6-9 或上 0111 得到 0x1c0：echo reg_write 
0x11f60010 0x1c0> /proc/clkdbg; cat /proc/clkdbg 
 
1.9.4 Test Pattern 命令 
• 使用 adb： 
– echo reg_write “DSI/DSC_base_reg+offset_addr” value> /proc/clkdbg; cat /proc/clkdbg 
– DSI/DSC 基地址参考前面的说明 
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
– Offset： 
▪ Dsi:0x178 or 0x17c  
▪ Dsc:0x78 or 0x6c，询问 MTK 工程师确认 
– Value： 
▪ Dsi: 0xc41 
▪ Dsc: 0x4000FFFF(blue), 询问 MTK 工程师确认 
• 在 code 中加入： 
– DSI: 在 Ddp_dsi_trigger 函数最后调用 DSI_OUTREG32(NULL, DSI_REG_BASE[0]+offset, value);  
– DSC: 在 dsc_config 函数最后调用 DISP_REG_SET(handle, base+offset, value); 
– Offset/value 参考 adb 命令 
1.9.5 分析 reg 
• 如下 reg 说明，仅供参考，具体 reg 内容请参考 coda 
• DSI 
• MIPI TX 
Bit0=1 表示 dsi 正在运行 
 DSI 状态 
VSA VBP VFP VACT 
HAS_WC HBP_WC 
VB_PS_WC/HFP_WC BLLP 
注意： HSA_WC=HAS*3-10， HBP/HFP 也是 
读状态 
Timing 控制 
DSI PHY Timing  
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
 
• DSC 
 
1.10 使用 MTK max96789 panel driver 
MTK 提供了一个 max96789+max96752 的通用驱动，可参考这个通用驱动写自己的驱动： 
1. KO table 中加入 birdge-serdes-max96789.ko/panel-serdes-max96789.ko（如果不存在时） 
2. LK 的 project.mk 中设置 MTK_LCM_LIST_SUPPORT="max96789_dsi_vdo" 
3. kleaf 中加入 birdge-serdes-max96789.ko/panel-serdes-max96789.ko（如果不存在时） 
4. defconfig 中加入 CONFIG_DRM_PANEL_SERDES=m（如果不存在时） 
5. 如果需要使用 hotplug 功能，需要在 defconfig 中设置 CONFIG_ENABLE_SERDES_HOTPLUG=y 
6. 如果 hotplug 功能要使用中断方式，需要在 code 中将 ENABLE_HOTPLUG_INT 定义为 1（同时要修改 dws 将对于
gpio 设置为 EINT 功能） 
DSC 控制寄存器 
 DSC 状态 
 DSC 宽 
DSC 高 
DSC PPS0-19 
读状态 reg 
 Phy 电压设定 
Pll control 1/2/3/4 
Pll control 0 
Lane swap 设置 
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
7. dts 中加入如下设定 
8. 其他设定均在 driver 中 hard code 写死，如有不满足需求可以剥离出来写到 dts 
&i2c0 {                                       // max96789 在哪个IIC 下面，必须填写 
    status = "okay"; 
    max96789: max96789@40 {                   // max96789 的node，必须填写 
        compatible = "maxiam,max96789"; 
        reg = <0x40>;                         // max96789 的IIC 地址，必须填写 
        reset-gpios = <&pio 24 0>;            // max96789 的pwdn 脚，必须填写 
        interrupt-parent = <&pio>; 
        interrupts = <187 IRQ_TYPE_EDGE_RISING>;// 使用中断方式检测hotplug 时必须填写，否
则可以不写 
        pinctrl-names = "default"; 
        inited-in-lk = <0>;                   // 这个设定是否会在LK 设定，如果会，设置为
1，Kernel 启动时不会再初始化它 
        setting = <&setting_compatible>;      // 这个串行器接的是哪个屏就写该屏的名称，如果
需要多屏兼容写setting_compatible（注意现在多屏兼容是通过读mcu 来实现，如果不是这种方式需要自
己实作），必须填写 
    }; 
}; 
 
&max96789 { 
    setting_compatible: compatible-node {      // 使用多屏兼容时的node，使用多屏兼容时必
须填写 
        comp-cmd = <                           // 多屏兼容的cmd，使用多屏兼容时必须填写 
            0x01 0x1a 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 
0xd4    // 多屏兼容时写的命令，格式是：<r/w><iic addr><cmd len><cmd data>，注意，这种方
式只是适合公版使用的博泰/华阳屏，客户应该根据实际情况定制(包括修改代码) 
                                               // r/w: 读=0，写=1 
                                               // iic addr: 要读的iic 设备的地址 
                                               // cmd len:  这一条命令的数据长度（可以是
多条写命令） 
                                               // cmd data：写的命令数据 
            0x00 0x1a 0x0b                     // 读命令，格式是：<r/w><iic addr><cmd 
len>，含义同上。注意读命令必须有，且放在最后一个，并且只能读一次 
        >; 
        comp-exp {                             // 预期的设定node，使用多屏兼容时必须填写 
            comp-setting =     <0xf0 0x10 &setting_bt>,   // 预期的多屏兼容设置，格式
为：<mask><exception data><panel setting node>，使用多屏兼容时必须填写 
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
                                               // mask: 读出来的值跟mask 做与操作，再跟
exception data 做对比，如果一致，则使用该行panel setting 
                            <0xff 0xff &setting_hy>;  // 注意最后一行是默认设置，即如果读
出的数据都是非预期的，将会使用这个设定 
        }; 
    }; 
    setting_bt: setting@1 {                    // panel setting，至少需要设置1 个 
        ser-super-frame = <0>;                 // 是否为super frame 设置, super frame
会有两个des，计算timing 也不一样 
        ser-init-cmd = <                       // 串行器初始化命令，格式为：
<reg><data><delay> 
            0x0001 0x08 0x00 
            0x0203 0x00 0x00                   // reg:   要写的reg 
            0x1404 0x29 0x00                   // data:  要写的数据 
            0x1504 0x29 0x00                   // delay: 写完该命令后delay 多久，单位ms 
            0x14a4 0xc8 0x00 
            0x15a4 0xc8 0x00 
            0x140a 0x00 0x00 
            0x150a 0x00 0x00 
            0x140b 0x00 0x00 
            0x150b 0x00 0x00 
            0x0330 0x04 0x00 
            0x0331 0x33 0x00 
            0x0333 0xe4 0x00 
            0x0308 0x7c 0x00 
            0x0053 0x10 0x00 
            0x005b 0x12 0x14 
            0x0140 0x20 0x00 
            0x0002 0x53 0x05 
            0x0010 0x31 0xc8 
        >; 
        ser-deinit-cmd = <                      // 串行器deinit 命令，复位所有reg 
            0x0010 0x80 0x20 
        >; 
        des-link-status-cmd = <                 // 支持hotplug 功能时必须填写，用来检测解
串器是否有插上 
            0x001f 0x18 0x0 
        >; 
        desdef {                                // 默认解串器node，必须要写 
            des-i2c-addr = <0x4c>;              // 默认解串器i2c 地址，必须要写 
            bl-i2c-addr = <0x1a>;               // 默认解串器对应的背光i2c 地址，按需填写 
            bl-dummy-i2c-addr = <0x1f>;         // 带mcu 的屏，背光跟tp 都是由mcu 控制，
导致他俩的iic 地址一样，这里将mcu 实际iic 地址让给tp 用，背光用这个地址在kernel 中获取
client，使用client 时再将地址设置为实际地址。仅仅在kernel 中用到 
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
            des-init-cmd = <                    // 解串器初始化命令，按需填写，格式同串行
器初始化命令 
                0x01ce 0x5e 2 
                0x06ff 0x22 0x0                 // 支持hotplug 功能时必须加上这行，通过读
取此reg 设定来判断解串器是否有被初始化过，注意必须跟link-indicate-cmd 一致 
            >; 
            link-indicate-cmd = <               // 支持hotplug 功能时必须填写，通过读取此
设定，用来判断解串器是否有被初始化过，注意必须跟des-init-cmd 中的某项一致 
                0x06ff 0x22 0x0 
            >; 
            bl-on-cmd = <                       // 背光开命令，格式为全部data，仅适合公版
博泰屏，按需填写 
                0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
            >; 
            bl-off-cmd = <                      // 背光关命令，格式为全部daa，按需填写 
                0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x00 0x00 0x85 
            >; 
            panel-mode-setting {                // 屏的timing 信息，必须填写 
                panel-mode-width = <1920>;      // 宽 
                panel-mode-height = <1080>;     // 高 
                panel-mode-hfp = <40>;          // HFP 
                panel-mode-hsa = <40>;          // HSA 
                panel-mode-hbp = <80>;          // HBP 
                panel-mode-vfp = <24>;          // VFP 
                panel-mode-vsa = <2>;           // VSA 
                panel-mode-vbp = <10>;          // VBP 
                panel-mode-vrefresh = <60>;     // FPS 刷新率 
                panel-mode-pll = <478>;         // PLL，mipi 的clock，系统会按timing
计算一个pll，如果发现有偏差，可以通过设置它来替换系统计算结果。可选 
                panel-mode-lppf = <1>;          // enter LP per frame，每帧进LP，默认
为1，可选 
                panel-mode-width-mm = <129>;    // 屏的物理尺寸，用来计算PPI 
                panel-mode-height-mm = <64>; 
            }; 
        }; 
    }; 
    setting_hy: setting@2 { 
        ser-dual-link = <0>; 
 
        ser-init-cmd = < 
            0x0001 0x08 0x00 
            0x0203 0x00 0x00 
            0x1404 0x29 0x00 
            0x1504 0x29 0x00 
            0x14a4 0xc8 0x00 
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
            0x15a4 0xc8 0x00 
            0x140a 0x00 0x00 
            0x150a 0x00 0x00 
            0x140b 0x00 0x00 
            0x150b 0x00 0x00 
            0x0330 0x04 0x00 
            0x0331 0x33 0x00 
            0x0333 0xe4 0x00 
            0x0308 0x7c 0x00 
            0x0053 0x10 0x00 
            0x005b 0x12 0x14 
            0x0140 0x20 0x00 
            0x0002 0x53 0x05 
            0x0010 0x31 0xc8 
        >; 
        desdef { 
            des-i2c-addr = <0x4c>; 
            bl-i2c-addr = <0x1a>; 
            des-init-cmd = < 
                0x01ce 0x4e 2 
            >; 
            bl-on-cmd = < 
                0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
            >; 
            bl-off-cmd = < 
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
 
    superframe_setting: setting@3 {               // super frame setting demo 
        ser-super-frame = <1>;                    // 需要设置super frame 为1 
 
        ser-init-cmd = <                          // 同上含义 
            0x0002 0x73 0x0 
            0x0053 0x10 0x0 
            0x0057 0x21 0x0 
            0x0332 0x4E 0x0 
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
            0x0333 0xE4 0x0 
            0x0004 0xF2 0x0 
            0x0308 0x5C 0x0 
            0x0311 0x03 0x0 
            0x0331 0x03 0x0 
            0x0330 0x06 0x0 
            0x031C 0x98 0x0 
            0x0321 0x24 0x0 
            0x031D 0x98 0x0 
            0x0322 0x24 0x0 
            0x0326 0xE4 0x0 
            0x03A4 0xC1 0x0 
            0x032A 0x07 0x0 
            0x0002 0x73 0x5 
        >; 
        ser-timing-cmd = <                         // super frame 必须设置timing 参
数，必填 
            0x385 0x50 0x0 
            0x386 0x02 0x0 
            0x387 0x00 0x0 
            0x3A5 0x18 0x0                         // 注意这里的reg 顺序不能改变，现在的
顺序是按照串行器tool gen 出来的顺序 
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
        serdes-dual-setting-cmd = <                 // 同样的屏拥有同样的des iic 
addr/bl iic addr 等，通过此命令将其区分开 
            0 0x0010 0x21 255                       // 选择linka 
            1 0x0000 0x90 0                         // 0x90=desa-i2c-addr*2，设置
desa 的des i2c addr 为0x90（8bit 地址） 
            2 0x0073 0x31 0                         // 设置为split mode，且当前
channel id 为1 
            2 0x0042 0x36 0                         // 0x36=desa-bl-i2c-addr*2 
            2 0x0043 0x34 0                         // 0x34=desdef-bl-i2c-addr*2，这
段含义是将linka 上面的bl iic 地址由0x34 改为0x36，注意0x36 一定要跟desa 里面的des-i2c-
addr 保持一致 
            0 0x0010 0x22 255                       // 选择linkb 
            1 0x0000 0x94 0                         // 0x94=desb-i2c-addr*2，设置
desb 的des i2c addr 为0x94（8bit 地址） 
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
            3 0x0073 0x32 0                         // 设置为split mode，且当前
channel id 为2 
            3 0x0042 0x38 0                         // 0x38=desb-bl-i2c-addr*2 
            3 0x0043 0x34 0                         // 0x34=desdef-bl-i2c-addr*2 
            0 0x0010 0x23 255                       // 选择所有通道 
            3 0x0050 0x01 0                         // 设置linkb 的stream id 为1 
        >; 
        ser-lut-cmd = <                             // 非对称super frame 会有lut 设
置，写在这里 
        >; 
        ser-deinit-cmd = < 
            0x0010 0x80 0x20 
        >; 
        des-link-status-cmd = < 
            0x001f 0x18 0x0 
        >; 
        desdef {                                     // 默认des 配置，必填 
            des-i2c-addr = <0x4c>;                   // des 默认i2c addr 
            bl-i2c-addr = <0x1a>;                    // des 默认背光i2c addr，注意要跟
dual-setting-cmd 中的0x0043 后面的data 匹配(8bit i2c addr) 
        }; 
        desa {                                       // linka 的des 配置，super frame
必填 
            des-i2c-addr = <0x48>;                   // linka des i2c addr，注意跟
dual-setting-cmd 中的0x0000 的data 匹配 
            bl-i2c-addr = <0x1b>;                    // linka bl i2c addr，注意跟
dual-setting-cmd 中的0x0042 的data 匹配 
            des-init-cmd = <                         // linka des 初始化命令 
                0x01ce 0x5e 2 
                0x06ff 0x22 0x0                      // 支持hotplug 功能时必须加上这行，
通过读取此reg 设定来判断解串器是否有被初始化过，注意必须跟link-indicate-cmd 一致 
            >; 
            link-indicate-cmd = <                    // 支持hotplug 功能时必须填写，通过
读取此设定，用来判断解串器是否有被初始化过，注意必须跟des-init-cmd 中的某项一致 
                0x06ff 0x22 0x0 
            >; 
            bl-on-cmd = <                            // 同single link 
                0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
            >; 
            bl-off-cmd = <                           // 同single link 
                0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x00 0x00 0x85 
            >; 
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
            panel-mode-setting {                     // 同single link 
                panel-mode-width = <1920>; 
                panel-mode-height = <1080>; 
                panel-mode-hfp = <40>;               // 注意必须保证 (hfp-12)/4 是整数 
                panel-mode-hsa = <41>;               // 注意必须保证 
(desa_hsa+desb_hsa-10)/4 是整数 
                panel-mode-hbp = <79>;               // 注意必须保证 
(desa_hbp+desb_hbp-10)/4 是整数 
                panel-mode-vfp = <24>;               // 注意非对称superframe 必须保证 
desa_vfp/desb_vfp=desa_height/desb_height 
                panel-mode-vsa = <3>;                // 注意非对称superframe 必须保证 
desa_vsa/desb_vsa=desa_height/desb_height 
                panel-mode-vbp = <9>;                // 注意非对称superframe 必须保证 
desa_vbp/desb_vbp=desa_height/desb_height 
                panel-mode-vrefresh = <60>; 
                panel-mode-pll = <478>;              // superframe 不会拿这个设定 
                panel-mode-lppf = <1>;               // super frame 不会拿这个设定，必
须为1 
                panel-mode-width-mm = <129>; 
                panel-mode-height-mm = <64>; 
            }; 
        }; 
        desb {                                       // 同linka 
            des-i2c-addr = <0x4a>; 
            bl-i2c-addr = <0x1c>; 
            des-init-cmd = < 
                0x01ce 0x5e 2 
                0x06ff 0x22 0x0 
            >; 
            link-indicate-cmd = < 
                0x06ff 0x22 0x0 
            >; 
            bl-on-cmd = < 
                0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
            >; 
            bl-off-cmd = < 
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
        compatible = "lcm,dsi,max96789";              // panel 设定 
        reg = <0>; 
        ser = <&max96789>;                            // panel 对应哪个串行器，必填 
        port { 
            panel_in1: endpoint { 
                remote-endpoint = <&dsi_out>; 
            }; 
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

## PDF物理页 37

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 37 
MT8676 Yocto DSI Panel 
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
# SRC0256 MT8676_Yocto_eCall_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_eCall_User_Manual_V1.0.pdf

SHA-256：250adb38e25c6b6283b34771f9c10c85d7cf089d2ab7507a1b8be3fdc5054777

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0256.html)

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
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 刘宇田 正式版本 
 
  
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
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 eCall··········································································································································································· 4 
1.1 概述·········································································································································································· 4 
 简单介绍 ······················································································································································ 4 
 法规介绍 ······················································································································································ 4 
1.2 eCall 架构 ································································································································································· 6 
 eCall 流程 ······················································································································································ 6 
 eCall API 使用说明 ····································································································································· 11 
1.3 eCall 定时器 ··························································································································································· 15 
 EU CS eCall 定时器 ····································································································································· 15 
附件一 附加条款 ····························································································································································· 17 
 
 
图片目录 
图 1-1. eCall 系统概览 ······························································································································································· 4 
图 1-2. eCall 软件架构 ······························································································································································· 6 
图 1-3. eCall 流程 ····································································································································································· 11 
 
表格目录 
表 1-1.CS eCall 功能性法规 ······················································································································································· 4 
表 1-2. CS eCall 测试法规 ·························································································································································· 5 
表 1-3. IMS eCall 功能性法规 ···················································································································································· 5 
表 1-4. IMS eCall 测试法规························································································································································ 6 
表 1-5. eCall 控制接口描述 ····················································································································································· 11 
表 1-6. EN16062 中定义的 eCall 定时器 ································································································································ 15 
 
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
User Manual 
Confidential B 
1 eCall 
1.1 概述 
 简单介绍 
eCall 是一种车载道路安全系统，可在发生严重事故时自动呼叫紧急服务。一旦  eCall 传感器检测到车辆受到严重 
撞击或手动发起呼叫，eCall 车载系统 (IVS) 就会与相关公共安全应答点 (PSAP) 建立 e112 语音连接。通过语音连接 
向 PSAP 发送一组最小数据集 (MSD)，其中包括准确的地理位置数据。 
2015 年 4 月，欧洲议会规定，自 2018 年 3 月 31 日起，所有新车型都必须配备 eCall 技术。eCall 系统概览如 
图 1-1 所示。 
 
图 1-1. eCall 系统概览 
 
 法规介绍 
基本上，eCall 规范有两种类型，一种是针对调制解调器协议（如 3GPP 规范），另一种是针对高层应用规范（如 
EN 规范）。通常，MTK 将涵盖调制解调器协议部分，并为客户提供 SDK，以便将高层应用规范与自己的应用程序
集成。以下是对这些不同规范的简要介绍。有关详细信息，请参阅官方网站上的原始规范。  
表 1-1.CS eCall 功能性法规 
法规名称 描述 
ETSI TS 126.267 (3GPP TS 26.267) General description 
ETSI TS 126.268 (3GPP TS 26.268) ANSI-C reference code 
ETSI TS 127.007 (3GPP TS 27.007) 6.27 Initiate eCall +CECALL 
ETSI TS 122.101 (3GPP TS 22.101) 10.7 Transfer of data during emergency calls 
ETSI TS 124.008 (3GPP TS 24.008) 4.4.7 eCall inactivity procedure 
3GPP TS31.102 SIM related requirement for eCall 
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
User Manual 
Confidential B 
法规名称 描述 
ETSI TS 102 936-1 5. UMTS network access eCall NAD conformance tests 6.GSM 
network access eCall NAD conformance tests 
EN 16062 eCall high level application requirements (HLAP) 
EN 16072 PE eCall Operating Requirements 
EN 15722 eCall minimum set of data (MSD) 
GOST 33465-2015 Protocols of data exchange between in-vehicle emergency call 
device/system and emergency response system infrastructure 
GOST 33464-2015 In-vehicle emergency call device/system. General technical 
requirement 
 
表 1-2. CS eCall 测试法规 
法规名称 描述 
ETSI TS 126.269 (3GPP TS 26.269) eCall Data Transfer; In-band modem solution; conformance test 
ETSI TS134 123-1 13.3 eCall Emergency Call Procedures 
ETSI TS 151 010-1 Conformance specification  
26.9.6a Structured Calls/eCall 
ETSI TS103 412 Pan-European eCall end to end and in-band modem 
conformance testing; Prose test specification 
EN16454 Intelligent transport systems-ESafety-Ecall end to end 
conformance testing 
GOST 33467-2015 Functional test methods of in-vehicle emergency call 
device/system and data transfer protocols 
GOST 33470-2015 
Test methods for wireless communication modules of in-vehicle 
emergency call system 
ETSI TS 103 428 eCall HLAP Interoperability Testing 
 
表 1-3. IMS eCall 功能性法规 
法规名称 描述 
TS24.229 eCall over IMS (NG-eCall) general spec 
RFC8147 NG-eCall SIP part spec 
TS23.122 NG-eCall eCall only mode 
TS24.301 EMM requirement for eCall only mode 
TS23.401 eCall only mode 
TS24.008 MM requirement for eCall only mode 
TS23.216 NG-eCall SRVCC 
TS23.167 eCall over IMS (NG-eCall) general spec 
TS27.007 AT CMD of eCall 
TS31.102 SIM-related requirement for eCall 
 
 
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
User Manual 
Confidential B 
表 1-4. IMS eCall 测试法规 
法规名称 描述 
TS34.229-1 SIP layer test spec of NG-eCall 
TS36.523 UE conformance test spec of NG-eCall 
 
1.2 eCall 架构 
软件架构如图 1-2 所示。目前，MTK 解决方案支持 eCall 设置和带内调制解调器 TX/RX，符合 ETSI/3GPP 标准（绿色
矩形），并提供专有 ML 接口调用 eCall RIL 命令。客户需要将 eCall 平台和应用程序（红色矩形）与 eCall ML 接口
集成，并使用该产品通过 eCall 测试用例。 
 
图 1-2. eCall 软件架构 
 eCall 流程 
虽然 eCall 场景不同，但关键步骤相同。基本上，客户 APP 需要按照以下步骤处理 eCall 流程： 
1. 发起 ML_MakeFastEcall； 
2. 维护 IVS 侧的 eCall 计时器，该计时器在 EN16062 中指定； 
3. 收到 RIL_UNSOL_ECALL_ALACK_POSITIVE_RECEIVED 后发出 RIL_REQUEST_ECALL_RESET_IVS。然后 IVS 和 PSAP 可
以恢复语音呼叫连接并相互通话。 
4. 收到 RIL_UNSOL_ECALL_DISCONNECTED 或 RIL_UNSOL_ECALL_ABNORMAL_HANGUP 后挂断电话，PSAP 通过此方
式指示 IVS 断开呼叫。 
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
User Manual 
Confidential B 
以下是 eCall 流程序列的详细描述。 
 
 
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
MT8676 Yocto eCall 
User Manual 
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
User Manual 
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
User Manual 
Confidential B 
 
图 1-3. eCall 流程 
 eCall API 使用说明 
下列 eCall API 计划在 MT8676 上开发。如果后续开发生有更新，将提供更新的文档。 
表 1-5. eCall 控制接口描述 
接口 描述 
typedef struct { 
    int32_t call_id; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
}ml_ecall_set_msd; 
MSD 信息结构体 
call_id: 当前电话 index； 
length: msd data 的长度； 
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
User Manual 
Confidential B 
接口 描述 
msd_data: msd data 数据；传入参数是 byte 格式 
(unsigned char), 最大长度 140, 对应的 char 格式最大长度
是 280. 
typedef struct { 
    int32_t arg_num; 
    int32_t type; 
    char address[128]; 
}ml_ecall_set_num; 
Test number/Reconfiguration number结构体 
arg_num: 传入参数个数，比如传入有效的 type 和 
address，则为 2，比如只传入有效的 address， 则为 1; 
type: 传入参数类型， 1 表示传入 URI 类型， 2 表示传入 
number 类型； 
address: Test 或者 Reconfiguration 号码。 
typedef enum { 
    ML_EMER_CAT_MANUAL_ECALL = 1, 
    ML_EMER_CAT_AUTO_ECALL   = 2, 
}ml_ecall_category; 
发生 eCall 类别的结构体 
typedef enum { 
    ML_ECALL_TEST        = 1, 
    ML_ECALL_EMERGENCY   = 2, 
    ML_ECALL_RECONFIG    = 3, 
}ml_ecall_variant; 
eCall 类型的结构体 
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
eCall 通话的网络制式结构体 
typedef struct{ 
    ml_ecall_category   ecall_cat; 
请求拨出 eCall 时传入结构体参数定义 
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
User Manual 
Confidential B 
接口 描述 
    ml_ecall_variant   ecall_variant; 
    char address[20]; 
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
eCall 优先级参数结构体. data1>data2>data3>data4. 传入参
数应为 1 2 3 4, 含义分别为:  
1: 客户设定的 eCall URI;  
2: USIM 保存的 eCall URI 
3: 客户设定的  eCall 号码  
4: USIM 保存的 eCall 号码 
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
eCall 上报状态的消息类型枚举定义 
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
User Manual 
Confidential B 
接口 描述 
    E_ML_ECALL_T2_TIMEOUT = 52, 
    E_ML_ECALL_T5_TIMEOUT = 55, 
    E_ML_ECALL_T6_TIMEOUT = 56, 
    E_ML_ECALL_T7_TIMEOUT = 57, 
    E_ML_ECALL_UNSPECIFIED = 0xffff, 
}ML_ECall_Indication; 
typedef struct{ 
    ML_ECall_Indication ind; 
    int call_id; 
} ML_ECALL_IND_T; 
eCall 上报状态的消息结构体 
typedef void (*ML_ECALL_MSGCB_T)( 
    ML_ECALL_IND_T       *pvsMsg 
); 
eCall 上报状态消息的回调函数 
int32_t ML_EcallIndicationInit( 
ML_ECALL_MSGCB_T cb_func); 
注册 eCall 状态变化 callback 函数，当 eCall 状态发生变化时
回调 cb_func 函数 
参数:  
输入: ML_ECALL_MSGCB_T cb_func 
int32_t ML_ResetIvs(void); 
重置 modem 的 eCall 状态. 
重连 audio 
int32_t ML_SetMSD(ml_ecall_set_msd* msd); 
设置 eCall 的 msd 数据 
参数:  
输入: ml_ecall_set_msd* msd 
int32_t ML_SetTestNumber( 
  ml_ecall_set_num* test_num); 
设置 test number 或者 URI 
参数:  
输入: ml_ecall_set_num* test_num 
int32_t ML_SetReconfNumber( 
  ml_ecall_set_num* reconf_num); 
设置 reconfig number 或者 URI. 
参数:  
输入: ml_ecall_set_num* test_num 
int32_t ML_MakeFastEcall( 
  ml_ecall_req_msg* msg); 
拨出 eCall 同时传入 msd 数据 
参数:  
输入: ml_ecall_req_msg* msg 
int32_t ML_SetEmsdpri(ml_ecall_pri* pri); 
设置 eCall 优先级类别. 默认优先级是 “1>3>2>4” 
参数:  
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
User Manual 
Confidential B 
接口 描述 
输入: ml_ecall_pri* pri 
 
1.3 eCall 定时器 
 EU CS eCall 定时器 
在 eCall 流程中，EN 16062 定义了 10 个定时器。MTK 在调制解调器端实现了 T2、T3、T5、T6、T7、T10。T1、T9 
应由 IVS 客户 APP 处理；T4 和 T8 是 PSAP 定时器，应由 PSAP 应用程序处理。 
表 1-6. EN16062 中定义的 eCall 定时器 
Name Origin Description Requirements Value 
T1 IVS 
Manually initiated eCall(MIeC) false triggering cancellation period 
•       START: T1 starts as soon as the eCall is manually activated 
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
5 s 
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
User Manual 
Confidential B 
Name Origin Description Requirements Value 
•       STOP: T5 stops when the IVS-NAD detects a SEND MSD signal sent by the 
PSAP . 
•       EXPIRY: Upon expiry of T5 the IVS-NAD shall reconnect the IVS audio 
system and terminate eCall specific behavior(i.e. it shall not proceed with the 
sending of MSD data) until requested to do otherwise. 
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
•       EXPIRY: Upon expiry of T7, the IVS-NAD shall mark the transfer of the MSD 
as unsuccessful and reconnect the IVS audio system and terminate eCall specific 
behavior until requested to do otherwise 
20 s 
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
# SRC0257 MT8676_Yocto_FastRVC_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_FastRVC_User_Manual_V1.0.pdf

SHA-256：231ce28236686bf0fda2b9c30506e9a577c343d0b454749185c3a072b2ea29fd

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0257.html)

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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 吴云杰 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 FastRVC ······································································································································································ 4 
1.1 概述·········································································································································································· 4 
1.2 架构/流程概述 ························································································································································ 4 
1.3 配置/客制化指南 ···················································································································································· 5 
1.4 常见问题/故障排除 ················································································································································ 6 
1.4.1 FastRVC 问题调试 ········································································································································· 6 
1.4.2 FastRVC 调试日志开关方法 ························································································································· 6 
附件一 附加条款 ······························································································································································ 7 
 
 
图片目录 
图 1-1. FastRVC 工作流程 ·························································································································································· 4 
图 1-2. instantcam 工作流程 ····················································································································································· 5 
 
 
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
1.1 概述 
本章节介绍 MT8676 FastRVC 基本功能以及常见问题的调试方法。 
 
FastRVC 全称 Fast Rear View Camera，用于实现快速倒车。快速倒车需要冷开机后 4 秒内，热启动 1 秒内显示摄像
头的画面。因此开发 FastRVC (instantcam) 程序，用于实现快速倒车功能。 
 
1.2 架构/流程概述 
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
 
图 1-1. FastRVC 工作流程 
 
FastRVC (instantcam)是在开机阶段，由 systemd 启动的一个进程，主要是监听倒车事件，然后送给 framebuffer 显示
倒车画面。 
 
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
 
图 1-2. instantcam 工作流程 
 
FastRVC 启动到显示画面的程度涉及的模块如图 1-2 所示，各模块功能如下： 
 
• ipc binder 提供 instantcam 与 camerahalserver 进程间通信； 
• Turbo 是 MediaTek MW 的全新架构，用于管理上层请求及从底层 ISP 获取 Sensor 图像数据； 
• ISP 负责处理 Sensor 数据，并通过转化将数据传递到 Turbo； 
• FBS 是 MediaTek Display 的一部分，用于处理从 instantcam 拿到的 frame，并送到 DRM 中做显示。 
 
1.3 配置/客制化指南 
开机默认开启倒车信号： 
 
src/multimedia/mtkcam-mt8678/mtkInstantCam/instantcam.cpp 
- property_get("vendor.ins.rvc.test", value, "3"); 
+ property_get("vendor.ins.rvc.test", value, "1"); 
 
指定当前项目传感器类型： 
src/multimedia/mtkcam-mt8678/mtkInstantCam/instantcam.cpp 
param.sensorType = Mtk::MTK_SENSOR_FEATURE_SENSOR_TYPE_DMS 
 
表示使用单路 YUV 中的 DMS 传感器作为 FastRVC 的传感器，可根据需要修改。 
  
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
1.4 常见问题/故障排除 
 FastRVC 问题调试 
1.4.1.1 FastRVC 快速倒车功能出图时间 
开机阶段的时间节点，使用如下命令查看 
 
adb shell cat /proc/bootprof  [单位：ms（毫秒）] 
 
不同硬件平台存在有差异，需要客户调试，以实测数据做为参考。 
 
1.4.1.2 FastRVC 客制化开发导致画面卡顿 
客户反馈开机阶段画面卡顿，原因是客户在显示函数主线程中频繁使用了 PROP_SET 函数，从而导致开机阶段的耗
时增加。建议客户避免每帧都设置 PROP_SET，另外使用子线程处理耗时操作，避免卡住主线程。 
 
 FastRVC 调试日志开关方法 
基本分析需提供开机阶段日志，串口日志以及 logcat 日志。 
针对开机阶段出现无法打印或者缺失 instantcam 日志的问题，客户后续客制化开发时可以使用 add_boot_event
函数将日志输出到 bootprof 中。对于关键日志的排查，可以参考这种方式打印和排查。  
 
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
# SRC0258 MT8676_Yocto_General_Introduction_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_General_Introduction_V1.0.pdf

SHA-256：e81920c10d1110533d256cbead4267519b632c0edc21b235cd4430763194fde4

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0258.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto General Introduction 
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 谭新梅 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 MT8676 总体介绍 ····················································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 MT8676 基本信息 ··················································································································································· 5 
1.3 MT8676 系统框图 ··················································································································································· 5 
1.4 MT8676 SoC 规格 ···················································································································································· 5 
附件一 附加条款 ······························································································································································ 7 
 
 
图片目录 
图 2-1. MT8676 系统框图 ························································································································································· 5 
 
表格目录 
表 1-1. MT8676 基本信息 ························································································································································· 5 
表 1-2. MT8676 SoC 规格 ·························································································································································· 6 
 
 
  
 
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
1 MT8676 总体介绍 
1.1 概述 
MT8676 是 MediaTek 推出的 5G 系统级高端车规芯片，定位舱泊一体，具有极致的性价比。  
 
MT8676 设备是一款高度集成且可扩展的汽车应用处理器，具有丰富的多媒体功能和 AI 能力。该芯片集成了 4 个
Arm® Makalu 和 4 个 Arm® Klein 核心，以及一个强大的多标准视频编解码器。此外，还集成了一套广泛的接口，用
于相机模块、外部音频组件、UFS/SD 卡和外部模块。 
 
ARM® Makalu 应用处理器提供了大量的计算能力，以支持最新的开源操作系统，以及车载信息娱乐（ IVI）和驾驶
舱域控制器（CDC）应用。ARM® Klein 提供了足够的计算能力，用于专门任务，如基于软件的图形渲染和在关键执
行环境中的实时操作系统。 
 
此外，MT8676 中集成的具有独特性能增强的 SMMU，为硬实时主控提供了一个直接的硬件机制，最小化了虚拟机
监视器的虚拟化开销。当多个操作系统在不同的应用域共存时，这一点特别有益，从而优化了整体系统性能。  
 
MT8676 中的新一代 Gen 7 APU 能够适应最新的 AI 趋势，实现在 AI 多媒体、AI 相机和 AI 语音体验中最大化有效性
能。APU Gen 7 还旨在确保 AI 增强技术在各种条件下持续长时间的稳定性能。 
 
集成的多标准视频加速器和高级音频子系统也提供了高级多媒体应用和服务，如流媒体音频和视频，多种解码器
和编码器。 
 
高性能 CPU、DSP 和硬件协处理器结合，提供了一个强大的调制解调器子系统，能够支持 NR Sub6、LTE Cat 18、
Category 24 HSDPA 下行和 Category 7 HSUPA 上行数据速率，以及 Class 12 GPRS、EDGE。 
 
MT8676 还包含无线通信设，包括 WLAN、蓝牙和 GPS。通过四种高级无线技术的组合芯片，MT8676 提供了业界
最佳和最便捷的连接解决方案。 
 
MT8676 支持丰富的汽车相机功能，如环视监控、后视监控、汽车行驶记录和驾驶员监控。这些功能可以通过最多
16x 视频流输入与 MIPI-CSI2 或以太网 AVB 输入来实现。丰富的显示接口（MIPI-DSI 和 DP）支持多达 6 个显示面
板，进一步增强了其在各种汽车应用中的可用性。 
 
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
1.2 MT8676 基本信息 
表 1-1. MT8676 基本信息 
项目 信息 
系统 Yocto 5.0 
内核 kernel-6.1 
芯片组 MT8676 + MT6197 (RF) + MT6637 (CON) + MT6363 & MT6373 & MT6319O & MT6319U (PMIC) 
 
1.3 MT8676 系统框图 
MT8676 的系统框图如图 1-1 所示： 
 
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
 
图 1-1. MT8676 系统框图 
 
1.4 MT8676 SoC 规格 
MT8676 的 SoC 规格如表 1-2 所示： 
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
表 1-2. MT8676 SoC 规格 
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
Audio ADSP HiFi3*2/800MHz 
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
# SRC0259 MT8676_Yocto_GPS_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_GPS_User_Manual_V1.0.pdf

SHA-256：dc694aa327b58fb77b611bffd9605476ea5ec1d6ab67bc958b0ee3e9834fda11

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0259.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-08-12
MT8676 Yocto GPS User Manual 
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
MT8676 Yocto GPS 
 User Manual 
Confidential B 
版本记录 
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Yocto GPS 
 User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 GPS ············································································································································································ 4 
1.1 概述·········································································································································································· 4 
 简单介绍 ······················································································································································ 4 
 GPS 缩略词 ··················································································································································· 4 
1.2 架构/进程概述 ························································································································································ 4 
 GPS 架构 ······················································································································································· 4 
 通用流程 ······················································································································································ 5 
1.3 配置/客制化指南 ···················································································································································· 6 
 固定速率配置 ·············································································································································· 6 
 多卫星导航系统配置··································································································································· 6 
1.4 常见问题/故障排除 ················································································································································ 7 
 Log 相关问题 ················································································································································ 7 
 测试相关问题 ·············································································································································· 7 
 GNSS 路径 ····················································································································································· 8 
附件一 附加条款 ······························································································································································· 9 
 
 
图片目录 
图 1-1.GPS 架构 ········································································································································································· 5 
图 1-2. 通用流程········································································································································································ 5 
图 1-3. 固定速率配置 ································································································································································ 6 
图 1-4. GNSS 配置 ······································································································································································ 7 
图 1-5. Mnld 测试 ······································································································································································ 8 
 
表格目录 
表 1-1.缩略词 ············································································································································································ 4 
 
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
MT8676 Yocto GPS 
 User Manual 
Confidential B 
1 GPS 
1.1 概述 
 简单介绍 
本章节介绍 MT8676 Yocto GPS 的基本功能以及常见问题的解决方法。 
 
 GPS 缩略词 
表 1-1.缩略词 
缩略词 全称 释义 
COLD start – 有时间辅助资讯，终端用户不会遇到该场景。 
FULL start – 没有任何的辅助资讯，相当于终端用户第一次买到手机
后使用定位应用的场景。 
GNSS Global Navigation Satellite 
System 
全球导航卫星系统 
GPS Global Positioning System 全球定位系统 
Hot start – 有所有的辅助资讯，终端用户此次定位距离上次定位小
于 2～4 小时。 
NMEA National Marine Electronics 
Association 
用于在海洋电子设备之间进行数据交换的通信协议，广
泛应用于 GPS/GNSS 接收器数据输出 
TTFF Time To First Fix 导航设备从开机到成功获取第一次有效定位数据所需要
的时间。 
WARM start – 有时间和位置辅助资讯，终端用户此次定位距离上次定
位超过 2～4 个小时。 
 
1.2 架构/进程概述 
 GPS 架构 
MT8676 GPS 架构如下： 
 
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
MT8676 Yocto GPS 
 User Manual 
Confidential B 
 
 
图 1-1.GPS 架构 
 
 通用流程 
 
图 1-2. 通用流程 
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
MT8676 Yocto GPS 
 User Manual 
Confidential B 
1.3 配置/客制化指南 
 固定速率配置 
固定速率（Fix Rate）是指 GNSS 上报位置信息的速率，目前 MT8676 可以支持的固定速率包括：1Hz、2Hz、5Hz 和
10Hz，默认配置是 1Hz 输出。修改固定速率的方法如下： 
 
方法 1：修改代码，配置fix_interval 参数。fix_interval = 100 对应 10Hz；fix_interval = 1000 对应
1Hz。 
 
图 1-3. 固定速率配置 
 
方法 2：动态修改配置文件，重启 GNSS 后生效。 
命令：echo fix_interval=1000 >> /etc/gnss/mnl.prop    /配置成 1Hz，重启 GPS 后生效。 
 
 多卫星导航系统配置 
MT8676 支持 GPS + GLONASS + Galileo + BeiDou 多卫星导航定位系统，gnssopmode 默认配置成
MTK_CONFIG_GPS_GLONASS_BEIDOU_GALILEO_NAVIC（默认配置的 GNSS 性能最佳，建议使用默认配置）。 
配置方法：将 “GNSS_MODE=x“”” 写到文件/etc/gnss/mnl.prop 
如果不另外配置，将会使用默认的 GNSSOPMode = MTK_CONFIG_GPS_GLONASS_BEIDOU_GALILEO_NAVIC 
 
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
MT8676 Yocto GPS 
 User Manual 
Confidential B 
 
图 1-4. GNSS 配置 
 
1.4 常见问题/故障排除 
 Log 相关问题 
• 联发科技的工程师需要哪些 log 用于分析问题？ 
/data/debuglogger/mobilelog，以及 nmea log 
mobilelog 默认会打开，开 nmea log 需要创建/etc/gnss/mnl.prop 文件并在里面写入： 
debug.dbg2file=1 
debug.filename=/data/debuglogger/gpsdebug.log 
保存重启，nmea log 就会出现在/data/debuglogger/gpsdebug.log 
 
 测试相关问题 
• 测试前需要检查是否有卫星信号，是否处于 open sky 的环境 
测试 GNSS 搜星或定位功能，信号需要 open sky 的环境下，例如空旷的室外或者有信号放大器的实验室。 
         能够定位是有前提条件的 CNR 为 40~43dbm 的卫星要>6 颗。 --->测 GNSS 一定要注意这个，如不确认当前信号
环境是否符合要求，拿一个对比机放在同样的环境做对比。  
• 如何测试 FULL start、WARM start、COLD start、HOT start 这几种启动方式的 TTFF？ 
可以使用 mnld_test 
Start test(open gps): mnld_test –h 
 
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
MT8676 Yocto GPS 
 User Manual 
Confidential B 
 
图 1-5. Mnld 测试 
  
根据提示，例如如果需要测试冷启动，可以用如下命令： 
mnld_test start c & 
可以输入如下指令将 log 打在串口，可以看到 TTFF 等信息 
journalctl -f --no-tail -o short-precise |grep mnldtest 
 
 GNSS 路径  
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Yocto GPS 
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
# SRC0260 MT8676_Yocto_GPU_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_GPU_User_Manual_V1.0.pdf

SHA-256：a14bf24fda30996a73aeecc021377dd1e97c96851f9711dd4dd71a705d4c99b3

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0260.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-08-12
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 Lingxiao Wang 正式版 
 
  
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
 Yocto 图形系统框架 ····································································································································· 5 
 Arm Mali-G615 架构及功能 ························································································································· 6 
1.3 常见问题/故障排除 ················································································································································ 7 
 GPU 渲染分析 ·············································································································································· 7 
 GPU 性能分析 ·············································································································································· 8 
附件一 附加条款 ····························································································································································· 10 
 
 
图片目录 
图 1-1. Yocto 图形框架 ······························································································································································ 5 
图 1-2. Arm Mali-G615 架构 ······················································································································································ 6 
 
表格目录 
表 1-1. Arm Mali-G615 feature support ····································································································································· 6 
 
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
1.1 概述 
本章节主要介绍 MT8676 GPU 的基本知识。 
MT8676 的 GPU 使用的是 Arm Mali-G615，其算力为 1.8T FLOPS。 
 
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
 如何使用 GPU 
• 使用 GPU 有两种方式，一种是开发的应用程序通过通用的图形库接口调用 GPU 设备，另一种是 GPU 自身提
供 API 编程接口，应用程序通过 GPU 提供的 API 编程接口直接调用 GPU 设备。 
 
• 通过通用的图形库的方式使用 GPU，都是通过 OpenGL 或 Direct3D 这一类现有的图形函数库，以编写渲染语
言（Shading Language）的方法控制 GPU 内部的渲染器（Shader）来完成需要的计算。 
• 目前业界公认的图形编程接口主要有 OpenGL 和 DirectX 这两种接口。OpenGL 是当前可用于开发可交互、可移
植的 2D 与 3D 图形应用程序的首选环境，也是当前图形应用最广泛的标准。只要在任何一个遵循 OpenGL 标
准的环境下都会产生一样的可视化效果。与 OpenGL 类似，DirectX（Directe Xtension）也是一种图形 API。为
适应 GPU 应用的需求，DirectX 则根据 GPU 新产品功能的扩充与进展及时地定义新的版本，它所提供的功能
几乎与 GPU 提供的功能同步。 
 
1.2 架构/进程概述 
 Yocto 图形系统框架 
Yocto 图形系统框架如下所示： 
 
 
图 1-1. Yocto 图形框架 
  
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
 Arm Mali-G615 架构及功能 
Arm Mali-G615 架构请参考下图： 
 
 
图 1-2. Arm Mali-G615 架构 
 
Arm Mali-G615 Feature Support 请参考表 1-1： 
 
表 1-1. Arm Mali-G615 feature support 
Features Value Description 
Anti-Aliasing • 4x MSAA 
• 8x MSAA 
4x Multi-Sampling Anti-Aliasing (MSAA) with 
minimal performance drop. 
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
• 16x MSAA 
API Support • OpenGL® ES 1.1, 2.0, 3.1, 3.2 
• Vulkan 1.1, 1.2, 1.3 
• OpenCL™ 1.1, 1.2, 2.0 Full 
Profile 
Full support for next-generation and legacy 
2D/3D graphics applications. 
Adaptive Scalable Texture 
Compression (ASTC) 
Low Dynamic Range (LDR) and High 
Dynamic Range (HDR). 
Supports both 2D and 3D images. 
ASTC offers several advantages over existing 
texture compression schemes by improving 
image quality, reducing memory bandwidth 
and thus energy use. 
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
Variable Rate Shading • Pipeline, primitive and 
attachment shading rates 
• Up to 4x4 shading rate 
Variable Rate Shading decouples fragment 
shading frequency from rasterization 
frequency, providing the opportunity to 
make energy savings while maintaining 
perceived visual quality. 
 
1.3 常见问题/故障排除 
 GPU 渲染分析  
出现屏幕绘制异常时，一般可以从三个方面进行分析，分别是 Weston/Display、GPU 和应用。判断是否为
Weston/Display 问题，首先可以查看 log 中是否有 display 相关错误，根据 log 进行下一步分析；其次平台有两种叠
图方式，可以通过 OVL 或者 GPU 进行叠图，可以通过关闭 HW OVL，强制使用 GPU 进行叠图，查看异常情况；最
后可以使用 screenrecord 命令进行录屏，查看录屏结果是否也为渲染异常。如果判断为 SF/HWC/Display 问题可以
找相关模块负责人进行下一步分析。 
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
 
GPU 问题在 log 中搜索是否有 Mali/EGL/GLES 等关键字相关的错误，根据错误进行下一步分析。也可以使用一些调
试工具，例如 Mali Graphics Debugger 等，这些工具可以帮助分析问题。也可以一些做有关 GPU 的对比实验。 
 
应用问题需要请应用共同分析，是否绘制时使用 GL 接口的问题，或者传入绘制的纹理不对等情况。 
 
1.3.1.1 GPU 相关对比实验 
常见对比实验如下： 
(1) 问题与 Yocto 系统版本是否相关 
(2) 上一代 GPU 框架（Midgard/Bifrost）平台是否可复现 
(3) 问题是否与 GPU Driver Version 有关 
(4) 关掉 AFBC 是否复现 
(5) 强制 glFinish 是否复现 
(6) 关掉 partial update 是否复现 
(7) 问题是否和 ASTC、MSAA 相关 
(8) RenderEngine backend 切换实验 
(9) 其他方面等 
 
 GPU 性能分析 
对于 GPU 的性能问题分析，通常有三个方面包括 GPU 问题、APK 问题和其他模块或系统相关问题。GPU 问题可以
查看 Yocto log 和 kernel log 中有没有 Mali/EGL/GLES 关键字的错误 log，根据 log 进行下一步的分析。可以使用工具
抓问题场景的 systrace 进行分析，以及使用 ARM Streamline 检查 HW 执行情况，查看具体是哪一个部分影响到
GPU 的性能。也可以做一些针对性的对比实验，细分影响性能的部分。 
对于应用部分，也可以使用 systrace 进行分析，是否为应用原因。其他模块或系统相关问题可以通过 log 和火焰图
进行分析。 
 
1.3.2.1 GPU 性能常见对比实验 
GPU 性能不达标的常见对比实验如下： 
(1) Fix performance mode 是否达标 
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
尽量减少 overdraw，在 shader 中避免使用非必要精度和优化数学表达式等。在 shader 中使用简单有效的语句，可
以减少 Fragment 负载。 
 
(4) 带宽瓶颈 
针对带宽的优化方向通常为：AFBC、ASTC、render size、mipmaping、pixel format 等。 
 
(5) Driver Overhead 
避免使用导致 CPU、GPU 串行运行的某些接口（如 glReadpixels、glFinish），优化每帧 gl 接口的使用数量，提倡使
用 VBO、EBO、VAO 等。 
 
(6) 开发者指南（源自 Arm Developer） 
Arm GPU Best Practices Developer Guide， 
链接：https://developer.arm.com/documentation/101897/0301?lang=en。 
  
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
# SRC0261 MT8676_Yocto_Log_Tool_Introduction_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Log_Tool_Introduction_V1.0.pdf

SHA-256：508bdcafc604c506a524aec6dd9534e2b7b8e42d47013836cb38afcb947d0d83

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0261.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2025-07-11
MT8676 Yocto Log Tool Introduction 
 
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
MT8676 Yocto 
Log Tool Introduction 
Confidential B 
版本记录 
版号 日期 作者 描述 
1.0 2025-07-11 徐夏吟 正式版本 
 
  
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
MT8676 Yocto 
Log Tool Introduction 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图目录 ··············································································································································································· 3 
表目录 ··············································································································································································· 3 
1 Log ············································································································································································· 4 
1.1 概述·········································································································································································· 4 
 简单介绍 ······················································································································································ 4 
 名词解释 ······················································································································································ 4 
1.2 架构/流程概述 ························································································································································ 4 
 Log 架构介绍 ················································································································································ 4 
 Kernel Log 接口介绍 ···································································································································· 5 
 Userspace Log 接口介绍 ······························································································································ 6 
 Journalctl 命令介绍 ······································································································································ 6 
 Mobile Log 介绍 ··········································································································································· 6 
 Mdlogger 介绍 ·············································································································································· 7 
1.3 配置/客制化指南 ···················································································································································· 7 
 Kernel Log 输出到 UART Consol 控制 ·········································································································· 7 
 Mobile Log 控制介绍 ··································································································································· 7 
 Mdlogger 配置介绍 ······································································································································ 8 
1.4 常见问题/故障排除 ················································································································································ 9 
附件一 附加条款 ····························································································································································· 10 
 
图目录 
图 1-1. Yocto MTK 日志流程······················································································································································ 5 
表目录 
表 1-1. 名词解释········································································································································································ 4 
 
 
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
MT8676 Yocto 
Log Tool Introduction 
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
MT8676 Yocto 
Log Tool Introduction 
Confidential B 
 
图 1-1. Yocto MTK 日志流程 
 
Yocto 上 MTK 依赖原生 log 机制，并做了一些优化，主要增加收集各种 log 到 storage 一处。 
如图，AP 端所有 log 都会被 Mobilelog 收集，Modem 端 log 会被 Mdlogger 收集，都保存到/data/debuglogger 路
径下。 
同时，保留了通过命令灵活抓取 Kernel log 和 Userspace log 的功能。 
 
 Kernel Log 接口介绍 
#include <linux/printk.h> 
使用其中的：pr_err/pr_warn/pr_info 等接口，各接口实际定义如下： 
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
MT8676 Yocto 
Log Tool Introduction 
Confidential B 
 Userspace Log 接口介绍 
• Syslog 
#include <syslog.h> 
void syslog(int priority, const char *message, ... /* argument */); 
 
其中 priority 表示 log level，可设为: 
LOG_EMERG/LOG_ALERT/LOG_CRIT/LOG_ERR/LOG_WARNING/LOG_NOTICE/LOG_INFO/LOG_DEBUG 
 
• 标准输出/标准错误接口 
#include <stdio.h> 
int printf(const char* format, ...);                      ----    向 stdout 中输出，等同于 fprintf（stdout，"xxx\n"） 
int perror(const char* format, ...);                      ----    向 stderr 中输出，等同于 fprintf（stderr，"xxx\n"） 
int fprintf( FILE *stream, const char *format, ... );       ---- stream 为 stdout/stderr/other steam 
int vprintf(const char* format, va_list arg);         ---- 注意，此 function 一般同 va_start/va_end 配套使用。 
int vfprintf(FILE *fp, const char *format, va_list ap) 
 
 Journalctl 命令介绍 
Journalctl 命令可灵活输出 userspace log，官方文档网址：
https://www.freedesktop.org/software/systemd/man/journalctl.html 
常见用法: 
adb shell journalctl -f --no-tail > C:\ journal.log 
 
-f 表示持续输出 log 
--no-tail 表示同时输出 log buffer 内容 
> C:\ journal.log 表示将 log 重定向到 PC 文件。 
 Mobile Log 介绍 
Mobilelog 是 MTK 的 log daemon，记录 AP 端 log 到平台/data/debuglogger/mobilelog 下。 
其下包含很多支 APLog_*。当停掉录制 log，然后再开始录制 log 时，就会生成一支新的 APLog。当平台重启时，重
启后也会将 log 录制到新的 APLog 中。 
其下主要包括： 
main_log_*       存储 Userspace Log 
kernel_log_*    存储 Kernel Log 
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
MT8676 Yocto 
Log Tool Introduction 
Confidential B 
pl_lk                   存储此次开机阶段 Bootloader Log 
adsp_* / scp_* / sspm_* / vcp_*  /…     存储一些 tinysys 的 Log 
 
 Mdlogger 介绍 
Modemlog 是 MTK 的 log daemon，记录 Modem 端 log 到平台/data/debuglogger/mdlog1 下。 
其下包含很多支 MDLog_*。当停掉录制 log，然后再开始录制 log 时，就会生成一支新的 MDLog。当平台重启时，
重启后也会将 log 录制到新的 MDLog 中。 
其下主要包括： 
MDDB_PHONE_unlwtg_n.EDB       存储 MDDB, 即 Modem 的 Database 
MDLog1_*    存储 Modem Log 
 
1.3 配置/客制化指南 
 Kernel Log 输出到 UART Consol 控制 
1. 对于 log level 的控制： 
echo <level> > /proc/sys/kernel/printk       
level 可以设为 0-8，设的越大，能输出的 log level 越多，当设为 8 时，表示所有 log level 都可以输出，例如： 
echo 8 > /proc/sys/kernel/printk 
 
2. 开机到 homescreen 后 kernel log 会默认关闭:可通过如下方法再开启：echo 1 > /proc/mtprintk 
如需要重启后，Kernel log 仍持续输出，则：setprop persist.vendor.uartconsole.enable 1 
 
3. User 版本 UART Log 会默认关闭，如需要开启，请：fastboot oem p2u on 
 
 Mobile Log 控制介绍 
请注意，mobilelog 在客户版本是默认未编译，如需启用该功能，请在meta/meta-mediatek-mt8676-
hyp/conf/machine/<project>.conf 文件中添加配置项：MTK_LOG_CUSTOMER_SUPPORT = “yes” 
在配置中添加 config 后，runtime mobilelog 功能在 user load 默认是 disable 状态，可通过下述方式打开。 
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
MT8676 Yocto 
Log Tool Introduction 
Confidential B 
1.3.2.1 启停命令（重启后仍生效） 
deep_start/ deep_stop   启/停 mobilelog，且启停状态重启后延续： 
adb shell mobile_log_d --control deep_start 
adb shell mobile_log_d --control deep_stop 
 
1.3.2.2 启停命令（只影响此次开机） 
start/stop    启/停 mobilelog，但不影响重启后 mobilelog 的启停状态： 
adb shell mobile_log_d --control start 
adb shell mobile_log_d --control stop 
 
1.3.2.3 Log Size 管控 
a. 编译阶段设定默认 log size：（单位是 MB） 
src/devtools/mobile_log_d/config.h 中：SIZE_DEFAULT 
 
b．runtime 通过命令设定 log size:（单位是 MB） 
adb shell mobile_log_d --control logsize=100    
此命令需启停一次 mobilelog 才生效，重启有效 
 
 Mdlogger 配置介绍 
请注意，Mdlogger 同 MobileLog 一样，在客户版本是默认未编译，如需启用该功能，请在meta/meta-mediatek-
mt8676/conf/machine/<project>.conf 文件中添加配置项：MTK_LOG_CUSTOMER_SUPPORT = “yes 
在配置中添加 config 后，runtime mobilelog 功能在 userdebug/user load 默认是 disable 状态，可通过下述方式打
开。 
1.3.3.1 启停命令（立即生效，且重启后仍生效） 
启动有几种模式，分别对应不同的命令： 
emdlogger_ctrl  5   表示 modem log 通过 USB 发送到 PC 端，通过 ELT tool 查看 
emdlogger_ctrl  6    表示 modem log 存到 storage（此模式会导致平台无法进入 suspend） 
emdlogger_ctrl 11     表示 modem log 在 suspend 时可录制（resume 后通过 emdlogger_ctrl 12 命令存到 storage）  
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
MT8676 Yocto 
Log Tool Introduction 
Confidential B 
停止 log: 
emdlogger_ctrl 7 
 
1.3.3.2 启停命令（不立即生效，只影响重启后） 
emdlogger_ctrl  3    表示 modem log 通过 USB 发送到 PC 端，通过 ELT tool 查看 
emdlogger_ctrl  4    表示 modem log 存到 storage 
 
1.3.3.3 启停命令（只影响此次开机） 
在已启动 mdlogger 后，可通过下述方法临时启停: 
Pause(stop)：emdlogger_ctrl 9 
Resume(start)：emdlogger_ctrl 8 
1.3.3.4 Log Size 管控 
a. 编译阶段设定默认 log size：（单位是 MB） 
src/devtools/mdlogger/emdlogger/logrecycle.cpp 中：getLogRecycleSize 函数修改其ret = 600 
 
b. runtime 通过命令设定 log size:（单位是 MB） 
emdlogger_ctrl  21 <size>  
此命令需启停一次 mdlogger 才生效，重启有效。  
 
1.4 常见问题/故障排除 
客户在使用 ModemLog/MobileLog 时，常因日志文件无法找到而产生疑问。常见原因包括存储空间已满导致日志无
法写入，或日志因轮转（rotate）机制被自动删除。 
 
如遇日志异常或有相关疑问，请收集并提供 /data/debuglogger 目录下的所有文件，并通过 eService 提交工单。
请同时附上对应的异常日志，详细说明发生异常的日志类型、具体复现场景及复现概率，以便于问题的进一步分
析和定位。 
 
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
MT8676 Yocto 
Log Tool Introduction 
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
# SRC0262 MT8676_Yocto_Log_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Log_User_Manual_V1.0.pdf

SHA-256：2131e9dacedfef849cd98202b00d95668853f84c4032a19822cd98f1e0aff78f

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0262.html)

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
1.2 架构/流程概述 ························································································································································ 5 
 Log 架构介绍 ················································································································································ 5 
 Kernel Log 接口介绍 ···································································································································· 5 
 Userspace Log 接口介绍 ······························································································································ 6 
 Journalctl 命令介绍 ······································································································································ 6 
 Mobilelog 介绍 ············································································································································· 6 
 Mdlogger 介绍 ·············································································································································· 7 
1.3 配置/客制化指南 ···················································································································································· 7 
 Mobilelog 控制介绍 ····································································································································· 7 
 Mdlogger 配置介绍 ······································································································································ 8 
1.4 常见问题/故障排除 ················································································································································ 9 
附件一 附加条款 ····························································································································································· 10 
 
 
图片目录 
图 1-1. Yocto MTK 日志流程 ····················································································································································· 5 
 
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
1.2 架构/流程概述 
 Log 架构介绍 
 
图 1-1. Yocto MTK 日志流程 
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
 
1.3.1.2 启停命令（只影响此次开机） 
start/stop 启/停 Mobilelog，但不影响重启后 mobilelog 的启停状态： 
adb shell mobile_log_d --control start 
adb shell mobile_log_d --control stop 
 
1.3.1.3 Log Size 管控 
• 编译阶段设定默认 log size：（单位是 MB） 
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
 
b．动态通过命令设定 log size  （单位是 MB） 
emdlogger_ctrl  21 <size>    
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

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
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
# SRC0263 MT8676_Yocto_OTA_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_OTA_User_Manual_V1.0.pdf

SHA-256：ebcdec122bb5ca48d52b38fc083c31891f173cc306c8d3e783f2d7f569bf1a2d

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0263.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-09-19 
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
版本记录 
版本 日期 作者 描述 
1.0 2024-09-19 Yiru Feng 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 4 
1 OTA ············································································································································································ 5 
1.1 概述·········································································································································································· 5 
1.1.1 简单介绍 ······················································································································································ 5 
1.1.2 目的 ······························································································································································ 5 
1.1.3 目标读者 ······················································································································································ 5 
1.1.4 如何使用本文档 ·········································································································································· 5 
1.2 OTA 升级的定义 ······················································································································································ 6 
1.3 OTA 缩略词 ······························································································································································ 6 
1.4 打开 A/B 系统升级 ·················································································································································· 6 
1.5 架构概述 ·································································································································································· 7 
1.5.1 A/B 系统升级进程 ······································································································································· 7 
1.5.1.1 如何执行 Yocto Full/Delta OTA 升级······························································································ 8 
1.5.2 A/B 系统分区布局 ······································································································································· 9 
1.5.3 Yocto OTA编译升级包架构 (临时方案) ···································································································· 10 
1.5.3.1 编译 Yocto targetfiles.zip ·············································································································· 10 
1.5.3.2 编译 Full otapackage.zip ··············································································································· 11 
1.5.3.3 编译 Delta otapackage.zip ············································································································ 11 
1.5.4 修改升级包的签名 ···································································································································· 12 
1.5.5 LK2 启动控制流程 ······································································································································ 13 
附件一 附加条款 ····························································································································································· 14 
 
图片目录 
图 1-1. Yocto OTA升级架构 ······················································································································································ 7 
图 1-2. Yocto A/B 分区布局 ······················································································································································· 9 
图 1-3. Yocto OTA 编译升级包架构 ········································································································································ 10 
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
图 1-4. Yocto LK2 启动流程 ····················································································································································· 13 
 
表格目录 
表 1-1. 章节概述········································································································································································ 5 
表 1-2. 缩略词 ··········································································································································································· 6 
 
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
1 OTA 
1.1 概述 
1.1.1 简单介绍 
Yocto A/B 系统更新的介绍如下： 
• 系统更新方式为 A/B update，即设备运行两套完全并行的系统，active_slot 和非 active_slot 
• 磁盘上始终保留一个可启动的系统，设备不会变砖 
• LK2 阶段根据 misc 分区中 AB 标志设置确认 active_slot 并加载对应分区数据 
• OTA 升级保持在正常模式的后台运行，用户无感 
 
1.1.2 目的 
本文档为用户提供了 Yocto A/B 系统更新的指南。 
主要介绍了在 Yocto 平台上生成 OTA 包的方法及 OTA 测试方法；同时介绍了启动流程中 AB 标志的使用。 
1.1.3 目标读者 
本文档主要面向如下群体： 
• 具备 OTA A/B 系统更新（无缝更新）技术知识的工程师 
 
1.1.4 如何使用本文档 
本部分解释了本文档中信息的分布方式，并提供了一些提示和示例，以简化在本文档中查找和理解信息。  
下表 概述了本文档中的各个章节。 
表 1-1. 章节概述 
编号 章节 描述 
1.1 概述 描述了本文档的范围和布局 
1.2 OTA 升级的定义 规定了 OTA 升级的定义 
1.3 OTA 缩略词 列举了 OTA 缩略语 
1.4 打开 A/B 系统升级 在联发科技平台打开 AB 系统升级所需服务 
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
编号 章节 描述 
1.5.1 A/B 系统升级进程 A/B 系统升级的架构及升级方式介绍 
1.5.2 A/B 系统分区布局 A/B 分区介绍 
1.5.3 OTA 编译包 介绍如何制作 OTA 全量升级包和差分升级包 
1.5.4 修改升级包的签名 介绍升级包签名 key 及其客制化 
1.5.5 LK2 启动控制流程 Yocto LK2 阶段 bootctl 参数介绍 
 
1.2 OTA 升级的定义 
OTA 的专业术语定义如下： 
全包升级：全包升级是指对设备的待升级分区数据进行完整的更新，升级包内包含各个分区的完整 image 信息。 
差分升级：差分升级，也称作增量升级，是指对设备的待升级分区数据与目标版本对应分区数据的差异部分进行
更新，升级包内只包含两个版本的差异部分，这能极大缩减升级包的大小。  
 
批注：只能在编译差分包时使用的旧版本或源版本的设备上安装对应的增量更新包。 
1.3 OTA 缩略词 
本文档使用的缩略语如下： 
表 1-2. 缩略词 
缩略词 全称 释义 
Bootctl Boot Control A/B slot 标识结构体，存储在 misc 分区中 
LK2 Little Kernel 2 微型内核，Yocto 启动阶段 
OTA Over-The-Air 空中下载升级，分为 full update (全包升级)，delta update (差分升级) 
 
1.4 打开 A/B 系统升级 
请在对应 project.bb file 中添加以下模块： 
• recipes-auto/images/mtk-core-image-auto8676.bb:  
–   update-engine-sideload-u \ 
–   update-verifier-u \ 
 
update-engine-sideload-u: OTA 升级模块，进行读写分区等操作 
update-verifier-u: OTA 重启成功后，修改新 slot 标志位 
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
1.5 架构概述 
本章节简要描述系统的各个模块及其关系。 
1. A/B 系统升级进程 
2. A/B 系统分区布局 
3. 编译升级包架构 
4. 修改升级包的签名 
5. LK2 启动控制流程  
1.5.1 A/B 系统升级进程 
 
图 1-1. Yocto OTA升级架构 
 
上图描述了 Yocto OTA升级的整体架构，从图中能获取到如下信息： 
1. Yocto OTA升级支持两种触发方式：本地升级和网络升级，联发科技只支持本地升级，网络升级需要客户自行
实现。本地升级是指升级包存放在本地环境内，利用升级脚本去触发升级；网络升级是指升级包存放到远程服
务器内，升级时需要 OTA APP 通过无线网络远程下载和安装更新包。 
 
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
2. 以本地升级为例，OTA 升级的大致流程如下： 
– 将升级包存放到本地 PC 环境内 
– 执行 OTA update script 调用 update_engine sideload 触发升级 
– 对升级包进行完整性与准确性校验（校验 key 相关内容请查看 1.5.4） 
– 将升级包内的升级数据分别更新到对应分区内 
– 对已经更新到分区内的数据进行校验，确保数据的准确性 
– 更新系统启动控制参数，即 Bootctl 信息，确保系统下一次启动加载新的 slot 分区数据 
– 切换 boot region，确保系统的下一次启动时加载新的 preloader 分区数据 
– 重启设备 
 
1.5.1.1 如何执行 Yocto Full/Delta OTA 升级 
测试环境设置 
1. The PC has Python 3 environment  
2. Flash base load in DUT  
3. Get OTA package 
 
测试步骤 
1. Device connected Yocto ADB environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_delta.zip > update.txt 2>&1 
Note: 
▪ hypervisor_update.py: Update script 
▪ otapackage_delta.zip: OTA package. Unlimited package name 
▪ > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The first restart after the upgrade should successfully enter the HomeScreen. 
3. Check whether setting-version has been updated. 
Note: If the test upgrade fails, please provide the update log and UART log in CR. 
 
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
1.5.2 A/B 系统分区布局 
 
图 1-2. Yocto A/B 分区布局 
 
Yocto AB 分区布局如上图所示，可以在分区表中进行 AB 分区的配置： 
meta/meta-mediatek-mt8676/recipes-bsp/ptgen/files/auto8676p1_64/partition_table_emmc_ab.csv 
 
1. 删减 AB 分区升级，需先将目标分区修改为单分区，并将分区表中对应【 OTA_Update】改为 N。 
 
 
2. 新增 AB 分区升级，需同时新增 partition_a/b 两个分区，并将分区表中对应【OTA_Update】设置为 Y。AB 分
区需要保持 size 一致。 
 
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
1.5.3 Yocto OTA 编译升级包架构 (临时方案) 
 
图 1-3. Yocto OTA编译升级包架构 
 
上图描述了 Yocto OTA编译升级包的架构，从图中能获取到如下信息： 
1. Yocto 编译升级包暂时需要借助 Android 的编译环境下进行 
2. Yocto Only 编译升级包的大致流程如下： 
– 编译 Yocto targetfiles.zip 
– 利用 Yocto targetfiles.zip 在 Android 编译环境下编译生成全量升级包和差分升级包 
 
1.5.3.1 编译 Yocto targetfiles.zip 
Yocto 的 targetfiles.zip 需要手动替换新版本全部的 AB images 到/default_target/IMAGE 和/RADIO 下，并重新压
缩生成 yocto_target.zip。 
 
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
 
 
在当前/default_target/目录下，执行 zip -r yocto_target.zip . 
1.5.3.2 编译 Full otapackage.zip 
得到 yocto_target.zip 后，就可以在 Android 的编译环境下编译 Yocto 的全量升级包。 
编译指令： 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall yocto_target.zip.zip 
otapackage_full.zip 
 
批注： 
• ota_from_target_files：升级包编译脚本 
• build/make/target/product/security/testkey：对升级包进行签名的 key 路径，联发科技默认使用 Google 提供的 testkey，贵
司可指定其它的 key 路径，使用-k 参数指定。 
如何更换签名 key，请参考 1.5.4。 
• yocto_target.zip：Yocto 的 targetfiles.zip 
• otapackage_full.zip：最终产生的 Yocto 全量升级包，包名可随意指定 
• 请务必确保在 Android 的编译环境下编译升级包，并确保编译全包前有执行 source & lunch 
 
1.5.3.3 编译 Delta otapackage.zip 
前提条件： 
编译差分包需要预先准备两份 yocto_target.zip。一份是基底版本（ source 版本）的 yocto_target.zip，此处命名为
source_yocto_target.zip；一份是目标版本（target 版本）的 yocto_target.zip，此处命名为 target_yocto_target.zip。 
批注：请务必确保平台上烧录的基底版本 load 和基底版本的 target_files.zip 是同一次编译得到的。 
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
 
编译指令： 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall -i 
source_yocto_target_files.zip target_yocto_target_files.zip otapackage_delta.zip 
 
批注： 
• ota_from_target_files：升级包编译脚本 
• build/make/target/product/security/testkey：对升级包进行签名的 key 路径，联发科技默认使用 Google 提供的 testkey，贵
司可指定其它的 key 路径，使用-k 参数指定。 
如何更换签名 key，请参考 1.5.4。  
• source_yocto_target.zip：source 版本的 yocto_target.zip 
• target_yocto_target.zip：target 版本的 yocto_target.zip 
• otapackage_delta.zip：最终产生的 yocto 差分升级包，包名可随意指定 
• 请务必确保在 Android 的编译环境下编译升级包，并确保编译全包前有执行 source & lunch 
 
1.5.4 修改升级包的签名 
OTA 升级会使用到两把 key：xxx.pk8 和 xxx.x509.pem。 
 
1. xxx.pk8 格式的 key 用于在做包时对升级包签名。 
2. xxx.x509.pem 格式的 key 用于在 OTA 升级过程中进行升级包的校验。 
 
请参考如下两步去修改升级包的签名 key： 
1. 将 1.5.3.2 和 1.5.3.3 内的编译指令 -k 参数后更换为需要使用的 xxx.pk8 和 xxx.x509.pem 文件路径。 
2. 将meta/meta-mediatek/recipes-support/update-engine-sideload-u/files/ota/otacerts.zip 内
更换实际使用的 xxx.x509.pem 文件。 
 
更换 key 后需确认以下两支文件一致，升级校验才可通过： 
• otapackage.zip 的/META-INF/com/android/otacert 文件 
• device 的/system/etc/security/otacerts.zip 文件 
 
 
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
1.5.5 LK2 启动控制流程 
 
图 1-4. Yocto LK2 启动流程 
 
1. OTA 升级完成后重启，Yocto OS 启动，进入 Yocto LK2 阶段。 
2. 检查当前 slot 内 Yocto 是否有被成功启动过，即检查 boot control 内的 Yocto successful boot 的值是否为 1。 
3. 如果 Yocto successful boot 的值为 1，意味着当前 slot“可启动”，不做操作，机器继续启动；如果 Yocto 
successful boot 的值为 0，意味着当前 slot“之前未成功启动过”，则检查当前 slot 的可重启次数是否大于 0，
即检查 boot control 内的 tries_remaining 的值。  
4. 如果 tries_remaining 的值大于 0，则将 tries_remaining 的值减 1，继续启动； 否则意味着当前 slot“不可启
动”，将当前 slot 标记为 invalid，即将当前 slot 的 priority、Yocto successful boot 全部置 0； 
5. 然后检查当前是否还存在可用 slot，即检查是否存在 priority 不为 0 的 slot，如果不存在，系统报错 Error 信
息；如果存在，则将 rollback slot 的 priority 设定为 15，并触发 Yocto 重启完成 rollback。 
6. Yocto 启动成功时，将当前 slot Yocto successful boot 的值置为 1。 
 
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
MT8676 Yocto OTA 
 
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
# SRC0264 MT8676_Yocto_Property_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Property_User_Manual_V1.0.pdf

SHA-256：2e0992f640abec9ca7db927700cff45e6b23ed37d1d9912f46ce55290188c60f

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0264.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2025-01-22 
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
版本记录 
版本 日期 作者 描述 
1.0 2025-01-22 匡敏 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 Yocto Property ··························································································································································· 4 
 Yocto Property 功能 ················································································································································· 4 
 提供 build.prop & local.prop file ·················································································································· 4 
 支持 setprop/getprop cmd ··························································································································· 4 
 支持 persist property ···································································································································· 4 
 Libprop.so 支持的 API ·································································································································· 5 
 支持 Property Watch ···································································································································· 5 
 特定 Property 跨域同步 ······························································································································ 5 
 Yocto Property 框架图 ············································································································································· 6 
 Property Source Code ·············································································································································· 6 
 如何使用 libprop.so ················································································································································ 6 
 如何添加 Property to local.prop ····························································································································· 7 
 Property Watch ························································································································································ 7 
 特定 Property 跨域同步 ·········································································································································· 8 
附件一 附加条款 ····························································································································································· 10 
 
图片目录 
图 1-1. getprop ··········································································································································································· 4 
图 1-2. Property API ··································································································································································· 5 
图 1-3. Property 流程 ································································································································································ 6 
图 1-4. prop.bb ··········································································································································································· 7 
图 1-5. watchprop ······································································································································································ 7 
图 1-6. watchprop API ································································································································································ 8 
图 1-7. Property cross-OS sync 流程 ·········································································································································· 8 
图 1-8. setprop from Android to Yocto······································································································································· 9 
图 1-9. setprop from Yocto to Android······································································································································· 9 
 
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
 Yocto Property 功能 
 提供 build.prop & local.prop file 
 
图 1-1. getprop 
 支持 setprop/getprop cmd 
例如：setprop xxx xxx 
      getprop xxx or getprop | grep xxx   （xxx 指property key 和 value） 
 
 支持 persist property 
例如：setprop persist.xxx xxx 
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
 Libprop.so 支持的 API 
 
图 1-2. Property API 
 支持 Property Watch 
见 1.6 章节。 
 特定 Property 跨域同步 
见 1.7 章节。 
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
 Yocto Property 框架图 
 
图 1-3. Property 流程 
 
Yocto property 包括一个 prop deamon service 和 一个 libprop.so。Module link libprop.so 就可以调用其中的 API，当某
个 process 调用 property set 会与 prop 通信，prop 将 property 写入共享内存，当某个 process 调用 property get，直
接从共享内存中读取。 
 
 Property Source Code 
Yocto: 
• Source path: src/apps/atom-base/progs/property/ 
• bb path: 
meta/meta-mediatek/recipes-devtool/prop/prop.bb 
meta/meta-mediatek/recipes-devtool/prop/propsync.bb  
meta/meta-mediatek/recipes-devtool/libprop/ libprop.bb 
 
Android: 
• Source path: vendor/mediatek/proprietary/external/propsync/ 
 
 如何使用 libprop.so 
如果一个 module 想调用 property API，需要 link libprop.so，方法如下： 
1. bb 中修改 
    DEPENDS = "libprop” 
 
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
2. makefile 中加： 
    LDFLAGS:  -lprop 
 
3. source code 增加 properties.h 
    #include <prop/properties.h> 
 
4. xxx.service 依赖 prop.service  （特别是开机比 prop 起来早，需要等 prop ready 后才能使用） 
    After=prop.service 
 
 如何添加 Property to local.prop 
在prop.bb 中将 build time 所需要产生的 property 放在 local.prop。 
 
图 1-4. prop.bb 
 Property Watch 
1. property_watch() 函数开发是用来监测某个 key，当这个 key 被设置，会通知调用 property_watch 的 process，
执行 callback 函数。 
UT test 方法：在 Yocto 端，执行watchprop -w xxx(key) xxx(value) 
 
图 1-5. watchprop 
 
2. 如果 module 想监测某个 property 做事，可以直接调用 property_watch 函数，实现自己的 callback 函数 
注意：property watch 包含同步 callback 和 异步 callback。 
如果不用关心 callback 的返回值或 callback 实现有阻塞并耗时的动作，请使用异步 callback，调用的是
property_watch_async() 
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
如果想通过调用 property_set 得到 callback 返回值，请使用 property_watch() 
 
 
图 1-6. watchprop API 
 特定 Property 跨域同步 
 
图 1-7. Property cross-OS sync 流程 
 
1. Android sync to Yocto (在 Android rc 中设定要监测的 property，当这个 property 被设置时会 trigger process 
synclient 跑起来，通过 vsocket 与 Yocto propsyncserver 通信，然后 Yocto propsyncserver 会设置 property) 
 
UT test: 
1) 在 init.project.rc 中监测 sys.boot_test 
 
 
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
2) 在 Android 端：adb shell setprop sys.boot_test  done 
3) 在 Yocto 端检查：adb shell getprop sys.boot_test 
 
 
图 1-8. setprop from Android to Yocto 
 
2. Yocto sync to Android（直接调用 property_set_sync_android 函数，其 callback 函数会通过 vsocket 与 Android 
synserver 或 synserverv 通信，然后 synserver 或 synserverv 会设置这个 property） 
 
UT test:   
1) 在 Yocto 端 
adb shell watchprop -s xxx(key) xxx(value) 0 0  （vendorproperty）        
adb shell watchprop -s xxx(key) xxx(value) 1 0  （system property） 
2) 在 Android 端检查：adb shell getprop xxx 
 
 
图 1-9. setprop from Yocto to Android 
 
注意：测试前请先关掉 selinux (adb shell setenforce 0)！ 
 
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
# SRC0265 MT8676_YOCTO_SCP_User_Manual_zh_V1.01.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_YOCTO_SCP_User_Manual_zh_V1.01.pdf

SHA-256：b0dbacda5c8790210fcf321fdd79d03e9c45b62fbd1621e78386a08a08e20c45

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0265.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.01 
Release date:  2026-04-02
MT8676 SCP 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 SCP 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 日期 
0.1 2026-04-02 Benjamin Lin Initial draft 
 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 SCP 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 5 
表格目录 ··········································································································································································· 5 
1 概述 ··········································································································································································· 7 
1.1 硬件架构 ·································································································································································· 7 
1.2 软件架构 ·································································································································································· 9 
1.3 小结········································································································································································ 10 
2 源代码树 ································································································································································· 11 
2.1 LK 引导加载程序 ··················································································································································· 11 
 Linux 内核驱动 ··········································································································································· 11 
2.2 FreeRTOS Tree ························································································································································ 11 
3 构建系统 ································································································································································· 12 
3.1 配置文件 ································································································································································ 12 
 LK 引导加载程序 ········································································································································ 12 
 Linux 内核驱动 ··········································································································································· 12 
 FreeRTOS ····················································································································································· 12 
 编译命令 ································································································································································ 13 
3.2 13 
3.3 镜像布局 ································································································································································ 13 
4 启动顺序 ································································································································································· 14 
5 处理器间中断 ························································································································································· 15 
5.1 SCP 端的使用 ························································································································································· 16 
5.2 内核端的使用 ························································································································································ 22 
6 DRAM 访问流程 ······················································································································································ 24 
6.1 在 Linux 内核中保留内存 ····································································································································· 24 
 在共享内存中注册使用者 ························································································································· 25 
 扩展共享内存 ············································································································································ 26 
6.2 通过 ID 获取保留内存 ·········································································································································· 26 
6.3 在 SCP 端获取保留的 DRAM 区域 ························································································································ 27 
6.4 将 DRAM 地址从 AP 视图重映射到 SCP 视图 ······································································································ 27 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 SCP 
User Manual 
Confidential B 
6.5 请求系统总线和 DRAM········································································································································· 28 
7 驱动程序指南 ························································································································································· 29 
7.1 驱动程序初始化 ···················································································································································· 29 
7.2 添加新驱动程序 ···················································································································································· 29 
7.3 中断········································································································································································ 30 
 IRQ 注册 ····················································································································································· 30 
 使能中断 ···················································································································································· 31 
 禁用 IRQ······················································································································································ 31 
 注册唤醒源 ················································································································································ 32 
7.4 锁············································································································································································ 33 
7.5 DMA ······································································································································································· 33 
7.6 硬件信号量 ···························································································································································· 34 
7.7 GPIO 和 EINT ·························································································································································· 36 
 GPIO 使用 ··················································································································································· 37 
 EINT 使用 ···················································································································································· 38 
8 调试方法 ································································································································································· 39 
8.1 PRINTF_* 使用 ······················································································································································· 39 
8.2 串口········································································································································································ 39 
8.3 异常日志分析 ························································································································································ 40 
 Trace Buffer ················································································································································· 42 
8.4 核心转储 ································································································································································ 43 
 LLDB 基本命令············································································································································ 45 
8.5 性能评估和运行记录 ············································································································································ 48 
 性能评估 ···················································································································································· 48 
 运行记录 ···················································································································································· 49 
9 地址检测器 ····························································································································································· 56 
9.1 ASAN 使用方法 ······················································································································································ 56 
9.2 如何将代码移动到 DRAM····································································································································· 58 
10 附录································································································································································· 60 
10.1 常见问题及解决方法 ············································································································································ 60 
 Malloc 失败················································································································································· 60 
 非对齐访问 ················································································································································ 61 
10.2 代码大小限制 ························································································································································ 62 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 SCP 
User Manual 
Confidential B 
 代码大小检查工具的使用 ························································································································· 62 
10.3 Scp_Region_Info 架构 ············································································································································ 63 
10.4 SCP 恢复机制 ························································································································································· 64 
 SCP 恢复流程 ············································································································································· 64 
 恢复通知流程 ············································································································································ 65 
附件一 附加条款 ····························································································································································· 67 
 
图片目录 
图 1-1. MTK 23P SCP 架构 ························································································································································· 8 
图 1-2. MTK MT8676 SCP 软件架构 ·········································································································································· 9 
图 4-1. SCP 启动流程框图 ······················································································································································· 14 
图 5-1. Tinysys IPI 通用架构 ···················································································································································· 15 
图 8-2. 串口工具设置 ······························································································································································ 40 
图 8-5. 性能评估日志示例 ······················································································································································ 49 
图 8-6. 飞行记录控制台模式示例 ·········································································································································· 51 
图 8-7. 操作方法······································································································································································ 52 
图 8-8. 运行记录的 GUI 显示模式 ·········································································································································· 53 
图 8-9. 详细信息显示 ······························································································································································ 53 
图 8-10. 任务被唤醒的事件 ···················································································································································· 54 
图 8-11. 队列事件的示例 ························································································································································ 54 
图 8-12. 队列事件的详细信息 ················································································································································ 54 
图 8-13. 软件定时器示例 ························································································································································ 54 
图 8-14. 临界区示例································································································································································ 55 
图 8-15. 中断服务程序示例 ···················································································································································· 55 
图 8-16. OS 时钟节拍示例 ······················································································································································ 55 
图 10-1. 内存工具报告 ···························································································································································· 62 
图 10-2. SCP 重置流程 ···························································································································································· 64 
 
表格目录 
表 1-1. 硬件规格表···································································································································································· 7 
表 1-2. 架构规格表·································································································································································· 10 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 SCP 
User Manual 
Confidential B 
表 6-1. 标准 DRAM 访问流程 ················································································································································· 24 
表 6-2. 默认重映射规则表 ······················································································································································ 28 
表 7-1. EINT 和 GPIO 的映射引脚名称 ··································································································································· 36 
表 7-2. GPIO 控制寄存器表 ···················································································································································· 37 
表 8-1. PRINTF 使用场景 ························································································································································· 39 
表 8-2. UART 引脚名称 ···························································································································································· 39 
表 8-3. 编译器选项和定义 ······················································································································································ 48 
表 8-4. 编译器选项·································································································································································· 49 
表 8-5. Flight Record 定义 ······················································································································································· 50 
表 9-1. 编译器选择和定义 ······················································································································································ 56 
表 9-2. 异常类型表·································································································································································· 56 
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 SCP 
User Manual 
Confidential B 
1 概述 
系统协处理器（SCP）是一个子系统，设计用于在系统处于低功耗状态时执行始终开启的任务。  
1.1 硬件架构 
SCP 由专用处理器、SRAM、DMA 和外设（如 I2C、GPIO）组成。 
• 处理器：SoC 内嵌 MDSP RV55NN x 1，每个核心有 2 个硬件线程，采用 RISC-V 架构 
– 单精度浮点 
– 压缩指令 
– 用于语音加速的 DSP ISA 
– 内部 NN 引擎用于矢量指令 
– 每个核心独立的指令缓存 32K，数据缓存 32K 
– 工作频率从 266 到 800MHz 
• 内存：2MB TCM 
• DMA 吞吐量： 
– 从 TCM 到 DRAM 的数据传输：63.8 MB/s 
– 从 DRAM 到 TCM 的数据传输：39.9 MB/s 
• 外设： 
– I2C x 1，I3C x 6 
– SPI x 4 
– UART x 2 
• 详细信息 
表 1-1. 硬件规格表 
 名称 MT6897 
Core RV55NN x 1 (每核 2 个硬件线程) 
Cache 
L1$ I$/ D$: 32KB/32KB 
L2$ 256KB  
TCM 
L1TCM NA 
L2TCM 2MB 
外设 • I2C x 1 
• I3C x 6 
• SPI x 4 
• UART x 2 
DMA 8 channels (0&1 reserved for I2C) 
VoW I/F 3-mic 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 SCP 
User Manual 
Confidential B 
 名称 MT6897 
Operating Frequency 800MHz@Vscp 0.75V 
Performance 
(CoreMark@Vmin)  TBD 
Power Efficiency  
(CoreMark/mW) TBD 
 
  
图 1-1. MTK 23P SCP 架构 
  
mbox mbox mbox mbox mbox 
VoW 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 SCP 
User Manual 
Confidential B 
1.2 软件架构 
SCP 软件架构基于 AWS FreeRTOS v10.1.0，这是一个支持多任务、互斥、信号量和软件定时器的实时内核。软件包
还包括音频和传感器集线器等中间件，但本文档不讨论这些细节。  
 
SCP 基于 OpenAMP rpmsg/remoterproc 框架的 IPI（处理器间中断）与 Linux 内核通信。我们还提供了其他机制以实
现 AP 和 SCP 之间的协作： 
• IPI（处理器间中断）– 详见第 5 章 
• 硬件信号量 – 详见第 7.6 节 
• 日志记录– 详见第 Error! Reference source not found.节 
• SCP 恢复机制 – 详见第 10.4 节 
 
图 1-2. MTK MT8676 SCP 软件架构 
 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 SCP 
User Manual 
Confidential B 
1.3 小结 
表 1-2. 架构规格表 
Item Value 
Platform Mt8676 
Project $PROJECT 
Linux version 6.1 
FreeRTOS version 10.1.0.1 
ISA  RV55-NN 
L2 TCM 2MB 
 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 SCP 
User Manual 
Confidential B 
2 源代码树 
SCP 源代码树包括引导加载程序（即 LK）、Linux 内核和 FreeRTOS。列举如下: 
2.1 LK 引导加载程序 
- src/bsp/lk2/platform/mediatek/common/scp/scp.c 
- src/bsp/lk2/platform/mediatek/common/scp/RV/ 
- src/bsp/lk2/platform/mediatek/mt8676/include/platform/scp_plat_soc.h 
 Linux 内核驱动 
• SCP driver path 
master/src/kernel/linux/v6.1_mt8676/co_device_module/drivers/misc/mediatek/scp 
• SCP  DTS path 
 
master/src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/Mt8676.dts 
2.2 FreeRTOS Tree 
• RTOS Kernel 
master/src/tinysys/mt8676/kernel/FreeRTOS_v10.1.0.1 
• Platform and peripheral drivers 
master/src/tinysys/mt8676/scp 
master/src/tinysys/mt8676/common 
• Libraries 
master/src/tinysys/mt8676/scp/middleware 
• Toolchain 
prebuilts/devtool/clang/md32rv/linux-x86/CodeLine_212 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 SCP 
User Manual 
Confidential B 
3 构建系统 
在编程之前，开发人员可能想知道如何使用基本的 SCP 配置进行编译。本章将展示配置文件的位置和如何通过命
令生成 SCP 镜像。 
3.1 配置文件 
 LK 引导加载程序 
src/bsp/lk2/platform/mediatek/mt8676/rules.mk 
• MODULES_DEP += platform/$(PLATFORM)/common/scp/RV 
 Linux 内核驱动 
master/src/kernel/linux/v6.1_mt8676/co_device_module/drivers/misc/mediatek/scp/rv/ 
• 启用或禁用 SCP 驱动程序: CONFIG_MTK_TINYSYS_SCP_SUPPORT 
• 切换功能，例如语音唤醒和传感器中心等功能的开关 
 FreeRTOS 
master/src/tinysys/mt8676/scp/project/RV55_A/Mt8676/platform/platform.mk 
• 平台的默认配置额外的 CFLAGS 
• 额外的 LDFLAGS 
驱动程序/中间件的 C 对象文件和包含路径
master/src/tinysys/mt8676/scp/project/RV55_A/Mt8676/project.mk 
• 项目配置˙ 
通过在 platform.mk 文件中覆盖选项来自定义项目  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 SCP 
User Manual 
Confidential B 
3.2 编译命令 
cd path/to/yocto-codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-hyp/conf/templates/auto8676p1_64_hyp 
source meta/poky/oe-init-build-env 
bitbake tinysys-scp -c cleansstate && bitbake tinysys-scp 2>&1 | tee yocto_scp.log 
Build Result scp.img path: 
• build\tmp\work\aarch64-poky-linux\tinysys-scp\1.0\deploy-tinysys-scp 
• build\tmp\work\aarch64-poky-linux\tinysys-scp\1.0\image\lib\firmware 
3.3 镜像布局 
• EMMC/UFS 存储器中存在的两个分区：scp1 和 scp2 
– scp1: main and active partition 
– scp2: backup for AB system 
• Image: scp.img: 
– tinysys-scp-RV55_A.bin: firmware/data located in SRAM 
– tinysys-scp-RV55_A.elf: elf with symbol, for debug purpose 
– tinysys-scp-RV55_A_DRAM.bin: firmware/data located in DRAM 
 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 SCP 
User Manual 
Confidential B 
4 启动顺序 
在 SCP 镜像准备好之后，我们需要了解镜像是如何加载到 SRAM/DRAM 中以及 SCP 是如何启动运行的。整个流程
由 LK 引导加载程序、Linux 内核和 SCP 固件共同完成，具体如下： 
• LK 引导加载程序：(yocto/src/bsp/lk2/platform/mediatek/common/scp/scp.c) 
– 为 SCP 镜像分配永久性 DRAM 内存加载/验证 SCP 镜像设置 EMI MPU（AP 只读） 
• 内核 
– 初始设置(mbox/ipi/logger/…) 
– 启动 SCP 
• SCP 
– 加载程序 ：(master/src/tinysys/mt8676/scp/project/RV55_A/Mt8676/platform/boot55.S) 
▪ 将 SCP 镜像加载到 SRAM 跳转到 FreeRTOS 
– FreeRTOS (master/src/tinysys/mt8676/scp/project/RV55_A/Mt8676/platform/src/main.c) 
▪ 驱动程序初始化设置 MPU 
 
图 4-1. SCP 启动流程框图 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 SCP 
User Manual 
Confidential B 
5 处理器间中断 
处理器间中断 (IPI) 是一种在 Linux 和 FreeRTOS 驱动程序之间传递消息的机制。它包括以下部分： 
1. 一块共享内存：用于交换数据 
2. 一组中断：用于相互通知 
 
图 5-1 展示了 Tinysys IPI 架构。软件架构由四层组成： 
1. Synchronization layer: 用于 AP 和 Tinysys 之间通信的公共 API 
2. Rpmsg layer: 提供阻塞/非阻塞发送功能 
3. Queue layer: 进行队列操作和管理功能 
4. Physical layer: 进行物理硬件操作 
 
图 5-1. Tinysys IPI 通用架构 
 
邮箱（MailBox）是预定义的。开发人员使用以下 API 将 IPI 发送到 Tinysys，包括 IPI ID 和注册回调函数（ipi_cb）。 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 SCP 
User Manual 
Confidential B 
5.1 SCP 端的使用 
i. 在ipi_id.h, ipi_table.h 和mbox_pin.h 中添加新的 IPI ID 信息。发送和接收信息由不同的 IPI 表描述。 
• 文件描述 
– ipi_id.h:           定义 IPI ID（必须唯一） 
– ipi_table.h:     定义 IPI 引脚表（引脚槽总数不能超过邮箱槽） 
– mbox_ipi.h:    定义 IPI 引脚槽 
• 路径 
  master/src/tinysys/mt8676/scp/drivers/RV55 _A/Mt8676/mbox/ipi_id.h 
  master/src/tinysys/mt8676/scp/drivers/RV55 _A/Mt8676/mbox/ipi_table.h 
  master/src/tinysys/mt8676/scp/drivers/RV55 _A/Mt8676/mbox/mbox_pin.h 
 
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
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 SCP 
User Manual 
Confidential B 
• IPI_TABLE (接收器引脚说明) 
/* 
* mbox pin structure, this is for receive definition, 
* ipi=endpoint=pin 
* mbox:                    (mbox number)mbox number of the pin, up to 16 
* offset:                    (slot)msg offset in share memory, 4 bytes alignment, up to 
1024*4 KB 
* recv_opt:                (opt)recv option,  0:receive ,1: response 
* lock_opt:                (opt)option 0: mutex, 1: busy wait 
* buf_full_opt:          (opt)buffer option 0:drop, 1:assert, 2:overwrite 
* cb_ctx_opt:            (opt)callback option 0:isr context, 1:process context 
* msg_size:              (slot)msg used slots in the mbox, 4 bytes alignment 
* pin_index:             (bit offset)pin index in the mbox 
* ipi_id:                   (ipi_id)ipi_id in the mbox 
* notify:                   (completion)notify process 
* mbox_pin_cb:        (cb)cb function 
* pin_buf:                (void*)buffer point 
* prdata:                  (void*)private data 
* recv_record:          receive pin record information 
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
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8676 SCP 
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
 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 SCP 
User Manual 
Confidential B 
ii. 注册 IPI 处理程序 
int ipi_register(unsigned int ipi_id, void *cb, void *prdata, void *msg) 
Description 
To register IPI handler 
Parameters 
id: id declared in ipi_id.h 
cb: IPI handler, a callback 
prdata: IPI handler parameter, for customiszed  
msg: msg buffer, data recv from AP 
Return values 
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
 
 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 SCP 
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
 If (ret != DONE) 
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
 If (ret != DONE) 
PRINTF_E(“Send IPI failed\n”); 
} 
} 
 
 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 SCP 
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
#define IPI_ACTION_DONE  0 
#define IPI_ILLEGAL   -1 /* illegal ipi index */ 
#define IPI_DUPLEX   -2 /* the ipi has be registered */ 
#define IPI_UNAVAILABLE  -3 /* can't find this ipi pin define */ 
#define IPI_NO_MSGBUF   -4 /* ipi receiver doesn't has message 
buffer */ 
#define IPI_NO_MEMORY  -5 /* the message length is large than defined */ 
#define IPI_PIN_BUSY   -6 /* send message timeout */ 
#define IPI_RECV_TIMEOUT  -7 /* receive message timeout */ 
#define IPI_MBOX_ERR   -99 /* some error from physical layer */ 
 
  
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
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8676 SCP 
User Manual 
Confidential B 
5.2 内核端的使用 
i. 在scp.h 和 mt6897.dts 文件中添加新的 IPI ID 和 pin table 
• 文件描述 
– scp.h: 定义 IPI（ID 必须与 SCP 端同步） 
– mt6897.dts: 定义引脚表（引脚表必须与 SCP 端同步） 
• 路径 
master/src/kernel/linux/v6.1_mt8676/co_device_module/drivers/misc/mediatek/scp/include/scp.h 
master/src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/mt6897.dts 
 
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
 
• 示例：在 mt6897.dts 中添加新的引脚设置： 
scp: scp@1cb00000 { 
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
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8676 SCP 
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
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
MT8676 SCP 
User Manual 
Confidential B 
6 DRAM 访问流程 
由于无论 SCP 的状态如何，DRAM 和系统总线都可能被关闭，SCP 开发人员必须遵循以下步骤以避免系统挂起。以
下是 AP 和 SCP 之间通过 DRAM 共享信息的概述。 
(注: 请参考章节 6.3 以获取 SCP 端保留的 DRAM 地址) 
 
 
表 6-1. 标准 DRAM 访问流程 
# 步骤 备注 
0 检查/添加预定义表 scp_reserve_mblock[]  
1 SCP Linux 驱动通过 API 获取保留的物理地址 
 phys_addr_t scp_get_reserve_mem_phys(scp_reserve_mem_id_t id) 
 phys_addr_t scp_get_reserve_mem_virt(scp_reserve_mem_id_t id) 
 phys_addr_t scp_get_reserve_mem_size(scp_reserve_mem_id_t id) 
2 SCP Linux 驱动通过 IPI 将地址发送到 SCP  scp_ipi_send(uint32 id, void* buf, uint len) 
3 SCP 通过 API 访问 DRAM  uint32_t ap_to_scp(uint32_t ap_addr) 
4 
在使用前启用 DRAM 资源，在使用后禁用
DRAM 资源 
 void dvfs_enable_DRAM_resource(scp_reserve_mem_id_t dma_id) 
 void dvfs_disable_DRAM_resource(scp_reserve_mem_id_t dma_id) 
 
6.1 在 Linux 内核中保留内存 
为了在 AP 和 SCP 之间交换数据，需要在 DRAM 中保留一个空间。首先，我们需要在 scp_reserve_mblock[] 中
添加条目。这些定义可以在如下路径找到: 
• 路径: 
{lk2 repo}/platform/mediatek/mt6897/rules.mk 
{kernel repo}/arch/arm64/boot/dts/mediatek/mt6897.dts 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
MT8676 SCP 
User Manual 
Confidential B 
{kernel repo}/drivers/misc/mediatek/scp/include/scp.h 
{kernel repo}/drivers/misc/mediatek/scp/rv/scp_reservedmem_define.h  
 在共享内存中注册使用者 
步骤1. 在 scp_reserve_mem_id_t 中添加新的 ID 
{kernel repo}/drivers/misc/mediatek/scp/include/scp.h 
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
{kernel repo}/arch/arm64/boot/dts/mediatek/mt6897.dts 
scp: scp@1cb00000{ 
… 
scp_mem_tbl = <0 0x0>, 
<1 0xca700>, /* vow */ 
<2 0x100000>, /* sensor main*/ 
..., 
id, size>;          /*user_mem*/ 
}; 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
MT8676 SCP 
User Manual 
Confidential B 
步骤4. 在Makefile 中增加 SCP 共享内存的大小 
{lk2 repo}/platform/mediatek/mt6897/rules.mk 
SCP_RESERVED_SHARE_DRAM_SIZE:= 0x           //在此变量中添加增量 
 
 扩展共享内存 
以传感器为例，增加 1.5MB 的内存 
{kernel repo}/arch/arm64/boot/dts/mediatek/mt6897.dts 
scp: scp@1cb00000{ 
… 
scp_mem_tbl = <0 0x0>, 
<1 0xca700>, /* vow */ 
<2 0x280000>, /* sensor main original value is 0x100000 */ 
..., 
}; 
 
{lk2 repo}/platform/mediatek/mt6897/rules.mk 
SCP_RESERVED_SHARE_DRAM_SIZE:= 0x680000      // original = 0x500000  
 
6.2 通过 ID 获取保留内存 
由于 AP CPU 使用虚拟地址，而 SCP 使用物理地址，因此需要提供这两种类型的地址。以下 API 用于通过给定的 ID
获取虚拟/物理地址和大小，这些 ID 在章节 6.1 中声明。 
• API 
phys_addr_t scp_get_reserve_mem_phys(scp_reserve_mem_id_t id) 
phys_addr_t scp_get_reserve_mem_virt(scp_reserve_mem_id_t id) 
phys_addr_t scp_get_reserve_mem_size(scp_reserve_mem_id_t id) 
 
• 头文件路径 
master/src/kernel/linux/v6.1_mt8676/co_device_module/drivers/misc/mediatek/scp/rvMt8676/scp_
helper.h 
 
• 返回值 
– 保留内存的起始地址，或 
– 0x0：表示没有映射 
 
在获取物理地址后，开发人员必须通过 IPI 将其传递给 SCP， 如章节 5.2 所述。 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 27 
MT8676 SCP 
User Manual 
Confidential B 
6.3 在 SCP 端获取保留的 DRAM 区域 
为了保持安全状态并避免恶意的 IPI 消息，SCP_DRAM_REGION 被引入以直接提供 SCP 端保留的 DRAM 区域信息。
以下 API 用于通过给定的 ID 获取物理地址和大小，这些 ID 在章节 6.1 中声明。 
• API 
bool scp_get_reserve_mem_by_id(uint32_t id, void **ap_addr, size_t *size) 
• 头文件路径 
master/src/tinysys/mt8676/scp/drivers/common/dram_region_mgmt/scp_dram_region.h 
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
 
6.4 将 DRAM 地址从 AP 视图重映射到 SCP 视图 
SCP 是一个 32 位系统，最多只能访问 4G（0xffffffff）地址。如果 SCP 应用程序需要访问高于 4G 的地址，我们需要
使用以下 API 将地址重映射到 SCP 内存窗口。以下是 AP 和 SCP 之间的映射表。 
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 28 
MT8676 SCP 
User Manual 
Confidential B 
表 6-2. 默认重映射规则表 
名称 SCP/DMA 大小 AP 端 
External Memory 0x1000_0000 0x1FFF_FFFF 256MB 0x6000_0000 0x6FFF_FFFF 
External Memory 0x2000_0000 0x2FFF_FFFF 256MB 0x7000_0000 0x7FFF_FFFF 
External Memory 0x5000_0000 0x5FFF_FFFF 256MB 0x0000_0000 0x0FFF_FFFF 
External Memory 0x6000_0000 0x6FFF_FFFF 256MB 0x1000_0000 0x1FFF_FFFF 
External Memory 0x9000_0000 0x9FFF_FFFF 256MB 0x8000_0000 0x8FFF_FFFF 
External Memory 0xA000_0000 0xAFFF_FFFF 256MB 0x9000_0000 0x9FFF_FFFF 
External Memory 0xD000_0000 0xDFFF_FFFF 256MB 0x2000_0000 0x2FFF_FFFF 
External Memory 0xE000_0000 0xEFFF_FFFF 256MB 0x3000_0000 0x3FFF_FFFF 
External Memory 0xF000_0000 0xFFFF_FFFF 256MB 0x5000_0000 0x5FFF_FFFF 
 
• API 
– uint32_t ap_to_scp(uint32_t ap_addr); 
– uint32_t scp_to_ap(uint32_t scp_addr); 
• 头文件路径 
master/src/tinysys/mt8676/scp/drivers/common/dma/inc/dma_api.h 
• 返回值 
– 映射地址，或 
– 0x0: 表示没有映射 
6.5 请求系统总线和 DRAM 
由于在没有数据传输或系统挂起时，系统总线和 DRAM 会进入睡眠模式，因此必须调用以下 API 以确保 DRAM 可
以被访问。 
 
• 用于管理任务的 API void dvfs_enable_DRAM_resource(scp_reserve_mem_id_t dma_id): before DRAM access 
void dvfs_disable_DRAM_resource(scp_reserve_mem_id_t dma_id): after DRAM access 
 
注：当 26M 时钟被关闭时，唤醒 DRAM 需要 5 毫秒 
 
• 用于管理中断服务程序的 API 
void dvfs_enable_DRAM_resource_from_isr(scp_reserve_mem_id_t dma_id) 
void dvfs_disable_DRAM_resource_from_isr(scp_reserve_mem_id_t dma_id) 
 
•  头文件路径 
master/src/tinysys/mt8676/common/drivers/dma/v3/inc/dma.h 
master/src/tinysys/mt8676/scp/drivers/RV55_A/Mt8676/dvfs/inc/dvfs.h 
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 29 
MT8676 SCP 
User Manual 
Confidential B 
7 驱动程序指南 
7.1 驱动程序初始化 
由于在驱动程序初始化时未启用多线程，开发人员必须 
• 在 platform_init() 中初始化驱动程序 
• 避免在驱动程序初始化函数中使用阻塞函数，因为这会导致永远阻塞 : 
– vTaskDelay：用于在 FreeRTOS 任务中延迟执行一段时间 
– HW semaphore：硬件信号量，用于在任务之间进行同步和通信 
– Busy loop, e.g., polling registers：忙等待，例如轮询寄存器，用于等待某些条件的发生 
7.2 添加新驱动程序 
要添加新驱动程序，请按照以下步骤操作: 
1. 在适当的目录中创建新的驱动程序文件 (选择如下的目录) 
• 路径 
master/src/tinysys/mt8676/common                        /* 通用的tinysys 驱动程序 */ 
master/src/tinysys/mt8676/scp/drivers/common  /* scp 通用的驱动程序 */                       
master/src/tinysys/mt8676/scp/drivers/RV55_A/Mt8676/drivers   /* 平台相关的驱动*/ 
 
2. 添加新的编译选项 
• 路径 
master/src/tinysys/mt8676/scp/project/Mt8676/platform/platform.mk 
 
• 示例：DMA 驱动程序 
CFG_DMA_SUPPORT = yes 
… 
ifeq ($(CFG_DMA_SUPPORT),yes)                       
     INCLUDES += $(COMMON_DIR)/drivers/dma/v3/inc        
     INCLUDES += $(SCP_DRIVERS_DIR)/common/dma/inc       
     INCLUDES += $(DRIVERS_PLATFORM_DIR)/dma             
     C_FILES  += $(COMMON_DIR)/drivers/dma/v3/dma.c      
     C_FILES  += $(SCP_DRIVERS_DIR)/common/dma/dma_api.c 
endif  
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 30 
MT8676 SCP 
User Manual 
Confidential B 
7.3 中断 
Mt8676 SCP 支持 15 个优先级的中断，优先级数字越低，优先级越高。如果同时发生多个 IRQ，CPU 将优先处理优
先级最高的 IRQ。绝对不要将中断优先级设置为 2 以上。0 级用于“看门狗”或“系统故障”，1 级用于“睡眠控
制”中断。我们将在本章描述如何在 SCP 中使用中断。  
• 路径 
master/src/tinysys/mt8676/common/drivers/irq/v3/inc/irq.h 
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
 
• 示例 
struct INTC_IRQ INTC_IRQ_SYSTICK = {0, INTC_GRP_8, INTC_POL_HIGH}; 
 
#include “irq.h” 
 
int ret; 
ret = intc_irq_request(&INTC_IRQ_SYSTICK, test_ist, NULL); 
if (ret != 0) 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 31 
MT8676 SCP 
User Manual 
Confidential B 
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
      -1: 请求失败 
 
• 示例 
#include “irq.h” 
 
int ret; 
ret = intc_irq_dsiable(&INTC_IRQ_SYSTICK); 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
MT8676 SCP 
User Manual 
Confidential B 
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
–         这些是重写版本，具有无阻塞 API 和快速实现。 
4. 如果在 ISR 中唤醒了高优先级任务，必须使用 portYIELD_FROM_ISR()。 
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 33 
MT8676 SCP 
User Manual 
Confidential B 
7.4 锁 
SCP 提供了用于双核同步的自旋锁机制。 使用锁需要打开如下配置项： 
CFG_ATOMIC_PLAT_SUPPORT = yes 
 
• 路径 
master/src/tinysys/mt8676/scp/project/RV55_A/Mt8676/platform/platform.mk 
 
• API 
spinlock_t SYNC_SECTION lock; 
 
void spinlock_lock(spinlock_t * lock) 
void spinlock_unlock(spinlock_t * lock) 
description 
获取/释放自旋锁 
parameters 
lock: SYNC_SECTION 定义的变量 
Return values 
无.  
 
• 头文件路径 
master/src/tinysys/mt8676/scp/project/RV55_A/Mt8676/platform/inc/mtk_atomic.h 
 
注意： 
1. 绝对不要保持自旋锁超过 1 毫秒，因为在自旋锁和解锁期间会禁用抢占。 
2. 对于不跨越双核的场景，不需要使用自旋锁。 
 
7.5 DMA 
直接内存访问（DMA）是一种支持在指定源/目标之间复制数据而不涉及 CPU 的硬件。SCP DMA 支持以下功能： 
1. 突发 AXI 模式以加速内存传输 
2. 8 个通道，即引擎最多可以同时操作 8 个事务。 
 
• API 
DMA_RESULT scp_dma_transaction(uint32_t dst_addr, uint32_t src_addr, uint32_t len, int8_t 
scp_dma_id, int32_t ch) 
DMA_RESULT scp_dma_transaction_dram(uint32_t dst_addr, uint32_t src_addr, uint32_t len, 
int8_t scp_dma_id, int32_t ch) 
description 
通过指定的DMA 通道从src_addr 复制数据到dst_addr。 
parameters 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
MT8676 SCP 
User Manual 
Confidential B 
dst_addr: 目标地址 
src_addr: 源地址 
len: 要复制的字节长度  
scp_dma_id: DMA ID 
ch: channel 通道ID 
Return values 
DMA_RESULT_DONE (=0) 表示成功开始 
DMA_RESULT_NO_FREE_CH (=-1) 表示DMA 硬件忙 
 
 
• 头文件路径 
master/src/tinysys/mt8676/common/drivers/dma/v3/inc/dma.h 
master/src/tinysys/mt8676/scp/drivers/common/dma/dma_api.h 
master/src/tinysys/mt8676/scp/project/RV55_A/Mt8676/mt_dma.h 
 
• scp_dma_id 
– scp_dma_id 是在 mt_dma.h 中的 DMA 通道的标识。建议使用不同的 dma_id，这样会更容易调试出通道满的
问题。 
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
 
7.6 硬件信号量 
硬件信号量是一种特殊的硬件，它在 Linux 驱动程序和 FreeRTOS 之间提供类似互斥锁的流控制。在 SCP 中有 16 组
硬件信号量。以下 API 使硬件信号量易于使用，它们在 SCP 和 Linux 驱动程序中都可以工作。只需包含正确的头文
件并确保标志相同。 
• API 
int semaphore_get(unsigned int flags) 
int semaphore_release(unsigned int flags); 
   description 
        在AP 和SCP 之间使用的信号量。 
   parameters 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 35

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 35 
MT8676 SCP 
User Manual 
Confidential B 
        flag: 0 ~ 15，对应SCP 中的16 组信号量 
   Return values 
       0: 获取信号量失败 
       1: 获取信号量成功 
 
 
• 头文件路径 
– master/src/kernel/linux/v6.1_mt8676/co_device_module/drivers/misc/mediatek/scp/rv/scp_helper.h 
– master/src/tinysys/mt8676/common/drivers/sem/v1/inc/sem.h 
 
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
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 36

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 36 
MT8676 SCP 
User Manual 
Confidential B 
7.7 GPIO 和 EINT 
SCP 还提供 GPIO 和外部中断（EINT），以便外部组件（如陀螺仪传感器）可以向 SCP 发送事件。 
• GPIOs 
– Function set to: TP_GPIO?_AO, 支持 TP_GPIO0_AO~TP_GPIO15_AO 
• EINTs 
– Function set to Aux Func.0(GPIO), 支持 EINT0~15 
表 7-1. EINT 和 GPIO 的映射引脚名称 
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
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 37

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 37 
MT8676 SCP 
User Manual 
Confidential B 
 GPIO 使用 
GPIO 功能必须首先设置为 TP_GPIO?_AO。请参考 GPIO 引脚复用设置文档以获取详细信息。表 7-2 是 GPIO 控制寄
存器表 
表 7-2. GPIO 控制寄存器表 
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
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 38 
MT8676 SCP 
User Manual 
Confidential B 
 EINT 使用  
• 路径 
tinysys/mt8676/common/drivers/eint/v02/src 
 
• API：注册 EINT 回调 
void mt_eint_registration(unsigned int eint_num, unsigned int sens, unsigned int pol, 
                                                 void (EINT_FUNC_PTR) (int), 
                                                 unsigned int unmask, unsigned int 
is_auto_umask) 
  description 
      注册 EINT 中断处理程序。 
   parameters 
       eint num: EINT 编号 
       sens:触发类型（LEVEL_SENSITIVE 或 EDGE_SENSITIVE） 
       pol: 触发极性（HIGH_LEVEL_TRIGGER 或 LOW_LEVEL_TRIGGER） 
       EINT_FUNC_PTR: 中断服务程序（ISR）回调函数 
       Unmask: 注册后是否启用此 EINT 触发 
       Is_auto_unmask: 完成 EINT 服务例程后是否自动重新启用 EINT 触发 
   Return values 
      无 
 
 
• 示例 
mt_eint_registration(eint_num, LEVEL_SENSITIVE, HIGH_LEVEL_TRIGGER, xxx_Isr,   
EINT_INT_UNMASK, EINT_INT_AUTO_UNMASK_OFF); 
 
– void mt_eint_dis_hw_debounce(unsigned int eint_num): 禁用硬件去抖动功能 
– void mt_eint_soft_set(unsigned int eint_num) : 使用软件触发来清除指定的外部中断 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 39

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 39 
MT8676 SCP 
User Manual 
Confidential B 
8 调试方法 
8.1 PRINTF_* 使用 
请不要在 SCP 软件中使用 printf，因为它可能会链接到 C 库并引起问题。相反，我们使用 PRINTF_*，如下表所示。
开发人员必须在使用 PRINTF_* 之前包含头文件 <mt_printf.h>。PRINTF_* 的日志级别和使用场景如下表所示。 
表 8-1. PRINTF 使用场景 
PRINTF_* 级别 使用场景 
 
PRINTF_E <0> 错误信息 
 
PRINTF_W <1> 警告信息 使用者级别镜像 
PRINTF_I <2> 提示信息 
 
PRINTF_D <3> 调试级别信息 工程师级别镜像 
8.2 串口 
• 输出引脚 
SCP 有两个个专用的 UART。请确保 PC 的 UART 端口连接到引脚名称 URXD1 和 UTXD1，如下表 8-2 所示，并设置软
件编译选项。 
表 8-2. UART 引脚名称 
引脚名称 功能 
URXD1 SCP UART RX 
UTXD1 SCP UART TX 
 
• 软件编译选项 
– 路径：Configure flags  
master/src/tinysys/mt8676/scp/project/RV55_A/mt6897/platform/platform.mk 
CFG_UART_SUPPORT = yes  /* 启用UART，默认No */ 
CFG_MTK_SCPUART_SUPPORT = yes /*  使用SCP UART，默认Yes */ 
 
 
• UART 终端设置 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 40

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 40 
MT8676 SCP 
User Manual 
Confidential B 
– 波特率：921600 
图 8-1. 串口工具设置 
8.3 异常日志分析 
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
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 41

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 41 
MT8676 SCP 
User Manual 
Confidential B 
[70.169](0) Code: 7545 85aa 0513 1105 <4108> 8593 1145 c188 9205 
 
MISALIGNED FETCH， MISALIGNED LOAD，and MISALIGNED STORE: 通常发生在整数指针（4 字节对齐）访问 1 或 2
字节对齐的地址时。 
– MISALIGNED FETCH： 跳转到未对齐的地址 
▪ 系统寄存器：mepc 将显示错误的地址 
– MISALIGNED LOAD, MISALIGNED STORE： 访问未对齐的地址 
▪ 系统寄存器 mepc 将显示错误的 PC，mtval 将显示访问地址 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 42

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 42 
MT8676 SCP 
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
 
  
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 43

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 43 
MT8676 SCP 
User Manual 
Confidential B 
8.4 核心转储 
如果 AP 检测到 SCP 没有响应 IPI 或发生 SCP 看门狗事件，核心转储流程将自动启动。核心转储是 SCP 内存和处理
器寄存器（如程序计数器、堆栈指针、返回地址等）的快照，并尽可能多地保存系统信息（如系统寄存器、缓存
内容）。这些信息使得在故障发生前恢复系统状态成为可能。  
默认情况下，LLDB 被用于支持核心转储调试。有关 LLDB 的详细信息，请参考 LLDB 官网： https://lldb.llvm.org/. 
• LLDB 路径 
– LLDB 可以在prebuilts 文件夹中找到, 路径为 prebuilts/devtool/clang/md32rv/linux-x86/lldb_v3. 
• 获取核心转储 
– SCP 核心转储将命名为 SYS_SCP_DUMP，位于 SCP EE DB（例如，ex.db.00.EE.dbg）中。如果未找到，请检
查 EE DB，确认 __exp_main.txt 中的异常类型应为scp。 
• 开始调试 
• 输入以下命令，初始日志如下所示 
$ prebuilts/devtool/clang/md32rv/linux-x86/lldb_v3/coredump_cmd.sh mt6897 tinysys-scp-RV55_A.elf 
SCP_COREDUMP 0 
 
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
RV55 : lldb_v3 
RV33 : lldb 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 44

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 44 
MT8676 SCP 
User Manual 
Confidential B 
如果 LLDB 工具意外启动： 
1. 请确认 prebuilts/devtool/clang/md32rv/linux-x86/lldb_v3 文件结构未被修改。 
2. 请检查相关日志文件 debug_prosim.log 和 debug_ocd.log。如果未找到 libprofile.so.x.x.x 库，请在 
coredump_cmd.sh 中的 PROSIM 启动命令之前添加以下命令。 
 
 
3. 使用 coredump_cmd.sh 时会启动三个工具（LLDB、Openocd、PROSIM），工具之间通过 TCP/IP 协议进行通
信。如果远程使用 LLDB 相关工具，请确认 TCP/IP 连接端口未被防火墙阻止。 
 
  
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$MRV_PDK_PROSIM_HOME 
 
#add above this command 
$PROSIM_EXE $PROSIM_OPT   
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 45

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 45 
MT8676 SCP 
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 46

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 46 
MT8676 SCP 
User Manual 
Confidential B 
• 通过命令 freertos 来获取操作系统任务的信息 
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
 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 47

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 47 
MT8676 SCP 
User Manual 
Confidential B 
• 通过命令 p $(variable name)来打印变量和地址 
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
 
• 通过命令 x/FMT address 来转储内存 
(lldb) x/32xw 0x1ef08 
0x0001ef08: 0x003a9593 0x093d3533 0x10063667 0x00bb0ab3 
0x0001ef18: 0x01340633 0x016ab5b3 0x00b60c33 0x008c0463 
0x0001ef28: 0x008c35b3 0x01248633 0x0433955e 0x35b300b6 
0x0001ef38: 0x36330096 0x952e00c4 0x00c50bb3 0xd5334d32 
0x0001ef48: 0xc11d094b 0x001ad593 0x001af513 0xfe1c05b3 
0x0001ef58: 0x001c5c13 0xfe140c33 0x84338005 0xdb93fe1b 
0x0001ef68: 0xeab3001b 0x088500a5 0x652144a2 0x09f4a4b3 
0x0001ef78: 0xcf63157d 0x053700a8 0x24237fff 0x8d451001 
 
• 通过命令 register read $REG 来读取 CPU 寄存器的值 
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
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 48

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 48 
MT8676 SCP 
User Manual 
Confidential B 
8.5 性能评估和运行记录 
PBFR 是一种性能分析工具，可以监控 CPU 使用情况。它可以分为两个部分： 性能评估和运行记录。 
性能评估包含每个任务的负载、缓存未命中、停顿和整个系统负载的信息。运行记录可以在一段时间内记录  CPU 
trace。 
 性能评估 
这里将介绍如何使用性能预算来监控任务负载。 
 
• 启用性能评估: 
– 设置配置和定义以启用性能评估。 
▪ 路径 
master/src/tinysys/mt8676/scp/project/RV55_A/mt6897/platform/inc/FreeRTOSConfig.h 
master/src/tinysys/mt8676/scp/project/RV55_A/ mt6897/platform/platform.mk 
表 8-3. 编译器选项和定义 
# 编译器选项和定义 描述 
1 
CFG_PBFR_SUPPORT 
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
– 第一次输入命令开始记录性能预算信息，在一段时间后，第二次输入命令报告负载信息，第三次输入命令停
止记录。 
– 对于一些定制化的请求，可以在特定位置添加这三个 API 以监控部分任务。 
▪ pbfr_start_loadinfo(0)：开始记录负载信息 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 49

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 49 
MT8676 SCP 
User Manual 
Confidential B 
▪ pbfr_report_loadinfo(0)：报告负载信息 
▪ pbfr_stop_loadinfo(0)：停止记录负载信息 
 
• 日志解释： 
图 8-2. 性能评估日志示例 
 运行记录 
运行记录是一种调试工具，可以在系统崩溃时记录最后的事件。这里将介绍如何使用飞行记录来监控  CPU 跟踪。 
 
• 启用运行记录： 
– 设置配置并打开定义以获取运行记录。platform.mk 中的配置用于启用运行记录，而 FreeRTOSConfig.h 
中的定义表示可以记录的事件。 
 
• 路径 
master/src/tinysys/mt8676/scp/project/RV55_A/mt6897/platform/platform.mk 
表 8-4. 编译器选项 
# 编译器选项 解释 
 CFG_PBFR_SUPPORT 
PBFR 主功能控制选项  
Enable: Yes 
Disable: No 
 
• 路径 
master/src/tinysys/mt8676/scp/project/RV55_A/mt6897/platform/inc/FreeRTOSConfig.h 
 
 
 
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
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 50

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 50 
MT8676 SCP 
User Manual 
Confidential B 
表 8-5. Flight Record 定义 
# 飞行记录名称 解释 
1 #define PBFR_SUPPORT_FLIGHT_REC 支持飞行记录 
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
master/src/tinysys/mt8676/scp/project/RV55_A/mt6897/platform/Setting.ini 
 
• 使用方法: 
– 将 tinysys-scp-RV55_A.elf 和 SCP coredump 复制到分析文件夹中。 
▪ 分析文件夹: prebuilts/devtool/clang/md32rv/linux-x86/lldb_v3 
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
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 51

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 51 
MT8676 SCP 
User Manual 
Confidential B 
• 日志解释： 
– 控制台模式： 
▪ 控制台模式将在 SCP_debug.txt 中显示，它显示系统崩溃前记录的事件，并按类型分类显示事件。
Record[X] 表示这是倒数第 X 个事件。 
 
图 8-3. 飞行记录控制台模式示例 
  
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
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 52

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 52 
MT8676 SCP 
User Manual 
Confidential B 
• GUI 模式： 
– 加载步骤 
1. GUI 网站: chrome://tracing/ 
2. 加载 json 文件: flrec.json (分析文件夹中创建) 
– 使用说明： 
▪ 使用键盘 W/S 缩放，A/D 左右移动，或切换按钮以更改鼠标模式。 
 
图 8-4. 操作方法 
  
 
选择事件 
移动界面 
放大/缩小 
选择时间范围 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 53

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 53 
MT8676 SCP 
User Manual 
Confidential B 
– 总览：  
▪ GUI 显示最后的事件流，记录六种类型的事件：任务、队列事件、软件定时器、关键部分、 ISR 事件和操
作系统时钟。 
图 8-5. 运行记录的 GUI 显示模式 
 
▪ 底部的消息显示事件的开始时间和持续时间。 
  
图 8-6. 详细信息显示 
  
事件名称 (任务、队列、临界区…) 
 记录[0]的开始时间 
真实时间 = 记录[0] + 开始时间 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 54

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 54 
MT8676 SCP 
User Manual 
Confidential B 
– 任务 
▪ 任务事件显示任务的唤醒时间和执行时间。 
 
图 8-7. 任务被唤醒的事件 
– 队列 
▪ 队列事件显示在执行事件的任务下方，点击事件可以在信息栏中查看队列类型 。 
 
 
图 8-8. 队列事件的示例 
 
 
 
图 8-9. 队列事件的详细信息 
– 软件定时器 
▪ 软件定时器显示回调函数的执行时间。 
 
图 8-10. 软件定时器示例 
– 临界区 
▪ 通过对应的临界区向上，可以找到在临界区中运行的任务。 
 
 
唤醒事件 
“PRINCIPAL”任务的队列事件 
点击以获取队列事件的类型 
软件定时器的回调函数 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 55

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 55 
MT8676 SCP 
User Manual 
Confidential B 
 
 
图 8-11. 临界区示例 
– 中断服务程序（ISR） 
▪ ISR 显示中断服务例程的执行时间和 ISR 编号。 
 
图 8-12. 中断服务程序示例 
– OS 时钟节拍 
▪ OS 时钟显示操作系统计时器滴答的时间。 
 
 
 
图 8-13. OS 时钟节拍示例 
 
  
当任务 “PRINCIPAL” 正在运行时的临界区 
ISR 事件 
OS 时钟节拍事件 
ISR 数量 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 56

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 56 
MT8676 SCP 
User Manual 
Confidential B 
9 地址检测器 
9.1 ASAN 使用方法 
 
地址检测器（Address Sanitizer, ASAN），是一种地址健全性检查工具，用于发现对堆、栈和全局对象的越界访问，
以及使用已释放内存的错误。 
 
• 启用 ASAN 
– 设置配置并打开定义以启用 ASAN。 
– 路径 
master/src/tinysys/mt8676/scp/project/RV55_A/mt6897/$Project/project.mk 
master/src/tinysys/mt8676/scp/build/config.mk 
表 9-1. 编译器选择和定义 
# 编译器选项和定义 描述 
1 CFG_ASAN_SUPPORT Enable: yes 
Disable: no 
2 -mllvm -asan-stack  
Check local variable 
Enable: 1 
Disable: 0 
3 -mllvm -asan-global  
Check global variable 
Enable: 1 
Disable: 0 
4 -mllvm -asan-memintrin 
Check memset/memecpy 
Enable: 1 
Disable: 0 
 
 
• 异常类型 
表 9-2. 异常类型表 
# 异常类型 描述 
1 ASAN_STACK_LEFT 局部变量下溢 
2 ASAN_STACK_MID 局部变量下溢/上溢 
3 ASAN_STACK_RIGHT 局部变量上溢 
4 ASAN_STACK_PARTIAL 局部变量部分上溢 
5 ASAN_GLOBAL_REDZONE 全局变量上溢 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 57

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 57 
MT8676 SCP 
User Manual 
Confidential B 
# 异常类型 描述 
6 ASAN_HEAP_USE_AFTER_FREE 使用已释放的堆内存 
 
 
 
 
 
– 问题处理：栈下溢 
 
 
– 问题处理：全局变量上溢 
 
 
 
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 58

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 58 
MT8676 SCP 
User Manual 
Confidential B 
– 问题处理：使用已释放的堆内存 
 
 
9.2 如何将代码移动到 DRAM 
启用 ASAN 后，代码大小将增加约 1.7 倍。因此，SRAM 大小可能不足。用户可以将某些功能或函数移动到 DRAM 
以减少 SRAM 的使用。 
 
• 使用属性 
要在 DRAM 区域指定函数/变量，我们使用在 cache_internal 中定义的缓存宏。请注意，DRAM_REGION_VARIABLE 仅
适用于全局/静态变量，因为局部变量使用栈作为存储。默认情况下，出于性能考虑，我们将栈保留在 SRAM 中。 
#define DRAM_REGION_VARIABLE __attribute__ ((section (".dram_region_variable"))) 
#define DRAM_REGION_FUNCTION __attribute__ ((section (".dram_region_func"))) 
 
• 使用链接脚本 
链接脚本描述了对象（即各个部分）在输出二进制文件中的映射方式。它提供了一种将对象定位到 DRAM 区域的
简便方法。以下是一个模板头文件和链接脚本，用于将 C 文件中的所有部分定位到 DRAM 区域。 
 
1. 首先，您需要检查 cache_ld.h 文件（路径：@project/RV55_A/$platform/$project），在这里您可以看
到许多预定义的宏，格式为 CACHE_***_TEXT 和 CACHE_***_DATA。您可以添加一个新的宏，并自行命名。宏
名后的字符串是期望的 C 文件路径。例如：（“?*” 是通配符比较） 
#define CACHE_BARO_TEXT \ 
    ?*/middleware/contexthub/MEMS_Driver/barometer/?*.o(.text*) \ 
#define CACHE_BARO_DATA \ 
   ?*/middleware/contexthub/MEMS_Driver/barometer/?*.o(.rodata* .data* .bss*) \ 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 59

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 59 
MT8676 SCP 
User Manual 
Confidential B 
 
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
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 60

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 60 
MT8676 SCP 
User Manual 
Confidential B 
10 附录 
10.1 常见问题及解决方法 
 Malloc 失败 
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
1. 修改scp/project/RV55_A/Mt8676/platform/platform.mk, 扩大堆大小，例如 80*1024  
ifeq ($(CFG_CHRE_SUPPORT),yes) 
$(eval TOTAL_HEAP_SIZE=$(shell echo $$(($(TOTAL_HEAP_SIZE) + (80 * 1024))))) 
  change 40 
to 80 
endif 
 
2. 修改 scp/drivers/common/scpctl/scp_scpctl.c, 强制启用任务监控。 
void scpctl_init(void) 
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
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 61

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 61 
MT8676 SCP 
User Manual 
Confidential B 
4. 调整堆大小, 剩余堆大小为 40946 字节，40946/1024 = 39.98KB，最小堆大小为 41KB，设置为 43 或 44KB 更
安全。请记得在问题修复后恢复 scp/drivers/common/scpctl/scp_scpctl.c 的更改。 
ifeq ($(CFG_CHRE_SUPPORT),yes) 
$(eval TOTAL_HEAP_SIZE=$(shell echo $$(($(TOTAL_HEAP_SIZE) + (43 * 1024)))))  
endif 
 非对齐访问 
SCP MDSP-RV33 处理器没有硬件来处理未对齐访问，实施是通过软件完成的。当发生未对齐访问时，处理器将引发
异常并在处理程序中进行软件解决。因此，性能成本显著。 
 
注意： 
当发生未对齐访问时，会显示一条警告消息： 
 
“Warning: MISALIGNED LOAD, pc:0x00001234, addr:0x00042232” 
 
此消息显示有问题的 PC 和处理器要访问的地址。当未对齐访问持续发生时，系统可能忙于打印此消息，并可能
导致超时断言 
 
• 示例及解决方法 
大多数未对齐访问是由于结构体应用了 packed 限定符。这可以通过移除它来避免。  
– 示例: 
struct pack_struct { 
    unit32_t size; 
    uint32_t crc; 
    uint8_t type; 
} __attribute__((packed)); 
 
当声明一个结构体数组时，例如 pack_struct st_array[10]，访问结构体成员将是未对齐的。另一种情况是使
用整数指针访问字符数组。这可以通过添加 __attribute__ ((aligned (4))) 来避免。编译器不保证 
&char_array[0] 是 4 字节对齐的。 
– 示例: 
uint8_t char_array[64]; 
test_value = *(uint32_t *)(&char_array[0]) 
 
 
  
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 62

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 62 
MT8676 SCP 
User Manual 
Confidential B 
10.2 代码大小限制 
Mt86768676 总 SRAM 大小为 2MB，实际的 SCP SRAM 大小可以通过检查符号 _end 来确定。 
剩余的 SRAM 大小： 
Mt8676: 0x300000 - _end 
 
在 Mt8676 中, 我们可以在 project/RV55_A/Mt86768676/platform/link.ld.c 文件中将 SRAM 区域长度设置为
2MB 
示例： sram : ORIGIN = 0x00000000, LENGTH = 0x00200000. 
当大小超过 2MB 限制时，这将导致构建失败。 
 
代码大小检查工具将在每次构建时运行并输出详细信息 。检查图 10-1 ，垂直是项目名称，水平是每个项目的代码
大小。例如，CHRE 的总大小为 62985（总和）字节，其中 .text 部分占总大小的 35598 字节。 
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
图 10-1. 内存工具报告 
 
 代码大小检查工具的使用 
工具 memoryReport.py 是一个脚本，用于在构建时限制代码大小。如果代码大小超过您的设置，它将导致构建错
误。 
• 路径 
master/src/tinysys/mt8676/common/tools/memoryReport.py 
• 设置配置文件路径 
master/src/tinysys/mt8676/scp/project/RV55_A/Mt8676/platform/Setting.ini 
• 配置文件格式（setting.ini） 
[TinySys-SCP] 
$File_Name: $Main_feature: $Sub_feature 
[SCP-MT6985] 
$Main_feature : Max_code_size 
$Sub_feature : Max_code_size 
--------------------------------------------------------------- 
* File_name: Full file path or Partial file path (Ex:middleware/contexthub/perf) 
* Main feature, (Ex: Sensor, Audio), the main feature that this file belongs to 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 63

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 63 
MT8676 SCP 
User Manual 
Confidential B 
* Sub feature, (Ex: gyro, pedometer), the sub feature that this file belongs to 
* Main_feature/Sub_feature (after SCP-MT6985): 
    - Main or Sub feature maximum size limit 
  
• 内存检查失败 
– 参考示例： 
SCP: I2C(3958>110) is out of memory limitation 
SCP: SPI(6316>1100) is out of memory limitation 
make: *** [tinysys_out/RV55_A/scp/tinysys-scp-RV55_A.elf] Error 13 
 
10.3 Scp_Region_Info 架构 
struct scp_region_info_st 是一个指向 SCP SRAM 中固定地址的指针，用于在 IPI 准备好之前从引导加载程序
向 SCP 传递参数。如果添加了新的成员，记得同步引导加载程序 (lk2), 内核(kernel-6.1) 和 SCP 仓库代码。如果结构
在仓库之间不同步，SCP 可能会启动失败。 
• LK 头文件路径：  
yocto/src/bsp/lk2/platform/mediatek/mt6897/common/scp/scp_plat_priv.h 
• Kernel 头文件路径： 
master/src/kernel/linux/v6.1_mt8676/co_device_module/drivers/misc/mediatek/scp/rv/scp_helper
.h 
• SCP 头文件路径： 
master/src/tinysys/mt8676/scp/project/RV55_A/mt6897/platform/inc/main.h 
• SCP 头文件路径： 
master/src/tinysys/mt8676/scp/project/RV55_A/mt6897 /platform/boot55.S 
 
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
        int ret  = 0;                                                                       
#ifdef CFG_NULLPTR_TRAP                                                                     
        struct scp_region_info_st region_info = *(struct scp_region_info_st 
*)(NULLPTR_BASE + 0x4); 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 64

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 64 
MT8676 SCP 
User Manual 
Confidential B 
#endif                                                                                      
10.4 SCP 恢复机制 
当 SCP 崩溃或没有响应时，Linux SCP 驱动程序将执行 SCP 恢复。在恢复过程中，SCP 将恢复正常。但我们需要注
意以下几点： 
• 在 SCP 重置时，SCP 驱动程序将清除 SCP SRAM/DRAM 内容，重置 RV55 处理器在 ATF，并重新执行启动流程。
（清除所有程序文本、bss 和数据段） 
• SCP 仅重置处理器，而不重置外设（如传感器、I2C 模块和其他设备），因此如果有必要，外设驱动程序应在初
始阶段自行重置。 
• Linux SCP 驱动程序 API 的开发人员必须遵循 10.4.2 章节，并确保在恢复期间 Linux 驱动程序与 SCP 之间没有任
何通信。 
• 当 SCP 重新启动时，Linux SCP 驱动程序将重新初始化。与 SCP 驱动程序相关的驱动程序必须确保重新启动流程
不会影响其功能。 
 
 SCP 恢复流程 
当 SCP 异常或一段时间没有响应时，恢复将开始。SCP 内核驱动程序和 SCP 将进入服务中断状态。在此期间，SCP
内核驱动程序将重置 SCP 并向所有已注册通知链的驱动程序发送 SCP_EVENT_STOP。当 SCP 恢复正常后，SCP 内核
驱动程序将向所有驱动程序发送 SCP_EVENT_READY。 
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 65

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 65 
MT8676 SCP 
User Manual 
Confidential B 
图 10-2. SCP 重置流程 
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
– 需要包含头文件 <linux/notifier.h>, <mach/scp_helper.h> 
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
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 66

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 66 
MT8676 SCP 
User Manual 
Confidential B 
    } 
    scp_register_notify(&app_notifier); 
} 
 
注意： 
1. 必须注册通知链，因为在恢复期间 scp_ipi_send() 可能会返回错误。 
2. 必须应用错误处理流程： 
– 在接收到 SCP_EVENT_STOP 后立即停止调用 scp_ipi_send() 
– 在接收到 SCP_EVENT_READY 后恢复调用 scp_ipi_send() 
 
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 67

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 67 
MT8676 SCP 
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
 
 
 
 MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
MediaTek Confidential Release for
PVT Only
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM


---
# SRC0266 MT8676_Yocto_SDCard_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_SDCard_User_Manual_V1.0.pdf

SHA-256：8f66a6dab8b6e346156ffba7f28021e185dbaed2f9afb2114f76aca0421a5865

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0266.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-08-12
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 卢东 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 SDCard ······································································································································································· 4 
1.1 概述·········································································································································································· 4 
 简单概述 ······················································································································································ 4 
 缩略词 ·························································································································································· 4 
1.2 架构/流程概述 ························································································································································ 4 
 SDCard 介绍 ·················································································································································· 4 
 MT8676 SDCard 特征 ··································································································································· 5 
1.3 配置/客制指南 ························································································································································ 5 
 内核配置 ······················································································································································ 5 
 DTS 节点 ······················································································································································· 6 
 KO 表格 ························································································································································· 7 
1.4 常见问题/故障排除 ················································································································································ 7 
 SD 卡不识别，量测不到 VDD 电压 ············································································································ 7 
 插 SD 卡开机可以识别，热插拔不识别 ···································································································· 8 
附件一 附加条款 ······························································································································································· 9 
 
 
图片目录 
图 1-1. UHS-I 卡初始化流程 ····················································································································································· 5 
图 1-2. SDCard 的 DTS 节点 ······················································································································································· 6 
图 1-3. SDR104 模式的 pinctrl 节点 ·········································································································································· 7 
图 1-4. 用于检测引脚的 dws 设置 ··········································································································································· 8 
 
表格目录 
Table 1-1. 缩略词 ······································································································································································· 4 
 
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
1.1 概述 
 简单概述 
本章节介绍 SDCard 控制器的硬件特性，软件配置和功能，以及常见问题的 debug 方法。 
 
 缩略词 
Table 1-1. 缩略词 
缩略词 全称 
DDR50 Double Data Rate up to 50MB/s@50MHz 
SDR104 Signal Data Rate up to 104MB/s@208MHz 
SDR12 Signal Data Rate up to 12.5MB/s@25MHz 
SDR25 Signal Data Rate up to 25MB/s@50MHz 
SDR50 Signal Data Rate up to 50MB/s@100MHz 
UHS-I Ultra High Speed Phase I card 
 
 
1.2 架构/流程概述 
 SDCard 介绍 
SDCard 是一种基于半导体快闪存储器的新一代高速存储设备，是从 MMC 卡 （MultiMedia Card）格式上发展而
来，具有高记忆容量、快速数据传输率、极大的移动灵活性和很好安全性，被广泛应用于便携装置上。在 SD3.0 协
议中，SD 卡的理论最大容量可达 2TB，理论最大读写速度可达 104MB/s。 
 
SD 卡主要引脚和功能描述如下： 
(1) CLK： 时钟信号，控制器或 SD 卡在每个时钟周期传输一个命令或数据位，在 UHS-I 速度模式下，最高可达
208MHz； 
(2) CMD： 命令和响应复用引脚，命令是由控制器发给 SD 卡，响应是 SD 卡对控制器发送的应答； 
(3) DAT0~3： 数据线，数据可以从 SD 卡传向控制器 （read），也可以从控制器传向 SD 卡 （write）； 
(4) VDD： SD 卡的供电脚，通常配置 3.3V 电压，协议规定的范围 2.7V~3.6V； 
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
(5) CD: SD 卡插入检测，通常借由 SD 卡座机械结构实现有/无卡时 GPIO 电平变化。 
 
 
图 1-1. UHS-I 卡初始化流程 
 
 MT8676 SDCard 特征 
(1) 兼容 SD3.0 协议标准 
(2) 支持 Basci DMA 和 Descriptor DMA 模式 
(3) 支持 Bus speed mode: Default Speed/High Speed/SDR12/SDR25/SDR50/SDR104/DDR50  
(4) 支持 1/4bits bus width 
 
1.3 配置/客制指南 
 内核配置 
(1) 启用 SDCard 支持 
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
CONFIG_MMC = y 
 
(2) 启用联发科主机驱动程序支持 
CONFIG_MMC_MTK_PRO = m 
 
 DTS 节点 
 
图 1-2. SDCard 的 DTS 节点 
 
(1) SD2.0 卡支持配置”cap-sd-highspeed”，SD3.0 高速卡 mode 配置”sd-uhs-xxx”； 
(2) SD driving strength 可以在对应 mode 的 pinctrl 节点配置，比如下面 SDR104 mode； 
 
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
 
图 1-3. SDR104 模式的 pinctrl 节点 
 
(3) SD 卡检测脚通过”cd-gpios”配置 GPIO pin，GPIO_ACTIVE_LOW 表示插卡时低电平，GPIO_ACTIVE_HIGH 则表示插
卡时高电平； 
(4) 根据实际使用的 SD 卡端 VDD 以及 Host 端 IO 供电配置”vmmc-supply”和”vqmmc-supply”。如果需要使用 fast 
power off（拔卡时 VMCH 硬件下电）功能，“vmmc-supply”配置节点&mt6373_vmch_eint_high（对应“cd-gpios”
的 GPIO_ACTIVE_LOW）或&mt6373_vmch_low（对应“cd-gpios”的 GPIO_ACTIVE_HIGH）；如果不需要使用 fast 
power off 功能，“vmmc-supply”配置节点&mt6373_vmch。 
 
 KO 表格 
添加 host driver ko 到如下路径的 ko table，第三列配置”ramdisk”会安装到 initramfs。 
meta/meta-mediatek-mt8676/recipes-kernel/linux/ko_order_table/${PROJECT}/ko_order_table.csv: 
 
 
1.4 常见问题/故障排除 
 SD 卡不识别，量测不到 VDD 电压 
(1) 按照章节 1.3 检查内核配置和 DTS 配置是否正确； 
(2) 如果 VDD 供电 power 用的是 MT6373，并且 detect pin 有接到 MT6373 的 SD_DET 脚，请检查 DTS 中”vmmc-
supply”配置的 power 节点与 detect pin 的极性是否匹配； 
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
(3) 如果步骤(2)检查结果匹配，请将”vmmc-supply”配置&mt6373_vmch 看 VDD 是否可以上电，可以上电表示 fast 
power off 功能有问题，提 PMIC issue 到 MTK； 
(4) 如果步骤(3)不可以上电，抓取 Kernel log 并提 SDCard issue 到 MTK。 
 
 插 SD 卡开机可以识别，热插拔不识别 
(1) 按照章节 1.3.2 检查 DTS 中”cd-gpios”的配置是否正确； 
(2) 如果 DTS 配置没有问题，检查 src/devtools/dct/dws/mt6897/${PROJECT}.dws 中 detect pin 对应的 GPIO
配置是否正确，参考图 1-4 所示配置： 
 
图 1-4. 用于检测引脚的 dws 设置 
 
(3) 如果配置检查正确热插拔还是无法识别，请再硬件量测下 detect pin 在插/拔卡状态下的电平是否符合预期，符
合预期的话请提 SDCard issue 到 MTK。 
  
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
# SRC0267 MT8676_Yocto_Secure_Boot_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Secure_Boot_User_Manual_V1.0.pdf

SHA-256：3b1e52e682f9252e086b3e4d2132d9f535c910504d74c41101900fd885c6bb6a

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0267.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-11-20
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
版本记录 
版本 日期 作者 描述 
1.0 2024-11-20 高峰 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 Secure Boot ······························································································································································· 4 
1.1 概述·········································································································································································· 4 
 名词解释 ······················································································································································ 4 
 BootRom ······················································································································································· 4 
1.2 安全启动 ·································································································································································· 5 
 安全启动检查流程 ······································································································································ 5 
1.3 下载代理认证 (DAA) ··············································································································································· 6 
1.4 安全特性配置 ·························································································································································· 7 
 生成密钥对 ·················································································································································· 7 
 开启安全启动 ·············································································································································· 8 
 编译软件 ······················································································································································ 9 
 独立远程签名环境 ······································································································································ 9 
1.5 签名 DA ·································································································································································· 10 
 生成 dakey.h ··············································································································································· 10 
 签名 DA ······················································································································································· 10 
 生成 Authfile··············································································································································· 11 
附件一 附加条款 ····························································································································································· 12 
 
图片目录 
图 1-1.安全启动检查流程························································································································································· 6 
 
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
MT8676 Yocto Secure Boot 
User Manual 
Confidential B 
1 Secure Boot 
1.1 概述 
本文档旨在提供 MT8676 SoC 及其配套 SDK 中安全启动功能的概览。在该产品的设计和部署周期中，功能和特性可
能会发生变化，这些变化将在本文档的后续版本中记录。此外，本文档还介绍了如何启用安全特性。 
 
 名词解释 
表 1-1. 名词解释 
缩略词 全称及释义 
DA Download Agent 下载代理 (包括 DA_BR 和 DA_PL) 
DAA Download Agent Authentication 下载代理认证 
DRAM Data Random Access Memory 动态随机存取内存 
eFuse Electronic Fuse 电子保险丝 
eMMC Embedded MultiMedia Card 嵌入式多媒体卡 
EVB Evaluation Board 开发板 
LK Little Kernel 
NVM Non-Volatile Memory 非易失性内存 
ROM Read-only Memory 只读存储器 
SBC  Secure Boot Check 安全启动检查 
SDK Software Development Kit 软件开发包 
SRAM Static Random Access Memory 静态随机存取存储器 
TEE Trusted Execution Environment 可信执行环境 
UART Universal Asynchronous Receiver/Transmitter 通用异步收发器 
USB Universal Serial Bus 通用串行总线 
USBDL USB Download USB 下载 
 
 BootRom 
BROM（BootROM）是 SoC ROM 内的软件，无法修改。它是应用处理器执行的第一个软件。主要工作总结如下 ： 
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
• 对 SoC 进行基础的硬件配置（例如设置 PLL，时钟等），以便启动系统。 
• 从启动设备 UFS/eMMC/NAND/...加载第一阶段引导程序以启动系统。 
• 与主机 PC 端的工具通信，以加载下载代理（DA）软件，用于为没有软件或软件损坏的外部 Flash 进行镜像下
载。 
• 使用多个安全启动检查密钥，对第一阶段引导程序或下载代理进行安全启动检查。  
 
1.2 安全启动 
 安全启动检查流程 
安全启动检查流程用于从硬件信任根创建可信执行链。可以通过烧录 eFuse 中的 SBC_EN 来启用它。每次系统从上
电复位中恢复时都会执行此流程。图 1-1 展示了基本的安全启动检查流程。详细描述如下。 
 
1. 上电复位后， BROM 使用以下流程来验证非易失性存储器（ NVM，例如 eMMC 或 NAND）中的安全启动检查
（SBC）公钥（SBC_PUBK）。BROM 依次使用来自 eFuse 的公钥哈希（SBC_PUBK_HASH）。 
(1) 从 eFuse 读取安全启动检查公钥（SBC_PUBK）的哈希值（SBC_PUBK_HASH）。  
(2) 从 NVM 读取 SBC 公钥（SBC_PUBK）。 
(3) 计算来自（2）的数据的哈希值。 
(4) 检查来自（1）和（3）的数据是否相同。 
 
2. BROM 加载并验证 First-loader，这是第一阶段的引导加载程序。首先，BROM 将 First-loader 从 NVM 读取到 SoC 
的 SRAM 中，并使用安全启动检查公钥（SBC_PUBK）来认证 First-loader。如果 First-loader 验证成功，将执行 
First-loader。验证方法使用 SHA256 计算哈希值，RSA（2048 位）验证签名。First-loader 包含 key cert, content 
cert 和 image content， 具体过程如下： 
(1) 使用 SBC_PUBK 来校验 First-loader key cert。 
(2) 如果 First-loader key cert 校验成功，用 key cert 中的 image pub key 和 content cert 中的 image pub key 进行比
较。 
(3) 如果(2)一致，则使用 image pub key 去校验 First-loader content cert。 
(4) 校验成功，最后计算出 First-loader image 的 hash 值，与 content cert 里存的 hash 值进行比较。 
注意：  
• 如果外部存储器是 NAND 闪存，BROM 支持第二份（副本）First-loader。当 BROM 无法加载第一份（副本）First-loader
时，BROM 会尝试加载/认证第二份（副本）First-loader。 
 
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
3. 在第一阶段引导加载程序之后，引入了 fitimage 来进行后续的校验。包括 Kernel 和 TEE 等镜像。 
 
4. First-loader 从 NVM 把 Linux Kernel 加载程序加载到非安全的 DRAM 区域并验证。它使用嵌入在 First-loader 中的
VERIFIED 公钥来认证校验 kernel FIT 签名，并检测 Fit 镜像中各个子镜像的 HASH 值。验证方法使用 SHA256 计
算哈希值，RSA（2048 位）和 MTK 或 PSS 填充进行验证。 
 
5. First-loader 从 NVM 把 TEE 加载程序加载到非安全的 DRAM 区域并验证。它使用嵌入在 First-loader 中的
VERIFIED 公钥来认证校验 TEE FIT 签名，并检测 Fit 镜像中各个子镜像的 HASH 值。验证方法使用 SHA256 计算
哈希值，RSA（2048 位）和 MTK 或 PSS 填充进行验证。 
 
6. 在 Linux 系统执行后，可以通过 Linux 内核中，MediaTek 提供的 rootf_check 功能来实现 Kernel 对只读系统的抽
样校验。 
 
 
图 1-1.安全启动检查流程 
 
1.3 下载代理认证 (DAA) 
当外部存储器（eMMC/NAND/...）中的设备软件为空或损坏时，主机 PC 工具可以与 SoC 中的 BROM 通信，将一个
DA 软件加载到 SoC 的 SRAM 中并执行 DA 来进行镜像下载过程。当 Enable_DAA 被烧录时，DA 将由 BROM 进行认
证，下面的流程被称为下载代理认证（DAA）。 
 
1. 主机 PC 工具通过 USB 或 UART 将认证文件（AuthFile）发送给 BROM。 
2. BROM 对 AuthFile 进行认证 。 
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
(1) BROM 从 AuthFile 中读取安全启动检查（SBC）公钥（SBC_PUBK），并使用公钥哈希（
SBC_PUBK_HASH~SBC_PUBK_HASH1）及相应的禁用位（SBC_PUBK_HASH_DIS~SBC_PUBK_HASH1_DIS）来认
证 SBC 密钥的哈希。 
(2) BROM 使用 SBC_PUBK 来验证 AuthFile。  
(3) BROM 从 AuthFile 中获取 DAA 密钥。  
3. 主机 PC 工具发送 DA。 
4. BROM 使用 DAA 密钥通过 SHA256/RSA-2048 验证 DA。 
5. BROM 跳转到 DA 来执行固件下载过程。 
 
注意: 
• SBC_PUBK 和 DAA 密钥可以不同，以提高安全级别。 
 
1.4 安全特性配置 
 生成密钥对 
生成两对密钥（包括私钥和公钥）, SBC_KEY 和 VERIFIED_KEY，并放到meta/meta-mediatek/conf/machine/keys
目录下。 
 
1. 生成 yocto 私钥的命令： 
openssl genrsa -F4 -out sbc_key.pem 2048 
openssl genrsa -F4 -out verified_key.pem 2048 
openssl req -batch -new -x509 -key verified_key.pem -out verified_key.crt 
2. 生成公钥的命令： 
openssl rsa -in sbc_key.pem -pubout > sbc_pubk.pem 
openssl rsa -in verified_key.pem -pubout > verified_pubk.pem 
 
使用相同的方法生成用于签名和验证 DA 的 DA 密钥对（da_prvk.pem/da_pubk.pem），DA 可以和 SBC key 一样，
也可以不一样。 
  
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
 开启安全启动 
1.4.2.1 生成 SCB pubk HASH 
1. 工具路径： 
meta/meta-mediatek/recipes-bsp/lk/files/pbp 
2. 命令： 
chmod 777 der_extractor 
python pbp.py -j sbc_key.pem -func keyhash_pss -o keyhash 
 
1.4.2.2 Blowing SBC_PUBK0_HASH_Field 
Step 1: 使用 “hexdump –C keyhash”, or “xxd –c 32 keyhash” 来显示 16 进制 keyhash。 
注意：您必须使用-c 这个入参才能生成规范的十六进制的 ASCCI 显示结果。 
 
hexdump -C keyhash 
00000000 16 b1 oe fc 5e 4e 06 76 e9 d9 6e 40 0c 51 ca 36 | ……. 
00000010 d1 be 93 d2 67 fd 3e af db f6 f7 89 4a 2c 40 18   |…….. 
 
xxd -c 32 keyhash 
00000000 16b1 oefc 5e4e 0676 e9d9 6e40 0c51 ca36 d1be 93d2 67fd 3eaf dbf6 f789 4a2c 
4018    ……… 
 
禁止使用 hexdump keyhash 来显示。 
hexdump keyhash 
00000000 b116 fc0e 4e5e 7606 d9e9 406e 510c 36ca 
00000010 bed1 d293 fd67 ad3e f6db 89f7 2c4a 1840 
 
Step 2: 将结果转化为十六进制的字符串。 删除字符之间的空格： 
16b10efc5e4e0676e9d96e400c51ca36d1be93d267fd3eafdbf6f7894a2c4018 
 
Step 3: 执行 ewriter 命令： 
ewriter 1 0 32 16b10efc5e4e0676e9d96e400c51ca36d1be93d267fd3eafdbf6f7894a2c4018 
 
“ewriter”工具更详细的用法，可以参考 MTK_eFuse_Writer_User_Guide。 
 
注意： 
• 开启 IC 的 BROM secure boot 校验功能，除了要写上述的 SBC_PUBK0_HASH 栏位外，还需要写 SBC_EN。efuse
只能写一次，所以在项目开发阶段不建议写 efuse 开启 IC 的 BROM secure boot 校验功能。 
 
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
1.4.2.3 软件开启 Secure Boot 配置 
meta/meta-mediatek-mt8xxx/conf/machine/[project].conf 
SECURE_BOOT_ENABLE = “yes”  
ENABLE_ROOTFS_CHECK= “yes”  
 
此配置公版默认开启可以在不使用 eFuse 的情况下启用软件层面安全启动和安全下载，以便验证 LK 以上软件的安
全启动流程。 
 
 编译软件 
编译整个项目。 
 
 独立远程签名环境 
MTK SDK 支持独立的签名环境。在这种模式下，只能将公钥放入代码库中，稍后再进行最终的签名操作。  
 
1.4.4.1 独立签名环境准备 
Step 1: 开启远程独立签名的配置，STANDALONE_SIGN_PREPARE 开启后签名的动作会放到独立的签名环境里面，所
以开启此宏后，编译出来的 image 默认是没有签名的。 
SECURE_BOOT_ENABLE = “yes” 
STANDALONE_SIGN_PREPARE =  “yes” 
ENABLE_ROOTFS_CHECK = “yes”  
 
Step 2: 保留 verified_pubk.pem 文件在 meta/meta-mediatek/conf/machine/keys 目录，其他密钥放到独立的签
名环境。 
 
Step 3: 编译镜像 
 
1.4.4.2 签名镜像 
独立的签名环境的工具包位于：meta/meta-mediatek-mt8676/recipes-devtools/standalone_sign_env，客
户可以根据自己的需要可以将工具包放到特定的服务器上。  
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
Step 1: 
将相关密钥${SBC_KEY}.pem, ${VERIFIED_KEY}.pem 放到 “keys”文件夹下。 
 
Step 2: 执行签名脚本: sh sign_images.sh 
如果一切正常，签名的镜像将被放置在 “signed”文件夹中。 
 
注意： 
• sign_images.sh 是 MTK SDK 的示例文件。强烈建议您使用该文件并根据您的需要进行修改。  
 
1.5 签名 DA 
下载代理验证 (DAA) 是 MediaTek 的解决方案，可确保固件下载进度的安全。在开始身份验证之前，请确保  SBC 已
启用并且安全启动测试已通过。8676 Yocto 用的 Android 这边的 DA，所以在签名 DA 时会用到 Android 相关的脚本
和源码。 
 
 生成 dakey.h 
将 DA 公钥（da_pubk.pem）导出，使用der_extractor 生成 dakey.h, 该工具位于 Android 源码
vendor/mediatek/proprietary/scripts/sign-image_v2/der_extractor/ 目录下，请将生成的 dakey.h 放置
到以下 yocto 路径： 
[LK2] $LK2/target/$PROJECT/include/dakey.h 
 
命令： 
chmod 777 der_extractor 
python pem_to_der.py da_pubk.pem da_pubk.der 
./der_extractor da_pubk.der dakey.h ANDROID_SBC 
 
 
 签名 DA 
1. 密钥路径设置 
将 DA 公钥（da_prvk.pem）导出，放置到 Android 路径
vendor/mediatek/proprietary/scripts/secure_chip_tool/custom_keys 目录下。 
 
2. 将需要签名的 DA 放置在 prebuilt/resignda/ 目录下，并执行以下命令来签名 DA： 
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
cd vendor/mediatek/proprietary/scripts/secure_chip_tool/ 
python MTK/resign_da.py prebuilt/resignda/DA_BR.bin MT6897 
settings/Legacy/da/bbchips_pss.ini all out/resignda/DA_BR-resing.bin 
 
 生成 Authfile 
DA 的公钥包含在 authfile 中，BROM 使用它来验证 DA。因此，如果启用了 DAA，在使用 flashtool 下载镜像时需要 
authfile。 所有位于以下位置（android branch）的 .ini 文件， 已经为 本项目配置好了。 
./vendor/mediatek/proprietary/scripts/secure_chip_tools/settings/Legacy/authfile/ 
 
您只需要替换位于以下位置的 DA、和根私钥（将 sbc_key.pem 重命名为 root_prvk.pem）的 .pem 文件。 
./vendor/mediatek/proprietary/scripts/secure_chip_tools/custom_keys/ 
 
Authfile 生成命令： 
python MTK/toolauth.py -i settings/Legacy/authfile/toolauth_key.ini -g 
settings/Legacy/authfile/toolauth_gfh_config_pss.ini out/toolauth/auth_sv5.auth 
 
 
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
MT8676 Yocto Secure Boot 
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
# SRC0268 MT8676_Yocto_Sentry_Mode_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Sentry_Mode_User_Manual_V1.0.pdf

SHA-256：6cfac687decb4e548b5ffe6f6510124f3e44a390506e019e1a0b0dffae801150

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0268.html)

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
版本记录 
版本 日期 作者 描述 
1.0 2024-09-19 吴青 正式版本 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 Sentry Mode ······························································································································································ 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 名词解释 ······················································································································································ 5 
1.2 架构·········································································································································································· 6 
 SCP 中的硬件路径 ······································································································································· 7 
 APMCU 中的硬件路径 ································································································································· 7 
1.3 SW 控制流程 ··························································································································································· 8 
 启动哨兵模式 ·············································································································································· 8 
 低功耗模式 ·················································································································································· 8 
 唤醒模式 ······················································································································································ 9 
 APMCU 和 SCP 间的 IPI 通信 ······················································································································· 9 
 APMCU 和 SCP 间的共享内存 ··················································································································· 10 
1.4 如何运行哨兵模式 ················································································································································ 10 
 传感器 ························································································································································ 10 
 APP 设置 ····················································································································································· 10 
 监测录制 ···················································································································································· 11 
附件一 附加条款 ····························································································································································· 12 
 
 
 
 
 
 
 
 
 
 
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
图片目录 
图 1-1.哨兵模式架构 ································································································································································ 6 
图 1-2. SCP 中哨兵模式的硬件路径 ········································································································································· 7 
图 1-3. APMCU 中哨兵模式的硬件路径 ·································································································································· 7 
图 1-4. 哨兵模式启用流程 ························································································································································ 8 
图 1-5.哨兵模式唤醒流程························································································································································· 9 
图 1-6. APMCU 和 SCP 间的 IPI 通信 ········································································································································ 9 
图 1-7. APMCU 和 SCP 间的共享内存 ···································································································································· 10 
 
表格目录 
表 1-1. 名词解释········································································································································································ 5 
  
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
1 Sentry Mode 
1.1 概述 
 简单介绍 
本文档介绍 MT8676 Sentry Mode（哨兵模式）的实现原理以及操作方法。 
哨兵模式是指在车辆停止运行的状态下，通过车辆外部摄像头实时监控车身周围的环境，并在检测到威胁（车辆
发生碰撞或者 AI 检测到异常）时，记录异常前后的视频。 
 
 名词解释 
表 1-1. 名词解释 
缩略词 解释 
APK 
Android Package Kit，这是 Android 操作系统中用于分发和安装移动应用程序
的文件格式 
APMCU 
Application Processor Microcontroller Unit，应用处理器微控制单元，通常嵌
入在系统中的一个高性能处理器，负责运行操作系统和应用程序，处理复杂
的计算任务和管理系统资源 
CAM_BE 
Camera Back End，CAM_BE 是摄像头处理后端，在 SCP 中,负责接收来自
CAM_FE 的控制命令，并负责摄像头数据的存储 
CAM_FE 
Camera Front End，CAM_FE 是摄像头处理前端，在 APMCU 中。负责从 SCP
中获取视频数据，并处理来自应用程序的控制命令 
CAMSV 
Camera Submodule，负责接收 MIPICSI 传来的 YUV422 格式视频数据，并将
其存储到 DRAM 中 
DRAM 
Dynamic Random-Access Memory，动态随机存取存储器，是一种高密度、低
成本、快速访问的存储器类型，广泛用于计算机和嵌入式系统的主存储器  
GST 
GStreamer，这是一个开源的多媒体框架，用于构建媒体处理应用程序。它
提供了丰富的插件库，可以用于音视频捕获、处理、编码、解码和输出  
IPI 
Inter-Processor Interrupt，这是一种处理器间通信机制，允许不同处理器或处
理单元之间发送中断信号和数据 
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
缩略词 解释 
MDP Media Data Processor，对解码后的原始视频帧进行处理 
MIPI 
Mobile Industry Processor Interface，行业标准组织，致力于为移动设备和相
关应用开发接口标准 
MIPICSI 
MIPI Camera Serial Interface，接收来自摄像头的 MIPI 信号，并将其传递给后
续的图像处理模块 
PQDIP 
Picture Quality Digital Image Processor，是一个图像处理模块，主要用于图像
缩放、格式转换和图像增强 
SCP 
System Control Processor，SCP 是系统控制处理器，负责系统的低功耗管理、
硬件控制和其他系统级任务。 
SoC 
System on Chip，片上系统，是一种集成电路，将计算机或其他电子系统的所
有或大部分功能集成到单个芯片上 
V4L2 
Video for Linux 2，这是 Linux 内核中的一个视频捕获接口，广泛用于摄像头
和视频设备的控制和数据传输 
VDEC Video Decoder，解码从摄像头捕获的压缩视频数据 
VENC Video Encoder，将处理后的原始视频帧编码为压缩格式 
 
1.2 架构 
 
图 1-1.哨兵模式架构 
 
 
 
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
哨兵模式的架构分为 SCP 和 APMCU 两个部分。 
SCP 是 SoC 上的一个协处理器，可以在系统 CPU 休眠的情况下低功耗运行。哨兵模式的摄像头数据采集，AI 检测
以及碰撞检测功能都在 SCP 中完成。 
APMCU 是 SoC 的主要处理器，在哨兵模式的检测过程中，APMCU 处于休眠状态。当检测到威胁时，SCP 唤醒
APMCU，并在 APMCU 中进行视频的录制。 
 SCP 中的硬件路径 
 
图 1-2. SCP 中哨兵模式的硬件路径 
 
SCP 中，哨兵模式的硬件路径如图 1-2 所示。 
环视摄像头通过 SerDes 接口接到 MTK 平台上，MIPICSI 接收到 MIPI 信号后，通过 CAMSV (ISP P1 模块)接收 YUV422
数据并存放在 DRAM 中。PQDIP (ISP P2 模块)将 YUV422 数据进行缩放及格式转换，生成两路数据流，一路送给 AI 
detect module，进行 AI 检测，比如是否有人物靠近；另一路送给 video encoder module，用于数据的压缩和存储。
CAM_BE 负责数据的存储，更新以及与 APMCU 的通信。 
 APMCU 中的硬件路径 
 
图 1-3. APMCU 中哨兵模式的硬件路径 
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
在使用 hypervisor 架构的系统中，哨兵模式的 APMCU 运行在 Yocto OS 上。 
哨兵模式应用程序主要功能： 
1. 启动/关闭哨兵模式 
2. 检测 g-sensor 信号 
3. 触发视频录制 
视频录制通过 GST 创建 pipeline（管道），pipeline 包括 CAM_FE -> VDEC -> MDP -> VENC ->filesink。 
CAM_FE 会通过 IPI 与 SCP 中的 CAM_BE 模块通信，并获取摄像头影像，影像摆放形式为横长条，格式为 H265。先
经过视频解码器（VDEC）将格式转换为 YUV420，再经过 MDP 将影像摆放形式换成田字格，最终再次视频编码器
（VENC）成 H265 格式，并以 MP4 形式存储。 
 
1.3 SW 控制流程 
 启动哨兵模式 
 
图 1-4. 哨兵模式启用流程 
 
通过 V4L2 接口，应用程序将哨兵模式的开/关设置发送到 CAM_FE。CAM_FE 接收到命令后，通过 IPI 通信机制将该
设置传递给 SCP 侧的 CAM_BE。CAM_BE 接收到命令后，执行相应的操作来开启或关闭哨兵模式。  
 
 低功耗模式 
CAM_BE 收到哨兵模式开启的消息后，SCP 中就会建立一个如图 1-2 中展示的数据处理管道 pipeline，用于摄像头影
像的保存以及侦测。 
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
 唤醒模式 
 
图 1-5.哨兵模式唤醒流程 
1. G-sensor 检测到碰撞或 AI 检测到人或物体靠近 
2. SCP 分析后发送唤醒事件给 SPM, SPM 给 APMCU (ARM)上电，执行内核回复（Kernel resume） 
3. SCP 通过 IPI 将碰撞消息传送给 APMCU (SCP Driver) 
4. 哨兵模式应用程序（Sentry Mode APK）轮询 G-sensor 事件 
5. 哨兵模式应用程序通过 GST 创建数据处理管道 pipeline，启动录制视频 
 
 APMCU 和 SCP 间的 IPI 通信 
 
图 1-6. APMCU 和 SCP 间的 IPI 通信 
 
哨兵模式 APMCU 和 SCP 之间是通过邮箱（mailbox）通信的。比如哨兵模式的开启/关闭设置，以及摄像头影像缓
冲区的入队和出队等等。 
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
 APMCU 和 SCP 间的共享内存 
 
图 1-7. APMCU 和 SCP 间的共享内存 
 
如图 1-7 所示，DRAM 会预留一段内存给哨兵模式使用。这样，在低功耗模式下，SCP 中将摄像头影像存储在保留
内存中。同时这段保留内存也可以被 Yocto 访问，当检测到异常后，Yocto 可以直接访问这块缓冲区，录制成 MP4
文件，而不需要在 FreeRTOS 和 Yocto 之间做缓冲区复制。 
 
1.4 如何运行哨兵模式 
 传感器 
哨兵模式需要接上 AVM YUV 传感器。 
在 SPM8676 公版上，需要在 CON12 卡槽上接上摄像头 MAX96712 子卡，子卡的 CON501 上接 4 颗 YUV 传感器。 
 APP 设置 
在 Yocto shell 界面输入下列命令 
 
会弹出哨兵模式应用界面，点击 start/stop 启动或者关闭哨兵模式功能 
 
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
MT8676 Yocto Sentry Mode 
User Manual 
Confidential B 
 监测录制 
当发生碰撞后，会录制碰撞前后各 10s 的数据，存放在/data/ 路径下 
• 路径： /data 
• 名字： sentry_data_年_月_日_时_分_秒.mp4……(平台联网时才能获取正确时间，否则是平台默认时间) 
• 格式：mp4 
• 时长：20s 
• 视屏摆放：长条 
 
如果需要显示成田字格，需要输入以下命令 
adb shell setprop vendor.sentrydvr.changepipeline.enable 1 
 
田字格显示如下： 
 
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
MT8676 Yocto Sentry Mode 
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
# SRC0269 MT8676_Yocto_SPI_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_SPI_User_Manual_V1.1.pdf

SHA-256：2397734a51c2dd97e166bee5d534cd6d7cb4c2a62aee976959deb6b7733187a1

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0269.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 薛佳 正式版 
1.1 2025-03-24 甘文超 增加章节 1.3.2 节点配置 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 SPI ············································································································································································· 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 名词解释 ······················································································································································ 5 
1.2 架构/流程概述 ························································································································································ 6 
 SPI 介绍 ························································································································································ 6 
 MT8676 SPI 特征 ·········································································································································· 6 
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
 寻求 MTK 帮助 ··········································································································································· 15 
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
附件一 附加条款 ····························································································································································· 16 
 
 
图片目录 
图 1-1. SPI Master 和 SPI Slave 之间的引脚连接 ····················································································································· 6 
图 1-2. 四种通信模式波形 ························································································································································ 7 
图 1-3. 主设备与多设备引脚连接 ············································································································································ 7 
图 1-4. SPI 传输格式 ·································································································································································· 8 
 
表格目录 
表 1-1. 名词解释········································································································································································ 5 
 
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
1 SPI 
1.1 概述 
 简单介绍 
本章节介绍 MT8676 SPI 控制器的硬件、软件及其功能。  
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
1.2 架构/流程概述 
 SPI 介绍 
SPI 接口是一种串行、四引脚传输协议。图 1-1 是 SPI MasterError! Reference source not found.与 SPI Slave 之间的连
接示例。SPI 控制器接口是一个主机，负责与从机之间的数据传输。通常 SPI 会接的设备有：闪存、触控板等。 
 
 MT8676 SPI 特征 
• 提供 8 个 SPI 端口 
• 支持 DMA 和 FIFO 模式两种传输模式  
• FIFO 模式在一次传输中最多支持 32 个字节 
• 如果传输长度小于 1024 字节，则 DMA 模式最多支持 1024 字节 
• DMA 模式支持 1024 字节的倍数（长度 = 循环次数 * 1024，1 ≤循环次数≤ 256） 
• 最大传输 频率为 52 MHz 
• 有四种通信模式可用（模式 0、1、2、3），参见图 1-2 
• 这基本上定义了 MOSI 线路切换的 SCLK 边沿、主机对 MISO 线路进行采样的 SCLK 边沿和 SCLK 信号稳定电平（即
时钟电平，当时钟未激活时，高电平或低电平）。每种模式都由一对称为  “时钟极性”（CPOL）和“时钟相
位”（CPHA）的参数定义 
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
 
 图 1-1. SPI Master 和 SPI Slave 之间的引脚连接 
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
 
图 1-2. 四种通信模式波形 
 
• SPI 控制器只有一个 CS 引脚，也就是说，它只能支持单从。但是，您可以将 GPIO 用作 CS 来支持多个设备。如
图 1-3 所示。 
 
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
 
图 1-3. 主设备与多设备引脚连接 
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
 SPI 传输格式 
在 DMA 模式下，要传输的数据应提前在系统中准备好。在 PIO 模式下，系统应首先推送传输到 SPI TX FIFO 的数
据。收到 START 命令后，SPI 将连续向 Slave 发送数据，同时从 Slave 接收数据。 
 
 
图 1-4. SPI 传输格式 
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
const void *txbuf, unsigned 
SPI：结构体 spi_device 的指针 
成功返回 0，否则返回错误码 txbuf：要写入的数据 
n_tx：txbuf 的大小（以字节为单位） 
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
原型 参数 返回值 
n_tx, unsigned n_tx， void 
*rxbuf， unsigned n_rx ） 
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
源代码路径：kernel-4.14/drivers/spi/spi.c. 
spi_message.complete callback function: 
 
static void xxxxxx_complete(void *args) 
{ 
 //transfer was success……; 
} 
 
Sending and receiving data in asynchronous: 
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
源代码路径：kernel-4.14/arch/arm64/boot/dts/mediatek/ 
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
在某些 IC 上，一组 SPI 会有不同的 GPIO 可以选择，根据 GPIO 表格信息确定 SPI 使用哪组 GPIO。比如在 MT8675
上 SPI4 有SPI4_A/SPI4_B/SPI4_C。 
此时需要在 dts 中添加mediatek,pad-select = <x>; 
&spi { 
 pinctrl-names = "default"; 
 pinctrl-0 = <&spi_pins>; 
 mediatek,pad-select = <0>; //x = 0 1 2 分别对应A B C。 
 status = "okay"; 
 spidev0: spi@0 { 
  compatible = "mediatek,spi-mt65xx-test"; 
  reg = <0>; 
  spi-max-frequency = <1000000>; 
                 }; 
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
     };  
 
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
将 SPI_MOSI 连接到硬件平台上的 SPI_MISO，将spi-mt65xx-dev.c 作设备驱动。 
 
输入下列测试命令： 
echo -w len=32 > /sys/ bus/spi/devices/spixxx/spi 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Yocto SPI 
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
 
 寻求 MTK 帮助 
若经过前文的排查仍无法解决您的问题，向 MTK 寻求帮助时顺便提供前文提到的包含 SPI 寄存器信息的相关日
志、波形图、dts、cat mt_gpio 等信息。 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Yocto SPI 
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
# SRC0270 MT8676_Yocto_Suspend_Resume_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Suspend_Resume_User_Manual_V1.0.pdf

SHA-256：872b38c6d67fec1eee0e4cd1ac1c876be8ef0c06d82fbac8d4193424d7cfe0ae

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0270.html)

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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 郑孝俊 正式版 
 
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 Suspend/Resume ······················································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 架构/流程概览 ························································································································································ 4 
1.2.1 Android Suspend/Resume 流程 ···················································································································· 4 
1.2.2 Kernel Suspend/Resume 流程 ······················································································································ 6 
1.3 配置/客制化指南 ···················································································································································· 7 
1.4 常见问题/故障排除 ················································································································································ 7 
1.4.1 如何判定系统休眠成功 ······························································································································· 7 
1.4.2 如何确认唤醒源 ·········································································································································· 8 
1.4.3 唤醒源梳理 ·················································································································································· 8 
1.4.4 不能休眠问题如何分析 ······························································································································· 9 
1.4.5 如何分析休眠模式下功耗大的问题 ········································································································· 10 
附件一 附加条款 ···························································································································································· 11 
 
 
图片目录 
图 1-1. Yocto Suspend/Resume 流程 ········································································································································· 5 
图 1-2. Yocto Suspend/Resume 源代码 ····································································································································· 5 
图 1-3. Kernel Suspend/Resume 流程 ······································································································································· 6 
图 1-4. Wakelock dump 示意图 ··············································································································································· 10 
 
表格目录 
表 1-1. MT8676 唤醒源列表 ····················································································································································· 8 
 
 
 
  
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
1.1 概述 
本章节主要介绍 MT8676 Suspend/Resume 以及常见问题的处理方法。 
在 MT8676 平台上，Suspend 即 suspend to RAM，此状态使所有的设备进入低功耗状态，仅保留 RAM 自刷新。 
 
Suspend Power State：整个系统待机， 耗电非常低。 
 
• Tasks “freezed” 
• 外部设备/内部部分模块关电或者进入低功耗模式 
• System PLL/clock close 
• ARM off 
• DRAM self-refresh 
• PMIC 进入低功耗模式 
• VCORE off 
• SPM run 
• 等待硬件唤醒事件 
 
1.2 架构/流程概览 
 Android Suspend/Resume 流程 
Yocto 系统 Suspend 主要分为两个阶段，第一阶段是灭屏，即关闭显示，再通过命令 echo mem > 
/sys/power/state 触发 Kernel Suspend 流程。 在第一阶段灭屏流程中，根据上层搭载的 Weston/KDE 有不同的关
闭显示的方式：搭载 KDE 的 Yocto 版本，可通过按下 power key 灭屏，resume 时按下 power key 亮屏；搭载
Weston 的 Yocto 版本，可通过命令 systemctl stop weston 灭屏，resume 时通过命令 systemctl restart 
weston 亮屏。参考图 1-1： 
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
 
图 1-1. Yocto Suspend/Resume 流程 
 
对应的源代码如下: 
  
图 1-2. Yocto Suspend/Resume 源代码 
 
主要的流程说明: 
 
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
1. key_event_thread: 设置监视的时间位输入事件，并检测是否有输入事件发生。如果事件类型是按键事件并
且键值为电源键，则发送电源键按下的通知。 
2. 当读取/sys/power/wakeup_count 值时，如果此时底层有 active wakeup source，读取操作将会在 Kernel 中
被阻塞。 
3. 直到没有 active wakeup source 时，会返回return wakeup_count。 
4. 写回wakeup_count，如果写回成功则继续执行。 
5. 将mem 写入/sys/power/state 后，系统将进入 Kernel Suspend 流程。 
 
 Kernel Suspend/Resume 流程 
关于 Kernel Suspend/Resume 的流程，可参考图 1-3： 
 
 
图 1-3. Kernel Suspend/Resume 流程 
 
上层将mem 写入/sys/power/state，触发 Kernel Suspend 流程： 
 
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
1. 系统首先 freeze process，先冻结用户空间进程（userspace process），接着冻结内核线程（kernel thread）。
如果这一步发现有 wakelock，则会中止 Suspend 流程。若冻结操作成功，则 Suspend 过程将继续进行。 
2. 在成功冻结进程之后，系统会开始运行 device suspend flow。按照执行顺序分别调用 device 注册的
prepare/suspend/suspend_late callback，完成各个 device driver 在休眠阶段需要做的准备工作。 
3. 进入s2idle_enter(),  s2idle_state = S2IDLE_STATE_ENTER：所有 CPU 进入 idle loop。 
4. 最后进入TF-A  psci_cpu_suspend。 
5. 关闭不使用的硬件，整个系统进入低功耗休眠模式。 
 
进入休眠模式之后，如果有唤醒源唤醒请求，系统会被唤醒，进入 Resume 流程，Resume 过程与 Suspend 相反。 
 
1.3 配置/客制化指南 
由于 Suspend/Resume Flow 大部分是 Android 和 Kernel 的原生流程，因此不太需要客制化的设定。 
 
1.4 常见问题/故障排除 
 如何判定系统休眠成功 
屏幕熄灭可能仅表示系统进入了浅睡眠，这并不代表系统已经成功进入休眠状态。 
判定系统休眠成功需要查看 Kernel 日志，若系统成功进入 Suspend，则 Kernel 日志将不再打印新信息。 
 
如果需要通过日志判断休眠是否成功，需要先下这几行命令打开更多的 调试日志信息： 
adb shell "echo 8 8 8 8 > /proc/sys/kernel/printk" 
adb shell "echo 1 > /sys/module/kernel/parameters/initcall_debug" 
adb shell "echo 1 > /proc/mtprintk" 
 
Kernel 日志中，关键字“PM: Syncing filesystems ...”表示 Kernel 开始走 Suspend 流程。 
Kernel 日志中，关键字“suspend of devices complete after xxx msecs”表示 device suspend 完成。 
Kernel 日志中，关键字“late suspend of devices complete after xxx msecs”表示 device late suspend 完成。 
Kernel 日志中，关键字“noirq suspend of devices complete after xxx msecs”表示 device noirq suspend 完成。 
Kernel 日志中，关键字“suspend enter”表示 suspend 流程结束，系统已进入 suspend 状态。 
 
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
 如何确认唤醒源 
在 Kernel 日志中搜索关键字“suspend wake up by”，可以查看唤醒源。 
 
如： 
Pwrkey 唤醒 （及其他 EINT 唤醒）： 
[SPM] suspend wake up by R12_EINT_EVENT_B, timer_out = 207308 
 
如果要看具体是由哪个 EINT 唤醒，需要先从日志查看： 
EINT xxx is pending 
 
再通过cat /proc/interrupts 看 xxx 对应的是哪个中断。 
 
Modem 相关唤醒： 
[SPM] suspend wake up by R12_CCIF0_EVENT_B, timer_out = 1825253 
 
定时器（PCM_Timer）唤醒： 
[SPM] suspend wake up by PCM_TIMER, timer_out = 65612 
 
 唤醒源梳理 
目前 MT8676 支持的唤醒源列表如下： 
 
表 1-1. MT8676 唤醒源列表 
Name Control Bit Description Can it be Disabled 
R12_PCM_TIMER 0 设定计时器，超时后唤醒系统 Y 
R12_KP_IRQ_B 2 检测到键盘按下/释放动作 Y 
R12_APWDT_EVENT_B 3 RGU 在 suspend mode 中唤醒 CPU Y 
R12_APXGPT1_EVENT_B 4 AP GPT 计时器超时事件 Y 
R12_CONN2AP_SPM_WAKEUP_B 5 Connectivity IC (Wi-Fi/BT/GPS) 唤醒系统 Y 
R12_EINT_EVENT_B 6 EINT 事件唤醒系统 N 
R12_CONN_WDT_IRQ_B 7 Connectivity IC watchdog timeout 唤醒系统 Y 
R12_CCIF0_EVENT_B 8 MD to AP CCIF 唤醒事件 Y 
R12_CCIF1_EVENT_B 9 MD to AP CCIF 唤醒事件 Y 
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
R12_SSPM2SPM_WAKEUP_B 10 SSPM 相关唤醒系统 Y 
R12_SCP2SPM_WAKEUP_B 11 SCP sensor 相关唤醒系统 N 
R12_ADSP2SPM_WAKEUP_B 12 ADSP 相关唤醒系统 Y 
R12_USBX_CDSC_B 14 USB 相关唤醒系统 Y 
R12_USBX_POWERDWN_B 15 USB 远程唤醒 Y 
R12_SYS_TIMER_EVENT_B 18 System timer 唤醒系统 N 
R12_EINT_EVENT_SECURE_B 19 EINT event 唤醒系统 N 
R12_SCP_CIRQ_IRQ_B 22 SCP_CIRQ 唤醒事件 Y 
R12_MD2AP_PEER_EVENT_B 23 MD 相关唤醒系统 Y 
R12_MD1_WDT_B 25 MD1 看门狗超时 Y 
R12_REG_CPU_WAKEUP_B 28 内部唤醒源 N 
R12_APUSYS_WAKE_HOST_B 29 APUSYS 的唤醒源 Y 
R12_PCIE_WAKEUP_EVENT_B 30 PCIe 相关唤醒源 Y 
R12_MSDC_WAKEUP_EVENT_B 31 MSDC 相关唤醒源 Y 
 
您可以按照以下方式禁用列表中可以禁用的唤醒源。但是，请注意，只有在“ Can it be Disabled”列中标注为可禁
用（Y）的唤醒源才能被禁用： 
使用系统提供的调试命令可以快速禁用特定的唤醒源： 
1. 使用如下命令读取当前系统唤醒源设定： 
cat /proc/mtk_lpm/power/suspend_ctrl | grep -i wake_src 
 
2. 在表 1-1 的“Control Bit”栏位中找到您想要禁用唤醒源所对应的的 control bit 位，然后将读出的 wake_src 的
对应 bit 写 0，最后用下述命令将修改后的 wake_src 写进系统（不需要禁用的唤醒源的 control bit 位不进行修
改）： 
echo wake_src 0x******** > /proc/mtk_lpm/power/suspend_ctrl 
 
3. 如果想要再启用某个唤醒源，就将对应的 control bit 再写 1 即可。 
 
 不能休眠问题如何分析 
如系统灭屏后无法进入休眠，可以用以下命令判定是哪个 wakelock 阻止系统进入休眠： 
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
• 查看 Kernel 中有哪些模块持锁： 
cat /sys/kernel/debug/wakeup_sources 
 
观察输出结果的第 5 列 active_since，数字不为 0 且一直在增大的就是阻止系统进入待机的 wakelock。 
 
例如图 1-4 中就是 USB 阻止系统进入待机状态： 
 
 
图 1-4. Wakelock dump 示意图 
 
该命令需要在 UART 下输入，因为插入 USB 本身会阻止系统进入待机。 
 
 如何分析休眠模式下功耗大的问题 
• 首先看是否有频繁唤醒问题，如果有，请参考 1.4.2 章节确认唤醒源。 
• 如果成功进入休眠状态但功耗偏大，请先检查是否有未关闭的外设耗电。  
• 如果定位到是 MediaTek SoC 造成的功耗偏大，请提供日志给 MediaTek 进行分析。 
 
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
# SRC0271 MT8676_Yocto_System_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_System_User_Manual_V1.0.pdf

SHA-256：15e56401fb86b3c1f79f0d1730aac8da1366ce50ba99b819270bb9951977792e

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0271.html)

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
版本记录 
版本 日期 作者 描述 
1.0  2024-08-12 彭凯 正式版 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 System ······································································································································································· 6 
1.1 名词解释 ·································································································································································· 6 
1.2 Yocto 系统架构 ························································································································································ 7 
1.2.1 软件架构 ······················································································································································ 7 
1.2.2 Yocto Meta Layers ········································································································································· 7 
1.2.3 代码结构 ······················································································································································ 9 
1.2.4 常用文件路径 ············································································································································ 10 
1.2.5 分区表 ························································································································································ 12 
1.3 Yocto 编译与烧录 ·················································································································································· 13 
1.3.1 Build Server ················································································································································· 14 
1.3.2 编译软件 ···················································································································································· 14 
1.3.3 软件构成 ···················································································································································· 15 
1.3.4 烧录软件 ···················································································································································· 16 
1.3.5 编译 SDK ····················································································································································· 18 
1.3.6 使用 SDK ····················································································································································· 18 
1.4 Yocto 客制化 ·························································································································································· 19 
1.4.1 常用变量 ···················································································································································· 19 
1.4.2 bb 文件的基本结构 ··································································································································· 20 
1.4.3 开机自启动 ················································································································································ 21 
1.4.4 依赖 ···························································································································································· 22 
1.4.5 树外驱动 ···················································································································································· 23 
1.4.6 image bb ····················································································································································· 26 
1.4.7 fog 简介 ······················································································································································ 26 
1.4.8 创建 project ················································································································································ 27 
1.4.9 创建 meta layer ·········································································································································· 27 
1.5 Yocto Build Mode ··················································································································································· 28 
1.5.1 使用方法 ···················································································································································· 29 
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
1.5.2 适配 ···························································································································································· 29 
1.6 Yocto 调试技巧 ······················································································································································ 30 
1.6.1 build 目录结构 ··········································································································································· 30 
1.6.2 工作目录常用子目录································································································································· 31 
1.6.3 打印变量值 ················································································································································ 32 
1.6.4 加速 Yocto 编译·········································································································································· 33 
1.7 开机流程 ································································································································································ 34 
1.7.1 BootROM ···················································································································································· 34 
1.7.2 LK2 ······························································································································································ 34 
1.7.3 Kernel ·························································································································································· 35 
1.7.4 initramfs ······················································································································································ 36 
1.7.5 systemd ······················································································································································· 36 
1.8 Yocto 常用调试工具 ·············································································································································· 37 
附件一 附加条款 ····························································································································································· 39 
 
图片目录 
图 1-1. Yocto 软件架构 ······························································································································································ 7 
图 1-2. MT8676 meta layers ······················································································································································· 8 
图 1-3. 代码结构········································································································································································ 9 
图 1-4. 下载 SP_Flash_Tool ······················································································································································ 16 
图 1-5. 加载 flash.xml ······························································································································································ 17 
图 1-6. 软件烧录······································································································································································ 17 
图 1-7. 安装 SDK ······································································································································································ 18 
图 1-8. 目录结构······································································································································································ 19 
图 1-9. meta layer 目录结构 ··················································································································································· 28 
图 1-10. 编译完成后的目录结构 ············································································································································ 31 
图 1-11. 开机流程 ··································································································································································· 34 
图 1-12. kernel_init ·································································································································································· 36 
 
表格目录 
表 1-1. 名词解释········································································································································································ 6 
表 1-2. Meta layer 说明 ····························································································································································· 8 
表 1-3. 主要模块路径 ······························································································································································ 10 
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
表 1-4. 常用文件路径 ······························································································································································ 10 
表 1-5. 分区表格式·································································································································································· 11 
表 1-6. ko table 格式 ································································································································································ 12 
表 1-7. 分区表 ········································································································································································· 12 
表 1-8. Build server 要求 ························································································································································· 14 
表 1-9. 镜像文件说明 ······························································································································································ 15 
表 1-10. Yocto 常用变量 ·························································································································································· 19 
表 1-11. 创建 project ······························································································································································· 27 
表 1-12. Yocto build mode ······················································································································································· 28 
表 1-13. Build variant ······························································································································································· 29 
表 1-14. build 目录常用文件和目录······································································································································· 31 
表 1-15. 工作目录常用子目录 ················································································································································ 32 
表 1-16. 常见服务 ··································································································································································· 37 
表 1-17. Yocto 常用调试工具 ·················································································································································· 37 
 
  
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
1 System 
本章节主要介绍 MT8676 Yocto 系统相关内容以及常见系统问题的处理方法。 
 
1.1 名词解释 
表 1-1. 名词解释 
缩略词 全称及释义 
bb Bitbake 配方文件（recipe），bb 文件描述了如何构建特定软件包。 
Bitbake Yocto 项目的核心构建工具，解析 bb 和 bbclass 文件，并执行任务。 
CCU Camera Control Unit，相机控制单元。 
DPM DRAM Power Manager，处理 SPM 的指令，控制 DRAM 的速度、进出 low power 模式等。 
Layer 
即元数据层（meta layer），Yocto 使用 layer 来管理 bb 和配置文件。Layer 之间可独立开发和维
护。 
MCUPM CPU 专属的 power/performance manager。 
NeuroPilot NeuroPilot1是一套用于在 MediaTek 平台开发高效 AI 应用程序的软件工具和 API。  
OE 
OpenEmbedded ，提供了构建嵌入式 Linux 系统的基本组件，包含了常用的工具链、库和应用程
序。 
Poky Yocto 项目的参考发行版。它是一个完整的构建系统，可以用来创建嵌入式 Linux 镜像。 
SCP System Companion Processor，在系统处于低功耗状态时执行始终开启任务的子系统。 
SPM System Power Management，管理系统的电源。 
SSPM Secure System Power Manager，控制 SoC 电源并驻留在安全域中的子系统。 
T-box Telematics-BOX，车联网控制单元。 
tinysys 指除主处理器之外的其他处理器，例如 APUSYS。 
VCP Video Controller Processor 
Yocto 一个开源项目，可以为嵌入式系统创建自定义 Linux 发行版本。 
 
                                                                 
 
1 https://neuropilot.mediatek.inc/  
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
1.2 Yocto 系统架构 
 软件架构 
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
 
图 1-1. Yocto 软件架构 
 
 Yocto Meta Layers 
MT8676 Yocto meta layers 如图 1-2 所示，主要由 Yocto core layer, OSS layer, MediaTek feature layer, MediaTek platform 
layer 4 部分构成。表 1-2 详细说明了每个 layer 包含的内容。 
 
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
 
图 1-2. MT8676 meta layers 
 
表 1-2. Meta layer 说明 
Layer Explanation 
meta-mediatek-classes-overlay 覆盖 Yocto bbclass，自定义 bbclass。 
meta2 
包含 OpenEmbedded 的核心元数据，不包含发行版本，仅提供对模拟器的支
持。 
meta-poky 包含 Poky 发行版本的配置和元数据。 
meta-yocto-bsp3 包含 Yocto 项目参考硬件的 BSP。 
meta-filesystems 包含文件系统相关的元数据，例如 fuse、owfs、ntfs-3g 等。 
meta-python 包含 Python 相关的元数据。 
meta-multimedia 包含多媒体相关的元数据。 
meta-networking 包含网络相关的元数据。 
meta-oe 其他共享的 OE 元数据。 
meta-clang 包含 clang/llvm 相关的元数据。 
meta-qt5 包含 qt5 相关的元数据。 
meta-mediatek MediaTek 基础 layer，包含 MediaTek 写的 bbclass 和与平台无关的软件包。 
meta-mediatek-gpl MediaTek gpl layer，包含 u-boot 等软件包。 
                                                                 
 
2 https://git.openembedded.org/openembedded-core/tree/README.OE-Core.md  
3 https://git.yoctoproject.org/poky/tree/meta-yocto-bsp/README.hardware.md  
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
Layer Explanation 
meta-mediatek-gplv2 MediaTek gplv2 layer，包含 grep 等软件包的 GPLv2 版本。 
meta-mediatek-gstreamer MediaTek GStreamer layer。 
meta-mediatek-ml-np 包含 MediaTek NeuroPilot 相关的软件包。 
meta-mediatek-mt8676 MT8676 BSP layer，包含 MT8676 BSP 的配置文件和元数据。 
 
 代码结构 
MT8676 Yocto 代码结构如图 1-3 和表 1-3 所示。 
 
• meta 目录包含所有 Yocto 元数据，详细说明请参考 1.2.2 章节。 
• patch 目录包含 MediaTek 对 OSS 打的补丁。 
• prebuilt 目录包含预编译好的文件，例如可执行文件、动态库、镜像和工具链等。  
• src 目录包含所有的源代码文件。 
 
表 1-3 列出了主要模块的路径，及其简要说明。 
 
图 1-3. 代码结构 
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
表 1-3. 主要模块路径 
Layer Explanation 
meta/meta-mediatek-mt8676 MT8676 platform 层 
src/bsp/lk2 
src/bsp/dramk_8676 bootloader 源代码 
src/kernel/linux/v6.1_mt8676/co_common Linux Kernel 6.1 源代码 
src/kernel/linux/v6.1_mt8676/co_device_module MediaTek Linux kernel 6.1 设备驱动 
src/kernel/modules out-of-tree 设备驱动 
src/apps/spm-base 
src/apps/atom-base 应用程序源代码 
src/connectivity Wi-Fi 相关的源代码 
src/ml/neuropilot NeuroPilot 4相关的源代码 
src/telephony 
src/telephonyware 车机 tbox(telephony) data/call/sms FW 相关的源代码 
src/tinysys tinysys 相关的源代码 
 
 常用文件路径 
表 1-4 列出了一些 Yocto 系统常用文件路径及其作用。 
 
表 1-4. 常用文件路径 
路径 说明 
meta/meta-mediatek-mt8676/conf/machine/auto8676p1_64.conf 项目配置文件。 
meta/meta-mediatek-mt8676/recipes-
bsp/ptgen/files/auto8676p1_64/partition_table_emmc_ab.csv 分区表。分区表的格式参考 1.2.4.1 章节。 
meta/meta-mediatek-mt8676/recipes-
kernel/linux/ko_order_table/auto8676p1_64/ko_order_table.csv  
ko table，决定 ko 加载顺序。格式参考
1.2.4.2 章节。 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dt
s/mediatek/auto8676p1_64.dts kernel dts 文件。 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/configs
/auto8676p1_64_defconfig kernel defconfig 文件。 
src/devtools/dct/dws/mt6897/auto8676p1_64.dws dws 文件，主要用于配置 GPIO。 
                                                                 
 
4 https://neuropilot.mediatek.inc/  
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
路径 说明 
meta-mediatek-mt8676/recipes-core/base-files/base-
files/auto8676p1_64/fstab fstab 文件，控制分区挂载。 
meta-mediatek-mt8676/recipes-auto/images/mtk-core-image-
auto8676.bb MT8676 镜像 bb，用于生成根文件系统。 
 
1.2.4.1 分区表格式 
分区表是一个 CSV 文件，可以用文本编辑器或 Excel 编辑。每一列的说明请参考表 1-5。 
 
表 1-5. 分区表格式 
表头 说明 
Partition_Name 分区名字 
Type 分区类型，EXT4 或 Raw data 
Size_KB 分区大小，单位是 KB 
Region(emmc) 分区所在的 eMMC 物理分区，EMMC_BOOT1、EMMC_BOOT2 或 EMMC_USER 
Region(ufs) 分区所在的 UFS 物理分区，UFS_LU0、UFS_LU1（BOOT）或 UFS_LU2（USER） 
Reserved 保留分区，Y 或 N 
Download 是否烧录，Y 或 N。如果填 Y，Download_File 不能为空。 
Download_File 烧录的文件名 
OTA_Update OTA 是否升级 
EmptyBoot_Needed 未使用 
Operation_Type 
BOOTLOADERS：preloader 分区 
AUTO：普通分区 
PROTECTED：固件更新的备份分区 
NEEDRESIZE：用户数据分区 
RESERVED：与 Reserved 字段含义相同，保留分区 
Default_Exist Y 或 N，Y 表示分区存在 
 
1.2.4.2 ko table 格式 
ko table 是一个 CSV 文件，可以用文本编辑器或 Excel 编辑。每一列的说明请参考表 1-6。 
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
表 1-6. ko table 格式 
表头 说明 
KO name (*.ko) 文件名，含扩展名.ko 
KO path 此字段暂时未使用。 
Vendor/Ramdisk in 
Normal(vendor/ramdisk) 可以填 vendor 或 ramdisk，表示 ko 放在 rootfs 或 ramdisk。 
Need loaded before 
BootTime.completed(Y/N) 此字段暂时未使用。 
Recovery(Y/N) 此字段暂时未使用。 
Build mode 
编译模式，表示指定模式是否使用。比如 user/userdebug/eng 表示三个模块都会使
用；userdebug/eng 表示只有 userdebug 和 eng 模式会使用，user 模式不会使用。 
 
 分区表 
表 1-7 列出了 MT8676 的分区表以及分区说明。 
 
表 1-7. 分区表 
Partition_Name Type Download_File 说明 
preloader_a Raw data bl2.img bootloader 分区。 
pgpt Raw data NONE GPT 分区表。 
misc Raw data NONE 存储 OTA 升级过程中的一个标志位。 
para Raw data NONE 存储 LK 和 kernel 使用的系统环境信息。 
yocto-expdb Raw data NONE 用于存储 AEE DB。 
nvcfg EXT4 NONE 由各 module 直接透过 AP side FS 去存放数据。 
nvdata EXT4 NONE 存储 NVRAM 数据。 
protect1 EXT4 NONE 存储 SIM lock 数据。 
protect2 EXT4 NONE 存储 SIM lock 数据备份。 
seccfg Raw data NONE 存储安全启动相关的信息。 
otp Raw data NONE eMMC OTP (one-time-program, e.g. IMEI) 
pstore Raw data NONE 保存一些额外的日志，比如 power off charge。 
modem_a Raw data modem.img modem 镜像。 
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
Partition_Name Type Download_File 说明 
spmfw_a Raw data spmfw.img spmfw 镜像。 
mcf_ota_a EXT4 mcf_ota.img mfc_ota 镜像。 
audio_dsp_a Raw data audio_dsp.img audio_dsp 镜像。 
pi_img_a Raw data pi_img.img pi_img 镜像。 
dpm_a Raw data dpm.img dmp 镜像。 
scp_a Raw data scp-fit.img SCP 镜像。 
ccu_a Raw data ccu.img CCU 镜像。 
vcp_a Raw data vcp.img VCP 镜像。 
sspm_a Raw data sspm.img SSPM 镜像。 
mcupm_a Raw data mcupm.img MCUPM 镜像。 
gpueb_a Raw data gpueb.img GPUEB 镜像。 
apusys_a Raw data apusys.img APUSYS 镜像。 
boot_a Raw data boot.img Kernel 镜像。 
tee_a Raw data tee.img ATF 镜像。 
connsys_bt_a Raw data connsys_bt.img 未使用，保留。 
connsys_wifi_a Raw data connsys_wifi.img 未使用，保留。 
connsys_gnss_a Raw data connsys_gnss.img GNSS 镜像。 
logo_a Raw data logo.img Logo 镜像。 
nvram Raw data NONE NVDATA 备份分区。 
boot_para Raw data NONE 存储 DRAM 校验数据。 
dram_para Raw data NONE 存储 DRAM 校验数据。 
system EXT4 system.ext4 rootfs 镜像。 
userdata EXT4 userdata.ext4 用户数据。 
sgpt Raw data NONE GPT 分区备份。 
 
1.3 Yocto 编译与烧录 
本小节介绍了编译 Yocto 对主机的要求，软件的编译指令与烧录方法，以及 SDK 的编译指令和使用方法。 
 
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
 Build Server 
表 1-8 列出了编译 MT8676 Yocto5.0 对编译主机的要求。 
 
表 1-8. Build server 要求 
项目 要求 
磁盘空间 不小于 300GB 
内存 不小于 32GB 
发行版本 Ubuntu 20.04, 22.04 等，具体参考 Supported Linux Distributions5。 
编译主机需要安装的工具 参考 Required Packages for the Build Host6。 
Git 1.8.3.1 或更高版本 
tar 1.28 或更高版本 
Python 3.8.0 或更高版本 
GNU Make 4.0 或更高版本 
 
 编译软件 
编译 MT8676 Yocto 软件的指令如下所示。首先切换到 codebase 所在的目录，环境变量 TEMPLATECONF 用于指定文
件 bblayers.conf.sample 和 local.conf.sample 所在的路径。source 指令用于初始化 Yocto 编译环境，这条指令会创建
build 目录，将 bblayers.conf.sample 和 local.conf.sample 复制到 build/conf 目录，并重命名为 bblayers.conf 和
local.conf，注意脚本会将当前工作目录切换到 build。最后的 bitbake 指令启动编译。如果需要再次编译，直接执行
最后一条指令即可。如果终端退出重新登录，或使用一个新的终端，所有指令都要执行。  
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

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Yocto System 
User Manual 
Confidential B 
 软件构成 
软件编译完成后，软件在 build/tmp/deploy/images/auto8676p1_64 目录中。表 1-9 列出了主要的镜像文件及其说
明。 
表 1-9. 镜像文件说明 
文件名 分区 说明 
MT6897_Android_scatter.xml N/A 分区表，由 ptgen-v2.bb 编译出来。 
download_agent/DA_BR.bin N/A download agent，用于烧录。由 collect.bb 编译出来。 
bl2.img preloader_a 
preloader_b bootloader，由 lk2.bb 编译出来。 
modem.img modem_a modem 固件，由 modem.bb 编译出来。 
spmfw.img spmfw_a System Power Management 固件，由 collect.bb 编译出来。 
mcf_ota.img mcf_ota_a 由 collect.bb 编译出来。 
audio_dsp.img audio_dsp_a audio DSP 固件，由 collect.bb 编译出来。 
pi_img.img pi_img_a 由 collect.bb 编译出来。 
dpm.img dpm_a 由 collect.bb 编译出来。 
scp-fit.img scp_a System Companion Processor 固件，由 tinysys-scp.bb 编译出来。 
ccu.img ccu_a Camera Control Unit 固件，由 collect.bb 编译出来。 
vcp.img vcp_a vcp firmware，由 tinysys-vcp.bb 编译出来。 
sspm.img sspm_a Secure System Power Manager 固件，由 collect.bb 编译出来。 
mcupm.img mcupm_a power/performance manager 固件，由 collect.bb 编译出来。 
gpueb.img gpueb_a GPU firmware，由 tinysys-gpueb.bb 编译出来。 
apusys.img apusys_a APU firmware，由 tinysys-apusys.bb 编译出来。 
boot.img boot_a 
Linux kernel，fit 格式，包含 kernel img、dtb 和 initramfs。由
linux-mtk-extension_6.1.bb 编译出来。其中 initramfs 由 core-
image-minimal-initramfs.bb 编译出来。 
tee.img tee_a ATF，由 collect.bb 编译出来。 
connsys_bt.img connsys_bt_a 保留分区，实际未使用。由 collect.bb 编译出来。 
connsys_wifi.img connsys_wifi_a 保留分区，实际未使用。由 collect.bb 编译出来。 
connsys_gnss.img connsys_gnss_a GNSS 固件，由 collect.bb 编译出来。 
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
文件名 分区 说明 
logo.img logo_a logo，由 makelogo.bb 编译出来。 
system.ext4 system 根文件系统，由 mtk-core-image-auto8676.bb 编译出来。 
userdata.ext4 userdata /data 分区，由 mkusrdata.bbclass 编译出来。 
 
 烧录软件 
烧录软件需要用到 Type-C 线和 SP_Flash_Tool 工具。如果没有 SP_Flash_Tool 工具，请访问 Online7网站下载。打开
网页后，搜索 SP_Flash_Tool，下载最新版本，如图 1-4 所示。下载完成后解压下载的压缩包。 
 
 
图 1-4. 下载 SP_Flash_Tool 
 
首先用 Type-C 线将平台与电脑连接起来。然后双击 SP_Flash_Tool_V6/SPFlashToolV6.exe 打开烧录工具。第一步选
择 Download-XML 文件，点击右上角的 choose 按钮，选择软件包下面的 download_agent/flash.xml 文件。第二步在
Download 按钮下方的下拉框中选择 Format All + Download。效果如图 1-5 所示。第三步，确保平台处于断电状态。
第四步，点击 Download 按钮。第五步，按住 download key（KPCOL0，SW907）不松手，平台上电，这时会自动开
始烧录，如图 1-6 所示。此时可以松开按键。 
如果有遇到错误弹窗，请先将平台断电，点击 Stop 按钮退出下载模式。确保平台掉电完毕后，再尝试烧录。  
 
                                                                 
 
7 https://online.mediatek.com/apps/tool/  
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
 
图 1-5. 加载 flash.xml 
 
 
图 1-6. 软件烧录 
 
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
 编译 SDK 
使用如下指令编译 SDK。与编译软件相比，bitbake 指令多了-c populate_sdk 选项。 
cd path/to/codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676/conf/templates/auto8676p1_64 
source meta/poky/oe-init-build-env 
bitbake mtk-core-image-auto8676 -c populate_sdk 
 
 使用 SDK 
SDK 编译成功后，安装包在 build/tmp/deploy/sdk 目录。对于 MT8676 Yocto5.0 来说，安装包的名字是 poky-glibc-
x86_64-mtk-core-image-auto8676-aarch64-auto8676p1_64-toolchain-5.0.sh。 
安装过程如图 1-7 所示，首先清空环境变量 LD_LIBRARY_PATH，如果不清空会导致 SDK 设置失败。第二步启动安装
脚本，输入 SDK 的安装目录，输入 y 确认安装，等待安装完成。按照安装脚本的提示，执行设置脚本，现在就可
以使用 SDK 安装好的工具链了。 
 
图 1-7. 安装 SDK 
 
SDK 安装目录结构如图 1-8 所示，根目录包含环境设置脚本、版本信息等文件。sysroots/aarch64-poky-linux 目录包
含 MT8676 Yocto 编译出来的所有可执行文件、头文件、动态库、静态库等文件，方便第三方在非 Yocto 环境下进
行开发。这个目录下面的 ELF 文件是 aarch64 格式。sysroots/x86_64-pokysdk-linux 目录包含一些本地工具，例如
aarch64 工具链放在 sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux 目录。还有很多其他版本的工具链可
以使用，例如 aarch64-pokymllib32-linux、arm-poky-linux 等。 
 
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
 
图 1-8. 目录结构 
 
1.4 Yocto 客制化 
 常用变量 
表 1-10 列出了一些常用变量，这些变量在编写 bb 的时候会经常用到。Yocto 的变量非常多，要玩转 Yocto 仅看表 
1-10 是远远不够的。如果需要查看所有变量的值，请参考 1.6.3 章节。 
 
表 1-10. Yocto 常用变量 
变量名 说明 
MACHINE 指定目标设备。一般在 local.conf 定义。 
MTK_PROJECT 指定项目名字。一般在 <machine>.conf 定义。 
PN 包名，即 pacakge name。一般从文件名解析出来，以 foo_2.6.bb 为例，PN=foo。 
PV 
版本号，即 package version。一般从文件名解析出来，以 foo_2.6.bb 为例，PV=2.6。如果文件名
没有指定版本号，例如 bar.bb，则 PV 取默认值 1.0。也可以在 bb 中直接设定 PV。 
SRC_URI 源代码 URI。支持 file、http、https、git 等协议。 
WORKDIR bb 工作目录。bb 所有的任务都在工作目录中完成。 
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
变量名 说明 
S 源代码目录。do_fetch 任务会将 SRC_URI 变量指定的源代码下载到 S 目录。 
B 编译目录。do_compile 任务会在此目录中工作。 
D 安装目录。do_install 任务会将编译之后的产物安装到此目录。 
 
 bb 文件的基本结构 
bb 文件是 Bitbake 配方文件（recipe），bb 文件描述了如何构建特定软件包，包括构建依赖、从哪里获取源代码、
如何打补丁、如何编译和安装软件以及如何打包。bb 文件由一系列的变量定义和可执行任务组成。关于 bb 文件的
语法和运算符，请参考 Bitbake 文档
8
。 
meta-skeleton9提供了若干个示例 bb，以 hello_1.0.bb10为例，介绍 bb 文件的基本结构。首先，定义了软件包的一
些基本信息，例如描述、分组、license 以及 license 文件的校验和。这些信息通过一些标准变量告诉 Bitbake 构建
引擎。 
DESCRIPTION = "Simple helloworld application" 
SECTION = "examples" 
LICENSE = "MIT" 
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302" 
 
通过 SRC_URI 变量指定从哪里下载源代码，通过 S 变量指定源代码的位置。Bitbake 支持多种协议下载源代码，例
如 file、git、http、https、ssh、s3 等等。这里使用了 file 协议。对于 file 协议，Bitbake 会在变量 FILESEXTRAPATHS
指定的路径中寻找文件。与 PATH 环境变量类似，FILESEXTRAPATHS 变量由若干个以冒号分隔的路径组成。 
SRC_URI = "file://helloworld.c" 
 
S = "${WORKDIR}/sources" 
UNPACKDIR = "${S}" 
 
do_compile 任务用于编译软件，Bitbake 默认提供了一个空的实现，所以需要重写此任务。Bitbake 任务的名字必须
以“do_”开头，支持 shell 任务或 python 任务。这里定义的 do_compile 是 shell 任务。在 shell 任务中，可以通过
“${VAR_NAME}”的形式引用 bb 文件定义的变量。 
do_compile() { 
 ${CC} ${LDFLAGS} helloworld.c -o helloworld 
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

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Yocto System 
User Manual 
Confidential B 
do_install 任务用于安装软件，软件必须安装到 ${D} 目录下。Bitbake 定义了一系列用于安装不同文件的变量，例如
可执行文件安装到${bindir} 下，动态库安装到${libdir}下，配置文件安装到${sysconfdir} 下。 
do_install() { 
 install -d ${D}${bindir} 
 install -m 0755 helloworld ${D}${bindir} 
} 
 
有些时候，软件包自己维护了一套配置、编译、安装脚本，不需要在 bb 文件重新实现一套了。例如对使用
autotools 的软件包来说，可以使用标准命令“./configure && make && make install”来完成配置、编译和安装。对
于这些软件包，不需要从零开始写 do_compile 或 do_install，直接使用 Yocto 写好的即可。以 hello_2.10.bb11为例，
只需要继承 autotools-brokensep 类，就可以编译使用 autotools 的软件包，极大的减轻了编写 bb 的负担。 
DESCRIPTION = "GNU Helloworld application" 
SECTION = "examples" 
LICENSE = "GPL-3.0-only" 
LIC_FILES_CHKSUM = "file://COPYING;md5=d32239bcb673463ab874e80d47fae504" 
 
SRC_URI = "${GNU_MIRROR}/hello/hello-${PV}.tar.gz" 
SRC_URI[sha256sum] = "31e066137a962676e89f69d1b65382de95a7ef7d914b8cb956f41ea72e0f516b" 
 
inherit autotools-brokensep gettext 
 
 开机自启动 
以 1.4.2 章节介绍的 hello_1.0.bb 为基础，介绍如何开机自动运行某个程序。MT8676 Yocto 使用 systemd 作为 1 号
进程，所以首先需要写一个 service 文件。以下是 helloworld.service 示例。关于 systemd service 的更多信息，可以
参考 systemd 文档12。 
[Unit] 
Description=hello world service 
After=basic.target 
 
[Service] 
Type=oneshot 
ExecStart=/usr/bin/helloworld 
 
[Install] 
WantedBy=multi-user.target 
 
将 service 文件添加到 SRC_URI 变量中。 
SRC_URI = "file://helloworld.c file://helloworld.service" 
                                                                 
 
11 https://git.yoctoproject.org/poky/tree/meta-skeleton/recipes-skeleton/hello-autotools/hello_2.10.bb  
12 https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html  
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
由于 service 文件不需要编译，所以 do_compile 保持不变。在 do_install 任务，需要将 service 文件安装到 systemd
指定的目录中。 
do_install() { 
 install -d ${D}${bindir} 
 install -m 0755 helloworld ${D}${bindir} 
 install -d ${D}${systemd_unitdir}/system 
 install helloworld.service ${D}${systemd_unitdir}/system 
} 
 
继承 systemd 类，指定 service 的名字，开启开机自启动。代码如下。至此，开机自启动配置完成。  
inherit systemd 
SYSTEMD_PACKAGES = “${PN}” 
SYSTEMD_SERVICE:${PN} = “helloworld.service” 
 
支持开机自启动的完整版 hello_1.0.bb 如下。 
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
 
 依赖 
构建软件包时，依赖是一个很令人头疼的问题。不过 Yocto 很好地解决了这个问题。假如 foo.bb 在编译时依赖 
bar.bb 的产物，只需要在 foo.bb 添加如下代码，即把依赖的软件包追加到 DEPENDS 变量。Yocto 会保证 bar 先于
foo 编译，并且在编译 foo 时，会将 bar 安装到${D}的文件复制到 foo 的工作目录（${WORKDIR}）。这样编译 foo
时可以尽情的使用 bar 安装的文件，例如静态库、动态库、头文件等。 
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
# foo.bb 
DEPENDS += “bar” 
 
如果 foo.bb 在运行时依赖 bar.bb，需要在 foo.bb 添加如下代码。注意变量 RDEPENDS 开头的“R”表示运行时，并
且还多了一个“:${PN}”，这个不能少。 
# foo.bb 
RDEPENDS:${PN} += “bar” 
 
 树外驱动 
编译树外驱动比较特殊，因为需要使用 kernel 和其他树外驱动编译出来的符号，同时自己编译出来的符号也要给
其他树外驱动使用。考虑到 MT8676 的树外驱动比较多，为了避免出现较多的依赖问题，这里给出了一个模板。编
译树外驱动需要 kernel 符号，所以依赖 virtual/kernel。 
DESCRIPTION = "sample out of tree driver" 
LICENSE = "GPL-2.0-only" 
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/GPL-2.0-only;md5=801f80980d171dd642561083
3a22dbe6" 
DEPENDS = "virtual/kernel" 
 
编译树外驱动必须继承 module 类。这里使用了 fog 协议来获取源代码，关于 fog 协议的介绍请参考 1.4.7 章节。
kerel-toolchian.inc 用于设置工具链。 
# for out-of-tree module bb, must inherit *module* 
inherit fog module 
SRC_URI = "fog://src/kernel/modules/module-name;name=module-name" 
SRCREV_module-name = "${AUTOREV}" 
 
require conf/common/kernel-toolchain.inc 
 
S = "${WORKDIR}/git" 
MODULE = "${S}" 
LINUX_SRC = "${STAGING_KERNEL_DIR}" 
MODULE_NAME = "gpio_sap_ctrl" 
 
变量 EXTRA_SYMBOLS 用于指定额外的符号文件，MT8676 Linux Kernel 分为 common 和 device module 两部分，所以
EXTRA_SYMBOLS 默认添加了 device module 的符号文件。如果依赖其他树外驱动的符号，首先将模块名追加到
DEPENDS 变量，然后按照示例，把符号文件的路径追加到 EXTRA_SYMBOLS 变量。 
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
# device_module symvers 
EXTRA_SYMBOLS += "${TMPDIR}/work-shared/${MACHINE}/device-module-build-artifacts/Module.sy
mvers" 
 
# if you moudle need other out-of-tree module symbol, please append DEPENDS & EXTRA_SYMBOL
S. below is sample. 
# DEPENDS += "oot-module1 oot-module2" 
# EXTRA_SYMBOLS += "${RECIPE_SYSROOT}${includedir}/oot-module1/Module.symvers" 
# EXTRA_SYMBOLS += "${RECIPE_SYSROOT}${includedir}/oot-module2/Module.symvers" 
 
如果 Makefile 文件需要更多的变量，可以通过 export 指令传递给 Makefile。同时，不需要自己编写 do_compile 任
务和 do_install 任务。module 类会处理好。 
# export Makefile required variables. If need more, please add here. 
export M="${MODULE}" 
export EXTRA_SYMBOLS 
export KBUILD_EXTRA_SYMBOLS 
 
# no need write self do_compile / do_install function 
# module.bbclass will handle it 
 
完整的模板如下： 
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

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
MT8676 Yocto System 
User Manual 
Confidential B 
 image bb 
image bb 用于生成根文件系统。以 core-image-minimal.bb
13
为例介绍。image bb 必须继承 core-image 类。通过
IMAGE_INSTALL 变量指定根文件系统需要安装的软件包，如果想安装更多的软件包到根文件系统，只需要追加软件
包到 IMAGE_INSTALL 变量即可。MT8676 的 image bb 是 mtk-core-image-auto8676.bb。 
SUMMARY = "A small image just capable of allowing a device to boot." 
 
IMAGE_INSTALL = "packagegroup-core-boot ${CORE_IMAGE_EXTRA_INSTALL}" 
 
IMAGE_LINGUAS = " " 
 
LICENSE = "MIT" 
 
inherit core-image 
 
IMAGE_ROOTFS_SIZE ?= "8192" 
IMAGE_ROOTFS_EXTRA_SPACE:append = "${@bb.utils.contains("DISTRO_FEATURES", "systemd", " + 
4096", "", d)}" 
 
根文件系统镜像的文件格式在<machine>.conf 指定。以 auto8676p1_64.conf 为例，根文件系统镜像的格式是 ext4。 
# auto8676p1_64.conf 
IMAGE_FSTYPES ?= "ext4" 
 
 fog 简介 
fog 是“file or git”的缩写，是一个 MediaTek 扩展的源代码下载协议。fog 是以 git 仓库为单位，将整个仓库抓到
${WORKDIR}。fog://协议会根据一些规则将源代码的下载协议转换为 file://或 git://协议。 
 
fog 示例如下。首先要继承 fog 类，然后将 fog://协议格式的源代码路径追加到 SRC_URI 变量，name 参数是必须设
置的，用于设置模块的名字。SRC_REV 变量用于指定模块的版本，一般设置为${AUTOREV}。最后设置 S 变量，必
须设置为“${WORKDIR}/git”或 git 目录的子目录，取决于编译入口在哪一个目录。 
inherit fog 
SRC_URI = "fog://src/path;name=module-name" 
SRCREV_module-name = "${AUTOREV}" 
 
S = "${WORKDIR}/git" 
 
fog 支持多个 git 仓库，示例如下。与单个 git 仓库相比，必须指定 destsuffix 参数，用于指定仓库所在的子目录。
SRC_URI 也要设置多个。多了 SRCREV_FORMAT，用于设置 SRCREV 格式。 
                                                                 
 
13 https://git.yoctoproject.org/poky/tree/meta/recipes-core/images/core-image-minimal.bb  
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
inherit fog 
SRC_URI="fog://src/path;name=module-name1;destsuffix=git/sub-dir1" 
SRC_URI="fog://src/path;name=module-name2;destsuffix=git/sub-dir2" 
SRC_URI="fog://src/path;name=module-name3;destsuffix=git/sub-dir3" 
SRCREV_module-name1 = "${AUTOREV}" 
SRCREV_module-name2 = "${AUTOREV}" 
SRCREV_module-name3 = "${AUTOREV}" 
SRCREV_FORMAT="module-name1_module-name2_module-name3" 
 
S = "${WORKDIR}/git" 
 
 创建 project 
表 1-11 列出了创建一个 project 需要新建的文件，建议从 auto8676p1_64 复制，然后修改相关文件。也可以使用一
键创建脚本 meta/meta-mediatek-mt8676/scripts/create_project.sh，按照提示操作即可。 
 
表 1-11. 创建 project 
项目 示例 
machine.conf meta/meta-mediatek-mt8676/conf/machine/auto8676p1_64.conf 
templates meta/meta-mediatek-mt8676/conf/templates/auto8676p1_64/bblayers.conf.sample 
meta/meta-mediatek-mt8676/conf/templates/auto8676p1_64/local.conf.sample 
dts src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/auto8676p1_64.dts 
defconfig src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/configs/auto8676p1_64_defconfig 
分区表 meta/meta-mediatek-mt8676/recipes-bsp/ptgen/files/ auto8676p1_64/partition_table.csv 
ko table meta/meta-mediatek-mt8676/recipes-
kernel/linux/ko_order_table/auto8676p1_64/ko_order_table.csv 
fstab meta/meta-mediatek-mt8676/recipes-core/base-files/base-files/auto8676p1_64/fstab 
collect-bins prebuilt/bsp/collect-bins/mt8676/auto8676p1_64 
dws src/devtools/dct/dws/mt6897/auto8676p1_64.dws 
lk2 src/bsp/lk2/project/auto8676p1_64.mk 
scp src/tinysys/mt8676/scp/project/RV55_A/mt6897/auto8676p1_64 
 
 创建 meta layer 
Yocto meta layer 本质上是一个包含 conf/layer.conf 文件的目录，目录名字建议以“meta-”开头，例如 meta-foo、
meta-bar 等等。所以创建 meta layer 首先需要创建 conf/layer.conf 文件。以创建 meta-foo 为例，示例 layer.conf 如
下。BBPATH 将当前 layer 路径添加到 Bitbake 搜索路径中，BBFILES 为指定 bb 文件所在的路径，
BBFILE_COLLECTIONS 为当前 layer 指定一个唯一的标识符，BBFILE_PATTERN 设置 bb 文件的目录前缀，
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
BBFILE_PRIORITY 设置 bb 文件的优先级，数字越大优先级越高。如果两个 layer 有相同名字的 bb，则使用优先级高
的。LAYERSERIES_COMPAT用于设置 layer 支持的 Yocto 版本。 
# We have a conf and classes directory, add to BBPATH 
BBPATH .= ":${LAYERDIR}" 
 
# We have a recipes-* directories, add to BBFILES 
BBFILES += "${LAYERDIR}/recipes-*/*/*.bb \ 
        ${LAYERDIR}/recipes-*/*/*.bbappend" 
 
BBFILE_COLLECTIONS += "foo" 
BBFILE_PATTERN_foo = "^${LAYERDIR}/" 
BBFILE_PRIORITY_foo = "10" 
 
LAYERSERIES_COMPAT_foo = "scarthgap" 
 
图 1-9 展示了 meta layer 的目录结构。除 conf/layer.conf 文件外，classes 目录用于存放 bbclass，conf/machine 和
conf/templates 目录用于存放 project 相关的文件。“recipes-”开头的目录用于存放 bb 和 bbappend 文件，这些目
录的结构取决于 BBFILES 变量，一般设置为 “${LAYERDIR}/recipes-*/*/*.bb ${LAYERDIR}/recipes-*/*/*.bbappend”。 
 
 
图 1-9. meta layer 目录结构 
 
1.5 Yocto Build Mode 
Yocto 没有定义 build mode，默认只能编译出一种软件。但是在项目周期中，需要在不同的阶段使用不同的软件，
MediaTek 针对 DEV/SQC/MP 提出了类似 Android 的解决方案。表 1-12 列出了不同 build mode 之间的差异。 
 
表 1-12. Yocto build mode 
Build Mode Android Config Setting Yocto Config Setting Usage 
user 
1. Disable debug configs 
(TFA/LK/Preloader/Kernel/TEE/Fwk/APK/….) 
2, Disable debug features (AEE/UART/ADB/…) 
1. Disable debug configs 
(TFA/LK2.0/Kernel/TEE/APP/….) 
2. Disable debug features 
(AEE/UART/ADB/…) 
1. Products MP 
2. SQC 
performance test 
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
Build Mode Android Config Setting Yocto Config Setting Usage 
userdebug 
1. Disable debug configs 
(TFA/LK/Preloader/Kernel/TEE/Fwk/APK/….) 
2. Enable debug features (AEE/UART/ADB/…) 
1. Disable debug configs 
(TFA/LK2.0/Kernel/TEE/APP/….) 
2. Enable debug features 
(AEE/UART/ADB/…) 
1. SQC main test 
2. RD DEV/UT/IT 
test 
eng 
1. Enable debug configs 
(TFA/LK/Preloader/Kernel/TEE/Fwk/APK/….) 
2. Enable debug features (AEE/UART/ADB/…) 
1. Enable debug configs 
(TFA/LK2.0/Kernel/TEE/APP/….) 
2. Enable debug features 
(AEE/UART/ADB/…) 
1. RD debug 
 
 使用方法 
MediaTek Yocto 使用环境变量 TARGET_BUILD_VARIANT 来区分三种 build mode。环境变量的值可以设置为 user、
userdebug 或 eng，分别用于编译出 user 软件、userdebug 软件、eng 软件。如果没有设置环境变量，或者值不是
user、userdebug、eng 中的一个，那么会编译出 userdebug 软件。 
为了在 bb 文件中区分这三种模式，MediaTek 基于环境变量 TARGET_BUILD_VARIANT 的值，向变量
DISTRO_FEATURES 和 OVERRIDES 追加不同的值，如表 1-13 所示。 
 
表 1-13. Build variant 
TARGET_BUILD_VARIANT DISTRO_FEATURES OVERRIRES 
user variant-user variant-user 
userdebug variant-userdebug variant-userdebug 
eng variant-eng variant-eng 
 
以下是编译 eng 软件的指令，如果需要编译 user 或 userdebug 软件，只需要更改环境变量 TARGET_BUILD_VARIANT
的值即可。 
cd path/to/codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676/conf/templates/auto8676p1_64 
export TARGET_BUILD_VARIANT=eng 
source meta/poky/oe-init-build-env 
bitbake mtk-core-image-auto8676 
 
 适配 
模块需要对 build mode 进行适配，才能编译出真正的 user、userdebug 或 eng 软件。首先需要定义这三种模式的区
别，然后针对性的修改 bb 文件去适配。这里展示两个例子，介绍如何适配。 
 
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
以 linux kernel（linux-mtk-extension_6.1.bb）为例，linux kernel 使用 defconfig 进行配置。user 软件只需要使用
project defconfig 文件，userdebug 软件使用 project defconfig 和 userdebug.config 文件，eng 软件使用 project 
defconfig 和 eng.config 文件。相关适配代码如下。变量 VARIANT_CONFIG 定义了额外的 config 文件，默认是空，如
果使用 userdebug，则设置为 userdebug.config，eng 类似。这里使用了 Yocto 的条件变量语法。最后在
do_configure 任务之前（prepend）追加一段代码，使用脚本 merge_config.sh 合并两个 config 文件。 
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
 
以 adb（android_tools_5.1.1.r37.bbappend）为例。user 软件需要关闭 adb，userdebug 和 eng 软件打开 adb。相关
适配代码如下。这里借用 Yocto 条件变量语法，仅在 user 软件时，将 SYSTEMD_SERVICES 和 FILES 变量清空，并向
do_install 任务追加删除相关文件的指令。 
# variant user disable adbd 
SYSTEMD_SERVICE:${PN}-adbd:variant-user = "" 
FILES:${PN}-adbd:variant-user = "" 
do_install:append:variant-user() { 
    rm -rfv "${D}${bindir}/adbd" 
    rm -rfv "${D}${systemd_unitdir}/system/android-tools-adbd.service" 
} 
 
# avoid build fail 
INSANE_SKIP:${PN} += "installed-vs-shipped" 
 
1.6 Yocto 调试技巧 
 build 目录结构 
软件编译完成后，目录结构如图 1-10 所示。与原始的目录结构相比，多了 build、downloads、sstate-cache 目录。
build 目录由变量 TOPDIR 指定，包含编译中间文件、镜像、rpm 包等文件。关于 downloads 目录和 sstate-cache，
请参考 1.6.4 章节。 
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
 
图 1-10. 编译完成后的目录结构 
 
build 目录包含非常多的信息，熟悉 build 目录有助于调试 Yocto。变量 TOPDIR 指向 build 目录。表 1-14 列出了
build 目录常用的文件和目录。 
表 1-14. build 目录常用文件和目录 
文件或目录 说明 
build/conf/local.conf 从 local.conf.sample 复制而来。 
build/conf/bblayers.conf 从 bblayers.conf.sample 复制而来。 
build/conf/templateconf.cfg 包含环境变量 TEMPLATECONF 的值。 
build/tmp/deploy/images/<project> 包含用于烧录的镜像文件。 
build/tmp/deploy/rpm 包含 bb 编译之后生成的 rpm 包。 
build/tmp/deploy/license 子目录的格式是<PN>，包含对应 bb 的 license 信息。 
build/tmp/sysroots-components 子目录的格式是<ARCH>/<PN>，包含对应 bb 安装到 rootfs 的文件。 
build/tmp/work 
子目录的格式是<ARCH>/<PN>/<PV>，对应 bb 的工作目录。bb 的所有任务
都是在工作目录完成的。具体请参考 1.6.2 章节。 
build/tmp/work-shared 共享的工作目录。如果 bb 之间需要共享文件，可以将文件放在此目录中。 
 
 工作目录常用子目录 
工作目录在 build/tmp/work 下，bb 的所有任务都是在工作目录完成的，变量 WORKDIR 指向 bb 的工作目录。表 
1-15 列出了工作目录常用子目录。借助工作目录下的文件，可以快速厘清问题。例如 do_compile 执行失败，可以
检查 temp/run.do_compile 和 log.do_compile 文件；例如确认文件被打包到哪一个软件包，可以检查 packages-split
目录。 
 
 
 
 
 
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
表 1-15. 工作目录常用子目录 
文件或目录 说明 
git 
存放 SRC_URI 变量指定的源代码。也有 bb 将源代码放在${PN}-${PV}子目录。S 变量指向
此目录。 
build 存放编译中间文件和最终文件的目录。B 变量指向此目录。有时候 B 变量等于 S 变量。 
recipe-sysroot 存放 DEPENDS 变量指定的软件包的文件。编译时会在此目录下寻找头文件和库。  
recipe-sysroot-native 
与 recipe-sysroot 变量类似，存放 DEPENDS 变量指定的“*-native”软件包的文件，编译
时会用到的本地工具，例如交叉编译器。 
image 存放 do_install 任务安装的文件，D 变量指向此目录。 
package 存放最终打包的文件。 
packages-split 
与 package 目录类似，但会按照包名划分子目录。一般来说，除默认的 ${PN}包，Yocto
默认还会添加${PN}-dbg、${PN}-dev、${PN}-doc 等几个包。 
sysroot-destdir 
此目录的文件是 image 目录的子集，如果被其他 bb 依赖，则此目录的文件会复制到对
方 bb 的 recipe-sysroot 或 recipe-sysroot-native 目录。 
temp 
包含任务脚本和运行日志。以 do_compile 任务为例，run.do_compile 是任务脚本，
log.do_compile 是任务日志。log.task_order 文件记录了任务的运行时间和运行顺序。 
 
 打印变量值 
Yocto 的变量非常多，而且 yocto 的变量运算符非常的灵活，同时配置文件非常的多，这导致很难确定一个变量的
最终取值。我们可以借用 bitbake 的“-e”选项，将所有变量的变化过程以及最终的值打印出来，可以极大的 提高
调试的效率。以 systemd 的 WORKDIR 变量为例。执行如下命令，将 systemd 的环境变量保存到 systemd.env 文件
中。因为变量太多了，重定向保存到文件便于分析。 
bitbake systemd -e > systemd.env 
 
打开 systemd.env 文件，可以搜索到如下内容。可以看到，WORKDIR 变量总共有 2 次操作，第一次是在
bitbake.conf 的第 407 行设置变量值，第二次是在 documentation.conf 的第 467 行设置标签 doc 的值。最后打印了
变量 WORKDIR 的值，借助这个方法，可以很轻松的定位哪一个配置文件对变量做了什么操作。  
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
 
 加速 Yocto 编译 
Yocto 从零开始编译非常的慢，主要慢在两个地方。第一，Yocto 会下载非常多的源码包和代码仓库。第二，很多
没有修改的软件包也会从零开始编译。可以保存 Yocto 编译完成后生成的中间文件，来加速下一次编译。Yocto 编
译完成后，会生成 downloads 和 sstate-cache 目录。downloads 目录包含下载的源码包和代码仓库，由变量 DL_DIR
指定；sstate-cache 目录包含编译缓存，由变量 SSTATE_DIR 指定。 
 
在第一次编译之前，创建 build/conf/site.conf 文件，添加如下代码。这句代码会将下载的代码仓库打包成一个压缩
包。编译完成后，将 downloads 和 sstate-cache 目录复制保存一份。例如分别保存到
“/path/to/your/saved/downloads/”目录和“/path/to/your/saved/sstate-cache/”目录。 
BB_GENERATE_MIRROR_TARBALLS = "1" 
 
第二次编译之前，创建 build/conf/site.conf 文件，添加如下代码，SOURCE_MIRROR_URL 指向保存的 downloads 目
录，SSTATE_MIRRORS 指向保存的 sstate-cache 目录（注意最后有一个固定的 PATH）。如果 bb 文件没有修改，
Yocto 会直接从 SSTATE_MIRRORS 目录拿上一次编译好的结果。如果 sstate cache 没有命中，要下载软件包编译，
Yocto 会优先从 SOURCE_MIRROR_URL 获取软件包。 
SOURCE_MIRROR_URL ?= "file:///path/to/your/saved/downloads/" 
INHERIT += "own-mirrors" 
BB_GENERATE_MIRROR_TARBALLS = "1" 
 
SSTATE_MIRRORS = "file://.* file:///path/to/your/saved/sstate-cache/PATH" 
BB_SIGNATURE_HANDLER = "OEBasicHash" 
BB_HASHSERVE = "" 
需要注意的是，bb 修改之后，sstate cache 会失效，所以 sstate cache 要定期更新。downloads 目录一般不会失效。 
如果不想使用 sstate cache，可以给 bitbake 添加“--no-setscene”选项。 
 
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
1.7 开机流程 
MT8676 Yocto 开机流程如图 1-11 所示。主要由 Bootloader、kenrel、initramfs 和 systemd 等 4 大部分组成。 
 
 
图 1-11. 开机流程 
 
 BootROM 
BootROM 是一个硬件设备（类似于 SRAM/DRAM），里面存在着一段出厂自带的不可修改的已经固化的程序。上
电之后，BootROM 开始执行内部事先已经设定好的 bootcode，加载引导程序 LK2 到 SRAM 中然后执行。主要功能
如下： 
 
• 引导加载 LK2 到 SRAM 里面执行。 
• 当检测不到有效的镜像或者代码时，BootROM 引导进入下载模式。 
• 执行一些校验工作。 
• 硬件初始化，串口，flash 等。 
 
 LK2 
LK2 即 bootloader。LK2 运行在 SRAM（SRAM 不需要初始化）中。LK2 的主要功能如下： 
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
• 初始化 DRAM，以及各种外设。 
• 加载 TF-A 并跳转到 TF-A 做初始化。 
• 加载 kernel。 
• 加载 tinysys（例如 gpueb、scp、vcp 等）。 
• 跳转到 kernel。 
 
 Kernel 
内核（Kernel）是操作系统的核心组件，它负责管理计算机硬件和软件资源，提供操作系统和应用程序的基本服
务。内核是操作系统的第一个加载，并作为整个操作系统的核心运行在内存中，控制着所有的系统资源，如
CPU，内存，输入/输出，文件系统等。内核提供了底层的服务和接口，供应用程序进行调用和使用。  
 
Kernel 汇编阶段 （由 ENTRY(_stext)开始）： 
 
1. 设置为 SVC 模式，关闭所有中断。 
2. 获取 CPU ID。 
3. 验证 dtb。 
4. 创建页表项。 
5. 配置 r13 寄存器，也就是设置打开 MMU 之后要跳转到的函数。 
6. 使能 MMU。 
7. 跳转到 start_kernel，进入 C 阶段。 
 
Kernel C 阶段 （由 kernel_init 开始），主要完成硬件平台相关的初始化工作，在相关初始化结束之后执行 init 程
序。 
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
MT8676 Yocto System 
User Manual 
Confidential B 
kernel_init
设置体系结构相关的环境
初始化内存结构
初始化设备驱动
开启MMU、建立页表
初始化串口
.............
启动init进程
do_basic_setup
numa_default_policy
run_init_process
 
图 1-12. kernel_init 
 
 initramfs 
initramfs 是介于 kernel 和 systemd 之间的中间层，主要功能是加载一些基本的内核模块，为切换 rootfs、执行
systemd 做准备。kernel 初始化完成之后，首先运行 initramfs 下的 init 脚本。init 脚本会解析 kernel 启动参数，并
导出为 shell 环境变量。然后调用/init.d 目录下面的初始化脚本。在 MT8676 平台上，/init.d 目录下有 10-kmod、
11-partlabel、12-format、90-rootfs、99-finish 等脚本。 
10-kmod 会加载/etc/modules.list 文件指定的内核模块。/etc/modules.list 是根据 ko table 文件生成的，如果
“Vendor/Ramdisk in Normal(vendor/ramdisk)”列是 ramdisk，则/etc/modules.list 文件会包含此内核模块。关于 ko 
table 格式，请参考 1.2.4.2 章节。/etc/modules.list 应该包含一些基础内核模块，例如 UFS 驱动等。 
11-partlabel 负责解析分区的名字，并在/dev/disk/by-partlabel 下建立软链接。12-format、90-rootfs 等脚本依赖这些
软链接。 
12-format 负责格式化 nvdata、protect1、protect2 等分区。 
90-rootfs 负责挂载 rootfs 分区到/rootfs 目录。rootfs 分区由 kernel 启动参数“root=PARTLABEL=system”指定。 
99-finish 负责在/rootfs 目录挂载 procfs、sysfs、devfs，并将根目录切换到/rootfs。最后启动 systemd。 
 
 systemd 
systemd 是 Linux 系统上的一种系统和服务管理程序。相比于传统的 SysvInit，systemd 提供了并行启动、依赖管
理、按需启动等现代化特性。 
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
MT8676 Yocto System 
User Manual 
Confidential B 
systemd 接管控制权后，首先执行一系列的预初始化任务，如设置默认的环境变量、初始化日志系统等。然后读取
并解析 unit 文件，这些文件位于/etc/systemd/system、/lib/systemd/system 等目录。这些文件定了服务、挂载点、
设备等资源的配置 
根据 Unit 文件中的依赖关系，systemd 构建一个依赖树。然后，systemd 将尝试达到默认目标
/etc/systemd/system/default.target，这个目标由一组相互依赖的 unit 组成。systemd 会并行启动默认目标依赖的服
务，并根据依赖树确保服务按正确的顺序启动。 
 
表 1-16. 常见服务 
服务 说明 
systemd-modules-load 读取/etc/modules-load.d 下的配置文件并加载内核模块。/etc/modules-load.d/ 10-
kernel-modules.conf 文件包含 ko table 中的 vendor ko。 
systemd-udevd 负责管理设置节点的创建和移除 
android-tools-adbd ADB 守护进程 
weston Weston 桌面服务 
prop 属性服务进程。getprop 和 setprop 工具会和此服务交互。 
mdpd_8676 MDP 后台服务进程 
camerahalserver Camera 服务进程 
thermal-daemon Thermal 守护进程 
 
1.8 Yocto 常用调试工具 
表 1-17. Yocto 常用调试工具 
工具 说明 
log 
分析所有问题的第一手资料。关于 Yocto log 系统，请参考文档
MTK_Yocto_Log_Tool_Guide，此文档可以在 Online 下载。 
AEE 
发生异常时，AEE 会收集相关调试信息到 db（datafile）文件，是调试平台异常重启、kernel
异常、用户程序异常等问题的强大利器。请参考文档 MTK_Yocto_AEE_Tool_Guide，此文档
可以在 Online 下载。 
kasan 
用于调试 kernel 内存泄漏，请使用 auto8676p1_64_kasan project。除 kasan 外，还有
kmemleak、asan、valgrand 等调试内存泄漏的工具。 
ftrace 抓取内核的 trace 日志，分析性能问题。 
systemd-analyze 抓取 systemd 服务的启动时间，分析开机时间。 
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
MT8676 Yocto System 
User Manual 
Confidential B 
工具 说明 
strace 抓取程序调用的系统调用。 
 
 
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
MT8676 Yocto System 
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
# SRC0272 MT8676_Yocto_T-Box_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_T-Box_User_Manual_V1.0.pdf

SHA-256：444fcacd8f06041bd87410fcbd5cc30b252191e0a35cdbc09203d48984a3bb88

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0272.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-08-12
MT8676 Yocto T-Box User Manual 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 Liuyutian Liu 正式版 
 
  
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 T-Box ·········································································································································································· 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 T-Box 缩略词 ················································································································································· 5 
1.2 架构/进程概述 ························································································································································ 6 
 T-Box 架构 ····················································································································································· 6 
 T-Box API 说明 ·············································································································································· 6 
1.3 常见问题/故障排除 ·············································································································································· 18 
 SIM/CALL/SMS/Telephony 驻网相关 ········································································································· 18 
 Data 相关 ···················································································································································· 18 
 网络相关 ···················································································································································· 19 
 IMS 相关 ····················································································································································· 19 
附件一 附加条款 ····························································································································································· 20 
 
 
图片目录 
图 1-1. T-Box 架构 ······································································································································································ 6 
 
表格目录 
表 1-1.缩略词 ············································································································································································ 5 
表 1-2. Modem 状态及 IMEI 接口说明 ····································································································································· 6 
表 1-3. SIM 接口说明 ································································································································································ 7 
表 1-4. Telephony 网路接口说明 ·············································································································································· 8 
表 1-5. 数据接口说明 ······························································································································································ 10 
表 1-6. 电话接口说明 ······························································································································································ 12 
表 1-7. 短信接口说明 ······························································································································································ 13 
表 1-8. IMS 接口说明 ······························································································································································ 14 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
表 1-9. Ecall control 接口说明 ················································································································································· 14 
表 1-10. AT 黑名单接口说明 ··················································································································································· 17 
表 1-11. MIPC Keep alive 接口说明 ········································································································································· 17 
 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
1 T-Box 
1.1 概述 
 简单介绍 
本文介绍 Yocto T-Box 架构、API 使用及注意事项。 
 
 T-Box 缩略词 
表 1-1.缩略词 
缩略词 全称 释义 
API Application Programming Interface 应用程序编程接口 
APN Access Point Name 接入点 
T-Box Telematics-BOX 车联网控制单元 
 
 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
1.2 架构/进程概述 
 T-Box 架构 
 
图 1-1. T-Box 架构 
 
 T-Box API 说明 
1.2.2.1 Modem 状态/IMEI 接口及调用时序说明 
T-Box API 除 ML_GetModemStat，其他均需要基于 modem ready 的情况下才能正常工作。 
表 1-2. Modem 状态及 IMEI 接口说明 
接口/结构体 描述 
Int ML_GetModemStat(char *stat, uint32_t 
statlen) 
获取 modem 状态，stat 返回字串“ready”表示 modem 已正常启
动成功。 
Int ML_GetImei(char* imei, size_t imeiLen) 获取平台 IMEI 
int 返回值 On success, 0 is returned. On error, -1 is returned.  
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
1.2.2.2 SIM 接口及调用时序说明 
SIM 接口除 ML_Sim_GetCardStatus，其他均需要基于 SIM present 的情况下才能正常获取到值。 
表 1-3. SIM 接口说明 
接口/结构体 描述 
typedef enum 
{ 
    E_ML_SIM_CARD_STATE_UNKNOWN                     = 0xB01,    /**< Card 
state unknown. */ 
    E_ML_SIM_CARD_STATE_ABSENT                      = 0xB02,    /**< Card is 
absent. */ 
    E_ML_SIM_CARD_STATE_PRESENT                     = 0xB03,    /**< Card is 
present. */ 
    E_ML_SIM_CARD_STATE_ERROR_UNKNOWN               = 0xB04,    /**< 
Unknown error state. */ 
    E_ML_SIM_CARD_STATE_ERROR_POWER_DOWN            = 
0xB05,    /**< Power down. */ 
    E_ML_SIM_CARD_STATE_ERROR_POLL_ERROR            = 0xB06,    /**< 
Poll error . */ 
    E_ML_SIM_CARD_STATE_ERROR_NO_ATR_RECEIVED       = 
0xB07,    /**<  Failed to receive an answer to reset.  */ 
    E_ML_SIM_CARD_STATE_ERROR_VOLT_MISMATCH         = 
0xB08,    /**< Voltage mismatch. */ 
    E_ML_SIM_CARD_STATE_ERROR_PARITY_ERROR          = 0xB09,    /**< 
Parity error . */ 
    E_ML_SIM_CARD_STATE_ERROR_SIM_TECHNICAL_PROBLEMS= 
0xB0A,    /**< Card returned technical problems. */ 
}E_ML_SIM_CARD_STATE_TYPE_T;  /**< Card state. */ 
SIM 卡状态结构体。 
Int32_t ML_Sim_GetCardStatus(ML_SIM_CARD_STATUS_INFO_T 
*pvsSimStatus) 
获取 SIM 状态。pvsSimStatus 返回 “present” 表示 SIM 
卡在位。 
int 返回值 On success, 0 is returned. On error, -1 is 
returned. 
Int ML_SIM_GetICCID(char *iccid, size_t iccidLen) 获取 SIM 卡 ICCID。 
int 返回值 On success, 0 is returned. On error, -1 is 
returned. 
Int ML_SIM_GetMsisdn(char *msisdn, size_t msisdnLen) 获取 SIM 卡 Msisdn。 
int 返回值 On success, 0 is returned. On error, -1 is 
returned. 
Int ML_SIM_GetImsi(char *imsi, size_t imsilen) 获取 SIM 卡 IMSI。 
int 返回值 On success, 0 is returned. On error, -1 is 
returned. 
Int ML_SIM_GetMccMnc(char *mcc, size_t mccLen, char*mnc, size_t 
mncLen) 
获取 SIM 卡 mccmnc。 
int 返回值 On success, 0 is returned. On error, -1 is 
returned. 
 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
1.2.2.3 Telephony 网络接口及调用时序说明 
表 1-4. Telephony 网路接口说明 
接口/结构体 描述 
typedef enum 
{ 
    E_ML_NW_PS_UNKNOWN          = 0x00, 
    E_ML_NW_PS_ATTACHED         = 0x01, 
    E_ML_NW_PS_DETACHED         = 0x02, 
}E_ML_NW_PS_REG_STATE_TYPE_T; 
PS 网络注册状态结构体。 
typedef enum 
{ 
    E_ML_NW_CS_UNKNOWN          = 0x00, 
    E_ML_NW_CS_ATTACHED         = 0x01, 
    E_ML_NW_CS_DETACHED         = 0x02, 
}E_ML_NW_CS_REG_STATE_TYPE_T; 
CS 网络注册状态结构体。 
int ML_GetNetState( 
E_ML_NW_PS_REG_STATE_TYPE_T * ps,  
E_ML_NW_CS_REG_STATE_TYPE_T * cs  
) 
获取 CS/PS 网络注册状态。 
int 返回值 On success, 0 is returned. On error, -1 is returned. 
注意：此接口需在识卡后调用 
int32_t ML_GetOperatorCode ( 
uint8_t * op_code 
) 
获取运营商名称信息. op_code 为 1 表示 SIM 运营商是中国
联通, 为 0 表示中国移动。 
int 返回值 On success, 0 is returned. On error, -1 is returned. 
注意：此接口需在识卡后调用 
typedef enum 
{ 
    E_ML_NW_RAT_GSM                     = 0, 
    E_ML_NW_RAT_UTRAN                   = 2, 
    E_ML_NW_RAT_GSMW_EGPRS              = 3, 
    E_ML_NW_RAT_UTRANW_HSDPA            = 4, 
    E_ML_NW_RAT_UTRANW_HSUPA            = 5, 
    E_ML_NW_RAT_UTRANW_HSDPA_AND_HSUPA  = 
6, 
    E_ML_NW_RAT_E_UTRAN                 = 7, 
#ifdef SPM_TELEPHONY_NR_SUPPORT 
    E_ML_NW_RAT_NR                      = 8, 
#endif 
}E_ML_NW_RADIO_ACCESS_TYPE_T; 
网络制式类型结构体。 
int ML_GetRadioAccessType ( 
E_ML_NW_RADIO_ACCESS_TYPE_T * access_type 
) 
获取驻上网络的制式类型。 
int 返回值 On success, 0 is returned. On error, -1 is returned. 
注意：此接口需在识卡后调用 
int ML_GetSignalStrength ( 
int8_t * sig_level 
) 
 
获取信号强度等级。 sig_level: 0~4, 信号等级阈值参考 
AOSP default 划分。 
int 返回值 On success, 0 is returned. On error, -1 is returned. 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
接口/结构体 描述 
注意：此接口需在识卡后调用 
int ML_SetAirplaneMode ( 
uint8_t on_off 
) 
 
设置开关飞行模式。on_off 为 1 表示开飞行模式， on_off 
为 0 表示关飞行模式。 
int 返回值 On success, 0 is returned. On error, -1 is returned. 
注意：此接口需在识卡后调用 
typedef void 
(*ml_signal_strength_cb_t)(ML_SignalStrength 
*state); 
信号强度回调函数。 
int ML_SignalStregthInit ( 
ml_signal_strength_cb_t evt_cb 
) 
注册信号强度回调。 
int 返回值 On success, 0 is returned. On error, -1 is returned. 
typedef enum 
{ 
    E_ML_AUTO = 0, 
    E_ML_2GONLY = 1, 
    E_ML_3GONLY = 2, 
    E_ML_4GONLY = 3, 
#ifdef SPM_TELEPHONY_NR_SUPPORT 
    E_ML_5GONLY = 4, 
    E_ML_5GAUTO = 5, 
    E_ML_5G4GAUTO = 6, 
#endif 
}ml_nw_net_mode_e; 
网络模式结构体。 
int ML_SetNetMode ( 
ml_nw_net_mode_e mode 
) 
设置网络模式。 
int 返回值 On success, 0 is returned. On error, -1 is returned. 
int ML_GetNetMode ( 
ml_nw_net_mode_e * mode 
) 
获取网络模式。 
int 返回值 On success, 0 is returned. On error, -1 is returned. 
  
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
1.2.2.4 数据接口及调用时序说明 
表 1-5. 数据接口说明 
接口/结构体 描述 
typedef struct { 
unsigned char profile_idx; 
ml_apn_pdp_type_e pdp_type; 
ml_apn_auth_proto_e auth_proto; 
char apn_name[ML_APN_NAME_SIZE]; 
char username[ML_APN_USERNAME_SIZE]; 
char password[ML_APN_PASSWORD_SIZE]; 
}ml_apn_info_s 
APN 信息结构体  
profile_idx: 1 – 8 (1: 公网 ID; 2-8: 私网 ID，至多支持 7 路私网
APN) 
pdp_type: IPV4/IPV6/IPV4V6, 详情参考 ml_apn_pdp_type_e enum 
auth_proto: default/none/pap/chap/pap_chap  
apn_name: APN 名字 
int ML_APN_Get ( 
unsigned char  
profile_idx,  
ml_apn_info_s *  
apn  
) 
根据 profile_idx 获取对应的 APN 信息。 
参数： 
输入： unsigned char profile_idx  
输出： ml_apn_info_s *apn 
APN 初始化流程：  
开机识别到卡后, mtktelephonyservice 判断
/data/vendor/telephony/apn.db 是否存在，若不存在则根据
/vendor/etc/apns_conf.xml 生成/data/vendor/telephony/apn.db。
再通过卡的 mccmnc 从 apn.db 里获取 SIM 卡的 APN，设定 APN
到 modem。 
注意： 
此接口需在识卡后调用，即 ML_Sim_GetCardStatus() 返回
present 后。 
int ML_APN_Set ( 
const ml_apn_info_s * apn 
) 
设定 APN 到 modem 和 APN database 
(/data/vendor/telephony/apn.db) 
参数： 
输入：const ml_apn_info_s * apn 
  
注意：此接口需在识卡后调用 
int ML_DataCallInit ( 
ml_data_call_evt_cb_t evt_cb 
) 
注册 data call 状态变化 callback 函数，当 data call 状态发生变化
时回调 evt_cb 函数。 
参数:  
输入： ml_data_call_evt_cb_t evt_cb 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
接口/结构体 描述 
int ML_DataCallStart ( 
const ml_data_call_s * data_call,  
ml_data_call_error_e * err ) 
建立公网/私网 PDN 连接。 
同步接口，下发建立 PDN 命令到 modem，modem 返回后，此
接口才返回。 
参数： 
输入： const ml_data_call_s * data_call 
输出： ml_data_call_error_e * err  
int ML_DataCallStop ( 
char profile_idx,  
ml_data_call_ip_family_e ip_family,  
ml_data_call_error_e * err ) 
 
断开公网/私网 PDN 连接。 
同步接口，下发建立 PDN 命令到 modem，modem 返回后，此
接口才返回。 
参数： 
输入： char profile_idx 
输入： ml_data_call_ip_family_e ip_family  
输出： ml_data_call_error_e * err  
int ML_DataCallStart_Ext ( 
const ml_data_call_s * data_call,  
ml_data_call_error_e * err ) 
建立公网/私网 PDN 连接。 
异步接口，下发建立 PDN 命令后直接返回，不等 modem 执行结
果。建立 PDN 的状态通过 ML_DataCallInit 注册的 callback 函数回
调给 APP。 
参数： 
输入： const ml_data_call_s * data_call 
输出： ml_data_call_error_e * err  
int ML_DataCallStop_Ext ( 
char profile_idx,  
ml_data_call_ip_family_e ip_family,  
ml_data_call_error_e * err ) 
 
断开公网/私网 PDN 连接。 
异步接口，下发断开 PDN 命令后直接返回，不等 modem 执行结
果。断开 PDN 的状态通过 ML_DataCallInit 注册的 callback 函数回
调给 APP。 
参数： 
输入： char profile_idx 
输入： ml_data_call_ip_family_e ip_family  
输出： ml_data_call_error_e * err  
int ML_getDataCallReason ( 
int32_t profile_idx,  
ML_DataCallFailCause * reason ) 
 
PDN 建立失败时，获取 failcause。 
参数： 
输入： profile_idx 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
接口/结构体 描述 
输入/输出： reason   
Int ML_DataCallInfoGet( 
char profile_idx, 
ml_data_call_ip_family_e ip_family, 
ml_data_call_info_s *info, 
ml_data_call_error_e *err 
) 
根据 profile_idx, ip_family  
 
参数: 
输入： char profile_idx 
输入：ml_data_call_ip_family_e ip_family 
输出： ml_data_call_info_s *info 
输出： ml_data_call_error_e *err 
  
1.2.2.5 电话接口及调用时序说明 
电话接口均需要基于网络已注册的情况下调用。 
表 1-6. 电话接口说明 
接口/结构体 描述 
typedef struct { 
    int32_t                       CallId; 
    char                        PhoneNum[32]; 
    E_ML_VCALL_STATE_TYPE_T     State; 
    int32_t             call_end_reason; 
} ML_VCALL_INFO_T; 
电话信息结构体。 
CallId: 当前电话 index; 
PhoneNum[32]: 对端电话号码; 
State: 电话状态; 
call_end_reason: 电话挂断; 
typedef void (*ML_VCALL_MSGCB_T) ( 
    ML_VCALL_INFO_T       *pvsMsg); 
电话回调函数。 
Int32_t 
ML_VcallInit(ML_VCALL_MSGCB_T 
cb_func) 
注册电话回调函数。 
来电时触发回调函数，来电信息通过回调函数返回。 
参数： 
输出： ML_VCALL_MSGCB_T cb_func; 
Int ML_VcallStart(const char 
*PhoneNumber) 
拨出电话。 
参数： 
输入： const char *PhoneNumber; 
Int ML_VcallAnswer(void) 接听电话。 
Int ML_VcallEnd (void) 挂断电话。 
 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
1.2.2.6 短信接口及调用时序说明 
短信接口均需要基于网络已注册的情况下调用。 
表 1-7. 短信接口说明 
接口/结构体 描述 
typedef enum { 
    E_ML_SMS_FORMAT_GSM_7BIT        = 0, 
    E_ML_SMS_FORMAT_BINARY_DATA     = 1, 
    E_ML_SMS_FORMAT_UCS2            = 2, 
    E_ML_SMS_FORMAT_IRA             = 3, 
   }E_ML_SMS_FORMAT_T; 
短信格式枚举定义。 
typedef struct { 
    E_ML_SMS_FORMAT_T       format; 
    char                    PhoneNum[ML_SMS_MAX_ADDR_LENGTH];  
    int32_t                   SmsDataLen; 
    char                    SmsData[ML_SMS_MAX_MT_MSG_LENGTH]; 
} ML_SMS_INFO_T; 
短信信息结构体. 
typedef void (*ML_SMS_RXMSGCB_T) ( 
    ML_SMS_INFO_T       *pvsMsg 
); 
短信回调函数. 
Int ML_SmsInit(ML_SMS_RXMSGCB_T cb_func) 注册短信回调函数. 
接收短信时触发回调函数，短信信息通过回调函
数返回。 
参数： 
输出： ML_SMS_RXMSGCB_T cb_func; 
Int32_t ML_Sms_Sent(const ML_SMS_INFO_T *pvsSms) 发送短信. 
异步接口，发送短信请求发送后会异步等待
modem 返回响应信息，不会卡住线程。 
参数： 
输入： const ML_SMS_INFO_T *pvsSms; 
 
  
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
1.2.2.7 IMS 接口及调用时序说明 
表 1-8. IMS 接口说明 
接口/结构体 描述 
Int ML_EnableIms(uint8_t on_off) 开启/关闭 IMS 功能 
传入参数： on_off 为 1 表示开启 IMS 功能。 
On_off 为 0，表示关闭 IMS 功能。 
Int ML_GetImsRegState(int8_t 
*reg_state ) 
获取 IMS 注册状态 
传出参数 reg_state 值为 1，表示 IMS 注册上，reg_state 值为 0 则表示
IMS 没有注册上。 
 
1.2.2.8 Ecall 接口及调用时序说明 
基于《Ecall Overview》文档中 ecall overall sequence 里的 ECALL 相关的 RIL Request，将以下 API 添加进 MT8676。 
表 1-9. Ecall control 接口说明 
接口/结构体 描述 
typedef struct { 
    int32_t call_id; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
}ml_ecall_set_msd; 
设置 MSD 时传入结构体参数定义。 
typedef struct { 
    int32_t arg_num; 
    int32_t type; 
    char address[128]; 
}ml_ecall_set_num; 
设置 test number 及 reconfig number 时传入结构体参数定
义。 
typedef enum { 
    ML_EMER_CAT_MANUAL_ECALL = 1, 
    ML_EMER_CAT_AUTO_ECALL   = 2, 
}ml_ecall_category; 
发生 Ecall 类别的结构体。 
typedef enum { 
    ML_ECALL_TEST        = 1, 
    ML_ECALL_EMERGENCY   = 2, 
    ML_ECALL_RECONFIG    = 3, 
}ml_ecall_variant; 
Ecall 类型的结构体。 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
接口/结构体 描述 
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
Ecall 通话的网络制式结构体。 
typedef struct{ 
    ml_ecall_category   ecall_cat; 
    ml_ecall_variant   ecall_variant; 
    char address[20]; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
    ml_ecall_domain domain; 
}ml_ecall_req_msg; 
请求拨出 Ecall 时传入结构体参数定义。 
typedef struct{ 
    int32_t data1; 
    int32_t data2; 
    int32_t data3; 
    int32_t data4; 
}ml_ecall_pri; 
Ecall 优先级参数结构体。 data1>data2>data3>data4。传入
参数应为 1 2 3 4，含义分别为:  
1： 客户设定的 Ecall URI 
2： USIM 保存的 Ecall URI 
3：客户设定的 ECall 号码 
4：USIM 保存的 Ecall 号码 
typedef enum{ 
    E_ML_ECALL_SENDING_START = 1, 
    E_ML_ECALL_SENDING_MSD = 2, 
    E_ML_ECALL_LLACK_RECEIVED = 3, 
    E_ML_ECALL_ALACK_POSITIVE_RECEIVED = 4, 
    E_ML_ECALL_ALACK_CLEARDOWN_RECEIVED = 5, 
    E_ML_ECALL_DIALING = 9, 
    E_ML_ECALL_ALERTING = 10, 
    E_ML_ECALL_ACTIVE = 11, 
Ecall 上报状态的消息类型枚举定义。 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
接口/结构体 描述 
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
typedef struct{ 
    ML_ECall_Indication ind; 
    int call_id; 
} ML_ECALL_IND_T; 
Ecall 上报状态的消息结构体。 
typedef void (*ML_ECALL_MSGCB_T)( 
    ML_ECALL_IND_T       *pvsMsg 
); 
Ecall 上报状态消息的回调函数。 
int32_t ML_EcallIndicationInit( 
ML_ECALL_MSGCB_T cb_func); 
注册 Ecall 状态变化 callback 函数，当 Ecall 状态发生变化时
回调 cb_func 函数。 
参数:  
输入: ML_ECALL_MSGCB_T cb_func 
int32_t ML_ResetIvs(void); 重置 modem 的 ecall 状态. 重连 audio。 
int32_t ML_SetMSD(ml_ecall_set_msd* msd); 设置 ecall 的 msd 数据。 
参数:  
输入: ml_ecall_set_msd* msd 
int32_t ML_SetTestNumber( 
  ml_ecall_set_num* test_num); 
设置 test number 或者 URI。 
参数:  
输入: ml_ecall_set_num* test_num 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
接口/结构体 描述 
int32_t ML_SetReconfNumber( 
  ml_ecall_set_num* reconf_num); 
设置 reconfig number 或者 URI。 
参数:  
输入: ml_ecall_set_num* test_num 
int32_t ML_MakeFastEcall( 
  ml_ecall_req_msg* msg); 
拨出 ecall 同时传入 msd 数据。 
参数:  
输入: ml_ecall_req_msg* msg 
int32_t ML_SetEmsdpri(ml_ecall_pri* pri); 设置 ecall 优先级类别。默认优先级是 “1>3>2>4”。 
参数:  
输入: ml_ecall_pri* pri 
 
1.2.2.9 休眠唤醒 Modem 相关接口及调用时序说明 
表 1-10. AT 黑名单接口说明 
接口/结构体 描述 
Int ML_SendAT(const char* atCmd, char* finalRsp, 
uint32_t resp_len, int64_t timout_ms); 
Int 
ML_SetUnsolResponseFilter(ML_UnsolResponseFilter 
filter) 
进入 IPO 前，开启 AT URC 黑名单过滤功能： 
1. 调用 ML_SendAT 函数下发 AT 命令：AT+EURCFLT=1 
2. 调用 ML_SetUnsolResponseFilter(0)  
退出 IPO 后，关闭 AT URC 黑名单过滤功能： 
1. 调用 ML_SendAT 函数下发 AT 命令：AT+EURCFLT=0 
2. 调用 ML_SetUnsolResponseFilter(0xFF)  
 
表 1-11. MIPC Keep alive 接口说明 
接口/结构体 描述 
ML 接口：计划基于 MIPC 接口封装 ML 层 API。 
struct keepaliveRequest { 
keepaliveType type; 
uint32_t sourcePort; 
uint32_t desinationPort; 
uint32_t cid; 
char sourceAddress[68]; 
char desinationAddress[68]; 
} 
struct keepaliveStatus{ 
通过发送数据包来保持互联网 PDN/PDU 会话处于连接
模式，而不唤醒 AP 处理器。 
流程： 
1. AP 调用 ML_StartKeepalive。回调 keepaliveStatus 
状态为 pending，表示等待 AP 发送第一个 UL 
packet。 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
接口/结构体 描述 
ACTIVE = 0, 
INACTIVE, 
PENDING 
} 
ML_StartKeepalive(keepaliveRequest * keepalive) 
ML_StopKeepalive(int cid) 
ML_InitKeepaliveStatusCb(ml_keepalive_evt_cb_t evt_cb 
) 
MIPC interface: 
MIPC_DATA_KEEPALIVE_REQ/CNF 
MIPC_DATA_KEEPALIVE_STATUS_IND  
2. 等 modem 收到 AP 发送的第一个 UL packet 后，
回调 keepaliveStatus 状态为 active，表示 MD 能发
送 keep-alive 封包了。 
3. 若出现异常，当 modem 最终收不到网络 keep-
alive 响应信息后，回调 keepaliveStatus 为
inactive。 
 
1.3 常见问题/故障排除 
 SIM/CALL/SMS/Telephony 驻网相关 
1. 如何关闭/开启指定网络类型，参考[FAQ17447] [NW]关闭指定网络类型。 
2. SIM 测项失败 预先调试： 
(1) IMEI 初始值是空的，需要先烧录才能获取到。 
(2) 若 SIM 识别异常，抓取包含开机过程的测试场景 mtklog 协助进一步分析。 
3. 驻网失败 预先调试： 
(1) 确认平台有烧录 RF/IMEI，正确安装天线，SIM 卡正确插入且不欠费。 
(2) 若 (1) 确认后仍然无法驻网，抓取包含开机过程的测试场景 mtklog 协助进一步分析。 
4. CALL/SMS 失败 预先调试： 
(1) 使用以下 命令 确认平台是否有成功驻上网，若未驻网成功，先解决驻网问题 。 
adb shell /usr/bin/mlclient_test --gtest_filter=MLClientTest.ML_GetNetState 
(2) 若 (1) 步骤已经驻网成功，抓取测试场景 mtklog 协助进一步分析。 
 
 Data 相关 
APN 配置文件的修改，[FAQ21414] MTK apns-conf.xml configuration guide。 
T-Box 使用的配置文件命名为 apns-conf.xml；代码路径： src/telephonyware/3.1/libvendor-
ril/apn/resource/apns-conf.xml；平台中的安装路径： /system/etc/tele/apns-conf.xml 
 
若直接修改/system/etc/tele/apns-conf.xml， 需删除 apn.db，重启生效。 
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
MT8676 Yocto T-Box 
 User Manual 
Confidential B 
 
 网络相关 
网络建立成功的检查： 
1） 网络接口 up 并且 IP 地址存在，透过 ifconfig 命令确认。 
2） 网络 IP rule & IP route & DNS 设置，透过ip rule/ip route/dumpsys netd/dumpsys dnsresolver 命令确
认。 
 
网络连通性的检查： 
手动 ping 某 ip 或某网址是否能 ping 通。 
 IMS 相关 
如何默认开机自动开启或者关闭 IMS? 
(1) 当前系统默认开机自动开启 IMS 功能。 
(2) 可通过改变 ProjectConfig.mk 里面 MTK_VOLTE_SUPPORT 为 yes 或者 no，来改变是否支持 IMS。 
 
 
 
 
 
 
 
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
MT8676 Yocto T-Box 
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

