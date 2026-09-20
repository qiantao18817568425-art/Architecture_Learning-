# SRC0324 0007-000001-957 MT6685_DCXO_DataSheet_V1.4.pdf

来源：8676/MTK8676硬件资料/0007-000001-957 MT6685_DCXO_DataSheet_V1.4.pdf

SHA-256：11b9316f312a85d7ccc655d3ac0520331696bfa3b8e2dbf913fa2ac85e31a9a4

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0324.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential A 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.4 
Release date:  2023-09-06 
MT6685 Clock IC Datasheet 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT6685 Clock IC 
Datasheet 
Confidential A 
Version History 
Version Date Author Description 
0.1 2021-05-05 Yunghsu Chen Initial draft 
0.2 2021-05-21 Yunghsu Chen Modified AUXADC power and ground pins description. 
0.3 2021-07-13 John Chiang Modified RTC accuracy and duty cycle. 
0.4 2021-08-20 John Chiang 1. Modified RFCK1 10 kHz offset phase noise 
2. Modified BBCK output impedance mapping table 
0.5 2021-08-25 Chuck Chiu Modified power on/off sequence. 
0.6 2021-11-05 John Chiang 
1. Added 26 MHz clk phase noise spec. for RFCK1. 
2. Added 52 MHz clk phase noise spec. for RFCK2. 
3. Modified RG_XO_EXTBUF_BBCK1_RSEL code 
description. 
0.7 2021-11-29 Yunghsu Chen Updated POD. 
0.8 2022-01-04 Yunghsu Chen 
Joseph Cheng 
1. Updated top marking. 
2. Update BBCK_HD description. 
0.9 2022-03-24 Yunghsu Chen 
1. Updated thermal information. 
2. Removed VRTC Vin min. voltage and modified 
UVLO/DDLO description. 
1.0 2022-04-11 
Yunghsu Chen 
Katy Chang 
Chuck Chiou 
1. First official release. 
2. Updated die size information in Figure 1-1. 
3. Updated DCXO description in 3.2.5. 
4. Updated sequence figure. 
5. Updated table in 2.5 (FAULTB, EN, RTC_INT). 
1.1 2022-06-13 
Chuck Chiou 
Joseph Cheng 
John Chiang 
1. Updated VRTC power on waveform in Figure 3-2. 
2. Added debug status register. 
3. Added 10 Hz/100 Hz phase noise spec. for RFCK2/BBCK. 
1.2 2022-09-22 Yunghsu Chen Updated top marking. 
1.3 2023-03-13 Yunghsu Chen 
1. Updated power on sequence note. 
2. Updated operating current electrical characteristic in 
Table 2-4. 
1.4 2023-09-06 Yunghsu Chen Updated descriptions of Figure 3-2. MT6685HP/B power-
on/off control sequence without XTAL by EN high. 
    
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT6685 Clock IC 
Datasheet 
Confidential A 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 4 
List of Tables ······································································································································································ 4 
1 Overview ··································································································································································· 5 
1.1 Features ···································································································································································· 5 
1.2 Applications ······························································································································································ 5 
1.3 General Descriptions ················································································································································ 5 
1.4 Ordering Information ··············································································································································· 6 
1.5 Top Marking Definition ············································································································································· 6 
2 Electrical Characteristics ············································································································································ 8 
2.1 Absolute Maximum Ratings over Operating Free-Air Temperature Range ······························································ 8 
2.2 Thermal Characteristics ············································································································································ 8 
2.3 Pin Voltage Range ····················································································································································· 8 
2.4 Recommended Operating Range ··························································································································· 10 
2.5 Electrical Characteristics ········································································································································ 10 
2.6 Regulator Output ··················································································································································· 12 
2.6.1 Regulator Output (LDO) ······························································································································ 12 
2.7 AUXADC ·································································································································································· 14 
2.8 DCXO ······································································································································································ 14 
2.8.1 Reference Output Buffer(s) Specifications ·································································································· 15 
3 Functional Description ············································································································································· 19 
3.1 General Description················································································································································ 19 
3.2 Clock IC Functional Blocks ······································································································································ 19 
3.2.1 Power-on/off Sequence ······························································································································ 20 
3.2.2 Low Dropout Regulator (LDOs) and Application Reference ········································································ 22 
3.2.3 AUXADC······················································································································································· 22 
3.2.3.1 Block Description ·························································································································· 22 
3.2.4 Real-Time Clock ··········································································································································· 23 
3.2.5 DCXO ··························································································································································· 23 
3.2.5.1 32 kHz RTC Removal Mode ··········································································································· 23 
3.2.6 Interrupt and Watchdog ····························································································································· 24 
3.2.6.1 Interrupt ········································································································································ 24 
3.2.6.2 Watchdog Reset ···························································································································· 24 
3.2.6.3 Booting Watchdog Reset ··············································································································· 24 
3.2.7 SPMI Interface ············································································································································· 24 
3.2.8 GPIO ···························································································································································· 26 
3.2.8.1 GPIO List ········································································································································ 26 
3.2.8.2 GPIO Specifications ······················································································································· 27 
3.3 Register Table and Description ······························································································································· 27 
4 Packaging ································································································································································· 41 
4.1 Package Dimension ················································································································································ 41 
Appendix ········································································································································································· 42 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT6685 Clock IC 
Datasheet 
Confidential A 
Exhibit 1 Terms and Conditions ········································································································································ 43 
 
 
List of Figures 
Figure 1-1. MT6685 WLCSP 42 (2.2306*2.4958 mm) pin assignment (top view) ······································································ 6 
Figure 3-1. MT6685 block diagram ·········································································································································· 19 
Figure 3-2. MT6685HP/B power-on/off control sequence without XTAL by EN high ······························································· 21 
Figure 4-1. Package dimension ················································································································································· 41 
 
List of Tables 
Table 1-1. MT6685 pin description············································································································································· 6 
Table 2-1. Absolute maximum ratings ········································································································································ 8 
Table 2-2. Pin voltage range ······················································································································································· 8 
Table 2-3. Operation condition ················································································································································ 10 
Table 2-4. General electrical specifications ······························································································································ 10 
Table 2-5. Normal mode and voltage supplies ························································································································· 11 
Table 2-6. VAUX18 specifications ············································································································································· 12 
Table 2-7. DVDD18_DIG specifications ····································································································································· 13 
Table 2-8. VXO_LDO specifications ··········································································································································· 13 
Table 2-9. VRFCK1/VRFCK2_LDO specifications ······················································································································· 13 
Table 2-10. VBBCK_LDO specifications ····································································································································· 13 
Table 2-11. VRTC_LDO specifications ······································································································································· 13 
Table 2-12. XOADC specifications ············································································································································· 14 
Table 2-13. XO specifications ··················································································································································· 14 
Table 2-14. Reference input buffer specifications (XTAL1, buffer mode) ················································································· 15 
Table 2-15. RF clock output buffer specifications (RFCK1A, RFCK1B, 52 MHz) ········································································ 15 
Table 2-16. RF clock output buffer specifications (RFCK1A, RFCK1B, 26 MHz) ········································································ 16 
Table 2-17. RF Clock output buffer specifications (RFCK2A, RFCK2B, 52 MHz) ········································································ 16 
Table 2-18. RF Clock output buffer specifications (RFCK2A, RFCK2B, 26 MHz) ········································································ 16 
Table 2-19. BB clock output buffer specifications (BBCK1~5, 26 MHz) ···················································································· 17 
Table 3-1. LDO types and brief specifications ·························································································································· 22 
Table 3-2. Application and input range of XOADC channels ····································································································· 23 
Table 3-3. MT6685 GPIO list ····················································································································································· 26 
Table 3-4. MT6685 GPIO electrical characteristics ··················································································································· 27 
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT6685 Clock IC 
Datasheet 
Confidential A 
1 Overview 
1.1 Features 
• Handles 5G-Module baseband clock IC 
• Input range: 2.6~5V 
• 9 clock buffers and 4 input channels for ADC optimized for specific 5G-Module subsystems 
• 32K-Crystal-less RTC oscillator for system timing, 1.8V clock buffer output  
• SPMI interface 
• Programmable under voltage lockout protection 
• Watchdog reset 
• Flexibility hardware clock IC reset function 
• Power-on reset and start-up timer 
• 42-pin WLCSP package 
 
1.2 Applications 
MT6685 is ideal for clock IC of 5G-Module and other portable systems. 
 
1.3 General Descriptions 
MT6685 is a clock IC system chip optimized for 5G-Module, containing nine clock buffers and four input channels for ADC 
optimized for specific 5G-Module subsystems. 
 
Sophisticated controls are available for power-up and the RTC alarm. MT6685 is optimized for maximum battery life, 
allowing the RTC circuit to stay alive without a battery for several hours.  
 
MT6685 adopts SPMI interface and one SRCLKEN control pins to control DCXO, LDOs, and various drivers; it provides 
enhanced safety control and protocol for handshaking with baseband. 
 
MT6685 is available in a 42-pin WLCSP package. The operating temperature ranges from -30°C to +85°C. 
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT6685 Clock IC 
Datasheet 
Confidential A 
1.4 Ordering Information 
Order # Marking Temp. range Package 
MT6685HP/B  -30 ~ +85°C WLCSP 42 pins 
MT6685LP/B  -30 ~ +85°C WLCSP 42 pins 
Note: H for 52M XTAL; L for 26M XTAL. 
 
1.5 Top Marking Definition 
  
 
Pin assignments and descriptions:
 
Figure 1-1. MT6685 WLCSP 42 (2.2306*2.4958 mm) pin assignment (top view) 
 
Table 1-1. MT6685 pin description 
Ball Symbol I/O Description 
A1 VAUX18 PWR AUXADC power 
A2 VRTC PWR RTC LDO output. Supply of RTC macro where backup battery can 
be added. 
A3 AUXADC_VIN4 I AUXADC input 
A4 AUXADC_VIN2 I AUXADC input 
A5 RTC_INT O RTC interrupt 
A6 SDA I/O SPMI control interface 
B1 AVSS18_AUXADC GND AUXADC ground 
B2 AUXADC_VIN5 I External resistor 
B3 AUXADC_VIN3 I AUXADC input 
B4 FAULT_B O FAULTB indicator 
42 1 2 3 4 5 6
A VAUX18 VRTC AUXADC_VIN4 AUXADC_VIN2 RTC_INT SDA A
B AVSS18_AUXADC AUXADC_VIN5 AUXADC_VIN3 FAULT_B RTC32K_1V8_F SCL B
C VREF AVSS_VREF EN WDTRSTB_IN RTC32K_1V8_0 SRCLKENA0 C
D DVDD18_DIG VBAT RFCK1B RFCK2B BBCK2 FSOURCE D
E AUXADC_VIN1 DVDD18_IO RFCK1A RFCK2A BBCK1 BBCK5 E
F XTAL2 AVSS_XO AVSS_RFCK1 AVSS_RFCK2 DGND BBCK4 F
G XTAL1 VXO VRFCK1 VRFCK2 VBBCK BBCK3 G
1 2 3 4 5 6
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT6685 Clock IC 
Datasheet 
Confidential A 
Ball Symbol I/O Description 
B5 RTC32K_1V8_F O VIO18 domain 32 kHz clock output 
B6 SCL I SPMI control interface 
C1 VREF O Bandgap reference voltage 
C2 AVSS_VREF GND VDIG18 output voltage 
C3 EN I Enable control, active high 
(The operating voltage should be ≤ VSYS.) 
C4 WDTRSTB_IN I Watchdog reset from AP 
C5 RTC32K_1V8_0 O VIO18 domain 32 kHz clock output 
C6 SRCLKENA0 I Source clock enable pin 0 
D1 DVDD18_DIG PWR Digital power 
D2 VBAT PWR VSYS supply input for internal block and UVLO detection 
D3 RFCK1B O RFCK clock output 
D4 RFCK2B O RFCK clock output 
D5 BBCK2 O BBCK clock output 
D6 FSOURCE PWR eFuse power source 
E1 AUXADC_VIN1 I AUXADC input 
E2 DVDD18_IO PWR Digital I/O power 
E3 RFCK1A O RFCK clock output 
E4 RFCK2A O RFCK clock output 
E5 BBCK1 O BBCK clock output 
E6 BBCK5 O BBCK clock output 
F1 XTAL2 I/O XTAL input 2 
F2 AVSS_XO GND Ground 
F3 AVSS_RFCK1 GND Ground for RF clock buffer 
F4 AVSS_RFCK2 GND Ground for RF clock buffer 
F5 DGND GND Ground 
F6 BBCK4 O BBCK clock output 
G1 XTAL1 I/O XTAL input 1 
G2 VXO PWR Power supply of XO 
G3 VRFCK1 PWR Power supply of XO buffer 
G4 VRFCK2 PWR Power supply of XO buffer 
G5 VBBCK PWR Power supply of XO buffer 
G6 BBCK3 O BBCK clock output 
 
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT6685 Clock IC 
Datasheet 
Confidential A 
2 Electrical Characteristics 
2.1 Absolute Maximum Ratings over Operating Free-Air Temperature Range 
Stresses beyond those listed in Table 2-1 might cause permanent damage to the device. These numbers are stress ratings 
only, and functional operation of the device at these or any other conditions beyond those indicated in the operational 
sections of specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect 
the device reliability. 
 
Table 2-1. Absolute maximum ratings 
Parameter Condition Min. Typical Max. Unit 
Free-air temperature range  -40  85 °C 
Storage temperature range  -65  150 °C 
Battery pin input (1) Steady state -0.5  6 V 
Transient (< 10 ms) -0.5  7 V 
Non-battery power pin (2) Steady state -0.5  3 V 
Signal pins (3) Steady state -0.5  Vxx + 0.5 (3) V 
ESD robustness HBM 2,000   V 
Note: 
1. VBAT -> battery input pin 
2. Non-battery power input -> reference Table 1-1 (PWR pin but not connected with battery) 
3. Vxx = Max. operation voltage (refer to Table 2-2) 
 
2.2 Thermal Characteristics 
Parameter Condition Min. Typical Max. Unit 
Thermal resistance from 
junction to ambient In free air  70.5  °C/W 
Note: The device is mounted on a 4-metal-layer PCB and modeled per JEDEC51-7 condition. 
 
2.3 Pin Voltage Range 
The table below lists the operation range voltages for all MT6685 I/O pins. 
 
Table 2-2. Pin voltage range 
Symbol Voltage range Unit 
VAUX18 0~1.98 V 
VRTC 0~3.1 V 
AUXADC_VIN4 0~1.98 V 
AUXADC_VIN2 0~1.98 V 
RTC_INT 0~5 V 
SDA 0~1.98 V 
AVSS18_AUXADC 0 V 
AUXADC_VIN5 0~1.98 V 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT6685 Clock IC 
Datasheet 
Confidential A 
Symbol Voltage range Unit 
AUXADC_VIN3 0~1.98 V 
FAULT_B 0~5 V 
RTC32K_1V8_F 0~1.98 V 
SCL 0~1.98 V 
VREF 0~1.32 V 
AVSS_VREF 0 V 
EN 0~5 V 
WDTRSTB_IN 0~1.98 V 
RTC32K_1V8_0 0~1.98 V 
SRCLKENA0 0~1.98 V 
DVDD18_DIG 0~1.98 V 
VBAT 0~5 V 
RFCK1B 0~1.54 V 
RFCK2B 0~1.54 V 
BBCK2 0~1.32 V 
FSOURCE 0~5 V 
AUXADC_VIN1 0~1.98 V 
DVDD18_IO 0~1.98 V 
RFCK1A 0~1.54 V 
RFCK2A 0~1.54 V 
BBCK1 0~1.32 V 
BBCK5 0~1.32 V 
XTAL2 0~1.32 V 
AVSS_XO 0 V 
AVSS_RFCK1 0 V 
AVSS_RFCK2 0 V 
DGND 0 V 
BBCK4 0~1.32 V 
XTAL1 0~1.98 V 
VXO 0~1.76 V 
VRFCK1 0~1.54 V 
VRFCK2 0~1.54 V 
VBBCK 0~1.32 V 
BBCK3 0~1.32 V 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT6685 Clock IC 
Datasheet 
Confidential A 
2.4 Recommended Operating Range 
Table 2-3. Operation condition 
Parameter Condition Min. Typical Max. Unit 
Ambient temperature (TA)  -30  85 °C 
Junction temperature (TJ)  -30  125 °C 
 Operating input voltage   3.05 (Note)  5 V 
Note: This minimum input voltage still needs to check the detailed test conditions for each function in specification table. 
 
2.5 Electrical Characteristics 
• VBAT = 2.6~5V, minimum loads applied on all outputs, unless otherwise noted. 
• Typical values are at TA = 25°C. 
Table 2-4. General electrical specifications 
Parameter Condition Min. Typical Max. Unit 
Operation ground current 
Normal mode1 VBAT = 4V, normal mode   307  uA 
VIO18 = 1.8V, normal mode  18  mA 
Standby mode2 
VBAT = 4V, low-power mode  66  μA 
VIO18= 1.8V, low-power 
mode  277  μA 
Power-down leakage current 
mode3 
VBAT = 4V, off mode 
Temp = 25° C   88 uA 
Under voltage lock-out (UVLO) 
Under voltage falling threshold  2.45 2.5 2.55 V 
Under voltage rising threshold  2.75 2.8 2.85 V 
 EN 
High voltage  0.9   V 
Low voltage    0.4 V 
Pull low resistor   2M  Ω 
RTC_INT 
Output high   VSYS-0.4   V 
Output low     0.2 V 
Control input voltage 
Control input high (SPMI)   0.7*VIO   V 
Control input low (SPMI)     0.3*VIO V 
Control input high (SRCLKEN 
related)   0.75*VIO   V 
Control input low (SRCLKEN 
related)     0.25*VIO V 
1. Normal mode is the supply current from a main battery and VIO18 separately with MT6685W on. Clock with 20 pF load and regulator 
outputs are unloaded. See Table 2-5 for more information. 
2. Standby mode is the supply current from a main battery and VIO18 separately with MT6685W in standby mode. Clock with 20 pF load 
and regulator outputs are unloaded. See Table 2-6 for more information. 
3. Power-down leakage is the total supply current from a main battery with MT6685 off. 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT6685 Clock IC 
Datasheet 
Confidential A 
Table 2-5. Normal mode and voltage supplies 
Resource Mode Voltage supply 
Regulator 
VRTC ON VBAT 
DVDD18_DIG ON VBAT 
VAUX18 ON VBAT 
VXO ON VIO18 
VRFCK1 ON VIO18 
VRFCK2 ON VIO18 
VBBCK ON VIO18 
Infrastructure 
VREF ON VBAT 
Clocking 
RFCK1A ON VIO18 
RFCK1B ON VIO18 
RFCK2A ON VIO18 
RFCK2B ON VIO18 
BBCK1 ON VIO18 
BBCK2 ON VIO18 
BBCK3 ON VIO18 
BBCK4 ON VIO18 
BBCK5 ON VIO18 
RTC32K_1V8_0 ON VIO18 
RTC32K_1V8_F ON VIO18 
 
Table 2-6. Standby mode and voltage supplies 
Resource Mode Voltage supply 
Regulator 
VRTC ON VBAT 
DVDD18_DIG ON VBAT 
VAUX18 OFF VBAT 
VXO ON VBAT 
VRFCK1 OFF VIO18 
VRFCK2 OFF VIO18 
VBBCK OFF VIO18 
Infrastructure 
VREF ON VBAT 
Clocking 
RFCK1A OFF VIO18 
RFCK1B OFF VIO18 
RFCK2A OFF VIO18 
RFCK2B OFF VIO18 
BBCK1 OFF VIO18 
BBCK2 OFF VIO18 
BBCK3 OFF VIO18 
BBCK4 OFF VIO18 
BBCK5 OFF VIO18 
RTC32K_1V8_0 ON VIO18 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT6685 Clock IC 
Datasheet 
Confidential A 
Resource Mode Voltage supply 
RTC32K_1V8_F ON VIO18 
 
Table 2-7. Off mode and voltage supplies 
Resource Mode Voltage supply 
Regulator 
VRTC ON VBAT 
DVDD18_DIG ON VBAT 
VAUX18 OFF VBAT 
VXO OFF VBAT 
VRFCK1 OFF VIO18 
VRFCK2 OFF VIO18 
VBBCK OFF VIO18 
Infrastructure 
VREF ON VBAT 
Clocking 
RFCK1A OFF VIO18 
RFCK1B OFF VIO18 
RFCK2A OFF VIO18 
RFCK2B OFF VIO18 
BBCK1 OFF VIO18 
BBCK2 OFF VIO18 
BBCK3 OFF VIO18 
BBCK4 OFF VIO18 
BBCK5 OFF VIO18 
RTC32K_1V8_0 OFF VIO18 
RTC32K_1V8_F OFF VIO18 
 
2.6 Regulator Output 
2.6.1 Regulator Output (LDO) 
Table 2-6. VAUX18 specifications 
Parameter Condition Min. Typical Max. Unit 
Vin range  3 - 5 V 
Vout  - 1.84 - V 
Cout  - 1 - uF 
Turn-on rise time To within 1% of final voltage - - 250 us 
Quiescent current  - 52 - uA 
Power-down current VEN = GND, shutdown - - 0.1 uA 
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT6685 Clock IC 
Datasheet 
Confidential A 
Table 2-7. DVDD18_DIG specifications 
Parameter Condition Min. Typical Max. Unit 
Vin range  2.5 4 5 V 
Vout  - 1.8 - V 
Cout  - 1 - uF 
Turn-on rise time To within 1% of final voltage - - 300 us 
Quiescent current  - 6 - uA 
Power-down current VEN = GND, shutdown - - 0.1 uA 
 
Table 2-8. VXO_LDO specifications 
Parameter Condition Min. Typical Max. Unit 
Vin range   1.8  V 
Vout  - 1.6 - V 
Cout  - 1 - uF 
Turn-on rise time To within 1% of final voltage - - 300 us 
Quiescent current  - 300 - uA 
Power-down current VEN = GND, shutdown - - 0.1 uA 
 
Table 2-9. VRFCK1/VRFCK2_LDO specifications 
Parameter Condition Min. Typical Max. Unit 
Vin range   1.8  V 
Vout  - 1.4 - V 
Cout  - 1 - uF 
Turn-on rise time To within 1% of final voltage - - 300 us 
Quiescent current  - 255 - uA 
Power-down current VEN = GND, shutdown - - 0.1 uA 
 
Table 2-10. VBBCK_LDO specifications 
Parameter Condition Min. Typical Max. Unit 
Vin range   1.8  V 
Vout  - 1.2 - V 
Cout  - 1 - uF 
Turn-on rise time To within 1% of final voltage - - 300 us 
Quiescent current  - 75 - uA 
Power-down current VEN = GND, shutdown - - 0.1 uA 
 
Table 2-11. VRTC_LDO specifications 
Parameter Condition Min. Typical Max. Unit 
Vin range  - 4 5 V 
Vout  - 2.8 - V 
Cout  - 22 - uF 
Turn-on rise time To within 1% of final voltage - - 10 mS 
Quiescent current  - 3.5 - uA 
Power-down current VEN = GND, shutdown - - 0.5 uA 
 
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT6685 Clock IC 
Datasheet 
Confidential A 
2.7 AUXADC 
Table 2-12. XOADC specifications 
Parameter Condition Min. Typical Max. Unit 
ADC reference voltage   - 1.84 - V 
ADC resolution (LSB)   - 56.15 - uV 
ADC absolute accuracy   - - 17.54 mV 
AUXADC_VIN1-5 voltage 
range Guaranteed 0.04 - 1.78 V 
AUXADC_VIN1-5 input 
impedance  10M    
100 K pull-up error Trimmed value - ±1 - % 
400 K pull-up error Trimmed value - ±1 - % 
30 K pull-up error Trimmed value - ±1 - % 
Pull-up temperature 
coefficient   - ±200 - ppm/°C 
 
2.8 DCXO 
This clock IC integrates a core 26 MHz or 52 MHz XTAL oscillator (XO) and provides clock outputs for higher-level handsets. 
The output clocks are divided into three groups. 
 
• Low noise clock output for RF communication: RFCK1A and RFCK1B 
• Low noise clock output supporting divided-by-2 for RF communication: RFCK2A and RFCK2B 
• Low power clock output for baseband circuits: BBCK1~5 
 
Table 2-13. XO specifications 
Parameter Condition Title Min. Typical Max. Unit 
Frequency Set by external crystal Fdcxo  26/52  MHz 
Startup time VXO ready to Δfreq. < 1 ppm Tstartup   3 ms 
Supply voltage = VXO    1.6  V 
Supply current 
At LPM 
At FPM 
Measured form VXO   
 
30/60 
1.2/2.4 
 
 
uA 
mA 
Accuracy 
At FPM With calibrated CAPID  -5  5 ppm 
Accuracy 
At LPM   -100  100 ppm 
 
The buffer mode is supported by driving AC input from the XTAL1 pin. The input buffer clock requirements are listed below. 
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT6685 Clock IC 
Datasheet 
Confidential A 
Table 2-14. Reference input buffer specifications (XTAL1, buffer mode) 
Parameter Condition Min. Nom. Max. Unit 
Input impedance - Rp Rp || Cp @26 MHz 30   kΩ 
Input impedance - Cp Rp || Cp @26 MHz  2 3 pF 
 
2.8.1 Reference Output Buffer(s) Specifications 
Table 2-15. RF clock output buffer specifications (RFCK1A, RFCK1B, 52 MHz) 
Test conditions: TSX = 52 MHz, 20 pF capacitive load for each buffer output 
Parameter Condition Min. Typical Max. Unit 
Output frequency   52  MHz 
Output swing Set by VRFCK1 1.35 1.4 1.45 V 
Duty cycle  47  53 % 
Output impedance 
1X 40 50 60 Ω 
2X 25 30 35 Ω  
3X 20 25 30 Ω 
4X 12 15 18 Ω 
 Phase noise 
At 10 Hz  -77  dBc/Hz 
At 100 Hz  -107  dBc/Hz 
At 1 kHz  -136  dBc/Hz 
At 10 kHz  -153  dBc/Hz 
At 100 kHz  -160.5  dBc/Hz 
At 1 MHz  -161  dBc/Hz 
Supply current of each 
clock Measured from VRFCK1  2.2  mA 
 
RFCK1 measurement results: 
 
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT6685 Clock IC 
Datasheet 
Confidential A 
Table 2-16. RF clock output buffer specifications (RFCK1A, RFCK1B, 26 MHz) 
Test conditions: TSX = 26 MHz, 20 pF capacitive load for each buffer output 
Parameter Condition Min. Typical Max. Unit 
Output frequency   26  MHz 
Output swing Set by VRFCK1 1.35 1.4 1.45 V 
Duty cycle  47  53 % 
Output impedance 
1X 40 50 60 Ω 
2X 25 30 35 Ω  
3X 20 25 30 Ω 
4X 12 15 18 Ω 
 Phase noise 
At 10 Hz  -80  dBc/Hz 
At 100 Hz  -110  dBc/Hz 
At 1 kHz  -136  dBc/Hz 
At 10 kHz  -150  dBc/Hz 
At 100 kHz  -160.5  dBc/Hz 
At 1 MHz  -161  dBc/Hz 
Supply current of each 
clock Measured from VRFCK1  1.3  mA 
 
Table 2-17. RF Clock output buffer specifications (RFCK2A, RFCK2B, 52 MHz) 
Test conditions: TSX = 52 MHz, 20 pF capacitive load for each buffer output 
Parameter Condition Min. Typical Max. Unit 
Output frequency   52  MHz 
Output swing Set by VRFCK2 1.35 1.4 1.45 V 
Duty cycle  47  53 % 
Output impedance 
1X 40 50 60 Ω 
2X 25 30 35 Ω  
3X 20 25 30 Ω 
4X 12 15 18 Ω 
Phase noise 
At 10 Hz  -77  dBc/Hz 
At 100 Hz  -107  dBc/Hz 
At 1 kHz  -136  dBc/Hz 
At 10 kHz  -153  dBc/Hz 
At 100 kHz  -159.5  dBc/Hz 
At 1 MHz  -160  dBc/Hz 
Supply current of each 
clock Measured from VRFCK2  2.2  mA 
 
Table 2-18. RF Clock output buffer specifications (RFCK2A, RFCK2B, 26 MHz) 
Test conditions: TSX = 26 MHz, 20 pF capacitive load for each buffer output 
Parameter Condition Min. Typical Max. Unit 
Output frequency   26  MHz 
Output swing Set by VRFCK2 1.35 1.4 1.45 V 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT6685 Clock IC 
Datasheet 
Confidential A 
Parameter Condition Min. Typical Max. Unit 
Duty cycle  47  53 % 
Output impedance 
1X 40 50 60 Ω 
2X 25 30 35 Ω  
3X 20 25 30 Ω 
4X 12 15 18 Ω 
Phase noise 
At 10 Hz  -80  dBc/Hz 
At 100 Hz  -110  dBc/Hz 
At 1 kHz  -142.5  dBc/Hz 
At 10 kHz  -150.5  dBc/Hz 
At 100 kHz  -157.5  dBc/Hz 
At 1 MHz  -158  dBc/Hz 
Supply current of each 
clock Measured from VRFCK2  1.3  mA 
 
RFCK2 measurement results: 
 
 
Table 2-19. BB clock output buffer specifications (BBCK1~5, 26 MHz) 
Parameter Condition Min. Typical Max. Unit 
Output frequency   26  MHz 
Output swing Set by VBBCK 1.15 1.2 1.25 V 
Duty cycle  45  55 % 
Output impedance 
1X 50 60 70 Ω 
2X 45 55 65 Ω  
3X 40 50 60 Ω 
4X 30 40 50 Ω 
Phase noise 
At 10 Hz  -80  dBc/Hz 
At 100 Hz  -110  dBc/Hz 
At 1 kHz  -130  dBc/Hz 
At 10 kHz  -140  dBc/Hz 
At 100 kHz  -150  dBc/Hz 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT6685 Clock IC 
Datasheet 
Confidential A 
Parameter Condition Min. Typical Max. Unit 
At 1 MHz  -150  dBc/Hz 
RMS jitter Integrated BW: 1k ~ 13 MHz  2  ps 
Supply current of each clock Measured from VBBCK  1  mA 
 
BBCK measurement results: 
  
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT6685 Clock IC 
Datasheet 
Confidential A 
3 Functional Description 
3.1 General Description 
MT6685 is a fully integrated standalone DCXO target for 5G-Module clock provider. The following is the block diagram of 
MT6685 clock IC. 
 
 
Figure 3-1. MT6685 block diagram 
 
3.2 Clock IC Functional Blocks 
MT6685 manages the clock supply of 5G-Module and other portable systems. MT6685 includes the following analog 
functions. 
 
• RFCK and BBCK: Provides low noise and low power clock output  
• ADC: Provide 15-bit AUXADC for thermal/accessory detection monitor and measurement 
• Controller: Generates power-on/off sequence, system reset and exceptional handling function 
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT6685 Clock IC 
Datasheet 
Confidential A 
More detailed descriptions of each sub-block are explained in the following sections. 
 
3.2.1 Power-on/off Sequence 
This clock IC handles the power-on and power-off of the system. If the VSYS voltage is neither in the UVLO state nor in the 
thermal condition, there is only one method to power on the system. 
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
21 
Confidential A 
 
Notes 
1.  The timings are typical values; timing variation for T3/T4 is ±50%, for others are ±10%. 
2. The start-up time of VRTC is on the condition of output R/C. It takes longer if you use output cap only for VRTC output for BOM reduction. 
3. T11 and T12 are the normal off delay time with setting RG_SEQ_OFF = 1'b1 before system power off 
4. VBAT, VREF, VIDG18, and VRTC ready time should follow the sequence but don’t care about the actual time. They should be ready before EN goes high. 
Figure 3-2. MT6685HP/B power-on/off control sequence without XTAL by EN high 
 
 MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
22 
Confidential A 
EN high (pulling the EN pin to high level) 
Pulling EN high is a typical method to turn on the system. The system reset ends at the moment when all default-on 
regulators are sequentially turned on. 
 
Under-voltage lockout (UVLO) 
The UVLO state in the clock IC prevents start-up if the initial voltage of the VSYS is below UVLO_VTH. The judgment is done 
by VSYSSNS. It ensures that the system is powered on with the VSYS in good condition. The UVLO function is performed by 
a hysteretic comparator which ensures smooth power-on sequence. In addition, when the VSYS voltage is getting lower, it 
enters the UVLO state and the clock IC is turned off by itself, except for VRTC, to prevent further discharging. Once the 
clock IC enters the UVLO state, it draws low quiescent current. VRTC still works until DDLO disables it. 
 
Deep discharge lockout (DDLO) 
The clock IC enters the deep discharge lockout (DDLO) state when the VSYS voltage drops below DDLO_VTH. In this state, 
VRTC is shut down. Therefore, it draws very low quiescent current to prevent further discharging or even damage to the 
cells. 
 
3.2.2 Low Dropout Regulator (LDOs) and Application Reference 
Table 3-1. LDO types and brief specifications 
LDO name Controller power 
domain 
Input power 
domain 
Default 
voltage (V) 
Output 
voltage (V) 
Imax 
(mA) Application 
VBBCK DVDD18_IO DVDD18_IO ON (1.2) 1.2 10 CLOCK IC internal use 
(DCXO) 
VRFCK1/VRFCK2 DVDD18_IO DVDD18_IO ON (1.4) 1.4 10 CLOCK IC internal use 
(DCXO) 
VXO DVDD18_IO DVDD18_IO ON (1.6) 1.6 5 CLOCK IC internal use 
(DCXO) 
VAUX18 VBAT VBAT ON (1.84) 1.84 3 CLOCK IC internal use 
(AUXADC) 
VRTC28 VBAT VBAT ON (2.8) 2.8 2 CLOCK IC internal use 
(RTC) 
DVDD18_DIG VBAT VBAT ON (1.8) 1.8 10 CLOCK IC internal use 
(Digital block) 
 
3.2.3 AUXADC 
3.2.3.1 Block Description 
The auxiliary ADC includes the following functional blocks: 
 
1. Analog multiplexer: Selects signal from one of the ADC inputs. Real-world messages to be monitored, e.g., 
temperature, should be transferred to the voltage domain. 
2. Pull-high resistor: Input voltage is defined by pull-high resistor and thermistor. 
3. Input buffer: Isolates external nodes from internal resistance, and drives A/D converter 
4. 15-bit A/D converter: Converts the multiplexed input signal to 15-bit digital data. 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
23 
Confidential A 
Table 3-2. Application and input range of XOADC channels 
Channel Application Input range (V) 
0 AUXADC_VIN1-4 0.04~1.78 
0 AUXADC_VIN5 or ext. 100-k R 0.04~1.78 
Others Internal use N/A 
 
3.2.4 Real-Time Clock 
The real-time clock (RTC) module provides time and data information. The clock is based on 32 kHz from DCXO or an 
embedded 32 kHz oscillator. In addition to providing timing data, an alarm interrupt is generated and can be used to power 
up the baseband core. Regulator interrupts corresponding to seconds, minutes, hours and days can be generated 
whenever the time counter value reaches a maximum value (e.g., 59 for seconds and minutes, 23 for hours, etc.). The year 
span up to 2,127 is supported. The maximum day-of-month values, which depend on the leap year condition, are stored in 
the RTC block. 
 
In MT6685, the RTC module only supports function without 32 kHz crystal. The RTC module has an embedded 32 kHz 
oscillator to assist life-time extension after DCXO 32 kHz clock is off. 
 
3.2.5 DCXO 
MT6685 clock IC integrates a core 26 MHz or 52M XTAL oscillator (XO) and supports 32 kHz RTC-removal low power mode. 
It also provides backward compatible (BCM) configurations for the previous solutions. There are four high performance 
(1.4VPP) and five low power (1.2VPP) external clock buffers for the entire system and one internal buffer for audio. 
 
The temperature sensing crystal with thermistor is connected between XTAL1 and XTAL2. 
 
3.2.5.1 32 kHz RTC Removal Mode 
In the low power mode, a 32 kHz clock is produced by a fractional-N divider (1st order sigma delta modulated) to replace 
the traditional 32 kHz XTAL. The capacitance is minimized for significant current reduced. 
 
Parameter Condition Min. Nom. Max. Unit 
RTC32K_1V8_0 frequency Averaged value  32768  Hz 
RTC32K_1V8_F frequency Averaged value  26M/800(Note)  Hz 
XO LPM current 
consumption 
Low power mode 
With all capacitors switched off and 
auto-amplitude calibration on 
 60  μA 
Duty cycle  45  55 % 
Settling time    5 ms 
Frequency variation 
After system calibration  Same as DCXO  ppm 
Over temperature -30°C to 85°C   15 ppm 
Uncalibrated - total variation   200 ppm 
Note: Reserve XO_DIG32K_FIXCK_SEL (default 1’b0) to select /800 (1’b0) or /792 (1’b1) 32K clock 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
24 
Confidential A 
3.2.6 Interrupt and Watchdog 
3.2.6.1 Interrupt 
See below for the interrupt list of the clock IC to inform BB IC: 
 
1. LDO OC interrupt 
The clock IC supports LDO OC interrupt generation. It is issued if any one of the LDOs has OC condition. 
2. RTC interrupt 
 
3.2.6.2 Watchdog Reset 
WDTRSTB_IN is the watchdog reset from AP . The clock IC resets all modules to the initial state when receiving watchdog 
reset from AP . 
 
3.2.6.3 Booting Watchdog Reset 
The clock IC implements a booting watchdog function to prevent AP from not booting up correctly. After all default on 
powers are turned on, WDTRSTB_IN should be set high in a pre-determined time period, or the clock IC shuts down and 
resets all modules to the initial state if EN goes low. All powers are re-powered on again if the power-on condition still 
exists. 
 
3.2.7 SPMI Interface 
MT6685 uses a two-wire MIPI SPMI interface consisting of one clock and one data (SDATA and SCLK) to connect to the 
main chip. This interface allows the main chip to write commands to and read status from the clock IC. 
 
The SPMI slave provides access to the programmable functions and registers on the device. This protocol uses a two-wire 
interface for bi-directional communications between ICs connected to the bus. The two interface lines are the serial data 
line (SDATA) and the serial clock line (SCLK). Every device on the bus is assigned a unique address and acts as either a 
master or slave depending on whether it generates or receives the serial clock SCLK. The SCLK and SDATA lines should each 
have a pull-down resistor placed somewhere on the line and remain LOW even when the bus is idle. Note that the SCLK pin 
is not used for serial bus data transfer. MT6685 supports SPMI speed up to 26 MHz. 
 
• Access register in clock IC by MIPI SPMI protocol 
• Supports MIPI SPMI v2.0 read/write command full set (9 commands). 
• Supports MIPI SPMI v2.0 four power related command sets (reset/sleep/shutdown and wakeup). 
• Supports MIPI SPMI v2.0 RCS feature, which allows SPMI slave to send write commands with interrupt information to 
SPMI master and SPMI slave if the master supports RCS function. 
 
MT6685 MIPI SPMI slave supports the following formats. 
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
25 
Confidential A 
• Power related command 
o Reset 
o Sleep 
o Shutdown 
o Wakeup 
• Register read/write command 
o Register 0 write 
o Register read/write 
o Extended register read/write 
o Extended register read/write long 
• Slave issued RCS command 
o Master write 
o Extended register write 
 
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
26 
Confidential A 
3.2.8 GPIO 
3.2.8.1 GPIO List 
Table 3-3. MT6685 GPIO list 
 
 
 MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
27 
Confidential A 
3.2.8.2 GPIO Specifications 
Table 3-4. MT6685 GPIO electrical characteristics 
Parameter Description Min. Typical Max. Unit 
Input 
VIH Input logic high voltage 0.75*VIO   VIO + 0.3 V 
VIL Input logic low voltage -0.3   0.25*VIO V 
Rpu Input pull-up resistance 40 75 190 KΩ 
Rpd Input pull-down resistance 40 75 190 KΩ 
Output 
VOH (DC) DC output logic high voltage 0.75*VIO     V 
VOL (DC) DC output logic low voltage     0.25*VIO V 
Leakage 
IIN Input leakage current (any input 0V < VIN < 
VDDIO) -5   5 uA 
IOZ Tri-state output leakage current -5   5 uA 
IIN Input leakage current (VIN = 3.3V/0V) for 
floating nwell I/O -10   10 uA 
IOZ Tri-state output leakage current for floating 
nwell I/O -10   10 uA 
 
3.3 Register Table and Description 
Module name: MT6685_PMIC_Register_Mapping_(E1) Base address: (+0h) 
Address Name Width Register Function 
0000000C PONSTS 8 Power on Source Record Register 
0000000D POFFSTS0 8 Power off Source Record Register 0 
0000000E POFFSTS1 8 Power off Source Record Register 1 
00000010 PSTSCTL 8 Power on/off Status Control 
00000013 PG_SDN_STS0 8 Power Good Shutdown Status Register 0 
00000014 OC_SDN_STS0 8 OC Shutdown Status Register 0 
00000127 TOP_RST_MISC 8 Reset Control Misc 
0000079A DCXO_EXTBUF1_CW0 8 DCXO External Buffer Control 1 
0000079B DCXO_EXTBUF2_CW0 8 DCXO External Buffer Control 2 
0000079C DCXO_EXTBUF3_CW0 8 DCXO External Buffer Control 3 
0000079D DCXO_EXTBUF4_CW0 8 DCXO External Buffer Control 4 
0000079E DCXO_EXTBUF5_CW0 8 DCXO External Buffer Control 5 
0000079F DCXO_EXTBUF6_CW0 8 DCXO External Buffer Control 6 
000007A0 DCXO_EXTBUF7_CW0 8 DCXO External Buffer Control 7 
000007A1 DCXO_EXTBUF8_CW0 8 DCXO External Buffer Control 8 
000007A2 DCXO_EXTBUF9_CW0 8 DCXO External Buffer Control 9 
000007A3 DCXO_EXTBUF10_CW0 8 DCXO External Buffer Control 10 
000007BC DCXO_32KDIV_CW1_L 8 DCXO 32KDIV Control Code Word 1 [7:0] 
000007BD DCXO_32KDIV_CW1_H 8 DCXO 32KDIV Control Code Word 1 [15:8] 
000007BE DCXO_32KDIV_CW2_L 8 DCXO 32KDIV Control Code Word 2 [7:0] 
000007BF DCXO_32KDIV_CW2_H 8 DCXO 32KDIV Control Code Word 2 [15:8] 
000007C0 DCXO_CDAC_CW1 8 DCXO CDAC Control Code Word 1 
000007C2 DCXO_AAC_CW1 8 DCXO AAC Control Code Word 1 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
28 
Confidential A 
Address Name Width Register Function 
000007F0 DCXO_AAC_ELR_0 8 DCXO AAC ELR 0 Register 
00000A0C STRUP_ANA_CON4 8 STRUP Control Register 4 
00001088 SDMADC_ADC0_L 8 SDMADC ADC Register 0 L Byte 
00001089 SDMADC_ADC0_H 8 SDMADC ADC Register 0 H Byte 
0000108A SDMADC_STA0 8 SDMADC_STA0 
 
 
0000000C PONSTS  Power on Source Record Register 00000001 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name                STS_EN
ON 
Type                RO 
Reset                1 
 
Bit(s) Name Description 
0 STS_ENON Power on for EN press 
   
 
0000000D POFFSTS0  Power off Source Record Register 0 00000000 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         STS_PU
PSRC    STS_PS
OC 
STS_PG
FAIL 
STS_UV
LO_VSY
S 
STS_DD
LO 
Type         RO    RO RO RO RO 
Reset         0    0 0 0 0 
 
Bit(s) Name Description 
7 STS_PUPSRC Power off for power on source missing 
3 STS_PSOC Power off for default on regulator OC 
2 STS_PGFAIL Power off for PWRGOOD failure 
1 STS_UVLO_VSYS Power off for UVLO VSYS event 
0 STS_DDLO Power off for DDLO event 
   
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
29 
Confidential A 
0000000E POFFSTS1  Power off Source Record Register 1 00000000 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name             
STS_UV
LO_VIO
18 
STS_EN
OFF_SE
Q 
STS_EN
OFF  
Type             RO RO RO  
Reset             0 0 0  
 
Bit(s) Name Description 
3 STS_UVLO_VIO18 Power off for UVLO VIO18 event 
2 STS_ENOFF_SEQ Power off for EN sequence off 
1 STS_ENOFF Power off for EN immediately off 
   
 
00000010 PSTSCTL  Power on/off Status Control 00000000 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name               
RG_PO
NSTS_C
LR 
RG_POF
FSTS_CL
R 
Type               RW RW 
Reset               0 0 
 
Bit(s) Name Description 
1 RG_PONSTS_CLR Clears PONSTS 
0 RG_POFFSTS_CLR Clears POFFSTST and PG/OC status 
   
 
00000013 PG_SDN_STS0  Power Good Shutdown Status Register 0 0000007F 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name          
STRUP_
VAUX18
_PG_ST
ATUS 
 
STRUP_
VRFCK2
_PG_ST
ATUS 
STRUP_
VRFCK1
_PG_ST
ATUS 
STRUP_
VBBCK_
PG_STA
TUS 
STRUP_
VRTC28
_PG_ST
ATUS 
 
Type          RO  RO RO RO RO  
Reset          1  1 1 1 1  
 
Bit(s) Name Description 
6 STRUP_VAUX18_PG_STATUS Shutdown PG status (cleared by software) 
  0: Power not good 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
30 
Confidential A 
Bit(s) Name Description 
  1: Power good 
4 STRUP_VRFCK2_PG_STATUS Shutdown PG status (cleared by software) 
  0: Power not good 
  1: Power good 
3 STRUP_VRFCK1_PG_STATUS Shutdown PG status (cleared by software) 
  0: Power not good 
  1: Power good 
2 STRUP_VBBCK_PG_STATUS Shutdown PG status (cleared by software) 
  0: Power not good 
  1: Power good 
1 STRUP_VRTC28_PG_STATUS Shutdown PG status (cleared by software) 
  0: Power not good 
  1: Power good 
   
 
00000014 OC_SDN_STS0  OC Shutdown Status Register 0 00000000 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name          
STRUP_
VAUX18
_OC_ST
ATUS 
 
STRUP_
VRFCK2
_OC_ST
ATUS 
STRUP_
VRFCK1
_OC_ST
ATUS 
STRUP_
VBBCK_
OC_STA
TUS 
STRUP_
VRTC28
_OC_ST
ATUS 
STRUP_
VXO_O
C_STAT
US 
Type          RO  RO RO RO RO RO 
Reset          0  0 0 0 0 0 
 
Bit(s) Name Description 
6 STRUP_VAUX18_OC_STATUS Shutdown OC status (cleared by software) 
  0: No OC 
  1: OC occurs. 
4 STRUP_VRFCK2_OC_STATUS Shutdown OC status (cleared by software) 
  0: No OC 
  1: OC occurs. 
3 STRUP_VRFCK1_OC_STATUS Shutdown OC status (cleared by software) 
  0: No OC 
  1: OC occurs. 
2 STRUP_VBBCK_OC_STATUS Shutdown OC status (cleared by software) 
  0: No OC 
  1: OC occurs. 
1 STRUP_VRTC28_OC_STATUS Shutdown OC status (cleared by software) 
  0: No OC 
  1: OC occurs. 
0 STRUP_VXO_OC_STATUS Shutdown OC status (cleared by software) 
  0: No OC 
  1: OC occurs. 
   
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
31 
Confidential A 
00000127 TOP_RST_MISC  Reset Control Misc 00000000 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name               
RG_WD
TRSTB_
DEB 
RG_WD
TRSTB_
EN 
Type               RW RW 
Reset               0 0 
 
Bit(s) Name Description 
1 RG_WDTRSTB_DEB Enables WDTRSTB debounce 
  1'b0: No debounce 
  1'b1: Add debounce 1.6 ms 
0 RG_WDTRSTB_EN WDTRSTB (external watchdog) reset from AP 
  1'b0: Disable 
  1'b1: Enable 
   
 
0000079A DCXO_EXTBUF1_CW0  DCXO External Buffer Control 1 00000035 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         RG_XO_EXTBUF_
BBCK1_HD 
RG_XO_EXTBUF_BBCK1_
RSEL    
Type         RW RW    
Reset         0 0 1 1 0    
 
Bit(s) Name Description 
7:6 RG_XO_EXTBUF_BBCK1_HD Adjusts output driving strength 
XO control signal of BBCK1 output driving strength 
  00: Max. 
  01: Large 
  10: Small 
  11: Min. 
5:3 RG_XO_EXTBUF_BBCK1_RSEL Selects clock output impedance for impedance match 
  100: 60 ohm 
  101: 55 ohm 
  110: 50 ohm 
  111: 40 ohm 
   
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
32 
Confidential A 
0000079B DCXO_EXTBUF2_CW0  DCXO External Buffer Control 2 00000035 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         RG_XO_EXTBUF
_BBCK2_HD 
RG_XO_EXTBUF_BBCK2_
RSEL    
Type         RW RW    
Reset         0 0 1 1 0    
 
Bit(s) Name Description 
7:6 RG_XO_EXTBUF_BBCK2_HD Adjusts output driving strength 
XO control signal of BBCK2 output driving strength 
  00: Max. 
  01: Large 
  10: Small 
  11: Min. 
5:3 RG_XO_EXTBUF_BBCK2_RSEL Selects clock output impedance for impedance match 
  100: 60 ohm 
  101: 55 ohm 
  110: 50 ohm 
  111: 40 ohm 
   
 
0000079C DCXO_EXTBUF3_CW0  DCXO External Buffer Control 3 00000035 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         RG_XO_EXTBUF
_BBCK3_HD 
RG_XO_EXTBUF_BBCK3_
RSEL    
Type         RW RW    
Reset         0 0 1 1 0    
 
Bit(s) Name Description 
7:6 RG_XO_EXTBUF_BBCK3_HD Adjusts output driving strength 
XO control signal of BBCK3 output driving strength 
  00: Max. 
  01: Large 
  10: Small 
  11: Min. 
5:3 RG_XO_EXTBUF_BBCK3_RSEL Selects clock output impedance for impedance match 
  100: 60 ohm 
  101: 55 ohm 
  110: 50 ohm 
  111: 40 ohm 
   
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
33 
Confidential A 
0000079D DCXO_EXTBUF4_CW0  DCXO External Buffer Control 4 00000035 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         RG_XO_EXTBUF
_BBCK4_HD 
RG_XO_EXTBUF_BBCK4_
RSEL    
Type         RW RW    
Reset         0 0 1 1 0    
 
Bit(s) Name Description 
7:6 RG_XO_EXTBUF_BBCK4_HD Adjusts output driving strength 
XO control signal of BBCK4 output driving strength 
  00: Max. 
  01: Large 
  10: Small 
  11: Min. 
5:3 RG_XO_EXTBUF_BBCK4_RSEL Selects clock output impedance for impedance match 
  100: 60 ohm 
  101: 55 ohm 
  110: 50 ohm 
  111: 40 ohm 
   
 
0000079E DCXO_EXTBUF5_CW0  DCXO External Buffer Control 5 00000035 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         RG_XO_EXTBUF
_BBCK5_HD 
RG_XO_EXTBUF_BBCK5_
RSEL    
Type         RW RW    
Reset         0 0 1 1 0    
 
Bit(s) Name Description 
7:6 RG_XO_EXTBUF_BBCK5_HD Adjusts output driving strength 
XO control signal of BBCK5 output driving strength 
  00: Max. 
  01: Large 
  10: Small 
  11: Min. 
5:3 RG_XO_EXTBUF_BBCK5_RSEL Selects clock output impedance for impedance match 
  100: 60 ohm 
  101: 55 ohm 
  110: 50 ohm 
  111: 40 ohm 
   
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
34 
Confidential A 
0000079F DCXO_EXTBUF6_CW0  DCXO External Buffer Control 6 00000015 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name           RG_XO_EXTBUF_RFCK1A
_RSEL    
Type           RW    
Reset           0 1 0    
 
Bit(s) Name Description 
5:3 RG_XO_EXTBUF_RFCK1A_RSEL Selects clock output impedance for impedance match 
  000: 50 ohm 
  001: 30 ohm 
  010: 25 ohm 
  011: 15 ohm 
   
 
000007A0 DCXO_EXTBUF7_CW0  DCXO External Buffer Control 7 00000015 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name           RG_XO_EXTBUF_RFCK1B
_RSEL    
Type           RW    
Reset           0 1 0    
 
Bit(s) Name Description 
5:3 RG_XO_EXTBUF_RFCK1B_RSEL Selects clock output impedance for impedance match 
  000: 50 ohm 
  001: 30 ohm 
  010: 25 ohm 
  011: 15 ohm 
   
 
000007A1 DCXO_EXTBUF8_CW0  DCXO External Buffer Control 8 00000015 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name           RG_XO_EXTBUF_RFCK1C_
RSEL    
Type           RW    
Reset           0 1 0    
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 35

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
35 
Confidential A 
Bit(s) Name Description 
5:3 RG_XO_EXTBUF_RFCK1C_RSEL Selects clock output impedance for impedance match 
  000: 50 ohm 
  001: 30 ohm 
  010: 25 ohm 
  011: 15 ohm 
   
 
000007A2 DCXO_EXTBUF9_CW0  DCXO External Buffer Control 9 00000015 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name           RG_XO_EXTBUF_RFCK2A
_RSEL    
Type           RW    
Reset           0 1 0    
 
Bit(s) Name Description 
5:3 RG_XO_EXTBUF_RFCK2A_RSEL Selects clock output impedance for impedance match 
  000: 50 ohm 
  001: 30 ohm 
  010: 25 ohm 
  011: 15 ohm 
   
 
000007A3 DCXO_EXTBUF10_CW0  DCXO External Buffer Control 10 00000015 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name           RG_XO_EXTBUF_RFCK2B_
RSEL    
Type           RW    
Reset           0 1 0    
 
Bit(s) Name Description 
5:3 RG_XO_EXTBUF_RFCK2B_RSEL Selects clock output impedance for impedance match 
  000: 50 ohm 
  001: 30 ohm 
  010: 25 ohm 
  011: 15 ohm 
   
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 36

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
36 
Confidential A 
000007BC DCXO_32KDIV_CW1_L  DCXO 32KDIV Control Code Word 1 [7:0] 00000040 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         XO_32KDIV_NFRAC_FPM_L 
Type         RW 
Reset         0 1 0 0 0 0 0 0 
 
Bit(s) Name Description 
7:0 XO_32KDIV_NFRAC_FPM_L 32K divider fractional input during FPM 
Clock = 26 MHz 
   
 
000007BD DCXO_32KDIV_CW1_H  DCXO 32KDIV Control Code Word 1 [15:8] 0000001D 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name          XO_32KDIV_NFRAC_FPM_H 
Type          RW 
Reset          0 0 1 1 1 0 1 
 
Bit(s) Name Description 
6:0 XO_32KDIV_NFRAC_FPM_H 32K divider fractional input during FPM 
Clock = 26 MHz 
   
 
000007BE DCXO_32KDIV_CW2_L  DCXO 32KDIV Control Code Word 2 [7:0] 00000040 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         XO_32KDIV_NFRAC_LPM_L 
Type         RW 
Reset         0 1 0 0 0 0 0 0 
 
Bit(s) Name Description 
7:0 XO_32KDIV_NFRAC_LPM_L 32K divider fractional input during LPM 
Clock = 26 MHz 
   
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 37

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
37 
Confidential A 
000007BF DCXO_32KDIV_CW2_H  DCXO 32KDIV Control Code Word 2 [15:8] 0000001D 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name          XO_32KDIV_NFRAC_LPM_H 
Type          RW 
Reset          0 0 1 1 1 0 1 
 
Bit(s) Name Description 
6:0 XO_32KDIV_NFRAC_LPM_H 32K divider fractional input during LPM 
Clock = 26 MHz 
   
 
000007C0 DCXO_CDAC_CW1  DCXO CDAC Control Code Word 1 00000088 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         XO_CDAC_FPM 
Type         RW 
Reset         1 0 0 0 1 0 0 0 
 
Bit(s) Name Description 
7:0 XO_CDAC_FPM XO CDAC code (complement) during FPM 
   
 
000007C2 DCXO_AAC_CW1  DCXO AAC Control Code Word 1 0000000F 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name          
XO_AAC
_FPM_S
WEN 
XO_OSC
_ISEL_F
PM_MA
N 
XO_OSC_ISEL_FPM_M 
Type          RW RW RW 
Reset          0 0 0 1 1 1 1 
 
Bit(s) Name Description 
6 XO_AAC_FPM_SWEN 0: Disable 
  1: Software triggers AAC during FPM. 
5 XO_OSC_ISEL_FPM_MAN XO FPM ISEL enable manual mode 
4:0 XO_OSC_ISEL_FPM_M XO core FPM current settings if XO_AAC_ISEL_MAN = 1 
   
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
38 
Confidential A 
000007F0 DCXO_AAC_ELR_0  DCXO AAC ELR 0 Register 00000008 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name           RG_XO_AAC_VSEL 
Type           RW 
Reset           0 0 1 0 0 0 
 
Bit(s) Name Description 
5:0 RG_XO_AAC_VSEL XO AAC peak-hold Vref if XO_AAC_CMP_MAN = 1 
  4'b1111: 2.15V 
  4'b1110: 2.1V 
  4'b1101: 2.05V 
  4'b1100: 2.0V 
  4'b1011: 1.95V 
  4'b1010: 1.9V 
  4'b1001: 1.85V 
  4'b1000: 1.8V 
  4'b0111: 1.75V 
  4'b0110: 1.7V 
  4'b0101: 1.65V 
  4'b0100: 1.6V 
  4'b0011: 1.55V 
  4'b0010: 1.5V 
  4'b0001: 1.45V 
  4'b0000: 1.4V 
   
 
00000A0C STRUP_ANA_CON4  STRUP Control Register 4 00000000 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name            RG_FAU
LT_RST RGS_FAULT  
Type            RW RO  
Reset            0 0 0 0  
 
Bit(s) Name Description 
4 RG_FAULT_RST FAULT status reset 
3:1 RGS_FAULT FAULT status 
   
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 39

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
39 
Confidential A 
00001088 SDMADC_ADC0_L  SDMADC ADC Register 0 L Byte 00000000 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         SDMADC_ADC_OUT_CH0_L 
Type         RO 
Reset         0 0 0 0 0 0 0 0 
 
Bit(s) Name Description 
7:0 SDMADC_ADC_OUT_CH0_L SDMADC channel 0 output data 
   
 
00001089 SDMADC_ADC0_H  SDMADC ADC Register 0 H Byte 00000000 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name         
SDMAD
C_ADC_
RDY_CH
0 
SDMADC_ADC_OUT_CH0_H 
Type         RO RO 
Reset         0 0 0 0 0 0 0 0 
 
Bit(s) Name Description 
7 SDMADC_ADC_RDY_CH0 SDMADC channel 0 output data ready 
  0: SDMADC data are proceeding. 
  1: SDMADC data are ready. 
6:0 SDMADC_ADC_OUT_CH0_H SDMADC channel 0 output data 
   
 
0000108A SDMADC_STA0  SDMADC_STA0 00000000 
Bit 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 
Name                 
Type                 
Reset                 
Bit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 
Name                
SDMAD
C_ADC_
BUSY_I
N_CH0 
Type                RO 
Reset                0 
 
Bit(s) Name Description 
0 SDMADC_ADC_BUSY_IN_CH0 SDMADC CH0 busy status 
  0: Idle 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 40

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
40 
Confidential A 
Bit(s) Name Description 
  1: Busy 
   
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 41

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
41 
Confidential A 
4 Packaging 
4.1 Package Dimension 
 
Figure 4-1. Package dimension 
 
  
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 42

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
42 
Confidential A 
Appendix 
 
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only

## PDF物理页 43

MediaTek Proprietary and Confidential. © 2021 - 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6685 Clock IC 
Datasheet 
43 
Confidential A 
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
 For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only
MediaTek Confidential
For qhhuang@ pvetec.com Use Only


---
# SRC0325 CSI.rar

来源：8676/MTK8676硬件资料/IBIS/CSI.rar

SHA-256：3ffda3633b4942537992bbf391f3c0beab5d819f506bbf1d4addb9f423d46661

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0325.html)

## 压缩包目录

- CSI\23P_fp0728_bumpout1013_ball20221004A_20221014-1030_0807_03_try4L_1016_0930_stk_CSI_HFSSModel1.s120p（1420531638 字节）
- CSI\a10816_ibis571_mipi_csi_cphy.ibs（8414 字节）
- CSI\a10816_ibis572_mipi_csi_dphy.ibs（15358 字节）


---
# SRC0326 DPTX.rar

来源：8676/MTK8676硬件资料/IBIS/DPTX.rar

SHA-256：14b704107bcccfcd978027c39c4c2ce845cb577ad1df4d2068707436cba8de3c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0326.html)

## 压缩包目录

- DPTX\23P_v0927_1501_SSUSB.s16p（12856065 字节）
- DPTX\Release-AMI_N5TX.rar（402130 字节）


---
# SRC0327 DSI.rar

来源：8676/MTK8676硬件资料/IBIS/DSI.rar

SHA-256：377e840a30a0e2ce4bfa6d893711e96ddf1fb277b9fa5cdda995e5ecf577cd40

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0327.html)

## 压缩包目录

- DSI\23P_fp0728_bumpout1013_ball20221004A_20221014-1030_0807_03_try4L_1006_stk_DSI_HFSSModel1.s40p（160338019 字节）
- DSI\a10996_ibis_mdrv_r50_1000-00000782.ibs（353390 字节）
- DSI\a10996_ibis_mdrv_r50_1101-00000781.ibs（111321 字节）


---
# SRC0328 MT6197_ibis.rar

来源：8676/MTK8676硬件资料/IBIS/MT6197_ibis.rar

SHA-256：074e04a0dae59ffcde2801beebe4631ab9b9f872132af209e5cb3fd71672fead

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0328.html)

## 压缩包目录

- MT6197_ibis\digRF_Sparam\MT6197_HFSSModel1.s44p（39740969 字节）
- MT6197_ibis\MT6197_0581_r002915_digrf.ibs（232920 字节）
- MT6197_ibis\MT6197_dio_MIFI.ibs（4772348 字节）
- MT6197_ibis\MT6197_XOI_RC model.txt（73 字节）


---
# SRC0329 MT6197_XOI_RC model.txt

来源：MT6197_ibis\MT6197_XOI_RC model.txt

SHA-256：e22f88cbdceed1826f1f5f258c047d4679bd8c98614bd542baeae82c75792448

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0329.html)

## 全文 1

for 26MHz in，pls using RC model：

Model： 
R=9.794k ohm
C=2.22p F



---
# SRC0330 PCIE.rar

来源：8676/MTK8676硬件资料/IBIS/PCIE.rar

SHA-256：6a7c492cf5972dabac2e07f4a265741b489e1fe5c73a76526d9576c6eb93ead9

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0330.html)

## 压缩包目录

- PCIE\23P_fp0728_bumpout1013_ball20221004A_20221014-1030_0807_03_try4L_1006_1530_cut_PCIe_HFSSModel1 1.s12p（27883864 字节）
- PCIE\Release-AMI_N5TX.rar（402130 字节）
- PCIE\RX_AMI_model.rar（1687694 字节）


---
# SRC0331 SSUSB.rar

来源：8676/MTK8676硬件资料/IBIS/SSUSB.rar

SHA-256：36e7fa1f93e450d23fb6181356c30250c21d619b8756f8e4339c7d5cbaa84aef

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0331.html)

## 压缩包目录

- SSUSB\23P_v0927_1501_SSUSB.s16p（12856065 字节）
- SSUSB\Release-AMI_N5TX.rar（402130 字节）
- SSUSB\RX_AMI_model.rar（1687694 字节）


---
# SRC0332 U2.rar

来源：8676/MTK8676硬件资料/IBIS/U2.rar

SHA-256：b1c3ea09c6d9c78266524bb0a267224ad0e4b0ede3489ad98129b96f08467104

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0332.html)

## 压缩包目录

- U2\R007475_23P_HFSS_02_50_Ohm_new.s4p（9607 字节）
- U2\R007475_23P_Q3D_01_RLC_multi_480M_newx_PI.ckt（5246 字节）


---
# SRC0333 MT6363_Design_Notice_for_MT8676_V01.pdf

来源：8676/MTK8676硬件资料/MT6363_Design_Notice_for_MT8676_V01.pdf

SHA-256：232daa16ff71548a5fca2be532a3272bcd834a8b5f26ef9ede317c8b5f2d9928

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0333.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
MT6363 Design Notice
for MT8676
V0.1
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
Document Revision History
2
Revision Date Description
V0.1 2024/02/02 Initial.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
3
 MT6363 Introduction
– General Description
– MT8676 Power Grid
– Buck Power Plan
– LDO Power Plan
 Function Description
– Power ON/OFF Sequence
– UVLO, System Reset, Long Press PWR KEY, EXT_PMIC_PG, WATCHDOG, HOMEKEY, Thermal Shutdown, DCAP, SPAR
– I/O Power Domain
– Un-used Pin Configuration
– SPMI I/F
– AUXADC
Index
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
4
 DC/DC
– Buck Converter List
– Power Inductor Selection Guideline
– Schematics and Layout Notice
 LDO
– Input Cap Table
– Input Power Table
– Output Cap Table
– Layout Constraint
Index
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
5
 Analog Power PCB Layout Constraint
 Package
– Package Outline
– Ball-map
Index
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
MT6363 Introduction
6
MT6363 Design Notice
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
7
• The MT6363 is highly integrated with functions fulfilling all power requirements in smart phone 
system.
– Buck converters*10
- VS1, VS2, VS3, BUCK1 ~ 7
– LDOs*26
– “GPIO + AUXADC”*7
- GPIO function or AUXADC function can be chosen by pin-mux setting.
MT6363 – General Description
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
MT8676 Power Grid: MT6363
Note: 
1. VRFIO18 LDO powers to WCN IC; VCN15 LDO powers to RF IC.
8
RF Power
System 
Power
External 
Power
Camera 
Power
WCN 
Power Peripherals
Memory/
Storage 
Display 
Power
MT6363
ON
ON
DCDC
CORE
SRAM
BUCK1
5A
0.4V~1.19375V
ON
BUCK2
5A
0.4V~1.19375V
BUCK3
5A
0.4~1.19375V
BUCK5
5A
0.4~1.19375V
CORE
RF IC 
DIGRF
ON VIO18
600mA
1.8V
VA15
600mA
1.5/1.8V
VRF18
600mA
1.84V
RF IC
VRFIO18
600mA
1.82V
VCN15
300mA
1.7/1.82V
Consys, 
MT6637
VUFS18
1200mA
1.86V
DVDDIO
(IOBL)
ON
VA12_1
600mA
1.2V
VA12_2
600mA
1.2V
VCN13
800mA
1.35/0.9V
VRF13
800mA
1.34V
VRF12
600mA
1.24V
VSRAM_CPUB
600mA
0.5~1.2V
CPU-B 
SRAM
VUFS12
1200mA
1.2V
ABB
VSRAM_CPUM
600mA
0.5~1V
VSRAM_CPUL
1200mA
0.5~1V
CPU-L
SRAM
VSRAM_APU
600mA
0.5V~1V
VSRAM_DIGRF
600mA
0.5V~1V
VSRAM_MDFE
600mA
0.5V~1V
VSRAM_MODEM
1200mA
0.5V~01V
MODEM 
SRAM
ON
BUCK6
5A
0.4V~1.19375V
BUCK7
5A
0.4V~1.19375V
ON
BUCK4
5A
0.4V~1.19375V
ON
VS1
2.6A
1.8V~2.2V
ON
ABB
DVDDIO
VM18
600mA
1.84V
LPDDR5
VDD1
ON
RF IC
OFF
ON
VS2
4.5A
1.2V~1.5V
ON ABB
ABB
Consys, 
MT6637
OFF
ON
RF IC
RF IC
OFF
ON
ON
ON
VS3
4.5A
0.8V~1.193V
VRF09
800mA
0.9V
OFF RF IC
ON
ON RF IC, 
DIGRF SRAM
ON
ON
ON
VAUX18
50mA
1.84V
AUXADC
VEMC
800mA
2.55/2.9/3V
VTREF18
50mA
1.84V
VDIG18
10mA
1.8V
ON MT6363
DIG
ON
BatteryOFF
ON
VSYS
VIO75
Sink50mA
0.75V
ON
ON
S1-LDO
S2-LDO
S3-LDO
LDO
ON OFF
OFF
APU
SRAM
GPU
SRAM
UFS3.x
VCC
LPDDR5
VDD2H
MODEM
IO
CPU-M 
SRAM
12V
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
9
MT8676 Power Grid: MT6373, MT6319*2
9
MT6373
MT6319
RF Power
System 
Power
External 
Power
Camera 
Power
WCN 
Power Peripherals
Memory/
Storage 
Display 
Power
Buck1
5A
0.4V~1.19375V
GPUSTACK
VANT18
300mA
1.8V
VSYS
Buck2
5A
0.4V~1.19375V
Buck3
5A
0.4V~1.19375V
VS1
VAUD18
300mA
OFF
OFF ANT & GPS 
Component
ON
ON
Buck4
5A
0.4V~1.19375V
Buck5
5A
0.4V~1.19375V
Buck6
5A
0.4V~1.19375V
Buck0
5A
0.4V~1.19375V
LPDDR5
VDD2L
Buck7
5A
1.2V
Buck8
5A
0.4V~1.19375V
Buck9
5A
0.4V~1.19375V
ON
ON
APU
VRF18_AIF
1200mA
1.8V
OFF
VRFIO18_AIF
600mA
1.82V
OFF
VCN18IO
600mA
OFF
VRF13_AIF
1200mA
1.3V
OFF
VRF12_AIF
800mA
1.24V
VRF09_AIF
1200mA
0.9V
OFF
VSRAM_DIGRF_
AIF
600mA
0.85V
VS2
VS3
VAUX18
50mA
1.84V
VDIG18
10mA
1.8V
VCN33_1
800mA
3.3/3.4/3.5/3.6/2.8V
VSIM2
200mA
1.86V/2.9V/3V
VSIM1
200mA
1.86V/2.9V/3V
SIM1
VUSB
200mA
3.07V
USB2.0 / 
MT6338 Audio
VMCH
800mA
3.0/1.8/1.86/2.9V
SD card
VMC
200mA
3.0/1.8/1.86/2.9V
MT6373
DIG
AUXADCON VCN33_2
800mA
3.3/3.4/3.5/3.6/2.8V
SIM2
MSDC1
OFF
OFF
OFF
OFF
OFF
OFF
ON
ON
VEFUSE
200mA
1.2V/1.8V
eFuseOFF
VCN33_3
800mA
3.3/3.4/3.5/3.6/2.8V
OFF
VIO28
200mA
1.8V/2.8V/3V/3.3V
Sensor
VIBR
200mA
1.8V/2.8V/3V/3.3V
Vibrator
VFP
200mA
1.8V/2.8V/3V/3.3V
Finger Print
VTP
200mA
1.8V/2.8V/3V/3.3V
Touch Panel
OFF
OFF
OFF
OFF
ON
UFS
VCCQ
OFF
VMDDR
1200mA
0.75V
OFF
VDD2_LDO
Buck1
5A
0.4V~1.19375V
Buck2
5A
0.4V~1.19375V
Buck3
5A
0.4V~1.19375V
Buck4
5A
0.4V~1.19375V
MM
ON
MT6319OW/A
ON CPU-L
DSU
CPU-B
ON
Buck1
5A
0.4V~1.19375V
Buck2
5A
0.4V~1.19375V
Buck4
5A
0.4V~1.19375V
Buck3
5A
0.4V~1.19375V
CPU-M
ON
MT6319UW/A
ON LPDDR5
VDDQ
ON
DDR PHY
VMDDR
ON
ONRT5762E
(option)
UFS4.x
VCC
OFF
MT6637
MT6637
MT6338
AudioMM
SRAM
(option)
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
10
Circuit Type Buck Name
(Application name) Output Voltage (V) Boot Default (V) IOUT-MAX (mA)
Buck
BUCK1
(VDIGRF_PMU)
0.4 ~ 1.19
(6.25 mV/step) ON (0.7) 5,000
BUCK2/3
(DVDD_MODEM)
0.4 ~ 1.19
(6.25 mV/step) ON (0.8) 10,000
BUCK4
(DVDD_SRAM_CORE)
0.4 ~ 1.19
(6.25 mV/step) ON (0.75) 5,000
BUCK5
(EMI_VDD2H)
0.4 ~ 1.19
(6.25 mV/step) ON (1.05) 5,000
BUCK6/7
(DVDD_CORE)
0.4 ~ 1.19
(6.25 mV/step) ON (0.75) 10,000
VS1
(VS1_PMIC)
1.8 ~ 2.2
(12.5 mV/step) ON (2.0) 2,600
VS2
(VS2_PMIC)
1.2 ~ 1.5
(12.5 mV/step) ON (1.45) 4,500
VS3
(VS3_PMIC)
0.8 ~ 1.19
(6.25 mV/step) ON (1.05) 4,500
MT6363 – Buck Power Plan
Note: 
1) Please check the low power mode setting if peripheral application at VS1 or VIO18
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
11
Circuit Type LDO Name Output Voltage (V) Boot Default (V) IOUT-MAX (mA) Application
VDIG VDIG18 1.80 ON (1.8) 10 PMIC Interface
ALDO VAUX18 1.84 ON (1.84) 50 AUXADC
ALDO VTREF18 1.84 OFF 50 AUXADC pull-up
DLDO VEMC 2.55/3 ON (2.55) 800 UFS
MT6363 – LDO Power Plan (1/4)
Note: 
1) VDIG18, VAUX18, VTREF18 are PMIC internal reference power. DON’T share to other applications. 
2) Default OFF LDO, voltage is set by software. 
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
12
Circuit Type LDO Name Output Voltage (V) Boot Default (V) IOUT-MAX (mA) Application
SLDO VIO18 1.8 ON (1.8) 600 I/O
SLDO VA15 1.5 ON (1.5) 600 AP
SLDO VM18 1.84 ON (1.84) 600 DRAM
SLDO VRF18 1.84 OFF 600 RF
SLDO VRFIO18 1.82 OFF 600 Connectivity
SLDO VCN15 1.82 OFF 300 RF
SLDO VUFS18 1.86 ON (1.86) 1,200 UART IO
MT6363 – LDO Power Plan (2/4)
Note: 
1) VRFIO18 LDO powers to Connectivity IC
2) VCN15 LDO powers to RF IC.
3) Default OFF LDO, voltage is set by software. 
Dedicated for IO, 
not for other application
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
13
Circuit Type LDO Name Output Voltage (V) Boot Default (V) IOUT-MAX (mA) Application
SLDO VA12_1 1.2 ON (1.2) 600 AP
SLDO VA12_2 1.2 ON (1.2) 600 AP
SLDO VCN13 1.35 OFF 800 Connectivity
SLDO VRF13 1.34 OFF 800 RF
SLDO VRF12 1.24 ON (1.23) 600 RF
SLDO VUFS12 1.2 ON (1.2) 1200 AP
SLDO VSRAM_CPUB 0.5~1.1925 ON (0.75) 600 CPU_B SRAM
SLDO VSRAM_CPUM 0.5~1.1925 ON (0.75) 600 CPU_M SRAM
SLDO VSRAM_CPUL 0.5~1.1925 ON (0.75) 1,200 CPU_L SRAM
MT6363 – LDO Power Plan (3/4)
Note: 
1) Default OFF LDO, voltage is set by software. 
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
14
Circuit Type LDO Name Output Voltage (V) Boot Default (V) IOUT-MAX (mA) Application
SLDO VRF09 0.9 OFF 800 RF
SLDO VSRAM_MODEM 0.4~1.1925 ON (0.8) 1,200 MODEM SRAM
SLDO VSRAM_DIGRF 0.4~1.1925 ON (0.85) 600 DIGRF SRAM
SLDO VSRAM_MDFE 0.4~1.1925 ON (0.9) 600 GPU SRAM 
SLDO VSRAM_APU 0.4~1.1925 ON (0.75) 600 APU SRAM
MT6363 – LDO Power Plan (4/4)
Note: 
1) Default OFF LDO, voltage is set by software.
2) VSRAM_MDFE powers to GPU_SRAM
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
Function Description
15
MT6363 Design Notice
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
16
MT6363 – Power ON Sequence
TDx_ON (ms) PWRKEY = L
T (ms) Configuration Application
TD01_ON 140.0 - CHRDETB = L Start Power ON
TD00_ON 38.0 - PWRKEY = L Start Power ON
TD1_ON 10 48 VAUX18 AuxADC
TD2_ON 14 52 VS3 SLDO
TD3_ON 15.5 53.5 BUCK4 VSRAM_CORE
TD4_ON 17 55 VSRAM_APU APU SRAM
TD5_ON 17 55 VSRAM_MODEM MODEM SRAM
TD6_ON 18 56 VBUCK6 / VBUCK7 VCORE
TD7_ON 19.5 57.5 VBUCK2 / VBUCK3 VMODEM
TD8_ON 21 59 VBUCK1 VDIGRF
TD9_ON 22.5 60.5 VS2 SLDO
TD10_ON 24 62 VSRAM_MDFE GPU SRAM
TD11_ON 24 62 VSRAM_DIGRF RF IC, DIGRF SRAM
TD12_ON 25 63 VS1 SLDO
TD13_ON 26.5 64.5 VIO075 IO
TD14_ON 30.5 68.5 VA12_1 ABB
TD15_ON 30.5 68.5 VA12_2 ABB
TD16_ON 30.5 68.5 VRF12 RF
TD17_ON 30.5 68.5 VUFS12 ABB
TD18_ON 30.5 68.5 EXT_PMIC_EN1 Enable Sub-PMIC
TD19_ON 30.5 68.5 VUFS18 DVDDIO(IOBL)
TD20_ON 39 77 VA15 ABB
TD21_ON 41 79 VIO18 DVDDIO
TD22_ON 43 81 VM18 EMI_VDD1
TD23_ON 44.5 82.5 VEMC UFS VCC
TD24_ON 44.5 82.5 EXT_PMIC_EN2 Enable Sub-PMIC
TD25_ON 44.5 82.5 VSRAM_CPUL CPU_L SRAM
TD26_ON 45.5 83.5 VBUCK5 EMI_VDD2H
TD27_ON 53.5 91.5 VSRAM_CPUB CPU_B SRAM
TD28_ON 53.5 91.5 VSRAM_CPUM CPU_M SRAM
TD29_ON 70 109.5 SYSRSTB -
Note: 
1) The timing parameters TD1_ON~TDN_ON are typical values (variation: ± 10%).
2) The timing parameters TD00_ON~TD01_ON are typical values (variation: ± 20%).
PWRKEY TD00_ON
TD1_ON
TD2_ON
TDN_ON
VR1
VR2
VR(N-1)
VRN
  
  
TD(N-1)_ON
CHRDETB TD01_ON
<1ms
VSYS
VREF
VDIG18 <6ms
VSYS  2V
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
17
MT6373 – Power ON Sequence
Note: The timing parameters TD0_ON~TDN_ON are typical values (variation: ± 10%).
TDX_ON (ms) EN=Hi
T (ms) Configuration Application
TD0_ON 2.15~3.35 - EN = H
(EXT_PMIC_EN1) enable
TD1_ON 0 3.35 VAUX18 AUXADC
TD2_ON 3 6.35 VBUCK7 UFS VCCQ
TD3_ON 9.5 12.85 VUSB USB_PHY
TD4_ON 11 14.35 VBUCK6 MM SRAM
(option)
TD5_ON 13 16.35 VBUCK8
VBUCK9 APU
TD6_ON 17 20.35 VBUCK5 VDD2L
TD7_ON 17 20.35 VBUCK4 VMDDR
TD8_ON 22 25.35
VBUCK0
VBUCK1
VBUCK2
VBUCK3
GPU_STACK
EN TD0_ON
TD1_ON
TD2_ON
TDN_ON
VR1
VR2
VRN
  
  
<1ms
VSYS
VREF
VDIG18 <6ms
VSYS  2V
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
18
MT6319 – Power ON Sequence
MT6319COW T (ms) Configuration Application
TD0_ON 0.8 ~ 2.0 EN = H
(EXT_PMIC_EN2) Enable
TD1_ON 4 VBUCK3 CPU_L
TD2_ON 6 VBUCK1+2 MM
TD3_ON 12 VBUCK4 CPU_B
Note: The timing parameters are typical values (variation: ± 20%).
MT6319CUW T (ms) Configuration Application
TD0_ON 0.8 ~ 2.0 EN = H
(EXT_PMIC_EN2) Enable
TD1_ON 12 VBUCK3 EMI_VDDQ
TD2_ON 14 VBUCK1+2 CPU_M
TD3_ON 16 VBUCK4 No use
EN TD0_ON
TD1_ON
TD2_ON
VR1
VR2
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
19
MT6363 – Power OFF Sequence
TDX_OFF (ms) Configuration Application
TD0_OFF 0 SYSRSTB = L Start Power OFF
TD1_OFF 2 EXT_PMIC_EN2 Disable Sub-PMIC
TD2_OFF 10 EXT_PMIC_EN1 Disable Sub-PMIC
TD3_OFF 10 VSRAM_CPUB CPU_B SRAM
TD4_OFF 10 VSRAM_CPUM CPU_M SRAM
TD5_OFF 24 VSRAM_CPUL CPU_L SRAM
TD6_OFF 26 VBUCK5 EMI_VDD2H
TD7_OFF 30 VM18 EMI_VDD1
TD8_OFF 30 VEMC UFS_VCC
TD9_OFF 32 VIO18 IO
TD10_OFF 34 VA15 ABB
TD11_OFF 68 VUFS18 DVDDIO(IOBL)
TD12_OFF 68 VUFS12 ABB
TD13_OFF 68 VA12_1 ABB
TD14_OFF 68 VA12_2 ABB
TD15_OFF 68 VRF12 RF
TD16_OFF 70 VIO075 IO
TD17_OFF 76 VS1 SLDO
TD18_OFF 80 VSRAM_MDFE GPU SRAM
TD19_OFF 80 VSRAM_DIGRF DIGRF SRAM
TD20_OFF 82 VS2 SLDO
TD21_OFF 86 VBUCK1 VDIGRF
TD22_OFF 90 VBUCK2 / VBUCK3 VMODEM
TD23_OFF 94 VBUCK6 / VBUCK7 VCORE
TD24_OFF 98 VSRAM_APU APU SRAM
TD25_OFF 98 VSRAM_MODEM MODEM SRAM
TD26_OFF 102 VBUCK4 VSRAM_CORE
TD27_OFF 106 VS3 SLDO
TD28_OFF 106 VAUX18 AuxADC
Note: 
1. The timing parameters TD1_OFF~TDN_OFF are typical values (variation: ± 10%).
2. Power-OFF sequence starts by SYSRSTB = Hi to Lo.
3. VEMC/VAUX18 can be OFF by software driver control before SYSRSTB = L.
SYSRSTB
VF1 TD1_OFF
VF2
VF(N-1)
VFN
  
  
TD0_OFF
TD2_OFF
TD(N-1)_OFF
TDN_OFF
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
20
MT6373 – Power OFF Sequence
TDX_OFF (ms) Configuration Application
TD0_OFF < 0.2 EN = L
(EXT_PMIC_EN1) Disable
TD1_OFF 0 VBUCK4 VMDDR
TD2_OFF 4 VBUCK8
VBUCK9 APU
TD3_OFF 4 VBUCK5 VDD2L
TD4_OFF 8 VBUCK6 MM SRAM
(option)
TD5_OFF 12
VBUCK0
VBUCK1
VBUCK2
VBUCK3
GPU_STACK
TD6_OFF 16 VUSB USB_PHY
TD7_OFF 24 VAUX18 AUXADC
TD8_OFF 40 VBUCK7 UFS VCCQ
EN
VF1 TD1_OFF
VF2
VFN
  
  
TD0_OFF
TD2_OFF
TDN_OFF
Note: 
1. The timing parameters TD1_OFF~TDN_OFF are typical values (variation: ± 10%).
2. Power-OFF sequence is completed after SYSRSTB = L.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
21
MT6319 – Power OFF Sequence
Note: 
1. The timing parameters are typical values (variation: ± 20%).
2. Power-OFF sequence is completed after SYSRSTB=L
3. MM can be OFF by software driver control before SYSRSTB=L.
MT6319COW T (ms) Configuration Application
TD0_OFF <0.2 EN = L
(EXT_PMIC_EN2) Disable
TD1_OFF 0 VBUCK1+2 MM
TD2_OFF 4 VBUCK4 CPU_B
TD3_OFF 12 VBUCK3 CPU_L
MT6319CUW T (ms) Configuration Application
TD0_OFF <0.2 EN = L
(EXT_PMIC_EN2) Disable
TD1_OFF 0 VBUCK3 EMI_VDDQ
TD2_OFF 4 VBUCK1+2 CPU_M
TD3_OFF 8 VBUCK4 No use
VF1 TD1_OFF
VF2
TD0_OFF
TD2_OFF
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
22
MT6363 – UVLO (Under Voltage Lock Out)
MT6363 UVLO
Sensing pin VSYSSNS VBBSNS
UVLO high threshold 2.6V ~ 3.2V (0.1V/step)
Default: 2.9V
2.6V ~ 3.2V (0.1V/step)
Default: 2.9V
UVLO low threshold 2.0V ~ 2.9V (0.1V/step)
Default: 2.5V
2.5V ~ 2.9V (0.1V/step)
Default: 2.6V
Accuracy ± 50 mV ± 50 mV
Note: 
1. If UVLO_OFF is set < 2.5V, RG_UVLO2V0_DDLO_EN must be set to 1.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
Main PMIC
WDTRST B_IN
SYSRSTB
SoC
WATCHDOG
SYSRSTB
Sub PMIC
WDTRST B
23
MT6363 – System Reset
• SYSRSTB Function
- SYSRSTB is MT6363’s output only.
- Reset to the default value and force the SoC restoration
• SYSRSTB=Lo to Hi: MT6363 completes power-on sequence.
- There are two events (PWRKEY=Lo & CHRDETB=Lo) for MT6363 power-on sequence start.
• SYSRSTB=Hi to Lo: MT6363 power-off or exception off
- SYSRSTB pin output driving capability selection.
• 7.5 mA (default)
• Layout notice
• SYSRSTB and WDTRSTB_IN need to be kept far from noise traces. 
• If possible, add “GND” shielding to avoid noise coupling.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
24
MT6363 – CHRDETB
• CHRDETB
- There are two trigger events (PWRKEY=Lo & CHRDETB=Lo) for MT6363 power-on sequence.
• CHRDETB
- Internal pull-up 40KΩ to VBBSNS
- VIH: ≥ VBBSNS * 70%
- VIL: ≤ VBBSNS * 30%
- CHRDETB response time to power-on: 138ms ±20%
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
25
MT6363 – PWRKEY
• PWRKEY
- There are two trigger events (PWRKEY=Lo & CHRDETB=Lo) for MT6363 power-on sequence.
• PWRKEY
- Interrupt for press and release key
- Multi-Keys combination with HOMEKEY for long press shutdown
• Default: PWRKEY 8s long press shutdown
- VIH: ≥ 1.45V
- VIL: ≤ 0.3V
- PWRKEY response time to power-on: 35ms ±20%
PMIC-1
HOMEKEY
RESETB
SoC
SYSRSTB
PMIC-2
QONB
PWRKEY
1.8V
1.8V
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
26
MT6363 – PWRKEY Long Press Shutdown
• PWRKEY long press shutdown
- Timer spec.: 2/5/8 (default)/11 sec ±10%
- Timer can be set by software. (CLK source = internal 32 kHz)
- Key combination is selected by register.
• Long press shutdown: Multi-Keys combination 
- PWRKEY (default)
- PWRKEY + HOMEKEY 
- PWRKEY + HOMEKEY-2
- PWRKEY + HOMEKEY + HOMEKEY-2
• PWRKEY long press function
- Force a PMIC shutdown. (default)
• All power supplies are turned off except VDIG18.
- Disable PWRKEY long press shutdown function
• JUST change to others key combination and don’t let HOMEKEY/HOMEKEY-2 pull-down.
PMIC-1
HOMEKEY
RESETB
SoC
SYSRSTB
PMIC-2
QONB
PWRKEY
1.8V
1.8V
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
27
• HOMEKEY , HOMEKEY2 function
- Interrupt for press and release key
- Multi-Keys combination with PWRKEY for long press shutdown
- VIH: ≥ 0.7*(DVDD18_IO)
- VIL: ≤ 0.3*(DVDD18_IO)
- HOMEKEY/ HOMEKEY2 response time to interrupt: 34ms ±10%
MT6363 – HOMEKEY , HOMEKEY2
Ball name Function
GPIO8 HOMEKEY
GPIO9 HOMEKEY2
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
28
MT6363 – Others PMIC Exception Alarm
• To enable sub PMIC exception alarms:
- MT6363’s EXT_PMIC_PG should be connected to FAULTBof sub PMIC.
- MT6363’s EXT_PMIC_PG should be active low.
- MT6363’s EXT_PMIC_PG has internal pull-up resistor of 40 kΩ to VSYS.
- VIH: ≥ 0.7*VSYS
- VIL: ≤ 0.3*VSYS
• Sub PMIC exception conditions
- UVLO off
- OCP
- Thermal shutdown
- Sub PMIC VR power is not good.
Main PMIC
EXT_PMIC_EN
SYSRSTB
SoC
SYSRSTB
Sub PMIC
FAULTB EN
EXT_PMIC_PG
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
29
• SW watchdog reset function (default: off)
- MT6363 WDTRSTB_IN is input pin and should be connected to 
SoC WATCHDOG.
- If the SoC watchdog timeout is triggered, SoC will assert 
WATCHDOGto low.
- The PMICs will be reset if WDTRSTB_IN is logic low.
• Watchdog reset option
- RG reset: Reset PMIC register value. (default)
- Cold reset: Shut down PMIC and then watchdog will 
automatically re-power on. 
• HW PMIC reset function
- Response time: 1.7 ms
- Power source is VIO18_PMU.
Main PMIC
WDTRST B_IN
SYSRSTB
SoC
WATCHDOG
SYSRSTB
Sub PMIC
WDTRST B
MT6363 – SoC Watchdog Reset
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
150 ºC
110 ºC
PMU shuntdown
PMU
shutdown release
110 ºC
30
MT6363 – Thermal Shutdown
• HW control (±10°C)
- TJ > 150°C PMU HW shutdown 
- HW shutdown release when TJ < 110°C 
• Pull PWRKEY = L for next power-on sequence.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
31
MT6363 – DCAP
• Disable the charger in auto power on (DCAP) condition 
when the temperature is high.
- Enable flow
• Enable DCAP by RG setting when the charger is plugged in 
and BAT temp. > HT shutdown level (default: 60⁰C).
- Release flow
• DCAP will be disabled automatically when the charger is unplugged.
- Notice
• Enable DCAP function 
- Via MT6363 setting 
- MT6375’s CHRDETB keep Low w/o WATCHDOG reset while charger in exist.
※ DCAP enable flow needs to follow the programming guide.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
32
• Feature support condition
- This feature is a power reboot function to handle sudden battery power drop event.
- SPAR function is triggered by MT6685 where the RTC is designed in.
- Once SPAR occurs, RTC_INT will be pulled high to reboot MT6363. 
• Enabled by software
- There are three time settings can be selected.
• 0.3s, VRTC output needs coin cell or capacitor of > 2.2 uF
• 0.86s, VRTC output needs coin cell or capacitor of > 4.7 uF
• 1.83s, VRTC output needs coin cell or capacitor of > 22 uF
• Min. SPAR trigger condition: “duration of (VSYS < UVLO)” > 1 ms
SPAR
MT6363
RTC_INT
AP
SPMISPMI
FAULT_B
MT6685
EN
VRTC28
SPAR in 
RTC 
Macro
VSYS
UVLO/SPAR
falling
RTC Cap
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
33
Pin name Power source – ball name Power source domain
PWRKEY VBBSNS VSYS
HOMEKEY , 
HOMEKEY2 DVDD18_IO VIO18 (1.8V)
CHRDETB VBBSNS VSYS
SYSRSTB VIO18 VIO18 (1.8V)
EXT_PMIC_EN VSYSSNS VSYS
EXT_PMIC_PG VBBSNS VSYS
WDTRSTB_IN DVDD18_IO VIO18 (1.8V)
SRCLKEN_IN0,
SRCLKEN_IN1 DVDD18_IO VIO18 (1.8V)
EINT DVDD18_IO VIO18 (1.8V)
RTC_INT VSYSSNS VSYS
MT6363 – I/O Power Domain
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
34
Pin name Description If un-used
EXT_PMIC_EN1
EXT_PMIC_EN2 Ext. PMIC enable pin Floating
EXT_PMIC_PG Ext. PMIC PG pin Floating
HOMEKEY
HOMEKEY2 Key Floating
RTC_INT RTC interrupt 
for SPAR power-on Floating
AUXADC_VINx AuxADC GND
LDO_XX Default OFF
un-used LDOs
w/ remote sense: config as shown
w/o remote sense: Floating 
MT6363 – Un-used Pin Configuration
Note: 
1. Please check HOMEKEY/HOMEKEY-2 connection w/ PWRKEY long press shutdown function.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 35

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
35
Ball: EINT VEMC boot voltage
Pull low to GND 2.55V
Pull high to VIO18 3V
MT6363 – HW Trapping for VEMC Boot Voltage
• UFS VCC 2.5V or 3V
- VEMC LDO with HW trapping design in MT6363 for UFS2.x VCC=3V & UFS3.x VCC=2.5V
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 36

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
36
SPMI
• The SPMI is a two-wire interface: 
- 1 serial bi-directional data signal (SDATA) 
- 1 clock signal (SCLK) controlled by master
• SPMI allows the use of up to PMIC*8 pcs on a single bus.
• The power source of SPMI I/O is DVDD18_IO.
• MT6363 supports up to 26 MHz for SPMI speed with load up to 50 pF.
Layout Constraint of SPMI
• SPMI_SCL and SPMI_SDA layout traces should be differential and use GND shielding to prevent noise coupling. 
(e.g., VBUS, BUCK_LX, SWCHR_LX, BUCK input pin)
• The traces should not overlap with noise sources on layers N+1 and N-1. 
(e.g. VBUS, BUCK_LX, SWCHR_LX, BUCK input pin)
• The max. length of SPMI bus between SoC and PMIC should be less than 6 inches.
MT6363 – SPMI I/F
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 37

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
37
• GPIO1~GPIO7(AUXADC_VIN1~AUXADC_VIN7)
- The power source of AUXADC_VINx is VAUX18.
- There are three pull-up voltage options:
• Internal pull-up to VAUX18: internal pull-up resistor (30 kΩ / 100 kΩ / 400 kΩ).
- The capacitance at AUXADC_VINx should be NC.
• External pull-up to VTREF18 (pull- up resistor must be higher than 10kΩ)
- The capacitance at AUXADC_VINx should be less than 1 nF and it should be put near the PMIC side.
• External pull-up to VIO18 (pull- up resistor must be higher than 10kΩ)
- The capacitance at AUXADC_VINx should be less than 1 uF and it should be put near the PMIC side.
MT6363 – AUXADC
Ball name AUXADC_VINx Application
GPIO1 AUXADC_VIN1
General purpose
GPIO2 AUXADC_VIN2
GPIO3 AUXADC_VIN3
GPIO4 AUXADC_VIN4
GPIO5 AUXADC_VIN5
GPIO6 AUXADC_VIN6
GPIO7 AUXADC_VIN7
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
• VIO075 is bias circuit, not LDO output.
Bias: VIO075
Circuit type IP name Output voltage (V) Boot default (V) Application
VBIASN VIO075 0.75 ON (0.75) I/O
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 39

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
Function Description – DC-DC
39
MT6363 Design Notice
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 40

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
MT6363 buck
(Application) Output de-coupling (min.) Output de-coupling (max.) Total COUT value
(after de-rating)
VS1
(VS1_PMIC)
0.47 uH
10 uF*3
0.47 uH
22 uF*2 ≥ 15.6 uF #1
VS2
(VS2_PMIC)
0.47 uH
10 uF*3
0.47 uH
22 uF*2 ≥ 15.6 uF #1
VS3
(VS3_PMIC)
0.47 uH
10 uF*3
0.47 uH
22 uF*2 ≥ 15.6 uF #1
BUCK1
(VDIGRF_PMU)
0.24 uH
10uF*2
0.24 uH
22 uF*2 ≥ 10.3 uF #1
BUCK2 + BUCK3 
(DVDD_MODEM)
0.24 uH*2
10 uF*6
0.24 uH*2
22 uF*4 ≥ 30.9 uF #1
BUCK4 
(DVDD_SRAM_CORE)
0.47 uH
10uF*3
0.47 uH
22 uF*2 ≥ 15.6 uF #1
BUCK5 
(EMI_VDD2H)
0.24 uH
10uF*12
0.24 uH
22 uF*7 ≥ 61.8 uF #1
BUCK6 + BUCK7 
(DVDD_CORE)
0.24 uH*2
10uF*6
0.24 uH*2
22uF*4 ≥ 30.9 uF #1
40
Note #1: Total COUT value @1V derating for AC 
0.01Vrms and overall operating temperature. 
DC-DC: Buck Converter List
Note:  1. Cap replacement plan: 10uF/0402/6.3V/X5R *2ea <-> 22uF/0603/6.3V/X5R *1ea
2. There is no output current margin for peripheral application in VS1 & VS2 power domains.
3. Add external buck for VS1 or VS2 peripheral application if needed.
4. Please check the low power mode setting if peripheral application at VS1 or VIO18
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 41

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
41
• For inductors, we recommend following the notice below.
- Follow the table below for inductor current rating.
- Small size and high efficiency are our main objectives. The proposed low core loss and low DCR (copper 
wire resistance) inductors are more efficient. For efficiency test conditions, refer to PMIC datasheet.
Note: 
1. The ISAT depends on inductance saturation. ( -30% reduction from initial L value )
2. The ITEMP depends on ambient temperature (TA), and TJ should not exceed 125°C. 
MT6363 buck
(Application)
Inductance (uH)
MUST-BE
ISAT,MAX (mA)
MUST-BE
VS1 0.47 ≥ 3099
VS2 0.47 ≥ 4858
VS3 0.47 ≥ 2487
BUCK1
(VDIGRF_PMU) 0.24 ≥ 2029
BUCK2 + BUCK3 
(DVDD_MODEM) 0.24*2 ≥ 4974
BUCK4 
(DVDD_SRAM_CORE) 0.47 ≥ 2533
BUCK5 
(EMI_VDD2H) 0.24 ≥ 5471
BUCK6 + BUCK7 
(DVDD_CORE) 0.24*2 ≥ 5909
DC-DC: Power Inductor Selection Guideline
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 42

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
42
• DC-DC layout guide #1
- The concept of buck layout is as shown below.
• All the input decoupling capacitors should be placed near PMIC. 
- Buck GND balls should be connected to input capacitors firstly,
and isolated from the nearby GND trace then connected to main GND plane.
• The buck inductors should be placed near PMIC.
DC-DC: Schematic and Layout Notice #1
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 43

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
43
• DC-DC layout guide #2-1: Input capacitor
- The concept of buck layout is as shown below.
- Keep ground return path short. Stubs are not allowed.
- To connect buck ground to main ground, you can select the green, yellow, or red path.
• The green path is recommended. Ground returns from PMIC to input capacitor first, and then connects to the main 
ground.
• The yellow or red path is also acceptable, but note that only diverging ground paths underneath input capacitor ground 
are allowed. 
- For more layout constraint details, refer to “MT6985 SCH and PCB Design Check List”.
PMIC BUCK
Layer 1
Layer 2
Main GND
GND ball
CAP GND
CIN
Ground return path
DC-DC: Schematic and Layout Notice #2-1
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 44

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
44
• DC-DC layout guide #2-2: Input capacitor GND
- Layout-1 & Layout-2 example can be implement for MT6363 buck input GND.
- Layout-2: 
• GND_VS2/GND_BUCK1/GND_BUCK2/GND_BUCK3 can be one group.
• GND_BUCK4/GND_BUCK5/GND_BUCK6/GND_BUCK7 can be one group.
• GND_VS1/GND_VS3 can be one group.
DC-DC: Schematic and Layout Notice #2-2
VS3
VS1
BUCK4
BUCK5
BUCK6
BUCK7
Layout-2
BUCK1 BUCK2
BUCK3VS2
Layout-1
VS1
VS3
BUCK4
BUCK5
BUCK6
BUCK7
BUCK3
BUCK2BUCK1
VS2
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 45

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
45
Note #1: Effective CINPx (2.2 uF) value ≥ 0.36 uF @5V derating for AC 0.2 Vrms and overall operating temperature
Note #2: CINSYS = 10 uF/0402/6.3V/X5R*2
• DC-DC layout guide #3-1: Input capacitor (10uF *2 + 2.2uF *10)
DC-DC: Schematic and Layout Notice #3-1
MT6363 Input trace Inductance (from CINSYS to PMIC ball) Inductance (from CINPx to PMIC ball)
BUCK1
BUCK4
BUCK7
VSYS_BUCKx
GND_BUCKx
10uF *2
( L_PWR3 + L_GND3 + L_PWR0 + L_GND0 ) < 2.4 nH
CINPx=2.2uF/0201
( L_PWR0 + L_GND0 ) < 1 nH
BUCK2
BUCK3
BUCK5
BUCK6
VSYS_BUCKx
GND_BUCKx
10uF *2
( L_PWR3 + L_GND3 + L_PWR0 + L_GND0 ) < 2.1 nH
CINPx=2.2uF/0201
( L_PWR0 + L_GND0 ) < 1 nH
VS1
VS2
VS3
VSYS_VSx
GND_VSx
10uF *2
( L_PWR3 + L_GND3 + L_PWR0 + L_GND0 ) < 2.7 nH
CINPx=2.2uF/0201
( L_PWR0 + L_GND0 ) < 2 nH
Controller VSYS_SMPS
GND_SMPS ( L_PWR2_1 + LPWR2_2 + L_GND2_2 + L_PWR1 + L_GND1 ) < 11 nH ( L_PWR1 + L_GND1 ) < 3 nH
MT6363
GND_SMPS
VSYS_SMPS
VSYS
L_PWR2_2 L_PWR1
L_GND2_2 L_GND1
GND_xx
L_PWR3 L_PWR0
L_GND3 L_GND0
CINSYS
(10uF*2)
CINPx
(2.2uF)
CINA
(1uF)
R
(1 )L_PWR2_1
VSYS_xxx
# CINSYS & CINPx must follow ref. design SCH and below constraint strictly, reduction may cause damaged issue.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 46

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
46
Note #1: CINPx =1uF/0201/6.3V/X5R
Note #2: CINSYS =10uF/0402/6.3V/X5R*4
• DC-DC layout guide #3-2: Input capacitor (10uF *4 + 1uF *10)
DC-DC: Schematic and Layout Notice #3-2
MT6363 Input trace Inductance (from CSYS to PMIC ball) Inductance (from CINSYS to PMIC ball) Inductance (from CINPx to PMIC ball)
BUCK1~7,
VS1,
VS2,
VS3
VSYS_BUCKx
GND_BUCKx
VSYS_VSx
GND_VSx
22uF
( L_PWR4 + L_GND4 + L_PWR3 
+ L_GND3 + L_PWR0 + L_GND0 ) 
< 4.5 nH
10uF*4
( L_PWR3 + L_GND3 + L_PWR0 + L_GND0 ) 
< 2 nH
CINPx=1uF/0201
( L_PWR0 + L_GND0 ) < 0.6 nH
Controller VSYS_SMPS
GND_SMPS (L_PWR2_1+ L_PWR2_2 + L_GND2_2 + L_PWR1 + L_GND1 ) < 11 nH ( L_PWR1 + L_GND1 ) < 3 nH
MT6363
GND_SMPS
VSYS_SMPS
VSYS
L_PWR2_2 L_PWR1
L_GND2_2 L_GND1
GND_xx
L_PWR3 L_PWR0
L_GND3 L_GND0
CINSYS
(10uF*4)
CINPx
(1uF)
CINA
(1uF)
R
(1 )L_PWR2_1
VSYS_xxx
CSYS
(22uF)
L_PWR4
L_GND4
VSYS
# CINSYS & CINPx must follow ref. design SCH and below constraint strictly, reduction may cause damaged issue.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 47

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
47
• DC-DC layout guide #3-3: Input capacitor example
- L_PWR1 (VSYS_BUCKx to CINPx VSYS pad): 10-layer (green trace)
- L_GND1 (GND_BUCKx to CINPx GND pad): 9-layer (purple trace)
- Smaller L_GND1: larger size of purple trace 
- Smaller L_PWR1: larger overlapping size of purple trace and green trace
DC-DC: Schematic and Layout Notice #3-3
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 48

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
48
• DC-DC layout guide #4: Remote sense
- The feedback trace must be shielded from all noise sources, especially the clock signal and LX nodes of 
DC/DC converter.
• BUCK1_FB, GND_BUCK1_FB
• BUCK2_FB, GND_BUCK2_FB
• BUCK3_FB, GND_BUCK3_FB
• BUCK4_FB, GND_BUCK4_FB
• BUCK5_FB, GND_BUCK5_FB
• BUCK6_FB, GND_BUCK6_FB
• BUCK7_FB, GND_BUCK7_FB
DC-DC: Schematic and Layout Notice #4
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 49

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
49
• DC-DC layout guide #5: Remote sense
- Find the path with the lowest inductance. The remote point can be located within Coutlowest L + 1 nH.
- The capacitor of remote point needs to be greater than1 uF.
- For example, in the case that Cout1 is a path with the lowest inductance:
- If inductance between Cout1 and remote point 1 is L4, then L4 must be lower than 1 nH (L4 < 1 nH).     
- The remote point can be located between Cout1 and remote point 1.
- Same rules are applicable to L2 & L3 if they are the lowest inductance paths.
- The cases above are for multipath. In case of single path, consider the only path the lowest inductance 
path directly.
- Inductance between Cout1 and other Cout (Cout2/Cout3) must be lower than 1.5 nH (L1 + L2 < 1.5 nH/L1 + L3 
< 1.5 nH)
Lout L2
BUCK LX
PMIC
SoC
L1
L3
Cout2 Cout1
Cout3
CPDN
L4
Remote pt. 1
DC-DC: Schematic and Layout Notice #5
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 50

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
50
• DC-DC layout guide #6: Remote sense
A. Connect the GNDs of PDN capacitor and buck capacitor on the same layer before connecting them to the 
main GND. (L8/L9 if SMT is in L10)
B. GND_FB and VOUT_FB must be connected to PDN capacitor pads directly.
C. PDN capacitor must be greater than 1 uF.
D. PDN capacitor must be greater than 4 uF if PDN cap. and buck Cout do not follow rule A and B. 
SOC Bucks
Domain
Buck Cap.
LX
PDN Cap.
GND_FB
SMT LayerPlane
VOUT_FB
+
-
Main GND
A.
B.
DC-DC: Schematic and Layout Notice #6
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 51

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
51
Buck name LDO input ball  
(direct-sense to) Max. R1 + R2 (mΩ) Max. L1 + L2 (nH) Max. L1 (nH)
VSx VSx_LDO2 25 4 1
DC-DC: Schematic and Layout Notice #7
• DC-DC layout guide #7: Remote sense
- The inductance between any Couts must be lower than 1 nH.
VSx_LDO1
VSx_LDO2
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 52

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
52
DC-DC: Schematic and Layout Notice #8
• DC-DC layout guide #7: Remote sense about VS1, VS2, VS3
- VS1_FB (ball M5) MUST be connected to VS1_LDO1 (ball N12) and VS1_LDO2 (ball L13) before fan-out power trace.
- VS2_FB (ball C13) MUST be connected to VS2_LDO1 (ball E13) and VS2_LDO2 (ball J13) before fan-out power trace.
- VS3_FB (ball M7) MUST be connected to VS3_LDO1 (ball N8) and VS3_LDO2 (ball N10) before fan-out power trace.
• Layout example:
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 53

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
53
DC-DC: Schematic and Layout Notice #9
Note:
1. Buck controller power trace (VSYS_SMPS) must be single trace connected to battery VBAT_BUS directly, and it can’t be merge d with other traces.
2. VSYS adds 1Ω ±5%/0201 resistor to VSYS_SMPS for noise rejection.
Buck Input
4 mil
Bat. connector
BAT_BUS
22 uFGND
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 54

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
54
• DC-DC layout guide #8: DRAM power capacitor
A. Below DRAM power trace layout example for reference
B. The 10uF/22uF output capacitors MUST place between power inductor and DRAM power ball.
C. The buck FB sense point (C21) MUST close to 10uF/22uF output capacitors to pass MES.
DC-DC: Schematic and Layout Notice #10
PMIC
C22
4.3uF
or 1uF
C23
4.3uF 
or 1uF
C24
4.3uF 
or 1uF
22uF *N
C21
4.3uF or 1uF
(FB sense)
VDD2H,
VDD2L,
VDDQ
PMIC
22uF *N
VDD2H,
VDD2L,
VDDQ
C21
4.3uF or 1uF
(FB sense)
C24
4.3uF 
or 1uF
C23
4.3uF 
or 1uF
C22
4.3uF
or 1uF
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 55

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
Function Description – LDO
55
MT6363 Design Notice
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 56

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
56
Ball name Input capacitance (Typ.)
VSYS_LDO1 2.2uF / 0201 / 6.3V / X5R
VS1_LDO1,
VS1_LDO2 10uF / 0402 / 6.3V / X5R*3 #1
VS2_LDO1,
VS2_LDO2 10uF / 0402 / 6.3V / X5R*3 #1
VS3_LDO1,
VS3_LDO2 10uF / 0402 / 6.3V / X5R*3 #1
LDO: Input Capacitor Table
Note: Common parts as 2.2uF/0201, 2.2uF/0402, 10uF/0402 can be used.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 57

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
57
LDO Control power ball Input power ball
VRF13 VSYS_LDO1 VS2_LDO1
VRF12 VSYS_LDO1 VS2_LDO1
VUFS12 VSYS_LDO1 VS2_LDO1
VSRAM_CPUB VSYS_LDO1 VS2_LDO1
VSRAM_CPUM VSYS_LDO1 VS2_LDO1
VSRAM_CPUL VSYS_LDO1 VS2_LDO2
VA12_1 VSYS_LDO1 VS2_LDO2
VA12_2 VSYS_LDO1 VS2_LDO2
VCN13 VSYS_LDO1 VS2_LDO2
VAUX18 VSYS_LDO1 VSYS_LDO1
VTREF18 VSYS_LDO1 VSYS_LDO1
VEMC VSYS_LDO1 VSYS_LDO1
LDO: Input Power Table
LDO Control power ball Input power ball
VA15 VSYS_LDO1 VS1_LDO1
VRF18 VSYS_LDO1 VS1_LDO1
VRFIO18 VSYS_LDO1 VS1_LDO1
VCN15 VSYS_LDO1 VS1_LDO1
VM18 VSYS_LDO1 VS1_LDO1
VIO18 VSYS_LDO1 VS1_LDO2
VUFS18 VSYS_LDO1 VS1_LDO2
VSRAM_APU VSYS_LDO1 VS3_LDO1
VSRAM_MDFE VSYS_LDO1 VS3_LDO1
VSRAM_DIGRF VSYS_LDO1 VS3_LDO1
VSRAM_MOFEM VSYS_LDO1 VS3_LDO2
VRF09 VSYS_LDO1 VS3_LDO2
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 58

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
58
LDO: Output Capacitor Table (1/2)
LDO name Application CO,min (uF) CO,max (uF)
VDIG18 I/O 1 1
VAUX18 AUXADC 1 2.2
VTREF18 VTREF18 1 2.2
VEMC UFS4.x 20 24.7
VIO18 I/O 10.4 30
VA15 VA15 1 11
VM18 DRAM VDD1 6.9 20.6
VRF18 RF 1.8V 9.4 11.6
VRFIO18 Consys 1.7V 1 5.7
VCN15 RFIO 1.82V 9.4 11.5
VUFS18 IO (IOBL) 4.9 14.1
LDO name Application CO,min (uF) CO,max (uF)
VA12_1 ABB 1 11
VA12_2 ABB 1 11
VCN13 VCN13 9.4 19.1
VRF13 VRF13 9.4 19.7
VRF12 VRF12 3.2 6.6
VUFS12
(Local Sense) ABB 4.7 + 4.7 44
VSRAM_CPUB SRAM_B 4.4 5.81
VSRAM_CPUM SRAM_M 4.4 5.81
VSRAM_CPUL SRAM_L 6.9 9.4
VRF09 VRF09 19.4 24.1
VSRAM_MODEM VSRAM_MODEM 6.9 9.4
VSRAM_DIGRF VSRAM_DIGRF 4.4 5.81
VSRAM_MDFE VSRAM_GPU 4.4 5.81
VSRAM_APU VSRAM_APU 4.4 6.5
Note: 
1) VRFIO18 LDO powers to Connectivity IC
2) VCN15 LDO powers to RF IC.
3) The output capacitor can be removed if the LDO is off by default and the loading current is 0 mA
Dedicated for IO, 
not for other application
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 59

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
59
Note : The output capacitor can be removed if the LDO is off by default and the loading current is 0 mA.
LDO: Output Capacitor Table (2/2)
LDO name Application PMIC side COUT (uF)
VTREF18
(default OFF) Not used NC
VEMC
(default ON) Enable pin 1
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 60

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
60
LDO: Layout Constraint for LDO Stability (1/3)
LDO layout constraint for stability
LDO name L1 ≤ R1 ≤ C1min L2 ≤ R2 ≤ C2min C2max (C1+C2)max
VIO18 20 nH 0.2Ω 1 uF 20 nH 0.2Ω 9.4 uF 29 uF 30 uF
VA15 20 nH 0.2Ω 1 uF 20 nH 0.2Ω 0 uF 10 uF 11 uF
VM18 7 nH 0.1Ω 2.2 uF 7 nH 0.1Ω 4.7 uF 18.4 uF 20.6 uF
VRF18 20 nH 0.2Ω 4.7 uF 20 nH 0.2Ω 4.7 uF 6.9 uF 11.6 uF
VRFIO18
(for Consys) 20 nH 0.2Ω 1 uF 20 nH 0.2Ω 0 uF 4.7 uF 5.7 uF
VCN15
(for RFIO) 20 nH 0.2Ω 4.7 uF 20 nH 0.2Ω 4.7 uF 6.8 uF 11.5 uF
VUFS18 7 nH 0.2Ω 4.7 uF 20 nH 0.2Ω 0.2 uF 9.4 uF 14.1 uF
PMIC
L1
LDO
R1
C1
L2 R2
C2
Application
Note: This constraint for LDO stability; application PCB IR should be considered by another check.
Dedicated for IO, 
not for other application
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 61

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
61
LDO: Layout Constraint for LDO Stability (2/3)
LDO layout constraint for stability
LDO name L1 ≤ R1 ≤ C1min L2 ≤ R2 ≤ C2min C2max (C1+C2)max
VA12_1 20 nH 0.2Ω 1 uF 20 nH 0.2Ω 0 uF 10 uF 11 uF
VA12_2 20 nH 0.2Ω 1 uF 20 nH 0.2Ω 0 uF 10 uF 11 uF
VCN13 7 nH 0.2Ω 4.7 uF 20 nH 0.2Ω 4.7 uF 14.4 uF 19.1 uF
VRF13 7 nH 0.2Ω 4.7 uF 20 nH 0.2Ω 4.7 uF 15 uF 19.7 uF
VRF12 20 nH 0.2Ω 2.2 uF 20 nH 0.2Ω 1 uF 4.4 uF 6.6 uF
VUFS12
(Local Sense) 10 nH 0.2Ω 4.7 uF 20 nH 0.2Ω 4.7 uF 39.3 uF 44 uF
VSRAM_CPUB 7 nH 0.2Ω 2.2 uF 20 nH 0.2Ω 2.2 uF 3.61 uF 5.81 uF
VSRAM_CPUM 7 nH 0.2Ω 2.2 uF 20 nH 0.2Ω 2.2 uF 3.61 uF 5.81 uF
VSRAM_CPUL 10 nH 0.1Ω 4.7 uF 10 nH 0.05Ω 2.2 uF 4.7 uF 9.4 uF
PMIC
L1
LDO
R1
C1
L2 R2
C2
Application
Note: This constraint for LDO stability; application PCB IR should be considered by another check.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 62

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
62
PMIC
L1
LDO
R1
C1
L2 R2
C2
Application
LDO: Layout Constraint for LDO Stability (3/3)
LDO layout constraint for stability
LDO name L1 ≤ R1 ≤ C1min L2 ≤ R2 ≤ C2min C2max (C1+C2)max
VRF09 10 nH 0.1Ω 10 uF 20 nH 0.2Ω 9.4 uF 14.1 uF 24.1 uF
VSRAM_MODEM 10 nH 0.1Ω 4.7 uF 10 nH 0.05Ω 2.2 uF 4.7 uF 9.4 uF
VSRAM_DIGRF 7 nH 0.2Ω 2.2 uF 20 nH 0.2Ω 2.2  uF 3.61 uF 5.81 uF
VSRAM_MDFE 7 nH 0.2Ω 2.2 uF 20 nH 0.2Ω 2.2 uF 3.61 uF 5.81 uF
VSRAM_APU 7 nH 0.2Ω 2.2 uF 20 nH 0.2Ω 2.2 uF 4.3 uF 6.5 uF
VDIG18 20 nH 0.2Ω 1 uF 1 uF
VAUX18 20 nH 0.2Ω 1 uF 20 nH 0.2Ω 0 uF 1.2 uF 2.2 uF
VTREF18 20 nH 0.2Ω 1 uF 20 nH 0.2Ω 0 uF 1.2 uF 2.2 uF
VEMC (UFS 3.1) 20 nH 0.2Ω 1 uF 20 nH 0.2Ω 4.7 uF 19 uF 20 uF
VEMC (UFS 4.0) 20 nH 0.2Ω 10 uF 20 nH 0.2Ω 10 uF 14.7 uF 24.7 uF
Note: This constraint for LDO stability; application PCB IR should be considered by another check.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 63

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
63
W (mil) W (um) H (um) t @1/3 oz (um) Len (cm) Trace inductance 
(nH)
Trace resistance 
(mΩ)
4 101.6 50 12 1.27 4.85 198
LDO: Rough Guidelines for CAD Extraction
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 64

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
64
LDO: Layout Constraint for LDO Need Star-connection
• Some LDO applications need star-connection.
- VIO18
- VA15
- VA12_1
- VA12_2
- VUFS12
- VCN15
- VRF18
- VRF13
- VRF12
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 65

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
• Place VREF/VDIG18 bypass capacitor as close as possible to the PMIC.
• GND_VREF ball must be connected to the capacitor GND pad firstly, 
and connect to main GND plane by via.
• VREF capacitor is 100 nF.
• VDIG18 capacitor is 1 uF.
• Schematic example:
LDO: Layout Constraint for VREF/VDIG18
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 66

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B1. Trace width≧6mil
2. Value and placement of capacitor please refer design notice
Ball name LDO Imax Trace
Length
Trace
Width
Rpcb
H=50um, 1/3 oz
VAUX18 20mA 800mil 6mil 200mΩ
VTREF 10mA 800mil 6mil 200mΩ
VEMC (if used) 800mA 1200mil 18mil 100mΩ
VIO18 600mA 1000mil 25mil 60mΩ
VA15 600mA 850mil 25mil 50mΩ
VM18 600mA 750mil 25mil 45mΩ
VRF18 600mA 1200mil 18mil 100mΩ
VCN15 300mA 800mil 6mil 200mΩ
VRFIO18 600mA 800mil 6mil 200mΩ
VUFS18 1200mA 1000mil 6mil 200mΩ
VA12_1 600mA 680mil 25mil 40mΩ
VA12_2 600mA 680mil 25mil 40mΩ
VCN13 800mA 1200mil 18mil 100mΩ
VRF13 800mA 1200mil 18mil 100mΩ
VRF12 600mA 1000mil 10mil 150mΩ
VUFS12 #1 1200mA 680mil 25mil 40mΩ
VSRAM_CPUB 600mA 1200mil 18mil 100mΩ
VSRAM_CPUM 600mA 1200mil 18mil 100mΩ
VSRAM_CPUL #1 1200mA 120mil 10mil 18mΩ
VSRAM_MODEM #1 1200mA 75mil 10mil 11mΩ
VSRAM_MDFE 600mA 1200mil 18mil 100mΩ
VSRAM_DIGRF 600mA 850mil 10mil 130mΩ
VSRAM_APU 600mA 1200mil 18mil 100mΩ
VRF09 #1 800mA 120mil 18mil 10mΩ
LDO: Layout Constraint
• Follow MES
- VA15, VA12_1, VA12_2, VUFS12
- VSRAM_xxx
• Trace Under shielding case
- VRF18, VCN15, VRFIO18
- VRF13, VRF12, VCN13
- VRF09, VRF09_S
• Local Sense
- VUFS12, VUFS12_S
• Remote sense to application cap.
- VSRAM_CPUL
- VSRAM_MODEM_S, VRF09_S
• Trace W/L can be adjusted by Imax.
If trace is series 0Ω resister, 0Ω resister is having 0~50mΩ variation. 
It would be drop voltage.
Note #1: Rpcb from remote sense to application cap.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 67

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
Analog Power PCB Layout Constraint
67
MT6363 Design Notice
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 68

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
68
AP Analog Power List
Voltage PMIC 
Pin Name AP analog pin name
1.5V MT6363: VA15
AVDD15_UFS
AVDD15_DSI
AVDD15_SSUSB_P1
AVDD15_SSUSB_P2
AVDD15_USB
AVDD15_CKSQ
AVDD15_DRF
AVDD15_APPLL
AVDD15_APUPLL
AVDD15_MDPLL
AVDD15_EMI0
AVDD15_EMI1
AVDD15_EMI2
AVDD15_EMI3
AVDD15_WBG
AVDD15_PCIE
AVDD15_CSI
AVDD15_PROC
0.75V MT6363: BUCK4
(DVDD_SRAM_CORE) AVDD08_DRV_DSI
3.0V MT6373: VUSB AVDD33_USB
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 69

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
69
AP Analog Power List
Voltage PMIC 
Pin Name AP analog pin name
1.2V MT6363: VA12_1
AVDD12_DSI
AVDD12_USB
AVDD12_CKSQ
AVDD12_APPLL
AVDD12_APUPLL
AVDD12_MDPLL
AVDD12_EMI0
AVDD12_EMI1
AVDD12_EMI2
AVDD12_EMI3
AVDD12_TSFDC_BM
AVDD12_TSFDC_RM
AVDD12_SSUSB_P1
AVDD12_SSUSB_P2
1.2V MT6363: VA12_2 AVDD12_UFS_RX AVDD12_UFS_TX
1.2V MT6363: VUFS12 AVDD12_WBG
AVDD12_PCIE AVDD12_CSI0 AVDD12_CSI1
1.2V MT6363: VRF12 AVDD12_DRF AVDD12_DRF 
(MT6195)
1.2V MT6685: VBBCK AVDD12_CKBUF_UFS
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 70

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
AP Analog Layout Constraint
◆ AVDD12_DRF layout constraint
➢ VRF12_PMU and AVDD12_DRF_D star connect. Short pad route from PMIC side Cap.
➢ Please be sure to follow “reference design” & “PMIC MMD”
◆ IR spec. 
➢ Total path from PMIC LDO pin to AVDD power pin of AP-site
➢ Target IR < 2%
▪ For each AVDDxx_xxxx path
▪ Simulate all power pin currents at the same time 
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 71

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
71Copyright © MediaTek Inc. All rights reserved.
AP VA15 → AVDD15_xxx Layout Guideline 1
            AP
AVDD15_xxx1
AVDD15_xxx2
AVDD15_xxx3
AVDD15_xxx4
AVDD15_xxx5
AVDD15_xxx6
Cnx
Cnx
Cnx
Cnx
Cnx
Cnx
P1
PMIC
VA15
C1
Notice
1. PCB drop voltage ≦ 30mV
(PMIC VA15 ball to AP AVDD15_xxx ball)
2. PCB Length/Width ≦ PCB Ratio
Trace Trace Start Trace End
Tr a c e  1 PM I C VA1 5  b a l l C1 0 . 3 0 0 A 3 0 mi l 2 0 0 mi l 7 0 . 3 o z 1 1 . 8 m 3 . 5 mV
Tr a c e  2 C1 P1 0 . 3 0 0 A 1 8 mi l 8 0 0 mi l 44 0 . 3 o z 7 8 . 8 m 2 3 . 7 mV
Tr a c e  3 P1 AP AVDD1 5 _ XXX b a l l 0 . 0 6 0 A 8 mi l 2 0 0 mi l 25 0 . 3 o z 4 4 . 3 m 2 . 7 mV
PCB
Length
PCB
Thickness
PCB
Resister
PCB drop
voltage
Example Average
current
PCB
Width
PCB Ratio
Length/Width
Pass ≦30mV
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 72

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
72Copyright © MediaTek Inc. All rights reserved.
AP VA15 → AVDD15_xxx Layout Guideline 2
            AP
Group#1
AVDD15_xxx1
AVDD15_xxx2
AVDD15_xxx3
AVDD15_xxx4
AVDD15_xxx5
AVDD15_xxx6
C1
Cnx
Cnx
Cnx
Cnx
Cnx
Cnx
P1
Group#2
P2
PMIC
VA15
Notice
1. PCB drop voltage ≦ 30mV
(PMIC VA15 ball to AP AVDD15_xxx ball)
2. PCB Length/Width ≦ PCB Ratio
- 72 -
Pass ≦30mV
Group#1: AVDD15_UFS, AVDD15_DSI, AVDD15_SSUSB_P1, AVDD15_SSUSB_P2, AVDD15_USB, AVDD15_CKSQ, AVDD15_DRF
Group#2: AVDD15_APPLL, AVDD15_APUPLL, AVDD15_MDPLL, AVDD15_EMI0, AVDD15_EMI1, AVDD15_EMI2, AVDD15_EMI3, AVDD15_WBG, AVDD15_PCIE, AVDD15_CSI, AVDD15_PROC
Trace Trace Start Trace End
Tr a c e  1 PM I C VA1 5  b a l l C1 0 . 3 0 0 A 2 4 mi l 2 0 0 mi l 8 0 . 3 o z 1 4 . 8 m 4 . 4 mV
Tr a c e  2 C1 P1 / P2 0 . 1 5 0 A 1 2 mi l 1 0 0 0 mi l 83 0 . 3 o z 1 4 7 . 8 m 2 2 . 2 mV
Tr a c e  3 P1 / P2 AP AVDD1 5 _ XXX b a l l 0 . 0 6 0 A 8 mi l 2 5 0 mi l 31 0 . 3 o z 5 5 . 4 m 3 . 3 mV
PCB
Length
PCB
Thickness
PCB
Resister
PCB drop
voltage
Example Average
current
PCB
Width
PCB Ratio
Length/Width
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 73

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
            AP
AVDD12_xxx1
AVDD12_xxx2
AVDD12_xxx3
AVDD12_xxx4
AVDD12_xxx5
AVDD12_xxx6
Cnx
Cnx
Cnx
Cnx
Cnx
Cnx
P1
PMIC
VA12
C1
73Copyright © MediaTek Inc. All rights reserved.
AP VA12_1 → AVDD12_xxx Layout Guideline 1
- 73 -
Notice
1. PCB drop voltage ≦ 24mV
(PMIC VA12_1 ball to AP AVDD12_xxx ball)
2. PCB Length/Width ≦ PCB Ratio
Trace Trace Start Trace End
Tr a c e  1 PM I C VA1 2 _ 1  b a l l C1 0 . 5 0 0 A 3 6 mi l 2 0 0 mi l 6 0 . 3 o z 9 . 9 m 4 . 9 mV
Tr a c e  2 C1 P1 0 . 5 0 0 A 3 2 mi l 5 5 0 mi l 17 0 . 3 o z 3 0 . 5 m 1 5 . 2 mV
Tr a c e  3 P1 / P2 AP AVDD1 2 _ XXX b a l l 0 . 1 3 0 A 1 2 mi l 2 0 0 mi l 17 0 . 3 o z 2 9 . 6 m 3 . 8 mV
PCB
Length
PCB
Thickness
PCB
Resister
PCB drop
voltage
Example Average
current
PCB
Width
PCB Ratio
Length/Width
Pass ≦24mV
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 74

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
74Copyright © MediaTek Inc. All rights reserved.
AP VA12_1 → AVDD12_xxx Layout Guideline 2
- 74 -
Notice
1. PCB drop voltage ≦ 24mV
(PMIC VA12_1 ball to AP AVDD12_xxx ball)
2. PCB Length/Width ≦ PCB Ratio
Trace Trace Start Trace End
Tr a c e  1 PM I C VA1 2 _ 1
b a l l C1 0 . 5 0 0 A 3 6 mi l 1 5 0 mi l 4 0 . 3 o z 7 . 4 m 3 . 7 mV
Tr a c e  2 C1 P1 / P2 0 . 2 6 0 A 2 4 mi l 7 5 0 mi l 31 0 . 3 o z 5 5 . 4 m 1 4 . 4 mV
Tr a c e  3 P1 / P2 AP AVDD1 2 _ XXX b a l l 0 . 1 3 0 A 8 mi l 2 0 0 mi l 25 0 . 3 o z 4 4 . 3 m 5 . 8 mV
PCB
Length
PCB
Thickness
PCB
Resister
PCB drop
voltage
Example Average
current
PCB
Width
PCB Ratio
Length/Width
Pass ≦24mV
AP
AVDD12_xxx1
AVDD12_xxx2
AVDD12_xxx3
AVDD12_xxx4
AVDD12_xxx5
AVDD12_xxx6
Cnx
Cnx
Cnx
Cnx
Cnx
CnxP2
PMIC
VA12_1
C1
P1
Group#1
Group#2
Group#1: AVDD12_DSI, AVDD12_USB, AVDD12_CKSQ, AVDD12_APPLL, AVDD12_APUPLL, AVDD12_MDPLL, AVDD12_EMI0, AVDD12_EMI1, AVDD12_EMI2, AVDD12_EMI3, AVDD12_TSFDC_BM, AVDD12_TSFDC_RM
Group#2: AVDD12_SSUSB_P1, AVDD12_SSUSB_P2
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 75

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
75Copyright © MediaTek Inc. All rights reserved.
AP VA12_2 → AVDD12_xxx Layout Guideline
- 75 -
Notice
1. PCB drop voltage ≦ 24mV
(PMIC VA12_2 ball to AP AVDD12_xxx ball)
2. PCB Length/Width ≦ PCB Ratio
Trace Trace Start Trace End
Tr a c e  1 PM I C VA1 2 _ 2  b a l l C1 0 . 3 2 0 A 3 6 mi l 2 0 0 mi l 6 0 . 3 o z 9 . 9 m 3 . 2 mV
Tr a c e  2 C1 P1 / P2 0 . 1 8 0 A 2 0 mi l 8 0 0 mi l 40 0 . 3 o z 7 1 . 0 m 1 2 . 8 mV
Tr a c e  3 P1 / P2 AP AVDD1 2 _ UFS_ XX
b a l l 0 . 1 8 0 A 8 mi l 2 0 0 mi l 25 0 . 3 o z 4 4 . 3 m 8 . 0 mV
PCB
Length
PCB
Thickness
PCB
Resister
PCB drop
voltage
Example Average
current
PCB
Width
PCB Ratio
Length/Width
Pass ≦24mV
AP
AVDD12_UFS_RX
AVDD12_UFS_TX
Cnx
Cnx
P2
PMIC
VA12_2
C1
P1
Group#1
Group#2
Group#1: AVDD12_UFS_RX 
Group#2: AVDD12_UFS_TX
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 76

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
76Copyright © MediaTek Inc. All rights reserved.
AP VUFS12 → AVDD12_xxx Layout Guideline
- 76 -
Group#1: AVDD12_WBG, AVDD12_PCIE
Group#2: AVDD12_CSI0 
Group#3: AVDD12_CSI1
Notice
1. PCB drop voltage ≦ 24mV
(PMIC VUFS12 ball to AP AVDD12_xxx ball)
2. PCB Length/Width ≦ PCB Ratio
Trace Trace Start Trace End
Tr a c e  1 PM I C VA1 2 _ 1
b a l l C1 0 . 6 6 0 A 3 6 mi l 1 5 0 mi l 4 0 . 3 o z 7 . 4 m 4 . 9 mV
Tr a c e  2 C1 P1 / P2 / P3 0 . 2 5 0 A 3 2 mi l 8 5 0 mi l 27 0 . 3 o z 4 7 . 1 m 1 1 . 8 mV
Tr a c e  3 P1 / P2 / P3 AP AVDD1 2 _ XXX b a l l 0 . 2 5 0 A 1 2 mi l 2 0 0 mi l 17 0 . 3 o z 2 9 . 6 m 7 . 4 mV
PCB
Length
PCB
Thickness
PCB
Resister
PCB drop
voltage
Example Average
current
PCB
Width
PCB Ratio
Length/Width
Pass ≦24mV
AP
AVDD12_xxx1
AVDD12_xxx2
AVDD12_xxx3
AVDD12_CSI0
Cnx
Cnx
Cnx
Cnx
P2
PMIC
VUFS12
C1
P1
Group#1
Group#2
Group#3
AVDD12_CSI1
Cnx
P3
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 77

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
          RF
AVDD12_DRF
         AP
AVDD12_DRF
P1
PMIC
VRF12
C1
Cnx
P2
SHORT PAD
77Copyright © MediaTek Inc. All rights reserved.
AP VRF12 → AVDD12_xxx Layout Guideline
- 77 -
Notice
1. PCB drop voltage ≦ 24mV
(PMIC VRF12 ball to AP AVDD12_DRF ball)
2. PCB Length/Width ≦ PCB Ratio
Tr a c e Tr a c e  St a r t Tr a c e  En d
Tr a c e  1 PM I C VRF1 2  b a l l C1 0 . 2 8 0 A 2 4 mi l 1 0 0 mi l 4 0 . 3 o z 7 . 4 m 2 . 1 mV
Tr a c e  2 C1 P1 / P2 0 . 1 4 0 A 1 6 mi l 1 0 0 0 mi l 63 0 . 3 o z 1 1 0 . 9 m 1 5 . 5 mV
Tr a c e  3 P1 / P2 AP/ RF AVDD1 2 _ DRF 0 . 1 4 0 A 8 mi l 2 0 0 mi l 25 0 . 3 o z 4 4 . 3 m 6 . 2 mV
PCB
Le n g t h
PCB
Th i c k n e s s
PCB
Re s i s t e r
PCB d r o p
v o l t a g e
Ex a mp l e Av e r a g e
c u r r e n t
PCB
W i d t h
PCB Ra t i o
Le n g t h / W i d t h
Pass ≦24mV
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 78

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
78Copyright © MediaTek Inc. All rights reserved.
AP AVDD12_CKBUF_UFS Layout Guideline
- 78 -
Notice
1. PCB drop voltage ≦ 24mV
(VBBCK ball to AP AVDD12_CKBUF_UFS ball)
2. PCB Length/Width ≦ PCB Ratio
Pass ≦24mV
Tra c e Tra c e  S ta rt Tra c e  E n d
Tra c e  1 P MIC  VB B C K C1 0 . 0 2 0 A 8 m il 2 0 0 m il 25 0 . 3 o z 4 4 . 3 m 0 . 9 m V
Tra c e  2 C1 P1 0 . 0 2 0 A 8 m il 1 2 0 0 m il 150 0 . 3 o z 2 6 6 . 1 m 5 . 3 m V
Tra c e  3 P1 AP  
AVDD1 2 _ C KB UF _ UF S 0 . 0 2 0 A 8 m il 2 0 0 m il 25 0 . 3 o z 4 4 . 3 m 0 . 9 m V
P C B  
Le n g th
P C B
Th ic k n e s s
P C B  
R e s is te r
P C B  d ro p  
v o lta g e
E x a m p le Av e ra g e  
c u rre n t
P C B  
Wid th  
P C B  R a tio  
Le n g th /Wid th
         
                  AP
AVDD12_CKBUF_UFS
P1
MT6685
VBBCK
C1
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 79

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
79Copyright © MediaTek Inc. All rights reserved.
AP AVDD08_DRV_DS Layout Guideline
- 79 -
Others …  AP
PMIC
MT6363
BUCK4 AVDD08_DRV_DS
C1 
(3T)
Cnx
DVDD_SRAM_CORE
DVDD_SRAM_CORE_FB
SHORT PAD
Notice
1. PCB drop voltage ≦ 15mV
(SRAM_CORE ball to AVDD08_DRV_DS ball)
2. PCB Length/Width ≦ PCB Ratio
Tr a c e Tr a c e  St a r t Tr a c e  En d
Tr a c e  1 C1 AP AVDD0 8 _ DRV_ DS
 b a l l 0 . 0 5 0 A 8 mi l 1 2 0 0 mi l 150 0 . 3 o z 2 6 6 . 1 m 1 3 . 3 mV
PCB
Le n g t h
PCB
Th i c k n e s s
PCB
Re s i s t e r
PCB d r o p
v o l t a g e
Ex a mp l e Av e r a g e
c u r r e n t
PCB
W i d t h
PCB Ra t i o
Le n g t h / W i d t h
Pass ≦15mV
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 80

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
80Copyright © MediaTek Inc. All rights reserved.
AP AVDD33_USB Layout Guideline
- 80 -
 APPMIC
VUSB AVDD33_USB
C1
Cnx
Notice
1. PCB drop voltage ≦ 30mV
(PMIC VUSB ball to AP AVDD33_USB ball)
2. PCB Length/Width ≦ PCB Ratio
Pass ≦30mV
Tr a c e Tr a c e  St a r t Tr a c e  En d
Tr a c e  1 PM I C VUSB b a l l C1 0 . 0 4 0 A 1 2 mi l 1 0 0 0 mi l 83 0 . 3 o z 1 4 7 . 8 m 5 . 9 mV
Tr a c e  2 C1 AP AVDD3 3 _ USB b a l l 0 . 0 4 0 A 8 mi l 1 0 0 0 mi l 125 0 . 3 o z 2 2 1 . 7 m 8 . 9 mV
PCB
Le n g t h
PCB
Th i c k n e s s
PCB
Re s i s t e r
PCB d r o p
v o l t a g e
Ex a mp l e Av e r a g e
c u r r e n t
PCB
W i d t h
PCB Ra t i o
Le n g t h / W i d t h
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 81

Copyright © MediaTek Inc. All rights reserved.
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 82

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
Package
82
MT6363 Design Notice
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 83

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
MT6363: Package Outline
54
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 84

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential BCONFIDENTIAL B
MT6363: Ball-map
55
1 2 3 4 5 6 7 8 9 10 11 12 13 14
A VSYS_BUCK7 VSYS_BUCK7 VSYS_BUCK3 BUCK3 GND_BUCK3 GND_BUCK2 BUCK2 VSYS_BUCK2 VSYS_BUCK1 BUCK1 GND_BUCK1 GND_VS2 VS2 VSYS_VS2 A
B BUCK7 BUCK7 VSYS_BUCK3 BUCK3 GND_BUCK3 GND_BUCK2 BUCK2 VSYS_BUCK2 VSYS_BUCK1 BUCK1 GND_BUCK1 GND_VS2 VS2 VSYS_VS2 B
C GND_BUCK7 GND_BUCK7 GND_BUCK7_
FB VSYS_SMPS GND_BUCK3_
FB BUCK3_FB BUCK2_FB GND_BUCK2_
FB
GND_BUCK1_
FB BUCK1_FB VS2_FB C
D GND_BUCK6 GND_BUCK6 BUCK7_FB GND_SMPS GND GND GND VRF13 VUFS12 D
E BUCK6 BUCK6 SRCLKEN_IN0 DVDD18_IO GND GND GND GPIO7 EINT VRF12 VS2_LDO1 VUFS12_S E
F VSYS_BUCK6 VSYS_BUCK6 BUCK6_FB GPIO8 SRCLKEN_IN1 GND GND GND GPIO6 SCP_VREQ_V
AO RTC_32KIN VSRAM_CPU
M VSRAM_CPUB F
G VSYS_BUCK5 VSYS_BUCK5 GND_BUCK6_
FB GPIO9 GND GND GND GPIO4 GPIO2 WDTRSTB_IN VSRAM_CPUL VSRAM_CPUL
_S VCN13 G
H BUCK5 BUCK5 GND_BUCK5_
FB FSOURCE SPMI_M_SDA SPMI_M_SCL GPIO5 GPIO3 GPIO1 VA12_2 VA12_1 H
J GND_BUCK5 GND_BUCK5 BUCK5_FB EXT_PMIC_EN
2 EXT_PMIC_PG RTC_INT VDIG18 VAUX18 VS2_LDO2 VEMC J
K GND_BUCK4 GND_BUCK4 EXT_PMIC_EN
1 SYSRSTB VSYSSNS CHRDETB GND_VREF GND GND GND VTREF18 VSYS_LDO1 K
L BUCK4 BUCK4 BUCK4_FB PMU_TESTM
ODE PWRKEY VBBSNS VREF GND GND AVSS18_AUX
ADC VIO18 VS1_LDO2 VUFS18 L
M VSYS_BUCK4 VSYS_BUCK4 GND_BUCK4_
FB VS1_FB VS3_FB VSRAM_APU VRF09 VRF09_S VCN15 VRFIO18 VIO075 M
N VSYS_VS1 VS1 GND_VS1 GND_VS3 VS3 VSYS_VS3 VS3_LDO1 VS3_LDO2 VS1_LDO1 GND N
P VSYS_VS1 VS1 GND_VS1 GND_VS3 VS3 VSYS_VS3 VSRAM_MDF
E
VSRAM_DIGR
F
VSRAM_MOD
EM_S
VSRAM_MOD
EM VM18 VRF18 VA15 NC P
1 2 3 4 5 6 7 8 9 10 11 12 13 14
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback

## PDF物理页 85

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential B
 MediaTek Confidential For qhhuang@ pvetec.com Use Only
MediaTek Confidential
 For qhhuang@ pvetec.com Use Only MediaTek Confidential
For qhhuang@ pvetec.com Use Only
Document Feedback


---
# SRC0334 MT6686_Datasheet_V1.4.pdf

来源：8676/MTK8676硬件资料/MT6686_Datasheet_V1.4.pdf

SHA-256：5d77a1dea0381cb1761ba942a5b40029a0d4d4da5ca6498878c0529d4b33cd92

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0334.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.4 
Release date:  2025-05-07 
MT6686 Datasheet 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT6686 RF System 
Datasheet 
Confidential B 
Version History 
Version Date Description 
0.1 2022-01-24 Initial draft 
0.2 2022-07-20 
1. Corrected L1 and L5 channel label in Figure 1-1. 
2. Updated VCN15 to VCN18 in Table 3-4. 
3. Updated supply voltage information in Figure 3-1. 
0.3 2022-08-17 
1. Updated Table 3-4. 
2. Added note in Section 3.7.1.1 that MT2737 does not support E5b 
mode. 
0.4 2022-09-02 Updated top marking format. 
1.0 2024-01-30 
1. Document structure rearrangement 
2. Added Chapter 2 Terms and Abbreviations. 
3. Revised sections 1.1.2.1, 4.3, and 4.5. 
4. Revised Table 4 7 and Table 4 9. 
1.1 2024-07-24 
1. Corrected “50ms” to “50μs” in Section 4.3 Power On/Off Sequence. 
2. Revised the ordering number in Table 7-1. MT6686 ordering 
information. 
3. Added Tstg information in Table 4-2. Recommended operating range. 
4. Added Section 7.4 Storage. 
1.2 2024-08-12 Added Chapter 5 Part Reliability and Chapter 6 Packing Information 
(“Storage” Section is moved to 6.2 Storage) 
1.3 2024-09-23 Added the maximum input level parameter to Table 4-9 to Table 4-13  
1.4 2025-05-07 Updated the min. value of voltage swing and the typ. values of phase noise 
in Table 4-7. Reference clock requirement 
 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT6686 RF System 
Datasheet 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 5 
List of Tables ······································································································································································ 5 
1 Introduction······························································································································································· 6 
1.1 MT6686 Product Overview ······································································································································ 6 
1.1.1 Functional Block Diagram ····························································································································· 6 
1.1.2 Highlighted Features ····································································································································· 7 
2 Terms and Abbreviations ··········································································································································· 8 
2.1 Naming Convention ·················································································································································· 8 
2.2 Abbreviations ··························································································································································· 9 
3 Pin Information ························································································································································ 10 
3.1 Pin Map ·································································································································································· 10 
3.2 Pin Descriptions ······················································································································································ 11 
4 Specifications ··························································································································································· 13 
4.1 Electrical Characteristics ········································································································································ 13 
4.1.1 Absolute Maximum Ratings ························································································································ 13 
4.1.2 Operating Descriptions ······························································································································· 13 
4.2 Supply Specifications ·············································································································································· 14 
4.3 Power On/Off Sequence········································································································································· 15 
4.4 Digital Logic Characteristics ···································································································································· 16 
4.4.1 Timing Diagram Convention ························································································································ 16 
4.4.2 Rising/Falling Time Definition ····················································································································· 16 
4.4.3 Protocol ······················································································································································· 17 
4.5 Reference Clock ······················································································································································ 18 
4.6 GNSS ······································································································································································· 19 
4.6.1 GNSS Radio Description ······························································································································ 19 
4.6.2 GNSS Mode Definition ································································································································ 19 
4.6.3 GNSS Specifications ····································································································································· 19 
5 Part Reliability ························································································································································· 22 
5.1 Qualification Summary ··········································································································································· 22 
5.2 Device Characteristics ············································································································································ 23 
6 Packing Information ················································································································································· 24 
6.1 Carrier ···································································································································································· 24 
6.1.1 Tape and Reel Information ·························································································································· 24 
6.1.2 Aluminum Foil Bag ······································································································································ 27 
6.1.3 Box and Carton ············································································································································ 27 
6.2 Storage ··································································································································································· 27 
6.2.1 Bagged ························································································································································ 27 
6.2.2 Out-of-Bag ··················································································································································· 27 
7 Package Information ················································································································································ 28 
7.1 Top Marking ··························································································································································· 28 
7.2 Ordering Information ············································································································································· 28 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT6686 RF System 
Datasheet 
Confidential B 
7.3 Mechanical Drawing ··············································································································································· 29 
Exhibit 1 Terms and Conditions ········································································································································ 30 
 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT6686 RF System 
Datasheet 
Confidential B 
List of Figures 
Figure 1-1. MT6686 block diagram ············································································································································ 6 
Figure 3-1. Overview of MT6686 pin map ································································································································ 10 
Figure 4-1. Power-on sequence ················································································································································ 15 
Figure 4-2. Timing diagram conventions ·································································································································· 16 
Figure 4-3. Rising and falling times diagram ···························································································································· 16 
Figure 4-4. 2-wire SPI timing diagram ······································································································································ 17 
Figure 6-1. Carrier tape dimensions ········································································································································· 24 
Figure 6-2. Cover tape ······························································································································································ 25 
Figure 6-3. Reel dimensions ····················································································································································· 26 
Figure 7-1. Top marking of MT6686 ········································································································································· 28 
Figure 7-2. Physical dimension of MT6686 ······························································································································ 29 
 
List of Tables 
Table 2-1. I/O definitions ···························································································································································· 8 
Table 2-2. Abbreviations ····························································································································································· 9 
Table 3-1. MT6686 pin descriptions ········································································································································· 11 
Table 4-1. Absolute maximum ratings ······································································································································ 13 
Table 4-2. Recommended operating range ······························································································································ 13 
Table 4-3. DVDD13_CEXT specifications ··································································································································· 14 
Table 4-4. AVDD_GNSS/AVDD_XO/DVDD_TOP specifications ································································································· 14 
Table 4-5. DVDD18_12_IO specifications ································································································································· 14 
Table 4-6. Operating conditions of digital logics ······················································································································ 17 
Table 4-7. Reference clock requirement··································································································································· 18 
Table 4-8. Pin (XO_IN) input impedance ·································································································································· 18 
Table 4-9. GNSS RF specifications (GPS-only mode or Galileo-only mode or GPS/Galileo mode) ··········································· 19 
Table 4-10. GNSS RF specifications (GPS/GLONASS mode or Galileo/GLONASS mode) ·························································· 20 
Table 4-11. GNSS RF specifications (GPS/BeiDou mode) ········································································································· 20 
Table 4-12. GNSS RF specifications (GPS/GLONASS/BeiDou mode or GPS/GLONASS/Galileo mode) ····································· 21 
Table 4-13. GNSS RF specifications (GPS-L5/Galileo E5a/IRNSS/BeiDou-3 B2a mode) ···························································· 21 
Table 5-1. MT6686 product reliability qualification ················································································································· 22 
Table 5-2. MT6686 package reliability qualification ················································································································· 22 
Table 5-3. MT6686 device characteristics ································································································································ 23 
Table 6-1. Aluminum foil bag specification ······························································································································ 27 
Table 7-1. MT6686 ordering information ································································································································· 28 
 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT6686 RF System 
Datasheet 
Confidential B 
1 Introduction 
1.1 MT6686 Product Overview 
MT6686 is a GNSS L1-band and L5-band receiver front-end chip in a WLCSP package. It is a companion chip to 5G modems 
such as MT6880/90, MT6980/90 or MT2737, which come with the ADC (analog-to-digital converter) to process the GNSS 
receiver front-end signals. The interface driver/receiver buffer is designed to drive PCB trace loading. MT6686 does not 
have its own dedicated crystal oscillator. It uses either an external (temperature compensated) oscillator or clock source 
from the companion chips in the platform. 
 
A simplified block diagram of MT6686 is shown in Figure 1-1.  
 
1.1.1 Functional Block Diagram 
Top
2-wire 
Control
GPS w-wire
GPS dig
GPS RF
L5 bandGPS Rx L5 IQ
Top Clock
Top Data
HRSTB
MN
1.2G Antenna
LNA
GPS RF
GPS RF
GPIO0
GPIO1
(For eLNA Enable Control)
XO In
LNA
GPS RF
L1 bandGPS Rx L1 IQ
LNA MN
1.6G Antenna
LNA
GPS L1 RF In
GPS L5 RF In
 
Figure 1-1. MT6686 block diagram 
 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT6686 RF System 
Datasheet 
Confidential B 
1.1.2 Highlighted Features 
• MT6686 is a GNSS chip which contains a L1-band receiver front-end and a L5-band receiver front-end in a WLCSP 
package.  
• MT6686 supports GNSS external LNA which can be controlled by the GPIO0 and GPIO1 pins via SPI interface with 
modem chips. 
 
1.1.2.1 GNSS 
• RF supports simultaneous dual-band L1 and L5 operation. 
• RF supports GPS, Galileo, GLONASS and BeiDou. 
• Simultaneous reception of GPS + GLONASS + BeiDou + Galileo for more accurate positioning 
• Built-in calibrations for PVT variation 
• Supports external LNA. 
• Multi-mode filters for different GNSS receiver modes 
 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
8 
Confidential B 
2 Terms and Abbreviations 
2.1 Naming Convention 
Table 2-1. I/O definitions 
Pad Attribute 
AI Analog input (excluding pad circuitry) 
AIO Analog bidirectional (excluding pad circuitry) 
AO Analog output (excluding pad circuitry) 
DI Digital input (CMOS) 
DIO Bidirectional digital with CMOS input 
GND Ground 
P Voltage supply 
High-Z High-impedance output 
 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
9 
Confidential B 
2.2 Abbreviations 
Table 2-2. Abbreviations 
Abbreviation Description 
CMOS Complementary Metal-Oxide-Semiconductor 
DC Direct Current 
DIO Digital Input/Output 
ESD Electrical Static Discharge 
GNSS Global Navigation Satellite System 
GPIO General Purpose Inputs-Outputs 
GPS Global Positioning System 
I/O Input/Output 
IC Integrated Circuit 
IF Intermediate Frequency 
IQ In-phase and Quadrature-phase signals 
eLNA (External) Low Noise Amplifier 
LPF Low Pass Filter 
MHz Megahertz 
PCB Printed Circuit Board 
PGA Programmable Gain Amplifier 
PVT Process, Supply Voltage and Temperature 
RF Radio Frequency 
RX Receiver 
SAW Surface Acoustic Wave  
SPI Serial Peripheral Interface 
WLCSP Wafer Level Chip Scale Package 
 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
10 
Confidential B 
3 Pin Information 
3.1 Pin Map 
 
Figure 3-1. Overview of MT6686 pin map 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
11 
Confidential B 
3.2 Pin Descriptions 
Table 3-1. MT6686 pin descriptions 
Pin Name Pin Location I/O Type Description X Y 
Power Supply I/O 
AVDD_GNSS A-3 P 1.6 to 1.8V supply 1324.78 1324.78 
AVDD_XO B-5 P 1.6 to 1.8V supply 546.78 935.78 
DVDD_TOP B-4 P 1.6 to 1.8V supply 935.78 935.78 
DVDD13_CEXT B-3 P 1.3V supply (for sleep mode only 
- optional) 
1324.78 935.78 
DVDD18_12_IO D-6 P 1.8V/1.2V GPIO supply 157.78 157.78 
Ground I/O 
AVSS_GNSS A-2 GND GNSS ground 1713.78 1324.78 
AVSS_GNSS B-2 GND GNSS ground 1713.78 935.78 
AVSS_XO A-5 GND XO buffer ground 546.78 1324.78 
AVSS_XO B-6 GND XO buffer ground 157.78 935.78 
DVSS D-3 GND Digital ground 1324.78 157.78 
RX I/O 
GNSS_RF_IN_L1 B-1 AI L1-band GNSS RF input 2102.78 935.78 
GNSS_RF_IN_L5 A-1 AI L5-band GNSS RF input 2102.78 1324.78 
Baseband Analog Interface I/O 
GNSS_Q_L1 C-1 AO L1-band GNSS Intermediate 
Frequency (IF) receiver IQ signals 
2102.78 546.78 
GNSS_I_L1 D-1 AO L1-band GNSS IF receiver IQ 
signals 
2102.78 157.78 
GNSS_Q_L5 C-2 AO L5-band GNSS IF receiver IQ 
signals 
1713.78 546.78 
GNSS_I_L5 D-2  AO L5-band GNSS IF receiver IQ 
signals 
1713.78 157.78 
Digital I/O 
TOP_DATA C-5 DIO 2-wire data signal 546.78 546.78 
TOP_CLK C-6 DI 2-wire clock signal 157.78 546.78 
GPIO0 D-5 DIO eLNA control from companion 
modem via SPI 
546.78 157.78 
GPIO1 D-4 DIO eLNA control from companion 
modem via SPI 
935.78 157.78 
HRST_B C-4 DI Hardware reset from companion 
modem 
935.78 546.78 
Xtal I/O 
XO_IN A-6 AI Reference clock input  
(26 MHz/52 MHz)  
157.78 1324.78 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
12 
Confidential B 
Table 3-1. MT6686 pin descriptions (continued) 
Pin Name Pin Location I/O Type Description X Y 
Others 
SCAN_EN A-4 DI Tied to GND during operation. 
For testing only. 
935.78 1324.78 
DVDD28_FS C-3 AIO eFuse FSOURCE pin tied to GND 
during operation. 
1324.78 546.78 
 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
13 
Confidential B 
4 Specifications 
4.1 Electrical Characteristics 
4.1.1 Absolute Maximum Ratings 
Operating MT6686 IC beyond these specifications can damage the device. Functional operation is not guaranteed under 
these conditions. Functional operation under any absolute maximum condition for extended periods can affect the device 
reliability. 
 
Table 4-1. Absolute maximum ratings 
Pin # Name Parameter Rating Unit 
B-3 DVDD13_CEXT 1.3V supply 1.48 V 
B-4 DVDD_TOP 1.6 to 1.8V supply 1.98 V 
A-3 AVDD_GNSS 1.6 to 1.8V supply 1.98 V 
B-5 AVDD_XO 1.6 to 1.8V supply 1.98 V 
D-6 DVDD18_12_IO 1.8V/1.2V supply 2.0 V 
- Tj Max. junction temperature 125 °C 
All pins ESD protection (HBM) ±2,000 V 
All pins ESD protection (CDM) ±500 V 
 
4.1.2 Operating Descriptions 
Table 4-2. Recommended operating range 
Pin # Name Parameter Min. Typ. Max. Unit 
B-3 DVDD13_CEXT 1.3V supply 1.25 1.3 1.4 V 
B-4 DVDD_TOP 1.6 to 1.8V supply 1.5 1.6/1.8 1.89 V 
A-3 AVDD_GNSS 1.6 to 1.8V supply 1.5 1.6/1.8 1.89 V 
B-5 AVDD_XO 1.6 to 1.8V supply 1.5 1.6/1.8 1.89 V 
D-6 DVDD18_12_IO 1.8V/1.2V supply 1.71 1.8 1.89 V 
- Tj Commercial junction operating temperature 0 25 115 °C 
Industry junction operating temperature -20 25 125 °C 
- Ta Operation temperature -30 25 85 °C 
- Tstg Storage temperature (1) -40  125 °C 
(1) For complete storage conditions, please refer to Section 6.2 Storage. 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
14 
Confidential B 
4.2 Supply Specifications 
The following tables list the power supply requirements. 
 
Table 4-3. DVDD13_CEXT specifications 
Test Item Min. Typ. Max. Unit Note 
Output voltage, VCN13 1.25 1.3 1.4 V Optional, for sleep mode only 
Output current - - 0.1 mA Static leakage current 
 
Table 4-4. AVDD_GNSS/AVDD_XO/DVDD_TOP specifications 
Test Item Min. Typ. Max. Unit Note 
Output voltage, VCN18 1.5 1.6 to 1.8 1.89 V - 
Output current - 25 - mA L1 + L5 
 
Table 4-5. DVDD18_12_IO specifications 
Test Item Min Typ. Max. Unit Note 
Output voltage, VIO 1.71 
1.14 
1.8 
1.2 
1.89 
1.26 
V - 
Output current - - 0.1 mA Static leakage current 
 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
15 
Confidential B 
4.3 Power On/Off Sequence 
MT6686 uses two supply voltages, VIO and VCN18. The RSTB signal should only flag high 50μs after both VIO and VCN18 
supplies are ready. The figure below shows the chip’s power-on sequence. 
 
 
Figure 4-1. Power-on sequence 
 
DVDD18_12_IO and AVDD_GNSS/AVDD_XO/DVDD_TOP 
The I/O and internal control logic use the DVDD18_IO and AVDD_GNSS/AVDD_XO/DVDD_TOP supply pins. The supply 
voltages to these pins should be powered on in the sequence shown above for the logic to function properly. Inappropriate 
power-on sequence of DVDD18_IO and AVDD_GNSS/AVDD_XO/DVDD_TOP might lead to unexpected malfunction of 
MT6686. 
 
DVDD13_CEXT 
If sleep mode is used to cut off the current consumption on the AVDD_GNSS/AVDD_XO/DVDD_TOP pins, an external 1.3V 
supply is needed to keep the internal logic in the standby state. This supply voltage must be ready before entering the 
sleep mode. 
 
 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
16 
Confidential B 
4.4 Digital Logic Characteristics 
MT6686 timing characteristics and interface protocols are introduced in the following sections including general 
comments. 
 
4.4.1 Timing Diagram Convention 
Figure 4-2 shows the conventions used with timing diagram throughout this document. 
 
Waveform Description
Signal is changing from low to high
Signal is changing from high to low
Don’t care or bus is driven
Bus is changing from invalid to valid
Bus is changing from high-Z to valid
Denotes multiple clock periods
X
 
Figure 4-2. Timing diagram conventions 
 
4.4.2 Rising/Falling Time Definition 
Figure 4-3 is the rising and falling timing diagram. The actual signal timing curve is related to the external load conditions. 
See Table 4-6 for the operating conditions of digital logics. 
 
VDDIO
VOH = 85%
VOL = 15%
0V
Specified switch low points 
(active terminated load)
Actual switch low point
Actual switch high pointSpecified switch low points 
(active terminated load)
 
Figure 4-3. Rising and falling times diagram 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
17 
Confidential B 
Table 4-6. Operating conditions of digital logics 
Parameter Min. Typ. Max. Unit Note 
VDD, supply of core power 1.17 1.3 1.43 V - 
VDDIO, supply of I/O power 1.62 
1.08 
1.8 
1.2 
1.98 
1.32 
V - 
VIH, input logic high voltage 0.7*VDD - VDD + 0.5 V - 
VIL, input logic low voltage - - 0.3*VDDIO V - 
VOH (DC), DC output high voltage 0.7*VDD - VDD + 0.5 V VDD = min, IOH = 1.5 mA 
VOL (DC), DC output low voltage - - 0.3*VDD V VDD = min, IOL = 1.5 mA 
 
4.4.3 Protocol 
MT6686 uses the 2-wire control interface for the companion modem to program and control the chip. 
 
4.4.3.1 2-Wire 
The 2-wire bus of MT6686 is used by the SPI interface to access GPS and TOP command registers and configures/uses the 
GPIO0 and GPIO1 pins as external LNA enable control. 
 
The bit number of SDATA depends on different operating conditions, as shown in Figure 4-4. 
 
SCLK
SDATA
25/33/49-bit data
 
Figure 4-4. 2-wire SPI timing diagram 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
18 
Confidential B 
4.5 Reference Clock 
The MT6686 device supports a clock of either 26 MHz (default) or 52 MHz. If the 52 MHz clock is used, initialize the DATA 
pin to high state before releasing HRSTB from low to high state upon power-up. See Table 4-7 for the reference clock 
requirement. 
 
Table 4-7. Reference clock requirement 
Parameter Condition Min. Typ. Max. Unit 
Output frequency - - 26/52 - MHz 
Input loading - - 3 5 pF 
Duty cycle - 47 50 53 % 
Rise/Fall time@20 to 80% - - - 2 ns 
Voltage swing - 0.8 - 1.8 V 
Phase noise 1 kHz - -127 - dBc/Hz 
10 kHz - -139 - dBc/Hz 
100 kHz - -148 - dBc/Hz 
      
Table 4-8 shows MT6686 XO_IN input impedance. 
 
Table 4-8. Pin (XO_IN) input impedance 
Parameter Condition Min. Typ. Max. Unit 
XO_IN (Pin#A-6) Input loading - 3 5 pF 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
19 
Confidential B 
4.6 GNSS 
4.6.1 GNSS Radio Description 
The GNSS section consists of two separate RF receivers to provide simultaneous support of L1 and L5 frequency bands. For 
optimum co-existence performance, two external RF Surface Acoustic Wave (SAW) filters and a LNA must be placed before 
each of the receiver (see Figure 1-1). 
 
For each RF receiver (L1 or L5 frequency bands), the simultaneous reception of signals from one or multiple constellations 
is made possible by configuring the local oscillator and RX filter for different GNSS modes. 
 
4.6.2 GNSS Mode Definition 
L1 band operation 
• GPS-only mode or Galileo-only mode 
• GPS + Galileo mode 
• GPS + GLONASS, Galileo + GLONASS, or GPS + Galileo + GLONASS mode 
• GPS + BeiDou, Galileo + BeiDou, or GPS + Galileo + BeiDou mode 
• GPS + GLONASS + BeiDou, Galileo + GLONASS + BeiDou, or GPS + Galileo + GLONASS + Galileo mode 
The receiver sets LO to 1582.464 MHz and intermediate frequency filter to LPF with bandwidth of 24 MHz. 
 
L5 band operation 
• E5a mode 
• E5a/E5b mode  
Note: E5b is not supported by MT2737. 
 
4.6.3 GNSS Specifications 
Note: 
(1) The specification value is valid at room temperature (25°C). 
(2) All specifications are measured at the RF port unless otherwise specified. 
(3) The system performance depends on the companion modem chip’s capability. 
 
Table 4-9. GNSS RF specifications (GPS-only mode or Galileo-only mode or GPS/Galileo mode) 
Parameter Condition Min. Typ. Max. Unit 
RF input frequency - - 1575.42 - MHz 
Maximum input level Peak power of close-in out-of-band jammer (beyond 
the input frequency specified above) at RFIC input 
- - -17 dBm 
Input return loss Single-ended input and externally matched to 50Ω 
source using matching network for all gain 
-10 - - dB 
Gain (Av) Low current mode with max. PGA gain - 58 - dB 
NF High current mode with max. PGA gain - 3 - dB 
 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
20 
Confidential B 
Table 4-9. GNSS RF specifications (GPS-only mode or Galileo-only mode or GPS/Galileo mode) (continued) 
Parameter Condition Min. Typ. Max. Unit 
Image rejection All mode - 35 - dB 
DC offset - - ±50 ±100 mV 
RX current High current mode - 7.7 - mA 
 
Table 4-10. GNSS RF specifications (GPS/GLONASS mode or Galileo/GLONASS mode) 
Parameter Condition Min. Typ. Max. Unit 
RF input frequency GPS/GLONASS - 1575.42/ 
1601.71 
- MHz 
Maximum input level Peak power of close-in out-of-band jammer 
(beyond the input frequency specified above) 
at RFIC input 
- - -17 dBm 
Input return loss Single-ended input and externally matched to 
50Ω source using matching network for all 
gain 
-10 - - dB 
Gain (Av) (integrated 
average over Fc ±4M) 
Low current mode with max. PGA gain - 58 - dB 
NF (integrated average 
over Fc ±4M) 
High current mode with max. PGA gain - 3 - dB 
Image rejection All gain mode - 35 - dB 
DC offset - - ±50 ±100 mV 
RX current High current mode - 8.5 - mA 
 
Table 4-11. GNSS RF specifications (GPS/BeiDou mode) 
Parameter Condition Min. Typ. Max. Unit 
RF input frequency GPS/BeiDou - 1575.42/ 
1561 
- MHz 
Maximum input level Peak power of close-in out-of-band jammer 
(beyond the input frequency specified above) at 
RFIC input 
- - -17 dBm 
Input return loss Single-ended l input and externally matched to 
50Ω source using matching network for all gain 
-10 - - dB 
Gain (Av) (integrated 
average over Fc ±4M) 
Low current mode with max. PGA gain - 58 - dB 
NF (integrated average over 
Fc ±2M) 
High current mode with max. PGA gain - 3 - dB 
Image rejection All gain mode - 35 - dB 
DC offset - - ±50 ±100 mV 
RX current High current mode - 8.5 - mA 
 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
21 
Confidential B 
Table 4-12. GNSS RF specifications (GPS/GLONASS/BeiDou mode or GPS/GLONASS/Galileo mode) 
Parameter Condition Min. Typ. Max. Unit 
RF input frequency GPS/Galileo/GLONASS/BeiDou - 1575.42/ 
1601.71/ 
1561 
- MHz 
Maximum input level Peak power of close-in out-of-band jammer 
(beyond the input frequency specified 
above) at RFIC input 
- - -17 dBm 
Input return loss Single-ended input and externally matched 
to 50Ω source using matching network for 
all gain 
-10 - - dB 
Gain (Av) (integrated 
average over Fc ±4M) 
Low current mode with max. PGA gain - 58 - dB 
NF (integrated average 
over Fc ±2M) 
High current mode with max. PGA gain - 3 - dB 
Image rejection All gain mode - 35 - dB 
DC offset - - ±50 ±100 mV 
RX current High current mode - 10.6 - mA 
 
Table 4-13. GNSS RF specifications (GPS-L5/Galileo E5a/IRNSS/BeiDou-3 B2a mode) 
Parameter Condition Min. Typ. Max. Unit 
RF input frequency GPS/GLONASS - 1176.45 - MHz 
Maximum input level Peak power of close-in out-of-band jammer 
(beyond the input frequency specified 
above) at RFIC input 
- - -17 dBm 
Input return loss Single-ended input and externally matched 
to 50Ω source using matching network for 
all gain 
-10 - - dB 
Gain (Av) (integrated 
average over Fc ±4M) 
Low current mode with max. PGA gain - 58 - dB 
NF (integrated average 
over Fc ±4M) 
High current mode with max. PGA gain - 3 - dB 
Image rejection All gain mode - 35 - dB 
DC offset - - ±50 ±100 mV 
RX current High current mode - 10.5 - mA 
 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
22 
Confidential B 
5 Part Reliability 
5.1 Qualification Summary 
Table 5-1. MT6686 product reliability qualification 
Test Item and Condition Sample Size Result Reference 
HTOL 
Tj = 125°C 
Vccmax for core and I/O 
77 units x 3 lots Pass JESD22-A108 
ESD - Human body mode 
25 ± 5°C, 55 ± 10% R.H. 
(±)2000V 
Each condition 
 x 3 units Pass JS-001-2017 
ESD - Charged device mode 
25 ± 5°C, 55 ± 10% R.H. 
500V(+), 500V(-) 
Each condition 
 x 3 units Pass JS-002-2018 
Latch up (I-test)  
Class II 
100mA 
Each condition 
 x 3 units Pass JEDEC EIA/JESD78 
Latch up (Overvoltage) 
Class II 
1.5 * Vccmax 
Each condition 
 x 3 units Pass JEDEC EIA/JESD78 
 
Table 5-2. MT6686 package reliability qualification 
Test Item and Condition Number of 
Assembly Lots Sample Size per Lot 
Result 
(Judged By Functional Test 
and SAT) 
Reference 
Preconditioning 
MSL1 3 75 Pass J-STD-020 
Temperature cycling 
Condition B 
(-55°C to +125°C) 
1,000 cycles 
3 25 Pass JESD22-
A104 
Unbiased HAST 
130° C / 85% R.H., 230 Kpa 
 96 hrs 
3 25 Pass JESD22-
A118 
Biased HAST 
110°C/85% R.H., 264 hrs 
Vcc max for core & IO 
3 25 Pass JESD22-
A110 
High temperature storage 
test (HTST) 
150°C, 1,000 hrs 
3 25 Pass JESD22-
A103 
 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
23 
Confidential B 
5.2 Device Characteristics 
Table 5-3. MT6686 device characteristics 
Device Name MT6686 
Package Type WLCSP 
Package Body Size 2.17x1.42x0.5mm 
Lead Composition SAC405 
Fab Process 55 nm 
Fab Site TSMC 
Assembly Site Advanced Semiconductor Engineering, Inc (ASE), Taiwan 
Siliconware Precision Industries Co., Ltd. (SPIL), Taiwan 
Solder Ball Pitch 0.35mm 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
24 
Confidential B 
6 Packing Information  
 
Package Size (mm) EA/Roll Tape Real/Carton Full Carton Q’ty 
WLCSP 2.1655 x 1.4203 3,000 5 15,000 
 
6.1 Carrier 
6.1.1 Tape and Reel Information 
The tape carries system conforms to EIA-541 standards. 
 
An illustration of the MT6686 tape carrier and the corresponding dimensions are shown below of 3,000 EA per roll. 
 
 
Figure 6-1. Carrier tape dimensions 
 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
25 
Confidential B 
 
Figure 6-2. Cover tape 
 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
26 
Confidential B 
 
Figure 6-3. Reel dimensions 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
27 
Confidential B 
6.1.2 Aluminum Foil Bag 
Table 6-1. Aluminum foil bag specification 
Size Thickness Surface Impedance 
400 x 430 mm 0.15 x 0.005 mm 105 – 1012 Ohm/SQ 
 
6.1.3 Box and Carton 
 Material Strength Size Printing 
Box 3 Layer-B corrugated paper 12 Kgf/cm 340(L) x 325(W) x 50(H) mm Black (script, warming symbol, 
indicate symbol RoHS) 
Carton 5 Layer-AB corrugated paper 18 Kgf/cm 374(L) x 285(W) x 363(H) mm Black (script, warming symbol, 
indicate symbol RoHS) 
 
6.2 Storage 
6.2.1 Bagged 
The MT6686 devices must be delivered in sealed and aluminum foil bags (refer to Table 6-1 for the specification) along 
with desiccants of 110 x 120 mm weighing 66g. The components should be packaged within tape and reel carriers, 
adhering to warehouse control procedures utilizing the FIFO method. The shelf life is unlimited and does not require 
special storage conditions. 
 
6.2.2 Out-of-Bag 
The device does not require special storage conditions provided, and it is maintained at conditions equal to or less than 
30°C /85%RH. 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
28 
Confidential B 
7 Package Information 
7.1 Top Marking 
 
Figure 7-1. Top marking of MT6686 
 
7.2 Ordering Information 
Table 7-1. MT6686 ordering information 
Order Number Marking Operational Temperature Range Package 
MT6686P/A MT6686 -40 to 85°C WLCSP 
 
 
 
ESD CAUTION 
MT6686 is an ESD (electrostatic discharge) sensitive device and may be damaged with ESD or spike voltage. Although 
MT6686 comes with  built-in ESD protection circuitry, please handle it with care to avoid the permanent malfunction or 
the performance degradation.  
 
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
29 
Confidential B 
7.3 Mechanical Drawing 
 
Figure 7-2. Physical dimension of MT6686 
  
MediaTek Confidential
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2022 - 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
MT6686 RF System 
Datasheet 
30 
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
 For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only
MediaTek Confidential
For cchuang@ pvetec.com Use Only


---
# SRC0335 P39.A03.H5_V2.1QR对外资料1023.zip

来源：8676/MTK8676硬件资料/P39.A03.H5_V2.1QR对外资料1023.zip

SHA-256：e2519aa16e3bf37e50890592254a8c8089f34ce1400fd59ec5a15e83fe7ace9c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0335.html)

## 压缩包目录

- K39_EVB_V3.0（MT8676）开发板板和外设连接SOP.pdf（11432835 字节）
- MT8676&MTK8678_EVB_V3.1-系统框图-20240927(1).pdf（312323 字节）
- MT8676核心板系统框图_V2.0_0612.pdf（242103 字节）
- MT8676模组内underfill芯片20250428.xls（180224 字节）
- MT8678模组热仿真器件对应位置20250418.xlsx（193161 字节）
- MTK8676&78_EVB_V3.1_参考原理图PCB\K39.A01.Z0_V3.1_20240929.pcb（44849408 字节）
- MTK8676&78_EVB_V3.1_参考原理图PCB\K39__EVB_V3.1_20240927.sch（3267565 字节）
- P39.A03.H5(MT8676T) 车规级5G车载无线模块_V2.2 20250919.pdf（2502194 字节）
- P39.A03.H5_MT8676系统时钟分布图-0325.pdf（472212 字节）
- P39.A03.H5_通用PIN定义表_20250429.xlsx（138409 字节）
- P39.A03.H5关键物料清单.xls（22528 字节）
- P39.A03.H5核心板设计指南20251023.pdf（1943003 字节）
- P39.A03.H5高速信号要求list_20241016.xlsx（19266 字节）
- P39_A03.H5 芯片点散热凝胶标识图.xlsx（510436 字节）
- P39_A03.H5_V2.1 BGA焊盘定义.xlsx（50764 字节）
- P39核心板3D堆叠\P39_PCB-Assy-5G核心板总成(P39.A03.H5_5G-V2.1)-裸Die-2025-3-27.zip（4781140 字节）
- P39核心板参考封装\LGA580_64X64&59.5X59.5_TOP20240709.asc（145159 字节）
- P39核心板参考封装\LGA580_64X64&59.5X59.5_TOP20240709.pcb（255780 字节）
- P39核心板参考封装\LGA580_64X64&59.5X59.5_Top.sch（326100 字节）
- P39核心板参考封装\LGA580_64X64_top.sch（72984 字节）
- P39核心板参考封装\MT8676_TFE_V0p5_.ecxml（6516 字节）
- 天线设计注意事项.xls（19456 字节）
- 掌锐MT8676  8678-BGA模块贴片工艺应用V1.4.pdf（841298 字节）
- 芯片规格书\MT8676  Application Processor Functional Specification V0.5.pdf（7664640 字节）


---
# SRC0336 K39_EVB_V3.0（MT8676）开发板板和外设连接SOP.pdf

来源：K39_EVB_V3.0（MT8676）开发板板和外设连接SOP.pdf

SHA-256：d06ac404170c0778f0879e71eaf2000bec63d9cacea7bf374dd34c672bb2419f

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0336.html)

## PDF物理页 1

www.pvetec.com
掌锐电子
K39_EVB_V3.0（MT8676）开发板板和外设连接SOP
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 2

Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 3

注意：
• 以下灰色示意还未打通
• 目前TI的Serdes切换FPD3&FPD4需要硬件换电阻；
• DSI0默认是双PORT FPD-Link3 1920*1080；
• DSI0如果要改单PORT FPD-Link4 2560*1440，需要
换电阻；
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 4

12.9寸屏连接示意图 12.3寸屏连接示意图 14.96寸屏连接示意图
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 5

物料名称 产品料号 描述
12.3寸显示屏总成 004.034.0053323 12.3寸显示屏总成/1920*720 60FPS/12.3寸/DS90UB948/合肥疆程
12.3寸屏连接线 004.050.0059560 P05 延长线副屏，插头型号TS2004A06677，线长1m/东讯
12.9寸显示屏总成 004.034.0053368 LCMTP_触摸显示屏,12.9inch,1920×1080,1000nits,2-port LVDS（DE 
mode）,60Hz,293.12×173.88×7.4mm,FVS8129-2,DES:DS90UB948,广州六环信息科技有限公司
12.9寸屏连接线 004.050.0059991 屏幕连接线,A1：TE，A2：HSD；B：DQS-HSD-01-J05-C,A-B为 5.5 4芯+地黑色线(YJD-995)；其余为
UL1007 22#电子线,1000mm,K39 12.9屏幕连接线,线长1米/HSD 4PIN+TE电源座转HSD 4+2PIN/东讯
15.6寸显示屏总成 004.034.0053369 LCMTP_触摸显示屏,15.6inch,2560×1440,900nits,eDP（HV 
MODE）,60Hz,359.26×213.69×9.1mm,DD1601,DES:DS90UB944,广州六环信息科技有限公司
15.6寸屏连接线 屏幕连接线,A：DQS-HSD-01-J05-B；B：DQS-HSD-01-J05-C,A-B为 5.5 4芯+地黑色线(YJD-995)；其余
为UL1007 22#电子线；,1500mm,K39 15.6寸屏幕连接线,线长1.5米/HSD 4+2PIN连接线/东讯
14.96显示总成 004.034.0053318 14.96显示总成/2400*1200 60FPS/14.96寸/MAX96752GT/惠州精电
P32_14.96寸屏线 004.050.0059545 P32_14.96寸屏线/DSI0 屏 L=1.5米/FAKRA转接线 带电源线/东讯
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 6

注意：
• 目前TI的Serdes切换FPD3&FPD4需要硬件换电阻；
• 详细配置可查阅芯片规格书：
DS90UB981-Q1_SLUSE46.pdf
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 7

注意：
• 1920*1080 12.3寸屏电源：SEL0：1.6V，SEL1：0.5V，SEL2：0V；
• 2560*1440 15.6寸屏电源：，SEL0：1.2V，SEL1：0.5V，SEL2：0V；
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 8

Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 9

AVM&ADAS连接线板端示意图 AVM连接线摄像头端示意图
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 10

物料名称 产品料号 描述
2M AVM摄像头总成 004.033.0052706 MT8676(MT8678)摄像头/TXD-SC220AT-GMSLF-Thread-H190YJ/传感器:SC220AT/存储器:GT24C64E/串行
器:MAX96717F/连接器:FKMZ-SPCM6-NT5GP/1920Hx1280V/F.No:2.0/HFOV=200°VFOV=147°/TXD
AVM连接线 004.050.0059586 P32_AVM转接线/四合一FAKRA接头/350mA电流/9GHz带宽/50Ω阻抗/东讯
1M DMS摄像头总成 004.033.0052662 DMS摄像头/SG1-AR0144-8310-GMSL-H68/Sensor:ONSEMI 1.3MP AR0144 MONOCHROME 
SENSOR/Serializer:Max96705/森云
AVM连接线 004.050.0059586 P32_AVM转接线/四合一FAKRA接头/350mA电流/9GHz带宽/50Ω阻抗/东讯
8M ADAS摄像头总成 004.033.0052676 ADAS摄像头总成/A0023C62/8M内置ISP/3840*2160 40FPS/OX08B40+GW5300+MAX96717/广州晶华
8M 不带ISP ADAS摄像头总成 004.033.0052705 MT8676(MT8678)摄像头/TXD-OX08B-GMSL-H120YJ/传感器:OX08B40/存储器:GT24C64E（TBD）/串行
器:MAX96717/连接器:FKMZ-SPCM6-NT5GP/3840Hx2160V/视角选择:YTCA007-A/HFOV=121°VFOV=66°/TXD
FAKRA连接线 004.050.0059546 P32_摄像头连接线/FAKRA双母头/350mA电流/9GHz带宽/50Ω阻抗/东讯
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 11

电源线A&B端接线示意图 B+、GND、ACC接电示意图
A端 灰
色
接
插
件B端 黑
色
接
插
件
注意：
• 标准工作电压：12V；
• 工作电压范围：9.5V~16V；
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 12

物料名称 产品料号 描述
P32_电源线_A端 004.050.0059537 P32_电源线/P32电源线 对应板端A/molex接头 26芯/东讯
P32_电源线_B端 004.050.0059572 P32_电源线/P32电源线 对应板端B/molex接头 22芯/东讯
注意：
• 由于EVB需要外接多个屏幕和SPK电流较高；
• 普通的程控电源的电源线，如果平方不够会导致EVB循环重启；
• 建议使用1.5平方以上的线；
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 13

A端 灰
色
接
插
件B端 黑
色
接
插
件
注意：
• 模拟的SPK掌锐没有物料，
客户自行使用耳机或8Ω 2W
左右的SPK；
EVB 模拟SPK连接示意图
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 14

物料名称 产品料号 描述
EVB外接麦克风 004.028.0052812 EVB外接麦克风/GEGU9750WBL03A -340L，一对两MIC/朝阳聚声泰
车载3寸音响 004.028.0052821 车载3寸音响/79mm金刚型4欧15W~25W/祥业
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 15

注意：
• WiFi 6E，2.4GHz/5GHz/6GHz，支持Dual MAC地址，
支持802.11a/b/g/n/ac/ax，支持Rx MU-MIMO
• BT支持 V5.3，支持MRx，自适应ANT；
• 掌锐以下天线仅支持2.4GHz/5GHz不支持6GHz；
• 临时天线无法保证射频指标，仅供功能演示使用；
物料名称 产品料号 描述
WIFI/BT双频天线 004.032.0052768 2.4G&5G双频天线/频率2400~2500MHz 4900~5900MHz，增益3DBI，阻抗50欧，长度10CM/蓝一通讯
WiFi/BT ANT连接示意图
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 16

注意：
• K39 EVB，ADB使用的是Micro-USB线；
• 连接ADB时USB会切换为Host模式；
• Micro-USB线需自行准备；
• 双系统默认访问的是Yocto，使用
nbl_vm_ctl shell
命令进入访问Android的命令行Console；
• 可以用Ctrl+D 快捷键的方式返回Yocto；
• 此方式目前不支持Android ADB 投屏；
• 目前不支持Yocto投屏；
EVB ADB连接示意图
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 17

注意：
• SOC串口使用的是杜邦线；
• MCU串口也使用的是杜邦线；
• 串口板需要自备，串口板使用3.3V供电模式
• 具体如下：
EVB SOC 串口连接示意图 EVB SOC 串口连接示意图
 EVB MCU 串口连接示意图
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 18

注意：
• K39 EVB（MT8676）USB只支持一个Port 0节点；
• USB接口连接U盘时USB会切换为Device模式；
• 如果同时连接U盘和Micro-USB，USB节点处于Host模
式，U盘无法使用；
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 19

物料名称 产品料号 描述
K39_EVB_专用扩展板 002.001.0012487 K39.A01.Z0_EVB/扩展板（适用于K39_EVB底板）DSI+eDP+CSI+I2S+I2C+UART功能扩展
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 20

EVB TOP View
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 21

EVB Bottom View
注意：
• 固件烧录，当分区发送改变时需要短接强刷脚和GND
再通电；
• 一般发生在更换单双系统ROM或更换UFS硬件时；
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential

## PDF物理页 22

www.pvetec.com
感谢观看THANK YOU
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential
Shenzhen PVT Electronics Co.,LtdConfidential


---
# SRC0337 MT8676&MTK8678_EVB_V3.1-系统框图-20240927(1).pdf

来源：MT8676&MTK8678_EVB_V3.1-系统框图-20240927(1).pdf

SHA-256：5178c2f5fdc82ffdb732726fd5c6e88be93c6a20df85bb6ea3f9e0bf5dfd6d3c

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0337.html)

## PDF物理页 1

F
LPDDR5X
8+8 GB
UFS 3.1
128/256GB
MT6637X(76)
MT6653(78)
MT6686(78)
WIFI/BT/
GNSS
MT6197(76)
MT6199(78)               
NR sub6G/
LTE/3G/2G
ANT0
P39/P41/P45 SiP
（MT8676/MT8678
/MT2718）
CPU+GPU+APU
VPU+ADSP+ISP
BT/WIFI 
MIC2
CODEC
AK4619
SPI4
VBUS-5V
MIPI-CSI0
AU_HPL/R
Deserializer
DS90UB944
eDP
I2C
MIPI-DSI0 FPD4
MCU 
FS32K146
PA
TAS6424
CAN 
TJA1043
UART2
LDO
CAN CAN-Tx1/Rx1
MUTE 
LIN LIN LIN
ILL
Media
SPI
CAN FD
TJA1043
CAN-TX0/RX0HSCAN
Download
PWR_KYE
3.3V
UART1
MAX96714
MAX96724F
兼容MT8676
CSI0(76)/CSI3(78)
GMSL
8MHZ
I2C0
GPIO
Serializer
DS90UB981
MAX96724F
I2C2
WIFI MIMO
ANT1
ANT2
ANT3
I2C
AUDIO PA
BATT
EN
VBAT-4V
Gryo
ADC
GNSS
LCD Panel 
2400*1200*60
CAP Touch
Deserializer
MAX96752
LVDS
I2CDSI1(76)/DSI2(78)
LCD Panel 
2400*1200*60
CAP Touch
Deserializer
MAX96752
LVDS
GMSL2
GMSL2 I2C
Serializer
MAX96789
I2C0
eDP  Panel 
2560*1440*60
In-cell Touch
Deserializer
DS90UB944
eDP
I2C
Serializer
DS90UB983
DP1.4 2lane
I2C1
UFS
EMI
BCM89272
PCIE0
MIPI-CSI2 CSI2
I2C7(76)/I2C5(78)
MIPI-CSI4 CSI4
I2C8
MIPI-CSI5 CSI5
I2C9
MAX96718A
兼容MT8676
MIPI-CSI3 CSI3(76)/CSI4(78)
I2C10(76)/I2C7(78)
Gen3
MIRCO USB
USB0
TYPE-A
     
       Ethernet
1000BASE-T1PORT0
100BASE-T1
PORT425MHZ
MIC1
PMIC
MT6363VBAT-4V
BUCK
BUCK
BUCK
BUCK
BUCK
PMIC
MT6373
VBAT-4V
SPMI_I2C
BUCK
BUCK
BUCK
LDO*13
BUCK
SPMI_I2C
SIM_DET
SD_DET
VS1
VS2
VS3
INT
eSE
CIU98-B
SPI2(76)
SPI4(78)
BLE Module
FSC-BT618
BT2 UART
IQ
IQ
MIPI
EVB扩展板
MFI3.0
I2C11(76)
I2C14(78)
G_Sleep
ACC
BACK
ACC
REV_IN
SWCx2
DC-DCEN
VCC-5V
DebugUART0
A2B
AD2428W
ISO
FLASH
SPI
EN
FLASH
SPI
J_TAG
Debug
SIM1
SIM2
SIM1
eSIM
UART1UART1
PTA7
PTE8
PTA6
PTA16
PTC12
SPI0
TDM5-OUT
I2C
Navi
MCU_IIC
PTC16
4CH
E/B-CALL
SWTICH
FPD4
TDM-IN
DOUT1
USB 3.1(76)/USB 3.2(78)
USB2.0
FPD3
8M,30FPS
PTC11
PTD0
PTC3
PTA1
PTC9
PTA0
PTB12/13
UART2CAN0
CAN1
LIN
SPI2
    CELL
      NIMH
2M,30FPS
2M,30FPS
3M,60FPS
Deserializer
DS90UB948
LCD Panel 
1920*720*60
CAP Touch
LVDS
I2C
UART0
DIN1
1*ADAS
GMSL 4*AVM
GMSL 4*AVM
GMSL 2*CMS
Charger
DC-DC
MOS BQ25171
PWM_OUT
FG
Sensor
SPI1
elmos
521.42
RadarIO
FAN
DSI3
A
B
DSI3
1 N
IO
T-BOX
Connector
EVB扩展板
兼容MT8678
LCD Panel 
1920*1080*60
CAP Touch
Deserializer
MAX96752
DSI1(78)
I2C7(78)
Serializer
MAX96749
EVB扩展板
兼容MT8678
eDP
I2C14(78) 
MIPI-CSI1
MAX96712
GMSL
1M/2M,30FPS
1*DMS
CSI1(76)/CSI5(78)
I2C4
LT7911UXE
EVB扩展板
8K,30FPS
1000BASE-T1PHY(兼容MT8678)
YT8011AN
SGMII0
PCIE1 PCIE座(兼容MT8678)
SSD M.2 MKEY
PHY(兼容MT8678)
BCM89891
SGMII1
SD CardSDIO
BT Module
(EVB扩展板)
UART2(76)
UART5(78)
游戏机输入
GMSL2
LVDS
I2C
eSE
CIU98-B
Type-c
TPS2549兼容MT8678/USB2.0 TYPE-AUSB3
TPS2549兼容MT8678/USB2.0 TYPE-AUSB1
TPS2549
SPI4
I2S1
ECALL_BACKUP_ANT4
3*OMS
TDM
LCD Panel 
1920*1080*60
CAP Touch
LVDS
I2CGMSL2
2.5GBASE-T1
Type-c
Deserializer
MAX96752
eDP  Panel 
2560*1440*60
In-cell Touch
eDP
I2CSN65DSI86IPA
PRQ
eDP Panel 
2560*1440*60
In-cell Touch
TDM5-OUT
TDM5-IN
TDM5-IN
TDM-IN
TDM-OUT
TDM-OUT
TDM-OUT
TDM-IN
TDM-IN
I2C
TDM-IN
I2C
MUTE
TDM-OUT
I2S2_IN
V2X
SPI1
PPS
V2X_5G_ANT1
V2X_5G_ANT2
SPI
I2S2_OUT
IN1
IN2
IN4
AOUT1
8CH
8CH
8CH
8CH
I2C3(76)  /I2C10(78) 
USB2
FPD4


---
# SRC0338 MT8676核心板系统框图_V2.0_0612.pdf

来源：MT8676核心板系统框图_V2.0_0612.pdf

SHA-256：ba86fcf7c8576c28664d7e79c03b86ef07097f20e812f2076f14049655dcf935

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0338.html)

## PDF物理页 1

F
SD Card 
     SOC
MT6637X 
BT5.3
WIFI6E  MIMO 
GNSS L1/L5
4M2B
MT6197
12nm CMOS                 
NR 
sub6G/LTE/3G/2G
MTK8676
4nm
CPU：1*Makalu-
ELP@2.9GHz+3*Makalu@2.8G
Hz+4*Klein@2.0GHz/
170KDMIPS
GPU：6*Mali-G720@1.2GHz/
1.8TFLOPS
APU：4*MDLA5.0@1.35GHz+1
*MVPU@1.215GHz/20TOPS
4K2K@60fps,Decode
4k2k@60fps,Encode
ADSP：2*HiFi-3@800MHz
2*DSI：8lane,2.5Gbps/lane
DP1.4：2lane,8.1Gbps/lane
6*CSI-16CAM
LPDDR5x *2@7500Mbps
UFS 3.1
5G 3CC R16,LTE Cat-19
Wifi 6E,BT5.3,GNSS 4M2B
PCIe3.0+USB3.1+USB2.0
Android U
VBAT_4V
PMIC
MT6363
2*SIM Card
2xDSI
1xDP1.4
SIM
SDIO
26MHZ
BT/WIFI 
GNSS
IQ
MIPI_M
IQ
3 Wire 
Gyro&      
G-sensor
1xUSB2.0
Debug
6xMIPI CSI   
1xPCIE 3.0
3xUART
UART0
POP
USF_TX
USF_RX
6xSPI 
CHRDETB
SPMI_M_SCL/SDA
WATCHDOG
POWER_KEY
RSETB
DCXO
PMIC
MT6319CUW
LDO*X
SAW
SAWWIFI MIMO
LNA 
L1
SAW
LB 
LPAMID
MHB 
LPAMID
TX_LB
RX_LB/GSM
MIPI0/2
MIPI0/MIPI3
TX_MHB
RX_MHB/GSM
ANT1
DRX 
MIMO
Triplexer
UHB
LB
MB
ENDC 
LPAMD
ANT3
Diplexer
ANT2
ANT0
Triplexer
LB
UHB
MB
LB
HB
LB
VDD_MODEM
BUCK
VDD_SRAMBUCK
VDD_COREBUCK
4xI2S_IN/OUT
PMIC
MT6319COW
ET 1
MT6308
ET 0
MT6308
2*LPDDR5X 
64bit   UP 24GB
7500Mbps
UFS3.1/4.0
14.4Gbps
VDD_PROC_M
VDD_PROC_B
VDD_MM
MIPI5
MIPI4
HUB-CB-TX1
LB
HUB-CB-TX0
HUB_DRX
TX_1
HB1_TX1A0
ANT_LB
MHB
GPIO Numbe =X
LNA 
L5
SAW
Diplexer
HB
LB
1575.42MNZ
1176.45MHZ
IQ
3 Wire 
EMI_VDDQ
1xUSB3.1
1xTDM_IN/OUT
10xI2C
 6xSCP_I3C
KEYPAD
CLOCK
MT6685
SPMI_M_SCL
SPMI_M_SDA
26MHZ
32KHZ
UFS_CLKREF
RFCK2A
RFCK1A
BBCK1
BBCK2
26MHZ
26MHZ
26MHZ
26MHZ
26MHZ
WBG
SYSTEM
RFCK1B
26MHZ
RFCK2A
EXT_PMIC_EN2
SUB-PMIC
MT6373EXT_PMIC_EN1
VDD_GPU
VDD_GPUSTACK
VDD_PROC_L
BUCK
BUCK
BUCK
LDO
LDO
LDO
VTP
VSIM
VMCH
SCP_I2C5
INT
N41_PRX
UHB
MB
HUB_PRX
TX_0
ANT_MHB
LB_DRX
MB0_DRX
HB0_DRX
ANT_E
LB
MB
1xI2S_IN
LDO
TX_GSM
GSMTX
Triplexer
MB Triplexer
UHB
MB
LB
DRX 
ANT_LB
ANT_MHB
ANT_MHB
HB0_MIMO
MHB0_MIMO
LB0_MIMO
B28MIMO
MIPI0
MIPI1
MIPI0/MIPI3
MIPI1/MIPI2
VCC MHB-LPAMD+N41+TX0
VCC  LB-LPAMID+TX1


---
# SRC0339 MT8678模组热仿真器件对应位置20250418.xlsx

来源：MT8678模组热仿真器件对应位置20250418.xlsx

SHA-256：99bfe463647fc4a5fbd097c975d42a75c0c7959f5ba4934b9afce5cf859d6420

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0339.html)

单元格原值与公式文本按行提取；格式、合并单元格、图形及公式计算结果以原工作簿为准。

## 工作表 1

MT8676模组热仿真芯片对应位置	
序号	IC
1	MT8676/46
2	LPDDR5X(1)
3	LPDDR5X(2)
4	UFS3.1
5	MT6197
6	MT6363
7	MT6373
8	MT6319
9	MT6319
10	MT6637
11	MT6685
12	MT6308
13	MT6308
14	SKY58101-11(globle)
	SKY58100-11(china)
15	S55643-11(共用)
16	S55281-11(共用)（1）
18	S55281-11(共用)（2）
17	QM77058A(globle)
	QM77058D(china)


---
# SRC0340 P39.A03.H5(MT8676T) 车规级5G车载无线模块_V2.2 20250919.pdf

来源：P39.A03.H5(MT8676T) 车规级5G车载无线模块_V2.2 20250919.pdf

SHA-256：b3d907d5dd48430f5a34667ad52bffa7bfb909dc5be3093a3b67e2faa55af56e

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0340.html)

## PDF物理页 1

专业车联网智能硬件方案提供商
车 规 级 5 G 车 载 无 线 模 块
产品名称：车载无线模块
英文名称：Vehicle wireless module
产品型号：P39.A03.H5
芯片平台：MT8676（5G版）
硬件版本：V2.1
文档版本：V2.2
发布日期：2025.9.19
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 2

掌锐秘密，未经许可不得扩散
2 / 34
修订记录
序号 版本 时间 修订人 修订内容
1 V1.0 2024.2.23 黄清华 首次发版
2 V2.0 2024.7.16 黄清华 更新模块尺寸图纸，修改引脚定义，更新
模块尺寸图，修订 ANT 焊盘露铜
3 V2.1 2025.1.9 黄清华 模块更新为 BGA 封装、更新硬件框图、修
订引脚定义
4 V2.1 2025.6.3 唐士锵 增加国内频段 BOM，删除 EVDO，修正 5G
网络速率等
5 V2.2 2025.9.19 唐士锵
增加文档版本号、工作电压、产品特性表
注释；完善 SoC 型号；修订模块引脚分布
图和模块尺寸图；
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 3

掌锐秘密，未经许可不得扩散
3 / 34
目 录
一、 产品综述 ............................................................................................4
二、 产品主要特性表 ................................................................................5
三、 模块功能框图 ....................................................................................9
四、 突出亮点及特性 ..............................................................................10
五、 模块引脚定义 ..................................................................................11
六、 模块引脚分布图 ..............................................................................31
七、 模块尺寸图 ......................................................................................32
八、 天线接口说明 ..................................................................................33
九、 SMT 参考炉温曲线 ..........................................................................34
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 4

掌锐秘密，未经许可不得扩散
4 / 34
一、 产品综述
P39.A03.H5 是 掌 锐 电 子 推 出 的 一 款 基 于 MediaTek MT8676 芯 片 打
造 的 车 规 级 5G智 能 座 舱 核 心 模 块 ，系 统 设 计 符 合 AEC-Q104标 准 ，具 有
功 能 丰 富 ， 尺 寸 小 ， 功 耗 低 ， 性 能 优 等 特 点 。 满 足 汽 车 智 能 化 ， 联 网
化 的 需 求 。 帮 助 客 户 缩 短 项 目 开 发 周 期 ， 减 少 研 发 成 本 。 本 模 块 集 成
了 5G ， GNSS 4M2B ， WiFi 6E 和 BT 5.3 无 线 通 讯 功 能 。 可 实 现 多 屏 同
显 /异 显 、 多 屏 多 用 户 、 Hypervisor、 仪 表 投 屏 、 HUD、 T-Box、 AVM、
DMS、 OMS、 DVR等 功 能 。
主 控 芯 片 采 用 64位 8核 处 理 器 ， 1核 Makalu-ELP， 3核 Makalu， 4核
Klein，主 频 2.9GHz，算 力 170K DMIPS。采 用 4nm低 功 耗 芯 片 制 程 工 艺 。
集 成 Mali-G615 MC6@1.2GHz GPU ， 图 形 图 像 处 理 能 力 高 达 1.8T
FLOPS。集 成 APU 780，AI算 力 20 TOPS。可 实 现 最 大 19路 摄 像 头 接 入 ，
Video encode 能 力 达 4K2K@60fps。 显 示 输 出 可 支 持 8屏 异 显 6屏 异 触 ，
最 大 支 持 24G LPDDR5x, 搭 载 Hypervisor三 系 统 。模 块 采 用 贴 片 式 工 艺 ，
共 580个 BGA引 脚 。
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 5

掌锐秘密，未经许可不得扩散
5 / 34
二、 产品主要特性表
产品特性 描述
SoC MediaTek MT8676T/EZA（ExposedDie 封装）
CPU
1* Makalu-ELP@2.9GHz +3* Makalu@2.8GHz +4* Klein@2.0GHz
算力：170K DMIPS
GPU
6*Mail-G615@1.2GHz
算力：1.8T FLOPS
APU
2* MDLA 5.0@1.35GHz +1* MVPU@1.215GHz
算力：20 TOPS，NeuroPilot 7
RAM
LPDDR5x *2+ UFS 3.1
8G *2 + 128G（标配）
12G/16G/24G + 128G/256G（选配
*
）
DRAM 带宽
4* 16bit，Max 7500Mbps；
最大容量 24GB
OS Yocto(SOS) + Yocto(UOS) + Android U(UOS)
工作温度 – 40 度～＋85 度（选配车规级 Memory）
存储温度 – 40 度～＋95 度
尺寸 59.5mm * 59.5mm * 5.4mm
工作电压 DC 3.6V-4.2V Type：4.0V
抗静电
HBM：≤±2000V；
CDM：≤±500V；
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 6

掌锐秘密，未经许可不得扩散
6 / 34
网
络
频
段
中国版
不覆盖中国台湾/香港
（选配
*
）
GSM： 900/1800MHz
WCDMA： B1/B5/B8
FDD-LTE： B1/B3/B5/B8
TDD-LTE： B34/B38/B39/B40/B41
NR： N1/N3/N5/N8/N28A/N41/N78/N79
全球版
部分频段无法覆盖
（选配
*
）
GSM： 850/900/1800/1900MHz
WCDMA： B1/B2/B4/B5/B6/B8/B19
FDD-LTE：
B1/B2/B3/B4/B5/B7/B8/B12/B13/B14/B17/
B18/B19/B20/B25/B26/B28/B66/B71
Rx Only：B32/B75/B76
TDD-LTE： B34/B38/B39/B40/B41
FDD NRSA： N1/N2/N3/N5/N7/N8/N20/N25/N28/N66/N71/N75/N76
TDD NRSA： N38/N40/N41/N77/N78/N79
网络速率
5G NRSA：
NR Sub6 3CC R16；
Up to 5.11Gbps downlink, 2.5Gbps uplink；
4G LTE：
LTE CAT-18
Up to 1.2Gbps downlink, 210Mbps uplink；
3G UMTS： Up to 21Mbps downlink, 11.5Mbps uplink；
WiFi
WiFi 6E，支持 2.4GHz / 5GHz / 6GHz
**
频段，支持 DBDC；
支持 802.11a/b/g/n/ac/ax 技术
兼容 802.11 d/e/h/i/j/k/r/v 技术
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 7

掌锐秘密，未经许可不得扩散
7 / 34
Bluetooth
支持 Bluetooth v5.3；
支持 BT/BLE dual mode；
GNSS
支持 L1：GPS(QZSS)/GLONASS/BeiDou/Galileo
支持 L5：GPS/BeiDou-III B2A/Galileo-E5a/NavIC
IMU BMI323（选配
*
）
SIM 双 SIM 卡，支持热插拔
TF 卡 支持 SD/SDIO 3.0，最大支持 2T；
LCM
显示接口：2 路 MIPI_DSI 和 1 路 DP 1.4，最多支持 3 路 DSC；
输出带宽：DSI，每路 4-lane，2.5Gbps/lane；
DP 1.4，4-lane（shared with USB3.1），8.1Gbps/lane；
显示屏 ×6，6 屏异显异触；
Camera
摄像头接口：6 路 MIPI_CSI；3 路内置 ISP；
输入带宽：CSI，每路 4-lane，6.5Gbps/lane；
摄像头 ×19；
Video decode H.265/H.264/VP9/AV1：4K2K@60fps
Video encode H.265/H.264：4K2K@60fps
ADSP 2* HiFi-3@800MHz
应
用
接
口
GPIO*89 89 个，部分 IO 口只能做 GPIO 功能，不能做中断功能使用；
UART*4
UART 0 为 Debug 专用；
UART 1~3 可外接设备；
USB*1 USB 3.1 + USB 2.0，OTG and Device mode Switch
PCIe*1 PCIe Gen3 1-lane
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 8

掌锐秘密，未经许可不得扩散
8 / 34
I2C*17
14 路 I2C 接口（6 路可配置 I3C）；
3 路 SCP I2C；
SPI*6
5 路 SPI（SPI0，SPI1，SPI2，SPI3，SPI4）；
最大可以调整到 6 路 SPI口（SPI7）；
I2S*5
4 路 I2S IN+OUT（I2S0、I2S1、I2S2、I2S6）；
1 路 FM I2S IN；
TDM*2
1 路 TDM OUT，最大支持 8CH；
1 路 TDM IN，最大支持 8CH；
PWM*4 最大 4 PWM CH
选配
*
：配置存在 BOM 差异，非标准配置功能；
6GHz
**
：WiFi 6GHz 由于各国家/地区政策原因，支持的信道各异。如中国大陆地区暂不支持；
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 9

掌锐秘密，未经许可不得扩散
9 / 34
三、 模块功能框图
模 块 硬 件 框 图
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 10

掌锐秘密，未经许可不得扩散
10 / 34
四、 突出亮点及特性
 支 持 多 屏 异 显 ；
 支 持 19路 摄 像 头 接 入 ， 可 支 持 AVM、 DMS、 OMS、 DVR等 ；
 集 成 GNSS/Wi-Fi/BT；
 LTE CAT-18；
 支 持 LPDDR5x；
 集 成 8核 CPU， 台 积 电 4nm制 程 ；
 集 成 T-Box；
 1.8TFLOPS GPU算 力 ；
 20TOPS APU算 力 ；
 支 持 Hypervisor；
 IATF 16949 qualified；
 研 发 流 程 遵 从 ASPICE；
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 11

掌锐秘密，未经许可不得扩散
11 / 34
五、 模块引脚定义
1) MT8676 中所有 SPI,I2C,UART,I2S,GPIO,EINT,TDM 口电压域都是 1.8v，请注意电压匹配
2) SIM2（IO/RST/CLK）未使时可以做 GPIO（1.8V 电压域）使用。
3) T 卡 data/cmd/clk/rst 接口默认为 SDIO 模式，不使用 TF 卡时可以当做 GPIO(1.8V 电压域)使用。
对应 MT8676 芯
片 PIN
模块
PIN
模块定义 描述&备注
1 D_GND
AP5 2 CSI2B_RDN1 MIPI CSI2B 的 DATA1-N
AP6 3 CSI2B_RDP1 MIPI CSI2B 的 DATA1-P
4 D_GND
AN3 5 CSI2A_RCP MIPI CSI2A 的 CLK-P
AN4 6 CSI2A_RCN MIPI CSI2A 的 CLK-N
AM5 7 CSI2A_RDN2 MIPI CSI2A 的 DATA2-N
AM6 8 CSI2A_RDP2 MIPI CSI2A 的 DATA2-P
9 D_GND
10 D_GND
11 D_GND
12 D_GND
MT6363_L12 13 VIO18_PMU 系统 IO 电平 1.8V 供电输出,200MA
AN6 14 CSI2A_RDP0 MIPI CSI2A 的 DATA0-P
AN5 15 CSI2A_RDN0 MIPI CSI2A 的 DATA0-N
AR5 16 CSI2B_RDN3 MIPI CSI2B 的 DATA3-N
AR6 17 CSI2B_RDP3 MIPI CSI2B 的 DATA3-P
AV10 18 GPIO117_URXD2
MT8676 UART2_RX,用于与外设数据通
讯;GPIO117,EINT117;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV9 19 GPIO121_UTXD2
MT8676 UART2_TX,用于与外设数据通
讯;GPIO121,EINT121;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AT18 20 SCL9 I2C9 的 SCL,I3C9 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
21 D_GND
22 D_GND
AU18 23 SDA9 I2C9 的 SDA,I3C9 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AU12 24 GPIO129
GPIO129,此 IO 口只能做 GPIO 功能,不能做中断功能;可以
复用成其它 Func,请参考 MT8676_GPIO_Application_Spec
表格
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 12

掌锐秘密，未经许可不得扩散
12 / 34
AV12 25 GPIO125_CAM_CL
K2
默认配置是 CAM_CLK2,若要复用成 GPIO125 请注意修
改软件配置，此 IO 口不能做中断功能；可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
26 D_GND
27 D_GND
AT3 28 CSI1A_RDP2 MIPI CSI1A 的 DATA2-P
AU3 29 CSI1A_RDN2 MIPI CSI1A 的 DATA2-N
AU13 30 SCL12 I2C12 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AU14 31 SCL8 I2C8 的 SCL,I3C8 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AU11 32 GPIO126_CAM_CL
K3
默认配置是 CAM_CLK3,若要复用成 GPIO126 请注意修
改软件,此 IO 口只能做 GPIO 功能,不能做中断功能;可以
复用成其它 Func,请参考 MT8676_GPIO_Application_Spec
表格
AU10 33 GPIO130
GPIO130,此 IO 口只能做 GPIO 功能,不能做中断功能;可以
复用成其它 Func,请参考 MT8676_GPIO_Application_Spec
表格
AR9 34 GPIO118_CAM_RS
T3
CAM_RST3;GPIO118,EINT118;可以复用成其它 Func,请
参考 MT8676_GPIO_Application_Spec 表格
AW20 35 GPIO35_AP_GOO
D
GPIO35,EINT35,AP_GOOD;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV15 36 SDA8 I2C8 的 SDA,I3C8 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV14 37 SDA12 I2C12 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AU4 38 CSI1A_RDN0 MIPI CSI1A 的 DATA0-N
AT4 39 CSI1A_RDP0 MIPI CSI1A 的 DATA0-P
AV4 40 CSI1A_RCP MIPI CSI1A 的 CLK-P
AW4 41 CSI1A_RCN MIPI CSI1A 的 CLK-N
AU15 42 SCL13 I2C13 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV16 43 SDA13 I2C13 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV20 44 SDA1 I2C1 的 SDA,I3C1 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AW9 45 GPIO122 GPIO122,EINT122;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
46 D_GND
AU20 47 SCL1 I2C1 的 SCL,I3C1 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
48 D_GND
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 13

掌锐秘密，未经许可不得扩散
13 / 34
AU21 49 GPIO104_TDM_LR
CK
GPIO104,EINT104,DM_LRCK;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
AV5 50 CSI1B_RDN1 MIPI CSI1B 的 DATA1-N
AU5 51 CSI1B_RDP1 MIPI CSI1B 的 DATA1-P
AT5 52 CSI1B_RDP3 MIPI CSI1B 的 DATA3-P
AT6 53 CSI1B_RDN3 MIPI CSI1B 的 DATA3-N
AY21 54 GPIO100_TDMIN_
DATA0
GPIO100,EINT100,TDMIN_DATA0;可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
AU23 55 GPIO95_TDMOUT
_DATA0
GPIO95,EINT95,TDMOUT_DATA0;可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
BC20 56 GPIO34_KPROW1 KPROW1,GPIO34,EINT34;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
BA20 57 GPIO31_KPCOL1 KPCOL1,GPIO31,EINT31;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AY20 58 GPIO32_KPCOL0 KPCOL0,GPIO32,EINT32;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
BB20 59 EINT33_SD SD 卡中断 EINT33,GPIO33;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
60 D_GND
AW21 61 GPIO99_TDM_BC
K
GPIO99,EINT99,TDM_BCK;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
62 D_GND
63 D_GND
AY2 64 CSI0A_RCP MIPI CSI0A 的 CLK-P
BA1 65 CSI0A_RCN MIPI CSI0A 的 CLK-N
AV26 66 BPI_D_BUS4 BPI_D_BUS4,GPIO89,EINT89;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
AU22 67 GPIO97 GPIO97,EINT97;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
BC21 68 GPIO103_LGA-DA
T3
备用天线切换检测脚 3;GPIO103,EINT103;可以复用成其
它 Func,请参考 MT8676_GPIO_Application_Spec 表格
BB21 69 GPIO102 GPIO102,EINT102;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV24 70 GPIO93_PWM_2 GPIO93,EINT93，建议做 PWM2 功能;可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
BA21 71 GPIO101 GPIO101,EINT101;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV27 72 BPI_D_BUS2 BPI_D_BUS2,GPIO87,EINT87;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
AV21 73 GPIO98 GPIO98,EINT98;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AW3 74 CSI0A_RDN0 MIPI CSI0A 的 DATA0-N
AW2 75 CSI0A_RDP0 MIPI CSI0A 的 DATA0-P
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 14

掌锐秘密，未经许可不得扩散
14 / 34
AV2 76 CSI0A_RDP2 MIPI CSI0A 的 DATA2-P
AW1 77 CSI0A_RDN2 MIPI CSI0A 的 DATA2-N
AT32 78 URXD0 MT8676 UART0_RX,用于与外设数据通讯，建议用于
debug
AV31 79 UTXD0 MT8676 UART0_TX,用于与外设数据通讯，建议用于
debug
AV22 80 GPIO96 GPIO96,EINT96;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AU26 81 BPI_D_BUS5 BPI_D_BUS5,GPIO90,EINT90;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
AW38 82 GPIO111 GPIO111,EINT111;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AU24 83 GPIO94_PWM_3 GPIO94,EINT94，建议做 PWM3 功能;可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
AV30 84 GPIO209_JTRST JTRST,GPIO209,此 IO 口不能做中断功能;可以复用成其
它 Func,请参考 MT8676_GPIO_Application_Spec 表格
AU29 85 GPIO212_JTDI JTDI,GPIO212,此 IO 口不能做中断功能;可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
BB2 86 CSI0B_RDN1 MIPI CSI0B 的 DATA1-N
BA2 87 CSI0B_RDP1 MIPI CSI0B 的 DATA1-P
AY3 88 CSI0B_RDP3 MIPI CSI0B 的 DATA3-P
BA3 89 CSI0B_RDN3 MIPI CSI0B 的 DATA3-N
AU30 90 GPIO211_JTMS JTMS,GPIO211,此 IO 口不能做中断功能;可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
AU31 91 GPIO210_JTCK JTCK,GPIO210,此 IO 口不能做中断功能;可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
92 D_GND
AW39 93 GPIO112 GPIO112,EINT112;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV38 94 GPIO113 GPIO113,EINT113;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AY38 95 GPIO107 GPIO107,EINT107;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV34 96 EINT6_ACC ACC 通知脚,EINT6,GPIO6;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV29 97 GPIO213_JTDO JTDO,GPIO213,此 IO 口不能做中断功能;可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
98 D_GND
99 D_GND
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 15

掌锐秘密，未经许可不得扩散
15 / 34
AU36 100 GPIO65 GPIO65,EINT65;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AT34 101 GPIO131_DISP_P
WM GPIO131,可复用成 DISP_PWM,此 IO 口不能做中断功能
102 D_GND
AU33 103 GPIO5_IDDIG IDDIG,EINT5,GPIO5;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
BA39 104 GPIO108 GPIO108,EINT108;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV39 105 GPIO114 GPIO114,EINT114;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
BB38 106 GPIO105 GPIO105,EINT105;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AW37 107 GPIO109 GPIO109,EINT109;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AU34 108 EINT4_BACK 倒车通知脚 BACK,EINT4,GPIO4;可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
109 D_GND
AV32 110 SDA7 I2C7 的 SDA,I3C7 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AV35 111 GPIO62 GPIO62,EINT62;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
112 D_GND
AW32 113 SCL7 I2C7 的 SCL,I3C7 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
114 D_GND
AU32 115 SDA0 I2C0 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AY39 116 GPIO110 GPIO110,EINT110;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
BA38 117 GPIO106 GPIO106,EINT106;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
118 D_GND
AV33 119 SCL0 I2C0 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
120 D_GND
AV25 121 GPIO91_DP_TX_H
PD
DP 的热插拔,EINT91,GPIO91;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
AV36 122 GPIO63 GPIO63,EINT63;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AU35 123 GPIO132_DISP_P
WM1
GPIO132,可复用成 DISP_PWM1,此 IO 口不能做中断功能,
可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 16

掌锐秘密，未经许可不得扩散
16 / 34
AU25 124 GPIO92_DP_OC_E
N
DP 的 EN 脚,EINT92,GPIO92;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
125 D_GND
126 D_GND
127 NC NC 脚，悬空
128 NC NC 脚，悬空
129 D_GND
130 D_GND
131 D_GND
132 D_GND
133 D_GND
134 ANT3 5G 天线 3
135 D_GND
136 D_GND
137 D_GND
138 D_GND
139 ANT1 5G 天线 1
140 D_GND
141 D_GND
142 D_GND
143 NC NC 脚，悬空
AF35 144 I2S1_DO I2S1_DO，EINT22,GPIO22;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AF34 145 I2S1_DI I2S1_DI，EINT21,GPIO21;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
146 D_GND
147 D_GND
148 ECALL_BACKUP_
ANT5 ECALL_ANT5 备用天线
149 D_GND
AE35 150 I2S1_LRCK I2S1_LRCK，EINT20,GPIO20;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
AE34 151 I2S1_BCK I2S1_BCK，EINT19,GPIO19;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
152 D_GND
153 D_GND
154 NC NC 脚，悬空
155 NC NC 脚，悬空
AH36 156 I2S2_DO I2S2_DO，EINT26,GPIO26;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AH35 157 I2S2_DI I2S2_DI，EINT25,GPIO25;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
158 D_GND
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 17

掌锐秘密，未经许可不得扩散
17 / 34
159 D_GND
160 ANT0 5G 天线 0
161 D_GND
AG36 162 I2S2_LRCK I2S2_LRCK，EINT24,GPIO24;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
AG35 163 I2S2_BCK I2S2_BCK，EINT23,GPIO23;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
164 NC NC 脚，悬空
165 NC NC 脚，悬空
166 D_GND
167 D_GND
AG38 168 I2S0_DI I2S0_DI，EINT17,GPIO17;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AG37 169 I2S0_DO I2S0_DO，EINT18,GPIO18;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
170 D_GND
171 D_GND
172 NC NC 脚，悬空
173 D_GND
AF36 174 I2S0_LRCK I2S0_LRCK，EINT16,GPIO16;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
AF37 175 I2S0_BCK I2S0_BCK，EINT15,GPIO15;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
176 NC NC 脚，悬空
177 NC NC 脚，悬空
178 NC NC 脚，悬空
179 NC NC 脚，悬空
AE37 180 SDA6 I2C6 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AE36 181 SCL6 I2C6 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
182 D_GND
183 D_GND
184 ANT2 5G 天线 2
185 D_GND
186 D_GND
187 D_GND
AU28 188 BPI_D_BUS1 GPIO86,EINT86;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
189 NC NC 脚，悬空
190 NC NC 脚，悬空
MT6373_H14 191 VUSB_PMU AUDIO CODEC 芯片 MT6338 的供电 3.0V，不用请悬空
192 NC NC 脚，悬空
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 18

掌锐秘密，未经许可不得扩散
18 / 34
193 NC NC 脚，悬空
194 D_GND
195 D_GND
196 GYRO_SENTRY_I
NT GYRO_SENTRY_INT，IMU 中断脚通知底板，哨兵模式
197 NC NC 脚，悬空
198 NC NC 脚，悬空
199 NC NC 脚，悬空
200 NC NC 脚，悬空
201 D_GND
202 D_GND
203 D_GND
204 NC NC 脚，悬空
205 NC NC 脚，悬空
206 NC NC 脚，悬空
207 NC NC 脚，悬空
208 NC NC 脚，悬空
209 NC NC 脚，悬空
210 NC NC 脚，悬空
211 NC NC 脚，悬空
212 D_GND
213 NC NC 脚，悬空
214 NC NC 脚，悬空
215 NC NC 脚，悬空
216 NC NC 脚，悬空
217 NC NC 脚，悬空
218 NC NC 脚，悬空
F13 219 GPIO0_FMI2S_LR
CK
此 IO 口在核心板有 12K 电阻上拉，用于核心板的 Boot
trapping 配置，除了做 I2S 功能，非必要尽量优先选择其
他 IO 口替代，也不要做上下拉配置。
FMI2S_LRCK,GPIO0,SCP_EINT0;可以复用成其它 Func，
请参考 MT8676_GPIO_Application_Spec 表格
220 D_GND
221 D_GND
222 NC NC 脚，悬空
223 NC NC 脚，悬空
224 D_GND
G31 225 GPIO84 GPIO184,EINT184;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
226 NC NC 脚，悬空
F29 227 SCL3 I2C3 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
228 NC NC 脚，悬空
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 19

掌锐秘密，未经许可不得扩散
19 / 34
229 NC NC 脚，悬空
230 D_GND
231 D_GND
232 NC NC 脚，悬空
233 NC NC 脚，悬空
L37 234 MSDC1_DATA0 SD1 卡 DATA0,GPIO74,EINT74;可以复用成其它 Func,请
参考 MT8676_GPIO_Application_Spec 表格
M35 235 MSDC1_DATA3 SD1 卡 DATA3,GPIO77,EINT77;可以复用成其它 Func,请
参考 MT8676_GPIO_Application_Spec 表格
G28 236 SDA3 I2C3 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
MT6373_G12 237 VSIM2_PMU SIM 卡 2 供电输出, 1.86/2.9V 200MA
L38 238 SIM2_SIO SIM 卡 2 的数据口,GPIO71,EINT71，不用 SIM2 时可以当
做 GPIO 口或中断功能。
M39 239 SIM2_SRST SIM 卡 2 的复位,GPIO70,EINT70,不用 SIM2 时可以当做
GPIO 口或中断功能。
M36 240 MSDC1_DATA2 SD1 卡 DATA2,GPIO76,EINT76;可以复用成其它 Func,请
参考 MT8676_GPIO_Application_Spec 表格
M34 241 MSDC1_DATA1 SD1 卡 DATA1,GPIO75,EINT75;可以复用成其它 Func,请
参考 MT8676_GPIO_Application_Spec 表格
AA37 242 DP_AUXP DP1.4 AUXP
AA36 243 DP_AUXN DP1.4 AUXN
AC37 244 USB_DM USB2.0 DM
AC36 245 USB_DP USB2.0 DP
L36 246 MSDC1_CMD SD1 卡 CMD,GPIO73,EINT73;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
L35 247 MSDC1_CLK SD1 卡 CLK,GPIO72,EINT72;可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
M38 248 SIM2_SCLK SIM 卡 2 的时钟,GPIO69,EINT69,不用 SIM2 时可以当做
GPIO 口或中断功能。
249 D_GND
MT6373_F12 250 VSIM1_PMU SIM 卡 1 供电输出, 1.86/2.9V 200MA
K36 251 SIM1_SCLK SIM 卡 1 的时钟,GPIO66,EINT66,不用 SIM1 时可以当做
GPIO 口或中断功能。
K34 252 SIM1_SIO SIM 卡 1 的数据口,GPIO68,EINT68，不用 SIM1 时可以当
做 GPIO 口或中断功能。
W32 253 DP_LN1_TXP_P2 DP1.4 LN1 TXP
W33 254 DP_LN1_TXN_P2 DP1.4 LN1 TXN
Y34 255 DP_LN0_TXN_P2 DP1.4 LN0 TXN
Y35 256 DP_LN0_TXP_P2 DP1.4 LN0 TXP
257 D_GND
K35 258 SIM1_SRST SIM 卡 1 的复位,GPIO67,EINT67,不用 SIM2 时可以当做
GPIO 口或中断功能。
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 20

掌锐秘密，未经许可不得扩散
20 / 34
259 D_GND
Y38 260 SSUSB_TXP_P1 USB3.0 SSUSB_TXP_P1;不用 USB3.0 时可复用为 DP1.4
LN2 TXP
Y39 261 SSUSB_TXN_P1 USB3.0 SSUSB_TXN_P1;不用 USB3.0 时可复用为 DP1.4
LN2 TXN
W36 262 SSUSB_RXN_P1 USB3.0 SSUSB_RXN_P1;不用 USB3.0 时可复用为 DP1.4
LN3 TXN
W37 263 SSUSB_RXP_P1 USB3.0 SSUSB_RXP_P1;不用 USB3.0 时可复用为 DP1.4
LN3 TXP
264 D_GND
265 D_GND
T37 266 DSI1_D0N MIPI DSI1 的 D0N
R38 267 DSI1_CKN MIPI DSI1 的 CKN
268 D_GND
R39 269 DSI1_CKP MIPI DSI1 的 CKP
T38 270 DSI1_D0P MIPI DSI1 的 D0P
R36 271 DSI1_D1N MIPI DSI1 的 D1N
R37 272 DSI1_D1P MIPI DSI1 的 D1P
U38 273 DSI1_D2N MIPI DSI1 的 D2N
U39 274 DSI1_D2P MIPI DSI1 的 D2P
275 D_GND
P37 276 DSI1_D3P MIPI DSI1 的 D3P
N37 277 DSI1_D3N MIPI DSI1 的 D3N
U36 278 DSI0_D2P MIPI DSI0 的 D2P
U35 279 DSI0_D2N MIPI DSI0 的 D2N
P33 280 DSI0_D3N MIPI DSI0 的 D3N
P34 281 DSI0_D3P MIPI DSI0 的 D3P
P35 282 DSI0_D1N MIPI DSI0 的 D1N
P36 283 DSI0_D1P MIPI DSI0 的 D1P
F30/NC 284 SPI3_CSB_SWTP SPI3_CSB_SWTP，GPIO28,EINT28;可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
G29 285 SPI3_CK SPI3_CK，GPIO27,EINT27;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
G30 286 SPI3_MO SPI3_MO，GPIO30,EINT30;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
F31 287 SPI3_MI SPI3_MI，GPIO29,EINT29;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
288 D_GND
T35 289 DSI0_D0P MIPI DSI0 的 D0P
T34 290 DSI0_D0N MIPI DSI0 的 D0N
291 NC NC 脚，悬空
292 NC NC 脚，悬空
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 21

掌锐秘密，未经许可不得扩散
21 / 34
R34 293 DSI0_CKN MIPI DSI0 的 CKN
R35 294 DSI0_CKP MIPI DSI0 的 CKP
F24 295 PERIEN_CHG_EN
B_GPIO133
GPIO133,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
G33 296 SPI4_CSB SPI4_CSB;GPIO37,EINT37;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
F34 297 SPI4_MO SPI4_MO;GPIO39,EINT39;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
G34 298 SPI4_MI SPI4_MO;GPIO38,EINT38;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
F33 299 SPI4_CK SPI4_MO;GPIO36,EINT36;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
300 NC NC 脚，悬空
301 NC NC 脚，悬空
302 NC NC 脚，悬空
303 NC NC 脚，悬空
304 NC NC 脚，悬空
305 NC NC 脚，悬空
306 NC NC 脚，悬空
307 NC NC 脚，悬空
N5 308 GPIO191 GPIO191,可复用成 GPS_L5_ELNA_EN,此 IO 口不能做中
断功能,请参考 MT8676_GPIO_Application_Spec 表格
G26 309 GPIO136 GPIO136,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
G21 310 GPIO227 GPIO227,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
G23 311 GPIO231 GPIO231,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
F32 312 SYSRSTB 系统复位,低有效
E20 313 GPIO223 GPIO223,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
314 NC NC 脚，悬空
315 D_GND
316 NC NC 脚，悬空
317 NC NC 脚，悬空
MT6363_N2/
P2 318 VS1_PMIC AUDIO CODEC 芯片 MT6338 的供电，不用请悬空
AV37 319 SCP_GPIO_6338_E
N
AUDIO CODEC 芯片 MT6338 的 EN 脚，可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
F23 320 GPIO230 GPIO230,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
F22 321 GPIO228 GPIO228,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 22

掌锐秘密，未经许可不得扩散
22 / 34
G25 322 SCL5 I2C5 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
F26 323 GPIO135 GPIO135,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
G27 324 AUD_I2C_SCL
AUDIO CODEC 芯片 MT6338 的 I2C_SCL，可以复用成
其它 Func,请参考 MT8676_GPIO_Application_Spec 表格,
不用请悬空
F27 325 AUD_I2C_SDA
AUDIO CODEC 芯片 MT6338 的 I2C_SDA，可以复用成
其它 Func,请参考 MT8676_GPIO_Application_Spec 表格,
不用请悬空
326 NC NC 脚，悬空
G22 327 AUD_DAT_MISO0 AUDIO CODEC 芯片 MT6338 的 AUDIO IF 接口，
AUD_DAT_MISO0，不用请悬空
G20 328 AUD_DAT_MOSI1
此 IO 专用脚建议 NC，在核心板内部是有 Boot trapping
配置的，非必要尽量优先选择其他 IO 口替代，也不要做
上下拉配置。
AUDIO CODEC 芯片的 AUDIO IF 接口，
AUD_DAT_MOSI1，不用请悬空
F20 329 AUD_DAT_MOSI0
此 IO 专用脚建议 NC，在核心板内部是有 Boot trapping
配置的，非必要尽量优先选择其他 IO 口替代，也不要做
上下拉配置。
AUDIO CODEC 芯片的 AUDIO IF 接口，
AUD_DAT_MOSI0，不用请悬空
D20 330 AUD_CLK_MOSI AUDIO CODEC 芯片 MT6338 的 AUDIO IF 接口，
AUD_CLK_MOSI，不用请悬空
B5 331 RTC32K_1V8_F AUDIO CODEC 芯片 MT6338 的 RTC_CLK 32KHz，不用
请悬空
332 NC NC 脚，悬空
F25 333 SDA5 I2C5 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
D19 334 GPIO43_DSI_TE GPIO43,EINT43,可复用成 DSI_TE,请参考
MT8676_GPIO_Application_Spec 表格
335 D_GND
336 NC NC 脚，悬空
G24 337 SCP_EINT_6338 AUDIO CODEC 芯片 MT6338 的中断脚，可以复用成其
它 Func,请参考 MT8676_GPIO_Application_Spec 表格
C20 338 SRCLKENA0 AUDIO CODEC 芯片 MT6338 的待机控制信号脚
SRCLKENA0，不用请悬空
339 D_GND
340 D_GND
H16 341 SPI2_MI SPI2_MI;GPIO13,EINT13;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 23

掌锐秘密，未经许可不得扩散
23 / 34
F19 342 GPIO60_CTP0_RS
T
GPIO60,EINT60,可复用成 CTP0_RST,请参考
MT8676_GPIO_Application_Spec 表格
E19 343 GPIO41_LCM_RST GPIO41,EINT41,可复用成 LCM_RST,请参考
MT8676_GPIO_Application_Spec 表格
G19 344 GPIO61_CTP1_RS
T
GPIO61,EINT61,可复用成 CTP1_RST,可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
G18 345 EINT10_CTP1
ramdump/full dump 专用功能口，系统变砖后 debug。建议
连接测试点以及按键，低有效，建议默认上拉。若一直被
拉低会一直进入 aee 模式，系统会一直重启。
G12 346 GPIO3_FMI2S_BC
K
GPIO3,SCP EINT3,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
G15 347 GPIO42_DSI1_TE GPIO42,EINT42,可复用成 DSI_TE,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
F16 348 SPI2_MO SPI2_MO;GPIO14,EINT14;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
F15 349 SPI2_CK SPI2_CK;GPIO11,EINT11;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
G16 350 SPI2_CSB SPI2_CSB;GPIO12,EINT12;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
F18 351 EINT9_CTP0 EINT9,GPIO9,建议复用成 CTP0 的中断,可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
G14 352 GPIO40_LCM1_RS
T
GPIO40,EINT40,可复用成 LCM1_RST,可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
G13 353 GPIO1 GPIO1,SCP EINT1,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
R4 354 GPIO178 GPIO178,此 IO 口不能做中断功能,请参考
MT8676_GPIO_Application_Spec 表格
R6 355 GPIO183 GPIO183,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
R5 356 GPIO180_URXD3 GPIO183,此 IO 口不能做中断功能,可以复用成 URXD3,请
参考 MT8676_GPIO_Application_Spec 表格
P3 357 GPIO181_UTXD3
GPIO181,此 IO 口不能做中断功能,可以复用成 UTXD3,可
以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
P2 358 GPIO175_PCIE_CL
KREQN
GPIO175,此 IO 口不能做中断功能,可以复用成
PCIE_CLKREQN,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
P4 359 GPIO182 GPIO182,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
R1 360 GPIO174_PCIE_W
AKEN
GPIO174,此 IO 口不能做中断功能,可以复用成
PCIE_WAKEN,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 24

掌锐秘密，未经许可不得扩散
24 / 34
F12 361 GPIO2 GPIO2,SCP EINT2,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
G10 362 SCP_SDA3 SCP_I2C3 的 SDA;I3C3_SDA,可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
F10 363 SCP_SCL3 SCP_I2C3 的 SCL;I3C3_SCL,可以复用成其它 Func,请参
考 MT8676_GPIO_Application_Spec 表格
F7 364 SPI7_MO SPI7_MO;GPIO57,EINT57;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
G7 365 SPI7_MI SPI7_MI;GPIO56,EINT56;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
G6 366 SPI7_CSB SPI7_CSB;GPIO55,EINT55;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
F6 367 SPI7_CK SPI7_CK;GPIO54,EINT54;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
P1 368 GPIO176 GPIO176,此 IO 口不能做中断功能,请参考
MT8676_GPIO_Application_Spec 表格
R2 369 GPIO173_PCIE_PE
RSTN
GPIO173,此 IO 口不能做中断功能,可以复用成
PCIE_PERSTN,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
R3 370 GPIO179 GPIO179,此 IO 口不能做中断功能,请参考
MT8676_GPIO_Application_Spec 表格
M6 371 GPIO188 GPIO188,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
T5 372 GPIO177 GPIO177,此 IO 口不能做中断功能,请参考
MT8676_GPIO_Application_Spec 表格
F8 373 GPIO169_UTXD1
GPIO169,此 IO 口不能做中断功能,可以复用成 UTXD1,以
及 SCP_I3C2_SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
G8 374 GPIO170_URXD1
GPIO170,此 IO 口不能做中断功能,可以复用成 URXD1,以
及 SCP_I3C2_SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
G11 375 GPIO59_INT_SIM2 GPIO59,EINT59,可复用成 INT_SIM2,可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
376 D_GND
377 NC NC 脚，悬空
T6 378 GPIO128_CAM_CL
K5
默认配置是 CAM_CLK5,若要复用成 GPIO128 请注意修
改软件配置，此 IO 口不能做中断功能；可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
U6 379 GPIO124_CAM_CL
K1
默认配置是 CAM_CLK1,若要复用成 GPIO124 请注意修
改软件配置，此 IO 口不能做中断功能；可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
380 D_GND
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 25

掌锐秘密，未经许可不得扩散
25 / 34
381 D_GND
T7 382 GPIO127_CAM_CL
K4
默认配置是 CAM_CLK4,若要复用成 GPIO127 请注意修
改软件配置，此 IO 口不能做中断功能；可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
U7 383 GPIO123_CAM_CL
K0
默认配置是 CAM_CLK0,若要复用成 GPIO123 请注意修
改软件配置，此 IO 口不能做中断功能；可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
384 D_GND
385 NC NC 脚，悬空
386 NC NC 脚，悬空
387 NC NC 脚，悬空
388 NC NC 脚，悬空
389 NC NC 脚，悬空
390 D_GND
391 NC NC 脚，悬空
392 NC NC 脚，悬空
393 NC NC 脚，悬空
394 NC NC 脚，悬空
MT6685_E6 395 BBCK5 AUDIO CODEC 芯片 MT6338 的 26Mhz 时钟输入，
MT6685 的 26Mhz 时钟输出，不用请悬空
396 D_GND
397 D_GND
398 NC NC 脚，悬空
399 D_GND
400 D_GND
401 D_GND
402 D_GND
403 WIFI_BT_ANT1 WIFI_BT 天线 1
404 D_GND
T2 405 GPIO119_CAM_RS
T4
GPIO119,EINT119,可以复用成 CAM_RST4,可以复用成
其它 Func,请参考 MT8676_GPIO_Application_Spec 表格
U2 406 GPIO115_CAM_RS
T0
GPIO115,EINT115,可以复用成 CAM_RST0,可以复用成
其它 Func,请参考 MT8676_GPIO_Application_Spec 表格
P5 407 GPIO186_I2SIN6_0
_DI
GPIO186,此 IO 口不能做中断功能,可以复用成 I2S6_DI,
可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
Y6 408 PCIE_LN0_TXP PCIE_LN0 的 TXP
Y5 409 PCIE_LN0_TXN PCIE_LN0 的 TXN
410 D_GND
411 D_GND
412 WIFI_BT_ANT0 WIFI_BT 天线 0
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 26

掌锐秘密，未经许可不得扩散
26 / 34
413 D_GND
Y2 414 PCIE_LN0_RXN PCIE_LN0 的 RXN
Y1 415 PCIE_LN0_RXP PCIE_LN0 的 RXP
R7 416 GPIO184_I2SIN6_0
_BCK
GPIO184,此 IO 口不能做中断功能,可以复用成 I2S6_BCK,
可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
P7 417 GPIO187_I2SOUT6
_0_DO
GPIO187,此 IO 口不能做中断功能,可以复用成 I2S6_DO,
可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
P6 418 GPIO185_I2SIN6_0
_LRCK
GPIO185,此 IO 口不能做中断功能,可以复用成
I2S6_LRCK,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
U4 419 SCL10 I2C10 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AA3 420 PCIE_CKP PCIE 的 CKP
AA4 421 PCIE_CKN PCIE 的 CKN
422 D_GND
423 D_GND
424 GPS_ANT GPS 天线
425 D_GND
426 NC NC 脚，悬空
427 NC NC 脚，悬空
U5 428 SDA10 I2C10 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
T1 429 GPIO120_CAM_RS
T5
GPIO120,EINT120;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
M5 430 GPIO189 GPIO189,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
AC4 431 GPIO220 GPIO220,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
432 NC NC 脚，悬空
433 NC NC 脚，悬空
434 D_GND
435 D_GND
AK3 436 CSI5A_RDN0 MIPI CSI5A 的 DATA0-N
AJ3 437 CSI5A_RDP0 MIPI CSI5A 的 DATA0-P
AH3 438 CSI5A_RDN2 MIPI CSI5A 的 DATA2-N
AH2 439 CSI5A_RDP2 MIPI CSI5A 的 DATA2-P
U3 440 GPIO116_CAM_RS
T1
GPIO116,EINT116;可以复用成 CAM_RST1,可以复用成
其它 Func,请参考 MT8676_GPIO_Application_Spec 表格
V4 441 SCL11 I2C11 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 27

掌锐秘密，未经许可不得扩散
27 / 34
V5 442 SDA11 I2C11 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
V3 443 SCL4 I2C4 的 SCL,I3C4 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AK2 444 CSI5A_RCP MIPI CSI5A 的 CLK-P
AK1 445 CSI5A_RCN MIPI CSI5A 的 CLK-N
AL2 446 CSI5B_RDP1 MIPI CSI5B 的 DATA1-P
AL3 447 CSI5B_RDN1 MIPI CSI5B 的 DATA1-N
AJ6 448 CSI4A_RDN0 MIPI CSI4A 的 DATA0-N
AH6 449 CSI4A_RDP0 MIPI CSI4A 的 DATA0-P
AM1 450 CSI5B_RDN3 MIPI CSI5B 的 DATA3-N
AM2 451 CSI5B_RDP3 MIPI CSI5B 的 DATA3-P
V2 452 SDA4 I2C4 的 SDA,I3C4 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
W3 453 SDA2 I2C2 的 SDA,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
W4 454 SCL2 I2C2 的 SCL,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
455 D_GND
AG5 456 CSI4A_RDP2 MIPI CSI4A 的 DATA2-P
AG6 457 CSI4A_RDN2 MIPI CSI4A 的 DATA2-N
AJ7 458 CSI4B_RDP1 MIPI CSI4B 的 DATA1-P
AK7 459 CSI4B_RDN1 MIPI CSI4B 的 DATA1-N
AL6 460 CSI4B_RDN3 MIPI CSI4B 的 DATA3-N
AL7 461 CSI4B_RDP3 MIPI CSI4B 的 DATA3-P
AJ4 462 CSI4A_RCN MIPI CSI4A 的 CLK-P
AJ5 463 CSI4A_RCP MIPI CSI4A 的 CLK-N
AC5 464 GPIO221_LGA-DA
T0
GPIO221_LGA-DAT0;GPIO221,此 IO 口不能做中断功能,
可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AE3 465 SPI1_CK SPI1_CK;GPIO50,EINT50;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AE2 466 SPI1_CSB SPI1_CSB;GPIO51,EINT51;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AE6 467 GPIO79_MSDC2_C
MD
GPIO79,EINT79,可以复用成 MSDC2_CMD,可以复用成
其它 Func,请参考 MT8676_GPIO_Application_Spec 表格
AB5 468 GPIO44_LGA-DAT
1
GPIO44_LGA-DAT1;GPIO44,EINT44;可以复用成其它
Func,请参考 MT8676_GPIO_Application_Spec 表格
AB6 469 GPIO45 GPIO45,EINT45,可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
470 D_GND
471 D_GND
AP2 472 CSI3A_RDP0 MIPI CSI3A 的 DATA0-P
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 28

掌锐秘密，未经许可不得扩散
28 / 34
AP3 473 CSI3A_RDN0 MIPI CSI3A 的 DATA0-N
AD2 474 SPI0_MO SPI0_MO;GPIO49,EINT49;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AF7 475 GPIO78_MSDC2_C
LK
GPIO78,EINT78,可以复用成 MSDC2_CLK,可以复用成其
它 Func,请参考 MT8676_GPIO_Application_Spec 表格
AC6 476 GPIO80_MSDC2_D
ATA0
GPIO80,EINT80,可以复用成 MSDC2_DATA0,可以复用
成其它 Func,请参考 MT8676_GPIO_Application_Spec 表
格
AF2 477 SPI1_MO SPI1_MO;GPIO53,EINT53;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AF3 478 SPI1_MI SPI1_MI;GPIO52,EINT52;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AD7 479 GPIO82_MSDC2_D
ATA2
GPIO82,EINT82,可以复用成 MSDC2_DATA2,可以复用
成其它 Func,请参考 MT8676_GPIO_Application_Spec 表
格
AC7 480 GPIO81_MSDC2_D
ATA1
GPIO81,EINT81,可以复用成 MSDC2_DATA1,可以复用
成其它 Func,请参考 MT8676_GPIO_Application_Spec 表
格
AC2 481 SPI0_CSB SPI0_CSB;GPIO47,EINT47;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AR3 482 CSI3A_RCN MIPI CSI3A 的 CLK-N
AR2 483 CSI3A_RCP MIPI CSI3A 的 CLK-P
AT1 484 CSI3B_RDP1 MIPI CSI3B 的 DATA1-P
AT2 485 CSI3B_RDN1 MIPI CSI3B 的 DATA1-N
AC3 486 SPI0_CK SPI0_CK;GPIO46,EINT46;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AE7 487 GPIO83_MSDC2_D
ATA3
GPIO83,EINT83,可以复用成 MSDC2_DATA3,可以复用
成其它 Func,请参考 MT8676_GPIO_Application_Spec 表
格
488 D_GND
AE5 489 GPIO134 GPIO134,此 IO 口不能做中断功能,可以复用成其它 Func,
请参考 MT8676_GPIO_Application_Spec 表格
490 D_GND
491 D_GND
492 D_GND
AD3 493 SPI0_MI SPI0_MI;GPIO48,EINT48;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
AU2 494 CSI3B_RDN3 MIPI CSI3B 的 DATA3-N
AU1 495 CSI3B_RDP3 MIPI CSI3B 的 DATA3-P
AN1 496 CSI3A_RDP2 MIPI CSI3A 的 DATA2-P
AN2 497 CSI3A_RDN2 MIPI CSI3A 的 DATA2-N
F11 498 INT_SIM1 INT_SIM1;GPIO58,EINT58;可以复用成其它 Func,请参考
MT8676_GPIO_Application_Spec 表格
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 29

掌锐秘密，未经许可不得扩散
29 / 34
499 D_GND
MT6373_J14 500 VIBR_PMU LDO 电源输出,1.8/2.8/3.0/3.3V/200mA 可供外部负载使
用
501 D_GND
MT6373_K14 502 VTP_PMU VTP 供电输出 1.8/2.8/3.0/3.3V 200mA
MT6373_J12 503 VIO28_PMU VIO28_PMU ,1.8/2.8/3.0/3.3V/200mA SENSOR 供电
MT6373_N14 504 VMCH_PMU T 卡供电 LDO 输出 2.9V/800mA
MT6363_K7 505 VBUS VBUS 对应 MT8676 底板上的 VUSB_5V_IN,检测 USB 插
入
506 D_GND 电源地
507 D_GND 电源地
508 VBAT 系统 4.0V 供电输入
509 VBAT 系统 4.0V 供电输入
510 D_GND 电源地
511 D_GND 电源地
MT6363_L5 512 PWRKEY_SW POWERKEY ,系统开关机键,电平为 4.0V，默认高电平低
有效
513 D_GND 电源地
514 D_GND 电源地
515 D_GND 电源地
516 VBAT 系统 4.0V 供电输入
517 VBAT 系统 4.0V 供电输入
518 VBAT 系统 4.0V 供电输入
519 VBAT 系统 4.0V 供电输入
520 VBAT 系统 4.0V 供电输入
521 VBAT 系统 4.0V 供电输入
522 D_GND 电源地
523 D_GND 电源地
524 VBAT 系统 4.0V 供电输入
525 VBAT 系统 4.0V 供电输入
526 D_GND 电源地
527 D_GND 电源地
528 D_GND 电源地
G1 D_GND
G2 D_GND
G3 D_GND
G4 D_GND
G5 D_GND
G6 D_GND
G7 D_GND
G8 D_GND
G9 D_GND
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 30

掌锐秘密，未经许可不得扩散
30 / 34
G10 D_GND
G11 D_GND
G12 D_GND
G13 D_GND
G14 D_GND
G15 D_GND
G16 D_GND
G17 D_GND
G18 D_GND
G19 D_GND
G20 D_GND
G21 D_GND
G22 D_GND
G23 D_GND
G24 D_GND
G25 D_GND
G26 D_GND
G27 D_GND
G28 D_GND
G29 D_GND
G30 D_GND
G31 D_GND
G32 D_GND
G33 D_GND
G34 D_GND
G35 D_GND
G36 D_GND
G37 D_GND
G38 D_GND
G39 D_GND
G40 D_GND
G41 D_GND
G42 D_GND
G43 D_GND
G44 D_GND
G45 D_GND
G46 D_GND
G47 D_GND
G48 D_GND
G49 D_GND
G50 D_GND
G51 D_GND
G52 D_GND
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 31

掌锐秘密，未经许可不得扩散
31 / 34
六、 模块引脚分布图
核 心 板 Top vi ew （ 焊 盘 面 ）
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 32

掌锐秘密，未经许可不得扩散
32 / 34
七、 模块尺寸图
模 块 尺 寸 ： 59.5mm * 59.5mm * 5.4mm。 模 块 厚 度 不 含 上 屏 蔽 罩 ，
盖 上 屏 蔽 罩 后 厚 度 为 5.6mm；模 块 贴 片 到 底 板 后 ，BGA 高 度 ：0.35mm
± 0.05mm。 如 要 PIN2PIN MT8678 平 台 需 要 按 P41 产 品 规 格 书 预 留 ；
注 ： 下 图 中 心 28mm*27mm 区 域 底 板 PCB 设 计 需 要 挖 空 。
核 心 板 Bot t om vi ew （ 焊 盘 面 ）
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 33

掌锐秘密，未经许可不得扩散
33 / 34
八、 天线接口说明
核 心 板 Bot t om vi ew （ 焊 盘 面 ）
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档

## PDF物理页 34

掌锐秘密，未经许可不得扩散
34 / 34
九、 SMT 参考炉温曲线
炉 温 测 试 需 要 在 模 块 位 置 接 热 偶 测 试 点 ， 保 证 模 块 位 置 达 到 需 要
的 温 度 。 推 荐 的 炉 温 曲 线 图 如 下 所 示 ： （ 无 铅 SMT 回 流 焊 ）
推 荐 的 炉 温 测 试 控 制 要 求 如 下 ：
注 ： 推 荐 曲 线 供 参 考 ， 客 户 可 以 根 据 实 际 生 产 的 锡 膏 和 设 备 条 件 进 行 优 化 。
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档
深圳市掌锐电子有限公司
保密文档


---
# SRC0341 P39.A03.H5_MT8676系统时钟分布图-0325.pdf

来源：P39.A03.H5_MT8676系统时钟分布图-0325.pdf

SHA-256：3c4e1a613a87469705121a1376b27c76e0244d754ab7120617c86ebae1cf4daa

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0341.html)

## PDF物理页 1

DSI
DP
PCIE 3.0
USB2.0
USB3.1
SDIO
SPI
I2C
I3C
CSI
UFS3.1
LPDDR5X
8533Mbps
7500Mbps
6400Mbps
14.4Gbps
52Mbps
100K~3.4MHZ
100K~12.5MHZ
0~208MHZ
480Mbps
5Gbps
8Gbps
8.1Gbps/lane
6.5Gbps/lane
2.5Gbps/lane
I2S/TDM
8~384KHZ


---
# SRC0342 P39.A03.H5_通用PIN定义表_20250429.xlsx

来源：P39.A03.H5_通用PIN定义表_20250429.xlsx

SHA-256：3c9614b19d2c5aae7a364faf7e237024d9829bf8bc8af2f36a0194c1fbaf446a

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0342.html)

单元格原值与公式文本按行提取；格式、合并单元格、图形及公式计算结果以原工作簿为准。

## 工作表 1

1)MT8676中所有SPI,I2C,UART,I2S,GPIO,EINT,TDM口电压域都是1.8V，请注意电压匹配				修改说明
2)SIM2（IO/RST/CLK）未使时可以做GPIO（1.8V电压域）使用。				
3)T卡data/cmd/clk/rst接口默认为SDIO模式，不使用TF卡时可以当做GPIO(1.8V电压域)使用。				
对应MT8676芯片PIN	模块PIN	模块定义	描述&备注	
	1	D_GND		
AP5	2	CSI2B_RDN1	MIPI CSI2B的DATA1-N	
AP6	3	CSI2B_RDP1	MIPI CSI2B的DATA1-P	
	4	D_GND		
AN3	5	CSI2A_RCP	MIPI CSI2A的CLK-P	
AN4	6	CSI2A_RCN	MIPI CSI2A的CLK-N	
AM5	7	CSI2A_RDN2	MIPI CSI2A的DATA2-N	
AM6	8	CSI2A_RDP2	MIPI CSI2A的DATA2-P	
	9	D_GND		
	10	D_GND		
	11	D_GND		
	12	D_GND		
MT6363_L12	13	VIO18_PMU	系统IO电平1.8V供电输出,300MA	
AN6	14	CSI2A_RDP0	MIPI CSI2A的DATA0-P	
AN5	15	CSI2A_RDN0	MIPI CSI2A的DATA0-N	
AR5	16	CSI2B_RDN3	MIPI CSI2B的DATA3-N	
AR6	17	CSI2B_RDP3	MIPI CSI2B的DATA3-P	
AV10	18	GPIO117_URXD2	MT8676 UART2_RX,用于与外设数据通讯;GPIO117,EINT117;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV9	19	GPIO121_UTXD2	MT8676 UART2_TX,用于与外设数据通讯;GPIO121,EINT121;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AT18	20	SCL9	I2C9的SCL,I3C9的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
	21	D_GND		
	22	D_GND		
AU18	23	SDA9	I2C9的SDA,I3C9的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AU12	24	GPIO129	GPIO129,此IO口只能做GPIO功能,不能做中断功能;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV12	25	GPIO125_CAM_CLK2	默认配置是CAM_CLK2,若要复用成GPIO125请注意修改软件配置，此IO口不能做中断功能；可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	26	D_GND		
	27	D_GND		
AT3	28	CSI1A_RDP2	MIPI CSI1A的DATA2-P	
AU3	29	CSI1A_RDN2	MIPI CSI1A的DATA2-N	
AU13	30	SCL12	I2C12的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AU14	31	SCL8	I2C8的SCL,I3C8的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AU11	32	GPIO126_CAM_CLK3	默认配置是CAM_CLK3,若要复用成GPIO126请注意修改软件,此IO口只能做GPIO功能,不能做中断功能;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AU10	33	GPIO130	GPIO130,此IO口只能做GPIO功能,不能做中断功能;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AR9	34	GPIO118_CAM_RST3	CAM_RST3;GPIO118,EINT118;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AW20	35	GPIO35_AP_GOOD	GPIO35,EINT35,AP_GOOD;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV15	36	SDA8	I2C8的SDA,I3C8的SDA,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV14	37	SDA12	I2C12的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AU4	38	CSI1A_RDN0	MIPI CSI1A的DATA0-N	
AT4	39	CSI1A_RDP0	MIPI CSI1A的DATA0-P	
AV4	40	CSI1A_RCP	MIPI CSI1A的CLK-P	
AW4	41	CSI1A_RCN	MIPI CSI1A的CLK-N	
AU15	42	SCL13	I2C13的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AV16	43	SDA13	I2C13的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AV20	44	SDA1	I2C1的SDA,I3C1的SDA,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AW9	45	GPIO122	GPIO122,EINT122;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	46	D_GND		
AU20	47	SCL1	I2C1的SCL,I3C1的SCL,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	48	D_GND		
AU21	49	GPIO104_TDM_LRCK	GPIO104,EINT104,TDM_LRCK;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV5	50	CSI1B_RDN1	MIPI CSI1B的DATA1-N	
AU5	51	CSI1B_RDP1	MIPI CSI1B的DATA1-P	
AT5	52	CSI1B_RDP3	MIPI CSI1B的DATA3-P	
AT6	53	CSI1B_RDN3	MIPI CSI1B的DATA3-N	
AY21	54	GPIO100_TDMIN_DATA0	GPIO100,EINT100,TDMIN_DATA0;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AU23	55	GPIO95_TDMOUT_DATA0	GPIO95,EINT95,TDMOUT_DATA0;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
BC20	56	GPIO34_KPROW1	KPROW1,GPIO34,EINT34;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
BA20	57	GPIO31_KPCOL1	KPCOL1,GPIO31,EINT31;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AY20	58	GPIO32_KPCOL0	KPCOL0,GPIO32,EINT32;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
BB20	59	EINT33_SD	SD卡中断EINT33,GPIO33;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	60	D_GND		
AW21	61	GPIO99_TDM_BCK	GPIO99,EINT99,TDM_BCK;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	62	D_GND		
	63	D_GND		
AY2	64	CSI0A_RCP	MIPI CSI0A的CLK-P	
BA1	65	CSI0A_RCN	MIPI CSI0A的CLK-N	
AV26	66	BPI_D_BUS4	BPI_D_BUS4,GPIO89,EINT89;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AU22	67	GPIO97	GPIO97,EINT97;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
BC21	68	GPIO103_LGA-DAT3	备用天线切换检测脚3;GPIO103,EINT103;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
BB21	69	GPIO102	GPIO102,EINT102;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV24	70	GPIO93_PWM_2	GPIO93,EINT93，建议做PWM2功能;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
BA21	71	GPIO101	GPIO101,EINT101;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV27	72	BPI_D_BUS2	BPI_D_BUS2,GPIO87,EINT87;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV21	73	GPIO98	GPIO98,EINT98;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AW3	74	CSI0A_RDN0	MIPI CSI0A的DATA0-N	
AW2	75	CSI0A_RDP0	MIPI CSI0A的DATA0-P	
AV2	76	CSI0A_RDP2	MIPI CSI0A的DATA2-P	
AW1	77	CSI0A_RDN2	MIPI CSI0A的DATA2-N	
AT32	78	URXD0	MT8676 UART0_RX,用于与外设数据通讯，建议用于debug	
AV31	79	UTXD0	MT8676 UART0_TX,用于与外设数据通讯，建议用于debug	
AV22	80	GPIO96	GPIO96,EINT96;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AU26	81	BPI_D_BUS5	BPI_D_BUS5,GPIO90,EINT90;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AW38	82	GPIO111	GPIO111,EINT111;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AU24	83	GPIO94_PWM_3	GPIO94,EINT94，建议做PWM3功能;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV30	84	GPIO209_JTRST	JTRST,GPIO209,此IO口不能做中断功能;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AU29	85	GPIO212_JTDI	JTDI,GPIO212,此IO口不能做中断功能;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
BB2	86	CSI0B_RDN1	MIPI CSI0B的DATA1-N	
BA2	87	CSI0B_RDP1	MIPI CSI0B的DATA1-P	
AY3	88	CSI0B_RDP3	MIPI CSI0B的DATA3-P	
BA3	89	CSI0B_RDN3	MIPI CSI0B的DATA3-N	
AU30	90	GPIO211_JTMS	JTMS,GPIO211,此IO口不能做中断功能;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AU31	91	GPIO210_JTCK	JTCK,GPIO210,此IO口不能做中断功能;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	92	D_GND		
AW39	93	GPIO112	GPIO112,EINT112;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV38	94	GPIO113	GPIO113,EINT113;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AY38	95	GPIO107	GPIO107,EINT107;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV34	96	EINT6_ACC	ACC通知脚,EINT6,GPIO6;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV29	97	GPIO213_JTDO	JTDO,GPIO213,此IO口不能做中断功能;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	98	D_GND		
	99	D_GND		
AU36	100	GPIO65	GPIO65,EINT65;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AT34	101	GPIO131_DISP_PWM	GPIO131,可复用成DISP_PWM,此IO口不能做中断功能	
	102	D_GND		
AU33	103	GPIO5_IDDIG	IDDIG,EINT5,GPIO5;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
BA39	104	GPIO108	GPIO108,EINT108;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV39	105	GPIO114	GPIO114,EINT114;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
BB38	106	GPIO105	GPIO105,EINT105;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AW37	107	GPIO109	GPIO109,EINT109;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AU34	108	EINT4_BACK	倒车通知脚BACK,EINT4,GPIO4;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	109	D_GND		
AV32	110	SDA7	I2C7的SDA,I3C7的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AV35	111	GPIO62	GPIO62,EINT62;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	112	D_GND		
AW32	113	SCL7	I2C7的SCL,I3C7的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
	114	D_GND		
AU32	115	SDA0	I2C0的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AY39	116	GPIO110	GPIO110,EINT110;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
BA38	117	GPIO106	GPIO106,EINT106;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	118	D_GND		
AV33	119	SCL0	I2C0的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
	120	D_GND		
AV25	121	GPIO91_DP_TX_HPD	DP的热插拔,EINT91,GPIO91;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AV36	122	GPIO63	GPIO63,EINT63;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AU35	123	GPIO132_DISP_PWM1	GPIO132,可复用成DISP_PWM1,此IO口不能做中断功能,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AU25	124	GPIO92_DP_OC_EN	DP的EN脚,EINT92,GPIO92;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	125	D_GND		
	126	D_GND		
	127	NC	NC脚，悬空	
	128	NC	NC脚，悬空	
	129	D_GND		
	130	D_GND		
	131	D_GND		
	132	D_GND		
	133	D_GND		
	134	ANT3	5G天线3	
	135	D_GND		
	136	D_GND		
	137	D_GND		
	138	D_GND		
	139	ANT1	5G天线1	
	140	D_GND		
	141	D_GND		
	142	D_GND		
	143	NC	NC脚，悬空	
AF35	144	I2S1_DO	I2S1_DO,EINT22,GPIO22;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AF34	145	I2S1_DI	I2S1_DI,EINT21,GPIO21;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	146	D_GND		
	147	D_GND		
	148	ECALL_BACKUP_ANT5	ECALL_ANT5备用天线	
	149	D_GND		
AE35	150	I2S1_LRCK	I2S1_LRCK,EINT20,GPIO20;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AE34	151	I2S1_BCK	I2S1_BCK,EINT19,GPIO19;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	152	D_GND		
	153	D_GND		
	154	NC	NC脚，悬空	
	155	NC	NC脚，悬空	
AH36	156	I2S2_DO	I2S2_DO,EINT26,GPIO26;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AH35	157	I2S2_DI	I2S2_DI,EINT25,GPIO25;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	158	D_GND		
	159	D_GND		
	160	ANT0	5G天线0 	
	161	D_GND		
AG36	162	I2S2_LRCK	I2S2_LRCK,EINT24,GPIO24;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AG35	163	I2S2_BCK	I2S2_BCK,EINT23,GPIO23;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	164	NC	NC脚，悬空	
	165	NC	NC脚，悬空	
	166	D_GND		
	167	D_GND		
AG38	168	I2S0_DI	I2S0_DI,EINT17,GPIO17;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AG37	169	I2S0_DO	I2S0_DO,EINT18,GPIO18;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	170	D_GND		
	171	D_GND		
	172	NC	NC脚，悬空	
	173	D_GND		
AF36	174	I2S0_LRCK	I2S0_LRCK,EINT16,GPIO16;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AF37	175	I2S0_BCK	I2S0_BCK，EINT15,GPIO15;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	176	NC	NC脚，悬空	
	177	NC	NC脚，悬空	
	178	NC	NC脚，悬空	
	179	NC	NC脚，悬空	
AE37	180	SDA6	I2C6的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AE36	181	SCL6	I2C6的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
	182	D_GND		
	183	D_GND		
	184	ANT2	5G天线2	
	185	D_GND		
	186	D_GND		
	187	D_GND		
AU28	188	BPI_D_BUS1	GPIO86,EINT86;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
N4	189	GPIO190	GPIO190,此IO口不能做中断功能，可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	190	NC	NC脚，悬空	
MT6373_H14	191	VUSB_PMU	AUDIO CODEC芯片MT6338的供电3.0V，不用请悬空	
	192	NC	NC脚，悬空	
	193	NC	NC脚，悬空	
	194	D_GND		
	195	D_GND		
	196	GYRO_SENTRY_INT	GYRO_SENTRY_INT，IMU中断脚通知底板，哨兵模式	
	197	NC	NC脚，悬空	
	198	NC	NC脚，悬空	
	199	NC	NC脚，悬空	
	200	NC	NC脚，悬空	
	201	D_GND		
	202	D_GND		
	203	D_GND		
	204	NC	NC脚，悬空	
	205	NC	NC脚，悬空	
	206	NC	NC脚，悬空	
	207	NC	NC脚，悬空	
	208	NC	NC脚，悬空	
	209	NC	NC脚，悬空	
	210	NC	NC脚，悬空	
	211	NC	NC脚，悬空	
	212	D_GND		
	213	NC	NC脚，悬空	
	214	NC	NC脚，悬空	
	215	NC	NC脚，悬空	
	216	NC	NC脚，悬空	
	217	NC	NC脚，悬空	
	218	NC	NC脚，悬空	
F13	219	GPIO0_FMI2S_LRCK	此IO口在核心板有12K电阻上拉，用于核心板的Boot trapping配置，除了做I2S功能，非必要尽量优先选择其他IO口替代，也不要做上下拉配置。FMI2S_LRCK,GPIO0,SCP_EINT0;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	220	D_GND		
	221	D_GND		
	222	NC	NC脚，悬空	
	223	NC	NC脚，悬空	
	224	D_GND		
G31	225	GPIO84	GPIO184,EINT184;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	226	NC	NC脚，悬空	
F29	227	SCL3	I2C3的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
	228	NC	NC脚，悬空	
	229	NC	NC脚，悬空	
	230	D_GND		
	231	D_GND		
	232	NC	NC脚，悬空	
	233	NC	NC脚，悬空	
L37	234	MSDC1_DATA0	SD1卡DATA0,GPIO74,EINT74;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
M35	235	MSDC1_DATA3	SD1卡DATA3,GPIO77,EINT77;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G28	236	SDA3	I2C3的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
MT6373_G12	237	VSIM2_PMU	SIM卡2供电输出, 1.86/2.9V  200MA	
L38	238	SIM2_SIO	SIM卡2的数据口,GPIO71,EINT71，不用SIM2时可以当做GPIO口或中断功能。	
M39	239	SIM2_SRST	SIM卡2的复位,GPIO70,EINT70,不用SIM2时可以当做GPIO口或中断功能。	
M36	240	MSDC1_DATA2	SD1卡DATA2,GPIO76,EINT76;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
M34	241	MSDC1_DATA1	SD1卡DATA1,GPIO75,EINT75;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AA37	242	DP_AUXP	DP1.4 AUXP	
AA36	243	DP_AUXN	DP1.4 AUXN	
AC37	244	USB_DM	USB2.0 DM	
AC36	245	USB_DP	USB2.0 DP	
L36	246	MSDC1_CMD	SD1卡CMD,GPIO73,EINT73;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
L35	247	MSDC1_CLK	SD1卡CLK,GPIO72,EINT72;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
M38	248	SIM2_SCLK	SIM卡2的时钟,GPIO69,EINT69,不用SIM2时可以当做GPIO口或中断功能。	
	249	D_GND		
MT6373_F12	250	VSIM1_PMU	SIM卡1供电输出, 1.86/2.9V  200MA	
K36	251	SIM1_SCLK	SIM卡1的时钟,GPIO66,EINT66,不用SIM1时可以当做GPIO口或中断功能。	
K34	252	SIM1_SIO	SIM卡1的数据口,GPIO68,EINT68，不用SIM1时可以当做GPIO口或中断功能。	
W32	253	DP_LN1_TXP_P2	DP1.4 LN1 TXP	
W33	254	DP_LN1_TXN_P2	DP1.4 LN1 TXN	
Y34	255	DP_LN0_TXN_P2	DP1.4 LN0 TXN	
Y35	256	DP_LN0_TXP_P2	DP1.4 LN0 TXP	
	257	D_GND		
K35	258	SIM1_SRST	SIM卡1的复位,GPIO67,EINT67,不用SIM2时可以当做GPIO口或中断功能。	
	259	D_GND		
Y38	260	SSUSB_TXP_P1	USB3.0 SSUSB_TXP_P1;不用USB3.0时可复用为DP1.4 LN2 TXP	
Y39	261	SSUSB_TXN_P1	USB3.0 SSUSB_TXN_P1;不用USB3.0时可复用为DP1.4 LN2 TXN	
W36	262	SSUSB_RXN_P1	USB3.0 SSUSB_RXN_P1;不用USB3.0时可复用为DP1.4 LN3 TXN	
W37	263	SSUSB_RXP_P1	USB3.0 SSUSB_RXP_P1;不用USB3.0时可复用为DP1.4 LN3 TXP	
	264	D_GND		
	265	D_GND		
T37	266	DSI1_D0N	MIPI DSI1的D0N	
R38	267	DSI1_CKN	MIPI DSI1的CKN	
	268	D_GND		
R39	269	DSI1_CKP	MIPI DSI1的CKP	
T38	270	DSI1_D0P	MIPI DSI1的D0P	
R36	271	DSI1_D1N	MIPI DSI1的D1N	
R37	272	DSI1_D1P	MIPI DSI1的D1P	
U38	273	DSI1_D2N	MIPI DSI1的D2N	
U39	274	DSI1_D2P	MIPI DSI1的D2P	
	275	D_GND		
P37	276	DSI1_D3P	MIPI DSI1的D3P	
N37	277	DSI1_D3N	MIPI DSI1的D3N	
U36	278	DSI0_D2P	MIPI DSI0的D2P	
U35	279	DSI0_D2N	MIPI DSI0的D2N	
P33	280	DSI0_D3N	MIPI DSI0的D3N	
P34	281	DSI0_D3P	MIPI DSI0的D3P	
P35	282	DSI0_D1N	MIPI DSI0的D1N	
P36	283	DSI0_D1P	MIPI DSI0的D1P	
F30/NC	284	SPI3_CSB_SWTP	SPI3_CSB_SWTP，GPIO28,EINT28;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G29	285	SPI3_CK	SPI3_CK，GPIO27,EINT27;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G30	286	SPI3_MO	SPI3_MO，GPIO30,EINT30;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F31	287	SPI3_MI	SPI3_MI，GPIO29,EINT29;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	288	D_GND		
T35	289	DSI0_D0P	MIPI DSI0的D0P	
T34	290	DSI0_D0N	MIPI DSI0的D0N	
	291	NC	NC脚，悬空	
	292	NC	NC脚，悬空	
R34	293	DSI0_CKN	MIPI DSI0的CKN	
R35	294	DSI0_CKP	MIPI DSI0的CKP	
F24	295	PERIEN_CHG_ENB_GPIO133	GPIO133,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G33	296	SPI4_CSB	SPI4_CSB;GPIO37,EINT37;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F34	297	SPI4_MO	SPI4_MO;GPIO39,EINT39;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G34	298	SPI4_MI	SPI4_MO;GPIO38,EINT38;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F33	299	SPI4_CK	SPI4_MO;GPIO36,EINT36;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	300	NC	NC脚，悬空	
	301	NC	NC脚，悬空	
	302	NC	NC脚，悬空	
	303	NC	NC脚，悬空	
	304	NC	NC脚，悬空	
	305	NC	NC脚，悬空	
	306	NC	NC脚，悬空	
	307	NC	NC脚，悬空	
N5	308	GPIO191	GPIO191,可复用成GPS_L5_ELNA_EN,此IO口不能做中断功能,请参考  MT8676_GPIO_Application_Spec表格	
G26	309	GPIO136	GPIO136,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G21	310	GPIO227	GPIO227,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G23	311	GPIO231	GPIO231,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F32	312	SYSRSTB	系统复位,低有效	
E20	313	GPIO223	GPIO223,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	314	NC	NC脚，悬空	
	315	D_GND		
	316	NC	NC脚，悬空	
	317	NC	NC脚，悬空	
MT6363_N2/P2	318	VS1_PMIC	AUDIO CODEC芯片MT6338的供电，不用请悬空	
AV37	319	SCP_GPIO_6338_EN	AUDIO CODEC芯片MT6338的EN脚，可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F23	320	GPIO230	GPIO230,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F22	321	GPIO228	GPIO228,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G25	322	SCL5	I2C5的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
F26	323	GPIO135	GPIO135,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G27	324	AUD_I2C_SCL	AUDIO CODEC芯片MT6338的I2C_SCL，可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格,不用请悬空	
F27	325	AUD_I2C_SDA	AUDIO CODEC芯片MT6338的I2C_SDA，可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格,不用请悬空	
	326	NC	NC脚，悬空	
G22	327	AUD_DAT_MISO0	AUDIO CODEC芯片MT6338的AUDIO IF接口，AUD_DAT_MISO0，不用请悬空	
G20	328	AUD_DAT_MOSI1	此IO专用脚建议NC，在核心板内部是有Boot trapping配置的，非必要尽量优先选择其他IO口替代，也不要做上下拉配置。
AUDIO CODEC芯片的AUDIO IF接口，AUD_DAT_MOSI1，不用请悬空	
F20	329	AUD_DAT_MOSI0	此IO专用脚建议NC，在核心板内部是有Boot trapping配置的，非必要尽量优先选择其他IO口替代，也不要做上下拉配置。
AUDIO CODEC芯片的AUDIO IF接口，AUD_DAT_MOSI0，不用请悬空	
D20	330	AUD_CLK_MOSI	AUDIO CODEC芯片MT6338的AUDIO IF接口，AUD_CLK_MOSI，不用请悬空	
B5	331	RTC32K_1V8_F	AUDIO CODEC芯片MT6338的RTC_CLK 32KHz，不用请悬空	
	332	NC	NC脚，悬空	
F25	333	SDA5	I2C5的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
D19	334	GPIO43_DSI_TE	GPIO43,EINT43,可复用成DSI_TE,请参考  MT8676_GPIO_Application_Spec表格	
	335	D_GND		
	336	NC	NC脚，悬空	
G24	337	SCP_EINT_6338	AUDIO CODEC芯片MT6338的中断脚，可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
C20	338	SRCLKENA0	AUDIO CODEC芯片MT6338的待机控制信号脚SRCLKENA0，不用请悬空	
	339	D_GND		
	340	D_GND		
H16	341	SPI2_MI	SPI2_MI;GPIO13,EINT13;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F19	342	GPIO60_CTP0_RST	GPIO60,EINT60,可复用成CTP0_RST,请参考  MT8676_GPIO_Application_Spec表格	
E19	343	GPIO41_LCM_RST	GPIO41,EINT41,可复用成LCM_RST,请参考  MT8676_GPIO_Application_Spec表格	
G19	344	GPIO61_CTP1_RST	GPIO61,EINT61,可复用成CTP1_RST,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G18	345	EINT10_CTP1	ramdump/full dump专用功能口，系统变砖后debug。建议连接测试点以及按键，低有效，建议默认上拉。若一直被拉低会一直进入aee模式，系统会一直重启。	
G12	346	GPIO3_FMI2S_BCK	FMI2S_BCK,GPIO3,SCP_EINT3,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G15	347	GPIO42_DSI1_TE	GPIO42,EINT42,可复用成DSI_TE,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F16	348	SPI2_MO	SPI2_MO;GPIO14,EINT14;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F15	349	SPI2_CK	SPI2_CK;GPIO11,EINT11;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G16	350	SPI2_CSB	SPI2_CSB;GPIO12,EINT12;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F18	351	EINT9_CTP0	EINT9,GPIO9,建议复用成CTP0的中断,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G14	352	GPIO40_LCM1_RST	GPIO40,EINT40,可复用成LCM1_RST,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G13	353	GPIO1_FMI2S_DI	FMI2S_DI，GPIO1,SCP_EINT1,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
R4	354	GPIO178	GPIO178,此IO口不能做中断功能,请参考MT8676_GPIO_Application_Spec表格	
R6	355	GPIO183	GPIO183,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
R5	356	GPIO180_URXD3	GPIO183,此IO口不能做中断功能,可以复用成URXD3,请参考MT8676_GPIO_Application_Spec表格	
P3	357	GPIO181_UTXD3	GPIO181,此IO口不能做中断功能,可以复用成UTXD3,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
P2	358	GPIO175_PCIE_CLKREQN	GPIO175,此IO口不能做中断功能,可以复用成PCIE_CLKREQN,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
P4	359	GPIO182	GPIO182,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
R1	360	GPIO174_PCIE_WAKEN	GPIO174,此IO口不能做中断功能,可以复用成PCIE_WAKEN,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F12	361	GPIO2	GPIO2,SCP EINT2,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G10	362	SCP_SDA3	SCP_I2C3的SDA;I3C3_SDA,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F10	363	SCP_SCL3	SCP_I2C3的SCL;I3C3_SCL,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F7	364	SPI7_MO	SPI7_MO;GPIO57,EINT57;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G7	365	SPI7_MI	SPI7_MI;GPIO56,EINT56;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G6	366	SPI7_CSB	SPI7_CSB;GPIO55,EINT55;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
F6	367	SPI7_CK	SPI7_CK;GPIO54,EINT54;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
P1	368	GPIO176	GPIO176,此IO口不能做中断功能,请参考MT8676_GPIO_Application_Spec表格	
R2	369	GPIO173_PCIE_PERSTN	GPIO173,此IO口不能做中断功能,可以复用成PCIE_PERSTN,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
R3	370	GPIO179	GPIO179,此IO口不能做中断功能,请参考MT8676_GPIO_Application_Spec表格	
M6	371	GPIO188	GPIO188,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
T5	372	GPIO177	GPIO177,此IO口不能做中断功能,请参考MT8676_GPIO_Application_Spec表格	
F8	373	GPIO169_UTXD1	GPIO169,此IO口不能做中断功能,可以复用成UTXD1,以及SCP_I3C2_SCL,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G8	374	GPIO170_URXD1	GPIO170,此IO口不能做中断功能,可以复用成URXD1,以及SCP_I3C2_SDA,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
G11	375	GPIO59_INT_SIM2	GPIO59,EINT59,可复用成INT_SIM2,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	376	D_GND		
	377	NC	NC脚，悬空	
T6	378	GPIO128_CAM_CLK5	默认配置是CAM_CLK5,若要复用成GPIO128请注意修改软件配置，此IO口不能做中断功能；可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
U6	379	GPIO124_CAM_CLK1	默认配置是CAM_CLK1,若要复用成GPIO124请注意修改软件配置，此IO口不能做中断功能；可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	380	D_GND		
	381	D_GND		
T7	382	GPIO127_CAM_CLK4	默认配置是CAM_CLK4,若要复用成GPIO127请注意修改软件配置，此IO口不能做中断功能；可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
U7	383	GPIO123_CAM_CLK0	默认配置是CAM_CLK0,若要复用成GPIO123请注意修改软件配置，此IO口不能做中断功能；可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	384	D_GND		
	385	NC	NC脚，悬空	
	386	NC	NC脚，悬空	
	387	NC	NC脚，悬空	
	388	NC	NC脚，悬空	
	389	NC	NC脚，悬空	
	390	D_GND		
	391	NC	NC脚，悬空	
	392	NC	NC脚，悬空	
	393	NC	NC脚，悬空	
	394	NC	NC脚，悬空	
MT6685_E6	395	BBCK5	AUDIO CODEC芯片MT6338的26Mhz时钟输入，MT6685的26Mhz时钟输出，不用请悬空	
	396	D_GND		
	397	D_GND		
	398	NC	NC脚，悬空	
	399	D_GND		
	400	D_GND		
	401	D_GND		
	402	D_GND		
	403	WIFI_BT_ANT1	WIFI_BT天线1	
	404	D_GND		
T2	405	GPIO119_CAM_RST4	GPIO119,EINT119,可以复用成CAM_RST4,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
U2	406	GPIO115_CAM_RST0	GPIO115,EINT115,可以复用成CAM_RST0,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
P5	407	GPIO186_I2SIN6_0_DI	GPIO186,此IO口不能做中断功能,可以复用成I2S6_DI,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
Y6	408	PCIE_LN0_TXP	PCIE_LN0的TXP	
Y5	409	PCIE_LN0_TXN	PCIE_LN0的TXN	
	410	D_GND		
	411	D_GND		
	412	WIFI_BT_ANT0	WIFI_BT天线0	
	413	D_GND		
Y2	414	PCIE_LN0_RXN	PCIE_LN0的RXN	
Y1	415	PCIE_LN0_RXP	PCIE_LN0的RXP	
R7	416	GPIO184_I2SIN6_0_BCK	GPIO184,此IO口不能做中断功能,可以复用成I2S6_BCK,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
P7	417	GPIO187_I2SOUT6_0_DO	GPIO187,此IO口不能做中断功能,可以复用成I2S6_DO,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
P6	418	GPIO185_I2SIN6_0_LRCK	GPIO185,此IO口不能做中断功能,可以复用成I2S6_LRCK,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
U4	419	SCL10	I2C10的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AA3	420	PCIE_CKP	PCIE的CKP	
AA4	421	PCIE_CKN	PCIE的CKN	
	422	D_GND		
	423	D_GND		
	424	GPS_ANT	GPS天线	
	425	D_GND		
	426	NC	NC脚，悬空	
	427	NC	NC脚，悬空	
U5	428	SDA10	I2C10的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
T1	429	GPIO120_CAM_RST5	GPIO120,EINT120;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
M5	430	GPIO189	GPIO189,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AC4	431	GPIO220	GPIO220,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	432	NC	NC脚，悬空	
	433	NC	NC脚，悬空	
	434	D_GND		
	435	D_GND		
AK3	436	CSI5A_RDN0	MIPI CSI5A的DATA0-N	
AJ3	437	CSI5A_RDP0	MIPI CSI5A的DATA0-P	
AH3	438	CSI5A_RDN2	MIPI CSI5A的DATA2-N	
AH2	439	CSI5A_RDP2	MIPI CSI5A的DATA2-P	
U3	440	GPIO116_CAM_RST1	GPIO116,EINT116;可以复用成CAM_RST1,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
V4	441	SCL11	I2C11的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
V5	442	SDA11	I2C11的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
V3	443	SCL4	I2C4的SCL,I3C4的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
AK2	444	CSI5A_RCP	MIPI CSI5A的CLK-P	
AK1	445	CSI5A_RCN	MIPI CSI5A的CLK-N	
AL2	446	CSI5B_RDP1	MIPI CSI5B的DATA1-P	
AL3	447	CSI5B_RDN1	MIPI CSI5B的DATA1-N	
AJ6	448	CSI4A_RDN0	MIPI CSI4A的DATA0-N	
AH6	449	CSI4A_RDP0	MIPI CSI4A的DATA0-P	
AM1	450	CSI5B_RDN3	MIPI CSI5B的DATA3-N	
AM2	451	CSI5B_RDP3	MIPI CSI5B的DATA3-P	
V2	452	SDA4	I2C4的SDA,I3C4的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
W3	453	SDA2	I2C2的SDA,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
W4	454	SCL2	I2C2的SCL,可以复用成其它Func,请参考  MT8676_GPIO_Application_Spec表格	
	455	D_GND		
AG5	456	CSI4A_RDP2	MIPI CSI4A的DATA2-P	
AG6	457	CSI4A_RDN2	MIPI CSI4A的DATA2-N	
AJ7	458	CSI4B_RDP1	MIPI CSI4B的DATA1-P	
AK7	459	CSI4B_RDN1	MIPI CSI4B的DATA1-N	
AL6	460	CSI4B_RDN3	MIPI CSI4B的DATA3-N	
AL7	461	CSI4B_RDP3	MIPI CSI4B的DATA3-P	
AJ4	462	CSI4A_RCN	MIPI CSI4A的CLK-P	
AJ5	463	CSI4A_RCP	MIPI CSI4A的CLK-N	
AC5	464	GPIO221	GPIO221,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AE3	465	SPI1_CK	SPI1_CK;GPIO50,EINT50;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AE2	466	SPI1_CSB	SPI1_CSB;GPIO51,EINT51;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AE6	467	GPIO79_MSDC2_CMD	GPIO79,EINT79,可以复用成MSDC2_CMD,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AB5	468	GPIO44	GPIO44,EINT44;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AB6	469	GPIO45	GPIO45,EINT45,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	470	D_GND		
	471	D_GND		
AP2	472	CSI3A_RDP0	MIPI CSI3A的DATA0-P	
AP3	473	CSI3A_RDN0	MIPI CSI3A的DATA0-N	
AD2	474	SPI0_MO	SPI0_MO;GPIO49,EINT49;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AF7	475	GPIO78_MSDC2_CLK	GPIO78,EINT78,可以复用成MSDC2_CLK,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AC6	476	GPIO80_MSDC2_DATA0	GPIO80,EINT80,可以复用成MSDC2_DATA0,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AF2	477	SPI1_MO	SPI1_MO;GPIO53,EINT53;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AF3	478	SPI1_MI	SPI1_MI;GPIO52,EINT52;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AD7	479	GPIO82_MSDC2_DATA2	GPIO82,EINT82,可以复用成MSDC2_DATA2,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AC7	480	GPIO81_MSDC2_DATA1	GPIO81,EINT81,可以复用成MSDC2_DATA1,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AC2	481	SPI0_CSB	SPI0_CSB;GPIO47,EINT47;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AR3	482	CSI3A_RCN	MIPI CSI3A的CLK-N	
AR2	483	CSI3A_RCP	MIPI CSI3A的CLK-P	
AT1	484	CSI3B_RDP1	MIPI CSI3B的DATA1-P	
AT2	485	CSI3B_RDN1	MIPI CSI3B的DATA1-N	
AC3	486	SPI0_CK	SPI0_CK;GPIO46,EINT46;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AE7	487	GPIO83_MSDC2_DATA3	GPIO83,EINT83,可以复用成MSDC2_DATA3,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	488	D_GND		
AE5	489	GPIO134	GPIO134,此IO口不能做中断功能,可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	490	D_GND		
	491	D_GND		
	492	D_GND		
AD3	493	SPI0_MI	SPI0_MI;GPIO48,EINT48;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
AU2	494	CSI3B_RDN3	MIPI CSI3B的DATA3-N	
AU1	495	CSI3B_RDP3	MIPI CSI3B的DATA3-P	
AN1	496	CSI3A_RDP2	MIPI CSI3A的DATA2-P	
AN2	497	CSI3A_RDN2	MIPI CSI3A的DATA2-N	
F11	498	INT_SIM1	INT_SIM1;GPIO58,EINT58;可以复用成其它Func,请参考MT8676_GPIO_Application_Spec表格	
	499	D_GND		
MT6373_J14	500	VIBR_PMU	LDO电源输出,1.8/2.8/3.0/3.3V/200mA 可供外部负载使用	
	501	D_GND		
MT6373_K14	502	VTP_PMU	VTP供电输出  1.8/2.8/3.0/3.3V/200mA	
MT6373_J12	503	VIO28_PMU	VIO28_PMU ,1.8/2.8/3.0/3.3V/200mA  SENSOR供电	
MT6373_N14	504	VMCH_PMU	T卡供电LDO 输出 2.9V/800mA	
MT6363_K7	505	VBUS	VBUS对应MT8676底板上的VUSB_5V_IN,检测USB插入	
	506	D_GND	电源地	
	507	D_GND	电源地	
	508	VBAT	系统4.0V供电输入	
	509	VBAT	系统4.0V供电输入	
	510	D_GND	电源地	
	511	D_GND	电源地	
MT6363_L5	512	PWRKEY_SW	POWERKEY ,系统开关机键,电平为4.0V，默认高电平低有效	
	513	D_GND	电源地	
	514	D_GND	电源地	
	515	D_GND	电源地	
	516	VBAT	系统4.0V供电输入	
	517	VBAT	系统4.0V供电输入	
	518	VBAT	系统4.0V供电输入	
	519	VBAT	系统4.0V供电输入	
	520	VBAT	系统4.0V供电输入	
	521	VBAT	系统4.0V供电输入	
	522	D_GND	电源地	
	523	D_GND	电源地	
	524	VBAT	系统4.0V供电输入	
	525	VBAT	系统4.0V供电输入	
	526	D_GND	电源地	
	527	D_GND	电源地	
	528	D_GND	电源地	
	G1	D_GND		
	G2	D_GND		
	G3	D_GND		
	G4	D_GND		
	G5	D_GND		
	G6	D_GND		
	G7	D_GND		
	G8	D_GND		
	G9	D_GND		
	G10	D_GND		
	G11	D_GND		
	G12	D_GND		
	G13	D_GND		
	G14	D_GND		
	G15	D_GND		
	G16	D_GND		
	G17	D_GND		
	G18	D_GND		
	G19	D_GND		
	G20	D_GND		
	G21	D_GND		
	G22	D_GND		
	G23	D_GND		
	G24	D_GND		
	G25	D_GND		
	G26	D_GND		
	G27	D_GND		
	G28	D_GND		
	G29	D_GND		
	G30	D_GND		
	G31	D_GND		
	G32	D_GND		
	G33	D_GND		
	G34	D_GND		
	G35	D_GND		
	G36	D_GND		
	G37	D_GND		
	G38	D_GND		
	G39	D_GND		
	G40	D_GND		
	G41	D_GND		
	G42	D_GND		
	G43	D_GND		
	G44	D_GND		
	G45	D_GND		
	G46	D_GND		
	G47	D_GND		
	G48	D_GND		
	G49	D_GND		
	G50	D_GND		
	G51	D_GND		
	G52	D_GND		

## 工作表 2

IO power domain	IO Pad Type	Pull Init	Pin Num	Ball name	EINT	Aux Func.0	Aux Func.1	Aux Func.2	Core board PIN
DVDD28_SIM1	SIM IO	PD	K36	SIM1_SCLK	EINT66	B:GPIO66	O:MD1_SIM1_SCLK		251
DVDD28_SIM1	SIM IO	PD	K35	SIM1_SRST	EINT67	B:GPIO67	O:MD1_SIM1_SRST		258
DVDD28_SIM1	SIM IO	PD	K34	SIM1_SIO	EINT68	B:GPIO68	B1:MD1_SIM1_SIO		252
DVDD28_SIM2	SIM IO	PD	M38	SIM2_SCLK	EINT69	B:GPIO69	O:MD1_SIM2_SCLK		248
DVDD28_SIM2	SIM IO	PD	M39	SIM2_SRST	EINT70	B:GPIO70	O:MD1_SIM2_SRST		239
DVDD28_SIM2	SIM IO	PD	L38	SIM2_SIO	EINT71	B:GPIO71	B1:MD1_SIM2_SIO		238
									
DVDD18_IOTM	GPIO	PD	F11	INT_SIM1	EINT58	B:GPIO58			498
DVDD18_IOTM	GPIO	PD	G11	INT_SIM2	EINT59	B:GPIO59			375
									
DVDD28_MSDC1	MSDC1 IO	PD	L35	MSDC1_CLK	EINT72	B:GPIO72	B0:MSDC1_CLK		247
DVDD28_MSDC1	MSDC1 IO	PD	L36	MSDC1_CMD	EINT73	B:GPIO73	B1:MSDC1_CMD		246
DVDD28_MSDC1	MSDC1 IO	PD	L37	MSDC1_DAT0	EINT74	B:GPIO74	B1:MSDC1_DAT0		234
DVDD28_MSDC1	MSDC1 IO	PD	M34	MSDC1_DAT1	EINT75	B:GPIO75	B1:MSDC1_DAT1		241
DVDD28_MSDC1	MSDC1 IO	PD	M36	MSDC1_DAT2	EINT76	B:GPIO76	B1:MSDC1_DAT2		240
DVDD28_MSDC1	MSDC1 IO	PD	M35	MSDC1_DAT3	EINT77	B:GPIO77	B1:MSDC1_DAT3		235
									
DVDD18_IOMC2	MSDC2 IO	PD	AF7	MSDC2_CLK	EINT78	B:GPIO78	B0:MSDC2_CLK		475
DVDD18_IOMC2	MSDC2 IO	PD	AE6	MSDC2_CMD	EINT79	B:GPIO79	B1:MSDC2_CMD		467
DVDD18_IOMC2	MSDC2 IO	PD	AC6	MSDC2_DAT0	EINT80	B:GPIO80	B1:MSDC2_DAT0		476
DVDD18_IOMC2	MSDC2 IO	PD	AC7	MSDC2_DAT1	EINT81	B:GPIO81	B1:MSDC2_DAT1	B1:SCP_SCL6	480
DVDD18_IOMC2	MSDC2 IO	PD	AD7	MSDC2_DAT2	EINT82	B:GPIO82	B1:MSDC2_DAT2	B1:SCP_SDA6	479
DVDD18_IOMC2	MSDC2 IO	PD	AE7	MSDC2_DAT3	EINT83	B:GPIO83	B1:MSDC2_DAT3	MD_INT	487
									
DVDD18_IOLB	GPIO	PD	AF37	I2S0_BCK	EINT15	B:GPIO15	O:I2SIN0_BCK		175
DVDD18_IOLB	GPIO	PD	AF36	I2S0_LRCK	EINT16	B:GPIO16	O:I2SIN0_LRCK		174
DVDD18_IOLB	GPIO	PD	AG38	I2S0_DI	EINT17	B:GPIO17	I0:I2SIN0_DI		168
DVDD18_IOLB	GPIO	PD	AG37	I2S0_DO	EINT18	B:GPIO18	O:I2SOUT0_DO		169
									
DVDD18_IOLB	GPIO	PD	AE34	I2S1_BCK	EINT19	B:GPIO19	O:I2SIN1_BCK		151
DVDD18_IOLB	GPIO	PD	AE35	I2S1_LRCK	EINT20	B:GPIO20	O:I2SIN1_LRCK		150
DVDD18_IOLB	GPIO	PD	AF34	I2S1_DI	EINT21	B:GPIO21	I0:I2SIN1_DI		145
DVDD18_IOLB	GPIO	PD	AF35	I2S1_DO	EINT22	B:GPIO22	O:I2SOUT1_DO		144
									
DVDD18_IOLB	GPIO	PD	AG35	I2S2_BCK	EINT23	B:GPIO23	O:I2SIN2_BCK		163
DVDD18_IOLB	GPIO	PD	AG36	I2S2_LRCK	EINT24	B:GPIO24	O:I2SIN2_LRCK		162
DVDD18_IOLB	GPIO	PD	AH35	I2S2_DI	EINT25	B:GPIO25	I0:I2SIN2_DI		157
DVDD18_IOLB	GPIO	PD	AH36	I2S2_DO	EINT26	B:GPIO26	O:I2SOUT2_DO		156
									
DVDD18_IOBM3	GPIO	PD	AU23	BPI_D_BUS10	EINT95	B:GPIO95	O:I2SOUT4_DATA0	TDMOUT_DATA0	55
DVDD18_IOBM3	GPIO	PD	AW21	BPI_D_BUS14	EINT99	B:GPIO99	O:I2SIN4_BCK	TDM_BCK	61
DVDD18_IOBM3	GPIO	PD	AY21	BPI_D_BUS15	EINT100	B:GPIO100	I0:I2SIN4_DATA0	TDMIN_DATA0	54
DVDD18_IOBM3	GPIO	PD	AU21	BPI_D_BUS19	EINT104	B:GPIO104	O:I2SIN4_LRCK	TDM_LRCK	49
									
DVDD18_IORT3	GPIO	PD	R7	ANT_SEL11		B:GPIO184	O:I2SIN6_0_BCK		416
DVDD18_IORT3	GPIO	PD	P6	ANT_SEL12		B:GPIO185	O:I2SIN6_0_LRCK		418
DVDD18_IORT3	GPIO	PD	P5	ANT_SEL13		B:GPIO186	I0:I2SIN6_0_DI		407
DVDD18_IORT3	GPIO	PD	P7	ANT_SEL14		B:GPIO187	O:I2SOUT6_0_DO		417
									
DVDD18_IOTM	GPIO	PD	F13	SCP_EINT0	EINT0	B:GPIO0	B0:FMI2S_LRCK	master/Slave	#N/A
DVDD18_IOTM	GPIO	PD	G13	SCP_EINT1	EINT1	B:GPIO1	I0:FMI2S_DI	master/Slave	353
DVDD18_IOTM	GPIO	PD	F12	SCP_EINT2	EINT2	B:GPIO2	O:FMI2S_MCK	master/Slave	361
DVDD18_IOTM	GPIO	PD	G12	SCP_EINT3	EINT3	B:GPIO3	B0:FMI2S_BCK	master/Slave	346
									
DVDD18_IOTM3	GPIO	PD	D20	AUD_CLK_MOSI		B:GPIO222	O:AUD_CLK_MOSI	O:AUD_CLK_MOSI	330
DVDD18_IOTM3	GPIO	PD	E20	AUD_SYNC_MOSI		B:GPIO223	O:AUD_SYNC_MOSI		313
DVDD18_IOTM3	GPIO	PD	F20	AUD_DAT_MOSI0		B:GPIO224	O:AUD_DAT_MOSI0	O:AUD_DAT_MOSI0	329
DVDD18_IOTM3	GPIO	PD	G20	AUD_DAT_MOSI1		B:GPIO225	O:AUD_DAT_MOSI1	O:AUD_DAT_MOSI1	328
DVDD18_IOTM3	GPIO	PD	F21	AUD_DAT_MOSI2		B:GPIO226	O:AUD_DAT_MOSI2		#N/A
DVDD18_IOTM3	GPIO	PD	G21	AUD_NLE_MOSI0		B:GPIO227	O:AUD_NLE_MOSI0		310
DVDD18_IOTM3	GPIO	PD	F22	AUD_NLE_MOSI1		B:GPIO228	O:AUD_NLE_MOSI1		321
DVDD18_IOTM3	GPIO	PD	G22	AUD_DAT_MISO0		B:GPIO229	I0:AUD_DAT_MISO0	I0:AUD_DAT_MISO0	327
DVDD18_IOTM3	GPIO	PD	F23	AUD_DAT_MISO1		B:GPIO230	I0:AUD_DAT_MISO1	I0:AUD_CLK_MISO	320
DVDD18_IOTM3	GPIO	PD	G23	AUD_DAT_MISO2		B:GPIO231	I0:AUD_DAT_MISO2	I0:AUD_DAT_MISO1	311
									
DVDD18_IOBL	SPMI IO	PD	AV38	MIPI4_D_SCLK	EINT113	B:GPIO113		O:DMIC4_CLK	94
DVDD18_IOBL	SPMI IO	PD	AV39	MIPI4_D_SDATA	EINT114	B:GPIO114		I0:DMIC4_DAT	105
DVDD18_IOBL	SPMI IO	PD	AW38	MIPI3_D_SCLK	EINT111	B:GPIO111	O:MIPI3_D_SCLK		82
DVDD18_IOBL	SPMI IO	PD	AW39	MIPI3_D_SDATA	EINT112	B:GPIO112	B0:MIPI3_D_SDATA		93
DVDD18_IOBL	SPMI IO	PD	AW37	MIPI2_D_SCLK	EINT109	B:GPIO109	O:MIPI2_D_SCLK	O:DMIC1_CLK	107
DVDD18_IOBL	SPMI IO	PD	AY39	MIPI2_D_SDATA	EINT110	B:GPIO110	B0:MIPI2_D_SDATA	I0:DMIC1_DAT	116
DVDD18_IOBL	SPMI IO	PD	AY38	MIPI1_D_SCLK	EINT107	B:GPIO107	O:MIPI1_D_SCLK	O:DMIC3_CLK	95
DVDD18_IOBL	SPMI IO	PD	BA39	MIPI1_D_SDATA	EINT108	B:GPIO108	B0:MIPI1_D_SDATA	I0:DMIC3_DAT	104
DVDD18_IOBL	SPMI IO	PD	BB38	MIPI0_D_SCLK	EINT105	B:GPIO105	O:MIPI0_D_SCLK		106
DVDD18_IOBL	SPMI IO	PD	BA38	MIPI0_D_SDATA	EINT106	B:GPIO106	B0:MIPI0_D_SDATA		117
									
DVDD18_IOBM	GPIO		AT34	DISP_PWM		B:GPIO131	O:DISP_PWM		101
DVDD18_IOTM2	GPIO	PD	D19	DSI_TE	EINT43	B:GPIO43			334
DVDD18_IOTM2	GPIO	PD	E19	LCM_RST	EINT41	B:GPIO41			343
									
DVDD18_IOBM	GPIO		AU35	DISP_PWM_1		B:GPIO132	O:DISP_PWM1		123
DVDD18_IOTM2	GPIO	PD	G15	DSI_TE_AUX	EINT42	B:GPIO42	I0:DSI1_TE		347
DVDD18_IOTM2	GPIO	PD	G14	LCM_RST_AUX	EINT40	B:GPIO40	O:LCM1_RST		352
									
DVDD18_IOBM3	GPIO	PD	AV25	BPI_D_BUS6	EINT91	B:GPIO91	I0:DP_TX_HPD		121
DVDD18_IOBM3	GPIO	PD	AU25	BPI_D_BUS7	EINT92	B:GPIO92	O:DP_OC_EN		124
									
DVDD18_IOBM3	GPIO	PD	AV24	BPI_D_BUS8	EINT93	B:GPIO93	O:PWM_2		70
DVDD18_IOBM3	GPIO	PD	AU24	BPI_D_BUS9	EINT94	B:GPIO94	O:PWM_3		83
									
DVDD18_IOTM2	GPIO	PD	F19	GPIO_CTP0_RST	EINT60	B:GPIO60			342
DVDD18_IOTM2	GPIO	PD	F18	EINT_CTP0	EINT9	B:GPIO9			351
									
DVDD18_IOTM2	GPIO	PD	G19	GPIO_CTP1_RST	EINT61	B:GPIO61			344
DVDD18_IOTM2	GPIO	PD	G18	EINT_CTP1	EINT10	B:GPIO10		RAMDUMP	345
									
									
DVDD18_IOBM	GPIO		AU36	PERI_EN0	EINT65	B:GPIO65	LCM_EN0	O:USB_DRVVBUS	100
DVDD18_IOBM	GPIO		AV37	PERI_EN1	EINT64	B:GPIO64	LCM_EN1		319
DVDD18_IOBM	GPIO		AV36	PERI_EN2	EINT63	B:GPIO63	LCM_EN2		122
DVDD18_IOBM	GPIO		AV35	PERI_EN3	EINT62	B:GPIO62	LCM_EN3		111
									
DVDD18_IOBM	GPIO	PD	AU34	EINT4	EINT4	B:GPIO4			108
DVDD18_IOBM	GPIO	PD	AU33	EINT5	EINT5	B:GPIO5	I1:IDDIG		103
DVDD18_IOBM	GPIO	PD	AV34	EINT6	EINT6	B:GPIO6			96
									
DVDD18_IOBM	GPIO	PD	AV30	JTRSTN		B:GPIO209	I1:JTRSTN_SEL1		84
DVDD18_IOBM	GPIO	PD	AU31	JTCK		B:GPIO210	I0:JTCK_SEL1		91
DVDD18_IOBM	GPIO	PD	AU30	JTMS		B:GPIO211	B1:JTMS_SEL1		90
DVDD18_IOBM	GPIO	PD	AU29	JTDI		B:GPIO212	I1:JTDI_SEL1		85
DVDD18_IOBM	GPIO	PD	AV29	JTDO		B:GPIO213	O:JTDO_SEL1		97
									
DVDD18_IOBM	GPIO		AV31	UTXD0		B:GPIO207	O:UTXD0		79
DVDD18_IOBM	GPIO	PU	AT32	URXD0		B:GPIO208	I1:URXD0		78
									
DVDD18_IOTM	I2C IO	PD	F8	SCP_I3C_SCL2		B:GPIO169	O:UTXD1		373
DVDD18_IOTM	I2C IO	PD	G8	SCP_I3C_SDA2		B:GPIO170	I1:URXD1		374
									
DVDD18_IORB	GPIO	PD	AV9	CAM_RST6	EINT121	B:GPIO121	O:UTXD2		19
DVDD18_IORB	GPIO	PD	AV10	CAM_RST2	EINT117	B:GPIO117	I1:URXD2		18
									
DVDD18_IORT3	GPIO	PD	P3	ANT_SEL8		B:GPIO181	O:UTXD3		357
DVDD18_IORT3	GPIO	PD	R5	ANT_SEL7		B:GPIO180	I1:URXD3		356
									
DVDD18_IOBM2	KPROW IO	PD	BB20	KPROW0	EINT33	B:GPIO33	B1:KPROW0	O:I2SIN0_MCK	59
DVDD18_IOBM2	KPROW IO	PD	BC20	KPROW1	EINT34	B:GPIO34	B1:KPROW1	O:I2SIN1_MCK	56
DVDD18_IOBM2	KPCOL IO	PU	AY20	KPCOL0	EINT32	B:GPIO32	B1:KPCOL0_VLP		58
DVDD18_IOBM2	KPCOL IO	PD	BA20	KPCOL1	EINT31	B:GPIO31	B1:KPCOL1		57
									
DVDD18_IOBM2	GPIO		AW20	AP_GOOD	EINT35	B:GPIO35	O:AP_GOOD	O:GPS_PPS	35
									
DVDD18_IOBM3	GPIO	PD	AV28	BPI_D_BUS0	EINT85	B:GPIO85	O:BPI_BUS0		#N/A
DVDD18_IOBM3	GPIO	PD	AU28	BPI_D_BUS1	EINT86	B:GPIO86	O:BPI_BUS1		188
DVDD18_IOBM3	GPIO	PD	AV27	BPI_D_BUS2	EINT87	B:GPIO87	O:BPI_BUS2		72
DVDD18_IOBM3	GPIO	PD	AU27	BPI_D_BUS3	EINT88	B:GPIO88	O:BPI_BUS3		#N/A
DVDD18_IOBM3	GPIO	PD	AV26	BPI_D_BUS4	EINT89	B:GPIO89	O:BPI_BUS4		66
DVDD18_IOBM3	GPIO	PD	AU26	BPI_D_BUS5	EINT90	B:GPIO90	O:BPI_BUS5		81
DVDD18_IOBM3	GPIO	PD	AV22	BPI_D_BUS11	EINT96	B:GPIO96	O:BPI_BUS11		80
DVDD18_IOBM3	GPIO	PD	AU22	BPI_D_BUS12	EINT97	B:GPIO97	O:BPI_BUS12		67
DVDD18_IOBM3	GPIO	PD	AV21	BPI_D_BUS13	EINT98	B:GPIO98	O:BPI_BUS13		73
DVDD18_IOBM3	GPIO	PD	BA21	BPI_D_BUS16	EINT101	B:GPIO101	O:BPI_BUS16		71
DVDD18_IOBM3	GPIO	PD	BB21	BPI_D_BUS17	EINT102	B:GPIO102	O:BPI_BUS17		69
DVDD18_IOBM3	GPIO	PD	BC21	BPI_D_BUS18	EINT103	B:GPIO103	O:BPI_BUS18		68
									
DVDD18_IORT2	I2C IO	PD	U7	CAM_CLK0		B:GPIO123	O:CMMCLK0		383
DVDD18_IORT2	GPIO	PD	U2	CAM_RST0	EINT115	B:GPIO115			406
									
DVDD18_IORT	I2C IO	PD	U6	CAM_CLK1		B:GPIO124	O:CMMCLK1		379
DVDD18_IORT	GPIO	PD	U3	CAM_RST1	EINT116	B:GPIO116			440
									
DVDD18_IORB	I2C IO	PD	AV12	CAM_CLK2		B:GPIO125	O:CMMCLK2		25
									
DVDD18_IOBR	I2C IO	PD	AU11	CAM_CLK3		B:GPIO126	O:CMMCLK3		32
DVDD18_IOBR	GPIO	PD	AR9	CAM_RST3	EINT118	B:GPIO118			34
									
DVDD18_IORT2	I2C IO	PD	T7	CAM_CLK4		B:GPIO127	O:CMMCLK4		382
DVDD18_IORT2	GPIO	PD	T2	CAM_RST4	EINT119	B:GPIO119	O:PWM_0		405
									
DVDD18_IORT	I2C IO	PD	T6	CAM_CLK5		B:GPIO128	O:CMMCLK5		378
DVDD18_IORT	GPIO	PD	T1	CAM_RST5	EINT120	B:GPIO120	O:PWM_1		429
									
DVDD18_IORB	I2C IO	PD	AU12	CAM_CLK6		B:GPIO129			24
DVDD18_IOBR	I2C IO	PD	AU10	CAM_CLK7		B:GPIO130			33
DVDD18_IOBR	GPIO	PD	AW9	CAM_RST7	EINT122	B:GPIO122			45
									
DVDD18_IORM	GPIO	PD	AE5	GPIO_FPS_RST		B:GPIO134			489
DVDD18_IORM	GPIO	PD	AE4	EINT_FPS	EINT8	B:GPIO8			#N/A
									
DVDD18_IOMC2	SPMI IO		AD4	SPMI_M_SCL		B:GPIO218	B0:SPMI_M_SCL		#N/A
DVDD18_IOMC2	SPMI IO	NP	AD5	SPMI_M_SDA		B:GPIO219	B0:SPMI_M_SDA		#N/A
									
DVDD18_IOMC2	SPMI IO		AC4	SPMI_P_SCL		B:GPIO220	B0:SPMI_P_SCL		431
DVDD18_IOMC2	SPMI IO	NP	AC5	SPMI_P_SDA		B:GPIO221	B0:SPMI_P_SDA		464
									
DVDD18_IORM2	MSDC2 IO	PD	AB5	SPI0_HOLD	EINT44	B:GPIO44	O:SRCLKENA1		468
DVDD18_IORM2	MSDC2 IO	PD	AB6	SPI0_WP	EINT45	B:GPIO45	O:SRCLKENA1		469
									
DVDD18_IORT3	GPIO	PD	R2	ANT_SEL0		B:GPIO173	O:ANT_SEL0	O:PCIE_PERSTN	369
DVDD18_IORT3	GPIO	PD	R1	ANT_SEL1		B:GPIO174	O:ANT_SEL1	B1:PCIE_WAKEN	360
DVDD18_IORT3	GPIO	PD	P2	ANT_SEL2		B:GPIO175	O:ANT_SEL2	B1:PCIE_CLKREQN	358
									
DVDD18_IORT3	GPIO	PD	P1	ANT_SEL3		B:GPIO176	O:ANT_SEL3		368
DVDD18_IORT3	GPIO	PD	T5	ANT_SEL4		B:GPIO177	O:ANT_SEL4		372
DVDD18_IORT3	GPIO	PD	R4	ANT_SEL5		B:GPIO178	O:ANT_SEL5		354
DVDD18_IORT3	GPIO	PD	R3	ANT_SEL6		B:GPIO179	O:ANT_SEL6		370
									
DVDD18_IORT3	GPIO	PD	P4	ANT_SEL9		B:GPIO182	O:BPI_BUS9		359
DVDD18_IORT3	GPIO	PD	R6	ANT_SEL10		B:GPIO183	O:BPI_BUS10		355
									
DVDD18_IORT3	GPIO	PD	N4	GPS_L1_ELNA_EN		B:GPIO190	O:GPS_L1_ELNA_EN		#N/A
DVDD18_IORT3	GPIO	PD	N5	GPS_L5_ELNA_EN		B:GPIO191	O:GPS_L5_ELNA_EN		308
									
DVDD18_IORT3	GPIO	PD	M6	BPI_WAKEUP_PMIC		B:GPIO188			371
DVDD18_IORT3	GPIO	PD	M5	CONN_PMIC_EN		B:GPIO189	O:LCM2_RST		430
									
DVDD18_IOTM3	GPIO		F24	PERIEN_CHG_ENB		B:GPIO133			295
DVDD18_IOTM3	GPIO	PD	G24	EINT_CHG_IRQB	EINT7	B:GPIO7			337
									
DVDD18_IOTM3	I2C IO	PD	G27	AUD_I2C_SCL		B:GPIO167			324
DVDD18_IOTM3	I2C IO	PD	F27	AUD_I2C_SDA		B:GPIO168			325
									
DVDD18_IOBM	I2C IO	PD	AV33	I3C_SCL0		B:GPIO137	B1:SCL0		119
DVDD18_IOBM	I2C IO	PD	AU32	I3C_SDA0		B:GPIO138	B1:SDA0		115
									
DVDD18_IOBM2	I2C IO	PD	AU20	I3C_SCL1		B:GPIO139	B1:SCL1		47
DVDD18_IOBM2	I2C IO	PD	AV20	I3C_SDA1		B:GPIO140	B1:SDA1		44
									
DVDD18_IORT2	I2C IO	PD	W4	CAM_I3C_SCL2		B:GPIO141	B1:SCL2		454
DVDD18_IORT2	I2C IO	PD	W3	CAM_I3C_SDA2		B:GPIO142	B1:SDA2		453
									
DVDD18_IOTL	I2C IO	PD	F29	I2C_SCL3		B:GPIO143	B1:SCL3		227
DVDD18_IOTL	I2C IO	PD	G28	I2C_SDA3		B:GPIO144	B1:SDA3		236
									
DVDD18_IORT	I2C IO	PD	V3	CAM_I3C_SCL4		B:GPIO145	B1:SCL4		443
DVDD18_IORT	I2C IO	PD	V2	CAM_I3C_SDA4		B:GPIO146	B1:SDA4		452
									
DVDD18_IOTM3	I2C IO	PD	G25	CHG_I2C_SCL5		B:GPIO147	B1:SCL5		322
DVDD18_IOTM3	I2C IO	PD	F25	CHG_I2C_SDA5		B:GPIO148	B1:SDA5		333
									
DVDD18_IOLB	I2C IO	PD	AE36	I2C_SCL6		B:GPIO149	B1:SCL6		181
DVDD18_IOLB	I2C IO	PD	AE37	I2C_SDA6		B:GPIO150	B1:SDA6		180
									
DVDD18_IOBM	I2C IO	PD	AW32	I3C_SCL7		B:GPIO151	B1:SCL7		113
DVDD18_IOBM	I2C IO	PD	AV32	I3C_SDA7		B:GPIO152	B1:SDA7		110
									
DVDD18_IORB	I2C IO	PD	AU14	CAM_I3C_SCL8		B:GPIO153	B1:SCL8		31
DVDD18_IORB	I2C IO	PD	AV15	CAM_I3C_SDA8		B:GPIO154	B1:SDA8		36
									
DVDD18_IOBR	I2C IO	PD	AT18	CAM_I3C_SCL9		B:GPIO155	B1:SCL9		20
DVDD18_IOBR	I2C IO	PD	AU18	CAM_I3C_SDA9		B:GPIO156	B1:SDA9		23
									
DVDD18_IORT2	I2C IO	PD	U4	I2C_SCL10		B:GPIO157	B1:SCL10		419
DVDD18_IORT2	I2C IO	PD	U5	I2C_SDA10		B:GPIO158	B1:SDA10		428
									
DVDD18_IORT	I2C IO	PD	V4	I2C_SCL11		B:GPIO159	B1:SCL11		441
DVDD18_IORT	I2C IO	PD	V5	I2C_SDA11		B:GPIO160	B1:SDA11		442
									
DVDD18_IORB	I2C IO	PD	AU13	I2C_SCL12		B:GPIO161	B1:SCL12	I1:UCTS2	30
DVDD18_IORB	I2C IO	PD	AV14	I2C_SDA12		B:GPIO162	B1:SDA12	O:URTS2	37
									
DVDD18_IOBR	I2C IO	PD	AU15	I2C_SCL13		B:GPIO163	B1:SCL13		42
DVDD18_IOBR	I2C IO	PD	AV16	I2C_SDA13		B:GPIO164	B1:SDA13		43
									
DVDD18_IOTM	I2C IO	PD	F9	SCP_I3C_SCL0		B:GPIO165	B1:SCP_SCL0		#N/A
DVDD18_IOTM	I2C IO	PD	G9	SCP_I3C_SDA0		B:GPIO166	B1:SCP_SDA0		#N/A
									
DVDD18_IOTM	I2C IO	PD	F10	SCP_I3C_SCL3		B:GPIO171	B1:SCP_SCL3		363
DVDD18_IOTM	I2C IO	PD	G10	SCP_I3C_SDA3		B:GPIO172	B1:SCP_SDA3		362
									
DVDD18_IOTM3	GPIO	PD	F26	DMIC_CLK		B:GPIO135	B1:SCP_SCL5	I0:MD_INT0	323
DVDD18_IOTM3	GPIO	PD	G26	DMIC_DAT		B:GPIO136	B1:SCP_SDA5	I0:MD_INT4	309
									
DVDD18_IOTL	GPIO	PD	G31	NFC_CLK_REQ	EINT84	B:GPIO84			225
									
DVDD18_IORM2	MSDC2 IO	PD	AC3	SPI0_CK	EINT46	B:GPIO46	O:SPI0_CK	O:SCP_SPI3_CK	486
DVDD18_IORM2	MSDC2 IO	PD	AC2	SPI0_CSB	EINT47	B:GPIO47	O:SPI0_CSB	O:SCP_SPI3_CS	481
DVDD18_IORM2	MSDC2 IO	PD	AD3	SPI0_MI	EINT48	B:GPIO48	B0:SPI0_MI	B0:SCP_SPI3_MI	493
DVDD18_IORM2	MSDC2 IO	PD	AD2	SPI0_MO	EINT49	B:GPIO49	B0:SPI0_MO	B0:SCP_SPI3_MO	474
									
DVDD18_IORM	GPIO	PD	AE3	SPI1_CK	EINT50	B:GPIO50	O:SPI1_CK	O:SCP_SPI2_CK	465
DVDD18_IORM	GPIO	PD	AE2	SPI1_CSB	EINT51	B:GPIO51	O:SPI1_CSB	O:SCP_SPI2_CS	466
DVDD18_IORM	GPIO	PD	AF3	SPI1_MI	EINT52	B:GPIO52	B0:SPI1_MI	B0:SCP_SPI2_MI	478
DVDD18_IORM	GPIO	PD	AF2	SPI1_MO	EINT53	B:GPIO53	B0:SPI1_MO	B0:SCP_SPI2_MO	477
									
DVDD18_IOTM2	GPIO	PD	F15	SPI2_CK	EINT11	B:GPIO11	O:SPI2_CK		349
DVDD18_IOTM2	GPIO	PD	G16	SPI2_CSB	EINT12	B:GPIO12	O:SPI2_CSB		350
DVDD18_IOTM2	GPIO	PD	H16	SPI2_MI	EINT13	B:GPIO13	B0:SPI2_MI		341
DVDD18_IOTM2	GPIO	PD	F16	SPI2_MO	EINT14	B:GPIO14	B0:SPI2_MO		348
									
DVDD18_IOTL	GPIO	PD	G29	SPI3_CK	EINT27	B:GPIO27	O:SPI3_CK		285
DVDD18_IOTL	GPIO	PD	F30	SPI3_CSB	EINT28	B:GPIO28	O:SPI3_CSB		284
DVDD18_IOTL	GPIO	PD	F31	SPI3_MI	EINT29	B:GPIO29	B0:SPI3_MI		287
DVDD18_IOTL	GPIO	PD	G30	SPI3_MO	EINT30	B:GPIO30	B0:SPI3_MO		286
									
DVDD18_IOTL	GPIO	PD	F33	SPI4_CK	EINT36	B:GPIO36	O:SPI4_CK		299
DVDD18_IOTL	GPIO	PD	G33	SPI4_CSB	EINT37	B:GPIO37	O:SPI4_CSB		296
DVDD18_IOTL	GPIO	PD	G34	SPI4_MI	EINT38	B:GPIO38	B0:SPI4_MI		298
DVDD18_IOTL	GPIO	PD	F34	SPI4_MO	EINT39	B:GPIO39	B0:SPI4_MO		297
									
DVDD18_IOTM	GPIO	PD	F6	SCP_SPI_CK	EINT54	B:GPIO54	O:SPI7_B_CK		367
DVDD18_IOTM	GPIO	PD	G6	SCP_SPI_CSB	EINT55	B:GPIO55	O:SPI7_B_CSB		366
DVDD18_IOTM	GPIO	PD	G7	SCP_SPI_MI	EINT56	B:GPIO56	B0:SPI7_B_MI		365
DVDD18_IOTM	GPIO	PD	F7	SCP_SPI_MO	EINT57	B:GPIO57	B0:SPI7_B_MO		364
MT8676平台资源汇总：6路SPI ,16路I2C,3路SCP  I2C, 2路SIM, 1路USB3.1/1路USB2.0, 4路UART口（UART2 带流控，6路PWM, 1路PCIE 3.0 , 2路SD卡，4路I2S IN/OUT(Master),1路I2S IN (Slave), 1路TDM IN/OUT(8CH),6路CSI, 2路DSI, 1路2 LANE  DP 1.4A 功能接口和89 个GPIO 口。									

## 工作表 3

IO Driving (mA)	IO power domain	IO Pad Type	Pull Init	IO Reset default mode	Pin Num	Ball name	GPIO Reset Default Mode	SCP_EINT	Debounce	MRdump	EINT	Aux Func.0	Aux Func.1	Aux Func.2	Aux Func.3	Aux Func.4	Aux Func.5	Aux Func.6	Aux Func.7	Ref. Schematic NET name	GPIO
2/4/6/8/10/12/14/16	DVDD28_SIM1	SIM IO	PD	I	=VLOOKUP(G2,[1]Netlist!$B$1:$C$5000,2,FALSE)	SIM1_SCLK	0				EINT66	B:GPIO66	O:MD1_SIM1_SCLK					I0:TSFDC_26M		SIM1_SCLK	G066
2/4/6/8/10/12/14/16	DVDD28_SIM1	SIM IO	PD	I	=VLOOKUP(G3,[1]Netlist!$B$1:$C$5000,2,FALSE)	SIM1_SRST	0				EINT67	B:GPIO67	O:MD1_SIM1_SRST	I1:HFRP_JTAG0_TCK	I1:MCUPM_JTAG_TCK	I0:APU_JTAG_TCK		O:TSFDC_SDO		SIM1_SRST	G067
2/4/6/8/10/12/14/16	DVDD28_SIM1	SIM IO	PD	I	=VLOOKUP(G4,[1]Netlist!$B$1:$C$5000,2,FALSE)	SIM1_SIO	0				EINT68	B:GPIO68	B1:MD1_SIM1_SIO	I0:HFRP_JTAG0_TRSTN	I0:MCUPM_JTAG_TRSTN	I0:APU_JTAG_TRST		O:TSFDC_FOUT		SIM1_SIO	G068
2/4/6/8/10/12/14/16	DVDD28_SIM2	SIM IO	PD	I	=VLOOKUP(G5,[1]Netlist!$B$1:$C$5000,2,FALSE)	SIM2_SCLK	0				EINT69	B:GPIO69	O:MD1_SIM2_SCLK	I1:HFRP_JTAG0_TDI	I1:MCUPM_JTAG_TDI	I1:APU_JTAG_TDI		I0:TSFDC_SCK		SIM2_SCLK	G069
2/4/6/8/10/12/14/16	DVDD28_SIM2	SIM IO	PD	I	=VLOOKUP(G6,[1]Netlist!$B$1:$C$5000,2,FALSE)	SIM2_SRST	0				EINT70	B:GPIO70	O:MD1_SIM2_SRST	B1:HFRP_JTAG0_TMS	I1:MCUPM_JTAG_TMS	B1:APU_JTAG_TMS		I0:TSFDC_SDI		SIM2_SRST	G070
2/4/6/8/10/12/14/16	DVDD28_SIM2	SIM IO	PD	I	=VLOOKUP(G7,[1]Netlist!$B$1:$C$5000,2,FALSE)	SIM2_SIO	0				EINT71	B:GPIO71	B1:MD1_SIM2_SIO	O:HFRP_JTAG0_TDO	O:MCUPM_JTAG_TDO	O:APU_JTAG_TDO		I0:TSFDC_SCF		SIM2_SIO	G071
2/4/6/8/10/12/14/16	DVDD28_MSDC1	MSDC1 IO	PD	I	=VLOOKUP(G8,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC1_CLK	0				EINT72	B:GPIO72	B0:MSDC1_CLK	O:MD1_SIM2_SCLK	I0:VPU_UDI_TCK	I0:UDI_TCK	I0:IPU_JTAG_TCK	I1:SSPM_JTAG_TCK_VCORE		MSDC1_CLK	G072
2/4/6/8/10/12/14/16	DVDD28_MSDC1	MSDC1 IO	PD	I	=VLOOKUP(G9,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC1_CMD	0				EINT73	B:GPIO73	B1:MSDC1_CMD	B1:CONN_BGF_MCU_AICE_TMSC	I0:VPU_UDI_TMS	I0:UDI_TMS	I0:IPU_JTAG_TMS	I1:SSPM_JTAG_TMS_VCORE		MSDC1_CMD	G073
2/4/6/8/10/12/14/16	DVDD28_MSDC1	MSDC1 IO	PD	I	=VLOOKUP(G10,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC1_DAT0	0				EINT74	B:GPIO74	B1:MSDC1_DAT0	O:MD1_SIM2_SRST	I0:VPU_UDI_TDI	I0:UDI_TDI_0	7	I1:SSPM_JTAG_TDI_VCORE		MSDC1_DAT0	G074
2/4/6/8/10/12/14/16	DVDD28_MSDC1	MSDC1 IO	PD	I	=VLOOKUP(G11,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC1_DAT1	0				EINT75	B:GPIO75	B1:MSDC1_DAT1	B1:MD1_SIM2_SIO	O:VPU_UDI_TDO	O:UDI_TDO_0	O:IPU_JTAG_TDO	O:SSPM_JTAG_TDO_VCORE		MSDC1_DAT1	G075
2/4/6/8/10/12/14/16	DVDD28_MSDC1	MSDC1 IO	PD	I	=VLOOKUP(G12,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC1_DAT2	0				EINT76	B:GPIO76	B1:MSDC1_DAT2	I0:CONN_BGF_MCU_AICE_TCKC	I0:VPU_UDI_NTRST	I0:UDI_NTRST	I0:IPU_JTAG_TRST	I0:SSPM_JTAG_TRSTN_VCORE	I0:CONN_WF_MCU_AICE_TCKC	MSDC1_DAT2	G076
2/4/6/8/10/12/14/16	DVDD28_MSDC1	MSDC1 IO	PD	I	=VLOOKUP(G13,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC1_DAT3	0				EINT77	B:GPIO77	B1:MSDC1_DAT3					B1:CONN_WF_MCU_AICE_TMSC		MSDC1_DAT3	G077
0.125/0.25/0.5/1	DVDD18_IOLB	I2C IO	PD	I	=VLOOKUP(G14,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SCL6	0					B:GPIO149	B1:SCL6					O:TSFDC_EN		I2C_SCL6	G149
0.125/0.25/0.5/1	DVDD18_IOLB	I2C IO	PD	I	=VLOOKUP(G15,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SDA6	0					B:GPIO150	B1:SDA6					O:TSFDC_VCO_RST		I2C_SDA6	G150
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G16,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S0_BCK	0	scp_eint[18]	Yes		EINT15	B:GPIO15	O:I2SIN0_BCK				I1:ADSP_JTAG0_TRSTN	I0:SCP_JTAG_LITTLE_TRSTN_VCORE	I0:CONN_BGF_MCU_TRST_B	I2S0_BCK	G015
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G17,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S0_LRCK	0	scp_eint[17]	Yes		EINT16	B:GPIO16	O:I2SIN0_LRCK				I0:ADSP_JTAG0_TCK	I1:SCP_JTAG_LITTLE_TCK_VCORE	I0:CONN_BGF_MCU_TCK	I2S0_LRCK	G016
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G18,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S0_DI	0	scp_eint[16]	Yes		EINT17	B:GPIO17	I0:I2SIN0_DI				I1:ADSP_JTAG0_TMS	I1:SCP_JTAG_LITTLE_TMS_VCORE	I1:CONN_BGF_MCU_TMS	I2S0_DI	G017
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G19,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S0_DO	0	scp_eint[15]	Yes		EINT18	B:GPIO18	O:I2SOUT0_DO				O:ADSP_JTAG0_TDO	O:SCP_JTAG_LITTLE_TDO_VCORE	O:CONN_BGF_MCU_TDO	I2S0_DO	G018
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G20,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S1_BCK	0	scp_eint[14]	Yes		EINT19	B:GPIO19	O:I2SIN1_BCK				I1:ADSP_JTAG0_TDI	I1:SCP_JTAG_LITTLE_TDI_VCORE	I0:CONN_BGF_MCU_TDI		G019
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G21,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S1_LRCK	0	scp_eint[13]	Yes		EINT20	B:GPIO20	O:I2SIN1_LRCK		I0:MFG_EB_JTAG_TRSTN		I1:ADSP_JTAG1_TRSTN	I0:SCP_JTAG0_TRSTN_VCORE	I0:CONN_WF_MCU_TRST_B	EINT_Smart_PA	G020
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G22,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S1_DI	0	scp_eint[12]	Yes		EINT21	B:GPIO21	I0:I2SIN1_DI		I0:MFG_EB_JTAG_TCK		I0:ADSP_JTAG1_TCK	I1:SCP_JTAG0_TCK_VCORE	I0:CONN_WF_MCU_TCK		G021
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G23,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S1_DO	0	scp_eint[11]	Yes		EINT22	B:GPIO22	O:I2SOUT1_DO		I0:MFG_EB_JTAG_TMS		I1:ADSP_JTAG1_TMS	I1:SCP_JTAG0_TMS_VCORE	I1:CONN_WF_MCU_TMS		G022
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G24,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S2_BCK	0	scp_eint[10]	Yes		EINT23	B:GPIO23	O:I2SIN2_BCK	O:I2SIN0_MCK	O:MFG_EB_JTAG_TDO	I0:DSI1_TE	O:ADSP_JTAG1_TDO	O:SCP_JTAG0_TDO_VCORE	O:CONN_WF_MCU_TDO		G023
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G25,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S2_LRCK	0	scp_eint[9]	Yes		EINT24	B:GPIO24	O:I2SIN2_LRCK	O:I2SIN1_MCK	I0:MFG_EB_JTAG_TDI	O:LCM1_RST	I1:ADSP_JTAG1_TDI	I1:SCP_JTAG0_TDI_VCORE	I0:CONN_WF_MCU_TDI		G024
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G26,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S2_DI	0	scp_eint[8]	Yes		EINT25	B:GPIO25	I0:I2SIN2_DI	O:BPI_BUS20		O:CONN_BPI_BUS20	O:ANT_SEL20				G025
2/4/6/8/10/12/14/16	DVDD18_IOLB	GPIO	PD	I	=VLOOKUP(G27,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2S2_DO	0	scp_eint[7]	Yes		EINT26	B:GPIO26	O:I2SOUT2_DO	O:BPI_BUS21	O:LCM2_RST	O:CONN_BPI_BUS21	O:ANT_SEL21				G026
2/4/6/8/10/12/14/16	DVDD18_IOLB2	SPMI IO	PD	I	=VLOOKUP(G28,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI_M_SCLK	0					B:GPIO205	O:MIPI_M_SCLK							Refer to RF SCH	G205
2/4/6/8/10/12/14/16	DVDD18_IOLB2	SPMI IO	PD	I	=VLOOKUP(G29,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI_M_SDATA	0					B:GPIO206	B0:MIPI_M_SDATA							Refer to RF SCH	G206
2/4/8/10/12/14/16	DVDD18_IOLB2	SPMI IO	PD	I	=VLOOKUP(G30,[1]Netlist!$B$1:$C$5000,2,FALSE)	MD_UCNT	1					B:GPIO203	I0:MD_UCNT_A_TGL							Refer to RF SCH	G203
2/4/8/10/12/14/16	DVDD18_IOLB2	SPMI IO	PD	I	=VLOOKUP(G31,[1]Netlist!$B$1:$C$5000,2,FALSE)	DIGRF_IRQ	0					B:GPIO204	I0:DIGRF_IRQ							Refer to RF SCH	G204
2/4/6/8/10/12/14/16	DVDD18_IOBL	SPMI IO	PD	I	=VLOOKUP(G32,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI4_D_SCLK	0				EINT113	B:GPIO113	O:MIPI4_D_SCLK	I0:DSI1_TE		O:DMIC4_CLK		O:MD_GPS_L1_BLANK		Refer to RF SCH	G113
2/4/6/8/10/12/14/16	DVDD18_IOBL	SPMI IO	PD	I	=VLOOKUP(G33,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI4_D_SDATA	0				EINT114	B:GPIO114	B0:MIPI4_D_SDATA	O:LCM1_RST		I0:DMIC4_DAT		O:MD_GPS_L5_BLANK		Refer to RF SCH	G114
2/4/6/8/10/12/14/16	DVDD18_IOBL	SPMI IO	PD	I	=VLOOKUP(G34,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI3_D_SCLK	0				EINT111	B:GPIO111	O:MIPI3_D_SCLK	O:BPI_BUS20		O:CONN_BPI_BUS20	O:ANT_SEL20			Refer to RF SCH	G111
2/4/6/8/10/12/14/16	DVDD18_IOBL	SPMI IO	PD	I	=VLOOKUP(G35,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI3_D_SDATA	0				EINT112	B:GPIO112	B0:MIPI3_D_SDATA	O:BPI_BUS21		O:CONN_BPI_BUS21	O:ANT_SEL21			Refer to RF SCH	G112
2/4/6/8/10/12/14/16	DVDD18_IOBL	SPMI IO	PD	I	=VLOOKUP(G36,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI2_D_SCLK	0				EINT109	B:GPIO109	O:MIPI2_D_SCLK	O:CONN_MIPI2_SCLK	O:DMIC1_CLK					Refer to RF SCH	G109
2/4/6/8/10/12/14/16	DVDD18_IOBL	SPMI IO	PD	I	=VLOOKUP(G37,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI2_D_SDATA	0				EINT110	B:GPIO110	B0:MIPI2_D_SDATA	B0:CONN_MIPI2_SDATA	I0:DMIC1_DAT					Refer to RF SCH	G110
2/4/6/8/10/12/14/16	DVDD18_IOBL	SPMI IO	PD	I	=VLOOKUP(G38,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI1_D_SCLK	0				EINT107	B:GPIO107	O:MIPI1_D_SCLK	O:CONN_MIPI1_SCLK	O:DMIC3_CLK					Refer to RF SCH	G107
2/4/6/8/10/12/14/16	DVDD18_IOBL	SPMI IO	PD	I	=VLOOKUP(G39,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI1_D_SDATA	0				EINT108	B:GPIO108	B0:MIPI1_D_SDATA	B0:CONN_MIPI1_SDATA	I0:DMIC3_DAT					Refer to RF SCH	G108
2/4/6/8/10/12/14/16	DVDD18_IOBL	SPMI IO	PD	I	=VLOOKUP(G40,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI0_D_SCLK	0				EINT105	B:GPIO105	O:MIPI0_D_SCLK	O:CONN_MIPI0_SCLK						Refer to RF SCH	G105
2/4/6/8/10/12/14/16	DVDD18_IOBL	SPMI IO	PD	I	=VLOOKUP(G41,[1]Netlist!$B$1:$C$5000,2,FALSE)	MIPI0_D_SDATA	0				EINT106	B:GPIO106	B0:MIPI0_D_SDATA	B0:CONN_MIPI0_SDATA						Refer to RF SCH	G106
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO		OL	=VLOOKUP(G42,[1]Netlist!$B$1:$C$5000,2,FALSE)	DISP_PWM	0					B:GPIO131	O:DISP_PWM							DISP_PWM	G131
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO		OL	=VLOOKUP(G43,[1]Netlist!$B$1:$C$5000,2,FALSE)	PERI_EN1	0				EINT64	B:GPIO64				B0:SPI5_B_MO				PERIEN_LCM_LED_EN	G064
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO		OL	=VLOOKUP(G44,[1]Netlist!$B$1:$C$5000,2,FALSE)	DISP_PWM_1	0					B:GPIO132	O:DISP_PWM1			B0:SPI5_B_MI					G132
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO		OL	=VLOOKUP(G45,[1]Netlist!$B$1:$C$5000,2,FALSE)	PERI_EN2	0				EINT63	B:GPIO63			O:BPI_BUS22	O:SPI5_B_CLK	O:I2SOUT4_DATA3	O:CONN_BPI_BUS22			G063
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO	PD	I	=VLOOKUP(G46,[1]Netlist!$B$1:$C$5000,2,FALSE)	EINT4	0	scp_eint[2]	Yes	Yes	EINT4	B:GPIO4			B0:SPI7_A_MI	O:SPI5_B_CSB	O:I2SIN4_LRCK	O:CONN_TCXOENA_REQ	O:DBG_MON_A0	EINT_CAM_PMIC1_IRQB	G004
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO		OL	=VLOOKUP(G47,[1]Netlist!$B$1:$C$5000,2,FALSE)	PERI_EN3	0				EINT62	B:GPIO62			B0:SPI7_A_MO		O:I2SOUT4_DATA0	O:WIFI_TXD	O:DBG_MON_A1	GPIO_FLASH_EN	G062
0.125/0.25/0.5/1	DVDD18_IOBM	I2C IO	PD	I	=VLOOKUP(G48,[1]Netlist!$B$1:$C$5000,2,FALSE)	I3C_SCL0	0					B:GPIO137	B1:SCL0		O:SPI7_A_CLK		O:I2SOUT4_DATA1	O:MD32_0_GPIO0	O:DBG_MON_A2		G137
0.125/0.25/0.5/1	DVDD18_IOBM	I2C IO	PD	I	=VLOOKUP(G49,[1]Netlist!$B$1:$C$5000,2,FALSE)	I3C_SDA0	0					B:GPIO138	B1:SDA0		O:SPI7_A_CSB		O:I2SOUT4_DATA2	O:MD32_1_GPIO0	O:DBG_MON_A3		G138
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO		OL	=VLOOKUP(G50,[1]Netlist!$B$1:$C$5000,2,FALSE)	PERI_EN0	0				EINT65	B:GPIO65		O:CMFLASH0		O:USB_DRVVBUS	O:I2SIN4_BCK		O:DBG_MON_A4		G065
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO	PD	I	=VLOOKUP(G51,[1]Netlist!$B$1:$C$5000,2,FALSE)	EINT5	0	scp_eint[1]	Yes	Yes	EINT5	B:GPIO5		O:CMFLASH1	B0:SPI5_A_MO	I1:IDDIG	I0:I2SIN4_DATA0		O:DBG_MON_A5	PERIEN_FLASH_TORCH	G005
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO	PD	I	=VLOOKUP(G52,[1]Netlist!$B$1:$C$5000,2,FALSE)	EINT6	0	scp_eint[0]	Yes	Yes	EINT6	B:GPIO6		O:CMFLASH2	B0:SPI5_A_MI	I0:VBUSVALID	I0:I2SIN4_DATA1		O:DBG_MON_A6	PERIEN_FLASH_STROBE	G006
0.125/0.25/0.5/1	DVDD18_IOBM	I2C IO	PD	I	=VLOOKUP(G53,[1]Netlist!$B$1:$C$5000,2,FALSE)	I3C_SCL7	0					B:GPIO151	B1:SCL7	O:CMFLASH3	O:SPI5_A_CLK		I0:I2SIN4_DATA2	I1:MD32_0_RXD	O:DBG_MON_A7		G151
0.125/0.25/0.5/1	DVDD18_IOBM	I2C IO	PD	I	=VLOOKUP(G54,[1]Netlist!$B$1:$C$5000,2,FALSE)	I3C_SDA7	0					B:GPIO152	B1:SDA7		O:SPI5_A_CSB		I0:I2SIN4_DATA3	O:MD32_0_TXD	O:DBG_MON_A8		G152
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO	PD	I	=VLOOKUP(G55,[1]Netlist!$B$1:$C$5000,2,FALSE)	JTRSTN	1					B:GPIO209	I1:JTRSTN_SEL1					I0:SPM_JTAG_TRSTN_VCORE		JTRSTN	G209
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO	PD	I	=VLOOKUP(G56,[1]Netlist!$B$1:$C$5000,2,FALSE)	JTCK	1					B:GPIO210	I0:JTCK_SEL1					I1:SPM_JTAG_TCK_VCORE		JTCK	G210
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO	PD	I	=VLOOKUP(G57,[1]Netlist!$B$1:$C$5000,2,FALSE)	JTMS	1					B:GPIO211	B1:JTMS_SEL1					I1:SPM_JTAG_TMS_VCORE		JTMS	G211
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO	PD	I	=VLOOKUP(G58,[1]Netlist!$B$1:$C$5000,2,FALSE)	JTDI	1					B:GPIO212	I1:JTDI_SEL1					I1:SPM_JTAG_TDI_VCORE		JTDI	G212
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO	PD	I	=VLOOKUP(G59,[1]Netlist!$B$1:$C$5000,2,FALSE)	JTDO	1					B:GPIO213	O:JTDO_SEL1					B1:SPM_JTAG_TDO_VCORE		JTDO	G213
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO		OH	=VLOOKUP(G60,[1]Netlist!$B$1:$C$5000,2,FALSE)	UTXD0	1					B:GPIO207	O:UTXD0	O:MD_UTXD0	O:SSPM_UTXD_AO_VCORE	O:TP_UTXD1_VCORE	O:ADSP_UTXD0	O:HFRP_UTXD1		UTXD0	G207
2/4/6/8/10/12/14/16	DVDD18_IOBM	GPIO	PU	I	=VLOOKUP(G61,[1]Netlist!$B$1:$C$5000,2,FALSE)	URXD0	1					B:GPIO208	I1:URXD0	I1:MD_URXD0	I1:SSPM_URXD_AO_VCORE	I1:TP_URXD1_VCORE	I1:ADSP_URXD0	I1:HFRP_URXD1		URXD0	G208
2/4/6/8/10/12/14/16	DVDD18_IOBM2	KPROW IO	PD	I	=VLOOKUP(G62,[1]Netlist!$B$1:$C$5000,2,FALSE)	KPROW0	0		Yes		EINT33	B:GPIO33	B1:KPROW0	O:I2SIN0_MCK	O:BPI_BUS22	O:CONN_BPI_BUS22			O:DBG_MON_A9	EINT_SD	G033
2/4/6/8/10/12/14/16	DVDD18_IOBM2	KPROW IO	PD	I	=VLOOKUP(G63,[1]Netlist!$B$1:$C$5000,2,FALSE)	KPROW1	0		Yes		EINT34	B:GPIO34	B1:KPROW1	O:I2SIN1_MCK						GPIO_U3_REDRIVER_C1	G034
2/4/6/8/10/12/14/16	DVDD18_IOBM2	KPCOL IO	PU	I	=VLOOKUP(G64,[1]Netlist!$B$1:$C$5000,2,FALSE)	KPCOL0	1		Yes		EINT32	B:GPIO32	B1:KPCOL0_VLP							KPCOL0	G032
2/4/6/8/10/12/14/16	DVDD18_IOBM2	KPCOL IO	PD	I	=VLOOKUP(G65,[1]Netlist!$B$1:$C$5000,2,FALSE)	KPCOL1	0	scp_eint[19]	Yes		EINT31	B:GPIO31	B1:KPCOL1	B0:SPI6_A_MI							G031
0.125/0.25/0.5/1	DVDD18_IOBM2	I2C IO	PD	I	=VLOOKUP(G66,[1]Netlist!$B$1:$C$5000,2,FALSE)	I3C_SCL1	0					B:GPIO139	B1:SCL1	O:SPI6_A_CLK	B1:KPCOL2	I0:DSI_TE		O:MD32_2_GPIO0	O:DBG_MON_A10		G139
0.125/0.25/0.5/1	DVDD18_IOBM2	I2C IO	PD	I	=VLOOKUP(G67,[1]Netlist!$B$1:$C$5000,2,FALSE)	I3C_SDA1	0					B:GPIO140	B1:SDA1	O:SPI6_A_CSB	B1:KPROW2	O:LCM_RST		O:MD32_3_GPIO0	O:DBG_MON_A11		G140
2/4/6/8/10/12/14/16	DVDD18_IOBM2	GPIO		OL	=VLOOKUP(G68,[1]Netlist!$B$1:$C$5000,2,FALSE)	AP_GOOD	1				EINT35	B:GPIO35	O:AP_GOOD	B0:SPI6_A_MO	O:WIFI_TXD	O:GPS_PPS	O:PMSR_SMAP	O:AGPS_SYNC			G035
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G69,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS0	0				EINT85	B:GPIO85	O:BPI_BUS0					I0:EXT_FRAME_SYNC	O:DBG_MON_A12	Refer to RF SCH	G085
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G70,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS1	0				EINT86	B:GPIO86	O:BPI_BUS1						O:DBG_MON_A13	Refer to RF SCH	G086
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G71,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS2	0				EINT87	B:GPIO87	O:BPI_BUS2						O:DBG_MON_A14	Refer to RF SCH	G087
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G72,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS3	0				EINT88	B:GPIO88	O:BPI_BUS3						O:DBG_MON_A15	Refer to RF SCH	G088
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G73,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS4	0				EINT89	B:GPIO89	O:BPI_BUS4		O:DP_RAUX_SBU1				O:DBG_MON_A16	Refer to RF SCH	G089
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G74,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS5	0				EINT90	B:GPIO90	O:BPI_BUS5		O:DP_RAUX_SBU2				O:DBG_MON_A17	Refer to RF SCH	G090
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G75,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS6	0				EINT91	B:GPIO91	O:BPI_BUS6		I0:DP_TX_HPD	O:PWM_0			O:DBG_MON_A18	Refer to RF SCH	G091
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G76,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS7	0				EINT92	B:GPIO92	O:BPI_BUS7		O:DP_OC_EN	O:PWM_1			O:DBG_MON_A19	Refer to RF SCH	G092
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G77,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS8	0				EINT93	B:GPIO93	O:BPI_BUS8	O:CONN_BPI_BUS8		O:PWM_2			O:DBG_MON_A20	Refer to RF SCH	G093
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G78,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS9	0				EINT94	B:GPIO94	O:BPI_BUS9	O:CONN_BPI_BUS9		O:PWM_3	O:AUD_DAC_26M_CLK		O:DBG_MON_A21	Refer to RF SCH	G094
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G79,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS10	0				EINT95	B:GPIO95	O:BPI_BUS10	O:CONN_BPI_BUS10			O:I2SOUT4_DATA0		O:DBG_MON_A22	Refer to RF SCH	G095
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G80,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS11	0				EINT96	B:GPIO96	O:BPI_BUS11	O:CONN_BPI_BUS11			O:I2SOUT4_DATA1		O:DBG_MON_A23	Refer to RF SCH	G096
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G81,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS12	0				EINT97	B:GPIO97	O:BPI_BUS12	O:CONN_BPI_BUS12	B0:SPI6_B_MI		O:I2SOUT4_DATA2		O:DBG_MON_A24	Refer to RF SCH	G097
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G82,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS13	0				EINT98	B:GPIO98	O:BPI_BUS13	O:CONN_BPI_BUS13	O:SPI6_B_CLK		O:I2SOUT4_DATA3		O:DBG_MON_A25	Refer to RF SCH	G098
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G83,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS14	0				EINT99	B:GPIO99	O:BPI_BUS14	O:CONN_BPI_BUS14	O:SPI6_B_CSB		O:I2SIN4_BCK		O:DBG_MON_A26	Refer to RF SCH	G099
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G84,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS15	0				EINT100	B:GPIO100	O:BPI_BUS15	O:CONN_BPI_BUS15	B0:SPI6_B_MO		I0:I2SIN4_DATA0		O:DBG_MON_A27	Refer to RF SCH	G100
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G85,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS16	0				EINT101	B:GPIO101	O:BPI_BUS16	O:CONN_BPI_BUS16	O:CLKM0		I0:I2SIN4_DATA1		O:DBG_MON_A28	Refer to RF SCH	G101
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G86,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS17	0				EINT102	B:GPIO102	O:BPI_BUS17	O:CONN_BPI_BUS17	O:CLKM1		I0:I2SIN4_DATA2		O:DBG_MON_A29	Refer to RF SCH	G102
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G87,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS18	0				EINT103	B:GPIO103	O:BPI_BUS18	O:CONN_BPI_BUS18	O:CLKM2	O:DMIC1_CLK	I0:I2SIN4_DATA3		O:DBG_MON_A30	Refer to RF SCH	G103
2/4/6/8/10/12/14/16	DVDD18_IOBM3	GPIO	PD	I	=VLOOKUP(G88,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_D_BUS19	0				EINT104	B:GPIO104	O:BPI_BUS19	O:CONN_BPI_BUS19	O:CLKM3	I0:DMIC1_DAT	O:I2SIN4_LRCK		O:DBG_MON_A31	Refer to RF SCH	G104
0.125/0.25/0.5/1	DVDD18_IOBR	I2C IO	PD	I	=VLOOKUP(G89,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_I3C_SCL9	0					B:GPIO155	B1:SCL9			I0:DP_TX_HPD	O:UDI_TDO_6	O:MFG_TSFDC_FOUT		F_CAM1_SCL9	G155
0.125/0.25/0.5/1	DVDD18_IOBR	I2C IO	PD	I	=VLOOKUP(G90,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_I3C_SDA9	0					B:GPIO156	B1:SDA9			O:DP_OC_EN	O:UDI_TDO_7	O:MFG_TSFDC_SDO		F_CAM1_SDA9	G156
2/4/6/8/10/12/14/16	DVDD18_IOBR	I2C IO	PD	I	=VLOOKUP(G91,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_CLK3	0					B:GPIO126	O:CMMCLK3			O:DP_RAUX_SBU1	I0:UDI_TDI_7	O:HFRP_URTS1		F_CAM1_CLK3	G126
2/4/6/8/10/12/14/16	DVDD18_IOBR	GPIO	PD	I	=VLOOKUP(G92,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_RST3	0				EINT118	B:GPIO118	O:PWM_3		O:CLKM3	O:DP_RAUX_SBU2	I0:UDI_TDI_3	I1:HFRP_UCTS1		F_CAM1_RST3	G118
0.125/0.25/0.5/1	DVDD18_IOBR	I2C IO	PD	I	=VLOOKUP(G93,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SCL13	0					B:GPIO163	B1:SCL13	O:CMVREF6	O:MD_UTXD0	O:ADSP_UTXD0	O:HFRP_UTXD1	O:CONN_BT_TXD	O:UTXD1		G163
0.125/0.25/0.5/1	DVDD18_IOBR	I2C IO	PD	I	=VLOOKUP(G94,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SDA13	0					B:GPIO164	B1:SDA13	O:CMVREF5	I1:MD_URXD0	I1:ADSP_URXD0	I1:HFRP_URXD1		I1:URXD1		G164
2/4/6/8/10/12/14/16	DVDD18_IOBR	I2C IO	PD	I	=VLOOKUP(G95,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_CLK7	0					B:GPIO130	O:CMMCLK7	O:ANT_SEL20	O:MD_UTXD1	O:BPI_BUS20	O:SSPM_UTXD_AO_VCORE	O:mbistreaden_trigger	O:CONN_BGF_UART0_TXD		G130
2/4/6/8/10/12/14/16	DVDD18_IOBR	GPIO	PD	I	=VLOOKUP(G96,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_RST7	0				EINT122	B:GPIO122	O:CMVREF4	O:ANT_SEL21	I1:MD_URXD1	O:BPI_BUS21	I1:SSPM_URXD_AO_VCORE	O:mbistwriteen_trigger	I1:CONN_BGF_UART0_RXD		G122
0.125/0.25/0.5/1	DVDD18_IORB	I2C IO	PD	I	=VLOOKUP(G97,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_I3C_SCL8	0					B:GPIO153	B1:SCL8	O:I2SIN1_BCK			O:UDI_TDO_4	I0:MFG_TSFDC_26M		R_CAM2_SCL8	G153
0.125/0.25/0.5/1	DVDD18_IORB	I2C IO	PD	I	=VLOOKUP(G98,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_I3C_SDA8	0					B:GPIO154	B1:SDA8	O:I2SIN1_LRCK			O:UDI_TDO_5	I0:MFG_TSFDC_SCF		R_CAM2_SDA8	G154
2/4/6/8/10/12/14/16	DVDD18_IORB	I2C IO	PD	I	=VLOOKUP(G99,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_CLK2	0					B:GPIO125	O:CMMCLK2	I0:I2SIN1_DI			I0:UDI_TDI_6			R_CAM2_CLK2	G125
2/4/6/8/10/12/14/16	DVDD18_IORB	GPIO	PD	I	=VLOOKUP(G100,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_RST2	0				EINT117	B:GPIO117		O:I2SOUT1_DO	I1:URXD2	O:CLKM2	I0:UDI_TDI_2	O:PWM_2		R_CAM2_RST2	G117
0.125/0.25/0.5/1	DVDD18_IORB	I2C IO	PD	I	=VLOOKUP(G101,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SCL12	0					B:GPIO161	B1:SCL12	O:I2SIN2_BCK	I1:UCTS2		O:CMVREF3	I0:MFG_TSFDC_SCK			G161
0.125/0.25/0.5/1	DVDD18_IORB	I2C IO	PD	I	=VLOOKUP(G102,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SDA12	0					B:GPIO162	B1:SDA12	O:I2SIN2_LRCK	O:URTS2		O:CMVREF2	I0:MFG_TSFDC_SDI			G162
2/4/6/8/10/12/14/16	DVDD18_IORB	I2C IO	PD	I	=VLOOKUP(G103,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_CLK6	0					B:GPIO129	O:CMMCLK6	I0:I2SIN2_DI			O:CMVREF1				G129
2/4/6/8/10/12/14/16	DVDD18_IORB	GPIO	PD	I	=VLOOKUP(G104,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_RST6	0				EINT121	B:GPIO121		O:I2SOUT2_DO	O:UTXD2	O:PWM_2	O:CMVREF0				G121
2/4/6/8/10/12/14/16	DVDD18_IORM	GPIO	PD	I	=VLOOKUP(G105,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI1_CK	0				EINT50	B:GPIO50	O:SPI1_CLK	O:SCP_SPI2_CK	B1:SCP_SCL6		O:TP_URTS1_VLP			SPI1_CK	G050
2/4/6/8/10/12/14/16	DVDD18_IORM	GPIO	PD	I	=VLOOKUP(G106,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI1_CSB	0				EINT51	B:GPIO51	O:SPI1_CSB	O:SCP_SPI2_CS	B1:SCP_SDA6		I1:TP_UCTS1_VLP			SPI1_CSB	G051
2/4/6/8/10/12/14/16	DVDD18_IORM	GPIO	PD	I	=VLOOKUP(G107,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI1_MI	0				EINT52	B:GPIO52	B0:SPI1_MI	B0:SCP_SPI2_MI						SPI1_MI	G052
2/4/6/8/10/12/14/16	DVDD18_IORM	GPIO	PD	I	=VLOOKUP(G108,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI1_MO	0				EINT53	B:GPIO53	B0:SPI1_MO	B0:SCP_SPI2_MO						SPI1_MO	G053
2/4/6/8/10/12/14/16	DVDD18_IORM	GPIO	PD	I	=VLOOKUP(G109,[1]Netlist!$B$1:$C$5000,2,FALSE)	GPIO_FPS_RST	0					B:GPIO134	B0:TP_GPIO2_AO	I0:SRCLKENAI0	O:SPMI_M_TRIG_FLAG					GPIO_FPS_RST	G134
2/4/6/8/10/12/14/16	DVDD18_IORM	GPIO	PD	I	=VLOOKUP(G110,[1]Netlist!$B$1:$C$5000,2,FALSE)	EINT_FPS	0	scp_eint[20]	Yes	Yes	EINT8	B:GPIO8		O:CLKM1	O:SPMI_P_TRIG_FLAG	O:BPI_BUS23	O:CONN_BPI_BUS23			EINT_FPS	G008
	DVDD18_IOMC2	SPMI IO		OL	=VLOOKUP(G111,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPMI_M_SCL	1					B:GPIO218	B0:SPMI_M_SCL							SPMI_M_SCL	G218
	DVDD18_IOMC2	SPMI IO	NP	I	=VLOOKUP(G112,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPMI_M_SDA	1					B:GPIO219	B0:SPMI_M_SDA							SPMI_M_SDA	G219
	DVDD18_IOMC2	SPMI IO		OL	=VLOOKUP(G113,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPMI_P_SCL	1					B:GPIO220	B0:SPMI_P_SCL							SPMI_P_SCL	G220
	DVDD18_IOMC2	SPMI IO	NP	I	=VLOOKUP(G114,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPMI_P_SDA	1					B:GPIO221	B0:SPMI_P_SDA							SPMI_P_SDA	G221
2/4/6/8/10/12/14/16	DVDD18_IOMC2	MSDC2 IO	PD	I	=VLOOKUP(G115,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC2_CLK	0				EINT78	B:GPIO78	B0:MSDC2_CLK	O:I2SIN6_0_BCK	B0:TP_GPIO11_AO	I0:CONN_BGF_DSP_L1_JCK	I1:SCP_JTAG0_TCK_VLP	I1:SSPM_JTAG_TCK_VLP	I0:IO_JTAG_TCK		G078
2/4/6/8/10/12/14/16	DVDD18_IOMC2	MSDC2 IO	PD	I	=VLOOKUP(G116,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC2_CMD	0				EINT79	B:GPIO79	B1:MSDC2_CMD	O:I2SIN6_0_LRCK	B0:TP_GPIO12_AO	I1:CONN_BGF_DSP_L1_JMS	I1:SCP_JTAG0_TMS_VLP	I1:SSPM_JTAG_TMS_VLP	B1:IO_JTAG_TMS		G079
2/4/6/8/10/12/14/16	DVDD18_IOMC2	MSDC2 IO	PD	I	=VLOOKUP(G117,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC2_DAT0	0				EINT80	B:GPIO80	B1:MSDC2_DAT0	I0:I2SIN6_0_DI	B0:TP_GPIO13_AO	I0:CONN_BGF_DSP_L1_JDI	I1:SCP_JTAG0_TDI_VLP	I1:SSPM_JTAG_TDI_VLP	I1:IO_JTAG_TDI		G080
2/4/6/8/10/12/14/16	DVDD18_IOMC2	MSDC2 IO	PD	I	=VLOOKUP(G118,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC2_DAT1	0				EINT81	B:GPIO81	B1:MSDC2_DAT1	B1:SCP_SCL6	B0:TP_GPIO14_AO	O:CONN_BGF_DSP_L1_JDO	O:SCP_JTAG0_TDO_VLP	O:SSPM_JTAG_TDO_VLP	O:IO_JTAG_TDO		G081
2/4/6/8/10/12/14/16	DVDD18_IOMC2	MSDC2 IO	PD	I	=VLOOKUP(G119,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC2_DAT2	0				EINT82	B:GPIO82	B1:MSDC2_DAT2	B1:SCP_SDA6	B0:TP_GPIO15_AO	O:CONN_BGF_DSP_L1_JINTP	I0:SCP_JTAG0_TRSTN_VLP	I0:SSPM_JTAG_TRSTN_VLP	I0:IO_JTAG_TRSTN		G082
2/4/6/8/10/12/14/16	DVDD18_IOMC2	MSDC2 IO	PD	I	=VLOOKUP(G120,[1]Netlist!$B$1:$C$5000,2,FALSE)	MSDC2_DAT3	0				EINT83	B:GPIO83	B1:MSDC2_DAT3	O:I2SOUT6_0_DO	O:PWM_VLP	I0:MD_INT3	B0:TP_GPIO4_AO	O:SRCLKENA1	I0:SRCLKENAI0	MD_INT	G083
2/4/6/8/10/12/14/16	DVDD18_IORM2	MSDC2 IO	PD	I	=VLOOKUP(G121,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI0_CK	0				EINT46	B:GPIO46	O:SPI0_CLK	O:SCP_SPI3_CK	B0:TP_GPIO11_AO						G046
2/4/6/8/10/12/14/16	DVDD18_IORM2	MSDC2 IO	PD	I	=VLOOKUP(G122,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI0_CSB	0				EINT47	B:GPIO47	O:SPI0_CSB	O:SCP_SPI3_CS	B0:TP_GPIO12_AO						G047
2/4/6/8/10/12/14/16	DVDD18_IORM2	MSDC2 IO	PD	I	=VLOOKUP(G123,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI0_MI	0				EINT48	B:GPIO48	B0:SPI0_MI	B0:SCP_SPI3_MI	B0:TP_GPIO13_AO						G048
2/4/6/8/10/12/14/16	DVDD18_IORM2	MSDC2 IO	PD	I	=VLOOKUP(G124,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI0_MO	0				EINT49	B:GPIO49	B0:SPI0_MO	B0:SCP_SPI3_MO	B0:TP_GPIO14_AO						G049
2/4/6/8/10/12/14/16	DVDD18_IORM2	MSDC2 IO	PD	I	=VLOOKUP(G125,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI0_HOLD	0				EINT44	B:GPIO44	B0:SPI0_HOLD	I0:MD_INT3	B0:TP_GPIO15_AO			O:SRCLKENA1			G044
2/4/6/8/10/12/14/16	DVDD18_IORM2	MSDC2 IO	PD	I	=VLOOKUP(G126,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI0_WP	0				EINT45	B:GPIO45	B0:SPI0_WP	I0:MD_INT4	O:PWM_VLP			O:SRCLKENA1			G045
0.125/0.25/0.5/1	DVDD18_IORT	I2C IO	PD	I	=VLOOKUP(G127,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_I3C_SCL4	0					B:GPIO145	B1:SCL4				O:UDI_TDO_2	O:MFG_TSFDC_TSSEL2		R_CAM1_SCL4	G145
0.125/0.25/0.5/1	DVDD18_IORT	I2C IO	PD	I	=VLOOKUP(G128,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_I3C_SDA4	0					B:GPIO146	B1:SDA4				O:UDI_TDO_3	O:MFG_TSFDC_TSSEL1		R_CAM1_SDA4	G146
2/4/6/8/10/12/14/16	DVDD18_IORT	I2C IO	PD	I	=VLOOKUP(G129,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_CLK1	0					B:GPIO124	O:CMMCLK1				I0:UDI_TDI_5			R_CAM1_CLK1	G124
2/4/6/8/10/12/14/16	DVDD18_IORT	GPIO	PD	I	=VLOOKUP(G130,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_RST1	0				EINT116	B:GPIO116	O:PWM_1	O:CLKM1	O:BPI_BUS15	O:ANT_SEL15	I0:UDI_TDI_1			R_CAM1_RST1	G116
0.125/0.25/0.5/1	DVDD18_IORT	I2C IO	PD	I	=VLOOKUP(G131,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SCL11	0					B:GPIO159	B1:SCL11	O:I2SIN0_BCK	O:BPI_BUS16	O:ANT_SEL16	O:CMVREF4	O:MFG_TSFDC_TSSEL0			G159
0.125/0.25/0.5/1	DVDD18_IORT	I2C IO	PD	I	=VLOOKUP(G132,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SDA11	0					B:GPIO160	B1:SDA11	O:I2SIN0_LRCK	O:BPI_BUS17	O:ANT_SEL17	O:CMVREF5	O:MFG_TSFDC_RCK_SELB			G160
2/4/6/8/10/12/14/16	DVDD18_IORT	I2C IO	PD	I	=VLOOKUP(G133,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_CLK5	0					B:GPIO128	O:CMMCLK5	I0:I2SIN0_DI	O:BPI_BUS18	O:ANT_SEL18	O:CMVREF6				G128
2/4/6/8/10/12/14/16	DVDD18_IORT	GPIO	PD	I	=VLOOKUP(G134,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_RST5	0				EINT120	B:GPIO120	O:PWM_1	O:I2SOUT0_DO	O:BPI_BUS19	O:ANT_SEL19	O:CMVREF7				G120
0.125/0.25/0.5/1	DVDD18_IORT2	I2C IO	PD	I	=VLOOKUP(G135,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_I3C_SCL2	0					B:GPIO141	B1:SCL2	B1:SCP_SCL4		B0:TP_GPIO5_AO				R_CAM3_SCL2	G141
0.125/0.25/0.5/1	DVDD18_IORT2	I2C IO	PD	I	=VLOOKUP(G136,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_I3C_SDA2	0					B:GPIO142	B1:SDA2	B1:SCP_SDA4		B0:TP_GPIO6_AO	O:UDI_TDO_1			R_CAM3_SDA2	G142
2/4/6/8/10/12/14/16	DVDD18_IORT2	I2C IO	PD	I	=VLOOKUP(G137,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_CLK0	0					B:GPIO123	O:CMMCLK0	B0:TP_GPIO4_AO		I0:SRCLKENAI1	I0:UDI_TDI_4				G123
2/4/6/8/10/12/14/16	DVDD18_IORT2	GPIO	PD	I	=VLOOKUP(G138,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_RST0	0				EINT115	B:GPIO115			O:BPI_BUS12	O:CLKM0	O:PWM_0			R_CAM3_RST0	G115
0.125/0.25/0.5/1	DVDD18_IORT2	I2C IO	PD	I	=VLOOKUP(G139,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SCL10	0					B:GPIO157	B1:SCL10		I1:URXD2	O:BPI_BUS13	O:CMVREF0	O:MFG_TSFDC_EN			G157
0.125/0.25/0.5/1	DVDD18_IORT2	I2C IO	PD	I	=VLOOKUP(G140,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SDA10	0					B:GPIO158	B1:SDA10		I1:UCTS2	O:BPI_BUS14	O:CMVREF1	O:MFG_TSFDC_VCO_RST			G158
2/4/6/8/10/12/14/16	DVDD18_IORT2	I2C IO	PD	I	=VLOOKUP(G141,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_CLK4	0					B:GPIO127	O:CMMCLK4	O:ANT_SEL20	O:URTS2	O:BPI_BUS20	O:CMVREF2			R_CAM3_CLK4	G127
2/4/6/8/10/12/14/16	DVDD18_IORT2	GPIO	PD	I	=VLOOKUP(G142,[1]Netlist!$B$1:$C$5000,2,FALSE)	CAM_RST4	0				EINT119	B:GPIO119	O:PWM_0	O:ANT_SEL21	O:UTXD2	O:BPI_BUS21	O:CMVREF3	O:CONN_TCXOENA_REQ			G119
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G143,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL0	0					B:GPIO173	O:ANT_SEL0	O:PCIE_PERSTN		O:BPI_BUS0	O:CMVREF0				G173
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G144,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL1	0					B:GPIO174	O:ANT_SEL1	B1:PCIE_WAKEN	B0:TP_GPIO11_AO						G174
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G145,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL2	0					B:GPIO175	O:ANT_SEL2	B1:PCIE_CLKREQN	B0:TP_GPIO12_AO						G175
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G146,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL3	0					B:GPIO176	O:ANT_SEL3	O:TP_UTXD_CONSYS_VLP	I1:TP_URXD_CONSYS_VLP	O:CONN_BGF_DSP_L5_JDO	O:SCP_JTAG_LITTLE_TDO_VLP	B1:SPM_JTAG_TDO_VLP			G176
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G147,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL4	0					B:GPIO177	O:ANT_SEL4	I1:TP_URXD_CONSYS_VLP	O:TP_UTXD_CONSYS_VLP	O:CONN_BGF_DSP_L5_JINTP	I0:SCP_JTAG_LITTLE_TRSTN_VLP	I0:SPM_JTAG_TRSTN_VLP			G177
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G148,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL5	0					B:GPIO178	O:ANT_SEL5	O:PRE_ANT_TRIG		I0:CONN_BGF_DSP_L5_JCK	I1:SCP_JTAG_LITTLE_TCK_VLP	I1:SPM_JTAG_TCK_VLP			G178
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G149,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL6	0					B:GPIO179	O:ANT_SEL6	I0:CONN_VFE_REQ		I1:CONN_BGF_DSP_L5_JMS	I1:SCP_JTAG_LITTLE_TMS_VLP	I1:SPM_JTAG_TMS_VLP			G179
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G150,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL7	0					B:GPIO180	O:ANT_SEL7	I1:URXD3	I1:UARTHUB_UART_RX	I0:CONN_BGF_DSP_L5_JDI	I1:SCP_JTAG_LITTLE_TDI_VLP	I1:SPM_JTAG_TDI_VLP			G180
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G151,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL8	0					B:GPIO181	O:ANT_SEL8	O:UTXD3	O:UARTHUB_UART_TX	O:BPI_BUS8	O:CMVREF1				G181
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G152,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL9	0					B:GPIO182	O:ANT_SEL9	O:PTA_TXD	I1:PTA_RXD	O:BPI_BUS9	O:CMVREF2	I1:MD32_1_RXD			G182
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G153,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL10	0					B:GPIO183	O:ANT_SEL10	I1:PTA_RXD	O:PTA_TXD	O:BPI_BUS10	O:CMVREF3	O:MD32_1_TXD			G183
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G154,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL11	0					B:GPIO184	O:ANT_SEL11	O:I2SIN6_0_BCK	I0:PTA_EXT_FREQ	O:BPI_BUS11	O:CMVREF4	O:CLKM0			G184
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G155,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL12	0					B:GPIO185	O:ANT_SEL12	O:I2SIN6_0_LRCK	I0:PTA_EXT_ACT	O:BPI_BUS12	O:CMVREF5	O:CLKM1			G185
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G156,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL13	0					B:GPIO186	O:ANT_SEL13	I0:I2SIN6_0_DI	I0:PTA_EXT_PRI	O:BPI_BUS13	O:CMVREF6	O:CLKM2			G186
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G157,[1]Netlist!$B$1:$C$5000,2,FALSE)	ANT_SEL14	0					B:GPIO187	O:ANT_SEL14	O:I2SOUT6_0_DO	O:PTA_EXT_WLAN_ACT	O:BPI_BUS14	O:CMVREF7	O:CLKM3			G187
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G158,[1]Netlist!$B$1:$C$5000,2,FALSE)	GPS_L1_ELNA_EN	0					B:GPIO190	O:GPS_L1_ELNA_EN							GPS_L1_ELNA_EN	G190
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G159,[1]Netlist!$B$1:$C$5000,2,FALSE)	GPS_L5_ELNA_EN	0					B:GPIO191	O:GPS_L5_ELNA_EN							GPS_L5_ELNA_EN	G191
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G160,[1]Netlist!$B$1:$C$5000,2,FALSE)	BPI_WAKEUP_PMIC	0					B:GPIO188		O:BPI_BUS23	O:CONN_BPI_BUS23						G188
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G161,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_PMIC_EN	0					B:GPIO189				O:LCM2_RST					G189
2/4/6/8/10/12/14/16	DVDD18_IORT3	GPIO	PD	I	=VLOOKUP(G162,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_HRST_B	0					B:GPIO194	O:CONN_HRST_B							CONN_HRST_B	G194
2/4/6/8/10/12/14/16	DVDD18_IORT4	MSDC2 IO	PD	I	=VLOOKUP(G163,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_WF_CTRL0	0					B:GPIO195	O:CONN_WF_CTRL0					O:TP_UTXD1_VCORE		CONN_WF_CTRL0	G195
2/4/6/8/10/12/14/16	DVDD18_IORT4	MSDC2 IO	PD	I	=VLOOKUP(G164,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_WF_CTRL1	0					B:GPIO196	B0:CONN_WF_CTRL1					I1:TP_URXD1_VCORE		CONN_WF_CTRL1	G196
2/4/6/8/10/12/14/16	DVDD18_IORT4	MSDC2 IO	PD	I	=VLOOKUP(G165,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_WF_CTRL2	0					B:GPIO197	B0:CONN_WF_CTRL2					O:TP_UTXD_CONSYS_VCORE		CONN_WF_CTRL2	G197
2/4/6/8/10/12/14/16	DVDD18_IORT4	MSDC2 IO	PD	I	=VLOOKUP(G166,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_WF_CTRL3	0					B:GPIO198	B0:CONN_WF_CTRL3					I1:TP_URXD_CONSYS_VCORE		CONN_WF_CTRL3	G198
2/4/6/8/10/12/14/16	DVDD18_IORT4	MSDC2 IO	PD	I	=VLOOKUP(G167,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_WF_CTRL4	0					B:GPIO199	B0:CONN_WF_CTRL4					O:TP_URTS1_VCORE		CONN_WF_CTRL4	G199
2/4/6/8/10/12/14/16	DVDD18_IORT4	MSDC2 IO	PD	I	=VLOOKUP(G168,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_WB_PTA	0					B:GPIO200	B0:CONN_WB_PTA					I1:TP_UCTS1_VCORE		CONN_WB_PTA	G200
2/4/6/8/10/12/14/16	DVDD18_IORT4	MSDC2 IO	PD	I	=VLOOKUP(G169,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_BT_CLK	0					B:GPIO201	B0:CONN_BT_CLK	I1:UCTS3						CONN_BT_CLK	G201
2/4/6/8/10/12/14/16	DVDD18_IORT4	MSDC2 IO	PD	I	=VLOOKUP(G170,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_BT_DATA	0					B:GPIO202	B0:CONN_BT_DATA	O:URTS3						CONN_BT_DATA	G202
2/4/6/8/10/12/14/16	DVDD18_IORT4	MSDC2 IO	PD	I	=VLOOKUP(G171,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_TOP_CLK	0					B:GPIO192	O:CONN_TOP_CLK							CONN_TOP_CLK	G192
2/4/6/8/10/12/14/16	DVDD18_IORT4	MSDC2 IO	PD	I	=VLOOKUP(G172,[1]Netlist!$B$1:$C$5000,2,FALSE)	CONN_TOP_DATA	0					B:GPIO193	B0:CONN_TOP_DATA							CONN_TOP_DATA	G193
2/4/6/8/10/12/14/16	DVDD18_IOTM	I2C IO	PD	I	=VLOOKUP(G173,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_I3C_SCL2	0					B:GPIO169	B1:SCP_SCL2	O:TP_UTXD1_VLP	O:MD_UTXD0	O:SSPM_UTXD_AO_VLP	I0:MD_INT1_C2K_UIM0_HOT_PLUG	O:MD_MCIF_UTXD0	O:UTXD1		G169
2/4/6/8/10/12/14/16	DVDD18_IOTM	I2C IO	PD	I	=VLOOKUP(G174,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_I3C_SDA2	0					B:GPIO170	B1:SCP_SDA2	I1:TP_URXD1_VLP	I1:MD_URXD0	I1:SSPM_URXD_AO_VLP	I0:MD_INT2_C2K_UIM1_HOT_PLUG	I1:MD_MCIF_URXD0	I1:URXD1		G170
2/4/6/8/10/12/14/16	DVDD18_IOTM	GPIO	PD	I	=VLOOKUP(G175,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_SPI_CK	0				EINT54	B:GPIO54	O:SCP_SPI1_CK	O:SPI7_B_CLK			I0:MD_INT0		O:DBG_MON_B28	SCP_SPI_CK	G054
2/4/6/8/10/12/14/16	DVDD18_IOTM	GPIO	PD	I	=VLOOKUP(G176,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_SPI_CSB	0				EINT55	B:GPIO55	O:SCP_SPI1_CS	O:SPI7_B_CSB			I0:MD_INT2_C2K_UIM1_HOT_PLUG		O:DBG_MON_B29	SCP_SPI_CSB	G055
2/4/6/8/10/12/14/16	DVDD18_IOTM	GPIO	PD	I	=VLOOKUP(G177,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_SPI_MI	0				EINT56	B:GPIO56	B0:SCP_SPI1_MI	B0:SPI7_B_MI		O:SRCLKENA1	I0:MD_INT3		O:DBG_MON_B30	SCP_SPI_MI	G056
2/4/6/8/10/12/14/16	DVDD18_IOTM	GPIO	PD	I	=VLOOKUP(G178,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_SPI_MO	0				EINT57	B:GPIO57	B0:SCP_SPI1_MO	B0:SPI7_B_MO			I0:MD_INT4		O:DBG_MON_B31	SCP_SPI_MO	G057
2/4/6/8/10/12/14/16	DVDD18_IOTM	GPIO	PD	I	=VLOOKUP(G179,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_EINT2	0	scp_eint[29]	Yes	Yes	EINT2	B:GPIO2	O:GPS_L1_ELNA_EN	O:CMFLASH0	O:FMI2S_MCK				O:DBG_MON_B18	SCP_EINT_A_GYRO1	G002
2/4/6/8/10/12/14/16	DVDD18_IOTM	GPIO	PD	I	=VLOOKUP(G180,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_EINT3	0	scp_eint[28]	Yes	Yes	EINT3	B:GPIO3	O:GPS_L5_ELNA_EN	O:CMFLASH3	B0:FMI2S_BCK				O:DBG_MON_B19	SCP_EINT_ALSPS	G003
2/4/6/8/10/12/14/16	DVDD18_IOTM	I2C IO	PD	I	=VLOOKUP(G181,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_I3C_SCL0	0					B:GPIO165	B1:SCP_SCL0			I0:MD_INT1_C2K_UIM0_HOT_PLUG			O:DBG_MON_B20	SCP_I3C_SDA0	G165
2/4/6/8/10/12/14/16	DVDD18_IOTM	I2C IO	PD	I	=VLOOKUP(G182,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_I3C_SDA0	0					B:GPIO166	B1:SCP_SDA0			I0:MD_INT2_C2K_UIM1_HOT_PLUG	O:SRCLKENA1		O:DBG_MON_B27	SCP_I3C_SCL0	G166
2/4/6/8/10/12/14/16	DVDD18_IOTM	GPIO	PD	I	=VLOOKUP(G183,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_EINT0	0	scp_eint[31]	Yes	Yes	EINT0	B:GPIO0			B0:FMI2S_LRCK			O:TSFDC_TSSEL2	O:DBG_MON_B25	(Reserved for HW strap )	G000
2/4/6/8/10/12/14/16	DVDD18_IOTM	GPIO	PD	I	=VLOOKUP(G184,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_EINT1	0	scp_eint[30]	Yes	Yes	EINT1	B:GPIO1	B0:TP_GPIO1_AO	I0:DSI2_TE_VLP	I0:FMI2S_DI			O:TSFDC_TSSEL1	O:DBG_MON_B26		G001
2/4/6/8/10/12/14/16	DVDD18_IOTM	I2C IO	PD	I	=VLOOKUP(G185,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_I3C_SCL3	0					B:GPIO171	B1:SCP_SCL3	O:SCP_SPI0_CK	B0:TP_GPIO13_AO				O:DBG_MON_B16	SCP_I3C_SCL3	G171
2/4/6/8/10/12/14/16	DVDD18_IOTM	I2C IO	PD	I	=VLOOKUP(G186,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_I3C_SDA3	0					B:GPIO172	B1:SCP_SDA3	O:SCP_SPI0_CS	B0:TP_GPIO14_AO				O:DBG_MON_B17	SCP_I3C_SDA3	G172
2/4/6/8/10/12/14/16	DVDD18_IOTM	GPIO	PD	I	=VLOOKUP(G187,[1]Netlist!$B$1:$C$5000,2,FALSE)	INT_SIM1	0				EINT58	B:GPIO58	I0:MD_INT1_C2K_UIM0_HOT_PLUG	B0:SCP_SPI0_MO	I0:SRCLKENAI0		B0:TP_GPIO5_AO		O:DBG_MON_B23	INT_SIM1	G058
2/4/6/8/10/12/14/16	DVDD18_IOTM	GPIO	PD	I	=VLOOKUP(G188,[1]Netlist!$B$1:$C$5000,2,FALSE)	INT_SIM2	0				EINT59	B:GPIO59	I0:MD_INT2_C2K_UIM1_HOT_PLUG	B0:SCP_SPI0_MI	I0:SRCLKENAI0		B0:TP_GPIO6_AO	O:SRCLKENA1	O:DBG_MON_B24	INT_SIM2	G059
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G189,[1]Netlist!$B$1:$C$5000,2,FALSE)	DSI_TE	0				EINT43	B:GPIO43	I0:DSI_TE						O:DBG_MON_B6	DSI_TE	G043
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G190,[1]Netlist!$B$1:$C$5000,2,FALSE)	LCM_RST	0				EINT41	B:GPIO41	O:LCM_RST						O:DBG_MON_B7	LCM_RST	G041
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G191,[1]Netlist!$B$1:$C$5000,2,FALSE)	GPIO_CTP0_RST	0				EINT60	B:GPIO60	B0:TP_GPIO0_AO					I0:SRCLKENAI0	O:DBG_MON_B0	GPIO_CTP_RST	G060
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G192,[1]Netlist!$B$1:$C$5000,2,FALSE)	EINT_CTP0	0	scp_eint[26]	Yes		EINT9	B:GPIO9		O:CLKM2					O:DBG_MON_B1	EINT_CTP	G009
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G193,[1]Netlist!$B$1:$C$5000,2,FALSE)	DSI_TE_AUX	0				EINT42	B:GPIO42	I0:DSI1_TE	O:GPS_L1_ELNA_EN	O:DMIC3_CLK			O:CMFLASH1	O:DBG_MON_B8		G042
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G194,[1]Netlist!$B$1:$C$5000,2,FALSE)	LCM_RST_AUX	0				EINT40	B:GPIO40	O:LCM1_RST	O:GPS_L5_ELNA_EN	I0:DMIC3_DAT	O:ANT_SEL15	O:BPI_BUS15	O:CMFLASH2	O:DBG_MON_B9		G040
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G195,[1]Netlist!$B$1:$C$5000,2,FALSE)	GPIO_CTP1_RST	0				EINT61	B:GPIO61			O:DMIC4_CLK				O:DBG_MON_B10		G061
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G196,[1]Netlist!$B$1:$C$5000,2,FALSE)	EINT_CTP1	0	scp_eint[25]	Yes	Yes	EINT10	B:GPIO10		O:CLKM3	I0:DMIC4_DAT	O:ANT_SEL17	O:BPI_BUS17		O:DBG_MON_B11		G010
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G197,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI2_CK	0	scp_eint[24]	Yes	Yes	EINT11	B:GPIO11	O:SPI2_CLK			O:ANT_SEL18	O:BPI_BUS18	I1:MD_UCTS0	O:DBG_MON_B12	SPI2_CK	G011
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G198,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI2_CSB	0	scp_eint[23]	Yes	Yes	EINT12	B:GPIO12	O:SPI2_CSB			O:ANT_SEL19	O:BPI_BUS19	O:MD_URTS0	O:DBG_MON_B13	SPI2_CSB	G012
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G199,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI2_MI	0	scp_eint[22]	Yes	Yes	EINT13	B:GPIO13	B0:SPI2_MI			O:ANT_SEL20	O:BPI_BUS20	I1:MD_UCTS1	O:DBG_MON_B14	SPI2_MI	G013
2/4/6/8/10/12/14/16	DVDD18_IOTM2	GPIO	PD	I	=VLOOKUP(G200,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI2_MO	0	scp_eint[21]	Yes	Yes	EINT14	B:GPIO14	B0:SPI2_MO			O:ANT_SEL21	O:BPI_BUS21	O:MD_URTS1	O:DBG_MON_B15	SPI2_MO	G014
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO		OH	=VLOOKUP(G201,[1]Netlist!$B$1:$C$5000,2,FALSE)	SRCLKENA0	1					B:GPIO214	O:SRCLKENA0							SRCLKENA0	G214
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G202,[1]Netlist!$B$1:$C$5000,2,FALSE)	SCP_VREQ_VAO	0					B:GPIO215	O:SCP_VREQ_VAO							SCP_VREQ_VAO	G215
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO		OL	=VLOOKUP(G203,[1]Netlist!$B$1:$C$5000,2,FALSE)	WATCHDOG	1					B:GPIO216	O:WATCHDOG							WATCHDOG	G216
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G204,[1]Netlist!$B$1:$C$5000,2,FALSE)	X32K_IN	1					B:GPIO217	I0:RTC32K_CK							RTC32K_1V8_0	G217
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G205,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_CLK_MOSI	0					B:GPIO222	O:AUD_CLK_MOSI		O:AUD_CLK_MOSI					AUD_CLK_MOSI	G222
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G206,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_SYNC_MOSI	0					B:GPIO223	O:AUD_SYNC_MOSI							AUD_SYNC_MOSI	G223
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G207,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_DAT_MOSI0	0					B:GPIO224	O:AUD_DAT_MOSI0		O:AUD_DAT_MOSI0					AUD_DAT_MOSI0	G224
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G208,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_DAT_MOSI1	0					B:GPIO225	O:AUD_DAT_MOSI1		O:AUD_DAT_MOSI1					AUD_DAT_MOSI1	G225
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G209,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_DAT_MOSI2	0					B:GPIO226	O:AUD_DAT_MOSI2							AUD_DAT_MOSI2	G226
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G210,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_NLE_MOSI0	0					B:GPIO227	O:AUD_NLE_MOSI0	I0:AUD_SYNC_MISO						AUD_NLE_MOSI0	G227
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G211,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_NLE_MOSI1	0					B:GPIO228	O:AUD_NLE_MOSI1	I0:AUD_CLK_MISO						AUD_NLE_MOSI1	G228
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G212,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_DAT_MISO0	0					B:GPIO229	I0:AUD_DAT_MISO0	I0:VOW_DAT_MISO	I0:AUD_DAT_MISO0					AUD_DAT_MISO0	G229
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G213,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_DAT_MISO1	0					B:GPIO230	I0:AUD_DAT_MISO1	I0:VOW_CLK_MISO	I0:AUD_CLK_MISO				O:DBG_MON_B21	AUD_DAT_MISO1	G230
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G214,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_DAT_MISO2	0					B:GPIO231	I0:AUD_DAT_MISO2		I0:AUD_DAT_MISO1				O:DBG_MON_B22	AUD_DAT_MISO2	G231
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO		OL	=VLOOKUP(G215,[1]Netlist!$B$1:$C$5000,2,FALSE)	PERIEN_CHG_ENB	0					B:GPIO133	B0:TP_GPIO3_AO							PERIEN_CHG_ENB	G133
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G216,[1]Netlist!$B$1:$C$5000,2,FALSE)	EINT_CHG_IRQB	0	scp_eint[27]	Yes		EINT7	B:GPIO7		O:CLKM0						EINT_CHG_IRQB	G007
0.125/0.25/0.5/1	DVDD18_IOTM3	I2C IO	PD	I	=VLOOKUP(G217,[1]Netlist!$B$1:$C$5000,2,FALSE)	CHG_I2C_SCL5	0					B:GPIO147	B1:SCL5	B1:SCP_SCL5						CHG_I2C_SCL5	G147
0.125/0.25/0.5/1	DVDD18_IOTM3	I2C IO	PD	I	=VLOOKUP(G218,[1]Netlist!$B$1:$C$5000,2,FALSE)	CHG_I2C_SDA5	0					B:GPIO148	B1:SDA5	B1:SCP_SDA5						CHG_I2C_SDA5	G148
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G219,[1]Netlist!$B$1:$C$5000,2,FALSE)	DMIC_CLK	0					B:GPIO135	O:SCP_DMIC_CLK	B1:SCP_SCL5	O:DMIC_CLK	I0:DSI1_TE	I0:MD_INT0	B0:TP_GPIO7_AO	O:DBG_MON_B2	DMIC_CLK	G135
2/4/6/8/10/12/14/16	DVDD18_IOTM3	GPIO	PD	I	=VLOOKUP(G220,[1]Netlist!$B$1:$C$5000,2,FALSE)	DMIC_DAT	0					B:GPIO136	I0:SCP_DMIC_DAT	B1:SCP_SDA5	I0:DMIC_DAT	O:LCM1_RST	I0:MD_INT4	B0:TP_GPIO8_AO	O:DBG_MON_B3	DMIC_DAT	G136
2/4/6/8/10/12/14/16	DVDD18_IOTM3	I2C IO	PD	I	=VLOOKUP(G221,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_I2C_SCL	0					B:GPIO167	B1:SCP_SCL1		O:DMIC1_CLK	B0:TP_GPIO9_AO			O:DBG_MON_B4		G167
2/4/6/8/10/12/14/16	DVDD18_IOTM3	I2C IO	PD	I	=VLOOKUP(G222,[1]Netlist!$B$1:$C$5000,2,FALSE)	AUD_I2C_SDA	0					B:GPIO168	B1:SCP_SDA1	O:LCM2_RST	I0:DMIC1_DAT	B0:TP_GPIO10_AO			O:DBG_MON_B5		G168
0.125/0.25/0.5/1	DVDD18_IOTL	I2C IO	PD	I	=VLOOKUP(G223,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SCL3	0					B:GPIO143	B1:SCL3			I1:UFS_MPHY_SCL		O:TSFDC_TSSEL0		I2C_SCL3	G143
0.125/0.25/0.5/1	DVDD18_IOTL	I2C IO	PD	I	=VLOOKUP(G224,[1]Netlist!$B$1:$C$5000,2,FALSE)	I2C_SDA3	0					B:GPIO144	B1:SDA3			B1:UFS_MPHY_SDA		O:TSFDC_RCK_SELB		I2C_SDA3	G144
2/4/6/8/10/12/14/16	DVDD18_IOTL	GPIO	PD	I	=VLOOKUP(G225,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI3_CK	0	scp_eint[6]	Yes		EINT27	B:GPIO27	O:SPI3_CLK		O:FMI2S_MCK	O:CMVREF0			I0:DAP_SONIC_SWCK	SPI3_CK	G027
2/4/6/8/10/12/14/16	DVDD18_IOTL	GPIO	PD	I	=VLOOKUP(G226,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI3_CSB	0	scp_eint[5]	Yes		EINT28	B:GPIO28	O:SPI3_CSB		B0:FMI2S_BCK	O:CMVREF1			B1:DAP_SONIC_SWD	SPI3_CSB	G028
2/4/6/8/10/12/14/16	DVDD18_IOTL	GPIO	PD	I	=VLOOKUP(G227,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI3_MI	0	scp_eint[4]	Yes		EINT29	B:GPIO29	B0:SPI3_MI		B0:FMI2S_LRCK	O:CMVREF2			I0:DAP_MD32_SWCK	SPI3_MI	G029
2/4/6/8/10/12/14/16	DVDD18_IOTL	GPIO	PD	I	=VLOOKUP(G228,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI3_MO	0	scp_eint[3]	Yes		EINT30	B:GPIO30	B0:SPI3_MO		I0:FMI2S_DI	O:CMVREF3			B1:DAP_MD32_SWD	SPI3_MO	G030
2/4/6/8/10/12/14/16	DVDD18_IOTL	GPIO	PD	I	=VLOOKUP(G229,[1]Netlist!$B$1:$C$5000,2,FALSE)	NFC_CLK_REQ	0				EINT84	B:GPIO84	I0:SRCLKENAI0	O:PWM_VLP	I0:SRCLKENAI1					NFC_SRCLKENAI0	G084
2/4/6/8/10/12/14/16	DVDD18_IOTL	GPIO	PD	I	=VLOOKUP(G230,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI4_CK	0				EINT36	B:GPIO36	O:SPI4_CLK	O:CMFLASH0	I0:DP_TX_HPD	O:CMVREF4	I1:IDDIG	I1:MD32_3_RXD		GPIO_NFC_RSTB	G036
2/4/6/8/10/12/14/16	DVDD18_IOTL	GPIO	PD	I	=VLOOKUP(G231,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI4_CSB	0				EINT37	B:GPIO37	O:SPI4_CSB	O:CMFLASH1	O:DP_OC_EN	O:CMVREF5	O:USB_DRVVBUS	O:MD32_3_TXD		GPIO_NFC_IRQ	G037
2/4/6/8/10/12/14/16	DVDD18_IOTL	GPIO	PD	I	=VLOOKUP(G232,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI4_MI	0				EINT38	B:GPIO38	B0:SPI4_MI	O:CMFLASH2	O:DP_RAUX_SBU1	O:CMVREF6	I0:VBUSVALID	I1:MD32_2_RXD		EINT_NFC_SE	G038
2/4/6/8/10/12/14/16	DVDD18_IOTL	GPIO	PD	I	=VLOOKUP(G233,[1]Netlist!$B$1:$C$5000,2,FALSE)	SPI4_MO	0				EINT39	B:GPIO39	B0:SPI4_MO	O:CMFLASH3	O:DP_RAUX_SBU2	O:CMVREF7		O:MD32_2_TXD		GPIO_NFC_SE_PWR_REQ	G039

## 工作表 4

					
					
I2C IO					
Paramters	Descriptions	Min	Typ	Max	UNIT
Rpd	Input pull-down resistance	40	75	190	Kohm
Rpd	Input pull-down resistance	3	5	7	Kohm
Rpu	Input pull-up resistance	40	75	190	Kohm
Rpu	Input pull-up resistance	8	10	15	Kohm
Rpu	Input pull-up resistance	3.5	5	7	Kohm
Rpu	Input pull-up resistance	3	4	5.5	Kohm
Rpu	Input pull-up resistance	2.5	3	4.5	Kohm
Rpu	Input pull-up resistance	1.5	2	2.7	Kohm
Rpu	Input pull-up resistance	1	1.5	2	Kohm
Rpu	Input pull-up resistance	0.75	1	1.5	Kohm
					
					
KPROW IO					
Paramters	Descriptions	Min	Typ	Max	UNIT
Rpd	Input pull-down resistance	40	75	190	Kohm
Rpu	Input pull-up resistance	40	75	190	Kohm
Rpd	Input pull-down resistance	0.8	1.6	2	Kohm
Rpu	Input pull-up resistance	0.8	1.6	2	Kohm
					
					
KPCOL IO					
Paramters	Descriptions	Min	Typ	Max	UNIT
Rpd	Input pull-down resistance	40	75	190	Kohm
Rpu	Input pull-up resistance	40	75	190	Kohm
Rpd	Input pull-down resistance	200	260	400	Kohm
Rpu	Input pull-up resistance	200	260	400	Kohm
					
					
MSDC1 IO					
Paramters	Descriptions	Min	Typ	Max	UNIT
Rpd	Input pull-down resistance	5	7.5	10	Kohm
Rpu	Input pull-up resistance	5	7.5	10	Kohm
Rpd	Input pull-down resistance	10	50	100	Kohm
Rpu	Input pull-up resistance	10	50	100	Kohm
					
					
MSDC2 IO					
Paramters	Descriptions	Min	Typ	Max	UNIT
Rpd	Input pull-down resistance	5	7.5	10	Kohm
Rpu	Input pull-up resistance	5	7.5	10	Kohm
Rpd	Input pull-down resistance	10	50	100	Kohm
Rpu	Input pull-up resistance	10	50	100	Kohm
					
					
SIM IO					
Paramters	Descriptions	Min	Typ	Max	UNIT
Rpd	Input pull-down resistance	40	75	190	Kohm
Rpu	Input pull-up resistance	4	5	6	Kohm
Rpu	Input pull-up resistance	10	20	40	Kohm
					
					
GPIO/SPMI IO					
Paramters	Descriptions	Min	Typ	Max	UNIT
Rpd	Input pull-down resistance	40	75	190	Kohm
Rpu	Input pull-up resistance	40	75	190	Kohm


---
# SRC0343 P39.A03.H5核心板设计指南20251023.pdf

来源：P39.A03.H5核心板设计指南20251023.pdf

SHA-256：f5eea9add6e06af829c8f59a623ea9f667473577f36e38a6160abf0e6f2c287e

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0343.html)

## PDF物理页 1

P39.A03.H5 核心板设计指南
一，概述
P39 核心板是一款全面兼容 2G&3G&4G&5G（移动、联通、电信）网
络，LGA 封装 580PIN，模块大小 59.5*59.5*5.4mm，智能座舱功能接
口丰富、可靠性高、工作模式灵活的无线通信产品。
二，产品示意图
三，产品功能与技术参数
2.1 平 台： MT8676
2.2 主 频： 8 核 2.9GHz
2.3 内 存 ： 标 配 LP5X 12G+UFS3.1 128GB 最 大 24GB LP5X
(分离式 IC，可灵活选择配置)

## PDF物理页 2

2.4 网络支持：国际版(可选配)
GSM(2G) : ■B2 ■B3 ■B5 ■B8
WCDMA : ■B1 ■B2 ■B4 ■B5 ■B6 ■B8 ■B19
EVDO : ■BC0
FDD LTE(4G): ■B1■B2■B3■B4■B5■B7■B8■B12■B12■
B13■B14■B17■B18■B19■B20■B25■B26■B28■B66■B71
TDD LTE(4G): ■B34 ■B38 ■B39 ■B40 ■B41
FDD NRSA: ■N1■N2 ■N3■N5■ N7 ■N8■N20 ■N25■N28
■N66■N71■N75■N76
TDD NRSA: ■N38■N40■N41■N77■N78■N79
2.5 GNSS： 支持 L1&L5。GPS(QZSS)/Glonass/Beidou/Galileo
2.6 蓝牙： BT 5.3
2.7 WIFI： WiFi 6E，支持 2.4G/5G/6GHz 频段，支持 DBDC，支 持
802.11a/b/g/n/ac/ax 技 术 ， 兼 容
802.11 d/e/h/i/j/k/r/v 技术
2.8 SIM 卡: 双 SIM 卡
2.9 T 卡 : 支持容量可达 2TB, 支持热插拔
2.10 UART 口：支持 4 路，UART0 用做 DEBUG，其它口用于外设计通讯。
2.11 I2C 口 ：可支持 16 路 I2C,其中可配置 6 路 I3C 和 2 路 SCP I3C。
2.12 SPI 口 ：可支持 6 路 SPI 口。
2.13 USB3.1/2.0： 1 路 USB2.0 接口，支持 device/host；
1 路 USB3.1 接口，支持 device/host；
2.14 支持 6 路 CSI: MIPI 摄像头接口
2.15 支持 2 路 DSI: MIPI 屏接口
2.16 支持 1 路 DP: DP1.4 屏接口
2.17 音频接口：支持 5 路 I2S ,4 路 I2S(IN+OUT),1 路 I2S(IN);
支持 1 路 TDM (IN+OUT)，8+8CH;

## PDF物理页 3

四，产品接口定义
参考产品接口定义表！
五，接口设计指南
5.1 SIM 卡设计
核心板上未添加 SIM 滤波电路，底板设计时需添加 TVS 电路和滤波电
容，注意 TVS 的选型选择结电容值小的，非插拔类型 SIM 卡可不贴
TVS,整个信号电路上电容《=45PF (CLK,DATA 和 RST)，建议预留滤电容，
选结电容 15pF 的 ESD。
当客户使用 E-sim 卡时，注意底板做 SIM 卡座的兼容设计，方便 CTA
入网测试及白卡调试。
当客户使用 SIM 卡座时，如果需要 SIM 卡支持热插拔功能，必须选择
INT_SIM1/GPIO59_INT_SIM2 中断资源，核心板的第 498PIN/375PIN。
详见：MT8676_GPIO_Application_Spec 表格。
原理设计和布局走线时注意以下几点：
1，SIM Power, Reserve 1uF capacitor on the power rails of SIM with
shunt connection and this capacitor should be placed close to SIM
connector.
2，SIO/SCLK/SRST no need reserve Pull up resistor to VSIM.
3，SIM CLK needs well ground shielding, SIMIO and SIMCLK must be
not parallel with power trace that is closed layer or same layer

## PDF物理页 4

5.2 T 卡设计
MT8676 支持 SD2.0 和 SD3.0, 支持热插拔，核心板上 T 卡电路未加保
护电路，在底板设计时请加滤波和 TVS 电路，CLK 预留串位和并位以
防止 EMC 问题，ESD 器件靠近 T 卡座摆放。
原理设计和布局走线时注意以下几点：
1，power for SD 2.0 sd card: the 200mA is necessary. 1uF cap for the power is necessary.
2，power for SD 3.0 SDR50 and DDR50 card: the 400mA is necessary. 2.2uF cap for the power is
necessary.
3，power for SD 3.0 SDR104 card: the 800mA is necessary. 4.7uF cap for the power is necessary.
4，Reverse damping resistor position to fine tune the SD card AC timing
5，Signals needs well ground shielding
6, |Clock – Data/CMD| ≦ 7620 um
7, VMCH_PMU Trace width (W)≧ 200 um, Cap Value≧ 0.1 uF
5.3 USB 电路

## PDF物理页 5

MT8676 支持 USB2.0 和 USB3.0,都可做 Device 或 Host 模式。核心板
上未增加滤波和 TVS 保护电路，建议客户在设计底板电路,USB 线路上
VUBS 可加滤波电容与防浪涌器件，DP/DM 留 TVS 管防 ESD 损坏，注
意 TVS 的选型选择结电容值小的（0.5pF)。
MT8676 USB2.0 的 Device 和 Host 模式切换是通过
USB_IDDIG(GPIO5_IDDIG)脚来实现。USB_IDDIG 默认高电平，此时为
Device 模式，当检测到 USB_ID 为低时，切换为 Host 模式。MT8676
自身只能同时存在一同模式。
DM/DP 以及 VUSB(5V)请增加测试点，方便模块端调试。
下载时时序如下，如果用充电 IC，注意充电 IC 的 USB 通道要在 SOC
端 USB 握手协议前完成：
4V
VSYS: 0V
5V
VBUS: 0V
蓝--黄(非固定值，可同时)
Soc hand shake 持续时间 1S
SOC hand shake 时间：
（黄-绿）soc 启动到开始 hand shake 时间 0.5S
充电 IC D+D-通道完成：
充电 IC 的初始化，即 D+D-通道完成要在 soc hand shake 启动之前完成
原理设计和布局走线时注意以下几点：
1，Differential 90-ohm characteristic impedance of USB DP/DM
differential pair must be implemented. USB DP/DM differential pair shall
be routed surround with ground plane.
2，The USB DP/DM length mismatch must not exceed 50 mil。
3，Connector DP/DM pin and Test point should dig 2 Layer. The Via

## PDF物理页 6

Should not exceed 6 via.
4，Both SSUSB_TXP and SSUSB_TXN should be connected to 0.1uF AC
coupling capacitor before USB 3.0 connector
5，Differential 90-ohm characteristic impedance of SSUSB TX+/TX- and
RX+/RX- differential pair must be implemented. SSUSB TX+/TX- and
RX+/RX- differential pair shall be routed surround with ground plane.
6，| SSUSB_TXN- SSUSB_TXP| <= 5mil; | SSUSB_RXN- SSUSB_RXP | <=
5mil
7，为保证眼图质量，走线满足 MTK 平台要求。
模块上长度: USB2.0=1695mil
模块上长度: USB3.1=1812mil
PCB Layout
Recommendation Item
Switch FPC
Case1 NO NO 2.2mil≦Trace width; TA1 should ≦8000mil
Case2 YES NO 2.2mil≦Trace width; TB1+TB2≦ 5000 mil, Switch Ron≦ 5ohm,
Switch Cload≦5pF
Case3 NO YES 2.2mil≦; TC1+TC3 ≦ 4000 mil, TC2 ≦ 4000mil

## PDF物理页 7

Case4 YES YES 2.2mil≦Trace width, TD1+TD2+TD4 ≦ 2000 mil, TD3 ≦
4000mil, Switch Ron≦5ohm, Switch Cload≦5pF
5.4 I2C/I3C 电路
I2C/I3C 的电压域为 1.8V，设计时注意 device 的电压匹配。MT8676 核
心板有 16 个 I2C(含 I3C)接口供客户使用，I2C 最大速率 3.4MHz，I3C
最大速率 12.5MHz。模块上的 I2C/I3C 总线没有加上拉电阻，为增加
I2C/I3C 驱动能力和串接电阻端接，可在底板上增加上拉电阻。建议
如下，可根据 I2C 波形实际测试情况进行调整：
1， R. 4.7KΩ for standard mode and fast mode ; 2.2KΩ for fast mode

## PDF物理页 8

plus and high speed mode.
2，Signals need well ground shielding
5.5 MIPI CSI 接口
MT8676 支持 6 路 CSI 输入，都支持 4Lane D-PHY，最大能支持到
6.5Gbps/Lane，核心板最大可支持 19 个 CAMERA。
原理设计和布局走线时注意以下几点：
1，MIPI D-PHY CSI 4.5GbpsMIPI D-PHY CSI 4.5Gbps＜DR≤6.5Gbps 时，
建议 MIPI 总长 ≤ 4inch;
模块上长度：CSI0=1750mil
模块上长度：CSI1=1390mil
模块上长度：CSI2=1700mil
模块上长度：CSI3=900mil
模块上长度：CSI4=1095mil
模块上长度：CSI5=1180mil
2，The differential signal (P/N skew) difference in length of CSI differential
signal controlled within 6 mil.
3，The pair-to-pair trace difference in length of MIPI CSI differential pairs
controlled within 100mil. 3xW for inner layer, > 4xW for top/bottom layer,
or ground isolation between MIPl pairs.

## PDF物理页 9

4，Differential impedance 100ohm (or single-end impedance 50ohm)。
5 ， MIPI CSI differential pair needs well ground shielding and try to
minimize via number in PCB design
5.6 UART 口
MT8676 支持 4 路 UART 口：其中 UART0 用于模块的 DEBUG 用，不用
于外接设备，UART1—UART3 可外接设备,UART 口的工作电压域都是
1.8V，使用时请注意电压匹配情况。设计时注意接口静电的保护，TVS
的选型选择结电容值小的（0.5pF） 。Layout 时需要注意包地。
5.7 SPI 口
MT8676 核心板有引出 6 路 SPI 口（只能做主模式）给底板外部设部
使用，AP_SPI 口最大速度可到 52M bit/s，SCP_SPI 口（只有 SPI7）
最大速度可到 43M bit/s，设计时注意接口的静电防护，TVS 的选型

## PDF物理页 10

选择结电容值小的(0.5pF)。注：当不用此功能时可复用为 GPIO 口。
6 路 SPI 的电压域都是 1.8V，使用时注意电压匹配。
Layout 注意事项：
-All traces of SPI bus should be well-shielded by nearby ground traces in
the same layer, surrounded by ground traces in n-1 and n+1 layers, and
close to each others.
-All traces of SPI bus should be far away from noise sources such as buck
switching node, etc.
-The max. length of SPl bus between the SoC and devices should be
shorter than 6 inches. (Consider 6inches => 1 ns).
- The length gap of signal traces (CK, CS, MOSI, MISO) should be less than
2 mm (max. length to min.length).
-The trace gaps between the SoC to device A and SoC to device B should
be within 2 inches. lf the gap is over 2 inches, reserve resistors in SPI bus.
(For one SPI to multiple devices)

## PDF物理页 11

5.8 I2S 和 TDM 接口
MT8676 模块支持 4 路 I2S IN+OUT 和 I2S IN，所有的 I2S 接口电压域都
为 1.8V，电路设计时注意电压匹配。MT8676 支持 1 路
TDMIN+OUT(8+8ch)，多单声道及双声道合并通过 TDM 输入输出。
注：MT8676 的只有 1 路 I2S 支持从模式，4 路 I2S 和 TDM 都只支持
主模式。Layout 时需要注意包地。
5.9 MIPI DSI 接口
MT8676 核心板支持 2 路 MIPI DSI，每路 4Lane，每 Lane（D-PHY） 最
大速率 2.5Gbps，1 路 DSI 最大可支持 10Gbps 传输速率。 通过外部
的 FPGA 进行转换，支持多屏显示。
原理设计和布局走线时注意以下几点：

## PDF物理页 12

1，EMI filter / Common mode Choke for MIPI IF cap loading need to
under 2pF。
建议 MIPI DSI Total length < 6inch.
模块上长度：DSI0=1550mil
模块上长度：DSI1=1790mil
3，The characteristic impedance of MIPI DSI differential pair must be
implemented in 100-ohm/differential.
4，MIPI DSI differential pair needs well ground shielding and try to
minimize via number in PCB design.
5，MIPI DSI differential pair if could not GND Shielding，Pair-to-Pair data
spacing need reserve 3W trace width ； Clock pair needs well GND
shielding.
6，The pair-to-pair trace difference in length of MIPI DSI differential
pairs in the main board must be controlled within 100mil.
7，The differential signal (P/N) difference in length of DSI differential
signal in the main board must be controlled within 25 mil.
5.10 DP 接口
MT8676 核心板支持 1 路 DP1.4 2lane, 能拓展到 4lane(shared

## PDF物理页 13

with USB3.1)，每 lane 最大速率 8.1Gbps，最大可以支持 8K 分辩率屏
原理设计和布局走线注意点跟 USB3.1 的要求一样，请参考 USB3.1 的
设计要求。另外 DP 总长度 Total length < 4inch，模块上长度：
DP=1812mil，差分阻抗要求 90-ohm。
Layout notice：
-Place the DC blocking capacitors for DP main link close to DP pin out
orDP connector/DP&USB mux.
-Place the DC blocking capacitors for DP AUXP/DP AUXN close to DP
pinout or DP connector/DP&USB mux.
-Place DP&USB mux near the USB Type-C connecter. Follow
vendor'slayout rules.
-Diferential 90-ohm characteristic impedance of differential pair must
beimplemented. The differential pair should be surrounded by the
ground plane.
SSUB TXP P1/SUSB TXN P1/SSUSB TXP P2SSUSB TXN P2/SSUSB RXP P1/SSUSB
RXNP1/SUB RXP P2/SSUSB RXN P2,DP AUXP/DP AUXN
-The total length of DP main link from DP host to DP connector/bridge lC
should be shorter than 4,000 mil.
SSUB TXP P1/SSUSB TXN P1SSUSB TXP P2/SSUSB TXN P2/SSUSB RXP P1/SSUSB
RXNP1/SSUSB RXP P2/SSUSB RXN P2DP AUXP/DP AUXN
-Keep the length tolerance 5 mil for intra-pair, and 30 mil for inter-pairs.
SSUSB TXP P1/SSUSB TXN P1/SSUSB TXP P2/SSUSB TXN P2/SSUSB RXP P1/SSUSB
RXNP1/SSUSB RXP P2/SSUSB RXN P2
-Keep the DP AUXP/DP AUXN length tolerance 20 mil for intra-pair.

## PDF物理页 14

-To maintain a continuous impedance, it is recommended
reservingkeep-out areas for via pairs when PCB traces change layers. It is
suggested using less than 2 vias per layer change.
SSUSB TXP P1/SSUSB TXN P1SSUSB TXP P2SSUSB TXN P2SSUSB RXP P1/SSUSB
RXNP1/SSUSB RXP P2/SSUSB RXN P2,DP AUXP/DP AUXN
To ensure continuous impedance, it is recommended reserving
keep-outareas on at least the first inner layer of the meta beneath serial
components.
SSUB TXP P1/SSUSB _TXN P1/SSUSB TXP P2/SSUSB TXN P2/SSUSB RXP P1SSUSB
RXNP1SSUSB RXP P2/SSUSB RXN P2,DP AUXP/DP AUXN
Avoid test points and stubs.
5.11 PCIE 接口
MT8676 核心板支持 1 路 PCIE Gen3，1lane，使用时注意差分对串接
100nf/220nf 电容，通过 MIC/PHY 芯片可以转换成车载以太网
1000Base-T1 接口。
PCIE_PERSTN(pin369)/PCIE_WAKE(pin360)/CLKREQN(pin358)口电压是
1.8V，若连接到 3.3V 的设备上，注意要添加电平转换电路。
PCIE 原理设计和布局走线时注意以下几点：

## PDF物理页 15

1，串接的电容建议靠近 TX 端摆放,差分时钟需要 50 欧姆下拉的匹
配 电阻；
2，差分阻抗控制在 85-ohm；
3，差分对内(P/N)走线间距建议小于 5mil，差分对走线符合 3W 规则，
均需要包地打孔，差分对间(lane-lane)的线长差距建议小于 10mil，整
体的总线长度 Total length 控制在 5inch 以内(含底板/FPC)；
模块上长度：PCIE0=1165mil
PCle Port0 layout for Short Reach Setting (Default SW Setting):
-Total trace = PCB trace. Follow the rules listed below.
-Differential pairs are wel-shielded by GND and GND via (adjacent and
up/down layers).
-Route the differential pair straight and symmetrically on the same layer.
The RC total loss should be better than -8 dB@8 GHz for PCle Gen4
(including main board and connector).
-The bal-to-ball total loss should be better than -13 dB@8 GHz for
PCleGen4 (RC chip to EP chip).
Note: The total length depends on the insertion loss of PCB material.


## PDF物理页 16

5.12，开机键(PWRKEY)与复位键(RST)
MT8676 核心板开机键和复位键通过连接底板实现。
开机有两种方式：1，PWRKEY 为系统开机键，底板无需接上拉，低
有效，保持 3S 时间。2，模块的第 505 PIN（VUSB_5V_IN）为持续高
电平 5V。需要底板开机时序如下：
VBAT
POWER_KEY
拉低 3-5S，建议 3S
SYSRSTB 为系统复位键(第 312PIN)，低有效(要求时间大于 512ms)。
当 MCU 检测到模块死机，复位 SOC 系统。
KPCOL0(GPIO32,第 58PIN)在设计时注意,为加快开机速度，请加 4.7K
上拉到 vio18_pmu。同时预留 MCU 控制或拨动开关，当此脚为 0 时，

## PDF物理页 17

模块进入强制下载模式。
AP GOOD 为 SOC 状态检测脚，当 BOOTROM 正常跳转到 pre-loader
或下载代理执行（即软件可以接管），BOOTROM 在跳转之前使
AP_GOOD 为高，证明 AP 状态 OK，SOC 状态正常。
AP GOOD is defined as "when BOOTROM can normally iump
intopre-loader or download the agent execution (i.e., software can
takeover), BOOTROM makes AP GOOD high before jumping.
5.13 无线接口
MT8676 核心板包含了 5G 天线，GPS 天线，BT/WIFI Ipex 的底部焊盘
接口，天线接口都靠近板边，方便客户出线连接及调试。客户的底板
在 FARK 座子处需要预留 TVS 管的位置，ESD 器件的结电容 Cj 要求
小于 0.3PF。
5G，GPS 天线，BT/WIFI 天线布局时注意远离干扰源，如电源，高速
信号，晶体等，阻抗要求均为 50-ohm。

## PDF物理页 18

各个天线口建议底板预留天线检测电路，避免做天线相关应用时 有
天线失效的情况.
5.14 其它注意事项
1，MT8676 中所有 SPI，I2C，UART，I2S，GPIO，EINT，TDM 口电压
域都是 1.8v，请注意电压匹配。
2，模块的 USB 要工作时（包括下载，ADB 调试，校准），底板要给
模块的第 505 PIN（VBUS）供电 5V。

## PDF物理页 19

3，模块工作要求电压（3.4--4.6V），推荐用 4V，由底板提供，务必
选用重载和轻载效率都高（90—93%），电流大于 10A 的 BUCK。底
板留 TVS 器件和稳压管,做好 ESD/EOS 等防护。
4，模块板上自带 G-SENSOR，当底板要求 G-SENSOR 功能时，Interrupt
pin of MEMS sensor must be assign to EINT[0:12] 。SENSOR 推荐型号：
BMI323/ICM-42607/SMI230，供电 VDD=2.8V，IOVDD=1.8V，如果用 I2C
通讯口的 SENSOR，建议使用 SCP_I2C0/3 这两路的其中一路，以提
高 设备休眠状态下响应速度。
5，下载情况说明：
1），单独模块下载掌锐公司有专用的下载和校准夹具
2），模块贴在底板上需要下载时：VBAT=4V, VUSB_5V_IN=5V，同时，
USB_ID 为高，DP/DM 需连上，客户可针对自已底板设计夹具。
3），整机下载时，USB_ID 脚做开关控制高或（或手动控制，或通过
MCU 控制），同时建议 KPCOL0(GPIO32，第 58PIN)预留开关（或手动
控制，或通过 MCU 控制，当此为脚为 0 时，模块进入强制下载模式)。
如果是通过 MCU 控制方式，客户可通过特定的组合键方向通知 MCU
要进行相应的下载控制（比如同时按两个方控键大于某个时间）。
4）为避免后续我们烧录客户软件时出现不同的 STR 休眠唤醒 脚，
导致工装治具无法烧录或失效，影响生产效率，我们同步兼容了 各
个 STR/休眠唤醒脚，请大家只在下面几个 GPIO 口选择做为 SOC 的

## PDF物理页 20

休眠唤醒脚，通常是指 SOC 被唤醒的 PIN 脚，如 MCU 通知 SOC
唤醒 脚等，默认状态也建议如下：
96 PIN EINT6_ACC 低有效唤醒
73 PIN GPIO98 高有效唤醒
83 PIN GPIO94 高有效唤醒
100 PIN GPIO65 高有效唤醒
82 PIN GPI0111 高有效唤醒
67 PIN GPIO97 低有效唤醒
6，J-TAG ----MT8676 平台的 J-TAG 调试时默认 SCP_VREQ_VAO 为 L，
为 AP JTAG；也预留了 12K 电阻（R1306）接到高电平，同时会用到如
下接口资源。客户有调试需求的需要在底板上增加测试点。
JTMS----GPIO211----核心板 90 PIN
JTCK-----GPIO210----核心板 91PIN

## PDF物理页 21

JTDI------GPIO212----核心板 85PIN
JTDO-----GPIO213----核心板 97 PIN
JTRSTN—GPIO209---核心板 84PIN
7，专用口及 Boot trapping 口使用说明：
外接 AUDIO CODEC 的专用脚为 191，318，319，324，325，327，
328，329，330，331，337，338 PIN，若没用到 AUDIO CODEC 芯片时，
专用脚建议都悬空 NC，特别是 PIN328 和 PIN329，在核心板内部是有
Boot trapping 配置的，非必要尽量优先选择其他 IO 口替代，也不要
做上下拉配置。


## PDF物理页 22

345 PIN 脚 EINT10_CTP1 为 ramdump/full dump 专用功能口，系统
变砖 后 debug。建议连接测试点或按键，低有效，建议默认上拉。
若一直 被拉低会一直进入 aee 模式，系统会一直重启。
PIN219 在核心板内部是有 Boot trapping 配置的，除了做 I2S 功能，
非 必要尽量优先选择其他 IO 口替代，也不要做上下拉配置。
8，P39 核心板整体功耗大热量高，最大能达 20~25W 左右（取决于
loading），所以在底板设计时请充分考虑使用风冷或水冷等散热快的
方式，避免热保护影响性能，寿命或损坏芯片，必要时可安排热仿真
等，详细功耗信息请参考《P39 平台 IC 热仿真数据》表格。

## PDF物理页 23

六，模块尺寸图：
59.5*59.5*5.4MM
七，修改说明：
初版发布


---
# SRC0344 P39.A03.H5高速信号要求list_20241016.xlsx

来源：P39.A03.H5高速信号要求list_20241016.xlsx

SHA-256：666907b963f2ebd259a8a84fc4e9d3d45c4c4297a7c6ecd02fdaa34e3b5ce2f3

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0344.html)

单元格原值与公式文本按行提取；格式、合并单元格、图形及公式计算结果以原工作簿为准。

## 工作表 1

模块PIN	对应MT8676芯片PIN	信号名称	阻抗(oh)	模组走线长度（mil）	设计指南长度	长度误差（mil）	总长度要求	instertion loss	备注
AY2	64	CSI0A_RCP	差分100	1742.5	1743mil	±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
BA1	65	CSI0A_RCN	差分100	1742.5		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AW3	74	CSI0A_RDN0	差分100	1745.5		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AW2	75	CSI0A_RDP0	差分100	1745.5		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
BB2	86	CSI0B_RDN1	差分100	1745.1		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
BA2	87	CSI0B_RDP1	差分100	1745.1		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AV2	76	CSI0A_RDP2	差分100	1743.8		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AW1	77	CSI0A_RDN2	差分100	1743.8		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AY3	88	CSI0B_RDP3	差分100	1743.2		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
BA3	89	CSI0B_RDN3	差分100	1743.2		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
									
AV4	40	CSI1A_RCP	差分100	1377.4	1378mil	±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AW4	41	CSI1A_RCN	差分100	1377.4		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AU4	38	CSI1A_RDN0	差分100	1375.2		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AT4	39	CSI1A_RDP0	差分100	1375.2		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AV5	50	CSI1B_RDN1	差分100	1379.7		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AU5	51	CSI1B_RDP1	差分100	1379.7		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AT3	28	CSI1A_RDP2	差分100	1376.2		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AU3	29	CSI1A_RDN2	差分100	1376.2		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AT5	52	CSI1B_RDP3	差分100	1382.3		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AT6	53	CSI1B_RDN3	差分100	1382.3		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
									
AN3	5	CSI2A_RCP	差分100	1694.5	1692mil	±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AN4	6	CSI2A_RCN	差分100	1694.5		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AN6	14	CSI2A_RDP0	差分100	1694.2		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AN5	15	CSI2A_RDN0	差分100	1694.2		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AP5	2	CSI2B_RDN1	差分100	1691.4		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AP6	3	CSI2B_RDP1	差分100	1691.4		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AM5	7	CSI2A_RDN2	差分100	1693.9		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AM6	8	CSI2A_RDP2	差分100	1693.9		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AR5	16	CSI2B_RDN3	差分100	1692.5		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AR6	17	CSI2B_RDP3	差分100	1692.5		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
									
AR3	482	CSI3A_RCN	差分100	896.8	892mil	±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AR2	483	CSI3A_RCP	差分100	896.8		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AP2	472	CSI3A_RDP0	差分100	891.3		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AP3	473	CSI3A_RDN0	差分100	891.3		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AT1	484	CSI3B_RDP1	差分100	887.4		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AT2	485	CSI3B_RDN1	差分100	887.4		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AN1	496	CSI3A_RDP2	差分100	893.3		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AN2	497	CSI3A_RDN2	差分100	893.3		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AU2	494	CSI3B_RDN3	差分100	889.7		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AU1	495	CSI3B_RDP3	差分100	889.7		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
									
AJ4	462	CSI4A_RCN	差分100	1096	1092mil	±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AJ5	463	CSI4A_RCP	差分100	1096		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AJ6	448	CSI4A_RDN0	差分100	1091.3		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AH6	449	CSI4A_RDP0	差分100	1091.3		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AJ7	458	CSI4B_RDP1	差分100	1091.6		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AK7	459	CSI4B_RDN1	差分100	1091.6		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AG5	456	CSI4A_RDP2	差分100	1093		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AG6	457	CSI4A_RDN2	差分100	1093		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AL6	460	CSI4B_RDN3	差分100	1094.4		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AL7	461	CSI4B_RDP3	差分100	1094.4		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
									
AK2	444	CSI5A_RCP	差分100	1165.6	1168mil	±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AK1	445	CSI5A_RCN	差分100	1165.6		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AK3	436	CSI5A_RDN0	差分100	1170		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AJ3	437	CSI5A_RDP0	差分100	1170		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AL2	446	CSI5B_RDP1	差分100	1169.5		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AL3	447	CSI5B_RDN1	差分100	1169.5		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AH3	438	CSI5A_RDN2	差分100	1164.2		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AH2	439	CSI5A_RDP2	差分100	1164.2		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AM1	450	CSI5B_RDN3	差分100	1162.1		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
AM2	451	CSI5B_RDP3	差分100	1162.1		±5	<4inches(PCB+Moudle)	smaller than 2.7dB@3.25GHz	
									
R34	293	DSI0_CKN	差分100	1545.5	1545mil	±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
R35	294	DSI0_CKP	差分100	1545.5		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
T35	289	DSI0_D0P	差分100	1544.8		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
T34	290	DSI0_D0N	差分100	1544.8		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
P35	282	DSI0_D1N	差分100	1545.5		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
P36	283	DSI0_D1P	差分100	1545.5		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
U36	278	DSI0_D2P	差分100	1543.7		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
U35	279	DSI0_D2N	差分100	1543.7		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
P33	280	DSI0_D3N	差分100	1545.9		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
P34	281	DSI0_D3P	差分100	1545.9		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
									
R38	267	DSI1_CKN	差分100	1781.3	1782mil	±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
R39	269	DSI1_CKP	差分100	1781.3		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
T37	266	DSI1_D0N	差分100	1783.1		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
T38	270	DSI1_D0P	差分100	1783.1		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
R36	271	DSI1_D1N	差分100	1781.4		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
R37	272	DSI1_D1P	差分100	1781.4		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
U38	273	DSI1_D2N	差分100	1782.2		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
U39	274	DSI1_D2P	差分100	1782.2		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
P37	276	DSI1_D3P	差分100	1781.1		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
N37	277	DSI1_D3N	差分100	1781.1		±5	<6inches(PCB+Moudle)	smaller than 2.4dB@1.25GHz	
									
AA37	242	DP_AUXP	差分90	1806.3	1805mil	±5	<4inches(PCB+Moudle)	smaller than 5dB@4.05GHz	
AA36	243	DP_AUXN	差分90	1806.3		±5	<4inches(PCB+Moudle)	smaller than 5dB@4.05GHz	
W32	253	DP_LN1_TXP_P2	差分90	1805.4		±5	<4inches(PCB+Moudle)	smaller than 5dB@4.05GHz	
W33	254	DP_LN1_TXN_P2	差分90	1805.4		±5	<4inches(PCB+Moudle)	smaller than 5dB@4.05GHz	
Y34	255	DP_LN0_TXN_P2	差分90	1805.3		±5	<4inches(PCB+Moudle)	smaller than 5dB@4.05GHz	
Y35	256	DP_LN0_TXP_P2	差分90	1805.3		±5	<4inches(PCB+Moudle)	smaller than 5dB@4.05GHz	
									
AC37	244	USB_DM	差分90	1689.8	1690mil	±5	<8inches if trace only	smaller than 2dB@240MHz	
AC36	245	USB_DP	差分90	1689.8		±5	<8inches if trace only	smaller than 2dB@240MHz	
									
Y38	260	SSUSB_TXP_P1	差分90	1804.9	1802mil	±5	<5inches if trace only	smaller than 6dB@2.5GHz	
Y39	261	SSUSB_TXN_P1	差分90	1804.9		±5	<5inches if trace only	smaller than 6dB@2.5GHz	
W36	262	SSUSB_RXN_P1	差分90	1801.7		±5	<5inches if trace only	smaller than 6dB@2.5GHz	
W37	263	SSUSB_RXP_P1	差分90	1801.7		±5	<5inches if trace only	smaller than 6dB@2.5GHz	
									
Y6	408	PCIE_LN0_TXP	差分85	1137.8	1160mil	±5	<10inches,PCB trace+PCB length	smaller than 15dB@4GHz	TX和RX尽量短即可
Y5	409	PCIE_LN0_TXN	差分85	1137.8		±5	<10inches,PCB trace+PCB length	smaller than 15dB@4GHz	
Y2	414	PCIE_LN0_RXN	差分85	1143.6		±5	<10inches,PCB trace+PCB length	smaller than 15dB@4GHz	
Y1	415	PCIE_LN0_RXP	差分85	1143.6		±5	<10inches,PCB trace+PCB length	smaller than 15dB@4GHz	
AA3	420	PCIE_CKP	差分85	1162.3		±5	<10inches,PCB trace+PCB length	smaller than 15dB@4GHz	
AA4	421	PCIE_CKN	差分85	1162.3		±5	<10inches,PCB trace+PCB length	smaller than 15dB@4GHz	
									
L36	246	MSDC1_CMD	单端50	1435.6		±5	Trace Length<4inches		3W
L35	247	MSDC1_CLK	单端50	1430.5		±5	Trace Length<4inches		
L37	234	MSDC1_DATA0	单端50	1429.5		±5	Trace Length<4inches		
M34	241	MSDC1_DATA1	单端50	1434.5		±5	Trace Length<4inches		
M36	240	MSDC1_DATA2	单端50	1429.1		±5	Trace Length<4inches		
M35	235	MSDC1_DATA3	单端50	1433.2		±5	Trace Length<4inches		
									
									
									
									
									
									

## 工作表 2




---
# SRC0345 P39_A03.H5 芯片点散热凝胶标识图.xlsx

来源：P39_A03.H5 芯片点散热凝胶标识图.xlsx

SHA-256：25e5ea0ca1732b023cf136cfe7bbaef272fc0228fc8e6c8755c81aaac237f037

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0345.html)

单元格原值与公式文本按行提取；格式、合并单元格、图形及公式计算结果以原工作簿为准。

## 工作表 1



## 工作表 2



## 工作表 3




---
# SRC0346 P39_A03.H5_V2.1 BGA焊盘定义.xlsx

来源：P39_A03.H5_V2.1 BGA焊盘定义.xlsx

SHA-256：00f174112d428205b5c7a4481429c209d349db0885bdca86456147a3b0a97f69

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0346.html)

单元格原值与公式文本按行提取；格式、合并单元格、图形及公式计算结果以原工作簿为准。

## 工作表 1

																																		
1	=IF(COUNTA([1]表框架!B2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B2,VLOOKUP([1]表框架!B2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C2,VLOOKUP([1]表框架!C2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D2,VLOOKUP([1]表框架!D2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E2,VLOOKUP([1]表框架!E2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F2,VLOOKUP([1]表框架!F2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G2,VLOOKUP([1]表框架!G2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H2,VLOOKUP([1]表框架!H2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I2,VLOOKUP([1]表框架!I2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J2,VLOOKUP([1]表框架!J2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K2,VLOOKUP([1]表框架!K2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L2,VLOOKUP([1]表框架!L2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M2,VLOOKUP([1]表框架!M2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N2,VLOOKUP([1]表框架!N2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O2,VLOOKUP([1]表框架!O2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P2,VLOOKUP([1]表框架!P2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q2,VLOOKUP([1]表框架!Q2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R2,VLOOKUP([1]表框架!R2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S2,VLOOKUP([1]表框架!S2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T2,VLOOKUP([1]表框架!T2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U2,VLOOKUP([1]表框架!U2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V2,VLOOKUP([1]表框架!V2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W2,VLOOKUP([1]表框架!W2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X2,VLOOKUP([1]表框架!X2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y2,VLOOKUP([1]表框架!Y2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z2,VLOOKUP([1]表框架!Z2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA2,VLOOKUP([1]表框架!AA2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB2,VLOOKUP([1]表框架!AB2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC2,VLOOKUP([1]表框架!AC2,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD2)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD2,VLOOKUP([1]表框架!AD2,'[1]PIN list'!$B:$E,2)))					
2	=IF(COUNTA([1]表框架!B3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B3,VLOOKUP([1]表框架!B3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C3,VLOOKUP([1]表框架!C3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D3,VLOOKUP([1]表框架!D3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E3,VLOOKUP([1]表框架!E3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F3,VLOOKUP([1]表框架!F3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G3,VLOOKUP([1]表框架!G3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H3,VLOOKUP([1]表框架!H3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I3,VLOOKUP([1]表框架!I3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J3,VLOOKUP([1]表框架!J3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K3,VLOOKUP([1]表框架!K3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L3,VLOOKUP([1]表框架!L3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M3,VLOOKUP([1]表框架!M3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N3,VLOOKUP([1]表框架!N3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O3,VLOOKUP([1]表框架!O3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P3,VLOOKUP([1]表框架!P3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q3,VLOOKUP([1]表框架!Q3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R3,VLOOKUP([1]表框架!R3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S3,VLOOKUP([1]表框架!S3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T3,VLOOKUP([1]表框架!T3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U3,VLOOKUP([1]表框架!U3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V3,VLOOKUP([1]表框架!V3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W3,VLOOKUP([1]表框架!W3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X3,VLOOKUP([1]表框架!X3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y3,VLOOKUP([1]表框架!Y3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z3,VLOOKUP([1]表框架!Z3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA3,VLOOKUP([1]表框架!AA3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB3,VLOOKUP([1]表框架!AB3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC3,VLOOKUP([1]表框架!AC3,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD3)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD3,VLOOKUP([1]表框架!AD3,'[1]PIN list'!$B:$E,2)))					
3	=IF(COUNTA([1]表框架!B4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B4,VLOOKUP([1]表框架!B4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C4,VLOOKUP([1]表框架!C4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D4,VLOOKUP([1]表框架!D4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E4,VLOOKUP([1]表框架!E4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F4,VLOOKUP([1]表框架!F4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G4,VLOOKUP([1]表框架!G4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H4,VLOOKUP([1]表框架!H4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I4,VLOOKUP([1]表框架!I4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J4,VLOOKUP([1]表框架!J4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K4,VLOOKUP([1]表框架!K4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L4,VLOOKUP([1]表框架!L4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M4,VLOOKUP([1]表框架!M4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N4,VLOOKUP([1]表框架!N4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O4,VLOOKUP([1]表框架!O4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P4,VLOOKUP([1]表框架!P4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q4,VLOOKUP([1]表框架!Q4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R4,VLOOKUP([1]表框架!R4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S4,VLOOKUP([1]表框架!S4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T4,VLOOKUP([1]表框架!T4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U4,VLOOKUP([1]表框架!U4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V4,VLOOKUP([1]表框架!V4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W4,VLOOKUP([1]表框架!W4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X4,VLOOKUP([1]表框架!X4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y4,VLOOKUP([1]表框架!Y4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z4,VLOOKUP([1]表框架!Z4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA4,VLOOKUP([1]表框架!AA4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB4,VLOOKUP([1]表框架!AB4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC4,VLOOKUP([1]表框架!AC4,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD4)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD4,VLOOKUP([1]表框架!AD4,'[1]PIN list'!$B:$E,2)))		备注：	CSI		
4	=IF(COUNTA([1]表框架!B5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B5,VLOOKUP([1]表框架!B5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C5,VLOOKUP([1]表框架!C5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D5,VLOOKUP([1]表框架!D5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E5,VLOOKUP([1]表框架!E5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F5,VLOOKUP([1]表框架!F5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G5,VLOOKUP([1]表框架!G5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H5,VLOOKUP([1]表框架!H5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I5,VLOOKUP([1]表框架!I5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J5,VLOOKUP([1]表框架!J5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K5,VLOOKUP([1]表框架!K5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L5,VLOOKUP([1]表框架!L5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M5,VLOOKUP([1]表框架!M5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N5,VLOOKUP([1]表框架!N5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O5,VLOOKUP([1]表框架!O5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P5,VLOOKUP([1]表框架!P5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q5,VLOOKUP([1]表框架!Q5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R5,VLOOKUP([1]表框架!R5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S5,VLOOKUP([1]表框架!S5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T5,VLOOKUP([1]表框架!T5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U5,VLOOKUP([1]表框架!U5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V5,VLOOKUP([1]表框架!V5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W5,VLOOKUP([1]表框架!W5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X5,VLOOKUP([1]表框架!X5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y5,VLOOKUP([1]表框架!Y5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z5,VLOOKUP([1]表框架!Z5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA5,VLOOKUP([1]表框架!AA5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB5,VLOOKUP([1]表框架!AB5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC5,VLOOKUP([1]表框架!AC5,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD5)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD5,VLOOKUP([1]表框架!AD5,'[1]PIN list'!$B:$E,2)))			DSI		
5	=IF(COUNTA([1]表框架!B6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B6,VLOOKUP([1]表框架!B6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C6,VLOOKUP([1]表框架!C6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D6,VLOOKUP([1]表框架!D6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E6,VLOOKUP([1]表框架!E6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F6,VLOOKUP([1]表框架!F6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G6,VLOOKUP([1]表框架!G6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H6,VLOOKUP([1]表框架!H6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I6,VLOOKUP([1]表框架!I6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J6,VLOOKUP([1]表框架!J6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K6,VLOOKUP([1]表框架!K6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L6,VLOOKUP([1]表框架!L6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M6,VLOOKUP([1]表框架!M6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N6,VLOOKUP([1]表框架!N6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O6,VLOOKUP([1]表框架!O6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P6,VLOOKUP([1]表框架!P6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q6,VLOOKUP([1]表框架!Q6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R6,VLOOKUP([1]表框架!R6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S6,VLOOKUP([1]表框架!S6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T6,VLOOKUP([1]表框架!T6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U6,VLOOKUP([1]表框架!U6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V6,VLOOKUP([1]表框架!V6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W6,VLOOKUP([1]表框架!W6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X6,VLOOKUP([1]表框架!X6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y6,VLOOKUP([1]表框架!Y6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z6,VLOOKUP([1]表框架!Z6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA6,VLOOKUP([1]表框架!AA6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB6,VLOOKUP([1]表框架!AB6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC6,VLOOKUP([1]表框架!AC6,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD6)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD6,VLOOKUP([1]表框架!AD6,'[1]PIN list'!$B:$E,2)))			D_GND		
6	=IF(COUNTA([1]表框架!B7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B7,VLOOKUP([1]表框架!B7,'[1]PIN list'!$B:$E,2)))		=IF(COUNTA([1]表框架!D7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D7,VLOOKUP([1]表框架!D7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E7,VLOOKUP([1]表框架!E7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F7,VLOOKUP([1]表框架!F7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G7,VLOOKUP([1]表框架!G7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H7,VLOOKUP([1]表框架!H7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I7,VLOOKUP([1]表框架!I7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J7,VLOOKUP([1]表框架!J7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K7,VLOOKUP([1]表框架!K7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L7,VLOOKUP([1]表框架!L7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M7,VLOOKUP([1]表框架!M7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N7,VLOOKUP([1]表框架!N7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O7,VLOOKUP([1]表框架!O7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P7,VLOOKUP([1]表框架!P7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q7,VLOOKUP([1]表框架!Q7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R7,VLOOKUP([1]表框架!R7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S7,VLOOKUP([1]表框架!S7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T7,VLOOKUP([1]表框架!T7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U7,VLOOKUP([1]表框架!U7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V7,VLOOKUP([1]表框架!V7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W7,VLOOKUP([1]表框架!W7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X7,VLOOKUP([1]表框架!X7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y7,VLOOKUP([1]表框架!Y7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z7,VLOOKUP([1]表框架!Z7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA7,VLOOKUP([1]表框架!AA7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB7,VLOOKUP([1]表框架!AB7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC7,VLOOKUP([1]表框架!AC7,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD7)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD7,VLOOKUP([1]表框架!AD7,'[1]PIN list'!$B:$E,2)))			VBAT		
7	=IF(COUNTA([1]表框架!B8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B8,VLOOKUP([1]表框架!B8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C8,VLOOKUP([1]表框架!C8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D8,VLOOKUP([1]表框架!D8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E8,VLOOKUP([1]表框架!E8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F8,VLOOKUP([1]表框架!F8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G8,VLOOKUP([1]表框架!G8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H8,VLOOKUP([1]表框架!H8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I8,VLOOKUP([1]表框架!I8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J8,VLOOKUP([1]表框架!J8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K8,VLOOKUP([1]表框架!K8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L8,VLOOKUP([1]表框架!L8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M8,VLOOKUP([1]表框架!M8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N8,VLOOKUP([1]表框架!N8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O8,VLOOKUP([1]表框架!O8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P8,VLOOKUP([1]表框架!P8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q8,VLOOKUP([1]表框架!Q8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R8,VLOOKUP([1]表框架!R8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S8,VLOOKUP([1]表框架!S8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T8,VLOOKUP([1]表框架!T8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U8,VLOOKUP([1]表框架!U8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V8,VLOOKUP([1]表框架!V8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W8,VLOOKUP([1]表框架!W8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X8,VLOOKUP([1]表框架!X8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y8,VLOOKUP([1]表框架!Y8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z8,VLOOKUP([1]表框架!Z8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA8,VLOOKUP([1]表框架!AA8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB8,VLOOKUP([1]表框架!AB8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC8,VLOOKUP([1]表框架!AC8,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD8)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD8,VLOOKUP([1]表框架!AD8,'[1]PIN list'!$B:$E,2)))			DP		
8	=IF(COUNTA([1]表框架!B9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B9,VLOOKUP([1]表框架!B9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C9,VLOOKUP([1]表框架!C9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D9,VLOOKUP([1]表框架!D9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E9,VLOOKUP([1]表框架!E9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F9,VLOOKUP([1]表框架!F9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G9,VLOOKUP([1]表框架!G9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H9,VLOOKUP([1]表框架!H9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I9,VLOOKUP([1]表框架!I9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J9,VLOOKUP([1]表框架!J9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K9,VLOOKUP([1]表框架!K9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L9,VLOOKUP([1]表框架!L9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M9,VLOOKUP([1]表框架!M9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N9,VLOOKUP([1]表框架!N9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O9,VLOOKUP([1]表框架!O9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P9,VLOOKUP([1]表框架!P9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q9,VLOOKUP([1]表框架!Q9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R9,VLOOKUP([1]表框架!R9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S9,VLOOKUP([1]表框架!S9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T9,VLOOKUP([1]表框架!T9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U9,VLOOKUP([1]表框架!U9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V9,VLOOKUP([1]表框架!V9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W9,VLOOKUP([1]表框架!W9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X9,VLOOKUP([1]表框架!X9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y9,VLOOKUP([1]表框架!Y9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z9,VLOOKUP([1]表框架!Z9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA9,VLOOKUP([1]表框架!AA9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB9,VLOOKUP([1]表框架!AB9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC9,VLOOKUP([1]表框架!AC9,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD9)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD9,VLOOKUP([1]表框架!AD9,'[1]PIN list'!$B:$E,2)))			SIM		
9	=IF(COUNTA([1]表框架!B10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B10,VLOOKUP([1]表框架!B10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C10,VLOOKUP([1]表框架!C10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D10,VLOOKUP([1]表框架!D10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E10,VLOOKUP([1]表框架!E10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F10,VLOOKUP([1]表框架!F10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G10,VLOOKUP([1]表框架!G10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H10,VLOOKUP([1]表框架!H10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I10,VLOOKUP([1]表框架!I10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J10,VLOOKUP([1]表框架!J10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K10,VLOOKUP([1]表框架!K10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L10,VLOOKUP([1]表框架!L10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M10,VLOOKUP([1]表框架!M10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N10,VLOOKUP([1]表框架!N10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O10,VLOOKUP([1]表框架!O10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P10,VLOOKUP([1]表框架!P10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q10,VLOOKUP([1]表框架!Q10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R10,VLOOKUP([1]表框架!R10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S10,VLOOKUP([1]表框架!S10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T10,VLOOKUP([1]表框架!T10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U10,VLOOKUP([1]表框架!U10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V10,VLOOKUP([1]表框架!V10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W10,VLOOKUP([1]表框架!W10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X10,VLOOKUP([1]表框架!X10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y10,VLOOKUP([1]表框架!Y10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z10,VLOOKUP([1]表框架!Z10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA10,VLOOKUP([1]表框架!AA10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB10,VLOOKUP([1]表框架!AB10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC10,VLOOKUP([1]表框架!AC10,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD10)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD10,VLOOKUP([1]表框架!AD10,'[1]PIN list'!$B:$E,2)))			SD		
10	=IF(COUNTA([1]表框架!B11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B11,VLOOKUP([1]表框架!B11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C11,VLOOKUP([1]表框架!C11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D11,VLOOKUP([1]表框架!D11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E11,VLOOKUP([1]表框架!E11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F11,VLOOKUP([1]表框架!F11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G11,VLOOKUP([1]表框架!G11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H11,VLOOKUP([1]表框架!H11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I11,VLOOKUP([1]表框架!I11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J11,VLOOKUP([1]表框架!J11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K11,VLOOKUP([1]表框架!K11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L11,VLOOKUP([1]表框架!L11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M11,VLOOKUP([1]表框架!M11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N11,VLOOKUP([1]表框架!N11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O11,VLOOKUP([1]表框架!O11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P11,VLOOKUP([1]表框架!P11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q11,VLOOKUP([1]表框架!Q11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R11,VLOOKUP([1]表框架!R11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S11,VLOOKUP([1]表框架!S11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T11,VLOOKUP([1]表框架!T11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U11,VLOOKUP([1]表框架!U11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V11,VLOOKUP([1]表框架!V11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W11,VLOOKUP([1]表框架!W11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X11,VLOOKUP([1]表框架!X11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y11,VLOOKUP([1]表框架!Y11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z11,VLOOKUP([1]表框架!Z11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA11,VLOOKUP([1]表框架!AA11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB11,VLOOKUP([1]表框架!AB11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC11,VLOOKUP([1]表框架!AC11,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD11)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD11,VLOOKUP([1]表框架!AD11,'[1]PIN list'!$B:$E,2)))			PCIE		
11	=IF(COUNTA([1]表框架!B12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B12,VLOOKUP([1]表框架!B12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C12,VLOOKUP([1]表框架!C12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D12,VLOOKUP([1]表框架!D12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E12,VLOOKUP([1]表框架!E12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F12,VLOOKUP([1]表框架!F12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G12,VLOOKUP([1]表框架!G12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H12,VLOOKUP([1]表框架!H12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I12,VLOOKUP([1]表框架!I12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J12,VLOOKUP([1]表框架!J12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K12,VLOOKUP([1]表框架!K12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L12,VLOOKUP([1]表框架!L12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M12,VLOOKUP([1]表框架!M12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N12,VLOOKUP([1]表框架!N12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O12,VLOOKUP([1]表框架!O12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P12,VLOOKUP([1]表框架!P12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q12,VLOOKUP([1]表框架!Q12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R12,VLOOKUP([1]表框架!R12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S12,VLOOKUP([1]表框架!S12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T12,VLOOKUP([1]表框架!T12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U12,VLOOKUP([1]表框架!U12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V12,VLOOKUP([1]表框架!V12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W12,VLOOKUP([1]表框架!W12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X12,VLOOKUP([1]表框架!X12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y12,VLOOKUP([1]表框架!Y12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z12,VLOOKUP([1]表框架!Z12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA12,VLOOKUP([1]表框架!AA12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB12,VLOOKUP([1]表框架!AB12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC12,VLOOKUP([1]表框架!AC12,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD12)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD12,VLOOKUP([1]表框架!AD12,'[1]PIN list'!$B:$E,2)))					
12	=IF(COUNTA([1]表框架!B13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B13,VLOOKUP([1]表框架!B13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C13,VLOOKUP([1]表框架!C13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D13,VLOOKUP([1]表框架!D13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E13,VLOOKUP([1]表框架!E13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F13,VLOOKUP([1]表框架!F13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G13,VLOOKUP([1]表框架!G13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H13,VLOOKUP([1]表框架!H13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I13,VLOOKUP([1]表框架!I13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J13,VLOOKUP([1]表框架!J13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K13,VLOOKUP([1]表框架!K13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L13,VLOOKUP([1]表框架!L13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M13,VLOOKUP([1]表框架!M13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N13,VLOOKUP([1]表框架!N13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O13,VLOOKUP([1]表框架!O13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P13,VLOOKUP([1]表框架!P13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q13,VLOOKUP([1]表框架!Q13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R13,VLOOKUP([1]表框架!R13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S13,VLOOKUP([1]表框架!S13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T13,VLOOKUP([1]表框架!T13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U13,VLOOKUP([1]表框架!U13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V13,VLOOKUP([1]表框架!V13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W13,VLOOKUP([1]表框架!W13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X13,VLOOKUP([1]表框架!X13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y13,VLOOKUP([1]表框架!Y13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z13,VLOOKUP([1]表框架!Z13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA13,VLOOKUP([1]表框架!AA13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB13,VLOOKUP([1]表框架!AB13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC13,VLOOKUP([1]表框架!AC13,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD13)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD13,VLOOKUP([1]表框架!AD13,'[1]PIN list'!$B:$E,2)))					
13	=IF(COUNTA([1]表框架!B14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B14,VLOOKUP([1]表框架!B14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C14,VLOOKUP([1]表框架!C14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D14,VLOOKUP([1]表框架!D14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E14,VLOOKUP([1]表框架!E14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F14,VLOOKUP([1]表框架!F14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G14,VLOOKUP([1]表框架!G14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H14,VLOOKUP([1]表框架!H14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I14,VLOOKUP([1]表框架!I14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J14,VLOOKUP([1]表框架!J14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K14,VLOOKUP([1]表框架!K14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L14,VLOOKUP([1]表框架!L14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M14,VLOOKUP([1]表框架!M14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N14,VLOOKUP([1]表框架!N14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O14,VLOOKUP([1]表框架!O14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P14,VLOOKUP([1]表框架!P14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q14,VLOOKUP([1]表框架!Q14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R14,VLOOKUP([1]表框架!R14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S14,VLOOKUP([1]表框架!S14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T14,VLOOKUP([1]表框架!T14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U14,VLOOKUP([1]表框架!U14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V14,VLOOKUP([1]表框架!V14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W14,VLOOKUP([1]表框架!W14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X14,VLOOKUP([1]表框架!X14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y14,VLOOKUP([1]表框架!Y14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z14,VLOOKUP([1]表框架!Z14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA14,VLOOKUP([1]表框架!AA14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB14,VLOOKUP([1]表框架!AB14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC14,VLOOKUP([1]表框架!AC14,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD14)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD14,VLOOKUP([1]表框架!AD14,'[1]PIN list'!$B:$E,2)))					
14	=IF(COUNTA([1]表框架!B15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B15,VLOOKUP([1]表框架!B15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C15,VLOOKUP([1]表框架!C15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D15,VLOOKUP([1]表框架!D15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E15,VLOOKUP([1]表框架!E15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F15,VLOOKUP([1]表框架!F15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G15,VLOOKUP([1]表框架!G15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H15,VLOOKUP([1]表框架!H15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I15,VLOOKUP([1]表框架!I15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J15,VLOOKUP([1]表框架!J15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K15,VLOOKUP([1]表框架!K15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L15,VLOOKUP([1]表框架!L15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M15,VLOOKUP([1]表框架!M15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N15,VLOOKUP([1]表框架!N15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O15,VLOOKUP([1]表框架!O15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P15,VLOOKUP([1]表框架!P15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q15,VLOOKUP([1]表框架!Q15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R15,VLOOKUP([1]表框架!R15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S15,VLOOKUP([1]表框架!S15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T15,VLOOKUP([1]表框架!T15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U15,VLOOKUP([1]表框架!U15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V15,VLOOKUP([1]表框架!V15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W15,VLOOKUP([1]表框架!W15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X15,VLOOKUP([1]表框架!X15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y15,VLOOKUP([1]表框架!Y15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z15,VLOOKUP([1]表框架!Z15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA15,VLOOKUP([1]表框架!AA15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB15,VLOOKUP([1]表框架!AB15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC15,VLOOKUP([1]表框架!AC15,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD15)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD15,VLOOKUP([1]表框架!AD15,'[1]PIN list'!$B:$E,2)))					
15	=IF(COUNTA([1]表框架!B16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B16,VLOOKUP([1]表框架!B16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C16,VLOOKUP([1]表框架!C16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D16,VLOOKUP([1]表框架!D16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E16,VLOOKUP([1]表框架!E16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F16,VLOOKUP([1]表框架!F16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G16,VLOOKUP([1]表框架!G16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H16,VLOOKUP([1]表框架!H16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I16,VLOOKUP([1]表框架!I16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J16,VLOOKUP([1]表框架!J16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K16,VLOOKUP([1]表框架!K16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L16,VLOOKUP([1]表框架!L16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M16,VLOOKUP([1]表框架!M16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N16,VLOOKUP([1]表框架!N16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O16,VLOOKUP([1]表框架!O16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P16,VLOOKUP([1]表框架!P16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q16,VLOOKUP([1]表框架!Q16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R16,VLOOKUP([1]表框架!R16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S16,VLOOKUP([1]表框架!S16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T16,VLOOKUP([1]表框架!T16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U16,VLOOKUP([1]表框架!U16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V16,VLOOKUP([1]表框架!V16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W16,VLOOKUP([1]表框架!W16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X16,VLOOKUP([1]表框架!X16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y16,VLOOKUP([1]表框架!Y16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z16,VLOOKUP([1]表框架!Z16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA16,VLOOKUP([1]表框架!AA16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB16,VLOOKUP([1]表框架!AB16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC16,VLOOKUP([1]表框架!AC16,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD16)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD16,VLOOKUP([1]表框架!AD16,'[1]PIN list'!$B:$E,2)))					
16	=IF(COUNTA([1]表框架!B17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B17,VLOOKUP([1]表框架!B17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C17,VLOOKUP([1]表框架!C17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D17,VLOOKUP([1]表框架!D17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E17,VLOOKUP([1]表框架!E17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F17,VLOOKUP([1]表框架!F17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G17,VLOOKUP([1]表框架!G17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H17,VLOOKUP([1]表框架!H17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I17,VLOOKUP([1]表框架!I17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J17,VLOOKUP([1]表框架!J17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K17,VLOOKUP([1]表框架!K17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L17,VLOOKUP([1]表框架!L17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M17,VLOOKUP([1]表框架!M17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N17,VLOOKUP([1]表框架!N17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O17,VLOOKUP([1]表框架!O17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P17,VLOOKUP([1]表框架!P17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q17,VLOOKUP([1]表框架!Q17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R17,VLOOKUP([1]表框架!R17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S17,VLOOKUP([1]表框架!S17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T17,VLOOKUP([1]表框架!T17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U17,VLOOKUP([1]表框架!U17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V17,VLOOKUP([1]表框架!V17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W17,VLOOKUP([1]表框架!W17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X17,VLOOKUP([1]表框架!X17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y17,VLOOKUP([1]表框架!Y17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z17,VLOOKUP([1]表框架!Z17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA17,VLOOKUP([1]表框架!AA17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB17,VLOOKUP([1]表框架!AB17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC17,VLOOKUP([1]表框架!AC17,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD17)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD17,VLOOKUP([1]表框架!AD17,'[1]PIN list'!$B:$E,2)))					
17	=IF(COUNTA([1]表框架!B18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B18,VLOOKUP([1]表框架!B18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C18,VLOOKUP([1]表框架!C18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D18,VLOOKUP([1]表框架!D18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E18,VLOOKUP([1]表框架!E18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F18,VLOOKUP([1]表框架!F18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G18,VLOOKUP([1]表框架!G18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H18,VLOOKUP([1]表框架!H18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I18,VLOOKUP([1]表框架!I18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J18,VLOOKUP([1]表框架!J18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K18,VLOOKUP([1]表框架!K18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L18,VLOOKUP([1]表框架!L18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M18,VLOOKUP([1]表框架!M18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N18,VLOOKUP([1]表框架!N18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O18,VLOOKUP([1]表框架!O18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P18,VLOOKUP([1]表框架!P18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q18,VLOOKUP([1]表框架!Q18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R18,VLOOKUP([1]表框架!R18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S18,VLOOKUP([1]表框架!S18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T18,VLOOKUP([1]表框架!T18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U18,VLOOKUP([1]表框架!U18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V18,VLOOKUP([1]表框架!V18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W18,VLOOKUP([1]表框架!W18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X18,VLOOKUP([1]表框架!X18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y18,VLOOKUP([1]表框架!Y18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z18,VLOOKUP([1]表框架!Z18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA18,VLOOKUP([1]表框架!AA18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB18,VLOOKUP([1]表框架!AB18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC18,VLOOKUP([1]表框架!AC18,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD18)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD18,VLOOKUP([1]表框架!AD18,'[1]PIN list'!$B:$E,2)))					
18	=IF(COUNTA([1]表框架!B19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B19,VLOOKUP([1]表框架!B19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C19,VLOOKUP([1]表框架!C19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D19,VLOOKUP([1]表框架!D19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E19,VLOOKUP([1]表框架!E19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F19,VLOOKUP([1]表框架!F19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G19,VLOOKUP([1]表框架!G19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H19,VLOOKUP([1]表框架!H19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I19,VLOOKUP([1]表框架!I19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J19,VLOOKUP([1]表框架!J19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K19,VLOOKUP([1]表框架!K19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L19,VLOOKUP([1]表框架!L19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M19,VLOOKUP([1]表框架!M19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N19,VLOOKUP([1]表框架!N19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O19,VLOOKUP([1]表框架!O19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P19,VLOOKUP([1]表框架!P19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q19,VLOOKUP([1]表框架!Q19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R19,VLOOKUP([1]表框架!R19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S19,VLOOKUP([1]表框架!S19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T19,VLOOKUP([1]表框架!T19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U19,VLOOKUP([1]表框架!U19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V19,VLOOKUP([1]表框架!V19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W19,VLOOKUP([1]表框架!W19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X19,VLOOKUP([1]表框架!X19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y19,VLOOKUP([1]表框架!Y19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z19,VLOOKUP([1]表框架!Z19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA19,VLOOKUP([1]表框架!AA19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB19,VLOOKUP([1]表框架!AB19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC19,VLOOKUP([1]表框架!AC19,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD19)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD19,VLOOKUP([1]表框架!AD19,'[1]PIN list'!$B:$E,2)))					
19	=IF(COUNTA([1]表框架!B20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B20,VLOOKUP([1]表框架!B20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C20,VLOOKUP([1]表框架!C20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D20,VLOOKUP([1]表框架!D20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E20,VLOOKUP([1]表框架!E20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F20,VLOOKUP([1]表框架!F20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G20,VLOOKUP([1]表框架!G20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H20,VLOOKUP([1]表框架!H20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I20,VLOOKUP([1]表框架!I20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J20,VLOOKUP([1]表框架!J20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K20,VLOOKUP([1]表框架!K20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L20,VLOOKUP([1]表框架!L20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M20,VLOOKUP([1]表框架!M20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N20,VLOOKUP([1]表框架!N20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O20,VLOOKUP([1]表框架!O20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P20,VLOOKUP([1]表框架!P20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q20,VLOOKUP([1]表框架!Q20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R20,VLOOKUP([1]表框架!R20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S20,VLOOKUP([1]表框架!S20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T20,VLOOKUP([1]表框架!T20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U20,VLOOKUP([1]表框架!U20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V20,VLOOKUP([1]表框架!V20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W20,VLOOKUP([1]表框架!W20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X20,VLOOKUP([1]表框架!X20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y20,VLOOKUP([1]表框架!Y20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z20,VLOOKUP([1]表框架!Z20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA20,VLOOKUP([1]表框架!AA20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB20,VLOOKUP([1]表框架!AB20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC20,VLOOKUP([1]表框架!AC20,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD20)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD20,VLOOKUP([1]表框架!AD20,'[1]PIN list'!$B:$E,2)))					
20	=IF(COUNTA([1]表框架!B21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B21,VLOOKUP([1]表框架!B21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C21,VLOOKUP([1]表框架!C21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D21,VLOOKUP([1]表框架!D21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E21,VLOOKUP([1]表框架!E21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F21,VLOOKUP([1]表框架!F21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G21,VLOOKUP([1]表框架!G21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H21,VLOOKUP([1]表框架!H21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I21,VLOOKUP([1]表框架!I21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J21,VLOOKUP([1]表框架!J21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K21,VLOOKUP([1]表框架!K21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L21,VLOOKUP([1]表框架!L21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M21,VLOOKUP([1]表框架!M21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N21,VLOOKUP([1]表框架!N21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O21,VLOOKUP([1]表框架!O21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P21,VLOOKUP([1]表框架!P21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q21,VLOOKUP([1]表框架!Q21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R21,VLOOKUP([1]表框架!R21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S21,VLOOKUP([1]表框架!S21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T21,VLOOKUP([1]表框架!T21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U21,VLOOKUP([1]表框架!U21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V21,VLOOKUP([1]表框架!V21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W21,VLOOKUP([1]表框架!W21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X21,VLOOKUP([1]表框架!X21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y21,VLOOKUP([1]表框架!Y21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z21,VLOOKUP([1]表框架!Z21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA21,VLOOKUP([1]表框架!AA21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB21,VLOOKUP([1]表框架!AB21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC21,VLOOKUP([1]表框架!AC21,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD21)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD21,VLOOKUP([1]表框架!AD21,'[1]PIN list'!$B:$E,2)))					
21	=IF(COUNTA([1]表框架!B22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B22,VLOOKUP([1]表框架!B22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C22,VLOOKUP([1]表框架!C22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D22,VLOOKUP([1]表框架!D22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E22,VLOOKUP([1]表框架!E22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F22,VLOOKUP([1]表框架!F22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G22,VLOOKUP([1]表框架!G22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H22,VLOOKUP([1]表框架!H22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I22,VLOOKUP([1]表框架!I22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J22,VLOOKUP([1]表框架!J22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K22,VLOOKUP([1]表框架!K22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L22,VLOOKUP([1]表框架!L22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M22,VLOOKUP([1]表框架!M22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N22,VLOOKUP([1]表框架!N22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O22,VLOOKUP([1]表框架!O22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P22,VLOOKUP([1]表框架!P22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q22,VLOOKUP([1]表框架!Q22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R22,VLOOKUP([1]表框架!R22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S22,VLOOKUP([1]表框架!S22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T22,VLOOKUP([1]表框架!T22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U22,VLOOKUP([1]表框架!U22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V22,VLOOKUP([1]表框架!V22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W22,VLOOKUP([1]表框架!W22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X22,VLOOKUP([1]表框架!X22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y22,VLOOKUP([1]表框架!Y22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z22,VLOOKUP([1]表框架!Z22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA22,VLOOKUP([1]表框架!AA22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB22,VLOOKUP([1]表框架!AB22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC22,VLOOKUP([1]表框架!AC22,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD22)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD22,VLOOKUP([1]表框架!AD22,'[1]PIN list'!$B:$E,2)))					
22	=IF(COUNTA([1]表框架!B23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B23,VLOOKUP([1]表框架!B23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C23,VLOOKUP([1]表框架!C23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D23,VLOOKUP([1]表框架!D23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E23,VLOOKUP([1]表框架!E23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F23,VLOOKUP([1]表框架!F23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G23,VLOOKUP([1]表框架!G23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H23,VLOOKUP([1]表框架!H23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I23,VLOOKUP([1]表框架!I23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J23,VLOOKUP([1]表框架!J23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K23,VLOOKUP([1]表框架!K23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L23,VLOOKUP([1]表框架!L23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M23,VLOOKUP([1]表框架!M23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N23,VLOOKUP([1]表框架!N23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O23,VLOOKUP([1]表框架!O23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P23,VLOOKUP([1]表框架!P23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q23,VLOOKUP([1]表框架!Q23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R23,VLOOKUP([1]表框架!R23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S23,VLOOKUP([1]表框架!S23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T23,VLOOKUP([1]表框架!T23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U23,VLOOKUP([1]表框架!U23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V23,VLOOKUP([1]表框架!V23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W23,VLOOKUP([1]表框架!W23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X23,VLOOKUP([1]表框架!X23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y23,VLOOKUP([1]表框架!Y23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z23,VLOOKUP([1]表框架!Z23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA23,VLOOKUP([1]表框架!AA23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB23,VLOOKUP([1]表框架!AB23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC23,VLOOKUP([1]表框架!AC23,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD23)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD23,VLOOKUP([1]表框架!AD23,'[1]PIN list'!$B:$E,2)))					
23	=IF(COUNTA([1]表框架!B24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B24,VLOOKUP([1]表框架!B24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C24,VLOOKUP([1]表框架!C24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D24,VLOOKUP([1]表框架!D24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E24,VLOOKUP([1]表框架!E24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F24,VLOOKUP([1]表框架!F24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G24,VLOOKUP([1]表框架!G24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H24,VLOOKUP([1]表框架!H24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I24,VLOOKUP([1]表框架!I24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J24,VLOOKUP([1]表框架!J24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K24,VLOOKUP([1]表框架!K24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L24,VLOOKUP([1]表框架!L24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M24,VLOOKUP([1]表框架!M24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N24,VLOOKUP([1]表框架!N24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O24,VLOOKUP([1]表框架!O24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P24,VLOOKUP([1]表框架!P24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q24,VLOOKUP([1]表框架!Q24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R24,VLOOKUP([1]表框架!R24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S24,VLOOKUP([1]表框架!S24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T24,VLOOKUP([1]表框架!T24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U24,VLOOKUP([1]表框架!U24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V24,VLOOKUP([1]表框架!V24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W24,VLOOKUP([1]表框架!W24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X24,VLOOKUP([1]表框架!X24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y24,VLOOKUP([1]表框架!Y24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z24,VLOOKUP([1]表框架!Z24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA24,VLOOKUP([1]表框架!AA24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB24,VLOOKUP([1]表框架!AB24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC24,VLOOKUP([1]表框架!AC24,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD24)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD24,VLOOKUP([1]表框架!AD24,'[1]PIN list'!$B:$E,2)))					
24	=IF(COUNTA([1]表框架!B25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B25,VLOOKUP([1]表框架!B25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C25,VLOOKUP([1]表框架!C25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D25,VLOOKUP([1]表框架!D25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E25,VLOOKUP([1]表框架!E25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F25,VLOOKUP([1]表框架!F25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G25,VLOOKUP([1]表框架!G25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H25,VLOOKUP([1]表框架!H25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I25,VLOOKUP([1]表框架!I25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J25,VLOOKUP([1]表框架!J25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K25,VLOOKUP([1]表框架!K25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L25,VLOOKUP([1]表框架!L25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M25,VLOOKUP([1]表框架!M25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N25,VLOOKUP([1]表框架!N25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O25,VLOOKUP([1]表框架!O25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P25,VLOOKUP([1]表框架!P25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q25,VLOOKUP([1]表框架!Q25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R25,VLOOKUP([1]表框架!R25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S25,VLOOKUP([1]表框架!S25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T25,VLOOKUP([1]表框架!T25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U25,VLOOKUP([1]表框架!U25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V25,VLOOKUP([1]表框架!V25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W25,VLOOKUP([1]表框架!W25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X25,VLOOKUP([1]表框架!X25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y25,VLOOKUP([1]表框架!Y25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z25,VLOOKUP([1]表框架!Z25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA25,VLOOKUP([1]表框架!AA25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB25,VLOOKUP([1]表框架!AB25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC25,VLOOKUP([1]表框架!AC25,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD25)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD25,VLOOKUP([1]表框架!AD25,'[1]PIN list'!$B:$E,2)))					
25	=IF(COUNTA([1]表框架!B26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B26,VLOOKUP([1]表框架!B26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C26,VLOOKUP([1]表框架!C26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D26,VLOOKUP([1]表框架!D26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E26,VLOOKUP([1]表框架!E26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F26,VLOOKUP([1]表框架!F26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G26,VLOOKUP([1]表框架!G26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H26,VLOOKUP([1]表框架!H26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I26,VLOOKUP([1]表框架!I26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J26,VLOOKUP([1]表框架!J26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K26,VLOOKUP([1]表框架!K26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L26,VLOOKUP([1]表框架!L26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M26,VLOOKUP([1]表框架!M26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N26,VLOOKUP([1]表框架!N26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O26,VLOOKUP([1]表框架!O26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P26,VLOOKUP([1]表框架!P26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q26,VLOOKUP([1]表框架!Q26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R26,VLOOKUP([1]表框架!R26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S26,VLOOKUP([1]表框架!S26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T26,VLOOKUP([1]表框架!T26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U26,VLOOKUP([1]表框架!U26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V26,VLOOKUP([1]表框架!V26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W26,VLOOKUP([1]表框架!W26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X26,VLOOKUP([1]表框架!X26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y26,VLOOKUP([1]表框架!Y26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z26,VLOOKUP([1]表框架!Z26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA26,VLOOKUP([1]表框架!AA26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB26,VLOOKUP([1]表框架!AB26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC26,VLOOKUP([1]表框架!AC26,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD26)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD26,VLOOKUP([1]表框架!AD26,'[1]PIN list'!$B:$E,2)))					
26	=IF(COUNTA([1]表框架!B27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B27,VLOOKUP([1]表框架!B27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C27,VLOOKUP([1]表框架!C27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D27,VLOOKUP([1]表框架!D27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E27,VLOOKUP([1]表框架!E27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F27,VLOOKUP([1]表框架!F27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G27,VLOOKUP([1]表框架!G27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H27,VLOOKUP([1]表框架!H27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I27,VLOOKUP([1]表框架!I27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J27,VLOOKUP([1]表框架!J27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K27,VLOOKUP([1]表框架!K27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L27,VLOOKUP([1]表框架!L27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M27,VLOOKUP([1]表框架!M27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N27,VLOOKUP([1]表框架!N27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O27,VLOOKUP([1]表框架!O27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P27,VLOOKUP([1]表框架!P27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q27,VLOOKUP([1]表框架!Q27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R27,VLOOKUP([1]表框架!R27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S27,VLOOKUP([1]表框架!S27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T27,VLOOKUP([1]表框架!T27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U27,VLOOKUP([1]表框架!U27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V27,VLOOKUP([1]表框架!V27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W27,VLOOKUP([1]表框架!W27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X27,VLOOKUP([1]表框架!X27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y27,VLOOKUP([1]表框架!Y27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z27,VLOOKUP([1]表框架!Z27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA27,VLOOKUP([1]表框架!AA27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB27,VLOOKUP([1]表框架!AB27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC27,VLOOKUP([1]表框架!AC27,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD27)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD27,VLOOKUP([1]表框架!AD27,'[1]PIN list'!$B:$E,2)))					
27	=IF(COUNTA([1]表框架!B28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B28,VLOOKUP([1]表框架!B28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C28,VLOOKUP([1]表框架!C28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D28,VLOOKUP([1]表框架!D28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E28,VLOOKUP([1]表框架!E28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F28,VLOOKUP([1]表框架!F28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G28,VLOOKUP([1]表框架!G28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H28,VLOOKUP([1]表框架!H28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I28,VLOOKUP([1]表框架!I28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J28,VLOOKUP([1]表框架!J28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K28,VLOOKUP([1]表框架!K28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L28,VLOOKUP([1]表框架!L28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M28,VLOOKUP([1]表框架!M28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N28,VLOOKUP([1]表框架!N28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O28,VLOOKUP([1]表框架!O28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P28,VLOOKUP([1]表框架!P28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q28,VLOOKUP([1]表框架!Q28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R28,VLOOKUP([1]表框架!R28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S28,VLOOKUP([1]表框架!S28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T28,VLOOKUP([1]表框架!T28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U28,VLOOKUP([1]表框架!U28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V28,VLOOKUP([1]表框架!V28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W28,VLOOKUP([1]表框架!W28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X28,VLOOKUP([1]表框架!X28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y28,VLOOKUP([1]表框架!Y28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z28,VLOOKUP([1]表框架!Z28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA28,VLOOKUP([1]表框架!AA28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB28,VLOOKUP([1]表框架!AB28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC28,VLOOKUP([1]表框架!AC28,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD28)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD28,VLOOKUP([1]表框架!AD28,'[1]PIN list'!$B:$E,2)))					
28	=IF(COUNTA([1]表框架!B29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B29,VLOOKUP([1]表框架!B29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C29,VLOOKUP([1]表框架!C29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D29,VLOOKUP([1]表框架!D29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E29,VLOOKUP([1]表框架!E29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F29,VLOOKUP([1]表框架!F29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G29,VLOOKUP([1]表框架!G29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H29,VLOOKUP([1]表框架!H29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I29,VLOOKUP([1]表框架!I29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J29,VLOOKUP([1]表框架!J29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K29,VLOOKUP([1]表框架!K29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L29,VLOOKUP([1]表框架!L29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M29,VLOOKUP([1]表框架!M29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N29,VLOOKUP([1]表框架!N29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O29,VLOOKUP([1]表框架!O29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P29,VLOOKUP([1]表框架!P29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q29,VLOOKUP([1]表框架!Q29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R29,VLOOKUP([1]表框架!R29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S29,VLOOKUP([1]表框架!S29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T29,VLOOKUP([1]表框架!T29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U29,VLOOKUP([1]表框架!U29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V29,VLOOKUP([1]表框架!V29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W29,VLOOKUP([1]表框架!W29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X29,VLOOKUP([1]表框架!X29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y29,VLOOKUP([1]表框架!Y29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z29,VLOOKUP([1]表框架!Z29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA29,VLOOKUP([1]表框架!AA29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB29,VLOOKUP([1]表框架!AB29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC29,VLOOKUP([1]表框架!AC29,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD29)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD29,VLOOKUP([1]表框架!AD29,'[1]PIN list'!$B:$E,2)))					
29	=IF(COUNTA([1]表框架!B30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!B30,VLOOKUP([1]表框架!B30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!C30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!C30,VLOOKUP([1]表框架!C30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!D30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!D30,VLOOKUP([1]表框架!D30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!E30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!E30,VLOOKUP([1]表框架!E30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!F30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!F30,VLOOKUP([1]表框架!F30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!G30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!G30,VLOOKUP([1]表框架!G30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!H30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!H30,VLOOKUP([1]表框架!H30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!I30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!I30,VLOOKUP([1]表框架!I30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!J30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!J30,VLOOKUP([1]表框架!J30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!K30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!K30,VLOOKUP([1]表框架!K30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!L30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!L30,VLOOKUP([1]表框架!L30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!M30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!M30,VLOOKUP([1]表框架!M30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!N30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!N30,VLOOKUP([1]表框架!N30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!O30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!O30,VLOOKUP([1]表框架!O30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!P30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!P30,VLOOKUP([1]表框架!P30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Q30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Q30,VLOOKUP([1]表框架!Q30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!R30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!R30,VLOOKUP([1]表框架!R30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!S30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!S30,VLOOKUP([1]表框架!S30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!T30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!T30,VLOOKUP([1]表框架!T30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!U30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!U30,VLOOKUP([1]表框架!U30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!V30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!V30,VLOOKUP([1]表框架!V30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!W30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!W30,VLOOKUP([1]表框架!W30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!X30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!X30,VLOOKUP([1]表框架!X30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Y30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Y30,VLOOKUP([1]表框架!Y30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!Z30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!Z30,VLOOKUP([1]表框架!Z30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AA30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AA30,VLOOKUP([1]表框架!AA30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AB30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AB30,VLOOKUP([1]表框架!AB30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AC30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AC30,VLOOKUP([1]表框架!AC30,'[1]PIN list'!$B:$E,2)))	=IF(COUNTA([1]表框架!AD30)=0,"",_xlfn.TEXTJOIN(CHAR(10),FALSE,[1]表框架!AD30,VLOOKUP([1]表框架!AD30,'[1]PIN list'!$B:$E,2)))					
	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	23	24	25	26	27	28	29					
																																		
																																		
																																		
																																		
																																		
																																		
																																		

## 工作表 2




---
# SRC0347 掌锐MT8676  8678-BGA模块贴片工艺应用V1.4.pdf

来源：掌锐MT8676  8678-BGA模块贴片工艺应用V1.4.pdf

SHA-256：22a9bd9dcd6f41413eddfb96291304009815e0f42ec23f3ae01ab8dc71e4c8a6

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0347.html)

## PDF物理页 1

深圳市掌锐电子有限公司 第 1 页 共 10 页
掌锐电子
专业车联网智能硬件方案提供商
MT8676&MT8678
BGA 模块贴片工艺应用
文档版本：V1.4
发布日期：2025 年 4 月 3 日

## PDF物理页 2

机密文件，未经允许禁止外传 第 2 页 共 10 页
文档历史
修订记录
版本 日期 编写 变更描述
V1.0 2024-7-28 谭长明 初始版本
V1.2 2024-9-18 谭长明 删除焊盘设计定义，模块焊盘封装设计请参考掌锐模块的硬
件设计手册文档
V1.3 2024-12-23 谭长明 更新炉温曲线描述，钢网厚度推荐，术语修正，贴片要求
V1.4 2025-4-3 谭长明 删除旧版封装图片

## PDF物理页 3

机密文件，未经允许禁止外传 第 3 页 共 10 页
一、适用范围
本文档对应产品为掌锐电子 BGA 封装模块进行 SMT 贴片的流程及焊接的过程
适用于掌锐 MT8676、MT8678 平台的模块。
备注：
由于版本升级或其他原因，本文档内容会在不预先通知的情况下进行必要的更新
本文档仅作为使用指导建议，不同类型的客户产品的设计和结构、生产现场的环境和工具等
因素的不同，均会影响到实际的工艺结果，本文档中的所有陈述、信息和建议都不会构成任
何明示或暗示的担保。
二、模块相关信息
2.1 封装类型：
模块封装类型为 BGA 封装。
2.2 包装类型：
包装方式为托盘真空密封包装。
MT8676 模块包装托盘规格：277mm*201mm*8.5mm
MT8678 模块包装托盘规格：300mm*215mm*8.5mm
参见下图：(实际包装数量为 12PCS/每盘）


## PDF物理页 4

机密文件，未经允许禁止外传 第 4 页 共 10 页
三、贴片设备要求
3.1 贴片机
3.1.1 送料器：支持 Tray 托盘
3.1.2 影像处理：光学对中，方向识别
3.1.3 吸嘴直径：根据模块本体大小选取，保证模块贴装时稳定性。
（客户可根据自身不同设备的吸嘴配置选取合适的吸嘴）
3.2 焊接要求
3.2.1 回流焊设备要求：模块需使用十温区及以上的回流焊接设备，带氮气供给。
3.2.2 残氧量建议≤2000
3.2.3 无铅工艺回流焊炉温要求，BGA 模块器件面的炉温实际的峰值温度最高不超 245℃
3.2.4 建议使用带回流工装载具进行底板过炉（如下图），抑制底板 PCB 板在高温下形变，
影响焊接共面性
3.2.5 带回流工装夹具时，需评估过炉载具的材料、吸热量和大小尺寸，以选择合适的峰
值温度和回流时间参数，以防止模块冷焊。
3.2.6 模块焊盘封装设计请参考掌锐模块的硬件设计手册文档，对 SMT 的可制造性设计
（DFM），为避免二次回流会造成模块底部引脚连锡短路问题

## PDF物理页 5

机密文件，未经允许禁止外传 第 5 页 共 10 页
四、生产注意事项
4.1 湿敏等级及防潮要求、存储要求
掌锐模块为湿敏产品，参考 IPC-JEDEC 标准，核心板模块湿敏等级定义为 MSL 3。在使用之
前需确认包装是否完好；打开包装后，需确认真空包装袋内湿度指示卡状态。如出现以下情
况，需要在使用前对模块进行烘烤。
● 湿度指示卡：5%指示圈为粉色且 10%指示圈不再是蓝色，如下图所示。
推荐存储条件：温度 23 °C ±5 °C，且相对湿度为 35 % ~ 60 %，模块可在真空密封袋
中存放 6 个月
湿度卡
4.2 温湿度管控
4.2.1 湿敏等级为 3 的产品的开封暴露为 168 小时 ，在环境温度 23 °C ±5 °C，相对
湿度低于 60 %的环境 下，模块拆封后需要在 168 小时内进行回流生产，否则需要将模块
存储在相对湿度小于 10 %的环境中（例如，防潮柜），以保持产品的干燥性
4.2.2 仅在相对湿度较低的车间环境符合《IPC/JEDEC J-STD-033》规范时适用；不确定车
间温湿度环境是否满足条件，或相对湿度大于 60 %的情况下，请在拆封后 24 小时内完成
贴片回流，请勿提前大量拆包
4.2.3 为预防和减少模块因受潮导致的焊接不良的发生，应严格进行管控，不应拆开真空包
装后长时间暴露在空气中
4.3 烘烤
4.3.1 如需烘烤，烘烤条件：60℃± 5℃条件下烘烤 48 小时。
4.3.2 模块须在烘烤后 24 小时内完成焊接，否则需在干燥箱内保存。

## PDF物理页 6

机密文件，未经允许禁止外传 第 6 页 共 10 页
4.4 钢网制作要求
为保证 BGA 封装模块焊接时有足够的焊锡以及焊接的可靠性，模块部分区域钢网需要局
部增厚，且采用正面增厚（印刷面）的方式 。
需要注意的是，局部增厚的区域周边 5mm 范围内的元件，印刷时会因钢网增厚的的影
响锡量增多，所以这些元件钢网开孔建议比正常开孔减小 10%-30%的面积；如局部加厚钢网
旁边有 0.5mm pitch 以下和 0201 的精细元件，开钢网时需注意开孔之间的安全距离，否则
会有印刷连锡的风险。
模块 PAD 焊点钢网开孔建议：
钢网厚度：模块位置厚度 0.1mm~0.12mm 圆形焊盘：开孔面积 1：1
‘
以上钢网建议仅供参考，客户可以根据实际生产情况进行优化。
以上图片供参考，实际钢网开孔坐标请参考掌锐最新版本硬件设计手册以及最新产品规格书
4.5 自动贴装
选取合适的吸嘴，生产中须尽力保证吸嘴吸取在模块的重心位置，贴装速度为低速，图
像识别检测通过率为 100%，以防在移动时不稳定，模块贴在 PCB 上以后，模块各大引脚与
锡膏中心对应对齐，注意贴装方向。

## PDF物理页 7

机密文件，未经允许禁止外传 第 7 页 共 10 页
4.6 回流焊
炉温测试需要在模块位置接热偶测试点，保证模块位置达到需要的温度。推荐的炉温曲线
图如下所示：（无铅 SMT 回流焊）
推荐的炉温曲线图
推荐的炉温测试控制要求
注：推荐曲线供参考，客户可以根据实际生产的锡膏和设备条件进行优化。
注：在设计和应用模块时，底板的设计可能会涉及到在模块上贴附散热胶或者涂散热硅脂。
然而我们必须强调的是，这一步骤必须在模块贴好底板之后再进行。
这是因为，如果在模块未贴好底板的情况下就进行散热胶或硅胶的涂抹，那么在回流焊过程
中，由于散热硅脂或散热胶的热膨胀，可能会导致芯片底部出现严重的连锡问题。这不仅会
影响模块的性能，甚至可能导致模块的损坏

## PDF物理页 8

机密文件，未经允许禁止外传 第 8 页 共 10 页
五、贴片过炉要求
因模组内部为 BGA 芯片、贴片阻容等贴片物料，与底板 PCB 之间也是用焊锡连接，在高温
下同样会融化。若在模组过炉时炉温过高，模组内部的焊锡也会完全融化，若在完全融锡状
态下模组遇到较大的震动，比如回流焊炉内传送带的过度震动或者撞板，则模组内部的 BGA
等器件容易移位或假焊或连锡。所以在使用掌锐模组过炉时需注意：
▲锡膏可采用阿尔法、千住等常见品牌的无铅活性锡膏。
▲模组必须使用 SMT 自动贴片机贴装，禁止手工摆放或手工焊接。
▲模组贴片生产时建议只进行一次回流焊接，可提高产品的良率。
▲氮气的使用可以有效的提高焊接润湿性，在改善焊接品质、降低氧化与空洞率有显著效果，
如条件容许，建议在焊接时增加氮气过炉。
▲必须使用 10 温区以上的回流焊炉，并严格控制炉温曲线。
▲模组不能在过炉时产生较大震动，即要求贵司生产时必须在回流炉轨道（链条）上过炉，
不能在铁丝网上过炉，以保证产品平顺通过。
▲部分客户在上线时，炉温曲线不合适，炉温偏高以及回流时间偏长，客户底板融锡情况很
好，但炉后导致的模组不良率偏高，原因为模组内部 BGA 再次融锡后导致器件偏移、短路，
生产前请充分验证调整回流炉温度，制定最佳的温度曲线，既保证母板的焊接质量，同时避
免模组内部元件焊锡重融异常，提高产品良率
▲如果贵司母板较薄、较宽、尺寸较大，在过炉的时候 PCB 受热可能存在变形、翘曲等风
险，进而导致模组虚焊、连锡、少锡等焊接不良，必须制作“过炉载具”来保证模组的焊接
质量
六、标签的注意事项
5.1 针对采用纸质标签的模块，在生产焊接或者其他可能直接接触到模块的过程中，不得使
用任何有机溶剂（如酒精、异丙醇、丙酮、三氯乙烯等）擦拭模块标签，否则可能会造成标
签字迹模糊。
5.2 针对采用洋白铜材质镭雕屏蔽罩的模块，在生产焊接或者其他可能直接接触到模块的过
程中，不得使用任何有机溶剂（如酒精、异丙醇、丙酮、三氯乙烯等）擦拭模块屏蔽罩，否
则可能会造成屏蔽罩生锈。

## PDF物理页 9

机密文件，未经允许禁止外传 第 9 页 共 10 页
七、维修加热注意事项
6.1 若需要将模块进行加热拆焊，返修前务必通过 X-ray 检查 BGA 的焊接状况，避免因拆
焊后的二次加热温度或方法不当引起的芯片连锡，移位等二次不良。
6.2 如果需要将模块从主板上取下，需使用上下加热方式，需使用专用 BGA 返修台对模块进
行加热拆焊，操作时请务必采取防静电措施，设备需要接地。
⚫ 返修台温度设定：260℃-270℃（仅为参考，需根据底板实际情况，返修台能力，维修人
员经验实际情况调整）
⚫ 主板在空气中放置超过 48 小时，需要烘烤后再进行维修。
⚫ 加热时，需平放、固定主板，主板与加热台的距离保持在 2.0~3.5 cm 之间，依据经验
调整。
备注：
使用专用 BGA 返修台进行拆焊，须使用底部加热器预热和加热，防止因大型模块单面加热
时间长导致焊盘、线路分层和 PCB 起泡、变形等不良报废，维修好后建议使用 X-ray 检查
模块焊接效果，避免因为维修而导致的 BGA 连锡和空焊等不良。
八、维修加热说明
模块板局部区域温度超过 PCB 板的玻璃化转变温度即视为一次维修加热，每块 PCB 板
最大维修次数为 2 次。使用电烙铁进行补焊或点焊不算做一次维修，使用热风枪维修将视作
一次维修，如果维修 2 次后仍没修复，建议作报废处理。

## PDF物理页 10

机密文件，未经允许禁止外传 第 10 页 共 10 页
九、ESD 防护
静电会导致间歇或永久性的电路损伤，对电子产品危害很大，很多不良的产生多数是 ESD 或
EOS 损坏，开盖分析时均能观察到明显的 ESD 或 EOS 烧伤痕迹，如下图所示：
因此，模块的静电防护尤为重要，生产和运输过程需要严格按照静电防护进行作
业，须遵循以下条件
⚫ SMT 贴片机、作业工作台、电烙铁等设备需接地
⚫ 作业人员佩戴具有良好接地线的人体防静电手环（不可使用无绳静电手环，
建议戴防静电手套）
⚫ 测试夹具具有良好接地，直接对板端的测试针设计具备 ESD 防护能力
⚫ 避免裸手接触模组

