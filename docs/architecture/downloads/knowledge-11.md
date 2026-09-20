# SRC0055 android系统起不来分析.pdf

来源：培训材料/PVT技术分享文档/android系统起不来分析.pdf

SHA-256：aa85206665a9f9761cc089882b5538814f24de8a07ef0285cc9fc8abc347eb2f

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0055.html)

## PDF物理页 1

一、Hypervisor Bootup 流程
1、当平台上电之后，Boot ROM 会加载并跳转到 SOS LK2。SOS LK2 会完成一些基本的硬件
初始化，加载 kernel、 tinysys、tee、gz 等镜像，最后通过 TF-A 跳转到 nebula，开始初始
化虚拟机。虚拟机在完成自身的一些初始化之后，会启动一个名为 SOS 的任务，根据相关
配置文件，启动 SOS 虚拟机。
2、SOS 虚拟机按照 kernel、initramfs、systemd 的顺序依次完成初始化。 systemd 初始化
完成之后，会启动各种用户层服务，其中一个是虚拟机服务进程 nbl_vm_srv。nbl_vm_srv 会
解析配置文件 vm_srv_cfg.pb.txt，根据相应的配置启动 UOS 虚拟机。
3 、 对 于 每 一 个 UOS 虚 拟 机 ， nbl_vm_srv 进 程 会 启 动 一 个 对 应 的 虚 拟 机 管 理 进 程
nbl_vmm 。 nbl_vmm 进 程 会 读 取 虚 拟 机 配 置 文 件 uos_alps_pv8676.lua （ 或
uos_tbox_pv8676.lua），根据配置创建 bootloader、初始化后端驱动，并序列化 CPU、内存、
irq 等配置，传递给 nebula 启动 UOS。
4、nebula 创建好 UOS 虚拟机后，跳转到 UOS LK2，开始启动 UOS。最后，UOS 开始自己
的启动流程。SOS 启动完成之后，服务 nbl_yocto_cpu_offline.service 会按 CPU 分配策略关
闭 SOS 的 vCPU。UOS Android 启动完成后，init.project.rc 会按 CPU 分配策略关闭 UOS
Android 的 vCPU。UOS TBox 启动完成后，会在 initramfs 阶段的 uos_earlyinit 脚本、systemd
阶段的 uos_init.service 按 CPU 分配策略关闭 UOS TBox 的 CPU。
二、android 端 Bootup 流程

## PDF物理页 2

1、loader 层：上电之后，先执行 bootrom 中的 bootcode，将 bootloader 从外部 flash 加
载到 SRAM 中，对 DRAM 进行初始化，拉起 Linux kernel 。Boot Loader 分为 preloader 和
LK 两大部分，preloader 运行在 SDRAM 中，LK 运行在 DRAM 中，LK 会去加载 kernel 程
序。
2、kernel 层：首先启动 0 号进程，用于初始化进程管理、内存管理、加载驱动程序；再 fork
出 2 号进程，2 号进程是所有 Linux 内核进程的鼻祖。
3、native 层：kernel 层的驱动程序加载完毕之后，硬件设备驱动与 HAL 层进行交互，启
动 1 号进程。
4、native 层：init 进程（1 号进程）启动之后会启动各种用户守护进程，并且会启动
servicemanager （binder 服务管家）等重要服务，同时解析对应的配置文件 init.rc 并且 fork
出 Zygote 进程。
5、Zygote 进程是介于 native 层与 Java 层的进程，它会加载虚拟机 JVM，注册 JNI 函数，
打通 native 到 Java 层的通道，并且启动 systemserver（负责整个 Java 框架）以及第一个
应用程序进程启动器。
三、Android Bootup 日志分析
1、系统起不来问题首先需要抓串口 log，根据需要也可能要抓 logcat
（1）抓份不能开机的串口 log
（2）抓份正常开机的串口 log 用来对比
2、检查关键字或者关键 log
[ 28.914299][T1200903] kworker/u16:3: [name:nebula_log_driver&]nebula: (4)[00036.748]
02443.03973> [INFO:vhm_service_impl.cc(162)] VM - 0 Created // 创建 android 虚拟机

## PDF物理页 3

...
[ 29.190462][T1400010] kworker/u16:1: [name:nebula_log_driver&]nebula: (4)[00036.980]
02443.03973> [INFO:vhm_service_impl.cc(232)] VM - 0 Start Success // 开始加载 android 虚拟
机
...
rst from: kernel //Android 系统复位时的状态和寄存器值，可判断上次在什么阶段重启
MODE: 0x14d
STA: 0x0
LENGTH: 0x16800
INTERVAL: 0xfff
SWSYSRST: 0x0
LATCH_CTL: 0xf21e79
NONRST_REG: 0x0
NONRST_REG2: 0x6c000800
DEBUG_CTL: 0x0
REQ_MODE: 0xfd00e3
REQ_IRQ_EN: 0x7d00e1
...
welcome to lk2 // android lk2 start
lk variant: BL33
boot args 0x0 0x0 0x0 0x0
version:
arch: arm64
platform: mediatek
target: auto8676p1_64_ufs
project: auto8676p1_64_hyp-an
buildid: 202512181841_
hello platform_init
...
boot_linux_fdt:728: lk finished --> jump to linux kernel 64Bit // android LK2 jumps to android
kernel
...
[ 30.719316][T1300010] kworker/u16:1: [name:nebula_log_driver&]nebula: (2)[00038.555]
04922.05461> [ 0.000000][ T0] swapper: [name:setup&]Booting Linux on physical CPU
0x0000000000 [0x411fd461] // start android kernel
[ 30.724035][T1300010] kworker/u16:1: [name:nebula_log_driver&]nebula: (2)[00038.557]
04922.05461> [ 0.000000][ T0] swapper: [name:main&]Linux version 6.1.124
(oe-user@oe-host) (clang version 18.1.2 (https://github.com/llvm/llvm-project
26a1d6601d727a96f4301d0d8647b5a42760ae0c), GNU ld (GNU Binutils) 2.42.0.20240216
[ 30.731327][T1400010] kworker/u16:1: [name:nebula_log_driver&]nebula: (2)[00038.559]
04922.05461> ) #1 SMP Wed May 28 06:47:14 UTC 2025
[ 30.732861][T1400010] kworker/u16:1: [name:nebula_log_driver&]nebula: (2)[00038.562]
04922.05461> [ 0.000000][ T0] swapper: [name:setup&]Machine model: MT8646
[ 30.734718][T1400010] kworker/u16:1: [name:nebula_log_driver&]nebula: (2)[00038.563]

## PDF物理页 4

04922.05461> [ 0.000000][ T0] swapper: earlycon: [name:earlycon&]pl11 at MMIO
0x0000000ffff32000 (options '')
[ 30.734720][T1400010] kworker/u16:1: [name:nebula_log_driver&]nebula: (2)[00038.565]
04922.05461> [ 0.000000][ T0] swapper: printk: bootconsole [pl11] enabled
...
[ 34.071500][T1700010] kworker/u16:1: [name:nebula_log_driver&]nebula: (5)[00041.519]
04125.05839> [ 2.327425][T500001] init: init 3: init first stage started!
[ 34.071501][T1700010] kworker/u16:1: [name:nebula_log_driver&]nebula: (5)[00041.521]
04125.05839> [ 2.330532][T500001] init: init 3: Loading module
/lib/modules/virtio_mmio.ko with args '' // android init 加载 ko 阶段
...
[ 35.209199] nbl_vm_srv[2580]: [vmid:0][ 3.660073][T500001] init:
[name:bootprof&]BOOTPROF: 3660.072931:Kernel_init_done // android kernel init done
...
[ 45.693227] nbl_vm_srv[2580]: [vmid:0][ 14.300423][T600001] init: init 3: init second
stage started!
...
[ 47.177577] nbl_vm_srv[2580]: [vmid:0][ 15.776582][T600001] init: init 22: Parsing file
/system/etc/init/hw/init.rc... //android init 解析 rc 文件
[ 47.177686] nbl_vm_srv[2580]: [vmid:0][ 15.780169][T600001] init: init 22: Added
'/init.environ.rc' to import list
[ 47.177780] nbl_vm_srv[2580]: [vmid:0][ 15.782095][T600001] init: init 22: Added
'/system/etc/init/hw/init.usb.rc' to import list
[ 47.177891] nbl_vm_srv[2580]: [vmid:0][ 15.786321][T600001] init: init 22: Added
'/init.mt8676.rc' to import list
[ 47.178364] nbl_vm_srv[2580]: [vmid:0][ 15.790095][T600001] init: init 22: Added
'/vendor/etc/init/hw/init.mt8676.rc' to import list
[ 47.178461] nbl_vm_srv[2580]: [vmid:0][ 15.793129][T600001] init: init 22: Added
'/system/etc/init/hw/init.usb.configfs.rc' to import list
...
[ 60.254774] nbl_vm_srv[2580]: [vmid:0][ 28.655972][T400282] init:
[name:bootprof&]BOOTPROF:modprobe: Load_Module_DONE // android ko 加载完成
...
[ 61.429593] nbl_vm_srv[2580]: [vmid:0][ 30.083792][T500001] init: init 37:
[29985][0]processing action (zygote-start) from (/vendor/etc/init/hw/init.mt8676.rc:757)
[ 61.429717] nbl_vm_srv[2580]: [vmid:0][ 30.090718][T600282] init:
[name:bootprof&]BOOTPROF: 30090.716917:INIT:zygote-start // 启动 android zygote 进程
...
[name:bootprof&]BOOTPROF: Zygote:Preload End
...
[ 61.516762] nbl_vm_srv[2580]: [vmid:0][ 30.108108][T500282] init:
[name:bootprof&]BOOTPROF: 30108.106763:INIT:early-boot // android 进入 early-boot 阶
段，负责一些基础服务和参数的设置
...

## PDF物理页 5

[ 68.947613] nbl_vm_srv[2580]: [vmid:0][ 36.379110][T601083] system_server:
[name:bootprof&]BOOTPROF: 36379.108394:Android:SysServerInit_START // 启动 system
server
...
[ 77.160856] nbl_vm_srv[2580]: [vmid:0][ 45.560415][T201083] system_server:
[name:bootprof&]BOOTPROF: 45560.411492:Android:SysServerInit_END
...
[ 79.435652] nbl_vm_srv[2580]: [vmid:0][ 48.057200][T500282] init:
[name:bootprof&]BOOTPROF: 48057.199422: OFF (KO:236) // android 开机完成
（1）如果串口 log 里面没有走到 LK，说明在 PL 就卡住了
（2）"lk finished --> jump to linux kernel"
如果串口 log 里面没有走到这里，但是上面走到了，说明在 lk 卡住了，这句表示进入 kernel
（3）kernel 日志获取
① 通过串口获取，过滤 vmid:0
② 导出 yocto 和 android 端的 debuglogger
（4）"Kernel_init_done"
这句表示 kernel 初始化完成了，正准备启动 init 进程，如果这就没有走到：请搜索关键字
initcall， initcall 是顺序执行例如 module_init 注册的 init 函数，看看卡在哪个 call back 上
（5）"BOOTPROF"
这是开机过程中，每走过一个重要阶段都会打印的标志，例如上面 Kernel_init_done 这一句
就会打上这个标志
（6）"init first stage"
这句表示 init 进程正常起来执行
Init 正常启动
init: init 3: init first stage started!
init: init 3: init second stage started!
mount 成功
[ 44.419782] nbl_vm_srv[2580]: [vmid:0][ 12.763235][T600001] init: init 6: [libfs_mgr]
__mount(source=/dev/block/by-name/metadata,target=/metadata,type=f2fs)=0: Success
[ 44.694849] nbl_vm_srv[2580]: [vmid:0][ 12.967287][T500001] init: init 6: [libfs_mgr]
__mount(source=/dev/block/dm-8,target=/system,type=erofs)=0: Success
[ 44.822179] nbl_vm_srv[2580]: [vmid:0][ 13.019785][T500001] init: init 9: [libfs_mgr]
__mount(source=/dev/block/dm-9,target=/system_ext,type=erofs)=0: Success
[ 44.824283] nbl_vm_srv[2580]: [vmid:0][ 13.058401][T500001] init: init 6: [libfs_mgr]
__mount(source=/dev/block/dm-10,target=/vendor,type=erofs)=0: Success
[ 44.954297] nbl_vm_srv[2580]: [vmid:0][ 13.089545][T500001] init: init 6: [libfs_mgr]
__mount(source=/dev/block/dm-11,target=/product,type=erofs)=0: Success
[ 44.955448] nbl_vm_srv[2580]: [vmid:0][ 13.124761][T500001] init: init 6: [libfs_mgr]
__mount(source=/dev/block/dm-12,target=/vendor_dlkm,type=erofs)=0: Success
[ 45.071713] nbl_vm_srv[2580]: [vmid:0][ 13.155828][T500001] init: init 9: [libfs_mgr]
__mount(source=/dev/block/dm-13,target=/odm_dlkm,type=erofs)=0: Success
[ 45.192084] nbl_vm_srv[2580]: [vmid:0][ 13.185361][T500001] init: init 9: [libfs_mgr]
__mount(source=/dev/block/dm-14,target=/system_dlkm,type=erofs)=0: Success

## PDF物理页 6

[ 50.374773] nbl_vm_srv[2580]: [vmid:0][ 18.683285][T500001] init: init 25:
[18196][0][libfs_mgr]__mount(source=/dev/block/by-name/nvcfg,target=/mnt/vendor/nvcfg,typ
e=ext4)=0: Success
异常日志示例如下
（7）"fs_mgr" 和"e2fsck"
这里标志是在检查和 mount 文件系统，如果失败会有类似如下的 log：fs_mgr_mount_all
returned an error fs_mgr_mount_all returned unexpected error 255
（8）"zygote"
init: [name:bootprof&]BOOTPROF: 30090.716917:INIT:zygote-start：这里表示要启动
zygote，如果没有这一句表示 zygote 还没启动，则要检查之前的 initrc 执行情况，文件系统
mount 情况
（9）"SysServerInit"
[ 68.947613] nbl_vm_srv[2580]: [vmid:0][ 36.379110][T601083] system_server:
[name:bootprof&]BOOTPROF: 36379.108394:Android:SysServerInit_START // 启动 system
server
[ 77.160856] nbl_vm_srv[2580]: [vmid:0][ 45.560415][T201083] system_server:
[name:bootprof&]BOOTPROF: 45560.411492:Android:SysServerInit_END
如果没有上述关键字，需要查看具体日志哪里发生了 crash。
（10）"system_server"
这里表示 system_server 有起来
（11）"init: [name:bootprof&]BOOTPROF: 48057.199422: OFF (KO:236)"
表示开机流程正常结束，进入安卓
3、抓 logcat 的情况：
[21.779899][T700289] init: [name:bootprof&]BOOTPROF: 21779.897282:INIT:zygote-start
zygote 起来后，android 系统起不来，可以抓 logcat
四、其他方式
1、adb shell ps -A |grep launcher launcher 进程是否启动
2、adb shell ps -A |grep zygote zygote 是否启动
3、adb shell mount，正常示例如下
4、adb shell df -h

## PDF物理页 7

3、和 4、都可以查看当前分区 mount 的状态
5、查看开机阶段 adb shell cat /proc/bootprof
6、另外可借助回读 expdb 分区，抓一些 aee_exp 信息协助分析。


---
# SRC0056 Auto Adsp Task Config Guide.pdf

来源：培训材料/PVT技术分享文档/Auto Adsp Task Config Guide.pdf

SHA-256：742b67255442b38bb988886d439719d4b7c920262f99e3aed59eb514ff803657

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0056.html)

## PDF物理页 1

auto dsp task config guide 
1.背景 
Auto adsp 中会存在多个 task (bus out)，且每个 task 根据需求及实际场景不同，需要配置不同
的算法处理参数，例如 channel in，channel out 及是否 bypass 算法等。同时，一般需要将各路 bus
的 channel 映射到最终输出的 TDM 格式中对应的 channel 位置，即需要配置 channel map 信息，
故提供 audio_dsp_config.xml 配置修改 auto dsp task 的各项属性及 mix path。一般的 adsp 中的 task
架构如图： 
 
Figure 1 adsp architecture 
2.Xml 配置说明 
⚫ 路径 
Xml 在设备上的 path 如下：vendor/etc/audio_dsp_config.xml 
在 code 中 path 如下：device/<project_name>/ audio_dsp_config.xml 
2.1 mixer_target & mixer_source 
xml 中将每个 dsp task 根据其在 dsp 中的 mixer 的位置分为了 sw_mixer_target 和 
sw_mixer_source。对于 Task Music，其即是 sw_mixer_target,也是 sw_mixer_source。 
⚫ sw_mixer_target 
对应于 sw_mixer 的输出端，如 Task Music, Task Playback, Task SubPlayback 
⚫ sw_mixer_source 
对应于 sw_mixer 的输入端，如 Task PB0 (name=”sw_mixer_playback0”) 
 MediaTek Confidential Release for Mediatek Confidential PVT use
MediaTek Confidential Release for
Mediatek Confidential PVT use
MediaTek Confidential Release for
Mediatek Confidential PVT use
 MediaTek Confidential Release for PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 2

task 作为 target 或者 source 是不可配置的，其角色是预定好的，但是可以通过 xml 配置
sw_mixer_source mix 到期望的 target 中。对应的修改方法是在 xml 中，将对应 name 的
sw_mixer_source 节点写到对应的 sw_mixer_target 的节点下，如下例子表示 task PB0 
(sw_mixer_playback0) 将会 mix 到 task music(sw_mixer_music)中。 
Ex1: 
        <sw_mixer_target name="sw_mixer_music" ch_in="2" ch_out="16" aurisys_on="1"> 
            <sw_mixer_source name="sw_mixer_playback0"> 
                <profile ch_in="2" ch_out="2" aurisys_on="0" 
                         ch_map="0x5555,0xaaaa"/> 
            </sw_mixer_source> 
       </sw_mixer_target> 
 
目前可以配置的 sw_mixer_source 有：sw_mixer_playback0 ~ sw_mixer_playback15, 
sw_mixer_FM_ADSP,  sw_mixer_hfp_client_rx, sw_mixer_anc, sw_mixer_extstream1, 
sw_mixer_extstream2, sw_mixer_ktv 
2.2 task attribute 
在每个 dsp task，由于场景需要，会配置不同的算法输入输出 channel 及 channel map 信息。
在 xml 中，可以为每个 task 分别配置下列属性： 
⚫ for sw_mixer_target 
➢ ch_in：Task 的算法输入 channel 
➢ ch_out：Task 的算法输出 channel 
➢ aurisys_on：是否开启 Task 算法，仅在 ch_in = ch_out 时可配置成 0 
例如，在下面例子中，task music 的算法输入 channel 是 2，算法处理后的输出 channle 是
16，算法非 bypass。 
        <sw_mixer_target name="sw_mixer_music" ch_in="2" ch_out="16" aurisys_on="1"> 
            <sw_mixer_source name="sw_mixer_playback0"> 
                <profile ch_in="2" ch_out="2" aurisys_on="0" 
                         ch_map="0x5555,0xaaaa"/> 
            </sw_mixer_source> 
       </sw_mixer_target> 
⚫ for sw_mixer_source，每个 profile 有如下属性 
➢ ch_in：Task 的算法输入 channel 
➢ ch_out：Task 的算法输出 channel 
➢ aurisys_on：是否开启 Task 算法，仅对 pb0~pb15 在 ch_in = ch_out 时配置成 0 可生效 
➢ ch_map：source 在向 sw_mixer_target 映射时候的 channle map 信息，是一个数组，
数组中的 index 表示 source 的 channel index，对应的值是一个 16bit 的 value，每一
个 bit 表示是否向 target 对应 channel 映射。如 ch_map="0x5555,0xaaaa" ，
ch_map[0] = 0x5555，表示 source 的 channel 1 映射数值为 0x5555，对应 2 进制为
_map[1] = hc。映射channel15 ,13,11,9,7,5,31,的target则向，0101010101010101
的target向2  channel的source，0101010101010101，对应二进制位xaaaa0
.映射6,114,12,10,8,6,42,  
 MediaTek Confidential Release for Mediatek Confidential PVT use
MediaTek Confidential Release for
Mediatek Confidential PVT use
MediaTek Confidential Release for
Mediatek Confidential PVT use
 MediaTek Confidential Release for PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 3

对 source task，一般其输入 channel 是由数据原始端给出的，如 audioflinger 送下来，可能会
是任意 channel 数量，所以在 source task 中，xml 可配置支持不同的 ch_in 的多种 profile，可以根
据不同的 ch_in 选择不同的 ch_out, ch_map 等信息。例如，如下 task pb14 具有两个 profile，当进
入 adsp 给到 task pb14 的 channel 是 2ch，则使用第一个 profile，如果是 12ch，则使用第二个。 
            <sw_mixer_source name="sw_mixer_playback14"> 
                <profile ch_in="2" ch_out="2" aurisys_on="0" 
                         ch_map="0x5555,0xaaaa"/> 
                <profile ch_in="12" ch_out="12" aurisys_on="0" 
                         ch_map="0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x100,0x200,0x400,0x800,0x1000,0x2000,0x4000,0x8000"/> 
            </sw_mixer_source> 
对于 music task，由于其即是 source，也是 target，则会取其 target 属性中的 ch_in 属性，在
source 中找到对应的 profile 作为其配置。 
3. 配置示例 
这里给出一个 task pb0 配置示例如下： 
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
                         ch_map="0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x100,0x200,0x400,0x800 "/> 
            </sw_mixer_source> 
        </sw_mixer_target> 
 
对应的数据通路流程如下图： 
 MediaTek Confidential Release for Mediatek Confidential PVT use
MediaTek Confidential Release for
Mediatek Confidential PVT use
MediaTek Confidential Release for
Mediatek Confidential PVT use
 MediaTek Confidential Release for PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 4

MediaTek Confidential Release for Mediatek Confidential PVT use
MediaTek Confidential Release for
Mediatek Confidential PVT use
MediaTek Confidential Release for
Mediatek Confidential PVT use
 MediaTek Confidential Release for PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM


---
# SRC0057 DVR分享.pdf

来源：培训材料/PVT技术分享文档/DVR分享.pdf

SHA-256：59ccf9c0f25e88d1113e94af9be0579c4aff1726b00af0081d62ef19f5297ebc

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0057.html)

## PDF物理页 1

DVR模块简介即案例分享
掌锐电子

## PDF物理页 2

 CAMERA DVR背景简介
 CAMERA DVR框架简介
 CAMERA DVR数据流简介
 案例分享

## PDF物理页 3

一、
CAMERA DVR
背景简介
▪DVR，Digital Video Recorder，车机上通常是指行车记录仪。但是汽车上的视频录制功能与手机、
平板等产品线存在较大差别，比如：车载DVR需要能够循环录制，每隔1分钟、5分钟保存一个文
件，若遇到特殊情况，如碰撞等需要保存一段碰撞前后10S的视频到指定目录(protect目录)下，而
安卓原生录制是没有这方面的功能的。

## PDF物理页 4

▪SPM SDK:为了让汽车DVR实现这些特殊功能,MTK提供了一套SDK以便于让开发者快速地开发出车载
DVR相关应用。支持MP4、ts录制以及h264数据callback。
▪SPM SDK 分为两部分，一部分为SPM SDK 由java实现，一部分为service端，app 通过调用spmsdk接
口call 到service端,service主要由以下4个部分去实作，其中dvr功能相关的为carcamdeviceclient，
carcamdeviceclient会对接到cameradevice跟recordmgr，cameradevice主要对接了camera service,而
recordMgr也就是DVR部分。

## PDF物理页 5

▪SPM SDK功能支持
•1、循环录制:APP可以设置循环录制的时间，比如1分钟、2分钟、5分钟等，循环录制过程中不
丢帧
•2、自动删除：当SD卡空间快存满时，会自动删除历史录制文件，APP可以指定删除SD卡剩余
空间阈值
•3、碰撞检查：支持利用芯片内置的Gsensor检查设备是否碰撞、晃动
•4、碰撞保护：当车辆发生碰撞时，保存碰撞发生前后一段时间（比如10s）的视频到指定目录
•5、水印功能：提供录制、拍照常见水印功能

## PDF物理页 6

右图为camera虚拟化框架图
双系统camera数据流向为：
相机硬件 -> Yocto服务 -> VSOCKET -> 
Android。
spm sdk 位于app与cameraserver之间，主
要由两部分组成，
一部分为SPM SDK 由java实现，
一部分为server 端，
app 通过调用spmsdk接口call 到service端进
行处理
二、
CAMERA DVR 
-
 SPM SDK

## PDF物理页 7

下图为DVR架构图，Demo APK CALL SDK接口通过binder call 到server端，就是这里的
CarCamDeviceClient部分，而CarCamDeviceClient会对接CameraDeviceClient和RecoderMgr，
CameraDeviceClient对接cameraserver,RecoderMgr会对接着stagefrightrecordsmp,再往下对接
mediawritersmp，会有mpeg4writesmp与mpeg2tswritesmp 这两个对象继承mediawritersmp这个基
类。recordmgr 这边也是会做检查SD的读写速度，检查sd的剩余空间循环删除功能，RecoderMgr会
去存储/传递参数配置；
比如下层传下来录制的尺寸码率文件路径文件名这些都会从这边传递下来，也会去notify app 
message,比如底层录制完成或者报错会通过recordmgr上报给app,然后会setup 
stagefrightrecordsmp，会去new stagefrightrecordsmp实例，这边也会去会去存储/传递参数配置再去
setup mediacodec/mediacodecSource,把encode那边都setup起来，然后会去setup writer。

## PDF物理页 8

下图为DVR的整体flow,以MP4录制为例。

## PDF物理页 9

1、首先recorderMgr为录制管理器，每一路录制都会new 一个recorderMgr实例，在recorderMgr下同时会new一个
stagefrightRecordSmp（录制处理）的实例。会管理ts、MP4录制。MediaCodecSource会把数据送到encodec编
码，编码完成数据通过MediaCodecSource回去。
2、video:编码前的数据源是camera,camera会把数据送到bufferqueue中，再通过grahicBufferSource、OMX把数
据送到encodec去编码，编码完后的数据就是H264格式，再存到MediaCodecSource
3、Audio:编码前的数据是mic,mediacodecSource会从audiosource里都pcm数据，然后送到encoder那边进行解码
编码，然后生成的aac数据又会回到MediaCodecSource，
4、Writer:有两个track(audioTrack & videoTrack
都有独自的线程接受encoder之后的数据)，
track会从MediaCodecSource持续读取数据，
根据MP4的格式封装，并添加SPEC信息，再写到sdcard文件中

## PDF物理页 10

三、
CAMERA DVR 
-
 EVS_DVR
▪1、MTK除了开发了SPM DVR的方式，同时也基于evs架构上开发了evs_dvr，evsdvr通过evshal进去
打开相机并取流并通过CameraFrameHandler动态库去进行
startRecord/stopRecord/notifyRecordEvent操作，实现开始录制、结束录制、动态设置参数的功能。
此链路非常简单，整个系统的loading不高,其中Evshal取摄像头图像流程如下
①通过EvsEnumerator的openCamera得到EvsCamera实作
②EvsCamera依赖于AidlClientAdapter，AidlClientAdapter提供了open、init、
configure、start、stop、close方法
③AidlClientAdapter通过aidl接口与mtkcam-turbo-android的aidlrpc server通信，
AidlClientAdapter取流时会创建一个enqueLoop线程，线程不断向AidlRpcCamera 
发送请求，图像数据会填充到请求buffer中并通过 processCaptureResult 方法回调
给 AidlClientAdapter。

## PDF物理页 11

四、
CAMERA DVR 
-
 水印定制
水印目前分两种，一种是camera framework水
印，一种是Avm水印：
1. camera framework水印，camera数据回到
framework后在 camera framework 中通过
metadata设定画水印
2. AVM水印，camera数据回到sdk之后，sdk通过
上层设定下的水印参数去处理水印
水印原理：
1.  load json脚本，申请一块rgba的buffer；
2.  往rgba buffer画文字和水印，画笔是skia
3.   把画好的rgba buffer填到camera yuv data对
应的区域

## PDF物理页 12

案例
1 
录制视频丢帧
以编码帧率30帧为例；
上层mdp转化一路流时长为28ms左右，preview加录制两路流处理
时长超过33ms，导致record帧率不够，编码端 inputbuffer和
outputbuffer，导致丢帧、时间戳混乱。
开启多路线程节省sw到mdp hw的时间

## PDF物理页 13

案例
2 
流媒体录制，
RTSP 
连接失败
网络RTSP流媒体数据H264 data，走 DVR 录制逻辑，保
留：循环录制，循环删除，紧急录制等等功能
网络RTSP流媒体数据H264 data已经带了水印信息，只
需要DVR功能，没有camera场景：preview 、capture；
client端会依次执行：连接、发收OPTIONS、发收DESCRIBE、
发收SETUP、发收PLAY、开启recvPacketThrd。
问题出在DESCRIBE和SETUP，服务端实现有两种场景，一种是
在响应DESCRIBE时携带Session Id，一种是在响应SETUP时携
带Session Id。
当采用第二中实现时，client端需要注意，在相同一轮连接里的首
次SETUP请求，不能携带SESSION字段。

## PDF物理页 14

案例
3 
缓存录制
客户有开关可以关闭循环录制，不落盘
在紧急录制时，需要录制紧急事件的前15s后15s视频数据
当循环录制关闭时，无法抽取打点前15s数据，需要dvr缓存前15s视频数据

## PDF物理页 15

案例
4 
下电，视频丢秒
DVR录制时下电进入休眠，上电后查看视频未生成或视频内容丢失
操作系统自身的缓存机制，DVR录制时通过 write 调用写入到的是文件的缓存页上，文件系统自身的
sync 机制触发间隔可能过大 如 30秒，导致下电时缓存中的数据丢失
方案：DVR提供flushRecFile接口，上层定时1秒发送请求，DVR通过 fsync 调用主动触发文件系统 sync 
机制

## PDF物理页 16

案例
5 DVR
相册中，部分视频无缩略图
DVR 录制时，以 open(......, modes: 0777) 创建文件，结束时chmod(..., 0777)，但是app在生成缩略图时
访问发现文件权限异常：0700
由于客户不同项目的SELinux配置存在差异，导致部分分区下无法以 0777 open文件，会被mask为
0700、0660等，进程意外被kill时，由于没有走完 stopRecord 流程，导致权限未被修改为 777
方案：DVR在open后通过 chmod(..., 0777) 调用主动修改权限

## PDF物理页 17

案例
6 
拍照，照片水印错位、花屏
在 EVS DVR 中，CameraFrameHandler 的frameIn用以处理EVS deliverFrame 送来的帧，frameIn依次调用MDP处理、水印处
理，并将处理好的数据根据需要放到previewBuffer（预览）、recordBuffer（录制）、captureBuffer（拍照）
在SPM DVR中，预览、录制应用相同的配置模板，但是拍照的配置模板不同，则预览时拍照可能导致HAL层发生重配流，导致录
制出现短暂卡顿。
方案/注意事项：预览、录制、拍照，为了保证预览中录制、录制中拍照、预览录制中拍照等场景的功能正常，三种数据需要做好解
耦，同时注意若新帧来的快，不能让新帧的水印信息污染正在处理的那一帧，比如拍照时若需要将 yuv 转为 jpeg，这个过程可能有
一定耗时，若元数据被污染，可能导致照片花屏。

## PDF物理页 18

案例
7 USB
相关
使用外接USB，如TF卡出现故障、IO耗时异常，USB性能非常影响DVR功能，fsync, write ,rename, open均会卡住导致异常，需要
DVR做各种handle
1. 为了优化IO、减少文件IO次数，DVR本身维护一个512KB的cache，满时执行 write 调用，DVR会检测write cache的时间，比如
耗时超过100ms输出提示。
2. 对于录制TS视频，由于要进行一定的TS相关格式封装，会有videoBuffer和audioBuffer用以存放已编码好的数据，若出现cache 
write 耗时异常，可能导致buffer中的数据无法及时写入当前录制中的文件，发生丢秒。但是这些数据依然存在，会被录制到下一个
视频。
3. 当缓存被填满时，将上报app录制错误，执行停止录制流程，app则进行弹窗提示，本意在于提醒车主注意TF卡可能出现异常。
4. 停止录制时，为了保证数据一致性，DVR执行 fsync 调用，若TF卡出现异常，会导致fsync严重耗时或卡死，因此DVR将部分
stopRecord流程进行异步操作，保证主线程/进程流程正常，同时app也可监测相关操作的耗时，出现异常时通过及时重启恢复。
5. 删除文件慢，导致紧急录制被卡住；拔U盘fsync慢被kill导致camera不显示，需要DVR删除文件走异步、 拔U盘时停止录制不进
行fsync操作，上层可告知U盘节点，DVR获取U盘节点并测试读写速度

## PDF物理页 19

案例
8 SPM apk
相关
客户的apk架在客户自己的service上，当apk打开时，会将surface给到service做预览，apk退出时，service停止预览。同时service
会根据插拔摄像头做开启和停止录制，时序无法保证
Apk在create stream时surface destory，并继续startpreview
方案：
1. sdk handle当create stream fail时，返回setpreviewsurface null
2. Apk 行为：
setPreviewSurface(surface) - > OK -> startpreview
setPreviewSurface(surface) -> fail -> setPreviewSurface(null)

## PDF物理页 20

案例
9 Timestamp
相关
一、 camera有热插拔功能，当休眠后不close camera会存在timestamp问题；另外audio timestamp慢会导致视频卡顿问题。
video timestamp来源于camera，camera的timestamp使用的是mono time，不是boot time，导致休眠唤醒起来时间不对。同时休眠
时apk没有Close camera，导致休眠起来时的camera timestamp不对
方案：
1. camera修改timestamp为boot time，计算休眠时间
2. Apk 行为，休眠时需要close camera
二、 Audio timestamp不对，导致紧急录制时长不对，视频卡顿等现象
audio timestamp慢了，导致video还没到30s，audio已经到30s时长，紧急录制提前结束。
audio timestamp慢，视频播放时做av sync，video需要等audio先播到对应的timestamp再起播，造成视频卡顿
方案：
1.紧急录制分段以video为标准，当video到达30s时长时才进行分段
2. Audio优化DMA buffer，提升vhost性能

## PDF物理页 21

www.pvetec.com
Thank You


---
# SRC0058 eCall_Overview_V1.2.pdf

来源：培训材料/PVT技术分享文档/eCall_Overview_V1.2.pdf

SHA-256：6ee6bf39eea025810453843da734726f4415bcbe00fa1fe6b95145a2af988855

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0058.html)

## PDF物理页 1

© 2019 - 2024 MediaTek Inc. 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited. 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version: 1.1 
Release date: 2024-03-05 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
eCall Overview

## PDF物理页 2

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 2 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
Document Revision History 
Revision Date Description 
1.0 2023-11-10 Initial release 
1.1 2023-03-05 Update API list 
1.2 2024-05-27 Update API list 
 
Me
dia
Tek 
Co
nfid
enti
al A

## PDF物理页 3

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 3 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
Table of Contents 
Document Revision History ........................................................................................................................ 2 
Table of Contents ...................................................................................................................................... 3 
1 eCall overview ................................................................................................................................. 5 
1.1 eCall introduction ................................................................................................................. 5 
1.2 eCall spec introduction ........................................................................................................ 5 
2 eCall SW architecture ...................................................................................................................... 8 
3 eCall integration .............................................................................................................................. 9 
3.1 eCall flow ............................................................................................................................. 9 
3.1.1 eCall Flow .......................................................................................................... 10 
4 eCall Timer .................................................................................................................................... 15 
4.1 EU CS eCall timer ............................................................................................................. 20

## PDF物理页 4

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 4 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
Lists of Tables and Figures 
Figure 1-1. eCall system overview .......................................................................................................... 5 
Table 1-1. CS eCall functional spec ........................................................................................................ 5 
Table 1-2. CS eCall test spec .................................................................................................................. 6 
Table 1-3. IMS eCall functional spec ....................................................................................................... 7 
Table 1-4. IMS eCall test spec ................................................................................................................ 7 
Figure 2-1. eCall SW architecture ........................................................................................................... 8 
Figure 3-1. eCall flow chart of PSAP .................................................................................................... 14 
Table 4-1. eCall timers in EN16062 ...................................................................................................... 20 
 
Medi aTek C onfidential A

## PDF物理页 5

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 5 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
1 eCall overview 
1.1 eCall introduction 
eCall is an in-vehicle road safety system which automatically calls the emergency services 
in case of a serious accident. As soon as the eCall sensors register a severe impact on a vehicle 
or a call is initiated manually,  
1) eCall In-Vehicle System (IVS) establishes e112 voice connection with the relevant Public 
Safety Answering Point (PSAP).  
2) Send  a Minimum Set of Data (MSD) over the voice connection to PSAP, that includes 
accurate geo-location data 
In April 2015, the European Parliament made it mandatory f or all new models of cars to be 
equipped with eCall technology from 31 March 2018 onward.  The eCall system overview is 
depicted in Figure 2-1. 
 
 
 
Figure 1-1. eCall system overview 
 
1.2 eCall spec introduction 
Basically there are 2 different type s of eCall spec, one is for modem protocol such as 3GPP 
spec, the other is for high layer application spec such EN spec.  Generally MTK will cover 
modem protocol part and provide SDK for customer to integrate  high layer application spec 
with their own application. 
Following is a quick glimpse about those different specs. For detail information please refer to 
the original specs from official websites. 
 
 
 
 
Table 1-1. CS eCall functional spec

## PDF物理页 6

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 6 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
Spec name Description 
ETSI TS 126.267 
(3GPP TS 26.267) 
General description 
ETSI TS 126.268 
(3GPP TS 26.268) 
ANSI-C reference code 
ETSI TS 127.007 
(3GPP TS 27.007) 
6.27 Initiate eCall +CECALL 
ETSI TS 122.101 
(3GPP TS 22.101) 
10.7 Transfer of data during emergency calls 
ETSI TS 124.008 
(3GPP TS 24.008) 
4.4.7 eCall inactivity procedure 
3GPP TS31.102 SIM related requirement for eCall 
ETSI TS 102 936-1 5. UMTS network access eCall NAD conformance tests 
6.GSM network access eCall NAD conformance tests 
EN 16062 eCall high level application requirements(HLAP) 
EN 16072 PE eCall Operating Requirements 
EN 15722 eCall minimum set of data(MSD) 
GOST 33465-2015 Protocols of data exchange between in-vehicle emergency 
call device/system and emergency response system 
infrastructure 
GOST 33464-2015 In-vehicle emergency call device/system. General technical 
requirement 
 
 
Table 1-2. CS eCall test spec 
Spec name Description 
ETSI TS 126.269 
(3GPP TS 26.269) 
eCall Data Transfer; In-band modem solution;  conformance 
test 
ETSI TS134 123-1 13.3 eCall Emergency Call Procedures 
ETSI TS 151 010-1  Conformance specification.  
26.9.6a Structured Calls /eCall 
ETSI TS103 412  Pan-European eCall end to end and in-band modem 
conformance testing; Prose test specification 
EN16454 Intelligent transport systems –ESafety- Ecall end to end 
conformance testing 
GOST 33467-2015 Functional test methods of in-vehicle emergency call 
device/system and data transfer protocols 
GOST 33470-2015 Test methods for wireless communication modules of in-
vehicle emergency call system 
ETSI TS 103 428  eCall HLAP Interoperability Testing

## PDF物理页 7

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 7 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
 
Table 1-3. IMS eCall functional spec 
Spec name Description 
TS24.229 eCall over IMS(NG-eCall) general spec 
RFC8147 NG-eCall SIP part spec 
TS23.122 NG-eCall eCall only mode 
TS24.301 EMM requirement for eCall only mode 
TS23.401 eCall only mode 
TS24.008 MM requirement for eCall only mode 
TS23.216 NG-eCall SRVCC 
TS23.167 eCall over IMS(NG-eCall) general spec 
TS27.007 AT CMD of eCall 
TS31.102 SIM related requirement for eCall 
 
 
Table 1-4. IMS eCall test spec 
Spec name Description 
TS34.229-1 SIP layer test spec of NG-eCall 
TS36.523 UE conformance test spec of NG-eCall

## PDF物理页 8

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 8 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
2 eCall SW architecture 
The Software architecture is depicted in figure 3-1.  
Currently MTK solution supports eCall set-up and in-band modem TX/RX, which conforms to 
ETSI/3GPP standard (green rectangle),  and provides proprietary eCall RIL command. 
Custom needs to integrate eCall platform & application (red rectangle) with the eCall RIL 
command, and uses the product to pass eCall test case.
 
Figure 2-1. eCall SW architecture

## PDF物理页 9

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 9 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
3 eCall integration 
In this chapter, we introduce the detail flow based on eCall EN standards and how customer 
can integrate eCall RIL commands to satisfy those standards. 
3.1 eCall flow 
Although there are different eCall scenarios, the keys steps are same.  Basically, customer 
APP need to handle eCall flow in the following steps:  
⚫ Initiate an ML_MakeFastEcall 
⚫ Maintain eCall timer of IVS side (except T3) which is specified in EN16062. 
⚫ Issue RIL_REQUEST_ECALL_RESET_IVS after receiving 
RIL_UNSOL_ECALL_ALACK_POSITIVE_RECEIVED. Then IVS and PSAP can 
resume voice call connection and talk to each other. 
⚫ Hang up call upon receiving RIL_UNSOL_ECALL_DISCONNECTED or  
RIL_UNSOL_ECALL_ABNORMAL_HANGUP by which PSAP indicates IVS to 
disconnect call. 
Following is the detailed description of eCall flow sequence 
.

## PDF物理页 10

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 10 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
3.1.1 eCall Flow

## PDF物理页 11

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 11 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.

## PDF物理页 12

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 12 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.

## PDF物理页 13

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 13 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.

## PDF物理页 14

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 14 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
 
Figure 3-1. eCall flow chart of PSAP

## PDF物理页 15

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 15 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
4 Ecall API list 
API function 
description Parameter 
int32_t ML_ResetIvs(void); 
reset eCall 
state machine 
in IVS modem, 
and connect to 
audio channel 
  
int32_t 
ML_SetMSD(ml_ecall_set_msd* 
msd); 
Set MSD data 
for eCall 
typedef struct {  
    int32_t call_id; //call id for ecall  
    uint32_t length; // length of msd_data  
    //Encoded MSD content in hex string,  
    unsigned 
 char 
msd_data[ML_ECALL_MSD_MAX_LENGT
H];  
}ml_ecall_set_msd; 
ex. 34344545, which means 4 values : 52 52 
69 69. the length is at most 280 (will be 
convert to 140 bytes). Input msd is byte type. 
int32_t 
ML_SetTestNumber(ml_ecall_set_
num* test_num); 
Set test 
number or URI 
typedef struct {  
    //1: only   type is valid, 2, type and address 
is valid  
    int32_t arg_num;  
    //indicate uri type, optional.1 - number, 2 - 
URI 
    int32_t type;  
    // number or URI, optional  
    char address[128];  
}ml_ecall_set_num; 
int32_t 
ML_SetReconfNumber(ml_ecall_s
et_num* reconf_num); 
Set 
reconfiguratio
n number or 
URI 
typedef struct {  
    //1: only   type is valid, 2, type and address 
is valid  
    int32_t arg_num;  
    //indicate data type, optional.1 - number, 2 
- URI 
    int32_t type;  
    // number or URI, optional  
    char address[128];  
}ml_ecall_set_num;

## PDF物理页 16

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 16 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
API function 
description Parameter 
int32_t 
ML_MakeFastEcall(ml_ecall_req_
msg* msg); 
Trigger an 
ecall and 
transmit MSD 
data in one 
command. 
typedef enum { 
    ML_EMER_CAT_MANUAL_ECALL = 
1,      /* Manual Emergency eCall */ 
    ML_EMER_CAT_AUTO_ECALL   = 
2,     /*  Automatic Emergency eCall */ 
}ml_ecall_category; 
 
typedef enum { 
    ML_ECALL_TEST        = 1,     /* Test eCall 
*/ 
    ML_ECALL_EMERGENCY   = 2,      /* 
Emergency eCall */ 
    ML_ECALL_RECONFIG    = 
3,     /*  Reconfiguration eCall */ 
}ml_ecall_variant; 
 
typedef enum{ 
    ML_DOMAIN_AUTO = 0,      /* Automatic 
mode - LTE(IMS), WG(CS), 1x(C2K) */ 
    ML_DOMAIN_CS_ONLY = 1,   /* CS 
domain only - WG(CS) */ 
    ML_DOMAIN_3GPP_ONLY = 2, /* 3GPP 
only - LTE(IMS), WG(CS) */ 
    ML_DOMAIN_3GPP2 = 3,     /* 3GPP2 
only - 1x(C2K)) */ 
    ML_DOMAIN_IMS_1xCS = 4,  /* IMS and 
1x CS only - LTE(IMS), 1x(C2K) */ 
    ML_DOMAIN_CS_1x = 5,     /* WG CS and 
1x CS only - WG(CS), 1x(C2K) */ 
    ML_DOMAIN_IMS_ONLY = 6,  /* only IMS 
call allowed */ 
}ml_ecall_domain; 
 
typedef struct{ 
    ml_ecall_category   ecall_cat; 
    ml_ecall_variant   ecall_variant; 
    char address[20]; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGT
H]; 
    ml_ecall_domain domain; 
}ml_ecall_req_msg;

## PDF物理页 17

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 17 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
API function 
description Parameter 
int32_t 
ML_SetEmsdpri(ml_ecall_pri* pri); 
set priority of 
test/reconfigur
ation eCall 
number/URI 
The default 
priority is 
“1>3>2>4”. 
typedef struct{  
    int32_t data1;  
    int32_t data2;  
    int32_t data3;  
    int32_t data4;  
}ml_ecall_pri; 
The priority is data1>data2>data3>data4, 
these four parameters should be dif ferent 
from each other and all range from:  
1 - Customer assigned eCall URI  
2 - eCall URI in USIM  
3 - Customer assigned eCall number  
4 - eCall number in USIM 
int32_t 
ML_SetNadDeregTime(ml_ecall_ti
me* time); 
REQUEST to 
set nad 
deregistration 
time for eCall 
设置 T10 timer 
maintain in md 
side. 
typedef struct{  
    int32_t purpose;  
    int32_t mode;  
    int32_t timer1;  
    int32_t timer2;  
}ml_ecall_time; 
 
purpose, 0 -for ng eCall; 1 -for cs ecall  
mode, 1 -set timer; 0 -reset timer  
timer1, timer value (minute) se t for 
emergency call  
timer2, timer value (minute) set for 
rest/reconfiguration call,  
 
  in current, timer1 and timer2 prefer to be the 
same value. 
int32_t 
ML_SetOprtMode(ml_ecall_oprt_
mode mode); 
Request to set 
the service 
status for 
operating 
mode. 
typedef enum { 
    ECALL_NONE = 0, 
    ECALL_ONLY = 1, 
    ECALL_AND_NORMAL = 2, 
}ml_ecall_oprt_mode;

## PDF物理页 18

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 18 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
API function 
description Parameter 
int32_t 
ML_GetOprtMode(ml_ecall_oprt_
mode mode); 
Request to get 
the service 
status for 
operating 
mode. 
 
int32_t 
ML_EcallIndicationInit(ML_ECALL
_MSGCB_T cb_func); 
Register ecall 
indication call 
back. App will 
receive ecall 
indication after 
init ecall 
indication. 
typedef enum{ 
    E_ML_ECALL_SENDING_START = 1, 
    E_ML_ECALL_SENDING_MSD = 2, 
    E_ML_ECALL_LLACK_RECEIVED = 3, 
    E_ML_ECALL_ALACK_POSITIVE_REC
EIVED = 4, 
    E_ML_ECALL_ALACK_CLEARDOWN_R
ECEIVED = 5, 
    E_ML_ECALL_DIALING = 9, 
    E_ML_ECALL_ALERTING = 10, 
    E_ML_ECALL_ACTIVE = 11, 
    E_ML_ECALL_DISCONNECTED = 12, 
    E_ML_ECALL_IMS_ACTIVE = 13, 
    E_ML_ECALL_IMS_DISCONNECTED = 
14, 
    E_ML_ECALL_ABNORMAL_HANGUP=1
5, 
    E_ML_ECALL_IMS_MSD_ACK = 20, 
    E_ML_ECALL_IMS_UPDATE_MSD = 21, 
    E_ML_ECALL_IMS_IN_BAND_TRANSF
ER = 22, 
    E_ML_ECALL_IMS_MSD_NACK = 23, 
    E_ML_ECALL_IMS_SRVCC = 24, 
    E_ML_ECALL_ONLY_DEREGISTRATIO
N = 31, 
    E_ML_ECALL_MAY_DEREGISTER = 32, 
    E_ML_ECALL_PSAP_CALLBACK_STAR
T = 40, 
    E_ML_ECALL_PSAP_CALLBACK_IMS_
UPDATE_MSD = 41, 
    E_ML_ECALL_T2_TIMEOUT = 52, 
    E_ML_ECALL_T5_TIMEOUT = 55, 
    E_ML_ECALL_T6_TIMEOUT = 56, 
    E_ML_ECALL_T7_TIMEOUT = 57, 
    E_ML_ECALL_UNSPECIFIED = 0xffff, 
}ML_ECall_Indication;

## PDF物理页 19

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 19 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
API function 
description Parameter 
 
typedef struct 
{ 
    ML_ECall_Indication ind; 
    int call_id; 
} ML_ECALL_IND_T; 
 
typedef void (*ML_ECALL_MSGCB_T) 
( 
    ML_ECALL_IND_T       *pvsMsg 
);

## PDF物理页 20

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 20 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
5 eCall Timer 
5.1 EU CS eCall timer 
In an eCall transaction, there are 10 timers defined in EN 16062. MTK has implemented T3 
and T10 in modem side. T1,T2,T5,T6,T7,T9 should be handled by IVS customer APP; T4 
and T8 are PSAP timers and should be handled by PSAP application. In order to pass 
instrument test, mt2731 demoapp has reference code for T2/T5/T6/T7.  
Table 4-1. eCall timers in EN16062 
Name 
Origin 
Description 
Requirements 
Value 
T1 
IVS 
Manually initiated eCall(MIeC) false triggering cancellation period 
•       START: T1 starts as soon as the eCall is manually activated 
•       STOP: T1 stops when Vehicle occupants cancel the manually 
triggered eCall transaction. 
•       EXPIRY: Upon expiry of T1 the IVS-NAD shall start call 
setup 
See 
NOTE1 
See 
NOTE2 
T2 
IVS 
IVS Call Cleardown Fallback Timer (CCFT) 
•       START: T2 starts as soon as the IVS-NAD starts with call 
setup 
•       STOP: T2 stops when the IVS-NAD receives a call clear-
down indication from the mobile network or a call clear-down 
message from the PSAP. 
•       EXPIRY: Upon expiry of T2 the IVS-NAD shall clear down 
the call 
3600 s 
(1h) 
T3 
IVS 
IVS INITIATION signal duration 
•       START: T3 is started as soon as the IVS-NAD starts sending 
the INITIATION signal 
•       STOP: T3 stops when the IVS-NAD receives a SEND MSD 
signal from the PSAP, at which time the IVS-NAD shall stop 
sending the INITIATION signal. 
•       EXPIRY: Upon expiry of T3 the IVS-NAD shall stop sending 
the INITIATION signal 
2 s 
T4 
PSAP 
PSAP wait for INITIATION signal period 5 s

## PDF物理页 21

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 21 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
•       START: T4 starts as soon as the PSAP eCall modem has 
answered the call 
•       STOP: T4 stops when the PSAP eCall modem detects an 
INITIATION signal send by the IVS. 
•       EXPIRY: Upon expiry of T4, the PSAP eCall modem shall 
route the call to a PSAP operator 
T5 
IVS 
IVS wait for SEND MSD period 
•       START: T5 starts as soon as the IVS-NAD received 
notification that the call is first answered 
•       STOP: T5 stops when the IVS-NAD detects a SEND MSD 
signal sent by the PSAP. 
•       EXPIRY: Upon expiry of T5 the IVS-NAD shall reconnect the 
IVS audio system and terminate eCall specific behavior(i.e. it shall 
not proceed with the sending of MSD data) until requested to do 
otherwise. 
5 s 
T6 
IVS 
IVS wait for AL-ACK period 
•       START: T6 starts as soon as the IVS-NAD has received LL-
ACK 
•       STOP: T6 stops when the IVS-NAD receives an AL-ACK 
message 
•       EXPIRY: Upon expiry of T6, the IVS-NAD shall mark the 
transfer of the MSD as unsuccessful and reconnect the IVS audio 
system and terminate eCall specific behavior until requested to do 
otherwise 
5 s 
T7 
IVS 
IVS MSD maximum transmission time 
•       START: T7 starts as soon as the IVS-NAD starts sending the 
MSD data 
•       STOP: T7 stops when the IVS-NAD receives an LL-ACK 
message 
•       EXPIRY: Upon expiry of T7, the IVS-NAD shall mark the 
transfer of the MSD as unsuccessful and reconnect the IVS audio 
system and terminate eCall specific behavior until requested to do 
otherwise 
20 s 
T8 
PSAP 
PSAP MSD maximum reception time 20 s

## PDF物理页 22

MediaTek Confidential © 2019 - 2024 MediaTek Inc. Page 22 of 22 
This document contains information that is proprietary to MediaTek Inc.  
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.  
•       START: T8 starts as soon as the PSAP starts sending the 
SEND MSD signal 
•       STOP: T8 stops when the PSAP eCall modem receives a valid 
MSD (reception being acknowledged by sending an LL-ACK) 
•       EXPIRY: Upon expiry of T8, the PSAP eCall modem shall 
route the call to a PSAP operator 
T9 
IVS 
IVS NAD minimum network registration period 
•       START: T9 starts as soon as the IVS-NAD clears down a call, 
or gets notified that a call has been cleared down in accordance 
with EN 16072 Clause 7.17.3 
•       STOP: T9 is uninterruptable; until T9 expires the IVS-NAD 
shall remain registered on the serving network, and remain 
available to receive calls from the PSAP and rescue workers 
•       EXPIRY: Upon expiry of T9, the IVS-NAD may deregister 
from the serving network (see T10) 
3600 s 
T10 
IVS 
IVS NAD network ‘Deregistration Fallback Timer’ (DFT) 
•       START: T10 starts as soon as the IVS-NAD clears down a 
call, or gets notified that a call has been cleared down 
•       STOP: T10 stops if the IVS-NAD receives or makes a new 
call 
•       EXPIRY: Upon expiry of T10, the IVS-NAD shall deregister 
itself from the serving network 
12 h 
see no 
 
NOTE 1 No normative value, can be chosen by manufacturer, zero(“0”, effectively disabling 
T1) is allowed. 
NOTE 2 T1 is not relevant for automatically activated eCall transactions. 
NOTE 3 only for ‘eCall only’ IVS devices, timer not relevant for IVS NAD devices that 
remain connected to a network.


---
# SRC0059 EINT培训.rar

来源：培训材料/PVT技术分享文档/EINT培训.rar

SHA-256：4ae975b912995cfb91ffc9c068804002297acf1434a520e201d5eaecedddeb65

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0059.html)

## 压缩包目录

- EINT培训\debounce使用说明\FAQ13938.pdf（99813 字节）
- EINT培训\EINT_IDH_Share.pdf（1063915 字节）


---
# SRC0060 EVS软件开发培训1223.pdf

来源：培训材料/PVT技术分享文档/EVS软件开发培训1223.pdf

SHA-256：140b4869f951f8385dbd61613e391efbca33108e9c8a4d10211620271a9ac703

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0060.html)

## PDF物理页 1

掌锐电子
MT8676_EVS介绍
卢浩东

## PDF物理页 2

一，
evs 
介绍
EVS（Exterior View System）外
部视景系统：是 Android 为车载开
发的 camera 架构，主要针对汽车
外景系统，如倒车影像、360 全景
等。
参考谷歌文档介绍，EVS主要包
括 EVS APP、EVS Manager 、
EVS HAL。如下架构图所示APP通
过EVS Manager与EVS HAL通信，
获取操作camera与display的权限
与代理对象,通过代理对象
(IEvsCamera和IEvsDisplay)，实现
camera与display的交互，将
camera的图像及时的显示到
display 上。

## PDF物理页 3

二、
EVS
代码路径与编译产物
8676单系统
EvsHal实现：
hardware/interfaces/automotive/evs/aidl/impl/de
fault/
编译的产物：android.hardware.automotive.evs-
aidl-default-service
push位置：vendor/bin/hw
EvsManager实现：
packages/services/Car/cpp/evs/manager/aidl/ 
编译的产物：evsmanagerd
EvsAppdemo示例：
packages/services/Car/cpp/evs/apps/defaul/
编译的产物：evs_app
push位置：system/bin/
8678_3OS
EvsHal实现：
vendor/mediatek/proprietary/hardware/external/
evs/
编译的产物：evshalservice
push位置：vendor/bin/hw
EvsManager实现：
packages/services/Car/cpp/evs/manager/aidl/ 
编译的产物：evsmanagerd
EvsAppdemo示例：
packages/services/Car/cpp/evs/apps/defaul/
编译的产物：evs_app
push位置：system/bin/

## PDF物理页 4

三、
Evshal
介绍
Evshal总体框架：
1. 顶层服务接口
android.hardware.automotive.evs
这是 Android 定义的汽车电子视觉系统框架接
口，提供了 EVS 服务的标准 API。基于 AIDL 
的默认服务实现，用于进程间通信。
2. EVS 核心服务模块
EvsEnumerator：负责枚举系统中可用的 EVS 
设备
EvsCamera:提供相机控制接口，如开启、关
闭、设置参数等。
AidClientAdapter: AIDL 客户端的适配器，
用于将 EVS 服务调用转发到 IRPC 层。
3 MTK 平台相关层
mtkcam-turbo-android:MediaTek平台的相
机模块。

## PDF物理页 5

三、
Evshal
介绍
1:evshalservice
初始化
配置解析与加载，读取XML文件，将静态
配置转化为内存中的结构化数据，为后续所
有操作提供“地图”，配置数据从XML文件 流
向 ConfigManager内部Map，再根据ID流向
EvsEnumerator的sCameraList，时序图如右图
所示

## PDF物理页 6

三、
Evshal
介绍
2:Camera
的打开与初始化
通过 EvsEnumerator 的 openCamera 得到
EvsCamera 实例，EvsEnumerator 主要函数如
下
// 获取可用摄像头列表
1)ScopedAStatus getCameraList();
// 获取指定摄像头的流配置
2)ScopedAStatus getStreamList();
// 打开摄像头设备
3)ScopedAStatus openCamera();
// 关闭摄像头设备
4)ScopedAStatus closeCamera();
opencamera时序图如右：

## PDF物理页 7

三、
Evshal
介绍
3:
视频流处理
openCamera后拿到EvsMockCamera对象，此
对象又依赖于AidlClientAdapter。
AidlClientAdapter通过aidl接口与 mtkcam-
turbo-android的aidlrpc server 通信，
AidlClientAdapter取流时会创建一个
enqueLoop线程，线程不断向AidlRpcCamera发
送请 求，图像数据会填充到请求buffer中并通
过processCaptureResult 方法回调给
AidlClientAdapter。

## PDF物理页 8

三、
Evshal
介绍
3.1:
启动流
EVS相机视频流启动过程采用分层架构与生产
者-消费者模式，实现了高效的图像数据流水线
处理。系统通过双线程并行、异步回调、缓冲
区池管理等技术手段
生产者线程 (enqueLoop)：请求帧捕获，循
环执行setupRequest()准备捕获请求调用
mCamera->pushRequest()提交请求至硬件层管
理缓冲区状态转换（NOUSE → USING）。
消费者线程 (generateFrames)：处理完成
帧，传递至客户端，监听完成队列
mBuffResultQue的帧到达事件从
processCaptureResult()回调中获取完成的
buffer_handle_t组装BufferDesc数据结构，包含
图像元数据，通过deliverFrame()回调给客户端

## PDF物理页 9

三、
Evshal
介绍
3.2:
关闭流
客户端调用 stopVideoStream()
EvsMockCamera 接收请求
生产者线程检查到停止标志
消费者线程检查到 mStreamState != 
RUNNING，退出循环
设置最终状态 mStreamState = 
STOPPED，清理资源
关流时序图如下，就是停止线程，修改
状态值，释放buffer

## PDF物理页 10

四、问题案例
1、mtk 提供的 evshal 代码中 EvsCamera 只会去打开 camera id 0 的摄像头，取流配置为
1280x720 RGBA8888，在验证 evs 通路时需要修改下，比如验证 camera 1 取 1280x720 
yuyv  数据修改如下：

## PDF物理页 11

www.pvetec.com
Thank You


---
# SRC0061 GWM+KE__VM-1.pdf

来源：培训材料/PVT技术分享文档/GWM+KE__VM-1.pdf

SHA-256：0488ba34acae311ff5120d234adc0e83266993c5e8561d1ba063faa4ff654435

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0061.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential C
MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
CUXV5-26330/27342
 MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential C
2
 问题概述
 问题分析
 问题原因
 解决方案
Issue Overview
 MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential C
3
• 接口：
– MTK_AEE 模块提供的对外的接口 ，以便于各个模块调用主动生成DB，并且从DB中获取更全的系
统咨询。
- aee_kernel_exception_api（）
- aee_kernel_warning_api（）
• 影响：
– 主动trigger 一个db.00.KernelAPI 
– aee_kernel_exception_api（）和 aee_kernel_warning_api（）接口调用不会造成系统重启
db.00.KernelAPI 生成机制
 MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential C
4
问题分析
结论：
vmid =-1 会导致对应的 clk request无法继续往下设定
 MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential C
5
• log File:   SYS_KERNEL_LOG
[  702.538578] irq/529-0.nebul: vhost-mtk: [name:hyp_power_service&]handle_clk_request: clk name=mmpll, vmid=-1, ops=2
[  702.538590] irq/529-0.nebul: vhost-mtk: [name:hyp_power_service&]handle_clk_request: invalid server vmid=-1
• log File:   SYS_LAST_CPU_BUS
write entry = 63, valid = 0x1, non-secure = 0x1, write master id = 0x0, slave address = 0x17000008, data_size = 0x2, burst_length = 0x0
write entry = 63, valid = 0x1, non-secure = 0x1, write master id = 0x0, slave address = 0x17040090, data_size = 0x2, burst_length = 0x0
Review code ：arch / arm64 / boot / dts / mediatek / mt6897.dts
• VENC/jpeg encode/jpeg decode 使用 mmpll_d4 档位
• mmpll 是一个pll， 很多clock 都会用到，例如：venc
• venc domain 其他模块也会用到，例如：video encode/jpeg encode/ jpeg decode
结论2：
kernel API Dump的产生是因为bus_tracker抓到transaction返回了slave error。 0x17000008 属于 venc, 0x17040090 属于 jpg
结论1：
• 因为 vmid =-1 ,所以 clk：mmpll 无法设定成功。
结论3：
mmpll 没有设成功， VENC/jpeg encode/jpeg decode 都有可能被bus_tracker抓到transaction返回了slave error
 MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential C
6
问题分析-DB生成流程，以及ecc error 打印说明
1. bus_tracker抓到transaction返回了slave error，触发 cache_partity_irs_v3 中断响应。
2. 看到的“Ecc error”只是打印， 不是真的出现cache error，只是slave error出现后，反应到 cache ecc 这
边。
 MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential C
7
问题原因（vmid=-1）-详情见谦川解析
• vmid =-1发生原因
• 公版修改了vm 关机流程，改为先跑 acrn_vm_destroy()，再跑 acrn_dev_release()。
• 因为 acrn_vm_destroy() 会将 vm->vmid 改为非法值，所以增加了vm->saved_vmid。
• 在acrn_vm_destroy() 函数末尾初始化，供 acrn_dev_release() 使用。
• 遗漏了先跑 acrn_dev_release() 情况，导致vm->saved_vmid 没有初始化，最终导致此问题。
 MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential C
8
解决方案（vmid=-1） -详情见谦川解析
• vmid =-1解决方案
• 将vm->saved_vmid 初始化移动到acrn_vm_create() 函数。保证vm结构体整个生命周期，
vm->saved_vmid 一直是有效值。
 MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential C
9
 MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
 MediaTek Confidential Release for
PVETEC_SPM
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM


---
# SRC0062 LK Audio初始化.pdf

来源：培训材料/PVT技术分享文档/LK Audio初始化.pdf

SHA-256：6d282f57b1ca564746bae282f2662622863d791b1c446cb9f77111652ed06837

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0062.html)

## PDF物理页 1

LK AUDIO 配置
1.1 目录架构
目录 描述
yocto/src/bsp/lk2/platform/mediatek/mt8676/audio lk audio 初始化代码
1.2 代码流程
1 . audio_init() ： 初始化 I2S1/4/6 MCK、 BCK， 参数来自于结构体 struct mtk_afe_i2s_priv
2.platform_fdt_audio_params() ： 读 取 dts compatible = "mediatek,mt6897-sound" 节 点 ， 获 取
clk-always-on 参数，并对 i2s_priv.mclk_ao、i2s_priv.lrck_ao 标志位赋值，该标志位表示是否开启
clk always on 。
3. update_audio_fdt()：判断上面函数读取到的 DTS 信息，并更新 DTS 节点信息，供驱动识别，防止在
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料

## PDF物理页 2

kernel 节点出现多次开启 clk 的情况。
4. audio_disable_unused_i2s_mclk()/audio_disable_unused_i2s_lrck()：通过 DTS 信息判断是否打开
多余的 CLK ，有则关闭。
1.3 客制化步骤
以下新增一个 I2S2 作为 demo，理解以上的流程。
1. 先使能 I2S2 的 CLK、GPIO 等信息，由于 8676 I2SOUT 都是共用的 I2SIN CLK，所以需要对齐 I2SIN2、
I2SOUT2 配置：
CONFIG： 需对齐 I2SIN2 、I2SOUT2 的 rate、 ch_num、ip_mode、share_i2s_id 等参数。ip_mode 表示 data
line， 0 表示 one data line multi-channel ，1 表示 multi data line 2-channel。 share_i2s_id 表
示需要使用哪个 i2s 的 clk， 目前是使用 I2SIN2 的 CLK。 具体的 CONFIG 说明详见寄存器文档： 《3.12 Audio
System.pdf》。
I2S MODE：可配置为 I2S 格式或 TDM 格式，目前仅 I2S4 可配置为 TDM 格式，寄存器值为 0x4/0x5。
GPIO：对照硬件设计，确认对应的 GPIO NUM 和 I2S MODE，此前遇到的一个 I2S CLK 延后输出，就是因为
此处的 I2S MODE 配置错误，导致未按预期输出 CLK。
2. DTS 配置
按照如下格式，在 DTS 添加相关属性，该属性作用如下：
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料

## PDF物理页 3

(1). lk 识别后，不会关闭该 I2S CLK，如上述的 audio_disable_unused_i2s_lrck 函数。
(2). kernel 识别到该属性后，不会重复开关 I2S CLK。
3. kernel 开关
可在驱动中 打开路由开关， 该数组会在驱动加载完成后设置为 Dummy_Widget， 并避免设置为 Normal 导致
CLK 被关闭的情况。
也可以在 android audio_device.xml 中打开，如下：
4.configure 配置
目录：
yocto/meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/auto8676p1_64_hyp_defconfig
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料
pvt内部资料


---
# SRC0063 MT8676_Hypervisor_Display_User_Manual_V1.3.pdf

来源：培训材料/PVT技术分享文档/MT8676_Hypervisor_Display_User_Manual_V1.3.pdf

SHA-256：30174454fb71777676a8a441756baed7d6cfd427f303ffcaf7633eb047a94a1e

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0063.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.3 
出版日期:  2025-07-11
MT8676 Hypervisor Display  
User Manual 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-10-28 王煜 正式版 
1.1 2024-11-13 王煜 
• 在章节 1.2.3.2 Hypervisor (Yocto + Android + Tbox)中
添加 Tbox 
• 添加表 1 3. Connector 设备节点说明 
1.2 2025-06-13- 王煜 • 添加章节 1.3.2 dispsys_config 节点配置 
1.3 2025-07-11 王煜 
• 添加章节 1.2.1 模块简介 
• 在章节 1.2.3.1 Android 中添加 HWC 图层合成策略
介绍 
• 添加章节 1.4.1 Dump 方法 
 
 
  
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 4 
1 显示 & 多屏 ······························································································································································· 5 
1.1 概述·········································································································································································· 5 
1.1.1 基本概述 ······················································································································································ 5 
1.1.2 缩略词 ·························································································································································· 5 
1.1.3 性能 ······························································································································································ 5 
1.2 架构/流程概要 ························································································································································ 6 
1.2.1 模块简介 ······················································································································································ 6 
1.2.2 HW 架构 ······················································································································································· 7 
1.2.3 SW 架构 ························································································································································ 8 
1.3 配置/客制指南 ······················································································································································ 11 
1.3.1 设备节点配置 ············································································································································ 11 
1.3.2 dispsys_config 节点配置 ···························································································································· 13 
1.4 常见问题/故障排除 ·············································································································································· 21 
1.4.1 Dump 方法 ················································································································································· 21 
1.4.2 HWC CMD ··················································································································································· 21 
1.4.3 显示驱动 CMD ··········································································································································· 22 
1.4.4 Pattern ························································································································································ 22 
1.4.5 黑屏 ···························································································································································· 23 
1.4.6 花屏/闪屏 ··················································································································································· 23 
附件一 附加条款 ····························································································································································· 24 
 
图片目录 
图 1-1. Display HW 架构图 ························································································································································ 7 
图 1-2. Display Android 架构图 ················································································································································· 8 
图 1-3. Android Display 流程 ····················································································································································· 9 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
图 1-4. Display 多系统架构图 ················································································································································· 10 
图 1-5. Display 硬件框图 ························································································································································· 13 
图 1-6. Dump 方法总览 ··························································································································································· 21 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 5 
表 1-2. 性能 ··············································································································································································· 5 
表 1-3. Connector 设备节点说明 ············································································································································ 11 
 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1 显示 & 多屏 
1.1 概述 
1.1.1 基本概述 
本章节主要介绍 MT8676 display hypervisor 架构以及多屏配置指南。 
 
1.1.2 缩略词 
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
 
1.1.3 性能 
表 1-2. 性能 
名称 性能 
DISP pipeline 10bit pipe x 3 (MAX 688MHz at 0.75V) 
DSI 
DSI0 + DSI1 
C/D PHY Combo 4-lane x 2 
DPHY: 2.5Gbps/lane 
DP DP1.4, 4-lane 8.1Gbps/lane 
(4-lane mode conflict with USB3) 
Panel number 1 ~ 6 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
名称 性能 
OVL layers OVL0~OVL7 : Total 16 layers 
OVL De-comp. AFBC (RGBA8888/RGB888/RGB565) 
Compression VESA DSC 1.2 (2 slice x 2) 
 
1.2 架构/流程概要 
1.2.1 模块简介 
HWC (Hardware Composer)：Android 图形系统中的核心组件之一，主要负责屏幕内容的合成与显示，参考
https://source.android.com/docs/core/graphics/hwc。 
Wayland：Wayland 是一种现代化的显示服务器协议和架构，为 Linux 和类 Unix 操作系统提供更高效、更安全、更
简洁的图形显示解决方案。参考 https://wayland.freedesktop.org/。 
PQService (Picture Quality Enhancement Service)：用于支持 MediaTek 独创的 MiraVision 图像显示增强技术，可以根
据观看内容及周围环境（如强光下）多方面智能调整显示及视频串流，包括画面的色彩、亮度、对比度、锐利
度、动态范围等，提升整体显示画质。 
MTK DRM Driver：是 MediaTek 平台上用于显示子系统基于 DRM 的内核驱动，核心作用是管理和控制显示资源，
实现高效的图层合成和显示输出。参考 https://dri.freedesktop.org/docs/drm/。 
OVL (Overlay)：显示子系统中负责叠图的硬件模块。每个 OVL 可以对两个图层进行合成，分别是 Layer0 和 Layer1，
Layer1 的 z-order 比 Layer0 高。多个 OVL 串接起来可支持更多图层的合成，比如 2 个 OVL 串接起来可以支持 4 个
图层合成。 
CMDQ (Command Queue)：用于驱动 Global Command Engine (GCE)，GCE 是 Multimedia 子系统专用的访问硬件寄存
器的硬件模块，相较于通过 CPU 的访问方式，CMDQ 具有更好的性能。 
MML/MDP：显示子系统中负责视频图层处理的硬件模块，包括缩放、旋转、色彩格式转换、显示效果增强等。  
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1.2.2 HW 架构 
 
图 1-1. Display HW 架构图 
  
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1.2.3 SW 架构 
1.2.3.1 Android 
 
图 1-2. Display Android 架构图 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
 
图 1-3. Android Display 流程 
 
HWC 根据各个图层的属性、硬件能力和系统状态，决定每个图层由谁来合成。  
设备合成（Device Composition/Hardware Composition）就是由 HWC 驱动的硬件（即 OVL）直接合成。 
GPU 合成（Client Composition/ GLES Composition）由 SurfaceFlinger 将图层交由 GPU 合成，合成结果再交给 HWC 作
为一个图层。 
简单说，HWC 会自下往上优先使用设备合成，超出 OVL 层数之后或遇到 OVL 不能处理的图层，则将该层及以上都
使用 GPU 合成。 
可以通过 dumpsys SurfaceFlinger 查看 HWC 的图层合成状况。如下图所示，comp 一列中显示 DEV 表示设备合成，
CLI 表示 GPU 合成，SOL 即 solid color（纯色图层），是由 OVL 直接渲染并合成的，所以也是设备合成。 
 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1.2.3.2 Hypervisor (Yocto + Android + T-Box) 
 
 
 
图 1-4. Display 多系统架构图 
 
当前采用驱动层虚拟化方案，将 disp_pq 和 disp interface(DSI/DP) 虚拟化，OVL 仍是直通控制，兼顾性能。 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
完整的 CRTC 驱动（包括 ovl, disp_pq, dsi/dp）在 Host OS，Guest OS 采用 Virt-Connector/Encoder，通过 virtio 去
Host OS 的 DRM 驱动获取 display mode 以及开关 CRTC。Guest OS 更新图层则采用直通方式，直接驱动 OVL，无需
和 Host 端通信。 
以我司公版 project: auto8676p1_64_hyp_6p（Yocto 2 屏 + Android 4 屏）为例。在 Yocto Kernel 中，一共有 6 条
CRTC，CRTC0/1(DSI0) 和 CRTC4/5(DP)是 Android 显示，CRTC 2/3(DSI1)是 Yocto 显示。在 Android Kernel 中，
connector/encoder 是虚拟的，在 dts 中的 node 是 virt_dsi0_0/virt_dsi0_1/virt_dp_0/virt_dp_1。 
 
表 1-3. Connector 设备节点说明 
设备节点 说明 
dsi0 
dsi1 
dp_intf 
host 端 connector 设备节点 
virt_dsi0_0 
virt_dsi1_0 
virt_dp_0 
guest 端 connector 设备节点 
virt_dsi0_1 
virt_dsi1_1 
virt_dp_1 
开启 superframe 后，第二屏的 connector 设备节点 
 
1.3 配置/客制指南 
1.3.1 设备节点配置 
1.3.1.1 Host Yocto 端 
请参考 MT8676_Android_Display_User_Manual_V1.0 在 Host 内核中配置所有的（Android + Yocto）多屏显示内核配
置。 
• Kernel config 路径： 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/ 
• Kernel dts 路径： 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/ 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/ 
• Kernel ko table 路径： 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/ko_order_table 
 
可以参考我司公版 project: auto8676p1_64_hyp_6p： 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
• Kernel config 文件为 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/auto8676p1_64_hyp_6p.defconfig 
 
• Kernel dts 文件为 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/auto8676p1_64_hyp_6p.dts 
meta/meta-mediatek-mt8676-hyp/recipes-
kernel/linux/files/dtsi/cust_mt8676_display_config_hyp_6p.dtsi 
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/cust_mt8676_displ
ay_interface.dtsi 
1.3.1.2 Guest Android 端 
可以参考我司公版 project: auto8676p1_64_vm_6p： 
Kernel dts 文件为：
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/cust_mt8676_displ
ay_config_vm_6p.dtsi 
 
• 核心改动是 disable 掉原先代表实际硬件的 DSI/DP 相关节点，并 enable virt_dsi/dp 节点。virt_xxx_1 表示该接口
输出的第二个屏，只有在开启 superframe 的情况下，才需要 enable。 
 
• 添加 CRTC 的 OVL 配置，详见。 
 
 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1.3.2 dispsys_config 节点配置 
DTS 中 dispsys_config 节点中需要客制化的部分主要是 OVL 的配置，即配置当前 OS 中每条 crtc 的硬件图层资源。
节点中的其他属性无需修改。 
1.3.2.1 OVL 介绍 
1. OVL 串接的顺序不能违反以下顺序：OVL4->OVL5->OVL6->OVL7->OVL0->OVL1->OVL2->OVL3，链路上靠前的 OVL 
z-order 更低。 
图 1-5. Display 硬件框图 
 
显示链路跨越 OVLSYS0/1 & DISPSYS0/1 需要通过 DLO/DLI。 
OVLSYS0/1 之间，只能 OVLSYS1 通过 OVLSYS_DLO8 和 OVLSYS_DLI2 接到 OVLSYS0。 
OVLSYS 和 DISPSYS 之间支持： 
1) DSI0 显示链路走 OVLSYS_DLO3 从 OVLSYS0 到 DISPSYS0。 
    
    
    
    
        
    
            
        
               
               
               
        
    
  
        
        
   
         
      
     
     
    
        
    
               
    
    
    
    
        
    
            
        
                
                
                
    
       
           
           
    
           
        
  
        
        
   
         
      
     
     
    
    
        
    
                
    
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 14

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 14 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
2) DSI1 显示链路走 OVLSYS_DLO10 从 OVLSYS1 到 DISPSYS1。 
3) DP 显示链路走 OVLSYS_DLO6 从 OVLSYS0 到 DISPSYS1 或走 OVLSYS_DLO11 从 OVLSYS1 到 DISPSYS1（取决于最后一
个 OVL 在 OVLSYS0 还是 OVLSYS1）。 
2. 开 AFBC 的情况下，OVL 支持的最大宽度是 1920。 
关 AFBC 的情况下，OVL 支持的最大宽度是 8191，但每个图层的最大内存带宽是 1GB/s。 
超出限制，驱动默认会开启 multiple ovl pipes，使用多个 OVL 并行处理一个图层。 
目前的软件中屏幕宽度超过 1920，drm 显示驱动中就会开启 multiple ovl pipes。 
比如 2560x1600 的屏幕，用 2 ovl pipes；5120x1600 的屏幕，用 3 ovl pipes。 
1.3.2.2 OVL 配置 
OVL 通过如下三个属性配置： 
1. crtc-ovl-path 
表示当前 crtc 上的 OVL 链路。 
链路上的 OVL 顺序不要违反以下前后顺序：OVL4->OVL5->OVL6->OVL7->OVL0->OVL1->OVL2->OVL3。 
2. crtc-layer-nr 
表示当前 crtc 上支持几个 plane。 
假设 ovl pipes = n，则 1 个 plane 需要 n 个 OVL layer。 
3. crtc-layer-table 
表示当前 crtc 上的 plane 使用哪个 OVL Layer，即配置 plane 的 z-order。从 bit 0 ~ bit 15，每个 bit 代表一个 OVL 
layer，如下： 
Bit 15 14 13 12 11 10 9 8 
OVL layer OVL7_L1 OVL7_L0 OVL6_L1 OVL6_L0 OVL5_L1 OVL5_L0 OVL4_L1 OVL4_L0 
Bit 7 6 5 4 3 2 1 0 
OVL layer OVL3_L1 OVL3_L0 OVL2_L1 OVL2_L0 OVL1_L1 OVL1_L0 OVL0_L1 OVL0_L0 
 
  
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1.3.2.3 示例 
这一节展示几个典型的多屏配置示例。 
1.3.2.3.1 3 屏 
多屏 & 图层需求如下： 
屏幕规格 接口 图层需求 
中控 
2560x1440 
DP 
Linux 
Android 
Android 
Android 
Android 
Linux 
仪表 
1920x720 
DSI0 Linux 
Android 
HUD 
800x480 DSI1 Linux 
Android 
 
  
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1. Yocto 端 
&dispsys_config { 
 // DP 作为 android 主屏。crtc0 是 DP，crtc1 是 DSI0，crtc2 是DSI1。 
 dp-is-main-display; 
 
 // 表示crtc0 的OVL 链路是OVL4->OVL5->OVL6->OVL1->OVL2->OVL3 
 crtc0-ovl-path = <DDP_COMPONENT_OVL4_2L>, 
       <DDP_COMPONENT_OVL5_2L>, 
       <DDP_COMPONENT_OVL6_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC8>, 
       <DDP_COMPONENT_OVLSYS_DLI_ASYNC2>, 
       <DDP_COMPONENT_OVL1_2L>, 
       <DDP_COMPONENT_OVL2_2L>, 
       <DDP_COMPONENT_OVL3_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC6>; 
 // 如果DP 只用OVL4->OVL5->OVL6，ovl-path 就会是如下： 
 // crtc0-ovl-path = <DDP_COMPONENT_OVL4_2L>, 
 //      <DDP_COMPONENT_OVL5_2L>, 
 //      <DDP_COMPONENT_OVL6_2L>, 
 //      <DDP_COMPONENT_OVLSYS_DLO_ASYNC11>; 
 
 /* 表示yocto 端crtc0 有2 个plane。 
  * 因为ovl pipes = 2，所以pipe0 使用OVL6_L1 和OVL4_L0(最上层和最下层)，对应的pipe1 使用 
  * OVL3_L1 和OVL1_L0。 
  */ 
 // 同时dp_intf 节点中需添加host-os-use，weston 才能识别此crtc。 
 crtc0-layer-nr = <2>; 
 crtc0-layer-table = <0x2100>; 
 
 crtc1-ovl-path = <DDP_COMPONENT_OVL0_2L>, 
       < DDP_COMPONENT_OVLSYS_DLO_ASYNC3>; 
 // 表示yocto 端crtc1 只有1 个plane，使用OVL0_L1(最上层)。 
 // 同时dsi0 节点中需添加host-os-use，weston 才能识别此crtc。 
 crtc1-layer-nr = <1>; 
 crtc1-layer-table = <0x2>; 
 
 crtc2-ovl-path = <DDP_COMPONENT_OVL7_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC10>; 
 // 表示yocto 端crtc2 只有1 个plane，使用OVL7_L1(最上层)。 
 // 同时dsi1 节点中需添加host-os-use，weston 才能识别此crtc。 
 crtc2-layer-nr = <1>; 
 crtc2-layer-table = <0x8000>; 
}; 
  
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
2. Android 端 
&dispsys_config { 
 // DP 作为 android 主屏。crtc0 是 DP，crtc1 是 DSI0，crtc2 是DSI1。 
 dp-is-main-display; 
 
 crtc0-ovl-path = <DDP_COMPONENT_OVL4_2L>, 
       <DDP_COMPONENT_OVL5_2L>, 
       <DDP_COMPONENT_OVL6_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC8>, 
       <DDP_COMPONENT_OVLSYS_DLI_ASYNC2>, 
       <DDP_COMPONENT_OVL1_2L>, 
       <DDP_COMPONENT_OVL2_2L>, 
       <DDP_COMPONENT_OVL3_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC6>; 
 /* 表示android 端crtc0 有4 个plane。 
  * 因为ovl pipes = 2，所以pipe0 使用OVL4_L1、OVL5_L0、OVL5_L1、OVL6_L0，对应的pipe1 使用 
  * OVL1_L1、OVL2_L0、OVL2_L1、OVL3_L0。 
  */ 
 crtc0-layer-nr = <4>; 
 crtc0-layer-table = <0x1e00>; 
 
 crtc1-ovl-path = <DDP_COMPONENT_OVL0_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC3>; 
 // 表示android 端crtc1 只有1 个plane，使用OVL0_L0(最下层)。 
 crtc1-layer-nr = <1>; 
 crtc1-layer-table = <0x1>; 
 
 crtc2-ovl-path = <DDP_COMPONENT_OVL7_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC10>; 
 // 表示android 端crtc2 只有1 个plane，使用OVL7_L0(最下层)。 
 crtc2-layer-nr = <1>; 
 crtc2-layer-table = <0x4000>; 
}; 
  
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
 
1.3.2.3.2 4 屏 (DP Superframe) 
多屏 & 图层需求如下： 
屏幕规格 接口 图层需求 
中控 
2560x1440 
DP superframe 
Linux 
Android 
Android 
Android 
副驾 
2560x1440 
Android 
Android 
仪表 
1920x720 
DSI0 Linux 
Android 
HUD 
800x480 DSI1 Linux 
Android 
 
  
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1. Yocto 端 
&dispsys_config { 
 // DP 作为 android 主屏。crtc0&crtc1 是 DP，crtc2 是 DSI0，crtc3 是DSI1。 
 dp-is-main-display; 
 
 /* 表示crtc0 的OVL 链路是OVL4->OVL5->OVL6->OVL1->OVL2->OVL3 
  * 此处是superframe 的情况，两个屏是按照side by side 左右拼接后从soc 输出。 
  * 实际的OVL 链路是OVL4->OVL5->OVL6->OVL1->OVL2->OVL3。 
  * crtc0 是左边屏，用前四个OVL4->OVL5->OVL6->OVL1，crtc1 是右边屏，用后两个OVL2->OVL3。 
  */ 
 crtc0-ovl-path = <DDP_COMPONENT_OVL4_2L>, 
       <DDP_COMPONENT_OVL5_2L>, 
       <DDP_COMPONENT_OVL6_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC8>, 
       <DDP_COMPONENT_OVLSYS_DLI_ASYNC2>, 
       <DDP_COMPONENT_OVL1_2L>, 
       <DDP_COMPONENT_OVL2_2L>, 
       <DDP_COMPONENT_OVL3_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC6>; 
 // 表示yocto 端crtc0 只有1 个plane。 
 // 因为ovl pipes = 2，所以pipe0 使用OVL5_L1(最上层)，对应的pipe1 使用OVL2_L1。 
 // 同时dp_intf 节点中需添加host-os-use，weston 才能识别此crtc。 
 crtc0-layer-nr = <1>; 
 crtc0-layer-table = <0x800>; 
 
 crtc1-ovl-path = <DDP_COMPONENT_OVL2_2L>, 
       <DDP_COMPONENT_OVL3_2L>; 
 // 按需求，yocto 端是不需要plane 的，这里写2 是兼容drm，写0 会导致drm 报错。 
 // 注意virt_dp_1 节点中不要添加host-os-use，weston 就不会识别到此CRTC。 
 crtc1-layer-nr = <2>; 
 
 crtc2-ovl-path = <DDP_COMPONENT_OVL0_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC3>; 
 // 表示yocto 端crtc2 只有1 个plane，使用OVL0_L1(最上层)。 
 // 同时dsi0 节点中需添加host-os-use，weston 才能识别此crtc。 
 crtc2-layer-nr = <1>; 
 crtc2-layer-table = <0x2>; 
 
 crtc3-ovl-path = <DDP_COMPONENT_OVL7_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC10>; 
 // 表示yocto 端crtc3 只有1 个plane，使用OVL7_L1(最上层)。 
 // 同时dsi1 节点中需添加host-os-use，weston 才能识别此crtc。 
 crtc3-layer-nr = <1>; 
 crtc3-layer-table = <0x8000>; 
}; 
  
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
2. Android 端 
 // DP 作为 android 主屏。crtc0 & crtc1 是 DP，crtc2 是 DSI0，crtc3 是DSI1。 
 dp-is-main-display; 
 
 crtc0-ovl-path = <DDP_COMPONENT_OVL4_2L>, 
       <DDP_COMPONENT_OVL5_2L>, 
       <DDP_COMPONENT_OVL6_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC8>, 
       <DDP_COMPONENT_OVLSYS_DLI_ASYNC2>, 
       <DDP_COMPONENT_OVL1_2L>, 
       <DDP_COMPONENT_OVL2_2L>, 
       <DDP_COMPONENT_OVL3_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC6>; 
 /* 表示android 端crtc0 有3 个plane。 
  * 因为ovl pipes = 2，所以pipe0 使用OVL4_L0、OVL4_L1、OVL5_L0，对应的pipe1 使用OVL6_L0、 
  * OVL6_L1、OVL1_0。 
  */ 
 crtc0-layer-nr = <3>; 
 crtc0-layer-table = <0x700>; 
 
 crtc1-ovl-path = <DDP_COMPONENT_OVL2_2L>, 
       <DDP_COMPONENT_OVL3_2L>; 
 /* 表示android 端crtc1 有2 个plane。 
  * 因为crtc1 的全部plane 都是给android 用的，所以不用显式写出crtc-layer-table。 
  * 因为ovl pipes = 2，所以pipe0 使用OVL2_L0、OVL2_L1，对应的pipe1 使用OVL3_L0、OVL3_L1。 
  */ 
 crtc1-layer-nr = <2>; 
 
 crtc2-ovl-path = <DDP_COMPONENT_OVL0_2L>, 
       <DDP_COMPONENT_OVLSYS_DLO_ASYNC3>; 
 // 表示android 端crtc2 只有1 个plane，使用OVL0_L0(最下层)。 
 crtc2-layer-nr = <1>; 
 crtc2-layer-table = <0x1>; 
 
 crtc3-ovl-path = <DDP_COMPONENT_OVL7_2L>, 
   <DDP_COMPONENT_OVLSYS_DLO_ASYNC10>; 
 // 表示android 端crtc3 只有1 个plane，使用OVL7_L0(最下层)。 
 crtc3-layer-nr = <1>; 
 crtc3-layer-table = <0x4000>; 
  
; 
  
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1.4 常见问题/故障排除 
1.4.1 Dump 方法 
 
图 1-6. Dump 方法总览 
 
当遇到花屏或者显示异常的问题时，可以通过显示链路上 dump 来确认是哪个环节产生的问题。 
 
1.4.2 HWC CMD 
• Log CMD: 
adb shell setprop persist.vendor.debug.hwc.log V && adb shell setprop 
vendor.debug.hwc.skip_log 0 && adb shell dumpsys SurfaceFlinger  
 
• Dump sf info: 
adb shell dumpsys SurfaceFlinger > sf.log 
 
• Force GPU （GPU 叠图）: 
adb shell service call SurfaceFlinger 1008 i32 1 
 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 22

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 22 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
1.4.3 显示驱动 CMD 
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
adb shell “echo irq:on > /d/mtkfb” 
 
如果要抓开机 log，需要直接改代码： 
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c 
 
 
抓 display diagnose dump: 
adb shell "echo diagnose > /sys/kernel/debug/mtkfb && cat /sys/kernel/debug/mtkfb" > 
mtkfb.txt 
 
1.4.4 Pattern 
Pattern 命令需要在 Host OS 执行： 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 23

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 23 
MT8676 Hypervisor Display 
User Manual 
Confidential B 
• dsi0 pattern: 
adb shell "echo gce_wr:1400d178,c61,ffffffff > /sys/kernel/debug/mtkfb“ 
 
• dsi1 pattern: 
adb shell "echo gce_wr:1420d178,c61,ffffffff > /sys/kernel/debug/mtkfb“ 
 
• dp pattern: 
adb shell "echo gce_wr:1400bf00,41,ffffffff > /sys/kernel/debug/mtkfb“ 
 
1.4.5 黑屏 
• 背光是否开启 
• screencap 是否正确 
android: 
adb shell screencap -d 0/1 /sdcard/1.png 
yocto: 
adb shell "source /data/wayland_env_file;XDG_PICTURES_DIR=/tmp/  weston-screenshooter" 
• 如果有 bridge IC, bridge IC 是否正常 
• DSI/DP pattern 是否显示正常 
如果以上几点都 OK，最后就需要 display owner 详细看 log 来定位问题。 
 
1.4.6 花屏/闪屏 
• 看 log 中是否有 DISP_OVL/RDMA underflow/abnormal 
若有, 提供 display mobile log 和 display diagnose dump 
 
• Force GPU 后是否正常 
adb shell service call SurfaceFlinger 1008 i32 1 
 
• DSI/DP pattern 是否正常 
 
MediaTek Confidential
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback

## PDF物理页 24

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 24 
MT8676 Hypervisor Display 
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
 For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
MediaTek Confidential
For jzwang@ pvetec.com Use Only
Document Feedback


---
# SRC0064 MT8676_Hypervisor_Suspend_Resume_sample(1).pdf

来源：培训材料/PVT技术分享文档/MT8676_Hypervisor_Suspend_Resume_sample(1).pdf

SHA-256：02961279599c269def44d2fc7768c283d01179defe4878fac5c6b7adfad8be35

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0064.html)

## PDF物理页 1

— 1 —
PVT
MT8676 Hypervisor Suspend & Resume
sample
版本: v1
出版日期: 2026/1/10
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 2

— 2 —
版本记录
版本 日期 作者 描述
v1 2026/1/10 杨娟陶 正式版
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 3

— 3 —
目录
1. 参考案例主要架构介绍 ............................................................................................................... 4
1.1 参考方案总架构介绍 ......................................................................................................... 4
1.2 休眠流程介绍 ..................................................................................................................... 4
1.3 唤醒流程介绍 ..................................................................................................................... 5
1.3.1 唤醒场景示范 .......................................................................................................... 5
1.3.2 读取唤醒源 .............................................................................................................. 5
1.3.2.1 MCU 唤醒源..................................................................................................6
1.3.2.2 SOC 唤醒源....................................................................................................6
1.3.3 场景设计示范 ...................................................................................................8
1.3.3.1 CAN 网络唤醒流程.......................................................................................7
1.3.3.2 长连接唤醒流程..........................................................................................8
1.3.3.3 Modem 唤醒流程.........................................................................................9
1.3.3.4 modem 唤醒后的远控场景........................................................................11
1.3.3.5 预约功能唤醒流程....................................................................................12
2. MCU 扩展 ..................................................................................................................................... 14
2.1 MCU/SOC 沟通 gpio 设定 .................................................................................................14
2.2 使用场景介绍 ................................................................................................................... 14
2.2.1 CAN 唤醒................................................................................................................14
2.2.2 休眠......................................................................................................................14
2.2.3 SOC 唤醒 MCU.......................................................................................................15
2.3 MCU 保活机制..................................................................................................................15
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 4

— 4 —
1. 参考案例主要架构介绍
1.1 参考方案总架构介绍
此为当前可扩展的一种架构介绍。主要是触发场景的完善和多系统电源管理总控(sleepmanager)的改变。
1.2 休眠流程介绍
1）、PowerMode 决策为休眠模式后，变更电源模式并通知，再拉高 SOC 休眠 gpio 通知 SOC 休眠。
sleepmanager 收到虚拟的 powerkey 休眠后，触发 SOC 的休眠流程。
2）、SOS 通过 mailbox 通知 android 开始休眠。
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 5

— 5 —
3）、SleepManager 通知仪表各注册 APP 执行休眠流程。
4）、SleepManager 通过虚拟机读取收到 Android 休眠完成消息。
5）、SleepManager 通过 mailbox 通知触发 TBOX 的休眠。Sleepmanager(tbox)收到 powerkey 后，
根据需求触发云端上报，上报完成后开始触发 TBOX 休眠流程。
6）、SleepManager 通过虚拟机读取收到 TBOX 也休眠完成。
7）、SOC ATF 拉低 SOC 状态 gpio 以通知 MCU 当前 SOC 状态为休眠。MCU 收到后开始自己的休眠流
程。
1.3 唤醒流程介绍
1.3.1 唤醒场景示范
1.3.2 读取唤醒源
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 6

— 6 —
1.3.2.1 MCU 唤醒源
1）、MCU 通过 GPIO 唤醒 SOC, 用 fdbus+spi 把唤醒源传给 soc 并写入/sys/power/wakeup_type 节
点。
2）、SOS 的 SleepManager 模块唤醒后，从/sys/power/wakeup_type 节点读出唤醒源。
3）、Sleepmanager 模块根据具体的唤醒原因决策需要唤醒 TBOX 系统后，唤醒 TBOX 系统。
4）、TBOX 系统的 Sleepmanager(tbox)模块向 SOS 系统的 SleepManager 模块问询当前唤醒源
（CAN/IGN/ECALL/RTC），并执行对应的业务逻辑。
1.3.2.2 SOC 唤醒源
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 7

— 7 —
1）、SOC 上 RTC Modem 唤醒 SOS 系统，SOS 系统唤醒 MCU 系统。
2）、SOS 系统唤醒后，将唤醒源写入/sys/power/wakeup_type 节点。
3）、SleepManager 模块根据具体的唤醒原因决策需要唤醒 TBOX 系统后，唤醒 TBOX 系统。
4）、TBOX 系统的 SleepManager(tbox)模块向 SOS 系统的 SleepManager 模块问询当前唤醒源
（Modem/RTC），并执行对应的业务逻辑。
5）、TBOX 系统的 XCALL 模块根据 modem 中的信息将子因（sms/call/data/modem fail）给到
SleepManager(tbox)模块；SleepManager(tbox)模块通过 power hal 将子因转发给 SOS 系统的
SleepManager 和 MCU 的 PowerMode 模块。
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 8

— 8 —
1.3.3 场景设计示范
1.3.3.1 CAN 网络唤醒流程(IGN 硬线唤醒也适用)
1）、CAN 收发器收到 CAN 信号唤醒 MCU 系统
2）、MCU 系统的 PowerMode 模块拉高 gpio，以通知 SOC 开始唤醒流程。
3）、SOC 上的 MTK SPM 模组收到 gpio EINT，依次打开释放的资源，如通知 PMIC 离开
Low Power Mode，打开 VCORE 和 26M，发送命令通知 DRAM 离开自刷新，最后给 cpu0 上电。
4）、SOC 上的 ATF 模块在 cpu0 上电后，执行 cpu 的唤醒流程，再跳到 Suspend 前设定的地址，开始
执行系统 Resume 流程，完成后拉 gpio，以通知 MCU 当前 SOC 的运行状态为唤醒。
5）、系统 Resume 流程会唤醒虚拟机 vcpu 线程，跳到 Host OS Linux Kernel 执行 kernel 的 power 唤
醒流程。
6）、kernel power 模块经过 resume systemcore ->恢复全局 cpu 中断 ->拉起 nonboot cpus ->唤醒
dev(resume_noirq →resume_early→resume ->complete) ->取消冻结
7）、kernel power 模块执行唤醒完成后返回 SleepManager 模块收到 kernel power 的调用里。
8）、SleepManager 模块收到调用休眠返回后，判定唤醒成功且唤醒源为 mcu 且为 can 网络，唤醒中间
件各业务服务。
9）、SleepManager 模块继续唤醒应用层各注册的客户端。
10）、SleepManager 模块通过写虚拟机节点唤醒 TBOX。
10.1）、TBOX 系统的 kernel power 经过 resume systemcore ->恢复全局 cpu 中断 ->拉起 nonboot
cpus ->唤醒 dev(resume_noirq→resume_early →resume ->complete)→取消冻结。然后返回 power
hal 的调用函数。
10.2）、TBOX 系统的 power hal 模块收到返回唤醒后同步反馈给 SleepManager(tbox)。
10.3）、TBOX 系统的 power hal 模块同步开始唤醒消息给给 SleepManager。
10.4）、SleepManager(tbox)收到唤醒后，判定唤醒成功且唤醒源为 can 网络，唤醒中间件各业务服务。
11）、SleepManager 模块通过写虚拟机节点唤醒 android。
11.1）、Android 系统的 kernel power 经过 resume systemcore ->恢复全局 cpu 中断 ->拉起 nonboot
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 9

— 9 —
cpus ->唤醒 dev(resume_noirq→resume_early →resume ->complete)→取消冻结。然后返回 CPMS
的休眠调用函数。
11.2）、CPMS 模块同步开始唤醒消息给给 power hal, power hal 同步开始唤醒消息给给 sleepmanager。
11.3）、CPMS 收到唤醒后，判定唤醒成功，通知各注册的 hal 进行唤醒。并同时恢复 bt wifi usb。
11.4）、CPMS 唤醒各业务服务。
1.3.3.2 长连接唤醒流程
1）、SOC 上 PMIC 自带的 RTC 闹钟触发了 PMIC 离开 Low Power Mode，打开 VCORE 和 26M，发
送命令通知 DRAM 离开自刷新，最后给 cpu0 上电。
2）、SOC 上的 ATF 模块在 cpu0 上电后，执行 cpu 的唤醒流程，再跳到 Suspend 前设定的地址，开始
执行系统 Resume 流程。完成后拉 gpio，以通知 MCU 当前 SOC 的运行状态为唤醒；拉 gpio 以通知
MCU 唤醒。
3）、系统 Resume 流程会唤醒虚拟机 vcpu 线程，跳到 Host OS Linux Kernel 执行 kernel 的 power
唤醒流程。
4）、kernel power 模块经过 resume systemcore ->恢复全局 cpu 中断 ->拉起 nonboot cpus ->唤醒
dev(resume_noirq ->resume_early ）
5）、mcu_mgr 模块在 resume_noirq 层被唤醒后判定当前是 SOC 自唤醒，ATF 中拉 gpio 让 MCU 唤醒，
阻塞并等待 MCU 的唤醒结果
6）、MCU 唤醒完成后拉 gpio 通知 SOC 自己唤醒完成。SOC 的 mcu_mgr 模块在收到 MCU 的唤醒结
果后：成功则继续唤醒；
7）、kernel power 模块检测到 resume_noirq 成功执行完成，则继续唤醒 dev(resume_early→resume
->complete)→取消冻结，然后唤醒 SleepManager 调用的休眠函数。
8）、SleepManager 模块收到调用休眠返回后，判定唤醒成功且唤醒源为 soc rtc。
9）、SleepManager 模块通过写虚拟机节点唤醒 TBOX。
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 10

— 10 —
10）、TBOX 系统的 kernel power 经过 resume systemcore ->恢复全局 cpu 中断 ->拉起 nonboot cpus
->唤醒 dev(resume_noirq →resume_early→resume ->complete)→取消冻结。然后返回 power hal
的调用函数。
11）、TBOX 系统的 power hal 模块收到返回唤醒后同步反馈给 SleepManager(tbox)。
--------SleepManager(tbox)收到唤醒后，判定唤醒成功且唤醒源为 SOC RTC 和闹钟事件后，则唤醒中
间件各业务服务，并通知 TSP 模块。
--------TSP 模块收到闹钟事件通知后，向 TSP 平台上报。
12）、TBOX 系统的 power hal 模块唤醒 SleepManager(tbox)后发送“开始唤醒消息”给 sleepmanager。
1.3.3.3 modem 唤醒流程（适用短信、ECALL、数据唤醒）
1）、SOC 上 Modem 接收到数据/短信/CALL 后通知 SPM。
2）、SOC 上的 MTK SPM 模组收到 modem 通知，依次打开释放的资源，如通知 PMIC 离开 Low Power
Mode，打开 VCORE 和 26M，发送命令通知 DRAM 离开自刷新，最后给 cpu0 上电。
3）、SOC 上的 ATF 模块在 cpu0 上电后，执行 cpu 的唤醒流程，再跳到 Suspend 前设定的地址，开始
执行系统 Resume 流程。完成后拉 gpio，以通知 MCU 当前 SOC 的运行状态为唤醒；拉 gpio 以通知
MCU 唤醒。
4）、系统 Resume 流程会唤醒虚拟机 vcpu 线程，跳到 Host OS Linux Kernel 执行 kernel 的 power 唤
醒流程。
5）、kernel power 模块经过 resume systemcore ->恢复全局 cpu 中断 ->拉起 nonboot cpus ->唤醒
dev(resume_noirq ->resume_early ）
6）、mcu_mgr 模块在 resume_noirq 层被唤醒后判定当前是 SOC 自唤醒，在 ATF 拉 gpio 让 MCU 唤
醒，阻塞并等待 MCU 的唤醒结果
7）、MCU 唤醒完成后拉 gpio 通知 SOC 自己唤醒完成。SOC 的 mcu_mgr 模块在收到 MCU 的唤醒结
果后：成功则继续唤醒；
8）、kernel power 模块检测到 resume_noirq 成功执行完成，则继续唤醒 dev(resume_early→resume
->complete)→取消冻结，然后唤醒 SleepManager 调用的休眠函数。
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 11

— 11 —
9）、SleepManager 模块收到调用休眠返回后，判定唤醒成功且唤醒源为 soc modem。
10）、SleepManager 模块通过写虚拟机节点唤醒 TBOX。
11）、TBOX 系统的 kernel power 经过 resume systemcore ->恢复全局 cpu 中断 ->拉起 nonboot cpus
->唤醒 dev(resume_noirq →resume_early→resume ->complete)→取消冻结。然后返回 power hal
的调用函数。
12）、TBOX 系统的 power hal 模块收到返回唤醒后同步反馈给 SleepManager(tbox)。
------SleepManager(tbox)收到唤醒后，判定唤醒成功且唤醒源为 SOC modem 后，则唤醒中间件各业
务服务，并通知 XCALL 模块进行 modem 读取和校验。
------XCALL 模块读取 modem 中数据/SMS/CALL 进行校验，结果通知给 SleepManager(tbox)模块。
------SleepManager(tbox)模块通知子唤醒原因给 power hal 模块。
------power hal 模块通知子唤醒原因给 SOS 系统的 SleepManager 模块。
------SleepManager 模块根据结果通知 MCU 系统 PowerMode 模块当前状态。如果校验失败，MCU
系统 PowerMode 模块则发起休眠流程 STR；如果校验成功，则开启强制保活的倒计时
MCU_KEEP_TBOX_TIMER_OUT。
13）、TBOX 系统的 power hal 模块唤醒 SleepManager(tbox)后发送“开始唤醒消息”给 SleepManager。
1.3.3.4 modem 唤醒后的远控场景（响应远控信号的部分适用于预
约功能）
1）、TBOX 系统上的 XCALL 读取 modem 中的数据/短信，进行校验和识别。
2）、XCALL 模块识别到远控请求时，发送 can 信号，再通知 SleepManager(tbox)模块需要维持网络。
3）、SleepManager(tbox)模块将维持网络的请求发送给 power hal 模块。
4）、power hal 模块通过 fdbus(vsock)通知维持网络给 SOS 系统的 sleepmanager 模块。
5）、sleepmanager 模块记录维持网络的 log，再将维持网络状态传递给 mcu_ipc_server 模块。
6）、mcu_ipc_server 模块将维持网络请求通过 SPI 传递给 MCU 系统的 PowerMode 模块。
7）、MCU 系统的 PowerMode 模块通过 CAN 网络持续强制发送网络管理报文给 CEM，并根据消息中
携带的参数重置对应时间的倒计时 MCU_KEEP_TBOX_TIMER_OUT，倒计时结束则不再强制发送网络管
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 12

— 12 —
理报文，届时根据实际情况进行决策电源模式等。（只要有此消息则重置倒计时
MCU_KEEP_TBOX_TIMER_OUT）
8）、MCU 系统的 PowerMode 模块收到 CEM 发来的远程模式信号，变更电源模式为远控模式，不打断
强制网络管理报文的计时。
9）、PowerMode 模块通过 SPI 通信通知 SOS 系统的 mcu_ipc_server 模块需要 can 唤醒。
10）、SOS 系统的 mcu_ipc_server 模块收到消息后，透传通知组 sleepmanager 模块。
11）、sleepmanager 模块收到需要 can 唤醒消息后，唤醒中间件各业务服务。
12）、sleepmanager 模块继续唤醒应用层各注册的客户端。
13）、sleepmanager 模块通知 can 唤醒给 TBOX 系统的 power hal 模块。
14）、sleepmanager 模块通过写虚拟机节点唤醒 android。
15）、Android 系统的 kernel power 经过 resume systemcore ->恢复全局 cpu 中断 ->拉起 nonboot
cpus ->唤醒 dev(resume_noirq→resume_early →resume ->complete)→取消冻结。然后返回 power
hal 的调用函数。
16）、Android 系统的 power hal 模块收到返回唤醒后同步反馈给 CPMS。
17）、CPMS 模块同步开始唤醒消息给 power hal 模块。
17.1）、power hal 模块给 SOS 系统的 sleepmanager 模块。sleepmanager 模块收到后进行 log 记录。
18）、CPMS 收到唤醒后，判定唤醒成功，通知各注册的 hal 进行唤醒。并同时恢复 bt wifi usb。
19）、CPMS 再唤醒各业务服务。
1.3.3.5 预约功能唤醒流程（适用自动闭锁、预约升级、智能闹钟、
预约充电）
1）、SOC 上 PMIC 自带的 RTC 闹钟触发了 PMIC 离开 Low Power Mode，打开 VCORE 和 26M，发
送命令通知 DRAM 离开自刷新，最后给 cpu0 上电。
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 13

— 13 —
2）、SOC 上的 ATF 模块在 cpu0 上电后，执行 cpu 的唤醒流程，再跳到 Suspend 前设定的地址，开始
执行系统 Resume 流程。完成后拉 gpio，以通知 MCU 当前 SOC 的运行状态为唤醒。
3）、系统 Resume 流程会唤醒虚拟机 vcpu 线程，跳到 Host OS Linux Kernel 执行 kernel 的 power
唤醒流程。
4）、kernel power 模块经过 resume systemcore ->恢复全局 cpu 中断 ->拉起 nonboot cpus ->唤醒
dev(resume_noirq ->resume_early ）
5）、mcu_mgr 模块在 resume_noirq 层被唤醒后判定当前是 SOC 自唤醒，atf 拉 gpio 让 MCU 唤醒，
阻塞并等待 MCU 的唤醒结果
6）、MCU 唤醒完成后拉 gpio 通知 SOC 自己唤醒完成。SOC 的 mcu_mgr 模块在收到 MCU 的唤醒结
果后：成功则继续唤醒;
7）、kernel power 模块检测到 resume_noirq 成功执行完成，则继续唤醒 dev(resume_early→resume
->complete)→取消冻结，然后唤醒 sleepmanager 调用的休眠函数。
8）、sleepmanager 模块收到调用休眠返回后，判定唤醒成功且唤醒源为 soc rtc。
9）、sleepmanager 模块通过写虚拟机节点唤醒 TBOX。
10）、TBOX 系统的 kernel power 经过 resume systemcore ->恢复全局 cpu 中断 ->拉起 nonboot cpus
->唤醒 dev(resume_noirq →resume_early→resume ->complete)→取消冻结。然后返回 power hal
的调用函数。
11）、TBOX 系统的 power hal 模块收到返回唤醒后同步反馈给 sleepmanager(tbox)。
11.1）、sleepmanager(tbox)收到唤醒后，判定唤醒成功且唤醒源为 SOC rtc 和闹钟事件后，根据识别
到的具体闹钟事件执行对应业务。通知 power hal 当前的子唤醒原因。
11.1.1）、power hal 模块通知子唤醒原因给 SOS 系统的 sleepmanager 模块。
11.1.2）、sleepmanager 模块根据子因通知 MCU 系统 PowerMode 模块当前状态。MCU 系统
PowerMode 模块开启强制保活的倒计时。
11.2）、sleepmanager(tbox)唤醒中间件各业务服务
12）、TBOX 系统的 power hal 模块唤醒 sleepmanager(tbox)后发送“开始唤醒消息”给 sleepmanager。
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 14

— 14 —
2. MCU 扩展
2.1 MCU/SOC 沟通 gpio 设定
2.2 使用场景介绍
2.2.1 CAN 唤醒
2.2.2 休眠
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 15

— 15 —
2.2.3 SOC 唤醒 MCU
2.3 MCU 保活机制
在一些模式和状态下（如长连接等），按照 can 信号条件，是会触发 STR 的，但需求要求唤醒后需要保活
60 秒，等待系统执行一些事情，所以设计了因这类唤醒，做 MCU 的保活
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件

## PDF物理页 16

— 16 —
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件
PVT内部文件


---
# SRC0065 MT8676_Hypervisor_Suspend_Resume_V1.2.pdf

来源：培训材料/PVT技术分享文档/MT8676_Hypervisor_Suspend_Resume_V1.2.pdf

SHA-256：bbb5ef8aa8ec40ca36708eb881fcb77c5b8050a4c0f1145a68dce585ea371681

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0065.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.2 
出版日期:  2025-02-21
MT8676 Hypervisor Suspend & Resume 
User Manual 
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-10-28 郑孝俊 正式版 
1.1 2024-11-13 郑孝俊 更新 L+L+A 
1.2 2025-02-21 陈杰 更新 Modem 和 RTC 唤醒 
 
  
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 Suspend/Resume ······················································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 架构/流程概要 ························································································································································ 4 
 Hypervisor Suspend 流程 ····························································································································· 4 
 Hypervisor Resume 流程 ······························································································································ 6 
 RTC 或 Modem 唤醒流程····························································································································· 7 
1.3 常见问题/故障排除 ················································································································································ 8 
 如何判定系统休眠成功 ······························································································································· 8 
 如何确认唤醒源 ·········································································································································· 8 
 唤醒源梳理 ·················································································································································· 9 
 如何分析不能休眠的问题 ························································································································· 10 
 如何分析休眠功耗大的问题 ····················································································································· 11 
 Hypervisor Debug 命令 ······························································································································ 11 
附件一 附加条款 ····························································································································································· 12 
 
图片目录 
图 1-1. Hypervisor Suspend 流程 ·············································································································································· 5 
图 1-2. Hypervisor Resume 流程 ··············································································································································· 6 
图 1-3. Wakelock dump 示意图 ··············································································································································· 10 
 
表格目录 
表 1-1. MT8676 唤醒源列表 ····················································································································································· 9 
 
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
1 Suspend/Resume 
1.1 概述 
本章节主要介绍 MT8676 Hypervisor Suspend/Resume 流程以及常见问题的处理方法。 
 
在 MT8676 平台上，Suspend 即 Suspend to RAM，此状态使所有的设备进入低功耗状态，仅保留 RAM 自刷新。  
 
Suspend Power State： 
 
• Tasks “freezed” 
• 外部设备/内部部分模块关电或者进入低功耗模式 
• System PLL/clock close 
• ARM off 
• DRAM 自刷新 
• PMIC 进入低功耗模式 
• VCORE off 
• SPM run 
• 等待硬件唤醒事件 
 
在 MT8676 Hypervisor（L+L+A）系统上， Host OS SoS 与 Guest OS Tbox 系统都是 Yocto， Guest OS IVI 系统是
Android。系统级 Suspend 由 Host OS 发起，触发 Guest OS 运行 Suspend Flow，Guest OS 都完成 Suspend Flow 之
后，Host OS 可以进入 Suspend，Host OS Suspend 完成之后整个系统才能进入省电的深度休眠模式。 
 
1.2 架构/流程概要 
 Hypervisor Suspend 流程 
Hypervisor Suspend 框架图如下（以 EINT 触发系统进出休眠为例）： 
 
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

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
 
图 1-1. Hypervisor Suspend 流程 
 
主要的流程说明: 
 
1. 平台进出休眠主要由 MCU 发起，MCU 通过 GPIO35 (MCU2AP) 的状态控制 SoC 进出休眠，GPIO35 被拉低后，
会触发中断，该中断会被 Hypervisor 分发给 SoS 系统处理，SoS Kernel 收到中断后，将 Key Event 上报。 
2. 在 SoS UserSpace 中，MediaTek 添加了一段控制逻辑 SleepManager (State Manager)，用于管理 Guest OS 的电
源状态，这层逻辑主要是 SoC 通过 Input Sub System 获取 Key Event 来触发的。 
3. 当检测到休眠事件后，SoS UserSpace 写 powerkey event 到/sys/guest_os/android(tbox)/pm_state，向两
个 Guest OS（Androdi/Yocto）发起休眠请求。 
4. SoS 的 Kernel Driver 通过 Mailbox 的方式将 Suspend 请求通知到两个 Guest OS 的 Car Event Driver。 
5. 在 Car Event Driver 中，上报虚拟 Power Key (Keyevent=87)，触发 Guest OS 端完整的休眠流程。 
6. Guest OS IVI 由于 Vehicle HAL 没有现成的接口对接 Car EVENT Driver，所以这里增加 Input sub system 支持，等
待 Kernel 端送来的虚拟 Power Key，VHAL 收到后会通知 Car Power Management Service 启动休眠流程。 
7. Power Management Service 依然监听 Power Key Event(Keyevent=116)，这里没有执行 PMS Flow。 
8. 触发关闭显示相关硬件。 
9. CPMS 在没有唤醒锁检查的情况下触发 Suspend Flow，触发 Android Kernel Suspend。Kernel Suspend Flow 与原
生系统中的流程相同。根据执行顺序，它依次调用设备注册的 Prepare/Suspend/Suspend_late 回调函数，
在休眠阶段为每个 Device driver 完成必要的准备工作。 
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
10. 各 Device 休眠后，送s2idle SMC 指令到 ATF 去关闭 CPU core，指令会被 Hypervisor 拦截，并挂起对应的
vCPU 线程。Android 的休眠完成，Hypervisor 会记录的 Android 状态将从 running 改为 suspend，方便 Host OS
通过节点查询。 
11. Host OS 端触发 Guest OS 端休眠后，会阻塞并等待，直到从节点/sys/guest_os/android(tbox)/pm_state
获取到两个 Guest OS 都为 Suspend 的状态。 
12. 待 Guest OS 都 Suspend 后，Host OS 端上报 key code 87 触发关闭显示相关，然后再检查 Wakelock 状态，如无
锁，则触发 Host OS Kernel Suspend Flow (echo mem > /sys/power/state)。 
13. 执行 Host OS Kernel Suspend，完成 Device Suspend 后，送s2idle SMC 指令到 ATF 去关闭 CPU core，指令会被
Hypervisor 拦截，并挂起对应的 vCPU 线程，然后虚拟机做好 backup，Hypervisor 将s2idle 指令再发送给
ATF，将物理 CPU 真正关闭。 
14. 在 ATF 中，CPU0 执行 WFI 指令前，先将 GPIO128 (AP2MCU)拉低，通知 MCU，SoC 端已经完成 Host OS 和
Guest OS 的 Suspend Flow。 
15. 待 Arm 相关的硬件被关闭后，SPM (System Power Manage，用于电源管理的 MCU) 将接管整个系统的资源，控
制 DRAM 进入自刷新模式，关闭 26M 和 VCORE，通知 PMIC 进入 Low Power Mode。至此，整个休眠流程完
成，系统处于低功耗状态，等待唤醒事件发生。 
 
 Hypervisor Resume 流程 
Resume Flow 与 Suspend 相反，可以参考下图： 
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
 
图 1-2. Hypervisor Resume 流程 
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
主要流程： 
1. MCU 收到唤醒事件后，拉高 GPIO35 (MCU2AP)，SPM 收到 EINT 后，依次打开释放的资源，如通知 PMIC 离开
Low Power Mode，打开 VCORE 和 26M，发送命令通知 DRAM 离开自刷新。 
2. 给 CPU0 上电，执行 CPU Resume 流程，再跳到 Suspend 前设定的地址，开始执行系统 Resume 流程。 
3. 拉高 GPIO128，将 SoC 已经醒来的消息发送给 MCU。(可根据需求调整通知 MCU 的时间点，如等 Android 
Resume 完成再拉高 GPIO128)。 
4. Hypervisor 中 vCPUx 线程恢复后，跳到 Host OS Linux Kernel，再执行 Native Kernel Resume Flow，将唤醒事件
通过 Key Event 上报。 
5. SoS 的 SleepManager 通过 Input Subsystem 上报的事件判断后，将决定再次休眠或者继续唤醒 Flow，像 MCU
拉高 GPIO35 这种就会继续唤醒 Flow。 
6. 如果是可以唤醒整个系统的 Key Event，则上报 keyvevent 87 去 resume Weston, 并 hold wakelock，防止再次休
眠。 
7. 写节点/sys/guest_os/android(tbox)/resume，触发 Guest OS 唤醒。 
8. Hypervisor 收到后，恢复 vCPU0 线程。 
9. Enable Non-Boot CPUs，恢复 vCPU1~7 线程，开始 IVI 及 Tbox Kernel Resume Flow。 
10. IVI 基于 CPMS 架构，无需判断 keyevent，默认所有事件都可以触发整个系统 Resume。 
11. 在 Host OS 端，可以通过节点/sys/guest_os/android(tbox)/pm_state，使用 Mailbox 机制查询两个 Guest 
OS 系统（Android/Tbox）状态，如果 Guest OS 端 kernel Resume 完成则更新状态为 Running。 
12. Android 端， Car Power Management Service 收到唤醒事件后，Disable System Suspend，防止误触发休眠。Tbox 
端， 由 SleepManager 主动 hold wakelock。 
13. 通知打开显示相关模块，至此，整个唤醒流程完成，可以开始人机交互。 
 RTC 或 Modem 唤醒流程 
RTC 或 Modem，从实际场景以及节省功耗的角度来说，它们唤醒的流程有所不同。  
参考图 1-2，SPM 收到 RTC 或 Modem 唤醒后，1-6 的流程没有变化。第 7 步，SOS 的 SleepManager 通过 Key Event  
的 Device Name，判断出是 RTC 或 Modem 触发的唤醒，则根据实际需求做不同的唤醒逻辑，例如仅需要唤醒 Tbox  
OS。Tbox Resume 后，需要 hold wake_lock 再处理任务，处理完任务后 release wake_lock。而 Host OS 端，当触发 
Tbox Resume 后，会持一个临时的 wake_lock，通过节点/sys/guest_os/tbox/pm_state，使用 Mailbox 机制查询 
Tbox OS 的状态，如果 Tbox 端已完成任务并重新睡下去，Host OS 端则会释放临时的 wake_lock。最后，SOS 端监测 
到没有 hold wakelock，会重新睡下去。 
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
1.3 常见问题/故障排除 
 如何判定系统休眠成功 
屏幕熄灭可能仅表示系统进入浅睡眠，这并不代表系统已经成功进入休眠状态。 
判定系统是否休眠成功需要查看 Kernel log，若系统成功进入 Suspend，则 Host OS 端不再打印 Kernel log。 
 
如果需要通过 log 判断休眠是否成功，需要先下这几行命令打开更多的 debug log 信息： 
adb shell "echo 8 8 8 8 > /proc/sys/kernel/printk" 
adb shell "echo 1 > /sys/module/kernel/parameters/initcall_debug" 
adb shell "echo 1 > /proc/mtprintk" 
 
Kernel log 中， 关键字 “PM: Syncing filesystems ...” 表示 Kernel 开始执行 suspend 流程。 
Kernel log 中， 关键字“suspend of devices complete after xxx msecs” 表示 device suspend 完成。 
Kernel log 中， 关键字 “late suspend of devices complete after xxx msecs” 表示 device late suspend 完成。 
Kernel log 中， 关键字 “noirq suspend of devices complete after xxx msecs” 表示 device noirq suspend 完成。 
Kernel log 中， 关键字 “suspend enter” 表示 suspend 流程完成，系统已进入 suspend 状态。 
 
 如何确认唤醒源 
在 Kernel log 中搜索关键字“suspend wake up by”，可以查看唤醒源。 
 
如： 
Pwrkey 唤醒（及其他 EINT 唤醒）： 
[SPM] suspend wake up by R12_EINT_EVENT_B, timer_out = 207308 
 
如果要看具体是由哪个 EINT 唤醒，需要先从日志查看： 
EINT xxx is pending 
 
再通过cat /proc/interrupts 看 xxx 对应的是哪个中断。 
 
Modem 相关唤醒： 
[SPM] suspend wake up by R12_CCIF0_EVENT_B, timer_out = 1825253 
 
定时器（PCM_Timer）唤醒： 
[SPM] suspend wake up by PCM_TIMER, timer_out = 65612 
 
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
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
R12_REG_CPU_WAKEUP_B 28 内部唤醒源 N 
R12_APUSYS_WAKE_HOST_B 29 APUSYS 的唤醒源 Y 
R12_PCIE_WAKEUP_EVENT_B 30 PCIe 相关唤醒源 Y 
R12_MSDC_WAKEUP_EVENT_B 31 MSDC 相关唤醒源 Y 
 
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
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
 如何分析不能休眠的问题 
如系统灭屏后无法进入休眠，可以用以下命令判定是哪个 wakelock 阻止系统进入休眠： 
• 查看 Kernel 中有哪些模块持锁： 
cat /sys/kernel/debug/wakeup_sources 
 
观察输出结果的第 5 列 active_since，数字不为 0 且一直在增大的就是阻止系统进入待机的 wakelock。 
 
例如图 1-3 中就是 USB 阻止了系统进入待机状态： 
 
图 1-3. Wakelock dump 示意图 
 
该命令需要在 UART 下输入，因为插入 USB 本身会阻止系统进入待机状态。 
 
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
 如何分析休眠功耗大的问题 
• 首先看是否有频繁唤醒问题，如果有，请参考 1.3.3 章节确认唤醒源。 
• 如果成功进入休眠状态但功耗偏大，请先检查是否有未关闭的外设耗电。  
• 如果定位到是 MediaTek SoC 造成的功耗偏大，请提供日志给 MediaTek 进行分析。 
 
 Hypervisor Debug 命令 
• 在 SoS 端检查 IVI (Android) OS 的状态，显示 running 表示 Android 正在运行，显示 suspend 表示 Android 已经
挂起。 
cat /sys/guest_os/android/pm_state  
 
• 在 SoS 端触发 IVI (Android) OS 进入休眠状态。 
echo powerkey > /sys/guest_os/android/pm_state  
 
• 在 SoS 端触发 IVI (Android) OS 唤醒。 
echo 0 > /sys/guest_os/android/resume 
 
• 在 SoS 端检查 Tbox OS 的状态，显示 running 表示 Tbox 正在运行，显示 suspend 表示 Tbox 已经挂起。 
cat /sys/guest_os/tbox/pm_state  
 
• 在 SoS 端触发 Tbox OS 进入休眠状态。 
echo powerkey > /sys/guest_os/tbox/pm_state  
 
• 在 SoS 端触发 Tbox OS 唤醒。 
echo 1 1 > /sys/guest_os/tbox/resume  （Tbox Sleepmanager 持锁） 
echo 1 2 > /sys/guest_os/tbox/resume   （Tbox Sleepmanager 不持锁）  
 MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Hypervisor Suspend & Resume 
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
PVT
MediaTek Confidential Release for
PVT
MediaTek Confidential Release for
PVT
 MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM
MediaTek Confidential Release for
PVETEC_SPM


---
# SRC0066 MT8676_Yocto_AEE_User_Manual_V1.0.pdf

来源：培训材料/PVT技术分享文档/MT8676_Yocto_AEE_User_Manual_V1.0.pdf

SHA-256：7ace10c5983949c671b67b679cf443518e6850e9fd4aa6c1c38383b9e97e7d13

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0066.html)

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
 For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
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
 For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
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
 For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
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
 For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
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
 For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
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
 For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
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
 For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
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
 For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
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
 For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
MediaTek Confidential
For cqli@ pvetec.com Use Only
Document Feedback


---
# SRC0067 MT86xx+Workshop+Tbox.pdf

来源：培训材料/PVT技术分享文档/MT86xx+Workshop+Tbox.pdf

SHA-256：6e1afbe19015438d4d0a0a9e70ebabbb5b50c0049acaf77ddbd03014d048bcda

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0067.html)

## PDF物理页 1

2020 Copyright © MediaTek Inc. All rights reserved.
INTERNAL USEConfidential CINTERNAL USE
Hyper tbox
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM

## PDF物理页 2

UNCLASSIFIED
MediaTek Proprietary and Confidential. © 2021 MediaTek Inc. All rights reserved.
Confidential C
Backend DrvFrontend DrvMT8676MidwareYocto（SOS*）KernelDisplayGPUAPUAudioEthernetPowerUARTCameraConninfraAndroid-IVI（UOS）APPsNative库…HALSOAKernelAPUAudioCameraPowerUARTGNSSUSBBT/WIFITouchDisplayGPUConninfraTbox应用Yocto-Tbox（UOS*）KernelUARTMidwarePowerModemAudioGNSSATFConninfra需要修改模块SOS: Server OSUOS: User OS MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM

## PDF物理页 3

UNCLASSIFIED
MediaTek Proprietary and Confidential. © 2021 MediaTek Inc. All rights reserved.
Confidential CCustomer AppHypervisor TboxMTKMTK Telephony serviceYocto UOS Android UOSHypervisor    KernelRildPowerMTKNetworkManagermlclientVirtionetModemCCCiDSPConninfraGNSS drivermnldGNSS halSpeechHALGNSSframeworkAndroidAppEthDSPVmnetVirtionetethConnectivityframeworkVsocketVsocketAudioControlAudioHALAudioDriverHALMWBackend DrvFrontend DrvCustomer
ADSPAudio-SpeechDSP MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM

## PDF物理页 4

UNCLASSIFIED
MediaTek Proprietary and Confidential. © 2021 MediaTek Inc. All rights reserved.
Confidential CTbox – Audio W/ Phone callTboxModemYocto Audio HALSpeech HALAudio driverCCCIdriverDSP driverYocto(SOS)Audio HWADSPYocto(UOS)NBL-VMMADSP BEAudio FE DriverDSP FE driver Nebula OS(Virtio-snd/IRQ Handler)Audio BE
PCMIF
MTKIFMTKIFeCall audio controleCall audio data•Audio focus管理后续根据需求讨论 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM

## PDF物理页 5

UNCLASSIFIED
MediaTek Proprietary and Confidential. © 2021 MediaTek Inc. All rights reserved.
Confidential CTbox - GNSS
Yocto KernelYocto SOSYocto UOS
Hypervisor    Yocto kernelKernelHypervisor
Android UOSAndroid kernelConninfraGNSS driverMnldGNSS halGNSS halVirtio-ConninfraVhost-conninfraAdrdApplicationAGPSDLocation FrameworkJNImnldinforproxyApplicationVirtio-ConninfraBT driverWIFI driverNativeJAVA
Consys CHIP MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM

## PDF物理页 6

UNCLASSIFIED
MediaTek Proprietary and Confidential. © 2021 MediaTek Inc. All rights reserved.
Confidential CTbox – Neteth1Yocto(UOS)Android(UOS)CCMNI1CCMNI0CCMNI2VMNET-CCMNI1VMNET-CCMNI0VMNET-CCMNI2eth2eth3EthernetVMNET0eth0ConnectivityServiceNetDAP0WLAN0VHOST-NETVIRTIO-NETHypervisorMTKNETWORKMANAGERNETD192.168.60.1192.168.60.2•UOS<->UOS直通baseon谦川后续实现NETWORKMANAGER
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.
Confidential C
7
 MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM
MediaTek Confidential Release for
GWM


---
# SRC0068 MTK+Audio+技术培训材料.pdf

来源：培训材料/PVT技术分享文档/MTK+Audio+技术培训材料.pdf

SHA-256：09d7c99d2c2afeb6e790e50f90c599726f6c18073e8aa7af2982ac2e357620e8

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0068.html)

## PDF物理页 1

掌锐电子

## PDF物理页 2

Audio
软件架构

## PDF物理页 3

Audio
数据流
Flow

## PDF物理页 4

Audio Hal 
HAL 的顶层控制接口是 AudioALSAHardware、AudioALSAStreamOut 和 AudioALSAStreamIn。
这些类都使用AudioALSAStreamManager 来控制音频模式、打开/关闭输入/输出流。因此
AudioALSAStreamManager 将拥有所有音频环境信息，如模式、路由、音量和静音信息。

## PDF物理页 5

Audio Hal
加载

## PDF物理页 6

Audio 
播放
AudioALSAStreamOut: 执行写入/待机/路由操作的类
• 不实现细节本身，而是使用 Playback Handler 执行实际打开/关闭/路由/写入操
作
• 不同场景使用不同类型的 Playback Handler
• 第一次写入时，Stream Out 将调用 StreamManager 中的
createPlaybackHandler()来获取 Playback Handler 的指针，在 standby()时，
destroyPlaybackHandler()
• 不要在 playback handler中设置硬件寄存器，而是使用 TinyALSA 库来调用
• pcm_open()/pcm_close()   控制AFE硬件路径和内存设置
• mixer_open()/mixer_close()   获取各种类型的混音器控制以控制编解码器的驱
动程序
• pcm_write()  将PCM数据写入SRAM/DRAM

## PDF物理页 7

Audio 
播放

## PDF物理页 8

Audio 
播放
对于车载平台我们定义了
MTK_AUDIO_AUTO_SUPPORT宏，使能了
AudioALSAPlaybackHandlerBusDsp类，传入了
stream_attribute_source参数对接上层的不同
bus num。
播放开始时，AudioALSAStreamOut->open()函
数后new AudioALSAPlaybackHandlerBusDsp成
功后调用AudioALSAPlaybackHandlerBusDsp-
>open()函数，对音频流进行处理，并开始与
ADSP通信。
播放结束后，framework会调用
AudioALSAStreamOut->close()函数，释放
AudioALSAPlaybackHandlerBusDsp类，以上是
adsp handler的生命周期。

## PDF物理页 9

Audio 
录音

## PDF物理页 10

Audio 
录音
AudioALSAStreamIn： 执行读取/待机/路由操作的类
• 不实现细节本身，而是使用 Capture Handler 绕过打开/关闭/路由/读取操作
• 不同场景使用不同类型的 Capture Handler
• Stream In 将在第一次 read()时调用 StreamManager 中的 createCaptureHandler()来获
取 Capture Handler 的指针
•此外，在 standby()时，destroyCaptureHandler()
•不要在 Capture Handler 中设置硬件寄存器，而是使用 TinyALSA 库来调用
• pcm_open() /pcm_close()
– 用于控制 AFE 硬件路径、内存设置
• mixer_open()/mixer_close()
– 用于获取各种类型的混音器控制，如 Audio_ADC_1_Switch、Audio_ADC_2_Switch、
Audio_Preamp1_Switch、
Audio_Preamp2_Switch，以控制编解码器驱动程序
• pcm_read()
– 用于将 PCM 数据读取到 SRAM/DRAM 中

## PDF物理页 11

Audio HFP 
电话

## PDF物理页 12

Audio AFE

## PDF物理页 13

Audio AFE

## PDF物理页 14

Audio ADSP

## PDF物理页 15

Audio ADSP

## PDF物理页 16

Audio 
虚拟化

## PDF物理页 17

Audio 
虚拟化

## PDF物理页 18

Audio 
调试
1. Audio Log
在开发或者解决Bug的时候，需要打开Audio HAL或者Audio Driver的log，来定位问题点。
adb logcat 或是离线log包过滤AudioALSA和AudioDsp相关的log
2 使用debuglogger UI来录制Log：
MTK自带有debuglogger UI apk，可以用来录制log。测试前先启动log录制，测试完成后关闭log录
制。然后在/data/debuglogger/目录下会看到有很多log生成。通过adb pull将其专区本地进行分析
3. 杂音、无声问题使用dump进行辅助分析
开DUMP
adb shell AudioSetParam SetDumpAudioStreamOut=268433409
adb shell AudioSetParam SetDumpAudioStreamIn=1
关DUMP
adb shell AudioSetParam SetDumpAudioStreamOut=0
adb shell AudioSetParam SetDumpAudioStreamIn=0
测试前，设置后这些属性，然后测试，测试结束会在/data/vendor/audiohal/audiodump/目录下生
成dump文件，将这些文件pull到电脑上用音频分析软件进行分析

## PDF物理页 19

Audio 
方案

## PDF物理页 20

Audio 
方案

## PDF物理页 21

Audio 
播放案例

## PDF物理页 22

Audio 
播放案例

## PDF物理页 23

Audio 
录音案例

## PDF物理页 24

Audio 
录音案例

## PDF物理页 25

Audio 
录音案例

## PDF物理页 26

www.pvetec.com
Thank You


---
# SRC0069 MTK86系列平台安全启动详细设计说明资料.zip

来源：培训材料/PVT技术分享文档/MTK86系列平台安全启动详细设计说明资料.zip

SHA-256：ee34dd854e097e7a464a3ac5c5d85ed298a7be37464c648c5135dae10de9744a

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0069.html)

## 压缩包目录

- MTK86系列平台安全启动详细设计说明资料\MTK86系列平台基于虚拟化op-tee使用手册.pdf（1789002 字节）
- MTK86系列平台安全启动详细设计说明资料\README.txt（1368 字节）
- MTK86系列平台安全启动详细设计说明资料\[MT8676]-[secure boot] 软件详细设计说明书[V0.7].doc（2642432 字节）


---
# SRC0070 README.txt

来源：MTK86系列平台安全启动详细设计说明资料\README.txt

SHA-256：173ef394e8e05ef66dd3519a8feb44fc6f5d9c8d07f5bde0800844d611a88ba7

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0070.html)

## 全文 1

1.安全启动文档详细设计方案请参考 [MT8676]-[secure boot] 软件详细设计说明书[V0.7].doc，8668 的也参考此文档。
  
2. 8676和8668 差别会在文档注明，每一步都需要谨慎，后续如果疏忽导致机器刷完起不来，查起来很麻烦；
   ①注意1：python 版本，76默认用python系统就行，68如果报错使用 prebuilts/build-tools/path/linux-x86/python
   ②注意2：在生成 android和yocto cert1和cert2密钥时使用的型号文档默认是76，68 是mt6881 	
   ③注意3：因为efuse只能写一次，所以开发阶段不建议写efuse栏位，除非你们需要真的测试efuse 的功能，拿一两天设备进行测试，配置可以按照文档efuse部分
   
3.安全启动版本编译完之后是和普通版本一样 默认把android侧的指定IMG 合并到 yocto侧组包然后刷写，因为需要的校验文件DA和authfile 都已经配置了。
  注意：生产线这块的方案可能需要你们或者OEM厂商定方案的，如果没啥特别定制要求，需要注意efuse 的烧录。
  
4.关于secureboot 的版本OTA部分需要找姚工讨论

5.secure boot范畴类的都只能是 2048或者3072 key。 其他security module的key要咨询对应的module，一般是RSA2048;

6. MTK86系列平台基于虚拟化op-tee使用手册 是介绍op-tee和平台相关匹配。




---
# SRC0071 [MT8676]-[secure boot] 软件详细设计说明书[V0.7].doc

来源：MTK86系列平台安全启动详细设计说明资料\[MT8676]-[secure boot] 软件详细设计说明书[V0.7].doc

SHA-256：ee6251133d8c65a286d43bb8c6741f352c22d4d4beeeac92854ce0712edb6eb4

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0071.html)

旧版 Word 二进制格式，提供完整原件；当前未生成可信的在线正文。

此条没有可靠的提取正文，请核对站内来源页及原件。

---
# SRC0072 PCIE DEBUG GUIDE.pdf

来源：培训材料/PVT技术分享文档/PCIE DEBUG GUIDE.pdf

SHA-256：3e6385ac82abc82c1286b53e3f015e732b31f900aae44a4c638b0dfa6dd910b5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0072.html)

## PDF物理页 1

PCIe 最常见的问题就是第一次使用时无法正常工作。
所以在使用 PCIe 之前，请根据本文档检查下面的电路图和软件配置是否符合要求，以确保 PCIe 可以正常工作。
首先我们看电路图部分，一般分为 PCIe RC 插槽标准接口或者直接连接 PCIe EP 设备
EVB 使用 PCIe 标准插槽，可以灵活更换 PCIe EP 设备进行调试。如果您的 EVB 使用 PCIe 标准插槽，请确认以下几
点。
1 ：确认 RC 、 EP 的 PERST/WAKE#/CLKREQ 电压是否匹配，若不一致需要增加 level-shift 电路转换电压。
2 ：确认 WAKE# 、 CLKREQ 、 PERST 是否接 10K 上拉电阻。（ 78 电平转换内部有 10k 上拉）
3 ：确认 TXP 、 TXN 是否接电容， PCIe GEN3 、 GEN4 电容值为 220nf ， PCIe GEN1 、 GEN2 电容值为 100nf 。
4 ：确认 PCIE_CKP/PCIE_CKN 是否接 49.9ohm 下拉电阻。（ 78 内部有 49.9 欧下拉，且不可取消）
5 ：确认 PCIe 设备是否需要插槽 12V 、 3.3V 供电，以及插槽的供电线路是否正确。
6 ：确认插槽信号损耗，部分插槽无法支持 PCIe GEN3/GEN4 。（ 89272 只支持 gen2 ）
                       图  2-1. PCIe 插槽电路图
二、 PCIe 使用前检查
2.1. 电路图
2.1.1 EVB 使用 PCIe 插槽

## PDF物理页 2

图  2-2. 电平转换电路图
直接连接 EVB 上的 PCIe EP 可以减少 EVB 的面积，如果您的 EVB 采用直连方式，请确认以下几点：
1 ：确认 RC 和 EP 的 PERST/WAKE#/CLKREQ 电压是否一致，如果不一致需要增加 level-shift 电路转换电压。
2 ：确认 RC 和 EP WAKE# 、 CLKREQ 、 PERST 连接是否正确。
3 ：确认 WAKE# 、 CLKREQ 、 PERST 是否连接 10K 上拉电阻。
4 ：确认 TXP 和 TXN 是否连接电容， PCIe GEN3 和 GEN4 电容值为 220nf ， PCIe GEN1 和 GEN2 电容值为 100nf 。
5 ：确认  PCIE_CKP/PCIE_CKN 是否接有  49.9ohm 下拉电阻。
6 ：确认  TX/RX 是否有额外接电阻或电容影响信号质量。
7 ：确认  PCIe 设备供电线路，确保对接前设备上电
PCIe 相关软件是否配置正确，下面以 mt6990 为例。
确保项目配置中的  PCIE_MEDIATEK_GEN3=y 和  CONFIG_DEVICE_MODULES_PHY_MTK_PCIE=y
 
2.1.2 直接连接 PCIe EP （使用的这种方式）
2.2 软件配置检查
2.2.1 配置

## PDF物理页 3

chip.dtsi(ex:mt6990.dtsi) 中的 PCIe 和 PHY 节点包含与 PCIe 相关的基本信息。确保它们与默认值一致。
2.2.2 DTS

## PDF物理页 4

project.dts(ex: evb6990_cpe.dts) 包含与项目相关的板级信息。
1 ：确认要使用的  PCIe 和  PHY 节点处于启用状态（ status = “okay” ）。
2 ：确认  PCIe 节点中包含的  GPIO 与  EVB 使用的  GPIO 一致。
3 ：确认  PCIe 节点中包含的  GPIO 状态是否正确切换到  PCIe 模式。

## PDF物理页 5

完成  PCIe 预使用检查后，如果仍然无法正常识别  PCIe EP 设备，一般是驱动探测过程中  Linkup Fail 导致的，需
要根据故障时的  LTSSM （ Link Training and Status State Machine ）状态判断问题原因
 
PCIe 检测状态是通过电路上电平转换的速率来判断对端设备是否存在。 MTK 平台日志 “ltssm reg val:0x1”( 图  3-1)
表示链路状态处于检测阶段，无法识别对端设备。
此问题常见原因有：
1 ： PCIe RC 驱动探测前  PCIe EP 设备未上电。
2 ： PCIe EP 设备复位或  PERST （电平转换）未解除。
3 ： PCIe EP 设备异常或  Linkup 时需要特殊时序。
4 ： TX/RX 差分信号连接错误。
5 ： TX/RX 线上没有电容或电容损坏
三、 PCIe 驱动探测异常
3.1 检测状态下链接失败

## PDF物理页 6

PCIe 轮询状态是 RC 和 EP 通过 TS1/TS2 握手获取信息、 Bit lock 和 symbol lock 。 MTK 平台日志 “ltssm reg 
val:0x30000003”( 图 3-2) 表示链路状态处于轮询阶段， RC 和 EP 无法正常通信。
该问题常见原因有：
1 ： CLK 差分信号没有接 49.9ohm 的地电阻，会导致没有 100M 时钟输出到 EP 设备。
2 ： TX/RX 差分信号上电容异常导致信号质量差，无法处理正常握手。
3 ： PCIe EP 设备异常或者有特殊要求，导致 EP 设备不回复 TS1/TS2 握手包
4 ： PCIe GPIO 接了 level-shift ， level-shift 异常或者没上电，导致时序异常。
Linkup fail 一般出现在 detect 和 polling 状态下，如果在 log 中看到其他状态下 Linkup failed ，请提供对应 log 给 MTK 专
家进行分析。
 
挂起 / 恢复功能是系统进入空闲模式时省电的重要功能。在挂起过程中， PCIe 进入  L2 状态，关闭电源和时钟。在
恢复过程中， PCIe 打开电源和时钟并重新建立链接。当系统处于挂起状态时， PCIe 设备可以通过拉低  wake# 来唤醒
系统。
当  PCIe suspend 失败时，你会看到如下的日志（图  4-1 ）。最常见的原因是由于无法进入  L2 导致  suspend 失
败。无法进入  L2 的常见原因有：
1 ： PCIe sideband 的  wake# 信号被  assert ，导致  PCIe 无法进入  L2 状态。
2 ： PCIe 准备进入  L2 状态时， EP 设备已经断电，导致  PCIe 无法进入  L2 状态。
3 ： level-shift 或其他问题导致  PERST# 信号被  assert ，导致  PCIe 无法进入  L2 状态。
当  PCIe resume 失败时，您将看到以下日志（图  4-2 ）。最常见的原因是由于  linkup fail 导致  resume 失败。有关
如何调试  linkup fail ，请参阅第  3 章。
3.2 polling 状态下 Linkup 失败
3.3 其他状态下 Linkup 失败  
四、 PCIe 暂停 suspend/ 恢复 resume 异常
4.1 PCIe suspend 异常
4.2 PCIe 恢复（ resume ）异常

## PDF物理页 7

当系统处于挂起状态时， PCIe EP 可以通过拉低  wake# 来唤醒系统。 EP 唤醒系统失败的常见原因如下
1 ：确认靠近芯片的  wake# 引脚是否被拉低。可能是电平转换异常或  EP 无法将  wake# 拉低。
2 ：确认  wake# 的  GPIO 引脚复用器是否切换到  PCIe 模式。
3 ：使用  SPM 命令检查  PCIe 唤醒源是否已启用。
PCIe 意外唤醒系统会造成功耗增加，可通过 suspend 唤醒日志确认唤醒源， PCIe 唤醒如图 4-3 所示。
PCIe 异常唤醒常见原因有：
1 ： wake# 需要接上拉电阻，避免电压抖动唤醒系统
2 ：平台支持多个 PCIe RC ，未使用的 PCIe RC 的 wake# 管脚应设置为 nonPCIe 模式。
3 ：若没有 EP 唤醒系统的应用场景，可将平台的 wake# 设置为 GPIO 模式，避免意外唤醒。
1 ：首先在内核配置中开启  PCI Express ASPM 控制。
2 ：然后根据需要开启的  L0S/L1/L1.1/L1.2 状态开启相应的配置。
3 ：最后重新编译使配置生效。
4.3 EP Assert wake# 无法唤醒系统  
4.4 系统被  PCIe 异常唤醒
五、 Q&A
5.1 如何开启  PCIe ASPM ？

## PDF物理页 8



## PDF物理页 9

在内核配置中开启  CONFIG_PCIEAER 并重新编译使配置生效。
在内核配置中设置  CONFIG_PCIE_MEDIATEK_GEN3 = m ，然后重新编译以使配置生效。
在内核和 busybox 配置中启用 CONFIG_DEVMEM ，然后重新编译以使配置生效。
 
5.2 如何开启  AER (Advanced Error Report)?
5.3 如何在  KO 中构建  PCIe 驱动程序？
5.4 如何在用户空间读写寄存器？

## PDF物理页 10

通过修改 DTS 的 PCIe 节点中的 ‘max-link-speed’ ，可以限制 PCIe 的最大速度。例如：
Limit to GEN4 ---> max-link-speed = <4>;
Limit to GEN3 ---> max-link-speed = <3>;
Limit to GEN2 ---> max-link-speed = <2>;
Limit to GEN1 ---> max-link-speed = <1>;
 
联发科默认把 MMIO 空间全部分配为 MEM 空间，如下图 5-9 所示。
1 ： 0x81000000 代表 IO 空间， 0x82000000 代表 MEM 空间。
2 ：第二、三个字段代表 PCI 域的基地址。
3 ：第四、五个字段代表 CPU 域的基地址。
4 ：最后两个字段代表映射区域的大小
 
5.5 如何限制  PCIe 速度？
5.6 IO 空间如何分配？

## PDF物理页 11

因此，如果你想为设备分配  IO 空间，你应该像图  5-10 那样更改范围
当系统处于挂起状态时， PCIe 设备可以通过拉低  WAKE# 来唤醒系统
5.7 如何唤醒有  PCIe 设备的系统？
5.8 如何查看  PCIe 基本信息？

## PDF物理页 12

lspci 工具是一个显示系统中  PCI 总线以及与其连接的设备信息的实用程序。使用  lspci 可以查看  PCIe 总线上所有
设备的基本信息和能力配置信息。如下图  5-12 所示：
关于 lspci 的详细信息，请参考以下网页
 
 
https://man7.org/linux/man-pages/man8/lspci.8.html


---
# SRC0073 PVT经验教训记录表.pdf

来源：培训材料/PVT技术分享文档/PVT经验教训记录表.pdf

SHA-256：9fb78cf7bec9df016456df891e313b2d4444442dd1dff40545ddda65c38437b2

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0073.html)

## PDF物理页 1

经验教训记录表 版本 A0横展项目记录
硬件工程师：按项目计划发出评审前，研读并横展此表中未关闭问题；有新增横展问题需记录此表并通知全部工程师。
经理/总监：维护本表并检查。
关闭：无遗漏平台项目，且通过基础原理图或其他途径完成横展，才能关闭，由记录者填写说明，并判断是否关闭条目。
若对横展项有疑问的请及时咨询对应的工程师和记录者。
序号 记录者 平台机型 分类 关键字 详细描述 涉及问题佐证 涉及平台模块 记录日期 同步录入
DFMEA
同步设计
指南 关闭原因说明 状态 MT8676平台
模组
MT8678平台
模组
CX-1平台
模组
MT8668平台
模组
MT8668 
EVB板
MT8676&MT8678
EVB板
CX-1
EVB板
1 潘英立 ALL 原理图 原理图文档名
原理图最后页变更记录，要体现出此项目第一次制作原理图时，使
用的那份参考机型原理图的准确文档名，便于后面的问题横展断点
。
《PVT-YJ-001 A1硬件原理图设计规范》 ALL 20200330 N N
基础原理图已按设计规范执
行，已在服务器上公共文档上
收集各工程师检查此问题，无
反馈有遗漏。
close Y Y Y N.A Y Y Y
2 潘英立 ALL 原理图 原理图设计 所有原理图设计必须遵守《PVT-YJ-001 A1硬件原理图设计规范》，
统一设计及归一化，美观且便于评审. 《PVT-YJ-001 A1硬件原理图设计规范》 ALL 20200330 N N
基础原理图已按设计规范执
行，已在服务器上公共文档上
收集各工程师检查此问题，无
反馈有遗漏。
close Y Y Y N.A Y Y Y
3 郭永胜 P13_EVB_V2.0 原理图 SDIO信号质量 data信号过冲太大，影响信号质量，需在信号线上串接22R电阻，参
考K39 V3.1原理图设计.
K05/K13/K39/
K41 20210711 N Y
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close N.A N.A N.A Y Y Y Y
4 潘英立 ALL 原理图 禁用料替换
原理图招标/禁用物料替换。原理图导出料号，在封装库/SAP/Agile
中可查出哪些是禁用，同步更新原理图。如：电容、TVS、三极管、
MOS、功率电感、晶体等。
ALL 20210819 N N
各原理图已按要求排查禁用
料，公共文档上收集各工程师
检查此问题，无反馈有遗漏。
close Y Y Y Y Y Y Y
5 刘铁堂 P134 V3.0 原理图 VIO18_PMU/VBAT4V
防护
VIO18_PMU电源网络分布广，电源域多，对内对外的设计均需要增加
TVS/ESD器件保护，必要时串接电阻/磁珠。
VBAT4V是主电源输入口，对内对外的设计要求均需要增加TVS/ESD器
件保护。详细参考P41 V1.2/P39 V3.1原理图。
ALL 20211022 Y Y
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close Y Y Y Y Y Y Y
6 陈小军 P134 原理图 4G PA失效 4G PA失效无网络，vcc管脚损坏，原因是浪涌或ESD注入，无相关的
防护导致PA EOS被击穿损坏。
P05/P13/P39/
P41/P4A 20220521 Y N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close Y Y Y Y N.A N.A N.A
7 潘英立 P39 V3.1 原理图 POWER IO防护
模组内的POWER IO是比较脆弱敏感的电源域，容易收到一些EOS/ESD
的内外部冲击而损坏，相关的POWER IO均需要增加TVS/ESD防护，详
细参考P41 V1.2/P39 V3.1原理图。
P05/P13/P39/
P41/P4A 20220721 Y Y
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close Y Y Y N.A N.A N.A N.A
8 曹晓杰 K41 V3.0 PCB VBAT 4V走线
VBAT 4V电源走线评估不足，线宽及层数不满足MAX电流要求，导致
核心板不开机。原理图及PCB匹配，需把估算的MAX电流备注在原理
图和check list上，参考K41 V3.1 PCB和原理图设计。
ALL 20230205 Y Y
PCB已按参考设计修改且评
审，公共文档上收集各工程师
检查此问题，无反馈有遗漏。
close Y Y Y Y Y Y Y
9 彭佳豪 K39_EVB_V3.0 原理图 以太网通讯失败
BCM89272原理图设计失误导致EP模式设置错误使得PCIE调试卡在
polling阶段，无法识别到设备，D16 PIN的MDC需要下来1K到GND配
置对应模式，参考K39 V3.1原理图设计；
K13/K39/K41 20230330 N N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close N.A N.A N.A Y N.A Y N.A
10 潘英立 ALL 仿真 IBIS仿真
平台SOC的IBIS模型收集，模组的可以通过删除DDR、UFS、GPIO、
PMIC和RF等只保留高速信号线和周边电源的ODB++文件输出，客户提
取S参数仿真，具体参考MT8678的仿真文件。注意不能输出模组的源
文件。
P05/P13/P39/
P41/P4A 20230424 N N
仿真输出文件已按要求排查，
公共文档上收集各工程师检查
此问题，无反馈有遗漏。
close Y Y Y Y N.A N.A N.A
11 潘英立 P39 V3.1 原理图 Boot trapping
启动配置
P39/P41核心板的Boot trapping启动配置引脚在复用时特别注意，
不能影响系统启动，特别是引出到模组PIN的网络要做详细的应用说
明，详细参考P41 V1.2/P39 V3.1原理图及设计指南.
ALL 20230822 Y Y
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close Y Y Y N.A Y Y Y
12 潘英立 ALL 原理图 休眠唤醒管脚固定
每个平台核心板的休眠唤醒管脚均需要定义5~8个PIN建议给客户使
用，如ACC/modem/仪表/ecall/倒车等休眠唤醒，固定下来方便烧录
夹具使用，且不会因为客户不同软件配置脚修改夹具，详细参考P41  
V1.2/P39 V3.1原理图及设计指南。
ALL 20240523 N Y
设计指南文件已按要求排查，
公共文档上收集各工程师检查
此问题，无反馈有遗漏。
close Y Y Y N.A Y Y Y
13 潘英立 K39_EVB_V3.1 原理图 PCIE差分时钟下拉
的匹配电阻
MT8676的PCIE差分时钟需要 50 欧姆下拉的匹配电阻；MT8678则不
需要。详细参考K39_EVB_V3.1原理图及设计指南，特别是兼容设计
。
K39/K41 20240627 N Y
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close N.A N.A N.A N.A N.A Y N.A
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料

## PDF物理页 2

14 潘英立 K39 V3.1 原理图 DP training
4lane DP兼容设计
基于P39/P41 DP training适配TI 983的调试问题，以及客户目前DP
应多用于高清大屏，模组的2lane DP+USB3.0考虑在底板做兼容设
计，支持4lane DP/2lane DP+USB3.0的兼容设计，为支持客户调试
做基础。参考K39_EVB_V3.1原理图。
K39/K41 20240812 N N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close N.A N.A N.A N.A N.A Y N.A
15 潘英立 P39 V3.1 原理图 座子升级
因底板兼容P39和P41模组设计，PCIE M.2座子需从Gen3升级到
Gen4，USB座子升级到USB3.2 gen2，显示屏的farka座子均需升级为
H-MTD支持更高的传输速率。参考K39_EVB_V3.1原理图。
元器件选型评审 K39/K41/K4A 20240911 Y N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close N.A N.A N.A N.A N.A Y Y
16 潘英立 K41 V3.0 原理图 eUSB2.0 redriver
K41因redriver的I2C地址冲突导致USB调试不通，应用redriver电路
时共用I2C注意地址的配置区分；另外USB2.0增加redriver的眼图测
试EOP报fail，因示波器没有更新带eUSB2 repeater test，实际
eUSB允许EOP增加4UI长度。
K41 20241015 Y Y
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close N.A N.A N.A N.A N.A N.A N.A
17 潘英立 P39 V3.1 原理图 SCP_I2C
SCP_I2C仅支持FIFO mode（16 byte），不支持DMA mode，所以一些
IC需要一次性大字节的读写，不能用SCP_I2C去通信，如MFI/仪表/
多指触摸等，除了IMU可以使用SCP_I2C通讯，其他的均建议使用AP
侧的I2C通讯。
K39/K41/K4A 20241110 N Y
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close N.A N.A N.A N.A N.A Y Y
18 潘英立 P39 V3.1 原理图 MX96789 I2C设计
DSI MX96789的I2C使用一组就可以了，且现有的K39 I2C兼容设计有
误，需要把R567/R568的33Ω删除，不然会导致花屏。参考
K39_EVB_V3.1原理图。
K39/K41/K4A 20241206 N N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close N.A N.A N.A Y N.A Y Y
19 潘英立 P41 V1.1 原理图 TDM设计
P39/P41音频接口共用clk及CH数需注意，I2S可以共用CLK，FM I2S
只能用自己的CLK，P39只有1路TDM，最大支持8CH（2 data只能
4+4ch），P41的TDM均可以共用CLK，最大支持16ch（2data只能
8+8ch），若是共用CLK只能支持1路data in，详细指南参考
MT8678_Audio_HW_Interface_User_Guide_V1.0。
K39/K41/K4A 20241206 N Y
设计指南及对外参考设计已按
要求排查，公共文档上收集各
工程师检查此问题，无反馈有
遗漏。
close N.A N.A N.A Y N.A Y Y
20 曹晓杰 ALL PCB underfill安全间距
目前underfill的导入明确了点胶位及安全间距，每次平台设计需要
underfill的芯片列出明细，器件布局芯片至少预留L型入胶≥
1.0mm，出胶≥0.5mm的安全间距。
P39/P41/P4A 20241206 Y Y
PCB已按要求设计修改且评
审，公共文档上收集各工程师
检查此问题，无反馈有遗漏。
close Y Y Y Y N.A N.A N.A
21 潘英立 P39 V3.1 原理图 UFS4.0 UFS4.0的应用目前是兼容预留设计，原理图需要把相关的电路NC，
避免设计冗余及BOM出错。 P39/P41/P4A 20241209 N N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close Y Y Y Y N.A N.A N.A
22 潘英立 P39 V3.1 原理图 SMI230同步模式
BMI323兼容SMI230设计时，注意需增加ACC的中断给SOC以及兼容同
步模式（常规的地图导航，精度更高），之前只有数据中断及哨兵
模式（精度稍差），SMI230两者模式不能同时使用，只能二选一。
详细参考P39 V3.1原理图。
P39 20241220 N N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close Y N.A N.A N.A N.A N.A N.A
23 潘英立 ALL 对外资料 thermal&对外资料
thermal参数以及对外资料包必须经过审核才能邮件输出给项目及客
户，同时附带对外资料包履历表，变更的内容需填写到履历表且合
入到对外资料包，避免不一致导致扯皮，客户识别不了变更内容以
及产生误会。
ALL 20250112 N N
thermal参数以及对外资料包
已按要求排查及走流程审核，
公共文档上收集各工程师检查
此问题，无反馈有遗漏。
close Y Y Y Y Y N.A Y
24 潘英立 K41 V3.0 原理图 SGMII&以太网
K41调试broadcomm bcm89891 2.5G PHY芯片时发现phy芯片与soc支
持的serder模式不匹配、phy与soc无法link up成功并输出有效时
钟，无法使用bcm89891芯片，需要更换2.5G PHY芯片选型；
bcm89891 支持的serder模式：USXGMII、2500BASE-X、2500BASE-
R；
MT8678 mac支持的serder模式：MII/RMII/RGMII/SGMII/HSGMII；
PHY芯片需修改为bcm89892。
K39/K41/K4A 20250324 Y Y
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close N.A N.A N.A N.A N.A Y Y
25 潘英立 ALL 环境实验 串口板电平设置1.8V DV实验开关机异常/串口无输出，注意串口板的电平设置要为1.8V，
避免电平不匹配导致SOC异常或被击穿。 / ALL 20250328 Y N
串口板已按要求配置1.8V电
平，公共文档上收集各工程师
检查此问题，无反馈有遗漏。
close Y Y Y Y Y Y Y
26 潘英立 P41 V1.1 原理图 USB2.0/SIM/SDIO需
要增加电平转换
P41因3nm工艺部分接口不能高压，其USB2.0/SIM/SDIO需要增加电平
转换才能适配对外接口，在设计时主要增加或审核客户资料时注意
检查，详细参考设计指南。
K41 20250328 Y Y
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close N.A N.A N.A Y N.A Y N.A
27 潘英立 CX1 V1.1 原理图 测试点&0R电阻 因模组PCB布局紧凑，原理图设计，不相关的测试点以及0R电阻尽量
删除，以优化layout设计。详细参考CX1原理图。 / ALL 20250401 N N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close Y Y Y Y Y Y Y
28 潘英立 P39 V3.1 原理图 External charge 
pump capacitors
UFS3.1/4.0的A10/B10,A11/A12连接的External charge pump 
capacitors（optional）可以NC掉,UFS内部使用的是VCC 2.5V, 没
有VCC 1.8V，内部没有charge pump电路，所以可定义为NC。详细参
考P39 V3.1原理图。
P39/P41/P4A 20250429 N N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close Y Y Y Y N.A N.A N.A
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料

## PDF物理页 3

29 潘英立 P39 V3.1 原理图 三星22uF 0603电容
P39/P41模组上若选用三星电容实物会比常用的要大，同样的PCB封
装，三星电容会导致电容之间互相干涉，贴片时并排的焊盘pin脚会
连锡，不能选用004.003.0055388 片式陶瓷电容
MC,16V,22uF,±20%,X5R,1.5mm,0603,SMD,TP,CL10A226MO7JZNC,Sam
sung。核查原理图及BOM。
/ ALL 20250520 Y N
基础原理及BOM已按要求排
查，公共文档上收集各工程师
检查此问题，无反馈有遗漏。
close Y Y Y Y Y Y Y
30 潘英立 P41 V1.1 原理图 休眠暗电流过大
STR休眠时发现LMHB DRX FEM(1)两个PA的供电一直存在，关闭不掉
导致暗电流过大，检查发现原理图网络连接错误，LMHB DRX的两个
FEM芯片的1.8V供电需由VIO18_PMU更改为VRF18_FE，参考P41 V1.2
原理图。
P39/P41 20250612 Y N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close Y Y N.A Y N.A N.A N.A
31 陈小军 ALL 原理图 WIFI频偏 P41 WIFI频偏ppm过大，52MHz晶体电路需要增加负载电容调整频
偏，同时预留位置，详细参考P41 V1.1原理图。 P39/P41 20250722 Y N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
漏。
close Y Y N.A Y N.A N.A N.A
32 刘铁堂 ALL 原理图 物料选型 元器件选型均要按照《元器件选型优选表》核逐一核对原理图物料
及BOM，优选已量产验证且性价比高的物料。 《元器件选型优选表》 ALL 20250731 Y N
基础原理中已按参考设计修改
且评审，公共文档上收集各工
程师检查此问题，无反馈有遗
close Y Y Y Y Y Y
33 潘英立 P41 PCB PA连锡短路
P41 5G的PA SKY58100 #39/#40/#41 pin脚连锡，导致RF没网络
(N28)/驻不上网/休眠异常唤醒VCN15_OC过流。
1）修改PA钢网改善前0.22*0.34mm方孔，厚度=0.08mm， PA钢网改
善后0.20*0.33mm方孔，厚度=0.08mm，锡量减少11%；
2）优化PA位置PCB焊盘开窗方式，将#39/#40/#41 PIN脚位置优化表
面阻焊窗，同步横展所有PIN的阻焊窗修改符合规格书要求；
3）所有LGA的PA封装固定阻焊窗及禁布区，更新PCB LAYOUT库文件
。
ALL 20251122 Y N
基础PCB已按参考设计修改且
评审，公共文档上收集各工程
师检查此问题，无反馈有遗漏
。
close Y Y Y Y Y Y
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料
PVT内部资料


---
# SRC0074 SF_debug方法.pdf

来源：培训材料/PVT技术分享文档/SF_debug方法.pdf

SHA-256：843085143d8a62a45daf1bbfbb26fb322561216b5a86674c29e3d87b706afaa8

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0074.html)

## PDF物理页 1

掌锐电子

## PDF物理页 2

SF DEBUG
方式
1、Disable HW overlays or service call SurfaceFlinger 1008 i32 1 可以全推GPU 合成以判断问题是否与合成
方式有关。（投屏录屏截屏也可用于辅助验证）
2、sfdump是一个执行简单，且内容很丰富的常规debug信息dump手段，包含了当前合成的layer信息，BufferQueue
的信息，合成的信息等等
adb shell dumpsys SurfaceFlinger > dumpsf.log
3、抓取winscope和perfetto分析，主要于分析卡顿卡死或者闪屏问题。
4、打开BQ_LOG日志

## PDF物理页 3

SF DEBUG
方式
5、BQDump
Dump图层画面
先执行命令
adb root
adb remount
adb push libgralloc_extra_sys.so /system_ext/lib64/
adb shell sync
adb shell setprop debug.mediatek.disp_decompress 0
adb shell stop
adb shell start
复现到问题后抓取bq数据
dump1.bat 是抓一帧的数据
dump10.bat 能够抓10帧的数据

## PDF物理页 4

SF DEBUG
方式
6、SF内存占用异常
adb shell " mv vendor/lib64/hw/mapper.minigbm_mtk.so vendor/lib64/hw/mapper.minigbm_mtk.so.bak"
adb shell sync
adb reboot
复现问题
adb shell dumpsys SurfaceFlinger > dumpsf.log
adb shell dumpsys meminfo surfaceflinger > memsf.txt

## PDF物理页 5

SF DEBUG
方式

## PDF物理页 6

SF DEBUG
案例
问题：爱奇艺长按2倍速播放数分后，视频卡顿，画面冻结，时间进度正常增加
设置了desiredPresentTime且大于expectedPresentTime

## PDF物理页 7

SF DEBUG
案例
问题：DVR画面语音切换系统语言，DVR预览画面卡顿
横竖屏切换、系统语言切换、日夜模式切换。system_server会截个屏，然后创建一个层级很高的图层显示这个截
图，这样一来切换操作时，用户看到的就是截图的内容，目的是为了防止UI 混乱。，切换完成后，移除截图图层，
可以看到正常画面。

## PDF物理页 8

SF DEBUG
案例
问题：进入STR后唤醒，中控比仪表屏延迟23s左右点亮
Layer创建超过4096， 从日志中看到大量Activity 启动时创建的Task都未销毁
左边为创建数量，右边为销毁数量，该问题是打开persist.wm.debug.shell_transit导致，最终是应用端修改

## PDF物理页 9

SF DEBUG
案例
问题：硬按键重启过程中system_server发生crash
app执行nativeGetLatestVsyncEventData时因surfaceflinger退出返回NULL报的空指针。
[ 254.681805][T500001] init: init 6: [254524][12]Sending signal 15 to service 'surfaceflinger' 
(pid 915) process group...
因此无法获取vsync相关信息
10-01 07:42:31.038 3190 5140 W SurfaceComposerClient: ComposerService aidl remote 
(surfaceflinger) died [0xb400007350ca20e0]
10-01 07:42:31.040 1604 1668 E DisplayEventReceiver: Failed to get latest vsync event data:
10-01 07:42:31.040 1604 1668 W DisplayEventReceiver: Failed to get latest vsync event data 
from surface flinger
这里直接返回null，因此报错

## PDF物理页 10

SF DEBUG
案例
问题：执行长时间压力测试后，surfaceflinger存在疑似内存泄漏
按照SF内存占用异常 dump信息发现是图层和图层buffer未释放，该问题是多屏移屏动画导致

## PDF物理页 11

www.pvetec.com
Thank You


---
# SRC0075 vosck使用案例.rar

来源：培训材料/PVT技术分享文档/vosck使用案例.rar

SHA-256：ebfa2518d1122b55709ba61ea93589d126756f1e8bb74ce1b79ba4e0664a149a

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0075.html)

## 压缩包目录

- vosck使用案例\uospropget_new.c.zip（1089 字节）
- vosck使用案例\vsockprop_new.cpp.zip（1858 字节）
- vosck使用案例\vsock使用案例.pdf（1124680 字节）


---
# SRC0076 刷机后无网络.pdf

来源：培训材料/PVT技术分享文档/刷机后无网络.pdf

SHA-256：9eae122081b6b7a9fe905370c74db60d2b566f058f1d0f249771b1966136f670

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0076.html)

## PDF物理页 1

掌锐电子
刷机后无网络问题分析

## PDF物理页 2

问题概述
问题分析
问题原因
解决方案

## PDF物理页 3

问题概述
• 问题背景 ：
– 线刷升级后，状态栏tbox一直无网络状态
• 问题现象：
– 线刷升级后（C5L0CN330SU1F082903DEV升级到C5L0CN330SD1F083001DEV），观察状态栏tbox
– 状态栏tbox一直为无网络状态

## PDF物理页 4

问题分析
 分析日志：TBOX\log\mtklog\mobilelog\APLog_2020_0101_000003__1
从Tbox端日志看，CUXV5-33265中第一次开机log：APLog_2020_0101_000006__1，有发现两个boot__normal目录，可以推断出
tbox在启动过程中，又发生了一次重启。
上一次开机的过程中，开机log还没有copy到SD卡or EMMC中，又发生了重启，上一次开机log就保存在这个文件夹，Last_1_boot__normal是上一次开
机log。

## PDF物理页 5

问题分析
 分析日志：TBOX\log\mtklog\mobilelog\APLog_2020_0101_000006__1\Last_1_boot__normal
从Last_1_boot__normal第一次开机log看，apn db数据库初始化过程还没完成就发生重启，apn adb数据库生成过程重启。
从boot__normal第二次开机log看，加载到apn db数据库后，读取adb db的数据发现文件已损坏，数据异常，
mtktelephonyservice读取apn list时发现读取不到数据为空时，然后crash了。

## PDF物理页 6

 问题分析
 分析日志：SOS\mtklog\mobilelog\APLog_2020_0101_000733__1
从soslog看，第一次开机启动 sos os内核只启动到39秒就重启了。
从SOS\mtklog\mobilelog\APLog_2020_0101_000812__2\pl_lk分析第一次重启的原因，发现pmic掉电原因PORSTB，是整机掉电： 外部掉电或者正常
power off
从soslog看，sos内核启动到20秒创建tbox vm1.

## PDF物理页 7

问题分析：
时间轴SOS Tbox UOS
第一次启动
第一次启动
0秒
0秒
初始化Apn DB
17秒
20秒
创建tbox VM
39秒
掉电重启 Apn DB数据损坏
19秒
第二次启动
第二次启动
load数据库
mtktelephonyser
vice读取db 
crash
mtktelephonyser
vice重启读取异
常crash

## PDF物理页 8

mtktelephonyservice crash异常原因
mtktelephonyservice读取异常的apn db时，取不到apn list，获取指针为空，异常报错
获取apnlist时，未判断文件损坏获取不到apn list的情况。新增空指针判断，同时删除掉损坏的旧文件，可以确保下次重启能够正常读取。

## PDF物理页 9

问题场景模拟：模拟apn db文件损坏场景
1.删除tbox os内正常的apn db
2.本地创建一个乱码的apn db文件push进去
3.重启机器
4.机器起来查看tbox aee db，模拟发现mtktelephonyservice一直在反复crash
5.查看mtktelephonyservice报错位置，和CUXV5-33265问题报错位置一样。

## PDF物理页 10

问题场景模拟修复patch验证
1.增加空指针判断，以及删除损坏apn db文件。
2.升级包重启查看mtktelephonyservice是否会一直crash。查看进程pid一直不变，同时看损坏的apn db
是否删除。
3.重启机器查看网络，网卡正常，ping百度等正常

## PDF物理页 11

实际场景中，是否会存在这种开机到一半直接下电重启的场景？
结论：实际场景是没有开机到一半掉电的场景。
拉通VIP和Lifecyc的log 证实： 从MCU日志来看，是有进备电模式的。进备电一分钟后，满足重启退
出备点条件，因此整机重启退出备电模式。同测试确认是升级完成后，手动掉电重启进入备电模式。

## PDF物理页 12

附件一 附加条款
您(或您所代表的公司或其他法律主体，以下合称「您」)是否得取得、下载与使用本文件及其相关信息皆应以您接受本附
加条款为先决要件。您对于本文件之使用、取得或下载即表示您已接受本附加条款并同意受本附加条款之拘束。若您不同
意受本附加条款之拘束，您将不得使用、取得或下载本文件并应立即删除或毁弃所有本文件之副本。
本文件含深圳市掌锐电子有限公司及其关联公司（以下合称「掌锐电子」）或其授权人之机密信息及专有信息，仅供您为
本文件所描述之掌锐电子模组内部使用而不得用于其他任何目的（包括但不限于确认或提供支持任何对掌锐电子、其供货
商及/或其直接或间接客户所提潜在专利侵权主张的证据）。禁止未经授权使用或揭露本文件及其中所含信息。您同意赔偿
掌锐电子因您未经授权使用或揭露本文件及其中所含信息之一部或全部导致掌锐电子所受之任何损失或损害。
掌锐电子及其授权人保有本文件的所有权及组成所有权之各项权利且未针对任何知识产权授权（无论明示或默示、透过禁
反言原则或其他方式）。掌锐电子得随时变更本文件内容而无须另行通知。掌锐电子无须承担与使用或信赖本文件相关或
因使用或信赖本文件致生之任何责任，包括但不限于间接损害或附带损害赔偿责任。
本文件及掌锐电子所提供关于本文件之任何其他材料、信息或技术支持，均以现况交付为准，掌锐电子不负任何明示、默
示、法定或其他形式之担保责任，特别是适销性、不侵权、针对特定用途之适用性、完整性或正确性之担保责任或任何由
贸易惯例或交易、履行过程所生之担保责任。对于掌锐电子为符合您所提规格或遵循特定标准或标准组织的要求所作之交
付物，掌锐电子亦不应承担任何责任。
于未对前述条款造成限制之情形下，掌锐电子不对其产品任何特定用途之适用性承担任何保证或担保责任，亦不承担任何
因产品、电路或软件之应用或使用致生之赔偿责任。您同意您应单独承担关于整合您的产品与掌锐电子产品所涉及之设计、
验证与测试之所有责任，并应确保前述整合产品符合相关标准及任何安全性要求或其他要件。
本附加条款及所有与本附加条款或本文件相关之行为应以大陆法律管辖、解释与阐明，不适用冲突法原则。


---
# SRC0077 常用日志说明.url

来源：培训材料/PVT技术分享文档/常用日志说明.url

SHA-256：3ffcd662cc344638878828546d7fa476498e1c6fa823c90bc49d2e7c32dc0fa2

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0077.html)

## 全文 1

[InternetShortcut]
URL=https://www.feishu.cn/slides/R5N7stU0KlIo3Zd2cEUclHJOnnd
Object=R5N7stU0KlIo3Zd2cEUclHJOnnd



---
# SRC0078 汇报材料--软件开发培训-音视频解码常见问题及分析.pdf

来源：培训材料/PVT技术分享文档/汇报材料--软件开发培训-音视频解码常见问题及分析.pdf

SHA-256：0f87b2ff1abcc12b6de413722a24d38e5385908cab007e619745e368b6cbf6c7

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0078.html)

## PDF物理页 1

掌锐电子

## PDF物理页 2

一，音视频播放方式
关于视频或音频播放，一般有两种方式
1、使用MediaPlayer （比如本地音频视频播放器）
当使用Android原生的MediaPlayer，会使用NuPlayer 去进行文件的提
取，音频和视频的时间对齐，音频和视频解码后输入的向下传递等操作
2、直接调用mediacodec处理音频和视频 （比如爱奇艺，carplay等）
当使用mediacodec时，音频和视频都有app去处理。mediacodec只负责
传入接收音视频原始数据，获取解码后的数据。其他操作由app进行。

## PDF物理页 3

二、
8676 
硬编解码性能
表格标注最大支持能力，多路情况
通过表格大体计算获得，计算时，若3个
OS都在工作，场景都要考虑到。合并计算
超过性能最大值，可能播放失败或卡顿等

## PDF物理页 4

三、
3OS
软件架构

## PDF物理页 5

四、常见解码情况分析
使用MediaPlayer或Mediacodec判断开始和结束时间点
在遇到问题时，需要对Android的mainlog进行分析
若使用Mediaplayer时 会有NuPlayer和GenericSource的log信息
开始播放会看到这些信息，用于确定视频或音频开始
D NuPlayerDriver: NuPlayerDriver(0xb400007247873780) created, clientPid(7167)
D NuPlayer: onSetVideoSurface(0xb40000724919f800, no video decoder)
D GenericSource: FileSource remote
I GenericSource: start
NuPlayer结束播放时
1266 15877 D NuPlayerDriver: notifySeekComplete(0xb400007247873780)
1266 1911 D NuPlayerDriver: reset(0xb400007247873780) at state 5
1266 15877 D NuPlayerDriver: notifyResetComplete(0xb400007247873780
1266 1911 D NuPlayerDriver: reset(0xb400007247873780) at state 0
对于mediacodec log
开始播放会有下面信息，用于确认开始播放时间
D MediaCodec: CreateByType: mime video/avc, encoder 0 pid 7167
D MediaCodec: [0xb40000723ba74000] init: CCodec 0xb4000072490250c0, CCodecBufferChannel 0xb40000723b9b6800
D MediaCodec: [0xb40000723ba74000] setState: 1
D MediaCodec: CreateByType: mime audio/mp4a-latm, encoder 0 pid 7167
D MediaCodec: [0xb400007247910000] init: CCodec 0xb40000724780d000, CCodecBufferChannel 0xb4000072478eac00
可以看到mediacodec音频一个线程，视频一个线程
通过查看MediaCodec 的setState状态来判断进度，状态6是正常播放中

## PDF物理页 6

五、使用硬编解码分析
对于8676或78，若是使用的视频硬解码，可能使用硬编解码场景和出现异常时更多。
硬编码用于录制视频文件，录制为H264或H265
硬解码用于使用AVC/HEVC等常见视频流的场景，比如本地播放时大多mp4文件，carplay等投屏工具，
爱奇艺等播放软件
比如可以用这个确定播放和停止，也可以看到解码编码当时的数量
D C2MtkComponentStore: onNumberOfVideoInstancesChanged: Decoder 1, Encoder 1
D C2MtkComponentStore: onNumberOfVideoInstancesChanged: Decoder 0, Encoder 1
可以搜索 onNumberOfVideoInstancesChanged
若是视频解码看到 c2.mtk.XXX表示走的mtk的硬解码，若是音频或c2.android则是走的软解码
遇到问题，首先看mediaserver的进程，搜mediacodec，或nuplayer等
看到是硬解的话，搜索硬解码进程，可以搜c2mtk，进程号是硬解码的进程，全搜，对应开始或结束
或问题时间点去查看异常定位问题。
D PipelineWatcher: [0xb4000072478eb0a8] pipelineFull: too many frames in pipeline (6)
这个一般不是异常，正常播放视频几乎都有这些信息，这个只能说明mediacodec处理
dequeueOutputbuffer
在等待处理数据

## PDF物理页 7

六、硬编解码分析中打开
log
和
dump
操作
当硬解播放视频或怀疑硬解码导致时，可以打开硬解码更多log
adb root
adb shell "setprop vendor.mtk.c2.enable.comp.log 1"
adb shell "setprop vendor.mtk.c2.enable.vdec.log 3"
adb shell "setprop vendor.mtk.c2.enable.vcodec.log 4"
adb后不能重启，重启上述命令会失效。adb 输入后，不断电继续抓取测试即可
adb shell "setprop vendor.mtk.c2.vdec.dump.input 1"
上面这条设1是c2mtk会dump硬解码的数据流，avc或hevc，保存到/data/vendor/vcodec下 input命名的bs文件中
可以pull出来，使用较新版的potplayer播放查看，设0关闭dump或重启机器不再dump
还可以dump 硬解码后的数据
adb shell "setprop vendor.mtk.c2.vdec.dump.output 1" ，
保存到/data/vendor/vcodec下 output命名的文件中，此文件非mtk无权打开访问，需要给mtk查看，mtk说是mtk私有的加密数据，设0关闭解码后dump
硬编码命令
encoder
adb root
adb shell setprop vendor.mtk.c2.enable.venc.log 3
adb shell setprop vendor.mtk.c2.enable.comp.log 3
开启后，可以看周期input和output ，搜索这个
NotifyOutputBufferReady //视频帧解码后output解码完成时间戳信息
process: input    //  视频帧每一帧input时间戳信息

## PDF物理页 8

七、常见
log
及分析
遇到问题，首先看mediaserver的进程，搜mediacodec，或nuplayer等
看到是硬解的话，搜索硬解码进程，可以搜c2mtk，进程号是硬解码的进程，全搜，对应开始或结束或问题时间点去
查看异常定位问题。
D PipelineWatcher: [0xb4000072478eb0a8] pipelineFull: too many frames in pipeline (6)
这个一般不是异常，正常播放视频几乎都有这些信息，这个只能说明mediacodec处理 dequeueOutputbuffer
在等待处理数据
视频出现卡顿，一般有两种可能，一种是分辨率过高，解码吃力。在8676和8678上比较少。
硬解码的能力能到4K 60fps，软解可能只有1080P 30或60fps
还有更常见的可能，是解码后数据不能及时送出去，音频和视频下行通道堵塞，都会引起卡顿。
常见的log能看到wait fence
“ wait fence ” 是vdec hal在等待 framebuffer上的 fence信息（vdec和 display之间的sync机制），
所以这种time out通常是 display或者 PQ 处理不及时，导致framebuffer 循环卡主的 播放卡顿，
音频下行链路卡住可能也会打印。Mtk说少量打印一般问题不大，频繁打印就需要考虑显示有卡顿
若怀疑送显有卡顿，尝试输入下面的cmd再验证下是否能复制到问题：
adb shell service call SurfaceFlinger 1008 i32 1  //关闭PQ
复现问题时的 log 和时间点
记录正常界面与异常界面的时间点。
导出MTKLOG, 与前面dump出的数据一并提供用于分析。
an error ged handle 这个不是异常，几乎每次播放都有
如果使用了硬解码，可能mainlog里看不到异常。可以简单的确定kernel log里有没有异常，搜索 vdec|utc，在sos中搜kernel和vcp
log
utc时间可能没有和mainlog一致，那就kernel utc+8 = mainlog时间
看看vdec相关有没有在对应时间点有没有fail或error提示，来确定是底层故障。
还有一个vcplog也可以搜索，也是搜vdec ，vcplog里没有utc打印，时间需要跟kernel去对齐

## PDF物理页 9

八、常见
log
及分析
遇到常见问题log：
NuPlayerRenderer: onNewAudioMediaTime updateAnchor: mediaTimeUs 30304000 delta[262212]us, 
pendingDuration 1280000 us
这段日志信息反映了NuPlayerRenderer在音频同步过程中更新锚点时间(updateAnchor)的关键参数，具体分析如下：
参数含义解析：
mediaTimeUs 30304000：表示当前音频媒体时间戳（单位微秒），即音频流播放到的位置。
delta[262212]us：指当前媒体时间与前一锚点时间的差值，用于计算时间偏差。
pendingDuration 1280000us：待处理的音频数据缓存时长（1.28秒），反映缓冲区数据积压情况。
我理解是，当解码后音频向下通路出现堵塞，会出现pendingDuration 积累增加的情况
当视频解码出来不及时时，也会出现这个，相当于音频在等待视频做时间同步
遇到常见问题log：
NuPlayerRenderer: we're late dropping one timeUs 31583 ms after 13 frames
该日志表明NuPlayerRenderer在视频渲染过程中出现严重延迟，导致连续丢弃13帧后仍存在31.583秒的同步滞后，属
于严重性能异常。以下是关键分析与解决方案：
同步机制崩溃
视频帧时间戳（timeUs 31583ms）与系统时钟偏差超过阈值，触发强制丢帧策略1。
连续13帧未能及时渲染，说明同步补偿机制已失效，可能因音频主时钟异常或解码阻塞引发2。
硬件/驱动瓶颈
高延迟常见于GPU渲染管线阻塞（如SurfaceFlinger的dequeueBuffer超时100ms以上）

## PDF物理页 10

九、常见
log
及分析
76/78
CCodecBuffers: [c2.mtk.avc.encoder#507:Output[N]] pushToStash: pushToStash -- pending size = 83
BufferPoolAccessor2.0: bufferpool2 0xb40000743840d828 : 170(84999660 size) total buffers -
170(84999660 size) used buffers - 26257/26427 (recycle/alloc) - 383/26413 (fetch/transfer)
若遇到c2hal media 内容占用高的情况，比如上面信息log
重点看 total buffers和used buffers是不是比较大，或一直在增长
多个客户都遇到过，最后查到原因是PC投屏软件导致，投屏会使用soc的编码功能，投屏有时候不能正常退出，退出时没有关闭编码，导致编码一直在生
成，而没有消费者取走导致。
投屏不是正常使用场景，投屏软件都是第三方的，只能规避，要注意这一点
在使用mediaplayer进行播放时，客户经常会遇到在app里收到 -19 -38等 mediaplayerNative的消息
很多时候在初始化配置surface或后台恢复时，surface配置或一些时序逻辑不对导致。
最好的办法是，看看mtk原生的gallery的实现逻辑

## PDF物理页 11

十、卡顿或黑屏等显示问题
dump
遇到播放黑屏或卡顿显示问题的话，很多时候跟surface或hwc或PQ相关
需要看下面的信息定位，很多时候显示问题log很难看到异常，需要保存现场dump实验测试验证。
下次再复现需要保持现场输入下面命令测试或dump数据
1, PQ bypass看看问题能不能复现。 指令如下：
adb root
adb shell dumpsys vendor.mediatek.hardware.pq_aidl.IPictureQuality_AIDL/default --set_pq_persist_property "persist.vendor.sys.pq.disp.color.bypass" 1
adb shell dumpsys vendor.mediatek.hardware.pq_aidl.IPictureQuality_AIDL/default --set_pq_persist_property "persist.vendor.sys.pq.disp.ccorr.bypass" 1
adb shell dumpsys vendor.mediatek.hardware.pq_aidl.IPictureQuality_AIDL/default --set_pq_persist_property "persist.vendor.sys.pq.disp.gamma.bypass" 1
adb shell dumpsys vendor.mediatek.hardware.pq_aidl.IPictureQuality_AIDL/default --set_pq_persist_property "persist.vendor.sys.pq.disp.dither.bypass" 1
adb shell dumpsys vendor.mediatek.hardware.pq_aidl.IPictureQuality_AIDL/default --set_pq_persist_property "persist.vendor.sys.pq.disp.aal.bypass" 1
adb shell dumpsys vendor.mediatek.hardware.pq_aidl.IPictureQuality_AIDL/default --set_pq_persist_property "persist.vendor.sys.pq.disp.c3d.bypass" 1
adb shell dumpsys vendor.mediatek.hardware.pq_aidl.IPictureQuality_AIDL/default --set_pq_persist_property "persist.vendor.sys.pq.disp.tdshp.bypass" 1
如果问题依就存在的话， 帮着使用附件中的脚本抓取些数据， 操作如下：
a, 执行下面的脚本。
adb root
adb shell "echo mobile:on > /proc/mtkfb"
adb sehll "echo detail:on > /proc/mtkfb"
adb shell setenforce 0 &&adb shell setprop persist.vendor.debug.hwc.log V&& adb shell setprop vendor.debug.hwc.skip_log 0
b, 分别在复现后问题的界面中在PC机中执行脚本。 hwc_dump.zip()
暂时无法在飞书文档外展示此内容
先运行： 0_setup.bat 再运行： 1_dump.bat 然后， 再将DUMP出来的数据目录SF_dump打包给我们用于分析。 同时在对应界面中dumpsys SurfaceFlinger用于分析。 操作
如下： adb shell dumpsys SurfaceFlinger > sf_ok.txt或sf_ng.txt

## PDF物理页 12

十一、
 gst
-
launch
-
1.0
播放测试
常见使用
yocto gst 播放视频 gst-play.c
（1）adb push xxx /data/ push一个video文件到平台，比如xxx.mp4 push到data 目录
(2) source /data/wayland_env_file
(3) gst-launch-1.0 playbin flags=0x42 video-sink="v4l2convert output-io-mode=dmabuf-import capture-io-mode=dmabuf disable-passthrough=true propose-
allocation=3 name=mtkmdp ! video/x-raw,format=BGRA,width=640,height=360,pixel-aspect-ratio=1/1 ! waylandsink" audio-sink="audioconvert ! 
audioresample ! audio/x-raw,rate=48000,format=S16LE ! alsasink device=hw:0,6" uri=file:///data/xxx
amixer cset name='ADDA_DL_CH1 DL6_CH1' 1
amixer cset name='ADDA_DL_CH2 DL6_CH2' 1
amixer cset name='ADDA_DL_CH3 DL6_CH1' 1
amixer cset name='ADDA_DL_CH4 DL6_CH2' 1
amixer cset name='HPL Mux' 'Audio Playback'
amixer cset name='HPR Mux' 'Audio Playback'
amixer cset name='Ext_Speaker_Amp Switch' 1
/data/gst-play-1.0 --flags=0x42 --videosink="v4l2convert output-io-mode=dmabuf-import capture-io-mode=dmabuf disable-passthrough=true propose-
allocation=3 name=mtkmdp ! video/x-raw,format=BGRA,width=640,height=360,pixel-aspect-ratio=1/1 ! waylandsink" --audiosink="audioconvert ! 
audioresample ! audio/x-raw,rate=48000,format=S16LE ! alsasink device=hw:0,6" /data/xxx.mp4 试下
还是不行的话，拿掉 --audiosink="audioconvert ! audioresample ! audio/x-raw,rate=48000,format=S16LE ! alsasink device=hw:0,6"看下
source /data/wayland_env_file
layer-add-surfaces -l 1 -s 1000 -d DP-2 &
export GST_DEBUG=6 GST_DEBUG_COLOR_MODE=off GST_DEBUG_FILE=/tmp/gst.log 
gst-launch-1.0 playbin flags=0x42 video-sink="v4l2convert output-io-mode=dmabuf-import capture-io-mode=dmabuf disable-passthrough=true propose-
allocation=3 name=mtkmdp ! video/x-raw,format=BGRA,width=1920,height=720,pixel-aspect-ratio=1/1 ! waylandsink" uri=file:///data/input.mp4

## PDF物理页 13

www.pvetec.com
Thank You


---
# SRC0079 汇报材料--软件开发培训.pptx

来源：培训材料/PVT技术分享文档/汇报材料--软件开发培训.pptx

SHA-256：ff3311f490ffb66b751d65fea09dfab209f06b6a83d0fb3ccfe12cb1a698f075

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0079.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1



掌锐电子

## 幻灯片 2

一，软件开发培训 计划
1. 基础开发培训
2. 平台方案培训
3. 经典案例分享

## 幻灯片 3

一，软件开发培训 计划
基础开发 培训
培训模块
一级目录
二级 目录
培训周期
备注
一、  Bootloader

1.1 code path
NA
0.1 h

1.2 lk2 log 开关
NA
0.2 h

1.3 lk to kernel 简单时序图
NA
0.5h

二、  Yocto Kernel

2.1 config & dts
NA
0.5h

2.2  增加 ko driver 流程
NA
0.5h

三、  Android Kernel

3.1 config&dts
NA
0.5h

3.2  增加 ko driver 流程
NA
0.5h

四、 Yocto
4.1  增加一个应用流程 ( 包括自启动以及相关属性配置 )
NA
0.5h

4.2 YOCTO SDK  应用
NA
0.5h

4.3 ivi-shell  配置
NA
0.5h

五、 Android
5.1 原生代码
NA
0.5 h

六、 谦川 SDK
6.1  物理中断统计 (irq_count)
NA
0.1h

6.2  各个 pCPU 上瞬时正在运行的 vCPU 的信息  (pcpu_attr)
NA
0.2h

6.3  各个 vCPU 在一段时间内的负载  (top)
NA
0.2h

6.4 vcpu  累计运行时间  (vcpu_exec_accum)
NA
0.2h

6.5 vmexit 原因统计 (vcpu_exit_reason)
NA
0.2h

七、 系统

7.1 bring up 流程
7.1.1  开机流程
0.1h

7.1.2  安全启动流程
0.2h

7.2  目录结构介绍
7.2.1  代码结构
0.2h

7.3  编译、下载、烧录
NA
0.2h

7.4  系统虚拟化框架
NA
0.2h

7.5  内存
7.5.1 OS size 控制
0.2h

7.5.2  内存 layout
0.2h

7.5.3  查询内存信息
0.2h

7.5.4  新增 reserved  样例
0.2h


## 幻灯片 4

一，软件开发培训 计划
基础开发 培训

培训模块
一级目录
二级目录
培训周期
备注
七、 系统
7.6 partition
7.6.1 parititon layout
0.2h

7.6.2  如何新增一个 partition
0.2h

7.6.3 partition debug
0.2h

7.7 OS 间通信
7.7.1 SOS & UOS  间通信
0.2h

7.7.2 UOS & UOS 间通信
0.2h

7.7.3 MCU & CPU 间通信
0.2h

7.8  外设通信协议
7.8.1 SPI
0.2h

7.8.2 I2C
0.2h

7.8.3 UART
0.2h

7.8.4 GPIO
0.2h

7.9  保活机制
7.9.1  进程保活
0.2h

7.9.2  系统保活
0.2h

7.9.3  控制虚拟机状态
0.2h

7.10 misc debug
7.10.1 log 【抓取，分析】
0.2h

7.10.2 adb 【连接，切换】
0.2h

7.10.3 sos uos console  切换
0.2h

7.10.4 android yocto  通过 console  数据交互
0.2h

7.11 cpu 配置
7.11.1  虚拟机 CPU 配置
0.2h

7.11.2 Nebula CPU 调度策略配置
0.2h

7.12  中断配置
NA
0.2h

7.13 STR
7.13.1 STR 机制概要说明
0.2h

7.13.2 STR 框架
0.2h

7.13.3  控制 guest os suspend/resume 方式
0.2h

7.13.4  调试方法
0.2h

7.14 OS 间内存共享
7.14.1 Vdmabuf
0.2h

7.15 OS 内进程间内存共享
7.15.1  通过 Binder 机制
0.2h

7.16 debug 入口办法
7.16.1  串口 log 入手
0.2h

7.16.2  从问题种类选择合适 debug 工具
0.2h

7.16.3  基础器件 debug  方式
0.2h

7.17 dmabuf
7.17.1  接口介绍
0.2h


## 幻灯片 5

一，软件开发培训 计划
基础开发 培训
培训模块
一级目录
二级目录
培训周期
备注
八、 模块
8.1 Display
8.1.1 Display  总览
1.5H

8.1.2 Configuration / Customization Guideline

8.1.3 Debug Tips

8.1.4 Troubleshooting

8.2 Camera
8.2.1 camera 虚拟化概念介绍
1.5H

8.2.2 camera 虚拟化框架介绍

8.2.3 camera 主要 code 位置

8.2.4  配置 / 客制化指南

8.2.5 Debug 手段

8.3 thermal
8.3.1 Architecture
1.5H

8.3.2 Thermal sensor

8.3.3 Linux thermal framework

8.3.4  配置文件

8.3.5 thermal debug

8.4 virtio_input
8.4.1  虚拟化框架介绍
1.5H

8.4.2 Input 数据传输

8.4.3 input 快速开发

8.4.4 input debug

8.5 Audio
8.5.1 Audio AFE HW
1H

8.5.2 Audio HAL

8.5.3 Audio Virtualization

8.6 secure boot
8.6.1 sign flow
1.5H

8.6.2 verify flow

8.6.3 key 配置

8.6.4  常用的配置

8.7 optee
8.7.1 optee 简介
1H

8.7.2 optee 应用开发

8.8 OTA
8.8.1 OTA 简介
1.5H

8.8.2  如何编译 Hypervisor OTA 升级包

8.8.3  如何进行 Hypervisor OTA 升级


## 幻灯片 6

一，软件开发培训 计划
平台课题方案培训
培训模块
培训周期
备注
3OS STR 方案 分享
3H
按客户需求约定
蓝牙架构 分享
3H
按客户需求约定
SurfaceFlinger 相关 dbug 方法
3H
按客户需求约定
Audio 方案 分享
3H
按客户需求约定
常用日志 说明
3H
按客户需求约定
Tbox 系统方案分享
3H
按客户需求约定
MT8676_EVS 介绍
3H
按客户需求约定
显示方案分享
3H
按客户需求约定
ECALL 平台化方案分享
3H
按客户需求约定
通信设计分享
3H
按客户需求约定

## 幻灯片 7

一，软件开发培训 计划
经典案例总结分享
培训课题
培训周期
时间
android 起不来可以做哪些分析
3H
按客户需求约定
内核崩溃 DB 解析和系统起不来分析方法
3H
按客户需求约定
vehicle 方案及实施分享
3H
按客户需求约定
黑屏死机问题经验分享
3H
按客户需求约定
黑画面 / 花屏 / 闪屏 / 卡顿问题经验分享
3H
按客户需求约定
DVR 问题经验分享
3H
按客户需求约定
音视频解码常见问题和分析
3H
按客户需求约定
启动时间优化案例分享
3H
按客户需求约定
TBOX 无网络案例分享
3H
按客户需求约定

STR 问题分析树
3H
按客户需求约定
CPU 的分配策略及实施
3H
按客户需求约定

## 幻灯片 8


www.pvetec.com
Thank You


---
# SRC0080 旧版证据核对.json

来源：架构知识——中文版/evidence/旧版证据核对.json

SHA-256：bb8fab1c1c5885c611749ce50dcc27aee6176d94afd3c874fcac2ef65e842ade

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0080.html)

## 全文 1

[
  {
    "id": "sdk-readme",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-mt8676-guide",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-sdk-architecture-diagram-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-sdk-structural-diagram-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-sync-timing-diagram-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mt8676-abnormal-nw-seq-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-abnormal-data-sequence-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-abnormal-dm-sequence-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-abnormal-sim-seq-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-abnormal-sms-seq-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-abnormal-voice-sequence-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-answer-call-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-async-start-call-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-async-stop-call-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-data-call-flow-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-data-deinit-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-data-init-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-data-sequence-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-data-set-service-event-cb-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-datafilter-set-active-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dialing-call1-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dialing-call2-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-deinitialization-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-get-ap-version-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-get-imei-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-get-modem-version-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-get-sdk-version-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-get-sn-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-initialization-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-sequence-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-set-get-ims-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-set-operating-mode-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-dm-set-service-event-cb-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-end-call1-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-imu-sequence-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-imu-start-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-imu-stop-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-client-deinit-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-delete-aiding-data-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-get-location-source-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-nmea-rmc-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-sequence-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-set-epo-status-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-set-gps-frequency-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-set-location-source-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-set-nmea-ind-mask-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-start-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-location-stop-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-multi-channel-scenario-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-abnormaldetection-2g3gregisterabnormal-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-abnormaldetection-antennaabnormal-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-abnormaldetection-cfunabnormal-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-abnormaldetection-csdomainabnormal-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-abnormaldetection-datacallabnormal-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-abnormaldetection-datacallserviceabnormal-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-abnormaldetection-frequentnetworkswitchabnormal-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-abnormaldetection-networkregisterabnormal-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-abnormaldetection-simcardabnormal-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-centric-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-deinitialization-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-initialization-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-register-reporting-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nw-seq-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nwset-getnetwork-config-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-nwset-network-configuration-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-query-signal-strength-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-set-apn-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sim-change-pin-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sim-dds-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sim-deinitialization-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sim-enable-disable-pin-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sim-get-function-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sim-initialization-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sim-seq-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sim-set-service-event-cb-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sim-unblock-pin-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sim-verify-pin-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-single-channel-scenario-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-deinitialization-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-delete-sms-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-get-max-store-size-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-get-msg-list-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-get-sms-center-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-initialization-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-read-sms-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-receiving-sms-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-register-reporting-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-send-sms-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-send-sms-async-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-send-sms-pdu-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-send-sms-pdu-async-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-sequence-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-set-service-event-cb-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-set-sms-center-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-sms-structure-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-urc-set-clear-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-voice-init-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-voice-scheme-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-voice-sequence-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-voice-set-service-event-cb-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-image-mtk8676-voice-uninit-png",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-at-test-at-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-at-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-audio-test-audio-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-audio-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-data-test-data-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-data-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-dm-test-dm-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-dm-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-gnss-test-gnss-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-gnss-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-imu-test-imu-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-imu-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-log-test-log-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-log-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-nw-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-nw-test-nw-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-power-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-power-test-power-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-sim-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-sim-test-sim-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-sms-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-sms-test-sms-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-timer-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-timer-test-timer-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-voice-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-voice-test-voice-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-wakelock-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-wakelock-test-wakelock-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-wakeup-test-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-wakeup-test-wakeup-test-c",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "sdk-example-root-makefile",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-readme-v1-0-226-txt",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-config-umdpprocess-ini",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-fibo-umdp-bb",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-config-sdk-version-cfg",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-logmanager-conf-logmanager-conf",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-config-umdploglevel-conf",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-fb-audio-service",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-fb-logmgr-service",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-fb-modem-service",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-fb-powermgr-service",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-at-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-audio-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-data-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-dm-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-error-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-imu-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-location-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-log-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-nw-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-oe-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-power-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-sim-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-sms-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-timer-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-type-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-voice-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-wakelock-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-files-umdp-include-fibo-sdk-fibo-wakeup-h",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "umdp-library-service-listing",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "original-diagram-01",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "original-diagram-02",
    "exists": true,
    "hash_matches": true
  },
  {
    "id": "original-diagram-03",
    "exists": true,
    "hash_matches": true
  }
]


---
# SRC0081 MT8668_Android_AI_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_AI_User_Manual_CN_V1.0.pdf

SHA-256：3ca55da6a9f26a8384e3509db1b0c79e8870054de25c3e53f17a735bd4f70794

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0081.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Android AI  
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
MT8668 Android AI 
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
MT8668 Android AI 
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
MT8668 Android AI 
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
MT8668 Android AI 
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
MT8668 Android AI 
User Manual 
Confidential B 
 
图 1-2. NeuroPilot 在线文档 
 
开通 NeuroPilot 访问权限后：进入 https://neuropilot.mediatek.com/ -> Software Development -> 登陆账号 -> 在
“NeuroPilot SDK & Document”下选择目标 NeuroPilot {version} -> Latest Version NeuroPilot Online Doc -> 2. Getting 
Started Guide -> 2.2. NeuroPilot Workflow -> 2.2.3.1. Android Development 
 
 配置/客制化指南 
 NeuroPilot Debug 命令说明 
客户如果遇到 apusys error issue，请先打开以下 log 开关，复现问题，再向 MediaTek 提供整机 log 以及在测试机上
的 apusys_rv_xfile (用于解码 apusys_log) ，log options 和获取路径如下： 
Enable NNAPI AOSP log       ：adb shell "setprop debug.nn.vlog 1" 
Enable TFlite log                    ：adb shell setprop debug.mtk_tflite.vlog true 
Enable Execution plan           ：adb shell setprop debug.neuron.runtime.ShowExecPlan true 
Enable ShowQoSInfo             ：adb shell setprop debug.neuron.runtime.ShowQoSInfo true 
Enable Kernel Log    :   adb shell "echo 15 > /sys/class/misc/apusys/log/klog" 
Enable uPLog                          ：adb shell "echo 5 > /proc/apusys_logger/log" 
Enable User Log                      ：adb shell setprop debug.apusys.loglevel 15 
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
MT8668 Android AI 
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
MT8668 Android AI 
User Manual 
Confidential B 
• npusys.trace（仅包含 NPU 运行期间各个 Device，如 MDLA 上 Tasks 的状况和 NPU Frequency, DRAM access, TCM 
access 等信息） 
• system.trace（普通 System trace only，包含 CPU 信息和系统中其他 process/threads 信息） 
• combine.trace（npusys + system trace） 
 
为了理清当前系统中运行在 NPU 上的线程，通常需要通过系统调试和跟踪工具来获取相关信息。以下是一个详细
的 SOP，用于识别和调试当前系统中运行在 NPU 上的线程。 
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
MT8668 Android AI 
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
MT8668 Android AI 
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
# SRC0082 MT8668_Android_Audio_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_Audio_User_Manual_CN_V1.0.pdf

SHA-256：6799a6ae5ba0b337e00429272166c3012920c48d75e1dcce29946374d264bd52

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0082.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Android Audio User Manual 
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
MT8668 Android Audio 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 王江华 正式版 
 
 
  
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
MT8668 Android Audio 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 5 
表格目录 ··········································································································································································· 5 
1 概述··········································································································································································· 6 
1.1 音频功能简单概述 ··············································································································································· 6 
 名词解释 ·················································································································································· 6 
 音频功能及框图 ······································································································································ 9 
 音频格式支持 ········································································································································ 12 
2 音频软件架构 ························································································································································· 15 
2.1 音频 HAL ····························································································································································· 16 
 音频 HAL 播放 ········································································································································ 16 
 音频 HAL 录制 ········································································································································ 17 
2.2 ALSA 驱动架构概要 ············································································································································ 19 
2.3 DAPM 及 DPCM 概述 ·········································································································································· 19 
3 AAOS 音量控制 ······················································································································································· 21 
3.1 在 XML 文件中配置音量 ···································································································································· 21 
3.2 客制音量命令 ····················································································································································· 22 
4 外部硬件设备 ························································································································································· 23 
4.1 MT8668 I2S 能力支持 ········································································································································· 23 
4.2 I2S 连接应用简介 ··············································································································································· 24 
 I2S 应用 ·················································································································································· 25 
5 联发科 Aurisys 和开放式 DSP ································································································································· 26 
5.1 概述 ····································································································································································· 26 
 Aurisys 结构 ············································································································································ 26 
5.2 数据路径客制指南 ············································································································································· 27 
6 Kernel DTS 配置 ······················································································································································· 28 
6.1 音频路径配置 (AFE HW) ····································································································································· 30 
6.2 音频路径配置 (INT ADSP) ··································································································································· 32 
 XML 配置指令 ········································································································································ 33 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 mixer_target 和 mixer_source ················································································································ 33 
 任务属性 ················································································································································ 34 
 配置示例 ················································································································································ 35 
7 音频 HAL 软件混音器 ·············································································································································· 37 
7.1 音频 HAL 软件混音器代码架构 ························································································································· 37 
7.2 音频 HAL 软件混音器 XML 配置指南 ················································································································ 38 
 先明确相关应用场景的实际需求 ········································································································· 38 
 声明 BUS80/81/82 给 AudioPolicyManager 及 audioFlinger ································································ 39 
 配置 Audio HAL 的 Mixer 通路的路由并配置其为 Target ···································································· 40 
8 添加音频编 Codec 驱动 ·········································································································································· 42 
9 总结········································································································································································· 44 
附录 MTK MOL ································································································································································ 45 
附件一 附加条款 ····························································································································································· 46 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
图片目录 
图 2-1. MT8668 音频框图 ························································································································································· 9 
图 2-2. MT8668 音频框图详细信息 ······································································································································· 10 
图 2-3. MT8668 音频框图详细信息(接上图) ························································································································· 11 
图 3-1. 音频软件架构 ······························································································································································ 15 
图 3-2. 音频软件数据流 ·························································································································································· 15 
图 3-3. 音频 HAL 架构 ····························································································································································· 16 
图 3-4. 播放架构······································································································································································ 17 
图 3-5. 录制架构······································································································································································ 18 
图 3-6. ALSA PCM 接口 ···························································································································································· 19 
图 3-7. 音频前端和后端框图 ·················································································································································· 20 
图 4-1. 音频音量控制 ······························································································································································ 21 
图 4-2. 音频音量组配置 ·························································································································································· 21 
图 4-3. 设备增益配置 ······························································································································································ 22 
图 6-1. Aurisys 概念 ································································································································································· 26 
图 6-2. Aurisys 结构 ································································································································································· 27 
图 7-1. DTS 属性列表 ······························································································································································ 28 
图 7-2. memif 定义 ·································································································································································· 29 
图 7-3. 音频 HAL PCM Config 配置 ········································································································································· 29 
图 7-4. ADSP 架构 ···································································································································································· 30 
图 7-5. 播放音乐的音频路径 ·················································································································································· 31 
图 7-6. 将 Playback_3 传输到 PMIC ········································································································································ 32 
图 7-7. ADSP 架构 ···································································································································································· 33 
图 7-8. DSP 任务配置 ······························································································································································ 36 
图 8-1. 音频 HAL 软件混音器软件架构·································································································································· 37 
图 8-2. 音频 HAL 软件混音器示意图 ····································································································································· 38 
 
表格目录 
表 1-1.名词解释 ········································································································································································ 6 
表 5-1. IP/Pin 映射表 ······························································································································································· 23 
表 4-2. GPIO 功能 ···································································································································································· 24 
表 4-3. I2S 接口分配建议 ························································································································································ 25 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
1 概述 
1.1 音频功能简单概述 
在本文档中，我们将介绍音频功能，例如音量控制、音频框架、 DSP 音频配置等。首先，我们将概述所支持的功能
和音频框图。然后，我们将介绍 AAOS 音量控制及相关配置。最后，我们将介绍 Aurisys 音效框架和 DSP 音频 mix
通路配置。 
 
 名词解释 
表 1-1.名词解释 
缩写 释义 
A2DP Advanced Audio Distribution Profile 高级音频分配配置文件 
AAC Advanced Audio Coding 高级音频编码 
ACF Acoustic Correction Filter 声学校正滤波器 
ADC Analog-to-Digital Converter 模拟数字转换器 
ADDA Conversion from analog to digital and from digital to analog 模拟到数字和数字到模拟的转换 
ADSP Audio Digital Signal Processor 音频数字信号处理器 
AEC Acoustic Echo Cancellation 声回波消除 
AFE Audio Front End 音频前端 
ALSA Advanced Linux Sound Architecture 高级 Linux 声音架构 
AMR Adaptive Multi-Rate 自适应多速率 
AOSP Android Open Source Project 安卓开放源码项目 
API Application Programming Interface 应用程序接口 
ARM Advanced RISC Machines 高级精简指令集计算机 
ASR Acoustic Speech Recognition 声学语音识别 
AWB Audio Write Back 音频回写 
BCK Bit-Clock 位时钟 
BE Back End 后端 
BLE Bluetooth Low Energy 蓝牙低功耗 
BT Bluetooth 蓝牙 
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
MT8668 Android Audio 
User Manual 
Confidential B 
缩写 释义 
CBR Constant Bit Rate 固定比特率 
CCCI Cross Cores Communication Interface 跨核心通信接口 
CPU Central Processing Unit 中央处理器 
CTS Compatibility Test Suite 兼容性测试套件 
CVSD Continuously Variable Slope Delta 连续可变斜率增量调制 
DAC Digital-to-Analog Converter 数字模拟转换器 
DAI Digital Audio Interface 数字音频接口 
DAPM Dynamic Audio Power Management 动态音频功率管理 
dB Decibel 分贝 
DC Direct Current 直流电 
DL Downlink 下行链路 
DMA Direct Memory Access 直接内存访问 
DPCM Dynamic Pulse Code Modulation 动态脉冲编码调制 
DRC Dynamic Range Control 动态范围控制 
DSP Digital Signal Processor 数字信号处理器 
EM Engineer Mode 工程模式 
EMI External Memory Interface 外部内存接口 
eTDM Electrical Time Division Multiplexing 电时分复用 
FAQ Frequently Asked Questions 常见问题解答 
FE Front End 前端 
FFT Fast Fourier Transform 快速傅里叶变换 
FIR Finite Impulse Response 有限脉冲响应 
FM Frequency Modulation Broadcast 调频广播 
GUI Graphical User Interface 图形用户界面 
HAL Hardware Abstraction Layer 硬件抽象层 
HCF Headphone Compensation Filter 耳机补偿滤波器 
Hz Hertz 赫兹 
I2S Inter-IC Sound 集成电路间声音 
IC Integrated Circuit 集成电路 
IIR Infinite Impulse Response Filter 无限脉冲响应滤波器 
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
MT8668 Android Audio 
User Manual 
Confidential B 
缩写 释义 
IP Intellectual Property 知识产权 
kbps Kilobits per Second 千比特每秒 
kHz Kilohertz 千赫兹 
LPF Low-Pass Filter 低通滤波器 
MD Modem 调制解调器 
MIDI Music Instrument Digital Interface 乐器数字接口 
MM Multimedia 多媒体 
NB Narrowband 窄带 
NVRAM Non-Volatile Random Access Memory 非易失性随机存取存储器 
OS Operating System 操作系统 
PA Power Amplifier 功率放大器 
PC Personal Computer 个人计算机 
PCM Pulse Code Modulation 脉冲编码调制 
PGA Programmable Gain Amplifier 可编程增益放大器 
PMIC Power Management Integrated Chip 电源管理集成芯片 
RISC Reduced Instruction Set Computer 精简指令集计算机 
RW Read and Write 读和写 
RX Receive 接收 
SCO Synchronous Connection Oriented 同步连接导向 
SD Secure Digital 安全数字 
SMP Symmetric Multi-Processing 对称多处理 
TX Transmit 发送 
UI User Interface 用户界面 
UL Uplink 上行链路 
USB Universal Serial Bus 通用串行总线 
VBR Variable Bitrate 可变比特率 
VoIP Voice over Internet Protocol 网络语音协议 
XML Extensible Markup Language 可扩展标记语言 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 音频功能及框图 
 
图 1-1. MT8668 音频框图 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 
 
    图 1-2. MT8668 音频框图详细信息 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 
图 1-3. MT8668 音频框图详细信息(接上图) 
 
• MT8668 
– 内部高分辨率、高灵活性的 AFE 互连中的 HW 增益 
– 8 组 Inter IC 音频接口 (I2S) 
▪ 主输出 *2 (2 通道/32 位/384K 采样率)  
▪ 主输出 *1 (eTDM, 32 通道/32 位/32K 采样率) 
▪ 主输入 *3 (2 通道/32 位/192K 采样率) 
▪ 主输入 *1 (32 通道/32 位/48K 采样率) 
▪ 从输入高速 I2S IQ *1 (DMA0: 8 通道/18 位/2048K 采样率) 
▪ FM 从输入(带 SRC)  
– 通用异步采样率转换器 *8(16 通道) 
▪ 主模式支持 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48, 88, 96, 176 和 192kHz 采样率 
▪ 从模式支持 8, 11.025, 12, 16, 22.05, 24, 32, 44.1 和 48kHz 采样率 
▪ 支持 16/32 位总线宽度 
▪ Philip 标准和左对齐 
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
MT8668 Android Audio 
User Manual 
Confidential B 
– 2 组脉冲编码调制 (PCM)接口 
▪ Slave PCM for internal Modem*1 
▪ 支持 16/24 位立体声数据格式 
– 音频编解码器 
▪ MP3, AAC, AAC+, AMR-NB, AMR-WB, OGG, WAV 
– 第三方支持 （需要客户与第三方联系） 
▪ Dolby mobile 
 
 音频格式支持 
• 播放 
– AAC/HE-AAC v1/HE-AAC v2 
▪ Android Orientated Support  
▪ 8 kHz ~ 96 kHz; 8 kbps ~ 320 kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: VBR/CBR 
▪ File Extension: .aac (ADTS, ADIF), .m4a, .mp4, .3gp, .ts 
▪ Profile: 1) LC, HEAAC V1, V2; 2) LD, ELD 
▪ LC, 48 kHz, 128 kbps, stereo; HEv1, 22.05 kHz, 128 kbps, stereo; HEv2, 22.05 kHz, 32 kbps, stereo; ELD, 44.1 
kHz, 128kbps  
– AMR 
▪ Android Orientated Support 
▪ 8 kHz, 4.75 kbps~12.2 kbps 
▪ Mono Support 
▪ Bitrate mode: CBR 
▪ File Extension: .amr 
▪ 8 kHz, 12.2 kbps, mono 
– AWB 
▪ Android Orientated Support 
▪ 16 kHz, 6.6 kbps~23.85 kbps 
▪ Mono Support 
▪ Bitrate mode: CBR 
▪ File Extension: .awb 
▪ 16 kHz, 23.85 kbps, mono 
– MIDI 
▪ Android Orientated Support  
▪ 22.05 kHz 
▪ Stereo Support 
▪ File Extension: .mid, .midi, .smf, .rtttl, .xmf, .rtx, .ota, .imy 
– MP3 
▪ Android Orientated Support  
▪ 8 kHz ~ 48 kHz; 8 kbps ~ 320 kbps 
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
MT8668 Android Audio 
User Manual 
Confidential B 
▪ Mono/Stereo Support 
▪ Bitrate Mode: VBR/CBR 
▪ File Extension: .mp3 
▪ Profile: MPEG1-Layer3, MEPG2-Layer3, MPEG2.5-Layer3 
▪ MPEG1, 48 kHz, 256 kbps, stereo 
– OGG VORBIS 
▪ Android Orientated Support  
▪ 8 kHz ~ 192 kHz; 10 kbps ~ 320 kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: VBR 
▪ File Extension: .ogg, .oga 
▪ 48kHz, 250bps, stereo 
– WAV (Raw) 
▪ Android Orientated Support  
▪ 6 kHz ~ 96 kHz; 48 kbps ~ 3072 kbps 
▪ 1 channel ~ 8 channels support 
▪ File Extension: .wav 
– FLAC 
▪ Android Orientated Support  
▪ 8 kHz ~ 48 kHz; 87 kbps ~ 396 kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: VBR 
▪ File Extension: .flac 
▪ 44.1 kHz, 745kbps, level5, stereo 
 
• 录制 
– AAC 
▪ Android Orientated Support  
▪ 8 kHz ~ 48 kHz; 8kbps ~ 160kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: CBR 
▪ File Extension: .3gp, .aac 
▪ Profile: Low Complexity; High Efficiency; Enhanced Latency Delay 
▪ 48 kHz, 128 kbps, stereo (Low Complexity); 48 kHz, 128 kbps, stereo (High Efficiency); 48 kHz, 128 kbps, 
stereo (Low Latency Delay)  
– AMR 
▪ Android Orientated Support  
▪ 8 kHz; 4.75 kbps ~ 12.2 kbps 
▪ Mono Support 
▪ Bitrate Mode: CBR 
▪ File Extension: .3gp, .amr 
▪ 8 kHz, 12.2 kbps, mono 
 
– AWB 
▪ Android Orientated Support  
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
MT8668 Android Audio 
User Manual 
Confidential B 
▪ 16 kHz; 6.60 kbps~23.85 kbps 
▪ Mono Support 
▪ Bitrate Mode: CBR 
▪ File Extension: .3gp, .awb 
▪ 16 kHz, 23.85 kbps, mono 
– FLAC 
▪ Android Orientated Support  
▪ 8 kHz ~ 48 kHz; 87 kbps ~ 396 kbps 
▪ Mono/Stereo Support 
▪ Bitrate Mode: VBR 
▪ File Extension: .flac 
▪ 44.1 kHz, 745kbps, level5, stereo 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
2 音频软件架构 
图 2-1 和图 2-2 分别是音频软件架构和数据流。软件组件和数据路径可以在 这两张图中看到。 
 
 
图 2-1. 音频软件架构 
 
Modem
2026/1/2
7 2
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
 
图 2-2. 音频软件数据流 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8668 Android Audio 
User Manual 
Confidential B 
2.1 音频 HAL 
图 2-3 是音频 HAL 架构。  
 
 
图 2-3. 音频 HAL 架构 
 
HAL 的顶层控制接口是 AudioALSAHardware、AudioALSAStreamOut 和 AudioALSAStreamIn。这些类都使用
AudioALSAStreamManager 来控制音频模式、打开/关闭，输入/输出流。因此 AudioALSAStreamManager 将拥有所有
音频环境信息，如模式、路由、音量和静音信息。 
 
 音频 HAL 播放 
AudioALSAStreamOut: 执行写入/待机/路由操作的类 
 
• 不实现细节本身，而是使用 Playback Handler 执行实际打开/关闭/路由/写入操作 
• 不同场景使用不同类型的 Playback Handler 
• 第一次写入时，Stream Out 将调用 StreamManager 中的 createPlaybackHandler()来获取 Playback Handler 的指针 
• 在 standby()时，destroyPlaybackHandler() 
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
MT8668 Android Audio 
User Manual 
Confidential B 
不要在 playback handler 中设置硬件寄存器，而是使用 TinyALSA 库来调用 
 
• pcm_open()/pcm_close() 
– 控制 AFE 硬件路径和内存设置 
• mixer_open()/mixer_close() 
– 获取各种类型的混音器控制, 比如 Speaker_Amp_Switch, Voice_Amp_Switch, Audio_Amp_R_Switch, and 
Audio_Amp_L_Switch，以控制编解码器驱动程序。 
• pcm_write() 
– 将 PCM 数据写入 SRAM/DRAM 
 
图 2-4. 播放架构 
 
 音频 HAL 录制 
AudioALSAStreamIn：执行读取/待机/路由操作的类 
 
• 不实现细节本身，而是使用 Capture Handler 绕过打开/关闭/路由/读取操作 
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
MT8668 Android Audio 
User Manual 
Confidential B 
• 不同场景使用不同类型的 Capture Handler 
• Stream In 将在第一次 read()时调用 StreamManager 中的 createCaptureHandler()来获取 Capture Handler 的指针 
• 此外，在 standby()时，destroyCaptureHandler() 
 
不要在 Capture Handler 中设置硬件寄存器，而是使用 TinyALSA 库来调用 
 
• pcm_open() /pcm_close() 
– 用于控制 AFE 硬件路径、内存设置 
• mixer_open()/mixer_close() 
– 用于获取各种类型的混音器控制，如 Audio_ADC_1_Switch、Audio_ADC_2_Switch、
Audio_Preamp1_Switch、Audio_Preamp2_Switch，以控制编解码器驱动程序 
• pcm_read() 
– 用于将 PCM 数据读取到 SRAM/DRAM 中 
 
 
图 2-5. 录制架构 
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
MT8668 Android Audio 
User Manual 
Confidential B 
2.2 ALSA 驱动架构概要 
高级 Linux 声音架构 (ALSA) 为 Linux 操作系统提供音频和 MIDI 功能。ALSA 具有以下重要功能： 
 
• 高效支持所有类型的音频接口，从消费级声卡到专业多声道音频接口  
• 完全模块化的声音驱动程序 
• SMP 和线程安全设计 
• 用户空间库 (alsa-lib) 简化应用程序编程并提供更高级别的功能 
• 支持较旧的开放声音系统 (OSS) API，为大多数 OSS 程序提供二进制兼容性 
 
 
图 2-6. ALSA PCM 接口 
 
2.3 DAPM 及 DPCM 概述 
动态音频电源管理（DAPM）旨在允许便携式 Linux 设备始终使用音频子系统中的最小电量。它独立于其他内核
PM，因此可以轻松与其他 PM 系统共存。 
DAPM 对所有用户空间应用程序也完全透明，因为所有电源切换都在 ASoC 核心内完成。用户空间应用程序无需更
改代码或重新编译。DAPM 根据设备内的任何音频流（捕获/播放）活动和音频混音器设置做出电源切换决策。 
所有 DAPM 电源切换决策都是通过查阅整个机器的音频路由图自动做出的。此图特定于每台机器，由每个音频组
件（包括内部编解码器组件）之间的互连组成。以下所有影响电源的音频组件都称为小部件。有关更多详细信
息，请参阅：https://www.kernel.org/doc/html/v6.1/sound/soc/dpcm.html。 
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
MT8668 Android Audio 
User Manual 
Confidential B 
音频驱动基于标准 DAPM 和 DPCM（动态 PCM）架构来控制 pcm 的打开/关闭、电源的开/关、时钟的开/关。
DPCM 将 PCM 分为 Front End/Back End PCM： 
 
• FE PCM: Control of DMA (MEMMEMIF) 
• BE PCM: Control of DAI (ADDA, PCM IF, I2S) 
 
 
 
更多详细信息可以参考: https://www.kernel.org/doc/html/v6.1/sound/soc/dpcm.html。 
以下是 MT8668 FE (memif) 和 BE (ADDA/I2S/PCM/Hostless/..) 框图： 
 
图 2-7. 音频前端和后端框图 
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
MT8668 Android Audio 
User Manual 
Confidential B 
3 AAOS 音量控制 
根据谷歌的定义，AAOS 的实现是使用硬件功放来控制音量，而不是软件混音器，所以建议使用 smartpa 或者其他
硬件增益来调节音量。MTK 在内部 adsp 中提供了调节音量的接口和软件路径，如图 3-1 所示。 
 
图 3-1. 音频音量控制 
 
3.1 在 XML 文件中配置音量 
要配置音量，我们需要修改 car_audio_configuration.xml 和 audio_policy_configuration.xml。 
car_audio_configuration.xml 定义音量组，用于管理音频区域内一组设备的音量。对于每个音量组，音量都可以独
立控制。产生的增益在相关设备上配置，以供车辆的放大器应用。每个音量组应包含一个或多个具有相关地址的
输出设备。地址应与 audio_policy_configuration.xml 中定义的输出设备相对应。 
 
 
图 3-2. 音频音量组配置 
Audio native framwork 
Audio hal 
Kernel driver 
Audio dsp 
setAudioPortConfig 
ipi driver 
ipi msg 
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
MT8668 Android Audio 
User Manual 
Confidential B 
Audio_policy_configuration.xml 定义了音量组增益。每个音量组都有最小、最大和默认增益值，以及基于  
audio_policy_configuration.xml 中为与音量组关联的设备配置的值的步长。 
 
 
图 3-3. 设备增益配置 
 
我们提供最小 0 到最大 300 的增益等级，并且增益将通过对数转换函数映射到浮点值 0~1 并应用于数字音频流。 
 
3.2 客制音量命令 
音量命令由音频 flinger 通过 setAudioPortConfig 发送，并在 AudioALSAPlaybackHandlerXXXX::setVolume 中处理命
令。客户可以修改函数实现以进行自定义，例如调整音量曲线和设置 kcontrol。 
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
MT8668 Android Audio 
User Manual 
Confidential B 
4 外部硬件设备 
4.1 MT8668 I2S 能力支持 
I2S 能力接口描述                                                                                             
• I2S0 – ADC/DAC 接口 
– 适用于任何音频接口 
– 支持主输入的标准 I2S 
– 输入能力高达 192kHz/32 位 
• I2S1 – ADC/DAC 接口 
– 支持主输入/主输出的标准 I2S 
– 最多 1 条数据线支持两个通道 
– 输入能力高达 192kHz/32 位 
– 输出能力高达 384k/32 位 
• I2S2 – ADC/DAC 接口 
– 支持主输入/主输出的标准 I2S 
– 最多 2 条数据线支持四个通道 
– 输入能力高达 192kHz/32 位 
– 输出能力高达 384kHz/32 位 
• I2S6 – ADC/DAC 接口 
– 支持主输入/主输出的标准 I2S 
– 最多 2 条数据线支持 32 个通道 
– 输入能力高达 192kHz/32 位 
– 输出能力高达 384kHz/32 位 
• Connsys I2S – ADC 接口 
– 支持标准 I2S 主/从输入 
– 最多支持 1 条数据线，实现 2 声道 
– 输入能力最高可达 192k/32bit 
• 高速 I2S – ADC 接口 
– 支持标准 I2S 从输入 
– 最多支持 4 条数据线，实现 8 声道 
– 输入能力最高可达 2048k/18bit 
表 4-1. IP/Pin 映射表 
IP Pin Name 
I2S0 
I2SIN0_LRCK 
I2SIN0_BCK 
I2S0_MCK 
I2SIN0_DI 
I2S1 
I2SIN1_LRCK 
I2SIN1_BCK 
I2S1_MCK 
I2SIN1_DI 
I2SOUT1_DO 
I2S2 
I2SIN2_LRCK 
I2SIN2_BCK 
I2SIN2_DI 
I2SOUT2_DO 
I2S6 
I2SIN6_LRCK 
I2SIN6_BCK 
I2SIN6_DI 
I2SOUT6_DO 
Connsys 
I2S 
FMI2SIN_BCK 
FMI2SIN_LRCK 
FMI2SIN_MCK 
FMI2SIN_DI 
High 
Speed 
I2S 
I2SIN_DMA0_BCK 
I2SIN_DMA0_LRCK 
I2SIN_DMA0_DI 
I2SIN_DMA0_DI2 
I2SIN_DMA0_DI3 
I2SIN_DMA0_DI4 
 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
• MCLK 支持 (I2S0/I2S1/I2S2/I2S6) 
– 同步 MCLK 和 I2S BCK 
– 192k 模式下的能力高达 256fs 
– 96k 模式下的能力高达 512fs 
– 48k 模式下的能力高达 1024fs 
– 不支持 192fs 或 384fs 相关 
 
4.2 I2S 连接应用简介 
联发科在 HW 功能（IP：知识产权）和 Pad 之间采用高度灵活的设计。 
IP 和 Pad 之间的关系可以使用 AUX_FUNC 来选择 Pad 连接到哪个 IP。 
 
表 4-2. GPIO 功能 
Aux Func.0 Aux Func.1 Aux Func.2 Aux Func.3 Aux Func.4 Aux Func.5 Aux Func.6 
B:GPIO7  - I0:I2SIN_DMA0_D
I3 - - - - 
B:GPIO28 - B0:FMI2SIN_BCK - - - - 
B:GPIO29 - B0:FMI2SIN_LRCK - - - - 
B:GPIO30 - O:FMI2SIN_MCK - - - - 
B:GPIO31 - I0:FMI2SIN_DI - - - - 
B:GPIO32 - O:I2SIN0_BCK - - - - 
B:GPIO33 - O:I2SIN0_LRCK - - - - 
B:GPIO34 - O:I2SIN0_MCK - - - - 
B:GPIO35 - I0:I2SIN0_DI - - - - 
B:GPIO70 O:I2SIN1_BCK I0:I2SIN_DMA0_B
CK - - - - 
B:GPIO71 O:I2SIN1_LRCK I0:I2SIN_DMA0_L
RCK - - - - 
B:GPIO72 I0:I2SIN1_DI I0:I2SIN_DMA0_D
I - - - - 
B:GPIO73 O:I2SOUT1_DO I0:I2SIN_DMA0_D
I1 - - - - 
B:GPIO74 O:I2SIN1_MCK I0:I2SIN_DMA0_D
I2 - - - - 
B:GPIO75 O:I2SIN2_BCK - - - - - 
B:GPIO76 O:I2SIN2_LRCK - - - - - 
B:GPIO77 I0:I2SIN2_DI - - - - - 
B:GPIO78 O:I2SOUT2_DO - - - - - 
B:GPIO79 O:I2SIN2_MCK - - - - - 
B:GPIO86 - - B0:I2SIN6_BCK - - - 
B:GPIO87 - - O:I2SOUT6_DO - - - 
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
MT8668 Android Audio 
User Manual 
Confidential B 
Aux Func.0 Aux Func.1 Aux Func.2 Aux Func.3 Aux Func.4 Aux Func.5 Aux Func.6 
B:GPIO88 - - O:I2SOUT6_DO1 - - - 
B:GPIO89 - - O:I2SOUT6_DO2 - - - 
B:GPIO90 - - B0:I2SIN6_LRCK - - - 
B:GPIO91 - - O:I2SOUT6_DO3 - - - 
B:GPIO97 - - I0:I2SIN6_DI - - - 
B:GPIO98 - - I0:I2SIN6_DI1 - - - 
B:GPIO99 - - I0:I2SIN6_DI2 - - - 
B:GPIO100 - - I0:I2SIN6_DI3 - - - 
B:GPIO101 - - O:I2SIN6_MCK - - - 
B:GPIO107 - O:I2SIN2_BCK - - - - 
B:GPIO108 - O:I2SIN2_LRCK - - - - 
B:GPIO109 - I0:I2SIN2_DI - - - - 
B:GPIO110 - O:I2SOUT2_DO - - - - 
B:GPIO189 - - - I0:I2SIN_DMA0_B
CK - - 
B:GPIO192 - - - I0:I2SIN_DMA0_L
RCK - - 
B:GPIO193 - - - I0:I2SIN_DMA0_D
I - - 
B:GPIO194 - - - I0:I2SIN_DMA0_D
I1 - - 
B:GPIO196 - - - I0:I2SIN_DMA0_D
I2 - - 
B:GPIO197 - - - I0:I2SIN_DMA0_D
I3 - - 
 
 
 I2S 应用 
表 4-3. I2S 接口分配建议 
Interface Direction Suggestion for I2S IF Assignment 
I2S0  Input/  Reserved 
I2S1 Input/Output Passenger BT 
I2S2  Input/Output xCall codec 
I2S6 Input/Output A2B/ External ADSP 
Connsys I2S Input External FM IC or DP in codec 
High Speed I2S Input DAB 
其他应用，请咨询 MTK ACS 团队以获得最佳 I2S IF 分配。 
  
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
MT8668 Android Audio 
User Manual 
Confidential B 
5 联发科 Aurisys 和开放式 DSP 
5.1 概述 
人们对音质增强以增加聆听乐趣的需求日益增加。为了丰富使用移动设备的聆听体验，供应商提供的声音处理解
决方案的数量不断增加。 
Aurisys 的推出是为了促进 MTK 平台声音处理解决方案的开发和使用。Aurisys 是基于 Android 音频框架构建的框
架。它包括用于声音处理和调音的标准化接口、集成的 DSP 声音子系统和软件调试接口。本文将简要介绍 Aurisys
的概念。 
 
图 5-1. Aurisys 概念 
 
 Aurisys 结构 
如图 5-2 所示，Aurisys 结构包含场景处理程序、库管理器、集成 DSP 框架、调制解调器/音频硬件子系统和标准化
软件接口： 
• Aurisys Scene Handler (ARSH) 
– Aurisys Scene Handler 是音频系统和声音处理 IP 之间的中间件，是按场景创建的。例如，Aurisys Playback 
Handler 是用于播放场景中的播放效果。它提供调用相应 IP 的接口并管理 IP。 
• Aurisys Library Manager (ARLM) 
– Aurisys 库管理器维护每个 Aurisys 场景处理程序的库信息。它包含声音算法 IP 的列表和状态。 
• Aurisys Software Interface (ARSI 
– ARSI 是 Aurisys Software Interface 的缩写。它用于与声音增强任务进行交互。为了处理声音，提供了一个可
在 MTK 平台之间移植的统一接口。还包括在 PC 工具、APMCU 和 DSP 之间解析和传输参数的接口。该接
口设计易于使用，同时足够通用，因此可以轻松将新算法添加到现有框架中。 ARSI 和 ARSH 之间的区别在
于，ARSI 提供了 ARSH 和声音 IP 之间的接口；而 ARSH 提供了 Android Audio HAL 请求处理声音的接口。 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
• Modem 
– 调制解调器是指调制解调器 IC。MTK 内部芯片组包含一个 DSP，用于处理语音增强和语音编解码器。在
Aurisys 结构中，我们禁用 modem 内部的语音增强，但在调制解调器 IC 中保留编解码器，以便我们只需在
应用程序端集成的开放 DSP 中添加算法即可。 
• Audio HW 
– 指处理器与硬件设备之间传输声音数据的接口。这些设备包括扬声器、麦克风、耳机、蓝牙设备、 USB 设
备等。 
 
 
图 5-2. Aurisys 结构 
 
5.2 数据路径客制指南 
使用 DSP 进行音频处理和输出时，需要在 DSP 中配置每条音频流的混音路由路径和通道配置信息。公共的 DSP 任
务配置提供了基本的参考配置，但在实际场景中，需要对各个 DSP 任务进行一些修改。本节主要介绍 ADSP 相关功
能定制所涉及的配置文件修改。 
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
MT8668 Android Audio 
User Manual 
Confidential B 
6 Kernel DTS 配置 
在 DTS 中，与 DSP 音频流相关的属性配置如下： 
 
 
图 6-1. DTS 属性列表 
 
每个 DSP 任务属性节点保存一个五位数组，其中数组顺序代表了该 DSP 任务使用的共享内存的 enable、dl_mem、
ul_mem、ref_mem 和大小。在所有属性中，用户需要根据每个 DSP 任务对 memif 的实际使用情况来配置 dl_mem
（下行）、ul_mem（上行）、ref_mem（参考信号）。例如，对于 mtk-dsp-sub-playback 任务，使用的 dl 输出
memif 为 DL0，那么对应的 dl_mem 就填充 0x0。大部分任务（比如 playback0）实际上并不使用 hw memif，所以需
要配置为 0xffffffff。memif 节点的枚举类型定义在 mt6897-afe-common.h 中。 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 
图 6-2. memif 定义 
 
需要注意的是，在修改了 dts 中对应的 task 使用的节点后，同时也需要修改 hal 中对应的 task 使用的 pcm。Dsp-
playback task 对应修改 audio hal 中 AudioDspStreamManager.cpp 中的 openPlaybackTask 函数中的 mPlaybackUlindex 
等变量，选用对应 dl 的 playback stream，其中 dsp 输出的 channel 数量等也在该函数处修改，如图 6-3 所示。 
 
 
图 6-3. 音频 HAL PCM Config 配置 
 
DSP 下的各个 task 的架构如下： 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 
图 6-4. ADSP 架构 
 
6.1 音频路径配置 (AFE HW) 
在通过 audio dsp pcm stream 进行播放和录音之前，需要配置对应的 AFE hardware 通路，其配置过程遵循 tinyalsa
的标准流程，通过 tinymix 配置相应的 kcontrol 通路，并 open 和 start 相应的 HW 通路。图 6-5 为配置 DL_MCH2-> 
I2SOUT6 的播放通路。 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 
图 6-5. 播放音乐的音频路径 
 
在 audio_device.xml 中相应的配置如下： 
 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 
图 6-6. 将 Playback_3 传输到 PMIC 
 
6.2 音频路径配置 (INT ADSP) 
Auto adsp 中会存在多个 task (bus out)，且每个 task 根据需求及实际场景不同，需要配置不同的算法处理参数，例
如 channel in，channel out 及是否 bypass 算法等。同时，一般需要将各路 bus 的 channel 映射到最终输出的 TDM 格
式中对应的 channel 位置，即需要配置 channel map 信息，故提供 audio_dsp_config.xml 配置修改 auto dsp task 的各
项属性及 mix path。一般的 adsp 中的 task 架构如图： 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 
图 6-7. ADSP 架构 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
Ex1: 
        <sw_mixer_target name="sw_mixer_music" ch_in="2" 
ch_out="16" aurisys_on="1"> 
            <sw_mixer_source name="sw_mixer_playback0"> 
                <profile ch_in="2" ch_out="2" 
aurisys_on="0" 
                         ch_map="0x5555,0xaaaa"/> 
            </sw_mixer_source> 
       </sw_mixer_target> 
 
 
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
 
• 对于 sw_mixer_source，每个 profile 有如下属性 
– ch_in：Task 的算法输入 channel 
– ch_out：Task 的算法输出 channel 
– aurisys_on：是否开启 Task 算法，仅对 pb0~pb15 在 ch_in = ch_out 时配置成 0 可生效 
– ch_map：source 在向 sw_mixer_target 映射时候的 channle map 信息，是一个数组，数组中的 index 表示
source 的 channel index，对应的值是一个 16bit 的 value，每一个 bit 表示是否向 target 对应 channel 映射。
如 ch_map="0x5555,0xaaaa" ，ch_map[0] = 0x5555，表示 source 的 channel 1 映射数值为 0x5555，对应 2 进
制为 0101010101010101，则向 target 的 1,3,5,7,9,11,13,15 channel 映射。ch_map[1] = 0xaaaa，对应二进制
位 1010101010101010，source 的 channel 2 向 target 的 2,4,6,8,10,12,14,16 映射. 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 
对 source task，一般其输入 channel 是由数据原始端给出的，如 audioflinger 送下来，可能会是任意 channel 数量，
所以在 source task 中，XML 可配置支持不同的 ch_in 的多种 profile，可以根据不同的 ch_in 选择不同的 ch_out, 
ch_map 等信息。例如，如下 task pb14 具有两个 profile，当进入 adsp 给到 task pb14 的 channel 是 2ch，则使用第
一个 profile，如果是 12ch，则使用第二个。 
        <sw_mixer_source name="sw_mixer_playback14"> 
            <profile ch_in="2" ch_out="2" aurisys_on="0" 
                  ch_map="0x5555,0xaaaa"/> 
            <profile ch_in="12" ch_out="12" aurisys_on="0" 
                 
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
 
对应的数据通路流程如图 6-8： 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 
图 6-8. DSP 任务配置 
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
MT8668 Android Audio 
User Manual 
Confidential B 
7 音频 HAL 软件混音器 
Audio HAL SW Mixer 的作用和 ADSP 内部的 SW mixer 一样，它通过在音频 HAL 中执行通道映射来混合来自多个播放
总线的数据，然后通过一个 PCM device node 播放出去。 
 
7.1 音频 HAL 软件混音器代码架构 
Audio HAL SW Mixer 功能需求如下：支持多个 playback bus 共用一个 PCM 硬件节点进行输出，允许多个音频源同时
工作，并在控制和数据流程逻辑上互不干扰。同时，系统可支持多组混音器，且各组之间独立运行，互不影响。  
 
 
图 7-1. 音频 HAL 软件混音器软件架构 
 
核心文件说明如下： 
 
• AudioALSAPlaybackBusMixer.cpp 
– 该文件继承自 playbackHandlerBase，用于实现 Source 的 PlaybackHandler 功能； 
– 类中包含全局变量 TargetList 和 TargetLock，用于统一管理多组 Mixer 的 Target 资源，Source 可通过 MixerId 
查询对应的 Target Bus，并获取 Target 实体。 
• audio_sw_mixer_auto.c             
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
MT8668 Android Audio 
User Manual 
Confidential B 
– 负责混音功能的实现，包含混音操作的主要逻辑（如 Source/Target 的 attach、write 以及混音线程的实现
等）。 
• audio_process_utility.c    
– 实现混音及 Channel Map 的核心功能，主要负责单个 Source 的混音及其 Channel Map 操作。 
– 与 audio_sw_mixer_auto.c 配合，实现多路混音功能。 
• auto_policy_config.xml 
– 用于定制 Mixer 的混音通路策略，通过配置文件灵活调整混音流程。  
 
7.2 音频 HAL 软件混音器 XML 配置指南 
如果客户有定制化需求，可以通过修改 XML 配置文件来实现，主要涉及 audio_policy_configuration.xml 和 
auto_policy_config.xml 两个文件： 
 
• audio_policy_configuration.xml 
– 文件名称可能因不同项目而有所差异。 
– 该文件用于声明 Mixer 的 Source Bus 到 AudioFramework，确保 APP 能够正常访问和播放音频。 
• auto_policy_config.xml 
– 文件名称可能因不同项目而有所差异。 
– 该文件由 AudioHAL 读取，用于定制 HAL 层的软件混音器（SW Mixer）。 
– 可在此文件中配置 SW Mixer 的 Source Bus、Target Bus 以及 Channel Map，实现灵活的混音通路定制。 
 
 先明确相关应用场景的实际需求 
例如：某应用场景需要在 HAL 层将 BUS80、BUS81 和 BUS82 三路音频进行混音，并将混音后的音频输出到 BUS90。
 
图 7-2. 音频 HAL 软件混音器示意图 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 声明 BUS80/81/82 给 AudioPolicyManager 及 audioFlinger 
• 配置 xml：audio_policy_configuration.xml 
1. 在 attachedDevices 标签中添加： 
 
2. 在 mixPorts 标签中增加对应的 mixport 的配置，并将 role 设置为 source。此配置主要用于在 AudioFlinger 中创
建混音线程： 
 
3. 在 devicePorts 标签中，声明 Audio HAL 支持的 3 个 BUS。 
4. 在 routes 标签中，将 mixPort 与 devicePort 进行绑定： 
 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
 配置 Audio HAL 的 Mixer 通路的路由并配置其为 Target 
• 配置 xml：auto_policy_config.xml 
1. 在 bus_stream_maps 标签中，配置 Target 的 bus 设置。 
 
注：Target 可以设置为通过 AFE 或 ADSP，请根据实际需求进行设置。 
2. 在 hal_sw_mixer_routes 标签中，配置 mixer 的路由通路。 
 
注意： 
1. 配置格式是以 Target 标签为父节点，Source 为子节点。 
2. 当前作为 Source 和 Target 的 Bus 尚未调试 Aurisys 功能，因此 aurisys_on 字段需统一设置为 0 。 
3. 同一配置中 ch_in 与 ch_out 需要保持一致（目前 aurisys 不支持 ch_in 与 ch_out 不一致的情况） 
▪ Target  中的 ch_out 指定最终混音输出的声道数 
▪ Source 的 profile 以 ch_in 作为选择条件。Source 可有多种 profile，每个 profile 的 ch_in 标识该 source 的声道数 
4. Source profile 中的 ch_map 配置 
▪ ch_map 用于配置混音的声道映射，其数组长度等于 ch_in 的值。 
▪ ch_map 数组的下标（index）对应 Source 的声道顺序，例如 ch_map[0] 表示 Source 的第 1 声道。 
▪ ch_map 的每个值表示 Target 的声道使能情况，每一位对应 Target 的一个声道（从低位到高位，依次为 Target 的声
道 1 ~ N）。 
例如， ch_in = 2ch 时，ch_map 设置为 0x1, 0x2 ，则： 
0x1 (0b0000 0001）表示 Source 的第 1 声道混音到 Target 的第 1 声道。 
0x2（0b0000 0010）表示 Source 的第 2 声道混音到 Target 的第 2 声道。 
举例说明： 
1. Source 是 2 声道，Target 是 8 声道的情况，如果 ch_map=“0x0f,0xf0” 的解析： 
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
MT8668 Android Audio 
User Manual 
Confidential B 
o 0x0f（0b0000 1111）：Source 的第 1 声道混音到 Target 的第 1、2、3、4 声道； 
o 0xf0（0b1111 0000）：Source 的第 2 声道混音到 Target 的第 5、6、7、8 声道。 
2. Source 是 2 声道，Target 是 8 声道的情况，如果 ch_map=“0xff,0xff” 的解析： 
o 0xff（0b1111 1111）：Source 的第 1 声道混音到 Target 的全部 8 个声道； 
o 0xff（0b1111 1111）：Source 的第 2 声道同样混音到 Target 的全部 8 个声道。 
如果 Target 的每个声道都配置了 Source 的 ch1 和 ch2，则 Target 的每一个声道数据最终都是由 Source 的 ch1 
和 ch2 混音生成的。 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
8 添加音频编 Codec 驱动 
在 MT8668 公版中，集成了 ES8311 和 AK7709 两颗 codec，客户可以参考这两颗 codec 进行客制化芯片的 bring 
up。公版 codec 的具体连接方式为：AK7709 外接在 I2SOUT6/I2SIN6 上，而 ES8311 接在 I2SOUT2/I2SIN2 上。以下是
以 ES8311 codec 驱动为例的相关改动说明： 
 
1. 将 ES8311 的源代码添加到 sound/soc/codecs 目录中。同时，在源代码中增加 BUILD.bazel 文件。 
  
 
BUILD.bazel 内容如下： 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
2. 在 dts 中添加 es8311 设备节点。 
 
 
3. 在 ko table 中添加 snd-soc-es8311.ko。 
/device/mediatekproject/<project_name>/ko_order_table.csv 
 
 
4. 在 machine driver 中适配 ALSA DAI link： 
/sound/soc/mediatek/mt6881/mt6881-mt6368.c 
 
 
其中，在 COMP_CODEC 中，name 填写<驱动名>.<总线编号>-<地址>；dai_name 填写 codec driver 中的 dai 
name，也就是 snd_soc_dai_driver 结构体中的 name 字段. 
 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
9 总结 
本章主要介绍 Aurisys 音效框架，方便用户在适当位置整合所需算法。同时，面对 bus 场景音频通路的客制化需
求，介绍了 ADSP 中音频 mix 和 channel map 的配置方法。 
除了上述功能外，还可实现其他应用。但考虑到 DSP 资源有限，并发情况应谨慎设计。请访问联发科网站和客户
支持网站 (MediaTek On-Line，MOL) 以获取更多信息。 
 
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
MT8668 Android Audio 
User Manual 
Confidential B 
附录 MTK MOL 
MTK 提供了一个名为 MTK 在线的论坛，用于分享常见问题、电子课程和重要公告 ：http://online.mediatek.com。 
您可以输入关键字来搜索相关的常见问题和电子课程；可以浏览文档树以进入相关的音频常见问题和电子课程 。 
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
MT8668 Android Audio 
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
# SRC0083 MT8668_Android_BT_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_BT_User_Manual_CN_V1.0.pdf

SHA-256：58bac8d6e11b80ddc418a00bf7d1489a851b4f68f8d5aa74005ab848f0f6441c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0083.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2025-12-31
MT8668 Android BT User Manual 
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
MT8668 Android BT 
 User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2025-12-31 Zhigao Li 正式版 
 
  
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
MT8668 Android BT 
 User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 BT ·············································································································································································· 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 BT 缩略词 ····················································································································································· 5 
1.2 架构/进程概述 ························································································································································ 5 
 架构介绍 ······················································································································································ 5 
1.3 配置/客制化指南 ···················································································································································· 6 
 Profile 配置 ··················································································································································· 6 
1.4 常见问题/故障排除 ················································································································································ 7 
 支持的蓝牙功能集和认证 ··························································································································· 7 
 BQB ······························································································································································· 7 
 蓝牙问题提交流程 ······································································································································ 8 
 蓝牙音乐 (A2DP) 相关问题 ························································································································· 9 
 蓝牙扫描相关问题 ···································································································································· 10 
 蓝牙连接相关问题 ···································································································································· 11 
 蓝牙声音相关问题 ···································································································································· 12 
附件一 附加条款 ····························································································································································· 13 
 
 
图片目录 
图 1-1. BT 架构··········································································································································································· 6 
图 1-2. BT profile 配置 ······························································································································································· 7 
图 1-3. 问题提交流程 ································································································································································ 9 
 
表格目录 
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
MT8668 Android BT 
 User Manual 
Confidential B 
表 1-1. 缩略词 ··········································································································································································· 5 
 
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
MT8668 Android BT 
 User Manual 
Confidential B 
1 BT 
1.1 概述 
 简单介绍 
本章节介绍蓝牙（Bluetooth，BT）基本功能以及其常见问题的调试方法。 
MT8668 搭配的 BT 芯片是 MT6637。 
 
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
MT8668 BT 架构如下图： 
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
MT8668 Android BT 
 User Manual 
Confidential B 
 
图 1-1. BT 架构 
 
1.3 配置/客制化指南 
 Profile 配置 
BT 有不同的应用场景，如 a2dp sink/hfp client/avrcp ct 等 profile，Android B 版本支持配置不同的 profile 来满足不同
的应用场景，通过在 device-vext.mk 中添加 PRODUCT_PROPERTY_OVERRIDES 的方式配置，公版文件路径为： 
device/mediateksample/<project name>/ device-vext.mk 
device/mediatek/<chip name>/ device-vext.mk 
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
MT8668 Android BT 
 User Manual 
Confidential B 
 
图 1-2. BT profile 配置 
 
1.4 常见问题/故障排除 
 支持的蓝牙功能集和认证 
• MT8668 + MT6637，controller 和 MTK stack 目前可以通过蓝牙 6.1 认证。 
• 车机大部分客户使用的是第三方 stack，需要同第三方 stack 确认版本。 
 
 BQB 
1.4.2.1 什么是 BQB 
BQB：全称是 Bluetooth Qualification Body，一般称为蓝牙认证。 
 
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
MT8668 Android BT 
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
3. 若是 MTK 相关问题，提交 IDH 复现；若是 IDH 自己实验室的问题，先把问题复现出来。  
4. 若 IDH 需要 MTK 协助，再提交 CR。 
 
 蓝牙问题提交流程 
如果使用的是第三方 Stack，需要第三方 Stack 第一手分析，如果分析为 MTK 的问题，请提 CR，需要提供对应 Log
（抓取方式请咨询三方 Stack）以及告知问题时间点，并附上第三方 Stack 的分析过程。 
 
BT 问题提交 SOP 请参考下图： 
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
MT8668 Android BT 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Android BT 
 User Manual 
Confidential B 
 蓝牙扫描相关问题 
1.4.5.1 症状 
• 搜索不到对方设备 (Inquiry fail/LE scan fail) 
• 无法被对方设备搜索到 (Inquiry scan/LE adv abnormal) 
 
1.4.5.2 检查点 [Stack check] 
• 查询不到设备： 
HCI log 中是否有开启查询的命令？ 
Yes => MTK check 
 
• LE 扫描不到设备： 
扫描不到期间的 HCI log 是否有开启 BLE scan 的命令？ 
Yes => MTK check 
 
• 查询到某设备的时间太长（performance）： 
描述清楚查询的起止时间，期间 host 是否有下 inquiry 的命令？ 
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
MT8668 Android BT 
 User Manual 
Confidential B 
(1) BT FW log+ hci log + air log  
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
problem …)，再给出相关分析和 log 请 MTK 检查。 
 
• MTK check log 需求：  
BT FW log+ hci log + air log  
提供问题发生的具体时间点 
 
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
MT8668 Android BT 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 Android BT 
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
# SRC0084 MT8668_Android_Camera_Turbo_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_Camera_Turbo_User_Manual_CN_V1.0.pdf

SHA-256：4330ba7eddf6ea04d40083018799771a5afe0e05e2e851a4c3d325ac256c4934

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0084.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2025-12-31
MT8668 Android Camera Turbo  
User Manual 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8668 Android Camera Turbo 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2025-12-31 Zhenglei.Zhang 正式版 
 
  
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8668 Android Camera Turbo 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 Camera Turbo ···························································································································································· 4 
1.1 Camera 架构概述 ···················································································································································· 4 
1.2 Camera Turbo ··························································································································································· 5 
 架构 ······························································································································································ 5 
 控制流程 ······················································································································································ 6 
附件一 附加条款 ······························································································································································· 8 
 
 
图片目录 
图 1-1. Camera 架构概述 ·························································································································································· 4 
图 1-2. Camera MW 架构 ·························································································································································· 5 
图 1-3. MW 类图 ········································································································································································ 6 
图 1-4. MW 类图 ········································································································································································ 7 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Android Camera Turbo 
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
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 5

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8668 Android Camera Turbo 
User Manual 
Confidential B 
• 核心层（Core）：是 MW 的核心层。它主要与驱动程序通信，发送请求并获取结果，最后通过接口层回调到  
APP。 
 
1.2 Camera Turbo  
 架构 
 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Android Camera Turbo 
User Manual 
Confidential B 
 控制流程  
 
图 1-3. MW 类图 
 
图 1-3 主要是入口层和定制层之间的类流交互图。主要是上层通过  CameraProvider 的 open 接口获取 Camera，
Camera 通过调用 Camera TurboEngine 获取 CustomizationManager。CustomizationManager 是定制层的管理器，通过
它实现对客户定制行为的管理。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Android Camera Turbo 
User Manual 
Confidential B 
 
图 1-4. MW 类图 
 
接口层（IF layer）与核心层（CORE）之间的交互逻辑主要是上层的 CameraProvider 的 open 接口将调用 
NativeCameraManager。NativeCameraManager 分配可以在底层操作的 NativeCamera。每个 NativeCamera 具有管线
属性，这决定了每个 NativeCamera 实际运行的流程。Camera 的配置会创建一个新的 CameraSession。
CameraSession 创建自己的 Pipeline。连接的 ImageProc 保存在 Pipeline 中。ImageProc 创建相应的 ImageNode。每个 
CameraSession 都有自己的 ImageProc 列表。用户可以在 ImageProc 中执行定制行为。ImageProc 使用 回调接口
MediumHandler。ImageNode 的回调会使用 ImageProc。 
 
 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Android Camera Turbo 
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
# SRC0085 MT8668_Android_DVR_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_DVR_User_Manual_CN_V1.0.pdf

SHA-256：2faacfd1b73865cbcc5260d578dd6811b0c71ddb0ea23f8800672a1d8e69c6ad

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0085.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Android DVR User Manual 
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
MT8668 Android DVR 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 徐 翔 正式版 
 
  
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
MT8668 Android DVR 
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
附件一 附加条款 ····························································································································································· 15 
 
 
图片目录 
图 1-1. DVR 架构 ········································································································································································ 6 
图 1-2. DVR 的整体流程 ···························································································································································· 7 
图 1-3. MP4 writer 流程 ···························································································································································· 7 
图 1-4. 子码流的流程 ································································································································································ 9 
 
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
MT8668 Android DVR 
User Manual 
Confidential B 
1 DVR 
1.1 概述 
 基本概要 
本章节主要介绍 MT8668 DVR 的架构和一些常见的 DVR 问题分析。 
 
DVR 全称 Digital Video Recorder，是 SPM 平台自带的录制视频功能，支持 mp4、ts 录制以及 H264 数据回调。 
 
 缩略词 
缩略词 全称 释义 
API Application Programming Interface 应用程序编程接口 
DVR Digital Video Recorder 行车记录仪 
SPM Smart Platform 智能平台 
 
 主要功能 
1. 多路录制 
一路 camera 可以同时录制生成多个视频文件（包括 H264 callback） 
 
2. 文件分段 
可以动态设置录制文件时长，比如 1 分钟、3 分钟、5 分钟等。分段条件：while (Video duration >= max duration) 
– 如果 audio duration 先到，会等待 video duration。 
– 如果 video duration 先到，会分段。 
 
3. 主码流 
落盘的同时回调一份 H264 或 ts 数据。 
开启方法：在 startRecord 时带入参数：VIDEO_FRAME_MODE_DUAL_SOURCE 或 
VIDEO_FRAME_MODE_DUAL_PACKET  
 
4. 子码流 
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
MT8668 Android DVR 
User Manual 
Confidential B 
不落盘，只回调一份 H264 数据或 ts 数据。 
开启方法：在 startRecord 时带入参数：VIDEO_FRAME_MODE_SOURCE 
 
5. 文件保护 
当触发碰撞时，会自动保存一段时间视频到指定目录下。 
 
6. 打点保护 
用于录制当前前后一段时间数据（比如前后 10 秒）到指定目录下。 
 
7. 循环录制 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Android DVR 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 Android DVR 
User Manual 
Confidential B 
 
图 1-2. DVR 的整体流程 
 MP4 Writer 流程 
下图是 MP4 writer 流程，与 TS 流程没有太多差异，不同的是 TS 因为没有头文件信息，会写一帧 video 再写一帧
audio，会根据 video 和 audio 的 PTS，选出小的 PTS 把 index 返回，去判断接下来是写 video 还是 audio。 
 
 
图 1-3. MP4 writer 流程 
 
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
MT8668 Android DVR 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Android DVR 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Android DVR 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Android DVR 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8668 Android DVR 
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
        </EncoderProfile> 
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
MT8668 Android DVR 
User Manual 
Confidential B 
 
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
Line 436043: 06-10 18:14:53.203727   611  2971 I CarCamDeviceClient: [0][notifyStatusChanged] 
usage = 5, status=3, arg1=6, arg2=comment=sdcard_damaged , arg3:0 
Line 499031: 06-10 18:15:43.163869   611  2969 I RecorderMgr: [Cam_1#Rec_0][recordMgrNotify] 
param: comment=sdcard_damaged 
Line 499034: 06-10 18:15:43.163988   611  2969 I CarCamDeviceClient: [1][notifyStatusChanged] 
usage = 5, status=3, arg1=6, arg2=comment=sdcard_damaged , arg3:1 
Line 505241: 06-10 18:15:48.164704 611 3061 E MPEG4WriterSmp: 
[Cam_1#Rec_0][bitrateCheckThread] [1]preBitrate:500000, buffer so large,stop record, 
mNotifySdcardDamaged:1 
 
根本原因：  
SD 卡损坏或者是其它原因导致读写速度变慢，数据积累过多后 DVR 报错。 
 
解决方法： 
请客户更换 SD 卡测试，并在触发 mNotifySdcardDamaged 消息传给上层时，参考 CarcoderDemoActivity.java 中注册
的 Videocallback，对 sdcard_damaged 消息实作 stop record，预防内存泄漏。 
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
MT8668 Android DVR 
User Manual 
Confidential B 
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
vold 发出这个广播，等待停止录制结束，这样 vold 不会去杀 smartplatformserver。 
 
 
 
 
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
MT8668 Android DVR 
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
# SRC0086 MT8668_Android_FBE_Debug_SOP_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_FBE_Debug_SOP_CN_V1.0.pdf

SHA-256：bfd28e7774c576b6c9780c11eae628e4154e09f1f930d279587937c11fc2bcb8

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0086.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2025-12-15 
MT8668 Android FBE Debug SOP 
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
          MT8668 Android FBE  
Debug SOP 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2025-12-15 晏晓阳 正式版 
 
  
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
          MT8668 Android FBE  
Debug SOP 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
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
附件一 附加条款 ····························································································································································· 18 
 
图片目录 
图 1-1. 开机 init 流程图 ···························································································································································· 4 
 
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
          MT8668 Android FBE  
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
start vold 
2. late-fs 
early-hal (keymaster) 
mount_all –late 
  
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
          MT8668 Android FBE  
Debug SOP 
Confidential B 
3. post-fs-data 
installkey /data 
init_user0 
 
 early-fs 
vold 会在on early-fs 阶段启动，后续 FBE 加解密的动作都将由 vold 发起。 
 
 late-fs 
1． 在on late-fs 阶段，主要关注两个动作： 
early-hal (keymaster)：这个动作会启动 keymaster，为后续加解密做准备。 
mount –late：这个动作主要用于挂载 userdata 分区，FBE 加解密正是针对 userdata 分区进行的。 
 
2． mount userdata ：首先尝试挂载userdata 分区，并调用 prepare_fs_for_mount 进行准备。 
 
  
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
          MT8668 Android FBE  
Debug SOP 
Confidential B 
3． 上面 mount userdata 的结果有两种情况： 
首次开机（刷机或执行 factory reset 之后）：在这种情况下，挂载操作返回成功，表示分区没有加密，首次尝
试挂载时就成功了（mret=true）。此时需要判断是否需要加密，因为在首次开机时分区未加密，挂载成功
后需要先卸载分区，然后进入加密流程。 
非首次开机：经过首次开机后，data 分区处于加密的状态。此时检查文件系统会返回错误，出现 invalid magic 
的错误。这是正常现象，并不是文件系统损坏的标志。 
 
 
卸载分区后，会进入 vdc encryptFstab 流程。需要注意的是，无论是对分区进行加密还是解密，最终调用的 API
都是相同的。 
“crypts”  encryptFstab   ：对分区做加密 
“crypts”  mountFstab  ：对分区做解密 
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
          MT8668 Android FBE  
Debug SOP 
Confidential B 
 
 
上述流程中，对 userdata 进行加密和解密最终都会进入以下流程： 
 
 
从上述流程进入以下步骤时，如前所述，加密和解密最终都会调用 fscrypt_mount_metadata_encrypted 函数。
区别在于第三个参数，该参数用于指示是否需要加密。 
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
          MT8668 Android FBE  
Debug SOP 
Confidential B 
 
 
4． 从上述位置进入vold 的system/vold/MetadataCrypt.cpp 中的fscrypt_mount_metadata_encrypted 函
数。在这个流程中，主要有三个步骤： 
Step 1 和 Step 2：根据是否需要加密来决定设备是加密 key 还是解密 key。 
Step 3：创建用于加解密的设备。 
 
 
创建完加解密设备后，调用 mount_via_fs_mgr 并带入crypto_blkdev。 
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
          MT8668 Android FBE  
Debug SOP 
Confidential B 
 
 
这个流程会进入 FS 的挂载过程。
 
 
5. 最后，流程回到fs_mgr 中的fs_mgr_do_mount。此时，如果blk_device 需要解密，系统会先进行解密，确
保读取到的magic 是正确的，然后进入第二步的__mount。 
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
          MT8668 Android FBE  
Debug SOP 
Confidential B 
 
 
 post-fs-data 
在 data 分区挂载成功后，系统会进入 post-fs-data 阶段。在init.rc 中，会执行 installkey /data 的操作，
这个操作会调用do_installkey 函数，并进入VDC enablefilecrypto 的流程。 
 
 
最终，这个流程会进入 vold 中的fbeEnable()函数。 
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
          MT8668 Android FBE  
Debug SOP 
Confidential B 
 
 
一路执行后，流程会进入 vold 中的相关 API。
 
 
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
          MT8668 Android FBE  
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
4. /dev/block/by-name/userdata /data f2fs     
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
5. getprop | grep crypt 
 
如下情况表示 FBE 已开启。 
6. [ro.crypto.metadata.enabled]: [true] 
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
          MT8668 Android FBE  
Debug SOP 
Confidential B 
7. [ro.crypto.state]: [encrypted] 
8. [ro.crypto.type]: [file] 
9. [ro.crypto.uses_fs_ioc_add_encryption_key]: [true] 
10. [ro.crypto.volume.filenames_mode]: [aes-256-cts] 
 
如下情况表示 FBE 未开启。 
11. [ro.crypto.state]: [unsupported] 
12. [ro.crypto.volume.filenames_mode]: [aes-256-cts] 
 
 查看 CE 文件是否为密文 
1. 查看当前是哪个 user。 
13. am get-current-user 
14. 10 
2. 设置锁屏密码之后重启。 
3. 重启进到开机密码的界面，不要输入密码。 
4. 通过 shell 命令访问该 user 的 CE 数据。 
ls /data/user/10/ （此处以 user 10 示例） 
5. 如果 FBE 正常开启，则在未解锁的状态下，看到的都是密文，说明已加密，如下图：  
 
 
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
          MT8668 Android FBE  
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
– 文件系统损坏：如果在上次关机时 userdata 分区正在写入数据，而系统突然断电，可能导致文件系统损坏，
从而影响挂载和解密过程。 
3. 在 metadata 解密成功后，userdata 分区可以成功挂载。接下来，在 FBE 启用阶段，系统会检测到 FBE 已开
启，并执行 installkey 操作。在这个过程中，系统会将 FBE Class Key 和 Keymaster Key 以 KeyBlob 的形式存储到
userdata 分区。当系统非首次启动时，会从 userdata 分区提取 FBE Class Key 和 Keymaster Key 对应的
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
          MT8668 Android FBE  
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
（recovery mode）。在这种情况下，用户可以通过恢复模式执行恢复出厂 设置（factory reset）来解决问题。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
          MT8668 Android FBE  
Debug SOP 
Confidential B 
 后续开机解密流程，如果异常如何恢复， 怎样确认是加密问题还是解
密问题，或是分区被破坏 
分区损坏是导致挂载失败的常见问题之一。解密失败通常与 Keymaster 的错误有关。为了诊断这些问题，可以在
开机日志中查找与 keystore 或keymaster 相关的关键字，查看是否有相关的错误日志。 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
          MT8668 Android FBE  
Debug SOP 
Confidential B 
4 其他网上资料 
因为 FBE 是 Android 原生的功能，网上有很多资料，以下是一些推荐的总结资料：  
1. https://source.android.com/docs/security/features/encryption/file-based?hl=zh-cn 
2. https://blog.csdn.net/cs_tech/article/details/127579028 
3. https://blog.csdn.net/feelabclihu/article/details/131016357 
 
MediaTek Confidential
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
          MT8668 Android FBE  
Debug SOP 
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
# SRC0087 MT8668_Android_GPU_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_GPU_User_Manual_CN_V1.0.pdf

SHA-256：defe098f947a7a04a09734350d5fe0bbb21fc5ca46d4eaf55605eda07944fc03

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0087.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.   
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Android GPU User Manual 
 
 
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
MT8668 Android GPU 
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
MT8668 Android GPU 
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
 Arm Mali-G625 架构及功能 ························································································································· 6 
1.3 常见问题/故障排除 ················································································································································ 7 
 GPU 渲染分析 ·············································································································································· 7 
 GPU 性能分析 ·············································································································································· 8 
附件一 附加条款 ····························································································································································· 11 
 
 
图片目录 
图 1-1. Android 图形框架 ························································································································································· 5 
图 1-2. Arm Mali-G625 架构 ······················································································································································ 6 
图 1-6. Streamline 使用示例 ····················································································································································· 9 
 
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
MT8668 Android GPU 
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
MT8668 Android GPU 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8668 Android GPU 
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
API Support • OpenGL® ES 1.1, 2.0, 3.2 
• Vulkan 1.3 
Full support for next-generation and legacy 
2D/3D graphics applications. 
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
MT8668 Android GPU 
 User Manual 
Confidential B 
Features Value Description 
• OpenCL™ 1.2, 2.1, 3.0 Full 
Profile 
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
出现屏幕绘制异常时，一般可以从三个方面进行分析，分别是 SF/HWC/Display、GPU 和 APK。判断是否为
SF/HWC/Display 问题，首先可以查看 log 中是否有 display 相关错误，根据 log 进行下一步分析；其次平台有两种叠
图方式，可以通过 OVL 或者 GPU 进行叠图，可以通过关闭 HW OVL，强制使用 GPU 进行叠图，查看异常情况；最
后可以使用 screenrecord 命令进行录屏，查看录屏结果是否也为渲染异常。如果判断为 SF/HWC/Display 问题可以
找相关模块负责人进行下一步分析。 
 
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
MT8668 Android GPU 
 User Manual 
Confidential B 
如果判断为 GPU 问题，在 log 中搜索是否有 Mali/EGL/GLES/HWUI 等关键字相关的错误，根据错误进行下一步分
析。也可以使用一些调试工具，例如 RendorDoc，这些工具可以帮助分析问题。也可以一些做有关 GPU 的对比实
验。 
 
APK 问题需要请 APK 共同分析，是否绘制时使用 GL 接口的问题，或者传入绘制的纹理不对等情况。 
 
1.3.1.1 GPU 相关对比实验 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8668 Android GPU 
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
 
图 1-3. Streamline 使用示例 
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
MT8668 Android GPU 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Android GPU 
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
# SRC0088 MT8668_Android_IPO_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_IPO_User_Manual_CN_V1.0.pdf

SHA-256：a8a1aa448b88aab3698bd7624623364b41f2b918ad41c5779638d0bf504be2d0

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0088.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2026-01-28
MT8668 Android IPO User Manual 
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
MT8668 IPO 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 周立 正式版 
 
  
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
MT8668 IPO 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 5 
表格目录 ··········································································································································································· 5 
1 IPO 概述 ···································································································································································· 6 
1.1 基本介绍 ··························································································································································· 6 
1.2 为什么需要 IPO ················································································································································· 6 
2 名词解释 ··································································································································································· 7 
3 架构概述 ··································································································································································· 8 
3.1 Android IPO 架构 ·············································································································································· 8 
3.2 Android 系统中硬件电源管理的两种情形 ······································································································· 8 
3.3 各硬件对应进出 IPO 的电源管理方案 ·············································································································· 9 
4 配置/客制化指南 ···················································································································································· 14 
4.1 HU 端配套修改 ··············································································································································· 14 
4.2 代码改动介绍 ················································································································································· 14 
4.3 USB 连接 ························································································································································· 15 
4.4 如何客制化进入和退出 IPO 过程动画 ············································································································ 15 
4.5 自定义 IPO 白名单 ·········································································································································· 15 
4.6 在退出 IPO 时，杀死进程 ······························································································································ 16 
4.7 进入/退出 IPO 时，通知 Java 进程 ················································································································ 17 
4.8 进入/退出 IPO 时，如何通知 Native 进程 ····································································································· 17 
5 常见问题解答 ························································································································································· 18 
5.1 关闭 IPO 时产生的关键日志 ··························································································································· 18 
5.2 用命令开启 IPO 时产生的关键日志 ··············································································································· 18 
5.3 用电源键开启 IPO 时产生的关键日志 ············································································································ 19 
5.4 因碰撞开启 IPO 时产生的关键日志 ··············································································································· 19 
5.5 进入 IPO 后，如何排查功耗高的原因 ············································································································ 19 
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
MT8668 IPO 
User Manual 
Confidential B 
5.6 IPO 调试命令说明 ··········································································································································· 19 
附件一 附加条款 ····························································································································································· 20 
 
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
MT8668 IPO 
User Manual 
Confidential B 
图片目录 
图 3-1. IPO 架构 ········································································································································································· 8 
图 3-2. IPO 关机流程 ······························································································································································· 12 
图 3-3. 退出 IPO 开机流程 ······················································································································································ 13 
图 4-1. USB 模式切换 ······························································································································································ 15 
图 4-2. 动画客制化·································································································································································· 15 
图 4-3. Hard code 方式设置白名单 ········································································································································ 16 
图 4-4. 白名单示例代码 ·························································································································································· 16 
图 4-5. 通知 Native 进程的示例代码 ····································································································································· 17 
 
表格目录 
表 2-1. 名词解释········································································································································································ 7 
表 3-1. 各硬件进出 IPO 的电源管理方案 ································································································································ 9 
表 3-2. 不同模式下 CPU 和进程的状态 ································································································································· 10 
表 3-3. IPO 接口说明 ······························································································································································· 11 
表 4-1. IPO 相关代码修改 ······················································································································································· 14 
 
 
  
 
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
MT8668 IPO 
User Manual 
Confidential B 
1 IPO 概述 
1.1 基本介绍 
本文档主要介绍了 MT8668 IPO 快速开机功能并提供了 IPO 常见问题的分析方法。 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8668 IPO 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 IPO 
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
• 若没有人持有 WakeLock，系统进入 Suspend 状态时会调用每个 HW Driver 的 Suspend()。 
• 系统被唤醒，进入 Resume 状态时也会调用每个 HW Driver 的 Resume()。 
• HW Driver 独立实现 Suspend/Resume 函数来自行控制上电/掉电。 
 
以上两种情形对应的电源管理方案如下： 
1. IPO 关机时，触发所有使用者放弃访问硬件设备：第 1 阶段掉电。 
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
MT8668 IPO 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 IPO 
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
表 3-2. 不同模式下 CPU 和进程的状态 
 MT8668 Android 
 CPU T-Box 进程 Java Core 进程/Native 进程 任务进程 
全工作模式 Early Suspend/ 
Suspend/Wakeup Suspend/Running Suspend/Running Suspend/Running 
半工作模式 Early Suspend Running Running Killed 
休眠模式 Suspend Suspend Suspend Killed 
IPO 假关机状态 
 
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
MT8668 IPO 
User Manual 
Confidential B 
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
MT8668 IPO 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 13

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 13 
MT8668 IPO 
User Manual 
Confidential B 
 
图 3-3. 退出 IPO 开机流程 
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
MT8668 IPO 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8668 IPO 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8668 IPO 
User Manual 
Confidential B 
• 使用 Hard code 方式设置白名单，请参考下图： 
 
图 4-3. Hard code 方式设置白名单 
 
• 使用 Dynamic 方式设置白名单： 
setprop persist.ipo.shutdown.process.wl 
 
如/com.xx.yy/com.zz.ww，请参考下图： 
 
图 4-4. 白名单示例代码 
 
4.6 在退出 IPO 时，杀死进程 
配置 persist.ipo.prebootkill.list。 
 
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
MT8668 IPO 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8668 IPO 
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
03-07 08:30:59.161  1188  1401 D CarTbox : [IpoManagerService]forceStopKillPackages //AMS kill process 
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
MT8668 IPO 
User Manual 
Confidential B 
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
检查是否存在 partial WakeLock。 
2. 检查 UART 日志，排查系统被谁唤醒。 
3. cmd 命令：cat /sys/kernel/debug/wakeup_sources 
检查 Kernel wakeup_sources。 
 
5.6 IPO 调试命令说明 
1. 默认 Kernel 开机十几秒后，UART 不会打印日志，输入以下命令可以让 UART 日志持续打印（重新开机也会生
效）：adb shell setprop persist.vendor .uartconsole.enable 1 。 
2. 进 IPO 会断开 USB adb 连接，如果不想断开，可以开机后输入以下命令： 
adb shell setprop sys.ipo.usb 1 
3. 进入 IPO 命令：adb shell service call power 56 
4. 退出 IPO 命令：adb shell service call power 57 i32 1 
 
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
MT8668 IPO 
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
# SRC0089 MT8668_Android_SDCard_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_SDCard_User_Manual_CN_V1.0.pdf

SHA-256：fefa132a945d047b8e41bd500838416bfcd5739f1f1241d2c0db18ed12ca1eab

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0089.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Android SDCard  
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
MT8668 Android SDCard 
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
MT8668 Android SDCard 
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
 MT8668 SDCard 特征 ··································································································································· 5 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8668 Android SDCard 
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
来，具有高记忆容量、快速数据传输率、极大的移动灵活性和 良好的安全性，被广泛应用于便携装置上。在 SD3.0
协议中，SD 卡的理论最大容量可达 2TB，理论最大读写速度可达 104MB/s。 
 
SD 卡主要引脚和功能描述如下： 
(1) CLK： 时钟信号，控制器或 SD 卡在每个时钟周期传输一个命令或数据位，在 UHS-I 速度模式下，最高可达
208MHz； 
(2) CMD： 命令和响应复用引脚，命令是由控制器发给 SD 卡，响应是 SD 卡对控制器发送的应答； 
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
MT8668 Android SDCard 
User Manual 
Confidential B 
(3) DAT0~3： 数据线，数据可以从 SD 卡传向控制器 (read)，也可以从控制器传向 SD 卡 （write）； 
(4) VDD： SD 卡的供电脚，通常配置 3.3V 电压，协议规定的范围 2.7V~3.6V； 
(5) CD： SD 卡插入检测，通常借由 SD 卡座机械结构实现有/无卡时 GPIO 电平变化。 
 
 
图 1-1. UHS-I 卡初始化流程 
 
 MT8668 SDCard 特征 
(1) 兼容 SD3.0 协议标准 
(2) 支持 Basci DMA 和 Descriptor DMA 模式 
(3) 支持 Bus speed mode: Default Speed/High Speed/SDR12/SDR25/SDR50/SDR104/DDR50  
(4) 支持 1/4bits bus width 
 
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
MT8668 Android SDCard 
User Manual 
Confidential B 
1.3 配置/客制指南 
 内核配置 
(1) 启用 SDCard 支持 
CONFIG_MMC = y 
 
(2) 启用联发科主机驱动程序支持 
在 kernel_device_modules-6.12/drivers/mmc/host/BUILD.bazel 中添加 mtk-sd.ko 
 DTS 节点 
 
 
图 1-2. SDCard 的 DTS 节点 
 
(1) SD2.0 卡支持配置 “cap-sd-highspeed”，SD3.0 高速卡模式配置 “sd-uhs-xxx”。 
(2) SD driving strength 可以在对应模式的 pinctrl 节点配置，比如下面的 SDR104 模式。 
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
MT8668 Android SDCard 
User Manual 
Confidential B 
 
图 1-3. SDR104 模式的 pinctrl 节点 
 
(3) SD 卡检测脚通过  “cd-gpios” 配置 GPIO pin，GPIO_ACTIVE_LOW 表示插卡时低电平，GPIO_ACTIVE_HIGH 则表示
插卡时高电平。 
(4) 根据实际使用的 SD 卡端 VDD 以及 Host 端 IO 供电配置 “vmmc-supply” 和 “vqmmc-supply”。如果需要使用 fast 
power off（拔卡时 VMCH 硬件下电）功能，“vmmc-supply”配置节点&mt6373_vmch_eint_high（对应“cd-gpios”
的 GPIO_ACTIVE_LOW）或&mt6373_vmch_low（对应“cd-gpios”的 GPIO_ACTIVE_HIGH）；如果不需要使用 fast 
power off 功能，“vmmc-supply”配置节点&mt6373_vmch。 
 
1.4 常见问题/故障排除 
 SD 卡不识别，量测不到 VDD 电压 
(1) 按照章节 1.3 检查内核配置和 DTS 配置是否正确； 
(2) 如果 VDD 供电 power 用的是 MT6373，并且 detect pin 有接到 MT6373 的 SD_DET 脚，请检查 DTS 中 “vmmc-
supply” 配置的 power 节点与 detect pin 的极性是否匹配； 
(3) 如果步骤(2)检查结果匹配，请将 “vmmc-supply” 配置&mt6373_vmch 看 VDD 是否可以上电，可以上电表示 fast 
power off 功能有问题，提 PMIC issue 到 MTK； 
(4) 如果步骤(3)不可以上电，抓取 kernel log 并提 SDCard issue 到 MTK。 
 
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
MT8668 Android SDCard 
User Manual 
Confidential B 
 插 SD 卡开机可以识别，热插拔不识别 
(1) 按照章节 1.3.2 检查 DTS 中 “cd-gpios” 的配置是否正确； 
(2) 如果 DTS 配置没有问题，检查 vendor/mediatek/proprietary/tools/dct/dws/mt6881/${PROJECT}.dws
中 detect pin 对应的 GPIO 配置是否正确，参考图 1-4 所示配置： 
 
 
图 1-4. 用于检测引脚的 dws 设置 
 
(3) 如果配置检查正确但热插拔还是无法识别，请再硬件量测下 detect pin 在插/拔卡状态下的电平是否符合预期，
符合预期的话请提 SDCard issue 到 MTK。 
 
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
MT8668 Android SDCard 
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
# SRC0090 MT8668_Android_SDK_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_SDK_User_Manual_CN_V1.0.pdf

SHA-256：a9dd302399ca377a3bf228b9bb3917f5937fb3b8f0b2eed3280e323bf330fb16

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0090.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-06
MT8668 Android SDK  
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
MT8668 Android SDK 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-06 徐翔 正式版 
 
  
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
MT8668 Android SDK 
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
1.3.1 主要功能介绍 ············································································································································ 56 
1.3.2 碰撞检测特别说明 ···································································································································· 57 
1.4 常见问题/故障排除 ·············································································································································· 58 
1.4.1 SDK 常见问题 ············································································································································· 58 
1.4.2 调试日志开关方法 ···································································································································· 59 
附件一 附加条款 ···························································································································································· 60 
 
 
 
图片目录 
图 1-1. SDK 内部结构 ································································································································································ 5 
图 1-2. SPM SDK 流程 ································································································································································ 5 
 
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
MT8668 Android SDK 
User Manual 
Confidential B 
1  SDK 
1.1 概述 
1.1.1 简单介绍 
本章节主要介绍 MT8668 SDK 接口以及常见问题的处理方法。 
 
SmartPlatform 是一个特殊的产品，MediaTek 为了降低客户 APK 的开发难度，实现更多客制化的需求，让开发者快
速、方便地开发出好的应用，提供了 SmartPlatform 独有的一套 SDK 接口。 
 
1.1.2 SDK 功能介绍 
SDK 提供 API 给客户调用，每个摄像头可以独立进行 preview、capture、record、YUV callback (PictureSequence)。且
支持多进程同时使用一个摄像头。 
 
1.1.3 注意事项 
• 考虑到同步和效率问题，SDK 中的回调是直接在 binder 线程中处理的，并未新开线程处理。所以应用程序在收
到回调之后，最好开启一个新线程来处理；如果不另外开启新线程处理，请不要在回调中继续调用 SDK 接口
（可能造成死锁）；也不要在回调中执行耗时较久的任务。 
• 关于拍照流程，为了避免拍照延长和 preview/record 中断，目前拍照和 preview 已进行了绑定。如果要调整拍
照的大小，需要在调用 setPreviewSurface 之前通过 setPictureSize 进行设定。 
 
1.2 架构/流程概述 
1.2.1 内部结构图 
MT8668 SDK 内部结构如图 1-1 所示： 
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
MT8668 Android SDK 
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
 
MT8668 SDK 流程如图 1-2 所示： 
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
 
1.2.2 API 列表 
1.2.2.1 SmartPlatformManager 
描述： 
SmartPlatform SDK 的主要接口类，单例模式。管理平台的摄像头 录制，碰撞检测，关机状态设置等。 
引入（导入）SmartPlatformManager： 
import com.mediatek.smartplatform.SmartPlatformManager; 
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
MT8668 Android SDK 
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
MT8668 Android SDK 
User Manual 
Confidential B 
(3) Service 就绪后，按照正常的流程往下进行。 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Android SDK 
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
• 参数 cameraIdStr 是摄像头对应的标识 ID，每个摄像头的 ID 值都不同，这个 ID  通过 getCameraIdList 获取。 
• 同一个应用程序内每次使用同一个 ID 调用该函数得到的 CameraDevice 对象是一样的。对象只会在第一次调用
时被创建。  
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
String ids[] = mSmartPlatformManager.getCameraIdList(); 
SpmCameraDevice cameraDevice0= mSmartPlatformManager.openCameraDevice(ids[0]); 
 
 openAvmCameraDevice 
函数： 
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
MT8668 Android SDK 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Android SDK 
User Manual 
Confidential B 
 addServiceDeathCallback 
函数：  
public void addServiceDeathCallback(ServiceDeathCallback callback) 
参数： 
callback  SmartPlatformServer 进程退出（死掉）时的回调 
细节： 
• ServiceDeathCallback 定义如下： 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8668 Android SDK 
User Manual 
Confidential B 
 addCameraAvailableCallback 
函数： 
public void addCameraAvailableCallback(ServiceDeathCallback callback) 
参数： 
callback 返回摄像头状态的回调 
细节： 
• CameraAvailableCallback 定义如下： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
public IpodProxy getIpodProxy() 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 getNumberOfCameras 
函数： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
1.2.2.2 PreviewSource 
引入（导入）PreviewSource： 
import com.mediatek.smartplatform.PreviewSource; 
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
GENERAL_CAMERA 获取。 
 
1.2.2.5 RecordConfiguration 
引入（导入）RecordConfiguration： 
import com.mediatek.smartplatform.RecordConfiguration; 
实例化(创建)对象： 
RecordConfiguration recordConfig= RecordConfiguration.get(recordSource); 
 
 mCamcorderProfile 
类别： android.media.CamcorderProfile 
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
MT8668 Android SDK 
User Manual 
Confidential B 
细节：录像视频文件的格式，帧率，视频画面大小等设定。 
 
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
MT8668 Android SDK 
User Manual 
Confidential B 
– VIDEO_EVNET_DELETE_FILE_IN_GALLERY 视频文件被删除时，会收到此通知，一般发生在循环录制时，
通过删除之前的视频文件释放空间。 
– VIDEO_EVNET_SDCARD_FULL 录制视频的时候检测到 SD Card 已经满了。 
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
• onAudioFrame：通过此接口可以接收每一帧音频数据。 
– data：保存数据的缓冲区 。 
– dataType：保留参数。 
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
MT8668 Android SDK 
User Manual 
Confidential B 
– size：有效数据的大小，一般情况下小于 data 的大小。 
– cameraId：当前返回音频数据的 cameraId。 
• recorderSource：当前返回音频数据的 recorderSource 与 startRecord 中的 recorderSource 相对应。 
 
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
• onKeypointFrame：通过此接口接收已编码的数据。 
– data：保存数据的缓冲区，每次回调 onKeypointFrame 时，使用的都是同一个缓冲区。如果想要保存数
据，需要重新拷贝，不然下一次会被覆盖。 
– dataType：保留参数，可能被用来区分是高清还是标清数据。 
– size：标示打点（keypoint）数据的大小，一般情况下小于 data 的大小， 这个数据大小一般是 128KB，包
含视频和音频数据，格式为 ts。 
 
 mVideoFrameMode 
类别：int 
细节：标识要怎么处理视频数据。 
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
MT8668 Android SDK 
User Manual 
Confidential B 
VideoFrameMode 的定义如下： 
• VIDEO_FRAME_MODE_DISABLE  (0),//录制到文件 
• VIDEO_FRAME_MODE_SOURCE   (1), //以h264 格式提供给应用程序 
• VIDEO_FRAME_MODE_PACKET   (2), //以ts 格式提供给应用程序 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 mLockFilePath 
类别：String 
细节：保护视频文件的保存目录。 
设置受保护的视频文件的保存目录，默认的路径是/sdcard/DCIM/camera/protect。 
 
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
MT8668 Android SDK 
User Manual 
Confidential B 
设置视频文件的比特率范围，在录像的时候如果写文件的速度变慢，底层会降低 比特率；如果写得快，就会调高
比特率。降低比特率是为了避免写文件太慢而导致缓冲区积压。即使写文件速度再慢，调整后的比特率也不会小
于设置的最小值，同样提高的比特率也不会超过最大值。 
 
 mVideoCycleDeleteFileNum 
类别：int 
细节：循环删除的文件数量，当存储空间不够时删除的文件数量 。 
 
 mReduceRecordingFps 
类别：int 
细节：降低视频录制的帧率百分比。 
FULL：100% 
HALF：50% 
THIRTY_PERCENT：30% 
QUARTER：25% 
 
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
MT8668 Android SDK 
User Manual 
Confidential B 
void onImageAvailable(String cameraId, int format, int status , byte[] data, String path) 
} 
imageFormat: 目前只支持 YUV_420_888 和 JPEG, NV21。  
Datatype 可以为 file 或者 raw。 为 raw 会通过 calback 返回；为 file 则保存在 path 目录。保存为 file 一般用来进行
测试。 
 
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
imageFormat：目前支持 YUV_420_888 和 JPEG,  NV21，YV12, RGB_888, YUY2 格式。 
DataType 可以为 RAW，FILE，BUFFER 或者 IMAGE。  
RAW：将数据放在一个 byte[] 中回调回来。 
FILE：保存在平台，会删除旧文件，用于本地测试。 
BUFFER：将数据放在一个 DirectByteBuffer 中返回给应用程序，减少复制次数。 
IAMGE：将数据放在一个图像中返回给应用程序。 
 
 mPath 
类别：String 
细节：需要获取的图像的保存路径 
此参数目前没有使用。 
 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 mImageFormat 
类别：int 
细节：所注册回调需要获取的图像格式，设置值为 ImageCallback 或 mImageDataCallback 中的 format 值，标识了回
调获取的图像类型。 
 
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
类别：Boolean 
细节：是否使用硬件编码器将摄像头数据编码成 JPEG 格式，目前没有使用这个标志。 
 
1.2.2.7 SpmCameraDevice 
引入（导入）SpmCameraDevice： 
import com.mediatek.smartplatform.SpmCameraDevice; 
实例化(创建)对象： 
SpmCameraDevice mCameraDevice =SmartPlatformManager.get().openCameraDevice(“0”); 
 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 getState 
函数： 
public int getState() 
返回值： 
返回当前摄像头（Cameradevice）所处的状态。 
细节： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 getParameters 
函数： 
public SpmParameters getParameters() 
返回值： 
SpmParameters 对象， SpmCameraDevice 参数的集合。 
细节： 
SpmCameraDevice 的参数信息可以通过 SpmParameters 得到并修改。 
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
MT8668 Android SDK 
User Manual 
Confidential B 
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
MT8668 Android SDK 
User Manual 
Confidential B 
SurfaceView surfaceView=findViewById(R.id.surface_view); 
SurfaceHolder holder=surfaceView.getHolder(); 
mDevice.setPreviewSurface(Holder.getSurface(), PreviewSource.GENERAL_CAMERA); 
 
 startPreview 
函数： 
public void startPreview() 
 
细节： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 stopADAS 
函数： 
public void stopADAS() 
细节： 
关闭 ADAS 功能。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.stopADAS(); 
 
 startRecord 
函数： 
public int startRecord(@RecordSource.Format int recordSource, RecordConfiguration 
recordConfig) 
参数： 
recordSource 录制的源 
recordConfig 录制的设置 
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
recordSource 录制的源 
细节： 
停止录制视频，和 startRecord()对应。 
示例： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
SpmCameraDevice Device = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.stoptRecord(); 
 
 lockRecordingVideo 
函数： 
public void lockRecordingVideo(int duration,String protectedType, @RecordSource.Format int 
recordSource) 
参数： 
duration 打点保护的时间长度 
protectedType 打点保护类型, 为空串””或者“LowRes” 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 setVideoRotateDuration 
函数： 
public void setVideoRotateDuration(int duration_ms,@RecordSource.Format int recordSource) 
参数： 
duration_ms 每个视频文件的时间长度，单位是毫秒 
recordSource 录制的源 
细节： 
设置保存的每个视频文件的时间长度，需要在启动录像之后设置。如果需要在录像启动之前设置，需要通过
RecordConfiguration 的 setVideoRotateDuration 来实现。设置的参数会在下一个录制的视频文件生效。  
示例： 
CameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0’); 
mDevice.setVideoRotateDuration(60*1000, RecordSource.GENERAL_CAMERA); 
 
 setVideoBitrateDyn 
函数： 
public void setVideoBitrateDyn(int bitrate,int bAdjust,@RecordSource.Format int 
recordSource) 
参数： 
bitrate 视频比特率的值 
bAdjust 保留参数，暂未使用 
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
MT8668 Android SDK 
User Manual 
Confidential B 
recordSource 录制的源 
细节： 
参数为 true 表示关闭麦克风，这样录出来的视频就没有声音了，参数为 false 表示打开。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.setRecordingMuteAudio(false, RecordSource.GENERAL_CAMERA); 
 
 setProtectRecording 
函数： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 setLockFilePath 
函数： 
public void setLockFilePath(String path, @RecordSource.Format int recordSource) 
参数： 
path 保存视频文件的目录 
recordSource 录制的源 
细节： 
设定打点视频文件的目录，默认的路径是/sdcard/DCIM/camera/protect/。该接口可在录制过程中打点之前进
行调用。 
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
MT8668 Android SDK 
User Manual 
Confidential B 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.enableShutterSound(false); 
 
 enableRecordSound 
函数： 
public void enableRecordSound(boolean enable) 
参数： 
Enable 是否打开录制的提示声音 
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
fileName：拍照图片的保存名字（包含目录） 
shutter：快门提示音响起时的回调（暂时无效） 
jpeg：拍照过程中的回调 
细节： 
• ShutterCallback 定义如下： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
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
返回值： 
移除 listener 成功则返回 true，否则返回 false。 
示例： 
SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
boolean isRemoveListener = mCameraDevice.release(); 
 
 getCameraId 
函数： 
public String getCameraId() 
返回值： 
返回当前摄像头（SpmCameradevice）的 ID 值。 
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
MT8668 Android SDK 
User Manual 
Confidential B 
细节： 
获取当前 SpmCameraDevice 对应的 camera ID。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
String id=mDevice.getCameraId(); 
 
 startPictureSequence 
函数：  
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
MT8668 Android SDK 
User Manual 
Confidential B 
source: 获取连续图片的源 
enable: 是否开启 FD 回调 
细节： 
此 API 通过 FD 连续获取图片数据。 其中 YUV data 可以用于 ADAS 或者其它算法分析。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice.startPictureSequence(source ,config); 
mDevice. enableShareBuffer(source , true); 
 
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
callback Ae 曝光值的回调 
细节： 
AeStatusCallback 定义如下： 
   public interface AeStatusCallback { 
        void onStatusCallback (int value); 
        void onStatusCallbackArray (int[] value,int size); 
   } 
示例： 
   SpmCameraDevice mCameraDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
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
MT8668 Android SDK 
User Manual 
Confidential B 
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
函数： 
public int setDropStreamFrame(int streamType, int streamSource, int streamPolicy)  
参数： 
streamType   YUV 0/record 1/preview 2 
streamSource @PictureSequenceSource int source, @PreviewSource.Format int previewSource, 
@RecordSource.Format int recordSource 
streamPolicy 丢帧策略。 
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
latitude10000 纬度*10000 
longitude10000 经度 *10000 
recordSource 录制的源 
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
MT8668 Android SDK 
User Manual 
Confidential B 
细节： 
在录制过程中动态设置 GPS 位置信息，保存到 MP4 视频头文件信息中。 
示例： 
SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
mDevice. updateVideoGPSInfo (3140000,2240000,RecordSource.GENERAL_CAMERA); 
 
1.2.2.8 SpmParameters 
引入（导入）参数： 
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
top 图片水印区域的 y 轴起始位置 
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
MT8668 Android SDK 
User Manual 
Confidential B 
right 图片水印区域的 x 轴结束位置 
bottom 图片水印区域的 y 轴结束位置 
细节： 
设置图片水印的区域，图片水印的宽度必须是 32 的整数倍，高度必须是 16 的整数倍，否则无法正常显示。图片
的大小要和水印区域的大小一致。图片水印区域的起始位置和文字水印区域起始位置的计算方式一致，但是宽度
和高度存在差别，通常将图片水印区域的宽度和高度设置成和图片大小一样即可。  
示例： 
params.setWatermarkImgArea(20,20,180,180); 
 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 setWatermarkTextArea  
函数： 
public void setWatermarkTextArea(int left, int top, int right, int bottom) 
参数： 
left 水印区域的 x 轴起始位置 
top 水印区域的 y 轴起始位置 
right 水印区域的 x 轴结束位置 
bottom 水印区域的 y 轴结束位置 
细节： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
参数： 
size 水印文字的大小 
细节： 
设置水印文字的大小，文字水印的大小是按照画面高度的比例计算的，计算公式：文字实际大小 = size *画面高度
/1000；单位是像素。所以文字水印的大小应与文字水印区域的高度相等，或略小于其高度，水印才能显示出来。 
示例： 
params.setWatermarkArea(20,20,60,240);  //矩形宽度是220，高度40 
params.setWatermarkTextSize(40);  //文字水印大小应该设置成40 
 
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
y 相对应水印区域起始位置的竖向偏移量 
细节： 
绘制出来的文字水印可以理解成一个矩形图片，偏移量指的是文字水印左下角相对于文字水印区域起始点的偏移
量。通常情况下，将 y 的值和文字水印区域的高度设置成一样即可。 
示例： 
params.setWatermarkArea(20,20,60,240);  //矩形宽度是220，高度40 
params.setWatermarkTextPosition(10,40); //y 值和矩形区域高度一致 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 setWatermarkFontFile 
函数： 
public void setWatermarkFontFile(String file) 
参数： 
file 水印的字体文档 
 
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
MT8668 Android SDK 
User Manual 
Confidential B 
 doShutdown 
函数：  
public int doShutdown(String reason,boolean isShutdown) 
参数： 
reason 要关机的原因，目前可以设置为任意字符串。 
isShutdown 是否要关机，true 表示关机，false 表示不关机 。 
返回值： 
该函数的执行结果。 
细节： 
• 此 API 用于设定进入 IPO 后是否要真正关机。当前按 power 键关机，系统并没有真正关机，而是进入 IPO/IPOH
模式。当需要彻底关机时， 可以调用此 API 实现该功能。在 IPOD 进程未启动之前，如果调用了此 API 且将传
入的 isShutdown 参数设置为 true，还可以再次调用此 API，并将第二个参数 isShutdown 设置为 false 以取消
IPOD 关机。 
• 需要注意的是参数 reason 不能包含有“=”或“;”这两个字符。 
• 调用此 API 的返回值说明如下： 
– RESULT_SUCCESS 表示此 API 的参数已经成功传给 IPOD 进程去执行，这种情况一般发生在关机之后，并且
IPOD 进程已经运行。 
– RESULT_PARAMS_SAVED 表示此 API 的参数已经成功保存，等 IPOD 进程运行后会传给 IPOD 进程去执行。 
– RESULT_PARAMS_REPLACED 表示此 API 之前有调用过，此次传下来的参数覆盖之前的参数，也就是说最后
一次传下来的参数会被传到 IPOD 那边执行。 
– RESULT _FAIL 表示调用此 API 调用失败了，失败的原因有很多，视具体情况而定。 
– RESULT_EXCEPTION 表示调用这个 API 的时候出现了异常，一般是 Smartplatform service 不存在了，
也就是SmartPlatformServer 进程死掉了。 
示例： 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. doShutdown(“test”,true);    //进入ipo 后，进行关机操作 
 
 setRebootControl 
函数：  
public int setRebootControl(int flag) 
参数： 
flag 开启定时重启功能的标志，值为 0 或 1 
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
MT8668 Android SDK 
User Manual 
Confidential B 
返回值： 
该函数的执行结果。 
细节： 
• 用于打开定时重启的功能，传入的 flag 参数为 1 时表示打开，参数为 0 时表示关闭。如果不调用
setRebootTimeSlot 去设定重启时间，则会以上次设定的时间作为重启时间。  
• 调用此 API 的返回值说明如下： 
– RESULT_SUCCESS 表示此 API 的参数已经成功传给 IPOD 进程去执行，这种情况一般发生在关机之后，并且
IPOD 进程已经运行。 
– RESULT_PARAMS_SAVED 表示此 API 的参数已经成功保存，等 IPOD 进程运行后会传给 IPOD 进程去执行。 
– RESULT_PARAMS_REPLACED 表示此 API 之前有调用过，此次传下来的参数覆盖之前的参数，也就是说最后
一次传下来的参数会被传到 IPOD 那边执行。 
– RESULT_FAIL 表示调用此 API 调用失败了，失败的原因有很多，视具体情况而定。 
– RESULT_EXCEPTION 表示调用这个 API 的时候出现了异常，一般是 Carcorder Service 不存在了，也就是
SmartPlatformServer 进程已经死掉了。 
示例： 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. setRebootControl(1);    //打开定时重启功能 
 
 setRebootTimeSlot 
函数：  
public int setRebootTimeSlot(int slotTime) 
参数： 
slotTime 重启的时间点，值的范围为 0 到 23  
返回值： 
该函数的执行结果。 
细节： 
• 此 API 用于设定重启的时间，参数是重启的时间点，范围在 0 到 23。要使当前的设置有效，需要调用
setRebootControl 去打开定时重启功能。 
• 调用此 API 的返回值说明如下： 
– RESULT_SUCCESS 表示此 API 的参数已经成功传给 IPOD 进程去执行，这种情况一般发生在关机之后，并且
IPOD 进程已经运行起来了。 
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
MT8668 Android SDK 
User Manual 
Confidential B 
– RESULT_PARAMS_SAVED 表示此 API 的参数已经成功保存，等 IPOD 进程运行起来后会传给 IPOD 进程去执
行。 
– RESULT_PARAMS_REPLACED 表示此 API 之前有调用过，此次传下来的参数覆盖之前的参数，也就是说最后
一次传下来的参数会被传到 IPOD 那边执行。 
– RESULT _FAIL 表示调用此 API 调用失败了，失败的原因有很多，视具体情况而定。 
– RESULT_EXCEPTION 表示调用这个 API 的时候出现了异常，一般是 Smartplatform Service 不存在了，也就
是 SmartPlatformServer 进程已经死掉了。 
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
MT8668 Android SDK 
User Manual 
Confidential B 
示例： 
IpodProxy proxy= SmartPlatformManager.get().getIpodProxy(); 
proxy. exitIpod(0);    //退出ipod，然后开机 
 
1.2.2.10 CarEventProxy 
引入（导入）CarEventProxy：   
import com.mediatek.smartplatform.CarEventProxy; 
实例化(创建)对象： 
CarEventProxy proxy=SmartPlatformManager.get().getCarEventProxy(); 
或者CarEventProxy proxy= CarEventProxy.getInstance(SmartPlatformManager.get()); 
建议使用第一种方式获取 CarEventProxy 对象，CarEventProxy 也是采用单例模式。 
目前由于硬件限制，只有 ACC on/off 的行为， 其它行为需根据硬件添加。 
 
 addEngineChangedCallback 
函数：  
public void addEngineChangedCallback(EngineChangedCallback callback) 
参数： 
callback 车子发动机状态改变时的回调，与 ACC on/off 时对应。 
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
MT8668 Android SDK 
User Manual 
Confidential B 
              //TODO 
           } 
         } 
    ); 
 
 removeEngineChangedCallback 
函数：  
public void removeEngineChangedCallback(EngineChangedCallback callback) 
参数： 
callback 车子发动机状态改变时的回调 
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
MT8668 Android SDK 
User Manual 
Confidential B 
public void setDefaultAccOffBehavior(boolean enable) 
参数： 
enable 是否启用 ACC 的默认行为 
细节： 
• 默认的 ACC 行为是底层的驱动程序检测到 ACC 点火或者熄火时，会将这一事件通过广播的形式发送给 应用程
序，应用程序只需要注册对应的广播就可以了。 
– 点火事件广播: android.intent.action.ACTION_POWER_CONNECTED 
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
callback 车子运动方向改变时的回调。 
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
MT8668 Android SDK 
User Manual 
Confidential B 
• 当车子从左转/右转/倒车/前行中某一状态转换成另外不同的状态时触发此回调。触发此回调的来源有两个，
GPIO 或者 AVM。两种触发方式都需要有硬件的支持。 
示例： 
   CarEventProxy mCarEventProxy = SmartPlatformManager.get().getIpodProxy(); 
   mCarEventProxy.addCarReverseCallback( 
         new CarReverseCallback(){ 
           public void onReverse(int status, int source){ 
              //TODO 
           } 
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
MT8668 Android SDK 
User Manual 
Confidential B 
callback 平台检测到碰撞时的回调 
细节： 
• CollisionCallback 定义如下： 
   public interface CollisionCallback{ 
     public static final int COLLISION_UNRELIABLE =0;    
     public static final int COLLISION_LOW=1; 
     public static final int COLLISION_MEDIUM=2; 
     public static final int COLLISION_HIGH=3;   
     void onCollision(int collision,int status); 
  } 
• 平台检测到碰撞时会触发此回调，onCollision 中的 collision 实际指的是碰撞的等级（灵敏度），目前分为三个
等级 COLLISION_LOW， COLLISION_MEDIUM ，COLLISION_HIGH 。status 为保留参数，一般为 0，如果修改了碰
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
MT8668 Android SDK 
User Manual 
Confidential B 
 setSuspendCollision 
函数：  
public void setSuspendCollision(boolean fgEnabled) 
参数： 
fgEnabled 是否打开 Gsensor 检测碰撞的功能 
细节： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
Carcorder 检测碰撞可以理解为 Carcorder 进程里面的一个功能模块，通过此接口可以控制这个功能的开关。只有打
开了这个功能，在发生碰撞时，才能在 CollisionCallback 收到回调。Carcorder 检测碰撞和 Gsensor 检测碰撞属于不
同的模块，关闭了 Gsensor 检测碰撞的功能，并不会影响到 Carcorder 检测碰撞的功能，同样关闭了 Carcorder 检
测碰撞的功能，也不会影响 Gsensor 检测碰撞的功能，所以这两个功能互不影响。默认情况下这个功能是打开的，
如果上一次有设置过，则继续使用上一次的设置。 
示例： 
   SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
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
MT8668 Android SDK 
User Manual 
Confidential B 
示例： 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setSuspendCollisionSensity(CollisionCallback.COLLISION_HIGH);                           
 
 getSuspendCollisionSensity 
函数：  
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
MT8668 Android SDK 
User Manual 
Confidential B 
 getNormalCollisionSensity 
函数：  
public int getNormalCollisionSensity() 
返回值： 
返回一个整数值，表示 Carcorder 会检测到碰撞的灵敏度。 
细节： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
SmartPlatformManager mSmartPlatformManager = SmartPlatformManager.get(); 
mSmartPlatformManager.setCollisionThreshold(5f,5f,5f,2); 
 
 getCollisionThreshold 
函数：  
public float[] getCollisionThreshold()  
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
MT8668 Android SDK 
User Manual 
Confidential B 
 getGsensorEventRate 
函数：  
public int getGsensorEventRate()  
返回值： 
返回设置下去的 Gsensor 数据上报时间间隔 
细节： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
1.3.1 主要功能介绍 
1.3.1.1 预览 
开启预览： 
     SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
     SurfaceView surfaceView=findViewById(R.id.surface_view); 
     SurfaceHolder holder=surfaceView.getHolder(); 
     mDevice.setPreviewSurface(Holder.getSurface(),PreviewSource.GENERAL_CAMERA); 
     mDevice.starPreview(); 
 
停止预览： 
     SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
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
MT8668 Android SDK 
User Manual 
Confidential B 
     } 
 
     SpmCameraDevice mDevice = SmartPlatformManager.get().openCameraDevice(“0”); 
     PictureConfiguration picConfig = PictureConfiguration.get(PictureSequenceSource. 
GENERAL_CAMERA); 
     picConfig.mImageDataCallback = mSequenceCallback; 
     mDevice.startPictureSequence(source ,picConfig); 
注：imageDataCallback 返回的是 data，如果需要 FD 回调，需要在startPictureSequence 通过
enableShareBuffer 获取 FD。 
 
1.3.2 碰撞检测特别说明 
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
MT8668 Android SDK 
User Manual 
Confidential B 
接口定义： 
下面两个函数的定义不能修改，函数名、参数和返回值都不能修改。  
void collision_init(); 
初始化函数：当 collide 运行起来，libsmartplatformcollision.so 加载完成后会调用一次此函数。仅会调用一
次，用于变量的初始化。 
void collision_detect(AsensorEvent value, const float* threshod, int size, int level, int* 
result); 
参数说明： 
AsensorEvent value 封装传感器数据的结构体。 
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
1.4.1 SDK 常见问题 
1.4.1.1 调用 setpreviewSurface 顺序不对导致底层缓冲区卡住 
如果先调用 setpreviewSurface null 再去调用 stop preview，会打印出如下日志： 
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
MT8668 Android SDK 
User Manual 
Confidential B 
BufferQueueProducer: [ImageReader-1280x720f32315659m5-15749-
52](this:0x7a989dd000,id:52,api:4,p:544,c:-1) queueBuffer: BufferQueue has been abandoned 
 
如果还未调用 stop preview 就销毁了 surface，会导致底层缓冲区卡住并报错。 
 
1.4.1.2 拍照 takePicture 另开线程 
有的 SD Card 保存图片慢，为了避免阻塞 APK，在调用 takePicture 时可另开线程来执行保存操作。 
new Thread(() -> { 
         mDevice.takePicture(path, mShutterCallback, pictureCallback); 
}).start(); 
 
1.4.1.3 不能在回调中做耗时任务 
考虑到同步和效率问题，SDK 中的回调是直接在 binder 线程中处理，并未新开线程处理， 所以应用程序在收到回
调之后，最好是新开线程来处理； 如果未新开线程处理，不能继续在回调中调用 SDK 接口（可能造成死锁）；也
不要在回调中做耗时较久的事情，这样容易造成 APK ANR。 
 
1.4.2 调试日志开关方法 
1.4.2.1 打开 SpmCameraDeviceImpl 调试日志的方法 
adb shell setprop persist.vendor.log.spmsdk true; 
adb reboot 
 
1.4.2.2 关闭提前设定 Capture Surface 的方法 
adb shell setprop persist.vendor.spm.presetpic false 
adb reboot 
 
 
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
MT8668 Android SDK 
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
# SRC0091 MT8668_Android_Sensor_lssue_Debug_SOP_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_Sensor_lssue_Debug_SOP_CN_V1.0.pdf

SHA-256：4ed1bbbfed20ebd00446d90337389d7060dd1f48a1713a066cacbc7007e43419

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0091.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28 
MT8668 Android Sensor Issue 
Debug SOP 
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
MT8668 Android Sensor Issue 
Debug SOP 
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
Confidential B 
MT8668 Android Sensor Issue 
Debug SOP 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
表格目录 ··········································································································································································· 4 
1 概述 ··········································································································································································· 5 
1.1 目的·········································································································································································· 5 
1.2 架构·········································································································································································· 5 
2 缩略词 ······································································································································································· 7 
2.1 缩略词 ······································································································································································ 7 
3 VTS 测试失败 ···························································································································································· 8 
4 APK 无法获取 Sensor 数据 ······································································································································· 9 
4.1 SCP 层 Sensor 异常 Debug ······································································································································ 9 
4.1.1 检查 SCP 是否正常启动 ······························································································································ 9 
4.1.2 检查 Sensor Device 是否初始化成功 ·········································································································· 9 
4.1.3 DVFS 导致 Sensor 异常 ······························································································································ 10 
4.2 Kernel 层 Sensor 异常 Debug ································································································································ 11 
4.2.1 Dump Sensor List ········································································································································ 11 
4.2.2 Kernel 端异常排查 ····································································································································· 12 
4.2.3 系统 Suspend 之后，Resume 时出现 I2C Error ························································································ 13 
4.3 HAL 层 Sensor 异常排查 ······································································································································· 14 
4.3.1 HAL 层文件检查 ········································································································································· 14 
4.3.2 Sensor HAL 上报数据频率异常 ················································································································· 14 
5 Sensor 校准失败 ····················································································································································· 15 
6 Sensor Debug Tools 介绍 ········································································································································· 16 
6.1 Sensor Debug APK ·················································································································································· 16 
6.2 测试工具 high_freq_sensor_tool ·························································································································· 18 
6.2.1 基于 high_freq_sensor_tool 测试 Sensor 是否正常 ················································································· 18 
6.3 基于 high_freq_sensor_tool 做 Sensor 校准 ········································································································ 19 
6.3.1 ACC 校准方法 ············································································································································· 19 
6.3.2 GYRO 校准方法 (与 ACC 相同) ·················································································································· 21 
6.3.3 PS 校准方法 ··············································································································································· 21 
7 如何抓取 Sensor Log ··············································································································································· 22 
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
MT8668 Android Sensor Issue 
Debug SOP 
8 案例分析 ································································································································································· 26 
8.1 ALPS08300249 平板 8 字校准后，地磁数据与机械指南针对比相差大于 5 ···················································· 26 
附件一 附加条款 ····························································································································································· 27 
 
表格目录 
表 2-1. 缩略词 ··········································································································································································· 7 
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
MT8668 Android Sensor Issue 
Debug SOP 
1 概述 
1.1 目的 
本文档主要介绍 MT8668 Sensorhub 相关问题的调试方法，包括 SCP，Kernel 和 Sensor HAL 三部分在出现问题时的
debug 手段，以及在 Sensor 校准时的相关注意事项。 
由于 Sensor 涉及到 HAL 层，Kernel 层以及 SCP 层，当 APK 获取 Sensor 数据失败时，通常需要从以上三个方向查找
原因。 
结合以往的 debug 经验：SCP 层出错的概率高于 HAL 层，HAL 层出错的概率高于 Kernel 层。 
 
1.2 架构 
Sensor 架构如下图所示，从 APP 到 HAL 层，再到 Linux Kernel 层的 HF_Manager, AP 层的 sensorhub 和 SCP 层的
sensorhub 进行通信和 share memory，SCP 层的 sensorhub 控制实际的 sensor driver。 
 
 
 
Sensor 虚拟化框架如下图所示，从 UOS 的 APP 到 HAL 层，再到前端 virtio_sensor.c。然后到 SOS 侧的后端
virtio_sensor.cc，再到 hf_manager driver，后端的逻辑和上图一致。 
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
MT8668 Android Sensor Issue 
Debug SOP 
 
 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
Debug SOP 
5 Sensor 校准失败 
Sensor 在执行校准的时候，如果最后的返回值不是 0，则表示校准失败 
注：校准方法请参考本文 6.1 节。 
 
 
 
校准失败主要都是因为精度不足或者零漂过大引起。 
 
常用的解法有以下两种： 
1. 咨询 vendor，调整 Sensor 采集的精度 
2. 增大 Sensor 校准的阈值 
 
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
MT8668 Android Sensor Issue 
Debug SOP 
6 Sensor Debug Tools 介绍 
6.1 Sensor Debug APK 
环境需求：Android 平台 
安装方法：adb install GameCube_v3.1.apk 
 
 
安装成功后，可以在屏幕看到如下图标： 
 
debug 方法： 
1. 打开通过 adb 安装好的 APK，界面如下： 
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
MT8668 Android Sensor Issue 
Debug SOP 
 
 
2. 以 ACC 和 ALPS 为例 
测试 ACC：选择 Accelerometer –> Bouncing Ball 移动板子，蓝色的球会跳动 
 
测试 ALS/PS：选择 ALS/PS –> Curve Chart   左上角会有光感的数值，遮挡光感数值会变小 
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
MT8668 Android Sensor Issue 
Debug SOP 
 
6.2 测试工具 high_freq_sensor_tool 
环境需求：Android 平台/Yocto 平台 
6.2.1 基于 high_freq_sensor_tool 测试 Sensor 是否正常 
1. 如果平台没有自带 high_freq_sensor_tool，需要通过 adb 将 high_freq_sensor_tool push 到平台 
 
 
 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
Debug SOP 
 
 
2. 在 Windows 再打开一个终端，使用 high_freq_sensor_tool 校准 （para2 = 3） 
 
 
3. 检查校准结果 
校准成功后，校准结果会保存在 JSON 文件： 
 
 
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
MT8668 Android Sensor Issue 
Debug SOP 
6.3.2 GYRO 校准方法 (与 ACC 相同) 
6.3.3 PS 校准方法 
1. 在 window 终端，使用 high_freq_sensor_tool 直接校准 （para2 = 3） 
 
 
2. type “y” 计算最大值与最小值 
 
 
 
 
 
3. 检查校准结果 
 
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
MT8668 Android Sensor Issue 
Debug SOP 
7 如何抓取 Sensor Log 
如何导出 Sensor 相关的 log 
1. 在屏幕打开 DebugLoggerUI 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
MT8668 Android Sensor Issue 
Debug SOP 
 
打开后界面如下： 
 
 
2. 点击启动按钮 
启动后，软件会将缓冲区的 log 保存到 txt 文件（包括开机启动的 log） 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
Debug SOP 
如图中，为 enable 加速度计，采样间隔为 20000000ns，上报间隔为 0. 
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
MT8668 Android Sensor Issue 
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
MT8668 Android Sensor Issue 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback


---
# SRC0092 MT8668_Android_Thermal_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_Thermal_User_Manual_CN_V1.0.pdf

SHA-256：7a0c89b2f3e716272619ab03eed66056597cfc0a9857f84c4d36541428b6b2fc

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0092.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Android Thermal User Manual 
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
MT8668 Android Thermal 
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
MT8668 Android Thermal 
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
1.2.1 热管理 HAL ··················································································································································· 5 
1.3 配置/客制指南 ························································································································································ 5 
1.4 热管理策略 ······························································································································································ 5 
1.4.1 热管理策略命令 ·········································································································································· 6 
1.4.2 热管理策略格式 ·········································································································································· 6 
1.5 常见问题/故障排除 ················································································································································ 9 
附件一 附加条款 ····························································································································································· 10 
 
 
图片目录 
图 1-1. Thermal 2.0 软件架构 ··················································································································································· 4 
图 1-2. 热管理 HAL ···································································································································································· 5 
 
表格目录 
表 1-1. 设备上可用的策略（/vendor/etc/thermal/）············································································································· 6 
 
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
MT8668 Android Thermal 
User Manual 
Confidential B 
1 热管理 
1.1 概述 
设备的热管理有两个主要目标： 
 
• 控制组件温度以避免被热损坏。 
• 控制整个产品的温度以确保人体安全并符合安全规定。设备中的热是由于 IC 高功率累积而来的。高功率跟高
时钟速度、电压和性能有关系。 
 
从热管理的角度，控制温度的方法是控制散热及发热。控制散热可以通过添加各种热管理解决方案，如 TIM、铜
箔、导管等，将热有效地传递（三种热传递方式：热传导、热辐射、热对流）到整个产品和空气或接触面上。 控
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
MT8668 Android Thermal 
User Manual 
Confidential B 
thermal_core 是一个本地 Linux 应用程序，其主要功能是解析.conf 格式的热管理策略。 
CPU/GPU/APU 会各自根据 thermal_core 设置下来的 target Tj 和监测到的温度做 thermal throttle。 
 
1.2.1 热管理 HAL 
 
图 1-2. 热管理 HAL 
 
• 一个原生层服务，为应用层或其他原生服务提供热信息 API。 
• 通过热管理系统文件节点获取热区温度。 
• 一些应用程序或模块需要获取热信息，例如：CPU/GPU/皮肤温度、CPU 使用率、冷却设备列表。 
• 谷歌定义了一些 HAL 接口，芯片供应商必须实现，例如温度查询或热状态变化通知。  
 
1.3 配置/客制指南 
1.4 热管理策略 
• 策略在 source code 里的路径： 
vendor/mediatek/proprietary/external/thermal_core_lib/mt6881/ 
• 策略模板： 
vendor/mediatek/proprietary/external/thermal_core_lib/thermal_policy_template.conf 
• 支持加密格式 
 
 
 
 
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
MT8668 Android Thermal 
User Manual 
Confidential B 
表 1-1. 设备上可用的策略（/vendor/etc/thermal/） 
Thermal Policy Permanent? Encrypted? Description 
thermal.conf Yes Yes Default thermal policy 
disable_thermal.conf Yes Yes Disable thermal throttling and thermal protection 
disable_thermal_temp.conf No Yes Same as the above, except it needs to re-apply after device 
rebooted 
disable_throttling.conf No Yes Disable thermal throttling 
disable_skin_control.conf No Yes 
Disable MTK skin control close loop (always keep 
Target Tj to 95℃) 
Thermal_policy_XX.conf 
(XX = 00~19 except 00, 02, 
08) 
On demand Yes Can add your own policy setting and switch via power HAL 
thermal_policy_08.conf No Yes Thermal policy for benchmark 
 
1.4.1 热管理策略命令 
• 应用一个热管理策略 
adb shell "thermal_intf apply [policy_name]" 
E.g., 
adb shell "thermal_intf apply disable_throttling.conf" 
• 检查当前正在使用的热管理策略 
adb shell cat /data/vendor/thermal/.current_tp 
• 检查当前正在使用的永久策略（系统重启后依然有效） 
adb shell cat /data/vendor/thermal/.permanent_tp 
 
1.4.2 热管理策略格式 
• Permanent policy 
 
 
• Linux thermal framework (LTF) 
–  “policy”: Support power_allocator and step_wise. 
 
 
• Disable LTF throttling 
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
MT8668 Android Thermal 
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
 For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
MediaTek Confidential
For ytliu@ pvetec.com Use Only
Document Feedback

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8668 Android Thermal 
User Manual 
Confidential B 
–  Supports only SKIN type 
–  “level”: level can only be severe, critical, emergency, shutdown. 
 
• Fan Cooler (in dts file) 
–  “pwm-ch”:  pwm to control fan. 
 
– Bind to thermal_zone. 
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
MT8668 Android Thermal 
User Manual 
Confidential B 
 
1.5 常见问题/故障排除 
打开thermal_core log： 
adb shell "/vendor/bin/thermal_intf debug_log 1" 
 
如何解密或加密热管理配置文件： 
https://online.mediatek.com/apps/faq/detail?list=HW&faqid=FAQ27718 
 
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
MT8668 Android Thermal 
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
# SRC0093 MT8668_Android_USB_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_USB_User_Manual_CN_V1.0.pdf

SHA-256：dbba8095559df846bc1033021efaf57e29a6c640886ce138c269b90f15d657ac

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0093.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2026-01-28
MT8668 Android USB User Manual 
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
MT8668 Android USB 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 秦文成 正式版本 
 
  
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
MT8668 Android USB 
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
1.4 常见问题/故障排除 ·············································································································································· 10 
 USB 相关日志 ············································································································································· 10 
 常见问题以及调试 ···································································································································· 12 
附件一 附加条款 ····························································································································································· 15 
 
 
图片目录 
图 1-1.USB 架构 ········································································································································································ 5 
图 1-2. Mt6881.dts 和 auto8668p1_64.dts 中的 ssusb 节点 ·································································································· 6 
图 1-3. mt6881.dts 中的 USB phy 节点 ····································································································································· 8 
 
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
MT8668 Android USB 
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
MT8668 Android USB 
User Manual 
Confidential B 
1.2 USB 硬件架构 
 
图 1-1.USB 架构 
 
• Port0: 最高支持 usb3.2 gen1, 5Gbps, host/device dual role controller 
• Switch: 最高支持 usb2.0 480Mbps, 能实现 Hub 与 USB2.0 之间的切换 
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
MT8668 Android USB 
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
MT8668 Android USB 
User Manual 
Confidential B 
ssusb & usb_host DTS node 中各个 property 字段含义： 
• ssusb: USB device controller MTU3 节点 
• phys: USB 使用的 u2/u3 phy 
• dr_mode: USB dual role mode，可以设置为 otg/peripheral/host 
• maximum-speed: device controller 使用的速度，可以设置为 super-speed/high-speed/full-speed 
• usb-role-switch: USB role 切换采用 Linux 标准的 usb-role-switch get/set ops 
• role-switch-default-mode: 配合 usb-role-switch 设置 IP default USB mode，可以设置为 otg/peripheral/host 
• mediatek,clk-mgr: 切换到 USB none/device 时，host driver 会卸载以达到更加省电的目的，否则 host driver 会保
留 
• mediatek,force-vbus: 强制 device controller 认为 vbus 存在，用于未连接 vbusvalid 引脚的 PCB 
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
MT8668 Android USB 
User Manual 
Confidential B 
1.3.1.2 USB PHY 节点 
 
 
图 1-3. mt6881.dts 中的 USB phy 节点 
 
u2phy & u3phy DTS node 中各个 property 字段含义： 
• u2phy: USB 2.0 phy 节点 
• u3phy: USB 3.0 phy 节点 
 
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
MT8668 Android USB 
User Manual 
Confidential B 
 Kernel 配置和 ko 相关信息 
表 1-2. USB 相关 kernel config, ko name 以及对应 code path 
Kernel Configuration ko Name Code Path 
CONFIG_DEVICE_MODULES_USB_MTU3 mtu3.ko kernel_device_modules-6.12/drivers/usb/mtu3/ 
CONFIG_DEVICE_MODULES_USB_XHCI_MTK xhci-mtk-hcd-v2.ko kernel_device_modules-
6.12/drivers/misc/mediatek/usb/usb_xhci/ 
CONFIG_DEVICE_MODULES_PHY_MTK_XSPHY phy-mtk-xsphy.ko kernel_device_modules-6.12/drivers/phy/mediatek/ 
 
 Host/Device 模式切换流程 
MT8668 软件支持手动切换。 
1.3.3.1 手动切换 
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

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8668 Android USB 
User Manual 
Confidential B 
1.4 常见问题/故障排除 
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
MT8668 Android USB 
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
MT8668 Android USB 
User Manual 
Confidential B 
 常见问题以及调试 
1.4.2.1 adb 不识别调试流程 
1. PC 设备管理器有认到 USB 设备, 但是 adb devices 没有设备显示 
1) 可能是 PC 驱动有问题， 可以在设备管理器上， 手动更新驱动为 Android ADB Interface 
2) 可能是 serialnumber 没有发送，可以检查下面节点是否有值，如果没有值，说明是序列号没有写入，可以
手动 echo 0123456789ABCDEF 到这个节点， 然后重新插拔 USB 线 
▪ Android: cat /config/usb_gadget/g1/strings/0x409/serialnumber 
▪ Yocto: cat /sys/kernel/config/usb_gadget/g1/strings/0x409/serialnumber 
 
2. PC 设备管理器没有 USB 设备连接 
1) 确认当前 USB role 是否有切到 device mode 
cat /sys/class/usb_role/12001000.usb0-role-switch/role 
得到回显应该是 device，如果是 host/none，说明没有切换到 device mode，可以重新插拔 USB 线， 或者手动
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
得到回显应该是 host，如果是 device/none，说明没有切换到 host mode，可以重新插拔 otg 线，或者手动 echo 
host 到这个节点来切换。 
 
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
MT8668 Android USB 
User Manual 
Confidential B 
2. 确认 xHCI driver 是否有成功挂载 
1) 按照 1.4.1.1 确认是否有 xHCI probe log 
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
serialnumber=xhci 说明这个是xhci host 的 roothub 
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
开启特别的 kernel config，可以网上搜索如何开启，或者询问联发科技。 
 
4. 确认其他因素 
1) USB vbus 是否正常开启，可以量测 port 口是否有 5V vbus 
2) 这个设备在其他平台，PC 上是否可以正常识别，避免是设备损坏导致不识别的问题 
3) 信号质量不佳的设备，可以通过加 USB hub 转接的方式来测试是否可以连接 
  
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
MT8668 Android USB 
User Manual 
Confidential B 
1.4.2.3 眼图测试相关 
1. USB host 眼图测试节点和命令 
支持的 CMD 如下： 
1) test packet: 测试眼图 
2) test J: 测试 test j 
3) test K: 测试 test k 
4) test SE0 NAK: 测试 SE0 NAK 
2. 注意事项 
1) 测试前，请确保 USB 已经切换到 host mode。 
2) test packet 只能由 roothub port 打出，外接 hub 无法转发。 请联系 hub 厂商咨询如何测试 hub downstream 
port 眼图。 
3) 输入 test 命令后，xHCI ip 将进入 test mode，此时插拔 U 盘等设备是无法识别的，无需担心，将平台重启
后，USB host 功能仍然可以使用。 
 
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
MT8668 Android USB 
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
# SRC0094 MT8668_Android_Wifi_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_Wifi_User_Manual_CN_V1.0.pdf

SHA-256：be1aff227afa79140c50d66b18cbb5f20b0a483c18c2c9345a0f4ee90f7b33cc

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0094.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2026-01-28 
MT8668 Android WiFi User Manual 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 胡雯萱 正式版本 
 
  
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
MT8668 Android WiFi 
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
1.1.2 名词解释 ······················································································································································ 4 
1.2 架构/流程概述 ························································································································································ 6 
1.3 配置/客制化指南 ···················································································································································· 6 
1.4 常见问题/故障排除 ················································································································································ 9 
1.4.1 WiFi 认证 ······················································································································································ 9 
1.4.2 WiFi 调试需要的日志 ································································································································ 10 
1.4.3 扫描 ···························································································································································· 11 
1.4.4 STA Connect 终端设备连接 ······················································································································· 12 
1.4.5 网络吞吐量 ················································································································································ 13 
1.4.6 WiFi 引起的 MT6637 芯片重置 ················································································································· 14 
附件一 附加条款 ····························································································································································· 16 
 
 
图片目录 
图 1-1. WiFi 架构 ······································································································································································· 6 
 
表格目录 
表 1-1. 名词解释········································································································································································ 4 
表 1-2. MTK WiFi 模块 ······························································································································································· 5 
表 1-3. Coredump 的生成路径 ················································································································································ 14 
 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
1 WiFi 
1.1 概述 
1.1.1 简单介绍 
本章节介绍 MT8668 WiFi 模块的架构及 WiFi 常见问题的调试方法。MT8668 搭配的 WiFi 芯片是 MT6637。 
 
1.1.2 名词解释 
表 1-1. 名词解释 
缩写 全称及解释 
STA 
Station，工作站，指配备无线网络接口的计算设备，如笔记本、带 WiFi 功能的手
机、平板等 
AP Access Point, 接入点，具备无线至有线桥接功能的设备，如无线路由器 
P2P Peer-to-Peer 直连 
BSS Basic Service Set，一个由单个无线接入点（AP）所控制的无线网络覆盖区域 
BSSID 接入点(AP)的 MAC 地址 
SSID 服务集标识，局域网的名字 
ESS 
Extended Service Set，采用相同 SSID 的多个 BSS 形成的更大规模的虚拟 BSS，通过
SSID 来唯一标识 
802.11 series phy 层 802.11b/g/n, 802.11ac, 802.11ax… 
2.4G/5G/6G WiFi 信号工作频段 
Discovery 阶段 Passive Scanning 被动扫描 (侦听 Beacon), Active Scanning (Probe request/Probe 
Response) 
Authentication 阶段 Authentication request 认证请求, Authentication response 认证回复 
Associate 阶段 Association request 关联请求, Association response 关联回复 
 
 
 
 
 
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
MT8668 Android WiFi 
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
• P2P Scan. (All Channel) 
• P2P Search. (Social Channel) 
 
Remain on Channel 
Management Frame TX 
• Off channel TX 
• Non off channel TX. Multiple Interface 
• Interface add/del/change 
AAA (AP(Hotspot) Auth/Assoc) AP’s authentication and association AP 认证和关联 
SAA (Station Auth/Assoc) STA’s authentication and association STA 认证和关联 
MQM (Queue Management) QoS, Multiple queue control  
RLM (Radio Link Management) Bandwidth, preamble, slot time, OBSS, protection mode 
SCN (Scan) Queuing of scanning request 
SEC (Security) Encryption, key management 加密，密钥管理 
TXM TX path, CMD queue 
RXM RX path, Re-order buffer, RX AMPDU establishment 
CNM  
Concurrent Network Management 并发网络管理  
Handle channel privilege message 处理信道特权消息 
  
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
MT8668 Android WiFi 
User Manual  
Confidential B 
1.2 架构/流程概述 
MT6637 WiFi 架构整体如图 1-1 所示： 
 
 
图 1-1. WiFi 架构 
 
1.3 配置/客制化指南 
1. NVRAM 客制化 
WiFi 客制化部分一般会动到 NVRAM 文件中的配置，NVRAM 文件在设备中的位置: 
/data/nvram/APCFG/APRDEB/WIFI 
在代码中的位置/alps/vendor/mediatek/proprietart/custom/$project/cgen/CFG_WIFI_Default.h. 
对应栏位含义有标注，对应参数修改请使用 meta 工具进行。 
 
2. wifi.cfg 客制化 
客户可以使用 wifi.cfg 配置 WiFi 功能。公版默认没有加 wifi.cfg，如需客制化配置 WiFi 功能，请自建一个 wifi.cfg，
加到设备/vendor/firmware/中。 
驱动部分可配置的功能，默认值请查看 wlanInitFeatureOption()中的设置，可以通过 wifi.cfg 修改默认值。 
wifi.cfg 还可以修改固件中的功能默认值，具体根据功能需要，由 WiFi RD 提供修改参数。 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
 
3. Channel list 客制化 
常与所支持的国家码一起配置（NVRAM 中配置国家码）。客制化文件路径：
/alps/vendor/mediatek/kernel_modules/connectivity/wlan/core/gen4m/mgmt/rlm_domain.c 
 
下面举例说明客制化的四种情况： 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
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
 
参数介绍： 
CHAL_SPAN_5： 信道跨度 
14：起始信道 
1：信数量 
红色字体的代码指的是从信道 14 开始的一个信道作为被动信道，其他行的意思是将信道数量设为 0，即无被动
信道。 
 
1.4 常见问题/故障排除 
下面列出的是客户可以提前做一些初步分析以及需要客户注意的情况。其他问题，请按照要求，一次性抓齐日
志，提供给联发科技分析。 
1.4.1 WiFi 认证 
WiFi 认证是 WiFi 联盟为其会员推出的一项认证计划，旨在验证特定 WiFi 产品是否符合规范要求，并能够与其他
WiFi 设备进行互操作。 
是否要做 WiFi 认证由客户决定，通常大型制造商销售到全球的设备会进行认证。 
整个认证过程可以分为如下阶段： 
 
1. 准备阶段：准备产品样机和相关文档。 
2. 申请阶段：向 WiFi 联盟提交认证申请并支付相应费用。 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
3. 时程确认：与实验室确认测试时程。 
4. 测试阶段：产品将接受 WiFi 认证测试，包括性能、互操作性和安全性等方面的测试。  
5. 测试报告：收到测试报告，查看测试结果。 
6. 认证颁发：如果产品通过了所有测试，将获得 WiFi 认证，并可使用 WiFi 认证标识。 
7. 认证维护：定期更新认证，确保产品持续符合标准。 
 
其中需要联发科技协助的阶段如下： 
• 申请阶段：客户向联盟提交认证申请时需要注册产品信息，这个阶段可能会需要 联发科技协助确认产品的能力
集以便决定需要做哪些测试项。 
• 排程阶段： 客户向实验室确认测试时程。联发科技需要在 LAB 正式开始前准备完毕测试的工具，另外还需要确
认客户的时程足够满足测试和调试周期。 
• 测试阶段：实验室对产品进行测试。这个阶段联发科技可能会需要协助调试测试问题。 
1.4.2 WiFi 调试需要的日志 
WiFi 日志（包含 framework、wpa_supplicant、driver、FW）开启方法以及确认是否成功开启的方法。 
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
联发科技公版提供 debugloggerUI，FW 日志存储 consyslog， WiFi 驱动日志 存储在 mobilelog，tcpdump 存储在 netlog。 
搜集完成后，可以通过 pull 命令将数据从 /data/debuglogger 目录中提取出来。 
 
4. 固件日志级别设置 (UI:DebugloggerUI-->Log Level-->WiFi Firmware Log Level)，命令方式： 
Extreme: 
adb shell “iwpriv wlan0 driver ‘set_chip EvtDrvnLogCatLvl 0xFFFFFFFF’” 
 
More: 
adb shell “iwpriv wlan0 driver ‘set_chip EvtDrvnLogCatLvl 0xFFFFFF0F’” 
 
Default: 
adb shell “iwpriv wlan0 driver ‘set_chip EvtDrvnLogCatLvl 0xFFFFFF03’” 
 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
5. WiFi 驱动日志级别设置 (UI:DebugloggerUI-->Log Level-->WiFi Driver Log Level):: 
Extreme: 
adb shell “echo ”0xff:0x7f” > /proc/net/wlan/dbgLevel” 
 
More: 
adb shell “echo ”0xff:0x3f” > /proc/net/wlan/dbgLevel” 
 
Default: 
adb shell “echo ”0xff:0x2f” > /proc/net/wlan/dbgLevel” 
 
6. Sniffer log 
Sniffer log 是 WiFi 分析很重要的一种手段。用于监测 WiFi 各种帧在空口中的表现。譬如连线断连、吞吐、延时等问
题，都需要借助 sniffer log 来分析。 
在项目开始后，客户需要准备一台已安装抓包驱动和抓包工具 的个人电脑，用于捕获 sniffer log 的无线网卡。在 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
内核日志中记录了扫描状态机成功启动，并向固件下发命令  
scnFsmSteps: (SCN STATE) [SCAN]TRANSITION: [IDLE] -> [SCANNING] 
 
内核日志中记录了扫描命令已经成功地传递给了固件 
kalEnqueueCommand:(INIT TRACE) EN-Q CMD TYPE[x] ID[0x03]  
 
内核日志中记录了接收到固件发送的 scan done 事件 
aisFsmRunEventScanDone 
 
内核日志中确认已经扫描到了接入点（Access Point） 
(SCN INFO) [SCN:600:D2K] Total:12/24 
 
主要确认当前日志，看是否扫描到接入点。 
 
注：如需联发科技协助，请提供 consyslog， mobileLog， netlog 以及 sniffer log。抓取 sniffer log 的个人电脑需先与
设备同步时间，同时需提供双方 IP 地址及 MAC 地址。如果存在与 BT 2.4G 共存的情况，请同时提供 picus log (需标
注清楚问题时间点). 
 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
 
5. 检查 AIS 状态是否切到正常的 TR， 过滤条件为， (AIS STATE) 
aisFsmSteps: (AIS STATE) [AIS0] TRANSITION: [JOIN] -> [NORMAL_TR] 
 
6. 确认 EAP 行为，过滤条件为 EAPOL 
statsParsePktInfo:(RX INFO) <RX> EAPOL: key, M1, KeyInfo 0x008a, SSN:0 
statsParsePktInfo:(TX INFO) <TX> EAPOL: key, M2, KeyInfo 0x010a SeqNo: 2 
statsParsePktInfo:(RX INFO) <RX> EAPOL: key, M3, KeyInfo 0x13ca, SSN:1 
statsParsePktInfo:(TX INFO) <TX> EAPOL: key, M4, KeyInfo 0x030a SeqNo: 3 
 
7. 确认 DHCP 行为，过滤条件为 DHCP 
通过分析内核日志中的相关信息，可以确定 DHCP 过程中的成功与否 
确定 DHCP IPID 及 MsgType <TX/RX>都成对  
传输的状态都显示为 0 (表示成功) 
注：如需联发科技协助，请提供 consyslog， mobileLog， netlog，以及 sniffer log。抓取 sniffer log 的个人电脑需先
与设备同步时间，同时需提供双方 IP 地址及 MAC 地址。如果存在与 BT 2.4G 共存的情况，请同时提供 picus log (需
标注清楚问题时间点). 
 
1.4.5 网络吞吐量 
• 网络吞吐量受多种因素影响，包括人为操作、环境、协议限制、硬件、软件等。收集的条件越多，解决问题的
时间越短。 
• 为避免环境因素和测试工具不对齐带来的影响，请在屏蔽室进行吞吐量测试。建议使用  Linux 环境的 iperf 工具
进行测试。 
• 在同等环境下先测试同级别设备，观察差异，替换接入点（AP）以验证现象。 
• 确保进行 CTIA 模式测试，避免在线扫描、省电模式等带来的干扰。 
• 吞吐量测试原则上应为纯 WiFi 测试，请务必关闭蓝牙（BT）。 
• 如果存在蓝牙共存情况，需明确场景，并提供 picus log。 
 
注：如需联发科技协助，请提供 consyslog， mobileLog， netlog，以及 sniffer log。抓取 sniffer log 的个人电脑需先
与设备同步时间，同时需提供双方 IP 地址及 MAC 地址。如果存在与 BT 2.4G 共存的情况，务必说明并请同时提供
picus 日志 (需标注清楚问题时间点). 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
1.4.6 WiFi 引起的 MT6637 芯片重置 
当 WiFi 驱动程序或 WiFi 固件出现异常且无法恢复时，会触发芯片重置。在芯片重置之前，会有 coredump 机制，
用于转储异常现场的一些状态。 
在这种情况下，coredump 文件和 consyslog 是非常重要的分析工具，请务必提供。 
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
1. 检查 coredump 模式是否设置为 1 或 2： 
getprop persist.vendor.connsys.coredump.mode 
 
2. 如果为 0，可以将其设为 1 或 2 后重启 
setprop  persist.vendor.connsys.coredump.mode 2 
 
WFsys 
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
MT8668 Android WiFi 
User Manual  
Confidential B 
3. 重启后，检查 coredump 模式是否设置为指定值，以及 wifi_dump 是否在运行： 
auto8668p1_64_bsp:/ # getprop | grep coredump 
getprop | grep coredump 
[persist.vendor.connsys.coredump.mode]: [2] 
 
auto8668p1_64_bsp:/ # ps -A |grep wifi_dump 
ps -A |grep wifi_dump 
system        1121     1   10788624   5268 poll_schedule_timeout 0 S wifi_dump 
 
4. 如果 wifi_dump 在运行，请打开 WiFi 并手动触发一次芯片重置，查看是否生成 coredump 文件： 
auto8668p1_64_bsp:/ # echo 0xDB9DB9 > /proc/driver/conninfra_dbg 
auto8668p1_64_bsp:/ # echo 0x1 > /proc/driver/conninfra_dbg 
 
查看是否有生成 coredump 文件： 
auto8668p1_64_bsp:/ # ls data/vendor/connsyslog/wifi 
ls data/vendor/connsyslog/wifi 
combo_t32_20240602073036.CI_M  combo_t32_20240602073036._ROM 
combo_t32_20240602073036.MDLM  combo_t32_20240602073036.cmm 
combo_t32_20240602073036.SRAM  combo_t32_20240602073036.emi 
combo_t32_20240602073036.WDLM  combo_t32_20240602073036_issue_info.xml 
combo_t32_20240602073036._ILM  combo_t32_20240602073036_mcif.emi 
 
5. 如果可以顺利生成 coredump 文件，则可以开始抓取问题日志了。 
抓到问题后，除了 debuglogger，请同步提供 coredump 文件，如 AEE 有生成 db 文件，也请同步提供。 
 
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
MT8668 Android WiFi 
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
# SRC0095 MT8668_Camera_Sensor_Driver_Bringup_SOP_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Camera_Sensor_Driver_Bringup_SOP_CN_V1.0.pdf

SHA-256：355d4f791169e10496dfc12ad0cf551389672336cc970f7d7e0ebef318ee53b6

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0095.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Camera Sensor Driver 
Bringup SOP  
 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 江攀 正式版 
 
  
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 Camera Driver Bringup SOP ······································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 调试方法 ·································································································································································· 4 
 硬件电路检查 ·············································································································································· 4 
 DTS 配置 ······················································································································································· 5 
 Sensor Driver 代码的书写 ···························································································································· 5 
 上电时序检查 ·············································································································································· 5 
 Fs_seq 配置··················································································································································· 5 
 Metadata 的配置 ·········································································································································· 6 
 Kernel 启动 log 检查 ···································································································································· 6 
 查看 Camera Device 信息和 Metadata 信息 ······························································································· 7 
 开启 Sensor Driver Debug Log ······················································································································ 8 
 Sentest_v4l2 测试命令 ································································································································· 8 
 最大 Sensor 数量配置 ······························································································································· 10 
 配置 Sensor 的 Facing ································································································································ 10 
 Multicam-YUV 配置（Yocto） ··················································································································· 11 
 Set_stream_control 实现 ···························································································································· 11 
 GPIO 操作命令 ··········································································································································· 12 
 其他注意事项 ············································································································································ 12 
 Dump 图方式·············································································································································· 13 
附件一 附加条款 ····························································································································································· 14 
 
图片目录 
图 1-1. 硬件设计电路 ································································································································································ 4 
 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
1 Camera Driver Bringup SOP 
1.1 概述 
本章节主要介绍 MT8668 Camera bringup 过程中相关调试方法和经验。 
 
1.2 调试方法 
 硬件电路检查 
硬件电路检查主要是要确认实际电路板的接线是和硬件设计电路图完全一致的，避免由于电路板线路错误或者错
接导致模组烧坏或者工作异常。 
 
 
图 1-1. 硬件设计电路 
 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
 DTS 配置 
具体如何配置在 MT8668_Yocto_Camera_Driver_User_Manual 有说明，这里主要提醒下，各个 pin 需要选对对应的
GPIO 或者 PMIC 的 power pin，seninf 和 sensor 的影射关系要和硬件电路相对应。 
 
• mclk source 的配置不可以冲突或者用错 
• sensor name 和 seninf 的节点不要配置错误，如配置两个 sensor0 等，会导致 probe 失败，开机 sentest 找不到
sensor 
• sensor name 或 seninf 使用未定义的节点也会报错，probe 失败 
• 如果不做增加，sensorid dts 配置范围为 sensor0 – sensor11，增加方法在后面章节 
• multicam-yuv，每个 seninf 里面的 csi-port 都需配置为实际使用的 csi 口 
• I2c 地址不能超过 0x7f，会导致 sensor 无法 probe 
• 若是无法 probe 请去掉客制化，先确保 sensor 能正常 probe 
 
 Sensor Driver 代码的书写 
关于 Sensor driver 代码，建议基于当前项目对应的公版使用的 sensor driver 代码，拷贝一份来修改。千万不要用旧
项目的 sensor driver。因为目前项目用的是 v4l2 架构和 isp7 以上的 camera 架构，很多数据结构和指令名称和以前
都不同了。 
拷贝一份 sensor driver 代码后，先修改 sensor name，然后按照 sensor spec，填充各个数据段和寄存器的设定，以
及指令的处理。 
 
 上电时序检查 
这部分的配置，需要满足 sensor spec 上规定的时序要求。如果是以前使用过的 sensor，这部分是可以直接参考以
前的。上电时序是否正确，关系到 sensor 是否可以正常工作。 
 
  Fs_seq 配置 
经常会遇到 MT8668 忘记配置下面红色部分，MT8668 是需要特别增加的： 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
 
 
 Metadata 的配置 
metadata 的配置和使用和旧项目没有什么差异。还是按照之前的方式配置就可以了。 不过还是建议拷贝一份当前
项目的 metadata 目录，然后修改名字，然后对应每个 metadata 的值，按照规格书写（如果是以前用的 sensor，可
以参考以前项目的 metadata 值）填充就可以。 
 
 Kernel 启动 log 检查 
主要是检查是否有跑 imgsensor probe，即 imgsensor 驱动的加载。是否成功得读取到了 sensor id，找到了当前
bringup 的 sensor。 
 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
1. 模组完全没有跑 Probe 流程 
请检查 imgsnsor.ko 是否成功加载，可以在下述文件加 log 确认有跑到 imgsensor 模块的入口函数 
src/kernel/modules/mtkcam/mt8668/camera/imgsensor/src-spm_isp8s/adaptor-drv.c 
  
 
2. 某一颗 sensor 没有跑 probe，其他的 sensor probe 成功 
a) 请检查 DTS 文件，是否有 sensor Id, seninf 节点名字重复、冲突 
b) 是否在异常的 sensor 所在的 I2C 设定中，客制化加入了相关 GPIO 引脚定义导致异常无法 probe，请先去除
非必要供电的 GPIO 引脚，确保能正常 probe 
c) 确认 sensor 的 status 值是否配置为 okay 
 
3. I2C 通信失败 
a) 检查 I2C 通道是否配置错误 
b) 检查模组是否连接上，连接口是否松动 
c) I2C 地址是否配置错误 
 
 
4. 成功读取到 ID，sensor probe 仍然失败 
请确认 driver 文件中，配置的分辨率、FrameLength 和 Linelength 等信息，如果 FrameLength 和 LineLength 大于
分辨率的宽和高，会导致初始化 sensor 信息时，计算 Vblank 异常，从而 probe 失败。 
 
 查看 Camera Device 信息和 Metadata 信息 
Android 端查看 camera device 信息和 metadata 信息 
adb shell dumpsys media.camera -V 2 > meta.txt 
此文件可以查询到 sensor 的 facing 和 metadata 的相关信息等，如下图所示，此 sensor 的 facing 为 FRONT 前摄。 
 
 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
 开启 Sensor Driver Debug Log 
adb shell "echo 2 > /sys/module/imgsensor_spm_isp8s/parameters/sensor_debug" 
 
 Sentest_v4l2 测试命令 
• ISP7/7S/7SP/8/8s 以上平台使用 sentest_V4l2 命令，ISP6s 及以下平台，仍使用 sentest 命令，当前 MT8668 平台
为 isp8s，使用 sentest_v4l2 命令。Sentest_v4l2： 
可显示当前平台端成功探测到的 sensor 以及相关信息。 
 
 
• sentest_v4l2 4 0 （2 为 SensorDevIdx 值，0 表示预览场景） 
表示要打开 max96712 这个 sensor 进行预览，此时另开一个命令窗口，输入： 
cat /sys/devices/platform/soc/1a400000.seninf-top/status 如下图所示：（android v 结果） 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
 
 
a) csirx_mac_csi2 irq_stat 值后缀为 324 或者 325，表示正常收到 sensor 数据，如果为 0，说明接收数据异常，
请检查 log，I2C 通信是否正常、测量 mipi 信号是否正常。 
b) vc 0x0 表示 VC0，图中非组帧 avm 的 1280*720*4，共有 4 路 VC；dt 0x1e 表示 YUV422 格式。如 dt 配置错
误，也可能导致 ISP 接收数据异常。 
c) done_irq 为 1 表示收图成功。 
d) csirx_mac_csi2 irq_stat 既不是 0 也不是 324 或者 325，可以尝试修改 settle 和 trail。 
 
 
 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
 最大 Sensor 数量配置 
MT8668 最大支持 sensor 数量为 8，修改位置如下： 
如新增 sensor9、sensor10，修改后可用 sensorId 为 sensor0-sensor9，所以此时最大 sensor 数量为 10。 
增加 MAIN5 和 SUB5，下方的枚举值，每增加一个需要左移一位。 
 
• Android: 
– device/mediatek/vendor/camera/kernel-headers/kd_camera_feature.h 
– kernel/kernel_device_modules-6.12/drivers/misc/mediatek/imgsensor/inc/kd_camera_feature.h 
 
 
 
• Yocto: 与 Android 一致，按照上述 Android 修改方法填写即可。 
– src/multimedia/mtkcam-auto/mtkcam-utils/kernel-
headers/mediatek/mt8668/kd_camera_feature.h 
– src/kernel/linux/v6.12_mt8668/co_device_module/drivers/misc/mediatek/imgsensor/inc/kd
_camera_feature.h 
 
 配置 Sensor 的 Facing 
如下图所示，将 sensor0 的 facing 修改为前摄。REAR 表示后摄，FRONT 表示前摄，在车机平台，sensor 有很多，
我们一般不关注 sensor 的 facing 信息。 
 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
• Android: 
vendor/mediatek/proprietary/custom/mt6881/hal/imgsensor_cfg_setting/cfg_setting_imgsensor
.cpp 
• Yocto:  
src/multimedia/camera-hal/mt8668/custom/mt6881/hal/imgsensor_cfg_setting 
 
 
 Multicam-YUV 配置（Yocto） 
当前 MT8668 平台 Multicam-YUV 使用 Master 加 Slave 架构。 
如 4 路 Multicam，则需新增 5 个驱动文件，请相应按照公版 max96712_mipi_yuv 复制一份进行修改即可。如需配
置 2 路 Multicam，则需要 master + 两路 slave 驱动，依次类推。 
 
 
需要特别配置 static_ctx 的 group_info 如下，与 DTS 文件中的 sensorId 对应： 
 
 
 Set_stream_control 实现 
set_stream_control 的实现是十分必要的，该函数是实现对 sensor 发送 stream on/off 指令的。 
另外在 sensor_init 结束后，需要给 sensor 做 stream off。 
SerDes 相关使能 MIPI 信号的控制请放在 set_streaming_control 函数中实现，如提前使能 SerDes 的 MIPI output 信
号，可能导致 ISP 收图时序异常。会出现第一次打开 ISP 收不到 MIPI 数据，sensor 经过一次 reset 后才能正常收
图，或是无法收图的情况。 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
如下，请把对 SerDes 的 MIPI output 控制放在 streaming_control 函数： 
 
 
 GPIO 操作命令 
在点亮 sensor 的过程中，有时候需要确认 GPIO 的状态，或者对 GPIO 进行拉低拉高测试，下面是点 sensor 常用到
相关 GPIO 命令。 
 
• cat proc/mtk_gpio/soc.pinctrl  //打印所有 GPIO 的状态 
• echo mode 180 0 > soc.pinctrl  //设置 gpio180 为 GPIO 模式 
• echo dir 180 1 > soc.pinctrl   //设置 gpio180 为输出模式 
• echo out 180 1 > soc.pinctrl   //设置 gpio180 的电平为高 
假如提示 Read-only file system，可以使用指令 mount -o remount,rw / 对系统进行 remount。 
 
 其他注意事项 
1. mipi pixel rate = grabwindow_width * grabwindow_height * fps。 
2. 配置分辨率的地方 imgsenor info， winsize， vc info 三者要一致。 
3. 配置 sensor output format 的地方 imgsensor info ，vcinfo 两者要一致。 
4. Feature control 内的指令能实现的尽量都实现。 
5. 某些模组出图有条纹等异常场景，可以尝试调节 MIPI 驱动电流。 
6. Tunning file 相关的 porting 请参考 MT8668_3A_ISP_Add_Sensor_dbParam_Compile_Environment.pptx 。 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
Confidential B 
 Dump 图方式 
如已经按照 MT8668_Yocto_Camera_Driver_User_Manual 成功点亮 sensor，sentest_v4l2 测试预览的状态为 324 或
325，可以 dump 图测试。 
sentest_v4l2 1 0 2  //sentest_v4l2 SensorDevIdx scenario fps Test_raw_dump 
 
此命令只能 dump 单路 VC 的 sensor，RAW 和 YUV 格式都可以 dump。 
dump 路径：/data/cameradump_camio/ 
 
• MW dump P1/P2 输出：（只能 dump YUV 格式） 
a) 创建输出路径：mkdir /data/vendor/camera_dump 
b) 开始 dump: setprop vendor.debug.camera.coredevice.wpe.dump 2 
c) 打开 camera APK 进行预览 
d) 停止 dump: setprop vendor.debug.camera.coredevice.wpe.dump 0 
 
 
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
MT8668 Camera Sensor Driver 
Bingup SOP 
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

