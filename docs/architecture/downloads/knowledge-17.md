# SRC0191 MT8676_Android_General_Introduction_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_General_Introduction_V1.1.pdf

SHA-256：fe5c7bebad68b805756e19c974b8a8ff4555029b54339390bb11204e0cff63cf

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0191.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-11-19
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
MT8676 Android 
General Introduction 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Xinmei Tan Official release 
1.1 2024-11-19 Xinmei Tan Removed Android 13 from Section 1.2 MT8676 Basic 
Information 
 
  
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
MT8676 Android 
General Introduction 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 MT8676 General Introduction ···································································································································· 4 
1.1 MT8676 Overview ···················································································································································· 4 
1.2 MT8676 Basic Information ······································································································································· 4 
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
MT8676 Android 
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
• System：  Android U 
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
MT8676 Android 
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
MT8676 Android 
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
OS Android U 
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
MT8676 Android 
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
# SRC0192 MT8676_Android_GPS_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_GPS_User_Manual_V1.0.pdf

SHA-256：83cce0f0d84a739f3b93094348cefb9c10f42204211294b65b19f67d5b8b60a8

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0192.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Android GPS User Manual 
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
MT8676 Android GPS 
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Android GPS 
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
1.3 Configuration/Customization Guideline ··················································································································· 6 
 Fix Rate Configuration ··································································································································· 6 
 GNSS Mode Configuration ···························································································································· 6 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 7 
 AOSP Raw Measurement ······························································································································ 7 
 Log Related Issues ········································································································································· 8 
 Testing Related Issues ··································································································································· 8 
 GNSS Path ····················································································································································· 9 
Exhibit 1 Terms and Conditions ········································································································································ 10 
 
 
List of Figures 
Figure 1-1. GPS architecture······················································································································································· 5 
Figure 1-2. Fix Rate configuration ·············································································································································· 6 
Figure 1-3. GNSS configuration ·················································································································································· 7 
Figure 1-4. AOSP Raw Measurement process ···························································································································· 8 
 
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
MT8676 Android GPS 
 User Manual 
Confidential B 
1 GPS 
1.1 Overview 
 Brief Introduction 
This section introduces the basic functions of the MT8676 Global Positioning System (GPS) and the solutions to common 
problems. 
 
 GPS Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
COLD start With time-assisted information, the end user will not encounter this scenario. 
FULL start Without any auxiliary information, equivalent to the scenario where an end user 
uses a positioning application for the first time after purchasing a mobile phone. 
GNSS Global Navigation Satellite System  
GPS Global Positioning System 
Hot start With all auxiliary information, the end user's current positioning occurs less than 2 
to 4 hours after the last positioning. 
NMEA National Marine Electronics Association. A communication protocol used for data 
exchange between marine electronic devices, widely applied in GPS/GNSS receiver 
data output. 
TTFF Time To First Fix. The time required for a navigation device to successfully acquire 
the first valid positioning data from startup. 
WARM start With time and location-assisted information, the end user's current positioning 
occurs more than 2 to 4 hours after the last positioning. 
 
1.2 Architecture/Process Overview 
MT8676 GPS architecture is shown in Figure 1-1. 
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
MT8676 Android GPS 
 User Manual 
Confidential B 
 
Figure 1-1. GPS architecture 
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
MT8676 Android GPS 
 User Manual 
Confidential B 
1.3 Configuration/Customization Guideline 
 Fix Rate Configuration 
Fix Rate refers to the rate at which GNSS reports position information. The fixed rates currently supported by MT8676 
include: 1Hz, 2Hz, 5Hz, and 10Hz, with the default configuration being 1Hz output. The method to change the fixed rate is 
as follows: 
 
Method1: Modify the code to configure the fix_interval parameter. fix_interval = 100 corresponds to 10Hz; 
fix_interval = 1000 corresponds to 1Hz. 
 
 
Figure 1-2. Fix Rate configuration 
 
Method2: Dynamically modify the configuration file, which will take effect after restarting GNSS.  
Command: echo fix_interval=1000 >> /data/vendor/gps/mnl.prop /Set to 1Hz, effective after 
GPS restart. 
 
 GNSS Mode Configuration 
MT8676 supports GPS + GLONASS + Galileo + BeiDou multi-satellite navigation positioning systems. The default 
configuration for gnssopmode is set to MTK_CONFIG_GPS_GLONASS_BEIDOU_GALILEO_NAVIC (the default configuration 
offers the best GNSS performance, and it is recommended to use the default configuration). 
 
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
MT8676 Android GPS 
 User Manual 
Confidential B 
 
Figure 1-3. GNSS configuration 
 
1.4 Frequently Asked Questions/Troubleshooting 
 AOSP Raw Measurement 
AOSP Raw Measurement refers to GNSS satellite observations, including both raw and processed information. The MT8676 
GPS supports AOSP raw measurements, which belong to the native Android process. The workflow is shown in Figure 1-4. 
For detailed usage, please refer to the Google Developer Documentation. 
 
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
MT8676 Android GPS 
 User Manual 
Confidential B 
Location
Application/Middleware
 HAL
 MNLD
Open GPS
GPS engine started
GPS engine started
Update raw measurement data
 
repeat
Stop GPS
GPS session stopped
GPS session stopped
GPS Start
Report Raw Data
GPS Stop
gpsinf_init: Register callbacks
measinf_init: Register callbacks & Start raw meas
status_cb (ENGINE_ON)
status_cb (ENGINE_BEGIN)
measurement_cb
 
repeat
measinf_close
status_cb (ENGINE_END)
status_cb (ENGINE_OFF)
gpsinf_cleanup: Close interface
 
Figure 1-4. AOSP Raw Measurement process 
 
 Log Related Issues 
• What logs do MediaTek engineers need for problem analysis? 
/data/debuglogger/mobilelog, and  /data/debuglogger/connsyslog 
• How to determine if the GPS software is working properly through logs? 
Please check if there are NMEA Sentences appearing in the log. If they appear, it indicates that the software is 
functioning properly. 
 
 Testing Related Issues 
• Before testing, it is necessary to check whether there is a satellite signal and whether it is in an open sky 
environment. 
To test GNSS satellite search or positioning functions, the signal needs to be in an open sky environment, such as an 
open outdoor area or a laboratory with a signal amplifier. 
The prerequisite for successful positioning is having more than six satellites with a CNR of 40~43 dBm. ---> It is crucial 
to pay attention to this when testing GNSS. If you are unsure whether the current signal environment meets the 
requirements, place a comparison device in the same environment for comparison. 
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
MT8676 Android GPS 
 User Manual 
Confidential B 
• How to test the Time To First Fix (TTFF) for different startup modes such as FULL start, WARM start, COLD start, and 
HOT start? 
Please use the YGPS in engineering mode or use the following adb command to open YGPS and test using the FULL, 
COLD, WARM, and HOT buttons. 
adb shell am  start com.mediatek.ygps/.YgpsActivity 
 
 GNSS Path 
Source code: 
vendor\mediatek\proprietary\hardware\connectivity\gnss 
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
MT8676 Android GPS 
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
# SRC0193 MT8676_Android_GPU_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_GPU_User_Manual_V1.0.pdf

SHA-256：9efe4b97a91bad7baae5d10f5668167ed7e111c5626eefc498091eb1ee029060

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0193.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Android GPU User Manual 
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
MT8676 Android GPU 
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
MT8676 Android GPU 
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
 Android Graphics System Framework ··········································································································· 5 
 Arm Mali-G615 Architecture and Feature Support ······················································································· 5 
1.3 Frequently Asked Questions/Troubleshooting ········································································································· 7 
 GPU Rendering Analysis ································································································································ 7 
 GPU Performance Analysis ···························································································································· 9 
Exhibit 1 Terms and Conditions ········································································································································ 12 
 
 
List of Figures 
Figure 1-1. Android graphics system framework ························································································································ 5 
Figure 1-2. Arm Mali-G615 architecture ···································································································································· 6 
Figure 1-3. MGD ········································································································································································· 8 
Figure 1-4. MGD configuration ··················································································································································· 8 
Figure 1-5. Establish connection ················································································································································ 8 
Figure 1-6. Streamline example ··············································································································································· 10 
 
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
MT8676 Android GPU 
 User Manual 
Confidential B 
1 GPU 
1.1 Overview 
This section mainly introduces the basic knowledge of the MT8676 Graphics Processing Unit (GPU). 
MT8676 GPU  uses the Arm Mali-G615, with a computing power of 1.8T FLOPS. 
 
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
MT8676 Android GPU 
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
 Android Graphics System Framework 
Please refer to Figure 1-1 for the Android graphics system framework: 
 
 
Figure 1-1. Android graphics system framework 
 
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
MT8676 Android GPU 
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
MT8676 Android GPU 
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
When screen rendering anomalies occur, the issue can generally be analyzed from three aspects: SF/HWC/Display, GPU, 
and APK. To determine if it is an SF/HWC/Display issue, first check the log for any display-related errors and proceed with 
further analysis based on the log. Additionally, the platform has two compositing methods, which can be done through 
OVL or GPU. You can disable hardware OVL and force the use of GPU for compositing to check for anomalies. Finally, you 
can use the screenrecord command to record the screen and check if the recording also shows rendering anomalies. If it is 
determined to be an SF/HWC/Display issue, you can contact the relevant owner for further analysis. 
 
For GPU issues, search the log for errors related to keywords such as Mali/EGL/GLES/HWUI and proceed with further 
analysis based on the errors. You can also use some debugging tools, such as GPUD and Graphics API Debugger, Mali 
Graphics Debugger, RenderDoc, etc. These tools can help analyze the problem. Additionally, you can conduct comparative 
experiments related to the GPU. 
 
For APK issues, you need to analyze together with the APK team to determine if there are problems with using GL 
interfaces during rendering or if incorrect textures are being passed for rendering. 
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
MT8676 Android GPU 
 User Manual 
Confidential B 
 
1.3.1.1 MGD Usage Examples 
 
Figure 1-3. MGD 
 
Mali Graphics Debugger (MGD) is a specialized debugging tool for Mali GPUs that can capture and analyze the rendering 
process of the target process’s GPU. The following commands are required to prepare the platform: 
adb root; 
adb remount; 
adb shell setenforce 0 
 
Configure MGD according to the sequence highlighted in red in Figure 1-4. After configuration, you need to set the 
property to MGD using the following command: 
adb shell "setprop vendor.debug.gpu.provider 'mgd’” 
adb shell "getprop vendor.debug.gpu.provider" 
adb shell "stop;start“ 
 
 
Figure 1-4. MGD configuration 
 
Finally, establish the connection between the platform and MGD as shown in Figure 1-5. Once the connection is 
established, you can capture the rendering process of the target process. 
 
Figure 1-5. Establish connection 
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
MT8676 Android GPU 
 User Manual 
Confidential B 
 
1.3.1.2 GPU-Related Comparative Experiments 
Common comparative experiments are as follows: 
(1) Whether the issue can be reproduced on a Google reference device. 
(2) Whether the issue is related to the Android system version. 
(3) Whether the issue can be reproduced on the previous generation GPU framework (Midgard/Bifrost) platform. 
(4) Whether the issue is related to the GPU driver version. 
(5) Whether the issue can be reproduced with AFBC turned off. 
(6) Whether the issue can be reproduced by forcing glFinish. 
(7) Whether the issue can be reproduced with partial update turned off. 
(8) Whether the issue is related to ASTC or MSAA. 
(9) HWUI render pipeline switching experiment. 
(10) RenderEngine backend switching experiment. 
(11) Other aspects, etc. 
 
 GPU Performance Analysis 
For analyzing GPU performance issues, there are generally three aspects to consider: GPU issues, APK issues, and issues 
related to other modules or the system. For GPU issues, you can check the Android log and kernel log for error logs with 
keywords such as Mali/EGL/GLES/HWUI and proceed with further analysis based on the logs. Tools like systrace or perfetto 
can be used to capture and analyze the problem scenario, and Arm Streamline can be used to check hardware execution to 
identify which specific part is affecting GPU performance. Targeted comparative experiments can also be conducted to 
break down the parts affecting performance. 
 
For the APK part, systrace or perfetto can also be used to analyze whether the issue is caused by the APK. Issues related to 
other modules or the system can be analyzed through logs and flame graphs. 
1.3.2.1 Common GPU Performance Comparison Experiments 
Common comparative experiments for substandard GPU performance are as follows: 
(1) Whether the fixed performance mode passes. 
(2) Presence of unlimited frequency factors (e.g., thermal). 
(3) Whether it is related to the Power Policy strategy. 
(4) Whether it is related to driver overhead. 
(5) Whether it is related to memory bandwidth/GPU QoS. 
(6) Whether it is related to the GPU driver version. 
(7) Arm Mali Offline Compiler. 
(8) Other aspects, etc.： 
 
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
MT8676 Android GPU 
 User Manual 
Confidential B 
1.3.2.2 Streamline Example 
Streamline can be used to view the execution status and execution time of the GPU hardware. 
 
 
Figure 1-6. Streamline example 
 
1.3.2.3 Performance Optimization Suggestions 
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
MT8676 Android GPU 
 User Manual 
Confidential B 
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

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Android GPU 
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
# SRC0194 MT8676_Android_I2C_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_I2C_User_Manual_V1.0.pdf

SHA-256：cd4da46210e1b296950232ce2617127674e6285c410074885f7229f0e9379ab8

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0194.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-11-15
MT8676 Android I2C User Manual 
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
MT8676 Android I2C 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-11-15 Housong Zhang Official release 
 
  
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
MT8676 Android I2C 
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
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 7 
 I2C Issue Debugging Methods······················································································································· 7 
 GPIO Mode Check ········································································································································· 7 
 Waveform Measurement ······························································································································ 7 
 How to Print I2C Register Information ·········································································································· 7 
 MediaTek Support Seeking ··························································································································· 8 
Exhibit 1 Terms and Conditions ·········································································································································· 9 
 
 
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Android I2C 
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Android I2C 
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Android I2C 
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Android I2C 
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

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Android I2C 
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

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Android I2C 
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
# SRC0195 MT8676_Android_IPO_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_IPO_User_Manual_ V1.0.pdf

SHA-256：fb0f163b34e67743aa1ee9f34286cd4323645f69d33bbaa2a45f990405e8d448

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0195.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version：  1.0 
Release Date： 2024-08-12 
 
 
MT8676 Android IPO User Manual 
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
MT8676 Android IPO  
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 LF Liu Official release 
 
  
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
MT8676 Android IPO  
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 4 
Lisf of Tables ······································································································································································ 4 
1 IPO Overview ····························································································································································· 5 
1.1 Base Introduction ····················································································································································· 5 
1.2 Why IPO is Needed ··················································································································································· 5 
2 Abbreviations ···························································································································································· 6 
3 Architectural Overview ·············································································································································· 7 
3.1 Android IPO Architecture ········································································································································· 7 
3.2 Two Scenarios of Hardware Power Management ···································································································· 7 
3.3 Power Management Schemes for Each Hardware During Entry and Exit IPO ·························································· 8 
3.3.1 Status of CPU and Processes in Different Modes ·························································································· 9 
3.3.2 IPO Interface Description ······························································································································ 9 
3.3.3 IPO Interface Invocation Timing ·················································································································· 10 
4 Configuration/Customization Guide ························································································································ 12 
4.1 Modifications on the HU Side ································································································································ 12 
4.2 Introduction to Code Modifications ······················································································································· 12 
4.3 USB Connection ······················································································································································ 12 
4.4 How to Customize the Animation for Entering and Exiting the IPO Process ·························································· 13 
4.5 Custom IPO Whitelist ············································································································································· 13 
4.6 Killing Processes When Exiting IPO ························································································································ 14 
4.7 Notifying Java Processes When Entering/Exiting IPO ···························································································· 14 
4.8 Notifying Native Processes When Entering/Exiting IPO ························································································· 14 
5 Frequently Asked Questions ···································································································································· 15 
5.1 Key Logs Generated When Shutting Down IPO ······································································································ 15 
5.2 Key Logs Generated When Enabling IPO Using Commands ··················································································· 15 
5.3 Key Logs Generated When Enabling IPO Using the Power Button ········································································· 16 
5.4 Key Logs Generated When Enabling IPO Due to a Collision ··················································································· 16 
5.5 How to Troubleshoot High Power Consumption After Entering IPO ······································································ 16 
5.6 IPO Debugging Commands ····································································································································· 16 
Exhibit 1 Terms and Conditions ········································································································································ 18 
 
 
 
 
 
 
 
 
 
 
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
MT8676 Android IPO  
User Manual 
Confidential B 
List of Figures 
Figure 3-1. IPO architecture ······················································································································································· 7 
Figure 3-2. IPO shutdown process············································································································································ 10 
Figure 3-3. Process of exiting the IPO startup ·························································································································· 11 
Figure 4-1. USB mode switching··············································································································································· 12 
Figure 4-2. Animation customization ······································································································································· 13 
Figure 4-3. Set the whitelist using hard coding ························································································································ 13 
Figure 4-4. Whitelist code ························································································································································ 14 
Figure 4-5. Notify native processes using property triggers in init.rc file················································································· 14 
 
Lisf of Tables 
Table 2-1. Abbreviations ····························································································································································· 6 
Table 3-1. Power management schemes for each hardware during entry and exit IPO ···························································· 8 
Table 3-2. Status of CPU and processes in different modes ······································································································· 9 
Table 3-3. IPO interface description ··········································································································································· 9 
Table 4-1. Modifications related to IPO code ··························································································································· 12 
 
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
MT8676 Android IPO  
User Manual 
Confidential B 
1 IPO Overview 
1.1 Base Introduction 
This document primarily introduces the MT8676 IPO quick boot function and provides analysis methods for common IPO 
issues. IPO, short for Instant Power On, refers to the quick boot feature, which is very practical for quickly accessing the 
reverse camera view and activating the car’s recording functions after the car’s ACC is turned on. 
 
1.2 Why IPO is Needed 
• In the current smart automotive control systems, the startup time of devices is an important performance metric.   
• IPO is a software solution that allows devices to boot within a configurable time without additional hardware costs. It 
utilizes the Android suspend function to create a new user experience. 
• During the IPO phase, most processes and services running in the system are stopped or killed by the 
ActivityManagerService to prevent unintended behavior. Once the system enters the suspend state, users can wake up 
the system through external or remote events to exit IPO mode, thus achieving rapid startup. 
• Users may ignite and turn off their vehicles daily and have expectations for the speed of switching; they do not want 
to wait too long. 
• Even if users feel that the car system has been turned off, it is only a pseudo shutdown. In reality, the system has not 
truly shut down but has entered an early_suspend or suspend state, and the car system can still receive remote 
commands. 
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
MT8676 Android IPO  
User Manual 
Confidential B 
2 Abbreviations 
Table 2-1. Abbreviations 
Abbreviation Explanation 
HU Head Unit 
IHUHU Infotainment Head Unit 
IPO Instant Power On 
IVI In-Vehicle Infotainment 
T-Box Telematics-BOX 
 
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
MT8676 Android IPO  
User Manual 
Confidential B 
3 Architectural Overview 
3.1 Android IPO Architecture 
 
Figure 3-1. IPO architecture 
 
3.2 Two Scenarios of Hardware Power Management 
1. Independent power management logic, not dependent on the Kernel Suspend process (such as Camera/Display, etc.) 
The driver powers down the device when it detects no access and powers up and acquires a WakeLock when accessed. 
2. Dependent on the Kernel Suspend/Resume architecture 
– Hardware Driver implements the Suspend/Resume functions required by the Kernel Driver. 
– If no one holds a WakeLock, the system will call the Suspend() function of each HW Driver when entering the 
Suspend state. 
– When the system is awakened and enters the Resume state, it will also call the Resume() function of each HW 
Driver. 
– HW Drivers independently implement the Suspend/Resume functions to control powering up and down on their 
own. 
The power management schemes corresponding to the above two scenarios are as follows： 
1. During IPO shutdown, trigger all users to relinquish access to hardware devices: First stage power down. 
2. During IPO shutdown, clear hardware usage scenarios, release WakeLock, and enter suspend state: Second stage 
power down. 
 
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
MT8676 Android IPO  
User Manual 
Confidential B 
3.3 Power Management Schemes for Each Hardware During Entry and Exit IPO 
Table 3-1. Power management schemes for each hardware during entry and exit IPO 
Module Suspend Stage IPO Shutdown Handling IPO Startup Handling 
GPS 2 
1. IPO kills HU-side AP to clear GPS 
application scenario 
2. Stop using GPS; GPS SW enters Suspend 
No handling during IPO startup 
BT 1 IPO will turn off BT; BT SW enters Suspend IPO will turn on BT 
WIFI 1 IPO will turn off WIFI; WIFI SW enters 
Suspend IPO will turn on WIFI 
TTY 2 1. Clear TTY usage scenario 
2. Kernel Suspend -> TTY Driver Suspend 
No handling during IPO startup 
Kernel Resume -> TTY Driver Resume 
SPI 2 1. Clear SPI usage scenario  
2. Kernel Suspend -> SPI Driver Suspend 
No handling during IPO startup 
Kernel Resume -> Corresponding 
Driver Resume 
Camera 1 
1. IPO kills HU-side AP to clear Camera 
application scenario 
2. EVS stops Camera usage upon ACC OFF 
3. Camera Driver powers down 
No handling during IPO startup 
If Camera is in use, Camera Driver 
powers up 
Sensor 2 
1. IPO kills HU-side AP to clear sensor 
application scenario 
2. Check for remaining sensor usage 
scenarios 
3. Kernel Suspend -> Sensor Driver Suspend 
No handling during IPO startup 
Kernel Resume -> Corresponding 
Driver Resume 
EPROM 2 
1. IPO kills HU-side AP to close EPROM 
application scenario 
2. Check for other usage scenarios 
3. Kernel Suspend ->Sensor Driver Suspend 
No handling during IPO startup 
Kernel Resume -> Corresponding 
Driver Resume 
Display 1 
1. IPO calls PMS_FW to enter Early Suspend  
2. Display Driver powers off Display 
1. IPO startup calls PMS_FW to switch 
backlight  
2. Display Driver notifies MCU via GPIO 
Mic noise  
elimination 2 
1. Enter IPO shutdown and remove usage 
scenario 
2. Driver enters Suspend and powers down 
No handling during IPO startup 
Kernel Resume -> Corresponding 
Driver Resume 
Mic D/A  
conversion 2 
1. Enter IPO shutdown, remove usage 
scenario  
2. Driver enters Suspend and powers down 
No handling during IPO startup 
Kernel Resume -> Corresponding 
Driver Resume 
USB Hub 2 
1. Enter IPO shutdown and remove usage 
scenario  
2. Driver enters Suspend and powers down 
No handling during IPO startup 
Kernel Resume -> Corresponding 
Driver Resume 
Ethernet 2 
1. Enter IPO shutdown and remove usage 
scenario  No handling during IPO startup 
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
MT8676 Android IPO  
User Manual 
Confidential B 
Module Suspend Stage IPO Shutdown Handling IPO Startup Handling 
2. Driver enters Suspend and powers down Kernel Resume -> Corresponding 
Driver Resume 
 
3.3.1 Status of CPU and Processes in Different Modes 
• Software Process States: Running (occupying CPU for execution), Suspend (actively relinquishing CPU resources and 
waiting for execution), Killed (terminated)） 
• CPU States: Wakeup (screen on), Early Suspend (awake state & screen off), Suspend (sleep mode) 
 
Table 3-2. Status of CPU and processes in different modes 
 MT8676 Android 
 CPU T-Box Process Java Core Process 
/Native Process Task Process 
Full Work Mode Early Suspend/ 
Suspend/Wakeup Suspend/Running Suspend/Running Suspend/Running 
Partial Work 
Mode Early Suspend Running Running Killed 
Sleep mode Suspend Suspend Suspend Killed 
 
3.3.2 IPO Interface Description 
Table 3-3. IPO interface description 
Interface/Structure Description 
public static void lowpowerStartIPO() 
PowerManagerService provided IPO shutdown interface: 
1. Kill apps not on the whitelist, turn off peripherals such as 
BT/WIFI/GPS, and turn off the screen. 
2. AP releases the WakeLock, and the system enters sleep mode. 
public static void lowpowerStopIPO(int flag) 
PowerManagerService IPO startup exit interface 
Parameter: 0 (screen off), 1 (screen on)  
The system enters Full Work mode. 
IPO Pseudo Shutdown State 
 
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
MT8676 Android IPO  
User Manual 
Confidential B 
3.3.3 IPO Interface Invocation Timing 
3.3.3.1 Entering the IPO Shutdown Process 
• Red box: Apps not on the whitelist can receive the ACTION_SHUTDOWN_HU broadcast and perform cleanup actions. 
• Purple box: Call the Android layer interface to turn off peripherals and remove peripheral usage scenarios. 
• Yellow box: Kill apps not on the whitelist and native processes on the blacklist. 
 
 
Figure 3-2. IPO shutdown process  
 
3.3.3.2 Exiting the IPO Startup Process 
Ignition wakeup interrupt/Modem call or SMS -> Wakeup Kernel -> Execute IPO exit. 
Boot animation and boot process are handled in parallel. 
 
• Purple box: Actively wake up devices that were turned off in the first stage before broadcasting. 
• Red box: Can receive the ACTION_BOOT_HU broadcast to perform initialization actions. 
• Yellow box: Send the native Android boot broadcast to start apps expected to auto-start on boot. 
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
MT8676 Android IPO  
User Manual 
Confidential B 
 
Figure 3-3. Process of exiting the IPO startup  
 
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
MT8676 Android IPO  
User Manual 
Confidential B 
4 Configuration/Customization Guide 
4.1 Modifications on the HU Side 
Customized apps can listen to the following two broadcasts: 
 
• com.mediatek.intent.action.ACTION_SHUTDOWN_HU: Perform some actions before shutdown 
• com.mediatek.intent.action.ACTION_BOOT_HU: Perform some actions before startup 
 
4.2 Introduction to Code Modifications 
Table 4-1. Modifications related to IPO code 
AOSP Repo Modified Files Reason for Modification 
frameworks/base core/java/android/os/IPowerManager.aidl Added interface to enter 
IPO Service. 
frameworks/base core/res/AndroidManifest.xml Defined broadcasts for IPO 
startup and shutdown. 
frameworks/base services/core/java/com/android/server/power/PowerManag
erService.java 
Added interface to enter 
IPO Service. 
frameworks/base services/core/Android.bp Load MediaTek IPO Jar file. 
frameworks/base services/core/java/com/android/server/policy/PhoneWindow
Manager.java 
During IPO shutdown, skip 
key events. 
vendor/mediatek/proprietary 
/frameworks/opt/ipo java/com/mediatek/ipomanager/IpoManagerService.java IPO core class. 
vendor/mediatek/proprietary 
/external/ipod * 
After entering IPO, IPOD 
exits IPO upon detecting a 
power key event. 
 
4.3 USB Connection 
After entering IPO, it is necessary to switch to Device mode to disconnect USB and enable sleep; upon exiting IPO, switch 
back to Host mode to prevent the USB kernel from holding a lock, which could prevent entering Suspend mode. Upon 
exiting IPO, restore the USB connection. 
Code path: vendor/mediatek/proprietary/external/ipod/ipod.rc 
 
 
Figure 4-1. USB mode switching 
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
MT8676 Android IPO  
User Manual 
Confidential B 
4.4 How to Customize the Animation for Entering and Exiting the IPO Process 
Code path: vendor/mediatek/proprietary/frameworks/opt/ipo/IpoManagerService.java 
 
 
Figure 4-2. Animation customization 
 
The default boot animation time is 2 seconds, which can be customized according to requirements. 
 
4.5 Custom IPO Whitelist 
Processes on the whitelist will not be killed when entering IPO. 
 
Code path: vendor/mediatek/proprietary/frameworks/opt/ipo/IpoManagerService.java 
 
• To set the whitelist using hard coding, please refer to the following diagram: 
 
 
Figure 4-3. Set the whitelist using hard coding 
 
• To set the whitelist using Dynamic method: 
setprop persist.ipo.shutdown.process.wl 
 
Example: /com.xx.yy/com.zz.ww. Please refer to Figure 4-4. 
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
MT8676 Android IPO  
User Manual 
Confidential B 
 
Figure 4-4. Whitelist code 
 
4.6 Killing Processes When Exiting IPO 
Configure persist.ipo.prebootkill.list. 
 
4.7 Notifying Java Processes When Entering/Exiting IPO 
When IPO is shutting down, receive the broadcast com.mediatek.intent.action.ACTION_SHUTDOWN_HU. 
When IPO is starting up, receive the broadcast com.mediatek.intent.action.ACTION_BOOT_HU. 
 
4.8 Notifying Native Processes When Entering/Exiting IPO 
Add property trigger into init.rc file. 
Sample code: 
 
Figure 4-5. Notify native processes using property triggers in init.rc file 
 
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
MT8676 Android IPO  
User Manual 
Confidential B 
5 Frequently Asked Questions  
5.1 Key Logs Generated When Shutting Down IPO 
Key Word: LowPowerStartIPO/ IpoManagerService/ IPODMAIN/ipod 
 
03-07 08:30:57.955  1188  1320 D PowerManagerService: LowPowerStartIPO                   //PMS IPO 
entrance 
03-07 08:30:57.956  1188  1320 D CarTbox : [IpoManagerService] Power_status_2.2      
//IpoManagerService entrance 
03-07 08:30:57.956  1188  1320 D CarTbox : [IpoManagerService] lowPowerHuShutdown start 
03-07 08:30:57.957  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = 
SHUT_ANIMATION_START 
03-07 08:30:57.957  1188  1401 D CarTbox : [IpoManagerService] startShutAnimation 
03-07 08:30:57.966  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = AUDIO_STOP 
03-07 08:30:57.966  1188  1401 D CarTbox : [IpoManagerService]muteSystem 
03-07 08:30:57.967  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = BT_STOP 
03-07 08:30:57.968  1188  1401 D CarTbox : [IpoManagerService]stop_bt 
… 
03-07 08:30:59.158  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = APP_STOP 
03-07 08:30:59.161  1188  1401 D CarTbox : [IpoManagerService]forceStopKillPackages //AMS kill 
process 
03-07 08:30:59.161  1188  1401 D CarTbox : [IpoManagerService]whitelist = system 
03-07 08:30:59.161  1188  1401 D CarTbox : [IpoManagerService]whitelist = com.android.bluetooth 
03-07 08:30:59.161  1188  1401 D CarTbox : [IpoManagerService]whitelist = com.android.phone 
03-07 08:30:59.162  1188  1401 D CarTbox : [IpoManagerService]whitelist = android.process.acore 
03-07 08:30:59.162  1188  1401 D CarTbox : [IpoManagerService]whitelist = com.android.systemui 
03-07 08:30:59.162  1188  1401 D CarTbox : [IpoManagerService]whitelist = com.android.car 
03-07 08:30:59.162  1188  1401 D CarTbox : [IpoManagerService]whitelist = com.android.car.carlauncher 
03-07 08:30:59.162  1188  1401 D CarTbox : [IpoManagerService]whitelist = 
com.android.providers.media.module 
… 
03-07 08:31:00.459  1188  1401 D CarTbox : [IpoManagerService]lowPowerHuShutdown Done 
03-07 08:31:00.460  1188  1320 D CarTbox : [IpoManagerService] Power_status_3              
//IpoManagerService done 
 
03-07 08:31:00.506  4783  4783 I IPODMAIN: Can't load library: dlopen failed: library 
"/system/lib/libipod.so" not found //start ipod 
 
5.2  Key Logs Generated When Enabling IPO Using Commands 
Key Word: LowPowerStopIPO/ IpoManagerService 
 
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
MT8676 Android IPO  
User Manual 
Confidential B 
03-07 08:37:56.648  1188  1639 D PowerManagerService: LowPowerStopIPO 
03-07 08:37:56.648  1188  1639 D CarTbox : [IpoManagerService] Power_status_6.2 
03-07 08:37:56.649  1188  1639 D CarTbox : [IpoManagerService] lowPowerHuBoot start 
03-07 08:37:56.649  1188  1639 D CarTbox : [IpoManagerService]huStatus:shutdown-done 
03-07 08:37:56.649  1188  1639 D CarTbox : [IpoManagerService]pre reqeustscreen:1 
03-07 08:37:56.651  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = AUDIO_RESTORE 
03-07 08:37:56.652  1188  1401 D CarTbox : [IpoManagerService]unmuteSystem 
03-07 08:37:56.653  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = 
BOOT_ANIMATION_START 
03-07 08:37:56.653  1188  1401 D CarTbox : [IpoManagerService] startBootAnimation 
03-07 08:37:56.664  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = WAIT_MESSAGE 
…. 
03-07 08:37:57.175  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = USB_RESTORE 
03-07 08:37:57.175  1188  1401 D CarTbox : [IpoManagerService]start_usb 
 
5.3  Key Logs Generated When Enabling IPO Using the Power Button 
Key Word: IPO_RESUME_REASON /LowPowerStopIPO/ IpoManagerService 
 
03-07 08:45:14.497  4839  4846 I IPODMAIN: <ipo resume system>IPO_RESUME_REASON:powerkey. 
03-07 08:45:14.498  4839  4846 I IPODMAIN: LowPowerStopIPO 
 
5.4 Key Logs Generated When Enabling IPO Due to a Collision 
Key Word: GSENSOR_COLLISION /LowPowerStopIPO 
 
09-15 14:41:54.560  7545  7551 I IPODMAIN: handleEvent: event 2 mHasCallback = 0 
09-15 14:41:54.560  7545  7551 I IPODMAIN: IPO_SHUTDOWN_PROP: shutdown-done  
09-15 14:41:54.560  7545  7551 I IPODMAIN: sendBroadcastMessage android.intent.action.GSENSOR_COLLISION 
09-15 14:41:54.560  7545  7551 I IPODMAIN: sendBroadcastMessage(): Action: c, Value: 2 
09-15 14:41:54.603  7545  7551 I IPODMAIN: LowPowerStopIPO 
09-15 14:41:54.603  1174  7404 D PowerManagerService: LowPowerStopIPO 
 
5.5 How to Troubleshoot High Power Consumption After Entering IPO 
1. Command: dumpsys power 
Check the presence of partial WakeLock. 
2. Check UART logs to identify which system component or process causes the system to wake up. 
3. Command: cat /sys/kernel/debug/wakeup_sources 
Check Kernel wakeup_sources. 
 
5.6 IPO Debugging Commands 
1. By default, the Kernel stops printing UART logs a few seconds after boot. To keep UART logs continuously printing (this 
will also take effect after a reboot), use the following command: 
adb shell setprop persist.vendor.uartconsole.enable 1  
2. Entering IPO will disconnect the USB adb connection. If you do not want it to disconnect, you can enter the following 
command after booting: 
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
MT8676 Android IPO  
User Manual 
Confidential B 
adb shell setprop sys.ipo.usb 1 
3. Enter IPO command: adb shell service call power 67 
4. Exit IPO command: adb shell service call power 68  i32 1 
 
 
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
MT8676 Android IPO  
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
# SRC0196 MT8676_Android_OTA_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_OTA_User_Manual_V1.0.pdf

SHA-256：bcd7023dd6c3de223d5b104a2a770d8c267ee8e2d988122215f3654719fa138a

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0196.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version：  1.0 
Release Date： 2024-08-12 
 
 
MT8676 Android OTA User Manual 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Ming Ji Official release 
 
  
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
Table of Contents 
Version History ····························································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
Lisf of Tables ······································································································································································ 4 
1 OTA ············································································································································································ 5 
1.1 Overview ·································································································································································· 5 
1.1.1 Purpose ······················································································································································ 5 
1.1.2 Who Should Read This Document ·············································································································· 5 
1.1.3 How to Use This Manual ···························································································································· 5 
1.2 References ································································································································································ 6 
1.3 OTA Update Definitions ············································································································································ 6 
1.4 OTA Abbreviations ···················································································································································· 7 
1.5 Enable A/B System Updates ····································································································································· 7 
1.6 Architecture Overview ············································································································································· 7 
1.6.1 Preloader Boot Control Flow ······················································································································ 8 
1.6.2 A/B System Partition Layout ······················································································································· 8 
1.6.3 Ramdisk Location in A/B System Updates ·································································································· 9 
1.6.4 Boot Control HAL and HIDL ······················································································································ 10 
1.6.5 A/B System Updates Process ···················································································································· 12 
1.6.6 Virtual A/B ················································································································································ 12 
1.7 Guideline for Generating A/B OTA Package ············································································································ 13 
1.7.1 Generate A/B OTA Update Package by Split Build 1.0 (LD1.0) Step by Step ············································· 13 
1.7.2 Generate A/B OTA Update Package by Split Build 2.0 (LD2.0) Step by Step ············································· 15 
1.8 A/B System Updates Limitations ···························································································································· 17 
1.9 How to Use and Debug A/B System Updates ········································································································· 17 
1.9.1 How to Use A/B Updates ·························································································································· 17 
1.9.2 How to Debug A/B Updates ····················································································································· 18 
1.10 Frequently Asked Questions··································································································································· 18 
1.10.1 Does flashtool Need to Download Both A and B Images ········································································· 18 
1.10.2 How to Know What Image is Running (A or B) ························································································· 18 
1.10.3 Could A Partition Load B Partition (e.g., lk_a loads boot_b) ···································································· 19 
1.10.4 What Partition Needs A/B ························································································································ 19 
1.10.5 What’s Feature Option for A/B System ···································································································· 19 
1.10.6 If Handset Ships without A/B, Could Handset Become A/B through OTA Update ··································· 19 
1.10.7 Who Set boot_sucessfully Flag ················································································································· 19 
Exhibit 1 Terms and Conditions ········································································································································ 20 
 
 
List of Figures 
Figure 1-1. Preloader boot control flow ····································································································································· 8 
  
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
Lisf of Tables 
Table 1-1. Chapter overview ······················································································································································ 5 
Table 1-2. Abbreviations ····························································································································································· 7 
 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
1 OTA 
1.1 Overview 
The introduction of A/B System updates is as follows: 
 
• It is a new Over-The-Air (OTA) feature alias Seamless Updates . 
• No more bricks (can fall back to previous system image). 
• Ensures that a workable booting system remains on the disk. 
• OTA updates applied in the normal mode background. 
 
 
 
1.1.1 Purpose 
This document provides the user guidelines for the A/B System updates. It describes how to generate the OTA package on 
the Android platform. This manual also elaborates the mechanism required to enable A/B System updates (Seamless 
Updates) feature in MTK platform. 
 
1.1.2 Who Should Read This Document 
This document is primarily intended for: 
• Engineers with technical knowledge of the OTA A/B System updates (Seamless Updates) 
 
1.1.3 How to Use This Manual 
This segment explains how information is distributed in this document and presents some cues and examples to simplify 
finding and understanding information in this document. Table 1-1 presents an overview of the chapters and appendices in 
this document. 
 
Table 1-1. Chapter overview 
# Chapter Contents 
1 Introduction Describes the scope and layout of this document. 
2 References Provides reference website or documents 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
# Chapter Contents 
3 OTA Update Definitions Presents OTA update definitions 
4 Abbreviations Lists OTA abbreviations 
5 Enable A/B System Updates Shows how to enable A/B System updates in MediaTek platform 
6 Architecture Overview Demonstrates A/B System updates architecture overview 
7 Guideline for Generating A/B OTA Package Describes how to generate an incremental and full OTA package 
8 A/B System Updates Limitations Describes A/B System updates limitations 
9 How to Use and Debug A/B System 
Updates 
Explains how to use and debug A/B System updates 
10 Frequently Asked Questions Lists frequently asked questions and answers  
 
1.2 References 
The following documents contain provisions which, through reference in this text, constitute provisions of the present 
document. 
 
[1] The Android OTA Package Tools: https://source.android.com/devices/tech/ota/tools.html 
[2] A/B (Seamless) System updates:  
https://source.android.com/devices/tech/ota/ab_updates 
https://source.android.com/devices/tech/ota/inside_packages.html 
[3] Implementing A/B Updates: https://source.android.com/devices/tech/ota/ab_implement  
[4] Virtual A/B Updates: https://source.android.com/docs/core/ota/virtual_ab 
[5] Configure ART: https://source.android.com/devices/tech/dalvik/configure  
[6] Ramdisk storage location: https://source.android.com/docs/core/architecture/partitions/generic-boot 
 
1.3 OTA Update Definitions 
For the purposes of the present document, the following terms and definitions apply: 
This chapter is included from [1]. 
 
Full updates: A full update is one where the entire final state of the device (system, boot, and recovery partitions) is 
contained in the package. As long as the device is capable of receiving the package and booting the recovery system, the 
package can install the desired build regardless of the current state of the device. 
 
Incremental updates: An incremental update contains a set of binary patches to be applied to the data already on the 
device. This can result in considerably smaller update packages: 
 
• Files that have not changed don't need to be included. 
• Files that have changed are often very similar to their previous versions, so the package need only contain an 
encoding of the differences between the two files. 
 
Note:  You can install the incremental update package only on a device that has the old or source build used when constructing the 
package. 
 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
Virtual A/B: Google introduces a new feature named Virtual A/B that can use COW device created by device mapper to 
save super partition size. 
 
1.4 OTA Abbreviations 
Please note the abbreviations and their explanations provided in Table 1-2. They are used in many fundamental definitions 
and explanations in this document and are specific to the information that this document contains.  
 
Table 1-2. Abbreviations 
Abbreviations Explanation 
LK Little Kernel 
OTA Over-The-Air 
 
1.5 Enable A/B System Updates 
Please set MTK_AB_OTA_UPDATER to yes in the following files (if MTK_AB_OTA_UPDATER does not exist in the 
corresponding files, please add this configuration in the files): 
 
• ProjectConfig.mk:  
– device/mediatekprojects/<project_name>/ProjectConfig.mk 
• Preloader: 
– vendor/mediatek/proprietary/bootable/bootloader/preloader/custom/<project_name>/<pr
oject_name>.mk 
• SystemConfig.mk: 
– device/mediatek/system/<mssi_xxxx> /SystemConfig.mk 
 
If the project is using LK: 
• LK: 
– vendor/mediatek/proprietary/bootable/bootloader/lk/project/<project_name>.mk 
 
If the project is using LK2: 
• LK2: 
– vendor/mediatek/proprietary/bootable/bootloader/lk2/project/<project_name>.mk 
 
1.6 Architecture Overview 
This section gives a brief description of the modules of the system and the relationship of the modules. 
 
1. Preloader boot control flow 
2. LK boot control flow 
3. A/B System partition layout 
4. Ramdisk location in A/B System updates 
5. Boot control HAL and HIDL 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
6. DM-verity for A/B System updates 
7. Fastboot for A/B System updates 
8. A/B system update process 
 
1.6.1 Preloader Boot Control Flow 
Read boot slot metadata Read misc 
partition
1. Mark slot as invalid
2. Rollback to previous suffix
Load next image and boot
Start
End
Boot to normal 
mode?
boot_successfull
y == 1
Yes
Ex: Recovery mode
One or more 
valid slot
Yes
No Goto Recovery mode
retry_count > 0 No
Decrease retry_count
Yes
No
Yes
No
Choose valid slot with 
highest priority 
 
Figure 1-1. Preloader boot control flow 
 
1.6.2 A/B System Partition Layout 
The partition layout for various types of systems is as follows: 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
 
 
The partition layout differences of various systems are as follows: 
 
• AB system no longer needs recovery and cache partitions. 
• Starting from Android Q, Google has added a dynamic partitioning function to put system, vendor, product and other 
partitions into super partitions. 
• Starting from Android R, Google has added the virtual A/B function. During operation, the system will only save a 
copy of the image information of super sub-partitions such as systems, vendor, and products, saving the storage 
space occupied by super partitions. 
 
1.6.3 Ramdisk Location in A/B System Updates 
There are differences in the storage locations of ramdisk information in different Android versions. Please refer to Google 
instructions for details: https://source.android.com/docs/core/architecture/partitions/generic-boot. 
1. If the system Android version is smaller than Android R, the location of the ramdisk is as follows: 
 
 
 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
2. If the system Android version is Android R or Android S, the location of the ramdisk is as follows: 
 
 
3. Starting from Android T , the location of the ramdisk is as follows: 
 
 
1.6.4 Boot Control HAL and HIDL 
MediaTek uses AOSP default boot control HIDL interface to access boot control HAL 
Source code path of bootctl is hardware/interfaces/boot 
 
Boot control HAL for update_engine 
• Android version > = U 
– Source code path of bootctl is vendor/mediatek/proprietary/hardware/bootctrl_service/  
• Android version > = R 
– Source code path of bootctl is vendor/mediatek/proprietary/hardware/bootctrl/  
 
Preloader (PL) and LK also have boot control API 
• PL:  
– vendor/mediatek/proprietary/bootable/bootloader/preloader/platform/common/bootctrl/ 
• LK:  
– vendor/mediatek/proprietary/bootable/bootloader/lk/platform/common/bootctrl/1.0 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
 
When the device first boots, the preloader sets the default values for the launch control structure. 
 
 
After device’s first OTA update, it will boot from B, because slot_B has higher priority than slot_A. 
 
 
After the device is successfully booted from slot_B for the first time, the successful_boot of slot_B will be set to 1. 
 
 
After the device is successfully booted from slot_B for the second time, the tries_remaining of slot_B will be set to 1. 
 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
 
1.6.5 A/B System Updates Process 
• Update_engine: 
– Executed by update_engine.rc 
– Only responsible for update partition like role of recovery and updater 
– Uses payload.bin which is in update.zip to update each partition 
– Runs in little core and background 
– Calls boot_control HAL/HIDL interface 
– Runs a postinstall program from the new partition after writing all the unused slot partitions 
 
Update_engine should NOT do: 
– Modifies the partition table (Layout changed) 
– Modifies the contents of partitions in the current slot 
 
• Update_engine_client: 
– Update_engine_client is for debug only, this process could get update status. 
 
• Update_verifier: 
– Update_verifier is executed by update_verifier.rc 
– If the product supports verity, check whether verity mode is enforcing mode or not 
– Mark boot successful flag when the platform boots up 
 
1.6.6 Virtual A/B 
• Virtual A/B is introduced in Android R that can use COW device to save super partition size. But after the update flow 
is done, it needs another system reboot step to merge the complete super partition content. 
• Virtual A/B is a GMS requirement on devices launching with Android 11 and higher. 
• Limitation:  
– Sideload update under recovery for incremental package is no longer supported.   
– The following note is from Google VAB document and it depicts the detail of the limitation. 
The userdata partition cannot be mounted under recovery if it is encrypted. Free Blocks within the userdata 
partition cannot be determined, so we cannot allocate COW files on the userdata partition. Hence, we cannot 
create new snapshots in recovery. Sideloading an incremental OTA on a Virtual A/B device in recovery is 
impossible and unsupported.  
 
• This feature is enabled by default, and it can be disabled by changing the build flow. 
• In build/make/target/product/virtual_ab_ota.mk, PRODUCT_VIRTUAL_AB_OTA and its property are 
assigned, so the virtual A/B OTA can be disabled by skipping this makefile and use legacy A/B update by removing the 
following line in device/mediatek/system/common/device.mk and 
device/mediatek/vendor/common/device.mk, and split build again. 
$(call inherit-product, $(SRC_TARGET_DIR)/product/virtual_ab_ota.mk) 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
1.7 Guideline for Generating A/B OTA Package 
This section gives a description of a group of generating A/B System OTA package guideline. Starting with Android Q, MTK 
only supports split build by default. Please select the corresponding build package method according to the build method 
used by the project. 
 
1.7.1 Generate A/B OTA Update Package by Split Build 1.0 (LD1.0) Step by Step 
1.7.1.1 Full Build Project with Full otapackage.zip and targefiles.zip 
1. Get split build 1.0 (LD1.0) command 
• Execute the following command to obtain the complete split build command: 
./vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py full_${PROJ_NAME}-
${eng|userdebug|user} 
 
For example: 
• Input command 
./vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py full_tb8786p1_64-
userdebug 
 
• Output command 
source build/envsetup.sh && export OUT_DIR=out_sys && lunch sys_mssi_t_64_cn-userdebug && 
make sys_images 
 
source build/envsetup.sh && export OUT_DIR=out && lunch vnd_tb8786p1_64-userdebug && make 
vnd_images krn_images 
 
python out_sys/target/product/mssi_t_64_cn/images/split_build.py --system-dir 
out_sys/target/product/mssi_t_64_cn/images --vendor-dir 
out/target/product/tb8786p1_64/images --kernel-dir out/target/product/tb8786p1_64/images --
output-dir out/target/product/tb8786p1_64/merged 
 
These three commands represent: 
• Build system 
source build/envsetup.sh && export OUT_DIR=out_sys && lunch sys_mssi_t_64_cn-userdebug && 
make sys_images 
 
• Build vendor and kernel 
source build/envsetup.sh && export OUT_DIR=out && lunch vnd_tb8786p1_64-userdebug && make 
vnd_images krn_image 
 
• Merge 
python out_sys/target/product/mssi_t_64_cn/images/split_build.py  
--system-dir out_sys/target/product/mssi_t_64_cn/images  
--vendor-dir out/target/product/tb8786p1_64/images  
--kernel-dir out/target/product/tb8786p1_64/images  
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
--output-dir out/target/product/tb8786p1_64/merged 
 
2. Build full otapckage.zip 
If you need to build full otapackage.zip, please add the ‘--otapackage’ parameter to the merge command. 
For example: 
python out_sys/target/product/mssi_t_64_cn/images/split_build.py  
--system-dir out_sys/target/product/mssi_t_64_cn/images  
--vendor-dir out/target/product/tb8786p1_64/images  
--kernel-dir out/target/product/tb8786p1_64/images  
--output-dir out/target/product/tb8786p1_64/merged  
--otapackage 
 
OTA full package path: 
E.g., out/target/product/${PROJ}/merged/otapacakge.zip 
 
3. Build targetfiles.zip 
If you need to build targetfiles.zip, please add the ‘--targetfiles’ parameter to the merge command. 
For example: 
python out_sys/target/product/mssi_t_64_cn/images/split_build.py  
--system-dir out_sys/target/product/mssi_t_64_cn/images  
--vendor-dir out/target/product/tb8786p1_64/images  
--kernel-dir out/target/product/tb8786p1_64/images  
--output-dir out/target/product/tb8786p1_64/merged  
--targetfiles 
 
Target package path: 
E.g., out/target/product/${PROJ}/merged/ target_files.zip 
 
1.7.1.2 Build Incremental Package 
Define the current version as the Source version and the upgraded version as the Target version. Here are the steps to 
follow: 
1. Follow the instructions in Section 1.7.1.1 Full Build Project with Full otapackage.zip and targefiles.zip to perform a split 
build and obtain the targetfiles.zip for both the Source version and the Target version. Make sure that the compilation 
time of the Target version is later than that of the Source version. 
2. Rename the targetfiles.zip of the Source version as “source.zip” and the targetfiles.zip of the Target version as 
“target.zip”. 
3. In the project compilation environment, execute the following commands sequentially:  
 
Source & Lunch:  
source build/envsetup.sh && export OUT_DIR=out_sys && lunch sys_${SYS_RPOJ}-
${eng|userdebug|user} 
 
source build/envsetup.sh && export OUT_DIR=out && lunch vnd_${PROJ}-${SYS_PROJ}; 
 
 
 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
Centralize tools to out/host/linux-x86:  
cp out_sys/host/linux-x86/* out/host/linux-x86/ -rf 
 
cp out_sys/soong/host/linux-x86/* out/host/linux-x86/ -rf 
 
cp out/soong/host/linux-x86/* out/host/linux-x86/ -rf 
 
Build incremental package: 
Android version ≤ Android T:  
python3 build/tools/releasetools/ota_from_target_files --block -v -p out/host/linux-x86  -k 
device/mediatek/common/security/releasekey -i source.zip target.zip delta.zip 
 
Android version ≥ Android U: 
./out/host/linux-x86/bin/ota_from_target_files -v -p out/host/linux-x86 -k 
device/mediatek/common/security/releasekey -i source.zip target.zip delta.zip 
 
If your project do not have releasekey, please delete “ -k device/mediatek/common/security/releasekey” in 
command, which will use default key (test key). Or use -k to specify the key path used by your project. 
 
• source.zip: The targetfiles.zip file for the Source version. 
• target.zip: The targetfiles.zip file for the Target version. 
• delta.zip: The incremental package that upgrades from the Source version to the Target version. 
 
Note: The specific naming of targetfiles.zip and incremental package is not restricted, and customers can set their own names as per 
their preference. 
 
1.7.2 Generate A/B OTA Update Package by Split Build 2.0 (LD2.0) Step by Step 
1.7.2.1 Full Build Project with Full otapackage.zip and targefiles.zip 
1. Get split build 2.0 (LD2.0) command 
Execute the following command to obtain the complete split build command: 
./vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py full_${PROJ_NAME}-
${eng|userdebug|user} 
 
For example: 
• Input command 
./vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py full_ 
auto8676p1_64_bsp-userdebug 
 
• Output command 
source build/envsetup.sh && export OUT_DIR=out_sys && lunch sys_mssi_auto_64_cn_armv82_car-
userdebug && make sys_images  
 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
source build/envsetup.sh && export OUT_DIR=out_hal && lunch hal_mgvi_spm_64_armv82-userdebug 
&& make hal_images 
 
source build/envsetup.sh && export OUT_DIR=out_krn && lunch krn_mgk_64_k61-userdebug && make 
krn_images 
 
source build/envsetup.sh && export OUT_DIR=out && lunch vext_auto8676p1_64_bsp-userdebug && 
make vext_images 
 
python out_sys/target/product/mssi_spm_64_cn_armv82/images/split_build.py  
--system-dir out_sys/target/product/mssi_spm_64_cn_armv82/images  
--vendor-dir out_hal/target/product/mgvi_spm_64_armv82/images  
--kernel-dir out_krn/target/product/mgk_64_k61/images  
--vext-dir out/target/product/auto8676p1_64_bsp/images  
--output-dir out/target/product/auto8676p1_64_bsp/merged 
 
These five commands represent: 
• Build system 
source build/envsetup.sh && export OUT_DIR=out_sys && lunch sys_mssi_auto_64_cn_armv82_car-
userdebug && make sys_images  
 
• Build hal 
source build/envsetup.sh && export OUT_DIR=out_hal && lunch hal_mgvi_spm_64_armv82-userdebug 
&& make hal_images 
 
• Build kernel 
source build/envsetup.sh && export OUT_DIR=out_krn && lunch krn_mgk_64_k61-userdebug && make 
krn_images 
 
• Build vext 
source build/envsetup.sh && export OUT_DIR=out && lunch vext_auto8676p1_64_bsp-userdebug && 
make vext_images 
 
• Merge 
python out_sys/target/product/mssi_t_64_cn/images/split_build.py  
--system-dir out_sys/target/product/mssi_t_64_cn/images  
--vendor-dir out/target/product/tb8786p1_64/images  
 
2. Build full otapckage.zip 
If you need to build full otapackage.zip, please add the ‘--otapackage’ parameter to the merge command. 
For example: 
python out_sys/target/product/mssi_spm_64_cn_armv82/images/split_build.py  
--system-dir out_sys/target/product/mssi_spm_64_cn_armv82/images  
--vendor-dir out_hal/target/product/mgvi_spm_64_armv82/images  
--kernel-dir out_krn/target/product/mgk_64_k61/images  
--vext-dir out/target/product/auto8676p1_64_bsp/images  
--output-dir out/target/product/auto8676p1_64_bsp/merged  
--otapackage 
 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
Ota full package path: 
E.g., out/target/product/${PROJ}/merged/otapacakge.zip 
 
3. Build targetfiles.zip 
If you need to build targetfiles.zip, please add the ‘--targetfiles’ parameter to the merge command. 
For example: 
python out_sys/target/product/mssi_spm_64_cn_armv82/images/split_build.py  
--system-dir out_sys/target/product/mssi_spm_64_cn_armv82/images  
--vendor-dir out_hal/target/product/mgvi_spm_64_armv82/images  
--kernel-dir out_krn/target/product/mgk_64_k61/images  
--vext-dir out/target/product/auto8676p1_64_bsp/images  
--output-dir out/target/product/auto8676p1_64_bsp/merged  
--targetfiles 
 
Target package path: 
E.g., out/target/product/${PROJ}/merged/ target_files.zip 
 
1.7.2.2 Build Incremental Package 
Please refer to the steps in Section 1.7.1.2 Build Incremental Package to build an incremental package. 
1.8 A/B System Updates Limitations 
This section describes A/B system updates limitations.  
This chapter is included from [2]. 
 
• OTA does not support modifying the partition table and changing the partition layout. 
• Modifying the partition content of the current slot is not supported. 
• Mutual upgrade between non-AB and AB is not supported. 
 
1.9 How to Use and Debug A/B System Updates 
1.9.1 How to Use A/B Updates 
• Normal mode:  
– PC must install python  
– Put update_device.py (system/update_engine/scripts/update_device.py) to adb folder 
– Connect phone with PC via USB cable 
– Python update_device.py update.zip in adb window 
 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
 
• Recovery mode:  
– ADB sideload update (VAB only supports full OTA): 
▪ adb reboot recovery 
▪ choose “Apply update form ADB” on recovery UI 
▪ adb sideload d:\update.zip 
– SD card update: 
▪ adb push update.zip /storage/F205-EFBE (/storage/F205-EFBE is SD card mount directory) 
▪ adb reboot recovery 
▪ choose “Apply update form SD card” on recovery UI 
▪ go on choosing the update.zip fi 
 
1.9.2 How to Debug A/B Updates 
Log location 
• Normal mode:  
– Method one： 
▪ mtklog\mobilelog\APLogxxx\main_log 
▪ Search update_engine key word 
– Method Two： 
▪ adb pull data/misc/update_engine_log 
▪ Search update_engine key word 
• Recovery mode: 
– Adb pull /tmp/recovery.log 
 
Common error code 
• All error code is in system/update_engine/common/error_code.h 
 
1.10 Frequently Asked Questions 
1.10.1 Does flashtool Need to Download Both A and B Images  
• No, only the preloader partition needs to download the A and B images, and other partitions only download the A 
images by default.  
• After flashtool downloads image, platform only runs on A images. 
• A image could OTA to B empty partition through incremental update package 
 
1.10.2 How to Know What Image is Running (A or B) 
• Check property ro.boot.slot_suffix (getprop ro.boot.slot_suffix) 
• Check androidboot.slot_suffix in command line (/proc/cmdline) 
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
MT8676 Android OTA 
User Manual 
 
Confidential B 
1.10.3 Could A Partition Load B Partition (e.g., lk_a loads boot_b) 
• No, suffix must be the same. It’s like dual system. 
 
1.10.4 What Partition Needs A/B 
• If partition needs OTA update, this partition must have both of A and B. 
 
1.10.5 What’s Feature Option for A/B System 
• MTK_AB_OTA_UPDATER 
 
1.10.6 If Handset Ships without A/B, Could Handset Become A/B through OTA 
Update 
• No, AB and non-AB cannot upgrade each other. 
 
1.10.7 Who Set boot_sucessfully Flag 
• Update_verfier process will set boot_sucessfully flag. 
 
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
MT8676 Android OTA 
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
# SRC0197 MT8676_Android_SDCard_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_SDCard_User_Manual_ V1.0.pdf

SHA-256：36817cbb13397a9e28b5c3f5c6a494fefae608b0eaa4aa6024ad271a2b803ba3

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0197.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Android SDCard  
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
MT8676 Android SDCard 
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
MT8676 Android SDCard 
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
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 7 
 SDCard is not Recognized, VDD Voltage could not be Measured ································································· 7 
 SDCard is Recognized while Power On with Card but Failed while Hot-plug ················································ 7 
Exhibit 1 Terms and Conditions ·········································································································································· 8 
 
 
List of Figures 
Figure 1-1. Initialization flow of UHS-I card ································································································································ 5 
Figure 1-2. DTS node for SDCard ················································································································································ 6 
Figure 1-3. Pinctrl node of SDR104 mode ·································································································································· 6 
Figure 1-4. dws setting for detect pin ········································································································································ 7 
 
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
MT8676 Android SDCard 
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
MMC MultiMedia Card 
SDR104 Signal Data Rate up to 104MB/s@208MHz 
SDR12 Signal Data Rate up to 12.5MB/s@25MHz 
SDR25 Signal Data Rate up to 25MB/s@50MHz 
SDR50 Signal Data Rate up to 50MB/s@100MHz 
UHS-I Ultra High Speed Phase I card 
 
1.2 Architecture/Process Overview 
 SDCard Introduction 
SDCard is a new generation of high-speed storage device based on semiconductor flash memory, and developed from 
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
MT8676 Android SDCard 
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
MT8676 Android SDCard 
User Manual 
Confidential B 
 DTS Node 
 
Figure 1-2. DTS node for SDCard 
 
(1) SD2.0 card needs to configure ”cap-sd-highspeed”, SD3.0 ultra high speed card needs to configure ”sd-uhs-xxx” 
(2) SD driving strength could be configured in the pinctrl node of the corresponding mode, such as the SDR104 mode 
shown as Figure 1-3; 
 
 
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
MT8676 Android SDCard 
User Manual 
Confidential B 
(3) SDCard detect pin could be configured by ”cd-gpios”, GPIO_ACTIVE_LOW represents low card insertion level, and 
GPIO_ACTIVE_HIGH represents high card insertion level 
(4) The”vmmc-supply” and ”vqmmc-supply”are configured according to actual used SDCard VDD power and Host I/O 
power. If it is necessary to use fast-power-off (VMCH hardware power off when SDCard is pulled out) function, “vmmc-
supply” should be configured as &mt6373_vmch_eint_high (match with GPIO_ACTIVE_LOW of “cd-gpios”) or 
&mt6373_vmch_low(match with GPIO_ACTIVE_HIGH of “cd-gpios”); and if it is unnecessary to use fast-power-off 
function, “vmmc-supply” should be configured as &mt6373_vmch 
1.4 Frequently Asked Questions/Troubleshooting 
 SDCard is not Recognized, VDD Voltage could not be Measured 
(1) Checks the correction of Kernel config and DTS according to the previous section; 
(2) If VDD supplied power is MT6373, and detect pin is connected to SD_DET pin of MT6373, check if the configured 
power node of “vmmc-supply” is matched with the polarity of detect pin; 
(3) If the result of step (2) is okay, configure “vmmc-supply” as &mt6373_vmch and check VDD voltage, correct voltage 
represents there is a problem in fast-power-off function, submit PMIC issue to MTK; 
(4) If VDD could not power up yet in step (3), catch kernel log and submit SDCard issue to MTK. 
 
 SDCard is Recognized while Power On with Card but Failed while Hot-plug 
(1) Checks the correction of “cd-gpios” configuration in DTS according to the previous section; 
(2) If DTS configuration is correct, check the correction of the GPIO configuration for detect pin in the file whose path is 
vendor/mediatek/proprietary/tools/dct/dws/mt6897/${PROJECT}.dws, refer to the configuration shown 
in Figure 1-4; 
 
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

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Android SDCard 
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
# SRC0198 MT8676_Android_SDK_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_SDK_User_Manual_ V1.0.pdf

SHA-256：f202b6567e43ea42434564c1985abd4bc8827884f65e72de3ca96c6082bb44d5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0198.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Android SDK User Manual 
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
MT8676 Android SDK 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Dandan Hu Official release 
 
  
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
MT8676 Android SDK 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
1 SDK ············································································································································································ 4 
1.1 Overview ·································································································································································· 4 
1.1.1 Introduction ·················································································································································· 4 
1.1.2 SDK Function Introduction ···························································································································· 4 
1.1.3 Attention ······················································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
1.2.1 Internal Structure Diagram ··························································································································· 4 
1.2.2 API List ··························································································································································· 5 
1.3 Configuration/Customization Guideline ················································································································· 48 
1.3.1 Main Features Introduction ························································································································ 48 
1.3.2 Special Notes on Collision Detection ·········································································································· 49 
1.4 Frequently Asked Questions/Troubleshooting ······································································································· 50 
1.4.1 Common SDK Questions ····························································································································· 50 
1.4.2 Methods to Toggle Debug Logs ··················································································································· 51 
Exhibit 1 Terms and Conditions ········································································································································ 52 
 
 
List of Figures 
Figure 1-1. SDK internal structure diagram ································································································································ 5 
Figure 1-2. SPM SDK flow ··························································································································································· 5 
 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
1  SDK 
1.1 Overview 
 Introduction 
This chapter primarily introduces the MT8676 SDK interface as well as common methods for handling SDK issues. 
 
SmartPlatform is a unique product. To reduce the difficulty of customer APK development and to meet more customized 
requirements, MediaTek provides a set of SDK interfaces exclusive to SmartPlatform. This enables developers to quickly 
and conveniently develop quality applications. 
 
 SDK Function Introduction 
The SDK provides APIs for customers to call, allowing each camera to independently perform preview, capture, record, and 
YUV callback (PictureSequence). Additionally, it supports multiple processes using a single camera simultaneously. 
 
 Attention 
•  In the SDK, considering synchronization and efficiency issues, callbacks are processed directly in the binder thread 
without creating a new thread. Therefore, it is advisable for the app to start a new thread to handle the callback after 
receiving it. If a new thread is not started, do not continue to call SDK interfaces within the callback (as it may cause a 
deadlock); also, avoid performing time-consuming tasks within the callback. 
• Regarding the photography process, to avoid extending the duration of taking photos and interrupting the 
preview/record, the current approach binds the photography and preview processes together. If you need to adjust 
the size of the photo, it should be set through setPictureSize before setting the setPreviewSurface. 
 
1.2 Architecture/Process Overview 
 Internal Structure Diagram 
The internal structure diagram of the MT8676 SDK is shown in Figure 1-1: 
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
MT8676 Android SDK 
User Manual 
Confidential B 
INTERNAL USE
Confidential B
Demo App
SPM SDK
SPM Service
CarCamDeviceClient
 Ipod Socket server
CareventHandler
Collision detection
Sensor Service
 Carevent
Driver
 Ipod
Camera
Device
Record
Mgr
Camera
Service
Media
Codec
App Process
SPM Service Process
 
Figure 1-1. SDK internal structure diagram 
 
MT8676 SDK flow is shown in Figure 1-2: 
 
INTERNAL USE
Confidential B
Start
SmartPlatform
Manager
SpmCameraDevice
setSurfaceDisplay
CarCamDevice
Client
createSession
submitRequest
End
 
Figure 1-2. SPM SDK flow 
 
 API List 
1.2.2.1 SmartPlatformManager 
Description:  
The primary interface class of the SmartPlatform SDK, which is a singleton pattern. It manages the platform’s camera 
recording, collision detection, shutdown state settings, etc. 
Import SmartPlatformManager: 
import com.mediatek.smartplatform.SmartPlatformManager; 
Instantiate (create) an object: 
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
MT8676 Android SDK 
User Manual 
Confidential B 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
 
 get() 
Function:   
public static SmartPlatformManager get() 
Returns: 
Returns an instance of SmartPlatformManager. 
Details: 
SmartPlatformManager exists in the app as a singleton, which means that the same instance of SmartPlatformManager is 
returned wherever this method is called within the same app. The SmartPlatformManager instance is created wh en the 
class is loaded, following the “eager initialization” pattern. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
 
 isServiceAlive 
Function: 
public boolean isServiceAlive() 
Returns: 
Indicates whether the SmartPlatform service and Camera Service obtained by the APK process are available.  
Details: 
• If the SmartPlatform Service or Camera Service has not been registered with the system services, or if the registration 
fails, this interface will return false. This means that some calling methods on the SmartPlatformManager object waill 
result in exceptions. Therefore, the app needs to ensure that the SmartPlatform service is available before calling 
related interfaces. 
• This interface typically returns false when the smartplatformserver process exits unexpectedly. The 
smartplatformserver process will restart, and at this time, the app will also restart. However, the app may restart 
before the smartplatformserver process, and at this moment, the SmartPlatform service may not be ready, leading to 
a NullPointerException when the app calls related interfaces, causing the app to exit. 
• For the above situation, it is recommended that the following logic operations should be implemented for the app: 
1. When the app restarts after an unexpected exit, first determine if the service is available (only needs to be 
checked once). 
2. If not available, delay and wait for the service to be ready. Do not call related interfaces (such as 
openCameraDevice()) before the service is ready. 
3. Once the service is ready, proceed with the normal process. 
Examples: 
      SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
      if (!mSmartPlatformManager.isServiceAlive()){ 
         // You can delay and wait before determining if it is available 
      mHandler.sendEmptyMessageDelay(INIT_DELAY,500); 
       } else{ 
          // Follow the normal initialization process. 
       } 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 getCameraIdList 
Function:   
public String[] getCameraIdList () 
Returns: 
Returns a list of camera devices currently connected to the platform, including those in use. 
Details: 
The camera list obtained by this function refers to the cameras that are currently physically connected to the platform. 
Unlike getCameraIdList in android.hardware.camera2.CameraManager, this function returns cameras that are 
present (1), not present (0), and in use (-2). The CameraManager only returns cameras that are present. For specific status 
information, refer to getCameraStatus. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String cameraList[] = mSmartPlatformManager.getCameraIdList(); 
 
 getAvmCameraId 
Function: 
public String getAvmCameraId () 
Returns: 
Returns the ID of the Around View Monitor (AVM) camera device currently connected to the platform. 
Details: 
The camera list obtained by this function refers to the AVM camera IDs that are currently physically connected to the 
platform. These camera IDs are mainly used for the CarcorderDemo APK calls and are suitable for AVM DVR . 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String cameraId = mSmartPlatformManager.getAvmCameraId(); 
 
 getCameraCharacteristics 
Function:  
public CameraCharacteristics getCameraCharacteristics(String cameraId) 
Parameters: 
cameraId The identifier corresponding to the camera 
Returns: 
The data type is android.hardware.camera2.CameraCharacteristics. The cameraId corresponds to the device 
capabilities of the camera. 
Details: 
The cameraId is obtained through getCameraIdList. This API is equivalent to getCameraCharacteristics in 
android.hardware.camera2.CameraManager. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String cameraList[] = mSmartPlatformManager.getCameraIdList(); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
mSmartPlatformManager. getCameraCharacteristics(cameraList[0]); 
 
 openCameraDevice 
Function: 
public SpmCameraDevice openCameraDevice(String cameraIdStr) 
Parameters: 
cameraIdStr The identifier corresponding to the camera. 
Returns: 
Returns a SpmCameraDevice object. 
Details: 
• The parameter cameraIdStr is the identifier corresponding to the camera, with each camera having a unique ID 
value. This ID is obtained through getCameraIdList.  
• Within the same app, calling this function with the same ID each time will result in the same CameraDevice object. 
The object is only created upon the first call. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String ids[] = mSmartPlatformManager.getCameraIdList(); 
SpmCameraDevice cameraDevice0= mSmartPlatformManager.openCameraDevice(ids[0]); 
 
 openAvmCameraDevice 
Function: 
public SpmCameraDevice openCameraDevice() 
Returns: 
Returns a SpmCameraDevice object. 
Details: 
Within the same app, each call to this function will result in the same CameraDevice object. The object is only created 
upon the first call.  
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
SpmCameraDevice avmcameraDevice= mSmartPlatformManager.openAvmCameraDevice(); 
 
 closeCameraDevice 
Function: 
public void closeCameraDevice(String cameraId) 
Parameters: 
cameraId The identifier corresponding to the camera 
Details: 
• The parameter cameraId is the identifier ID corresponding to the camera, with each camera having a unique ID value. 
This ID is obtained through getCameraIdList. If this CameraDevice is no longer needed, you should call this function to 
shut it down, allowing for the release and recycling of resources. 
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
MT8676 Android SDK 
User Manual 
Confidential B 
• After calling this function, all references previously obtained through openCameraDevice will no longer be available. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String ids[] = mSmartPlatformManager.getCameraIdList(); 
SpmCameraDevice cameraDevice0= mSmartPlatformManager.openCameraDevice(ids[0]); 
mSmartPlatformManager.closeCameraDevice(ids[0]); 
 
 closeAvmCameraDevice 
Function: 
public void closeAvmCameraDevice() 
Details: 
After calling this function, the references previously obtained through openAvmCameraDevice will no longer be available. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
SpmCameraDevice avmcameraDevice0= mSmartPlatformManager.openAvmCameraDevice(); 
mSmartPlatformManager.closeAvmCameraDevice(); 
 
 addServiceDeathCallback 
Function：   
public void addServiceDeathCallback(ServiceDeathCallback callback) 
Parameters: 
Callback for when the SmartPlatformServer process exits (dies). 
Details: 
• ServiceDeathCallback is defined as follows: 
  public interface ServiceDeathCallback  { 
     void onDeath(int arg1,String arg2); 
  } 
• If the same ServiceDeathCallback is added multiple times, there will only be one instance of the callback.  
• The triggering of this callback means that the SmartPlatformServer process has died, and at this point, the related 
services of SmartPlatform Service are no longer available. The current mechanism is that after the 
SmartPlatformServer dies (is killed unexpectedly), it will be reloaded and run again. The app needs to re-acquire the 
service, as the previous SmartPlatformManager, SpmCameraDevice objects can no longer be used. 
Examples: 
      SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
      mSmartPlatformManager. addServiceDeathCallback ( 
               new ServiceDeathCallback() { 
                    public void onDeath(int arg1,String arg2){ 
                      } 
              }  
       ); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 removeServiceDeathCallback 
Function: 
public void removeServiceDeathCallback (ServiceDeathCallback callback) 
Parameters: 
callback The callback when the SmartPlatformServer process exits (dies) 
Details: 
Removes the registered callback object.  
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.removeServiceDeathCallback(callback); 
 
 addCameraAvailableCallback 
Function: 
public void addCameraAvailableCallback(ServiceDeathCallback callback) 
Parameters: 
callback The callback that returns the camera status 
Details: 
• CameraAvailableCallback is defined as follows: 
  public interface CameraAvailableCallback  { 
     void onAvailable (String cameraId, int status); 
  } 
• If the same CameraAvailableCallback is added multiple times, there will only be one instance of the callback. 
• The triggering of this callback means that a camera has been added or removed. When a camera is removed, you can 
perform operations related to stopping the recording. 
Examples: 
      SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
      mSmartPlatformManager. addCameraAvailableCallback ( 
               new CameraAvailableCallback () { 
                    public void onAvailable (String cameraId, int status){ 
                      } 
              }  
       ); 
 
 removeCameraAvailableCallback 
Function: 
public void removeCameraAvailableCallback (CameraAvailableCallback callback) 
Parameters: 
callback The callback that returns the camera status 
Details: 
Removes the registered callback object. 
Examples: 
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
MT8676 Android SDK 
User Manual 
Confidential B 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.removeCameraAvailableCallback(callback); 
 
 getIpodProxy 
Function: 
public IpodProxy getIpodProxy() 
Returns: 
Returns a IpodProxy object. 
Details: 
Refer to the IpodProxy introduction. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
IpodProxy mIpodProxy=mSmartPlatformManager.getIpodProxy(); 
 
 getCollisionProxy 
Function: 
public CollisionProxy getCollisionProxy() 
Returns: 
Returns a CollisionProxy object. 
Details: 
Refer to the CollisionProxy introduction. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
CollisionProxy mCollisionProxy=mSmartPlatformManager.getCollisionProxy(); 
 
 getCarEventProxy 
Function: 
public CarEventProxy getCarEventProxy() 
Returns: 
Returns a CarEventProxy object. 
Details: 
Refer to the CarEventProxy introduction. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
CarEventProxy mCarEventProxy=mSmartPlatformManager.getCarEventProxy(); 
 
 getNumberOfCameras 
Function: 
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
MT8676 Android SDK 
User Manual 
Confidential B 
public int getNumberOfCamera() 
Returns: 
Returns the number of available cameras, including those that are present, not present, and in use.  
Details: 
Refer to the description of getCameraIdList; essentially, this method returns the size of the array returned by 
getCameraIdList. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
int cameraNumber = mSmartPlatformManager.getNumberOfCamera(); 
 
 getCameraStatus 
Function: 
public int getCameraStatus(String cameraId) 
Returns: 
Returns the status of the camera ID being requested. 
Details: 
The meanings of the statuses are as described in 
frameworks/av/camera/aidl/android/hardware/ICameraServiceListener.aidl: 
// Device physically unplugged 
const int STATUS_NOT_PRESENT = 0; // Not present 
// Device physically has been plugged in and the camera can be used exclusively 
const int STATUS_PRESENT = 1; // Present and available 
// Device physically has been plugged in but it will not be connect-able until enumeration 
is complete 
const int STATUS_ENUMERATING = 2; // Status returned by the camera when the enumerator 
provider is running, will change to PRESENT after enumeration is complete 
// Camera is in use by another app and cannot be used exclusively 
const int STATUS_NOT_AVAILABLE = -2; // In use by another process/app, but since MediaTek 
SDK supports multi-process usage, it is considered available 
// Use to initialize variables only 
const int STATUS_UNKNOWN = -1; // Initial state 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
int cameraStatus = mSmartPlatformManager.getCameraStatus(cameraId); 
 
1.2.2.2 PreviewSource 
Import PreviewSource: 
import com.mediatek.smartplatform.PreviewSource; 
Object Description: 
Used to distinguish between multiple previews. The same camera device can have individual previews. Typically, 
GENERAL_CAMERA or PREVIEW_[0-4] is used. 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
1.2.2.3 RecordSource 
Import RecordSource: 
import com.mediatek.smartplatform.RecordSource; 
Object Description: 
Used to distinguish the type of recording. The same camera device can support multiple streams of recording at different 
aspect ratios. Typically, GENERAL_CAMERA or RECORD_[0-4] is used for recording. For low-resolution recording, 
GENERAL_CAMERA_SUB or RECORD_EX_[0-4] can be selected. 
 
1.2.2.4 PictureSequenceSource 
Import PictureSequenceSource:  
import com.mediatek.smartplatform.PictureSequenceSource; 
Object Description: 
Used to distinguish the type of PictureSequenceSource. The same camera device can capture multiple streams of 
continuous images at different resolutions. Typically, GENERAL_CAMERA is used. 
 
1.2.2.5 RecordConfiguration 
Import RecordConfiguration:   
import com.mediatek.smartplatform.RecordConfiguration; 
Instantiate (create) an object: 
RecordConfiguration recordConfig= RecordConfiguration.get(recordSource); 
 
 mCamcorderProfile 
Class: android.media.CamcorderProfile 
Detail: Settings for the video file format, frame rate, and video resolution.  
 
 mOutPutFilePath 
Class: java.lang.String 
Detail: The save path for the record video file. 
 
 mOutPutFileName 
Class: java.lang.String 
Detail: The prefix for the record video file. 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 mVideoCallback 
Class: com.mediatek.smartplatform.SpmCameraDevice.VideoCallback 
Detail: The callback when video-related events occur. 
• VideoCallback is defined as follows: 
    public interface VideoCallback { 
    public static final int VIDEO_EVNET_ADD_FILE_IN_GALLERY=0; 
    public static final int VIDEO_EVNET_DELETE_FILE_IN_GALLERY=1; 
    public static final int VIDEO_EVNET_SDCARD_FULL=2; 
    public static final int VIDEO_EVNET_RECORD_STATUS_START=3; 
    public static final int VIDEO_EVNET_RECORD_STATUS_STOP =4; 
    public static final int VIDEO_EVNET_RECORD_RECORDING_ERROR=5; 
    public static final int VIDEO_EVNET_RECORD_SDCARD_DAMAGED=6; 
    public static final int VIDEO_EVNET_LOWRES_KEYPOINT_START =7; 
    public static final int VIDEO_EVNET_LOWRES_KEYPOINT_STOP =8; 
    public static final int VIDEO_EVNET_KEYPOINT_START =9; 
    public static final int VIDEO_EVNET_KEYPOINT_STOP =10; 
 
    void onVideoTaken(int eventType,int cameraId, int recorderSource, String videoname,int 
starTime, int endTime); 
    void onVideoTake(VideoInfo videoInfo); 
    void onVideoFrame(byte[] data,int dataType,int size,int cameraId, int recorderSource); 
  }   
• VideoInfo is a collection of eventType, cameraId, etc., and the use of multiple parameters in onVideoTaken will be 
discontinued in the future. 
• The meanings of eventType in onVideoTaken with [VideoInfo] are as follows: 
– VIDEO_EVNET_ADD_FILE_IN_GALLERY Indicates that the recording is complete, and the video file has been 
successfully saved. The video file path can be obtained through videoname. 
– VIDEO_EVNET_DELETE_FILE_IN_GALLERY Received when a video file is deleted, which generally occurs during 
loop recording to free up space by deleting previous video files. 
– VIDEO_EVNET_SDCARD_FULL Detected when the SD Card is full during video recording. 
– VIDEO_EVNET_RECORD_RECORDING_ERROR Occurs when there is an error during video recording. 
– VIDEO_EVNET_RECORD_SDCARD_DAMAGED Detected when the SD Card is damaged during video recording. If the 
write speed of the SD Card is below a certain threshold, it may also be considered damaged. 
– VIDEO_EVNET_KEYPOINT_START Indicates the start of keypoint marking. 
– VIDEO_EVNET_KEYPOINT_STOP Indicates the end of keypoint marking. 
• The startTime and endTime in onVideoTaken with [VideoInfo]: 
When VIDEO_EVENT_ADD_FILE_IN_GALLERY is received, it indicates the start and end time of the video file 
recording. Note that enableVideoWithTimeCallback(true) must be set.  
• onVideoFrame allows receiving each frame of video data: 
data: The buffer to save the data.  
dataType: A reserved parameter that may be used to distinguish between HD and SD data.  
size: Indicates the size of the video data, which is generally less than the size of the data array. The size of the video 
data obtained in each callback may vary.. 
cameraId: Returns the cameraId of the current video data. 
recoderType: Returns the recorderType of the current video data 
• recorderSource corresponds to the recorderSource in startRecord. 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 mAudioCallback 
Class: com.mediatek.smartplatform.SpmCameraDevice.AudioCallback  
Detail: The callback for audio data 
• AudioCallback is defined as follows: 
   public interface AudioCallback { 
     void onAudioFrame(byte[] data, int dataType, int size, int cameraId, int 
recorderSource); 
   } 
• onAudioFrame allows receiving each frame of audio data: 
data: The buffer to save the data. 
dataType: A reserved parameter. 
size: The size of the valid data, which is generally less than the size of data.  
cameraId: The cameraId currently returning the audio data 
• recorderSource: The recorder source currently returning the audio data, corresponding to the one in startRecord. 
 
 mRecordStatusCallback 
Class: com.mediatek.smartplatform.SpmCameraDevice.RecordStatusCallback 
Detail: The callback when the recording status changes 
Details： 
• RecordStatusCallbac is defined as follows: 
  public interface RecordStatusCallback{ 
       public static fianl int RECORD_STATUS_START      = 0; 
       public static fianl int RECORD_STATUS_STOP       = 1; 
       public static fianl int RECORD_STATUS_RECORDING  = 2; 
       void onRecordStatusChanged(int status,int cameraid,int recorderSource); 
  } 
• The callback is triggered when the recording status changes. 
 
 mKeypointCallback 
Class: com.mediatek.smartplatform.SpmCameraDevice.KeyPointCallback 
Detail: The callback when keypoint data is notified to the app 
• KeypointCallback is defined as follows: 
  public interface KeypointCallback{ 
void onKeypointFrame(byte[] data,int dataType,int size,String cameraId, int 
recorderSource); 
  } 
• onKeypointFrame allows receiving the encoded data: 
data: The buffer to save the data. The same buffer is used each time the onKeypointFrame is called back. If you want 
to save the data, you need to copy it elsewhere; otherwise, it will be overwritten the next time.  
dataType: A reserved parameter that may be used to distinguish between HD and SD data. 
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
MT8676 Android SDK 
User Manual 
Confidential B 
size: Indicates the size of the keypoint data, which is generally less than the size of data. The data size is typically 
128KB and includes both video and audio data in the Transport Stream (TS) format. 
 
 mVideoFrameMode 
Class: int 
Detail: Indicates how to handle the video data. 
Definition of VideoFrameMode: 
• VIDEO_FRAME_MODE_DISABLE  (0),// Record to file. 
• VIDEO_FRAME_MODE_SOURCE   (1), //Provide to the app in H264 format. 
• VIDEO_FRAME_MODE_PACKET   (2), //Provide to the app in TS (Transport Stream) format. 
• VIDEO_FRAME_MODE_ DUAL     (3); //Record to file in TS format, while also providing to 
the app. 
 
 mAudioSource 
Class: int 
Detail: Indicates the source of the audio. Refer to android.media.MediaRecorder.AudioSource, typically set to 
CAMCORDER. 
 
 mKeypoiintSpanLimit 
Class: int 
Detail: The maximum time span, in seconds. 
• If the time of the current keypoint video file and the time of the previous video file exceed the set maximum time 
span, the previous video file will no longer be clipped as a keypoint protection video. 
• This parameter needs to be set before startRecord. It is an integer value and the unit is seconds. 
• If the app does not set this parameter, the default span time will be the length of the currently set recording file time. 
 
 mRecordingMuteAudio 
Class: boolean 
Detail: Whether to turn off the microphone. Setting the parameter to true turns off the microphone, resulting in a video 
without sound. Setting it to false turns it on. 
 
 mVideoCbFrameRate 
Class: int 
Detail: Set the frame rate for video callback. 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 mLockFilePath 
Class: String 
Detail: The save directory for protected video files. Set the save directory for protected video files. The default path is 
/sdcard/DCIM/camera/protect.  
 
 mVideoRotateSize 
Class: int 
Detail: The maximum size of the recording file, calculated in bytes. When the recording file reaches this size, it will be 
stored in a new file.  
 
 mVideoRotateDuration 
Class: int 
Detail: Set the duration of each saved video file, measured in milliseconds. 
 
 mEnableRecordStartRing 
Class: boolean 
Detail: Toggle recording ringtone. 
 
 mVideoBitRateMin 
Class: int 
Detail: Minimum bitrate for video recording. Set the range of bitrate for video files. Durin g recording, if the speed of 
writing to the file slows down, the underlying system will reduce the bitrate. If the writing speed is fast, the bitrate will  be 
increased. Reducing the bitrate is to avoid buffer backlog caused by slow file writing. Even if th e file writing speed is very 
slow, the adjusted bitrate will not fall below the set minimum value, and similarly, the increased bitrate will not exceed 
the maximum value. 
 
 mVideoBitRateMax 
Class: int 
Detail: Maximum bitrate for video recording. Set the range of bitrate for video files. During recording, if the speed of 
writing to the file slows down, the underlying system will reduce the bitrate. If the writing speed is fast, the bitrate will  be 
increased. The purpose of reducing the bitrate is to prevent buffer backlog due to slow file writing. Even if the file writing 
speed becomes very slow, the adjusted bitrate will not be less than the set minimum value, and similarly, the increased 
bitrate will not exceed the set maximum value. 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 mVideoCycleDeleteFileNum 
Class: int 
Detail: Number of files to delete in a loop when storage space is insufficient.  
 
 mReduceRecordingFps 
Class: int 
Detail: Reduce the frame rate percentage for video recording. 
FULL: 100% 
HALF: 50% 
THIRTY_PERCENT: 30% 
QUARTER: 25% 
 
1.2.2.6 PictureConfiguration 
Import PictureConfiguration:   
import com.mediatek.smartplatform.PictureConfiguration; 
Instantiate (create) an object: 
PictureConfiguration recordConfig= PictureConfiguration.get(recordSource); 
 
 mImageCallback 
It is recommended to directly use ImageDataCallback. 
Class: com.mediatek.smartplatform.ImageReaderEx.ImageCallback; 
Detail: The callback for obtaining the YUV data of the image. 
ImageCallback { 
int IMAGE_FORMAT_YUV_420_888 = ImageFormat.YUV_420_888; 
int IMAGE_FORMAT_JPEG =ImageFormat.JPEG 
int IMAGE_FORMAT_NV21 =ImageFormat.NV21 
int IMAGE_DATA_RAW =0; 
int IMAGE_DATE_FILE =1; 
void onImageAvailable(String cameraId, int format, int status , byte[] data, String path) 
} 
imageFormat: Currently, only YUV_420_888, JPEG, and NV21 are supported. The DataType can be either file or raw. If 
set to raw, it will be returned through a callback; if set to file, it will be saved in the specified path directory. Saving as a file 
is generally used for testing purposes. 
 
 mImageDataCallback 
Class: com.mediatek.smartplatform.SpmCameraDevice.ImageDataCallback; 
Detail: The callback for obtaining the YUV DirectByteBuffer of the image.  
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
MT8676 Android SDK 
User Manual 
Confidential B 
    ImageDataCallback { 
        int IMAGE_FORMAT_YUV_420_888 = ImageFormat.YUV_420_888; 
        int IMAGE_FORMAT_JPEG = ImageFormat.JPEG; 
        int IMAGE_FORMAT_NV21 = ImageFormat.NV21; 
        int IMAGE_FORMAT_YV12 = ImageFormat.YV12; 
        int IMAGE_FORMAT_RGB_888 = PixelFormat.RGB_888; 
        int IMAGE_FORMAT_YUY2 = ImageFormat.YUY2; 
 
        int IMAGE_DATA_RAW = 0; 
        int IMAGE_DATA_FILE = 1; 
        int IMAGE_DATA_BUFFER = 2; 
        int IMAGE_DATA_IMAGE = 3; 
        void onImageAvailable(ImageDataCallbackInfo imageDataCallbackInfo); 
} 
imageFormat: Currently supported formats include YUV_420_888, JPEG, NV21, YV12, RGB_888, and YUY2. The 
DataType can be RAW, FILE, BUFFER, or IMAGE. 
RAW: The data is placed in a byte array and returned via callback.  
FILE: The data is saved on the platform, old files will be deleted, used for local testing.  
BUFFER: The data is placed in a DirectByteBuffer and returned to the app, reducing the number of copies.  
IMAGE: The data is placed in an image and returned to the app. 
 
 mPath 
Class: String 
Detail: The save path for the image to be obtained. 
This parameter is currently not in use. 
 
 mImageFormat 
Class: int 
Detail: The format of the image that the registered callback needs to obtain. The value should be set to the format value 
found in ImageCallback or mImageDataCallback, indicating the type of image that the callback will retrieve. 
 
 mDateType 
Class: int 
Detail: The data type of the image to be obtained, which is one of RAW, FILE, BUFFER, or IMAGE. 
 
 mPicWidth 
Class: int 
Detail: The width of the image to be obtained. 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 mPicHeight 
Class: int 
Detail: The height of the image to be obtained. 
 
 mJpegHwEnc 
Class: Boolean 
Detail: Whether to use a hardware encoder to encode the camera data into JPEG format ; this flag is currently not in use.  
 
1.2.2.7 SpmCameraDevice 
Import SpmCameraDevice: 
import com.mediatek.smartplatform.SpmCameraDevice; 
Instantiate (create) an object: 
SpmCameraDevice mCameraDevice =SmartPlatformManager.get().openCameraDevice(“0”); 
 
 getState 
Function: 
public int getState() 
Returns: 
Returns the current state of the camera (CameraDevice). 
Details: 
• States of the Camera: 
STATE_IDLE, STATE_PREVIEW_[0-4], STATE_RECORD_[0-4], etc. 
• Explanation of the states: 
The various states are combined using a bitwise OR. For example, if the return value is 0x21, it indicates that the 
CameraDevice is currently in both STATE_PREVIEW_0 and STATE_RECORD_0. 
• This interface returns the state saved in the lower layer. When App1 is in preview and App2 is recording; if App1 exits 
unexpectedly, after App1 restarts, the current camera status obtained through this interface is still “recording”. 
Examples: 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(ids[0]); 
int state=mCameraDevice.getState(); 
 
 getCameraCharacteristics 
Function:   
public CameraCharacteristics getCameraCharacteristics() 
Returns: 
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
MT8676 Android SDK 
User Manual 
Confidential B 
The data type is android.hardware.camera2.CameraCharacteristics. It represents the device capabilities of the 
current camera. 
Details: 
The cameraId is obtained through getCameraIdList. Similar to getCameraCharacteristics in 
android.hardware.camera2.CameraManager and getCameraCharacteristics in SmartPlatformManager. Through this 
method, all configurations of the Camera can be accessed. The parameters obtained in getParameters are also converted 
through CameraCharacteristics. 
Examples: 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mCameraDevice. getCameraCharacteristics(); 
 
 getParameters 
Function:   
public SpmParameters getParameters() 
Returns: 
SpmParameters object, a collection of SpmCameraDevice parameters.  
Details: 
The parameter information of SpmCameraDevice can be obtained and modified through SpmParameters. The parameters 
in SpmParameters are converted from CameraCharacteristics. Currently, there may be some parameters that have not 
been converted; additional conversions can be added if needed. 
Examples: 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SpmParameters params=mCameraDevice.getParameters(); 
 
 setParameters 
Function:   
public void setParameters(SpmParameters params) 
Parameters: 
params The collection of parameters that needs to be set 
Details: 
When you need to modify some parameters of SpmCameraDevice, you must call this interface for the changes to take 
effect. 
Examples: 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SpmParameters params=mCameraDevice. getParameters ();  //First, get the params 
mCameraDevice.setParameters(params);       //After modifications, set them back down 
 
 setADASCallback 
Function:   
public void setADASCallback(ADASCallback callback) 
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
MT8676 Android SDK 
User Manual 
Confidential B 
Parameters: 
callback The callback for ADAS 
Details: 
ADASCallback is defined as follows: 
   public interface ADASCallback{ 
        void onADASCallback(ADASInfo info); 
   } 
Examples: 
   SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
   mCameraDevice.setADASCallback( 
                  new setADASCallback(){ 
                         public void onADASCallback(ADASInfo info){ 
                              //TODO 
                        } 
                  } 
    ); 
 
 setPictureSize 
Function:   
public int setPictureSize(android.util.Size pictureSize) 
Parameters: 
pictureSize  
Returns: 
Returning 0 indicates the setting was successful. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice. setPictureSize (1280*720); 
 
 setPreviewSurface 
Function:   
public int setPreviewSurface(Surface surface, @PreviewSource.Format int previewSource) 
Parameters: 
surface The producer side of the display buffer 
previewSource The source of the preview 
Returns: 
Returns a boolean indicating whether the setting was successful. 
Details: 
Refer to frameworks\base\core\java\android\view\Surface.java. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SurfaceView surfaceView=findViewById(R.id.surface_view); 
SurfaceHolder holder=surfaceView.getHolder(); 
mDevice.setPreviewSurface(Holder.getSurface(), PreviewSource.GENERAL_CAMERA); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 startPreview 
Function: 
public void startPreview() 
Details: 
Display the camera preview screen. Before calling this API, setPreviewSurface() must be called first. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SurfaceView surfaceView=findViewById(R.id.surface_view); 
SurfaceHolder holder=surfaceView.getHolder(); 
mDevice.setPreviewSurface(Holder.getSurface(),PreviewSource.GENERAL_CAMERA); 
mDevice.starPreview(); 
 
 stopPreview 
Function:   
public void stopPreview() 
Details: 
Stop displaying the camera preview screen. After stopping the preview, you need to call setPreviewSurface(null). 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.stopPreview(); 
 
 startADAS 
Function:   
public void startADAS() 
Details: 
1. Turn on the ADAS feature.  
2. setADASCallback is required to receive related ADAS data. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.startADAS(); 
 
 stopADAS 
Function:   
public void stopADAS() 
Details: 
Turn off the ADAS feature. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.stopADAS(); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 startRecord 
Function:   
public int startRecord(@RecordSource.Format int recordSource, RecordConfiguration 
recordConfig) 
Parameters: 
recordSource The source of the recording 
recordConfig The configuration for the recording 
Returns: 
Returns an integer value indicating whether the recording was successfully started; 0 indicates success, otherwise failure.  
Details: 
For the parameter settings, refer to RecordConfiguration. 
Examples: 
RecordConfiguration recordConfig= RecordConfiguration.get(recordSource); 
recordConfig.setVideoCallback(mVideoCallback); 
mCameraDevice.startrecord(RecordSource. GENERAL_CAMERA, recordConfig); 
 
 stopRecord 
Function:   
public void stoptRecord(@RecordSource.Format int recordSource) 
Parameters: 
recordSource The source of the recording 
Details: 
Stop recording video, corresponding to startRecord(). 
Examples: 
SpmCameraDevice Device = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.stoptRecord(); 
 lockRecordingVideo 
Function:   
public void lockRecordingVideo(int duration,String protectedType, @RecordSource.Format int 
recordSource) 
Parameters: 
duration The duration of the keypoint protection 
protectedType The type of keypoint protection, can be an empty string “” or “LowRes” 
recordSource The source of the recording 
Details: 
When setting the duration for keypoint protection, the system will protect video files of length equal to the duration 
before and after the current timestamp. Therefore, the total length of the protected video files will be 2 * duration . The 
second parameter must be “LowRes”, the underlying system will convert the keypoint video files to 480P and notify the 
app for use. The app needs to use KeypointCallback to receive the data.  
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
mDevice.lockRecordingVideo(20,”LowRes”,RecordSource.GENERAL_CAMERA); 
 
 unlockRecordingVideo 
Function:   
public void unlockRecordingVideo(String filename, @RecordSource.Format int recordSource) 
Parameters: 
filename The path of the protected file 
recordSource The source of the recording 
Details: 
Move a video file from a protected (protect) directory to a regular directory.  
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.unlockRecordingVideo(videofile, RecordSource.GENERAL_CAMERA ); 
 
 setVideoRotateDuration 
Function:   
public void setVideoRotateDuration(int duration_ms, @RecordSource.Format int recordSource) 
Parameters: 
duration_ms The duration of each video file, in milliseconds 
recordSource The source of the recording 
Details: 
Set the duration of each saved video file. The duration needs to be set after starting the recording. If it needs to be set 
before starting the recording, the setting can be achieved through RecordConfiguration’s setVideoRotateDuration. The 
parameters set will take effect in the next recorded video file. 
Examples: 
CameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0’); 
mDevice.setVideoRotateDuration(60*1000, RecordSource.GENERAL_CAMERA); 
 
 setVideoBitrateDyn 
Function:   
public void setVideoBitrateDyn(int bitrate,int bAdjust, @RecordSource.Format int 
recordSource) 
Parameters: 
bitrate The video bitrate value 
bAdjust A reserved parameter, currently not in use 
recordSource The source of the recording 
Details: 
Dynamically adjust the recording bitrate, which can be set during the recording process.  
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
mCameraDevice.setVideoBitrateDyn(6*1000*1000, 0, RecordSource.GENERAL_CAMERA); 
 
 setRecordingMuteAudio 
Function:   
public void setRecordingMuteAudio(boolean isMuteAudio, @RecordSource.Format int 
recordSource) 
Parameters: 
isMuteAudio Indicates whether to turn off the microphone. 
recordSource The source of the recording 
Details: 
Setting the parameter to true turns off the microphone, resulting in a video without sound. Setting it to false turns the 
microphone on. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.setRecordingMuteAudio(false, RecordSource.GENERAL_CAMERA); 
 
 setProtectRecording 
Function:   
public void setProtectRecording(boolean ismotiondetect,boolean isrecordingstatus,int 
duration_ms, @RecordSource.Format int recordSource) 
Parameters: 
ismotiondetect Indicates whether to enable collision protection. 
isrecordingstatus Specifies if the collision occurs during recording or in a non-recording state. 
duration_ms The duration of collision protection 
recordSource The source of the recording 
Details: 
This interface is used to start and stop collision protection. The first parameter indicates whether to start or stop.  
Examples: 
CameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(0); 
mCameraDevice.setProtectRecording(true, true, 5*60*1000, RecordSource.GENERAL_CAMERA) 
 
 flushCurRecFile 
Function:   
public void flushCurRecFile(@RecordSource.Format int recordSource) 
Parameters: 
recordSource The source of the recording 
Details: 
Flush the current recording file, writing cached data to disk. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
mDevice. flushCurRecFile (RecordSource.GENERAL_CAMERA); 
 
 setLockFilePath 
Function:   
public void setLockFilePath(String path, @RecordSource.Format int recordSource) 
Parameters: 
path The directory where the video files are saved 
recordSource The source of the recording 
Details: 
Set the directory for keypoint video files. The default path is /sdcard/DCIM/camera/protect/. This interface can be 
called before marking keypoints during the recording process. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice. setLockFilePath (“/sdcard/DCIM/camera/video”,RecordSource.GENERAL_CAMERA); 
 
 setRecordingSdcardPath 
Function:   
public void setRecordingSdcardPath(String path, @RecordSource.Format int recordSource) 
Parameters: 
path The directory where the video files are saved 
recordSource The source of the recording 
Details: 
The directory for saving video files, with the default path being /sdcard/DCIM/camera. This interface can be called 
during the recording process. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.setRecordingSdcardPath(“/sdcard/DCIM/camera/video”, 
RecordSource.GENERAL_CAMERA); 
 
 enableShutterSound 
Function:   
public void enableShutterSound(boolean shutter) 
Parameters: 
shutter Indicates whether to enable the shutter sound. 
Details: 
Setting the parameter to true turns on the shutter sound, while setting it to false turns it off.  
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.enableShutterSound(false); 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 enableRecordSound 
Function:   
public void enableRecordSound(boolean enable) 
Parameters: 
Enable Indicates whether to enable the record sound. 
Details: 
Setting the parameter to true turns on the record sound, while setting it to false turns it off. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.enableRecordSound(false); 
 
 setPictureSize 
Function:   
public void setPictureSize(android.util.Size PictureSize) 
Parameters: 
PictureSize The width and height of the picture to be taken 
Details: 
Used to set the size of the picture to be taken. This needs to be set before setPreviewSurface.  
 
 takePicture 
Function:   
public void takePicture(String fileName,ShutterCallback  shutter, CamPictureCallback jpeg) 
Parameters: 
fileName The save name (including directory) of the photo 
shutter Callback when the shutter sound is triggered (currently ineffective) 
jpeg Callback during the photo-taking process 
Details: 
• ShutterCallback is defined as follows: 
  public interface ShutterCallback{ 
        void onShutter(); 
  } 
• CamPictureCallback is defined as follows: 
   public interface CamPictureCallback{ 
   public static final int PICTURE_TAKEN_FALL    = -1;// Photo-taking failed 
   public static final int PICTURE_TAKEN_SAVING  = 0;// Saving in progress 
   public static final int PICTURE_TAKEN_SUCCESS = 1;// Photo-taking successful 
      void onPictureTaken(int status,String cameraId,String fileName); 
  } 
• In onPictureTaken, status indicates the status of the photo-taking: failure, saving, and success. cameraId is the camera 
identifier, and fileName is the save name of the photo. If the photo-taking fails, the path will be empty. This function is 
called once before the photo is taken and again after completion, whether successful or not. 
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
MT8676 Android SDK 
User Manual 
Confidential B 
Examples: 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
String fileName=”/sdcard/DCIM/photo/”+filename; 
mCameraDevice.takePicture(fileName,shutter,jpeg); 
 
 release 
Function:   
public boolean release() 
Details: 
Unregister the callbacks related to this Camera and release the listener. This API can be called upon exiting the APK to 
quickly unregister callbacks and release the listener to free up resources.  
Return: 
If the listener is successfully removed, it returns true; otherwise, it returns false.  
Examples: 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
boolean isRemoveListener = mCameraDevice.release(); 
 
 getCameraId 
Function:   
public String getCameraId() 
Returns: 
Returns the ID value of the current camera (SpmCameraDevice). 
Details: 
Retrieves the camera ID corresponding to the current SpmCameraDevice. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
Sting id=mDevice.getCameraId(); 
 
 startPictureSequence 
Function:   
public void startPictureSequence(@PictureSequenceSource int source PictureConfiguration 
config) 
Parameters: 
source The source for obtaining a sequence of images 
config The configuration for obtaining a sequence of images 
Details: 
This API is for continuously obtaining images. The YUV data can be used for ADAS or other algorithmic analysis. If the 
image size is null, the default image size is 1280x720. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
mDevice.startPictureSequence(source ,config); 
 
 stopPictureSequence 
Function:   
public void stopPictureSequence(@PictureSequenceSource int source) 
Details: 
Stop obtaining a sequence of pictures, corresponding to startPictureSequence(). 
Examples: 
CameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice. stopPictureSequence (source); 
 
 enableShareBuffer 
Function:   
public void enableShareBuffer(@PictureSequenceSource int source , boolean enable) 
Parameters: 
source The source for obtaining a sequence of images 
enable Whether to enable FD (Face Detection) callback 
Details: 
This API is for continuously obtaining image data through Face Detection (FD). The YUV data can be used for ADAS or other 
algorithmic analysis. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.startPictureSequence(source ,config); 
mDevice. enableShareBuffer(source , true); 
 
 updateRequest 
Function:   
public void updateRequst() 
Details: 
This function needs to be called to take effect after updating SpmParameters. 
 
 getCameraId 
Function:   
 public String getCameraId() 
Details: 
Retrieve the current SpmCameraDevice’s ID. 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 setAeStatusCallback 
Function:   
public void setAeStatusCallback(AeStatusCallback callback) 
Parameters: 
callback  The callback for AE exposure value. 
Details: 
• AeStatusCallback is defined as follows: 
   public interface AeStatusCallback { 
        void onStatusCallback (int value); 
        void onStatusCallbackArray (int[] value,int size); 
   } 
Examples: 
   SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
   mCameraDevice. setAeStatusCallback ( 
                  new AeStatusCallback (){ 
                         public void onStatusCallback (int value){ 
                              //TODO 
                         } 
                         public onStatusCallbackArray (int[] value,int size){ 
                              //TODO 
                         } 
                  } 
    ); 
 
 setDropStreamFrame 
Function:   
public int setDropStreamFrame(int streamType, int streamSource, int streamPolicy)  
Parameters: 
streamType YUV 0/record 1/preview 2 
streamSource   @PictureSequenceSource int source ,@PreviewSource.Format int previewSource, 
@RecordSource.Format int recordSource 
streamPolicy   Frame drop strategy 
       if param == 0, do not drop frame; 
       if param > 0,  drop one frame each parameter; 
       if param < 0,  drop parameter frames each one frame. 
Returns: 
Returns an integer value indicating whether setting single-channel frame dropping was successful; 0 indicates success, 
otherwise it indicates failure. 
Examples: 
mCameraDevice. setDropStreamFrame (1，RecordSource. GENERAL_CAMERA, 1); 
// For preview channel 0, record drops every other frame, effectively dropping one frame for 
every frame recorded. 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 updateVideoGPSInfo 
Function: 
public void updateVideoGPSInfo(int latitude10000,int longitude10000, @RecordSource.Format 
int recordSource ) 
Parameters: 
latitude10000 latitude*10000 
longitude10000 longitude *10000 
recordSource The source of the recording 
Details: 
Dynamically set GPS location information during recording and save it to the MP4 video header.  
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice. updateVideoGPSInfo (3140000,2240000,RecordSource.GENERAL_CAMERA); 
 
1.2.2.8 SpmParameters 
Import Parameters:   
import com.mediatek.smartplatform.SpmCameraDevice.SpmParameters; 
Instantiate (create) an object: 
SpmCameraDevice mDevice =SmartPlatformManager.get().openCameraDevice(“0”); 
SpmParameters params=mDevice.getParameters(); 
 enableWatermarkImage  
Function:   
public void enableWatermarkImage(boolean enable) 
Parameters: 
enable Indicates whether to add a watermark to the picture. 
Details: 
Setting the parameter to true means adding a watermark to the photo, while false means not adding one. This interface 
controls the watermark for preview, recording, and captured images.  
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SpmParameters params=mDevice.getParameters(); 
params.enableWatermarkImage(true); 
mDevice.setParameters(params); 
 
 setWatermarkImaArea  
Function:   
public void setWatermarkImgArea(int left, int top, int right, int bottom) 
Parameters: 
left The starting position on the x-axis for the image watermark area 
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
MT8676 Android SDK 
User Manual 
Confidential B 
top The starting position on the y-axis for the image watermark area 
right The ending position on the x-axis for the image watermark area 
bottom The ending position on the y-axis for the image watermark area 
Details: 
Set the area for the image watermark. The width of the image watermark must be a multiple of 32, and the height must 
be a multiple of 16; otherwise, it will not display correctly. The size of the watermark image should be consistent with the 
size of the watermark area. The starting position of the image watermark area and the text watermark area are calculated 
in the same way, but there are differences in width and height. Typically, setting the width and height of the image 
watermark area to be the same as the size of the image will suffice. 
Examples: 
params.setWatermarkImgArea(20,20,180,180); 
 
 setWatermarkImagePath  
Function:   
public void setWatermarkImgPath(String path) 
Parameters: 
path The path of the watermark image 
Details: 
Set the path for the watermark image; it must be a complete path.  
Examples: 
params.setWatermarkArea(“/sdcard/watermark.bmp”) 
 enableWatermarkText  
Function:   
public void enablePictureWatermarkText(boolean enable) 
Parameters: 
enable Indicates whether to add a text watermark. 
Details: 
Setting the parameter to true means adding a watermark, while false means not adding one. This interface controls the 
text watermark for preview, recording, capture, and other related interfaces. 
Examples: 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SpmParameters params=mDevice.getParameters(); 
params.enableWatermarkText(true); 
mCameraDevice.setParameters(params); 
 
 setWatermarkTextArea  
Function:   
public void setWatermarkTextArea(int left, int top, int right, int bottom) 
Parameters: 
left The starting position on the x-axis for the image watermark area 
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
MT8676 Android SDK 
User Manual 
Confidential B 
top The starting position on the y-axis for the image watermark area 
right The ending position on the x-axis for the image watermark area 
bottom The ending position on the y-axis for the image watermark area 
Details: 
Set the area for the text watermark. The four parameters mentioned above correspond to a rectangular area. The text 
content will be drawn within this rectangle. If the text content exceeds this area, it will be cut off and not displayed. The 
final position of this area on the screen is calculated as follows:  
Starting position x = left * screen width/1000;  
Starting position y = top * screen height/1000;  
Rectangle width w = (right - left) * screen width/1000;  
Rectangle height h = (bottom - top) * screen height/1000;  
Examples: 
params.setWatermarkArea(20,20,60,240); 
 
 setWatermarkText  
Function:   
public void setWatermarkText(String text) 
Parameters: 
text The text to be displayed in the watermark 
Details: 
Set the text content to be displayed in the watermark.  
Examples: 
params.setWatermarkText(“watermark”); 
mCameraDevice.setParameters(params); 
 
 setWatermarkTextSize  
Function:   
public void setWatermarkTextSize(float size) 
Parameters: 
size The size of the watermark text 
Details: 
Set the size of the watermark text. The size of the text watermark is calculated as a proportion of the screen height, using 
the formula: actual text size = size * screen height/1000; the unit is pixels. Therefore, the size of the text watermark is 
typically set to the height of the watermark area, or smaller, to ensure it is displayed properly.  
Examples: 
params.setWatermarkArea(20,20,60,240);  // Rectangle width is 220, height is 40 
params.setWatermarkTextSize(40);  // The text watermark size should be set to 40 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 setWatermarkTextColor  
Function:   
public void setWatermarkTextColor(int color) 
Parameters: 
color The color of the watermark text; if not set, the default is red. 
Details: 
Set the color of the watermark using ARGB mode. Colors can be constructed using the android.graphics.Color 
object. 
Examples: 
params.setWatermarkTextColor(Color.RED);  // The watermark text will display in red. 
 
 setWatermarkTextPosition  
Function:   
public void setWatermarkTextPosition(float x,float y) 
Parameters: 
x  The horizontal offset from the starting position of the corresponding watermark area 
y  The vertical offset from the starting position of the corresponding watermark area  
Details: 
The drawn text watermark can be understood as a rectangular image. Thus, this offset is the distance from the bottom left 
corner of the text watermark to the starting point of the watermark area. Typically, setting the value of y to be the same 
as the height of the watermark area is sufficient. 
Examples: 
params.setWatermarkArea(20,20,60,240);  //Rectangle width is 220, height is 40 
params.setWatermarkTextPosition(10,40); //The value of y is consistent with the height of 
the rectangle area 
 
 setWatermarkFontFile 
Function:   
public void setWatermarkFontFile(String file) 
Parameters: 
file The font document for the watermark 
 
 setWatermarkTimeMs 
Function:   
public void setWatermarkTimeMs(boolean enable) 
Parameters: 
enable Indicates whether to enable the time watermark. 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 set 
Function:   
public void set(CaptureRequest.Key<T> key, T value) 
Parameters: 
Set the request parameters for the camera, which can be based on the keys  found in the native CaptureRequest, 
CaptureResult, and CameraCharacteristics. 
Details: 
This method is used to set parameters that are already supported by Android.  
 
1.2.2.9 IpodProxy 
Import IpodProxy:   
import com.mediatek.smartplatform.IpodProxy; 
Instantiate (create) an object: 
  IpodProxy proxy=SmartPlatformManager.get().getIpodProxy(); 
     or IpodProxy proxy=IpodProxy.getInstance(SmartPlatformManager.get()); 
It is recommended to use the first method to obtain the IpodProxy object, as IpodProxy also adopts the singleton pattern. 
 
 doShutdown 
Function:   
public int doShutdown(String reason,boolean isShutdown) 
Parameters: 
reason The reason for shutting down, which can currently be set to any string  
isShutdown Indicates whether to shut down; true means to shut down, false means not to shut down. 
Returns: 
The execution result of the function. 
Details： 
• This API is used to determine whether to actually shut down after entering IPO mode, because currently pressing the 
power button to shut down does not actually turn off the system but enters IPO/IPOH mode. When a complete 
shutdown is needed, calling this API can achieve this function. If this API is called with isShutdown set to true before 
the IPOD process starts, you can call this API again and set the second parameter isShutdown to false to cancel the 
IPOD shutdown. 
• It is important to note that the reason parameter should not contain the “=” or “;” characters. 
• The return values of calling this API are as follows: 
RESULT_SUCCESS Indicates that the parameters of this API have been successfully passed to the IPOD process for 
execution. This usually occurs after shutdown and the IPOD process has already started.  
RESULT_PARAMS_SAVED Indicates that the parameters of this API have been successfully saved and will be passed to 
the IPOD process for execution once it starts. 
RESULT_PARAMS_REPLACED Indicates that this API has been called before, and the parameters passed down this 
time override the previous ones, meaning the last parameters passed down will be executed by  IPOD. 
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
MT8676 Android SDK 
User Manual 
Confidential B 
RESULT _FAIL Indicates that the call to this API failed. There are many reasons for failure, which depend on the 
specific situation. 
RESULT_EXCEPTION Indicates that an exception occurred while calling this API, usually because the Smartplatform 
service does not exist, meaning the SmartPlatformServer process has died.  
Examples: 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. doShutdown(“test”,true);    //After entering IPO, proceed with shutdown. 
 
 setRebootControl 
Function:   
public int setRebootControl(int flag) 
Parameters: 
flag The flag to enable the scheduled reboot feature, with values of 0 or 1  
Returns: 
The execution result of the function. 
Details: 
• Used to enable the scheduled reboot feature. Passing a flag parameter of 1 means to enable, and a parameter of 0 
means to disable. If setRebootTimeSlot is not called to set the reboot time, the last set time will be used as the reboot 
time. 
• The return values of calling this API are as follows: 
RESULT_SUCCESS Indicates that the parameters of this API have been successfully passed to the IPOD process for 
execution. This usually occurs after shutdown and the IPOD process has already started.  
RESULT_PARAMS_SAVED Indicates that the parameters of this API have been successfully saved and will be passed to 
the IPOD process for execution once it starts. 
RESULT_PARAMS_REPLACED Indicates that this API has been called before, and the parameters passed down this 
time override the previous ones, meaning the last parameters passed down will be exe cuted by IPOD. 
RESULT _FAIL Indicates that the call to this API failed. There are many reasons for failure, which depend on the 
specific situation. 
RESULT_EXCEPTION Indicates that an exception occurred while calling this API, usually because the Carcorder 
service does not exist, meaning the SmartPlatformServer process has died.  
Examples: 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. setRebootControl(1);    //Enable the scheduled reboot feature. 
 
 setRebootTimeSlot 
Function:   
public int setRebootTimeSlot(int slotTime) 
Parameters: 
slotTime The time point for reboot, with values ranging from 0 to 23 
Returns: 
The execution result of the function. 
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
MT8676 Android SDK 
User Manual 
Confidential B 
Details: 
• This API is used to set the time for reboot. The parameter is the time point for reboot, ranging from 0 to 23. To make 
the current setting effective, setRebootControl must be called to enable the scheduled reboot feature. 
• The return values of calling this API are as follows: 
RESULT_SUCCESS Indicates that the parameters of this API have been successfully passed to the IPOD process for 
execution. This usually occurs after shutdown and the IPOD process has already started.  
RESULT_PARAMS_SAVED Indicates that the parameters of this API have been successfully saved and will be passed to 
the IPOD process for execution once it starts. 
RESULT_PARAMS_REPLACED Indicates that this API has been called before, and the parameters passed down this 
time override the previous ones, meaning the last parameters passed down will be executed by IPOD.  
RESULT _FAIL Indicates that the call to this API failed. There are many reasons for failure, which depend on the 
specific situation. 
RESULT_EXCEPTION Indicates that an exception occurred while calling this API, usually because the Smartplatform 
service does not exist, meaning the SmartPlatformServer process has died. 
Examples: 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. setRebootControl(1);    // Enable the scheduled reboot feature. 
proxy. setRebootTimeSlot (5); // Set to reboot at 5 AM. 
 
 exitIpod 
Function:   
public int exitIpod(int reason) 
Parameters: 
reason The reason for exiting IPOD mode 
Returns: 
The execution result of the function. 
Details: 
• In IPO mode, calling this API has the same function as long-pressing the power button to start the device. It is effective 
only after the IPOD process has started. 
• The return values of calling this API are as follows: 
RESULT_SUCCESS Indicates that the parameters of this API have been successfully passed to the IPOD process for 
execution. This usually occurs after shutdown and the IPOD process has already started.  
RESULT_PARAMS_SAVED Indicates that the parameters of this API have been successfully saved and will be passed to 
the IPOD process for execution once it starts. 
RESULT_PARAMS_REPLACED Indicates that this API has been called before, and the parameters passed down this 
time override the previous ones, meaning the last parameters passed down will be executed by IPOD.  
RESULT _FAIL Indicates that the call to this API failed. There are many reasons for failure, which depend on the 
specific situation. 
RESULT_EXCEPTION Indicates that an exception occurred while calling this API, usually because the Carcorder 
service does not exist, meaning the SmartPlatformServer process has died.  
Examples: 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. exitIpod(0);    // Exit IPOD and then start the device. 
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
MT8676 Android SDK 
User Manual 
Confidential B 
1.2.2.10 CarEventProxy 
Import CarEventProxy:  
import com.mediatek.smartplatform.CarEventProxy; 
Instantiate (create) an object: 
  CarEventProxy proxy=SmartPlatformManager.get().getCarEventProxy(); 
    or CarEventProxy proxy= CarEventProxy.getInstance(SmartPlatformManager.get()); 
It is recommended to use the first method to obtain the CarEventProxy object, as CarEventProxy also utilizes the singleton 
pattern. Due to hardware limitations, currently only ACC on/off behavior is supported. Other behaviors need to be added 
according to the hardware specifications. 
 
 addEngineChangedCallback 
Function:   
public void addEngineChangedCallback(EngineChangedCallback callback) 
Parameters: 
callback The callback when the car engine state changes, corresponding to ACC on/off. If the same callback object is 
registered multiple times, only one instance will be saved. 
Details: 
•  EngineChangedCallback is defined as follows: 
  public interface EngineChangedCallback{ 
      public static final int CAR_ENGINE_FLAMEOUT =0;    
      public static final int CAR_ENGINE_WORKING = 1; 
      void onEngineChanged(int status); 
  } 
• This callback is triggered when the car engine state changes. The status in onEngineChanged indicates the engine’s 
state. When the value is CAR_ENGINE_FLAMEOUT, it means the engine is off. When the value is 
CAR_ENGINE_WORKING, it means the engine is running. 
•  These two events, CAR_ENGINE_WORKING/CAR_ENGINE_FLAMEOUT, correspond to the ACC on/off events. 
Examples: 
   CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
   mCarEventProxy.addEngineChangedCallback( 
         new EngineChangedCallback(){ 
           public void onEngineChanged (int status){ 
              //TODO 
           } 
         } 
    ); 
 
 removeEngineChangedCallback 
Function:   
public void removeEngineChangedCallback(EngineChangedCallback callback) 
Parameters: 
callback The callback when the car engine state changes 
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
MT8676 Android SDK 
User Manual 
Confidential B 
Details: 
Remove the registered callback object.  
Examples: 
CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
mCarEventProxy.removeEngineChangedCallback(callback); 
 
 queryCarEngineState 
Function:   
public int queryCarEngineState() 
Returns: 
The current working state of the engine. 
Details: 
Currently, three states are defined: 
• CAR_STATE_UNKNOWN indicates the state is unknown, which generally occurs when an API call results in an exception. 
• CAR_ENGINE_FLAMEOUT indicates the engine is off.  
• CAR_ENGINE_WORKING indicates the engine is running. The engine state saved by the Smartplatform Service is 
directly returned. 
Examples: 
CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
int state= mCarEventProxy.queryCarEngineState(); 
 
 setDefaultAccOffBehavior 
Function:   
public void setDefaultAccOffBehavior(boolean enable) 
Parameters: 
enable Indicates whether to enable the default ACC behavior. 
Details: 
• The default ACC behavior is that when the underlying Driver detects ACC ignition or shutdown, it sends this event to 
the app in the form of a broadcast. The app only needs to register the corresponding broadcast. The ignition event 
broadcast is android.intent.action.ACTION_POWER_CONNECTED, and the shutdown event broadcast is 
android.intent.action.ACTION_POWER_DISCONNECTED. 
• If the app wants to receive ACC ignition or shutdown events through callbacks, set the parameter value to false and 
register the corresponding callback through addEngineChangedCallback. 
Examples: 
   CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
   mCarEventProxy.addEngineChangedCallback( 
         new EngineChangedCallback(){ 
           public void onEngineChanged (int status){ 
              //TODO 
           } 
         } 
      ); 
mCarEventProxy.setDefaultAccOffBehavior(false); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 addCarReverseCallback 
Function:   
public void addCarReverseCallback(CarReverseCallback callback) 
Parameters: 
callback The callback when the car’s direction of movement changes. If the same callback object is registered multiple 
times, only one instance will be saved. 
Details: 
• CarReverseCallback is defined as follows: 
  public interface CarReverseCallback { 
      public static final int CAR_STATUS_NORMAL = 0; 
      public static final int CAR_STATUS_LEFT = 1; 
      public static final int CAT_STATUS_RIGHT = 2; 
      public static final int CAR_STATUS_REVERSE = 3; 
 
      public static final int CAR_STATUS_SOURCE_AVM = 1; 
      public static final int CAR_STATUS_SOURCE _GPIO = 2; 
 
      void onReverse(int status, int source); 
  } 
• This callback is triggered when the car transitions from one state (left turn/right turn/reverse/forward) to a different 
state. There are two sources that can trigger this callback: GPIO or AVM. Both triggering methods require hardware 
support. 
Examples: 
   CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
   mCarEventProxy.addCarReverseCallback( 
         new CarReverseCallback(){ 
           public void onReverse(int status, int source){ 
              //TODO 
           } 
         } 
    ); 
 
 removeCarReverseCallback 
Function:   
public void removeCarReverseCallback(CarReverseCallback callback) 
Parameters: 
callback The callback when the car’s motion state changes 
Details: 
Remove the registered callback object.  
Examples: 
CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy();   
mCarEventProxy.removeCarReverseCallback(callback); 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
1.2.2.11 CollisionProxy 
Import CollisionProxy:   
import com.mediatek.smartplatform.CollisionProxy; 
Instantiate (create) an object: 
  CollisionProxy proxy=SmartPlatformManager.get().getCollisionProxy(); 
     Or CollisionProxy proxy= CollisionProxy.getInstance(SmartPlatformManager.get()); 
It is recommended to use the first method to obtain the CollisionProxy object, as CollisionProxy also adopts the singleton 
pattern. 
 
 addCollisionCallback 
Function:   
public void addCollisionCallback(CollisionCallback callback) 
Parameters: 
callback The callback when the platform detects a collision 
Details: 
• CollisionCallback is defined as follows: 
     public interface CollisionCallback{ 
     public static final int COLLISION_UNRELIABLE =0;    
     public static final int COLLISION_LOW=1; 
     public static final int COLLISION_MEDIUM=2; 
     public static final int COLLISION_HIGH=3;   
     void onCollision(int collision,int status); 
  } 
• This callback is triggered when the platform detects a collision. The collision in onCollision actually refers to the level 
(sensitivity) of the collision, currently divided into three levels: COLLISION_LOW, COLLISION_MEDIUM, 
COLLISION_HIGH. The status is a reserved parameter, generally 0. If the collision detection algorithm is modified, then 
this value will be equal to the (*result) value in collision_detect(). 
• The same object can only be registered once. Even if the object is added multiple times, ultimately only one callback 
object will be saved. Similarly, you only need to call removeCollisionCallback once to completely remove the callback. 
Examples: 
      SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
   mSmartPlatformManager.addCollisionCallback( 
         new CollisionCallback() { 
           public void onCollision(int collision,int status){ 
              //TODO 
           } 
         } 
      ); 
 
 removeCollisionCallback 
Function:   
public void removeCollisionCallback (CollisionCallback callback) 
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
MT8676 Android SDK 
User Manual 
Confidential B 
Parameters: 
callback The callback when the platform detects a collision 
Details: 
Remove the registered callback object. It’s worth noting that if the same callback object has been registered multiple 
times, calling this function once will completely remove it. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.removeCollisionCallback(callback); 
 
 setSuspendCollision 
Function:   
public void setSuspendCollision(boolean fgEnabled) 
Parameters: 
fgEnabled Indicates whether to enable the Gsensor collision detection feature.  
Details: 
• This API can be used to enable or disable the Gsensor collision detection feature. A parameter of true means to 
enable, and false means to disable. This API corresponds to the collision boot feature. By default, this feature is 
enabled, and you can use getSuspendCollision to check whether this feature is enabled. 
•  Whether it is a normal boot or a collision boot can be distinguished by the broadcast sent out at boot time. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
// Enable the Gsensor collision detection feature, so that the device will boot up if a 
collision occurs even in IPO status 
mSmartPlatformManager.setSuspendCollision(true); 
 
 getSuspendCollision 
Function:   
public boolean getSuspendCollision() 
Returns: 
A boolean value indicating whether the Gsensor Driver collision detection is enabled. 
Details: 
If the return value is true, it means it is enabled; if false, it means it is disabled.  
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
boolean isEnable=mSmartPlatformManager.getSuspendCollision(); 
 
 setNormalCollision 
Function:   
public void setNormalCollision(boolean isEnabled) 
Parameters: 
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
MT8676 Android SDK 
User Manual 
Confidential B 
isEnabled Indicates whether to enable the Carcorder collision detection feature.  
Details: 
The Carcorder collision detection can be understood as a feature module within the Carcorder process. This interface can 
control the on/off switch of this feature. Only when this feature is enabled, and a collision occurs, will the CollisionCallb ack 
receive a callback. Carcorder collision detection and Gsensor collision detection belong to different modules. Disabling the 
Gsensor collision detection feature will not affect the Carcorder collision detection feature, and vice versa. Therefore, 
these two features do not affect each other. By default, this feature is enabled, and if it was set previously, the previous 
settings will be used. 
Examples: 
   SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
   mSmartPlatformManager.addCollisionCallback( 
        new CollisionCallback { 
           public void onCollision(int collision,int status){ 
          } 
        } 
       ); 
   mSmartPlatformManager.setNormalCollision(true); 
 
 getNormalCollision 
Function:   
public boolean getNormalCollision() 
Returns: 
A boolean value indicating whether the Carcorder collision detection feature is enabled.  
Details: 
If the return value is true, it means it is enabled; if false, it means it is disabled.  
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
boolean isEnable=mSmartPlatformManager.getNormalCollision(); 
 
 setSuspendCollisionSensity 
Function:   
public void setSuspendCollisionSensity(int level) 
Parameters: 
level Sensitivity of the collision 
Details: 
The parameter level actually refers to sensitivity, meaning that if the change in the Gsensor exceeds a certain threshold, it  
is considered a collision. This threshold corresponds to the level, which is currently defi ned as COLLISION_LOW, 
COLLISION_MEDIUM, and COLLISION_HIGH. By default, if not set, it is COLLISION_MEDIUM. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setSuspendCollisionSensity(CollisionCallback.COLLISION_HIGH); 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 getSuspendCollisionSensity 
Function:   
public int getSuspendCollisionSensity() 
Returns: 
Returns an integer value indicating the sensitivity with which the Driver will detect a collision.  
Details: 
Currently three levels are defined: COLLISION_LOW, COLLISION_MEDIUM, and COLLISION_HIGH, with 
COLLISION_HIGH indicating a higher sensitivity to detecting collisions. For example, setting it to COLLISION_HIGH might 
result in detecting a collision from a light touch. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
int level=mSmartPlatformManager.getDriverCollisionSensity(); 
 
 setNormalCollisionSensity 
Function:   
public void setNormalCollisionSensity(int level) 
Parameters: 
level Sensitivity of the collision 
Details: 
The parameter level refers to sensitivity, meaning that if the Gsensor’s change exceeds a certain threshold, it is considered 
a collision. This threshold corresponds to the level, currently defined as COLLISION_LOW, COLLISION_MEDIUM, and 
COLLISION_HIGH. Although this function is similar to setSuspendCollisionSensity(), they belong to different modules and 
do not affect each other. If you need to customize the collision threshold, you can do so through setCollisionThreshold. 
setCollisionThreshold() can completely replace this interface because the set sensitivity will be converted to the 
corresponding threshold value, which has the same effect as directly modifying the threshold value.  
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setNormalCollisionSensity(CollisionCallback.COLLISION_HIGH); 
 
 getNormalCollisionSensity 
Function:   
public int getNormalCollisionSensity() 
Returns: 
Returns an integer value indicating the sensitivity with which the Carcorder will detect a collision. 
Details: 
Currently three levelsare defined: COLLISION_LOW, COLLISION_MEDIUM, and COLLISION_HIGH, with 
COLLISION_HIGH indicating a higher sensitivity to detecting collisions. If setCollisionThreshold is used to set a defined 
collision threshold, then the return value of this function will be the level value set by setCollisionThreshold. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
int level=mSmartPlatformManager.getNormalCollisionSensity(); 
 
 setCollisionThreshold 
Function:   
public int setCollisionThreshold(float x,float y,float z,int level) 
Parameters: 
x Threshold for Gsensor acceleration in the X-axis direction 
y Threshold for Gsensor acceleration in the Y-axis direction 
z Threshold for Gsensor acceleration in the Z-axis direction 
level The level represented by this threshold 
Returns: 
Returns an integer value indicating whether the parameter setting was successful , 0 for success, otherwise failure. 
Details: 
• This API allows for customizing the collision thresholds, which are the Gsensor acceleration thresholds in the X, Y , and 
Z directions. The previous collision detection algorithm considered a collision detected if the Gsensor’s acceleration in 
any direction exceeded the corresponding threshold. The current algorithm considers a collision detected if the 
Gsensor’s acceleration change in any direction exceeds the set threshold. 
• The fourth parameter, level, is not limited and can be any integer value. This parameter acts like an identifier, so 
when a collision is detected, the first parameter in CollisionCallback.onCollision() will be this set value. This value can 
also be obtained through getNormalCollisionSensity. 
• This function serves the same purpose as setNormalCollisionSensity(), so there is no need to call both interfaces. If 
both are called, only the parameters set by the last called interface will be used. It is recommended to use this 
interface. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setCollisionThreshold(5f,5f,5f,2); 
 
 getCollisionThreshold 
Function:   
public float[] getCollisionThreshold()  
Returns: 
Returns the set threshold values for Gsensor acceleration in the X, Y, and Z-axis directions. 
Details: 
This API allows you to retrieve the Gsensor acceleration thresholds in the X, Y, and Z -axis directions that were set by 
setCollisionThreshold. If the return value is null, it indicates that there was an exception while retrieving the thresholds. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
float[] f=mSmartPlatformManager.getCollisionThreshold(); 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 setGsensorEventRate 
Function:   
public int setGsensorEventRate(int delayMs) 
Parameters: 
delayMs The interval for reporting Gsensor data, in milliseconds 
Returns: 
Returns an integer value indicating whether the parameter setting was successful, 0 for success, otherwise failure.  
Details: 
• This API allows you to set the interval for reporting Gsensor data, in milliseconds. For example, if set successfully to 10, 
it means that Gsensor data will be received every 10 milliseconds, which translates to a frequency of 100Hz. 
• This interface simply calls the setting interface of the sensorservice, which then sets the value to the driver. The value 
passed in and the actual value set to the driver may not be equal because there are range limitations for this value. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setGsensorEventRate(10); 
 
 getGsensorEventRate 
Function:   
public int getGsensorEventRate()  
Returns: 
Returns the set interval for reporting Gsensor data. 
Details: 
This interface simply retrieves the value passed to the last call of setGsensorEventRate(), not the actual value used by the 
driver. Currently, there is no way to retrieve the actual value from the driver.  
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
int rate=mSmartPlatformManager.getGsensorEventRate(); 
 
 setIPOStandby 
Function:   
public void setIPOStandby(Boolean on)  
Parameters: 
On True to enter IPO standby mode; false to exit IPO standby mode. 
Details: 
NATIVE Collision will choose different flows based on whether it is in IPO standby mode or not, in order to achieve power 
saving. 
Examples: 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setIPOStandby (); 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
1.3 Configuration/Customization Guideline 
Codebase path: vendor\mediatek\proprietary\frameworks\base\smartplatform\sdk 
Apk demo path: vendor\mediatek\proprietary\packages\apps\CarcorderMcamDemo 
 
 Main Features Introduction 
1.3.1.1 Preview 
Start preview: 
     SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
     SurfaceView surfaceView=findViewById(R.id.surface_view); 
     SurfaceHolder holder=surfaceView.getHolder(); 
     mDevice.setPreviewSurface(Holder.getSurface(),PreviewSource.GENERAL_CAMERA); 
     mDevice.starPreview(); 
 
Stop preview: 
     SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
     mDevice.stopPreview(); 
     mDevice.setPreviewSurface(null, PreviewSource.GENERAL_CAMERA); 
1.3.1.2 TakePicture 
     SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
     String fileName=”/sdcard/DCIM/photo/”+filename; 
     mCameraDevice.takePicture(fileName,shutter,jpeg); 
 
1.3.1.3 Record 
Start record: 
     RecordConfiguration recordConfig= RecordConfiguration.get(recordSource); 
     recordConfig.setVideoCallback(mVideoCallback); 
     mCameraDevice.startrecord(RecordSource. GENERAL_CAMERA, recordConfig); 
 
Stop record: 
     SpmCameraDevice Device = SmartPlatformManager.get().openCameraDevice(“0”); 
     mDevice.stoptRecord(); 
Note:  
• Recording involves various features such as sub-stream, main stream, event marking protection, etc., which will be detailed in the 
DVR documentation. 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
1.3.1.4 YUV Callback 
SpmCameraDevice.ImageDataCallback mSequenceCallback = new SpmCameraDevice.ImageDataCallback 
() { 
       Public void onImageAvailable(ImageDataCallbackInfo imageDataCallbackInfo){ 
      } 
     } 
 
     SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
     PictureConfiguration picConfig = PictureConfiguration.get(PictureSequenceSource. 
GENERAL_CAMERA); 
     picConfig.mImageDataCallback = mSequenceCallback; 
     mDevice.startPictureSequence(source ,picConfig); 
 
Note: 
• The imageDataCallback returns data; if a File Descriptor (FD) callback is needed, it should be obtained through enableShareBuffer 
when calling startPictureSequence. 
 
 Special Notes on Collision Detection 
1.3.2.1 Starting a Recording APK upon Collision 
Requirement Description: 
When the device is powered on, after the Demo APK exits, it is not possible to receive collision notifications sent by the 
Carcorder Service through the registered callback. Now, to receive collision events after the APK exits (when it is not 
running), MediaTek uses a broadcast to notify the APK of the collision event. 
 
Sample Code: 
• Implement a class that extends BroadcastReceiver 
 class CollisionBroadcastReceiver extends BroadcastReceiver{ 
@Override 
publicvoid onReceive(Context context, Intent intent)  
         { 
} 
  } 
 
• The broadcast should be registered statically in the Manifest.xml 
  <receiverandroid:name=".CollisionBroadcastReceiver "> 
     <intent-filter> 
        <action 
          android:name="android.intent.action.GSENSOR_COLLISION"/> 
    </intent-filter> 
  </receiver> 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
1.3.2.2 Open and Customizable Collision Detection Algorithm 
Code Path: 
alps/frameworks/native/libs/smartplatform/libsmartplatformcollision/* 
File Composition: 
SmartPlatformCollision.h  SmartplatformCollision.cpp  Android.mk 
Interface Definition: 
The definitions of the following two functions cannot be changed, including the function names, parameters, and return 
values. 
void collision_init(); 
Initialization function is called once when the collide starts running and after libsmartplatformcollision.so is 
loaded, for variable initialization. 
void collision_detect(AsensorEvent value,const float* threshod, int size, int  level, int* 
result); 
Parameter Description: 
AsensorEvent value: A structure encapsulating sensor data. 
const float* threshold: An array of thresholds for x, y, z axes, consistent with the values set by 
setCollisionThreshold(). 
int size: Specifies the length of the threshold array, currently defined as 3. 
int level: The level of collision, also the value set before. 
int* result: An additional return value that the app can obtain through CollisionCallback.onCollision(int 
collision, int status), where collision is equal to level, and status is equal to *result. 
Return Value Description: 
If it returns true, it is considered that a collision has been detected, and the app will be notified through a callback. If the 
app does not register a callback, a broadcast will be sent out. If it returns false, it is considered that no collision has been 
detected, and neither a callback nor a broadcast will be sent. 
Other Notes: 
sensorservice will call the collision_detect function each time it sends data. The function setNormalCollision() can be 
used to enable or disable this feature. If this feature is disabled, collision_detect will not be called even if sensor data 
is sent. 
Reference Example： 
Please refer to the implementation of SmartplatformCollision.h and SmartPlatformCollision.cpp. 
 
1.4 Frequently Asked Questions/Troubleshooting    
 Common SDK Questions 
1.4.1.1 Incorrect Order of Calling setpreviewSurface Causing the Underlying Buffer 
to Get Stuck 
If setpreviewSurface null is invoked before stop preview, the following printout may occur： 
BufferQueueProducer: [ImageReader-1280x720f32315659m5-15749-
52](this:0x7a989dd000,id:52,api:4,p:544,c:-1) queueBuffer: BufferQueue has been abandoned 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
This error occurs because the surface is destroyed before invoking stop preview, causing the underlying buffer to get stuck. 
 
1.4.1.2 Taking a Picture (takePicture) in a Separate Thread 
Some SD cards are slow to save pictures, so takePicture can be run in a separate thread to ensure it does not freeze the 
APK. 
new Thread(() -> { 
         mDevice.takePicture(path, mShutterCallback, pictureCallback); 
}).start(); 
 
1.4.1.3 Do not Perform Time-Consuming Actions in Callbacks 
Considering synchronization and efficiency issues, callbacks in the SDK are processed directly in the binder thread without 
starting a new thread. Therefore, it is best for the app to start a new thread to handle the callback after receiving it. If a 
new thread is not started, do not continue to call SDK interfaces in the callback (as it may cause a deadlock), and do not 
perform time-consuming actions in the callback, as this can easily cause the APK to ANR. 
 
 Methods to Toggle Debug Logs 
1.4.2.1 Method to Enable SpmCameraDeviceImpl Debug Log 
adb shell setprop persist.vendor.log.spmsdk true; 
adb reboot 
1.4.2.2 Method to Disable the Pre-Set Capture Surface 
adb shell setprop persist.vendor.spm.presetpic false 
adb reboot 
 
 
 
 
 
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
MT8676 Android SDK 
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
# SRC0199 MT8676_Android_Secure_Boot_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Secure_Boot_User_Manual_V1.0.pdf

SHA-256：25514cae24e48ad29ca4816cce914c5e647fb301fa5d59aea60451c14cdf8b70

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0199.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-09-19
MT8676 Android Secure Boot  
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-09-19 Heaven Zhang Official release 
 
  
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
MT8676 Android Secure Boot 
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
 Secure Boot Check Flow ································································································································ 5 
1.3 Download DAA (DAA) ··············································································································································· 6 
1.4 Security Feature Configuration ································································································································ 7 
 Generate A Key Pair ······································································································································ 7 
 Enable Secure Boot ······································································································································· 8 
 Compile Software ·········································································································································· 9 
 Sign the Preloader ········································································································································· 9 
 Sign Other Images ········································································································································· 9 
1.5 Sign the DA ····························································································································································· 10 
1.6 Configure efuse.xml ··············································································································································· 11 
1.7 Generate Authfile ··················································································································································· 11 
Exhibit 1 Terms and Conditions ········································································································································ 12 
 
 
List of Figures 
Figure 1-1. Secure boot check flow ············································································································································ 6 
Figure 1-2. dakey.h ····································································································································································· 8 
Figure 1-3. DA keys under resignda ·········································································································································· 10 
 
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
1 Secure Boot 
1.1 Overview 
This document aims to provide an overview of the security boot feature in the MT8676 SoC and its accompanying SDK. 
During the product’s design and deployment cycle, functionalities and features may change, which will be recorded in 
subsequent versions of this document. Additionally, how to enable security features is also explained in this document. 
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
DA Download Agent (including DA_BR and DA_PL) 
DAA Download Agent Authentication 
DRAM Data Random Access Memory 
eFuse Electronic Fuse 
eMMC Embedded MultiMedia Card 
EVB Evaluation Board 
NVM Non-Volatile Memory 
ROM Read-only Memory 
SBC Secure Boot Check 
SDK Software Development Kit 
SRAM Static Random Access Memory 
TEE Trusted Execution Environment 
UART Universal Asynchronous Receiver/Transmitter 
USB Universal Serial Bus 
USBDL USB Download 
 
 BootRom 
BootROM (BROM) is a software inside the System on Chip (SoC) ROM that cannot be modified. It is the first software 
executed by the application processor. The main tasks are summarized as follows. 
 
• Basic hardware configuration of the SoC, such as setting up PLL/clock, is performed to enable startup. 
• To boot the system, the first stage bootloader is loaded from the boot device (UFS/eMMC/NAND/...). 
• Communication is established with the host PC to load Download Agent (DA) software for mirroring downloads of 
external FLASH that lacks software or has software corruption. 
• Multiple secure boot verification keys should be used to conduct secure boot checks on the first-stage bootloader or 
download agent. 
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
1.2 Secure Boot 
 Secure Boot Check Flow 
The secure boot check flow is used to establish a trusted execution chain from the hardware root of trust. It can be 
enabled by burning SBC_EN in the eFuse. This process is executed every time the system recovers from a power-on reset. 
Figure 1-1 illustrates the basic secure boot check flow. A detailed description is as follows. 
 
1. After power-on reset, BROM uses the following process to verify the Secure Boot Check (SBC) public key (SBC_PUBK) in 
non-volatile memory (NVM), such as eMMC or NAND. BROM sequentially uses the public key hash ( SBC_PUBK_HASH) 
from eFuse. 
1) Read the hash value (SBC_PUBK_HASH) of the secure boot check public key (SBC_PUBK) from eFuse 
2) Read the SBC public key (SBC_PUBK) from NVM. 
3) Calculate the hash value of the data from (2). 
4) Check if the data from (1) and (3) are the same. 
 
2. BROM loads and verifies the Preloader, which is the first stage bootloader. It first reads the Preloader from NVM to 
SoC’s SRAM and authenticates the Preloader using Secure Boot Check Public Key (SBC_PUBK). If the Preloader 
verification is successful, the Preloader will be executed. The verification method uses SHA256 to calculate a hash 
value, RSA (2048 bits) and MTK or PSS padding (determined by the header of the first stage bootloader) for 
verification. 
Note:  
• If the external storage is NAND flash, BROM supports the second copy of Preloader . When BROM fails to load the first copy of 
Preloader, it will attempt to load/authenticate the second copy of Preloader . 
 
3. After the first-stage bootloader, a certificate chain is introduced for the verification of the second-stage bootloader, 
Linux kernel, and other images. The certificate chain is designed for key management delegation, with each image 
being able to use a different pair of keys. Each image is accompanied by two certificates, CERT1 and CERT2, both of 
which are in x509v3 format. This involves two pairs of keys, the root key pair and the image key pair. CERT1 is signed 
by the root private key, while CERT2 is signed by the image private key. Therefore, the verification step would be, after 
CERT1 is verified with the public key (SBC_PUBK), the image public key extracted from CERT1 is used to verify CERT2. It 
is important to note that the CERT1 of each image is signed by the same root private key, but the CERT2 of each image 
may or may not be signed by the same image private key. 
 
4. Preloader loads the second stage bootloader to the non-secure DRAM area from NVM and verifies it. It uses the public 
key embedded in Preloader to authenticate CERT1 of the second stage bootloader and uses the image public key 
extracted from CERT1 to authenticate CERT2 of the second stage bootloader. If the verification of the second stage 
bootloader is successful, it will be executed after TEE initialization. The verification method uses SHA256 to calculate 
hash value, RSA (2048-bit) and MTK or PSS padding for verification. 
 
5. Preloader also loads TEE to a secure DRAM area from NVM and verifies it. It uses the public key inside the first stage 
bootloader to authenticate CERT1 of the TEE image, and uses the image public key extracted from CERT1 to 
authenticate CERT2 of the TEE image. If TEE verification is successful, TEE will be executed, and then the system jumps 
to the second stage bootloader. The verification method uses SHA256 to calculate hash value, RSA (2048 bits) and MTK 
or PSS padding for verification. 
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
6. The second stage bootloader also uses embedded public keys and image public keys to verify CERT1 and CERT2 of the 
Linux kernel and other images that need to be verified at this stage. The verification method uses SHA256 to calculate 
hash value, RSA (2048 bits) and MTK or PSS padding for verification. 
 
7. After executing on a Linux system, it is possible to verify read-only images using dm-verity in the Linux kernel (on block 
devices). 
Note:  
• Currently, dm-verity only supports block devices in Linux (EXT4 on eMMC). 
 
 
Figure 1-1. Secure boot check flow 
 
1.3 Download DAA (DAA) 
When the software in the external storage (eMMC/NAND/...) is empty or damaged, the host PC tool can communicate with 
the SoC’s BROM, load DA into the SoC’s SRAM, and execute DA to initiate the image downloading process. When 
Enable_DAA is burned in, DA will be authenticated by BROM, and this process is referred to as DA Authentication (DAA). 
 
1. The host PC tool sends the authentication file (AuthFile) to BROM via USB or UART 
2. BROM authenticates AuthFile.  
1) BROM reads the Secure Boot Check (SBC) public key (SBC_PUBK) from AuthFile, and uses the public key hashes 
(SBC_PUBK_HASH~SBC_PUBK_HASH1) and corresponding disable bits 
(SBC_PUBK_HASH_DIS~SBC_PUBK_HASH1_DIS) to authenticate the hash of the SBC key. 
2) BROM uses SBC_PUBK to verify AuthFile. 
3) BROM obtains the DAA key from the AuthFile. 
3. The host PC tool sends the DA. 
4. BROM uses the DAA key to verify DA through SHA256/RSA-2048. 
5. BROM jumps to DA to execute the firmware download process. 
 
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
Note: 
• SBC_PUBK and DAA keys can be different to increase the security level. 
• In addition to BROM, the first-stage bootloader also supports the DA protocol, which can be used to verify DA using 
SHA256/RSA2048. 
 
1.4 Security Feature Configuration 
 Generate A Key Pair 
A pair of root keys (comprising private and public keys) should be generated. Utilize pem_to_der.py to convert the key 
format to DER format in vendor/MediaTek/proprietary/scripts/sign-image_v2/der_extractor/. 
 
1. Command to generate private key: 
openssl genrsa -out root_prvk.pem 2048 
python pem_to_der.py root_prvk.pem root_prvk.der 
 
2. Command to generate public key: 
openssl rsa -in root_prvk.pem -pubout > root_pubk.pem 
python pem_to_der.py root_pubk.pem root_pubk.der 
 
The image key pair (img_prvk.pem/img_pubk.pem) for signing and verifying images and the DA key pair 
(da_prvk.pem/da_pubk.pem) for signing and verifying DAs are generated using the same method. 
 
1.4.1.1 Create oemkey.h 
Export the root key (root_pubk.der), and generate oemkey.h using der_extractor. This tool is located in  
vendor/MediaTek/proprietary/scripts/sign-image_v2/der_extractor/ directory. Please place oemkey.h at 
the following path: 
[DA] $DA_Kit/Raphael-da/custom/$PLATFORM/oemkey.h 
[PL] $PL/custom/$PROJECT/inc/oemkey.h 
[LK] $LK/target/$PROJECT/inc/oemkey.h 
Command: 
chmod 777 der_extractor 
./der_extractor root_pubk.der oemkey.h ANDROID_SBC 
 
1.4.1.2 Create dakey.h. 
The dakey.h file contains the DA_PL public key used by the preloader to verify DA_PL.bin. Subsequently, DA_PL.bin is 
signed using the corresponding private key. 
Command: 
chmod 777 der_extractor 
./der_extractor da_pubk.der dakey.h ANDROID_SBC 
 
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
Place dakey.h in the following path: 
[PL] $PL/custom/$PROJECT/inc/dakey.h 
 
Note:  
• After generating dakey.h, please replace all “OEM” with “DA”. 
 
Figure 1-2. dakey.h 
 
 Enable Secure Boot 
1.4.2.1 Configure the Preloader 
1. vendor/mediate/proprietary/bootable/bootloader/preloader/custom/<project>/<project.mk> 
MTK_SECURITY_SW_SUPPORT=yes 
2. vendor/mediate/proprietary/bootable/bootloader/preloader/custom/<project>/<project.mk> 
MTK_SEC_BOOT= ATTR_SBOOT_ONLY_ENABLE_ON_SCHIP  
MTK_SEC_USBDL = ATTR_SUSBDL_ONLY_ENABLE_ON_SCHIP 
ATTR_SBOOT_ONLY_ENABLE_ON_SCHIP means that secure boot and secure download are enabled according to 
efuse SBC field. 
 
In the early stages of the project, eFuse operations may not be desired for the device. Secure boot and secure 
download can be enforced without using eFuse to initially verify the software’s secure boot flow. 
MTK_SEC_BOOT= ATTR_SBOOT_ENABLE  
MTK_SEC_USBDL = ATTR_SUSBDL_ENABLE  
 
1.4.2.2 Configure LK 
vendor/mediate/proprietary/bootable/bootloader/lk2/project/<project.mk> 
MTK_SECURITY_SW_SUPPORT=yes 
 
1.4.2.3 Configure Kernel  
32 bit kernel 
<kernel path>/arch/arm/configs/<project>_debug_defconfig 
<kernel path>/arch/arm/configs/<project>_defconfig 
 
64 bit kernel 
<kernel path>/arch/arm64/configs/<project>_debug_defconfig 
<kernel path>/arch/arm64/configs/<project>_defconfig 
 
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
CONFIG_MTK_SECURITY_SW_SUPPORT=y 
 
 Compile Software 
Compile the entire project. 
 
 Sign the Preloader  
1. Replace your root_prvk.pem at the following path: 
/vendor/mediatek/proprietary/bootable/bootloader/preloader/custom/${project}/security/ch
ip_config/s/key/ 
2. Clear compile preloader. 
 
 Sign Other Images 
1.4.5.1 Generate the Keys for cert1 and cert2 
1. Use root_prvk.pem and img_prvk.pem to generate cert1 and cert2_key. 
2. Run the following command. 
python ./vendor/mediatek/proprietary/scripts/sign-image_v2/img_key_deploy.py mt6897  
cert1_key_path=${KEY_PATH}/root_prvk.pem cert2_key_path=${KEY_PATH}/img_prvk.pem 
root_key_padding=pss 2>&1 | tee  SecureGen.log 
Note: 
• Please do not enter the ./vendor/MediaTek/proprietary/scripts/sign-image_v2/ directory to execute 
img_key_deploy.py. Please execute this command in the root directory of the code repository. 
• Please check if cert1 and cert2_key of all images have been updated at the following locations: 
vendor\mediatek\proprietary\custom\mt6897\security\cert_config\cert1\ 
vendor\mediatek\proprietary\custom\mt6897\security\cert_config\cert2_key\ 
 
1.4.5.2 Sign Images 
After cert1 and cert2_key have been generated, a signing script can be executed to generate <image>-verified.bin or 
<image>-verified.img. 
Command: 
python ./vendor/mediatek/proprietary/scripts/sign-image_v2/SignFlow.py <platform> <project> 
2>&1 | tee signflow.log 
Or 
./vendor/mediatek/proprietary/scripts/sign-image/sign_image.sh 2>&1 | tee signflow.log 
 
The project must be lunched before compiling. 
  
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
1.5 Sign the DA 
Before signing the DA, ensure that oemkey.h has been configured according to Section 1.4.1.1. Both the Boot Region of 
DA (DA_BR) and the Preloader of DA (DA_PL) utilize Python scripts for the signing process. 
1. Key configuration (da_prvk.pem and epp_prvk.pem use RSA2048) 
Place da_prvk.pem 和epp_prvk.pem (Figure 1-3) at 
./vendor/mediatek/proprietary/scripts/secure_chip_tools/custom_keys/. 
– DA_PL: da_prvk.pem should be paired with the public key set in dakey.h. 
– DA_BR:  The da_prvk.pem should be paired with the DAA public key in the authfile. 
 
 
Figure 1-3. DA keys under resignda 
Note: 
• epp_prvk is equivalent to da_prvk.pem. Therefore, simply copy da_prvk.pem and rename it to epp_prvk.pem. 
• DA_PL and DA_BR both use the PSS padding format, so if DA_PL and DA_BR are signed with the same key, the preloading 
program can use DA_BR. If DA_PL and DA_BR are signed with different keys, the preloading program can only use DA_PL. 
 
2. Key path configuration 
Usually the key path is preconfigured by default. 
 
 
 
3. Place the DA that needs to be signed in prebuilt/resignda/, and execute the following command to sign the DA: 
python MTK/resign_da.py prebuilt/resignda/DA_BR.bin MT6897 
settings/Legacy/da/bbchips_pss.ini all out/resignda/DA_BR-resing.bin 
After signing, the DA will be generated in the out/resignda directory. 
Set the key path 
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
1.6 Configure efuse.xml 
Please apply for the efuse.xml file from MediaTek.  
• In the efuse.xml, set the key type to pss and set pub-key-e to 010001. The pub-key-n field should be the same as 
the root public key in oemkey.h. 
 
 
• Set SBC to true to enable the secure boot feature. 
 
 
• Set DAA to true to enable the DA verification function. 
 
 
1.7 Generate Authfile 
The public key of DA is included in the authfile, which BROM uses to verify DA. Therefore, when DAA is enabled, authfile is 
required when downloading images using flashtool. All .ini files located at the following directory have been configured for 
this project. 
./vendor/mediatek/proprietary/scripts/secure_chip_tools/settings/Legacy/authfile/ 
You should only replace the DA, epp, and .pem files of root private keys in the following directory. 
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

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Android Secure Boot 
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
# SRC0200 MT8676_Android_SPI_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_SPI_User_Manual_V1.1.pdf

SHA-256：d3691b28be364182c4fe052a2943639d3c95cf26488c150069894918452fddfa

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0200.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2025-03-24
MT8676 Android SPI 
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
MT8676 Android SPI 
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
MT8676 Android SPI 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 SPI ············································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Introduction ·················································································································································· 4 
 Abbreviation·················································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
 Introduction to SPI ········································································································································ 4 
 MT8676 SPI Characteristics ·························································································································· 4 
 SPI Transmission Format ······························································································································· 6 
1.3 Configuration/Customization Guideline ··················································································································· 8 
 Device Tree ···················································································································································· 8 
 Node Configuration ······································································································································· 8 
 PAD_SEL ························································································································································ 9 
 Frequency ····················································································································································· 9 
 SPI Mode ······················································································································································· 9 
 FIFO and DMA Mode ··································································································································· 10 
 Support for Multiple Devices ······················································································································ 10 
 Testing and Debugging ································································································································ 11 
1.4 Frequently Asked Questions/Troubleshooting ······································································································· 11 
 SPI Issue Debugging Methods ····················································································································· 11 
 DTS Configuration ······································································································································· 11 
 Confirm GPIO Mode ···································································································································· 12 
 Measuring Waveforms ································································································································ 12 
 How to Print SPI Register Information ········································································································ 12 
 Seeking MTK Support ·································································································································· 13 
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
MT8676 Android SPI 
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
• Supports two transmission modes: DMA and FIFO 
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
MT8676 Android SPI 
User Manual 
Confidential B 
• FIFO mode supports up to 32 bytes in a single transmission 
• If the transmission length is less than 1024 bytes, DMA mode supports up to 1024 bytes 
• DMA mode supports multiples of 1024 bytes (length = number of cycles * 1024, where 1 ≤ number of cycles ≤ 256). 
• The maximum transmission frequency is 52 MHz 
• There are four communication modes available (Mode 0, 1, 2, 3), as shown in Figure 1-2. 
• This essentially defines the SCLK edge on which the MOSI line switches, the SCLK edge on which the master samples  
• the MISO line, and the stable level of the SCLK signal (e.g., the clock level when the clock is not active, either high or 
low). Each mode is defined by a pair of parameters called “Clock Polarity” (CPOL) and “Clock Phase” (CPHA). 
 
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
MT8676 Android SPI 
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
int spi_sync (struct spi_device 
*spi, struct spi_message 
*message) 
SPI: Pointer to the structure spi_device Return 0 if successful, 
otherwise return an error 
code Message: Pointer to the structure spi_message 
 
1.2.3.3 spi_async 
Prototype Parameter Return Value 
int spi_async (struct 
spi_device *spi, struct 
spi_message *message) 
SPI: Pointer to the structure spi_device Return 0 if successful, 
otherwise return an error 
code Message: Pointer to the structure spi_message 
 
1.2.3.4 spi_write_then_read 
The parameters for this routine always use a small buffer for copying and should not be used for more than 32 bytes. 
Performance-sensitive or bulk transfer code should instead use spi_{async, sync}() calls with DMA-safe buffers. 
Prototype Parameter Return Value 
int spi_write_then_read 
(struct spi_device *spi，const 
void *txbuf, unsigned n_tx, 
unsigned n_tx， void *rxbuf， 
unsigned n_rx) 
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
MT8676 Android SPI 
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
MT8676 Android SPI 
User Manual 
Confidential B 
 
ret = spi_async(spi, &msg); 
if(ret) { 
 ……; 
} 
 
1.3 Configuration/Customization Guideline 
 Device Tree 
Source code path: kernel-xxx/arch/arm64/boot/dts/mediatek/ 
• Add pinctrl to set SPI pinmux 
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
MT8676 Android SPI 
User Manual 
Confidential B 
When in use, configure it in the corresponding project DTS: status = "okay": 
&spi { 
 pinctrl-names = "default"; 
 pinctrl-0 = <&spi_pins>; 
 mediatek,pad-select = <0>;  
 status = "okay";// Manually configure to enable. 
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
pinctrl-0 = <&spi_pins>; 
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
MT8676 Android SPI 
User Manual 
Confidential B 
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
pinctrl-names = "default"; 
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
MT8676 Android SPI 
User Manual 
Confidential B 
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
 
Spixxx represents different groups of SPI, subject to what is actually displayed. 
 
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
MT8676 Android SPI 
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
MT8676 Android SPI 
User Manual 
Confidential B 
Call spi_dump_reg() before invoking mtk_spi_enable_transfer() in both mtk_spi_fifo_transfer() and 
mtk_spi_dma_transfer() functions. 
 
 Seeking MTK Support 
If you are still unable to resolve your issue after the troubleshooting steps mentioned earlier, and when seeking help from 
MTK, please also provide the relevant logs containing SPI register information, waveform charts, dts, and the output from 
cat mt_gpio as mentioned previously. 
 
 
 
  
 
 
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
MT8676 Android SPI 
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
# SRC0201 MT8676_Android_Suspend_Resume_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Suspend_Resume_User_Manual_ V1.0.pdf

SHA-256：45653c777bcadf0ae77efdb09036d83c1dd1da15d6900108c5b3f9ac977ac5e2

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0201.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Android Suspend and Resume 
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
MT8676 Android Suspend and Resume 
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
MT8676 Android Suspend and Resume 
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
1.2.2 Kernel Suspend/Resume Flow ······················································································································ 5 
1.3 Configuration/Customization Guideline ··················································································································· 7 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 7 
1.4.1 How to Determine if the System Has Successfully Entered Sleep Mode ······················································ 7 
1.4.2 How to Identify Wakeup Sources ·················································································································· 7 
1.4.3 Wakeup Source Analysis ······························································································································· 8 
1.4.4 How to Analyze Issues with Failing to Enter Sleep Mode ············································································· 9 
1.4.5 How to Analyze High Power Consumption During Sleep Mode ·································································· 10 
Exhibit 1 Terms and Conditions ········································································································································ 11 
 
List of Figures 
Figure 1-1. Android Suspend/Resume flow ································································································································ 4 
Figure 1-2. Android Suspend/Resume source code ··················································································································· 5 
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
MT8676 Android Suspend and Resume 
User Manual 
Confidential B 
1 Suspend/Resume 
1.1 Overview 
This chapter mainly introduces the MT8676 Suspend/Resume process and common troubleshooting methods. 
 
On the MT8676 platform, Suspend refers to suspend to RAM, a state where all devices enter a low-power mode, with only 
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
The Android system’s Suspend process is mainly divided into two major stages. The first stage is screen-off, which means 
turning off the display and entering light sleep. After the system enters light sleep, if there is no wakelock, it will trigger the 
Kernel Suspend process. The resume process is the opposite. Refer to Figure 1-1. 
“on”
(LCD on)
“mem”
(LCD off)
Suspend
resume
“dark”/“dim”/“bright”…
HW wakeup source (e.g. power keyevent)
suspend
No wake lock
Android
Linux
“mem”→/sys/power/state
callback
driver
callback
driver
Wait for trying next suspend
LCD dark ->
displaySetPowerMode
(HWC_POWER_MODE_DOZE_SUSPEND)
LCD bright -> 
displaySetPowerMode
(HWC_POWER_MODE_ON)
 
Figure 1-1. Android Suspend/Resume flow 
 
The corresponding source code is as follows. 
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
MT8676 Android Suspend and Resume 
User Manual 
Confidential B 
  
Figure 1-2. Android Suspend/Resume source code 
 
Main flow description: 
 
1. Sleep mSleepTime: The initial value is 100 ms. This value will change depending on whether the suspend operation 
is successful or not. 
2. Read the value of /sys/power/wakeup_count: If there is an active wakeup source at this time, the process will be 
blocked in the kernel. 
3. Return wakeup_count: This happens when there are no active wakeup sources. 
4. Write back wakeup_count: If the write-back is successful, the process continues. 
5. Write mem to /sys/power/state: This initiates the Kernel Suspend process. If successful, the process will halt at 
this line and wait for the Kernel Resume to continue execution. If the suspend fails, mSleepTime will double, and the 
loop will retry the suspend process. 
 
 Kernel Suspend/Resume Flow 
The flow of Kernel Suspend/Resume is shown in Figure 1-3. 
 
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
MT8676 Android Suspend and Resume 
User Manual 
Confidential B 
 
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
4. Enter TF-A psci_cpu_suspend: 
– The system enters the Trusted Firmware-A (TF-A) psci_cpu_suspend. 
5. Power Down Unused Hardware: 
– Unused hardware is powered down, and the entire system enters low-power sleep mode. 
 
After entering the sleep mode, if there is a wakeup request from a wakeup source, the system will wake up and enter the 
resume process. The resume process is the reverse of the suspend process. 
 
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
MT8676 Android Suspend and Resume 
User Manual 
Confidential B 
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
 
 How to Identify Wakeup Sources 
Search for the keyword “suspend wake up by” in the kernel log to identify the wakeup source. 
e.g. 
Pwrkey Wakeup (and other EINT Wakeups)： 
[SPM] suspend wake up by R12_EINT_EVENT_B, timer_out = 207308 
 
To determine which specific EINT caused the wakeup, first look for the log entry: 
EINT xxx is pending 
 
Then, use the following command to see which interrupt corresponds to xxx: 
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
MT8676 Android Suspend and Resume 
User Manual 
Confidential B 
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
R12_SYS_TIMER_EVENT_B 18 System timer  N 
R12_EINT_EVENT_SECURE_B 19 EINT event  N 
R12_SCP_CIRQ_IRQ_B 22 SCP_CIRQ wakeup event Y 
R12_MD2AP_PEER_EVENT_B 23 MD event Y 
R12_MD1_WDT_B 25 MD1 watchdog timeout Y 
R12_REG_CPU_WAKEUP_B 28 Internal Wakeup N 
R12_APUSYS_WAKE_HOST_B 29 APUSYS event Y 
R12_PCIE_WAKEUP_EVENT_B 30 PCIe event Y 
R12_MSDC_WAKEUP_EVENT_B 31 MSDC event Y 
 
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
MT8676 Android Suspend and Resume 
User Manual 
Confidential B 
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
• Check which modules in userspace are holding wakelocks. 
dumpsys power   
e.g. 
Wake Locks: size=1 
  SCREEN_DIM_WAKE_LOCK           'CAR.POWER' ACQ=-5m14s440ms (uid=1000 pid=1467) 
 
Suspend Blockers: size=4 
  PowerManagerService.WakeLocks: ref count=1 
  PowerManagerService.Display: ref count=1 
  PowerManagerService.Broadcasts: ref count=0 
  PowerManagerService.WirelessChargerDetector: ref count=0 
 
Display Power: state=ON 
 
• Check which modules in the kernel are holding wakelocks. 
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
MT8676 Android Suspend and Resume 
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
MT8676 Android Suspend and Resume 
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
# SRC0202 MT8676_Android_System_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_System_User_Manual_ V1.0.pdf

SHA-256：07ba8708b032bf7231c9d9c9d152c122e53b532484a9dc4ab4d1857fe0ae50e6

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0202.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Android System User Manual 
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
MT8676 Android System 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Chao Zhang Official release 
 
  
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
MT8676 Android System 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 4 
List of Tables ······································································································································································ 4 
1 System ······································································································································································· 5 
1.1 Build System ····························································································································································· 5 
1.1.1 Build Environment········································································································································· 5 
1.1.2 Sync Code ······················································································································································ 5 
1.1.3 Build Command ············································································································································· 6 
1.2 System Overview ······················································································································································ 6 
1.2.1 Brief Introduction ·········································································································································· 6 
1.2.2 Abbreviations ················································································································································ 6 
1.3 Architecture/Process Overview ································································································································ 7 
1.3.1 MT8676 Android Software Layers ················································································································· 7 
1.3.2 Bootup ·························································································································································· 8 
1.3.3 Shutdown ···················································································································································· 14 
1.3.4 Android Bootup Log Analysis ······················································································································ 15 
1.4 Configuration/Customization Guideline ················································································································· 19 
1.4.1 System Related Configurations ··················································································································· 19 
1.5 Frequently Asked Questions/Troubleshooting ······································································································· 21 
1.5.1 Logs Provision ············································································································································· 21 
1.5.2 MT8676 DB Analysis Guide ························································································································· 21 
1.5.3 Memory Leak ·············································································································································· 30 
1.5.4 WDT Brief Introduction ······························································································································· 31 
1.5.5 Performance Mode ····································································································································· 32 
1.5.6 CPU Hotplug ················································································································································ 33 
1.5.7 Systrace Capture ········································································································································· 34 
1.5.8 System Reference FAQ ································································································································ 34 
Exhibit 1 Terms and Conditions ········································································································································ 35 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
MT8676 Android System 
User Manual 
Confidential B 
List of Figures 
Figure 1-1. MT8676 Android software layers ····························································································································· 7 
Figure 1-2. Bootup architecture ················································································································································· 8 
Figure 1-3. Main work of Boot Rom ··········································································································································· 9 
Figure 1-4. Main work of Bootloader ······································································································································· 10 
Figure 1-5. Main work of kernel C phase ································································································································· 11 
Figure 1-6. MT8676 shutdown flow ········································································································································· 14 
Figure 1-7. DB category ···························································································································································· 22 
Figure 1-8. Exception classification ·········································································································································· 23 
Figure 1-9. GAT tool UI ····························································································································································· 24 
Figure 1-10. DBViewer UI ························································································································································· 24 
Figure 1-11. Generated file after parsing ································································································································· 24 
Figure 1-12. Files generated after decompression ··················································································································· 25 
Figure 1-13. USBNET causeing KE ············································································································································· 25 
Figure 1-14. SWT DB files generated after decompression ······································································································ 26 
Figure 1-15. system_server causing SWT ································································································································· 26 
Figure 1-16. NE DB file gen ······················································································································································· 27 
Figure 1-17. Systemui causing NE ············································································································································· 27 
Figure 1-18. JE DB file generated after decompression ··········································································································· 28 
Figure 1-19. Animation causing system_server crash and leading to JE ·················································································· 29 
Figure 1-20. MD ASSERT triggered ··········································································································································· 29 
Figure 1-21. ANR occurs in system UI ······································································································································· 30 
Figure 1-22. How to quickly locate ANR issues through logs ··································································································· 30 
Figure 1-23. cat /proc/meminfo log ········································································································································· 31 
Figure 1-24. Kernel memory leak log ······································································································································· 31 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 6 
Table 1-2. System issue log map (M: must, O: optional, C: conditional, X: no need) ······························································· 21 
Table 1-3. KE log map ······························································································································································· 26 
Table 1-4. NE log map······························································································································································· 28 
Table 1-5. ANR issue log map ··················································································································································· 30 
 
 
  
 
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
MT8676 Android System 
User Manual 
Confidential B 
1 System 
1.1 Build System 
 Build Environment 
Item Requirement 
Disk Space At least 250GB 
PC Memory At least 24GB 
Version Ubuntu 18.04 (Recommended) 
Tools which should be installed for compilation  Refer to http://source.android.com/source/initializing.html 
Git >1.9.1 
Shell >4.4.1 (Ubuntu18.04 default built-in version) (Recommended) 
Perl >5.26.1 (Ubuntu18.04 default built-in version) (Recommended) 
Python Python 2.7.17&Python 3.6.9 (Ubuntu18.04 default built-in version) 
(Recommended) 
GNU Make >4.1 (Ubuntu18.04 default built-in version) (Recommended) 
 
 Sync Code 
Step1: Make a new directory to save the download. 
cmd: mkidr <working folder> && cd <working folder> 
Step2: Codebase initialization 
cmd: repo init -u https://git01.mediatek.com/alps_release/platform/manifest -b <branch> -m 
<manifest> --no-repo-verify 
<branch>: branch name 
<manifest>: Specific branch and version  
Scenario 1: init latest code 
$repo init -u https://git01.mediatek.com/alps_release/platform/manifest -b $company -
m $(release_branch)-default.xml --no-repo-verify 
 
Scenario 2: init specific version 
$repo init -u https://git01.mediatek.com/alps_release/platform/manifest -b $company -m 
$(release_tag).xml --no-repo-verify 
 
Step3: Code Sync 
Scenario 1: Sync full codebase 
$repo sync -c -f -j8 --no-repo-verify --optimized-fetch 
 
Scenario 2: Sync single repo 
$repo sync <repository name>  /*<repository name > can be repository name or repository 
path */ 
Example: $repo sync device/common 
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
MT8676 Android System 
User Manual 
Confidential B 
Scenario 3: Sync multiple repos 
$repo sync <repository name1 repository name2> /*repositpry1 repository2 separated by 
space */ 
Example: $repo sync platform/art platform/abi/cpp 
 
 Build Command 
MT8676 uses LD2.0 build. You can refer to MOL: https://online.mediatek.com/apps/quickstart/QS00266. 
Build command: 
Python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py –run 
full_${Project}-${mode} 
For example: 
Python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py –run 
full_auto8676p1_64_bsp-userdebug 
Output: Images will be created in out/target/product/${project}/merged. 
 
LD2.0 will create out_sys & out_hal & out_krn & out to store the images of each layer after build. 
For detailed information, refer to: https://online.mediatek.com/apps/quickstart/QS00178. 
 
Query build command: 
Python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py 
full_${Project}-${mode} 
 
1.2 System Overview 
 Brief Introduction 
This chapter mainly introduces MT8676 system related content and how to deal with common system problems. 
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
AED Android Exception Daemon 
JE Java Exception   
NE Native Exception 
KE Kernel Exception 
EE External Exception 
ANR Application Not Response 
SWT Software Watchdog Timeout 
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
MT8676 Android System 
User Manual 
Confidential B 
1.3 Architecture/Process Overview 
 MT8676 Android Software Layers 
MT8676 Android software layers diagram is shown in Figure 1-1 (Zoom in to see clearly). 
 
 
Figure 1-1. MT8676 Android software layers 
Android Runtime Bluetooth Stack
Android Automotive AUTO-YM APP Android Customer
freeRTOSApplication
Java API Framework
Linux Kernel
Home Camera Media Player Browser Navigation AUTO HMICar BT AVM
View System
Content Provider
Activity Manager
Resource Manager
Location Manager
Connectivity Manager
Package Manager
Window Manager
Notification Manager
Power Manager
Bluetooth Service
Bluetooth Profile
Car Manager
Surface Manager Media Framework SQLite
Open GL|ES Webkit libc
Android Runtime(ART)
Core Libraries
FreeType
...
Car Service
Audio Camera Video Graphic WiFi Bluetooth
RIL GPS Input Sensor Thermal ...
Vehicle
EVS
AVM algo
Codec Touch
Sensor MT66xx Power CCCI
AVM app
Camera MDPDRM
Peripheral(UART, I2C, SPI, SDIO, PCI-e, GPIO, PWM, ADC...)
OpenGLALSAScheduler Memory
VFS
eMMC/UFS/SD
Network ethernet
USB
Timer,RTC
evs app
tbox
IPO
tbox app
liteCamera
bootanim
FastRVC
DVRSurface Engine
DVR API
DVR
AVM daemon
Native C/C++ Libraries Android Runtime Native App
HAL MTK Native libraries
tbox  service
tbox
IPO API
MultiDisplay
MAS
MIPI-CSI driver MDP driver
UltraRVC app
ISP driver Display driver
Peripheral(I2C,GPIO...) freeRTOS core
HAL
Native App
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
MT8676 Android System 
User Manual 
Confidential B 
 Bootup 
1.3.2.1 Bootup Architecture 
 
Figure 1-2. Bootup architecture 
 
• Step1: Once the system is powered on, the bootroom code will be executed firstly, then system loads the bootloader 
from the UFS into the SRAM, and initializes the DRAM, and boots up the Linux kernel. Boot Loader is divided into 
preloader and LK. The preloader runs in SDRAM, but LK runs in DRAM, and LK will load the kernel image. 
• Step2: Idle process will be start firstly, which is used to initialize process management and memory management and 
load the driver module; then fork the kthreadd process, which is the father process of all Linux kernel processes. 
• Step3: After the module drivers are loaded, the drivers will interact with the HAL layer and start init process. 
• Step4: After the init process is started, various user daemons will be started, and some important services such as 
servicemanager (binder service manager) will be also started. At the same time, the corresponding configuration file 
init.rc will be parsed and Zygote will be forked.  
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
MT8676 Android System 
User Manual 
Confidential B 
• Step5: The Zygote is a process between the native layer and the Java layer. It will load the virtual machine JVM, 
register the JNI function, open the channel from the native to the Java layer, and start the systemserver (responsible 
for the entire Java framework) and the first app process (launcher). 
 
1.3.2.2 Boot ROM  
 Brief Introduction 
Boot Rom is a hardware device (similar to SRAM/DRAM), which contains an unmodifiable and solidified program bootcode 
that comes with the factory. 
After powering on, Boot Rom starts to execute the internal bootcode that has been set in advance, loads the boot program 
preloader into SRAM and then executes it. 
 
 Main Work 
 
Figure 1-3. Main work of Boot Rom 
 
1. Load the boot program preloader into SRAM and then execute it. 
2. When no valid image or code is detected, Boot Rom boots into download mode . 
3. Perform some verification work. 
4. Hardware initialization, serial port, flash, etc. 
 
1.3.2.3 Bootloader 
 Brief Introduction 
The bootloader is divided into preloader and LK (Little Kernel is an open source bootlader project, but it only supports Arm 
and x86 platforms. Its notable feature is the implementation of a simple thread mechanism). 
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
MT8676 Android System 
User Manual 
Confidential B 
The preloader is stored in Flash and runs in SRAM (SRAM does not need to be initialized). The preloader can be directly 
loaded into SRAM by bootrom and run. Its main function is to initialize DRAM which LK runs in. The main function of LK is 
to load the kernel into DRAM.  
 
 Main Work 
 
Figure 1-4. Main work of Bootloader 
 
1. After powering on, the BootCode will be executed first. 
2. BootCode locates the preloader in Flash. 
3. Load the preloader from Flash into SRAM (0x00200F10) and start to initialize the external DRAM. 
4. The preloader locates LK in the Flash. 
5. Load LK from Flash to external DRAM for operation. 
6. LK initializes itself. 
7. Decompress boot.image/vendor_boot.img into kernel and ramdisk by LK, and then load them from Flash into DRAM. 
8. Initialize kernel by LK. 
9. Execute part of the kernel program (fork out the init process after the kernel initialization is completed). 
10. Boot up the init program in the ramdisk, enter the user space for initialization, and then the init process forks out the 
Zygote process until the entire Android startup is completed. 
 
 
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
MT8676 Android System 
User Manual 
Confidential B 
1.3.2.4 Kernel 
 Brief Introduction 
The kernel is the core component of the operating system. It is responsible for managing computer hardware and software 
resources and providing basic services for the operating system and applications. The kernel is the first load of the 
operating system and runs in DRAM as the core of the entire operating system. It controls all system resources, such as 
CPU, Memory, input/output, file system, etc. The kernel provides underlying services and interfaces for applications to call 
and to use. 
 
 Main Work 
Kernel assembly phase (started by ENTRY(_stext)): 
 
1. Set to SVC mode and turn off all interrupts. 
2. Get CPU ID. 
3. Verify dtb. 
4. Create page table entries. 
5. Configure the r13 register which is set for jumping to phase C after opening the MMU. 
6. Enable MMU. 
7. Jump to start_kernel and enter phase C. 
 
 
Kernel C phase (started by kernel_init) 
 
Complete the initialization work related to the hardware platform and execute the init process after the initialization is 
completed. 
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
 
Figure 1-5. Main work of kernel C phase 
 
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
MT8676 Android System 
User Manual 
Confidential B 
1.3.2.5 Init Process 
 Brief Introduction 
The init process is the first process in user space in the Linux OS, which PID is 1. The init process will start after the kernel 
started and will read the relevant configuration in init.rc to start other related processes. 
 
 Main Work 
• Analyze the init.rc script file and execute the corresponding function according to the file content. 
• When some critical process dies, init process will restart the died process.   
• Provide property services of Android OS. 
 
 Code Introduction 
The entry of Init is located in /system/core/init/init.c. 
 
1.3.2.6 Zygote 
 Brief Introduction 
When an Android device boots up, the system first starts the Zygote process. The Zygote process will preload and initialize 
some commonly used system libraries and resource files, which can speed up the startup of other applications because 
these resources have been loaded into DRAM. 
 
 Main Work 
The following five tasks are completed in the main function of the ZygoteInit class. 
 
1. Register a listening socket for the Zygote process using registerZygoteSocket(). 
2. The function preload() loads commonly used Java classes and system resources. 
3. The function startSystemServer() is used to initiate the SystemServer process. 
4. The function runSelectLoopMode()enters the loop monitoring mode. 
5. Once process exits, the socket listener should be closed using the closeServerSocket() function. 
 
 Code Introduction 
The entry of Zygote is located in kernel/sched/fork.c. 
 
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
MT8676 Android System 
User Manual 
Confidential B 
1.3.2.7 SystemServer 
 Brief Introduction 
The SystemServer is created by the main function of ZogoteInit, it will execute the main function of SystemServer after 
calling caller.run. 
 
 Main Work 
• The SystemServer manages many core services and functions of the Android OS, such as ActivityManager Service, 
Content Provider Service, Package Manager Service, Notification Manager Service and more. They provide essential 
infrastructure for applications to run and interact. 
• Managing system resources: The System Server manages system resources through the Resource Manager, which 
includes memory, processes, threads, file systems, networks and more. The Resource Manager can allocate and 
reclaim system resources to ensure system stability and security. 
• Providing system-level settings and configurations: The System Server provides system--level settings and 
configurations such as network settings, volume settings, time settings, language settings. These settings are at the 
system level and impact the overall performance and operation. 
 
 Code Introduction 
The entry of SystemServer is located at 
frameworks/base/services/java/com/android/server/SystemServer.java. 
 
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
MT8676 Android System 
User Manual 
Confidential B 
 Shutdown 
1.3.3.1 Shutdown Flow Chart 
ShutdownThread.shu
tdown()
Check if monkey is 
running
Check if shutdown is  
ongoing
Create power off 
dialog
beginShutdownSequ
ence()
Create Progress 
dialog
Check the thread 
status
Start the thread for 
shutdown
Runnable
Power.shutdown
Status != 
Thread.State.NEW
&& isAlive
Power.shutdown
 
Figure 1-6. MT8676 shutdown flow 
 
• Invoke ShutdownThread.shutdown(). 
1. Obtain user shutdown behavior. 
2. Register shutdown broadcast. 
3. Create a shutdown dialog. 
4. Execute a series of shutdown procedures. 
 
• When the power off dialog appears, if the shutdown is confirmed by the user, beginShutdownSequence will be 
initiated to start the shutdown process. 
1. Display the shutdown progress dialog box. 
2. Start the ShutdownThread and execute the run method. 
 
1.3.3.2 ShutdownThread Main Function 
1. Broadcast an orderly shutdown sequence. 
2. Measure the time it takes to close certain projects. 
3. Disable the ActivityManager. 
4. PackageManager is to be closed. 
5. Turn off the radios. 
6. Complete the shutdown of the SystemServer. 
7. Initialize and determine whether to shut down or restart. 
 
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
MT8676 Android System 
User Manual 
Confidential B 
If the IPO function is available, the device will enter IPO and then enter sleep mode. 
 
 Android Bootup Log Analysis 
[14:40:10:408] Pll init start...       //The first log entry of the program indicates that 
the program has started and entered the perloader. 
… 
[14:40:10:444] Pll init Done!! 
[14:40:10:444] #T#PLL=24 
[14:40:10:445] #T#GPIO=0 
[14:40:10:445] [RGU] rst from: kernel 
[14:40:10:445] drm_latch_en: MTK_DRM_LATCH_EN(95027EF0) 
[14:40:10:445] [RGU] STA from reg:       0x40000000      //The RGU printing can be 
monitored for any abnormal system reboots. 
[14:40:10:446] [RGU] MODE:               0x25 
[14:40:10:446] [RGU] STA:                0x40000000 
[14:40:10:446] [RGU] LENGTH:             0x1FFFE0 
[14:40:10:446] [RGU] INTERVAL:           0xFFF 
[14:40:10:447] [RGU] SWSYSRST:           0x0 
[14:40:10:447] [RGU] LATCH_CTL:          0xF21E79 
[14:40:10:447] [RGU] LATCH_CTL2:         0x0 
[14:40:10:447] [RGU] NONRST_REG:         0x0 
[14:40:10:448] [RGU] NONRST_REG2:        0x2C002000 
[14:40:10:448] [RGU] REQ_MODE:           0xFD00E3 
[14:40:10:448] [RGU] REQ_IRQ_EN:         0x7D0065 
[14:40:10:448] [RGU] DEBUG_CTL:          0x0 
[14:40:10:448] [RGU] parse g_rgu_status: 2 (0x2) 
[14:40:10:449] [RGU] Set NONRST_REG to 0x40000000 
[14:40:10:449] [RGU] mtk_wdt_mode_config mode value=34, tmp:22000034 
… 
[14:40:10:541] [PMIC]PONSTS[0xC]=0x0      //Printing the PMIC registers allows monitoring 
for any abnormal behaviors related to the PMIC. 
[14:40:10:541] [PMIC]POFFSTS[0xD]=0x400 
[14:40:10:541] [PMIC]POFFSTS2[0xF]=0x0 
[14:40:10:542] [PMIC]POFFSTS4_5[0x11]=0xFFFF 
[14:40:10:542] [PMIC]POFFSTS6[0x13]=0xF 
[14:40:10:542] [PMIC]VR_SDN_MODE0_1[0x214]=0x0 
[14:40:10:542] [PMIC]VR_SDN_MODE2_3[0x216]=0x0 
[14:40:10:543] [PMIC]VR_SDN_MODE4_5[0x218]=0x0 
[14:40:10:543] [PMIC]VR_SDN_MODE6_7[0x21A]=0x0 
[14:40:10:547] [PMIC]STS_THR_LOC[0x10]=0x0 
[14:40:10:547] [PMIC]STRUP_CON4[0xA1A]=0x0 
[14:40:10:548] [PMIC]STRUP_CON12[0xA0F]=0x1 
[14:40:10:548] [PMIC]WDTRSTB[0x139]=0x4 
[14:40:10:548] [pmic_check_rst] AP Watchdog 
… 
[14:40:12:051] [Calibration Summary] Freqency 3750       //DRAM calibration at each 
frequency point. 
[14:40:12:051] CH 0, Rank 0 
[14:40:12:051] SW Impedance        : PASS 
[14:40:12:051] 8 Phase             : FAST K 
[14:40:12:051] DUTY Scan           : FAST K 
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
MT8676 Android System 
User Manual 
Confidential B 
[14:40:12:051] ZQ Calibration      : PASS 
[14:40:12:052] Jitter Meter        : NO K 
[14:40:12:052] CBT Training        : NO K 
[14:40:12:052] Write leveling(PI)  : FAST K 
[14:40:12:052] Write leveling(DLY) : FAST K 
[14:40:12:052] DUTY CYCLE MONITOR  : FAST K 
[14:40:12:052] RX DQS gating       : FAST K 
[14:40:12:052] RX OFFC             : NO K 
[14:40:12:053] RX DQ/DQS(RDDQC)    : FAST K 
[14:40:12:053] RX DQ/DQS(RDDQC_DQM_ONLY) : FAST K 
[14:40:12:053] TX DQ/DQS           : PASS 
[14:40:12:053] RX DATLAT           : FAST K 
[14:40:12:053] RX DQ/DQS(Engine)   : FAST K 
[14:40:12:053] RX RDQS DCA         : FAST K 
[14:40:12:054] RX RDQS DCC         : FAST K 
[14:40:12:054] TX OE               : NO K 
[14:40:12:054] All Pass. 
… 
[14:40:12:892] [BLDR] Starting tool handshake.       //The USB and Flashtool USB perform a 
handshake, and if successful, the DA will be loaded to enter download mode. 
[14:40:15:971] #T#UART handshake init=1 
… 
[14:40:16:098] [PART] load "lk_a" from 0x000000003B8DB9C0 (dev) to 0x78000000 (mem) 
[SUCCESS]     //The preloader loads the relevant images into the DRAM. 
[14:40:16:098] [PART] load speed: 155765KB/s, 638016 bytes, 4ms 
[14:40:16:098] [PART] img vfy...[SEC] img auth ok 
… 
[14:40:16:418] welcome to lk     //Enter the lk BL2_EXT. 
[14:40:16:418]  
[14:40:16:418] lk variant: BL2_EXT 
… 
[14:40:19:081] Say Hello from EL2! 
[14:40:19:082]  
[14:40:19:082] MIDR: 411fd461, MPIDR: 81000000 
[14:40:19:082] CPU Core: 0! 
[14:40:19:082] GZ Platform: MTK_ARMV8 
[14:40:19:082] Memory base: 0xbe5400000, size: 0x2a00000 
[14:40:19:083] lk_init 0x38082728-0x38082ba8=1152 
[14:40:19:083] 48600000 48600000 8000 11001000 in lk_main 
[14:40:19:083] ====> GZ (0)[    0.002364]Version of GZ-CORE: GZ_CORE_hypervisor: 
3.2.0.039.U0MP1, Built: 11:53:14 Sep  6 2023 
[14:40:19:083] ====> GZ (0)[    0.003564]platform_init_mmu_mappings membase: 0xbe5400000 
[14:40:19:084] ====> GZ (0)[    0.004372]platform_init_mmu_mappings memsize: 0x2a00000 
[14:40:19:084] ====> GZ (0)[    0.005158]platform_init_mmu_mappings kernel offset: 
0x38000000 
[14:40:19:084] ====> GZ (0)[    0.006019]platform_init_mmu_mappings ram phys: 0xc1d400000 
[14:40:19:085] ====> GZ (0)[    0.006838]platform_init_mmu_mappings ram size: 2a00000 
[14:40:19:085] ====> GZ (0)[    0.007740]INIT: cpu 0, calling hook 0x3800f0f0 
(libvmm_early) at level 0x10000, flags 0x1 
[14:40:19:085]  
[14:40:19:085] welcome to lk/MP…        //Enter GZ 
… 
[14:40:20:982] welcome to lk         // Enter LK 
[14:40:20:995]  
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
MT8676 Android System 
User Manual 
Confidential B 
[14:40:20:995] lk variant: BL33 
[14:40:20:995] boot args 0x48600000 0x0 0x0 0x0 
[14:40:20:995] version: 
[14:40:20:995]         arch:     arm64 
[14:40:20:995]         platform: mediatek 
[14:40:20:995]         target:   auto8676p1_64_bsp 
[14:40:20:995]         project:  auto8676p1_64_bsp 
[14:40:20:997]         buildid:  d130cca93e_202407032103 
… 
[14:40:25:919] [PROFILE] ::: hyp_unmap2() takes 1376 ms 
[14:40:25:925] [PROFILE] ::: name: pl_t, time: 6106 ms 
[14:40:25:925] [PROFILE] ::: name: logo_t, time: 1533 ms 
[14:40:25:925] [PROFILE] ::: name: lk_t, time: 5048 ms 
[14:40:25:929] [PROFILE] ::: name: bl2_ext_t, time: 1842 ms 
[14:40:25:929] [PROFILE] ::: name: tfa_t, time: 644 ms 
[14:40:25:929] [PROFILE] ::: name: sec_os_t, time: 0 ms 
[14:40:25:929] [PROFILE] ::: name: gz_t, time: 1860 ms 
[14:40:25:934] boot_linux_fdt:543: booting linux @ 0x40000000, ramdisk @ 0x66f00000 
(31301139) dtb @ 0x47c80000 (487064) 
[14:40:25:934] boot_linux_fdt:544: lk boot mode = 0 
[14:40:25:934] boot_linux_fdt:546: lk finished --> jump to linux kernel 64Bit        //LK 
jumps to kernel 
… 
[14:40:26:122] [    0.000000][    T0] swapper: [name:setup&]Booting Linux on physical CPU 
0x0000000000 [0x411fd461] //The first line is printed when the kernel starts. 
[14:40:26:122] [    0.000000][    T0] swapper: [name:main&]Linux version 6.1.78-android14-
11-maybe-dirty (build-user@build-host) (Android (10087095, +pgo, +bolt, +lto, -mlgo, based 
on r487747c) clang version 17.0.2 (https://android.googlesource.com/toolchain/llvm-project 
d9f89f4d16663d5012e5c09495f3b30ece3d2362), LLD 17.0.2) #1 SMP PREEMPT Thu Jan  1 00:00:00 
UTC 1970 
[14:40:26:124] [    0.000000][    T0] swapper: [name:setup&]Machine model: MT8676 
[14:40:26:124] [    0.000000][    T0] swapper: [name:stackdepot&]Stack Depot is disabled 
[14:40:26:124] [    0.000000][    T0] swapper: [name:kvm&]KVM is not available. Ignoring 
kvm-arm.mode 
[14:40:26:124] [    0.000000][    T0] swapper: earlycon: [name:earlycon&]uart8250 at 
MMIO32 0x0000000011001000 (options '') 
… 
[14:40:30:574] [    3.387865][T700001] init: mtk-smi-larb 1a02c000.smi-larb25: 
[name:mtk_smi&]Succeed to get smi-comm dev for mmqos          //init load ramdisk ko 
[14:40:30:574] [    3.389412][T700075] kworker/7:1: [name:mtk_vmm_spm&][ISPDVFS] 
regulator_event_notify(): VMM regulator before disable, ver = 3 
[14:40:30:575] [    3.389412][T700075]  
[14:40:30:575] [    3.391773][T700001] init: [name:mtk_vmm_spm&][ISPDVFS] 
regulator_event_notify(): VMM regulator enable done, ver = 3 
[14:40:30:576] [    3.391773][T700001]  
[14:40:30:576] [    3.393960][T700001] init: mtk-smi-larb 1a02d000.smi-larb26: 
[name:mtk_smi&]Succeed to get smi-comm dev for mmqos 
[14:40:30:576] [    3.395507][T700075] kworker/7:1: [name:mtk_vmm_spm&][ISPDVFS] 
regulator_event_notify(): VMM regulator before disable, 
… 
[14:40:36:929] [    8.972200][T1400001] init: init 23: Parsing file 
/system/etc/init/hw/init.rc...    //init parse rc file 
[14:40:36:937] [    8.974057][T1600001] init: init 23: Added '/init.environ.rc' to import 
list 
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
MT8676 Android System 
User Manual 
Confidential B 
[14:40:36:939] [    8.974965][T1600001] init: init 23: Added 
'/system/etc/init/hw/init.usb.rc' to import list 
[14:40:36:945] [    8.976021][T1600001] init: init 23: Added '/init.mt8676.rc' to import 
list 
[14:40:36:965] [    8.976902][T1600001] init: init 23: Added 
'/vendor/etc/init/hw/init.mt8676.rc' to import list 
[14:40:36:965] [    8.978016][T1600001] init: init 23: Added 
'/system/etc/init/hw/init.usb.configfs.rc' to import list 
[14:40:36:965] [    8.979172][T1600001] init: init 23: Added 
'/system/etc/init/hw/init.zygote64.rc' to import list 
[14:40:36:975] [    8.980525][T1600001] init: init 23: Added 
'/system/etc/init/hw/init.boringssl.zygote64.rc' to import list 
[14:40:36:976] [    8.982166][T1600001] init: init 23: Parsing file /init.environ.rc... 
[14:40:36:977] [    8.983054][T1600001] init: init 5: Parsing file 
/system/etc/init/hw/init.usb.rc... 
[14:40:36:978] [    8.984895][T1600001] init: init 5: Parsing file /init.mt8676.rc... 
[14:40:36:978] [    8.985735][T1600001] init: init 5: Unable to read config file 
'/init.mt8676.rc': open() failed: No such file or directory 
… 
[14:40:42:042] [   14.402919][T1400415] modprobe: mt6338-efuse mt6338-efuse:     
[name:nvmem_mt6338_efuse&]EFUSE[58]=0x83                                        //load 
vendor ko 
[14:40:42:042] [   14.404272][T1400415] modprobe: mt6338-sound mt6338-sound: 
[name:snd_soc_mt6338&]mt6338_codec_init_reg() 
[14:40:42:042] [   14.417048][T1400415] modprobe: snd-scp-ultra snd-scp-ultra: 
[name:snd_soc_mtk_scp_ultra&]mtk_scp_ultra_pcm_new() 
[14:40:42:043] [   14.418416][T1400415] modprobe: snd-scp-ultra snd-scp-ultra: 
[name:snd_soc_mtk_scp_ultra&]mtk_scp_ultra_reserved_dram_init(), sce reserve mem 
pa=0x8f835700, va=0xffffffc018835700, size=0x1a000 
[14:40:42:043] [   14.420562][T1400415] modprobe: snd-scp-ultra snd-scp-ultra: 
[name:snd_soc_mtk_scp_ultra&]mtk_scp_ultra_reserved_dram_init(), dump pa=0x8f835700, 
va=0xffffffc018835700, size=0x1a000 
… 
[14:40:47:477] [   20.251333][T1100322] init: init 29: [20203][1012]Wait for property 
'vendor.all.modules.ready=1' took 6885ms 
[14:40:47:477] [   20.252841][T1700324] init: [name:bootprof&]BOOTPROF:     
20252.839124:modprobe: Load_Module_DONE     //ko load complete 
[14:40:47:477] [   20.254094][T1700001] init: init 25: [20211][5676]Lastest epoll wait 
tooks 5676ms 
[14:40:47:485] [   20.255294][T1700001] init: init 25: [20213][0]Command 'write 
/proc/sys/vm/watermark_boost_factor 0' action=post-fs-data 
(/vendor/etc/init/hw/init.mt8676.rc:178) took 0ms and failed: Unable to write to file 
'/proc/sys/vm/watermark_boost_factor': open() failed: Permission denied 
[14:40:47:488] [   20.258432][T1700001] init: init 25: [20213][0]Service 'insmod_sh' (pid 
387) exited with status 0 oneshot service took 10.190000 seconds in background 
[14:40:47:488] [   20.260124][T1700001] init: init 25: [20213][0]Sending signal 9 to 
service 'insmod_sh' (pid 387) process group... 
… 
[14:40:48:412] [   21.214884][T1500324] init: [name:bootprof&]BOOTPROF:     
21214.882203:INIT:zygote-start    //start zygote process 
[14:40:48:413] [   21.216010][T1500001] init: init 25: [21174][0]processing action 
(firmware_mounts_complete) from (/system/etc/init/hw/init.rc:521) 
[14:40:48:413] [   21.217542][T1500001] init: init 25: [21175][0]processing action (early-
boot) from (/vendor/etc/init/hw/init.mt8676.rc:751) 
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
MT8676 Android System 
User Manual 
Confidential B 
[14:40:48:413] [   21.219106][T1500324] init: [name:bootprof&]BOOTPROF:     
21219.105049:INIT:early-boot   //enter early boot stage,config some basic services and 
parameters. 
… 
[14:40:55:318] [   28.131865][T1700324] init: [name:bootprof&]BOOTPROF:     28131.864681: 
OFF (KO:356)    //boot complete  
 
1.4 Configuration/Customization Guideline 
 System Related Configurations 
1.4.1.1 Fastboot Configuration 
Preloader: 
vendor/mediatek/proprietary/bootable/bootloader/preloader/custom/auto8676p1_64_bsp/auto867
6p1_64_bsp.mk 
 
+ MTK_SEC_USBDL=ATTR_SUSBDL_DISABLE 
+ MTK_SEC_BOOT=ATTR_SBOOT_DISABLE 
--- 
- MTK_SEC_USBDL=ATTR_SUSBDL_ONLY_ENABLE_ON_SCHIP 
- MTK_SEC_BOOT=ATTR_SBOOT_ENABLE 
15c15 
+ MTK_SECURITY_SW_SUPPORT=no 
--- 
- MTK_SECURITY_SW_SUPPORT=yes 
58,71c58 
+ MTK_CPU_BOOST = yes 
+ MTK_REDUCE_DRAM_FREQ = yes 
+ ifeq ("$(TARGET_BUILD_VARIANT)","user") 
+       CFG_USB_TOOL_HANDSHAKE :=0 
+       CFG_LOG_LEVEL :=0 
+       CFG_LOG_STORE_SUPPORT := 0 
+       CFG_ATF_LOG_SUPPORT := 0 
+       CFG_DOE_CONFIG_ENV_SUPPORT := 0 
+ endif 
+ ifeq ("$(TARGET_BUILD_VARIANT)","userdebug") 
+       CFG_USB_TOOL_HANDSHAKE :=1 
+       CFG_LOG_LEVEL :=2 
+ endif 
 
LK2: 
vendor/mediatek/proprietary/bootable/bootloader/lk2/project/auto8676p1_64_bsp.mk 
 
27c27 
+ MTK_LCM_LIST_SUPPORT="jd9365da_wxga_dsi_vdo" 
--- 
- MTK_LCM_LIST_SUPPORT="max96789_dsi_vdo jd9365da_wxga_dsi_vdo" 
30c30 
+ MTK_SECURITY_SW_SUPPORT := no 
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
MT8676 Android System 
User Manual 
Confidential B 
--- 
- MTK_SECURITY_SW_SUPPORT := yes 
34,44d33 
+ MTK_DISABLE_GZ := yes 
+ MTK_LK_NO_DISPLAY := yes 
+ ifeq ("$(TARGET_BUILD_VARIANT)","user") 
+ MTK_LK_LOG_DISABLE := yes 
+ LK_WITH_SMP :=yes 
+ MTK_DM_VERITY_OFF := yes 
+ override DEBUG := 0 
+ endif 
+ ifeq ("$(TARGET_BUILD_VARIANT)","userdebug") 
+ override DEBUG := 1 
+ endif 
 
TF2.8: 
vendor/mediatek/proprietary/trustzone/tf-a-
2.8/plat/mediatek/project/auto8676p1_64_bsp/platform.mk 
 
MTK_SOC := mt6897 
+CONFIG_MTK_GZ := n 
+CONFIG_MTK_GZ_SECIO := n 
+CONFIG_MTK_GZ_SMC := n 
+LOG_LEVEL := 0 
include plat/mediatek/$(MTK_SOC)/platform_makefile.mk 
 
Kernel Config: 
kernel/kernel_device_modules-6.1/arch/arm64/configs/auto8676p1_64_defconfig 
 
You need to set configurations as below: 
CONFIG_ARM_FFA_TRANSPORT=n 
CONFIG_MTK_GZ_KREE=n 
CONFIG_MTK_DISABLE_GZ=y 
CONFIG_MTK_DRAM_LOG_STORE=n 
CONFIG_MTK_SENSOR_FAST_PROBE=y 
# CONFIG_MTK_DRAM_LOG_STORE_ADDR is not set 
# CONFIG_MTK_DRAM_LOG_STORE_SIZE is not set 
# CONFIG_MTK_SECURITY_SW_SUPPORT is not set 
 
Ko Table: 
device/mediateksample/auto8676p1_64_bsp/ko_order_table.csv 
 
According to the following method, delete or add ko. 
delete,mkp.ko//Delete the row corresponding to mkp.ko in ko_order_table.csv. 
delete,ffa_v10.ko 
delete,cmdq-sec-drv.ko 
delete,mcDrvModule-ffa.ko 
delete,gz_trusty_mod.ko 
delete,gz_ipc_mod.ko 
delete,gz_irq_mod.ko 
delete,gz_virtio_mod.ko 
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
MT8676 Android System 
User Manual 
Confidential B 
delete,gz_tz_system.ko 
delete,gz_main_mod.ko 
delete,gz_log_mod.ko 
delete,tmem_ffa.ko 
delete,mtk_sec_heap.ko 
delete,sapu.ko 
delete,log_store.ko 
delete,sec.ko 
delete,phy-mtk-pcie.ko 
delete,pcie-mediatek-gen3.ko 
add,teeperf.ko,isee-ffa.ko,mcDrvModule.ko,/../kernel_device_modules-
6.1/drivers/tee/gud/600/MobiCoreDriver/mcDrvModule.ko,ramdisk,Y,Y,user/userdebug/eng 
// Insert mcDrvModule.ko after teeperf.ko and before isee-ffa.ko. 
add,,cfg80211.ko,phy-mtk-pcie.ko,/../kernel_device_modules-6.1/drivers/phy/mediatek/phy-
mtk-pcie.ko,vendor,Y,Y,user/userdebug/eng 
//Insert phy-mtk-pcie.ko before cfg80211.ko. 
add,,cfg80211.ko,pcie-mediatek-gen3.ko,/../kernel_device_modules-
6.1/drivers/pci/controller/pcie-mediatek-gen3.ko,vendor,Y,Y,user/userdebug/eng 
//Insert the pcie-MediaTek-gen3.ko module before the cfg80211.ko module. 
 
1.5 Frequently Asked Questions/Troubleshooting 
 Logs Provision 
Table 1-2. System issue log map (M: must, O: optional, C: conditional, X: no need) 
Issue Type Mobile Log UART Log db Symbol Thermal Log Top Ftrace 
Bootup M M O O X X X 
NE M X M M X X X 
KE M C M M X X X 
SWT M C M C X X X 
ANR M X M O C C C 
JE M X M X X X X 
IPO M M O O X X X 
Performance M M O X M M C 
               
 MT8676 DB Analysis Guide 
1.5.2.1 AEE 
• Android Exception Engine (AEE), the mechanism for capturing Log developed by MediaTek itself. 
• The mechanism for capturing abnormal information when the system encounters an exception is called AEE. Abnormal 
information occurring before and after the exception can be captured in the form of log for a period of time and then 
packaged and compressed into a DB file, which is saved to the corresponding location on UFS. 
 
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
MT8676 Android System 
User Manual 
Confidential B 
1.5.2.2 DB Storage Path 
The AEE database storage path: 
/data/aee_exp 
/data/vendor/aee_exp 
 
1.5.2.3 DB Category 
 
Figure 1-7. DB category 
 
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
MT8676 Android System 
User Manual 
Confidential B 
1.5.2.4 Exception Classification 
 
Figure 1-8. Exception classification 
 
1.5.2.5 GAT Analyzes DB 
1. Open the GAT tool. 
2. Select toolbar Window→Open DBviewer. 
 
Java Exception 
Native Exception 
Kernel Exception 
 
layer 
layer 
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
MT8676 Android System 
User Manual 
Confidential B 
 
Figure 1-9. GAT tool UI 
 
3. DBViewer UI is shown as Figure 1-10. 
 
 
Figure 1-10. DBViewer UI 
 
4. Select DB File as db.fatal.00.KE.dbg. After clicking Start, you can see the parsed DB files after the parsing is 
completed. The corresponding folder can be found in the same path as the dbg file. 
 
 
Figure 1-11. Generated file after parsing 
 
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
MT8676 Android System 
User Manual 
Confidential B 
1.5.2.6 KE Example 
• KE: Kernel Exception  
• KE DB file: db.fatal.00.KE. When a KE occurs, a DB file is typically generated in /data/vendor/aee_exp. 
• Decompressing db.fatal.00.KE.dbg to obtain db.fatal.00.KE.DBG.DEC. 
• Unpack the content of the DB and pay particular attention to _exp_main.txt. The SYS_KERNEL_LOG contains the most 
information, including some kernel logs before the occurrence of an exception and “SYS_LAST_KMSG” logs the final 
messages before a reboot. 
 
 
Figure 1-12. Files generated after decompression 
 
• From _exp_main.txt you can see this issue is caused by the USBNET module. 
 
 
Figure 1-13. USBNET causeing KE 
 
• For the KE issue, some debug information that needs to be provided is shown in Table 1-3: 
 
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
MT8676 Android System 
User Manual 
Confidential B 
Table 1-3. KE log map 
Issue Type Mobile Log UART Log db Symbol Thermal Log Top Ftrace 
KE M C M M X X X 
vmlinux Symbol path: out/target/product/$proj/obj/KERNEL_OBJ/vmlinux 
 
1.5.2.7 SWT Example 
SWT: Software Watchdog Timeout 
SWT DB file: db.fatal.01.SWT 
Decompress db.fatal.01.SWT to obtain db.fatal.01.SWT.dbg.DEC. 
Unpack the content of the DB and pay particular attention to _exp_main.txt. 
 
 
Figure 1-14. SWT DB files generated after decompression 
 
• From exp_main.txt you can see an exception occurs in system_server, which leads to SWT.  
 
 
Figure 1-15. system_server causing SWT 
 
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
MT8676 Android System 
User Manual 
Confidential B 
1.5.2.8 NE Example 
• NE: Native Exception 
• NE DB: db.fatal.NE 
• Decompress db.fatal.00.NE.dbg to obtain db.fatal.00.NE.dbg.DEC. 
• Unpack the content of the DB and pay particular attention to _exp_main.txt. 
 
 
Figure 1-16. NE DB file gen 
 
• From exp_main.txt you can see systemui exception causes NE. 
 
Figure 1-17. Systemui causing NE 
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
MT8676 Android System 
User Manual 
Confidential B 
• For NE issue, the following logs should be provided: 
 
Table 1-4. NE log map 
Issue Type Mobile Log UART Log db Symbol Thermal Log Top Ftrace 
NE M X M M X X X 
NE Symbol Path: out/target/product/$proj/symbols 
 
1.5.2.9 JE Example 
• JE: Java Exception 
• JE DB: db.fatal.00.JE 
• Decompress db.fatal.00.JE.dbg to obtain db.fatal.00.JE.dbg.DEC. 
• Unpack the content of the DB and pay particular attention to _exp_main.txt. 
 
 
Figure 1-18. JE DB file generated after decompression 
 
• From exp_main.txt you can see animation exception causes system_server crash and leads to JE. 
 
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
MT8676 Android System 
User Manual 
Confidential B 
  
Figure 1-19. Animation causing system_server crash and leading to JE 
 
1.5.2.10 EE Example 
• EE: External Exception, such as modem, connectivity exception. 
• EE DB: db.02.EE  
• Decompress db.02.EE.dbg to obtain db.02.EE.dbg.DEC. 
• Unpack the content of the DB and pay particular attention to _exp_main.txt. 
• MD encountered an assert, as shown in Figure 1-20. 
 
 
Figure 1-20. MD ASSERT triggered 
 
1.5.2.11 ANR Example 
• ANR: Application Not Response. A certain App’s main thread did not finish a certain task within a period of time. 
• ANR DB: db.00.ANR 
• Decompress db.00.ANR.dbg to obtain db.00.ANR.dbg.DEC. 
• Unpack the content of the DB and pay particular attention to _exp_main.txt and SWT_JBT_TRACES. 
• From _exp_main.txt you can see ANR occurs in system UI. 
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
MT8676 Android System 
User Manual 
Confidential B 
 
Figure 1-21. ANR occurs in system UI 
 
• For ANR issue, the following debug log should be provided. 
 
Table 1-5. ANR issue log map 
Issue Type Mobile Log UART Log db Symbol Thermal Log Top Ftrace 
ANR M X M O C C C 
 
• How to analyze ANR issue: 
The ANR can be quickly located, and essential information can be obtained by checking the androidlog. A helpful tip is 
to search for “ANR ” with an extra space to quickly find the location and filter out some distracting log information. 
 
 
Figure 1-22. How to quickly locate ANR issues through logs 
 
When an Application Not Responding (ANR) occurs, the corresponding application will receive a SIGQUIT signal for 
abnormal termination. Subsequently, the Dalvik virtual machine will automatically generate a trace.txt file in the 
/data/anr/ directory. This file records the execution status of various threads in the system at the time of ANR occurrence. 
 
 Memory Leak 
1.5.3.1 Brief Introduction 
The key information for determining whether there is a memory leak is whether the memory usage keeps increasing. 
 
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
MT8676 Android System 
User Manual 
Confidential B 
The cause of a Memory Leak is when a piece of allocated memory cannot be referenced or released, the allocated memory 
block becomes like an orphaned memory, unable to be used by the system again. 
 
1.5.3.2 Query Memory Command 
• dumpsys meminfo: View the detailed memory distribution. 
• cat /proc/meminfo: View the total memory size. 
 
By using a command or a batch script, memory information can be continuously dumped in the background while 
duplicating phenomenon. 
 
1.5.3.3 Kernel Memory Leak 
Command: cat /proc/meminfo 
 
Figure 1-23. cat /proc/meminfo log 
 
• If the value of “sunreclaim” is significantly large and continues to increase, it can be inferred that a kernel Memory 
Leak has occurred, as shown in Figure 1-23. 
• If an Out of Memory (OOM) event occurs in the kernel log, this portion of memory will also be dumped. If a significant 
and sustained increase in “sunreclaim” is observed, it can generally be inferred that there is a kernel Memory Leak, as 
shown in Figure 1-24. 
 
 
Figure 1-24. Kernel memory leak log 
 
 WDT Brief Introduction 
The WDT stands for watchdog timer. It is a watchdog module, which essentially is a counter that can be reset within a 
certain period of time. When the watchdog is activated, the counter initiates automatic counting. After a certain period of 
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
MT8676 Android System 
User Manual 
Confidential B 
time, if the count is not reset, and when the counter reaches a specified value, it will emit a reset signal. Many devices, 
including the Central Processing Unit (CPU), receive this signal and undergo a reset or restart (commonly known as “being 
bitten by the dog”). In order to ensure that the watchdog does not issue a reset signal, it is necessary for the watchdog 
counter to be cleared (commonly known as “feeding the dog”) within the allowed time interval, causing the counter to 
reset. If the system operates normally and ensures timely “feeding of the dog”, then all is well. Once a program 
malfunctions and freezes without “feeding the dog”, the system is reset by being “bitten”. 
 
1.5.4.1 SWT Brief Introduction 
The SystemServer process is a core process in Android, providing essential services for running apps. If some core service 
and key threads get stuck in SystemServer, it will lead to corresponding functional abnormalities. For example, if the 
platform hangs, the input does not respond, the App cannot be started, and other abnormal situations will occur. 
If there is no mechanism to reset these services, the customer experience will be seriously affected. 
Therefore, it is necessary to give the system a chance to automatically reset when the core services and key threads are 
stuck. Therefore, Google introduced the SystemServer watchdog mechanism. This mechanism monitors whether core 
services and core threads are stuck. 
 
1.5.4.2 HWT Brief Introduction 
The WDT phase 1 timeout will trigger FIQ. At this time, the system receives the FIQ and processes it. Finally, it calls BUG() 
to go through the normal kernel exception process. The generated DB type is Hardware Watchdog Timeout (HWT). 
 
 Performance Mode 
1.5.5.1 Brief Introduction 
Performance mode is a configuration option that improves system performance on devices such as mobile devices, 
laptops, and desktops. In performance mode, the device prioritizes higher CPU frequency, larger memory cache, higher 
screen refresh rate, higher power consumption to provide better system performance and responsiveness. This mode is 
usually used when high performance is required. 
 
1.5.5.2 Performance Mode Setting  
For different ICs, the node paths may be different, but the setting method is the same. 
CPU: 
ls /sys/devices/system/cpu/cpufreq/  //show how many clusters this IC has 
echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor 
echo performance > /sys/devices/system/cpu/cpufreq/policy4/scaling_governor 
echo performance > /sys/devices/system/cpu/cpufreq/policy7/scaling_governor 
or: 
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
MT8676 Android System 
User Manual 
Confidential B 
adb shell "echo 0 1900000 1900000 > /proc/cpudvfs/cpufreq_debug" 
adb shell "echo 4 2800000 2800000 > /proc/cpudvfs/cpufreq_debug" 
adb shell "echo 7 2900000 2900000 > /proc/cpudvfs/cpufreq_debug" 
first number (1900000) means floor and second number means ceiling. 
 
GPU Set: 
adb shell "echo 0 > /proc/gpufreqv2/fix_target_opp_index" 
 
GPU Query: 
adb shell "cat /proc/gpufreqv2/gpufreq_status" 
 
DDR: 
Set DDR frequency. 
adb shell "echo 0 > /sys/kernel/helio-dvfsrc/dvfsrc_force_vcore_dvfs_opp" 
 
Check DDR frequency. 
adb shell "cat /sys/kernel/helio-dvfsrc/dvfsrc_dump | grep bps" 
 
Thermal disable: 
adb shell "thermal_intf apply disable_throttling.conf" 
 
1.5.5.3  Performance Mode Auto Started 
Perform the following modification in device/mediatek/mtxx/init.mtxxx.rc: 
# switch to sched-dvfs 
    write /sys/devices/system/cpu/cpufreq/policy0/scaling_governor "schedutil" 
    write /sys/devices/system/cpu/cpufreq/policy4/scaling_governor "schedutil" 
    write /sys/class/net/p2p0/queues/rx-0/rps_cpus "fe" 
    write /sys/class/net/p2p0/queues/rx-1/rps_cpus "fe" 
    write /sys/class/net/p2p0/queues/rx-2/rps_cpus "fe" 
    write /sys/class/net/p2p0/queues/rx-3/rps_cpus "fe" 
    # stop bootprof 
    write /proc/bootprof 0 
 
Modify these two lines: 
write /sys/devices/system/cpu/cpufreq/policy0/scaling_governor "schedutil" 
write /sys/devices/system/cpu/cpufreq/policy4/scaling_governor "schedutil" 
  
to: 
    write /sys/devices/system/cpu/cpufreq/policy0/scaling_governor "performance" 
    write /sys/devices/system/cpu/cpufreq/policy4/scaling_governor "performance" 
 
 CPU Hotplug 
Turn on/off CPU by this command as below: 
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
MT8676 Android System 
User Manual 
Confidential B 
adb shell "echo 1 > /sys/devices/system/cpu/cpu1/online"  
adb shell "echo 1 > /sys/devices/system/cpu/cpu2/online"  
adb shell "echo 1 > /sys/devices/system/cpu/cpu3/online" 
echo 1 will turn ON, echo 0 will turn OFF. 
 
 Systrace Capture 
1. Use the adb command to capture trace 10s; 10s means capturing for 10s, and the maximum duration is 20s. 
adb shell perfetto -o /data/misc/perfetto-traces/trace -t 10s sched freq idle am wm gfx 
view 
 
2. Use script to capture ftrace. 
01-catch.bat   CPU sched event and workqueue event can be captured. 
3. Use Google trace tool after Android Q. 
Step1 command: adb shell am start com.android.traceur/com.android.traceur.MainActivity 
Step2: Then set the CPU parameters to the maximum and click record trace to start recording the abnormal state. 
After a period of time, close it and capture the trace. 
Trace storage path:/data/local/traces 
4. The trace shows whether the process has entered the queue, whether it has been executed, and which CPU it has 
been assigned to. If the workqueue is not tied to a core, it can only rely on the system to schedule processes according 
to loading. The process may run on any CPU. 
 
 System Reference FAQ 
Memory leak topic: https://online.mediatek.com/apps/quickstart/QS00086 
Memory corruption topic: https://online.mediatek.com/apps/quickstart/QS00090 
Hang issue fast analyze: http://online.mediatek.com/QuickStart/QS00044 
Memory Related: http://online.mediatek.com/QuickStart/QS00227 
Performance debug guide: https://online.mediatek.com/apps/quickstart/QS00288 
Advanced Android native exception arch: http://online.mediatek.com/QuickStart/QS00038 
Advanced HWT arch: http://online.mediatek.com/QuickStart/QS00067 
Hang Detect fast analyze: https://online.mediatek.com/apps/quickstart/QS00076 
Advance Linux kernel exception arch: http://online.mediatek.com/QuickStart/QS00073 
NE/KE training course: https://online.mediatek.com/apps/quickstart/QS00068 
NE/KE analyze guide: https://online.mediatek.com/apps/quickstart/QS00089 
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
MT8676 Android System 
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
# SRC0203 MT8676_Android_Thermal_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Thermal_User_Manual_ V1.0.pdf

SHA-256：4a5404071a658bc325d8308b1a2ff266ad5f09d7ac63dc0e11a4db5ce6259d6d

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0203.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Android Thermal 
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
MT8676 Android Thermal  
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Zhaoqing Jiu Official release 
 
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
MT8676 Android Thermal  
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 Thermal ····································································································································································· 4 
1.1 Overview ·································································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
1.2.1.1 Thermal HAL ··································································································································· 5 
1.3 Configuration/Customization Guideline ··················································································································· 5 
 Thermal Policy ··············································································································································· 5 
1.3.1.1 Thermal Policy Commands·············································································································· 6 
1.3.1.2 Thermal Policy Format ···················································································································· 6 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 9 
Exhibit 1 Terms and Conditions ········································································································································ 10 
 
 
List of Figures 
Figure 1-1. Thermal 2.0 software architecture··························································································································· 4 
Figure 1-2. Thermal HAL ····························································································································································· 5 
 
List of Tables 
Table 1-1. Available thermal policies on device (/vendor/etc/thermal/) ··················································································· 5 
  
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
MT8676 Android Thermal  
User Manual 
Confidential B 
1 Thermal 
1.1 Overview 
Thermal management on device has two main goals:  
• Controls component temperature to avoid being damaged by heat 
• Controls the temperature of the whole product for human safety and meet safety regulation 
 
Heat in the device is accumulated from high power of ICs. High power is side effect of high clock speed, voltage, and 
performance. 
The approach to control temperature from thermal management is to control power dissipation and consumption. Power 
dissipation control  can be achieved by adding various thermal solutions such as TIM, copper foil, tube, etc to efficiently 
spread the heat to the whole product and to the air or contact surface. Power consumption control can be achieved by 
reducing/limiting power consumption based on temperature which is the focus of this document. 
 
1.2 Architecture/Process Overview 
 
Figure 1-1. Thermal 2.0 software architecture 
 
Thermal_core is a native Linux application. Its main function is to parse a thermal policy of the .conf format. 
CPU/GPU/APU will each perform thermal throttling based on the target Tj set by thermal_core and the monitored 
temperature. 
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
MT8676 Android Thermal  
User Manual 
Confidential B 
1.2.1.1 Thermal HAL 
 
Figure 1-2. Thermal HAL 
 
• A native layer service that offers thermal info API for application layer or other native service 
• Get thermal zone temperature via thermal sysfs node 
• Some applications or modules need to get thermal information, ex: cpu/gpu/tskin temperatures, cpu usage, cooling 
device list 
• Google defines some HAL interfaces that chip vendors must implement, such as temperature query or thermal status 
change notification 
 
1.3 Configuration/Customization Guideline 
 Thermal Policy 
• Policy path in codebase 
vendor/mediatek/proprietary/external/thermal_core_lib/mt6897/ 
• Policy Template 
vendor/mediatek/proprietary/external/thermal_core_lib/thermal_policy_template.conf 
• Supports encrypted format 
 
Table 1-1. Available thermal policies on device (/vendor/etc/thermal/) 
Thermal policy Permanent? Encrypted? Description 
thermal.conf Yes Yes Default thermal policy 
disable_thermal.conf Yes Yes Disable thermal throttling and thermal protection 
disable_thermal_temp.conf No Yes Same as the above, except it need to re-apply after device 
rebooted. 
disable_throttling.conf No Yes Disable thermal throttling 
disable_skin_control.conf No Yes Disable MTK skin control close loop (always keep 
Target Tj to 95’C) 
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
MT8676 Android Thermal  
User Manual 
Confidential B 
Thermal policy Permanent? Encrypted? Description 
Thermal_policy_XX.conf 
(XX = 00~19 except 00, 02, 
08) 
On demand Yes Can add your own policy setting and switch via power HAL 
thermal_policy_08.conf No Yes Thermal policy for benchmark 
 
1.3.1.1 Thermal Policy Commands 
• Apply a thermal policy 
adb shell "thermal_intf apply [policy_name]" 
E.g. adb shell "thermal_intf apply disable_throttling.conf" 
• Check the current thermal policy 
adb shell cat /data/vendor/thermal/.current_tp 
• Check the current permanent policy 
adb shell cat /data/vendor/thermal/.permanent_tp 
1.3.1.2 Thermal Policy Format 
• Permanent policy 
 
 
• Linux thermal framework (LTF) 
–  “policy”: Support power_allocator and step_wise. 
 
 
• Disable LTF throttling 
 
 
• Disable LTF shutdown cooler and LVTS thermal reboot
 
 
• Closed loop Tskin control 
– trip_pcb: PCB temperature to enable closed loop. 
– target_tpcb: Target PCB temperature for closed loop. 
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
MT8676 Android Thermal  
User Manual 
Confidential B 
 
 
• Backlight cooler 
–  “reduce-brightness”: Reduce brightness xx %. 
 
 
• CPU frequency table mapping 
–  “cluster”: CPU cluster id. 
 
 
• CPU core isolation table mapping 
–  “CPU”: CPU core to be isolated. 
 
 
• GPU frequency table mapping 
 
 
• Update thermal HAL severity levels 
–  Support only SKIN type 
–  “level”: level can only be severe, critical, emergency, shutdown. 
 
• Fan Cooler (in dts file) 
–  “pwm-ch”:  pwm to control fan. 
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
MT8676 Android Thermal  
User Manual 
Confidential B 
 
– Bind to thermal_zone. 
 
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
MT8676 Android Thermal  
User Manual 
Confidential B 
1.4 Frequently Asked Questions/Troubleshooting 
Turn on more thermal_core log: 
adb shell "/vendor/bin/thermal_intf debug_log 1" 
 
How to decrypt or encrypt thermal configuration files: 
https://online.mediatek.com/apps/faq/detail?list=HW&faqid=FAQ27718 
 
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
MT8676 Android Thermal  
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
# SRC0204 MT8676_Android_UART_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_UART_User_Manual_V1.1.pdf

SHA-256：fe255878b698d185a5327ff9aec9659c436e8dd83ca2e05402948c443f1682c9

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0204.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2025-03-12
MT8676 Android UART 
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
MT8676 Android UART 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Liliang Chen Official release 
1.1 2025-03-12 Liliang Chen Modifed Section 1.3.4 Add GPIO Setting 
 
  
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
MT8676 Android UART 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 UART·········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Introduction ·················································································································································· 4 
 Abbreviation·················································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
 UART Introduction ········································································································································ 4 
 MT8676 UART Feature ·································································································································· 5 
1.3 Configuration/Customization Guideline ··················································································································· 6 
 Linux Build Configuration ······························································································································ 6 
 Add UART DTS Node ····································································································································· 6 
 Add APDMA DTS Node ·································································································································· 6 
 Add GPIO Setting ··········································································································································· 7 
 Testing and Debugging ·································································································································· 8 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 8 
 UART Unable to Input/Output ······················································································································ 8 
 UART Garbled Code······································································································································· 8 
 UART Does Not Print Kernel Logs ·················································································································· 9 
Exhibit 1 Terms and Conditions ········································································································································ 10 
 
 
List of Figures 
Figure 1-1. Pin connections between SoC UART and device UART ···························································································· 4 
 
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
MT8676 Android UART 
User Manual 
Confidential B 
1 UART 
1.1 Overview 
 Introduction 
This chapter introduces the hardware, software, and functions of the MT8676 UART controller. 
 
 Abbreviation 
Table 1-1. Abbreviations 
Abbreviation Explanation 
CTS Clear To Send 
DMA Direct Memory Access 
FIFO First In, First Out 
RTS Request To Send 
RX Receiver 
TX Transmitter 
UART Universal Asynchronous Receiver/Transmitter 
 
1.2 Architecture/Process Overview 
 UART Introduction 
 
UART is a serial communication interface protocol commonly used for computers or microcontrollers to communicate with 
peripheral devices. TX, RX, CTS and RTS are four important signals in UART protocol, which are used to transmit/receive 
data and control the transmission process respectively. 
 
• TX (Transmit)  
TX is the transmit port in UART , which is the port used by computers or microcontrollers to send data. TX converts the data 
to be sent into serial data frames bit by bit, and sends it out on the communication line through the serialized data level. 
When the transmission is completed, the TX state will turn to low level. 
 
 
SoC 
UART  
 
TX 
RX 
CTS 
RTS 
RX 
TX 
RTS 
CTS 
Device 
UART 
 Figure 1-1. Pin connections between SoC UART and device UART 
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
MT8676 Android UART 
User Manual 
Confidential B 
 
• RX (Receive) 
RX is the receiving port in UART , which is the port used by computers or microcontrollers to receive data. RX deserializes 
the data sent by the sender and converts it into a data frame to be received. When the data is received, the RX state will 
turn high. 
 
• CTS (Clear To Send) 
CTS is an output port that transmits a status message to the sender to indicate whether the RX end is ready to receive new 
data. When and only when the CTS state is high, it means that the RX end is ready to receive data; when the CTS state is 
low, it means that the RX end is processing data, and the sender should suspend transmission. 
 
• RTS (Ready To Send) 
RTS is an input port that transmits a status message to the receiver to indicate whether the TX end is ready to send new 
data. When the TX end is ready to send data, the RTS state is low; when the TX end is not ready to send data, the RTS state 
is high, and the receiver should suspend receiving. 
 
The role of CTS and RTS is to perform handshake negotiation before data transmission to avoid the sender and receiver 
competing for the same time to transmit/receiving data, thereby ensuring the reliability and stability of data transmission. 
 
In summary, the four signals of UART , TX, RX, CTS and RTS, are the core signals in UART protocol. Their combined use can 
realize serial transmission of data and effective flow control management. 
 
Figure 1-1 shows an example of hardware connection between SoC and peripheral devices for data transmission via UART , 
where RTS and CTS are used for hardware flow control management and can be removed or retained based on the usage 
scenario. 
 
 MT8676 UART Feature 
• Provides four serial ports 
• UART0 /UART1 are 2-pin (TX, RX) UART channels. 
• UART2/UART3 is a 4-pin (TX, RX, CTS, RTS) UART channel. 
• UART3 mounts a UARTHUB, and the default mode is UARTHUB. 
• Supports M16C450 and M16550A operation modes 
• Compatible with standard software drivers 
• Transmission system: Asynchronous 
• Data length: 5 to 8 bits 
• Hardware flow control: Automatic sending and receiving control based on CTS/RTS 
• Software flow control: Use special characters Xon/Xoff for software flow control 
• Baud rate programmable from 300 bps to 3 Mbps 
• Interrupt request: Receive interrupt/send interrupt 
• Data transfer: Support DMA (send/receive) transfer 
 
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
MT8676 Android UART 
User Manual 
Confidential B 
1.3 Configuration/Customization Guideline 
 Linux Build Configuration 
Configuration items: 
• Assign MAX UART port numbers supported under Linux Kernel 
CONFIG_SERIAL_8250_NR_UARTS=4 
CONFIG_SERIAL_8250_RUNTIME_UARTS=4 
 
• Enable UART DMA support 
CONFIG_DMA_MTK_UART=y 
 
• Enable 8250 UART protocol support and MTK UART driver 
CONFIG_SERIAL_8250=y 
 
 Add UART DTS Node 
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
 
 Add APDMA DTS Node 
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
MT8676 Android UART 
User Manual 
Confidential B 
             <GIC_SPI 225 IRQ_TYPE_LEVEL_HIGH 0>, 
             <GIC_SPI 226 IRQ_TYPE_LEVEL_HIGH 0>; 
   clocks = <&pericfg_ao_clk CLK_PERAOP_DMA_BCLK>; 
   clock-names = "apdma"; 
   dma-requests = <8>; 
                         #dma-cells = <1>; 
    }; 
 
 Add GPIO Setting 
• Configure the GPIO and set it to on by default: 
&uart0 { 
    pinctrl-names = "default", “sleep“; 
    pinctrl-0 = <&uart0_pin_default>; 
pinctrl-1 = <&uart0_pin_sleep>; 
    status = "okay"; 
 }; 
 
• If not used in the OS, please set the status to off: 
&uart0 { 
    pinctrl-names = "default", “sleep“; 
    pinctrl-0 = <&uart0_pin_default>; 
pinctrl-1 = <&uart0_pin_sleep>; 
    status = "disabled"; 
 }; 
 
• Configure default/sleep pins related to UART communication in PIO nodes: 
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
MT8676 Android UART 
User Manual 
Confidential B 
            } 
 
 Testing and Debugging 
1. Set the baud rate to 921600, 8 data bits, 1 stop bit, no parity, like UART1 
stty -F /dev/ttyS1 ispeed 921600 ospeed 921600 cs8 
 
2. Get the current UART baud rate and data bit configuration information 
stty -F /dev/ttyS1 -a 
 
3. Use the following command to receive UART1 data and print it out through the console 
cat /dev/ttyS1 
 
4. Use the following command to let UART1 send a string “123” 
echo 123 > /dev/ttyS1 
 
1.4 Frequently Asked Questions/Troubleshooting 
 UART Unable to Input/Output 
1. Please check whether the dts configuration is correct according to the information provided ealier. 
2. Please use the Linux command to check whether the UART pin mode is switched to UART mode. 
– Check the status of PIN in Kernel, enter the following command: 
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
 
 UART Garbled Code  
1. Please check whether the baud rate is consistent according to the information provided above. 
2. Please check if the UART source_clk is as expected, usually source_clk is set to 26 MHz. 
 
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
MT8676 Android UART 
User Manual 
Confidential B 
 UART Does Not Print Kernel Logs 
By default, the user version image will no longer print the Kernel log after entering the shell, while the engine/user-debug 
image will continue to print the Kernel log by default. You can refer to the following method to modify it. 
• echo 1 > /proc/mtprintk: only can enable UART log after adb shell can work 
• setprop persist.uartconsole.enable 1: can enable UART log after boot 
• Enable UART logging by default for users by modifying codes 
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
MT8676 Android UART 
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
# SRC0205 MT8676_Android_USB_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_USB_User_Manual_ V1.0.pdf

SHA-256：afa3d415e857143e01ffb0397c6e3e4b2d965b4264aa160c8195de2eed9ea335

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0205.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Andriod USB 
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
MT8676 Android USB 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Zhanyong Wang Official release 
 
  
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
MT8676 Android USB 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 4 
1 MTK USB ···································································································································································· 5 
1.1 Overview ·································································································································································· 5 
1.2 MTK USB Architecture Relation Overview················································································································ 5 
1.3 MTK USB Kernel Configuration ································································································································· 6 
 MTK USB Connector Status ··························································································································· 7 
 MTK USB Kernel General USB Connector Configuration ··············································································· 8 
 MTK USB USBIF Compatibility Patch to Cherry-pick ····················································································· 8 
1.4 MT8676 USBIF Compliance Program for xHCI USB 2.0 ···························································································· 9 
 Some Background Information ····················································································································· 9 
 How to Enable xHCI USB 2.0 Toolkits? ········································································································ 10 
1.5 Parameters to Tune xHCI USB 2.0 Eye-pattern Quality ·························································································· 10 
 Tune Phy RG_USB20_VRT_VREF_SEL Parameters ······················································································· 10 
 Tune Phy RG_USB20_TERM_VREF_SEL Parameter ····················································································· 10 
 Tune PHY RG_USB20_HSTX_SRCCTRL Parameter ······················································································· 11 
 Tune PHY RG_USB20_PHY_REV Parameter································································································· 11 
1.6 How to Tune USBIF Eye-pattern Parameter in xHCI?······························································································ 12 
 How to Locate Position of hqa? ·················································································································· 12 
 Change hqa Directory as Current Work Directory ······················································································· 12 
 Some Files for Params of Eye-pattern to Tune ···························································································· 12 
 USBIF USB 2.0 Compliance Toolkit ·············································································································· 12 
 Force USB 3.1 Gen1 Compliance Mode for USB 3.0 Compliance ································································ 13 
1.7 How to Understand u2p, Index Parameters for CLI: RG* or hqa ············································································ 13 
 hqa ······························································································································································ 13 
 RG* ······························································································································································ 15 
 ·· Don't Forget to Send USB Engineer These Suitable Value of These Parameter Registers Tied in Eye-pattern 
Report·····································································································································································  16 
1.8 How to Tune Eye-pattern Parameters in Device Mode USBIF Compliance Test ····················································· 16 
 Eye-pattern Parameters Location in Device Mode ······················································································ 16 
 Eye-pattern Parameters Value in Device Mode ·························································································· 17 
 Change Eye-pattern Parameters Setting in Device Mode ··········································································· 17 
 Don't Forget to Send USB Engineer These Suitable Value of These Parameter Registers Tied in Eye-pattern 
Report  ···································································································································································· 17 
1.9 How to Understand u3p Parameter for CLI: usb3hqa for USB 3.1 Gen1 USBIF Compliance Test ··························· 18 
 usb3hqa ······················································································································································ 18 
1.9.1.1 Recommend to Use Human Easy Commands to Trigger Compliance Mode································· 18 
1.9.1.2 Force RG Enter USB 3.1 Gen1 USBIF Compliance Mode in Expert Manner ·································· 18 
1.10 xHCI USB 2.0 USBIF Compliance Test ····················································································································· 19 
 Host High-speed Signal Quality (EL_2, EL_3, EL_6, EL_7) ··········································································· 19 
 Host Controller Packet Parameter (EL_21, EL_22, EL_23, EL_25, EL_55) ···················································· 19 
 Host CHIRP Timing (EL_33, EL_34, EL_35) ·································································································· 19 
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
MT8676 Android USB 
User Manual 
Confidential B 
 Host Suspend/Resume timing (EL_39, EL_41) ···························································································· 19 
 Host Test J/K, SE0_NAK (EL_8, EL_9) ··········································································································· 19 
 Drop Test ····················································································································································· 19 
Exhibit 1 Terms and Conditions ········································································································································ 20 
 
 
List of Figures 
Figure 1-1. MT8676 MTK USB HW Diagram ······························································································································· 5 
 
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
MT8676 Android USB 
User Manual 
Confidential B 
1 MTK USB 
1.1 Overview 
Both the Host and Device can support up to USB 3.1 Gen1 (5GHz), with BC1.2 when a USB 2.0 Device is used. 
• Host xHCI supports USB 3.0 Physical Port, USB 2.0 Physical Port and up to 32 EPs. 
• Device MTU3 supports 8 TX/RX EPs with 8K SRAM, and there are 8 USB MTK Classic Accessory Channel queues. 
 
1.2 MTK USB Architecture Relation Overview 
 
Figure 1-1 shows the block diagram of MTK USB in Demo Board. 
 
 
Figure 1-1. MT8676 MTK USB HW diagram 
 
MT8676 has a unique MTK USB IP. The MTK SLT Demo Board named MT8676_P1V1_SMT2 is used to split USB 2.0 and USB 
3.1: 
• Wired Type-C Port: Plans to make it connected with Desktop, and it acts as Device for ADB debug usage. 
• Wired Type-A Port: Plans to make it support the Open USB Jack, and it acts as Host for any USB device. 
 
Anyway, we have to just keep one port wired in Type-C Jack or Type-A Jack for logical connection well, since there is not 
designed in switcher control to make one port wired in Type-C Jack or Type-A Jack for logical connection automatically. 
Keep physical connection on one port so that it could obey USBIF compliance requirement. 
 
• Type-C Port: 
USB2.0 Port is plugging in USB line wired with Desktop, make it default Device mode, and concern USB-A port without any 
USB device.  SMT1 does not support Type-C yet in SMT1 Demo board. 
 
• Type-A Port:  
USB3.1 Gen1 Port is plugging in any USB device with USB 3.0 or lower version, it fully supports the USB 3.1 Gen1 spec. The 
following CLI commands should be used to switch it to Host mode. 
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
MT8676 Android USB 
User Manual 
Confidential B 
 
Keep Power Save active. 
su  
echo lock > /sys/power/wake_lock 
 
Host mode: 
echo 2 >/sys/devices/platform/soc/11201000.usb0/mode 
 
Device mode： 
echo 3 >/sys/devices/platform/soc/11201000.usb0/mode 
 
None mode: 
echo 0 >/sys/devices/platform/soc/11201000.usb0/mode 
 
Note: 
• To recommend using these sequences to change USB Role:   …-->None-→ Host-→None---Device---None-→… 
 
1.3 MTK USB Kernel Configuration 
• Location of MTU3:  
<work project>/kernel/kernel_device_modules-6.1/drivers/usb/mtu3 
 
• The Kernel of MTU3 should be configured as: 
CONFIG_DEVICE_MODULES_USB_MTU3=m 
CONFIG_DEVICE_MODULES_USB_MTU3_DUAL_ROLE=y 
 
• Property list of MTU3:  
Note: For property that is not listed here, it is not recommended for you to change it except that you are an expert. 
– mediatek,u3p-dis-msk: each 1 bit means one port, with the LSB bit0 representing Port1, and so on. 
– enable-nanual-drd: It is seldom used since it is only applicable in some scenarios without USB role or extcon. 
– usb-role-switch: It is mainly used since it is perfect for the upstream. 
– extcon: It only can be used since the upstream prefers not to use this style. 
 
• Location of xHCI: 
<work project>/kernel/kernel_device_modules-6.1/drivers/misc/mediatek/usb_xhci  
 
• The Kernel of xHCI should be configured as: 
CONFIG_DEVICE_MODULES_USB_XHCI_MTK=m 
 
• Property list of xHCI:  
Note: For property that is not listed here, it is not recommended for you to change it except that you are an expert. 
– usb3-lpm-capable: Each 1 bit represents one port, with the LSB bit0 representing Port1, and so on. 
If the parent node is MTU3, this property is ignored. 
 
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
MT8676 Android USB 
User Manual 
Confidential B 
• Location of xSPHY:  
<work project>/kernel/kernel_device_modules-6.1/drivers/phy/mediatek 
 
• The Kernel of xSPHY should be configured as: 
CONFIG_DEVICE_MODULES_PHY_MTK_XSPHY=m 
 
• Property list of xSPHY:  
Note: For property that is not listed here, it is not recommended for you to change it except that you are an expert. 
• For the parameters of the device eye pattern: 
– mediatek,eye-src 
– mediatek,eye-vrt 
– mediatek,eye-term 
– mediatek,rev6 
 
• Regarding the host eye-pattern parameters: 
– mediatek,eye-src-host 
– mediatek,eye-vrt-hos 
– mediatek,eye-term-host 
– mediatek,rev6-host 
– mediatek,discth 
 
 MTK USB Connector Status 
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
MT8676 Android USB 
User Manual 
Confidential B 
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
  
 
 MTK USB Kernel General USB Connector Configuration 
• Location of USB CONN:  
<work project>/kernel/kernel_device_modules-6.1/drivers/misc/mediatek/extcon 
 
• The Kernel of USB CONN should be configured as: 
CONFIG_DEVICE_MODULES_USB_CONN_GPIO=m 
 
• Property list of USB CONN:  
One of id-gpio or vbus-gpio must be present, and both can also be present. 
– id-gpio: GPIO for the USB ID pin. See GPIO binding. 
– vbus-gpio: GPIO for the USB VBUS pin. 
– Wakeup source: GPIO used for wake source. 
 
 MTK USB USBIF Compatibility Patch to Cherry-pick 
These patches need to be cherry-picked to your local project. You can proceed with the process. 
The customer project manager is assigned to them. 
 
https://gerrit.mediatek.inc/c/quark/kernel_device_modules-6.1/+/8792849 
https://gerrit.mediatek.inc/c/quark/kernel_device_modules-6.1/+/8931041 
https://gerrit.mediatek.inc/c/quark/kernel_device_modules-6.1/+/8931042 
 
cd <work project>/kernel/kernel_device_modules-6.1/ 
git apply <braaa.patch> 
 
• Location of USBIF compatibility patch: 
<work project>/kernel/kernel_device_modules-6.1/drivers/misc/mediatek/usb_xhci  
<work project>/kernel/kernel_device_modules-6.1/drivers/usb/mtu3 
<work project>/kernel/kernel_device_modules-6.1/drivers/phy/mediatek 
 
• USBIF compatibility patch should be configured as: 
CONFIG_DEVICE_MODULES_USB_MTK_HQA_TEST=y 
 
Notes: 
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
MT8676 Android USB 
User Manual 
Confidential B 
• To locate the position of 'hqa' in Host mode, use the following command: find /sys/devices -name hqa -type 
f. 
• The 'lsusb' command should display the USB devices that are plugged in, helping you to confirm whether it is in host 
mode or not. 
 
 
 
1.4 MT8676 USBIF Compliance Program for xHCI USB 2.0 
 Some Background Information 
MT8676 can support 1 USB 2.0 High-Speed port, and Phy register layout information is provided. 
 
port        offset    bank 
u2 port0    0x0000    MISC 
            0x0100    FMREG 
            0x0300    U2PHY_COM 
u3 port0    0x0700    SPLLC 
            0x0800    CHIP 
            0x0900    U3PHYD 
            0x0a00    U3PHYD_BANK2 
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
 
port        offset    bank 
The MISC value for u2 port0 is 0x0000. 
            0x0100    FMREG 
            0x0300    U2PHY_COM 
u3 port0    0x0700    SPLLC 
            0x0800    CHIP 
            0x0900    U3PHYD 
            0x0a00    U3PHYD_BANK2 
            0x0b00    U3PHYA 
            0x0c00    U3PHYA_DA 
U2 port1: 0x1000 MISC 
            0x1100    FMREG 
            0x1300    U2PHY_COM 
The u3 port1 is configured with the value 0x1700 for the SPLLC. 
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
MT8676 Android USB 
User Manual 
Confidential B 
            0x1800    CHIP 
            0x1900    U3PHYD 
            0x1a00    U3PHYD_BANK2 
            0x1b00    U3PHYA 
            0x1c00    U3PHYA_DA 
The u2 port2 has an address of 0x2000 in the MISC. 
            0x2100    FMREG 
            0x2300    U2PHY_COM 
 
 How to Enable xHCI USB 2.0 Toolkits? 
CONFIG_DEVICE_MODULES_USB_MTK_HQA_TEST=y 
CONFIG_DEBUG_FS=y 
 
1.5 Parameters to Tune xHCI USB 2.0 Eye-pattern Quality 
  Tune Phy RG_USB20_VRT_VREF_SEL Parameters  
• VRT reference voltage selection 
– Register:  
 
– Bit field: 
 
 Tune Phy RG_USB20_TERM_VREF_SEL Parameter 
• HS_TX TERM reference voltage selection 
– Register:  
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
MT8676 Android USB 
User Manual 
Confidential B 
 
– Bit field: 
 
 
 Tune PHY RG_USB20_HSTX_SRCCTRL Parameter 
• High speed slew rate control 
– Register: 
              
– Bit field: 
 
 Tune PHY RG_USB20_PHY_REV Parameter 
• High speed pre-emphasis control 
– Register: 
 
– Bit field: 
31:30 RG_USB20_PHY_REV:    pre-emphasis control 
          2b'00 means no drive 
          2b'01 means 1st gear 
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
MT8676 Android USB 
User Manual 
Confidential B 
          2b'10 means 2nd gear 
          2b'11 means 3rd gear 
 
1.6 How to Tune USBIF Eye-pattern Parameter in xHCI? 
 How to Locate Position of hqa? 
su 
dmesg -n 1 
Find files named 'hqa' under the '/sys' directory. 
 
You can now view the following echo statement below. 
 
/sys/devices/platform/soc/11201000.usb0/11200000.xhci0/hqa 
/sys/devices/platform/soc/11201000.usb0/11200000.xhci0 is location of hqa. 
 
 Change hqa Directory as Current Work Directory 
cd /sys/devices/platform/soc/11201000.usb0/11200000.xhci0 
 
ls -al 
You should watch these hqa and RG* files relations below. 
 
 Some Files for Params of Eye-pattern to Tune 
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
 
 USBIF USB 2.0 Compliance Toolkit 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 hqa 
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
MT8676 Android USB 
User Manual 
Confidential B 
 Force USB 3.1 Gen1 Compliance Mode for USB 3.0 Compliance 
-rw-r--r-- 1 root root 4096 2024-03-02 09:11 usb3hqa 
 
1.7 How to Understand u2p, Index Parameters for CLI: RG* or hqa 
 hqa 
To obtain online help, type cat hqa to access a wealth of useful information. 
  
echo -n item port-id > hqa 
 
General format: USB<spec:20 or 30) Port<port-id: n> 
 
The chosen item should be one of the following statements: 
test.j: Test_J 
test.k: Test_K 
test.se0: Test_SE0_NAK 
test.packet: Test_PACKET 
test.suspend: Port Suspend 
test.resume: Port Resume 
test.enumbus: Enumerate Bus 
test.getdesc: Get Device Descriptor 
test.debug: Debug port information 
pm.u1u2: Port U1,U2 
 
Select a suitable port ID number from the options provided in the online help. 
 
USB30 Port1: 0x0A0003C0 
 
The USB30 Port1 indicates that it complies with the USB 3.1 Gen1 specification, with a port ID of 1. 
 
USB20 Port2: 0x00000E03 
USB20 Port2 PORTMSC[31,28] 4b'0000: 0x00000000 
 
The USB20 Port2 indicates that it follows the USB 2.0 specification, with a port ID of 2. 
 
PORTMSC[31,28] is debug information feedback, bitmap means TEST_J, TEST_K, TEST_SE0_NAK and TEST_PACKET for 
compliance analog test item. 
 
You have to reboot DUT to clean PORTMSC[31,28] before manipulating next MAC compliance experiment. 
 
Note:  
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
MT8676 Android USB 
User Manual 
Confidential B 
test.debug is not special for compliance design, while it is special for debug which port to expect. It is useful when you don’t understand 
mapping relation between real port and port to expect.  
 
The test item information is utilized for exporting log information through the use of printk. 
The HQA relation information can be obtained using a CLI command. 
dmesg |grep xhci 
 
Example: Plug in one USB device into the expected port, and use the following commands: 
 
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
[  612.199078] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]Product: USB DISK 3.0 
[  612.199096] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]Manufacturer: 
[  612.199111] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]SerialNumber: 0700378539191802 
[  612.199128] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]D:  Ver= 3.20 Cls=00(>ifc ) Sub=00 
Prot=00 MxPS= 9 #Cfgs=  1 
[  612.199155] sh: usb 2-1: [name:xhci_mtk_hcd_v2&]P:  Vendor=13fe ProdID=6300 Rev= 1.00 
 
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
MT8676 Android USB 
User Manual 
Confidential B 
 RG* 
Get online help by typing cat RG_USB20_TERM_VREF_SEL, then you can get many useful information. 
 
echo -n u2p index binary_format_value > RG_USB20_TERM_VREF_SEL 
 
General format: USB<spec:20 or 30> Port<u2p: n> (Phy<index: m> enable) 
 
USB20 Port2: 0x00000E03 
USB 2.0 Port 2 (Phy0: enabled): 0x11E40000 0x000004004 
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
USB20 Port2 (Phy0: enabled) means it's USB20 that follows the USB 2.0 spec, and its u2p is 2; its index is 0. 
 
The following is a Demo: 
For USB 2.0,  tune this  RG_USB20_VRT_VREF_SEL  = 3b100 less, then cat RG_USB20_VRT_VREF_SEL. 
Usage: current HQA setting check 
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
        RG_USB20_VRT_VREF_SEL  = 3b100 
 
RG_USB20_VRT_VREF_SEL usage: 
echo u2p index 3b011 > RG_USB20_VRT_VREF_SEL 
parameter: u2p: 2 
parameter: index: 0 
e.g.: echo 2 0 3b101 > RG_USB20_VRT_VREF_SEL 
port2 binding phy 0, tune 3b'010 as VRT_VREF value 
 
 
 
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
MT8676 Android USB 
User Manual 
Confidential B 
Note:  
14:12 RG_USB20_VRT_VREF_SEL 
VRT reference voltage selection (shared circuit): 000: 
700mV 001: 720mV 010: 740mV 011: 760mV 100: 
770mV 101: 780mV 110: 800mV 111: 820mV 
 
 Don't Forget to Send USB Engineer These Suitable Value of These 
Parameter Registers Tied in Eye-pattern Report 
Submit your parameters tied in eye-pattern to *.dts file of your project. 
&u2port0 { 
mediatek,eye-src-host = <0x04>; 
mediatek,eye-vrt-host = <0x04>; 
mediatek,eye-term-host = <0x07>; 
mediatek,rev6-host = <0x07>;  
status = “okay” 
} 
1.8 How to Tune Eye-pattern Parameters in Device Mode USBIF Compliance 
Test 
 
Toolkit: https://www.usb.org/document-library/xhsett 
Manual Guide: https://www.usb.org/sites/default/files/HSETT_Instruction_0_4_1.pdf 
 
 Eye-pattern Parameters Location in Device Mode 
console:/proc/mtk_usb/usb-phy0/u2_phy # ls -al 
total 0 
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
MT8676 Android USB 
User Manual 
Confidential B 
dr-xr-xr-x 8 root root 0 2024-03-28 13:20 . 
dr-xr-xr-x 4 root root 0 2024-03-28 13:20 .. 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 discth 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 intr_ofs 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 phy_rev6 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 rx_sqth 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 term_sel 
-rw-r--r-- 1 root root 0 2024-03-28 13:20 vrt_sel 
 Eye-pattern Parameters Value in Device Mode 
console:/proc/mtk_usb/usb-phy0/u2_phy # cat * 
discth = 1001 
intr_ofs = 0 
intr_val = 100011 
phy_rev6 = 01 
rx_sqth = 0010 
term_sel = 100 
vrt_sel = 010 
 
 Change Eye-pattern Parameters Setting in Device Mode 
The values should be changed to the '0' prefixed binary system format. 
For example, if discth = 1001, it means its value is in base 9. To convert it to base 10, follow the step below: 
echo 01010 > discth 
 
 Don't Forget to Send USB Engineer These Suitable Value of These 
Parameter Registers Tied in Eye-pattern Report 
Submit your parameters tied in eye-pattern to *.dts file of your project: 
&u2port0 { 
mediatek,eye-src = <0x04>; 
mediatek,eye-vrt = <0x04>; 
mediatek,eye-term = <0x07>; 
mediatek,rev6 = <0x07>;  
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
MT8676 Android USB 
User Manual 
Confidential B 
1.9 How to Understand u3p Parameter for CLI: usb3hqa for USB 3.1 Gen1 
USBIF Compliance Test 
 usb3hqa 
1.9.1.1 Recommend to Use Human Easy Commands to Trigger Compliance Mode 
Online help can be obtained by typing cat usb3hqa, which will provide a wealth of useful information. 
  
echo -n item port-id > usb3hqa 
 
General format: USB<spec:30) Port<port-id: n> 
Type the following command in the CLI: cat usb3hqa 
 
Select a suitable port ID number from the options provided in the online help. 
      USB30 Port1: 0x0A0003C0 
 
The USB30 Port1 indicates that it adheres to the USB 3.1 Gen1 specification, with a port ID of 1. 
 
PORTPLS[8,5] is debug information feedback, bitmap means U0,U1, U2 and so on, here 0x0A means “Compliance mode” 
for analog compliance testing. 
 
Note: 
• Type cli: cat usb3hqa | grep Compliance to confirm whether it is in Compliance mode. 
 
1.9.1.2 Force RG Enter USB 3.1 Gen1 USBIF Compliance Mode in Expert Manner 
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
MT8676 Android USB 
User Manual 
Confidential B 
  pi - print ippc     reg bits: offset bit_start mask 
  pp - print phy3     reg bits: offset bit_start mask 
  pu - print phy2     reg bits: offset bit_start mask 
 
Note: 
• Numbers should be HEX, except bit_star (DEC) 
echo wx 0x420 0x10340 > reg 
 
1.10 xHCI USB 2.0 USBIF Compliance Test 
 Host High-speed Signal Quality (EL_2, EL_3, EL_6, EL_7) 
CLI:  echo -n test.packet [port] > hqa 
 Host Controller Packet Parameter (EL_21, EL_22, EL_23, EL_25, EL_55) 
 CLI:  echo -n test.getdesc [port] > hqa 
 Host CHIRP Timing (EL_33, EL_34, EL_35) 
CLI:  echo –n test.enumbus [port] > hqa 
 Host Suspend/Resume timing (EL_39, EL_41) 
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

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 Android USB 
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
# SRC0206 MT8676_Android_WiFi_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_WiFi_User_Manual_V1.0.pdf

SHA-256：f1e3a5801e5da7aa11ee2b86751d2a4926c54584fe34bcbca923728c966fe780

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0206.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12 
MT8676 Android WiFi  
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
MT8676 Android WiFi 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Wenxuan Hu Official release 
 
  
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
MT8676 Android WiFi 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 WiFi ··········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
1.1.1 Introduction ·················································································································································· 4 
1.1.2 Abbreviation·················································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 5 
1.3 Configuration/Customization Guideline ··················································································································· 6 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 8 
1.4.1 WiFi Certification ·········································································································································· 9 
1.4.2 Logs for WiFi Debug ······································································································································ 9 
1.4.3 Scan ····························································································································································· 10 
1.4.4 STA Connect ················································································································································ 11 
1.4.5 Throughput ················································································································································· 12 
1.4.6 MT6637 Chip Reset ····································································································································· 12 
Exhibit 1 Terms and Conditions ········································································································································ 15 
 
 
List of Figures 
Figure 1-1. WiFi architecture ······················································································································································ 5 
Figure 1-2. WiFi certification steps ············································································································································· 9 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 4 
Table 1-2. MTK WiFi module name ············································································································································ 4 
Table 1-3. Coredump file path ·················································································································································· 13 
 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
1 WiFi 
1.1 Overview 
1.1.1 Introduction 
This chapter explains the structure of the MT8676 WiFi module and provides guidance on troubleshooting typical WiFi 
issues. The WiFi chip paired with MT8676 is MT6637.  
1.1.2 Abbreviation 
Table 1-1. Abbreviations 
Abbreviation Explanation 
STA Station, this term describes a computing device equipped with a wireless 
network interface, such as a laptop, a WiFi-enabled mobile phone, or a tablet. 
AP Access Point, devices that have the ability to bridge between wireless or wired 
connections, like wireless routers. 
P2P Peer-to-Peer Connection 
BSS An area that is under the control of an AP 
BSSID MAC Address for AP 
SSID Service Set Identifier 
ESS Extended Service Set, the unique identification of a large-scale virtual Basic 
Service Set (BSS) is based on multiple BSSs sharing the same SSID. 
802.11 series phy layer 802.11b/g/n, 802.11ac, 802.11ax… 
2.4G/5G/6G WiFi Frequency Band 
Discovery stage Passive Scanning (listeningBeacon), Active Scanning (Probe request/Probe 
Response) 
Authentication stage Authentication request, Authentication response 
Associate stage Association request, Association response 
 
Table 1-2. MTK WiFi module name 
Module Name Description 
Glue layer (Linux/Android) 
(OS Adaptation) 
Provides access interfaces for OS 
IOCTL, spin lock, ISR, Main thread, download RAM code and patch 
common CFG80211 AIS 
HIF/HAL HW Adapter Layer 
FW own/Driver own, TX data, TX command,  RX interrupt 
AIS 
(AdHoc/Infrastructure/Search)  
Infra. STA Connection 
CFG80211 AIS 
P2P 
P2P Connection 
CFG80211 P2P 
P2P Find Phase 
   - P2P Scan (All Channel) 
   - P2P Search (Social Channel) 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
Module Name Description 
Remain on Channel 
Management Frame TX 
   - Off channel TX 
   - Non off channel TX 
Multiple Interface 
   - Interface add/del/change 
AAA (AP(Hotspot) Auth/Assoc) AP’s authentication and association 
SAA (Station Auth/Assoc) STA’s authentication and association 
MQM (Queue Management) QoS, Multiple queue control 
RLM (Radio Link Management) Bandwidth, preamble, slot time, OBSS, protection mode, 
SCN (Scan) Queuing of scanning request 
SEC (Security) Encryption, key management 
TXM TX path, CMD queue 
RXM RX path, Re-order buffer, RX AMPDU establishment 
CNM (Concurrent Network Management) Handle channel privilege message 
 
1.2 Architecture/Process Overview 
Figure 1-1 shows MT6637 WiFi architecture. 
 
Figure 1-1. WiFi architecture 
 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
1.3 Configuration/Customization Guideline 
1. NVRAM Customization 
WiFi customization typically involves modifying configurations in NVRAM file, which is located in the device as indicated 
below: 
/data/nvram/APCFG/APRDEB/WIF 
 
NVRAM in code path: /alps/vendor/mediatek/proprietart/custom/$project/cgen/CFG_WIFI_Default.h 
The meaning of the respective field is indicated. Please use meta tool to adjust the relevant parameters. 
 
2. wifi.cfg Customization 
Customers can use wifi.cfg to configure WiFi features. The public version does not include wifi.cfg by default. If 
customized configuration of WiFi features is required, please create a wifi.cfg and add it to the /vendor/firmware/ 
of the device. 
 
You can find the default values for configurable parameters in the driver in wlanInitFeatureOption and the default 
value can be modified through wifi.cfg. 
 
It is also possible to alter the default parameter values in the firmware by wifi.cfg. Specific parameters for modification 
are provided by the WiFi RD according to the specific functional requirements. 
 
3. Channel list customization   
It is typical to customize the channel list with the relevant country code. Customized file path：
/alps/vendor/mediatek/kernel_modules/connectivity/wlan/core/gen4m/mgmt/rlm_domain .c 
  
These are four cases of channel list customization: 
 
case 1: Remove 144 channel of country code US 
a. Find g_u2CountryGroup26 from COUNTRY_CODE_US  
static const uint16_t g_u2CountryGroup26[] = { 
 COUNTRY_CODE_AS, COUNTRY_CODE_US 
}; 
 
b. Find supported channel lists of g_u2CountryGroup1 in arSupportedRegDomains 
 { 
  (uint16_t *) g_u2CountryGroup26, sizeof(g_u2CountryGroup26) / 2, 
  { 
   {81, BAND_2G4, CHNL_SPAN_5, 1, 11, FALSE} 
   , /* CH_SET_2G4_1_11 */ 
   {115, BAND_5G, CHNL_SPAN_20, 36, 4, FALSE} 
   , /* CH_SET_UNII_LOW_36_48 */ 
   {118, BAND_5G, CHNL_SPAN_20, 52, 4, TRUE} 
   , /* CH_SET_UNII_MID_52_64 */ 
   {121, BAND_5G, CHNL_SPAN_20, 100, 12, TRUE} 
   , /* CH_SET_UNII_WW_100_144 */ 
   {125, BAND_5G, CHNL_SPAN_20, 149, 8, FALSE} 
    /* CH_SET_UNII_UPPER_149_177 */ 
  } 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
 } 
 
c. Modify operating class 121 as shown below 
{121,BAND_5G,CHNL_SPAN_20,100,11,TRUE} 
 
  Case 2: Modify will affect supported channel list of all country code in g_u2CountryGroup1 
a. Define new group 
static const uint16_t g_u2CountryGroup27[] = { 
 COUNTRY_CODE_US 
}; 
 
b. Remove COUNTRY_CODE_US from the original group 
c. Define supported channel list of new group 
{ 
  (uint16_t *) g_u2CountryGroup27, sizeof(g_u2CountryGroup27) / 2, 
  { 
   {81, BAND_2G4, CHNL_SPAN_5, 1, 11, FALSE} 
   , /* CH_SET_2G4_1_11 */ 
   {115, BAND_5G, CHNL_SPAN_20, 36, 4, FALSE} 
   , /* CH_SET_UNII_LOW_36_48 */ 
   {118, BAND_5G, CHNL_SPAN_20, 52, 4, TRUE} 
   , /* CH_SET_UNII_MID_52_64 */ 
   {121, BAND_5G, CHNL_SPAN_20, 100, 12, TRUE} 
   , /* CH_SET_UNII_WW_100_144 */ 
   {125, BAND_5G, CHNL_SPAN_20, 149, 8, FALSE} 
    /* CH_SET_UNII_UPPER_149_177 */ 
  } 
} 
 
    Case3: Remove one supported channel list of US, for example, 52-64 
a. Find COUNTRY_CODE_US from country group (g_u2CountryGroup1)  
static const uint16_t g_u2CountryGroup26[] = { 
 COUNTRY_CODE_AS, COUNTRY_CODE_US 
}; 
 
b. Find supported channel lists of g_u2CountryGroup1 in arSupportedRegDomains 
{ 
  (uint16_t *) g_u2CountryGroup26, sizeof(g_u2CountryGroup26) / 2, 
  { 
   {81, BAND_2G4, CHNL_SPAN_5, 1, 11, FALSE} 
   , /* CH_SET_2G4_1_11 */ 
   {115, BAND_5G, CHNL_SPAN_20, 36, 4, FALSE} 
   , /* CH_SET_UNII_LOW_36_48 */ 
   {118, BAND_5G, CHNL_SPAN_20, 52, 4, TRUE} 
   , /* CH_SET_UNII_MID_52_64 */ 
   {121, BAND_5G, CHNL_SPAN_20, 100, 12, TRUE} 
   , /* CH_SET_UNII_WW_100_144 */ 
   {125, BAND_5G, CHNL_SPAN_20, 149, 8, FALSE} 
    /* CH_SET_UNII_UPPER_149_177 */ 
  } 
 } 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
 
c. Modify operating class 118 as shown below 
{118,BAND_NULL,0,0,0,TRUE} 
 
Case4: Setting Passive channel 
If customer has no special setting, ch52-64 and ch100-140 are passive channel by default. 
If customer has special setting, please refer to the following configuration 
 
a. Define g_u2CountryGroup1_passive which includes COUNTRY_CODE_US  
static const uint16_t g_u2CountryGroup0_Passive[] = { 
 COUNTRY_CODE_US 
}; 
 
b. Add passive channel list to g_u2CountryGroup1_Passive in arSupportedRegDomains_Passive 
{ 
  (uint16_t *) g_u2CountryGroup0_Passive, 
  sizeof(g_u2CountryGroup0_Passive) / 2, 
  { 
   {81, BAND_2G4, CHNL_SPAN_5, 1, 0, FALSE} 
   ,   /* CH_SET_2G4_1_14_NA */ 
   {82, BAND_2G4, CHNL_SPAN_5, 14, 1, TRUE } 
   , 
   {115, BAND_5G, CHNL_SPAN_20, 36, 0, FALSE} 
   ,   /* CH_SET_UNII_LOW_NA */ 
   {118, BAND_5G, CHNL_SPAN_20, 52, 0, FALSE } 
   ,   /* CH_SET_UNII_MID_52_64 */ 
   {121, BAND_5G, CHNL_SPAN_20, 100, 0, FALSE } 
   ,   /* CH_SET_UNII_WW_100_140 */ 
   {125, BAND_5G, CHNL_SPAN_20, 149, 0, FALSE} 
      /* 
               } 
} 
 
Parameters introduction: 
CHAL_SPAN_5: Channel span 
14: Start channel 
1: Channel count 
The code in red font refers to designating one channel starting from channel 14 as a passive channel, while the other lines 
indicate setting the number of channels to 0, meaning no passive channels. 
 
1.4 Frequently Asked Questions/Troubleshooting 
Customers can perform preliminary analysis on the listed cases in advance. For other questions, please try to catch all the 
logs at one time according to the requirements and provide them to MediaTek for analysis. 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
1.4.1 WiFi Certification 
WIFI Certification is an initiative of the WIFI Alliance for its members to verify that a WiFi product meets the specification 
and can interoperate with other WiFi devices. Whether to obtain WiFi certification is determined by the customer. 
Typically, devices sold by large manufacturers worldwide will be certified. Figure 1-2 shows the WiFi certification steps. 
 
Figure 1-2. WiFi certification steps 
 
The stages where MediaTek assistance is required are as follows: 
• Apply: When the customer submits the certification application to the alliance, they need to register product 
information. At this stage, MediaTek may need to assist in confirming the product’s capabilities in order to determine 
which tests need to be conducted. 
• Schedule: The customer confirms the testing schedule with the laboratory. MediaTek needs to prepare the testing 
tools before the formal start of the lab, and also needs to ensure that the customer's schedule allows for sufficient 
time for testing and debugging. 
• Test: The laboratory conducts testing on the product. During this stage, MediaTek may need to assist in debugging 
testing issues. 
1.4.2 Logs for WiFi Debug 
Method to enable WiFi logs (including framework, wpa_supplicant, driver, fw) and how to confirm if they have been 
successfully enabled. 
1. wpa_supplicant log: 
adb shell "wpa_cli -i wlan0 -g@android:wpa_wlan0 IFNAME=wlan0 LOG_LEVEL DEBUG" 
 
 
2. Framework log: 
Settings→About→Build click 6 times, then you will see "you are now a developer！" on the 
screen Settings→Develop options→Enable Wi-Fi verbose Logging  
 
 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
3. FW log, WiFi driver log and tcpdump: 
MediaTek demo board provides DebugloggerUI, with FW logs located in consyslog, WiFi driver logs in mobilelog, and 
tcpdump in netlog. After collecting the logs, you should pull them out from the /data/debuglogger directory. 
 
4. Change FW log level (UI:DebugloggerUI-->Log Level-->WiFi Firmware Log Level), using the following commands: 
Extreme:  
adb shell “iwpriv wlan0 driver ‘set_chip EvtDrvnLogCatLvl 0xFFFFFFFF’” 
 
More:  
adb shell “iwpriv wlan0 driver ‘set_chip EvtDrvnLogCatLvl 0xFFFFFF0F’” 
 
Default:  
adb shell “iwpriv wlan0 driver ‘set_chip EvtDrvnLogCatLvl 0xFFFFFF03’” 
 
5. Change WiFi driver log level (UI:DebugloggerUI-->Log Level-->WiFi Driver Log Level), using the following commands:  
Extreme:  
adb shell “echo ”0xff:0x7f” > /proc/net/wlan/dbgLevel” 
 
More:  
adb shell “echo ”0xff:0x3f” > /proc/net/wlan/dbgLevel” 
 
Default:  
adb shell “echo ”0xff:0x2f” > /proc/net/wlan/dbgLevel” 
 
6. Sniffer log: 
Sniffer log is a very important means to analyze WiFi problems by capturing air log. Problems such as connection 
disconnection, throughput, delay, etc. need to be analyzed with the sniffer log. 
After Project kicks off, customer needs to prepare a wireless NIC with the driver and tool installed on the PC for capturing 
the sniffer log. When providing logs, please provide sniffer logs together to avoid back-and-forth communication about log 
problems. 
 
1.4.3 Scan 
1.4.3.1 Scan Key Log 
Scan state machine start: 
scnFsmSteps: (SCN STATE) [SCAN]TRANSITION: [IDLE] -> [SCANNING] 
 
Scan state machine  stop: 
scnFsmSteps: (SCN STATE) [SCAN]TRANSITION: [SCANNING] -> [IDLE] 
 
Calculate the time difference between stop and start to see if it is normal. 
Scan done event in Kernel log: 
aisFsmRunEventScanDone: (AIS INFO) ScanDone 1, status(0) native req(1) 
 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
Scan done reported to supplicant in main log: 
wpa_supplicant: wlan0: Event SCAN_RESULTS (3) received 
 
1.4.3.2 Scan NO AP 
Check whether the scan command is delivered by the framework in main log 
1. Log:  
WifiHW: enter -->wifi_send_command cmd=IFNAME=wlan0 SCAN TYPE=ONLY 
 
If not, check the framework first. Otherwise, go to next step. 
2. Check whether scan state machine has started successfully in the Kernel log. 
scnFsmSteps: (SCN STATE) [SCAN]TRANSITION: [IDLE] -> [SCANNING] 
 
3. Check whether the scan command is sent to FW in Kernel log 
kalEnqueueCommand:(INIT TRACE) EN-Q CMD TYPE[x] ID[0x03] 
 
Whether received scan done event from FW, log:  
aisFsmRunEventScanDone 
 
4. Check whether there are any scanned access points (APs) present in the Kernel log 
SCANLOG: (SCN INFO) [SCN:600:D2K] Total:12/24 
 
Note:  
If you need MediaTek’s assistance, please provide consyslog, mobileLog, netlog, and sniffer log. The personal computer used to capture 
the sniffer log must first synchronize its time with the device, and both the IP addresses and MAC addresses of the two sides must be 
provided. If there is a coexistence with BT 2.4G, please also provide the picus log (clearly indicating the time of the issue). 
1.4.4 STA Connect 
1. Check connect policy, with the filter condition: mtk_cfg80211_connect 
mtk_cfg80211_connect:(REQ INFO) [wlan] mtk_cfg80211_connect 00000000e0a61a62 61 
auth_type=0 flags=0x40 wlanoidSetConnect:(INIT INFO) ucBssIndex 0, ssid test_ap, bssid 
00:00:00:00:00:00, bssid_hint ce:84:f6:15:4f:4d, conn policy 4, disc reason 4, freqInMHZ 
5805 
 
2. Check whether AIS State flow works normally, with the filter condition: (AIS STATE) 
aisFsmSteps:(AIS STATE) [AIS0][0] TRANSITION: [IDLE] -> [IDLE] 
aisFsmSteps:(AIS INFO) eReqType=1 
aisFsmSteps:(AIS STATE) [AIS0][0] TRANSITION: [IDLE] -> [SEARCH] 
aisFsmSteps:(AIS STATE) [AIS0][0] TRANSITION: [SEARCH] -> [REQ_CHANNEL_JOIN] 
aisFsmSteps:(AIS STATE) [AIS0][0] TRANSITION: [REQ_CHANNEL_JOIN] -> [JOIN] 
aisFsmSteps:(AIS STATE) [AIS0][0] TRANSITION: [JOIN] -> [NORMAL_TR] 
 
3. Check whether SAA State flow works normally, with the filter condition: (SAA STATE) 
saaFsmSteps:(SAA STATE) [SAA]TRANSITION: [AA_IDLE] -> [SAA_SEND_AUTH1] 
saaFsmSteps:(SAA STATE) [SAA]TRANSITION: [SAA_SEND_AUTH1] -> [SAA_WAIT_AUTH2] 
saaFsmSteps:(SAA STATE) [SAA]TRANSITION: [SAA_WAIT_AUTH2] -> [SAA_SEND_ASSOC1] 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
saaFsmSteps:(SAA STATE) [SAA]TRANSITION: [SAA_SEND_ASSOC1] -> [SAA_WAIT_ASSOC2] 
saaFsmSteps:(SAA STATE) [SAA]TRANSITION: [SAA_WAIT_ASSOC2] -> [AA_IDLE] 
 
4. Check whether the selected AP is connected, with the filter condition: netif_carrier_on 
5. Check whether the AIS State is set to normal TR, with the filter condition: (AIS STATE) 
aisFsmSteps: (AIS STATE) [AIS0] TRANSITION: [JOIN] -> [NORMAL_TR] 
 
6. Confirm the EAP behavior, with the filter condition: EAPOL 
statsParsePktInfo:(RX INFO) <RX> EAPOL: key, M1, KeyInfo 0x008a, SSN:0 
statsParsePktInfo:(TX INFO) <TX> EAPOL: key, M2, KeyInfo 0x010a SeqNo:2 
statsParsePktInfo:(RX INFO) <RX> EAPOL: key, M3, KeyInfo 0x13ca, SSN:1 
statsParsePktInfo:(TX INFO) <TX> EAPOL: key, M4, KeyInfo 0x030a SeqNo:3 
 
7. Confirm the DHCP behavior, with the filter condition: DHCP 
The Kernel log can determine whether the DHCP is successfully sent and received 
Ensure that the DHCP IPID and MsgType <TX/RX> are paired  
TX status are all 0, indicating success. 
 
Note:  
If you need MediaTek’s assistance, please provide consyslog, mobileLog, netlog, and sniffer log. The personal computer used to capture 
the sniffer log must first synchronize its time with the device, and both the IP addresses and MAC addresses of the two sides must be 
provided. If there is a coexistence with BT 2.4G, please also provide the picus log (clearly indicating the time of the issue). 
 
1.4.5 Throughput 
• Network throughput is influenced by various factors, including human operations, environment, protocol limitations, 
hardware, software, etc. The more conditions collected, the shorter the time to resolve the issue. 
• To avoid the impact of environmental factors and misalignment of testing tools, it is recommended to conduct 
throughput testing in a shielded room. It is suggested to use the iperf tool in a Linux environment for testing. 
• Test devices of the same level in an equivalent environment, observe the differences, and replace access points (APs) 
to verify the phenomenon. 
• Ensure to conduct CTIA mode testing to avoid interference from online scanning, power-saving modes, etc. 
• Throughput testing should ideally be pure WiFi testing, so be sure to turn off Bluetooth (BT). 
• If there is a coexistence with Bluetooth, the scenario must be clearly defined, and picus logs should be provided 
 
Note: If you need MediaTek’s assistance, please provide consyslog, mobileLog, netlog, and sniffer logs (Synchronize the time between 
the DUT and the pc that to capture sniffer log, and both IP and mac addresses must be provided). If it coexists with BT 2.4G, picus log is 
provided synchronously. 
1.4.6 MT6637 Chip Reset 
If the WiFi driver or WiFi FW is abnormal and cannot be restored, the chip reset is triggered. Before the chip resets, the 
system uses the coredump mechanism to collect some status on the scene. 
In this case, the coredump file and consyslog are important analysis methods, and must be provided. 
 
 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
Coredump mechanism 
1. Through netlink, the driver sends data to the native 
2. Native get EMI by mmap. 
 
 
Table 1-3. Coredump file path  
BT WiFi 
Assert_type combo_bt combo_wifi 
Dump 存放目录 
(可在 native 端客制化) 
/data/vendor/connsyslog/bt /data/vendor/connsyslog/wifi 
Dump file list 
combo_t32.cmm 
SYS_WCN_ISSUE_INFO 
SYS_WCN_EMI_DUMP 
SYS_WCN_MCIF_EMI_DUM 
SYS_WCN__ILM_DUMP 
SYS_WCN__DLM_DUMP 
SYS_WCN_SRAM_DUMP 
combo_t32.cmm 
SYS_WCN_ISSUE_INFO 
SYS_WCN_EMI_DUMP 
SYS_WCN_MCIF_EMI_DUM 
SYS_WCN__ROM_DUMP 
SYS_WCN__ILM_DUMP 
SYS_WCN_MDLM_DUMP 
SYS_WCN_WDLM_DUMP 
SYS_WCN_SRAM_DUMP 
 
Follow the steps below to check whether the coredump mechanism is enabled. 
1. Check whether coredump mode is set as 1 or 2. 
getprop persist.vendor.connsys.coredump.mode 
 
2. If not, set it as 1 or 2, then reboot. 
setprop  persist.vendor.connsys.coredump.mode 2 
 
3. After the restart, check whether the coredump mode is set to the specified value and whether WiFi dump runs. 
auto8676p1_64_bsp:/ # getprop | grep coredump 
getprop | grep coredump 
[persist.vendor.connsys.coredump.mode]: [2] 
 
auto8676p1_64_bsp:/ # ps -A |grep wifi_dump 
ps -A |grep wifi_dump 
system        1121     1   10788624   5268 poll_schedule_timeout 0 S wifi_dump 
 
4. If the WiFi dump runs, enable the WiFi first and manually trigger the chip reset to check whether the coredump file can 
be generated. 
auto8676p1_64_bsp:/ # echo 0xDB9DB9 > /proc/driver/conninfra_dbg 
auto8676p1_64_bsp:/ # echo 0x1 > /proc/driver/conninfra_dbg 
WFsys 
Provided by conninfra 
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
MT8676 Android WiFi 
User Manual 
Confidential B 
 
Check whether a coredump file is generated. 
auto8676p1_64_bsp:/ # ls data/vendor/connsyslog/wifi 
ls data/vendor/connsyslog/wifi 
combo_t32_20240602073036.CI_M  combo_t32_20240602073036._ROM 
combo_t32_20240602073036.MDLM  combo_t32_20240602073036.cmm 
combo_t32_20240602073036.SRAM  combo_t32_20240602073036.emi 
combo_t32_20240602073036.WDLM  combo_t32_20240602073036_issue_info.xml 
combo_t32_20240602073036._ILM  combo_t32_20240602073036_mcif.emi 
 
5. If the coredump file can be generated successfully, you can begin to capture the problem log. 
After the fault is detected, provide the coredump file in addition to the debuglogger and the db file generated by the AEE. 
 
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
MT8676 Android WiFi 
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

