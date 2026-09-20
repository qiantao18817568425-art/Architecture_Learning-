# SRC0147 MT8676_Android_Audio_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Audio_User_Manual_V1.1.pdf

SHA-256：38c540b592d33eabbf58322905b8cd986fcaa8a52af4b60127289c3f82592f5b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0147.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.1 
出版日期：  2025-07-11
MT8676 Android Audio 
User Manual 
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
MT8676 Android Audio 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 许剑鑫 正式版 
1.1 2025-07-11 付帆 新增 1.5 Audio 各模块 Debug 方法介绍 
 
 
  
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
MT8676 Android Audio 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 Audio ········································································································································································· 5 
1.1 概述·········································································································································································· 5 
 音频功能简单概述 ······································································································································ 5 
 音频功能及框图 ·········································································································································· 5 
 音频软件架构 ············································································································································ 13 
 音频 HAL ····················································································································································· 14 
 ALSA 驱动架构概要 ··································································································································· 17 
 DAPM 及 DPCM 概述 ································································································································· 18 
1.2 AAOS 音量控制 ······················································································································································ 19 
 在 XML 文件中配置音量 ··························································································································· 20 
 客制音量命令 ············································································································································ 21 
1.3 外部硬件设备 ························································································································································ 22 
 MT8676 I2S 能力支持 ································································································································ 22 
1.4 联发科 Aurisys 和开放式 DSP ······························································································································· 26 
 概述 ···························································································································································· 26 
 数据路径客制指南 ···································································································································· 27 
 总结 ···························································································································································· 34 
1.5 Audio 各模块 Debug 方法介绍 ····························································································································· 35 
 Audio Framework Debug ···························································································································· 35 
 Audio HAL Debug ········································································································································ 35 
 ADSP Debug ················································································································································ 37 
 Audio 虚拟化 Debug ·································································································································· 38 
 Tbox Audio Debug ······································································································································· 41 
1.6 附录········································································································································································ 43 
 MTK MOL ···················································································································································· 43 
附件一 附加条款 ····························································································································································· 44 
 
 
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
MT8676 Android Audio 
User Manual 
Confidential B 
图片目录 
图 1-1. MT8676 音频框图 ························································································································································· 7 
图 1-2. MT6368 音频框图 ························································································································································· 7 
图 1-3. 音频软件架构 ····························································································································································· 14 
图 1-4. 音频软件数据流·························································································································································· 14 
图 1-5. 音频 HAL 架构 ····························································································································································· 15 
图 1-6. 播放架构 ····································································································································································· 16 
图 1-7. 录制架构 ····································································································································································· 17 
图 1-8. ALSA PCM 接口 ···························································································································································· 18 
图 1-9.音频音量控制 ······························································································································································ 20 
图 1-10. 音频音量组配置 ······················································································································································· 20 
图 1-11. 设备增益配置 ··························································································································································· 21 
图 1-12. Aurisys 概念 ······························································································································································· 26 
图 1-13. Aurisys 结构 ······························································································································································· 27 
图 1-14. DTS 属性列表 ···························································································································································· 28 
图 1-15. memif 定义 ································································································································································ 28 
图 1-16. 音频 HAL PCM Config 配置 ······································································································································· 29 
图 1-17. ADSP 架构 ·································································································································································· 29 
图 1-18. 播放音乐的音频路径 ················································································································································ 30 
图 1-19. 将 Playback_3 传输到 PMIC ······································································································································ 30 
图 1-20. ADSP 架构 ·································································································································································· 31 
图 1-21. DSP 任务配置 ···························································································································································· 34 
图 1-22. Audio HAL enum 值 ··················································································································································· 36 
图 1-23. ADSP task log 配置 ···················································································································································· 37 
图 1-24. VAFE binder 线程 ······················································································································································· 38 
图 1-25. VAFE timer ································································································································································· 39 
图 1-26. VAFE trace 分析 ························································································································································· 39 
图 1-27. VADSP android trace ·················································································································································· 40 
图 1-28. VADSP yocto trace ······················································································································································ 41 
 
表格目录 
表 1-1. GPIO 功能 ···································································································································································· 23 
表 1-2. I2S 应用 ······································································································································································· 25 
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
MT8676 Android Audio 
User Manual 
Confidential B 
1 Audio 
1.1 概述 
本文档将介绍音频功能，例如音量控制、音频框架、DSP 音频配置等。首先，我们将概述所支持的功能和音频框
图。然后，我们将介绍 AAOS 音量控制及相关配置。最后，我们将介绍 Aurisys 音效框架和 DSP 音频 mix 通路配
置。 
 
 音频功能简单概述 
 音频功能及框图 
 
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
MT8676 Android Audio 
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

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Android Audio 
User Manual 
Confidential B 
     
图 1-1. MT8676 音频框图 
 
 
图 1-2. MT6368 音频框图 
 
• MT8676 
– 联发科专有音频接口连接到 PMIC MT6368 
– 使用 MTK PMIC – MT6368 进行音频播放 
▪ 支持 8kHz , 11.025kHz, 12kHz, 16 kHz, 22.05kHz ,24kHz, 32kHz, 44.1Hz, 48kHz, 96kHz, 192kHz, 384kHz 采样率 
– 使用 MTK PMIC – MT6368 进行音频录制 
▪ 支持 8kHz, 16kHz, 32kHz, 48kHz, 96kHz, 192kHz 采样率 
– 内部高分辨率、高灵活性的 AFE 互连中的 HW 增益 
– 11 组 Inter IC 音频接口 (I2S) 
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
MT8676 Android Audio 
User Manual 
Confidential B 
▪ 主输出 *5 (其中一个是 8 通道)  
▪ 主输入 *5 (其中一个是 8 通道) 
▪ 从输入(带 SRC)  
▪ 主模式支持 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48, 88, 96, 176, and 192kHz 采样率 
▪ 从模式支持 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48kHz 采样率 
▪ 支持 16/32 位总线宽度 
▪ Philip 标准和左对齐 
– 2 组脉冲编码调制 (PCM)接口 
▪ Slave PCM for internal Modem*1 
▪ 支持 16/24 位立体声数据格式 
– 2 组增强时分复用 (TDM)接口 
▪ 主输出 *1 (最多 8 通道) 
▪ 音频编解码器 
▪ MP3, AAC, AAC+, AMR-NB, AMR-WB, OGG, WAV, APE 
– 音频后处理 
▪ BesLoudness 
▪ ACF 
▪ 第三方支持 （需要客户与第三方联系） 
▪ Dolby mobile 
• MT6368 
– 联发科专有音频接口连接到 MT8676 
– TX 简要规格 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
 
– RX 简要规格 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
 
1.1.2.1 音频格式支持 
• 播放 
– AAC/HE-AAC v1/HE-AAC v2 
▪ Android Orientated Support/Not use MediaTek IP  
▪ 8 kHz~96 kHz; 8 kbps~320 kbps 
▪ Mono/Stereo support 
▪ Bitrate Mode: VBR/CBR 
▪ File Extension: .aac(ADTS, ADIF), .m4a, .mp4, .3gp, .ts 
▪ Profile: 1) LC, HEAAC V1, V2;  2) LD, ELD 
▪ LC, 48 kHz, 128 kbps, stereo → MCPS = 11; HEv1, 22.05 kHz, 128 kbps, stereo → MCPS = 31; HEv2, 22.05 kHz, 32 
kbps, stereo → MCPS = 40; ELD, 44.1 kHz, 128 kbps MCPS = 13  
– AMR 
▪ Android Orientated support/Use MediaTek IP 
▪ 8 kHz, 4.75 kbps~12.2 kbps 
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
MT8676 Android Audio 
User Manual 
Confidential B 
▪ Mono support 
▪ Bitrate mode: CBR 
▪ File Extension: .amr 
▪ 8 kHz, 12.2 kbps, mono -> Mediaserver: 50 MCPS, AMR Dec: 7 MCPS 
– AWB 
▪ Android Orientated support/Use MediaTek IP 
▪ 16 kHz, 6.6 kbps~23.85 kbps 
▪ Mono support 
▪ Bitrate mode: CBR 
▪ File Extension: .awb 
▪ 16 kHz, 23.85 kbps, mono -> Mediaserver: 60 MCPS, AMR Dec: 18 MCPS 
– MIDI 
▪ Android Orientated support/Not use MediaTek IP  
▪ 22.05 kHz 
▪ Stereo Support 
▪ File Extension: .mid, .midi, .smf, .rtttl, .xmf, .rtx, .ota, .imy 
– MP2 
▪ Android Not support/Use MediaTek IP  
▪ 8 kHz ~ 48 kHz; 8 kbps ~ 320 kbps 
▪ Mono/Stereo support 
▪ Bitrate Mode: VBR/CBR 
▪ File Extension: .mp2 
▪ Profile: MPEG1-Layer2, MEPG2-Layer2, MPEG2.5-Layer2 
▪ MPEG1, 48 kHz, 256 kbps, stereo → 11 MCPS 
– MP3 
▪ Android Orientated support/Use MediaTek IP  
▪ 8 kHz ~ 48 kHz; 8 kbps ~ 320 kbps 
▪ Mono/Stereo support 
▪ Bitrate Mode: VBR/CBR 
▪ File Extension: .mp3 
▪ Profile: MPEG1-Layer3, MEPG2-Layer3, MPEG2.5-Layer3 
▪ MPEG1, 48 kHz, 256 kbps, stereo → 15 MCPS 
– OGG VORBIS 
▪ Android Orientated support/Use MediaTek IP  
▪ 8 kHz ~ 192 kHz; 10 kbps ~ 320 kbps 
▪ Mono/Stereo support 
▪ Bitrate Mode: VBR 
▪ File Extension: .ogg, .oga 
▪ 48 kHz, 250 bps, stereo → MCPS = 25 
– WAV (ADPCM) 
▪ Android Not support/Use MediaTek IP  
▪ 8 kHz ~ 192 kHz; 4 kbps ~ 192 kbps 
▪ Bitrate Mode: CBR 
▪ File Extension: .wav 
▪ Profile: DVI/MA ADPCM; MS ADPCM 
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
MT8676 Android Audio 
User Manual 
Confidential B 
▪ DVI/MA 48 kHz, stereo → 3.44 MCPS; DVI/MA 192 kHz, stereo → 13.6 MCPS; MS, 48 kHz, stereo -> 4.17 MCPS; 
MS, 192 kHz, stereo → 16.3 MCPS 
– WAV (Alaw/Ulaw) 
▪ Android Orientated support/Use MediaTek IP  
▪ 6 kHz ~ 96 kHz; 48 kbps ~ 3072 kbps 
▪ Mono/Stereo support 
▪ File Extension: .wav 
– WAV (Raw) 
▪ Android Orientated support/Use MediaTek IP  
▪ 6 kHz~96 kHz; 48 kbps~3072 kbps 
▪ 1 channel ~ 8 channels support 
▪ File Extension: .wav 
– APE 
▪ Android Not support/Use MediaTek IP  
▪ 6 kHz ~ 96 kHz; 29 kbps ~ 836 kbps 
▪ Mono/Stereo support 
▪ Bitrate Mode: VBR 
▪ File Extension: .ape 
▪ Profile: fast, normal, high, extra high 
▪ APE normal compress type, 44.1 kHz, 675 kbps, stereo → MCPS = 50 
– WMA (Need license) 
▪ Android Not support/Use MediaTek IP  
▪ 8 kHz ~ 48 kHz; 5 kbps ~ 320 kbps 
▪ Mono/Stereo support 
▪ Bitrate Mode: VBR 
▪ File Extension: .wma 
▪ Profile: wma v1; wma v2 
▪ 32 kHz, 22 kbps, stereo → MCPS = 22.57 
– FLAC 
▪ Android Orientated support/Use MediaTek IP  
▪ 8 kHz ~ 48 kHz; 87 kbps ~ 396 kbps 
▪ Mono/Stereo support 
▪ Bitrate Mode: VBR 
▪ File Extension: .flac 
▪ 44.1 kHz, 745 kbps, level5, stereo → MCPS = 10 
• 录制 
– AAC 
▪ Android Orientated support/Not use MediaTek IP  
▪  8 kHz ~ 48 kHz; 8 kbps~160 kbps 
▪ Mono/Stereo support 
▪ Bitrate Mode: CBR 
▪ File Extension: .3gp, .aac 
▪ Profile: Low Complexity; High Efficiency; Enhanced Latency Delay 
▪ 48 kHz, 128 kbps, stereo (Low Complexity) → MCPS = 32; 48 kHz, 128 kbps, stereo (High Efficiency) → MCPS = 
75; 48 kHz, 128 kbps, stereo (Low Latency Delay) → MCPS = 40;  
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
MT8676 Android Audio 
User Manual 
Confidential B 
– AMR 
▪ Android Orientated support/Use MediaTek IP  
▪ 8 kHz; 4.75 kbps~12.2 kbps 
▪ Mono support 
▪ Bitrate Mode: CBR 
▪ File Extension: .3gp, .amr 
▪ 8 kHz, 12.2 kbps, mono → MCPS = 39 
– AWB 
▪ Android Orientated support/Use MediaTek IP  
▪ 16 kHz; 6.60 kbps~23.85 kbps 
▪ Mono support 
▪ Bitrate Mode: CBR 
▪ File Extension: .3gp, .awb 
▪ 16 kHz, 23.85 kbps, mono → MCPS = 77 
– OGG 
▪ Android Not support/Use MediaTek IP  
▪ 8 kHz~ 48 kHz; 31.98 kbps~202.96 kbps 
▪ Mono/Stereo support 
▪ Bitrate Mode: VBR 
▪ File Extension: ..ogg 
▪ 48 kHz, 128 kbps, stereo → MCPS = 40 
– ADPCM 
▪ Android Not support/Use MediaTek IP  
▪ 8 kHz~ 48 kHz; 4 kbps~192 kbps 
▪ Mono/Stereo support 
▪ Bitrate Mode: CBR 
▪ File Extension: ..wav 
▪ 16 kHz, stereo, DIV/MA → MCPS = 2.88; 48 kHz, stereo, DIV/MA → MCPS = 8.5; 16 kHz, stereo, MS → MCPS = 
5.08; 48 kHz, stereo, MS → MCPS = 14.97 
 
 音频软件架构 
图 1-3 和图 1-4 分别是音频软件架构和数据流。在这两张图中可以看到软件组件和数据路径。 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
图 1-3. 音频软件架构 
 
Modem
2014/7/1
4 2
Audio HAL
CCCI
Volume
Control driver
AudioFlinger
Stream Manager
Capture
Handler Playback
Handler
Modem
ARM
DSP
Audio Mixer
Resampler
AudioSystem 
AudioPolicyManager
Data flow
Control flow
AudioPolicyService
LAD
Device SPH
Volume Rec
BGSnd
BGSPlayer
SRC SRC
PlayBuffer PlayBuffer
Mix
AP
ARM
ALSA Driver Loud Spk drv Headset drv
Capture
Handler
Playback
Handler
UL From Modem
UL From AP
DL To AP
DL To Modem
Audio Playback
Record path
AP Audio HWMD Audio HW
 
图 1-4. 音频软件数据流 
 
 音频 HAL 
图 1-5 是音频 HAL 架构。  
AudioTrack 
 AudioRecord 
AudioSystem 
binder 
AudioFlinger 
 AudioPolicyService 
AudioPolicy 
Interface 
AudioPolicyManager 
AudioHardweare 
Interface 
AudioMixer 
AudioResampler 
AudioHardware 
AudioStreamOut 
 AudioStreamIn 
Audio Driver 
cblk 
 cblk 
kernel 
HAL 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
图 1-5. 音频 HAL 架构 
 
HAL 的顶层控制接口是 AudioALSAHardware、AudioALSAStreamOut 和 AudioALSAStreamIn。这些类都使用
AudioALSAStreamManager 来控制音频模式、打开/关闭，输入/输出流。因此 AudioALSAStreamManager 将拥有所有
音频环境信息，如模式、路由、音量和静音信息。 
 
1.1.4.1 音频 HAL 播放 
AudioALSAStreamOut: 执行写入/待机/路由操作的类 
• 不实现细节本身，而是使用 Playback Handler 执行实际打开/关闭/路由/写入操作 
• 不同场景使用不同类型的 Playback Handler 
• 第一次写入时，Stream Out 将调用 StreamManager 中的 createPlaybackHandler()来获取 Playback Handler 的指针 
• 在 standby()时，destroyPlaybackHandler() 
不要在 playback handler 中设置硬件寄存器，而是使用 TinyALSA 库来调用 
• pcm_open() /pcm_close() 
– 控制 AFE 硬件路径和内存设置 
• mixer_open()/mixer_close() 
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
MT8676 Android Audio 
User Manual 
Confidential B 
– 获取各种类型的混音器控制, 比如 Speaker_Amp_Switch, Voice_Amp_Switch, Audio_Amp_R_Switch, and 
Audio_Amp_L_Switch，以控制编解码器驱动程序。 
• pcm_write() 
– 将 PCM 数据写入 SRAM/DRAM 
 
图 1-6. 播放架构 
 
1.1.4.2 音频 HAL 录制 
AudioALSAStreamIn： 执行读取/待机/路由操作的类 
• 不实现细节本身，而是使用 Capture Handler 绕过打开/关闭/路由/读取操作 
• 不同场景使用不同类型的 Capture Handler 
• Stream In 将在第一次 read()时调用 StreamManager 中的 createCaptureHandler()来获取 Capture Handler 的指针 
• 此外，在 standby()时，destroyCaptureHandler() 
不要在 Capture Handler 中设置硬件寄存器，而是使用 TinyALSA 库来调用 
• pcm_open() /pcm_close() 
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
MT8676 Android Audio 
User Manual 
Confidential B 
– 用于控制 AFE 硬件路径、内存设置 
• mixer_open()/mixer_close() 
– 用于获取各种类型的混音器控制，如 Audio_ADC_1_Switch、Audio_ADC_2_Switch、Audio_Preamp1_Switch、
Audio_Preamp2_Switch， 以控制编解码器驱动程序 
• pcm_read() 
– 用于将 PCM 数据读取到 SRAM/DRAM 中 
 
 
图 1-7. 录制架构 
 
 ALSA 驱动架构概要 
高级 Linux 声音架构(ALSA)为 Linux 操作系统提供音频和 MIDI 功能。ALSA 具有以下重要功能： 
 
• 高效支持所有类型的音频接口，从消费级声卡到专业多声道音频接口  
• 完全模块化的声音驱动程序 
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
MT8676 Android Audio 
User Manual 
Confidential B 
• SMP 和线程安全设计 
• 用户空间库 (alsa-lib)简化应用程序编程并提供更高级别的功能 
• 支持较旧的开放声音系统(OSS) API，为大多数 OSS 程序提供二进制兼容性 
 
 
图 1-8. ALSA PCM 接口 
 
 DAPM 及 DPCM 概述 
动态音频电源管理（DAPM）旨在允许便携式 Linux 设备始终使用音频子系统中的最小电量。它独立于其他内核
PM，因此可以轻松与其他 PM 系统共存。 
DAPM 对所有用户空间应用程序也完全透明，因为所有电源切换都在 ASoC 核心内完成。用户空间应用程序无需更
改代码或重新编译。DAPM 根据设备内的任何音频流（捕获/播放）活动和音频混音器设置做出电源切换决策。 
所有 DAPM 电源切换决策都是通过查阅整个机器的音频路由图自动做出的。此图特定于每台机器，由每个音频组
件（包括内部编解码器组件）之间的互连组成。以下所有影响电源的音频组件都称为小部件。有关更多详细信
息，请参阅：https://www.kernel.org/doc/html/v6.1/sound/soc/dpcm.html。 
音频驱动基于标准 DAPM 和 DPCM（动态 PCM）架构来控制 pcm 的打开/关闭、电源的开/关、时钟的开/关。
DPCM 将 PCM 分为 Front End/Back End PCM： 
• FE PCM: Control of DMA (MEMMEMIF) 
• BE PCM: Control of DAI (ADDA, PCM IF, I2S) 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
 
更多详细信息可以参考: https://www.kernel.org/doc/html/v6.1/sound/soc/dpcm.html。 
以下是 MT8676 FE(memif)和 BE(ADDA/I2S/PCM/Hostless/..)框图： 
 
 
1.2 AAOS 音量控制 
根据谷歌的定义，AAOS 的实现是使用硬件功放来控制音量，而不是软件混音器，所以建议使用 smartpa 或者其他
硬件增益来调节音量。MTK 在内部 adsp 中提供了调节音量的接口和软件路径，如图 1-9 所示。 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
图 1-9.音频音量控制 
 
 在 XML 文件中配置音量 
要配置音量，我们需要修改 car_audio_configuration.xml 和 audio_policy_configuration.xml。 
car_audio_configuration.xml 定义音量组，用于管理音频区域内一组设备的音量。对于每个音量组，音量都可以独
立控制。产生的增益在相关设备上配置，以供车辆的放大器应用。每个音量组应包含一个或多个具有相关地址的
输出设备。地址应与 audio_policy_configuration.xml 中定义的输出设备相对应。 
 
 
图 1-10. 音频音量组配置 
 
Audio_policy_configuration.xml 定义了音量组增益。每个音量组都有最小、最大和默认增益值，以及基于  
audio_policy_configuration.xml 中为与音量组关联的设备配置的值的步长。 
Audio native framwork 
Audio hal 
Kernel driver 
Audio dsp 
setAudioPortConfig 
ipi driver 
ipi msg 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
图 1-11. 设备增益配置 
 
我们提供最小 0 到最大 300 的增益等级，并且增益将通过对数转换函数映射到浮点值 0~1 并应用于数字音频流。 
 
 客制音量命令 
音量命令由音频 flinger 通过 setAudioPortConfig 发送，并在 AudioALSAPlaybackHandlerXXXX::setVolume 中处理命
令。客户可以修改函数以进行自定义，例如调整音量曲线和设置 kcontrol。 
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
MT8676 Android Audio 
User Manual 
Confidential B 
1.3 外部硬件设备 
 MT8676 I2S 能力支持 
I2S 能力接口描述 
• MTK 音频接口 
– 适用于 MT6368 的 MTK 特定接口 
• I2S0 –  ADC/DAC 接口 
– 适用于任何音频接口 
– 支持主输入的标准 I2S 
– 输入能力高达 192kHz/32 位 
– 输出能力高达 384kHz/32 位 
• I2S1 – ADC/DAC 接口 
– 支持主输出的标准 I2S 
– 最多 1 条数据线支持两个通道 
– 输入能力高达 192kHz/32 位 
– 输出能力高达 384k/32 位 
• I2S2 – ADC/DAC 接口 
– 支持主输入的标准 I2S 
– 最多 2 条数据线支持四个通道 
– 输入能力高达 192kHz/32 位 
– 输出能力高达 384kHz/32 位 
• I2S4 – ADC/DAC 接口 
– 支持主输出的标准 I2S 
– 最多 4 条数据线支持八个通道 
– 输入能力高达 192kHz/32 位 
– 输出能力高达 384kHz/32 位 
• I2S6 – ADC/DAC 接口 
– 支持主输入的标准 I2S 
– 最多 1 条数据线支持两个通道 
– 输入能力高达 192kHz/32 位 
– 输出能力高达 384kHz/32 位 
IP Pin Name 
I2S0 
I2SIN0_LRCK / 
I2SIN0_BCK / I2S0_MCK / 
I2SIN0_DI/ I2SOUT0_DO 
I2S1 
I2SIN1_LRCK / 
I2SIN1_BCK / I2S1_MCK / 
I2SIN1_DI/ I2SOUT1_DO 
I2S2 
I2SIN2_LRCK / 
I2SIN2_BCK / I2SIN2_DI/ 
I2SOUT2_DO 
I2S4 
I2SIN4_LRCK / 
I2SIN4_BCK / I2SIN4_DI0/ 
I2SOUT4_DO0 /  
I2SIN4_DI1/ 
I2SOUT4_DO1 / 
I2SIN4_DI2/ 
I2SOUT4_DO2 / 
I2SIN4_DI3/ 
I2SOUT4_DO3 
I2S6 
I2SIN6_LRCK / 
I2SIN6_BCK / I2SIN6_DI/ 
I2SOUT6_DO 
PMIC DL 
Interface 
AUD_CLK_MOSI 
AUD_DAT_MOSI0 
AUD_DAT_MOSI1 
PMIC UL 
Interface 
AUD_CLK_MISO 
AUD_DAT_MISO0 
AUD_DAT_MISO1 
 
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
MT8676 Android Audio 
User Manual 
Confidential B 
• MCLK 支持(I2S0/I2S1/I2S2/I2S4/I2S6) 
– 同步 MCLK 和 I2S BCK 
– 192k 模式下的能力高达 256fs 
– 96k 模式下的能力高达 512fs 
– 48k 模式下的能力高达 1024fs 
– 不支持 192fs 或 384fs 相关 
 
1.3.1.1 I2S 连接应用简介 
联发科在 HW 功能（IP：知识产权）和 Pad 之间采用高度灵活的设计。 
IP 和 Pad 之间的关系：可以使用 AUX_FUNC 来选择 Pad 连接到哪个 IP。 
 
表 1-1. GPIO 功能 
Aux Func.0 Aux Func.1 Aux Func.2 Aux Func.3 Aux Func.4 Aux Func.5 Aux Func.6 Aux Func.7 
B:GPIO15 O:I2SIN0_BCK - - - I1:ADSP_JTAG0_TRS
TN 
I0:SCP_JTAG_LITTLE
_TRSTN_VCORE 
I0:CONN_BGF_MCU
_TRST_B 
B:GPIO16 O:I2SIN0_LRCK - - - I0:ADSP_JTAG0_TCK I1:SCP_JTAG_LITTLE
_TCK_VCORE 
I0:CONN_BGF_MCU
_TCK 
B:GPIO17 I0:I2SIN0_DI - - - I1:ADSP_JTAG0_TMS I1:SCP_JTAG_LITTLE
_TMS_VCORE 
I1:CONN_BGF_MCU
_TMS 
B:GPIO18 O:I2SOUT0_DO - - - O:ADSP_JTAG0_TDO O:SCP_JTAG_LITTLE_
TDO_VCORE 
O:CONN_BGF_MCU
_TDO 
B:GPIO19 O:I2SIN1_BCK - - - I1:ADSP_JTAG0_TDI I1:SCP_JTAG_LITTLE
_TDI_VCORE 
I0:CONN_BGF_MCU
_TDI 
B:GPIO20 O:I2SIN1_LRCK - I0:MFG_EB_JTAG_TR
STN 
- I1:ADSP_JTAG1_TRS
TN 
I0:SCP_JTAG0_TRST
N_VCORE 
I0:CONN_WF_MCU_
TRST_B 
B:GPIO21 I0:I2SIN1_DI - I0:MFG_EB_JTAG_TC
K 
- I0:ADSP_JTAG1_TCK I1:SCP_JTAG0_TCK_
VCORE 
I0:CONN_WF_MCU_
TCK 
B:GPIO22 O:I2SOUT1_DO - I0:MFG_EB_JTAG_T
MS 
- I1:ADSP_JTAG1_TMS I1:SCP_JTAG0_TMS_
VCORE 
I1:CONN_WF_MCU_
TMS 
B:GPIO23 O:I2SIN2_BCK O:I2SIN0_MCK O:MFG_EB_JTAG_TD
O 
I0:DSI1_TE O:ADSP_JTAG1_TDO O:SCP_JTAG0_TDO_
VCORE 
O:CONN_WF_MCU_
TDO 
B:GPIO24 O:I2SIN2_LRCK O:I2SIN1_MCK I0:MFG_EB_JTAG_T
DI 
O:LCM1_RST I1:ADSP_JTAG1_TDI I1:SCP_JTAG0_TDI_V
CORE 
I0:CONN_WF_MCU_
TDI 
B:GPIO25 I0:I2SIN2_DI O:BPI_BUS20 I0:DSI2_TE O:CONN_BPI_BUS20 O:ANT_SEL20 - - 
B:GPIO26 O:I2SOUT2_DO O:BPI_BUS21 O:LCM2_RST O:CONN_BPI_BUS21 O:ANT_SEL21 - - 
B:GPIO113 O:MIPI4_D_SCLK I0:DSI1_TE - O:DMIC4_CLK - O:MD_GPS_L1_BLA
NK 
- 
B:GPIO114 B0:MIPI4_D_SDATA O:LCM1_RST - I0:DMIC4_DAT - O:MD_GPS_L5_BLA
NK 
- 
B:GPIO109 O:MIPI2_D_SCLK O:CONN_MIPI2_SCL
K 
O:DMIC1_CLK - - -- - 
B:GPIO110 B0:MIPI2_D_SDATA B0:CONN_MIPI2_SD
ATA 
I0:DMIC1_DAT - 
 
- - 
B:GPIO107 O:MIPI1_D_SCLK O:CONN_MIPI1_SCL
K 
O:DMIC3_CLK - 
 
- - 
B:GPIO108 B0:MIPI1_D_SDATA B0:CONN_MIPI1_SD
ATA 
I0:DMIC3_DAT - 
 
- - 
B:GPIO63 - - O:BPI_BUS22 O:SPI5_B_CLK O:I2SOUT4_DATA3 O:CONN_BPI_BUS22 - 
B:GPIO4 - - B0:SPI7_A_MI O:SPI5_B_CSB O:I2SIN4_LRCK O:CONN_TCXOENA_
REQ 
O:DBG_MON_A20 
B:GPIO62 - - B0:SPI7_A_MO - O:I2SOUT4_DATA0 O:WIFI_TXD O:DBG_MON_A21 
B:GPIO137 B1:SCL0 - O:SPI7_A_CLK - O:I2SOUT4_DATA1 O:MD32_0_GPIO0 O:DBG_MON_A22 
B:GPIO138 B1:SDA0 - O:SPI7_A_CSB - O:I2SOUT4_DATA2 O:MD32_1_GPIO0 O:DBG_MON_A23 
B:GPIO65 - O:CMFLASH0 - O:USB_DRVVBUS O:I2SIN4_BCK - O:DBG_MON_A24 
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
MT8676 Android Audio 
User Manual 
Confidential B 
Aux Func.0 Aux Func.1 Aux Func.2 Aux Func.3 Aux Func.4 Aux Func.5 Aux Func.6 Aux Func.7 
B:GPIO5 - O:CMFLASH1 B0:SPI5_A_MO I1:IDDIG I0:I2SIN4_DATA0 - O:DBG_MON_A25 
B:GPIO6 - O:CMFLASH2 B0:SPI5_A_MI I0:VBUSVALID I0:I2SIN4_DATA1 - O:DBG_MON_A26 
B:GPIO151 B1:SCL7 O:CMFLASH3 O:SPI5_A_CLK - I0:I2SIN4_DATA2 I1:MD32_0_RXD O:DBG_MON_A27 
B:GPIO152 B1:SDA7 - O:SPI5_A_CSB - I0:I2SIN4_DATA3 O:MD32_0_TXD O:DBG_MON_A28 
B:GPIO33 B1:KPROW0 O:I2SIN0_MCK O:BPI_BUS22 O:CONN_BPI_BUS22 - 
 
O:DBG_MON_A29 
B:GPIO34 B1:KPROW1 O:I2SIN1_MCK - - - - - 
B:GPIO94 O:BPI_BUS9 O:CONN_BPI_BUS9 - O:PWM_3 O:AUD_DAC_26M_C
LK 
- O:DBG_MON_A9 
B:GPIO95 O:BPI_BUS10 O:CONN_BPI_BUS10 - - O:I2SOUT4_DATA0 - O:DBG_MON_A10 
B:GPIO96 O:BPI_BUS11 O:CONN_BPI_BUS11 - - O:I2SOUT4_DATA1 - O:DBG_MON_A11 
B:GPIO97 O:BPI_BUS12 O:CONN_BPI_BUS12 B0:SPI6_B_MI - O:I2SOUT4_DATA2 - O:DBG_MON_A12 
B:GPIO98 O:BPI_BUS13 O:CONN_BPI_BUS13 O:SPI6_B_CLK - O:I2SOUT4_DATA3 - O:DBG_MON_A13 
B:GPIO99 O:BPI_BUS14 O:CONN_BPI_BUS14 O:SPI6_B_CSB - O:I2SIN4_BCK - O:DBG_MON_A14 
B:GPIO100 O:BPI_BUS15 O:CONN_BPI_BUS15 B0:SPI6_B_MO - I0:I2SIN4_DATA0 - O:DBG_MON_A15 
B:GPIO101 O:BPI_BUS16 O:CONN_BPI_BUS16 O:CLKM0 - I0:I2SIN4_DATA1 - O:DBG_MON_A16 
B:GPIO102 O:BPI_BUS17 O:CONN_BPI_BUS17 O:CLKM1 - I0:I2SIN4_DATA2 - O:DBG_MON_A17 
B:GPIO103 O:BPI_BUS18 O:CONN_BPI_BUS18 O:CLKM2 O:DMIC1_CLK I0:I2SIN4_DATA3 - O:DBG_MON_A18 
B:GPIO104 O:BPI_BUS19 O:CONN_BPI_BUS19 O:CLKM3 I0:DMIC1_DAT O:I2SIN4_LRCK - O:DBG_MON_A19 
B:GPIO153 B1:SCL8 O:I2SIN1_BCK - - O:UDI_TDO_4 I0:MFG_TSFDC_26M - 
B:GPIO154 B1:SDA8 O:I2SIN1_LRCK - - O:UDI_TDO_5 I0:MFG_TSFDC_SCF - 
B:GPIO125 O:CMMCLK2 I0:I2SIN1_DI - - I0:UDI_TDI_6 - - 
B:GPIO117 - O:I2SOUT1_DO I1:URXD2 O:CLKM2 I0:UDI_TDI_2 O:PWM_2 - 
B:GPIO161 B1:SCL12 O:I2SIN2_BCK I1:UCTS2 - O:CMVREF3 I0:MFG_TSFDC_SCK - 
B:GPIO162 B1:SDA12 O:I2SIN2_LRCK O:URTS2 - O:CMVREF2 I0:MFG_TSFDC_SDI - 
B:GPIO129 O:CMMCLK6 I0:I2SIN2_DI - - O:CMVREF1 - - 
B:GPIO121 - O:I2SOUT2_DO O:UTXD2 O:PWM_2 O:CMVREF0 - - 
B:GPIO78 B0:MSDC2_CLK O:I2SIN6_0_BCK B0:TP_GPIO11_AO I0:CONN_BGF_DSP_
L1_JCK 
I1:SCP_JTAG0_TCK_
VLP 
I1:SSPM_JTAG_TCK_
VLP 
I0:IO_JTAG_TCK 
B:GPIO79 B1:MSDC2_CMD O:I2SIN6_0_LRCK B0:TP_GPIO12_AO I1:CONN_BGF_DSP_
L1_JMS 
I1:SCP_JTAG0_TMS_
VLP 
I1:SSPM_JTAG_TMS
_VLP 
B1:IO_JTAG_TMS 
B:GPIO80 B1:MSDC2_DAT0 I0:I2SIN6_0_DI B0:TP_GPIO13_AO I0:CONN_BGF_DSP_
L1_JDI 
I1:SCP_JTAG0_TDI_V
LP 
I1:SSPM_JTAG_TDI_
VLP 
I1:IO_JTAG_TDI 
B:GPIO83 B1:MSDC2_DAT3 O:I2SOUT6_0_DO O:PWM_VLP I0:MD_INT3 B0:TP_GPIO4_AO O:SRCLKENA1 I0:SRCLKENAI0 
B:GPIO159 B1:SCL11 O:I2SIN0_BCK O:BPI_BUS16 O:ANT_SEL16 O:CMVREF4 O:MFG_TSFDC_TSSE
L0 
- 
B:GPIO160 B1:SDA11 O:I2SIN0_LRCK O:BPI_BUS17 O:ANT_SEL17 O:CMVREF5 O:MFG_TSFDC_RCK_
SELB 
- 
B:GPIO128 O:CMMCLK5 I0:I2SIN0_DI O:BPI_BUS18 O:ANT_SEL18 O:CMVREF6 
 
- 
B:GPIO120 O:PWM_1 O:I2SOUT0_DO O:BPI_BUS19 O:ANT_SEL19 O:CMVREF7 
 
- 
B:GPIO184 O:ANT_SEL11 O:I2SIN6_0_BCK I0:PTA_EXT_FREQ O:BPI_BUS11 O:CMVREF4 O:CLKM0 - 
B:GPIO185 O:ANT_SEL12 O:I2SIN6_0_LRCK I0:PTA_EXT_ACT O:BPI_BUS12 O:CMVREF5 O:CLKM1 - 
B:GPIO186 O:ANT_SEL13 I0:I2SIN6_0_DI I0:PTA_EXT_PRI O:BPI_BUS13 O:CMVREF6 O:CLKM2 - 
B:GPIO187 O:ANT_SEL14 O:I2SOUT6_0_DO O:PTA_EXT_WLAN_
ACT 
O:BPI_BUS14 O:CMVREF7 O:CLKM3 - 
 
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
MT8676 Android Audio 
User Manual 
Confidential B 
1.3.1.2 I2S 应用 
表 1-2. I2S 应用 
Interface Direction  Suggestions for I2S IF assignment 
I2S0  Input/Output   Reserved, for 3rd patry 
I2S1 Input/Output Reserved, for 3rd patry 
I2S2  Input/Output Reserved, for 3rd patry 
I2S4 Input/Output Ext DSP, SmartPA w/I DSP 
I2S6 Input/Output Reserved, for 3rd patry 
MTK proprietary Audio IF Input*4 
Output*4 
ADC *4, for Main Mic, Ref Mic, 3rd Mic, 4th Mic, DMIC*4 
DAC *4, for receiver, headset L, headset R, ext amp 
 
其他应用，请咨询 MTK ACS 团队以获得最佳 I2S IF 分配。 
对于 smartPA 的引脚应用，推荐使用 I2S4。 
  
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
MT8676 Android Audio 
User Manual 
Confidential B 
1.4 联发科 Aurisys 和开放式 DSP 
 概述 
人们对音质增强以增加聆听乐趣的需求日益增加。为了丰富使用移动设备的聆听体验，供应商提供的声音处理解
决方案的数量不断增加。 
Aurisys 的推出是为了促进 MTK 平台声音处理解决方案的开发和使用。Aurisys 是基于 Android 音频框架构建的框
架。它包括用于声音处理和调音的标准化接口、集成的 DSP 声音子系统和软件调试接口。本文将简要介绍 Aurisys
的概念。 
 
图 1-12. Aurisys 概念 
 
1.4.1.1 Aurisys 结构 
如图 1-13 所示，Aurisys 结构包含场景处理程序、库管理器、集成 DSP 框架、调制解调器/音频硬件子系统和标准
化软件接口： 
• Aurisys Scene Handler (ARSH) 
– Aurisys Scene Handler 是音频系统和声音处理 IP 之间的中间件，是按场景创建的。例如，Aurisys Playback 
Handler 是用于播放场景中的播放效果。它提供调用相应 IP 的接口并管理 IP。 
• Aurisys Library Manager (ARLM) 
– Aurisys 库管理器维护每个 Aurisys 场景处理程序的库信息。它包含声音算法 IP 的列表和状态。 
• Aurisys Software Interface (ARSI) 
– ARSI 是 Aurisys Software Interface 的缩写。它用于与声音增强任务进行交互。为了处理声音，提供了一个可
在 MTK 平台之间移植的统一接口。还包括在 PC 工具、APMCU 和 DSP 之间解析和传输参数的接口。该接口
设计易于使用，同时足够通用，因此可以轻松将新算法添加到现有框架中。 ARSI 和 ARSH 之间的区别在于，
ARSI 提供了 ARSH 和声音 IP 之间的接口；而 ARSH 提供了 Android Audio HAL 请求处理声音的接口。 
• Modem 
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
MT8676 Android Audio 
User Manual 
Confidential B 
– 调制解调器是指调制解调器 IC。MTK 内部芯片组包含一个 DSP，用于处理语音增强和语音编解码器。在
Aurisys 结构中，我们禁用 modem 内部的语音增强，但在调制解调器 IC 中保留编解码器，以便我们只需在
应用程序端集成的开放 DSP 中添加算法即可。 
• Audio HW 
– 指处理器与硬件设备之间传输声音数据的接口。这些设备包括扬声器、麦克风、耳机、蓝牙设备、 USB 设备
等。 
 
图 1-13. Aurisys 结构 
 
 数据路径客制指南 
使用 DSP 进行音频处理和输出时，需要在 DSP 中配置每条音频流的混音路由路径和通道配置信息。公共的 DSP 任
务配置提供了基本的参考配置，但在实际场景中，需要对各个 DSP 任务进行一些修改。本节主要介绍 ADSP 相关功
能定制所涉及的配置文件修改。 
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
MT8676 Android Audio 
User Manual 
Confidential B 
1.4.2.1 Kernel DTS 配置 
在 DTS 中，与 DSP 音频流相关的属性配置如下： 
 
图 1-14. DTS 属性列表 
 
每个 DSP 任务属性节点保存一个五位数组，其中数组顺序代表了该 DSP 任务使用的共享内存的 enable、dl_mem、
ul_mem、ref_mem 和大小。在所有属性中，用户需要根据每个 DSP 任务对 memif 的实际使用情况来配置 dl_mem
（下行）、ul_mem（上行）、ref_mem（参考信号）。例如，对于 mtk-dsp-sub-playback 任务，使用的 dl 输出
memif 为 DL0，那么对应的 dl_mem 就填充 0x0。大部分任务（比如 playback0）实际上并不使用 hw memif，所以需
要配置为 0xffffffff。memif 节点的枚举类型定义在 mt6897-afe-common.h 中。 
 
 
图 1-15. memif 定义 
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
MT8676 Android Audio 
User Manual 
Confidential B 
需要注意的是，在修改了 dts 中对应的 task 使用的节点后，同时也需要修改 hal 中对应的 task 使用的 pcm。Dsp-
playback task 对应修改 audio hal 中 AudioDspStreamManager.cpp 中的 openPlaybackTask 函数中的 mPlaybackUlindex 
等变量，选用对应 dl 的 playback stream，其中 dsp 输出的 channel 数量等也在该函数处修改，如图 1-16 所示。 
 
 
图 1-16. 音频 HAL PCM Config 配置 
 
DSP 下的各个 task 的架构如下： 
 
图 1-17. ADSP 架构 
 
1.4.2.2 音频路径配置 (AFE HW) 
在通过 audio dsp pcm stream 进行播放和录音之前，需要配置对应的 AFE hardware 通路，其配置过程遵循 tinyalsa
的标准流程，通过 tinymix 配置相应的 kcontrol 通路，并 open 和 start 相应的 hw 通路。图 1-18 为配置 DL3->ADDA 
的播放通路。 
 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
图 1-18. 播放音乐的音频路径 
 
在 audio_device.xml 中相应的配置如下： 
 
 
 
图 1-19. 将 Playback_3 传输到 PMIC 
 
1.4.2.3 音频路径配置 (INT ADSP) 
Auto adsp 中会存在多个 task (bus out)，且每个 task 根据需求及实际场景不同，需要配置不同的算法处理参数，例
如 channel in，channel out 及是否 bypass 算法等。同时，一般需要将各路 bus 的 channel 映射到最终输出的 TDM 格
式中对应的 channel 位置，即需要配置 channel map 信息，故提供 audio_dsp_config.xml 配置修改 auto dsp task 的各
项属性及 mix path。一般的 adsp 中的 task 架构如图： 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
图 1-20. ADSP 架构 
 XML 配置指令 
配置 XML 路径： 
• xml 在设备上的 path 如下：vendor/etc/audio_dsp_config.xml 
• 在 code 中 path 如下：device/<project_name>/ audio_dsp_config.xml 
 
 mixer_target 和 mixer_source 
XML 中将每个 dsp task 根据其在 dsp 中的 mixer 的位置分为了 sw_mixer_target 和 sw_mixer_source。对于 Task 
Music，其即是 sw_mixer_target，也是 sw_mixer_source。 
• sw_mixer_target 
对应于 sw_mixer 的输出端，如 Task Music, Task Playback, Task SubPlayback 
• sw_mixer_source 
对应于 sw_mixer 的输入端，如 Task PB0 (name=”sw_mixer_playback0”) 
task 作为 target 或者 source 是不可配置的，其角色是预定好的，但是可以通过 XML 配置 sw_mixer_source mix 到期
望的 target 中。对应的修改方法是在 XML 中，将对应 name 的 sw_mixer_source 节点写到对应的 sw_mixer_target
的节点下，如下例子表示 task PB0 (sw_mixer_playback0) 将会 mix 到 task music(sw_mixer_music)中。 
Ex1: 
        <sw_mixer_target name="sw_mixer_music" ch_in="2" ch_out="16" 
aurisys_on="1"> 
            <sw_mixer_source name="sw_mixer_playback0"> 
                <profile ch_in="2" ch_out="2" aurisys_on="0" 
                         ch_map="0x5555,0xaaaa"/> 
            </sw_mixer_source> 
       </sw_mixer_target> 
 
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
MT8676 Android Audio 
User Manual 
Confidential B 
目前可以配置的 sw_mixer_source 有：sw_mixer_playback0 ~ sw_mixer_playback15, sw_mixer_FM_ADSP , 
sw_mixer_hfp_client_rx, sw_mixer_anc, sw_mixer_extstream1, sw_mixer_extstream2, sw_mixer_ktv。 
 
 任务属性 
在每个 dsp task，由于场景需要，会配置不同的算法输入输出 channel 及 channel map 信息。在 XML 中，可以为每
个 task 分别配置下列属性： 
• for sw_mixer_target 
– ch_in：Task 的算法输入 channel 
– ch_out：Task 的算法输出 channel 
– aurisys_on：是否开启 Task 算法，仅在 ch_in = ch_out 时可配置成 0 
例如，在下面例子中，task music 的算法输入 channel 是 2，算法处理后的输出 channle 是 16，算法非 bypass。 
        <sw_mixer_target name="sw_mixer_music" ch_in="2" ch_out="16" aurisys_on="1"> 
            <sw_mixer_source name="sw_mixer_playback0"> 
                <profile ch_in="2" ch_out="2" aurisys_on="0" 
                         ch_map="0x5555,0xaaaa"/> 
            </sw_mixer_source> 
       </sw_mixer_target> 
• for sw_mixer_source，每个 profile 有如下属性 
– ch_in：Task 的算法输入 channel 
– ch_out：Task 的算法输出 channel 
– aurisys_on：是否开启 Task 算法，仅对 pb0~pb15 在 ch_in = ch_out 时配置成 0 可生效 
– ch_map：source 在向 sw_mixer_target 映射时的 channle map 信息，是一个数组，数组中的 index 表示 source 
的 channel index，对应的值是一个 16bit 的 value，每一个 bit 表示是否向 target 对应 channel 映射。如
ch_map="0x5555,0xaaaa" ，ch_map[0] = 0x5555，表示 source 的 channel 1 映射数值为 0x5555，对应 2 进制为
0101010101010101，则向 target 的 1,3,5,7,9,11,13,15 channel 映射。ch_map[1] = 0xaaaa，对应二进制位
1010101010101010，source 的 channel 2 向 target 的 2,4,6,8,10,12,14,16 映射. 
对 source task，一般其输入 channel 是由数据原始端给出的，如 audioflinger 送下来，可能会是任意 channel 数量，
所以在 source task 中，XML 可配置支持不同的 ch_in 的多种 profile，可以根据不同的 ch_in 选择不同的 ch_out, 
ch_map 等信息。例如，如下 task pb14 具有两个 profile，当进入 adsp 给到 task pb14 的 channel 是 2ch，则使用第
一个 profile，如果是 12ch，则使用第二个。 
        <sw_mixer_source name="sw_mixer_playback14"> 
            <profile ch_in="2" ch_out="2" aurisys_on="0" 
                  ch_map="0x5555,0xaaaa"/> 
            <profile ch_in="12" ch_out="12" aurisys_on="0" 
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
MT8676 Android Audio 
User Manual 
Confidential B 
                 
ch_map="0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x100,0x200,0x400,0x800,0x1000,0x2000,0x4000,0x8
000"/> 
        </sw_mixer_source> 
对于 music task，由于其即是 source，也是 target，则会取其 target 属性中的 ch_in 属性，在 source 中找到对应的
profile 作为其配置。 
 
 配置示例 
如下是一个 task pb0 配置示例： 
        <sw_mixer_target name="sw_mixer_music" ch_in="8" ch_out="12" aurisys_on="1"> 
            <sw_mixer_source name="sw_mixer_playback0"> 
                <profile ch_in="2" ch_out="2" aurisys_on="0" 
                         ch_map="0x4,0x8"/> 
                <profile ch_in="4" ch_out="4" aurisys_on="0" 
                         ch_map="0x1,0x2,0x4,0x8 "/> 
            </sw_mixer_source> 
        </sw_mixer_target> 
 
        <sw_mixer_target name="sw_mixer_playback" ch_in="16" ch_out="16" aurisys_on="1"> 
            <sw_mixer_source name="sw_mixer_music"> 
                <profile ch_in="8" ch_out="12" aurisys_on="1" 
                         ch_map="0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x100,0x200,0x400,0x800 
"/> 
            </sw_mixer_source> 
        </sw_mixer_target> 
 
对应的数据通路流程如图 1-21： 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
图 1-21. DSP 任务配置 
 总结 
本节主要介绍 Aurisys 音效框架，方便用户在适当位置整合所需算法。同时，面对 bus 场景音频通路的客制化需
求，介绍了 ADSP 中音频 mix 和 channel map 的配置方法。 
除了上述功能外，还可实现其他应用。但考虑到 DSP 资源有限，并发情况应谨慎设计。请访问联发科网站和客户
支持网站 (MediaTek On-Line，MOL) 以获取更多信息。 
 
 
 
 
 
 
 
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
MT8676 Android Audio 
User Manual 
Confidential B 
1.5 Audio 各模块 Debug 方法介绍 
 Audio Framework Debug 
打开工程模式 Dump audio framework 步骤如下（在 android 端 shell 操作）： 
1) adb shell am start -n com.mediatek.engineermode/.EngineerMode  
2) 向右滑动到“Hardware Testing”，点击“Audio” 
3) 进入“Audio Logger” 
4) 将“Output”、“AudioMixer”全部勾选(上行则选 Input) 
5) 复现问题 
6) 回到工程模式，取消相应勾选 
7) dump 的数据路径：/data/debuglogger/audio_dump 
 
动态开启 Audio framework debug log 
1) adb root 
2) adb shell setprop vendor .af.track.log 4 
3) adb shell setprop vendor .af.audioflinger .log 4 
4) adb shell setprop vendor .af.policy.debug 4 
5) adb shell setprop log.tag.APM_AudioPolicyManager V 
6) adb shell pkill audioserver 
 
 Audio HAL Debug 
Dump Audio HAL 命令如下（在 android 端 shell 操作）： 
下行播放： 
1) adb root 
2) adb shell “AudioSetParam SetDumpAudioStreamOut=268433409” 
3) 复现问题 
4) adb shell “AudioSetParam SetDumpAudioStreamOut=0” 
 
上行录音： 
1) adb root 
2) adb shell “AudioSetParam SetDumpAudioStreamIn=1” 
3) 复现问题 
4) adb shell “AudioSetParam SetDumpAudioStreamIn=0” 
 
Dump 路径： /data/vendor/audiohal/audio_dump，除去 audio HAL dump，还有 adsp task dump. 
 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
 
动态开启 Audio HAL debug log（在 android 端 shell 操作） 
streamout property: vendor.streamout.log 
streamin property: vendor.streamin.log 
 
下行播放： 
adb root 
adb shell setprop vendor.streamout.log xxx 
adb shell pkill audioserver 
 
上行录音： 
adb root 
adb shell setprop vendor.streamin.log xxx 
adb shell pkill audioserver 
 
xxx 选自图 1-22。 
 
图 1-22. Audio HAL enum 值 
 
举个例子，如果需要查看 audio 下行 write 节奏，可以在 android 端 shell 输入如下命令。 
adb root 
adb shell setprop vendor.streamout.log 16 
adb shell pkill audioserver 
 
06-12 05:35:55.104  6420  6494 D AudioALSAPlaybackHandlerBusNormal: +write(), flag = 2, 
buffer = 0xb400007c7b49d000, bytes = 2048 
06-12 05:35:55.104  6420  6494 D AudioALSAPlaybackHandlerBusNormal: -write(), flag = 2, 
buffer = 0xb400007c7b49d000, bytes = 2048 
06-12 05:35:55.104  6420  6494 D AudioALSAPlaybackHandlerBusNormal: +write(), flag = 2, 
buffer = 0xb400007c7b49d000, bytes = 2048 
06-12 05:35:55.105  6420  6494 D AudioALSAPlaybackHandlerBusNormal: -write(), flag = 2, 
buffer = 0xb400007c7b49d000, bytes = 2048 
06-12 05:35:55.107  6420  6494 D AudioALSAPlaybackHandlerBusNormal: +write(), flag = 2, 
buffer = 0xb400007c7b49d000, bytes = 2048 
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
MT8676 Android Audio 
User Manual 
Confidential B 
06-12 05:35:55.111  6420  6494 D AudioALSAPlaybackHandlerBusNormal: -write(), flag = 2, 
buffer = 0xb400007c7b49d000, bytes = 2048 
 
Playback/Capture log tag: 
AudioALSAStream|AudioALSAPlayback|AudioALSACapture|AudioDspStreamManager 
 
HFP Client log tag: 
AudioHfpDLTaskSink|AudioHfpULTaskSink|AudioBTCVSDControl|AudioHfpDLTaskSource|AudioHfpULTask
Source|AudioHfpController 
 
Dump HFP client 命令如下:  
adb root 
adb shell vendor.streamhfp.pcm.dump 1 
adb shell pkill audioserver 
 
 ADSP Debug 
ADSP Dump 请参考 Audio HAL Dump。 
 
查看 ADSP mobile log： 
Path: /data/debuglogger/mobilelog/adsp_log_xxx 
 
ADSP task 可以从 TASK_DEBUG_INFO 修改为 TASK_DEBUG_VERBOSE，参考图 1-23。 
再 build audio_dsp.img 烧入平台获取详细 log 打印。 
 
 
图 1-23. ADSP task log 配置 
 
更多详细 debug 方法请参考: Aurisys_exe_V1.xxx.xxx\DOC 
 
 
 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 Audio 虚拟化 Debug 
虚拟化主要涉及性能问题分析。分为：VAFE 和 VADSP . 
VAFE Case: 
数据不通过 ADSP。 关注两个线程 1. Writer/Reader 线程写/读数据;  2. vafe timer 线程更新 HW DMA Buffer Rp/Wp。 
Step 1：在 android trace log 搜索断音发生的 trace marker 关键字 afe_audio_xrun，搜到后，表示这份 trace 有抓到断
音位置。 
Step 2：把 trace log 拖到 perfetto，转成图形化界面进行查看。https://ui.perfetto.dev/   
Step 3:  查找 audio_xrun, trace marker 对应的线程 writer 或者 reader 线程，这个线程由于开了 mbrain 和 binder 通
信，被 binder 修改名称为 binderxxx。参考图 1-24。 
 
 
图 1-24. VAFE binder 线程 
 
Step 4: 找到 vafe_timer 线程，进行置顶操作。参考图 1-25。 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 
图 1-25. VAFE timer 
 
Step 5：定位问题点，对比前面正常写的时候这两个线程的状态，和异常情况下的线程状态。参考图 1-26。 
初步定位问题： 
1. vafer_timer_x 线程调度出现延迟，正常情况下应该每 5ms 调度一次，但在断音时却延迟到了 16ms 才进行调
度。 
2. vafe_timer_x 正常时间到达，但是长时间处于 runnable 状态，表示线程准备好运行，但 CPU 目前没有空闲。
可以查看这个时间段否有长时间运行的线程，找到阻塞 vafe_timer_x 的线程。 
3. vafe_timer_x 运行正常， binderxx 线程长时间处于 runnable 状态，表示 binderxx 线程被阻塞，可以查看这个
时间段是否有其他线程长时间占用 CPU，找到阻塞 binderxx 的线程。 
 
图 1-26. VAFE trace 分析 
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
MT8676 Android Audio 
User Manual 
Confidential B 
VADSP case: 
Android 端关注两个线程:  1. writer/reader 线程； 2. elapse_task 线程 
Yocto 端关注 5 个线程：1. ioreq_worker; 2. VM0-ioeventfd-0；3. vhost-adsp ; 4 dsp_recv_thread; 5, dsp_send_thread 
一次写数据的流程是 writer → wait ;  vhost-adsp → elapse_task → writer wake up → ioreq_worker → VM0-ioeventfd-0 
→ vhost-adsp → dsp_send_thread。 
一次读数据的流程是 reader → wait ;  dsp_recv_thread → vhost-adsp → elapse_task → reader wake up → ioreq_worker 
→ VM0-ioeventfd-0 → vhost-adsp → dsp_send_thread。 
Step 1：在 android trace log 搜索断音发生的 trace marker 关键字 audio_xrun，搜到后，表示这份 trace 有抓到断音
位置。 
Step 2：把 android 和 yocto trace log 分别拖到 perfetto，转成图形化界面进行查看。https://ui.perfetto.dev/ 
Step 3:  在 andriod trace 查找 audio_xrun, trace marker 对应的线程 writer 或者 reader 线程，这个线程由于开了
mbrain 和 binder 通信，被 binder 修改名称为 binderxxx，同时也找到 elapse_task 线程。参考图 1-27。 
 
 
图 1-27. VADSP android trace 
 
Step 4:  要判断问题是发生在 Android 端还是 Yocto 端，可以根据 elapse_task 的调用频率进行分析。如果在最后一
次异常时 elapse_task 的调用出现延迟，那么问题可能出现在 Yocto 端；如果 elapse_task 按时调用而问题仍然存
在，则问题可能在 Android 端。 
如果 elapse_task 的调用出现延迟，可以进一步查看在 elapse_task 应该到达的时间与实际调度的时间之间 CPU 的使
用情况。具体来说： 
• 如果发现有线程在这段时间内一直占用 CPU，则可以判断该线程可能进行了长时间调用并禁用了中断，从而导
致 adsp 事件中断响应延迟。 
• 如果没有发现这样的线程，则可以判断问题可能发生在 Yocto 端。Step 5：分析 Yocto trace log。把需要关注的
线程都置顶查看。参考图 1-28。 
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
MT8676 Android Audio 
User Manual 
Confidential B 
先查看 vhost-adsp 调度情况，正常情况下调度时间间隔是规律的，看能否找到异常位置。 
根据调用顺序，在异常位置查看是否线程有异常，比如线程长时间处于 runnable 状态，长时间 running，长时间处
于 sleep 状态。 
找到异常线程，结合这个时间的 CPU 调度情况，就可以找到线程被谁阻塞了。 
 
图 1-28. VADSP yocto trace 
 
 Tbox Audio Debug 
Tbox 通话常见声音异常问题，需要提供 tbox mobilelog, yocto sos mobilelog, Modem log 以及 VM dump 文件。 
tbox mobilelog 在 tbox shell 的/data/debuglogger/目录下，默认有开启； 
yocto sos mobilelog 在 yocto shell 的/data/debuglogger/目录下，默认有开启； 
Modem log 需要手动开启，在 tbox shell 输入如下命令： 
emdlogger_ctrl 6 
 
在/data/debuglogger/mdlog1 下会有 modem log; 
VM dump 需要手动开启，通话测试前在 tbox shell 输入如下命令： 
amixer -D mtk_phonecall cset name='Vmlog_on' 1 
 
通话结束后 dump 文件在 /var/log/audio_dump/xxxx.vm，同时也会生成通话的 EPL 文件和 ADSP dump 文件： 
/data/vendor/audiohal/audio_dump/下 xxx.pcm 和 xxxx.bin。 
 
注： 
 xxx_dl_in.pcm 表示 Modem 下行传输到 ADSP 算法处理前的数据。 
 xxx_dl_out.pcm 表示 Modem 下行经过 ADSP 算法处理后的数据。 
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
MT8676 Android Audio 
User Manual 
Confidential B 
 xxx_ul_in.pcm 表示 Modem 上行传输到 ADSP 算法处理前的数据。 
 xxx_ul_out.pcm 表示 Modem 上行经过 ADSP 算法处理后的数据。 
 VM 文件需要提供给 MTK 才能解析，解析后可以看到整个上行，下行的语音数据情况 。 
  
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
MT8676 Android Audio 
User Manual 
Confidential B 
1.6 附录 
 MTK MOL 
MTK 提供了一个名为 MTK Online 的论坛，用于分享常见问题、电子课程和重要公告：http://online.mediatek.com。 
您可以输入关键字来搜索相关的常见问题和电子课程；可以浏览文档树以进入相关的音频常见问题和电子课程 。 
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
MT8676 Android Audio 
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
# SRC0148 MT8676_Android_BT_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_BT_User_Manual_V1.0.pdf

SHA-256：e52de38fef8323a9db826821d4f3ca04dec7a3014f60d8c4003d79ba4561191c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0148.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-08-12
MT8676 Android BT User Manual 
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
MT8676 Android BT 
 User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2023-08-12 Liuqin Liu 正式版 
 
  
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
MT8676 Android BT 
 User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 BT ·············································································································································································· 4 
1.1 概述·········································································································································································· 4 
 简单介绍 ······················································································································································ 4 
 BT 缩略词 ····················································································································································· 4 
1.2 架构/进程概述 ························································································································································ 4 
 架构介绍 ······················································································································································ 4 
1.3 配置/客制化指南 ···················································································································································· 5 
 Profile 配置 ··················································································································································· 5 
1.4 常见问题/故障排除 ················································································································································ 6 
 支持的蓝牙功能集和认证 ··························································································································· 6 
 BQB ······························································································································································· 6 
 蓝牙问题提交流程 ······································································································································ 7 
 蓝牙音乐 (A2DP) 相关问题 ························································································································· 8 
 蓝牙扫描相关问题 ······································································································································ 9 
 蓝牙连接相关问题 ···································································································································· 10 
 蓝牙声音相关问题 ···································································································································· 11 
附件一 附加条款 ····························································································································································· 12 
 
 
图片目录 
图 1-1. BT 架构 ·········································································································································································· 5 
图 1-2. BT profile 配置 ······························································································································································· 6 
图 1-3. 问题提交流程 ································································································································································ 8 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 4 
 
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
MT8676 Android BT 
 User Manual 
Confidential B 
1 BT 
1.1 概述 
 简单介绍 
本章节介绍蓝牙（Bluetooth，BT）基本功能以及其常见问题的调试方法。 
MT8676 搭配的 BT 芯片是 MT6637。 
 
 BT 缩略词 
表 1-1. 缩略词 
缩略词 全称 释义 
A2DP Advanced Audio Distribution Profile 蓝牙音频传输模型协议 
AVRCP Audio/Video Remote Control Profile 蓝牙音/视频远程控制协议 
BQB Bluetooth Qualification Body 蓝牙认证 
BT Bluetooth 蓝牙 
DUT Device Under Test 测试中的设备 
FW Firmware 蓝牙固件 
HCI Host Controller Interface 主控芯片与蓝牙 dongle 交互的接口 
HFP Hands-free Profile 蓝牙设备控制电话 
LE Low Energy 低功耗蓝牙 
 
1.2 架构/进程概述 
 架构介绍 
MT8676 BT 架构如下图： 
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
MT8676 Android BT 
 User Manual 
Confidential B 
 
图 1-1. BT 架构 
 
1.3 配置/客制化指南 
 Profile 配置 
BT 有不同的应用场景，如 a2dp sink/hfp client/avrcp ct 等 profile，Android U 版本支持配置不同的 profile 来满足不同
的应用场景，通过在 device-vext.mk 中添加 PRODUCT_PROPERTY_OVERRIDES 的方式配置，公版文件路径为： 
device/mediateksample/<project name>/ device-vext.mk 
device/mediatek/<chip name>/ device-vext.mk 
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
MT8676 Android BT 
 User Manual 
Confidential B 
 
图 1-2. BT profile 配置 
 
1.4 常见问题/故障排除 
 支持的蓝牙功能集和认证 
• MT8676 + MT6637，controller 和 MTK stack 目前可以过蓝牙 5.4 认证。 
• 车机大部分客户使用的是第三方 stack，需要同第三方 stack 确认版本。 
 
 BQB 
1.4.2.1 什么是 BQB 
BQB：全称是 Bluetooth Qualification Body，一般称为蓝牙认证。 
 
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
MT8676 Android BT 
 User Manual 
Confidential B 
1.4.2.2 为什么需要通过 BQB 
蓝牙认证是任何使用蓝牙无线技术的产品所必须经过的证明程序；只有经过 SIG（Special Interest Group，蓝牙特兴
趣团体）测试认证符合蓝牙标准后，才有资格以蓝牙产品的名称投入市场，否则就是违法的。  
 
1.4.2.3 BQB 认证流程简单介绍 
车机产品，一般用的都是第三方 BT Stack，认证的时候，只有底层 BT Controller 的认证需要 MTK 协助，BT Stack 层
的认证，比如 Profile 的认证，需要第三方负责（如果采用 MTK stack，则由 MTK 负责）。 
如果认证中心对 MTK 的方案不熟，可能会要求提供认证测试方法和 Log 抓取方法，请 IDH 协助即可，因为 IDH 自
己的核心板就有 BT 测试的项目，可以参考。 
 
1.4.2.4 认证问题处理流程 
1. 认证中心反馈问题。  
2. Tier 1 梳理问题并区分与 MTK 相关还是与第三方相关。  
3. MTK 相关问题提交 IDH 复现，IDH 自己实验室先把问题复现出来。  
4. IDH 需要 MTK 协助再提 CR 进来。 
 
 蓝牙问题提交流程 
如果使用的是第三方 Stack，需要第三方 Stack 第一手分析，如果分析为 MTK 的问题，请提 CR，需要提供对应 Log
（抓取方式请咨询三方 Stack）以及告知问题时间点，并附上第三方 Stack 的分析过程。 
 
BT 问题提交 SOP 请参考下图： 
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
MT8676 Android BT 
 User Manual 
Confidential B 
 
图 1-3. 问题提交流程 
 
 蓝牙音乐 (A2DP) 相关问题 
1.4.4.1 症状 
• A2DP sink/src 卡顿 
• A2DP 无声 
 
1.4.4.2 检查点 [Stack check] 
• A2DP Source: 每两包 TX A2DP data 之间的 NOCP (Number of Complete Packet event) 的间隔大于 80ms 
案例 1: TX data 后, NOCP 回来较晚? Yes => MTK check 
案例 2: 上一包 NOCP 回来后, Stack TX 下一包 data 较晚? Yes => Stack check 
 
• A2DP Sink: 每两包 RX A2DP data 之间间隔大于 80ms。 Air log 确认对端发送间隔，如 OK => MTK check 
 
1.4.4.3 其他情况 
• 其它情况，需 host 与 FW 确认，说明理由，双方达成共识 
• 请提供 hci/fw/air log 
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
MT8676 Android BT 
 User Manual 
Confidential B 
 蓝牙扫描相关问题 
1.4.5.1 症状 
• 搜索不到对方设备 (Inquiry fail/LE scan fail) 
• 被对方设备搜索不到 (Inquiry scan/LE adv abnormal) 
 
1.4.5.2 检查点 [Stack check] 
• 查询不到设备： 
HCI log 中是否有开启查询的命令？ 
Yes => MTK check 
 
• LE 扫描不到设备： 
扫描不到期间的 HCI log 是否有开启 BLE scan 的命令？ 
Yes => MTK check 
 
• 查询到某设备的时间太长（performance）： 
描述清楚查询的起止时间，期间 host 是否有来下 inquiry 的命令？ 
Yes => MTK check 
 
• 对方搜索不到 DUT（Device Under Test，即测试中的设备）： 
搜索不到期间 HCI log 是否有下 enable inquiry scan (BT search) 或 enable advertising (LE search)的命令？ 
 Yes => MTK check 
 
1.4.5.3 其他情况 
• 了解备注资讯: 
(1) 是否有其他设备可以被搜索到 (Inquiry fail/LE scan fail) 
(2) DUT 搜索不到该设备时，用其他设备是否可以搜索到 (Inquiry scan/LE adv) 
(3) 结束前可以最多接收的响应数目，总的查询时间是否正常（查询不到设备） 
(4) 事件是否有上报，DUT 搜索不到该设备时，用其他设备是否可以搜索到（查询不到设备） 
 
• Log 需求：  
(1) BT FW log+ hci log + air log  
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
MT8676 Android BT 
 User Manual 
Confidential B 
(2) 提供问题发生的具体时间点 
 
 蓝牙连接相关问题 
1.4.6.1 症状 
• ACL/LE link 建立失败 (Page timeout/page scan/LE init/LE adv) 
 
1.4.6.2 检查点 [Stack check] 
• 连接失败 
建连期间对方是否有在回连（ 在 page timeout 附近，是否有对方引起的 Connection request event），如有可
认为正常现象 
 
Page timeout（一份 log 中会有多长 page timeout，确认是由 page timeout 导致的异常后，MTK check） 
 
偶发 HCI_Disconnection_Complete Reason 为 Connection Failed to be Established(0x3E) 通常为正常现象，在广播
信道 (37/38/39) 拥塞或干扰场景下更易出现。请先确认在干净环境下是否仍然容易出现此例，如是则 MTK 
check。 
 
1.4.6.3 其他情况 
• 连接问题以 HCI log 中是否看到连线建立为准 (connection complete event (status:success))，连线建立后 profile
建联失败，需要 Stack 先行切分具体的失败原因。如确认与 FW 相关 (Data no response? Data Transfer 
problem …)，再给出相关分析和 log 请 MTK check。 
 
• MTK check log 需求：  
BT FW log+ hci log + air log  
提供问题发生的具体时间点 
 
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
MT8676 Android BT 
 User Manual 
Confidential B 
 蓝牙声音相关问题 
1.4.7.1 症状 
• SCO/eSCO link 连不上、杂音、噪音、无声等。 
 
1.4.7.2 检查点  
• HFP 建立失败/断开失败 [Stack check] 
Host 下来的命令没有得到正确的 event 或是 Profile 没有得到正确的回应，确认 SCO/eSCO link 的设定（包括
codec/packet type 和 profile 设定是否一致）。 
 
• HFP 声音无声/卡顿/杂音 [Audio check] 
下行 (DL): Host(Audio) -> BT FW -> Air -> peer device -> 远端辅助机 
上行 (UL): 远端辅助机 -> peer device -> Air -> BT FW -> Host (Audio) 
 
1.4.7.3 其他情况 
• 若 air log 中和远端手机中听到的声音只是多了底噪，原本的 HFP 通话声音连贯无卡顿，蓝牙固件正常处理锚
点 => audio 的问题，需要 audio check 
 
 
  
 
 
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
MT8676 Android BT 
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
# SRC0149 MT8676_Android_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf

SHA-256：1fce1e40a576c515932d2f44c7339bb7688e24f98c0c1bd3a33ecc429705be5d

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0149.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2025-06-12
MT8676 Android Camera Sensor Driver 
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
MT8676 Android Camera Sensor Driver JSON Arch 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
1 Camera Driver JSON Arch ··········································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 配置/客制化指南 ···················································································································································· 4 
 如何添加一个新 Sensor ······························································································································· 4 
 如何添加一个新的 Tuning 文件 ················································································································ 27 
附件一 附加条款 ····························································································································································· 29 
 
 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
1 Camera Driver JSON Arch 
1.1 概述 
本章节主要说明 MT8676 Camera 在解耦 Refactor 之后的 sensor 移植方法以及相关问题的调试思路及方法。 
关于 Camera Refactor 的设计架构和原理，请参考如下文档： 
• MT8678_JSON_Design_CN_V1.0.pptx 
 
1.2 配置/客制化指南 
本节主要介绍 Camera Refactor 解耦架构方式下的移植指南。 
 如何添加一个新 Sensor 
JSON 化仅支持 YUV sensor 
1.2.1.1 移植文件列表 
Android: 
• Kernel Space 
‒ \kernel\kernel_device_modules-
6.1\arch\arm64\boot\dts\mediatek\cust_mt8676_camera_v4l2.dtsi 
‒ \vendor\mediatek\kernel_modules\mtkcam\imgsensor\src-v4l2\$(sensor_name).json 
‒ \vendor\mediatek\kernel_modules\mtkcam\imgsensor\src-v4l2\sensor_bin_list.json 
• User Space 
‒ \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\sensor\$(sensor_name).bin 
‒ \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\sensor\sensor_bin_list.bin 
‒ \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\camera\metadata\$(sensor_name)\$(sensor_name).json 
‒ \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\camera\tuning\$(sensor_name)_tuning_param.json 
 
1.2.1.2 在 Kernel 中添加 Sensor Firmware 文件 
Android： 
• Kernel Space 
– \vendor\mediatek\kernel_modules\mtkcam\imgsensor\src-v4l2 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
• User Space 
‒ \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\sensor\$(sensor_name).bin 
‒ \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\sensor\sensor_bin_list.bin 
 
$(sensor_name).json 文件由专用工具：Camera Firmware JSON Generator 产生。此工具是一个 web 网页界面，
开发者可根据页面提示，填入表单所需的内容，最后点击保存即可生成$(sensor_name).json 文件。 
网页工具表单的参数内容含义，可参考 MT8678 JSON Design CN.ppt 文档介绍。 
 
 
生成的$(sensor_name).json 文件需要保存到\vendor\mediatek\kernel_modules\mtkcam\imgsensor\src-
v4l2\目录。 
 
 
在src-v4l2/目录下，执行 python3 gen_sensor_firmware.py ./sensor_name.json 命令。 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
脚本执行成功后，在 src-v4l2/目录下生成sensor_name.bin 文件。 
 
在sensor_bin_list.json 中添加上面生成的sensor_name.bin 文件，并且生成 sensor_bin_list.bin 文件。 
 
 
 
 
将生成的$(sensor_name).bin 和 sensor_bin_list.bin 二进制文件，通过 adb push 到开发板的
/vendor/firmware/sensor/目录，重启开发板即可。 
 
 
注：通过 adb push firmware.bin 文件到开发板的/vendor/firmware/sensor/目录的方式，可以方便固件调
试，无需重复 rebuild driver source code。 
 
在确认 firmware 无需继续修改后，保存好 JSON file，并将更新的.bin 文件复制到
\vendor\mediatek\proprietary\hardware\mtkcam-core\external\firmware\sensor\目录，下次 full build
代码即可将所有 firmware 文件编译到 image 中。整体烧录后，开发板系统即包含了所有的 firmware.bin 文件。 
 
1.2.1.3 修改 dts 文件 
Android: 
\kernel\kernel_device_modules-6.1\arch\arm64\boot\dts\mediatek\cust_mt8676_camera_v4l2.dtsi 
 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
通过分析硬件原理图找到当前 sensor 是挂在哪个 I2C 下面，然后在对应的 I2C 下面增加 sensor 配置，如下所示： 
• 增加了 sensor0 
 
注：如果该 sensor 需走 legacy 方式，则需要在 sensor node 下新增一个属性：mediatek, legacy-search; 
 
 
 
 
关于 seninf 和 sensor 的关联，可以参考下图，seninf_top 里csi-port 的值是硬件实际连接的 csi-port。 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
与 dts 里配置对应的就是上电时序的部分（如下所示），需要参考 sensor 规格书中的上电时序来配置。 
 
 
在最新的 max96712mipiyuv_sensor.c 代码版本上 pw_seq 的格式如下： 
 
 
1.2.1.4 增加新的 meta 文件 
复制一份 metadata 模板文件夹（\vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\metadata\max96712_mipi_yuv），将文件夹名称修改为当前移植的 sensor 名字（例
如 xxxx_mipi_yuv）。 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
将 xxxx_mipi_yuv 文件夹下的所有 JSON 件名中及对应 JSON 文件内的 sensor name，修改为当前移植的 sensor 的名
字，注意字母的大小写格式要跟模板文件的写法一致。 
以 max96712_mipi_yuv 为模板，需要将所有包含 max96712_mipi_yuv、MAX96712_MIPI_YUV 字样的 JSON 文件夹名
称修改为当前所移植的 sensor 名字。 
 
 
 
注： 
• 一颗 sensor 有好几份不同类型的 JSON 文件（都是以_SENSOR_DRVNAME_xxx.json 作为后缀），每一份 JSON 都
需要按照上面的方式修改。 
• 如果是 raw 或者其他类型的 sensor，就要复制对应 sensor 类型的 JSON 并以此为基础进行修改。 
• 如需修改分辨率，可以参考下面的 JSON，改为新的分辨率。 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
修改完毕后，将xxxx_mipi_yuv/文件夹，通过 adb push 的方式，push 到开发板的
/vendor/firmware/camera/metadata/文件夹，重新启动即可。 
在确认 metadata 无需继续修改后，请将对应的 metadata 文件放到
\vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\metadata\max96712_mipi_yuv 目录下，然后执行完整编译工程的命令，即可将所有
firmware 文件编译到 image 中。整体烧录后，开发板系统即包含了所有的 metadata 文件。 
注：若在 full build 过程中出现类似下面的错误，则表示不同版本之间会有些原生 basic tag 的差异， 版本迁移的时
候会同步更新一些 tag 到mtk_metadata_tag.h，进而需要使用脚本更新 MapStringToEnum.cpp。 
mtkcam-core/external/MapStringToEnum.cpp:738:41: error: use of undeclared identifier 
'MTK_MFNR_FEA                                       TURE_STORE_BSS2META'; did you mean 
'MTK_MFNR_FEATURE_START'? 
{"MTK_MFNR_FEATURE_STORE_BSS2META", MTK_MFNR_FEATURE_STORE_BSS2META}, 
^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
 
更新脚本执行方法：进入 mtkcam-core/external/目录，执行 python MapStringToEnum.py。 
再次重新进行 full build 命令即可。 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
1.2.1.5 配置 Sensor Format 
请在 web 界面 Camera Firmware JSON Generator 中修改。 
根据 bridge 输出的 format 配置 UYVY 或者 YUYV： 
 
查找所有配置sensor_output_dataformat 的地方改为实际的 format。 
1.2.1.6 配置 modestruct  
请在 web 界面 Camera Firmware JSON Generator 中修改。 
与 vendor 确认 setting 的相关参数填入到结构体中。 
 
Pclk->pixel clock，单位 Hz 
Linelength->HTS 
Framelength->VTS 
Linelength × framelength = pclk 
Grabwindow_width-> camera size 宽 （在 MT8676 上没有这个值，之后会填在 solution 的位置） 
Grabwindow_height-> camera size 高（在 MT8676 上没有这个值，之后会填在 solution 的位置） 
Mipi_pixel_rate-> mipi datarate × lane_number/bitdepth，YUV bitdepth = 16 
 
 
下图是借用了之前版本的一个对 winsize info 的解释，来描述各个字段的含义： 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
限制: full size（4:3）或 full size（16:9）的宽和高需要进行 4 倍数对齐。 
配置 sensor 输出的 size 宽高，与 Grabwindow_width/Grabwindow_height size 一致 
 
Grab window 要求： 
1. 设置的宽必须是 16 的倍数，高必须为 4 的倍数。 
2. 相同比例下视角一致：4:3 与 16:9 要求 sensor 输出的 window 保证水平方向和 full size 视角一致。 
3. Grab window 设置建议和 sensor 输出的 window 一致。 
特殊情况下是：grabwindow_width(height) ≤ sensor output width(height)-startx(y) 
1.2.1.7 配置 static_ctx 
请在 web 界面 Camera Firmware JSON Generator 中修改。 
如下图所示： 
1. sensor_id 字段是填对应的 sensor ID。 
2. i2c_add_table 一般只配置 0x52 即可，就是实际的解串器的地址。 
3. 配置分辨率，这里就是前面说的 grabwindow 的值。 
4. 配置mipi_lane_num，这里表示是 MIPI 的 lane 的个数。 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
5. cam_type 是按照模组场景的类型填写，如果是单 sensor 的话，可以填 SENSOR_TYPE_SINGLE，它有如下值可
以选择： 
 
– SENSOR_TYPE_COMB_AVM 表示组帧 AVM 
– SENSOR_TYPE_SINGLE 表示单路 VC sensor 
– SENSOR_TYPE MUTI 表示 multicam  
– SENSOR_TYPE_MULTI_ASYNC 表示各路 VC 相互独立不影响的 multicam 
– SENSOR_TYPE_NON_COMB_AVM 表示非组帧 AVM 
6. sensor_output_dataformat 表示模组输出的数据的 format，填实际的 format 即可。 
 
 
7. 关于 multicam group info 的配置，在 JSON web tool 里可以参考如下配置： 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
 
最终生成到 JSON file 里会是下面这样的格式，分别是 1 个 master sensor 和 4 个 slave sensor 的 dts 里的 sensor ID 和
VC 信息。 
 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
如果配置为 SENSOR_TYPE_MULTI_ASYNC，还需要添加如下配置： 
 
 
1.2.1.8 配置 VC 信息 
请在 web 界面 Camera Firmware JSON Generator 中修改。 
如果是单个 VC，可以进行如下配置： 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
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

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
1.2.1.11 配置 get_sensor_usage 
请在 web 界面 Camera Firmware JSON Generator 中修改。 
 
它的值可以选择下面几种，COMB 表示组帧 AVM，MUTI 表示 multicam，NONCOMB 表示非组帧 AVM，
MUTICAM_ASYNC 表示 slave 独立不会相互影响的 multicam，单 sensor 的话配置为 SINGLE。 
 
 
1.2.1.12 配置 Streaming Control 
请在 web 界面 Camera Firmware JSON Generator 中修改。 
初始化的设定全部放到 sensor_init() 函数里。MIPI enable 和 disable 函数放到streaming_control() 函数
中。 
 
 
1.2.1.13 subdrv_static_ctx 的成员解析 
成员 意义 
sensor_id Sensor ID defined in kd_imgsensor.h. 
reg_addr_sensor_id Sensor register address where sensor ID is read. Up to 3 bytes.  
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
成员 意义 
i2c_addr_table I2C write ID, end in 0xff, 4 for maximum. e.g., i2c_addr_table = 
{0x20, 0x6e, 0xff},. 
eeprom_info The address of eeprom_info_struct. If there is no eeprom device, 
set to 0. 
eeprom_num Array size of the eeprom_info_struct. If there is no eeprom 
device, set to 0. 
resolution Full pixel size of sensor output. 
mirror Set IMAGE_HV_MIRROR if the sensor orientation is 180 degrees 
difference from module orientation. 
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
ana_gain_type Sony: type 0;       OV: type 1;       Samsung: type 2;       Hinyx: type 
3;       GC: type 4 
ana_gain_step Minimum valid step of analog gain. 1024base. 
ana_gain_table Use valid analog gain table. Remove unsuitable value which is not 
linearity. 1024base. 
ana_gain_table_size Size of analog gain table 
min_gain_iso Set minimum ISO 100. 
exposure_def Default exposure line. Set 0x3D0. 
exposure_min Minimum exposure line 
exposure_max Maximum exposure line 
exposure_step Minimum valid step of exposure line 
exposure_margin Maximum margin of exposure line 
frame_length_max Maximum framelength 
ae_effective_frame AE effective frame 
frame_time_delay_frame The frame “frame length” setting takes effect. Sony sensor is filled 
in 3; other sensors are filled in 2. 
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

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
成员 意义 
seamless_switch_support If sensor supports seamless switch, set 1 to enable seamless 
switch function. 
temperature_support Set to 1 if sensor supports temperature sensor readout. 
g_temp Implement get temperature function. 
g_gain2reg Implement analog gain to register mapping rule. 
s_gph Implement set enable/disable group hold function. 
s_cali Implement the function to write data from eeprom_info_struct to 
sensor (e.g., QSC, cross-talk, …) 
Member Meaning 
reg_addr_stream Sensor register address where streaming on/off is controlled. 
reg_addr_mirror_flip Sensor register address where mirror/flip on/off is controlled. No 
use to set to 0. 
reg_addr_exposure Sensor register address where exposure line is set. Up to 3 
channels of exposure. Up to 3 bytes. 
long_exposure_support Set to 1 if sensor supports long exposure left shift function. 
reg_addr_exposure_lshift Sensor register address where long exposure left shift is set. 
reg_addr_ana_gain Sensor register address where analog gain is set. Up to 3 channels 
of exposure. Up to 3 bytes. 
reg_addr_frame_length Sensor register address where framelength is set.  
reg_addr_temp_en If “temperature_support” is set to 1. Sensor register address 
where temperature sensor on/off is controlled. 
reg_addr_temp_read If “temperature_support” is set to 1. Sensor register address 
where temperature output is read. 
reg_addr_auto_extend For Sony sensor, sensor register address where auto extend 
function enable/disable is controlled. 
reg_addr_frame_count For Samsung sensor, sensor register address where frame count is 
read to determine if sensor stream is off or not. 
reg_addr_fast_mode For Sony sensor, sensor register address where fast mode on/off 
is controlled. 
init_setting_table The address of sensor initial setting table 
init_setting_len Array size of the sensor initial setting table 
mode The address of subdrv_mode_struct 
sensor_mode_num Array size of the subdrv_mode_struct 
list The address of customized feature control list 
list_len Array size of the customized feature control list 
checksum_value The calculated value when Test Pattern output, for Camera Auto 
Test 
 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
1.2.1.14 配置 Sensor Mode 
Subdrv_mode_struct mode_struct[] 这个结构体数组是用来存不同 Sensor Mode 的数据配置的。 
下面以 Preview 为例子说明了一些需要客户修改的字段，对于 YUV sensor，一般后面的 Sensor Mode 和 Preview 是
完全一样的。对于 raw sensor 可能会有差异，根据实际需要来配置。 
 
 
 
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
MT8676 Android Camera Sensor Driver JSON Arch 
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

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
在 adapter 名字开头的 imgsensor 的代码里往往是通过 subdrv_call 的方式来调用到 driver 代码里的，就是上面的函
数 list，比如： 
 
上面这个调用就会 call 到上面函数 list 里的get_sensor_id。 
上面 list 里有很多 common 开头的函数，这个部分用的是通用的处理流程。不需要在 sensor driver 里特别实现， 
下面就不做过多介绍了。 
针对贵司可能改到的 get_imgsensor_id 和open 函数，请参考下面两个章节。 
 get_imgsensor_id 函数 
开机 search sensor 时会通过get_imgsensor_id 函数读取 ID。若能成功读到 ID，在 UI 上显示 Camera APP 的图
标。 
下面函数主要有两个功能：一获取 sensor ID，二判断是否有连接到模组。 
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
MT8676 Android Camera Sensor Driver JSON Arch 
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

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
注： 
1. 关于分辨率的说明 
由于场景不同，给到 User Space 的图的大小和实际 seninf 收取的 VC 的大小不同， 
所以在 driver 里会有两个分辨率，客户可以以 max96712isx 这个非组帧 AVM 的 driver 为例。 
搜索下面的宏可以对照配置。 
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
MT8676 Android Camera Sensor Driver JSON Arch 
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

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
3. UT 测试指令： 
C:\Users>adb shell sentest_v4l2    //just search sensor, not streaming 
 
[show_Sensors]sensorNum 2 
[show_Sensors]name:SENSOR_DRVNAME_OV05A20_MIPI_RAW type:0 
[show_Sensors]index:0, SensorDevIdx:1 
[show_Sensors]name:SENSOR_DRVNAME_IMX576_MIPI_RAW type:0 
[show_Sensors]index:1, SensorDevIdx:2 
[main]Param: 1 <sensorDev> <scenario> <fps> 
[main]<sensorDev> : main(1), Sub(2), Main2(4), sub2(8), Main3(16) 
[main]<scenario>  : Pre(0), Cap(1), VD(2), slim1(3), slim2(4) 
显示 sensorNum 不为 0，并且展示了传感器的具体名称，说明传感器搜索成功。接下来测试传感器的输出  
 
C:\Users> adb shell sentest_v4l2  1 0     //search sensor, then open main (1) sensor 
preview (0) 
 
 
 
 
 
 
 
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
MT8676 Android Camera Sensor Driver JSON Arch 
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

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 28 
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
添加方法： 
Porting 一个新 sensor，在 tuning 的部分，只需要新增一份${SENSOR_DRIVER_NAME}_tuning_param.json 文件即
可。 
 
注： 
• 若需编译进 image，则将 JSON 文件放到 \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\tunin\目录 
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

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 29 
MT8676 Android Camera Sensor Driver JSON Arch 
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
# SRC0150 MT8676_Android_Camera_Driver_User_Manual_V1.2.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Camera_Driver_User_Manual_V1.2.pdf

SHA-256：74c716f63dfe7a9e0d9b6c1571a5b3e87cf5e403df10ee03c0681c6ddc4f3c14

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0150.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.2 
出版日期:  2025-06-13
MT8676 Android Camera Driver 
User Manual 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 Jianmin Zhou 正式版 
1.1 2024-10-15 Jianmin Zhou 在 1.3.1.9 配置 static_ctx 中增加 multicam 配置信息 
1.2 2025-06-13 Jianmin Zhou 
1.在 1.3.1.5 修改 dts 文件中增加非 JSON 化 sensor 的配
置字段 
2.在 1.3.1.6 增加新的 Meta 文件中增加 JSON 化 yuv 
sensor metadata 配置 
3.在 1.3.1.9 配置 static_ctx 和 1.3.1.13 配置
get_sensor_usage 函数中增加 multicam_async 模式配置 
 
  
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
MT8676 Android Camera Driver 
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
附件一 附加条款 ····························································································································································· 25 
 
  
 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
1 Camera Driver 
1.1 概述 
本章节主要说明 MT8676 Camera 移植方法以及相关问题的调试方法和思路。 
 
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

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 如何添加一个新的 Sensor 
这部分对于 YUV 和 Raw sensor 步骤基本一致。 
 
1.3.1.1 移植文件列表 
• Config Files 
– \device\mediatek\mt6897\CameraConfig.mk 
– \device\mediatek\mt6897\device-camera.mk 
– \kernel\kernel_device_modules-6.1\arch\arm64\configs\mgk_64_k61_defconfig 
• Kernel Space 
– \kernel\kernel_device_modules-6.1\drivers\misc\mediatek\imgsensor\inc\kd_imgsensor.h 
– \kernel\kernel_device_modules-
6.1\arch\arm64\boot\dts\mediatek\cust_mt8676_camera_v4l2.dtsi 
– \vendor\mediatek\kernel_modules\mtkcam\imgsensor\src_v4l2 
• User Space 
– \device\mediatek\vendor\camera\kernel-headers\kd_imgsensor.h 
– \vendor\mediatek\proprietary\custom\common\hal\imgsensor_metadata\sensor\ 
– \vendor\mediatek\proprietary\custom\mt6897\hal\imgsensor_metadata\ 
– \vendor\mediatek\proprietary\hardware\mtkcam-core\external\firmware\metadata\ 
1.3.1.2 修改 Config 文件 
• \device\mediatek\mt6897\CameraConfig.mk 
– CUSTOM_HAL_IMGSENSOR = xxxx_mipi_raw xxxx_mipi_raw xxxx_mipi_yuv 
– CUSTOM_KERNEL_IMGSENSOR = xxxx_mipi_raw xxxx_mipi_raw xxxx_mipi_ yuv 
•  \device\mediatek\mt6897\device-camera.mk 
– CUSTOM_HAL_IMGSENSOR = xxxx_mipi_raw xxxx_mipi_raw xxxx_mipi_ yuv 
• \kernel\kernel_device_modules-6.1\ arch\arm64\configs\mgk_64_k61_defconfig 
– CONFIG_CUSTOM_KERNEL_IMGSENSOR = “xxxx_mipi_raw  xxxx_mipi_raw xxxx_mipi_yuv” 
 
在上面三个地方增加新的 sensor name。 
 
1.3.1.3 在 Kernel 中添加 Sensor 文件 
• \vendor\mediatek\kernel_modules\mtkcam\imgsensor\src_v4l2\common\$CamDrv\ 
参考其他 sensor，在上面目录增加自己的 sensor driver 的目录，命名格式可以参考下图： 
 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 
 
1.3.1.4 添加 Sensor ID 和 Sensor Name 
• \device\mediatek\vendor\camera\kernel-headers\kd_imgsensor.h 
• \kernel\kernel_device_modules-6.1\drivers\misc\mediatek\imgsensor\inc\kd_imgsensor.h 
 
在以上两个文件内都添加 sensor ID 和 sensor name： 
• 添加 sensor ID 
 
 
• 添加 sensor name 
 
 
1.3.1.5 修改 dts 文件 
\kernel\kernel_device_modules-6.1\arch\arm64\boot\dts\mediatek\cust_mt8676_camera_v4l2.dtsi 
通过分析硬件原理图找到当前 sensor 是挂在哪个 I2C 下面，然后在对应的 I2C 下面增加 sensor 配置，如下所示： 
• 增加了 sensor0 
 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
如果更新了 JSON 化功能, 此 sensor 为 raw sensor，或者是 YUV sensor，但是不走 JSON 化 flow，需要修改如下图，
增加”mediatek,legacy-search”字段: 
 
 
 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 
 
以 max96712 为例： 
 
 
1.3.1.6 增加新的 Meta 文件 
参考 max96712_mipi_yuv 文件进行修改添加，可以直接复制，然后修改文件名和文件内的 sensor name。 
 
• \vendor\mediatek\proprietary\custom\common\hal\imgsensor_metadata\sensor\ 
• \vendor\mediatek\proprietary\custom\mt6897\hal\imgsensor_metadata\ 
 
如需增加新的分辨率，可以参考以下代码。 
 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 
 
• \vendor\mediatek\proprietary\hardware\mtkcam-core\external\firmware\metadata\ 
如果更新了 JSON 化功能，YUV sensor 还需要添加 metadta JSON 文件，参考如下，复制一份后修改文件名和文件内
的 sensor name 即可。 
 
 
1.3.1.7 配置 Sensor Format 
根据 bridge 输出的 format， 配置 UYVY 或者 YUYV： 
\vendor\mediatek\kernel_modules\mtkcam\imgsensor\src_v4l2 
\common\max96712_mipi_yuv/max96712mipiyuv_Sensor.c 
查找所有配置 sensor_output_dataformat 的地方改为实际的 format。 
 
 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
1.3.1.8 配置 Modestruct  
与供应商确认设置的相关参数，并将其填入结构体中。 
 
Pclk->pixel clock， 单位 Hz 
Linelength->HTS 
Framelength->VTS  
linelength × framelength × fps= pclk 
Grabwindow_width-> camera size 宽（在 MT8676 上没有这个值，之后会填在 solution 的位置） 
Grabwindow_height->camera size 高（在 MT8676 上没有这个值，之后会填在 solution 的位置） 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 
 
下图是借用了之前版本的一个对 winsize info 的解释，来描述各个字段的含义 
 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 
限制: full size（4:3）或 full size（16:9）的宽和高需要进行 4 倍数对齐。 
配置 sensor 输出的宽高，与 Grabwindow_width/Grabwindow_height 的大小一致。 
Grab window 要求： 
1. 设置的宽必须是 16 的倍数，高必须为 4 的倍数。 
2. 相同比例下视角一致：4:3 与 16:9 要求 sensor 输出的 window 保证水平方向和 full size 视角一致。 
3. Grab window 设置建议和 sensor 输出的 window 一致。 
特殊情况下是：grabwindow_width(height) ≤ sensor output width(height)-startx(y) 
 
1.3.1.9 配置 static_ctx 
如下图所示： 
1. sensor_id 字段需填对应的 sensor ID。 
2. i2c_add_table 一般只配置 0x52 即可，即实际的解串器的地址。 
3. 配置分辨率，这里就是前面提到的 grabwindow 的值 
4. 配置 mipi_lane_num，这里表示是 MIPI 的 lane 的个数。 
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

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Android Camera Driver 
User Manual 
Confidential B 
– SENSOR_TYPE_SINGLE 表示单路 VC sensor 
– SENSOR_TYPE_MULTI 表示 multicam 
– SENSOR_TYPE_MULTI_ASYNC 表示各路 VC 相互独立不影响的 multicam 
– SENSOR_TYPE_NON_COMB_AVM 表示非组帧 avm 
如配置为 SENSOR_TYPE_MULTI，还需配置 group_info 如下： 
 
 
如果配置为 SENSOR_TYPE_MULTI_ASYNC，则还需要配置 group_dt_info 如下： 
推荐使用 SENSOR_TYPE_MULTI_ASYNC，SLAVE 驱动之间不会相互影响。 
 
 
6. sensor_output_dataformat 表示模组输出的数据的 format，填实际的 format 即可 
 
 
 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
1.3.1.10 配置 VC 信息 
如果是单个 VC，可以进行如下配置： 
 
 
如果是有多个 VC，可以进行如下配置，主要是修改 channel 和 user_data_desc： 
 
 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
1.3.1.11 配置获取 Sensor ID 函数 
  
 
1.3.1.12 配置 Sensor Init 函数 
下面的函数内主要是配置模组的设置，需要客户和供应商调试生成。 
 
 
1.3.1.13 配置 get_sensor_usage 函数 
 
它的值可以选择下面几种，COMB 表示组帧 AVM，MUTI 表示 multicam，MUTI_ASYNC 表示各路 VC 独立不相
互影响的 multicam，NONCOMB 表示非组帧 AVM，单 sensor 的话配置为 SINGLE。 
 
 
1.3.1.14 配置 Streaming Control 
初始化的设定全部放到 sensor_init() 函数里。MIPI enable 和 disable 函数放到 streaming_control() 函数中。 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 
 
1.3.1.15 subdrv_static_ctx 的成员解析 
Member Meaning 
sensor_id Sensor ID defined in kd_imgsensor.h.  
reg_addr_sensor_id Sensor register address where sensor ID is read. Up to 3 bytes. 
i2c_addr_table 
I2C write ID, end in 0xff, 4 for maximum. E.g., i2c_addr_table = {0x20, 
0x6e, 0xff}, . 
eeprom_info The address of eeprom_info_struct. If there is no eeprom device, set to 0.  
eeprom_num Array size of the eeprom_info_struct. If there is no eeprom device, set to 0. 
Resolution Full pixel size of sensor output. 
mirror Set IMAGE_HV_MIRROR if the sensor orientation is 180 degrees difference from 
module orientation. 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
Member Meaning 
exposure_min Minimum exposure line. 
exposure_max Maximum exposure line. 
exposure_step Minimum valid step of exposure line. 
exposure_margin Maximum margin of exposure line. 
frame_length_max Maximum framelength 
ae_effective_frame AE effective frame 
frame_time_delay_frame The frame “frame length” setting takes effect. Sony sensor filled in 3; other sensors 
filled in 2. 
start_exposure_offset Parameter tuned in CTS sensor fusion test. 
pdaf_type Reference enum IMGSENSOR_PDAF_SUPPORT_TYPE_ENUM. 
hdr_type Reference enum IMGSENSOR_HDR_SUPPORT_TYPE_ENUM. 
seamless_switch_support If sensor supports seamless switch, set 1 to enable seamless switch function.  
temperature_support Set to 1 if sensor supports temperature sensor readout. 
g_temp Implement get temperature function. 
g_gain2reg Implement analog gain to register mapping rule. 
s_gph Implement set enable/disable group hold function. 
s_cali Implement the function to write data from eeprom_info_struct to sensor (e .g., QSC, 
cross-talk, …) 
reg_addr_stream Sensor register address where streaming on/off is controlled. 
Reg_addr_mirror_flip Sensor register address where mirror/flip on/off is controlled. No use when set to 0. 
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
whether sensor stream is off or not. 
reg_addr_fast_mode For Sony sensor, sensor register address where fast mode on/off is controlled. 
init_setting_table The address of sensor initial setting table 
init_setting_len Array size of the sensor initial setting table 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
Member Meaning 
mode The address of subdrv_mode_struct 
sensor_mode_num Array size of the subdrv_mode_struct 
list The address of customized feature control list 
list_len Array size of the customized feature control list 
checksum_value The calculated value when Test Pattern output, for Camera Auto Test 
 
1.3.1.16 配置 Sensor Mode  
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

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Android Camera Driver 
User Manual 
Confidential B 
1.3.1.17 Driver 功能 
 Driver 操作函数 list 
Driver 函数的 list 如下： 
 
 
在以 adapter 名字开头的 imgsensor 的代码里，其往往是通过 subdrv_call 的方式来调用到 driver 代码里的，就是上
面的函数 list，比如： 
 
上面显示的调用就会 call 到上面函数 list 里的 get_sensor_id。 
上面 list 里有很多 common 开头的函数，这个部分是用的通用的处理流程。不需要在 sensor driver 里特别实现， 
下面就不做过多介绍了。 
针对贵司可能改到的 get_imgsensor_id 和 open 函数，请参考下面两个章节。 
 
 get_imgsensor_id 函数 
开机 search sensor 时会通过 get_imgsensor_id 函数读取 ID。若能成功读到 ID，在 UI 上显示 Camera APP 的图标. 
下面函数主要有两个功能：一获取 sensor ID，二判断是否有连接到模组 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 
 
 Open 函数 
每次进 camera 时会调用。 
读 sensor_id，确认 I2C 通信是否正常。 
调用 sensor_init 函数初始化 ctx 结构体中的一些变量。 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 
 
 
 
批注： 
1. 关于分辨率的说明 
由于场景不同，给到 User space 的图的大小 和 实际 seninf 收取的 VC 的大小不同，所以在 Driver 里会有两个分辨
率，客户可以以 max96712isx 这个非组帧 avm 的 Driver 为例。 
搜索下面的宏进行对照配置。 
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
MT8676 Android Camera Driver 
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

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8676 Android Camera Driver 
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
显示 sensorNum 不为 0，并且展示了传感器的具体名称，说明传感器搜索成功，接下来测试传感器的输出。  
 
C:\Users> adb shell sentest_v4l2  1 0     //search sensor, then open main (1) sensor preview 
(0) 
 
 
查看 seninf 状态的指令如下，查到结果后，可以发给联发科技确认。 
cat /sys/devices/platform/soc/1a00e000.seninf-top/status 
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
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 
 
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
MT8676 Android Camera Driver 
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
# SRC0151 MT8676_Android_Camera_Turbo_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Camera_Turbo_User_Manual_V1.1.pdf

SHA-256：e914c6daaad72d23572f4a8b89efbddd775c133afa03c4d8180a5e24016b956f

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0151.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.1 
出版日期：  2024-11-12 
MT8676 Android Camera Turbo  
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 Houchu.Fan 正式版 
1.1 2024-11-12 Houchu.Fan 增加 1.3 Camera 常见问题/问题分析 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 Camera Turbo ···························································································································································· 4 
1.1 Camera 架构概述 ···················································································································································· 4 
1.2 Camera Turbo ··························································································································································· 5 
1.2.1 架构 ······························································································································································ 5 
1.2.2 控制流程 ······················································································································································ 6 
1.3 Camera 常见问题/问题分析 ··································································································································· 7 
1.3.1 Camera Debug Log ········································································································································ 7 
1.3.2 Camera Buffer Dump ···································································································································· 8 
1.3.2.1 Raw Sensor······································································································································ 8 
1.3.2.2 YUV Sensor ······································································································································ 8 
1.3.3 Camera Sensor Info ······································································································································· 8 
1.3.4 Camera 基本流程 ········································································································································· 9 
1.3.4.1 Open ··············································································································································· 9 
1.3.4.2 Configure······································································································································· 10 
1.3.4.3 Flush ·············································································································································· 10 
1.3.4.4 Close·············································································································································· 10 
1.3.4.5 Sensor Power-on Done ················································································································· 10 
附件一 附加条款 ····························································································································································· 11 
 
图片目录 
图 1-1. Camera 架构概述 ·························································································································································· 4 
图 1-2. Camera MW 架构 ·························································································································································· 5 
图 1-3. MW 类图 ········································································································································································ 6 
图 1-4. MW 类图 ········································································································································································ 7 
 
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
1.1 Camera 架构概述 
 
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
MT8678 Android Camera Turbo 
 
User Manual 
Confidential B 
1.2 Camera Turbo  
1.2.1 架构 
 
图 1-2. Camera MW 架构 
 
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
MT8678 Android Camera Turbo 
 
User Manual 
Confidential B 
1.2.2 控制流程  
 
图 1-3. MW 类图 
 
图 1-3 主要是入口层和定制层之间的类流交互图。主要是上层通过  CameraProvider 的 open 接口获取 Camera，
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
MT8678 Android Camera Turbo 
 
User Manual 
Confidential B 
 
图 1-4. MW 类图 
接口层（IF layer）与核心层（CORE）之间的交互逻辑主要是上层的 CameraProvider 的 open 接口将调用 
NativeCameraManager。NativeCameraManager 分配可以在底层操作的 NativeCamera。每个 NativeCamera 具有管线
属性，这决定了每个 NativeCamera 实际运行的流程。Camera 的配置会创建一个新的 CameraSession。
CameraSession 创建自己的 Pipeline。连接的 ImageProc 保存在 Pipeline 中。ImageProc 创建相应的 ImageNode。每个 
CameraSession 都有自己的 ImageProc 列表。用户可以在 ImageProc 中执行定制行为。ImageProc 使用 回调接口
MediumHandler。ImageNode 的回调会使用 ImageProc。 
1.3 Camera 常见问题/问题分析 
1.3.1 Camera Debug Log  
adb shell setprop persist.mtk.camera.log_level N  
N can be set to 0 ~ 4, default value is 3. 
 
0/1： LOGE/LOGW LEVEL 
2： LOGI LEVEL 
3： LOG LEVEL 
4： LOGV LEVEL 
Note: Set this CMD, and you need to reboot camerahalserver. 
 
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
1.3.2 Camera Buffer Dump 
1.3.2.1 Raw Sensor 
//  before open camera 
adb root 
mkdir -p /data/vendor/camera_dump 
adb shell setprop vendor.debug.camera.vrp.dump 2 
// running (1:start dump; 0: stop dump) 
adb shell setprop vendor.debug.camera.vrp.dump.start N 
 
1.3.2.2 YUV Sensor 
// before open camera 
adb root 
mkdir -p /data/vendor/camera_dump 
chmod 777 /data/vendor/camera_dump 
// running (2 is start dump, 0 is stop dump) 
adb shell setprop vendor.debug.camera.coredevice.wpe.dump 2 
 
it dump isp p2(pqdip) iuput/output(isp p2 input is isp p1(camsv) output)  
 
 
 
1.3.3 Camera Sensor Info 
Dump sensor info CMD is as follows: 
adb shell sentest_v4l2 
 
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
MT8678 Android Camera Turbo 
 
User Manual 
Confidential B 
 
 
When camera cannot be found, you should input this CMD first to check sensor info. 
 
1.3.4 Camera 基本流程 
1.3.4.1 Open 
 
 
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
MT8678 Android Camera Turbo 
 
User Manual 
Confidential B 
1.3.4.2 Configure 
 
 
1.3.4.3 Flush 
 
 
1.3.4.4 Close 
 
 
1.3.4.5 Sensor Power-on Done 
 
 
 
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
MT8678 Android Camera Turbo 
 
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
# SRC0152 MT8676_Android_DDR_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_DDR_User_Manual_V1.0.pdf

SHA-256：37f5ed85e31d177bec5008a94aa2bd7c335e029c28cdbcaa22d6a4da5a3090ab

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0152.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-08-12
MT8676 Android DDR 
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
MT8676 Android DDR 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 陈绍明 正式版 
 
 
  
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
MT8676 Android DDR 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 4 
1 DDR ··········································································································································································· 5 
1.1 概述·········································································································································································· 5 
 基本概述 ······················································································································································ 5 
 缩略词 ·························································································································································· 5 
1.2 架构/流程概述 ························································································································································ 5 
 客制流程 ······················································································································································ 5 
 将项目添加到 CVI 的流程 ··························································································································· 6 
1.2.2.1 DRAM 新料件验证 - CVI 流程 ········································································································ 6 
1.2.2.2 CVI 准备工作 ·································································································································· 7 
1.3 配置/客制指南 ························································································································································ 8 
 DRAM 类型 ··················································································································································· 8 
 DRAM 大小 ··················································································································································· 8 
 DRAM 电源电压 ··········································································································································· 8 
 DRAM 客制指南 ··········································································································································· 8 
1.4 常见问题/故障排除 ················································································································································ 9 
 启用 DRAM Debug 日志 ······························································································································· 9 
 DRAM 校准结果 ··········································································································································· 9 
 内存测试结果 ············································································································································ 10 
 获取 DRAM 信息的命令 ···························································································································· 10 
附件一 附加条款 ····························································································································································· 12 
 
 
图片目录 
图 1-1. DRAM 客制化流程 ························································································································································ 6 
图 1-2. 将项目添加到 CVI 的流程 ············································································································································ 7 
图 1-3. MT8676 MemoryDeviceList_MT6897.xls ······················································································································ 8 
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
MT8676 Android DDR 
User Manual 
Confidential B 
图 1-4. custom_MemoryDevice.h ·············································································································································· 9 
图 1-5. DRAM 校准结果 ·························································································································································· 10 
图 1-6. CPU 内存测试结果 ······················································································································································ 10 
 
表格目录 
表 1-1.缩略词 ············································································································································································ 5 
表 1-2. MT8676 DRAM 电源电压 ·············································································································································· 8 
 
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
MT8676 Android DDR 
User Manual 
Confidential B 
1 DDR 
1.1 概述 
 基本概述 
本章节介绍 MT8676 DRAM 配置，以及 DRAM 验证流程（CVI flow）。 
 
 缩略词 
表 1-1.缩略词 
缩略词 全称 释义 
CVI Customer Verified Item 客户验证项目 
DDR4 Double Data Rate 4 双倍数据速率 4 
DRAM Dynamic Random Access Memory 数据随机存取內存 
HDK Hardware Design Kit 硬件设计套件 
LPDDR4X Low-Power Double Data Rate 4X 低功耗双倍数据 4X 
PCB Printed Circuit Board 印刷电路板 
QVL Qualified Vendor List 合格供应商清单 
LPDDR5X Low-Power Double Data Rate 5X 低功耗双倍数据 5X 
 
1.2 架构/流程概述 
 客制流程 
MediaTek 在发布硬件设计套件（HDK）供参考后，客户可以根据需求来选用合适的 DRAM 项目。 
MediaTek 的合格供应商清单（QVL）是 MediaTek 在 IC 验证阶段，在 MediaTek 参考板上通过了 DRAM 验证的
DRAM 料件。 
若客户选用的 DRAM 料件不在 QVL 中，客户会需要在客户端的 PCB 上进行新 DRAM 项目的验证。 
而由客户验证完成的新 DRAM 项目将会加入联发科客户验证项目列表。 
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
MT8676 Android DDR 
User Manual 
Confidential B 
 
图 1-1. DRAM 客制化流程 
 
 将项目添加到 CVI 的流程 
1.2.2.1 DRAM 新料件验证 - CVI 流程 
图 1-2 描述了客户如何提交 DRAM 新料件验证, 并添加至联发科客户验证项目的流程。 
请先与 MediaTek 的 CPM 联系以申请将新 DRAM 项目添加到 CVI 的许可。接着按照 DRAM 验证的 SOP 进行 DRAM
压力测试，并将测试结果发送给 MediaTek。 
 
MediaTek 会审查新 DRAM 项目的验证结果，审查通过后这个新的 DRAM 项目即被添加至联发科客户验证项目列
表。 
 
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
MT8676 Android DDR 
User Manual 
Confidential B 
 
图 1-2. 将项目添加到 CVI 的流程 
 
1.2.2.2 CVI 准备工作 
客户在 https://online.mediatek.com/apps/qvl/ 查找要使用的 DDR 是否在 list 中，如果在 list 中，并且客户有按照公
版 MMD（硬件设计与 MTK 公版一致），可以直接使用这款 DDR。 
如果 DDR 不在格供应商清单中，客户提需求给 PM/BM，待 PM/BM 同意后，客户提 CR 附上 DDR Spec 以及提供如
下信息： 
        Customer===客户名称 
        Chip===MT8676 + DDR 型号   
        DRAM PN=== DRAM 型号 
        DRAM Die===B die 
        Provide DRAM date sheet===（需要资料） 
        Provide DRAM type===8GB LPDDR5X 
        Provide system DRAM speed===MT8676 能支持的最大频率 
        Provide PCB layout 走线===（需要资料） 
        是否 MMD===YES 
        使否有做 SI/PI simulation===（需要资料） 
        是否按照 SOC spec 应用 （超频,2CH 改 1 CH 使用….）=== 是按 SOC spec 应用，不超频 
        HW CPM=== MTK HW CPM 
        SW CPM=== MTK SW CPM 
        BM=== MTK BM 
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
MT8676 Android DDR 
User Manual 
Confidential B 
1.3 配置/客制指南 
 DRAM 类型 
MT8676 支持的 DRAM 类型是 LPDDR5X。支持 single rank 及 dual rank DRAM； 
MT8676 支持的最高 DRAM 数据速率为 7500 Mbps。 
 
 DRAM 大小 
MT8676 支持的最大 DRAM 大小为 24 GB。 
MediaTek 实施了 DRAM 大小自适应机制。如果使用不同大小的新 DRAM，客户无需另行配置 DRAM 大小或更新内
核设备树中的内存大小。 
 
 DRAM 电源电压 
表 1-2 描述了 MT8676 DRAM 的典型电压。 
 
表 1-2. MT8676 DRAM 电源电压 
Type Vcore VDD1 VDD2H VDD2L VDDQ VMDDR 
Voltage (Unit: V) 0.8 1.8 1.05 0.91 0.5 0.85 
 
 DRAM 客制指南 
1. 更新 MemoryDeviceList_MT6897.xls 以支持新的 DRAM 项目 
MediaTek 会提供新 DRAM 项目的 MemoryDeviceList_MT6897.xls 
图 1-3 示范了以支持 Micron MT62F2G32D4DS_023 为例： 
 
 
图 1-3. MT8676 MemoryDeviceList_MT6897.xls 
 
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
MT8676 Android DDR 
User Manual 
Confidential B 
注意： 
• Part number 和 Board ID 必须和 custom_MemoryDevice.h 一致 
\vendor\mediatek\proprietary\bootable\bootloader\preloader\custom\CUSTOM_PROJECT\inc\custom_MemoryDevic
e.h 
 
2. 更新 custom_MemoryDevice.h 以支持新的 DRAM 项目 
 
图 1-4. custom_MemoryDevice.h 
 
1.4 常见问题/故障排除 
 启用 DRAM Debug 日志 
Dram debug log 默认是未开启的,启用 DRAM 调试日志可以检查 DRAM 校准结果、DRAM 自我检测等资讯。 
\vendor\mediatek\proprietary\bootable\bootloader\preloader\platform\mt6897\src\drivers\inc
\dramc_common.h 
@@ -249,7 +249,7 @@ 
     #define mcSHOW_ERR_MSG(_x_)   { mcPRINTF(_x_,##__VA_ARGS__); } 
     #define mcDUMP_REG_MSG(_x_) 
     #else 
-    #define mcSHOW_DBG_MSG(_x_) 
+    #define mcSHOW_DBG_MSG(_x_)    { mcPRINTF(_x_,##__VA_ARGS__); } /* Enable dram debug 
log */ 
     #define mcSHOW_DBG_MSG2(_x_) 
     #define mcSHOW_DBG_MSG3(_x_) 
     #define mcSHOW_DBG_MSG4(_x_) 
 
客户通常只需要启用“mcSHOW_DBG_MSG(_x_)”确认 dram 校准结果或是 CVI 审查。 
 
 DRAM 校准结果 
客户可以在启动日志搜索关键字“Calibration Summary”查看 DRAM 校准结果。 
图 1-5 示范了 two channels dual ranks dram 在频率 1600 MHz（data rate 3200 Mbps）的校准结果。 
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
MT8676 Android DDR 
User Manual 
Confidential B 
 
图 1-5. DRAM 校准结果 
 内存测试结果 
在完成 DRAM 校准后，会执行 CPU 内存测试以检查 DRAM 基本读写操作是否能正常运行。 
图 1-6 示范了 CPU 内存测试的测试结果。 
 
 
图 1-6. CPU 内存测试结果 
 
 获取 DRAM 信息的命令 
1. DRAM Data Rate 
以下是查看 DRAM data rate 的命令： 
Shell (or ADB shell): 
cat 
/sys/bus/platform/drivers/dramc_drv/dram_data_rate 
 
执行命令的结果如下: 
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
MT8676 Android DDR 
User Manual 
Confidential B 
 
 
2. Memory Size 
以下是查看 Memory Size 的命令： 
Shell (or ADB shell): 
cat /proc/meminfo 
 
执行命令的结果如下： 
  
 
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
MT8676 Android DDR 
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
# SRC0153 MT8676_Android_DebugLoggerUI_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_DebugLoggerUI_User_Manual_V1.1.pdf

SHA-256：13d506954e8173f09c86ae2119f30f96da255967e301879494ccf56b2e4e8eb2

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0153.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2025-07-30
MT8676 Android DebugLoggerUI  
User Manual 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-07-11 张晶晶 正式版 
1.1 2025-7-30 张晶晶 更新 debuglogger 介绍 
 
  
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 DebugLoggerUI ·························································································································································· 4 
1.1 概述·········································································································································································· 4 
 简单介绍 ······················································································································································ 4 
 名词解释 ······················································································································································ 4 
1.2 架构/流程概述 ························································································································································ 5 
 DebugLogger 介绍 ········································································································································ 5 
 DebugLogger 循环机制介绍 ························································································································ 6 
 DebugLogger 存储介绍 ································································································································ 6 
1.3 配置/客制化指南 ···················································································································································· 7 
 DebugLogger 控制介绍 ································································································································ 7 
 DebugLogger 配置介绍 ······························································································································ 10 
 DebugLogger 设置介绍 ······························································································································ 12 
 DebugLogger 设置触发 Tag Log ················································································································· 14 
 DebugLogger 参考 FAQ ······························································································································ 15 
1.4 DebugLogger 注意事项 ········································································································································· 16 
附件一 附加条款 ···························································································································································· 17 
 
 
图片目录 
图 1-1. MTK log 流程 ································································································································································· 5 
 
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

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
1 DebugLoggerUI 
1.1 概述 
 简单介绍 
本章节主要介绍 MTK 的 log 抓取工具 DebugLogger 的架构和此 log 工具出现异常时常用的调试方法。 
 
 名词解释 
表 1-1. 名词解释 
缩写 释义 
boot__normal 重启前的 log 
bootprof 关键进程初始化所用时间 
bsp_log 进程调用 log 
connsyslog Bluetooth/WiFi/GPS 的 log 
crash_log 当应用程序发生崩溃时的 backtrace 以及进程信息 
DebugLogger/MTKlogger MTK 设计的用来抓取 log 的调试工具 
DebugLoggerUI java 层记录器用户界面（ UI），它可以启动/停止 log 工具并更改一些设置 
events_log 进程创建/销毁等 log，活动生命周期 log 
kernel_log Kernel/driver 层 log 
Last_1_boot_normal 
上一次开机的过程中，开机 log 还没有复制到 SD 卡 或 eMMC 中，又发生了
重启，而上一次开机的 log 就保存在这个文件夹，数字 1 是开机次数 
last_AndroidLog 关机时最后的 Android log 
last_kmsg 上次关机时最后的 Kernel log 
main_log Native/java 层的 log 
mblog_history Mobile_log_d 运行 log 
Mobile log 常用 log 记录 
Mobile_log_d 底层运行 service，主要抓取记录 Main/Kernel log 等 
Modem log 记录 Modem 的 log 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
缩写 释义 
netlog Tcp dump log 
pl_lk 开机阶段 Preloader/LK 的 log 
properties 设备的所有属性，通常在该文件查询手机版本号和手机型号等信息 
radio_log 通信系统的 log 
scp_log SCP 模块的 log 
sys_log system log， 例如 AMS/WMS 等 log 
 
1.2 架构/流程概述  
 DebugLogger 介绍 
 
图 1-1. MTK log 流程 
 
整个 MTK log 的机制由上层 MTKlogger+底层 mobile_log_d 组成。上层是 apk 层，负责下发指令，读取/写入配置文
件，调用底层程序运行达到预期目的；底层是实际的执行者，程序跑起来之后会对配置文件进行读取，根据配置
文件执行命令；mobile_log_d 主要是对 Android logd 的四个 log 文件进行读取，以及对各种 proc 节点下面的 log 的
kmsg /atflog /scp log 等进行读取。这部分 MTK log 的操作实际上只是对于已有 log 的捞取整合，比如 atf 本身就有
atf 的 log 节点， logd 本身就是 Android log 的机制。读取到 log 之后会创建 log 文件，将各种 log 收集落盘。 
Listening 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
创建 log 的基本方法：创建单个的 APlog 文件夹，将每种 log 写入，以链表的形式按照固定的速率进行读取写入。
当所有 log 的总和达到单个 APlog 文件夹大小限制时，会对其内的 log 进行轮转，也是以链表的形式将最早的节点
删除（链表的节点不区分 log 的种类，是按照 APlog 文件夹为最基本单位做循环）。当平台发生重启或上层的
MTKlogger 下发开始/停止指令的时候，会新建一个 APlog 文件夹。随着不断创建新的 APlog 文件夹，总的 APplog
文件夹的大小达到一定上限的时候，系统会删除最早的 aplog 文件夹，其原理同样也是以链表的形式做循环。 
整个底层的 mobilelogd 的 log 文件系统全部是按照 Linux “一切皆文件”的思想来操作的。 
 
 DebugLogger 循环机制介绍 
关于 DebugLogger 下的 Mobile log 的结构，其下包含很多支 APlog。当停止录制 log， 再开始录制 log 时，就会生成
一支新的 APlog。当平台重启时，重启后也会将 log 录制到新的 APlog 中。 
故 Mobile log 设置了两个大小：   
一个是单支 APlog 文件夹的大小上限。 当达到上限时，会删掉前面的 log（boot_normal 为开机 log，不会被删
掉），不分 log 种类，只按时间顺序删除旧 log 文件。  
另一个算法是根据 log 的大小决定单个文件的最大容量（实际上一般约几 M），所有 log 都达到上限后就创建新的
log 文件。当 APlog 自身达到上限后， 则会删此文件夹下最早创建的那个 log 文件。 
 
 DebugLogger 存储介绍 
MTK log 的存储有三部分：首先，会从各个 log buffer 抓取 log 存放在 MTK log 的 buffer 里面； 其次，将 MTK log 
buffer 里面的 log 存到 eMMC，此时文件格式为.curf； 最后，将完整的 log 写到 eMMC 中，此时文件格式没有.curf
的后缀。 
 
控制存储的 code（调节情况要看客户项目 log 的数量）： 
logging.h： 
#define BUFFER_SIZE        (256 * 1024)  // 256k 
 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
1.3 配置/客制化指南 
 DebugLogger 控制介绍 
 
 
1.3.1.1 主要用户界面 
1. log 运行时间：开始录制后，正在抓取 log 的录制时间。 
2. 每个 log 的运行状态：如果 log 正在运行，左侧图标则会由三角形变为图中所示的正方形。 
3. log 存储：log 存储的路径以及 log 存储的剩余空间。 
4. 控制面板：左侧按钮用于启动 Tag Log，右侧回收站图标表示清除已记录的 log， 中间按钮用于开始或暂停记
录。 
5. 设置页面入口：单击此图标，将出现详细的设置页面，如下图所示 。 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
1.3.1.2 Log 设置 
 
 
1. 通过开关的方式自定义抓取不同类型的 log。 
2. 启用或禁用 Tag Log 功能(当系统发生异常，产生 DB 时，Tag Log 会保存异常时的平台 log)。 
3. Log 存储路径 
 
1.3.1.3 Mobile Log 设置 
 
1. 当 Mobile log 开启时，通过勾选的方式自定义抓取不同类型的 log。如果勾选，那么所选的 log 类型就会被抓
取，若未勾选，则该 log 将不会被抓取。 
2. 设定最大 Mobile Log 的 log buffer size，如果抓取的 log 超过该值，那么就会删除旧的 log 文件，腾出 log buffer 
size 循环利用。 
3. 总 log buffer size，包括当前记录的 log 和所有以前的 Mobile log，即 Mobile log 所在的文件夹总的大小。 
 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
1.3.1.4 Modem Log 设置  
 
1. 三种抓取 Modem log 的模式: 
– USB 模式：需要连接 USB, 通过 ELT tool 抓取 Modem log; 
– SD 模式： 直接保存 Modem log 在平台的data/debuglogger 目录下 
– Passive log to SD 模式： 抓取 Modem 异常时的 log，保存在平台的 data/debuglogger 目录下 
        
2. 自动抓取 Modem 异常时的 log, 保存在平台的data/debuglogger 目录下 
3. 在 Modem1 log 中保存方位信息 
4. Modem 发生 EE 后，将重置 Modem 
5. 总 Modem log 容量 
 
1.3.1.5 Network Log 设置 
 
1. 在 Network log 停止记录时，是否需要检查当前网络连接状态。如果启用，此操作将 ping 两个 IP 地址以确认当
前连接状态。这些 ping 数据可能对分析与网络相关的问题非常有用，但会导致 log 记录停止持续约 12 秒。 
2. 启用容量限制，检查每个 Network log 的大小是否符合给定值 
3. Network log 容量 
 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
 DebugLogger 配置介绍 
配置文件路径： 编译之前通过  mtklog-config-bsp-eng.prop && mtklog -config-bsp-user.prop 文件配置  
DebugLoggerUI 的默认值，文件路径: \device\mediatek\common\mtklog。mtklog-config-bsp-eng.prop 控制
eng 版本，mtklog-config-bsp-user.prop 控制 user 和 userdebug 版本。 
 
1.3.2.1 DebugLogger 配置 Log 的默认路径 
配置内容: 
mtklog_path = system_data/device_storage/portable_storage 
 
1.3.2.2 DebugLogger 配置第一次开机自启的 Log 类型 
com.mediatek.log.mobile.enabled = true 
com.mediatek.log.modem.enabled = true 
com.mediatek.log.net.enabled = true 
com.mediatek.log.connsysfw.enabled = true 
com.mediatek.log.gpshost.enabled = true 
com.mediatek.log.bthost.enabled = true 
 
eng 版本默认第一次开机都启动，其他版本默认不启动，可自行配置。  
 
1.3.2.3 DebugLogger 配置 Log 循环录制大小 
com.mediatek.log.mobile.maxsize = 500 //Single mobile log folder size 
com.mediatek.log.mobile.totalmaxsize = 1000 //Total mobile log size 
com.mediatek.log.modem.maxsize = 2000 
com.mediatek.log.net.maxsize =600 
com.mediatek.log.connsysfw.maxsize = 2000 
com.mediatek.log.bthost.maxsize = 2000 
 
按照需要修改对应选项即可，需要注意com.mediatek.log.mobile.maxsize 要小于
com.mediatek.log.mobile.total.maxsize，配置的 log 缓存大小会循环存储，即当存储达到最大值时，如果有
新的 log 就会把前面旧的 log 覆盖掉。 
 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
1.3.2.4 DebugLogger 配置 Mobile Log 中的子项 
com.mediatek.log.mobile.AllMode = true 
 
如果没有设定具体的 Mobile log 子项，那么所有的 sub log 均默认开启。 
com.mediatek.log.mobile.AndroidLog = true 
com.mediatek.log.mobile.KernelLog = true 
com.mediatek.log.mobile.SCPLog = true 
com.mediatek.log.mobile.ATFLog = true 
com.mediatek.log.mobile.BSPLog = true 
com.mediatek.log.mobile.MmediaLog = true 
com.mediatek.log.mobile.SSPMLog = true 
com.mediatek.log.mobile.ADSPLog = true 
 
如果 Mobile log 子项没有设定，则默认使用 com.mediatek.log.mobile.AllMode 的设定值。 
 
1.3.2.5 DebugLogger 配置开启 Tag Log 
com.mediatek.log.taglog.enabled = true 
 
默认值 : eng 版本默认为 true，其他为 false。 
 
1.3.2.6 DebugLogger 配置当发生 EE 时，Modem Log 是否自动重启 
com.mediatek.log.modem.autoreset.enabled = false 
 
默认值是 false。 
如果配置是 false，Modem log 就不会重启。 
 
1.3.2.7 DebugLogger 配置 Modem Log 默认启动模式 
com.mediatek.log.modem.mode = 2 
 
1: USB 模式 
2: SD Card 模式 
3: PLS 模式 （Passive log to SD） 
默认配置为第 2 种，即 SD Card 模式。 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
 DebugLogger 设置介绍 
除去 Home UI 的方式，您还可以直接使用 adb 的方式控制 debuglogger，适用于没有显示 debuglogger 界面的客
户。 
 
1.3.3.1 DebugLogger 设置启动和停止 
命令格式： 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name value --ei cmd_target 
logTypes -n com.debug.loggerui/.framework.LogReceiver 
 
value = start/stop 
logTypes = 1 + 2 + 4 + 16 + 32 + 64 
(MobileLog: 1, ModemLog: 2, NetworkLog: 4, GPSLog: 16, ConnsysFWLog: 32, BTHostLog: 64) 
 
例 1：开启所有 log 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name start --ei cmd_target 119 
-n com.debug.loggerui/.framework.LogReceiver 
 
例 2：关闭所有 log 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name stop --ei cmd_target 119 
-n com.debug.loggerui/.framework.LogReceiver 
 
注意: 启动和停止命令需要间隔 15s 的时间。 
 
例 3 : 停止 Modem log & Network log  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name stop --ei cmd_target 6 -n 
com.debug.loggerui/.framework.LogReceiver 
 
1.3.3.2 DebugLogger 查询运行状态 
命令格式： 
adb shell getprop logstatusproperty 
 
Log 运行状态：1 代表正在运行， 0 代表停止。 
 
其中 logstatusproperty 可以为如下值： 
logstatusproperty of mobile: vendor.MB.running 
logstatusproperty of modem log: vendor.mdlogger.Running 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
logstatusproperty of network log: vendor.mtklog.netlog.Running 
logstatusproperty of GPSLog: vendor.gpsdbglog.enable 
logstatusproperty of BTHost log: vendor.bthcisnoop.running 
logstatusproperty of ConnsysFW log: vendor.connsysfw.running 
 
例如：获取 Mobile log 的状态: adb shell getprop vendor.MB.running 
 
1.3.3.3 DebugLogger 设置重启 
命令格式 : 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name restart --ei cmd_target 
logTypes -n com.debug.loggerui/.framework.LogReceiver 
 
logTypes=1+2+4+16+32+64  
(MobileLog: 1, ModemLog: 2, NetworkLog: 4, GPSLog: 16, ConnsysFWLog: 32, BTHostLog: 64) 
logTypes = -1 (all logs) 
 
例如： 只重启 Mobile log 命令 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name restart --ei cmd_target 1 
-n com.debug.loggerui/.framework.LogReceiver 
 
结果：只有 Mobile log 重启 
 
1.3.3.4 DebugLogger 设置是否显示 Modem EE 内存转储完成对话框 
命令格式：  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name modem_auto_reset_value --
ei cmd_target 2 -n com.debug.loggerui/.framework.LogReceiver 
value = 1/0  (启用/禁用) 
 
例如：显示 Modem EE 内存转储完成对话框 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name modem_auto_reset_1 --ei 
cmd_target 2 -n com.debug.loggerui/.framework.LogReceiver 
 
1.3.3.5 DebugLogger 设置 Modem Log 模式 
命令格式： 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name 
switch_modem_log_mode_value --ei cmd_target modemtype -n 
com.debug.loggerui/.framework.LogReceiver 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
 
value = 1/2/3 (USB/SD/PLS) 
modemtype = 1/3 (md1/md3) 
 
例如：将 Modem1 模式设置为 SD 模式 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name switch_modem_log_mode_2 -
-ei cmd_target 1 -n com.debug.loggerui/.framework.LogReceiver 
 
1.3.3.6 DebugLogger 设置手动触发 EE 
命令格式：  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name force_modem_assert --ei 
cmd_target 2 -n com.debug.loggerui/.framework.LogReceiver 
 
1.3.3.7 DebugLogger 设置开启/关闭 Tag Log 
命令格式： 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name switch_taglog --ei 
cmd_target value -n com.debug.loggerui/.framework.LogReceiver 
 
value = 1/0 (启用/禁用) 
 
例如: 启用 Tag log 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name switch_taglog --ei 
cmd_target 1 -n com.debug.loggerui/.framework.LogReceiver 
 
 DebugLogger 设置触发 Tag Log 
命令格式 ： 
adb shell am broadcast -a com.mediatek.log2server.EXCEPTION_HAPPEND -e path 
SaveLogManually -e db_filename yourFileName --ez is_need_zip needZipValue --ez 
is_need_all_logs needAllLogValue -n com.debug.loggerui/.framework.LogReceiver 
 
文件名称可自行决定 
needZipValue = true/false （压缩文件/ 不压缩文件） 
needAllLogValue = true/false （打包在 MTK log 文件夹里的所有 log /不打包所有 log ） 
 
例如： 触发 Tag Log 压缩当前 log 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
adb shell am broadcast -a com.mediatek.log2server.EXCEPTION_HAPPEND -e path 
SaveLogManually -e db_filename test --ez is_need_zip true --ez is_need_all_logs false -n 
com.debug.loggerui/.framework.LogReceiver 
 
1.3.4.1 DebugLogger 设置显示 DebugLoggerUI 主界面 
显示 DebugLoggerUI 主界面： 
adb shell am start -n com.debug.loggerui/com.debug.loggerui.MainActivity 
 
1.3.4.2 DebugLogger 设置 Log 大小 
1. 设置 Mobile log 大小 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name set_total_log_size_600 --
ei cmd_target 1 -n com.debug.loggerui/.framework.LogReceiver 
 
2. 设置 Mobile log 中单个 APlog 文件夹大小 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name set_log_size_300 --ei 
cmd_target 1 -n com.debug.loggerui/.framework.LogReceiver 
 
3. 设置 Modem log 大小 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name set_log_size_600 --ei 
cmd_target 2 -n com.debug.loggerui/.framework.LogReceiver 
 
4. 设置 Network log 大小 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name set_log_size_200 --ei 
cmd_target 4 -n com.debug.loggerui/.framework.LogReceiver 
 
 DebugLogger 参考 FAQ 
[FAQ13883] 如何配置 MTKlogger 各种参数 
[FAQ12752] 如何修改 MTKlogger 默认存储容量大小 
 
[FAQ19560] User 版本开启 MTK log 特别注意事项 
[FAQ19362] 如何设置 Mobile log, Modem log, Network log 大小 
[FAQ17814] 如何设置 MTKlogger 是否开机自启动 
深入了解 Logging Tools: https://online.mediatek.com/apps/quickstart/QS00034 
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
MT8676 Android DebuggLoggerUI 
User Manual 
Confidential B 
1.4 DebugLogger 注意事项 
1. 不建议客户对 MTK log 进行任何客制化（修改存储分区/功能新增），可以将问题提交至 eservice 寻求 MTK 的帮
助； 
2. 不建议客户在抓取 log 的时候对 MTK log 做任何额外操作（手动停止 MTK log service/修改 MTK log 存储路径）； 
3.  把 log 从平台端保存到本地，只需要执行 
adb pull /data/debuglogger 
 
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
MT8676 Android DebuggLoggerUI 
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
# SRC0154 MT8676_Android_Display_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Display_User_Manual_V1.0.pdf

SHA-256：9ec9003f71b1b9f52e0b8bee0e7812a09a1ccdcd03549e1f71b5e8582c0d9f04

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0154.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-08-12 
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
MT8676 Android Display 
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
# SRC0155 MT8676_Android_DSI_Panel_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_DSI_Panel_User_Manual_V1.0.pdf

SHA-256：6d1c9931e889ed4b70dee811bd529dac8b36f4043508ad8df8397462b4c64aab

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0155.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-08-12 
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
1 概述 ··········································································································································································· 5 
2 点屏前置条件 ··························································································································································· 6 
2.1 从屏厂或者串行器厂商获取如下信息 ·················································································································· 6 
2.2 原理图审查 ······························································································································································ 6 
3 新增屏驱 ··································································································································································· 7 
3.1 Device 的修改 ·························································································································································· 7 
3.2 LK2 的修改 ······························································································································································· 7 
3.3 Kernel 的修改 ·························································································································································· 8 
4 重要事项 ································································································································································· 10 
5 LK 驱动 ···································································································································································· 11 
5.1 增加 LK2 屏驱 ························································································································································ 11 
5.2 编写驱动 ································································································································································ 11 
6 Kernel DRM 驱动 ····················································································································································· 18 
6.1 增加 Kernel 驱动 ··················································································································································· 18 
6.2 编写驱动 ································································································································································ 18 
7 精确的 FPS 设置 ······················································································································································ 22 
8 Debug SOP ······························································································································································· 23 
8.1 Lk 阶段 Debug ························································································································································ 23 
8.2 Kernel 阶段 Debug ················································································································································· 24 
8.3 Resume 阶段 Debug ·············································································································································· 25 
8.4 花屏 Debug ···························································································································································· 25 
8.5 含有 Bridge 屏的 Debug ········································································································································ 27 
9 Dump Reg ································································································································································ 28 
9.1 LK 阶段 ··································································································································································· 28 
9.2 Kernel Dump reg ···················································································································································· 28 
9.3 adb 命令 dump reg ················································································································································ 29 
9.4 Test Pattern 命令 ··················································································································································· 29 
9.5 分析 reg ································································································································································· 30 
10 使用 MTK max96789 panel driver ···························································································································· 32 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
附件一 附加条款 ····························································································································································· 40 
 
 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
1 概述 
本文主要介绍 Panel 驱动移植 SOP 以及相应的 debug 技巧。 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
2 点屏前置条件 
2.1 从屏厂或者串行器厂商获取如下信息 
• 屏厂要在治具上使用外部输入信号点亮屏 
• 点屏前确定“上下电时序、几个 port、几个 ddic、cmd/vdo mode、Cphy/dphy、Lane number” 
• Init/deinit cmd（一定要是第一点提到的 cmd，即“要在治具上使用外部输入信号点亮屏”） 
• Width/height/vfp/vbp/vsa/hfp/hbp/hsa/fps/mipi clock 等等 
• Bist mode cmd（可选，点不亮时要求提供） 
• Dsc 参数，几个 slice（如果要开 dsc，请先根据参考初步判断一下 MTK IC 是否能支持） 
• 其他功能如何实现（backlight/fps change/cabc…） 
• 如果接串行器，串行器要如何设置等等 
 
2.2 原理图审查 
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

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Android DSI Panel 
User Manual 
Confidential B 
3 新增屏驱 
3.1 Device 的修改 
1. 在ko_order_table 中加入 ko 名称 
 
2. 在projectconfig.mk 中修改 bootlogo 设定 
 
 
3.2 LK2 的修改 
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

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Android DSI Panel 
User Manual 
Confidential B 
 
4. 在lcmd_drv.h 中加入此驱动 
 
 
3.3 Kernel 的修改 
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

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Android DSI Panel 
User Manual 
Confidential B 
5. 在kleaf 中加入驱动 
 
6. 在dts 中加入驱动 
 
 
 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
4 重要事项 
• 为了防止从 lk 转 Kernel 画面抖动，kernel 启动后dsi/mipi_tx/panel 的设置都是用 lk 的参数，
suspend/resume 之后才是全部采用 Kernel 的配置。如果发现 suspend/resume 之后有参数跟上电启动不同，请
检查这三部分的设置区别 
• Kernel 启动时会获取一些参数给 display 使用，在 Kernel panel driver 没有 ready 的情况下系统不能正常工作是
正常现象 
• 后面页面中写的 must set 的参数是必须要写的，其他部分根据需要填写 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
5 LK 驱动 
LK2 路径: /vendor/mediatek/proprietary/bootable/bootloader/lk2/ 
 
 
5.1 增加 LK2 屏驱 
参考第 3.2 章新增 LK 屏驱文件和修改。 
 
5.2 编写驱动 
1. 编写 lcm_drv 结构体（must set） 
– 以<tv101wum_n16_wuxga_dsi_video_boe_rtq6752.c> 为例： 
 
2. 填充 LCM 参数（must set） 
– 按照实际参数参考其他屏驱填写 
▪ Lcm 宽和高（must set） 
 
▪ Lcm 参数（dsi 设置, must set）  
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
 
▪ Lcm 参数（vdo timing, must set） 
 
▪ esd 配置（optional，使用 bridge 必须关掉） 
 
▪ pll config （PLL_CLOCK 和 data_rate 至少要设置 1 个，参考下面公式计算） 
 
▪ 展频配置（optional，使用 bridge 必须关掉） 
 
▪ mipi clock 配置（optional） 
 
▪ cphy/dphy 配置（by case，cphy 设置为 1，dphy 设置为 0） 
 
▪ dual port 设置 （by case） 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
 
▪ Dsc 配置 （by case） 
o 如果要用 DSC，必须设置 dsc_enable=1，并设定 DSC 参数 
o 是否需要支持 DSC 取决于屏，且 DSC 参数需要屏厂提供 
o MTK 特有参数 dsc_cfg： 
a) 8bpc to 8bpp 设置为 0x22 
b) 10bpc to 8bpp 设置为 0x828 
o 其他参数一一对应到屏厂提供参数 
o 注意观察 rc_buf_thresh 值的范围是 14-126，如果厂商提供的远大于这个，将厂商数据右移 6 位 
o dsc 设定例子 
 
o 厂商提供的 pps 参数例子 1 
 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
o 厂商提供的 pps 参数例子 2 
 
o GPIO 配置（参考 GPIO SOP） 
 
 
3. 编写 LCM init power 函数（must set） 
 
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
MT8676 Android DSI Panel 
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

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Android DSI Panel 
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

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Android DSI Panel 
User Manual 
Confidential B 
 
 
 
 
 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
6 Kernel DRM 驱动 
文件路径: /kernel/ kernel_device_modules-6.1/drivers/gpu/drm/metiatek/Mediatek_v2 
 
 
 
6.1 增加 Kernel 驱动 
参考章节 3.3 新增修改 Kernel 驱动。 
 
6.2 编写驱动 
1. 填充 Kernel 驱动结构体（must set） 
– DRM 原始结构体 
 
2. 编写 MTK 扩展结构体（must set） 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
 
– 在 super frame 模式下, 必须设置 the pll_clk/crop_width/crop_height/physcial_width/physical_height, 
否则必须设置 pll_clk 
– Pll_clk: mipi 时钟 
– Crop width/crop height: 在 super frame 模式下, Crop width/crop height 应该被设置为对应于其中一个
panel 的宽度/高度 
– Physical_width/physical_height: In super frame mode, physical_with should be set to the sum of the 
widths of the two panels. And the physical_height should be set to the larger of the two panels. 
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

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 Android DSI Panel 
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

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Android DSI Panel 
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

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8676 Android DSI Panel 
User Manual 
Confidential B 
7 精确的 FPS 设置 
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

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8676 Android DSI Panel 
User Manual 
Confidential B 
8 Debug SOP 
8.1 Lk 阶段 Debug 
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

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
MT8676 Android DSI Panel 
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
 
8.2 Kernel 阶段 Debug 
• 进 Kernel 后屏不亮 
– 量屏的各路电压是否有掉 
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
MT8676 Android DSI Panel 
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
 
8.3 Resume 阶段 Debug 
• Resume 后屏不亮 
– 量屏的各路电压是否有正常起来 
– 检查屏的 power on code 是否有异常 
– 背光是否有亮？ 
▪ 控制背光 code 是否有异常 
– Kernel 屏驱是否有正常加载？ 
▪ 观察 log，看驱动加载是否正常。 
– 对比跟 LK 的驱动，看两边设置是否一样 
 
8.4 花屏 Debug 
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

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
MT8676 Android DSI Panel 
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

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 27 
MT8676 Android DSI Panel 
User Manual 
Confidential B 
▪ 对比切换前后 reg 是否一样 
▪ 例：切换 fps 后花屏 
o 询问屏厂切换 fps 是否存在限制，是否要发送 cmd 等 
o Fps 切换时 mmclk 改变先后顺序是否正确（mmclk 变高要先设 mmclk 后切 fps，mmclk 变低要先切 fps
后设置 mmclk，mmclk 计算方法参考 mtk_dsi_set_mmclk_by_datarate 函数，切换逻辑参考
mtk_crtc_disp_mode_switch_begin 函数） 
 
8.5 含有 Bridge 屏的 Debug 
• 查看 bridge 状态寄存器，可以得知当前 bridge 工作状态 
• 从 bridge vendor 获取帮助 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
9 Dump Reg 
9.1 LK 阶段 
• 在 Ddp_dsi.c/ddp_dsi_trigger() 最后调用 DSI_DumpRegister() 
• 在 Ddp_dsi.c/dsc_config() 最后调用 dsc_dump() 
• LK display log 默认没开，需要在 ddp_log.h 中打开 
 
 
9.2 Kernel Dump reg  
• 如何打开寄存器 adb debug 接口 
– 路径：kernel-xx/drivers/clk/mediatek/clkdbg.c/common_cmds[] 
– 函数：clkdbg_reg_read()和 clkdbg_reg_write() 
– 方法：如果 clkdbg_reg_read() and clkdbg_reg_write()被#if defined( CONFIG_MTK_ENG_BUILD)包起来了，请把
#if defined( CONFIG_MTK_ENG_BUILD)  mask 掉，同时把定义 clkdbg_reg_read() and clkdbg_reg_write()地方的#if 
defined(CONFIG_MTK_ENG_BUILD) 也 mask 掉，然后就可以用 adb command 改寄存器了 
 
 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
9.3 adb 命令 dump reg 
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
o 该语句最终需要执行的命令是：echo reg_write xxx 基地址+yyy zzz> /proc/clkdbg ; cat 
/proc/clkdbg 
o 例如调整 mipi 的驱动能力，supporter 会说把 mipi_tx 的 0x10 bit6-9 写 0111 
o 执行的命令是：echo reg_read 0x11f60010 > /proc/clkdbg;cat /proc/clkdbg ，//mipi_tx 基地址
0x11f60000，先读 mipi tx 的 0x10，假如读到是 0，将 0 的 bit6-9 或上 0111 得到 0x1c0：echo reg_write 
0x11f60010 0x1c0> /proc/clkdbg ; cat /proc/clkdbg 
 
9.4 Test Pattern 命令 
• 使用 adb： 
– echo reg_write “DSI/DSC_base_reg+offset_addr” value> /proc/clkdbg; cat /proc/clkdbg 
– DSI/DSC 基地址参考前面的说明 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
9.5 分析 reg 
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

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 31 
MT8676 Android DSI Panel 
User Manual 
Confidential B 
• DSC 
 
DSC 控制寄存器 
 DSC 状态 
 DSC 宽 
DSC 高 
DSC PPS0-19 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
10 使用 MTK max96789 panel driver 
MTK 提供了一个 max96789+max96752 的通用驱动，可参考这个通用驱动写自己的驱动： 
1. KO table 中加入 birdge-serdes-max96789.ko/panel-serdes-max96789.ko（如果不存在时） 
2. LK 的 project.mk 中设置 MTK_LCM_LIST_SUPPORT="max96789_dsi_vdo" 
3. kleaf 中加入 birdge-serdes-max96789.ko/panel-serdes-max96789.ko（如果不存在时） 
4. defconfig 中加入 CONFIG_DRM_PANEL_SERDES=m（如果不存在时） 
5. 如果需要使用 hotplug 功能，需要在 defconfig 中设置 CONFIG_ENABLE_SERDES_HOTPLUG=y 
6. 如果 hotplug 功能要使用中断方式，需要在 code 中将 ENABLE_HOTPLUG_INT 定义为 1（同时要修改 dws 将对于
gpio 设置为 EINT 功能） 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
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
MT8676 Android DSI Panel 
User Manual 
Confidential B 
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

## PDF物理页 40

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 40 
MT8676 Android DSI Panel 
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
# SRC0156 MT8676_Android_DVR_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_DVR_User_Manual_V1.0.pdf

SHA-256：01d0f7d1891c66a7a9eb60b6760bcf9b1577806b46ec8fefa7bae437dc649dd5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0156.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-08-12
MT8676 Android DVR User Manual 
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
MT8676  Android DVR 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 Dandan Hu 正式版 
 
  
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
MT8676  Android DVR 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 DVR ··········································································································································································· 4 
1.1 概述·········································································································································································· 4 
 基本概要 ······················································································································································ 4 
 缩略词 ·························································································································································· 4 
 主要功能 ······················································································································································ 4 
1.2 架构/流程概要 ························································································································································ 5 
 DVR 架构图 ·················································································································································· 5 
 DVR 的整体流程 ··········································································································································· 6 
 MP4 Writer 流程 ··········································································································································· 7 
1.3 配置/客制指南 ························································································································································ 8 
 进入 recorder 的三个入口 ··························································································································· 8 
 常用的 DVR 功能 ·········································································································································· 8 
1.4 常见问题/故障排除 ·············································································································································· 11 
 DVR 常见问题分析 ····································································································································· 11 
附件一 附加条款 ····························································································································································· 16 
 
 
图片目录 
图 1-1. DVR 架构 ········································································································································································ 6 
图 1-2. DVR 的整体流程 ···························································································································································· 7 
图 1-3. MP4 writer 流程 ···························································································································································· 7 
图 1-4. 子码流的流程 ································································································································································ 9 
 
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
MT8676  Android DVR 
User Manual 
Confidential B 
1 DVR 
1.1 概述 
 基本概要 
本章节主要介绍 MT8676 DVR 的架构和一些常见的 DVR 问题分析。 
 
DVR 全称 Digital Video Recorder，是 SPM 平台自带的录制视频功能，支持 mp4、ts 录制以及 H264 数据回调。 
 
 缩略词 
缩略词 全称 释义 
API Application Programming Interface 应用程序编程接口 
DVR Digital Video Recoder 行车记录仪 
SPM Smart Platform 智能平台 
 
 主要功能 
1.  多路录制 
      一路 camera 可以同时录制生成多个视频文件（包括 H264 callback） 
 
2. 文件分段 
      可以动态设置录制文件时长，比如 1 分钟、3 分钟、5 分钟等。分段条件：while (Video duration >= max duration) 
– 如果 audio duration 先到，会等待 video duration。 
– 如果 video duration 先到，会分段。 
 
3.  主码流 
      落盘的同时回调一份 H264 或 ts 数据。 
      开启方法：在 startRecord 时带入参数：VIDEO_FRAME_MODE_DUAL_SOURCE 或 
VIDEO_FRAME_MODE_DUAL_PACKET  
 
4.  子码流 
      不落盘，只回调一份 H264 数据或 ts 数据。 
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
MT8676  Android DVR 
User Manual 
Confidential B 
      开启方法：在 startRecord 时带入参数：VIDEO_FRAME_MODE_SOURCE 
 
5.  文件保护 
      当触发碰撞时，会自动保存一段时间视频到指定目录下。 
 
6. 打点保护 
      用于录制当前前后一段时间数据（比如前后 10 秒）到指定目录下。 
 
7.  循环录制 
      DVR 开启后会一直录制下去，自动分段固定时间文件。 
 
8. 循环删除 
      SD 存储卡快满时，自动删除过去最早的文件。 
 
9. 文件头 I Frame 
      每个分段文件第一帧为 I 帧，避免播放时出现花屏现象。 
 
10. Audio Mute 
      录制前后可以动态开关 audio 录制。 
 
1.2 架构/流程概要 
 DVR 架构图 
下图是 DVR 架构图，Demo apk call SDK 接口通过 binder 调用到 server 端，即图中 CarCamDeviceClient 部分，
CarCamDeviceClient 对接到 CameraDeviceclient 和 RecoderMgr。 
 
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
MT8676  Android DVR 
User Manual 
Confidential B 
 
图 1-1. DVR 架构 
 
 DVR 的整体流程 
下图是 DVR 的整体流程，以 MP4 录制为例。 
 
首先 recorderMgr 是录制管理器，每一路录制都会新增一个 recorderMgr 实例，在 recorderMgr 下新增一个
StagefrightRecordSmp 实例。MediaCodecSource 会把数据送到 encodec 编码，编码完数据通过 mediaCodecSource 回
去。 
 
Video：编码前的数据源是 camera，camera 会把数据送到 bufferqueue 中，再通过 graphicBufferSource、OMX 把数
据送到 encodec 去编码，编码完后的数据就是 H264 格式，再存到 MediaCodecSource。 
 
Audio：编码前的数据来源是 mic，从 mic 取到数据后再去解码编码，完成后的数据格式是 aac。 
 
Writer：有两个 Track，video track 和 audio track。track 会从 MediaCodecSource 持续读数据，根据 MP4 的格式，去
封装，加些规格信息，再写到 sdcard 文件中。 
 
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
MT8676  Android DVR 
User Manual 
Confidential B 
 
图 1-2. DVR 的整体流程 
 
 MP4 Writer 流程 
下图是 MP4 writer 流程，与 TS 流程没有太多差异，不同的是 TS 因为没有头文件信息，会写一帧 video 再写一帧
audio，会根据 video 和 audio 的 PTS，选出小的 PTS 把 index 返回，去判断接下来是写 video 还是 audio。 
 
 
图 1-3. MP4 writer 流程 
 
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
MT8676  Android DVR 
User Manual 
Confidential B 
1.3 配置/客制指南 
 进入 recorder 的三个入口 
1) startRecord：开启录制 
2) stopRecord：停止录制 
3) notifyRecordEvent：动态设置参数 
 
 常用的 DVR 功能 
1.3.2.1 子码流 
子码流不落盘，只回调一份 H264 数据或 TS 数据。 
  
开启方法：在 startRecord 时带入参数：VIDEO_FRAME_MODE_SOURCE 
 
和正常录制的差别在于正常录制是写到磁盘中，子码流是回调数据给到 APP，recorderMgr 有两个 outTrack 从
mediacodecSource 读数据，回调 H264 和 AAC 数据，然后通知给 APP。 
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
MT8676  Android DVR 
User Manual 
Confidential B 
 
图 1-4. 子码流的流程 
 
1.3.2.2 打点保护 
功能：保护指定时长的视频，挪到 protect 目录。 
 
应用场景： 
示例 1：手动打点：用户开车发现景色特别美，想拍个视频保护起来，手动触发打点保护 。 
示例 2：被动打点：开车过程中突然出现碰车，想把碰车前后一段时间的视频保护起来，追究事故责任， GSensor 
碰撞触发打点保护。 
 
实际操作：从当前录制的视频文件中抽取指定时长的视频，生成新的视频文件，放到 protect 目录下。 
API： 
lockRecordingVideo(int duration); 
参数：duration 高 16bit 表示前向保护时长，低 16bit 表示后向保护时长；客户可以指定前向和后向保护时长，如
果没有设置前向，默认前向保护时长和后向一样。 
 
 
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
MT8676  Android DVR 
User Manual 
Confidential B 
打点保护有如下三个案例： 
前后保护10s为例：打点发生于30s，产生的普通录像duration小于正常情况下的60s。
会产生一个20s的紧急录像文件(打点前10s + 后10s)
1) 打点后的普通录像文件会保存到sdcard/dcim/camera/front目录下
2) 紧急录像的文件会移到sdcard/dcim/camera/protect/keypoint目录下
0 60
30
40
4020
正常录制文件
时间
打点时间点
紧急录像文件
时间
打点后普通录制文件
时间 0 当前文件duration变为
40s(30s+10s)
截取打点后普通录
制文件成20s数据
打点保护案例一
 
 
前后保护10s为例: 打点发生于55s，产生的普通录像duration大于正常情况下的60s。
会产生一个20s的紧急录像文件(打点前10s + 后10s)
1) 打点后的普通录像文件会保存到sdcard/dcim/camera/front目录下
2) 紧急录像的文件会移到sdcard/dcim/camera/protect/keypoint目录下
0 60
55
65
6545
正常录制文件
时间
打点时间点
紧急录像文件
时间
打点后普通录制文件
时间 0 当前文件duration变为
65s(55s+10s)
截取打点后普通录
制文件成20s数据
打点保护案例二
 
 
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
MT8676  Android DVR 
User Manual 
Confidential B 
前后保护10s为例:打点发生于65s，紧急录像的范围横跨了前后普通录像的两个文件
会产生一个20s的紧急录像文件(打点前10s + 后10s)。文件由前一个文件的5s和当前文件的15s
组成。
1) 打点后的普通录像文件会保存到sdcard/dcim/camera/front目录下
2) 紧急录像的文件会移到sdcard/dcim/camera/protect/keypoint目录下
0 60
65
60
7555
正常录制文件
时间
打点时间点
紧急录像文件
时间
打点后普通录制文件
时间 0 当前文件duration变为
15s(60~65 + 65~75)
120
75
合并打点后普通录
制文件成20s数据
打点保护案例三
 
 
1.4 常见问题/故障排除 
 DVR 常见问题分析 
1.4.1.1 meta data 分辨率未配置导致 DVR 闪退 
错误日志：创建 stream 失败 
01-08 14:23:38.652375   572  2400 E mtkcam-AppStreamMgr: [0-ConfigHandler::checkStream] 
unsupported size 2560x1920 for format 0x22/rotation:0 - {.v3_2 = {.id = 2, .streamType = 
OUTPUT, .width = 2560, .height = 1920, .format = IMPLEMENTATION_DEFINED, .usage = 
CPU_READ_NEVER | CPU_WRITE_NEVER | VIDEO_ENCODER (0x10000), .dataSpace = UNKNOWN | 
STANDARD_UNSPECIFIED | TRANSFER_UNSPECIFIED | RANGE_UNSPECIFIED | BT709 (0x104), .rotation = 
ROTATION_0}, .physicalCameraId = "", .bufferSize = 0} 
(checkStream){#619:vendor/mediatek/proprietary/hardware/mtkcam3/main/hal/device/3.x/app/AppS
treamMgr.ConfigHandler.cpp} 
01-08 14:23:38.652400   572  2400 E mtkcam-AppStreamMgr: [0-ConfigHandler::checkStreams] 
streams[id:2] has a bad status: -22(Invalid argument) 
(checkStreams){#652:vendor/mediatek/proprietary/hardware/mtkcam3/main/hal/device/3.x/app/App
StreamMgr.ConfigHandler.cpp} 
 
根本原因： 
camera hal 会根据上层传下的分辨率和格式去检查 meta data 配置然后去创建 stream，如果没有在 meta data 中配
置会导致创建 stream 失败。 
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
MT8676  Android DVR 
User Manual 
Confidential B 
 
解决方法： 
在mt6771/hal/imgsenor_metadata/common/config_static_metadata_scaler.h 中加入配置（默认 preview
是 yuv420_888，DVR 是 IMPLEMENTATION_DEFINED 格式，camera hal 会转成 yv12，请将该分配率的所有格式都加
上，例如 yv12 参考如下） 
CONFIG_ENTRY_VALUE(HAL_PIXEL_FORMAT_YV12, MINT64) 
CONFIG_ENTRY_VALUE(2560, MINT64) 
CONFIG_ENTRY_VALUE(1920, MINT64) 
CONFIG_ENTRY_VALUE(MTK_SCALER_AVAILABLE_STREAM_CONFIGURATIONS_OUTPUT , MINT64) 
CONFIG_ENTRY_VALUE(66666666, MINT64)    // frame duration 
CONFIG_ENTRY_VALUE(33333333, MINT64)    // stall duration 
 
1.4.1.2 comprofile 中格式配置错误导致录制视频只有声音没有画面 
错误日志： 
CarCamDeviceClient: [0][startRecord] enter usage: 5, parmas: enable-file-time=1;preview-fps-
range=25,25;recording-hint=true;drop-camera-frame=0;watermark-img-mode=off;watermark-text-
mode=on;watermark-preview-en=1;watermark-timestamp-format=%Y-%m-%d %H:%M:%S;watermark-
timestamp-ms=0;watermark-font-file=/system/fonts/NotoSansCJK-Regular.ttc;watermark-
area=(250,739,540,803,1);watermark-text-size=41.33;watermark-text-x=0.0;watermark-text-
y=41.33;watermark-area-ex1=(156,60,844,124,1);watermark-area-
ex2=(156,136,844,200,1);preview-size=176x144;picture-size=176x144;watermark-text-color=-
1;watermark-text-ex1=0.000000E  0.000000N;watermark-text-ex2=车牌:  车速:0km/h  CH 1;free-
size-limit=900;preview-frame-rate=25;record-id=Cam_0#Rec_0;video-param-camera-id=0;video-
output-file=/storage/967A-A2AF/CH1;video-output-file-name=CH1_%Y%m%d%H%M%S%n;video-lock-
file=/storage/967A-A2AF/protect;lock-file-name-prefix=Key;video-output-format=2;video-
encoder=1;video-size=176x144;video-frame-rate=25;video-param-encoding-bitrate=2500000;audio-
s 
 
根本原因： 
camcorderProfile 中设定 video-encoder 的格式为 H263，导致录制视频没有 video 数据。 
 
解决方法： 
1. 将客户在device\mediatek\对应的 project 下的 media_profiles.xml 中添加的分辨率如下，改成 H264。 
        <EncoderProfile quality="high" fileFormat="mp4" duration="30"> 
            <Video codec="h263" 
                   bitRate="17000000" 
                   width="1920" 
                   height="1080" 
                   frameRate="30" /> 
            <Audio codec="aac" 
                   bitRate="128000" 
                   sampleRate="48000" 
                   channels="1" /> 
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
MT8676  Android DVR 
User Manual 
Confidential B 
        </EncoderProfile> 
 
2. 参考 carcoderMcam demo 中设定 camcorderProfile.videoCodec = MediaRecoder.videoEncoder.h264 
 
1.4.1.3 Audio error 导致 DVR 闪退 
错误日志： 
CarCamDeviceClient07-23 14:34:40.560212   632  5835 E AudioRecord: start(60): status -38 
07-23 14:34:40.560237   632  5835 D AudioRecord: start(60): return status -38 
07-23 14:34:40.560297   632  5835 D AudioRecord: ~AudioRecord(60): mStatus 0 
 
根本原因： 
Audio start error 导致 DVR start error。 
 
解决方法： 
Audio 作者表示 audio 底层只有一路，在 start 还未开启时再开启另一路会导致 start 失败。apk 不可以将每一路
start record 另开线程处理。 
 
1.4.1.4 SD 卡出错导致数据积累 DVR 报错 
错误日志： 
Line 4303: 06-10 18:36:53.491197  1044 22716 I ActivityManager:   ntv   ??  700733: 
smartplatformserver (pid 611) native 
Line 4695: 06-10 18:37:42.784050  1044  1141 I AnrManager:   48% 611/smartplatformserver: 
24% user + 23% kernel / faults: 24655 minor 7193 major 
Line 436043: 06-10 18:14:53.203727   611  2971 I CarCamDeviceClient: 
[0][notifyStatusChanged] usage = 5, status=3, arg1=6, arg2=comment=sdcard_damaged , arg3:0 
Line 499031: 06-10 18:15:43.163869   611  2969 I RecorderMgr: [Cam_1#Rec_0][recordMgrNotify] 
param: comment=sdcard_damaged 
Line 499034: 06-10 18:15:43.163988   611  2969 I CarCamDeviceClient: 
[1][notifyStatusChanged] usage = 5, status=3, arg1=6, arg2=comment=sdcard_damaged , arg3:1 
Line 505241: 06-10 18:15:48.164704 611 3061 E MPEG4WriterSmp: 
[Cam_1#Rec_0][bitrateCheckThread] [1]preBitrate:500000, buffer so large,stop record, 
mNotifySdcardDamaged:1  
 
根本原因：  
SD 卡损坏或者是其它原因导致读写速度变慢，数据积累过多后 DVR 报错。 
 
解决方法： 
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
MT8676  Android DVR 
User Manual 
Confidential B 
请客户更换 SD 卡测试，并在触发 mNotifySdcardDamaged 消息传给上层时，参考 CarcoderDemoActivity.java 中注册
的 Videocallback，对 sdcard_damaged 消息实作 stop record，预防内存泄漏。 
 
1.4.1.5 分辨率超过 encoder 能力导致 DVR 出错 
错误日志： 
01-17 16:18:27.647951   567  3129 E MtkOmxVenc: [0xf01c2000] [ERROR] cannot support H.264 
(2560x1920) encoder 
01-17 16:18:27.647972   567  3129 E MtkOmxVenc: [0xf01c2000] [ERROR] cannot init encode 
driver 
 
根本原因： 
8666/8667 venc 支持的最大分辨率是 1080p。 
 
解决方法： 
DVR 录制需要设定 1080P 及以下的分辨率。 
 
1.4.1.6 录制过程中拔插 SD 卡 
错误日志： 
05-23 20:08:21.014271  2369  4131 W System.err: android.os.DeadObjectException  //kk 
05-23 20:08:21.014416  2369  4131 W System.err:     at 
android.os.BinderProxy.transactNative(Native Method) 
05-23 20:08:21.014473  2369  4131 W System.err:     at 
android.os.BinderProxy.transact(BinderProxy.java:540) 
05-23 20:08:21.014497  2369  4131 W System.err:     at 
com.mediatek.smartplatform.ICarCamDeviceUser$Stub$Proxy.stopRecord(ICarCamDeviceUser.java:78
4) 
05-23 20:08:21.014521  2369  4131 W System.err:     at 
com.mediatek.smartplatform.SpmCameraDeviceImpl.stopRecord(SpmCameraDeviceImpl.java:766) 
 
根本原因： 
拔 SD 卡时，AKP 会收到广播，ACTION_MEDIA_EJECT，这时 APK 会下 stop record 动作，底层停止录制。但是 vold
发出这个广播后，会立马杀还在使用 SD 卡的进程，kill smartplatformserver，导致停止录制失败。 
 
解决方法： 
在/system/vold/utils.cpp 中，function killProcessesUsingPath 中最开始的地方，加入等待 5s： 
if(sSleepOnUnmount) sleep(5); 
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
MT8676  Android DVR 
User Manual 
Confidential B 
vold 发出这个广播，等待停止录制结束，这样 vold 不会去杀 smartplatformserver。 
 
 
 
 
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
MT8676  Android DVR 
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
# SRC0157 MT8676_Android_FastRVC_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_FastRVC_User_Manual_V1.0.pdf

SHA-256：bf16d2b93d43ff18181e2e59182d17957213bf10b129e0740809278bba39ae54

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0157.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Android FastRVC User Manual 
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
MT8676 Android FastRVC 
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
MT8676 Android FastRVC 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 FastRVC ······································································································································································ 4 
1.1 概述·········································································································································································· 4 
1.2 架构/流程概览 ························································································································································ 4 
1.3 配置/客制化指南 ···················································································································································· 5 
1.4 常见问题/故障排除 ················································································································································ 6 
1.4.1 FastRVC 问题调试 ········································································································································· 6 
1.4.2 FastRVC 调试日志开关方法 ························································································································· 6 
1.4.3 为实现快速出图需要客户手动修改的部分 ······························································································· 6 
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
MT8676 Android FastRVC 
User Manual 
Confidential B 
1 FastRVC 
1.1 概述 
本章节介绍 MT8676 FastRVC 基本功能以及常见问题的调试方法。 
 
FastRVC 全称 Fast Rear View Camera。快速倒车需要冷开机后 4 秒内显示摄像头的画面，正常要 cameraserver、
camerahalserver、surfaceflinger 等进程正常运行后，摄像头画面才会显示，这一过程需要十几秒，无法满足快速倒
车的需求；因此开发 FastRVC (instantcam) 程序，用于实现快速倒车功能。 
 
1.2 架构/流程概览 
 
图 1-1. FastRVC 工作流程 
 
FastRVC (instantcam)是在开机阶段，文件系统挂载完成之后启动的一个进程，主要是监听倒车事件，然后送给
framebuffer 显示倒车画面。 
 
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
MT8676 Android FastRVC 
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
项目开启快速倒车功能，配置修改如下： 
device/mediatekprojects/auto8676p1_64_bsp_fp/device-vext.mk 
+ PRODUCT_COPY_FILES += 
$(LOCAL_PATH)/instantcam.rc:$(TARGET_COPY_OUT_VENDOR)/etc/init/instantcam.rc 
device/mediatekprojects/auto8676p1_64_bsp_fp/instantcam.rc 
+ service instantcam /vendor/bin/instantcam 
+ class core 
+ oneshot 
+ socket rvc_socket stream 660 radio system 
+ group audio camera input drmrpc sdcard_r sdcard_rw system media graphics 
 
开机默认开启倒车信号： 
vendor/mediatek/proprietary/hardware/external/mtkInstantCam/instantcam.cpp 
-#define MTK_DEFAULT_CAR_REVERSE_SUPPORT 0 
+#define MTK_DEFAULT_CAR_REVERSE_SUPPORT 1 
 
指定当前项目传感器类型： 
vendor/mediatek/proprietary/hardware/external/mtkInstantCam/instantcam.cpp 
param.sensorType = Mtk::MTK_SENSOR_FEATURE_SENSOR_TYPE_DMS 
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
MT8676 Android FastRVC 
User Manual 
Confidential B 
表示使用单路 YUV 中的 DMS 传感器作为 FastRVC 的传感器，可根据需要修改。 
 
1.4 常见问题/故障排除 
 FastRVC 问题调试 
1.4.1.1 FastRVC 快速倒车功能出图时间 
开机阶段的时间节点，使用如下命令查看 
 
adb shell cat /proc/bootprof  [单位：ms（毫秒）] 
 
不同硬件平台存在差异，需要客户调试，以实测数据做为参考。 
 
1.4.1.2 FastRVC 客制化开发导致画面卡顿 
客户反馈开机阶段画面卡顿，原因是客户在显示函数主线程中 频繁使用了PROP_SET 函数，从而导致开机阶段的耗
时增加。建议客户避免每帧都设置 PROP_SET，另外使用子线程处理耗时操作，避免卡住主线程。 
 
 FastRVC 调试日志开关方法 
基本分析需提供开机阶段日志，串口日志以及 logcat 日志。 
针对开机阶段出现无法打印或者缺失 instantcam 日志的问题，客户后续客制化开发时可以使用add_boot_event
函数将日志输出到 bootprof 中。对于关键日志的排查，可以参考这种方式打印和排查。 
 
 为实现快速出图需要客户手动修改的部分 
由于 FastRVC 存在一些修改，默认情况下不会上传至 main project。因此，在发布给客户的版本中，该功能也是未
启用状态。针对对 RVC 时间较为敏感的客户，建议参考 MediaTek 公版 fp project 中关于时间优化的部分进行修
改，以达成快速出图的目标。 
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
MT8676 Android FastRVC 
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
# SRC0158 MT8676_Android_FBE_Debug_SOP_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_FBE_Debug_SOP_V1.0.pdf

SHA-256：2ce096834385ecd1a47bdcffdf4a87557c3da67c976686436c03eb9c7da30393

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0158.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2025-07-11 
MT8676 Android FBE Debug SOP 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2025-07-11 晏晓阳 正式版 
 
  
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
Table of Contents 
版本记录 ··········································································································································································· 2 
Table of Contents ······························································································································································· 3 
1 与 FBE 相关的开机流程 ············································································································································ 4 
 Init 流程 ··································································································································································· 4 
 early-fs ·························································································································································· 5 
 late-fs ···························································································································································· 5 
 post-fs-data ················································································································································· 10 
2 检查 FBE 相关的设定 ·············································································································································· 12 
 检查配置文件 ························································································································································ 12 
 ProjectConfig.mk ········································································································································· 12 
 fstab ···························································································································································· 12 
 验证 FBE 是否有开启 ············································································································································ 12 
 查看 property ············································································································································· 12 
 查看 CE 文件是否为密文 ·························································································································· 13 
3 FBE 相关的问题 ······················································································································································ 14 
 如何确认是做加密还是解密 ································································································································ 14 
 如何关闭 FBE 功能 ················································································································································ 14 
 USB 全量升级，恢复出厂设置，第二次开机启动后 FBE Key 异常 ·································································· 14 
 执行 metadata 加密时候，fs_mgr 卸载 data 分区失败 ····················································································· 15 
 执行 metadata 加密时候，异常断电，data 分区加密未完成 ·········································································· 15 
 执行 metadata 加密过程中，metadata key 被破坏 ···························································································· 15 
 后续开机解密流程，如果异常如何恢复， 怎样确认是加密问题还是解密问题，或是分区被破坏  ············ 16 
4 其他网上资料 ························································································································································· 17 
Exhibit 1 Terms and Conditions ········································································································································ 18 
 
 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
1 与 FBE 相关的开机流程 
Android FBE 是 Android 系统的原生功能。FBE 的加解密过程在设备开机的 init 阶段进行。因此，要了解 FBE 相关的
流程，首先需要熟悉开机时 init 的流程。 
 
 Init 流程 
根据开机流程 ，init 阶段会解析 init.rc 中的 action。图 1-1 是开机 init 进程的流程图。  
 
图 1-1. 开机 init 流程图 
 
对于 FBE ，需要关注的开机阶段主要有如下几个： 
1. early-fs 
– start vold 
2. late-fs 
– early-hal (keymaster) 
– mount_all –late 
  
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
3. post-fs-data 
– installkey /data 
– init_user0 
 
 early-fs 
vold 会在on early-fs 阶段启动，后续 FBE 加解密的动作都将由 vold 发起。 
 
 late-fs 
1． 在on late-fs 阶段，主要关注两个动作： 
– early-hal (keymaster)：这个动作会启动 keymaster，为后续加解密做准备。 
– mount –late：这个动作主要用于挂载 userdata 分区，FBE 加解密正是针对userdata 分区进行的。 
 
2． mount userdata ：首先尝试挂载userdata 分区，并调用prepare_fs_for_mount 进行准备。 
 
  
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
3． 上面 mount userdata 的结果有两种情况： 
– 首次开机（刷机或执行 factory reset 之后）：在这种情况下，挂载操作返回成功，表示分区没有加密，首次
尝试挂载时就成功了（mret=true）。此时需要判断是否需要加密，因为在首次开机时分区未加密，挂载成
功后需要先卸载分区，然后进入加密流程。 
– 非首次开机：经过首次开机后，data 分区处于加密的状态。此时检查文件系统会返回错误，出现 invalid 
magic 的错误。这是正常现象，并不是文件系统损坏的标志。 
 
 
 
卸载分区后，会进入 vdc encryptFstab 流程。需要注意的是，无论是对分区进行加密还是解密，最终调用的 API
都是相同的。 
“crypts”  encryptFstab   ：对分区做加密 
“crypts”  mountFstab  ：对分区做解密 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
 
 
上述流程中，对 userdata 进行加密和解密最终都会进入以下流程： 
 
 
从上述流程进入以下步骤时，如前所述，加密和解密最终都会调用 fscrypt_mount_metadata_encrypted 函数。
区别在于第三个参数，该参数用于指示是否需要加密。 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
 
 
4． 从上述位置进入vold 的system/vold/MetadataCrypt.cpp 中的fscrypt_mount_metadata_encrypted 函
数。在这个流程中，主要有三个步骤： 
– Step 1 和 Step 2：根据是否需要加密来决定设备是加密 key 还是解密 key。 
– Step 3：创建用于加解密的设备。 
 
 
创建完加解密设备后，调用 mount_via_fs_mgr 并带入crypto_blkdev。 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
 
 
这个流程会进入 FS 的挂载过程。
 
 
5. 最后，流程回到fs_mgr 中的fs_mgr_do_mount。此时，如果blk_device 需要解密，系统会先进行解密，
确保读取到的magic 是正确的，然后进入第二步的__mount。 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
 
 post-fs-data 
在 data 分区挂载成功后，系统会进入 post-fs-data 阶段。在init.rc 中，会执行 installkey /data 的操作，
这个操作会调用do_installkey 函数，并进入VDC enablefilecrypto 的流程。 
 
 
最终，这个流程会进入 vold 中的fbeEnable()函数。 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
 
 
一路执行后，流程会进入 vold 中的相关 API。
 
 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
2 检查 FBE 相关的设定 
 检查配置文件 
与 FBE 相关的配置文件有 ProjectConfig.mk 和fstab，只有配置正确，FBE 才会正常开启。 
 
 ProjectConfig.mk 
查看 /device/mediateksample/yourproject/ProjectConfig.mk，如下 3 个配置需要是 no/no/yes。 
 MTK_ENCRYPTION_DEFAULT_OFF = no 
 MTK_ENCRYPTION_FDE_TO_FBE = no 
 MTK_ENCRYPTION_TYPE_FILE = yes 
 
 fstab 
查看代码中vendor/mediatek/proprietary/hardware/fstab/mtxxxx，或者在平台上敲命令 
cat /vendor/etc/fstab.mtXXXX (XXXX 为平台代号)。 
/dev/block/by-name/userdata /data f2fs     
noatime,nosuid,nodev,discard,noflush_merge,fsync_mode=nobarrier,reserve_root=134217,resgid=1
065,inlinecrypt 
wait,check,formattable,quota,latemount,resize,reservedsize=128m,checkpoint=fs,fileencryption
=aes-256-xts:aes-256-
cts:v2+inlinecrypt_optimized,keydirectory=/metadata/vold/metadata_encryption,fsverity   
需要确认 data 分区有如上红色部分的配置参数。 
 
 验证 FBE 是否有开启 
验证平台上的 FBE 是否有开启，可以通过查看 property，以及查看数据是否有加密。 
 
 查看 property 
输入如下命令查看是否有这些 property。 
getprop | grep crypt 
 
如下情况表示 FBE 已开启。 
[ro.crypto.metadata.enabled]: [true] 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
[ro.crypto.state]: [encrypted] 
[ro.crypto.type]: [file] 
[ro.crypto.uses_fs_ioc_add_encryption_key]: [true] 
[ro.crypto.volume.filenames_mode]: [aes-256-cts] 
 
如下情况表示 FBE 未开启。 
[ro.crypto.state]: [unsupported] 
[ro.crypto.volume.filenames_mode]: [aes-256-cts] 
 
 查看 CE 文件是否为密文 
1. 查看当前是哪个 user。 
am get-current-user 
10 
2. 设置锁屏密码之后重启。 
3. 重启进到开机密码的界面，不要输入密码。 
4. 通过 shell 命令访问该 user 的 CE 数据。 
ls /data/user/10/ （此处以 user 10 示例） 
5. 如果 FBE 正常开启，则在未解锁的状态下，看到的都是密文，说明已加密，如下图：  
 
 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
3 FBE 相关的问题 
 如何确认是做加密还是解密 
在开机 log 中搜索关键字 encryptFstab 和mountFstab。  
 encryptFstab 加密，刷机或恢复出厂设置之后，首次开机时进行 
 mountFstab 解密，非首次开机都会进入解密流程 
 
 如何关闭 FBE 功能 
修改/device/mediateksample/yourproject/ProjectConfig.mk，如下 3 个配置都改为 no。 
MTK_ENCRYPTION_DEFAULT_OFF = no 
MTK_ENCRYPTION_FDE_TO_FBE = no 
MTK_ENCRYPTION_TYPE_FILE = no 
需要注意的是，关闭 FBE 仅用于 debug，理清是否由 FBE 带来的问题。 
 
 USB 全量升级，恢复出厂设置，第二次开机启动后 FBE Key 异常 
1. 在恢复出厂设置后，设备相当于第一次开机。在这个过程中，Android 系统不会立即进行解密，而是首先进行
加密操作。加密完成后，才会进行解密操作。如果在恢复出厂设置后的第一次开机时，发现 userdata 无法挂
载，首先需要考虑在恢复出厂设置的过程中，userdata 是否受到了损坏。 
2. 在恢复出厂设置后的第二次开机时，系统会尝试使用在第一次开机时生成的 metadata key 来解密 userdata 分
区。如果在挂载时出现 invalid magic 错误，系统会进入 metadata 解密流程。 
如果解密失败或出现异常，可能的原因包括： 
– Metadata Key 不存在或异常：如果 metadata key 在第一次开机时没有正确生成或存储，解密过程将无法进
行。 
– Keymaster 出错：Keymaster 负责管理加密密钥，如果它出现故障或无法正常工作，解密过程可能会失败。  
– 文件系统损坏：如果在上次关机时 userdata 分区正在写入数据，而系统突然断电，可能导致文件系统损
坏，从而影响挂载和解密过程。 
3. 在 metadata 解密成功后，userdata 分区可以成功挂载。接下来，在 FBE 启用阶段，系统会检测到 FBE 已开
启，并执行 installkey 操作。在这个过程中，系统会将 FBE Class Key 和 Keymaster Key 以 KeyBlob 的形式存储到
userdata 分区。当系统非首次启动时，会从 userdata 分区提取 FBE Class Key 和 Keymaster Key 对应的
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
KeyBlob，并通过 TEEOS 的 Keymaster TA 进行解密。通常，FBE key 的问题较少出现，主要与 Keymaster 和 TEE
相关。如果出现问题，可能需要检查 Keymaster 的状态和 TEE 的配置，以确保密钥管理和解密过程的正常进
行。 
 
 执行 metadata 加密时候，fs_mgr 卸载 data 分区失败 
 Metadata 加密过程：通常在设备烧录后的第一次开机或恢复出厂设置后的第一次开机时执行。在 mount_all 
--late 阶段，系统会尝试挂载 data 分区并成功。如果检测到 FBE metadata 加密已开启，系统会先执行卸载
流程。在卸载 data 分区时，如果失败，需要根据 unmount failed 的返回值进行调试。一般情况下，卸载失败
是因为有进程正在使用 userdata 分区。然而，根据谷歌的原生流程，此时 Android 组件尚未启动，因此需要
检查是否有客制化的进程在访问 data 分区。 
 处理挂载失败：如果由于上述异常导致 userdata 分区挂载失败，谷歌的原生流程通常会在 init_user0 阶段失
败，并进入恢复模式（recovery mode）。用户可以在恢复模式中执行恢复出厂设置（factory reset）来解决问
题。这一机制帮助用户在遇到系统无法正常启动时，通过恢复出厂设置来重新配置系统。  
 
 执行 metadata 加密时候，异常断电，data 分区加密未完成 
如果在加密过程中系统断电，导致 data 分区未完成加密，这类问题可能会导致 userdata 分区无法挂载。谷歌的原
生流程通常会有一些机制来处理这种情况。 
在这种情况下，系统可能会在 init_user0 阶段失败，并进入恢复模式（recovery mode）。用户可以在恢复模式中执
行恢复出厂设置（factory reset）来解决问题。 
谷歌可能会针对这类问题发布补丁（Google patch），以改善系统在异常情况下的处理能力。建议查看谷歌的更新
日志或相关文档，以了解是否有针对这种情况的补丁或解决方案。  
 
 执行 metadata 加密过程中，metadata key 被破坏 
整个 metadata 的加密过程是由谷歌的原生流程处理的。如果 metadata key 被破坏，通常需要检查用户操作或文件
系统方面是否存在异常，例如异常断电或异常写入行为。由于 metadata 是一个读写（RW）分区，key 的破坏通常
与文件系统的异常操作相关联。 
如果由于这些异常导致 userdata 分区挂载失败，谷歌的原生流程通常会在 init_user0 阶段失败，并进入恢复模式
（recovery mode）。在这种情况下，用户可以通过恢复模式执行恢复出厂设置（ factory reset）来解决问题。 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
 后续开机解密流程，如果异常如何恢复， 怎样确认是加密问题还是解
密问题，或是分区被破坏 
分区损坏是导致挂载失败的常见问题之一。解密失败通常与 Keymaster 的错误有关。为了诊断这些问题，可以在
开机日志中查找与 keystore 或keymaster 相关的关键字，查看是否有相关的错误日志。 
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
MT8676 Android FBE 
Debug SOP 
Confidential B 
4 其他网上资料 
因为 FBE 是 Android 原生的功能，网上有很多资料，以下是一些推荐的总结资料： 
1. https://source.android.com/docs/security/features/encryption/file-based?hl=zh-cn 
2. https://blog.csdn.net/cs_tech/article/details/127579028 
3. https://blog.csdn.net/feelabclihu/article/details/131016357 
 
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
MT8676 Android FBE 
Debug SOP 
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
# SRC0159 MT8676_Android_General_Introduction_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_General_Introduction_V1.1.pdf

SHA-256：4276ac3d43b181b362f5b976d77ff79217e99f4b140f3eeb27a8582e4c034931

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0159.html)

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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 谭新梅 正式版 
1.1 2024-11-19 谭新梅 删除表 1-1. MT8676 基本信息中的 Android 13 
 
  
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
MT8676 Android 
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
MT8676 Android 
General Introduction 
Confidential B 
1.2 MT8676 基本信息 
表 1-1. MT8676 基本信息 
项目 信息 
系统 Android U  
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
MT8676 Android 
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
# SRC0160 MT8676_Android_GPS_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_GPS_User_Manual_V1.0.pdf

SHA-256：4372e62da7d87002e5138f919ba78b4664beb8f610ecd75d7fa70b6ccc878605

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0160.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-08-12
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 Neo.Sun 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 GPS ············································································································································································ 4 
1.1 概述·········································································································································································· 4 
 简单介绍 ······················································································································································ 4 
 GPS 缩略词 ··················································································································································· 4 
1.2 架构/流程概述 ························································································································································ 4 
1.3 配置/客制化指南 ···················································································································································· 6 
 固定速率配置 ·············································································································································· 6 
 多卫星导航系统配置··································································································································· 6 
1.4 常见问题/故障排除 ················································································································································ 7 
 AOSP 原始观测值 ········································································································································· 7 
 Log 相关问题 ················································································································································ 8 
 测试相关问题 ·············································································································································· 8 
 GNSS 路径 ····················································································································································· 9 
附件一 附加条款 ····························································································································································· 10 
 
 
图片目录 
图 1-1. GPS 架构 ········································································································································································ 5 
图 1-2. 固定速率配置 ································································································································································ 6 
图 1-3. GNSS 配置 ······································································································································································ 7 
图 1-4. AOSP Raw Measurement 流程 ······································································································································ 8 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 4 
 
 
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
1.1 概述 
 简单介绍 
本章节介绍 MT8676 GPS 的基本功能以及常见问题的解决方法。 
 
 GPS 缩略词 
表 1-1. 缩略词 
缩略词 全称 释义 
COLD start - 有时间辅助资讯，终端用户不会遇到该场景。 
FULL start - 没有任何的辅助资讯，相当于终端用户第一次买
到手机后使用定位应用的场景。 
GNSS Global Navigation Satellite System 全球导航卫星系统 
GPS Global Positioning System 全球定位系统 
Hot start - 有所有的辅助资讯，终端用户此次定位距离上次
定位小于 2～4 小时。 
NMEA National Marine Electronics Association 用于在海洋电子设备之间进行数据交换的通信协
议，广泛应用于 GPS/GNSS 接收器数据输出。 
TTFF Time To First Fix 导航设备从开机到成功获取第一次有效定位数据
所需要的时间。 
WARM start - 有时间和位置辅助资讯，终端用户此次定位距离
上次定位超过 2～4 个小时。 
 
1.2 架构/流程概述 
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
MT8676 Android GPS 
 User Manual 
Confidential B 
 
图 1-1. GPS 架构 
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
1.3 配置/客制化指南 
 固定速率配置 
固定速率（Fix Rate）是指 GNSS 上报位置信息的速率，目前 MT8676 可以支持的固定速率包括：1Hz、2Hz、5Hz 和
10Hz，默认配置是 1Hz 输出。修改固定速率的方法如下： 
 
方法 1：修改代码，配置fix_interval 参数。fix_interval = 100 对应 10Hz；fix_interval = 1000 对应
1Hz。 
 
 
图 1-2. 固定速率配置 
 
方法 2：动态修改配置文件，重启 GNSS 后生效。 
命令：echo fix_interval=1000 >> /data/vendor/gps/mnl.prop    /配置成 1Hz，重启 GPS 后生效。 
 
 多卫星导航系统配置 
MT8676 支持 GPS + GLONASS + Galileo + BeiDou 多卫星导航定位系统，gnssopmode 默认配置成
MTK_CONFIG_GPS_GLONASS_BEIDOU_GALILEO_NAVIC（默认配置的 GNSS 性能最佳，建议使用默认配置）。 
 
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
 
图 1-3. GNSS 配置 
 
1.4 常见问题/故障排除 
 AOSP 原始观测值 
AOSP 原始观测值（AOSP Raw Measurement ）是指 GNSS 卫星观测值，包括原始信息和加工后的信息。MT8676 GPS
支持 AOSP 原始观测，该测量属于 Android 原生流程，其工作流程如下图所示。具体使用方法请参考 《Google 开发
文档》。 
 
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
 
图 1-4. AOSP Raw Measurement 流程 
 
 Log 相关问题 
• 联发科技的工程师需要哪些 log 用于分析问题？ 
/data/debuglogger/mobilelog，以及 /data/debuglogger/connsyslog 
• 如何通过 log 判断 GPS 软件工作正常？ 
请通过检查是否有 NMEA Sentence 出现在 log 中，如果出现，表示软件正常。 
 
 测试相关问题 
• 测试前需要检查是否有卫星信号，是否处于 open sky 的环境 
测试 GNSS 搜星或定位功能，信号需要 open sky 的环境下，例如空旷的室外或者有信号放大器的实验室。 
能够定位是有前提条件的 CNR 为 40~43dbm 的卫星要>6 颗。 --->测 GNSS 一定要注意这个，如不确认当前信号
环境是否符合要求，拿一个对比机放在同样的环境做对比。  
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
• 如何测试 FULL start、WARM start、COLD start、HOT start 这几种启动方式的 TTFF？ 
请使用工程模式下的 YGPS 或使用如下 adb 命令打开 YGPS，通过 FULL、COLD、WARM、HOT 按钮来测试。 
adb shell am  start com.mediatek.ygps/.YgpsActivity 
 
 GNSS 路径 
source code: vendor\mediatek\proprietary\hardware\connectivity\gnss 
 
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
# SRC0161 MT8676_Android_GPU_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_GPU_User_Manual_V1.0.pdf

SHA-256：81862b4f99af859aa8fedaccd7eb34196c510dc8eecb4e5a50b2d38f37b47dfd

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0161.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-08-12
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
MT8676 Android GPU 
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
 Android 图形系统框架 ································································································································· 5 
 Arm Mali-G615 架构及功能 ························································································································· 6 
1.3 常见问题/故障排除 ················································································································································ 7 
 GPU 渲染分析 ·············································································································································· 7 
 GPU 性能分析 ·············································································································································· 9 
附件一 附加条款 ····························································································································································· 12 
 
 
图片目录 
图 1-1. Android 图形框架 ························································································································································· 5 
图 1-2. Arm Mali-G615 架构 ······················································································································································ 6 
图 1-3. MGD ··············································································································································································· 8 
图 1-4. MGD 配置 ······································································································································································ 8 
图 1-5. 建立连接········································································································································································ 9 
图 1-6. Streamline 使用示例 ··················································································································································· 10 
 
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
MT8676 Android GPU 
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
MT8676 Android GPU 
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
 Android 图形系统框架 
Android 图形系统框架如下所示： 
 
 
 
图 1-1. Android 图形框架 
  
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
 
 Arm Mali-G615 架构及功能 
Arm Mali-G615 架构请参考下图： 
 
图 1-2. Arm Mali-G615 架构 
 
Arm Mali-G615 Feature Support 请参考表 1-1： 
 
表 1-1. Arm Mali-G615 feature support 
Features Value Description 
Anti-Aliasing • 4x MSAA 
• 8x MSAA 
• 16x MSAA 
4x Multi-Sampling Anti-Aliasing (MSAA) with 
minimal performance drop. 
API Support • OpenGL® ES 1.1, 2.0, 3.1, 3.2 
• Vulkan 1.1, 1.2, 1.3 
Full support for next-generation and legacy 
2D/3D graphics applications. 
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
• OpenCL™ 1.1, 1.2, 2.0 Full 
Profile 
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
出现屏幕绘制异常时，一般可以从三个方面进行分析，分别是 SF/HWC/Display、GPU 和 APK。判断是否为
SF/HWC/Display 问题，首先可以查看 log 中是否有 display 相关错误，根据 log 进行下一步分析；其次平台有两种叠
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
MT8676 Android GPU 
 User Manual 
Confidential B 
GPU 问题在 log 中搜索是否有 Mali/EGL/GLES/HWUI 等关键字相关的错误，根据错误进行下一步分析。也可以使用
一些调试工具，例如 GPUD 和 Graphics API Debugger、Mali Graphics Debugger、RendorDoc 等，这些工具可以帮助
分析问题。也可以一些做有关 GPU 的对比实验。 
 
APK 问题需要请 APK 共同分析，是否绘制时使用 GL 接口的问题，或者传入绘制的纹理不对等情况。 
 
1.3.1.1 MGD 使用示例 
 
图 1-3. MGD 
 
Mali Graphics Debugger (MGD) 指 Mali 专用的 debug 工具，可以抓取目标进程的 GPU 的渲染流程进行分析。使用命
令对平台需要进行准备操作包括以下命令： 
adb root； 
adb remount ； 
adb shell setenforce 0 
 
配置 MGD，按照图 1-4 中标红的顺序进行配置。配置完成后需要 set property to MGD，使用以下命令： 
adb shell "setprop vendor.debug.gpu.provider 'mgd’” 
adb shell "getprop vendor.debug.gpu.provider" 
adb shell "stop;start“ 
 
 
图 1-4. MGD 配置 
 
最后建立平台与 MGD 的连接如图 1-5。连接完成后即可抓取目标进程的渲染过程。 
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
 
图 1-5. 建立连接 
 
1.3.1.2 GPU 相关对比实验 
常见对比实验如下： 
(1) 谷歌对比机是否可复现 
(2) 问题与 Android 系统版本是否相关 
(3) 上一代 GPU 框架（Midgard/Bifrost）平台是否可复现 
(4) 问题是否与 GPU Driver Version 有关 
(5) 关掉 AFBC 是否复现 
(6) 强制 glFinish 是否复现 
(7) 关掉 partial update 是否复现 
(8) 问题是否和 ASTC、MSAA 相关 
(9) HWUI render pipeline 切换实验 
(10) RenderEngine backend 切换实验 
(11) 其他方面等 
 
 GPU 性能分析 
对于 GPU 的性能问题分析，通常有三个方面包括 GPU 问题、APK 问题和其他模块或系统相关问题。GPU 问题可以
查看 Android log 和 kernel log 中有没有 Mali/EGL/GLES/HWUI 关键字的错误 log，根据 log 进行下一步的分析。可以
使用工具抓问题场景的 systrace 或 perferro 进行分析，以及使用 ARM Streamline 检查 HW 执行情况，查看具体是哪
一个部分影响到 GPU 的性能。也可以做一些针对性的对比实验，细分影响性能的部分。 
对于 APK 部分，也可以使用 systrace 或 perferro 进行分析，是否为 APK 原因。其他模块或系统相关问题可以通过
log 和火焰图进行分析。 
 
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
 
1.3.2.2 Streamline 示例 
Streamline 可以查看 GPU HW 的执行情况和执行使用时间。 
 
图 1-6. Streamline 使用示例 
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
1.3.2.3 性能优化建议 
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

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Android GPU 
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
# SRC0162 MT8676_Android_I2C_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_I2C_User_Manual_V1.0.pdf

SHA-256：9d35060e0261f340ad93de9785cd05d7827300af2e102c334e12295478726c86

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0162.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-11-15
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
版本记录 
版本 日期 作者 描述 
1.0 2024-11-15 张厚松 正式版 
 
  
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
 MT8676 I2C 功能 ·········································································································································· 6 
 I2C 传输格式 ················································································································································ 6 
1.3 配置/客制化指南 ···················································································································································· 7 
 设备树 ·························································································································································· 7 
 频率 ······························································································································································ 7 
1.4 常见问题/故障排除 ················································································································································ 8 
 I2C 问题调试方法 ········································································································································ 8 
 DTS 配置 ······················································································································································· 8 
 确认 GPIO 模式 ············································································································································ 8 
 测量波形 ······················································································································································ 8 
 如何打印 I2C 寄存器信息···························································································································· 8 
 寻求联发科技帮助 ······································································································································ 9 
附件一 附加条款 ····························································································································································· 10 
  
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
图片目录 
图 1-1. I2C Master 和 I2C Slave 之间的引脚连接 ····················································································································· 5 
图 1-2. I2C 传输格式 ································································································································································· 6 
 
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
MT8676 Android I2C 
User Manual 
Confidential B 
1 I2C 
1.1 概述 
 简单介绍 
本章节介绍 MT8676 I2C 控制器的硬件、软件及其功能。  
 名词解释 
表 1-1. 名词解释 
缩写 全称 释义 
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
 I2C 介绍 
I2C 控制器是一种双向、双线串行接口，利用串行时钟线（SCL）和串行数据线（SDA） 信号。这些信号可由 I2C 中
的主设备或从设备驱动。此通用控制器支持主设备角色并符合 I2C 规范。 
 MT8676 I2C 功能 
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
 I2C 传输格式 
图 1-2 说明了 I2C 的 SM/FM/FM+ 使用的基本传输格式。 
首先，主机发送一个启动条件。随后，主机发送它打算与之通信的 I2C 从属设备的 7 位静态地址。一旦从属设备响
应寻址，主机就会发送/接收数据。数据传输完成后，主机发送停止条件，总线返回到自由状态。  
 
Slave Address AS DATA A P
Slave Address AS DATA nA P
Master Write
Master Read
 
图 1-2. I2C 传输格式 
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
1.4 常见问题/故障排除 
 I2C 问题调试方法 
大多数遇到的 I2C 问题都可先尝试通过如下方式调试： 
• 检查 salve device 初始化，供电是否正常 
• 检查 DTS 配置、GPIO 模式属性是否正确 
• 检查 I2C 寄存器信息是否正确（可以提供 log 给 RD） 
 DTS 配置 
请按照前文的提供的信息，检查 DTS 配置是否正确。 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Android I2C 
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
# SRC0163 MT8676_Android_IPO_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_IPO_User_Manual_V1.0.pdf

SHA-256：d5578aaa112e1ee2fcfa7b41814e688670ef50022b8baf75744f2c879b8b6835

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0163.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 刘锋 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 IPO 概述 ···································································································································································· 5 
1.1 基本介绍 ·································································································································································· 5 
1.2 为什么需要 IPO ······················································································································································· 5 
2 名词解释 ··································································································································································· 6 
3 架构概述 ··································································································································································· 7 
3.1 Android IPO 架构 ····················································································································································· 7 
3.2 Android 系统中硬件电源管理的两种情形 ············································································································ 7 
3.3 各硬件对应进出 IPO 的电源管理方案 ·············································································································· 8 
4 配置/客制化指南 ···················································································································································· 13 
4.1 HU 端配套修改 ··············································································································································· 13 
4.2 代码改动介绍 ················································································································································· 13 
4.3 USB 连接 ································································································································································ 14 
4.4 如何客制化进入和退出 IPO 过程动画 ············································································································ 14 
4.5 自定义 IPO 白名单 ·········································································································································· 14 
4.6 在退出 IPO 时，杀死进程 ······························································································································· 15 
4.7 进入/退出 IPO 时，通知 Java 进程 ················································································································· 16 
4.8 进入/退出 IPO 时，如何通知 Native 进程 ······································································································ 16 
5 常见问题解答 ························································································································································· 17 
5.1 关闭 IPO 时产生的关键日志 ··························································································································· 17 
5.2 用命令开启 IPO 时产生的关键日志················································································································ 17 
5.3 用电源键开启 IPO 时产生的关键日志 ············································································································ 18 
5.4 因碰撞开启 IPO 时产生的关键日志················································································································ 18 
5.5 进入 IPO 后，如何排查功耗高的原因 ············································································································ 18 
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
5.6 IPO 调试命令说明 ··········································································································································· 19 
附件一 附加条款 ····························································································································································· 20 
 
图片目录 
图 3-1. IPO 架构 ········································································································································································· 7 
图 3-2. IPO 关机流程 ······························································································································································· 11 
图 3-3. 退出 IPO 开机流程 ······················································································································································ 12 
图 4-1. USB 模式切换 ······························································································································································ 14 
图 4-2. 动画客制化·································································································································································· 14 
图 4-3. Hard code 方式设置白名单 ········································································································································ 15 
图 4-4. 白名单示例代码 ·························································································································································· 15 
图 4-5. 通知 Native 进程的示例代码 ····································································································································· 16 
 
表格目录 
表 2-1. 名词解释········································································································································································ 6 
表 3-1. 各硬件进出 IPO 的电源管理方案 ································································································································ 8 
表 3-2. 不同模式下 CPU 和进程的状态 ································································································································· 10 
表 3-3. IPO 接口说明 ······························································································································································· 10 
表 4-1. IPO 相关代码修改 ······················································································································································· 13 
 
 
  
 
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
1 IPO 概述 
1.1 基本介绍 
本文档主要介绍了 MT8676 IPO 快速开机功能并提供了 IPO 常见问题的分析方法。 
IPO，全称 Instant Power On，即快速开机，对于汽车 ACC On 之后快速进入倒车画面以及启动车载录像功能非常实
用。 
 
1.2 为什么需要 IPO 
• 在当前智能汽车控制系统中，设备启动时间是衡量性能的重要指标。   
• IPO 是一种软件解决方案，设备可以在可配置的时间内启动，且无需额外的硬件成本，它利用 Android 
Suspend 功能创造了一种新的用户体验。 
• 在设备进入 IPO 期间，系统中运行的大多数进程和服务将被 ActivityManagerService 停止或杀死，以防止意外
行为；当系统进入 Suspend 状态之后，用户可以通过外部事件或远程事件唤醒系统以退出 IPO 模式，从而实
现快速启动。 
• 用户可能每天都会点火、熄火，对开关速度有要求，不想等待过久。  
• 即使用户感觉车机已经关机，但这只是一种假关机，实际上没有真的 关机，而是进入 early_suspend 或者
Suspend 状态，车机仍可以接受远程指令。 
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
2 名词解释 
表 2-1. 名词解释 
缩略词 全称及释义 
HU Head Unit 主机 
IHUHU Infotainment Head Unit 信息娱乐主机 
IPO Instant Power On 快速开机 
IVI In-Vehicle Infotainment 车载信息娱乐系统 
T-Box Telematics-BOX 车联网控制单元 
 
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
3 架构概述 
3.1 Android IPO 架构 
 
图 3-1. IPO 架构 
 
3.2 Android 系统中硬件电源管理的两种情形 
1. 独立的电源管理逻辑，不依赖 Kernel Suspend 流程（比如 Camera/Display 等）。 
驱动程序发现没有人访问设备时就掉电，有人访问时就上电并获取 WakeLock。 
 
2. 依赖 Kernel Suspend/Resume 架构 
• HW Driver（硬件驱动）实现 Kernel Driver（内核驱动）要求的 Suspend/Resume 函数。 
• 若没有人持有 WakeLock，系统进入 Suspend 状态时会调用每个 HW Driver 的Suspend()。 
• 系统被唤醒，进入 Resume 状态时也会调用每个 HW Driver 的Resume()。 
• HW Driver 独立实现 Suspend/Resume 函数来自行控制上电/掉电。 
 
以上两种情形对应的电源管理方案如下： 
1. IPO 关机时，触发所有使用者放弃访问硬件设备：第 1 阶段掉电。 
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
2. IPO 关机时，清除硬件使用场景，释放 WakeLock，进入 Suspend 状态：第 2 阶段掉电。 
 
 
 
Figure 3-1. Suspend/Resume 流程 
 
3.3 各硬件对应进出 IPO 的电源管理方案 
表 3-1. 各硬件进出 IPO 的电源管理方案 
模块 Suspend 阶段 进入 IPO 关机处理 退出 IPO 开机处理 
GPS 2 
IPO 杀 HU 端 AP 来清除 GPS 应用场景 
停止使用 GPS；GPS SW 进 Suspend 
IPO 开机不做处理 
BT 1 IPO 会关 BT；BT SW 进 Suspend IPO 会开 BT 
WIFI 1 IPO 会关 WIFI；WIFI SW 进 Suspend IPO 会开 WIFI 
TTY 2 清除 TTY 使用场景 
Kernel Suspend -> TTY Driver Suspend 
IPO 开机不做处理 
Kernel Resume -> TTY Driver Resume 
SPI 2 清除 SPI 使用场景 
Kernel Suspend -> SPI Driver Suspend 
IPO 开机不做处理 
Kernel Resume -> 对应 Driver Resume 
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
模块 Suspend 阶段 进入 IPO 关机处理 退出 IPO 开机处理 
Camera 1 
IPO 杀 HU 端 AP 来清除摄像头应用场景 
EVS 收到 ACC OFF 会停止摄像头使用 
摄像头驱动会掉电 
IPO 开机不做处理 
若有人使用摄像头，摄像头驱动会上电 
Sensor 2 
IPO 杀 HU 端 AP 来清除传感器应用场景 
是否还有传感器使用场景 
Kernel Suspend -> Sensor Driver Suspend 
IPO 开机不做处理 
Kernel Resume -> 对应 Driver Resume 
EPROM 2 
IPO 杀 HU 端 AP 来关闭 EPROM 应用场景 
是否还有其他使用场景 
Kernel Suspend ->Sensor Driver Suspend 
IPO 开机不做处理 
Kernel Resume -> 对应 Driver Resume 
Display 1 
IPO 调用 PMS_FW 进 Early Suspend 
Display Driver 会给 Display 断电 
1. IPO 开机会调用 PMS_FW 开背光 
2. Display Driver 通过 GPIO 通知 MCU 
Mic noise  
elimination 2 
进 IPO 关机,配合移除使用场景 
驱动程序进 Suspend 后掉电 
IPO 开机不做处理 
Kernel Resume -> 对应 Driver Resume 
Mic D/A  
conversion 2 
进 IPO 关机,配合移除使用场景 
驱动程序进 Suspend 后掉电 
IPO 开机不做处理 
Kernel Resume -> 对应 Driver Resume 
USB Hub 2 
进 IPO 关机,配合移除使用场景 
驱动程序进 Suspend 后掉电 
IPO 开机不做处理 
Kernel Resume -> 对应 Driver Resume 
Ethernet 2 
进 IPO 关机,配合移除使用场景 
驱动程序进 Suspend 后掉电 
IPO 开机不做处理 
Kernel Resume -> 对应 Driver Resume 
 
 不同模式下 CPU 和进程的状态 
• 软件进程状态：Running (占用 CPU 运行)，Suspend (主动放弃 CPU 资源等待执行)，Killed（杀死） 
• CPU 状态：Wakeup (亮屏)，Early Suspend (唤醒状态 & 灭屏)，Suspend (休眠) 
 
 
 
 
 
 
 
 
 
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
表 3-2. 不同模式下 CPU 和进程的状态 
 MT8676 Android 
 CPU T-Box 进程 Java Core 进程/Native 进程 任务进程 
全工作模式 Early Suspend/ 
Suspend/Wakeup Suspend/Running Suspend/Running Suspend/Running 
半工作模式 Early Suspend Running Running Killed 
休眠模式 Suspend Suspend Suspend Killed 
 
 IPO 接口说明 
表 3-3. IPO 接口说明 
接口/结构 描述 
public static void lowpowerStartIPO() 
PowerManagerService 提供的 IPO 关机接口 
1. 杀白名单之外的 App，关闭 BT/WIFI/GPS 等外设，熄屏。 
2. AP 释放 WakeLock 后，系统进入休眠模式。 
public static void lowpowerStopIPO(int flag) 
PowerManagerService 退出 IPO 开机接口 
参数：0 (熄屏)，1 (亮屏) 
系统进入全工作模式。 
 
 IPO 接口调用时序 
3.3.3.1 进入 IPO 关机流程 
• 红色方框：白名单之外的 App 可以接收 ACTION_SHUTDOWN_HU 广播并做清理动作。 
• 紫色方框：调用 Android 层接口，关外设，移除外设使用场景。 
• 黄色方框：杀死非白名单内 App 和黑名单内 Native 进程。 
 
IPO 假关机状态 
 
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
 
图 3-2. IPO 关机流程 
 
3.3.3.2 退出 IPO 开机流程 
点火唤醒中断/Modem 电话短信 -> 唤醒 Kernel -> 执行退出 IPO    
开机动画和开机流程并行处理。 
 
• 紫色方框：在发广播前主动唤醒在第一阶段关闭的设备 。 
• 红色方框：可以接收 ACTION_BOOT_HU 广播做初始化动作。 
• 黄色方框：发出 Android 原生开机广播，启动期望开机自启动的 App。 
 
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
 
图 3-3. 退出 IPO 开机流程 
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
4 配置/客制化指南 
4.1 HU 端配套修改 
客制化的应用程序可以监听以下 2 个广播: 
 
• com.mediatek.intent.action.ACTION_SHUTDOWN_HU：关机前做一些处理 
• com.mediatek.intent.action.ACTION_BOOT_HU：开机前做一些处理 
 
4.2 代码改动介绍 
表 4-1. IPO 相关代码修改 
AOSP Repo 修改文件 修改原因 
frameworks/base core/java/android/os/IPowerManager.aidl 
新增进入 IPO 
Service 接口 
frameworks/base core/res/AndroidManifest.xml 
定义 IPO 开机关机
广播 
frameworks/base services/core/java/com/android/server/power/PowerManagerService.java 
新增进入 IPO 服务
接口 
IPO 关机，跳过 
WakeUp 请求 
frameworks/base services/core/Android.bp 加载 MediaTek IPO 
Jar 
frameworks/base services/core/java/com/android/server/policy/PhoneWindowManager.java 
IPO 关机，跳过 key
事件 
vendor/mediatek/proprietary 
/frameworks/opt/ipo java/com/mediatek/ipomanager/IpoManagerService.java IPO 核心类 
vendor/mediatek/proprietary 
/external/ipod * 
进入 IPO 后，IPOD 
检测到 power key 
事件后退出 IPO 
 
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
4.3 USB 连接 
进入 IPO 后，断开 USB 需要切换到 Device 模式，才能休眠；退出 IPO 时，再切换到 Host 模式，防止 USB Kernel 持
锁导致无法进 Suspend；退出 IPO 后，恢复 USB 连接。 
代码路径：vendor/mediatek/proprietary/external/ipod/ipod.rc 
 
 
图 4-1. USB 模式切换 
 
4.4 如何客制化进入和退出 IPO 过程动画 
代码路径：vendor/mediatek/proprietary/frameworks/opt/ipo/IpoManagerService.java 
 
 
图 4-2. 动画客制化 
 
默认 bootanim 时间是 2 秒，这个时间可以根据需求客制化。 
 
4.5 自定义 IPO 白名单 
白名单里的进程，在进入 IPO 时不会被杀死。 
 
代码路径：vendor/mediatek/proprietary/frameworks/opt/ipo/IpoManagerService.java 
 
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
• 使用 Hard code 方式设置白名单，请参考下图： 
 
图 4-3. Hard code 方式设置白名单 
 
• 使用 Dynamic 方式设置白名单： 
setprop persist.ipo.shutdown.process.wl 
 
如/com.xx.yy/com.zz.ww，请参考下图： 
 
图 4-4. 白名单示例代码 
 
4.6 在退出 IPO 时，杀死进程 
配置persist.ipo.prebootkill.list。 
 
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
4.7 进入/退出 IPO 时，通知 Java 进程 
当 IPO 关闭的时候，接收 com.mediatek.intent.action.ACTION_SHUTDOWN_HU 广播。 
当 IPO 开启的时候，接收 com.medaitek.intent.action.ACTION_BOOT_HU 广播。 
4.8 进入/退出 IPO 时，如何通知 Native 进程 
将属性触发器流程添加到 init.rc 文件。 
示例代码: 
 
图 4-5. 通知 Native 进程的示例代码 
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
5 常见问题解答 
5.1 关闭 IPO 时产生的关键日志 
关键词：LowPowerStartIPO/ IpoManagerService/ IPODMAIN/ipod 
 
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
 
5.2 用命令开启 IPO 时产生的关键日志 
关键词：LowPowerStopIPO/ IpoManagerService 
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
03-07 08:37:56.648  1188  1639 D PowerManagerService: LowPowerStopIPO 
03-07 08:37:56.648  1188  1639 D CarTbox : [IpoManagerService] Power_status_6.2 
03-07 08:37:56.649  1188  1639 D CarTbox : [IpoManagerService] lowPowerHuBoot start 
03-07 08:37:56.649  1188  1639 D CarTbox : [IpoManagerService]huStatus:shutdown-done 
03-07 08:37:56.649  1188  1639 D CarTbox : [IpoManagerService]pre reqeustscreen:1 
03-07 08:37:56.651  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = AUDIO_RESTORE 
03-07 08:37:56.652  1188  1401 D CarTbox : [IpoManagerService]unmuteSystem 
03-07 08:37:56.653  1188  1401 D CarTb ox : [IpoManagerService]handleMessage msg.what = 
BOOT_ANIMATION_START 
03-07 08:37:56.653  1188  1401 D CarTbox : [IpoManagerService] startBootAnimation 
03-07 08:37:56.664  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = WAIT_MESSAGE 
…. 
03-07 08:37:57.175  1188  1401 D CarTbox : [IpoManagerService]handleMessage msg.what = USB_RESTORE 
03-07 08:37:57.175  1188  1401 D CarTbox : [IpoManagerService]start_usb 
 
5.3 用电源键开启 IPO 时产生的关键日志 
关键词：IPO_RESUME_REASON /LowPowerStopIPO/ IpoManagerService 
 
03-07 08:45:14.497  4839  4846 I IPODMAIN: <ipo resume system>IPO_RESUME_REASON:powerkey. 
03-07 08:45:14.498  4839  4846 I IPODMAIN: LowPowerStopIPO 
 
5.4 因碰撞开启 IPO 时产生的关键日志 
关键词：GSENSOR_COLLISION /LowPowerStopIPO 
 
09-15 14:41:54.560  7545  7551 I IPODMAIN: handleEvent: event 2 mHasCallback = 0 
09-15 14:41:54.560  7545  7551 I IPODMAIN: IPO_SHUTDOWN_PROP: shutdown-done  
09-15 14:41:54.560  7545  7551 I IPODMAIN: sendBroadcastMessage android.intent.action.GSENSOR_COLLISION 
09-15 14:41:54.560  7545  7551 I IPODMAIN: sendBroadcastMessage(): Action: c, Value: 2 
09-15 14:41:54.603  7545  7551 I IPODMAIN: LowPowerStopIPO 
09-15 14:41:54.603  1174  7404 D PowerManagerService: LowPowerStopIPO 
 
5.5 进入 IPO 后，如何排查功耗高的原因 
1. cmd 命令：dumpsys power 
检查是否存在partial WakeLock。 
2. 检查 UART 日志，排查系统被谁唤醒。 
3. cmd 命令：cat /sys/kernel/debug/wakeup_sources 
检查Kernel wakeup_sources。 
 
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
MT8676 Android IPO 
User Manual 
Confidential B 
5.6 IPO 调试命令说明 
1. 默认 Kernel 开机十几秒后，UART 不会打印日志，输入以下命令可以让 UART 日志持续打印（重新开机也会生
效）：adb shell setprop persist.vendor.uartconsole.enable 1 。 
2. 进 IPO 会断开 USB adb 连接，如果不想断开，可以开机后输入以下命令： 
adb shell setprop sys.ipo.usb 1 
3. 进入 IPO 命令：adb shell service call power 56 
4. 退出 IPO 命令：adb shell service call power 57 i32 1 
 
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
MT8676 Android IPO 
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
# SRC0164 MT8676_Android_OTA_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_OTA_User_Manual_V1.0.pdf

SHA-256：5b4522578daf0c990428cf50963fda608f8424848e2dde8cbd33cb09178d13bd

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0164.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-08-12
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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 Ming Ji 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 OTA ············································································································································································ 5 
1.1 概述·········································································································································································· 5 
 目的 ··························································································································································· 5 
 目标读者 ···················································································································································· 5 
 如何使用本文档 ········································································································································ 5 
1.2 参考文件 ·································································································································································· 6 
1.3 OTA 升级的定义 ······················································································································································ 6 
1.4 OTA 缩略词 ······························································································································································ 7 
1.5 打开 A/B 系统升级 ·················································································································································· 7 
1.6 架构概述 ·································································································································································· 7 
 Preloader 启动控制流程 ··························································································································· 8 
 A/B 系统分区布局 ····································································································································· 8 
 A/B 系统升级中 Ramdisk 的存放位置 ····································································································· 9 
 Boot Control HAL and HIDL ······················································································································ 10 
 A/B 系统升级进程 ··································································································································· 12 
 虚拟 A/B··················································································································································· 12 
1.7 生成 A/B 系统 OTA 包的指南 ······························································································································· 13 
 利用 split build 1.0 (LD1.0) 逐步生成 A/B 系统 OTA 升级包 ································································· 13 
 利用 split build 2.0 (LD2.0) 逐步生成 A/B 系统 OTA 升级包 ································································· 16 
1.8 A/B 系统升级的限制 ············································································································································· 18 
1.9 如何使用和调试 A/B 系统升级 ···························································································································· 18 
 如何使用 A/B 系统升级 ·························································································································· 18 
 如何调试 A/B 系统升级 ·························································································································· 19 
1.10 常见问题 ································································································································································ 19 
 设备是否需要同时烧录 A/B 分区？ ······································································································ 19 
 如何确定 AB 系统当前运行在哪个分区（A 或 B）？ ········································································· 19 
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
 当系统从 slot_a 启动时，是否允许去加载 B 分区（例如：系统从 A 分区启动，LK 阶段去加载
boot_b 分区）？ ··················································································································································· 20 
 需要 AB 升级的分区需要满足什么条件？ ··························································································· 20 
 如何去打开和关闭 A/B 系统？ ·············································································································· 20 
 A/B 与 non-A/B 之间是否允许相互升级？ ··························································································· 20 
 系统如何去设定 boot_sucessfully 标志位？ ························································································· 20 
附件一 附加条款 ····························································································································································· 21 
 
 
图片目录 
图 1-1. Preloader 启动控制流程 ··············································································································································· 8 
 
表格目录 
表 1-1. 章节概述········································································································································································ 6 
表 1-2. 缩略词 ··········································································································································································· 7 
 
 
 
 
  
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
1.1 概述 
A/B 系统更新的介绍如下: 
 
• 这是一项新的 OTA 功能，又称为无缝更新。 
• 设备不会变砖（从新系统启动失败后可以回滚到旧系统）。 
• 磁盘上始终保留一个可启动的系统。 
• OTA 升级保持在正常模式的后台运行，用户无感。 
 
 
 
 目的 
本文档为用户提供了 A/B 系统更新的指南。它描述了如何在 Android 平台上生成 OTA 包。本手册还详细说明了在 
联发科技平台上启用 A/B 系统更新（无缝更新）功能所需的机制。 
 
 目标读者 
本文档主要面向如下群体： 
• 具备 OTA A/B 系统更新（无缝更新）技术知识的工程师 
 
 如何使用本文档 
本部分解释了本文档中信息的分布方式，并提供了一些提示和示例，以简化在本文档中查找和理解信息。 下表概
述了本文档中的章节和附录。 
 
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
表 1-1. 章节概述 
# 章节 描述 
1 概述 描述了本文档的范围和布局 
2 参考文件 参考网站或文档 
3 OTA 升级的定义 规定了 OTA 升级的定义 
4 OTA 缩略词 列举了 OTA 缩略语 
5 打开 A/B 系统升级 在联发科技平台打开 AB 系统升级 
6 架构概述  AB 系统升级的架构介绍 
7 生成 A/B 系统 OTA 包的指南 介绍如何制作 OTA 全量升级包和差分升级包 
8 A/B 系统升级的限制 列出了 A/B 系统升级的限制 
9 如何使用和调试 A/B 升级 使用和调试 A/B 升级的方法 
10 常见问题 给出了常见问题及答案 
 
1.2 参考文件 
[1] The Android OTA Package Tools: https://source.android.com/devices/tech/ota/tools.html 
[2] A/B (Seamless) System updates:  
https://source.android.com/devices/tech/ota/ab_updates 
https://source.android.com/devices/tech/ota/inside_packages.html 
[3] Implementing A/B Updates: https://source.android.com/devices/tech/ota/ab_implement 
[4] Virtual A/B Updates: https://source.android.com/docs/core/ota/virtual_ab 
[5] Configure ART: https://source.android.com/devices/tech/dalvik/configure 
[6] Ramdisk storage location: https://source.android.com/docs/core/architecture/partitions/generic -boot 
 
1.3 OTA 升级的定义 
OTA 的专业术语定义如下： 
全包升级：全包升级是指对设备的待升级分区数据进行完整的更新，升级包内包含各个分区的完整 image 信息。 
增量升级：增量升级是指对设备的待升级分区数据与目标版本对应分区数据的差异部分进行更新，升级包内只包
含两个版本的差异部分，这能极大缩减升级包的大小。 
批注：只能在编译差分包时使用的旧版本或源版本的设备上安装对应的增量更新包。 
虚拟 A/B：Google 在 A/B 的基础上新增了虚拟 A/B 功能，可以使用由设备映射器创建的 COW 设备来节省超级分区
大小。 
 
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
1.4 OTA 缩略词 
本文档使用的缩略语如下： 
表 1-2. 缩略词 
缩略词 全称 释义 
LK Little Kernel 微型内核 
OTA Over-The-Air 空中下载升级 
 
1.5 打开 A/B 系统升级 
请在以下文件中将 MTK_AB_OTA_UPDATER 设置为 yes （如果相应文件中不存在 MTK_AB_OTA_UPDATER，请在文件
中添加此配置）： 
• ProjectConfig.mk:  
– device/mediatekprojects/<project_name>/ProjectConfig.mk 
• Preloader: 
– vendor/mediatek/proprietary/bootable/bootloader/preloader/custom/<project_name>/<pr
oject_name>.mk 
• SystemConfig.mk: 
– device/mediatek/system/<mssi_xxxx> /SystemConfig.mk 
 
如果项目使用 LK： 
• LK: 
– vendor/mediatek/proprietary/bootable/bootloader/lk/project/<project_name>.mk 
 
如果项目使用 LK2： 
• LK2: 
– vendor/mediatek/proprietary/bootable/bootloader/lk2/project/<project_name>.mk 
 
1.6 架构概述 
本章节简要描述系统的各个模块及其关系。 
 
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
 Preloader 启动控制流程 
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
 
图 1-1. Preloader 启动控制流程 
 
 A/B 系统分区布局 
各种类型系统的分区布局如下： 
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
 
 
各种系统的分区布局差异如下： 
• AB 系统不再需要 recovery 和 cache 分区。 
• 从 Android Q 开始，Google 增加了一个动态分区功能，将 system、vendor、product 等分区统一放在 super 分
区内。 
• 从 Android R 开始，Google 增加了虚拟 A/B 功能。系统只会保存一份当前系统的 system、vendor、product 等
super 子分区的镜像信息，从而节省 super 分区占用的存储空间。 
 
 A/B 系统升级中 Ramdisk 的存放位置 
不同 Android 版本内 ramdisk 信息的存储位置存在差异，详细信息请参考 Google 文档说明：
https://source.android.com/docs/core/architecture/partitions/generic-boot。 
1. 如果系统的 Android 版本低于 Android R，其 ramdisk 的打包位置如下： 
 
 
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
 
2. 如果系统的 Android 版本是 Android R 或 Android S，其 ramdisk 的打包位置如下： 
 
 
3. 从 Android T 开始，其 ramdisk 的打包位置如下： 
 
 
 Boot Control HAL and HIDL 
联发科技使用 AOSP 默认的 boot control HIDL 接口来访问 boot control HAL。 
bootctl 的源代码路径： hardware/interfaces/boot 
 
Boot control HAL for update_engine 
• Android version > = U： 
– bootctl 的源代码路径： vendor/mediatek/proprietary/hardware/bootctrl_service/  
• Android version > = R： 
– bootctl 的源代码路径： vendor/mediatek/proprietary/hardware/bootctrl/  
 
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
Preloader (PL)和 LK 也有 boot control API。 
• PL:  
– vendor/mediatek/proprietary/bootable/bootloader/preloader/platform/common/bootctrl/ 
• LK:  
– vendor/mediatek/proprietary/bootable/bootloader/lk/platform/common/bootctrl/1.0 
 
当设备首次启动时，preloader 阶段会去初始化 bootctl 参数，将其设定为默认初始值。 
 
 
在设备首次完成 OTA 升级后，它将从 slot_b 启动，因为 slot_b 比 slot_a 的优先级更高。 
 
 
设备首次成功从 slot_b 启动后，slot_b 的 successful_boot 将被设置为 1。 
 
 
当设备第二次从 slot_b 成功启动后，slot_b 的 tries_remaining 会被设置为 1。 
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
 
 
 A/B 系统升级进程 
• Update_engine: 
– 由 update_engine.rc 执行 
– 仅用于更新分区信息 
– 使用 update.zip 中的 payload.bin 来更新每个分区 
– 在 CPU 小核和系统后台运行 
– 调用 boot_control HAL/HIDL 接口 
– 在升级完所有的分区后，系统将从新分区执行一个 postinstall 程序 
 
Update_engine 无法实现如下功能： 
– 升级分区表 (修改分区布局) 
– 修改当前 slot 分区内的内容 
 
• Update_engine_client: 
– Update_engine_client 仅用于调试，此进程可以获取更新状态 
• Update_verifier: 
– Update_verifier 由 update_verifier.rc 执行 
– 如果产品支持 verity，检查 verity 模式是否为强制模式 
– 平台成功启动后将 slot 的 boot successful flag 置 1  
 
 虚拟 A/B 
• 虚拟 A/B 在 Android R 中引入，可以使用 COW 设备来节省超级分区大小，但在更新流程完成后，还需要在新
系统重启后将 COW 设备内的数据合并到 super 分区内组成新的 super.img。 
• 在搭载 Android 11 及更高版本的设备上，虚拟 A/B 是 GMS 要求。 
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
• 限制:  
– 虚拟 A/B 不支持在 recovery 模式下进行差分升级，Google 提供的虚拟 A/B 文档内对于该限制的描述如
下： 
The userdata partition cannot be mounted under recovery if it is encrypted. Free Blocks within the userdata 
partition cannot be determined, so we cannot allocate COW files on the userdata partition. Hence, we cannot 
create new snapshots in recovery. Sideloading an incremental OTA on a Virtual A/B device in recovery is 
impossible and unsupported  
 
• 虚拟 A/B 这个功能默认是开启状态，但是它可以通过修改编译流程来关闭。 
• 在 build/make/target/product/virtual_ab_ota.mk 中，PRODUCT_VIRTUAL_AB_OTA 及其属性已分配，
因此可以通过跳过此 makefile 并使用传统的 A/B 升级来禁用虚拟 A/B OTA，具体方法是删除 
device/mediatek/system/common/device.mk 和 device/mediatek/vendor/common/device.mk 中的
以下行，然后重新执行 split build。 
$(call inherit-product, $(SRC_TARGET_DIR)/product/virtual_ab_ota.mk) 
 
1.7 生成 A/B 系统 OTA 包的指南 
本章节描述了一组生成 A/B 系统 OTA 包的指南。从 Android Q 开始，联发科技默认仅支持 split build。请根据项目
使用的 split build 类型选择相应的编译方式。 
 
 利用 split build 1.0 (LD1.0) 逐步生成 A/B 系统 OTA 升级包 
1.7.1.1 Full Build Project with Full otapackage.zip and targefiles.zip 
1. Get split build 1.0 (LD1.0) command 
执行以下命令以获取完整的 split build 命令： 
./vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py full_${PROJ_NAME}-
${eng|userdebug|user} 
 
例如: 
• 输入指令： 
./vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py full_tb8786p1_64-
userdebug 
 
• 输出指令： 
source build/envsetup.sh && export OUT_DIR=out_sys && lunch sys_mssi_t_64_cn-userdebug && 
make sys_images 
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
 
source build/envsetup.sh && export OUT_DIR=out && lunch vnd_tb8786p1_64-userdebug && make 
vnd_images krn_images 
 
python out_sys/target/product/mssi_t_64_cn/images/split_build.py --system-dir 
out_sys/target/product/mssi_t_64_cn/images --vendor-dir 
out/target/product/tb8786p1_64/images --kernel-dir out/target/product/tb8786p1_64/images --
output-dir out/target/product/tb8786p1_64/merged 
 
以下三条指令分别代表： 
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
--output-dir out/target/product/tb8786p1_64/merged 
 
2. Build full otapckage.zip 
如果您需要编译全量升级包，请在 merge 指令后面添加 ‘--otapackage’ 参数。 
例如： 
python out_sys/target/product/mssi_t_64_cn/images/split_build.py  
--system-dir out_sys/target/product/mssi_t_64_cn/images  
--vendor-dir out/target/product/tb8786p1_64/images  
--kernel-dir out/target/product/tb8786p1_64/images  
--output-dir out/target/product/tb8786p1_64/merged  
--otapackage 
 
全包输出路径: 
例如：out/target/product/${PROJ}/merged/otapacakge.zip 
 
3. Build targetfiles.zip 
如果您需要编译 targetfiles.zip，请在 merge 指令后面添加 ‘--targetfiles’ 参数。 
例如： 
python out_sys/target/product/mssi_t_64_cn/images/split_build.py  
--system-dir out_sys/target/product/mssi_t_64_cn/images  
--vendor-dir out/target/product/tb8786p1_64/images  
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
--kernel-dir out/target/product/tb8786p1_64/images  
--output-dir out/target/product/tb8786p1_64/merged  
--targetfiles 
 
Target 包输出路径： 
例如：out/target/product/${PROJ}/merged/ target_files.zip 
 
1.7.1.2 Build Incremental Package 
首先将当前版本定义为 Source 版本，需要升级上去的版本定义为 Target 版本。如下是编译差分包的步骤： 
1. 请按照小节 1.7.1.1 Full Build Project with Full otapackage.zip and targefiles.zip 内的说明执行 split build，并获取
Source 版本和 Target 版本的 targetfiles.zip。请务必确保 Target版本的编译时间要新于 Source 版本的编译时间。 
2. 将 Source 版本的 targetfiles.zip 重命名为 "source.zip"，将 Target 版本的 targetfiles.zip 重命名为 "target.zip"。 
3. 在项目编译环境中，依次执行以下命令： 
Source & Lunch:  
source build/envsetup.sh && export OUT_DIR=out_sys && lunch sys_${SYS_RPOJ}-
${eng|userdebug|user} 
 
source build/envsetup.sh && export OUT_DIR=out && lunch vnd_${PROJ}-${SYS_PROJ}; 
 
Centralize tools to out/host/linux-x86:  
cp out_sys/host/linux-x86/* out/host/linux-x86/ -rf 
 
cp out_sys/soong/host/linux-x86/* out/host/linux-x86/ -rf 
 
cp out/soong/host/linux-x86/* out/host/linux-x86/ -rf 
 
Build incremental package: 
• Android version ≤ Android T:  
python3 build/tools/releasetools/ota_from_target_files --block -v -p out/host/linux-x86  -k 
device/mediatek/common/security/releasekey -i source.zip target.zip delta.zip 
 
• Android version ≥ Android U: 
./out/host/linux-x86/bin/ota_from_target_files -v -p out/host/linux-x86 -k 
device/mediatek/common/security/releasekey -i source.zip target.zip delta.zip 
 
如果您的项目没有 releasekey，请删除指令内的 “-k device/mediatek/common/security/releasekey”， 系统
将使用默认密钥（test key）。或者使用 -k 指定您项目使用的密钥路径。 
• source.zip: Source 版本的 targetfiles.zip。 
• target.zip: Target 版本的 targetfiles.zip。 
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
• delta.zip: 从 Source 版本升级到 Target 版本的差分升级包。 
批注：targetfiles.zip 和差分升级包的命名没有具体限制，客户可以根据自己的喜好设置名称。 
 
 利用 split build 2.0 (LD2.0) 逐步生成 A/B 系统 OTA 升级包 
1.7.2.1 Full Build Project with Full otapackage.zip and targefiles.zip 
1. Get split build 2.0 (LD2.0) command 
执行以下命令以获取完整的 split build 命令: 
./vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py full_${PROJ_NAME}-
${eng|userdebug|user} 
 
例如: 
• 输入指令： 
./vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py full_ 
auto8676p1_64_bsp-userdebug 
 
• 输出指令： 
source build/envsetup.sh && export OUT_DIR=out_sys && lunch sys_mssi_auto_64_cn_armv82_car-
userdebug && make sys_images  
 
source build/envsetup.sh && export OUT_DIR=out_hal && lunch hal_mgvi_spm_64_armv82-userdebug 
&& make hal_images 
 
source build/envsetup.sh && export OUT_DIR=out_krn && lunch krn_mgk_64_k61-userdebug && make 
krn_images 
 
source build/envsetup.sh && export OUT_DIR=out && lunch vext_auto8676p1_64_bsp-userdebug && 
make vext_images 
 
python out_sys/target/product/mssi_spm_64_cn_armv82/images/split_build.py  
--system-dir out_sys/target/product/mssi_spm_64_cn_armv82/images --vendor-dir 
out_hal/target/product/mgvi_spm_64_armv82/images  
--kernel-dir out_krn/target/product/mgk_64_k61/images  
--vext-dir out/target/product/auto8676p1_64_bsp/images  
--output-dir out/target/product/auto8676p1_64_bsp/merged 
 
这五条指令分别代表： 
• Build system 
source build/envsetup.sh && export OUT_DIR=out_sys && lunch sys_mssi_auto_64_cn_armv82_car-
userdebug && make sys_images  
 
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
如果您需要编译全量升级包，请再 merge 指令后面添加 ‘--otapackage’ 参数。 
例如： 
python out_sys/target/product/mssi_spm_64_cn_armv82/images/split_build.py  
--system-dir out_sys/target/product/mssi_spm_64_cn_armv82/images  
--vendor-dir out_hal/target/product/mgvi_spm_64_armv82/images  
--kernel-dir out_krn/target/product/mgk_64_k61/images  
--vext-dir out/target/product/auto8676p1_64_bsp/images  
--output-dir out/target/product/auto8676p1_64_bsp/merged  
--otapackage 
 
全量升级包路径: 
例如：out/target/product/${PROJ}/merged/otapacakge.zip 
 
3. Build targetfiles.zip 
如果您需要编译 targetfiles.zip，请在 merge 指令后面添加 ‘--targetfiles’ 参数。 
例如： 
python out_sys/target/product/mssi_spm_64_cn_armv82/images/split_build.py  
--system-dir out_sys/target/product/mssi_spm_64_cn_armv82/images  
--vendor-dir out_hal/target/product/mgvi_spm_64_armv82/images  
--kernel-dir out_krn/target/product/mgk_64_k61/images  
--vext-dir out/target/product/auto8676p1_64_bsp/images  
--output-dir out/target/product/auto8676p1_64_bsp/merged  
--targetfiles 
 
Target 包输出路径 : 
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
例如：out/target/product/${PROJ}/merged/ target_files.zip 
 
1.7.2.2 Build Incremental Package 
请参阅小节 1.7.1.2 Build Incremental Package 中的步骤来编译差分升级包。 
 
1.8 A/B 系统升级的限制 
本章节描述了 A/B 系统更新的限制。 
 
• OTA 不支持修改分区表和更改分区布局 
• 不支持修改当前插槽的分区内容 
• 不支持 non-AB 和 AB 之间的相互升级 
 
1.9 如何使用和调试 A/B 系统升级 
 如何使用 A/B 系统升级 
• Normal mode:  
– PC must install python  
– Put update_device.py (system/update_engine/scripts/update_device.py) to adb folder 
– Connect phone with PC via usb cable 
– python update_device.py --file update.zip in adb window 
 
 
• Recovery mode:  
– ADB sideload update (VAB only supports full OTA): 
▪ adb reboot recovery 
▪ choose “Apply update form ADB” on recovery UI 
▪ adb sideload d:\update.zip 
– SD card update: 
▪ adb push update.zip /storage/F205-EFBE (/storage/F205-EFBE is SD card mount directory) 
▪ adb reboot recovery 
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
▪ choose “Apply update form SD card” on recovery UI 
▪ go on choosing the update.zip fi 
 
 如何调试 A/B 系统升级 
Log location 
• Normal mode:  
– 方法一： 
▪ mtklog\mobilelog\APLogxxx\main_log 
▪ Search update_engine key word 
– 方法二： 
▪ adb pull data/misc/update_engine_log 
▪ Search update_engine key word 
• Recovery mode: 
– Adb pull /tmp/recovery.log 
 
Common error code 
• 所有 error code 的介绍都在 system/update_engine/common/error_code.h 
 
1.10 常见问题 
 设备是否需要同时烧录 A/B 分区？ 
• 不需要，只有 preloader 分区需要同时烧录 preloader_a 与 preloader_b 分区，其它的分区都默认只需要烧录 A
分区。  
• 在 flashtool 烧录完成后，平台默认从 A 分区启动。 
• 当 B 分区为空时，A 分区仍然可以通过 OTA 差分升级到 B 分区。 
 
 如何确定 AB 系统当前运行在哪个分区（A 或 B）？ 
• 检查属性 ro.boot.slot_suffix（getprop ro.boot.slot_suffix） 
• 在命令行中检查 androidboot.slot_suffix（/proc/cmdline） 
 
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
 当系统从 slot_a 启动时，是否允许去加载 B 分区（例如：系统从 A 分
区启动，LK 阶段去加载 boot_b 分区）？ 
• 不可以，系统启动 slot 和分区后缀必须保持一致，即 slot_a 启动只能加载 A 分区，slot_b 启动只能加载 B 分
区。 
 
 需要 AB 升级的分区需要满足什么条件？ 
• 如果分区需要 OTA 更新，该分区必须同时具有 _a 和_b 分区（super 分区除外）。 
 
 如何去打开和关闭 A/B 系统？ 
• 通过设定 MTK_AB_OTA_UPDATER 的，打开 A/B 设置为 yes，关闭 A/B 设置为 no。 
 
 A/B 与 non-A/B 之间是否允许相互升级？ 
• 不行，A/B 与 non-A/B 不允许相互升级。 
 
 系统如何去设定 boot_sucessfully 标志位？ 
• Update_verfier 进程会去设置 boot_sucessfully 
• 源代码位于 bootable/recovery/update_verifier/update_verifier.cpp 
 
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
MT8676 Android OTA 
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
# SRC0165 MT8676_Android_SDCard_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_SDCard_User_Manual_V1.0.pdf

SHA-256：a3042f158d97a85ec50802b34c9ed60e5b1fbc57d25d28f02dd31e8522301408

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0165.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-08-12
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
MT8676 Android SDCard 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 SDCard ······································································································································································· 4 
1.1 概述·········································································································································································· 4 
 基本概述 ······················································································································································ 4 
 缩略词 ·························································································································································· 4 
1.2 架构/流程概述 ························································································································································ 4 
 SDCard 介绍 ·················································································································································· 4 
 MT8676 SDCard 特征 ··································································································································· 5 
1.3 配置/客制指南 ························································································································································ 6 
 内核配置 ······················································································································································ 6 
 DTS 节点 ······················································································································································· 6 
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
表 1-1. 缩略词 ··········································································································································································· 4 
 
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
1.1 概述 
 基本概述 
本章节介绍 SDCard 控制器的硬件特性，软件配置和功能，以及常见问题的 debug 方法。 
 
 缩略词 
表 1-1. 缩略词 
缩略词 全称 
UHS-I Ultra High Speed Phase I card 
SDR12 Signal Data Rate up to 12.5MB/s@25MHz 
SDR25 Signal Data Rate up to 25MB/s@50MHz 
SDR50 Signal Data Rate up to 50MB/s@100MHz 
SDR104 Signal Data Rate up to 104MB/s@208MHz 
DDR50 Double Data Rate up to 50MB/s@50MHz 
UHS-I Ultra High Speed Phase I card 
SDR12 Signal Data Rate up to 12.5MB/s@25MHz 
SDR25 Signal Data Rate up to 25MB/s@50MHz 
 
1.2 架构/流程概述 
 SDCard 介绍 
SDCard 是一种基于半导体快闪存储器的新一代高速存储设备，是从 MMC 卡 （MultiMedia Card）格式上发展而
来，具有高记忆容量、快速数据传输率、极大的移动灵活性和很好安全性，被广泛应用于便携装置上。在 SD3.0 协
议中，SD 卡的理论最大容量可达 2TB，理论最大读写速度可达 104MB/s。 
 
SD 卡主要引脚和功能描述如下： 
(1) CLK： 时钟信号，控制器或 SD 卡在每个时钟周期传输一个命令或数据位，在 UHS-I 速度模式下，最高可达
208MHz； 
(2) CMD： 命令和响应复用引脚，命令是由控制器发给 SD 卡，响应是 SD 卡对控制器发送的应答； 
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
(3) DAT0~3： 数据线，数据可以从 SD 卡传向控制器 (read)，也可以从控制器传向 SD 卡 （write）； 
(4) VDD： SD 卡的供电脚，通常配置 3.3V 电压，协议规定的范围 2.7V~3.6V； 
(5) CD： SD 卡插入检测，通常借由 SD 卡座机械结构实现有/无卡时 GPIO 电平变化。 
 
 
图 1-1. UHS-I 卡初始化流程 
 
 MT8676 SDCard 特征 
(1) 兼容 SD3.0 协议标准 
(2) 支持 Basci DMA 和 Descriptor DMA 模式 
(3) 支持 Bus speed mode: Default Speed/High Speed/SDR12/SDR25/SDR50/SDR104/DDR50  
(4) 支持 1/4bits bus width 
 
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
1.3 配置/客制指南 
 内核配置 
(1) 启用 SDCard 支持 
CONFIG_MMC = y 
 
(2) 启用联发科主机驱动程序支持 
CONFIG_MMC_MTK_PRO = m 
 DTS 节点 
 
图 1-2. SDCard 的 DTS 节点 
 
(1) SD2.0 卡支持配置”cap-sd-highspeed”，SD3.0 高速卡模式配置”sd-uhs-xxx” 
(2) SD driving strength 可以在对应模式的 pinctrl 节点配置，比如下面的 SDR104 模式 
 
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
 
图 1-3. SDR104 模式的 pinctrl 节点 
 
(3) SD 卡检测脚通过”cd-gpios”配置 GPIO pin，GPIO_ACTIVE_LOW 表示插卡时低电平，GPIO_ACTIVE_HIGH 则表示插
卡时高电平 
(4) 根据实际使用的 SD 卡端 VDD 以及 Host 端 IO 供电配置”vmmc-supply”和”vqmmc-supply”。如果需要使用 fast 
power off（拔卡时 VMCH 硬件下电）功能，“vmmc-supply”配置节点&mt6373_vmch_eint_high（对应“cd-gpios”
的 GPIO_ACTIVE_LOW）或&mt6373_vmch_low（对应“cd-gpios”的 GPIO_ACTIVE_HIGH）；如果不需要使用 fast 
power off 功能，“vmmc-supply”配置节点&mt6373_vmch 
 
1.4 常见问题/故障排除 
 SD 卡不识别，量测不到 VDD 电压 
(1) 按照章节 1.3 检查内核配置和 DTS 配置是否正确； 
(2) 如果 VDD 供电 power 用的是 MT6373，并且 detect pin 有接到 MT6373 的 SD_DET 脚，请检查 DTS 中”vmmc-
supply”配置的 power 节点与 detect pin 的极性是否匹配； 
(3) 如果步骤(2)检查结果匹配，请将”vmmc-supply”配置&mt6373_vmch 看 VDD 是否可以上电，可以上电表示 fast 
power off 功能有问题，提 PMIC issue 到 MTK； 
(4) 如果步骤(3)不可以上电，抓取 kernel log 并提 SDCard issue 到 MTK。 
 
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
 插 SD 卡开机可以识别，热插拔不识别 
(1) 按照章节 1.3.2 检查 DTS 中”cd-gpios”的配置是否正确； 
(2) 如果 DTS 配置没有问题，检查 vendor/mediatek/proprietary/tools/dct/dws/mt6897/${PROJECT}.dws
中 detect pin 对应的 GPIO 配置是否正确，参考图 1-4 所示配置： 
 
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
MT8676 Android SDCard 
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

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Android SDCard 
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
# SRC0166 MT8676_Android_SDK_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_SDK_User_Manual_V1.0.pdf

SHA-256：a34c5b731928dce574ec960712d18dc91be506a21182dec3ea84110db7997320

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0166.html)

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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 胡丹凤 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 SDK ············································································································································································ 4 
1.1 概述·········································································································································································· 4 
1.1.1 简单介绍 ······················································································································································ 4 
1.1.2 SDK 功能介绍 ··············································································································································· 4 
1.1.3 注意事项 ······················································································································································ 4 
1.2 架构/流程概述 ························································································································································ 4 
1.2.1 内部结构图 ·················································································································································· 4 
1.2.2 API 列表 ························································································································································ 5 
1.3 配置/客制化指南 ·················································································································································· 55 
1.3.1 主要功能介绍 ············································································································································ 55 
1.3.2 碰撞检测特别说明 ···································································································································· 57 
1.4 常见问题/故障排除 ·············································································································································· 58 
1.4.1 SDK 常见问题 ············································································································································· 58 
1.4.2 调试日志开关方法 ···································································································································· 59 
附件一 附加条款 ···························································································································································· 60 
 
 
 
图片目录 
图 1-1. SDK 内部结构 ································································································································································ 5 
图 1-2. SPM SDK 流程 ································································································································································ 5 
 
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
1.1 概述 
 简单介绍 
本章节主要介绍 MT8676 SDK 接口以及常见问题的处理方法。 
 
SmartPlatform 是一个特殊的产品，MediaTek 为了降低客户 APK 的开发难度，实现更多客制化的需求，让开发者快
速、方便地开发出好的应用，提供了 SmartPlatform 独有的一套 SDK 接口。 
 
 SDK 功能介绍 
SDK 提供 API 给客户调用，每个摄像头可以独立进行 preview、 capture、 record、 YUV callback (PictureSequence)。
且支持多进程同时使用一个摄像头。 
 
 注意事项 
• 考虑到同步和效率问题，SDK 中的回调是直接在 binder 线程中处理的，并未新开线程处理。 所以应用程序在
收到回调之后，最好开启一个新线程来处理； 如果不另外开启新线程处理，请不要在回调中继续调用 SDK 接
口（可能造成死锁）；也不要在回调中执行耗时较久的任务。 
• 关于拍照流程，为了避免拍照延长和 preview/record 中断，目前拍照和 preview 已进行了绑定。如果要调整拍
照的大小，需要在调用 setPreviewSurface 之前通过 setPictureSize 进行设定。 
 
1.2 架构/流程概述 
 内部结构图 
MT8676 SDK 内部结构如图 1-1 所示： 
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
 
图 1-1. SDK 内部结构 
 
MT8676 SDK 流程如图 1-2 所示： 
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
 
图 1-2. SPM SDK 流程 
 
 API 列表 
1.2.2.1 SmartPlatformManager 
描述： 
SmartPlatform SDK 的主要接口类，单例模式。管理平台的摄像头 录制，碰撞检测，关机状态设置等。 
引入（导入）SmartPlatformManager：   
import com.mediatek.smartplatform.SmartPlatformManager; 
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
实例化(创建)对象： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
 get() 
函数：  
public static SmartPlatformManager get() 
返回值： 
返回一个 SmartPlatformManager 实例。 
细节： 
SmartPlatformManager 是以单例的模式存在应用程序中，这意味着同一个应用程序在任何地方调用此方法得到的
SmartPlatformManager 实例都是同一个。SmartPlatformManager 实例在该类被加载的时候就创建出来了，属于“饿
汉式”。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
 
 isServiceAlive 
函数：  
public boolean isServiceAlive() 
返回值： 
APK 进程获取的 SmartPlatform service 和 Camera Service 是否可用。 
细节： 
• 如果 SmartPlatform Service 或者 Camera Service 还没有被注册到系统服务，或者注册失败，该接口会返回
false，这意味着调用 SmartPlatformManager 对象的一些方法会出现异常。 所以应用程序需要先确保
SmartPlatform Service 可用后，再调用相关接口。 
• 这个接口会返回 false 的情况一般发生在 smartplatformserver 进程异常退出后，smartplatformserver 进程会重
启，此时应用程序也会重启。但是可能因为应用程序比 smartplatformserver 进程先重启，这时 Smartplatform 
Service 还没有就绪，所以应用程序此时调用相关接口就会发生空指针异常，导致应用程序退出。 
• 针对上述的情况，建议针对应用程序做以下逻辑处理： 
(1) 应用程序异常退出重启时，先判断 service 是否可用（只需要判断一次即可）。 
(2) 如果不可用，需要延时等待 service 就绪。在 service 没有就绪之前，不要调用相关接口（比如
openCameraDevice()）。 
(3) Service 就绪后，按照正常的流程往下进行。 
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
示例： 
      SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
      if (!mSmartPlatformManager.isServiceAlive()){ 
         //可以延时等待后再去判断是否可用 
      mHandler.sendEmptyMessageDelay(INIT_DELAY,500); 
       } else{ 
          //走正常的 初始化流程 
       } 
 
 getCameraIdList 
函数：  
public String[] getCameraIdList () 
返回值： 
返回当前平台连接的摄像头设备的列表，包含正在使用的摄像头 。 
细节： 
该函数返回的摄像头列表指的是平台当前实际连接到的摄像头。 
与android.hardware.camera2.CameraManager 中 getCameraIdList 不同，该函数会返回在位（1）、不在位
（0）、正在使用（-2）的摄像头，CameraManager 只会返回在位的摄像头，具体状态信息参考 getCameraStatus。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String cameraList[] = mSmartPlatformManager.getCameraIdList(); 
 
 getAvmCameraId 
函数：  
public String getAvmCameraId () 
返回值： 
返回当前平台连接的 AVM 摄像头设备的 ID 。 
细节： 
该函数得到的摄像头列表指的是平台当前实际连接到的 AVM camera ID。这些 camera ID 主要用于 CarcorderDemo 
APK 调用，适用于 AVM DVR。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String cameraId = mSmartPlatformManager.getAvmCameraId(); 
 
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
 getCameraCharacteristics 
函数：  
public CameraCharacteristics getCameraCharacteristics(String cameraId) 
参数： 
cameraId 摄像头对应的标识 
返回值： 
数据类型为android.hardware.camera2.CameraCharacteristics。cameraId 对应摄像头的设备功能。 
细节： 
 cameraId 通过 getCameraIdList 获取此 API 与android.hardware.camera2.CameraManager 中
getCameraCharacteristics 等同。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String cameraList[] = mSmartPlatformManager.getCameraIdList(); 
mSmartPlatformManager. getCameraCharacteristics(cameraList[0]); 
 openCameraDevice 
函数：  
public SpmCameraDevice openCameraDevice(String cameraIdStr) 
参数： 
cameraIdStr 摄像头对应的标识 
返回值： 
返回一个 SpmCameraDevice 对象。 
细节： 
• 参数cameraIdStr 是摄像头对应的标识 ID，每个摄像头的 ID 值都不同，这个 ID  通过 getCameraIdList 获取。 
• 同一个应用程序内每次使用同一个 ID 调用该函数得到的 CameraDevice 对象是一样的。对象只会在第一次调用
时被创建。  
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String ids[] = mSmartPlatformManager.getCameraIdList(); 
SpmCameraDevice cameraDevice0= mSmartPlatformManager.openCameraDevice(ids[0]); 
 
 openAvmCameraDevice 
函数：  
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
public SpmCameraDevice openCameraDevice() 
返回值： 
返回一个 SpmCameraDevice 对象。 
细节： 
同一个应用程序内每次调用该函数得到的 CameraDevice 对象是一样的。对象只会在第一次调用时被创建。  
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
SpmCameraDevice avmcameraDevice= mSmartPlatformManager.openAvmCameraDevice(); 
 
 closeCameraDevice 
函数：  
public void closeCameraDevice(String cameraId) 
参数： 
cameraId  摄像头对应的标识 
细节： 
• 参数cameraId 是摄像头对应的标识 ID，每个摄像头的 ID 值都不同，这个 ID  通过 getCameraIdList 获取。如果
不需要使用此 CameraDevice，应该调用此函数把它关掉，以便资源的释放和回收。 
• 调用了此函数之后，之前通过 openCameraDevice 得到的所有引用将不再可用。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String ids[] = mSmartPlatformManager.getCameraIdList(); 
SpmCameraDevice cameraDevice0= mSmartPlatformManager.openCameraDevice(ids[0]); 
mSmartPlatformManager.closeCameraDevice(ids[0]); 
 
 closeAvmCameraDevice 
函数：  
public void closeAvmCameraDevice() 
细节： 
调用了此函数之后，之前通过 openAvmCameraDevice 得到的引用将不再可用。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
SpmCameraDevice avmcameraDevice0= mSmartPlatformManager.openAvmCameraDevice(); 
mSmartPlatformManager.closeAvmCameraDevice(); 
 
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
 addServiceDeathCallback 
函数：  
public void addServiceDeathCallback(ServiceDeathCallback callback) 
参数： 
callback  SmartPlatformServer 进程退出（死掉）时的回调 
细节： 
• ServiceDeathCallback  定义如下： 
  public interface ServiceDeathCallback  { 
     void onDeath(int arg1,String arg2); 
  } 
• 同一个 ServiceDeathCallback 被多次添加，只会存在一次回调。 
• 该回调被触发意味着 SmartPlatformServer 进程已经死掉了，此时 SmartPlatform Service 相关服务此时不再可
用，目前的机制是 SmartPlatformServer 死掉（异常被杀死）后会重新加载运行。应用程序需要重新获取服务，
因为之前 SmartPlatformManager, SpmCameraDevice 对象都无法继续使用了。 
示例： 
      SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
      mSmartPlatformManager. addServiceDeathCallback ( 
               new ServiceDeathCallback() { 
                    public void onDeath(int arg1,String arg2){ 
                      } 
              }  
       ); 
 
 removeServiceDeathCallback 
函数：  
public void removeServiceDeathCallback (ServiceDeathCallback callback) 
参数： 
callback  SmartPlatformServer 进程退出（死掉）时的回调 
细节： 
移除注册的回调对象  
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.removeServiceDeathCallback(callback); 
 
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
 addCameraAvailableCallback 
函数：  
public void addCameraAvailableCallback(ServiceDeathCallback callback) 
参数： 
callback 返回摄像头状态的回调 
细节： 
• CameraAvailableCallback  定义如下： 
  public interface CameraAvailableCallback  { 
     void onAvailable (String cameraId, int status); 
  } 
• 同一个 CameraAvailableCallback 被多次添加，只会存在一次回调。 
• 该回调被触发时意味着摄像头的新增或移除，被移除时可以做停止录制相关操作。 
示例： 
      SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
      mSmartPlatformManager. addCameraAvailableCallback ( 
               new CameraAvailableCallback () { 
                    public void onAvailable (String cameraId, int status){ 
                      } 
              }  
       ); 
 
 
 removeCameraAvailableCallback 
函数：  
public void removeCameraAvailableCallback (CameraAvailableCallback callback) 
参数： 
callback 返回摄像头状态的回调 
细节： 
移除注册的回调对象  
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.removeCameraAvailableCallback(callback); 
 getIpodProxy 
函数：  
public IpodProxy getIpodProxy() 
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
返回值： 
返回一个 IpodProxy 对象。 
细节： 
参考 IpodProxy 说明。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
IpodProxy mIpodProxy=mSmartPlatformManager.getIpodProxy(); 
 
 getCollisionProxy 
函数：  
public CollisionProxy getCollisionProxy() 
返回值： 
返回一个 CollisionProxy 对象。 
细节： 
 参考 CollisionProxy 说明。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
CollisionProxy mCollisionProxy=mSmartPlatformManager.getCollisionProxy(); 
 
 getCarEventProxy 
函数：  
public CarEventProxy getCarEventProxy() 
返回值： 
返回一个 CarEventProxy 对象。 
细节： 
参考 CarEventProxy 说明。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
CarEventProxy mCarEventProxy=mSmartPlatformManager.getCarEventProxy(); 
 
 getNumberOfCameras 
函数：  
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
public int getNumberOfCamera() 
返回值： 
返回可用的摄像头个数，包含在位、不在位、正在使用的摄像头。 
细节： 
参考 getCameraIdList 说明，实质上该方法返回的是 getCameraIdList 返回的数组大小。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
int cameraNumber = mSmartPlatformManager.getNumberOfCamera(); 
 
 getCameraStatus 
函数：  
public int getCameraStatus(String cameraId) 
返回值： 
返回所要获取的cameraId 的状态。 
细节： 
状态含义如frameworks/av/camera/aidl/android/hardware/ICameraServiceListener.aidl: 
// Device physically unplugged 
const int STATUS_NOT_PRESENT = 0; // 不在位 
// Device physically has been plugged in and the camera can be used exclusively 
const int STATUS_PRESENT = 1; // 在位可用 
// Device physically has been plugged in but it will not be connect-able until enumeration 
is complete 
const int STATUS_ENUMERATING = 2; // enumator provider 运行时camera 返回的状态， enumator 完成后
会转到PRESENT 状态 
// Camera is in use by another app and cannot be used exclusively 
const int STATUS_NOT_AVAILABLE = -2; // 其他应用程序进程在使用，由于MediaTek SDK 支持多进程使用，所
以是可用的 
// Use to initialize variables only 
const int STATUS_UNKNOWN = -1; //初始状态 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
int cameraStatus = mSmartPlatformManager.getCameraStatus(cameraId); 
 
1.2.2.2 PreviewSource 
引入（导入）PreviewSource：   
import com.mediatek.smartplatform.PreviewSource; 
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
对象说明： 
用于区分多个预览 （preview），同一个摄像头设备可以进行多个预览操作。通常使用 GENERAL_CAMERA 或者
PREVIEW_[0-4]进行区分。 
 
1.2.2.3 RecordSource 
引入（导入）RecordSource：   
import com.mediatek.smartplatform.RecordSource; 
对象说明： 
用于区分录制（Record）的类型，同一个摄像头设备可以进行多路不同分辨率的录制。通常使用 GENERAL_CAMERA
或者RECORD_[0-4]进行录制。如果是低分辨率录制，可以选择 GENERAL_CAMERA_SUB 或者 RECORD_EX_[0-4]。 
 
1.2.2.4 PictureSequenceSource 
引入（导入）PictureSequenceSource：   
import com.mediatek.smartplatform.PictureSequenceSource; 
对象说明： 
用于区分 PictureSequenceSource 的类型，同一个摄像头设备可以获取多路不同分辨率的连续图片，通常使用
GENERAL_CAMERA 获取 。 
 
1.2.2.5 RecordConfiguration 
引入（导入）RecordConfiguration：   
import com.mediatek.smartplatform.RecordConfiguration; 
实例化(创建)对象： 
RecordConfiguration recordConfig= RecordConfiguration.get(recordSource); 
 
 mCamcorderProfile 
类别： android.media.CamcorderProfile 
细节：录像视频文件的格式，帧率，视频画面大小等设定。 
 
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
 mOutPutFilePath 
类别：java.lang.String 
细节：录像视频文件的保存路径 
 
 mOutPutFileName 
类别：java.lang.String 
细节：录像视频文件的前缀 
 
 mVideoCallback 
类别：com.mediatek.smartplatform.SpmCameraDevice.VideoCallback 
细节：录像视频相关事件发生时的回调 
• VideoCallback 定义如下： 
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
 
void onVideoTaken(int eventType, int cameraId, int recorderSource, String videoname, int 
starTime, int endTime); 
void onVideoTake(VideoInfo videoInfo); 
void onVideoFrame(byte[] data,int dataType, int size, int cameraId, int recorderSource); 
  } 
• VideoInfo 是eventType, cameraId 等等的集合，后续不再使用多参数的 onVideoTaken。 
• onVideoTaken 中[VideoInfo] eventType 含义如下： 
– VIDEO_EVNET_ADD_FILE_IN_GALLERY 录像完成，并且视频文件被成功保存，通过 videoname 可以得到
视频文件的路径。 
– VIDEO_EVNET_DELETE_FILE_IN_GALLERY 视频文件被删除时，会收到此通知，一般发生在循环录制时，
通过删除之前的视频文件释放空间。 
– VIDEO_EVNET_SDCARD_FULL 录制视频的时候检测到 SD Card 已经满了。 
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
– VIDEO_EVNET_RECORD_RECORDING_ERROR 录制视频过程中发生了错误。 
– VIDEO_EVNET_RECORD_SDCARD_DAMAGED 录制视频时检测到 SD Card 被损坏了，如果 SD Card 的写入速度
小于某个阀值，也可能被认为损坏了。 
– VIDEO_EVNET_LOWRES_KEYPOINT_START 低分辨率打点开始。 
– VIDEO_EVNET_LOWRES_KEYPOINT_STOP 低分辨率打点结束。 
– VIDEO_EVNET_KEYPOINT_START 打点开始。 
– VIDEO_EVNET_KEYPOINT_STOP  打点结束。 
• onVideoTaken 中[VideoInfo] starTime, int endTime  
当收到VIDEO_EVNET_ADD_FILE_IN_GALLERY 的时候，表示视频文件录制的开始时间和结束时间。注意需设
置 enableVideoWithTimeCallback(true)。 
• onVideoFrame: 通过此接口可以接收每一帧视频数据。 
– data：保存数据的缓冲区 
– dataType：保留参数，可能被用来区分是高清还是标清数据。 
– size：表示视频数据的大小，一般情况下小于 data 数组的大小，每次回调得到的视频数据大小可能不一
样。 
– cameraId:  返回当前视频数据的 cameraId。 
– recoderType：返回当前视频数据的recorderType。 
• recorderSource 与 startRecord 中的 recorderSource 相对应。 
 
 mAudioCallback 
类别：com.mediatek.smartplatform.SpmCameraDevice.AudioCallback 
细节：音频数据的回调 
• AudioCallback 定义如下： 
   public interface AudioCallback { 
     void onAudioFrame(byte[] data, int dataType, int size, int cameraId, int 
recorderSource); 
   } 
• onAudioFrame: 通过此接口可以接收每一帧音频数据。 
– data：保存数据的缓冲区 。 
– dataType：保留参数。 
– size：有效数据的大小，一般情况下小于 data 的大小。 
– cameraId:  当前返回音频数据的cameraId。 
• recorderSource: 当前返回音频数据的 recorderSource 与 startRecord 中的 recorderSource 相对应。 
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
 mRecordStatusCallback 
类别：com.mediatek.smartplatform.SpmCameraDevice.RecordStatusCallback 
细节：录像状态发生改变的回调 
• RecordStatusCallbac 定义如下： 
  public interface RecordStatusCallback{ 
       public static fianl int RECORD_STATUS_START      = 0; 
       public static fianl int RECORD_STATUS_STOP       = 1; 
       public static fianl int RECORD_STATUS_RECORDING  = 2; 
       void onRecordStatusChanged(int status,int cameraid,int recorderSource); 
  } 
• 当录像状态发生变化时会回调。 
 
 mKeypointCallback 
类别：com.mediatek.smartplatform.SpmCameraDevice.KeyPointCallback 
细节：打点数据通知到应用程序时的回调 
• KeypointCallback 定义如下： 
  public interface KeypointCallback{ 
void onKeypointFrame(byte[] data,int dataType,int size,String cameraId, int recorderSource); 
  } 
• onKeypointFrame: 通过此接口接收已编码的数据。 
– data：保存数据的缓冲区，每次回调 onKeypointFrame 时，使用的都是同一个缓冲区。如果想要保存数
据，需要重新拷贝，不然下一次会被覆盖。 
– dataType：保留参数，可能被用来区分是高清还是标清数据。 
– size：标示打点（keypoint）数据的大小，一般情况下小于 data 的大小， 这个数据大小一般是 128KB，包
含视频和音频数据，格式为 ts。 
 
 mVideoFrameMode 
类别：int 
细节：标识要怎么处理视频数据。 
VideoFrameMode 的定义如下： 
• VIDEO_FRAME_MODE_DISABLE  (0),//录制到文件 
• VIDEO_FRAME_MODE_SOURCE   (1), //以h264 格式提供给应用程序 
• VIDEO_FRAME_MODE_PACKET   (2), //以ts 格式提供给应用程序 
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
• VIDEO_FRAME_MODE_ DUAL     (3); //以ts 格式录制到文件,同时提供给应用程序 
 
 mAudioSource 
类别：int 
细节：标识音频的来源。参考android.media.Mediarecorder.AudioSource ,一般为CAMCORDER。 
 
 mKeypoiintSpanLimit 
类别：int 
细节：最大的时间跨度，单位是秒。 
• 如果当前打点视频文件的时间和前一个视频文件的时间超过设定 的最大时间跨度，就不再截取前一个视频文件
作为打点保护视频。 
• 此参数需要在startRecord 之前设置，参数是一个整数值，单位是秒。 
• 如果应用程序不设置此参数，则默认的跨度时间是当前设置的录制文件时间长度。  
 
 mRecordingMuteAudio 
类别：boolean 
细节：是否关闭麦克风 
参数为 true 表示关闭麦克风，这样录出来的视频就没有声音了，参数为 false 表示打开。 
 
 mVideoCbFrameRate 
类别：int 
细节：设置视频回调的帧率。 
 
 mLockFilePath 
类别：String 
细节：保护视频文件的保存目录。 
设置受保护的视频文件的保存目录，默认的路径是/sdcard/DCIM/camera/protect。 
 
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
 mVideoRotateSize 
类别：int 
细节：录制文件的最大 size ，以字节（bytes）为单位计算。当录制文件达到 size，会存放在新的文件中。  
 
 mVideoRotateDuration 
类别：int 
细节：设置保存的每个视频文件的时间长度，单位是毫秒。 
 
 mEnableRecordStartRing 
类别：boolean 
细节：开关录制铃声 
 
 mVideoBitRateMin 
类别：int 
细节：视频录制最小的比特率 
设置视频文件的比特率范围，在录像的时候如果写文件的速度变慢，底层会降低 比特率；如果写得快，就会调高
比特率。降低比特率是为了避免写文件太慢而导致缓冲区积压。即使写文件速度再慢，调整后的比特率也不会小
于设置的最小值，同样提高的比特率也不会超过最大值。 
 
 mVideoBitRateMax 
类别：int 
细节：视频录制最大的比特率 
设置视频文件的比特率范围，在录像的时候如果写文件的速度变慢，底层会降低 比特率；如果写得快，就会调高
比特率。降低比特率是为了避免写文件太慢而导致缓冲区积压。即使写文件速度再慢，调整后的比特率也不会小
于设置的最小值，同样提高的比特率也不会超过最大值。 
 
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
 mVideoCycleDeleteFileNum 
类别：int 
细节：循环删除的文件数量，当存储空间不够时删除的文件数量 。 
 
 mReduceRecordingFps 
类别：int 
细节：降低视频录制的帧率百分比。 
FULL: 100% 
HALF: 50% 
THIRTY_PERCENT: 30% 
QUARTER: 25% 
 
1.2.2.6 PictureConfiguration 
引入（导入）PictureConfiguration：   
import com.mediatek.smartplatform.PictureConfiguration; 
实例化(创建)对象： 
PictureConfiguration recordConfig= PictureConfiguration.get(recordSource); 
 
 mImageCallback 
建议直接使用 ImageDataCallback。 
类别：com.mediatek.smartplatform.ImageReaderEx.ImageCallback; 
细节：需要获取的图像的 YUV data 的回调。 
ImageCallback { 
int IMAGE_FORMAT_YUV_420_888 = ImageFormat.YUV_420_888; 
int IMAGE_FORMAT_JPEG =ImageFormat.JPEG 
int IMAGE_FORMAT_NV21 =ImageFormat.NV21 
int IMAGE_DATA_RAW =0; 
int IMAGE_DATE_FILE =1; 
void onImageAvailable(String cameraId, int format, int status , byte[] data, String path) 
} 
imageFormat: 目前只支持 YUV_420_888 和 JPEG, NV21。  
Datatype 可以为 file 或者 raw。 为 raw 会通过 calback 返回；为 file 则保存在 path 目录。保存为 file 一般用来进行
测试。 
 
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
 mImageDataCallback 
类别：com.mediatek.smartplatform.SpmCameraDevice.ImageDataCallback; 
细节：需要获取目标图像的 YUV DirectByteBuffer 的回调。 
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
imageFormat: 目前支持 YUV_420_888 和 JPEG,  NV21，YV12, RGB_888, YUY2 格式。 
DataType 可以为 RAW，FILE，BUFFER 或者 IMAGE。  
RAW：将数据放在一个 byte[] 中回调回来。 
FILE：保存在平台，会删除旧文件，用于本地测试。 
BUFFER：将数据放在一个 DirectByteBuffer 中返回给应用程序，减少复制次数。 
IAMGE：将数据放在一个图像中返回给应用程序。 
 
 mPath 
类别：String 
细节：需要获取的图像的保存路径 
此参数目前没有使用。 
 
 mImageFormat 
类别：int 
细节：所注册回调需要获取的图像格式，设置值为 ImageCallback 或 mImageDataCallback 中的 format 值，标识了回
调获取的图像类型。 
 
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
 mDateType 
类别：int 
细节：需要获取的图像的 data 类型，是 RAW，FILE，BUFFER，IMAGE 中的一种。 
 
 mPicWidth 
类别：int 
细节：需要获取的图像的宽度 
 
 mPicHeight 
类别：int 
细节：需要获取的图像的高度 
 
 mJpegHwEnc 
类别： Boolean 
细节：是否使用硬件编码器将摄像头数据编码成 JPEG 格式，目前没有使用这个标志。 
 
1.2.2.7 SpmCameraDevice 
引入（导入）SpmCameraDevice：   
import com.mediatek.smartplatform.SpmCameraDevice; 
实例化(创建)对象： 
SpmCameraDevice mCameraDevice =SmartPlatformManager.get().openCameraDevice(“0”); 
 
 getState 
函数：  
public int getState() 
返回值： 
返回当前摄像头（Cameradevice）所处的状态。 
细节： 
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
1. 摄像头的状态 
STATE_IDLE, STATE_PREVIEW_[0-4], STATE_RECOR_[0-4], …. 
2. 状态的说明 
各种状态是“或”的关系，比如返回 0X21，则说明此 CameraDevice 正处于STATE_PREVIEW_0 和 
STATE_RECOR_0 状态。 
3. 该接口返回的是底层保存的状态。 如果应用程序 1 在预览，应用程序 2 在录制;  若应用程序 1 异常退出，待应
用程序 1 重新启动后，通过此接口获取的摄像头的当前状态依然是正在录制 。 
示例： 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(ids[0]); 
int state=mCameraDevice.getState(); 
 
 getCameraCharacteristics 
函数：  
public CameraCharacteristics getCameraCharacteristics() 
返回值： 
数据类型为android.hardware.camera2.CameraCharacteristics。当前摄像头的设备功能。 
细节： 
cameraId 通过 getCameraIdList 获取。 
与android.hardware.camera2.CameraManager 中 getCameraCharacteristics 和 SmartPlatformManager 中
getCameraCharacteristics 类似。通过此方法，可以获取摄像头的所有配置。 
getParameters 中获取的参数也是通过 CameraCharacteristics 转换。 
示例： 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mCameraDevice. getCameraCharacteristics(); 
 
 getParameters 
函数：  
public SpmParameters getParameters() 
返回值： 
SpmParameters 对象， SpmCameraDevice 参数的集合。 
细节： 
SpmCameraDevice 的参数信息可以通过 SpmParameters 得到并修改。 
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
SpmParameters 中的参数是通过 CameraCharacteristics 转换得到的。目前可能存在某些参数未转换，若需要则可再
增加转换。 
示例： 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SpmParameters params=mCameraDevice.getParameters(); 
 
 setParameters 
函数：  
public void setParameters(SpmParameters params) 
参数： 
params 需要设置的参数集合 
细节： 
当要修改 SpmCameraDevice 一些参数时，必须要调用这个接口才能生效。 
示例： 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SpmParameters params=mCameraDevice. getParameters ();  //先获取params 
mCameraDevice.setParameters(params);       //修改之后再设置下去 
 
 setADASCallback 
函数：  
public void setADASCallback(ADASCallback callback) 
参数： 
callback ADAS 的回调 
细节： 
ADASCallback 定义如下： 
   public interface ADASCallback{ 
        void onADASCallback(ADASInfo info); 
   } 
示例： 
   SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
   mCameraDevice.setADASCallback( 
                  new setADASCallback(){ 
                         public void onADASCallback(ADASInfo info){ 
                              //TODO 
                        } 
                  } 
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
    ); 
 
 setPictureSize 
函数：  
public int setPictureSize(android.util.Size pictureSize) 
参数： 
pictureSize 图片大小 
返回值： 
返回 0 表示设置成功 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice. setPictureSize (1280*720); 
 
 setPreviewSurface 
函数：  
public int setPreviewSurface(Surface surface, @PreviewSource.Format int previewSource) 
参数： 
surface 显示缓冲区的产生端 
previewSource  预览源 
返回值： 
返回一个 boolean，表示设置是否成功。 
细节： 
参考frameworks\base\core\java\android\view\Surface.java 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SurfaceView surfaceView=findViewById(R.id.surface_view); 
SurfaceHolder holder=surfaceView.getHolder(); 
mDevice.setPreviewSurface(Holder.getSurface(), PreviewSource.GENERAL_CAMERA); 
 
 startPreview 
函数：  
public void startPreview() 
细节： 
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
显示摄像头预览画面，在调用此 API 前，必须先调用 setPreviewSurface()。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SurfaceView surfaceView=findViewById(R.id.surface_view); 
SurfaceHolder holder=surfaceView.getHolder(); 
mDevice.setPreviewSurface(Holder.getSurface(),PreviewSource.GENERAL_CAMERA); 
mDevice.starPreview(); 
 
 stopPreview 
函数：  
public void stopPreview() 
细节： 
停止显示摄像头预览画面。停止预览后需要调用 setPreviewSurface null。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.stopPreview(); 
 
 startADAS 
函数：  
public void startADAS() 
细节： 
• 打开 ADAS 功能。 
• 需要 setADASCallback 来接收 ADAS 的相关数据。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.startADAS(); 
 stopADAS 
函数：  
public void stopADAS() 
细节： 
关闭 ADAS 功能。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.stopADAS(); 
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
 startRecord 
函数：  
public int startRecord(@RecordSource.Format int recordSource, RecordConfiguration 
recordConfig) 
参数： 
recordSource   录制的源 
recordConfig   录制的设置 
返回值： 
返回一个整数值，表示启动录制是否成功，0 表示成功，否则失败。 
细节： 
参数设置见 RecordConfiguration 
示例： 
RecordConfiguration recordConfig= RecordConfiguration.get(recordSource); 
recordConfig.setVideoCallback(mVideoCallback); 
mCameraDevice.startrecord(RecordSource. GENERAL_CAMERA, recordConfig); 
 
 stopRecord 
函数：  
public void stoptRecord(@RecordSource.Format int recordSource) 
参数： 
recordSource   录制的源 
细节： 
停止录制视频，和 startRecord()对应。 
示例： 
SpmCameraDevice Device = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.stoptRecord(); 
 
 lockRecordingVideo 
函数：  
public void lockRecordingVideo(int duration,String protectedType, @RecordSource.Format int 
recordSource) 
参数： 
duration 打点保护的时间长度 
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
protectedType  打点保护类型,  为空串””或者“LowRes” 
recordSource  录制的源 
细节： 
设置打点保护的时间长度时，系统会将当前时间点前后各 duration 长度的视频文件保护起来，所以打点保护的视
频文件总长度为 2*duration 的时间长度。 
第二个参数必须传入”LowRes”，底层会将打点视频文件转成 480P 并通知应用程序使用，应用程序需要通过
KeypointCallback 来接收数据。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.lockRecordingVideo(20,”LowRes”,RecordSource.GENERAL_CAMERA); 
 
 unlockRecordingVideo 
函数：  
public void unlockRecordingVideo(String filename,@RecordSource.Format int recordSource) 
参数： 
filename 受保护的文件路径 
recordSource 录制的源 
细节： 
将某个受保护（protect）目录下的视频文件移到普通的目录下。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.unlockRecordingVideo(videofile, RecordSource.GENERAL_CAMERA ); 
 
 setVideoRotateDuration 
函数：  
public void setVideoRotateDuration(int duration_ms,@RecordSource.Format int recordSource) 
参数： 
duration_ms 每个视频文件的时间长度，单位是毫秒 
recordSource 录制的源 
细节： 
设置保存的每个视频文件的时间长度，需要在启动录像之后设置。如果需要在录像启动之前设置，需要通过
RecordConfiguration 的 setVideoRotateDuration 来实现。设置的参数会在下一个录制的视频文件生效。  
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
示例： 
CameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0’); 
mDevice.setVideoRotateDuration(60*1000, RecordSource.GENERAL_CAMERA); 
 
 setVideoBitrateDyn 
函数：  
public void setVideoBitrateDyn(int bitrate,int bAdjust,@RecordSource.Format int 
recordSource) 
参数： 
bitrate  视频比特率的值 
bAdjust  保留参数，暂未使用 
recordSource 录制的源 
细节： 
 动态调整录制的码率，可以在录制过程中设置。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mCameraDevice.setVideoBitrateDyn(6*1000*1000, 0, RecordSource.GENERAL_CAMERA); 
 
 setRecordingMuteAudio 
函数：  
public void setRecordingMuteAudio(boolean isMuteAudio, @RecordSource.Format int 
recordSource) 
参数： 
isMuteAudio 是否关闭麦克风 
recordSource  录制的源 
细节： 
参数为 true 表示关闭麦克风，这样录出来的视频就没有声音了，参数为 false 表示打开。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.setRecordingMuteAudio(false, RecordSource.GENERAL_CAMERA); 
 
 setProtectRecording 
函数：  
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
public void setProtectRecording(boolean ismotiondetect,boolean  
isrecordingstatus,int duration_ms, @RecordSource.Format int recordSource) 
参数： 
ismotiondetect 表示是否进行碰撞保护 
isrecordingstatus 录制过程中碰撞，还是非录制状态下碰撞 
duration_ms 碰撞保护的时间 
recordSource 录制的源 
细节： 
该接口用于启动和关闭碰撞保护，第一个参数表示启动还是停止。  
示例： 
CameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(0); 
mCameraDevice.setProtectRecording(true, true, 5*60*1000, RecordSource.GENERAL_CAMERA) 
 
 flushCurRecFile 
函数：  
public void flushCurRecFile(@RecordSource.Format int recordSource) 
参数： 
recordSource 录制的源 
细节： 
Flush 当前录制文件，将缓存数据写入到磁盘中。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice. flushCurRecFile (RecordSource.GENERAL_CAMERA); 
 
 setLockFilePath 
函数：  
public void setLockFilePath(String path, @RecordSource.Format int recordSource) 
参数： 
path 保存视频文件的目录 
recordSource 录制的源 
细节： 
设定打点视频文件的目录，默认的路径是/sdcard/DCIM/camera/protect/。该接口可在录制过程中打点之前进
行调用。 
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
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice. setLockFilePath (“/sdcard/DCIM/camera/video”,RecordSource.GENERAL_CAMERA); 
 
 setRecordingSdcardPath 
函数：  
public void setRecordingSdcardPath(String path, @RecordSource.Format int recordSource) 
参数： 
path 保存视频文件的目录 
recordSource 录制的源 
细节： 
保存视频文件的目录，默认的路径是/sdcard/DCIM/camera。该接口可在录制过程中调用。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.setRecordingSdcardPath(“/sdcard/DCIM/camera/video”, RecordSource.GENERAL_CAMERA); 
 
 enableShutterSound 
函数：  
public void enableShutterSound(boolean shutter) 
参数： 
shutter 是否打开快门声音 
细节： 
参数为 true 表示打开快门声音，false 表示关闭。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.enableShutterSound(false); 
 
 enableRecordSound 
函数：  
public void enableRecordSound(boolean enable) 
参数： 
Enable 是否打开录制的提示声音 
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
细节： 
参数为 true 表示打开录制声音，false 表示关闭。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.enableRecordSound(false); 
 
 setPictureSize 
函数：  
public void setPictureSize(android.util.Size PictureSize) 
参数： 
PictureSize 拍照图片的宽度和高度 
细节： 
用于设置拍照图片的大小，需要在 setPreviewSurface 前进行设置。 
 
 takePicture 
函数：  
public void takePicture(String fileName,ShutterCallback  shutter, CamPictureCallback jpeg) 
参数： 
fileName: 拍照图片的保存名字（包含目录） 
shutter: 快门提示音响起时的回调（暂时无效） 
jpeg: 拍照过程中的回调 
细节： 
• ShutterCallback 定义如下： 
  public interface ShutterCallback{ 
        void onShutter(); 
  } 
• CamPictureCallback 定义如下： 
   public interface CamPictureCallback{ 
   public static final int PICTURE_TAKEN_FALL    = -1;//拍照失败 
   public static final int PICTURE_TAKEN_SAVING  = 0;//正在存储 
   public static final int PICTURE_TAKEN_SUCCESS = 1;//拍照成功 
      void onPictureTaken(int status,String cameraId,String fileName); 
  } 
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
• onPictureTaken 中的 status 为拍照的状态：拍照失败，正在储存，拍照成功。cameraId 为摄像头标识，
fileName 为拍照图片的保存名字。如果拍照失败，路径为空。此函数在拍照完成前、完成后，成功或失败都会
被回调一次。 
示例： 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
String fileName=”/sdcard/DCIM/photo/”+filename; 
mCameraDevice.takePicture(fileName,shutter,jpeg); 
 
 release 
函数：  
public boolean release() 
细节： 
注销该摄像头相关的 callback 和释放 listener。在 APK 退出时可调用此 API 来快速注销 callback 和释放 listener 以释
放资源。 
Return： 
移除 listener 成功则返回 true，否则返回 false。 
示例： 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
boolean isRemoveListener = mCameraDevice.release(); 
 
 getCameraId 
函数：  
public String getCameraId() 
返回值： 
返回当前摄像头（SpmCameradevice）的 ID 值。 
细节： 
获取当前 SpmCameraDevice 对应的 camera ID。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
String id=mDevice.getCameraId(); 
 
 startPictureSequence 
函数：  
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
public void startPictureSequence(@PictureSequenceSource int source PictureConfiguration 
config) 
参数： 
source: 获取连续图片的源 
config: 获取连续图片的配置 
细节： 
此 API 用来连续获取图片。 其中 YUV data 可以用于 ADAS 或者其它算法分析。如果 image size 为 null，默认 image
大小为 1280x720。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.startPictureSequence(source ,config); 
 
 stopPictureSequence 
函数：  
public void stopPictureSequence(@PictureSequenceSource int source) 
细节： 
停止连续获取图片，和 startPictureSequence()对应。 
示例： 
CameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice. stopPictureSequence (source); 
 
 enableShareBuffer 
函数：  
public void enableShareBuffer(@PictureSequenceSource int source, boolean enable) 
参数： 
source: 获取连续图片的源 
enable: 是否开启 FD 回调 
细节： 
此 API 通过 FD 连续获取图片数据。 其中 YUV data 可以用于 ADAS 或者其它算法分析。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.startPictureSequence(source ,config); 
mDevice. enableShareBuffer(source , true); 
 
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
 updateRequest 
函数：  
public void updateRequst() 
细节： 
当更新 SpmParameters 后需要调用此函数使其生效。 
 getCameraId 
函数：  
public String getCameraId() 
细节： 
获取当前 SpmCameraDevice 的 ID。 
 
 setAeStatusCallback 
函数：  
public void setAeStatusCallback(AeStatusCallback callback) 
参数： 
callback  Ae 曝光值的回调 
细节： 
AeStatusCallback 定义如下： 
   public interface AeStatusCallback { 
        void onStatusCallback (int value); 
        void onStatusCallbackArray (int[] value,int size); 
   } 
示例： 
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
 setDropStreamFrame 
函数：  
public int setDropStreamFrame(int streamType, int streamSource, int streamPolicy)  
参数： 
streamType   YUV 0/record 1/preview 2 
streamSource @PictureSequenceSource int source, @PreviewSource.Format int previewSource, 
@RecordSource.Format int recordSource 
streamPolicy   丢帧策略。 
       如果 param == 0, 不丢帧; 
       如果 param > 0,  每隔多少帧丢一帧; 
       如果 param < 0,  每隔一帧丢多少帧。 
返回值： 
返回一个整数值，表示设置单路丢帧是否成功，0 表示成功，否则失败。 
示例： 
     mCameraDevice. setDropStreamFrame (1，RecordSource. GENERAL_CAMERA, 1); 
     //preview 第0 路record 每隔1 帧丢1 帧 
 
 updateVideoGPSInfo 
函数：  
public void updateVideoGPSInfo(int latitude10000,int longitude10000, @RecordSource.Format 
int recordSource) 
参数： 
latitude10000   纬度*10000 
longitude10000   经度 *10000 
recordSource  录制的源 
细节： 
在录制过程中动态设置 GPS 位置信息，保存到 MP4 视频头文件信息中。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice. updateVideoGPSInfo (3140000,2240000,RecordSource.GENERAL_CAMERA); 
 
1.2.2.8 SpmParameters 
引入（导入）参数：   
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
import com.mediatek.smartplatform.SpmCameraDevice.SpmParameters; 
实例化(创建)对象： 
SpmCameraDevice mDevice =SmartPlatformManager.get().openCameraDevice(“0”); 
SpmParameters params=mDevice.getParameters(); 
 enableWatermarkImage  
函数：  
public void enableWatermarkImage(boolean enable) 
参数： 
enable 是否添加图片水印 
细节： 
参数为 true 表示在拍照图片中添加水印，false 表示不添加。该接口控制 preview，recording 和 capture 的图片水
印。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SpmParameters params=mDevice.getParameters(); 
params.enableWatermarkImage(true); 
mDevice.setParameters(params); 
 
 setWatermarkImaArea  
函数：  
public void setWatermarkImgArea(int left, int top, int right, int bottom) 
参数： 
left 图片水印区域的 x 轴起始位置 
top  图片水印区域的 y 轴起始位置 
right 图片水印区域的 x 轴结束位置 
bottom  图片水印区域的 y 轴结束位置 
细节： 
设置图片水印的区域，图片水印的宽度必须是 32 的整数倍，高度必须是 16 的整数倍，否则无法正常显示。图片
的大小要和水印区域的大小一致。图片水印区域的起始位置和文字水印区域起始位置的计算方式一致，但是宽度
和高度存在差别，通常将图片水印区域的宽度和高度设置成和图片大小一样即可。  
示例： 
params.setWatermarkImgArea(20,20,180,180); 
 
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
 setWatermarkImagePath  
函数：  
public void setWatermarkImgPath(String path) 
参数： 
path 水印图片的路径 
细节： 
设置水印图片的路径，必须是完整的路径。 
示例： 
params.setWatermarkArea(“/sdcard/watermark.bmp”) 
 
 enableWatermarkText  
函数：  
public void enablePictureWatermarkText(boolean enable) 
参数： 
enable 是否添加文字水印 
细节： 
参数为 true 表示添加水印，false 表示不添加。该接口控制 preview，recording 和 capture 等的文字水印接口。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
SpmParameters params=mDevice.getParameters(); 
params.enableWatermarkText(true); 
mCameraDevice.setParameters(params); 
 
 setWatermarkTextArea  
函数：  
public void setWatermarkTextArea(int left, int top, int right, int bottom) 
参数： 
left 水印区域的 x 轴起始位置 
top  水印区域的 y 轴起始位置 
right 水印区域的 x 轴结束位置 
bottom  水印区域的 y 轴结束位置 
细节： 
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
设置文字水印的区域，上述的四个参数对应的就是一个矩形区域，绘制的文字内容会在这个矩形区域 内。如果文
字内容超过了这个区域，会被截掉，不能显示出来。这个区域最终对应到画面的位置怎么计算：  
起始位置 x = left * 画面宽度/1000; 
起始位置 y = top * 画面高度/1000; 
矩形区域宽度 w = (right-left)* 画面宽度/1000; 
矩形区域高度 h = (bottom-top)* 画面高度/1000; 
示例： 
params.setWatermarkArea(20,20,60,240); 
 
 setWatermarkText  
函数：  
public void setWatermarkText(String text) 
参数： 
text 水印显示的文本 
细节： 
设置水印显示的文字内容。  
示例： 
params.setWatermarkText(“watermark”); 
mCameraDevice.setParameters(params); 
 
 setWatermarkTextSize  
函数：  
public void setWatermarkTextSize(float size) 
参数： 
size 水印文字的大小 
细节： 
设置水印文字的大小，文字水印的大小是按照画面高度的比例计算的，计算公式：文字实际大小 = size *画面高度
/1000；单位是像素。所以文字水印的大小应与文字水印区域的高度相等，或略小于其高度，水印才能显示出来。 
示例： 
params.setWatermarkArea(20,20,60,240);  //矩形宽度是220，高度40 
params.setWatermarkTextSize(40);  //文字水印大小应该设置成40 
 
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
 setWatermarkTextColor  
函数：  
public void setWatermarkTextColor(int color) 
参数： 
color 水印文字的颜色，如果不设置，默认是红色。 
细节： 
设置水印的颜色，使用 ARGB 模式，可以通过设置android.graphics.Color 对象来构造颜色。 
示例： 
params.setWatermarkTextColor(Color.RED);  //显示为红色 
 
 setWatermarkTextPosition  
函数：  
public void setWatermarkTextPosition(float x,float y) 
参数： 
x 相对应水印区域起始位置的横向偏移量 
y  相对应水印区域起始位置的竖向偏移量 
细节： 
绘制出来的文字水印可以理解成一个矩形图片，偏移量指的是文字水印左下角相对于文字水印区域起始点的偏移
量。通常情况下，将 y 的值和文字水印区域的高度设置成一样即可。 
示例： 
params.setWatermarkArea(20,20,60,240);  //矩形宽度是220，高度40 
params.setWatermarkTextPosition(10,40); //y 值和矩形区域高度一致 
 
 setWatermarkFontFile 
函数：  
public void setWatermarkFontFile(String file) 
参数： 
file  水印的字体文档 
 
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
 setWatermarkTimeMs 
函数：  
public void setWatermarkTimeMs(boolean enable) 
参数： 
enable 是否开启时间水印 
 
 set 
函数：  
public void set(CaptureRequest.Key<T> key, T value) 
参数： 
设置摄像头的请求参数，可以参考原生 CaptureRequest/CaptureResult/CameraCharacteristics 中的 key 进
行设定。 
细节： 
此方法适用于对 Android 支持的参数进行设置。 
 
1.2.2.9 IpodProxy 
引入（导入）IpodProxy：   
import com.mediatek.smartplatform.IpodProxy; 
实例化(创建)对象： 
IpodProxy proxy=SmartPlatformManager.get().getIpodProxy(); 
或者IpodProxy proxy=IpodProxy.getInstance(SmartPlatformManager.get()); 
建议使用第一种方式获取 IpodProxy 对象，IpodProxy 也是采用单例模式。 
 
 doShutdown 
函数：  
public int doShutdown(String reason,boolean isShutdown) 
参数： 
reason  要关机的原因，目前可以设置为任意字符串。 
isShutdown 是否要关机，true 表示关机，false 表示不关机 。 
返回值： 
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
该函数的执行结果。 
细节： 
• 此 API 用于设定进入 IPO 后是否要真正关机。当前按 power 键关机，系统并没有真正关机，而是进入 IPO/IPOH
模式。当需要彻底关机时， 可以调用此 API 实现该功能。在 IPOD 进程未启动之前，如果调用了此 API 且将传
入的 isShutdown 参数设置为 true，还可以再次调用此 API，并将第二个参数 isShutdown 设置为 false 以取消
IPOD 关机。 
• 需要注意的是参数 reason 不能包含有“=”或“;”这两个字符。 
• 调用此 API 的返回值说明如下： 
–  RESULT_SUCCESS 表示此 API 的参数已经成功传给 IPOD 进程去执行，这种情况一般发生在关机之后，并
且 IPOD 进程已经运行。 
–  RESULT_PARAMS_SAVED 表示此 API 的参数已经成功保存，等 IPOD 进程运行后会传给 IPOD 进程去执行。 
–  RESULT_PARAMS_REPLACED 表示此 API 之前有调用过，此次传下来的参数覆盖之前的参数，也就是说最后
一次传下来的参数会被传到 IPOD 那边执行。 
–  RESULT _FAIL 表示调用此 API 调用失败了，失败的原因有很多，视具体情况而定。 
–  RESULT_EXCEPTION 表示调用这个 API 的时候出现了异常，一般是 Smartplatform service 不存在了，
也就是SmartPlatformServer 进程死掉了。 
示例： 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. doShutdown(“test”,true);    //进入ipo 后，进行关机操作 
 
 setRebootControl 
函数：  
public int setRebootControl(int flag) 
参数： 
flag  开启定时重启功能的标志，值为 0 或 1 
返回值： 
该函数的执行结果。 
细节： 
• 用于打开定时重启的功能，传入的 flag 参数为 1 时表示打开，参数为 0 时表示关闭。如果不调用
setRebootTimeSlot 去设定重启时间，则会以上次设定的时间作为重启时间。  
• 调用此 API 的返回值说明如下： 
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
– RESULT_SUCCESS 表示此 API 的参数已经成功传给 IPOD 进程去执行，这种情况一般发生在关机之后，并且
IPOD 进程已经运行。 
– RESULT_PARAMS_SAVED 表示此 API 的参数已经成功保存，等 IPOD 进程运行后会传给 IPOD 进程去执行。 
– RESULT_PARAMS_REPLACED 表示此 API 之前有调用过，此次传下来的参数覆盖之前的参数，也就是说最后
一次传下来的参数会被传到 IPOD 那边执行。 
– RESULT _FAIL 表示调用此 API 调用失败了，失败的原因有很多，视具体情况而定。 
– RESULT_EXCEPTION 表示调用这个 API 的时候出现了异常，一般是 Carcorder Service 不存在了，也就是
SmartPlatformServer 进程已经死掉了。 
示例： 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. setRebootControl(1);    //打开定时重启功能 
 
 setRebootTimeSlot 
函数：  
public int setRebootTimeSlot(int slotTime) 
参数： 
slotTime  重启的时间点，值的范围为 0 到 23  
返回值： 
该函数的执行结果。 
细节： 
• 此 API 用于设定重启的时间，参数是重启的时间点，范围在 0 到 23。要使当前的设置有效，需要调用
setRebootControl 去打开定时重启功能。 
• 调用此 API 的返回值说明如下： 
– RESULT_SUCCESS 表示此 API 的参数已经成功传给 IPOD 进程去执行，这种情况一般发生在关机之后，并且
IPOD 进程已经运行起来了。 
– RESULT_PARAMS_SAVED 表示此 API 的参数已经成功保存，等 IPOD 进程运行起来后会传给 IPOD 进程去执
行。 
– RESULT_PARAMS_REPLACED 表示此 API 之前有调用过，此次传下来的参数覆盖之前的参数，也就是说最后
一次传下来的参数会被传到 IPOD 那边执行。 
– RESULT _FAIL 表示调用此 API 调用失败了，失败的原因有很多，视具体情况而定。 
– RESULT_EXCEPTION 表示调用这个 API 的时候出现了异常，一般是 Smartplatform Service 不存在了，也就
是 SmartPlatformServer 进程已经死掉了。 
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
示例： 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. setRebootControl(1);    //打开定时重启功能 
proxy. setRebootTimeSlot (5); //设置凌晨5 点重启 
 
 exitIpod 
函数：  
public int exitIpod(int reason) 
参数： 
reason 退出 IPOD 的原因 
返回值： 
该函数的执行结果。 
细节： 
• 在 IPO 模式下，调用这个 API 跟长按电源键开机是一样的功能，需要在 IPOD 进程运行起来之后，调用才有
效。 
• 调用此 API 的返回值说明如下： 
– RESULT_SUCCESS 表示此 API 的参数已经成功传给 IPOD 进程去执行，这种情况一般发生在关机之后，并且
IPOD 进程已经运行起来了。 
– RESULT_PARAMS_SAVED 表示此 API 的参数已经成功保存，等 IPOD 进程运行起来后会传给 IPOD 进程去执
行。 
– RESULT_PARAMS_REPLACED 表示此 API 之前有调用过，此次传下来的参数覆盖之前的参数，也就是说最后
一次传下来的参数会被传到 IPOD 那边执行。 
– RESULT _FAIL 表示调用此 API 调用失败了，失败的原因有很多，视具体情况而定。 
– RESULT_EXCEPTION 表示调用这个 API 的时候出现了异常，一般是 Carcorder Service 不存在了，也就是
SmartPlatformServer 进程已经死掉了。 
示例： 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. exitIpod(0);    //退出ipod，然后开机 
 
1.2.2.10 CarEventProxy 
引入（导入）CarEventProxy：   
import com.mediatek.smartplatform.CarEventProxy; 
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
实例化(创建)对象： 
CarEventProxy proxy=SmartPlatformManager.get().getCarEventProxy(); 
或者CarEventProxy proxy= CarEventProxy.getInstance(SmartPlatformManager.get()); 
建议使用第一种方式获取 CarEventProxy 对象，CarEventProxy 也是采用单例模式。 
目前由于硬件限制，只有 ACC on/off 的行为， 其它行为需根据硬件添加。 
 
 addEngineChangedCallback 
函数：  
public void addEngineChangedCallback(EngineChangedCallback callback) 
参数： 
callback  车子发动机状态改变时的回调，与 ACC on/off 时对应。 
同一回调对象，注册多次，只能保存一个。 
细节： 
• EngineChangedCallback 定义如下 
  public interface EngineChangedCallback{ 
      public static final int CAR_ENGINE_FLAMEOUT =0;    
      public static final int CAR_ENGINE_WORKING = 1; 
      void onEngineChanged(int status); 
  } 
• 车子发动机状态改变时会触发此回调，onEngineChanged 中的 status 表示发动机的状态。当该值为
CAR_ENGINE_FLAMEOUT 时，表示发动机处于熄火状态，当该值为 CAR_ENGINE_WORKING 时，表示发动机处于
工作状态。 
• 这两个事件 CAR_ENGINE_WORKING/CAR_ENGINE_FLAMEOUT 对应的就是 ACC on/off 事件。 
示例： 
   CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
   mCarEventProxy.addEngineChangedCallback( 
         new EngineChangedCallback(){ 
           public void onEngineChanged (int status){ 
              //TODO 
           } 
         } 
    ); 
 
 removeEngineChangedCallback 
函数：  
public void removeEngineChangedCallback(EngineChangedCallback callback) 
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
参数： 
callback  车子发动机状态改变时的回调 
细节： 
移除注册的回调对象 。 
示例： 
CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
mCarEventProxy.removeEngineChangedCallback(callback); 
 
 queryCarEngineState 
函数：  
public int queryCarEngineState() 
返回值： 
当前发动机工作的状态 
细节： 
目前定义有三种状态： 
• CAR_STATE_UNKNOWN 状态未知，一般是调用 API 发生异常才会出现这种情况； 
• CAR_ENGINE_FLAMEOUT，表示发动机处于熄火状态； 
• CAR_ENGINE_WORKING，表示发动机处于工作状态。 
直接将Smartplatform Service 保存的发动机状态直接返回。 
示例： 
CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
int state= mCarEventProxy.queryCarEngineState(); 
 
 setDefaultAccOffBehavior 
函数：  
public void setDefaultAccOffBehavior(boolean enable) 
参数： 
enable 是否启用 ACC 的默认行为 
细节： 
• 默认的 ACC 行为是底层的驱动程序检测到 ACC 点火或者熄火时，会将这一事件通过广播的形式发送给 应用程
序，应用程序只需要注册对应的广播就可以了。 
– 点火事件广播: android.intent.action.ACTION_POWER_CONNECTED 
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
– 熄火事件广播: android.intent.action.ACTION_POWER_DISCONNECTED 
• 如果应用程序想通过回调的方式接收 ACC 点火或者熄火的事件，将参数值设为 false，同时通过
addEngineChangedCallback 来注册对应的回调。 
示例： 
   CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
   mCarEventProxy.addEngineChangedCallback( 
         new EngineChangedCallback(){ 
           public void onEngineChanged (int status){ 
              //TODO 
           } 
         } 
      ); 
mCarEventProxy.setDefaultAccOffBehavior(false); 
 
 addCarReverseCallback 
函数：  
public void addCarReverseCallback(CarReverseCallback callback) 
参数： 
callback  车子运动方向改变时的回调。 
同一回调对象，注册多次，只能保存一个。 
细节： 
• CarReverseCallback 定义如下： 
  public interface CarReverseCallback { 
      public static final int CAR_STATUS_NORMAL = 0; 
      public static final int CAR_STATUS_LEFT = 1; 
      public static final int CAT_STATUS_RIGHT = 2; 
      public static final int CAR_STATUS_REVERSE = 3; 
 
      public static final int CAR_STATUS_SOURCE_AVM = 1; 
      public static final int CAR_STATUS_SOURCE _GPIO = 2; 
 
      void onReverse(int status, int source); 
  } 
• 当车子从左转/右转/倒车/前行中某一状态转换成另外不同的状态时触发此回调。触发此回调的来源有两个，
GPIO 或者 AVM。两种触发方式都需要有硬件的支持。 
示例： 
   CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
   mCarEventProxy.addCarReverseCallback( 
         new CarReverseCallback(){ 
           public void onReverse(int status, int source){ 
              //TODO 
           } 
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
         } 
    ); 
 
 removeCarReverseCallback 
函数：  
public void removeCarReverseCallback(CarReverseCallback callback) 
参数： 
callback 车子运动状态发生变化时的回调 
细节： 
移除注册的回调对象。  
示例： 
CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy();   
mCarEventProxy.removeCarReverseCallback(callback); 
 
1.2.2.11 CollisionProxy 
引入（导入）CollisionProxy：   
import com.mediatek.smartplatform.CollisionProxy; 
实例化(创建)对象： 
CollisionProxy proxy=SmartPlatformManager.get().getCollisionProxy(); 
或者CollisionProxy proxy= CollisionProxy.getInstance(SmartPlatformManager.get()); 
建议使用第一种方式获取 CollisionProxy 对象，CollisionProxy 也是采用单例模式。 
 
 addCollisionCallback 
函数：  
public void addCollisionCallback(CollisionCallback callback) 
参数： 
callback 平台检测到碰撞时的回调 
细节： 
• CollisionCallback 定义如下： 
   public interface CollisionCallback{ 
     public static final int COLLISION_UNRELIABLE =0;    
     public static final int COLLISION_LOW=1; 
     public static final int COLLISION_MEDIUM=2; 
     public static final int COLLISION_HIGH=3;   
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
     void onCollision(int collision,int status); 
  } 
• 平台检测到碰撞时会触发此回调，onCollision 中的 collision 实际指的是碰撞的等级（灵敏度），目前分为三个
等级 COLLISION_LOW ， COLLISION_MEDIUM ，COLLISION_HIGH 。status 为保留参数，一般为 0，如果修改了碰
撞检测算法，则该值和 collision_detect()中的（*result）值相等。 
• 同一个对象，只能注册一次，即使该对象被添加了多次，但最终只会保存一个回调对象，同样只需要调用一次
removeCollisionCallback 就可以将该回调彻底移除。 
示例： 
      SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
   mSmartPlatformManager.addCollisionCallback( 
         new CollisionCallback() { 
           public void onCollision(int collision,int status){ 
              //TODO 
           } 
         } 
      ); 
 
 removeCollisionCallback 
函数：  
public void removeCollisionCallback (CollisionCallback callback) 
参数： 
callback 平台检测到碰撞时的回调 
细节： 
移除注册的回调对象。值得注意的是，如果同一个回调对象，注册了多次，只要调用该函数一次就能完全移除。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.removeCollisionCallback(callback); 
 
 setSuspendCollision 
函数：  
public void setSuspendCollision(boolean fgEnabled) 
参数： 
fgEnabled 是否打开 Gsensor 检测碰撞的功能 
细节： 
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
• 通过这个 API 可以实现打开或关闭 Gsonse 检测碰撞的功能。参数为 true 表示打开，false 表示关闭。这个 API
对应的功能是碰撞开机。默认情况下这个功能是打开的，可以通过 getSuspendCollision 查看是否有开启这个功
能。 
• 正常开机还是碰撞开机，可以通过开机时发出来的广播区分。  
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
//打开gsensor 检测碰撞的功能，即使在ipo 状态下，如果发生了碰撞就会开机 
mSmartPlatformManager.setSuspendCollision(true); 
 
 getSuspendCollision 
函数：  
public boolean getSuspendCollision() 
返回值： 
返回一个 boolean 值，表示是否打开 Gsensor Driver 检测碰撞。 
细节： 
如果返回值为 true 表示打开，返回值为 false 表示关闭。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
boolean isEnable=mSmartPlatformManager.getSuspendCollision(); 
 
 setNormalCollision 
函数：  
public void setNormalCollision(boolean isEnabled) 
参数： 
isEnabled 是否打开 Carcorder 检测碰撞的功能 
细节： 
Carcorder 检测碰撞可以理解为 Carcorder 进程里面的一个功能模块，通过此接口可以控制这个功能的开关。只有打
开了这个功能，在发生碰撞时，才能在 CollisionCallback 收到回调。Carcorder 检测碰撞和 Gsensor 检测碰撞属于不
同的模块，关闭了 Gsensor 检测碰撞的功能，并不会影响到 Carcorder 检测碰撞的功能，同样关闭了 Carcorder 检
测碰撞的功能，也不会影响 Gsensor 检测碰撞的功能，所以这两个功能互不影响。默认情况下这个功能是打开的，
如果上一次有设置过，则继续使用上一次的设置。 
示例： 
   SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
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
   mSmartPlatformManager.addCollisionCallback( 
        new CollisionCallback { 
           public void onCollision(int collision,int status){ 
          } 
        } 
       ); 
   mSmartPlatformManager.setNormalCollision(true); 
 
 getNormalCollision 
函数：  
public boolean getNormalCollision() 
返回值： 
返回一个 boolean 值，表示是否启用了 Carcorder 检测碰撞功能。 
细节： 
如果返回值为 true 表示打开，返回值为 false 表示关闭。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
boolean isEnable=mSmartPlatformManager.getNormalCollision(); 
 
 setSuspendCollisionSensity 
函数：  
public void setSuspendCollisionSensity(int level) 
参数： 
level 碰撞的灵敏度 
细节： 
参数 level 代表灵敏度，也就是说当 Gsensor 的变化值超过某个阀值时，就认为发生了碰撞，这个阀值和 level
是相对应的。目前定义了 COLLISION_LOW ，COLLISION_MEDIUM ，COLLISION_HIGH 三个等级。在不设置的情况
下，默认是COLLISION_MEDIUM。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setSuspendCollisionSensity(CollisionCallback.COLLISION_HIGH);                           
 
 getSuspendCollisionSensity 
函数：  
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
public int getSuspendCollisionSensity() 
返回值： 
返回一个整数值，表示驱动程序会检测到碰撞的灵敏度。 
细节： 
目前定义了COLLISION_LOW ，COLLISION_MEDIUM ，COLLISION_HIGH 三个等级。COLLISION_HIGH 最容易检测
到碰撞，直观表现为设置成COLLISION_HIGH，可能轻轻碰撞平台，就会检测到碰撞。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
int level=mSmartPlatformManager.getDriverCollisionSensity(); 
 
 setNormalCollisionSensity 
函数：  
public void setNormalCollisionSensity(int level) 
参数： 
level 碰撞的灵敏度 
细节： 
参数 level 代表灵敏度，也就是说 Gsensor 的变化值超过某个阀值时，就认为发生了碰撞，这个阀值和 level 是
相对应的，目前定义了 COLLISION_LOW ，COLLISION_MEDIUM ，COLLISION_HIGH 三个等级。虽然这个函数和
setSuspendCollisionSensity()很相似，但是它们是属于不同模块，互不影响。如果需要自定义碰撞的阀值，可以通过
setCollisionThreshold 来完成。setCollisionThreshold()可以完全取代该接口，因为设置的灵敏度，到下面会转为对应
的阀值，这和直接修改阀值的效果是一样的。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setNormalCollisionSensity(CollisionCallback.COLLISION_HIGH); 
 
 getNormalCollisionSensity 
函数：  
public int getNormalCollisionSensity() 
返回值： 
返回一个整数值，表示 Carcorder 会检测到碰撞的灵敏度。 
细节： 
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
MT8676 Android SDK 
User Manual 
Confidential B 
目前定义了COLLISION_LOW ，COLLISION_MEDIUM，COLLISION_HIGH 三个等级。COLLISION_HIGH 最容易检测到
碰撞。直观表现为设置成COLLISION_HIGH，可能轻轻碰撞平台，就会检测到碰撞。如果使用 setCollisionThreshold
来设置定义的碰撞阀值，那么此函数得到的返回值就是 setCollisionThreshold 设定的level 值。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
int level=mSmartPlatformManager.getNormalCollisionSensity(); 
 
 setCollisionThreshold 
函数：  
public int setCollisionThreshold(float x,float y,float z,int level) 
参数： 
x Gsensor X 轴方向加速度的阀值 
y Gsensor Y 轴方向加速度的阀值 
z Gsensor Z 轴方向加速度的阀值 
level 设置为此阀值代表的等级 
返回值： 
返回一个整数值，表示参数设置是否成功，0 表示成功，否则失败。 
细节： 
• 通过这个 API 可以自定义碰撞的阀值，分别是 Gsensor X，Y，Z 轴方向加速度的阀值。之前的碰撞检测算法是
只要 Gsensor 某个方向的加速度值超过了对应的阀值，就认为是检测到碰撞了，现在的算法是如果 Gsensor 某
个方向的加速度变化超过设置的阀值，就认为检测到碰撞。  
• 第四个参数值 level 没有任何限定，可以是任意整数值，这个参数的作用类似一个标识，当检测到碰撞后，
CollisionCallback.onCollision()中第一个参数就是设置的这个值。通过 getNormalCollisionSensity 也能得到该值。 
• 该函数和 setNormalCollisionSensity()的作用是一样的，所以不需要两个接口都调用。如果两个接口都调用了，
下面只会使用最后一个接口设置下去的参数，建议使用该接口。  
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setCollisionThreshold(5f,5f,5f,2); 
 
 getCollisionThreshold 
函数：  
public float[] getCollisionThreshold()  
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
MT8676 Android SDK 
User Manual 
Confidential B 
返回值： 
返回设置的 Gsensor X，Y，Z 轴方向加速度的阀值 
细节： 
通过此 API 可以获取 setCollisionThreshold 设置的 Gsensor X，Y，Z 轴方向加速度的阀值。如果返回值为 null，表示
在获取阀值的时候出现了异常。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
float[] f=mSmartPlatformManager.getCollisionThreshold(); 
 
 setGsensorEventRate 
函数：  
public int setGsensorEventRate(int delayMs) 
参数： 
delayMs  Gsensor 数据上报时间间隔 
返回值： 
返回一个整数值，表示参数设置是否成功，0 表示成功，否则失败。 
细节： 
• 通过这个 API 可以设置 Gsensor 数据上报的时间间隔，单位是毫秒。例如设置为 10，意味着每隔 10 毫秒会收
到一笔 Gsensor 数据，换算成频率就是 100Hz。 
• 该接口只是调用 sensorservice 的设置接口，再由 sensorservice 设置到驱动程序端。传进去的值和实际设置到驱
动程序的值不一定相等，因为这个值有范围限定。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setGsensorEventRate(10); 
 
 getGsensorEventRate 
函数：  
public int getGsensorEventRate()  
返回值： 
返回设置下去的 Gsensor 数据上报时间间隔 
细节： 
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
MT8676 Android SDK 
User Manual 
Confidential B 
该接口只是拿到上一次调用 setGsensorEventRate()传下来的值，而不是拿到驱动程序那边实际使用的值，目前没有
办法拿到驱动程序使用的值。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
int rate=mSmartPlatformManager.getGsensorEventRate(); 
 
 setIPOStandby 
函数：  
public void setIPOStandby(Boolean on)  
参数： 
On true 表示进入 IPO 待机状态，false 表示退出 IPO 待机状态。 
细节： 
NATIVE Collision 根据是否进入 IPO 待机状态，选择不同流程从而达到省电的目的。 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setIPOStandby (); 
 
1.3 配置/客制化指南 
Codebase 路径：vendor\mediatek\proprietary\frameworks\base\smartplatform\sdk 
APK demo 路径：vendor\mediatek\proprietary\packages\apps\CarcorderMcamDemo 
 
 主要功能介绍 
1.3.1.1 预览 
开启预览： 
     SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
     SurfaceView surfaceView=findViewById(R.id.surface_view); 
     SurfaceHolder holder=surfaceView.getHolder(); 
     mDevice.setPreviewSurface(Holder.getSurface(),PreviewSource.GENERAL_CAMERA); 
     mDevice.starPreview(); 
 
停止预览： 
     SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
     mDevice.stopPreview(); 
     mDevice.setPreviewSurface(null, PreviewSource.GENERAL_CAMERA); 
 
1.3.1.2 拍照 
     SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
     String fileName=”/sdcard/DCIM/photo/”+filename; 
     mCameraDevice.takePicture(fileName,shutter,jpeg); 
1.3.1.3 录制 
开启录制： 
     RecordConfiguration recordConfig= RecordConfiguration.get(recordSource); 
     recordConfig.setVideoCallback(mVideoCallback); 
     mCameraDevice.startrecord(RecordSource. GENERAL_CAMERA, recordConfig); 
 
停止录制： 
     SpmCameraDevice Device = SmartPlatformManager.get().openCameraDevice(“0”); 
     mDevice.stoptRecord(); 
注：录制涉及到各种特性，例如子码流，主码流，打点保护等，在 DVR 文档中会详细介绍。 
 
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
注：imageDataCallback 返回的是 data，如果需要 FD 回调，需要在startPictureSequence 通过
enableShareBuffer 获取 FD。 
 
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
MT8676 Android SDK 
User Manual 
Confidential B 
 碰撞检测特别说明 
1.3.2.1 碰撞启动某个录制 APK 
需求说明: 
在开机状态下，当 Demo APK 退出后，通过注册回调的方式是无法收到 Carcorder Service 发送的碰撞通知。现在想
要在 APK 退出后（没有运行）的情况下也能收到碰撞事件，目前是通过广播的形式将碰撞事件通知 APK。 
 
实例代码: 
1. 实现一个继承 BroadcastReceiver 的类。 
 class CollisionBroadcastReceiver extends BroadcastReceiver{ 
@Override 
publicvoid onReceive(Context context, Intent intent)  
         { 
} 
  } 
2. 应该使用静态注册的方式，在 Manifest.xml 里面注册广播。 
  <receiverandroid:name=".CollisionBroadcastReceiver "> 
     <intent-filter> 
        <action 
          android:name="android.intent.action.GSENSOR_COLLISION"/> 
    </intent-filter> 
  </receiver> 
 
1.3.2.2 碰撞检测算法开放与客制化 
代码路径： 
alps/frameworks/native/libs/smartplatform/libsmartplatformcollision/* 
文件组成： 
SmartPlatformCollision.h  SmartplatformCollision.cpp  Android.mk 
接口定义： 
下面两个函数的定义不能修改，函数名、参数和返回值都不能修改。  
void collision_init(); 
初始化函数：当 collide 运行起来，libsmartplatformcollision.so 加载完成后会调用一次此函数。仅会调用一
次，用于变量的初始化。 
void collision_detect(AsensorEvent value, const float* threshod, int size, int level, int* 
result); 
参数说明： 
AsensorEvent value  封装传感器数据的结构体。 
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
MT8676 Android SDK 
User Manual 
Confidential B 
const float* threshod  x, y, z 阀值数组，和 setCollisionThreshold()设置的值一致。 
int size   指定 threshod 数组的长度，目前定义的长度是 3。 
int level   碰撞的等级，也是设置过的值。 
int* result 额外的返回值，应用程序可以通过CollisionCallback.onCollision(int collision,int 
status)获取，collision 和level 的值相等，status 和  *result 的值相等。 
返回值说明: 
如果返回 true，则认为检测到碰撞，会通过回调的方式通知应用程序，如果应用程序不注册回调，则会发出广
播。 
如果返回 false，则认为没有检测到碰撞，既不会回调，也不会发广播。 
其他说明： 
sensorservice 每送一次数据过来，就会调用一次 collision_detect 这个函数。 
可以通过 setNormalCollision()设置是否启用这个功能。如果禁用了这个功能，即使有传感器数据传送过来，也不会
回调collision_detect。 
参考实例： 
请参考SmartplatformCollision.h，SmartPlatformCollision.cpp 的实现方式。 
 
1.4 常见问题/故障排除 
 SDK 常见问题 
1.4.1.1 调用 setpreviewSurface 顺序不对导致底层缓冲区卡住 
如果先调用 setpreviewSurface null 再去调用 stop preview，会打印出如下日志： 
BufferQueueProducer: [ImageReader-1280x720f32315659m5-15749-
52](this:0x7a989dd000,id:52,api:4,p:544,c:-1) queueBuffer: BufferQueue has been abandoned 
 
如果还未调用 stop preview 就销毁了 surface，会导致底层缓冲区卡住并报错。 
 
1.4.1.2 拍照 takePicture 另开线程 
有的 SD Card 保存图片慢，为了避免阻塞 APK，在调用 takePicture 时可另开线程来执行保存操作。 
new Thread(() -> { 
         mDevice.takePicture(path, mShutterCallback, pictureCallback); 
}).start(); 
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
MT8676 Android SDK 
User Manual 
Confidential B 
1.4.1.3 不能在回调中做耗时任务 
考虑到同步和效率问题，SDK 中的回调是直接在 binder 线程中处理，并未新开线程处理， 所以应用程序在收到回
调之后，最好是新开线程来处理； 如果未新开线程处理，不能继续在回调中调用 SDK 接口（可能造成死锁）；也
不要在回调中做耗时较久的事情，这样容易造成 APK ANR。 
 
 调试日志开关方法 
1.4.2.1 打开 SpmCameraDeviceImpl 调试日志的方法 
adb shell setprop persist.vendor.log.spmsdk true; 
adb reboot 
 
1.4.2.2 关闭提前设定 Capture Surface 的方法 
adb shell setprop persist.vendor.spm.presetpic false 
adb reboot 
 
 
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
MT8676 Android SDK 
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
# SRC0167 MT8676_Android_Secure_Boot_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Secure_Boot_User_Manual_V1.0.pdf

SHA-256：b415906384329cf8ebcb719c1d83bdf8121542ce2e3f287da85be07dfd2847c0

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0167.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-09-19
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
版本记录 
版本 日期 作者 描述 
1.0 2024-09-19 张萌 正式版 
 
  
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
1.3 下载代理认证 (DAA) ··············································································································································· 7 
1.4 安全特性配置 ·························································································································································· 7 
 生成密钥对 ·················································································································································· 7 
 开启安全启动 ·············································································································································· 9 
 编译软件 ······················································································································································ 9 
 签名 preloader ············································································································································ 10 
 签名其他镜像 ············································································································································ 10 
1.5 签名 DA ·································································································································································· 11 
1.6 efuse.xml 配置 ······················································································································································· 12 
1.7 Authfile 生成 ·························································································································································· 12 
附件一 附加条款 ····························································································································································· 13 
 
图片目录 
图 1-1. 安全启动检查流程 ························································································································································ 6 
图 1-2. dakey.h ··········································································································································································· 8 
图 1-3. resignda 中的 DA 密钥 ················································································································································ 11 
 
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
1 Secure Boot 
1.1 概述 
本文档旨在提供 MT8676 SoC 及其配套 SDK 中安全启动功能的概览。在该产品的设计和部署周期中，功能和特性可
能会发生变化，这些变化将在本文档的后续版本中记录。此外，本文档还介绍了如何启用安全特性。 
 
 名词解释 
表 1-1. 名词解释 
缩略词 全称及释义 
USBDL USB Download USB 下载 
DA Download Agent 下载代理 (包括 DA_BR 和 DA_PL) 
DAA Download Agent Authentication 下载代理认证 
DRAM Data Random Access Memory 动态随机存取内存 
eFuse Electronic Fuse 电子保险丝 
eMMC Embedded MultiMedia Card 嵌入式多媒体卡 
EVB Evaluation Board 开发板 
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
MT8676 Android Secure Boot 
User Manual 
Confidential B 
• 对 SoC 进行基础的硬件配置（例如设置 PLL，时钟等），以便启动系统。 
• 从启动设备 UFS/eMMC/NAND/...）加载第一阶段引导程序以启动系统。 
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
 
2. BROM 加载并验证 Preloader，这是第一阶段的引导加载程序。首先，BROM 将 Preloader 从 NVM 读取到 SoC 的 
SRAM 中，并使用安全启动检查公钥（SBC_PUBK）来认证 Preloader。如果 Preloader 验证成功，将执行 
Preloader。验证方法使用 SHA256 计算哈希值，RSA（2048 位）和 MTK 或 PSS 填充（由第一阶段引导加载程序
的头部决定）来进行验证。 
注意：  
• 如果外部存储器是 NAND 闪存，BROM 支持第二份（副本）Preloader。当 BROM 无法加载第一份（副本）Preloader 时
，BROM 会尝试加载/认证第二份（副本）Preloader。 
 
3. 在第一阶段引导加载程序之后，引入了证书链，用于验证第二阶段引导加载程序、 Linux 内核和其他镜像。证
书链设计用于密钥管理委托，每个镜像可以使用不同的密钥对。每个镜像都附加了两个证书， CERT1 和 CERT2，
它们都是 x509v3 格式的。涉及两个密钥对，根密钥对和镜像密钥对。CERT1 由根私钥签名，CERT2 由镜像私钥
签名。因此，验证步骤将是在用公钥（ SBC_PUBK）验证了 CERT1 之后，从 CERT1 中提取的镜像公钥用于验证  
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
CERT2。需要注意的是，每个镜像的 CERT1 都由相同的根私钥签名，但每个镜像的  CERT2 可能由相同的镜像私
钥签名，也可能不是。 
 
4. Preloader 从 NVM 把第二阶段引导加载程序加载到非安全的 DRAM 区域并验证。它使用嵌入在 Preloader 中的
公钥来认证第二阶段引导加载程序的 CERT1，并使用从 CERT1 中提取的镜像公钥来认证第二阶段引导加载程序
的 CERT2。如果第二阶段引导加载程序验证成功，在 TEE 初始化后将执行第二阶段引导加载程序。验证方法使
用 SHA256 计算哈希值，RSA（2048 位）和 MTK 或 PSS 填充进行验证。 
 
5. Preloader 还从 NVM 加载 TEE 到安全的 DRAM 区域并验证。它使用第一阶段引导加载程序内的公钥来认证 TEE 
镜像的 CERT1，并使用从 CERT1 中提取的镜像公钥来认证 TEE 镜像的 CERT2。如果 TEE 验证成功，TEE 将被执
行，然后跳转到第二阶段引导加载程序。验证方法使用 SHA256 计算哈希值，RSA（2048 位）和 MTK 或 PSS 填
充进行验证。 
 
6. 第二阶段引导加载程序也使用嵌入其中的公钥和镜像公钥分别验证  Linux 内核和其他在此阶段需要验证的镜像
的 CERT1 和 CERT2。验证方法使用 SHA256 计算哈希值，RSA（2048 位）MTK 或 PSS 填充进行验证。 
 
7. 在 Linux 系统执行后，可以通过 Linux 内核中的 dm-verity（在块设备上）来验证只读镜像。 
注意： 
• 目前 dm-verity 仅支持 Linux 中的块设备（eMMC 上的 EXT4）。 
 
 
图 1-1. 安全启动检查流程 
  
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
1.3 下载代理认证 (DAA) 
当外部存储器（eMMC/NAND/...）中的设备软件为空或损坏时，主机 PC 工具可以与 SoC 中的 BROM 通信，将一个
DA 软件加载到 SoC 的 SRAM 中并执行 DA 来进行镜像下载过程。当 Enable_DAA 被烧录时，DA 将由 BROM 进行认
证，下面的流程被称为下载代理认证（DAA）。 
 
1. 主机 PC 工具通过 USB 或 UART 将认证文件（AuthFile）发送给 BROM。 
2. BROM 对 AuthFile 进行认证 。 
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
• 除了 BROM，第一阶段引导加载程序也支持下载代理协议，它可以使用 SHA256/RSA2048 对 DA 进行验证。 
 
1.4 安全特性配置 
 生成密钥对 
生成一对根密钥（包括私钥和公钥）。使用 pem_to_der.py，在
vendor/mediatek/proprietary/scripts/sign-image_v2/der_extractor/中将密钥的格式转换为 DER 格式。 
 
1. 生成私钥的命令: 
openssl genrsa -out root_prvk.pem 2048 
python pem_to_der.py root_prvk.pem root_prvk.der 
2. 生成公钥的命令: 
openssl rsa -in root_prvk.pem -pubout > root_pubk.pem 
python pem_to_der.py root_pubk.pem root_pubk.der 
 
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
使用相同的方法生成用于签名和验证镜像的镜像密钥对（img_prvk.pem/img_pubk.pem），以及用于签名和验证
DA 的 DA 密钥对（da_prvk.pem/da_pubk.pem）。 
 
1.4.1.1 生成 oemkey.h 
将根密钥（root_pubk.der）导出，使用 der_extractor 生成 oemkey.h，该工具位于 
vendor/mediatek/proprietary/scripts/sign-image_v2/der_extractor/ 目录下。请将 oemkey.h 放置到以
下路径: 
[DA] $DA_Kit/Raphael-da/custom/$PLATFORM/oemkey.h 
[PL] $PL/custom/$PROJECT/inc/oemkey.h 
[LK] $LK/target/$PROJECT/inc/oemkey.h 
命令: 
chmod 777 der_extractor 
./der_extractor root_pubk.der oemkey.h ANDROID_SBC 
 
1.4.1.2 生成 dakey.h 
dakey.h 包含用于由 preloader 验证 DA_PL.bin 的 DA_PL 公钥。并使用相应的私钥对 DA_PL.bin 进行签名。 
命令: 
chmod 777 der_extractor 
./der_extractor da_pubk.der dakey.h ANDROID_SBC 
 
将dakey.h 放到以下路径： 
[PL] $PL/custom/$PROJECT/inc/dakey.h 
注意:  
• 生成 dakey.h 后, 请将“OEM” 替换成 “DA” (图 1-2). 
 
图 1-2. dakey.h 
 
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
 开启安全启动 
1.4.2.1 preloader 设置 
1. vendor/mediate/proprietary/bootable/bootloader/preloader/custom/<project>/<project.mk> 
MTK_SECURITY_SW_SUPPORT=yes 
2. vendor/mediate/proprietary/bootable/bootloader/preloader/custom/<project>/<project.mk> 
MTK_SEC_BOOT= ATTR_SBOOT_ONLY_ENABLE_ON_SCHIP  
MTK_SEC_USBDL = ATTR_SUSBDL_ONLY_ENABLE_ON_SCHIP 
ATTR_SBOOT_ONLY_ENABLE_ON_SCHIP 表示安全启动和安全下载是根据 eFuse SBC 字段来启用的。 
 
然而，在项目的早期阶段，您可能不希望对设备进行 eFuse 操作。因此，可以在不使用 eFuse 的情况下强制启
用安全启动和安全下载，以便首先验证软件的安全启动流程。  
MTK_SEC_BOOT= ATTR_SBOOT_ENABLE  
MTK_SEC_USBDL = ATTR_SUSBDL_ENABLE  
 
1.4.2.2 LK 设定 
vendor/mediate/proprietary/bootable/bootloader/lk2/project/<project.mk> 
MTK_SECURITY_SW_SUPPORT=yes 
 
1.4.2.3 Kernel 设定 
32 bit kernel 
<kernel path>/arch/arm/configs/<project>_debug_defconfig 
<kernel path>/arch/arm/configs/<project>_defconfig 
 
64 bit kernel 
<kernel path>/arch/arm64/configs/<project>_debug_defconfig 
<kernel path>/arch/arm64/configs/<project>_defconfig 
 
CONFIG_MTK_SECURITY_SW_SUPPORT=y 
 
 编译软件 
编译整个项目。 
 
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
 签名 preloader 
1. 将您的 root_prvk.pem 替换到以下路径: 
/vendor/mediatek/proprietary/bootable/bootloader/preloader/custom/${project}/security/ch
ip_config/s/key/ 
2. 清除编译 preloader。 
 
 签名其他镜像 
1.4.5.1 生成 cert1 和 cert2 密钥 
1. 使用 root_prvk.pem 和 img_prvk.pem 生成 cert1 和 cert2_key。 
2. 运行以下命令。  
python ./vendor/mediatek/proprietary/scripts/sign-image_v2/img_key_deploy.py mt6897  
cert1_key_path=${KEY_PATH}/root_prvk.pem cert2_key_path=${KEY_PATH}/img_prvk.pem 
root_key_padding=pss 2>&1 | tee  SecureGen.log 
注意:  
• 请不要进入 ./vendor/mediatek/proprietary/scripts/sign-image_v2/ 目录执行 img_key_deploy.py。
请在代码库的根目录下执行该命令。 
• 请检查所有镜像的 cert1 和 cert2_key 是否已在以下位置更新, 
vendor\mediatek\proprietary\custom\mt6897\security\cert_config\cert1\ 
vendor\mediatek\proprietary\custom\mt6897\security\cert_config\cert2_key\ 
 
1.4.5.2 签名镜像 
在生成了 cert1 和 cert2_key 之后，您可以运行签名脚本来生成 <image>-verified.bin 或 <image>-
verified.img。 
命令: 
python ./vendor/mediatek/proprietary/scripts/sign-image_v2/SignFlow.py <platform> <project> 
2>&1 | tee signflow.log 
或者 
./vendor/mediatek/proprietary/scripts/sign-image/sign_image.sh 2>&1 | tee signflow.log 
(必须在编译前 lunch project) 
 
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
1.5 签名 DA 
在签名 DA 之前，请确保已根据 1.4.1.1 章节 配置了 oemkey.h。下载代理的引导区（DA_BR）和预加载程序
（DA_PL）都使用 Python 脚本来进行签名过程。 
1. 密钥配置 (da_prvk.pem 和epp_prvk.pem 使用 RSA2048) 
将da_prvk.pem 和epp_prvk.pem 放在 (图 1-3) 
/vendor/mediatek/proprietary/scripts/secure_chip_tools/custom_keys/路径下。 
– DA_PL: da_prvk.pem 应该与 dakey.h 中设置的公钥配对。 
– DA_BR: da_prvk.pem 应该与 authfile 中的 DAA 公钥配对。 
 
图 1-3. resignda 中的 DA 密钥 
注意: 
• epp_prvk 等同于 da_prvk.pem。因此，只需复制 da_prvk.pem 并重命名为 epp_prvk.pem。 
• DA_PL 和 DA_BR 都使用 PSS 填充格式，所以如果 DA_PL 和 DA_BR 使用相同的密钥进行签名，预加载程序可以使用 
DA_BR。如果使用不同的密钥对 DA_PL 和 DA_BR 进行签名，预加载程序只能使用 DA_PL。 
 
2. 密钥路径设置 
通常默认已经配置好了。 
 
 
3. 将需要签名的 DA 放置在 prebuilt/resignda/ 目录下，并执行以下命令来签名 DA： 
Set the key path 
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
python MTK/resign_da.py prebuilt/resignda/DA_BR.bin MT6897 
settings/Legacy/da/bbchips_pss.ini all out/resignda/DA_BR-resing.bin 
签名后的 DA 将生成在 out/resignda 目录下。 
 
1.6 efuse.xml 配置 
请向 MediaTek 申请 efuse.xml 文件。 
• 在 efuse.xml 中设置密钥类型为 pss 并将 pub-key-e 设置为 010001。pub-key-n 字段应与 oemkey.h 中的根公
钥相同。 
 
 
• 将 SBC 设为 true 来开启安全启动功能。 
 
 
• 将 DAA 设为 true 来开启 DA 校验功能。 
 
 
1.7 Authfile 生成 
DA 的公钥包含在 authfile 中，BROM 使用它来验证 DA。因此，如果启用了 DAA，在使用 flashtool 下载镜像时需要 
authfile。 所有位于以下位置的 .ini 文件， 已经为 本项目配置好了。 
./vendor/mediatek/proprietary/scripts/secure_chip_tools/settings/Legacy/authfile/ 
 
您只需要替换位于以下位置的 DA、epp 和根私钥的 .pem 文件。 
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

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Android Secure Boot 
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
# SRC0168 MT8676_Android_Sensor_lssue_Debug_SOP_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Sensor_lssue_Debug_SOP_V1.0.pdf

SHA-256：2ba1f7bc0db6721e80def3a70261997894104b688d3e5040c450d135488a68f9

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0168.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2025-07-11 
MT8676 Android Sensor Issue Debug SOP 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
版本记录 
版本 日期 作者 描述 
1.0 2025-07-11 张厚松 正式版 
 
  
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
表格目录 ··········································································································································································· 4 
1 概述 ··········································································································································································· 5 
1.1 目的·········································································································································································· 5 
2 缩略词 ······································································································································································· 6 
2.1 缩略词 ······································································································································································ 6 
3 VTS 测试失败 ···························································································································································· 7 
4 APK 无法获取 Sensor 数据 ······································································································································· 8 
4.1 SCP 层 Sensor 异常 Debug ······································································································································ 8 
4.1.1 检查 SCP 是否正常启动 ······························································································································ 8 
4.1.2 检查 Sensor Device 是否初始化成功 ·········································································································· 8 
4.1.3 DVFS 导致 Sensor 异常 ································································································································ 9 
4.2 Kernel 层 Sensor 异常 Debug ································································································································ 10 
4.2.1 Dump Sensor List ········································································································································ 10 
4.2.2 Kernel 端异常排查 ····································································································································· 11 
4.2.3 系统 Suspend 之后，Resume 时出现 I2C Error ························································································ 12 
4.3 HAL 层 Sensor 异常排查 ······································································································································· 13 
4.3.1 HAL 层文件检查 ········································································································································· 13 
4.3.2 Sensor HAL 上报数据频率异常 ················································································································· 13 
5 Sensor 校准失败 ····················································································································································· 14 
6 Sensor Debug Tools 介绍 ········································································································································· 15 
6.1 Sensor Debug APK ·················································································································································· 15 
6.2 测试工具 high_freq_sensor_tool ·························································································································· 17 
6.2.1 基于 high_freq_sensor_tool 测试 Sensor 是否正常 ················································································· 17 
6.3 基于 high_freq_sensor_tool 做 Sensor 校准 ········································································································ 18 
6.3.1 ACC 校准方法 ············································································································································· 18 
6.3.2 GYRO 校准方法 (与 ACC 相同) ·················································································································· 20 
6.3.3 PS 校准方法 ··············································································································································· 20 
7 如何抓取 Sensor Log ··············································································································································· 21 
8 案例分析 ································································································································································· 25 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
8.1 ALPS08300249 平板 8 字校准后，地磁数据与机械指南针对比相差大于 5 ···················································· 25 
附件一 附加条款 ····························································································································································· 26 
 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
1 概述 
1.1 目的 
本文档主要介绍 MT8676 Sensorhub 相关问题的调试方法，包括 SCP，Kernel 和 Sensor HAL 三部分在出现问题时的
debug 手段，以及在 Sensor 校准时的相关注意事项。 
由于 Sensor 涉及到 HAL 层，Kernel 层以及 SCP 层，当 APK 获取 Sensor 数据失败时，通常需要从以上三个方向查找
原因. 
结合以往的 debug 经验：SCP 层出错的概率高于 HAL 层，HAL 层出错的概率高于 Kernel 层。 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
2 缩略词 
2.1 缩略词 
表 2-1. 缩略词 
缩略词 解释 
MSBPD MediaTek Sensor Boost Path Driver; a driver that runs in Linux using MSBP API 
MSBPKI MediaTek Sensor Boost Path Kernel space Interface; support API for kernel space 
MSHBP MediaTek Sensor Hbu Broadcast Path; the architecture implemented in Sensor Hub we 
execute applications or drivers 
MSHBPA MediaTek Sensor Hbu Broadcast Path; an application or driver that runs within MSHBP 
using MSHBP API 
MUSA MediaTek Universal Sensor Architecture; the common concept including MSBP and MSHBP 
 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
3 VTS 测试失败 
 
 
如果您的问题是 VTS 测试失败，请参考以上述流程图先自行检查，如果确实无法解决，请寻求 MTK 协助，并且附
上您 VTS 测试结果，以便我们协助分析。 
           导出 VTS 测试 log 
选择 host_log 
 
                      找出报错的 Senor 类型 
 
参考 APK 无法获取 Sensor 数据的解法 
确认当前 project 是否支持该 Sensor 
不支持 
取消 VTS 对该 Sensor 的测试 
在 ProjectConfig.mk 中将该 Sensor 配
置为 no 
例如：
 
支持 
寻求 MTK 协助 
仍然无解 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
4 APK 无法获取 Sensor 数据 
4.1 SCP 层 Sensor 异常 Debug 
4.1.1 检查 SCP 是否正常启动 
Sensor 在 probe 阶段会通过 IPI 与 SCP 通信，如果 SCP 启动异常会有如下 log： 
 
使用cat /sys/class/misc/scp/scp_A_get_last_log 
如果 SCP 启动正常，能看到完整的 SCP log 
部分截图如下： 
 
 
4.1.2 检查 Sensor Device 是否初始化成功 
1. 由于 SPI/I2C 通信引起的 Sensor 初始化失败 
查看cat /sys/class/misc/scp/scp_A_get_last_log  
 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
例如： 
 
 
如果 log 中有出现 SPI/I2C error，首先请确认: 
device 是否有挂载，I2C/SPI channel 以及 GPIO mode 配置是否正确 
 
I2C error 请参考：I2C Customer Support SOP  
SPI error 请参考：SPI Customer Support SOP 
 
2. 由于 IPI 通信导致的 error 
如果 AP 或者 SCP log 中出现 IPI timeout 字样 
检查 AP 和 SCP 端 IPI_SENSOR 注册的 ID 是否一致 
 
AP: drivers/misc/mediatek/scp/include/scp.h 
         
SCP: vendor/mediatek/proprietary/tinysys/scp/drivers/project/ipi_legacy_wrap.h 
         
4.1.3 DVFS 导致 Sensor 异常 
1. DVFS 导致 Sensor 休眠 
现象： 
从 log 看，Sensor 初始化正常 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
Sensor 获取数据失败且 SCP 无 log 印出 
 
2. DVFS 降低 CPU 工作频率 
现象： 
Sensor 通信正常，但获取数据速度比较慢（约十几秒获取一包数据）  
 
针对上述两种现象的解法: 
先临时 Disable DVFS 功能后测试，如果以上问题仍然存在，请寻求 MTK 帮助 
 
Disable DVFS 方法： 
AP: drivers/misc/mediatek/scp/include/scp_feature_define.h 
 
设置 SCP_DVFS_INIT_ENABLE     (0) 
 
 
SCP: vendor/mediatek/proprietary/tinysys/scp/project/platform/platform.mk 
设置CFG_VCORE_DVFS_SUPPORT = no 
 
 
注：SCP 和 AP enable/disable DVFS 需要保持同步 
 
4.2 Kernel 层 Sensor 异常 Debug 
4.2.1 Dump Sensor List 
首先需要看一下 Sensor List，来确认是否是 AP 侧 Kernel 中出现的异常： 
理论上，如果 SCP 端 Sensor 工作正常，Dump Sensor List 是可以看到当前有哪些 Sensor 的： 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
 
 
例如，在如上 SCP log 中，光感 ltr308 工作异常，ACC 工作正常，那我们在 AP 端 Dump Sensor List 是可以看到 ACC 
Sensor 的。 
 
 
如果 SCP 端 Sensor 工作正常，在 AP 端 Dump Sensor List 却没有看到该 Sensor，那 AP 端 Sensor Flow 可能会有异
常。 
4.2.2 Kernel 端异常排查 
Kernel 端 Sensor Flow 一般不会改动，出错的概率比较低，一般 Kernel 端出错，大多数都是由于配置错误引起，主
要有两个方面： 
 
1. 检查 Config 文件中 Sensor 架构是否正确 
目前常用的架构有 1.0 和 2.0，需要和 device 目录下 ProjectConfig.mk 保持一致 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
 
 
2. 检查 Config 文件中 Sensor 配置是否与料搭配 
例如，光感的料有 ltr308/ltr559/ltr578 等多种： 
 
 
务必要根据 Sensor 的选料配置好 Config 文件： 
 
 
4.2.3 系统 Suspend 之后，Resume 时出现 I2C Error 
部分供应商的 vendor driver 加入了 suspend/resume 接口。在 suspend 时会 disable driver 以达到省电目的。 
 
但该逻辑和上层代码有一定冲突，resume 时由于上层的 polling 定时器未关，可能会造成在器件驱动的 resume 执
行到之前就触发了 polling data 从而引起异常。 
解决方法是将 suspend/resume 的接口移动到上层代码中，避免出现不同步的问题。 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
4.3 HAL 层 Sensor 异常排查 
4.3.1 HAL 层文件检查 
Sensor HAL 的正常工作依赖于平台里的以下文件： 
• HIDL Interface: 
/system/lib64/android.hardware.sensors@1.0.so 
/system/lib64/android.hardware.sensors@2.0.so 
/system/lib64/android.hardware.sensors@2.1.so 
 
• Multi-HAL 
/vendor/bin/hw/android.hardware.sensors@2.0-serivce-mediatek 
/vendor/etc/init/android.hardware.sensors@2.0-serivce-mediatek.rc 
/vendor/lib64/android.hardware.sensors@2.X-subhal-mediatek.so 
 
• HAL 
/vendor/lib64/hw/sensors.$(TARGET_BOARD_PLATFORM).so 
/vendor/etc/init/hw/init_sensor_2_0.rc 
 
• Hfmanager 
/vendor/lib64/libhfmanager.so 
 
如果 AP 端 Dump Sensor List 正常，可以排查以上文件是否存在来确认 HAL 层是否出现异常。如果发现有文件缺
失，请查看 ProjectConfig.mk 中 MTK_SENSOR_SUPPORT 是否打开，若确认打开却仍然缺少文件，请寻求 MTK 协
助。 
4.3.2 Sensor HAL 上报数据频率异常 
首先检查 SCP log，查看 transceiver 是否打出正确的 delay 和 latency 
 
 
如果能打出正确的 delay 和 latency，请检查对应 Sensor Driver 中的 odr 值，有些 Sensor 的频率是根据上层下来的
取样间隔与自身支持的 odr 结合判断频率的。 
 
如果 delay 和 latency 不正常，请寻求 MTK 协助。 
 
如果是多 OS 系统，请在 Host OS 上使用工具测试，如果在 Host OS 上测试正常，但是在 Guest OS 上不正常，说明
是虚拟化问题，请寻找 MTK 协助。如果在 Host OS 上也不正常，则按照前面的方法排查。 
 
 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
5 Sensor 校准失败 
Sensor 在执行校准的时候，如果最后的返回值不是 0，则表示校准失败 
注：校准方法请参考本文 6.1 节。 
 
 
 
校准失败主要都是因为精度不足或者零漂过大引起。 
 
常用的解法有以下两种： 
1. 咨询 vendor，调整 Sensor 采集的精度 
2. 增大 Sensor 校准的阈值 
 
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
Confidential B 
MT8676 Android Sensor Issue 
Debug SOP 
6 Sensor Debug Tools 介绍 
6.1 Sensor Debug APK 
环境需求：Android 平台 
安装方法：adb install GameCube_v3.1.apk 
 
 
安装成功后，可以在屏幕看到如下图标： 
 
debug 方法： 
1. 打开通过 adb 安装好的 APK，界面如下： 
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
MT8676 Android Sensor Issue 
Debug SOP 
 
 
2. 以 ACC 和 ALPS 为例 
测试 ACC：选择 Accelerometer –> Bouncing Ball 移动板子，蓝色的球会跳动 
 
测试 ALS/PS：选择 ALS/PS –> Curve Chart   左上角会有光感的数值，遮挡光感数值会变小 
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
MT8676 Android Sensor Issue 
Debug SOP 
 
6.2 测试工具 high_freq_sensor_tool 
环境需求：Android 平台/Yocto 平台 
6.2.1 基于 high_freq_sensor_tool 测试 Sensor 是否正常 
1. 如果平台没有自带 high_freq_sensor_tool，需要通过 adb 将 high_freq_sensor_tool push 到平台 
 
 
 
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
MT8676 Android Sensor Issue 
Debug SOP 
 
2. high_freq_sensor_tool 的使用方法 
指令： 
./high_freq_sensor_tool -c   para1, para2,  para3, para4 
 
para1→sensorType  
1: acc                2: mag                3: orientation      4: gyro 
5: light              6: baro                7: temperature    8: proximity 
9: gravity          10: linear_accelerate  
 
para2→action 
0: disable…1: enable…2: flush…3: cali…4: config_cali…5: selftest… 6: rawdata 
 
para3→delay  
采样周期频率（ns）， 
比如填 80000000  对应的 rate= 12800 = 1024000000000/80000000 即 12.8hz 
 
para4→latency  
一般填 0. 
例如： 
 
 
6.3 基于 high_freq_sensor_tool 做 Sensor 校准 
6.3.1 ACC 校准方法 
1. 在 window 终端，使用 high_freq_sensor_tool enable acc （para2 = 1） 
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
MT8676 Android Sensor Issue 
Debug SOP 
 
 
2. 在 Windows 再打开一个终端，使用 high_freq_sensor_tool 校准 （para2 = 3） 
 
 
3. 检查校准结果 
校准成功后，校准结果会保存在 JSON 文件： 
 
 
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
MT8676 Android Sensor Issue 
Debug SOP 
6.3.2 GYRO 校准方法 (与 ACC 相同) 
6.3.3 PS 校准方法 
1. 在 window 终端，使用 high_freq_sensor_tool 直接校准 （para2 = 3） 
 
 
2. type “y” 计算最大值与最小值 
 
 
 
 
 
3. 检查校准结果 
 
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
MT8676 Android Sensor Issue 
Debug SOP 
7 如何抓取 Sensor Log 
如何导出 Sensor 相关的 log 
1. 在屏幕打开 DebugLoggerUI 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
MT8676 Android Sensor Issue 
Debug SOP 
 
打开后界面如下： 
 
 
2. 点击启动按钮 
启动后，软件会将缓冲区的 log 保存到 txt 文件（包括开机启动的 log） 
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
MT8676 Android Sensor Issue 
Debug SOP 
 
 
3. log 的导出 
为了确保存错足够的 log，建议保存 40s 以上的 log，再点击停止按钮 
导出 log 的指令： 
adb pull /data/debuglogger 
 
4. 关键 log 信息： 
查看 SCP 的启动 log，检查各个 Sensor 是否有成功 probe 起来： 
 
如图中 smi230driver 的启动 log. 
 
设置采样频率，上报频率等： 
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
MT8676 Android Sensor Issue 
Debug SOP 
如图中，为 enable 加速度计，采样间隔为 20000000ns，上报间隔为 0. 
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
MT8676 Android Sensor Issue 
Debug SOP 
8 案例分析 
8.1 ALPS08300249 平板 8 字校准后，地磁数据与机械指南针对比相差大于 5 
本体客户反馈部分机器磁感即使经过校准，指南针也会有 90 度的方向偏差。 
90 度方向偏差首先要考虑改动 SCP 配置的 direction。在驱动中会读取 direction 并将实际的数据进行 remap. 
若无特殊情况，贴在 PCB（对于屏幕方向）正面的器件其方向应当为 0 1 2 3 其中的一个，贴在背面的应为 4 5 6 7
其中的一个。可以查看源码确认 direction 对 remap 的影响。 
本题实际上属于例外情况。客户产品特殊，同一份 load 支持了多种 PCB，因此 bring up 时就联合 vendor 开发了客
制化特性，在 Kernel 侧读取 board ID，并下发特殊指令重置底层的 direction。 
由于 OEM 换人，升级 Kernel 版本时客户方信息不同步导致了这个问题。 
在正常排查未发现问题时，需要考虑是否存在客制化因素。  
 
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
MT8676 Android Sensor Issue 
Debug SOP 
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
# SRC0169 MT8676_Android_SPI_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_SPI_User_Manual_V1.1.pdf

SHA-256：40192730210a5820491d465b71a4cdcf43299eacee893fb5fef67f14bbb988b3

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0169.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
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
MT8676 Android SPI 
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
 FIFO 和 DMA 模式 ······································································································································ 13 
 支持多个设备 ············································································································································ 13 
 测试和调试 ················································································································································ 14 
1.4 常见问题/故障排查 ·············································································································································· 14 
 SPI 问题调试方法 ······································································································································· 14 
 dts 配置 ······················································································································································ 14 
 确认 GPIO 模式 ·········································································································································· 14 
 测量波形 ···················································································································································· 15 
 如何打印 SPI 寄存器信息 ·························································································································· 15 
 寻求 MTK 帮助 ··········································································································································· 16 
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
附件一 附加条款 ····························································································································································· 17 
 
 
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
MT8676 Android SPI 
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
MT8676 Android SPI 
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
MT8676 Android SPI 
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
MT8676 Android SPI 
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
SPI：结构体 spi_device 的指针 成功返回 0，否则返回错
误码 Message ：结构体 spi_message 的指针 
 
1.2.4.2 spi_async 
原型 参数 返回值 
int spi_async（struct 
spi_device *spi, struct 
spi_message *message） 
SPI：结构体 spi_device 的指针 成功返回 0，否则返回错
误码 Message ：结构体 spi_message 的指针 
 
1.2.4.3 spi_write_then_read 
此例程的参数始终使用小型缓冲区进行复制，不应将其用于超过 32 个字节。性能敏感型或批量传输代码应改为使
用带有 dma 安全缓冲区的 spi_{async，sync}（） 调用。 
原型 参数 返回值 
int spi_write_then_read
（struct spi_device *spi，
const void *txbuf, unsigned 
SPI：结构体 spi_device 的指针 
成功返回 0，否则返回错
误码 
txbuf：要写入的数据 
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
MT8676 Android SPI 
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
MT8676 Android SPI 
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
MT8676 Android SPI 
User Manual 
Confidential B 
  reg = <0>; 
  spi-max-frequency = <1000000>; 
                }; 
      }; 
  
 节点配置 
设备树中 SPI 节点默认是”disabled”状态：status = "disabled"： 
spi: spi@xxxxxxxx { 
   compatible = "mediatek,mtxxxx-spi"; 
   mediatek,pad-select = <0>; 
   ...... 
   ...... 
   status = "disabled";//默认关闭 
  }; 
 
使用时，在对应 project dts 中进行配置：status = "okay"： 
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
MT8676 Android SPI 
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
 FIFO 和 DMA 模式 
SPI 控制器支持 DMA 模式和 FIFO 模式传输数据。控制器通过传输数据长度自动选择。FIFO 模式的长度小于或等于
32 字节，DMA 模式的长度 大于 32 字节。 
 
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
 测试和调试 
您可以按照上面介绍的步骤配置 SPI 后验证 数据传输功能是否正常，例如验证 SPI 总线 0： 
将 SPI_MOSI 连接到硬件平台上的 SPI_MISO, 将spi-mt65xx-dev.c 作设备驱动。 
 
输入下列测试命令： 
echo -w len=32 > /sys/ bus/spi/devices/spixxx/spi 
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
MT8676 Android SPI 
User Manual 
Confidential B 
要输入绝对路径 
e.g., 
# cat /sys/devices/platform/soc/1000b000.pinctrl/mt_gpio 
PIN: [MODE] [DIR] [DOUT] [DIN] [PULL_EN] [PULL_SEL] [IES] [SMT] [DRIVE] ( [R1] [R0] ) 
0: 0 0 0 0 1 0 1 0 0 
1: 0 0 0 0 1 0 1 0 0 
2: 0 1 1 1 1 0 1 0 0 
3: 6 0 0 0 1 0 1 0 0 
 
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
MT8676 Android SPI 
User Manual 
Confidential B 
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

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Android SPI 
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
# SRC0170 MT8676_Android_Suspend_Resume_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Suspend_Resume_User_Manual_V1.0.pdf

SHA-256：f22832cfa268b21b6d9fe1f9e546bf6b8ef960f18fa9c7b52aaab37162c6acaa

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0170.html)

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
MT8676 Android Suspend and Resume 
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
1.4.2 如何确认唤醒源 ·········································································································································· 7 
1.4.3 唤醒源梳理 ·················································································································································· 8 
1.4.4 不能休眠问题如何分析 ······························································································································· 9 
1.4.5 如何分析休眠模式下功耗大的问题 ········································································································· 10 
附件一 附加条款 ···························································································································································· 11 
 
 
图片目录 
图 1-1. Android Suspend/Resume 流程 ····································································································································· 4 
图 1-2. Android Suspend/Resume 源代码 ································································································································· 5 
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
MT8676 Android Suspend and Resume 
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
• DRAM 自刷新 
• PMIC 进入低功耗模式 
• VCORE off 
• SPM run 
• 等待硬件唤醒事件 
 
1.2 架构/流程概览 
 Android Suspend/Resume 流程 
Android 系统 Suspend 主要分为两个阶段，第一阶段是灭屏，即关闭显示，进入浅睡眠。系统进入浅睡眠后如果没
有 wakelock，就会触发 Kernel Suspend 流程。 Resume 过程相反。参考图 1-1： 
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
 
图 1-1. Android Suspend/Resume 流程 
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
对应的源代码如下: 
  
图 1-2. Android Suspend/Resume 源代码 
 
主要的流程说明: 
 
1. Sleep mSleepTime: 初始值为 100ms，会随着 Suspend 执行成功与否而变更。 
2. 当读取/sys/power/wakeup_count 值时，如果此时底层有 activewakeup source，读取操作将会在 Kernel 中被
阻塞。 
3. 直到没有 active wakeup source 时，会返回 wakeup_count。 
4. 写回wakeup_count，如果写回成功则继续执行。 
5. 将mem 写入/sys/power/state 后，系统将进入 Kernel Suspend 流程。如果 Suspend 成功，程序将在该行停
留，等待 Kernel Resume 继续执行。如果 Suspend 失败，则mSleepTime 将会加倍，并重新循环尝试
Suspend。 
 
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
 Kernel Suspend/Resume 流程 
关于 Kernel Suspend/Resume 的流程 ，可参考图 1-3： 
 
 
图 1-3. Kernel Suspend/Resume 流程 
 
上层将mem 写入/sys/power/state，触发 Kernel Suspend 流程： 
 
1. 系统首先 freeze process，先冻结用户空间进程（userspace process），接着冻结内核线程（kernel thread）。
如果这一步发现有 wakelock，则会中止 Suspend 流程。若冻结操作成功，则 Suspend 过程将继续进行。 
2. 在成功冻结进程之后，系统会开始运行 device suspend flow。按照执行顺序分别调用 device 注册的
prepare/suspend/suspend_late callback，完成各个 device driver 在休眠阶段需要做的准备工作。 
3. 进入s2idle_enter(),  s2idle_state = S2IDLE_STATE_ENTER：所有 CPU 进入 idle loop。 
4. 最后进入TF-A  psci_cpu_suspend。 
5. 关闭不使用的硬件，整个系统进入低功耗休眠模式。 
 
进入休眠模式之后，如果有唤醒源唤醒请求，系统会被唤醒，进入 Resume 流程，Resume 过程与 Suspend 相反。 
 
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
1.3 配置/客制化指南 
由于 Suspend/Resume 流程大部分是 Android 和 Kernel 的原生流程，因此不太需要客制化的设定。 
 
1.4 常见问题/故障排除 
 如何判定系统休眠成功 
屏幕熄灭可能仅表示系统进入浅睡眠，这并不代表系统已经成功进入休眠状态。 
判定系统是否休眠成功需要查看 Kernel 日志，若系统成功进入 Suspend，则 Kernel 日志将不再打印新信息。 
 
如果需要通过日志判断休眠是否成功，需要先下这几行命令打开更多的 调试日志信息： 
adb shell "echo 8 8 8 8 > /proc/sys/kernel/printk" 
adb shell "echo 1 > /sys/module/kernel/parameters/initcall_debug" 
adb shell "echo 1 > /proc/mtprintk" 
 
Kernel 日志中，关键字“PM: Syncing filesystems ...”表示 Kernel 开始走 Suspend 流程。 
Kernel 日志中，关键字“suspend of devices complete after xxx msecs”表示 device suspend 完成。 
Kernel 日志中，关键字“late suspend of devices complete after xxx msecs”表示 device late suspend 完成。 
Kernel 日志中，关键字“noirq suspend of devices complete after xxx msecs”表示 device noirq suspend 完成。 
Kernel 日志中，关键字“suspend enter”表示 suspend 流程结束，系统已进入 suspend 状态。 
 
 如何确认唤醒源 
在 Kernel 日志中搜索关键字“suspend wake up by”，可以查看唤醒源。 
 
如： 
Pwrkey 唤醒 （及其他 EINT 唤醒）： 
[SPM] suspend wake up by R12_EINT_EVENT_B, timer_out = 207308 
 
如果要看具体是由哪个 EINT 唤醒，需要先从日志查看： 
EINT xxx is pending 
 
再通过cat /proc/interrupts 看 xxx 对应的是哪个中断。 
 
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
Modem 相关唤醒： 
[SPM] suspend wake up by R12_CCIF0_EVENT_B, timer_out = 1825253 
 
定时器（PCM_Timer）唤醒： 
[SPM] suspend wake up by  PCM_TIMER, timer_out = 65612 
 
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
Name Control Bit Description Can it be Disabled 
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
• 查看用户空间（userspace）有哪些模块持锁。 
dumpsys power   
如 
Wake Locks: size=1 
  SCREEN_DIM_WAKE_LOCK           'CAR.POWER' ACQ=-5m14s440ms (uid=1000 pid=1467) 
 
Suspend Blockers: size=4 
  PowerManagerService.WakeLocks: ref count=1 
  PowerManagerService.Display: ref count=1 
  PowerManagerService.Broadcasts: ref count=0 
  PowerManagerService.WirelessChargerDetector: ref count=0 
 
Display Power: state=ON 
 
• 查看 Kernel 中有哪些模块持锁。 
cat /sys/kernel/debug/wakeup_sources 
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
 
观察输出结果的第 5 列 active_since，数字不为 0 且一直在增大的就是阻止系统进入待机的 wakelock。 
 
例如图 1-4 中就是 USB 阻止了系统进入待机状态： 
 
 
图 1-4. Wakelock dump 示意图 
 
该命令需要在 UART 下输入，因为插入 USB 本身会阻止系统进入待机状态。 
 
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
MT8676 Android Suspend and Resume 
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

