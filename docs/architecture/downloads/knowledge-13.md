# SRC0117 Auto_Camera_ISP8S_CDPHY_Eye_Scan_User_Guide_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Auto_Camera_ISP8S_CDPHY_Eye_Scan_User_Guide_V1.0.pdf

SHA-256：6c11069e244f90d74172da48786a3b14a2bfcad4e445d7ab42d8689e912b0699

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0117.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Confidential A - Encrypted 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2025-12-01 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
Version History 
Version Date Author Description 
1.0 2025-12-01 Zhongyong Yu Official release 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
1 Script Execution Flow ················································································································································· 4 
2 Environment Requirement ········································································································································· 5 
3 How To Run EYE_SCAN Script ····································································································································· 6 
3.1 File Path ···································································································································································· 6 
3.2 Parameter of Script ·················································································································································· 6 
3.2.1 Modify Sensor_idx & Sensor_mode·············································································································· 7 
3.2.2 Modify C-PHY or D-PHY Range ······················································································································ 7 
3.3 Result Check ····························································································································································· 7 
3.4 Example ···································································································································································· 8 
4 ADB Command & Register Information. ··················································································································· 11 
4.1 How To Run EYE_SCAN Relative ADB Command ···································································································· 11 
4.1.1 Index & Streamon ······································································································································· 11 
4.2 Command Name & Value ······································································································································· 12 
4.3 Example ·································································································································································· 14 
Exhibit 1 Terms and Conditions ········································································································································ 15 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
1 Script Execution Flow 
• Origin version 
Note that the v.4 script would do “reboot” at the start and the end. 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
2 Environment Requirement 
Android Debug Bridge (adb) & Python3 environment are required. 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
3 How To Run EYE_SCAN Script 
3.1 File Path 
The path of EYE SCAN Python script is: 
 
• Yocto:  
src/multimedia/camera-hal/${IC}/mtkcam-core/hw/sensor/tool/eye_scan/ eye_scan_tool.py 
 
• Android:  
vendor/mediatek/proprietary/hardware/mtkcam-core/hw/sensor/tool/eye_scan/eye_scan_tool.py 
 
3.2 Parameter of Script 
• Script arguments 
Arguments Default Meaning 
sensor_idx 1 Sensor index of SenTest  
• 1: Main cam  
• 2: Sub cam  
• 4: Main2 cam  
• 8: Sub2 cam  
• 16: Main3 cam 
sensor_mode  0 
Sensor mode 
0: Preview 
1: Capture 
2: Video  ...  
(Pixel rate of each mode would impact scanning result.) 
CDR_DELAY_start  0 Setting scan range of CDR_DELAY 
CDR_DELAY_end  31 - 
EQ_OFFSET_start  -31 Setting scan range of EQ_OFFSET 
EQ_OFFSET_end  31 - 
delay_time  0 Time duration (seconds) between flush IRQ status after new 
setting and check new IRQ status 
serial 0123456789ABCDEF Serial number of device (phone) 
 
• Run CMD 
– Run with specified arguments 
python eye_scan_tool.py --sensor_idx 1 --sensor_mode 1 --CDR_DELAY_start 0 --CDR_DELAY_end 
31 --EQ_OFFSET_start -31 --EQ_OFFSET_end 31 --delay_time 0 --serial 0123456789ABCDE 
 
– Run with default arguments 
python eye_scan_tool.py 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
3.2.1 Modify Sensor_idx & Sensor_mode  
• Command: adb root & adb shell sentest  
 
 
 
• sensor_idx is set the same as SensorDevIdx. 
• sensor_mode is set to what you want to scan (start from 0).  
 
3.2.2 Modify C-PHY or D-PHY Range 
• CDR_DELAY_start is set to 0 (iteration start from 0). 
• C-PHY: CDR_DELAY_end is set to 31 (iteration range from CDR_DELAY_start to 31). 
• D-PHY: CDR_DELAY_end is set to 254 (iteration range from CDR_DELAY_start to 254). 
• CDR_OFFSET_start is set to -31 (iteration start from -31). 
• CDR_OFFSET_start is set to 31 (iteration start from 31). 
 
3.3 Result Check 
You will get two csv files after scanning. In both files, x-axis --> CDR_DELAY , y-axis --> EQ_OFFSET. 
 
• rg_val.csv: Store all csi_irq_status values. 
• result.csv: Store all pass or not. For each cell, O means IRQ status is correct at such (CDR_DELAY , EQ_OFFSET) setting, 
while X means IRQ status is failed. 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
3.4 Example 
• Terminal log 
– Origin version 
 
 
 
– Scan during streaming on 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
 
 
• Result 
– Sensor: IMX766 (C-PHY) 
▪ Mode 0 
▪ datarate (symbols per second) = (pixelrate * rawbit /16 * 7) / trio =  (462170000 * 10 /16 * 7) / 3 = 
673997916.6666 
▪ result.csv 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
 
 
– Sensor: IMX766 (C-PHY) 
▪ mode 11 
▪ datarate (symbols per second) = (pixelrate * rawbit /16 * 7) / trio =  (2122970000* 10 /16 * 7) / 3 = 
3095997916.6666 
▪ result.csv 
 
 
– Sensor: S5KSP9 (D-PHY) 
▪ mode 1 
▪ datarate (bit per second) = (pixelrate * rawbit) / lane = (586000000 * 10)/4 = 1465000000 
▪ result.csv 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
4 ADB Command & Register Information. 
The above Python script uses a sequence of ADB commands to read/write registers. 
The details of the ADB command and registers are provided. 
 
4.1 How To Run EYE_SCAN Relative ADB Command 
adb shell "echo EYE_SCAN dts_idx cmd_name val(option) > ....../debug_ops; cat ....../debug_ops" 
 
The full path of debug_ops is different at DX-2 & DX-3 & DX-4. 
 
• debug_ops path @ DX-2 
– /sys/devices/platform/1a00e000.seninf_top/debug_ops 
• debug_ops path @ DX-3 
– /sys/devices/platform/soc/1a00e000.seninf-top/debug_ops 
• debug_ops path @ DX-3 
– /sys/devices/platform/soc/3a300000.seninf-top/seninf-top/debug_ops 
 
4.1.1 Index & Streamon 
• dts_idx and sensor_idx 
– The dts_idx is described in the device tree. 
▪ 0: Main cam  
▪ 1: Sub cam  
▪ 2: Main2 cam  
▪ 3: Sub2 cam  
▪ 4: Main3 cam  
– The relationship between dts_idx and sensor_idx (for SenTest): 
sensor_idx = 2 << dts_idx 
• Before using ADB command to read/write registers on-line, such sensor should be streaming. 
– It is recommended to use SenTest to stream on sensor before running EYE_SCAN relative ADB command (the 
same as Python script). 
– Command: adb root & adb shell sentest_v4l2 sensor_idx sensor_mode 
– For example, sensor_idx = 1, sensor_mode = 0. 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
 
4.2 Command Name & Value 
Notify that the full path of debug_ops is different at DX-2 & DX-3. 
 
After sending the ABD command, you would get a string beginning with [EYE_SCAN SUCCESS], which means such registers 
have been written without any error. Otherwise, a string beginning with [EYE_SCAN FAIL] means there is something wrong 
(e.g., the sensor is not streaming) 
 
CMD Name Register Func. Purpose Value Range CMD 
EQ_DG0_EN  CTLE L1 Improve the 
quality of 
MIPI signal 
 {0x0, 0x1} echo EYE_SCAN dts_idx EQ_DG0_EN 0x1 > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
GET_EQ_DG0_EN Not need echo EYE_SCAN dts_idx GET_EQ_DG0_EN  > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
EQ_SR0  0~15 echo EYE_SCAN dts_idx EQ_SR0 val  > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
GET_EQ_SR0 Not need echo EYE_SCAN dts_idx GET_EQ_SR0 > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
EQ_DG1_EN  CTLE L2 {0x0, 0x1} echo EYE_SCAN dts_idx EQ_DG1_EN 0x1 > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
GET_EQ_DG1_EN Not need echo EYE_SCAN dts_idx GET_EQ_DG1_EN > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
CMD Name Register Func. Purpose Value Range CMD 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
EQ_SR1  0~15 echo EYE_SCAN dts_idx EQ_SR1 val  > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_op 
GET_EQ_SR1 Not need echo EYE_SCAN dts_idx GET_EQ_SR1 > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
EQ_BW  Buffer 
bandwidth 
{0x0, 0x1, 
0x3} 
echo EYE_SCAN dts_idx EQ_BW  val  > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
GET_EQ_BW Not need echo EYE_SCAN dts_idx GET_EQ_BW > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
FLUSH_CRC_STATUS  Check seninf 
IRQ status 
Eye scan Not need echo EYE_SCAN dts_idx FLUSH_CRC_STATUS 
> 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
CDR_DELAY  Scan width of 
eye 
CPHY: 0~31  
DPHY: 0~254 
echo EYE_SCAN dts_idx CDR_DELAY val > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
GET_CDR_DELAY Not need echo EYE_SCAN dts_idx GET_CDR_DELAY > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
CDR_DELAY_DPHY_EN  Not need echo EYE_SCAN dts_idx 
CDR_DELAY_DPHY_EN > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
EQ_OFFSET Scan height of 
eye 
-31 ~ 31 echo EYE_SCAN dts_idx EQ_OFFSET val > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
GET_EQ_OFFSET Scan height of 
eye 
Not need echo EYE_SCAN dts_idx GET_EQ_OFFSET  > 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops; cat 
/sys/devices/platform/soc/1a00e000.seninf-
top/debug_ops 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
 
4.3 Example 
• Terminal 1: Stream on sensor 
 
 
• Terminal 2: Use EYE_SCAN ADB command 
 
 
• Use EYE_SCAN ADB command before sensor is streamed on. 
Note that you must stream on the sensor at least one time before using the ADB command for V4L2 link setup. 
 
 
While the sensor is streamed off, the input parameter will be saved and only be written to register when the sensor is 
streamed on next time. 
Once the input parameter is written, it will be cleared. 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
Confidential A - Encrypted 
Auto Camera ISP8S CDPHY Eye Scan  
User Guide 
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
# SRC0118 GPU_PARAVIRT_Codebase_DIFF_Introduction_Audio.pdf

来源：8668/MTK参考资料/MTK参考资料/GPU_PARAVIRT_Codebase_DIFF_Introduction_Audio.pdf

SHA-256：a7ec0789a073145cab98ed28b33236606eecbf545e2a25a958121c22820eb5ca

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0118.html)

## PDF物理页 1

INTERNAL USE
GPU直通Codebase差异说
明-Audio
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 2

INTERNAL USE
Confidential C
平台版本与架构差异说明
版本对齐：Yocto 同源，Android 平台切换
原平台与直通平台的版本信息如下；“保持/变化”仅依据已提供的分支和版本说明。
层级 长安科技mp平台 GPU直通平台 结论
Android alps-mp-u0.mp9 alps-mp-v0.mp7+alps-mp-b1.mp7
1.Audio HAL引入更灵活的xml
配置
2.Framwork升级为AndroidB1
Yocto spm-mp-scarthgap.mp5 spm-mp-scarthgap.mp5 同一branch
Kernel 原平台 Kernel 基线 沿用同一 Yocto branch 一致
依据：用户提供的版本信息
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 3

INTERNAL USE
Confidential C
平台版本与架构差异说明
Audio HAL的升级由接口、配置方式与映射能力组成
新平台在 alps-vf-mp-v0.mp7-mp-b1.mp7 中引入更灵活的音频配置方式。
01
接口机制
HIDL → AIDL
Audio HAL 的接口机制切换为
AIDL。
02
配置方式
XML 配置
新增auto_audio_config.xml描述
音频硬件配置的方式。
03
映射对象
PCM + Channel Mapping
XML 可配置 PCM 节点与通道
mapping。
预期价值：配置更方便、更灵活，便于适配不同 PCM 节点与通道组合。
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 4

INTERNAL USE
Confidential C
Audio HAL灵活的XML配置说明
5
引入auto_audio_config.xml ，auto_audio_config.xml 是车机音频配置
文件，用于定制化AudioHAL中的相关功能
主要配置功能：
1. 配置AudioFlinger下行的Bus与ALSA节点的对应关系
2. 配置AudioFlinger下行的每一笔write的数据大小
3. 配置上下行中ALSA节点：
必要硬件连接（AFE Interconnect）
开启硬件的相关参数（pcm_config）及处理数据的参数
4. 配置ADSP的混音通路
5. 配置HAL中SW Mixer的混音通路
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 5

INTERNAL USE
Confidential C
auto_audio_config.xml
6
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 6

INTERNAL USE
Confidential C
auto_audio_config.xml
7
▪ Introduction of auto_audio_config.xml
▪ Introduction of Lables
– <channel_map>
– <bus_stream_maps>
– <sw_mixer_routes>
– <hal_sw_mixer_routes>
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 7

INTERNAL USE
Confidential C
Introduction of Lables
<channel_map>
8
<channel_map> 是为 AudioHal 中相关通路提供通道映射配置
完整配置：
<channel_map>
<chmap id="MIC_Record">    
<map channels="2" ch_map="0x1,0x2"/>
<map channels="4" ch_map="0x1,0x2,0x4,0x8"/>        
</chmap>
</channel_map>
AudioHAL中能够通过id和channels获取ch_map,如此则可再不修改code的情况下，通
过修改xml实现不同的映射关系。
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 8

INTERNAL USE
Confidential C
Introduction of Lables
<channel_map>
9
客户如何在AudioHAL中增加自定义的ch_map？
1. 在xml中增加新的chmap标签，设定唯一的id值,然后对不同的channels数设置ch_map；
2. 在 AudioConfigManager.h 中增加对应的id值定义，用于code中应用：
3. AudioHAL中应用，则调用AudioConfigManager::getChannelMapConfig函数即可。
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 9

INTERNAL USE
Confidential C
Introduction of Lables
<bus_stream_maps>
10
<bus_stream_maps> 是为 AudioHal 中管理上下行通路的地方，用于bus和alsa节点的对接，
每一个通路以子标签<bus_stream>作为一个配置单元。
举例完整配置：
➢ bus1，对应到ALSA节点的DL1；
➢ DL1 参数 pcm_config 取自于 pcm_profile 中的配置；
➢ 硬件在SOC内部连接是DL1_TO_I2SOUT1；
➢ 数据处理读取的是data_profile的配置。
从此配置可知，
bus1 
数据最终通过
 I2SOUT1
 输出到
SOC
外部。
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 10

INTERNAL USE
Confidential C
Introduction of Lables
<bus_stream>
在 xml 的
 bus_stream 标签中，有 属性 和 子标签
➢ 属性
 hal_buffer_size
/
hal_buffer_time
◆ AF 会读取该值，从而控制 AudioFlinger Mixer 的 buffer_size（每一笔混音大小）
➢ 子标签
 pcm_profile
◆ 标识属性
 id/
pcm_stream
◆ 配置属性
 period_frames
/
period_time_ms
/
period_cnt
/rate/
fromat
/channels/
start_threshold 等属
性，用以配置ALSA Driver的PCM节点；
其中，
pcm_profile 可以有多个，在code中根据
 id 属性可以获取不同的
pcm_profile。
11
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 11

INTERNAL USE
Confidential C
Introduction of Lables
<bus_stream>属性1：
hal_buffer_frames
单位：帧数，整型值
作用：在AF开机open HAL的streamout/streamin时会传入 Samplerate 与 Format 等参数，在 AF 
get buffer_size 时即以
 hal_buffer_frames 计算得出返回值
使用示例：
属性2：
hal_buffer_time_ms
单位：毫秒(ms)，浮点值，如有小数，建议保留 2 位小数，如 5.33/10.67 等
作用：同
 hal_buffer_size 类同
限制条件：当
 hal_buffer_size 没有在xml中设置时，才会使用此属性
使用示例：
默认值：
当这2个属性均没有设定时，则默认设定
 hal_buffer_frames 为
 1024 帧。
应用优先级：
hal_buffer_frames
 >     
hal_buffer_time_ms
 >     default
12
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 12

INTERNAL USE
Confidential C
Introduction of Lables
<pcm_profile>
属性成员：
id/
pcm_stream
period_frames
/
period_time_ms
/
period_cnt
rate/format/channels/
start_threshold
限制条件：
pcm_profile 该必须包含
 id，此值是Code获取该设定的唯一标识，如未设定，则此
 pcm_profile 无效。
调用方法及其原理：
使用如下接口可在bus中找到对应的
 pcm_profile :
应用xml中
 pcm_profile 设定的相关参数:
注意，该函数用于覆盖 config 的初始设定，所以config 需要传入当前的
rate/format/channels，因为这三个
变量如不在xml中配置，则使用当前值。
其中，
period_frames 与
 period_cnt 不管xml中是否设定，都会有默认值覆盖掉原先的 config 中的值。
13
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 13

INTERNAL USE
Confidential C
Introduction of Lables
<pcm_profile>
xml 配置举例：
14
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 14

INTERNAL USE
Confidential C
Introduction of Lables
<pcm_profile>
属性1：
period_frames
单位：帧数，整型值
作用：应用于pcm_stream节点的 pcm_config 参数，如xml无设置则使用default
属性2：
period_time_ms
单位：毫秒(ms)，浮点值，如有小数，建议保留 2 位小数，如 5.33/10.67 等
作用：同
 period_frames类同
限制条件：当
 period_frames 没有在xml中设置时，才会使用此属性
period_frames 默认值：
当这2个属性均没有设定时，则默认设定
 period_frames
 = 
 hal_buffer_frames
应用优先级：
period_frames
 >     
period_time_ms
 >     default
属性3：
period_cnt
单位：整型值
默认值：当
 period_cnt 没有在xml中设置时，DSP 通路默认为 2，AFE通路默认为 3
15
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 15

INTERNAL USE
Confidential C
Introduction of Lables
<pcm_profile>
属性
 rate/format/channels/
start_threshold 都是仅当xml中设定时，才会应用。
属性归类——整型值：
rate/
channels/
start_threshold
含义：采样率/声道数/起播帧数
属性归类——字符串：
 format
含义：音频采样格式
可选字符串： “S16_LE”、 “ S32_LE ” 、 “ S8 ” 、 “ S24_LE ” 、 “ S24_3LE ”
16
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 16

INTERNAL USE
Confidential C
Introduction of Lables
<data_profile>
所属标签：
 pcm_profile
属性成员：
 rate/format/channels  （同
 pcm_profile 中的属性定义）
调用方法及其原理：
使用该成员函数即可应用xml中
 data_profile 设定的相关参数。
注意，该函数用于覆盖参数中的
 rate/format/channels，如不在xml中配置，则使用传入的当前值。
当前并非所有的通路都支持
 data_profile 的设定，这需要SW Code中自行调用才行。
当前支持的通路如下，其余请自行查看 Code：
1. BusNormal
2. BusDsp
3. AfeMch0
4. AfeMch1
5. AfeMch2
6. DspMch
7. HAL_Capture_Normal 的配置
➢ 基于data provider base的类，调用了 initPcmConfig的，但需要根据具体情况而定）
17
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 17

INTERNAL USE
Confidential C
data_profile与 pcm_profile的应用
前提：相同时间内，
pcm_profile 与
 data_profile 消耗的数据量一致。
应用目的：弥补硬件声道数不足的问题
应用一：通过将32Bit降为16Bit来提升声道数
优点：采样率不变，不需要 Codec（ADC/DAC）或外置 ADSP 做特殊的适配修改
缺点：只能传16Bit/Channel，精度会有损失
xml 配置举例：I2S6 (
48K
*
8ch
*
32bit) -> AFE CM -> HAL (
48K*16ch*16bit)
每帧数据都一样大：8ch * 32bit / 8 = 32 Bytes = 16ch * 16bit / 8
18
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 18

INTERNAL USE
Confidential C
data_profile与 pcm_profile的应用
应用二：通过提升采样率来提升声道数
优点：采样精度不变，没有精度损失
缺点：需要外置 ADSP 做特殊的适配修改，Codec（ADC/DAC）大概率不能
xml 配置举例：I2S6 (
96K
*
8ch
*
32bit) -> AFE CM -> HAL (
48K*16ch*32bit)
相同时间数据都一样大（N s）：
96K * Ns * 8ch * 32bit / 8 = 48K * Ns * 16ch * 32bit / 8
19
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 19

INTERNAL USE
Confidential C
Introduction of Lables
<sw_mixer_routes>
➢ 该标签用于配置SOC内置ADSP混音通路。
➢ 子标签
 sw_mixer_target 作为每一个Mixer的通路配置
➢ 属性
name 标识 mixer target的名称
➢ 属性
 ch_in
/
ch_out
/
ch_map
/
aurisys_on 是标识 target 使用aurisys 框架时使用
➢ 属性
 ch_in 也是mixer 输出的声道数
➢ 属性
 ch_map 是
ch_in 与
 ch_out 的声道映射关系
➢ 子标签
 sw_mixer_source 用于标识 mixer source
➢ 属性
name 标识 mixer source 的名称
➢ 属性
 ch_in
/
ch_out
/
ch_map
/
aurisys_on是标识 source 使用 aurisys 框架时使用
➢ 属性
 ch_out 也是进入mixer 的声道数
➢ 属性
 ch_map 是
ch_in 与
 ch_out 的声道映射关系
20
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 20

INTERNAL USE
Confidential C
Introduction of Lables
<sw_mixer_routes>
➢ 示例配置：
21
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 21

INTERNAL USE
Confidential C
Introduction of Lables
<hal_sw_mixer_routes>
➢ 该标签与
 sw_mixer_routes 标签定义类似，其主要是定制HAL SW Mixer通路
➢ 子标签
 sw_mixer_target 作为每一个Mixer的通路配置
➢ 属性
address 标识 mixer target的名称
➢ 属性
 ch_in
/
ch_out
/
ch_map
/
aurisys_on 是标识 target 使用aurisys 框架时使用
➢ 属性
 ch_in 也是mixer 输出的声道数
➢ 属性
 ch_map 是
ch_in 与
 ch_out 的声道映射关系
➢ 子标签
 sw_mixer_source 用于标识 mixer source
➢ 属性
 address 属于mixer source的名称
➢ 属性
 ch_in
/
ch_out
/
ch_map
/
aurisys_on是标识 source 使用 aurisys 框架时使用
➢ 属性
 ch_out 也是进入mixer 的声道数
➢ 属性
 ch_map 是
ch_in 与
 ch_out 的声道映射关系
22
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 22

INTERNAL USE
Confidential C
Introduction of Lables
<sw_mixer_routes>
➢ 示例配置：
23
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 23

INTERNAL USE
Confidential C
Introduction of Lables
<hal_sw_mixer_routes>
24
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 24

INTERNAL USE
Confidential C
Introduction of Lables
<hal_sw_mixer_routes>
25
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 25

Copyright © MediaTek Inc. All rights reserved.
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM


---
# SRC0119 MT8668_Application_Processor_Technical_Brief_V0.1.pdf

来源：8668/MTK参考资料/MTK参考资料/MT8668_Application_Processor_Technical_Brief_V0.1.pdf

SHA-256：0970f5784a42cf14b22e5cc6803736b7f4c228eda0910489ed3c27ad9fb8b4ba

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0119.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  0.1 
Release date:  2025-09-24
MT8668 
Application Processor 
Technical Brief 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Version History 
Version Date Description 
0.1 2025-09-24 Initial draft 
 
  
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Summary of Key Features 
Please see Section 1.1.3 for more feature information. 
 
 
 
  
Feature Description 
Security 
Chip-Level Features Arm Trust Zone Security 
Crypto Engine The SSR, MediaTek's Unified Crypto Engine IP with Anti-SCA 
FIPS-140-3 ready for certification 
Application Processor 
AP MCU Arm® 2 little dual-core complex and 4 big cores  
GPU Arm® Mali GPU 
SCP MediaTek MRV55 
Modem 
LTE Cat18, up to 4CC, NR sub6 3CC 5.14 Gbps 
Memory 
EMI LPDDR5Maximum DRAM capacity: 24 GB 
Two channels, each having a 16-bit DQ bus 
UFS Supports UFS 3.1 2-lane and data rate up to 23.296 Gbps. 
Multimedia 
Display Display1: (1920x1080@60 + 1920x1080@60) 
Display2: (1920x1080@60 + 1920x1080@60) 
2 x display with hardware CRC 
2-layer telltale with 4 telltale checker 
Camera 4 MIPI CSI-2 high-speed camera serial interfaces; max. 4 data lanes of D-DHY; max. 3 trios of C-
PHY 
Video 4K30 AV1/HEVC/AVC/VP9 video decoder 
2K30 HEVC/AVC video encoder 
Audio 
Modem Speech 
Connectivity 
USB, SPI, PWM, UART, GPIO, I2C/I3C, SIM, JTAG, MSDC (SD/SDIO 3.0), PCIe 
Wireless Connectivity 
Wi-Fi 6E 2x2, Bluetooth 5.4, GNSS L1+L5 
Process and Package 
4 nm process; 12.05 x 13.1 x 1.065mm, TFBGA 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
MT8668 high-level block diagram 
 
 
 
MT8668
Application 
Processor
Modem
Multimedia
Wireless 
Connectivity
Peripheral
Memory/Storage
PA
RF 
TX/RX
RFFE
RF MIPI
CLK IC
PMIC
SPMI
DISPLAYMIPI DSI
MIPI CSI-2
I2C
GNSSAIQ IF
USB
HUB
Debug
UFS
USB 3.0
UART
JTAG
UFS 3.1 2-lane
26MHz Crystal
 LPDDR5X SDRAM
LPDDR5X
16-bit 2 channels
Wi-FiAIQ IF
BluetoothAIQ IF
CTPI2C/I3C
SPI
Sensor I2C/I3C
SPI
Ethernet
Switch
PA
(audio) I2S IN/OUT
SIMSIM Card 1/2
PCIe
Camera 
x8
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table of Contents 
Version History ·································································································································································· 2 
Summary of Key Features ·················································································································································· 3 
Table of Contents ······························································································································································· 5 
List of Figures ····································································································································································· 7 
List of Tables ······································································································································································ 7 
1 Introduction······························································································································································· 9 
1.1 MT8668 Product Overview ······································································································································ 9 
1.1.1 Functional Block Diagram ··························································································································· 10 
1.1.2 Power Domain············································································································································· 11 
1.1.3 Highlighted Features ··································································································································· 12 
2 Terms and Abbreviations ········································································································································· 17 
2.1 Naming Convention ················································································································································ 17 
2.2 Abbreviations ························································································································································· 17 
3 Pin Information ························································································································································ 21 
3.1 MT8668 Pin Map ···················································································································································· 22 
3.2 MT8668 Pin Descriptions ······································································································································· 23 
4 Electrical Characteristics ········································································································································ 100 
4.1 Absolute Maximum Ratings ································································································································· 100 
4.1.1 Free-Air and Storage Thermal Specification ······························································································ 100 
4.1.2 Power Supply ············································································································································ 100 
4.2 Recommended Operating Conditions ·················································································································· 103 
4.2.1 Thermal Operating Specification··············································································································· 103 
4.2.2 Power Supply ············································································································································ 103 
4.3 DC Electrical Characteristics ································································································································· 105 
4.3.1 X32K_IN DC Electrical Characteristics ······································································································· 106 
4.3.2 SPI DC Electrical Characteristics ················································································································ 106 
4.3.3 I2S DC Electrical Characteristics ················································································································ 106 
4.3.4 I2C/I3C DC Electrical Characteristics ········································································································· 107 
4.3.5 MSDC DC Electrical Characteristics ··········································································································· 107 
4.3.6 SIM DC Electrical Characteristics ··············································································································· 107 
4.4 AC Electrical Characteristics and Timing Diagrams ······························································································ 109 
4.4.1 External Memory Interface for LPDDR5 ···································································································· 109 
4.4.2 SPI AC Timing Characteristics ···················································································································· 111 
4.4.3 I2S AC Timing Characteristics ···················································································································· 112 
4.4.4 I2C AC Timing Characteristics ···················································································································· 113 
4.4.5 MSDC AC Timing Characteristics ··············································································································· 115 
4.4.6 SIM AC Timing Characteristics ··················································································································· 120 
4.5 Clock Characteristics ············································································································································ 120 
5 Power On Sequence ··············································································································································· 122 
6 Boot Mode Configuration ······································································································································ 123 
6.1 Mode Selection ···················································································································································· 123 
6.2 Constant Tie Pins ·················································································································································· 123 
7 Package Information ·············································································································································· 124 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
7.1 Top Marking ························································································································································· 124 
7.2 Ordering Information ··········································································································································· 124 
7.3 Package Outlines ·················································································································································· 125 
8 Reference ······························································································································································ 126 
8.1 Reference Documents ·········································································································································· 126 
8.2 MT8668 Companion Chips ··································································································································· 126 
Exhibit 1 Terms and Conditions ······································································································································ 129 
 
  
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
List of Figures 
Figure 1-1. MT8668 functional block diagram ························································································································· 10 
Figure 1-2. MT8668 power domain ·········································································································································· 11 
Figure 4-1. LPDDR5 WCK VIX definition ································································································································· 109 
Figure 4-2. LPDDR5 single-ended output slew-rate definition ······························································································· 109 
Figure 4-3. LPDDR5 differential output slew-rate definition ·································································································· 110 
Figure 4-4. LPDDR5 RX mask ·················································································································································· 110 
Figure 4-5. SPI timing diagram ··············································································································································· 111 
Figure 4-6. I2S master mode timing diagram ························································································································· 112 
Figure 4-7. I2C AC timing diagram of F/S mode ····················································································································· 113 
Figure 4-8. I2C AC timing diagram of HS mode ······················································································································ 114 
Figure 4-9. MSDC device input timing diagram of default speed ··························································································· 115 
Figure 4-10. MSDC device input timing diagram of default speed ························································································· 115 
Figure 4-11. MSDC device input timing diagram of high speed ····························································································· 116 
Figure 4-12. MSDC device output timing diagram of high speed··························································································· 116 
Figure 4-13. MSDC device clock timing diagram of SDR12/SDR25/SDR50/SDR104 mode  ···················································· 117 
Figure 4-14. MSDC device input timing diagram of SDR50/SDR104 mode ············································································ 117 
Figure 4-15. MSDC device output timing diagram of fixed data window (SDR12/SDR25/SDR50) ········································· 117 
Figure 4-16. MSDC device output timing diagram of variable window (SDR104) ·································································· 118 
Figure 4-17. MSDC device clock timing diagram of DDR50 speed mode ··············································································· 119 
Figure 4-18. MSDC device input/output timing diagram of DDR50 speed mode ·································································· 119 
Figure 7-1. MT8668 top marking ············································································································································ 124 
Figure 7-2. Outlines and dimensions of TFBGA 12.05 mm x 13.1 mm, 1084-ball, 0.35 mm pitch package ··························· 125 
 
List of Tables 
Table 1-1. MT8668 highlighted features ·································································································································· 12 
Table 2-1. MT8668 pin types ···················································································································································· 17 
Table 3-1. Pin map view ··························································································································································· 22 
Table 3-2. MT8668 pin descriptions ········································································································································· 23 
Table 4-1. Absolute maximum ratings for ambient temperature ··························································································· 100 
Table 4-2. Absolute maximum ratings for power supply ········································································································ 100 
Table 4-3. Thermal operating specification ···························································································································· 103 
Table 4-4. Recommended operating conditions for power supply ························································································ 103 
Table 4-5. X32K_IN DC electrical characteristics (DVDD18_IOBM = 1.8V) ············································································· 106 
Table 4-6. SPI DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) ··················································································· 106 
Table 4-7. I2S DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) ··················································································· 106 
Table 4-8. I2C/I3C DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) ············································································ 107 
Table 4-9. MSDC1 DC electrical characteristics (DVDD28_MSDC1 = 3V) ··············································································· 107 
Table 4-10. MSDC1 DC electrical characteristics (DVDD28_MSDC1 = 1.8V) ·········································································· 107 
Table 4-11. SIM DC electrical characteristics ·························································································································· 107 
Table 4-12. LPDDR5 AC timing parameter table of external memory interface ····································································· 110 
Table 4-13. SPI AC timing parameters ···································································································································· 111 
Table 4-14. I2S AC timing parameters ···································································································································· 112 
Table 4-15. I2C AC timing parameters for standard, fast, and fast mode plus ······································································· 113 
Table 4-16. I2C AC timing parameters for HS mode ··············································································································· 114 
Table 4-17. MSDC device AC timing parameters of default speed ························································································· 115 
Table 4-18. MSDC device AC timing parameters of high speed ····························································································· 116 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table 4-19. MSDC device AC timing parameters of SDR12/SDR25/SDR50/SDR104 mode ···················································· 118 
Table 4-20. MSDC device AC timing parameters of DDR50 speed mode ··············································································· 119 
Table 4-21. SIM AC timing parameters ··································································································································· 120 
Table 4-22. Clock squarer specifications ································································································································ 121 
Table 6-1. MT8668 mode selection ········································································································································ 123 
Table 6-2. MT8668 constant tie pin ········································································································································ 123 
Table 7-1. MT8668 ordering information ······························································································································· 124 
Table 8-1. MT8668 companion chips ····································································································································· 126 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 9

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
1 Introduction 
1.1 MT8668 Product Overview 
MT8668 device is a highly integrated and scalable automotive application processor with rich multimedia features and AI 
capabilities. The chip integrates latest Arm CPU with 4 big cores and 2 little dual-core complex, along with a powerful 
multi-standard video codec. Furthermore, an extensive set of interfaces is integrated for camera modules, external audio 
components, UFS/SD cards, and external modules. 
 
The Arm offers substantial computing power to support the latest open-source operating systems, as well as In-Vehicle-
Infotainment (IVI) and Cockpit Domain Controller (CDC) applications. The Arm provides adequate computing power for 
dedicated tasks, such as software-based graphic rendering and real-time operating system in critical execution 
environments. 
 
In addition, the SMMU with unique performance enhancements for hard real-time masters, integrated in MT8668, 
provides a straightforward hardware mechanism that minimizes the virtualization overhead of hypervisors. This is 
particularly beneficial when multiple operating systems coexist for various application domains, thus optimizing overall 
system performance. 
 
The MDLA in MT8668 is capable to address the latest AI trends in achieving maximum effective performance in AI-
multimedia, AI-gaming, AI-camera, and modern social video experiences. The MDLA is also aiming for ensuring the AI-
enhanced technologies to work sustainably for the maximum duration in various conditions. 
 
The multi-standard video codec in MT8668, supporting AV1, HEVC, AVC and more, offers advanced multimedia processing 
and multi-streaming audio and video capabilities. 
 
The chip supports rich automotive camera features, such as around view monitoring, back view monitoring, automotive 
driving recoding, and driver monitoring. These features can be employed via the maximum 8x video stream inputs with 
MIPI-CSI2, or Ethernet AVB inputs. The display interface (MIPI DSI) allows for the support of up to 4 display panels, further 
enhancing its usability in various automotive applications. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 10

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
Confidential B 
MT8668 Application Processor 
Technical Brief 
1.1.1 Functional Block Diagram 
 
MT8668
Connectivity
USB 3.0
SPI Master
PWM Channel
GPIO
I3C
I2C
SIM
JTAG
Modem
TDD/FDD
CAT18 LTE
Up to 4CC
UMTS DC-
HSPA+ R8+
BPI & RFFE
NR Sub6 3CC
5.14 Gbps
Quad Band
GSM/EDGE/GPRS
Wireless Connectivity
Application Processor
AP MCU Subsystem
L3-cache 2MB
DVFS
Multimedia
Display
MiraVision TM
Telltale OVL/checker
MIPI DSI
Graphics
Arm® Mali GPU
Camera
Image Signal Processor
Video
MT6685
RTC
DC XO
AUXADC
MT6363CHW
PMIC
AUXADC
MT6373CFW
PMIC
SPMI
MT6197
EDGE RF
WCDMA/C2K RF
LTE RF
NR (Sub-6G) RF
Debug
MT6637
Memory
MIPI CSI-2
VENC VDEC
AIQ IF
External Memory Interface
Memory Clock up to
LPDDR5X-7500 Internal Functions
Power Management
CKSYS
Boot Mode 
Configuration
26MHz Crystal
SIM Card 1/2
MSDC
UFS 3.1
Side-by-Side
LPDDR5X SDRAM
LPDDR5X
16-bit Width 2 Channels
RF MIPI
Wi-Fi
Timer Reset
Bluetooth
GNSS
Bluetooth
Wi-Fi
Arm® Cortex Core
I$ 64KB D$ 64KB
L2-cache 256KBUART
Audio
Modem Speech
Security
Arm® TrustZone® Security
SSR
SCP
GNSS
PCIE
SPI Slave
DPU (Display Unit)
Ethernet 
Switch
USB HUB
Neural Processing Unit
Mediatek MDLA
Arm® Cortex Dual Core 
Complex
I$
32KB
D$ 
32KB
L2-cache 128KB
D$ 
32KB
I$
32KB
 
Figure 1-1. MT8668 functional block diagram 
 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 11

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
Confidential B 
MT8668 Application Processor 
Technical Brief 
1.1.2 Power Domain 
MT8668
Connectivity
USB 3.0
SPI Master
PWM Channel
GPIO
I3C
I2C
SIM
JTAG
Modem
TDD/FDD
CAT18 LTE
Up to 4CC
UMTS DC-
HSPA+ R8+
BPI & RFFE
NR Sub6 3CC
5.14 Gbps
Quad Band
GSM/EDGE/GPRS
Wireless Connectivity
Application Processor
AP MCU Subsystem
L3-cache 2MB
DVFS
Multimedia
Display
MiraVision TM
Telltale OVL/checker
MIPI DSI
Graphics
Arm® Mali GPU
Camera
Image Signal Processor
Video
MT6685
RTC
DC XO
AUXADC
MT6363CHW
PMIC
AUXADC
MT6373CFW
PMIC
SPMI
MT6197
EDGE RF
WCDMA/C2K RF
LTE RF
NR (Sub-6G) RF
Debug
MT6637
Memory
MIPI CSI-2
VENC VDEC
AIQ IF
External Memory Interface
Memory Clock up to
LPDDR5X-7500 Internal Functions
Power Management
CKSYS
Boot Mode 
Configuration
26MHz Crystal
SIM Card 1/2
MSDC
UFS 3.1
Side-by-Side
LPDDR5X SDRAM
LPDDR5X
16-bit Width 2 Channels
RF MIPI
Wi-Fi
Timer Reset
Bluetooth
GNSS
Bluetooth
Wi-Fi
Arm® Cortex Core
I$ 64KB D$ 64KB
L2-cache 256KBUART
Audio
Modem Speech
Security
Arm® TrustZone® Security
SSR
SCP
GNSS
PCIe
SPI Slave
DPU (Display Unit)
Ethernet 
Switch
USB HUB
Neural Processing Unit
Mediatek MDLA
Arm® Cortex Dual Core 
Complex
I$
32KB
D$ 
32KB
L2-cache 128KB
D$ 
32KB
I$
32KB
1
5
6
7
8
9
10
11
14
15
16
17
2
3
4
13
12
18
 
Figure 1-2. MT8668 power domain 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
1. Arm Big Subsystem   7. Peripheral Subsystem   14. General-Purpose I/O 
CPU DVDD_PROC_B   Core DVDD_CORE   GPIO DVDD_SRAM_CORE 
L2 cache DVDD_PROC_B   SRAM DVDD_SRAM_CORE   
  
DVDD12_IOBM_MIPI 
SRAM DVDD_SRAM_PROC_B   
Analog 
AVDD08_DRV_DSI   DVDD12_IORT_HS 
Analog AVDD15_PROC   AVDD12_DSI   DVDD18_IOLM 
      AVDD15_DSI   DVDD18_IOBM_MIPI 
2. Arm Little Subsystem   AVDD12_CSI   DVDD18_IOBM 
CPU DVDD_PROC_L   AVDD12_UFS   DVDD18_IORB 
L2 cache DVDD_PROC_L   AVDD15_UFS   DVDD18_IORT 
L3 cache DVDD_PROC_L   AVDD12_USB   DVDD18_IORT_HS 
SRAM DVDD_SRAM_PROC_L   AVDD15_USB       
Analog AVDD15_PROC   AVDD33_USB   15. MSDC   
      AVDD12_SSUSB_P1   I/O DVDD15_MSDC1 
3. GPU 
Subsystem     AVDD15_SSUSB_P1     DVDD28_MSDC1 
GPU DVDD_GPUSTACK   AVDD12_PCIE       
L2 cache DVDD_GPUSTACK   AVDD15_PCIE   16. SIM   
SRAM DVDD_SRAM_GPUSTACK         I/O DVDD15_SIM 
Analog AVDD12_GPUPLL   8. Wireless Connectivity Subsystem     DVDD28_SIM1 
AVDD15_GPUPLL   Core DVDD_CORE     DVDD28_SIM2 
      SRAM DVDD_SRAM_CORE       
4. NPU 
Subsystem     Analog AVDD12_WBG   17. Clock   
NPU DVDD_NPU   Analog AVDD15_WBG   Analog AVDD12_CKBUF_UFS 
L2 cache DVDD_NPU           AVDD12_PLL 
SRAM DVDD_SRAM_NPU   9. DISP       AVDD12_CKSQ 
Analog AVDD12_NPUPLL   Core DVDD_CORE     AVDD15_PLL 
AVDD15_NPUPLL   SRAM DVDD_SRAM_CORE     AVDD15_CKSQ 
                
5. MODEM Subsystem   10. ISP     18.  eFuse   
Core DVDD_MODEM   Core DVDD_MM   eFuse DVDD18_VQPS 
SRAM DVDD_SRAM_MODEM   SRAM DVDD_SRAM_MM       
Analog 
AVDD12_MDPLL         19. Others   
AVDD15_MDPLL   11. Audio     Core DVDD_CORE 
AVDD12_DRF   Core DVDD_CORE   SRAM DVDD_SRAM_CORE 
AVDD15_DRF   SRAM DVDD_SRAM_CORE       
                
6. DDR 
Subsystem     12. Security       
PHY 
AVDD12_EMI   Core DVDD_CORE       
AVDD15_EMI   SRAM DVDD_SRAM_CORE       
AVDD075_EMI0/1             
AVDDQ_EMI0/1   13. SCP         
VDD2H_EMI   Core DVDD_SRAM_SCP       
EMI DVDD_CORE   SRAM DVDD_SRAM_SCP       
DRMAC DVDD_CORE             
SRAM DVDD_SRAM_CORE             
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 12

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
1.1.3 Highlighted Features 
Table 1-1. MT8668 highlighted features 
MT8668 Capability 
Security 
Chip-Level Features • Arm® Trust Zone Security 
Crypto Engine  
• Scalable Security Root (SSR) 
– The SSR, the MediaTek's unified crypto engine IP , provides cryptographic 
functions for various products. 
– All crypto engines with anti-SCA 
– Pure hardware key protection 
– FIPS-140-3 ready for certification  
– Security IP/feature  
– Common crypto core  
▪ SHA1-3 family/SM3 
▪ AES/TDES/DES/SM4 crypto memory to memory engine 
– Pure hardware KDF  
▪ HKDF/KBKDF/AMHK 
– NIST SP800-90C TRNG (HMAC_DRBG base) 
– MTK-RSA/ECC 
▪ RSA 1024-8192 
▪ ECC NIST P192-P521 
▪ SM2 
– PQC 
▪ ML-DSA-44/65/87 
▪ ML-KEM-512/768/1024 
Application Processor 
AP MCU 
• Armv8.2 DSU with below configuration 
– 2 Arm® dual-core complex with 2 32 KB L1 I-Cache, 32 KB L1 D-Cache and 128 
KB L2 Cache.  
– 4 Arm® cores with 64 KB L1 I-Cache, 64 KB L1 D-Cache and 256 KB L2 Cache.  
– Shared 2MB L3 Cache 
• DVFS technology supports for each core and DSU 
GPU 
• Arm Mali GPU 
• Per core capable of processing pixel rate 4M pixels per MHz, bi-linear texture rate 
8M texels per MHz 
• OpenGL ES 3.2/3.1/3.0/2.0/1.1 
• Vulkan 1.3 
• OpenCL up to 3.0 
• Supports raytracing. 
• Supports Variable Ray Shading (VRS). 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 13

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table 1-1. MT8668 highlighted features (continued) 
MT8668 Capability 
Neural Processing Unit 
• NPU memory subsystem 
– DMA engine for data movement and data format conversion, image scaling and 
rotation 
• MediaTek Deep Learning Accelerator (MDLA) to support NN applications with high 
performance and high-power efficiency 
– Top performance: 8(A)x4(W) 12.5 TOPS, 8(A) x 8(W) 12.5 TOPS, 16(A) x 8(W) 6.2 
TOPS, 16(A) x 16(W) 3.1 TOPS, FP16/BF16 3.1 TOPS 
– Supports layer based mixed precision 
– Simultaneous pipelined hardware function block 
(CONV/ACT/POOL/EWE/BILINEAR) 
– Supports Argmax 
– Enhancement of layer fusion to further reduce DRAM/TCM memory bandwidth 
– Enhancement of non-CONV OP performance 
– Supports Android NN asymmetric quantized data format 
• Supports weight decompression to reduce DRAM bandwidth 
SCP • MediaTek MRV55 
• Built-in 1.25 MB Tightly Coupled Memory (TCM) 
Modem 
NR sub6 3CC 5.14 Gbps 
• Max. downlink bandwidth 3CC (220 M) (5.14 Gbps)  
• Max. uplink bandwidth 2CC (200 M) (2.5 Gbps)  
• Supports downlink 256 QAM/uplink 256 QAM.  
• Supports downlink MIMO 4x4/uplink MIMO 2x2. 
LTE Cat18  
Up to 4CC 
• Downlink Cat18, 1.2 Gbps  
• Uplink Cat18, 211 Mbps 
• Supports downlink 256 QAM/uplink 256 QAM. 
UMTS  
DC-  
HSPA+  
R8+ 
• 3G modem supports most main features in 3GPP Release 7 and Release 8.  
• Uplink Cat. 7 (16 QAM) throughput up to 11.5 Mbps  
• Downlink Cat. 24 (64 QAM, dual-cell HSDPA) throughput up to 42.2 Mbps 
BPI & RFFE Baseband Parallel Interface (BPI) and MIPI RFFE interface with programmable driving 
strength multi-band 
Quad Band GSM/EDGE/GPRS GSM quad vocoders for Adaptive Multi-Rate (AMR), Enhanced Full Rate (EFR), Full Rate 
(FR) and Half Rate (HR) 
Memory 
External Memory Interface 
(EMI) 
• LPDDR5 
• Maximum DRAM capacity: 24 GB 
• Two channels, each having a 16-bit DQ bus 
• Eight AXI subordinate interfaces 
• One AXI manager interface 
• Proprietary arbitration mechanism 
• Page-based memory protection 
• Customized QoS schemes 
• Resource monitors 
• Protocol checkers 
UFS Supports UFS 3.1 2-lane and data rate up to 23.296 Gbps. 
 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 14

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table 1-1. MT8668 highlighted features (continued) 
MT8668 Capability 
Multimedia 
Display 
• Display1: (1920x1080@60 + 1920x1080@60) 
• Display2: (1920x1080@60 + 1920x1080@60) 
• MiraVisionTM for picture quality enhancement 
• MIPI DSI transmitter with D-PHY 4+4 lanes, or C-PHY 3+3 trios 
• Embedded LCD gamma correction 
• True 10-bit colors 
• 8 overlay layers with per-pixel alpha channel and gamma table 
• 2 overlay layers which should be used on telltale 
• Spatial and temporal dithering 
• Color enhancement 
• Adaptive contrast enhancement 
• Image/video/graphic sharpness enhancement 
• Dynamic backlight scaling 
• Supports GPU decoder (AFBC). 
• Supports DSC compression. 
Camera 
• Multi-camera (8*YUV Sensor + 1*DP2CSI) 
− SVM [2.1 MP + 2.1 MP + 2.1 MP + 2.1 MP] @ 30 fps 
− RVM [2.1 MP] @ 60 fps 
− DMS [2.1 MP] @ 30 fps 
− OMS [2.1 MP] @ 30 fps 
− Dashcam (DVR) [2.1 MP] @ 30 fps 
− DP2CSI [2.1 MP] @ 30 fps 
• Support YUV 422 8/10/12 bit & RGB888 input 
• 4 MIPI CSI-2 high-speed camera serial interfaces; maximum of 4 data lanes of D-
DHY; maximum of 3 trios of C-PHY 
Video 
• Video decoder (VDEC)  
− AV1 decoder: 
▪ 4K2K@30 fps/100 Mbps, 8/10bits 
− HEVC decoder:  
▪ Main profile 4K2K@30 fps/100 Mbps, 8bits 
▪ Main 10 profile 4K2K@30 fps/100 Mbps, 10bits 
− VP9 decoder:  
▪ Profile 0 4K2K@30 fps/100 Mbps, 8bits 
▪ Profile 2 4K2K@30 fps/100 Mbps, 10bits 
− AVC decoder:  
▪ Constrained baseline 4K2K@30 fps/100 Mbps, 8bits 
▪ Main/high profile 4K2K@30 fps/100 Mbps, 8bits 
▪ Progressive high 10 profile 4K2K@30 fps/100 Mbps, 10bits 
− HEIF decoder:  
▪ Maximum resolution 16,383×16,383, 8/10bits 
• Video encoder (VENC) 
− H.264 encoder: 8-bit high profile 3,840×2,160@30 fps, 100 Mbps 
− HEVC encoder: 10-bit main profile 3,840×2,160@30 fps, 100 Mbps 
− HEIF encoder: Supported maximum resolution aligns image specification 
 
  
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 15

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table 1-1. MT8668 highlighted features (continued) 
MT8668 Capability 
Audio 
Audio System 
• Audio playing 
− Supports 8/11.025/12/16/22.05/24/32/44.1/48/96/192/384 kHz sampling rate 
playback.  
− Supports stereo audio playback. 
− Supports 3-channel playing with MT6368. 
• Audio recording 
− Supports 8/16/32/48/96/192 kHz sampling rate recording. 
− Supports recording stereo data. 
− Supports 3-channel recording with MT6369 or maximum 4-channel one-wire 
DMIC on the AP.  
• Speech 
− Supports 2 MICs. 
− Supports 8/16/32/48 kHz sampling rate recording. 
− Supports side tone filter. 
Audio System 
• I2S 
− Supports clock master and data input mode. 
− Supports clock master and data output mode. 
− Supports 16/24/32-bit stereo data. 
− Supports 8/11.025/12/16/22.05/24/32/44.1/48/88.2/96/176.4/192/384 kHz 
sampling rate in I2S output master mode. 
− Supports 8/11.025/12/16/22.05/24/32/44.1/48/88.2/96/176.4/192 kHz 
sampling rate in I2S input master mode. 
• Supports EIAJ/I2S format. 
Modem Speech • Speech codec 
• Cellular text telephone modem (CTM) 
Connectivity 
USB • USB 3.0 DRD 
MSDC • Port 1: SD/SDIO 3.0 
UFS • UFS 3.1 2-lane 
SPI • 8 SPI masters for external devices 
• Master mode only 
PWM • Max. 4 PWM channels (depending on system configuration and I/O usage) 
UART • 3 UARTs for debug and general application 
I2C/I3C 
• 13 I2Cs 
• 7 I3Cs 
• To control peripheral devices, e.g., CCM power, flash driver, audio amplifier, and 
OIS driver. 
DISP_PWM • 2 DISP_PWM 
• 4096 steps 
GPIO • The number of GPIO ports is 199. 
SIM • 1.8V/3V SIM cards using external level shifter 
• Supports output 20 MHz clock 
JTAG • JTAG for debugging and applications 
PCIe • PCIe Gen3 1-lane 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 16

Introduction 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Table 1-1. MT8668 highlighted features (continued) 
MT8668 Capability 
Wireless Connectivity 
Wi-Fi  
• Wi-Fi 6E and backward compatible to legacy Wi-Fi spec (Wi-Fi 5/4) 
• Supports dual band (2.4 & 5~6 GHz band) 
• 2x2/1x1 with 80 MHz bandwidth, depending on companion connectivity chip 
capability  
• Integrated 2.4 GHz & 5GHz PA/LNA 
• Joint-TAS 2.0 
• Antenna grouping 
• Security: 
− WPA personal/enterprise 
− WPA2 personal/enterprise 
− WPA3 personal/enterprise 
− WPS2.0 
− WPI-SMS4 
− WAPI (hardware) 
Bluetooth • BT5.4+ BLE Audio 
GNSS 
• GPS L1CA + L5 
• BeiDou B1I + B2a 
• Glonass L1OF 
• Galileo E1 + E5a 
• QZSS L1CA + L1CB + L5 
• NavIC N1 + N5 
Process and Package 
Digital Die 4 nm process 
Package TFBGA 
Package Size 12.05 x 13.1 x 1.065 mm 
Companion Chips See Section 8.2. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 17

Terms and Abbreviations 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
2 Terms and Abbreviations 
2.1 Naming Convention 
Table 2-1. MT8668 pin types 
Abbreviation Description 
AI Analog input 
AO Analog output 
AIO Analog bi-direction 
DI Digital input 
DO Digital output 
DIO Digital bi-direction 
P Power 
G Ground 
 
2.2 Abbreviations 
Abbreviation Description 
AE Auto Exposure 
AF Auto Focus 
AFBC Arm Frame Buffer Compression 
AMR Adaptive Multi-Rate  
AWB Auto White Balance 
BPI Baseband Parallel Interface 
BW Bandwidth 
CC Closed Captioning; or Component Carrier 
CDMA Coda Division Multiple Access 
CMD Command 
CMOS Complementary Metal-Oxide Semiconductor 
CSI Camera Serial Interface 
CSI-2 Camera Serial Interface 2 
CTM Cellular Text Telephone Modem 
DB Decibel 
DBDC Dual Band Dual Concurrent 
DDR Double Data Rate 
DL Downlink 
DLA Deep Learning Accelerator 
DMA Direct Memory Access 
DMIC Digital Microphone Interface Controller 
DRAM Dynamic Random-Access Memory 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 18

Terms and Abbreviations 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Abbreviation Description 
DSC Display Stream Compression 
DSI Display Serial Interface 
DSU Data Service Unit 
EC Entropy encoding 
EDGE Enhanced Data Rates for GSM Evolution 
EFR Enhanced Full Rate 
EMI Electromagnetic Interference; External Memory Interface 
ESD Electrostatic Discharge 
EV-DO Evolution-Data Optimized (Evolution-Data Only) 
EVS Enhanced Voice Services 
FDD Frequency-Division Duplexing 
FPU Floating Point Unit 
FR Full Rate  
GPIO General-Purpose Input/Output 
GPRS General Packet Radio Service 
GPS Global Positioning System 
GPU Graphics Processing Unit 
GSM Global System for Mobile Communications 
HEVC High Efficiency Video Coding 
HFIF High Efficiency Image File 
HR Half Rate 
HSUPA High Speed Uplink Packet Access 
HWROT Hardware Root of Trust 
IPD Integrated Passive Devices 
KBKDF Key Based Key Derivation Function 
LCD Liquid Crystal Display 
LCM Liquid Crystal Module 
LDO Low Dropout 
LSC Land-Side Capacitors 
MC Motion Compensation 
MCIA MediaTek Confidentiality, Integrity, Anti-replay–Inline Cipher Engine 
ME Motion Estimation 
MIMO Multi-input Multi-Output 
MIPI Mobile Industry Processor Interface 
MISO Master in Slave Out 
MLCC Multilayer Ceramic Capacitors 
MOSI Master out Slave In 
MSDC Memory and SD Controller 
NavIC The NavIC or NAVigation with Indian Constellation is an autonomous regional satellite navigation 
system developed by Indian Space Research Organization (ISRO) 
NB Narrow Band 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 19

Terms and Abbreviations 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Abbreviation Description 
NN Neural Network 
NPU Neural Processing Unit 
NR New Radio 
PCIe Peripheral Component Interconnect Express; PCI Express 
PD 1. Pull Down; 
2. Phase Detection 
PLL Phase-Locked Loop 
PMIC Power Management IC 
PWM Pulse-Width Modulation 
QAM Quadrature Amplitude Modulation 
QHD Quarter High Definition 
QoS Quality of Service 
QSPI Queued Serial Peripheral Interface 
RC Root Complex 
RF Radio Frequency 
RFFE Radio Frequency Front-End 
ROM Read-Only Memory 
RTC Real-Time Clock 
SCK Serial Clock 
SCL Serial Clock Line 
SCP System Companion Processor 
SD Secure Digital 
SDA Serial Data 
SDIO Secure Digital Input/Output 
SLC System Level Cache 
SPI Serial Peripheral Interface  
SRAM Static Random-Access Memory 
SSR Scalable Security Root 
SWB Super-Wideband 
TCM Tightly Coupled Memory 
TDD Time Division Duplex; Time Division Duplexing 
TDM Time Division Multiplex; Time Division Multiplexing 
TQ Transform and Quantization 
UART Universal Asynchronous Receiver and Transmitter 
UFS Universal Flash Storage 
UL Uplink 
UMTS Universal Mobile Telecommunications System 
USB Universal Serial Bus 
VDC-M VESA Display Stream Compression-M 
VDEC Video Decoder 
VENC Video Encoder 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 20

Terms and Abbreviations 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
Abbreviation Description 
VPU Vision Processing Unit 
WB Wideband 
WBG Wi-Fi/Bluetooth/GPS  
WCG Wide-Color-Gamut 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 21

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
Confidential B 
MT8668 Application Processor 
 
Technical Brief 
3 Pin Information  
The MT8668 pin information is distributed as shown below. 
 
Section 3.1 The MT8668 pin map: Table 3-1 
The function groups for the MT8668 pin map are categorized as follows. 
  BT 
  CSI 
  DRF 
  DSI 
  EMI 
  DVSS 
  GNSS 
  GPIO 
  NC 
  Power 
  UFS 
  USB 
  XTAL_CLK 
   
Section 3.2 Lists all the pin descriptions. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 22

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
Confidential B 
MT8668 Application Processor 
Technical Brief 
3.1 MT8668 Pin Map 
 
Table 3-1. Pin map view 
1084 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34   
A NC_A1  NC_A2  EMI1_DQ8    EMI1_DQ11    EMI1_DQ13    EMI1_DQ1    EMI1_DQ0    
EMI1_CA
4 
  EMI1_CA0    EMI1_CA3    EMI0_CA1    EMI0_CA5    EMI0_DQ10    
EMI0_DQ
11  
  EMI0_DMI1    EMI0_DQ4    EMI0_DQ1    NC_A33  NC_A34  A 
B NC_B1  DVSS  DVSS  EMI1_DQ9  DVSS  EMI1_DQ12  DVSS  EMI1_DMI0  DVSS  
EMI1_DQ
3 
DVSS  EMI1_DQ2  DVSS  EMI1_CA2  DVSS  EMI1_CA1  DVSS  EMI0_CA3  DVSS  EMI0_CA0  DVSS  
EMI0_C
A6 
DVSS  EMI0_DQ8  DVSS  
EMI0_DQ
9 
DVSS  EMI0_DQ5  DVSS  EMI0_DQ3  DVSS  EMI0_DQ0  DVSS  NC_B34  B 
C EMI1_RDQ
S1_C  
EMI1_WCK1
_T  
DVSS  
EMI1_DQ1
0 
DVSS  DVSS  
EMI1_RDQS
0_T  
EMI1_WCK
0_T  
EMI1_DQ7  DVSS  EMI1_DQ5    
EMI1_CA
6 
NC   DVSS  NC DVSS  EMI0_CA4  DVSS  EMI0_DQ14    EMI0_WCK1_T  
EMI0_RDQS1_
C 
DVSS  DVSS  EMI0_DQ2  
EMI0_DMI
0 
EMI0_WCK0_
T 
EMI0_RDQ
S0_C  
EMI_RESET_N  DVSS  UFS_RX0N  UFS_RX0P  C 
D EMI1_RDQ
S1_T  
EMI1_WCK1
_C 
EMI1_DMI
1 
DVSS  EMI1_DQ14  DVSS  
EMI1_RDQS
0_C 
EMI1_WCK
0_C 
EMI1_DQ4  
EMI1_DQ
6 
NC NC 
EMI1_CA
5 
NC   DVSS  NC NC DVSS  NC DVSS  
EMI0_D
Q15 
EMI0_WCK1_C  
EMI0_RDQS1_
T 
DVSS  
EMI0_DQ
7 
EMI0_DQ6    
EMI0_WCK0_
C 
EMI0_RDQ
S0_T  
DVSS  UFS_RX1N  DVSS  DVSS  D 
E EMI_EXTR  DVSS  DVSS  DVSS  DVSS  EMI1_DQ15  DVSS  NC NC DVSS      DVSS  DVSS  EMI1_CK_T  EMI0_CK_T      EMI0_CA2    EMI0_DQ13  
EMI0_D
Q12 
DVSS  DVSS  DVSS    DVSS  DVSS  DVSS  DVSS  DVSS  UFS_RX1P  DVSS  
UFS_PLL_CKR
EF  
E 
F AVDD15_
WBG  
WF1_QP  WF1_IN  WF1_IP  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  EMI1_CS1  EMI1_CS0    DVSS  EMI1_CK_C  EMI0_CK_C  DVSS  EMI0_CS0  EMI0_CS1  DVSS      NC NC DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  UFS_RST_N  DVSS  F 
G   WF1_QN  DVSS  DVSS  WF0_IN  WF0_IP  DVSS  DVSS  DVSS  DVSS  DVSS        DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  UFS_TX1N  UFS_TX1P  DVSS  UFS_TX0N  UFS_TX0P  G 
H BT_IP  DVSS  DVSS  DVSS  WF0_QP  WF0_QN  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS    DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
AVDD15_PWR
GD  
DVSS  DVSS  DVSS  
AVDD12_CKBU
F_UFS  
UFS_REFCK
_OUT  
DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  H 
J BT_IN  BT_QP  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
AVDD15_E
MI  
                  DVSS  PWRGD_TRIM  AVDD15_UFS  DVSS      DVSS  DVSS  USB_DP  USB_DM  DVSS  CDM3P5A  CDM5P5A  J 
K   BT_QN  GL5_I  GL1_Q  GL1_I  DVSS  
AVDD12_W
BG 
DVSS  DVSS  DVSS    
AVDD12_E
MI  
AVDDQ_E
MI0  
AVDD075_E
MI0  
AVDDQ_EMI
0 
AVDD075_EMI0  DVSS  
AVDD075_E
MI1  
AVDDQ_EMI
1 
AVDD075_EMI
1 
AVDDQ_EMI1      AVDD12_UFS    DVSS  DVSS  
SSUSB_RX
N_P1  
SSUSB_RXP_P
1 
DVSS  DVSS  DVSS  
AVDD15_U
SB 
  K 
L DVSS  DVSS  GL5_Q  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  XIN_WBG              
VDD2H_E
MI  
          DVDD_CORE  DVSS    DVSS    DVSS  DVSS  
SSUSB_TXP
_P1  
SSUSB_TXN_P
1 
DVSS  
AVDD33_U
SB 
AVDD12_USB  L 
M PCIE_CKP  PCIE_CKN  DVSS  DVSS  DVSS  
PCIE_LN0_R
XP  
PCIE_LN0_R
XN  
DVSS  DVDD_CORE      
DVDD_COR
E 
  DVSS  
DVDD_SRAM
_CORE  
DVSS  
DVDD_COR
E 
DVSS  
DVDD_SRAM
_CORE  
DVSS  
DVDD_SRAM_
SCP 
DVSS  
DVDD_SRAM_
SCP 
  
DVDD_PR
OC_B  
DVSS  
DVDD_SRAM_
CORE_1  
DVSS    DVSS  DVSS  SPI7_CSB  SPI7_CK  
AVDD12_SSU
SB_P1  
M 
N DVSS  DVSS  DVSS  
PCIE_LN0_T
XN  
PCIE_LN0_T
XP  
DVSS  DVSS  DVSS  DVSS  DVSS  
CKM_XTAL_
CK 
DVSS  
DVDD_C
ORE 
  DVDD_CORE  DVSS  
DVDD_COR
E 
DVSS  
DVDD_PROC
_L  
DVSS  DVDD_PROC_L  DVSS  DVDD_PROC_L  DVSS  
DVDD_PR
OC_B  
DVSS    DVSS  SPI5_CSB  DVSS  DVSS  SPI7_MI  SPI7_MO  
AVDD15_SSU
SB_P1  
N 
P   
DVDD12_IO
RT_HS  
DVSS  DVSS  DVSS  DVSS  
AVDD12_PC
IE  
AVDD15_PC
IE  
DVSS  DVSS    
AVDD12_NP
UPLL  
  
DVDD_SRAM
_CORE  
  DVSS    DVSS  
DVDD_PROC
_L  
  DVDD_PROC_L  DVSS      
DVDD_PR
OC_B  
DVSS  DVSS  SPI5_MO  SPI5_MI  SPI5_CK  SPI6_MO  SPI6_MI  SPI6_CK  SPI6_CSB  P 
R CONN_TO
P_CLK  
CONN_TOP
_DATA  
CONN_W
B_PTA 
CONN_BT_
DATA 
CONN_BT_C
LK 
CONN_WF_
CTRL4  
DVSS  DVSS  
DVDD_SRA
M_NPU  
DVDD_NP
U 
AVDD15_NP
UPLL  
  
DVDD_C
ORE 
DVSS  DVDD_CORE  DVSS    
AVDD15_MC
UPLL  
TP_APPLLGP  AVDD15_PROC  
DVDD_SRAM_
PROC_L  
DVSS  DVDD_PROC_L  
DVDD_SRAM_
PROC_B  
DVDD_PR
OC_B  
DVSS    DVSS  SPI4_CK  SPI4_CSB  
DVDD18_IOL
M  
SPI4_MO  SPI4_MI    R 
T DVSS  ANT_SEL5  ANT_SEL6  ANT_SEL4  ANT_SEL3  
CONN_WF_
CTRL2  
CONN_WF_
CTRL3  
CONN_WF_
CTRL1  
DVSS  
DVDD_NP
U 
DVDD_NPU    DVSS  DVSS  DVDD_CORE  DVSS  
DVDD_COR
E 
AVDD12_MC
UPLL  
TN_APPLLGP    DVDD_PROC_L  DVSS  DVDD_PROC_L  DVSS  
DVDD_PR
OC_B  
DVDD_PR
OC_B  
DVDD_PROC_
B 
DVDD_PRO
C_B  
DVDD_PROC_
B 
DVSS  
DVDD_PROC_
B 
JTRSTN  JTCK  JTDO T 
U ANT_SEL2  DVSS  DVSS  ANT_SEL1  
DVDD18_IO
RT_HS  
CONN_WF_
CTRL0  
DVSS  DVSS  DVSS  
DVDD_NP
U 
DVSS  DVDD_NPU  
DVDD_NP
U 
DVDD_SRAM
_CORE  
    
DVDD_COR
E 
DVSS  
DVDD_PROC
_L  
DVSS  DVDD_PROC_L  DVSS    
DVDD_SRAM_
PROC_B  
DVDD_PR
OC_B  
DVSS  DVSS  DVSS  
DVDD_PROC_
B 
DVSS  
DVDD_PROC_
B 
SCL0  JTMS  JTDI  U 
V DVSS  
SCP_I2C_SD
A3 
ANT_SEL0  
CONN_HRS
T_B_2 
CONN_HRS
T_B  
GPS_L1_EL
NA_EN  
GPS_L5_EL
NA_EN  
  DVSS  
DVDD_NP
U 
DVSS  DVDD_NPU  DVSS  
DVDD_SRAM
_CORE  
DVDD_CORE  DVSS  
DVDD_COR
E 
DVSS  
DVDD_PROC
_L  
DVSS  DVDD_PROC_L  DVSS  DVDD_PROC_L  DVSS  DVSS    DVSS  DVSS  DVSS  DVSS  
DVDD_PROC_
B 
SDA0  SDA1  SCL1  V 
W SCP_I2C_S
DA0  
SCP_I2C_SD
A2 
SCP_I2C_S
CL3  
DVDD18_IO
RT 
SCP_I2C_SC
L2 
DVSS  
SCP_I2C_SC
L1 
SCP_I2C_SD
A1 
DVSS  
DVDD_NP
U 
DVSS      DVDD_CORE    DVSS    DVSS  
DVDD_PROC
_L  
DVDD_SRAM_
PROC_L  
DVDD_PROC_
B 
DVSS      
DVDD_PR
OC_B  
DVDD_PR
OC_B  
DVDD_PROC_
B 
DVDD_PRO
C_B  
DVDD_PROC_
B 
DVSS  
DVDD_PROC_
B 
EINT1  EINT2  EINT3  W 
Y SCP_I2C_S
CL0  
SCP_I2C_SD
A4 
SCP_I2C_S
CL4  
DVSS  
DVDD18_IO
RT 
I2S2_DO  I2S2_BCK  I2S2_DI  DVDD_CORE    DVSS  
DVDD_COR
E 
DVSS  
DVDD_SRAM
_CORE  
DVDD_CORE  
DVDD_SRAM_C
ORE 
DVDD_COR
E 
DVSS  AVDD15_PLL    
DVDD_PROC_
B 
DVSS  
DVDD_SRAM_
PROC_B  
DVSS  
DVDD_PR
OC_B  
DVSS  DVSS  DVSS  
DVDD_PROC_
B 
DVSS  
DVDD_PROC_
B 
EINT4  EINT5  
SYS_OCP_UV
LO_INT  
Y 
AA SCP_SPI2_
CK 
  
SCP_SPI2_
MO  
SCP_SPI2_C
SB 
SCP_SPI2_
MI  
DVSS  I2S2_MCK  I2S2_LRCK    
DVDD18_
VQPS  
      
DVDD_GPUS
TACK  
DVSS    DVSS    AVDD12_PLL  DVSS  
DVDD_PROC_
B 
DVSS  DVDD_PROC_B    
DVDD_PR
OC_B  
DVSS  AVDD15_CKSQ  X26M_IN 
AVDD12_CKS
Q 
DVSS  DVSS  DVSS  DVSS    AA 
AB SCP_SPI1_
CK 
SCP_SPI1_C
SB 
SCP_SPI1_
MO  
SCP_SPI1_
MI  
DVSS  DVSS  
SCP_I2C_SC
L5 
SCP_I2C_SD
A5 
  
DVDD_M
M  
DVSS  
DVDD_SRA
M_MM  
DVSS    DVSS  
DVDD_GPUSTAC
K 
DVSS    
DVDD_MOD
EM  
  
DVDD_MODE
M  
  
DVDD_MODE
M  
  
DVDD_M
ODEM  
DVSS  DVSS  DVSS  DVSS  
DSI0_CK0N
_T1C  
DSI0_CK0P_T
1B 
DSI0_D3N_
T3A 
DSI0_D3P_
T2C  
DSI0_D1N_T2
B 
AB 
AC DVSS  DVSS  
SCP_SPI0_
MO  
SCP_SPI0_
MI  
SCP_SPI0_C
K 
DVSS  
SCP_SPI3_
MI  
SCP_SPI3_
MO  
  
DVDD_M
M  
  DVDD_MM  
DVDD_M
M  
DVDD_GPUS
TACK  
DVSS  
DVDD_SRAM_G
PUSTACK  
DVSS  
DVDD_GPUS
TACK  
AVDD12_MD
PLL 
DVSS  
DVDD_MODE
M  
DVSS  
DVDD_SRAM_
MODEM  
DVSS      DVSS  
AVDD12_D
SI  
DVSS  
DSI0_D0N_
T1A 
DSI0_D0P_T0
C 
DSI0_D2P_
T0A 
DSI0_D2N_
T0B 
DSI0_D1P_T2
A 
AC 
AD DVSS  DVSS  DVSS  DVSS  DVSS  
SCP_SPI0_C
SB 
SCP_SPI3_C
K 
SCP_SPI3_C
SB 
  
DVDD_M
M  
DVSS  
DVDD_SRA
M_MM  
DVSS  
AVDD12_GP
UPLL  
DVSS  
DVDD_GPUSTAC
K 
DVSS    
AVDD15_MD
PLL 
DVDD_SRAM_
MODEM  
DVDD_MODE
M  
DVSS  
DVDD_MODE
M  
  
DVDD_M
ODEM  
DVSS  DVSS  DVSS    DVSS  DVSS  
DSI1_D3P_
T2C  
DSI1_D3N_
T3A 
DVSS  AD 
AE CAM_CLK1  CAM_CLK3  DVSS  DVSS  
NFC_CLK_R
EQ  
DVSS  DVSS    DVSS    
DVDD_SRA
M_MM  
DVDD_MM  DVSS  DVDD_CORE  
AVDD15_GP
UPLL  
DVDD_GPUSTAC
K 
DVSS    
DVDD_MOD
EM  
DVSS    DVSS    DVSS      DVSS  DVSS  
AVDD08_DRV
_DSI  
DSI1_CK0N
_T1C  
DSI1_CK0P_T
1B 
DVSS  
DSI1_D1P_
T2A 
DSI1_D1N_T2
B 
AE 
AF DVSS  DVSS  
CSI3A_L0P
_T0A  
CSI3A_L0N
_T0B  
DVSS  DVSS  DVSS    DVSS    DVSS  DVDD_MM    DVSS  DVSS  
DVDD_GPUSTAC
K 
DVSS  
DVDD_GPUS
TACK  
  DVSS  
DVDD_MODE
M  
  
DVDD_MODE
M  
DVSS  
DVDD_M
ODEM  
DVSS    
AVDD15_D
SI  
DVSS  
DSI1_D0N_
T1A 
DSI1_D0P_T0
C 
DSI1_D2P_
T0A 
DSI1_D2N_
T0B 
DVSS  AF 
AG CSI3A_L2N
_T1C  
CSI3A_L2P_
T1B 
CSI3A_L1N
_T1A  
DVSS  
CSI3A_L1P_
T0C  
DVSS  DVSS    DVSS    DVSS  DVDD_MM  DVSS  
DVDD_GPUS
TACK  
DVSS  
DVDD_SRAM_G
PUSTACK  
DVSS  
DVDD_GPUS
TACK  
DVDD_MOD
EM  
DVDD_SRAM_
MODEM  
DVDD_MODE
M  
DVSS  
DVDD_SRAM_
MODEM  
  
DVDD_M
ODEM  
DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
DRF_DL_LN3
_DN  
AG 
AH DVSS  
CSI3B_L0N_
T0B 
CSI3B_L0P
_T0A  
DVSS  DVSS  DVSS  DVSS    DVSS    DVDD_MM  
DVDD_SRA
M_MM  
DVSS    DVSS  
DVDD_GPUSTAC
K 
DVSS          DVSS  
DVDD_MODE
M  
DVSS    DVSS  DVSS  DVSS  DVSS  
DRF_DL_LN
2_DP  
DRF_DL_LN2_
DN 
DVSS  DVSS  
DRF_DL_LN3
_DP 
AH 
AJ DVSS  CSI3B_L1N  
CSI3B_L1P
_T0C  
CSI2A_L0N
_T0B  
CSI2A_L0P_
T0A 
DVSS  DVSS    DVSS      DVDD_MM  
DVDD_M
M  
DVDD_GPUS
TACK  
DVDD_GPUS
TACK  
DVDD_GPUSTAC
K 
DVSS  
DVDD_GPUS
TACK  
DVDD_MOD
EM  
DVSS    DVSS  
DVDD_MODE
M  
DVSS  
DVDD_M
ODEM  
DVSS  DVSS  
AVDD15_D
RF 
DVSS  DVSS  DVSS  
DRF_DL_L
N1_DP  
DRF_DL_LN
1_DN  
DVSS  AJ 
AK CSI2B_L0P
_T0A  
CSI2B_L0N_
T0B 
DVSS  
CSI2A_L1P_
T0C  
CSI2A_L1N_
T1A 
DVSS  DVSS    DVSS  
DVDD_M
M  
DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
DVDD_SRAM
_CORE  
DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
DVDD_M
ODEM  
DVSS  DVSS  DVSS  DRF_DL_CP  DRF_DL_CN  DVSS  DVSS  
DRF_DL_LN0
_DN  
AK 
AL CSI2B_L1P
_T0C  
CSI2B_L1N  
CSI2A_L2P
_T1B  
CSI2A_L2N
_T1C  
DVSS  DVSS  DVSS    DVSS  
DVDD_CO
RE 
                                DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  DVSS  
DRF_DL_LN0
_DP 
AL 
AM DVSS  
CSI1A_L0P_
T0A 
CSI1A_L0N
_T0B  
CSI1A_L1P_
T0C  
CSI1A_L1N_
T1A 
DVSS  DVSS  CAM_RST0  CAM_SDA7  
CAM_SDA
2 
URXD1  UTXD0  PERI_EN1  SIM2_SRST  SIM1_SCLK  SIM1_SRST  
SRCLKENA
0 
CHG_SCL5  SDA3  
AUD_DAT_MIS
O1 
AUD_DAT_MIS
O2 
  EINT9  INT_SIM2  EINT13  EINT15    DVSS  DVSS  DVSS  DVSS  
DRF_UL_C
N  
DRF_UL_CP  DVSS  AM 
AN DVSS  DVSS  DVSS  
CSI1A_L2P_
T1B 
CSI1A_L2N_
T1C  
DVSS  CAM_RST1  CAM_RST3  CAM_SCL7  
CAM_SCL
2 
UTXD1  URXD0  PERI_EN0  SIM2_SIO  SIM2_SCLK  SIM1_SIO  
WATCHDO
G 
CHG_SDA5  SCL3  
AUD_DAT_MO
SI1  
AUD_DAT_MO
SI2  
  INT_SIM1  EINT12  EINT14  
BPI_D_BU
S2 
BPI_D_BUS0  
SPMI_P_SC
L 
DVSS  
DRF_UL_LN
1_DN  
DRF_UL_LN1_
DP  
DVSS  DVSS  AVDD12_DRF  AN 
AP CSI1B_L0P
_T0A  
CSI1B_L0N_
T0B 
CSI1B_L1P
_T0C  
DVSS  
CSI0B_L1P_
T0C  
CSI0B_L1N  DVSS  CAM_RST2  CAM_SDA4  
DVDD18_
IORB  
SCL10  TESTMODE  PERI_EN2  PERI_EN3  
MSDC1_CM
D  
EINT_CHG_IRQB  
DVDD28_
MSDC1  
DVSS  DVSS  DVDD18_IOBM  
DVDD18_IOB
M  
X32K_I
N  
DVSS  EINT11  DVSS  
BPI_D_BU
S3 
BPI_D_BUS1  
SPMI_P_SD
A 
  DVSS  DVSS  DVSS  
DRF_UL_LN
0_DP  
DVSS  AP 
AR DVSS  CSI1B_L1N  
CSI0A_L0P
_T0A  
CSI0B_L0P_
T0A 
CSI0B_L0N_
T0B 
DVSS  DVSS  DVSS  CAM_SDA9  SCL12  SDA10  SYSRSTB  PERI_EN4  
DVDD18_ESI
M  
MSDC1_DAT
0 
KPCOL0  
DVDD15_
MSDC1  
SCL6  
AUD_DAT_M
OSI0  
AUD_SYNC_M
OSI  
I2S1_BCK  DSI_TE  PWM_OUT  EINT10  
BPI_D_BU
S7 
BPI_D_BU
S4 
DIGRF_IRQ  
MIPI1_D_S
DATA 
DVDD18_IOB
M_MIPI  
DVSS  DVSS  DVSS  
DRF_UL_LN
0_DN  
DVSS  AR 
AT NC_AT1  
CSI0A_L0N_
T0B 
CSI0A_L1P
_T0C  
DVSS  DVSS  DVSS  CAM_CLK0  CAM_SCL8  CAM_SCL9  
CAM_SCL
4 
SDA11  AP_GOOD  
DVDD28_
SIM2  
PERI_EN5  
MSDC1_DAT
1 
MSDC1_DAT3  
SCP_VREQ
_VAO  
SDA6  
AUD_NLE_M
OSI0  
AUD_NLE_MO
SI1  
I2S1_DO  
I2S1_M
CK 
LCM_RST  EINT6  
BPI_D_BU
S9 
BPI_D_BU
S6 
SPMI_M_SCL  
MIPI1_D_S
CLK 
MIPI0_D_SCL
K 
MIPI0_D_S
DATA 
DVDD12_IOB
M_MIPI  
DVSS  DVSS  NC_AT34  AT 
AU NC_AU1  NC_AU2  
CSI0A_L1N
_T1A  
CSI0A_L2P_
T1B 
CSI0A_L2N_
T1C  
AVDD12_CS
I 
CAM_CLK2  CAM_SDA8    SDA12  SCL11    
DVDD12_
ESIM 
DVDD28_SI
M1 
MSDC1_CLK  MSDC1_DAT2  
DVDD15_SI
M  
  
AUD_DAT_M
ISO0  
AUD_CLK_MOS
I 
I2S1_DI  
I2S1_LR
CK 
EINT8  EINT7  
BPI_D_BU
S8 
BPI_D_BU
S5 
SPMI_M_SDA  
MIPI2_D_S
CLK 
MIPI2_D_SDA
TA  
MIPI_M_SC
LK 
MIPI_M_SDA
TA  
MD_UCNT  NC_AU33  NC_AU34  AU 
  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34   
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 23

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
Confidential B 
MT8668 Application Processor 
Technical Brief 
3.2 MT8668 Pin Descriptions 
Table 3-2. MT8668 pin descriptions 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
System 
SYSRSTB AR12 DI System reset input DVDD18 PD I 
    
    
TESTMODE AP12 DI Test mode DVDD18 PD I 
    
    
AP_GOOD AT12 DIO 
When bootrom can normally jump 
into pre-loader execution (i.e., 
software can take over), bootrom 
makes AP_GOOD high before jumping 
DVDD18 PD OL 
B:GPIO17 0 
O:AP_GOOD 1 
O:GPS_PPS 4 
O:AGPS_SYNC 6 
X32K_IN AP22 DIO RTC 32K input DVDD18 PD I 
B:GPIO187 0 
I0:RTC32K_CK 1 
NFC_CLK_REQ AE5 DIO Clock request input pin for NFC DVDD18 PD I 
B:GPIO52 0 
I0:SRCLKENAI
0 1 
O:DISP_PWM
1 3 
I0:SPM_JTAG
_TRSTN_VLP 4 
I0:CONN_BGF
_MCU_TRST_
B 
5 
O:SPMI_M_T
RIG_FLAG 6 
SRCLKENA0 AM17 DIO 
Output signal; control 26 Hz/Buck/LDO 
normal mode or sleep mode. (High: 
normal mode; low: sleep mode or low 
power mode) 
DVDD18 PU OH 
B:GPIO184 0 
O:SRCLKENA0 1 
WATCHDOG AN17 DIO Watchdog reset output DVDD18 PD OL B:GPIO186 0 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 24

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:WATCHDO
G 1 
EINT_CHG_IRQ
B AP16 DIO External interrupt input for Charger  DVDD18 PD I 
B:GPIO0 0 
O:DISP_ERRO
R0 2 
EINT1 W32 DIO External interrupt input DVDD18 PD I 
B:GPIO1 0 
O:TSFDC_EN 6 
I1:UFS_MPHY
_SCL 7 
EINT2 W33 DIO External interrupt input DVDD18 PD I 
B:GPIO2 0 
O:USB_DRVV
BUS 1 
O:DISP_ERRO
R1 2 
O:TSFDC_TSS
EL0 6 
B1:UFS_MPH
Y_SDA 7 
EINT3 W34 DIO External interrupt input DVDD18 PD I 
B:GPIO3 0 
I1:IDDIG 1 
O:TSFDC_TSS
EL1 6 
EINT4 Y32 DIO External interrupt input DVDD18 PD I 
B:GPIO4 0 
I0:VBUSVALID 1 
O:CONN_TCX
OENA_REQ 4 
O:TSFDC_TSS
EL2 6 
EINT5 Y33 DIO External interrupt input DVDD18 PD I 
B:GPIO5 0 
B1:KPROW0 1 
O:GPS_PPS 6 
EINT6 AT24 DIO External interrupt input DVDD18 PD I 
B:GPIO6 0 
O:DISP_PWM 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 25

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I1:UCTS2 4 
O:TSFDC_VCO
_RST 6 
EINT7 AU24 DIO External interrupt input DVDD18 PD I 
B:GPIO7 0 
O:DISP_PWM
1 1 
I0:I2SIN_DMA
0_DI3 2 
O:URTS2 4 
O:TSFDC_RCK
_SELB 6 
EINT8 AU23 DIO External interrupt input DVDD18 PD I 
B:GPIO8 0 
I0:DSI_TE1 1 
EINT9 AM23 DIO External interrupt input DVDD18 PD I 
B:GPIO9 0 
O:LCM_RST1 1 
O:SPMI_P_TRI
G_FLAG 6 
O:DBG_MON
_B0 7 
EINT10 AR24 DIO External interrupt input DVDD18 PD I 
B:GPIO10 0 
O:BPI_BUS10 1 
O:CONN_BPI_
BUS10 2 
O:CONN_TCX
OENA_REQ 4 
O:DBG_MON
_B1 7 
EINT11 AP24 DIO External interrupt input DVDD18 PD I 
B:GPIO11 0 
O:BPI_BUS11 1 
O:CONN_BPI_
BUS11_OLAT
0 
2 
O:HFRP_URTS
1 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 26

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DBG_MON
_B2 7 
EINT12 AN24 DIO External interrupt input DVDD18 PD I 
B:GPIO12 0 
O:BPI_BUS12 1 
O:CONN_BPI_
BUS12_OLAT
1 
2 
O:ANT_SEL18 3 
O:CLKM0 4 
I1:HFRP_UCTS
1 5 
O:DBG_MON
_B3 7 
EINT13 AM25 DIO External interrupt input DVDD18 PD I 
B:GPIO13 0 
O:BPI_BUS13 1 
O:CONN_BPI_
BUS13_OLAT
2 
2 
O:ANT_SEL19 3 
O:CLKM1 4 
O:DBG_MON
_B4 7 
EINT14 AN25 DIO External interrupt input DVDD18 PD I 
B:GPIO14 0 
O:BPI_BUS14 1 
O:CONN_BPI_
BUS14_OLAT
3 
2 
O:ANT_SEL20 3 
O:CLKM2 4 
O:DBG_MON
_B5 7 
EINT15 AM26 DIO External interrupt input DVDD18 PD I 
B:GPIO15 0 
O:BPI_BUS15 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 27

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 27 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:CONN_BPI_
BUS15_OLAT
4 
2 
O:ANT_SEL21 3 
O:CLKM3 4 
O:DBG_MON
_B6 7 
SYS_OCP_UVL
O_INT Y34 DIO HWPT interrupt input DVDD18 PU I 
B:GPIO198 0 
I0:MCU_PMIC
_POC_I 1 
X26M_IN AA28 AI 26M clock input AVDD12_CKSQ         
PMIC 
AUD_CLK_MO
SI AU20 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO188 0 
O:AUD_CLK_
MOSI 1 
O:AUD_CLK_
MOSI 3 
AUD_SYNC_M
OSI AR20 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO189 0 
O:AUD_SYNC
_MOSI 1 
I0:I2SIN_DMA
0_BCK 4 
O:DBG_MON
_B25 7 
AUD_DAT_MO
SI0 AR19 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO190 0 
O:AUD_DAT_
MOSI0 1 
O:AUD_DAT_
MOSI0 3 
O:DBG_MON
_B26 7 
AUD_DAT_MO
SI1 AN20 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO191 0 
O:AUD_DAT_
MOSI1 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 28

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 28 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:AUD_DAT_
MOSI1 3 
O:DBG_MON
_B27 7 
AUD_DAT_MO
SI2 AN21 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO191 0 
O:AUD_DAT_
MOSI1 1 
O:AUD_DAT_
MOSI1 3 
O:DBG_MON
_B27 7 
AUD_DAT_MO
SI2 AN21 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO192 0 
O:AUD_DAT_
MOSI2 1 
I0:I2SIN_DMA
0_LRCK 4 
O:DBG_MON
_B28 7 
AUD_NLE_MO
SI0 AT19 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO193 0 
O:AUD_NLE_
MOSI0 1 
I0:AUD_SYNC
_MISO 2 
I0:I2SIN_DMA
0_DI 4 
AUD_NLE_MO
SI1 AT20 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO194 0 
O:AUD_NLE_
MOSI1 1 
I0:AUD_CLK_
MISO 2 
I0:I2SIN_DMA
0_DI1 4 
AUD_DAT_MIS
O0 AU19 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO195 0 
I0:AUD_DAT_
MISO0 1 
I0:VOW_DAT
_MISO 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 29

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 29 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I0:AUD_DAT_
MISO0 3 
O:DBG_MON
_B29 7 
AUD_DAT_MIS
O1 AM20 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO196 0 
I0:AUD_DAT_
MISO1 1 
I0:VOW_CLK_
MISO 2 
I0:AUD_CLK_
MISO 3 
I0:I2SIN_DMA
0_DI2 4 
O:DBG_MON
_B30 7 
AUD_DAT_MIS
O2 AM21 DIO PMIC audio input interface DVDD18 PD I 
B:GPIO197 0 
I0:AUD_DAT_
MISO2 1 
I0:AUD_DAT_
MISO1 3 
I0:I2SIN_DMA
0_DI3 4 
O:DBG_MON
_B31 7 
SPMI_M_SCL AT27 DIO PMIC SPMI control interface DVDD18 NP I 
B:GPIO180 0 
B0:SPMI_M_S
CL 1 
SPMI_M_SDA AU27 DIO PMIC SPMI control interface DVDD18 NP I 
B:GPIO181 0 
B0:SPMI_M_S
DA 1 
SPMI_P_SCL AN28 DIO PMIC SPMI control interface DVDD18 NP I 
B:GPIO182 0 
B0:SPMI_P_S
CL 1 
SPMI_P_SDA AP28 DIO PMIC SPMI control interface DVDD18 NP I 
B:GPIO183 0 
B0:SPMI_P_S
DA 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 30

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 30 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
SIM  
SIM1_SCLK AM15 DIO SIM1 clock, PMIC interface DVDD28_SIM1 PD I 
B:GPIO174 0 
O:MD1_SIM1
_SCLK 1 
I0:TSFDC_26
M 6 
SIM1_SRST AM16 DIO SIM1 data, PMIC interface DVDD28_SIM1 PD I 
B:GPIO175 0 
O:MD1_SIM1
_SRST 1 
I1:HFRP_JTAG
0_TCK 2 
I1:MCUPM_JT
AG_TCK 3 
I0:APU_JTAG_
TCK 4 
I0:CONN_DSP
_L5_JCK 5 
O:TSFDC_SDO 6 
SIM1_SIO AN16 DIO SIM1 data, PMIC interface DVDD28_SIM1 PD I 
B:GPIO176 0 
B1:MD1_SIM
1_SIO 1 
I0:HFRP_JTAG
0_TRSTN 2 
I0:MCUPM_JT
AG_TRSTN 3 
I0:APU_JTAG_
TRST 4 
O:CONN_DSP
_L5_JINTP 5 
O:TSFDC_FOU
T 6 
SIM2_SCLK AN15 DIO SIM2 clock, PMIC interface DVDD28_SIM2 PD I 
B:GPIO177 0 
O:MD1_SIM2
_SCLK 1 
I1:HFRP_JTAG
0_TDI 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 31

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 31 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I1:MCUPM_JT
AG_TDI 3 
I1:APU_JTAG_
TDI 4 
I0:CONN_DSP
_L5_JDI 5 
I0:TSFDC_SCK 6 
SIM2_SRST AM14 DIO SIM2 data, PMIC interface DVDD28_SIM2 PD I 
B:GPIO178 0 
O:MD1_SIM2
_SRST 1 
I1:HFRP_JTAG
0_TMS 2 
I1:MCUPM_JT
AG_TMS 3 
B1:APU_JTAG
_TMS 4 
I1:CONN_DSP
_L5_JMS 5 
I0:TSFDC_SDI 6 
SIM2_SIO AN14 DIO SIM2 data, PMIC interface DVDD28_SIM2 PD I 
B:GPIO179 0 
B1:MD1_SIM
2_SIO 1 
O:HFRP_JTAG
0_TDO 2 
O:MCUPM_JT
AG_TDO 3 
O:APU_JTAG_
TDO 4 
O:CONN_DSP
_L5_JDO 5 
I0:TSFDC_SCF 6 
INT_SIM1 AN23 DIO SIM1 interrupt DVDD18 PD I 
B:GPIO119 0 
I0:MD_INT1_
C2K_UIM0_H
OT_PLUG 
1 
O:SRCLKENA1 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 32

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
INT_SIM2 AM24 DIO SIM2 interrupt DVDD18 PD I 
B:GPIO120 0 
I0:MD_INT2_
C2K_UIM1_H
OT_PLUG 
1 
B0:TP_GPIO1
5_AO 4 
O:SRCLKENA2 5 
I2S 
I2S1_BCK AR21 DIO I2S interface DVDD18 PD I 
B:GPIO70 0 
O:I2SIN1_BCK 1 
I0:I2SIN_DMA
0_BCK 2 
I0:MFG_EB_JT
AG_TCK 4 
I1:SCP_JTAG0
_TCK_VCORE 6 
I0:CONN_WF
_MCU_TCK 7 
I2S1_LRCK AU22 DIO I2S interface DVDD18 PD I 
B:GPIO71 0 
O:I2SIN1_LRC
K 1 
I0:I2SIN_DMA
0_LRCK 2 
I0:MFG_EB_JT
AG_TMS 4 
I1:SCP_JTAG0
_TMS_VCORE 6 
I1:CONN_WF
_MCU_TMS 7 
I2S1_DI AU21 DIO I2S interface DVDD18 PD I 
B:GPIO72 0 
I0:I2SIN1_DI 1 
I0:I2SIN_DMA
0_DI 2 
I0:MFG_EB_JT
AG_TDI 4 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 33

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 33 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I1:SCP_JTAG0
_TDI_VCORE 6 
I0:CONN_WF
_MCU_TDI 7 
I2S1_DO AT21 DIO I2S interface DVDD18 PD I 
B:GPIO73 0 
O:I2SOUT1_D
O 1 
I0:I2SIN_DMA
0_DI1 2 
O:MFG_EB_JT
AG_TDO 4 
O:SCP_JTAG0
_TDO_VCORE 6 
O:CONN_WF_
MCU_TDO 7 
I2S1_MCK AT22 DIO I2S interface DVDD18 PD I 
B:GPIO74 0 
O:I2SIN1_MC
K 1 
I0:I2SIN_DMA
0_DI2 2 
I0:MFG_EB_JT
AG_TRSTN 4 
I0:SCP_JTAG0
_TRSTN_VCO
RE 
6 
I0:CONN_WF
_MCU_TRST_
B 
7 
I2S2_BCK Y7 DIO I2S interface DVDD18 PD I 
B:GPIO75 0 
O:I2SIN2_BCK 1 
I1:SCP_JTAG0
_TCK_VLP 5 
I1:SSPM_JTA
G_TCK_VLP 6 
I0:IO_JTAG_T
CK 7 
I2S2_LRCK AA8 DIO I2S interface DVDD18 PD I B:GPIO76 0 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 34

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:I2SIN2_LRC
K 1 
I1:SCP_JTAG0
_TMS_VLP 5 
I1:SSPM_JTA
G_TMS_VLP 6 
B1:IO_JTAG_T
MS 7 
I2S2_DI Y8 DIO I2S interface DVDD18 PD I 
B:GPIO77 0 
I0:I2SIN2_DI 1 
I1:SCP_JTAG0
_TDI_VLP 5 
I1:SSPM_JTA
G_TDI_VLP 6 
I1:IO_JTAG_T
DI 7 
I2S2_DO Y6 DIO I2S interface DVDD18 PD I 
B:GPIO78 0 
O:I2SOUT2_D
O 1 
O:SCP_JTAG0
_TDO_VLP 5 
O:SSPM_JTAG
_TDO_VLP 6 
O:IO_JTAG_T
DO 7 
I2S2_MCK AA7 DIO I2S interface DVDD18 PD I 
B:GPIO79 0 
O:I2SIN2_MC
K 1 
I0:SCP_JTAG0
_TRSTN_VLP 5 
I0:SSPM_JTA
G_TRSTN_VLP 6 
I0:IO_JTAG_T
RSTN 7 
Liquid crystal display (LCD) 
DSI_TE AR22 DIO Parallel display interface tearing effect DVDD18 PD I B:GPIO59 0 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 35

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 35 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I0:DSI_TE 1 
O:DBG_MON
_A28 7 
LCM_RST AT23 DIO Parallel display interface reset signal DVDD18 PD I 
B:GPIO60 0 
O:LCM_RST 1 
O:DBG_MON
_A29 7 
Pulse width modulation (PWM) 
PWM_OUT AR23 DIO Display PWM output DVDD18 PD I 
B:GPIO61 0 
O:DISP_PWM 1 
O:PWM_0 3 
Keypad interface 
KPCOL0 AR16 DIO Keypad column 0 DVDD18 PU I 
B:GPIO16 0 
B1:KPCOL0_V
LP 1 
Serial peripheral interface (SPI) 
SPI4_CK R29 DIO SPI4 clock DVDD18 PD I 
B:GPIO32 0 
O:SPI4_CLK 1 
O:I2SIN0_BCK 2 
O:CLKM0 4 
O:CMFLASH0 5 
I1:UCTS3 6 
O:DBG_MON
_A12 7 
SPI4_CSB R30 DIO SPI4 chip select DVDD18 PD I 
B:GPIO33 0 
O:SPI4_CSB 1 
O:I2SIN0_LRC
K 2 
O:CLKM1 4 
O:CMFLASH1 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 36

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 36 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:URTS3 6 
O:DBG_MON
_A13 7 
SPI4_MO R32 DIO SPI4 data out DVDD18 PD I 
B:GPIO34 0 
B0:SPI4_MO 1 
O:I2SIN0_MC
K 2 
O:CLKM2 4 
O:CMFLASH2 5 
O:UTXD3 6 
O:DBG_MON
_A14 7 
SPI4_MI R33 DIO SPI4 data in DVDD18 PD I 
B:GPIO35 0 
B0:SPI4_MI 1 
I0:I2SIN0_DI 2 
O:CLKM3 4 
O:CMFLASH3 5 
I1:URXD3 6 
O:DBG_MON
_A15 7 
SPI5_CK P30 DIO SPI5 clock DVDD18 PD I 
B:GPIO28 0 
O:SPI5_CLK 1 
B0:FMI2SIN_B
CK 2 
O:CLKM0 4 
I0:DAP_SONIC
_SWCK 5 
O:MD_UTXD1 6 
O:DBG_MON
_A8 7 
SPI5_CSB N29 DIO SPI5 chip select DVDD18 PD I B:GPIO29 0 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 37

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 37 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:SPI5_CSB 1 
B0:FMI2SIN_L
RCK 2 
O:CLKM1 4 
B1:DAP_SONI
C_SWD 5 
I1:MD_URXD
1 6 
O:DBG_MON
_A9 7 
SPI5_MO P28 DIO SPI5 data out DVDD18 PD I 
B:GPIO30 0 
B0:SPI5_MO 1 
O:FMI2SIN_M
CK 2 
O:CLKM2 4 
I0:DAP_MD32
_SWCK 5 
O:DBG_MON
_A10 7 
SPI5_MI P29 DIO SPI5 data in DVDD18 PD I 
B:GPIO31 0 
B0:SPI5_MI 1 
I0:FMI2SIN_D
I 2 
O:CLKM3 4 
B1:DAP_MD3
2_SWD 5 
O:DBG_MON
_A11 7 
SPI6_CK P33 DIO SPI6 clock DVDD18 PD I 
B:GPIO24 0 
O:SPI6_CLK 1 
I0:SPIS1_CLK 2 
B0:TP_GPIO0
_AO 4 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 38

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 38 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DBG_MON
_A4 7 
SPI6_CSB P34 DIO SPI6 chip select DVDD18 PD I 
B:GPIO25 0 
O:SPI6_CSB 1 
I1:SPIS1_CSB 2 
B0:TP_GPIO1
_AO 4 
O:DBG_MON
_A5 7 
SPI6_MO P31 DIO SPI6 data out DVDD18 PD I 
B:GPIO26 0 
B0:SPI6_MO 1 
B0:SPIS1_MO
SI 2 
O:DMIC_CLK 6 
O:SCP_DMIC_
CLK 4 
O:DBG_MON
_A6 7 
SPI6_MI P32 DIO SPI6 data in DVDD18 PD I 
B:GPIO27 0 
B0:SPI6_MI 1 
B0:SPIS1_MIS
O 2 
I0:DMIC_DAT 3 
I0:SCP_DMIC_
DAT 4 
O:DBG_MON
_A7 7 
SPI7_CK M33 DIO SPI7 clock DVDD18 PD I 
B:GPIO20 0 
O:SPI7_CLK 1 
I0:SPIS0_CLK 2 
O:MD_URTS0 5 
O:UTXD4 6 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 39

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 39 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DBG_MON
_A0 7 
SPI7_CSB M32 DIO SPI7 chip select DVDD18 PD I 
B:GPIO21 0 
O:SPI7_CSB 1 
I1:SPIS0_CSB 2 
I1:MD_UCTS0 5 
I1:URXD4 6 
O:DBG_MON
_A1 7 
SPI7_MO N33 DIO SPI7 data out DVDD18 PD I 
B:GPIO22 0 
B0:SPI7_MO 1 
B0:SPIS0_MO
SI 2 
O:MD_URTS1 5 
O:UTXD5 6 
O:DBG_MON
_A2 7 
SPI7_MI N32 DIO SPI7 data in DVDD18 PD I 
B:GPIO23 0 
B0:SPI7_MI 1 
B0:SPIS0_MIS
O 2 
I1:MD_UCTS1 5 
I1:URXD5 6 
O:DBG_MON
_A3 7 
UART  
UTXD0 AM12 DIO UR0-TX DVDD18 PU OH 
B:GPIO167 0 
O:UTXD0 1 
URXD0 AN12 DIO UR0-RX DVDD18 PU I 
B:GPIO168 0 
I1:URXD0 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 40

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 40 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
UTXD1 AN11 DIO UR1-TX DVDD18 PD I 
B:GPIO18 0 
O:UTXD1 1 
O:TP_UTXD1_
VCORE 3 
O:HFRP_UTX
D1 5 
O:MD_UTXD0 6 
O:CONN_WIFI
_TXD 7 
URXD1 AM11 DIO UR1-RX DVDD18 PD I 
B:GPIO19 0 
I1:URXD1 1 
I1:TP_URXD1
_VCORE 3 
I1:HFRP_URX
D1 5 
I1:MD_URXD
0 6 
RF-interface 
BPI_D_BUS0 AN27 DIO BPI_BUS0 DVDD18 PD I 
B:GPIO147 0 
O:BPI_BUS0 1 
O:ANT_SEL8 3 
O:CLKM0 4 
O:DBG_MON
_B15 7 
BPI_D_BUS1 AP27 DIO BPI_BUS1 DVDD18 PD I 
B:GPIO148 0 
O:BPI_BUS1 1 
O:ANT_SEL9 3 
O:CLKM1 4 
O:DBG_MON
_B16 7 
BPI_D_BUS2 AN26 DIO BPI_BUS2 DVDD18 PD I 
B:GPIO149 0 
O:BPI_BUS2 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 41

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 41 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:ANT_SEL10 3 
O:CLKM2 4 
O:DBG_MON
_B17 7 
BPI_D_BUS3 AP26 DIO BPI_BUS3 DVDD18 PD I 
B:GPIO150 0 
O:BPI_BUS3 1 
O:ANT_SEL11 3 
O:CLKM3 4 
I0:MD_GPS_B
LANK_EXT 6 
O:DBG_MON
_B18 7 
BPI_D_BUS4 AR26 DIO BPI_BUS4 DVDD18 PD I 
B:GPIO151 0 
O:BPI_BUS4 1 
O:ANT_SEL12 3 
I1:MD32_0_R
XD 6 
O:DBG_MON
_B19 7 
BPI_D_BUS5 AU26 DIO BPI_BUS5 DVDD18 PD I 
B:GPIO152 0 
O:BPI_BUS5 1 
O:ANT_SEL13 3 
O:MD32_0_T
XD 6 
O:DBG_MON
_B20 7 
BPI_D_BUS6 AT26 DIO BPI_BUS6 DVDD18 PD I 
B:GPIO153 0 
O:BPI_BUS6 1 
O:CONN_BPI_
BUS6 2 
O:ANT_SEL14 3 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 42

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 42 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
B0:MD32_0_
GPIO0 6 
O:DBG_MON
_B21 7 
BPI_D_BUS7 AR25 DIO BPI_BUS7 DVDD18 PD I 
B:GPIO154 0 
O:BPI_BUS7 1 
O:CONN_BPI_
BUS7 2 
O:ANT_SEL15 3 
I1:MD32_1_R
XD 6 
O:DBG_MON
_B22 7 
BPI_D_BUS8 AU25 DIO BPI_BUS8 DVDD18 PD I 
B:GPIO155 0 
O:BPI_BUS8 1 
O:CONN_BPI_
BUS8 2 
O:ANT_SEL16 3 
O:MD32_1_T
XD 6 
O:DBG_MON
_B23 7 
BPI_D_BUS9 AT25 DIO BPI_BUS9 DVDD18 PD I 
B:GPIO156 0 
O:BPI_BUS9 1 
O:CONN_BPI_
BUS9 2 
O:ANT_SEL17 3 
B0:MD32_1_
GPIO0 6 
O:DBG_MON
_B24 7 
MD_UCNT AU32 DIO BPI control DVDD18 PD I 
B:GPIO157 0 
I0:MD_UCNT_
A_TGL 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 43

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 43 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
DIGRF_IRQ AR27 DIO BPI control DVDD18 PD I 
B:GPIO158 0 
I0:DIGRF_IRQ 1 
RF-MIPI-interface 
MIPI_M_SCLK AU30 DIO MIPI_M CLK DVDD18 PD I 
B:GPIO159 0 
O:MIPI_M_SC
LK 1 
MIPI_M_SDAT
A AU31 DIO MIPI_M DATA DVDD18 PD I 
B:GPIO160 0 
B0:MIPI_M_S
DATA 1 
MIPI0_D_SCLK AT29 DIO MIPI_0 CLK DVDD18 PD I 
B:GPIO161 0 
O:MIPI0_D_S
CLK 1 
O:CONN_MIPI
0_SCLK 2 
O:BPI_BUS16 3 
O:CONN_BPI_
BUS16_OLAT
5 
4 
O:MD_GPS_L
1_BLANK 6 
MIPI0_D_SDAT
A AT30 DIO MIPI_0 DATA DVDD18 PD I 
B:GPIO162 0 
B0:MIPI0_D_S
DATA 1 
B0:CONN_MI
PI0_SDATA 2 
O:BPI_BUS17 3 
O:CONN_BPI_
BUS17_ANT0 4 
O:MD_GPS_L
5_BLANK 6 
MIPI1_D_SCLK AT28 DIO MIPI_1 CLK DVDD18 PD I 
B:GPIO163 0 
O:MIPI1_D_S
CLK 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 44

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 44 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:CONN_MIPI
1_SCLK 2 
O:BPI_BUS18 3 
O:CONN_BPI_
BUS18_ANT1 4 
O:MIPI3_D_S
CLK 5 
MIPI1_D_SDAT
A AR28 DIO MIPI_1 DATA DVDD18 PD I 
B:GPIO164 0 
B0:MIPI1_D_S
DATA 1 
B0:CONN_MI
PI1_SDATA 2 
O:BPI_BUS19 3 
O:CONN_BPI_
BUS19_ANT2 4 
B0:MIPI3_D_S
DATA 5 
I0:MD_GPS_B
LANK_EXT 6 
MIPI2_D_SCLK AU28 DIO MIPI_2 CLK DVDD18 PD I 
B:GPIO165 0 
O:MIPI2_D_S
CLK 1 
O:BPI_BUS20 3 
O:CONN_BPI_
BUS20_ANT3 4 
O:MIPI4_D_S
CLK 5 
MIPI2_D_SDAT
A AU29 DIO MIPI_2 DATA DVDD18 PD I 
B:GPIO166 0 
B0:MIPI2_D_S
DATA 1 
O:BPI_BUS21 3 
O:CONN_BPI_
BUS21_ANT4 4 
B0:MIPI4_D_S
DATA 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 45

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 45 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
MSDC1 
MSDC1_CLK AU15 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO53 0 
B0:MSDC1_CL
K 1 
O:MD1_SIM2
_SCLK 2 
I0:CONN_DSP
_JCK 3 
I0:UDI_TCK 4 
I0:IPU_JTAG_
TCK 5 
I1:SSPM_JTA
G_TCK_VCOR
E 
6 
MSDC1_CMD AP15 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO54 0 
B1:MSDC1_C
MD 1 
B1:CONN_BG
F_MCU_AICE
_TMSC 
2 
I1:CONN_DSP
_JMS 3 
I0:UDI_TMS 4 
I0:IPU_JTAG_
TMS 5 
I1:SSPM_JTA
G_TMS_VCOR
E 
6 
MSDC1_DAT0 AR15 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO55 0 
B1:MSDC1_D
AT0 1 
O:MD1_SIM2
_SRST 2 
I0:CONN_DSP
_JDI 3 
I0:UDI_TDI_0 4 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 46

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 46 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I0:IPU_JTAG_
TDI 5 
I1:SSPM_JTA
G_TDI_VCORE 6 
MSDC1_DAT1 AT15 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO56 0 
B1:MSDC1_D
AT1 1 
B1:MD1_SIM
2_SIO 2 
O:CONN_DSP
_JDO 3 
O:UDI_TDO_0 4 
O:IPU_JTAG_
TDO 5 
O:SSPM_JTAG
_TDO_VCORE 6 
I0:CONN_WF
_MCU_AICE_
TCKC 
7 
MSDC1_DAT2 AU16 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO57 0 
B1:MSDC1_D
AT2 1 
I0:CONN_BGF
_MCU_AICE_
TCKC 
2 
O:CONN_DSP
_JINTP 3 
I0:UDI_NTRST 4 
I0:IPU_JTAG_
TRST 5 
I0:SSPM_JTA
G_TRSTN_VC
ORE 
6 
MSDC1_DAT3 AT16 DIO SD/SDIO interface DVDD28_MSDC1 PD I 
B:GPIO58 0 
B1:MSDC1_D
AT3 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 47

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 47 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:CONN_TCX
OENA_REQ 4 
O:AGPS_SYNC 6 
B1:CONN_WF
_MCU_AICE_
TMSC 
7 
Camera(CAM) 
CAM_RST0 AM8 DIO Reset control to 0th sensor DVDD18 PD I 
B:GPIO62 0 
O:BPI_BUS22 1 
I1:UCTS2 3 
I0:UDI_TDI_1 4 
CAM_RST1 AN7 DIO Reset control to 1st sensor DVDD18 PD I 
B:GPIO63 0 
O:BPI_BUS23 1 
O:URTS2 3 
O:UDI_TDO_1 4 
CAM_RST2 AP8 DIO Reset control to 2nd sensor DVDD18 PD I 
B:GPIO64 0 
O:DMIC1_CLK 1 
I0:UDI_TDI_2 4 
CAM_RST3 AN8 DIO Reset control to 3rd sensor DVDD18 PD I 
B:GPIO65 0 
I0:DMIC1_DA
T 1 
O:UDI_TDO_2 4 
CAM_CLK0 AT7 DIO Master clock to 0th sensor DVDD18 PD I 
B:GPIO66 0 
O:CMMCLK0 1 
I0:UDI_TDI_3 4 
O:DBG_MON
_B7 7 
CAM_CLK1 AE1 DIO Master clock to 1st sensor DVDD18 PD I 
B:GPIO67 0 
O:CMMCLK1 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 48

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 48 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:UDI_TDO_3 4 
O:DBG_MON
_B8 7 
CAM_CLK2 AU7 DIO Master clock to 2nd sensor DVDD18 PD I 
B:GPIO68 0 
O:CMMCLK2 1 
I0:UDI_TDI_4 4 
O:DBG_MON
_B9 7 
CAM_CLK3 AE2 DIO Master clock to 3rd sensor DVDD18 PD I 
B:GPIO69 0 
O:CMMCLK3 1 
O:UDI_TDO_4 4 
O:DBG_MON
_B10 7 
I2C 
SCL0 U32 DIO I2C0 clock DVDD18 PD I 
B:GPIO121 0 
B1:SCL0 1 
SDA0 V32 DIO I2C0 data DVDD18 PD I 
B:GPIO122 0 
B1:SDA0 1 
SCL1 V34 DIO I2C1 clock DVDD18 PD I 
B:GPIO123 0 
B1:SCL1 1 
SDA1 V33 DIO I2C1 data DVDD18 PD I 
B:GPIO124 0 
B1:SDA1 1 
CAM_SCL2 AN10 DIO I2C2 clock DVDD18 PD I 
B:GPIO125 0 
B1:SCL2 1 
B1:SCP_SCL2 2 
I0:UDI_TDI_6 4 
CAM_SDA2 AM10 DIO I2C2 data DVDD18 PD I 
B:GPIO126 0 
B1:SDA2 1 
B1:SCP_SDA2 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 49

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 49 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:UDI_TDO_6 4 
SCL3 AN19 DIO I2C3 clock DVDD18 PD I 
B:GPIO127 0 
B1:SCL3 1 
O:mbistreade
n_trigger 6 
SDA3 AM19 DIO I2C3 data DVDD18 PD I 
B:GPIO128 0 
B1:SDA3 1 
O:mbistwrite
en_trigger 6 
CAM_SCL4 AT10 DIO I2C4 clock DVDD18 PD I 
B:GPIO129 0 
B1:SCL4 1 
B1:SCP_SCL4 2 
I0:UDI_TDI_7 4 
CAM_SDA4 AP9 DIO I2C4 data DVDD18 PD I 
B:GPIO130 0 
B1:SDA4 1 
B1:SCP_SDA4 2 
O:UDI_TDO_7 4 
CHG_SCL5 AM18 DIO I2C5 clock DVDD18 PD I 
B:GPIO131 0 
B1:SCL5 1 
B0:TP_GPIO0
_AO 4 
CHG_SDA5 AN18 DIO I2C5 data DVDD18 PD I 
B:GPIO132 0 
B1:SDA5 1 
B0:TP_GPIO1
_AO 4 
SCL6 AR18 DIO I2C6 clock DVDD18 PD I 
B:GPIO133 0 
B1:SCL6 1 
SDA6 AT18 DIO I2C6 data DVDD18 PD I 
B:GPIO134 0 
B1:SDA6 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 50

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 50 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
CAM_SCL7 AN9 DIO I2C7 clock DVDD18 PD I 
B:GPIO135 0 
B1:SCL7 1 
CAM_SDA7 AM9 DIO I2C7 data DVDD18 PD I 
B:GPIO136 0 
B1:SDA7 1 
CAM_SCL8 AT8 DIO I2C8 clock DVDD18 PD I 
B:GPIO137 0 
B1:SCL8 1 
CAM_SDA8 AU8 DIO I2C8 data DVDD18 PD I 
B:GPIO138 0 
B1:SDA8 1 
CAM_SCL9 AT9 DIO I2C9 clock DVDD18 PD I 
B:GPIO139 0 
B1:SCL9 1 
O:UTXD2 2 
CAM_SDA9 AR9 DIO I2C9 data DVDD18 PD I 
B:GPIO140 0 
B1:SDA9 1 
I1:URXD2 2 
SCL10 AP11 DIO I2C10 clock DVDD18 PD I 
B:GPIO141 0 
B1:SCL10 1 
I1:UCTS2 2 
O:GPS_L1_EL
NA_EN 3 
SDA10 AR11 DIO I2C10 data DVDD18 PD I 
B:GPIO142 0 
B1:SDA10 1 
O:URTS2 2 
O:GPS_L5_EL
NA_EN 3 
SCL11 AU11 DIO I2C11 clock DVDD18 PD I 
B:GPIO143 0 
B1:SCL11 1 
O:UTXD4 2 
O:PWM_2 3 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 51

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 51 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DISP_ERRO
R0 4 
O:TP_URTS2_
VCORE 6 
SDA11 AT11 DIO I2C11 data DVDD18 PD I 
B:GPIO144 0 
B1:SDA11 1 
I1:URXD4 2 
O:PWM_3 3 
O:DISP_ERRO
R1 4 
I1:TP_UCTS2_
VCORE 6 
SCL12 AR10 DIO I2C12 clock DVDD18 PD I 
B:GPIO145 0 
B1:SCL12 1 
O:UTXD5 2 
O:MD_UTXD1 3 
O:SSPM_UTX
D_AO_VCORE 5 
O:TP_UTXD2_
VCORE 6 
O:CONN_BT_
TXD 7 
SDA12 AU10 DIO I2C12 data DVDD18 PD I 
B:GPIO146 0 
B1:SDA12 1 
I1:URXD5 2 
I1:MD_URXD
1 3 
I1:SSPM_URX
D_AO_VCORE 5 
I1:TP_URXD2
_VCORE 6 
Connectivity 
ANT_SEL0 V3 DIO Antenna select signal DVDD18 PD I B:GPIO94 0 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 52

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 52 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:ANT_SEL0 1 
O:PCIE_PERST
N 2 
B0:TP_GPIO1
4_AO 4 
ANT_SEL1 U4 DIO Antenna select signal DVDD18 PD I 
B:GPIO95 0 
O:ANT_SEL1 1 
B1:PCIE_WAK
EN 2 
B0:TP_GPIO1
5_AO 4 
O:PWM_3 5 
ANT_SEL2 U1 DIO Antenna select signal DVDD18 PD I 
B:GPIO96 0 
O:ANT_SEL2 1 
B1:PCIE_CLKR
EQN 2 
B0:TP_GPIO0
_AO 4 
I0:EXT_FRAM
E_SYNC 6 
ANT_SEL3 T5 DIO Antenna select signal DVDD18 PD I 
B:GPIO97 0 
O:ANT_SEL3 1 
O:TP_UTXD2_
VLP 2 
I0:I2SIN6_DI 3 
B0:TP_GPIO1
_AO 4 
O:PWM_2 5 
O:MD_UTXD1 6 
ANT_SEL4 T4 DIO Antenna select signal DVDD18 PD I 
B:GPIO98 0 
O:ANT_SEL4 1 
I1:TP_URXD2
_VLP 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 53

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 53 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I0:I2SIN6_DI1 6 
B0:TP_GPIO2
_AO 4 
I1:MD_URXD
1 6 
ANT_SEL5 T2 DIO Antenna select signal DVDD18 PD I 
B:GPIO99 0 
O:ANT_SEL5 1 
O:PTA_TXD 2 
I0:I2SIN6_DI2 3 
O:CONN_TCX
OENA_REQ 4 
O:AGPS_SYNC 6 
ANT_SEL6 T3 DIO Antenna select signal DVDD18 PD I 
B:GPIO100 0 
O:ANT_SEL6 1 
I1:PTA_RXD 2 
I0:I2SIN6_DI3 3 
O:PWM_1 5 
CONN_HRST_B
_2 V4 DIO CONNSYS reset2 DVDD18 PD I 
B:GPIO101 0 
O:ANT_SEL7 1 
O:CONN_HRS
T_B_2 2 
O:I2SIN6_MC
K 3 
CONN_HRST_B V5 DIO CONNSYS reset DVDD18 PD I 
B:GPIO102 0 
O:CONN_HRS
T_B 1 
O:CONN_RST 2 
B0:TP_GPIO3
_AO 4 
CONN_TOP_CL
K R1 DIO CONNSYS top 2-wire interface DVDD18 PD I 
B:GPIO103 0 
O:CONN_TOP
_CLK 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 54

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 54 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:UTXD3 3 
O:CONN_UAR
THUB_UART_
TX 
4 
CONN_TOP_D
ATA R2 DIO CONNSYS top 2-wire interface DVDD18 PD I 
B:GPIO104 0 
B0:CONN_TO
P_DATA 1 
I1:URXD3 3 
I1:CONN_UAR
THUB_UART_
RX 
4 
CONN_BT_CLK R5 DIO CONNSYS BT interface DVDD18 PD I 
B:GPIO105 0 
B0:CONN_BT
_CLK 1 
I0:CONN_FAU
LTB 2 
B0:TP_GPIO4
_AO 4 
CONN_BT_DAT
A R4 DIO CONNSYS BT interface DVDD18 PD I 
B:GPIO106 0 
B0:CONN_BT
_DATA 1 
O:CONN_PMI
C_EN 2 
CONN_WB_PT
A R3 DIO CONNSYS Wi-Fi/Bluetooth interface DVDD18 PD I 
B:GPIO107 0 
B0:CONN_WB
_PTA 1 
O:I2SIN2_BCK 2 
O:TP_UTXD1_
VCORE 6 
CONN_WF_CT
RL0 U6 DIO CONNSYS Wi-Fi control signal DVDD18 PD I 
B:GPIO108 0 
B0:CONN_WF
_CTRL0 1 
O:I2SIN2_LRC
K 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 55

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 55 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I1:TP_URXD1
_VCORE 6 
CONN_WF_CT
RL1 T8 DIO CONNSYS Wi-Fi control signal DVDD18 PD I 
B:GPIO109 0 
B0:CONN_WF
_CTRL1 1 
I0:I2SIN2_DI 2 
O:TP_URTS1_
VCORE 6 
CONN_WF_CT
RL2 T6 DIO CONNSYS Wi-Fi control signal DVDD18 PD I 
B:GPIO110 0 
B0:CONN_WF
_CTRL2 1 
O:I2SOUT2_D
O 2 
I1:TP_UCTS1_
VCORE 6 
CONN_WF_CT
RL3 T7 DIO CONNSYS Wi-Fi control signal DVDD18 PD I 
B:GPIO111 0 
B0:CONN_WF
_CTRL3 1 
O:CONN_TOP
_CLK_2 2 
CONN_WF_CT
RL4 R6 DIO CONNSYS Wi-Fi control signal DVDD18 PD I 
B:GPIO112 0 
B0:CONN_WF
_CTRL4 1 
B0:CONN_TO
P_DATA_2 2 
GPS_L1_ELNA_
EN V6 DIO GPS L1 ELNA enable DVDD18 PD I 
B:GPIO92 0 
O:GPS_L1_EL
NA_EN 1 
O:BT_RST 2 
O:DBG_MON
_B11 7 
GPS_L5_ELNA_
EN V7 DIO GPS L5 ELNA enable DVDD18 PD I 
B:GPIO93 0 
O:GPS_L5_EL
NA_EN 1 
O:WF_RST 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 56

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 56 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DBG_MON
_B12 7 
System companion processor (SCP) 
SCP_SPI0_CK AC5 DIO System companion processor clock DVDD18 PD I 
B:GPIO48 0 
O:SPI0_CLK 1 
O:SCP_SPI0_C
K 2 
I0:MD_INT0 3 
I1:SPM_JTAG
_TCK_VLP 4 
I0:CONN_BGF
_MCU_TCK 5 
SCP_SPI0_CSB AD6 DIO System companion processor chip 
select DVDD18 PD I 
B:GPIO49 0 
O:SPI0_CSB 1 
O:SCP_SPI0_C
S 2 
I0:MD_INT3 3 
I1:SPM_JTAG
_TMS_VLP 4 
I1:CONN_BGF
_MCU_TMS 5 
SCP_SPI0_MO AC3 DIO System companion processor dataout DVDD18 PD I 
B:GPIO50 0 
B0:SPI0_MO 1 
B0:SCP_SPI0_
MO 2 
I0:MD_INT4 3 
B1:SPM_JTAG
_TDO_VLP 4 
O:CONN_BGF
_MCU_TDO 5 
SCP_SPI0_MI AC4 DIO System companion processor datain DVDD18 PD I 
B:GPIO51 0 
B0:SPI0_MI 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 57

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 57 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
B0:SCP_SPI0_
MI 2 
I1:SPM_JTAG
_TDI_VLP 4 
I0:CONN_BGF
_MCU_TDI 5 
SCP_SPI1_CK AB1 DIO System companion processor clock DVDD18 PD I 
B:GPIO44 0 
O:SPI1_CLK 1 
O:SCP_SPI1_C
K 2 
O:DMIC1_CLK 3 
B0:TP_GPIO1
3_AO 4 
O:TP_UTXD2_
VLP 5 
O:UTXD2 6 
O:DBG_MON
_A24 7 
SCP_SPI1_CSB AB2 DIO System companion processor chip 
select DVDD18 PD I 
B:GPIO45 0 
O:SPI1_CSB 1 
O:SCP_SPI1_C
S 2 
I0:DMIC1_DA
T 3 
B0:TP_GPIO1
4_AO 4 
I1:TP_URXD2
_VLP 5 
I1:URXD2 6 
O:DBG_MON
_A25 7 
SCP_SPI1_MO AB3 DIO System companion processor dataout DVDD18 PD I 
B:GPIO46 0 
B0:SPI1_MO 1 
B0:SCP_SPI1_
MO 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 58

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 58 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DMIC_CLK 3 
O:SCP_DMIC_
CLK 4 
O:TP_URTS2_
VLP 5 
I1:UCTS2 6 
O:DBG_MON
_A26 7 
SCP_SPI1_MI AB4 DIO System companion processor datain DVDD18 PD I 
B:GPIO47 0 
B0:SPI1_MI 1 
B0:SCP_SPI1_
MI 2 
I0:DMIC_DAT 3 
I0:SCP_DMIC_
DAT 4 
I1:TP_UCTS2_
VLP 5 
O:URTS2 6 
O:DBG_MON
_A27 7 
SCP_SPI2_CK AA1 DIO System companion processor clock DVDD18 PD I 
B:GPIO40 0 
O:SPI2_CLK 1 
O:SCP_SPI2_C
K 2 
B0:TP_GPIO9
_AO 4 
I1:UCTS3 5 
O:TP_UTXD1_
VLP 6 
O:DBG_MON
_A20 7 
SCP_SPI2_CSB AA4 DIO System companion processor chip 
select DVDD18 PD I 
B:GPIO41 0 
O:SPI2_CSB 1 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 59

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 59 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:SCP_SPI2_C
S 2 
B0:TP_GPIO1
0_AO 4 
O:URTS3 5 
I1:TP_URXD1
_VLP 6 
O:DBG_MON
_A21 7 
SCP_SPI2_MO AA3 DIO System companion processor dataout DVDD18 PD I 
B:GPIO42 0 
B0:SPI2_MO 1 
B0:SCP_SPI2_
MO 2 
B0:TP_GPIO1
1_AO 4 
O:UTXD3 5 
O:TP_URTS1_
VLP 6 
O:DBG_MON
_A22 7 
SCP_SPI2_MI AA5 DIO System companion processor datain DVDD18 PD I 
B:GPIO43 0 
B0:SPI2_MI 1 
B0:SCP_SPI2_
MI 2 
B0:TP_GPIO1
2_AO 4 
I1:URXD3 5 
I1:TP_UCTS1_
VLP 6 
O:DBG_MON
_A23 7 
SCP_SPI3_CK AD7 DIO System companion processor clock DVDD18 PD I 
B:GPIO36 0 
O:SPI3_CLK 1 
O:SCP_SPI3_C
K 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 60

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 60 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I0:MD_INT0 3 
B0:TP_GPIO5
_AO 4 
O:UTXD4 5 
O:MD_UTXD0 6 
O:DBG_MON
_A16 7 
SCP_SPI3_CSB AD8 DIO System companion processor chip 
select DVDD18 PD I 
B:GPIO37 0 
O:SPI3_CSB 1 
O:SCP_SPI3_C
S 2 
I0:MD_INT3 3 
B0:TP_GPIO6
_AO 4 
I1:URXD4 5 
I1:MD_URXD
0 6 
O:DBG_MON
_A17 7 
SCP_SPI3_MO AC8 DIO System companion processor dataout DVDD18 PD I 
B:GPIO38 0 
B0:SPI3_MO 1 
B0:SCP_SPI3_
MO 2 
I0:MD_INT4 3 
B0:TP_GPIO7
_AO 4 
O:UTXD5 5 
O:DBG_MON
_A18 7 
SCP_SPI3_MI AC7 DIO System companion processor datain DVDD18 PD I 
B:GPIO39 0 
B0:SPI3_MI 1 
B0:SCP_SPI3_
MI 2 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 61

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 61 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
B0:TP_GPIO8
_AO 4 
I1:URXD5 5 
O:DBG_MON
_A19 7 
SCP_I2C_SCL0 Y1 DIO System companion processor I2C0 CLK DVDD18 PD I 
B:GPIO80 0 
B1:SCP_SCL0 1 
I1:UCTS3 2 
O:CMMCLK4 3 
B0:TP_GPIO2
_AO 4 
O:PWM_VLP 5 
O:TP_UTXD2_
VLP 6 
SCP_I2C_SDA0 W1 DIO System companion processor I2C0 
DATA DVDD18 PD I 
B:GPIO81 0 
B1:SCP_SDA0 1 
O:URTS3 2 
O:CMMCLK5 3 
B0:TP_GPIO3
_AO 4 
I0:SRCLKENAI
1 5 
I1:TP_URXD2
_VLP 6 
SCP_I2C_SCL1 W7 DIO System companion processor I2C1 CLK DVDD18 PD I 
B:GPIO82 0 
B1:SCP_SCL1 1 
O:UTXD3 2 
O:CMMCLK4 3 
B0:TP_GPIO4
_AO 4 
I0:MD_INT3 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 62

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 62 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:TP_URTS2_
VLP 6 
SCP_I2C_SDA1 W8 DIO System companion processor I2C1 
DATA DVDD18 PD I 
B:GPIO83 0 
B1:SCP_SDA1 1 
I1:URXD3 2 
O:CMMCLK5 3 
B0:TP_GPIO5
_AO 4 
I0:MD_INT4 5 
I1:TP_UCTS2_
VLP 6 
SCP_I2C_SCL2 W5 DIO System companion processor I2C2 CLK DVDD18 PD I 
B:GPIO84 0 
B1:SCP_SCL2 1 
O:MD_MCIF_
UTXD0 2 
O:MD_UTXD0 3 
B0:TP_GPIO6
_AO 4 
O:SSPM_UTX
D_AO_VLP 5 
O:TP_UTXD1_
VLP 6 
O:CONN_BGF
_UART0_TXD 7 
SCP_I2C_SDA2 W2 DIO System companion processor I2C2 
DATA DVDD18 PD I 
B:GPIO85 0 
B1:SCP_SDA2 1 
I1:MD_MCIF_
URXD0 2 
I1:MD_URXD
0 3 
B0:TP_GPIO7
_AO 4 
I1:SSPM_URX
D_AO_VLP 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 63

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 63 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
I1:TP_URXD1
_VLP 6 
I1:CONN_BGF
_UART0_RXD 7 
SCP_I2C_SCL3 W3 DIO System companion processor I2C3 CLK DVDD18 PD I 
B:GPIO86 0 
B1:SCP_SCL3 1 
B0:I2SIN6_BC
K 3 
B0:TP_GPIO8
_AO 4 
I0:EXTIF0_AC
T 5 
O:TP_URTS1_
VLP 6 
SCP_I2C_SDA3 V2 DIO System companion processor I2C3 
DATA DVDD18 PD I 
B:GPIO87 0 
B1:SCP_SDA3 1 
O:I2SOUT6_D
O 3 
B0:TP_GPIO9
_AO 4 
I0:EXTIF0_PRI 5 
I1:TP_UCTS1_
VLP 6 
SCP_I2C_SCL4 Y3 DIO System companion processor I2C4 CLK DVDD18 PD I 
B:GPIO88 0 
B1:SCP_SCL4 1 
O:I2SOUT6_D
O1 3 
B0:TP_GPIO1
0_AO 4 
O:EXTIF0_GN
T_B 5 
SCP_I2C_SDA4 Y2 DIO System companion processor I2C4 
DATA DVDD18 PD I 
B:GPIO89 0 
B1:SCP_SDA4 1 
O:I2SOUT6_D
O2 3 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 64

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 64 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
B0:TP_GPIO1
1_AO 4 
I0:MD_INT0 5 
SCP_I2C_SCL5 AB7 DIO System companion processor I2C5 CLK DVDD18 PD I 
B:GPIO90 0 
B1:SCP_SCL5 1 
B0:I2SIN6_LR
CK 3 
B0:TP_GPIO1
2_AO 4 
O:MD_GPS_L
1_BLANK 6 
SCP_I2C_SDA5 AB8 DIO System companion processor I2C5 
DATA DVDD18 PD I 
B:GPIO91 0 
B1:SCP_SDA5 1 
O:I2SOUT6_D
O3 3 
B0:TP_GPIO1
3_AO 4 
O:MD_GPS_L
5_BLANK 6 
SCP_VREQ_VA
O AT17 DIO System companion processor voltage 
request DVDD18 PD I 
B:GPIO185 0 
O:SCP_VREQ_
VAO 1 
General purpose 
PERI_EN0 AN13 DIO PERIPHERAL_EN0 DVDD18 PD OL 
B:GPIO113 0 
O:PWM_0 1 
O:MD1_SIM2
_SCLK 2 
PERI_EN1 AM13 DIO PERIPHERAL_EN1 DVDD18 PD OL 
B:GPIO114 0 
O:PWM_1 1 
O:MD1_SIM2
_SRST 2 
O:TP_UTXD2_
VCORE 5 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 65

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 65 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:UTXD2 6 
O:DBG_MON
_B13 7 
PERI_EN2 AP13 DIO PERIPHERAL_EN2 DVDD18 PD OL 
B:GPIO115 0 
O:PWM_2 1 
B1:MD1_SIM
2_SIO 2 
I1:TP_URXD2
_VCORE 5 
I1:URXD2 6 
O:DBG_MON
_B14 7 
PERI_EN3 AP14 DIO PERIPHERAL_EN3 DVDD18 PD OL 
B:GPIO116 0 
O:PWM_3 1 
O:MD1_SIM1
_SCLK 2 
PERI_EN4 AR13 DIO PERIPHERAL_EN4 DVDD18 PD OL 
B:GPIO117 0 
I0:DSI_TE1 1 
O:MD1_SIM1
_SRST 2 
I0:UDI_TDI_5 4 
O:MD_GPS_L
1_BLANK 6 
O:DBG_MON
_A30 7 
PERI_EN5 AT14 DIO PERIPHERAL_EN5 DVDD18 PD OL 
B:GPIO118 0 
O:LCM_RST1 1 
B1:MD1_SIM
1_SIO 2 
O:UDI_TDO_5 4 
O:MD_GPS_L
5_BLANK 6 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 66

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 66 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
O:DBG_MON
_A31 7 
JTAG 
JTRSTN T32 DIO JTAG interface DVDD18 PU I 
B:GPIO169 0 
I1:JTRSTN_SE
L1_VCORE 1 
I0:SPM_JTAG
_TRSTN_VCO
RE 
6 
JTDO T34 DIO JTAG interface DVDD18 PD I 
B:GPIO170 0 
O:JTDO_SEL1
_VCORE 1 
B1:SPM_JTAG
_TDO_VCORE 6 
JTCK T33 DIO JTAG interface DVDD18 PD I 
B:GPIO171 0 
I0:JTCK_SEL1_
VCORE 1 
I1:SPM_JTAG
_TCK_VCORE 6 
JTMS U33 DIO JTAG interface DVDD18 PD I 
B:GPIO172 0 
B0:JTMS_SEL
1_VCORE 1 
I1:SPM_JTAG
_TMS_VCORE 6 
JTDI U34 DIO JTAG interface DVDD18 PD I 
B:GPIO173 0 
I0:JTDI_SEL1_
VCORE 1 
I1:SPM_JTAG
_TDI_VCORE 6 
Digital-RF (DRF) 
DRF_DL_CP AK30 AIO DRF interface AVDD12_DRF         
DRF_DL_CN AK31 AIO DRF interface AVDD12_DRF         
DRF_DL_LN0_
DP AL34 AIO DRF interface AVDD12_DRF         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 67

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 67 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
DRF_DL_LN0_
DN AK34 AIO DRF interface AVDD12_DRF         
DRF_DL_LN1_
DP AJ32 AIO DRF interface AVDD12_DRF         
DRF_DL_LN1_
DN AJ33 AIO DRF interface AVDD12_DRF         
DRF_DL_LN2_
DP AH30 AIO DRF interface AVDD12_DRF         
DRF_DL_LN2_
DN AH31 AIO DRF interface AVDD12_DRF         
DRF_DL_LN3_
DP AH34 AIO DRF interface AVDD12_DRF         
DRF_DL_LN3_
DN AG34 AIO DRF interface AVDD12_DRF         
DRF_UL_CP AM33 AIO DRF interface AVDD12_DRF         
DRF_UL_CN AM32 AIO DRF interface AVDD12_DRF         
DRF_UL_LN1_
DP AN31 AIO DRF interface AVDD12_DRF         
DRF_UL_LN1_
DN AN30 AIO DRF interface AVDD12_DRF         
DRF_UL_LN0_
DP AP33 AIO DRF interface AVDD12_DRF         
DRF_UL_LN0_
DN AR33 AIO DRF interface AVDD12_DRF         
MIPI 
DSI0_D3N_T3A AB32 AIO DSI interface  AVDD12_DSI         
DSI0_D3P_T2C AB33 AIO DSI interface  AVDD12_DSI         
DSI0_D1N_T2B AB34 AIO DSI interface  AVDD12_DSI         
DSI0_D1P_T2A AC34 AIO DSI interface  AVDD12_DSI         
DSI0_CK0N_T1
C AB30 AIO DSI interface  AVDD12_DSI         
DSI0_CK0P_T1
B AB31 AIO DSI interface  AVDD12_DSI         
DSI0_D0N_T1A AC30 AIO DSI interface  AVDD12_DSI         
DSI0_D0P_T0C AC31 AIO DSI interface  AVDD12_DSI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 68

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 68 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
DSI0_D2N_T0B AC33 AIO DSI interface  AVDD12_DSI         
DSI0_D2P_T0A AC32 AIO DSI interface  AVDD12_DSI         
DSI1_D3N_T3A AD33 AIO DSI interface  AVDD12_DSI         
DSI1_D3P_T2C AD32 AIO DSI interface  AVDD12_DSI         
DSI1_D1N_T2B AE34 AIO DSI interface  AVDD12_DSI         
DSI1_D1P_T2A AE33 AIO DSI interface  AVDD12_DSI         
DSI1_CK0N_T1
C AE30 AIO DSI interface  AVDD12_DSI         
DSI1_CK0P_T1
B AE31 AIO DSI interface  AVDD12_DSI         
DSI1_D0N_T1A AF30 AIO DSI interface  AVDD12_DSI         
DSI1_D0P_T0C AF31 AIO DSI interface  AVDD12_DSI         
DSI1_D2N_T0B AF33 AIO DSI interface  AVDD12_DSI         
DSI1_D2P_T0A AF32 AIO DSI interface  AVDD12_DSI         
CSI0B_L1N AP6 AIO CSI interface AVDD12_CSI         
CSI0B_L1P_T0
C AP5 AIO CSI interface AVDD12_CSI         
CSI0B_L0N_T0
B AR5 AIO CSI interface AVDD12_CSI         
CSI0B_L0P_T0
A AR4 AIO CSI interface AVDD12_CSI         
CSI0A_L2N_T1
C AU5 AIO CSI interface AVDD12_CSI         
CSI0A_L2P_T1
B AU4 AIO CSI interface AVDD12_CSI         
CSI0A_L1N_T1
A AU3 AIO CSI interface AVDD12_CSI         
CSI0A_L1P_T0
C AT3 AIO CSI interface AVDD12_CSI         
CSI0A_L0N_T0
B AT2 AIO CSI interface AVDD12_CSI         
CSI0A_L0P_T0
A AR3 AIO CSI interface AVDD12_CSI         
CSI1B_L1N AR2 AIO CSI interface AVDD12_CSI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 69

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 69 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
CSI1B_L1P_T0
C AP3 AIO CSI interface AVDD12_CSI         
CSI1B_L0N_T0
B AP2 AIO CSI interface AVDD12_CSI         
CSI1B_L0P_T0
A AP1 AIO CSI interface AVDD12_CSI         
CSI1A_L2N_T1
C AN5 AIO CSI interface AVDD12_CSI         
CSI1A_L2P_T1
B AN4 AIO CSI interface AVDD12_CSI         
CSI1A_L1N_T1
A AM5 AIO CSI interface AVDD12_CSI         
CSI1A_L1P_T0
C AM4 AIO CSI interface AVDD12_CSI         
CSI1A_L0N_T0
B AM3 AIO CSI interface AVDD12_CSI         
CSI1A_L0P_T0
A AM2 AIO CSI interface AVDD12_CSI         
CSI2B_L1N AL2 AIO CSI interface AVDD12_CSI         
CSI2B_L1P_T0
C AL1 AIO CSI interface AVDD12_CSI         
CSI2B_L0N_T0
B AK2 AIO CSI interface AVDD12_CSI         
CSI2B_L0P_T0
A AK1 AIO CSI interface AVDD12_CSI         
CSI2A_L2N_T1
C AL4 AIO CSI interface AVDD12_CSI         
CSI2A_L2P_T1
B AL3 AIO CSI interface AVDD12_CSI         
CSI2A_L1N_T1
A AK5 AIO CSI interface AVDD12_CSI         
CSI2A_L1P_T0
C AK4 AIO CSI interface AVDD12_CSI         
CSI2A_L0N_T0
B AJ4 AIO CSI interface AVDD12_CSI         
CSI2A_L0P_T0
A AJ5 AIO CSI interface AVDD12_CSI         
CSI3B_L1N AJ2 AIO CSI interface AVDD12_CSI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 70

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 70 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
CSI3B_L1P_T0
C AJ3 AIO CSI interface AVDD12_CSI         
CSI3B_L0N_T0
B AH2 AIO CSI interface AVDD12_CSI         
CSI3B_L0P_T0
A AH3 AIO CSI interface AVDD12_CSI         
CSI3A_L2N_T1
C AG1 AIO CSI interface AVDD12_CSI         
CSI3A_L2P_T1
B AG2 AIO CSI interface AVDD12_CSI         
CSI3A_L1N_T1
A AG3 AIO CSI interface AVDD12_CSI         
CSI3A_L1P_T0
C AG5 AIO CSI interface AVDD12_CSI         
CSI3A_L0N_T0
B AF4 AIO CSI interface AVDD12_CSI         
CSI3A_L0P_T0
A AF3 AIO CSI interface AVDD12_CSI         
WBG (Wi-Fi/Bluetooth/GPS) 
XIN_WBG L10 AIO WBG crystal clock input AVDD15_WBG         
GL1_I K5 AIO GPS L1 I channel AVDD15_WBG         
GL1_Q K4 AIO GPS L1 Q channel AVDD15_WBG         
GL5_I K3 AIO GPS L5 I channel AVDD15_WBG         
GL5_Q L3 AIO GPS L5 Q channel AVDD15_WBG         
BT_IN J1 AIO BT I channel negative-end AVDD15_WBG         
BT_IP H1 AIO BT I channel positive-end AVDD15_WBG         
BT_QN K2 AIO BT Q channel negative-end AVDD15_WBG         
BT_QP J2 AIO BT Q channel positive-end AVDD15_WBG         
WF0_IN G5 AIO Wi-Fi I channel 0 negative-end AVDD15_WBG         
WF0_IP G6 AIO Wi-Fi I channel 0 positive-end AVDD15_WBG         
WF0_QN H6 AIO Wi-Fi Q channel 0 negative-end AVDD15_WBG         
WF0_QP H5 AIO Wi-Fi Q channel 0 positive-end AVDD15_WBG         
WF1_IN F3 AIO Wi-Fi I channel 1 negative-end AVDD15_WBG         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 71

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 71 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
WF1_IP F4 AIO Wi-Fi I channel 1 positive-end AVDD15_WBG         
WF1_QN G2 AIO Wi-Fi Q channel 1 negative-end AVDD15_WBG         
WF1_QP F2 AIO Wi-Fi Q channel 1 positive-end AVDD15_WBG         
USB 
USB_DM J31 AIO USB D- differential data line AVDD33_USB         
USB_DP J30 AIO USB D+ differential data line AVDD33_USB         
SSUSB 
SSUSB_TXP_P1 L30 AIO SSUSB TXDATA AVDD12_SSUSB         
SSUSB_TXN_P
1 L31 AIO SSUSB TXDATA AVDD12_SSUSB         
SSUSB_RXP_P1 K29 AIO SSUSB RXDATA AVDD12_SSUSB         
SSUSB_RXN_P
1 K28 AIO SSUSB RXDATA AVDD12_SSUSB         
PCIe 
CKM_XTAL_CK N11 AIO 26M reference clock input for PCIe AVDD12_PCIE         
PCIE_CKP M1 AIO PCIe interface AVDD12_PCIE         
PCIE_CKN M2 AIO PCIe interface AVDD12_PCIE         
PCIE_LN0_TXP N5 AIO PCIe interface AVDD12_PCIE         
PCIE_LN0_TXN N4 AIO PCIe interface AVDD12_PCIE         
PCIE_LN0_RXP M6 AIO PCIe interface AVDD12_PCIE         
PCIE_LN0_RXN M7 AIO PCIe interface AVDD12_PCIE         
UFS 
UFS_PLL_CKRE
F E34 AIO 26 MHz clock input for UFS AVDD12_UFS         
UFS_REFCK_O
UT H28 AIO UFS interface AVDD12_UFS         
UFS_RST_N F33 AIO UFS interface AVDD12_UFS         
UFS_RX0N C33 AIO UFS interface AVDD12_UFS         
UFS_RX0P C34 AIO UFS interface AVDD12_UFS         
UFS_RX1N D32 AIO UFS interface AVDD12_UFS         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 72

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 72 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
UFS_RX1P E32 AIO UFS interface AVDD12_UFS         
UFS_TX0N G33 AIO UFS interface AVDD12_UFS         
UFS_TX0P G34 AIO UFS interface AVDD12_UFS         
UFS_TX1N G30 AIO UFS interface AVDD12_UFS         
UFS_TX1P G31 AIO UFS interface AVDD12_UFS         
MISC 
TN_APPLLGP T19 AIO Reserved           
TP_APPLLGP R19 AIO Reserved           
PWRGD_TRIM J23 AIO Reserved           
EMI 
EMI0_CA0 A11 AIO DRAM interface AVDDQ_EMI         
EMI0_CA1 A9 AIO DRAM interface AVDDQ_EMI         
EMI0_CA2 B8 AIO DRAM interface AVDDQ_EMI         
EMI0_CA3 D9 AIO DRAM interface AVDDQ_EMI         
EMI0_CA4 B12 AIO DRAM interface AVDDQ_EMI         
EMI0_CA5 C9 AIO DRAM interface AVDDQ_EMI         
EMI0_CA6 D10 AIO DRAM interface AVDDQ_EMI         
EMI0_CK_C D7 AIO DRAM interface AVDDQ_EMI         
EMI0_CK_T C7 AIO DRAM interface AVDDQ_EMI         
EMI0_CS1 E8 AIO DRAM interface AVDDQ_EMI         
EMI0_CS0 E9 AIO DRAM interface AVDDQ_EMI         
EMI0_DMI0 B14 AIO DRAM interface AVDDQ_EMI         
EMI0_DMI1 C4 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ0 A15 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ1 B16 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ2 A17 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ3 D13 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ4 C13 AIO DRAM interface AVDDQ_EMI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 73

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 73 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
EMI0_DQ5 A13 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ6 D12 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ7 D11 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ8 A3 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ9 B4 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ10 A5 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ11 D5 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ12 B6 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ13 E6 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ14 A7 AIO DRAM interface AVDDQ_EMI         
EMI0_DQ15 D3 AIO DRAM interface AVDDQ_EMI         
EMI0_RDQS1_
C C1 AIO DRAM interface AVDDQ_EMI         
EMI0_RDQS1_
T D1 AIO DRAM interface AVDDQ_EMI         
EMI0_RDQS0_
C F15 AIO DRAM interface AVDDQ_EMI         
EMI0_RDQS0_
T E15 AIO DRAM interface AVDDQ_EMI         
EMI0_WCK0_C C14 AIO DRAM interface AVDDQ_EMI         
EMI0_WCK0_T D14 AIO DRAM interface AVDDQ_EMI         
EMI0_WCK1_C D2 AIO DRAM interface AVDDQ_EMI         
EMI0_WCK1_T C2 AIO DRAM interface AVDDQ_EMI         
EMI1_CA0 B24 AIO DRAM interface AVDDQ_EMI         
EMI1_CA1 B26 AIO DRAM interface AVDDQ_EMI         
EMI1_CA2 E22 AIO DRAM interface AVDDQ_EMI         
EMI1_CA3 A27 AIO DRAM interface AVDDQ_EMI         
EMI1_CA4 A23 AIO DRAM interface AVDDQ_EMI         
EMI1_CA5 C21 AIO DRAM interface AVDDQ_EMI         
EMI1_CA6 E21 AIO DRAM interface AVDDQ_EMI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 74

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 74 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
NC_EMI1_CA7   AIO DRAM interface AVDDQ_EMI         
EMI1_CK_C C24 AIO DRAM interface AVDDQ_EMI         
EMI1_CK_T D24 AIO DRAM interface AVDDQ_EMI         
EMI1_CS1 F24 AIO DRAM interface AVDDQ_EMI         
EMI1_CS0 F23 AIO DRAM interface AVDDQ_EMI         
EMI1_DMI0 C27 AIO DRAM interface AVDDQ_EMI         
EMI1_DMI1 A21 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ0 B32 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ1 A31 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ2 B30 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ3 D27 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ4 A29 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ5 D26 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ6 B28 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ7 C28 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ8 B20 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ9 A19 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ10 B18 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ11 C19 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ12 D18 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ13 B22 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ14 E19 AIO DRAM interface AVDDQ_EMI         
EMI1_DQ15 D20 AIO DRAM interface AVDDQ_EMI         
EMI1_RDQS0_
C C30 AIO DRAM interface AVDDQ_EMI         
EMI1_RDQS0_
T D30 AIO DRAM interface AVDDQ_EMI         
EMI1_RDQS1_
C F16 AIO DRAM interface AVDDQ_EMI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 75

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 75 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
EMI1_RDQS1_
T E16 AIO DRAM interface AVDDQ_EMI         
EMI1_WCK1_T C17 AIO DRAM interface AVDDQ_EMI         
EMI1_WCK1_C D17 AIO DRAM interface AVDDQ_EMI         
EMI1_WCK0_C D29 AIO DRAM interface AVDDQ_EMI         
EMI1_WCK0_T C29 AIO DRAM interface AVDDQ_EMI         
EMI_EXTR E1 AIO DRAM interface AVDDQ_EMI         
EMI_RESET_N C31 AIO DRAM interface AVDDQ_EMI         
Analog power 
AVDD12_USB L34 P Analog power for USB AVDD12_USB         
AVDD15_USB K33 P Analog power for USB AVDD15_USB         
AVDD33_USB L33 P Analog power for USB AVDD33_USB         
AVDD12_SSUS
B_P1 M34 P Analog power for SSUSB AVDD12_SSUSB_P1         
AVDD15_SSUS
B_P1 N34 P Analog power for SSUSB AVDD15_SSUSB_P1         
AVDD12_CKSQ AA29 P Analog power for clock square AVDD12_CKSQ         
AVDD15_CKSQ AA27 P Analog power for clock sqaure AVDD15_CKSQ         
AVDD08_DRV_
DSI AE29 P Analog power for DSI AVDD08_DRV_DSI         
AVDD12_DSI AC28 P Analog power for DSI AVDD12_DSI         
AVDD15_DSI AF28 P Analog power for DSI AVDD15_DSI         
AVDD12_DRF AN34 P Analog power for DRF AVDD12_DRF         
AVDD15_DRF AJ28 P Analog power for DRF AVDD15_DRF         
AVDD12_CSI AU6 P Analog power for CSI AVDD12_CSI         
AVDD12_PCIE P7 P Analog power for PCIe AVDD12_PCIE         
AVDD15_PCIE P8 P Analog power for PCIe AVDD15_PCIE         
AVDD12_WBG K7 P Analog power for WBG (Wi-Fi/BT/GPS) AVDD12_WBG         
AVDD15_WBG F1 P Analog power for WBG (Wi-Fi/BT/GPS) AVDD15_WBG         
AVDD12_EMI K12 P DDRPHY power AVDD12_EMI         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 76

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 76 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AVDD15_EMI J12 P DDRPHY power AVDD15_EMI         
AVDDQ_EMI0 K13 P DDRPHY power AVDDQ_EMI0         
K15 P DDRPHY power AVDDQ_EMI0         
AVDD075_EMI
0 
K14 P DDRPHY power AVDD075_EMI0         
K16 P DDRPHY power AVDD075_EMI0         
AVDDQ_EMI1 K19 P DDRPHY power AVDDQ_EMI1         
K21 P DDRPHY power AVDDQ_EMI1         
AVDD075_EMI
1 
K18 P DDRPHY power AVDD075_EMI1         
K20 P DDRPHY power AVDD075_EMI1         
VDD2H_EMI L17 P DRAM power VDD2H_EMI         
AVDD12_CKBU
F_UFS H27 P Analog power for UFS AVDD12_CKBUF_UF
S         
AVDD12_UFS K24 P Analog power for UFS AVDD12_UFS         
AVDD15_UFS J24 P Analog power for UFS AVDD15_UFS         
AVDD12_MCU
PLL T18 P Analog power for MCU PLL AVDD12_MCUPLL         
AVDD15_MCU
PLL R18 P Analog power for MCU PLL AVDD15_MCUPLL         
AVDD12_PLL AA19 P Analog power for AP PLL AVDD12_PLL         
AVDD15_PLL Y19 P Analog power for AP PLL AVDD15_PLL         
AVDD12_GPUP
LL AD14 P Analog power for GPU PLL AVDD12_GPUPLL         
AVDD15_GPUP
LL AE15 P Analog power for GPU PLL AVDD15_GPUPLL         
AVDD12_NPUP
LL P12 P Analog power for NPU PLL AVDD12_NPUPLL         
AVDD15_NPUP
LL R11 P Analog power for NPU PLL AVDD15_NPUPLL         
AVDD12_MDP
LL AC19 P Analog power for MD PLL AVDD12_MDPLL         
AVDD15_MDP
LL AD19 P Analog power for MD PLL AVDD15_MDPLL         
AVDD15_PROC R20 P Analog power for CPU AVDD15_PROC         
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 77

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 77 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AVDD15_PWR
GD H23 P Analog power for PWRGD AVDD15_PWRGD         
Digital power 
DVDD_CORE 
L23 P Digital power input for core           
M9 P Digital power input for core           
M12 P Digital power input for core           
M17 P Digital power input for core           
N13 P Digital power input for core           
N15 P Digital power input for core           
N17 P Digital power input for core           
R13 P Digital power input for core           
R15 P Digital power input for core           
T15 P Digital power input for core           
T17 P Digital power input for core           
U17 P Digital power input for core           
V15 P Digital power input for core           
V17 P Digital power input for core           
W14 P Digital power input for core           
Y9 P Digital power input for core           
Y12 P Digital power input for core           
Y15 P Digital power input for core           
Y17 P Digital power input for core           
AE14 P Digital power input for core           
AL10 P Digital power input for core           
DVDD_GPUST
ACK 
AA14 P Digital power input for GPU           
AB16 P Digital power input for GPU           
AC14 P Digital power input for GPU           
AC18 P Digital power input for GPU           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 78

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 78 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AD16 P Digital power input for GPU           
AE16 P Digital power input for GPU           
AF16 P Digital power input for GPU           
AF18 P Digital power input for GPU           
AG14 P Digital power input for GPU           
AG18 P Digital power input for GPU           
AH16 P Digital power input for GPU           
AJ14 P Digital power input for GPU           
AJ15 P Digital power input for GPU           
AJ16 P Digital power input for GPU           
AJ18 P Digital power input for GPU           
DVDD_MM 
AB10 P Digital power input for multimedia           
AC10 P Digital power input for multimedia           
AC12 P Digital power input for multimedia           
AC13 P Digital power input for multimedia           
AD10 P Digital power input for multimedia           
AE12 P Digital power input for multimedia           
AF12 P Digital power input for multimedia           
AG12 P Digital power input for multimedia           
AH11 P Digital power input for multimedia           
AJ12 P Digital power input for multimedia           
AJ13 P Digital power input for multimedia           
AK10 P Digital power input for multimedia           
DVDD_MODE
M 
AB19 P Digital power input for modem           
AB21 P Digital power input for modem           
AB23 P Digital power input for modem           
AB25 P Digital power input for modem           
AC21 P Digital power input for modem           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 79

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 79 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AD21 P Digital power input for modem           
AD23 P Digital power input for modem           
AD25 P Digital power input for modem           
AE19 P Digital power input for modem           
AF21 P Digital power input for modem           
AF23 P Digital power input for modem           
AF25 P Digital power input for modem           
AG19 P Digital power input for modem           
AG21 P Digital power input for modem           
AG25 P Digital power input for modem           
AH23 P Digital power input for modem           
AJ19 P Digital power input for modem           
AJ23 P Digital power input for modem           
AJ25 P Digital power input for modem           
AK26 P Digital power input for modem           
DVDD_NPU 
R10 P Digital power input for NPU           
T10 P Digital power input for NPU           
T11 P Digital power input for NPU           
U10 P Digital power input for NPU           
U12 P Digital power input for NPU           
U13 P Digital power input for NPU           
V10 P Digital power input for NPU           
V12 P Digital power input for NPU           
W10 P Digital power input for NPU           
DVDD_PROC_B 
M25 P Digital power input for big core           
N25 P Digital power input for big core           
P25 P Digital power input for big core           
R25 P Digital power input for big core           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 80

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 80 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
T25 P Digital power input for big core           
T26 P Digital power input for big core           
T27 P Digital power input for big core           
T28 P Digital power input for big core           
T29 P Digital power input for big core           
T31 P Digital power input for big core           
U25 P Digital power input for big core           
U29 P Digital power input for big core           
U31 P Digital power input for big core           
V31 P Digital power input for big core           
W21 P Digital power input for big core           
W25 P Digital power input for big core           
W26 P Digital power input for big core           
W27 P Digital power input for big core           
W28 P Digital power input for big core           
W29 P Digital power input for big core           
W31 P Digital power input for big core           
Y21 P Digital power input for big core           
Y25 P Digital power input for big core           
Y29 P Digital power input for big core           
Y31 P Digital power input for big core           
AA21 P Digital power input for big core           
AA23 P Digital power input for big core           
AA25 P Digital power input for big core           
DVDD_PROC_L 
N19 P Digital power input for little core           
N21 P Digital power input for little core           
N23 P Digital power input for little core           
P19 P Digital power input for little core           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 81

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 81 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
P21 P Digital power input for little core           
R23 P Digital power input for little core           
T21 P Digital power input for little core           
T23 P Digital power input for little core           
U19 P Digital power input for little core           
U21 P Digital power input for little core           
V19 P Digital power input for little core           
V21 P Digital power input for little core           
V23 P Digital power input for little core           
W19 P Digital power input for little core           
DVDD_SRAM_
CORE 
M15 P Digital power input for core SRAM           
M19 P Digital power input for core SRAM           
P14 P Digital power input for core SRAM           
U14 P Digital power input for core SRAM           
V14 P Digital power input for core SRAM           
Y14 P Digital power input for core SRAM           
Y16 P Digital power input for core SRAM           
AK18 P Digital power input for core SRAM           
DVDD_SRAM_
CORE_1 M27 P Digital power input for core SRAM           
DVDD_SRAM_
GPUSTACK 
AC16 P Digital power input for GPU SRAM           
AG16 P Digital power input for GPU SRAM           
DVDD_SRAM_
MM 
AB12 P Digital power input for multimedia 
SRAM           
AD12 P Digital power input for multimedia 
SRAM           
AE11 P Digital power input for multimedia 
SRAM           
AH12 P Digital power input for multimedia 
SRAM           
AC23 P Digital power input for modem SRAM           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 82

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 82 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
DVDD_SRAM_
MODEM 
AD20 P Digital power input for modem SRAM           
AG20 P Digital power input for modem SRAM           
AG23 P Digital power input for modem SRAM           
DVDD_SRAM_
NPU R9 P Digital power input for NPU SRAM           
DVDD_SRAM_
PROC_B 
R24 P Digital power input for big core SRAM           
U24 P Digital power input for big core SRAM           
Y23 P Digital power input for big core SRAM           
DVDD_SRAM_
PROC_L 
R21 P Digital power input for little core 
SRAM           
W20 P Digital power input for little core 
SRAM           
DVDD_SRAM_
SCP 
M21 P Digital power input for SCP SRAM           
M23 P Digital power input for SCP SRAM           
DVDD18_VQPS AA10 P eFuse blowing power control           
DVDD12_ESIM AU13 P Digital power input for ESIM           
DVDD18_ESIM AR14 P Digital power input for ESIM           
DVDD15_MSD
C1 AR17 P Digital power input for MSDC1           
DVDD28_MSD
C1 AP17 P Digital power input for MSDC1           
DVDD15_SIM AU17 P Digital power input for SIM1/SIM2           
DVDD28_SIM1 AU14 P Digital power input for SIM1           
DVDD28_SIM2 AT13 P Digital power input for SIM2           
DVDD12_IOB
M_MIPI AT31 P Digital power input for I/O           
DVDD18_IOB
M_MIPI AR29 P Digital power input for I/O           
DVDD18_IOB
M 
AP20 P Digital power input for I/O           
AP21 P Digital power input for I/O           
DVDD18_IOLM R31 P Digital power input for I/O           
DVDD18_IORB AP10 P Digital power input for I/O           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 83

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 83 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
DVDD12_IORT
_HS P2 P Digital power input for I/O           
DVDD18_IORT
_HS U5 P Digital power input for I/O           
DVDD18_IORT 
W4 P Digital power input for I/O           
Y5 P Digital power input for I/O           
Ground 
DVSS 
B2 G Ground           
B3 G Ground           
B5 G Ground           
B7 G Ground           
B9 G Ground           
B11 G Ground           
B13 G Ground           
B15 G Ground           
B17 G Ground           
B19 G Ground           
B21 G Ground           
B23 G Ground           
B25 G Ground           
B27 G Ground           
B29 G Ground           
B31 G Ground           
B33 G Ground           
C3 G Ground           
C5 G Ground           
C6 G Ground           
C10 G Ground           
C16 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 84

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 84 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
C18 G Ground           
C20 G Ground           
C25 G Ground           
C26 G Ground           
C32 G Ground           
D4 G Ground           
D6 G Ground           
D16 G Ground           
D19 G Ground           
D21 G Ground           
D25 G Ground           
D31 G Ground           
D33 G Ground           
D34 G Ground           
E2 G Ground           
E3 G Ground           
E4 G Ground           
E5 G Ground           
E7 G Ground           
E10 G Ground           
E13 G Ground           
E14 G Ground           
E23 G Ground           
E24 G Ground           
E25 G Ground           
E27 G Ground           
E28 G Ground           
E29 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 85

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 85 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
E30 G Ground           
E31 G Ground           
E33 G Ground           
F5 G Ground           
F6 G Ground           
F7 G Ground           
F8 G Ground           
F9 G Ground           
F10 G Ground           
F14 G Ground           
F17 G Ground           
F20 G Ground           
F25 G Ground           
F26 G Ground           
F27 G Ground           
F28 G Ground           
F29 G Ground           
F30 G Ground           
F31 G Ground           
F32 G Ground           
F34 G Ground           
G3 G Ground           
G4 G Ground           
G7 G Ground           
G8 G Ground           
G9 G Ground           
G10 G Ground           
G11 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 86

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 86 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
G15 G Ground           
G16 G Ground           
G17 G Ground           
G18 G Ground           
G19 G Ground           
G20 G Ground           
G21 G Ground           
G22 G Ground           
G23 G Ground           
G24 G Ground           
G25 G Ground           
G26 G Ground           
G27 G Ground           
G28 G Ground           
G29 G Ground           
G32 G Ground           
H2 G Ground           
H3 G Ground           
H4 G Ground           
H7 G Ground           
H8 G Ground           
H9 G Ground           
H10 G Ground           
H11 G Ground           
H12 G Ground           
H13 G Ground           
H14 G Ground           
H16 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 87

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 87 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
H17 G Ground           
H18 G Ground           
H19 G Ground           
H20 G Ground           
H21 G Ground           
H22 G Ground           
H24 G Ground           
H25 G Ground           
H26 G Ground           
H29 G Ground           
H30 G Ground           
H31 G Ground           
H32 G Ground           
H33 G Ground           
H34 G Ground           
J3 G Ground           
J4 G Ground           
J5 G Ground           
J6 G Ground           
J7 G Ground           
J8 G Ground           
J9 G Ground           
J10 G Ground           
J11 G Ground           
J22 G Ground           
J25 G Ground           
J28 G Ground           
J29 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 88

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 88 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
J32 G Ground           
K6 G Ground           
K8 G Ground           
K9 G Ground           
K10 G Ground           
K17 G Ground           
K26 G Ground           
K27 G Ground           
K30 G Ground           
K31 G Ground           
K32 G Ground           
L1 G Ground           
L2 G Ground           
L4 G Ground           
L5 G Ground           
L6 G Ground           
L7 G Ground           
L8 G Ground           
L9 G Ground           
L24 G Ground           
L26 G Ground           
L28 G Ground           
L29 G Ground           
L32 G Ground           
M3 G Ground           
M4 G Ground           
M5 G Ground           
M8 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 89

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 89 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
M14 G Ground           
M16 G Ground           
M18 G Ground           
M20 G Ground           
M22 G Ground           
M26 G Ground           
M28 G Ground           
M30 G Ground           
M31 G Ground           
N1 G Ground           
N2 G Ground           
N3 G Ground           
N6 G Ground           
N7 G Ground           
N8 G Ground           
N9 G Ground           
N10 G Ground           
N12 G Ground           
N16 G Ground           
N18 G Ground           
N20 G Ground           
N22 G Ground           
N24 G Ground           
N26 G Ground           
N28 G Ground           
N30 G Ground           
N31 G Ground           
P3 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 90

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 90 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
P4 G Ground           
P5 G Ground           
P6 G Ground           
P9 G Ground           
P10 G Ground           
P16 G Ground           
P18 G Ground           
P22 G Ground           
P26 G Ground           
P27 G Ground           
R7 G Ground           
R8 G Ground           
R14 G Ground           
R16 G Ground           
R22 G Ground           
R26 G Ground           
R28 G Ground           
T1 G Ground           
T9 G Ground           
T13 G Ground           
T14 G Ground           
T16 G Ground           
T22 G Ground           
T24 G Ground           
T30 G Ground           
U2 G Ground           
U3 G Ground           
U7 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 91

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 91 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
U8 G Ground           
U9 G Ground           
U11 G Ground           
U18 G Ground           
U20 G Ground           
U22 G Ground           
U26 G Ground           
U27 G Ground           
U28 G Ground           
U30 G Ground           
V1 G Ground           
V9 G Ground           
V11 G Ground           
V13 G Ground           
V16 G Ground           
V18 G Ground           
V20 G Ground           
V22 G Ground           
V24 G Ground           
V25 G Ground           
V27 G Ground           
V28 G Ground           
V29 G Ground           
V30 G Ground           
W6 G Ground           
W9 G Ground           
W11 G Ground           
W16 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 92

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 92 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
W18 G Ground           
W22 G Ground           
W30 G Ground           
Y4 G Ground           
Y11 G Ground           
Y13 G Ground           
Y18 G Ground           
Y22 G Ground           
Y24 G Ground           
Y26 G Ground           
Y27 G Ground           
Y28 G Ground           
Y30 G Ground           
AA6 G Ground           
AA15 G Ground           
AA17 G Ground           
AA20 G Ground           
AA22 G Ground           
AA26 G Ground           
AA30 G Ground           
AA31 G Ground           
AA32 G Ground           
AA33 G Ground           
AB5 G Ground           
AB6 G Ground           
AB11 G Ground           
AB13 G Ground           
AB15 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 93

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 93 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AB17 G Ground           
AB26 G Ground           
AB27 G Ground           
AB28 G Ground           
AB29 G Ground           
AC1 G Ground           
AC2 G Ground           
AC6 G Ground           
AC15 G Ground           
AC17 G Ground           
AC20 G Ground           
AC22 G Ground           
AC24 G Ground           
AC27 G Ground           
AC29 G Ground           
AD1 G Ground           
AD2 G Ground           
AD3 G Ground           
AD4 G Ground           
AD5 G Ground           
AD11 G Ground           
AD13 G Ground           
AD15 G Ground           
AD17 G Ground           
AD22 G Ground           
AD26 G Ground           
AD27 G Ground           
AD28 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 94

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 94 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AD30 G Ground           
AD31 G Ground           
AD34 G Ground           
AE3 G Ground           
AE4 G Ground           
AE6 G Ground           
AE7 G Ground           
AE9 G Ground           
AE13 G Ground           
AE17 G Ground           
AE20 G Ground           
AE22 G Ground           
AE24 G Ground           
AE27 G Ground           
AE28 G Ground           
AE32 G Ground           
AF1 G Ground           
AF2 G Ground           
AF5 G Ground           
AF6 G Ground           
AF7 G Ground           
AF9 G Ground           
AF11 G Ground           
AF14 G Ground           
AF15 G Ground           
AF17 G Ground           
AF20 G Ground           
AF24 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 95

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 95 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AF26 G Ground           
AF29 G Ground           
AF34 G Ground           
AG4 G Ground           
AG6 G Ground           
AG7 G Ground           
AG9 G Ground           
AG11 G Ground           
AG13 G Ground           
AG15 G Ground           
AG17 G Ground           
AG22 G Ground           
AG26 G Ground           
AG27 G Ground           
AG28 G Ground           
AG29 G Ground           
AG30 G Ground           
AG31 G Ground           
AG32 G Ground           
AG33 G Ground           
AH1 G Ground           
AH4 G Ground           
AH5 G Ground           
AH6 G Ground           
AH7 G Ground           
AH9 G Ground           
AH13 G Ground           
AH15 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 96

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 96 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AH17 G Ground           
AH22 G Ground           
AH24 G Ground           
AH26 G Ground           
AH27 G Ground           
AH28 G Ground           
AH29 G Ground           
AH32 G Ground           
AH33 G Ground           
AJ1 G Ground           
AJ6 G Ground           
AJ7 G Ground           
AJ9 G Ground           
AJ17 G Ground           
AJ20 G Ground           
AJ22 G Ground           
AJ24 G Ground           
AJ26 G Ground           
AJ27 G Ground           
AJ29 G Ground           
AJ30 G Ground           
AJ31 G Ground           
AJ34 G Ground           
AK3 G Ground           
AK6 G Ground           
AK7 G Ground           
AK9 G Ground           
AK11 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 97

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 97 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AK12 G Ground           
AK13 G Ground           
AK14 G Ground           
AK15 G Ground           
AK16 G Ground           
AK17 G Ground           
AK19 G Ground           
AK20 G Ground           
AK21 G Ground           
AK22 G Ground           
AK23 G Ground           
AK24 G Ground           
AK25 G Ground           
AK27 G Ground           
AK28 G Ground           
AK29 G Ground           
AK32 G Ground           
AK33 G Ground           
AL5 G Ground           
AL6 G Ground           
AL7 G Ground           
AL9 G Ground           
AL27 G Ground           
AL28 G Ground           
AL29 G Ground           
AL30 G Ground           
AL31 G Ground           
AL32 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 98

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 98 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AL33 G Ground           
AM1 G Ground           
AM6 G Ground           
AM7 G Ground           
AM28 G Ground           
AM29 G Ground           
AM30 G Ground           
AM31 G Ground           
AM34 G Ground           
AN1 G Ground           
AN2 G Ground           
AN3 G Ground           
AN6 G Ground           
AN29 G Ground           
AN32 G Ground           
AN33 G Ground           
AP4 G Ground           
AP7 G Ground           
AP18 G Ground           
AP19 G Ground           
AP23 G Ground           
AP25 G Ground           
AP30 G Ground           
AP31 G Ground           
AP32 G Ground           
AP34 G Ground           
AR1 G Ground           
AR6 G Ground           
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 99

Pin Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 99 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name  Ball location Type Description Power Domain PU/PD I/O Reset Default Mode Signal Name Aux Function 
AR7 G Ground           
AR8 G Ground           
AR30 G Ground           
AR31 G Ground           
AR32 G Ground           
AR34 G Ground           
AT4 G Ground           
AT5 G Ground           
AT6 G Ground           
AT32 G Ground           
AT33 G Ground           
Electrostatic discharge (ESD) 
CDM3P5A J33 G Reserved           
CDM5P5A J34 G Reserved           
 
 
 MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 100

Electrical Characteristics 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
 100 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4 Electrical Characteristics 
4.1 Absolute Maximum Ratings 
4.1.1 Free-Air and Storage Thermal Specification 
Table 4-1. Absolute maximum ratings for ambient temperature 
Parameter Min. Max. Unit 
Free-air temperature range -40 85 °C 
Storage temperature range -55 150 °C 
4.1.2 Power Supply 
This section lists the maximum values. Note that the values should not be exceeded. 
Table 4-2. Absolute maximum ratings for power supply 
Ball Name Description Max. Unit 
AVDD15_WBG Analog power 1.65 V 
AVDD12_WBG Analog power 1.32 V 
AVDD12_UFS Analog power 1.32 V 
AVDD15_UFS Analog power 1.65 V 
AVDD12_CKBUF_UFS Analog power 1.32 V 
AVDD12_USB Analog power 1.32 V 
AVDD15_USB Analog power 1.65 V 
AVDD33_USB Analog power 3.21 V 
AVDD15_PROC Analog power 1.65 V 
AVDD12_MCUPLL Analog power 1.32 V 
AVDD15_MCUPLL Analog power 1.65 V 
AVDD12_NPUPLL Analog power 1.32 V 
AVDD15_NPUPLL Analog power 1.65 V 
AVDD12_GPUPLL Analog power 1.32 V 
AVDD15_GPUPLL Analog power 1.65 V 
AVDD12_MDPLL Analog power 1.32 V 
AVDD15_MDPLL Analog power 1.65 V 
AVDD12_PLL Analog power 1.32 V 
AVDD15_PLL Analog power 1.65 V 
AVDD15_CKSQ Analog power 1.65 V 
AVDD12_CKSQ Analog power 1.32 V 
AVDD12_DRF Analog power 1.32 V 
AVDD15_DRF Analog power 1.65 V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 101

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 101 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name Description Max. Unit 
AVDD12_CSI Analog power 1.32 V 
AVDD08_DRV_DSI Analog power 0.88 V 
AVDD12_DSI Analog power 1.32 V 
AVDD15_DSI Analog power 1.65 V 
AVDD12_SSUSB_P1 Analog power 1.32 V 
AVDD15_SSUSB_P1 Analog power 1.65 V 
AVDD12_PCIE Analog power 1.32 V 
AVDD15_PCIE Analog power 1.65 V 
AVDD12_EMI Analog DDRPHY power 1.26 V 
AVDD15_EMI Analog DDRPHY power 1.65 V 
AVDDQ_EMI0/1 Analog DDRPHY power 0.63 V 
AVDD075_EMI0/1 Analog DDRPHY power 0.89 V 
DVDD18_IOLM Digital I/O power 1.98 V 
DVDD18_IORT Digital I/O power 1.98 V 
DVDD18_IOBM Digital I/O power 1.98 V 
DVDD18_IORB Digital I/O power 1.98 V 
DVDD12_IOBM_MIPI Digital I/O power 1.28 V 
DVDD18_IOBM_MIPI Digital I/O power 1.9 V 
DVDD12_IORT_HS Digital I/O power 1.28 V 
DVDD18_IORT_HS Digital I/O power 1.9 V 
DVDD15_MSDC1 Digital I/O power 1.28 V 
DVDD28_MSDC1 Digital I/O power 1.9 V 
DVDD15_SIM Digital I/O power 1.6 V 
DVDD28_SIM1 Digital I/O power 3.15 V 
DVDD28_SIM2 Digital I/O power 3.15 V 
DVDD12_ESIM Digital I/O power 1.28 V 
DVDD18_ESIM Digital I/O power 1.9 V 
DVDD18_VQPS Digital power 1.98 V 
DVDD_PROC_L Digital power 0.9 V 
DVDD_PROC_B Digital power 1.05 V 
DVDD_SRAM_PROC_L Digital power 0.9 V 
DVDD_SRAM_PROC_B Digital power 1.05 V 
DVDD_NPU Digital power 0.85 V 
DVDD_SRAM_NPU Digital power 0.85 V 
DVDD_GPUSTACK Digital power 0.85 V 
DVDD_SRAM_GPUSTACK Digital power 0.85 V 
DVDD_MM Digital power 0.7 V 
DVDD_SRAM_MM Digital power 0.75 V 
DVDD_MODEM Digital power 0.825 V 
DVDD_SRAM_MODEM Digital power 0.825 V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 102

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 102 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name Description Max. Unit 
DVDD_SRAM_CORE Digital power 0.825 V 
DVDD_CORE Digital power 0.825 V 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 103

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 103 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.2 Recommended Operating Conditions 
This section lists the recommended conditions for device operations. 
 
4.2.1 Thermal Operating Specification 
Table 4-3. Thermal operating specification 
Symbol Description Min. Max. 1 Unit 
Tambient 
Tjunction Operating junction temperature Tambient = -40 Tjunction = 125 °C 
(1) Full electrical specifications are guaranteed only up to 105°C junction temperature. 
 
4.2.2 Power Supply 
Table 4-4. Recommended operating conditions for power supply 
 
Ball Name Description Min. Typ. Max. Unit 
AVDD08_DRV_DSI Analog power 0.7125 0.75 0.84 V 
AVDD12_WBG Analog power 1.14 1.2 1.26 V 
AVDD12_UFS Analog power 1.14 1.2 1.26 V 
AVDD12_USB Analog power 1.14 1.2 1.26 V 
AVDD12_CKBUF_UFS Analog power 1.14 1.2 1.26 V 
AVDD12_CKSQ Analog power 1.14 1.2 1.26 V 
AVDD12_DRF Analog power 1.14 1.2 1.26 V 
AVDD12_CSI Analog power 1.14 1.2 1.26 V 
AVDD12_DSI Analog power 1.14 1.2 1.26 V 
AVDD12_MCUPLL Analog power 1.14 1.2 1.26 V 
AVDD12_NPUPLL Analog power 1.14 1.2 1.26 V 
AVDD12_GPUPLL Analog power 1.14 1.2 1.26 V 
AVDD12_MDPLL Analog power 1.14 1.2 1.26 V 
AVDD12_PLL Analog power 1.14 1.2 1.26 V 
AVDD12_SSUSB_P1 Analog power 1.14 1.2 1.26 V 
AVDD12_PCIE Analog power 1.14 1.2 1.26 V 
AVDD15_UFS Analog power 1.425 1.5 1.575 V 
AVDD15_WBG Analog power 1.425 1.5 1.575 V 
AVDD15_USB Analog power 1.425 1.5 1.575 V 
AVDD15_DSI Analog power 1.425 1.5 1.575 V 
AVDD15_CKSQ Analog power 1.425 1.5 1.575 V 
AVDD15_DRF Analog power 1.425 1.5 1.575 V 
AVDD15_SSUSB_P1 Analog power 1.425 1.5 1.575 V 
AVDD15_PCIE Analog power 1.425 1.5 1.575 V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 104

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 104 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name Description Min. Typ. Max. Unit 
AVDD15_MCUPLL Analog power 1.425 1.5 1.575 V 
AVDD15_NPUPLL Analog power 1.425 1.5 1.575 V 
AVDD15_GPUPLL Analog power 1.425 1.5 1.575 V 
AVDD15_MDPLL Analog power 1.425 1.5 1.575 V 
AVDD15_PROC Analog power 1.425 1.5 1.575 V 
AVDD15_PLL Analog power 1.425 1.5 1.575 V 
AVDD33_USB Analog power 2.85 3 3.15 V 
AVDDQ_EMI0/1 Analog DDRPHY power 0.57 0.6 0.63 V 
AVDD075_EMI0/1 Analog DDRPHY power 0.55 0.75 0.7875 V 
AVDD12_EMI Analog DDRPHY power 1.14 1.2 1.26 V 
AVDD15_EMI Analog DDRPHY power 1.425 1.5 1.575 V 
DVDD_PROC_L Digital power 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
0.495 0.55 0.605 V 
DVDD_PROC_B Digital power 
0.945 1.05 1.155 V 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
0.495 0.55 0.605 V 
DVDD_SRAM_PROC_L Digital power 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
DVDD_SRAM_PROC_B Digital power 
0.945 1.05 1.155 V 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
DVDD_NPU Digital power 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
0.585 0.65 0.715 V 
0.495 0.55 0.605 V 
DVDD_SRAM_NPU Digital power 
0.81 0.9 0.99 V 
0.675 0.75 0.825 V 
DVDD_GPUSTACK Digital power 
0.765 0.85 0.935 V 
0.608 0.675 0.743 V 
0.495 0.55 0.605 V 
DVDD_SRAM_GPUSTACK Digital power 
0.765 0.85 0.935 V 
0.675 0.75 0.825 V 
DVDD_MM Digital power 
0.63 0.7 0.77 V 
0.585 0.65 0.715 V 
0.54 0.6 0.66 V 
0.518 0.575 0.632 V 
DVDD_SRAM_MM Digital power 0.675 0.75 0.825 V 
DVDD_MODEM Digital power 0.72 0.8 0.88 V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 105

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 105 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Ball Name Description Min. Typ. Max. Unit 
0.675 0.75 0.825 V 
0.608 0.675 0.742 V 
0.563 0.625 0.687 V 
0.518 0.575 0.632 V 
0.495 0.55 0.605 V 
DVDD_SRAM_MODEM Digital power 
0.72 0.8 0.88 V 
0.675 0.75 0.825 V 
0.495 0.55 0.605 V 
DVDD_SRAM_CORE Digital power 
0.743 0.825 0.907 V 
0.675 0.75 0.825 V 
0.495 0.55 0.605 V 
DVDD_CORE Digital power 
0.743 0.825 0.907 V 
0.653 0.725 0.797 V 
0.585 0.65 0.715 V 
0.54 0.6 0.66 V 
0.518 0.575 0.632 V 
0.495 0.55 0.605 V 
DVDD18_VQPS Digital power 1.62 1.8 1.98 V 
DVDD18_IOLM Digital I/O power 1.62 1.8 1.98 V 
DVDD18_IORT Digital I/O power 1.62 1.8 1.98 V 
DVDD18_IOBM Digital I/O power 1.62 1.8 1.98 V 
DVDD18_IORB Digital I/O power 1.62 1.8 1.98 V 
DVDD12_IOBM_MIPI Digital I/O power 1.12 1.2 1.28 V 
DVDD18_IOBM_MIPI Digital I/O power 1.7 1.8 1.9 V 
DVDD12_IORT_HS Digital I/O power 1.12 1.2 1.28 V 
DVDD18_IORT_HS Digital I/O power 1.7 1.8 1.9 V 
DVDD15_MSDC1 Digital I/O power 1.12 1.2 1.28 V 
DVDD28_MSDC1 Digital I/O power 1.7 1.8 1.9 V 
DVDD15_SIM Digital I/O power 1.4 1.5 1.6 V 
DVDD28_SIM1 Digital I/O power 2.7 3 3.15 V 
DVDD28_SIM2 Digital I/O power 2.7 3 3.15 V 
DVDD12_ESIM Digital I/O power 1.12 1.2 1.28 V 
DVDD18_ESIM Digital I/O power 1.7 1.8 1.9 V 
 
 
4.3 DC Electrical Characteristics 
This section provides DC parameters of the device. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 106

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 106 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.3.1 X32K_IN DC Electrical Characteristics 
Table 4-5. X32K_IN DC electrical characteristics (DVDD18_IOBM = 1.8V) 
Parameter Description Min. Typ. Max. Unit 
VIH High-level input voltage 0.65*DVDD18_IOBM - DVDD18_IOBM + 0.3 V 
VIL Low-level input voltage -0.3 - 0.35*DVDD18_IOBM V 
VOH High-level output voltage 0.75*DVDD18_IOBM - - V 
VOL Low-level output voltage - - 0.25*DVDD18_IOBM V 
Fx32k_in Input clock frequency - 32 - kHz 
DCx32k_in Input signal duty cycle 45 50 55 % 
 
4.3.2 SPI DC Electrical Characteristics 
Table 4-6. SPI DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) 
Parameter Description Min. Typ. Max. Unit 
VIH High-level input voltage 0.65* DVDD18_IOxx_xx - DVDD18_IOxx_xx + 0.3 V 
VIL Low-level input voltage -0.3 - 0.35* DVDD18_IOxx_xx V 
VOH High-level output voltage 0.75* DVDD18_IOxx_xx - - V 
VOL Low-level output voltage - - 0.25* DVDD18_IOxx_xx V 
 
4.3.3 I2S DC Electrical Characteristics 
Table 4-7. I2S DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) 
Parameter Description Min. Typ. Max. Unit 
VIH High-level input voltage 0.65* DVDD18_IOxx_xx - DVDD18_IOxx_xx + 0.3 V 
VIL Low-level input voltage -0.3 - 0.35* DVDD18_IOxx_xx V 
VOH High-level output voltage 0.75* DVDD18_IOxx_xx - - V 
VOL Low-level output voltage - - 0.2* DVDD18_IOxx_xx V 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 107

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 107 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.3.4 I2C/I3C DC Electrical Characteristics 
Table 4-8. I2C/I3C DC electrical characteristics (DVDD18_IOxx_xx = 1.8V) 
Parameter Description Min. Typ. Max. Unit 
VIH High-level input voltage 0.65* DVDD18_IOxx_xx - DVDD18_IOxx_xx + 0.3 V 
VIL Low-level input voltage -0.3 - 0.35* DVDD18_IOxx_xx  V 
VOL Low-level output voltage - - 0.2* DVDD18_IOxx_xx V 
4.3.5 MSDC DC Electrical Characteristics 
Table 4-9. MSDC1 DC electrical characteristics (DVDD28_MSDC1 = 3V) 
Parameter Description Min. Typ. Max. Unit 
VIH Input logic high voltage 0.625* DVDD28_MSDC1 - DVDD28_MSDC1+0.3 V 
VIL Input logic low voltage -0.3 - 0.25* DVDD28_MSDC1 V 
VOH DC output logic high voltage 0.75* DVDD28_MSDC1 - DVDD28_MSDC1+0.3 V 
VOL DC output logic low voltage -0.3 - 0.125* DVDD28_MSDC1 V 
Table 4-10. MSDC1 DC electrical characteristics (DVDD28_MSDC1 = 1.8V) 
Parameter Description Min. Typ. Max. Unit 
VIH Input logic high voltage 0.7* DVDD28_MSDC1 - DVDD28_MSDC1+0.3 V 
VIL Input logic low voltage -0.3 - 0.3* DVDD28_MSDC1 V 
VOH DC output logic high voltage 1.4 - DVDD28_MSDC1+0.3 V 
VOL DC output logic low voltage -0.3 - 0.45 V 
4.3.6 SIM DC Electrical Characteristics 
Table 4-11. SIM DC electrical characteristics 
Parameter Condition Symbol Min. Typ. Max. Unit 
SIM1_SIO 
High-level input voltage 
DVDD28_SIM1 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output 
voltage Voh 1.53 1.8 N/A V 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM1 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output 
voltage Voh 2.55 3.0 N/A V 
Low-level output voltage Vol N/A 0.0 0.45 V 
SIM1_SCLK 
High-level input voltage 
DVDD28_SIM1 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output 
voltage Voh 1.53 1.8 N/A V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 108

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 108 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Parameter Condition Symbol Min. Typ. Max. Unit 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM1 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output voltage Voh 2.55 3.0 N/A V 
Low-level output voltage Vol N/A 0.0 0.45 V 
SIM1_SRST 
High-level input voltage 
DVDD28_SIM1 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output voltage Voh 1.53 1.8 N/A V 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM1 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output voltage Voh 2.55 3.0 N/A V 
Low-level output voltage Vol N/A 0.0 0.45 V 
SIM2_SIO 
High-level input voltage 
DVDD28_SIM2 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output voltage Voh 1.53 1.8 N/A V 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM2 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output voltage Voh 2.55 3.0 N/A V 
Low-level output voltage Vol N/A 0.0 0.45 V 
SIM2_SCLK 
High-level input voltage 
DVDD28_SIM2 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output voltage Voh 1.53 1.8 N/A V 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM2 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output voltage Voh 2.55 3.0 N/A V 
Low-level output voltage Vol N/A 0.0 0.45 V 
SIM2_SRST 
High-level input voltage 
DVDD28_SIM2 = 1.8V 
Vih 1.35 1.8 N/A V 
Low-level input voltage Vil N/A 0.0 0.45 V 
High-level output voltage Voh 1.53 1.8 N/A V 
Low-level output voltage Vol N/A 0.0 0.27 V 
High-level input voltage 
DVDD28_SIM2 = 3.0V 
Vih 1.875 3.0 N/A V 
Low-level input voltage Vil N/A 0.0 0.75 V 
High-level output voltage Voh 2.55 3.0 N/A V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 109

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 109 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Parameter Condition Symbol Min. Typ. Max. Unit 
Low-level output voltage Vol N/A 0.0 0.45 V 
 
4.4 AC Electrical Characteristics and Timing Diagrams 
4.4.1 External Memory Interface for LPDDR5 
 
Figure 4-1. LPDDR5 WCK VIX definition 
 
 
Figure 4-2. LPDDR5 single-ended output slew-rate definition 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 110

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 110 
Confidential B 
MT8668 Application Processor 
Technical Brief 
 
Figure 4-3. LPDDR5 differential output slew-rate definition 
 
Figure 4-4. LPDDR5 RX mask 
 
Table 4-12. LPDDR5 AC timing parameter table of external memory interface 
Symbol Description Min. Typ. Max. Unit 
Vix_WCK_ratio WCK differential input crosspoint voltage ratio - - 20 % 
Vix_CK_ratio CK differential input crosspoint voltage ratio - - 25 % 
vDIVW DQ RX mask height - - 100 mV 
tDIVW1 DQ RX mask width - - 0.35 UI 
tDIVW2 DQ RX mask width at vDIVW - - 0.18 UI 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 111

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 111 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.4.2 SPI AC Timing Characteristics 
CSB
SCK
MOSI
MISO
tCS_SU tCS_HD
tMOSI_SU
tSCKH
tSCKL
tMOSI_HD
tMISO_REQ
 
Figure 4-5. SPI timing diagram 
 
Table 4-13. SPI AC timing parameters 
Symbol Description 
Performance 
Unit 
Min. Typ. Max. 
fSCK SPI master SCK clock frequency - - 52 MHz 
tMOSI_SU MOSI to SCK rising setup time 6 - - ns 
tMOSI_HD SCK rising to MOSI hold time 6 - - ns 
tSCKL SCK low pulse 7.2 - - ns 
tSCKH SCK high pulse 7.2 - - ns 
tCSB_SU CSB falling to SCK rising setup time 1.8 - - ns 
tCSB_HD SCK falling to CSB rising hold time 1.8 - - ns 
tMISO_REQ SCK falling to MISO change time requirement 0 - 10 ns 
Note: 
 In the CS GPIO mode, SPI_CS is handled by the software. 
‒ The software should pull down the SPI_CS pin before the SPI starts transferring. 
‒ The software should pull up the SPI_CS pin when the SPI completes the transaction. 
Based on the sequence above, the minimum specification of tCSB_SU and tCSB_HD time can be satisfied. 
 To achieve the max. frequency of SCK, the internal sample clock delay of the SPI master should be adjusted. 
 MISO data valid time should be one cycle of fSCK. 
 For dual mode, all the output data pins can refer to the MOSI timing parameters, and all the input data pins can refer to the MISO 
timing parameters. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 112

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 112 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.4.3 I2S AC Timing Characteristics 
 
Figure 4-6. I2S master mode timing diagram 
 
Table 4-14. I2S AC timing parameters 
Parameter Description Min. Typ. Max. Unit 
fS Sampling frequency 8 - 192 kHz 
tWS Word select period 32 - 64 1/fBCK 
fMCK Master clock frequency - - 24.576 MHz 
fBCK Serial clock frequency 32*fS - 64*fS MHz 
tBCK_H BCK high-level time - 0.5 - 1/fBCK 
tBCK_L BCK low-level time - 0.5 - 1/fBCK 
tV_WS WS valid time - - 0.2 1/fBCK 
tH_WS WS hold time 0 - - 1/fBCK 
tV_DO DO valid time - - 0.2 1/fBCK 
tH_DO DO hold time 0 - - 1/fBCK 
tS_DI DI setup time 0.2 - - 1/fBCK 
tH_DI DI hold time 0.2 - - 1/fBCK 
 
BCK
WS
DO
DI
tBCK_LtBCK_HtV_WS
tV_DO
tH_DO
tS_DI tH_DI
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 113

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 113 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.4.4 I2C AC Timing Characteristics 
 
Figure 4-7. I2C AC timing diagram of F/S mode 
 
Table 4-15. I2C AC timing parameters for standard, fast, and fast mode plus 
Symbol Parameter 
Standard Mode Fast Mode Fast Mode Plus 
Unit Remark 
Min. Max. Min. Max. Min. Max. 
fSCL Serial clock line (SCL) clock 
frequency 0 100 0 400 0 1,000 kHz - 
tHD;STA 
Hold time (repeated) 
START condition 4.0  - 0.6 - 0.26 - µs - 
tLOW 
LOW period of the SCL 
clock 4.7 - 1.3 - 0.5 - µs - 
tHIGH 
HIGH period of the SCL 
clock 4.0  - 0.6 - 0.26 - µs - 
tSU;STA 
Set-up time for a repeated 
START condition 4.7 - 0.6 - 0.26 - µs - 
tHD;DAT Data hold time 5.0 - 0 - 0 - µs I2C-bus 
devices 
tSU;DAT Data set-up time 250 - 100 - 50 - ns - 
tr 
Rise time of both SDA and 
SCL signals - 1,000 20 300 - 120 ns - 
tf 
Fall time of both SDA and 
SCL signals - 300 20x 
(VDD/5.5V) 300 20x 
(VDD/5.5V) 120 ns 
VDD is 
I2C I/O 
voltage. 
tSU;STO 
Set-up time for STOP 
condition 4.0  - 0.6 - 0.26 - ns - 
tVD;DAT Data valid time - 3.45 - 0.9 - 0.45 µs - 
tVD;ACK 
Data valid acknowledge 
time - 3.45 - 0.9 - 0.45 µs - 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 114

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 114 
Confidential B 
MT8668 Application Processor 
Technical Brief 
 
Figure 4-8. I2C AC timing diagram of HS mode 
 
Table 4-16. I2C AC timing parameters for HS mode 
Symbol Parameter 
Cb = 100 pF (max.) Cb = 400 pF 
Unit Note 
Min. Max. Min. Max. 
fSCL SCL clock frequency 0 3.4 0 1.7 MHz - 
tSU;STA 
Set-up time (repeated) START 
condition 160  - 160 - ns - 
tHD;STA 
Hold time (repeated) START 
condition 160  - 160 - ns - 
tLOW LOW period of the SCL clock 160 - 320 - ns - 
tHIGH HIGH period of the SCL clock 60 - 120 - ns - 
tHD;DAT Data hold time 0 70 0 150 ns I2C-bus 
devices 
tSU;DAT Data set-up time 10 - 10 - ns - 
tr Rise time of SCLH signal 10 40 20 80 ns - 
tf Fall time of SCLH signal 10 40 20 80 ns  
tSU;STO Set-up time for STOP condition 160 - 160 - ns - 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 115

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 115 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.4.5 MSDC AC Timing Characteristics 
4.4.5.1 Default Speed Timing 
 
Figure 4-9. MSDC device input timing diagram of default speed 
 
 
Figure 4-10. MSDC device input timing diagram of default speed 
 
Table 4-17. MSDC device AC timing parameters of default speed 
Parameter Symbol Min. Max. Unit 
Clock CLK (All values are referred to min. (VIH) and max. (VIL).) 
Clock frequency data transfer mode fPP 0 25 MHz 
Clock frequency identification mode fOD 0/100 400 kHz 
Clock low time tWL 10 - ns 
Clock high time tWH 10 - ns 
Clock rise time tTLH - 10 ns 
Clock fall time tTHL - 10 ns 
Input CMD, DAT (referenced to CLK) 
Input setup time TISU 5 - ns 
Input hold time TIH 5 - ns 
Output CMD, DAT (referenced to CLK) 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 116

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 116 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Parameter Symbol Min. Max. Unit 
Output delay time during data transfer 
mode  TODLY 0 14 ns 
Output delay time during identification 
mode  TODLY 0 50 ns 
 
4.4.5.2 High Speed Timing 
 
Figure 4-11. MSDC device input timing diagram of high speed 
 
 
Figure 4-12. MSDC device output timing diagram of high speed 
 
Table 4-18. MSDC device AC timing parameters of high speed 
Parameter Symbol Min. Max. Unit 
Clock CLK (All values are referred to min. (VIH) and max. (VIL).) 
Clock frequency data transfer mode fPP 0 50 MHz 
Clock low time tWL 7 - ns 
CLK high time tWH 7 - ns 
CLK rise time tTLH - 3 ns 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 117

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 117 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Parameter Symbol Min. Max. Unit 
CLK fall time tTHL - 3 ns 
Input CMD, DAT (referenced to CLK) 
Input setup time tISU 6 - ns 
Input hold time tIH 2 - ns 
Output CMD, DAT (referenced to CLK) 
Output delay time during data transfer 
mode tODLY  - 14 ns 
Output hold time tOH 2.5 - ns 
Total system capacitance for each line CL - 40 pF 
 
4.4.5.3 SDR12/SDR25/SDR50/SDR104 Mode Timing 
 
Figure 4-13. MSDC device clock timing diagram of SDR12/SDR25/SDR50/SDR104 mode  
 
 
Figure 4-14. MSDC device input timing diagram of SDR50/SDR104 mode 
 
 
Figure 4-15. MSDC device output timing diagram of fixed data window (SDR12/SDR25/SDR50) 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 118

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 118 
Confidential B 
MT8668 Application Processor 
Technical Brief 
 
Figure 4-16. MSDC device output timing diagram of variable window (SDR104) 
 
Table 4-19. MSDC device AC timing parameters of SDR12/SDR25/SDR50/SDR104 mode 
Symbol Min. Max. Unit Remark 
Clock CLK 
tCLK  4.8 - ns  208 MHz (max.), between rising edges, VCT = 0.975V 
tCR, tCF  - 0.2*tCLK  ns 
tCR, tCF < 0.96 ns (max.) at 208 MHz, CCARD = 10 pF 
tCR, tCF < 2.00 ns (max.) at 100 MHz, CCARD = 10 pF 
The absolute maximum value of tCR, tCF is 10 ns 
regardless of clock frequency. 
Clock duty  30 70 % - 
Input CMD, DAT (SDR104) 
tIS 1.40 - ns CCARD = 10 pF, VCT = 0.975V 
tIH 0.80 - ns CCARD = 5 pF, VCT = 0.975V 
Input CMD, DAT (SDR50) 
tIS 3.00 - ns CCARD = 10 pF, VCT = 0.975V 
tIH 0.80 - ns CCARD = 5 pF, VCT = 0.975V 
Output CMD, DAT (SDR12/SDR25/SDR50) 
tODLY - 7.5 ns tCLK ≥ 10.0 ns, CL= 30 pF, using driver type B, for 
SDR50 
tODLY - 14 ns tCLK ≥ 20.0 ns, CL= 40 pF, using driver type B, for 
SDR25 and SDR12 
TOH 1.5 - ns Hold time at the tODLY (min.), CL= 15 pF 
Output CMD, DAT (SDR104) 
tOP 0 2 UI Card output phase 
ΔtOP -350 +1,550 ps Delay variation due to temperature change after 
tuning. 
tODW 0.6 - UI tODW = 2.88 ns at 208 MHz 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 119

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 119 
Confidential B 
MT8668 Application Processor 
Technical Brief 
4.4.5.4 DDR50 Speed Mode Timing 
 
Figure 4-17. MSDC device clock timing diagram of DDR50 speed mode 
 
 
Figure 4-18. MSDC device input/output timing diagram of DDR50 speed mode 
 
Table 4-20. MSDC device AC timing parameters of DDR50 speed mode  
Parameter Symbol Min. Max. Unit 
Clock CLK  
Clock period tCLK 20 - ns 
Clock rise time 
Clock fall time 
tCR, tCF - 0.2*tCLK ns 
Clock duty - 45 55 % 
Input CMD (referenced to CLK rising edge) 
Input setup time tISU 6 - ns 
Input hold time tIH 0.8 - ns 
Output CMD (referenced to CLK rising edge) 
Output delay time during data transfer mode tODLY - 13.7 ns 
Output hold time tOH 1.5 - ns 
Input DAT (referenced to CLK rising and falling edges) 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 120

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 120 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Parameter Symbol Min. Max. Unit 
Input setup time tISU2x 3 - ns 
Input hold time tIH2x 0.8 - ns 
Output DAT (referenced to CLK rising and falling edges) 
Output delay time during data transfer mode tODLY2x - 7.0 ns 
Output hold time tOH2x 1.5 - ns 
 
4.4.6 SIM AC Timing Characteristics 
Table 4-21. SIM AC timing parameters 
Parameter Condition Symbol Min. Typ. Max. Unit 
SIM1_SCLK 
Rise and fall time 
DVDD28_SIM1 = 1.8V 
Trise_fall N/A 50 50 ns 
Clock duty Duty 47 50 53 % 
Rise and fall time 
DVDD28_SIM1 = 3.0V 
Trise_fall N/A 18 18 ns 
Clock duty Duty 47 50 53 % 
SIM1_SIO 
Rise and fall time DVDD28_SIM1 = 1.8V Trise_fall N/A 50 1,000 ns 
Rise and fall time DVDD28_SIM1 = 3.0V Trise_fall N/A 18 1,000 ns 
SIM1_SRST 
Rise and fall time DVDD28_SIM1 = 1.8V Trise_fall N/A 50 1,000 ns 
Rise and fall time DVDD28_SIM1 = 3.0V Trise_fall N/A 18 1,000 ns 
SIM2_SCLK 
Rise and fall time 
DVDD28_SIM2 = 1.8V 
Trise_fall N/A 50 50 ns 
Clock duty Duty 47 50 53 % 
Rise and fall time 
DVDD28_SIM2 = 3.0V 
Trise_fall N/A 18 18 ns 
Clock duty Duty 47 50 53 % 
SIM2_SIO 
Rise and fall time DVDD28_SIM2 = 1.8V Trise_fall N/A 50 1,000 ns 
Rise and fall time DVDD28_SIM2 = 3.0V Trise_fall N/A 18 1,000 ns 
SIM2_SRST 
Rise and fall time DVDD28_SIM2 = 1.8V Trise_fall N/A 50 1,000 ns 
Rise and fall time DVDD28_SIM2 = 3.0V Trise_fall N/A 18 1,000 ns 
 
4.5 Clock Characteristics 
The clock squarer is designed to receive clock signal from pin “X26M_IN” and distribute it to the chip internally. 
See Table 4-22 for the functional specifications of clock squarer of pin “X26M_IN”. 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 121

Electrical Characteristics 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 121 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Table 4-22. Clock squarer specifications 
Symbol Parameter Min. Typ. Max. Unit 
Vin Input signal amplitude 1,000 1,200 1,250 mVpp 
DcycIN Input signal duty cycle - 50  % 
DcycOUT Output signal duty cycle DcycIN - 5 - DcycIN + 5 % 
 Maximum positive overshoot - - 1.3 V 
 Minimum negative overshoot -0.1 - - V 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 122

Power On Sequence 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 122 
Confidential B 
MT8668 Application Processor 
Technical Brief 
5 Power On Sequence 
The power on sequence described in this chapter is the power predesigned to operate with other different MediaTek 
chipsets. For details, refer to the following power management IC (PMIC) documents.  
 
• MT6363 PMIC Design Notice for MT8668 
• MT6373 PMIC Design Notice for MT8668 
 
Furthermore, for the power on sequence allowing user-control, refer to MT8668 Application Processor Datasheet. 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 123

Boot Mode Configuration 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 123 
Confidential B 
MT8668 Application Processor 
Technical Brief 
6 Boot Mode Configuration 
Boot mode configuration refers to the process of specifying the manner in which a device starts up, accesses system 
resources and launches the operating system. There are several mode choices to determine the method with which the 
system locates, loads and executes the boot loader.  
 
6.1 Mode Selection 
Table 6-1. MT8668 mode selection 
Pin Name Description Parameter 
KPCOL0 Force download mode  0: Force USB download mode in bootrom 
1: Disable (default) 
[0] SCP_VREQ_VAO 
[1] AUD_SYNC_MOSI 
JTAG mode 00: AP MCU JTAG (default) 
01: AP MCU JTAG + IO JTAG + DAP JTAG  
10: AP MCU JTAG + IO JTAG  
11: AP MCU JTAG + WCN JTAG  
[0] AUD_DAT_MOSI0 
[1] AUD_DAT_MOSI1 
[2] AUD_DAT_MOSI2 
[3] EINT_CHG_IRQB 
DDR selection mode  
0010: LP5 MCP 
0011: LP5 discrete (default) 
 
6.2 Constant Tie Pins 
Table 6-2. MT8668 constant tie pin 
Pin Name Description 
TESTMODE Test mode (tied to GND) 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 124

Package Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 124 
Confidential B 
MT8668 Application Processor 
Technical Brief 
7 Package Information 
7.1 Top Marking 
 
Figure 7-1. MT8668 top marking 
 
7.2 Ordering Information 
Table 7-1. MT8668 ordering information 
Order# Marking Temperature Range (1) Package 
MT8668 See Section 7.1. -40°C ~ 85°C TFBGA 
(1) The temperature range refers to the IC ambient temperatures. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 125

Package Information 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 125 
Confidential B 
MT8668 Application Processor 
Technical Brief 
7.3 Package Outlines 
 
 
 
Figure 7-2. Outlines and dimensions of TFBGA 12.05 mm x 13.1 mm, 1084-ball, 0.35 mm pitch package 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 126

Reference 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 126 
Confidential B 
MT8668 Application Processor 
Technical Brief 
8 Reference  
8.1 Reference Documents 
 
Module Reference 
Power on sequence 
PMIC 
MT6363_Design_Notice_for_MT8668 
MT6373_Design_Notice_for_MT8668 
 
8.2 MT8668 Companion Chips 
The capabilities of the companion chips listed below are for reference only. For the exact details and operating conditions, 
please refer to the corresponding datasheet or design document in accordance with the part name. 
 
Table 8-1. MT8668 companion chips 
Part 
Name Category Description Reference Document 
MT6373 2nd PMIC • Input range: 2.6V ~ 5.0V 
• 10 buck converters and 25 LDOs optimized for 
specific subsystems  
• SPMI interface 
• Over-current and thermal overload protection 
• Programmable under voltage lockout 
protection 
• Watchdog reset 
• Flexibility hardware PMIC reset function 
• Power-on reset and start-up timer 
• Storage card plug-out protection  
• 166-pin WFBGA package 
MT6373_PMIC_Datasheet 
MT6197 RF TX/RX • Full multi-mode RF solution 
(GGE/C2K/WCDMA/LTE/NR SA/NR NSA)  
‒ Multi-band NR 
sub6G/LTE/WCDMA/C2K/GCE 
‒ 256QAM UL/256QAM DL (HSPA+/LTE) 
‒ C2K/2G/3G/4G/5G co-banding 
‒ Supports RxD. 
• Direct conversion transmitter (NR/LTE/3G/8-
PSK) and DFM for 2G GMSK  
‒ Dedicated power detection circuits for 
power control over specific power range 
‒ 3 LMHB + 1 CB (NR-U) + 2 all-band TX0 
output ports 
‒ 3 LMHB + 1 CB (NR-U) +2 all-band TX1 
output ports 
‒ TX0 and TX1 can be configured as 
CA/ENDC or 2x2 MIMO. 
MT6197_RF_datasheet_1p4_Release 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 127

Reference 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 127 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Part 
Name Category Description Reference Document 
• Hybrid direct-conversion 
(5G/4G/3G/C2K)/Low-IF (GGE, DC-HSDPA) 
receiver 
‒ 20 RX input ports 
‒ Digital output interface 
• External LNA at RxP and RxD are required. 
• Supports 2G DRX & 3G/4G/5G TDD SAWless 
RX. 
• Low supply current and operation directly 
from DC-DC converters 
• Supports RF calibration features for key RX 
and TX specifications (image rejection, LO 
feed-through, IIP2, DC offset, RC corner). 
• Temperature measurement subsystem 
• LTE carrier aggregation 
‒ Supports 2UL + 3DL inter-band CA. 
‒ Max. CCA BW up to 100 MHz 
• Supports RX 4x4 MIMO for LB/MHB/CB 
including n46 and n96. 
• Supports TX 2x2 MIMO for LMHB and CB (NR-
U). 
• NR carrier aggregation 
‒ Supports 2UL + 2DL inter-band CA. 
‒ Max. CCA BW up to 200 MHz 
• LTE + NR dual connectivity support 2UL + 3DL 
inter-band ENDC. 
• Supports NSA/SA+LTE DR-DSDS. 
• Supports power Class 2 high-power UE (HPUE) 
in HB/CB. 
MT6685 CLK IC • Handles 5G-module baseband clock IC 
• Input range: 2.6V ~ 5V 
• 9 clock buffers and 4 input channels for ADC 
optimized for specific 5G-module subsystems 
• 32K-crystal-less RTC oscillator for system 
timing, 1.8V clock buffer output 
• SPMI interface 
• Programmable under voltage lockout 
protection 
• Watchdog reset 
• Flexibility hardware clock IC reset function 
• Power-on reset and start-up timer 
• 42-pin WFBGA package 
MT6685_DCXO_Datasheet 
 
MT6363 Main PMIC • 10 buck converters and 26 LDOs 
• SPMI interface 
• Over-current and thermal overload protection 
• Programmable under voltage lockout 
protection 
• Watchdog reset 
• Flexibility hardware PMIC reset function 
• Power-on reset and start-up timer 
• Storage card plug-out protection  
MT6363_PMIC_Datasheet 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 128

Reference 
 
 
 
MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 128 
Confidential B 
MT8668 Application Processor 
Technical Brief 
Part 
Name Category Description Reference Document 
• 167-pin WFBGA package 
MT6637W CONSYS RF • MT6637X is a 4-in-1 connectivity chip which 
contains two 2.4 GHz Wi-Fi transceiver front-
ends, two 5 GHz or 6 GHz Wi-Fi transceiver 
front-ends, a Bluetooth transceiver front-end, 
a GPS L1-band receiver front-end, a GPS L5-
band receiver front-end and a complete FM 
receiver in a WFBGA package.  
• Supports tri-band 2.4 GHz/5 GHz/6 GHz. 
• Supports worldwide Wi-Fi 5G/6G channel, and 
Bluetooth FDD operation. 
• Supports 1*1 Wi-Fi 5/6 GHz and Wi-Fi 2.4 GHz 
dual-band dual-concurrency. 
• Supports external PA and LNA for Wi-Fi-2.4 
GHz and Wi-Fi-5 GHz/6 GHz. 
• RF supports simultaneous dual-band L1 and L5 
operation. 
• The system feature depends on companion 
modem chip’s capability. 
MT6637X_External_DataSheet 
MT6308H PMIC • Buck power stage to provide low-frequency 
power to PA. 
• Class-AB amplifier to provide high-frequency 
modulation of PA supply voltage. 
• Buck and amplifier power combined using ac-
coupling capacitor (external). 
• Linked control system to implement power 
split. 
• Buck regulator to provide optimal power 
supply for class-AB amplifier. 
• APT mode operation in which buck regulator 
produces a constant-voltage output. 
• Ability to transit from envelope tracking (ET) 
mode to average power tracking (APT) mode 
on the fly. 
• Adaptive pass-device sizing to optimize 
efficiency of buck converters. 
• MIPI RFFE serial interface to baseband. 
• -3 dB bandwidth up to 90 MHz. 
• VHFP output voltage up to 507V with 6.0W 
power delivery. 
MT6308H_DataSheet 
 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only

## PDF物理页 129

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 129 
MT8668 Application Processor 
Technical Brief 
Exhibit 1 Terms and Conditions 
Your access to and use of this document and the information contained herein (collectively this “Document”) is subject to your (including the corporation 
or other legal entity you represent, collectively “You”) acceptance of the terms and conditions set forth below (“T&C”).  By using, accessing or downloading 
this Document, You are accepting the T&C and agree to be bound by the T&C.  If You don’t agree to the T&C, You may not use this Document and shall 
immediately destroy any copy thereof. 
 
This Document contains information that is confidential and proprietary to MediaTek Inc. and/or its affiliates (collectively “MediaTek”) or its licensors and 
is provided solely for Your internal use with MediaTek’s chipset(s) described in this Document and shall not be used for any other purposes (including but 
not limited to identifying or providing evidence to support any potential patent infringement claim against MediaTek or any of MediaTek’s suppliers and/or 
direct or indirect customers).  Unauthorized use or disclosure of the information contained herein is prohibited.  You agree to indemnify MediaTek for any 
loss or damages suffered by MediaTek for Your unauthorized use or disclosure of this Document, in whole or in part. 
 
MediaTek and its licensors retain titles and all ownership rights in and to this Document and no license (express or implied, by estoppels or otherwise) to 
any intellectual propriety rights is granted hereunder.  This Document is subject to change without further notification.   MediaTek does not assume any 
responsibility arising out of or in connection with any use of, or reliance on, this Document, and specifically disclaims any and all liability, including, without 
limitation, consequential or incidental damages. 
 
THIS DOCUMENT AND ANY OTHER MATERIALS OR TECHNICAL SUPPORT PROVIDED BY MEDIATEK IN CONNECTION WITH THIS DOCUMENT, IF ANY, ARE 
PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.   MEDIATEK SPECIFICALLY DISCLAIMS 
ALL WARRANTIES OF MERCHANTABILITY, NON -INFRINGEMENT, FITNESS FOR A PAR TICULAR PURPOSE, COMPLETENESS OR ACCURACY  AND ALL 
WARRANTIES ARISING OUT OF TRADE USAGE OR OUT OF A COURSE OF DEALING OR COURSE OF PERFORMANCE.  MEDIATEK SHALL NOT BE RESPONSIBLE 
FOR ANY MEDIATEK DELIVERABLES MADE TO MEET YOUR SPECIFICATIONS OR TO CONFORM TO A PARTICULAR STANDARD OR OPEN FORUM. 
 
Without limiting the generality of the foregoing, MediaTek makes no warranty, representation or guarantee regarding the suitability of its products for any 
particular purpose, nor does MediaTek assume any liability arising out of the application or use of any product, circuit or software.  You agree that You are 
solely responsible for the designing, validating and testing Your product incorporating MediaTek’s product and ensure such pr oduct meets applicable 
standards and any safety, security or other requirements. 
 
The above T&C and all acts in connection with the T&C or this Document shall be governed, construed and interpreted in accord ance with the laws of 
Taiwan, without giving effect to the principles of conflicts of law. 
 
MediaTek Confidential
 For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only
MediaTek Confidential
For ytcao@ pvetec.com Use Only


---
# SRC0120 MT8668_DSI_Bringup_SOP_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/MT8668_DSI_Bringup_SOP_CN_V1.0.pdf

SHA-256：0ac675257290614f556debe715546a221bb502765e0efb7799720b2c20247252

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0120.html)

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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 38 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
3.5.4 disp_pwm Kernel 流程 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 51

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 51 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
  
 
 
另外 virtual 的节点中要设定 master 的节点，virtual 部分的 driver 的控制都会指向 master 节点。 
 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 63

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 63 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 66

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 66 
Confidential B 
MT8668 
DSI Bring Up SOP 
 
 
//DSI 送 data 和 clock 信号 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback


---
# SRC0121 MT8668_Hypervisor_Display_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/MT8668_Hypervisor_Display_User_Manual_CN_V1.0.pdf

SHA-256：d2054c264cae4f251f1ec7d42985679c8ad32a4dbf0181faa985490b3ad272c4

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0121.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28 
MT8668 Hypervisor Display 
User Manual 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 李庆 正式版 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 硬件架构 ··································································································································································· 5 
 名词解释 ·································································································································································· 5 
 硬件架构总览 ·························································································································································· 5 
 显示子系统的硬件架构 ······························································································································· 6 
 显示子系统在整个系统中的常见位置 ······································································································· 7 
 显示子系统的预设内部通路 ······················································································································· 8 
 MML SubSystem ······················································································································································· 8 
 MML 的定义 ················································································································································· 8 
 MML 的用途 ················································································································································· 9 
 Display SubSystem ···················································································································································· 9 
 GCE ········································································································································································· 10 
 主要硬件规格 ························································································································································ 11 
 Pixel Throughput ···················································································································································· 11 
2 软件架构 ································································································································································· 12 
 显示相关的整体软件架构 ···································································································································· 12 
3 特定要求 ································································································································································· 14 
 SOC 对 Panel 的 VFP 和 VBP 的要求 ····················································································································· 14 
 主屏必须是 DSI0 ··················································································································································· 14 
4 系统评估方法 ························································································································································· 15 
附件一 附加条款 ····························································································································································· 16 
 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
图片目录 
图 1-1. Display pipeline 架构 ····················································································································································· 6 
图 1-2. 整个 Display Pipeline 示例 ············································································································································ 7 
图 1-3. Display Pipeline 示例 ····················································································································································· 8 
图 1-4. exDMA Config on Pipeline-0 示例 ······························································································································· 10 
图 2-1. 显示相关的整体软件架构图 ······································································································································ 13 
图 2-2. 基于虚拟 CMDQ 的 MML 框架 ·································································································································· 13 
 
表格目录 
表 1-1. 主要硬件规格 ······························································································································································ 11 
表 4-1. 多屏评估所需的基本信息 ·········································································································································· 15 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
1 硬件架构 
 名词解释 
缩略词 全称及释义 
CMDQ Command Queue (the Software Driver of GCE) 命令队列（GCE 的软件驱动程序） 
Disp Display 显示 
DSC Display Stream Compression 显示流压缩 
DSI Display Serial Interface 显示串行接口 
GCE the Hardware of General Command Engine 通用命令引擎的硬件 
MM Multimedia 多媒体 
MML Hardware of Multimedia Layer 多媒体层的硬件 
OVL 
Overlay, means the Hardware includes the ReadDMA and blender 叠加，指包含读取 DMA 和混合器的硬
件 
PQ Picture Quality (enhancement) 图像质量（增强） 
Resize Scaler-Up or Scaler-Down 缩放放大或缩小 
TTC Telltale Check 标识检查 
WDMA Hardware of Write Direct Memory Access 可写内存的硬件 
WROT Hardware of Write to DRAM and Rotate 可将画面旋转并写入内存的硬件 
 
 硬件架构总览 
MT8668 的 Display 硬件架构可分为两大部分——MML_SubSystem 和 Display_SubSystem，后文中将简称为 MML 和
DISP。 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
 显示子系统的硬件架构 
MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved.
MML SubSystem
Display SubSystem
Layer7
Layer6
Layer5
Layer4
Layer3
Layer2
Layer1
Layer0
Layer8
Layer9
Disp-PQ-0
Disp-PQ-1
TTC0
TTC1
TTC2
TTC3
DSI0
DSI1
WDMA
MML-
RDMA0
MML
PQ-Resize0
MML-
WROT0DRAM Buffer DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM Buffer DRAM Buffer
Serializer
Serializer
MML-
RDMA1
MML
Resize1
MML-
WDMA0DRAM Buffer DRAM Buffer
Layer0 and Layer1 should be output to the same DSI.
Layer2 and Layer3 should be output to the same DSI.
Layer4 and Layer5 should be output to the same DSI.
Layer6 and Layer7 should be output to the same DSI.
 
图 1-1. Display pipeline 架构 
 
MML_SubSystem，即 Multimedia Layer Sub System，共有 2 套独立的 MML 硬件可用，每套硬件中均包含 MML-
RDMA（Read Direct Memory Access），MML-PQ（Picture Quality enhancement），MML-Resize（Scaler-Up or Scaler-
Down）和 MML-WROT（Rotate &&Write to dram）。 
Display SubSystem 共有 10 个硬件图层可被使用（其中 2 个硬件图层是专用于显示“需要进行功能安全检测的图
层”，例如 Telltale），可以将多个硬件图层组合在一起进行 Alpha-Blending 并且显示到同一个屏。它还有 2 套
Display-PQ 以及 2 个 DSC（Display Stream Compression）。最后，MT8668 支持同时从 2 个 DSI（Display Serial 
Interface）输出画面。 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
 显示子系统在整个系统中的常见位置 
MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved.
DRAM Buffer
Display is the last section of the whole path, and the next section is SerDes or Panel. The data source of Display can be roughly divided into 
three categories: 
– GPU-Output-Buffer which come from UI or game
- GPU will adjust the color format, width and height as required during its processing
– Video-Decoder-Output-Buffer && ISP-Output-Buffer after Camera shooting
- Its possible for MML(Multi-Media-Layer) to adjust the color format and width and height first before the picture 
effect(PQ).
GPU
MML
SubSystem
DISPLAY
SubSystemVideo Decoder
Camera-Input
DRAM Buffer
DRAM Buffer
SerDes
Panel
……
 
图 1-2. 整个 Display Pipeline 示例 
 
Display 在整个处理链路的最后一段，后端是 SerDes/Panel。 
Display 的数据源大致可分为三类： 
 
• GPU 产生的 UI 或游戏等画面 
• 网络或者本地的视频经 Video-Decoder 解码后的 Output-Buffer 
• Camera 拍摄后经 ISP 处理后的数据 
 
其中，GPU 在自身的处理过程中会按需求调整色彩格式、宽高等，而 Video-Decoder 以及 Camera 的输出一般会需
要 MML 调整色彩格式和宽高，并且可能会同步调整对应图层内容的画面效果（ MML-PQ）。 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
 显示子系统的预设内部通路 
MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved.
Layer3
Layer2
Layer1
Layer0
Disp-PQ-0 Layer8
TTC0
DSI0
Serializer
Layer7
Layer6
Layer5
Layer4
Disp-PQ-1 Layer9
TTC1
DSI1 Deserializer ICD
Serializer
Deserializer CID
Deserializer HUD
Yocto Layer for nonTelltale
Android Layer
Yocto Layer for Telltale
WDMA DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM Buffer
DRAM 
Buffer
DRAM Buffer
CID ICD HUD
DRAM Buffer
 
图 1-3. Display Pipeline 示例 
 
以当前公版的配置作为例子，可以参考图 1-3。 
在这里例子中，Display 被配置为 3 个 Pipeline： 
 
• Pipeline0 即 CID：共 4 层 Layer（Yocto 和 Android 同屏显示），支持 display-pq 以及 Telltale-Check，最后由
DSI0-superframe 输出到一个屏。 
• Pipeline1 即 HUD：共 2 层 Layer（Yocto 和 Android 同屏显示）， 最后由 DSI0-superframe 输出到一个屏。 
• Pipeline2 即 ICD：共 3 层 Layer（Yocto 和 Android 同屏显示）， 最后由 DSI1 输出到一个屏。 
 
 MML SubSystem 
 MML 的定义 
MML 的全称是 Multiple Media Layer，它是 Display 之前的预处理。从前端的 DRAM Buffer A 中读数据，经过 MML
的各项处理后，再将处理后的数据写入 DRAM Buffer B，而 DRAM Buffer B 将可被送到真正的显示流程中使用。
MML 包含了几个子模块，其中 MML-RDMA 用于从 DRAM Buffer A 中读取数据，PQ-Resize 将对数据进行画质方面的
改善以及宽高方面的缩放，而 WROT 可将画面进行多种角度的旋转并最终将数据写入 DRAM Buffer B 中。 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
并非每个图层都需要经过 MML，通常只有视频图层或 Camera-Preview 图层会经过 MML 的处理。而 UI 类型（UI 界
面以及游戏界面等）的图层并不会经过 MML，因为他们是由 GPU 画出并且 GPU 可同步处理画质调整以及宽高缩
放。 
 
 MML 的用途 
• Color format conversion（YUV12/NV12/RGB888…之间的互相转换） 
• Resize and crop（可指定矩形区域进行缩放和剪裁） 
• Rotate mirror and flip 
• Image quality enhancement function 
• HDR Video 的支持（HDR meta data 的处理） 
 
 Display SubSystem 
Display Subsystem 是一个硬件群体，可分为三大部分——Overlay，Display-PQ，以及 DSC 和 Output-Interface。请注
意，并不能将 Display Subsystem 拆分为若干硬件单独考虑，因为相互之间会有依赖关系。  
 
• Overlay 是 Display Subsystem 的第一部分，其中包含了 RDMA 和 Blender。RDMA 可将数据从 DRAM Buffer 中按
需读取，然后 blender 可将若干个 RDMA 读取的数据进行 Alpha-Blend，即所谓的“Display 硬件叠图”。 
• Display-PQ 是 Display Subsystem 的第二部分，其中的 PQ 是 Picture-Quality 的首字母缩写，它可将前端
“overlay”处理后的数据按使用者的需求进行调节或优化，以迎合各种不同的主观喜好或减少甚至避免对使用
者视力的影响。 
• DSC 和 Output-Interface 是 Display Subsystem 的第三部分，DSC 硬件共有 2 套，Output-interface 包含 2 个 DSI。
DSC 硬件一般可被绕过，只有当这些 Output-Interface 需要输出 DSC 压缩数据时，才需在其前端加入 DSC 硬件
的支持。 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved.
Software
Hardware
Layer0
Android Layer
Layer1
Android Layer
Layer2
Android Layer
Layer3
Yocto Layer
Layer8
Yocto Layer
Composing
PQ-0
DSI0
Yocto Android
Layer3
Yocto Layer
Layer8
Yocto Layer
Layer0
Android Layer
Layer1
Android Layer
Layer2
Android Layer
Yocto
could 
see only 
2 
hardwar
e layers Android 
could see 
only 3 
hardware 
layers
For the example in the diagram, there are 5 DISP 
hardware layers on this screen, and the screen can 
display images from Yocto and Android VMs at the 
same time. 
From the observer's perspective, Layer8 is the top 
layer and Layer0 is the bottom layer. This 
virtualization method uses the hardware overlay 
logic of DISP itself to compose the layers of the two 
VMs through hardware (OVL) and display them 
directly on the screen.
CID
Yocto Layer for nonTelltale
Android Layer
Yocto Layer for Telltale
 
图 1-4. exDMA Config on Pipeline-0 示例 
 
在图 1-4 这个例子中，这个屏上共有 5 个 DISP 硬件图层（Layer0~Layer3 以及 Layer8），并且这个屏上可以同时显
示来源于 Yocto 和 Android 两个 VM 的画面。从观察者的视角看，Layer8 是最上层，而 Layer 0 是最下层。这种虚拟
化方法是借助于 DISP 本身的硬件叠图逻辑实现，即将两个 VM 的图层（多个 Layer）通过硬件（Blender）叠合后直
接显示到屏。 
 
 GCE 
GCE 是 Display 内部使用的辅助型硬件，它会代替 CPU 更新 MML 和 DISP 的寄存器，并且将多个 MML 或 DISP 的硬
件 IRQ 转化为一个 IRQ，所以它的作用是进行“高实时性要求的硬件寄存器更新等”，同时可以大幅降低 Display
对 CPU 的依赖。 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
 主要硬件规格 
表 1-1. 主要硬件规格 
Component 
Specification 
Note:  
The following are only the upper limits of the capabilities of each sub-module, and the overall capabilities must be 
considered in actual evaluation.  
MML 
1 ⨯ MML-Full + 1 ⨯ MML-Light 
Time Sharing by multiple users with software 
MML-Full: Color-format conversion, Resize, PQ (Video Picture-Quality), Rotating 
MML-Light: Color-format conversion, Resize 
Maximum throughput: 550 MPixel/sec 
OVL 
4 groups of OVL and each OVL supports 2 layers 
2 groups of OVL and each OVL supports 1 layer which only should be used on Telltale 
Maximum width 2880 with AFBC 
Maximum width 8192 without AFBC 
Maximum throughput: 550 MPixel/sec 
Display_PQ 
2 ⨯ PQ could be applied to 2 display pipelines. 
Maximum width 2880 with TD-Sharpness 
Follow the width limitation of OVL without TD-Sharpness. 
DSI 2 ⨯ MIPI DSI transmitter up to D-PHY 2.5 Gbps/lane 
 
 Pixel Throughput 
已预设 MML 和 Display 的 Pixel_Throughput 为 550M，即每个 Pipe 每秒可以处理 550M 个像素点。 
请注意，对于 Display 来说，Pixel_Throughput 需包含 Blanking，即 Active 的像素点个数最大值肯定小于上述数值。 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
2 软件架构 
 显示相关的整体软件架构 
如图 2-1，当前 MT8668 的 Display 相关软件分布在 Yocto 和 Android 两个 OS 中，第三个 OS-Yocto 中不存在任何
Display 相关实现。 
Yocto 是 Host 端，它可以控制到真实的 Display 硬件，它不仅处理 Yocto 自身的完整软件流程，也要处理 Guest 端的
Display 控制请求。 
Android 是 Guest 端，它不会实际控制到硬件，而是通过图中 A、B、C、D、E 多条虚拟化途径将对硬件的需求发送
到 Host 端的 Yocto。需要强调的是，虽然 Android 是虚拟化的 Guest 端，但对 Android 上层是透明的，即 Android 
APP 并不需要关心虚拟化的具体做法，只需按照单 Android 的规则去使用即可。 
图中的五条虚拟化途径分别是： 
 
• A：PQ，即画质调整相关的虚拟化途径 
• B：Proxy-Display，作为对“E”的补充，用于支持更多的 Android Display 
• C：LED，背光控制的虚拟化途径 
• D：Android 从 Yocto 获取所需的屏参等 
• E：Android 虚拟化显示的主要途径，MML 通过这种方式实现虚拟化，而 DISP 也会优先选择这种途径 
 
重点介绍 E 这条路： 
硬件 GCE，是 Display/MML 的专用协处理器，可代替 CPU 去和 Display/MML 硬件进行交互，避免 CPU 的响应不及
时导致的时序问题，CMDQ 就是硬件 GCE 的软件驱动。 
作为 Host 的 Yocto 中，包含了完整的 Display driver 即图中 Yocto 区域的“MTK DRM Driver”。“MTK DRM Driver”对上
承接“Wayland Server”通过 libdrm 下发的 IOCTL，并且转换为 Display 硬件的寄存器读写指令，再通过图中的“CMDQ 
Driver”控制“GCE HW”控制众多的 Display 硬件（OVL、DSI 等）。 
作为 Guest 的 Android 端，也包含了完整的 Display driver 即图中 Android 区域的“MTK DRM Driver”。“MTK DRM 
Driver”对上承接“HWC”（HardWare Composer）通过 libdrm 下发的 IOCTL，并且转换为 Display 硬件的寄存器读写操
作指令，再通过图中的“CMDQ Driver”控制“GCE HW”控制 Display 硬件。Android 的 Display 仅需控制 OVL 即可，因
为只有它们与画面本身有关，而其他硬件（DSC、DSI 等）都由 Host 端控制。 
Android 端的基本显示流程和 Yocto 类似，但有一个重要区别，Android 端的“CMDQ Driver”下方并不是“GCE HW”而
是“CMDQ Virtio FE”（FE 即 FrondEnd）。“CMDQ Virtio FE”通过“Virtio”管道将整包“Display 硬件的寄存器读写操作指
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
令”传递到 Yocto（Host）端的“CMDQ Virtio BE” （BE 即 BackEnd），然后“CMDQ Virtio BE”再将指令包传递到真实的
Host 中的“CMDQ Driver”。 
 
MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved.
Android
MTK DRM Driver
Yocto
MTK DRM Driver
HW SW Main FlowBuffer Queue Optional FlowAndroidYocto
Plane …… Plane
Plane PlanePlane
Layer
Plane
…
……
Layer
DSI0
Wayland-Server
HWC
GCE Driver
GCE DriverGCE
Virtual BackEnd Driver
GCE
Virtual FrontEnd Driver
GCE HW
Layer Layer Layer … Layer
DSI1
Layer Layer
PQService PQService
Wayland-Client
Wayland-
Proxy
LEDS
Virtio FE
LEDS
Virtio BE
LEDS
Driver
DRM 
Virtio FE
DRM 
Virtio BE
A
B
C
D
E
 
图 2-1. 显示相关的整体软件架构图 
 
MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved.
Android
HW SW Main FlowBuffer Queue Optional FlowAndroidYocto
Yocto
GCE Virtual BackEndGCE Driver
GCE HW
GCE Virtual FrontEnd
GCE Driver
MML Common-Driver
MML Common-Driver
MML V4L2-Adapter
HWC C2-VDEC C2-VENC
MML HW MML HW
G-Stream MML V4L2-AdapterMML DRM-Adapter
 
图 2-2. 基于虚拟 CMDQ 的 MML 框架 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
3 特定要求 
 SOC 对 Panel 的 VFP 和 VBP 的要求 
以下两条需要被满足，否则有不能支持的风险： 
 
• VFP 时间段须不小于 156µs。 
• VSA 和 VBP 的时间段须不小于 70µs。 
 
 主屏必须是 DSI0 
若当前车机系统中只有一个屏，则这个屏必须通过 DSI0 输出； 
若当前车机系统有多个屏，则主屏（Primary-Display）必须通过 DSI0 输出。 
 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8668 Hypervisor Display 
User Manual 
Confidential B 
4 系统评估方法 
示意图如表 4-1 所示，其中内容请按实际需求填写： 
 
表 4-1. 多屏评估所需的基本信息 
Panel Interface Resolution DSC Video 
PQ 
HDR 
Video 
LK 
Static 
Logo 
Boot 
Animation SerDes 
Layer ID 
(bottom: 
1) 
Layer 
Source Width Height Other 
Comments 
CID DSI0 1920*1080 
60fps 
No 
DSC Yes Yes Yes Yes MAX96789 
4 Yocto 1280 720  
3 Android 1920 500  
2 Android 1600 200  
1 Android 1920 1080  
 
基本规则： 
• 若某个屏需要开机动画，则 Yocto 至少需要一个硬件图层。 
• 若某个屏需要支持 Android 中的 Video PQ，则 Android 至少需要两个硬件图层。 
 
MediaTek Confidential
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8668 Hypervisor Display 
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
 For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
MediaTek Confidential
For qgao@ pvetec.com Use Only
Document Feedback


---
# SRC0122 MT8676_Audio_倍频介绍.pdf

来源：8668/MTK参考资料/MTK参考资料/MT8676_Audio_倍频介绍.pdf

SHA-256：c5db8e284bad75735ea1b9a1bf53de00a36d7a1a0df57697549df6353a7bc570

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0122.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved.
MT8676倍频方案介绍
 MediaTek Confidential For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
16
 1. MT8676 倍频方案
 2. External dsp 解倍频
Agenda
 MediaTek Confidential For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
17
MT8676 倍频方案
⚫ 背景
8676 I2S4 传输channel 有限（8ch max），通过增加 sample rate 的方法增加传输的channel 数量
在内部 adsp 软件处理增加 channel id 标识 channel slot，并使用外部DSP 解析数据
⚫ 以2ch/192k/32bit 传输 8ch/48k/32bit 数据为例
协议1: 8bit channel id + 24 bit data
协议2: 24 bit data + 8 bit channel id (公版方案)
• 注：倍频传输采用了软件编码，需过内部及外部DSP，有一定延迟增加
• 注：如使用倍频传输，无法通过 interconnection 连接多个 FE 到倍频的 BE 进行 hw mix 
 MediaTek Confidential For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
18
如采用倍频传输，则 I2S4 无法使用 hw mix, 需新增一组 I2SIN/ OUT 作为 ecall 及 low_latency (yocto场景或安卓按键音) 的音
频通路
8676 倍频方案
 MediaTek Confidential For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
19
MT8676 倍频方案
 MediaTek Confidential For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
20
External DSP开发需求
 MediaTek Confidential For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
MediaTek Confidential
 For bsp@ pvetec.com Use Only
Document Feedback


---
# SRC0123 MT8676_Bringup_SOP_DSI_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/MT8676_Bringup_SOP_DSI_CN_V1.0.pdf

SHA-256：a0a4b6d5cee93e90af29a602decc1631f0fae383ac6f611acf65e8f3ef0d4e33

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0123.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-12-05 
MT8676 DSI Bring Up SOP 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
版本记录 
版本 日期 作者 描述 
1.0 2024-12-05 柴莹 正式版 
 
  
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
Confidential B 
MT8676 
DSI Bring Up SOP 
目录 
版本记录 ························································································································································· 2 
目录 ································································································································································· 3 
表格目录 ························································································································································· 6 
1 概述 ························································································································································· 7 
1.1 目的 ······················································································································································· 7 
1.2 DSI HW 架构 ·········································································································································· 7 
1.3 DSI Interface 能力 ·································································································································· 7 
1.4 DSI 屏幕 Timing 要求 ···························································································································· 7 
2 缩略词 ····················································································································································· 8 
2.1 缩略词 ··················································································································································· 8 
3 DSI Android Porting 指南 ························································································································· 9 
3.1 Android SW 架构 ··································································································································· 9 
3.2 Android 通用文件路径 ······················································································································· 10 
3.3 LK2 Driver Porting ································································································································ 10 
3.3.1 LK2 文件架构 ··························································································································· 10 
3.3.2 MIPI Panel Driver -jd9365da_wxga_dsi_vdo.c ········································································· 10 
3.3.3 SerDes Panel Driver - max96789_dsi_vdo.c ············································································· 11 
3.3.4 DTS 文件介绍 ··························································································································· 11 
3.3.5 DTS 参数介绍 ··························································································································· 11 
3.3.6 如何新增一个 LK 的 Driver······································································································ 19 
3.3.7 LK Driver Function 介绍············································································································ 20 
3.3.8 LK 参数 get_params 介绍 ········································································································ 21 
3.3.9 DSI0 BootLogo 设定 ················································································································· 25 
3.3.10 DWS 设定 ································································································································· 26 
3.3.11 DSI0 LK Display Disable ············································································································· 28 
3.4 Kernel Driver Porting ··························································································································· 28 
3.4.1 Kernel Driver 文件路径 ············································································································ 28 
3.4.2 Kernel Driver 文件参考 ············································································································ 29 
3.4.3 DTS 文件介绍 ··························································································································· 29 
3.4.4 DTS 参数介绍 ··························································································································· 29 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
3.4.5 如何添加一个新的 Kernel Driver ···························································································· 29 
3.4.6 Kernel Driver Function 介绍 ····································································································· 31 
3.4.7 Kernel 参数介绍 ······················································································································· 32 
3.5 disp_pwm 方式背光控制 ···················································································································· 38 
3.5.1 disp_pwm dws 设定 ················································································································· 38 
3.5.2 leds dts 设定 ····························································································································· 39 
3.5.3 Disp_pwm LK 流程 ··················································································································· 41 
3.5.4 disp_pwm Kernel 流程 ············································································································· 42 
4 DSI Yocto Porting 指南 ··························································································································· 43 
4.1 Yocto 通用文件路径···························································································································· 43 
4.2 LK Driver Porting ·································································································································· 43 
4.2.1 LK2 文件架构 ··························································································································· 43 
4.2.2 MIPI Panel Driver - jd9365da_wxga_dsi_vdo.c ········································································ 44 
4.2.3 SerDes Panel Driver - max96789_dsi_vdo.c ············································································· 44 
4.2.4 DTS 文件介绍 ··························································································································· 44 
4.2.5 DTS 参数介绍 ··························································································································· 44 
4.2.6 如何新增一个 LK 的 Driver ······································································································ 45 
4.2.7 LK Driver Function 介绍············································································································ 45 
4.2.8 LK 参数 get_params 介绍········································································································· 45 
4.2.9 DSI0 BootLogo 设定 ················································································································· 46 
4.2.10 DWS 设定 ································································································································· 46 
4.3 Kernel Driver Porting ··························································································································· 46 
4.3.1 Kernel Driver 文件路径 ············································································································ 47 
4.3.2 Kernel Driver 文件参考 ············································································································ 47 
4.3.3 DTS 文件介绍 ··························································································································· 47 
4.3.4 DTS 参数介绍 ··························································································································· 47 
4.3.5 如何添加一个新的 Kernel Driver ···························································································· 48 
4.3.6 Kernel Driver Function 介绍 ····································································································· 48 
4.3.7 Kernel 参数介绍 ······················································································································· 48 
4.4 disp_pwm 方式背光控制 ···················································································································· 48 
5 DSI Hypervisor Porting 指南 ·················································································································· 49 
5.1 Hypervisor SW 架构····························································································································· 49 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
5.2 HYP 通用文件路径 ······························································································································ 49 
5.3 Android Virtual 节点设定 ···················································································································· 50 
6 DSI Superframe Porting 指南 ················································································································· 51 
6.1 Superframe 概念 ································································································································· 51 
6.2 Superframe 架构 ································································································································· 51 
6.3 Superframe DTS 设定 ·························································································································· 51 
6.3.1 Physical DSI 节点 ······················································································································ 52 
6.3.2 Virtual DSI 节点 ························································································································ 53 
6.3.3 加串器节点 ······························································································································ 54 
6.3.4 Superframe Setting 节点 ·········································································································· 55 
6.4 如何关闭 Superframe ························································································································· 59 
6.5 DSI Superframe Timing ························································································································ 59 
6.5.1 Panel to DSI Timing Function ···································································································· 60 
6.5.2 Panel to Display Function ········································································································· 60 
6.5.3 Log 确认 Timing 信息 ··············································································································· 60 
6.6 Superframe SerDes 控制 ····················································································································· 61 
7 SerDes 调试指南 ··································································································································· 62 
7.1 Ser-max96789 Debug Register ············································································································· 62 
7.2 Des-max96752 Debug Register ············································································································ 65 
7.3 Debug 流程 ·········································································································································· 66 
8 DSI 输出时序控制 ································································································································· 68 
8.1 LK Boot 流程 ········································································································································ 68 
8.2 Kernel Boot or Resume 流程 ··············································································································· 71 
8.3 Kernel Suspend 流程 ··························································································································· 73 
9 DSI DSC Porting 指南 ····························································································································· 74 
9.1 DSC 介绍 ·············································································································································· 74 
9.2 DSC 参数 ·············································································································································· 74 
9.3 DSC SW 介绍 ········································································································································ 76 
10 LCM 问题调试 ······································································································································· 77 
10.1 DSI Pattern ··········································································································································· 77 
10.2 DSI Register 介绍 ································································································································· 78 
10.3 DSI Register Dump 介绍 ······················································································································ 79 
10.4 DSI 调试流程 ······································································································································· 80 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
10.5 帧率异常 ············································································································································· 81 
10.6 I2C 通信异常 ······································································································································· 81 
11 DSI DPHY CTS 测试问题 ························································································································· 83 
11.1 测试仪器 ············································································································································· 83 
11.2 测试平台准备 ····································································································································· 83 
11.3 常见 Failed 项目分析 ·························································································································· 84 
11.3.1 1.3.4/1.4.4 VOD0/VOD1 Pulse & 1.3.7 VCMTX ········································································· 84 
11.3.2 1.3.8 Voltage Mismatch & 1.4.8 VCMTX Mismatch ·································································· 86 
11.3.3 1.3.1~3 & 1.3.13~16 MIPI Timing ····························································································· 86 
11.3.4 1.3.11~12 Tr/Tf & 1.5.4 Data to Clock Skew ············································································· 88 
11.3.5 什么情况开 DEM ····················································································································· 90 
11.3.6 1.5.5 & 1.5.6 HS Skew Calibration Burst ··················································································· 90 
12 LCM Timing 介绍 ··································································································································· 92 
12.1 Power On/Off Sequence ······················································································································ 92 
12.2 Interface Timing ··································································································································· 92 
12.3 Display Timing ······································································································································ 92 
13 DSI Interface 介绍 ································································································································· 94 
13.1 HS ························································································································································· 94 
13.2 LP ························································································································································· 94 
13.3 HS & LP 状态切换图 ···························································································································· 94 
13.4 DSI MIPI D-PHY Timing Spec ················································································································ 95 
13.4.1 Data Lane Spec ························································································································· 95 
13.4.2 Clock Lane Spec ························································································································ 96 
13.5 Video Mode 介绍 ································································································································ 96 
13.5.1 HFP Keep HS ····························································································································· 97 
13.5.2 DSI_Frame_Rate_Cal_for_Customer_MT8676 介绍 ································································ 97 
14 DSI 波形量测 ········································································································································· 99 
14.1 如何测量帧率 ····································································································································· 99 
14.2 如何测量信号 ··································································································································· 100 
15 DSI 屏幕评估 ······································································································································· 102 
附件一 附加条款 ········································································································································· 103 
 
表格目录 
表 2-1. 缩略词 ························································································································································ 8 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
1 概述 
1.1 目的 
本文档主要介绍 MT8676 DSI Interface 屏幕显示的 Driver Porting 和 Issue Debug 的方法。 
1.2 DSI HW 架构 
MT8676 总共有两路 DSI Port，公版搭配加串器 max96789 实现单屏或者多屏显示。两路 DSI 都有实现对
称的超级帧显示，非对称的超级帧正在开发中。 
 
 
 
 
 
 
 
 
 
 
1.3 DSI Interface 能力 
Port DSI0 DSI1 
MT8676 
4 lanes/3 trios 
DPHY: 2.5Gbps/lane 
CPHY: 2.18Gsps/trio 
4 lanes/3 trios 
DPHY: 2.5Gbps/lane 
CPHY: 2.18Gsps/trio 
 
1.4 DSI 屏幕 Timing 要求 
 
Htotal 要满足被 2*lane number 整除，不满足需要微调 HFP 的值，具体请参考章节 13.5.2。Display 对屏
幕的 timing 有要求，请提供屏幕的详细 Timing 给 MTK 评估。如果已经做过评估，请忽略。 
MT8676 DSI0 
Serializer 
MAX96789 
DSI1 
Serializer 
MAX96789 
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
Confidential B 
MT8676 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
3 DSI Android Porting 指南 
Android 版本 Android U  
System Branch Kernel Version 
Android U alps-mp-u0.mp7 Kernel-6.1 
 
3.1 Android SW 架构 
 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
3.2 Android 通用文件路径 
文件 路径 
LK2 vendor\mediatek\proprietary\bootable\bootloader\lk2 
Android U Kernel Kernel\kernel_device_modules-6.1 
Device Device\mediateksample\auto8676p1_64_bsp 
dws 
Vendor\mediatek\proprietary\tools\dct\dws\mt6897\ 
auto8676p1_64_bsp.dws 
 
3.3 LK2 Driver Porting 
LK 部分的 driver 主要用于 boot logo 的显示，DSI0 可以在 LK 显示 boot logo，DSI1 不支持 LK 显示，默认
从 Kernel 启动。 
3.3.1 LK2 文件架构 
橙色区域文件是 Porting Driver 需要修改或者参考的文件。 
LCM Driver 
dev\lcm\max96789_dsi_vdo\ max96789_dsi_vdo.c 
dev\lcm\jd9365da_wxga_dsi_vdo\jd9365da_wxga_dsi_vdo.c 
dev\lcm\mt65xx_lcm_list.c 
dev\lcm\include\lcm_drv.h 
LK Project.mk Project\auto8676p1_64_bsp.mk 
Kernel DTS 
arch\arm64\boot\dts\mediatek\cust_mt8676_display_interface.dtsi 
arch\arm64\boot\dts\mediatek\cust_mt8676_display_config_main.dtsi 
arch\arm64\boot\dts\mediatek\cust_mt8676_display_config_6p.dtsi 
Display Driver 
Platform\mediatek\mt6897\disp\ddp_dsi.c, disp_lcm.c, 
primary_display.c, mt_disp_drv.c, ddp_manager.c, ddp_dsc.c, 
ddp_dither.c… 
 
3.3.2 MIPI Panel Driver -jd9365da_wxga_dsi_vdo.c 
如果 Porting MIPI Panel Driver，可以参考这份文件，此 Driver 在公版有点亮 MIPI 屏幕。 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
3.3.3 SerDes Panel Driver - max96789_dsi_vdo.c 
如果 Porting SerDes Panel Driver, 可以参考这份文件，Driver 的写法是从 dts Panel 的节点里面 Parser 出对
应的 Panel Timing 和 SerDes 的设定。如果沿用这个 Driver，可以把 dts 中的参数更改为要 Bringup 的
SerDes 参数和屏幕 Timing。 
3.3.4 DTS 文件介绍 
Mt6897.dts 
Chip 的 dts 相关设定，DSI 等 Display 根节点会放在这份
文件里面，节点默认关闭 
Auto8676p1_64_bsp.dts Project dts，可以拉到文件最后，查看使用的是哪个
cust_mt8676_display_config_xxx.dtsi 
cust_mt8676_display_interface.dtsi 
Interface (DSI, DP , EDP), Panel, Bridge, GPIO 等相关 Display
设定，默认节点关闭。 
cust_mt8676_display_config_main.dtsi 
覆盖 cust_mt8676_display_interface.dtsi, 只开 DSI0 单
屏。 
cust_mt8676_display_config_6p.dtsi 覆盖 cust_mt8676_display_interface.dtsi, 开启多屏。 
注：一般情况修改橙色部分的文件即可。 
3.3.5 DTS 参数介绍 
单屏的 DTS Setting 包含三部分 DSI 节点，加串器的节点，还有 Panel Setting 的节点。这些设定都在
cust_mt8676_display_interface.dtsi 文件里，可以修改 GPIO 和 I2C 和 Panel Setting 等做客制化。 
3.3.5.1 DSI 节点 
Panel 以子节点方式挂在 DSI 节点下，Panel Driver 会注册为 MIPI Device Driver，同时 Panel 节点中会引用
对应的加串器的节点，从而拿到 Panel Setting 的节点，这样就可以拿到对应的加串器，解串器和 Panel 
Timing 等相关设定。如果加串器的 Driver 也是用 max96789，那么这部分可以不用更改。另外如果没有
MIPI Panel，那么 Panel2 的 MIPI Panel 节点可以删除，且 dsi_out2: endpoint@1 也要同时删除。 
 
 
 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
&dsi0 {○1  
 status = " okay "; 
 #address-cells = <1>; 
 #size-cells = <0>; 
 panel1@0 { 
  compatible = "lcm,dsi,max96789";○2  
  reg = <0>; 
  ser = <&max96789>;○3  
  port { 
   panel_in1: endpoint { 
    remote-endpoint = <&dsi_out>; 
   }; 
  }; 
 }; 
 panel2@1 { 
  compatible = "boe,jd9365da";○4  
  reg = <1>;○5  
  power-gpios = <&pio 79 0>; 
  reset-gpios = <&pio 90 0>; 
  pinctrl-names = "default"; 
  port { 
   panel_in2: endpoint { 
    remote-endpoint = <&dsi_out2>; 
   }; 
  }; 
 }; 
 ports { 
  port { 
   dsi_out: endpoint@0 { 
remote-endpoint = <&panel_in1>;○6  
   }; 
   dsi_out2: endpoint@1 { 
    remote-endpoint = <&panel_in2>;○6  
   }; 
  }; 
 }; 
 
}; 
&mipi_tx_config0 { 
 status = "okay";○7  
}; 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
 
 
3.3.5.2 加串器节点 
Ser max96789 是 I2C Device 会挂在对应的 I2C 的节点下。需要根据 HW 原理图配置 I2C 和 GPIO。 
&i2c1 { ○1   
 status = "okay"; 
 max96789: max96789@40 { 
  compatible = "maxiam,max96789"; ○2  
  status = "okay"; 
  reg = <0x40>; ○3   
  reset-gpios = <&pio 37 0>; ○4   
  // only for test 
  //interrupt-parent = <&pio>;○5  
  //interrupts = <187 IRQ_TYPE_EDGE_RISING>;○5  
  pinctrl-names = "default"; 
  setting = <&setting_compatible>; ○6  
  inited-in-lk = <1>; ○7  
 }; 
 
序号 释义 
○1 max96789 在哪个 I2C 下，必填 
○2 SerDes max96789 的节点 
○3 Max96789 I2C 地址 
序号 释义 
○1 DSI0 的节点 
○2 Panel1 SerDes Panel 的节点， 
○3 Panel 对应的加串器的节点，Driver 中会去拿，必填 
○4 Panel2 MIPI 屏幕的节点 
○5 DSI 下面挂载多个 Panel 的时候，Reg 要递增 
○6 Panel Port 与 DSI Port 通过 Remote Endpoint 相连 
○7 
MIPI PHY 节点，每个 DSI 都对应一个 PHY 的节点，DSI 节点打开时，PHY 的节点也要
开启。 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
序号 释义 
○4 Max96789 Power Down Pin  
○5 使用中断方式的 hotplug 使用，默认用轮询 
○6 屏幕兼容的 Setting，如果没有做兼容设定，可以直接引用屏幕的节点，例如 Setting 
= <&setting_hy >; 
○7 是否在 LK 显示，设为 1 后，Kernel 启动时不会重复初始化 
 
3.3.5.3 屏幕兼容设定 
Max96789 的节点中有包含兼容的屏幕设定，方法是给屏端地址为 0x1a 的 MCU 发一串指令，通过读出
来值，看是哪个屏幕。例如读出来值&0xf (mask) 后，如果是 0x10，那么就可以拿到 setting_bt 的节点。
如何来做屏幕兼容，需要根据屏幕的 HW 情况来判断，这部分需要根据不同的情况做客制化。  
setting_compatible: compatible-node {○1  
 comp-cmd = <○2  
 0x01 0x1a 0x0b 0x83 0x50 0x00 …… 0xd4○3  
 0x00 0x1a 0x0b○3  
 >; 
 comp-exp {○4  
 comp-setting =  <0xf0 0x10 &setting_bt>,○5  
   <0xff 0xff &setting_hy>;○6  
 }; 
}; 
 
序号 释义 
○1 多个屏幕兼容节点，没有可以不添加 
○2 多屏兼容的 cmd，使用多屏兼容时必须填写 
○3 
多屏兼容时写的命令，格式是： 
<r/w><iic addr><cmd len><cmd data> 
r/w: 读=0，写=1； 
iic addr: 要读的 iic 设备的地址； 
cmd len: 这一条命令的数据长度（可以是多条写命令） 
cmd data: 写的命令数据 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
序号 释义 
读命令，格式是： 
<r/w><iic addr><cmd len>， 
含义同上。注意读命令必须有，且放在最后一个，并且只能读一次 
○4 预期的设定节点，使用多屏兼容时必须填写 
○5 
预期的多屏兼容设置，格式为： 
<mask><exception data><panel setting node>， 
使用多屏兼容时必须填写，mask: 读出来的值跟 mask 做与操作，再跟 Exception Data
做对比，如果一致，则使用该行 Panel Setting 
○6 注意最后一行是默认设置，即如果读出的数据都是非预期的，将会使用这个设定 
 
3.3.5.4 Panel Setting 节点 
屏幕的节点包含加串器，解串器，背光以及 Panel 的 Timing 设定。这部分需要根据屏幕的设定来更改。 
&max96789 { 
 setting_hy: setting2 {○1  
  ser-super-frame = <0>;○2  
  ser-init-cmd = <○3  
   0x0001 0x08 0x00 
   0x0203 0x00 0x00 
   0x1404 0x29 0x00 
   0x1504 0x29 0x00 
   0x14a4 0xc8 0x00 
   0x15a4 0xc8 0x00 
   0x140a 0x00 0x00 
   0x150a 0x00 0x00 
   0x140b 0x00 0x00 
   0x150b 0x00 0x00 
   0x0330 0x04 0x00 
   0x0331 0x33 0x00 
  >; 
  ser-deinit-cmd = <○4  
   0x0010 0x80 0x20 
  >; 
  des-link-status-cmd = <○5  
   0x001f 0x18 0x0 
  >; 
   0x02dc 0x04 0x00 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
desdef {○6  
   des-i2c-addr = <0x4c>;○7  
   bl-i2c-addr = <0x1a>;○8  
   bl-dummy-i2c-addr = <0x1f>;○9  
   des-init-cmd = <○10 
    0x06ff 0x11 0x0 
    0x01ce 0x4e 0x0 
    0x020c 0x03 0x0 
    0x020d 0xaa 0x0 
    0x020e 0x4a 0x0 
   >; 
   link-indicate-cmd = <○11 
    0x06ff 0x11 0x0 
   >; 
   bl-on-cmd = <○12 
    0x83 0x50 0x00 …… 0xd4 
   >; 
   bl-off-cmd = <○13 
    0x83 0x00 0x00 …… 0x85 
   >; 
   panel-mode-setting {○14 
    panel-mode-width = <1920>; 
panel-mode-setting {○14 
 panel-mode-width = <1920>;○15 
  panel-mode-height = <1080>;○16 
  panel-mode-hfp = <40>;○17 
  panel-mode-hsa = <42>;○18 
  panel-mode-hbp = <78>;○19 
  panel-mode-vfp = <24>;○20 
  panel-mode-vsa = <3>;○21 
 panel-mode-vbp = <9>;○22 
  panel-mode-vrefresh = <60>;○23 
  panel-mode-lppf = <1>;○24 
  panel-mode-pll = <478>;○25 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
 panel-mode-prefetch = <15>;○26 
 panel-mode-width-mm = <129>;○27 
  panel-mode-height-mm = <64>;○27 
}; 
 
序号 解释 
○1  屏幕 setting 节点 
○2  是否是 superframe 
○3  
加串器 max96789 初始化设定，格式为: <reg><data><delay>， 
reg: 要写的 reg 
data: 要写的数据 
delay: 写完该命令后 delay 多久，单位 ms 
○4  
加串器 deinit 设定，复位加串器所有设定，格式为: <reg><data><delay>， 
reg: 要写的 reg 
data: 要写的数据 
delay: 写完该命令后 delay 多久，单位 ms 
○5  
Link 状态寄存器，格式为： 
<reg><data><delay> 
reg: 要写的 reg 
data: 要写的数据 
delay: 写完该命令后 delay 多久，单位 ms 
○6  解串器设定 
○7  解串器 I2C 地址 
○8  背光控制的 I2C 地址，如果没有可以不用填写 
○9  
当背光和 tp 都是由 MCU 控制，IIC 地址一样，都去注册 Client 会有地址冲突的问
题。这里将 MCU 实际 IIC 地址让给 tp 用，背光用这个地址在 Kernel 中获取 Client，
使用 Client 时再将地址设置为实际地址。仅仅在 Kernel 中用到。 
○10  
解串器初始化命令，格式为： 
<reg><data><delay> 
reg: 要写的 reg 
data: 要写的数据， 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
序号 解释 
delay: 写完该命令后 delay 多久，单位 ms 
○11  
支持 hotplug 功能时必须填写，通过读取此设定，用来判断解串器是否有被初始化
过，注意必须跟 des-init-cmd 中的某项一致 
○12  背光开命令，格式为全部 data，根据屏幕的情况填写，没有可以不填 
○13  背光关命令，同上 
○14  屏幕 Timing 设定，必须填写 
○15  水平方向的 pixel，宽 
○16  垂直方向的行数，高 
○17  HFP，水平方向前肩 
○18  HAS，水平方向 sync 
○19  HBP，水平方向后肩 
○20  VFP，垂直方向前肩 
○21  VSA，垂直方向 sync 
○22  VBP，垂直方向后肩 
○23  FPS，帧率 
○24  每帧进入 LP，建议开启，细节介绍请参考章节 13.5.1 
○25  
MIPI 的 PLL Clock，可以不填，DSI 会按 Timing 计算出一个 PLL，如果屏幕需要其他的
PLL 值，可以填入客制化的值 
○26  可以不填，需要根据 Timing 客制化（TBD） 
○27  屏的物理尺寸，单位 mm，用来计算 PPI。可以从屏幕的 Spec 中拿到。 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
 
3.3.6 如何新增一个 LK 的 Driver 
以 SerDes Driver max96789_dsi_vdo 为例： 
1. 新增 panel 文件：vendor\mediatek\proprietary\bootable\bootloader\lk2\dev\lcm，如下
图 
 
 
2. 修改vendor\mediatek\proprietary\bootable\bootloader\lk2\project\$(project).mk 文
件，将 Panel Driver 设置为新增文件，注意命名规则 
 
 
3. 修改
vendor\mediatek\proprietary\bootable\bootloader\lk2\dev\lcm\mt65xx_lcm_list.c 文
件，将 Panel Driver 加入 list 
 
 
4. 修改文件：
vendor\mediatek\proprietary\bootable\bootloader\lk2\dev\lcm\include\lcm_drv.h，
Extern 新增 Panel 
 
 
5. 新增 Driver 中实现相关的参数和 Function 设定 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
3.3.7 LK Driver Function 介绍 
LK LCM Driver 主要为实现 LCM_DRIVER 结构体的成员，方便后续 Display 获取相关参数和控制初始化时
序。如果需要增加客制化的 Function，可以在 LCM_DRIVER 里面添加实现。 
 
 
Function 名称 解释 是否需要修改 (Yes/No/Optional) 
name 定义 Driver 名字 Y 
set_util_funcs lcm_util 结构体初始化 N 
get_params 获取 Panel 基本参数，详见下一章节 Y 
init_power 控制上电时序 Y 
init 
Panel 或者 bridge 的初始化 
注：代码默认按照 lcm_init_power -> 
lcm_init 的顺序跑。此时 DSI 还没有送
信号出来，对时序有要求需要注意。 
Y 
suspend 
suspend_power 
休眠吃 Kernel lcm driver 里的配置，可
不配置 
N 
sesume 
resume_power 
唤醒吃 Kernel lcm driver 里的配置，可
不配置 
N 
compare_id 
项目兼容多款屏时使用：若
MTK_LCM_LIST_SUPPORT 中定义了多
个屏，开机时会轮流跑每个屏驱的初
O 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
Function 名称 解释 是否需要修改 (Yes/No/Optional) 
始化和该函数读取寄存器，若读取到
的值符合预期，则说明该驱动适配当
前屏。 
set_backlight 
如果背光需要在出视频流之后打开，
可以在这个函数里面实现 
O 
 
3.3.8 LK 参数 get_params 介绍 
LCM Driver 的lcm_get_params 函数里会将当前 Panel 的参数传给 DSI 和 Display Driver，从而让 MIPI TX
端输出符合 Panel 要求的 MIPI 波形，客户可以参考表格并根据场景 Panel Spec 修改lcm_get_params 里
的参数。SerDes Driver 中需要配置的 default 参数如下图所示，以供参考。SerDes Driver 中如果 dts 中有
设定，Driver 会从 dts 中 Parse 出对应的 Panel 设定，覆盖 default 设定。 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
 
 
一般情况上图的 SerDes 设定可以覆盖 SerDes 的使用场景，其他参数可以不设定。具体的参数介绍，可
以参考如下说明。
vendor\mediatek\proprietary\bootable\bootloader\lk2\dev\lcm\include\lcm_drv.h，
LCM_PARAMS 结构体中部分参数未使用到，参考下表修改 Yes/Optional 的参数即可。 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
type Panel Interface 类型，可选
DSI/DPI/DBI 
Y 
width/height 每帧的图像数据的像素宽高 Y 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
参数 解释 是否需要修改 (Yes/No/Optional) 
mode 
屏正常送图时的传输模式，分为以
下四种 (详见 mipi_DSI_specification)
，根据 LCM Spec 配置： 
CMD_MODE 
SYNC_PULSE_VDO_MODE 
SYNC_EVENT_VDO_MODE 
BURST_VDO_MODE 
Y 
switch_mode_enable mode 切换 O 
switch_mode 切换的 mode O 
Packet_size 未使用的参数，无需修改 N 
PS 
选择 pixel stream type，常见有以下
四种： 
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
color_order: RGB SWAP，支持
RGB/BGR 顺序传输 
trans_seq: Data bit 的传输顺序，即最
高位(MSB)/最低位(LSB)先传输 
Padding: 未使用参数，无需修改 
Format: 数据格式，例如
RGB888/666/565… 
Y 
vertical_sync_active Display timing vertical params. VSA Y 
vertical_backporch Display timing vertical params. VBP Y 
vertical_frontporch Display timing vertical params. VFP Y 
vertical_active_line Display timing vertical params. VACT Y 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
参数 解释 是否需要修改 (Yes/No/Optional) 
vertical_frontporch_fo
r_low_power 
Low Power Feature，表示当系统无需
画面刷新时，调整 VFP 为该值来降
帧，以达到降低功耗目的（前提要
求屏端支持动态切换该帧率）。通
过 FPS/fps_new = vtotal_new/VTOTAL
计算得到 vfp_low_power。 
O 
horizontal_sync_active Display timing vertical params. HSA Y 
horizontal_backporch Display timing vertical params. HBP Y 
horizontal_frontporch Display timing vertical params. HFP Y 
horizontal_active_pixel Display timing vertical params. HACT Y 
ssc_disable 
展频开关，展频可减少对其它信号
的电磁干扰，但要求 Panel 支持展
频。 
1 表示关闭展频，0 表示开启展频。 
SerDes 一般情况建议关闭展频 
O 
ssc_range 
展频范围，可设定 0~5，单位为‰ 
例如默认 ssc_range = 5，即向下展频
宽度为 5‰. 
O 
PLL_CLOCK MIPI RX 采样的 Clock Y 
data_rate 对于 DSI 的 data rate = 2* PLL_CLOCK Y 
data_rate_khz 
MIPI 采样率，equal data_rate* 1000
，有 FPS 精度要求时需配置 
O 
cont_clock 
开启连续时钟。 
1: Enable 连续时钟，clock lane 不进
入 LP。 
0: Disable 连续时钟，clock lane 每帧
进入一次 LP (每行间保持 hs) 
SerDes 一般情况 建议设为连续时钟 
O 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
参数 解释 是否需要修改 (Yes/No/Optional) 
clk_lp_per_line_enable 
1: Lock lane 每行进入一次 LP(仅在
cont_clock = 0 时才生效)。 
O 
esd_check_enable ESD check 功能配置： 
esd_check_enable = 1;//开启 ESD 
Check 
customization_esd_check_enable = 1; 
//read LCM register 
 
customization_esd_check_enable = 0 
//DSI_TE EINT 
O 
customization_esd_ch
eck_enable O 
lcm_esd_check_table[] O 
IsCphy 
使能 CPHY 接口时配置。cphy 设置为
1，dphy 设置为 0. 
O 
vdo_per_frame_lp_en
able 
使能 data 每帧回一次 LP（但要求
clk_lp_per_line_enable≠1，即 clock
不能每行回 LP）。细节介绍请参考
章节 13.5.1 
O 
lane_swap_en Lane 硬件连接错误时使能 O 
lane_swap Lane0/1/2/3 序的 SWAP O 
pn_swap 
P/N SWAP (仅支持在同一个 lane 内交
换) 
O 
HS_TRAIL 
PHY Timing 配置，MIPI Test Timing 
Fail 时配置 
O 
HS_ZERO O 
HS_PRPE O 
LPX O 
 
3.3.9 DSI0 BootLogo 设定 
首先到如下路径找到当前屏幕尺寸所对应的 Logo 资源文件夹，如果没有所需大小的资源文件夹，也可
以修改裁剪 LK Logo 对应当前使用屏幕的分辨率，然后到如下路径中新增一个图片资源，添加方法如
下： 
1. 在下面目录下新增或查找图片资源文件
vendor/mediatek/proprietary/external/BootLogo/logo/ 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
 注：新增的图片资源以目录名为前缀，可参考其他目录。 
 
2. 将下面的.mk 文件中的 BOOT_LOGO config 修改为上方找到的或新增的图片目录
device/mediatekprojects/{project_name}/ProjectConfig.mk 
 
3. 由于当前的纯 Android 公版会启用多分辨率 Logo 功能，因此 BOOT_LOGO 配置为 uhd。对应的 uhd
文件夹中包含多个不同分辨率的 uboot Logo 资源，用于在显示 Logo 时根据所连接屏幕的显示宽度
和高度适配显示不同尺寸的 Logo. 
在添加不同尺寸的 uboot Logo 图片后，需要在 BootLogo/logo/rules.mk 文件的 
LOGO_RESOURCE_OBJ_LIST1 中相应地添加图片记录，以便将其打包进 logo.img 中。每个新增的
不同分辨率 Logo 的索引值（index）对应于其在 LOGO_RESOURCE_OBJ_LIST1 中被添加的顺序位置
（索引从 0 开始）。 
对应的 Logo 显示相关的源代码路径如下： 
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/mediatek/common/log
o 
vendor/mediatek/proprietary/bootable/bootloader/lk2/lib/libshowlog 
 
3.3.10 DWS 设定 
dws 路径：\vendor\mediatek\proprietary\tools\dct\dws\mt6991\<Project>.dws 
 
可以通过 DCT 修改或直接修改 dws 文件，需要根据屏使用的 GPIO 和 I2C 配置，以下为配置后的 dws 中
GPIO 和 I2C 的模板： 
GPIO 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
I2C 
 <gpio200> 
                <eint_mode>false</eint_mode> 
                <def_mode>1</def_mode> 
                <inpull_en>true</inpull_en> 
                <inpull_selhigh>true</inpull_selhigh> 
                <def_dir>IN</def_dir> 
                <out_high>false</out_high> 
                <varName0>GPIO_I2C1_SCA_PIN</varName0> 
                <smt>true</smt> 
                <ies>true</ies> 
</gpio200> 
<gpio201> 
                <eint_mode>false</eint_mode> 
                <def_mode>1</def_mode> 
                <inpull_en>true</inpull_en> 
                <inpull_selhigh>true</inpull_selhigh> 
                <def_dir>IN</def_dir> 
                <out_high>false</out_high> 
                <varName0>GPIO_I2C1_SDA_PIN</varName0> 
                <smt>true</smt> 
                <ies>true</ies> 
</gpio201> 
 
 
进入系统后，可以通过以下指令确定 GPIO/I2C 是否配置成功： 
#cat  /proc/mtk_gpio/soc.pinctrl 
  
注： 
• MODE: Aux.Function selection, range: 0~7 
• DIR: 0 for input mode; 1 for output mode (This is register value of MTK’s DIR bit)  
• DOUT/DIN: 0 for low; 1 for high 
• DRIVE: Driving current selection, range: 0/1/2/3/4/5/6/7，定义参考平台对应 GPIO table 
• IES/SMT: 0 for disable; 1 for enable 
• PULLEN/R1/R0: 0 for disable; 1/2/3 for enable 
• For pin with 2 pull resistors, R1 and R0 are shown 
• For pin with 1 pull resistor, R1 and R0 are not shown 
• PULLSEL: 0 for selecting pull-down resistor; 1 for pull-up resistor 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
 
3.3.11 DSI0 LK Display Disable 
在以下位置配置 “MTK_LK_NO_DISPLAY := yes” 
Lk2/project/<Project>.mk 
 
3.4 Kernel Driver Porting 
Kernel Driver 用于 Kernel 启动的 DSI1 & DSI2 对应的 LCM，并且控制所有的 DSI Port 的 LCM Suspend 和
Resume。 
3.4.1 Kernel Driver 文件路径 
名称 路径 
LCM Driver 
kernel/kernel_device_modules_6.1/drivers/gpu/drm/panel/bridge-serdes-
max96789.c 
kernel/kernel_device_modules_6.1/drivers/gpu/drm/panel/panel-serdes-
max96789.c 
kernel/kernel_device_modules_6.1/drivers/gpu/drm/panel/panel-boe-jd9365da-
vod.c 
kernel/kernel_device_modules_6.1/drivers/gpu/drm/panel/Kconfig 
kernel/kernel_device_modules_6.1/drivers/gpu/drm/panel/Makefile 
Project.mk Device/mediateksample/{Project}/ProjectConfig.mk 
Kernel config kernel/kernel_device_modules_6.1/arch/arm64/configs/mgk_64_k61_defconfig 
Kernel kleaf Kernel/kernel_device_modules_6.1/kernel/kleaf/mgk_64_k61.bzl 
KO Order Table Device/mediateksample/{Project}/ko_order_table.csv 
Kernel DTS 
arch\arm64\boot\dts\mediatek\cust_mt8676_display_interface.dtsi 
arch\arm64\boot\dts\mediatek\cust_mt8676_display_config_main.dtsi 
arch\arm64\boot\dts\mediatek\cust_mt8676_display_config_6p.dtsi 
Display Driver 
kernel/kernel_device_modules-
6.1/drivers/gpu/drm/metiatek/Mediatek_v2/mtk_dsi.c, mtk_mipi_tx.c, 
mtk_disp_dsc.c,mtk_drm_crtc.c,mtk_panel_ext.c,… 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
3.4.2 Kernel Driver 文件参考 
SerDes 的 Panel Driver，请参照 Panel 目录下的birdge-serdes-max96789.c & panel-serdes-
max96789.c，Driver 的写法是从 dts Panel 的节点里面 Parser 出对应的 Panel Timing 和 SerDes 的设定。
如果沿用这个 Driver，可以把 dts 中的参数更改为要 Bringup 的 SerDes 参数和屏幕 Timing。如果需要
Porting MIPI 的 Panel Driver，请参照 panel 目录下的panel-boe-jd8365da-vdo.c 
3.4.3 DTS 文件介绍 
请参考 Section 3.3.4 
3.4.4 DTS 参数介绍 
请参考 Section 3.3.5 
3.4.5 如何添加一个新的 Kernel Driver 
Kernel 的 Driver 都是以 KO 的方式加载的，如果需要添加新的 Driver 需要注意在 Kleaf 和 KO table 中添
加。Panel 的 KO 是 ramdisk KO，需要注意添加的位置会影响初始化的顺序，建议参考公版添加位置。 
 
1. 添加新的 Driver 
 
 
2. 在 kconfig 加入新的 Driver 
 
 
 
 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
3. 在 makefile 中加入新的 Driver 
 
 
4. 在 Kernel config 中加入 Driver 
 
 
5. 在 kleaf 中加入 Driver 
 
 
6. 在 KO order table 里面添加 KO，table 的 module 会被顺序加载，请将新增的 Panel Module 添加到合
适的位置，避免太早或太晚 init。请参照公版添加 Panel Module 的位置。 
 
 
7. 在 dts 中加入 Driver 
 
 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
8. 实现 Driver 中的 Function 和参数设定 
3.4.6 Kernel Driver Function 介绍 
DRM 架构驱动函数 
 
 
DRM 原始架构函数 
 
 
MTK DSI Panel 扩展客制化函数 
 
 
Function 名称 解释 是否需要修改 (Yes/No/Optional) 
probe Panel 注册函数,LCM 的初始化和探测 Y 
remove 用于移除并释放 LCM 相关的资源 Y 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
Function 名称 解释 是否需要修改 (Yes/No/Optional) 
prepare 
用于准备 LCM Power On 和初始化，此
时 DSI 还没有开始送信号出来。 
Y 
enable 
用于启动 DRM Panel，也可以控制背
光。此时 DSI 已经 Start，已经有 MIPI
信号输出。对时序有要求的话，需要
注意。 
Y 
disable 用于启动 DRM Panel，点亮背光 Y 
unprepare 用于取消 DRM Panel 的初始化 Y 
get_modes 用于获取并设置 Panel 的显示模式 Y 
reset 用于控制屏幕的 Reset O 
ata_check SerDes 屏幕不需要设定 N 
get_real_vdo_timing 
SerDes 当 superframe 时，给 DSI 送实
际输出的 timing，superframe 必须实
现 
O 
get_link_status 
SerDes 屏幕是否有接上，开机的时候
会 check 状态，并且会上报 connector
状态 
O 
Get_real_timing 
SerDes Panel 在 probe 的时候从 ser 拿
Panel 的 Timing 等信息后填入
ext_params 和 display_mode 结构体里
面。 
O 
 
3.4.7 Kernel 参数介绍 
1. default_mode 结构体是 DRM 会通过 get_modes 函数获取 Panel 的 Timing 信息，这部分参数必须要
配置。 
static const struct drm_display_mode default_mode = { 
.clock = PCLK, 
.hdisplay = FRAME_WIDTH, 
.hsync_start = FRAME_WIDTH + HFP, 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
.hsync_end = FRAME_WIDTH + HFP + HSA, 
.htotal = FRAME_WIDTH + HFP + HSA + HBP, 
.vdisplay = FRAME_HEIGHT, 
.vsync_start = FRAME_HEIGHT + VFP,  
.vsync_end = FRAME_HEIGHT + VFP + VSA, 
.vtotal = FRAME_HEIGHT+ VFP + VSA + VBP, 
}; 
 
SerDes Driver 中，是在 get_real_timing()函数中赋值的，其中 timing1 的值为 superframe 中 Virtual Panel
的 Timing，非 superframe 的场景为 0，则为单屏的 Timing。 
 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
clock 
以 kHz 为单位的像素时钟频率，
total 的频率，包含 blank 区间。这
个 clock 为 pixel clock，计算公式
为： 
htotal x vtotal x fps 
Y 
hdisplay 水平方向的显示分辨率宽度 Y 
hsync_start 水平同步信号开始的位置 Y 
hsync_end 水平同步信号结束的位置 Y 
htotal 水平方向的总像素数 Y 
vdisplay 垂直方向的显示分辨率高度 Y 
vsync_start 垂直同步信号开始的位置 Y 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
参数 解释 是否需要修改 (Yes/No/Optional) 
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
 }, 
 .ssc_enable = 0, 
 .physical_width = FRAME_WIDTH, 
 .physical_height = FRAME_HEIGHT, 
}; 
 
SerDes Driver 中，是从 get_real_timing 函数中赋值的。 
 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
pll_clk 
MIPI PLL 时钟频率，此处配置会
覆盖使用 PCLK 计算出的的 MIPI 
Clock，在 superframe mode 下
，必须设置 pll_clk 
Y 
data_rate 
数据传输速率，等于 pll_clk*2, 
此处配置会覆盖.pll_clk 配置的
MIPI Clock，如果需要精确的
datarate，可以配置次参数 
Y 
phy_timcon 
DSI 物理层时间配置，此处配置
会覆盖计算得出的 MIPI 时序 
O 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
参数 解释 是否需要修改 (Yes/No/Optional) 
crop_width 
superframe 单个屏幕的裁剪宽
度，在超级帧模式下，应设置
为与面板之一的宽度/高度相对
应 
O 
crop_height 
superframe 单个屏幕的裁剪高
度，在超级帧模式下，应设置
为与面板之一的宽度/高度相对
应 
O 
vfp_low_power 
低功耗模式下的垂直前沿间隔
，进入 idle mode 时改变 VFP，
从而降低刷新率。 
会造成帧率频繁抖动，
SerDes/Bridge 屏建议关闭 
N 
esd_check_enable ESD check 开关 N 
cust_esd_check 
自定义 ESD check 方式，
SerDes/Bridge 屏由于屏幕在远
端，此功能无法使用 
N 
lcm_esd_check_table 
LCM ESD DDIC table，ESD READ 
DDIC 需要读取的寄存器地址和
数量 
N 
ssc_enable 
SSC (展频时钟) 使能，减少
EMI，会造成帧率和时钟轻微抖
动。 
SerDes/Bridge 不一定支持，如
需要请确认后配置 
O 
ssc_range 
SSC 范围，1‰~5‰，展频范
围由 SPEC 规范 
O 
physical_width 
物理宽度（mm），上层会使用
此参数调整 DPI，在超级帧模式
Y 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
参数 解释 是否需要修改 (Yes/No/Optional) 
下，physical_width 应设置为两
个面板宽度之和。 
physical_height 
物理高度（mm），上层会使用
此参数调整 DPI。在超级帧模式
下，physical_height 应设置为两
个面板中较大的一个的高度 
Y 
dsc_params 
用于配置 DSC 详细参数，如需
要使用请咨询 
O 
prefetch_time 
调整 VSYNC 时间点，调整时序
以满足特定的时序要求 
O 
output_mode 
输出模式， 
Single Port Mode: 常规模式 
Dual Port Mode: 使用两路 DSI 来
输出一幅画面 
dsc single mode: 开启 DSC，dsc 
dual port setting 在 dsc_params
中 
O 
is_cphy C-PHY 配置，使能 C-PHY O 
lane_swap_en 
MIPI Lane 交换，可选值：
MIPITX_PHY_LANE_0~3，CK、RX 
O 
lane_pn_swap 
交换 Lane PN，只能交换同一组
Lane 的 PN，不能交换不同组的 
O 
Vdo_per_frame_lp_enable 
使能 data 每帧回一次 LP，建议
开启。细节介绍请参考章节
13.5.1 
Y 
 
3. 添加 DSI 基本格式属性，必须配置。 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
 
DSI->mode_flags 参考如下设定： 
 
 
参数 解释 是否需要修改 (Yes/No/Optional) 
lanes 
使用的 DSI 数据通道数，DSI 支持 1~4 条
lane，lane 数越多，总带宽越大,目前使
用的大多数 panel 都为 4 条 lane 
Y 
format 
DSI 传输的像素格式，默认为
MIPI_DSI_FMT_RGB888，如需输出其他
format，需另行咨询评估 
Y 
mode_flags 
DSI 模式，定义传输模式和特性。 
主要配置 DSI 使用的 4 种 mode 
MIPI_DSI_MODE_VIDEO：启用 VDO 
mode，未配置则为 CMD mode。 
MIPI_DSI_MODE_VIDEO_BURST: 
使能 BURST_VDO_MODE 
MIPI_DSI_MODE_VIDEO_SYNC_PULSE： 
使能 SYNC_PULSE_VDO_MODE 
MIPI_DSI_MODE_NO_EOT_PACKET： 
HS 禁用 EoT packet 
MIPI_DSI_CLOCK_NON_CONTINUOUS: 
Y 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
参数 解释 是否需要修改 (Yes/No/Optional) 
使能非连续时钟，非连续时钟会在
blanking 区间进入 LP mode，会有额外的
data phy cycle。 
MIPI_DSI_MODE_LPM: 
使能 LP send cmd，拿掉后会在 HS send 
cmd。目前默认 LP send cmd，此 config
未使用 
 
3.5 disp_pwm 方式背光控制 
背光的亮度控制方式有多种，有普通 PWM 控制，I2C 通信的 Driver 产生 PWM 控制，屏幕端 MCU 产生
PWM 控制，disp_pwm 控制等方式。使用那种方式是由屏幕的 HW 来决定的。在调背光的 Feature 时需
要明确屏幕用的是那种，这个章节只说明背光由 disp_pwm 控制的情况要如何配置，8676 可以支持两路
disp_pwm。 
3.5.1 disp_pwm dws 设定 
HW 原理图中确认使用的 disp_pwm 哪个 GPIO，下图中是co_device_module\include\dt-
bindings\pinctrl\mt6897-pinfunc.h 里面查到disp_pwm Pin。确认好之后，把 DWS 中的 GPIO Pin 
Function 设定为disp_pwm。以 PINMUX_GPIO131__FUNC_DISP_PWM 为例，需要将 GPIO131 def_mode 
设定为 1. 
#define PINMUX_GPIO131__FUNC_DISP_PWM (MTK_PIN_NO(131) | 1) 
#define PINMUX_GPIO132__FUNC_DISP_PWM1 (MTK_PIN_NO(132) | 1) 
 
下图中 DWS 的设定供参考。由于 GPIO 可能会被其他模块使用，需要在 dts 中确认是否有其他模块使用
这根 GPIO。如果有被使用，则需要删除，不然 GPIO 的 Mode 可能会被更改，导致没有波形输出。 
           <gpio131> 
                <eint_mode>false</eint_mode> 
                <def_mode>1</def_mode> 
                <inpull_en>true</inpull_en> 
                <inpull_selhigh>false</inpull_selhigh> 
                <def_dir>IN</def_dir> 
                <out_high>false</out_high> 
                <varName0>GPIO_PWM_BL_PIN</varName0> 
                <smt>true</smt> 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
                <ies>true</ies> 
            </gpio131> 
 
3.5.2 leds dts 设定 
背光的亮度值会通过 leds 节点传下来一个 Brightness Level 值，然后这个值会转换为 Duty 和 Period 的值
给到disp_pwm Driver 去设定占空比。leds 的节点中会引用 disp_pwm 节点，来实现背光的控制。leds
的根节点在 mt6897.dtsi 中，如果需要多屏的 leds 控制，需要建立多个 leds 节点。下图中是两个 leds 节
点的参考。两路disp_pwm 的节点在 mt6897.dtsi 中，如果需要开启，需要先把对应节点中 status 由
“disabled”改为“okay”。 
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
disp_pwm0: disp-pwm0@1100e000 { 
  compatible = "mediatek,mt6897-disp-pwm"; 
  reg = <0 0x1100e000 0 0x1000>; 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
  interrupts = <GIC_SPI 203 IRQ_TYPE_LEVEL_HIGH 0>; 
  #pwm-cells = <2>; 
  clocks = <&topckgen_clk CLK_TOP_DISP_PWM_SEL>, 
   <&pericfg_ao_clk CLK_PERAOP_DISP_PWM0>, 
   <&topckgen_clk CLK_TOP_TCK_26M_MX9>; 
  clock-names = "main", 
   "mm", 
   "pwm_src"; 
  status = "okay"; 
 }; 
 
 disp_pwm1: disp-pwm1@1100f000 { 
  compatible = "mediatek,mt6897-disp-pwm"; 
  reg = <0 0x1100f000 0 0x1000>; 
  interrupts = <GIC_SPI 203 IRQ_TYPE_LEVEL_HIGH 0>; 
  #pwm-cells = <2>; 
  clocks = <&topckgen_clk CLK_TOP_DISP_PWM_SEL>, 
   <&pericfg_ao_clk CLK_PERAOP_DISP_PWM1>, 
   <&topckgen_clk CLK_TOP_TCK_26M_MX9>; 
  clock-names = "main", 
   "mm", 
   "pwm_src"; 
  status = "okay"; 
 }; 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
序号 解释 
① 第 1 路背光的节点 
② 允许用户设置的最大背光值 
③ 
最大硬件背光值，背光 IC 支持到 255 级则为 255 (若对亮度级没有特别要求则保持默认
值) 
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
 
3.5.3 Disp_pwm LK 流程 
LK 的背光亮度和 PWM 频率是一个固定的值。其中 PWM 频率默认为 12.965kHz，调整范围有限。 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
 
 
3.5.4 disp_pwm Kernel 流程 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
4 DSI Yocto Porting 指南 
System Branch Kernel Version 
Yocto Master-spm Kernel-6.1 
 
4.1 Yocto 通用文件路径 
文件 路径 
LK2 src\bsp\lk2\ 
Kernel src\Kernel\linux\v6.1_mt8676\co_device_modules\ 
meta Meta\meta-mediatek-mt8676\ 
dws 
src\devtools\dct\dws\mt6897\ 
auto8676p1_64.dws 
注：对于 DSI Panel Driver，Yocto 与 Android 的差异主要是文件路径和 project 的差异，Driver 部分是一样的。 
 
4.2 LK Driver Porting 
LK 部分的 Driver 主要用于 BootLogo 的显示，DSI0 可以在 LK 显示 BootLogo，DSI1 没有支持 LK 显示，默
认从 Kernel 启动。 
4.2.1 LK2 文件架构 
橙色区域文件是 Porting Driver 需要修改或者参考的文件。 
LCM Driver 
dev\lcm\max96789_dsi_vdo\ max96789_dsi_vdo.c 
dev\lcm\jd9365da_wxga_dsi_vdo\ jd9365da_wxga_dsi_vdo.c 
dev\lcm\mt65xx_lcm_list.c 
dev\lcm\include\lcm_drv.h 
Project.mk Project\auto8676p1_64.mk 
Kernel DTS 
arch\arm64\boot\dts\mediatek\cust_mt8676_display_interface.dtsi 
arch\arm64\boot\dts\mediatek\cust_mt8676_display_config_main.dtsi 
arch\arm64\boot\dts\mediatek\cust_mt8676_display_config_6p.dtsi 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
LCM Driver 
dev\lcm\max96789_dsi_vdo\ max96789_dsi_vdo.c 
dev\lcm\jd9365da_wxga_dsi_vdo\ jd9365da_wxga_dsi_vdo.c 
dev\lcm\mt65xx_lcm_list.c 
dev\lcm\include\lcm_drv.h 
Display Driver 
Platform\mediatek\mt6897\disp\ddp_dsi.c, disp_lcm.c, 
primary_display.c, mt_disp_drv.c, ddp_manager.c, ddp_dsc.c, 
ddp_dither.c… 
 
4.2.2 MIPI Panel Driver - jd9365da_wxga_dsi_vdo.c 
如果 Porting MIPI Panel Driver，可以参考这份文件，此 Driver 在公版有点亮 MIPI 屏幕。 
4.2.3 SerDes Panel Driver - max96789_dsi_vdo.c 
如果 Porting SerDes Panel Driver, 可以参考这份文件，Driver 的写法是从 dts panel 的节点里面 Parser 出对
应的 Panel Timing 和 SerDes 的设定。如果沿用这个 Driver，可以把 dts 中的参数更改为要 Bringup 的
SerDes 参数和屏幕 Timing。 
4.2.4 DTS 文件介绍 
Mt6897.dts 
Chip 的 dts 相关设定，DSI 等 Display 根节点会放在
这支文件里面，节点默认关闭 
Auto8676p1_64.dts Project dts，可以拉到文件最后，查看使用的是哪个
cust_mt8676_display_config_xxx.dtsi 
cust_mt8676_display_interface.dts
i 
Interface (DSI, DP , eDP), Panel, Bridge, GPIO 等相关
Display 设定，默认节点关闭。 
cust_mt8676_display_config_main.d
tsi 
覆盖 cust_mt8676_display_interface.dtsi, 只开 DSI0 单
屏。 
cust_mt8676_display_config_6p.dts
i 覆盖 cust_mt8676_display_interface.dtsi，开启多屏。 
注：一般情况修改橙色部分的文件即可。 
4.2.5 DTS 参数介绍 
请参考章节 3.3.5 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
4.2.6 如何新增一个 LK 的 Driver 
以 SerDes Driver max96789_dsi_vdo 为例： 
1. 新增 panel 文件：src\bsp\lk2\dev\lcm，如下图 
 
 
2. 修改src\bsp\lk2\project\$(project).mk 文件，将 Panel Driver 设置为新增文件，注意命名规
则 
 
 
3. 修改src\bsp\lk2\dev\lcm\mt65xx_lcm_list.c 文件，将 Panel Driver 加入 list 
 
 
4. 修改文件：src\bsp\lk2\dev\lcm\include\lcm_drv.h，extern 新增 Panel 
 
 
5. 新增 Driver 中实现相关的参数和 Function 设定 
4.2.7 LK Driver Function 介绍 
请参考章节 3.3.7 
4.2.8 LK 参数 get_params 介绍 
请参考章节 3.3.8 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
4.2.9 DSI0 BootLogo 设定 
首先到如下路径找到当前屏幕大小所对应的 Logo 资源文件夹，如果没有所需大小的资源文件夹，也可
以修改裁剪 LK Logo 对应当前使用屏幕的分辨率，然后到如下路径中新增一个图片资源，添加方法如
下： 
注：Hyper 双系统只会在 Yocto 端有 Logo，Android 端是不会有 LK Logo 的！ 
 
1. 在下面目录下新增或查找图片资源文件 
src/apps/atom-base/progs/makelogo 
注：新增的图片资源以目录名为前缀，可参考其他目录。 
 
2. 将对应当前使用的 conf 文件中的 BOOT_LOGO config 修改配置为上方找到的或新增的图片目录名 
meta/meta-mediatek-mt8676/conf/machine/{project}.conf 
公版默认都是配置在 meta/meta-mediatek-mt8676/conf/machine/auto8676p1_64.conf 中，因为
其他 project 都会继承这个 project 
 
3. 因当前公版支持多分辨率 Logo 功能，所以对应的 BOOT_LOGO 配置的是 uhd，该配置下，将会 build 
in 多个不同分辨率的 uboot Logo 资源，以供显示时根据当前 Display 对应的屏幕宽、高来选择不同
分辨率 Logo 的索引值（index）进行 Show。 
上述的 Logo Index，是需要在 makelogo 目录下的rules.mk 中对应分辨率图片资源添加到
RESOURCE_OBJ_LIST 中的顺序而定，同时也需要将 add 的新图片对应添加到 bmp_to_raw 操作中. 
对应的 Logo 显示相关源代码路径： 
src/bsp/lk2/platform/mediatek/common/logo 
src/bsp/lk2/lib/libshowlogo 
 
4.2.10 DWS 设定 
dws 路径： src\devtools\dct\dws\mt6897\{project}.dws 
 
其他部分请参考章节 3.3.10 
 
4.3 Kernel Driver Porting 
Kernel Driver 用于 Kernel 启动的 DSI1，并且控制所有的 DSI Port 的 LCM Suspend 和 Resume. 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
4.3.1 Kernel Driver 文件路径 
Kernel Driver  
文件 路径 
LCM Driver 
Src/kernel/linux/v6.1_mt8676/co_device_modules/drivers/gpu/drm/panel/ 
bridge-serdes-max96789.c 
panel-serdes-max96789.c 
panel-boe-jd9365da-vod.c 
Kconfig 
Makefile 
Kernel config 
Src/kernel/linux/v6.1_mt8676/co_device_modules/arch/arm64/configs/ 
mgk_64_k61_defconfig 
Kernel kleaf 
Src/kernel/linux/v6.1_mt8676/co_device_modules/kernel/kleaf/ 
mgk_64_k61.bzl 
KO Order 
Table 
meta/meta-mediatek-mt8676/recipes-
kernel/linux/ko_order_table/auto8676p1_64/ko_order_table.csv 
Kernel DTS 
Src/kernel/linux/v6.1_mt8676/co_device_modules/arch/arm64/boot/ 
dts/mediatek/ 
cust_mt8676_display_interface.dtsi 
cust_mt8676_display_config_6p.dtsi 
Display 
Driver 
Src/kernel/linux/v6.1_mt8676/co_device_modules 
/drivers/gpu/drm/metiatek/Mediatek_v2/mtk_dsi.c, mtk_mipi_tx.c, 
mtk_disp_dsc.c,mtk_drm_crtc.c,mtk_panel_ext.c,… 
 
4.3.2 Kernel Driver 文件参考 
SerDes 的 Panel Driver 请参照 Panel 目录下的birdge-serdes-max96789.c & panel-serdes-
max96789.c，Driver 的写法是从 dts Panel 的节点里面 Parser 出对应的 Panel Timing 和 SerDes 的设定。
如果沿用这个 Driver，可以把 dts 中的参数更改为要 Bringup 的 SerDes 参数和屏幕 Timing。如果需要
Porting MIPI 的 Panel Driver 请参照 Panel 目录下的panel-boe-jd8365da-vdo.c. 
4.3.3 DTS 文件介绍 
请参考章节 3.3.4 
4.3.4 DTS 参数介绍 
请参考章节 3.3.5 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
4.3.5 如何添加一个新的 Kernel Driver 
请参考章节 3.4.5 
4.3.6 Kernel Driver Function 介绍 
请参考章节 3.4.6 
4.3.7 Kernel 参数介绍 
请参考章节 3.4.7 
4.4 disp_pwm 方式背光控制 
请参考章节 3.5 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
5 DSI Hypervisor Porting 指南 
System Branch Kernel Version 
Android U alps-mp-u0.mp7 Kernel-6.1 
Yocto master-spm Kernel-6.1 
 
5.1 Hypervisor SW 架构 
双系统的 Display 架构如下图所示，Yocto 为 host 端，Android 为 Server 端。DSI 的 Driver 以及 SerDes 的
Driver 都会放在 Yocto 端，Android 端会通过虚拟化实现，并没有实体的 DSI 和 SerDes Driver。所以在
Yocto 端双系统与单 Yocto 的差异为不同的 Project。 
 
 
5.2 HYP 通用文件路径 
文件 路径 
Yocto  
LK2 src\bsp\lk2\ 
Kernel src\Kernel\linux\v6.1_mt8676\co_device_modules\ 
meta meta\meta-mediatek-mt8676-hyp\ 
dws 
src\devtools\dws\mt6897\ 
auto8676p1_64_hyp_6p.dws 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
文件 路径 
KO Table 
meta/meta-mediatek-mt8676/recipes-
kernel/linux/ko_order_table/auto8676p1_64_hyp_6p/ko_order_table 
Kernel 
kleaf 
Src/kernel/linux/v6.1_mt8676/co_device_modules/kernel/kleaf/ 
mgk_64_k61.bzl 
configs 
meta/meta-mediatek-mt8676-hyp/recipes-
kernel/linux/files/auto8676p1_64_hyp_6p.defconfig 
dts 
meta/meta-mediatek-mt8676-hyp/recipes-
kernel/linux/files/auto8676p1_64_hyp_6p.dts 
meta/meta-mediatek-mt8676-hyp/recipes-
kernel/linux/files/dtsi/cust_mt8676_display_config_hyp_6p.dtsi 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/ 
boot/dts/mediatek/cust_mt8676_display_interface.dtsi 
LK2 
config 
src\bsp\lk2\project\auto8676p1_64_hyp_6p 
Android 
LK2 
config 
src\bsp\lk2\project\auto8676p1_64_hyp_6p-an.mk  
/*不需要porting，与yocto 共lk2 的code，使用不同config*/ 
dts 
Kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/ 
cust_mt8676_display_interface.dtsi 
cust_mt8676_display_config_vm_6p.dtsi 
 
当 Porting Hypervisor Project 时候，需要注意以上 Project 部分的差异，其他部分 Driver Porting 请参考第
4 章。 
5.3 Android Virtual 节点设定 
cust_mt8676_display_config_vm.dtsi 中定义需要虚拟化 Port。需要将 DSI0 的 Panel 的 Timing 和物
理宽高更新到panel-mode-setting 里面。其他设定请参考：MT8676 HYP Display V1.0 
&virt_dsi0_0 { 
 status = "okay"; 
 panel-mode-setting { 
  panel-mode-width = <1920>; 
  panel-mode-height = <1080>; 
  panel-mode-hfp = <14>; 
  panel-mode-hsa = <20>; 
  panel-mode-hbp = <20>; 
  panel-mode-vfp = <230>; 
  panel-mode-vsa = <2>; 
  panel-mode-vbp = <28>; 
  panel-mode-vrefresh = <60>; 
  panel-mode-width-mm = <129>; 
  panel-mode-height-mm = <64>; 
 }; 
}; 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
6 DSI Superframe Porting 指南 
DSI 支持超级帧，可以实现一个 DSI Port 输出两个屏幕的画面，从而支持更多的屏幕。目前的超级帧仅
支持对称的超级帧，即同款屏幕的超级帧输出。 
6.1 Superframe 概念 
MT8676 将两个屏幕的画面 Side by Side 拼成一张大帧的画面送给 DSI Port，DSI Port 再输出给加串器，加
串器把收到的数据分割成两个屏幕的画面，分别送给不同的端口显示在不同的屏幕上。  
6.2 Superframe 架构 
 
 
超级帧的两个屏幕是两个独立的 CRTC，例如 CRTC5 是 DSI Physical 的 Path，会实现 DSI Encoder 的 Enable 
和 Disable；CRTC6 DSI Virtual 的 Path 只实现 Panel2 的部分控制，DSI Encoder 控制全部交给 Physical 
Path。Panel1 和 Panel2 是接到加串器的两个不同的 port 上，virtual path 上的 Panel2 会固定输出到 port1
上。Panel1 和 Panel2 使用同一个加串器，Panel Enable 和 Disable 会调用到同一个加串器，加串器会根据
flag 来判断是否有做过 Enable 和 Disable。 
 
6.3 Superframe DTS 设定 
Superframe DTS 设定包含 4 部分：Physical 的 DSI 节点，Virtual 的 DSI 节点，加串器的节点还有
Superframe 的设定的节点。 
MT8676 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
6.3.1 Physical DSI 节点 
Panel 以子节点方式挂在 DSI 节点下，Panel Driver 会注册为 MIPI Device Driver，同时 Panel 节点中会引用
对应的加串器的节点，从而拿到加串器和 Panel Timing 等相关设定。 
 
如果 Port 口和加串器一样，只是更换不同的屏幕，这部分可以沿用公版设定，无需更改。  
&dsi1 {○1  
 status = "okay"; 
 #address-cells = <1>; 
 #size-cells = <0>; 
 panel11@0 { 
  compatible = "lcm,dsi,max96789";○2  
  reg = <0>; 
  ser = <&max96789_1>;○3  
  port { 
   panel_in1_1: endpoint { 
    remote-endpoint = <&dsi1_out>; 
   }; 
  }; 
 }; 
 ports { 
  port { 
   dsi1_out: endpoint@0 { 
    remote-endpoint = <& panel_in1_1>; 
   }; 
  }; 
 }; 
}; 
&mipi_tx_config1 { 
 status = "okay";○4  
}; 
 
序号 释义 
○1  DSI2 的节点 
○2  Panel1 SerDes Panel 的节点， 
○3  Panel 对应的加串器的节点，Driver 中会去拿，必填 
○4  
MIPI PHY 节点，每个 DSI 都对应一个 PHY 的节点，DSI 节点打开时，PHY 的节点也要
开启。 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
6.3.2 Virtual DSI 节点 
Panel 以子节点方式挂在 DSI 节点下，Panel Driver 会注册为 MIPI Device Driver，同时 Panel 节点中会引用
对应的加串器的节点，从而拿到加串器和 Panel Timing 等相关设定。如果 Port 口和加串器一样，只是更
换屏幕，这部分可以沿用公版设定，无需更改。 
&virt_dsi1_1 {○1  
 status = "okay"; 
 #address-cells = <1>; 
 #size-cells = <0>; 
 Panelv1@0 { 
  compatible = "lcm,dsi,max96789";○2  
  reg = <0>; 
  ser = <&max96789_1>;○3  
is-virtual = <1>;○4  
  port { 
   panelv1_in: endpoint { 
    remote-endpoint = <&dsiv1_out>; 
   }; 
  }; 
 }; 
 ports { 
  port { 
   dsiv1_out: endpoint { 
    remote-endpoint = <&panelv1_in>; 
   }; 
  }; 
 }; 
}; 
 
序号 释义 
○1  Virtual path virt_dsi1 的节点 
○2  Virtual Path SerDes Panel 的节点 
○3  Panel 对应的加串器的节点，Driver 中会去拿，必填 
○4  设为 1，表示挂在 Virtual Path 上，会将 Panel 挂在 max96789 的 Port1 上，必填 
 
 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
6.3.3 加串器节点 
Ser max96789 是 I2C Device 会挂在对应的 I2C 的节点下。需要根据 HW 原理图配置 I2C 和 GPIO，与单屏
的配置方式一样。Setting 需要配置为超级帧的 Panel Setting，或者可以改为自定义的超级帧屏幕 Setting
的节点。 
&i2c3 {○1  
 status = "okay"; 
 max96789_1: max96789-1@40 {○2  
  compatible = "maxiam,max96789"; 
  status = "disabled"; 
  reg = <0x40>; 
  reset-gpios = <&pio 134 0>; 
  pinctrl-names = "default"; 
  setting = <&superframe_setting>;○3  
 }; 
}; 
 
序号 释义 
○1  max96789_1 在哪个 I2C 下，必填 
○2  SerDes max96789_1 的节点 
○3  Superframe Setting 的节点 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
Confidential B 
MT8676 
DSI Bring Up SOP 
6.3.4 Superframe Setting 节点 
Superframe Setting 与其他 Panel 的 Setting 一样，都挂在 max96789 的节点下，注意 max96789 的节点不
能被关掉。这部分需要根据屏幕的设定客制化。 
&max96789 { 
 superframe_setting: setting3 {○1  
  ser-super-frame = <1>;○2  
  ser-init-cmd = <○3  
   0x0002 0x73 0x0 
   0x0053 0x10 0x0 
   0x0057 0x21 0x0 
   0x0332 0x4e 0x0 
   0x0333 0xe4 0x0 
   0x0004 0xf2 0x0 
   0x0308 0x5c 0x0 
   …… 
  >; 
  ser-deinit-cmd = <○4  
   0x0010 0x80 0x20 
  >; 
  ser-timing-cmd = <○5  
   0x385 0x50 0x0 
   0x386 0x02 0x0 
   0x387 0x00 0x0 
   0x3a5 0x18 0x0 
   0x3a7 0x00 0x0 
   0x3a6 0xa0 0x0 
   0x3a8 0x38 0x0 
   …… 
  >; 
0x3aa 0x50 0x0 
   0x3ac 0x0a 0x0 
   0x3ab 0x00 0x0 
   0x3ad 0x00 0x0 
   0x3ae 0x0f 0x0 
  >; 
 
  serdes-dual-setting-cmd = <○6  
   0 0x0010 0x21 100○7  
   1 0x0000 0x90 0○8  
   2 0x0073 0x31 0○9  
   2 0x0042 0x36 0 
   2 0x0043 0x34 0 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 56

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 56 
Confidential B 
MT8676 
DSI Bring Up SOP 
   0 0x0010 0x22 100○10 
   1 0x0000 0x94 0○11 
   3 0x0073 0x32 0○12 
   3 0x0042 0x38 0 
   3 0x0043 0x34 0 
   0 0x0010 0x23 100○13 
   3 0x0050 0x01 0○14 
  >; 
ser-lut-cmd = <○15 
  >; 
  des-link-status-cmd = < 
   0x001f 0x18 0x0 
  >; 
  desdef {○16 
   des-i2c-addr = <0x4c>; 
   bl-i2c-addr = <0x1a>; 
   bl-dummy-i2c-addr = <0x1f>; 
  }; 
  desa {○17 
   des-i2c-addr = <0x48>; 
   bl-i2c-addr = <0x1b>; 
   des-init-cmd = < 
    0x01ce 0x4c 0x0 
    0x06ff 0x11 0x0 
   >; 
   link-indicate-cmd = < 
    0x06ff 0x11 0x0 
   >; 
   bl-on-cmd = < 
    0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0xd4 
   >; 
   bl-off-cmd = < 
    0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x85 
   >; 
panel-mode-setting { 
    panel-mode-width = <1920>; 
    panel-mode-height = <1080>; 
    panel-mode-hfp = <40>; 
    panel-mode-hsa = <41>; 
    panel-mode-hbp = <79>; 
    panel-mode-vfp = <24>; 
    panel-mode-vsa = <3>; 
    panel-mode-vbp = <9>; 
    panel-mode-vrefresh = <60>; 
    panel-mode-lppf = <1>; 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 57

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 57 
Confidential B 
MT8676 
DSI Bring Up SOP 
    panel-mode-width-mm = <129>; 
    panel-mode-height-mm = <64>; 
   }; 
  }; 
  desb {○18 
   des-i2c-addr = <0x4a>; 
   bl-i2c-addr = <0x1c>; 
   des-init-cmd = < 
    0x01ce 0x4c 0x0 
    0x06ff 0x22 0x0 
   >; 
   link-indicate-cmd = < 
    0x06ff 0x22 0x0 
   >; 
   bl-on-cmd = < 
    0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0xd4 
   >; 
   bl-off-cmd = < 
    0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x85 
   >; 
panel-mode-setting { 
    panel-mode-width = <1920>; 
    panel-mode-height = <1080>; 
    panel-mode-hfp = <40>; 
    panel-mode-hsa = <41>; 
    panel-mode-hbp = <79>; 
    panel-mode-vfp = <24>; 
    panel-mode-vsa = <3>; 
    panel-mode-vbp = <9>; 
    panel-mode-vrefresh = <60>; 
    panel-mode-lppf = <1>; 
    panel-mode-width-mm = <129>; 
    panel-mode-height-mm = <64>; 
   }; 
  }; 
 }; 
 
 
 
 
序号 释义 
○1  superframe Setting 节点 
○2  是否是 superframe，superframe 设为 1 
○3  
加串器 max96789 超级帧的初始化设定， 
格式为：<reg><data><delay>， 
reg: 要写的 reg， 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 58

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 58 
Confidential B 
MT8676 
DSI Bring Up SOP 
序号 释义 
data: 要写的数据， 
delay: 写完该命令后 delay 多久，单位 ms 
○4  加串器 deinit 设定，复位加串器所有设定，格式同○3  
○5  
superframe 必须设置 timing 参数，必填. 注意这里的 reg 顺序不能改变，现在的顺序
是按照串行器 tool gen 出来的顺序，格式同○3  
○6  
同款屏幕接到同一个加串器的时候，解串器的地址，MCU 或者 touch 的地址存在冲
突的情况，需要重新做一次分配。需要交替写加串器，解串器的寄存器  
设定格式为：<id><reg><data><delay> 
id：0 (加串器)，1（解串器 default），2（解串器 linka），3（解串器 linkb），
<reg><data><delay>，格式同○3  
○7  加串器设定选择 linka 
○8  0x90=desa-i2c-addr*2，设置 desa 的 des i2c addr 为 0x90（8bit 地址） 
○9  
设置为 Split Mode，且当前 Channel ID 为 1，0x36=desa-bl-i2c-addr*2 
0x34=desdef-bl-i2c-addr*2，这段含义是将 linka 上面的 bl iic 地址 0x34 改为 0x36，注
意 0x36 一定要跟 desa 里面的 des-i2c-addr 保持一致 
○10  加串器设定选择 linkb 
○11  0x94=desb-i2c-addr*2，设置 desb 的 des i2c addr 为 0x94（8bit 地址） 
○12  设置为 Split Mode，且当前 channel id 为 2，0x38=desb-bl-i2c-addr*2 0x34=desdef-bl-
i2c-addr*2 
○13  加串器选择所有通道 
○14  设置 linkb 的 Stream ID 为 1 
○15  非对称的超级帧 lut 设置（预留） 
○16  解串器 default 节点，包含解串器的 I2C 地址和背光的 I2C 地址，与单屏的设定一样 
○17  
Linka 解串器节点，内容与单屏相同。 
注意 des-i2c-addr = <0x48>;是 remap 的地址需要与○8 设定保持一致； 
同样 bl-i2c-addr = <0x1a>; 需要与○9 的设定保持一致 
○18  
Linkb 解串器节点，内容与单屏相同。 
注意 des-i2c-addr = <0x4a>; 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 59

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 59 
Confidential B 
MT8676 
DSI Bring Up SOP 
序号 释义 
是 remap 的地址需要与○11 设定保持一致； 
同样 bl-i2c-addr = <0x1c>; 需要与○12 的设定保持一致 
 
6.4 如何关闭 Superframe 
如果 DSI2 不需要输出超级帧，只需要输出单屏。可以在 cust_mtxxx_display_config_xxx.dtsi 的
节点中，将 virt_dsi1_1 的节点关掉，同时将加串器的节点中 Setting 改为单屏的设定，或者兼容屏幕的
设定。 
&max96789_1 { 
 status = "okay"; 
 setting = <&setting_bt>; 
}; 
&virt_dsi1_1 { 
 status = "disabled"; 
}; 
 
6.5 DSI Superframe Timing 
DSI 在超级帧的时候输出的是两个屏幕的 Size，DSI Timing 需要按照两个屏幕的设定，目前的 Code Flow 
中已经在超级帧的时候把 desa 和 desb 的 Panel Timing 横向做了相加。送给 DSI 的 Timing 和送给 Display
的 Timing 做了区分，这样对于上层看到就是一个屏幕的，而 DSI 实际输出的是两个屏幕的 Size。Panel 
Driver Probe 的时候会通过get_real_timing(ctx) 函数拿 desa 和 desb 的 Timing。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 60

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 60 
Confidential B 
MT8676 
DSI Bring Up SOP 
6.5.1 Panel to DSI Timing Function 
 
 
 
6.5.2 Panel to Display Function 
 
6.5.3 Log 确认 Timing 信息 
 
 
需要确认 Log 中 Display Timing 为单屏的 Timing，DSI Timing 为两个屏幕的 Timing，设定才是正确的，如
果不是这样，请检查设定。 
 
Panel Timing 
DSI Timing 
Display Timing 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 61

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 61 
Confidential B 
MT8676 
DSI Bring Up SOP 
6.6 Superframe SerDes 控制 
超级帧的时候两个 Panel 会挂在同一个加串器上，以 lcm_enable 为例，如果是 Virtual LCM 会固定加串
器的 Port1（linkb）上。 
 
 
通过 flag 避免重复开关。 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 62

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 62 
Confidential B 
MT8676 
DSI Bring Up SOP 
7 SerDes 调试指南 
车机的平台中 DSI 输出大部分都是通过 SerDes 接屏幕显示，DSI 的屏幕显示异常时，需要与 SerDes 一起
Debug。可以通过 SerDes Pattern 和寄存器等来辅助分析问题。SerDes I2C Register 的读写，可以通过 I2C-
Tools 实现。这里总结的是我们公版在 max96789 和 max96752 的 Debug 上经验积累，以供参考。这部分
是跟厂商 Debug 的记录，最终的解释请与厂商确认。 
 
7.1 Ser-max96789 Debug Register 
加串器 max96789 是 DSI RX，可以通过 RX 端收数据的情况来查看。 
0x102 bit7 确认是否有收到 MIPI Clock，并且 Detect 到 Pixel Clock。如果 bit7 为 0，在点板阶段请先确认
HW 上 MIPI 信号接线是否正常，是否有做 Swap，pn 信号是否画反。 
 
0x55D 确认是否有收到 video 信号，并且 Detect 到 DE, H/V sync 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 63

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 63 
Confidential B 
MT8676 
DSI Bring Up SOP 
0x339, 0x33b, 0x33a, 0x33c 确认 PHY0/1 收到 LP 和 HS 的数据是否有 Error，寄存器读一次会清 0，如果
有 Error 可以多读几次。 
 
0x3a0, 0x3a2 确认收到的 MIPI 输出是否有 ECC 和 CRC Error。 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 64

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 64 
Confidential B 
MT8676 
DSI Bring Up SOP 
以上寄存器如果都正常，说明 max96789 是有正确的收到 DSI 的数据，并且没有 Error。如果屏幕还是不
亮需要确认屏幕的 Timing 设定是否正常，可以同时打一下 max96789 的 Pattern 给屏幕，来确认一下是
否可以亮，如果 789 Pattern 也不亮，建议联系 maxin 和屏厂解决。 
 
0x332, 0x333, 0x334, 0x335 确认 Lane Swap 和 p/n Swap 设定是否正常 
 
 
 
0x13, 0x1F 确认 GMSL Link Lock 状态 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 65

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 65 
Confidential B 
MT8676 
DSI Bring Up SOP 
 
 
0x3A4 可以关掉 max96789 的 DPI Deskew Bit0 
 
 
7.2 Des-max96752 Debug Register 
0x108 确认是否有 Video Lock 和 Video PKT Detect 
 
0x1ce 画面出现锯齿的时候可以尝试 Swap 一下 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 66

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 66 
Confidential B 
MT8676 
DSI Bring Up SOP 
 
7.3 Debug 流程 
下图中是对以上寄存器说明和 Debug 方法的流程总结，可以按照这个流程来定位问题。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 67

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 67 
Confidential B 
MT8676 
DSI Bring Up SOP 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 68

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 68 
Confidential B 
MT8676 
DSI Bring Up SOP 
8 DSI 输出时序控制 
对于 Bridge 或者是 SerDes 会对 DSI 输出信号的时间点有要求，例如需要在先做初始化，再送 DSI 信号，
或者需要先送 DSI 信号，再做初始化。本章节主要说明如何调整 LCM Driver 中初始化的时间点。 
8.1 LK Boot 流程 
默认的 Code Flow，disp_lcm_init() 会去调用 LCM Driver 中的init_power 和init 函数，此时 DSI
没送信号。 
 
 
 
// （1）DSI config， DSI 还没出信号 
// （2）LCM driver-> init_power & init 
//（3）DSI HS start， 只出 HS clock 信号 
//（4）DSI start， HS data 和 clock 都开始输出 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 69

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 69 
Confidential B 
MT8676 
DSI Bring Up SOP 
如果需要在 DSI 出 Data 和 Clock 后，跑 LCM 的初始化，需要把 disp_lcm_init()放到
dpmgr_path_trigger 之后。另外可以把disp_lcm_init()拆成disp_lcm_init_power()和
disp_lcm_init()做更细致的客制化。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 70

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 70 
Confidential B 
MT8676 
DSI Bring Up SOP 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 71

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 71 
Confidential B 
MT8676 
DSI Bring Up SOP 
在上图的 LK 开机 Flow 中，DSI & LC 的部分在下图红框中位置供参考。 
 
 
8.2 Kernel Boot or Resume 流程 
Kernel 中默认的 Flow 是drm_panel_prepare 时 DSI 没有信号输出，drm_panel_enable 时 DSI 已经开
始送信号了。可以根据需要调整 drm_panel_prepare 和drm_panel_enable 的位置来满足时序要求。
例如需要 DSI 送 clock 信号，才开始初始化，就可以把 drm_panel_prepare 放到
mtk_dsi_clk_hs_mode 之后，来保证时序，具体情况根据需求客制化。 
 
 
下图是 Kernel 的 DSI Encoder Enable 的流程，以供参考。 
// DSI 送 HS clock 信号 
//DSI 送 data 和 clock 信号 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 72

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 72 
Confidential B 
MT8676 
DSI Bring Up SOP 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 73

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 73 
Confidential B 
MT8676 
DSI Bring Up SOP 
8.3 Kernel Suspend 流程 
 
Suspend 的时候，先关 LCM Disable，再关 DSI 信号，然后跑 LCM Unprepared。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 74

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 74 
Confidential B 
9 DSI DSC Porting 指南 
目前没有支持 VESA DSC DSI Serializer，有搭配过 bridge 支持 DSC 的屏幕 
 
 
 
 
 
 
 
 
9.1 DSC 介绍 
DSC 代表 VESA 显示流压缩（DSC）标准，这是由 VESA 定义的用于压缩和解压缩图像显示流的标准。该标准规定了
压缩和解压缩视频比特流的算法，包括压缩视频比特流的语法和语义。它具有实时压缩、传输、解压缩和显示的
能力。使用 DSC 的好处是可以节省带宽，从而支持更高的分辨率或更高的帧率。 DSC 支持 RGB 8 位的 1/2 和 1/3 压
缩比，RGB 10 位支持 1/3.75 的压缩比。 
9.2 DSC 参数 
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
MT8676 
DSI 
 Bridge DSC 
Encoder 
 
 
 
 
Panel 
DSC 
Decoder 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 75

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 75 
Confidential B 
 
 
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
Select 24-bit input pixel format as RGB or BGR type. 
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
bp_enable Block prediction enable flag 
bit_per_pixel Bit per pixel * 16, unit is bit 
pic_height Equal to frame_height 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 76

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 76 
Confidential B 
DSC 参数 描述 
pic_width Equal to frame_width 
slice_height Align setting with DDIC vendor; there are usually 8, 16, 32, 
40, etc 
slice_width Frame_width/silce_mode 
chunk_size Equal slice_width × bit_per_pixel/8 
rc_buf_thresh Parameters that must be filled 
dsc_rc_range_paramsters Parameters that must be filled 
 
9.3 DSC SW 介绍 
DSC 的 Source Code 仅需要关注 LK ddp_dsc.c 和 Kernel mtk_disp_dsc.c 两个文件，这两个文件也相对简单，仅
实现了如下几个函数： 
LK ddp_dsc.c 
 
 
Kernel mtk_disp_dsc.c 
 
 
在 Module init 后就会从 LCM Driver 中把 DSC 参数通过dsc_cofig 和mtk_dsc_config 接口写进对应的 DSC 寄存
器。如果 LCM Driver 中 DSC 参数错误就会导致 DSC Encoder 压缩与 DDIC DSC Decoder 不一致导致花屏问题，因此
LCM Driver 中 DSC 参数完整性和正确性就显得尤为重要。 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 77

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 77 
Confidential B 
10 LCM 问题调试 
屏幕在点屏阶段和 DV 测试阶段的问题会有些差异。点板点屏阶段屏幕的问题除了 分析软件部分的设定还需要考虑
HW 的设计是否正确和焊接是否可靠等问题。DV 测试阶段的黑花卡更侧重分析 SW Flow 的 Bug。下图针对常见的
问题做了一个简单的分析步骤，这样在针对复杂的屏幕的问题的时候，通过 DSI 的 Pattern 是否显示正常作为一个
切入点，能够快速切割定位问题，而不会觉得无从下手。另外需要提到的是黑屏的问题，首先需要确认是的背光
是否正常，再做后面的分析。 
 
 
10.1 DSI Pattern 
1. Userdebug 版本可以使用 GCE 的 CMD 来打 Pattern: 
DSI0 
adb shell "echo gce_wr:0x1400d178,0x61,0xffffffff > /sys/kernel/debug/mtkfb" 
 
 
 
 
 
 
 
DSI1 
adb shell "echo gce_wr:0x1420d178,0x61,0xffffffff > /sys/kernel/debug/mtkfb” 
 
可以通过gce_rd 确认是否有写成功： 
adb shell "echo gce_rd: 0x1400d178 > /sys/kernel/debug/mtkfb; cat /sys/kernel/debug/mtkfb 
| grep gce_rd” 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 78

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 78 
Confidential B 
2. User 版本 GCE CMD 不能使用，可以使用 Clock Debug 的 CMD，需要在 Kernel config 中先将 CONFIG 打开后才能
使用，Userdebug 版本也可以用 Clock Debug 的 CMD，同样需要打开 CONFIG. 
CONFIG_MTK_CLKMGR_DEBUG=y 
 
DSI0 
adb shell "echo reg_write 0x1400d178 0x61 > /proc/clkdbg ; cat /proc/clkdbg" 
 
DSI1 
adb shell "echo reg_write 0x1420d178 0x61 > /proc/clkdbg ; cat /proc/clkdbg" 
 
可以通过 reg_read 确认是否有写成功： 
adb shell "echo reg_read 0x1400d178 > /proc/clkdbg ; cat /proc/clkdbg" 
 
10.2 DSI Register 介绍 
DSI0 Base register 0x1400d000 DSI0 mip tx base 0x11e50000 
DSI1 Base register 0x1420d000 DSI1 mip tx base 0x11e60000 
 
DSI Register 都是 Base 地址加上一个 Offset，具体的 Offset 以及定义可以参考 Register Map。下表中介绍一下常用的
DSI 的 Register 的含义，方便 Debug 的时候使用。 
地址 名称 介绍 
1400d000 DSI_START Bit0 为 1 表示 DSI 信号有输出 
1400d004 DSI_INTSTA 
中断的状态, 例如 bit12 表示有 buffer underrun, 可以查看 DSI 信号
的状态 
1400d038 DSI_SIZE_CON 
Panel active 的 size,  
Bit30 ~ Bit16: 高; Bit14 ~ Bit0: 宽 
1400d010 DSI_COM_CON 
Bit0: DSI_RESET , software reset  
Bit2: DPHY_RESET , MIPI TX software reset 
1400d014 DSI_MODE_CON Bit1~Bit0 Video mode  
1400d018 DSI_TXRX_CON 
Bit16 为 0 代表 continue clock 
Bit5 ~ Bit2: Lane number 
1400d01c DSI_PS_CON 
 
Bit19 ~ Bit16: Data format 
3: RGB888 
5: DSC 压缩数据 
1400d020 DSI_VSA_NL = Panel VPW 
1400d024 DSI_VBP_NL = Panel VBP 
1400d028 DSI_VFP_NL = Panel VFP 
1400d02c DSI_VACT_NL = Panel height 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 79

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 79 
Confidential B 
地址 名称 介绍 
1400d050 DSI_HSA_WC = Panel HSA*3-10 
1400d054 DSI_HBP_WC = Panel HBP*3-10 
1400d058 DSI_HFP_WC 
Bit14 ~ Bit0 = Panel HFP*3-12 
Bit31 为 1 表示开启 active 的数据每个 frame 回 LP , HFP 一直 keep 
HS 
1400d110 DSI_PHY_TIMCON0 
MIPI Data Lane Timing HQA Test 可能会调整 
Bit(s) Name Description 
31:24 DA_HS_TRAIL timing parameter: T_HS-Trail 
23:16 DA_HS_ZERO timing parameter: T_HS-Zero 
15:8 DA_HS_PREP timing parameter: T_HS-Prepare 
7:0 LPX timing parameter: T_LPX 
   
 
1400d114 DSI_PHY_TIMCON1 MIPI Data Lane Timing HQA Test 可能会调整 
11e50008 MIPITX_CDPHY_VOLTAGE_SEL 
MIPI Swing 调整 
9:6 RG_DSI_HSTX_LDO_REF_SEL Selects 0.4V/0.5V ref voltage 
(20mV/step, covers 0.3 to 0.6V) 
  4'b0000: Min. voltage 
  4'b1000: Typical voltage 
  4'b0111: Max. voltage 
 
1400d178 DSI_SELF_PAT_CON0 DSI Pattern, 可以出纯色, 灰阶等 Pattern 
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
 
 
10.3 DSI Register Dump 介绍 
可以通过 CMD Dump 所有的 DSI Register： 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 80

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 80 
Confidential B 
adb shell "echo diagnose>/proc/mtkfb && cat /proc/mtkfb" > d:\mtkfb.txt 
 
Dump 的结果如下图中所示 
 
 
 
 
 
通过reg_read_len CMD 读寄存器，使用前需要打开 config:  
CONFIG_MTK_CLKMGR_DEBUG=y 
 
adb shell "echo reg_read_len addr len> /proc/clkdbg ; cat /proc/clkdbg"   
 
其中 len 指的是偏移地址长度，会依次读出 addr+offset 的寄存器值。 
 
假设想要 Dump DSI0 0x00~0x100 的地址的值命令如下： 
adb shell "echo reg_read_len 0x1400d000 0x100> /proc/clkdbg ; cat /proc/clkdbg" 
 
当diagnose CMD 使用异常的时候，可以使用这个 CMD Dump 相关的寄存器。 
 
10.4 DSI 调试流程 
下图为简单的 DSI Debug 流程图，可以结合 SerDes 的状态一起来看，max96789 结合章节 7.3 同步分析。 
                                                                  DSI0 BASE 
offset Base+offset Base+offset+4 Base+offset+8
8 
Base+offset+C 
 
 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 81

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 81 
Confidential B 
 
 
10.5 帧率异常 
检查 Panel Driver 中 Pixel Clock 设定与 data_rate 设定是否正常。文档中搜索关键字，可以找到 Driver 中参数的介绍
位置确认。 
10.6 I2C 通信异常 
1. 确认加串器电源晶振是否正常，确认软件时序和 I2C 地址设定，测量 I2C 信号电压是否正常。 
2. 请参考章节 3.3.10 确认 DWS 设定是否正常 
3. 确认 I2C 上拉电阻和驱动电流设定是否正常 
1). dts 中找到使用的 I2C 节点： 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 82

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 82 
Confidential B 
&i2c4 { 
    pinctrl-names = “default”; 
    pinctrl-0 = <&i2c4_pins>; 
}; 
 
2). 在&pio 节点下添加如下内容 
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
include/dt-bting/pinctrl/mt6897-pinfunc 查找对应的 I2C 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 83

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 83 
Confidential B 
11 DSI DPHY CTS 测试问题 
CTS 测试的主要目的是验证设备是否符合 MIPI DSI DPHY 规范。CTS 测试主要包含一下几个方面： 
1. 电气特性测试：电压，边沿等是否满足 Spec 
2. 协议一致性测试：MIPI Timing 是否满足 Spec 
3. 信号完整性测试：测试信号质量，眼图，Skew 是否满足 Spec 
 
11.1 测试仪器 
由于是高速信号，对信号的测试环境和仪器要求比较高。需要使用专用的带 DPHY 协议的测试仪器，并且使用专用
的探头，探尖，tip 来连接信号到仪器上，同时在使用前需要对仪器做校准。如果没有相关的测试仪器，需要找第
三方机构做测试。 
11.2 测试平台准备 
1. 测试需要焊接差分信号 clock_p, clock_n, data_p, data_n 的测试点。测试点建议选在靠近 Bridge 的输入端。同时
焊接的 GND 线尽量不要离的很远，线长尽量控制在 1~2cm。data_p 的接法示意图如下图所示，4 根信号共需
要接 4 个 Tip 到示波器器上。 
2. 测试的平台需要接屏测试，并且屏幕可以显示正常。这样是为了 Bridge 或者 RX 的设定都正常，保证负载端是
正常的。 
3. 测试的平台可以播放视频，视频的内容建议 Random 一些，越 Random 越好。或者放一张比较花的图片，避免
大面积的黑和白。测试平台接 adb，方便 Debug 使用。 
4. 测试前需要检查每个信号都是稳定正常的，确保焊接，Tip 和 Probe Head 都是正常。 
5. DSI 输出设定要关闭展频，同时要记住 DSI Clock，或者测试前量测一下 Clock。 
 
 
 
 
 
 
 
 
MT8676 
DSI0 
Serializer 
MAX96789 
data_p 
GND 
Tip 
 Probe head 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 84

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 84 
Confidential B 
11.3 常见 Failed 项目分析 
Continue Clock HS 部分的测试项目如下，红色方框中的项目主要是电气特性相关，绿色方框的项目主要是 MIPI 
Timing 协议一致性相关，蓝色方框的项目主要是信号质量相关。 
 
 
11.3.1 1.3.4/1.4.4 VOD0/VOD1 Pulse & 1.3.7 VCMTX 
Clock 和 Data 默认设定都是 200MV，如果出现偏小，可以调整 HSTX 输出电压，增大驱动能力。 
 
 
 
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
adb shell "echo gce_rd:0x11e50008 > /sys/kernel/debug/mtkfb; cat /sys/kernel/debug/mtkfb | 
grep gce_rd" 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 85

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 85 
Confidential B 
[   83.560777][mtkfb_dbg] gce_rd:0x11e50008 
[   83.560784]display_debug cmd gce_rd:0x11e50008 
[   83.561045][reg_dbg] gce_rd: addr(0x11e50008) = 0x44441200 
 
更改 Bit6 ~ Bit9 的值 
电压值 Bit6 ~ Bit9 寄存器 
0.4V 1000 0x44441200 
0.42V 1001 0x44441240 
0.44V 1010 0x44441280 
0.46V 1011 0x444412C0 
0.48V 1100 0x44441300 
 
根据情况调整需要增加的电压值，例如调整到 0.42V 
adb shell "echo gce_wr: 0x11e50008,0x44441240,0xffffffff > /sys/kernel/debug/mtkfb" 
 
11.3.1.1 SW 如何调整电压 
LK: 
--- a/platform/mediatek/mt8676/disp/ddp_dsi.c 
+++ b/platform/mediatek/mt8676/disp/ddp_dsi.c 
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
 
--- a/platform/mediatek/mt8676/disp/ddp_reg_mipi.h 
+++ b/platform/mediatek/mt8676/disp/ddp_reg_mipi.h 
@@ -13,6 +13,7 @@ 
 #define MIPITX_LANE_CON                    (0x0004UL) 
 #define MIPITX_VOLTAGE_SEL                (0x0008UL) 
 #define FLD_RG_DSI_PRD_REF_SEL              REG_FLD(6, 0) 
+#define FLD_RG_DSI_HSTX_LDO_REF_SEL         REG_FLD(4, 6) 
 #define FLD_RG_DSI_V2I_REF_SEL              REG_FLD(4, 10) 
 
Kernal: 
--- a/drivers/gpu/drm/mediatek/mediatek_v2/mtk_mipi_tx.c 
+++ b/drivers/gpu/drm/mediatek/mediatek_v2/mtk_mipi_tx.c 
@@ -2308,6 +2308,9 @@ static int mtk_mipi_tx_pll_dphy_config_mt6991(struct mtk_mipi_tx 
*mipi_tx) 
                mtk_mipi_tx_update_bits(mipi_tx, MIPITX_VOLTAGE_SEL_MT6983, 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 86

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 86 
Confidential B 
                        FLD_RG_DSI_PRD_REF_SEL, 0x4); 
+       mtk_mipi_tx_update_bits(mipi_tx, MIPITX_VOLTAGE_SEL_MT6983, 
+                       FLD_RG_DSI_HSTX_LDO_REF_SEL, 0x9 << 6); //0.42V 
 #ifdef IF_ZERO 
        /* No need keep as default */ 
        if (rate > 2000) 
 
11.3.2 1.3.8 Voltage Mismatch & 1.4.8 VCMTX Mismatch 
检查测试环境，探头是否有做校准，PCB Layout 是否等长。 
 
11.3.3 1.3.1~3 & 1.3.13~16 MIPI Timing 
MIPI Timing 如下图中所示可以通过寄存器调整，寄存器 DSI_PHY_TIMCON0 中有说明。 
 
上图中参数需要满足下图中 Spec 规范的范围，其中 UI = 1/datarate，SW 中设定最小单位是 8UI。 
 
11.3.3.1 SW 如何调整 Timing 
以下图中 1.3.15 TEOT Failed 为例，现在测试结果为 299.77ns，此值偏大，Pass Limit Max 值为 133.85ns。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 87

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 87 
Confidential B 
 
 
 
 
现在需要调整设定，使得 TEOT 小于 133.85ns Pass Spec: 
1. 从 9.3.3 MIPI Timing 图中，找到 TEOT 信号的位置和 Spec 的范围 
2. 1.4.17 确认 UI=2.404ns 
3. 根据 UI 计算 TEOT 阈值：TEOT=[~, 105ns+12*UI] = [~, 133.848ns]，也可以直接看提示的 Pass Limit 的值 
4. 计算 SW 设定最小单位 = 8 * UI = 8*2.404 = 19.232ns，SW 设定寄存器值 < 133.848ns/19.232ns = 6.96 
5. 根据 UI 计算 HS_TRAIL 阈值：THS_TRAIL> 60ns + 4UI=69.6ns，SW 设定寄存器值 > 69.6ns/19.232= 3.6 
6. HS_TRAIL 属于 TEOT 一部分，降低 HS_TRAIL，既是减小 TEOT，同时要保证 THS_TRAIL 也要满足 Spec，SW 设定
值为整数，则可以取 4 ~ 6 中的一个值通过adb 设定进去，再测试看看。 
 
11.3.3.2 如何将调好的值写进 SW 
SerDes 的 Driver 可以将参数放到 dts 里面客制化，再给到如下的参数里面。 
LK Panel Driver 
lcm_get_params()里面添加 
 
 
Kernel Panel Driver 
ext_params 里面添加需要调整的参数 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 88

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 88 
Confidential B 
11.3.3.3 THS_TRAIL Failed 
THS_TRAIL 比较常见的 Failed 情况是示波器没有抓到正确的 HS_TRAIL。这样调整寄存器也是没有用的，可以看到的
现象是测出来的 HS_TRAIL 值非常小，如下图中所示只有 4ns 左右。 
 
 
可以对比下图中正常的波形，正常的 HS TRAIL 是一段 HS 1 的数据，所以碰到这种情况请确认示波器是否有正确设
定，或者重新测试，或者可以手动测量确认。 
 
 
11.3.4 1.3.11~12 Tr/Tf & 1.5.4 Data to Clock Skew 
信号的质量对 Data 和 Clock 的 Tr/Tf 以及 Data to Clock Skew 的测试项目影响很大。而影响信号质量的根本原因就是
差分信号阻抗的控制，SoC 输出单端 50 欧姆，差分 100 欧姆。要求 PCB Layout 也遵循这个原则，并且要做阻抗控
Failed 
OK 
HS_TRAIL 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 89

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 89 
Confidential B 
制，这部分可以跟 HW 对齐，查看具体的 Layout 要求和 PCB 厂商要求阻抗控制。同样 RX 的部分也要按照同样的
阻抗设定，这样才能保证信号的完整性。 
11.3.4.1 SoC 的阻抗调整 
SoC 的 MIPI TX 有单端的阻抗调整寄存器，但是不建议调整。目前 SW 设定默认输出有做阻抗的 Calibration 保证
Performance，如果单独调整某根信号的阻抗，很难保证一致性。 
11.3.4.2 干扰导致 Skew Fail 
除了测试的信号接线稳定，还要确认平台和仪器的接地也要稳定，注意排查杂讯的干扰。下图中红色箭头不预期
的杂讯，会影响测试结果，需要确认测试环境。 
 
11.3.4.3 阻抗不连续信号问题 
下图中左边 Failed 图片是没有带负载测试的异常波形，极端的阻抗不连续情况，可以看到信号失真很严重，上升
沿和下降沿的位置出现台阶状，右侧图片是带负载测试的正常波形，可以看出阻抗的连续对波形的影响。当信号
失真比较严重时，在排除了测试环境的问题后，就需要检查阻抗的部分。 包含 SoC 输出的阻抗，PCB Layout 阻抗，
RX 端的阻抗。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 90

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 90 
Confidential B 
  
 
11.3.5 什么情况开 DEM 
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
 
11.3.6 1.5.5 & 1.5.6 HS Skew Calibration Burst 
当 datartate >1.5Gbps 时，Spec 规定 TX 需要向 RX 发送 Skew Pattern，RX 收到后，可以用来校正 PCB Layout 等导致
的 Data 和 Clock 的偏移，为高速信号接收提供保障。Skew Pattern 与 Normal 信号的差异如下图： 
 
Skew Pattern 有两种，Initial 的方式和 Periodic 的方式，Periodic 的方式在 Spec 中是可选的，SoC 不支持这种方式，
只支持 1.5.5 Initial 的方式。 
 
OK 
Failed 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 91

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 91 
Confidential B 
 
11.3.6.1 1.5.5 Initial HS Skew 测试 
Initial 的方式是指在 DSI Normal 的信号之前发送 Skew Pattern，只会发送一次，不会周期重复。如果要测试这个信
号，需要在亮屏之前正确的抓住 Timing。当屏幕亮的时候信号已经发送完毕，是测不到的。 这对信号的测试有难
度，不建议测试。 
11.3.6.2 SW Deskew Enable 
Code Flow 中默认大于 1.5G datarate 会开启，需要加串器也要打开 Deskew 的功能，才能实现此功能，完成信号的
校准。加串器设定好后，收到 Pattern，并做完校准，会返回 IRQ，可以通过 IRQ 的状态确认。 
 
Support 
Not Support 
//DSI deskew pattern enable 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 92

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 92 
Confidential B 
12 LCM Timing 介绍 
LCM Timing 包括 Power On/Off Sequence 和 Interface Timing 和 Display Timing 三部分，LCM 能否正常工作的灵魂三部
曲，缺一不可，所以这部分都会明确的写在 LCM Spe 中。当我们要 Bringup 的时候首先就是要将这三部分明确下
来，碰到问题时也是从这三方面着手分析。另外车机的屏幕显示中还要包含 SerDes 的部分，加串器将 SoC 的
Interface 的显示数据转为串行的数据传输，解串器再将串行数据转为屏幕的 Interface 的数据，再送给屏幕 T-con 显
示。车机的屏幕模组都将解串器包含进来，这样屏幕的显示系统相对于手机会更复杂。  
12.1 Power On/Off Sequence 
上下电时序->Power 和 Reset 部分的控制，Driver 中 Power On/Off 的控制要遵循 Spec 中的时序来设定。这部分与
HW 的设计强相关，需要结合原理图来实现。同样 SerDes 的 Power 和初始化的顺序，也会影响屏幕的显示，这个
是车机也需要考虑的部分。 
12.2 Interface Timing 
LCM 的 Interface 有很多种 DSI, LVDS, eDP 等，每种 Interface 都有 Spec 规范。车机中常用的有 LVDS 和 eDP，其中分
辨率比较大的，例如 2.5K 屏幕或者以上基本都是采用 eDP 的 Interface。 
12.3 Display Timing 
虽然 Interface 有很多种，但是传输的 Display 信号都是基本都是包括 Active 和 Blanking 两部分。Active 信号是可视
区，包括 Hactive 和 Vactive，Blanking 信号是非可视区，包括 H blanking 和 V blanking，Blanking 部分又分 sync，
Front Porch 和 Back Porch。这部分在 LCM Spec 中也有明确的说明，我们需要按照 Spec 的设定给 LCM 的 T-CON 输出
正确的 Timing，LCM 才会显示正常。 
 
下图中是 Dual LVDS 1920x1080@60 的屏幕的 Timing Spec，Dual LVDS 的屏幕 Spec 中水平方向要 x2，这部分 Timing
对应的就是 panel-mode-setting 里面的设定。请与屏厂确认保证这部分参数的正确。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 93

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 93 
Confidential B 
 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 94

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 94 
Confidential B 
13 DSI Interface 介绍 
DSI (Display Serial Interface) MIPI 联盟定制的显示接口规范。协议包含应用层，协议层，链路层和物理层。传输模式
分为 HS->High Speed 和 LP->Low Power。 
13.1 HS 
D-PHY HS Swing 200mV, Video 的数据都是通过 HS 传输, 最大传输速度与 D-PHY 版本有关 
 
13.2 LP 
信号幅度为 1.2V，最大传输速度 80M，一般用于发送 Command 和状态切换。 
13.3 HS & LP 状态切换图 
DSI TX 和 RX 都是从 LP11 开始，然后通过 LP01, LP00 SOT 进入 HS 传输状态 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 95

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 95 
Confidential B 
13.4 DSI MIPI D-PHY Timing Spec  
MIPI 的 TX 和 RX 是没有握手协议的，而是要求 TX 和 RX 严格按照 Spec 的 Timing 来发送数据和接受数据。Spec 规
定了从 LP ->HS 和 HS->LP 具体 Timing，TX 和 RX 的 Timing 满足 Spec 由为重要，两边如果不 Match，就会导致数据
异常。 
13.4.1 Data Lane Spec 
HS-PREPARE 和 HS-TRAIL 等参数是经常需要调整的参数，需要明白下图中各参数的含义。 Spec 中有规定每个参数的
含义和时间要求。 
 
 
 
UI Unit Interval, equal to the duration of any HS state on the Clock Lane （UI 即 MIPI 的 CLK lane 的高速时钟 High-Speed 
clock cycles 周期的一半，为什么，因为 MIPI 是采用 DDR 时钟） 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 96

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 96 
Confidential B 
13.4.2 Clock Lane Spec 
MIPI 协议中有规定 Clock Lane 可以不需要回到 LP，TX 可以直接设定为 Continue Mode，那么下图中 Clock 的 Timing
不是必须的。 
 
 
 
13.5 Video Mode 介绍 
Video Mode 分为 Sync Plus，Sync-event，Burst 三种 Mode，对于 8676 三种 Mode 都可以只支持，对于 RX 端 MIPI
规定支持一种 Mode 就可以。目前最常使用的是 Sync Plus Mode. 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 97

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 97 
Confidential B 
13.5.1 HFP Keep HS 
Sync Plus Mode 从 DPI 信号而来，有完整的 H 和 V 同步信号，数据包摆放如下图所示。绿色为 LP 的部分，红色为
HS 的部分。8676 可以支持 Active 数据每个 Frame 回 LP，HFP 的时候 keep HS; HFP Keep HS mode 可以让输出的 HFP 
更准确，如果 Panel 或者 Bridge 要精确的 HFP，就建议使用这个 Mode。否则当 HFP HS EN = 0 时，HFP 会多出来回
LP 的 Data Cycle，实际输出的 HFP 会偏大，同时 HFP 会有最小值的要求。两个 Mode 对比，如下图所示。Driver 中
对应的参数为vdo_per_frame_lp_enable，设为 1 为 HFP_HS_EN=1。 
 
 
 
13.5.2 DSI_Frame_Rate_Cal_for_Customer_MT8676 介绍 
这个 excel 表格可以计算出比较精确 FPS 所对应的 DSI datarate，同时也可以确认 Panel Timing 是否可以满足要求。 
 
HS 
LP 
HFP HS EN =1 
HFP HS EN =0 
 4 
 4 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 98

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 98 
Confidential B 
 
 
步骤： 
1. 填入屏的 H Timing & V Timing，Video Mode，Lane Num 等参数 
2. 根据所需要帧率计算 Ideal Bit_Freq，这个参数对于 D-PHY 就是 datarate 
3. 微调 datarate 得到想要的帧率，datarate 可以精确到 kHz，Driver 中需要填写 data_rate_khz 参数才会生效 
4. 如果要 timing 比较精准建议打开 Video Mode keep HS MODE, Htatol 要可以被 2 * lane_number 整除 
 
在做完第 3 步调整 Ideal Bit_Freq 后得到准确的帧率，需要满足 4  的要求，如果只有 Htatol 不满足，建议 HFP 参数
设定微调满足（屏幕一般都是 DE Mode，一般可以水平方向微调，同时新设定的 HFP 参数，建议知会屏厂 double 
confirm）。 
另外第 4 步中提到的 Video Mode Keep HS MODE 就是指 vdo_per_frame_lp_enable，可以参考章节 13.5.1。 
Htatol 不满足的时候可以看到实际输出的 HFP 会有小数的情况，这样可能会导致屏幕闪烁或者锯齿。  
 3 
 3 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 99

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 99 
Confidential B 
14 DSI 波形量测 
波形的量测是常用的 Debug 手段。 
14.1 如何测量帧率 
图 1 中是一个每 Line 都回 LP 的 Data 的波形，需要将时间轴拉大一些找到 V Blanking 区域，按照下图测量 1 Frame
的时间，60fps 1 Frame 的时间大概为 16.6ms。图 2 中是将 V Blanking 区域放大的波形，可以放大确认抓的信号是
否正确。 
 
 
 
图 3 是开启 Video 每个 frame 回一次 LP，可以看到只有在 Blanking 区域有 LP 波形，其它的时间都是 Keep HS。按
照下图测量 1 frame 的时间，60fps 1 frame 的时间大概为 16.6ms。图 4 是 V blanking 展开的图形，供参考。 
1 frame 
V Blanking 
 V Blanking 
1 
2 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 100

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 100 
Confidential B 
 
 
14.2 如何测量信号 
下图是 1 Line 的 Data & clock 的波形，DP & DN 可以看到 LP 和 HS 部分的波形。其中 Data 上 LP 为 1.2V，HS 为
200mV，Clock P 的幅度为 200mV。可以确认信号的电压等是否有异常。 
3 
1 frame 
V Blanking 
V Blanking 
4 
V Blanking 区域 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 101

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 101 
Confidential B 
 
 
LP 部分放大，可以看到 LP 进入 HS 的时序，再放大可以测量 HS prepare 等参数。 
 
LP11->LP01->LP00->HS
LP 
HS 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 102

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 102 
Confidential B 
15 DSI 屏幕评估 
在未知屏幕的具体 Timing，只知道 resolution 的情况下，如何粗估屏幕带宽? 可以按照如下公式计算 datarate 看是
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
粗估带宽满足后，在拿到 Panel 的 Timing 后还需要确认 V Blanking 是否满足，具体参考章节 13.5.2。 
在带宽和 V Blanking 满足后，最后需要给 Display 做 Display Path 等的评估，才算完整的评估。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 103

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 103 
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
# SRC0124 MT8676_Display_Panel_Issue_Debug_SOP_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/MT8676_Display_Panel_Issue_Debug_SOP_V1.0.pdf

SHA-256：1ee440ddc61d849a9cfe5b752f87898cc941a04801f4566fdd7b25df874312a8

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0124.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2025-07-11 
MT8676 Display and Panel  
Issue Debug SOP 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2025-07-11 杨光 正式版 
 
  
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
表格目录 ··········································································································································································· 4 
1 概述 ··········································································································································································· 5 
1.1 目的·········································································································································································· 5 
1.2 Interface 能力 ·························································································································································· 5 
2 缩略词 ······································································································································································· 6 
2.1 缩略词 ······································································································································································ 6 
3 Debug Pattern 汇总 ··················································································································································· 7 
3.1 DSI ············································································································································································ 7 
3.2 DP ············································································································································································· 8 
3.3 Display ······································································································································································ 9 
3.3.1 PQ·································································································································································· 9 
4 SerDes 调试指南 ····················································································································································· 11 
4.1 Ser-max96789 调试寄存器 ···································································································································· 11 
4.2 Des-max96752 调试寄存器 ··································································································································· 14 
4.3 Debug 流程 ···························································································································································· 14 
4.4 DP SerDes Driver 调试日志 ··································································································································· 16 
5 DSI Interface ···························································································································································· 17 
5.1 DSI Interface 介绍 ·················································································································································· 17 
5.1.1 HS ································································································································································ 17 
5.1.2 LP································································································································································· 17 
5.1.3 HS & LP 状态切换图 ··································································································································· 17 
5.1.4 DSI MIPI D-PHY 时序规范 ··························································································································· 18 
5.1.5 Video Mode 介绍 ········································································································································ 20 
5.2 LCM 问题调试 ······················································································································································· 23 
5.2.1 DSI Register 介绍 ········································································································································ 23 
5.2.2 DSI Register Dump 介绍 ······························································································································ 25 
5.2.3 DSI 调试流程 ·············································································································································· 26 
5.2.4 帧率异常 ···················································································································································· 26 
5.2.5 I2C 通信异常 ·············································································································································· 26 
5.3 DSI DPHY CTS 测试问题 ········································································································································· 27 
5.3.1 测试仪器 ···················································································································································· 28 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
5.3.2 测试平台准备 ············································································································································ 28 
5.3.3 常见 Failed 项目分析 ································································································································· 28 
5.4 DSI 波形量测 ························································································································································· 36 
5.4.1 如何测量帧率 ············································································································································ 36 
5.4.2 如何测量信号 ············································································································································ 38 
6 DP Interface ····························································································································································· 40 
6.1 DP 调试 ·································································································································································· 40 
6.1.1 调试命令 ···················································································································································· 40 
6.1.2 Aux fail ························································································································································ 40 
6.1.3 DP  黑屏 ······················································································································································ 41 
6.2 DP/SerDes 时序 ······················································································································································ 41 
7 Display 常见问题/故障排除 ···································································································································· 43 
7.1 hwc 命令 ································································································································································ 43 
7.2 显示驱动 CMD ······················································································································································· 43 
7.3 黑屏········································································································································································ 44 
7.4 花屏/闪屏 ······························································································································································ 44 
7.5 卡顿········································································································································································ 45 
附件一 附加条款 ····························································································································································· 46 
 
表格目录 
表 2-1. 缩略词 ··········································································································································································· 6 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
1 概述 
1.1 目的 
本文档旨在介绍 MT8676 屏幕显示相关问题的调试方法，涵盖了 DSI、DP 接口和 Display 模块。在进行调试时，建
议遵循由近及远的原则，即从问题的最接近源头开始排查。当无法通过基本的 pattern 判断问题时，应从屏幕端开
始检查，以避免前端调试无法解决后端异常的问题。 
 
1.2 Interface 能力 
Port DSI0 DSI1 DP 
MT8676 
4 lanes/3 trios 
DPHY: 2.5Gbps/lane 
CPHY: 2.18Gsps/trio 
4 lanes/3 trios 
DPHY: 2.5Gbps/lane 
CPHY: 2.18Gsps/trio 
4 lanes or 2 lanes 
8.1Gbps/lane 
Effective 6.48Gbps/lane 
 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
2 缩略词 
2.1 缩略词 
表 2-1. 缩略词 
缩略词 释义 
DPI Display Pixel Interface 显示像素接口 
DSI Display Serial Interface 显示串行接口 
HBP Horizontal Back Porch 水平后肩 
HFP Horizontal Front Porch 水平前肩 
HS High Speed 高速 
Htotal Horizontal total pixels 在显示器的一行扫描周期中包含的总像素数 
JEIDA Japan Electronic Industry Development Association 日本电子工业振兴协会 
LP Low Power 低功耗 
LVDS Low-Voltage Differential Signaling 低压差分信号传输 
MIPI Mobile Industry Processor Interface 移动行业处理器接口 
RX Receiver 接收器 
TX Transmitter 发射器 
UI Unit Interval 单位间隔 
VBP Vertical Back Porch 垂直后肩 
VESA Video Electronics Standards Association 视频电子标准协会 
VFP Vertical Front Porch 垂直前肩 
Vtotal Vertical Total Lines 显示器在一帧图像中包含的总扫描行数 
Des Deserializers 反序列化器 
DPRX DisplayPort Receiver 接收 DisplayPort 信号的设备或电路部分 
DPTX DisplayPort Transmitter 负责发送 DisplayPort 信号的设备或组件 
Ser Serializers 序列化器 
 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
3 Debug Pattern 汇总 
在 Userdebug 版本中，可以使用 GCE 的命令行工具来打 Pattern。e.g. DSI0 
adb shell "echo gce_wr:0x1400d178,0x61,0xffffffff > /sys/kernel/debug/mtkfb" 
 
可以通过 gce_rd 确认数据是否成功写入： 
adb shell "echo gce_rd: 0x1400d178 > /sys/kernel/debug/mtkfb; cat /sys/kernel/debug/mtkfb 
| grep gce_rd” 
 
在 User 版本中，GCE 命令行工具可能无法使用，但可以使用 Clock Debug 命令来进行调试。无论是 User 版本还是
Userdebug 版本，要使用 Clock Debug 命令，都需要在内核配置中启用相关的 CONFIG 选项。 
CONFIG_MTK_CLKMGR_DEBUG=y 
 
e.g. DSI0 
adb shell "echo reg_write 0x1400d178 0x61 > /proc/clkdbg ; cat /proc/clkdbg" 
 
可以通过 reg_read 确认数据是否成功写入： 
adb shell "echo reg_read 0x1400d178 > /proc/clkdbg ; cat /proc/clkdbg" 
 
3.1 DSI 
DSI0 base addr: 0x1400d000 
DSI1 base addr: 0x1420d000 
Pattern level: base addr + 0xd178 BIT[9:8] 4 档 
 
Type Bypass Recovery 
grayscale 
(right) 
adb shell "echo gce_wr:0x1400d178,0xc11,0xffffffff > 
/sys/kernel/debug/mtkfb" 
adb shell "echo 
gce_wr:0x1400d178,0x0,0xffffffff > 
/sys/kernel/debug/mtkfb" 
grayscale 
(down) 
adb shell "echo gce_wr:0x1400d178,0xc21,0xffffffff > 
/sys/kernel/debug/mtkfb" 
red down adb shell "echo gce_wr:0x1400d178,0xc31,0xffffffff > 
/sys/kernel/debug/mtkfb" 
green down adb shell "echo gce_wr:0x1400d178,0xc41,0xffffffff > 
/sys/kernel/debug/mtkfb" 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
Type Bypass Recovery 
Blue down adb shell "echo gce_wr:0x1400d178,0xc51,0xffffffff > 
/sys/kernel/debug/mtkfb" 
gray right r + 
gray down b 
adb shell "echo gce_wr:0x1400d178,0xc61,0xffffffff > 
/sys/kernel/debug/mtkfb" 
Single Color 
adb shell "echo gce_wr:0x1400D178,0x0RR00601,ffffffff > 
/sys/kernel/debug/mtkfb" 
adb shell "echo gce_wr:0x1400D17c,0x0BB00GG0,ffffffff > 
/sys/kernel/debug/mtkfb" 
601 对应纯色 pattern，RR、GG、BB 分别对应 RGB 三个
8bit 通道 
 
3.2 DP 
 
Type pattern Recover 
256 vertical gray adb shell “echo gce_wr:0x1400bF00,1,ffffffff > 
/proc/mtkfb” 
echo gce_wr:0x1400bF00,0,ffffffff > 
/proc/mtkfb  
1024 vertical gray adb shell “echo gce_wr:0x1400bF00,11,ffffffff > 
/proc/mtkfb” 
256 horizontal 
gray 
adb shell “echo gce_wr:0x1400bF00,21,ffffffff > 
/proc/mtkfb” 
1024 horizontal 
gray 
adb shell “echo gce_wr:0x1400bF00,31,ffffffff > 
/proc/mtkfb” 
color bar adb shell “echo gce_wr:0x1400bF00,41,ffffffff > 
/proc/mtkfb” 
纯色 
adb shell “echo 
gce_wr:0x1400bF00,51,ffffffff > /proc/mtkfb" 
adb shell “echo gce_wr:0x1400bF00,val,ffffffff > 
/proc/mtkfb" 
val: Blue[9:0], Green[19:10], Red[29:20] 
  
frame border(黑
白颜色为每个像
素) 
echo gce_wr:0x1400bF00,61,ffffffff > /proc/mtkfb 
dot moire (黑白
颜色为每个像素) 
echo gce_wr:0x1400bF00,71,ffffffff > /proc/mtkfb 
 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
3.3 Display 
Display 分为 OVL 和 PQ 两部分。OVL 部分没有固定的 pattern 命令，因此如果怀疑 OVL 部分出现异常，建议与
Display 模块的负责人进行沟通和确认。 
 
3.3.1 PQ 
Module Bypass Recovery 
COLOR1 (dp) adb shell "echo reg_write 0x14208400 
0x200080 > /proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14208400 
0x200000 > /proc/clkdbg; cat 
/proc/clkdbg" 
AAL1 (dp) adb shell "echo reg_write 0x14202020 0x3 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14202020 
0x2 > /proc/clkdbg; cat /proc/clkdbg" 
CCORR1 (dp) adb shell "echo reg_write 0x14204020 0x3 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14204020 
0x2 > /proc/clkdbg; cat /proc/clkdbg" 
GAMMA1 
(dp) 
adb shell "echo reg_write 0x1420e020 0x3 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x1420e020 
0x2 > /proc/clkdbg; cat /proc/clkdbg" 
DITHER1 
(dp) 
adb shell "echo reg_write 0x14209020 0x3 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14209020 
0x2 > /proc/clkdbg; cat /proc/clkdbg" 
C3D1 (dp) adb shell "echo reg_write 0x14203004 0x13 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14203004 
0x12 > /proc/clkdbg; cat /proc/clkdbg" 
TDSHP1 (dp) 
adb shell "echo reg_write 0x14218110 0x1 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14219110 0x1 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14218110 
0x0 > /proc/clkdbg; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14219110 
0x0 > /proc/clkdbg; cat /proc/clkdbg" 
SPR1 (dp) adb shell "echo reg_write 0x1421700C 0x1 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x1421700C 
0x0 > /proc/clkdbg; cat /proc/clkdbg" 
COLOR0 
(dsi0) 
adb shell "echo reg_write 0x14208400 
0x200080 > /proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14008400 
0x200000 > /proc/clkdbg; cat 
/proc/clkdbg" 
AAL0 (dsi0) adb shell "echo reg_write 0x14002020 0x3 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14002020 
0x2 > /proc/clkdbg; cat /proc/clkdbg" 
CCORR0 
(dsi0) 
adb shell "echo reg_write 0x14004020 0x3 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14004020 
0x2 > /proc/clkdbg; cat /proc/clkdbg" 
GAMMA0 
(dsi0) 
adb shell "echo reg_write 0x1400e020 0x3 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x1400e020 
0x2 > /proc/clkdbg; cat /proc/clkdbg" 
DITHER0 
(dsi0) 
adb shell "echo reg_write 0x14009020 0x3 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14009020 
0x2 > /proc/clkdbg; cat /proc/clkdbg" 
C3D0 (dsi0) adb shell "echo reg_write 0x14003004 0x13 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14003004 
0x12 > /proc/clkdbg; cat /proc/clkdbg" 
TDSHP0 
(dsi0) 
adb shell "echo reg_write 0x14018110 0x1 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14019110 0x1 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14018110 
0x0 > /proc/clkdbg; cat /proc/clkdbg" 
adb shell "echo reg_write 0x14019110 
0x0 > /proc/clkdbg; cat /proc/clkdbg" 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
Module Bypass Recovery 
SPR0 (dsi0) adb shell "echo reg_write 0x1401700C 0x1 > 
/proc/clkdbg ; cat /proc/clkdbg" 
adb shell "echo reg_write 0x1401700C 
0x0 > /proc/clkdbg; cat /proc/clkdbg" 
 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
4 SerDes 调试指南 
在车机平台中，屏幕显示通常通过 SerDes 连接到屏幕。当出现显示异常时，需要同时调试 SerDes 和显示模块。可
以利用 SerDes 的 Pattern 和寄存器来辅助分析问题。SerDes I2C 寄存器的读写可以通过 I2C-Tools 实现。以下是针对
MTK 公版以 DSI 为例，在 max96789 和 max96752 上的调试经验总结，供参考。这部分是与厂商调试的记录，最终
的解释请与厂商确认。 
 
4.1 Ser-max96789 调试寄存器 
加串器 max96789 作为 DSI RX，可以通过接收端的数据情况进行查看。具体来说，可以检查以下内容：  
0x102 寄存器的 bit7 用于确认是否接收到 MIPI 时钟，并检测到像素时钟。 
• 如果 bit7 为 0，在点版阶段，请首先确认硬件上的 MIPI 信号连接是否正常。 
• 检查是否有信号交换（Swap）的问题，以及 P/N 信号是否画反。 
 
0x55D 寄存器用于确认是否接收到 video 信号，并且检测到 DE, H/V sync。 
 
 
0x339, 0x33b, 0x33a, 0x33c 寄存器用于确认 PHY0/1 收到 LP 和 HS 的数据是否有 error，寄存器读一次之后会清 0，
如果有 error 可以多读几次。 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
 
0x3a0, 0x3a2 寄存器用于确认收到的 MIPI 输出是否有 ECC 和 CRC error。 
 
 
 
– 如果以上寄存器检查结果都正常，说明 max96789 已经正确接收到 DSI 的数据，并且没有错误。然而，如
果屏幕仍然不亮，则需要进一步确认屏幕的时序设定是否正确。可以通过 max96789 生成测试 Pattern 并发
送到屏幕，以确认屏幕是否能够显示。如果 Pattern 也无法显示，建议联系 SerDes 厂商和屏幕厂商以寻求
解决方案。 
0x332, 0x333, 0x334, 0x335 寄存器用于确认 Lane Swap 和 P/N Swap 设定是否正常。 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
 
 
 
0x13, 0x1F 寄存器用于确认 GMSL Link Lock 状态。 
 
 
 
0x3A4 寄存器可以关掉 max96789 的 DPI Deskew Bit0。 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
 
 
4.2 Des-max96752 调试寄存器 
0x108 寄存器用于确认是否存在 Video Lock 和 Video PKT Detect。 
 
0x1ce 寄存器用于当画面出现锯齿时，可以尝试进行 Swap 操作。 
 
4.3 Debug 流程 
下图是对以上寄存器说明和 Debug 方法的流程总结，可以按照这个流程来定位问题。 
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
MT8676 
Display and Panel Issue Debug SOP 
Confidential B 
 
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
Confidential B 
4.4 DP SerDes Driver 调试日志 
在使用公版 DP SerDes 驱动程序时，如果需要启用调试日志，可以参考以下步骤 。文件： 
kernel_device_modules-6.1/drivers/gpu/drm/bridge/Makefile 
修改如下： 
ifeq ($(CONFIG_DRM_SERDES_DP), m) 
obj-$(CONFIG_DRM_SERDES_DP) += serdes-dp.o 
ccflags-y += -DSERDES_DEBUG 
endif 
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
Confidential B 
5 DSI Interface 
5.1 DSI Interface 介绍 
DSI（Display Serial Interface）是由 MIPI 联盟制定的显示接口规范。该协议包括应用层、协议层、 链路层和物理
层。DSI 协议支持两种传输模式：HS（High Speed）模式和 LP（Low Power）模式。 
 
这两种模式可以根据需要动态切换，以优化性能和功耗。 
 
5.1.1 HS 
在 D-PHY 中，HS（High Speed）模式的摆幅通常为 200mV。视频数据通常通过 HS 模式进行传输，以满足高带宽需
求。最大传输速度取决于 D-PHY 的版本，不同版本支持的最大速率有所不同。 
 
5.1.2 LP 
在 DSI D-PHY 中，LP（Low Power）模式的信号幅度通常为 1.2V。LP 模式的最大传输速度为 80 Mbps，通常用于发
送命令和进行状态切换。 
 
5.1.3 HS & LP 状态切换图 
在 DSI 协议中，传输从 LP（Low Power）模式切换到 HS（High Speed）模式的过程通常如下： 
1. LP11 状态：这是空闲状态，表示数据线处于低功耗模式，且两条数据线（ D+和 D-）都为高电平。 
2. LP01 状态：开始切换过程，D+保持高电平，D-变为低电平。 
3. LP00 状态：两条数据线都变为低电平，准备进入高速传输。 
4. SOT（Start of Transmission）：从 LP00 状态进入 HS 模式，开始高速数据传输。 
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
Confidential B 
通过这种状态转换，DSI 接口能够在低功耗和高速传输之间进行有效切换，以满足不同的操作需求。
 
 
5.1.4 DSI MIPI D-PHY 时序规范 
在 MIPI DSI 协议中，TX 和 RX 之间没有传统意义上的握手协议。相反，它们依赖于严格遵循规范中定义的时序来进
行数据传输和接收。规范明确定义了从 LP 到 HS 的转换和从 HS 到 LP 的转换。由于没有握手协议，TX 和 RX 的时
序匹配至关重要。如果两者的时序不匹配，可能会导致数据传输错误或异常。  
 
5.1.4.1 Data Lane 规范 
在 MIPI DSI 协议中，HS-PREPARE 和 HS-TRAIL 等参数是关键的时序参数，影响着高速传输的性能和可靠性。 了解这
些参数的含义和规范中的时间要求对于正确配置和调试 DSI 接口非常重要。 
 
 
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
Confidential B 
 
 
在 MIPI DSI 协议中，Unit Interval (UI) 是一个重要的时序单位。UI 等于时钟通道（Clock Lane）上任何高速状态的持
续时间。由于 MIPI 使用的是双倍数据速率（DDR，Double Data Rate）时钟，因此一个 UI 实际上是时钟周期的一
半。  
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
Confidential B 
5.1.4.2 Clock Lane 规范 
在 MIPI DSI 协议中，Clock Lane 的操作模式可以根据具体应用需求进行配置。规范允许 Clock Lane 在某些情况下不
返回到 LP 模式，TX 可以直接设定为 Continue Mode。 
 
 
 
 
 
5.1.5 Video Mode 介绍 
在 MIPI DSI 协议中， Video Mode 有三种主要类型：Sync Pulses、Sync Events 和 Burst Mode。对于 MT8676 芯片，三
种模式都可以支持，但在 RX 端，MIPI 规范只要求支持其中一种模式即可。目前，Sync Pulses Mode 是最常用的模
式。 
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
Confidential B 
5.1.5.1 HFP Keep HS 
Sync Plus Mode 从 DPI 信号而来，有完整的 H 和 V 同步信号，数据包摆放如下图所示。绿色为 LP 的部分，红色为
HS 的部分。MT8676 芯片支持在每个帧的活动数据结束后返回到 LP 模式，同时在 HFP 期间保持 HS 模式。这种配
置称为 HFP Keep HS 模式。 
• HFP Keep HS Mode：在这种模式下，水平前沿期间保持 HS 状态。这可以确保输出的 HFP 更加准确，适合需要
精确 HFP 的 Panel 或 Bridge。如果需要精确的 HFP，建议使用此模式。 
• HFP HS EN = 0：如果在 HFP 期间不保持 HS 状态（即 HFP HS EN = 0），则 HFP 可能会因为返回到 LP 模式而增加
额外的 Data Cycle，导致实际输出的 HFP 偏大。此外，HFP 有最小值的要求，因此在这种模式下需要注意 HFP
的配置。 
两个模式的对比如下图所示。在驱动程序中，相关参数为 vdo_per_frame_lp_enable。将其设置为 1 时，表示启用
HFP Keep HS 模式（即 HFP HS EN = 1）。 
 
 
 
5.1.5.2 DSI_Frame_Rate_Cal_for_Customer_MT8676 介绍 
如下 excel 表格可以计算出比较精确的 FPS 所对应的 DSI 数据速率，同时也可以确认 Panel Timing 是否满足要求。 
HS 
LP 
HFP HS EN =1 
HFP HS EN =0 
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
Confidential B 
 
 
 
步骤： 
1. 输入面板的 H Timing & V Timing，Video Mode，Lane Num 等参数。 
2. 根据所需帧率计算 Ideal Bit_Freq，对于 D-PHY，这个参数即为 datarate。 
3. 微调数据速率，得到想要的帧率。数据速率可以精确到 kHz。在驱动程序中需要设置 data_rate_khz 参数以使调
整生效。 
4. 如果需要更精准的时序，建议启用 Video Mode keep HS MODE。确保 Htatol 可以被 2 * lane_number 整除。 
 
在调整 DSI 数据速率以获得准确的帧率后，如果发现 Htotal 不满足 2 * Lane Num 的整除要求，，建议通过微调 HFP
参数来解决这个问题（由于大多数屏幕使用 DE（Data Enable）模式，水平时序的微调通常是可行的。在调整 HFP
参数后，建议与屏幕厂商确认新的时序设置，以确保兼容性和性能。 ）。 
另外第 4 步中提到的 Video Mode Keep HS MODE 是指屏幕驱动中的 vdo_per_frame_lp_enable。 
如果 Htotal 不满足整除要求，可能会导致实际输出的 HFP 出现小数，这可能引起屏幕闪烁或锯齿。  
 4 
 4 
 3 
 3 
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
Confidential B 
 
5.2 LCM 问题调试 
屏幕在点屏阶段和 DV 测试阶段的问题会有些差异。在点板点屏阶段，针对屏幕的问题，除了要分析软件部分的设
定，还需要考虑硬件的设计是否正确和焊接是否可靠等。DV 测试阶段的黑花卡更侧重分析软件流程的 Bug。下图
针对常见的问题做了一个简单的分析步骤，这样在针对复杂的屏幕问题时，通过 DSI 的 Pattern 是否显示正常作为
一个切入点，能够快速切割定位问题，而不会觉得无从下手。另外需要提到的是 对于黑屏的问题，首先需要确认
是的背光是否正常，再做后面的分析。 
MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved.
MT8676 DSI
 Serializer
Deserializer
Main categories of LCM issues
Panel bring-up
1. Disp_pwm backlight issues 
2. Display black screen, screen artifacts, 
stuttering
• Confirm backlight
• Enable interface pattern
Display
1. Display path control
2. Artifacts/Flickering
Increase clk
• Force GPU composition
• If GPU composition is normal, then 
disable PQ feature
• PQ module impact
3. Stuttering
• Fence issue
• SurfaceFlinger/
HWC
4. Black screen
• Bandwidth
• Power control
• Cmdq abnormal
PatternOK
Failed Ser 
Pattern
OK
DSI owner
Failed
Vendor
Display owner
SerDes issues
1. Prioritize contacting the 
vendor
2. LCM owner assistance
Debug
1. Check PCB wiring sequence and soldering
- Swap
- Cold solder joints, missing solder
2. Check power supply, GPIO status, 
initialization timing
3. Dump registers
Display 
abnormal
 
 
5.2.1 DSI Register 介绍 
DSI0 Base register 0x1400d000 DSI0 MIPI TX base 0x11e50000 
DSI1 Base register 0x1420d000 DSI1 MIP TX base 0x11e60000 
 
DSI Register 格式都是 Base 地址加上一个 Offset，具体的 Offset 以及定义可以参考 Register Map。下表介绍了常用的
DSIRegister 的含义，方便 Debug 的时候使用。 
地址 名称 介绍 
1400d000 DSI_START Bit0 为 1 表示 DSI 信号有输出 
1400d004 DSI_INTSTA 
中断的状态, 例如 bit12 表示有 buffer underrun, 可以查看 DSI 信号
的状态 
1400d038 DSI_SIZE_CON 
Panel active 的 size, 
Bit30 ~ Bit16: 高; Bit14 ~ Bit0: 宽 
1400d010 DSI_COM_CON Bit0: DSI_RESET , software reset  
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
Confidential B 
地址 名称 介绍 
Bit2: DPHY_RESET , MIPI TX software reset 
1400d014 DSI_MODE_CON Bit1~Bit0 Video mode  
1400d018 DSI_TXRX_CON 
Bit16 为 0 代表 continue clock 
Bit5 ~ Bit2: Lane number 
1400d01c DSI_PS_CON 
 
Bit19 ~ Bit16: Data format 
3: RGB888 
5: DSC 压缩数据 
1400d020 DSI_VSA_NL = Panel VPW 
1400d024 DSI_VBP_NL = Panel VBP 
1400d028 DSI_VFP_NL = Panel VFP 
1400d02c DSI_VACT_NL = Panel height 
1400d050 DSI_HSA_WC = Panel HSA*3-10 
1400d054 DSI_HBP_WC = Panel HBP*3-10 
1400d058 DSI_HFP_WC 
Bit14 ~ Bit0 = Panel HFP*3-12 
Bit31 为 1 表示在每个帧的活动数据结束后，数据通道返回到 LP
模式，但在 HFP 期间保持 HS 模式。 
1400d110 DSI_PHY_TIMCON0 
MIPI Data Lane Timing HQA Test 可能会调整 
Bit(s) Name Description 
31:24 DA_HS_TRAIL timing parameter: T_HS-Trail 
23:16 DA_HS_ZERO timing parameter: T_HS-Zero 
15:8 DA_HS_PREP timing parameter: T_HS-Prepare 
7:0 LPX timing parameter: T_LPX 
   
 
1400d114 DSI_PHY_TIMCON1 MIPI Data Lane Timing HQA Test 可能会调整 
11e50008 MIPITX_CDPHY_VOLTAGE_SEL 
MIPI Swing 调整 
9:6 RG_DSI_HSTX_LDO_REF_SEL Selects 0.4V/0.5V ref voltage 
(20mV/step, covers 0.3 to 0.6V) 
  4'b0000: Min. voltage 
  4'b1000: Typical voltage 
  4'b0111: Max. voltage 
 
1400d178 DSI_SELF_PAT_CON0 DSI Pattern, 可以出纯色, 灰阶等 Pattern 
11e5002C MIPITX_PLL_CON0 MIPI Clock PCW, Clock 不同设定会有差异 
11e50030 MIPITX_PLL_CON1 MIPI Clock 开关和 Divide 
11e50034 MIPITX_PLL_CON2 MIPI Clock 展频设定 
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
Confidential B 
地址 名称 介绍 
Bit1 为 1 表示开启展频 
11e50038 MIPITX_PLL_CON3 MIPI Clock 展频设定 
11e50004 MIPITX_CDPHY_LANE_CON 
Bit(s) Name Description 
9 RG_DSI_DEM_EN Enables DSI de-emphasis 
  1'b0: Off 
  1'b1: On 
 
 
5.2.2 DSI Register Dump 介绍 
可以通过命令 Dump 所有的 DSI Register： 
adb shell "echo diagnose>/proc/mtkfb && cat /proc/mtkfb" > d:\mtkfb.txt 
 
Dump 的结果如下图中所示： 
 
 
 
 
 
通过reg_read_len 命令读寄存器，使用前需要打开 config:  
CONFIG_MTK_CLKMGR_DEBUG=y 
 
adb shell "echo reg_read_len addr len> /proc/clkdbg ; cat /proc/clkdbg"   
 
其中 len 指的是偏移地址长度，会依次读出 addr+offset 的寄存器值。 
 
假设想要 Dump DSI0 0x00~0x100 的地址的值，命令如下： 
adb shell "echo reg_read_len 0x1400d000 0x100> /proc/clkdbg ; cat /proc/clkdbg" 
 
当diagnose 命令使用异常，可以使用这个命令 Dump 相关的寄存器。 
 
                                                                  DSI0 BASE 
offset Base+offset Base+offset+4 Base+offset+8
8 
Base+offset+C 
 
 
 
 
 
 
 
 
 
 
 
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
Confidential B 
5.2.3 DSI 调试流程 
下图为简单的 DSI 调试流程图，可以结合 SerDes 的状态一起来看。 
 
 
5.2.4 帧率异常 
检查屏幕驱动中 Pixel Clock 设定与 data_rate 设定是否正常。文档中搜索关键字，可以找到驱动中参数的位置介
绍。 
 
5.2.5 I2C 通信异常 
1. 确认加串器电源晶振是否正常，确认软件时序和 I2C 地址设定，测量 I2C 信号电压是否正常。 
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
Confidential B 
2. 确认 DWS 设定是否正常。 
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
include/dt-bting/pinctrl/mt6897-pinfunc 查找对应的 I2C 
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
 
5.3 DSI DPHY CTS 测试问题 
CTS 测试的主要目的是验证设备是否符合 MIPI DSI DPHY 规范。CTS 测试主要包含以下几个方面： 
1. 电气特性测试：电压，边沿等是否满足规范 
2. 协议一致性测试：MIPI Timing 是否满足规范 
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
Confidential B 
3. 信号完整性测试：测试信号质量，眼图，Skew 是否满足规范 
 
5.3.1 测试仪器 
由于是高速信号，对信号的测试环境和仪器要求比较高。需要使用专用的带 DPHY 协议的测试仪器，并且使用专用
的探头，探尖，tip 来连接信号到仪器上，同时在使用前需要对仪器做校准。如果没有相关的测试仪器，需要找第
三方机构做测试。 
 
5.3.2 测试平台准备 
1. 测试需要焊接差分信号 clock_p, clock_n, data_p, data_n 的测试点。测试点建议选在靠近 Bridge 的输入端。同时
焊接的 GND 线尽量不要离的很远，线长尽量控制在 1~2cm。data_p 的接法示意图如下图所示，4 根信号共需
要接 4 个 Tip 到示波器上。 
2. 测试的平台需要接屏测试，并且屏幕可以显示正常。这样是为了 Bridge 或者 RX 的设定都正常，保证负载端是
正常的。 
3. 测试的平台可以播放视频，视频的内容建议 Random 一些，越 Random 越好。或者放一张比较花的图片，避免
大面积的黑和白。测试平台接 adb，方便 Debug 使用。 
4. 测试前需要检查每个信号都是稳定正常的，确保焊接，Tip 和 Probe Head 都是正常的。 
5. DSI 输出设定要关闭展频，同时要记住 DSI Clock，或者测试前量测一下 Clock。 
 
 
 
 
 
 
 
 
 
 
5.3.3 常见 Failed 项目分析 
Continue Clock HS 部分的测试项目如下，红色方框中的项目主要是电气特性相关，绿色方框的项目主要是 MIPI 
Timing 协议一致性相关，蓝色方框的项目主要是信号质量相关。 
MT8676 
DSI0 
 Serializer 
MAX96789 
data_p 
GND 
Tip 
 Probe head 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 29 
Confidential B 
 
 
5.3.3.1 1.3.4/1.4.4 VOD0/VOD1 Pulse & 1.3.7 VCMTX 
Clock 和 Data 默认设定都是 200MV，如果出现偏小，可以调整 HSTX 输出电压，增大驱动能力。 
 
 
 
参考 DSI 寄存器介绍中 MIPITX_CDPHY_VOLTAGE_SEL 寄存器 0x11e50008，20mV 一个 Step，可以通过 adb 更改寄存
器逐渐调大满足规范。建议调大之后观察这几组值的变化看是否符合预期。 
 名称 默认值 建议调整范围 
D-PHY RG_DSI0_HSTX_LDO_REF_SEL 4’b100 
0110: 0.36V 
0111: 0.38V 
1000: 0.4V 
1001: 0.42V 
1010: 0.44V 
1011: 0.46V 
 
以寄存器 DSI0 为例，DSI1 的寄存器请看寄存器介绍的部分。 
adb shell "echo gce_rd:0x11e50008 > /sys/kernel/debug/mtkfb; cat /sys/kernel/debug/mtkfb | 
grep gce_rd" 
[   83.560777][mtkfb_dbg] gce_rd:0x11e50008 
[   83.560784]display_debug cmd gce_rd:0x11e50008 
[   83.561045][reg_dbg] gce_rd: addr(0x11e50008) = 0x44441200 
 
更改 Bit6 ~ Bit9 的值。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 30 
Confidential B 
电压值 Bit6 ~ Bit9 寄存器 
0.4V 1000 0x44441200 
0.42V 1001 0x44441240 
0.44V 1010 0x44441280 
0.46V 1011 0x444412C0 
0.48V 1100 0x44441300 
 
根据情况调整需要增加的电压值，例如调整到 0.42V 
adb shell "echo gce_wr: 0x11e50008,0x44441240,0xffffffff > /sys/kernel/debug/mtkfb" 
 
5.3.3.1.1 软件如何调整电压 
LK: 
--- a/platform/mediatek/mt8676/disp/ddp_dsi.c 
+++ b/platform/mediatek/mt8676/disp/ddp_dsi.c 
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
 
--- a/platform/mediatek/mt8676/disp/ddp_reg_mipi.h 
+++ b/platform/mediatek/mt8676/disp/ddp_reg_mipi.h 
@@ -13,6 +13,7 @@ 
 #define MIPITX_LANE_CON                    (0x0004UL) 
 #define MIPITX_VOLTAGE_SEL                (0x0008UL) 
 #define FLD_RG_DSI_PRD_REF_SEL              REG_FLD(6, 0) 
+#define FLD_RG_DSI_HSTX_LDO_REF_SEL         REG_FLD(4, 6) 
 #define FLD_RG_DSI_V2I_REF_SEL              REG_FLD(4, 10) 
 
Kernel: 
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
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 31 
Confidential B 
 
5.3.3.2 1.3.8 Voltage Mismatch & 1.4.8 VCMTX Mismatch 
检查测试环境，探头是否有做校准，PCB Layout 是否等长。 
 
5.3.3.3 1.3.1~3 & 1.3.13~16 MIPI Timing 
MIPI Timing 如下图中所示可以通过寄存器调整，寄存器 DSI_PHY_TIMCON0 中有说明。 
 
上图中参数需要满足下图中规范的范围，其中 UI = 1/datarate，SW 中设定最小单位是 8UI。 
 
5.3.3.3.1 SW 如何调整时序 
以下图中 1.3.15 TEOT Failed 为例，现在测试结果为 299.77ns，此值偏大，Pass Limit Max 值为 133.85ns。 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
Confidential B 
 
 
现在需要调整设定，使得 TEOT 小于 133.85ns Pass 规范: 
1. 从 5.3.3.3 MIPI Timing 图中，找到 TEOT 信号的位置和规范的范围。 
2. 1.4.17 确认 UI=2.404ns。 
3. 根据 UI 计算 TEOT 阈值：TEOT=[~, 105ns+12*UI] = [~, 133.848ns]，也可以直接看提示的 Pass Limit 的值。 
4. 计算软件设定最小单位 = 8 * UI = 8*2.404 = 19.232ns，SW 设定寄存器值 < 133.848ns/19.232ns = 6.96。 
5. 根据 UI 计算 HS_TRAIL 阈值：THS_TRAIL> 60ns + 4UI=69.6ns，SW 设定寄存器值 > 69.6ns/19.232= 3.6。 
6. HS_TRAIL 属于 TEOT 一部分，降低 HS_TRAIL，既是减小 TEOT，同时要保证 THS_TRAIL 也要满足规范，软件设定
值为整数，则可以取 4 ~ 6 中的一个值通过 adb 设定进去，再测试查看。 
 
5.3.3.3.2 如何将调好的值写进软件 
SerDes 的 Driver 可以将参数放到 dts 里面客制化，再给到如下的参数里面。 
LK Panel Driver 
lcm_get_params()里面添加 
 
 
Kernel Panel Driver 
ext_params 里面添加需要调整的参数 
 
 
 
5.3.3.3.3 THS_TRAIL Failed 
THS_TRAIL 比较常见的 Failed 情况是示波器没有抓到正确的 HS_TRAIL。这样调整寄存器也是没有用的，可以看到的
现象是测出来的 HS_TRAIL 值非常小，如下图中所示只有 4ns 左右。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 33 
Confidential B 
 
 
可以对比下图中正常的波形，正常的 HS TRAIL 是一段 HS 1 的数据，所以碰到这种情况请确认示波器是否有正确设
定，或者重新测试，或者可以手动测量确认。 
 
 
5.3.3.4 1.3.11~12 Tr/Tf & 1.5.4 Data to Clock Skew 
信号的质量对 Data 和 Clock 的 Tr/Tf 以及 Data to Clock Skew 的测试项目影响很大。而影响信号质量的根本原因就是
差分信号阻抗的控制，SoC 输出单端 50 欧姆，差分 100 欧姆。要求 PCB Layout 也遵循这个原则，并且要做阻抗控
制，这部分可以跟硬件对齐，查看具体的 Layout 要求和 PCB 厂商要求阻抗控制。同样 RX 的部分也要按照同样的
阻抗设定，这样才能保证信号的完整性。 
Failed 
OK 
HS_TRAIL 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
Confidential B 
5.3.3.4.1 SoC 的阻抗调整 
SoC 的 MIPI TX 有单端的阻抗调整寄存器，但是不建议调整。目前软件设定默认输出有做阻抗的 Calibration 保证性
能，如果单独调整某根信号的阻抗，很难保证一致性。 
 
5.3.3.4.2 干扰导致 Skew Fail 
除了测试的信号接线稳定，还要确认平台和仪器的接地也要稳定，注意排查杂讯的干扰。下图中红色箭头不 预期
的杂讯，会影响测试结果，需要确认测试环境。 
 
5.3.3.4.3 阻抗不连续信号问题 
下图中左边 Failed 图片是没有带负载测试的异常波形，极端的阻抗不连续情况，可以看到信号失真很严重，上升
沿和下降沿的位置出现台阶状，右侧图片是带负载测试的正常波形，可以看出阻抗的连续对波形的影响。当信号
失真比较严重时，在排除了测试环境的问题后，就需要检查阻抗的部分。 包含 SoC 输出的阻抗，PCB Layout 阻抗，
RX 端的阻抗。 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 35

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 35 
Confidential B 
  
 
5.3.3.5 什么情况开 DEM 
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
 
5.3.3.6 1.5.5 & 1.5.6 HS Skew Calibration Burst 
当 datartate >1.5Gbps 时，协议规定 TX 需要向 RX 发送 Skew Pattern，RX 收到后，可以用来校正 PCB Layout 等导致
的 Data 和 Clock 的偏移，为高速信号接收提供保障。Skew Pattern 与 Normal 信号的差异如下图： 
 
Skew Pattern 有两种，Initial 的方式和 Periodic 的方式，Periodic 的方式在 Spec 中是可选的，SoC 不支持这种方式，
只支持 1.5.5 Initial 的方式。 
 
OK 
Failed 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 36

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 36 
Confidential B 
 
5.3.3.6.1 1.5.5 Initial HS Skew 测试 
Initial 的方式是指在 DSI Normal 的信号之前发送 Skew Pattern，只会发送一次，不会周期重复。如果要测试这个信
号，需要在亮屏之前正确的抓住 Timing。当屏幕亮的时候信号已经发送完毕，是测不到的。 这对信号的测试有难
度，不建议测试。 
 
5.3.3.6.2 SW Deskew Enable 
Code Flow 中默认大于 1.5G datarate 会开启，需要加串器也要打开 Deskew 的功能，才能实现此功能，完成信号的
校准。加串器设定好后，收到 Pattern，并做完校准，会返回 IRQ，可以通过 IRQ 的状态确认。 
 
 
5.4 DSI 波形量测 
波形的量测是常用的 Debug 手段。 
 
5.4.1 如何测量帧率 
图 1 中是一个每 Line 都回 LP 的 Data 的波形，需要将时间轴拉大一些找到 V Blanking 区域，按照下图测量 1 Frame
的时间，60fps 1 Frame 的时间大概为 16.6ms。图 2 中是将 V Blanking 区域放大的波形，可以放大确认抓的信号是
否正确。 
Support 
Not Support 
//DSI deskew pattern enable 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 37

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 37 
Confidential B 
 
 
 
图 3 是开启 Video 每个 frame 回一次 LP，可以看到只有在 Blanking 区域有 LP 波形，其它的时间都是 Keep HS。按
照下图测量 1 frame 的时间，60fps 1 frame 的时间大概为 16.6ms。图 4 是 V blanking 展开的图形，供参考。 
 
1 frame 
V Blanking 
 V Blanking 
1 
2 
3 
1 frame 
V Blanking 
V Blanking 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 38 
Confidential B 
 
 
5.4.2 如何测量信号 
下图是 1 Line 的 Data & clock 的波形，DP & DN 可以看到 LP 和 HS 部分的波形。其中 Data 上 LP 为 1.2V，HS 为
200mV，Clock P 的幅度为 200mV。可以确认信号的电压等是否有异常。 
 
 
 
 
 
 
 
 
 
 
4 
V Blanking 区域 
LP 
HS 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 39

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 39 
Confidential B 
将 LP 部分放大，可以看到 LP 进入 HS 的时序，再放大可以测量 HS prepare 等参数。 
 
 
LP11->LP01->LP00->HS
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 40

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 40 
Confidential B 
6 DP Interface 
6.1 DP 调试 
6.1.1 调试命令 
1. 打开/关闭 DPTX 调试日志信息。 
echo dptx:debug_log:on > /proc/mtkfb 
echo dptx:debug_log:off > /proc/mtkfb 
2. DP_intf pattern（仅用于非 DSC） 
echo gce_wr:0x1400bF00,41,ffffffff > /proc/mtkfb 
3. DPTX pattern（仅用于非 DSC） 
echo dptx:dppattern > /proc/mtkfb 
4. DP write cmd 
echo wrdp:offset:value:mask > /proc/mtkfb 
5. DP read cmd 
echo rddp:offset > /proc/mtkfb 
6. DP intf write cmd 
echo gec_wr:0x1400bxxx,xxx,xxxx > /proc/mtkfb 
eg:echo gce_wr:0x1400bF00,41,ffffffff > /proc/mtkfb 
 
6.1.2 Aux fail 
1. 量测近 SoC 端与 Sink 端 AUX P/N 波形，具体波形查看下面。 
2. Aux request 波形 DP TX -> DP RX 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 41

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 41 
Confidential B 
3. Aux reply 波形 DP RX -> DP TX 
 
 
6.1.3 DP  黑屏 
1. 第一次点 DP 屏幕，参考上面配置。若配置都正确，提 CR 报问题。 
2. 需要打 DP_intf pattern 查看（6.1 中调试命令）。 
 
6.2 DP/SerDes 时序 
1. DP 会在 set training start 前，去 call serdes pre_enable/enable，让 SerDes 开始下设定，这里是同步操作，保证
时序。 
2. 在 SerDes enable 这个阶段 HPD disconnect，HPD connect，只会检测到 HPD 发生变化，因为是同步行为，不会
继续向下执行，会阻塞在 SerDes enable 函数内等待完成。 
3. DP 会在等待 SerDes 结束后，开始 training 前，再次检查连接状态。 
– 当前连接状态是 connect，会继续开机上电 connect 之后的动作，继续做 training。 
– 当前连接状态是 disconnect，training 状态会返回断开。接下来动作会跑继续断开的行为。 
4. 从波形图上来看，出现 2 次 HPD low，这里是 SerDes 产生的 HPD 行为，会阻塞在 SerDes enable 函数，DP 只
会检测到 HPD，并没有行为。 
5. 从 log 对应波形分析，波形上有三次拉高状态，对应 log 也存在三次连接状态，并保证 training 是在 SerDes reg 
setting 之后（即第三次 HPD 拉高）。 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 42

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 42 
Confidential B 
 
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 43

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 43 
Confidential B 
7 Display 常见问题/故障排除 
7.1 hwc 命令 
• Log CMD: 
adb shell setprop persist.vendor.debug.hwc.log V && adb shell setprop 
vendor.debug.hwc.skip_log 0 && adb shell dumpsys SurfaceFlinger  
 
• Dump sf info: 
adb shell dumpsys SurfaceFlinger > sf.log 
 
• Force GPU （GPU 叠图）： 
adb shell service call SurfaceFlinger 1008 i32 1 
 
7.2 显示驱动 CMD 
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
 
 
Irq log: 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 44

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 44 
Confidential B 
adb shell “echo irq:on > /d/mtkfb” 
 
如果要抓开机 log，需要直接改代码： 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
抓 display diagnose dump: 
adb shell "echo diagnose > /sys/kernel/debug/mtkfb && cat /sys/kernel/debug/mtkfb" > 
mtkfb.txt 
 
7.3 黑屏 
• 背光是否开启 
• 如果有 bridge ic, bridge ic 是否 OK 
• dsi/dp pattern 是否 OK 
• screencap 是否 OK 
adb shell screencap -d 0/1 /sdcard/1.png 
 
如果以上几点都 OK，最后就需要 display owner 详细看 log 来定位问题。 
 
7.4 花屏/闪屏 
• 看 log 中是否有 DISP_OVL/RDMA underflow/abnormal 
– size 配置是否 OK 
▪ CMD:  
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
o force 最大: 
adb shell "echo 0 > /sys/kernel/helio-dvfsrc/dvfsrc_force_vcore_dvfs_opp" 
• Force GPU 是否 OK 
adb shell service call SurfaceFlinger 1008 i32 1 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 45

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 45 
Confidential B 
• dsi/dp pattern 是否 OK 
 
7.5 卡顿 
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

## PDF物理页 46

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 46 
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
# SRC0125 MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf

SHA-256：a861eabc5efa0069def436ae572a481a28af06767c94388799fdcee5bd55acd9

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0125.html)

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
# SRC0126 MT8668_Yocto_AI_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_AI_User_Manual_CN_V1.0.pdf

SHA-256：daaf8317f91f1edc3d244c4d8ed6a6a9208e6a8b3788d3f8b35f87478c3ee42a

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0126.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2026-01-28
MT8668 Yocto AI User Manual 
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
MT8668 Yocto AI 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 曾俊仙 正式版本 
 
  
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
MT8668 Yocto AI 
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
图 1-5.支持的算子的集合关系 ················································································································································· 9 
 
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
MT8668 Yocto AI 
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
MT8668 Yocto AI 
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
要访问 NeuroPilot 在线文档，客户首先需要申请一个账户。然后使用这个账户访问 MediaTek 在线文档网站, 如图 
1-2 所示。该网站提供各种开发资料，包括与开发相关的数据、convert 等一些转换工具、SDK、SampleCode，以及
每个 target 对模型 OP 的支持和限制条件等。需要访问在线文档的客户可以联系 CPM，以获得申请过程的帮助。 
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
MT8668 Yocto AI 
User Manual 
Confidential B 
 
图 1-2. NeuroPilot 在线文档 
 
开通 NeuroPilot 访问权限后：进入 https://neuropilot.mediatek.com/  -> Software Development -> 登陆账号 -> 在
“NeuroPilot SDK & Document”下选择目标 NeuroPilot {version} -> Latest Version NeuroPilot Online Doc -> 2. Getting 
Started Guide -> 2.2. NeuroPilot Workflow -> 2.2.3.1. Android Development。 
 
 配置/客制化指南 
 NeuroPilot Debug 命令说明 
客户如果遇到 apusys error issue，请先打开以下 log 开关，复现问题，再向 MediaTek 提供整机 log 以及在测试机上
的 apusys_rv_xfile (用于解码 apusys_log) ，log options 和获取路径如下： 
Enable NNAPI AOSP log       ：adb shell "setprop debug.nn.vlog 1" 
Enable TFlite log                    ：adb shell setprop debug.mtk_tflite.vlog true 
Enable Execution plan           ：adb shell setprop debug.neuron.runtime.ShowExecPlan true 
Enable ShowQoSInfo             ： adb shell setprop debug.neuron.runtime.ShowQoSInfo true 
Enable Kernel Log    :   adb shell "echo 15 > /sys/class/misc/apusys/log/klog" 
Enable uPLog                          ： adb shell "echo 5 > /proc/apusys_logger/log" 
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
MT8668 Yocto AI 
User Manual 
Confidential B 
Enable User Log                      ： adb shell setprop debug.apusys.loglevel 15 
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
如何进行 NPU trace 录制：依次执行 02-trace_start_all.bat –> 运行测试程序 –> 02-trace_stop.bat。其中： 
• 02-trace_start_all.bat    - start to record trace 
• 02-trace_stop.bat           - stop trace and pull trace files 
 
下面两个脚本运行是可选的，如果有开启，最后生成的 system.trace 中会有 npu middleware 和 neuron trace。 
• 08-mdw_trace_enable.bat  - To get tracing information from npu middleware. 
• 08-neuron_rt_trace_enable.bat   - To get tracing information from neuron runtime. 
 
最后会生成三个文件，根据需要选择查看。请使用 https://ui.perfetto.dev/ 打开 trace 
• npusys.trace - npusys trace only 
• system.trace - system trace only 
• combine.trace - npusys + system trace 
 
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
MT8668 Yocto AI 
User Manual 
Confidential B 
 NPU Trace 分析示例 
通常使用 MediaTek NPU Systrace 抓出并解析得到的 trace 文件有以下三个： 
• npusys.trace（仅包含 NPU 运行期间各个 Device，如 MDLA 上 Tasks 的状况和 NPU Frequency, DRAM access, TCM 
access 等信息） 
• system.trace（普通 System trace only，包含 CPU 信息和系统中其他 process/threads 信息） 
• combine.trace（npusys + system trace） 
 
为了理清当前系统中运行在 NPU 上的线程，通常需要通过系统调试和跟踪工具来获取相关信息。以下是一个详细
的 SOP，用于识别和调试当前系统中运行在 NPU 上的线程。 
1. 使用 perfetto UI 打开 combine.trace 文件，定位到在 MDLA  (主要 AI 运算单元) Core 上运行的 Task 块。可以获取
到以下资讯： 
– 对应 Task 执行的推理耗时，可以放大查看其 pid16652 (线程号)，如图 1-3 所示。 
– 对应 Task 是否运行在 SMP 多核并行模式下，若是多核 MDLA 运行，则会有多个相同颜色/pid 的 Tasks，如图 
1-4 所示： 
 
 
图 1-3. NPU trace 
 
 
图 1-4. NPU 硬件状态 
 
– 对应 Task 的 DRAM/TCM 占用情况。 
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
MT8668 Yocto AI 
User Manual 
Confidential B 
– 对应 Task 执行期间的 MDLA Cores 运行频率。 
– 还可以通过在 MDLA Core 上运行具有相同 pid 的 Tasks，以判断该 AI 算法是否是周期性执行的。 
 
 特定 MediaTek 平台 NPU 支持的算子信息 
  
图 1-5.支持的算子的集合关系 
 
如图 1-5 所示，MediaTek 平台 NPU 支持的算子，集合由小到大分为 3 个层面: 
 
• Pytorch/TensorFlow Ops -> TFLite Ops：通过使用 mtk_converter tool 将原本的.pt 或 .pb 模型中的 Ops 转为 TFLite 
Ops。这步映射过程会进行初步的 Ops 过滤，挡住平台 NPU (HW) 不支持的 Ops。关于哪些 Pytorch/TensorFlow 
Ops 可以被 converter 工具识别并转为 Tflite Ops，可以参考 Online Document：Developer Tools -> Model 
Development -> Converter -> Converter Tool Supported Operators。 
• TFLite Ops -> NPU HW Operations：通过使用 neuronsdk 中的 ncc-tflite (compiler) 将转出的 TFLite 模型编译为 dla
文件。这步映射过程中会参考 NPU HW  Operations Guidelines 中的 Specification (Restrictions) 来检查 TFLite 中每
个 Op 的详细参数。 关于哪些 TFLite Ops 可以被 ncc-tflite 工具识别并编译为 dla 文件，可以参考：Supported 
Operations。 
• NPU HW  Operations：真正可以运行在 NPU  上的 Ops。 
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
MT8668 Yocto AI 
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

