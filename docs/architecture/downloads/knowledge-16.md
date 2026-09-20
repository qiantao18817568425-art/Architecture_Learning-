# SRC0171 MT8676_Android_System_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_System_User_Manual_V1.0.pdf

SHA-256：6bd2fa3feaf49817d226b303ca661335275bc566cff3de8787cc559dbbad5bcd

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0171.html)

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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 张超 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 System ········································································································································································· 5 
1.1 Build 系统································································································································································ 5 
 Build 环境 ··················································································································································· 5 
 Sync 代码 ···················································································································································· 5 
 Build 命令 ··················································································································································· 6 
1.2 系统概述 ································································································································································· 6 
 简单介绍 ···················································································································································· 6 
 名词解释 ···················································································································································· 7 
1.3 架构/流程概述 ······················································································································································· 7 
 MT8676 Android 软件叠层 ························································································································ 7 
 Bootup ························································································································································ 8 
 Shutdown ·················································································································································· 14 
 Android Bootup 日志分析 ························································································································ 15 
1.4 配置/客制化指南 ················································································································································· 19 
 系统相关配置 ·········································································································································· 19 
1.5 常见问题/故障排除 ············································································································································· 22 
 系统问题需要提供的日志 ······················································································································ 22 
 MT8676 平台 DB 分析指引 ····················································································································· 22 
 Memory Leak 问题处理方法 ··················································································································· 32 
 WDT  简单介绍 ········································································································································ 33 
 性能模式 ·················································································································································· 34 
 CPU 插拔 ·················································································································································· 35 
 如何抓取 systrace ···································································································································· 36 
 系统常见问题相关参考 ·························································································································· 36 
附件一 附加条款 ····························································································································································· 37 
 
 
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
图片目录 
图 1-1. MT8676 Android 软件叠层 ··········································································································································· 7 
图 1-2. Bootup 架构 ··································································································································································· 8 
图 1-3. Boot Rom 主要工作 ······················································································································································· 9 
图 1-4. Bootloader 主要工作 ·················································································································································· 10 
图 1-5. Kernel C 阶段主要工作 ··············································································································································· 12 
图 1-6. MT8676 shutdown 流程 ·············································································································································· 14 
图 1-7. DB 的种类 ···································································································································································· 23 
图 1-8. Exception 分类 ····························································································································································· 24 
图 1-9. GAT Tool 主界面 ·························································································································································· 25 
图 1-10. DBViewer 弹出界面 ··················································································································································· 25 
图 1-11. DB 解析后生成的文件 ·············································································································································· 25 
图 1-12. KE DB 解压后生成的文件 ········································································································································· 26 
图 1-13. USBNET 模块导致 KE ················································································································································ 26 
图 1-14. SWT DB 解压后生成文件 ·········································································································································· 27 
图 1-15. system_server 发生异常导致 SWT ··························································································································· 27 
图 1-16. NE DB 解压后生成的文件 ········································································································································· 28 
图 1-17. systemui 发生异常导致 NE ······································································································································· 29 
图 1-18. JE DB 解压后生成的文件 ·········································································································································· 30 
图 1-19. Animation 异常导致 system_server crash 引起 JE ··································································································· 30 
图 1-20. 触发了 MD ASSERT ···················································································································································· 31 
图 1-21. System UI 发生 ANR ·················································································································································· 31 
图 1-22. 如何通过日志快速定位 ANR 问题 ··························································································································· 32 
图 1-23. cat /proc/meminfo 日志 ············································································································································ 33 
图 1-24. Kernel memory leak 日志 ·········································································································································· 33 
 
表格目录 
表 1-1. 名词解释········································································································································································ 7 
表 1-2. 系统问题需要提供的日志明细 ·································································································································· 22 
表 1-3. KE 问题需要提供的调试信息 ····································································································································· 27 
表 1-4. NE 问题需要提供的调试信息 ···································································································································· 29 
表 1-5. ANR 问题需要提供的调试信息 ·································································································································· 31 
 
  
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
1.1 Build 系统 
 Build 环境 
项目 要求 
磁盘空间 不小于 250GB 
内存 不小于 24GB 
发行版本 Ubuntu 18.04 (推荐) 
编译主机需要安装的工具 参考 http://source.android.com/source/initializing.html 
Git 1.9.1 或更高版本 
Shell 4.4.19 或者更高版本 (Ubuntu18.04 自带)(推荐) 
Perl 5.26.1 (Ubuntu18.04 自带)(推荐) 
Python Python 2.7.17 & Python 3.6.9 (Ubuntu18.04 自带)(推荐) 
GNU Make 4.1 (Ubuntu18.04 自带)(推荐) 
 
 Sync 代码 
Step1：创建一个目录用于存放 code 
命令: mkidr <working folder> && cd <working folder> 
Step2：Codebase 初始化 
命令: repo init -u https://git01.mediatek.com/alps_release/platform/manifest -b <branch> -m 
<manifest> --no-repo-verify 
<branch>: branch 名称 
<manifest>: 指定的 branch 和版本 
场景 1: init latest code 
$repo init -u https://git01.mediatek.com/alps_release/platform/manifest -b $company -
m $(release_branch)-default.xml --no-repo-verify 
 
场景 2: init specific version 
$repo init -u https://git01.mediatek.com/alps_release/platform/manifest -b $company -m 
$(release_tag).xml --no-repo-verify 
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
Step3: Code 抓取 
场景 1: Sync full codebase 
$repo sync -c -f -j8 --no-repo-verify --optimized-fetch 
 
场景 2: Sync 单一 repo 
$repo sync <repository name>  /*<repository name > can be repository name or repository 
path */ 
例: $repo sync device/common 
 
场景 3: Sync 多个 repo 
$repo sync <repository name1 repository name2> /*repositpry1 repository2 separated by 
space */ 
例: $repo sync platform/art platform/abi/cpp 
 
 Build 命令 
MT8676 使用 LD2.0 build，请参考 MOL: https://online.mediatek.com/apps/quickstart/QS00266。 
Build 命令： 
Python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py –run 
full_${Project}-${mode} 
例: 
Python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py –run 
full_auto8676p1_64_bsp-userdebug 
输出: 图片生成目录out/target/product/${project}/merged 
 
LD2.0 会产生 out_sys & out_hal & out_krn & out 这些文件夹用来存放每个叠层的图片。 
详情请参考：https://online.mediatek.com/apps/quickstart/QS00178. 
 
查询 Build 命令： 
Python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py 
full_${Project}-${mode} 
 
1.2 系统概述 
 简单介绍 
本章节主要介绍 MT8676 系统相关内容以及常见系统问题的处理方法。 
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
 名词解释 
表 1-1. 名词解释 
缩略词 全称及释义 
AED Android Exception Daemon 异常守护程序 
JE Java Exception Java 异常 
NE Native Exception Native 异常 
KE Kernel Exception 内核异常 
EE External Exception 外部异常 
ANR Application Not Response 应用程序无响应 
SWT Software Watchdog Timeout 软件看门狗超时 
 
1.3 架构/流程概述 
 MT8676 Android 软件叠层 
MT8676 Android 软件叠层如图 1-1 所示（需要放大才能看清楚）。 
 
 
图 1-1. MT8676 Android 软件叠层 
 
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
1.3.2.1 Bootup 架构 
 
图 1-2. Bootup 架构 
 
• 第一步 loader 层：上电之后，先执行 bootrom 中的 bootcode，将 bootloader 从外部 flash 加载到 SRAM 中，对
DRAM 进行初始化，拉起 Linux kernel 。Boot Loader 分为 preloader 和 LK 两大部分，preloader 运行在 SDRAM
中，LK 运行在 DRAM 中，LK 会去加载 kernel 程序。 
• 第二步 kernel 层：首先启动 0 号进程，用于初始化进程管理、内存管理、加载驱动程序；再 fork 出 2 号进
程，2 号进程是所有 Linux 内核进程的鼻祖。 
• 第三步 native 层：kernel 层的驱动程序加载完毕之后，硬件设备驱动与 HAL 层进行交互，启动 1 号进程。 
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
• 第四步 native 层：init 进程（1 号进程）启动之后会启动各种用户守护进程，并且会启动 servicemanager
（binder 服务管家）等重要服务，同时解析对应的配置文件 init.rc 并且 fork 出 Zygote 进程。 
• 第五步：Zygote 进程是介于 native 层与 Java 层的进程，它会加载虚拟机 JVM，注册 JNI 函数，打通 native 到
Java 层的通道，并且启动 systemserver（负责整个 Java 框架）以及第一个应用程序进程启动器。 
 
1.3.2.2 Boot ROM  
 简单介绍 
Boot Rom 是一个硬件设备（类似于 SRAM/DRAM），里面存着一段出厂自带的不可修改的已经固化的程序
bootcode。上电之后， Boot Rom 开始执行内部事先设定好的 bootcode，加载引导程序 preloader 到 SRAM 中然后
执行。 
 
 主要工作 
 
图 1-3. Boot Rom 主要工作 
 
1. 加载引导程序 preloader 到 SRAM 中然后执行； 
2. 当检测不到有效的镜像或者代码时，Boot Rom 引导进入下载模式； 
3. 执行一些校验工作； 
4. 硬件初始化，串口，flash 等。 
 
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
1.3.2.3 Bootloader 
 简单介绍 
Bootloader 分为 preloader 和 LK（Little Kernel 一个开源的 bootlader 项目，但是只支持 Arm 和 x86 平台，其显著的
特点为实现了一个简单的线程机制）两大部分。 
Preloader 存储在 Flash 中，运行在 SRAM（SRAM 不需要初始化）中，preloader 可以直接被 bootrom 加载到 SRAM
中运行，主要作用是初始化 DRAM。 
LK 运行在 DRAM 中，LK 的主要作用是加载 kernel 到 DRAM 中，LK 同样也储存在 Flash 中。 
 
 主要工作 
 
图 1-4. Bootloader 主要工作 
 
1. 上电之后先执行 BootRom 里面的 BootCode。 
2. BootCode 在 Flash 中定位到 preloader。 
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
3. 将 preloader 从 Flash 中加载到 SRAM 中（ 0x00200F10 ），开始初始化外部 DRAM。 
4. Preloader 在 Flash 中定位到 LK。 
5. 将 LK 从 Flash 中加载到外部的 DRAM 运行。 
6. LK 自身初始化。 
7. LK 将 boot.image/vendor_boot.img 解压为 kernel 和 ramdisk，从 Flash 中加载到 DRAM 中。 
8. LK 初始化 kernel。 
9. 执行 kernel 部分程序（kernel 初始化完成后 fork 出 init 进程）。 
10. 拉起 ramdisk 中的 init 程序，进入用户空间初始化，init 进程 fork 出 Zygote 进程，....，直到整个 Android 启动
完成。 
 
 
1.3.2.4 Kernel 
 简单介绍 
内核（Kernel）是操作系统的核心组件，它负责管理计算机硬件和软件资源，提供操作系统和应用程序的基本服
务。内核是操作系统的第一个加载，并作为整个操作系统的核心运行在内存中，控制着所有系统资源，如 CPU、
内存、输入/输出、文件系统等。内核提供了底层的服务和接口，供应用程序调用和使用。  
 
 主要工作 
Kernel 汇编阶段 （由 ENTRY(_stext)开始） 
 
1. 设置为 SVC 模式，关闭所有中断。 
2. 获取 CPU ID。 
3. 验证 dtb。 
4. 创建页表项。 
5. 配置 r13 寄存器，也就是设置打开 MMU 之后要跳转到的函数。 
6. 使能 MMU。 
7. 跳转到 start_kernel，进入 C 阶段。 
 
Kernel C 阶段 （由 kernel_init 开始） 
 
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
 
图 1-5. Kernel C 阶段主要工作 
 
主要完成硬件平台相关的初始化工作，在相关初始化结束之后执行 init 程序。 
 
1.3.2.5 init 进程 
 简单介绍 
init 进程是 Linux 系统中用户空间的第一个进程，进程号为 1。 
当 bootdloader 启动后，启动 kernel，kernel 启动之后，在用户空间启动 init 进程，再通过 init 进程，来读取 init.rc
中的相关配置，从而启动其他相关进程。 
 
 主要工作 
• 分析 init.rc 启动脚本文件，根据文件内容执行相应的功能 ss。 
• 当一些关键进程死亡时，重启该进程。 
• 提供 Android 系统的属性服务。 
 
 代码介绍 
Init 的入口函数位于/system/core/init/init.c。 
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
1.3.2.6 Zygote 
 简单介绍 
当 Android 设备启动时，系统首先启动 Zygote 进程。Zygote 进程会预加载和初始化一些常用的系统库和资源文件
等，这样可以加快其他应用程序的启动速度，因为这些资源已经被加载到内存中。  
 
 主要工作 
ZygoteInit 类的 main 主要完成以下五个工作。 
 
1. registerZygoteSocket(): Zygote 进程注册监听 socket。 
2. preload(): 加载常用的 Java 类和系统资源。 
3. startSystemServer(): 启动 SystemServer 进程。 
4. runSelectLoopMode(): 进入循环监听模式。 
5. closeServerSocket(): 进程退出时，关闭 socket 监听 。 
 
 代码介绍 
Zygote 入口函数位于kernel/sched/fork.c。 
1.3.2.7 SystemServer 
 简单介绍 
SystemServer 是由 ZogoteInit 的main 创建的，调用caller.run 之后会执行 SystemServer 的main 函数。 
 
 主要工作 
• 管理系统级别服务：SystemServer 管理许多 Android 系统的核心服务和功能，如 Activity Manager Service、
Content Provider Service、Package Manager Service、Notification Manager Service 等等。它们提供了必要的基础
设施，供应用程序运行和交互。 
 
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
• 管理系统资源：SystemServer 通过资源管理器（Resource Manager）来管理系统资源，包括内存、进程、线
程、文件系统、网络等等。资源管理器可以分配和回收系统资源，以确保系统的稳定性和安全性。  
 
• 提供系统级别设置和配置：SystemServer 提供了系统级别的设置和配置，如网络设置、音量设置、时间设置、
语言设置等等。这些设置是系统级别的，会影响整个系统的表现和操作方式。  
 
 代码介绍 
SystemServer 入口函数位于 frameworks/base/services/java/com/android/server/SystemServer.java。 
 
 Shutdown 
1.3.3.1 Shutdown 流程图 
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
 
图 1-6. MT8676 shutdown 流程 
 
• 调用ShutdownThread.shutdown()。 
1. 获取用户关机行为。 
2. 注册关机广播。 
3. 创建关机对话。 
4. 执行一系列关机流程。 
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
 
• 出现关机对话时，若用户确认关机，则会执行beginShutdownSequence 开始关机流程。 
1. 显示关机进度条对话框。 
2. 启动 ShutdownThead 线程， 执行 run 方法。 
 
1.3.3.2 ShutdownThread 主要作用 
1. 发送有序的关机广播。 
2. 测量关闭某些项目的时间。 
3. 关闭 ActivityManager。 
4. 关闭 PackageManager。 
5. 关闭 Radios。 
6. 完成 SystemServer 的关闭。 
7. 初始化并判定执行关机还是重启。 
 
如果有开 IPO 功能，则进 IPO，然后休眠。 
 
 Android Bootup 日志分析 
[14:40:10:408] Pll init start...       //进入程序的第一句log，标志着程序启动，进入perloader 
… 
[14:40:10:444] Pll init Done!! 
[14:40:10:444] #T#PLL=24 
[14:40:10:445] #T#GPIO=0 
[14:40:10:445] [RGU] rst from: kernel 
[14:40:10:445] drm_latch_en: MTK_DRM_LATCH_EN(95027EF0) 
[14:40:10:445] [RGU] STA from reg:       0x40000000      //RGU 打印，可以关注系统是否异常重启 
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
[14:40:10:449] [RGU] Set NONRST_REG to 0x40000000 
[14:40:10:449] [RGU] mtk_wdt_mode_config mode value=34, tmp:22000034 
… 
[14:40:10:541] [PMIC]PONSTS[0xC]=0x0      //PMIC register 打印，可以关注PMIC 行为是否有异常 
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
[14:40:12:051] [Calibration Summary] Freqency 3750       //DRAM 各频点calibration 
[14:40:12:051] CH 0, Rank 0 
[14:40:12:051] SW Impedance        : PASS 
[14:40:12:051] 8 Phase             : FAST K 
[14:40:12:051] DUTY Scan           : FAST K 
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
[14:40:12:892] [BLDR] Starting tool handshake.       //USB 和flashtool USB 握手，如果成功则加
载DA 进入Download Mode 
[14:40:15:971] #T#UART handshake init=1 
… 
[14:40:16:098] [PART] load "lk_a" from 0x000000003B8DB9C0 (dev) to 0x78000000 (mem) 
[SUCCESS]     //Preloader 加载相关image 到DRAM 
[14:40:16:098] [PART] load speed: 155765KB/s, 638016 bytes, 4ms 
[14:40:16:098] [PART] img vfy...[SEC] img auth ok 
… 
[14:40:16:418] welcome to lk     //进入LK BL2_EXT 
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
[14:40:19:085] welcome to lk/MP…        //进入GZ 
… 
[14:40:20:982] welcome to lk         //进入LK 
[14:40:20:995]  
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
0x0000000000 [0x411fd461] //kernel 启动第一行打印 
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
[name:mtk_smi&]Succeed to get smi-comm dev for mmqos          //init 加载ramdisk ko 
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
/system/etc/init/hw/init.rc...    //init 解析rc 文件 
[14:40:36:937] [    8.974057][T1600001] init: init 23: Added '/init.environ.rc' to import 
list 
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
[name:nvmem_mt6338_efuse&]EFUSE[58]=0x83                                        //加载
vendor ko 
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
20252.839124:modprobe: Load_Module_DONE     //ko 加载完成 
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
21214.882203:INIT:zygote-start    //启动zygote 进程 
[14:40:48:413] [   21.216010][T1500001] init: init 25: [21174][0]processing action 
(firmware_mounts_complete) from (/system/etc/init/hw/init.rc:521) 
[14:40:48:413] [   21.217542][T1500001] init: init 25: [21175][0]processing action (early-
boot) from (/vendor/etc/init/hw/init.mt8676.rc:751) 
[14:40:48:413] [   21.219106][T1500324] init: [name:bootprof&]BOOTPROF:     
21219.105049:INIT:early-boot   //进入early boot 阶段，负责一些基础服务和参数的设置 
… 
[14:40:55:318] [   28.131865][T1700324] init: [name:bootprof&]BOOTPROF:     28131.864681: 
OFF (KO:356)    //开机完成 
 
1.4 配置/客制化指南 
 系统相关配置 
1.4.1.1 快速开机配置 
Preloader: 
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
 
设置/调整成如下 config： 
CONFIG_ARM_FFA_TRANSPORT=n 
CONFIG_MTK_GZ_KREE=n 
CONFIG_MTK_DISABLE_GZ=y 
CONFIG_MTK_DRAM_LOG_STORE=n 
CONFIG_MTK_SENSOR_FAST_PROBE=y 
# CONFIG_MTK_DRAM_LOG_STORE_ADDR is not set 
# CONFIG_MTK_DRAM_LOG_STORE_SIZE is not set 
# CONFIG_MTK_SECURITY_SW_SUPPORT is not set 
 
Ko Table： 
device/mediateksample/auto8676p1_64_bsp/ko_order_table.csv 
 
根据如下方法删除和添加 ko： 
delete,mkp.ko//删除掉ko_order_table.csv 对应mkp.ko 这一行 
delete,ffa_v10.ko 
delete,cmdq-sec-drv.ko 
delete,mcDrvModule-ffa.ko 
delete,gz_trusty_mod.ko 
delete,gz_ipc_mod.ko 
delete,gz_irq_mod.ko 
delete,gz_virtio_mod.ko 
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
//在teeperf.ko 的后面，isee-ffa.ko 的前面，插入增加mcDrvModule.ko 
add,,cfg80211.ko,phy-mtk-pcie.ko,/../kernel_device_modules-6.1/drivers/phy/mediatek/phy-
mtk-pcie.ko,vendor,Y,Y,user/userdebug/eng 
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
//在cfg80211.ko 的前面，插入增加phy-mtk-pcie.ko 
add,,cfg80211.ko,pcie-mediatek-gen3.ko,/../kernel_device_modules-
6.1/drivers/pci/controller/pcie-mediatek-gen3.ko,vendor,Y,Y,user/userdebug/eng 
//在cfg80211.ko 的前面，插入增加pcie-mediatek-gen3.ko 
 
1.5 常见问题/故障排除 
 系统问题需要提供的日志 
表 1-2. 系统问题需要提供的日志明细 
Issue Type Mobile Log UART Log db Symbol Thermal Log Top Ftrace 
Bootup M M O O X X X 
NE M X M M X X X 
KE M C M M X X X 
SWT M C M C X X X 
ANR M X M O C C C 
JE M X M X X X X 
IPO M M O O X X X 
Performance M M O X M M C 
M: 必须提供 
O: 可以不提供，根据问题的分析情况再提供 
C: 有条件可以提供或者根据问题的分析情况再提供 
X: 表示通常情况下不需要提供 
 
 MT8676 平台 DB 分析指引 
1.5.2.1 AEE 介绍 
Android Exception Engine (AEE)，是 MediaTek 自主开发的抓取日志的机制。当系统发生异常时，它能够抓取异常信
息发生前后一段时间的日志并打包压缩成 DB 文件，保存到 eMMC 对应的位置。 
 
1.5.2.2 DB 保存路径 
AEE DB 保存到如下路径中： 
/data/aee_exp 
/data/vendor/aee_exp 
 
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
1.5.2.3 DB 的种类 
 
图 1-7. DB 的种类 
 
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
1.5.2.4 Exception 分类 
 
图 1-8. Exception 分类 
 
1.5.2.5 GAT 解析 DB 
1. 打开 GAT 工具。 
2. 选择工具栏 Window→Open DBviewer。 
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

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
MT8676 Android System 
User Manual 
Confidential B 
 
图 1-9. GAT Tool 主界面 
 
3. DBViewer  弹出界面，如图 1-10 所示： 
 
 
图 1-10. DBViewer 弹出界面 
 
4. 选择 Select DB File， 载入要解析的 DB 文件，如：db.fatal.00.KE.dbg。点击 Start，解析完成后，可看到解析出
来的 DB Files。可在 dbg 文件同一路径下看到对应文件夹。 
 
 
图 1-11. DB 解析后生成的文件 
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
1.5.2.6 KE 解析范例 
• KE: Kernel Exception  
• KE DB 文件：db.fatal.00.KE，如果发生 KE，一般会在/data/vendor/aee_exp 中生成 DB 文件。 
• 解压 db.fatal.00.KE.dbg 得到 db.fatal.00.KE.DBG.DEC。 
• 解压开的 DB 内容，重点关注_exp_main.txt。SYS_KERNEL_LOG 信息最多，除了异常信息之外还有异常之前的一
些 kernel 日志；SYS_LAST_KMSG 记录重启前最后的日志。 
 
 
图 1-12. KE DB 解压后生成的文件 
 
• 从_exp_main.txt 可知该 KE 是 USBNET 模块导致， 如图 1-13 所示： 
 
 
图 1-13. USBNET 模块导致 KE 
 
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
• 关于 KE 问题，需要提供的调试信息如表 1-3 所示： 
 
表 1-3. KE 问题需要提供的调试信息 
Issue Type Mobile Log UART Log db Symbol Thermal Log Top Ftrace 
KE M C M M X X X 
注：vmlinux Symbol 信息位于 out/target/product/$proj/obj/KERNEL_OBJ/vmlinux。 
 
1.5.2.7 SWT 解析范例 
SWT: Software Watchdog Timeout 
SWT DB 文件: db.fatal.01.SWT 
解压 db.fatal.01.SWT 得到 db.fatal.01.SWT.dbg.DEC。 
解压开的 DB 内容，重点关注_exp_main.txt， 如图 1-14 所示： 
 
 
图 1-14. SWT DB 解压后生成文件 
 
• 查看 exp_main.txt，system_server 发生异常导致 SWT，如图 1-15 所示： 
 
 
图 1-15. system_server 发生异常导致 SWT 
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
1.5.2.8 NE 解析范例 
• NE: Native Exception 
• NE DB 文件: db.fatal.NE 
• 解压 db.fatal.00.NE.dbg 得到 db.fatal.00.NE.dbg.DEC。 
• 解压开的 DB 内容，重点关注_exp_main.txt， 如图 1-16 所示： 
 
 
图 1-16. NE DB 解压后生成的文件 
 
• 查看 exp_main.txt，systemui 发生异常导致 NE，如图 1-17 所示： 
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
 
图 1-17. systemui 发生异常导致 NE 
 
• NE 问题，需要提供的调试信息如表 1-4 所示： 
 
表 1-4. NE 问题需要提供的调试信息 
Issue Type Mobile Log UART Log db Symbol Thermal Log Top Ftrace 
NE M X M M X X X 
注：NE Symbol 信息位于out/target/product/$proj/symbols。 
 
1.5.2.9 JE 解析范例 
• JE: Java Exception 
• JE DB 文件: db.fatal.00.JE 
• 解压 db.fatal.00.JE.dbg 得到 db.fatal.00.JE.dbg.DEC。 
• 解压开的 DB 内容，重点关注_exp_main.txt，如图 1-18 所示： 
 
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
 
图 1-18. JE DB 解压后生成的文件 
 
• 查看 exp_main.txt，animation 异常导致 system_server crash 引起 JE，如图 1-19 所示： 
 
  
图 1-19. Animation 异常导致 system_server crash 引起 JE 
 
1.5.2.10 EE 解析范例 
• EE: External Exception，如 modem、connectivity 发生的 exception 
• EE DB 文件：db.02.EE  
• 解压 db.02.EE.dbg 得到 db.02.EE.dbg.DEC。 
• 解压后的 DB 内容，重点关注_exp_main.txt。 
• MD 发生了 ASSERT 错误，如图 1-20 所示： 
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
 
图 1-20. 触发了 MD ASSERT 
 
1.5.2.11 ANR 解析范例 
• ANR: Application Not Response，即应用无响应，指某个应用程序的主线程在一段时间内没有做完某件事情。  
• ANR DB 文件：db.00.ANR 
• 解压 db.00.ANR.dbg 得到 db.00.ANR.dbg.DEC。 
• 解压后的 DB 内容，重点关注_exp_main.txt 与 SWT_JBT_TRACES。 
• System UI 发生 ANR，如图 1-21 所示： 
 
图 1-21. System UI 发生 ANR 
 
• 关于 ANR 问题，需要提供的调试信息如表 1-5 所示： 
 
表 1-5. ANR 问题需要提供的调试信息 
Issue Type Mobile Log UART Log db Symbol Thermal Log Top Ftrace 
ANR M X M O C C C 
 
• 如何分析 ANR 问题？ 
可以通过查看 androidlog 来迅速定位 ANR 发生的位置并获取一些必要的资讯。（小技巧：可以通过搜索
“ANR ” 快速定位，多一个空格，过滤掉一些干扰的日志信息。） 
 
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
 
图 1-22. 如何通过日志快速定位 ANR 问题 
 
如果 ANR 发生了，对应的应用会收到 SIGQUIT 异常终止信号，dalvik 虚拟机就会自动在/data/anr/目录下生成
trace.txt 文件，这个文件记录了 ANR 发生时刻系统各线程的执行状态。 
 
 Memory Leak 问题处理方法 
1.5.3.1 Memory Leak 简单介绍 
判断是否有 memory leak 的关键信息是 memory 占用是否一直在涨。 
 
Memory Leak 造成的原因是某个被配置（allocated）的记忆体无法被参照（referenced），也无法被释放
（released）；那块被配置的记忆体就有如记忆体孤儿般，无法被系统再使用。  
 
1.5.3.2 查看 Memory 的命令 
• dumpsys meminfo  查看 Android 系统详细的 memory 分布。 
• cat /proc/meminfo 查看总体的 memory 分布。 
 
通过命令或者 bat 脚本，在复制问题的同时不断的在后台 dump memory 信息。 
 
1.5.3.3 判断 Kernel Memory Leak 的方式 
输入命令：cat /proc/meminfo: 
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
 
图 1-23. cat /proc/meminfo 日志 
 
• 如果 sunreclaim 这个值很大且持续增长，基本可以确定 kernel Memory Leak 发生了， 如图 1-23 所示。 
• 在 kernel 日志中，如果发生了 OOM (Out of Memory)，也会 dump 出来这部分的 memory。如果看到 sunreclaim
很大且持续增长，基本上也可以判断是有 kernel Memory Leak，如图 1-24 所示： 
 
 
图 1-24. Kernel memory leak 日志 
 
 WDT  简单介绍 
WDT 全称是 Watchdog Timer，指的是看门狗模块，看门狗其实就是一个可以在一定时间内被复位的计数器。当看
门狗启动后，计数器开始自动计数，经过一定时间，如果计数没有被复位，计数器达到指定数值，就会发出复位
信号，很多设备包括 CPU 接到这个信号会复位重启（俗称“被狗咬”）。为了保证看门狗不发出复位信号，就需
要在看门狗允许的时间间隔内对看门狗计数器清零（俗称“喂狗”），计数器重新计数。如果系统正常并保证按
时“喂狗”，那么就相安无事。一旦程序故障卡死，没有“喂狗”，系统会“被咬”继而复位。  
 
1.5.4.1 SWT  
SystemServer 是 Android 的一个核心进程，它为 APP 运行提供了核心的服务。如果 SystemServer 的一些核心服务和
重要线程卡住，就会导致相应的功能异常，如手机发生 hang 机，输入无响应，无法启动 APP 等一些不正常的情
况。而且，如果没有一种机制让这些服务复位的话，那么将严重影响客户体验。尤其是当前大多数手机把电池封
装在手机里面，想拨电池重启都很难。 
所以有必要在核心服务和核心线程卡住的时候，让系统有自动复位的机会。于是， Google 引入了 SystemServer 
watchdog 机制。这个机制可以监控核心服务和核心线程是否卡住。  
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
1.5.4.2 HWT 
WDT 第 1 阶段超时将触发 FIQ，此时 CPU 收到 FIQ 并处理，最后调用 BUG()走正常的 kernel exception 流程，生成的
DB 类型为 HWT (Hardware Watchdog Timeout)。 
 
1.5.4.3 HW Reboot 
WDT 第 1 阶段超时将触发 FIQ，如果 CPU 没有响应或 CPU 响应了但没有在第 2 阶段超时时间内完成重启，就会导
致第 2 阶段超时，WDT 发出复位信号复位整个系统，生成的 DB 类型为 HW reboot。 
 
 性能模式 
1.5.5.1 性能模式简单介绍 
Performance Mode（性能模式）是一种在移动设备、笔记本电脑和台式机等设备上提高系统性能的配置选项。在性
能模式下，设备会优先使用更高的 CPU 频率、更大的内存缓存、更高的屏幕刷新率和更高的功率消耗等，以提供
更出色的系统性能和响应速度。这种模式通常是在需要高性能运行的时候使用。  
  
1.5.5.2 adb 设置性能模式 
不同的 IC 目录不一样，但是设置方法一样。 
CPU: 
ls /sys/devices/system/cpu/cpufreq/这个目录下有几个簇 
echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor 
echo performance > /sys/devices/system/cpu/cpufreq/policy4/scaling_governor 
echo performance > /sys/devices/system/cpu/cpufreq/policy7/scaling_governor 
 
或者： 
adb shell "echo 0 1900000 1900000 > /proc/cpudvfs/cpufreq_debug" 
adb shell "echo 4 2800000 2800000 > /proc/cpudvfs/cpufreq_debug" 
adb shell "echo 7 2900000 2900000 > /proc/cpudvfs/cpufreq_debug" 
first number (1900000) means floor and  second number means ceiling. 
 
GPU Set: 
adb shell "echo 0 > /proc/gpufreqv2/fix_target_opp_index" 
 
GPU Query: 
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
adb shell "cat /proc/gpufreqv2/gpufreq_status" 
 
DDR: 
Set DDR frequency 
adb shell "echo 0 > /sys/kernel/helio-dvfsrc/dvfsrc_force_vcore_dvfs_opp" 
 
Check DDR frequency 
adb shell "cat /sys/kernel/helio-dvfsrc/dvfsrc_dump | grep bps" 
 
Thermal disable: 
adb shell "thermal_intf apply disable_throttling.conf" 
 
1.5.5.3 在代码中修改开机自启动性能模式 
在/device/mediatek/mtxx/init.mtxxx.rc 里做如下修改： 
# switch to sched-dvfs 
    write /sys/devices/system/cpu/cpufreq/policy0/scaling_governor "schedutil" 
    write /sys/devices/system/cpu/cpufreq/policy4/scaling_governor "schedutil" 
    write /sys/class/net/p2p0/queues/rx-0/rps_cpus "fe" 
    write /sys/class/net/p2p0/queues/rx-1/rps_cpus "fe" 
    write /sys/class/net/p2p0/queues/rx-2/rps_cpus "fe" 
    write /sys/class/net/p2p0/queues/rx-3/rps_cpus "fe" 
    # stop bootprof 
    write /proc/bootprof 0 
 
其中这两句 
write /sys/devices/system/cpu/cpufreq/policy0/scaling_governor "schedutil" 
write /sys/devices/system/cpu/cpufreq/policy4/scaling_governor "schedutil" 
    
改为 
    write /sys/devices/system/cpu/cpufreq/policy0/scaling_governor "performance" 
    write /sys/devices/system/cpu/cpufreq/policy4/scaling_governor "performance" 
 
 CPU 插拔 
您可以用如下指令来开关核。 
adb shell "echo 1 > /sys/devices/system/cpu/cpu1/online"  
adb shell "echo 1 > /sys/devices/system/cpu/cpu2/online"  
adb shell "echo 1 > /sys/devices/system/cpu/cpu3/online" 
echo 1 是打开，echo 0 是关闭。 
 
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
MT8676 Android System 
User Manual 
Confidential B 
 如何抓取 systrace 
1. 使用 adb 命令抓 trace，10s 表示抓 10s，最多可以抓 20s。 
adb shell perfetto -o /data/misc/perfetto-traces/trace -t 10s sched freq idle am wm gfx 
view 
 
2. 使用脚本抓 ftrace 
01-catch.bat   cpu sched 和 workque 也可以抓到。 
3. 使用 android Q 以及 Q 之后自带的工具抓 trace。 
使用命令打开adb shell am start com.android.traceur/com.android.traceur.MainActivity，然后
将 CPU 参数设置为最大，点击 record trace 开始录制异常状态，一段时间之后关闭，抓取 trace 下来，trace 保
存在/data/local/traces。 
4. 从 trace 可以看到进程有没有进入 queue，以及有没有被执行，以及被安排到哪个 CPU。如果 workqueue 是没
有绑核的，只能靠系统根据 loading 调度，程序可能在任何 CPU 上运行。 
 
 系统常见问题相关参考 
内存泄漏专题分析：https://online.mediatek.com/apps/quickstart/QS00086  
踩内存专题分析：https://online.mediatek.com/apps/quickstart/QS00090  
死机问题快速分析：http://online.mediatek.com/QuickStart/QS00044 
Memory：http://online.mediatek.com/QuickStart/QS00227 
Performance 调试宝典：https://online.mediatek.com/apps/quickstart/QS00288  
深入分析 Android native exception 框架：http://online.mediatek.com/QuickStart/QS00038  
深入分析看门狗框架：http://online.mediatek.com/QuickStart/QS00067 
Hang Detect 问题快速分析 https://online.mediatek.com/apps/quickstart/QS00076   
深入分析 Linux kernel exception 框架 http://online.mediatek.com/QuickStart/QS00073 
NE/KE 分析学习课程 https://online.mediatek.com/apps/quickstart/QS00068  
NE/KE 分析报告解读 https://online.mediatek.com/apps/quickstart/QS00089  
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
MT8676 Android System 
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
# SRC0172 MT8676_Android_Thermal_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Thermal_User_Manual_V1.0.pdf

SHA-256：508dbeafcf88144a780c2057a4378f57b9dec2f0592396e88103250d9e93f978

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0172.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-08-12
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
MT8676 Android Thermal 
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
1.2.1.1 热管理 HAL ····································································································································· 5 
1.3 配置/客制指南 ························································································································································ 5 
1.4 热管理策略 ······························································································································································ 5 
1.4.1.1 热管理策略命令 ···························································································································· 6 
1.4.1.2 热管理策略格式 ···························································································································· 6 
1.5 常见问题/故障排除 ················································································································································ 9 
附件一 附加条款 ····························································································································································· 10 
 
 
图片目录 
图 1-1. Thermal 2.0 软件架构 ··················································································································································· 4 
图 1-2. 热管理 HAL ···································································································································································· 5 
 
表格目录 
表 1-1. 设备上可用的策略（/vendor/etc/thermal/）············································································································· 6 
 
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
1 热管理 
1.1 概述 
设备的热管理有两个主要目标： 
 
• 控制组件温度以避免被热损坏。 
• 控制整个产品的温度以确保人体安全并符合安全规定。 设备中的热是由于 IC 高功率累积而来的。高功率跟
高时钟速度、电压和性能有关系。 
 
从热管理的角度，控制温度的方法是控制散热及发热。控制散热可以通过添加各种热管理解决方案，如 TIM、铜
箔、导管等，将热有效地传递（三种热传递方式：热传导、热辐射、热对流）到整个产品和空气或接触面上。 控
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
MT8676 Android Thermal 
User Manual 
Confidential B 
thermal_core 是一个本地 Linux 应用程序，其主要功能是解析.conf 格式的热管理策略。 
CPU/GPU/APU 会各自根据 thermal_core 设置下来的 target Tj 和监测到的温度做 thermal throttle。 
 
1.2.1.1 热管理 HAL 
 
图 1-2. 热管理 HAL 
 
• 一个原生层服务，为应用层或其他原生服务提供热信息 API。 
• 通过热管理系统文件节点获取热区温度。 
• 一些应用程序或模块需要获取热信息，例如：CPU/GPU/皮肤温度、CPU 使用率、冷却设备列表。 
• 谷歌定义了一些 HAL 接口，芯片供应商必须实现，例如温度查询或热状态变化通知。  
 
1.3 配置/客制指南 
1.4 热管理策略 
• 策略在 source code 里的路径： 
vendor/mediatek/proprietary/external/thermal_core_lib/mt6897/ 
• 策略模板： 
vendor/mediatek/proprietary/external/thermal_core_lib/thermal_policy_template.conf 
• 支持加密格式 
 
 
 
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
表 1-1. 设备上可用的策略（/vendor/etc/thermal/） 
Thermal policy Permanent? Encrypted? Description 
thermal.conf Yes Yes Default thermal policy 
disable_thermal.conf Yes Yes Disable thermal throttling and thermal protection 
disable_thermal_temp.conf No Yes Same as the above, except it needs to re-apply after device 
rebooted 
disable_throttling.conf No Yes Disable thermal throttling 
disable_skin_control.conf No Yes Disable MTK skin control close loop (always keep 
Target Tj to 95℃) 
Thermal_policy_XX.conf 
(XX = 00~19 except 00, 02, 
08) 
On demand Yes Can add your own policy setting and switch via power HAL 
thermal_policy_08.conf No Yes Thermal policy for benchmark 
 
1.4.1.1 热管理策略命令 
• 应用一个热管理策略 
adb shell "thermal_intf apply [policy_name]" 
E.g., adb shell "thermal_intf apply disable_throttling.conf" 
• 检查当前正在使用的热管理策略 
adb shell cat /data/vendor/thermal/.current_tp 
• 检查当前正在使用的永久策略（系统重启后依然有效） 
adb shell cat /data/vendor/thermal/.permanent_tp 
 
1.4.1.2 热管理策略格式 
• Permanent policy 
 
 
• Linux thermal framework (LTF) 
–  “policy”: Support power_allocator and step_wise. 
 
 
• Disable LTF throttling 
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
 
 
• Disable LTF shutdown cooler and LVTS thermal reboot.
 
 
• Closed loop Tskin control 
– trip_pcb: PCB temperature to enable closed loop. 
– target_tpcb: Target PCB temperature for closed loop. 
 
 
• Backlight cooler 
–  “reduce-brightness”: Reduce brightness xx %. 
 
 
• CPU frequency table mapping 
–  “cluster”: CPU cluster id. 
 
 
• CPU core isolation table mapping 
–  “CPU”: CPU core to be isolated. 
 
 
• GPU frequency table mapping 
 
 
• Update thermal HAL severity levels 
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
–  Supports only SKIN type 
–  “level”: level can only be severe, critical, emergency, shutdown. 
 
• Fan Cooler (in dts file) 
–  “pwm-ch”:  pwm to control fan. 
 
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
 
1.5 常见问题/故障排除 
打开 thermal_core log： 
adb shell "/vendor/bin/thermal_intf debug_log 1" 
 
如何解密或加密热管理配置文件： 
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

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Android Thermal 
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
# SRC0173 MT8676_Android_UART_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_UART_User_Manual_V1.1.pdf

SHA-256：b724dfbe0dbe6a1689c24ee810f4fceb3be5d52c45ab890dfb53812ca28599a4

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0173.html)

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
MT8676 Android UART 
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
MT8676 Android UART 
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
MT8676 Android UART 
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
• UART0 /UART1 是 2 针（TX、RX）UART 通道 
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
MT8676 Android UART 
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
MT8676 Android UART 
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
 
• 如在 OS 中未使用请将状态设置为关: 
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
MT8676 Android UART 
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
MT8676 Android UART 
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
MT8676 Android UART 
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
# SRC0174 MT8676_Android_USB_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_USB_User_Manual_V1.0.pdf

SHA-256：f89d9f4cd89bb3ef1bcc33978266a396f270e85a8b6fe4fe5ba98a4766895e25

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0174.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本号:  1.0 
出版日期:  2024-08-12
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
MT8676 Android USB 
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
# SRC0175 MT8676_Android_WiFi_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_WiFi_User_Manual_V1.0.pdf

SHA-256：7a498a5dfafabddf40348e1991613eec33df10001831aaa56bd460b6082f5aaa

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0175.html)

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
版本记录 
版本 日期 作者 描述 
1.0 2024-08-12 胡雯萱 正式版本 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 WiFi ··········································································································································································· 4 
1.1 概述·········································································································································································· 4 
1.1.1 简单介绍 ······················································································································································ 4 
1.1.2 WiFi 名词解释 ·············································································································································· 4 
1.2 架构/流程概述 ························································································································································ 5 
1.3 配置/客制化指南 ···················································································································································· 6 
1.4 常见问题/故障排除 ················································································································································ 9 
1.4.1 WiFi 认证 ······················································································································································ 9 
1.4.2 WiFi 调试需要的日志 ································································································································ 10 
1.4.3 扫描 ···························································································································································· 11 
1.4.4 STA Connect 终端设备连接 ······················································································································· 12 
1.4.5 网络吞吐量 ················································································································································ 13 
1.4.6 WiFi 引起的 MT6637 芯片重置 ················································································································· 13 
附件一 附加条款 ····························································································································································· 16 
 
 
图片目录 
图 1-1. WiFi 架构 ······································································································································································· 6 
 
表格目录 
表 1-1. 名词解释········································································································································································ 4 
表 1-2. MTK WiFi 模块 ······························································································································································· 5 
表 1-3. Coredump 的生成路径 ················································································································································ 14 
 
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
1.1 概述 
1.1.1 简单介绍 
本章节介绍 MT8676 WiFi 模块的架构及 WiFi 常见问题的调试方法。 MT8676 搭配的 WiFi 芯片是 MT6637。 
 
1.1.2 名词解释 
表 1-1. 名词解释 
缩写 全称及解释 
STA 
Station,工作站，指配备无线网络接口的计算设备，如笔记本、带 WiFi 功
能的手机、平板等 
AP Access Point, 接入点，具备无线至有线桥接功能的设备，如无线路由器 
P2P Peer-to-Peer 直连 
BSS 
Basic Service Set，一个由单个无线接入点（AP）所控制的无线网络覆盖区
域 
BSSID 接入点(AP)的 MAC 地址 
SSID 服务集标识，局域网的名字 
ESS 
Extended Service Set，采用相同 SSID 的多个 BSS 形成的更大规模的虚拟
BSS，通过 SSID 来唯一标识 
802.11 series phy 层 802.11b/g/n, 802.11ac, 802.11ax… 
2.4G/5G/6G WiFi 信号工作频段 
Discovery 阶段 Passive Scanning 被动扫描 (侦听 Beacon), Active Scanning (Probe request/ 
Probe Response) 
Authentication 阶段 Authentication request 认证请求, Authentication response 认证回复 
Associate 阶段 Association request 关联请求, Association response 关联回复 
 
 
 
 
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
表 1-2. MTK WiFi 模块 
模块名 描述 
Glue layer (Linux/Android) 
(OS Adaptation) 
提供 OS 调用的接口 
IOCTL, spin lock, ISR, Main thread, download RAM code and patch 
通用 CFG80211 AIS 
HIF/HAL HW 适配层 
FW own/Driver own, TX data, TX command, RX interrupt 
AIS 
(AdHoc/Infrastructure/Search)  
管理网络配置和搜索 
Infra. STA connection  
CFG80211 AIS 
P2P 
P2P connection 
CFG80211 P2P 
P2P Find Phase 
– P2P Scan. (All Channel) 
– P2P Search. (Social Channel) 
Remain on Channel 
Management Frame TX 
– Off channel TX 
– Non off channel TX. Multiple Interface 
– Interface add/del/change 
AAA (AP(Hotspot) Auth/Assoc) AP’s authentication and association AP 认证和关联 
SAA (Station Auth/Assoc) STA’s authentication and association STA 的认证和关联 
MQM (Queue Management) QoS, Multiple queue control  
RLM (Radio Link Management) Bandwidth, preamble, slot time, OBSS, protection mode 
SCN (Scan) Queuing of scanning request 
SEC (Security) Encryption, key management 加密，密钥管理 
TXM TX path, CMD queue 
RXM RX path, Re-order buffer, RX AMPDU establishment 
CNM  
Concurrent Network Management 并发网络管理  
Handle channel privilege message 处理信道特权消息 
 
1.2 架构/流程概述 
MT6637 WiFi 架构整体如图 1-1 所示： 
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
 
图 1-1. WiFi 架构 
1.3 配置/客制化指南 
1. NVRAM 客制化 
WiFi 客制化部分一般会动到 NVRAM 文件中的配置，NVRAM 文件在设备中的位置: 
/data/nvram/APCFG/APRDEB/WIFI 
在代码中的位置/alps/vendor/mediatek/proprietart/custom/$project/cgen/CFG_WIFI_Default.h. 
对应栏位含义有标注，对应参数修改请使用 meta 工具进行。 
 
2. wifi.cfg 客制化 
客户可以使用 wifi.cfg 配置 WiFi 功能。公版默认没有加 wifi.cfg，如需客制化配置 WiFi 功能，请自建一个 wifi.cfg，
加到设备/vendor/firmware/中.  
驱动部分可配置的功能，默认值请查看 wlanInitFeatureOption()中的设置，可以通过 wifi.cfg 修改默认值。 
wifi.cfg 还可以修改固件中的功能默认值，具体根据功能需要，由 WiFi RD 提供修改参数。 
 
3. Channel list 客制化 
常与所支持的国家码一起配置（NVRAM 中配置国家码）。客制化文件路径：
/alps/vendor/mediatek/kernel_modules/connectivity/wlan/core/gen4m/mgmt/rlm_domain.c 
下面举例说明客制化的四种情况： 
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
情况1：从COUNTRY_CODE_US移除144信道 
a. 从COUNTRY_CODE_US 找到g_u2CountryGroup26 
static const uint16_t g_u2CountryGroup26[] = { 
 COUNTRY_CODE_AS, COUNTRY_CODE_US 
}; 
 
b. 在 arSupportedRegDomains 中找到 g_ u2CountryGroup26支持的Channel list 
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
 
c. 将操作类别121修改至下列样式： 
121,BAND_5G,CHNL_SPAN_20,100,11,TRUE 
 
情况 2：需单独修改一个国家的 channel list，且不影响到其他国家 
a. 定义新的分组 
static const uint16_t g_u2CountryGroup27[] = { 
 COUNTRY_CODE_US 
}; 
 
b. 从原始组g_ u2CountryGroup26 中移除COUNTRY_CODE_US 
c. 定义新组支持的 channel list 
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
  } 
} 
 
情况 3：移除一个 US channel list，如 52-64 
a. 从国家组中找到COUNTRY_CODE_US 
static const uint16_t g_u2CountryGroup26[] = { 
 COUNTRY_CODE_AS, COUNTRY_CODE_US 
}; 
 
b. 在 arSupportedRegDomains 中查找 g_u2CountryGroup26 支持的 channel list 
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
 
c. 将操作类别 118 修改为下列样式 
118,BAND_NULL,0,0,0,TRUE 
 
情况 4：设置被动信道 
• 如果客户没有特殊设置，那么信道 52-64 和 100-140 将默认被设置为被动信道 
• 如果客户需要特别设置，请参考如下设置 
a. 定义 g_u2CountryGroup1_passive，并包含COUNTRY_CODE_US  
static const uint16_t g_u2CountryGroup0_Passive[] = { 
 COUNTRY_CODE_US 
}; 
 
b. 添加被动信道列表至arSupportedRegDomains_Passive里的g_u2CountryGroup0_Passive  
{ 
  (uint16_t *) g_u2CountryGroup0_Passive, 
  sizeof(g_u2CountryGroup0_Passive) / 2, 
  { 
   {81, BAND_2G4, CHNL_SPAN_5, 1, 0, FALSE} 
   ,   /* CH_SET_2G4_1_14_NA */ 
   {82, BAND_2G4, CHNL_SPAN_5, 14, 1, TRUE } 
   , 
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
 
 
参数介绍： 
CHAL_SPAN_5： 信道跨度 
14：起始信道 
1：信数量 
红色字体的代码指的是从信道 14 开始的一个信道作为被动信道， 
其他行的意思是将信道数量设为 0，即无被动信道。 
 
1.4 常见问题/故障排除 
下面列出的是客户可以提前做一些初步分析以及需要客户注意的情况。其他问题，请按照要求，一次性抓齐日
志，提供给 MTK 分析。 
1.4.1 WiFi 认证 
WiFi 认证是 WiFi 联盟为其会员推出的一项认证计划，旨在验证特定 WiFi 产品是否符合规范要求，并能够与其他
WiFi 设备进行互操作。 
是否要做 WiFi 认证由客户决定，通常大型制造商销售到全球的设备会进行认证。 
整个认证过程可以分为如下阶段： 
1. 准备阶段：准备产品样机和相关文档。 
2. 申请阶段：向 WiFi 联盟提交认证申请并支付相应费用。 
3. 时程确认：与实验室确认测试时程。 
4. 测试阶段：产品将接受 WiFi 认证测试，包括性能、互操作性和安全性等方面的测试。  
5. 测试报告：收到测试报告，查看测试结果。 
6. 认证颁发：如果产品通过了所有测试，将获得 WiFi 认证，并可使用 WiFi 认证标识。 
7. 认证维护：定期更新认证，确保产品持续符合标准。 
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
 
其中需要 MTK 协助的阶段如下： 
• 申请阶段：客户向联盟提交认证申请时需要注册产品信息，这个阶段可能会需要 MTK 协助确认产品的能力集以
便决定需要做哪些测试项。 
• 排程阶段： 客户向实验室确认测试时程。MTK 需要在 LAB 正式开始前准备完毕测试的工具, 另外还需要确认客
户的时程足够满足测试和调试周期。 
• 测试阶段：实验室对产品进行测试。这个阶段 MTK 可能会需要协助调试测试问题。 
1.4.2 WiFi 调试需要的日志 
 WiFi 日志（包含 framework、wpa_supplicant、driver、fw）开启方法以及确认是否成功开启的方法。 
1. wpa_supplicant 日志 
adb shell "wpa_cli -i wlan0 -g@android:wpa_wlan0 IFNAME=wlan0 LOG_LEVEL DEBUG" 
 
2. Framework 日志 
Settings
 About
 Build click 6 times, then you will see "you are now a developer！" on the 
screen Settings
 Develop options
 Enable Wi-Fi verbose Logging 
 
3. FW 日志、WiFi 驱动日志以及 tcpdump 
MTK 公版提供 debugloggerUI，FW 日志存储 consyslog， WiFi 驱动日志 存储在 mobilelog，tcpdump 存储在 netlog。 
搜集完成后，可以通过 pull 命令将数据从 /data/debuglogger 目录中提取出来。 
 
4. 固件日志级别设置 (UI:DebugloggerUI-->Log Level-->WiFi Firmware Log Level)，命令方式： 
Extreme: 
adb shell “iwpriv wlan0 driver ‘set_chip EvtDrvnLogCatLvl 0xFFFFFFFF’” 
 
More: 
adb shell “iwpriv wlan0 driver ‘set_chip EvtDrvnLogCatLvl 0xFFFFFF0F’” 
 
Default: 
adb shell “iwpriv wlan0 driver ‘set_chip EvtDrvnLogCatLvl 0xFFFFFF03’” 
 
5. WiFi 驱动日志级别设置 (UI:DebugloggerUI-->Log Level-->WiFi Driver Log Level):: 
Extreme: 
adb shell “echo ”0xff:0x7f” > /proc/net/wlan/dbgLevel” 
More: 
adb shell “echo ”0xff:0x3f” > /proc/net/wlan/dbgLevel” 
 
 
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
Default: 
adb shell “echo ”0xff:0x2f” > /proc/net/wlan/dbgLevel” 
 
6. Sniffer log 
Sniffer log 是 WiFi 分析很重要的一种手段。用于监测 WiFi 各种帧在空口中的表现。譬如连线断连、吞吐、延时等问
题，都需要借助 sniffer log 来分析。 
在项目开始后，客户需要准备一台已安装抓包驱动和抓包工具的个人电脑，用于捕获  sniffer log 的无线网卡。在 
提供日志时，建议尽量同时提供 sniffer log，以避免在日志问题上来回沟通. 
 
1.4.3 扫描 
1.4.3.1 扫描关键日志 
内核中的扫描状态机开始运行： 
scnFsmSteps: (SCN STATE) [SCAN]TRANSITION: [IDLE] -> [SCANNING] 
 
内核日志中记录了扫描状态机的停止？ 
scnFsmSteps: (SCN STATE) [SCAN]TRANSITION: [SCANNING] -> [IDLE] 
 
计算停止和启动的时间差，看是否正常 
内核日志中记录了 scan done 事件 
aisFsmRunEventScanDone: (AIS INFO) ScanDone 1, status(0) native req(1) 
 
上层日志中记录了 scan done 的事件，并将此信息传递给 supplicant 
wpa_supplicant: wlan0: Event SCAN_RESULTS (3) received 
 
1.4.3.2 未扫描到 AP 
上层日志中确认了由框架端（framework）下发的扫描命令 
WifiHW  : enter -->wifi_send_command cmd=IFNAME=wlan0 SCAN TYPE=ONLY 
 
如果没有收到，建议检查框架部分以确定问题所在。如果收到，转到下一步 
内核日志中记录了扫描状态机成功启动，并向固件下发命令  
scnFsmSteps: (SCN STATE) [SCAN]TRANSITION: [IDLE] -> [SCANNING] 
 
内核日志中记录了扫描命令已经成功地传递给了固件 
kalEnqueueCommand:(INIT TRACE) EN-Q CMD TYPE[x] ID[0x03]  
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
内核日志中记录了接收到固件发送的 scan done 事件 
aisFsmRunEventScanDone 
 
内核日志中确认已经扫描到了接入点（Access Point） 
(SCN INFO) [SCN:600:D2K] Total:12/24 
 
主要确认当前日志，看是否扫描到接入点。 
 
注：如需 MTK 协助，请提供 consyslog， mobileLog， netlog 以及 sniffer log。抓取 sniffer log 的个人电脑需先与设备
同步时间，同时需提供双方 IP 地址及 MAC 地址。如果存在与 BT 2.4G 共存的情况，请同时提供 picus log (需标注清
楚问题时间点). 
 
1.4.4 STA Connect 终端设备连接 
1. 检查 connect policy，过滤条件为: mtk_cfg80211_connect 
mtk_cfg80211_connect:(REQ INFO) [wlan] mtk_cfg80211_connect 00000000e0a61a62 61 
auth_type=0 flags=0x40 wlanoidSetConnect:(INIT INFO) ucBssIndex 0, ssid test_ap, bssid 
00:00:00:00:00:00, bssid_hint ce:84:f6:15:4f:4d, conn policy 4, disc reason 4, freqInMHZ 
5805 
 
2. 检查 AIS（Adaptive Internet Systems）状态流程是否正常，过滤条件为(AIS STATE) 
aisFsmSteps:(AIS STATE) [AIS0][0] TRANSITION: [IDLE] -> [IDLE] 
aisFsmSteps:(AIS INFO) eReqType=1 
aisFsmSteps:(AIS STATE) [AIS0][0] TRANSITION: [IDLE] -> [SEARCH] 
aisFsmSteps:(AIS STATE) [AIS0][0] TRANSITION: [SEARCH] -> [REQ_CHANNEL_JOIN] 
aisFsmSteps:(AIS STATE) [AIS0][0] TRANSITION: [REQ_CHANNEL_JOIN] -> [JOIN] 
aisFsmSteps:(AIS STATE) [AIS0][0] TRANSITION: [JOIN] -> [NORMAL_TR] 
 
3. 检查 SAA（Service Advertisement Agent）状态流程是否正常，过滤条件为 (SAA STATE) 
saaFsmSteps:(SAA STATE) [SAA]TRANSITION: [AA_IDLE] -> [SAA_SEND_AUTH1] 
saaFsmSteps:(SAA STATE) [SAA]TRANSITION: [SAA_SEND_AUTH1] -> [SAA_WAIT_AUTH2] 
saaFsmSteps:(SAA STATE) [SAA]TRANSITION: [SAA_WAIT_AUTH2] -> [SAA_SEND_ASSOC1] 
saaFsmSteps:(SAA STATE) [SAA]TRANSITION: [SAA_SEND_ASSOC1] -> [SAA_WAIT_ASSOC2] 
saaFsmSteps:(SAA STATE) [SAA]TRANSITION: [SAA_WAIT_ASSOC2] -> [AA_IDLE] 
 
4. 检查是否已经连接上选定的接入点， 过滤条件为：netif_carrier_on 
 
5. 检查 AIS 状态是否切到正常的 TR， 过滤条件为， (AIS STATE) 
aisFsmSteps: (AIS STATE) [AIS0] TRANSITION: [JOIN] -> [NORMAL_TR] 
 
 
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
6. 确认 EAP 行为，  过滤条件为 EAPOL 
statsParsePktInfo:(RX INFO) <RX> EAPOL: key, M1, KeyInfo 0x008a, SSN:0 
statsParsePktInfo:(TX INFO) <TX> EAPOL: key, M2, KeyInfo 0x010a SeqNo: 2 
statsParsePktInfo:(RX INFO) <RX> EAPOL: key, M3, KeyInfo 0x13ca, SSN:1 
statsParsePktInfo:(TX INFO) <TX> EAPOL: key, M4, KeyInfo 0x030a SeqNo: 3 
 
7. 确认 DHCP 行为，过滤条件为 DHCP 
通过分析内核日志中的相关信息，可以确定 DHCP 过程中的成功与否 
确定 DHCP IPID 及 MsgType <TX/RX>都成对  
传输的状态都显示为 0 (表示成功) 
注：如需 MTK 协助，请提供 consyslog， mobileLog， netlog，以及 sniffer log。抓取 sniffer log 的个人电脑需先与设
备同步时间，同时需提供双方 IP 地址及 MAC 地址。如果存在与 BT 2.4G 共存的情况，请同时提供 picus log (需标注
清楚问题时间点). 
 
1.4.5 网络吞吐量 
• 网络吞吐量受多种因素影响，包括人为操作、环境、协议限制、硬件、软件等。收集的条件越多，解决问题的
时间越短。 
• 为避免环境因素和测试工具不对齐带来的影响，请在屏蔽室进行吞吐量测试。建议使用  Linux 环境的 iperf 工具
进行测试。 
• 在同等环境下先测试同级别设备，观察差异，替换接入点（AP）以验证现象。 
• 确保进行 CTIA 模式测试，避免在线扫描、省电模式等带来的干扰。 
• 吞吐量测试原则上应为纯 WiFi 测试，请务必关闭蓝牙（BT）。 
• 如果存在蓝牙共存情况，需明确场景，并提供 picus log。 
 
注：如需 MTK 协助，请提供 consyslog， mobileLog， netlog，以及 sniffer log。抓取 sniffer log 的个人电脑需先与设
备同步时间，同时需提供双方 IP 地址及 MAC 地址。如果存在与 BT 2.4G 共存的情况，务必说明并请同时提供 picus 
日志 (需标注清楚问题时间点). 
1.4.6 WiFi 引起的 MT6637 芯片重置 
当 WiFi 驱动程序或 WiFi 固件出现异常且无法恢复时，会触发芯片重置。在芯片重置之前，会有 coredump 机制，
用于转储异常现场的一些状态。 
在这种情况下，coredump 文件和 consyslog 是非常重要的分析工具，请务必提供。 
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
Coredump 的原理是： 
1. 驱动程序端通过 netlink 将数据传输到本地 
2. 通过本地 mmap 读取 EMI（外部内存接口）中的数据 
   
 
表 1-3. Coredump 的生成路径 
 
BT Wi-Fi 
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
 
在抓取问题之前，需检查 coredump 文件生成机制是否打开： 
1.检查 coredump 模式是否设置为 1 或 2： 
getprop persist.vendor.connsys.coredump.mode 
 
2.如果为 0，可以将其设为 1 或 2 后重启 
setprop  persist.vendor.connsys.coredump.mode 2 
 
3. 重启后，检查 coredump 模式是否设置为指定值，以及 wifi_dump 是否在运行： 
auto8676p1_64_bsp:/ # getprop | grep coredump 
getprop | grep coredump 
[persist.vendor.connsys.coredump.mode]: [2] 
 
auto8676p1_64_bsp:/ # ps -A |grep wifi_dump 
ps -A |grep wifi_dump 
system        1121     1   10788624   5268 poll_schedule_timeout 0 S wifi_dump 
WFsys 
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
4. 如果 wifi_dump 在运行，请打开 WiFi 并手动触发一次芯片重置，查看是否生成 coredump 文件： 
auto8676p1_64_bsp:/ # echo 0xDB9DB9 > /proc/driver/conninfra_dbg 
auto8676p1_64_bsp:/ # echo 0x1 > /proc/driver/conninfra_dbg 
 
查看是否有生成 coredump 文件： 
auto8676p1_64_bsp:/ # ls data/vendor/connsyslog/wifi 
ls data/vendor/connsyslog/wifi 
combo_t32_20240602073036.CI_M  combo_t32_20240602073036._ROM 
combo_t32_20240602073036.MDLM  combo_t32_20240602073036.cmm 
combo_t32_20240602073036.SRAM  combo_t32_20240602073036.emi 
combo_t32_20240602073036.WDLM  combo_t32_20240602073036_issue_info.xml 
combo_t32_20240602073036._ILM  combo_t32_20240602073036_mcif.emi 
 
5. 如果可以顺利生成 coredump 文件，则可以开始抓取问题日志了。 
抓到问题后，除了 debuglogger，请同步提供 coredump 文件，如 AEE 有生成 db 文件，也请同步提供。 
 
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
MT8676 Android WiFi 
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
# SRC0176 MT8676_SCP_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_SCP_User_Manual_V1.0.pdf

SHA-256：286280b150671c80d5cd72bbd5f9bc5a8235d41334253474eab7efab1f634ce0

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0176.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 SCP 
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
MT8676 SCP 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 日期 
1.0 2024-08-12 纵华宇 正式版本 
 
  
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
MT8676 SCP 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 5 
表格目录 ··········································································································································································· 6 
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
3.2 编译命令 ································································································································································ 13 
 独立编译 ···················································································································································· 13 
 基于安卓软件包编译································································································································· 13 
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
MT8676 SCP 
User Manual 
Confidential B 
6.3 在 SCP 端获取保留的 DRAM 区域 ························································································································ 27 
6.4 将 DRAM 地址从 AP 视图重映射到 SCP 视图 ······································································································ 27 
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
8.2 日志记录 ································································································································································ 39 
8.3 串口········································································································································································ 40 
8.4 ADB Logcat ····························································································································································· 41 
8.5 异常日志分析 ························································································································································ 43 
 Trace Buffer ················································································································································· 44 
8.6 核心转储 ································································································································································ 45 
 LLDB 基本命令············································································································································ 47 
8.7 性能评估和运行记录 ············································································································································ 50 
 性能评估 ···················································································································································· 50 
 运行记录 ···················································································································································· 51 
9 地址检测器 ····························································································································································· 58 
9.1 ASAN 使用方法 ······················································································································································ 58 
9.2 如何将代码移动到 DRAM····································································································································· 60 
10 附录································································································································································· 62 
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
MT8676 SCP 
User Manual 
Confidential B 
10.1 常见问题及解决方法 ············································································································································ 62 
 Malloc 失败················································································································································· 62 
 非对齐访问 ················································································································································ 63 
10.2 代码大小限制 ························································································································································ 64 
 代码大小检查工具的使用 ························································································································· 64 
10.3 Scp_Region_Info 架构 ············································································································································ 65 
10.4 SCP 恢复机制 ························································································································································· 66 
 SCP 恢复流程 ············································································································································· 66 
 恢复通知流程 ············································································································································ 67 
11 用户问答列表 ················································································································································· 69 
11.1 如何扩大 DRAM 区域代码 ··································································································································· 69 
附件一 附加条款 ····························································································································································· 70 
 
图片目录 
图 1-1. MTK 23P SCP 架构 ························································································································································· 8 
图 1-2. MTK MT8676 SCP 软件架构 ·········································································································································· 9 
图 4-1. SCP 启动流程框图 ······················································································································································· 14 
图 5-1. Tinysys IPI 通用架构 ···················································································································································· 15 
图 8-1. MTK Logger ·································································································································································· 40 
图 8-2. 串口工具设置 ······························································································································································ 41 
图 8-3. 禁用 mobile 日志 ························································································································································ 42 
图 8-4. ADB logcat 输出 ··························································································································································· 42 
图 8-5. 性能评估日志示例 ······················································································································································ 51 
图 8-6. 飞行记录控制台模式示例 ·········································································································································· 53 
图 8-7. 操作方法······································································································································································ 54 
图 8-8. 运行记录的 GUI 显示模式 ·········································································································································· 55 
图 8-9. 详细信息显示 ······························································································································································ 55 
图 8-10. 任务被唤醒的事件 ···················································································································································· 56 
图 8-11. 队列事件的示例 ························································································································································ 56 
图 8-12. 队列事件的详细信息 ················································································································································ 56 
图 8-13. 软件定时器示例 ························································································································································ 56 
图 8-14. 临界区示例································································································································································ 57 
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
MT8676 SCP 
User Manual 
Confidential B 
图 8-15. 中断服务程序示例 ···················································································································································· 57 
图 8-16. OS 时钟节拍示例 ······················································································································································ 57 
图 10-1. 内存工具报告 ···························································································································································· 64 
图 10-2. SCP 重置流程 ···························································································································································· 66 
 
表格目录 
表 1-1. 硬件规格表···································································································································································· 7 
表 1-2. 架构规格表·································································································································································· 10 
表 6-1. 标准 DRAM 访问流程 ················································································································································· 24 
表 6-2. 默认重映射规则表 ······················································································································································ 28 
表 7-1. EINT 和 GPIO 的映射引脚名称 ··································································································································· 36 
表 7-2. GPIO 控制寄存器表 ···················································································································································· 37 
表 8-1. PRINTF 使用场景 ························································································································································· 39 
表 8-2. UART 引脚名称 ···························································································································································· 40 
表 8-3. 编译器选项和定义 ······················································································································································ 50 
表 8-4. 编译器选项·································································································································································· 51 
表 8-5. Flight Record 定义 ······················································································································································· 52 
表 9-1. 编译器选择和定义 ······················································································································································ 58 
表 9-2. 异常类型表·································································································································································· 58 
 
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
MT8676 SCP 
User Manual 
Confidential B 
1 概述 
系统协处理器（SCP）是一个子系统，设计用于在系统处于低功耗状态时执行始终开启的任务。  
1.1 硬件架构 
SCP 由专用处理器、SRAM、DMA 和外设（如 I2C、GPIO）组成。自 MT6853/6885 以来，我们引入了内部 DSP 和新
架构，使得始终开启的应用程序能够以更低的功耗运行并获得更好的性能。  
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
MT8676 SCP 
User Manual 
Confidential B 
 名称 MT6897 
DMA 8 channels (0&1 reserved for I2C) 
VoW I/F 3-mic 
Operating Frequency 800MHz@Vscp 0.75V 
Performance 
(CoreMark@Vmin)  TBD 
Power Efficiency  
(CoreMark/mW) TBD 
 
  
图 1-1. MTK 23P SCP 架构 
  
mbox mbox mbox mbox mbox 
VoW 
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
• 日志记录– 详见第 8.2 节 
• SCP 恢复机制 – 详见第 10.4 节 
 
图 1-2. MTK MT8676 SCP 软件架构 
 
  
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
MT8676 SCP 
User Manual 
Confidential B 
1.3 小结 
表 1-2. 架构规格表 
Item Value 
Platform mt6897 
Project $PROJECT 
Linux version 6.1 
FreeRTOS version 10.1.0.1 
ISA  RV55-NN 
L2 TCM 2MB 
 
  
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
MT8676 SCP 
User Manual 
Confidential B 
2 源代码树 
SCP 源代码树包括引导加载程序（即 LK）、Linux 内核和 FreeRTOS。列举如下: 
2.1 LK 引导加载程序 
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/common/scp 
 Linux 内核驱动 
• SCP driver path 
kernel/kernel_device_modules-6.1/drivers/misc/mediatek/scp 
• SCP  DTS path 
kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/mt6897.dts 
2.2 FreeRTOS Tree 
• RTOS Kernel 
vendor/mediatek/proprietary/tinysys/kernel/FreeRTOS_v10.1.0.1 
• Platform and peripheral drivers 
vendor/mediatek/proprietary/tinysys/scp 
vendor/mediatek/proprietary/tinysys/common 
• Libraries 
vendor/mediatek/proprietary/tinysys/scp/middleware 
• Toolchain 
prebuilts/clang/md32rv/linux-x86/CodeLine_212 
  
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
MT8676 SCP 
User Manual 
Confidential B 
3 构建系统 
在编程之前，开发人员可能想知道如何使用基本的 SCP 配置进行编译。本章将展示配置文件的位置和如何通过命
令生成 SCP 镜像。 
3.1 配置文件 
 LK 引导加载程序 
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/meidatek/mt6897/rules.mk 
• MODULES_DEP += platform/$(PLATFORM)/common/scp/RV 
 Linux 内核驱动 
Kernel/kernel_device_modules-6.1/arch/arm64/configs/mgk_64_k61_defconfig 
• 启用或禁用 SCP 驱动程序: CONFIG_MTK_TINYSYS_SCP_SUPPORT 
• 切换功能，例如语音唤醒和传感器中心等功能的开关 
 FreeRTOS 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/platform.mk 
• 平台的默认配置额外的 CFLAGS 
• 额外的 LDFLAGS 
驱动程序/中间件的 C 对象文件和包含路径
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/project.mk 
• 项目配置 
通过在 platform.mk 文件中覆盖选项来自定义项目  
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
MT8676 SCP 
User Manual 
Confidential B 
3.2 编译命令 
有多种方式编译 SCP 镜像，基于 ALPS SW packages，我们列举两中编译方法。 
 
 独立编译 
这种方法可以快速编译 SCP 镜像，在开发时很有用。  
• 编译后输出路径:  ./tinysys_out 
• 编译指令模板: PROJECT=XXX TARGET_BOARD_PLATFORM=XXX BUILD_TYPE=[release, debug] make 
• 示例: 
$ cd vendor/mediatek/proprietary/tinysys/scp 
$ PROJECT=auto8676p1_64_bsp TARGET_BOARD_PLATFORM=mt6897 BUILD_TYPE=debug make -j24 
 
 基于安卓软件包编译 
• 编译后输出路径:  
out/target/product/$PROJECT/obj/TINYSYS_OBJ/tinysys-scp_intermediates/RV55_A/scp 
• 示例: 
$ make tinysys-scp -j24 
$ mmm vendor/mediatek/proprietary/tinysys/scp -j24 
$ cd vendor/mediatek/proprietary/tinysys/scp && mm -j24 
$ mmm vendor/mediatek/proprietary/tinysys/scp:tinysys-scp -j24 
 
3.3 镜像布局 
• EMMC/UFS 存储器中存在的两个分区：scp1 和 scp2 
– scp1: main and active partition 
– scp2: backup for AB system 
• Image: scp.img: 
– tinysys-scp-RV55_A.bin: firmware/data located in SRAM 
– tinysys-scp-RV55_A.elf: elf with symbol, for debug purpose 
– tinysys-scp-RV55_A_DRAM.bin: firmware/data located in DRAM 
 
  
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
MT8676 SCP 
User Manual 
Confidential B 
4 启动顺序 
在 SCP 镜像准备好之后，我们需要了解镜像是如何加载到 SRAM/DRAM 中以及 SCP 是如何启动运行的。整个流程
由 LK 引导加载程序、Linux 内核和 SCP 固件共同完成，具体如下： 
• LK 引导加载程序：
(vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/mediatek/common/scp/scp.c) 
– 为 SCP 镜像分配永久性 DRAM 内存加载/验证 SCP 镜像设置 EMI MPU（AP 只读） 
• 内核 
– 初始设置(mbox/ipi/logger/…) 
– 启动 SCP 
• SCP 
– 加载程序 ：
(vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/boot55.S) 
▪ 将 SCP 镜像加载到 SRAM 跳转到 FreeRTOS 
– FreeRTOS 
(vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/src/main.c) 
▪ 驱动程序初始化设置 MPU 
 
图 4-1. SCP 启动流程框图 
  
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
  vendor/mediatek/proprietary/tinysys/scp/drivers/RV55 _A/mt6897/mbox/ipi_id.h 
  vendor/mediatek/proprietary/tinysys/scp/drivers/RV55 _A/mt6897/mbox/ipi_table.h 
  vendor/mediatek/proprietary/tinysys/scp/drivers/RV55 _A/mt6897/mbox/mbox_pin.h 
 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

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
MT8676 SCP 
User Manual 
Confidential B 
5.2 内核端的使用 
i. 在scp.h 和 mt6897.dts 文件中添加新的 IPI ID 和 pin table 
• 文件描述 
– scp.h: 定义 IPI（ID 必须与 SCP 端同步） 
– mt6897.dts: 定义引脚表（引脚表必须与 SCP 端同步） 
• 路径 
kernel-6.1/drivers/misc/mediatek/scp/include/scp.h 
kernel-6.1/arch/arm64/boot/dts/mediatek/mt6897.dts 
 
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
kernel/kernel_device_modules-6.1/drivers/misc/mediatek/scp/rvmt6897/scp_helper.h 
 
• 返回值 
– 保留内存的起始地址，或 
– 0x0：表示没有映射 
 
在获取物理地址后，开发人员必须通过 IPI 将其传递给 SCP， 如章节 5.2 所述。 
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
MT8676 SCP 
User Manual 
Confidential B 
6.3 在 SCP 端获取保留的 DRAM 区域 
为了保持安全状态并避免恶意的 IPI 消息，SCP_DRAM_REGION 被引入以直接提供 SCP 端保留的 DRAM 区域信息。
以下 API 用于通过给定的 ID 获取物理地址和大小，这些 ID 在章节 6.1 中声明。 
• API 
bool scp_get_reserve_mem_by_id(uint32_t id, void **ap_addr, size_t *size) 
• 头文件路径 
vendor/mediatek/proprietary/tinysys/scp/drivers/common/dram_region_mgmt/scp_dram_region.h 
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
vendor/mediatek/proprietary/tinysys/scp/drivers/common/dma/inc/dma_api.h 
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
vendor/mediatek/proprietary/tinysys/common/drivers/dma/v3/inc/dma.h 
vendor/mediatek/proprietary/tinysys/scp/drivers/RV55_A/mt6897/dvfs/inc/dvfs.h 
 
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
vendor/mediatek/proprietary/tinysys/common                        /* 通用的tinysys 驱动程序 */ 
vendor/mediatek/proprietary/tinysys/scp/drivers/common  /* scp 通用的驱动程序 */                       
vendor/mediatek/proprietary/tinysys/scp/drivers/RV55_A/mt6897/drivers   /* 平台相关的驱动*/ 
 
2. 添加新的编译选项 
• 路径 
vendor/mediatek/proprietary/tinysys/scp/project/mt6897/platform/platform.mk 
 
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
MT8676 SCP 
User Manual 
Confidential B 
7.3 中断 
mt6897 SCP 支持 15 个优先级的中断，优先级数字越低，优先级越高。如果同时发生多个 IRQ，CPU 将优先处理优
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
 
• 示例 
struct INTC_IRQ INTC_IRQ_SYSTICK = {0, INTC_GRP_8, INTC_POL_HIGH}; 
 
#include “irq.h” 
 
int ret; 
ret = intc_irq_request(&INTC_IRQ_SYSTICK, test_ist, NULL); 
if (ret != 0) 
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
MT8676 SCP 
User Manual 
Confidential B 
7.4 锁 
SCP 提供了用于双核同步的自旋锁机制。 使用锁需要打开如下配置项： 
CFG_ATOMIC_PLAT_SUPPORT = yes 
 
• 路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/platform.mk 
 
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
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/inc/mtk_atomic.h 
 
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
vendor/mediatek/proprietary/tinysys/common/drivers/dma/v3/inc/dma.h 
vendor/mediatek/proprietary/tinysys/scp/drivers/common/dma/dma_api.h 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/mt_dma.h 
 
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
MT8676 SCP 
User Manual 
Confidential B 
        flag: 0 ~ 15，对应SCP 中的16 组信号量 
   Return values 
       0: 获取信号量失败 
       1: 获取信号量成功 
 
 
• 头文件路径 
– Kernel/kernel_device_modules -6.1/drivers/misc/mediatek/scp/rv/scp_helper.h 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

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
MT8676 SCP 
User Manual 
Confidential B 
 EINT 使用  
• 路径 
tinysys/common/drivers/eint/v02/src 
 
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
8.2 日志记录 
MTK Logger 是一个 APK，它将各种日志记录到存储设备（如 SD 卡）中。启动它并启用 SCP 日志后，可以在以下路
径获取 SCP 日志： 
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
MT8676 SCP 
User Manual 
Confidential B 
• 日志路径: /mobilelog/APLog_XXXX_XXXX_XXXXXX/scp_log_XXXX.curf  
 
图 8-1. MTK Logger 
8.3 串口 
• 输出引脚 
SCP 有两个个专用的 UART。请确保 PC 的 UART 端口连接到引脚名称 URXD1 和 UTXD1，如下表 8-2 所示，并设置软
件编译选项。 
表 8-2. UART 引脚名称 
引脚名称 功能 
URXD1 SCP UART RX 
UTXD1 SCP UART TX 
 
• 软件编译选项 
– 路径：Configure flags  
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/platform.mk 
CFG_UART_SUPPORT = yes  /* 启用UART，默认No */ 
CFG_MTK_SCPUART_SUPPORT = yes /*  使用SCP UART，默认Yes */ 
 
 
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
MT8676 SCP 
User Manual 
Confidential B 
• UART 终端设置 
– 波特率：921600 
图 8-2. 串口工具设置 
8.4 ADB Logcat 
ADB Logcat 可以直接从 ADB 或 UART 控制台输出 SCP 日志。 
 
• 使用步骤： 
1. 确保 MTK Logger 中的 SCP 日志已禁用。 (如图 8-3 所示) 
2. 进入 shell 并输入命令 echo 1 > /sys/class/misc/scp/scp_mobile_log 
3. 输入命令： while true; do cat /dev/scp;done 日志将直接输出,如 图 8-4 所示。 
 
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
MT8676 SCP 
User Manual 
Confidential B 
 
图 8-3. 禁用 mobile 日志 
图 8-4. ADB logcat 输出 
  
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
MT8676 SCP 
User Manual 
Confidential B 
8.5 异常日志分析 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 44

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 44 
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
MT8676 SCP 
User Manual 
Confidential B 
8.6 核心转储 
如果 AP 检测到 SCP 没有响应 IPI 或发生 SCP 看门狗事件，核心转储流程将自动启动。核心转储是 SCP 内存和处理
器寄存器（如程序计数器、堆栈指针、返回地址等）的快照，并尽可能多地保存系统信息（如系统寄存器、缓存
内容）。这些信息使得在故障发生前恢复系统状态成为可能。  
默认情况下，LLDB 被用于支持核心转储调试。有关 LLDB 的详细信息，请参考 LLDB 官网： https://lldb.llvm.org/. 
• LLDB 路径 
– LLDB 可以在alps prebuilts 文件夹中找到, 路径为 prebuilts/clang/md32rv/linux-x86/lldb_v3. 
• 获取核心转储 
– SCP 核心转储将命名为 SYS_SCP_DUMP，位于 SCP EE DB（例如，ex.db.00.EE.dbg）中。如果未找到，请检
查 EE DB，确认 __exp_main.txt 中的异常类型应为scp。 
• 开始调试 
• 输入以下命令，初始日志如下所示 
$ prebuilts/clang/md32rv/linux-x86/lldb_v3/coredump_cmd.sh mt6897 tinysys-scp-RV55_A.elf SCP_COREDUMP 0 
 
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
MT8676 SCP 
User Manual 
Confidential B 
如果 LLDB 工具意外启动： 
1. 请确认 prebuilts/clang/md32rv/linux-x86/lldb_v3 文件结构未被修改。 
2. 请检查相关日志文件 debug_prosim.log 和 debug_ocd.log。如果未找到 libprofile.so.x.x.x 库，请在 
coredump_cmd.sh 中的 PROSIM 启动命令之前添加以下命令。 
 
 
3. 使用 coredump_cmd.sh 时会启动三个工具（LLDB、Openocd、PROSIM），工具之间通过 TCP/IP 协议进行通
信。如果远程使用 LLDB 相关工具，请确认 TCP/IP 连接端口未被防火墙阻止。 
 
  
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$MRV_PDK_PROSIM_HOME 
 
#add above this command 
$PROSIM_EXE $PROSIM_OPT   
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
MT8676 SCP 
User Manual 
Confidential B 
8.7 性能评估和运行记录 
PBFR 是一种性能分析工具，可以监控 CPU 使用情况。它可以分为两个部分： 性能评估和运行记录。 
性能评估包含每个任务的负载、缓存未命中、停顿和整个系统负载的信息。运行记录可以在一段时间内记录  CPU 
trace。 
 性能评估 
这里将介绍如何使用性能预算来监控任务负载。 
 
• 启用性能评估: 
– 设置配置和定义以启用性能评估。 
▪ 路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/inc/FreeRTOSConfig.h 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/ mt6897/platform/platform.mk 
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
MT8676 SCP 
User Manual 
Confidential B 
▪ pbfr_report_loadinfo(0)：报告负载信息 
▪ pbfr_stop_loadinfo(0)：停止记录负载信息 
 
• 日志解释： 
图 8-5. 性能评估日志示例 
 运行记录 
运行记录是一种调试工具，可以在系统崩溃时记录最后的事件。这里将介绍如何使用飞行记录来监控  CPU 跟踪。 
 
• 启用运行记录： 
– 设置配置并打开定义以获取运行记录。platform.mk 中的配置用于启用运行记录，而 FreeRTOSConfig.h 
中的定义表示可以记录的事件。 
 
• 路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/platform.mk 
表 8-4. 编译器选项 
# 编译器选项 解释 
 CFG_PBFR_SUPPORT 
PBFR 主功能控制选项  
Enable: Yes 
Disable: No 
 
• 路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/inc/FreeRTOSConfig.h 
 
 
 
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 52

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 52 
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
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/Setting.ini 
 
• 使用方法: 
– 将 tinysys-scp-RV55_A.elf 和 SCP coredump 复制到分析文件夹中。 
▪ 分析文件夹: alps/prebuilts/clang/md32rv/linux-x86/lldb_v3 
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
MT8676 SCP 
User Manual 
Confidential B 
• 日志解释： 
– 控制台模式： 
▪ 控制台模式将在 SCP_debug.txt 中显示，它显示系统崩溃前记录的事件，并按类型分类显示事件。
Record[X] 表示这是倒数第 X 个事件。 
 
图 8-6. 飞行记录控制台模式示例 
  
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
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 54

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 54 
MT8676 SCP 
User Manual 
Confidential B 
• GUI 模式： 
– 加载步骤 
1. GUI 网站: chrome://tracing/ 
2. 加载 json 文件: flrec.json (分析文件夹中创建) 
– 使用说明： 
▪ 使用键盘 W/S 缩放，A/D 左右移动，或切换按钮以更改鼠标模式。 
 
图 8-7. 操作方法 
  
 
选择事件 
移动界面 
放大/缩小 
选择时间范围 
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
MT8676 SCP 
User Manual 
Confidential B 
– 总览：  
▪ GUI 显示最后的事件流，记录六种类型的事件：任务、队列事件、软件定时器、关键部分、 ISR 事件和操
作系统时钟。 
图 8-8. 运行记录的 GUI 显示模式 
 
▪ 底部的消息显示事件的开始时间和持续时间。 
  
图 8-9. 详细信息显示 
  
事件名称 (任务、队列、临界区…) 
 记录[0]的开始时间 
真实时间 = 记录[0] + 开始时间 
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
MT8676 SCP 
User Manual 
Confidential B 
– 任务 
▪ 任务事件显示任务的唤醒时间和执行时间。 
 
图 8-10. 任务被唤醒的事件 
– 队列 
▪ 队列事件显示在执行事件的任务下方，点击事件可以在信息栏中查看队列类型 。 
 
 
图 8-11. 队列事件的示例 
 
 
 
图 8-12. 队列事件的详细信息 
– 软件定时器 
▪ 软件定时器显示回调函数的执行时间。 
 
图 8-13. 软件定时器示例 
– 临界区 
▪ 通过对应的临界区向上，可以找到在临界区中运行的任务。 
 
 
唤醒事件 
“PRINCIPAL”任务的队列事件 
点击以获取队列事件的类型 
软件定时器的回调函数 
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
MT8676 SCP 
User Manual 
Confidential B 
 
 
图 8-14. 临界区示例 
– 中断服务程序（ISR） 
▪ ISR 显示中断服务例程的执行时间和 ISR 编号。 
 
图 8-15. 中断服务程序示例 
– OS 时钟节拍 
▪ OS 时钟显示操作系统计时器滴答的时间。 
 
 
 
图 8-16. OS 时钟节拍示例 
 
  
当任务 “PRINCIPAL” 正在运行时的临界区 
ISR 事件 
OS 时钟节拍事件 
ISR 数量 
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
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/$Project/project.mk 
vendor/mediatek/proprietary/tinysys/scp/build/config.mk 
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
MT8676 SCP 
User Manual 
Confidential B 
# 异常类型 描述 
6 ASAN_HEAP_USE_AFTER_FREE 使用已释放的堆内存 
 
 
 
 
 
– 问题处理：栈下溢 
 
 
– 问题处理：全局变量上溢 
 
 
 
 
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
1. 修改scp/project/RV55_A/mt6897/platform/platform.mk, 扩大堆大小，例如 80*1024  
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
MT8676 SCP 
User Manual 
Confidential B 
10.2 代码大小限制 
mt6897 总 SRAM 大小为 2MB，实际的 SCP SRAM 大小可以通过检查符号 _end 来确定。 
剩余的 SRAM 大小： 
mt6897: 0x300000 - _end 
 
在 mt6897 中, 我们可以在 project/RV55_A/mt6897/platform/link.ld.c 文件中将 SRAM 区域长度设置为 2MB 
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
vendor/mediatek/proprietary/tinysys/common/tools/memoryReport.py 
• 设置配置文件路径 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/Setting.ini 
• 配置文件格式（setting.ini） 
[TinySys-SCP] 
$File_Name: $Main_feature: $Sub_feature 
[SCP-MT6985] 
$Main_feature : Max_code_size 
$Sub_feature : Max_code_size 
--------------------------------------------------------------- 
* File_name: Full file path or Partial file path (Ex:middleware/contexthub/perf) 
* Main feature, (Ex: Sensor, Audio), the main feature that this file belongs to 
* Sub feature, (Ex: gyro, pedometer), the sub feature that this file belongs to 
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
MT8676 SCP 
User Manual 
Confidential B 
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
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/mediatek/mt6897/common/scp/scp_
plat_priv.h 
• Kernel 头文件路径： 
kernel/kernel_device_modules-6.1/drivers/misc/mediatek/scp/rv/scp_helper.h 
• SCP 头文件路径： 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/inc/main.h 
• SCP 头文件路径： 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897 /platform/boot55.S 
 
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
#endif                                                                                      
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
MT8676 SCP 
User Manual 
Confidential B 
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
 
图 10-2. SCP 重置流程 
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
MT8676 SCP 
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
    } 
    scp_register_notify(&app_notifier); 
} 
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
MT8676 SCP 
User Manual 
Confidential B 
 
注意： 
1. 必须注册通知链，因为在恢复期间 scp_ipi_send() 可能会返回错误。 
2. 必须应用错误处理流程： 
– 在接收到 SCP_EVENT_STOP 后立即停止调用 scp_ipi_send() 
– 在接收到 SCP_EVENT_READY 后恢复调用 scp_ipi_send() 
 
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
MT8676 SCP 
User Manual 
Confidential B 
11 用户问答列表 
11.1 如何扩大 DRAM 区域代码  
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
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/link.ld.c 
MEMORY { 
    … … … 
    dram        :   ORIGIN = 0x00200000, LENGTH = 0x00100000 
    … … … 
 
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
 
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0177 Thumbs.db

来源：8676/MT8676软件资料/User Manual/Android/Chinese Version/Thumbs.db

SHA-256：d1569e7f8fbd324718368b46b81e809abc61ccb36ce91c5798b288cfb1b6015b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0177.html)

资料目录中的二进制辅助文件，不作为架构正文；保留来源标识。

此条没有可靠的提取正文，请核对站内来源页及原件。

---
# SRC0178 MT8676_Android_AEE_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_AEE_User_Manual_V1.0.pdf

SHA-256：5d4fbbe82209404645b9c235483d97d1c4625b25ef0aea0b1d57b556afee29bb

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0178.html)

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
MT8676 Android AEE 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 Scope ····························································································································································· 4 
 Definitions and Abbreviations ·································································································································· 4 
 Definition ······················································································································································ 4 
 AEE ·················································································································································· 4 
 Abbreviation·················································································································································· 4 
 Architecture Overview ············································································································································· 5 
 DB Type Introduction ···································································································································· 5 
 DB Type Introduction ···································································································································· 5 
 Architecture Overview ············································································································································· 5 
 How to Enable AEE ········································································································································ 6 
 Set AEE Mode ················································································································································ 6 
 Set Max DB Count ········································································································································· 6 
 Switch Native Exception Flow ······················································································································· 7 
 AEE UT Test ··················································································································································· 7 
 How to Use DB ························································································································································· 7 
 Pull DB ··························································································································································· 7 
 Download GAT Tool ······································································································································· 7 
 Extract DB······················································································································································ 8 
 Analyze DB Files ············································································································································ 8 
Exhibit 1 Terms and Conditions ········································································································································ 10 
 
List of Figures 
Figure 1-1. Download GAT tool from MediatekOnline ··············································································································· 8 
Figure 1-2. MediatekDBViewer tool UI······································································································································· 8 
Figure 1-3. Analyze DB ······························································································································································· 9 
Figure 1-4. Launch GDB ······························································································································································ 9 
 
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
MT8676 Android AEE 
User Manual 
Confidential B 
1 AEE 
 Overview 
 Brief Introduction 
This document provides the guidelines for using the AEE feature to debug exceptions on devices. 
 
 Scope 
This document is applicable to MediaTek Android system. 
 
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
MT8676 Android AEE 
User Manual 
Confidential B 
 Architecture Overview 
 DB Type Introduction 
AEE generates different types of DB as shown in Table 1-2. 
 
Table 1-2. DB type information 
Layer Type Level When DB is Generated?  
Java 
JE system server  =>  FATAL 
Other JE => EXCEPTION Java Exception 
ANR Exception Application no response 
SWT Fatal System server watchdog timeout 
Native 
NE netd/surfaceflinger =>  FATAL 
Other NE => EXCEPTION 
Userspace processes receive an exception signal  
(SIGILL/SIGABRT/SIGBUS/SIGFPE/SIGSEGV).  
System API dump Exception Userspace processes call AEE-provided interface.  
Kernel  
KE 
Fatal 
Kernel panic occurs.  
HWT Kernel watchdog timeout occurs.  
HW Reboot Watchdog timeout occurs and the device hangs for 
a long time.  
Kernel API dump Exception Kernel driver calls AEE-provided interface.  
External EE Exception External IC exception occurs.  
 
 DB Type Introduction 
After exception happens, AEE DB will be stored to /data/aee_exp. Those *.dbg files are DB files.  
e.g. 
--db.00.SystemAPI  
--db.00.SystemAPI.dbg: This is a DB file which has the .dbg suffix.  
--ZZ_INTERNAL: This file simply describes the exception.  
--db.01.NE  
--db.01.NE.dbg  
--ZZ_INTERNAL 
 
 Architecture Overview 
All AEE configurations are in rc files:  
vendor/mediatek/proprietary/external/aee/config_external/init.aee.customer.system.rc 
vendor/mediatek/proprietary/external/aee/config_external/init.aee.customer.vendor.rc 
 
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
 How to Enable AEE 
AEE feature will be disabled by default on customer side.  
If customer needs to enable AEE, please set MTK_LOG_CUSTOMER_SUPPORT = yes in following makefile: 
device/mediateksample/<project>/ProjectConfig.mk 
device/mediatek/vendor/<project>/VendorConfig.mk  
device/mediatek/system/<project>/SystemConfig.mk 
 
 Set AEE Mode 
By default, AEE mode for customer eng is 3, AEE mode for user/userdebug is 4.  
When AEE mode is 3, it can capture both fatal and normal exception DB, but when AEE mode is 4, only fatal exception DB 
can be captured. 
If customers want to switch AEE mode, they need to modify rc file and use adb shell aee_v2 -m <mode_num> to set 
AEE mode. 
[How to modify rc file] 
Modify vendor/mediatek/proprietary/external/aee/config_external/init.aee.customer.vendor.rc by 
setting the property ro.vendor.aee.enforcing to "no". Add the following two lines: 
 
``` 
on init 
    setprop ro.vendor.aee.enforcing no 
``` 
 
[how to switch AEE mode by adb command] 
adb shell aee_v2 -m <mode_num> 
e.g. 
adb shell aee_v2 -m 3     ---  Switch AEE mode to 3 
adb shell aee_v2 -m 4     ---  Switch AEE mode to 4 
 
 Set Max DB Count 
According to DB types described in Table 1-2, the DB level includes Fatal and Normal.  
The default max count of Fatal DB is 8 and the default max count of Normal DB is 8. 
Users can modify rc file to change the max count.  
Modify vendor/mediatek/proprietary/external/aee/config_external/init.aee.customer.vendor.rc by 
setting the property . 
e.g. 
on init  
    setprop persist.vendor.aee.db.count 15 
    setprop persist.vendor.aee.fatal_db.count 15 
    setprop persist.vendor.aeev.db.count 15 
    setprop persist.vendor.aeev.fatal_db.count 15 
 
 
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
 Switch Native Exception Flow 
The MediaTek platform has two different processing procedures for Native Exception. 
MTK direct-coredump NE flow:  
When a Native Exception occurs, the aee_core_forwarder process starts through kernel to collect the coredump file and 
notifies the AED daemon to generate the NE DB file, which includes process_coredump. However, the corresponding 
Google native debuggerd mechanism will be disabled. 
 
Google crash_dump/tombstone flow: 
If users are accustomed to using the native tombstone mechanism to analyze exceptions, they can switch to the 
crash_dump process by modifying the rc file: 
vendor/mediatek/proprietary/external/aee/config_external/init.aee.customer.system.rc 
on property:persist.vendor.aeev.core.direct=enable 
    setprop debug.debuggerd.disable 0 
 
 AEE UT Test 
Java layer (JE): 
am crash $(pidof com.android.settings | awk '{print $1}' ) 
 
Native layer (NE): 
kill -11 $(pidof netd | awk '{print $1}') 
 
Kernel layer (KE): 
echo c > /proc/sysrq-trigger 
 
External Module (EE): 
cat /proc/aed/generate-ee  (CONFIG_MTK_AEE_UT kernel config should be enabled) 
 
 How to Use DB 
 Pull DB 
In the Android system, according to the division between system and vendor, the DB files will be saved in the 
/data/aee_exp or /data/vendor/aee_exp directory. 
System layer exception DB (JE/NE/SWT/SystemAPI) will be stored in /data/aee_exp. 
Vendor layer exception DB (KE/HWT/HWR/KernelAPI/EE) will be stored in /data/vendor/aee_exp. 
 
 Download GAT Tool 
Please search GAT on MOL to download the latest version, as shown in Figure 1-1. 
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
 
Figure 1-1. Download GAT tool from MediatekOnline 
 
 Extract DB 
Open MediatekDBViewer in GAT tool. If your PC is running in a Windows operating system, please execute:  
GAT(Official)_ALPS\GAT_exe_v4.2034.3\gat-win32-x86_64-4.2034.3.c\gat-win32-x86_64-
4\tools\MediatekDBViewer.bat. 
 
Figure 1-2. MediatekDBViewer tool UI 
 
Click on the “Select DB File” button shown in Figure 1-2,  then select the DB file (*.dbg) you want to analyze and click 
“start” to begin extraction. All the extracted files will be listed on the left side of the UI. 
The basic file is __exp_main.txt which describes the basic information of the exception. 
 
 Analyze DB Files 
1. For NE/KE/HWT issue:  
Method 1:  
Click “Set Symbols path” and “Analyze” (as shown in Figure 1-3), and then the generated out.json file will show 
detailed analysis content, including calltrace information. 
 
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
 
Figure 1-3. Analyze DB 
 
Method 2:  
Click “Set Symbols path” and “Launch GDB” (as shown in Figure 1-4), GDB window will show up, then you can get 
calltrace information by using bt command in GDB. 
 
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

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Android AEE 
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
# SRC0179 MT8676_Android_AI_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_AI_User_Manual_V1.0.pdf

SHA-256：27c28fa1cf199443eea0a0e1591ec4bdc7aef132ee12e98af595a7846012e2f7

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0179.html)

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
Version History 
Version Date Author Description 
1.0 2024-09-19 Maolei Wang Official release 
 
  
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
 NeuroPilot Development Guide ···················································································································· 5 
 Configuration/Customization Guideline ··················································································································· 6 
 Explanation of NeuroPilot Debug Commands ······························································································ 6 
 The APU Trace Tool Captures the Trace ········································································································ 6 
 Information about the Operators Supported by Specific MediaTek Platform’s NPU ··············································· 8 
Appendix 1 Additional Terms ··········································································································································· 10 
 
 
List of Figures 
Figure 1-1. AI architecture ·························································································································································· 4 
Figure 1-2. NeuroPilot online document ···································································································································· 5 
Figure 1-4. APU HW status ························································································································································· 7 
Figure 1-5. APU frequency status ··············································································································································· 8 
Figure 1-6. Relationship of supported operators ······················································································································· 8 
 
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
MT8676 Android AI 
User Manual 
Confidential B 
1  AI 
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
 
 
Figure 1-1. AI architecture 
 
Currently, the MT8676 software stack is shown in Figure 1-1, and it mainly includes the following layers: 
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
 
 
Figure 1-2. NeuroPilot online document 
 
After applying for access to NeuroPilot, go to https://neuropilot.MediaTek.com/ -> Software Development -> log in to your 
account -> under “NeuroPilot SDK & Document”, select the target NeuroPilot {version} -> Latest Version NeuroPilot Online 
Doc -> 2. Getting Started Guide -> 2.2. NeuroPilot Workflow -> 2.2.3.1. Android Development. 
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
 Configuration/Customization Guideline 
 Explanation of NeuroPilot Debug Commands 
If customers encounter an apusys error issue, please first turn on the following log switches, reproduce the problem, and 
then provide MediaTek with the complete machine log and the apusys_rv_xfile (used to decode apusys_log) on the test 
machine. The log options and retrieval paths are as follows: 
Enable NNAPI AOSP log       ：adb shell "setprop debug.nn.vlog 1" 
Enable TFlite log                    ：adb shell setprop debug.mtk_tflite.vlog true 
Enable Execution plan           ：adb shell setprop debug.neuron.runtime.ShowExecPlan true 
Enable ShowQoSInfo             ： adb shell setprop debug.neuron.runtime.ShowQoSInfo true 
Enable Kernel Log    :   adb shell "echo 15 > /sys/class/misc/apusys/log/klog" 
Enable uPLog                          ： adb shell "echo 5 > /proc/apusys_logger/log" 
Enable User Log                      ： adb shell setprop debug.apusys.loglevel 15 
Enable apusys_rv_xfile: adb pull /proc/apusys_rv/apusys_rv_xfile (used for decoding apusys_log) 
 
After turning on these required switches, a service restart is needed for the changes to take effect: 
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
 
Figure 1-4. APU frequency status 
 
 Information about the Operators Supported by Specific MediaTek 
Platform’s NPU 
 
Figure 1-5. Relationship of supported operators 
 
As shown in Figure 1-5, the operators supported by the MediaTek platform NPU are divided into 3 levels from small to 
large: 
 
• PyTorch/TensorFlow Ops -> TFLite Ops: By using the mtk_converter tool, the original Ops in .pt or .pb models are 
converted to TFLite Ops. This mapping process will undergo initial Ops filtering to block Ops not supported by the 
platform’s NPU (HW). For a list of PyTorch/TensorFlow Ops that can be recognized and converted to TFLite Ops by the 
converter tool, please refer to the Online Document: Developer Tools -> Model Development -> Converter -> 
Converter Tool Supported Operators. 
• TFLite Ops -> NPU HW(MDLA/MVPU) Operations: By using the ncc-tflite (compiler) in neuronsdk, the converted TFLite 
model is compiled into a dla file. During this mapping process, the Specification (Restrictions) in the NPU HW 
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
MT8676 Android AI 
User Manual 
Confidential B 
Appendix 1 Additional Terms 
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
# SRC0180 MT8676_Android_Audio_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Audio_User_Manual_ V1.0.pdf

SHA-256：bc8290b990b109d0d3412712c36778d834680e0a0caff246f116298e4962c782

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0180.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Android Audio  
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Jianxin Xu Official release 
 
  
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
MT8676 Android Audio  
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 4 
1 Audio ········································································································································································· 5 
1.1 Overview ·································································································································································· 5 
 Brief Summary of Audio Feature ··················································································································· 5 
1.1.1.1 Audio Feature and Blocks ··············································································································· 5 
1.1.1.2 Audio Format Support ···················································································································· 9 
1.2 Audio SW Architecture ··········································································································································· 12 
 Audio HAL ··················································································································································· 13 
1.2.1.1 Audio HAL Playback ······················································································································ 14 
1.2.1.2 Audio HAL Record ························································································································· 15 
 ALSA Driver Architecture Overview ············································································································ 16 
 DAPM and DPCM Overview ························································································································ 17 
1.3 AAOS Volume Control ············································································································································ 18 
 Volume Config in XML ································································································································· 19 
 Volume Command Customization··············································································································· 20 
1.4 External HW Devices ·············································································································································· 20 
 MT8676 I2S Capability Support··················································································································· 20 
1.4.1.1 I2S Application ······························································································································ 23 
1.5 Mediatek Aurisys and Open DSP ···························································································································· 23 
 Overview ····················································································································································· 23 
1.5.1.1 Aurisys Structure ··························································································································· 24 
 Data Path Customization Guideline ············································································································ 25 
1.6 Kernel DTS Configuration ······································································································································· 25 
 Audio Path Configuration(AFE HW) ············································································································ 27 
 Audio Path Configuration (INT ADSP) ········································································································· 28 
1.6.2.1 XML Configuration Instructions ···································································································· 28 
1.6.2.2 mixer_target & mixer_source ······································································································· 29 
1.6.2.3 Task Attribute ································································································································ 29 
1.6.2.4 Configuration Example ·················································································································· 30 
1.7 Summary ································································································································································ 31 
1.8 Appendix ································································································································································ 31 
 MTK MOL ···················································································································································· 31 
Exhibit 1 Terms and Conditions ········································································································································ 32 
 
 
List of Figures 
Figure 1-1. MT8676 audio blocks ··············································································································································· 7 
Figure 1-2. MT6368 audio blocks ··············································································································································· 7 
Figure 1-3. Audio software architecture ·································································································································· 13 
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
MT8676 Android Audio  
User Manual 
Confidential B 
Figure 1-4. Audio software data path······································································································································· 13 
Figure 1-5. Audio HAL architecture ·········································································································································· 14 
Figure 1-6. Playback architecture ············································································································································· 15 
Figure 1-7. Record architecture ················································································································································ 16 
Figure 1-8. ALSA pcm interface ················································································································································ 17 
Figure 1-9. Audio volume control ············································································································································· 19 
Figure 1-10. Audio volume grope config ·································································································································· 19 
Figure 1-11. Devices gain config ··············································································································································· 20 
Figure 1-12. Aurisys concept ···················································································································································· 24 
Figure 1-13. Aurisys structure ·················································································································································· 25 
Figure 1-14. DTS feature list ····················································································································································· 26 
Figure 1-15. memif define ························································································································································ 26 
Figure 1-16. Audio hal pcm config ············································································································································ 27 
Figure 1-17. ADSP architecture ················································································································································ 27 
Figure 1-18. Audio path for playing music ······························································································································· 27 
Figure 1-19. Playback_3 to PMIC ·············································································································································· 28 
Figure 1-20. ADSP architecture ················································································································································ 28 
Figure 1-21. dsp task config ····················································································································································· 31 
 
List of Tables 
Table 1-1. GPIO function ·························································································································································· 21 
Table 1-2. I2S application ························································································································································· 23 
 
 
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
MT8676 Android Audio  
User Manual 
Confidential B 
1 Audio  
1.1 Overview 
This document introduces audio features such as volume control, audio frameworks, DSP audio configuration, etc. First, an 
overview of supported features and audio block diagram are provided. Then, the AAOS volume control is introduced. 
Finally, the Aurisys sound framework and DSP audio mixing configuration are introduced. 
 
 Brief Summary of Audio Feature 
1.1.1.1 Audio Feature and Blocks 
 
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-1. MT8676 audio blocks 
 
 
Figure 1-2. MT6368 audio blocks 
 
• MT8676 
– MediaTek's proprietary audio interface connects to PMIC MT6368 
– Audio Playback with MTK PMIC – MT6368 
▪ Supports 8kHz, 11.025kHz, 12kHz, 16kHz, 22.05kHz, 24kHz, 32kHz, 44.1kHz, 48kHz, 96kHz, 192kHz, 384kHz 
sample rates 
– Audio Recording with MTK PMIC – MT6368 
▪ Supports 8kHz, 16kHz, 32kHz, 48kHz, 96kHz, and 192kHz sample rates 
– Internal high resolution , high flexible HW gain in AFE interconnection…………………..(1) 
– 11 sets Inter-IC Sound Interface (I2S) 
▪ Master Output *5 (one is 8 ch) ………………………………………………………………(4) 
▪ Master Input * 5  (one  is 8 ch) ……………………………………………………………….(4) 
▪ Slave input(with SRC) ……………………………………………………………………..(3) 
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
MT8676 Android Audio  
User Manual 
Confidential B 
▪ Master Mode supports 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48, 88, 96, 176 and 192 kHz sampling rates 
▪ Slave Mode supports 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, and 48 kHz sampling rates 
▪ 16/32-bit bus width support 
▪ Philip standard and Left just 
– Sets up twosets of Pulse-Code Modulation (PCM) interfaces 
▪ Slave PCM for internal Modem*1………………………………………………………………..(5) 
▪ 16/24-bit stereo data format support 
– Sets up twosets of Enhanced Time Division Multiplexing (TDM) interfaces 
▪ Master Output *1 (up to 8 ch) ……………………………………………………………………….(8) 
– Audio codecs 
▪ MP3, AAC, AAC+, AMR-NB, AMR-WB, OGG, WAV, APE 
– Audio Post-Processing 
▪ BesLoudness 
▪ ACF 
– 3rd party support (need contact with 3rd party by customer) 
▪ Dolby mobile 
• MT6368 
– MediaTek's proprietary audio interface connects to MT8676 
– TX brief spec 
 
– RX brief spec 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
 
1.1.1.2 Audio Format Support 
• Playback 
– AAC/HE-AAC v1/HE-AAC v2 
▪ Android Orientated Support/Not use Mediatek IP  
▪ 8 kHz ~ 96 kHz; 8 kbps ~ 320 kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: VBR/CBR 
▪ File Extension: .aac (ADTS, ADIF), .m4a, .mp4, .3gp, .ts 
▪ Profile: 1) LC, HEAAC V1, V2;  2) LD, ELD 
▪ LC, 48kHz, 128kbps, stereo → MCPS = 11;  HEv1, 22.05kHz, 128kbps, stereo → MCPS = 31; HEv2, 22.05kHz, 
32kbps, stereo → MCPS = 40; ELD, 44.1kHz, 128kbps MCPS = 13  
– AMR 
▪ Android Orientated Support/Use Mediatek IP 
▪ 8 kHz, 4.75kbps~12.2kbps 
▪ Mono Support 
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
MT8676 Android Audio  
User Manual 
Confidential B 
▪ Bitrate mode: CBR 
▪ File Extension: .amr 
▪ 8kHz, 12.2kbps, mono -> Mediaserver:50 MCPS, AMR Dec: 7 MCPS 
– AWB 
▪ Android Orientated Support/Use Mediatek IP 
▪ 16 kHz, 6.6kbps~23.85kbps 
▪ Mono Support 
▪ Bitrate mode: CBR 
▪ File Extension: .awb 
▪ 16kHz, 23.85kbps, mono -> Mediaserver:60 MCPS, AMR Dec: 18 MCPS 
– MIDI 
▪ Android Orientated Support / Not use Mediatek IP 
▪ 22.05kHz 
▪ Stereo Support 
▪ File Extension: .mid, .midi, .smf, .rtttl, .xmf, .rtx, .ota, .imy 
– MP2 
▪ Android Not Support / Use Mediatek IP  
▪ 8 kHz ~ 48 kHz; 8 kbps ~ 320 kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: VBR/CBR 
▪ File Extension: .mp2 
▪ Profile: MPEG1-Layer2, MEPG2-Layer2, MPEG2.5-Layer2 
▪ MPEG1, 48kHz, 256kbps, stereo → 11 MCPS 
– MP3 
▪ Android Orientated Support / Use Mediatek IP  
▪ 8 kHz ~ 48 kHz; 8 kbps ~ 320 kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: VBR/CBR 
▪ File Extension: .mp3 
▪ Profile: MPEG1-Layer3, MEPG2-Layer3, MPEG2.5-Layer3 
▪ MPEG1, 48kHz, 256kbps, stereo → 15 MCPS 
– OGG VORBIS 
▪ Android Orientated Support / Use Mediatek IP  
▪ 8 kHz ~ 192 kHz; 10 kbps ~ 320 kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: VBR 
▪ File Extensions: .ogg, .oga 
▪ 48kHz, 250bps, stereo → MCPS = 25 
– WAV (ADPCM) 
▪ Android Not Support / Use Mediatek IP  
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

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Android Audio  
User Manual 
Confidential B 
▪ DVI/MA 48kHz, stereo → 3.44 MCPS; DVI/MA 192 kHz, stereo → 13.6 MCPS; MS, 48kHz, stereo -> 4.17 MCPS; 
MS, 192 kHz, stereo → 16.3 MCPS 
– WAV (Alaw/Ulaw) 
▪ Android Orientated Support / Use Mediatek IP  
▪ 6 kHz ~ 96 kHz; 48 kbps ~ 3072 kbps 
▪ Mono//Stereo Support 
▪ File Extension: .wav 
– WAV (Raw) 
▪ Android Orientated Support / Use Mediatek IP  
▪ 6 kHz ~ 96 kHz; 48 kbps ~ 3072 kbps 
▪ 1 channel ~ 8 channels support 
▪ File Extension: .wav 
– APE 
▪ Android Not Support / Use Mediatek IP  
▪ 6 kHz ~ 96 kHz; 29 kbps ~ 836 kbps 
▪ Mono//Stereo Support 
▪ Bitrate Mode: VBR 
▪ File Extension: .ape 
▪ Profile: fast, normal, high, extra high 
▪ APE normal compress type, 44.1kHz, 675 kbps, stereo → MCPS = 50 
– WMA (Need license) 
▪ Android Not Support / Use Mediatek IP  
▪ 8 kHz ~ 48 kHz; 5 kbps ~ 320 kbps 
▪ Mono//Stereo Support 
▪ Bitrate Mode: VBR 
▪ File Extension: .wma 
▪ Profile: WMA v1; WMA v2 
▪ 32 kHz, 22kbps, stereo → MCPS = 22.57 
– FLAC 
▪ Android Orientated Support / Use Mediatek IP  
▪ 8 kHz ~ 48 kHz; 87 kbps ~ 396 kbps 
▪ Mono//Stereo Support 
▪ Bitrate Mode: VBR 
▪ File Extension: .flac 
▪ 44.1 kHz, 745kbps, level5, stereo → MCPS = 10 
• Record 
– AAC 
▪ Android Orientated Support / Not use Mediatek IP  
▪  8 kHz ~ 48 kHz; 8kbps~160kbps 
▪ Mono//Stereo Support 
▪ Bitrate Mode: CBR 
▪ File Extension: .3gp, .aac 
▪ Profile: Low Complexity; High Efficiency; Enhanced Latency Delay 
▪ 48kHz, 128kbps, stereo (Low Complexity) → MCPS = 32; 48kHz, 128kbps, stereo (High Efficiency) → MCPS = 75; 
48kHz, 128kbps, stereo (Low Latency Delay) → MCPS = 40; 
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
MT8676 Android Audio  
User Manual 
Confidential B 
– AMR 
▪ Android Orientated Support / Use Mediatek IP 
▪ 8 kHz; 4.75kbps~12.2kbps 
▪ Mono Support 
▪ Bitrate Mode: CBR 
▪ File Extensions: .3gp, .amr 
▪ 8kHz, 12.2kbps, mono → MCPS = 39 
– AWB 
▪ Android Orientated Support / Use Mediatek IP  
▪ 16 kHz; 6.60kbps~23.85kbps 
▪ Mono Support 
▪ Bitrate Mode: CBR 
▪ File Extension: .3gp, .awb 
▪ 16kHz, 23.85 kbps, mono → MCPS = 77 
– OGG 
▪ Android Not Support / Use Mediatek IP  
▪ 8 kHz~ 48 kHz; 31.98kbps~202.96kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: VBR 
▪ File Extension: ..ogg 
▪ 48kHz, 128 kbps,stereo → MCPS = 40 
– ADPCM 
▪ Android Not Support / Use Mediatek IP  
▪ 8 kHz~ 48 kHz; 4kbps~192kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: CBR 
▪ File Extension: ..wav 
▪ 16 kHz, stereo, DIV/MA → MCPS = 2.88; 48 kHz, stereo, DIV/MA → MCPS = 8.5; 16 kHz, stereo, MS → MCPS = 
5.08; 48 kHz, stereo, MS → MCPS = 14.97 
 
1.2 Audio SW Architecture 
The audio software architecture and data flow are shown as Figure 1-3 and Figure 1-4 respectively. Information about the 
software components and data path can be found in these figures. 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-3. Audio software architecture 
 
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
 
Figure 1-4. Audio software data path 
 
 Audio HAL 
Figure 1-5shows the architecture of the audio HAL. 
 
AudioTra
 AudioRec
AudioSys
bind
AudioFli
 AudioPol
AudioPol
icy 
AudioPol
icy 
AudioHar
dweare 
AudioMix
AudioRes
AudioHar
AudioStr
 AudioStr
Audio Driver 
cblk 
 cblk 
kern
HAL 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-5. Audio HAL architecture 
 
The top control interfaces of HAL consist of AudioALSAHardware, AudioALSAStreamOut, and AudioALSAStreamIn. These 
classes all utilize AudioALSAStreamManager for controlling audio modes and open/close, input/output streams. 
Consequently, AudioALSAStreamManager will contain all audio environment information such as mode, routing, volume, 
and mute details. 
 
1.2.1.1 Audio HAL Playback 
AudioALSAStreamOut: A class to do write/standby/routing operation but: 
• Do not implement detail in itself but using a Playback Handler to bypass open/close/routing/write operations 
• Different scenarios use different types of playback handlers 
• Stream Out will call createPlaybackHandler() in StreamManager to acquire a pointer of playback handler when 1st 
write(). 
• Also, call destroyPlaybackHandler() when standby(). 
HW registers should not be set in the playback handler, but TinyALSA Library should be used for the call. 
• pcm_open() /pcm_close() 
– To control AFE hw path, memory setting 
• mixer_open()/mixer_close() 
– To get various types of mixer control like, Speaker_Amp_Switch, Voice_Amp_Switch, Audio_Amp_R_Switch, and 
Audio_Amp_L_Switch  to control codec driver. 
• pcm_write() 
– To write PCM data to SRAM/DRAM 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-6. Playback architecture 
 
1.2.1.2 Audio HAL Record 
AudioALSAStreamIn: A class to do read/standby/routing operation but: 
• Do not implement detail in itself but using a Capture Handler to bypass open/close/routing/read operations 
• Different scenarios use different types of capture handlers 
• Stream In will call createCaptureHandler() in StreamManager to acquire a pointer to the capture handler when 1st 
read(). 
• Also, destroyCaptureHandler() when standby() 
HW registers should not be set in the capture handler; instead, use the TinyALSA Library for calling. 
• pcm_open() /pcm_close() 
– To control AFE hw path, memory setting 
• mixer_open()/mixer_close() 
– To get various types of mixer control like, Audio_ADC_1_Switch, Audio_ADC_2_Switch, Audio_Preamp1_Switch, 
Audio_Preamp2_Switch to control codec driver. 
• pcm_read() 
– To read PCM data into SRAM/DRAM 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-7. Record architecture 
 
 ALSA Driver Architecture Overview 
The Advanced Linux Sound Architecture (ALSA) provides audio and MIDI functionality to the Linux operating system. ALSA 
has the following significant features: 
• Efficient support for all types of audio interfaces, from consumer sound cards to professional multichannel audio 
interfaces. 
• Fully modularized sound drivers. 
• SMP and thread-safe design. 
• User space library (alsa-lib) to simplify application programming and provide higher level functionality. 
• Support for the older Open Sound System (OSS) API, providing binary compatibility for most OSS programs. 
The MTK SoC ALSA driver provides a smartphone PCM interface for the User space HAL. 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-8. ALSA pcm interface 
 
 DAPM and DPCM Overview 
Dynamic Audio Power Management (DAPM) is designed to allow portable Linux devices to use the minimum amount of 
power within the audio subsystem at all times. It is independent of other Kernel PM and as such, can easily co-exist with 
the other PM systems. 
DAPM is also completely transparent to all user space applications as all power switching is done within the ASoC core. No 
code changes or recompiling are required for user space applications. DAPM makes power switching decisions based upon 
any audio stream (capture/playback) activity and audio mixer settings within the device.  
All DAPM power switching decisions are made automatically by consulting an audio routing map of the whole machine. 
This map is specific to each machine and consists of the interconnections between every audio component (including 
internal codec components). All audio components that affect power are called widgets hereafter. For more detail related, 
please refer: https://www.kernel.org/doc/html/v6.1/sound/soc/dpcm.html  
Audio driver is based on the standard DAPM and DPCM (Dynamic PCM) architecture to control PCM open/close, power 
on/off, and clock on/off. DPCM separates PCM into Front End/Back End PCM. 
• FE PCM: Control of DMA (MEMMEMIF) 
• BE PCM: Control of DAI (ADDA, PCM IF, I2S) 
 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
 
For more details, please refer to: https://www.kernel.org/doc/html/v6.1/sound/soc/dpcm.html  
The following is MT8676 FE(memif) and BE(ADDA/I2S/PCM/Hostless/..) block diagram.  
 
 
 
1.3 AAOS Volume Control 
As Google defined, AAOS implementations use a hardware amplifier to control volume instead of a software mixer, so it is 
recommended to use smartpa or other hardware gain to adjust the volume. MTK provides interfaces and software path for 
adjusting the volume in the internal adsp as shown in Error! Reference source not found.. 
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
MT8676 Android Audio  
User Manual 
Confidential B 
Figure 1-9. Audio volume control 
 
 Volume Config in XML 
To config volume, we need modify both car_audio_configuration.xml and audio_policy_configuration.xml.  
Car_audio_configuration.xml defines volume groups which manage the volumes for a collection of devices within an audio 
zone. For each volume group, the volume can be controlled independently. The resulting gains are configured on the 
associated devices to be applied by the vehicle’s amplifier. Each volume group should contain one or more output devices 
with associated addresses. Addresses should correspond to the output devices defined in audio_policy_configuration.xml. 
 
 
Figure 1-10. Audio volume grope config 
 
Audio_policy_configuration.xml defines the volume group gains. Each volume group has minimum, maximum, and default 
gain values as well as a step size based on values configured in audio_policy_configuration.xml for the devices associated 
with the volume group. 
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

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-11. Devices gain config 
 
We provide minimum 0 to maximum 300 gain level, and gain will be mapped to float value 0~1 with logarithmic conversion 
function and apply to digital audio stream. 
 
 Volume Command Customization 
Volume command is sended from audio flinger by setAudioPortConfig and process command in 
AudioALSAPlaybackHandlerXXXX::setVolume. Customers can modify the function implementation for customization such 
as adjust volume curve and set kcontrol. 
1.4 External HW Devices 
 MT8676 I2S Capability Support 
I2S capability interface description: 
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
MT8676 Android Audio  
User Manual 
Confidential B 
• MTK Audio Interface 
– MTK-specific interface for MT6368 
• I2S0 – ADC/DAC interface 
– Proposed for any audio interface 
– Support standard I2S in Master input 
– Capability up to 192k/32-bit input. 
– Capability up to 384k/32-bit output. 
• I2S1 – ADC/DAC interface 
– Support standard I2S in Master output 
– Maximum of 1 data wire for support of 2 channels 
– Capability up to 192k/32-bit input. 
– Capability up to 384k/32-bit output. 
• I2S2 – ADC/DAC interface 
– Support the standard I2S in the Master input. 
– Maximum of 2 data wires for 4-channel support 
– Capability up to 192k/32-bit input. 
– Capability for up to 384k/32-bit output. 
• I2S4 – ADC/DAC interface 
– Support standard I2S in Master output 
– Maximum of 4 data wires for support of 8 channels 
– Capability up to 192k/32-bit input. 
– Capability up to 384k/32-bit output. 
• I2S6 – ADC/DAC interface 
– Support standard I2S in Master input 
– Maximum of 1 data wire for 2-channel support 
– Capability up to 192k/32-bit input. 
– Capability for up to 384k/32-bit output. 
• MCLK Support (I2S0/I2S1/I2S2/I2S4/I2S6) 
– Synced MCLK and I2S BCK 
– Capability up to 256fs in 192k mode 
– Capability up to 512fs in 96k mode 
– Capability up to 1024fs in 48k mode 
– Do not support 192fs or 384fs related 
 
Introducing an application for I2S connectivity. 
MediaTek has a highly flexible design between HW functions (IP: intellectual property) and Pad. 
A relationship between IP and pad can use AUX_FUNC to select Pad connect to which IP . 
 
Table 1-1. GPIO function 
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

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8676 Android Audio  
User Manual 
Confidential B 
Aux Func.0 Aux Func.1 Aux Func.2 Aux Func.3 Aux Func.4 Aux Func.5 Aux Func.6 Aux Func.7 
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
MT8676 Android Audio  
User Manual 
Confidential B 
Aux Func.0 Aux Func.1 Aux Func.2 Aux Func.3 Aux Func.4 Aux Func.5 Aux Func.6 Aux Func.7 
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
 
1.4.1.1 I2S Application 
Table 1-2. I2S application 
Interface Direction Suggestion: I2S IF assignment 
I2S0 Input/Output Reserved, for 3rd party 
I2S1 Input/Output Reserved, for 3rd party 
I2S2 Input/Output Reserved, for 3rd party 
I2S4 Input/Output External DSP , SmartPA with internal DSP 
I2S6 Input/Output Reserved for 3rd party 
MTK proprietary Audio IF Input*4 
Output*4 
ADC *4, for Main Mic, Ref Mic, 3rd Mic, 4th Mic, DMIC*4 
DAC *4, for receiver, headset L, headset R, ext amp 
For the other applications, consult with the MTK ACS team for the best I2S IF assignment. 
The I2S4 should be used for the smart PA share pin application. 
 
1.5 Mediatek Aurisys and Open DSP 
 Overview 
The requirement for sound quality enhancements that add listening pleasure has been increasing. To enrich the listening 
experience of using mobile devices, there is an increasing number of sound processing solutions provided by vendors.  
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
MT8676 Android Audio  
User Manual 
Confidential B 
Aurisys is introduced to facilitate the sound processing solution development and use of MTK platforms. Aurisys is a 
framework constructed upon Android Audio Framework. It includes standardized interfaces for sound processing and 
tuning, integrated DSP sound subsystem, and software debug interface. This concept of Aurisys will be briefly described in 
this document. 
 
Figure 1-12. Aurisys concept 
 
1.5.1.1 Aurisys Structure 
As depicted in Figure 1-13, the Aurisys structure contains Scene Handler, Library Manager, integrated DSP framework, 
Modem/Audio HW subsystems, and standardized software interfaces: 
• Aurisys Scene Handler (ARSH) 
– The Aurisys Scene Handler serves as the middleware between the audio system and the sound processing IPs. It is 
created scene by scene. For example, the Aurisys Playback Handler is used for playback effects in the scene of 
playback. It provides interfaces to call the corresponding IPs and manages them. 
• Aurisys Library Manager (ARLM) 
– The Aurisys Library Manager maintains the library information for each Aurisys Scene Handler, including the list and 
status of sound IPs. 
• Aurisys Software Interface (ARSI) 
– ARSI is the abbreviation of Aurisys Software Interface. It is provided for interfacing with sound enhancing tasks. To 
process sounds, a unified interface which is portable between MTK platforms is provided. The interface to parse and 
transmit parameters between PC tool, APMCU, and DSP is also included. The interface is designed for ease of use 
while being general enough so that new algorithms can be easily added to the existing frameworks. The difference 
between ARSI and ARSH is that ARSI provides an interface between ARSH and sound IPs; while ARSH provides an 
interface for Android Audio HAL to request processing sounds. 
• Modem 
– The term 'modem' refers to the modem IC. The MTK internal chipset contains a DSP for processing voice 
enhancement and voice codec. In the Aurisys structure, we disable the voice enhancement but reserve the codec in 
the modem IC so that we can simply add algorithms in the integrated open DSP on the application side. 
• Audio HW 
– It refers to the interface between processors and hardware devices for transferring sound data. The devices include 
speakers, microphones, earphones, Bluetooth devices, USB devices, etc. 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-13. Aurisys structure 
 
 Data Path Customization Guideline 
When using DSP for audio processing and output, it is necessary to configure the mix routing path and channel 
configuration information for each audio stream in the DSP . The public DSP task configuration provides a basic reference 
configuration, but in actual scenarios, some modifications to each DSP task are required. This section mainly introduces the 
configuration file modifications involved in the customization of ADSP-related functions. 
1.6 Kernel DTS Configuration 
In the DTS, the attribute configuration related to DSP audio streams is shown as Figure 1-14: 
 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-14. DTS feature list 
 
Each DSP task attribute node saves a five-digit array, where the array sequence represents the enable, dl_mem, ul_mem, 
ref_mem, and the size of the shared memory used by the DSP task. Among all attributes, the user needs to configure the 
dl_mem (downlink), ul_mem (uplink), and ref_mem (reference signal) according to the actual usage of memif by each DSP 
task. For example, for the mtk-dsp-sub-playback task, the dl output memif used is DL0, then the corresponding dl_mem is 
filled with 0x0. Most tasks (such as playback0) do not actually use hw memif, so they need to be configured as 0xffffffff. 
The enumeration type of the memif node is defined in mt6897-afe-common.h. 
 
 
Figure 1-15. memif define 
 
It should be noted that after modifying the node used by the corresponding task in the DTS, the PCM used by the 
corresponding task in the HAL also needs to be modified. For the dsp-playback task, the mPlaybackUlindex and other 
variables in the openPlaybackTask function of AudioDspStreamManager.cpp in the audio HAL need to be modified to select 
the corresponding dl playback stream. The number of channels output by the DSP is also modified in this function, which is 
shown as Figure 1-16: 
 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-16. Audio hal pcm config 
 
The architecture of each task under DSP is shown as Figure 1-17: 
 
Figure 1-17. ADSP architecture 
 
 Audio Path Configuration(AFE HW) 
Before playing and recording through the audio DSP PCM stream, the corresponding AFE hardware path needs to be 
configured. The configuration process follows the standard process of tinyalsa, configuring the corresponding kcontrol path 
through tinymix, and opening and starting the corresponding hw path. Figure 1-18 shows the playback path of DL3->ADDA. 
 
 
Figure 1-18. Audio path for playing music 
 
The corresponding configuration in audio_device.xml is shown as Figure 1-19: 
 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
 
Figure 1-19. Playback_3 to PMIC 
 
 Audio Path Configuration (INT ADSP) 
There are multiple tasks (bus out) in Auto ADSP, and each task needs to configure different algorithm processing 
parameters according to the needs and actual scenarios, such as channel in, channel out, and whether to bypass the 
algorithm. At the same time, it is generally necessary to map the channels of each bus to the corresponding channel 
positions in the final output TDM format, that is, to configure the channel map information. Therefore, the 
audio_dsp_config.xml configuration is provided to modify the  various attributes and mix paths of the auto DSP task. The 
general architecture of tasks in ADSP is shown as Figure 1-20: 
 
  
Figure 1-20. ADSP architecture 
 
1.6.2.1 XML Configuration Instructions 
Configuration XML path 
The path of the XML on the device is as follows: vendor/etc/audio_dsp_config.xml 
In the code, the path is as follows: device/<project_name>/audio_dsp_config.xml 
 
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
MT8676 Android Audio  
User Manual 
Confidential B 
1.6.2.2 mixer_target & mixer_source 
Within the XML, each DSP task is categorized into sw_mixer_target and sw_mixer_source based on its placement in the 
DSP mixer. For Task Music, it functions as both a sw_mixer_target and a sw_mixer_source. 
• sw_mixer_targetCorresponds to the output end of the sw_mixer, such as Task Music, Task Playback, and Task 
SubPlayback 
• sw_mixer_source 
Corresponds to the input end of the sw_mixer, such as Task PB0 (name="sw_mixer_playback0") 
The role of the task as a target or source is predetermined and cannot be configured, but the sw_mixer_source can be 
configured to mix into the desired target in the XML. The corresponding modification method is to write the 
sw_mixer_source node with the corresponding name into the node of the sw_mixer_target in the XML, as shown in the 
example below, indicating that task PB0 (sw_mixer_playback0) will mix into task music (sw_mixer_music). 
Ex1: 
        <sw_mixer_target name="sw_mixer_music" ch_in="2" 
ch_out="16" aurisys_on="1"> 
            <sw_mixer_source name="sw_mixer_playback0"> 
                <profile ch_in="2" ch_out="2" aurisys_on="0" 
                         ch_map="0x5555,0xaaaa"/> 
            </sw_mixer_source> 
       </sw_mixer_target> 
 
Currently, the configurable sw_mixer_sources are: sw_mixer_playback0 ~ sw_mixer_playback15, sw_mixer_FM_ADSP , 
sw_mixer_hfp_client_rx, sw_mixer_anc, sw_mixer_extstream1, sw_mixer_extstream2, sw_mixer_ktv. 
 
1.6.2.3 Task Attribute 
In each DSP task, different algorithm input and output channels, and channel map information will be configured as 
required by the scenario. In the XML, the following attributes can be configured for each task: 
• For sw_mixer_target 
– ch_in: Algorithm input channel for the task 
– ch_out: Algorithm output channel for the task 
– aurisys_on: Whether to enable the task algorithm; it can only be configured as 0 when ch_in = ch_out 
For example, in the example below, the algorithm input channel of task music is 2, the algorithm processed output channel 
is 16, and the algorithm is not bypassed. 
        <sw_mixer_target name="sw_mixer_music" ch_in="2" ch_out="16" aurisys_on="1"> 
            <sw_mixer_source name="sw_mixer_playback0"> 
                <profile ch_in="2" ch_out="2" aurisys_on="0" 
                         ch_map="0x5555,0xaaaa"/> 
            </sw_mixer_source> 
       </sw_mixer_target> 
• For sw_mixer_source, each profile has the following attributes: 
– ch_in: Algorithm input channel for the task 
– ch_out: Algorithm output channel for the task 
– aurisys_on: Whether to enable the task algorithm, can only be configured as 0 for pb0~pb15 when ch_in = ch_out 
– ch_map: Channel map information when the source is mapped to the sw_mixer_target, which is an array. The index 
in the array represents the channel index of the source, and the value is a 16-bit value, each bit representing 
whether to map to the corresponding channel of the target. For example, ch_map="0x5555,0xaaaa", ch_map[0] = 
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
MT8676 Android Audio  
User Manual 
Confidential B 
0x5555, representing the mapping value of source channel 1 is 0x5555, corresponding to binary 
0101010101010101, which maps to channels 1, 3, 5, 7, 9, 11, 13, 
For source tasks, the input channels are typically provided by the data source, such as audioflinger, and may consist of any 
number of channels. Therefore, in the source task, the XML can be configured to support multiple profiles for different 
ch_in settings, allowing the selection of different ch_out and ch_map settings based on the ch_in. For example, the task 
pb14 has two profiles: if the channel input to adsp for task pb14 is 2 channels, the first profile is used; if it is 12 channels, 
the second profile is used. 
            <sw_mixer_source name="sw_mixer_playback14"> 
                <profile ch_in="2" ch_out="2" aurisys_on="0" 
                         ch_map="0x5555,0xaaaa"/> 
                <profile ch_in="12" ch_out="12" aurisys_on="0" 
                         
ch_map="0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x100,0x200,0x400,0x800,0x1000,0x2000,0x4000,0x8
000"/> 
            </sw_mixer_source> 
For the music task, since it is both a source and a target, it takes the ch_in attribute from its target properties and finds the 
corresponding profile in the source to configure it accordingly. 
 
1.6.2.4  Configuration Example 
Here is an example of task pb0 configuration as follows: 
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
 
The corresponding data path process is as follows: 
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
MT8676 Android Audio  
User Manual 
Confidential B 
 
Figure 1-21. dsp task config 
 
1.7 Summary 
This chapter mainly introduces the Aurisys audio effect framework to facilitate users to integrate the required algorithms at 
the appropriate location. At the same time, in response to the customization of the audio bus scene, the configuration 
method of audio mix and channel map in ADSP is introduced.  
Besides the above-mentioned features, other applications can also be carried out. However, considering the limited 
resource of DSP , the concurrent cases should be designed carefully. Please visit Mediatek Website and customer support 
Website (MediaTek On-Line, MOL) to get more information. 
 
1.8 Appendix 
 MTK MOL 
MTK provides a forum named MTK on-line to share FAQ,eCourse and the important announcement: 
http://online.mediatek.com 
You can type the keyword to search the related FAQ and eCourse. 
You can explore the document tree to enter the related audio FAQ and eCourse. 
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
MT8676 Android Audio  
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
# SRC0181 MT8676_Android_BT_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_BT_User_Manual_V1.0.pdf

SHA-256：200f3c05d9cd4f2c30c770e0af3ca12fc401ca29521c340ba4c52dfbc41466be

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0181.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
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
Version History 
Version Date Author Description 
1.0 2023-08-12 Liuqin Liu Official release 
 
  
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
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 BT ·············································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 BT Abbreviations ··········································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
1.3 Configuration/Customization Guideline ··················································································································· 5 
 Profile Configuration ····································································································································· 5 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 6 
 Supported Bluetooth Feature Set And Certification ····················································································· 6 
 BQB ······························································································································································· 6 
 BT Issue Submission SOP ······························································································································· 7 
 BT Music (A2DP) Issue ··································································································································· 8 
 BT Scan Issue ················································································································································· 9 
 BT Connect Issue ········································································································································· 10 
 BT Voice Issue·············································································································································· 10 
Exhibit 1 Terms and Conditions ········································································································································ 12 
 
 
List of Figures 
Figure 1-1. BT architecture ························································································································································· 5 
Figure 1-2. BT profile configuration ············································································································································ 6 
Figure 1-3. BT issue submission SOP ·········································································································································· 8 
 
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
MT8676 Android BT 
 User Manual 
Confidential B 
1 BT 
1.1 Overview 
 Brief Introduction 
This section introduces the basic functions of Bluetooth (BT) and the debugging methods of common Bluetooth problems. 
The BT chip of the MT8676 platform is MT6637. 
 
 BT Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
A2DP Advanced Audio Distribution Profile 
AVRCP Audio/Video Remote Control Profile 
BQB Bluetooth Qualification Body 
BT Bluetooth 
DUT Device Under Test 
FW Firmware 
HCI Host Controller Interface 
HFP Hands-free Profile 
LE Low Energy 
 
1.2 Architecture/Process Overview 
The MT8676 BT architecture is shown below: 
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
 
Figure 1-1. BT architecture 
 
1.3 Configuration/Customization Guideline 
 Profile Configuration 
BT has different application scenarios, such as a2dp sink/hfp client/avrcp ct profiles. Android U version supports 
configuring different profiles to meet various application scenarios. You can configure it by adding 
“PRODUCT_PROPERTY_OVERRIDES” in device-vext.mk. The path to MediaTek’s public version file is: 
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
 
Figure 1-2. BT profile configuration 
 
1.4 Frequently Asked Questions/Troubleshooting 
 Supported Bluetooth Feature Set And Certification 
The controller and MediaTek stack of the MT8676 + MT6637 platform can pass the Bluetooth 5.4 certification. 
 
Most automotive customers use a third-party stack and need to confirm the certification version with the third-party stack.  
 
 BQB 
1.4.2.1 What is BQB 
BQB: The full name is Bluetooth Qualification Body, which is generally referred to as Bluetooth Certification. 
 
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
1.4.2.2 Why to Pass BQB 
Bluetooth certification is a procedure that any product using Bluetooth wireless technology must go through. Only after 
being tested and certified by the Special Interest Group (SIG) as complying with Bluetooth standards, is it eligible to be put 
on the market under the name of a Bluetooth product. Otherwise, it is illegal. 
 
1.4.2.3 Basic Introduction to BQB Certification Process 
Automotive products generally use 3rd party BT Stack. During certification, only the certification of BT Controller requires 
MediaTek’s assistance. BT Stack layer certification, such as Profile certification, is the responsibility of the 3rd party (if 
MediaTek stack is used, MediaTek is responsible). If the certification center is not familiar with MediaTek’s solution, it may 
ask for certification test methods and log capture methods. You can ask IDH for assistance, because IDH’s own core board 
has BT test projects that can be used as a reference. 
 
1.4.2.4 Certification Issue Handling Process 
1. The certification center reports the problem  
2. Tier 1 sorts out the problems and distinguishes whether it is MediaTek issue or 3rd party issue  
3. MediaTek -related issue are submitted to IDH for reproduction, and IDH’s own laboratory reproduces the problem 
first  
4. If IDH needs MediaTek’s assistance, please submit CR. 
 
 BT Issue Submission SOP 
If you are using a third-party stack, you need first-hand analysis from the third-party stack. If the analysis shows that it is an 
MediaTek’s problem, please create a CR and provide the corresponding log (please consult the third-party stack for the 
capture method) and inform the time of the problem, and attach the analysis process of the third-party stack. 
 
Please refer to Figure 1-3 for BT issue submission SOP . 
 
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
 
Figure 1-3. BT issue submission SOP 
 
 BT Music (A2DP) Issue 
1.4.4.1 Symptom 
• A2DP sink/source stuttering 
• A2DP no sound 
 
1.4.4.2 Check Point [Stack Check] 
• A2DP Source: The interval between each two TX A2DP data packets’ NOCP (Number of Complete Packet event) 
exceeds 80ms. 
Case 1: After TX data, NOCP comes back late? Yes -> MediaTek check 
Case 2: After the previous NOCP packet comes back, the next stack TX data packet is late? Yes -> Stack check 
 
• A2DP Sink: The interval between each two RX A2DP data packets is greater than 80ms. Confirm the peer sending 
interval through Air log, if OK -> MediaTek check 
 
1.4.4.3 Note 
• In other cases, the host and FW need to confirm and explain the reasons, and both parties must reach a consensus.  
• Please provide hci/fw/air log. 
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
 BT Scan Issue 
1.4.5.1 Symptom 
• Unable to search for the other device (Inquiry fail/LE scan fail) 
• Cannot be searched by the other device (Inquiry scan/LE adv abnormal) 
 
1.4.5.2 Check Point [Stack Check] 
• No device found: 
Is there an enable inquiry command in the HCI log? 
Yes -> MediaTek check 
 
• No device scanned via LE: 
Is there a command to enable BLE scan in the HCI log during the scan failure period? 
Yes -> MediaTek check 
 
• Inquiry to a device takes too long (performance): 
Describe the start and end time of the inquiry, and whether the host sent an inquiry command during this period? 
Yes -> MediaTek check 
 
• The peers cannot find DUT: 
During the search period, whether there is a command to enable inquiry scan (BT search) or enable advertising (LE 
search) in HCI log? 
Yes -> MediaTek check 
 
1.4.5.3 Note 
• Understand the notes information: 
(1) Are there other devices that can be searched (Inquiry fail/LE scan fail) 
(2) If the DUT cannot find the device, can it be found using other devices (Inquiry scan/LE adv) 
(3) The maximum number of responses that can be received before the end, and whether the total inquiry time is 
normal (no device can be inquiried) 
(4) Whether the event is reported, when the DUT cannot search for the device, whether it can be searched with 
other devices (no device can be inquiried) 
 
• Log requirements:  
(1) BT FW log+ hci log + air log  
(2) Provide the exact time when the problem occurred 
 
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
 BT Connect Issue 
1.4.6.1 Symptom 
• ACL/LE link establishment failed (Page timeout/page scan/LE init/LE adv) 
 
1.4.6.2 Check Point [Stack check] 
• Connection Failed 
– During the connection establishment period, is the peer reconnecting (near the page timeout, is there a 
connection request event caused by the peer), if so, it is considered normal 
 
– Page timeout (how long will the page timeout be in a log? After confirming that the exception is caused by 
page timeout, MediaTek check) 
 
– Occasionally, the HCI_Disconnection_Complete Reason is Connection Failed to be Established (0x3E). This is 
usually a normal phenomenon. It is more likely to occur in scenarios where the broadcast channel (37/38/39) is 
congested or interfered. Please first confirm whether this case is still likely to occur in a clean environment. If 
so, MediaTek check. 
 
1.4.6.3 Note 
• Connect issues are determined by whether the connection is established in the HCI log (connection complete event 
(status: success)). If the profile connection fails after the connection is established, the Stack needs to first identify 
the specific cause of the failure. If it is confirmed to be related to FW (Data no response? Data Transfer problem...), 
then provide relevant analysis and logs and ask MediaTek to check. 
 
• MediaTek check log requirements:  
BT FW log+ hci log + air log  
Provide the exact time when the problem occurred 
 
 BT Voice Issue 
1.4.7.1 Symptom 
• SCO/eSCO link not connected, noise, or no sound, etc. 
 
1.4.7.2 Check Point  
• HFP connection failed/disconnection failed [Stack check] 
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
The command from the host does not get the correct event or the profile does not get the correct response. Check 
the settings of the SCO/eSCO link (including whether the codec/packet type and profile settings are consistent). 
 
• HFP sound is silent/stuttering/noise [Audio check] 
Download (DL): Host (Audio) -> BT FW -> Air -> peer device -> remote auxiliary machine 
Upload (UL): remote auxiliary machine -> peer device -> Air -> BT FW -> Host (Audio) 
 
1.4.7.3 Note 
• If the sound you hear during a call with the remote phone is just background noise (air log), the original HFP call 
sound is coherent and there is no interruption, and the BT FW serves the anchor point normally => audio problem, 
audio check. 
 
 
 
 
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
# SRC0182 MT8676_Android_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf

SHA-256：2cb616e3e186a7922abd0920c595235bd29ed09743b4d19a230bb11658b1d611

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0182.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2025-06-12
MT8676 Android Camera Sensor Driver 
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
MT8676 Android Camera Sensor Driver JSON Arch 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
1 Camera Driver JSON Arch ··········································································································································· 4 
1.1 Overview ·································································································································································· 4 
1.2 Configuration/Customization Guideline ··················································································································· 4 
 How to Add a New Sensor ···························································································································· 4 
 How to Add a New Tuning File ···················································································································· 28 
Exhibit 1 Terms and Conditions ········································································································································ 30 
 
 
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
1.1 Overview 
This chapter primarily discusses the sensor porting method for the MT8676 camera post decoupling Refactor, along with 
the debugging approach and considerations for related issues. 
For the design architecture and principles of camera refactor, please refer to the following document: MT8678 JSON Design 
EN.pptx. 
 
1.2 Configuration/Customization Guideline 
This section primarily discusses the porting guide for the camera refactor decoupling architecture. 
 
 How to Add a New Sensor 
JSON only supports YUV sensor. 
1.2.1.1 Porting File List 
Android: 
• Kernel Space 
– \kernel\kernel_device_modules-
6.1\arch\arm64\boot\dts\mediatek\cust_mt8676_camera_v4l2.dtsi 
– \vendor\mediatek\kernel_modules\mtkcam\imgsensor\src-v4l2\$(sensor_name).json 
– \vendor\mediatek\kernel_modules\mtkcam\imgsensor\src-v4l2\sensor_bin_list.json 
• User Space 
– \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\sensor\$(sensor_name).bin 
– \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\sensor\sensor_bin_list.bin 
– \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\camera\metadata\$(sensor_name)\$(sensor_name).json 
– \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\camera\tuning\$(sensor_name)_tuning_param.json 
 
1.2.1.2 Add Sensor Firmware Files to the Kernel 
Android： 
• Kernel Space 
– \vendor\mediatek\kernel_modules\mtkcam\imgsensor\src-v4l2 
• User Space 
– \vendor\mediatek\proprietary\hardware\mtkcam-
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
– \vendor\mediatek\proprietary\hardware\mtkcam-
core\external\firmware\sensor\sensor_bin_list. bin 
 
$(sensor_name).json file is generated by a dedicated tool: Camera Firmware JSON Generator. This tool is a web page 
interface where developers can fill in the required form content according to the prompts on the page, and finally click 
save to generate $(sensor_name).json file. 
The meaning of the parameters in the web tool form can be found in the document MT8678 JSON Design EN.ppt. 
 
 
 
The $(sensor_name).json file that is generated needs to be saved to the 
\vendor\mediatek\kernel_modules\mtkcam\imgsensor\src-v4l2\directory. 
 
 
Execute the command python3 gen_sensor_firmware.py ./sensor_name.json in the src_v4l2/ directory. 
 
 
 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
After the successful execution of the script, a file named sensor_name.bin is generated in the src_v4l2/ directory. 
 
Add the sensor_name.bin file generated above to sensor_bin_list.json and generate the sensor_bin_list.bin 
file. 
 
 
 
 
The generated $(sensor_name).bin and sensor_bin_list.bin binary files can be pushed to the 
/vendor/firmware/sensor/ directory on the development board using adb. Subsequently, the development board can 
be restarted. 
 
 
Note: By pushing the firmware.bin file to the /vendor/firmware/sensor/ directory on the development board using adb, 
firmware debugging can be facilitated without the need to rebuild the driver source code repeatedly. 
 
After confirming that the firmware does not need to be modified, save the JSON file and copy the updated .bin file to the 
\vendor\mediatek\proprietary\hardware\mtkcam-core\external\firmware\sensor\ directory. The next full
 build code will compile all firmware files into the image. After the overall burning, the development board system will  
contain all firmware.bin files. 
 
1.2.1.3 Modify dts Files 
Android: 
\src\kernel\linux\v6.6_mt8678\co_device_modules\arch\arm64\boot\dts\mediatek\cust_mt6991_aut
o_camera_v4l2.dtsi 
 
By analyzing the hardware schematic, the current sensor’s connection to a specific I2C can be identified. Then, sensor 
configuration should be added under the corresponding I2C, as illustrated below: 
• Added Sensor0 
 
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
Note: If the sensor needs to be changed in the legacy method, then a new attribute needs to be added under the sensor node: 
mediatek, legacy-search; 
 
 
 
 
Concerning the correlation between seninf and sensor, please refer to the diagram below. The value of csi-port in 
seninf_top represents the actual hardware-connected csi-port. 
 
 
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
The part corresponding to the configuration in dts is as follows. It is necessary to refer to the sensor’s specification sheet 
for configuring the power-on sequence. 
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
 
 
Note: For the fixed regulator, para1 and para2 need to be configured the same as in the dts, with identical values. 
 
The format of pw_seq in the most recent version of the code max96712mipiyuv_sensor.c is as follows: 
 
 
1.2.1.4 Add New Meta Files 
Copy a metadata template folder (\src\multimedia\camera-hal\mt8678\mtkcam-
core\external\firmware\metadata\max96712_mipi_yuv), and change the folder name to the sensor name 
currently being ported (e.g., xxxx_mipi_yuv). 
Modify the sensor name in the names of all JSON files under the xxxx_mipi_yuv folder and also in these files to the name o
f the sensor currently being ported. Ensure that the letter casing matches the format used in the template file. 
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
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
 
 
Note: 
• A sensor has several different types of JSON files (all with the suffix _SENSOR_DRVNAME_xxx.json), and each JSON file needs to be 
modified in the manner described above. 
• If it is a raw or another type of sensor, you need to copy the corresponding sensor type’s JSON and modify it based on that. 
• If you need to modify the resolution, you can refer to the following JSON file and change it to the new resolution. 
 
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
 
 
After the modification is completed, the xxxx_mipi_yuv/ folder should be pushed to the 
/vendor/firmware/camera/metadata/ folder on the development board using adb push. The system should then be 
rebooted. 
After confirming that no more modifications are needed for the metadata, place the respective metadata file in the 
\src\multimedia\camera-hal\mt8678\mtkcam-core\external\firmware\metadata\max96712_mipi_yuv 
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
Enum.py. 
The full build command should be executed again. 
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
1.2.1.5 Configure Sensor Format 
Modification should be made in the web interface Camera Firmware JSON Generator. 
Configure UYVY or YUYV according to the format output by the bridge: 
 
 
Locate all instances where sensor_output_dataformat is configured and change them to the actual format. 
 
1.2.1.6 Configure modestruct 
Modification should be made in the web interface Camera Firmware JSON Generator. 
The relevant parameters of the setting are to be confirmed with the vendor and filled into the structure. 
 
Pclk->pixel clock, Unit: Hz 
Linelength->HTS 
Framelength->VTS 
Linelength × framelength = pclk 
Grabwindow_width -> camera size width (this value is not available on MT8676 and will be filled in the solution section 
later). 
Grabwindow_height -> camera size height (this value is not available on MT8676 and will be filled in the solution section 
later). 
Mipi_pixel_rate-> mipi datarate × lane_number/bitdepth, YUV bitdepth = 16 
 
 
The following diagram borrows an explanation of winsize info from a previous version to describe the meanings of each 
field. 
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
 
 
Limitation: Full size (4:3) or full size (16:9) width and height need 4x alignment. 
 
The size (width and height) of the sensor output should match the size of Grabwindow_width/Grabwindow_height. 
 
Grab window request: 
1. The width must be a multiple of 16 and the height must be a multiple of 4. 
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
 
 
5. cam_type is filled according to the type of module scene. If it is a single sensor, you can fill in 
MTK_SENSOR_TYPE_SINGLE, which has the following values to choose: 
 
– SENSOR_TYPE_COMB_AVM represents the combined frame AVM. 
– SENSOR_TYPE MULTI represents a single VC sensor. 
– SENSOR_TYPE MULTI represents multicam. 
– SENSOR_TYPE MULTI represents a multicam that each VC is independent of each other and does not affect each 
other. 
– SENSOR_TYPE_NON_COMB_AVM represents non-combined AVM. 
 
6. sensor_output_dataformat represents the format of the data output by the module, filled in the actual format. 
 
 
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
7. The changes need to be made as follows in the latest version of the JSON web tool.
 
 
Regarding the configuration of multicam group info, refer to the following configuration in the JSON web tool: 
 
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
 
 
The format in the final JSON file will include sensor ID and VC information from one master sensor and four slave sensors in 
their respective DTS files. 
 
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
 
 
If the configuration is SENSOR_TYPE_MULTI_ASYNC, you also need to add the following configuration:
 
 
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

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Android Camera Sensor Driver JSON Arch 
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

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
1.2.1.11 Configure get_sensor_usage 
Modification should be made in the web interface Camera Firmware JSON Generator. 
 
 
Its values can be selected as follows: COMB represents combined frame AVM; MUTI represents multicam; NONCOMB 
represents non-combined frame AVM, and for a single sensor configuration, it should be set as SINGLE. 
 
 
1.2.1.12 Configure Streaming Control 
Modify in the web interface Camera Firmware JSON Generator. 
All initialization settings should be placed within the sensor_init() function. The functions for enabling and disabling 
MIPI should be placed in the streaming_control() function. 
 
 
1.2.1.13 subdrv_static_ctx Structure Member Analysis 
Member Meaning 
sensor_id Sensor ID define in kd_imgsensor.h. 
reg_addr_sensor_id Sensor register address where sensor ID is read. Up to 3 bytes.  
i2c_addr_table I2C write ID, end in 0xff, 4 for maximum. e.g., i2c_addr_table = 
{0x20, 0x6e, 0xff},. 
eeprom_info The address of eeprom_info_struct. If there is no eeprom device, 
set to 0. 
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
Member Meaning 
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
seamless_switch_support If sensor supports seamless switch, set 1 to enable seamless 
switch function. 
temperature_support Set to 1 if sensor supports temperature sensor readout. 
g_temp Implement get temperature function. 
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
Member Meaning 
g_gain2reg Implement analog gain to register mapping rule. 
s_gph Implement set enable/disable group hold function. 
s_cali Implement the function to write data from eeprom_info_struct to 
sensor (e.g., QSC, cross-talk, …) 
reg_addr_stream Sensor register address where streaming on/off is controlled. 
reg_addr_mirror_flip Sensor register address where mirror/flip on/off is controlled. No 
use to set to 0. 
reg_addr_exposure Sensor register address where exposure line is set. Up to 3 
channels of exposure. Up to 3 bytes. 
long_exposure_support Set to 1 if sensor supports long exposure left shift function. 
reg_addr_exposure_lshift Sensor register address where long exposure left shift is set. 
reg_addr_ana_gain Sensor register address where analog gain is set. Up to 3 chann els 
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

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Android Camera Sensor Driver JSON Arch 
User Manual 
Confidential B 
 
 
 
 
 
 
 
 
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

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8676 Android Camera Sensor Driver JSON Arch 
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

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
MT8676 Android Camera Sensor Driver JSON Arch 
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

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
MT8676 Android Camera Sensor Driver JSON Arch 
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

## PDF物理页 26

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 26 
MT8676 Android Camera Sensor Driver JSON Arch 
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
 
The output shows that sensorNum is not 0 and displays the specific name of the sensor, indicating the search sensor is 
successful. Then test the output of the sensor. 
 
 
 
 
 
 
 
 
 
 
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
C:\Users> adb shell sentest_v4l2  1 0     //search sensor, then open main (1) sensor 
preview (0) 
 
 
 
4. The command to check seninf status is as follows. Once the results are found, they can be sent to MediaTek for 
confirmation. 
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
 
 
5. Access max96712 directly via I2C commands 
The following is the value read from register 0x108. 
 
 
The following is writing 0x8a0 register as 0x84. 
echo 0x8a0  0x84> /sys/devices/platform/soc/13b30000.i2c/i2c-8/8-0052/debug_i2c_ops 
 
6. The command to enable sensor driver log 
echo 1 > /sys/module/imgsensor_spm_isp8/parameters/sensor_debug 
 
7. If the serial port log printing stops, open the UART command: 
adb shell setprop persist.vendor.uartconsole.enable 1 
 
 How to Add a New Tuning File 
Design principles reference: MT8678 JSON Design EN.pptx 
Add method: When porting a new sensor, in the tuning section, simply add a 
${SENSOR_DRIVER_NAME}_tuning_param.json file. 
 
Note: 
• If you need to build into the image, place the JSON file in the \src\multimedia\camera-hal\mt8678\mtkcam-coremtkcam-
core\external\firmware\camera\tuning directory 
• If you need to add a sensor’s tuning JSON file separately, use adb push to push the tuning JSON file to the 
vendor/firmware/camera/tuning/ directory 
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
 
${SENSOR_DRIVER_NAME}_tuning_param.json: Copy an existing template and modify the name of 
sensor_driver_name. 
 
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
MT8676 Android Camera Sensor Driver JSON Arch 
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
# SRC0183 MT8676_Android_Camera_Driver_User_Manual_V1.2.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Camera_Driver_User_Manual_V1.2.pdf

SHA-256：b0adb12e154f917273b9897625e7f3a130f56bc3862a9b1dc4a12b5514a180c5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0183.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.2 
Release date:  2025-06-13
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
Version History 
Version Date Author Description 
1.0 2024-08-12 Jianmin Zhou Official release 
1.1 2024-10-15 Jianmin Zhou Added multicam configuration info into Section 1.3.1.9 
Configure static_ctx 
1.2 2025-06-12 Jianmin Zhou 
1. Added non-JSON sensor configuration fields in Section 
1.3.1.5 Modify dts Files 
2. Added JSON YUV sensor metadata configuration in 
Section 1.3.1.6 Add New Meta Files 
3. Added multicam_async mode configuration in Section 
1.3.1.9 Configure static_ctx and Section 1.3.1.13 Configure 
get_sensor_usage Function 
 
  
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
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
1 Camera Driver ···························································································································································· 4 
1.1 Overview ·································································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 4 
1.3 Configuration/Customization Guideline ··················································································································· 4 
 How to Add a New Sensor ···························································································································· 4 
Exhibit 1 Terms and Conditions ········································································································································ 24 
 
 
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
1.1 Overview 
This chapter mainly explains the MT8676 camera porting method and debugging methods and ideas for related issues. 
 
1.2 Architecture/Process Overview 
Camera driver is mainly divided into two parts: user space and kernel space. Both sides pass parameters through IOCTL. 
Raw sensor metadata, etc. are placed in user space; sensor related settings and power control are placed in kernel space. 
 
 
 
1.3 Configuration/Customization Guideline 
This section mainly introduces the camera driver porting guide. 
 
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

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Android Camera Driver 
User Manual 
Confidential B 
1.3.1.1 Porting File List 
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
 
1.3.1.2 Modify Config Files 
• \device\mediatek\mt6897\CameraConfig.mk 
– CUSTOM_HAL_IMGSENSOR = xxxx_mipi_raw xxxx_mipi_raw xxxx_mipi_yuv 
– CUSTOM_KERNEL_IMGSENSOR = xxxx_mipi_raw xxxx_mipi_raw xxxx_mipi_ yuv 
 
• \device\mediatek\mt6897\device-camera.mk 
– CUSTOM_HAL_IMGSENSOR = xxxx_mipi_raw xxxx_mipi_raw xxxx_mipi_ yuv 
 
• \kernel\kernel_device_modules-6.1\ arch\arm64\configs\mgk_64_k61_defconfig 
– CONFIG_CUSTOM_KERNEL_IMGSENSOR = “xxxx_mipi_raw  xxxx_mipi_raw xxxx_mipi_yuv” 
 
Add the new sensor name in the above three places. 
 
1.3.1.3 Add Sensor Files to Kernel 
• \vendor\mediatek\kernel_modules\mtkcam\imgsensor\src_v4l2\common\$CamDrv\ 
Refer to other sensors to add your own sensor driver directory in the above directory. For the naming format, refer to the 
figure below. 
 
 
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
1.3.1.4 How to Add Sensor ID and Sensor Name 
• \device\mediatek\vendor\camera\kernel-headers\kd_imgsensor.h 
• \kernel\kernel_device_modules-6.1\drivers\misc\mediatek\imgsensor\inc\kd_imgsensor.h 
 
Make the following additions to the above two files. 
• Add sensor ID  
 
 
• Add sensor name 
 
 
1.3.1.5 Modify dts Files 
\kernel\kernel_device_modules-6.1\arch\arm64\boot\dts\mediatek\cust_mt8676_camera_v4l2.dtsi 
Find out which I2C the current sensor is connected to by analyzing the hardware schematic diagram, and then add the 
sensor configuration under the corresponding I2C, for example, as follows:  
Added sensor0 
 
 
 
If the JSON function is updated, and this sensor is a raw sensor or a YUV sensor, but does not follow the JSON flow, you 
need to modify the following figure and add the "mediatek,legacy-search" field: 
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
 
 
Regarding the relationship between seninf and sensor, you can refer to the figure below. The value of csi-port in seninf_top 
is the csi-port actually connected to the hardware.  
 
 
 
The part corresponding to the configuration in dts is the power-on sequence as follows. This needs to be configured by 
referring to the power-on sequence in the sensor specification sheet. 
 
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
Take max96712 sensor as an example.  
 
 
 
1.3.1.6 Add New Meta Files 
Refer to the max96712_mipi_yuv file to modify and add content. You can copy it directly, then modify the file name and 
sensor name in the file. 
 
• \vendor\mediatek\proprietary\custom\common\hal\imgsensor_metadata\sensor\ 
• \vendor\mediatek\proprietary\custom\mt6897\hal\imgsensor_metadata\ 
 
If you need to add a new resolution, you can refer to the following code to add a new resolution. 
 
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
If the JSON function is updated, the YUV sensor also needs to add a metadata JSON file. Please refer to the following. Copy 
it, modify the file name and sensor name in the file. 
 
 
 
1.3.1.7 Configure Sensor Format 
Configure UYVY or YUYV according to the format output by the bridge: 
\vendor\mediatek\kernel_modules\mtkcam\imgsensor\src_v4l2 
\common\max96712_mipi_yuv/max96712mipiyuv_Sensor.c 
Find all places where sensor_output_dataformat is configured and change it to the actual format. 
 
 
1.3.1.8 Configure modestruct  
Confirm with the sensor vendor that the relevant parameters of the setting are filled in the structure. 
 
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
Pclk->pixel clock, Unit: Hz 
Linelength->HTS 
Framelength->VTS 
linelength x framelength x fps= pclk 
Grabwindow_width-> camera size width (There is no such value on MT8676. This value will be filled in in the solution 
position later.) 
Grabwindow_height->camera size height (There is no such value on MT8676. This value will be filled in in the 
solution position later.) 
Mipi_pixel_rate-> mipi datarate x lane_number/ bitdepth, YUV bitdepth = 16 
 
 
The following figure borrows an explanation of winsize info from a previous version to describe the meaning of each 
field. 
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
 
 
Limitation: full size (4:3) or full size (16:9) width and height need 4x alignment. 
 
Configure the sensor output size width and height, consistent with Grabwindow_width/Grabwindow_height size. 
Grab window request: 
 
1. The width must be a multiple of 16 and the height must be a multiple of 4. 
2. The viewing angles are consistent at the same ratio; the ratios of 4:3 and 16:9 require that the window output by 
the sensor ensures that the horizontal direction is consistent with the full size. 
3. The grab window setting recommendations are consistent with the window output by the sensor. In special 
cases: grabwindow width(height) ≤ sensor output width(height) - startx(y) 
 
1.3.1.9 Configure static_ctx 
1. The sensor_id field below is filled with the corresponding sensor ID. 
2. The following i2c_add_table generally only configures 0x52, which is the address of the actual deserializer. 
3. Configure resolution, which is the value of grabwindow mentioned earlier. 
4. Configure mipi_lane_num, which represents the number of MIPI lanes. 
5. cam_type is filled in according to the type of the module scene. If it is a single sensor, you can fill in 
MTK_SENSOR_TYPE_SINGLE. It has the following values you can choose: 
– SENSOR_TYPE_COMB_AVM means combined frame AVM 
– SENSOR_TYPE_SINGLE means single VC sensor 
– SENSOR_TYPE MUTI means multicam 
– SENSOR_TYPE_MULTI_ASYNC Indicates a multicam camera with independent VC channels 
– SENSOR_TYPE_NON_COMB_AVM means non-combined frame AVM 
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
If it is configured as SENSOR_TYPE_MUTI, you also need to configure group_info as follows: 
 
 
 
If it is configured as SENSOR_TYPE_MULTI_ASYNC, you also need to configure group_dt_info as follows: 
It is recommended to use SENSOR_TYPE_MULTI_ASYNC, and the SLAVE drivers will not affect each other. 
 
 
 
6. sensor_output_dataformat indicates the format of the data output by the module. Just fill in the actual format. 
 
 
 
1.3.1.10 Configure VC Information 
A single VC channel can be configured as follows: 
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
 
 
If you have multiple VC channels, you can configure it as follows, mainly modifying channel and user_data_desc. 
 
 
1.3.1.11 Configure Get Sensor ID Function 
  
 
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
1.3.1.12 Configure Sensor Init Function 
The following function mainly configures the settings of the module, which needs to be debugged and generated by the 
customer and vendor. 
 
1.3.1.13 Configure get_sensor_usage Function 
 
 
Its value can be selected from the following. COMB represents combined frames AVM; MUTI represents multicam; 
MUTI_ASYNC means a multicam that each VC is independent and does not affect each other; NONCOMB represents 
uncombined frame AVM; Single sensor is configured as SINGLE. 
 
1.3.1.14 Configure Streaming Control 
All initialization settings are placed in the sensor_init() function. MIPI enable and disable functions are placed in the 
streaming_control() function. 
 
 
1.3.1.15 subdrv_static_ctx Structure Member Analysis 
Member Meaning 
sensor_id Sensor ID defined in kd_imgsensor.h.  
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
Member Meaning 
reg_addr_sensor_id Sensor register address where sensor ID is read. Up to 3 bytes. 
i2c_addr_table I2C write ID, end in 0xff, 4 for maximum. E.g., i2c_addr_table 
= {0x20, 0x6e, 0xff}, . 
eeprom_info The address of eeprom_info_struct. If there is no eeprom device, 
set to 0. 
eeprom_num Array size of the eeprom_info_struct. If there is no eeprom device, 
set to 0. 
Resolution Full pixel size of sensor output. 
mirror Set IMAGE_HV_MIRROR if the sensor orientation is 180 degrees 
difference from module orientation. 
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
ana_gain_type Sony:type 0;       OV:type 1;       Samsung:type 2;       Hinyx:type 3;       
GC:type 4 
ana_gain_step Minimum valid step of analog gain. 1024base. 
ana_gain_table Use valid analog gain table. Remove unsuitable value which is not 
linearity. 1024base. 
ana_gain_table_size Size of analog gain table. 
min_gain_iso Set minimum ISO 100. 
exposure_def Default exposure line. Set 0x3D0. 
exposure_min Minimum exposure line. 
exposure_max Maximum exposure line. 
exposure_step Minimum valid step of exposure line. 
exposure_margin Maximum margin of exposure line. 
frame_length_max Maximum framelength 
ae_effective_frame AE effective frame 
frame_time_delay_frame The frame “frame length” setting takes effect. Sony sensor filled in 
3; other sensors filled in 2. 
start_exposure_offset Parameter tuned in CTS sensor fusion test. 
pdaf_type Reference enum IMGSENSOR_PDAF_SUPPORT_TYPE_ENUM. 
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
Member Meaning 
hdr_type Reference enum IMGSENSOR_HDR_SUPPORT_TYPE_ENUM. 
seamless_switch_support If sensor supports seamless switch, set 1 to enable seamless 
switch function. 
temperature_support Set to 1 if sensor supports temperature sensor readout. 
g_temp Implement get temperature function. 
g_gain2reg Implement analog gain to register mapping rule. 
s_gph Implement set enable/disable group hold function. 
s_cali Implement the function to write data from eeprom_info_struct to 
sensor (e.g., QSC, cross-talk, …) 
reg_addr_stream Sensor register address where streaming on/off is controlled. 
Reg_addr_mirror_flip Sensor register address where mirror/flip on/off is controlled. No 
use when set to 0. 
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
read to determine whether sensor stream is off or not. 
reg_addr_fast_mode For Sony sensor, sensor register address where fast mode on/off is 
controlled. 
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

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Android Camera Driver 
User Manual 
Confidential B 
1.3.1.16 Sensor Mode Setting 
Subdrv_mode_struct mode_struct[]structure array is used to store the data configuration of different Sensor Modes. 
The following uses preview mode as an example to illustrate some fields that need to be modified by the customer. For 
YUV sensor, generally the subsequent sensor mode and preview mode are exactly the same. There may be differences for 
the raw sensor, and you need to configure it according to actual needs. 
 
 
1.3.1.17 Driver Functions 
 Driver Operation Function List 
The list of driver function is as follows: 
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

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Android Camera Driver 
User Manual 
Confidential B 
 
 
 Open Function 
It will be called every time when the camera is opened. 
Read sensor_id to confirm whether I2C communication is normal. 
Call the sensor_init function to initialize the sensor registers.
 
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
 
 
 
Remark: 
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

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Android Camera Driver 
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
The output shows that sensorNum is not 0 and displays the specific name of the sensor, indicating the search sensor is 
successful, Then test the output of the sensor. 
 
C:\Users> adb shell sentest_v4l2  1 0     //search sensor, then open main (1) sensor preview 
(0) 
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
 
 
Check the seninf status command as follows. After finding the result, you can send it to MTK for confirmation. 
CMD: 
cat /sys/devices/platform/soc/1a00e000.seninf-top/status 
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
# SRC0184 MT8676_Android_Camera_Turbo_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Camera_Turbo_User_Manual_V1.1.pdf

SHA-256：984278ee09e54d49a21cdac813941b600c4c48f3decac280ced6baebb1a0ff6c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0184.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2024-11-12
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
Version History 
Version Date Author Description 
1.0 2024-08-12 Houchu.Fan Official release 
1.1 2024-11-12 Houchu.Fan Added Section 1.3 Camera Common Questions/Problem Analysis 
 
  
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
1.3 Camera Common Questions/Problem Analysis ······································································································· 7 
 Camera Debug Log ········································································································································ 7 
 Camera Buffer Dump ···································································································································· 8 
1.3.2.1 Raw Sensor······································································································································ 8 
1.3.2.2 YUV Sensor ······································································································································ 8 
 Camera Sensor Info ······································································································································· 8 
 Camera Basic Flow ········································································································································ 9 
1.3.4.1 Open ··············································································································································· 9 
1.3.4.2 Configure······································································································································· 10 
1.3.4.3 Flush ·············································································································································· 10 
1.3.4.4 Close·············································································································································· 10 
1.3.4.5 Sensor Power-on Done ················································································································· 10 
Exhibit 1 Terms and Conditions ········································································································································ 11 
 
 
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
 
• Entry layer is the entrance to MW. Different OSs can adapt MW by calling the code of the entry layer through the 
adapt layer.  
• Custom is the customization layer through which customers can perform customized operations. 
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
 
The main architecture diagram of Camera Turbo is the entry layer, IF layer and Core layer. The custom layer is mainly for 
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
 
The interaction logic between the IF layer and CORE is mainly that the open interface of the upper CameraProvider calls 
the NativeCameraManager. The NativeCameraManager allocates the NativeCamera that can be operated at the bottom 
layer. Each NativeCamera has pipeline attributes, which determines the actual flows of each NativeCamera. The Camera’s 
configuration will create a new CameraSession. CameraSessionc creates its own Pipeline. The connected ImageProc is 
saved in the Pipeline. ImageProc will create the corresponding ImageNode. Each CameraSession has its own ImageProc list. 
Users can perform customized behaviors in ImageProc. ImageProc will use MediumHandler, which is the callback interface. 
ImageNode callback will use ImageProc. 
 
1.3 Camera Common Questions/Problem Analysis 
 Camera Debug Log  
adb shell setprop persist.mtk.camera.log_level N  
N can set be to 0 ~ 4, default value is 3. 
 
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
 Camera Buffer Dump 
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
 
 
 
 Camera Sensor Info 
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
 
 Camera Basic Flow 
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
# SRC0185 MT8676_Android_DDR_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_DDR_User_Manual_ V1.0.pdf

SHA-256：3e5afcb20755477f48a0e693256c7e0c43eb492577e086ea176df9d2883b5dea

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0185.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
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
Version History 
Version Date Author Description 
1.0 2024-08-12 Shaoming Chen Official release 
 
  
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
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 DDR ··········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief introduction ·········································································································································· 4 
 Abbreviations ················································································································································ 4 
1.2 Architecture/Process Overview ································································································································ 4 
 Customization Process ·································································································································· 4 
 Process for Adding Item to CVI ····················································································································· 5 
1.2.2.1 New DRAM Verification - CVI flow ·································································································· 5 
1.2.2.2 CVI Preparation ······························································································································· 6 
1.3 Configuration/Customization Guideline ··················································································································· 7 
 DRAM Type ··················································································································································· 7 
 DRAM Size ····················································································································································· 7 
 DRAM Power Voltage ···································································································································· 7 
 DRAM Customization Guideline ···················································································································· 7 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 8 
 Enable Dram Debug Log ································································································································ 8 
 Dram Calibration Results ······························································································································· 8 
 Memory Test Results ····································································································································· 9 
 Command to Get Dram Information ············································································································· 9 
Exhibit 1 Terms and Conditions ········································································································································ 11 
 
 
List of Figures 
Figure 1-1. DRAM customization process ·································································································································· 5 
Figure 1-2. Process for adding item to CVI ································································································································· 6 
Figure 1-3. MT8676 MemoryDeviceList_MT6897.xls ················································································································· 7 
Figure 1-4. custom_MemoryDevice.h ········································································································································ 8 
Figure 1-5. Dram calibration summary ······································································································································· 9 
Figure 1-6. Memory test results ················································································································································· 9 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 4 
Table 1-2. MT8676 DRAM power voltage ·································································································································· 7 
 
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
1 DDR 
1.1 Overview 
 Brief introduction 
This chapter introduces the MT8676 DRAM configuration, and the DRAM verification process (CVI flow). 
 
 Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
CVI Customer Verified Item 
DDR4 Double Data Rate 4 
DRAM Dynamic Random Access Memory 
HDK Hardware Design Kit 
LPDDR4X Low-Power Double Data Rate 4X 
LPDDR5X Low-Power Double Data Rate 5X 
MOL MediaTek Online 
MTK MediaTek 
PCB Printed Circuit Board 
QVL Qualified Vendor List 
 
1.2 Architecture/Process Overview 
 Customization Process 
After MediaTek releases the Hardware Design Kit (HDK) for reference, customers can choose appropriate DRAM projects 
based on self needs.  
 
MediaTek's Qualified Vendor List (QVL) is the DRAM material that MediaTek has passed DRAM verification on the 
MediaTek reference board during the IC verification stage. If the DRAM material selected by the customer is not in QVL, 
the customer will need to verify the new DRAM project on the client's PCB. New DRAM projects completed by customer 
verification will be added to the MediaTek Customer Verified Items (CVI) list. 
 
The details are shown as Figure 1-1: 
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
 
Figure 1-1. DRAM customization process 
 
 
 Process for Adding Item to CVI 
1.2.2.1 New DRAM Verification - CVI flow 
Figure 1-2 describes the process of how customers submit new DRAM materials for verification and add them to CVI. 
Please contact MediaTek's CPM first to obtain permission to add new DRAM projects to CVI firstly, then perform the DRAM 
stress test according to the DRAM verification SOP , and send the test results to MediaTek, MediaTek will review the 
verification results of the new DRAM project, if the results is okay, the new DRAM project will be added to the MediaTek 
CVI list. 
 
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
 
Figure 1-2. Process for adding item to CVI 
 
1.2.2.2 CVI Preparation 
Customers can check whether the DDR to be used is in the list at https://online.mediatek.com/apps/qvl/. If it is in the list 
and the customer has followed the public version of MMD (the hardware design is consistent with the MTK public version), 
the customer can directly use this DDR. 
 
If the DDR is not in the QVL list, the customer submits the requirement to the PM/BM. After the PM/BM agrees, the 
customer submits a CR, attaches the DDR Spec and provides the following information: 
 
        Customer === Customer’s name 
        Chip === MT8676 + DDR part number 
        DRAM PN === DRAM Part Number 
        DRAM Die ===B die 
        Provide dram date sheet === (Necessary) 
        Provide dram type === e.g: LPDDR5X 
        Provide system dram speed === The maximum frequency that can support 
        Provide PCB layout === (Necessary ) 
        Whether MMD or not? === YES 
Have you done SI/PI simulation? === (Necessary ) 
        Whether it is applied according to the SOC spec (over clocking, changing 2CH to 1CH...) === It is applied according to SOC 
spec and does not over clock. 
        HW CPM === MTK HW CPM 
        SW CPM === MTK SW CPM 
        BM === MTK BM 
 
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
1.3 Configuration/Customization Guideline 
 DRAM Type 
The DRAM type supported by MT8676 is LPDDR5X, which supports single rank and dual rank DRAMs. 
The highest DRAM data rate supported by MT8676 is 7500 Mbps. 
 
 DRAM Size 
The maximum DRAM size supported is 24 GB. 
MediaTek implements a DRAM size adaptation mechanism. If new DRAMs of different sizes are used, customers do not 
need to configure the DRAM size separately or update the memory size in the Kernel device tree. 
 
 DRAM Power Voltage 
The typical voltages of dram are described in Table 1-2. 
 
Table 1-2. MT8676 DRAM power voltage 
Type Vcore VDD1 VDD2H VDD2L VDDQ VMDDR 
Voltage (Unit: V) 0.8 1.8 1.05 0.91 0.5 0.85 
 
 DRAM Customization Guideline 
1. Update MemoryDeviceList_MT6897.xls to support new DRAM projects 
MediaTek will provide MemoryDeviceList_MT6897.xls for new DRAM projects 
Figure 1-3 demonstrates support for Micron MT62F2G32D4DS_023 
 
 
Figure 1-3. MT8676 MemoryDeviceList_MT6897.xls 
 
Note: 
• Part number and Board ID must be consistent with custom_MemoryDevice.h 
\vendor\mediatek\proprietary\bootable\bootloader\preloader\custom\CUSTOM_PROJECT\inc\custom_MemoryDevic
e.h 
 
2. Update custom_MemoryDevice.h to support new DRAM projects 
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
 
Figure 1-4. custom_MemoryDevice.h 
 
1.4 Frequently Asked Questions/Troubleshooting 
 Enable Dram Debug Log 
The dram debug log is not enabled by default. Enabling the DRAM debug log can check DRAM calibration results, DRAM 
self-test and other information, such as: 
 
\vendor\mediatek\proprietary\bootable\bootloader\preloader\platform\mt6897\src\drivers\inc\d
ramc_common.h 
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
 
Customers usually only need to enable "mcSHOW_DBG_MSG(_x_)" to confirm dram calibration results or CVI review. 
 
 Dram Calibration Results 
Customers can search the keyword "Calibration Summary" in the bootup log to view the DRAM calibration results. 
Figure 1-5 demonstrates the calibration results at frequency 1600 MHz (data rate 3200 Mbps). 
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
 
Figure 1-5. Dram calibration summary 
 
 Memory Test Results 
After completing the DRAM calibration, a memory test will be executed to check whether the basic read and write 
operations of the DRAM can operate normally. 
Figure 1-6 demonstrates the test results of memory test: 
 
 
Figure 1-6. Memory test results 
 
 Command to Get Dram Information 
1. Dram Data Rate 
The following is the command to view DRAM data rate 
UART (or ADB shell) window: 
cat /sys/bus/platform/drivers/dramc_drv/dram_data_rate 
The result is as following: 
 
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
 
2. Memory Size 
The following is the command to view Memory Size: 
UART (or ADB shell) window: 
cat /proc/meminfo 
The result is as following: 
  
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
# SRC0186 MT8676_Android_DebugLoggerUI_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_DebugLoggerUI_User_Manual_V1.0.pdf

SHA-256：ad653e0a5c99f5fac46140f3f4c59f39f8e4c9ccd8f5b01d867153f94c8635b9

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0186.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-23
MT8676 Android DebugLoggerUI 
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-23 Harry Hu  Official release 
 
  
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 DebugLoggerUI ·························································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Introduction ·················································································································································· 4 
 Abbreviation·················································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 5 
 DebugLogger Introduction ···························································································································· 5 
 Introduction to Rotation Mechanism of DebugLogger ················································································· 5 
 Introduction to DebugLogger Storage ··········································································································· 6 
1.3 Configuration/Customization Guideline ··················································································································· 6 
 Introduction to Control of DebugLogger ······································································································· 6 
 Introduction to DebugLogger Configuration ································································································· 9 
 DebugLogger Settings Introduction ············································································································ 10 
 Trigger TagLog ············································································································································· 12 
 DebugLogger Reference FAQ ······················································································································ 13 
1.4 Frequently Asked Questions/Troubleshooting ······································································································· 14 
 Debuglogger Precautions ···························································································································· 14 
Exhibit 1 Terms and Conditions ········································································································································ 15 
 
 
List of Figures 
Figure 1-1. MTK log flow ···························································································································································· 5 
 
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

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
1 DebugLoggerUI 
1.1 Overview 
 Introduction 
This chapter mainly introduces the architecture of DebugLogger, a log capturing tool for MediaTek, and some commonly 
used debugging methods when this log tool cannot work properly. 
 Abbreviation 
Table 1-1. Abbreviations 
Abbreviation Explanation 
boot__normal Log before restart 
bootprof Time spent initializing critical processes 
bsp_log Process call log 
connsyslog BT/WiFi/GPS log 
crash_log Backtrace and process information when APPs crash 
DebugLogger/MTKlog A debugging tool designed by MediaTek to capture logs 
DebugLoggerUI Java layer recorder UI, which can start/stop logging tools and change some settings  
events_log Process creation/destruction logs, activity lifecycle logs 
kernel_log Kernel/driver log 
Last_1_boot_normal 
During the previous boot process, the boot log was not yet copied to the SD card or 
eMMC, and a reboot occurred. The previous boot log was saved in this folder, and the 
number 1 represents the number of boot attempts. 
last_AndroidLog Last Android log during shutdown 
last_kmsg Last Kernel log during shutdown 
main_log Native/java layer log 
mblog_history Mobile_log_d runing log 
Mobile_log_d Run the service at the bottom layer, mainly capturing records such as main/Kernel logs 
Mobile log Common log records 
Modem log Record the log of the modem 
netlog TCP dump log 
pl_lk Log of preloader/LK during startup phase 
properties All the properties of the device are usually queried in this file, including the phone 
version number and phone model information 
radio_log Log of communication system 
scp_log Log of SCP  
sys_log System log,  e.g., AMS/WMS and other logs 
 
 
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
1.2 Architecture/Process Overview 
 DebugLogger Introduction 
 
Figure 1-1. MTK log flow 
 
The mechanism of the entire MTK log is composed of an upper layer of MTKlogger and a lower layer of mobile_log_d. The 
upper layer is responsible for issuing instructions, and the read/write config file calls the lower layer to run the program to 
achieve the expected purpose. The lower layer is the actual executor. After the program starts running, it will read the 
config file and execute commands based on the config file. mobile_log_d mainly reads the four log files of Android logd, as 
well as reads the kmsg/atvlog/scp logs under various proc nodes. The operations in this part of MTK log are actually the  
retrieval and integrationof the existing logs, for example, ATF already has ATF log nodes, and logd itself is an Android log 
mechanism. After reading the log, a log file will be created to save various logs.  
 
The general method of creating a log is to create a single APlog folder to save each type of log, which is read and written at 
a fixed rate in the form of a linked list. When the sum of all logs reaches the size limit of a single APlog folder, the logs 
inside will be rotated, and the nodes of the oldest log file will be deleted in the form of a linked list. The nodes of the linked 
list do not distinguish the types of logs which are rotated based on the APlog folder as the most basic unit. When the 
platform restarts or the upper level MTKlogger issues the start/stop command, a new APlog folder will be created. When 
the total size of APlog folders reaches a certain limit, the APlog folder of the oldest log file will be deleted. All content in 
the log file system is treated as files and can be accessed and manipulated through the file system. 
 Introduction to Rotation Mechanism of DebugLogger 
The Mobile log in DebugLogger contains many APlogs. When stopping recording log and then starting recording log, a new 
APlog will be generated. When the platform restarts, the log will also be recorded in the new APlog after the restart. 
Therefore, Mobile log has been set with two sizes: 
One is the upper limit of the size of a single APlog folder. When the upper limit is reached, the previous log will be deleted 
(the boot normal log for a single boot will not be deleted), which is done as a rotate. Rotationis in chronological order, 
regardless of the type of log.  
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
The other size is decided by an algorithm based on log_size (usually around a few megabytes), and all logs will be created 
as soon as they reach the upper limit. When the APlog reaches its maximum limit, the oldest log file created under this 
folder will be deleted. 
 Introduction to DebugLogger Storage 
MTK log storage consists of three parts: first, logs are captured from various log buffers and stored in the MTK log buffer; 
second, logs from the MTK log buffer are saved to eMMC, and the file format has the suffix .curf; finally, the complete log 
is written to eMMC and the file format now does not has the .curf suffix. 
 
Control the stored code (adjustment depends on the number of customer project logs):  
logging.h： 
#define BUFFER_SIZE        (256 * 1024)  // 256k 
 
1.3 Configuration/Customization Guideline 
 Introduction to Control of DebugLogger 
  
 
1.3.1.1 Main UI 
1. Log running time: The recording time while capturing logs after recording starts. 
2. Running status of each log: If a log is running, the left icon changes from a triangle to a square as shown in the figure 
above. 
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
3. Log storage: The path where logs are stored and the remaining storage space for logs. 
4. Control panel: The left button is used to start Tag Log. The trash can icon on the right is for clearing recorded logs, and 
the middle button is for starting or pausing recording. 
5. Settings page entry: Click on this icon to access the detailed settings page, as shown in the figure below. 
1.3.1.2 Log Setting 
 
1. Customize the capture of different types of logs through the switch. 
2. Enable or disable the Tag Log (When a system exception occurs and the DB is generated, Tag Log will save the platform 
logs at the time of the exception). 
3. Log storage path 
 
1.3.1.3 Mobile Log Setting 
 
 
1. When Mobile log is enabled, different types of logs can be customized for capture by checking the corresponding 
options. If checked, the selected log types will be captured; if unchecked, the log will not be captured. 
2. Set the maximum log buffer size for Mobile log. If the captured logs exceed this value, the previous logs will be deleted 
to free up space for the log buffer to be reused. 
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
3. Total log buffer size, including the currently recorded logs and all previous Mobile logs, that is, the total size of the 
folder where Mobile logs are stored. 
 
1.3.1.4 Modem Log Setting 
 
 
1. Three modes for capturing Modem logs: 
– USB mode: Modem logs are captured by connecting via USB and using the ELT tool 
– SD mode: Modem logs are directly saved in the platform's data/debuglogger directory 
– Passive log to SD mode: Logs are captured for Modem exceptions and saved in the platform’s data/debuglogger 
directory 
        
2. Automatically capture the logs when Modem exception occurs and save them in the platform’s data/debuglogger 
directory 
3. Save location information in Modem1 logs 
4. Reset Modem automatically after EE occurs 
5. Total Modem log storage size 
 
1.3.1.5 Network Log Setting 
 
 
1. Whether to check current Network connection status when Network log stops. If enabled, this operation will ping two 
IPs to confirm current connection status. These ping data may be very useful for analyzing network related issues, but 
it will take approximately 12 seconds to stop the log. 
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
2. Set each Network log Package limit size 
3. Total Network log folder size 
   
 Introduction to DebugLogger Configuration 
Configuration file path: Before compilation, configure the default values of DebugLoggerUI through mtklog configure 
bsp eng. prop&&mtklog configure bsp user. prop file. File path: \device\media\common\mtklog, 
mtklog configure bsp eng. prop controls the Eng version, while mtklog configure bsp user. prop controls 
the user and user debug versions. 
1.3.2.1 Set the Default Path of Logs   
Configure contents: 
mtklog_path = system_data/device_storage/portable_storage 
 
1.3.2.2 Set the Auto-start Log Types during the 1st Boot 
com.mediatek.log.mobile.enabled = true 
com.mediatek.log.modem.enabled = true 
com.mediatek.log.net.enabled = true 
com.mediatek.log.connsysfw.enabled = true 
com.mediatek.log.gpshost.enabled = true 
com.mediatek.log.bthost.enabled = true 
 
The eng version starts by default on the first boot, while other versions do not start by default and can be configured 
independently. 
1.3.2.3 Set Log Rotate Size 
com.mediatek.log.mobile.maxsize = 500 //Single mobile log folder size 
com.mediatek.log.mobile.totalmaxsize = 1000 //Total mobile log size 
com.mediatek.log.modem.maxsize = 2000 
com.mediatek.log.net.maxsize =600 
com.mediatek.log.connsysfw.maxsize = 2000 
com.mediatek.log.bthost.maxsize = 2000 
 
You can modify the corresponding options as needed. Please note that the com.mediatek.log.mobile.maxsize should be 
smaller than com.mediatek.log.mobile.total.maxsize. The configured log cache size will be stored in a loop, that is, when the 
storage reaches its maximum value, if there are new logs, the previous old logs will be overwritten. 
1.3.2.4  Set Sub Logs  
com.mediatek.log.mobile.AllMode = true 
Set all mobile sub logs if the specific type mobile sub log is not set. 
 
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
com.mediatek.log.mobile.AndroidLog = true 
com.mediatek.log.mobile.KernelLog = true 
com.mediatek.log.mobile.SCPLog = true 
com.mediatek.log.mobile.ATFLog = true 
com.mediatek.log.mobile.BSPLog = true 
com.mediatek.log.mobile.MmediaLog = true 
com.mediatek.log.mobile.SSPMLog = true 
com.mediatek.log.mobile.ADSPLog = true 
If the mobile log sub item is not set, the default setting is com. media. log. mobile. AllMode. 
1.3.2.5 Enable TagLog  
com.mediatek.log.taglog.enabled = true 
 
Default value: The eng version is true by default, while others are false. 
1.3.2.6 Modem Log Auto-reset or Not When EE Occurs 
com.mediatek.log.modem.autoreset.enabled = false 
 
The default value is false. 
A warning dialog will be shown if it is false. 
1.3.2.7 Set the Startup Mode of Modem Log 
com.mediatek.log.modem.mode = 2 
 
1: USB mode, 2: sdcard mode, 3: PLS mode (Passive log to SD)  
The default value is 2. 
  DebugLogger Settings Introduction 
In addition to the home UI method, you can also directly use the adb method to control the debuglogger, which is suitable 
for customers who do not display the debuglogger interface. 
1.3.3.1 Set the Start and Stop 
Command format:  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name value --ei cmd_target 
logTypes -n com.debug.loggerui/.framework.LogReceiver 
 
value = start/stop 
logTypes = 1 + 2 + 4 + 16 + 32 + 64 
(MobileLog: 1, ModemLog: 2, NetworkLog: 4, GPSLog: 16, ConnsysFWLog: 32, BTHostLog: 64) 
 
Example 1: Enable all logs 
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name start --ei cmd_target 119 
-n com.debug.loggerui/.framework.LogReceiver 
 
Example 2: Close all logs 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name stop --ei cmd_target 119 
-n com.debug.loggerui/.framework.LogReceiver 
Note: The start and stop commands require a 15 second interval. 
 
Example 3: Stop ModemLog & NetworkLog 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name stop --ei cmd_target 6 -n 
com.debug.loggerui/.framework.LogReceiver 
 
1.3.3.2 Query the Running Status 
Command format:  
adb shell getprop logstatusproperty 
 
log status result:  running with "1", stop with "0" 
The logstatusproperty can have the following values: 
logstatusproperty of mobile: vendor.MB.running 
logstatusproperty of modem log: vendor.mdlogger.Running 
logstatusproperty of network log: vendor.mtklog.netlog.Running 
logstatusproperty of GPSLog: vendor.gpsdbglog.enable 
logstatusproperty of BTHost log: vendor.bthcisnoop.running 
logstatusproperty of ConnsysFW log: vendor.connsysfw.running 
eg: Obtain the status of the mobile log: adb shell getprop vendor.MB.running 
1.3.3.3 Restart 
Command format: 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name restart --ei cmd_target 
logTypes -n com.debug.loggerui/.framework.LogReceiver 
 
logTypes=1+2+4+16+32+64 (MobileLog: 1, ModemLog: 2, NetworkLog: 4, GPSLog: 16, ConnsysFWLog:32, BTHostLog: 64) 
logTypes = -1 (all logs) 
 
For example, only to start mobile log 
Command:  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name restart --ei cmd_target 1 
-n com.debug.loggerui/.framework.LogReceiver 
 
Result: Only Mobile log restarts 
 
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
1.3.3.4 Display the Modem EE Memory Dump Completion or Not 
Command:  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name modem_auto_reset_value --
ei cmd_target 2 -n com.debug.loggerui/.framework.LogReceiver 
 
value = 1/0  (Enable/Disabled) 
e.g., Display modem EE memory dump done dialog:  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name modem_auto_reset_1 --ei 
cmd_target 2 -n com.debug.loggerui/.framework.LogReceiver 
 
1.3.3.5 Set Modem Log Mode 
Command:  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name 
switch_modem_log_mode_value --ei cmd_target modemtype -n 
com.debug.loggerui/.framework.LogReceiver 
 
value = 1/2/3 (USB/SD/PLS) 
modemtype = 1/3 (md1/md3) 
e.g., Set Modem1 Mode to SD  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name switch_modem_log_mode_2 -
-ei cmd_target 1 -n com.debug.loggerui/.framework.LogReceiver 
 
1.3.3.6 Manually Trigger EE 
Command:  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name force_modem_assert --ei 
cmd_target 2 -n com.debug.loggerui/.framework.LogReceiver 
 
1.3.3.7 Enable/Disable TagLog 
Command:  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name switch_taglog --ei 
cmd_target value -n com.debug.loggerui/.framework.LogReceiver 
value = 1/0 (Enable/disable) 
e.g.,: Enable TagLog 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name switch_taglog --ei 
cmd_target 1 -n com.debug.loggerui/.framework.LogReceiver 
 
 Trigger TagLog 
Command: 
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
adb shell am broadcast -a com.mediatek.log2server.EXCEPTION_HAPPEND -e path 
SaveLogManually -e db_filename yourFileName --ez is_need_zip needZipValue --ez 
is_need_all_logs needAllLogValue -n com.debug.loggerui/.framework.LogReceiver 
 
Your file name can be defined by yourself. 
needZipValue = true/false (zip file/not zip file) 
needAllLogValue = true/false (tag all logs from MTK log foler/not tag all logs) 
e.g., Tigger taglog to zip the current log  
adb shell am broadcast -a com.mediatek.log2server.EXCEPTION_HAPPEND -e path SaveLogManually -e db_filename test 
--ez is_need_zip true --ez is_need_all_logs false -n com.debug.loggerui/.framework.LogReceiver 
 
1.3.4.1 Display DebugLoggerUI Main Interface 
Start DebugLoggerUI Activity, command: 
adb shell am start -n com.debug.loggerui/com.debug.loggerui.MainActivity 
 
1.3.4.2 Set Log Size 
1. Set Mobile log size 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name set_total_log_size_600 --
ei cmd_target 1 -n com.debug.loggerui/.framework.LogReceiver 
 
2.  Set Moble log single APlog file size 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name set_log_size_300 --ei 
cmd_target 1 -n com.debug.loggerui/.framework.LogReceiver 
 
3. Set Modem log size  
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name set_log_size_600 --ei 
cmd_target 2 -n com.debug.loggerui/.framework.LogReceiver 
 
4.  Set Network log size 
adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name set_log_size_200 --ei 
cmd_target 4 -n com.debug.loggerui/.framework.LogReceiver 
 
 DebugLogger Reference FAQ 
[FAQ13883]  How to configure various parameters of MTKlogger 
[FAQ12752]  How to modify the default storage capacity size of MTKlogger 
[FAQ19560]  Special precautions for enabling MTKlog in the user version 
[FAQ19362]  How to set the size of the Mobile log, Modem log, Network log 
[FAQ17814]  How to set whether MTKlogger starts up automatically 
Gain a deeper understanding of Logging Tools: http://online.mediatek.com/QuickStart/QS00034 
 
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
MT8676 Android DebuglLoggerUI 
User Manual 
Confidential B 
1.4 Frequently Asked Questions/Troubleshooting 
 Debuglogger Precautions 
1. It is not recommended for customers to customize MTK log in any way, e.g., modifying storage partitions or adding 
new features. You can submit questions to eserrvice for help from MediaTek. 
2. It is not recommended for customers to perform any additional operations on MTK log when capturing logs, e.g., 
manually stopping MTK log service or modifying the MTK log storage path.  
3. If the log is required, enter the command below 
adb pull/data/debuglogger 
  
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
MT8676 Android DebuglLoggerUI 
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
# SRC0187 MT8676_Android_Display_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Display_User_Manual_ V1.0.pdf

SHA-256：5aac82d4d7aa46cf1b9fc8a15bc6ae3c5aebcbcbc893f343b1bb8a39a70aaca1

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0187.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
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
MT8676 Android Display  
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
MT8676 Android Display  
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
MT8676 Android Display  
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
MT8676 Android Display  
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
MT8676 Android Display  
User Manual 
Confidential B 
1.2.2.2 Hypervisor (Yocto + Android) 
 
 
1.3 Configuration/Customization Guideline 
 DSI SuperFrame Dual Panel Configuration  
DSI0/1 supports outputting side by side superframe and driving dual-screen display. 
You need to open the virt_dsi node in dts (the figure below is a DSI0 configuration sample). For other LCM configurations, 
please refer to MT8676_DSI_Panel_User_Manual_ V1.0. 
 
 
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
MT8676 Android Display  
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
MT8676 Android Display  
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
MT8676 Android Display  
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
MT8676 Android Display  
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
MT8676 Android Display  
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
# SRC0188 MT8676_Android_DSI_Panel_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_DSI_Panel_User_Manual_ V1.0.pdf

SHA-256：1619663e55af75d298ea6846a7ab577577418eaef27c844142097ed8a9566e1a

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0188.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Android DSI Panel 
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

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
– Offset： 
▪ Dsi:0x178 or 0x17c  
▪ Dsc:0x78 or 0x6c，ask it for MTK 
– Value： 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
MT8676 Android DSI Panel 
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
# SRC0189 MT8676_Android_DVR_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_DVR_User_Manual_V1.0.pdf

SHA-256：6344b359854edd3e7860c0e0b6e0efb848fa309ec32bd07d6bc816ab65508995

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0189.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
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
MT8675 Android DVR 
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
MT8675 Android DVR 
User Manual 
Confidential B 
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
1 DVR ··········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 DVR Abbreviations ········································································································································ 4 
 Main Features ··············································································································································· 4 
1.2 Architecture/Process Overview ································································································································ 5 
 DVR Architecture ··········································································································································· 5 
 DVR Flow ······················································································································································· 6 
 MP4 Writer Flow ··········································································································································· 6 
1.3 Configuration/Customization Guideline ··················································································································· 7 
 Three Entry Points to the Recorder ··············································································································· 7 
 Common DVR Features ································································································································· 7 
1.4 Frequently Asked Questions/Troubleshooting ······································································································· 10 
 Common DVR Issue Analysis ······················································································································· 10 
Exhibit 1 Terms and Conditions ········································································································································ 14 
 
 
List of Figures 
Figure 1-1. DVR architecture ······················································································································································ 5 
Figure 1-2. DVR flow ··································································································································································· 6 
Figure 1-3. MP4 writer flow ······················································································································································· 7 
Figure 1-4. Sub-stream flow ······················································································································································· 8 
 
 
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
MT8675 Android DVR 
User Manual 
Confidential B 
1 DVR 
1.1 Overview 
 Brief Introduction 
This section primarily introduces the architecture of the MT8676 DVR and the analysis of some common DVR issues. 
Digital Video Recorder (DVR) is the built-in video recording feature of the SPM platform, supporting MP4 and ts recording 
as well as H264 data callback. 
 
 DVR Abbreviations 
Abbreviation Explanation 
API Application Programming Interface 
DVR Digital Video Recoder 
SPM Smart Platform 
 
 Main Features 
1. Multi-channel Recording 
A single camera can simultaneously record and generate multiple video files (including H264 callback). 
 
2. File Segmentation 
The recording file duration can be dynamically set, such as 1 minute, 3 minutes, 5 minutes, etc. Segmentation 
condition: while (Video duration >= max duration) 
– If the audio duration is reached first, it will wait for the video duration. 
– If the video duration is reached first, it will segment. 
 
3. Main Stream 
While writing to disk, callback a copy of H264 or ts data.  
How to enable: Pass in the parameter VIDEO_FRAME_MODE_DUAL_SOURCE or VIDEO_FRAME_MODE_DUAL_PACKET 
when calling startRecord. 
 
4. Sub-stream 
Do not write to disk, and only callback a copy of H264 data or ts data.  
How to enable: Pass in the parameter VIDEO_FRAME_MODE_SOURCE when calling startRecord. 
 
5. File Protection 
When a collision is triggered,  a period of video will be saved automatically to a specified directory. 
 
6. Keypoint Protection 
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
MT8675 Android DVR 
User Manual 
Confidential B 
Used to record the data from a certain period before and after the current time (e.g., 10 seconds before and after) to a 
specified directory. 
 
7. Loop Recording 
After DVR starts, it will continue recording indefinitely, automatically segmenting files at fixed intervals. 
 
8. Loop Deletion 
When the SD storage card is nearly full, it automatically deletes the oldest files. 
 
9. File Header I Frame 
The first frame of each segmented file is an I-frame to avoid screen distortion during playback. 
 
10. Audio Mute 
Audio recording can be dynamically turned on or off before and after recording. 
 
1.2 Architecture/Process Overview 
 DVR Architecture 
Figure 1-1 shows the DVR architecture. The Demo APK calls the SDK interface, which communicates with the server side 
through a binder call to the CarCamDeviceClient section. The CarCamDeviceClient interfaces with the CameraDeviceClient 
and RecorderMgr. 
DVRArchitecture
CarCamDeviceClient
CameraDeviceClient
 RecorderMgr
StagefrightRecordSm
p
MediaWriterSmp
File Recording
MPEG4WriterSmp
MPEG2TSWriterSmp
1. Storage/Transmission parameter configuration
2. Setup MediaCodec/MediaCodecSource
3. Setup Writer
1. Storage/Transmission parameter configuration
2. Notify app message
3. Setup stagefrightRecordSmp
SdcardCheck
1. Detect SD card read/write speed
2. Check SD card remaining space/cyclic
deletion
 
Figure 1-1. DVR architecture 
 
 
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
MT8675 Android DVR 
User Manual 
Confidential B 
 DVR Flow 
Figure 1-2 represents the overall flow of the DVR, taking MP4 recording as an example. 
 
Firstly, recorderMgr is the recording manager, and a new recorderMgr instance is created for each recording channel. 
Under recorderMgr, a StagefrightRecordSmp instance is instantiated. MediaCodecSource sends the data to the encoder for 
encoding, and once encoded, the data are returned through mediaCodecSource. 
 
Video: The data source before encoding is the camera, which sends data to the bufferqueue. The data are then passed 
through graphicBufferSource and OMX to the encoder for encoding. The encoded data are in H264 format and then stored 
in MediaCodecSource. 
 
Audio: The data source before encoding is the microphone. Data are retrieved from the mic and then encoded. The 
decoded data format is AAC. 
 
Writer: There are two tracks, the video track and the audio track. The track continuously reads data from 
MediaCodecSource. According to the MP4 format, it packages the data, adds some specification information, and then 
writes it to the SD card file. 
 
 
Figure 1-2. DVR flow 
 
 MP4 Writer Flow 
Figure 1-3 represents the MP4 writer flow, which has no big difference from the TS flow. The difference is that due to the 
absence of header file information in TS, TS writer writes one frame of video followed by one frame of audio. TS writer 
selects the smaller PTS between video and audio and returns the index to determine whether to write video or audio next. 
 
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
MT8675 Android DVR 
User Manual 
Confidential B 
1
ThreadFunc
ThreadEntry(AudioTrack)
ThreadEntry(VideoTrack)
 Chunk
Sample
H264
AAC
 Chunk
Sample
push
push
chunkInfo
push
xxx.mp4
3. write data
2. write ftyp
4. write moov
1. create new file
When file segment
readSource
readSource
 
Figure 1-3. MP4 writer flow 
 
1.3 Configuration/Customization Guideline 
 Three Entry Points to the Recorder 
1) startRecord 
2) stopRecord 
3) notifyRecordEvent: Dynamically sets parameters 
 
 Common DVR Features 
1.3.2.1 Sub-stream 
The sub-stream is not written to disk; it only callbacks a copy of H264 data or TS data.  
How to enable: Pass in the parameter VIDEO_FRAME_MODE_SOURCE when calling startRecord. The difference between 
normal recording and sub-stream is that normal recording writes to the disk, whereas the sub-stream callbacks the data. 
The recorderMgr has two outTracks that read data from mediaCodecSource, callback H264 and AAC data, and then notify 
the APP. 
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
MT8675 Android DVR 
User Manual 
Confidential B 
 
 
Figure 1-4. Sub-stream flow 
 
1.3.2.2 Keypoint Protection 
 
Feature: Protects a specified duration of video by moving it to the protect directory. 
 
Application Scenarios: 
Case 1. Manual marking: While driving, a user sees a particularly beautiful scene and wants to protect the video by 
manually triggering event marking protection. 
Case 2. Passive marking: During driving, a sudden car collision occurs, and the user wants to protect the video from before 
and after the collision to determine accident responsibility. Gsensor collision triggers event marking protection. 
 
Actual Operation: Extracts a specified duration of video from the currently recording video file, generates a new video file, 
and places it in the protect directory. 
API： 
lockRecordingVideo(int duration); 
Parameter: The higher 16 bits of duration represent the forward protection duration, and the lower 16 bits represent the 
backward protection duration. Customers can specify the forward and backward protection durations; if no forward 
duration is set, the default forward protection duration is the same as the backward. 
 
 
 
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
MT8675 Android DVR 
User Manual 
Confidential B 
 
Keypoint protection has the following three cases: 
Use a 10-second pre and post protection as an example: The keypoint occurs at 30s, resulting in a regular recording 
duration that is less than the usual 60s. An emergency recording file of 20s will be created (10s before the keypoint + 
10s after the keypoint).
1) The normal recording file after the keypoint will be saved to the sdcard/dcim/camera/front directory.
2) The emergency recording file will be moved to the sdcard/dcim/camera/protect/keypoint directory.
0 60
30
40
4020
Normal recording file
Time
Keypoint time
Emergency recording file
Time
Normal recording file 
after keypoint protection
Time 0 The current file duration becomes 
40s(30s+10s)
Extract a 20-second data segment 
from the regular recording files 
before and after the keypoint time.
KeypointProtectionCase1
 
0 60
55
65
6545
Normal recording file
Time
Keypoint time
Emergency recording file
Time
Normal recording file 
after keypoint protection
Time 0 The current file duration becomes 
65s(55s+10s)
Extract a 20-second data segment 
from the regular recording files 
before and after the keypoint time.
Keypoint Protection Case2
Use a 10-second pre and post protection as an example: The keypoint occurs at 55s, resulting in a regular recording 
duration that is less than the usual 60s. An emergency recording file of 20s will be created (10s before the keypoint + 
10s after the keypoint).
1) The normal recording file after the keypoint will be saved to the sdcard/dcim/camera/front directory.
2) The emergency recording file will be moved to the sdcard/dcim/camera/protect/keypoint directory.
 
 
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
MT8675 Android DVR 
User Manual 
Confidential B 
Use a 10-second pre and post protection as an example: The keypoint occurs at 65s. The range of the 
emergency recording spans across two regular recording files.
A 20s emergency recording file will be created (10s before the event + 10s after the event). The file consists 
of 5 seconds from the previous file and the 15 seconds from the current file.
1) The normal recording file after the keypoint will be saved to the sdcard/dcim/camera/front directory.
2) The emergency recording file will be moved to the sdcard/dcim/camera/protect/keypoint directory.
0 60
65
60
7555
Normal recording file
Time
Keypoint time
Emergency recording file
Time
Normal recording file 
after keypoint protection
Time 0 The current file duration becomes 
15s(60~65 + 65~75)
120
75
Merge the normal recording files 
before and after the keypoint to 
create a 20-second data file.
Keypoint Protection Case3
 
 
1.4 Frequently Asked Questions/Troubleshooting 
 Common DVR Issue Analysis 
1.4.1.1 DVR Crashes due to Unconfigured Metadata Resolution 
Error Log: create stream fail 
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
 
Root Cause: 
The camera HAL checks the metadata configuration based on the resolution and format passed down from the upper layer 
and then creates a stream. If it is not configured in the metadata, it will lead to the failure of stream creation. 
Solution: 
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
MT8675 Android DVR 
User Manual 
Confidential B 
Add the configuration in mt6771/hal/imgsenor_metadata/common/config_static_metadata_scaler.h (by 
default, the preview is in yuv420_888 format, and DVR is in IMPLEMENTATION_DEFINED format, the camera HAL will 
convert it to yv12. Please add all formats for that resolution, for example, for yv12 refer to the following) 
CONFIG_ENTRY_VALUE(HAL_PIXEL_FORMAT_YV12, MINT64) 
CONFIG_ENTRY_VALUE( 2560 MINT64) 
CONFIG_ENTRY_VALUE( 1920, MINT64) 
CONFIG_ENTRY_VALUE(MTK_SCALER_AVAILABLE_STREAM_CONFIGURATIONS_OUTPUT , MINT64) 
CONFIG_ENTRY_VALUE(66666666, MINT64)    // frame duration 
CONFIG_ENTRY_VALUE(33333333, MINT64)    // stall duration 
 
1.4.1.2 Incorrect Format Configuration in Comprofile Leads to Recorded Videos 
Having Sound but No Image 
Error Log:  
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
 
Root Cause: 
The camcorderProfile is set with the video encoder format as H263, which causes the recorded video to lack video data. 
 
Solution: 
1. Change the resolution added by the customer in 
device\mediatek\corresponding_project\media_profiles.xml to h264 as follows: 
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
        </EncoderProfile> 
 
2.  Refer to the camcorderMcam demo where camcorderProfile.videoCodec is set to MediaRecorder.VideoEncoder.H264. 
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
MT8675 Android DVR 
User Manual 
Confidential B 
 
1.4.1.3 Audio Error Causes DVR to Crash 
Error Log:  
CarCamDeviceClient07-23 14:34:40.560212   632  5835 E AudioRecord: start(60): status -38 
07-23 14:34:40.560237   632  5835 D AudioRecord: start(60): return status -38 
07-23 14:34:40.560297   632  5835 D AudioRecord: ~AudioRecord(60): mStatus 0 
 
Root Cause: 
Audio start error leads to DVR start error. 
 
Solution: 
The audio owner indicates that there is only one audio path at the bottom layer, and attempting to start another path 
before the first has started will cause the start to fail. The APK should not handle each start record in a separate thread. 
 
1.4.1.4 SD Card Errors Lead to Data Accumulation and DVR Errors 
Error Log:  
Line 4303: 06-10 18:36:53.491197  1044 22716 I ActivityManager:   ntv   ??  700733: 
smartplatformserver (pid 611) native 
    Line 4695: 06-10 18:37:42.784050  1044  1141 I AnrManager:   48% 
611/smartplatformserver: 24% user + 23% kernel / faults: 24655 minor 7193 major 
Line 436043: 06-10 18:14:53.203727   611  2971 I CarCamDeviceClient: 
[0][notifyStatusChanged] usage = 5, status=3, arg1=6, arg2=comment=sdcard_damaged , arg3:0 
Line 499031: 06-10 18:15:43.163869   611  2969 I RecorderMgr: [Cam_1#Rec_0][recordMgrNotify] 
param: comment=sdcard_damaged 
Line 499034: 06-10 18:15:43.163988   611  2969 I CarCamDeviceClient: 
[1][notifyStatusChanged] usage = 5, status=3, arg1=6, arg2=comment=sdcard_damaged , arg3:1 
Line 505241: 06-10 18:15:48.164704 611 3061 E MPEG4WriterSmp: 
[Cam_1#Rec_0][bitrateCheckThread] [1]preBitrate:500000, buffer so large,stop record, 
mNotifySdcardDamaged:1  
 
Root Cause: 
SD card damage or other reasons cause the read/write speed to slow down, leading to excessive data accumulation and 
DVR error. 
 
Solution: 
Ask the customer to replace the SD card for testing, and when the mNotifySdcardDamaged message is triggered, refer to 
the VideoCallback registered in CarcoderDemoActivity.java and implement stop record for the sdcard_damaged message 
to prevent memory leak. 
 
1.4.1.5 Resolution Exceeds Encoder Capability Causing DVR Errors 
Error Log:  
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
MT8675 Android DVR 
User Manual 
Confidential B 
01-17 16:18:27.647951   567  3129 E MtkOmxVenc: [0xf01c2000] [ERROR] cannot support H.264 
(2560x1920) encoder 
01-17 16:18:27.647972   567  3129 E MtkOmxVenc: [0xf01c2000] [ERROR] cannot init encode 
driver 
 
Root Cause: 
The maximum resolution supported by 8666/8667 VENC is 1080p. 
 
Solution: 
DVR recording needs to be set to 1080P or lower resolution. 
 
1.4.1.6 Removing the SD Card during Recording 
Error Log:  
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
 
Root Cause: 
When the SD card is removed, the APK receives a broadcast, ACTION_MEDIA_EJECT , and then the APK will perform the 
stop record action, and the lower layer stops recording. However, after vold issues this broadcast, it immediately kills the 
process still using the SD card, killing smartplatformserver, and then causing the stop recording to fail. 
 
Solution: 
In /system/vold/utils.cpp, at the very beginning of the function killProcessesUsingPath, add a 5-second wait: 
if(sSleepOnUnmount) sleep(5); 
Vold issues this broadcast and waits for the stop recording to finish, so vold will not kill smartplatformserver. 
 
 
 
 
  
 
 
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
MT8675 Android DVR 
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
# SRC0190 MT8676_Android_FastRVC_User_Manual_ V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_FastRVC_User_Manual_ V1.0.pdf

SHA-256：fa5f43dca8d4f35cfc6086c274a06e5e71f73af28f9fd5587977ab8f3dc668b2

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0190.html)

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
Version History 
Version Date Author Description 
1.0 2024-08-12 Yunjie Wu Official release 
 
  
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
1.4.3 Customer Manual Modification Required for Quick Display ········································································· 6 
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
MT8676 Android FastRVC 
User Manual 
Confidential B 
1 FastRVC 
1.1 Overview 
This chapter introduces the basic functions of MT8676 FastRVC and how to debug FastRVC problems. 
 
The full name of FastRVC is Fast Rear View Camera. Quick reversing requires the camera feed to be displayed within 4 
seconds after a cold boot. Normally, it takes more than ten seconds to display the camera picture after the processes of 
cameraserver, camerahalserver, surfaceflinger, etc. are started, which cannot meet the requirement of fast reversing; 
therefore, the FastRVC (instantcam) program was developed to realize the fast reversing function. 
 
1.2 Architecture/Process Overview 
 
Figure 1-1. FastRVC flow 
 
FastRVC (instantcam) is a process started during the boot phase after the file system is mounted. It mainly monitors 
reversing events and then sends them to the framebuffer to display the reversing screen. 
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
The project enables the fast reversing function, and the configuration is modified as follows: 
device/mediatekprojects/auto8676p1_64_bsp_fp/device-vext.mk 
+ PRODUCT_COPY_FILES += 
$(LOCAL_PATH)/instantcam.rc:$(TARGET_COPY_OUT_VENDOR)/etc/init/instantcam.rc 
device/mediatekprojects/auto8676p1_64_bsp_fp/instantcam.rc 
+ service instantcam /vendor/bin/instantcam 
+ class core 
+ oneshot 
+ socket rvc_socket stream 660 radio system 
+ group audio camera input drmrpc sdcard_r sdcard_rw system media graphics 
 
The reverse signal is turned on by default when the machine is powered on: 
vendor/mediatek/proprietary/hardware/external/mtkInstantCam/instantcam.cpp 
-#define MTK_DEFAULT_CAR_REVERSE_SUPPORT 0 
+#define MTK_DEFAULT_CAR_REVERSE_SUPPORT 1 
 
Specify the sensor type of the current project: 
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
Indicates using the DMS sensor in muti as the sensor of FastRVC, which can be modified as needed. 
  
1.4 Frequently Asked Questions/Troubleshooting 
 FastRvc Issue Debug 
1.4.1.1 Showing Image Time of FastRvc Quick Reverse Function  
Time nodes of the startup phase: 
 
adb shell cat /proc/bootprof (unit: ms) 
 
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
 
 Customer Manual Modification Required for Quick Display 
FastRVC has some modifications and cannot be uploaded to the main project by default. Therefore, in the version released 
to customers, this function is not enabled. If customers are sensitive to RVC time, they need to refer to the time 
optimization part of the MediaTek public version fp project for modification to achieve the goal of fast showing. 
 
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

