# SRC0127 MT8668_Yocto_Audio_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Audio_User_Manual_CN_V1.0.pdf

SHA-256：860275ad746124897caf5476cbc858638fa1ae11926c6cb8042c50428ddc3d7d

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0127.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Yocto Audio User Manual 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 程诚 正式版 
 
  
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 音频 ··········································································································································································· 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 名词解释 ······················································································································································ 5 
1.2 架构/流程概述 ························································································································································ 5 
 硬件 ······························································································································································ 5 
 软件 ······························································································································································ 9 
 音频驱动 ···················································································································································· 10 
1.3 配置/客制指南 ······················································································································································ 14 
 内核设备树 ················································································································································ 14 
 音频设备配置 ············································································································································ 16 
1.4 Yocto 播放 ADSP 音频 ··········································································································································· 16 
 软件架构 ···················································································································································· 16 
 测试命令 ···················································································································································· 17 
1.5 常见问题/故障排除 ·············································································································································· 18 
 如何测试音频驱动? ··································································································································· 18 
 如何开启 log? ············································································································································· 19 
 Audio Register 的查看 ································································································································ 19 
 dts/kconfig/ko table/dws 文件的查看 ······································································································· 19 
附件一 附加条款 ····························································································································································· 21 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
图片目录 
图 1-1. 音频系统········································································································································································ 6 
图 1-2. AFE 框图 ········································································································································································ 8 
图 1-3. Yocto 音频系统 ······························································································································································ 9 
图 1-4. 音频驱动架构 ······························································································································································ 10 
图 1-5. 音频驱动组件 ······························································································································································ 11 
图 1-6. 音频设备······································································································································································ 12 
图 1-7. Audio CPU DAI ······························································································································································ 12 
图 1-8. DPCM 设备 ·································································································································································· 13 
图 1-9. MTK Audio DTS ····························································································································································· 15 
图 1-10. 播放音乐的音频路径 ················································································································································ 16 
 
 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
1 音频 
1.1 概述 
 简单介绍 
本章节介绍 MT8668 Audio 的硬件、软件和基本功能。  
 
 名词解释 
表 1-1. 名词解释 
缩写 解释 
I2S Integrated Interchip Sound。是飞利浦在 1986 年定义（1996 年修订）的数字音频传输标准，用于数字
音频数据在器件之间传输。 
PCM Pulse Code Modulation。通过等时间隔（即采样率时钟周期）采样将模拟信号数字化的方法。 PCM 数
字音频接口，传输的即是 PCM 格式数据。  
TDM Time Division Multiplexin。TDM 数字音频接口，可以传输多声道数据。 
AFE Audio Front End 
DAI Digital Audio Interface 
DTS Device Tree Source 
 
1.2 架构/流程概述 
 硬件 
MT8668 的 Audio System 的硬件整体组成如图 1-1 所示： 
 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
 
图 1-1. 音频系统 
 
Audio Hardware 包括对外的硬件接口、AFE_Interconn、AFE_Tinyconn 和 AFE_Memif，以及后端的 Codec 。其中，对
外的硬件接口如下： 
• 1 x TDM32(O) + 1 x TDM32(I) (48K/32b) 
– 1 x TDM 32ch OUT , master/slave, for Main SPK/warning sound/AVAS SPK, TDM OUT: 1/2/4 lanes (share pin) 
– 1 x TDM 32ch IN, master/slave, for microphones and echo reference, TDM32 IN port can share or split clock with 
corresponding TDM32 OUT port, TDM IN: 1/2/4 lanes (share pin) 
– GASRC up to 16ch (TDM slave up to 16ch) 
• 2 x I2S(O) 2ch + 4 x I2S(I) 2ch (192K/32b) 
– 1 x I2S Bi-directional, master, for eCall in/out 
– 1 x I2S Bi-directional, master, for BT voice/ warning sound 
– 1 x I2S IN, master, for AUX IN 
– 1 x I2S IN, master/slave, for AM/FM radio 
 
其接口细节参考图 1-2。 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
 
 
 
图 1-2. AFE 框图 
 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
而内部的 AFE 硬件接口可以归纳为两类： 
• Memory interfaces 
– 即 AFE_memif。这部分相当于 DMA，主要负责将上层应用 Playback 的 PCM 数据搬运到指定的 DL
（downlink） port 输出，或者将 Capture 的 PCM 数据从指定的 UL（uplink） port 捕获后传输给上层应用。 
• Connect interfaces 
– 有两种，分别是 AFE_interconn 和 AFE_tiny_conn。两者的主要区别是支持的数据 bit width 不同，前者最大
只支持 24bit data，而后者可以支持到 32bit。两者的作用是相同的，主要是负责将 Memif 的 DL 或者 UL 和
后端的 I2S/TDM 等硬件接口连接起来，构建一条和外部设备传输数据的 I/O 通路。对 Playback 而言，即是
将 DL 的数据送到指定的 Output port（即 I2S/TDM out 等）输出；反之，对 Capture 而言，将 UL 接口和指
定的 Input port（即 I2S/TDM in 等）连通，捕获外部设备输入的数据。另外，中间的 I/O 通路还可以添加
HW SRC、Gain control 以及 mix 等功能。 
 
 软件 
MT8668 基于 ALSA 接口调用的架构图 1-3 所示： 
 
 
图 1-3. Yocto 音频系统 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
ALSA Lib 模块是 Linux 原生的音频模块。这部分相关的资料可以在网上查询了解，这里就不再赘述。本文档主要是
讲解 MTK 专有的 Audio Driver。 
 
 音频驱动 
Audio Driver 是标准的 ALSA ASoC Architecture： 
• Machine 是指具体的某一款机器，或者开发板。由此可以看出 Machine 几乎是不可复用的，每个 Machine 上的
硬件实现可能都不一样，CPU 不一样，Codec 不一样，音频的输入、输出设备也不一样，Machine 为 CPU、
Codec、输入输出设备提供了一个载体。MT8668 公板就是一个 Machine，客户定制的开发板也是一个
Machine。 
• Platform 一般是指某一个 SoC 平台，比如 MT8668。与音频相关的通常包含该 SoC 中的时钟、DMA、I2S、PCM
等等，只要指定了 SoC，那么我们可以认为它会有一个对应的 Platform，它只与 SoC 相关，与 Machine 无关。
上面所讲的 AFE 就属于 Platform。 
• Codec  一般指 I2S/TDM 接口、D/A、A/D、Mixer、PA（功放）等，通常包含多种输入（Mic、Line-in、I2S、
PCM）和多个输出（耳机、喇叭、听筒，Line-out）。Codec 也是可复用的部件，同一个 Codec 可以被不同的
Machine 使用。MT8668 公板对应的 Codec 有 AK7709、ES8311，客户使用的外部 DSP 也属于一种 Codec。 
 
 
图 1-4. 音频驱动架构 
 
对应于上述的三种 components，也有相应的驱动： 
• Machine Driver  负责处理机器特有的一些控件和音频事件（例如，当播放音频时，需要先行打开一个放大
器）；单独的 Platform 和 Codec 驱动是不能工作的，它必须由 Machine 驱动把它们结合在一起才能完成整个设
备的音频处理工作。 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
• Platform Driver  它包含了该 SoC 平台的音频 DMA 和音频接口的配置和控制（I2S，PCM，等）；它也不能包含
任何与板子或机器相关的代码。 
• Codec Driver   ASoC 中的一个重要设计原则就是要求 Codec 驱动是平台无关的，它包含了一些音频的控件
（Controls），音频接口，DAMP（动态音频电源管理）的定义和某些 Codec IO 功能。为了保证硬件无关性，
任何特定于平台和机器的代码都要移到 Platform 和 Machine 驱动中。 
MT8668 平台对应的 Audio Driver 模块如下： 
 
图 1-5. 音频驱动组件 
 
Audio Driver 的这些组件在系统启动后，Kernel 初始化的过程中相继完成初始化并生成相应的驱动设备。系统启动
完成后，可以在 adb shell 的 console 界面查看相应的设备信息： 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
 
图 1-6. 音频设备 
 
按照 DPCM 架构，ALSA Driver 将 Memory Interfaces 虚拟成 Front End（FE）设备，将对外的 Hardware Interfaces 虚
拟成 Back End（BE）设备。FE 和 BE 通过 Connection Interfaces 串接起来，形成一条 Audio path，即可用来进行
Auido 数据的传输。因为 FE 和 BE 都是 MT8668 SoC 里的 Audio Interfaces，所以，ALSA Driver 将它们统一作为 CPU 
DAI 来看待。而更后端的 PMIC 或者外部 DSP 就是 Codec DAI。 
 
 
图 1-7. Audio CPU DAI 
 
ALSA Driver 会构建一系列的 Control/Mixer APIs 来控制 DAI 并打通 Audio Path。而用来控制这些 APIs 的设备即是
Control 设备。同样，用来控制具体的 FE 并读写数据的设备节点即是 PCM 设备。 
图 1-8 是 MT8668 平台的 Control 设备节点和 PCM 设备节点： 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
 
图 1-8. DPCM 设备 
 
同时上图也显示了 PCM 节点和 AFE 的对应关系。 
 
在播放音乐等 playback 的场景下，应用层就是通过往 Playback 的 PCM 节点写入 Audio 数据，传送到后端的喇叭或
者功放来放出声音；反之，在录音等 Capture 的场景下，应用层从 Capture 的 PCM 节点读取 Audio 数据，获得从外
部 MIC 等设备传入的 Audio 数据。 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
1.3 配置/客制指南 
 内核设备树 
ALSA Driver 的配置主要是在 DTS 里，里面包含 Audio 相关的 Machine/Platform/Codec 等 Driver 的设备节点配置，包
括 Register address、memory address、Interrupt number 等。 
 
MT8668 的 DTS 配置文件位于 
src/kernel/linux/v6.12_mt8668/co_device_module/arch/arm64/boot/dts/mediatek/。主要的配置文件
如下： 
mt6881.dts 
auto8668p1_64.dts 
相应的 Machine/Platform/Codec 的配置如下： 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
 
 
图 1-9. MTK Audio DTS 
 
当 Kernel 初始化时，Audio Driver 的各个组件可以根据 DTS 里的配置，得到相应的 register address、memory 
address、clock configuration、GPIO setting 等参数。在 Audio Driver 使用的过程中，就可以使用这些参数完成 Audio 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
Hardware 的设置，打通 Audio Path。所以，客户平台在开发时，也要根据实际硬件的情况定制相对应的 DTS 配
置。 
 
 音频设备配置 
Audio APP 打开某一个 PCM 设备节点进行读写操作之前，需要先进行一些 mixer/control 的设置来打开 Audio Path，
或者使能一些 Audio Hardware Interfaces。 
下面以公版 MT8668 播放 Music 为例，通过 DL46 节点，打通 DL46→I2SOUT2→ES8311→Speaker 这条 Audio Path： 
 
 
图 1-10. 播放音乐的音频路径 
 
设定的配置 kcontrol 如下： 
amixer cset name='I2S_OUT2_Mux' 'Dummy_Widget' //实际接了es8311 codec 就不需要此dummy widget 的
kcontrol  
amixer cset name='I2SOUT2_CH1 DL46_CH1' 1 
amixer cset name='I2SOUT2_CH2 DL46_CH2' 1 
aplay -Dhw:0,11 -r48000 -c2 -fS16_LE /data/2ch.wav 
 
1.4 Yocto 播放 ADSP 音频 
 软件架构 
前面介绍了基于 alsa lib 的软件架构，为了在 Yocto 侧也能播放 ADSP 节点，在用户层新增了 ALSA plugin ，MAS，
MTK Audio Hal 等模块，如下： 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
 
 
从 Ycoto 侧播放 ADSP，不需要走 Hypervisor 的虚拟化。 
 
 
 
 测试命令 
为保证 APP 像正常调用 ALSA lib 一样方便，Yocto ADSP 播放提供 alsa 节点，有 main/sub0/direct 等节点 ，节点配置
见 alsa config 文件，其中 main 和 sub0 是 mixer 节点，可以允许多路 app 混音播放，direct 是独立播放节点。 
举例说明： 
• Aplay 播放 
//混音播放 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
aplay -D main /data/music.wav 
aplay -D sub0 /data/music.wav 
 //独立进程播放 
aplay -D direct0 /data/music.wav 
aplay -D direct1 /data/music.wav 
 
• Gstreamer 命令播放 
gst-launch-1.0 playbin audio-sink="alsasink device=main" uri=file:///data/test.wav 
or 
gst-play-1.0 /data/music.wav --audiosink="alsasinkdevice=main"  
 
1.5 常见问题/故障排除 
 如何测试音频驱动? 
当 Audio Driver 已经 ready 的时候，可以使用 Yocto 自带的 aplay/arecord/amixer 来进行手动测试。其中，amixer 用
来将 Audio Path 连通，aplay 用于播放声音，arecord 用来从 MIC 录音。以 i2s1 的 loopback 为例，命令行如下： 
adb -d push E:\MT8668\test\testwav\2ch.wav data/ 
adb shell 
amixer cset name='I2SOUT1_CH1 DL1_CH1' 1 
amixer cset name='I2SOUT1_CH2 DL1_CH2' 1 
amixer cset name='I2S_OUT1_Mux' 'Dummy_Widget' 
aplay -Dhw:0,1 -r48000 -c2 -fS16_LE /data/2ch.wav 
 
amixer cset name='I2S_IN1_Mux' 'Dummy_Widget' 
amixer cset name='UL1_CH1 I2SIN1_CH1' 1 
amixer cset name='UL1_CH2 I2SIN1_CH2' 1 
amixer cset name='I2SIN1_LPBK' 1  
arecord -Dhw:0,15 -r48000 -c2 -fS16_LE /data/i2s1.wav 
adb -d pull /data/i2s1.wav 
 
Yocto 侧单独提供两个 AFE 节点，一个用于播放，另一个用于录音，测试命令如下： 
• AFE 节点播放 DL46_I2SOUT6(CH9/CH10)  
#audio path: DL46--->I2SOUT6(CH9/CH10)---->AK7709 
amixer cset name='I2S_OUT6_Mux' 'Dummy_Widget' 
amixer cset name='I2SOUT6_CH9 DL46_CH1' 1 
amixer cset name='I2SOUT6_CH10 DL46_CH2' 1 
aplay -Dhw:0,11 -r48000 -c2 -fS16_LE /data/2ch.wav 
 
•  AFE 节点录音 I2SIN6(CH1/CH2)-->UL7 
#audio path: AK7709--->I2SIN6(CH1/CH2)---->UL7 
amixer cset name='I2S_IN6_Mux' 'Dummy_Widget' 
amixer cset name='UL7_CH1 I2SIN6_CH1' 1 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
amixer cset name='UL7_CH2 I2SIN6_CH2' 1 
arecord -Dhw:0,21 -r48000 -c2 -fS16_LE /data/ul7.wav 
 
如果没有接入 AK7709 codec ，可以使用 sinetone 打入 I2SIN6_CH1/CH2 来模拟录音。 
echo write_reg,0x20,0x04F01F01 > /sys/kernel/debug/mtksocaudio 
echo write_reg,0x24,0xa053 > /sys/kernel/debug/mtksocaudio 
 
 如何开启 log? 
在开发或者解决 Bug 的时候，需要打开并查看 Audio Driver 的 log，来定位问题点。 
可以用 cat /sys/kernel/debug/dynamic_debug/control 查看哪些文件可以打开 pr debug ，再使用 echo p 的 command 打
开，例如： 
echo 'file mtk-afe-fe-dai.c +p' > /sys/kernel/debug/dynamic_debug/control 
 
 Audio Register 的查看 
查看所有 Audio AFE register 的值，可以使用命令： 
cat /sys/kernel/debug/mtksocaudio 
 
例如像查看 ETDMOUT6 的 register，可以加上 grep： 
cat /sys/kernel/debug/mtksocaudio | grep ETDM_OUT6 
 
 
 
 dts/kconfig/ko table/dws 文件的查看 
Yocto 侧若有改动，需改动到正确的路径文件，总结如下： 
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
MT8668 Yocto Audio 
User Manual 
Confidential B 
 
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
MT8668 Yocto Audio 
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
# SRC0128 MT8668_Yocto_AVM_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_AVM_User_Manual_CN_V1.0.pdf

SHA-256：d5c445e4df99aae84f4b5132eceb11b9a771cd80f442ab18495a19dce5f602a3

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0128.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
MT8668 Yocto AVM User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
2 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
 
版本：  1.0 
出版日期：  2026-01-28 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
3 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
版本历史 
版本 日期 作者 描述 
1.0 2026-01-28 郑中华 正式版 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
4 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
目录 
版本历史 ········································································································ 3 
目录  ············································································································ 4 
1 介绍 ········································································································ 6 
1.1 功能 ··············································································································································································· 7 
1.2 缩略词 ········································································································································································ 12 
2 系统概述 ·································································································· 13 
2.1 标定流量 ···································································································································································· 16 
2.2 运行时系统 ································································································································································ 17 
2.3 生命周期 ···································································································································································· 20 
2.4 显示管道 ···································································································································································· 22 
3 性能概览 ·································································································· 27 
3.1 内存占用 ···································································································································································· 33 
3.2 项目配置 ···································································································································································· 35 
4 开发套件 ·································································································· 37 
4.1 AVM SDK ································································································································································· 38 
5 相机 ······································································································· 40 
5.1 安装车轮轨迹线 ························································································································································ 43 
6 标定过程 ·································································································· 48 
6.1 预备知识 ···································································································································································· 51 
6.2 相机标定 ···································································································································································· 52 
6.3 内参生成 ···································································································································································· 60 
6.4 AVM 标定 ································································································································································· 71 
6.5 在线标定 ·································································································································································· 100 
7 标定步骤 ································································································ 104 
8 演示应用程序···························································································· 107 
8.1 AVM 演示 ······························································································································································· 107 
8.2 AVMCalarion 系统 ··············································································································································· 114 
8.3 AVM 客户端实用程序··········································································································································· 124 
9 模块 ····································································································· 138 
9.1 AVM 守护进程 ······················································································································································· 138 
9.2 点检测库 ·································································································································································· 144 
9.3 标定库 ······································································································································································ 151 
10 演示客制化 ······························································································ 161 
10.1 布局 ·········································································································································································· 162 
10.2 3D 模型···································································································································································· 185 
10.3 3D 相机···································································································································································· 210 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
5 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
11 源代码 ·································································································· 227 
12 调试 AVM ······························································································ 229 
13 版本 ····································································································· 231 
附件一 附加条款 ····························································································· 233 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
6 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
1 介绍 
2D/3D AVM 开发人员车轮轨迹线 
 
 
MediaTek Around-View Monitor (AVM) 将最先进的环视功能集成到车载信息娱乐系统中。此整体解决方案提
供易于使用的calibration toolchain、robust factory workflow和high-quality SDK。 
 
您将在此在线文档中了解以下主题： 
• AVM 主要功能 
• AVM 实际性能 
• AVM SDK 里面有什么 
• AVM 软件架构 
• AVM 标定过程 
• AVM 演示客制化 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
7 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
1.1 功能 
端到端标定工具链 
• 相机标定工具（PC）用于计算相机的固有参数 
• AVM 标定工具（PC）用于计算 AVM 针迹参数 
• 在线标定工具（Android）用于标定生产线上的每辆车 
 
 
丰富的观看模式 
• 流行的 AVM 视图模式的参考设计，包括： 
– 经过失真校正的相机视图 
– 鸟瞰图 
– 停车辅助系统的放大顶视图 
– 带有 3D 汽车模块和动画虚拟摄像机的 3D 视图模式 
• 灵活添加自己的视图模式 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
8 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
高性能高品质拼接算法 
• 实时算法将四幅源图像拼接成无缝拼接的鸟瞰图图像 
 
 
 
最先进的 3D 引擎 
• 功能丰富的 3D 引擎，具有定制功能 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
9 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
10 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
全面的 SDK 和演示应用程序 
• 提供具有高度定制灵活性的模块化库 
• 提供演示应用程序作为参考代码，以加速开发过程 
 
 
可定制车轮轨迹线 
• 模拟方向盘输入角度来重现或模拟车辆的行驶轨迹 
• 可定制的车轮轨迹线样式，具有颜色/纹理和 alpha 混合 
• 抗锯齿支持，带来更好的视觉质量 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
11 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
参考在线标定流程 
• 快速且强大的在线标定流程，适用于生产线上每辆车的标定 
• 熟练工人可在 2 分钟内完成标定过程 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
12 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
1.2 缩略词 
缩略词 全称 释义 
ADB Android Debugging Bridge 是一个多功能命令行工具 
AVM Around View Monitor 全景监控器 
BEV Bird Eye View 鸟瞰图 
EVS Enhanced Voice Services 增强语音服务 
FPS Frame-per-second 每秒帧数 
HAL Hardware Abstraction Layer 硬件抽象层 
OVL MediaTek Display Overlay Unit 叠加 
ROI Region of Interest 感兴趣区域 
SDK Software Development Kit 软件开发包 
 
 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
13 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
2 系统概述 
Around View Monitor (AVM) 系统的核心功能是将来自多个摄像头的输入图像转换为各种视图的无缝图像，为
车辆驾驶员提供帮助。 
 
 
 
为了实现这一点，系统必须获取各种参数，例如： 
• 车辆上安装的每个摄像头的几何布局，通常表示为一系列矩阵，称为摄像头外参 
• 镜头的光学畸变特性，这被称为畸变系数 
• 每个相机的视图投影模型，也称为相机内参 
• 车辆的尺寸，例如轴距、轮距等 
 
然后，AVM 系统使用这些参数将实时摄像机输入转换至车载显示屏以供用户交互。 
 
标定和运行阶段 
从最高层次来看，整个 AVM 功能的开发可以分为两个主要阶段： 
• 标定阶段是获取和计算上述所有必要参数的过程。此阶段涵盖收集摄像头和车辆数据的所有活动。  
• 在运行阶段，车载嵌入式硬件根据标定过程的结果执行计算，将摄像机输入图像变换拼接成各种视图，例如
模拟鸟瞰摄像机或虚拟 3D 摄像机。 
 
这两个阶段的总体工作流程如下所示： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
14 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
标定过程 
在标定阶段，执行标定过程。标定过程可能在不同情况下执行： 
 
• 在系统开发过程中，采用离线标定过程通过一组输入数据确定相机内参和外参。 
• 在工厂生产期间，可能会执行在线标定过程以补偿不同车辆和摄像机之间的细微差异。 
 
然后，标定结果将存储为参数文件，如上图所示。param.bin 和 param_new.bin 文件分别是 PC 标定工具和在线
标定工具生成的参数文件。 
 
离线标定过程在一组 PC 工具上执行。除了 PC 工具外，还提供了在 MT2712 Android 平台上运行的在线标定应
用程序，用于工厂生产场景中的每辆车标定。 
 
运行时系统 
这运行时系统是软件的集合，包括库、服务和示例应用程序，用于支持 AVM 运行时阶段。运行时系统完全在 MT
2712 Android 平台上运行。车辆上路后，运行时系统会根据磁盘上的参数文件 param.bin 和 param_new.bin 
将摄像头图像转换为最终显示输出。运行时系统不会修改或重新计算参数文件。运行时系统采用应用程序服务架
构，如以下章节所述。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
15 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
SDK 架构 
AVM SDK 提供了一组软件工具、库和示例应用程序，以支持标定过程和运行时系统的开发。这些软件可以归类
为应用程序或服务，如下所示： 
 
 
 
应用 
SDK 提供了用于相机标定、AVM 标定以及 Android 内联标定的 PC 工具。 
 
作为标定阶段的一部分，Android AVM 标定应用程序已发布源代码，允许开发人员自定义工厂生产工作流程。开
发人员还可以通过向标定工具提供自定义点检测器算法来自定义 AVM 标定中使用的图案。请参阅标定工作流程
页面以了解这些标定应用程序的概述。 
 
对于运行时阶段，提供了 AVM 演示应用程序作为 MT2712 Android 平台上 AVM 应用程序的参考设计。 
 
在线标定和 AVM Demo 应用程序都是轻量级应用程序，仅包含 UI 按钮和交互逻辑。这些应用程序不控制 AVM 
系统的实际显示。相反，它们将套接字请求发送到底层服务以满足用户请求。 
 
服务 
实际的摄像头和显示管道由 AVM Daemon 服务根据标定过程中生成的标定参数文件进行控制。AVM 守护进程
负责管理硬件资源，例如摄像头和显示硬件。它还管理所需的所有硬件内存缓冲区。大多数图像处理功能（例如  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
16 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
AVM 图像拼接和扭曲算法）都封装在名为 AVM 运行时的库中，但车轮轨迹线除外，它是 AVM 守护进程的一部
分。 
 
有关服务设计的更多信息，请参阅运行时系统页面。 
 
2.1 标定流量 
 
 
标定流程可分为3个阶段： 
 
• 内在标定：我们提供两种方法（手动标定或曲率表转换）来生成内参。在我们的定义中，内参包括鱼眼畸变
系数（k1、k2、k3、k4）和针孔相机模型（cy、cy、fx、fy）。 
 
• 外部标定：我们从目标车辆捕获前/后/左/右图像，并应用 AVM 标定过程将这些图像与标定图案的地面真实
布局进行匹配，以生成标定参数。这些参数是摄像头的 RT 矩阵（旋转和变换）。我们的运行时算法将使用
这些指标将摄像头图像重新投影到 2D AVM 的拼接鸟瞰图像或 3D AVM 的 3D 场景中。 
 
• 在线标定：我们为生产线上的每辆车标定提供参考流程，以减少因摄像头差异和安装公差差异而导致的质量
下降。摄像头差异来自镜头、CMOS 和装配差异，这意味着每台摄像头都需要一组不同的内部参数才能获得
更好的结果。我们先进的标定算法将自动调整每台摄像头的内部和外部参数，并为车辆生成更好的设置。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
17 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
 
 
 
 
 
2.2 运行时系统 
运行时系统设计 
 
 
如概述部分所述，AVM 运行时系统负责获取标定过程生成的参数文件，然后在 Android 平台上执行整个摄像头
到显示器的数据转换。 
要实现的主要目标： 
• 高性能：AVM 运行时必须足够快，以便为车辆驾驶员提供低延迟显示。它还必须为同一平台上的其他任务留
出足够的处理能力。例如，GPS 导航或音乐播放组件可能同时运行。 
 
为了减轻 CPU 核心的负担，运行时系统设计为利用基于 OpenGL 的 GPU 硬件。 
 
应用程序和服务 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
18 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
基于这些概念，AVM 运行时组件分为应用程序和服务。应用程序提供用户界面，例如 Android UI 按钮或命令行
工具。实际的 AVM 功能由名为 AVM Daemon 的服务实现。该服务访问硬件资源，如下面的框图所示。 
 
 
 
应用 
提供了三个演示应用程序： 
• mtkavmclient 是一个原生命令行程序，可让您通过 Android Debug Bridge (ADB) shell 快速测试 AVM 功
能。此程序还可方便地捕获相机图像，这些图像可用作相机标定过程的输入。 
• AVMDemo 和 AVMCalibration 是 Android 演示应用程序，展示了重要的 AVM 功能和内联标定过程。 
 
这些演示应用程序附带源代码，可以作为开发 AVM 应用程序时的示例。 
 
服务 
核心 AVM 功能由原生 Linux 用户空间服务 AVM 守护进程提供。该守护进程使用 OpenGL ES 3 访问 GPU 资源。
它通过域套接字向 AVM 应用程序提供接口。它充当服务器，向 AVM 应用程序提供 AVM 功能。 
 
客户端和服务器的分离使得 AVM 守护进程能够尽早初始化。有关 AVM 守护进程初始化流程的详细说明，请访
问生命周期页面。 
 
标定参数和其他显示布局配置存储在文件系统中，并在初始化期间由守护进程解析。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
19 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
用户输入（例如触摸事件）由 AVM Android 应用程序（例如 AVMDemo）处理。这些应用程序充当 AVM 守护
进程的客户端。服务器和客户端之间的通信通过 Linux 域套接字使用简单协议进行传输。 
该服务由以下模块组成： 
 
 
模块名称 二进制名称和位置 功能 
AVM 守护进程  /system/bin/mtkfastavm 生命周期控制和硬件管道管理 
AVM 车轮轨迹线和图库 /system/lib64/libmtkavmproc.
so 
GPU 初始化和动态车轮轨迹线 
AVM 运行时库  /system/lib64/libmtkavm.so 图像拼接和变换算法实现 
 
在运行时阶段，AVM 服务是执行 mtkfastavm 的单个进程。可执行文件动态链接到图形库 libmtkavmproc.so 
和 AVM 运行时库 libmtkavm.so。 
 
启动流程 
Android 
启动 mtkfastavm 服务有两种方式： 
1. 在 android init 中 fork mtkfastavm 进程。这种方式需修改 android init 的源代码：system/core/init  
2. mtkfastavm 作为 android 服务启动。这种方式需要在 Android.mk 中设置 LOCAL_INIT_RC := mtkfastav
m.rc。在 mtkfastavm.rc 中，mtkfastavm 会在 early-init 信号时启动。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
20 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
2.3 生命周期 
服务生命周期 
运行时系统分为应用程序和服务 AVM 守护进程。本节介绍 AVM 守护进程和应用程序的生命周期以及它们之间
的交互。 
 
AVM 守护进程生命周期 
AVM 守护进程作为 Linux 原生可执行文件，在系统初始化期间初始化并且始终处于活动状态。 
初始化时，守护进程会加载所有标定参数文件和显示布局配置文件，并相应地分配显示和摄像头资源。然后它通
过来自应用程序的套接字命令等待启动显示事件，并且永不终止。 
由于守护进程永不终止，因此初始化完成后它只有 2 个状态： 
 
• 等待：在此状态下，AVM 显示屏被隐藏，摄像头流停止。如果出现以下情况，此状态将转换为查看显示状态：  
– 应用程序发送开始显示命令 
• 视图显示：在此状态下，AVM 显示屏可见，并且摄像机流连续滚动。 
 
活跃显示模式由内部的模式变量决定。客户端应用程序可以更改活跃显示模式。 
• 一个视图中的后置/前置摄像头由倒档状态决定。 
• 如果出现以下情况，此查看模式将转换至等待模式： 
– 客户端发送停止显示命令，或者 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
21 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
– 客户端断开连接且倒档状态未设置。 
 
下图说明了这一点： 
 
 
应用程序守护进程连接 
AVM 守护进程实际上为应用程序提供了两个套接字端口： 
• 应用程序通过命令套接字向守护进程发送命令。应用程序可以通过此套接字控制守护进程的可见性和活动视
图模式。 
• 信息套接字由守护进程提供。应用程序订阅此套接字并接收来自守护进程的事件通知。  
 
这些套接字是独占访问的，因此应用程序必须协作释放这些套接字。在当前的参考设计中，  
• mtkavmclient 实用程序连接到命令套接字，发送命令，然后立即断开连接 
• AVMDemo 和 AVMCalibration 应用程序在前台时连接到命令套接字，并在暂停时断开连接。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
22 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
2.4 显示管道 
AVM 运行时系统的核心是从摄像头到 GPU 再到显示器的数据处理管道。本节介绍 AVM 守护进程中硬件管道的
总体设计以及联发科技 SPM Android 平台中显示路径的配置。 
 
硬件流水线 
AVM 运行时系统涉及多个硬件组件。我们从摄像头到显示器开始列出组件： 
• 需要外部 AHD 桥接 IC 将多个 AHD 摄像头连接到联发科 SPM 平台。 
• CAM HAL（Android 相机硬件抽象层）用于提供相机帧。可配置 EVS 或 HAL 源类型。 
• 联发科技SPM平台中的GPU用于执行实际的图像拼接和扭曲算法。 
• Surface Flinger 是连接到联发科 SPM 平台主显示屏的显示合成模块，可合成 Android 应用程序的 UI 和 A
VM 显示输出。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
23 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
AVM守护进程负责构建硬件数据管道并分配所需的资源。 
 
缓冲区分配和使用 
由于AVM运行系统本质上是一个数据管道，输入输出缓冲区传递的效率成为首要考虑的问题，实现目标是尽量减
少冗余的缓冲区复制和格式转换。 
 
为了最大限度地减少冗余缓冲区复制，所有渲染资源分配均由 AVM 守护进程控制。在初始化期间，AVM 守护进
程通过 libDRM 将所有所需的输入和输出缓冲区分配为 Linux DMABuf。 
 
一旦相机缓冲区准备就绪，守护进程就会通过 EGL KHR_image_base 扩展将 DMABUF 句柄转换为 EGLImage 
纹理句柄。由于相机缓冲区是 YUYV 格式，因此使用扩展 EXT_YUV_target 来防止在格式转换期间进行冗余缓冲
区复制。然后使用 OpenGL API 生成大多数图形元素（例如车轮轨迹线、2D 汽车图像和 3D 汽车模型），并将
其渲染到同一个输出缓冲区上。 
 
然后将输出缓冲区传递给 SurfaceFlinger。 
 
通过利用 DMABUF 框架和 GPU 驱动程序扩展，运行时系统可防止 CPU 不必要地访问缓冲区，从而最大限度地
减少 CPU 负载和内存带宽消耗。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
24 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
硬件管道的设置和控制在 AVM 守护进程中实现。GPU 和 OpenGL 相关的实现主要位于 AVM Runtime 库中。 
 
显示组成 
由于 AVM 屏幕是始终位于顶部的native layer，因此 Android 框架可能会在 AVM 屏幕顶部合成其他 UI 元素，
例如应用程序 UI 组件。AVMCalibration 应用程序就是一个例子，它需要在 AVM 显示屏顶部合成其他 UI 元素，
如下图所示： 
 
 
因此，Surface Flinger 被修改来识别从 AVM Android 应用程序发送的表面。对于那些 Z oreder应该大于 AVM 
本机层（在 AVM 守护进程的输出之上合成）的表面，会分配一组特殊的 Z 顺序值。 
 
Surface Flinger 的修改 
• 找到 frameworks/native/services/surfaceflinger，并将您的 APK 列表添加到其中。 
String8 ActivityWhitelist [WHITE_LIST_LENGTH]= { 
android :: String8（“ com.mediatek.avmcalibration / com.mediatek.avmcalibration.CaptureActivity”）， 
android :: String8（“ com.mediatek.avmcalibration / com.mediatek.avmcalibration.InspectActivity”）， 
android :: String8（“ com.mediatek.avmcalibration / com.mediatek.avmcalibration.VerifyActivity”）， 
android :: String8（“ com.mediatek.avmcalibration / com.mediatek.avmcalibration.CalibrationActivity”）， 
android :: String8（“ com.mediatek.avmcalibration / com.mediatek.avmcalibration.SplashActivity”）， 
android::String8(“com.mediatek.avm/com.mediatek.avm.MainActivity”) 
}; 
bool traverseWhiteList(String8 strName){ 
for（size_t i = 0；i <WHITE_LIST_LENGTH；i ++）{ 
if (strName.find(ActivityWhitelist[i]) == 0) 
return true； 
} 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
25 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
return false； 
} 
 
... 
 
status_t SurfaceFlinger::addClientLayer() 
{ 
 ... 
 /// M: for avm function @ { 
 if(traverseWhiteList(lbc->getName())) { 
  whiteListLayer = lbc; 
 
  if (avmLayer != nullptr) 
   whiteListLayer->setLayer(avmLayer->getZ()+2); 
 
  mCurrentState.layersSortedByZ.add（lbc）； 
  ALOGI("add whitelist layer：%s ",lbc->getName().string()); 
 }else { 
   parent->addChild(lbc); } 
 /// @} 
... 
} 
 
通过这些修改，AVM 系统允许应用程序和系统 UI 与 AVM 守护进程的显示输出正确复合。 
然而，这意味着该系统存在一些局限性： 
• 开发人员必须定义好应用程序的层次顺序和系统UI。 
• 开发人员必须修改 SurfaceFlinger 才能使用不同的 AVM 应用程序包名称。 
 
 
 
 
 
 
 
 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
26 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 27

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
27 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
3 性能概览 
本节概述了 AVM 功能的重要性能指标，包括 CPU/GPU 负载和每秒帧数 (FPS)。 
 
MT86XX 系列 
Part # MT8666 MT8667 
CPU 4x CA73 @ 2.2G 
4x CA53 @ 2.2G 
2x CA75 @ 2.0G 
6x CA55 @ 1.7G 
GPU Mali-G72 MP3 @ 800MHz 
86G FLOPS 
ARM52 2EEMC2 @ 620MHz 
DRAM LPDDR4-1800, 16 bits x 4 ch, Max. 8GB 
Storage eMMC 5.1, uFS 2.1 eMMC 5.1 
Video outp
ut 
DSI 4lane 1080 + DPI 720x2 DSI 2520x1080 
Video input Multi CAM Max. 6 
VPU 1080p60 decoding (H.264/H.265), JPEG deco
der, 1080p30/720p120 encoding (H.264) 
2Kp30 decoding (H.264/H.265), JPEG d
ecoder, 2Kp30 / 720p120 encoding (H.
264/H.265) 
Peripheral USB2.0/OTG, USB3.0/device, 3x UART, 6x SPI 
masters, 6x I2C, GPIOs 
USB2.0/OTG, 2x UART, 6x SPI masters, 
9x I2C, GPIOs 
 
性能指标 
本文包含以下性能指标： 
• FPS：AVM 守护进程将 FPS 统计信息输出到 Android 日志。在内部，AVM 守护进程计算发送到 Surface F
linger 的渲染帧数，并计算 5 秒内的平均值。 
 
• 摄像头到显示屏的延迟：启动过程中，使用 120 FPS 摄像头捕捉 EVB，EVB 旁边放置秒表。延迟的计算方法
是将显示屏上的时间值和秒表上的时间值相减。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 28

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
28 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• CPU 负载：我们给出了整体系统 CPU 负载和 AVM 进程 CPU 负载的测量结果。整体系统负载是在以下条件
下使用 MET 工具测量的： 
• 使能性能模式： 
– 锁定CPU核心数及频率： 
▪ 锁定CPU核心数的命令 
// m 代表 cluster0, n 代表 cluster1，m, n = 0~4, -1 代表免费限制 
adb shell“echo mn> /proc/ppm/policy/ut_fix_core_num” 
 
▪ 锁定CPU频率的命令 
// m 代表 cluster0, n 代表 cluster1；m, n = 0~15; 0 为最高频率；-1 为自由限制 
adb shell“echo mn> /proc/ppm/policy/ut_fix_freq_idx” 
 
▪ 例子 
adb shell “echo 4 4 > /proc/ppm/policy/ut_fix_core_num” 
adb shell “echo 0 0 > /proc/ppm/policy/ut_fix_freq_idx” 
 
– 锁定GPU频率： 
1. 首先，查看GPU频率支持列表 
adb shell “cat /proc/gpufreq/gpufreq_opp_dump” 
 
2. 然后修改GPU频率 
// f 是您想要设置的频率 
adb shell“echo f> /proc/gpufreq/gpufreq_opp_freq” 
 
3. 最后，检查当前 GPU 频率 
adb shell “cat /proc/gpufreq/gpufreq_var_dump” 
 
• 不使用 Android UI 运行，因为根据客户的要求，它会进行很大改变 
adb root 
adb shell am force-stop com.mediatek.avm 
 
实际上，整个系统负载受许多组件的影响。在 AVM 显示管道中，它包括摄像头流、DRM、图像拼接、2D/3D 渲
染算法和 Surface 显示。如有必要，我们可以进一步将管道细分为 2 个阶段进行研究。 
• 生成帧：这是 AVM 功能的主要功能，包括将摄像机图像作为输入并方便 GPU 渲染到目标缓冲区。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 29

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
29 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• Present Frame：在目前的设计中，目标缓冲区是一个 Surface。然后与 Android 系统的其他层合成以产生
最终的屏幕显示结果。 
 
 
• GPU 负载：用 MET 工具测量。 
• 内存带宽：用 MET 工具测量。 
 
MET 工具需要 Linux 内核检测和 Android 调试桥 (ADB) 的存在。 
用于测量FPS和CPU / GPU负载的系统配置如下表所示： 
 
Performance Indict
or 
Android Configuration ADB Enabled 
MET Enabl
ed 
Verbose lLog fro
m Bootloader & K
ernel 
CPU/GPU loading m
emory bandwidth FP
S 
userbug Yes Yes Yes 
 
测量环境 
• 评估板：MT8667 
• DRAM：2GB LPDDR4-2800，64 位 
• 显示：1048x480 
• 摄像头模块：AHD摄像头（1280x720） 
• Android版本：Android 10 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
30 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• 软件发布版本：AVM 2.3-spm 
 
重要的提醒 
以下性能统计数据是使用 2.3-spm 版软件测得的。新功能可能会影响性能统计数据。 
 
MT8666 性能 
关键性能指标 
• 摄像头到显示器延迟：~100ms (±10ms)（用户构建超过 10 个样本） 
• 内存占用：~235MB 
• 磁盘存储占用空间：~48MB 
 
CPU/GPU 负载 
• 整体系统 CPU 负载：用 MET 工具测量。 
• 进程CPU使用率：用top命令测量，进程名称：mtkfastavm。 
• 场景：AVM 使用基本视图运行（默认启用光度标定） 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 31

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
31 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
MT8667 性能 
关键绩效指标 
• 摄像头到显示器延迟：~100ms (±10ms)（用户构建超过 10 个样本） 
• 内存占用：~235MB 
• 磁盘存储占用空间：~48MB 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
32 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
CPU/GPU 负载 
• 整体系统 CPU 负载：用 MET 工具测量。 
• 进程CPU使用率：用top命令测量，进程名称：mtkfastavm。 
• 场景：AVM 使用基本视图运行（默认启用光度标定） 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
33 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
3.1 内存占用 
本章节显示了支持 3D 的 AVM 的测量内存消耗，包括磁盘存储内存消耗和运行时内存消耗。 
 
磁盘存储占用空间 
AVM 使用的文件总大小（包括默认 3D 资产文件和内联标定文件）约为 48MB。3D 资产（包括汽车模型和纹理）
是主要贡献者，占总文件大小的 50% 左右。另一个主要贡献者是用于内联标定的 OpenCV 库，占总文件大小的 
35% 左右。 
 
下表显示了使用 userdebug 构建的 Android 目标上的程序可执行二进制文件和资产文件的磁盘大小摘要。这些
数字是通过 Android adb shell 中的 du -h -c 命令测量的。请注意，BSP 库（例如 libEGL.so）未列在表中。 
AVM 文件 地点 尺寸 
2D 资源 /etc/ automotive /mt6771/avmdata 1MB 
3D 资源 /etc/ automotive /mt6771/avmdata/asset_3d 62MB 
标定参数 /mnt/mtkdata/avmdata 1.2MB 
守护进程可执行文件 /system/bin/mtkfastavm 12 KB 
AVM 库 /system/lib64/lib*avm*.so 2.4MB 
3D 资源库 /system/lib64/libassimp.so 1.4MB 
在线标定 OpenCV 库 /system/lib64/libopencv_java3.so 17MB 
AVM 演示版 APK /system/app/MtkAvmDemo 2.2MB 
在线标定 APK /system/app/AVM_CALIBRATION_DEMO 208 千字节 
全部的 – ~88MB 
 
运行时内存占用 
参考 3D AVM 系统（摄像头：1280x720，显示器：1920x1080）为 AVM 守护进程服务消耗约 179MB RAM，
为 Android APK（AVMDemo）消耗约 77MB RAM。 
内存占用量是通过 userdebug build 上的 top 命令测量的。RES（驻留内存）字段用于指示内存占用量。（top -s 
7 按 RES 排序） 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
34 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
足迹主要受两个因素影响： 
 
• 3D AVM 资源：当前示例 3D 汽车模型占用约 100MB 的常驻内存。如果没有加载 3D AVM 资源，则常驻
内存使用量约为 77MB。 
• AVM 渲染管道。缓冲区的大小与相机输入分辨率和输出显示尺寸高度相关。下图给出了一个简单的估算公式：  
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 35

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
35 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
AVM 渲染管道中有两个主要的缓冲队列。您可以通过更改摄像头输入分辨率和显示输出分辨率来粗略计算缓冲队
列大小。 
 
 
 
3.2 项目配置 
当前代码库中有多个项目。只有 spm86xx_avm 项目针对 AVM 进行了良好配置。如果您想在其他项目上正确运
行 AVM，以下段落是设置它的说明。 
 
Android 上的 AVM 
配置 AVM 
找到 device/mediatekprojects/spm86xx_xxx/ProjectConfig.mk，然后修改以下标志 
• MTK_SPM_AVM_SUPPORT = 是 
 
编译 
1. build system image 
source build/envsetup.sh 
export OUT_DIR=out_sys 
lunch sys_mssi_spm_64_cn-userdebug 
make -j24 sys_images 2>&1|tee sys.log 
 
2. build system image 
请将spm86xx_xxx替换为你自己的项目名称 
export OUT_DIR=out_vnd_spm86xx_xxx 
lunch vnd_spm86xx_xxx-userdebug 
make -j24 vnd_images krn_images 2>&1|tee vnd.log 
 
3. package image 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 36

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
36 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
一行内的命令 
请将spm86xx_xxx替换为你自己的项目名称 
python out_sys/target/product/mssi_spm_64_cn/images/split_build.py --system-dir out_sys/target/product/mssi_sp
m_64_cn/images --vendor-dir out_vnd_spm86xx_xxx/target/product/vnd_spm86xx_xxx/images --kernel-dir out_vnd_spm
86xx_xxx/target/product/spm86xx_xxx/images --output-dir output_load_spm86xx 
 
下载 
使用 flesh_tool 下载 \output_load_spm86xx 下的images。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 37

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
37 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
4 开发套件 
AVM 开发套件包括工具、软件和文档。 
 
成套工具 描述 
软件开发
工具包  
1. CameraCalib PC  Tool 用于计算相机模块的固有参数 
2. AVMCalib PC  Tool 用于计算将四个相机源拼接/混合到 BEV（鸟瞰图）图像中的参数 
3. AVMCalib Android apk作为如何使用标定库在生产线中构建标定流程的示例应用程序 
4. AVMDemo Android apk作为如何使用底层服务和库的示例应用程序 
5. AVM 标定库包含一个pd module 来查找图案上的参考点和一个calib module来生成 AVM 拼接/
混合标定数据 
6. AVM 运行时服务/库包含一个守daemon module ，它控制整个生命周期/数据路径（从相机到显
示器） ，并使用高性能拼接/混合运行时算法来生成所有视图和相关车轮轨迹线  
文档 所有技术支持相关材料均记录在此Wiki中。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
38 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
4.1 AVM SDK 
AVM 系统的软件开发套件包括以下项目： 
物品 描述 网址 
开发车轮轨迹线 本网站 Link  
AVM PC Tool 包含工具可执行文件和示例输入文件的压缩包。 – 
AVM 软件包 SPM Android 源代码版本的附加 repo 项目。 – 
 
• 本开发车轮轨迹线包含有关使用和修改软件模块的文档和说明 
• AVM PC 工具包含 
– 标定工具可帮助您生成相机和车辆设置所需的参数。 
– 3D 相机定制工具，用于定制 3D AVM 中的相机动画路径。 
• AVM 源代码包是一个 Android repo 项目。项目名称为 alps/vendor/mediatek/proprietary/hardware/m
tkcam_sec_lib。获取的 Android 源代码树包含以下子目录： 
vendor/mediatek/proprietary/hardware/mtkcam_sec_lib/mtkavm 
  ├── avmalgo 
  ├── avmcalibapk 
  ├── avmdaemon 
  └── avmdemoapk 
其中， 
▪ avmdaemon 包含预构建的模块库，例如 AVM 守护进程（libmtkavmfunction.so）和 Guideline
（libmtkavmproc.so）。 
▪ avmalgo 包含预构建的模块库，例如 AVM 运行时（libmtkavm.so）和标定库（libmtkavmcalib.so 
和 libmtkavmpd.so）。 
▪ avmcalibapk 包含 AVMCalibration Android 演示应用程序的源代码。 
▪ avmdemoapk 包含 AVMDemo Android 演示应用程序的源代码。 
如果您在下载源代码或工具包时遇到任何问题，请联系您的联发科技帐户窗口。 
 
构建配置 
spm86XX_avm 项目默认启用 AVM 功能。若要在其他项目中启用 AVM，请遵循这些配置。 
 
Android 项目配置 
Android 项目默认位于 device/mediatekprojects/。请确保在 ProjectConfig.mk 中正确设置以下配置选项： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 39

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
39 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
# AVM 功能 
MTK_SPM_AVM_SUPPORT = yes 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 40

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
40 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
5 相机 
AVM 系统需要安装四个摄像头，分别面向前、左、后、右。左、右摄像头区域安装在后视镜下方。  
 
AVM 相机规格要求 
AVM 系统需要使用四个相同的鱼眼相机，水平视场 > 180°，垂直视场 > 130°，以生成正确的 2D 顶视图和 3D 
场景。 
 
Camera 安装位置和角度 
摄像机安装位置和角度有三条经验法则要求 
1. 对于所有相机，请确保在 AVM 3D 模式下地面上方有足够的相机图像数据来生成 3D 虚拟碗。一般来说，相
机的垂直视场角 > 130°，并且保险杠/格栅/门障碍物占据下部图像的 5~15% 左右，可以满足大多数情况。
如果相机向下倾斜太多，可能没有足够的相机图像数据来绘制完整的 3D 虚拟环境。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 41

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
41 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 42

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
42 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
2. 标定过程中所有图案均清晰可见。在大多数情况下， 标定图案已在工厂地板上涂漆。当车辆停在指定位置时，
请确保所有图案在捕获的图像中均具有良好的可见性。 
3. 保留图像中大约 5~15% 的保险杠/格栅/车门。它可以提示驾驶员地板图像与车身的关系以及您可以在摄像
机安装车轮轨迹线部分找到有关每个摄像机要求的更多详细示例 
 
盲点区域 
由于车辆的配置设计，前/后摄像头大多安装在格栅和后备箱内。摄像头的视线被保险杠/格栅遮挡，可能会产生一
些盲点区域。在我们的 AVM 系统中，我们将绘制阴影图案来覆盖盲点区域。 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 43

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
43 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
5.1 安装车轮轨迹线 
前置摄像头 
下表包含一些前置摄像头安装的参考角度和位置： 
 
 
 
以上数字仅供参考，经验法则是在从车辆捕获的摄像头图像中实现以下四个要求： 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 44

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
44 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
NG 案例研究 1 
• 问题：格栅/保险杠障碍物遮挡了图案。这将导致标定失败。 
• 解决方案：调整相机位置或将图案移离车辆。 
 
 
NG 案例研究 2 
• 问题：相机光轴角度过高可能会造成一些额外的盲区。 
• 解决方法：调整摄像头光轴角度，尽量让保险杠/格栅占据5%~15%的图像。 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 45

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
45 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
后置摄像头 
下表包含一些后置摄像头安装的参考角度和位置： 
 
 
 
以上数字仅供参考，经验法则是在从车辆捕获的摄像头图像中实现以下四个要求： 
 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 46

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
46 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
侧面摄像头 
下表包含一些侧摄像头安装的参考角度和位置： 
 
 
以上数字仅供参考，经验法则是在从车辆捕获的摄像头图像中实现以下三个要求： 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 47

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
47 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 48

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
48 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
6 标定过程 
我们提供三个 PC 标定工具、一个 Android 标定应用程序、一个 Android AVM 演示应用程序和一个图像捕获工
具来完成端到端 AVM 标定过程： 
 
• 相机标定工具 (CameraCalib.exe) 是一个用于计算相机固有参数（相机投影矩阵和去畸变系数）的 PC 工具。 
• 固有参数生成工具（IntrinsicGen.exe）是一款PC工具，用于根据相机模块制造商提供的规范生成相机的固
有参数。 
• AVM 标定工具 (AVMCalib.exe) 是一款 PC 工具，可使用从真实设备捕获的图像来计算 AVM 拼接/混合/显
示参数。 
• AVM 标定应用程序 (AVM Calib APK) 是一款 Android 应用程序，用于标定生产线上的每辆车，以补偿安装
差异。 
• AVM 演示应用程序 (AVM Demo APK) 是 AVM 应用程序的 Android 应用程序。 
• 客户端实用程序 (mtkavmclient) 是一个 Linux 原生应用程序，用于从摄像头捕获图像，了解如何捕获图像 。 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 49

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
49 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
标定原理 
相机标定 
该过程将生成内参，并将其用于消除鱼眼图像的失真。 
• 检测鱼眼图像上的点。 
 
 
 
• 通过生成的固有参数消除图像畸变。 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 50

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
50 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
AVM 标定 
该过程将尝试匹配相机框架和 BEV 图像（地面实况）之间的点。 
注意：BEV 的尺寸（像素）与真实世界坐标（毫米）相同。 
• 相机上的图案和BEV之间的关系。 
 
 
• 如何将鱼眼图像投影到顶视图的工作流程。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 51

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
51 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
6.1 预备知识 
以下是您在使用标定过程之前需要了解的一些重要背景知识。 
 
坐标系 
测量单元 
使用物理坐标毫米（mm）作为共同的测量单位来对齐图案、鸟瞰图（BEV） 、车辆、轨迹和指导线。 
 
坐标中心 
坐标系的中心（x=0，y=0）位于前轮轨迹的中心。 
 
视锥体 
使用视锥体（左、上、右、下，也称为 LTRB）来描述物理世界中的空间区域。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 52

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
52 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
6.2 相机标定 
相机的成像原理是基于针孔几何模型，该模型由本征矩阵和畸变方程组成，相机标定就是计算相机模组本征参数
和畸变系数的过程。 
 
内参 
内部参数是一个3x3的矩阵，是相机坐标系到图像坐标系的变换矩阵。 
 
失真系数 
畸变系数用镜头模型的多项式参数来表示，AVM系统采用鱼眼镜头通过鱼眼模型的半径投影来捕捉广角图像，会
造成图像严重的光学畸变，该系数可以将鱼眼图像反向投影为无畸变图像。 
 
工具下载与安装 
请访问联发科技 DCC 下载 AVM 标定工具包。您可以在此工具包中找到 CameraCalib 和 AVMCalib 工具。使用
这些工具之前，请安装 Visual Studio 运行时 (vcredist_x64.exe)。 
 
文件夹结构 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 53

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
53 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
CameraCalib的文件夹结构如下： 
相机标定/ 
           ├───CameraCalib.exe 
           ├───opencv_world341.dll 
           └───/AG190C 
               ├── /input/*.png 
               ├── /output/intrinsic.xml 
               ├── /temp/_point_cloud.png, *.reproj.png 
               ├── camSetting.xml 
               └── chessboard_A3_8x5x40mm.pdfCameraCalib.exe是相机标定工具的执行文件 
其中： 
• opencv_world341.dll是执行CameraCalib.exe所需的动态库文件。 
• /input是相机标定图像目录。 
• inner.xml 是标定结果文件。它将由 AVM 标定过程使用。 
• /temp 是调试映像目录。 
• camSetting.xml 是标定设置文件。大多数情况下，您不需要修改此文件，除非您想更改图案类型或尺寸 。 
• chessboard_A3_8x5x40mm.pdf 是 A3 尺寸的棋盘图案。 
 
环境设置 
个人电脑 
• Windows 7/10（64 位） 
• 需要 Visual Studio 运行时（安装 vcredist_x64.exe） 
 
MTK EVB（安卓） 
• EVB 至少连接一个摄像头 
• 已启用 AVM 和 Android 调试桥 (ADB) 的系统映像 
• 启动系统并确保 AVM 正在运行 
 
棋盘图案 
• 以 A3 尺寸打印棋盘图案 chessboard_A3_8x5x40mm.pdf 
 
运行示例 
1. 检查以下文件 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 54

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
54 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
– 项目配置：/CameraCalib/AG190C/camSetting.xml 
– 相机标定图像：/CameraCalib/AG190C/input/*.png 
2. 运行相机标定工具 
– 打开命令行控制台并转到 /CameraCalib 文件夹 
– 从控制台执行以下命令： 
CameraCalib.exe AG190C/camSetting.xml 
 
3. 检查结果 
– 控制台日志 
– /CameraCalib/AG190C/output/intrinsic.xml 中的输出 
– /CameraCalib/AG190C/temp/*.png 中的调试图像 
 
相机标定步骤 
准备棋盘图案 
• 您可以在 /CameraCalib/chessboard_A3_8x5x40mm.pdf 中找到图案图像。请打印出棋盘图案并将其粘贴
到平坦牢固的表面上。 
 
捕获相机标定图像 
• 通过 USB 连接 PC 和 EVB 
• 授予 ADB 根访问权限和可写分区 
adb root 
adb remount 
 
• 创建新文件夹来存储捕获的图像 
adb shell mkdir /data/avm/ 
adb shell mkdir /data/avm/image/ 
 
• 停止 AVM 应用程序，因为它占用了 AVM 守护进程资源 
adb shell am force-stop com.mediatek.avm 
 
• 终止并重启服务守护进程 
adb shell killall mtkfastavm 
start adb shell mtkfastavm 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 55

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
55 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
• 切换到相机视图 
adb shell mtkavmclient 1 5 
 
• 切换摄像头（3 0 = 前、3 1 = 左、3 2 = 右、3 3 = 后） 
adb shell mtkavmclient 3 1 
 
• 捕获图像（AVM 守护进程将自动附加文件扩展名） 
adb shell mtkavmclient 4 1 /data/avm/image/image_001 
 
• 重复此步骤以使用不同的文件名捕获更多图案图像。请查看常见问题解答部分以获取更多捕获技巧  
adb shell mtkavmclient 4 1 /data/avm/image/image_002 
adb shell mtkavmclient 4 1 /data/avm/image/image_003 
... 
exit 
 
• 将所有捕获的图像复制到主机 PC 
adb pull /data/avm/image 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 56

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
56 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
运行标定过程 
请按照以下步骤开始您的相机标定项目： 
• 克隆 AG190C 文件夹并重命名为 your_project 并清理 /input 文件夹。 
• 按照捕获相机标定图像的说明捕获棋盘图案图像。 
• 将这些图像放入 /your_project/input 文件夹中。此文件夹中的所有图像都将用于标定过程。 
• 打开命令行控制台并执行 CameraCalib.exe /your_project/camSetting.xml。 
• CameraCalib 工具将开始运行。它将自动丢弃质量较差的图像并多次运行标定过程，直到达到良好的结果。 
• 您可以在 /output/intrinsic.xml 中找到内参。 
 
检查日志 
 
 
Total avg re-projection error：该值为实际检测到的角点坐标与重新投影的角点坐标之间的像素位置平均误差
值，反映固有参数和畸变系数应用到检测到的角点后效果如何。 
 
无法检测到任何点的图像：在标定过程中，无法检测到棋盘角的图像将被丢弃。 
 
重新投影误差较大的图像：重新投影位置误差过高的图像在标定过程中将被丢弃。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 57

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
57 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
检查点云图像 
您可以在文件夹“/temp”中找到用于调试的点云图像。所有检测到的角点都聚集并绘制在此图像中，并且所有
点都根据其重新投影误差值用不同的颜色标记。您可以观察点的分布以检查标定图像是否完全覆盖相机的视野。 
 
相机标定过程将多次运行标定以提高质量，并仅输出最终结果。下图是三轮不同标定的输出，仅供参考。如您所
见，较低的重新投影误差可带来更好的图像拼接质量。 
 
• 第一轮标定（平均重新投影误差 = 113.463） 
 
 
 
• 第二轮标定（平均重投影误差 = 0.223055） 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 58

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
58 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
检查输出 
CameraCalib 工具会在输出文件夹中生成一个intrinsic.xml文件，该文件记录了intrinsic参数和畸变系数。 
 
 
 
故障排除 
捕获图案图像时，尽量覆盖相机视图的大部分区域。下面显示的示例有许多输入图像，但仅关注中心区域。运行
标定过程后，仍会得到一个小的重新投影误差，但应用输出结果后，图像的外部区域将不会具有正确的去扭曲效
果。 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 59

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
59 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• 标定图像中棋盘格图案的位置必须在相机的视野范围内，可以提高棋盘格角点的检测率。  
 
 
 
• 请不要使用棋盘图案太细的白边框来捕捉标定图像。 
 
 
 
常见问题 
棋盘图案的正方形尺寸是多少？ 
正方形尺寸为40mm x 40mm。 
 
如何观察相机标定结果的质量？ 
可以观察总平均重投影误差是否较小，根据实验经验，当该值小于1时，会得到很好的标定质量。另外，还必须观
察点云图像，确认图像采样点的分布已经完全覆盖相机的视场，这样才能更准确地校正固有参数和畸变系数。  
 
为什么同一台相机使用CameraCalib工具会产生不同的内参和畸变系数？ 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 60

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
60 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
相机在工厂生产组装时，会因为焦距的调整而产生一定的误差，不过这个误差值会在 AVMCalib工具中得到微调和
改善。 
 
6.3 内参生成 
虽然可以通过CameraCalib工具得到相机的固有参数和畸变系数，但是手动标定有时会得到较差的效果，因为拍
摄图像的棋盘格图案位置分布区域并不能覆盖整个相机镜头视场。因此我们提出了另一种非手动标定工具，称为 I
ntrinsic Generation工具。该工具主要根据相机模组厂商提供的规格书和光学镜头厂商提供的镜头场曲率数据，
直接计算相机的固有参数和畸变系数。 
 
场曲率数据 
场曲率是光束进入镜头的角度与相机传感器上图像相对位置之间的关系。由于广角镜头的曲面是非线性的，因此，
从不同角度进入镜头的光线会产生不同的折射角度，这种关系可以用曲线来表示。  
 
工具下载与安装 
请访问联发科技DCC 下载 AVM 标定工具包。您可以在此工具包中找到 IntrinsicGen 工具。 
 
文件夹结构 
IntrinsicGen的文件夹结构如下： 
IntrinsicGen/ 
           ├───intrinsicGen.exe 
           └───/AG190C 
               ├── /input/*.png, fieldCurvature.csv 
               ├── intrinsicGen.xml 
               ├── /output/intrinsic.xml 
               └── /temp/*.undistor.png 
其中： 
• intrinsicGen.exe是生成相机固有参数和畸变系数的执行文件。 
• /input 是相机标定图像目录。fieldCurvature.csv 是镜头畸变表。您需要从光学镜头制造商处获取它。 
• inner.xml 是标定结果文件。它将由 AVM 标定过程使用。 
• /temp 是调试不失真图像目录。 
• intrinsicGen.xml是此工具设置文件。您需要根据相机模块规格修改CameraModule的内容。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 61

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
61 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 62

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
62 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
环境设置 
个人电脑 
• Windows 7/10（64 位） 
 
MTK EVB（Android） 
• EVB 至少连接一个摄像头。 
• 已启用 AVM 和 Android 调试桥 (ADB) 的系统映像。 
• 启动系统并确保 AVM 正在运行。 
 
棋盘图案 
• 以 A3 尺寸打印棋盘图案 chessboard_A3_8x5x40mm.pdf 
 
运行示例 
1. 检查以下文件 
– 项目配置：/IntrinsicGen/AG190C/intrinsicGen.xml 
– 镜头场曲率数据：/IntrinsicGen/AG190C/input/fieldCurvature.csv 
– 相机标定图像：/IntrinsicGen/AG190C/input/*.png 
2. 运行 IntrinsicGen 工具 
– 打开命令行控制台并转到 /IntrinsicGen 文件夹 
– 从控制台执行以下命令： 
intrinsicGen.exe AG190C/intrinsicGen.xml 
 
3. 检查结果 
– 控制台日志 
– /CameraCalib/AG190C/output/intrinsic.xml 中的输出 
– /CameraCalib/AG190C/temp/*.png 中的调试图像 
 
内在生成步骤 
准备镜头场曲率数据 
将光学镜头制造商提供的镜头场曲率数据（SEMI-ANGLE、REAL IMAGE-HEIGHT 和 REF IMAGE-HEIGHT）复
制到 fieldCurvature.csv 表中。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 63

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
63 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
 
准备intrinsicGen.xml 
在intrinsicGen.xml中填写相机模组厂商提供的规格，包括FocalLength、SensorImageArea、SensorActiveArr
aySize、OutputImageSize、PrincipalPoint，其中PrincipalPoint值一般设置在图像坐标平面的中心。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 64

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
64 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
捕获相机标定图像 
• 通过 USB 连接 PC 和 EVB 
• 授予 ADB 根访问权限和可写分区 
adb root 
adb remount 
 
• 创建新文件夹来存储捕获的图像 
adb shell mkdir /data/avm/ 
adb shell mkdir /data/avm/image/ 
adb shell 
 
• 停止 AVM 应用程序，因为它占用了 AVM 守护进程资源 
am force-stop com.mediatek.avm 
 
• 终止并重启服务守护进程 
killall mtkfastavm; mtkfastavm 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 65

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
65 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
• 切换到相机视图 
mtkavmclient 1 5 
 
• 切换摄像头（3 0 = 前、3 1 = 左、3 2 = 右、3 3 = 后） 
mtkavmclient 3 1 
 
• 捕获图像 
mtkavmclient 4 1 /data/avm/image/image_001.png 
 
• 重复此步骤以使用不同的文件名捕获更多图案图像。请查看常见问题解答部分以获取更多捕获技巧  
mtkavmclient 4 1 /data/avm/image/image_002.png 
mtkavmclient 4 1 /data/avm/image/image_003.png 
... 
exit 
 
• 将所有捕获的图像复制到主机 PC 
adb pull /data/avm/image 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 66

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
66 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
运行你的生成过程 
请按照以下步骤启动您的内在生成项目： 
• 克隆 AG190C 文件夹并重命名为 your_project 并清理 /input 文件夹。 
• 按照捕获相机标定图像的说明捕获相机鱼眼图像。 
• 将这些图像放入 /your_project/input 文件夹中。 
• 准备厂家提供的镜头场曲率数据，将镜头场曲率数据复制到intrinsicGen.xml文件中。 
• 将intrinsicGen.xml文件放入/your_project/input文件夹中。 
• 修改 /your_project/intrinsicGen.xml 中的相机模块规范 
• 打开命令行控制台并执行intrinsicGen.exe your_project/intrinsicGen.xml。 
• IntrinsicGen 工具将开始运行。您可以在 /output/intrinsic.xml 中找到内部参数。 
 
检查日志 
当工具日志显示“Outputintrinsic.xml done”和“Undistort images saved successful”时，表示Intrinsic Ge
neration工具运行成功。此intrinsic.xml可用于avmCalib拼接图像。此外，您还可以观察undistort图像中的线条
特征。如果线条是直的，则表示相机的intrinsic数据是正确的。 
 
 
该工具的错误/警告信息显示如下。 
• 没有字段Curvature.csv： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 67

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
67 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
/your_project/input/ 文件夹中没有 fieldCurvature.csv 文件。因此，该工具无法成功运行。 
 
 
 
• 没有调试图像： 
/your_project/input/ 文件夹中没有相机标定图像，因此该工具无法生成无失真图像，但它仍然可以计算内部参
数并输出intrinsic.xml数据。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 68

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
68 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
• 超出范围设置（FOV）： 
意思是intrinsicGen.xml 的UndistortImageFOV 角度设置值无法被工具计算出来，必须修改为消息显示的范围值。  
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 69

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
69 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
• fieldCurvature.csv 数据错误： 
fieldCurvature.csv 内容中有空白列，必须修改为正确，然后工具才能成功执行。 
 
 
检查调试无失真图像 
输入文件夹中的Camera Calibration Images（鱼眼图像）的去畸变处理是基于intrinsic.xml数据，其中图像FOV
由intrinsicGen.xml设置。另外，相机的固有参数是使用相机模组厂家提供的数据计算的。实际上，在每台相机的
生产和组装过程中，手动调焦步骤会导致每台相机的固有参数出现误差。但这个误差会被 avmClib中的AutoTunin
g算法调整。AutoTuning算法的主要作用是将相机的FxFyCxCy调整到最佳值。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 70

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
70 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
检查输出 
Intrinsic Generation 工具会在输出文件夹中生成一个intrinsic.xml文件，该文件记录了固有参数和畸变系数。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 71

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
71 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
6.4 AVM 标定 
AVM 标定是一个计算参数（param_pd.bin、param.bin）的过程，用于将四个鱼眼相机输入转换/拼接为无缝鸟
瞰图像。 
 
 
工具下载与安装 
请联系联发科技索取 AVM 标定工具包。您可以在此工具包中找到 CameraCalib 和 AVMCalib 工具。使用这些
工具之前，请先安装 Visual Studio 运行时 (vcredist_x64.exe)。 
 
文件夹结构 
安装AVM标定工具包后，AVMCalib结构如下： 
 
AVM标定工具包 
├── AVMCalib 
|   ├── example/roi 
|   |   ├── <exampls> 
|   ├── script 
|   |   └── <scripts> 
|   ├── AVMCalib.exe 
|   └── <xxx.dll> 
└── PatternAnnotationTool 
    ├─── index.html 
    ├──  mpa.js 
    └──  mpa.css 
其中： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 72

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
72 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• example/roi ：该文件夹包含使用各种 ROI 模式的标定案例。 
– 棋盘： 
▪ asset：包含BEV材料，包括BEV和可打印的微型车图案。 
▪ minicar ：是微型车的一个例子（真实汽车的缩小版）。 
o input：AVM 标定输入文件，包括 4 张相机图像、1 张 BEV 图像、相机固有图像和模式设置。详
细信息请参阅 AVM 标定输入。 
o avmSetting.xml：项目配置，详情请见了解avmSetting.xml。 
– rectborder_thick： 
▪ asset：包含BEV材料，包括BEV和可打印的微型车图案。 
▪ minicar ：是微型车的一个例子（真实汽车的缩小版）。 
o input：AVM 标定输入文件，包括 4 张相机图像、1 张 BEV 图像、相机固有图像和模式设置。详
细信息请参阅 AVM 标定输入。 
o avmSetting.xml ：项目配置，详情请见了解 avmSetting.xml。 
– rectborder_thin： 
▪ asset：包含BEV材料，包括BEV和可打印的微型车图案。 
▪ minicar ：是微型车的一个例子（真实汽车的缩小版）。 
o input：AVM 标定输入文件，包括 4 张相机图像、1 张 BEV 图像、相机固有图像和模式设置。详
细信息请参阅 AVM 标定输入。 
o avmSetting.xml ：项目配置，详情请见了解 avmSetting.xml。 
– rectsolid： 
▪ asset：包含BEV材料，包括BEV和可打印的微型车图案。 
▪ minicar ：是微型车的一个例子（真实汽车的缩小版）。 
o 输入：AVM 标定输入文件，包括 4 张相机图像、1 张 BEV 图像、相机固有图像和模式设置。详
细信息请参阅 AVM 标定输入。 
o avmSetting.xml ：项目配置，详情请见了解 avmSetting.xml。 
• script ：包含Android环境中有用的脚本的文件夹。 
– avm_camera_dump.bat用于捕获四个摄像机的图像，用于 AVM 标定输入。 
– avm_clear_inlinecalib_bin.bat清理在线标定的结果（param.bin、param_pd.bin）。 
– avm_pull_bin.bat将param.bin和param_pd.bin保存到PC。 
– avm_pull_inlinecalib_image.bat保存内联标定应用程序用于当前标定的图像。 
– avm_push_bin.bat将 param.bin 和 param_pd.bin 推送至目标并应用结果。 
– avm_restart_daemon.bat重新启动守护进程。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 73

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
73 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
– avm_screencap.bat用于转储当前 Android 屏幕。 
– xxx.dll ：执行AVMCalib.exe所需的动态库。 
 
• AVMCalib.exe ：可执行 AVM 标定，更多详细信息请参阅运行示例。 
• PatternAnnotationTool ：一个 Java 脚本工具，用于帮助生成 patSetting.xml。详细信息请参阅 Pattern 
Annotation Tool。 
 
环境设置 
 
个人电脑 
• Windows 7/10（64 位） 
• 需要 Visual Studio Runtime（在 AVM_Calibration_Toolkit 文件夹下安装 vcredist_x64.exe）。 
 
MTK EVB（Android） 
• EVB连接四台摄像头。 
• 已启用 AVM 和 Android Android Debug Bridge(ADB) 的系统映像。 
• 启动系统并确保 AVM 正在运行。 
 
运行示例 
1. 检查 AVM 标定输入。 
2. 使用设置文件运行 AVMCalib.exe。 
– 例如 AVMCalib minicar\avmSetting.xml 
 
 
3. 检查输出文件夹中的标定输出。 
– output\param_pd.bin 和 output\param.bin 
– 这些参数箱是 EVB 上的快速预览所必需的。 
4. 检查结果和故障排除。 
– 检查扭曲图像的结果。例如左摄像机图像ROI 和参考点。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 74

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
74 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
– 检查针迹混合结果 
▪ 混合锥设置 
▪ 重叠区域检查 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 75

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
75 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
5. EVB 快速预览 
– 将 param*.bin 推送至 EVB 
adb root 
adb wait-for-device 
adb remount 
adb shell "rm /mnt/mtkdata/avmdata/param_pd_new.bin" 
adb shell "rm /mnt/mtkdata/avmdata/param_new.bin" 
adb push param.bin /mnt/mtkdata/avmdata 
adb push param_pd.bin /mnt/mtkdata/avmdata 
adb reboot 
 
注意：如果您曾经运行过内联标定，请确保 /mnt/mtkdata/avmdata 下没有 param_new.bin 和 param_pd
_new.bin。 
 
– 系统重启后，AVM 守护进程将重新加载参数。 
– 启动 AVMDemo 应用程序来显示顶视图。 
 
AVM 标定输入 
AVM 标定需要以下输入，我们将在以下章节中以微型车示例详细描述。 
• avmSetting.xml 项目配置。 
• input\BEV.png 参考图样的鸟瞰图。 
• input\front(left/right/rear).png 将摄像头安装到指定位置后从车辆上捕获的四个摄像头图像。 
• input\intrinsic.xml相机模块固有参数及畸变系数。 
• input\patSetting.xml 配置文件，用于描述鱼眼相机图像与 BEV 参考图之间的关系。 
 
捕捉相机图像 
要捕捉相机图像，您需要： 
• 首先启动系统并确保 AVM 正在运行 
• 授予 ADB 根访问权限和可写分区 
adb root 
adb wait-for-device 
adb remount 
 
• 停止 AVM 应用程序，因为它占用了 AVM 守护进程资源 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 76

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
76 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
adb shell “am force-stop com.mediatek.avm” 
 
• 切换到相机视图 
adb shell “mtkavmclient 1 5” 
 
• 切换和捕获（3 0 = 前、3 1 = 左、3 2 = 右、3 3 = 后、4 1 = 捕获） 
adb shell “mtkavmclient 3 0” 
adb shell “mtkavmclient 4 1 /data/front” 
adb shell “mtkavmclient 3 1” 
adb shell “mtkavmclient 4 1 /data/left” 
adb shell “mtkavmclient 3 2” 
adb shell "mtkavmclient 4 1 /data/right" 
adb shell “mtkavmclient 3 3” 
adb shell “mtkavmclient 4 1 /data/rear” 
 
• 将图像复制到主机 PC 
adb pull /data/front.png 
adb pull /data/left.png 
adb pull /data/right.png 
adb pull /data/rear.png 
 
了解 avmSetting.xml 
您可以在 XML 中找到三大元素组，我们以 \minicar\avmSetting.xml 来详细说明： 
• <InputSetting> 描述输入配置。 
• <OutSetting> 描述输出的顶视图应该是什么样子。例如顶视图可视区域有多大，如何融合两个相邻图像，
如何裁剪侧视图的图像以及如何裁剪未失真的驾驶辅助视图图像。 
• <DebugSetting> 描述在哪里找到调试图像。 
 
以下是您可能需要根据您的 AVM 设计修改的一些重要元素。 
 
< InputSetting > 
 
< CamInput > 
<!-- Multiple Camera Images --> 
<CamInput> 
  <!-- direction can be "all", "front", "left", "right", and "rear" --> 
  <IntrinsicXML direction="all">intrinsic.xml</IntrinsicXML> 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 77

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
77 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
  <CamImage direction="front">front.png</CamImage> 
  <CamImage direction="left">left.png</CamImage> 
  <CamImage direction="right">right.png</CamImage> 
  <CamImage direction="rear">rear.png</CamImage> 
  <!-- input resolution in pixels --> 
  <CamResoultion width="1280" height="720"/> 
</CamInput> 
 
此 <CamInput> 元素描述相机输入源。您需要定义图像的文件名、内参的 XML、去畸变系数和相机图像分辨率。
当前系统要求所有相机具有相同的分辨率输出。 
如果您的系统使用相同的四个摄像头模块，则您只需对这四个摄像头模块使用一个intrinsic.xml即可。 
<IntrinsicXML direction="all">intrinsic.xml</IntrinsicXML> 
 
如果您的系统使用具有不同光学特性和 FOV 的不同相机模块，您可以单独分配这些 XML。 
    <IntrinsicXML direction="front">intrinsic_front.xml</IntrinsicXML> 
    <IntrinsicXML direction="left">intrinsic_left.xml</IntrinsicXML> 
    <IntrinsicXML direction="right">intrinsic_right.xml</IntrinsicXML> 
    <IntrinsicXML direction="rear">intrinsic_rear.xml</IntrinsicXML> 
 
内参文件可能来自相机标定过程。 
 
< BEVInput > 
  <!-- BEV(Top View) Calibration Image --> 
  <BEVInput> 
    <Filename>BEV.png</Filename> 
    <Frustum left="-2400" 
          top="2216" 
          right="2399" 
          bottom="-4984" /> 
  </BEVInput> 
 
此 <BEVInput> 元素描述 BEV 图像（地面实况）。此图像上的图案大小和布局应与真实环境中的完全相同。avm_
pd 算法（“pd”表示“点检测”）将在这些图案上找到参考点。avm_calib 将尝试将相机图像上检测到的点与这些
地面实况点进行匹配，并生成投影矩阵。 
 
<Frustum> 元素定义 BEV 中心点，该点应与汽车中心对齐。因此 AVMCalib 将知道 BEV 参考点（地面实况）
与汽车之间的相对位置。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 78

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
78 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
以下是真实汽车 BEV 设置和布局的示例： 
 
 
 
您可以在调试图像 /temp/bev_preview_rp.png 上检查检测到的 BEV 参考点。 
 
 
 
< CarDimension> 
<CarDimension 
  width="1783" 
  length="4551" 
  wheel_base="2620" 
  front_track="1502" 
  rear_track="1514" 
  center_to_head="916" /> 
 
此 <CarDimension> 元素描述车辆的规格。请注意，宽度不包括后视镜。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 79

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
79 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
您可以检查具有汽车尺寸的调试图像 /temp/bev_preview_rp.png 以检查配置是否符合预期。 
 
 
< OutputSetting > 
< DrivingAssistanceView > 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 80

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
80 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
<DrivingAssistanceView> 
  <FOV view="front" percent="75"/> 
  <FOV view="left" percent="75"/> 
  <FOV view="right" percent="75"/> 
  <FOV view="rear" percent="75"/> 
</DrivingAssistanceView> 
 
此 <DrivingAssistanceView> 元素描述了在未失真的鱼眼视图中使用的 FOV。 
 
< AVMParam & PdParam > 
<!-- Camera transformation output--> 
<AVMParam> 
  <Filename>param.bin</Filename> 
</AVMParam> 
 
<!-- point detector output--> 
<PdParam> 
  <Filename>param_pd.bin</Filename> 
</PdParam> 
 
此 <AVMParam> 元素和 <PdParam> 元素描述输出箱文件名。 
 
< DebugSetting > 
< BEVBlendData > 
<!-- Bird Eye View (Top View) blend output--> 
<BEVBlendData> 
  <Frustum left="-2400" 
            top="3320" 
            right="2400" 
            bottom="-5865" /> 
  <StitchRegion> 
    ... 
  </StitchRegion> 
</BEVBlendData> 
 
此 <BEVBlendData> 元素描述如何将四个摄像头图像拼接并混合到顶视图图像中。此设置仅适用于 /temp/bev_
preview.png 和 /temp/bev_preview_rp.png，用于调试目的。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 81

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
81 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
视锥体表示混合顶视图的最大可视区域。您可以将其设置为真实车辆的顶视图模拟设置。  
 
您可以检查 /temp/bev_preview.png 和 /temp/bev_preview_rp.png 以了解查看区域。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 82

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
82 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
< StitchRegion > 
<StitchRegion> 
  <ConeBlend corner="front-left" start_x="-891" start_y="916" end_x1="-2400" end_y1="1500" end_x2="-2400" end_
y2="2500" /> 
  <ConeBlend corner="front-right" start_x="891" start_y="916" end_x1="2400" end_y1="1500" end_x2="2400" end_y2
="2500" /> 
  <ConeBlend corner="rear-left" start_x="-891" start_y="-3635" end_x1="-2400" end_y1="-4000" end_x2="-2400" en
d_y2="-5000" /> 
  <ConeBlend corner="rear-right" start_x="891" start_y="-3635" end_x1="2400" end_y1="-4000" end_x2="2400" end_
y2="-5000" /> 
</StitchRegion> 
 
此 <StitchRegion> 元素描述了两个相邻图像的混合锥体。相邻图像将在此锥体内进行混合。 
 
 
 
 
 
 
 
 
 
以下是一些 <ConeBlend> 的赋值规则。您可以以左前角为例： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 83

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
83 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
• 起点应位于车辆区域内 
• 端点应位于左前区域内。如果端点位于此区域之外，我们将从此区域选择最近的点  
• 端点不需要放置在 BEVBlendData 视锥区域的边界上，我们将进行插值以找到与视锥的交点并相应地计算混
合数据我们可以在 (end_x1, end_y1) 和 (end_x2, end_y2) 上设置相同的值以最小化混合区域，以检查拼接
边缘的质量。 
 
 
您可以检查调试图像 /temp/bev_stitch_map.png 和 bev_preview_front.png （左、右、后）以查看相邻图像的
重叠区域和锥体混合区域。 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 84

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
84 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
您可以使用 /temp/bev_preview.png 检查最终的混合结果。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 85

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
85 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
了解 patSetting.xml 
/input/patSetting.xml 通过使用 ROI 来描述在相机图像上找到的参考点与在 BEV 参考图像上找到的参考点之间
的关系。请注意，ROI 单位是像素，图像的左上角是原点 (0,0)。avm_pd 模块将使用自动模式检测算法来查找 R
OI 内的参考点。 
 
<Pattern type="chessbord"> 
  <GridSize width="3" height="2"/> 
  <BEVROI> 
    <AutoFind> 
      <ROI left="103" top="124" width="1383" height="1084"/> 
    </AutoFind> 
  </BEVROI> 
  <CamROI> 
    <AutoFind> 
      <ROI left="120" top="339" width="341" height="237"/> 
    </AutoFind> 
  </CamROI> 
</Pattern> 
 
 
 
图案注释工具 
该工具提供了友好的用户操作界面，用于生成AVM标定过程的patSetting.xml。 
 
工具下载 
请访问联发科的 DCC 下载 AVM 标定工具包。您可以在此工具包中找到 PatternAnnotationTool 工具。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 86

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
86 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
运行工具 
请在 Google Chrome 中运行该工具 
 
• 双击 index.html 执行该工具 
 
注释教程 
文件导入器 
1. 单击“添加文件”按钮并选择包含 avm 标定图像的目录。 
 
 
 
2. 确认图片上传： 
 
 
• 文件名区分大小写。请检查所有文件是否存在，并且其名称与示例图像相同。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 87

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
87 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 88

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
88 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• 如果您的输入文件夹已经有文件patsetting.xml，我们将自动导入现有的注释设置。 
 
 
 
 
• 如果没有，则需要绘制配对的 ROI。 
 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 89

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
89 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
ROI操作 
ROI操作的工作区在黑色边界内，请在工作区内完成各项操作。 
 
• 画 
通过拖动鼠标在相机视图和 BEV 视图上绘制配对的 ROI。 
 
 
 
• 选择/取消选择 
– 如果您想选择 ROI，请单击 ROI 内部。 
– 如果要取消选择 ROI，请单击工作区中的任意位置（调整大小点除外） 。 
 
• 移动 
通过拖动鼠标或者按键盘的上/下/左/右键来移动选定的ROI。 
 
• 调整大小 
通过拖动 8 个调整大小点来调整所选 ROI 的大小。 
 
• 删除 
按键盘的 Delete 键删除选定的 ROI。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 90

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
90 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• 属性设定 
使用设置面板来微调选定的 ROI 信息。 
 
 
 
• 复制和粘贴 
– 按 Ctrl + C 复制选定的 ROI。 
– 当您按下 Ctrl + V 时，ROI 将粘贴在同一位置。 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 91

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
91 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• 放大和缩小 
通过按键盘的 + / - / = 键来放大 / 缩小 / 重置选定的 ROI。 
 
• 撤消和重做 
通过按 Ctrl + Z / Ctrl + Y 撤消 / 重做 / 执行的操作。 
 
• 切换视图 
– 点击查看列表进行切换 
 
 
– 在区域未选择状态下按键盘的上/下键切换到相对上一个/下一个视图。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 92

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
92 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
文件导出器 
1. 将 patSetting.xml 保存到下载文件夹： 
 
 
 
2. 将 patSetting.xml 复制到输入文件夹。 
 
键盘快捷键 
如果您对 ROI 操作有任何问题，请参考此页面。 
 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 93

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
93 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
调试 
日志详细程度 
按照严重程度的顺序，有多种记录消息的方法： 
 
• Error  (1) - 任何对操作造成致命影响但对应用程序不造成致命影响的错误 
• Warn (2) - 任何可能会导致应用程序异常但我们可以自动恢复的情况。 
• Info (3) - 通常需要记录的有用信息（流程、数据信息等） 
• Debug（4）- 诊断信息不仅对开发人员有帮助，对其他人也有帮助 
• Verbose（5） - 仅当你“跟踪”代码并尝试找到函数的某一部分时 
 
如果遇到任何问题，请将调试日志级别设置为调试（4） 。建议在向联发科技提交问题时将调试或详细日志附加到 
eService。 
 
要调整日志级别，请使用 -v 选项： 
AVMCalib.exe avmSetting.xml -v 4 
 
 
 
调试图像级别 
关于调试映像级别，调试映像有三个级别： 
• Disable （1）：关闭调试映像。您还可以通过设置此选项来加快标定过程。 
• Enable（2）：我们将输出带有检测到的参考点的 BEV 预览图像、拼接图和 ROI 图像。 
 
要调整日志级别，请使用 -d 选项，例如： 
AVMCalib.exe avmSetting.xml -d 2 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 94

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
94 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
以下命令启用所有详细日志和所有调试图像： 
AVMCalib.exe avmSetting.xml -v 4 -d 3 
 
检查ROI设置和点检测结果 
您可以检查在调试图像 /temp/roi-front.png (左、右、后) 中找到的 ROI 和参考点。 
 
 
 
如果您正在实现模式检测算法（avm_pd） ，并且在开发期间自动查找的准确性不够高，则可以使用手动分配的点
来绕过自动查找。 
<Pattern type="chessbord"> 
  <GridSize width="3" height="2"/> 
  <BEVROI> 
    <AutoFind> 
      <ROI left="103" top="124" width="1383" height="1084"/> 
    </AutoFind> 
  </BEVROI> 
  <CamROI> 
    <AutoFind> 
      <ROI left="120" top="339" width="341" height="237"/> 
    </AutoFind> 
    <ManualFind> 
      <Point x="258" y="416"/> 
      <Point x="288" y="423"/> 
      <Point x="321" y="429"/> 
      <Point x="204" y="441"/> 
      <Point x="228" y="454"/> 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 95

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
95 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
      <Point x="258" y="468"/> 
    </ManualFind> 
  </CamROI> 
</Pattern> 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 96

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
96 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
自动调谐开关 
为了克服镜头的组装误差，我们的算法将尝试补偿以获得更好的质量。您可以在开发阶段将其关闭以检查真实相
机的内在质量。 
AVMCalib.exe avmSetting.xml -a 0 
 
故障排除 
点云信息不匹配 
如果 AVMCalib 报告如下错误： 
 
 
 
此错误是由于相机参考点和 BEV 参考点之间的点数不匹配造成的。在大多数情况下，这是由于相机参考点检测不
正确造成的。请先检查 patSetting.xml 中的 ROI 设置。 
 
下图显示了 ROI 未正确覆盖模式的示例： 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 97

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
97 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
常见问题 
可以使用四种模式代替八种模式吗？ 
是的，我们建议模式应该涵盖所有特殊情况以获得更好的质量。 
 
可以使用其他类型的 BEV 参考图像来执行 AVM 标定工具吗？ 
是的，AVM 标定工具支持三种 BEV 参考图像图案类型。其中包括棋盘、rect_border 和 rect_solid 图案类型。 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 98

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
98 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
如何避免BEV参考图的检测点失败？ 
图案与地板背景颜色对比度要高（例如：黑白） 。图案不能受弱光影响（过曝或过暗） 。图案主体不能被物体遮挡，
否则会导致图案形状特征消失。图案周围环境要干净，去除非必要物体。在patSetting.xml中设置ROI位置时，必
须减少非图案主体的其他物体的选取。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 99

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
99 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 100

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
100 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
6.5 在线标定 
AVMCalibration 是一个用于工厂生产线上每辆车标定的 Android 演示应用程序。您必须在固件中存储一个通用
版本的标定参数作为默认值，并且您可以在生产中微调这些标定参数以补偿每辆车的安装差异。 
 
车辆停在指定位置后，工人可以使用我们的自动模式检测算法在不到 1 分钟的时间内完成在线标定过程。 
 
在线标定过程包括： 
• 检查相机质量，如有必要进行调整/更换。 
• 检查摄像机安装公差，如有必要，进行修复/更换。 
• 车辆自动模式识别与标定。 
 
注意：该在线标定应用程序是一个演示应用程序，您可以参考此应用程序来设计适合您的系统和工厂生产线的在
线标定流程。 
 
环境设置 
车辆 
• 我们的 SDK 中的真实车辆或微型车在正确的位置安装了摄像头。 
 
联发科技评估板 
• EVB连接四台摄像头。 
• 已启用 AVM 的系统映像，其中安装了与车辆匹配的预标定参数（param.bin、param_pd.bin）。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 101

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
101 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
在线标定步骤 
在线标定过程包含四个步骤。 
 
 
1. 检查相机输入 
此阶段需检查相机输入图像的质量，若相机图像质量不理想（颜色不对、有杂讯等）或完全无图像输出，则需 依
生产流程检查线材连接或更换相机模组，并重启系统。请依序按下 Inspect OK 按钮，检查四台相机。 
 
 
 
2. 模式检测 
在此阶段，您应从相机安装公差检查开始，以检查相机安装角度是否正确。您应在相机图像上检查通用版本 标定
数据的 ROI 和参考点（用橙色绘制） 。如果相机图像中的图案与 ROI 和参考点相距太远，则相机支架可能存在一
些安装错误。您应调整相机支架并重新启动在线标定过程。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 102

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
102 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
 
完成容差检查后，您应按下“检测”按钮。应用程序将自动检测 ROI 内的参考点并将其绘制为绿色。您应目视检
查参考点是否被正确检测到。在某些极端环境条件下（极端光源、图案被某些障碍物覆盖等） ，检测可能会失败，
并会显示红色 ROI。您应检查并修复环境问题，然后重新检测参考点。 
 
 
 
成功检测到四个摄像机上的参考点后，按下标定按钮开始标定过程。 
 
3. 标定 
计算新的 AVM 标定参数需要 7~8 秒。 （自动调谐关闭时需要 2~3 秒） 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 103

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
103 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
4. 检查结果 
AVM 图像已应用于新标定的参数。您应目视检查结果并确定质量是否足够好。如果您接受标定结果，请按“完成”
按钮以完成整个在线标定过程。新参数将应用于系统（param_new.bin、param_pd_new.bin） 。如果您不接受结
果，请按“重新启动”按钮并重新完成整个过程。 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 104

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
104 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
7 标定步骤 
本章简要介绍如何逐步进行 AVM 标定。 
 
0. 准备 
• 以下步骤基于 MTK AVM 守护进程。我们强烈建议首先建立联发科 AVM 环境： 
– AVM 守护进程 
– AVMDemo 应用程序 
– AVM标定应用程序 
 
1. 相机标定 
 
生成每个相机镜头模型的固有参数，并用于去畸变鱼眼图像。 
生成内参（intrinsic.xml）有两种方法： 
• 可以从制造商处获取相机规格和镜头场曲率数据的内在生成工具。 
• 相机标定工具，供普通用户通过手动捕捉棋盘图像进行标定。 
 
注意：我们建议对每个镜头型号进行标定。 
（例如，如果车辆上安装了两种镜头型号（A 和 B） ，则应运行标定过程并获取 A 和 B 的 2 组固有数据） 
 
2. AVM 标定 
 
计算每个安装的摄像机的参数，包括如何将摄像机图像投射到地面。 
• 创建您自己的项目。 （它可能与 AVM 标定示例克隆） 
AVMCalib 
|   ├── {your_project} 
|   |   ├── input 
|   |   |   ├── BEV.png 
|   |   |   ├── front.png 
|   |   |   ├── intrinsic.xml 
|   |   |   ├── left.png 
|   |   |   ├── patSetting.xml 
|   |   |   ├── rear.png 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 105

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
105 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
|   |   |   └── right.png 
|   |   └── avmSetting.xml 
 
• 根据客户要求创建 BEV 图像。请参阅 BEVInput 部分。您可能需要检查以下设置： 
– 车辆规格 
– 图案类型/尺寸 
– 摄像机角度和位置 
• 将 avmSetting.xml 替换为您的车辆/相机规格。请参阅了解 avmsetting.xml。您可能需要检查 <InputSetti
ng> 中的这些字段： 
– <CamInput> 
▪ <CamResoultion> 
– <BEVInput> 
▪ <Filename> 
▪ <Frustum> 
– <CarDimension> 
• 用上一步相机标定的输出替换intrinsic.xml。 
• 从车辆收集摄像机图像并将其放入输入文件夹。 
– 如何从 AVM 守护进程捕获。 
– 默认文件命名是front.png、left.png、right.png和rear.png。 
• 修改patSetting.xml 
– 注释工具可以帮助您生成/修改 patSetting.xml。注意：当前版本仅支持棋盘图案。 
– 设置可靠的 ROI 矩形和相关模式类型。详细信息请参阅了解 patSetting.xml 部分。 
– 注意：由于内联标定依赖于 ROI 矩形设置来检测每辆车上的模式，因此 ROI 矩形不应设置为“太适合”
您的模式，否则内联标定可能会因在错误的 ROI 中未检测到模式而失败。 
• 运行AVMCalib.exe并生成bin文件（param.bin和param_pd.bin）。 
– 使用你的项目执行 AVMCalib.exe 
– AVMCalib {你的项目}\avmSetting.xml 
 
3. 在线标定 
为了克服相机规格公差和安装误差，每辆车在运输前都应进行在线标定。因此，在生成 AVM bin 文件后，我们需
要设置在线标定配置。 
• 设置 AVM 标定 bin 文件 (param.bin 和 param_pd.bin) 的两种方法。 
– Build image phase: 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 106

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
106 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
▪ 在构建 Android 映像之前，将 bin 放入 /vendor/mediatek/proprietary/hardware/mtkcam_sec_li
b/mtkavm/avmdaemon/spm/calibdata。 
– Integration phase (with ADB root): 
▪ adb root; adb wait-for-device; 
▪ adb remount; 
▪ adb push param.bin /mnt/mtkdata/avmdata; 
▪ adb push param_pd.bin /mnt/mtkdata/avmdata 
• 按照在线标定车轮轨迹线为每辆车生成并保存 bin 文件。 
 
常见问题 
 
相机标定 
应该拍摄多少张照片才能保证质量？ 
所需图像总数没有绝对限制。唯一的要求是在捕捉图案图像时尽量覆盖相机视野的大部分区域。在此基础上，越
多越好…… 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 107

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
107 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
8 演示应用程序 
 
 
AVM SDK 包含两个 Android 应用程序，用于演示 SDK 的实际用例。 
• AVMDemo 允许您在不同的 AVM 视图之间切换，这是 AVM 守护进程的一个用例。 
• AVMCalibration 允许您执行基本的在线标定过程。这演示了在线 AVM 标定库和点检测库的实际用例。 
 
还提供了额外的命令行工具 mtkavmclient，以便通过简单命令控制 AVM 守护进程。这可用于调试或测试目的。 
 
以下部分解释了这两个 Android 应用程序背后的设计原理，以帮助您将守护进程和库集成到您自己的应用程序设
计中，并为命令行实用程序提供使用示例。 
 
8.1 AVM 演示 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 108

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
108 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
AVMDemo 是一款 Android 应用，用于演示 Android 平台上的 AVM 集成。这是一款简单的 Android 应用，
只有一个活动。它演示实时摄像头视图和指导，并允许用户使用工具栏在不同的 AVM 显示模式之间切换。 
 
应用程序启动 
如何启动 Android AVM 应用程序： 
• 使用 Android 启动器并点击/单击 AVMDemo 应用程序图标。 
 
视图切换 
点击或单击屏幕左侧的应用程序工具栏可在不同的显示模式之间切换。下图说明了工具栏中每个按钮的功能：  
 
 
 
显示模式的名称仅供说明之用。下表概述了每种显示模式的用途： 
 
显示模式 内容 目的 
Normal 前/后摄像头图像及顶视图 停车辅助 
Wide 经过畸变校正的后置摄像头图像 驾驶辅助 
Side 左/右摄像头图像及裁剪视图 检查轮辋以进行停车或检查车舱 
Top 放大前/后顶视图 停车和拖车停车援助 
3D 虚拟车辆的 3D 摄像机视图 停车辅助 
Free 3D 不断旋转的 3D 相机 仅演示 
 
要自定义每个显示模式中的视图布局，请参阅布局自定义页面。 
 
除了模式切换按钮之外，还有其他按钮，包括： 
• 退出应用程序：点击此按钮可离开 AVMDemo 应用程序。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 109

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
109 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• 3D 显示模式下的相机图标：点击这些相机图标可切换到每个带有动画的相机位置。相机位置和动画可以自定
义，如 3D 相机页面中所述。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 110

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
110 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
设计概述 
此演示应用程序与普通的 Android 应用程序不同。AVM 显示不是演示应用程序的一部分。 
 
显示布局 
此演示应用不控制 AVM 显示的布局。事实上，它不渲染 AVM 显示。AVM 显示由 AVM 守护进程渲染，如系统
概述中所述。演示应用仅定义工具栏，然后将其与 Android 系统 UI 一起合成在 AVM 屏幕的顶部。下图对此进
行了说明： 
 
 
 
要更改 UI 布局，您必须更改两个布局配置： 
1. 工具栏的布局，由应用程序的布局 XML 控制 
2. AVM 显示的布局，由布局配置文件 default_config.json 控制。 
 
因此，AVMDemo APK 只是向 AVM 守护进程发送消息来控制 AVM 显示的可见性。 
 
消息协议以 JNI 辅助库的形式实现。Java 应用程序代码是一个薄包装器，可将 UI 输入重定向到辅助库。 
 
有关应用程序和 AVM 守护进程之间的整体组合机制，请参阅显示组合部分。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 111

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
111 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
连接到 AVM 守护程序 
此应用程序通过 Linux Abstract Namespace Socket 连接到 AVM Daemon。守护进程创建两个域套接字： 
• 允许客户端（例如此演示应用）设置可见性和切换视图模式的命令套接字。套接字路径为  \0com.mediatek.
mtkfastavm/command。 
• 信息套接字，允许客户端从守护进程注册重要事件。例如，当守护进程准备好显示  AVM 帧时，守护进程会
通过套接字发送 AVM_NOTIFY_READY_SHOW 事件。套接字路径为 \0com.mediatek.mtkfastavm/info。 
 
JNI 本机库用于域套接字连接。这些套接字不可共享。因此，客户端必须相互合作以确保  AVM 守护程序可访问。
策略是： 
• 信息套接字始终被 AVM 演示应用程序占用，因为它必须监视反向开关的状态。 
• 命令套接字在所有客户端之间共享。当 AVM 演示应用程序不在 Android 活动堆栈顶部时，它必须断开与命
令套接字的连接。只有当命令套接字再次可见时，应用程序才会重新连接到命令套接字。  
 
这导致了一个限制：当 AVM Demo 应用程序在前台可见时，mtkavmclient 命令行实用程序不起作用。 
 
下图展示了 AVM 守护进程与其客户端通过套接字连接之间的交互： 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 112

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
112 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
源代码 
演示应用程序的源树如下表所示： 
avmdemoapk 
├── AndroidManifest.xml 
├── Android.mk 
├── jni 
├── res 
└── src/com/mediatek/avm 
其中： 
• Android.mk是构建系统配置文件。此 apk 是在 Android 源代码树中构建的，而不是在 Gradle 构建系统中
构建。 
• AndroidManifest.xml 是标准的 Android 应用程序清单文件。 
• jni 是与 AVM 守护进程通信的 JNI 帮助库的源代码。 
• res 是标准的Android应用程序资源目录。 
• src/com/mediatek/avm 存储所有 java 源文件。 
 
全局事件接收器 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 113

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
113 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
应用程序的 AndroidManifest.xml 将全局事件接收器 .AvmGlobalsReceiver 注册到 android.intent.action.BO
OT_COMPLETED 事件。这会导致在 Android 框架准备就绪时执行应用程序 AvmApp。然后，AvmApp 类委托
给 AvmGlobals 类，该类监视来自 JNI 本机库的事件。 
 
一旦 EVENT_DRIVE_REAR_ENABLE_FROM_AVM_SERVER 事件到达，AvmGlobals 类就会通过启动 MainActiv
ity 类来启动工具栏活动。 
@Override 
public void handleMessage(Message msg) { 
    Log.d(TAG, "handleMessage: " + msg.what); 
    switch (msg.what) { 
        case Constants.EVENT_DRIVE_REAR_ENABLE_FROM_AVM_SERVER: 
            if (mContext != null) { 
                Log.d(TAG, "handleMessage: start MainActivity"); 
                Intent intent = new Intent(mContext, MainActivity.class); 
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_NO_ANIMATION); 
                intent.putExtra(Constants.LAUNCH_REASON, 
                                Constants.commandsToString( 
                                Constants.EVENT_DRIVE_REAR_ENABLE_FROM_AVM_SERVER).toString()); 
                mContext.startActivity(intent); 
            } 
            break; 
        default: 
            Log.d(TAG, "handleMessage: no handle message"); 
    } 
} 
 
工具栏事件处理程序 
应用程序工具栏的主要逻辑可以在 src/com/mediatek/avm/MainActivity.java 中找到。它定义了主活动类 com.
mediatek.avm.MainActivity。活动类只是使用方法 sendAVMCommandById 将 UI 点击事件重定向到底层 JNI 
辅助库： 
 
    public void onClick(View v) { 
        // ...omitted... 
        // activate the clicked button 
        final int id = v.getId(); 
        activateChild(mButtonBar, id); 
 
        // ...omitted... 
 
        // Send mode switch command to AVM daemon 
        // after UI update. 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 114

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
114 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
        mHandler.postDelayed(new Runnable(){ 
            @Override 
            public void run() { 
                sendAVMCommandById(id); 
            }}, 1); 
    } 
 
JNI helper library在 jni 子目录中实现： 
• avm_jni.cpp 管理套接字连接和 Java-C++ 互操作。 
• avm_client.cpp 构造消息。消息格式由 AVM 守护进程定义。 
 
常见问题 
可以将 AVM 显示视为 Android 应用程序中的 SurfaceView 吗？ 
否。当前设计在 Android SurfaceFlinger 准备就绪之前分配 AVM 显示缓冲区。目前，无法将缓冲区作为有效表
面传回 SurfaceFlinger。 
 
8.2 AVMCalarion 系统 
 
 
AVMCalibration 是一款 Android 应用，它演示了可用于工厂生产线标定 AVM 参数的在线标定过程。 
 
请参阅在线标定页面以了解如何使用此演示应用程序。 
 
设计概述 
AVMCalibration 应用程序的目的是展示在线标定工作流程的示例。下图是对在线标定过程的回顾： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 115

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
115 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
 
标定过程是 SDK 标定功能的实际用例。我们在 SDK 中提供了 2 个本机库来支持内联标定工作流程。此外，AVM 
视图的显示是 AVM 守护程序的职责，与 AVMDemo 应用程序相同。 
 
因此，AVMCalibration 应用程序是这些模块的薄包装： 
 
• 点检测库 (/system/lib64/libmtkavmpd.so) 提供从实时相机图像中检测点几何图形的功能。这是上图中的
第 2 步。当前实现检测 4x3 黑白棋盘图案。点检测库的输出是一组不同点之间的映射关系。该组点称为点云。
您可以将其替换为您的实现，以检测不同的标定图案，例如圆形图案，并将点云输出到 AVM 标定库（第 3 
步） 。 
• AVM 标定库 (/system/lib64/libmtkavmcalib.so) 根据前面步骤检测到的点云计算标定参数。然后将标定参
数存储为不透明缓冲区。这是上图中的第 3 步。此库以二进制格式发布。 
• AVM 守护进程 (/system/bin/mtkfastavm) 根据 AVMCalibration 应用程序发送的命令显示不同的摄像头
视图。它还提供命令接口，允许预览新标定参数的输出。 
 
可以用下面的框图来总结： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 116

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
116 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
以下文件树显示了 SDK 中的相关文件： 
 
├── avmcalibapk 
│   ├── AndroidManifest.xml 
│   ├── Android.mk 
│   ├── jni 
│   │   ├── Android.mk 
│   │   ├── avm_calibration_client.cpp 
│   │   ├── avm_calibration_client.h 
│   │   ├── avm_calibration_jni.cpp 
│   │   └── avm_calibration_jni.h 
│   ├── res 
│   └── src 
│       └── com 
├── avmalgo 
│   ├── Android.mk 
│   ├── arm 
│   │   ├── libmtkavmcalib.so 
│   │   ├── libmtkavmpd.so 
│   │   └── libmtkavm.so 
│   ├── arm64 
│   │   ├── libmtkavmcalib.so 
│   │   ├── libmtkavmpd.so 
│   │   └── libmtkavm.so 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 117

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
117 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
│   └── inc 
│       ├── avm_calib.h 
│       ├── avm_param.h 
│       ├── avm_point_detector.h 
│       ├── avm_runtime.h 
│       └── avm_types.h 
其中： 
• avmcalibapk 存储 AVMCalibration 应用程序的 Android 应用程序源。 
• avmcalibapk/jni 存储 JNI 库的源代码。此库依赖于 avmalgo 目录中的模块 
• avmalgo 目录存储 AVM 标定库和 AVM 运行库的头文件（inc）和预构建二进制文件（arm 和 arm64）。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 118

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
118 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
申请活动 
AVMCalibration 演示应用程序包含几个活动： 
 
 
 
我们在以下章节中简要介绍每个活动： 
 
启动并检查 
LaunchActivity 是一个简单的activity，有 1 个按钮，用于启动检查活动。此活动是在线标定过程的起点。单击其
他活动中的“重新启动”按钮将带您返回此起点。 
 
InspectActivity 通过向 AVM 守护程序发送命令来显示来自不同摄像头的预览图像。这允许您确认摄像头是否正
确连接到系统。例如，如果您单击左按钮，活动将发送以下命令： 
mJniHelper.sendAvmCalibrationCommand(Constants.EVENT_CAPTURE_VIDEO_FROM_LEFT_CAMERA); 
mJniHelper.sendAvmCalibrationCommand(Constants.EVENT_VIDEO_DISPLAY_PREVIEW_TO_AVM_SERVER); 
 
然后，AVM 守护程序会在屏幕上显示左侧摄像头的预览图像。请注意，摄像头预览显示的布局是  AVM 守护程序
的配置。AVMCalibration 应用程序无法确定其布局。 
 
捕获和点检测 
CaptureActivity 允许用户捕获相机图像，然后检测图像上的特征点，以便进行后续的 标定过程。通过单击“捕获”
按钮，此活动委托给一个简单的 SplashActivity，该 SplashActivity 在后台 AsyncTask 中执行相机捕获和点检测： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 119

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
119 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
    // ...omitted... 
    @Override 
    protected Boolean doInBackground(Void... voids) { 
        mJniHelper.sendAvmCalibrationCommand(Constants.EVENT_CAPTURE_IMAGE_FROM_CURRENT_CAMERA); 
 
        switch (cam_id) { 
        case 0: 
            mJniHelper.sendAvmCalibrationCommand(Constants.EVENT_FIND_FRONT_IMAGE_POINTS); 
            break; 
        case 1: 
            mJniHelper.sendAvmCalibrationCommand(Constants.EVENT_FIND_LEFT_IMAGE_POINTS); 
            break; 
        case 2: 
            mJniHelper.sendAvmCalibrationCommand(Constants.EVENT_FIND_RIGHT_IMAGE_POINTS); 
            break; 
        case 3: 
            mJniHelper.sendAvmCalibrationCommand(Constants.EVENT_FIND_REAR_IMAGE_POINTS); 
            break; 
        } 
        mGraphicsView.updateParamsFromConfigWithCamId(cam_id); 
        mFindRP = mGraphicsView.getmFindresult(); 
        Log.i(TAG, "mFindRP = " + mFindRP); 
        return true; 
    } 
 
JNI 辅助库将摄像头捕获请求绕过 AVM 守护进程。这是由 avm_calibration_jni.cpp 中的 sendAvmCalibration
Command() 实现的： 
 
case EVENT_CAPTURE_IMAGE_FROM_CURRENT_CAMERA: 
    socket_buf = (char *)malloc(1920*1080*4); 
    sendMsg(AVM_MSG_DUMP_VIEW, 1, socket_buf); 
    save_data_to_png(socket_buf); 
    free(socket_buf); 
    socket_buf = NULL; 
    break; 
 
AVM 守护进程不会写入磁盘。相反，捕获的图像会传回 Android 应用程序的 JNI 帮助程序，以 PNG 格式压缩
并保存到磁盘。出于安全原因，所有文件创建和修改均由 Android 应用程序完成，而不是 AVM 守护进程。Andr
oid 应用程序具有写入 AVM 配置数据路径 (/mnt/mtkdata/avmdata) 的系统权限。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 120

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
120 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
相机图像被捕获后，会将其传递给本机函数 findPoints()。 findPoints() 函数通过调用点检测库的 API avm_pd_
detect_point 来执行特征点检测。 检测到的特征点和相关的感兴趣区域矩形随后会显示在 GraphicsView 视图上。 
 
GraphicsView 是一个自定义视图，位于 AVM 守护进程的输出区域之上。其 onDraw() 方法绘制检测到的特征点，
并用红色标记无效的感兴趣区域以通知用户。 
 
下图说明了 AVM 守护进程和 CaptureActivity 之间的 z 顺序： 
 
 
 
标定 
一旦所有特征点准备就绪，它们将被发送到 CalibrationActivity 以通过以下对 JNI 帮助库的调用来生成新的标定
参数： 
@Override 
protected Boolean doInBackground(Void... voids) { 
    mJniHelper.sendAvmCalibrationCommand(Constants.EVENT_SAVA_PARAM_PD_BIN_TO_NATIVE_LIB); 
    mJniHelper.sendAvmCalibrationCommand(Constants.EVENT_CALIBRATE_TO_NATIVE_LIB); 
    return true; 
} 
 
JNI 辅助库将标定计算委托给 AVM 标定库。这是由 avm_calibration_jni.cpp 中的 calibrate() 函数实现的。有关 
AVM 标定库 API 的使用，请参阅标定模块页面。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 121

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
121 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
然后，AVMCalibration 应用程序将不透明参数作为临时文件写入 AVM 数据目录 (/mnt/mtkdata/avmdata)，
并继续执行下一个活动。 
 
结果验证 
VerifyActivty 将临时标定参数发送到 AVM 守护进程以进行结果预览。 
 
单击“重新启动”按钮后，临时文件将被丢弃，应用程序将返回到启动活动 LaunchActivity。 
 
如果单击“完成”按钮，此活动会将临时参数文件重命名为 AVM 守护程序分配的有效参数文件名。如果存在，A
VM 守护程序会加载新的参数文件。 
 
故障排除 
深入解析Android P的TapPoint检测 
我们在开发过程中发现一个 Google 问题，它存在于多个 Activity 的透明层上。如果我们在 AVM 标定 APP 中双
击按钮，它会跳转到汽车启动器或后台菜单（汽车启动器）中的某个应用程序。  
/frameworks/base/services/core/java/com/android/server/wm/TaskPositioningController.java  
 
Android P： 
void handleTapOutsideTask(DisplayContent displayContent, int x, int y) { 
    mHandler.post(() -> { 
        int taskId = -1; 
        synchronized (mService.mWindowMap) { 
            final Task task = displayContent.findTaskForResizePoint(x, y); 
            if (task != null) { 
                if (!startPositioningLocked(task.getTopVisibleAppMainWindow(), true /*resize*/, 
                        task.preserveOrientationOnResize(), x, y)) { 
                    return; 
                } 
                taskId = task.mTaskId; 
            } else { 
                taskId = displayContent.taskIdFromPoint(x, y); 
            } 
        } 
        if (taskId >= 0) { 
            try { 
                mActivityManager.setFocusedTask(taskId); 
            } catch (RemoteException e) { 
            } 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 122

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
122 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
        } 
    }); 
} 
 
该问题已在 Android Q 中修复： 
void handleTapOutsideTask(DisplayContent displayContent, int x, int y) { 
        mHandler.post(() -> { 
            synchronized (mService.mGlobalLock) { 
                final Task task = displayContent.findTaskForResizePoint(x, y); 
                if (task != null) { 
                    if (!startPositioningLocked(task.getTopVisibleAppMainWindow(), true /*resize*/, 
                            task.preserveOrientationOnResize(), x, y)) { 
                        return; 
                    } 
                    try { 
                        mActivityManager.setFocusedTask(task.mTaskId); 
                    } catch (RemoteException e) { 
                    } 
                } 
            } 
        }); 
    } 
 
我们尝试基于 Android Q 进行修复：（我们的 Android P 补丁） 
void handleTapOutsideTask(DisplayContent displayContent, int x, int y) { 
    mHandler.post(() -> { 
        //int taskId = -1; 
        synchronized (mService.mWindowMap) { 
            final Task task = displayContent.findTaskForResizePoint(x, y); 
            if (task != null) { 
                if (!startPositioningLocked(task.getTopVisibleAppMainWindow(), true /*resize*/, 
                        task.preserveOrientationOnResize(), x, y)) { 
                    return; 
                } 
 
                try { 
                    mActivityManager.setFocusedTask(task.mTaskId); 
                } catch (RemoteException e) { 
                } 
                //taskId = task.mTaskId; 
            }/* else { 
                taskId = displayContent.taskIdFromPoint(x, y); 
            }*/ 
        } 
        /*if (taskId >= 0) { 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 123

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
123 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
            try { 
                mActivityManager.setFocusedTask(taskId); 
            } catch (RemoteException e) { 
            } 
        }*/ 
    }); 
} 
 
请注意透明层问题，您可以根据需要尝试此修补程序。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 124

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
124 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
8.3 AVM 客户端实用程序 
AVM 客户端实用程序 
mtkavmclient 命令行实用程序可用于测试来自 AVM Daemon 的所有控制和响应消息。程序源代码位于 <Base>
/vendor/mediatek/mt2712/mtkavm/avmdaemon/avmclientdemo，它会生成一个可执行文件 mtkavmclien
t。 
 
您可以使用此程序来测试控制消息以进行调试。例如，您可以： 
• 启动/停止 AVM 守护进程的显示 
• 在 AVM 显示模式之间切换 
• 在 3D AVM 模式下更改 3D 相机位置 
• 模拟反向开关信号 
• 显示原始相机输入图像 
• 将相机输入图像转储到 PNG 文件 
• 将 AVM 显示转储到 PNG 文件 
• 改变 3D 车辆的颜色和透明度 (v2.2 中的新功能) 
• 改变 3D 车辆的门和灯的状态 (v2.2 中的新功能) 
 
请注意，客户端应用程序与 AVM Daemon 之间的连接是互斥的。客户端应用程序包括 mtkavmclient、AVM D
emo 和 AVM Calibration。 
 
因此，在使用此命令行工具之前，您必须关闭 AVMDemo 或 AVMClibration。或者，您可以使用以下 shell 命
令强制停止这些应用程序： 
am force-stop com.mediatek.avm 
am force-stop com.mediatek.avmcalibration 
 
用法 
您可以使用以下命令来测试所有控制消息。[输出路径] 是仅适用于某些消息类型的可选参数： 
mtkavmclient <message type> <message info> [output path] 
 
例如，您可以使用以下命令启动/停止 AVM 守护程序： 
mtkavmclient 0 1 //start avm daemon 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 125

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
125 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
mtkavmclient 0 0 //stop avm daemon 
 
您可以使用以下命令转储每四个摄像机的图像： 
mtkavmclient 1 5                          //switch to camera preview mode 
mtkavmclient 3 0                          //switch preview camera to front camera 
mtkavmclient 4 1 /data/front_camera       //dump front camera view to `/data/front_camera.png` 
mtkavmclient 3 1                          //switch preview camera to left camera 
mtkavmclient 4 1 /data/left_camera        //dump left camera view to `/data/left_camera.png` 
mtkavmclient 3 2                          //switch preview camera to right camera 
mtkavmclient 4 1 /data/right_camera       //dump right camera view to `/data/right_camera.png` 
mtkavmclient 3 3                          //switch preview camera to rear camera 
mtkavmclient 4 1 /data/rear_camera        //dump front camera view to `/data/rear_camera.png` 
 
或者你可以使用以下命令一次转储所有四个摄像头： 
mtkavmclient 1 5                 //switch to camera preview mode 
mtkavmclient 4 0 /data/cam       //dump all 4 cameras to /data/cam0.png ~ cam4.png 
 
请注意，.png 后缀是自动添加的。 
有关控制和响应消息的规范，请参阅AVM守护进程模块。 
下表列出了您可以使用的所有消息类型和相应的参数。 
 
展示 
类型 争论 输出路径 描述 
0 0 不适用 停止 AVM Daemon 显示 
0 1 不适用 启动AVM Daemon显示 
 
例如，要启动 AVM 显示，请使用以下命令： 
mtkavmclient 0 1 
 
显示模式 
显示模式由 default_config.json 定义，如布局页面中所述。每种显示模式承载不同的视图类型。使用 mtkavmcli
ent 1 [mode_index] 在不同显示模式之间切换。请注意，值为 0 的 mode_index 是特殊的：它是 AVM 守护进
程的默认显示模式。 
 
参考设计中的显示模式列表 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 126

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
126 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
下表描述了参考设计中不同模式的含义。有些模式是为演示应用程序设计的，而其他模式是为在线 标定应用程序
或用于调试目的设计的。 
 
类型 模式索引 输出路径 由应用程序使用 描述 
1 0 不适用 AVM 演示 切换到模式0，这是参考设计中的正常模式。 
1 1 不适用 AVM 演示 切换到模式1，参考顶部显示模式。 
1 2 不适用 AVM 演示 切换到模式2，参考侧显示模式。 
1 3 不适用 AVM 演示 切换到模式3，参考宽显示模式。 
1 4 不适用 AVM 演示 切换到模式 4，即参考第二显示模式，外部显示屏上显示两个侧视图。 
1 5 不适用 - 切换到模式 5。此模式显示原始相机输入以用于调试目的。 
1 6 不适用 AVM 标定 切换到模式 6。AVM 标定应用程序使用此视图预览单个摄像头图像。 
1 7 不适用 AVM 演示 切换到模式7，固定摄像机位置的3D显示模式。 
1 8 不适用 AVM 演示 切换到模式 8，具有动态摄像头位置和触摸输入支持的自由 3D 显示模式。 
1 9 不适用 AVM 演示 
切换到模式 9，比较光度标定的开启/关闭效果。AVM Demo 将此用作附
加模式之一。 
1 10 不适用 AVM 演示 
切换到模式 10，这是布局动画的演示，是 AVM Demo 中的额外模式之
一。 
1 11 不适用 AVM 标定 
切换到模式 11，由 AVM 标定应用程序在验证页面中使用，以显示顶视图
和放大的正面顶视图。 
1 12 不适用 AVM 标定 
切换到模式 12，由 AVM 标定应用程序在验证页面中使用，以显示顶视图
和放大的后侧顶视图。 
1 十三 不适用 - 
切换到模式 13，以 TOPVIEW_3D 视图模式实现的顶视图，具有较小的相
机 FOV。 
1 14 不适用 - 
切换到模式 14，以 TOPVIEW_3D 视图模式实现的顶视图，具有更大的相
机 FOV。 
1 15 不适用 - 
切换到模式15，这种调试显示模式和模式7类似，响应3D相机位置，但是
相机动画路径的计算方式不同。 
1 16 不适用 AVM 演示 切换到模式16，显示4个摄像头输入图像。 
1 17 不适用 AVM 演示 
切换到模式 17，以 SIDE_3DVIEW 视图模式实现的侧视图，具有内置摄像
头视角。 
1 18 不适用 AVM 演示 
切换到模式 18，以 SIDE_3DVIEW 视图模式实现的侧视图，具有内置摄像
机视角和用户定义的摄像机视角。 
1 19 不适用 AVM 演示 
切换到模式 19，以 USER_CAM_3DVIEW 视图模式实现的 3D 视图，具有
多个用户定义的摄像机视角。 
 
切换显示视图模式会立即隐式启动 AVM 显示。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 127

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
127 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
例如，要检查参考设计中的“顶视图”显示模式，请使用以下命令： 
mtkavmclient 1 1 
 
要添加、删除或修改每种显示模式的布局，请参阅显示布局自定义页面。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 128

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
128 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
更改 3D 相机位置 
您可以使用客户端实用程序在不同的预定义摄像机位置之间切换。 
 
类型 争论 输出路径 描述 
7 3D camera index 不适用 在相机索引之间切换。有效的相机索引范围由 3D 资产文件定义。 
 
请注意，您必须处于模式 7（带固定摄像头的 3D 显示）才能获得可见的结果。 
 
模拟反向开关 
 
这模拟了 EVB 上的倒车开关。主要用于调试。这可在前档和后档模式之间切换 AVM 显示屏。 
 
模拟车门状态 
您可以使用以下命令模拟 3D 车辆的门打开/关闭： 
 
 
 
以下命令将切换到“Free 3D view”模式，并打开车辆的右侧车门。默认的 3D 车辆模型支持车门动画，因此发
送这些命令后您应该能够看到车门打开。此外，车门打开后，AVM 摄像头图像会变成灰色块。 
mtkavmclient 1 8 
mtkavmclient 10 0 1 
mtkavmclient 10 1 1 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 129

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
129 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
模拟车辆灯光状态 
您可以使用以下命令模拟 3D 车辆的灯光开/关状态： 
 
 
 
以下命令切换到“Free 3D view”模式，并打开前照灯和左转向灯。 
mtkavmclient 1 8 
mtkavmclient 11 1 1 
mtkavmclient 11 6 1 
 
模拟车辆后视镜状态 
由于大多数侧视摄像头都安装在后视镜上，因此当后视镜关闭时，AVM 服务会自动将左/右摄像头图像变为灰色
块。请注意，当前的 3D 车辆模型未实现后视镜状态变化的动画。 
 
 
以下命令切换到“Free 3D view”模式，并打开前照灯和左转向灯。 
mtkavmclient 1 8 
mtkavmclient 16 0 1 
 
改变 3D 车辆颜色 
内置的演示 3D 车辆模型支持 2 种不同的颜色。您可以使用以下命令在这些颜色之间切换： 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 130

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
130 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
以下命令切换到“Free 3D view”模式，并通过将颜色索引设置为 1 将内置 3D 演示模型更改为不同的颜色。 
mtkavmclient 1 8 
mtkavmclient 21 1 
 
更改 3D 车辆透明度 
内置的演示 3D 车辆模型支持 10 级透明度。 
 
 
以下命令切换到“Free 3D view”模式，并通过将颜色索引设置为 3 将内置 3D 演示模型变为半透明。请注意，
当车辆的透明度索引设置为非 0 时，不透明地板图像将设置为不可见。 
mtkavmclient 1 8 
mtkavmclient 22 3 
 
原始相机图像 
 
 
默认参考实现在 AVM 显示屏上显示原始相机输入。这对于检查相机是否正常工作很有用。请注意，您必须先切
换到原始相机视图模式（模式 5）。 
以下命令显示后置摄像头的原始输入： 
mtkavmclient 1 5 
mtkavmclient 3 3 
 
保存 PNG 文件 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 131

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
131 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
请注意，.png 会自动附加到输出路径。例如，要检查前置摄像头的原始摄像头输入并将其转储到  PNG 文件，请
使用以下命令： 
mtkavmclient 1 5 
mtkavmclient 3 0 
mtkavmclient 4 1 /data/avm/front 
 
结果是 /data/avm/front.png 文件被保存。 
 
在运行时修改视角 
AVM 演示了多种 2D 和 3D 显示模式，其中大多数允许您在运行时微调视角。下表显示了哪些视图类型支持视角
修改。 
在 default_config.json 中输入名
称 
如何/在哪里定义默认视角 可以在运行时修改视角吗？ 
"RAWCAMERA_VIEW" 在 default_config.json 中定义rect 是的。 
"FISHEYE_VIEW" 在 default_config.json 中定义rect 是的。 
"UNDISTORT_VIEW" 在 default_config.json 中定义rect 是的。 
"FREEFORM_VIEW" 在 default_config.json 中定义src_
quad 
不可以。src_quad是任意四边形，用户不可以修改它。 
"TOPVIEW" 在 default_config.json 中定义视
锥体 
是的。 
"FIX_3DVIEW" AVMViewFix3DView中定义 不可以。 
此视图演示了相机动画路径。不允许用户在运行时修改任何相
机姿势。 
"INTRO_3DVIEW" AVMViewIntro3DView中定义 不可以。 
此视图是一个“开场动画”演示，带有程序控制的一次性相机
动画和布局动画，不允许用户在运行时修改任何相机姿势。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 132

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
132 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
"FREE_3DVIEW" AVMViewFree3DView中定义 不可以。 
此视图演示了相机围绕固定中心点旋转一圈。不允许用户在运
行时修改任何相机姿势。 
"TOPVIEW_3D" AVMViewTop3DView中定义 否。 
此视图演示了模拟 2D AVM 结果的固定相机位置。不允许用户
在运行时修改任何相机姿势。 
"ORBIT_3DVIEW" AVMViewOrbit3DView中定义 不可以。 
此视图演示了圆形相机动画路径。不允许用户在运行时修改任
何相机姿势。 
"USER_CAM_3DVIEW" 在 default_config.json 中定义摄
像头 
是的。 
SIDE_3DVIEW 在default_config.json中定义摄像
头 
是的。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 133

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
133 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• 平移视角 
类型 查看 ID 价值 描述 
34 指定要翻译的视图 对于 2D 显示，值为视图宽度的 %。对于 3D 显示，值为cm 。 沿 X 轴平移视图 
35 指定要翻译的视图 对于 2D 显示，值为视图高度的 %。对于 3D 显示，值为cm 。 沿 Y 轴平移视图 
36 指定要翻译的视图 对于 2D 显示，不支持。对于 3D 显示，值为cm 。 沿 Z 轴平移视图 
 
例子： 
• 在 2D 视图中移动视角（id：200） 。移动距离为沿 X 轴的视图宽度的 50%。 
mtkavmclient 34 200 50 
 
• 在 3D 视图中移动相机 (id:335)。沿 Z 轴移动 100 厘米 
mtkavmclient 36 335 100 
 
旋转视角 
 
 
例子： 
• 在 3D 视图中旋转相机 (id:335)。绕 X 轴旋转 45 度 
mtkavmclient 37 335 45 
 
缩放视角 
 
 
例子： 
• 在 2D 视图 (id:200) 中均匀缩放视角，缩放视图尺寸的 25%。 
mtkavmclient 42 200 25 
 
• 在 3D 视图 (id:335) 中均匀缩放相机视角，缩放视图尺寸的 25%。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 134

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
134 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
mtkavmclient 42 335 25 
 
 
将视角重置为默认值 
类型 查看 ID 价值 描述 
43 指定要重置的视图 – 将视角重置为默认值。 
 
mtkavmclient 43 200 
 
转储 AVM 运行时修改 
如果您在运行时修改了任何 2D/3D 视角或更改了 AVM 的设置，并希望在 AVM 守护程序重新启动后保留这些更
改。 您必须在 AVM 守护程序停止之前完成以下步骤： 
1. 发出 cmd 以要求 AVM 守护进程转储 AVM 的更改。AVM 的更改将作为 JSON 字符串返回。 
mtkavm客户端 44 
2. 应用程序有责任将 JSON 字符串保存为名为 post_config.json 的 JSON 文件。 
但是post_config.json应该保存在哪里呢？ 
该路径是预定义的。根据 AVM 守护进程的设计，所有读写文件都默认放置在 
/mnt/mtkdata/avmdata/，因此预计会在这里找到 post_config.json。 
3. 确保以上步骤完成，应用程序可以停止AVM守护进程并退出。 
下次启动 AVM 守护进程时，除了 default_config.json 之外，守护进程还将加载 post_config.json 来恢复 
AVM 的最后状态。 
 
命令列表 
注意：“参数” 代表该命令接受的参数，从 P0 开始，然后是 P1、P2，依此类推。 
命令名称 价值 参数 描述 
AVM_MSG_MODE 1 引用default_config.js
on文件中的display_m
odes，以及mode_i
d。 
mtkavmclient 0 1 启动/显示 avm display_
mode 1 
AVM_MSG_GET_ALGO_PATH 2 – – 
AVM_MSG_CAM_IDX 3 – – 
AVM_MSG_DUMP_VIEW 4 – – 
AVM_MSG_RESET_ALGO 5 – – 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 135

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
135 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
命令名称 价值 参数 描述 
AVM_MSG_R_SIGNAL_SIMULATION 6 P0: 1(后退)， 0(前进) – 
AVM_MSG_3D_CAM_IDX 7 – – 
AVM_MSG_DEBUG_PHOTOMETRIC_FLAG 8 – – 
AVM_MSG_VEHICLE_SPEED 9 P0 公里/小时 命令“mtkavmclient 9 10”将车速设置为10
公里/小时。 
AVM_MSG_VEHICLE_DOOR_STATUS 10 – – 
AVM_MSG_VEHICLE_LIGHT_STATUS 11 – – 
AVM_MSG_VEHICLE_WHEEL_RPS 12 P0：浮点数 表示车轮每秒旋转的圈数。 
请参考 mtk_avm_client_demo.cpp 中的 AV
M_MSG_VEHICLE_WHEEL_RPS 发送浮点
值。 
AVM_MSG_VEHICLE_WHEEL_STEER_ANGLE 十三 P0: int -35(左) ~ 35
(右) 
使用命令“mtkavmclient 13 x”调整前轮方
向。 
AVM_MSG_VEHICLE_GEAR_STATUS 14 P0：2（右），3
（右） 
– 
3DCAM移动CORD 15 – – 
AVM_MSG_VEHICLE_MIRROR_STATUS 16 – – 
AVM_MSG_VEHICLE_RADAR_STATUS 17 – – 
AVM_MSG_DEBUG_REG_RUNTIME_EVENT_FLAG 18 – – 
AVM_MSG_CAM_PQ_BRIGHTNESS_LEVEL 19 – – 
AVM_MSG_CAM_PQ_CONTRAST_LEVEL 20 – – 
3D_CAR_颜色 21 – – 
AVM_MSG_3D_CAR_TRANSPARENCY 22 P0 int 0(0%)~10(10
0%，不透明) 
命令“mtkavmclient 22 1”将车身透明度设
置为10%。 
AVM_MSG_CAMERA_ENABLE_FLAG 23 P0 int（相机 ID 0 ~ 
3），P1 int（0 ~ 1） 
命令“mtkavmclient 0 0”表示禁用摄像头 
0，此时来自摄像头 0 的反馈将填充 default_
config.json 中配置的摄像头错误颜色。 
AVM_MSG_PIP_WIN_MOVE_POS 24 P0: 1(动作向下)， -1
(动作移动), 0(动作向
上);  
P1 x;P2 y; 
测试命令（不包括括号和其中的字符）：  
mtkavmclient 1 20mtkavmclient 24 1 xy
（操作向下）mtkavmclient 24 -1 xy（操作
移动）mtkavmclient 24 0 xy（操作向上）A
VM 客户端捕获触摸事件并将其发送到 AVM 
服务器。AVM 服务器确定触摸点是否在 PIP
（画中画）窗口范围内。拖动只能在其范围内
进行，并且还设置了边界处理逻辑以确保 PIP 
窗口不会移出屏幕。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 136

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
136 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
命令名称 价值 参数 描述 
---- 25 – – 
---- 26 – – 
---- 27 – – 
---- 28 – – 
---- 29 – – 
记录 30 – – 
许可证信息_IMG_DIRTY 31 – – 
AVM_MSG_FLOOR_IMG_IDX 32 – – 
AVM_MSG_RESET_3D_VEHICLE 33 – – 
AVM_MSG_VIEW_ANGLE_TRANSLATE_X 34 – – 
AVM_MSG_VIEW_ANGLE_TRANSLATE_Y 35 – – 
AVM_MSG_VIEW_ANGLE_TRANSLATE_Z 36 – – 
AVM_MSG_VIEW_ANGLE_ROTATE_X 37 – – 
AVM_MSG_VIEW_ANGLE_ROTATE_Y 38 – – 
AVM_MSG_VIEW_ANGLE_ROTATE_Z 39 – – 
AVM_MSG_VIEW_ANGLE_SCALE_X 40 – – 
AVM_MSG_VIEW_ANGLE_SCALE_Y 41 – – 
AVM_MSG_VIEW_ANGLE_SCALE_UNIFORM 42 – – 
AVM_MSG_VIEW_RESET 43 – – 
AVM_MSG_DUMP_USER_MODIFY_PARAM_2_JS
ON_STR 
44 – – 
AVM_MSG_SET_ENV_HIGHT_OFFSET 45 – – 
AVM_MSG_3D_OBJECT_TRANSLATE_X 46 – – 
AVM_MSG_3D_OBJECT_TRANSLATE_Y 47 – – 
AVM_MSG_3D_OBJECT_TRANSLATE_Z 48 – – 
AVM_MSG_3D_OBJECT_SCALE_UNIFORM 49 – – 
AVM_MSG_3D_OBJECT_RESET 50 – – 
AVM_MSG_DYNAMIC_GUIDELINE_STYLE_IDX 51 – – 
AVM_MSG_STATIC_GUIDELINE_STYLE_IDX 52 – – 
AVM_MSG_3D_CAR_REFLECTION 53 – – 
AVM_MSG_WHEEL_MARKER_STYLE_IDX 54 – – 
AVM_MSG_GET_VERSION_STR 55 – – 
AVM_MSG_GUIDELINE_STYLE_IDX 56 – – 
AVM_MSG_SET_LOG_LEVEL 57 – – 
AVM_MSG_MUTE 58 P0：int 1（整个 avm 此命令用于使 AVM（全景监控）屏幕变黑。
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 137

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
137 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
命令名称 价值 参数 描述 
窗口将填充黑色）  
int 0（avm 将显示以
前显示的内容） 
AVM 绘制的所有视觉效果都将填充黑色。应
用程序可以根据需要调用此命令。 
AVM_MSG_SET_CAMERA_MUTE_COLOR 59 P0 int(相机id, 0 ~ 
3)，  
P1(Red) ，P2(Green),  
P2(Blue) ，P3(Alph
a)，  
P1到P3为浮点型，取
值范围为0.0~1.0。 
命令 mtkavmclient 59 0 1.0 0.0 0.0 1.0 将
用红色填充相机 0。请注意：3D 模式和 2D 
模式下 alpha 的处理方式有所不同。如果要
显示相同的颜色，请将 alpha 设置为 1.0。 
此处设置的颜色将覆盖 default_config.json 
中定义的当前 camera_error_color。重新启
动后，它将恢复为 camera_error_color 指定
的颜色。如果您希望使用 default_config.jso
n 中的 camera_error_color 来填充相机视
图，请使用 AVM_MSG_CAMERA_ENABLE_
FLAG。 
AVMSG_DUMP_CAMERA_IMAGES 60 P0:int 1(开始转储)int 
0(停止转储) 
– 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 138

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
138 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
9 模块 
本节介绍 AVM SDK 的重要组件。这些是涵盖的主题： 
• AVM 守护进程 
• AVM 客户端实用程序 
• AVM 点检测库 
• AVM 标定库 
 
9.1 AVM 守护进程 
AVM 守护进程 
AVM 守护进程（AVM 服务）是一个独立于 Android 系统运行的本机程序，并通过套接字与 AVM 应用程序通信，
如系统概述中所述。以下框图说明了它与 Android 应用程序和底层硬件驱动程序的交互。 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 139

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
139 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
AVM Daemon 中的组件 
AVM 守护进程的职责是： 
• 管理显示管道 
• 通过域套接字接口处理来自应用程序的请求 
• 通过域套接字接口监控车辆状态变化 
 
显示管道可以分为 4 个主要组件：相机、渲染、引导和显示。 
• Camera：从摄像头引擎管理器接收摄像头输入。摄像头组件与渲染组件分离，以允许适配不同的摄像头。  
• Render：渲染组件控制不同视图的整体布局，并从摄像头和车辆状态获取输入。然后，它将图像扭曲和拼接
委托给 AVM 运行时库，以生成摄像头、2D 或 3D AVM 图像。 
• Guideline：该模块使用 OpenGL 将车辆行驶引导线叠加在渲染组件的输出上。引导线与渲染组件分离，以
允许不同的车辆模型实现和不同的引导线视觉样式。 
• Display：将合成的 AVM 屏幕图像发送到显示设备。它从渲染和指导组件获取输出并将它们传递给 Surface 
Flinger。 
 
 
 
其他组件包括： 
• Configuration：允许系统供应商使用静态配置文件定制守护进程配置。 
• Buffer Management：DMA 缓冲区管理在显示管道中的组件之间传递图像缓冲区。 
• Life cycle and state management：控制 AVM 守护进程的生命周期和可见性状态。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 140

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
140 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
AVM Daemon 的主要组件如下图所示： 
 
 
二进制文件和文件路径 
在运行时阶段，AVM 服务是执行 mtkfastavm 的单个进程。可执行文件动态链接到图形库 libmtkavmproc.so 
和 AVM 运行时库 libmtkavm.so。 
 
模块名称 二进制名称和位置 功能 
AVM daemon /system/bin/mtkfastavm 生命周期控制和显示管道管理。 
AVM guideline and graphics librar
y 
/system/lib64/libmtkavmproc.so 
GPU 初始化和动态车轮轨迹线 
AVM runtime /system/lib64/libmtkavm.so 图像拼接和变换算法实现 
 
在初始化期间，AVM 守护进程将解析以下资产和配置文件，并将部分信息绕过指导模块和 AVM 运行时库： 
文件 设备上的路径 目的 
Calibration P
arameters 
/mnt/mtkdata/avmdata/*.bin 
存储来自AVM 标定过程的标定数据。这些数据被
绕过AVM 运行时库作为 AVM 算法的输入。 
Layout Confi
guration 
/etc/automotive/mt6771/avmdata/default_conf
ig.json 
各显示模式的布局信息 
2D Asset Files /etc/automotive/mt6771/avmdata/ 汽车图像文件和警告文字 
3D Asset Files /etc/automotive/mt6771/avmdata/asset_3d 3D AVM资源 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 141

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
141 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
源代码 
AVM Daemon 源文件夹路径为 <Base>/vendor/mediatek/proprietary/hardware/mtkcam_sec_lib/avmdae
mon，其包含： 
•  <Base>/vendor/mediatek/proprietary/hardware/mtkcam_sec_lib/avmdaemon/fastavmservice  
– AVM 守护进程程序，它包含 AVM 守护进程的入口点。 
• <Base>/vendor/mediatek/proprietary/hardware/mtkcam_sec_lib/avmdaemon/spm/avmdata  
– AVM 配置数据，包含 AVM 标定数据、AVM UI 图像和 AVM UI 配置文件。 
• <Base>/vendor/mediatek/proprietary/hardware/mtkcam_sec_lib/avmdaemon/avmclientdemo  
– AVM 客户端实用程序，其中包括一个用于测试所有控制消息和接收相应响应消息的工具。 
 
生命周期 
 
 
上图展示了 AVM Daemon 的生命周期，它包括： 
• Initialization state：当处理完成后，AVM 进入下一个状态。 
• View Display state：AVM Daemon 在屏幕上显示 AVM 实时视图并等待控制消息。 
• Waiting state：AVM Daemon 停止显示 AVM 实时视图并等待控制消息。 
 
AVM Daemon 在系统启动后不会终止，因此它没有退出状态。 
 
套接字接口 
AVM 定义了一个套接字协议，用于 AVM Daemon 与应用程序进行通信，有两种单独的协议类型： 
• 被动消息套接字：应用程序通过此套接字向 AVM Daemon 发送控制消息，AVM Daemon 则向应用程序发
送响应消息。当应用程序发送一条消息时，它必须等待 AVM 响应后才能发送下一条消息。AVM Daemon 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 142

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
142 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
仅允许一个被动消息套接字连接。如果一个应用程序想要使用被动消息套接字控制  AVM Daemon，则必须
断开与 AVM Daemon 连接的其他应用程序。 
– 从应用程序到 AVM 守护进程的控制消息协议 
 
 
– 从 AVM 守护进程到应用程序的响应消息协议。 
 
 
• 主动消息套接字：AVM Daemon 会自动通过此套接字向应用程序发送一些通知消息。应用程序不能通过此
套接字向 AVM Daemon 发送消息。AVM Daemon 只允许一个主动消息套接字连接。AVM Demo APK 将
在系统启动后将 AVM Daemon 与主动消息套接字连接起来。 
– 从 AVM 守护程序到应用程序的通知消息协议。 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 143

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
143 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
显示管理 
如显示管道所述，AVM 守护进程通过 Surface Flinger 输出到 OVL 硬件。 
 
显示管道缓冲区管理 
相机、渲染、显示组件被分配到 3个不同的线程，各个线程之间通过缓冲队列来交换输入输出缓冲区，如下图所示：  
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 144

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
144 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
9.2 点检测库 
AVM 点检测库是一个本机库，用于检测预定义模式（例如棋盘）上的参考点。  
 
 
 
上图显示了 AVM 标定基本流程的概览。 
AVM 点检测库以相机图像帧作为输入，检测棋盘图案，并输出点云进行标定过程。 
注意：点云包含 BEV 和相机图像帧之间的一对点。 
 
文件夹结构 
如果您获得许可源代码，其结构应如下： 
 
/vendor/mediatek/mt2712/mtkavm/avmalgo 
├── inc 
|   ├── avm_point_detector.h 
|   └── avm_types.h 
├── src 
|   └──avm_pd 
|       └── avm_point_detector.cpp 
└── test 
    ├── data 
    |   └── <test image/data> 
    └── test.cpp 
其中： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 145

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
145 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• avm_point_detector.h 是 AVM 点检测器的标题。 
• avm_types.h 定义常见的枚举、数据结构和定义。 
• avm_point_detector.cpp 包含 AVM 点检测器的实现。 
• test文件夹是Google Test(gtest)框架实现的UT测试用例。 
 
API 概述 
点检测库提供了一个 C++ 头文件 avm_point_detector.h，它通过纯 C 函数和结构公开 API。它提供了 6 个基本 
API： 
• Constructor：construct_avm_pd 
• 初始化：avm_pd_init 
• 模式配置：avm_pd_add_pattern_info 
• 检测点：avm_pd_detect_point/avm_pd_detect_bev_point 
• 获取点云：avm_pd_get_point_cloud 
• Destructor： destroy_avm_pd 
 
典型的用例可以用下面的伪代码来描述： 
• 调用construct_avm_pd获取avm_pd句柄。 
• 调用 avm_pd_init 初始化点检测器。 
• 对于每个模式： 
– 调用 avm_pd_add_pattern_info 设置模式信息和点检测器。 
– 将返回值“roi_id”存储为标识。 
• 对于每一帧： 
– 对于每个投资回报率： 
▪ 调用 avm_pd_detect_point(cam_id, roi_id, image frame...) 来检测相机图像上当前 ROI 的点。 
• 对于每一帧： 
– 对于每个投资回报率： 
▪ 调用 avm_pd_detect_bev_point(cam_id, roi_id, bev image frame...) 来检测 bev 图像上当前 ROI 
的点。 
• 调用avm_pd_get_point_cloud获取结果，点云。 
• 当不再需要该库时，调用 destroy_avm_pd 来释放资源。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 146

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
146 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
请注意，相机图像的点必须按顺序与 BEV 图像的点对齐。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 147

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
147 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
构造 API 
void* DLL_PUBLIC construct_avm_pd(); 
 
该API创建点检测器上下文并返回模块句柄。 
 
参数 
不适用 
 
返回值 
• 返回一个“void*”指针，用它作为以下步骤的句柄。 
 
初始化 API 
int32_t DLL_PUBLIC avm_pd_init(void* hdlr，avm_pd_config* p_cfg); 
 
此 API 初始化点检测器并分配资源。客户端代码必须传递包含 
avm_pd_config 结构中的基本数据。 
 
参数 
• hdlr 是点检测器的处理程序。 
• p_cfg 指向 avm_pd_config 结构。 
 
struct avm_pd_config { 
    uint32_t camera_count; 
}; 
 
• camera_count 是全景摄像头的总数。请注意，我们用 4 个摄像头来实现它。 
 
返回值 
• 返回正值表示点检测库初始化成功，否则返回负值表示初始化失败。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 148

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
148 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
模式配置 API 
avm_roi_id DLL_PUBLIC avm_pd_add_pattern_info(void* hdlr, avm_cam_id cam_id, avm_pattern_type typ
e, int32_t grid_height, int32_t grid_width,avm_rect bev_rect, avm_rect cam_rect);  
 
此API为对应的摄像头和矩形（ROI）设置一个模式配置。 
 
参数 
• hdlr 是点检测器的处理程序。 
• cam_id 是摄像机的标识。 
• type 是模式类型。我们目前仅支持 AVM_PD_PAT_TYPE_CHESSBOARD。 
• grid_height 是棋盘网格高度。 
• grid_width 是棋盘网格宽度。 
• bev_rect 是 BEV 图像上的 ROI 矩形。 
• cam_rect 是摄像机图像上的 ROI 矩形。 
 
返回值 
• 如果模式设置成功，则返回正的 roi_id，否则返回负值表示发生错误，请查看错误日志进行调试。 
 
检测点 API 
void DLL_PUBLIC avm_pd_detect_point(void* hdlr，avm_cam_id cam_id，avm_roi_id roi_id，avm_image
* p_image); 
 
此 API 可检测图像特定 ROI 上的模式。 
 
参数 
• hdlr 是点检测器的处理程序。 
• cam_id 是摄像机的标识。 
• roi_id 是返回的ROI的标识。 
• p_image 应该指向相机图像缓冲区。 
 
返回值 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 149

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
149 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• 此 API 无返回值。您可以通过调用 avm_pd_get_detected_point(void* hdlr,avm_cam_id cam_id, avm_ro
i_id roi_id, avm_point_list* p_point_list); 来检查点列表的数量。 
 
struct avm_point_list { 
    uint32_t count; 
    avm_point2f points[AVM_MAX_POINTS_OF_ROI]; 
}; 
 
获取点云 API 
void* DLL_PUBLIC avm_pd_get_point_cloud(void* hdlr); 
 
此 API 返回检测到的点云的指针。 
 
参数 
• hdlr 是点检测器的处理程序。 
 
返回值 
• void * 指向点云结构。我们将此指针传递给 AVM 标定模块进行标定过程。 
 
struct avm_point_cloud { 
    avm_point_list point_list[AVM_MAX_CAM_NUM][AVM_MAX_ROI_OF_CAM]; 
    avm_point_list bev_point_list[AVM_MAX_CAM_NUM][AVM_MAX_ROI_OF_CAM]; 
}; 
 
• point_list[][] 用于存储每个 ROI、每个摄像机的点。 
• bev_point_list[][] 用于存储 BEV（ground truth）上每个 ROI 的点及其对应位置。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 150

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
150 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
• 确保两点列表配对以进行真实世界的点匹配。 
 
析构函数 API 
void DLL_PUBLIC destroy_avm_pd(void* hdlr); 
 
该API清除资源并释放点检测器句柄。 
 
参数 
• hdlr 是点检测器的处理程序。 
 
返回值 
不适用 
 
UT 测试平台 
基于Google Test（gtest）框架创建了3个测试用例。 
 
• 检查初始化参数-TEST_F(PdTest, InitTest) 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 151

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
151 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• 检查点检测算法在生成图像上的准确性 - TEST_F(PdTestInited, DetectPoint) 
• 检查真实图像上的点检测算法准确性 - TEST_F(PdTestInited, DetectPointRealImage) 
 
构建 AVM 标定项目后，测试程序会在 build\x64\{configuration} 下生成。您可以运行此测试程序，通过运行这
些测试用例来检查您的修改是否正确。 
 
常见问题 
AVM 点检测器是否线程安全？ 
不可以。由于当前设计中使用全局上下文，因此客户端代码必须在同一线程内调用  avm_pd_init、avm_pd_add_
pattern_info 和 avm_pd_detect_point。 
 
可以改变模式和点检测算法吗？ 
是的。正如 AVM 标定库所述，从 AVM 点检测库到 AVM 标定库的唯一输入是点云。确保您发送到 AVM 标定库
的是与 BEV（地面实况）和相机图像点配对的点云。 
 
9.3 标定库 
 
 
上图显示了 AVM 标定基本流程的概览。 
AVM 标定库（libmtkavmcalib.so）是计算鸟瞰视图（BEV）旋转和平移参数的原生库。计算完成后，AVM 标定
库将外部参数保存到 param.bin 中，供 AVM 运行库显示。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 152

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
152 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
API 概述 
AVM 标定库提供了一个 C++ 头文件 avm_calib.h（位于 /vendor/mediatek/mt2712/mtkavm/avmalgo/inc），
该文件通过纯 C 函数和结构公开 API。它提供了 8 个基本 API： 
 
• Constructor：construct_avm_calib 
• 初始化：avm_calib_init 
• 相机配置：avm_calib_set_intrinsic_param 
• 点云设置：avm_calib_set_point_cloud 
• RT参数计算：avm_calib_calc_rt 
• 混合配置：avm_calib_set_bev_effect 
• 混合数据计算：avm_calib_calc_bev_blend_data 
• Destructor： destroy_avm_calib 
 
典型的用例可以用下面的伪代码来描述： 
• 调用construct_avm_calib获取avm_calib句柄 
• 调用 avm_calib_init 初始化标定库 
• 调用 avm_calib_set_point_cloud 将配对点云传递到标定库。 
• 对于每个摄像头： 
• 调用 avm_calib_set_intrinsic_param 设置相机内参。 
• 调用avm_calib_calc_rt计算RT参数。 
• 调用 avm_calib_set_bev_effect 来配置混合区域。 
• 调用 avm_calib_calc_bev_blend_data 计算针迹混合数据。 
• 当不再需要该库时，调用 destroy_avm_calib 来释放资源。 
 
构造 API 
void* DLL_PUBLIC construct_avm_calib(); 
 
该API创建AVM标定上下文并返回模块句柄。 
 
参数 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 153

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
153 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
不适用 
 
返回值 
• 返回一个“void*”指针，用它作为以下步骤的句柄。 
 
初始化 API 
int32_t DLL_PUBLIC avm_calib_init(void* hdlr，avm_calib_config* p_cfg); 
 
此 API 初始化 AVM 标定库并分配资源。客户端代码必须传递包含 avm_calib_config 结构中基本数据的内存缓冲
区。 
 
参数 
• hdlr 是 AVM 标定库的处理程序。 
 
avm_calib_config: 
struct avm_calib_config { 
    // number of camera input sources 
    // the current implementation supports only 4 cameras 
    uint32_t camera_count; 
 
    // This is used in the calibration process as 
    // the maximum viewing angle of each virtual camera in BEV(top) view. 
    // 
    // This value is not related to the actual FOV of the input cameras. 
    // 
    // The unit is degree and must be in range from 110 to 170. 
    // The suggested default value is 160. 
    uint32_t camera_fov; 
 
    // Camera input image size in pixels. 
    avm_size cam_img_size[AVM_MAX_CAM_NUM]; 
 
    // Birdeye view setting 
    avm_rect bev_view_frustum;  // in millimeters (physical coordinate) 
    avm_rect bev_input_frustum; // in millimeters (physical coordinate) 
 
    // bev setting 
    int32_t bev_blend_data_w;    // in pixels 
    int32_t bev_blend_data_h;    // in pixels 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 154

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
154 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
    // Fisheye Undistortion view setting 
    int32_t fisheye_undistort_view_w; // in pixels 
    int32_t fisheye_undistort_view_h; // in pixels 
    uint32_t fisheye_undistort_view_fov[AVM_MAX_CAM_NUM]; // in degrees 
 
    // Guideline and Car Dimension setting 
    avm_car_setting car_setting; 
 
    // AutoTuning switch: 0 (off), 1 (on) 
    int32_t intrin_refine_flag; 
}; 
 
struct avm_calib_car_setting { 
    int32_t car_width; 
    int32_t car_length; 
    int32_t wheel_base; 
    int32_t front_track_width; 
    int32_t rear_track_width; 
    int32_t center_to_head; 
}; 
 
• p_cfg 指向 avm_calib_config 结构。 
– camera_count 是全景摄像头的总数。请注意，我们用 4 个摄像头来实现它。 
– camera_fov 在标定过程中用作 BEV（顶部）视图中每个虚拟相机的最大视角。建议默认值为 160。 
– cam_img_size 是以像素为单位的相机输入图像大小。 
– bev_view_frustum 是最终的 BEV（顶部）视图截头体，以毫米（物理坐标）为单位。 
– bev_input_frustum 是 BEV 标定模式（地面实况）的视锥体，以毫米（物理坐标）为单位。 
– bev_blend_data_w 是拼接混合数据的宽度（以像素为单位） 。 
– bev_blend_data_h 是拼接混合数据的高度（以像素为单位） 。 
– fisheye_undistort_view_w 是运行时库的鱼眼不失真视图宽度。 
– fisheye_undistort_view_h 是运行时库的鱼眼不失真视图高度。 
– fisheye_undistort_view_fov 是运行时库中每个相机的鱼眼不失真视图 fov。 
– car_setting 指向结构 avm_calib_car_setting，该结构描述了汽车信息。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 155

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
155 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
– intrin_refine_flag 是用于启用/禁用相机指令自动调谐的开关。请注意，自动调谐的值将存储在 param.b
in 中，因此在线标定将使用与离线标定相同的设置。 
 
返回值 
• 标定库初始化成功则返回正值，否则返回负值表示初始化失败。 
 
相机配置 API 
struct avm_intrinsic_param { 
    double cam_matrix[3][3]; 
    double dist_coeff[AVM_MAX_CAM_NUM]; 
    int32_t img_width; 
    int32_t img_height; 
}; 
void DLL_PUBLIC avm_calib_set_intrinsic_param(void* hdlr, avm_cam_id cam_id, avm_intrinsic_param* p_
param); 
 
该API设置相应相机的固有参数。 
 
参数 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 156

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
156 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• hdlr 是 AVM 标定库的处理程序。 
• cam_id 是摄像机的标识。 
• p_param指向avm_intrinsic_param结构，其中包含相机矩阵和畸变系数。 
 
返回值 
不适用 
 
点云设置API 
void DLL_PUBLIC avm_calib_set_point_cloud(void* hdlr，void* point_cloud); 
 
该API设置相应相机的固有参数。 
 
参数 
• hdlr 是 AVM 标定库的处理程序。 
• point_cloud 指向由点检测库生成的点云缓冲区。 
 
返回值 
不适用 
 
RT 参数计算 API 
int32_t DLL_PUBLIC avm_calib_calc_rt(void* hdlr，float* average_error); 
 
该API比较点云中的点并计算旋转平移参数。 
 
参数 
• hdlr 是 AVM 标定库的处理程序。 
• average_error指向一个float型数据，旋转平移计算的平均误差输出到这个float型数据中。 
 
返回值 
• 如果此过程运行成功，则返回正值。否则，需要检查日志，因为返回负值表示失败。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 157

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
157 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
输出日志 
• avm_calib 将输出计算出的相机参数和投影后的平均误差（与地面实况比较） 
• 注意：根据我们的经验，平均误差小于0.5意味着投影质量良好。否则，您应该检查点检测结果和相机固有参
数。 
 
 
混合配置 API 
void DLL_PUBLIC avm_calib_set_bev_effect(void* hdlr，avm_calib_bev_effect* p_effect); 
 
该API用于设置相机图像之间的拼接混合效果参数。 
 
参数 
struct avm_blend_data { 
    // we only support 'cone' blending type. 
    avm_calib_blend_type type; 
    union { 
        avm_blend_cone cone; 
    }; 
}; 
 
struct avm_calib_bev_effect { 
    uint32_t count; // region number 
    avm_blend_data blend_regions[MAX_STITCH_REGIONS]; 
}; 
 
• hdlr 是 AVM 标定库的处理程序。 
• p_effect 指向混合效果缓冲区。 
– count 是混合区域数量 
– blend_regions 包含“锥体”效果设置。 
 
返回值 
不适用 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 158

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
158 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 159

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
159 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
混合数据计算 API 
void DLL_PUBLIC avm_calib_calc_bev_blend_data(void* hdlr，void* p_blend_data，uint32_t buffer_size，
uint32_t* data_size); 
 
该API用于计算运行库的针迹混合数据。 
 
参数 
• hdlr 是 AVM 标定库的处理程序。 
• p_blend_data 指向将写入针迹混合数据的缓冲区。 
• buffer_size 是 AVM 标定库参考的数据缓冲区大小。 
• data_size 是 p_blend_data 中最终输出数据的大小。 
 
返回值 
不适用 
 
析构函数 API 
void DLL_PUBLIC destroy_avm_calib(void* hdlr); 
 
此API清除资源并释放AVM标定库处理程序。 
 
参数 
• hdlr 是 AVM 标定库的处理程序。 
 
返回值 
不适用 
 
自动调节 
虽然相机镜头之间的公差必须在标准范围内，但这些误差将直接影响顶视图的质量。我们的算法将尝试对其进行
补偿。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 160

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
160 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
UT 测试平台 
基于 Google Test（gtest）框架创建了 2 个测试用例。 
 
• 检查初始化参数-TEST_F(CalibTest, InitTest) 
• 检查预定义点云上的标定算法精度-TEST_F（CalibTestInited，CalcRtTest） 
 
您可以通过运行这些测试用例来检查修改的正确性。 
 
常见问题 
AVM 标定库是线程安全的吗？ 
不可以。由于当前设计中使用全局上下文，客户端代码必须在同一线程内调用 avm_calib_init、avm_calib_set_in
trinsic_param、avm_calib_calc_rt 和 avm_calib_calc_bev_blend_data。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 161

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
161 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
10 演示客制化 
AVM SDK 提供了演示应用程序和显示模式，作为不同 AVM 产品的参考。在不修改源代码的情况下，有一些定制
空间。本节介绍可能的定制方法，包括： 
 
• 更改 AVM 显示模式的布局尺寸。 
• 修改 2D 车辆图像和“盲点”区域。 
• 采用您自己的 3D 汽车模型。 
• 在 3D AVM 视图中分配 3D 相机动画。 
 
这些呈现定制涉及修改配置文件和 UI 资源文件，如下面的概览图所示： 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 162

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
162 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
10.1 布局 
本节介绍 AVM SDK 中显示布局的设计和定制。 
 
大多数 AVM 用例要求 AVM 系统支持不同的显示布局，并允许最终用户在布局之间切换。此外，这些显示布局
应该可由系统供应商定制。 
 
AVM SDK 支持以下布局功能： 
• 用于切换显示模式的套接字命令 
• 布局配置文件可用于设计不同的布局尺寸 
 
显示模式概述 
为了在不同的布局之间切换，AVM 守护进程定义了一组显示模式。每个模式都分配有一个模式 ID，即一个整数
索引。默认模式 ID 为 0。显示模式的最大数量由 mtk_avm_config.h 中的宏 AVM_DISP_MODE_MAX 静态定义。 
 
在运行时，AVM Demo APK 或 AVM Calibration APK 等应用程序会发送套接字命令 AVM_MSG_MODE 以及
模式 ID，以指示 AVM 守护进程切换到所需模式。 
 
下图显示了参考设计中定义的大多数显示模式： 
 
 
请注意，AVM 演示应用程序和 AVM 标定应用程序共享同一套布局配置，但使用不同的显示模式 ID。参考设计
中定义了一些其他显示模式，这些模式未被应用程序用于调试目的。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 163

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
163 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
在大多数情况下，前后齿轮共享相同的显示模式。 各个视图类型的实现负责在前后齿轮状态改变时选择相机输入
源。 
 
显示模式只是每个屏幕上视图的排列方式。实际的渲染逻辑和相机拼接行为由不同的视图类型定义。例如，参考
设计中的默认显示模式 0 是屏幕 0 中 2 个视图的组合，如下所示： 
 
 
 
每种视图类型都实现自己的渲染逻辑，并且可能需要不同的参数。例如，上图中的两种视图类型是：  
 
• FISHEYE_VIEW 显示前置或后置摄像头的中心裁剪图像。齿轮状态决定使用哪个摄像头。 
• TOPVIEW 采用额外的视锥参数来确定鸟瞰图般的顶视图中的可见区域。 
 
请参阅本页的“视图”部分以获取所有视图类型的列表。 
 
配置和资产 
AVM_MSG_MODE 和 mode id 仅表示使用哪种显示模式。它不包含实际的布局信息。布局信息以 JSON 格式静
态存储在配置文件中。AVM 守护进程的配置文件位置为： 
 
• 在目标上：/etc/automotive/mt6771/avmdata/default_config.json 
• 在源代码仓库中：{avm_repo_root}/avmdaemon/spm/avmdata/default_config.json 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 164

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
164 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
通过修改JSON配置文件，系统厂商可以自定义各个显示模式的布局。 
 
此配置文件在 AVM 守护进程的初始化阶段进行解析。开发人员必须在更新配置文件后终止并重新启动  AVM 守
护进程可执行文件 (mtkfastavm)，才能观察到更新后的布局。 
 
其他资产资源也存储在相同的位置，如下表所列： 
文件/文件夹名称 格式 目的 
default_config.json JSON 布局和 2D 资源配置 
warning.png 32 位 PNG 警告文字图像  
car.png 32 位 PNG 2D汽车图像 
floor.png 32 位 PNG 2D 车身地板覆盖盲区 
pattern.argb 原始 RGBA 动态车轮轨迹线模块使用 
asset_3d 目录 3D AVM 资源文件  
 
配置文件分为几个基本属性： 
• version：配置文件的文件格式版本 
• camera_input：相机输入格式和后处理配置 
• display_modes：布局和每个视图的配置 
• view_type_parameter：全局视图配置 
• warning_image_info：警告图片位置 
 
因此示例 JSON 配置文件的整体结构如下所示： 
 
"mtkfastavm_config": { 
    "version": "2.3-spm", // AVM v2.3 configuration file format 
    "camera_input": { 
        //... 
    }, 
"view_type_parameter": { 
        //...global view parameters 
    }, 
    "display_modes": { 
        //...layout and view parameters 
    }, 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 165

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
165 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
    "warning_image_info": { 
        //...on-screen position of the warning text 
    } 
} 
 
每个属性的内容将在以下章节中解释。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 166

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
166 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
相机输入格式 
camera_input 属性配置相机的输入格式和图像分辨率。可选择添加额外的后处理阶段，包括去隔行或图片质量控
制。 
 
size 和 format_fourcc 属性是必需的，如下所示： 
 
"camera_input": { 
    "size": [1280, 720], 
    "format_fourcc": "YUYV", 
} 
 
• 大小是相机图像维度的[宽度，高度]数组。 
• format_fourcc 是 DRM fourcc 代码，支持以下源颜色格式： 
– “YUYV” 
– “UYVY” 
 
您可以选择将 deinterlace 或 mdp_pq 设置为 true 以启用后处理。但是，这些后处理器是互斥的，因此不能同
时设置为 true。 
 
例如，要使用 720p YUYV 相机启用图片质量控制，请使用以下设置： 
 
"camera_input": { 
    "size": [1280, 720], 
    "format_fourcc": "YUYV", 
 
    "deinterlace" : false, 
    "mdp_pq" : true, 
}, 
 
要使用具有去隔行功能的 480i UYVY 相机，请使用以下设置： 
 
"camera_input": { 
    "size": [720, 480], 
    "format_fourcc": "UYVY", 
 
    "deinterlace" : true, 
    "mdp_pq" : false, 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 167

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
167 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
}, 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 168

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
168 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
布局配置 
配置 JSON 文件包含布局配置设置的键值层次结构。本节介绍 display_modes、view_type_parameter 和 warni
ng_image_info 属性的详细信息。 
 
显示模式 
布局信息存储在 display_modes 中，它定义为 JSON 对象数组。以下代码片段说明了文件中单个显示模式的定义： 
 
"display_modes": [ 
 { 
  "mode_id" : 0, 
  "_name": "normal_mode", 
  "screens": [ 
   { 
    "screen_id": 0, 
    "rect": [0, 0, 1920, 1080], 
    "views": [ 
     { 
      "view_type": "TOPVIEW", 
      "rect": [1328, 0, 592, 968] 
     }, 
     { 
      "view_type": "FISHEYE_VIEW", 
      "rect": [193, 0, 1120, 968] 
     } 
    ] 
   } 
   // ... 2nd screen if exists 
  ] 
 }, 
 // ... other mode definitions ... 
] 
 
模式 ID 
在上面的代码片段中，对象 display_modes 被定义为 JSON 对象数组。每个对象都有一个名为 mode_id 的属性。
在上面的示例中，mode_id 定义为 0。如果 AVM 演示传递模式 ID 为 0 的套接字命令 AVM_MSG_MODE，则 
AVM 守护进程会将显示布局更新为此 JSON 对象定义的内容。可以定义的模式数量有一个上限，即 AVM_DISP_
MODE_MAX，根据 mtk_avm_config.h 中的定义，它静态设置为 30。 
 
屏幕 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 169

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
169 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
请注意，_name 属性仅用于文档目的。它不会影响布局的实际内容。相反，显示模式包含一个或多个屏幕的布局
定义。这存储在名为 screens 的数组中。屏幕是实际的显示设备，例如主显示器 LCD 或辅助外部显示器。 
 
screen_id 在当前版本中只能为 0 或 1，其中 0 为主屏幕，1 为外接屏幕。这些整数 screen_id 共用 libDRM API 
定义的相同值。 
 
未被任何屏幕或视图覆盖的区域将被绘为黑色。 
 
屏幕的矩形 
对于每个屏幕对象，一个 rect 属性定义了 AVM 守护进程的输出矩形。AVM 守护进程仅更新由 rect 属性定义的
区域。rect 属性定义为 [x, y, width, height] 的数组，其中 (0, 0) 是屏幕的左上角，如下图所示： 
 
 
 
视图 
在 AVM 输出区域内，可以在 views 数组中定义一个或多个视图对象。与屏幕类似，每个视图对象还定义一个相
对于 AVM 输出区域的 rect 属性。例如，以下 JSON 代码片段： 
 
"screen_id": 0, 
"rect": [220, 100, 1700, 1000], 
"views": [ 
    { 
        "rect": [30, 0, 592, 968], 
        "view_type": "UNDISTORT_VIEW" 
    }, 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 170

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
170 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
    // ... 
] 
 
定义这样的视图布局： 
 
 
ID 
为当前视图分配唯一 ID 
 
视图类型 
每个视图对象的实际内容由其视图类型决定。视图类型在 AVM 守护进程中定义和实现。JSON 文件接受每个视图
类型的类型名称，例如 
 
"views": [ 
    { 
        "rect": [30, 0, 300, 720], 
        "view_type": "TOPVIEW", 
        "frustum": [-2814, 2820, 2815, -6365] 
    }, 
    { 
        "rect": [340, 0, 300, 720], 
        "view_type": "FISHEYE_VIEW" 
    }, 
    // .. other view types 
] 
 
其中 TOPVIEW 和 FISHEYE_VIEW 是类型名称。所有可用的 view_type 名称总结在下表中： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 171

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
171 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
在 default_config.json 中输入
名称 
显示内容 行为 
"RAWCAMERA_VIEW" Single camer
a 
在信箱中显示摄像机图像并适合视图矩形。 
"FISHEYE_VIEW" Single camer
a 
显示摄像机图像，中心裁剪的内部视图矩形。 
"UNDISTORT_VIEW" Single camer
a 
显示未失真的摄像机图像。 
"FREEFORM_VIEW" Single camer
a 
从源摄像机图像裁剪并拉伸四边形区域至显示视图矩形。 
"TOPVIEW" 2D AVM 将四个摄像头的输入拼接成类似鸟瞰图的 2D AVM 顶视图图像。 
"FIX_3DVIEW" 3D AVM 使用 PC 工具编辑相机动画路径的 3D AVM。 
"INTRO_3DVIEW" 3D AVM 具有程序控制的一次性相机动画的 3D AVM。它与布局动画一起使用
来实现“开场动画”演示。 
"FREE_3DVIEW" 3D AVM 3D AVM，摄像头围绕固定中心点旋转一圈。支持触摸事件输入。 
"TOPVIEW_3D" 3D AVM 具有固定摄像机位置的 3D AVM，可模拟 2D AVM 的结果。 
"ORBIT_3DVIEW" 3D AVM 3D AVM 具有圆形相机动画路径并支持 3D 相机位置改变。 
"USER_CAM_3DVIEW" 3D AVM 具有多个用户定义摄像头视角的 3D AVM。此视图允许用户在 default
_config.json 中定义摄像头并在运行时修改摄像头视角。 
SIDE_3DVIEW 3D AVM 3D AVM 模拟后视镜视图，帮助驾驶员看到车辆后方和侧面的区域，
超出驾驶员的周边视野。此视图提供 3 个内置视角，还允许用户在 def
ault_config.json 中定义摄像头视角，并在运行时修改摄像头视角。 
 
查看矩形动画 
可以扩展 rect 值以在进入显示模式时显示一次性布局动画。为此 
• 在屏幕中将动画属性设置为 true。 
• 通过设置屏幕上的 anim_duration 属性来定义动画持续时间（以毫秒为单位） 
• 可选择使用 anim_delay 在屏幕上设置动画的起始延迟 
• 为屏幕内的每个视图设置一个附加参数 rect_anim_from，指定视图矩形的“起始位置”。然后，AVM 守护
进程将在切换到显示模式时执行布局动画。 
 
例如，以下 JSON 配置会创建一个动画，使 FISHEYE_VIEW 从屏幕左侧移动，同时缩小 3D AVM 视图： 
"screens": [ 
    { 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 172

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
172 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
        "screen_id": 0, 
        "rect": [0, 0, 1920, 1080], 
 
        "animated": true,  // set to true to enable animation 
        "anim_duration" : 750, // animation duration in MS 
        "anim_delay": 3000,  // animation starting delay in MS 
 
        "views": [ 
            { 
                "view_type": "INTRO_3DVIEW", 
                "rect": [193, 0, 592, 968], 
                "rect_anim_from": [193, 0, 1727, 968] // start full-screen and shrink 
            }, 
            { 
                "view_type": "FISHEYE_VIEW", 
                "rect": [800, 0, 1120, 968], 
                "rect_anim_from": [1920, 0, 1120, 968] // slide from the right 
            } 
        ] 
    } 
] 
 
查看参数 
某些视图类型需要除矩形之外的其他参数来确定最终渲染结果。例如，AVM_VIEW_TYPE_TOPVIEW 需要定义顶
视图可见边界的视锥体信息。这些附加参数在 JSON 中定义为视图对象的一部分： 
"views": [ 
    { 
        "view_type": "TOPVIEW", 
        "rect": [1328, 0, 592, 968], 
        "frustum": [-2814, 2820, 2815, -6365] 
    } 
] 
 
其中 TOPVIEW 需要 frustum 属性。 
以下部分描述了每种视图类型所需的附加参数。 
 
TOPVIEW 参数 
"topview": { 
 "frustum": [-2814, 2820, 2815, -6365], 
 "rear_gear_frustum": [-2814, 2820, 2815, -6365], // optional 
 "disable_guideline": false, // optional, default to false. 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 173

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
173 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
}, 
 
可以将 disable_guideline 参数设置为 true 以隐藏视图内显示的车轮轨迹线。 
 
frustum 参数定义 AVM_VIEW_TYPE_TOPVIEW 视图类型的可见区域。在上面的示例中，我们将 AVM_VIEW_T
YPE_TOPVIEW 视图的可见视锥体设置为 
• 左：-2814 毫米 
• 顶部：2820 毫米 
• 右：2815 毫米 
• 底部：-6365 毫米 
 
rear_gear_frustum 是可选参数。定义后，它将控制应用倒档时 2D AVM 算法要使用的截锥体。默认情况下，它
与 frustum 参数的值相同。 
 
关于视锥体坐标系的详细描述，请参考标定流程。 
 
通过 frustum 参数，我们可以实现“缩放”或“放大”的顶视图，如下所示： 
"views": [ 
    { 
        "view_type": "TOPVIEW", 
        "rect": [1328, 0, 592, 968], 
        "frustum": [-2814, 2820, 2815, -6365] // "full" top view show entire car 
    }, 
    { 
        "view_type": "TOPVIEW", 
        "rect": [193, 0, 1120, 968], 
        "frustum": [-2029, 3320, 2029, -180],   // "enlarged" top view show front side 
        "rear_gear_frustum": [-2029, -2365, 2029, -5865] // // "enlarged" top view show rear side 
    } 
] 
 
在第二个视图中，视锥体定义的边界比顶视图小，从而实现了“放大”效果，如下图所示： 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 174

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
174 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
FREEFORM_VIEW 参数 
FREEFORM_VIEW 允许您将源相机图像上的任何凸四边形区域裁剪到矩形区域。除了矩形参数外，以下参数也是
必需的： 
 
• cam_idx 定义源摄像机 ID， 
– 0：前置摄像头 
– 1：左摄像头 
– 2：右摄像头 
– 3：后置摄像头 
• src_quad 是源图像上四个位置的数组。 
– 每个位置都是一个按 [x, y] 顺序排列的两个整数的数组。 
– 位置的顺序很重要。第一个位置始终映射到输出矩形区域的右上角，后面的位置按顺时针方向映射。  
– 要“旋转”输出图像，只需将 src_quad 的位置反转即可。 
– 可以定义可选的 rear_gear_src_quad 来提供倒档状态下的源四边形区域。 
 
下图直观地展示了 rect、cam_idx 和 src_quad 之间的映射： 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 175

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
175 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
USER_CAM_3DVIEW 参数 
USER_CAM_3DVIEW 允许用户直接在 default_config.json 中定义多个相机视角。除 rect 参数外，以下参数也
是必需的： 
 
• 相机是一系列定制相机 
– 每个相机都有以下参数。它们构成视锥体。 
Paramet
er 
Value Description 
p o s  
t a r g e t  
up_dir 
vec3 这些参数表示相机的姿势。  
- pos ：相机的位置 
- target ：相机注视的目标点 
- up_dir ：相机的向上方向 
坐标空间是右手坐标（OpenGL），Y 向上，-z 向前，单位为cm 。 
fovy_degree float 视野（y 方向）度数 
clip_plane_ne
ar  
clip_plane_far 
float 近裁剪平面和远裁剪平面属性决定了相机视图的开始和结束位置。这些平面垂直
于相机方向，并从其位置进行测量。近裁剪平面是将要渲染的最近位置，而远裁
剪平面是最远的位置。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 176

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
176 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
{ 
 "id": 335, 
 "view_type": "USER_CAM_3DVIEW", 
 "rect": [0, 0, 1048, 480], 
 "cameras" : [ 
  { 
   "pos": [0.000000, 232.980011, 314.011383], 
   "target": [0.000000, 0.000000, -135.949997], 
   "up_dir": [0.000000, 0.888023, -0.459799], 
   "fovy_degree": 60.000000, 
   "clip_plane_near": 25.0, 
   "clip_plane_far": 5000.0 
  }, 
  { 
   "pos": [301.082611, 232.980011, -470.336731], 
   "target": [0.000000, 0.000000, -135.949997], 
   "up_dir": [-0.307665, 0.888023, 0.341697], 
   "fovy_degree": 60.000000, 
   "clip_plane_near": 25.0, 
   "clip_plane_far": 5000.0 
  }, 
  { 
   "pos": [-13.192088, 232.980011, -585.717957], 
   "target": [0.000000, 0.000000, -135.949997], 
   "up_dir": [0.013481, 0.888023, 0.459601], 
   "fovy_degree": 60.000000, 
   "clip_plane_near": 25.0, 
   "clip_plane_far": 5000.0 
  }, 
  { 
   "pos": [-318.836517, 232.980011, -453.453522], 
   "target": [0.000000, 0.000000, -135.949997], 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 177

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
177 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
   "up_dir": [0.307666, 0.888023, 0.341696], 
   "fovy_degree": 60.000000, 
   "clip_plane_near": 25.0, 
   "clip_plane_far": 5000.0 
  } 
 ] 
} 
 
SIDE_3DVIEW 参数 
SIDE_3DVIEW 模拟后视镜视图，帮助驾驶员看到车辆后方和侧面的区域，超出驾驶员的周边视野。此视图提供 3 
个内置视角，还允许用户在 default_config.json 中定义摄像头视角。除了 rect 参数外，以下参数也是必需的： 
 
• side：表示预览车辆的哪一侧 
– 右：要预览的车辆右侧。 
– 左：要预览的车辆左侧。 
• 相机：设置相机。您可以使用内置视角或定义自定义相机视角。 
– 使用内置视角：从以下 3 个视角中选择一个。 
Paramet
er 
Value Description 
builtin builtin_sideview_camera_high_angle 鸟瞰视图，查看车辆的侧面。 
 
 
builtin_sideview_camera_medium_a
ngle 
查看车辆的前侧/后侧。 
 
 
builtin_sideview_camera_low_angle 查看车辆的前侧/后侧。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 178

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
178 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
– 自定义相机视角：通过以下参数设置相机。它们构成视锥体。但如果你已经指定了内置视角，以下参数将
被忽略 
Parameters Type Description 
p o s  
t a r g e t  
up_dir 
vec3 这些参数表示相机的姿势。  
- pos：相机的位置 - target：相机注视的目标点 - up_dir：相机的向上方向 
坐标空间是右手坐标（OpenGL），Y 向上，-z 向前，单位为cm 。 
fovy_degree float 视野（y 方向）度数 
clip_plane_near  
clip_plane_far 
float 近裁剪平面和远裁剪平面属性决定了相机视图的开始和结束位置。这些平面
垂直于相机方向，并从其位置进行测量。近裁剪平面是将要渲染的最近位
置，而远裁剪平面是最远的位置。 
 
• axis_offset：创建非对称视锥体的参数，在NDC空间中偏移视锥体。 
在3D图形中，上述相机参数可以构建视锥体，它是透视虚拟相机系统的视野。最终视锥体将被映射到规范化
设备坐标（NDC） 。在NDC空间中，范围在所有维度上都是-1〜+1。axis_offset尝试在NDC空间中移动视锥
体。 
 
 
 
下图显示了 axis_offset 如何影响最终的视角。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 179

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
179 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
其他配置参数 
有些跨视图配置不适合在单独的视图参数中定义。例如，汽车图像在毫米坐标空间中的位置和警告图像在屏幕上
的位置应该全局定义。这些配置在 JSON 文件中的 view_type_parameter 属性中定义。下表是这些配置属性的摘
要： 
 
可能的视图类型参数 
view_type_parameter property Description 
2d_car_image 在毫米坐标空间中定义的二维汽车图像的位置 
2d_floor_image 在毫米坐标空间中定义的底层图像的位置 
topview_blend 2D AVM 算法的混合参数 
3dview_blend 3D AVM 算法的混合参数 
transparent_car_road_paving 3D AVM 算法中透明 3D 汽车特征的铺设区域和混合参数 
 
以下代码片段是view_type_parameter的示例配置： 
"view_type_parameter" : { 
 "_comment": "global settings for 2D AVM and 3D AVM", 
 
 "2d_car_image" : { 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 180

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
180 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
  "frustum" : [-1140, 1016, 1139, -3735] 
 }, 
 
 "2d_floor_image" : { 
  "frustum" : [-1140, 1016, 1139, -3735] 
 }, 
 
 "topview_blend" : { 
  "blind_region": [-740, 916, 740, -3635], 
  "blend_theta": [30, 30, 
      30, 30], 
  "blend_phi" : 15.0 
 }, 
 
 "3dview_blend": { 
  "blind_region": [-740, 916, 740, -3635], 
  "blend_theta": [30, 30, 
      30, 30], 
  "blend_phi" : 15.0 
 }, 
 
    "transparent_car_road_paving": { 
        "paving_region" : [-1040, 1040, 1040, -3735], 
        "blind_region": [-740, 916, 740, -3635], 
        "blend_theta": [30, 30, 
                        30, 30], 
        "blend_phi" : 15.0 
 } 
}, 
 
2d_car_image 
在大多数情况下，顶视图还需要 2D 汽车图像来协助用户。此图像存储在 /etc/automotive/mt6771/avmdata/c
ar.png 中。AVM 守护程序加载此 PNG 文件并将其绘制在 AVM 顶视图上。 
 
汽车图像的位置由视锥体属性定义，该属性与顶视图使用的坐标系相同。然后，AVM 守护程序会自动转换 2D 汽
车图像在屏幕上的位置，以匹配每个顶视图配置的视锥体，如下所示： 
"2d_car_image" : { 
    "frustum" : [-1140, 1016, 1139, -3735] 
}, 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 181

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
181 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
请注意，此视锥体可能与实际汽车尺寸不同，因为 PNG 文件中可能会有阴影和图像边框等半透明区域需要考虑。
因此，如果图像的阴影或填充区域发生变化，则必须重新调整 2d_car_image 视锥体。 
 
 
2d_floor_image 
此配置与 2d_car_image 类似，不同之处在于它定义的不是汽车图像，而是地板图像的位置，在大多数情况下用
于覆盖摄像机看不到的盲区。 
 
"2d_floor_image" : { 
    "frustum" : [-1140, 1016, 1139, -3735] 
}, 
 
AVM 视图和 2D 资源的绘制顺序由 AVM 守护进程中的渲染逻辑定义。默认实现是： 
1. AVM 视图 
2. 2D 地板图像 
3. 车轮轨迹线 
4. 2D汽车图像 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 182

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
182 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
要更改此顺序，您必须修改 mtk_avm_service.c 中 avm_win_render 函数中定义的渲染逻辑 
topview_blend 
   "topview_blend" : { 
    "blind_region": [-740, 720, 740, -3265], 
    "blend_theta": [30, 30, 
        45, 45], 
    "blend_phi" : 5.0 
   }, 
 
此参数定义所有AVM_VIEW_TYPE_TOPVIEW视图的混合参数和盲区。 
根据相机位置和标定结果，鸟瞰图可能存在以下区域： 
• 重叠区域：不同相机可能相互重叠的区域 
• 盲区：对每个摄像头都无效的区域，例如车辆本身 
 
如下图所示： 
 
 
topview_blend 节点提供用于定制这些区域外观的参数。 
 
混合锥 
在 AVM SDK 中，重叠区域中不同摄像机图像之间的混合接缝表示为锥形混合区域。使用 topview_blend 参数，
可以控制 JSON 中圆锥体的角度 (blend_theta) 和光圈 (blend_phi)： 
"topview_blend" : { 
    "blind_region": [-740, 720, 740, -3265], 
    "blend_theta": [30, 30, 
                    45, 45], 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 183

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
183 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
    "blend_phi" : 5.0 
}, 
 
blend_theta 数组控制每个混合角的方向。顺序为 [左上、右上、左下、右下]，如下图所示。角度定义为圆锥体
主轴与水平 X 轴之间的角度。 
 
blend_phi 角度决定每个混合锥体形状的光圈或开度角。设置为 0 时，混合锥体将变成接缝，如下图右侧所示。 
 
 
盲区 
盲区是由 blind_region frustum 定义的矩形。它遵循与顶视图参数相同的坐标。它有两个用途： 
• 通过定义此区域，AVM 运行时可以跳过更新盲区内的缓冲区内容以获得更好的性能。 
• blind_region 的角也标记了混合锥的起点，如上图所示。 
 
3dview_blend 
"3dview_blend": { 
 "blind_region": [-740, 720, 740, -3265], 
 "blend_theta": [30, 30, 
     45, 45], 
 "blend_phi" : 5.0 
}, 
 
3D 视图混合设置与 topview_blend 参数共享相同的坐标系和语义，但它确定了 3D AVM 环境中的混合区域。这
会影响所有 3D AVM 视图类型。其他 3D 配置由 3D 资产文件定义，详见 3D 模型部分。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 184

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
184 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
 
透明底盘路面铺设 
"transparent_car_road_paving": { 
    "paving_region" : [-1040, 1040, 1040, -3735], 
    "blind_region": [-740, 916, 740, -3635], 
    "blend_theta": [30, 30, 
    30, 30], 
    "blend_phi" : 15.0 
} 
 
此配置专为 3D AVM 环境中的透明汽车功能而设计。它与 2dview_blend 和 3dview_blend 共享相同的坐标系和
语义，但它确定了 3D AVM 环境中的道路铺设区域。paving_region 的定义和用途在道路铺设设置中介绍。 
 
warning_image_info 
default_config.json 中定义的另一个值是 AVM 警告图像的位置。 
"warning_image_info" : { 
    "rect": [606, 10, 900, 40] 
} 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 185

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
185 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
此节点描述覆盖纹理在屏幕矩形中的位置，该纹理在 AVM 输出显示中显示“警告！请检查周围环境以确保安全”。
格式为 [x, y, width, height]。 
 
要修改警告图像本身，请修改 {repo_root}/avmdaemon/spm/avmdata/warning.png 中的 PNG 文件。警告图
像的目标图像路径在 AVM 守护程序中是硬编码的，默认为 /etc/automotive/mt6771/avmdata/warning.png 
 
10.2 3D 模型 
AVM 支持 3D 显示视图，使驾驶员拥有更多自由和立体视角来检查车辆周围环境以确保安全。它还提供有用的驾
驶辅助功能，如 3D 视图中的指导线（停车辅助线）和障碍物标记，以便在停车时提供适当的车辆操纵辅助信息，
帮助驾驶员更顺利地停车。 
 
AVM 允许您用定制模型替换汽车，实施您自己的风格车轮轨迹线，并轻松构建障碍物地图以便与停车雷达传感器
配合使用。 
• 汽车：通过渲染3D模型来呈现，通过制作3D汽车模型来定制它。 
• 车轮轨迹线：以代码绘图的方式呈现，发布源代码。 
• 障碍物地图：通过渲染3D模型来呈现，通过制作3D模型来构建。 
 
如上所述，车辆和障碍物地图都涉及3D建模，有一些建模规则需要遵循。我们将文档分为四个部分： 
• 汽车建模要求 
– 对于3D艺术家，谈论制作3D汽车模型，介绍模型要求的细节。 
• 在 AVM 中使用 3D 汽车模型 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 186

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
186 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
– 为工程师介绍如何在AVM中正确导入3D汽车模型。 
• 障碍物地图 3D 模型要求 
– 对于3D艺术家，谈论制作障碍物地图模型，介绍模型要求的细节。 
• 在 AVM 中使用障碍物地图 3D 模型 
– 为工程师介绍如何在AVM中正确导入障碍物地图模型。 
 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 187

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
187 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 188

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
188 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
3D 汽车建模要求 
交换 3D 文件格式 
• OBJ（https://en.wikipedia.org/wiki/Wavefront_.obj_file） 
– 所有模型均由三角面构成。 
– 每个 obj 文件的三角形数量：20000 (65535/3)。 
– 顶点数据包括位置、法线和 UV 坐标。 
– 注意：OBJ通常以MTL(.mtl)文件输出，但对于3D汽车模型，我们不会使用它来渲染。渲染结果和质量主
要由纹理直接控制。 
• 纹理：漫反射纹理、高光贴图、法线贴图、光纹理和阴影纹理。有关纹理的详细信息，请参阅纹理要求。  
 
坐标系 
• 坐标系：右手坐标系，与OpenGL相同。 
• 模型方向：车辆前部朝 +Z 和 +Y 向上。 
• 模型原点：原点 (0,0,0) 位于前轮轨迹投影到地板的中点（Y=0）。 
– 注意：原点不在车辆的中心。 
• 模型比例：3D世界中的1个单位：现实世界中的1厘米。 
 
 
 
3D 模型分割 
将汽车模型拆分成7个部分。这些部分分别是车身，内饰，车轮，车灯，车门，车窗和地面。下图为示例，车辆分
为7个部分，导出18个OBJ文件。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 189

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
189 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
部分 描述 笔记 
Body 将车辆外部输
出为 OBJ 文件
并命名为body.
obj 
如果您想要透明窗口，请不要将窗口包含在 body.obj 中，而应将窗口作为独立的 OBJ。否
则，您应该将窗口嵌入 body 中。 
 
Interior 将车辆内部输
出为 OBJ 文件
并命名为interi
or.obj 
这是可选的。 
如果你想有透明的窗户，那么制作内饰是有意义的，因为司机可以透过窗户看到车内的情况。
否则，没有必要有内饰模型。 
Wheels 将每个车轮输
出为 OBJ 文
件。 
例如：  
fr_wheel.ob
j 、 fl_wheel.
obj 、 rr_whe
 
 
为了让车轮像汽车行驶一样移动，您必须提供每个车轮的枢轴点，然后 AVM 才能正确旋转车
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 190

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
190 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
部分 描述 笔记 
el.obj 、 rl_w
heel.obj 
轮。 
Doors 将每扇门输出
为 OBJ 文件。 
例如：  
fr_door.obj 、 
fl_door.obj 、 
rr_door.obj 、 
rl_door.obj 、 
hood.obj 、 t
runk.obj 
 
 
为了在 AVM 中正确打开/关闭门，您必须提供每个门的枢轴点和旋转轴，然后 AVM 引擎才
能正确打开/关闭门。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 191

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
191 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
部分 描述 笔记 
Lamps 将您想要在 AV
M 中打开/关闭
的每个灯输出
为 OBJ 文件。 
例如：  
headlights.ob
j 、 r_turn_sig
nal.obj 、 l_tu
rn_signal.ob
j 、 taillights.
obj 
 
 
为了在 AVM 中正确打开/关闭特定的灯，您必须将这些灯导出为不同的 OBJ 文件，然后 AV
M 可以单独控制它们的状态。对于 AVM 演示车，我们将前灯、右/左转向灯和尾灯制作成不
同的 OBJ 文件，因此 AVM 可以切换这些灯。关于尾灯有一件事必须注意：- 如果尾灯的一部
分在后备箱上并且后备箱是可打开的。您应该分开它们的网格并赋予它们唯一的名称。以 AV
M 演示车为例，taillights.obj 中有 2 个网格。Taillights_on_trunk （网格）在后备箱打开
时会在后备箱上，但Taillights_on_body （网格）不会。 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 192

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
192 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
部分 描述 笔记 
Windows 将汽车的窗户
输出为 OBJ 文
件并命名为win
dow.obj 
这是可选的。 
如果您想要透明的窗口，请将窗口作为独立的 OBJ，并确保每个窗口都是OBJ 中的网格并具
有唯一的命名。请参见下图。 
 
Ground 将地面输出为 
OBJ 文件并命
名为ground.o
bj 。 
地面是一个四边形。四边形的尺寸比汽车的边界框大，但实际尺寸将取决于摄像头安装位置和
角度，如下所示，这是在真实汽车上测试时的微调过程。 
 
 
纹理要求 
为了优化 3D 渲染，AVM 使用压缩纹理来渲染汽车。压缩纹理可以减少内存占用并提高图形性能。以下是生成纹
理的流程： 
1. 首先制作5种纹理，分别是漫反射、镜面反射贴图、法线贴图、灯光和地面纹理： 
质地 描述 样本 
漫反射纹理 1. 用于定义表面的主色调 
2.真实感，光照烘焙纹理 
3.一张纹理覆盖整辆车，包括内饰/外部 
4. 分辨率为2048x2048 
 
镜面反射贴图 1. 用于定义表面的光泽度和高光颜色。像素值越高（从黑到白），表面在场景中
看起来就越有光泽 
2.整辆车 
一个纹理，包括外部/内部3. 分辨率为2048x2048 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 193

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
193 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
质地 描述 样本 
法线贴图 1. 用于增强模型的外观和细节 
2.切线空间法线 
3.整个汽车的一个纹理，包括外部/内部 
4. 分辨率为2048x2048 
 
光 1. 灯光纹理呈现打开的灯的颜色 
2. 在灯光纹理中，大多数像素为零（RGBA 全部为 0），只有灯的像素有颜色 3. 
在灯光纹理中，灯像素的位置与漫反射纹理相同。AVM引擎将使用灯网格的 uv 
从漫反射和灯光纹理中获取颜色，以呈现灯的关闭和打开 
4. 灯光纹理的尺寸可以更小。在 AVM 演示车中，灯光纹理大小为512x512。5 . 
下图显示了灯光纹理的工作原理。 
 
 
地面纹理 纹理用于填充相机的盲区。 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 194

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
194 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
2. 然后将法线贴图和镜面贴图组合成名为“normal_specular”的 RGBA 纹理。 
– RGB：来自法线贴图。 
– Alpha：来自镜面反射图的值。 
 
 
3. 将漫反射、法线镜面反射、光和地面纹理转换为压缩纹理格式 
– 输出文件：PKM。 
– 压缩格式：RGBA8_ETC2_EAC。 
– 请下载 Mali 纹理压缩工具来转换纹理。 （https://developer.arm.com/tools-and-software/graphics-a
nd-gaming/mali-texture-compression-tool） 。您还可以从附录：纹理压缩中找到压缩纹理的分步过程。 
4. 最后输出4张纹理，它们是 
– 弥散型 
– 法线镜面反射.pkm 
– 光.pkm 
– 地面.pkm 
 
最终输出文件 
所有 OBJ 文件  
 
 
所有纹理文件 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 195

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
195 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
 
如何使用定制车型 
完成模型和纹理后，您可以按照以下步骤在 AVM 中替换汽车： 
1. 将所有 OBJ 文件和纹理推送到路径：/etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
 
$adb root 
$adb remount 
 
// push all OBJ into 3D asset path 
$adb push body.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push interior.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push fr_door.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push fl_door.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push rr_door.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push rl_door.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push hood.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push trunk.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push headlights.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push taillights.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push l_turn_signal.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push r_turn_signal.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push windows.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push fr_wheel.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push fl_wheel.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push rr_wheel.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push rl_wheel.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push ground.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
 
// push all textures into 3D asset path 
$adb push diffusive.pkm /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push normal_specualr.pkm /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push light.pkm /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push floor.pkm /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
 
2. 编辑/etc/automotive/mt6771/avmdata/asset_3d/vehicle/中的vehicle.json，完成自定义车型设置。 
1) 找到“纹理”对象，填写“漫反射”、“法线”、“光”和“阴影”的纹理文件名： 
"textures" : { 
    "diffuse" : "diffuse.pkm", 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 196

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
196 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
    "normal" : "normal_specular.pkm", 
    "light" : "light.pkm", 
    "shadow" : "floor.pkm" 
} 
 
对于漫反射纹理，我们允许您分配 1~10 个漫反射纹理。它们的分辨率必须相同（2048x2048） 。如果分配了
多个漫反射纹理，您可以在运行时选择其中一个作为汽车的当前活动漫反射纹理。以下是  json 中的多漫反射
纹理声明。 
"textures" : { 
 "diffuse" : [ 
  "diffuse.pkm", 
  "diffuse_blue.pkm", 
  "diffuse_darksilver.pkm", 
  "diffuse_green.pkm", 
  "diffuse_orange.pkm", 
  "diffuse_purple.pkm", 
  "diffuse_red.pkm", 
  "diffuse_silver.pkm", 
  "diffuse_yellow_stripe.pkm", 
  "diffuse_transparent.pkm"], 
 "normal" : "normal_specular.pkm", 
 "light" : "light.pkm", 
 "shadow" : "floor.pkm" 
}, 
 
 
 
2) 找到“body”、“interior”和“ground”对象，填写你的OBJ文件名： 
"body": { 
    "filename": "body.obj" 
}, 
"interior": { 
    "filename": "interior.obj" 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 197

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
197 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
}, 
 
"ground": { 
    "filename": "ground.obj" 
} 
 
3) 找到“车轮”对象，它是一组描述汽车有多少个车轮以及如何在行驶时为它们设置动画的组。除了填写
正确的 OBJ 文件名外，还有一些重要属性需要编辑： 
 
属性 类型 描述 
"pivot" 向量3 此车轮的枢轴点。这是 AVM 发动机在行驶时正确旋转车轮的重要信息。 
"steering" 布尔值 如果此轮子是由方向盘转动的，则将标志设置为 true。否则将标志设置为 false。 
 
 
"wheels" : { 
    // front right wheel 
    "FR_wheel" : { 
        "filename": "fr_wheel.obj", // fill in corresponding OBJ filename 
        "motion":{ 
            "type":"wheel", 
            "pivot": [-76.1467, 32.2695, -0.950404], // fill in wheel's pivot point 
            "steering" : true // Is turned by steering wheel or not 
        } 
    }, 
    // front left wheel 
    "FL_wheel" : { 
        "filename": "fl_wheel.obj", 
        "motion":{ 
            "type":"wheel", 
            "pivot": [76.1467, 32.2695, -0.950404], 
            "steering" : true 
        } 
    }, 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 198

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
198 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
    // Rear right wheel 
    "RR_wheel" : { 
        "filename": "rr_wheel.obj", 
        "motion":{ 
            "type":"wheel", 
            "pivot": [-76.1467, 32.2695, -263.46], 
            "steering" : false 
        } 
    }, 
    // Rear left wheel 
    "RL_wheel" : { 
        "filename": "rl_wheel.obj", 
        "motion":{ 
            "type":"wheel", 
            "pivot": [76.1467, 32.2695, -263.46], 
            "steering" : false 
        } 
    } 
} 
 
4) 找到“门”对象，它是一组描述汽车有多少个门以及如何在门打开和关闭时为它们设置动画的组。除了
填写正确的 OBJ 文件名外，还有一些重要属性需要编辑： 
属性 类型 描述 
"pivot" 向量3 此门的枢轴点。这是 AVM 引擎正确旋转门的重要信息。 
"turn_axis" 向量3 旋转门轴。这是 AVM 引擎正确旋转门的重要信息。 
 
 
"doors" : { 
    // Front left door 
    "Front_left_door" : { 
        "filename": "fl_door.obj", // fill in corresponding OBJ filename 
        "motion":{ 
            "pivot": [77.0, 80.0, -40.0], // fill in door's pivot point 
            "turn_axis": [0.0, -1.0, 0.0] // fill in door's rotate axis 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 199

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
199 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
        } 
    }, 
    "Front_right_door" : { 
        "filename": "fr_door.obj", 
        "motion":{ 
            "pivot": [-77.0, 80.0, -40.0], 
            "turn_axis": [0.0, 1.0, 0.0] 
        } 
    }, 
    "Rear_left_door" : { 
        "filename": "rl_door.obj", 
        "motion":{ 
            "pivot": [77.0, 80.0, -160.0], 
            "turn_axis": [0.0, -1.0, 0.0] 
        } 
    }, 
    "Rear_right_door" : { 
        "filename": "rr_door.obj", 
        "motion":{ 
            "pivot": [-77.0, 80.0, -160.0], 
            "turn_axis": [0.0, 1.0, 0.0] 
        } 
    }, 
    "Hood" : { 
        "filename": "hood.obj", 
        "motion":{ 
            "pivot": [0.0, 102.0, -18.0], 
            "turn_axis": [-1.0, 0.0, 0.0] 
        } 
    }, 
    "Trunk" : { 
        "filename": "trunk.obj", 
        "motion":{ 
            "pivot": [0.0, 115.0, -313.0], 
            "turn_axis": [1.0, 0.0, 0.0] 
        } 
    } 
}, 
 
5) 找到“lamps”对象，它是一组描述汽车有哪些类型的灯，然后 AVM 可以单独控制它们： 
属性 类型 描述 
"loose_parts" 
 
一系列对（ “网格名
称” ， “组件名
称” ） 
1. 建立网格和组件之间的关系 
2. 在 AVM 演示车中，尾灯的一部分属于后备箱。当后备箱打开时，它应该仍然在
后备箱上。所以我们指定：- Taillights_on_trunk （网格）属于Trunk （组件）  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 200

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
200 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
-车身尾灯 （网格）属于身体 （成分） 
 
 
"lamps" : { 
    /* 
        Now we only support these lamps, please set corresponding object name in the *.obj file 
        [ASSET_LIGHT_HEADLIGHT] = "Headlights", 
        [ASSET_LIGHT_TAILLIGHT_ON_TRUNK] = "Taillights_on_trunk", 
        [ASSET_LIGHT_TAILLIGHT_ON_BODY] = "Taillights_on_body", 
        [ASSET_LIGHT_TURN_L] = "Left_turn_signal", 
        [ASSET_LIGHT_TURN_L_ON_BODY] = "Left_turn_signal_on_body", 
        [ASSET_LIGHT_TURN_L_ON_DOOR] = "Left_turn_signal_on_door", 
        [ASSET_LIGHT_TURN_L_ON_TRUNK] = "Left_turn_signal_on_trunk", 
        [ASSET_LIGHT_TURN_R] = "Right_turn_signal", 
        [ASSET_LIGHT_TURN_R_ON_BODY] = "Right_turn_signal_on_body", 
        [ASSET_LIGHT_TURN_R_ON_DOOR] = "Right_turn_signal_on_door", 
        [ASSET_LIGHT_TURN_R_ON_TRUNK] = "Right_turn_signal_on_trunk", 
 
        Example: 
        "Right_turn_signal" : { 
            "filename": "r_turn_signal.obj", 
            "loose_parts" : [ 
                "Right_turn_signal_on_trunk",  // this is the object name in r_turn_signal.obj 
                "Trunk", 
                "Right_turn_signal_on_body", 
                "body", 
                "Right_turn_signal_on_door", 
                "Front_right_door" 
 ] 
    }, 
    */ 
    // Headlights 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 201

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
201 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
    "Headlights" : { 
        "filename": "headlights.obj" // fill in corresponding OBJ filename 
    }, 
    // Turn signal 
    "Right_turn_signal" : { 
        "filename": "r_turn_signal.obj" 
    }, 
    // Turn signal 
    "Left_turn_signal" : { 
        "filename": "l_turn_signal.obj" 
    }, 
    // Taillights, it includes 2 parts. One is on the trunk, another is on the body 
    "Taillights" : { 
        "filename": "taillights.obj", 
        "loose_parts" : [ 
            "Taillights_on_trunk", "Trunk", // One part is on the trunk 
            "Taillights_on_body", "body" // One part is on the body 
        ] 
    } 
}, 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 202

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
202 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
6) 查找“windows”对象，它是一组描述汽车窗户的对象： 
属性 类型 描述 
"loose_parts
" 
一系列对
（ “网格名
称” ， “组件
名称” ） 
1. 建立网格和组件之间的关系 
2. 在 AVM 演示车中，一些窗户属于车门。当车门打开时，窗户应该在车门上。因此我们
指定：- Front_left_window （网格）属于Front_left_door （组件）  
- Front_right_window （网格）属于Front_right_door （组件）  
- Rear_left_window （网格）属于Rear_left_door （组件）  
- Rear_right_winodw （网格）属于Rear_right_door （组件）  
- Front_window （网格）属于body （组件）  
- Rear_window （网格）属于body （组件） 
 
 
"windows": { 
    "filename": "windows.obj", // fill in corresponding OBJ filename 
    "loose_parts" : [ 
        "Front_left_window", "Front_left_door", 
        "Front_right_window", "Front_right_door", 
        "Rear_left_window", "Rear_left_door", 
        "Rear_right_window", "Rear_right_door", 
        "Front_window", "body", 
        "Rear_window", "body" 
    ] 
}, 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 203

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
203 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
7) 其他：vehicle.json是AVM 3D的配置文件，除了设置读取的OBJ文件和纹理外，还有其他重要的配置可
以设置。 
▪ version 
o 这是 JSON 的版本号，请勿编辑它。 
o “版本”：“1.0.5” 
▪ “name” 
o 车辆名称，它不会显示在 AVM 屏幕上，只显示在日志文件中。 
o “名称”：“演示” 
▪ “camera_path” 
o 指定要读取的 JSON 文件。 
o “camera_path”：“path.json” 
o 它用于前/后 3D 显示模式（见下图） 。驾驶员可以改变不同的视角来检查汽车周围的安全。当视角
改变时，虚拟摄像头将平稳过渡到当前视角。整个虚拟摄像头系统在 JSON 文件中定义。 
o 前置后置 3D 显示模式 
o JSON 由 UnityCameraPathEditor 生成。它是一种 GUI 工具，可让用户轻松高效地定制虚拟相机
系统。如何使用 UnityCameraPathEditor 设计虚拟相机系统，请参阅 3D 虚拟相机系统。 
▪ “env_mesh” 
o 指定碗的内半径、外半径和高度。 
o 内半径必须小于或等于外半径。 
o 在3D世界中，默认的公制单位是厘米。 
"env_mesh" : { 
"radius" : [750.0, 1500.0],  // inner radius=750 cm, outer radius=1500 cm 
"height" : 1500.0    // height = 1500 cm 
}, 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 204

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
204 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
▪ “fxaa” 
o 快速近似抗锯齿，它是渲染时是否应用抗锯齿的标志。启用它将提高整个帧的视觉质量，使汽车具
有平滑的边缘，但也会增加 CPU 和 GPU 的负载。 
   "fxaa" : true, 
 
      ``` 
 
      ![fxaa_diff](../images/presentation-3d-model/fxaa_diff.png "FXAA compared") 
 
障碍物地图 3D 模型要求 
除了3D汽车模型定制之外，AVM系统中通常还允许定制一些驾驶辅助功能，即辅助线（停车辅助线）和障碍物标
记。这些功能可以为停车时的转向提供适当的车辆操纵辅助信息，帮助驾驶员更顺利地停车。  
 
 
• 车轮轨迹线： 
线是动态的，随着转向角度的不同而变化，风格各异。在 AVM 系统中，指导线是通过编程绘制的，您可以
在 AVM 代码库中找到完整的源代码和实现细节，随意修改它以满足您的需求。我们不会在接下来的章节中
讨论它，因为它不属于建模要求的范围。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 205

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
205 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• 障碍物标记： 
与指引不同，障碍物标记更为通用且固定。它通常与雷达传感器配合使用，当雷达检测到车辆周围的障碍物
时，AVM 会在屏幕上显示最近的板以提醒驾驶员。上图说明了障碍物标记的样子。为了方便自定义板的外观
和布局，我们将所有板视为 3D 模型，我们称之为“障碍物地图”。 
 
1. 在设计阶段，艺术家会制作所有电路板并将它们放置在预先定义的位置。电路板的放置位置由设计决定，通
常与安装在汽车上的雷达传感器的位置和方向密切相关。 
2. 运行时，AVM 根据雷达传感器检测的结果显示某些电路板。 
 
 
建模要求 
障碍物地图包含所有板子，导出为OBJ文件和MTL文件。模型坐标系与3D汽车模型相同。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 206

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
206 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
关于每块板，为了获得更好的视觉质量和性能，必须遵循一些规则： 
• Board 是一个网格，切片网格，避免自相交、自遮挡和网格与网格相交。四边形是更好的选择。  
• 每个板块必须有唯一的名称。名称是访问特定板块并切换其可见性的 ID。 
• 使用漫反射纹理控制板的外观，包括板的颜色和透明度。导出时纹理信息将存储在  MTL 文件中。 
 
 
 
 
纹理要求 
仅使用漫反射纹理来呈现棋盘。 
• 分辨率：512x512 或 256x256。宽度和高度均为 2 的幂。 
• 内部格式：RGBA 
• 导出文件格式：PNG 
 
为了优化 3D 渲染，还必须将所有板的漫反射纹理转换为压缩纹理格式。您还可以从附录：纹理压缩中找到压缩
纹理的分步过程。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 207

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
207 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
最终输出文件 
以下是 AVM 演示的障碍物地图的输出文件，包括一个 OBJ、一个 MTL 和 3 个 PKM 文件。 
 
 
如何使用自定义障碍地图模型 
1. 打开Obstacles Map的MTL文件，修改漫反射纹理字段以引用压缩纹理。 
– 找到map_Kd，将纹理路径从绝对路径修改为相对路径，因为漫反射纹理和MTL文件在设备上会放在同一
路径下。 
– 将文件扩展名从 PNG 更改为 PKM 
 
2. 将 OBJ、MTL 和纹理推送到路径：/etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb root 
$adb remount 
 
// push all OBJ into 3D asset path 
$adb push obstacles_map.obj /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push obstacles_map.mtl /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push red.pkm /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push yellow.pkm /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
$adb push green.pkm /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
 
3. 编辑 /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 中的 vehicle.json 以完成自定义障碍物地图
设置。 
找到“obstacles”对象，为障碍物地图填写您的模型文件名。 
"obstacles": { 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 208

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
208 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 "filename": "obstacles_map.obj" 
} 
 
 
 
 
 
附录 
纹理压缩 
1. 下载 Mali 纹理压缩工具来转换您的纹理。 （https://developer.arm.com/tools-and-software/graphics-an
d-gaming/mali-texture-compression-tool） 
2. 打开Mali纹理压缩工具导入纹理 
3. 点击压缩图标 
4. 在压缩选项菜单上选择选项卡：ETC1/ETC2 
5. 选择压缩格式：RGBA8_ETC2_EAC 
6. 按OK按钮开始压缩 
7. 最后输出压缩纹理（PKM）： 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 209

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
209 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 210

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
210 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
10.3 3D 相机 
3D虚拟摄像系统 
在 3D 显示模式下，车辆周围有多个预定义的虚拟摄像头，为驾驶员提供不同的视角（见下图） 。当驾驶员按下 A
VM 上的不同摄像头图标时，我们可以看到从之前的虚拟摄像头视图到当前虚拟摄像头视图的平滑过渡。在  AVM 
中，我们默认有两组虚拟摄像头： 
• 在前方3D显示模式下，车辆周围有6个虚拟摄像头。 
• 在后部3D显示模式下，车辆周围有4个虚拟摄像头。 
 
这些虚拟摄像机的位置和朝向在很大程度上取决于所用车辆的类型。您可以将虚拟摄像机放置在轿车、房车、面
包车或跑车的不同位置。AVM 具有允许您自定义自己的虚拟摄像机并在它们之间进行转换的功能。本章我们有一
个教程来介绍如何实现这一目标。 
 
 
{＃测试} 
 
JSON 
所有虚拟相机都是预定义的，而不是动态的。所以我们必须将这些虚拟相机系统存储在一个媒体中，然后你可以
替换这个媒体来让 AVM 加载不同的虚拟相机系统。最后我们使用 JSON 作为媒体。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 211

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
211 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
3D AVM 中使用了 2 个 JSON 文件，它们位于以下路径： /etc/automotive/mt6771/avmdata/asset_3d/ve
hicle/ 
• vehicle.json 是描述 3D 车辆模型的文件。您可以在 3D 模型中找到有关它的更多详细信息 
• path.json 是存储虚拟相机设置的文件。所有虚拟相机的信息都写在这里。 
– 与可以轻松打开和修改内容的 vehicle.json 不同，path.json 不是设计用来由用户直接编辑的，而是由我
们称为“UnityCameraPathEditor”的工具生成的。 
 
什么是 UnityCameraPathEditor？ 
UnityCameraPathEditor 是基于 Unity Engine (https://unity.com/) 的插件，该工具功能强大，使用简单，有以
下几个优点： 
• 3D 环境 
– 您可以将 3D 车辆模型和虚拟相机放置在 3D 场景中，可以轻松微调虚拟相机的位置，面向 3D 世界。 
• 实时预览 
– 放置虚拟相机后，您可以直接预览视角。它可以方便地确认和锁定您想要在 3D AVM 中显示的视图。 
• 自动路径生成 
– 放置完所有虚拟相机后，工具会自动生成一条路径将所有虚拟相机连接成一条闭合路径。当您在任意两个
虚拟相机之间切换不同视图时，虚拟相机将在它们之间进行平滑过渡。 
 
UnityCameraPathEditor 的快速演示 
安装 Unity Engine 
• 由于 UnityCameraPathEditor 是基于 Unity 引擎的插件，所以如果你之前使用过 Unity 引擎，那么上手会
比较容易。如果你从未使用过 Unity，可以参考本教程来熟悉 Unity Editor 的界面。 
• 从 Unity 下载档案下载 Unity 2018.4.2 并安装。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 212

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
212 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
创建Unity项目并导入UnityCameraPathEditor插件 
• 安装Unity后，打开Unity并创建一个新的空项目 
 
 
• 当项目打开后，您将看到 Unity 编辑器，其中有几个窗口： 
– 场景层级结构：它包含当前场景中每个对象的列表。当您在场景中添加或移除对象时，它们也会在层级结
构中出现或消失。 
– 场景视图：这是您对所创建的世界的交互式视图，您可以选择场景中的任何对象，使其平移、旋转和缩放。  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 213

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
213 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
– 游戏视图：它由场景中的相机渲染而成。您可以使用一个或多个相机来控制实际看到的帧。  
– 检查器窗口：它显示有关场景中当前选定对象的详细信息，包括所有附加组件及其属性，并允许您修改场
景中对象的功能。 
– 项目窗口：在此窗口中，您可以访问和管理属于您的项目的资产。 
 
 
• 导入插件：UnityCamPathEditor.unitypackage到项目。 
1. 点击UnityCamPathEditor.unitypackage导入 
2. 导入后，有一个“Plugin”文件夹，编辑器用到的资源，脚本等都在这里面。 
3. 点击“Plugin/Demo/Demo.unity”启动演示场景。 
4. 您会发现演示场景包括一辆演示车和周围的几个虚拟摄像机。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 214

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
214 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 215

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
215 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
查看演示场景 
• CameraManager 对象 
– 它位于场景层次结构中。它包含所有添加的虚拟摄像机。演示场景中已经有 10 个虚拟摄像机，每个虚拟
摄像机都有其位置和视角。 
• CameraManager（脚本） ：附加在 CameraManager 对象上的主要组件。 
– 这是管理虚拟摄像机的入口（添加或删除） 。 
– 它是制作 AutoGenPath（脚本）组件来对选定的虚拟相机进行分组的入口。 
– 负责导出JSON文件。 
• AutoGenPath（脚本） ：用于对选定的虚拟相机进行分组并为其生成路径的组件。在演示场景中，Camera
Manager 对象上附加了 2 个 AutoGenPath 组件： 
– 前 6 个虚拟相机按 AutoGenPath 分组并命名为“0_path”。这些虚拟相机用于正面 3D 显示模式。 
– 最后 4 个虚拟摄像头由 AutoGenPath 分组并命名为“1_path”。这些虚拟摄像头用于后置 3D 显示模式。 
 
 
 
• 主相机对象 
– 这是 Unity 场景中真正的活动相机。当您按下“播放”按钮时（玩）进入PLAY模式，游戏视图显示的是
主摄像头看到的画面。 
• PathRunner（脚本） ：用于模拟虚拟相机如何在不同的虚拟相机视图之间转换。 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 216

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
216 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
示范 
1. 点击“播放”按钮（玩）使编辑器进入PLAY模式。 
2. 在场景视图中，你会发现一条绿色路径连接前 6 个虚拟摄像机，该路径由 AutoGenPath（脚本）自动生成。 
3. 如上所述，演示场景中有 2 条路径，您可以在 PathRunner（脚本）中选择从“0_path”到“1_path”的
“路径”来更改场景中当前的活动路径。 
 
 
 
4. 现在我们使用0_path来演示虚拟相机如何在不同视图之间转换。 
5. 仍然在 PathRunner(Script) 中，我们设置 
– 'From' = 0_New_Camera 
– 'To' = 2_new_camera 
6. 单击“开始自动播放动画”来模拟过渡。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 217

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
217 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
7. 在游戏视图中，你会看到从“0_New_Camera”到“2_new_camera”的平滑过渡 
8. 现在，您可以将“From”、“To”更改为 PathRunner（脚本）中的任意不同的虚拟相机。您还可以更改“P
ath”以检查另一个相机组中的过渡。 
9. 最后一步，按“导出路径”将整个虚拟摄像机系统导出为 JSON 文件。 
– 在演示场景中，CameraManager对象上附加了2个AutoGenPath（脚本） ，因此JSON中会有2组虚拟相
机和路径设置。 
 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 218

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
218 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
定制虚拟摄像系统 
上一章我们通过Demo Scene，了解了UnityCameraPathEditor的功能。本章我们将介绍如何定制自己的虚拟相
机系统。 
 
如何添加虚拟摄像头 
在编辑之前，请确保编辑器未处于播放模式，“播放”按钮（玩) 未按下。在 PLAY 模式下的任何更改、修改都不
会被保存。 
1. 在 CameraManager（脚本）中单击“添加相机”。 
2. 列表、场景层次结构和场景视图中有一个新的虚拟相机。 
 
 
3. 在场景层次结构中选择新的虚拟相机，您可以通过两种方式改变其姿势： 
– 在变换组件 (Transform Component) 的位置、旋转和比例字段中输入值。 
– 一种有效的方法是使用鼠标在场景视图中手动调整相机的姿势。 
– 调整虚拟相机姿态时可以实时预览视角 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 219

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
219 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
4. 如果您想删除某个虚拟相机，只需按下旁边的 “删除”按钮，该相机也将从场景层次结构和场景视图中删除。  
 
预览虚拟相机视角 
编辑时预览的方式有两种： 
• 在场景层次结构中选择您想要预览的虚拟相机，您将在场景视图的右下角看到一个预览窗口。  
• 在CameraManager（脚本）中找到“Runtime active camera”字段，选择要预览的虚拟相机，预览帧将
显示在游戏窗口中 
 
 
 
如何生成路径 
AutoGenPath（脚本）负责为选定的虚拟相机生成路径。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 220

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
220 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
• CameraManager 对象上附加了多少个 AutoGenPath（脚本） ，就生成了多少条路径。 
• 路径按航点列表的顺序连接虚拟摄像机， 
• 路径只在编辑器处于播放模式时生成。在编辑时，您不会看到任何路径。 
 
按照以下步骤生成路径： 
1. 单击 CameraManager (脚本) 中的“添加路径组件”按钮 
2. 附加在 CameraManager 对象上的新的 AutoGenPath（脚本） 。 
3. 输入航点列表的大小。这表示您要将多少个虚拟摄像机连接为一条路径。 
4. 从场景层级中拖拽虚拟相机到航点列表的每个字段中。Path 会按照航点列表的顺序依次连接虚拟相机。 
5. 必要时修改样本数量。采样点越多，路径越平滑，但路径数据的大小也会增加。 
 
 
 
6. 点击“播放”按钮（玩）进入PLAY模式查看新添加的路径。 
7. 选择主摄像头查看PathRunner（Script） ，你会发现有一条新路径生成。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 221

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
221 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
微调路径：虚拟航点 
如上所述，路径将依次连接选定的虚拟相机，形成一条封闭路径。但如果 2 个相邻的虚拟相机相距较远，它们之
间的路径可能会更直。下图是一个例子，如何调整“5_New_Camera”和“3_New_Camera”之间的路径，使它
们之间的路径弯曲连接？虚拟航点是解决方案。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 222

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
222 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
• 在 CameraManager (脚本) 中单击“添加虚拟航点”。 
• 你可以在Scene Hierarchy 中找到一个名为“Waypoint”的对象。选择它，你可以在Scene View 中找到它。 
• 在 Scene View 中，将 'Waypoint' 放置在 '5_New_Camera' 和 '3_New_Camera' 之间。并确保 Waypoin
t' 面向车辆。 
• 修改航点列表的大小，为“航点”添加一个字段。 
• 将“Waypoint”从“Scene Hierarchy” 拖到字段中。注意顺序，将“Waypoint”插入“5_New_Camera”
和“3_New_Camera”之间。 
 
 
• 进入PLAY模式，检查路径。 
– 路径连接“5_New_Camera”、“Waypoint”和“3_New_Camera”。 
– 路径更加弯曲。 
– “航点”不是虚拟相机，因此您不会在“从”和“到”中找到它。它只是路径的中间点。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 223

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
223 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
在 AVM 中使用定制的虚拟摄像机系统 
• 如何使用？ 
– 检查完所有虚拟摄像机的视图和转换后，您可以按“导出路径”按钮将整个虚拟摄像机系统保存为 JSON。
然后按照以下 命令替换 AVM 中的旧 JSON： 
$adb push path.json /etc/automotive/mt6771/avmdata/asset_3d/vehicle/ 
 
• 如何控制 
– 您可以通过 avm_surroundview_camera_state 结构控制哪个虚拟摄像头处于活动状态以及转换进度。
此结构在 avm_runtime.h 中定义。 
typedef struct { 
    int32_t path_index;         // path group index, from 0 ~ (Path group count - 1) in JSON asset 
    int32_t active_from_index;  // starting position of virtual animation. Value range depends on JSON. 
    int32_t active_to_index;    // end position of virtual camera animation. Value range depends on JSON. 
    float active_progress;      // ranges from 0.0f(start) ~ 1.0f(end) 
    int32_t expo_mode;          // Enters exhibition mode, virtual camera moves around the vehicle 
    float expo_progress;        // Current position of expo camera. It's normalized value, virtual camera will 
walk around vehicle through 0~1. 
} avm_surroundview_camera_state; 
 
▪ path_index：选择要使用的路径。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 224

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
224 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
o Index 是 CameraManager 对象中附加的 AutoGenPath 的顺序。 
▪ active_from_index：选择哪个虚拟相机作为过渡的起点。 
o Index 是 AutoGenPath 中包含的虚拟相机的顺序。 
▪ active_to_index：选择哪个虚拟相机作为过渡的终点。 
o Index 是 AutoGenPath 中包含的虚拟相机的顺序。 
▪ active_progress：标准化的值（0.0~1.0）。 
o 意味着虚拟摄像机被放置在过渡的开始处。 
o 表示虚拟相机位于过渡的末尾。 
o 过渡时每帧更新进度。 
 
 
 
附录 
CameraManager Script 
选择 CameraManager 对象后，可以在 Inspector Window 中找到 CameraManager(Script)。它是管理场景中
所有虚拟相机的入口。即使您是 Unity Engine 的专家，最好也使用它来添加或删除虚拟相机 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 225

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
225 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
 
AutoGenPath Script 
它允许您选择多个虚拟相机来生成路径，该路径将： 
• 封闭路径 
• 连接所有选定的虚拟摄像机 
 
 
PathRunner Script 
它是一个用于验证生成的路径和转换的模拟器（测试平台） 。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 226

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
226 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 227

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
227 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
11 源代码 
源代码概述 
以下是源代码结构的简要视图。 
 
Android AVM 源代码树 
# vendor/mediatek/proprietary/hardware/mtkavm 
mtkavm 
├─apps 
│  ├─avmdemoapk    # AVM Demo APK 
│  └─avmcalibapk   # AVM Calibration APK 
│ 
├─libalgo  # prebuild libraries 
│  └─mt6873 
│      └─arm64 
└─services 
    ├─avmdaemon  # AVM service 
    │  ├─avmclientdemo  # mtkavmclient 
    │  ├─client 
    │  ├─evpp 
    │  ├─fastavmservice 
    │  ├─fastcalibservice 
    │  ├─inc 
    │  ├─mt6873 
    │  │  ├─avmdata 
    │  │  │  ├─asset_3d  // 3D model 
    │  │  │  │  ├─Common 
    │  │  │  │  └─vehicle 
    │  │  │  ├─test-480i 
    │  │  │  ├─test-720p 
    │  │  │  └─test-fa-customized 
    │  │  └─calibdata  // calibration data, param*.bin 
    │  ├─mtkgpuproc 
    │  │  ├─inc 
    │  │  └─src 
    │  │      ├─guideline_2dview 
    │  │      ├─guideline_3dview 
    │  │      └─marker_3dview 
    │  └─test 
    ├─doc 
    └─libguideline 
        ├─include 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 228

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
228 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
        └─src 
 
Yocto AVM 源代码树 
# src/multimedia/mtkavm_v2 
mtkavm_v2 
├─avmdaemon 
│  ├─avmclientdemo 
│  ├─client 
│  ├─fastavmservice 
│  ├─fastcalibservice 
│  ├─inc 
│  ├─mt8675 
│  │  ├─avmdata 
│  │  │  └─asset_3d 
│  │  │     ├─Common 
│  │  │     └─vehicle 
│  │  └─calibdata 
│  ├─mtkgpuproc 
│  │  ├─inc 
│  │  └─src 
│  │      ├─guideline_2dview 
│  │      ├─guideline_3dview 
│  │      └─marker_3dview 
│  └─test 
├─doc 
├─libalgo 
│  ├─inc 
│  └─mt8675 
│      └─arm64 
└─libguideline 
    ├─include 
    └─src 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 229

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
229 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
12 调试 AVM 
在 Android 上调试 AVM 
日志级别 
所有 AVM 日志都将通过 logcat 输出。您可以在 default_config.json 中更改日志级别，重新启动系统即可使其
生效。 
日志级别： 
• LOG_LEVEL_CRITICAL 0 
• LOG_LEVEL_ERROR 1 
• LOG_LEVEL_INFO 3 
• LOG_LEVEL_DEBUG 4 
• LOG_LEVEL_VERBOSE 5 
 
# /vendor/etc/automotive/xxxx/avmdata/default_config.json 
{ 
    "mtkfastavm_config": { 
        "version": "2.3", 
        "log_level" : 5,  // set loglevel here 
        "car_dimensions" : { 
            //... 
        }, 
        // ... 
    }, 
    //... 
} 
 
hwasan  
Android官方页面：https://source.android.com/docs/security/test/hwasan?hl=zh-cn  
 
Sanitizing individual targets 
只要 libc.so 也经过清理，就可以在常规（未清理）构建中针对每个目标启用 HWASan。将 hwaddress: true 添
加到 bionic/libc/Android.bp 中“libc_defaults”的清理块中。然后在您正在处理的目标中执行相同操作。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 230

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
230 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
请注意，清理 libc 可在整个系统范围内标记堆内存分配，并检查 libc.so 内内存操作的标记。如果错误的内存访问
发生在 libc.so 中（例如，delete() 互斥锁上的 pthread_mutex_unlock()） ，这甚至可以捕获未启用 HWASan 的
二进制文件中的错误。 
 
如果整个平台都是使用 HWASan 构建的，则无需更改任何构建文件。 
 
# bionic/libc/Android.bp 
cc_defaults { 
    name: "libc_defaults", 
    # .... 
    sanitize: { 
        address: false, 
        hwaddress: true,  // Add this line 
        integer_overflow: false, 
        fuzzer: false, 
    }, 
    # .... 
} 
 
# Then enable hwasan for your module, here is avm 
# LOCAL_SANITIZE := hwaddress (Android.mk) or sanitize: { hwaddress: true } (Android.bp). 
 
# mtkavm/services/avmdaemon/Android.mk 
 
LOCAL_MODULE := mtkfastavm 
LOCAL_SANITIZE := hwaddress 
.... 
 
LOCAL_MODULE := libmtkavmfunction 
LOCAL_SANITIZE := hwaddress 
 
修改AVM的libc/Android.bp和Android.mk后，完整编译包并升级。 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 231

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
231 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
13 版本 
版本历史 
AVM 版本 描述 
v3.0-spm  3.0版 
 
AVM v3.0-spm 
全景监控器 v3.0 功能： 
物品 描述 下载 
Development Guide v3.0-spm 本网站 link 
AVM PC Tool - 
Calibration Toolkit v2.3.0 
包含工具可执行文件和示例输入文件的压缩包。 MediaTek Online 
AVM PC Tool - 
Customization Toolkit v2.3.0 
包含 3D 汽车模型定制工具和示例的压缩包。 MediaTek Online 
AVM v3.0 Source Package Android 源代码版本的附加 repo 项目。 SDK Page 
 
此版本支持以下功能： 
• AVM SDK 和演示应用程序 
• AVM SDK 支持 2D 顶视图、侧视图 
• AVM 演示应用程序支持车轮轨迹线示例 
• 光度测定对准 
• AVM 演示应用程序为单显示系统提供多种参考显示模式 
• 3D AVM，包括： 
– 带有动画车轮、车门和车灯的虚拟车辆模型的 3D 视图 
– 带动画相机的 3D 视图 
– 带雷达的 3D 视图 
– 在“Free3D”显示模式下通过触摸屏控制摄像机视角 
– 带有 3D 相机动画和布局动画的演示显示模式 
• 用于动画 3D 摄像机路径的离线 PC 编辑工具 
• 标定 
– 支持PC离线标定的AVM SDK 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 232

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
232 
MT8668 Yocto AVM 
 User Manual 
Confidential B 
– 支持目标端离线标定的AVM SDK 
– AVM SDK 支持目标端一键内联标定 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 233

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibit
ed. 
233 
MT8668 Yocto AVM 
 User Manual 
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


---
# SRC0129 MT8668_Yocto_Camera_Driver_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Camera_Driver_User_Manual_CN_V1.0.pdf

SHA-256：e2124eed82570bb848c9206a0dda5d201ed8cae25a34abc97baa8e3bb016978b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0129.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-1-28
MT8668 Yocto Camera Driver 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-1-28 江攀 正式版 
 
  
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
1 Camera Driver ···························································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 架构/进程概述 ························································································································································ 4 
1.3 配置/客制化指南 ···················································································································································· 4 
 如何添加一个新的 Sensor ··························································································································· 5 
附件一 附加条款 ····························································································································································· 24 
 
  
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
1 Camera Driver 
1.1 概述 
本章节主要说明 MT8668 Camera 移植方法以及相关问题的调试方法和思路。 
 
1.2 架构/进程概述 
Camera driver 主要分 User space 和 Kernel space 两部分，两边通过 IOCTL 传递参数。Raw sensor metadata 等放在
User space；sensor 的相关设定和 power control 是在 Kernel space。 
 
 
 
1.3 配置/客制化指南 
本节主要介绍 Camera driver 移植指南。 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
 如何添加一个新的 Sensor 
这部分对于 YUV 和 Raw sensor 步骤基本一致。 
 
1.3.1.1 移植文件列表 
• Config Files 
– \src\kernel\linux\v6.12_mt8668\co_device_module\kernel\configs\auto_yct.config 
• Kernel Space 
– \src\kernel\linux\v6.12_mt8668\co_device_module\drivers\misc\mediatek\imgsensor\inc\k
d_imgsensor.h 
– \src\kernel\linux\v6.12_mt8668\co_device_module\arch\arm64\boot\dts\mediatek\cust_mt8
668_camera_v4l2.dtsi 
– \src\kernel\modules\mt8668\camera\imgsensor\src_spm-isp8s\ 
• User Space 
– \src\multimedia\mtkcam-mt8668\mtkcam-utils\kernel-headers\mediatek\kd_imgsensor.h 
– \src\multimedia\camera-hal\mt8668\custom\common\hal\imgsensor_metadata\sensor\ 
– \src\multimedia\camera-hal\mt8668\custom\mt6881\hal\imgsensor_metadata\ 
 
1.3.1.2 修改 Config 文件 
• \src\kernel\linux\v6.12_mt8668\co_device_module\kernel\configs\auto_yct.config 
– CONFIG_CUSTOM_KERNEL_IMGSENSOR = “xxxx_mipi_raw  xxxx_mipi_raw xxxx_mipi_yuv” 
 
在上面增加新的 sensor name。 
 
1.3.1.3 在 Kernel 中添加 Sensor 文件 
• \src\kernel\modules\mt8668\camera\imgsensor\src_spm-isp8s\common\$CamDrv\ 
参考其他 sensor，在上面目录增加自己的 sensor driver 的目录，命名格式可以参考下图： 
 
 
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
1.3.1.4 添加 Sensor ID 和 Sensor Name 
• \src\multimedia\mtkcam-auto\mtkcam-utils\kernel-headers\mediatek\mt8668\kd_imgsensor.h 
• \src\kernel\linux\v6.12_mt8668\co_device_module\drivers\misc\mediatek\imgsensor\inc\kd_im
gsensor.h 
 
在以上两个文件内都添加 sensor ID 和 sensor name： 
• 添加 sensor ID 
 
 
• 添加 sensor name 
 
 
1.3.1.5 修改 dts 文件 
\src\kernel\linux\v6.12_mt8668\co_device_module\arch\arm64\boot\dts\mediatek\cust_mt8668_cam
era_v4l2.dtsi 
通过分析硬件原理图找到当前 sensor 是挂在哪个 I2C 下面，然后在对应的 I2C 下面增加 sensor 配置，如下所示： 
• 增加了 sensor0 
 
 
关于 seninf 和 sensor 的关联，可以参考下图，seninf_top 里 csi-port 的值是硬件实际连接的 csi-port。 
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
 
 
与 dts 里配置对应的就是上电时序的部分（如下所示），需要参考 sensor 规格书中的上电时序来配置。 
1
• Check power on sequence
common/imx766_mipi_raw/imx766mipiraw_Sensor.c
static struct subdrv_pw_seq_entry pw_seq[] = {
{HW_ID_MCLK, {24}, 0},
{HW_ID_RST, {0}, 0},
{HW_ID_AVDD, {2800000}, 0},
{HW_ID_AFVDD, {2800000}, 0},
{HW_ID_DVDD, {1100000}, 0},
{HW_ID_DOVDD, {1800000,1800000}, 1000},
{HW_ID_MCLK_DRIVING_CURRENT, {4}, 1000},
{HW_ID_RST, {1}, 3000},
};
const struct subdrv_entry imx766_mipi_raw_entry = {
.name = "imx766_mipi_raw",
.id = IMX766_SENSOR_ID,
.pw_seq = pw_seq,
.pw_seq_cnt = ARRAY_SIZE(pw_seq),
.ops = &ops,
};
1.   Add power sequence info
– { power_type, {voltage min,voltage max}, delay_time in us }
- Voltage max is enqual to min if not specifying or less than min
– Power up sequence from top to bottom
– Power off sequence from bottom to top
– Set mclk frequency (24M) and driving current (4mA)
2.   Add subdrv entry
– Naming rule: $(folder-name)_entry
– Macro will generate sensor-list automatically
➢ Rename a copy according to the existing sensor driver 
source code, and the part of the register and sensor 
info should be confirmed with the vendor.
o
r
d
e
r
PowerType
#define SENSOR_DRVNAME_IMX766_MIPI_RAW “imx766_mipi_raw”
Voltage min,max
 Delay
Frequency
Current
Important change
 
以 max96712 为例： 
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
注：需要在 sensor node 下新增一个属性：mediatek,legacy-search; 
 
 
1.3.1.6 增加新的 Meta 文件 
参考 max96712_mipi_yuv 文件进行修改添加，可以直接复制，然后修改文件名和文件内的 sensor name。 
 
• \src\multimedia\camera-hal\mt8668\custom\common\hal\imgsensor_metadata\sensor\ 
• \src\multimedia\camera-hal\mt8668\custom\mt6881\hal\imgsensor_metadata\ 
 
如需增加新的分辨率，可以参考以下代码。 
 
 
 
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
1.3.1.7 增加新的 Meta 文件(json) 
/src/multimedia/camera-hal/mt8668/mtkcam-core/external/firmware/metadata 下参考
max96712_mipi_yuv 文件进行修改添加，可以直接复制，然后修改文件名和文件内的 sensor name。 
如需增加新的分辨率，可以参考以下代码。 
 
 
1.3.1.8 配置 Sensor Format 
根据 bridge 输出的 format，配置 UYVY 或者 YUYV： 
\src\kernel\modules\mt8668\camera\imgsensor\src_spm-isp8s\ 
common\max96712_mipi_yuv\max96712mipiyuv_Sensor.c 
查找所有配置 sensor_output_dataformat 的地方改为实际的 format。 
 
 
1.3.1.9 配置 Modestruct  
与供应商确认设置的相关参数，并将其填入结构体中。 
 
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
Pclk->pixel clock， 单位 Hz 
Linelength->HTS 
Framelength->VTS  
linelength × framelength × fps= pclk 
Grabwindow_width-> camera size 宽（在 MT8668 上没有这个值） 
Grabwindow_height->camera size 高（在 MT8668 上没有这个值） 
Mipi_pixel_rate-> mipi datarate × lane_number/bitdepth, YUV bitdepth = 16 
 
 
下图是借用了之前版本的一个对 winsize info 的解释，来描述各个字段的含义： 
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
 
 
限制: full size（4:3）或 full size（16:9）的宽和高需要进行 4 倍数对齐。 
配置 sensor 输出的宽高，与 Grabwindow_width/Grabwindow_height 的大小一致。 
Grab window 要求： 
1. 设置的宽必须是 16 的倍数，高必须为 4 的倍数。 
2. 相同比例下视角一致：4:3 与 16:9 要求 sensor 输出的 window 保证水平方向和 full size 视角一致。 
3. Grab window 设置建议和 sensor 输出的 window 一致。 
特殊情况下是：grabwindow_width(height) ≤ sensor output width(height)-startx(y) 
 
1.3.1.10 配置 static_ctx 
如下图所示： 
1. sensor_id 字段需填对应的 sensor ID。 
2. i2c_add_table 一般只配置 0x52 即可，即实际的解串器的地址。 
3. 配置 mipi_lane_num，这里表示是 MIPI 的 lane 的个数。 
4. cam_type 是按照模组场景的类型填写，如果是单 sensor 的话，可以填 MTK_SENSOR_TYPE_SINGLE，它有如下
值可以选择： 
– SENSOR_TYPE_COMB_AVM 表示组帧 AVM 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
– SENSOR_TYPE MUTI 表示 multicam 
– SENSOR_TYPE_NON_COMB_AVM 表示非组帧 AVM 
5. sensor_output_dataformat 表示模组输出的数据的 format，填实际的 format 即可 
 
 
6. multicam_group: 表示是第几组 group，0 和 1 是保留给 single 或者 AVM 的驱动来填写的。 
所以如果是第一组 multicam，这个字段要填 2，如果是第二组 multicam，这个字段要填 3，依次类推。 
默认这个字段最大只能是 3。 如果需要增加，需要修改代码 adaptor-drv.c 里的数组 multicam_info_table 的
size。 
 
1.3.1.11 配置 VC 信息 
如果是单个 VC，可以进行如下配置： 
 
如果是有多个 VC，可以进行如下配置，主要是修改 channel 和 user_data_desc： 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
 
 
1.3.1.12 配置获取 Sensor ID 函数 
  
 
1.3.1.13 配置 Sensor Init 函数 
下面的函数内主要是配置模组的设置，需要客户和供应商调试生成。 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
 
 
1.3.1.14 配置 get_sensor_usage 函数 
 
 
它的值可以选择下面几种，COMB 表示组帧 AVM，MUTI 表示 multicam，NONCOMB 表示非组帧 AVM，单 sensor 的
话配置为 SINGLE。 
 
 
 Streaming Control 
初始化的设定全部放到 sensor_init() 函数里。MIPI enable 和 disable 函数放到 streaming_control() 函数中。 
 
 
 subdrv_static_ctx 的成员解析 
Member Meaning 
sensor_id Sensor ID define in kd_imgsensor.h. 
reg_addr_sensor_id Sensor register address where sensor ID is read. Up to 3 bytes. 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
Member Meaning 
i2c_addr_table I2C write ID, end in 0xff, 4 for maximum. E.g., i2c_addr_table = {0x20, 
0x6e, 0xff},. 
eeprom_info The address of eeprom_info_struct. If there is no eeprom device, set to 0.  
eeprom_num Array size of the eeprom_info_struct. If there is no eeprom device, set to 0.  
resolution Full pixel size of sensor output. 
mirror Set IMAGE_HV_MIRROR if the sensor orientation is 180 degrees difference from 
module orientation. 
mclk Overwrite MCLK frequency (MHz) 
isp_driving_current Overwrite MCLK driving current (mA) 
sensor_interface_type Data output interface type. Set default MIPI. 
mipi_sensor_type C-PHY or D-PHY. 
mipi_lane_num How many lanes/trios of MIPI-PHY. 
ob_pedestal OB offset. General is 64. 
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
frame_length_max Maximum framelength. 
ae_effective_frame AE effective frame 
frame_time_delay_frame The frame “frame length” setting take effect. Sony sensor filled in 3; other sensors 
filled in 2. 
start_exposure_offset Parameter tuned in CTS sensor fusion test. 
pdaf_type Reference enum IMGSENSOR_PDAF_SUPPORT_TYPE_ENUM. 
hdr_type Reference enum IMGSENSOR_HDR_SUPPORT_TYPE_ENUM. 
seamless_switch_support If sensor supports seamless switch, set 1 to enable seamless switch fu nction. 
temperature_support Set to 1 if sensor supports temperature sensor readout. 
g_temp Implement get temperature function. 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
Member Meaning 
g_gain2reg Implement analog gain to register mapping rule. 
s_gph Implement set enable/disable group hold function. 
s_cali Implement the function to write data from eeprom_info_struct to sensor (e.g., QSC, 
cross-talk, …) 
reg_addr_stream Sensor register address where streaming on/off is controlled. 
reg_addr_mirror_flip Sensor register address where mirror/flip on/off is controlled. No use when set to 0.  
reg_addr_exposure Sensor register address where set exposure line. Up to 3 channels of exposure. Up to 
3 bytes. 
long_exposure_support Set to 1 if sensor supports long exposure left shift function. 
reg_addr_exposure_lshift Sensor register address where long exposure left shift is set. 
reg_addr_ana_gain Sensor register address where analog gain is set. Up to 3 channels of exposure. Up to 
3 bytes. 
reg_addr_frame_length Sensor register address where framelength is set.  
reg_addr_temp_en If “temperature_support” is set to 1. Sensor register address where temperature 
sensor on/off is controlled. 
reg_addr_temp_read If “temperature_support” is set to 1. Sensor register address where temperature 
output is read. 
reg_addr_auto_extend For Sony sensor, sensor register address where auto extend function enable/disable is 
controlled. 
reg_addr_frame_count For Samsung sensor, sensor register address where frame count is read t o determine 
whether sensor stream is off or not. 
reg_addr_fast_mode For Sony sensor, sensor register address where fast mode on/off is controlled.  
init_setting_table The address of sensor initial setting table. 
init_setting_len Array size of the sensor initial setting table. 
mode The address of subdrv_mode_struct. 
sensor_mode_num Array size of the subdrv_mode_struct. 
list The address of customized feature control list. 
list_len Array size of the customized feature control list. 
checksum_value The calculated value when Test Pattern output, for Camera Auto Test.  
multicam_group Multicam group number 
 
1.3.1.15 Sensor Mode 配置 
Subdrv_mode_struct mode_struct[] 这个结构体数组是用来存不同 Sensor Mode 的数据配置的。 
下面以 Preview 为例子说明了一些需要客户修改的字段，对于 YUV sensor，一般后面的 Sensor Mode 和 Preview 是
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
完全一样的。对于 Raw sensor 可能会有差异，根据实际需要来配置。
 
 
1.3.1.16 Driver 功能 
 Driver 操作函数 List 
Driver 函数的 list 如下： 
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
 
 
在以 adapter 名字开头的 imgsensor 的代码里，其往往是通过 subdrv_call 的方式来调用到 driver 代码里的，就是上
面的函数 list，比如： 
 
 
上面显示的调用就会 call 到上面函数 list 里的 get_sensor_id。 
上面 list 里有很多 common 开头的函数，这个部分是用的通用的处理流程。不需要在 sensor driver 里特别实现， 
下面就不做过多介绍了。 
针对贵司可能改到的 get_imgsensor_id 和 open 函数，请参考下面两个章节。 
 
 get_imgsensor_id 函数 
开机 search sensor 时会通过 get_imgsensor_id 函数读取 ID。若能成功读到 ID，在 UI 上显示 Camera APP 的图标. 
下面函数主要有两个功能：一获取 sensor ID，二判断是否有连接到模组。 
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
 
 
 Open 函数 
每次进 camera 时会调用。 
读 sensor_id，确认 I2C 通信是否正常。 
调用 sensor_init 函数初始化 ctx 结构体中的一些变量。 
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
 
 
 
注： 
1. 关于分辨率的说明 
由于场景不同，给到 User space 的图的大小和实际 seninf 收取的 VC 的大小不同，所以在 Driver 里会有两个分辨
率，客户可以以 max96712isx 这个非组帧 AVM 的 Driver 为例。 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
搜索下面的宏进行对照配置。 
 
 
2. 关于 dts 里 GPIO 供电的部分，还可以选择 regulator 封装的方式。 
用法如下： 
 
 
 
 
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
MT8668 Yocto Camera Driver 
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
 
显示 sensorNum 不为 0，且展示了传感器的具体名称，说明传感器搜索成功。接下来测试传感器的输出。  
 
C:\Users> adb shell sentest_v4l2  1 0     //search sensor, then open main (1) sensor preview 
(0) 
 
 
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
MT8668 Yocto Camera Driver 
User Manual 
Confidential B 
查看 seninf 状态的指令如下，查到结果后，可以发给联发科技确认。 
 
 
 
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
MT8668 Yocto Camera Driver 
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
# SRC0130 MT8668_Yocto_DDR_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_DDR_User_Manual_CN_V1.0.pdf

SHA-256：aa722a95a0ab0ffaa90cab15c197ea8b401a80544c306e6569a2b636640c10b6

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0130.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Yocto DDR User Manual 
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
MT8668 Yocto DDR  
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 陈少鑫 正式版 
 
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
MT8668 Yocto DDR  
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 DDR ··········································································································································································· 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 缩略词 ·························································································································································· 5 
1.2 架构/流程概述 ························································································································································ 5 
 客制流程 ······················································································································································ 5 
 将项目添加到 CVI 的流程 ··························································································································· 6 
1.3 配置/客制指南 ························································································································································ 8 
 DRAM 类型 ··················································································································································· 8 
 DRAM 大小 ··················································································································································· 8 
 DRAM 电源电压 ··········································································································································· 8 
1.4 常见问题/故障排除 ················································································································································ 8 
 启用 DRAM Debug 日志 ······························································································································· 8 
 DRAM 校准结果 ··········································································································································· 9 
 内存测试结果 ············································································································································ 10 
 获取 DRAM 信息的命令 ···························································································································· 10 
附件一 附加条款 ····························································································································································· 11 
  
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
MT8668 Yocto DDR  
User Manual 
Confidential B 
图片目录 
图 1-1. DRAM 客制化流程 ························································································································································ 6 
图 1-2. 将项目添加到 CVI 的流程 ············································································································································ 7 
图 1-3. DRAM 校准结果 ···························································································································································· 9 
图 1-4. CPU 内存测试结果 ······················································································································································ 10 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 5 
表 1-2. MT8668 DRAM 电源电压 ·············································································································································· 8 
 
 
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
MT8668 Yocto DDR  
User Manual 
Confidential B 
1 DDR 
1.1 概述 
 简单介绍 
本章节介绍 MT8668 DRAM 配置, 以及 DRAM 验证流程（CVI flow）。 
 缩略词 
表 1-1. 缩略词 
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
联发科技在发布硬件设计套件（HDK）供参考后，客户可以根据需求来选用合适的 DRAM 项目。 
联发科技的合格供应商清单（QVL）是联发科技在 IC 验证阶段，在联发科技参考板上通过了 DRAM 验证的 DRAM
料件。 
若客户选用的 DRAM 料件不在 QVL 中，客户会需要在客户端的 PCB 上进行新 DRAM 项目的验证。 
而由客户验证完成的新 DRAM 项目将会加入联发科客户验证项目列表（CVI）。 
 
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
MT8668 Yocto DDR  
User Manual 
Confidential B 
 
图 1-1. DRAM 客制化流程 
 
 将项目添加到 CVI 的流程 
1.2.2.1 DRAM 新料件验证 – CVI 流程 
图 1-2 描述了客户如何提交 DRAM 新料件验证, 并添加至联发科客户验证项目的流程。 
请先与联发科技的 CPM 联系以申请将新 DRAM 项目添加到 CVI 的许可。接着按照 DRAM 验证的 SOP 进行 DRAM 压
力测试，并将测试结果发送给联发科技。 
 
联发科技会审查新 DRAM 项目的验证结果，审查通过后这个新的 DRAM 项目即被添加至联发科客户验证项目列
表。 
 
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
MT8668 Yocto DDR  
User Manual 
Confidential B 
 
图 1-2. 将项目添加到 CVI 的流程 
1.2.2.2 CVI 准备工作 
客户在 https://online.mediatek.com/apps/qvl/查找要使用的 DDR 是否在 list 中，如果在 list 中，并且客户有按照公版
MMD（硬件设计与联发科技公版一致），可以直接使用这款 DDR。 
如果 DDR 不在合格供应商清单中，客户提需求给 PM/BM，待 PM/BM 同意后，客户提 CR 附上 DDR Spec 以及提供
如下信息： 
 
Customer===客户名称 
Chip===MT8668 + DDR 型号   
DRAM PN=== 
DRAM Die===B die 
Provide DRAM date sheet===（需要资料） 
Provide DRAM type===8GB LPDDR5X 
Provide system DRAM speed=== MT8668 能支持的最大频率 
Provide PCB layout 走线===（需要资料） 
是否 MMD===YES 
使否有做 SI/PI simulation===（需要资料） 
是否按照 SoC spec 应用 （超频,2CH 改 1 CH 使用….）=== 是按 SoC spec 应用，不超频 
HW CPM=== MTK HW CPM 
SW CPM=== MTK SW CPM 
BM===MTK BM 
 
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
MT8668 Yocto DDR  
User Manual 
Confidential B 
1.3 配置/客制指南 
 DRAM 类型 
MT8668 支持的 DRAM 类型是 LPDDR5X。支持 single rank 及 dual rank DRAM。 
MT8668 支持的最高 DRAM data rate 为 7500 Mbps。 
 
 DRAM 大小 
MT8668 支持的最大 DRAM 大小为 24 GB。 
联发科技实施了 DRAM 大小自适应机制。如果使用不同大小的新 DRAM，客户无需另行配置 DRAM 大小或更新内
核设备树中的内存大小。 
 
 DRAM 电源电压 
表 1-2 描述了 MT8668 DRAM 的典型电压： 
 
表 1-2. MT8668 DRAM 电源电压 
Type Vcore VDD1 VDD2H VDD2L VDDQ VMDDR 
Voltage (Unit: V) 0.8 1.8 1.05 1.05 0.5 0.85 
 
1.4 常见问题/故障排除 
 启用 DRAM Debug 日志 
Dram debug log 默认是未开启的，启用 DRAM 调试日志可以检查 DRAM 校准结果、DRAM 自我检测等资讯 
修改的文件为： 
\merged\src\bsp\dramk_8668\dram\inc\mt8668\dramc_top.h 
 
 
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
MT8668 Yocto DDR  
User Manual 
Confidential B 
 
 
 DRAM 校准结果 
客户可以在启动日志搜索关键字“[dramK Sum.]”查看 DRAM 校准结果。 
图 1-3 示范了在频率 1600 MHz（data rate 3200 Mbps）CH 0 Rank0 的校准结果。 
 
 
图 1-3. DRAM 校准结果 
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
MT8668 Yocto DDR  
User Manual 
Confidential B 
 内存测试结果 
在完成 DRAM 校准后，会执行 CPU memory test 以检查 DRAM 基本读写操作是否能正常运行。 
图 1-4 示范了 CPU memory test 的测试结果： 
 
  
图 1-4. CPU 内存测试结果 
 
 获取 DRAM 信息的命令 
1. DRAM Data Rate 
以下是查看 DRAM data rate 的命令： 
Shell (or ADB shell): 
cat /sys/bus/platform/drivers/dramc_drv/dram_data_rate 
 
执行命令的结果如下: 
  
 
2. Memory Size 
以下是查看 Memory Size 的命令： 
Shell (or ADB shell): 
cat /proc/meminfo 
 
执行命令的结果如下: 
   
 
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
MT8668 Yocto DDR  
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
# SRC0131 MT8668_Yocto_eCall_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_eCall_User_Manual_CN_V1.0.pdf

SHA-256：7a9437a7db8a9d2567347610bda7c92e6344b8e9101a338566737bbc37ac2710

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0131.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Yocto eCall  
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 江澳 正式版本 
 
  
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 eCall··········································································································································································· 4 
1.1 概述·········································································································································································· 4 
 介绍 ······························································································································································ 4 
 法规介绍 ······················································································································································ 4 
1.2 架构/流程概述 ························································································································································ 6 
 eCall 架构 ····················································································································································· 6 
 eCall 流程 ······················································································································································ 6 
 eCall API 使用说明 ····································································································································· 11 
1.3 eCall 定时器 ··························································································································································· 16 
 EU CS eCall 定时器 ····································································································································· 16 
附件一 附加条款 ····························································································································································· 18 
 
 
图片目录 
图 1-1. eCall 系统概览 ······························································································································································· 4 
图 1-2. eCall 软件架构 ······························································································································································· 6 
图 1-3. eCall 流程 ····································································································································································· 11 
 
表格目录 
表 1-1. CS eCall 功能性法规 ······················································································································································ 4 
表 1-2. CS eCall 测试法规 ·························································································································································· 5 
表 1-3. IMS eCall 功能性法规 ···················································································································································· 5 
表 1-4. IMS eCall 测试法规························································································································································ 6 
表 1-5. eCall 控制接口描述 ····················································································································································· 11 
表 1-6. EN16062 中定义的 eCall 定时器 ································································································································ 16 
 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
1 eCall 
1.1 概述 
 介绍 
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
表 1-1. CS eCall 功能性法规 
法规名称 描述 
ETSI TS 126.267 (3GPP TS 26.267) General description 
ETSI TS 126.268 (3GPP TS 26.268) ANSI-C reference code 
ETSI TS 127.007 (3GPP TS 27.007) 6.27 Initiate eCall +CECALL 
ETSI TS 122.101 (3GPP TS 22.101) 10.7 Transfer of data during emergency calls 
ETSI TS 124.008 (3GPP TS 24.008) 4.4.7 eCall inactivity procedure 
3GPP TS31.102 SIM related requirement for eCall 
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
MT8668 Yocto eCall 
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
GOST 33470-2015 Test methods for wireless communication modules of in-vehicle 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Yocto eCall 
User Manual 
Confidential B 
表 1-4. IMS eCall 测试法规 
法规名称 描述 
TS34.229-1 SIP layer test spec of NG-eCall 
TS36.523 UE conformance test spec of NG-eCall 
 
1.2 架构/流程概述 
 eCall 架构 
软件架构如图 1-2 所示。目前，MTK 解决方案支持 eCall 设置和带内调制解调器 TX/RX，符合 ETSI/3GPP 标准（绿色
矩形），并提供专有 ML 接口调用 eCall RIL 命令。客户需要将 eCall 平台和应用程序（红色矩形）与 eCall ML 接口
集成，并使用该产品通过 eCall 测试用例。 
 
图 1-2. eCall 软件架构 
 
 eCall 流程 
虽然 eCall 场景不同，但关键步骤相同。基本上，客户 APP 需要按照以下步骤处理 eCall 流程： 
1. 发起 ML_MakeFastEcall； 
2. 维护 IVS 侧的 eCall 计时器，该计时器在 EN16062 中指定； 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
3. 收到 RIL_UNSOL_ECALL_ALACK_POSITIVE_RECEIVED 后发出 RIL_REQUEST_ECALL_RESET_IVS。然后 IVS 和 PSAP 可
以恢复语音呼叫连接并相互通话； 
4. 收到 RIL_UNSOL_ECALL_DISCONNECTED 或 RIL_UNSOL_ECALL_ABNORMAL_HANGUP 后挂断电话，PSAP 通过此方
式指示 IVS 断开呼叫。 
 
以下是 eCall 流程序列的详细描述。 
 
 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
 
 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
 
 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
 
 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
 
图 1-3. eCall 流程 
 
 eCall API 使用说明 
下列 eCall API 计划在 MT8668 上开发。如果后续开发有更新，将提供更新的文档。 
表 1-5. eCall 控制接口描述 
接口 描述 
typedef struct { 
    int32_t call_id; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
MSD 信息结构体 
call_id: 当前电话 index； 
length: msd data 的长度； 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
接口 描述 
}ml_ecall_set_msd; msd_data: msd data 数据；传入参数是 byte 格式 
(unsigned char), 最大长度 140, 对应的 char 格式最
大长度是 280. 
typedef struct { 
    int32_t arg_num; 
    int32_t type; 
    char address[128]; 
}ml_ecall_set_num; 
Test number/Reconfiguration number结构体 
arg_num: 传入参数个数，比如传入有效的 type 和 
address，则为 2，比如只传入有效的 address， 则
为 1; 
type: 传入参数类型， 1 表示传入 URI 类型， 2 表
示传入 number 类型； 
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
    ML_DOMAIN_3GPP_ONLY = 2, /* 3GPP only - LTE(IMS), 
WG(CS) */ 
    ML_DOMAIN_3GPP2 = 3,     /* 3GPP2 only - 1x(C2K)) 
*/ 
    ML_DOMAIN_IMS_1xCS = 4,  /* IMS and 1x CS only - 
LTE(IMS), 1x(C2K) */ 
    ML_DOMAIN_CS_1x = 5,     /* WG CS and 1x CS only - 
WG(CS), 1x(C2K) */ 
    ML_DOMAIN_IMS_ONLY = 6,  /* only IMS call allowed 
*/ 
}ml_ecall_domain; 
eCall 通话的网络制式结构体 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
接口 描述 
typedef struct{ 
    ml_ecall_category   ecall_cat; 
    ml_ecall_variant   ecall_variant; 
    char address[20]; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
    ml_ecall_domain domain; 
}ml_ecall_req_msg; 
请求拨出 eCall 时传入结构体参数定义 
typedef struct{ 
    int32_t data1; 
    int32_t data2; 
    int32_t data3; 
    int32_t data4; 
}ml_ecall_pri; 
eCall 优先级参数结构体. data1>data2>data3>data4. 传
入参数应为 1 2 3 4, 含义分别为:  
1: 客户设定的 eCall URI;  
2: USIM 保存的 eCall URI 
3: 客户设定的 eCall 号码  
4: USIM 保存的 eCall 号码 
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
    E_ML_ECALL_IMS_ABNORMAL_HANGUP = 16, 
    E_ML_ECALL_STATUS_CS_REDIAL = 17, 
    E_ML_ECALL_STATUS_IMS_REDIAL = 18, 
    E_ML_ECALL_IMS_MSD_ACK = 20, 
    E_ML_ECALL_IMS_UPDATE_MSD = 21, 
    E_ML_ECALL_IMS_IN_BAND_TRANSFER = 22, 
    E_ML_ECALL_IMS_MSD_NACK = 23, 
    E_ML_ECALL_IMS_SRVCC = 24, 
    E_ML_ECALL_ONLY_DEREGISTRATION = 31, 
    E_ML_ECALL_MAY_DEREGISTER = 32, 
eCall 上报状态的消息类型枚举定义 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
接口 描述 
    E_ML_ECALL_PSAP_CALLBACK_START = 40, 
    E_ML_ECALL_PSAP_CALLBACK_IMS_UPDATE_MSD = 
41, 
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
注册 eCall 状态变化 callback 函数，当 eCall 状态发生
变化时回调 cb_func 函数 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
接口 描述 
int32_t ML_SetEmsdpri(ml_ecall_pri* pri);  
设置 ecall 优先级类别。默认优先级
是 “1>3>2>4”。  
参数:   
输入: ml_ecall_pri* pri  
int32_t ML_SetNadDeregTime(ml_ecall_time* time);  
设置 NAD 注销定时器  
参数:   
输入: ml_ecall_time* time  
  
int32_t ML_SetNadRegState(uint8_t state);  
设置 NAD 注册状态  
参数:   
输入: uint8_t state  
  
int32_t ML_SetOprtMode(ml_ecall_oprt_mode mode);  
设置 ecall 工作模式  
参数:   
输入: ml_ecall_oprt_mode mode  
int32_t ML_GetOprtMode(ml_ecall_oprt_mode *mode);  
获取 ecall 工作模式  
参数:   
输入: ml_ecall_oprt_mode *mode  
int32_t ML_EcallPrecondition(void);  设置 ecall 前提条件，主要是降低功耗的措施，认
证阶段无需调用  
int32_t ML_SetEcallType(ml_ecall_type type);  
  
设置 ecall 类型  
参数:   
输入: ml_ecall_type type  
  
int32_t ML_GetEcallType(ml_ecall_type *type);  
获取 ecall 类型  
参数:   
输入: ml_ecall_type *type  
  
int32_t ML_SetGostAttempts(int32_t attempts);  
设置 GostEcall 的尝试次数  
参数:   
输入: int32_t attempts  
int32_t ML_SetGostInterval(int32_t interval);  
  
设置 GostEcall 的间隔时间  
参数:   
输入: int32_t interval  
int32_t ML_SetGostDefault();  设置 GostEcall 的默认参数  
 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
1.3 eCall 定时器 
 EU CS eCall 定时器 
在 eCall 流程中，EN 16062 定义了 10 个定时器。MTK 在调制解调器端实现了 T2、T3、T5、T6、T7、T10。T1、T9 
应由 IVS 客户 APP 处理；T4 和 T8 是 PSAP 定时器，应由 PSAP 应用程序处理。 
 
表 1-6. EN16062 中定义的 eCall 定时器 
Name Origin Description Requirements Value 
T1 IVS 
Manually initiated eCall(MIeC) false triggering cancellation period 
• START: T1 starts as soon as the eCall is manually activated 
• STOP: T1 stops when Vehicle occupants cancel the manually triggered eCall 
transaction. 
• EXPIRY: Upon expiry of T1 the IVS-NAD shall start call setup 
 
T2 IVS 
IVS Call Cleardown Fallback Timer (CCFT) 
• START: T2 starts as soon as the IVS-NAD starts with call setup 
• STOP: T2 stops when the IVS-NAD receives a call clear-down indication from the 
mobile network or a call clear-down message from the PSAP . 
• EXPIRY: Upon expiry of T2 the IVS-NAD shall clear down the call 
3600 s (1h) 
T3 IVS 
IVS INITIATION signal duration 
• START: T3 is started as soon as the IVS-NAD starts sending the INITIATION signal 
• STOP: T3 stops when the IVS-NAD receives a SEND MSD signal from the PSAP , at 
which time the IVS-NAD shall stop sending the INITIATION signal. 
• EXPIRY: Upon expiry of T3 the IVS-NAD shall stop sending the INITIATION signal 
2 s 
T4 PSAP 
PSAP wait for INITIATION signal period 
• START: T4 starts as soon as the PSAP eCall modem has answered the call 
• STOP: T4 stops when the PSAP eCall modem detects an INITIATION signal send 
by the IVS. 
• EXPIRY: Upon expiry of T4, the PSAP eCall modem shall route the call to a PSAP 
operator 
5 s 
T5 IVS 
IVS wait for SEND MSD period 
• START: T5 starts as soon as the IVS-NAD received notification that the call is first 
answered 
• STOP: T5 stops when the IVS-NAD detects a SEND MSD signal sent by the PSAP . 
• EXPIRY: Upon expiry of T5 the IVS-NAD shall reconnect the IVS audio system and 
terminate eCall specific behavior(i.e. it shall not proceed with the sending of 
MSD data) until requested to do otherwise. 
5 s 
T6 IVS IVS wait for AL-ACK period 
• START: T6 starts as soon as the IVS-NAD has received LL-ACK 
5 s 
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
MT8668 Yocto eCall 
User Manual 
Confidential B 
Name Origin Description Requirements Value 
• STOP: T6 stops when the IVS-NAD receives an AL-ACK message 
• EXPIRY: Upon expiry of T6, the IVS-NAD shall mark the transfer of the MSD as 
unsuccessful and reconnect the IVS audio system and terminate eCall specific 
behavior until requested to do otherwise 
T7 IVS 
IVS MSD maximum transmission time 
• START: T7 starts as soon as the IVS-NAD starts sending the MSD data 
• STOP: T7 stops when the IVS-NAD receives an LL-ACK message 
• EXPIRY: Upon expiry of T7, the IVS-NAD shall mark the transfer of the MSD as 
unsuccessful and reconnect the IVS audio system and terminate eCall specific 
behavior until requested to do otherwise 
20 s 
T8 PSAP 
PSAP MSD maximum reception time 
• START: T8 starts as soon as the PSAP starts sending the SEND MSD signal 
• STOP: T8 stops when the PSAP eCall modem receives a valid MSD (reception 
being acknowledged by sending an LL-ACK) 
• EXPIRY: Upon expiry of T8, the PSAP eCall modem shall route the call to a PSAP 
operator 
20 s 
T9 IVS 
IVS NAD minimum network registration period 
• START: T9 starts as soon as the IVS-NAD clears down a call, or gets notified that 
a call has been cleared down in accordance with EN 16072 Clause 7.17.3 
• STOP: T9 is uninterruptable; until T9 expires the IVS-NAD shall remain registered 
on the serving network, and remain available to receive calls from the PSAP and 
rescue workers 
• EXPIRY: Upon expiry of T9, the IVS-NAD may deregister from the serving 
network (see T10) 
3600 s 
T10 IVS 
IVS NAD network ‘Deregistration Fallback Timer’ (DFT) 
• START: T10 starts as soon as the IVS-NAD clears down a call, or gets notified that 
a call has been cleared down 
• STOP: T10 stops if the IVS-NAD receives or makes a new call 
• EXPIRY: Upon expiry of T10, the IVS-NAD shall deregister itself from the serving 
network 
12 h  
 
 
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
MT8668 Yocto eCall 
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
# SRC0132 MT8668_Yocto_FastRVC_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_FastRVC_User_Manual_CN_V1.0.pdf

SHA-256：ce43278780583c3205ac05c21a903d4afbfbab36dea69f0606e32eda88f0c5ad

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0132.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2026-01-28
MT8668 Yocto FastRVC User Manual 
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
MT8668 Yocto FastRVC 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 张彬彬 正式版 
 
  
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
MT8668 Yocto FastRVC 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Yocto FastRVC 
User Manual 
Confidential B 
1 FastRVC 
1.1 概述 
本章节介绍 MT8668 FastRVC 基本功能以及常见问题的调试方法。 
 
FastRVC 全称 Fast Rear View Camera，用于实现快速倒车。快速倒车需要冷开机后快速出图。因此开发 FastRVC 
(instantcam) 程序，用于实现快速倒车功能。 
 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Yocto FastRVC 
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
 
从 FastRVC 启动到显示画面所涉及的模块如图 1-2 所示，各模块功能如下： 
 
• ipc binder 提供 instantcam 与 camerahalserver 进程间通信； 
• Turbo 是 MediaTek MW 的全新架构，用于管理上层请求及从底层 ISP 获取 Sensor 图像数据； 
• ISP 负责处理 Sensor 数据，并通过转化将数据传递到 Turbo； 
• FBS 是 MediaTek Display 的一部分，用于处理从 instantcam 拿到的 frame，并传送到 DRM 中做显示。 
 
1.3 配置/客制化指南 
开机默认开启倒车信号： 
src/multimedia/libnativecam_sdk/APP/yocto/mtkInstantCam/instantcam.cpp 
- property_get("vendor.ins.rvc.test", value, "3"); 
+ property_get("vendor.ins.rvc.test", value, "1"); 
 
指定当前项目传感器类型： 
src/multimedia/libnativecam_sdk/APP/yocto/mtkInstantCam/instantcam.cpp 
param.sensorType = Mtk::MTK_SENSOR_FEATURE_SENSOR_TYPE_DMS 
 
表示使用单路 YUV 中的 DMS 传感器作为 FastRVC 的传感器，可根据需要修改。 
  
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
MT8668 Yocto FastRVC 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Yocto FastRVC 
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
# SRC0133 MT8668_Yocto_GPU_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_GPU_User_Manual_CN_V1.0.pdf

SHA-256：2576411b5ab1e9977203026f326e956644401b8943acf323bc01b600a08ff7e8

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0133.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Yocto GPU User Manual 
 
 
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
MT8668 Yocto GPU 
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
MT8668 Yocto GPU 
 User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 GPU ··········································································································································································· 4 
1.1 概述··································································································································································· 4 
1.2 架构/进程概述 ·················································································································································· 5 
1.3 常见问题/故障排除 ·········································································································································· 7 
附件一 附加条款 ····························································································································································· 10 
 
 
图片目录 
图 1-1. Yocto 图形框架 ······························································································································································ 5 
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
MT8668 Yocto GPU 
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
 
• GPU 是并行编程模型，和 CPU 的串行编程模型完全不同，导致很多 CPU 上优秀的算法都无法直接映射到 GPU
上，并且 GPU 的结构相当于共享存储式多处理结构，因此在 GPU 上设计的并行程序与 CPU 上的串行程序具
有很大的差异。GPU 主要采用立方环境的材质贴图、硬体 T&L、顶点混合、凹凸的映射贴图和纹理压缩、双
重纹理四像素 256 位的渲染引擎等重要技术。 
 
• 由于图形渲染任务具有高度的并行性，因此 GPU 可以仅仅通过增加并行处理单元和存储器控制单元便可有效
的提高处理能力和存储器带宽。 
 
• GPU 设计目的和 CPU 截然不同，CPU 用来处理通用任务，因此具有复杂的控制单元，而 GPU 主要用来处理计
算性强而逻辑性不强的计算任务，GPU 中可利用的处理单元可以更多的作为执行单元。因此，相较于 CPU，
GPU 在具备大量重复数据集运算和频繁内存访问等特点的应用场景中具有无可比拟的优势。  
 
 
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
MT8668 Yocto GPU 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Yocto GPU 
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
(MSAA) with minimal performance drop 
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
MT8668 Yocto GPU 
 User Manual 
Confidential B 
Features Value Description 
API Support 
• OpenGL® ES 1.1, 2.0, 3.2 
• Vulkan 1.3 
• OpenCL™ 1.2, 2.1, 3.0 Full 
Profile 
Full support for next-generation and legacy 
2D/3D graphics applications 
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
出现屏幕绘制异常时，一般可以从三个方面进行分析，分别是 Display、GPU 和应用。判断是否为 Display 问题，首
先可以查看 log 中是否有 display 相关错误，根据 log 进行下一步分析；其次平台有两种叠图方式，可以通过 OVL
或者 GPU 进行叠图，可以通过关闭 HW OVL，强制使用 GPU 进行叠图，查看异常情况；如果判断为 Display 问题可
以找相关模块负责人进行下一步分析。 
 
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
MT8668 Yocto GPU 
 User Manual 
Confidential B 
判断是否为 GPU 问题，在 log 中搜索是否有 Mali/EGL/GLES 等关键字相关的错误，根据错误进行下一步分析。也可
以使用一些调试工具，例如 Mali Graphics Debugger，这些工具可以帮助分析问题。也可以一些做有关 GPU 的对比
实验。 
 
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
对于 GPU 的性能问题分析，通常有三个方面，包括 GPU 问题、应用问题和其他模块或系统相关问题。GPU 问题可
以查看 Main log 和 kernel log 中有没有 Mali/EGL/GLES 关键字的错误 log，根据 log 进行下一步的分析。可以使用工
具抓问题场景的 systrace 进行分析，以及使用 ARM Streamline 检查 HW 执行情况，查看具体是哪一个部分影响到
GPU 的性能。也可以做一些针对性的对比实验，细分影响性能的部分。  
对于应用部分，也可以使用 systrace 进行分析，是否为应用原因。其他模块或系统相关问题可以通过 log 和火焰图
进行分析。 
 
1.3.2.1 GPU 性能常见对比实验 
GPU 性能不达标的常见对比实验如下： 
(1) Fix performance mode 是否达标 
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
MT8668 Yocto GPU 
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
明确具体是哪一部分影响到平台的性能，具体可以是 CPU、GPU（vertex 或 fragment）、Bandwidth 等。确认
性能瓶颈后，有针对性地进行优化。 
 
(2) Vertex 负载过重 
Vertex 负载过重会造成 GPU 绘制时卡顿，在使用 openGL 时需要避免顶点属性资料量过大。 
 
(3) Fragment 负载过重 
尽量减少 overdraw，在 shader 中避免使用非必要精度和优化数学表达式等。在 shader 中使用简单有效的语
句，可以减少 Fragment 负载。 
 
(4) 带宽瓶颈 
针对带宽的优化方向通常为：AFBC、ASTC、render size、mipmaping、pixel format 等。 
 
(5) Driver Overhead 
避免使用导致 CPU、GPU 串行运行的某些接口（如 glReadpixels、glFinish），优化每帧 gl 接口的使用数量，提
倡使用 VBO、EBO、VAO 等。 
 
(6) 开发者指南（源自 Arm Developer） 
Arm GPU Best Practices Developer Guide， 
链接：https://developer.arm.com/documentation/101897/0301?lang=en。 
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
MT8668 Yocto GPU 
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
# SRC0134 MT8668_Yocto_Panel_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Panel_User_Manual_CN_V1.0.pdf

SHA-256：1ae2434832d69efbd637ea20754b949cca43639dec360f71222adbeea7b7c7c5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0134.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2026-01-28 
MT8668 Yocto Panel User Manual 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
版本记录 
版本 日期 作者 
1.0 2026-01-28 涂红云 
 
  
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
目录 
版本记录···················································································································································································· 2 
目录 3 
1 概述 ··················································································································································································· 5 
2 点屏前置条件 ··································································································································································· 6 
2.1 从屏厂或者串行器厂商获取如下信息 ·················································································································· 6 
2.2 原理图 review ·························································································································································· 6 
3 新增屏驱 ··········································································································································································· 7 
3.1 Device 的修改 ·························································································································································· 7 
3.2 LK2 的修改 ······························································································································································· 7 
3.3 Kernel 的修改 ·························································································································································· 7 
4 重要事项 ··········································································································································································· 9 
5 LK drivers ········································································································································································· 10 
5.1 增加 LK2 屏驱 ························································································································································ 10 
5.2 编写驱动 ································································································································································ 10 
6 Kernel DRM drivers ·························································································································································· 17 
6.1 增加 kernel 驱动 ···················································································································································· 17 
6.2 编写驱动 ································································································································································ 17 
7 精确的 FPS 设置 ····························································································································································· 21 
8 Debug sop ········································································································································································ 22 
8.1 Lk 阶段 debug ························································································································································ 22 
8.2 Kernel 阶段 debug ················································································································································· 24 
8.3 Resume 阶段 debug ··············································································································································· 24 
8.4 花屏 debug ···························································································································································· 24 
8.5 含有 bridge 屏的 debug ········································································································································ 26 
9 Dump reg ········································································································································································· 27 
9.1 LK 阶段 ··································································································································································· 27 
9.2 Kernel Dump reg ···················································································································································· 27 
9.3 adb 命令 dump reg ················································································································································ 28 
9.4 Test Pattern 命令 ··················································································································································· 28 
9.5 分析 reg ································································································································································· 29 
10 使用 MTK 通用 serdes driver ·········································································································································· 31 
10.1 驱动中命令格式说明 ············································································································································ 31 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
10.2 DSI Ser 设定示例 ···················································································································································· 32 
10.3 DSI Des-Panel 设定示例 ········································································································································· 33 
10.4 DSI Superframe 设定示例 ······································································································································ 33 
10.5 DSI Dual Link 设定示例 ·········································································································································· 35 
10.6 Des Panel 兼容设定示例········································································································································ 37 
10.7 使用注意 ································································································································································ 37 
附件一 附加条款 ····································································································································································· 38 
 
  
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
1 概述 
本文主要介绍 panel 驱动移植 SOP 以及相应的 debug 技巧 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
2 点屏前置条件 
2.1 从屏厂或者串行器厂商获取如下信息 
• 屏厂要在治具上使用外部输入信号点亮屏 
• 点屏前确定“屏的上下电时序、几个 DSI port、几个 serdes、cmd/vdo mode、Cphy/dphy、Lane number 等信息” 
• Init/deinit cmd（一定要是第一点提到的 cmd，即“治具上使用外部输入信号点亮屏”） 
• 屏的 timing 信息，如 Width/height/vfp/vbp/vsa/hfp/hbp/hsa/fps/mipi clock 等等 
• serdes test pattern（可选，点不亮时要求提供） 
• Dsc 参数，几个 slice（如果要开 dsc，请先根据参考初步判断一下 MTK IC 是否能支持） 
• 其他功能如何实现（backlight/fps change/cabc…） 
• 如果接串行器，串行器要如何设置等等 
2.2 原理图 review 
• 屏的电源如何控制 
– 用我司 regulator 请找 PMIC owner 要如何控制（LK、kernel 配置都要） 
– 用 3rd IC 请找 3rd 要 
• GPIO 如何配置 
– 拿到 GPIO 功能表，Dws 先配置好 
• 背光如何配置 
– Bring up 时可以直接控制 GPIO 拉高实现 
  
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
3 新增屏驱 
3.1 Device 的修改 
1. 在 ko_order_table 中加入 ko 名称，注意按驱动加载顺序写 
2. 在 projectconfig.mk 中修改符合屏分辨率的 bootlogo 设定 
3.2 LK2 的修改 
注意：如果没有 LK，可以忽略此步骤 
1. 添加新的驱动文件 
 
 
2. 在$(project).mk 中加入此驱动支持 
 
 
3. lcm list 中加入此驱动 
 
 
4. lcmd_drv.h 中加入此驱动 
 
 
3.3 Kernel 的修改 
注意：如果是 kernel-6.6 一样的修改，只是路径不一样 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
1. 添加新的驱动 
 
 
2. 在 Kconfig 中加入新的驱动描述 
 
 
3. 在 BUILD.bazel 中加入新的驱动 
 
 
4. 在 kernel config 中加入驱动 
 
 
5. 在 kleaf 中加入驱动 
 
 
6. 在 dts 中加入驱动描述并在$(project).dts 中 include（或者修改已存在的设定） 
 
 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
4 重要事项 
• 为了防止从 LK 转 kernel 画面抖动，kernel 启动后 dsi/mipi_tx/panel 的设置都是用 LK 的参数，suspend/resume
之后才是全部采用 kernel 的配置。如果发现 suspend/resume 之后有参数跟上电启动不同，请检查这三部分的
设置区别 
• Kernel 启动时会获取一些参数给 display 使用，在 kernel panel driver 没有 ready 的情况下系统不能正常工作是
正常现象 
• 后面页面中写的 must set 的参数是必须要写的，其他部分根据需要填写 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
5 LK drivers 
• LK2 路径:/vendor/mediatek/proprietary/bootable/bootloader/lk2/ 
 
 
5.1 增加 LK2 屏驱 
参考第 3 章新增 LK 屏驱文件和修改 
5.2 编写驱动 
1. 编写 lcm_drv 结构体(must set) 
以<tv101wum_n16_wuxga_dsi_video_boe_rtq6752.c> 为例: 
 
 
2. 填充 LCM 参数(must set) 
按照实际参数参考其他屏驱填写 
– Lcm 宽和高(must set) 
 
 
– Lcm 参数 (dsi 设置, must set)  
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
 
 
– Lcm 参数(vdo timing, must set) 
 
 
– esd 配置(optional，使用 bridge 必须关掉) 
 
 
– pll config (PLL_CLOCK 和 data_rate 至少要设置 1 个，参考下面公式计算)  
 
 
 
– 展频配置 (optional，使用 bridge 必须关掉)  
 
 
– mipi clock 配置(optional)  
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
 
 
– cphy/dphy 配置(by case，cphy 设置为 1，dphy 设置为 0)  
 
 
– dual port 设置 (by case) 
 
 
– Dsc 配置(by case)  
▪ 如果要用 DSC，必须设置 dsc_enable=1，并设定 DSC 参数 
▪ 是否需要支持 DSC 取决于屏，且 DSC 参数需要屏厂提供 
▪ MediaTek 特有参数 dsc_cfg:  
o 8bpc to 8bpp 设置为 0x22，  
o 10bpc to 8bpp 设置为 0x828 
▪ 其他参数一一对应到屏厂提供参数 
▪ dsc 设定例子 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
 
 
▪ 厂商提供的 pps 参数例子 1 
 
 
▪ 厂商提供的 pps 参数例子 2 
 
 
– GPIO 配置(参考 GPIO SOP)   
3. 编写 LCM init power 函数(must set) 
按照 HW 设计实际情况编写 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
 
 
4. 编写 LCM init 函数(must set) 
按照屏的时序编写: 
 
 
5. 编写 LCM suspend/resume 函数(optional) 
 
 
6. 编写 LCM compare 函数(如果是多屏兼容才需要) 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
 
 
7. 编写背光函数(使用 lcm pwm 才需要) 
 
 
8.  填充初始化参数(must set) 
 
 
9. 参考其他驱动编写其余重要部分(must set) 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
6 Kernel DRM drivers 
 
• 文件路径: /kernel/ kernel_device_modules-6.12/drivers/gpu/drm/mediatek/Mediatek_v2 
 
 
 
6.1 增加 kernel 驱动 
参考第 3.3 章新增修改 kernel 驱动 
6.2 编写驱动 
1. 填充 kernel 驱动结构体(must set) 
– DRM 原始结构体  
 
 
2. 编写 MTK 扩展结构体(must set) 
Pixel clock 
Frame Width 
HFP 
HSA 
HBP 
Frame Height 
VFP 
VSA 
VBP 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
 
 
– Superframe 模式下，pll_clk/crop_width/crop_height/physcial_width/physical_height 必须设置，其他情况下
pll_clk 必须设置. 
– Pll_clk: mipi clock 
– Crop width/crop height: super frame 模式下单个屏的宽高. 
– Physical_width/physical_height: super frame 模式下，physical_width 为两个屏宽相加，physical_height 为两个
屏中高比较大的值. 
3. 填充 Drm 架构驱动函数(must set)： 
– DRM 原始架构函数 
 
 
4. 编写 probe 函数(Must set)  
 
 
5. 编写 remove 函数(Must set)  
Panel power disable 
Panel suspend sequence 
Panel power on and perform set up 
Enable Panel 
Panel mode configuration  
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
 
 
6. 编写 prepare 函数(Must set)  
 
 
7. 编写 init 函数(Must set)  
 
 
8. 编写 enable 函数(Must set)  
 
 
9. 编写 disable 函数(Must set)  
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
 
 
10. 编写 unprepare 函数(Must set)  
 
 
11. 编写 get_modes 函数(must set)  
 
12. 编写 MTK 扩展函数 reset (optional) 
13. 编写 MTK 扩展函数 set_backlight_cmdq function(by case) 
14. 编写 MTK 扩展函数 ext_param_set function(by case) 
15. 编写 MTK 扩展函数 ata_check function(optional) 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
7 精确的 FPS 设置 
• 手写笔应用中，需要 FPS 非常精准（120+-0.01）通过 data_rate_khz 来实现 
• 首先通过表格(找 PM 要)计算出近似值（ideal bit freq）填到 data_rate，再通过 data_rate_khz 进行微调 
• 注意即使设置了 data_rate_khz，data_rate/pll_clk 也需要设置（不管是 LK 还是 kernel 都是） 
• Data_rate_khz 需要微调后实测 FPS，目前不能通过理论计算 
• vdo_keep_hs_perline 对应下面表格 video mode keep hs mode，此项对 vdo mode fps 影响比较大 
 
 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
8 Debug sop 
8.1 LK 阶段 debug 
LK 屏不亮 
• 背光是否亮？ 
– 是，继续下面步骤 
– 否，检测背光控制方式是否正确（LK 也会采用 dts 里面的设置） 
▪ 也可采用直接拉高 GPIO 的方式先避开 
▪ 如果使用背光 IC，询问对应 vendor 要如何控制 disp_pwm mode 
▪ 背光控制模式是否正确 
o Disp_pwm 模式 
 
 
o I2c 模式 
 
 
o Lcm pwm mode 
 
 
• 屏所需要的电压是否有正常供上？ 
– 是，继续下面步骤 
– 否，用示波器量各路电压，看哪一路不正常，询问 PMIC owner 要如何控制 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
▪ 上电时序是否符合屏的要求 
▪ 用示波器量信号 
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
• Mipi 信号是否正常(做 mipi cts 测试，需要所有项都 pass)  
– 有 vdo 数据的 Dphy 波形 
 
 
– 没有 vdo 数据的 Dphy 波形 
 
 
– Cphy 波形 
 
 
• 是否有放 logo 文件？若无 logo 文件，屏上只会显示一行小字，需仔细观察 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
8.2 Kernel 阶段 debug 
进 kernel 后屏不亮： 
• 量屏的各路电压是否有掉？ 
– 进 kernel 后 regulator 在没人 enable 会自动关掉，屏驱中需要获取资源并 enable 它 
• 背光是否有亮？ 
– AAL 可能会导致背光关闭，关闭 AAL 看看是否有问题 
– 调整背光的函数是否能跑到，如不能需要加 log debug 
• Kernel 屏驱是否有正常加载？ 
– 观察 log，看驱动加载是否正常。Kernel 运行过程中需要一些参数 
• 是否有使能 esd，esd 也会导致黑屏 
• 是否有多种 mode 切换？Bring up 阶段先点一个 mode 
8.3 Resume 阶段 debug 
Resume 后屏不亮： 
• 量屏的各路电压是否有正常起来 
• 检查屏的 power on code 是否有异常 
• 背光是否有亮？ 
– 控制背光 code 是否有异常 
• Kernel 屏驱是否有正常加载？ 
– 观察 log，看驱动加载是否正常。 
• 对比跟 LK 的驱动，看两边设置是否一样 
8.4 花屏 debug 
是否有开 DSC  
• 是，检测 DSC 设置 
– 打 DSC test pattern 是否能显示正常 
echo reg_write 0x14015078 0x400000FF > /proc/clkdbg ; cat /proc/clkdbg 
0x14015xxx 是 dsc base reg，根据 SOC 不同而不同，请询问 MediaTek 工程师正确的值 
0x078 是 dsc test pattern reg 地址，根据 SOC 不同而不同，请询问 MediaTek 工程师正确的值 
▪ 能，找 display owner 寻求帮助 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
▪ 不能，是否存在正常显示时刻，有正常时刻。dump dsc reg 对比是否有设置不一样 
▪ Dump 命令： 
adb shell “echo mobile:on > /d/mtkfb“;adb shell ”echo diagnose>/d/mtkfb && cat 
/d/mtkfb” >  mtkfb.txt 
搜索 DSC 部分 
▪ 典型 dsc 花屏图片: 
 
 
▪ 类似花屏是 AFBC 导致，使用如下命令关闭 AFBC 看看： 
adb shell setprop debug.mediatek.disp_decompress 0 
adb shell stop 
adb shell start 
▪ 典型 AFBC 花屏图片: 
 
 
– 打 DSI test pattern 是否能正常显示 
命令（参考 dump reg）： 
echo reg_write 0x14017178 0x31 > /proc/clkdbg ; cat /proc/clkdbg 
0x1401xxxx 是 dsi reg 地址，根据 SOC 不同而不同，请询问 MediaTek 工程师 
0x178 是 dsi test pattern 地址，根据 SOC 不同而不同，请询问 MediaTek 工程师 
▪ 能正常显示，找 display owner 寻求帮助 
▪ 不能，log 中是否存在 dsi underrun 字样 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
– 是否有显示正常的情况 
▪ 是，dump 正常和不正常时的 DSI/MIPITX/DSC reg 值，看设置是否有不一样 
▪ Dump 命令： 
adb shell “echo mobile:on > /d/mtkfb“;adb shell ”echo diagnose>/d/mtkfb && cat /d/mtkfb” >  mtkfb.txt  
▪ Dump 命令：参考 dump reg 这一块，用 adb cmd 的方法读取也可以 
– 是否经过某种操作后才出现(比如切换 fps) 
▪ 对比切换前后 reg 是否一样 
▪ 例:切换 fps 后花屏 
o 询问屏厂切换 fps 是否存在限制，是否要发送 cmd 等 
o Fps 切换时 mmclk 改变先后顺序是否正确（mmclk 变高要先设 mmclk 后切 fps，mmclk 变低要先切
fps 后设置 mmclk，mmclk 计算方法参考 mtk_dsi_set_mmclk_by_datarate 函数，切换逻辑参考
mtk_crtc_disp_mode_switch_begin 函数） 
8.5 含有 bridge 屏的 debug 
• 查看 bridge 状态寄存器，可以得知当前 bridge 工作状态 
• 从 bridge vendor 获取帮助 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
9 Dump reg 
9.1 LK 阶段 
• 在 Ddp_dsi.c/ddp_dsi_trigger() 最后调用 DSI_DumpRegister() 
 
 
• 在 Ddp_dsc.c/dsc_config() 最后调用 dsc_dump() 
 
 
• LK display log 默认没开，需要在 ddp_log.h 中打开 
 
 
9.2 Kernel Dump reg  
• 如何打开寄存器 adb debug 接口 
– 路径：kernel-xx/drivers/clk/mediatek/clkdbg.c/common_cmds[] 
– 函数：clkdbg_reg_read()和 clkdbg_reg_write() 
– 方法：如果 clkdbg_reg_read() and clkdbg_reg_write()被#if defined( CONFIG_MTK_ENG_BUILD) 包起来了，请
把#if defined( CONFIG_MTK_ENG_BUILD)  mask 掉，同时把定义 clkdbg_reg_read() and clkdbg_reg_write()地方
的#if defined(CONFIG_MTK_ENG_BUILD) 也 mask 掉，然后就可以用 adb command 改寄存器了 
 
 
 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
9.3 adb 命令 dump reg 
• 寄存器读写命令 
– 读： 
echo reg_read addr> /proc/clkdbg ; cat /proc/clkdbg 
– 按长度读： 
echo reg_read_len addr length> /proc/clkdbg ; cat /proc/clkdbg 
– 写： 
echo reg_write addr value> /proc/clkdbg ; cat /proc/clkdbg 
– 举例： 
echo reg_read 0x1400D178 > /proc/clkdbg ; cat /proc/clkdbg 
echo reg_write 0x1400D178 0x31 > /proc/clkdbg ; cat /proc/clkdbg 
echo reg_read_len 0x1400D000 0x00001000 > /proc/clkdbg ; cat /proc/clkdbg 
注意： 
▪ 通常 MediaTek supporter 会说请把 xxx 的 yyy 写 zzz，其中 xxx 代表某个模块，通过前面 debug sop 章节（130 页）
获取该模块的基地址，yyy 代表偏移量，zzz 代表 value 
▪ 该语句最终需要执行的命令是： 
echo reg_write xxx 基地址+yyy zzz> /proc/clkdbg ; cat /proc/clkdbg 
▪ 例如调整 mipi 的驱动能力，supporter 会说把 mipi_tx 的 0x10 bit6-9 写 0111，执行的命令是： 
echo reg_read 0x11f60010 > /proc/clkdbg;cat /proc/clkdbg  
▪ mipi_tx 基地址 0x11f60000，先读 mipi tx 的 0x10，假如读到是 0, 将 0 的 bit6-9 或上 0111 得到 0x1c0 
▪ 最终命令： 
echo reg_write 0x11f60010 0x1c0> /proc/clkdbg ; cat /proc/clkdbg 
 
9.4 Test Pattern 命令 
• 使用 adb: 
echo reg_write “DSI/DSC_base_reg+offset_addr” value> /proc/clkdbg ; cat /proc/clkdbg 
– DSI/DSC 基地址参考前面的说明 
– Offset： 
▪ Dsi:0x178 or 0x17c  
▪ Dsc:0x78 or 0x6c，向 MediaTek 工程师确认 
– Value： 
▪ Dsi: 0xc41 
▪ Dsc: 0x400000FF(blue), 向 MediaTek 工程师确认 
• 在 code 中加入: 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
– DSI: 在 Ddp_dsi_trigger 函数最后调用 DSI_OUTREG32(NULL, DSI_REG_BASE[0]+offset, value);  
– DSC: 在 dsc_config 函数最后调用 DISP_REG_SET(handle, base+offset, value); 
– Offset/value 参考 adb 命令 
9.5 分析 reg 
• 如下 reg 说明，仅供参考，具体 reg 内容请参考 coda. 
• DSI 向 8: 
 
 
• MIPI TX 
 
 
• DSC  
 
 
Bit0=1 表示 dsi 正在运行 
 DSI 状态 
VSA VBP VFP VACT 
HSA_WC/ HBP_WC HFP_HS_VB_PS_WC/HFP_WC/ 
BLLP_WC 
注意: HSA_WC=HAS*3-10， HBP/HFP 也是 
读状态 
Timing 控制 
DSI PHY Timing  
读状态 reg 
 Phy 电压设定 
Pll control 1/2/3/4 
Pll control 0 
Lane swap 设置 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
DSC 控制寄存器 
 DSC 状态 
 DSC 宽 
DSC 高 
DSC PPS0-19 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
10 使用 MediaTek 通用 serdes Driver 
MediaTek 提供了一个 max96789+max96752 的通用驱动，可参考其写自己的驱动: 
1. KO table 中加入 birdge-serdes.ko （如果不存在时） 
2. LK 的 project.mk 中设置MTK_LCM_LIST_SUPPORT="serdes_dsi_vdo" 
3. kleaf 中加入 birdge-serdes.ko （如果不存在时） 
4. defconfig 中加入 CONFIG_DRM_BRIDGE_SERDES=m(如果不存在时) 
5. 如果需要使用 hotplug 功能，需要在 defconfig 中设置 CONFIG_ENABLE_SERDES_HOTPLUG=y 
6. 如果 hotplug 功能要使用中断方式，需要在 code 中将 ENABLE_HOTPLUG_INT 定义为 1（同时要修改 dws 将
对于 GPIO 设置为 EINT 功能） 
7. dts 中加入如第 10.2， 10.3， 0， 10.5 和 10.6 章的设定 
8. 其他设定均在 driver 中 hard code 写死，如有不满足需求可以剥离出来写到 dts 
9. 该驱动同时支持 dsi 和 dp/edp。 
10. LK 中固定为 dsi0 对应的设定，如果要改为其他接口，需要改 code。 
11. edp 的 init cmd 使用 work 队列去发送，会缩短发送时间但发送时序无法保证。如果不使用 work，设置
ENABLE_INIT_WORK 为 0。 
12. 该驱动支持 des hotplug。如果不要支持 hotplug，设置CONFIG_ENABLE_SERDES_HOTPLUG 为 n。 
13. 如果没有 status command，不能支持 hotplug 和 mbrain 功能 
 
10.1 驱动中命令格式说明 
写命令格式 1  <i2c addr>   <reg width>  <reg addr>  <data>  <delay ms> 
写命令格式 2 <i2c addr>  <reg width>  <cmd len>    <data> 
读命令格式 <i2c addr>  <reg width>  <reg addr>   <mask>  <except data> 
i2c addr  要操作设备的 i2c client 地址 
reg width 
i2c 设备的 reg 地址长度，只支持 16/8/0 三种 
16   表示 reg 地址是 2 个 byte 
8     表示 reg 地址是 1 个 byte 
0     表示不指定 reg 地址，后面全是数据 
reg addr 要读写的 reg 的地址 
data 要写到 reg 的数据 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
delay ms 发送完该命令后 delay 多少毫秒 
cmd len reg 地址长度为 0 时，后面有多少 byte 的数据 
mask 读出的数据跟这个数据做与操作 
except data 读出的数据与 mask 做完与操作后预期的数据 
 
10.2 DSI Ser 设定示例 
&i2c1 { 
    status = "okay"; 
    max96789: max96789@40 { 
        compatible = "maxiam,max96789,dsi0";     # compatible,如果是其他chip 注意修改driver，注
意红字表示该driver 对应哪个接口 
        status = "disabled"; 
        reg = <0x40>; 
        reset-gpios = <&pio 37 0>; 
        //power-en-gpios = <&pio 38 0>,<&pio 39 0>; # ser 电源开关，按实际情况填写（code 中只支持
gpio 模式，多个GPIO 按上电顺序填写，没有不写） 
        //interrupt-parent = <&pio>;              # 使用中断来做hotplug，如启用需在driver 中
#define ENABLE_HOTPLUG_INT 1 
        //interrupts = <187 IRQ_TYPE_EDGE_RISING>; 
        pinctrl-names = "default"; 
        config = <&config_compatible>;            # 配置此node 使用哪个des panel 设置 
        port { 
            max96789_in: endpoint { 
                remote-endpoint = <&dsi_out>;     # 标准的bridge node 写法 
            }; 
        }; 
    }; 
    max96789_v0: max96789-v0@4a {                 # 虚拟ser driver，superframe or dual link
时使用 
        compatible = "maxiam,max96789,virtual"; 
        status = "disabled"; 
        reg = <0x4a>; 
        master = <&max96789>;                      # virtual ser driver 必须设置，该设定对应到哪
个实体设备 
        port { 
            max96789_v0_in: endpoint { 
                remote-endpoint = <&dsiv0_out>; 
            }; 
        }; 
    }; 
}； 
 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
10.3 DSI Des-Panel 设定示例 
    huayang_1080: config1 {                    # single panel config node 
        pre-init-cmd = <                       # ser 初始化命令，在bridge preenable 中执行 
            0x40 0x10 0x0001 0x08 0x00 
            0x40 0x10 0x0203 0x00 0x00 
            .............. 
        >; 
        post-init-cmd = <>;                    # post ser 初始化命令，在bridge pre_eanble 中执行 
        deinit-cmd = <                         # ser disabled 命令，在bridge disabled 中执行 
            0x40 0x10 0x0010 0x80 0x20 
        >; 
        linka-init-cmd = <                     # des linkA 初始化命令，在bridge enable 中执行 
            0x4c 0x10 0x06ff 0x11 0x0 
            0x4c 0x10 0x01ce 0x4e 0x0 
            0x4c 0x10 0x020c 0x03 0x0 
            0x4c 0x10 0x020d 0xaa 0x0 
            0x4c 0x10 0x020e 0x4a 0x0 
            0x1a 0x00 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
        >; 
        ser-status = <                       # 检测ser 状态，是读i2c 命令，注意只支持如下3 条命令并
且要按顺序填写 
            0x40 0x10 0x00d 0x80 0x80        # 串行器是否能detect 到 
            0x40 0x10 0x102 0x80 0x80        # 96789 检查PCLK 是否detect 到 
            0x40 0x10 0x55d 0x70 0x70        # 96789 检查HS/VS/DE 是否detect 到 
        >; 
        linka-status = <                     # 检测linka 状态，注意只支持如下两条命令并且要按顺序 
            0x40 0x10 0x01f 0x08 0x08        # 96789 检查linka 是否有接入 
            0x4c 0x10 0x6ff 0x11 0x11        # 96789 检查linka 是否有被初始化，通过往一个用不到且能
读写的reg 里写任意值再读出来判断它是否被初始化 
        >; 
        panel-timing-a {                     # panel timing 信息 
            width = <1920>; 
            height = <1080>; 
            hfp = <40>; 
            hsa = <42>; 
            hbp = <78>; 
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

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
10.4 DSI Superframe 设定示例 
huayang_dsi_superframe: config2 {            # des panel 的node 
       superframe = <1>;                     # 是否为superframe 模式，是写1，否写0 
       pre-init-cmd = <                      # ser 初始化命令，在bridge pre_enable 中执行 
            0x40 0x10 0x0002 0x73 0x00  
            0x40 0x10 0x0053 0x10 0x00  
            ....... 
      >; 
      i2c-remap-cmd = <                      # i2c reg 映射设定，在bridge pre_enable 中执行，
plug in 后会重发 
            0x40 0x10 0x0010 0x21 0x64 
            0x4c 0x10 0x0000 0x90 0x00  
            ......... 
      >; 
      post-init-cmd = <>;                    # ser 初始化命令，在bridge pre_enable 中执行 
      linka-init-cmd = <                     # linka 初始化命令，在bridge enable 中执行 
           0x48 0x10 0x01ce 0x4c 0x00 
           ........................................... 
           0x1b 0x00 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
     >; 
     linkb-init-cmd = <                     # linkb 初始化命令，在bridge enable 中执行 
          0x4a 0x10 0x01ce 0x4c 0x00 
          ....... 
     >; 
     linka-deinit-cmd = <                   # linkA deinit 命令，在bridge disable 中执行 
            0x1b 0x00 0x0b 0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x00 0x00 0x85 
     >; 
     linkb-deinit-cmd = <                   # linkB deinit 命令，在bridge disable 中执行 
            0x1c 0x00 0x0b 0x83 0x00 0x00 0x02 0x00 0x00 0x00 0x00 0x00 0x00 0x85 
     >; 
     deinit-cmd = <>;                       # ser deinit 命令，在bridge disable 中执行，只有
linka/b 都disable 了才会执行 
     ser-status = <                         # 检测ser 状态，是读i2c 命令，注意只支持如下3 条命令并
且要按顺序填写 
            0x40 0x10 0x00d 0x80 0x80       # 串行器是否能detect 到 
            0x40 0x10 0x102 0x80 0x80       # 96789 检查PCLK 是否detect 到 
            0x40 0x10 0x55d 0x70 0x70       # 96789 检查HS/VS/DE 是否detect 到 
     >; 
     linka-status = <                       # 检测linka 状态，注意只支持如下两条命令并且要按顺序 
            0x40 0x10 0x01f 0x08 0x08       # 96789 检查linka 是否有接入 
            0x48 0x10 0x6ff 0x11 0x11       # 96789 检查linka 是否有被初始化，通过往一个用不到且能
读写的reg 里写任意值再读出来判断它是否被初始化 
     >; 
     linkb-status = <                       # 检测linkb 状态，注意只支持如下两条命令并且要按顺序 
            0x40 0x10 0x01f 0x10 0x10       # 96789 检查linkb 是否有接入 
            0x4a 0x10 0x6ff 0x11 0x11       # 96789 检查linkb 是否有被初始化，通过往一个用不到且能
读写的reg 里写任意值再读出来判断它是否被初始化 
     >; 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
     panel-timing-a {                       # panel A timing，必须设置 
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
    panel-timing-b {                         # panel B timing，superframe 和dual link 模式下必
须设置 
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
 
10.5 DSI Dual Link 设定示例 
&i2c1 { 
    status = "okay"; 
    max96789: max96789@40 { 
        compatible = "maxiam,max96789,dsi0";      # dsi0 对应的设定不变 
        status = "disabled"; 
        reg = <0x40>; 
        reset-gpios = <&pio 37 0>; 
        pinctrl-names = "default"; 
        config = <&huayang_1080>;                 # 配置此时使用哪个des panel 设置，该panel 设定
需要设置dual-link=1 
        port { 
            max96789_in: endpoint { 
                remote-endpoint = <&dsi_out>;     # 标准的bridge node 写法 
            }; 
        }; 
    }; 
    max96789_v0: max96789-v0@4a {                 # dual link 时虚拟的driver 
        compatible = "maxiam,max96789,virtual"; 
        status = "disabled"; 
        reg = <0x4a>; 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
        master = <&max96789>;                     # 必须设置，该设定对应到哪个实体设备 
        port { 
            max96789_v0_in: endpoint { 
                remote-endpoint = <&dsi1_out>;    # 与dsi1 建立连接 
            }; 
        }; 
    }; 
};  
&dsi1 { 
    status = "disabled"; 
    #address-cells = <1>; 
    #size-cells = <0>; 
    ports { 
        port { 
            dsi1_out: endpoint { 
                remote-endpoint = <&max96789_v0_in>;# 与max96789_v0 建立连接 
            }; 
        }; 
    }; 
}; 
huayang_1080: config1 {                            # 对应serdes panel 设定 
      dual-link = <1>;                             # 设置dual-link mode 
      pre-init-cmd = <                             # 这里的设定按实际要求来 
            0x40 0x10 0x0001 0x08 0x00 
            0x40 0x10 0x0203 0x00 0x00 
            ................ 
     >; 
     panel-timing-a {                              # panel A timing，必须设置 
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
    panel-timing-b {                               # panel B timing，dual link 模式下必须设置 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
     }; 
}; 
 
10.6 Des Panel 兼容设定示例 
max96789: max96789@40 { 
        compatible = "maxiam,max96789,dsi0";     # ser 的设定 
        status = "disabled"; 
        reg = <0x40>; 
        reset-gpios = <&pio 37 0>; 
        pinctrl-names = "default"; 
        config = <&config_compatible>;           # 使用des panel 兼容设定 
        ............... 
}; 
&max96789 { 
    config_compatible: compatible-node { 
        comp-cmd = <                             # 识别兼容设定前发送的命令，格式同前面提到的写命令 
            0x1a 0x00 0x0b 0x83 0x50 0x00 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0xd4 
        >; 
        comp-type =                              # 读取兼容屏的设定 
            <0x1a 0x08 0x08 0xf0 0x10 &config_bt>, # 格式同前面提到的读命令，最后一个元素为匹配到后
对应的屏设定handle 
            <0x1a 0x08 0x08 0xff 0xff &huayang_1080>; # 如有其他兼容设定，按这个格式加在后面。如果
都匹配不到，取最后一行的设定 
    }; 
} 
 
10.7 使用注意 
• 以上各种 cmd 都是可选的，可以不设置或者写空 
• 当 status 命令为空时，不会启动 hotplug 线程 
• 只有单屏时，必须设置 panel-timing-a 
• i2c-remap-cmd 会在 hotplug 的时候重新发送，需要在 hotplug 后重新发送的命令放在这里 
• 命令发送顺序为：pre-init-cmd  → i2c-remap-cmd → post-init-cmd → linka-init-cmd → linkb-
init-cmd →  linka-deinit-cmd → linkb-deinit-cmd → deinit-cmd 
• 使用虚拟 driver 时，需要将 virtual_dsiX(for dsi, edp/dp is virtual_edp..) 
display_volX_exdmaX,max96789_vX 这几个同时 enable，或者同时 disabled 
 
 
 
 
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
MT8668 Yocto Panel  
 
 User Manual 
Confidential B 
附件一 附加条款 
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接
受本附加条款为先决要件。您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之
拘束。若您不同意受本附加条款之拘束，您将不得使用、取得或下载本文件并应立即删除或毁弃所有本文件之副
本。 
 
本文件含有联发科技股份有限公司及其关联公司（以下合称「联发科技」）或其授权人之机密信息及专有信息，
仅供您为本文件所描述之联发科技芯片组作内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任
何对联发科技、其供货商及/或其直接或间接客户所提潜在专利侵权主张的证据）。禁止未经授权使用或揭露本文
件及其中所含信息。您同意赔偿联发科技因您未经授权使用或揭露本文件及其中所含信息之一部或全部导致联发
科技所受之任何损失或损害。 
 
联发科技及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默
示、透过禁反言原则或其他方式）。联发科技得随时变更本文件内容而无须另行通知。联发科技无须承担与使用
或信赖本文件相关或因使用或信赖本文件致生之任何责任，包括但不限于间接损害或附带损害赔偿责任。  
 
本文件及联发科技所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，联发科技不负任何
明示、默示、法定或其他形式之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之
担保责任或任何由贸易惯例或交易、履行过程所生之担保责任。对于联发科技为符合您所提规格或遵循特定标准
或标准组织的要求所作之交付物，联发科技亦不应承担任何责任。 
 
于未对前述条款造成限制之情形下，联发科技不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不
承担任何因产品、电路或软件之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与联发科技
产品所涉及之设计、验证与测试之所有责任，并应确保前述整合产品符合相关标准及任何安全性要求或其他要
件。 
 
本附加条款及所有与本附加条款或本文件相关之行为应以台湾法律管辖、解释与阐明，不适用冲突法原则。  
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0135 MT8668_Yocto_Property_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Property_User_Manual_CN_V1.0.pdf

SHA-256：18ec91283d4dc5fd725690e8bd2c63aa7ea942c10cef6cf874f2266564f4bec2

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0135.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28 
MT8668 Yocto Property User Manual 
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
  MT8668 Yocto Property 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 魏新 正式版 
 
 
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
  MT8668 Yocto Property 
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
附件一 附加条款 ····························································································································································· 11 
 
图片目录 
图 1-1. getprop ··········································································································································································· 4 
图 1-2. Property API ··································································································································································· 5 
图 1-3. Property 流程 ································································································································································ 6 
图 1-4. prop.bb ··········································································································································································· 7 
图 1-5. watchprop ······································································································································································ 7 
图 1-6. watchprop API ································································································································································ 8 
图 1-7. Property cross-OS sync 流程（2OS 和 3OS） ··············································································································· 8 
图 1-8. setprop from Android to Yocto······································································································································· 9 
图 1-9. Yocto UT Test ································································································································································ 10 
 
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
  MT8668 Yocto Property 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
  MT8668 Yocto Property 
User Manual 
Confidential B 
 Libprop.so 支持的 API 
 
图 1-2. Property API 
 支持 Property Watch 
见 1.6 章节。 
 特定 Property 跨域同步 
见 1.7 章节。 
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
  MT8668 Yocto Property 
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
meta/meta-mediatek/recipes-devtool/prop/propsyncs.bb 
meta/meta-mediatek/recipes-devtool/prop/propsyncu.bb 
meta/meta-mediatek/recipes-devtool/libprop/libprop.bb 
 
 
Android: 
• Source path: vendor/mediatek/proprietary/external/propsync/ 
 
 如何使用 libprop.so 
如果一个 module 想调用 property API，需要 link libprop.so，方法如下： 
1. bb 中修改 
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
  MT8668 Yocto Property 
User Manual 
Confidential B 
    DEPENDS = "libprop” 
 
2. makefile 中加： 
    LDFLAGS:  -lprop 
 
3. source code 增加 properties.h 
    #include <prop/properties.h> 
 
4. xxx.service 依赖 prop.service  （特别是开机比 prop 起来早，需要等 prop ready 后才能使用） 
    After=prop.service 
    Requires=prop.service 
 
 如何添加 Property to local.prop 
在prop.bb 中将 build time 所需要产生的 property 放在 local.prop。 
 
图 1-4. prop.bb 
 Property Watch 
1. property_watch_async () 函数开发是用来监测某个 key，当这个 key 被设置，会通知调用 property_watch_async 
的 process，执行 callback 函数。 
UT test 方法：在 Yocto 端，执行watchprop -w xxx(key) xxx(value) 
 
图 1-5. watchprop 
 
2. 如果 module 想监测某个 property 做事，可以直接调用 property_watch_async 函数，实现自己的 callback 函数 
注意：调用 property_watch_async 是使用的异步 callback。 
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
  MT8668 Yocto Property 
User Manual 
Confidential B 
 
图 1-6. watchprop API 
 特定 Property 跨域同步 
 
 
 
图 1-7. Property cross-OS sync 流程（2OS 和 3OS） 
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
  MT8668 Yocto Property 
User Manual 
Confidential B 
 
1. Android sync to Yocto (在 Android rc 中设定要监测的 property，当这个 property 被设置时会 trigger process 
synclient 跑起来，通过 vsocket 与 Yocto propsyncserver 通信，然后 Yocto propsyncserver 会设置 property) 
 
UT test: 
1) 在 init.project.rc 中监测 sys.boot_test 
 
 
2) 在 Android 端：adb shell setprop sys.boot_test  done 
3) 在 Yocto 端检查：adb shell getprop sys.boot_test 
 
 
图 1-8. setprop from Android to Yocto 
 
2. Yocto sync to Android（直接调用 property_set_sync_android 或者 property_set_only_android 函数，其函数会通
过 vsocket 与 Android synserver 或 synserverv 通信，然后 synserver 或 synserverv 会设置这个 property） 
 
UT test: 
1) 在 Yocto 端 
adb shell watchprop -sa xxx(key) xxx(value) 0 0  （vendor property）        
adb shell watchprop -sa xxx(key) xxx(value) 1 0  （system property） 
2) 在 Android 端检查：adb shell getprop xxx 
 
3. Yocto sos sync to uos（直接调用 property_set_only_uos 函数，其函数会通过 vsocket 与 uos propsyncserver_uos
通信，然后 uos propsyncserver_uos 会调用 property_set 函数 set property） 
 
UT Test： 
1) 在 Yocto sos 端 
adb shell watchprop -u xxx(key) xxx(value) 
2) 在 Yocto uos 端检查：adb shell getprop xxx 
 
4. Yocto uos sync to sos（直接调用 property_set_sync_utos 函数，其函数会通过 vsocket 与 sos propsyncserver_sos
通信，然后 sos propsyncserver _uos 会调用 property_set 函数 set property） 
 
UT Test： 
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
  MT8668 Yocto Property 
User Manual 
Confidential B 
1) 在 Yocto uos 端 
adb shell watchprop -us xxx(key) xxx(value) 
2) 在 Yocto sos 端检查：adb shell getprop xxx 
 
5. Yocto UT test 相关命令 
在 Yocto shell 敲 watchprop -h 可以查看相关测试说明 
 
图 1-9. Yocto UT Test 
 
注意：测试前请先关掉 selinux (adb shell setenforce 0)！ 
 
6. 跨域相关 API 
API 使用的 OS 
Set Property to 
sos uos android 
int property_set_only_android(const char* key, const char* value, int system); sos   Y 
int property_set_only_uos(const char* key, const char* value); sos  Y  
int property_set_sync_android(const char *key, const char *in_value, int 
system, int boot); sos Y  Y 
int property_set_sync_stou(const char *key, const char *value, int system); sos Y Y Y 
int property_set_sync_utos(const char *key, const char *value); uos Y Y  
 
 
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
  MT8668 Yocto Property 
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
# SRC0136 MT8668_Yocto_SDCard_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_SDCard_User_Manual_CN_V1.0.pdf

SHA-256：cba4630088f7550654ba8f62646f299747944f50938ddb86a981e943a6970b79

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0136.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Yocto SDCard  
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
MT8668 Yocto SDCard 
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
MT8668 Yocto SDCard 
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
 MT8668 SDCard 特征 ··································································································································· 5 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Yocto SDCard 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Yocto SDCard 
User Manual 
Confidential B 
(5) CD: SD 卡插入检测，通常借由 SD 卡座机械结构实现有/无卡时 GPIO 电平变化。 
 
 
图 1-1. UHS-I 卡初始化流程 
 
 MT8668 SDCard 特征 
(1) 兼容 SD3.0 协议标准 
(2) 支持 Basci DMA 和 Descriptor DMA 模式 
(3) 支持 Bus speed mode: Default Speed/High Speed/SDR12/SDR25/SDR50/SDR104/DDR50  
(4) 支持 1/4bits bus width 
 
1.3 配置/客制指南 
 内核配置 
(1) 启用 SDCard 支持 
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
MT8668 Yocto SDCard 
User Manual 
Confidential B 
CONFIG_MMC = y 
 
(2) 启用联发科主机驱动程序支持 
CONFIG_DEVICE_MODULES_MMC_MTK = m 
 
 DTS 节点 
 
 
图 1-2. SDCard 的 DTS 节点 
 
(1) SD2.0 卡支持配置 “cap-sd-highspeed”，SD3.0 高速卡 mode 配置 “sd-uhs-xxx”； 
(2) SD driving strength 可以在对应 mode 的 pinctrl 节点配置，比如下面 SDR104 mode； 
 
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
MT8668 Yocto SDCard 
User Manual 
Confidential B 
 
图 1-3. SDR104 模式的 pinctrl 节点 
 
(3) SD 卡检测脚通过”cd-gpios”配置 GPIO pin，GPIO_ACTIVE_LOW 表示插卡时低电平，GPIO_ACTIVE_HIGH 则表示插
卡时高电平； 
(4) 根据实际使用的 SD 卡端 VDD 以及 Host 端 IO 供电配置 “vmmc-supply”和 “vqmmc-supply”。如果需要使用 fast 
power off（拔卡时 VMCH 硬件下电）功能，“vmmc-supply”配置节点&mt6373_vmch_eint_high（对应“cd-gpios”
的 GPIO_ACTIVE_LOW）或&mt6373_vmch_low（对应“cd-gpios”的 GPIO_ACTIVE_HIGH）；如果不需要使用 fast 
power off 功能，“vmmc-supply”配置节点&mt6373_vmch。 
 
 KO 表格 
添加 host driver ko 到如下路径的 ko table，第三列配置“ramdisk”会安装到 initramfs。 
meta/meta-mediatek-mt8668/recipes-kernel/linux/ko_order_table/${PROJECT}/ko_order_table.csv: 
 
 
1.4 常见问题/故障排除 
 SD 卡不识别，量测不到 VDD 电压 
(1) 按照章节 1.3 检查内核配置和 DTS 配置是否正确； 
(2) 如果 VDD 供电 power 用的是 MT6373，并且 detect pin 有接到 MT6373 的 SD_DET 脚，请检查 DTS 中”vmmc-
supply”配置的 power 节点与 detect pin 的极性是否匹配； 
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
MT8668 Yocto SDCard 
User Manual 
Confidential B 
(3) 如果步骤(2)检查结果匹配，请将”vmmc-supply”配置&mt6373_vmch 看 VDD 是否可以上电，可以上电表示 fast 
power off 功能有问题，提 PMIC issue 到联发科； 
(4) 如果步骤(3)不可以上电，抓取 Kernel log 并提 SDCard issue 到联发科。 
 
 插 SD 卡开机可以识别，热插拔不识别 
(1) 按照章节 1.3.2 检查 DTS 中”cd-gpios”的配置是否正确； 
(2) 如果 DTS 配置没有问题，检查 src/devtools/dct/dws/mt6881/${PROJECT}.dws 中 detect pin 对应的 GPIO
配置是否正确，参考图 1-4 所示配置： 
 
 
图 1-4. 用于检测引脚的 dws 设置 
 
(3) 如果配置检查正确热插拔还是无法识别，请再硬件量测下 detect pin 在插/拔卡状态下的电平是否符合预期，符
合预期的话请提 SDCard issue 到联发科。 
  
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
MT8668 Yocto SDCard 
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
# SRC0137 MT8668_Yocto_Secure_Boot_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Secure_Boot_User_Manual_CN_V1.0.pdf

SHA-256：7807e7a6bd971e1cf097ae2418a1bc454e578a7170ab170ebbb6f4c1af0d8528

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0137.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Yocto Secure Boot User Manual 
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
MT8668 Yocto Secure Boot 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 高峰 正式版 
 
  
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
MT8668 Yocto Secure Boot 
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
 签名 DA ······················································································································································· 11 
 生成 Authfile··············································································································································· 11 
附件一 附加条款 ····························································································································································· 12 
 
图片目录 
图 1-1.安全启动检查流程························································································································································· 6 
 
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
MT8668 Yocto Secure Boot 
User Manual 
Confidential B 
1 Secure Boot 
1.1 概述 
本文档旨在提供 MT8668 SoC 及其配套 SDK 中安全启动功能的概览。在该产品的设计和部署周期中，功能和特性可
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Yocto Secure Boot 
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
First-loader。验证方法使用 SHA256 计算哈希值，RSA（2048 位）验证签名（后续会支持 RSA3072）。First-
loader 包含 key cert, content cert 和 image content， 具体过程如下： 
(1) 使用 SBC_PUBK 来校验 First-loader key cert。 
(2) 如果 First-loader key cert 校验成功，用 key cert 中的 image pub key 和 content cert 中的 image pub key 进行比
较。 
(3) 如果(2)一致，则使用 image pub key 去校验 First-loader content cert。 
(4) 校验成功，最后计算出 First-loader image 的 hash 值，与 content cert 里存的 hash 值进行比较。 
注意： 
• 如果外部存储器是 NAND 闪存，BROM 支持第二份（副本）First-loader。当 BROM 无法加载第一份（副本）First-loader
时，BROM 会尝试加载/认证第二份（副本）First-loader。 
 
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
MT8668 Yocto Secure Boot 
User Manual 
Confidential B 
3. 在第一阶段引导加载程序之后，引入了 fitimage 来进行后续的校验。包括 Kernel 和 TEE 等镜像。 
 
4. First-loader 从 NVM 把 Linux Kernel 加载程序加载到非安全的 DRAM 区域并验证。它使用嵌入在 First-loader 中的
VERIFIED 公钥来认证校验 kernel FIT 签名，并检测 Fit 镜像中各个子镜像的 HASH 值。验证方法使用 SHA256 计
算哈希值，RSA（2048 位 or 3072 位）和 MTK 或 PSS 填充进行验证。 
 
5. First-loader 从 NVM 把 TEE 加载程序加载到非安全的 DRAM 区域并验证。它使用嵌入在 First-loader 中的
VERIFIED 公钥来认证校验 TEE FIT 签名，并检测 Fit 镜像中各个子镜像的 HASH 值。验证方法使用 SHA256 计算
哈希值，RSA（2048 位 or 3072 位）和 MTK 或 PSS 填充进行验证。 
 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Yocto Secure Boot 
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
 
1. 生成 Yocto 私钥的命令： 
openssl genrsa -F4 -out sbc_key.pem 2048 
openssl genrsa -F4 -out verified_key.pem 2048 
openssl req -batch -new -x509 -key verified_key.pem -out verified_key.crt 
2. 生成公钥的命令： 
openssl rsa -in sbc_key.pem -pubout > sbc_pubk.pem 
openssl rsa -in verified_key.pem -pubout > verified_pubk.pem 
 
使用相同的方法生成用于签名和验证 DA 的 DA 密钥对（da_prvk.pem/da_pubk.pem），DA 可以和 SBC key 一样，
也可以不一样。 
  
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
MT8668 Yocto Secure Boot 
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
注意： 
• 您必须使用-c 这个入参才能生成规范的十六进制的 ASCCI 显示结果。 
 
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
• 开启 IC 的 BROM secure boot 校验功能，除了要写上述的 SBC_PUBK0_HASH 栏位外，还需要写 SBC_EN。efuse 只能写一次，
所以在项目开发阶段不建议写 efuse 开启 IC 的 BROM secure boot 校验功能。 
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
MT8668 Yocto Secure Boot 
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
MT8668 Yocto Secure Boot 
User Manual 
Confidential B 
1.4.4.2 签名镜像 
独立的签名环境的工具包位于：meta/meta-mediatek-mt86XX/recipes-devtools/standalone_sign_env，客
户可以根据自己的需要可以将工具包放到特定的服务器上。 （如果想进行远程签名也是支持的，另有远程签名的
文档可以参考） 
Step 1: 
将相关密钥${SBC_KEY}.pem, ${VERIFIED_KEY}.pem 放到 “keys”文件夹下。 
 
Step 2: 执行签名脚本: sh sign_images.sh 
如果一切正常，签名的镜像将被放置在 “signed”文件夹中。 
 
注意： 
• sign_images.sh 是 MTK SDK 的示例文件。强烈建议您使用该文件并根据您的需要进行修改。 
 
1.5 签名 DA 
下载代理验证 (DAA) 是 MediaTek 的解决方案，可确保固件下载进度的安全。在开始身份验证之前，请确保  SBC 已
启用并且安全启动测试已通过。Yocto 用的 Android 这边的 DA，所以在签名 DA 时会用到 Android 相关的脚本和源
码。 
 
 生成 dakey.h 
将 DA 公钥（da_pubk.pem）导出，使用der_extractor 生成 dakey.h, 该工具位于 Android 源码
vendor/mediatek/proprietary/scripts/sign-image_v2/der_extractor/ 目录下，请将生成的 dakey.h 放置
到以下 Yocto 路径： 
[LK2] $LK2/target/$PROJECT/include/dakey.h 
 
命令： 
chmod 777 der_extractor 
python pem_to_der.py da_pubk.pem da_pubk.der 
./der_extractor da_pubk.der dakey.h ANDROID_SBC 
 
 
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
MT8668 Yocto Secure Boot 
User Manual 
Confidential B 
 签名 DA 
1. 密钥路径设置 
将 DA 公钥（da_prvk.pem）导出，放置到 Android 路径
vendor/mediatek/proprietary/scripts/secure_chip_tool/custom_keys 目录下。 
 
2. 将需要签名的 DA 放置在 prebuilt/resignda/ 目录下，并执行以下命令来签名 DA： 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Yocto Secure Boot 
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
# SRC0138 MT8668_Yocto_Sentry_Mode_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Sentry_Mode_User_Manual_CN_V1.0.pdf

SHA-256：4c95c7252a57a32ee46245dd74dedb354affa43c9c8488046a4cdc2fe06c204e

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0138.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2026-01-06
MT8668 Yocto Sentry Mode 
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
MT8668 Yocto Sentry Mode 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-06 徐翔 正式版本 
 
  
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
MT8668 Yocto Sentry Mode 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Yocto Sentry Mode 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Yocto Sentry Mode 
User Manual 
Confidential B 
1 Sentry Mode 
1.1 概述 
 简单介绍 
本文档介绍 MT8668 Sentry Mode（哨兵模式）的实现原理以及操作方法。 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Yocto Sentry Mode 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Yocto Sentry Mode 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Yocto Sentry Mode 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Yocto Sentry Mode 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Yocto Sentry Mode 
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
在 SPM8668 公版上，需要在 CON12 卡槽上接上摄像头 MAX96712 子卡，子卡的 CON501 上接 4 颗 YUV 传感器。 
 APP 设置 
在 Yocto shell 界面输入下列命令 
 
会弹出哨兵模式应用界面，点击 start/stop 启动或者关闭哨兵模式功能 
 
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
MT8668 Yocto Sentry Mode 
User Manual 
Confidential B 
 监测录制 
当发生碰撞后，会录制碰撞前后各 10s 的数据，存放在/data/ 路径下 
• 路径： /data 
• 名字： sentry_data_年_月_日_时_分_秒.mp4……(平台联网时才能获取正确时间，否则是平台默认时间) 
• 格式：mp4 
• 时长：20s 
• 视屏摆放：长条 
 
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
MT8668 Yocto Sentry Mode 
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
# SRC0139 MT8668_Yocto_SPI_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_SPI_User_Manual_CN_V1.0.pdf

SHA-256：7d1e0f95c34f85cdc6979f47ac270c6505d949845921de1c7f4bbba86a8f8818

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0139.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Yocto SPI User Manual 
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
MT8668 Yocto SPI 
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
MT8668 Yocto SPI 
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
 寻求 MTK 帮助 ··········································································································································· 15 
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
MT8668 Yocto SPI 
User Manual 
Confidential B 
附件一 附加条款 ····························································································································································· 16 
 
 
图片目录 
图 1-1. SPI Master 和 SPI Slave 之间的引脚连接 ····················································································································· 5 
图 1-2. SPI 总线驱动框架图 ······················································································································································ 6 
图 1-3. 四种通信模式波形 ························································································································································ 7 
图 1-4. 主设备与多设备引脚连接 ············································································································································ 7 
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
MT8668 Yocto SPI 
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
MT8668 Yocto SPI 
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
• 有四种通信模式可用（模式 0、1、2、3），参见图 1-3 
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
MT8668 Yocto SPI 
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
MT8668 Yocto SPI 
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
const void *txbuf, unsigned 
SPI：结构体 spi_device 的指针 
成功返回 0，否则返回错误码 txbuf：要写入的数据 
n_tx：txbuf 的大小（以字节为单位） 
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
MT8668 Yocto SPI 
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
源代码路径：co_common/drivers/spi/spi.c. 
spi_message.complete callback function: 
 
static void xxxxxx_complete(void *args) 
{ 
 //transfer was success……; 
} 
 
Sending and receiving data in asynchronous: 
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
MT8668 Yocto SPI 
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
  reg = <0>; 
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
MT8668 Yocto SPI 
User Manual 
Confidential B 
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
MT8668 Yocto SPI 
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
MT8668 Yocto SPI 
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
MT8668 Yocto SPI 
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
MT8668 Yocto SPI 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8668 Yocto SPI 
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
# SRC0140 MT8668_Yocto_System_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_System_User_Manual_CN_V1.0.pdf

SHA-256：20554ef2677ee10827dd92dca95d5298cdeb910379cc6950a466bdaa5b523f35

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0140.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Yocto System User Manual 
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
MT8668 Yocto System 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0  2026-01-28 钱刚/施昌雷 正式版 
  
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
MT8668 Yocto System 
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
 Yocto Meta Layers ········································································································································· 7 
 代码结构 ······················································································································································ 8 
 常用文件路径 ············································································································································ 10 
 分区表 ························································································································································ 12 
1.3 Yocto 编译与烧录 ·················································································································································· 14 
 Build Server ················································································································································· 14 
 编译软件 ···················································································································································· 14 
 软件构成 ···················································································································································· 15 
 烧录软件 ···················································································································································· 16 
 编译 SDK ····················································································································································· 18 
 使用 SDK ····················································································································································· 18 
1.4 Yocto 客制化 ·························································································································································· 19 
 常用变量 ···················································································································································· 19 
 bb 文件的基本结构 ··································································································································· 20 
 开机自启动 ················································································································································ 21 
 依赖 ···························································································································································· 22 
 树外驱动 ···················································································································································· 23 
 image bb ····················································································································································· 25 
 fog 简介 ······················································································································································ 25 
 创建 project ················································································································································ 26 
 创建 meta layer ·········································································································································· 27 
1.5 Yocto Build Mode ··················································································································································· 28 
 使用方法 ···················································································································································· 29 
 适配 ···························································································································································· 29 
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
MT8668 Yocto System 
User Manual 
Confidential B 
1.6 Yocto 调试技巧 ······················································································································································ 30 
 build 目录结构 ··········································································································································· 30 
 工作目录常用子目录································································································································· 31 
 打印变量值 ················································································································································ 32 
 加速 Yocto 编译·········································································································································· 33 
1.7 开机流程 ································································································································································ 34 
 BootROM ···················································································································································· 34 
 LK2 ······························································································································································ 34 
 Kernel ·························································································································································· 35 
 initramfs ······················································································································································ 36 
 systemd ······················································································································································· 36 
1.8 Yocto 常用调试工具 ·············································································································································· 37 
附件一 附加条款 ····························································································································································· 38 
 
图片目录 
图 1-1. MT8668 meta layers ······················································································································································· 7 
图 1-2. 代码结构········································································································································································ 9 
图 1-3. 下载 SP_Flash_Tool ······················································································································································ 16 
图 1-4. 加载 flash.xml ······························································································································································ 17 
图 1-5. 软件烧录······································································································································································ 17 
图 1-6. 安装 SDK ······································································································································································ 18 
图 1-7. 目录结构······································································································································································ 19 
图 1-8. meta layer 目录结构 ··················································································································································· 28 
图 1-9. 编译完成后的目录结构 ·············································································································································· 31 
图 1-10. 开机流程 ··································································································································································· 34 
图 1-11. kernel_init ·································································································································································· 35 
 
表格目录 
表 1-1. 名词解释········································································································································································ 6 
表 1-2. Meta layer 说明 ····························································································································································· 7 
表 1-3. 主要模块路径 ································································································································································ 9 
表 1-4. 常用文件路径 ······························································································································································ 10 
表 1-5. 分区表格式·································································································································································· 11 
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
MT8668 Yocto System 
User Manual 
Confidential B 
表 1-6. ko table 格式 ································································································································································ 12 
表 1-7. 分区表 ········································································································································································· 12 
表 1-8. Build server 要求 ························································································································································· 14 
表 1-9. 镜像文件说明 ······························································································································································ 15 
表 1-10. Yocto 常用变量 ·························································································································································· 19 
表 1-11. 创建 project ······························································································································································· 26 
表 1-12. Yocto build mode ······················································································································································· 28 
表 1-13. Build variant ······························································································································································· 29 
表 1-14. build 目录常用文件和目录······································································································································· 31 
表 1-15. 工作目录常用子目录 ················································································································································ 32 
表 1-16. 常见服务 ··································································································································································· 36 
表 1-17. Yocto 常用调试工具 ·················································································································································· 37 
 
  
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
MT8668 Yocto System 
User Manual 
Confidential B 
1 System 
本章节主要介绍 MT8668 Yocto 系统相关内容以及常见系统问题的处理方法。 
 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Yocto System 
User Manual 
Confidential B 
1.2 Yocto 系统架构 
 Yocto Meta Layers 
MT8668 Yocto meta layers 如图 1-1 所示，主要由 Yocto core layer, OSS layer, MediaTek feature layer, MediaTek platform 
layer 4 部分构成。表 1-2 详细说明了每个 layer 包含的内容。 
 
 
图 1-1. MT8668 meta layers 
 
表 1-2. Meta layer 说明 
Layer Explanation 
meta-mediatek-classes-overlay 覆盖 Yocto bbclass，自定义 bbclass。 
meta2 
包含 OpenEmbedded 的核心元数据，不包含发行版本，仅提供对模拟器的支
持。 
meta-poky 包含 Poky 发行版本的配置和元数据。 
meta-yocto-bsp3 包含 Yocto 项目参考硬件的 BSP。 
meta-filesystems 包含文件系统相关的元数据，例如 fuse、owfs、ntfs-3g 等。 
                                                                 
 
2 https://git.openembedded.org/openembedded-core/tree/README.OE-Core.md  
3 https://git.yoctoproject.org/poky/tree/meta-yocto-bsp/README.hardware.md  
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
MT8668 Yocto System 
User Manual 
Confidential B 
Layer Explanation 
meta-python 包含 Python 相关的元数据。 
meta-multimedia 包含多媒体相关的元数据。 
meta-networking 包含网络相关的元数据。 
meta-oe 其他共享的 OE 元数据。 
meta-clang 包含 clang/llvm 相关的元数据。 
meta-qt5 包含 qt5 相关的元数据。 
meta-mediatek MediaTek 基础 layer，包含 MediaTek 写的 bbclass 和与平台无关的软件包。 
meta-mediatek-gpl MediaTek gpl layer，包含 u-boot 等软件包。 
meta-mediatek-gplv2 MediaTek gplv2 layer，包含 grep 等软件包的 GPLv2 版本。 
meta-mediatek-gstreamer MediaTek GStreamer layer。 
meta-mediatek-ml-np 包含 MediaTek NeuroPilot 相关的软件包。 
meta-mediatek-mt8668 
meta-mediatek-mt8668-hyp MT8668 BSP layer，包含 MT8668 BSP 的配置文件和元数据。 
 
 代码结构 
MT8668 Yocto 代码结构如图 1-2 和表 1-3 所示。 
 
• meta 目录包含所有 Yocto 元数据，详细说明请参考 1.2.1 章节。 
• patch 目录包含 MediaTek 对 OSS 打的补丁。 
• prebuilt 目录包含预编译好的文件，例如可执行文件、动态库、镜像和工具链等。  
• src 目录包含所有的源代码文件。 
 
表 1-3 列出了主要模块的路径，及其简要说明。 
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
MT8668 Yocto System 
User Manual 
Confidential B 
 
图 1-2. 代码结构 
表 1-3. 主要模块路径 
Layer Explanation 
meta/meta-mediatek-mt8668 
meta/meta-mediatek-mt8668-hyp 
MT8668 platform 层 ，hyp 的 编 译会 使用到 meta-mediatek-
mt8668 中的内容 
src/bsp/lk2 
src/bsp/dramk_8668 bootloader 源代码 
src/kernel/linux/v6.12_mt8668/co_common Linux Kernel 6.12 源代码 
src/kernel/linux/v6.12_mt8668/co_device_module MediaTek Linux kernel 6.12 设备驱动 
src/kernel/modules out-of-tree 设备驱动 
src/apps/spm-base 
src/apps/atom-base 应用程序源代码 
src/connectivity Wi-Fi 相关的源代码 
src/ml/neuropilot NeuroPilot 4相关的源代码 
src/telephony 
src/telephonyware 车机 tbox(telephony) data/call/sms FW 相关的源代码 
src/tinysys tinysys 相关的源代码 
                                                                 
 
4 https://neuropilot.mediatek.inc/  
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
MT8668 Yocto System 
User Manual 
Confidential B 
 常用文件路径 
表 1-4 列出了一些 Yocto 系统常用文件路径及其作用。 
 
表 1-4. 常用文件路径 
路径 说明 
meta/meta-mediatek-mt8668/conf/machine/auto8668p1_64.conf 
meta/meta-mediatek-mt8668-
hyp/conf/machine/auto8668p1_64_sos.conf 
meta/meta-meidatek-mt8668-
hyp/conf/machine/auto8668p1_64_uos.inc 
项目配置文件。（hyp 中
auto8668p1_64_sos.conf 会使用到其他两个
配置文件） 
src/bsp/ptgen_v2/mt6881/partition_table_emmc_hyp_ab.csv 分区表。分区表的格式参考 1.2.3.1 章节。 
sos: meta/meta-mediatek-mt8668-hyp/recipes-
kernel/linux/ko_order_table/ko_order_table.csv 
uos: meta/meta-mediatek-mt8668-hyp/recipes-kernel/linux-
uos/ko_order_table/ko_order_table.csv 
ko table，决定 ko 加载顺序。格式参考
1.2.3.2 章节。 
evb board dts path: meta/meta-mediatek-mt8668-hyp/recipes-
kernel/linux/files/sos_dts/auto8668p1_64_sos_evb.dts 
demo board dts path: meta/meta-mediatek-mt8668-hyp/recipes-
kernel/linux/files/sos_dts/auto8668p1_64_sos.dts 
sos kernel dts 文件。 
evb board dts path: meta/meta-mediatek-mt8668-hyp/recipes-
kernel/linux-uos/files/dts/auto8668p1_64_uos_evb.dts 
demo board dts path: meta/meta-mediatek-mt8668-hyp/recipes-
kernel/linux-uos/files/dts/auto8668p1_64_uos.dts 
uos kernel dts 文件。 
1. deconfig: 
src/kernel/linux/v6.12_mt8668/co_device_module/arch/arm64/configs/
mgk_64_k612_defconfig 
2.src/kernel/linux/v6.12_mt8668/co_device_module/kernel/configs/use
rdebug.config (仅仅 build userdebug load 生效) 
3.src/kernel/linux/v6.12_mt8668/co_device_module/kernel/configs/eng.
config (仅仅 build eng load 生效) 
4.meta-mediatek-mt8668/recipes-
kernel/linux/files/config/auto8668p1_64.config 
5. sos project config:  meta-mediatek-mt8668-hyp/recipes-
kernel/linux/files/sos_config/auto8668p1_64_sos.config 
uos project config:  meta-mediatek-mt8668-hyp/recipes-kernel/linux-
uos/files/config/auto8668p1_64_uos.config 
kernel config 文件，主要由多个 config 
合并而成。 
sos: 
src/kernel/linux/v6.12_mt8668/co_device_module/drivers/hypervisor/s
os/Kconfig 
uos: 
src/kernel/linux/v6.12_mt8668/co_device_module/drivers/hypervisor/y
octo_uos/Kconfig 
hyp Kconfig 文件。 
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
MT8668 Yocto System 
User Manual 
Confidential B 
路径 说明 
src/devtools/dct/dws/mt6881/auto8668p1_64_sos.dws 
src/devtools/dct/dws/mt6881/auto8668p1_64_uos.dws dws 文件，主要用于配置 GPIO。 
meta-mediatek-mt8668-hyp/recipes-core/base-files/base-
files/auto8668p1_64_sos/fstab 
meta-mediatek-mt8668-hyp/recipes-core/base-files/base-
files/auto8668p1_64_uos/fstab 
fstab 文件，控制分区挂载。 
meta-mediatek-mt8668/recipes-auto/images/mtk-core-image-
auto8668.bb MT8668 镜像 bb，用于生成根文件系统。 
 
1.2.3.1 分区表格式 
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
MT8668 Yocto System 
User Manual 
Confidential B 
1.2.3.2 ko table 格式 
ko table 是一个 CSV 文件，可以用文本编辑器或 Excel 编辑。每一列的说明请参考表 1-6。 
 
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
表 1-7 列出了 MT8668 的分区表以及分区说明。 
 
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
MT8668 Yocto System 
User Manual 
Confidential B 
Partition_Name Type Download_File 说明 
seccfg Raw data NONE 存储安全启动相关的信息。 
otp Raw data NONE eMMC OTP (one-time-program, e.g. IMEI) 
pstore Raw data NONE 保存一些额外的日志，比如 power off charge。 
modem_a Raw data modem.img modem 镜像。 
spmfw_a Raw data spmfw.img spmfw 镜像。 
mcf_ota_a EXT4 mcf_ota.img mfc_ota 镜像。 
audio_dsp_a Raw data audio_dsp.img audio_dsp 镜像。 
pi_img_a Raw data pi_img.img pi_img 镜像。 
dpm_a Raw data dpm.img dmp 镜像。 
scp_a Raw data scp.img SCP 镜像。 
ccu_a Raw data ccu.img CCU 镜像。 
vcp_a Raw data vcp.img VCP 镜像。 
sspm_a Raw data sspm.img SSPM 镜像。 
mcupm_a Raw data mcupm.img MCUPM 镜像。 
gpueb_a Raw data gpueb.img GPUEB 镜像。 
apusys_a Raw data apusys.img APUSYS 镜像。 
boot_a Raw data boot.img Kernel 镜像。 
tee_a Raw data tee.img ATF 镜像。 
connsys_bt_a Raw data connsys_bt.img BT 镜像。 
connsys_wifi_a Raw data connsys_wifi.img WIFI 镜像。 
connsys_gnss_a Raw data connsys_gnss.img GNSS 镜像。 
logo_a Raw data logo.img Logo 镜像。 
nvram Raw data NONE NVDATA 备份分区。 
boot_para Raw data NONE 存储 DRAM 校验数据。 
dram_para Raw data NONE 存储 DRAM 校验数据。 
yocto_system_a EXT4 system.img rootfs 镜像。 
yocto-userdata EXT4 userdata.ext4 用户数据。 
sgpt Raw data NONE GPT 分区备份。 
 
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
MT8668 Yocto System 
User Manual 
Confidential B 
1.3 Yocto 编译与烧录 
本小节介绍了编译 Yocto 对主机的要求，软件的编译指令与烧录方法，以及 SDK 的编译指令和使用方法。 
 
 Build Server 
表 1-8 列出了编译 MT8668 Yocto5.0 对编译主机的要求。 
 
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
编译 MT8668 Yocto 软件的指令如下所示。首先切换到 codebase 所在的目录，环境变量 TEMPLATECONF 用于指定文
件 bblayers.conf.sample 和 local.conf.sample 所在的路径。source 指令用于初始化 Yocto 编译环境，这条指令会创建
build 目录，将 bblayers.conf.sample 和 local.conf.sample 复制到 build/conf 目录，并重命名为 bblayers.conf 和
local.conf，注意脚本会将当前工作目录切换到 build。最后的 bitbake 指令启动编译。如果需要再次编译，直接执行
最后一条指令即可。如果终端退出重新登录，或使用一个新的终端，所有指令都要执行。  
cd path/to/codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8668/conf/templates/auto8668p1_64_sos 
source meta/poky/oe-init-build-env 
bitbake mtk-core-image-auto8668 
                                                                 
 
5 https://docs.yoctoproject.org/ref-manual/system-requirements.html#supported-linux-distributions  
6 https://docs.yoctoproject.org/ref-manual/system-requirements.html#required-packages-for-the-build-host  
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
MT8668 Yocto System 
User Manual 
Confidential B 
 软件构成 
软件编译完成后，软件在 build/tmp/deploy/images/auto8668p1_64_sos 目录中。表 1-9 列出了主要的镜像文件及其
说明。 
表 1-9. 镜像文件说明 
文件名 分区 说明 
MT6881_Android_scatter.xml N/A 分区表，由 ptgen-v2.bb 编译出来。 
download_agent/DA_BR.bin N/A download agent，用于烧录。由 collect.bb 编译出来。 
bl2.img preloader_a 
preloader_b bootloader，由 lk2.bb 编译出来。 
modem.img modem_a modem 固件，由 modem.bb 编译出来。 
spmfw.img spmfw_a 
System Power Management固件。android prebuilt，由 collect.bb 
安装到机器。 
mcf_ota.img mcf_ota_a android prebuilt，由 collect.bb 安装到机器。 
audio_dsp.img audio_dsp_a audio DSP 固件，android prebuilt，由 collect.bb 安装到机器。 
pi_img.img pi_img_a android prebuilt，由 collect.bb 安装到机器。 
dpm.img dpm_a android prebuilt，由 collect.bb 安装到机器。 
ccu.img ccu_a 
Camera Control Unit 固件，android prebuilt ，由 collect.bb 安装
到机器。 
vcp.img vcp_a vcp firmware，由 tinysys-vcp.bb 编译出来。 
sspm.img sspm_a 
Secure System Power Manager 固件， android prebuilt ，由
collect.bb 安装到机器。 
mcupm.img mcupm_a 
power/performance manager 固 件 ， android prebuilt ，由
collect.bb 安装到机器。 
gpueb.img gpueb_a GPU firmware，由 tinysys-gpueb.bb 编译出来。 
apusys.img apusys_a APU firmware，由 tinysys-apusys.bb 编译出来。 
boot.img boot_a 
Linux kernel，fit 格式，包含 kernel img、dtb 和 initramfs。由
linux-mtk-extension_6.12.bb 编译出来。其中 initramfs 由 core-
image-minimal-initramfs.bb 编译出来。 
tee.img tee_a ATF，android prebuilt，由 collect.bb 安装到机器。 
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
MT8668 Yocto System 
User Manual 
Confidential B 
文件名 分区 说明 
connsys_bt.img connsys_bt_a BT 固件。android prebuilt，由 collect.bb 安装到机器。 
connsys_wifi.img connsys_wifi_a WIFI 固件。android prebuilt，由 collect.bb 安装到机器。 
connsys_gnss.img connsys_gnss_a GNSS 固件，android prebuilt，由 collect.bb 安装到机器。 
logo.img logo_a logo，由 makelogo.bb 编译出来。 
system.img yocto_system_a 根文件系统，由 mtk-core-image-auto8668.bb 编译出来。 
userdata.ext4 yocto-userdata /data 分区，由 mkusrdata.bbclass 编译出来。 
 
 烧录软件 
烧录软件需要用到 Type-C 线和 SP_Flash_Tool 工具。如果没有 SP_Flash_Tool 工具，请访问 Online7网站下载。打开
网页后，搜索 SP_Flash_Tool，下载最新版本，如图 1-3 所示。下载完成后解压下载的压缩包。 
 
 
图 1-3. 下载 SP_Flash_Tool 
 
首先用 Type-C 线将平台与电脑连接起来。然后双击 SP_Flash_Tool_V6/SPFlashToolV6.exe 打开烧录工具。第一步选
择 Download-XML 文件，点击右上角的 choose 按钮，选择软件包下面的 download_agent/flash.xml 文件。第二步在
Download 按钮下方的下拉框中选择 Format All + Download。效果如图 1-4 所示。第三步，确保平台处于断电状态。
第四步，点击 Download 按钮。第五步，按住 download key（KPCOL0，SW907）不松手，平台上电，这时会自动开
始烧录，如图 1-5 所示。此时可以松开按键。 
如果有遇到错误弹窗，请先将平台断电，点击 Stop 按钮退出下载模式。确保平台掉电完毕后，再尝试烧录。  
 
                                                                 
 
7 https://online.mediatek.com/apps/tool/  
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
MT8668 Yocto System 
User Manual 
Confidential B 
 
图 1-4. 加载 flash.xml 
 
 
图 1-5. 软件烧录 
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
MT8668 Yocto System 
User Manual 
Confidential B 
 编译 SDK 
使用如下指令编译 SDK。与编译软件相比，bitbake 指令多了-c populate_sdk 选项。 
cd path/to/codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8668/conf/templates/auto8668p1_64_sos 
source meta/poky/oe-init-build-env 
bitbake mtk-core-image-auto8668 -c populate_sdk 
 
 使用 SDK 
SDK 编译成功后，安装包在 build/tmp/deploy/sdk 目录。对于 MT8668 Yocto5.0 来说，安装包的名字是 poky-glibc-
x86_64-mtk-core-image-auto8668-aarch64-auto8668p1_64_sos-toolchain-5.0.sh。 
安装过程如图 1-6 所示，首先清空环境变量 LD_LIBRARY_PATH，如果不清空会导致 SDK 设置失败。第二步启动安装
脚本，输入 SDK 的安装目录，输入 y 确认安装，等待安装完成。按照安装脚本的提示，执行设置脚本，现在就可
以使用 SDK 安装好的工具链了。 
 
 
图 1-6. 安装 SDK 
 
SDK 安装目录结构如图 1-7 所示，根目录包含环境设置脚本、版本信息等文件。sysroots/aarch64-poky-linux 目录包
含 MT8668 Yocto 编译出来的所有可执行文件、头文件、动态库、静态库等文件，方便第三方在非 Yocto 环境下进
行开发。这个目录下面的 ELF 文件是 aarch64 格式。sysroots/x86_64-pokysdk-linux 目录包含一些本地工具，例如
aarch64 工具链放在 sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux 目录。还有很多其他版本的工具链可
以使用，例如 aarch64-pokymllib32-linux、arm-poky-linux 等。 
 
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
MT8668 Yocto System 
User Manual 
Confidential B 
 
图 1-7. 目录结构 
 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8668 Yocto System 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8668 Yocto System 
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
以 1.4.2 章节介绍的 hello_1.0.bb 为基础，介绍如何开机自动运行某个程序。MT8668 Yocto 使用 systemd 作为 1 号
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8668 Yocto System 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8668 Yocto System 
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
其他树外驱动使用。考虑到 MT8668 的树外驱动比较多，为了避免出现较多的依赖问题，这里给出了一个模板。编
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
 
变量 EXTRA_SYMBOLS 用于指定额外的符号文件，MT8668 Linux Kernel 分为 common 和 device module 两部分，所以
EXTRA_SYMBOLS 默认添加了 device module 的符号文件。如果依赖其他树外驱动的符号，首先将模块名追加到
DEPENDS 变量，然后按照示例，把符号文件的路径追加到 EXTRA_SYMBOLS 变量。 
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
MT8668 Yocto System 
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
DESCRIPTION = "sample out of tree driver" 
LICENSE = "GPL-2.0-only" 
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/GPL-2.0-
only;md5=801f80980d171dd6425610833a22dbe6" 
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
EXTRA_SYMBOLS += "${TMPDIR}/work-shared/${MACHINE}/device-module-build-
artifacts/Module.symvers" 
 
# if you moudle need other out-of-tree module symbol, please append DEPENDS & EXTRA_SYMBOLS. 
below is sample. 
# DEPENDS += "oot-module1 oot-module2" 
# EXTRA_SYMBOLS += "${RECIPE_SYSROOT}${includedir}/oot-module1/Module.symvers" 
# EXTRA_SYMBOLS += "${RECIPE_SYSROOT}${includedir}/oot-module2/Module.symvers" 
 
INSANE_SKIP:${PN} += "already-stripped" 
INSANE_SKIP:${PN} += "installed-vs-shipped" 
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
MT8668 Yocto System 
User Manual 
Confidential B 
 
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
 
 image bb 
image bb 用于生成根文件系统。以 core-image-minimal.bb
13
为例介绍。image bb 必须继承 core-image 类。通过
IMAGE_INSTALL 变量指定根文件系统需要安装的软件包，如果想安装更多的软件包到根文件系统，只需要追加软件
包到 IMAGE_INSTALL 变量即可。MT8668 的 image bb 是 mtk-core-image-auto8668.bb。 
SUMMARY = "A small image just capable of allowing a device to boot." 
 
IMAGE_INSTALL = "packagegroup-core-boot ${CORE_IMAGE_EXTRA_INSTALL}" 
 
IMAGE_LINGUAS = " " 
 
LICENSE = "MIT" 
 
inherit core-image 
 
IMAGE_ROOTFS_SIZE ?= "8192" 
IMAGE_ROOTFS_EXTRA_SPACE:append = "${@bb.utils.contains("DISTRO_FEATURES", "systemd", " + 
4096", "", d)}" 
 
根文件系统镜像的文件格式在<machine>.conf 指定。以 auto8668p1_64.conf 为例，根文件系统镜像的格式是 ext4。 
# auto8668p1_64.conf 
IMAGE_FSTYPES ?= "ext4" 
 
 fog 简介 
fog 是“file or git”的缩写，是一个 MediaTek 扩展的源代码下载协议。fog 是以 git 仓库为单位，将整个仓库抓到
${WORKDIR}。fog://协议会根据一些规则将源代码的下载协议转换为 file://或 git://协议。 
 
                                                                 
 
13 https://git.yoctoproject.org/poky/tree/meta/recipes-core/images/core-image-minimal.bb  
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
MT8668 Yocto System 
User Manual 
Confidential B 
fog 示例如下。首先要继承 fog 类，然后将 fog://协议格式的源代码路径追加到 SRC_URI 变量，name 参数是必须设
置的，用于设置模块的名字。SRC_REV 变量用于指定模块的版本，一般设置为${AUTOREV}。最后设置 S 变量，必
须设置为“${WORKDIR}/git”或 git 目录的子目录，取决于编译入口在哪一个目录。 
inherit fog 
SRC_URI = "fog://src/path;name=module-name" 
SRCREV_module-name = "${AUTOREV}" 
 
S = "${WORKDIR}/git" 
 
fog 支持多个 git 仓库，示例如下。与单个 git 仓库相比，必须指定 destsuffix 参数，用于指定仓库所在的子目录。
SRC_URI 也要设置多个。多了 SRCREV_FORMAT，用于设置 SRCREV 格式。 
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
表 1-11 列出了创建一个 project 需要新建的文件，建议从 auto8668p1_64_hyp 复制，然后修改相关文件。也可以使
用一键创建脚本 meta/meta-mediatek-mt8668/scripts/create_project.sh，按照提示操作即可。 
 
表 1-11. 创建 project 
项目 示例 
machine.conf meta/meta-mediatek-mt8668/conf/machine/auto8668p1_64.conf 
meta/meta-mediatek-mt8668-hyp/conf/machine/auto8668p1_64_sos.conf（hyp 中
auto8668p1_64_sos.conf 会使用到其他两个配置文件） 
meta/meta-mediatek-mt8668-hyp/conf/machine/auto8668p1_64_uos.inc  
templates meta/meta-mediatek-mt8668-hyp/conf/templates/auto8668p1_64_sos/bblayers.conf.sample 
meta/meta-mediatek-mt8668-hyp/conf/templates/auto8668p1_64_sos/local.conf.sample 
sos kernel dts 
evb board dts path: meta/meta-mediatek-mt8668-hyp/recipes-
kernel/linux/files/sos_dts/auto8668p1_64_sos_evb.dts 
demo board dts path: meta/meta-mediatek-mt8668-hyp/recipes-
kernel/linux/files/sos_dts/auto8668p1_64_sos.dts 
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
MT8668 Yocto System 
User Manual 
Confidential B 
项目 示例 
uos kernel dts 
evb board dts path: meta/meta-mediatek-mt8668-hyp/recipes-kernel/linux-
uos/files/dts/auto8668p1_64_uos_evb.dts 
demo board dts path: meta/meta-mediatek-mt8668-hyp/recipes-kernel/linux-
uos/files/dts/auto8668p1_64_uos.dts 
kernel config 1. deconfig: 
src/kernel/linux/v6.12_mt8668/co_device_module/arch/arm64/configs/mgk_64_k612_defconfig 
2.src/kernel/linux/v6.12_mt8668/co_device_module/kernel/configs/userdebug.config (仅仅 build 
userdebug load 生效) 
3.src/kernel/linux/v6.12_mt8668/co_device_module/kernel/configs/eng.config (仅仅 build eng load 生
效) 
4.meta-mediatek-mt8668/recipes-kernel/linux/files/config/auto8668p1_64.config 
5.sos project config:  meta-mediatek-mt8668-hyp/recipes-
kernel/linux/files/sos_config/auto8668p1_64_sos.config 
uos project config:  meta-mediatek-mt8668-hyp/recipes-kernel/linux-
uos/files/config/auto8668p1_64_uos.config 
分区表 src/bsp/ptgen_v2/mt6881/partition_table_emmc_hyp_ab.csv 
ko table sos: meta/meta-mediatek-mt8668-hyp/recipes-kernel/linux/ko_order_table/ko_order_table.csv 
uos: meta/meta-mediatek-mt8668-hyp/recipes-kernel/linux-uos/ko_order_table/ko_order_table.csv 
fstab meta/meta-mediatek-mt8668-hyp/recipes-core/base-files/base-files/auto8668p1_64_sos/fstab 
meta/meta-mediatek-mt8668-hyp/recipes-core/base-files/base-files/auto8668p1_64_uos/fstab 
collect-bins prebuilt/bsp/collect-bins/mt8668 
dws src/devtools/dct/dws/mt6881/auto8668p1_64_sos.dws 
src/devtools/dct/dws/mt6881/auto8668p1_64_uos.dws 
lk2 src/bsp/lk2/project/auto8668p1_64_hyp.mk 
 
 创建 meta layer 
Yocto meta layer 本质上是一个包含 conf/layer.conf 文件的目录，目录名字建议以“meta-”开头，例如 meta-foo、
meta-bar 等等。所以创建 meta layer 首先需要创建 conf/layer.conf 文件。以创建 meta-foo 为例，示例 layer.conf 如
下。BBPATH 将当前 layer 路径添加到 Bitbake 搜索路径中，BBFILES 为指定 bb 文件所在的路径，
BBFILE_COLLECTIONS 为当前 layer 指定一个唯一的标识符，BBFILE_PATTERN 设置 bb 文件的目录前缀，
BBFILE_PRIORITY 设置 bb 文件的优先级，数字越大优先级越高。如果两个 layer 有相同名字的 bb，则使用优先级高
的。LAYERSERIES_COMPAT用于设置 layer 支持的 Yocto 版本。 
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
MT8668 Yocto System 
User Manual 
Confidential B 
# We have a conf and classes directory, add to BBPATH 
BBPATH .= ":${LAYERDIR}" 
 
# We have a recipes-* directories, add to BBFILES 
BBFILES += "${LAYERDIR}/recipes-*/*/*.bb \ 
        ${LAYERDIR}/recipes-*/*/*.bbappend" 
 
BBFILE_COLLECTIONS += "foo" 
BBFILE_PATTERN_foo = "^${LAYERDIR}/" 
BBFILE_PRIORITY_foo = "10" 
 
LAYERSERIES_COMPAT_foo = "scarthgap" 
 
图 1-8 展示了 meta layer 的目录结构。除 conf/layer.conf 文件外，classes 目录用于存放 bbclass，conf/machine 和
conf/templates 目录用于存放 project 相关的文件。“recipes-”开头的目录用于存放 bb 和 bbappend 文件，这些目
录的结构取决于 BBFILES 变量，一般设置为 “${LAYERDIR}/recipes-*/*/*.bb ${LAYERDIR}/recipes-*/*/*.bbappend”。 
 
 
图 1-8. meta layer 目录结构 
 
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
userdebug 
1. Disable debug configs 
(TFA/LK/Preloader/Kernel/TEE/Fwk/APK/….) 
2. Enable debug features (AEE/UART/ADB/…) 
1. Disable debug configs 
(TFA/LK2.0/Kernel/TEE/APP/….) 
1. SQC main test 
2. RD DEV/UT/IT 
test 
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
MT8668 Yocto System 
User Manual 
Confidential B 
Build Mode Android Config Setting Yocto Config Setting Usage 
2. Enable debug features 
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
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8668-hyp/conf/templates/auto8668p1_64_sos 
export TARGET_BUILD_VARIANT=eng 
source meta/poky/oe-init-build-env 
bitbake mtk-core-image-auto8668 
 
 适配 
模块需要对 build mode 进行适配，才能编译出真正的 user、userdebug 或 eng 软件。首先需要定义这三种模式的区
别，然后针对性的修改 bb 文件去适配。这里展示两个例子，介绍如何适配。 
 
以 linux kernel（linux-mtk-extension_6.12.bb）为例，linux kernel 使用 defconfig 进行配置。user 软件只需要使用
project defconfig 文件，userdebug 软件使用 project defconfig 和 userdebug.config 文件，eng 软件使用 project 
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
MT8668 Yocto System 
User Manual 
Confidential B 
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
软件编译完成后，目录结构如图 1-9 所示。与原始的目录结构相比，多了 build、downloads、sstate-cache 目录。
build 目录由变量 TOPDIR 指定，包含编译中间文件、镜像、rpm 包等文件。关于 downloads 目录和 sstate-cache，
请参考 1.6.4 章节。 
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
MT8668 Yocto System 
User Manual 
Confidential B 
 
图 1-9. 编译完成后的目录结构 
 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
MT8668 Yocto System 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 33

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 33 
MT8668 Yocto System 
User Manual 
Confidential B 
# 
# $WORKDIR [2 operations] 
#   set /mt8668/codebase/meta/poky/meta/conf/bitbake.conf:407 
#     "${BASE_WORKDIR}/${MULTIMACH_TARGET_SYS}/${PN}/${PV}" 
#   set /mt8668/codebase/meta/poky/meta/conf/documentation.conf:467 
#     [doc] "The pathname of the working directory in which the OpenEmbedded build system 
builds a recipe. This directory is located within the TMPDIR directory structure and changes 
as different packages are built." 
# pre-expansion value: 
#   "${BASE_WORKDIR}/${MULTIMACH_TARGET_SYS}/${PN}/${PV}" 
WORKDIR="/mt8668/codebase/build/tmp/work/aarch64-poky-linux/systemd/255.4" 
 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 34

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 34 
MT8668 Yocto System 
User Manual 
Confidential B 
1.7 开机流程 
MT8668 Yocto 进入 kernel 后的开机流程如图 1-10 所示。进入 kernel 之后主要由 kenrel、initramfs 和 systemd 等 3
大部分组成。 
 
 
图 1-10. 开机流程 
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
• 初始化 DRAM，以及各种外设。 
• 加载 TF-A 并跳转到 TF-A 做初始化。 
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
MT8668 Yocto System 
User Manual 
Confidential B 
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
 
图 1-11. kernel_init 
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
MT8668 Yocto System 
User Manual 
Confidential B 
 initramfs 
initramfs 是介于 kernel 和 systemd 之间的中间层，主要功能是加载一些基本的内核模块，为切换 rootfs、执行
systemd 做准备。kernel 初始化完成之后，首先运行 initramfs 下的 init 脚本。init 脚本会解析 kernel 启动参数，并
导出为 shell 环境变量。然后调用/init.d 目录下面的初始化脚本。在 MT8668 平台上，/init.d 目录下有 10-kmod、
11-partlabel、12-format、90-rootfs、99-finish 等脚本。 
10-kmod 会加载/etc/modules.list 文件指定的内核模块。/etc/modules.list 是根据 ko table 文件生成的，如果
“Vendor/Ramdisk in Normal(vendor/ramdisk)”列是 ramdisk，则/etc/modules.list 文件会包含此内核模块。关于 ko 
table 格式，请参考 1.2.3.2 章节。/etc/modules.list 应该包含一些基础内核模块，例如 UFS 驱动等。 
11-partlabel 负责解析分区的名字，并在/dev/disk/by-partlabel 下建立软链接。12-format、90-rootfs 等脚本依赖这些
软链接。 
12-format 负责格式化 nvdata、protect1、protect2 等分区。 
90-rootfs 负责挂载 rootfs 分区到/rootfs 目录。rootfs 分区由 kernel 启动参数“root=PARTLABEL=system”指定。 
99-finish 负责在/rootfs 目录挂载 procfs、sysfs、devfs，并将根目录切换到/rootfs。最后启动 systemd。 
 
 systemd 
systemd 是 Linux 系统上的一种系统和服务管理程序。相比于传统的 SysvInit，systemd 提供了并行启动、依赖管
理、按需启动等现代化特性。 
systemd 接管控制权后，首先执行一系列的预初始化任务，如设置默认的环境变量、初 始化日志系统等。然后读取
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
MT8668 Yocto System 
User Manual 
Confidential B 
服务 说明 
prop 属性服务进程。getprop 和 setprop 工具会和此服务交互。 
mdpd_8668 MDP 后台服务进程 
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
用于调试 kernel 内存泄漏，请使用 auto8668p1_64_kasan project。除 kasan 外，还有
kmemleak、asan、valgrand 等调试内存泄漏的工具。 
ftrace 抓取内核的 trace 日志，分析性能问题。 
systemd-analyze 抓取 systemd 服务的启动时间，分析开机时间。 
strace 抓取程序调用的系统调用。 
 
 
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
MT8668 Yocto System 
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
# SRC0141 MT8668_Yocto_Thermal_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Thermal_User_Manual_CN_V1.0.pdf

SHA-256：0072a842cf3ca7534921d0ff027237ab1cd9fac41e6192657f6b49c95fefca5c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0141.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Yocto Thermal 
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
MT8668 Yocto Thermal 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 陈杰 正式版 
 
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
MT8668 Yocto Thermal 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Yocto Thermal 
User Manual 
Confidential B 
1 热管理 
1.1 概述 
设备的热管理有两个主要目标： 
 
• 控制组件温度以避免被热损坏。 
• 控制整个产品的温度以确保人体安全并符合安全规定。设备中的热是由于 IC 高功率累积而来的。高功率跟高
时钟速度、电压和性能有关系。 
 
从热管理的角度，控制温度的方法是控制散热及发热。控制散热可以通过添加各种热管理解决方案，如 TIM、铜
箔、导管等，将热有效地传递（三种热传递方式：热传导、热辐射、热对流）到整个产品和空气或接触面上。控
制发热可以根据温度降低/限制功耗来实现，这是本文档的主要关注点。 
 
1.2 架构/流程概述 
 
图 1-1. Thermal 2.0 软件架构 
 
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
MT8668 Yocto Thermal 
User Manual 
Confidential B 
thermal_core 是一个本地 Linux 应用程序，其主要功能是解析.conf 格式的热管理策略。 
CPU/GPU/APU 会各自根据 thermal_core 设置下来的目标 Tj 和监测到的温度做热管理调节。 
 
1.3 配置/客制指南 
 热管理策略 
策略在 source code 里的路径是src/apps/spm-base/thermal-conf/mt8668，支持加密格式。 
 
表 1-1. 设备上可用的策略（under/data/thermal/） 
Thermal Policy Permanent? Encrypted? Description 
thermal.conf Yes Yes Default thermal policy 
disable_thermal.conf Yes Yes Disable thermal throttling and thermal protection 
disable_thermal_temp.conf No Yes Same as the above, except it needs to re-apply after 
device rebooted 
disable_throttling.conf No Yes Disable thermal throttling 
disable_skin_control.conf No Yes 
Disable MTK skin control close loop (always keep Target 
Tj to 95℃) 
Thermal_policy_XX.conf 
(XX = 00~19 except 00, 02, 
08) 
On demand Yes Can add your own policy setting and switch via power 
HAL 
thermal_policy_08.conf No Yes Thermal policy for benchmark 
 
1.3.1.1 热管理策略命令 
应用一个热管理策略 
adb shell "thermal-int apply [policy_name]" 
e.g., adb shell "thermal-int apply disable_throttling.conf" 
 
1.3.1.2 热管理策略格式 
• Permanent policy 
 
 
 
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
MT8668 Yocto Thermal 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Yocto Thermal 
User Manual 
Confidential B 
 
 
• GPU frequency table mapping 
 
 
1.4 常见问题/故障排除 
打开 thermal_core log: 
adb shell " thermal-int debug_log 1" 
 
How to decrypt or encrypt thermal configuration files: 
https://online.mediatek.com/apps/faq/detail?list=HW&faqid=FAQ27718  
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
MT8668 Yocto Thermal 
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
# SRC0142 MT8668_Yocto_UART_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_UART_User_Manual_CN_V1.0.pdf

SHA-256：e7b728514d1d4e8fad05553b4deb1fc3bd32ae9b264994eb737ab4a0e42b72fd

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0142.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Yocto UART User Manual 
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
MT8668 Yocto UART 
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
MT8668 Yocto UART 
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
1.3 配置/客制化指南 ···················································································································································· 6 
 Linux 构建配置 ············································································································································· 6 
 添加 UART DTS 节点 ····································································································································· 6 
 添加 APDMA DTS 节点 ································································································································· 7 
 添加 GPIO 设定 ············································································································································ 7 
 测试和调试 ·················································································································································· 8 
1.4 常见问题/故障排查 ················································································································································ 8 
 UART 无法输入输出 ····································································································································· 8 
 UART 乱码问题 ············································································································································· 9 
 UART 不打印内核日志 ································································································································· 9 
附件一 附加条款 ····························································································································································· 10 
 
 
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
MT8668 Yocto UART 
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
MT8668 Yocto UART 
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
MT8668 Yocto UART 
User Manual 
Confidential B 
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
MT8668 Yocto UART 
User Manual 
Confidential B 
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
MT8668 Yocto UART 
User Manual 
Confidential B 
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
 
1.4 常见问题/故障排查 
 UART 无法输入输出 
1. 请按照前文的提供的信息，检查 dts 配置是否正确 
2. 请使用 Linux 命令检查 UART 引脚模式是否切换至 UART 模式  
    内核里查看 PIN 的状态，输入以下命令: 
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
MT8668 Yocto UART 
User Manual 
Confidential B 
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
 
device/mediatek/mt6881/init.mt6881.rc mask "write /proc/bootprof 0" 
# write /proc/bootprof 0 
 
 
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
MT8668 Yocto UART 
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
# SRC0143 MT8668_Yocto_USB_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_USB_User_Manual_CN_V1.0.pdf

SHA-256：f71b132e4ab44b81b20e91259057337aa2118e9d8de169121054692154cc2573

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0143.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Yocto USB User Manual 
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
MT8668 Yocto USB 
User Manual 
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
MT8668 Yocto USB 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 USB ············································································································································································ 4 
1.1 概述·········································································································································································· 4 
 基本概述 ······················································································································································ 4 
 缩略词 ·························································································································································· 4 
1.2 USB 硬件架构 ·························································································································································· 5 
1.3 配置/客制化指南 ···················································································································································· 6 
 DTS 配置 ······················································································································································· 6 
 Kernel 配置和 ko 相关信息 ························································································································· 9 
 Host/Device 模式切换流程 ·························································································································· 9 
1.4 常见问题/疑难解答 ·············································································································································· 10 
 USB 相关日志 ············································································································································· 10 
 常见问题以及调试 ···································································································································· 12 
附件一 附加条款 ····························································································································································· 15 
 
图片目录 
图 1-1.USB 架构 ········································································································································································ 5 
图 1-2. mt6881.dts 和 auto8668p1_64.dts 中的 ssusb 节点 ··································································································· 6 
图 1-3. mt6881.dts 中的 USB PHY 节点 ···································································································································· 8 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 4 
表 1-2. USB 相关 kernel config, ko name 以及对应 code path ································································································ 9 
 
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
MT8668 Yocto USB 
User Manual 
Confidential B 
1 USB 
1.1 概述 
 基本概述 
本章节介绍主要 MT8668 USB 模块信息， 以及 USB 常见问题以及分析方法。 
 
 缩略词 
表 1-1. 缩略词 
缩略词 全称 释义 
ADB Android Debug Bridge 
是一个多功能命令行工具，允许用户与 Android 设备进
行通信 
MTU3 MediaTek USB3.0 SSUSB IP 中的 device controller 
PHY Physical Layer USB 的物理层，负责实际的电气和物理信号传输 
SSUSB Super Speed USB 
MediaTeK 设计的 USB IP，支持 USB3.0 的 host/device 双
角色控制器 
USB Universal Serial Bus 通用串行总线 
xHCI eXtensible Host Controller Interface SSUSB IP 中的 host controller 
 
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
MT8668 Yocto USB 
User Manual 
Confidential B 
1.2 USB 硬件架构 
 
图 1-1.USB 架构 
 
• Port0: 最高支持 USB3.2 gen1, 5Gbps, host/device dual role controller 
• Switch: 最高支持 USB2.0 480Mbps,能实现 Hub 与 USB2.0 之间的切换 
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
MT8668 Yocto USB 
User Manual 
Confidential B 
1.3 配置/客制化指南 
 DTS 配置 
1.3.1.1 SSUSB 节点信息 
 
 
图 1-2. mt6881.dts 和 auto8668p1_64.dts 中的 ssusb 节点 
 
 
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
MT8668 Yocto USB 
User Manual 
Confidential B 
ssusb & usb_host DTS node 中各个 property 字段含义： 
• ssusb: USB device controller MTU3 节点 
• phys:USB 使用的 u2/u3 phy 
• dr_mode: USB dual role mode，可以设置为 otg/peripheral/host 
• maximum-speed: device controller 使用的速度，可以设置为 super-speed/high-speed/full-speed 
• usb-role-switch: USB role 切换采用 Linux 标准的 usb-role-switch get/set ops 
• role-switch-default-mode: 配合 usb-role-switch 设置 IP default USB mode，可以设置为 otg/peripheral/host 
• mediatek,clk-mgr: 切换到 USB none/device 时，host driver 会卸载以达到更加省电的目的，否则 host driver 会保
留 
• mediatek,force-vbus: 强制 device controller 认为 VBUS 存在，用于未连接 vbusvalid 引脚的 PCB。 
• usb_host: USB host controller xHCI 节点 
 
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
MT8668 Yocto USB 
User Manual 
Confidential B 
1.3.1.2 USB PHY 节点 
 
 
图 1-3. mt6881.dts 中的 USB PHY 节点 
 
u2phy & u3phy DTS node 中各个 property 字段含义： 
• u2phy: USB2.0 PHY 节点 
• u3phy: USB3.0 PHY 节点 
 
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
MT8668 Yocto USB 
User Manual 
Confidential B 
 Kernel 配置和 ko 相关信息 
表 1-2. USB 相关 kernel config, ko name 以及对应 code path 
Kernel Config ko Name Code Path 
CONFIG_DEVICE_MODULES_USB_MTU3 mtu3.ko co_device_module/drivers/usb/mtu3/ 
CONFIG_DEVICE_MODULES_USB_XHCI_MTK xhci-mtk-hcd-v2.ko co_device_module /drivers/misc/mediatek/usb/usb_xhci/ 
CONFIG_DEVICE_MODULES_PHY_MTK_XSPHY phy-mtk-xsphy.ko co_device_module /drivers/phy/mediatek/ 
 
 Host/Device 模式切换流程 
MT8668 软件支持手动切换和自动切换两种模式。 
1.3.3.1 手动切换 
手动切换是通过 usb-role-switch 创建的 role 节点, 手动写入 CMD 来切换 host/device/none： 
Path: /sys/class/usb_role/11201000.usb0-role-switch/role 
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

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Yocto USB 
User Manual 
Confidential B 
1.4 常见问题/疑难解答 
 USB 相关日志 
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

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Yocto USB 
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

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Yocto USB 
User Manual 
Confidential B 
 常见问题以及调试 
1.4.2.1 adb 不识别调试流程 
1. PC 设备管理器有认到 USB 设备, 但是 adb devices 没有设备显示 
1) 可能是 PC 驱动有问题，可以在设备管理器上手动更新驱动为 Android ADB Interface 
2) 可能是 serial number 没有发送，可以检查下面节点是否有值，如果没有值，说明是序列号没有写入，可以
手动 echo 0123456789ABCDEF 到这个节点， 然后重新插拔 USB 线 
▪ Android: cat /config/usb_gadget/g1/strings/0x409/serialnumber 
▪ Yocto: cat /sys/kernel/config/usb_gadget/g1/strings/0x409/serialnumber 
 
2. PC 设备管理器没有 USB 设备连接 
1) 确认当前 USB role 是否有切到 device mode 
cat /sys/class/usb_role/12001000.usb0-role-switch/role 
得到回显应该是 device，如果是 host/none，说明没有切换到 device mode，可以重新插拔 usb 线， 或者手动
echo device 到这个节点来切换。 
 
2) 检查 USB configfs 配置是否有 ffs.adb 
▪ Android: ls -al /config/usb_gadget/g1/configs/b.1/  
▪ Yocto: ls -al /sys/kernel/config/usb_gadget/g1/configs/c.1/ 
 
3) 检查 adbd 是否正常启动 
▪ Android: ps -a | grep adbd 
▪ Yocto: ps -e | grep adbd 
 
4) 检查 PC adb service 版本是否过旧 
▪ adb –version 看下当前 adb 版本，建议使用 1.0.39 以上 
▪ adb kill-server 后再次尝试 
 
1.4.2.2 Host 无法识别 Device 
1. 确认 USB 是否有切换到 host mode 
cat /sys/class/usb_role/12001000.usb0-role-switch/role  
得到回显应该是 host，如果是 device/none，说明没有切换到 host mode，可以重新插拔 OTG 线，或者手动 echo 
host 到这个节点来切换。 
2. 确认 xHCI driver 是否有成功挂载 
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
MT8668 Yocto USB 
User Manual 
Confidential B 
1) 按照 1.4.1.1 小节确认是否有 xHCI probe log 
2) 是否有新设备接入的 log， 例如： 
usb 1-1 new high-speed USB device number 2 using xhci-mtk … 
3. 确认 USB device 是否有绑定到 driver 
cat /sys/kernel/debug/usb/devices 
 
T:  Bus=01 Lev=00 Prnt=00 Port=00 Cnt=00 Dev#=  1 Spd=480  MxCh= 1 
B:  Alloc=  0/800 us ( 0%), #Int=  0, #Iso=  0 
D:  Ver= 2.00 Cls=09(hub  ) Sub=00 Prot=01 MxPS=64 #Cfgs=  1 
P:  Vendor=1d6b ProdID=0002 Rev= 6.06 
S:  Manufacturer=Linux 6.6.12 xhci-hcd 
S:  Product=xHCI Host Controller 
S:  SerialNumber=16710000.xhci1 
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
I:* If#= 0 Alt= 0 #EPs= 2 Cls=08(stor.) Sub=06 Prot=50 Driver=usb-storage // driver = usb-
storage, 说明是 U 盘设备 
E:  Ad=81(I) Atr=02(Bulk) MxPS= 512 Ivl=0ms 
E:  Ad=02(O) Atr=02(Bulk) MxPS= 512 Ivl=31875us 
 
如果有遇到 Driver=none 的这种情况，说明设备正常识别，但是没有找到对应的 class driver。可能是这种设备需要
开启特别的 kernel config，可以网上搜索如何开启，或者询问 MediaTeK。 
4. 确认其他因素 
1) USB VBUS 是否正常开启，可以量测 port 口是否有 5V VBUS 
2) 这个设备在其他平台，PC 上是否可以正常识别，避免是设备损坏导致不识别的问题 
3) 信号质量不佳的设备，可以通过加 USB hub 转接的方式来测试是否可以连接 
 
1.4.2.3 眼图测试相关 
1. USB host 眼图测试节点和命令 
支持的 CMD 如下： 
1) Test packet: 测试眼图 
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
MT8668 Yocto USB 
User Manual 
Confidential B 
2) Test J: 测试 test j 
3) Test K: 测试 test k 
4) Test SE0 NAK: 测试 SE0 NAK 
2. 注意事项 
1) 测试前，请确保 USB 已经切换到 host mode 
2) Test packet 只能由 roothub port 打出，外接 hub 无法转发。 请联系 hub 厂商咨询如何测试 hub downstream 
port 眼图 
3) 输入 test 命令后，xHCI ip 将进入 test mode，此时插拔 U 盘等设备是无法识别的，无需担心，将平台重启
后，USB host 功能仍然可以使用 
 
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
MT8668 Yocto USB 
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
# SRC0144 8676 8678 debug SOP.pdf

来源：8676 8678 debug SOP.pdf

SHA-256：b7fe25046564728d772d10ed8484e7b78fa40cb16c3decc4811e7bb96d846d3c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0144.html)

## PDF物理页 1

MTK 8676 / 78 debug SOP
深圳市掌锐电子有限公司

## PDF物理页 2

目录
Display：黑屏问题调试SOP01
Audio：audio 问题使用场景和方法02
BT：Firmware log使用场景和方法03
Video：播放黑屏场景debug方法04
WIFI：WIFI详细日志打开方法05
Camera：DVR水印刷新异常处理06
Tbox:log & tcpdump使用场景和方法07
深圳市掌锐电子有限公司

## PDF物理页 3

Display
深圳市掌锐电子有限公司

## PDF物理页 4

屏幕问题调试SOP
该方法主要用于定位屏幕显示问题
 1、同版本对比机比较                          2、录屏或PC投屏查看。                                 3、disable hwc 叠图        
6、disable mml PQ查看                              5, hwc dump查看                                            4, BQ dump查看。   
                                                                                          
    
同版本app,同Android版
本code看对比机是否复
现
如果复现请联系APP 
vendor
执行：adb shell service call 
SurfaceFlinger 1008 i32 1
操作后不复现则是hwcomposer问
题。仍有异常则可能是上层AP送
图、GPU绘制等问题，可执行BQ 
dump分析
若录屏是正常的，则可能下层
Hwcomposer 或 Display driver问题，
可执行disable hwc双重确认
若录屏也有问题，比较可能是上层
AP送图、GPU绘制问题，可执行
BQ dump
BQ dump 是dump 所有给
surfaceflinger 前BufferQueue中的数
据，执行BQ dump 脚本
BQ dump 若异常则APP 出图已异常，
BQ dump 正常但录屏和最终显示异常
可联系SurfaceFlinger owner 分析
Hwc dump是dump送到DISP的图
层数据， 通过hwc dump可以查
看到送到最终显示的图层数据是
否有异常。 如果查看到送入
DISP的图层数据有异常的话，可
由mml dump查看mml解码是否有
异常。 反之， 刚查对应的显示驱
动
执行： echo 1 > 
/sys/module/mtk_mml/paramet
ers/mml_pq_disable如果界面
恢复的话， 那确认当前问题与
mml pq有关。反之继续分析
mml的其它部分。
深圳市掌锐电子有限公司

## PDF物理页 5

BQ Dump使用场景和方法
该方法主要用于定位屏幕显示问题：
（1）闪屏问题：闪屏通常是两帧画面之间的颜色或亮度变化较大，视觉上参数闪烁的感觉
（2）花屏问题：花屏通常是整屏显示雪花状态，或部分区域显示雪花，或闪现异常条纹
 1、脚本环境准备                          2、执行脚本，复现问题                     3、根据步骤2生成的截图，看是否抓到问题
                                                                                                                (1)如果抓到，提供dump文件给研发
                                                                                          (2)如果没有抓到，做如下设置，再执行步骤2
    
深圳市掌锐电子有限公司

## PDF物理页 6

HWC Dump使用场景和方法
该方法主要用于定位屏幕显示问题，定位传递给HWC的图层数据是否正确：
（1）黑屏问题：局部黑屏或其它显示异常的问题， 用于辨识传入HWC的数据是否正确。
（2）花屏问题：花屏通常是整屏显示雪花状态，或部分区域显示雪花，或闪现异常条纹
 1、脚本环境准备                        2、执行脚本，复现问题                     3、根据步骤2生成的截图，看是否抓到问题
                                                                                                                (1) 提供SF_dump目录下的数据以及sf_dumpsys文件用于分析
                                                                                            
1，开机先执行0_setup.bat
2，复现问题后再执行1_dump.bat
另外， 为了更好的分析HWC的问题， 可以将HWC的LOG等级调整到V。 指令如下：   
adb shell setenforce 0 &&adb shell setprop persist.vendor.debug.hwc.log V&& adb shell setprop vendor.debug.hwc.skip_log 0 
深圳市掌锐电子有限公司

## PDF物理页 7

MML Dump使用场景和方法
该方法主要用于定位屏幕显示异常的问题
 1、脚本环境准备                                  2、dump输入/输出帧                                          3、提交dump的数据及log
                                                                                                                  
adb root && adb 
remount && adb shell 
setenforce 0
adb shell setprop 
persist.vendor.debug.hw
c.log V && adb shell 
setprop 
vendor.debug.hwc.skip_
log 0 && adb shell 
dumpsys SurfaceFlinger 
> sf.txt
Dump输入数据：
adb shell "echo 1 > 
/sys/module/mtk_mml/parameters/m
ml_frame_dump"
adb pull /sys/kernel/debug/mml/mml-
frame-dump-in frame_dump_in.bin
Dump输出数据：
adb shell "echo 2 > 
/sys/module/mtk_mml/parameters/m
ml_frame_dump"
adb pull /sys/kernel/debug/mml/mml-
frame-dump-out frame_dump_out.bin
1，记住对应的机子时间， 
2， 导出MTKLOG，
3， 将前面dump出来的数
据，以及导出的mtklog以
及操作时间一并提交给分
析者分析。
深圳市掌锐电子有限公司

## PDF物理页 8

Audio
深圳市掌锐电子有限公司

## PDF物理页 9

audio 问题使用场景和方法
该方法主要用于定位屏幕显示问题：
（1）无声问题：当系统在正常的音频播放或是蓝牙通话场景，音量正常，没有静音操作 出现无声等现象时
（2）杂音问题：正常播放音频出现莫名异响杂音现象
 1、脚本环境准备                          2、执行脚本，复现问题                     3、执行完步骤2后查看脚本所在目录是否生成
                                                                                                                     文件和文件夹
                                                                                                               
                                                                                               将文件夹压缩和日常测试文件log包
                                                                                                       一并提供研发以供分析
1.问题复现前执行
before脚本
2.复现问题
3.复现问题后执行
after脚本
深圳市掌锐电子有限公司

## PDF物理页 10

BT
深圳市掌锐电子有限公司

## PDF物理页 11

BT Firmware log使用场景和抓取方法
该log主要用于定位蓝牙底层固件问题，关键字如fw_assert，常见场景如下：
（1）连接问题：当设备连接断线或者连接异常超时场景下，分析异常或者耗时情况时，指向固件执行报错
（2）NE问题：当NE或KE报错指向固件报错时
（3）蓝牙电话声音异常：通过audio dump，音频传输链路上指向固件传输过来的数据本身有异常，也能通过FW log体现出来
 1、打开开关，复现问题                                             2、在机器的如下路径确认是否有抓到log：
                                                                                                           会以BT_FW_时间戳.clog的形式抓出来
                                                                                             
（1） 打开 mtklogger 工具
（2） 点击 ConnsysLog
（3） 点击右上角的菜单
（4）进入 ConnsysLog Settings 
界面
（5） 将 BT Firmware Log Level 
改为 Debug。
3、在导出到U盘的目录路径如下：
深圳市掌锐电子有限公司

## PDF物理页 12

Video
深圳市掌锐电子有限公司

## PDF物理页 13

播放黑屏场景debug方法
该方法主要用于定位视频播放黑屏显示问题：视频播放图像黑屏，像爱奇艺，优酷，或本地播放等，进度条和声音正常，但是图
像全黑无画面。
 
一 、复现到黑屏问题后：
1、dump SurfaceFlinger 信息，确认显示图层信息
adb  shell dumpsys SurfaceFlinger > sf_dumpsys
2、MML frame dump 确认显示的 图片是否有异常
// dump input  1 frame
adb shell "echo 1 > 
/sys/module/mtk_mml/parameters/mml_frame_dum
p"
adb pull /sys/kernel/debug/mml/mml-frame-dump-
in frame_dump_in.bin
// dump output 1 frame
adb shell "echo 2 > 
/sys/module/mtk_mml/parameters/mml_frame_dum
p"
adb pull /sys/kernel/debug/mml/mml-frame-dump-
out frame_dump_out.bin
二 、如果能退出播放在进入还能复制，打开下面的命令 重新复
制
1、切换到 GPU 显示 对比效果
adb shell service call SurfaceFlinger 1008 i32 1
2、打开video C2hal的 cmd信息
adb shell "setprop vendor.mtk.c2.enable.comp.log 1"
adb shell "setprop vendor.mtk.c2.enable.vdec.log 3"
adb shell "setprop vendor.mtk.c2.enable.vcodec.log 4"
3、抓取系统的trace信息
adb shell perfetto -o /data/misc/perfetto-traces/trace -s 
1024mb -t 120s sched freq idle video am wm gfx view hal 
binder_driver binder workq irq sync mml
adb pull /data/misc/perfetto-traces/trace 
4、 mml pq 关闭脚本见附件 PQ_VP_OFF看是否可以恢复正常
5、在问题复现场景下，dump 解码前后视频流
adb shell setprop vendor.mtk.c2.vdec.dump.input 1
adb shell setprop vendor.mtk.c2.vdec.dump.output 1
dump几秒钟 即可，再执行上述命令input 0和output 0 关闭dump
adb pull  /data/vendor/vcodec  给到研发
PQ_VP_OFF_for_T 1.bat
深圳市掌锐电子有限公司

## PDF物理页 14

WiFi
深圳市掌锐电子有限公司

## PDF物理页 15

WIFI详细日志打开方法
（1）普通问题，需要wifi详细日志的，需要再复现WIFI问题前，先按照下面方法修改日志等级：
        adb shell cmd wifi set-verbose-logging enabled
（2）wifi驱动或者固件问题需要固件日志，按照下面方法依次打开：
       日志会存储到板子： /data/debuglogger/       取出：adb pull  /data/debuglogger ./
深圳市掌锐电子有限公司

## PDF物理页 16

Camera
深圳市掌锐电子有限公司

## PDF物理页 17

DVR水印刷新异常处理
该方法主要用于打开DVR水印刷新log
（1）水印问题：DVR上水印不刷新或者刷新异常或者水印刷新花屏等问题
 1、打开DVR水印log等级       
 
2、在1的基础上复现问题，并提供当时的测试视频跟循环视频，mtklog。                    
adb root
adb remount
adb shell setprop persist.mtk.dvr.log 5
adb shell setprop mtk.recorder.log 5
adb shell setprop persist.debug.wm.loglevel 4
1）adb shell ps | findstr camerserver,adb shell ps | findstr smart ---》 查看进程号
2）adb shell kill -9 $(pidof camerserver) ---》kill camerserver
3）adb shell kill -9 $(pidof smartplatformserver) ----》 smartplatformserver
4)  kill 完使用1）命令再查看进程号有无变化
深圳市掌锐电子有限公司

## PDF物理页 18

Tbox modem
深圳市掌锐电子有限公司

## PDF物理页 19

Modem Log & tcpdump使用场景和方法
该方法主要用于抓取modem相关问题的log：
（1）无法注册网络：在机器经过校准，并且外接天线的情况下还是显示无信号
（2）网络无法使用：在机器经过校准，并且外接天线，有4G信号的情况下，无法使用网络。
 1、环境准备                          2、复现问题                     3、抓取对应的log
 1）USB切换到TBOX                           1）打开tcpdump 1）复现问题后，在tbox adb里输入
adb -d forward tcp:7667 tcp:6667          tcpdump -i any -w /data/data.pcap               emdlogger_ctrl 7 
adb -d connect 127.0.0.1:7667              之后复现问题                                               该命令用于关闭modem log，之后再导出log
adb -s 127.0.0.1:7667 shell   log位于/mnt/sdcard/log/debuglogger
 2）开启modem log  注意：在测试完成之后需要关闭modem log，否则会影响STR
在tbox adb里输入   tcpdump位于 /data/data.pcap
emdlogger_ctrl 6 adb -s 127.0.0.1:7667 pull /mnt/sdcard/log/debuglogger
重启机器 adb -s 127.0.0.1:7667 pull /data/data.pcap
请将抓取的以上log和常规的tbox log一起提供
深圳市掌锐电子有限公司


---
# SRC0145 MT8676_Android_AEE_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_AEE_User_Manual_V1.0.pdf

SHA-256：0d324bedb45f25a9b81defa68e8470f5038fc80be45700fc5475db12cee9f715

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0145.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-11-04
MT8676 Android AEE 
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
MT8676 Android AEE 
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
MT8676 Android AEE 
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
 开启 AEE 机制 ·············································································································································· 7 
 设置 AEE Mode ············································································································································· 7 
 设定 AEE DB 文件个数 ································································································································· 7 
 切换 Native 异常处理流程 ·························································································································· 8 
 AEE 用户测试方法 ······································································································································· 8 
 DB 文件使用 ···························································································································································· 9 
 导出 DB 文件 ················································································································································ 9 
 下载 GAT 工具 ·············································································································································· 9 
 解压 DB 文件 ················································································································································ 9 
 解析 DB 文件 ·············································································································································· 10 
附件一 附加条款 ····························································································································································· 11 
 
图片目录 
图 1-1. MediatekOnline 中下载 GAT ········································································································································· 9 
图 1-2. MediatekDBView 工具界面 ··········································································································································· 9 
图 1-3. 解析 DB ········································································································································································ 10 
图 1-4. 启动 GDB ····································································································································································· 10 
 
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
MT8676 Android AEE 
User Manual 
Confidential B 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 5 
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
MT8676 Android AEE 
User Manual 
Confidential B 
1 AEE 
 概述 
 简单介绍 
Advanced Exception Engine (AEE) 是 MediaTek 的一款调试工具。它在设备开机时启动，并在运行过程中持续监听设
备状态。当设备发生异常时，AEE 会生成一个包含异常现场日志信息的 DB 压缩文件，以供调试使用。 
 
本文件概述了 MediaTek Android AEE 的配置和使用方法。 
 
 适用范围 
此文件适用于 MediaTek Android 系统平台。 
 
 缩略词 
表 1-1. 缩略词 
缩略词 全称及释义 
AEE Advanced Exception Engine  
EE External Exception  
HW Reboot  Hardware Reboot Exception  
HWT  Hardware Watchdog Timeout  
KE Kernel Driver Exception  
NE Native Process Exception  
 
 AEE 介绍 
 DB 文件类型 
不同的 AEE DB 文件类型见表 1-2，按异常代码所属 Layer 进行划分，可以归类为 Java layer, Native layer 和 Kernel 
layer。 
 
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
MT8676 Android AEE 
User Manual 
Confidential B 
表 1-2. DB 文件类型 
Layer Type Level When DB is Generated?  
 
Java 
JE system server  =>  FATAL 
Other JE => EXCEPTION Java 层应用程序异常 
ANR Exception 应用程序无响应 
SWT Fatal 触发system server看门狗 
 
Native 
NE netd/surfaceflinger =>  FATAL 
Other NE => EXCEPTION 
Native 进程收到异常信号 
(SIGILL/SIGABRT/SIGBUS/SIGFPE/SIGSEGV) 
System API dump Exception 用户空间进程主动调用AEE 接口 
 
 
Kernel  
KE 
 
Fatal 
Kernel 层发生panic/oops 异常 
HWT CPU 卡死触发看门狗重启 
HW Reboot 设备触发硬件看门狗重启 
Kernel API dump Exception Kernel驱动程序主动调用AEE接口 
External EE Exception 外部子系统异常，驱动程序主动调用AEE接口 
 
 DB 文件名称及路径 
异常发生后，AEE 生成的 DB 文件将保存在/data/aee_exp 目录下，DB 文件后缀为.dbg。 
e.g. 
--db.00.SystemAPI  
--db.00.SystemAPI.dbg : dbg 文件是一个压缩文件，需要使用联发科 GAT 工具解析。  
--ZZ_INTERNAL : 明文文件，简单描述 DB 文件捕捉到的异常信息。 
--db.01.NE  
--db.01.NE.dbg  
--ZZ_INTERNAL 
 
 AEE 配置 
AEE 配置文件源码路径: 
vendor/mediatek/proprietary/external/aee/config_external/init.aee.customer.system.rc 
vendor/mediatek/proprietary/external/aee/config_external/init.aee.customer.vendor.rc 
 
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
MT8676 Android AEE 
User Manual 
Confidential B 
 开启 AEE 机制 
默认情况下，AEE 机制在客户版本中是关闭的。如果客户需要开启 AEE 机制，请在如下列出的 makefile 中 
将 MTK_LOG_CUSTOMER_SUPPORT 设置为 yes： 
device/mediateksample/<project>/ProjectConfig.mk 
device/mediatek/vendor/<project>/VendorConfig.mk  
device/mediatek/system/<project>/SystemConfig.mk 
 
 设置 AEE Mode 
默认情况下，customer eng load 的 AEE mode 是 3，user/userdebug load 的 AEE mode 是 4，也就意味着 AEE mode=3
时，可以抓取 fatal/normal exception DB，AEE mode=4 时只能抓取 fatal exception DB。 
如果 customer load 属于 user/userdebug load，需要切换为 AEE mode=3 才能抓取 normal exception DB。若不修改 rc
文件，是无法通过 adb command 切换 AEE mode 的。 
[如何修改 rc 文件] 
在vendor/mediatek/proprietary/external/aee/config_external/init.aee.customer.vendor.rc 中，设
定ro.vendor.aee.enforcing 为 “no”。在 rc 文件中添加如下内容: 
 
``` 
on init 
    setprop ro.vendor.aee.enforcing no 
``` 
 
[如何通过指令切换 AEE mode] 
adb shell aee_v2 -m <mode_num> 
e.g. 
adb shell aee_v2 -m 3     ---  切换 AEE mode 为 3 
adb shell aee_v2 -m 4     ---  切换 AEE mode 为 4 
 
 设定 AEE DB 文件个数 
根据表 1-2 中描述的 DB 类型，DB 级别包括 Fatal 和 Normal 级别。 
Fatal 级别的 DB 文件默认最大个数为 8，Normal 级别 DB 文件默认最大个数也为 8。 
用户可以修改 rc 文件指定 DB 文件的最大个数： 
在vendor/mediatek/proprietary/external/aee/config_external/init.aee.customer.vendor.rc 中设定
相关属性。 
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
MT8676 Android AEE 
User Manual 
Confidential B 
e.g. 
on init  
    setprop persist.vendor.aee.db.count 15 
    setprop persist.vendor.aee.fatal_db.count 15 
    setprop persist.vendor.aeev.db.count 15 
    setprop persist.vendor.aeev.fatal_db.count 15 
 
 
 切换 Native 异常处理流程 
联发科平台系统针对 Native 层异常有两种不同的处理流程。 
MTK direct-coredump Native 异常处理流程:  
当 Native 层发生异常时，通过 kernel 启动 aee_core_forwarder 进程收集 coredump 文件并通知 AED 守护进程生成
NE DB 文件，其中包含 process_coredump。但对应的 Google 原生 debuggerd 机制会被关闭。 
 
Google crash_dump/tombstone Native 异常处理流程: 
如果用户习惯使用原生 tombstone 机制分析异常问题，可以通过修改 rc 文件切换至 crash_dump 流程：
vendor/mediatek/proprietary/external/aee/config_external/init.aee.customer.system.rc 
on property:persist.vendor.aeev.core.direct=enable 
    setprop debug.debuggerd.disable 0 
 
 AEE 用户测试方法 
Java layer(JE): 
am crash $(pidof com.android.settings | awk '{print $1}' ) 
 
Native layer(NE): 
kill -11 $(pidof netd | awk '{print $1}') 
 
Kernel layer(KE): 
echo c > /proc/sysrq-trigger 
 
External Module(EE): 
cat /proc/aed/generate-ee  (需要开启 CONFIG_MTK_AEE_UT kernel config) 
 
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
MT8676 Android AEE 
User Manual 
Confidential B 
 DB 文件使用 
 导出 DB 文件 
在 Android 系统中，按照 system 和 vendor 的划分，DB 文件会保存在/data/aee_exp 或者
/data/vendor/aee_exp 目录下。 
System 异常类型 DB 文件 (JE/NE/SWT/SystemAPI) 保存在/data/aee_exp。 
Vendor 异常类型 DB 文件 (KE/HWT/HWR/KernelAPI/EE) 保存在/data/vendor/aee_exp。 
 
 下载 GAT 工具 
如图 1-1 所示，请登录 MediatekOnline 网站，在 Tool 界面栏中搜索 GAT 下载最新版本 GAT 工具。 
 
图 1-1. MediatekOnline 中下载 GAT 
 
 解压 DB 文件 
请打开 GAT 工具中的 MediatekDBViewer 工具，如果 PC 环境为 Windows 操作系统，请执行： 
GAT(Official)_ALPS\GAT_exe_v4.2034.3\gat-win32-x86_64-4.2034.3.c\gat-win32-x86_64-
4\tools\MediatekDBViewer.bat。 
 
图 1-2. MediatekDBView 工具界面 
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
MT8676 Android AEE 
User Manual 
Confidential B 
点击“Select DB File”选项，如图 1-2 所示，选择想要解析的 DB 文件(*.dbg)并点击“start”开始解压，解压后的所
有文件将会在界面左侧列出。其中__exp_main.txt 文件记录基本的异常信息。 
 
 解析 DB 文件 
1. NE/KE/HWT 问题:  
方法 1:  
点击 “Set Symbols path” 指定 symbol 路径，并点击 “Analyze” (如图 1-3 所示)，生成的 out.json 文件会展现
详细的分析内容，包括 calltrace 信息。 
 
图 1-3. 解析 DB 
 
方法 2:  
点击 “Set Symbols path” 指定 symbol 路径，然后点击“Launch GDB” (如图 1-4 所示)，将会显示 GDB 调试界
面，在该界面下可以下达 GDB bt 指令以获取 calltrace 信息。 
 
图 1-4. 启动 GDB 
 
2. HW_Reboot 问题:  
HW_Reboot 问题无 coredump 文件可以分析，需要依赖其他文件信息（SYS_LAST_CPU_BUS/DFD）。 
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
MT8676 Android AEE 
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
# SRC0146 MT8676_Android_AI_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_AI_User_Manual_V1.0.pdf

SHA-256：369a167bab945805277e9e0d6e18ebbea48c20b4ec55f29642d9914df87e1c5b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0146.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-09-19
MT8676 Android AI User Manual 
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
MT8676 Android AI 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-09-19 王茂雷 正式版 
 
  
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
MT8676 Android AI 
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
图 1-1. AI 架构 ··········································································································································································· 5 
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
MT8676 Android AI 
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
MT8676 Android AI 
User Manual 
Confidential B 
 
图 1-1. AI 架构 
 
目前 MT8676 软件栈如图 1-1 所示，主要包括如下层： 
 
• CV/NN 应用层：这一层包含用户编写的用于运行 AI 应用的代码。该层还包括 MediaTek 解释器，它是一个经过 
MediaTek-NPU 优化的 Android TensorFlow Lite 解释器；以及 TFLite Shim API，这是一个基于 MediaTek 解释器之
上的包装层，旨在简化 API 调用。 
• NN 运行时层：这一层包含提供神经网络加速的运行时库，包括 NNAPI 和 MediaTek 神经元编译器/运行时。 
• Middleware 层：该层允许对 MediaTek AI 计算核心进行动态控制，并在此提供用于神经网络工作负载的服务质
量控制。 
• 驱动层：该层为专用的 MediaTek AI 计算核心提供驱动程序。 
 
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
MT8676 Android AI 
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
Enable NNAPI AOSP log       ：adb shell "setprop debug.nn.vlog 1" 
Enable TFlite log                    ：adb shell setprop debug.mtk_tflite.vlog true 
Enable Execution plan           ：adb shell setprop debug.neuron.runtime.ShowExecPlan true 
Enable ShowQoSInfo             ： adb shell setprop debug.neuron.runtime.ShowQoSInfo true 
Enable Kernel Log    :   adb shell "echo 15 > /sys/class/misc/apusys/log/klog" 
Enable uPLog                          ： adb shell "echo 5 > /proc/apusys_logger/log" 
Enable User Log                      ： adb shell setprop debug.apusys.loglevel 15 
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
MT8676 Android AI 
User Manual 
Confidential B 
Enable apusys_rv_xfile          ： adb pull /proc/apusys_rv/apusys_rv_xfile (用于解码 apusys_log) 
 
将这些需要的开关打开之后再重启 service 使其生效： 
 
• adb shell stop neuralnetworks_hal_service_mtk_neuron 
• adb shell start neuralnetworks_hal_service_mtk_neuron 
 
 APU Trace 工具抓取 Trace 
 使用 Trace Tool 获取路径 
APU Systrace 是用于分析和调试 MediaTek 平台上 AI Processing Unit (APU) 基本运算单元（如 EDMA、MDLA、
MVPU）运行状态的工具，可以帮助开发者快速分析运行在 APU 上的模型算法的性能和调试问题。 
如何获取 APU trace tool：进入 https://neuropilot.mediatek.com/  -> Software Development -> 登陆账号 -> 在
“NeuroPilot SDK & Document”下选择目标 NeuroPilot {version} -> Latest Version NeuroPilot Online Doc –> Downloads –> 
APU Systrace Tool 下载。 
 
 APU Trace Tool 使用 
如何进行 APU trace 录制：依次执行 02-trace_start_all.bat –> 运行测试程序 –> 02-trace_stop.bat。其中： 
• 02-trace_start_all.bat    - start to record trace 
• 02-trace_stop.bat           - stop trace and pull trace files 
         下面两个脚本运行是可选的，如果有开启，最后生成的 system.trace 中会有 apu middleware 和 neuron trace。 
• 08-mdw_trace_enable.bat  - To get tracing information from apu middleware. 
• 08-neuron_rt_trace_enable.bat   - To get tracing information from neuron runtime. 
          最后会生成三个文件，根据需要选择查看。请使用 https://ui.perfetto.dev/ 打开 trace.) 
• apusys.trace - apusys trace only 
• system.trace - system trace only 
• combine.trace - apusys + system trace 
 
 APU Trace 分析示例 
通常使用 MediaTek APU Systrace 抓出并解析得到的 trace 文件有以下三个： 
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
MT8676 Android AI 
User Manual 
Confidential B 
• apusys.trace（仅包含 APU 运行期间各个 Device，如 MDLA/MVPU 上 Tasks 的状况和 APU Frequency, DRAM 
access, TCM access 等信息） 
• system.trace（普通 System trace only，包含 CPU 信息和系统中其他 process/threads 信息） 
• combine.trace（apusys + system trace） 
 
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
MT8676 Android AI 
User Manual 
Confidential B 
 
图 1-5. APU 频率状态 
 
 特定 MediaTek 平台 NPU 支持的算子信息 
 
图 1-6. 支持的算子的集合关系  
 
如图 1-6 所示，MediaTek 平台 NPU 支持的算子，集合由小到大分为 3 个层面: 
 
• Pytorch/TensorFlow Ops -> TFLite Ops: 通过使用 mtk_converter tool 将原本的.pt 或 .pb 模型中的 Ops 转为 TFLite 
Ops。这步映射过程会进行初步的 Ops 过滤，挡住平台 NPU (HW) 不支持的 Ops。 关于哪些 Pytorch/TensorFlow 
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
MT8676 Android AI 
User Manual 
Confidential B 
• TFLite Ops -> NPU HW (MDLA/MVPU) Operations: 通过使用 neuronsdk 中的 ncc-tflite (compiler) 将转出的 TFLite 模
型编译为 dla 文件。这步映射过程中会参考 NPU HW (MDLA/MVPU) Operations Guidelines 中的 Specification 
(Restrictions) 来检查 TFLite 中每个 Op 的详细参数。 关于哪些 TFLite Ops 可以被 ncc-tflite 工具识别并编译为 dla
文件，可以参考：Supported Operations。 
• NPU HW (MDLA/MVPU) Operations: 真正可以运行在 NPU (MDLA 或 MVPU) 上的 Ops。 
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
MT8676 Android AI 
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

