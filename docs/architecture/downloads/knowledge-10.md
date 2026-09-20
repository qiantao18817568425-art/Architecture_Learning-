# SRC0039 Tbox_Telephony_MD and mdlog SOP.pdf

来源：培训材料/PVT技术分享文档/modem抓取方式和常见的日志分析/Tbox_Telephony_MD and mdlog SOP.pdf

SHA-256：0de6d012049cc85ed7edda783b32f77158b36d457fbe167fe66d51967c3c52ad

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0039.html)

## PDF物理页 1

Tbox_Telephony_MD and mdlog SOP 
目录 
modem log sop ................................................................................................................................ 2 
一、 代码位置与编译流程........................................................................................................ 2 
二、 Build-in 与启动规则 ......................................................................................................... 2 
三、 日志存储与管理................................................................................................................ 2 
四、Rotate 机制 ......................................................................................................................... 2 
◼ 删除顺序：按优先级从低到高，删够目标量即停 ................................................................... 3 
◼ 第二步：整文件夹清除逐文件删除仍不够时，递归删除文件夹内所有剩余文件，最后删
除空文件夹本身 ................................................................................................................................... 4 
五、控制命令............................................................................................................................. 4 
六、Insight Log 相关 ................................................................................................................. 6 
七、MD Log Filter ..................................................................................................................... 6 
八、通过 NLT/ELT tool  配置 mdlog filter .............................................................................. 7 
九、常见问题............................................................................................................................. 9 
Tbox/Telephony/MD 测试 SOP ................................................................................................... 10 
一、Tbox/Telephony/MD 常规测试 SOP ............................................................................... 10 
1、Tbox/Telephony/MD 功能 .......................................................................................................... 10 
2、MD EE 问题 ................................................................................................................................... 11 
3、Modem 休眠唤醒与 MD low power 问题 .................................................................................. 11 
4、AP CCCI driver 问题 ...................................................................................................................... 13 
二、Tbox/Telephony/MD FT 场测 SOP.................................................................................. 13 
1、测试设备准备 .............................................................................................................................. 13 
2、设置测试 mdlog 模式 .................................................................................................................. 14 
 
 
 
 
 
 
 
 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 2

modem log sop 
一、 代码位置与编译流程 
• bb 文件位置 
meta/meta-mediatek/recipes-devtools/mdlogger.bb 
• 源码位置 
src/devtool/mdlogger 
二、 Build-in 与启动规则 
• Build-in 规则 
o 参考 debug_level.bbclass，判断 URL 和环境变量，决定 DEBUG_LEVEL 
o 客户默认关闭，需配置 MTK_LOG_CUSTOMER_SUPPORT = "yes" 才 build-in 
• 启动规则 
o user 版本默认关闭，可通过命令开启 
o https://online.mediatek.com/apps/faq/detail?faqid=FAQ19560&list=SW 
三、 日志存储与管理 
• 存储路径 
o 日志存储于 /data/debuglogger/mdlog1 目录，每次 start/stop 都会生成新的
Folder 
o 存储路径可以自定义来设定, 需要再 User Debug Load 下通过改 Property 方式
进行, 修改 Property 需要将 emdlogger 关闭的前提下进行 
▪ setprop debug.mdlogger.log2sd.path <path> 
Note, 关闭 emdlogger 的命令: emdlogger_ctrl 7 
设定好新的 Log 路径后需再重启 emdlogger;  
▪ 开启 SD mode: emdlogger_ctrl 6 
▪ 开启 PLS mode: emdlogger_ctrl 11 
四、Rotate 机制 
• SIZE 管控（仅 SD MODE 有 SIZE 管控，PLS/USB MODE 下无此机制） 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 3

o 总空间限制：默认 600MB, 低于 600MB 无效（因单文件 200MB, 且回收机制
至少保留 3 份，实际空间不会低于 600MB）。 
o 单个 log 文件限制：每个日志文件最大 200MB。 
o 达到 200MB 自动切分：写满后自动新建下一个日志文件。 
o 配置文件: /data/mdlog/mdlog_recycle_size_config 
o build time 修改：通过 getLogRecycleSize 读取配置文件，读不到则用默认值（源
码默认 600MB）如需更改默认值，在源码 getLogRecycleSize 的默认返回值处修
改 
o run time 修改, 可通过命令动态设定：  
adb shell emdlogger_ctrl 21 <size> 
<size>单位为 MB，写入配置文件，重启后生效 
• 文件夹删除逻辑 
◼ 触发条件: Recycle 线程每 15 秒检查一次日志根目录总大小，超过 Recycle 
Size（默认 600MB）时触发清理。 
◼ 文件夹分类：扫描日志根目录，按命名规则自动分类： 
类别 识别规则 示例 
普通文件夹 不含 _EE_ MDLog1_20260401_120000 
EE 文件夹 含 _EE_ MDLog1_20260401_120000_EE_xxx 
FullAndMini EE 含 _EE_ + _FullAndMini MDLog1_..._FullAndMini_EE_xxx 
当前运行文件夹 file_tree_current.txt 最后
一条 – 
◼ 删除顺序：按优先级从低到高，删够目标量即停 
日志根目录 
├─ MDLog1_0401_100000/ ............ ← ⓪ 最先删（普通，无 .bin） 
├─ MDLog1_0401_110000/ ............ ← ⓪ 
├─ MDLog1_0401_120000/ ............ ← ⓪ 含 .bin，推迟删 
├─ MDLog1_0401_130000/  ★正在写入  ← ① 只删内部旧文件，不删文件夹 
├─ MDLog1_..._EE_xxx/ ............ ← ② EE，尽量保留 
└─ MDLog1_..._FullAndMini_EE_/ .... ← ③ 最后才删 
优先级 删除对象 删除方式 
⓪ 普通文件夹（不含 .bin） 整个文件夹删除 
① 普通文件夹（含 .bin dump） 整个文件夹删除 
② 当前运行文件夹 仅删内部旧文件 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 4

优先级 删除对象 删除方式 
③ EE 文件夹 整个文件夹删除 
④ FullAndMini EE 文件夹 整个文件夹删除 
同类别内按时间排序，**最旧的先删** 
◼ 文件夹中 Log 删除逻辑: 
◼ 进入某个文件夹清理时，分两步执行 
◼ 第一步：逐文件删除 
◆ 读取文件夹内 file_tree.txt，识别旧日志文件（.dmp.dmp / .bin.bin 
/ .tmp），按类型分组后从最旧的开始逐个删除。 
MDLog1_0401_130000/ 
├── MDLog1_20260401_130000.muxz      ← 最旧，先删 
├── MDLog1_20260401_130500.muxz      ← 次旧，再删 
├── MDLog1_20260401_131000.muxz      ← 较新，保留 
├── MDLog1_20260401_131500.muxz.tmp  ← 正在写入，保留 
└── file_tree.txt 
步骤 说明 
计算保留数 按日志类型数量平均计算，默认至少保留几个 
逐个删除 从最旧文件开始，每删一个检查是否已足够 
递减保留数 未删够时减少保留数重试，当前运行文件夹最少
保留 3 个 
◼ 第二步：整文件夹清除逐文件删除仍不够时，递归删除文件夹内所有
剩余文件，最后删除空文件夹本身 
第一步（逐文件） ─删够?─→ 停止 
        │ 不够 
        ▼ 
第二步（全清除） ─删够?─→ 停止 
        │ 不够 
        ▼ 
    进入下一优先级文件夹 
**当前运行文件夹**只执行第一步，不做整文件夹清除。 
五、控制命令 
命令 作用说明 是否影响重启后 备注 
emdlogger_ctrl 1 获取当前
logging mode 否 查询当前工作模式 
emdlogger_ctrl 2 
获取下次重启
后的 logging 
mode 
否 查询配置文件中的自动启动模
式 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 5

命令 作用说明 是否影响重启后 备注 
emdlogger_ctrl 3 设为 USB 自动
启动模式 是 修改 /data/mdlog/mdlog1_config，重
启后生效 
emdlogger_ctrl 4 设为 SD 自动
启动模式 是 修改 /data/mdlog/mdlog1_config，重
启后生效 
emdlogger_ctrl 5 立即以 USB 模
式开始日志 是 立即切换并写入配置，重启后
保持 
emdlogger_ctrl 6 立即以 SD 模
式开始日志 是 立即切换并写入配置，重启后
保持 
emdlogger_ctrl 7 停止日志 是 立即停止并写入配置，重启后
保持 stop 状态 
emdlogger_ctrl 8 恢复日志 否 仅本次生效，pause 后 resume
会新建 MDLog1_xxx folder 
emdlogger_ctrl 9 暂停日志 否 仅本次生效 
emdlogger_ctrl 10 查询日志是否
暂停 否  
emdlogger_ctrl 11 以 PLS 模式开
始日志 是 
立即切换并写入配置，重启后
保持。建议在休眠唤醒测试或
只关注 EE 时使用该模式 
emdlogger_ctrl 12 Flush 日志 否 
发送 flush 消息给 modem，收到
ack 后返回 1/0，passive 模式下
有效 
emdlogger_ctrl 15 重置 modem 否  
emdlogger_ctrl 17 测试 polling 模
式 否  
emdlogger_ctrl 18 
查询 memory 
dump 是否完
成 
否  
emdlogger_ctrl 
21 <size> 
设置回收日志
最大空间
（MB） 
是 写入配置，重启后生效 
emdlogger_ctrl 22 
<gear_id> 
设置 CCB GEAR 
ID 是 设定后需重启平台才生效 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 6

命令 作用说明 是否影响重启后 备注 
emdlogger_ctrl 23 获取 CCB GEAR 
ID 列表 否  
emdlogger_ctrl 24 获取当前 CCB 
GEAR ID 否  
emdlogger_ctrl 25 获取 mdlog 
filter list 否  
emdlogger_ctrl 26 
<filter_file> 
更新 mdlog 
filter 是 需先 stop mdlog，再更新
filter，最后 start mdlog 
emdlogger_ctrl 27 恢复 mdlog 
filter 是 需先 stop mdlog，再恢复
filter，最后 start mdlog 
emdlogger_ctrl 28 Flush Insight 日
志 否  
六、Insight Log 相关 
• System Trap 功能：支持 MD 主动 FLUSH PLS LOG。 
• 注意事项：Insight Log 使用前需要先设置 PLS mode，且需要设置 gear id 为合适的
值, 有些 gear id 默认不会分配 Insight log buffer;  
o emdlogger_ctrl 7          //停止日志 
o emdlogger_ctrl 11   //启动 PLS mdlog 
o emdlogger_ctrl 28      //导出 Insight 日志 
gear_id  insight log buffer size 
1(CCB:2+20MB) 0.5 MB 
4(CCB:2+30MB) 1 MB 
12(CCB:2+62MB) 1 MB 
13(CCB:2+94MB) 1 MB 
14(CCB:2+14MB) 0.5 MB 
16(CCB:2+190MB) 6 MB 
2(CCB:2+10MB) No insight log buffer default 
3(CCB:0+0MB) No insight log buffer default 
11(CCB:2+2MB) No insight log buffer default 
 
七、MD Log Filter 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 7

Default MD Log Filter 可透过命令 emdlogger_ctrl 25 来获取到:  
             
  
sh-3.2# emdlogger_ctrl 25 
get mdlog filters: 
/data/mdlog/filters/catcher_filter_LowPowerMonitor.bin 
/data/mdlog/filters/catcher_filter_2_Standard.bin 
/data/mdlog/filters/catcher_filter_1_Moderate.bin 
/data/mdlog/filters/catcher_filter_4_UltraSlim.bin 
/data/mdlog/filters/catcher_filter_3_Slim.bin 
......... 
若希望修改 Log filter 可通过 emdlogger_ctrl 26 <filter_file>来实现, 操作前后需要分
别 emdlogger_ctrl 7 和 emdlogger_ctrl 8 操作 
>>>> emdlogger_ctrl 7 
emdlogger_ctrl 26 /data/mdlog/filters/catcher_filter_4_UltraSlim.bin 
>>>> emdlogger_ctrl 8 
八、通过 NLT/ELT tool  配置 mdlog filter  
      1）打开 NLT/ELT tool, 导入 debuglogger\mdlog1 中的.EDB 文件 
             
 
      2）在左上角点击 Control 菜单 -> Set Target Filter 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 8

3)  Import data/mdlog 下的 filter bin 或要使用的 filter bin (NLT 界面) 
                     
 
    4）设置 filter，移除勾选内容，Export 导出生成新的 filter 文件 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 9

5）将生成的 filter 文件 adb push 到 data/mdlog 中，并选择使用此filter 文件，重启生效 
九、常见问题 
Q：如何抓取抓取休眠期间 modem log? 
A：使用 PLS mode 可以抓取休眠期间的 modem log，具体操作如下： 
1.Start PLS mdlog： 
emdlogger_ctrl 11 
2.复现问题。 
3.复现到问题后立即 唤醒系统，下 cmd flush 出 PLS log： 
emdlogger_ctrl 12  
Note：要快速 flush 导出，若等待时间稍长，问题 log 有可能会被覆盖。log 在
/data/debuglogger/mdlog1 目录下 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 10

Q：只关注 modem EE case 用什么 mode 抓 log？ 
A：只关注 modem EE case 也使用 PLS mode 抓取 log。PLS mode 会抓取 modem  EE 时的
log(原理：Modem EE 之后，就会唤醒 AP，AP 唤醒 MDlogger，MDlogger 会收到消息，去
dump 那块 buffer 里面的 log) 
Q：拉出的 log 文件为什么不齐全？ 
A：可以看拉取下来的 mdlog1 内的 file_tree 文件。file_tree 文件记录着所有生成的 log 文
件记录。如果你所需要的 log 文件在 file_tree 内存在，但是在实际文件夹中并没有，证明
需要的 log 文件被 Rotate 机制已经删除。在拉取 modem log 时需要在问题发生后尽快拉
出，否则就会有 log 文件被 Rotate 掉的情况，导致问题 log 被覆盖。 
 
Q：我的系统内没有 emdloger 的 bin，怎么开启？ 
A:    1.首先确认你的系统版本（userdebug / user）。 
        2.如果是 user 版本，默认不 build-in emdlogger，是否 build-in 由
MTK_LOG_CUSTOMER_SUPPORT 环境变量决定。配置 config: 
MTK_LOG_CUSTOMER_SUPPORT = “yes”使 emdlogger Build-in 。 
 
Tbox/Telephony/MD 测试 SOP 
一、Tbox/Telephony/MD 常规测试 SOP 
1、Tbox/Telephony/MD 功能 
     1.1 NW/SIM/Call/SMS/Data 等功能问题: 
1) 测试设备需要烧好校准，且接好天线。 
2) 将时间同步为标准时间。 
3) 需提供 log 资料: /data/debuglogger(mobilelog+mdlog) 
4) 接收 Call/SMS fail 的问题，需提供拨打时间点、发送端 log 与运营商信令 log(有条件
需提供)。且测试前发送端与接收端的系统时间都要设为标准时间，。 
5) 若是 Data 网络传输问题，还需提供 netlog(tcpdump)。 
   1.2 Data Throughput 问题 
    1) 请参考 “ [FAQ17688] Speedtest 速率测试需知”，  
    2)  需提供 log 资料如下： 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 11

a) 测试 Dev 的 /data/debuglogger(mobilelog+mdlog+netlog) 
          b) 同地点同时间段，使用同 SIM 卡测试的 REF /data/debuglogger(mobilelog+mdlog+netlog) 
          c) Dev 与 REF 设备，都需要各测试 10 次以上，除掉最高与最低值，取平均值做对比。 
   1.3 netlog 提供方法: 
   1) Android 端: 在 debugloggerUI 中开启 netlog 即可 
   2) Yocto 端：adb shell ->  tcpdump -i any -w /data/netlog.pcap 
 
2、MD EE 问题 
      2.1 需提供 log 资料如下： 
1) /data/debuglogger(mobilelog+mdlog) 
2) /data/aee_exp(MD EE db) 
3) MD elf(from modem build load) 
4) MD mem dump bin 
           注: a) For 3OS，mdlog 在 tbox 中，还需提供 SOS 中的 debuglogger(mobilelog)。 
                 b) HS1 阶段无 mdlog，HS2 阶段不一定有 mdlog。若无 mdlog，就不需要提供。 
       2.2 参考 FAQ22955 
              1) 提供 MD EE 必要问题信息 
              2) Modem Exception 提交 eservice 的格式 
        2.3 check MD state 
              Tbox UOS(3OS) / SOS(2OS)  进入 adb shell  -> cat /sys/kernel/ccci/boot 
 
3、Modem 休眠唤醒与 MD low power 问题 
3.1 测试环境及相关设置 
        1) 平台有正确烧录 RF 校准参数。 
        2) 是否有正确接上天线。 
        3) 测试时是否有关闭 mdlog(建议关闭 mdlog 之后重启下平台) 
        4) 测试的网络信号环境是否稳定。 
        5) 是否有插上 SIM 卡，对比机是否使用同一张 SIM 卡在同一地点同一时间段测试。 
        6) 若是 Yocto OS 或 hyp 2OS 或 hyp 3OS， Acc off 或灭屏时还需调用 ML_SetScreenOffUrcFilter 设
置 filter URC，双卡版本 slot_id 0 与 1 都要设置。 
        7) Acc off 或灭屏时，需断开所有公网与私网 data。若有私网 data 长链接，则无需断开私网。 
 
  3.2 需提供的 log 资料 
       1) Tbox UOS debuglog(mobile log) / SOS debuglog(mobile log) 
       2) PLS mdlog 
       3) 如果是 data(cccif dpmaif) MD 唤醒，还需提供对应的 netlog。 
       4) 若是非唤醒功耗问题，须提供功耗图原始文件 (In .pt4/.pt5) 
 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 12

3.3 PLS mdlog 抓取方法 
  3.3.1 Yocto 系统上操作方法 
       1）adb shell cmd 操作方法 
            a）GET_CCB_GEAR_ID_LIST，查看可设置的 CCB buffer 大小 
                  emdlogger_ctrl 23 
            b）SET_CCB_GEAR_ID ，例如: 最大值是 192M，CCB_GEAR_ID 是 16 
                  emdlogger_ctrl 22 16 
            c）SOS 中 adb reboot 或 断电重启设备 
            d）Stop 普通 mdlog 
                  emdlogger_ctrl 7 
            e）Start PLS mdlog 
                   emdlogger_ctrl 11 
            f）复现问题 
            g）复现到问题后立即 Acc on 或亮屏， 快速 flush 出 PLS APlog + mdlog  
                   emdlogger_ctrl 12 
                  注：要快速 flush 导出，若等待时间稍长，问题 log 有可能会被覆盖。log 在
data/debuglogger 目录中。 
            h)  可以参考 mdlog 控制命令列表，设置不同的 filter，延长抓取 PLS mdlog 的时长。例如： 
                      emdlogger_ctrl 25                    //获取 mdlog filter list 
                    emdlogger_ctrl 26 <filter_file>      //更新 mdlog filter 
            I）以下是 bat 脚本监听 USB，退出 Acc off 时自动 flush PLS mdlog，降低人为操作延时影
响。 
                  
adb_flush_yocto.
bat  
 
 3.3.2 android 系统 上操作方法 
       1）debugloggerUI/mtklogger UI  界面方法，参考以下 FAQ 
             [FAQ25644] How to turn on passive log and get log 
      2）adb shell cmd 操作方法(android R 及以上版本) 
        a）Stop Modem Log 
              adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name stop --ei cmd_target 2 -n 
com.debug.loggerui/.framework.LogReceiver 
              --->步骤 1 是需要确认 PLS mode 抓 mdlog 时未开始抓 log，如本来 mdlog 就是关闭的，则不需要 
        b）Set PLS Mode 
                  adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name switch_modem_log_mode_3 --ei cmd_target 
1 -n com.debug.loggerui/.framework.LogReceiver 
        c）Start Modem Log 
              adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name start --ei cmd_target 2 -n 
com.debug.loggerui/.framework.LogReceiver 
        d）Set log flush path 
                 adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name 
silent_log_path,/resources/mtklog/mdlog --ei cmd_target 2 -n com.debug.loggerui/.framework.LogReceiver 
              ----> 路径默认是 data/debuglogger，如果不需要修改路径，步骤 4 可以省略 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 13

e）Do log flush  
             adb shell am broadcast -a com.debug.loggerui.ADB_CMD -e cmd_name log_flush --ei cmd_target 2 -n 
com.debug.loggerui/.framework.LogReceiver 
           
            android P 版本 flush cmd:  
            adb shell am broadcast -a com.mediatek.log2server.EXCEPTION_HAPPEND -e path SaveLogManually -e 
db_filename test --ez is_need_zip true --ez is_need_all_logs false -n 
com.mediatek.mtklogger/.framework.LogReceiver 
        f）在工模/debuglogerUI 中设置 slim 等模式，减少 mdlog 量打印，延长抓取 PLS mdlog
时间。 
        g）以下是 bat 脚本监听 USB，退出 Acc off 时自动 flush PLS mdlog，降低人为操作延时
影响。供参考使用 
              
adb_flush_androi
d.bat  
 
4、AP CCCI driver 问题 
    4.1 需提供的 log 资料 
1) /data/debuglogger(mobilelog+mdlog) 
2) /data/aee_exp(KE/HWT db) 
3) /proc/ccci_dump 
注: for 3OS，mdlog 在 tbox 中，还需提供 SOS 中的 debuglogger(mobilelog)。 
    4.2 其它 check MD 状态方法 
          1) Check MD state:  
              Tbox UOS(3OS) / SOS(2OS)  进入 adb shell  -> cat /sys/kernel/ccci/boot 
          2) Code 中 enable CCCI debug log 
               Path: 
Yocto/src/kernel/linux/v6.x_mtxxx/co_device_module/drivers/misc/mediatek/eccci/ccci_core.c  
              unsigned int ccci_debug_enable = CCCI_LOG_LEVEL;   -> 修改为 unsigned int ccci_debug_enable 
= CCCI_LOG_ALL_UART; 
 
二、Tbox/Telephony/MD FT 场测 SOP 
1、测试设备准备 
    1.1 确保电量充足 
         测试前保证车机电量充足。若是台架设备，请使用对应电源，确保台架设备稳定运
行。 
    1.2 时间同步  
        将设备联网，同步为标准时间 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage

## PDF物理页 14

1.3 确认设备有烧好 RF 校准 
       a) AT  cmd 方式确认 
          Gen93 平台 使用  AT+ECAL? 
          +ECAL: 0 --> RF calibration data are not complete 
          +ECAL: 1 --> RF calibration data are complete (would always returen 1 on customer's project) 
 
          Gen97/98/99 平台使用 AT+EGMC=0,"query_rf_cal_status" 
          +EGMC: "query_rf_cal_status","valid?","no" 
           +EGMC: "query_rf_cal_status","valid?","yes" 
           "query_rf_cal_status" 的回傳結果，yes 就代表 calibration data 無缺，no 則代表未校准好 
 
       b) mdlog 确认方式，如下显示“All RF calibration data are valid”则表示校准 OK 
         
 
    1.4  确认设备天线正常 
            请客户 RF HW RD 确认天线是否正常及连接方法是否正确。 
 
    1.5 mdlog size 至少要设为 2000M 
 
2、设置测试 mdlog 模式 
      1）Acc on 时， 自动开启普通 SD 卡 mdlog 模式。 
      2）Acc off 时，关闭普通 SD 卡 mdlog 模式，切换成 PLS mdlog 模式。 
3）出现问题，要及时保存 log 到 PC 上。需提供 
a) Yocto debuglogger(mobilelog+ mdlog) + aee_exp db + tcpdump(测试 data 网速必
须提供) 
b) Android debuglogger(mobilelog+netlog)，测试 data 网速必须提供 netlog 
       注：建议客户将此模式做在 Acc on/Acc off 切换中 
 MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage
MediaTek Confidential Release for
PVT Usage


---
# SRC0040 显示问题common+sop.pdf

来源：8676/PVT技术分享文档/显示问题common+sop.pdf

SHA-256：815b1152cb315c7de0e8fd1d9a2751c05a91291295680faa27bce5d34d2cf764

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0040.html)

## PDF物理页 1

INTERNAL USE
显示问题common sop

## PDF物理页 2

INTERNAL USE
请先抓取视频确认是以下哪类问题
闪屏
闪屏通常是两帧画面之间的颜色或亮度变化较大，视觉上参数闪烁的感觉。
黑屏
黑屏并且卡死（查看是否有NE或SWT的Crash，按稳定性的分析流程走即可）
帧与帧之间闪现黑屏或黑帧
花屏
花屏通常是整屏显示雪花状态，或部分区域显示雪花，或闪现异常条纹

## PDF物理页 3

INTERNAL USE
3
SurfaceFlinger
GPU
view
WMS
Hwc
GPU
Display
AMS
widget

## PDF物理页 4

INTERNAL USE 4
这类显示异常问题，通常都有以下手段进行排查，缩小范围，定位问题原
因。如下
操作 分析
Check对比机 同版本app,同Android版本code
看对比机是否复现
复现请联系APP vendor
Disable hwc看是否复现 勾选Setting -> Developer 
options -> Disable HW overlays
或者adb shell service call 
SurfaceFlinger 1008 i32 1
操作后不复现则是hwcomposer问题
仍有异常则可能是上层AP送图、GPU
绘制等问题，可执行BQ dump分析
录屏是否正常 adb shell screenrecord
/sdcard/xxxx.mp4
若录屏是正常的，则可能下层
Hwcomposer 或 Display driver问题，
可执行disable hwc双重确认
若录屏也有问题，比较可能是上层
AP送图、GPU绘制问题，可执行BQ 
dump
BQ dump看是否正常 BQ dump 是dump 所有给
surfaceflinger 前BufferQueue中
的数据，执行BQ dump 脚本
BQ dump 若异常则APP 出图已异常，
BQ dump 正常但录屏和最终显示异
常可联系SurfaceFlinger owner 分析

## PDF物理页 5

INTERNAL USE 5
显示异常问题，提CR所需信息和log清单如下
所需信息 备注
项目和版本信息 哪个项目的问题，发生问题的软件版本，之前版本是否
有问题，最近版本有哪些改动
问题发生场景 什么样的测试测出来的，当时平台在什么样的场景下
现象视频 复现问题时候用其它手机录像，上传录像
以及录屏，上传录像
说明问题复现的时间，具体到秒
复现概率 是概率性发生，还是在某个场景下必现
初步分析 参考以上分析方法做初步分析，提供实验和分析结论
Mobile log 提供和现象视频对应的mobile log
systrace 问题场景时的trace,命令如下
adb shell "perfetto -o /data/misc/perfetto-
traces/trace.perfetto-trace -t 15s -s 250mb -b 100mb sched 
freq idle am wm gfx view binder_driver input res ss"
adb pull /data/misc/perfetto-traces/trace.perfetto-trace

## PDF物理页 6

INTERNAL USE
BQ dump 步骤
6
准备条件
▪ 把libgralloc_extra_sys.so push到/system_ext/lib64/
▪ 然后关掉compress
adb shell setprop debug.mediatek.disp_decompress 0
▪ adb shell stop;start
执行bat 脚本并复现
SF_bqdump_P 2.bat dump 一帧buffer
SF_cont_bqdump_P 1.bat可连续dump 10帧buffer
(抓不到问题点才需开启) 设定30hz，争取充足的时间BQdump，如果能越低hz越好。
adb shell "settings put system peak_refresh_rate 31"
adb shell "settings put system min_refresh_rate 30"
(抓不到问题点才需开启) 放慢动画
adb shell settings put global window_animation_scale 10
adb shell settings put global transition_animation_scale 10
adb shell settings put global animator_duration_scale 10


---
# SRC0041 MT8668_Public_domain_audio_planning-202601-to-PVT.pdf

来源：8668/MTK参考资料/MTK参考资料/MT8668_Public_domain_audio_planning-202601-to-PVT.pdf

SHA-256：91086931dad2dd5a1b9c6effe2cd5ebcfbcd55cdff0c6726d9f1f8fee156d66e

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0041.html)

## PDF物理页 1

FM SDR DABDP-INEXT ADSP/A2BEXT BT
( 不在 demo board)
Tbox Audio Codec
Audio AFE HW
主
驾
bus
0
媒
体
2
ch
副
驾
bus
100
媒
体
2
ch
主
驾
bus
9
12
ch
媒
体
副
驾
bus
109
12
ch
媒
体
主
驾
bus
6
提
示
音
主
驾
bus
3
来
电
铃
声
主
驾
bus
4
电
话
下
行
主
驾
bus
5
闹
钟
输
出
ADSP Core A
Task
PB0
Task
PB1
Task
PB14
Task
PB15
Task
PB2
Task
PB3
Task
PB4
Task
PB5
Task
PB6
Task
PB7
Task
PB8
Task
PB10
SW Mixer 0
Task Music
=> CH13-14
SW Mixer 1
Task Playback
=> CH1-12
=> CH1-12 => CH7
=> CH15-16=> CH1-12
=> CH8
=> CH6
=> CH5
=> CH8
Task 
PB11
=> SPK alloc
DLM2
(32CH)
I2SOUT6(32ch 32bit)
UL Path Bypass INT-ADSPDL Path Go Through INT-ADSPDL Path Bypass INT-ADSP
主
驾
bus
1
导
航
主
驾
bus
2
语
音
回
复
=> CH3
DL4
=> CH4
DL7
=> CH9
DL6
=> CH10
DL2
副
驾
普
通
录
音
主
驾
普
通
录
音
VUL_CM2
I2SIN6(32ch 32bit)
主
驾
智
能
语
音
录
音
FMI2S
UL2
I2SOUT1
DL1
主
驾
DP
IN
录
音
I2SIN0
UL0
I2SIN_DMA0
CQDMA0
I2SIN1
UL1
副
驾
蓝
牙
通
话
RX
I2SOUT2
=> CH6
整车喇叭
DL44
独立喇叭
I2SIN1 clock I2SIN6 clock
SDR
Si47962
Ecall_I2S
ES8311Q
AW83611
TSR-Q1
AK7709
AD2428W
BT Audio DTB
百瑞 BT 模组
AW85601AW85601AW85601AW85601
4 x 4Pin(4CH) TDM OUT
主
驾
普
通
FM
in
主
驾
S
D
R
录
音
AD2428W
A2B SPH1642HT5H-1
4 x SPH8855LM4H-1
LT7911D
TYPE C connector
125: CAM_SCL2
126: CAM_SDA2
SCP_SPI0 (48/49/50/51)
131: SCL5
132: SDA5
131: SCL5
132: SDA5
6: UCTS2
7: URTS2
114:UTXD2
115:URXD2
125: CAM_SCL2
126: CAM_SDA2
SPI2(40/41/42/43)
主
驾
bus
7
系
统
音
主
驾
K
歌
下
行
UL5
主
驾
蓝
牙
通
话
mic
in
...
主
驾
蓝
牙
通
话
出
声
副
驾
蓝
牙
通
话
下
行
=> CH6
DL5
I2SIN2
UL37
独立 MIC
I2SIN2 clock
PCM1_OUTPCM1_IN
USB HW
USB
IN
UART
HW
UART
HW
USB
OUT
BTCVSD
(share
memory
interaction)
BTCVSD
IN
BTCVSD
OUT
主
驾
K
歌
人
声
上
行
主
驾
蓝
牙
音
乐
输
入
副
驾
蓝
牙
音
乐
输
出
主
驾
K
歌
伴
奏
下
行
副驾 A2DP
Source 输出 USB
KTV
主驾 A2DP
Sink 输入
 USB 伴奏
外放
主驾蓝牙通话
TX&RX
主
驾
蓝
牙
通
话
TX
主
驾
蓝
牙
通
话
RX
Y
T
通
话
出
声
I2SIN6 clock slave clock I2SIN0 clock slave clock I2SIN2 clock
NULL
Y
T
通
话
mic
in
Modem
I2SIN1 clock
UL38
Y
T
通
话
ref
in
UL4
主
驾
蓝
牙
通
话
ref
in
REF REF
Y
T
通
话
上
行
Y
T
通
话
下
行
USBBT A2DP & HFP Tbox X-Call
后
排
bus
200
媒
体
2
ch
整车 MIC
Task
PB9
Y
S
bus
10000
媒体
2
ch
Y
S
bus
10001
非媒
体
2ch
乘客音频场景
主驾音频场景
Tbox 音频场景
Yocto SOS 音频场景
=> CH9
DL46
Y
S
bus
10002
非媒
体
2
ch
UL7
Y
S
普
通
录
音
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
# SRC0042 TBOX未登录TSP.pdf

来源：8676/PVT技术分享文档/TBOX未登录TSP.pdf

SHA-256：839d3d6f2a0d72c15285e214af5c02f97939a3ca3108103e1e649fe2d6f23617

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0042.html)

## PDF物理页 1

掌锐电子

## PDF物理页 2

问题概述
问题分析
问题原因
解决方案

## PDF物理页 3

问题概述
• 问题背景 ：
– 【徐水】【耐久测试】【EC15S】TBOX未登录TSP
• 问题现象：
– 车辆已开通长连接功能，25日晚19:37分后无后台数据上报；无登出消息，无长连接浅休眠消息上报。车辆在徐水耐久三班
测试，一直在上电使用；车机公网未发现异常，天气应用正常，GPS正常。

## PDF物理页 4

问题分析
5W分析：
1W: 为什么TBOX未登录TSP？因为APP未重新进行私网APN拨号
2W: 为什么APP未重新进行私网APN拨号？因为APP没有收到服务mtktelephonyservice回调APN断开状态
3W: 为什么APP没有收到底层服务mtktelephonyservice回调APN断开状态？因为服务mtktelephonyservice没有回调上报APN断开状态
4W: 为什么服务mtktelephonyservice没有回调上报？因为服务mtktelephonyservice重启后把保存的APN信息清掉了
5W: 为什么服务mtktelephonyservice重启后把保存的APN信息清掉了没有触发回调？因为发生了modem crash重启了服务mtktelephonyservice，
丢失了APN状态回调上报
结论：
modem发生crash后网络网卡从up变为linkdown状态，APN实际是断开的状态，这个场景下没有触发服务mtktelephonyservice的APN状态回调上
报给上层，上层APP没有收到APN回调状态通知，就没有重新建立起APN拨号，TBOX就没有登录TSP后台。

## PDF物理页 5

问题分析
 分析日志：Tbox log
2025-10-25日19:37:25之后从tsp进程侧看私网上发送任何消息平台不回复，之后重连把域名发给net模块，net模块解析域名也失败。

## PDF物理页 6

 问题分析
 分析日志：Tbox log
从tbox ifconfig查看网卡的信息来看，2025-10-25日19:37:25之后ccmni从up，running状态变为linkdown状态，变为了假网卡，实
际APN是断开的。
查看db_history文件有modem crash的历史记录，发生了modem crash了，服务mtktelephonyservice会重启，重启之后APN信息是
没有保留的，也没有回调上报。

## PDF物理页 7

 问题分析
 分析日志：Tbox log
1.APN1和APN3两路公网为什么能恢复正常。因为中间进入了休眠唤醒，休眠过程中有断开APN1和APN3，退出休眠有重新拨号
APN1和APN3，这个时候就会触发APN状态的回调上去。退出休眠重新对APN1和APN3拨号后，这两路APN就恢复正常了，公网就能
正常上网了。
2.私网APN2为什么没有恢复？因为APN2私网在进入休眠唤醒下也不会触发断开和重建，期间没有APN状态的变化通知，APP就没
有发起重建APN的动作。

## PDF物理页 8

问题分析
问题场景模拟：手动在tbox敲muxreport 1指令模拟问题场景
1.muxreport 1重启modem，可模拟出ccmni网卡变为linkdown，从ifconfig看还存在这些假网卡，实际是要down掉。
2.查看服务mtktelephonyservice重启后是否有APN状态回调上报，发现是和问题场景一样，没有触发回调上报。

## PDF物理页 9

问题原因
方案：modem crash异常，触发服务mtktelephonyservice重启丢失了APN状态回调上报。
1.服务mtktelephonyservice重启要把APN断开的状态回调上报给上层.
2.断开APN需要把ccmini网卡能够down掉。

## PDF物理页 10

解决方案
1.服务mtktelephonyservice重启要把APN断开的状态回调上报给上层.
异常逻辑：丢失APN断开回调，缺少了1.3的回调上报，导致后续1.4--1.6没有正常激活APN。
修正逻辑：增加1.3APN状态回调上报，mlclient 保存PDN 状态，监测telephonyservice death 时上报，如果PDN 状态不是
PDN_DISCONNECTED , 就上报PDN_DISCONNECTED

## PDF物理页 11

解决方案
2.断开APN需要把ccmini网卡能够down掉
异常逻辑：网卡通过ifconfig还能看到，但网卡非正常running态，是linkdown状态。
修正逻辑：监听网卡的netlink消息通知，当监听到ccmni网卡的down消息后，通过ifconfig指令把网卡down掉，ifconfig看不到。

## PDF物理页 12

修改代码
1.服务mtktelephonyservice重启把APN断开的状态回调上报给上层

## PDF物理页 13

修改代码
2.断开APN需要把ccmini网卡能够down掉。

## PDF物理页 14

压测结果
通过模拟问题场景，muxreport 1重启modem，持续压测验证中。
10.31：模拟验证超40次；
1.3路APN都能正常把断开状态callback上去后，3路都正常重拨了。
2.ping公网正常，网络可正常访问。
3.ping私网正常，私网网络可正常访问。

## PDF物理页 15

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
# SRC0043 Low_power_debug_sop_v1.4.pdf

来源：8676/PVT技术分享文档/Low_power_debug_sop_v1.4.pdf

SHA-256：3ea5dbd9f6ab5f57c974c837b8c07532741f1678815cb0954a796222a7e62b5c

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0043.html)

## PDF物理页 1



## PDF物理页 2



## PDF物理页 3



## PDF物理页 4



## PDF物理页 5



## PDF物理页 6



## PDF物理页 7



## PDF物理页 8



## PDF物理页 9



## PDF物理页 10



## PDF物理页 11



## PDF物理页 12



## PDF物理页 13



## PDF物理页 14



## PDF物理页 15



## PDF物理页 16




---
# SRC0044 MT8668_Hypervisor_OTA_LLA_User_Manual_CN_V1.0.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_OTA_LLA_User_Manual_CN_V1.0.pdf

SHA-256：58292e0d098722a18555a674b9f40f221c63b588935dd6530e20d08a1696fe68

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0044.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2026-01-28
MT8668 Hypervisor OTA LLA  
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 纪明 正式版 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 5 
1 Hypervisor (L+L+A) OTA 方案说明 ····························································································································· 6 
2 Hypervisor (L+L+A)整体集中升级 ······························································································································ 7 
2.1 启用整体集中升级方案 ·········································································································································· 7 
2.2 方案概述 ·································································································································································· 7 
2.2.1 基础功能 ······················································································································································ 7 
2.2.2 Hypervisor OTA 名词解释····························································································································· 8 
2.3 架构/进程概述 ························································································································································ 9 
2.3.1 Hypervisor (L+L+A) OTA 升级架构 ················································································································ 9 
2.3.2 Hypervisor (L+L+A) 升级包编译架构 ········································································································· 10 
2.4 如何编译 Hypervisor (L+L+A) OTA 升级包 ············································································································ 11 
2.4.1 编译 hypervisor_target_files.zip ················································································································· 11 
2.4.2 编译 Hypervisor (L+L+A)全量升级包 ········································································································· 12 
2.4.3 编译 Hypervisor (L+L+A)差分升级包 ········································································································· 12 
2.5 升级包结构解析 ···················································································································································· 13 
2.6 如何进行 Hypervisor (L+L+A) OTA 升级 ················································································································ 14 
2.6.1 全包升级（Normal Mode） ······················································································································ 15 
2.6.2 差分升级（Normal Mode） ······················································································································ 15 
2.7 如何修改升级包的签名 ········································································································································ 16 
2.8 如何删减/新增 OTA 升级分区 ······························································································································ 16 
2.8.1 OTA 升级分区的来源 ································································································································· 16 
2.8.2 删减 OTA 升级分区 ···································································································································· 17 
2.8.3 新增 OTA 升级分区 ···································································································································· 18 
2.9 AB 系统的镜像加载选择 ······································································································································ 21 
2.9.1 Boot Control 信息说明 ······························································································································· 21 
2.9.2 镜像加载选择流程 ···································································································································· 22 
2.10 系统回滚 ································································································································································ 23 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.10.1 系统回滚的基本原则································································································································· 23 
2.10.2 系统回滚的检测流程································································································································· 25 
2.10.3 系统回滚的 Boot Control 参数变化 ·········································································································· 25 
2.10.4 系统回滚测试用例 ···································································································································· 27 
2.11 断电升级保护 ························································································································································ 30 
2.11.1 升级状态信息 ············································································································································ 30 
2.11.2 Resume 升级检查流程 ······························································································································· 31 
2.12 Hypervisor OTA API 说明 ······································································································································· 32 
2.12.1 启动升级 (Normal Mode) ··························································································································· 32 
2.12.2 获取升级进度 (Normal Mode) ··················································································································· 33 
2.12.3 切换 Boot Slot (Normal Mode) ··················································································································· 34 
2.12.4 获取当前启动 Slot (Normal Mode) ··········································································································· 35 
2.12.5 中止升级 (Normal Mode） ························································································································ 35 
2.12.6 Hypervisor OTA API 使用步骤 ···················································································································· 36 
附件一 附加条款 ····························································································································································· 37 
 
图片目录 
图 2-1. Hypervisor (L+L+A) OTA Update 架构 ···························································································································· 9 
图 2-2. Hypervisor (L+L+A) build otapackage 架构 ·················································································································· 10 
图 2-3. Hypervisor (L+L+A) otapackage 结构 ··························································································································· 13 
图 2-4. payload.bin 组成结构 ·················································································································································· 14 
图 2-5. OTA 升级分区来源 ······················································································································································ 16 
图 2-6. Hypervisor (L+L+A) Boot Control 参数 ························································································································· 21 
图 2-7. Hypervisor (L+L+A) 镜像加载流程 ······························································································································ 22 
图 2-8. OTA 升级后 Hypervisor 启动失败场景 ······················································································································· 23 
图 2-9. OTA 升级后 Yocto 启动失败场景 ······························································································································· 24 
图 2-10. OTA 升级后 Android 启动失败场景 ························································································································· 24 
图 2-11. OTA 升级后 Tbox 启动失败场景 ······························································································································ 24 
图 2-12. Hypervisor(L+L+A) 回滚检测流程 ····························································································································· 25 
图 2-13. Hypervisor & Yocto & Android & Tbox 启动状态 ······································································································ 25 
图 2-14. Hypervisor & Yocto & Android & Tbox 启动状态 ······································································································ 26 
图 2-15. Hypervisor & Yocto & Android & Tbox 启动状态 ······································································································ 26 
图 2-16. Hypervisor & Yocto & Android & Tbox 启动状态 ······································································································ 27 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
图 2-17. Hypervisor & Yocto & Android & Tbox 启动状态 ······································································································ 27 
图 2-18. 升级状态信息 ···························································································································································· 30 
图 2-19. Hypervisor resume update 流程 ································································································································ 31 
图 2-20. Hypervisor check resume update 流程······················································································································ 31 
 
表格目录 
表 2-1. 名词解释········································································································································································ 8 
表 2-2. 升级包组件描述 ·························································································································································· 13 
表 2-3. payload.bin 组件描述 ·················································································································································· 14 
表 2-4. Hypervisor (L+L+A) Boot control 参数说明 ················································································································· 21 
表 2-5. 升级状态信息说明 ······················································································································································ 30 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
1 Hypervisor (L+L+A) OTA 方案说明 
L+L+A 是指 Linux SOS (Yocto) + Linux UOS (Tbox) + Android UOS (Android OS) 
对于 Hypervisor (L+L+A)的 OTA 升级，MediatTek 支持如下升级方案： 
方案一：整体集中升级，即 Linux SOS (Yocto) 作为 Host OS 去统一升级 Linux SOS (Yocto) + Linux UOS (Tbox) + Android 
UOS (Android OS)，详细介绍请参考第 2 章 Hypervisor (L+L+A)整体集中升级。 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2 Hypervisor (L+L+A)整体集中升级 
本章节主要介绍 Hypervisor (L+L+A) OTA Update 整体集中升级方案 ，包括启用该方案的 config 配置、方案架构概
述、升级包编译和系统回滚，此方案为公版默认启用方案。 
2.1 启用整体集中升级方案 
如果需要启用集中升级方案，请设定如下 config： 
1. 在 LK2 的<yocto_project_name>.mk 和<uos_project_name>.mk 内添加 SUPPORT_BOOTCTRL_MULTI_OS := yes 
e.g., 
src/bsp/lk2/project/auto8668p1_64_hyp.mk 
SUPPORT_BOOTCTRL_MULTI_OS := yes 
src/bsp/lk2/project/auto8668p1_64_hyp-an.mk 
SUPPORT_BOOTCTRL_MULTI_OS := yes 
src/bsp/lk2/project/auto8668p1_64_hyp_uos.mk 
SUPPORT_BOOTCTRL_MULTI_OS := yes 
 
2. 在 meta 的< yocto_project_name >.conf 和< uos_project_name >.conf 内添加 SUPPORT_BOOTCTRL_MULTI_OS := 
yes 
e.g., 
meta/meta-mediatek-mt8668-hyp/conf/machine/auto8668p1_64_sos.conf 
SUPPORT_BOOTCTRL_MULTI_OS := yes 
meta/meta-mediatek-mt8668-hyp /conf/machine/auto8668p1_64_uos.conf 
SUPPORT_BOOTCTRL_MULTI_OS := yes 
注：请不要在单个 project.mk 或 project.conf 内同时支持不同类型的 OTA 升级方案 
 
2.2 方案概述 
2.2.1 基础功能 
Hypervisor (L+L+A) 整体集中升级方案支持如下功能： 
• 支持在设备后台无缝更新 
• 支持系统回滚，避免升级失败后系统变砖 
• 支持对升级包的完整性与准确性校验 
• 支持一次升级多个 OS 系统 
• 支持全包升级和差分升级 
• 支持手动切换 A/B (需要执行至少一次 OTA 升级保证 A/B slot 均有可用的镜像信息) 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
• 支持断电接力升级 
但它同时也具备如下限制： 
• 不支持更新分区布局，即升级前后版本的分区布局必须保持一致，后续无法通过 OTA 修改分区布局 
• 不支持 AB 分区 & non-AB 分区之间相互升级 
• 需要升级的分区镜像必须是 xxx.img 格式，例如：boot.img，不支持其它格式的文件 
• 需要升级的分区类型必须为只读 (RO) 分区 
• 不支持 Android Virtual AB (安卓虚拟 AB) 
• 不支持 OS 单独升级 
 
2.2.2 Hypervisor OTA 名词解释 
表 2-1. 名词解释 
缩略词 全称和释义 
Bootctl Boot Control，A/B slot 标识结构体，存储在 misc 分区中 
LK2 Little Kernel 2，微型内核 
OTA Over-The-Air，空中下载升级，一种远程更新技术 
SOS Server OS，Multi OS 系统内的 Host OS 
UOS User OS，Multi OS 系统内的 Guest OS 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.3 架构/进程概述 
2.3.1 Hypervisor (L+L+A) OTA 升级架构 
 
图 2-1. Hypervisor (L+L+A) OTA Update 架构 
 
图 2-1 描述了 Hypervisor (L+L+A) 整体集中升级的方案架构，从图中能获取到如下信息： 
1. Hypervisor (L+L+A) OTA 的升级包支持从 OTA Server 或者本地存储空间获取。MediaTek 目前仅支持通过本地升级
包进行 OTA 升级，从 OTA Server 端利用网络下载升级包需要 OEM 自行实现。 
2. Hypervisor OTA 升级全部在 Linux SOS (Yocto) 上完成，其它 UOS (Android UOS + Linux UOS) 不参与升级操作。 
3. 以通过本地升级包完成 OTA 升级为例，Hypervisor (L+L+A) OTA 升级的大致流程如下： 
1) 将升级包存放到本地平台存储环境内； 
2) 执行 OTA update script 调用 update_engine sideload 触发升级； 
3) 利用 Package Security Verify 对升级包进行完整性与准确性校验； 
4) 利用 Partition Write 将升级包内的数据通过 UFS Driver 写入到对应分区存储空间内； 
5) 利用 Partition Verify 对更新写入到分区内的数据进行准确性校验，确保实际写入数据的准确性； 
6) 利用 Switch Next Boot Slot 设定下一次系统的启动插槽，确保系统下一次从更新后的插槽启动。 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.3.2 Hypervisor (L+L+A) 升级包编译架构 
 
图 2-2. Hypervisor (L+L+A) build otapackage 架构 
 
图 2-2 描述了 Hypervisor (L+L+A) OTA 整体集中升级方案编译升级包的架构，从图中能获取到如下信息： 
1. Hypervisor (L+L+A) 整体集中升级只需要编译一个 OTA 升级包； 
2. Hypervisor (L+L+A) 编译升级包必须在 Hypervisor Android 的编译环境下进行； 
3. Hypervisor 编译升级包的大致流程如下： 
– 编译 Hypervisor sos_target_files.zip 
– 编译 Hypervisor uos_target_files.zip 
– 编译 Hypervisor android target_files.zip 
– 将 sos_target_files.zip、uos_target_files.zip 和 target_files.zip 合并成最终的 hypservisor_target_files.zip 
– 利用在 hypervisor_target_files.zip 在 Android 编译环境下编译生成全量升级包和差分升级包 
 
注：关于编译 Hypervisor OTA 升级包的详细说明，请参考章节 2.4 如何编译 Hypervisor (L+L+A) OTA 升级包 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.4 如何编译 Hypervisor (L+L+A) OTA 升级包 
2.4.1 编译 hypervisor_target_files.zip 
1. Build sos_target_files.zip 
Linux SOS (Yocto) 的 target_files.zip 由 hypervisor_make_sos_targetfiles.py 编译产生，脚本位于： 
meta/meta-mediatek-mt8668-hyp/recipes-devtools/ota-tools/files 
在 Linux SOS (Yocto)编译阶段，系统会自动执行该脚本进行打包，最终的 sos_target_files.zip 位于： 
build/tmp/deploy/images/<project_name>/sos_target_files.zip 
 
2. Build uos_target_files.zip 
Linux UOS (Tbox)的 target_files.zip 由 hypervisor_make_uos_targetfiles.py 编译产生，脚本位于： 
meta/meta-mediatek-mt8668-hyp/recipes-devtools/ota-tools /files 
在 Linux UOS (Tbox)编译阶段，系统会自动执行该脚本进行打包，最终的 uos_target_files.zip 位于： 
build/tmp/deploy/images/<project_name>/uos_target_files.zip 
 
3. Build android target_files.zip 
Android 的 target_files.zip 在 build Android OS 阶段自动编译产生，最终的 target_files.zip 位于： 
out/target/product/<project name>/merged/target_files.zip 
 
4. Build hypervisor_target_files.zip 
hypervisor_target_files.zip 需要使用 hypervisor_multi_os_merge_targetfiles.py 脚本去合并 sos_target_files.zip、
uos_target_files.zip 和 target_files.zip 后产生，hypervisor_multi_os_merge_targetfiles.py 位于： 
vendor/mediatek/proprietary/scripts/hypervisor_ota_tool/hypervisor_multi_os_merge_targetfile
s.py 
 
在获取到 sos_target_files.zip、uos_target_files.zip 和 target_files.zip 后，在 Android 的编译环境下执行如下指令去获
取 hypervisor_target_files.zip： 
python3 hypervisor_multi_os_merge_targetfiles.py <参数1> <参数2> <参数3> 
注： 
• hypervisor_multi_os_merge_targetfiles.py：编译 hypervisor_target_files.zip 的脚本 
• <参数 1> ：sos_target_files.zip 的路径 
• <参数 2> ：uos_target_files.zip 的路径 
• <参数 3> ：target_files.zip 的路径 
 
输出文件： 
在当前目录下会产生名称为 hypervisor_target_files.zip 的文件，这就是 Hypervisor(L+L+A)的 target_files.zip 包 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
示例： 
python3 
vendor/mediatek/proprietary/scripts/hypervisor_ota_tool/hypervisor_multi_os_merge_targetfile
s.py 3OS_target_files/sos_target_files.zip 3OS_target_files/uos_target_files.zip 
3OS_target_files/target_files.zip 
 
2.4.2 编译 Hypervisor (L+L+A)全量升级包 
在参考 2.4.1 编译 hypervisor_target_files.zip 小节编译得到 hypervisor_target_files.zip 后，就可以在 Hypervisor 
(L+L+A) Android OS 的编译环境下去编译 Hypervisor(L+L+A)的全量升级包。 
编译指令： 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey hypervisor_target_files.zip otapackage_full.zip 
注： 
• ota_from_target_files：升级包编译脚本 
• build/make/target/product/security/testkey：对升级包进行签名的 key 路径，Mediatek 默认使用 Google 提供的 testkey，贵司
可指定其它的 key 路径，使用-k 参数指定。如何更换升级包签名 key，请参考：章节 2.7 如何修改升级包的签名 
• hypervisor_target_files.zip：Hypervisor (L+L+A)的 target_files.zip 
• otapackage_full.zip：最终产生的 Hypervisor 全量升级包，包名可随意指定 
• 请务必确保在 Hypervisor (L+L+A) Android OS 的编译环境下编译升级包，并确保编译全量升级包前有执行 source & lunch，否
则将导致全包编译失败 
2.4.3 编译 Hypervisor (L+L+A)差分升级包 
前提条件： 
编译差分升级包需要预先准备两份 hypervisor_target_files.zip。一份是基底版本（source 版本）的
hypervisor_target_files.zip，此处命名为 source_hypervisor_target_files.zip；一份是目标版本（target 版本）的
hypervisor_target_files.zip，此处命名为 target_hypervisor_target_files.zip。 
 
注：请务必确保平台上烧录的基底版本 load 和基底版本的 hypervisor_target_files.zip 是同一次编译得到的，否则将导致 OTA 差
分升级失败。 
 
编译指令： 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey  -i source_hypervisor_target_files.zip 
target_hypervisor_target_files.zip otapackage_delta.zip 
 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
注： 
• ota_from_target_files：升级包编译脚本 
• build/make/target/product/security/testkey：对升级包进行签名的 key 路径，MediaTek 默认使用 Google 提
供的 testkey，贵司可指定其它的 key 路径，使用-k 参数指定。如何更换升级包签名 key，请参考：章节 2.7 如何修改升级包
的签名  
• source_hypervisor_target_files.zip：source 版本的 hypervisor_target_files.zip 
• target_hypervisor_target_files.zip：target 版本的 hypervisor_target_files.zip 
• otapackage_delta.zip：最终产生的 Hypervisor (L+L+A)差分升级包，包名可随意指定 
• 请务必确保在 Hypervisor Android 的 build 环境下编译升级包，并确保编译全包前有执行 source & lunch，否则将导致差分包
编译失败 
 
2.5 升级包结构解析 
Hypervisor (L+L+A) OTA 升级包是一个被压缩的 zip 包，其主要组成部分如下： 
 
图 2-3. Hypervisor (L+L+A) otapackage 结构 
 
图 2-3 中 Hypervisor (L+L+A) otapackage 的各个组成部分描述如下表所示： 
表 2-2. 升级包组件描述 
名称 描述 
metadata 存储升级包的 metadata 信息，包括升级版本、升级类型等 
metadata.pb 存储升级包的 metadata 信息，包括升级版本、升级类型等 
otacert 升级包进行签名验证信息 
apex_info.pb Android apex 模块配置信息 
care_map.pb 系统 fingerprint 信息 
payload.bin 升级镜像信息 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
名称 描述 
payload_properties.txt payload.bin 和 metadata 的 size 和 hash 信息 
 
从表 2-2 内可以看出，系统的升级信息都存储在 payload.bin 内，其组成结构如下： 
 
图 2-4. payload.bin 组成结构 
 
从图 2-4 中可以看出，payload.bin 的主要组成部分如表 2-3 所示： 
表 2-3. payload.bin 组件描述 
名称 描述 
Header 
Magic Number Magic string "CrAU" identifying this is an update payload. 
Major Version Payload major version number. 
Manifest Size Manifest size in bytes. 
Manifest Signature Size Manifest signature blob size in bytes 
protobuf Manifest The list of operations to be performed. 
protobuf Manifest Signature The signature of the first five fields. There could be multiple 
signatures if the key has changed. 
blobs [] Payload Data The list of binary blobs used by operations in the metadata. 
signature Payload Signature The signature of the entire payload except the metadata signature. 
There could be multiple signatures if the key has changed. 
 
2.6 如何进行 Hypervisor (L+L+A) OTA 升级 
本地验证 OTA 升级的脚本位于 Linux SOS (Yocto) 代码的如下路径： 
src/bsp/lk2/platform/mediatek/common/bootctrl/scripts/hypervisor_update.py 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.6.1 全包升级（Normal Mode） 
测试环境 
1. The PC has Python3 environment 
2. Flash base load in DUT 
3. Get OTA package 
测试步骤 
1. Device connection yocto adb environment 
2. Execute the upgrade script: python3 hypervisor_update.py --file otapackage_full.zip > update.txt 2>&1 
– hypervisor_update.py: Update script 
– otapackage_full.zip: OTA package, unlimited package name 
– > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The first restart after the upgrade should successfully enter the HomeScreen 
3. Check whether setting-version has been updated 
Note: If the test upgrade fails, please provide the update log and uart log in CR. 
 
2.6.2 差分升级（Normal Mode） 
测试环境 
1. The PC has Python3 environment 
2. Flash base load in DUT, must be consistent with the base version provided to the OTA owner 
3. Get OTA package from OTA owner 
测试步骤 
1. Device connection yocto adb environment 
2. Execute the upgrade script: python3 hypervisor_update.py --file otapackage_delta.zip > update.txt 2>&1 
– hypervisor_update.py: Update script 
– otapackage_delta.zip: OTA package, unlimited package name 
– > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The first restart after the upgrade should successfully enter the HomeScreen 
3. Check whether setting-version has been updated 
Note: If the test upgrade fails, please provide the update log and uart log in CR. 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.7 如何修改升级包的签名 
OTA 升级过程中分别会使用到两把 key：xxx.pk8 和 xxx.x509.pem，其中 xxx.pk8 格式的 key 用于在编译升级包时对
升级包进行签名，xxx.x509.pem 格式的 key 则用于在 OTA 升级过程中对升级包进行校验。 
如果您需要使用客制化的 key，请按照如下步骤操作： 
1. 将章节 0 
2. 编译 Hypervisor (L+L+A)全量升级包和 2.4.3 编译 Hypervisor (L+L+A)差分升级包中升级包编译指令 -k 参数的指定
路径替换为实际使用的 xxx.pk8 和 xxx.x509.pem 路径； 
3. 将meta/meta-mediatek/recipes-support/update-engine-sideload-u/files/ota/ otacerts.zip 内
更换实际使用的 xxx.x509.pem 文件。 
 
2.8 如何删减/新增 OTA 升级分区 
2.8.1 OTA 升级分区的来源 
 
图 2-5. OTA 升级分区来源 
OTA 升级分区的确认步骤如下： 
1. 编译阶段将分区表内的信息打包转化为 MTXXX_Android_scatter.txt，Ex: MT6897_Android_scatter.txt； 
2. 将 MTXXXX_Android_scatter.txtn 内 is_upgradable 为 true 的分区记录到 ab_partitions.txt； 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
3. 将 ab_partitions.txt 打包到各个 OS 的 target_files.zip； 
4. 编译升级包时将 ab_partitions.txt 内记录的分区镜像打包到升级包内。 
注：检查分区 is_upgradable 状态时会优先判断 _a 分区的 is_upgradable，例如：当 xxxx_a 分区的 is_upgradable 为 true，xxx_b
的 is_upgradable 为 false 时，系统仍会记录该分区为 OTA 升级分区。 
 
2.8.2 删减 OTA 升级分区 
删减 OTA 升级分区只会关闭特定 AB 分区的 OTA 升级，并不会将关闭 AB 升级的分区修改为单分区。 
Hypervisor (L+L+A)包含三个不同的 OS project，其镜像组成包括：Linux SOS (Yocto)分区镜像+ Android UOS (Android)
分区镜像 + Linux UOS (Tbox)分区镜像。Hypervisor (L+L+A)也包含两份分区表，一份分区表位于 Linux SOS (Yocto) 
codebase 内，分区表内包含 Yocto + Android + Tbox 的所有分区信息，该分区表在编译 Yocto 和 Tbox 阶段被使用；
另一份分区表位于 Android codebase 内，分区表内仅包含 Android 分区信息，该分区表仅在编译 Android 阶段被使
用。 
Yocto & Tbox 分区表： 
src/bsp/ptgen_v2/mt6881/partition_table_emmc_hyp_ab.csv 
Android 分区表： 
device/mediateksample/<project_name>/partition_table_emmc_hyp_ab.csv 
如下为各个 OS 删减 OTA 升级分区的方法： 
1. Linux SOS (Yocto) 
将 Yocto 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 Y 改成 N 
e.x., 
修改前： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y ,bl2.img,Y,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y ,bl2.img,Y,N,BOOTLOADERS,Y 
修改后： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y ,bl2.img,N,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y ,bl2.img,N,N,BOOTLOADERS,Y 
 
2. Android UOS (Android) 
将 Yocto 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 Y 改成 N，Android 分区表无需修改 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
e.x., 
修改前： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y ,init_boot.img,Y,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
修改后： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y ,init_boot.img,N,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
3. Linux UOS (Tbox) 
将 Tbox 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 Y 改成 N 
e.g., 
修改前： 
bl2-uos_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y ,bl2-uos.img,Y,N,AUTO,Y 
bl2-uos_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
修改后： 
bl2-uos _a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y ,bl2-uos.img,N,N,AUTO,Y 
bl2-uos _b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
2.8.3 新增 OTA 升级分区 
新增的 OTA 升级分区必须满足如下前提条件： 
1. 分区必须同时包含<partition_name>_a & <partition_name>_b，例如：boot_a & boot_b 
2. 分区必须为只读 (RO) 分区 
3. 分区镜像格式和镜像名称必须为<partition_name>.img，例如：boot.img 
2.8.3.1 设定已存在的 AB 分区为 OTA 分区 
各个 OS 将分区表内已经存在的 AB 分区设定为 OTA 分区的步骤如下： 
1. Linux SOS (Yocto) 
将 Yocto 分区表内需要打开 OTA 升级分区一栏的 OTA_Update 状态从 N 改成 Y 
e.x., 
修改前： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y ,bl2.img,N,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y ,bl2.img,N,N,BOOTLOADERS,Y 
修改后： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y ,bl2.img,Y,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y ,bl2.img,Y,N,BOOTLOADERS,Y 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2. Android UOS (Android) 
将 Yocto 分区表 & Android 分区表内需要打开 OTA 升级分区一栏的 OTA_Update 状态从 N 改成 Y 
e.g., 
修改前： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y ,init_boot.img,N,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
修改后： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y ,init_boot.img,Y,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
在 hypervisor_make_sos_targetfiles.py 的 ignored_partitions 内添加新增的 Android OTA 分区名，用于编译
sos_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 
e.g., 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 'vbmeta', 'vbmeta_system',  
'vbmeta_vendor', 'tee', 'bl2-uos', 'boot_uos'}   >> 将新增的分区添加到列表 
 
3. Linux UOS (Tbox) 
将 Tbox 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 N 改成 Y 
e.g., 
修改前： 
bl2-uos_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y ,bl2-uos.img,N,N,AUTO,Y 
bl2-uos_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
修改后： 
bl2-uos_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y ,bl2-uos.img,Y,N,AUTO,Y 
bl2-uos_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
在 hypervisor_make_sos_targetfiles.py 的 ignored_partitions 内添加新增的 Tbox OTA 分区名，用于编译
sos_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 
e.g., 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 'vbmeta', 'vbmeta_system', 
'vbmeta_vendor', 'tee', 'bl2-uos', 'boot_uos'}   >> 将新增的分区添加到列表 
 
在 hypervisor_make_uos_targetfiles.py 的 partitions 内添加新增的 Tbox OTA 分区名，确保 Tbox 编译阶段将分区镜像
打包到 uos_target_files.zip 
e.g., 
if __name__ == "__main__": 
    target_path = "uos_images" 
    partitions = ['bl2-uos', 'boot_uos']   >>将新增的分区添加到列表 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.8.3.2 新增不存在的 AB 分区为 OTA 分区 
各个 OS 新增分区表内不存在的 AB 分区为 OTA 分区的步骤如下： 
1. Linux SOS (Yocto) 
在 Yocto 分区表内新增对应 AB 分区，并确保分区镜像为<partition_name>.img，以新增 customer 分区为例： 
修改后(分区大小设定为 8MB)： 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y ,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
分区添加完毕后，请在 customer 分区的启动加载阶段添加 AB 分区逻辑判断，保证系统加载到正确的分区 
 
2. Android UOS (Android) 
在 Yocto 分区表和 Android 分区表内新增对应 AB 分区，并确保分区镜像为<partition_name>.img，以新增 customer
分区为例： 
修改后(分区大小设定为 8MB)： 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y ,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
在 hypervisor_make_sos_targetfiles.py 的 ignored_partitions 内添加新增的 Android OTA 分区名，用于编译
sos_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 
e.g., 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 'vbmeta', 'vbmeta_system ', 
'vbmeta_vendor',  'customer', 'tee', 'bl2-uos', 'boot_uos'}   >> 将新增的分区添加到列表 
 
3. Linux UOS (Tbox) 
在 Yocto 分区表内新增对应 AB 分区，并确保分区镜像为<partition_name>.img，以新增 customer 分区为例： 
修改后(分区大小设定为 8MB)： 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y ,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
在 hypervisor_make_sos _targetfiles.py 的 ignored_partitions 内添加新增的 Tbox OTA 分区名，用于编译
sos_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 
e.g., 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 'vbmeta', 'vbmeta_system', 
'vbmeta_vendor',  'tee', 'bl2-uos', 'boot_uos', 'customer'}   >> 将新增的分区添加到列表 
 
在 hypervisor_make_uos_targetfiles.py 的 partitions 内添加新增的 Tbox OTA 分区名，确保 Tbox 编译阶段将分区镜像
打包到 uos_target_files.zip 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
e.g.,： 
if __name__ == "__main__": 
    target_path = "uos_images" 
    partitions = ['bl2-uos', 'boot_uos', ‘customer’]   >>将新增的分区添加到列表 
注： 
1. 新增不存在的 AB 分区为 OTA 分区时，请确保新增分区挂载成只读分区 
2. 新增不存在的 AB 分区为 OTA 分区时，请确保新增分区后系统烧录能正常加载启动，然后再验证 OTA 升级 
 
2.9 AB 系统的镜像加载选择 
2.9.1 Boot Control 信息说明 
AB 系统包含两个启动 slot：slot_a 和 slot_b，每个 slot 有自己独立的一份 Boot Control metadata。系统启动会根据
存储在 misc 分区的 Boot Control 信息来选择加载 slot_a 或 slot_b 的分区镜像，其中 Boot control 包含的关键信息如
下： 
 
图 2-6. Hypervisor (L+L+A) Boot Control 参数 
 
图 2-6 中各个 boot control 参数的说明如表 2-4 所示： 
 
表 2-4. Hypervisor (L+L+A) Boot control 参数说明 
名称 描述 
priority 
Slot 的启动优先级，初始值默认为 15，系统选择
从优先级高的 slot 启动，优先级相同则从 slot_a
启动 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
名称 描述 
tries_remaining 
当前 slot android 的剩余可重启次数，初始值默
认为 7，值为 0 时会触发系统回滚 
successful_boot 
android 启动成功标志位， 1：启动成功，0：启
动失败 
yocto_tries_remaining 
当前 slot yocto 的剩余可重启次数，初始值默认
为 3，值为 0 时会触发系统回滚 
yocto_successful_boot 
yocto 启动成功标志位，1：启动成功，0：启动
失败 
tbox_tries_remaining 
当前 slot tbox 的剩余可重启次数，初始值默认为
3，值为 0 时会触发系统回滚 
tbox_successful_boot 
tbox 启动成功标志位，1：启动成功，0：启动失
败 
hyp_tries_remaining 
当前 slot hypervisor 的剩余可重启次数，初始值
默认为 3，值为 0 时会触发系统回滚 
hyp_successful_boot 
hypervisor 启动成功标志位，1：启动成功，0：
启动失败 
注：Boot Control Source Code 位于：src/bsp/lk2/platform/mediatek/common/bootctrl/bootctrl_multi_os 
 
2.9.2 镜像加载选择流程 
 
图 2-7. Hypervisor (L+L+A) 镜像加载流程 
 
AB 系统启动的镜像加载流程如图 2-7 所示： 
① 系统启动进入 Boot Rom 阶段； 
② Boot Rom 会读取 UFS/EMMC 上特定寄存器的值来决定 load preloader_a 或 preloader_b 分区镜像； 
③ 系统启动进入 preloader 阶段 
④ 系统去读取 Boot Control 信息内的 slot_a 与 slot_b 的 priority 值 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
⑤ 当 slot_a 的 priority 值大于等于 slot_b 的 priority 值时，系统判断当前启动 slot 为 slot_a，后续启动过程中会加
载 A 分区内的镜像；当 slot_a 的 priority 值小于 slot_b 的 priority 值时，系统判断当前启动 slot 为 slot_b，后续
启动过程中会加载 B 分区内的镜像。 
注：preloader 分区的 AB 加载选择由 UFS/EMMC 上特定寄存器的值来决定，不由 boot control metadata 的 slot priority 决定，详
细信息请咨询 Boot Rom & preloader owner 
 
2.10 系统回滚 
本节主要介绍 Hypervisor(L+L+A) OTA 升级完成后，当系统首次从新版本启动失败时，系统如何回滚到升级前的旧版
本启动，避免设备变砖。 
2.10.1 系统回滚的基本原则 
由于 Hypervisor (L+L+A) Project 涉及到多个 OS，因此 MediaTek 采用的整体回滚方案遵循如下原则： 
• Hypervisor OS & Linux OS(Yocto + Tbox) & Android OS 整体 rollback，即当有任意一个 OS 首次从新版本启动失败
时，所有 OS 都要回滚到旧系统启动，保证所有 OS 的 AB 启动 slot 一致 
• 只有在 OTA 升级成功后首次从新系统启动失败的场景下才会触发回滚机制，常规启动失败不会触发回滚机制  
以 Hypervisor、Yocto、Tbox 和 Android 的 3OS (L+L+A) OTA 为例，系统会存在如下四种 rollback 场景： 
场景一：Hypervisor OS 从新版本启动失败 
 
图 2-8. OTA 升级后 Hypervisor 启动失败场景 
 
图 2-8 描述 Hypervisor (L+L+A) OTA 升级后，当 Hypervisor 从新版本启动失败触发 rollback 时，Hypervisor、Yocto、
Android 的版本切换状态，场景描述如下： 
• Hypervisor & Yocto & Android & Tbox 都从 V1 版本启动 
• 系统执行 OTA 升级到 V2 版本，并将 V2 版本设定为下一次启动的版本 
• Hypervisor 从 V2 版本启动失败，此时 Yocto、Android 和 Tbox 都还未启动 
• 触发回滚，Hypervisor & Yocto & Android & Tbox 都切换到 V1 版本启动 
 
 
 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
场景二：Yocto OS 从新版本启动失败 
 
图 2-9. OTA 升级后 Yocto 启动失败场景 
 
图 2-9 描述 Hypervisor (L+L+A) OTA 升级后，当 Hypervisor 从新版本 V2 启动成功，Yocto 从新版本启动失败触发
rollback 时，Hypervisor、Yocto、Android 和 Tbox 的版本切换状态，场景描述如下： 
• Hypervisor & Yocto & Android & Tbox 都从 V1 版本启动 
• 系统执行 OTA 升级到 V2 版本，并将 V2 版本设定为下一次启动的版本 
• Hypervisor 从 V2 版本启动成功，Yocto 从 V2 版本启动失败，此时 Android 和 Tbox 的启动状态未知  
• 触发回滚，Hypervisor & Yocto & Android & Tbox 都切换到 V1 版本启动 
 
场景三：Android OS 从新版本启动失败 
 
图 2-10. OTA 升级后 Android 启动失败场景 
图 2-10 描述了 Hypervisor(L+L+A) 从 V1 -> V2 OTA 升级后，当 Hypervisor 从新版本 V2 启动成功，Android 从新版本
V2 启动失败触发 rollback 时，Hypervisor、Yocto、Android 和 Tbox 的版本切换状态，场景描述如下： 
• Hypervisor & Yocto & Android & Tbox 都从 V1 版本启动 
• 系统执行 OTA 升级到 V2 版本，并将 V2 版本设定为下一次启动的版本 
• Hypervisor 从 V2 版本启动成功，Android 从 V2 版本启动失败，此时 Yocto 和 Tbox 的启动状态未知 
• 触发回滚，Hypervisor & Yocto & Android & Tbox 都切换到 V1 版本启动 
 
场景四：Tbox OS 从新版本启动失败 
 
图 2-11. OTA 升级后 Tbox 启动失败场景 
 
图 2-11 描述了 Hypervisor(L+L+A) 从 V1 -> V2 OTA 升级后，当 Hypervisor 从新版本 V2 启动成功，Tbox 从新版本 V2
启动失败触发 rollback 时，Hypervisor、Yocto、Android 和 Tbox 的版本切换状态，场景描述如下： 
• Hypervisor & Yocto & Android & Tbox 都从 V1 版本启动 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
• 系统执行 OTA 升级到 V2 版本，并将 V2 版本设定为下一次启动的版本 
• Hypervisor 从 V2 版本启动成功，Tbox 从 V2 版本启动失败，此时 Yocto 和 Android 的启动状态未知 
• 触发回滚，Hypervisor & Yocto & Android & Tbox 都切换到 V1 版本启动 
 
2.10.2 系统回滚的检测流程 
Hypervisor (L+L+A) 的系统回滚检测流程设定在各个 OS 的 LK2 阶段，其详细流程如图 2-12 所示： 
 
图 2-12. Hypervisor(L+L+A) 回滚检测流程 
 
2.10.3 系统回滚的 Boot Control 参数变化 
由图 2-12 可知，系统回滚机制的本质就是通过反复的判断和调整 Boot Control 信息，且只有触发系统的反复重启
让某个系统的 tries_remaining 值减少到 0 才能触发系统整体回滚。Hypervisor(L+L+A) 3OS 的启动可分为如下五种场
景： 
场景一：Hypervisor & Yocto & Android & Tbox 都启动成功（OTA 升级后重启） 
 
图 2-13. Hypervisor & Yocto & Android & Tbox 启动状态 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
各个阶段的 Boot Control 参数值变化如下所示： 
 
 
场景二：Hypervisor 启动失败，Yocto & Android & Tbox 均为启动（OTA 升级后重启） 
 
图 2-14. Hypervisor & Yocto & Android & Tbox 启动状态 
 
各个阶段的 Boot Control 参数值变化如下所示： 
 
 
场景三：Hypervisor & Tbox & Android 启动成功，Yocto 启动失败（OTA 升级后重启） 
 
图 2-15. Hypervisor & Yocto & Android & Tbox 启动状态 
 
各个阶段的 Boot Control 参数值变化如下所示： 
 
slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 14 15 14 15 14 15
yocto_tries_remaining 3 3 1 3 1 1 1 1 1 1 1 1
hyp_successful_boot 1 0 1 0 1 1 1 1 1 1 1 1
yocto_tries_remaining 3 3 1 3 1 3 1 1 1 1 1 1
yocto_successful_boot 1 0 1 0 1 0 1 1 1 1 1 1
tries_remaining 7 7 1 7 1 7 1 7 1 1 1 1
successful_boot 1 0 1 0 1 0 1 0 1 1 1 1
tbox_tries_remaining 3 3 1 3 1 3 1 3 1 3 1 1
tbox_successful_boot 1 0 1 0 1 0 1 0 1 0 1 1
Android reboot
successfully after
OTA upgrade
Tbox reboot
successfully after
OTA upgrade
yocto
android
tbox
hypervisor
Yocto reboot
successfully after
OTA upgrade
Normal boot No reboot after OTA
upgrade
Hypervisor reboot
successfully after
OTA upgrade
slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 14 15 14 15 14 15 14 0
yocto_tries_remaining 3 3 1 3 1 0 1 0 1 0 1 0 1 0
hyp_successful_boot 1 0 1 0 1 0 1 0 1 0 1 0 1 0
yocto_tries_remaining 3 3 1 3 1 3 1 3 1 3 1 3 1 0
yocto_successful_boot 1 0 1 0 1 0 1 0 1 0 1 0 1 0
tries_remaining 7 7 1 7 1 7 1 7 1 7 1 7 1 0
successful_boot 1 0 1 0 1 0 1 0 1 0 1 0 1 0
tbox_tries_remaining 3 3 1 3 1 3 1 3 1 3 1 3 1 0
tbox_successful_boot 1 0 1 0 1 0 1 0 1 0 1 0 1 0
Triggering system
rollback
hypervisor
yocto
android
tbox
Normal boot No reboot after OTA
upgrade
Hypervisor reboot
fail after OTA
upgrade
Not boot Not boot Not boot
slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 14 15 14 15 14 15 14 0
yocto_tries_remaining 3 3 1 3 1 1 1 1 1 1 1 1 1 0
hyp_successful_boot 1 0 1 0 1 1 1 1 1 1 1 1 1 0
yocto_tries_remaining 3 3 1 3 1 3 1 3 1 3 1 0 1 0
yocto_successful_boot 1 0 1 0 1 0 1 0 1 0 1 0 1 0
tries_remaining 7 7 1 7 1 7 1 7 1 1 1 1 1 0
successful_boot 1 0 1 0 1 0 1 0 1 1 1 1 1 0
tbox_tries_remaining 3 3 1 3 1 3 1 1 1 1 1 1 1 0
tbox_successful_boot 1 0 1 0 1 0 1 1 1 1 1 1 1 0
hypervisor
yocto
android
tbox
Normal boot No reboot after OTA
upgrade
Hypervisor reboot
successfully after
OTA upgrade
Tbox reboot
successfully after
OTA upgrad
Android reboot
successfully after
OTA upgrade
Yocto reboot fail
after OTA upgrade
Triggering system
rollback
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
场景四：Hypervisor & Yocto & Tbox 启动成功，Android 启动失败（OTA 升级后重启） 
 
图 2-16. Hypervisor & Yocto & Android & Tbox 启动状态 
各个阶段的 Boot Control 参数值变化如下所示： 
 
 
场景五：Hypervisor & Yocto & Andorid 启动成功，Tbox 启动失败（OTA 升级后重启） 
 
图 2-17. Hypervisor & Yocto & Android & Tbox 启动状态 
 
各个阶段的 Boot Control 参数值变化如下所示： 
 
 
2.10.4 系统回滚测试用例 
2.10.4.1 Yocto OS 启动失败 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 14 15 14 15 14 15 14 0
yocto_tries_remaining 3 3 1 3 1 1 1 1 1 1 1 1 1 0
hyp_successful_boot 1 0 1 0 1 1 1 1 1 1 1 1 1 0
yocto_tries_remaining 3 3 1 3 1 3 1 1 1 1 1 1 1 0
yocto_successful_boot 1 0 1 0 1 0 1 1 1 1 1 1 1 0
tries_remaining 7 7 1 7 1 7 1 7 1 7 1 0 1 0
successful_boot 1 0 1 0 1 0 1 0 1 0 1 0 1 0
tbox_tries_remaining 3 3 1 3 1 3 1 3 1 1 1 1 1 0
tbox_successful_boot 1 0 1 0 1 0 1 0 1 1 1 1 1 0
hypervisor
yocto
android
tbox
Hypervisor reboot
successfully after
OTA upgrade
Yocto reboot
successfully after
OTA upgrad
Tbox reboot
successfully after
OTA upgrade
Android reboot fail
after OTA upgrade
Triggering system
rollbackNormal boot No reboot after OTA
upgrade
slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 14 15 14 15 14 15 14 0
yocto_tries_remaining 3 3 1 3 1 1 1 1 1 1 1 1 1 0
hyp_successful_boot 1 0 1 0 1 1 1 1 1 1 1 1 1 0
yocto_tries_remaining 3 3 1 3 1 3 1 1 1 1 1 1 1 0
yocto_successful_boot 1 0 1 0 1 0 1 1 1 1 1 1 1 0
tries_remaining 7 7 1 7 1 7 1 7 1 1 1 1 1 0
successful_boot 1 0 1 0 1 0 1 0 1 1 1 1 1 0
tbox_tries_remaining 3 3 1 3 1 3 1 3 1 3 1 0 1 0
tbox_successful_boot 1 0 1 0 1 0 1 0 1 0 1 0 1 0
hypervisor
yocto
android
tbox
Tbox reboot fail after
OTA upgrade
Triggering system
rollbackNormal boot No reboot after OTA
upgrade
Hypervisor reboot
successfully after
OTA upgrade
Yocto reboot
successfully after
OTA upgrad
Android reboot
successfully after
OTA upgrade
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
3. Get OTA package from OTA owner 
测试步骤 
1. Device connection yocto adb environment 
2. Execute the upgrade script: python3 hypervisor_update.py --file otapackage_full.zip > update.txt 2>&1 
3. Check whether the upgrade is completed successfully, update.txt contains:  
[INFO:update_attempter_android.cc(600)] Update successfully applied, waiting to reboot. 
4. Execute in Yocto adb environment: 
– adb shell 
– blockdev --setrw /dev/disk/by-partlabel/yocto-boot_b 
– dd if=/dev/urandom of=/dev/disk/by-partlabel/yocto-boot_b bs=1M count=1 
– reboot 
注： 
• hypervisor_update.py: Update script 
• otapackage_full.zip: OTA package, unlimited package name 
• > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The system triggers the rollback mechanism and boots to the HomeScreen 
3. Setting-version should be the same as before the upgrade 
Note: If the test upgrade fails, please provide the update log and uart log in CR. 
 
2.10.4.2 Android OS 启动失败 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package from OTA owner 
测试步骤 
1. Device connection yocto adb environment 
2. Execute the upgrade script: python3 hypervisor_update.py --file otapackage_full.zip > update.txt 2>&1 
3. Check whether the upgrade is completed successfully, update.txt contains:  
[INFO:update_attempter_android.cc(600)] Update successfully applied, waiting to reboot. 
4. Execute in Yocto adb environment: 
– adb shell 
– blockdev --setrw /dev/disk/by-partlabel/init_boot_b 
– dd if=/dev/urandom of=/dev/disk/by-partlabel/init_boot_b bs=1M count=1 
– reboot 
注： 
• hypervisor_update.py: Update script 
• otapackage_full.zip: OTA package, unlimited package name 
• > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The system triggers the rollback mechanism and boots to the HomeScreen 
3. Setting-version should be the same as before the upgrade 
Note: If the test upgrade fails, please provide the update log and uart log in CR 
2.10.4.3 Tbox OS 启动失败 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package from OTA owner 
测试步骤 
1. Device connection yocto adb environment 
2. Execute the upgrade script: python3 hypervisor_update.py --file otapackage_full.zip > update.txt 2>&1 
3. Check whether the upgrade is completed successfully, update.txt contains:  
[INFO:update_attempter_android.cc(600)] Update successfully applied, waiting to reboot. 
4. Execute in Yocto adb environment: 
– adb shell 
– blockdev --setrw /dev/disk/by-partlabel/boot_uos_tbox_b 
– dd if=/dev/urandom of=/dev/disk/by-partlabel/boot_uos_tbox_b bs=1M count=1 
– reboot 
注： 
• hypervisor_update.py: Update script 
• otapackage_full.zip: OTA package, unlimited package name 
• > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The system triggers the rollback mechanism and boots to the HomeScreen 
3. Setting-version should be the same as before the upgrade 
Note: If the test upgrade fails, please provide the update log and uart log in CR. 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.11 断电升级保护 
2.11.1 升级状态信息 
由于设备在 OTA 升级过程中存在异常断电导致升级中断的场景，为了保证设备在 OTA 升级过程中断电重启后能从
中断点继续完成升级，系统需要实时保存升级状态信息，Hypervisor(L+L+A) 整体集中升级方案默认将升级状态信息
保存在 yocto 的mnt/vendor/ota_prefs/prefs 目录，存储的信息如图 2-18 所示： 
 
图 2-18. 升级状态信息  
 
prefs 目录下各个升级状态信息的说明如表 2-5 所示： 
表 2-5. 升级状态信息说明 
Prefs 名称 Prefs 值 描述 
kPrefsUpdateStateNextOperation update-state-next-operation 记录下一次需要操作的 operation 
kPrefsUpdateCheckResponseHash update-check-response-hash 记录上一次升级包的 hash 值 
kPrefsResumedUpdateFailures resumed-update-failures 
记录升级被中断的次数，默认一次升级最多被
中断 10 次，如果超过 10 次，系统将强制全部
重新升级 
kPrefsUpdateStateNextDataOffset update-state-next-data-offset 记录下一次从升级包内下载数据的偏移地址 
kPrefsUpdateStateSHA256Context update-state-sha-256-context 记录升级状态信息的 hash 值 
kPrefsManifestMetadataSize manifest-metadata-size 记录 metadata 数据 size 
kPrefsManifestSignatureSize manifest-signature-size 记录签名数据的 size 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.11.2 Resume 升级检查流程 
OTA 升级前，系统会去判断当前升级是一次 new update 还是 resume update，其检测的信息来源于 prefs 目录内保
存的信息，检测流程如图 2-19 所示： 
 
图 2-19. Hypervisor resume update 流程 
 
其中检查 prefs 目录内存储的信息是否满足 resume 升级条件的详细流程如图 2-20 所示： 
 
图 2-20. Hypervisor check resume update 流程 
 
从图 2-20 可知，只有当 prefs 信息满足所有条件时，系统才会认得此次升级为 resume update；如果有任意条件不
满足，系统都将全部重新开始升级并清除之前保存的升级状态信息。 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.12 Hypervisor OTA API 说明 
MediaTek 在 Yocto SOS 端提供如下 OTA API 供客户使用。 
2.12.1 启动升级 (Normal Mode) 
Normal mode 下提供两个启动升级的接口，第一个接口如下： 
名称 描述 
函数名称 StartUpdate 
函数原型 bool StartUpdate (const char* update_package, bool is_format, bool should_resume) 
函数定义 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.h 
函数实现 src/apps/atom-base/progs/bootctrl-u/ota-interface/files//ota_interface.cpp 
函数功能 
启动升级，并确认 OTA 升级完成后是否需要进行 format 分区操作和是否需要删除
ota_prefs 目录 
函数返回值 
True：启动升级成功 
False：启动升级失败 
传入参数 
update_package 
参数说明：升级包路径 
示例输入：const char* update_package = "/data/otapackage.zip"; 
is_format 
参数说明：OTA 升级后是否需要进行 format 分区操作     
True: 需要 format 分区;  
False: 不需要 format 分区 
示例输入：bool is_format = true; 
should_resume 
参数说明：根据该参数判断升级前是否需要删除 ota_prefs 目录 
True: 升级前不会删除 ota_prefs 目录，系统会判断当前升级是否需要从中断
处继续;  
False: 升级前会删除 ota_prefs 目录，系统每次升级都会全部重新开始 
示例输入：bool is_format = true; 
注： 
1. StartUpdate 函数是一个阻塞函数 
2. 如果传入的 is_format 参数值为 true，用户需要保证升级包内有新增 BoardConfig.conf 文件 (BoardConfig.conf 文件需要用户
自行添加，MTK 不提供添加流程)，用于标记本次需要擦除的分区信息，最终升级包格式如下： 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
 
3. 如果传入的 is_format 参数值为 false，用户只需要按照章节 2.4 如何编译 Hypervisor (L+L+A) OTA 升级包 编译升级包 
4. 由于擦除分区必须在 yocto (sos) recovery mode 下进行，因此当 is_format 参数值为 true 时，OTA 升级完整流程如下: 
 
第二个接口如下： 
名称 描述 
函数名称 StartUpdate 
函数原型 bool StartUpdate (const char* update_package) 
函数定义 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.h 
函数实现 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.cpp 
函数功能 启动升级  
函数返回值 
True：启动升级成功     
False：启动升级失败 
传入参数 
update_package 
参数说明：升级包路径 
示例输入：const char* update_package = "/data/otapackage.zip"; 
 
2.12.2 获取升级进度 (Normal Mode) 
8668 3OS (L+L+A) 在 misc 分区内新增如下结构体用于存储升级状态信息： 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
 
 
结构体定义：src/apps/atom-base/progs/bootctrl-
u/files/hardware/mediatek/bootctrl/bootctrl_multi_os.h 
名称 描述 
函数名称 GetStatusAndProgress 
函数原型 std::vector<std::string> GetStatusAndProgress() 
函数定义 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.h 
函数实现 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.h 
函数功能 获取当前升级阶段、升级进度、升级结果 
函数返回值 
std::vector<std::string> update_metadata 
示例输出： 
status=UPDATE_STATUS_UPDATED_NEED_REBOOT 
progress=1.000000 
error_code=ErrorCode::kSuccess 
注： 
1. Status 的取值参考 Android source code：/system/update_engine/update_status_utils.cc 
2. Error Code 的取值参考 Android source code：/system/update_engine/common/error_code.h 
 
2.12.3 切换 Boot Slot (Normal Mode) 
名称 描述 
函数名称 SwitchSlot 
函数原型 bool SwitchSlot (int64_t slot) 
函数定义 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.h 
函数实现 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.cpp 
函数功能 切换系统启动插槽 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
名称 描述 
函数返回值 
True：切换成功     
False：切换失败 
传入参数 
slot 
参数说明： 
Slot: 需要设定为系统下次启动的 boot slot，即 active slot; slot_a: 0; slot_b: 1 
示例输入： 
int64_t slot = 1; 
 
2.12.4 获取当前启动 Slot (Normal Mode) 
名称 描述 
函数名称 GetCurrentSlot 
函数原型 int GetCurrentSlot () 
函数定义 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.h 
函数实现 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.cpp 
函数功能 获取系统当前启动 slot 
函数返回值 
0：boot slot_a     
1：boot slot_b 
 
2.12.5 中止升级 (Normal Mode） 
名称 描述 
函数名称 CancelCurrentUpdate 
函数原型 bool CancelCurrentUpdate () 
函数定义 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.h 
函数实现 src/apps/atom-base/progs/bootctrl-u/ota-interface/files/ota_interface.cpp 
函数功能 中止本次正在执行的升级进程 
函数返回值 
True：中止成功     
False：中止失败 
 
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
MT8668 Hypervisor OTA LLA  
User Manual 
Confidential B 
2.12.6 Hypervisor OTA API 使用步骤 
Step1： 
在<module-name>.bb 内添加 ota-interface lib 的 depend 
DEPENDS += "ota-interface" 
 
Step2： 
在 Makefile.am 内添加如下 lib 的 link： 
bin_LDADD += -lota_interface \ 
-lupdate_engine_boot_control -lpayload_consumer -lpayload_extent_ranges -
lpayload_extent_utils \ 
-lcow_operation_convert -llz4patch -lzucchini -lbootctrl -lmtkbsg -lchrome -lbrillo -
lbrillo_stream -lxz \ 
-lpuffpatch -lbrotli -lbootloader_message -lssl -lverity_tree -lcrypto -lotautil -lbz2 -
lziparchive -lbspatch\ 
-lsnapshot -lsnapshot_cow -lbrotli -ldm -lsnapshot_snapuserd -lfs_mgr -lcutils_u -
lcutils_sockets -lfs_avb -lavb -llp \  
-lsparse -lfstab -lext4_utils -lgz -lglz4 -lfscrypt -lgsi -llogwrap_u -lgprotoc -
lprotobuf_cpp_lite -lchrome \ 
-latomic -lfmtlib -levent_updateengine -lbase_u -llog_u 
 
Step3： 
Source Code 内添加头文件 dm_interface.h 
#include "ota_interface.h" 
 
Step4： 
在 Source Code 中调用接口 
 
注： 
MediaTek Demo Sample Code：src/apps/atom-base/progs/bootctrl-u/ota-interface /files/demo_main.cpp 
 
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
MT8668 Hypervisor OTA LLA  
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
# SRC0045 MT8668_Hypervisor_Secure_Boot_User_Manual_CN_V1.1.pdf

来源：8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Secure_Boot_User_Manual_CN_V1.1.pdf

SHA-256：d78592d209d4e56fc8da2a18a91febd655128122f94af395d119a0e2d0d966f2

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0045.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.1 
出版日期:  2026-03-24
MT8668 Hypervisor Secure Boot  
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2026-01-28 高峰 正式版 
1.1 2026-03-24 高峰 
• 修改 1.2.1 节安全启动检查流程 中的虚拟化相关内容 
• 修改 1.4.1.1 节生成 oemkey.h 中的代码路径 
• 修改 1.4.5 节签名 FIT 格式镜像中的 Fit-image 描述 
 
  
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
MT8668 Hypervisor Secure Boot 
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
 BootRom ······················································································································································· 5 
1.2 安全启动 ·································································································································································· 5 
 安全启动检查流程 ······································································································································ 5 
1.3 下载代理认证 (DAA) ··············································································································································· 8 
1.4 安全特性配置 ·························································································································································· 8 
 生成密钥对 ·················································································································································· 8 
 开启安全启动 ············································································································································ 10 
 编译软件 ···················································································································································· 12 
 签名 First-Loader ········································································································································ 12 
 签名 FIT 格式镜像 ······································································································································ 12 
 签名 MTK 安卓格式镜像 ··························································································································· 12 
1.5 签名 DA ·································································································································································· 13 
1.6 Authfile 生成 ·························································································································································· 13 
附件一 附加条款 ····························································································································································· 15 
 
图片目录 
图 1-1. 安全启动检查流程 ························································································································································ 7 
图 1-2. dakey.h ········································································································································································· 10 
 
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
MT8668 Hypervisor Secure Boot 
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
FIT Flattened Image Tree 扁平树镜像 
LK2 Litter Kernel 2 轻量内核 2 
NVM Non-Volatile Memory 非易失性内存 
ROM Read-only Memory 只读存储器 
SBC Secure Boot Check 安全启动检查 
SDK Software Development Kit 软件开发包 
SRAM Static Random Access Memory 静态随机存取存储器 
TEE Trusted Execution Environment 可信执行环境 
UART Universal Asynchronous Receiver/Transmitter 通用异步收发器 
USB Universal Serial Bus 通用串行总线 
USBDL USB Download USB 下载 
 
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
 BootRom 
BROM（BootROM）是 SoC ROM 内的软件，无法修改。它是应用处理器执行的第一个软件。主要工作总结如下 ： 
• 对 SoC 进行基础的硬件配置（例如设置 PLL, 时钟等），以便启动系统。 
• 从启动设备 UFS/eMMC/NAND/...）加载第一阶段引导程序以启动系统。 
• 与主机 PC 端的工具通信，以加载下载代理（DA）软件，用于为没有软件或软件损坏的外部 Flash 进行镜像下
载。 
• 使用多个安全启动检查密钥，对第一阶段引导程序或下载代理进行安全启动检查。  
 
1.2 安全启动 
 安全启动检查流程 
安全启动检查流程用于从硬件信任根创建可信执行链。可以通过烧录 eFuse 中的 SBC_EN 来启用它。每次系统从上
电复位中恢复时都会执行此流程。图 1-1 展示了基本的安全启动检查流程。详细描述如下。 
 
1. 上电复位后， BROM 使用以下流程来验证非易失性存储器（ NVM，例如 eMMC 或 NAND）中的安全启动检查
（SBC）公钥（SBC_PUBK）。BROM 依次使用来自 eFuse 的公钥 HASH（SBC_PUBK_HASH）。 
(1) 从 eFuse 读取安全启动检查公钥（SBC_PUBK）的 HASH 值（SBC_PUBK_HASH）。  
(2) 从 NVM 读取 SBC 公钥（SBC_PUBK）。 
(3) 计算来自（2）的数据的 HASH 值。 
(4) 检查来自（1）和（3）的数据是否相同。 
 
2. BROM 加载并验证 bl2.img（Yocto LK2），这是第一阶段的引导加载程序。首先，BROM 将 Yocto LK2 从 NVM 读
取到 SoC 的 SRAM 中，并使用安全启动检查公钥（SBC_PUBK）来认证 Yocto LK2。如果 Yocto LK2 验证成功，将
执行 Yocto LK2。验证方法使用 SHA256 计算 HASH 值，RSA（2048 位）和 MTK 或 PSS 填充（由第一阶段引导加
载程序的头部决定）来进行验证。 
注意： 
• 如果外部存储器是 NAND 闪存，BROM 支持第二份（副本）LK2。当 BROM 无法加载第一份（副本）LK2 时，BROM 会
尝试加载/认证第二份（副本）LK2。 
 
3. 在第一阶段引导加载程序之后，这时跑在 Yocto LK2 阶段，LK2 会校验 Yocto FIT 镜像，Hypervisor 以及安卓相关
的镜像。 
 
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
4. Yocto LK2 从 NVM 把 FIT 镜像（比如 Yocto 内核等 FIT 镜像）加载程序加载到非安全的 DRAM 区域并验证。它使
用嵌入在 LK2 中的 VERIFIED 公钥来认证校验 FIT 镜像的 FIT 签名，并检测 FIT 镜像中各个子镜像的 HASH 值。验
证方法使用 SHA256 计算 HASH 值，RSA（2048 位）和 MTK 或 PSS 填充进行验证 
 
5. Yocto LK2 还从 NVM 加载 MTK 签名格式的镜像（比如 TEE，Hypervisor 镜像）到安全的 DRAM 区域并验证。它
使用嵌入在 LK2 程序内的 ROOT 公钥来认证镜像的 CERT1，并使用从 CERT1 中提取的 IMAGE 公钥来认证镜像的
CERT2。如果 CERT2 验证成功，会认为此镜像合法，会继续跑后面的流程。验证方法使用 SHA256 计算 HASH
值，RSA（2048 位）和 MTK 或 PSS 进行验证。 
 
6. Yocto LK2 在校验完上述 4 和 5 所需要校验的镜像后，会跳转到 TEE, TEE 会启动 Hypervisor 镜像 gz.img，Hypervisor
会先启动 Yocto 内核，然后再校验启动安卓 LK2 镜像和 Tbox LK2 镜像。 
 
7. Yocto 内核执行后，可以通过 Yocto 内核中，提供的 dm-verity 功能来实现对只读系统的校验。 
 
8. Hypervisor 校验安卓 LK2 和 Tbox LK2 的方法需要 Hypervisor 的厂商来提供。 
 
9. 安卓 LK2 会通过 AVB 校验安卓内核，在安卓 Linux 系统执行后，可以通过 Linux 内核中的 dm-verity（在块设备
上）来验证只读镜像。 
注意： 
• 目前 dm-verity 仅支持 Linux 中的块设备（eMMC 上的 EXT4）。 
 
10. Tbox LK2 会加载 Tbox 内核镜像到 DRAM 区域进行验证，Tbox 内核镜像是 FIT 格式的镜像。Tbox LK2 会使用嵌入
在 Tbox LK2 的 VERIFIED 公钥来认证校验 FIT 镜像的 FIT 签名，并检测 FIT 镜像中各个子镜像的 HASH 值。验证方
法使用 SHA256 计算 HASH 值，RSA（2048 位）和 MTK 或 PSS 填充进行验证。 
 
11. Tbox 内核执行后，可以通过 Yocto 内核中，MediaTek 提供的 root_check 功能来实现对只读系统的抽样校验。 
 
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
  
图 1-1. 安全启动检查流程 
  
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
1.3 下载代理认证 (DAA) 
当外部存储器（eMMC/NAND/...）中的设备软件为空或损坏时，主机 PC 工具可以与 SoC 中的 BROM 通信，将一个
DA 软件加载到 SoC 的 SRAM 中并执行 DA 来进行镜像下载过程。当 Enable_DAA 被烧录时，DA 将由 BROM 进行认
证，下面的流程被称为下载代理认证（DAA）。 
 
1. 主机 PC 工具通过 USB 或 UART 将认证文件（AuthFile）发送给 BROM。 
2. BROM 对 AuthFile 进行认证 。 
(1) BROM 从 AuthFile 中读取安全启动检查（SBC）公钥（SBC_PUBK），并使用公钥 HASH（
SBC_PUBK_HASH~SBC_PUBK_HASH1）及相应的禁用位（SBC_PUBK_HASH_DIS~SBC_PUBK_HASH1_DIS）来认
证 SBC 密钥的 HASH。 
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
Yocto 生成两对密钥（包括私钥和公钥）, SBC_KEY 和 VERIFIED_KEY，并放到 Yocto 系统meta/meta-
mediatek/conf/machine/keys 目录下。 
1. 生成 Yocto 私钥的命令: 
openssl genrsa -F4 -out sbc_key.pem 2048 
openssl genrsa -F4 -out verified_key.pem 2048 
openssl req -batch -new -x509 -key verified_key.pem -out verified_key.crt 
 
 
 
 
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
2. 生成 Yocto 公钥的命令: 
openssl rsa -in sbc_key.pem -pubout > sbc_pubk.pem 
openssl rsa -in verified_key.pem -pubout > verified_pubk.pem 
 
安卓也生成两对密钥（包括私钥和公钥）,根秘钥 ROOT_KEY 和镜像密钥 IMAGE_KEY，使用 pem_to_der.py，在
vendor/mediatek/proprietary/scripts/sign-image_v2/der_extractor/中将根密钥的格式转换为 DER 格
式。  
1. 生成安卓私钥的命令: 
openssl genrsa -out root_prvk.pem 2048 
python pem_to_der.py root_prvk.pem root_prvk.der 
openssl genrsa -out img_prvk.pem 2048 
 
2. 生成安卓公钥的命令: 
openssl rsa -in root_prvk.pem -pubout > root_pubk.pem 
python pem_to_der.py root_pubk.pem root_pubk.der 
openssl rsa -in img_prvk.pem -pubout > img_pubk.pem 
 
再继续使用相同的方法生成用于签用于签名和验证 DA 的 DA 密钥对（da_prvk.pem/da_pubk.pem）。另外我们建
议可以将 Yocto 私钥内容覆盖掉安卓私钥内容，Yocto 公钥内容覆盖掉安卓公钥内容，这样配置会更简化。 
 
1.4.1.1 生成 oemkey.h 
将根密钥（root_pubk.der）导出，使用 der_extractor 生成 oemkey.h，该工具位于 
vendor/mediatek/proprietary/scripts/sign-image_v2/der_extractor/ 目录下。请将 oemkey.h 放置到以
下路径: 
Android DA: 
/vendor/mediatek/proprietary/bootable/bootloader/preloader/platform/{Platform}/flash/custom/
oemkey.h 
Yocto LK2: $LK/target/$PROJECT/inc/oemkey.h 
命令: 
chmod 777 der_extractor 
./der_extractor root_pubk.der oemkey.h ANDROID_SBC 
 
1.4.1.2 生成 dakey.h 
dakey.h 包含用于由 LK2 验证 DA_BR.bin 的 DA_BR 公钥。并使用相应的 DA 私钥对 DA_BR.bin 进行签名。 
命令: 
chmod 777 der_extractor 
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
./der_extractor da_pubk.der dakey.h ANDROID_SBC 
将dakey.h 放到以下路径： 
Yocto LK2: $LK2/target/$PROJECT/include/dakey.h 
 
注意:  
• 生成 dakey.h 后, 请将“OEM” 替换成 “DA” (图 1-2). 
 
 
图 1-2. dakey.h 
 
 开启安全启动 
1.4.2.1 安卓软件安全配置 
将安卓侧软件安全配置默认都开启的，可以检查下如下配置： 
1. LK2 设定软件（Hypervisor 安卓的 LK2 是在 Yocto 编译出来的） 
Yocto LK2: 
$LK/project/${PROJECT}.mk 
MTK_SECURITY_SW_SUPPORT=yes 
 
2. Kernel 设定 
32-bit Kernel 
<kernel path>/arch/arm/configs/<project>_debug_defconfig 
<kernel path>/arch/arm/configs/<project>_defconfig 
 
64-bit Kernel 
<kernel path>/arch/arm64/configs/<project>_debug_defconfig 
<kernel path>/arch/arm64/configs/<project>_defconfig 
 
CONFIG_MTK_SECURITY_SW_SUPPORT=y 
 
1.4.2.2 Yocto 侧软件安全配置 
meta/meta-mediatek-mt8xxx/conf/machine/[project].conf 
SECURE_BOOT_ENABLE = “yes” 
ENABLE_ROOTFS_CHECK= “yes” 
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
1.4.2.3 TBox 侧软件安全配置 
meta/meta-mediatek-mt8xxx/conf/machine/[project]uos_tbox.conf 
SECURE_BOOT_ENABLE = “yes” 
ENABLE_ROOTFS_CHECK= “yes” 
1.4.2.4 BROM 开启安全配置 
前面三点都是开启软件层面的安全校验配置，开启 BROM 校验 first-loader（本项目 first-loader 就是 Yocto LK2）则
需要写 eFuse 栏位。 
1. 生成 SCB_PUBK HASH: 
工具路径: meta/meta-mediatek/recipes-bsp/lk/files/pbp 
命令： 
chmod 777 der_extractor 
python pbp.py -j sbc_key.pem -func keyhash_pss -o keyhash 
 
2. 写 SBC_PUBK HASH 写进 eFuse: 
Step 1: 使用 “hexdump –C keyhash”, or “xxd –c 32 keyhash” 来显示 16 进制 keyhash. 
注意: 你必须使用-c 这个入参才能生成规范的十六进制的 ASCCI 显示结果. 
hexdump -C keyhash 
00000000 16 b1 oe fc 5e 4e 06 76 e9 d9 6e 40 0c 51 ca 36 | ……. 
00000010 d1 be 93 d2 67 fd 3e af db f6 f7 89 4a 2c 40 18   |…….. 
xxd -c 32 keyhash 
00000000 16b1 oefc 5e4e 0676 e9d9 6e40 0c51 ca36 d1be 93d2 67fd 3eaf dbf6 f789 4a2c 
4018    ……… 
 
禁止使用 “hexdump keyhash”来显示 
hexdump keyhash 
00000000 b116 fc0e 4e5e 7606 d9e9 406e 510c 36ca 
00000010 bed1 d293 fd67 ad3e f6db 89f7 2c4a 1840 
 
Step 2: 将结果转化为十六进制的字符串; 删除字符之间的空格: 
16b10efc5e4e0676e9d96e400c51ca36d1be93d267fd3eafdbf6f7894a2c4018 
 
Step 3: 执行 ewriter 命令: 
ewriter 1 0 32 16b10efc5e4e0676e9d96e400c51ca36d1be93d267fd3eafdbf6f7894a2c4018 
 
“ewriter”工具更详细的用法, 可以参考 MTK_eFuse_Writer_User_Guide. 
 
 
 
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
注意： 
• 开启 IC 的 BROM secure boot 校验功能，除了要写上述的 SBC_PUBK0_HASH 栏位外，还需要写 SBC_EN。eFuse 只能写一
次，所以在项目开发阶段不建议写 eFuse 开启 IC 的 BROM secure boot 校验功能。 
 
 编译软件 
编译整个项目。 
 
 签名 First-Loader 
1. 签名 first-loader（本项目是 Yocto LK2）会用到sbc_key.pem 和verified_key.pem 两把 key 
2. Key 放置的目录： 
<yocto branch>/meta/meta-mediatek/conf/machine/keys/ 
3. 编译 Yocto LK2 时，开启了安全配置会自动对 Yocto LK2 进行签名。 
4. 签名过程：会将sbc pub key 和verified pub key 打包进 key cert，使用sbc priv key 签名；计算镜像
HASH，将 HASH 和verified pub key 打包进 content cert，并使用verified priv key 签名;最后将 key cert
和 content cert 拼接到原始镜像尾部就生成了签名镜像。 
 
 签名 FIT 格式镜像 
1. 签名 Fit image（本项目是 Yocto/tbox 中的部分 image）会用到 verified_key.pem 这把 key 
2. Key 放置的目录： 
<yocto branch>/meta/meta-mediatek/conf/machine/keys/ 
3. 编译各 FIT 镜像时，开起安全配置会自动对相应的镜像进行签名。 
4. 签名过程：FIT 镜像时开源标准格式的镜像，所以会使用 uboot-mkimage 工具对镜像进行签名，主要是对原始
计算 HASH 存入 HASH 节点，并使用verified priv key 对 FIT 镜像中除 data 节点以外的节点拼接后进行签
名，将签名的结果保存在 Signature 节点。 
 
 签名 MTK 安卓格式镜像 
1.4.6.1 生成 cert1 和 cert2 密钥 
1. 使用 root_prvk.pem 和 img_prvk.pem 生成 cert1 和 cert2_key。 
2. 运行以下命令。  
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
python ./vendor/mediatek/proprietary/scripts/sign-image_v2/img_key_deploy.py 
mt6881cert1_key_path=${KEY_PATH}/root_prvk.pem cert2_key_path=${KEY_PATH}/img_prvk.pem 
root_key_padding=pss 2>&1 | tee  SecureGen.log 
 
注意:  
• 请不要进入 ./vendor/mediatek/proprietary/scripts/sign-image_v2/ 目录执行 img_key_deploy.py。请在代码库
的根目录下执行该命令。 
• 请检查所有镜像的 cert1 和 cert2_key 是否已在以下位置更新 
vendor\mediatek\proprietary\custom\mt6881\security\cert_config\cert1\ 
vendor\mediatek\proprietary\custom\mt6881\security\cert_config\cert2_key\ 
 
1.4.6.2 签名镜像 
在生成了 cert1 和 cert2_key 之后，您可以运行签名脚本来生成 <image>-verified.bin 或 <image>-
verified.img。 
命令: 
python ./vendor/mediatek/proprietary/scripts/sign-image_v2/SignFlow.py <platform> <project> 
2>&1 | tee signflow.log 
或者 
./vendor/mediatek/proprietary/scripts/sign-image/sign_image.sh 2>&1 | tee signflow.log 
(必须在编译前 lunch project) 
 
1.5 签名 DA 
1. 密钥路径设置 
将 DA 公钥 (da_prvk.pem)导出，放置到 Android 路径
vendor/mediatek/proprietary/scripts/secure_chip_tool/custom_keys 目录下 
 
2. 将需要签名的 DA 放置在 prebuilt/resignda/ 目录下，并执行以下命令来签名 DA： 
cd vendor/mediatek/proprietary/scripts/secure_chip_tool/ 
python MTK/resign_da.py prebuilt/resignda/DA_BR.bin MT6881 
settings/Legacy/da/bbchips_pss.ini all out/resignda/DA_BR-resing.bin 
 
1.6 Authfile 生成 
DA 的公钥包含在 authfile 中，BROM 使用它来验证 DA。因此，如果启用了 DAA，在使用 flashtool 下载镜像时需要 
authfile。所有位于以下位置的 .ini 文件，已经为本项目配置好了。 
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
MT8668 Hypervisor Secure Boot 
User Manual 
Confidential B 
./vendor/mediatek/proprietary/scripts/secure_chip_tools/settings/Legacy/authfile/ 
 
您只需要替换位于以下位置的 DA、和根私钥的 .pem 文件。 
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

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2026 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8668 Hypervisor Secure Boot 
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
# SRC0046 来源清单.json

来源：架构知识——中文版/evidence/来源清单.json

SHA-256：0491ada8abd261bbf41f9136064db77db24a53673294b008f8337cdfc5ecb5d3

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0046.html)

## 全文 1

[
  {
    "id": "S001",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_AI_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_AI_User_Manual_CN_V1.0.pdf",
    "bytes": 922731,
    "status": "text_extracted",
    "sha256": "3ca55da6a9f26a8384e3509db1b0c79e8870054de25c3e53f17a735bd4f70794",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 14183,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S002",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_Audio_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_Audio_User_Manual_CN_V1.0.pdf",
    "bytes": 2545940,
    "status": "text_extracted",
    "sha256": "6799a6ae5ba0b337e00429272166c3012920c48d75e1dcce29946374d264bd52",
    "pages": 46,
    "low_text_pages": [],
    "text_chars": 58152,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S003",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_BT_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_BT_User_Manual_CN_V1.0.pdf",
    "bytes": 758096,
    "status": "text_extracted",
    "sha256": "58bac8d6e11b80ddc418a00bf7d1489a851b4f68f8d5aa74005ab848f0f6441c",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 15434,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S004",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_Camera_Turbo_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_Camera_Turbo_User_Manual_CN_V1.0.pdf",
    "bytes": 458474,
    "status": "text_extracted",
    "sha256": "4330ba7eddf6ea04d40083018799771a5afe0e05e2e851a4c3d325ac256c4934",
    "pages": 8,
    "low_text_pages": [],
    "text_chars": 8615,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S005",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_DVR_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_DVR_User_Manual_CN_V1.0.pdf",
    "bytes": 992589,
    "status": "text_extracted",
    "sha256": "2faacfd1b73865cbcc5260d578dd6811b0c71ddb0ea23f8800672a1d8e69c6ad",
    "pages": 15,
    "low_text_pages": [],
    "text_chars": 21378,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S006",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_FBE_Debug_SOP_CN_V1.0.pdf",
    "name": "MT8668_Android_FBE_Debug_SOP_CN_V1.0.pdf",
    "bytes": 1388502,
    "status": "text_extracted",
    "sha256": "bfd28e7774c576b6c9780c11eae628e4154e09f1f930d279587937c11fc2bcb8",
    "pages": 18,
    "low_text_pages": [],
    "text_chars": 19409,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S007",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_GPU_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_GPU_User_Manual_CN_V1.0.pdf",
    "bytes": 986016,
    "status": "text_extracted",
    "sha256": "defe098f947a7a04a09734350d5fe0bbb21fc5ca46d4eaf55605eda07944fc03",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 14868,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S008",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_IPO_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_IPO_User_Manual_CN_V1.0.pdf",
    "bytes": 1052844,
    "status": "text_extracted",
    "sha256": "a8a1aa448b88aab3698bd7624623364b41f2b918ad41c5779638d0bf504be2d0",
    "pages": 20,
    "low_text_pages": [],
    "text_chars": 27323,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S009",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_SDCard_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_SDCard_User_Manual_CN_V1.0.pdf",
    "bytes": 673804,
    "status": "text_extracted",
    "sha256": "fefa132a945d047b8e41bd500838416bfcd5739f1f1241d2c0db18ed12ca1eab",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 11811,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S010",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_SDK_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_SDK_User_Manual_CN_V1.0.pdf",
    "bytes": 1560559,
    "status": "text_extracted",
    "sha256": "a9dd302399ca377a3bf228b9bb3917f5937fb3b8f0b2eed3280e323bf330fb16",
    "pages": 60,
    "low_text_pages": [],
    "text_chars": 86279,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S011",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_Sensor_lssue_Debug_SOP_CN_V1.0.pdf",
    "name": "MT8668_Android_Sensor_lssue_Debug_SOP_CN_V1.0.pdf",
    "bytes": 2066934,
    "status": "text_extracted",
    "sha256": "4ed1bbbfed20ebd00446d90337389d7060dd1f48a1713a066cacbc7007e43419",
    "pages": 27,
    "low_text_pages": [],
    "text_chars": 26329,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S012",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_Thermal_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_Thermal_User_Manual_CN_V1.0.pdf",
    "bytes": 733448,
    "status": "text_extracted",
    "sha256": "7a0c89b2f3e716272619ab03eed66056597cfc0a9857f84c4d36541428b6b2fc",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 11539,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S013",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_USB_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_USB_User_Manual_CN_V1.0.pdf",
    "bytes": 951288,
    "status": "text_extracted",
    "sha256": "dbba8095559df846bc1033021efaf57e29a6c640886ce138c269b90f15d657ac",
    "pages": 15,
    "low_text_pages": [],
    "text_chars": 23581,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S014",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Android_Wifi_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Android_Wifi_User_Manual_CN_V1.0.pdf",
    "bytes": 739893,
    "status": "text_extracted",
    "sha256": "be1aff227afa79140c50d66b18cbb5f20b0a483c18c2c9345a0f4ee90f7b33cc",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 25493,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S015",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Camera_Sensor_Driver_Bringup_SOP_CN_V1.0.pdf",
    "name": "MT8668_Camera_Sensor_Driver_Bringup_SOP_CN_V1.0.pdf",
    "bytes": 1212242,
    "status": "text_extracted",
    "sha256": "355d4f791169e10496dfc12ad0cf551389672336cc970f7d7e0ebef318ee53b6",
    "pages": 14,
    "low_text_pages": [],
    "text_chars": 17482,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S016",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_DSI_Bringup_SOP_CN_V1.0.pdf",
    "name": "MT8668_DSI_Bringup_SOP_CN_V1.0.pdf",
    "bytes": 5612682,
    "status": "text_extracted",
    "sha256": "0554d880bcfb92541cd01ef47d5d5163b578054f8cb5170ba2204b625af4c77c",
    "pages": 98,
    "low_text_pages": [],
    "text_chars": 126336,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S017",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_GNSS_Specification_V1.0.pdf",
    "name": "MT8668_GNSS_Specification_V1.0.pdf",
    "bytes": 492518,
    "status": "text_extracted",
    "sha256": "63729693d95a1e713a15ae15da64c5067671f96a94aa360dd1503b57698476d1",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 28415,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S018",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_AI_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_AI_User_Manual_CN_V1.0.pdf",
    "bytes": 924580,
    "status": "text_extracted",
    "sha256": "e673c34c0d4c3d1ce61e0257104750baeac28715d0a60d7be466bcca4e5c993e",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 14205,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S019",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Camera_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_Camera_User_Manual_CN_V1.0.pdf",
    "bytes": 1405393,
    "status": "text_extracted",
    "sha256": "db487565233bce46dacdcefd88e97b854d031ddef35f3b2053a916c98030c02e",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 28470,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "01-三张架构图阅读指南.md",
        "pages": "6-8"
      },
      {
        "chapter": "02-整机与虚拟化架构.md",
        "pages": "6-8"
      },
      {
        "chapter": "04-三图模块字典.md",
        "pages": "7-8"
      },
      {
        "chapter": "05-通信机制与异常诊断基础.md",
        "pages": "6-8"
      },
      {
        "chapter": "07-SOS-Yocto内部机制.md",
        "pages": "6-8"
      },
      {
        "chapter": "11-显示相机与驾驶辅助业务流程.md",
        "pages": "6-8"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "6-8"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "6-8"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "6-8"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "6-8"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "6-8"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [
      6
    ],
    "same_hash_ids": []
  },
  {
    "id": "S020",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Clock_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_Clock_User_Manual_CN_V1.0.pdf",
    "bytes": 568783,
    "status": "text_extracted",
    "sha256": "398c051fcb7f51504e53d82008b628c435240a964bdc9a46489249f4c24c2501",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 11456,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S021",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Display_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_Display_User_Manual_CN_V1.0.pdf",
    "bytes": 751281,
    "status": "text_extracted",
    "sha256": "e6f862cdda05f6ab226dfd244182a2b14d8531edd9ec0d8fd4d04dcf774fdb84",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 24456,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "11-显示相机与驾驶辅助业务流程.md",
        "pages": "5-7"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "5-7"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "5-7"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "6-7"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S022",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_DMA_Buffer_Debug_User_Manual_V1.0.pdf",
    "name": "MT8668_Hypervisor_DMA_Buffer_Debug_User_Manual_V1.0.pdf",
    "bytes": 1568915,
    "status": "text_extracted",
    "sha256": "99f3e33f914dcebe4fee976ba04aa4ffca6c5cee48b3dfc760c44abd929d652b",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 18736,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S023",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_General_Introduction_CN_V1.1.pdf",
    "name": "MT8668_Hypervisor_General_Introduction_CN_V1.1.pdf",
    "bytes": 626963,
    "status": "text_extracted",
    "sha256": "adec16da0d62a268966ed8e5145b8d0b89f419c9c6d53684d21d94777bd34684",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 8448,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "03-MT8676-SDK与UMDP.md",
        "pages": "4-6"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "4-6"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "6"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S024",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_GNSS_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_GNSS_User_Manual_CN_V1.0.pdf",
    "bytes": 714734,
    "status": "text_extracted",
    "sha256": "617e4896eb57b5d039a5f95ee82d1aa655cbf7cb72a4fac18e86d4923575546d",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 18640,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S025",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_GPIO_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_GPIO_User_Manual_CN_V1.0.pdf",
    "bytes": 578856,
    "status": "text_extracted",
    "sha256": "81a8c931d00044808287b7a610d13cf5436f72a3538ed9325683dd6434fd60de",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 12373,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S026",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_GPU_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_GPU_User_Manual_CN_V1.0.pdf",
    "bytes": 832651,
    "status": "text_extracted",
    "sha256": "6891b99c5e0953d4958d05b3f7af081567cf8f49b7a33fe7ead8f125c7d1414f",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 15008,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S027",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_I2C_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_I2C_User_Manual_CN_V1.0.pdf",
    "bytes": 724834,
    "status": "text_extracted",
    "sha256": "3f04bd3f157ad1b1754b3f294cf10fa4cafa94340b4099fab097fc70c5ce8def",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 17423,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S028",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Multi_Display_Proxy-Wayland_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_Multi_Display_Proxy-Wayland_User_Manual_CN_V1.0.pdf",
    "bytes": 989860,
    "status": "text_extracted",
    "sha256": "f389ba21d747d1079729e4f34cb52681e43e2206dddeedd96361ef85c603bffc",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 21161,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "05-通信机制与异常诊断基础.md",
        "pages": "5-7"
      },
      {
        "chapter": "07-SOS-Yocto内部机制.md",
        "pages": "5-7"
      },
      {
        "chapter": "11-显示相机与驾驶辅助业务流程.md",
        "pages": "5-7"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "5-7"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "5-7"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "5-7"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S029",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_OP-TEE_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_OP-TEE_User_Manual_CN_V1.0.pdf",
    "bytes": 1152022,
    "status": "text_extracted",
    "sha256": "d2f773042f681c31555a701c96f0df9195563c144d33a2d42574e3143f93103d",
    "pages": 39,
    "low_text_pages": [],
    "text_chars": 62093,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S030",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_OTA_LLA_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_OTA_LLA_User_Manual_CN_V1.0.pdf",
    "bytes": 1915091,
    "status": "text_extracted",
    "sha256": "58292e0d098722a18555a674b9f40f221c63b588935dd6530e20d08a1696fe68",
    "pages": 37,
    "low_text_pages": [],
    "text_chars": 64504,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "14-系统生命周期业务流程.md",
        "pages": "8-10"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "8-10"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "8-10"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S031",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Performance_User_Manual_CN_V1.1.pdf",
    "name": "MT8668_Hypervisor_Performance_User_Manual_CN_V1.1.pdf",
    "bytes": 878262,
    "status": "text_extracted",
    "sha256": "cb4f3b88886b853b76a47ca65d1c1034520f43ef090f1c95877970331c167534",
    "pages": 18,
    "low_text_pages": [],
    "text_chars": 26909,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S032",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Reserved_Memory_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_Reserved_Memory_User_Manual_CN_V1.0.pdf",
    "bytes": 970780,
    "status": "text_extracted",
    "sha256": "607cd3a86dd30f4b094c07f3d11b5e1b677dee4247a21b2f551355d703621b95",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 11990,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S033",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_SDCard_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_SDCard_User_Manual_CN_V1.0.pdf",
    "bytes": 777928,
    "status": "text_extracted",
    "sha256": "88161ea5f13a3ae7ded76ed7bdece0805fda9105eabf1b0c08918ce24ec336cc",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 15979,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S034",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Secure_Boot_Remote_Signature_SOP_V0.1.pdf",
    "name": "MT8668_Hypervisor_Secure_Boot_Remote_Signature_SOP_V0.1.pdf",
    "bytes": 339197,
    "status": "text_extracted",
    "sha256": "0b8cec92f7cc2731cc97af8f20ba9e1e9516a5f18428688155d3581b99efc52a",
    "pages": 19,
    "low_text_pages": [],
    "text_chars": 11086,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S035",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Secure_Boot_User_Manual_CN_V1.1.pdf",
    "name": "MT8668_Hypervisor_Secure_Boot_User_Manual_CN_V1.1.pdf",
    "bytes": 733246,
    "status": "text_extracted",
    "sha256": "d78592d209d4e56fc8da2a18a91febd655128122f94af395d119a0e2d0d966f2",
    "pages": 15,
    "low_text_pages": [],
    "text_chars": 22436,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "14-系统生命周期业务流程.md",
        "pages": "5-6"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "5-6"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S036",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_SPI_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_SPI_User_Manual_CN_V1.0.pdf",
    "bytes": 874375,
    "status": "text_extracted",
    "sha256": "9f37a8db2acdc0978f537d46c88228a20c2b8bbed18f24af597ad1e78af26894",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 23516,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S037",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Suspend_Resume_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_Suspend_Resume_User_Manual_CN_V1.0.pdf",
    "bytes": 731962,
    "status": "text_extracted",
    "sha256": "78ba6687962ea157f14eee1aced9267c4bc6c35699607e8675e3e1176a74ce83",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 20219,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "08-MCU内部机制.md",
        "pages": "4-10"
      },
      {
        "chapter": "14-系统生命周期业务流程.md",
        "pages": "4-10"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "4-10"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S038",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_System_LLA_User_Manual_CN_V1.1.pdf",
    "name": "MT8668_Hypervisor_System_LLA_User_Manual_CN_V1.1.pdf",
    "bytes": 1155445,
    "status": "text_extracted",
    "sha256": "cd58cb9b620fd3ecb12f62fd420fe8a9a1de7914a5795cfe8874968eef566f86",
    "pages": 26,
    "low_text_pages": [],
    "text_chars": 43663,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "01-三张架构图阅读指南.md",
        "pages": "5-9"
      },
      {
        "chapter": "02-整机与虚拟化架构.md",
        "pages": "5-9"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "5-9"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S039",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Touch_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_Touch_User_Manual_CN_V1.0.pdf",
    "bytes": 897775,
    "status": "text_extracted",
    "sha256": "e6746757e7bf0d0665757673e779eb110c22b81a66d71acc0adbdf359190b595",
    "pages": 14,
    "low_text_pages": [],
    "text_chars": 18659,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S040",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_UART_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_UART_User_Manual_CN_V1.0.pdf",
    "bytes": 700375,
    "status": "text_extracted",
    "sha256": "4e0dab399b5c59e3cca72e38ece9e44c4786d8c6151b51ce548e459680a83c1f",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 15800,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S041",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_USB_LLA_User_Manual_CN_V1.1.pdf",
    "name": "MT8668_Hypervisor_USB_LLA_User_Manual_CN_V1.1.pdf",
    "bytes": 983399,
    "status": "text_extracted",
    "sha256": "2d16db982b9dbf079f3479b1be9c458f8b541f1c3c4a1824feafec51c62cdcbb",
    "pages": 17,
    "low_text_pages": [],
    "text_chars": 26793,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S042",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_Hypervisor_Vcodec_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_Vcodec_User_Manual_CN_V1.0.pdf",
    "bytes": 807214,
    "status": "text_extracted",
    "sha256": "1f7b85f8dfc6e2af860aeb10694148b8769e80f138a14f911edf105d88140256",
    "pages": 15,
    "low_text_pages": [],
    "text_chars": 20101,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S043",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_SCP_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_SCP_User_Manual_CN_V1.0.pdf",
    "bytes": 2561737,
    "status": "text_extracted",
    "sha256": "45846faca00dec6453b30985c4a59cdd1000a726a730c1fb51682417cd23ae2d",
    "pages": 74,
    "low_text_pages": [],
    "text_chars": 112548,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S044",
    "path": "8668/MTK参考资料/MTK参考资料/Android/MT8668_USB_Customer_Support_SOP_CN_V1.0.pdf",
    "name": "MT8668_USB_Customer_Support_SOP_CN_V1.0.pdf",
    "bytes": 791684,
    "status": "text_extracted",
    "sha256": "e2492abe19ec2eda045d46dacb77b1f2385fb5604d099632603326aba014653c",
    "pages": 14,
    "low_text_pages": [],
    "text_chars": 23936,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S045",
    "path": "8668/MTK参考资料/MTK参考资料/Audio模块 8676 vs 8668.pdf",
    "name": "Audio模块 8676 vs 8668.pdf",
    "bytes": 2126678,
    "status": "text_extracted",
    "sha256": "0ff179c39e735ee6be508657f629112b67a3e3d058cc41d10ed0ad4d0916f794",
    "pages": 4,
    "low_text_pages": [],
    "text_chars": 540,
    "platform": "MT8676/MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "12-音频与语音业务流程.md",
        "pages": "2-4"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "2-4"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "2-4"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [
      2
    ],
    "same_hash_ids": []
  },
  {
    "id": "S046",
    "path": "8668/MTK参考资料/MTK参考资料/Auto_Camera_ISP8S_CDPHY_Eye_Scan_User_Guide_V1.0.pdf",
    "name": "Auto_Camera_ISP8S_CDPHY_Eye_Scan_User_Guide_V1.0.pdf",
    "bytes": 747593,
    "status": "text_extracted",
    "sha256": "6c11069e244f90d74172da48786a3b14a2bfcad4e445d7ab42d8689e912b0699",
    "pages": 15,
    "low_text_pages": [],
    "text_chars": 21660,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S047",
    "path": "8668/MTK参考资料/MTK参考资料/GPU_PARAVIRT_Codebase_DIFF_Introduction_Audio.pdf",
    "name": "GPU_PARAVIRT_Codebase_DIFF_Introduction_Audio.pdf",
    "bytes": 1234881,
    "status": "text_extracted",
    "sha256": "a7ec0789a073145cab98ed28b33236606eecbf545e2a25a958121c22820eb5ca",
    "pages": 25,
    "low_text_pages": [],
    "text_chars": 10980,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S048",
    "path": "8668/MTK参考资料/MTK参考资料/MT8668_Application_Processor_Technical_Brief_V0.1.pdf",
    "name": "MT8668_Application_Processor_Technical_Brief_V0.1.pdf",
    "bytes": 3433811,
    "status": "text_extracted",
    "sha256": "0970f5784a42cf14b22e5cc6803736b7f4c228eda0910489ed3c27ad9fb8b4ba",
    "pages": 129,
    "low_text_pages": [],
    "text_chars": 209761,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S049",
    "path": "8668/MTK参考资料/MTK参考资料/MT8668_Audio_HW_Interface_User_Guide_V1.1.pdf",
    "name": "MT8668_Audio_HW_Interface_User_Guide_V1.1.pdf",
    "bytes": 379331,
    "status": "text_extracted",
    "sha256": "04511451ad4d3f2f746dc85a9fa1c622d094345c12e30f5f396bf47ee9e845dc",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 12951,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "12-音频与语音业务流程.md",
        "pages": "4-7"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "6-7"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S050",
    "path": "8668/MTK参考资料/MTK参考资料/MT8668_DSI_Bringup_SOP_CN_V1.0.pdf",
    "name": "MT8668_DSI_Bringup_SOP_CN_V1.0.pdf",
    "bytes": 5612768,
    "status": "text_extracted",
    "sha256": "0ac675257290614f556debe715546a221bb502765e0efb7799720b2c20247252",
    "pages": 98,
    "low_text_pages": [],
    "text_chars": 126042,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S051",
    "path": "8668/MTK参考资料/MTK参考资料/MT8668_Hypervisor_Display_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Hypervisor_Display_User_Manual_CN_V1.0.pdf",
    "bytes": 751525,
    "status": "text_extracted",
    "sha256": "d2054c264cae4f251f1ec7d42985679c8ad32a4dbf0181faa985490b3ad272c4",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 24408,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S052",
    "path": "8668/MTK参考资料/MTK参考资料/MT8668_Public_domain_audio_planning-202601-to-PVT.pdf",
    "name": "MT8668_Public_domain_audio_planning-202601-to-PVT.pdf",
    "bytes": 253783,
    "status": "text_extracted",
    "sha256": "91086931dad2dd5a1b9c6effe2cd5ebcfbcd55cdff0c6726d9f1f8fee156d66e",
    "pages": 1,
    "low_text_pages": [],
    "text_chars": 2379,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "12-音频与语音业务流程.md",
        "pages": "1"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "1"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S053",
    "path": "8668/MTK参考资料/MTK参考资料/MT8676_Audio_倍频介绍.pdf",
    "name": "MT8676_Audio_倍频介绍.pdf",
    "bytes": 447843,
    "status": "text_extracted",
    "sha256": "c5db8e284bad75735ea1b9a1bf53de00a36d7a1a0df57697549df6353a7bc570",
    "pages": 6,
    "low_text_pages": [],
    "text_chars": 2402,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S183"
    ]
  },
  {
    "id": "S054",
    "path": "8668/MTK参考资料/MTK参考资料/MT8676_Bringup_SOP_DSI_CN_V1.0.pdf",
    "name": "MT8676_Bringup_SOP_DSI_CN_V1.0.pdf",
    "bytes": 5833897,
    "status": "text_extracted",
    "sha256": "a0a4b6d5cee93e90af29a602decc1631f0fae383ac6f611acf65e8f3ef0d4e33",
    "pages": 103,
    "low_text_pages": [],
    "text_chars": 126875,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S055",
    "path": "8668/MTK参考资料/MTK参考资料/MT8676_Display_Panel_Issue_Debug_SOP_V1.0.pdf",
    "name": "MT8676_Display_Panel_Issue_Debug_SOP_V1.0.pdf",
    "bytes": 4028533,
    "status": "text_extracted",
    "sha256": "1ee440ddc61d849a9cfe5b752f87898cc941a04801f4566fdd7b25df874312a8",
    "pages": 46,
    "low_text_pages": [],
    "text_chars": 56948,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S184"
    ]
  },
  {
    "id": "S056",
    "path": "8668/MTK参考资料/MTK参考资料/MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf",
    "bytes": 3213507,
    "status": "text_extracted",
    "sha256": "a861eabc5efa0069def436ae572a481a28af06767c94388799fdcee5bd55acd9",
    "pages": 37,
    "low_text_pages": [],
    "text_chars": 47081,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S057",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_AI_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_AI_User_Manual_CN_V1.0.pdf",
    "bytes": 900029,
    "status": "text_extracted",
    "sha256": "daaf8317f91f1edc3d244c4d8ed6a6a9208e6a8b3788d3f8b35f87478c3ee42a",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 14184,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S058",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Audio_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_Audio_User_Manual_CN_V1.0.pdf",
    "bytes": 1453719,
    "status": "text_extracted",
    "sha256": "860275ad746124897caf5476cbc858638fa1ae11926c6cb8042c50428ddc3d7d",
    "pages": 21,
    "low_text_pages": [],
    "text_chars": 24249,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S059",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_AVM_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_AVM_User_Manual_CN_V1.0.pdf",
    "bytes": 14178715,
    "status": "text_extracted",
    "sha256": "d5c445e4df99aae84f4b5132eceb11b9a771cd80f442ab18495a19dce5f602a3",
    "pages": 233,
    "low_text_pages": [],
    "text_chars": 224571,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S060",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Camera_Driver_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_Camera_Driver_User_Manual_CN_V1.0.pdf",
    "bytes": 2082484,
    "status": "text_extracted",
    "sha256": "e2124eed82570bb848c9206a0dda5d201ed8cae25a34abc97baa8e3bb016978b",
    "pages": 24,
    "low_text_pages": [],
    "text_chars": 25435,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S061",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_DDR_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_DDR_User_Manual_CN_V1.0.pdf",
    "bytes": 716841,
    "status": "text_extracted",
    "sha256": "aa722a95a0ab0ffaa90cab15c197ea8b401a80544c306e6569a2b636640c10b6",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 13341,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S062",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_eCall_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_eCall_User_Manual_CN_V1.0.pdf",
    "bytes": 939721,
    "status": "text_extracted",
    "sha256": "7a9437a7db8a9d2567347610bda7c92e6344b8e9101a338566737bbc37ac2710",
    "pages": 18,
    "low_text_pages": [],
    "text_chars": 25782,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S063",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_FastRVC_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_FastRVC_User_Manual_CN_V1.0.pdf",
    "bytes": 557272,
    "status": "text_extracted",
    "sha256": "ce43278780583c3205ac05c21a903d4afbfbab36dea69f0606e32eda88f0c5ad",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 8354,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S064",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_GPU_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_GPU_User_Manual_CN_V1.0.pdf",
    "bytes": 775056,
    "status": "text_extracted",
    "sha256": "2576411b5ab1e9977203026f326e956644401b8943acf323bc01b600a08ff7e8",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 12884,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S065",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Panel_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_Panel_User_Manual_CN_V1.0.pdf",
    "bytes": 1879554,
    "status": "text_extracted",
    "sha256": "1ae2434832d69efbd637ea20754b949cca43639dec360f71222adbeea7b7c7c5",
    "pages": 38,
    "low_text_pages": [],
    "text_chars": 45580,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S066",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Property_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_Property_User_Manual_CN_V1.0.pdf",
    "bytes": 906224,
    "status": "text_extracted",
    "sha256": "18ec91283d4dc5fd725690e8bd2c63aa7ea942c10cef6cf874f2266564f4bec2",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 14817,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S067",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_SDCard_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_SDCard_User_Manual_CN_V1.0.pdf",
    "bytes": 682079,
    "status": "text_extracted",
    "sha256": "cba4630088f7550654ba8f62646f299747944f50938ddb86a981e943a6970b79",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 11949,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S068",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Secure_Boot_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_Secure_Boot_User_Manual_CN_V1.0.pdf",
    "bytes": 668097,
    "status": "text_extracted",
    "sha256": "7807e7a6bd971e1cf097ae2418a1bc454e578a7170ab170ebbb6f4c1af0d8528",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 17921,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S069",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Sentry_Mode_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_Sentry_Mode_User_Manual_CN_V1.0.pdf",
    "bytes": 991545,
    "status": "text_extracted",
    "sha256": "4c95c7252a57a32ee46245dd74dedb354affa43c9c8488046a4cdc2fe06c204e",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 15276,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S070",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_SPI_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_SPI_User_Manual_CN_V1.0.pdf",
    "bytes": 874716,
    "status": "text_extracted",
    "sha256": "7d1e0f95c34f85cdc6979f47ac270c6505d949845921de1c7f4bbba86a8f8818",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 23430,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S071",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_System_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_System_User_Manual_CN_V1.0.pdf",
    "bytes": 1273592,
    "status": "text_extracted",
    "sha256": "20554ef2677ee10827dd92dca95d5298cdeb910379cc6950a466bdaa5b523f35",
    "pages": 38,
    "low_text_pages": [],
    "text_chars": 67528,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S072",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_Thermal_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_Thermal_User_Manual_CN_V1.0.pdf",
    "bytes": 549021,
    "status": "text_extracted",
    "sha256": "0072a842cf3ca7534921d0ff027237ab1cd9fac41e6192657f6b49c95fefca5c",
    "pages": 8,
    "low_text_pages": [],
    "text_chars": 9244,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S073",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_UART_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_UART_User_Manual_CN_V1.0.pdf",
    "bytes": 603177,
    "status": "text_extracted",
    "sha256": "e7b728514d1d4e8fad05553b4deb1fc3bd32ae9b264994eb737ab4a0e42b72fd",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 14841,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S074",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto/MT8668_Yocto_USB_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_USB_User_Manual_CN_V1.0.pdf",
    "bytes": 944820,
    "status": "text_extracted",
    "sha256": "f71b132e4ab44b81b20e91259057337aa2118e9d8de169121054692154cc2573",
    "pages": 15,
    "low_text_pages": [],
    "text_chars": 23515,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S075",
    "path": "8668/MTK参考资料/MTK参考资料/Yocto_UOS/MT8668_Yocto_T-Box_User_Manual_CN_V1.0.pdf",
    "name": "MT8668_Yocto_T-Box_User_Manual_CN_V1.0.pdf",
    "bytes": 921819,
    "status": "text_extracted",
    "sha256": "dbdab38836d52c215e28a3b5e2bca1cf2b2e5ca5cec43dd7b62d15df7beb1dfa",
    "pages": 38,
    "low_text_pages": [],
    "text_chars": 65872,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "03-MT8676-SDK与UMDP.md",
        "pages": "5-7"
      },
      {
        "chapter": "09-TBox通信模组内部机制.md",
        "pages": "5-7"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "5-7"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S076",
    "path": "8668/PVT参考资料/P5B系列车规级模组产品规格书_v2.0_20260629.pdf",
    "name": "P5B系列车规级模组产品规格书_v2.0_20260629.pdf",
    "bytes": 1338279,
    "status": "text_extracted",
    "sha256": "d6b8534c01933235774797130370b94072100c95d297469265f03ea62e8d4f5f",
    "pages": 33,
    "low_text_pages": [
      31
    ],
    "text_chars": 31431,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "2-5"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S302"
    ]
  },
  {
    "id": "S077",
    "path": "8676 8678 debug SOP.pdf",
    "name": "8676 8678 debug SOP.pdf",
    "bytes": 2886733,
    "status": "text_extracted",
    "sha256": "b7fe25046564728d772d10ed8484e7b78fa40cb16c3decc4811e7bb96d846d3c",
    "pages": 19,
    "low_text_pages": [
      1,
      3,
      8,
      10,
      12,
      14,
      16,
      18
    ],
    "text_chars": 8067,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S078",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_AEE_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_AEE_User_Manual_V1.0.pdf",
    "bytes": 800209,
    "status": "text_extracted",
    "sha256": "0d324bedb45f25a9b81defa68e8470f5038fc80be45700fc5475db12cee9f715",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 15979,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S079",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_AI_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_AI_User_Manual_V1.0.pdf",
    "bytes": 1021484,
    "status": "text_extracted",
    "sha256": "369a167bab945805277e9e0d6e18ebbea48c20b4ec55f29642d9914df87e1c5b",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 15085,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S080",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Audio_User_Manual_V1.1.pdf",
    "name": "MT8676_Android_Audio_User_Manual_V1.1.pdf",
    "bytes": 3145789,
    "status": "text_extracted",
    "sha256": "38c540b592d33eabbf58322905b8cd986fcaa8a52af4b60127289c3f82592f5b",
    "pages": 44,
    "low_text_pages": [],
    "text_chars": 61749,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S081",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_BT_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_BT_User_Manual_V1.0.pdf",
    "bytes": 615673,
    "status": "text_extracted",
    "sha256": "e52de38fef8323a9db826821d4f3ca04dec7a3014f60d8c4003d79ba4561191c",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 15045,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S082",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf",
    "bytes": 2315995,
    "status": "text_extracted",
    "sha256": "1fce1e40a576c515932d2f44c7339bb7688e24f98c0c1bd3a33ecc429705be5d",
    "pages": 29,
    "low_text_pages": [],
    "text_chars": 30171,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S083",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Camera_Driver_User_Manual_V1.2.pdf",
    "name": "MT8676_Android_Camera_Driver_User_Manual_V1.2.pdf",
    "bytes": 1823407,
    "status": "text_extracted",
    "sha256": "74c716f63dfe7a9e0d9b6c1571a5b3e87cf5e403df10ee03c0681c6ddc4f3c14",
    "pages": 25,
    "low_text_pages": [],
    "text_chars": 25746,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S084",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Camera_Turbo_User_Manual_V1.1.pdf",
    "name": "MT8676_Android_Camera_Turbo_User_Manual_V1.1.pdf",
    "bytes": 1107574,
    "status": "text_extracted",
    "sha256": "e914c6daaad72d23572f4a8b89efbddd775c133afa03c4d8180a5e24016b956f",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 13203,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S085",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_DDR_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_DDR_User_Manual_V1.0.pdf",
    "bytes": 814385,
    "status": "text_extracted",
    "sha256": "37f5ed85e31d177bec5008a94aa2bd7c335e029c28cdbcaa22d6a4da5a3090ab",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 15738,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S086",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_DebugLoggerUI_User_Manual_V1.1.pdf",
    "name": "MT8676_Android_DebugLoggerUI_User_Manual_V1.1.pdf",
    "bytes": 906578,
    "status": "text_extracted",
    "sha256": "13d506954e8173f09c86ae2119f30f96da255967e301879494ccf56b2e4e8eb2",
    "pages": 17,
    "low_text_pages": [],
    "text_chars": 24053,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S087",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Display_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_Display_User_Manual_V1.0.pdf",
    "bytes": 880877,
    "status": "text_extracted",
    "sha256": "9ec9003f71b1b9f52e0b8bee0e7812a09a1ccdcd03549e1f71b5e8582c0d9f04",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 15835,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S088",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_DSI_Panel_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_DSI_Panel_User_Manual_V1.0.pdf",
    "bytes": 3299442,
    "status": "text_extracted",
    "sha256": "6d1c9931e889ed4b70dee811bd529dac8b36f4043508ad8df8397462b4c64aab",
    "pages": 40,
    "low_text_pages": [],
    "text_chars": 48537,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S089",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_DVR_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_DVR_User_Manual_V1.0.pdf",
    "bytes": 831506,
    "status": "text_extracted",
    "sha256": "01d0f7d1891c66a7a9eb60b6760bcf9b1577806b46ec8fefa7bae437dc649dd5",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 22042,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S090",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_FastRVC_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_FastRVC_User_Manual_V1.0.pdf",
    "bytes": 664953,
    "status": "text_extracted",
    "sha256": "bf16d2b93d43ff18181e2e59182d17957213bf10b129e0740809278bba39ae54",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 9072,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S091",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_FBE_Debug_SOP_V1.0.pdf",
    "name": "MT8676_Android_FBE_Debug_SOP_V1.0.pdf",
    "bytes": 1274496,
    "status": "text_extracted",
    "sha256": "2ce096834385ecd1a47bdcffdf4a87557c3da67c976686436c03eb9c7da30393",
    "pages": 18,
    "low_text_pages": [],
    "text_chars": 21400,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S092",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_General_Introduction_V1.1.pdf",
    "name": "MT8676_Android_General_Introduction_V1.1.pdf",
    "bytes": 702540,
    "status": "text_extracted",
    "sha256": "4276ac3d43b181b362f5b976d77ff79217e99f4b140f3eeb27a8582e4c034931",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 9573,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S093",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_GPS_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_GPS_User_Manual_V1.0.pdf",
    "bytes": 676228,
    "status": "text_extracted",
    "sha256": "4372e62da7d87002e5138f919ba78b4664beb8f610ecd75d7fa70b6ccc878605",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 12134,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S094",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_GPU_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_GPU_User_Manual_V1.0.pdf",
    "bytes": 908917,
    "status": "text_extracted",
    "sha256": "81862b4f99af859aa8fedaccd7eb34196c510dc8eecb4e5a50b2d38f37b47dfd",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 16456,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S095",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_I2C_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_I2C_User_Manual_V1.0.pdf",
    "bytes": 651211,
    "status": "text_extracted",
    "sha256": "9d35060e0261f340ad93de9785cd05d7827300af2e102c334e12295478726c86",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 13832,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S096",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_IPO_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_IPO_User_Manual_V1.0.pdf",
    "bytes": 1062208,
    "status": "text_extracted",
    "sha256": "d5578aaa112e1ee2fcfa7b41814e688670ef50022b8baf75744f2c879b8b6835",
    "pages": 20,
    "low_text_pages": [],
    "text_chars": 27650,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S097",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_OTA_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_OTA_User_Manual_V1.0.pdf",
    "bytes": 859683,
    "status": "text_extracted",
    "sha256": "5b4522578daf0c990428cf50963fda608f8424848e2dde8cbd33cb09178d13bd",
    "pages": 21,
    "low_text_pages": [],
    "text_chars": 31789,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S098",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_SDCard_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_SDCard_User_Manual_V1.0.pdf",
    "bytes": 667591,
    "status": "text_extracted",
    "sha256": "a3042f158d97a85ec50802b34c9ed60e5b1fbc57d25d28f02dd31e8522301408",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 12256,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S099",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_SDK_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_SDK_User_Manual_V1.0.pdf",
    "bytes": 1553055,
    "status": "text_extracted",
    "sha256": "a34c5b731928dce574ec960712d18dc91be506a21182dec3ea84110db7997320",
    "pages": 60,
    "low_text_pages": [],
    "text_chars": 86729,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S100",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Secure_Boot_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_Secure_Boot_User_Manual_V1.0.pdf",
    "bytes": 691560,
    "status": "text_extracted",
    "sha256": "b415906384329cf8ebcb719c1d83bdf8121542ce2e3f287da85be07dfd2847c0",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 19839,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S101",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Sensor_lssue_Debug_SOP_V1.0.pdf",
    "name": "MT8676_Android_Sensor_lssue_Debug_SOP_V1.0.pdf",
    "bytes": 2001790,
    "status": "text_extracted",
    "sha256": "2ba1f7bc0db6721e80def3a70261997894104b688d3e5040c450d135488a68f9",
    "pages": 26,
    "low_text_pages": [],
    "text_chars": 25551,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S102",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_SPI_User_Manual_V1.1.pdf",
    "name": "MT8676_Android_SPI_User_Manual_V1.1.pdf",
    "bytes": 835109,
    "status": "text_extracted",
    "sha256": "40192730210a5820491d465b71a4cdcf43299eacee893fb5fef67f14bbb988b3",
    "pages": 17,
    "low_text_pages": [],
    "text_chars": 23934,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S103",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Suspend_Resume_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_Suspend_Resume_User_Manual_V1.0.pdf",
    "bytes": 838217,
    "status": "text_extracted",
    "sha256": "f22832cfa268b21b6d9fe1f9e546bf6b8ef960f18fa9c7b52aaab37162c6acaa",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 15685,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S104",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_System_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_System_User_Manual_V1.0.pdf",
    "bytes": 1848606,
    "status": "text_extracted",
    "sha256": "6bd2fa3feaf49817d226b303ca661335275bc566cff3de8787cc559dbbad5bcd",
    "pages": 37,
    "low_text_pages": [],
    "text_chars": 58878,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S105",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_Thermal_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_Thermal_User_Manual_V1.0.pdf",
    "bytes": 712996,
    "status": "text_extracted",
    "sha256": "508dbeafcf88144a780c2057a4378f57b9dec2f0592396e88103250d9e93f978",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 12033,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S106",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_UART_User_Manual_V1.1.pdf",
    "name": "MT8676_Android_UART_User_Manual_V1.1.pdf",
    "bytes": 637105,
    "status": "text_extracted",
    "sha256": "b724dfbe0dbe6a1689c24ee810f4fceb3be5d52c45ab890dfb53812ca28599a4",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 15387,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S107",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_USB_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_USB_User_Manual_V1.0.pdf",
    "bytes": 1022730,
    "status": "text_extracted",
    "sha256": "f89d9f4cd89bb3ef1bcc33978266a396f270e85a8b6fe4fe5ba98a4766895e25",
    "pages": 22,
    "low_text_pages": [],
    "text_chars": 33971,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S108",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_Android_WiFi_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_WiFi_User_Manual_V1.0.pdf",
    "bytes": 769922,
    "status": "text_extracted",
    "sha256": "7a498a5dfafabddf40348e1991613eec33df10001831aaa56bd460b6082f5aaa",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 25581,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S109",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/MT8676_SCP_User_Manual_V1.0.pdf",
    "name": "MT8676_SCP_User_Manual_V1.0.pdf",
    "bytes": 2297926,
    "status": "text_extracted",
    "sha256": "286280b150671c80d5cd72bbd5f9bc5a8235d41334253474eab7efab1f634ce0",
    "pages": 70,
    "low_text_pages": [],
    "text_chars": 104914,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S110",
    "path": "8676/MT8676软件资料/User Manual/Android/Chinese Version/Thumbs.db",
    "name": "Thumbs.db",
    "bytes": 13312,
    "status": "inventory_only",
    "sha256": "d1569e7f8fbd324718368b46b81e809abc61ccb36ce91c5798b288cfb1b6015b",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S111",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_AEE_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_AEE_User_Manual_V1.0.pdf",
    "bytes": 661271,
    "status": "text_extracted",
    "sha256": "5d4fbbe82209404645b9c235483d97d1c4625b25ef0aea0b1d57b556afee29bb",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 20644,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S112",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_AI_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_AI_User_Manual_V1.0.pdf",
    "bytes": 858811,
    "status": "text_extracted",
    "sha256": "27c28fa1cf199443eea0a0e1591ec4bdc7aef132ee12e98af595a7846012e2f7",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 19698,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S113",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Audio_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_Audio_User_Manual_ V1.0.pdf",
    "bytes": 2109803,
    "status": "text_extracted",
    "sha256": "bc8290b990b109d0d3412712c36778d834680e0a0caff246f116298e4962c782",
    "pages": 32,
    "low_text_pages": [],
    "text_chars": 62789,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S114",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_BT_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_BT_User_Manual_V1.0.pdf",
    "bytes": 542508,
    "status": "text_extracted",
    "sha256": "200f3c05d9cd4f2c30c770e0af3ca12fc401ca29521c340ba4c52dfbc41466be",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 21230,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S115",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf",
    "bytes": 2134966,
    "status": "text_extracted",
    "sha256": "2cb616e3e186a7922abd0920c595235bd29ed09743b4d19a230bb11658b1d611",
    "pages": 30,
    "low_text_pages": [],
    "text_chars": 41079,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S116",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Camera_Driver_User_Manual_V1.2.pdf",
    "name": "MT8676_Android_Camera_Driver_User_Manual_V1.2.pdf",
    "bytes": 1601171,
    "status": "text_extracted",
    "sha256": "b0adb12e154f917273b9897625e7f3a130f56bc3862a9b1dc4a12b5514a180c5",
    "pages": 24,
    "low_text_pages": [],
    "text_chars": 32113,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S117",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Camera_Turbo_User_Manual_V1.1.pdf",
    "name": "MT8676_Android_Camera_Turbo_User_Manual_V1.1.pdf",
    "bytes": 922242,
    "status": "text_extracted",
    "sha256": "984278ee09e54d49a21cdac813941b600c4c48f3decac280ced6baebb1a0ff6c",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 17394,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S118",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_DDR_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_DDR_User_Manual_ V1.0.pdf",
    "bytes": 584314,
    "status": "text_extracted",
    "sha256": "3e5afcb20755477f48a0e693256c7e0c43eb492577e086ea176df9d2883b5dea",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 20056,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S119",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_DebugLoggerUI_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_DebugLoggerUI_User_Manual_V1.0.pdf",
    "bytes": 643178,
    "status": "text_extracted",
    "sha256": "ad653e0a5c99f5fac46140f3f4c59f39f8e4c9ccd8f5b01d867153f94c8635b9",
    "pages": 15,
    "low_text_pages": [],
    "text_chars": 31001,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S120",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Display_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_Display_User_Manual_ V1.0.pdf",
    "bytes": 721952,
    "status": "text_extracted",
    "sha256": "5aac82d4d7aa46cf1b9fc8a15bc6ae3c5aebcbcbc893f343b1bb8a39a70aaca1",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 18984,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S121",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_DSI_Panel_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_DSI_Panel_User_Manual_ V1.0.pdf",
    "bytes": 2553137,
    "status": "text_extracted",
    "sha256": "1619663e55af75d298ea6846a7ab577577418eaef27c844142097ed8a9566e1a",
    "pages": 44,
    "low_text_pages": [],
    "text_chars": 61224,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S122",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_DVR_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_DVR_User_Manual_V1.0.pdf",
    "bytes": 658067,
    "status": "text_extracted",
    "sha256": "6344b359854edd3e7860c0e0b6e0efb848fa309ec32bd07d6bc816ab65508995",
    "pages": 14,
    "low_text_pages": [],
    "text_chars": 30360,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S123",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_FastRVC_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_FastRVC_User_Manual_ V1.0.pdf",
    "bytes": 473168,
    "status": "text_extracted",
    "sha256": "fa5f43dca8d4f35cfc6086c274a06e5e71f73af28f9fd5587977ab8f3dc668b2",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 13530,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S124",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_General_Introduction_V1.1.pdf",
    "name": "MT8676_Android_General_Introduction_V1.1.pdf",
    "bytes": 557457,
    "status": "text_extracted",
    "sha256": "fe5c7bebad68b805756e19c974b8a8ff4555029b54339390bb11204e0cff63cf",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 13741,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S125",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_GPS_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_GPS_User_Manual_V1.0.pdf",
    "bytes": 614150,
    "status": "text_extracted",
    "sha256": "83cce0f0d84a739f3b93094348cefb9c10f42204211294b65b19f67d5b8b60a8",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 16833,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S126",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_GPU_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_GPU_User_Manual_V1.0.pdf",
    "bytes": 787863,
    "status": "text_extracted",
    "sha256": "9efe4b97a91bad7baae5d10f5668167ed7e111c5626eefc498091eb1ee029060",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 24441,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S127",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_I2C_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_I2C_User_Manual_V1.0.pdf",
    "bytes": 426171,
    "status": "text_extracted",
    "sha256": "cd4da46210e1b296950232ce2617127674e6285c410074885f7229f0e9379ab8",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 16959,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S128",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_IPO_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_IPO_User_Manual_ V1.0.pdf",
    "bytes": 752516,
    "status": "text_extracted",
    "sha256": "fb0f163b34e67743aa1ee9f34286cd4323645f69d33bbaa2a45f990405e8d448",
    "pages": 18,
    "low_text_pages": [],
    "text_chars": 34977,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S129",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_OTA_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_OTA_User_Manual_V1.0.pdf",
    "bytes": 815860,
    "status": "text_extracted",
    "sha256": "bcd7023dd6c3de223d5b104a2a770d8c267ee8e2d988122215f3654719fa138a",
    "pages": 20,
    "low_text_pages": [],
    "text_chars": 40578,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S130",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_SDCard_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_SDCard_User_Manual_ V1.0.pdf",
    "bytes": 475488,
    "status": "text_extracted",
    "sha256": "36817cbb13397a9e28b5c3f5c6a494fefae608b0eaa4aa6024ad271a2b803ba3",
    "pages": 8,
    "low_text_pages": [],
    "text_chars": 15924,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S131",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_SDK_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_SDK_User_Manual_ V1.0.pdf",
    "bytes": 1248678,
    "status": "text_extracted",
    "sha256": "f202b6567e43ea42434564c1985abd4bc8827884f65e72de3ca96c6082bb44d5",
    "pages": 52,
    "low_text_pages": [],
    "text_chars": 116470,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S132",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Secure_Boot_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_Secure_Boot_User_Manual_V1.0.pdf",
    "bytes": 477594,
    "status": "text_extracted",
    "sha256": "25514cae24e48ad29ca4816cce914c5e647fb301fa5d59aea60451c14cdf8b70",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 27347,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S133",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_SPI_User_Manual_V1.1.pdf",
    "name": "MT8676_Android_SPI_User_Manual_V1.1.pdf",
    "bytes": 647073,
    "status": "text_extracted",
    "sha256": "d3691b28be364182c4fe052a2943639d3c95cf26488c150069894918452fddfa",
    "pages": 14,
    "low_text_pages": [],
    "text_chars": 28652,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S134",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Suspend_Resume_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_Suspend_Resume_User_Manual_ V1.0.pdf",
    "bytes": 651071,
    "status": "text_extracted",
    "sha256": "45653c777bcadf0ae77efdb09036d83c1dd1da15d6900108c5b3f9ac977ac5e2",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 22128,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S135",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_System_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_System_User_Manual_ V1.0.pdf",
    "bytes": 1495383,
    "status": "text_extracted",
    "sha256": "07ba8708b032bf7231c9d9c9d152c122e53b532484a9dc4ab4d1857fe0ae50e6",
    "pages": 35,
    "low_text_pages": [],
    "text_chars": 70897,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S136",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_Thermal_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_Thermal_User_Manual_ V1.0.pdf",
    "bytes": 531842,
    "status": "text_extracted",
    "sha256": "4a5404071a658bc325d8308b1a2ff266ad5f09d7ac63dc0e11a4db5ce6259d6d",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 15228,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S137",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_UART_User_Manual_V1.1.pdf",
    "name": "MT8676_Android_UART_User_Manual_V1.1.pdf",
    "bytes": 408734,
    "status": "text_extracted",
    "sha256": "fe255878b698d185a5327ff9aec9659c436e8dd83ca2e05402948c443f1682c9",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 20685,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S138",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_USB_User_Manual_ V1.0.pdf",
    "name": "MT8676_Android_USB_User_Manual_ V1.0.pdf",
    "bytes": 727520,
    "status": "text_extracted",
    "sha256": "afa3d415e857143e01ffb0397c6e3e4b2d965b4264aa160c8195de2eed9ea335",
    "pages": 20,
    "low_text_pages": [],
    "text_chars": 40483,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S139",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_Android_WiFi_User_Manual_V1.0.pdf",
    "name": "MT8676_Android_WiFi_User_Manual_V1.0.pdf",
    "bytes": 550767,
    "status": "text_extracted",
    "sha256": "f1e3a5801e5da7aa11ee2b86751d2a4926c54584fe34bcbca923728c966fe780",
    "pages": 15,
    "low_text_pages": [],
    "text_chars": 33368,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S140",
    "path": "8676/MT8676软件资料/User Manual/Android/English Version/MT8676_SCP_User_Manual_V1.0.pdf",
    "name": "MT8676_SCP_User_Manual_V1.0.pdf",
    "bytes": 1958325,
    "status": "text_extracted",
    "sha256": "add7ebe4914ce4fb1987b29163d46a3c19aa5cb33180116067dadc3819122c7f",
    "pages": 73,
    "low_text_pages": [],
    "text_chars": 128582,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S141",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_DMA_Buffer_Debug_User_Manual_V1.0.pdf",
    "name": "MT8676_DMA_Buffer_Debug_User_Manual_V1.0.pdf",
    "bytes": 1927310,
    "status": "text_extracted",
    "sha256": "f608befe136c7acb0bc77fad20b2c83974032a5fd53dcd12affbb7cd6dcd73b3",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 18373,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S142",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_AI_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_AI_User_Manual_V1.0.pdf",
    "bytes": 1078757,
    "status": "text_extracted",
    "sha256": "3e135840f638410cd8449ffc22020d6963e97b211adf4234ce6a145561eddf8d",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 15316,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S143",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Camera_ISP_Driver_Introduction_V1.0.pdf",
    "name": "MT8676_Hypervisor_Camera_ISP_Driver_Introduction_V1.0.pdf",
    "bytes": 1371074,
    "status": "text_extracted",
    "sha256": "7a235c6e676504868dce30bc90cd389de402a75c56e222157b6c17ed76fca6e5",
    "pages": 21,
    "low_text_pages": [],
    "text_chars": 33217,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S144",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Camera_MW_Introduction_V1.0.pdf",
    "name": "MT8676_Hypervisor_Camera_MW_Introduction_V1.0.pdf",
    "bytes": 661109,
    "status": "text_extracted",
    "sha256": "52452e66baedfe2e6395db8cdb0afdd4c60a306f699d7bab5e84075ac95f2f21",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 23783,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S145",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Camera_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_Camera_User_Manual_V1.1.pdf",
    "bytes": 659665,
    "status": "text_extracted",
    "sha256": "28f33b5b442f91b64187c3310408346502acea5ba33597c7c35762d01eb6c14c",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 13750,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "11-显示相机与驾驶辅助业务流程.md",
        "pages": "8"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "4-8"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "4-8"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "8"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "8"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S146",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Clock_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_Clock_User_Manual_V1.1.pdf",
    "bytes": 694129,
    "status": "text_extracted",
    "sha256": "b71a9b733004c98f63a075c3244c94cbcd7a5c25c69e967f201c47f3387493f6",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 12197,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S147",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Display_User_Manual_V1.3.pdf",
    "name": "MT8676_Hypervisor_Display_User_Manual_V1.3.pdf",
    "bytes": 1428979,
    "status": "text_extracted",
    "sha256": "753ab8dd0db2bfa1207006f0b024d40f557a94a56538ee72f1a65d9861a807a5",
    "pages": 24,
    "low_text_pages": [],
    "text_chars": 32542,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "11-显示相机与驾驶辅助业务流程.md",
        "pages": "5-10"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "5-10"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S148",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_GNSS_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_GNSS_User_Manual_V1.0.pdf",
    "bytes": 750914,
    "status": "text_extracted",
    "sha256": "73b34cf0a80bae3c86a7b99332676c1d4a8523d8368bd93246ffb6761bfbf27b",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 18793,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S149",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_GPIO_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_GPIO_User_Manual_V1.0.pdf",
    "bytes": 580912,
    "status": "text_extracted",
    "sha256": "183254d73cbdc6354fdbeb70560cacba23b015a870a82ca111eb481be6ffb856",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 12396,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S150",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_GPU_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_GPU_User_Manual_V1.1.pdf",
    "bytes": 826716,
    "status": "text_extracted",
    "sha256": "b17a1b72d94d428bda0821d1e1d48bb08525c8eb7d034673cf25082621989925",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 16837,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S151",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_I2C_User_Manual_V1.2.pdf",
    "name": "MT8676_Hypervisor_I2C_User_Manual_V1.2.pdf",
    "bytes": 724959,
    "status": "text_extracted",
    "sha256": "7a3b9551a0d4182a72f2d4f1ac1b88e1aca1e15170ca29efab2fa16379c8eab9",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 17256,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S152",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Log_Introduction_V1.0.pdf",
    "name": "MT8676_Hypervisor_Log_Introduction_V1.0.pdf",
    "bytes": 478675,
    "status": "text_extracted",
    "sha256": "b339a40764b57a904f6139dfbce7fd7e87c72e546829f3bcc96ff88a92f89b62",
    "pages": 6,
    "low_text_pages": [],
    "text_chars": 8334,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S153",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_OP-TEE_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_OP-TEE_User_Manual_V1.0.pdf",
    "bytes": 1074868,
    "status": "text_extracted",
    "sha256": "1a36c8bd89a487745b75fe94ef1d696751b29991a33c33dc7b2bf6ec7a3c1cee",
    "pages": 34,
    "low_text_pages": [],
    "text_chars": 52367,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S154",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_OTA_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_OTA_User_Manual_V1.0.pdf",
    "bytes": 2889834,
    "status": "text_extracted",
    "sha256": "17db370a32288f1b0daebc16c1a79a97b858aeb1dd1ef32826f035700dc5330f",
    "pages": 59,
    "low_text_pages": [],
    "text_chars": 101562,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S155",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Reserved_Memory_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_Reserved_Memory_User_Manual_V1.1.pdf",
    "bytes": 971364,
    "status": "text_extracted",
    "sha256": "7f22bbdfff2f6f0655fcdc3b24a5ee86e04364cadb802e14563b8ab370cfa8f7",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 11980,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S156",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_SDCard_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_SDCard_User_Manual_V1.1.pdf",
    "bytes": 779135,
    "status": "text_extracted",
    "sha256": "6252ad36211480a2791bbebfe9da8e90cbb0cb1be998cdbe1ecd158c80a4e6c0",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 16119,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S157",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Secure_Boot_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_Secure_Boot_User_Manual_V1.0.pdf",
    "bytes": 749020,
    "status": "text_extracted",
    "sha256": "2b1a7d97f0a2e98635779efa15c6cd8a1c58b03d9a29d85f22b53e7b2b601d3c",
    "pages": 15,
    "low_text_pages": [],
    "text_chars": 22822,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S158",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Suspend_Resume_User_Manual_V1.3.pdf",
    "name": "MT8676_Hypervisor_Suspend_Resume_User_Manual_V1.3.pdf",
    "bytes": 729867,
    "status": "text_extracted",
    "sha256": "e8cfe763d37479350adb15d332225918bee8875a50fd878278d834e00e80d073",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 22037,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S159",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_System_User_Manual_V1.2.pdf",
    "name": "MT8676_Hypervisor_System_User_Manual_V1.2.pdf",
    "bytes": 1025005,
    "status": "text_extracted",
    "sha256": "0ee3f30c7a2cf4a6396cda919dda94091db46dcf3af61cb09299b71ff7cca025",
    "pages": 25,
    "low_text_pages": [],
    "text_chars": 46478,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S160",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_T-Box_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_T-Box_User_Manual_V1.1.pdf",
    "bytes": 849884,
    "status": "text_extracted",
    "sha256": "eb1ea503dfd4ee0021b8c6cd5e0001975b032d3de7b307061872cb02ef91056c",
    "pages": 30,
    "low_text_pages": [],
    "text_chars": 55812,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S161",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Touch_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_Touch_User_Manual_V1.1.pdf",
    "bytes": 658381,
    "status": "text_extracted",
    "sha256": "318e6af558f566e235d27c798023e812c620c39ae92aae395d4dee5c79e110d2",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 13182,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S162",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_UART_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_UART_User_Manual_V1.0.pdf",
    "bytes": 700045,
    "status": "text_extracted",
    "sha256": "34c55692de982f925c405fdb7a4c181377ab366a914c00b0f83dc09bfd00cde5",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 16560,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S163",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Vcodec_User_Manual_V1.2.pdf",
    "name": "MT8676_Hypervisor_Vcodec_User_Manual_V1.2.pdf",
    "bytes": 923244,
    "status": "text_extracted",
    "sha256": "2ca0cfa195c8759df452547652c024c8fa9a4d86a817aaab06675d56f0008432",
    "pages": 15,
    "low_text_pages": [],
    "text_chars": 20202,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S164",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_AI_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_AI_User_Manual_V1.0.pdf",
    "bytes": 859652,
    "status": "text_extracted",
    "sha256": "0ffc4e91d4e3f5728e433a2fda0e617597d4c3d660df96a02091bd3ac6364e0c",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 20081,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S165",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Camera_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_Camera_User_Manual_V1.1.pdf",
    "bytes": 489554,
    "status": "text_extracted",
    "sha256": "8ffa08647b60118ffaff0affaef01189ca3800981abd021e1af3af5cb20ed357",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 18345,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S166",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Clock_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_Clock_User_Manual_V1.1.pdf",
    "bytes": 527111,
    "status": "text_extracted",
    "sha256": "967c72386c0189e4666dfdef6b7112f51a052ec138e07deb872bd97ce0eaf484",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 15631,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S167",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Display_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_Display_User_Manual_V1.1.pdf",
    "bytes": 873110,
    "status": "text_extracted",
    "sha256": "ed864e63e29b06eef375c22005d19b1d1669ec4108f069de0097bb459ac0b1ac",
    "pages": 14,
    "low_text_pages": [],
    "text_chars": 22767,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S168",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_GNSS_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_GNSS_User_Manual_V1.0.pdf",
    "bytes": 562151,
    "status": "text_extracted",
    "sha256": "14958f21236f05586caa4aa472693ff476bac4ada9d67b4df6e5271c2d789fdd",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 23933,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S169",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_GPIO_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_GPIO_User_Manual_V1.0.pdf",
    "bytes": 413738,
    "status": "text_extracted",
    "sha256": "852e551201a0d34065d5651a2e32f5023cb750c2a213666f0552a10899623bcb",
    "pages": 8,
    "low_text_pages": [],
    "text_chars": 16235,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S170",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_GPU_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_GPU_User_Manual_V1.1.pdf",
    "bytes": 562959,
    "status": "text_extracted",
    "sha256": "d85a6dc3de1ff28783808d490ab9789fc607250f9736c74ff8a22101cddcb4a0",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 23300,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S171",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_I2C_User_Manual_V1.2.pdf",
    "name": "MT8676_Hypervisor_I2C_User_Manual_V1.2.pdf",
    "bytes": 471844,
    "status": "text_extracted",
    "sha256": "17d10bf0927d089d53543739067f9ab0c96ae856bb81a71bd28ce0dcda524f62",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 21200,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S172",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_OP-TEE_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_OP-TEE_User_Manual_V1.0.pdf",
    "bytes": 850718,
    "status": "text_extracted",
    "sha256": "7cf96d09b15aa3c3cd7d4ca93b7b06556afdbd00e6638b0037f2f5e9c7ad80f4",
    "pages": 34,
    "low_text_pages": [],
    "text_chars": 71798,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S173",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_OTA_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_OTA_User_Manual_V1.0.pdf",
    "bytes": 2425465,
    "status": "text_extracted",
    "sha256": "521a9a0645921d9a6407e2f17f4d32c059cffdc2e88cb484958d808151cfbf8b",
    "pages": 55,
    "low_text_pages": [],
    "text_chars": 138949,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S174",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Reserved_Memory_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_Reserved_Memory_User_Manual_V1.1.pdf",
    "bytes": 858862,
    "status": "text_extracted",
    "sha256": "bdd771d7f372ce12285255b6ec0adc0d9a1fc0fc27a951dba5d30b7d5d7635ed",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 17006,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S175",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_SDCard_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_SDCard_User_Manual_V1.1.pdf",
    "bytes": 560754,
    "status": "text_extracted",
    "sha256": "98681c23e3754eb7f42c755cf1ca36a24c997d3586e3c596f8c8760e73dcd76b",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 20762,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S176",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Secure_Boot_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_Secure_Boot_User_Manual_V1.0.pdf",
    "bytes": 549225,
    "status": "text_extracted",
    "sha256": "8fb29ac94bce928de429376509412d010820fe3b00843f9322862f1ab45f1dd5",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 31246,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S177",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Suspend_Resume_V1.1.pdf",
    "name": "MT8676_Hypervisor_Suspend_Resume_V1.1.pdf",
    "bytes": 514176,
    "status": "text_extracted",
    "sha256": "bd4864cd0a6775ff1eec3b0d071925dd4f406cea71fedd8505d11cba7d07eac7",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 28596,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S178",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_System_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_System_User_Manual_V1.1.pdf",
    "bytes": 733767,
    "status": "text_extracted",
    "sha256": "ccd5b795d5d99a4025fbec2a577ea68db61c30aa10ece3c1c352a18ebf98eae8",
    "pages": 20,
    "low_text_pages": [],
    "text_chars": 45213,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S179",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_T-Box_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_T-Box_User_Manual_V1.1.pdf",
    "bytes": 631259,
    "status": "text_extracted",
    "sha256": "65f0b3b1b2de428a064b2557ee7f7fb06fda0647bf55ec9fecbac0d4f5c2abef",
    "pages": 29,
    "low_text_pages": [],
    "text_chars": 70954,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S180",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Touch_User_Manual_V1.1.pdf",
    "name": "MT8676_Hypervisor_Touch_User_Manual_V1.1.pdf",
    "bytes": 488935,
    "status": "text_extracted",
    "sha256": "4bdcab0b5af6c8e3bf7a605806faadd8aee05e1486d661a7a9a965ee235c3b7f",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 19469,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S181",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_UART_User_Manual_V1.0.pdf",
    "name": "MT8676_Hypervisor_UART_User_Manual_V1.0.pdf",
    "bytes": 612908,
    "status": "text_extracted",
    "sha256": "242e09880a72bd8bffef90bd9113e4dd0960f1f199930e3bd80f4b3c9a7ec102",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 21963,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S182",
    "path": "8676/MT8676软件资料/User Manual/Hypervisor/English Version/MT8676_Hypervisor_Vcodec_User_Manual_V1.2.pdf",
    "name": "MT8676_Hypervisor_Vcodec_User_Manual_V1.2.pdf",
    "bytes": 759935,
    "status": "text_extracted",
    "sha256": "4e82f0cb886e5414fb29e593684bac3e731738204be92b5a66e89c24340a5fe2",
    "pages": 14,
    "low_text_pages": [],
    "text_chars": 25366,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S183",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Audio_倍频介绍.pdf",
    "name": "MT8676_Audio_倍频介绍.pdf",
    "bytes": 447843,
    "status": "text_extracted",
    "sha256": "c5db8e284bad75735ea1b9a1bf53de00a36d7a1a0df57697549df6353a7bc570",
    "pages": 6,
    "low_text_pages": [],
    "text_chars": 2402,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S053"
    ]
  },
  {
    "id": "S184",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Display_Panel_Issue_Debug_SOP_V1.0.pdf",
    "name": "MT8676_Display_Panel_Issue_Debug_SOP_V1.0.pdf",
    "bytes": 4028533,
    "status": "text_extracted",
    "sha256": "1ee440ddc61d849a9cfe5b752f87898cc941a04801f4566fdd7b25df874312a8",
    "pages": 46,
    "low_text_pages": [],
    "text_chars": 56948,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S055"
    ]
  },
  {
    "id": "S185",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_AEE_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_AEE_User_Manual_V1.0.pdf",
    "bytes": 761471,
    "status": "text_extracted",
    "sha256": "b2b210bfd555858f62adb9236fd01798d706eb7b45896a9c8ecb90116cd00799",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 13677,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S186",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_AI_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_AI_User_Manual_V1.0.pdf",
    "bytes": 968058,
    "status": "text_extracted",
    "sha256": "38c50e5e32f9a6d9ce2b504f8c3550761c1654ce7e3e8fcaa0c5e6ef07e9ca1f",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 14818,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S187",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Audio_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Audio_User_Manual_V1.0.pdf",
    "bytes": 1651120,
    "status": "text_extracted",
    "sha256": "ca45b12d0d50bfc6a47c73581aceb32413403a93d1507393e8adad90e6115940",
    "pages": 18,
    "low_text_pages": [],
    "text_chars": 19728,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S188",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf",
    "bytes": 2267180,
    "status": "text_extracted",
    "sha256": "e8c210d3eda459a4896411fdcf96720093501f411c3ffb5e73c672f0b80859b1",
    "pages": 28,
    "low_text_pages": [],
    "text_chars": 29279,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S189",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Camera_Driver_User_Manual_V1.1.pdf",
    "name": "MT8676_Yocto_Camera_Driver_User_Manual_V1.1.pdf",
    "bytes": 1774719,
    "status": "text_extracted",
    "sha256": "781dfbb6e151225f9c1308b8788afc82fee19b61ceadee192e33f09fd992ffa5",
    "pages": 23,
    "low_text_pages": [],
    "text_chars": 26018,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S190",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Camera_Turbo_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Camera_Turbo_User_Manual_V1.0.pdf",
    "bytes": 533067,
    "status": "text_extracted",
    "sha256": "6fb99f5d4fea2f56057a054ce982ffcf47eb47e15dddb956458460b12e92eec3",
    "pages": 8,
    "low_text_pages": [],
    "text_chars": 8484,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S191",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Display_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Display_User_Manual_V1.0.pdf",
    "bytes": 881028,
    "status": "text_extracted",
    "sha256": "b229bc10d601f283bcc9faf20155c3633366025030f16e008b2a5d607067fa68",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 15809,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S192",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf",
    "bytes": 3213479,
    "status": "text_extracted",
    "sha256": "36a4f8b59bdec2f096c363d35b0de8b4d8cb04431a30215195a6fad2122094a5",
    "pages": 37,
    "low_text_pages": [],
    "text_chars": 47081,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S193",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_eCall_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_eCall_User_Manual_V1.0.pdf",
    "bytes": 905620,
    "status": "text_extracted",
    "sha256": "250adb38e25c6b6283b34771f9c10c85d7cf089d2ab7507a1b8be3fdc5054777",
    "pages": 17,
    "low_text_pages": [],
    "text_chars": 24399,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S194",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_FastRVC_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_FastRVC_User_Manual_V1.0.pdf",
    "bytes": 553821,
    "status": "text_extracted",
    "sha256": "231ce28236686bf0fda2b9c30506e9a577c343d0b454749185c3a072b2ea29fd",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 8389,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S195",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_General_Introduction_V1.0.pdf",
    "name": "MT8676_Yocto_General_Introduction_V1.0.pdf",
    "bytes": 682475,
    "status": "text_extracted",
    "sha256": "e81920c10d1110533d256cbead4267519b632c0edc21b235cd4430763194fde4",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 9504,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S196",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_GPS_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_GPS_User_Manual_V1.0.pdf",
    "bytes": 742259,
    "status": "text_extracted",
    "sha256": "dc694aa327b58fb77b611bffd9605476ea5ec1d6ab67bc958b0ee3e9834fda11",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 11780,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S197",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_GPU_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_GPU_User_Manual_V1.0.pdf",
    "bytes": 714048,
    "status": "text_extracted",
    "sha256": "a14bf24fda30996a73aeecc021377dd1e97c96851f9711dd4dd71a705d4c99b3",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 14104,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S198",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Log_Tool_Introduction_V1.0.pdf",
    "name": "MT8676_Yocto_Log_Tool_Introduction_V1.0.pdf",
    "bytes": 621212,
    "status": "text_extracted",
    "sha256": "508bdcafc604c506a524aec6dd9534e2b7b8e42d47013836cb38afcb947d0d83",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 15197,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S199",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Log_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Log_User_Manual_V1.0.pdf",
    "bytes": 630449,
    "status": "text_extracted",
    "sha256": "2131e9dacedfef849cd98202b00d95668853f84c4032a19822cd98f1e0aff78f",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 14117,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S200",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_OTA_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_OTA_User_Manual_V1.0.pdf",
    "bytes": 886367,
    "status": "text_extracted",
    "sha256": "ebcdec122bb5ca48d52b38fc083c31891f173cc306c8d3e783f2d7f569bf1a2d",
    "pages": 14,
    "low_text_pages": [],
    "text_chars": 19154,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S201",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Property_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Property_User_Manual_V1.0.pdf",
    "bytes": 822676,
    "status": "text_extracted",
    "sha256": "2e0992f640abec9ca7db927700cff45e6b23ed37d1d9912f46ce55290188c60f",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 13294,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S202",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_YOCTO_SCP_User_Manual_zh_V1.01.pdf",
    "name": "MT8676_YOCTO_SCP_User_Manual_zh_V1.01.pdf",
    "bytes": 2058432,
    "status": "text_extracted",
    "sha256": "b0dbacda5c8790210fcf321fdd79d03e9c45b62fbd1621e78386a08a08e20c45",
    "pages": 67,
    "low_text_pages": [],
    "text_chars": 106132,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S203",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_SDCard_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_SDCard_User_Manual_V1.0.pdf",
    "bytes": 680317,
    "status": "text_extracted",
    "sha256": "8f66a6dab8b6e346156ffba7f28021e185dbaed2f9afb2114f76aca0421a5865",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 11987,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S204",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Secure_Boot_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Secure_Boot_User_Manual_V1.0.pdf",
    "bytes": 668310,
    "status": "text_extracted",
    "sha256": "3b1e52e682f9252e086b3e4d2132d9f535c910504d74c41101900fd885c6bb6a",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 17932,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S205",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Sentry_Mode_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Sentry_Mode_User_Manual_V1.0.pdf",
    "bytes": 1015778,
    "status": "text_extracted",
    "sha256": "6cfac687decb4e548b5ffe6f6510124f3e44a390506e019e1a0b0dffae801150",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 15443,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S206",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_SPI_User_Manual_V1.1.pdf",
    "name": "MT8676_Yocto_SPI_User_Manual_V1.1.pdf",
    "bytes": 831286,
    "status": "text_extracted",
    "sha256": "2397734a51c2dd97e166bee5d534cd6d7cb4c2a62aee976959deb6b7733187a1",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 23436,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S207",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Suspend_Resume_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Suspend_Resume_User_Manual_V1.0.pdf",
    "bytes": 754428,
    "status": "text_extracted",
    "sha256": "872b38c6d67fec1eee0e4cd1ac1c876be8ef0c06d82fbac8d4193424d7cfe0ae",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 15043,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S208",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_System_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_System_User_Manual_V1.0.pdf",
    "bytes": 1278364,
    "status": "text_extracted",
    "sha256": "15e56401fb86b3c1f79f0d1730aac8da1366ce50ba99b819270bb9951977792e",
    "pages": 39,
    "low_text_pages": [],
    "text_chars": 66234,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S209",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_T-Box_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_T-Box_User_Manual_V1.0.pdf",
    "bytes": 551202,
    "status": "text_extracted",
    "sha256": "444fcacd8f06041bd87410fcbd5cc30b252191e0a35cdbc09203d48984a3bb88",
    "pages": 20,
    "low_text_pages": [],
    "text_chars": 31278,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S210",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_Thermal_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Thermal_User_Manual_V1.0.pdf",
    "bytes": 586051,
    "status": "text_extracted",
    "sha256": "76602ab493abc0563af0897a6debe65e41a325b68a0ad7d6c23ecb1906a37b08",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 9756,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S211",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_UART_User_Manual_V1.1.pdf",
    "name": "MT8676_Yocto_UART_User_Manual_V1.1.pdf",
    "bytes": 628557,
    "status": "text_extracted",
    "sha256": "63e4e4b10e6b30733a25b70ce55ebed8f4f6b6ae98e0692ae6e94550dd93b1ae",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 15364,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S212",
    "path": "8676/MT8676软件资料/User Manual/Yocto/Chinese Version/MT8676_Yocto_USB_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_USB_User_Manual_V1.0.pdf",
    "bytes": 1022941,
    "status": "text_extracted",
    "sha256": "998ce13df79878658efbe1a84a3751e69d7ac328acb5939eb628fafc9ed8ca40",
    "pages": 22,
    "low_text_pages": [],
    "text_chars": 33927,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S213",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_AEE_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_AEE_User_Manual_V1.0.pdf",
    "bytes": 618044,
    "status": "text_extracted",
    "sha256": "891b4546ef85b38067503ecea54567949d7214111f0cc57ecbae2f260fac05d9",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 17620,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S214",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_AI_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_AI_User_Manual_V1.0.pdf",
    "bytes": 781192,
    "status": "text_extracted",
    "sha256": "c9b8980cc5a633a56c827ae664ded94dabf777bf3409051347de96b59f32c87b",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 19543,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S215",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Audio_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Audio_User_Manual_V1.0.pdf",
    "bytes": 1463299,
    "status": "text_extracted",
    "sha256": "10a842dbdf313a2720f4715e1cbcfe1a1b26fa312fb387764361cdff54a168e4",
    "pages": 17,
    "low_text_pages": [],
    "text_chars": 27350,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S216",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Camera_Driver_JSON_Arch_User_Manual_V1.0.pdf",
    "bytes": 1962216,
    "status": "text_extracted",
    "sha256": "0a8a2336080c09009f28bc5399bdb384e3ed1650a84c58ec6c0a93bf5351bb0b",
    "pages": 28,
    "low_text_pages": [],
    "text_chars": 38762,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S217",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Camera_Driver_User_Manual_V1.1.pdf",
    "name": "MT8676_Yocto_Camera_Driver_User_Manual_V1.1.pdf",
    "bytes": 1576604,
    "status": "text_extracted",
    "sha256": "3bd2f904e632b94eb9bdfdf1278eb700d8fbdbcdc993de502352e7d7d8616408",
    "pages": 23,
    "low_text_pages": [],
    "text_chars": 32197,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S218",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Camera_Turbo_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Camera_Turbo_User_Manual_V1.0.pdf",
    "bytes": 391049,
    "status": "text_extracted",
    "sha256": "0ae0c98cf80898dc33926df07ceb901de63989dee620579d37dbfe25f7bdd6cd",
    "pages": 8,
    "low_text_pages": [],
    "text_chars": 12862,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S219",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Display_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Display_User_Manual_V1.0.pdf",
    "bytes": 722307,
    "status": "text_extracted",
    "sha256": "1a3df9ee9ed82f61f16ed055650e6e09f958f4af98ec14f96566e35236419a06",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 18959,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S220",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_DSI_Panel_User_Manual_V1.0.pdf",
    "bytes": 2554147,
    "status": "text_extracted",
    "sha256": "2ba0a3c4a44efa041e98cf80796269750afc21e050ed0aecbdeb0448ee397079",
    "pages": 44,
    "low_text_pages": [],
    "text_chars": 61134,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S221",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_eCall_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_eCall_User_Manual_V1.0.pdf",
    "bytes": 722552,
    "status": "text_extracted",
    "sha256": "d5672b3d4f5d7f56aae6086e5a2c1f1cb7352465475a875f3432c2550ed705db",
    "pages": 17,
    "low_text_pages": [],
    "text_chars": 29250,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S222",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_FastRVC_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_FastRVC_User_Manual_V1.0.pdf",
    "bytes": 376534,
    "status": "text_extracted",
    "sha256": "24e652ef273aedee47e2de50ce1d78e6d46c57cc8a01655854081e27d9245582",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 12386,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S223",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_General_Introduction_V1.0.pdf",
    "name": "MT8676_Yocto_General_Introduction_V1.0.pdf",
    "bytes": 555120,
    "status": "text_extracted",
    "sha256": "b4d883053c20fd02ea9760703770ab5b6cac14cb54889c8a1c6ec1c6b8fa0758",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 13640,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S224",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_GPS_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_GPS_User_Manual_V1.0.pdf",
    "bytes": 634244,
    "status": "text_extracted",
    "sha256": "4348c8ad81a08a4f3823b86e5b3e52a03b2033367285087ceb84b11907034a17",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 16190,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S225",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_GPU_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_GPU_User_Manual_V1.0.pdf",
    "bytes": 470412,
    "status": "text_extracted",
    "sha256": "770f8cb07c3235be482ca06e9dfab05697e9af6b5e5223bab221e78c81b7745b",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 21608,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S226",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Log_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Log_User_Manual_V1.0.pdf",
    "bytes": 636289,
    "status": "text_extracted",
    "sha256": "e81eb416e8a55892bae2a2815438b8287b064e6c8970f892b2cc3fef585dab5a",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 13674,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S227",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_OTA_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_OTA_User_Manual_V1.0.pdf",
    "bytes": 719259,
    "status": "text_extracted",
    "sha256": "15941d5cdc16d0019d9d620f878422f7206776525cceaebd0e9f3174014d7d3e",
    "pages": 13,
    "low_text_pages": [],
    "text_chars": 27396,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S228",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Property_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Property_User_Manual_V1.0.pdf",
    "bytes": 677464,
    "status": "text_extracted",
    "sha256": "46a716eaaab4bd02df26d46de6c90065da8d51fc5b5a0d39c58dfe0b0b106fb9",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 16848,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S229",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_SDCard_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_SDCard_User_Manual_V1.0.pdf",
    "bytes": 488198,
    "status": "text_extracted",
    "sha256": "4b5c8e0b65ad55b7f059b403ff24aac8e0d82aca793028bb9675724f892810cc",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 16785,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S230",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Secure_Boot_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Secure_Boot_User_Manual_V1.0.pdf",
    "bytes": 480549,
    "status": "text_extracted",
    "sha256": "3b4bd744f5de8c2618fdfea7aead92f8fdade1ba59dd682f1a4ed84de96da412",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 25211,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S231",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Sentry_Mode_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Sentry_Mode_User_Manual_V1.0.pdf",
    "bytes": 859591,
    "status": "text_extracted",
    "sha256": "f59aa6695702a0834c4fa3b8b65fb74b5a69f444f39e0c2c629e3a26347fb8eb",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 19993,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S232",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_SPI_User_Manual_V1.1.pdf",
    "name": "MT8676_Yocto_SPI_User_Manual_V1.1.pdf",
    "bytes": 766281,
    "status": "text_extracted",
    "sha256": "1befc8374cfe1ae3cf3c9f80b352f9f3cc640a12eb79b74443eeb9a2da669b1e",
    "pages": 14,
    "low_text_pages": [],
    "text_chars": 25617,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S233",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Suspend_Resume_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Suspend_Resume_User_Manual_V1.0.pdf",
    "bytes": 573703,
    "status": "text_extracted",
    "sha256": "c79914693d64bbc7c84fdc1ddefe2e0dbe51d5e63764a4376d3753b1f11f0752",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 21855,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S234",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_System_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_System_User_Manual_V1.0.pdf",
    "bytes": 927103,
    "status": "text_extracted",
    "sha256": "5cdc83a70bf8c0e2512b766ace98f1ba2edb221b9b9e9b7d11eef1ddd9edd2f7",
    "pages": 35,
    "low_text_pages": [],
    "text_chars": 89338,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S235",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_T-Box_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_T-Box_User_Manual_V1.0.pdf",
    "bytes": 536265,
    "status": "text_extracted",
    "sha256": "0bcc7a720a9d7977288ea975eecb6c0e2e07a4a9ff3a4d80111cb35ac08f35b6",
    "pages": 18,
    "low_text_pages": [],
    "text_chars": 39228,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S236",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Thermal_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_Thermal_User_Manual_V1.0.pdf",
    "bytes": 434706,
    "status": "text_extracted",
    "sha256": "41ce1e67fadb6fc896b854d387d590c8efa88766b2db3fc74ff491040319b2ad",
    "pages": 8,
    "low_text_pages": [],
    "text_chars": 12888,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S237",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_UART_User_Manual_V1.1.pdf",
    "name": "MT8676_Yocto_UART_User_Manual_V1.1.pdf",
    "bytes": 409237,
    "status": "text_extracted",
    "sha256": "60ac08ad314307c155401eec4309ab6c6a32b234e924a263dea8a6be85e25704",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 20660,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S238",
    "path": "8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_USB_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_USB_User_Manual_V1.0.pdf",
    "bytes": 727924,
    "status": "text_extracted",
    "sha256": "45d28fd50a95d0b496cf73f3624d39b7da89d1b1c885ac6ab5f841208ecd4cfb",
    "pages": 20,
    "low_text_pages": [],
    "text_chars": 40446,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S239",
    "path": "8676/MT8676软件资料/User Manual/其他/Aurisys_exe_V1.2620.01.rar",
    "name": "Aurisys_exe_V1.2620.01.rar",
    "bytes": 909227333,
    "status": "inventory_only",
    "sha256": "5a70e60b5e6d45d783c8ccbdd540841df9ef68bb59bdecd6829d18b69b1e1d02",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S240",
    "path": "8676/MTK8676硬件资料/0007-000001-957 MT6685_DCXO_DataSheet_V1.4.pdf",
    "name": "0007-000001-957 MT6685_DCXO_DataSheet_V1.4.pdf",
    "bytes": 1564372,
    "status": "text_extracted",
    "sha256": "11b9316f312a85d7ccc655d3ac0520331696bfa3b8e2dbf913fa2ac85e31a9a4",
    "pages": 43,
    "low_text_pages": [],
    "text_chars": 78845,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S241",
    "path": "8676/MTK8676硬件资料/IBIS/CSI.rar",
    "name": "CSI.rar",
    "bytes": 356896351,
    "status": "inventory_only",
    "sha256": "3ffda3633b4942537992bbf391f3c0beab5d819f506bbf1d4addb9f423d46661",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S242",
    "path": "8676/MTK8676硬件资料/IBIS/DPTX.rar",
    "name": "DPTX.rar",
    "bytes": 3512444,
    "status": "inventory_only",
    "sha256": "14b704107bcccfcd978027c39c4c2ce845cb577ad1df4d2068707436cba8de3c",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S243",
    "path": "8676/MTK8676硬件资料/IBIS/DSI.rar",
    "name": "DSI.rar",
    "bytes": 38626227,
    "status": "inventory_only",
    "sha256": "377e840a30a0e2ce4bfa6d893711e96ddf1fb277b9fa5cdda995e5ecf577cd40",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S244",
    "path": "8676/MTK8676硬件资料/IBIS/MT6197_ibis.rar",
    "name": "MT6197_ibis.rar",
    "bytes": 11787144,
    "status": "inventory_only",
    "sha256": "074e04a0dae59ffcde2801beebe4631ab9b9f872132af209e5cb3fd71672fead",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S245",
    "path": "8676/MTK8676硬件资料/IBIS/PCIE.rar",
    "name": "PCIE.rar",
    "bytes": 8476772,
    "status": "inventory_only",
    "sha256": "6a7c492cf5972dabac2e07f4a265741b489e1fe5c73a76526d9576c6eb93ead9",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S246",
    "path": "8676/MTK8676硬件资料/IBIS/SSUSB.rar",
    "name": "SSUSB.rar",
    "bytes": 5200275,
    "status": "inventory_only",
    "sha256": "36e7fa1f93e450d23fb6181356c30250c21d619b8756f8e4339c7d5cbaa84aef",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S247",
    "path": "8676/MTK8676硬件资料/IBIS/U2.rar",
    "name": "U2.rar",
    "bytes": 4228,
    "status": "inventory_only",
    "sha256": "b1c3ea09c6d9c78266524bb0a267224ad0e4b0ede3489ad98129b96f08467104",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S248",
    "path": "8676/MTK8676硬件资料/MT6363_Design_Notice_for_MT8676_V01.pdf",
    "name": "MT6363_Design_Notice_for_MT8676_V01.pdf",
    "bytes": 1906151,
    "status": "text_extracted",
    "sha256": "232daa16ff71548a5fca2be532a3272bcd834a8b5f26ef9ede317c8b5f2d9928",
    "pages": 85,
    "low_text_pages": [],
    "text_chars": 73278,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S249",
    "path": "8676/MTK8676硬件资料/MT6686_Datasheet_V1.4.pdf",
    "name": "MT6686_Datasheet_V1.4.pdf",
    "bytes": 1235407,
    "status": "text_extracted",
    "sha256": "5d77a1dea0381cb1761ba942a5b40029a0d4d4da5ca6498878c0529d4b33cd92",
    "pages": 30,
    "low_text_pages": [],
    "text_chars": 50040,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S250",
    "path": "8676/MTK8676硬件资料/P39.A03.H5_V2.1QR对外资料1023.zip",
    "name": "P39.A03.H5_V2.1QR对外资料1023.zip",
    "bytes": 42941761,
    "status": "inventory_only",
    "sha256": "e2519aa16e3bf37e50890592254a8c8089f34ce1400fd59ec5a15e83fe7ace9c",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S251",
    "path": "8676/PVT技术分享文档/8676平台Audio通路参考设计.drawio.pdf",
    "name": "8676平台Audio通路参考设计.drawio.pdf",
    "bytes": 759551,
    "status": "text_extracted",
    "sha256": "ac6a8bed3a3e0789bc085e2fe3ca7aecb27ea3a8e61fa7ed43cf55fc7be4bcf1",
    "pages": 1,
    "low_text_pages": [],
    "text_chars": 2368,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U003"
    ]
  },
  {
    "id": "S252",
    "path": "8676/PVT技术分享文档/8676快速开发手册-V1.1.pdf",
    "name": "8676快速开发手册-V1.1.pdf",
    "bytes": 11596962,
    "status": "text_extracted",
    "sha256": "98b9631a8af57157edbb11b3a6c99412e8261c516adc3ad3b755910bd6dd725d",
    "pages": 214,
    "low_text_pages": [],
    "text_chars": 196891,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U004"
    ]
  },
  {
    "id": "S253",
    "path": "8676/PVT技术分享文档/android系统起不来分析.pdf",
    "name": "android系统起不来分析.pdf",
    "bytes": 502998,
    "status": "text_extracted",
    "sha256": "aa85206665a9f9761cc089882b5538814f24de8a07ef0285cc9fc8abc347eb2f",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 9606,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U005"
    ]
  },
  {
    "id": "S254",
    "path": "8676/PVT技术分享文档/Auto Adsp Task Config Guide.pdf",
    "name": "Auto Adsp Task Config Guide.pdf",
    "bytes": 370150,
    "status": "text_extracted",
    "sha256": "742b67255442b38bb988886d439719d4b7c920262f99e3aed59eb514ff803657",
    "pages": 4,
    "low_text_pages": [],
    "text_chars": 5760,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U006"
    ]
  },
  {
    "id": "S255",
    "path": "8676/PVT技术分享文档/DVR分享.pdf",
    "name": "DVR分享.pdf",
    "bytes": 3722216,
    "status": "text_extracted",
    "sha256": "59ccf9c0f25e88d1113e94af9be0579c4aff1726b00af0081d62ef19f5297ebc",
    "pages": 21,
    "low_text_pages": [
      1,
      2,
      8,
      21
    ],
    "text_chars": 6562,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U007"
    ]
  },
  {
    "id": "S256",
    "path": "8676/PVT技术分享文档/eCall_Overview_V1.2.pdf",
    "name": "eCall_Overview_V1.2.pdf",
    "bytes": 1219631,
    "status": "text_extracted",
    "sha256": "6ee6bf39eea025810453843da734726f4415bcbe00fa1fe6b95145a2af988855",
    "pages": 22,
    "low_text_pages": [],
    "text_chars": 23998,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U008"
    ]
  },
  {
    "id": "S257",
    "path": "8676/PVT技术分享文档/EVS软件开发培训1223.pdf",
    "name": "EVS软件开发培训1223.pdf",
    "bytes": 2700242,
    "status": "text_extracted",
    "sha256": "140b4869f951f8385dbd61613e391efbca33108e9c8a4d10211620271a9ac703",
    "pages": 11,
    "low_text_pages": [
      1,
      11
    ],
    "text_chars": 2978,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U010"
    ]
  },
  {
    "id": "S258",
    "path": "8676/PVT技术分享文档/GWM+KE__VM-1.pdf",
    "name": "GWM+KE__VM-1.pdf",
    "bytes": 865399,
    "status": "text_extracted",
    "sha256": "0488ba34acae311ff5120d234adc0e83266993c5e8561d1ba063faa4ff654435",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 5392,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U011"
    ]
  },
  {
    "id": "S259",
    "path": "8676/PVT技术分享文档/Hypervisor Tbox(L+L+A)架构.pdf",
    "name": "Hypervisor Tbox(L+L+A)架构.pdf",
    "bytes": 776626,
    "status": "text_extracted",
    "sha256": "b6db294b79165d3283fee197d88db9e1141c3e595bffa1fd0a05dab6b3885b1a",
    "pages": 3,
    "low_text_pages": [
      3
    ],
    "text_chars": 717,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "1-2"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U012"
    ]
  },
  {
    "id": "S260",
    "path": "8676/PVT技术分享文档/LK Audio初始化.pdf",
    "name": "LK Audio初始化.pdf",
    "bytes": 754127,
    "status": "text_extracted",
    "sha256": "6d282f57b1ca564746bae282f2662622863d791b1c446cb9f77111652ed06837",
    "pages": 3,
    "low_text_pages": [],
    "text_chars": 2241,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U013"
    ]
  },
  {
    "id": "S261",
    "path": "8676/PVT技术分享文档/lmkd+引发的system_server+SWT.pdf",
    "name": "lmkd+引发的system_server+SWT.pdf",
    "bytes": 2110460,
    "status": "text_extracted",
    "sha256": "3dfcfd692b651f6bfb7a28827a415a42a986a3906c5db2f03c1467c19da5e66d",
    "pages": 5,
    "low_text_pages": [],
    "text_chars": 1061,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "06-Android内部机制与稳定性.md",
        "pages": "2-5"
      },
      {
        "chapter": "15-统一诊断手册.md",
        "pages": "2-5"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "2-5"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U014"
    ]
  },
  {
    "id": "S262",
    "path": "8676/PVT技术分享文档/Low_power_debug_sop_v1.4.pdf",
    "name": "Low_power_debug_sop_v1.4.pdf",
    "bytes": 1514967,
    "status": "text_extracted",
    "sha256": "3ea5dbd9f6ab5f57c974c837b8c07532741f1678815cb0954a796222a7e62b5c",
    "pages": 16,
    "low_text_pages": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ],
    "text_chars": 405,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "3-4"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [
      3,
      4
    ],
    "same_hash_ids": [
      "U015"
    ]
  },
  {
    "id": "S263",
    "path": "8676/PVT技术分享文档/MT8676 TBOX子系统架构设计.pdf",
    "name": "MT8676 TBOX子系统架构设计.pdf",
    "bytes": 795351,
    "status": "text_extracted",
    "sha256": "f24f4fe4d19c328b0e24906961ce3bd30fc30a7ad2a1a2089f8340743c0e3d23",
    "pages": 6,
    "low_text_pages": [],
    "text_chars": 5441,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "09-TBox通信模组内部机制.md",
        "pages": "1-5"
      },
      {
        "chapter": "12-音频与语音业务流程.md",
        "pages": "1-5"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U016"
    ]
  },
  {
    "id": "S264",
    "path": "8676/PVT技术分享文档/MT8676_Hypervisor_Display_User_Manual_V1.3.pdf",
    "name": "MT8676_Hypervisor_Display_User_Manual_V1.3.pdf",
    "bytes": 1429174,
    "status": "text_extracted",
    "sha256": "30174454fb71777676a8a441756baed7d6cfd427f303ffcaf7633eb047a94a1e",
    "pages": 24,
    "low_text_pages": [],
    "text_chars": 32470,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U017"
    ]
  },
  {
    "id": "S265",
    "path": "8676/PVT技术分享文档/MT8676_Hypervisor_Suspend_Resume_Common_Flow.pdf",
    "name": "MT8676_Hypervisor_Suspend_Resume_Common_Flow.pdf",
    "bytes": 1504785,
    "status": "text_extracted",
    "sha256": "b3ab2e67d52d5192a4a1a2abea73e1419f5813b2465eb1a93404268c9e469b65",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 16145,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "08-MCU内部机制.md",
        "pages": "4-6"
      },
      {
        "chapter": "14-系统生命周期业务流程.md",
        "pages": "4-6"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "4-6"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "4-6"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "4-6"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S300",
      "U018"
    ]
  },
  {
    "id": "S266",
    "path": "8676/PVT技术分享文档/MT8676_Hypervisor_Suspend_Resume_sample(1).pdf",
    "name": "MT8676_Hypervisor_Suspend_Resume_sample(1).pdf",
    "bytes": 2076233,
    "status": "text_extracted",
    "sha256": "02961279599c269def44d2fc7768c283d01179defe4878fac5c6b7adfad8be35",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 12651,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U019"
    ]
  },
  {
    "id": "S267",
    "path": "8676/PVT技术分享文档/MT8676_Hypervisor_Suspend_Resume_V1.2.pdf",
    "name": "MT8676_Hypervisor_Suspend_Resume_V1.2.pdf",
    "bytes": 721164,
    "status": "text_extracted",
    "sha256": "bbb5ef8aa8ec40ca36708eb881fcb77c5b8050a4c0f1145a68dce585ea371681",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 21272,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S301",
      "U020"
    ]
  },
  {
    "id": "S268",
    "path": "8676/PVT技术分享文档/MT8676_Yocto_AEE_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_AEE_User_Manual_V1.0.pdf",
    "bytes": 617725,
    "status": "text_extracted",
    "sha256": "7ace10c5983949c671b67b679cf443518e6850e9fd4aa6c1c38383b9e97e7d13",
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 17539,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U021"
    ]
  },
  {
    "id": "S269",
    "path": "8676/PVT技术分享文档/MT86xx+Workshop+Tbox.pdf",
    "name": "MT86xx+Workshop+Tbox.pdf",
    "bytes": 630887,
    "status": "text_extracted",
    "sha256": "6e1afbe19015438d4d0a0a9e70ebabbb5b50c0049acaf77ddbd03014d048bcda",
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 3229,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U022"
    ]
  },
  {
    "id": "S270",
    "path": "8676/PVT技术分享文档/MTK+Audio+技术培训材料.pdf",
    "name": "MTK+Audio+技术培训材料.pdf",
    "bytes": 6921113,
    "status": "text_extracted",
    "sha256": "09d7c99d2c2afeb6e790e50f90c599726f6c18073e8aa7af2982ac2e357620e8",
    "pages": 26,
    "low_text_pages": [
      1,
      2,
      3,
      5,
      7,
      9,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ],
    "text_chars": 3029,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U023"
    ]
  },
  {
    "id": "S271",
    "path": "8676/PVT技术分享文档/MTK86系列平台安全启动详细设计说明资料.zip",
    "name": "MTK86系列平台安全启动详细设计说明资料.zip",
    "bytes": 3779644,
    "status": "inventory_only",
    "sha256": "ee34dd854e097e7a464a3ac5c5d85ed298a7be37464c648c5135dae10de9744a",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U024"
    ]
  },
  {
    "id": "S272",
    "path": "8676/PVT技术分享文档/MTK_Log_SOS_dump_uos_pstore.pdf",
    "name": "MTK_Log_SOS_dump_uos_pstore.pdf",
    "bytes": 312617,
    "status": "text_extracted",
    "sha256": "a0ea4cd59f56e118b78ce53b3ee40288de210e19251ea3c74d05882fb0947e36",
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 6125,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "14-系统生命周期业务流程.md",
        "pages": "3"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "3"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U025"
    ]
  },
  {
    "id": "S273",
    "path": "8676/PVT技术分享文档/MTK_Log_SOS_shutdown_pstore_dump_to_BLK.pdf",
    "name": "MTK_Log_SOS_shutdown_pstore_dump_to_BLK.pdf",
    "bytes": 524953,
    "status": "text_extracted",
    "sha256": "1e4d22f0c69a0f542704bc09553953323cfe961f09b1f038be160d344de1ebe5",
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 4332,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "14-系统生命周期业务流程.md",
        "pages": "3"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "3"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U026"
    ]
  },
  {
    "id": "S274",
    "path": "8676/PVT技术分享文档/MTK平台网络配置.pdf",
    "name": "MTK平台网络配置.pdf",
    "bytes": 112371,
    "status": "text_extracted",
    "sha256": "a7e4b3132313dbd1482d5c999455eee62dd17af84bed605ab6f8b9d2b19d43b5",
    "pages": 6,
    "low_text_pages": [],
    "text_chars": 10401,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U001",
      "U027"
    ]
  },
  {
    "id": "S275",
    "path": "8676/PVT技术分享文档/PCIE DEBUG GUIDE.pdf",
    "name": "PCIE DEBUG GUIDE.pdf",
    "bytes": 3837135,
    "status": "text_extracted",
    "sha256": "3e6385ac82abc82c1286b53e3f015e732b31f900aae44a4c638b0dfa6dd910b5",
    "pages": 12,
    "low_text_pages": [
      8
    ],
    "text_chars": 4871,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U029"
    ]
  },
  {
    "id": "S276",
    "path": "8676/PVT技术分享文档/PVT经验教训记录表.pdf",
    "name": "PVT经验教训记录表.pdf",
    "bytes": 3864030,
    "status": "text_extracted",
    "sha256": "9fb78cf7bec9df016456df891e313b2d4444442dd1dff40545ddda65c38437b2",
    "pages": 3,
    "low_text_pages": [],
    "text_chars": 8458,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U030"
    ]
  },
  {
    "id": "S277",
    "path": "8676/PVT技术分享文档/SF_debug方法.pdf",
    "name": "SF_debug方法.pdf",
    "bytes": 2544493,
    "status": "text_extracted",
    "sha256": "843085143d8a62a45daf1bbfbb26fb322561216b5a86674c29e3d87b706afaa8",
    "pages": 11,
    "low_text_pages": [
      1,
      5,
      11
    ],
    "text_chars": 2211,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U031"
    ]
  },
  {
    "id": "S278",
    "path": "8676/PVT技术分享文档/T-Hyper+CPU+调度说明.pdf",
    "name": "T-Hyper+CPU+调度说明.pdf",
    "bytes": 190382,
    "status": "text_extracted",
    "sha256": "35d787f62e6dc5e094e3cde15485ba6502a3f1dcddc84074e3ee224b25a7d45f",
    "pages": 6,
    "low_text_pages": [
      1
    ],
    "text_chars": 4545,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "02-整机与虚拟化架构.md",
        "pages": "4-6"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U032"
    ]
  },
  {
    "id": "S279",
    "path": "8676/PVT技术分享文档/tbox整车无网络案例分享.pdf",
    "name": "tbox整车无网络案例分享.pdf",
    "bytes": 1362984,
    "status": "text_extracted",
    "sha256": "3c456da9d243acbc7ac0efdb5a5f8818f20d55f759909a8c42a810c83ae35266",
    "pages": 12,
    "low_text_pages": [
      1
    ],
    "text_chars": 10119,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "13-通信模块业务流程.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U033"
    ]
  },
  {
    "id": "S280",
    "path": "8676/PVT技术分享文档/TBOX未登录TSP.pdf",
    "name": "TBOX未登录TSP.pdf",
    "bytes": 2949549,
    "status": "text_extracted",
    "sha256": "839d3d6f2a0d72c15285e214af5c02f97939a3ca3108103e1e649fe2d6f23617",
    "pages": 15,
    "low_text_pages": [
      1,
      2,
      12,
      13
    ],
    "text_chars": 3412,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "13-通信模块业务流程.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U034"
    ]
  },
  {
    "id": "S281",
    "path": "8676/PVT技术分享文档/vehicle方案.pdf",
    "name": "vehicle方案.pdf",
    "bytes": 1117561,
    "status": "text_extracted",
    "sha256": "398af5949db91dae695f03dc12fe6a1125e8e8acc154e0e6874dd2869387836c",
    "pages": 6,
    "low_text_pages": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "text_chars": 177,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "08-MCU内部机制.md",
        "pages": "2-3"
      },
      {
        "chapter": "10-车辆仪表与诊断业务流程.md",
        "pages": "2-3"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [
      2,
      3
    ],
    "same_hash_ids": [
      "U035"
    ]
  },
  {
    "id": "S282",
    "path": "8676/PVT技术分享文档/vmnet配置说明.pdf",
    "name": "vmnet配置说明.pdf",
    "bytes": 463452,
    "status": "text_extracted",
    "sha256": "01e41793db8db378ddee9543e6411426ec130334c2733edc59369a9332718f92",
    "pages": 8,
    "low_text_pages": [],
    "text_chars": 8773,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "05-通信机制与异常诊断基础.md",
        "pages": "4-5"
      },
      {
        "chapter": "13-通信模块业务流程.md",
        "pages": "4-5"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "4-5"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U036"
    ]
  },
  {
    "id": "S283",
    "path": "8676/PVT技术分享文档/低速总线虚拟化配置.pdf",
    "name": "低速总线虚拟化配置.pdf",
    "bytes": 339367,
    "status": "text_extracted",
    "sha256": "86df72575171659a2d7358b2025d0b8c1b9d418b01353cefd7a7cf0c622e485c",
    "pages": 12,
    "low_text_pages": [
      2
    ],
    "text_chars": 9738,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "02-整机与虚拟化架构.md",
        "pages": "4-5"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U041"
    ]
  },
  {
    "id": "S284",
    "path": "8676/PVT技术分享文档/刷机后无网络.pdf",
    "name": "刷机后无网络.pdf",
    "bytes": 2481095,
    "status": "text_extracted",
    "sha256": "9eae122081b6b7a9fe905370c74db60d2b566f058f1d0f249771b1966136f670",
    "pages": 12,
    "low_text_pages": [
      1,
      2
    ],
    "text_chars": 2933,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U043"
    ]
  },
  {
    "id": "S285",
    "path": "8676/PVT技术分享文档/显示问题common+sop.pdf",
    "name": "显示问题common+sop.pdf",
    "bytes": 679913,
    "status": "text_extracted",
    "sha256": "815b1152cb315c7de0e8fd1d9a2751c05a91291295680faa27bce5d34d2cf764",
    "pages": 6,
    "low_text_pages": [
      1
    ],
    "text_chars": 2088,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "2-5"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S286",
    "path": "8676/PVT技术分享文档/汇报材料--软件开发培训-音视频解码常见问题及分析.pdf",
    "name": "汇报材料--软件开发培训-音视频解码常见问题及分析.pdf",
    "bytes": 2201006,
    "status": "text_extracted",
    "sha256": "0f87b2ff1abcc12b6de413722a24d38e5385908cab007e619745e368b6cbf6c7",
    "pages": 13,
    "low_text_pages": [
      1,
      4,
      13
    ],
    "text_chars": 9245,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U045"
    ]
  },
  {
    "id": "S287",
    "path": "8676/PVT技术分享文档/蓝牙架构.pdf",
    "name": "蓝牙架构.pdf",
    "bytes": 2401275,
    "status": "text_extracted",
    "sha256": "6035c10be62bf7dc85227b467a9bef5429074ae8e9df45170e918cafdd40dab6",
    "pages": 11,
    "low_text_pages": [
      1,
      2,
      3,
      5,
      6,
      7,
      8,
      11
    ],
    "text_chars": 966,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S288",
    "path": "Camera架构/artifact.json",
    "name": "artifact.json",
    "bytes": 22464,
    "status": "inventory_only",
    "sha256": "a73fb13ae14bc42200ba35af94f6cc7a799129eaa804200807e0add3ba02ff50",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S289",
    "path": "Camera架构/artifact_final.json",
    "name": "artifact_final.json",
    "bytes": 15407,
    "status": "inventory_only",
    "sha256": "985055e60fb42f05042952892d72a6b99e8528c29ba23c1fa796a242229301c1",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S290",
    "path": "Camera架构/camera-physical-topology-confirmed.jpg",
    "name": "camera-physical-topology-confirmed.jpg",
    "bytes": 65761,
    "status": "image_pending_review",
    "sha256": "04d4a2480f628986b89efbce08b625606632800a899072c968739cda53652b29",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S291",
    "path": "Camera架构/camera_ddr_calculation.py",
    "name": "camera_ddr_calculation.py",
    "bytes": 3586,
    "status": "inventory_only",
    "sha256": "b374b18034b1695b54eed9526a7ceba895f41e42540dd94b9875979332e293f5",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S292",
    "path": "Camera架构/camera_ddr_calculation.sql",
    "name": "camera_ddr_calculation.sql",
    "bytes": 1032,
    "status": "inventory_only",
    "sha256": "308423b8d19d6bd91c7b23782301b84a519388590a0f0f9c14432399bb9a7827",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S293",
    "path": "Camera架构/camera_history_lineage.sql",
    "name": "camera_history_lineage.sql",
    "bytes": 836,
    "status": "inventory_only",
    "sha256": "b7a46f7e80ee4c837146b319149b9f841f45ccf106eb58e3c1e61840ae7e66bb",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S294",
    "path": "Camera架构/Camera对话合并追溯.md",
    "name": "Camera对话合并追溯.md",
    "bytes": 1879,
    "status": "text_available",
    "sha256": "431326d1866708351c89d15474bb4da7d9fa6cbab2dfb239d70ebfdcd650f646",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S295",
    "path": "Camera架构/MT8668_Camera架构与DDR计算_最终可追溯版.html",
    "name": "MT8668_Camera架构与DDR计算_最终可追溯版.html",
    "bytes": 422817,
    "status": "inventory_only",
    "sha256": "b7e058ab2066bf84a857293dbb4709b9f451d64331fb970b4b82344f1c989057",
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S296",
    "path": "Camera架构/MT8668_Camera架构与DDR计算_最终可追溯版.md",
    "name": "MT8668_Camera架构与DDR计算_最终可追溯版.md",
    "bytes": 20140,
    "status": "text_available",
    "sha256": "ad8a28b51b87aa0827b27f85f7bd52461482b8bf6eac30e989702256a34beb14",
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "01-三张架构图阅读指南.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "11-显示相机与驾驶辅助业务流程.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S297",
    "path": "Camera架构/MT8668最终Camera架构与DDR解读.md",
    "name": "MT8668最终Camera架构与DDR解读.md",
    "bytes": 17384,
    "status": "text_available",
    "sha256": "a22d7ea836e595e6b43f52196c14af0d3fb6f59fcb818806bc18b4a0b6194199",
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "01-三张架构图阅读指南.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "11-显示相机与驾驶辅助业务流程.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "17-MT8676与MT8668平台差异及迁移边界.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "19-Camera跨域架构与DDR资源预算.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S298",
    "path": "MT8668_Application_Processor_Technical_Brief_V0.1.pdf",
    "name": "MT8668_Application_Processor_Technical_Brief_V0.1.pdf",
    "bytes": 8882131,
    "status": "text_extracted",
    "sha256": "f3d85275cf761309f66d86c58a3e14d65f402c4d921c7abed7a1956a2a0fcbe9",
    "pages": 129,
    "low_text_pages": [],
    "text_chars": 209761,
    "platform": "MT8668",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S299",
    "path": "MT8676_Camera_Virtualization 1.pdf",
    "name": "MT8676_Camera_Virtualization 1.pdf",
    "bytes": 342332,
    "status": "text_extracted",
    "sha256": "9b642362bbd2557f0d340338244aee32cb583fa83cc3f51de5fa4bc46baee816",
    "pages": 4,
    "low_text_pages": [],
    "text_chars": 1933,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S300",
    "path": "MT8676_Hypervisor_Suspend_Resume_Common_Flow.pdf",
    "name": "MT8676_Hypervisor_Suspend_Resume_Common_Flow.pdf",
    "bytes": 1504785,
    "status": "text_extracted",
    "sha256": "b3ab2e67d52d5192a4a1a2abea73e1419f5813b2465eb1a93404268c9e469b65",
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 16145,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S265",
      "U018"
    ]
  },
  {
    "id": "S301",
    "path": "MT8676_Hypervisor_Suspend_Resume_V1.2.pdf",
    "name": "MT8676_Hypervisor_Suspend_Resume_V1.2.pdf",
    "bytes": 721164,
    "status": "text_extracted",
    "sha256": "bbb5ef8aa8ec40ca36708eb881fcb77c5b8050a4c0f1145a68dce585ea371681",
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 21272,
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S267",
      "U020"
    ]
  },
  {
    "id": "S302",
    "path": "P5B系列车规级模组产品规格书_v2.0_20260629.pdf",
    "name": "P5B系列车规级模组产品规格书_v2.0_20260629.pdf",
    "bytes": 1338279,
    "status": "text_extracted",
    "sha256": "d6b8534c01933235774797130370b94072100c95d297469265f03ea62e8d4f5f",
    "pages": 33,
    "low_text_pages": [
      31
    ],
    "text_chars": 31431,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S076"
    ]
  },
  {
    "id": "S303",
    "path": "SWA资料介绍(6_14).pdf",
    "name": "SWA资料介绍(6_14).pdf",
    "bytes": 1621133,
    "status": "text_extracted",
    "sha256": "6ea29dea196358742cc3a44e699c43da9cabc1fe0d5935575770fec6251feaf8",
    "pages": 5,
    "low_text_pages": [
      3,
      4
    ],
    "text_chars": 527,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S304",
    "path": "培训材料/PVT技术分享文档/modem抓取方式和常见的日志分析/modem log常见分析方法.pdf",
    "name": "modem log常见分析方法.pdf",
    "bytes": 4778939,
    "status": "text_extracted",
    "sha256": "c4d8634dee6e6e26c19cd4d7a585e5e7dd82a0218d0b77c14e82bce05e170ee1",
    "pages": 14,
    "low_text_pages": [
      4,
      9
    ],
    "text_chars": 2594,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "09-TBox通信模组内部机制.md",
        "pages": "1-3"
      },
      {
        "chapter": "13-通信模块业务流程.md",
        "pages": "1-3"
      },
      {
        "chapter": "15-统一诊断手册.md",
        "pages": "1-3"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "1-3"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S305",
    "path": "培训材料/PVT技术分享文档/modem抓取方式和常见的日志分析/Tbox_Telephony_MD and mdlog SOP.pdf",
    "name": "Tbox_Telephony_MD and mdlog SOP.pdf",
    "bytes": 789098,
    "status": "text_extracted",
    "sha256": "0de6d012049cc85ed7edda783b32f77158b36d457fbe167fe66d51967c3c52ad",
    "pages": 14,
    "low_text_pages": [],
    "text_chars": 17967,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "13-通信模块业务流程.md",
        "pages": "2-4"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S306",
    "path": "培训材料/PVT技术分享文档/使用page_owner定位内存泄露.rar",
    "name": "使用page_owner定位内存泄露.rar",
    "bytes": 1819500,
    "status": "inventory_only",
    "sha256": "8d74a6884c58374b4bf12b56e2f1aff18807dd55c80129f1f6d3f8bab6428f7e",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S307",
    "path": "培训材料/PVT技术分享文档/奇瑞项目Yocto SELinux 介绍 资料.zip",
    "name": "奇瑞项目Yocto SELinux 介绍 资料.zip",
    "bytes": 1074100,
    "status": "inventory_only",
    "sha256": "390860030f5ac38cd3b8797e12b3d43400b4eb0025e7d9a49e141a9764e414ab",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S308",
    "path": "培训材料/PVT技术分享文档/显示问题common+sop.pdf",
    "name": "显示问题common+sop.pdf",
    "bytes": 0,
    "status": "empty",
    "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S310"
    ]
  },
  {
    "id": "S309",
    "path": "培训材料/PVT技术分享文档/系统稳定性资料分享.rar",
    "name": "系统稳定性资料分享.rar",
    "bytes": 572820959,
    "status": "inventory_only",
    "sha256": "543e357866a50574d5d72702ce29be443479a043477bfa0f1987ee8371305da4",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S310",
    "path": "培训材料/PVT技术分享文档/蓝牙架构.pdf",
    "name": "蓝牙架构.pdf",
    "bytes": 0,
    "status": "empty",
    "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S308"
    ]
  },
  {
    "id": "S311",
    "path": "安卓架构.jpg",
    "name": "安卓架构.jpg",
    "bytes": 654323,
    "status": "image_pending_review",
    "sha256": "051132be5a9034f6446c7a0eb613d2cd5423be387a8635df9fe964e17741c5cc",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S312",
    "path": "系统整体架构.jpg",
    "name": "系统整体架构.jpg",
    "bytes": 709310,
    "status": "image_pending_review",
    "sha256": "10f8872dd400e265270b9eda4dc8e5467c355ce72731b7b7e2f557fbcde980b8",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "S313",
    "path": "系统通讯架构.jpg",
    "name": "系统通讯架构.jpg",
    "bytes": 306518,
    "status": "image_pending_review",
    "sha256": "218622afac3ccb3a1e3282001c075bac59af62987b337ede2d96fc01c1615c34",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "U001",
    "path": "培训材料/PVT技术分享文档/2、MTK平台网络配置.pdf",
    "name": "2、MTK平台网络配置.pdf",
    "sha256": "a7e4b3132313dbd1482d5c999455eee62dd17af84bed605ab6f8b9d2b19d43b5",
    "bytes": 112371,
    "status": "text_extracted",
    "last_modified_ns": 1789867160721541800,
    "pages": 6,
    "low_text_pages": [],
    "text_chars": 10401,
    "identical_to": "S274",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S274",
      "U027"
    ]
  },
  {
    "id": "U002",
    "path": "培训材料/PVT技术分享文档/3OS time synchronization.pdf",
    "name": "3OS time synchronization.pdf",
    "sha256": "b1169fd18761031a5bd6b916d6eb1b79d00ac8bc1302f2748cacef8b76d043b2",
    "bytes": 283292,
    "status": "text_extracted",
    "last_modified_ns": 1789867155021843800,
    "pages": 2,
    "low_text_pages": [],
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "07-SOS-Yocto内部机制.md",
        "pages": "1-2"
      },
      {
        "chapter": "09-TBox通信模组内部机制.md",
        "pages": "2"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "1-2"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "U003",
    "path": "培训材料/PVT技术分享文档/8676平台Audio通路参考设计.drawio.pdf",
    "name": "8676平台Audio通路参考设计.drawio.pdf",
    "sha256": "ac6a8bed3a3e0789bc085e2fe3ca7aecb27ea3a8e61fa7ed43cf55fc7be4bcf1",
    "bytes": 759551,
    "status": "text_extracted",
    "last_modified_ns": 1789867170897267400,
    "pages": 1,
    "low_text_pages": [],
    "text_chars": 2368,
    "identical_to": "S251",
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S251"
    ]
  },
  {
    "id": "U004",
    "path": "培训材料/PVT技术分享文档/8676快速开发手册-V1.1.pdf",
    "name": "8676快速开发手册-V1.1.pdf",
    "sha256": "98b9631a8af57157edbb11b3a6c99412e8261c516adc3ad3b755910bd6dd725d",
    "bytes": 11596962,
    "status": "text_extracted",
    "last_modified_ns": 1789867153772377600,
    "pages": 214,
    "low_text_pages": [],
    "text_chars": 196891,
    "identical_to": "S252",
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S252"
    ]
  },
  {
    "id": "U005",
    "path": "培训材料/PVT技术分享文档/android系统起不来分析.pdf",
    "name": "android系统起不来分析.pdf",
    "sha256": "aa85206665a9f9761cc089882b5538814f24de8a07ef0285cc9fc8abc347eb2f",
    "bytes": 502998,
    "status": "text_extracted",
    "last_modified_ns": 1789867170800103600,
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 9606,
    "identical_to": "S253",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S253"
    ]
  },
  {
    "id": "U006",
    "path": "培训材料/PVT技术分享文档/Auto Adsp Task Config Guide.pdf",
    "name": "Auto Adsp Task Config Guide.pdf",
    "sha256": "742b67255442b38bb988886d439719d4b7c920262f99e3aed59eb514ff803657",
    "bytes": 370150,
    "status": "text_extracted",
    "last_modified_ns": 1789867170641885300,
    "pages": 4,
    "low_text_pages": [],
    "text_chars": 5760,
    "identical_to": "S254",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S254"
    ]
  },
  {
    "id": "U007",
    "path": "培训材料/PVT技术分享文档/DVR分享.pdf",
    "name": "DVR分享.pdf",
    "sha256": "59ccf9c0f25e88d1113e94af9be0579c4aff1726b00af0081d62ef19f5297ebc",
    "bytes": 3722216,
    "status": "text_extracted",
    "last_modified_ns": 1789867170645293100,
    "pages": 21,
    "low_text_pages": [
      1,
      2,
      8,
      21
    ],
    "text_chars": 6562,
    "identical_to": "S255",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S255"
    ]
  },
  {
    "id": "U008",
    "path": "培训材料/PVT技术分享文档/eCall_Overview_V1.2.pdf",
    "name": "eCall_Overview_V1.2.pdf",
    "sha256": "6ee6bf39eea025810453843da734726f4415bcbe00fa1fe6b95145a2af988855",
    "bytes": 1219631,
    "status": "text_extracted",
    "last_modified_ns": 1789867167378947900,
    "pages": 22,
    "low_text_pages": [],
    "text_chars": 23998,
    "identical_to": "S256",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S256"
    ]
  },
  {
    "id": "U009",
    "path": "培训材料/PVT技术分享文档/EINT培训.rar",
    "name": "EINT培训.rar",
    "sha256": "4ae975b912995cfb91ffc9c068804002297acf1434a520e201d5eaecedddeb65",
    "bytes": 988963,
    "status": "inventory_only",
    "last_modified_ns": 1789867167157555000,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "U010",
    "path": "培训材料/PVT技术分享文档/EVS软件开发培训1223.pdf",
    "name": "EVS软件开发培训1223.pdf",
    "sha256": "140b4869f951f8385dbd61613e391efbca33108e9c8a4d10211620271a9ac703",
    "bytes": 2700242,
    "status": "text_extracted",
    "last_modified_ns": 1789867167148439100,
    "pages": 11,
    "low_text_pages": [
      1,
      11
    ],
    "text_chars": 2978,
    "identical_to": "S257",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S257"
    ]
  },
  {
    "id": "U011",
    "path": "培训材料/PVT技术分享文档/GWM+KE__VM-1.pdf",
    "name": "GWM+KE__VM-1.pdf",
    "sha256": "0488ba34acae311ff5120d234adc0e83266993c5e8561d1ba063faa4ff654435",
    "bytes": 865399,
    "status": "text_extracted",
    "last_modified_ns": 1789867165684221100,
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 5392,
    "identical_to": "S258",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S258"
    ]
  },
  {
    "id": "U012",
    "path": "培训材料/PVT技术分享文档/Hypervisor Tbox(L+L+A)架构.pdf",
    "name": "Hypervisor Tbox(L+L+A)架构.pdf",
    "sha256": "b6db294b79165d3283fee197d88db9e1141c3e595bffa1fd0a05dab6b3885b1a",
    "bytes": 776626,
    "status": "text_extracted",
    "last_modified_ns": 1789867165248721900,
    "pages": 3,
    "low_text_pages": [
      3
    ],
    "text_chars": 717,
    "identical_to": "S259",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S259"
    ]
  },
  {
    "id": "U013",
    "path": "培训材料/PVT技术分享文档/LK Audio初始化.pdf",
    "name": "LK Audio初始化.pdf",
    "sha256": "6d282f57b1ca564746bae282f2662622863d791b1c446cb9f77111652ed06837",
    "bytes": 754127,
    "status": "text_extracted",
    "last_modified_ns": 1789867164458698200,
    "pages": 3,
    "low_text_pages": [],
    "text_chars": 2241,
    "identical_to": "S260",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S260"
    ]
  },
  {
    "id": "U014",
    "path": "培训材料/PVT技术分享文档/lmkd+引发的system_server+SWT.pdf",
    "name": "lmkd+引发的system_server+SWT.pdf",
    "sha256": "3dfcfd692b651f6bfb7a28827a415a42a986a3906c5db2f03c1467c19da5e66d",
    "bytes": 2110460,
    "status": "text_extracted",
    "last_modified_ns": 1789867164769733600,
    "pages": 5,
    "low_text_pages": [],
    "text_chars": 1061,
    "identical_to": "S261",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S261"
    ]
  },
  {
    "id": "U015",
    "path": "培训材料/PVT技术分享文档/Low_power_debug_sop_v1.4.pdf",
    "name": "Low_power_debug_sop_v1.4.pdf",
    "sha256": "3ea5dbd9f6ab5f57c974c837b8c07532741f1678815cb0954a796222a7e62b5c",
    "bytes": 1514967,
    "status": "text_extracted",
    "last_modified_ns": 1789867164105638000,
    "pages": 16,
    "low_text_pages": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ],
    "text_chars": 405,
    "identical_to": "S262",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S262"
    ]
  },
  {
    "id": "U016",
    "path": "培训材料/PVT技术分享文档/MT8676 TBOX子系统架构设计.pdf",
    "name": "MT8676 TBOX子系统架构设计.pdf",
    "sha256": "f24f4fe4d19c328b0e24906961ce3bd30fc30a7ad2a1a2089f8340743c0e3d23",
    "bytes": 795351,
    "status": "text_extracted",
    "last_modified_ns": 1789867163150786300,
    "pages": 6,
    "low_text_pages": [],
    "text_chars": 5441,
    "identical_to": "S263",
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S263"
    ]
  },
  {
    "id": "U017",
    "path": "培训材料/PVT技术分享文档/MT8676_Hypervisor_Display_User_Manual_V1.3.pdf",
    "name": "MT8676_Hypervisor_Display_User_Manual_V1.3.pdf",
    "sha256": "30174454fb71777676a8a441756baed7d6cfd427f303ffcaf7633eb047a94a1e",
    "bytes": 1429174,
    "status": "text_extracted",
    "last_modified_ns": 1789867162211305300,
    "pages": 24,
    "low_text_pages": [],
    "text_chars": 32470,
    "identical_to": "S264",
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S264"
    ]
  },
  {
    "id": "U018",
    "path": "培训材料/PVT技术分享文档/MT8676_Hypervisor_Suspend_Resume_Common_Flow.pdf",
    "name": "MT8676_Hypervisor_Suspend_Resume_Common_Flow.pdf",
    "sha256": "b3ab2e67d52d5192a4a1a2abea73e1419f5813b2465eb1a93404268c9e469b65",
    "bytes": 1504785,
    "status": "text_extracted",
    "last_modified_ns": 1789867162219939800,
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 16145,
    "identical_to": "S300",
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S265",
      "S300"
    ]
  },
  {
    "id": "U019",
    "path": "培训材料/PVT技术分享文档/MT8676_Hypervisor_Suspend_Resume_sample(1).pdf",
    "name": "MT8676_Hypervisor_Suspend_Resume_sample(1).pdf",
    "sha256": "02961279599c269def44d2fc7768c283d01179defe4878fac5c6b7adfad8be35",
    "bytes": 2076233,
    "status": "text_extracted",
    "last_modified_ns": 1789867161857486000,
    "pages": 16,
    "low_text_pages": [],
    "text_chars": 12651,
    "identical_to": "S266",
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S266"
    ]
  },
  {
    "id": "U020",
    "path": "培训材料/PVT技术分享文档/MT8676_Hypervisor_Suspend_Resume_V1.2.pdf",
    "name": "MT8676_Hypervisor_Suspend_Resume_V1.2.pdf",
    "sha256": "bbb5ef8aa8ec40ca36708eb881fcb77c5b8050a4c0f1145a68dce585ea371681",
    "bytes": 721164,
    "status": "text_extracted",
    "last_modified_ns": 1789867161843013600,
    "pages": 12,
    "low_text_pages": [],
    "text_chars": 21272,
    "identical_to": "S301",
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S267",
      "S301"
    ]
  },
  {
    "id": "U021",
    "path": "培训材料/PVT技术分享文档/MT8676_Yocto_AEE_User_Manual_V1.0.pdf",
    "name": "MT8676_Yocto_AEE_User_Manual_V1.0.pdf",
    "sha256": "7ace10c5983949c671b67b679cf443518e6850e9fd4aa6c1c38383b9e97e7d13",
    "bytes": 617725,
    "status": "text_extracted",
    "last_modified_ns": 1789867149546715900,
    "pages": 9,
    "low_text_pages": [],
    "text_chars": 17539,
    "identical_to": "S268",
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S268"
    ]
  },
  {
    "id": "U022",
    "path": "培训材料/PVT技术分享文档/MT86xx+Workshop+Tbox.pdf",
    "name": "MT86xx+Workshop+Tbox.pdf",
    "sha256": "6e1afbe19015438d4d0a0a9e70ebabbb5b50c0049acaf77ddbd03014d048bcda",
    "bytes": 630887,
    "status": "text_extracted",
    "last_modified_ns": 1789867163160436800,
    "pages": 7,
    "low_text_pages": [],
    "text_chars": 3229,
    "identical_to": "S269",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S269"
    ]
  },
  {
    "id": "U023",
    "path": "培训材料/PVT技术分享文档/MTK+Audio+技术培训材料.pdf",
    "name": "MTK+Audio+技术培训材料.pdf",
    "sha256": "09d7c99d2c2afeb6e790e50f90c599726f6c18073e8aa7af2982ac2e357620e8",
    "bytes": 6921113,
    "status": "text_extracted",
    "last_modified_ns": 1789867161133169500,
    "pages": 26,
    "low_text_pages": [
      1,
      2,
      3,
      5,
      7,
      9,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ],
    "text_chars": 3029,
    "identical_to": "S270",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S270"
    ]
  },
  {
    "id": "U024",
    "path": "培训材料/PVT技术分享文档/MTK86系列平台安全启动详细设计说明资料.zip",
    "name": "MTK86系列平台安全启动详细设计说明资料.zip",
    "sha256": "ee34dd854e097e7a464a3ac5c5d85ed298a7be37464c648c5135dae10de9744a",
    "bytes": 3779644,
    "status": "inventory_only",
    "last_modified_ns": 1789867159905384100,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S271"
    ]
  },
  {
    "id": "U025",
    "path": "培训材料/PVT技术分享文档/MTK_Log_SOS_dump_uos_pstore.pdf",
    "name": "MTK_Log_SOS_dump_uos_pstore.pdf",
    "sha256": "a0ea4cd59f56e118b78ce53b3ee40288de210e19251ea3c74d05882fb0947e36",
    "bytes": 312617,
    "status": "text_extracted",
    "last_modified_ns": 1789867160734279100,
    "pages": 11,
    "low_text_pages": [],
    "text_chars": 6125,
    "identical_to": "S272",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S272"
    ]
  },
  {
    "id": "U026",
    "path": "培训材料/PVT技术分享文档/MTK_Log_SOS_shutdown_pstore_dump_to_BLK.pdf",
    "name": "MTK_Log_SOS_shutdown_pstore_dump_to_BLK.pdf",
    "sha256": "1e4d22f0c69a0f542704bc09553953323cfe961f09b1f038be160d344de1ebe5",
    "bytes": 524953,
    "status": "text_extracted",
    "last_modified_ns": 1789867149130506600,
    "pages": 10,
    "low_text_pages": [],
    "text_chars": 4332,
    "identical_to": "S273",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S273"
    ]
  },
  {
    "id": "U027",
    "path": "培训材料/PVT技术分享文档/MTK平台网络配置.pdf",
    "name": "MTK平台网络配置.pdf",
    "sha256": "a7e4b3132313dbd1482d5c999455eee62dd17af84bed605ab6f8b9d2b19d43b5",
    "bytes": 112371,
    "status": "text_extracted",
    "last_modified_ns": 1789867153783938600,
    "pages": 6,
    "low_text_pages": [],
    "text_chars": 10401,
    "identical_to": "S274",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S274",
      "U001"
    ]
  },
  {
    "id": "U028",
    "path": "培训材料/PVT技术分享文档/Mtrace Tool 使用说明.docx",
    "name": "Mtrace Tool 使用说明.docx",
    "sha256": "107ee51d6420420a0aca0cf1104b384ff5e80977ef5f51f7d34e80ae3df047b9",
    "bytes": 2676619,
    "status": "xml_text_extracted",
    "last_modified_ns": 1789867164110879200,
    "parts": 1,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "06-Android内部机制与稳定性.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "U029",
    "path": "培训材料/PVT技术分享文档/PCIE DEBUG GUIDE.pdf",
    "name": "PCIE DEBUG GUIDE.pdf",
    "sha256": "3e6385ac82abc82c1286b53e3f015e732b31f900aae44a4c638b0dfa6dd910b5",
    "bytes": 3837135,
    "status": "text_extracted",
    "last_modified_ns": 1789867155032787200,
    "pages": 12,
    "low_text_pages": [
      8
    ],
    "text_chars": 4871,
    "identical_to": "S275",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S275"
    ]
  },
  {
    "id": "U030",
    "path": "培训材料/PVT技术分享文档/PVT经验教训记录表.pdf",
    "name": "PVT经验教训记录表.pdf",
    "sha256": "9fb78cf7bec9df016456df891e313b2d4444442dd1dff40545ddda65c38437b2",
    "bytes": 3864030,
    "status": "text_extracted",
    "last_modified_ns": 1789867149120010300,
    "pages": 3,
    "low_text_pages": [],
    "text_chars": 8458,
    "identical_to": "S276",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S276"
    ]
  },
  {
    "id": "U031",
    "path": "培训材料/PVT技术分享文档/SF_debug方法.pdf",
    "name": "SF_debug方法.pdf",
    "sha256": "843085143d8a62a45daf1bbfbb26fb322561216b5a86674c29e3d87b706afaa8",
    "bytes": 2544493,
    "status": "text_extracted",
    "last_modified_ns": 1789867153368930200,
    "pages": 11,
    "low_text_pages": [
      1,
      5,
      11
    ],
    "text_chars": 2211,
    "identical_to": "S277",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S277"
    ]
  },
  {
    "id": "U032",
    "path": "培训材料/PVT技术分享文档/T-Hyper+CPU+调度说明.pdf",
    "name": "T-Hyper+CPU+调度说明.pdf",
    "sha256": "35d787f62e6dc5e094e3cde15485ba6502a3f1dcddc84074e3ee224b25a7d45f",
    "bytes": 190382,
    "status": "text_extracted",
    "last_modified_ns": 1789867151100147400,
    "pages": 6,
    "low_text_pages": [
      1
    ],
    "text_chars": 4545,
    "identical_to": "S278",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S278"
    ]
  },
  {
    "id": "U033",
    "path": "培训材料/PVT技术分享文档/tbox整车无网络案例分享.pdf",
    "name": "tbox整车无网络案例分享.pdf",
    "sha256": "3c456da9d243acbc7ac0efdb5a5f8818f20d55f759909a8c42a810c83ae35266",
    "bytes": 1362984,
    "status": "text_extracted",
    "last_modified_ns": 1789867152714764800,
    "pages": 12,
    "low_text_pages": [
      1
    ],
    "text_chars": 10119,
    "identical_to": "S279",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S279"
    ]
  },
  {
    "id": "U034",
    "path": "培训材料/PVT技术分享文档/TBOX未登录TSP.pdf",
    "name": "TBOX未登录TSP.pdf",
    "sha256": "839d3d6f2a0d72c15285e214af5c02f97939a3ca3108103e1e649fe2d6f23617",
    "bytes": 2949549,
    "status": "text_extracted",
    "last_modified_ns": 1789867151106953500,
    "pages": 15,
    "low_text_pages": [
      1,
      2,
      12,
      13
    ],
    "text_chars": 3412,
    "identical_to": "S280",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S280"
    ]
  },
  {
    "id": "U035",
    "path": "培训材料/PVT技术分享文档/vehicle方案.pdf",
    "name": "vehicle方案.pdf",
    "sha256": "398af5949db91dae695f03dc12fe6a1125e8e8acc154e0e6874dd2869387836c",
    "bytes": 1117561,
    "status": "text_extracted",
    "last_modified_ns": 1789867150485811800,
    "pages": 6,
    "low_text_pages": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "text_chars": 177,
    "identical_to": "S281",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S281"
    ]
  },
  {
    "id": "U036",
    "path": "培训材料/PVT技术分享文档/vmnet配置说明.pdf",
    "name": "vmnet配置说明.pdf",
    "sha256": "01e41793db8db378ddee9543e6411426ec130334c2733edc59369a9332718f92",
    "bytes": 463452,
    "status": "text_extracted",
    "last_modified_ns": 1789867150106642700,
    "pages": 8,
    "low_text_pages": [],
    "text_chars": 8773,
    "identical_to": "S282",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S282"
    ]
  },
  {
    "id": "U037",
    "path": "培训材料/PVT技术分享文档/vosck使用案例.rar",
    "name": "vosck使用案例.rar",
    "sha256": "ebfa2518d1122b55709ba61ea93589d126756f1e8bb74ce1b79ba4e0664a149a",
    "bytes": 355737,
    "status": "inventory_only",
    "last_modified_ns": 1789867150097474900,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "U038",
    "path": "培训材料/PVT技术分享文档/Vsock api 文档v2.0.pdf",
    "name": "Vsock api 文档v2.0.pdf",
    "sha256": "dff007dcc6b0465339e9753e3b513fbac5d40cf2fbaf43c88b79b1319fa882fe",
    "bytes": 345846,
    "status": "text_extracted",
    "last_modified_ns": 1789867143610918700,
    "pages": 13,
    "low_text_pages": [],
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "05-通信机制与异常诊断基础.md",
        "pages": "9-13"
      },
      {
        "chapter": "13-通信模块业务流程.md",
        "pages": "4-13"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "4-13"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "11-13"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "9-10"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "U039",
    "path": "培训材料/PVT技术分享文档/weston介绍和应用.pdf",
    "name": "weston介绍和应用.pdf",
    "sha256": "b41e1bc5892288f9a50f80d3c54938f6f400824083fd6a4c6bb3a6f6406c1402",
    "bytes": 1251113,
    "status": "text_extracted",
    "last_modified_ns": 1789867074745302300,
    "pages": 19,
    "low_text_pages": [
      2,
      19
    ],
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "04-三图模块字典.md",
        "pages": "9-14"
      },
      {
        "chapter": "07-SOS-Yocto内部机制.md",
        "pages": "9-18"
      },
      {
        "chapter": "11-显示相机与驾驶辅助业务流程.md",
        "pages": "9-14"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "4-14"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "15-18"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "U040",
    "path": "培训材料/PVT技术分享文档/Yocto SELinux Introduction(8676).pdf",
    "name": "Yocto SELinux Introduction(8676).pdf",
    "sha256": "c94a6f788bd31105c1d7e7a76c5d3d8849c2934367d6c63d610f8da290c62a93",
    "bytes": 1125010,
    "status": "text_extracted",
    "last_modified_ns": 1789867074748920700,
    "pages": 12,
    "low_text_pages": [],
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "E002"
    ]
  },
  {
    "id": "U041",
    "path": "培训材料/PVT技术分享文档/低速总线虚拟化配置.pdf",
    "name": "低速总线虚拟化配置.pdf",
    "sha256": "86df72575171659a2d7358b2025d0b8c1b9d418b01353cefd7a7cf0c622e485c",
    "bytes": 339367,
    "status": "text_extracted",
    "last_modified_ns": 1789867148688742300,
    "pages": 12,
    "low_text_pages": [
      2
    ],
    "text_chars": 9738,
    "identical_to": "S283",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S283"
    ]
  },
  {
    "id": "U042",
    "path": "培训材料/PVT技术分享文档/全虚拟化和半虚拟化GPU差异.pdf",
    "name": "全虚拟化和半虚拟化GPU差异.pdf",
    "sha256": "9b473bff31553b7feaf6957d35dad75ff689be60103328881c7eade1ebed93ba",
    "bytes": 811674,
    "status": "text_extracted",
    "last_modified_ns": 1789867145908374100,
    "pages": 4,
    "low_text_pages": [],
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "02-整机与虚拟化架构.md",
        "pages": "4"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "1-4"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "U043",
    "path": "培训材料/PVT技术分享文档/刷机后无网络.pdf",
    "name": "刷机后无网络.pdf",
    "sha256": "9eae122081b6b7a9fe905370c74db60d2b566f058f1d0f249771b1966136f670",
    "bytes": 2481095,
    "status": "text_extracted",
    "last_modified_ns": 1789867144600036700,
    "pages": 12,
    "low_text_pages": [
      1,
      2
    ],
    "text_chars": 2933,
    "identical_to": "S284",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S284"
    ]
  },
  {
    "id": "U044",
    "path": "培训材料/PVT技术分享文档/常用日志说明.url",
    "name": "常用日志说明.url",
    "sha256": "3ffcd662cc344638878828546d7fa476498e1c6fa823c90bc49d2e7c32dc0fa2",
    "bytes": 115,
    "status": "inventory_only",
    "last_modified_ns": 1789867073351181100,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "U045",
    "path": "培训材料/PVT技术分享文档/汇报材料--软件开发培训-音视频解码常见问题及分析.pdf",
    "name": "汇报材料--软件开发培训-音视频解码常见问题及分析.pdf",
    "sha256": "0f87b2ff1abcc12b6de413722a24d38e5385908cab007e619745e368b6cbf6c7",
    "bytes": 2201006,
    "status": "text_extracted",
    "last_modified_ns": 1789867148675349600,
    "pages": 13,
    "low_text_pages": [
      1,
      4,
      13
    ],
    "text_chars": 9245,
    "identical_to": "S286",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": [
      "S286"
    ]
  },
  {
    "id": "U046",
    "path": "培训材料/PVT技术分享文档/汇报材料--软件开发培训.pptx",
    "name": "汇报材料--软件开发培训.pptx",
    "sha256": "ff3311f490ffb66b751d65fea09dfab209f06b6a83d0fb3ccfe12cb1a698f075",
    "bytes": 17403804,
    "status": "xml_text_extracted",
    "last_modified_ns": 1789867148030781000,
    "parts": 8,
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "未分页：章节/图示/文档标题或文本核对，非全文逐页核验"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "U047",
    "path": "培训材料/PVT技术分享文档/软件开发培训-音视频解码常见问题及分析.pdf",
    "name": "软件开发培训-音视频解码常见问题及分析.pdf",
    "sha256": "c31539cad8dd6a236d4ba79ec38313309d74cde4b059e1ecad2030b04cca6963",
    "bytes": 881712,
    "status": "text_extracted",
    "last_modified_ns": 1789867144760809000,
    "pages": 13,
    "low_text_pages": [
      1,
      2,
      13
    ],
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "本地资料；厂商/项目/教学属性以正文为准",
    "used_in": [
      {
        "chapter": "06-Android内部机制与稳定性.md",
        "pages": "6-10"
      },
      {
        "chapter": "15-统一诊断手册.md",
        "pages": "6-10"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "8"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "6-11"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "6-10"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "9"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "E001",
    "name": "expdb.pdf",
    "path": "架构知识——中文版/assets/培训解包/expdb.pdf",
    "bytes": 227638,
    "sha256": "13e2c1ede76eff9771a7fa8a5161ac558ef2e14d3b92567ee58d0829daeb0cbb",
    "pages": 3,
    "status": "text_extracted",
    "low_text_pages": [],
    "archive_source": "培训材料/PVT技术分享文档/系统稳定性资料分享.rar",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "解包培训文档",
    "used_in": [
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "1-3"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "E002",
    "name": "Yocto SELinux Introduction(8676).pdf",
    "path": "架构知识——中文版/assets/培训解包/Yocto SELinux Introduction(8676).pdf",
    "bytes": 1125010,
    "sha256": "c94a6f788bd31105c1d7e7a76c5d3d8849c2934367d6c63d610f8da290c62a93",
    "pages": 12,
    "status": "text_extracted",
    "low_text_pages": [],
    "archive_source": "培训材料/PVT技术分享文档/奇瑞项目Yocto SELinux 介绍 资料.zip",
    "platform": "MT8676",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "解包培训文档",
    "used_in": [
      {
        "chapter": "07-SOS-Yocto内部机制.md",
        "pages": "4-9"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "4-9"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": [
      "U040"
    ]
  },
  {
    "id": "E003",
    "name": "使用page_owner定位内存泄露.pdf",
    "path": "架构知识——中文版/assets/培训解包/使用page_owner定位内存泄露.pdf",
    "bytes": 2936288,
    "sha256": "546da9ebec126b2f4d289b7999276ee73d67700c27cf8de408b8cd6045d1d40b",
    "pages": 12,
    "status": "text_extracted",
    "low_text_pages": [
      1,
      5
    ],
    "archive_source": "培训材料/PVT技术分享文档/使用page_owner定位内存泄露.rar",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "解包培训文档",
    "used_in": [
      {
        "chapter": "06-Android内部机制与稳定性.md",
        "pages": "3-8"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "3-8"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "3-8"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "E004",
    "name": "多系统稳定性分析讲解.pdf",
    "path": "架构知识——中文版/assets/培训解包/多系统稳定性分析讲解.pdf",
    "bytes": 3858852,
    "sha256": "eac023f513faf6e3c66b700aa5b0d9579a806c5cfbb90e9bd70ea5b2b34420b9",
    "pages": 20,
    "status": "text_extracted",
    "low_text_pages": [
      1,
      4,
      6,
      7,
      10,
      20
    ],
    "archive_source": "培训材料/PVT技术分享文档/系统稳定性资料分享.rar",
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "解包培训文档",
    "used_in": [],
    "review_scope": "清点/提取，未作为本次核心结论直接引用",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "E005",
    "name": "EINT_IDH_Share.pdf",
    "path": "架构知识——中文版/assets/培训解包/EINT_IDH_Share.pdf",
    "bytes": 1063915,
    "sha256": "faa5a4d5b54d6d23ed7c826083206cf599b66719fc772c00b596877416363b04",
    "pages": 30,
    "status": "text_extracted",
    "archive_source": "培训材料\\PVT技术分享文档\\EINT培训.rar",
    "low_text_pages": [],
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "解包培训文档",
    "used_in": [
      {
        "chapter": "08-MCU内部机制.md",
        "pages": "3-8"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "3-8"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "E006",
    "name": "FAQ13938.pdf",
    "path": "架构知识——中文版/assets/培训解包/FAQ13938.pdf",
    "bytes": 99813,
    "sha256": "248425f20229b6a3e86613bdf44e2154723156b42ac1f491c32752c90a70fe4f",
    "pages": 2,
    "status": "text_extracted",
    "archive_source": "培训材料\\PVT技术分享文档\\EINT培训.rar",
    "low_text_pages": [
      2
    ],
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "解包培训文档",
    "used_in": [
      {
        "chapter": "08-MCU内部机制.md",
        "pages": "1-2"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "1-2"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "E007",
    "name": "vsock使用案例.pdf",
    "path": "架构知识——中文版/assets/培训解包/vsock使用案例.pdf",
    "bytes": 1124680,
    "sha256": "da4a4df6d11ed0f841d6df09934d89791fa7d01f2b5d9f406a58b7d61dd0227b",
    "pages": 5,
    "status": "text_extracted",
    "archive_source": "培训材料\\PVT技术分享文档\\vosck使用案例.rar",
    "low_text_pages": [
      1,
      5
    ],
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "解包培训文档",
    "used_in": [
      {
        "chapter": "05-通信机制与异常诊断基础.md",
        "pages": "3-4"
      },
      {
        "chapter": "20-跨域通信时间同步与状态一致性.md",
        "pages": "3-4"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "E008",
    "name": "MTK86系列平台基于虚拟化op-tee使用手册.pdf",
    "path": "架构知识——中文版/assets/培训解包/MTK86系列平台基于虚拟化op-tee使用手册.pdf",
    "bytes": 1789002,
    "sha256": "74cc3cab4e67604fbb1a0fc11e175a823e9cec506bf306139749fc589ca7ac59",
    "pages": 14,
    "status": "text_extracted",
    "archive_source": "培训材料\\PVT技术分享文档\\MTK86系列平台安全启动详细设计说明资料.zip",
    "low_text_pages": [
      14
    ],
    "platform": "待正文/版本确认",
    "platform_tag_basis": "仅用于检索的文件名候选；事实以正文和本版章节限定为准",
    "source_kind": "解包培训文档",
    "used_in": [
      {
        "chapter": "07-SOS-Yocto内部机制.md",
        "pages": "3-6"
      },
      {
        "chapter": "14-系统生命周期业务流程.md",
        "pages": "3-6"
      },
      {
        "chapter": "23-PVT实战诊断与工程验证.md",
        "pages": "3-6"
      }
    ],
    "review_scope": "有引用的指定页/文本核对；未宣称全文逐页审阅",
    "visual_review_pages": [],
    "same_hash_ids": []
  },
  {
    "id": "MBOS-20260920",
    "name": "盟博OS架构-用户提供-20260920.png",
    "path": "架构知识——中文版/assets/盟博OS架构-用户提供-20260920.png",
    "bytes": 948248,
    "status": "image_visually_reviewed",
    "platform": "待确认",
    "source_kind": "用户项目架构图",
    "sha256": "483f713d25d6094ceb5d20892e23818990f1fee3d3ef99d373f2b8737cb83b73",
    "used_in": [],
    "review_scope": "图片已目视核对",
    "visual_review_pages": [],
    "same_hash_ids": []
  }
]


---
# SRC0047 P5B系列车规级模组产品规格书_v2.0_20260629.pdf

来源：8668/PVT参考资料/P5B系列车规级模组产品规格书_v2.0_20260629.pdf

SHA-256：d6b8534c01933235774797130370b94072100c95d297469265f03ea62e8d4f5f

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0047.html)

## PDF物理页 1

掌锐机密，未经许可不得扩散
专业车联网智能硬件方案提供商
P 5 B 系 列 前 装 车 规 无 线 模 块 规 格 书
版 本：V2.1
发布日期：2026/6/29

## PDF物理页 2

掌锐机密，未经许可不得扩散
修订记录
序号 版本 时间 修订内容 修订人
1 V1.0 2025/10/30 初拟 Caoyating
2 V1.1 2025/12/18 PIN 定义更新 Caoyating
3 V1.2 2026/1/16 GPU、DSP 参数更新 Caoyating
4 V1.3 2026/4/17 更新 USB 接口数量、工作温度信息 Caoyating
5 V2.0 2026/6/23 更新 PIN 描述、参数规格、网络频段、天线
接口信息
Caoyating
6 V2.1 2026/6/29 注明 RX only 频段 Caoyating

## PDF物理页 3

掌锐机密，未经许可不得扩散
1 / 33
目录
1. 产品综述 ................................................................................................................. 2
2. 产品规格参数 ........................................................................................................ 3
3. 突出亮点及特性 ....................................................................................................8
4. 模块方框图 .............................................................................................................9
5. 模块引脚定义 ........................................................................................................ 9
6. 模块引脚分布图 ................................................................................................. 29
7. 模块尺寸图 .......................................................................................................... 30
8. 天线接口说明 ......................................................................................................31

## PDF物理页 4

掌锐机密，未经许可不得扩散
2 / 33
1. 产品综述
P5B系 列 是 掌 锐 电 子 推 出 的 一 款 高 性 能 车 规 级 5G智 能 座 舱 核 心 板 。
本 模 块 基 于 MediaTek MT8668平 台 ， 严 格 遵 循 AEC-Q104标 准 设 计 ， 集
成 了 5G 、 GNSS、 Wi-Fi 6E与 蓝 牙 5.4等 多 种 无 线 通 信 功 能 和 DSP数 字 音
频 处 理 器 。具 备 尺 寸 紧 凑 、功 耗 低 、性 能 优 越 等 特 点 ，基 于 Hypervisor
3OS架 构 可 灵 活 实 现 多 屏 互 联 、仪 表 投 屏 、HUD、T-Box、AVM、DMS、
OMS及 DVR等 丰 富 智 能 座 舱 应 用 ，全 面 满 足 汽 车 智 能 化 与 网 联 化 的 发 展
需 求 ， 助 力 客 户 大 幅 缩 短 开 发 周 期 ， 有 效 降 低 研 发 成 本 。
P5B系 列 有 多 个 型 号 ， 在 RF版 本 、 频 段 区 域 、 存 储 以 及 SOC规 格 均
可 按 需 选 配 ， 帮 助 客 户 精 准 控 制 成 本 、 打 造 具 有 市 场 竞 争 力 的 车 载 终
端 解 决 方 案 ， 以 应 对 不 同 场 景 的 严 苛 要 求 。
本 模 块 采 用 贴 片 式 工 艺 ， 共 580个 BGA引 脚 。 搭 载 4nm低 功 耗 主 控
SOC，采 用 64位 8核 处 理 器 ，ARM V9 CPU架 构 ，多 个 算 力 版 本 。ARM GPU
MC2 Manhattan 3.0:118.5fps 高 性 能 图 形 图 像 处 理 能 力 以 及 10+ TOPS
的 AI算 力 赋 能 各 类 智 能 应 用 。

## PDF物理页 5

掌锐机密，未经许可不得扩散
3 / 33
2. 产品规格参数
产品特性 描述
SoC MediaTek MT8668
CPU
8 核 ARM V9
算力：120K\150K\180K DMIPS(规划中)
GPU
GPU MC2 Manhattan 3.0:118.5fps
算力：630G FLOPS
APU
MediaTek Deep Learning Accelerator (MDLA)
算力：6\12.5 TOPS
SCP
MediaTek MRV55*2
Built-in 1.25 MB Tightly Coupled Memory (TC)
DDR
LPDDR5x ,32bit，Max 7500Mbps,最大支持 24GB
8G（规划中）\12G\16G
Flash
UFS 3.1 2-lane ，数据速率最高达 23.296 Gbps.
64GB（规划中）\128G\256G
OS（Hypervisor） Yocto(SOS) + Yocto(UOS) + Android B(UOS)
工作温度 – 40 度～＋85 度
存储温度 – 40 度～＋95 度
尺寸 59.5mm * 59.5mm *5.6mm
工艺 BGA；Underfill(规划中)
工作电压 DC 3.8V-4.2V Type：4.0V

## PDF物理页 6

掌锐机密，未经许可不得扩散
4 / 33
网
络
频
段
中国版
不覆盖中国台湾/香港
GSM： 900/1800MHz
WCDMA： B1/B5/B8
FDD-LTE： B1/B3/B5/B8
TDD-LTE： B34/B38/B39/B40/B41
NR： N1/N3/N5/N8/N28A/N41/N78/N79
亚欧非版
GSM： 900/1800MHz
WCDMA： B1/B5/B8
FDD-LTE： B1/B2/B3/B4/B5/B6/B7/B8/B20/B28
TDD-LTE： B32/B38/B40/B41
NR： N1/N3/N5/N7/N8/N28/N38/N40/N41/N77/N78/N79
全球版
GSM： 850/900/1800/1900MHz
WCDMA： B1/B2/B4/B5/B6/B8/B19
FDD-LTE：
B1/B2/B3/B4/B5/B7/B8/B12/B13/B14/B17
B18/B19/B20/B25/B26/B28/B32/B66/B75(RX only)/B76(RX
only)
TDD-LTE： B32(RX only)/B34/B38/B39/B40/B41/B42/B43
FDD NRSA：
N1/N2/N3/N5/N7/N8/N20/N25/N28/N66/N71/N75(RX
only)/N76(RX only)
TDD NRSA： N38/N40/N41/N77/N78/N79
网络制式 5G NR Sub6 3CC R16，LTE CAT-18
5G SA： 1.9 Gbps(DL)/450 Mbps(UL)
5G NSA： 1.1 Gbps(DL)/175 Mbps(UL)

## PDF物理页 7

掌锐机密，未经许可不得扩散
5 / 33
网络速率 LTE FDD： 300 Mbps(DL)/75 Mbps(UL)
LTE TDD： 260 Mbps(DL)/75 Mbps(UL)
WCDMA 21 Mbps (DL)/11.5 Mbps(UL)
Wi-Fi
• Wi-Fi 6E 标准，兼容旧版 Wi-Fi 规范（Wi-Fi 5/4）
• 双频段支持（2.4GHz 与 5~6GHz 频段），DBDC
• 根据配套连接芯片性能，提供 2x2/1x1 双模/单模配置，
带宽达 80MHz
• 集成 2.4GHz 与 5GHz 功率放大器/低噪声放大器
• 支持 Joint-Tas 2.0 协议
• 天线分组技术
• 安全协议：
− WPA 个人/企业版
− WPA2 个人/企业版
− WPA3 个人/企业版
− WPS2.0
− WPI-SMS4
− WAPI（硬件）
Bluetooth
支持 Bluetooth v5.4
支持 BLE Audio
GNSS
• GPS L1CA + L5
• BeiDou B1I + B2a
• Glonass L1OF

## PDF物理页 8

掌锐机密，未经许可不得扩散
6 / 33
• Galileo E1 + E5a
• QZSS L1CA + L1CB + L5
• NavIC N1+N5
IMU ICM-42607-P 等(可选)
SIM 双 SIM 卡，支持热插拔
TF 卡 支持 SD/SDIO 3.0，最大支持 2T
LCM
• 2*4-lane DSI，2.5Gbps/lane；最高支持 (3K*2 or FHD*4)
• MiraVision™图像质量增强
• 支持 D-PHY 4+4 通道 MIPI DSI 发射器
• 嵌入式 LCD 伽马校正
• 真 10bit 色彩
• 8 层叠加图层，支持每像素 Alpha 通道和伽马表
• 2 个覆盖层，应在告示牌上使用
• 支持 GPU 解码器(AFBC)
• 支持 DSC 压缩
Camera
• 4*4-lane CSI-D-PHY，4.5Gbps/lane
• 多摄像头(8 个 YUV 传感器+1 个 DP2CSI)
− SVM [2.1MP+ 2.1MP + 2.1MP + 2.1MP] @ 30 fps
− RVM[2.1MP]@ 60 fps
− DMS [2.1MP] @ 30 fps
− OMS [2.1MP] @ 30 fps
− DVR[2.1MP]@ 30 fps

## PDF物理页 9

掌锐机密，未经许可不得扩散
7 / 33
− DP2CSI[2.1MP] @ 30fps
• 支持 YUV 422 8/10/12bit 及 RGB888 格式输入
• MIPI CSI-2 高速摄像头串行接口;最多支持 4 条 D-DHY 数
据通道
Video decode
AV1：
▪ 主配置 4K2K@30 fps/100Mbps，8/10bits
HEVC：
▪ 主配置 4K2K@30 fps/100Mbps，8bits
▪ 主 10 配置 4K2K@30 fps/100Mbps，10bits
VP9：
▪ 配置 0 4K2K@30 fps/100Mbps，8bits
▪ 配置 2 4K2K@30 fps/100Mbps，10bits
AVC：
▪ 限制基线 4K2K@30 fps/100Mbps，8bits
▪ 主/高配置 4K2K@30 fps/100Mbps，8bits
▪ 渐进式高 10 配置 4K2K@30 fps/100Mbps，10bits
HEIF：
▪ 最大分辨率 16,383×16,383，8/10bits
Video encode
H.264：
▪8 位高画质 3840×2160@30 fps，100 Mbps 传输速率
HEVC ：
▪10 位主画质 3840×2160@30 fps，100 Mbps 传输速率

## PDF物理页 10

掌锐机密，未经许可不得扩散
8 / 33
HEIF：
▪支持最高分辨率与图像规格保持一致
模
组
对
外
接
口
I2C x13
SPI x6
I2S(INPUT) x4
I2S(OUTPUT) x2
TDM(IN/OUTPUT) x1
UART x4
SIM x2
SD Card x1
PWM x6
USB3.0 x1
PCIE GEN3 x1
GPIO xN
3. 突出亮点及特性
 内置 T-box，集成符合法规要求的 eCall 功能，并搭载 eCall ECNR 算法
 通信能力支持 5G NR Sub6 3CC R16 与 4G LTE-Cat18，同时向下兼容 2G/3G 网络
 内置双核 DSP 数字音频处理器，提升音频处理性能
 采用 Hypervisor 系统架构，支持多系统并行运行（L+L+A）
 支持 4 路显示输出（IVI、Cluster、HUD），实现多屏异显功能
 具备 8 路摄像头同时接入能力，支持 AVM、DMS、OMS、DVR 及游戏投屏应用
 集成 LPDDR5x、UFS 3.1 多品牌、容量型号选配

## PDF物理页 11

掌锐机密，未经许可不得扩散
9 / 33
 集成 WiFi6E、蓝牙 5.4 与 GNSS L1+L5 多频定位
 严格遵循 IATF 16949 质量体系标准
 产品开发过程符合 ASPICE 流程要求
4. 模块方框图
5. 模块引脚定义
1)MT8668 中所有 SPI,I2C,UART,I2S,GPIO,EINT,TDM 口电压域都是 1.8V，请注意电压匹配
2)SIM2（IO/RST/CLK）未使时可以做 GPIO（1.8V 电压域）使用。
3)T 卡 data/cmd/clk/rst 接口默认为 SDIO 模式，不使用 TF 卡时可以当做 GPIO(1.8V 电压域)使用。
MT8668
芯片 PIN 模块 PIN 模块定义 描述&备注
1 D_GND
AK2 2 CSI2B_L0N_T0B MIPI CSI2B 的 DATA1-N
AK1 3 CSI2B_L0P_T0A MIPI CSI2B 的 DATA1-P
4 D_GND

## PDF物理页 12

掌锐机密，未经许可不得扩散
10 / 33
AL3 5 CSI2A_L2P_T1B MIPI CSI2A 的 CLK-P
AL4 6 CSI2A_L2N_T1C MIPI CSI2A 的 CLK-N
AJ4 7 CSI2A_L0N_T0B MIPI CSI2A 的 DATA2-N
AJ5 8 CSI2A_L0P_T0A MIPI CSI2A 的 DATA2-P
9 D_GND
10 D_GND
11 D_GND
12 D_GND
MT6363_L
12 13 VIO18_PMU_SIP 系统 IO 电平 1.8V 供电输出,300MA
AK4 14 CSI2A_L1P_T0C MIPI CSI2A 的 DATA0-P
AK5 15 CSI2A_L1N_T1A MIPI CSI2A 的 DATA0-N
AL1 16 CSI2B_L1N_T1A MIPI CSI2B 的 DATA3-N
AL2 17 CSI2B_L1P_T0C MIPI CSI2B 的 DATA3-P
AR9 18 CAM_SDA9 CAM_SDA9,GPIO140;默认配置为 URXD2 可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
AT9 19 CAM_SCL9 CAM_SCL9,GPIO139;默认配置为 UTXD2 可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
V34 20 SCL1 I2C1 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
21 D_GND
22 D_GND
V33 23 SDA1 I2C1 的 SDA, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AM25 24 EINT13 GPIO13,EINT13; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
T2 25 ANT_SEL5 GPIO99,EINT99, 默 认 配 置 为 I2SIN6_DI2, 可 以 复 用 成 其 它
Func,请参考 MT8668_GPIO_Application_Spec 表格
26 D_GND
27 D_GND
AM2 28 CSI1A_L0P_T0A MIPI CSI1A 的 DATA2-P
AM3 29 CSI1A_L0N_T0B MIPI CSI1A 的 DATA2-N
AP11 30 SCL10 I2C10 的 SCL,默认配置为 UCTS2,可以复用成其它 Func,请参
考 MT8668_GPIO_Application_Spec 表格
AT8 31 CAM_SCL8 I2C8 的 SCL,I3C8 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AE2 32 CAM_CLK3
默认配置是 CAM_CLK3,若要复用成 GPIO69 请注意修改软
件 ; 此 IO 口 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AN25 33 EINT14 GPIO14,EINT14; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AN8 34 CAM_RST3 CAM_RST3;GPIO65,EINT65; 可 以复 用成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格

## PDF物理页 13

掌锐机密，未经许可不得扩散
11 / 33
AT12 35 AP_GOOD GPIO17,EINT17,AP_GOOD; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AU8 36 CAM_SDA8 I2C8 的 SDA,I3C8 的 SDA, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AR11 37 SDA10 I2C10 的 SDA,默认配置为 URTS2,可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
AM5 38 CSI1A_L1N_T1A MIPI CSI1A 的 DATA0-N
AM4 39 CSI1A_L1P_T0C MIPI CSI1A 的 DATA0-P
AN4 40 CSI1A_L2P_T1B MIPI CSI1A 的 CLK-P
AN5 41 CSI1A_L2N_T1C MIPI CSI1A 的 CLK-N
42 NC NC 脚，悬空
43 NC NC 脚，悬空
44 NC NC 脚，悬空
AP8 45 CAM_RST2 GPIO64,EINT64; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
46 D_GND
47 NC NC 脚，悬空
48 D_GND
AB7 49 SCP_SCL5 GPIO90,EINT90;默认配置为 I2SIN6_LRCK,可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
AP2 50 CSI1B_L0N_T0B MIPI CSI1B 的 DATA1-N
AP1 51 CSI1B_L0P_T0A MIPI CSI1B 的 DATA1-P
AP3 52 CSI1B_L1P_T0C MIPI CSI1B 的 DATA3-P
AR2 53 CSI1B_L1N_T1A MIPI CSI1B 的 DATA3-N
T5 54 ANT_SEL3 GPIO97,EINT97, 默 认 配 置 为 I2SIN6_DI, 可 以 复 用 成 其 它
Func 请参考 MT8668_GPIO_Application_Spec 表格
V2 55 SCP_SDA3 GPIO87,EINT87 默认配置为 I2SOUT6_DO;可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
AT22 56 I2S1_MCK GPIO74,EINT74 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
Y33 57 EINT5 GPIO5,EINT5;可以复用为 GPS_PPS,可以复用成其它 Func,
请参考 MT8668_GPIO_Application_Spec 表格
AR16 58 KPCOL0 KPCOL0,GPIO16,EINT16; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AU24 59 EINT7 GPIO7,EINT7; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
60 D_GND
W3 61 SCP_SCL3 GPIO86,EINT86;默认配置为 I2SIN6_BCK,可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
62 D_GND
63 D_GND
AU4 64 CSI0A_L2P_T1B MIPI CSI0A 的 CLK-P

## PDF物理页 14

掌锐机密，未经许可不得扩散
12 / 33
AU5 65 CSI0A_L2N_T1C MIPI CSI0A 的 CLK-N
AR26 66 BPI_D_BUS4 GPIO151;此 IO 口不能做中断功能,可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
Y2 67 SCP_SDA4 GPIO89,EINT89;默认配置为 I2SOUT6_DO2,可以复用成其
它 Func,请参考 MT8668_GPIO_Application_Spec 表格
MT6363_
G9 68 GPIO0_LGA_DAT_0 备用天线检测脚
69 NC NC 脚，悬空
AP13 70 PERI_EN2 GPIO115,EINT115; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
T4 71 ANT_SEL4 GPIO98,EINT98; 默 认 配 置 为 I2SIN6_DI1, 可 以 复 用 成 其 它
Func,请参考 MT8668_GPIO_Application_Spec 表格
AU7 72 CAM_CLK2
默认配置是 CAM_CLK2,若要复用成 GPIO68 请注意修改软
件 配 置 ， 此 IO 口 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AU25 73 BPI_D_BUS8 GPIO155;此 IO 口不能做中断功能;可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
AU3 74 CSI0A_L1N_T1A MIPI CSI0A 的 DATA0-N
AT3 75 CSI0A_L1P_T0C MIPI CSI0A 的 DATA0-P
AR3 76 CSI0A_L0P_T0A MIPI CSI0A 的 DATA2-P
AT2 77 CSI0A_L0N_T0B MIPI CSI0A 的 DATA2-N
AN12 78 URXD0 MT8668 UART0_RX,用于与外设数据通讯，建议用于 debug
AM12 79 UTXD0 MT8668 UART0_TX,用于与外设数据通讯，建议用于 debug
Y3 80 SCP_SCL4 GPIO88,EINT88;默认配置为 I2SOUT6_DO1,可以复用成其
它 Func,请参考 MT8668_GPIO_Application_Spec 表格
AU26 81 BPI_D_BUS5 GPIO152;此 IO 口不能做中断功能,可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
82 NC NC 脚，悬空
83 NC NC 脚，悬空
T32 84 JTRSTN_SEL1 JTRST,GPIO169,此 IO 口不能做中断功能;可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
U34 85 JTDI_SEL1 JTDI,GPIO173,此 IO 口不能做中断功能;可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
AR5 86 CSI0B_L0N_T0B MIPI CSI0B 的 DATA1-N
AR4 87 CSI0B_L0P_T0A MIPI CSI0B 的 DATA1-P
AP5 88 CSI0B_L1P_T0C MIPI CSI0B 的 DATA3-P
AP6 89 CSI0B_L1N_T1A MIPI CSI0B 的 DATA3-N
U33 90 JTMS_SEL1 JTMS,GPIO172,此 IO 口不能做中断功能;可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
T33 91 JTCK_SEL1 JTCK,GPIO171,此 IO 口不能做中断功能;可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
92 D_GND
93 NC NC 脚，悬空

## PDF物理页 15

掌锐机密，未经许可不得扩散
13 / 33
94 NC NC 脚，悬空
AT28 95 MIPI1_D_SCLK GPIO163;此 IO 口不能做中断,可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
AT24 96 EINT6 ACC 通 知 脚 ,GPIO6,EINT6, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
T34 97 JTDO_SEL1 JTDO,GPIO170,此 IO 口不能做中断功能;可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
98 D_GND
99 D_GND
AM23 100 EINT9 GPIO9,EINT9, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AR23 101 DISP_PWM GPIO61,EINT61, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
102 D_GND
W34 103 EINT3 IDDIG,EINT3,GPIO3; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AR28 104 MIPI1_D_SDATA GPIO164; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AB8 105 SCP_SDA5 GPIO91,EINT91;默认配置为 I2SOUT6_DO3,可以复用成其
它 Func,请参考 MT8668_GPIO_Application_Spec 表格
AT29 106 MIPI0_D_SCLK GPIO161;此 IO 口不能做中断,可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
AU28 107 MIPI2_D_SCLK GPIO165;此 IO 口不能做中断,可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
AA7 108 I2SIN2_MCK GPIO79,EINT79; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
109 D_GND
AM9 110 CAM_SDA7 I2C7 的 SDA, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
111 NC NC 脚，悬空
112 D_GND
AN9 113 CAM_SCL7 I2C7 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
114 D_GND
V32 115 SDA0 I2C0 的 SDA, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AR25 116 BPI_D_BUS7 GPIO154; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AT30 117 MIPI0_D_SDATA GPIO162; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
118 D_GND
U32 119 SCL0 I2C0 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格

## PDF物理页 16

掌锐机密，未经许可不得扩散
14 / 33
120 D_GND
121 NC NC 脚，悬空
AU29 122 MIPI2_D_SDATA GPIO166; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AE5 123 NFC_CLK_REQ GPIO52,EINT52 可 复 用 成 DISP_PWM1, 可 以 复 用 成 其 它
Func,请参考 MT8668_GPIO_Application_Spec 表格
124 NC NC 脚，悬空
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
139 ANT1 4G/5G 天线 1
140 D_GND
141 D_GND
142 D_GND
143 NC NC 脚，悬空
AT21 144 I2SOUT1_DO I2SOUT1_DO,EINT73,GPIO73;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
AU21 145 I2SIN1_DI I2S1_DI,EINT72,GPIO72; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
146 D_GND
147 D_GND
148 ECALL_BACKUP_AN
T5 ECALL_ANT5 备用天线
149 D_GND
AU22 150 I2SIN1_LRCK I2SIN1_LRCK,EINT71,GPIO71;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
AR21 151 I2SIN1_BCK I2SIN1_BCK,EINT70,GPIO70;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
152 D_GND
153 D_GND
154 NC NC 脚，悬空

## PDF物理页 17

掌锐机密，未经许可不得扩散
15 / 33
155 NC NC 脚，悬空
Y6 156 I2SOUT2_DO I2SOUT2_DO,EINT78,GPIO78;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
Y8 157 I2SIN2_DI I2SIN2_DI,EINT77,GPIO77; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
158 D_GND
159 D_GND
160 ANT0 4G/5G 天线 0
161 D_GND
AA8 162 I2SIN2_LRCK I2SIN2_LRCK,EINT76,GPIO76;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
Y7 163 I2SIN2_BCK I2SIN2_BCK,EINT75,GPIO75;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
164 NC NC 脚，悬空
165 NC NC 脚，悬空
166 D_GND
167 D_GND
R33 168 SPI4_MI EINT35,GPIO35; 默 认 配 置 为 I2SIN0_DI, 可 以 复 用 成 其 它
Func,请参考 MT8668_GPIO_Application_Spec 表格
169 NC NC 脚，悬空
170 D_GND
171 D_GND
172 NC NC 脚，悬空
173 D_GND
R30 174 SPI4_CSB EINT33,GPIO33;默认配置为 I2SIN0_LRCK,可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
R29 175 SPI4_CK EINT32,GPIO32;默认配置为 I2SIN0_BCK,可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
176 NC NC 脚，悬空
177 NC NC 脚，悬空
178 NC NC 脚，悬空
179 NC NC 脚，悬空
AT18 180 SDA6 I2C6 的 SDA, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AR18 181 SCL6 I2C6 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
182 D_GND
183 D_GND
184 ANT2 5G 天线 2
185 D_GND
186 D_GND
187 D_GND

## PDF物理页 18

掌锐机密，未经许可不得扩散
16 / 33
AP27 188 BPI_D_BUS1 GPIO148; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
V6 189 GPS_L1_ELNA_EN EINT92,GPIO92 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
190 NC NC 脚，悬空
MT6373_
H14 191 AVDD30_PMU AUDIO CODEC 芯片 MT6338 的供电 3.0V，不用请悬空
192 NC NC 脚，悬空
193 NC NC 脚，悬空
194 D_GND
195 D_GND
196 GYRO_SENTRY_INT GYRO_SENTRY_INT，IMU 中断脚通知底板，哨兵模式
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
N29 219 SPI5_CSB GPIO29,EINT29,默认配置为 FMI2SIN_LRCK,可以复用成其
它 Func,请参考 MT8668_GPIO_Application_Spec 表格
220 D_GND
221 D_GND
222 NC NC 脚，悬空
223 NC NC 脚，悬空
224 D_GND
AT26 225 NC NC 脚，悬空

## PDF物理页 19

掌锐机密，未经许可不得扩散
17 / 33
226 NC NC 脚，悬空
AN19 227 SCL3 I2C3 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
228 NC NC 脚，悬空
229 NC NC 脚，悬空
230 D_GND
231 D_GND
232 NC NC 脚，悬空
233 NC NC 脚，悬空
AR15 234 MSDC1_DATA0 SD1 卡 DATA0,GPIO55,EINT55;可以复用成其它 Func,请参
考 MT8668_GPIO_Application_Spec 表格
AT16 235 MSDC1_DATA3 SD1 卡 DATA3,GPIO58,EINT58;可以复用成其它 Func,请参
考 MT8668_GPIO_Application_Spec 表格
AM19 236 SDA3 I2C3 的 SDA, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
MT6373_
G12 237 VSIM2_PMU SIM 卡 2 供电输出, 1.86/2.9V 200MA
AN14 238 SIM2_SIO GPIO179 SIM 卡 2 的数据口,不用 SIM2 时可以当做 GPIO
口。
AM14 239 SIM2_SRST GPIO178 SIM 卡 2 的复位,GPIO178,不用 SIM2 时可以当做
GPIO 口。
AU16 240 MSDC1_DATA2 SD1 卡 DATA2,GPIO57,EINT57;可以复用成其它 Func,请参
考 MT8668_GPIO_Application_Spec 表格
AT15 241 MSDC1_DATA1 SD1 卡 DATA1,GPIO56,EINT56;可以复用成其它 Func,请参
考 MT8668_GPIO_Application_Spec 表格
242 NC NC 脚，悬空
243 NC NC 脚，悬空
J31 244 USB_DM USB2.0 DM
J30 245 USB_DP USB2.0 DP
AP15 246 MSDC1_CMD SD1 卡 CMD,GPIO54,EINT54;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
AU15 247 MSDC1_CLK SD1 卡 CLK,GPIO53,EINT53;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
AN15 248 SIM2_SCLK GPIO177 SIM 卡 2 的时钟,不用 SIM2 时可以当做 GPIO 口。
249 D_GND
MT6373_F
12 250 VSIM1_PMU SIM 卡 1 供电输出, 1.86/2.9V 200MA
AM15 251 SIM1_SCLK GPIO174 SIM 卡 1 的时钟
AN16 252 SIM1_SIO GPIO176 SIM 卡 1 的数据口
253 NC NC 脚，悬空
254 NC NC 脚，悬空
255 NC NC 脚，悬空

## PDF物理页 20

掌锐机密，未经许可不得扩散
18 / 33
256 NC NC 脚，悬空
257 D_GND
AM16 258 SIM1_SRST GPIO175 SIM 卡 1 的复位
259 D_GND
L30 260 SSUSB_TXP_P1 USB3.0 SSUSB_TXP_P1;
L31 261 SSUSB_TXN_P1 USB3.0 SSUSB_TXN_P1;
K28 262 SSUSB_RXN_P1 USB3.0 SSUSB_RXN_P1;
K29 263 SSUSB_RXP_P1 USB3.0 SSUSB_RXP_P1;
264 D_GND
265 D_GND
AF30 266 DSI1_D0N_T1A MIPI DSI1 的 D0N
AE30 267 DSI1_CK0N_T1C MIPI DSI1 的 CKN
268 D_GND
AE31 269 DSI1_CK0P_T1B MIPI DSI1 的 CKP
AF31 270 DSI1_D0P_T0C MIPI DSI1 的 D0P
AE34 271 DSI1_D1N_T2B MIPI DSI1 的 D1N
AE33 272 DSI1_D1P_T2A MIPI DSI1 的 D1P
AF33 273 DSI1_D2N_T0B MIPI DSI1 的 D2N
AF32 274 DSI1_D2P_T0A MIPI DSI1 的 D2P
275 D_GND
AD32 276 DSI1_D3P_T2C MIPI DSI1 的 D3P
AD33 277 DSI1_D3N_T3A MIPI DSI1 的 D3N
AC32 278 DSI0_D2P_T0A MIPI DSI0 的 D2P
AC33 279 DSI0_D2N_T0B MIPI DSI0 的 D2N
AB32 280 DSI0_D3N_T3A MIPI DSI0 的 D3N
AB33 281 DSI0_D3P_T2C MIPI DSI0 的 D3P
AB34 282 DSI0_D1N_T2B MIPI DSI0 的 D1N
AC34 283 DSI0_D1P_T2A MIPI DSI0 的 D1P
AD8 284 SCP_SPI3_CSB SPI3_CSB，GPIO37,EINT37;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
AD7 285 SCP_SPI3_CK SPI3_CK ， GPIO36,EINT36; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AC8 286 SCP_SPI3_MO SPI3_MO，GPIO38,EINT38;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
AC7 287 SCP_SPI3_MI SPI3_MI ， GPIO39,EINT39; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
288 D_GND
AC31 289 DSI0_D0P_T0C MIPI DSI0 的 D0P
AC30 290 DSI0_D0N_T1A MIPI DSI0 的 D0N
291 NC NC 脚，悬空
292 NC NC 脚，悬空
AB30 293 DSI0_CK0N_T1C MIPI DSI0 的 CKN

## PDF物理页 21

掌锐机密，未经许可不得扩散
19 / 33
AB31 294 DSI0_CK0P_T1B MIPI DSI0 的 CKP
AT19 295 AUD_NLE_MOSI0 GPIO193,此 IO 口不能做中断功能,可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
P34 296 SPI6_CSB SPI6_CSB;GPIO25,EINT25; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
P31 297 SPI6_MO SPI6_MO;GPIO26,EINT26; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
P32 298 SPI6_MI SPI6_MO;GPIO27,EINT27; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
P33 299 SPI6_CK SPI6_MO;GPIO24,EINT24; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
300 NC NC 脚，悬空
301 NC NC 脚，悬空
302 NC NC 脚，悬空
303 NC NC 脚，悬空
304 NC NC 脚，悬空
305 NC NC 脚，悬空
306 NC NC 脚，悬空
307 NC NC 脚，悬空
V7 308 GPS_L5_ELNA_EN GPIO93,可复用成 GPS_L5_ELNA_EN,此 IO 口不能做中断功
能,请参考 MT8668_GPIO_Application_Spec 表格
W2 309 SCP_SDA2 GPIO85,EINT85, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AP24 310 EINT11 GPIO11,EINT11 此 IO 口 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AM21 311 AUD_DAT_MISO2 GPIO197,此 IO 口不能做中断功能,可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
AR12 312 SYSRSTB 系统复位,低有效
AR20 313 AUD_SYNC_MOSI
GPIO189,此 IO 口在核心板有 12K 电阻下拉，用于核心板的
模式配置，尽量优先选择其他 IO 口替代，也不要做上下拉
配置。
314 NC NC 脚，悬空
315 D_GND
316 NC NC 脚，悬空
317 NC NC 脚，悬空
MT6363_
N2/P2 318 VS1_PMIC AUDIO CODEC 芯片 MT6338 的供电，不用请悬空
AT20 319 AUD_NLE_MOSI1 GPIO194,此 IO 口不能做中断功能,可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
AM20 320 AUD_DAT_MISO1 GPIO196,此 IO 口不能做中断功能,可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
AT26 321 BPI_D_BUS6 GPIO153, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格

## PDF物理页 22

掌锐机密，未经许可不得扩散
20 / 33
AM18 322 SCL5 I2C5 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
W5 323 SCP_SCL2 GPIO84, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
324 NC NC 脚，悬空
AR19 325 AUD_DAT_MOSI0
GPIO190,此 IO 口在核心板有 12K 电阻上拉，用于核心板的
模式配置，尽量优先选择其他 IO 口替代，也不要做上下拉
配置。
326 NC NC 脚，悬空
AU19 327 AUD_DAT_MISO0 GPIO195,AUDIO CODEC 芯片 MT6338 的 AUDIO IF 接口，
不用请悬空
AN20 328 AUD_DAT_MOSI1 GPIO191,此 IO 口在核心板有 12K 电阻上拉，用于核心板的
模式配置，尽量优先选择其他 IO 口替代，也不要做上下拉
配置。
329 NC NC 脚，悬空
AU20 330 AUD_CLK_MOSI GPIO188,AUDIO CODEC 芯片 MT6338 的 AUDIO IF 接口，
AUD_CLK_MOSI，不用请悬空
MT6685_B
5 331 RTC32K_1V8_F AUDIO CODEC 芯片 MT6338 的 RTC_CLK 32KHz，不用请
悬空
332 NC NC 脚，悬空
AN18 333 SDA5 I2C5 的 SDA, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AR22 334 DSI_TE GPIO59,EINT59, 可 复 用 成 DSI_TE, 请 参 考
MT8668_GPIO_Application_Spec 表格
335 D_GND
336 NC NC 脚，悬空
AN24 337 EINT12 GPIO12,EINT12 ， 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AM17 338 SRCLKENA0 AUDIO CODEC 芯 片 MT6338 的 待 机 控 制 信 号 脚
SRCLKENA0，不用请悬空
339 D_GND
340 D_GND
N32 341 SPI7_MI SPI7_MI;GPIO23,EINT23; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AP14 342 PERI_EN3 GPIO116,EINT116; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AT23 343 LCM_RST GPIO60,EINT60 可 复 用 成 LCM_RST, 请 参 考
MT8668_GPIO_Application_Spec 表格
AT14 344 PERI_EN5 GPIO118,EINT118, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AU23 345 EINT8 GPIO8,EINT8 可 复 用 成 LCM_RST, 请 参 考
MT8668_GPIO_Application_Spec 表格

## PDF物理页 23

掌锐机密，未经许可不得扩散
21 / 33
P30 346 SPI5_CK GPIO28,SCP_EINT28,默认配置为 FMI2S_BCK,可以复用成其
它 Func,请参考 MT8668_GPIO_Application_Spec 表格
AR13 347 PERI_EN4 GPIO117,EINT117 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
N33 348 SPI7_MO SPI7_MO;GPIO22,EINT22; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
M33 349 SPI7_CK SPI7_CK;GPIO20,EINT20; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
M32 350 SPI7_CSB SPI7_CSB;GPIO21,EINT21; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
Y32 351 EINT4 EINT4,GPIO4,建议 复用成 CTP0 的中 断,可以 复用成 其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
Y34 352 SYS_OCP_UVLO_INT GPIO198,此 IO 口不能做中断功能,可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
P29 353 SPI5_MI GPIO31,SCP_EINT31,默认配置为 FMI2S_DI 可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
AN21 354 AUD_DAT_MOSI2
GPIO192;此 IO 口在核心板有 12K 电阻上拉，用于核心板的
模式配置，尽量优先选择其他 IO 口替代，也不要做上下拉
配置。
AP16 355 EINT_CHG_IRQB
GPIO0,EINT0;此 IO 口在核心板有 12K 电阻上拉，用于核心
板的模式配置，尽量优先选择其他 IO 口替代，也不要做上
下拉配置。
W8 356 SCP_SDA1 GPIO83,EINT83,默认配置为 URXD3,可以复用成其它 Func
请参考 MT8668_GPIO_Application_Spec 表格
W7 357 SCP_SCL1 GPIO82,EINT82,默认配置为 UTXD3,可以复用成其它 Func,
请参考 MT8668_GPIO_Application_Spec 表格
U1 358 ANT_SEL2 GPIO96,此 IO 口复用成 PCIE_CLKREQN,可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
359 NC NC 脚，悬空
U4 360 ANT_SEL1
GPIO95,此 IO 口不能做中断功能,可以复用成 PCIE_WAKEN,
可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
P28 361 SPI5_MO GPIO30,SCP EINT30,可复用 FMI2SIN_MCK,可以复用成其它
Func,请参考 MT8668_GPIO_Application_Spec 表格
W1 362 SCP_SDA0 SCP_SDA0; 不 能 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
Y1 363 SCP_SCL0 SCP_SCL0, 不 能 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AA3 364 SCP_SPI2_MO SPI2_MO;GPIO42,EINT42; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AA5 365 SCP_SPI2_MI SPI2_MI;GPIO43,EINT43; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格

## PDF物理页 24

掌锐机密，未经许可不得扩散
22 / 33
AA4 366 SCP_SPI2_CSB SPI2_CSB;GPIO41,EINT41; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AA1 367 SCP_SPI2_CK SPI2_CK;GPIO40,EINT41; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
368 NC NC 脚，悬空
V3 369 ANT_SEL0 GPIO94,EINT94, 复 用 成 PCIE_PERSTN, 可 以 复 用 成 其 它
Func,请参考 MT8668_GPIO_Application_Spec 表格
T3 370 ANT_SEL6 GPIO100,EINT100,默认配置为 I2SIN6_DI3,可以复用成其它
Func 请参考 MT8668_GPIO_Application_Spec 表格
371 NC NC 脚，悬空
AT25 372 BPI_D_BUS9 GPIO156,此 IO 口不能做中断功能;可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
AN11 373 UTXD1 GPIO18,EINT18,复用成 UTXD1,可以复用成其它 Func,请参
考 MT8668_GPIO_Application_Spec 表格
AM11 374 URXD1 GPIO19,EINT19,可以复用成 URXD1,可以复用成其它 Func,
请参考 MT8668_GPIO_Application_Spec 表格
AM24 375 INT_SIM2 GPIO120,EINT120, 可 复 用 成 INT_SIM2, 可 以 复 用 成 其 它
Func,请参考 MT8668_GPIO_Application_Spec 表格
376 D_GND
377 NC NC 脚，悬空
AM26 378 EINT15 GPIO15,EINT15; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AE1 379 CAM_CLK1
默认配置是 CAM_CLK1,若要复用成 GPIO67,EINT67 请注意
修 改 软 件 配 置 ； 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
380 D_GND
381 D_GND
382 NC NC 脚，悬空
AT7 383 CAM_CLK0
默认配置是 CAM_CLK0,若要复用成 GPIO66,EINT66 请注意
修 改 软 件 配 置 ； 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
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

## PDF物理页 25

掌锐机密，未经许可不得扩散
23 / 33
MT6685_E
6 395 BBCK5 AUDIO CODEC 芯片 MT6338 的 26Mhz 时钟输入，MT6685
的 26Mhz 时钟输出，不用请悬空
396 D_GND
397 D_GND
398 NC NC 脚，悬空
399 D_GND
400 D_GND
401 D_GND
402 D_GND
403 WBG_ANT1 WBG_ANT1
404 D_GND
AN13 405 PERI_EN0 GPIO113,EINT113, 可 以 复 用 成 PWM0, 可 以 复 用 成 其 它
Func,请参考 MT8668_GPIO_Application_Spec 表格
AM8 406 CAM_RST0 GPIO62,EINT62, 可 以 复 用 成 CAM_RST0, 可 以 复 用 成 其 它
Func,请参考 MT8668_GPIO_Application_Spec 表格
407 NC NC 脚，悬空
N5 408 PCIE_LN0_TXP PCIE_LN0 的 TXP
N4 409 PCIE_LN0_TXN PCIE_LN0 的 TXN
410 D_GND
411 D_GND
412 WBG_ANT0 WBG_ANT0
413 D_GND
M7 414 PCIE_LN0_RXN PCIE_LN0 的 RXN
M6 415 PCIE_LN0_RXP PCIE_LN0 的 RXP
416 NC NC 脚，悬空
417 NC NC 脚，悬空
418 NC NC 脚，悬空
AR10 419 SCL12 I2C12 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
M1 420 PCIE0_CKP PCIE 的 CKP
M2 421 PCIE0_CKN PCIE 的 CKN
422 D_GND
423 D_GND
424 GPS_ANT GPS 天线
425 D_GND
426 NC NC 脚，悬空
427 NC NC 脚，悬空
AU10 428 SDA12 I2C12 的 SDA, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AM13 429 PERI_EN1 GPIO114,EINT114; 可 以 复 用 成 PWM1, 可 以 复 用 成 其 它
Func 请参考 MT8668_GPIO_Application_Spec 表格

## PDF物理页 26

掌锐机密，未经许可不得扩散
24 / 33
AR24 430 EINT10 GPIO10,EINT10 此 IO 口 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AN28 431 SPMI_P_SCL GPIO182,此 IO 口不能做中断功能,可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
432 NC NC 脚，悬空
433 NC NC 脚，悬空
434 D_GND
435 D_GND
436 NC NC 脚，悬空
437 NC NC 脚，悬空
438 NC NC 脚，悬空
439 NC NC 脚，悬空
AN7 440 CAM_RST1 GPIO63,EINT63; 可 以 复 用 成 CAM_RST1, 可 以 复 用 成 其 它
Func,请参考 MT8668_GPIO_Application_Spec 表格
AU11 441 SCL11 I2C11 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AT11 442 SDA11 I2C11 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AT10 443 CAM_SCL4 I2C4 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
444 NC NC 脚，悬空
445 NC NC 脚，悬空
446 NC NC 脚，悬空
447 NC NC 脚，悬空
448 NC NC 脚，悬空
449 NC NC 脚，悬空
450 NC NC 脚，悬空
451 NC NC 脚，悬空
AP9 452 CAM_SDA4 I2C4 的 SDA,I3C4 的 SDA, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AM10 453 CAM_SDA2 I2C2 的 SDA, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AN10 454 CAM_SCL2 I2C2 的 SCL, 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
455 D_GND
456 NC NC 脚，悬空
457 NC NC 脚，悬空
458 NC NC 脚，悬空
459 NC NC 脚，悬空
460 NC NC 脚，悬空
461 NC NC 脚，悬空
462 NC NC 脚，悬空

## PDF物理页 27

掌锐机密，未经许可不得扩散
25 / 33
463 NC NC 脚，悬空
AP28 464 SPMI_P_SDA GPIO183,此 IO 口不能做中断功能,可以复用成其它 Func,请
参考 MT8668_GPIO_Application_Spec 表格
AB1 465 SCP_SPI1_CK SPI1_CK;GPIO44,EINT44; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AB2 466 SCP_SPI1_CSB SPI1_CSB;GPIO45,EINT45; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
467 NC NC 脚，悬空
V4 468 CONN_HRST_B_2 GPIO101,EINT101 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
W32 469 EINT1 GPIO1,EINT1, 可 复 用 成 CTP0_RST, 请 参 考
MT8668_GPIO_Application_Spec 表格
470 D_GND
471 D_GND
AG5 472 CSI3A_L1P_T0C MIPI CSI3A 的 DATA0-P
AG3 473 CSI3A_L1N_T1A MIPI CSI3A 的 DATA0-N
AC3 474 SCP_SPI0_MO SPI0_MO;GPIO50,EINT50; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AF7 475 NC NC 脚，悬空
AC6 476 NC NC 脚，悬空
AB3 477 SCP_SPI1_MO SPI1_MO;GPIO46,EINT46; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AB4 478 SCP_SPI1_MI SPI1_MI;GPIO47,EINT47; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
479 NC NC 脚，悬空
480 NC NC 脚，悬空
AD6 481 SCP_SPI0_CSB SPI0_CSB;GPIO49,EINT49; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AG1 482 CSI3A_L2N_T1C MIPI CSI3A 的 CLK-N
AG2 483 CSI3A_L2P_T1B MIPI CSI3A 的 CLK-P
AH3 484 CSI3B_L0P_T0A MIPI CSI3B 的 DATA1-P
AH2 485 CSI3B_L0N_T0B MIPI CSI3B 的 DATA1-N
AC5 486 SCP_SPI0_CK SPI0_CK;GPIO48,EINT48; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
487 NC NC 脚，悬空
488 D_GND
R32 489 SPI4_MO GPIO34,EINT34,可以复用成 I2SIN0_MCK 或其它 Func,请参
考 MT8668_GPIO_Application_Spec 表格
490 D_GND
491 D_GND
492 D_GND

## PDF物理页 28

掌锐机密，未经许可不得扩散
26 / 33
AC4 493 SCP_SPI0_MI SPI0_MI;GPIO51,EINT51; 可 以 复 用 成 其 它 Func, 请 参 考
MT8668_GPIO_Application_Spec 表格
AJ2 494 CSI3B_L1N_T1A MIPI CSI3B 的 DATA3-N
AJ3 495 CSI3B_L1P_T0C MIPI CSI3B 的 DATA3-P
AF3 496 CSI3A_L0P_T0A MIPI CSI3A 的 DATA2-P
AF4 497 CSI3A_L0N_T0B MIPI CSI3A 的 DATA2-N
AN23 498 INT_SIM1 INT_SIM1;GPIO119,EINT119;可以复用成其它 Func,请参考
MT8668_GPIO_Application_Spec 表格
499 D_GND
MT6373_J
14 500 VIBR_PMU LDO 电源输出,1.8/2.8/3.0/3.3V/200mA 可供外部负载使用
501 D_GND
MT6373_K
14 502 VTP_PMU VTP 供电输出 1.8/2.8/3.0/3.3V/200mA
MT6373_J
12 503 VIO28_PMU VIO28_PMU ,1.8/2.8/3.0/3.3V/200mA SENSOR 供电
MT6373_
N14 504 VMCH_PMU T 卡供电 LDO 输出 2.9V/800mA
MT6363_K
7 505 VBUS VBUS 对应 MT8668 底板上的 VUSB_5V_IN,检测 USB 插入
506 D_GND 电源地
507 D_GND 电源地
508 VBAT 系统 4.0V 供电输入
509 VBAT 系统 4.0V 供电输入
510 D_GND 电源地
511 D_GND 电源地
MT6363_L
5 512 PWRKEY_SW POWERKEY ,系统开关机键,电平为 4.0V，默认高电平低有
效
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

## PDF物理页 29

掌锐机密，未经许可不得扩散
27 / 33
527 D_GND 电源地
528 D_GND 电源地
G1 D_GND
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
G2 D_GND
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
G3 D_GND
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
G4 D_GND
G40 D_GND
G41 D_GND
G42 D_GND
G43 D_GND
G44 D_GND
G45 D_GND

## PDF物理页 30

掌锐机密，未经许可不得扩散
28 / 33
G46 D_GND
G47 D_GND
G48 D_GND
G49 D_GND
G5 D_GND
G50 D_GND
G51 D_GND
G52 D_GND
G6 D_GND
G7 D_GND
G8 D_GND
G9 D_GND

## PDF物理页 31

掌锐机密，未经许可不得扩散
29 / 33
6. 模块引脚分布图

## PDF物理页 32

掌锐机密，未经许可不得扩散
30 / 33
7. 模块尺寸图
模 块 尺 寸 ：59.5mm * 59.5mm。下 图 中 心 28mm*27mm 区 域 底 板 PCB
设 计 需 要 挖 空 ，如 要 PIN2PIN MT8678 平 台 需 要 按 P41 产 品 规 格 书 预 留
设 计

## PDF物理页 33

掌锐机密，未经许可不得扩散
31 / 33
8. 天线接口说明
天线接口 数量 说明
ANT0 X 1 4G/5G 主集天线
ANT1 X 1 4G/5G 分集天线
ANT2 X 1 MIMO 3
ANT3 X 1 MIMO 4
ANT5 X 1 eCall 天线
WB0&WB1 X 2 WiFi&BT 天线
GNSS 天线 X 1


---
# SRC0048 Hypervisor Tbox(L+L+A)架构.pdf

来源：8676/PVT技术分享文档/Hypervisor Tbox(L+L+A)架构.pdf

SHA-256：b6db294b79165d3283fee197d88db9e1141c3e595bffa1fd0a05dab6b3885b1a

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0048.html)

## PDF物理页 1

4.1.1 Hypervisor Tbox(L+L+A)架构
1.L+L+A框架
Yocto-Tbox（UOS）：单独一个yocto VM系统；
前端驱动：实际在SOS内部实现驱动，包括Audio、SPI、Conninfra、Ethernet等驱动， virtio虚拟化。（灰色）
后端驱动：实际Tbox内核实现驱动，包括GNSS，Modem相关的ccci driver驱动。（黄色）
2.Tbox架构
Modem是是一个独立的IC chip，内部是一个独立的系统，通过SOS的LK2 load对应的modem镜像。
Hypervisor在LK之上，启动Tbox VM系统，实现了virio-net的虚拟化通道。
Tbox内部结构：驱动层：ccci druver，Gnss driver等；SDK Hal： Rild，Speech_bin，mnld等；Native：mtktelephoneserver、Mtknetworkmanger等；
最上层由客制化的APP组成。

## PDF物理页 2

3. Tbox Phone call
Tbox APP调用Call电话接口，mtktelephoneserver会根据NW侧反馈回来的电话状态，调用到Speech_bin中，
Speech_hal会配置对应Audio FE path通道。
4.Tbox GNSS
Tbox和Android VM共享GPS nema数据是通过Vsocket通信实现;
5. 内置网络拓扑图

## PDF物理页 3

MT86xx Workshop Tbox.pdf


---
# SRC0049 camera-physical-topology-confirmed.jpg

来源：Camera架构/camera-physical-topology-confirmed.jpg

SHA-256：04d4a2480f628986b89efbce08b625606632800a899072c968739cda53652b29

范围：有引用的指定页/文本核对；未宣称全文逐页审阅

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0049.html)

此条没有可靠的提取正文，请核对站内来源页及原件。

---
# SRC0050 最新站点核对记录.json

来源：架构知识——中文版/evidence/最新站点核对记录.json

SHA-256：7b7b02f39460b4f243b27cbd290aa43699dcd5df468c908cb9936fc6bb8e66d0

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0050.html)

## 全文 1

{
  "url": "https://qiantao18817568425-art.github.io/Codex/",
  "repository": "qiantao18817568425-art/Codex",
  "ref": "a4fe4eaa70ff44aeb9e27068c71514f050f0ba06",
  "commit_date_utc": "2026-09-18T23:50:42Z",
  "commit_date_shanghai": "2026-09-19 07:50:42",
  "commit_message": "Publish completed Day 18 course archive and rendering fixes",
  "source_path": "docs/index.html",
  "blob_sha": "3ca34517433cb687ced9bbf4de884d4850c9edf9",
  "live_http_status": 200,
  "live_bytes": 1517811,
  "live_sha256": "56743f19c32c788033ea0f984072df35d256ee36b0196067f9ec83364913d337",
  "live_equals_repository_blob": true,
  "lessons": 50,
  "days": 34,
  "week_entries": 16,
  "fulltext_labels": 50,
  "reviewed_course_text": [
    "Day 1",
    "Day 2 overview",
    "Day 18",
    "Day 33 key sections",
    "Day 34",
    "Week 10"
  ],
  "method": "GitHub API latest commit + direct live HTML bytes; live blob hash matches repository; not browser interaction test",
  "items": [
    {
      "title": "Day 1 - 智能座舱全景与系统边界",
      "meta": "全文",
      "html_id": null,
      "text_chars": 4006
    },
    {
      "title": "Day 2 - 汽车电子电气架构与域间协同",
      "meta": "全文",
      "html_id": null,
      "text_chars": 3396
    },
    {
      "title": "Day 3 - 座舱域控制器",
      "meta": "全文",
      "html_id": null,
      "text_chars": 4690
    },
    {
      "title": "Day 4 - 座舱芯片 SoC/MCU/GPU/NPU/DSP",
      "meta": "全文",
      "html_id": null,
      "text_chars": 4267
    },
    {
      "title": "Day 5 - 一芯多屏与 HMI",
      "meta": "全文",
      "html_id": null,
      "text_chars": 4394
    },
    {
      "title": "Day 6 - 车载操作系统 QNX/Linux/Android",
      "meta": "全文",
      "html_id": null,
      "text_chars": 5307
    },
    {
      "title": "Day 7 - 座舱电源管理 I：上下电与启动时序",
      "meta": "全文",
      "html_id": null,
      "text_chars": 6674
    },
    {
      "title": "Day 8 - 座舱电源管理 II：休眠唤醒与低功耗",
      "meta": "全文",
      "html_id": null,
      "text_chars": 6955
    },
    {
      "title": "Day 9 - CAN/LIN/以太网：座舱网络基础",
      "meta": "全文",
      "html_id": null,
      "text_chars": 7768
    },
    {
      "title": "Day 10 - SOA 架构",
      "meta": "全文",
      "html_id": null,
      "text_chars": 10383
    },
    {
      "title": "Week 2 - 周五反思总结",
      "meta": "全文",
      "html_id": null,
      "text_chars": 10288
    },
    {
      "title": "Day 11 - AUTOSAR CP/AP 与座舱中间件",
      "meta": "全文",
      "html_id": null,
      "text_chars": 10171
    },
    {
      "title": "Day 12 - SOME/IP 深入：服务、方法、事件、字段",
      "meta": "全文",
      "html_id": null,
      "text_chars": 11963
    },
    {
      "title": "Day 13 - SOME/IP Service Discovery",
      "meta": "全文",
      "html_id": null,
      "text_chars": 11443
    },
    {
      "title": "Week 3 - 周五反思总结",
      "meta": "全文",
      "html_id": null,
      "text_chars": 4835
    },
    {
      "title": "Week 3 - 周末总结反思与综合题",
      "meta": "全文",
      "html_id": null,
      "text_chars": 3307
    },
    {
      "title": "Day 14 - 服务版本、接口兼容与异常处理",
      "meta": "全文",
      "html_id": null,
      "text_chars": 10490
    },
    {
      "title": "Day 15 - SOA 服务边界设计",
      "meta": "全文",
      "html_id": null,
      "text_chars": 9749
    },
    {
      "title": "Week 4 - 周五反思总结",
      "meta": "全文",
      "html_id": null,
      "text_chars": 5172
    },
    {
      "title": "Week 4 - 周末总结反思与综合题",
      "meta": "全文",
      "html_id": null,
      "text_chars": 3768
    },
    {
      "title": "Day 16 - 接口治理、权限、安全和服务降级",
      "meta": "全文",
      "html_id": null,
      "text_chars": 11849
    },
    {
      "title": "Day 17 - OS 内通信：Binder、D-Bus、Unix Socket、共享内存",
      "meta": "全文",
      "html_id": null,
      "text_chars": 11376
    },
    {
      "title": "Day 18 - 核间通信：Mailbox、IPI、共享内存、Ring Buffer",
      "meta": "全文",
      "html_id": null,
      "text_chars": 10294
    },
    {
      "title": "Day 19 - 虚拟化通信：VirtIO、虚拟中断、Guest 生命周期",
      "meta": "全文",
      "html_id": null,
      "text_chars": 9943
    },
    {
      "title": "Day 20 - 时间同步 I：RTC、GNSS、T-Box、网络时间、AUTOSAR Time Base",
      "meta": "全文",
      "html_id": null,
      "text_chars": 9336
    },
    {
      "title": "Week 6 - 周五反思总结",
      "meta": "全文",
      "html_id": null,
      "text_chars": 3917
    },
    {
      "title": "Day 21 - 时间同步 II：Camera、Audio、传感器、HMI 和日志时间戳对齐",
      "meta": "全文",
      "html_id": null,
      "text_chars": 21175
    },
    {
      "title": "Day 22 - Android Activity、Window、Task 与 Focus",
      "meta": "全文",
      "html_id": null,
      "text_chars": 15482
    },
    {
      "title": "Day 23 - Android 多屏、多用户与 HMI",
      "meta": "全文",
      "html_id": null,
      "text_chars": 21345
    },
    {
      "title": "Week 7 - 周五反思总结",
      "meta": "全文",
      "html_id": null,
      "text_chars": 10744
    },
    {
      "title": "Week 7 - 周六总结反思与综合题",
      "meta": "全文",
      "html_id": null,
      "text_chars": 11867
    },
    {
      "title": "Week 7 - 周日总结反思与综合题",
      "meta": "全文",
      "html_id": null,
      "text_chars": 10220
    },
    {
      "title": "Day 24 - Surface、SurfaceFlinger、HWC、BufferQueue",
      "meta": "全文",
      "html_id": null,
      "text_chars": 18851
    },
    {
      "title": "Day 25 - VSYNC、合成、送显和屏端链路",
      "meta": "全文",
      "html_id": null,
      "text_chars": 18408
    },
    {
      "title": "Day 26 - Vehicle HAL、system_server 与系统服务",
      "meta": "全文",
      "html_id": null,
      "text_chars": 16629
    },
    {
      "title": "Day 27 - Android ANR、Watchdog、Native Crash 和启动稳定性",
      "meta": "全文",
      "html_id": null,
      "text_chars": 14940
    },
    {
      "title": "Week 8 - 周五反思总结",
      "meta": "全文",
      "html_id": null,
      "text_chars": 11701
    },
    {
      "title": "Week 8 - 周六巩固与综合题",
      "meta": "全文",
      "html_id": null,
      "text_chars": 9994
    },
    {
      "title": "Week 8 - 周日巩固与综合题",
      "meta": "全文",
      "html_id": null,
      "text_chars": 10653
    },
    {
      "title": "Day 28 - Camera Sensor、SerDes、CSI、ISP",
      "meta": "全文",
      "html_id": null,
      "text_chars": 18980
    },
    {
      "title": "Day 29 - Camera Buffer、DMA、IOMMU 与显示链路",
      "meta": "全文",
      "html_id": null,
      "text_chars": 22546
    },
    {
      "title": "Day 30 - 倒车影像和 360 环视",
      "meta": "全文",
      "html_id": null,
      "text_chars": 27190
    },
    {
      "title": "Day 31 - DMS、OMS 图像管线",
      "meta": "全文",
      "html_id": null,
      "text_chars": 24054
    },
    {
      "title": "Week 9 - 周五反思总结",
      "meta": "全文",
      "html_id": null,
      "text_chars": 18141
    },
    {
      "title": "Week 9 - 周六巩固与综合题",
      "meta": "全文",
      "html_id": null,
      "text_chars": 15816
    },
    {
      "title": "Week 9 - 周日巩固与综合题",
      "meta": "全文",
      "html_id": null,
      "text_chars": 20115
    },
    {
      "title": "Day 32 - Camera 黑屏、冻帧和首帧延迟",
      "meta": "全文",
      "html_id": null,
      "text_chars": 26585
    },
    {
      "title": "Day 33 - Camera 标定、诊断和故障恢复",
      "meta": "全文",
      "html_id": null,
      "text_chars": 23695
    },
    {
      "title": "Day 34 - Audio I：音频总体架构、音源和音频焦点",
      "meta": "全文",
      "html_id": null,
      "text_chars": 19748
    },
    {
      "title": "Week 10 - 周五反思总结",
      "meta": "全文",
      "html_id": null,
      "text_chars": 15101
    }
  ]
}


---
# SRC0051 正文引用记录.json

来源：架构知识——中文版/修订记录/2026-09-20-正文深化/正文引用记录.json

SHA-256：b6c786990af0bda334854715c7d39fdbc738492f9183d169820bd887fb2936af

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0051.html)

## 全文 1

[
  {
    "file": "架构知识——中文版/00-前言.md",
    "id": "DAY1",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构知识——中文版/00-前言.md",
    "id": "DAY2",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构知识——中文版/01-三张架构图阅读指南.md",
    "id": "S145",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/01-三张架构图阅读指南.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S038",
    "pages": "5-9"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S278",
    "pages": "4-6"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S283",
    "pages": "4-5"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S147",
    "pages": "5-10"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S021",
    "pages": "5-7"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S028",
    "pages": "5-7"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S263",
    "pages": "1-5"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S145",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/02-整机与虚拟化架构.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/03-MT8676-SDK与UMDP.md",
    "id": "S075",
    "pages": "5-7"
  },
  {
    "file": "架构知识——中文版/03-MT8676-SDK与UMDP.md",
    "id": "U038",
    "pages": "9-13"
  },
  {
    "file": "架构知识——中文版/03-MT8676-SDK与UMDP.md",
    "id": "E007",
    "pages": "3-4"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "S145",
    "pages": "4-8"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "U039",
    "pages": "4-18"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "U047",
    "pages": "12"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "S272",
    "pages": "3"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "S273",
    "pages": "3"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "U039",
    "pages": "4-18"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "S145",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/04-三图模块字典.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/05-通信机制与异常诊断基础.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构知识——中文版/05-通信机制与异常诊断基础.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构知识——中文版/05-通信机制与异常诊断基础.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构知识——中文版/05-通信机制与异常诊断基础.md",
    "id": "E005",
    "pages": "3-8"
  },
  {
    "file": "架构知识——中文版/05-通信机制与异常诊断基础.md",
    "id": "U038",
    "pages": "4-13"
  },
  {
    "file": "架构知识——中文版/05-通信机制与异常诊断基础.md",
    "id": "S282",
    "pages": "4-5"
  },
  {
    "file": "架构知识——中文版/05-通信机制与异常诊断基础.md",
    "id": "DAY18",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构知识——中文版/06-Android内部机制与稳定性.md",
    "id": "S145",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/06-Android内部机制与稳定性.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/06-Android内部机制与稳定性.md",
    "id": "U047",
    "pages": "6-10"
  },
  {
    "file": "架构知识——中文版/06-Android内部机制与稳定性.md",
    "id": "S261",
    "pages": "2-5"
  },
  {
    "file": "架构知识——中文版/06-Android内部机制与稳定性.md",
    "id": "E003",
    "pages": "3-8"
  },
  {
    "file": "架构知识——中文版/07-SOS-Yocto内部机制.md",
    "id": "U039",
    "pages": "9-18"
  },
  {
    "file": "架构知识——中文版/07-SOS-Yocto内部机制.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/07-SOS-Yocto内部机制.md",
    "id": "S145",
    "pages": "8"
  },
  {
    "file": "架构知识——中文版/07-SOS-Yocto内部机制.md",
    "id": "S296",
    "pages": null
  },
  {
    "file": "架构知识——中文版/07-SOS-Yocto内部机制.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构知识——中文版/07-SOS-Yocto内部机制.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构知识——中文版/07-SOS-Yocto内部机制.md",
    "id": "S263",
    "pages": "1-5"
  },
  {
    "file": "架构知识——中文版/07-SOS-Yocto内部机制.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构知识——中文版/08-MCU内部机制.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构知识——中文版/08-MCU内部机制.md",
    "id": "E005",
    "pages": "3-8"
  },
  {
    "file": "架构知识——中文版/08-MCU内部机制.md",
    "id": "E006",
    "pages": "1-2"
  },
  {
    "file": "架构知识——中文版/08-MCU内部机制.md",
    "id": "S265",
    "pages": "4-6"
  },
  {
    "file": "架构知识——中文版/08-MCU内部机制.md",
    "id": "S037",
    "pages": "4-10"
  },
  {
    "file": "架构知识——中文版/09-TBox通信模组内部机制.md",
    "id": "S075",
    "pages": "5-7"
  },
  {
    "file": "架构知识——中文版/09-TBox通信模组内部机制.md",
    "id": "S279",
    "pages": "2"
  },
  {
    "file": "架构知识——中文版/09-TBox通信模组内部机制.md",
    "id": "S304",
    "pages": "1-3"
  },
  {
    "file": "架构知识——中文版/09-TBox通信模组内部机制.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构知识——中文版/09-TBox通信模组内部机制.md",
    "id": "S305",
    "pages": "2-4"
  },
  {
    "file": "架构知识——中文版/09-TBox通信模组内部机制.md",
    "id": "S272",
    "pages": "3"
  },
  {
    "file": "架构知识——中文版/09-TBox通信模组内部机制.md",
    "id": "S273",
    "pages": "3"
  },
  {
    "file": "架构知识——中文版/10-车辆仪表与诊断业务流程.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构知识——中文版/10-车辆仪表与诊断业务流程.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构知识——中文版/10-车辆仪表与诊断业务流程.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构知识——中文版/10-车辆仪表与诊断业务流程.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "S145",
    "pages": "8"
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "S296",
    "pages": null
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "S297",
    "pages": null
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "U047",
    "pages": "6-10"
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "S296",
    "pages": null
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "S285",
    "pages": "2-5"
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "U047",
    "pages": "11"
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "U039",
    "pages": "9-18"
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "S028",
    "pages": "5-7"
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "DAY33",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构知识——中文版/11-显示相机与驾驶辅助业务流程.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "U047",
    "pages": "6-10"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "S263",
    "pages": "1-5"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "S052",
    "pages": "1"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "S052",
    "pages": "1"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "DAY34",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构知识——中文版/12-音频与语音业务流程.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S075",
    "pages": "5-7"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S282",
    "pages": "4-5"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S279",
    "pages": "2"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S304",
    "pages": "1-3"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S279",
    "pages": "2"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S265",
    "pages": "4-6"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S262",
    "pages": "3-4"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S272",
    "pages": "3"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S273",
    "pages": "3"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S305",
    "pages": "2-4"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "S279",
    "pages": "2"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构知识——中文版/13-通信模块业务流程.md",
    "id": "U047",
    "pages": "8"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "S145",
    "pages": "8"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "U039",
    "pages": "17-18"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "S035",
    "pages": "5-6"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "S265",
    "pages": "4-6"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "S037",
    "pages": "4-10"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "S030",
    "pages": "8-10"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "S075",
    "pages": "5-7"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "U038",
    "pages": "11-13"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "DAY33",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构知识——中文版/14-系统生命周期业务流程.md",
    "id": "S030",
    "pages": "8-10"
  },
  {
    "file": "架构知识——中文版/15-统一诊断手册.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构知识——中文版/15-统一诊断手册.md",
    "id": "U047",
    "pages": "8-9"
  },
  {
    "file": "架构知识——中文版/15-统一诊断手册.md",
    "id": "U028",
    "pages": null
  },
  {
    "file": "架构知识——中文版/15-统一诊断手册.md",
    "id": "S278",
    "pages": "4-6"
  },
  {
    "file": "架构知识——中文版/15-统一诊断手册.md",
    "id": "E003",
    "pages": "3-8"
  },
  {
    "file": "架构知识——中文版/15-统一诊断手册.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构知识——中文版/15-统一诊断手册.md",
    "id": "U039",
    "pages": "15-18"
  },
  {
    "file": "架构知识——中文版/15-统一诊断手册.md",
    "id": "S075",
    "pages": "5-7"
  },
  {
    "file": "架构知识——中文版/15-统一诊断手册.md",
    "id": "S265",
    "pages": "4-6"
  },
  {
    "file": "架构知识——中文版/15-统一诊断手册.md",
    "id": "WEEK10",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/00-前言.md",
    "id": "DAY1",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/00-前言.md",
    "id": "DAY2",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/01-三张架构图阅读指南.md",
    "id": "S145",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/01-三张架构图阅读指南.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S038",
    "pages": "5-9"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S278",
    "pages": "4-6"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S283",
    "pages": "4-5"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S147",
    "pages": "5-10"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S021",
    "pages": "5-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S028",
    "pages": "5-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S263",
    "pages": "1-5"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S145",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/02-整机与虚拟化架构.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/03-MT8676-SDK与UMDP.md",
    "id": "S075",
    "pages": "5-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/03-MT8676-SDK与UMDP.md",
    "id": "U038",
    "pages": "9-13"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/03-MT8676-SDK与UMDP.md",
    "id": "E007",
    "pages": "3-4"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "S145",
    "pages": "4-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "U039",
    "pages": "4-18"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "U047",
    "pages": "12"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "S272",
    "pages": "3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "S273",
    "pages": "3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "U039",
    "pages": "4-18"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "S145",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/04-三图模块字典.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/05-通信机制与异常诊断基础.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/05-通信机制与异常诊断基础.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/05-通信机制与异常诊断基础.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/05-通信机制与异常诊断基础.md",
    "id": "E005",
    "pages": "3-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/05-通信机制与异常诊断基础.md",
    "id": "U038",
    "pages": "4-13"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/05-通信机制与异常诊断基础.md",
    "id": "S282",
    "pages": "4-5"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/05-通信机制与异常诊断基础.md",
    "id": "DAY18",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/06-Android内部机制与稳定性.md",
    "id": "S145",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/06-Android内部机制与稳定性.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/06-Android内部机制与稳定性.md",
    "id": "U047",
    "pages": "6-10"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/06-Android内部机制与稳定性.md",
    "id": "S261",
    "pages": "2-5"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/06-Android内部机制与稳定性.md",
    "id": "E003",
    "pages": "3-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/07-SOS-Yocto内部机制.md",
    "id": "U039",
    "pages": "9-18"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/07-SOS-Yocto内部机制.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/07-SOS-Yocto内部机制.md",
    "id": "S145",
    "pages": "8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/07-SOS-Yocto内部机制.md",
    "id": "S296",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/07-SOS-Yocto内部机制.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/07-SOS-Yocto内部机制.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/07-SOS-Yocto内部机制.md",
    "id": "S263",
    "pages": "1-5"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/07-SOS-Yocto内部机制.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/08-MCU内部机制.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/08-MCU内部机制.md",
    "id": "E005",
    "pages": "3-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/08-MCU内部机制.md",
    "id": "E006",
    "pages": "1-2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/08-MCU内部机制.md",
    "id": "S265",
    "pages": "4-6"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/08-MCU内部机制.md",
    "id": "S037",
    "pages": "4-10"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/09-TBox通信模组内部机制.md",
    "id": "S075",
    "pages": "5-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/09-TBox通信模组内部机制.md",
    "id": "S279",
    "pages": "2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/09-TBox通信模组内部机制.md",
    "id": "S304",
    "pages": "1-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/09-TBox通信模组内部机制.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/09-TBox通信模组内部机制.md",
    "id": "S305",
    "pages": "2-4"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/09-TBox通信模组内部机制.md",
    "id": "S272",
    "pages": "3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/09-TBox通信模组内部机制.md",
    "id": "S273",
    "pages": "3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/10-车辆仪表与诊断业务流程.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/10-车辆仪表与诊断业务流程.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/10-车辆仪表与诊断业务流程.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/10-车辆仪表与诊断业务流程.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "S145",
    "pages": "8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "S296",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "S297",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "U047",
    "pages": "6-10"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "S296",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "S285",
    "pages": "2-5"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "U047",
    "pages": "11"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "U039",
    "pages": "9-18"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "S028",
    "pages": "5-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "DAY33",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/11-显示相机与驾驶辅助业务流程.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "U047",
    "pages": "6-10"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "S281",
    "pages": "2-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "S263",
    "pages": "1-5"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "S052",
    "pages": "1"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "S052",
    "pages": "1"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "DAY34",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "S045",
    "pages": "2-4"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/12-音频与语音业务流程.md",
    "id": "S049",
    "pages": "4-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S075",
    "pages": "5-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S282",
    "pages": "4-5"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S279",
    "pages": "2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S304",
    "pages": "1-3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S279",
    "pages": "2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S265",
    "pages": "4-6"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S262",
    "pages": "3-4"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S272",
    "pages": "3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S273",
    "pages": "3"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S305",
    "pages": "2-4"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "S279",
    "pages": "2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/13-通信模块业务流程.md",
    "id": "U047",
    "pages": "8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "S145",
    "pages": "8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "U039",
    "pages": "17-18"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "S035",
    "pages": "5-6"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "S265",
    "pages": "4-6"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "S037",
    "pages": "4-10"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "S030",
    "pages": "8-10"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "MBOS-20260920",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "S075",
    "pages": "5-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "U038",
    "pages": "11-13"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "DAY33",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/14-系统生命周期业务流程.md",
    "id": "S030",
    "pages": "8-10"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/15-统一诊断手册.md",
    "id": "U002",
    "pages": "1-2"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/15-统一诊断手册.md",
    "id": "U047",
    "pages": "8-9"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/15-统一诊断手册.md",
    "id": "U028",
    "pages": null
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/15-统一诊断手册.md",
    "id": "S278",
    "pages": "4-6"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/15-统一诊断手册.md",
    "id": "E003",
    "pages": "3-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/15-统一诊断手册.md",
    "id": "S019",
    "pages": "6-8"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/15-统一诊断手册.md",
    "id": "U039",
    "pages": "15-18"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/15-统一诊断手册.md",
    "id": "S075",
    "pages": "5-7"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/15-统一诊断手册.md",
    "id": "S265",
    "pages": "4-6"
  },
  {
    "file": "架构资料——原版/mt8676-architecture/chapters/15-统一诊断手册.md",
    "id": "WEEK10",
    "pages": null,
    "source": "GitHub Pages a4fe4eaa70ff44aeb9e27068c71514f050f0ba06"
  }
]


---
# SRC0052 2、MTK平台网络配置.pdf

来源：培训材料/PVT技术分享文档/2、MTK平台网络配置.pdf

SHA-256：a7e4b3132313dbd1482d5c999455eee62dd17af84bed605ab6f8b9d2b19d43b5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0052.html)

## PDF物理页 1

查看网络配置：1
 2
cmd overlay lookup --verbose com.android.connectivity.resources 
com.android.connectivity.resources:array/config_ethernet_interfaces
3
cmd overlay lookup --verbose com.android.connectivity.resources 
com.android.connectivity.resources:string/config_ethernet_iface_regex
4
dumpsys ethernet5
 6
 7
在 Android 系统中配置网络的是： CarConnectivityOverlayMtk8
 9
    单 android 的系统，非 hyper 的系统， CarConnectivityOverlayMtk 需要删除，不要参与编译，不然会导
致需要指定 ETH 节点才能 ping 通
10
    device/mediatek/vendor/common/car/device.mk11
     46 # Runtime Resource Overlay for Connectivity12
     47 PRODUCT_PACKAGES += \13
     48     CarConnectivityOverlayMtk14
     15
     16
    auto8676p1_64_bsp:/ # cmd overlay lookup --verbose 
com.android.connectivity.resources 
com.android.connectivity.resources:array/config_ethernet_interfaces                      
                   <
17
    Resolution for 0x0601000018
            For config - zh-rCN-ldltr-sw960dp-w1707dp-h788dp-xlarge-long-notround-
nowidecg-lowdr-land-car-night-180dpi-finger-keyssoft-nokeys-nonav-1920x972-v34
19
            Found initial: /vendor/overlay/CarConnectivityOverlayMtk.apk #1020
            Overlaid: /vendor/overlay/CarConnectivityOverlayMtk.apk #1021
    Best matching is from default configuration of 
com.mediatek.connectivity.resources.car.overlay
22
    eth0;11,12,13,14,15,28;ip=192.168.1.100/24 gateway=192.168.1.123
 24
CarConnectivityOverlayMtk.apk 代码位置是：25
    device/generic/car/common/overlay_packages/ConnectivityOverlay/26
    27
   单 Android 系统使用的网络配置文件是：  28
       ：
vendor/mediatek/proprietary/packages/overlay/vendor/ConnectivityOverlay/res/values/config
.xml
29
   双系统 Android 端使用的网络配置应用文件是：30

## PDF物理页 2

vendor/mediatek/proprietary/packages/overlay/vendor/ConnectivityOverlay/res_auto/values/c
onfig.xml
31
       32
eth0;11,12,13,14,15,28说明：33
1、 eth0 接口的说明可以查看：
packages/modules/Connectivity/service/ServiceConnectivityResources/res/values/config.xml
文件中的说明
34
2、11,12,13,14,15,28这些数字是  Network Capabilities 、可以参考
packages/modules/Connectivity/framework/src/android/net/NetworkCapabilities.java 文件中的说
明
35
注意：添加 dns 需要添加11和2836
vendor/mediatek/proprietary/packages/overlay/vendor/ConnectivityOverlay/res_auto/values/c
onfig.xml 目录
37
    <string-array translatable="false" name="config_ethernet_interfaces">38
        <!-- for adb, no internet -->39
        <item>eth0;11,13,14;ip=192.168.1.2/24 gateway=192.168.1.1</item>40
        <!-- for data share, internet, Override Transport Cellular transport -->41
        <item>eth1;11,12,13,14,15,28;ip=172.17.0.2/24 gateway=172.17.0.1 
dns=8.8.8.8;0</item>
42
        <!-- for xx -->43
        <item>eth2;11,12,13,14,15,28;ip=172.17.1.2/24 gateway=172.17.1.1</item>44
        <!-- for xx -->45
        <item>eth3;11,12,13,14,15,28;ip=172.17.2.2/24 gateway=172.17.2.1</item>46
        <!-- for xx -->47
        <item>eth4;11.12.13.14.15.28;ip=172.17.3.2/24 gatewav=172.17.3.1</item>48
        <!-- for xx -->49
        <item>eth5;11,12,13,14;ip=172.20.1.44/24 gatewav=172.20.1.1</item>50
    </string-array>51
 52
 配置 ip 挂载上自动配置：53
 packages/modules/Connectivity/service-t/src/com/android/server/ethernet/54
 55
diff --git a/service-t/src/com/android/server/ethernet/EthernetTracker.java b/service-
t/src/com/android/server/ethernet/EthernetTracker.java
56
index 2603d4a6e4..a50164a51f 10064457
--- a/service-t/src/com/android/server/ethernet/EthernetTracker.java58
+++ b/service-t/src/com/android/server/ethernet/EthernetTracker.java59
@@ -164,6 +164,21 @@ public class EthernetTracker {60
                     OsConstants.NETLINK_ROUTE, NetlinkConstants.RTMGRP_LINK);61
         }62
 63
+        // M64
+        public static boolean isVirtioNetInterface(String iface) {65
+            if (iface == null || iface.isEmpty())66

## PDF物理页 3

+                return false;67
+            try {68
+                String path = android.system.Os.readlink("/sys/class/net/" + iface + 
"/device/driver");
69
+                Log.i(TAG, iface + "->" + path);70
+                if (path != null && path.contains("virtio_net"))71
+                    return true;72
+            } catch (Exception e) {73
+                Log.e(TAG, "Error readlink " + iface, e);74
+            }75
+            return false;76
+        }77
+78
         private void onNewLink(String ifname, boolean linkUp) {79
             if (!mFactory.hasInterface(ifname) && !ifname.equals(mTetheringInterface)) {80
                 Log.i(TAG, "onInterfaceAdded, iface: " + ifname);81
@@ -171,6 +186,25 @@ public class EthernetTracker {82
             }83
             Log.i(TAG, "interfaceLinkStateChanged, iface: " + ifname + ", up: " + 
linkUp);
84
             updateInterfaceState(ifname, linkUp);85
+            // M after interface up86
+            if (ifname != null && (ifname.contains("eth0") || ifname.contains("eth5"))87
+                    && isVirtioNetInterface(ifname)) {88
+                try {89
+                    IpConfiguration ipConfig = getIpConfiguration(ifname);90
+                    if (ipConfig != null && ipConfig.getStaticIpConfiguration() != null91
+                            && ipConfig.getStaticIpConfiguration().getIpAddress() != 
null) {
92
+                        LinkAddress linkAddress = 
ipConfig.getStaticIpConfiguration().getIpAddress();
93
+                        mNetd.networkAddInterface(INetd.LOCAL_NET_ID, ifname);94
+                        mNetd.interfaceAddAddress(ifname, 
linkAddress.getAddress().getHostAddress(),
95
+                            linkAddress.getPrefixLength());96
+                        List<android.net.RouteInfo> routes = new ArrayList<>();97
+                        routes.add(new android.net.RouteInfo(linkAddress, null, 
ifname));
98
+                        NetdUtils.addRoutesToLocalNetwork(mNetd, ifname, routes);99
+                    }100
+                } catch (ServiceSpecificException | RemoteException e) {101
+                    Log.e(TAG, "Failed to add " + ifname + " to local table: ", e);102
+                }103
+            }104

## PDF物理页 4

}105
 106
       107
 2、 yocto 侧对以太网的管理，可以用 yocto 自带的网络管理模块 NetworManager 进行:代码路径： meta/meta-
openembedded/meta-networking/recipes-connectivity/networkmanager
108
将平台用以太网线连接到路由器的 LAN 口，此模块会透过 dhcp 获得 ip ，然后设置路由等，实现联网。109
 110
commit 79007533f53f6fff2250e9190d49ef05c5cb85f5 (HEAD -> pvt_single_dev) 111
Author: shenjiyun <jyshen@pvetec.com> 112
Date:   Wed Nov 6 14:20:26 2024 +0800 113
 114
    feat(Net):配置 pcie 以太网 enp1s0 默认 ip 为192.168.1.100 115
 116
    Description: 配置 pcie 以太网 enp1s0 默认 ip 为192.168.1.100 117
 118
    Product: MT8676119
    Project: P39120
    Build: apass121
    Change-Id: Ie6c79bfb4ccb95ab35cf3ddd27b1039899e537c8122
 123
diff --git a/meta-networking/recipes-
connectivity/networkmanager/files/enp1s0.nmconnection b/meta-networking/recipes-
connectivity/networkmanager/files/enp1s0.nmconnection
124
new file mode 100755 125
index 0000000..a6e4da1126
--- /dev/null  127
+++ b/meta-networking/recipes-connectivity/networkmanager/files/enp1s0.nmconnection128
#  添加文件，配置默认 ip 和节点129
@@ -0,0 +1,12 @@130
+[connection] 131
+id=enp1s0 132
+type=ethernet133
+interface-name=enp1s0 # 指定网络节点134
+ 135
+[ipv4] 136
+method=manual // 配置 ip 137
+addresses1=192.168.1.100/24 138
+gateway=192.168.1.1 139
+ 140
+[ipv6] 141
+method=ignore142
\ No newline at end of file143
 144

## PDF物理页 5

diff --git a/meta-networking/recipes-
connectivity/networkmanager/networkmanager_1.46.0.bb b/meta-networking/recipes-
connectivity/networkmanager/networkmanager_1.46.0.bb
145
index 8184fcf..6a53edc 100644 146
--- a/meta-networking/recipes-connectivity/networkmanager/networkmanager_1.46.0.bb147
+++ b/meta-networking/recipes-connectivity/networkmanager/networkmanager_1.46.0.bb148
@@ -39,11 +39,13 @@ SRC_URI = " \149
     file://${BPN}.initd \150
     file://enable-dhcpcd.conf \151
     file://enable-iwd.conf \152
+    file://enp1s0.nmconnection \ # 添加文件拷贝到 Networkmanager 中  153
 SRC_URI:append:libc-musl = "${@bb.utils.contains('DISTRO_FEATURES', 'ld-is-lld', ' 
file://0001-linker-scripts-Do-not-export-_IO_stdin_used.patch', '', d)}" 
154
 155
 SRC_URI[sha256sum] = "722649e25362693b334371473802a729b0ec9ee283375096905f868808e74068"156
 S = "${WORKDIR}/NetworkManager-${PV}" 157
 158
 # ['auto', 'symlink', 'file', 'netconfig', 'resolvconf'] 159
@@ -320,4 +322,15 @@ do_install:append() { 160
     if ${@bb.utils.contains('PACKAGECONFIG','dhcpcd','true','false',d)}; then161
         install -Dm 0644 ${WORKDIR}/enable-dhcpcd.conf 
${D}${nonarch_libdir}/NetworkManager/conf.d/enable-dhcpcd.conf
162
     fi163
+    # 安装自定义文件到正确目录、必须要放在 NetworkManager/system-connections/下才会自动配置、
执行生效
164
+    install -d ${D}${sysconfdir}/NetworkManager/system-connections/ 165
+    install -m 0600 ${WORKDIR}/enp1s0.nmconnection 
${D}${sysconfdir}/NetworkManager/system-connections/ 
166
+ 167
 } 168
+# 重启服务169
+pkg_postinst_${PN}() { 170
+    if [ -n "$D" ]; then171
+        exit 1 172
+    fi173
+    systemctl restart NetworkManager || true174
+} 175
\ No newline at end of file176
 177
3. 在 yocto 下另起服务可以参照：178
yocto 侧起服务可以参考这个服务 meta/meta-mediatek-mt8676-hyp/recipes-apps/uos-init/files/uos-
init.service ，
179

## PDF物理页 6

二、 lua 文件关于网络相关配置的说明：
 
然后在 meta/meta-mediatek-mt8676-hyp/recipes-auto/images/mtk-core-image-auto8676-uos.bb 加上
该服务既可
180
 181
--  vmnet1
--[[2
void setVmnet(std::string id, std::string ip, std::string netmask)3
void setVmnet(std::string id, std::string ip, std::string netmask, std::string fe_MAC)4
uos_config:setVmnet("sample_eth0_if", "172.16.16.1", "255.255.255.0", 
"02:22:ee:b9:55:66");
5
--]]6
uos_config:setVmnet("vmnet0", "192.168.2.1", "255.255.255.0", "02:22:ee:b9:55:66")7
uos_config:setVmnet("vmnet-vccmni0", "172.17.0.1", "255.255.255.0", "02:22:ee:b9:55:68")8
uos_config:setVmnet("vmnet-vccmni1", "172.17.1.1", "255.255.255.0")9
uos_config:setVmnet("vmnet-vccmni2", "172.17.2.1", "255.255.255.0")10
uos_config:setVmnet("vmnet-vccmni3", "172.17.3.1", "255.255.255.0")11
--**************************************************************12
 13
上述中 std::string fe_MAC 字段修改的事 Android 端的 mac 地址， yocto 端的 mac 地址是随机的，如果要修改的
话可以参照上面 NetworkManager 修改 ip 地址的修改，增加
14
[ethernet]15
cloned-mac-address=00:11:22:33:44:55  # 固定  MAC16
# 或使用随机化策略17
cloned-mac-address=random    # 每次连接随机生成18
cloned-mac-address=stable    # 为每个网络生成固定随机地址19
 20


---
# SRC0053 8676平台Audio通路参考设计.drawio.pdf

来源：培训材料/PVT技术分享文档/8676平台Audio通路参考设计.drawio.pdf

SHA-256：ac6a8bed3a3e0789bc085e2fe3ca7aecb27ea3a8e61fa7ed43cf55fc7be4bcf1

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0053.html)

## PDF物理页 1

ADSP HIFI3 Core A
AFE    
I2S4-OUT (TDM5)
(4ch/192k/32bit)
FMI2S
（2ch/48k/32bit）
I2S2-IN 
 (I2s2)
(2ch/32bit)
I2S2-OUT
(I2S2)
(2ch/32bit)
PCM1 UL
(2ch/32bit)
PCM1 DL
(2ch/32bit)
DL_24CHUL5
Task Playback
SW Mixer1
Task
PB0
Modem
主驾
Bus
3
蓝⽛
电话
下⾏
sink
主驾
yocto
chime
2ch
主驾
Bus
0
媒体
2ch
CH1-4 =>
CH1-4
BT
语⾔
识别
录⾳
6mic+
6ref
7709
ADSP HIFI3 Core B
Task
ECNR
I2S0-OUT   ( I2S6)
(2ch/48k/32bit)
Task
ExtStream2
Task
PB1
Task
PB2
Task
PB5
主驾
Bus
1
导航
1ch
主驾
Bus
2
语⾳
播报
TTS
1ch
蓝⽛
电话
下⾏
source
蓝⽛
电话
上⾏
sink
CH1 =>
CH9
CH1 =>
CH10
CH1-2 =>
CH12-13
CH1-2 =>
CH1-2
00-12
playback_11
蓝⽛
电话
上⾏
source
I2S4-IN  (TDM5)
（4ch/192k/32bit）
UL_CM1
I2S1-IN(TDM4)
(2ch/48k/32bit)
I2S1-OUT  (TDM4)
(2ch/48k/32bit)
UL2DL2
ADSP多声道录⾳provider
16ch
主驾
yocto
主动
⾳浪
2ch
主驾
Bus
5
NGX
2ch
CH1-4 =>
CH1-4
DL3
CH1-2
=>
CH1-2
⻋内6mic+⻋内6ref+⻋外2ref
DVR
录⾳
2mic
FM
2CH 
slot len: 32bit
word len: 32bit
2CH 
slot len: 32bit
word len: 32bit
2CH 
slot len: 32bit
word len: 32bit
MT8676
主驾
Bus
14
杜⽐
媒体
8ch
Task
PB14
CH1-8 =>
CH1-8
CH1-2 =>
CH1-2
DL1
主驾
Bus
13
CarPlay
电话
下⾏
sink
UL1
主驾
CarPlay
电话
上⾏
source
CODEC
I2S6-OUT（I2S4）
(2ch/48k/32bit)
00-20
Capture_8
Task
 CAP MCH
Task
UL RAW
00-03
Playback_3
DL7
主驾
Bus
10000
yocto
⻋外
Avas
2ch
主驾
Bus
8
⻋内
对⻋
外讲
话
sink
2ch
主驾
Bus
10
⻋外
SDS
声⾳
2ch
主驾
Bus
11
⽆⻨
K歌
sink
2ch
主驾
Bus
7
铃声
1ch
主驾
Bus
4
系统
提⽰
⾳
1ch
00-22
Capture_10
4倍频
4ch/192k/32bit
16ch/32k/32bit
解倍频
16ch/48k/32bit
解倍频
16ch/48k/32bit
2CH *2pin
slot len: 32bit
word len: 32bit
2CH *1pin
slot len: 32bit
word len: 32bit
2CH *2pin
slot len: 32bit
word len: 32bit
2CH *1pin
slot len: 32bit
word len: 32bit
ecnr
⻋内
对⻋外
讲话
source
4mic+
4ref
⽆⻨
K歌
mic+
ref
UL3
00-16
Capture_4
DL8
00-06
Playback_6
00-14
Capture_2
00-01
Playback_12
00-02
Playback_2
00-19
Capture_7
00-08
Playback_9
Task
PB4
CH1 =>
CH11
Task
PB7
CH1 =>
CH14
DL4
CH1-2
=>
CH1-2
00-04
Playback_5
00-05
Playback_8
DL5
CH1-2
=>
CH1-2
DL6
CH1-2
=>
CH1-2
2CH *1pin
slot len: 32bit
word len: 32bit
00-07
Playback_7
总线⼯作模式
1.I2S模式：I2S0 I2S 1 I2S2 I2S6 FMI2S I2S4
2.TDM模式 ：
媒体类⾳量 ⻋外充电枪声⾳
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料
PVT参考资料


---
# SRC0054 8676快速开发手册-V1.1.pdf

来源：培训材料/PVT技术分享文档/8676快速开发手册-V1.1.pdf

SHA-256：98b9631a8af57157edbb11b3a6c99412e8261c516adc3ad3b755910bd6dd725d

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0054.html)

## PDF物理页 1

1
2025-1-17 8676 快速开发手册
PVT软件部
掌锐电子软件部
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 2

2
目录
一 、bootloader ....................................................................................................................................................... 6
1.1 code path .................................................................................................................................................... 6
1.2 lk2 log开关 .................................................................................................................................................. 6
1.3 lk to kernel简单时序图 ................................................................................................................................ 8
二、yocto kernel .......................................................................................................................................................9
2.1 config & dts ................................................................................................................................................. 9
2.2 增加ko driver流程 .......................................................................................................................................9
2.3 增加kernel的命令行启动参数 ...................................................................................................................11
2.3.1 增加 pageowner的命令行启动参数 .............................................................................................. 11
2.3.2 增加 cma的命令行启动参数修改cma内存大小 ............................................................................ 11
三、android kernel ................................................................................................................................................. 11
3.1 config&dts ................................................................................................................................................. 11
3.2 增加ko driver流程 .....................................................................................................................................12
3.3 增加kernel的命令行启动参数 ...................................................................................................................13
3.3.1 增加 pageowner的命令行启动参数 .............................................................................................. 13
四、yocto ................................................................................................................................................................14
4.1 增加一个应用流程(包括自启动以及相关属性配置) ..................................................................................14
4.2 YOCTO SDK 应用 ....................................................................................................................................17
4.3 ivi-shell 配置 ............................................................................................................................................. 21
五、 android .......................................................................................................................................................... 24
六、谦川SDK ..........................................................................................................................................................24
6.1 物理中断统计(irq_count) .......................................................................................................................... 24
6.2 各个pCPU上瞬时正在运行的vCPU的信息 (pcpu_attr) ...........................................................................26
6.3 各个vCPU在一段时间内的负载 (top) ...................................................................................................... 26
6.4 vcpu 累计运行时间 (vcpu_exec_accum) ................................................................................................ 28
6.5 vmexit原因统计(vcpu_exit_reason) ..........................................................................................................28
七、 系统 ............................................................................................................................................................... 30
7.1 bring up流程 ..............................................................................................................................................30
7.1.1 开机流程 ........................................................................................................................................ 30
7.1.2 安全启动流程 ................................................................................................................................. 31
7.2 目录结构介绍 ............................................................................................................................................33
7.2.1 代码结构 ........................................................................................................................................ 33
7.3 编译、下载、烧录 .................................................................................................................................... 36
7.3.1 编译环境配置 ................................................................................................................................. 36
7.3.2 代码下载 ........................................................................................................................................ 37
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 3

3
7.3.3 编译 ................................................................................................................................................38
7.3.4 烧录 ................................................................................................................................................39
7.4 系统虚拟化框架 ........................................................................................................................................43
7.5 内存 .......................................................................................................................................................... 44
7.5.1 OS size控制 ....................................................................................................................................44
7.5.2 内存layout ...................................................................................................................................... 44
7.5.3 查询内存信息 ................................................................................................................................. 48
7.5.4 新增reserved 样例 ........................................................................................................................ 48
7.6 partition ..................................................................................................................................................... 49
7.6.1 parititon layout ................................................................................................................................ 49
7.6.2 如何新增一个partition .................................................................................................................... 53
7.6.3 partition debug ................................................................................................................................58
7.7 OS间通信 .................................................................................................................................................. 60
7.7.1 SOS & UOS 间通信 .......................................................................................................................61
7.7.2 UOS & UOS间通信 .........................................................................................................................79
7.7.3 MCU & CPU间通信 ........................................................................................................................ 80
7.8 外设通信协议 ............................................................................................................................................82
7.8.1 SPI .................................................................................................................................................. 82
7.8.2 I2C .................................................................................................................................................. 90
7.8.3 UART .............................................................................................................................................. 91
7.8.4 GPIO ...............................................................................................................................................95
7.9 保活机制 ...................................................................................................................................................97
7.9.1 进程保活 ........................................................................................................................................ 97
7.9.2 系统保活 ........................................................................................................................................ 97
7.9.3 控制虚拟机状态 ........................................................................................................................... 100
7.10. misc debug ...........................................................................................................................................101
7.10.1 log【抓取，分析】 ................................................................................................................... 101
7.10.2 adb【连接，切换】 .................................................................................................................... 104
7.10.3 sos uos console 切换 ................................................................................................................ 105
7.10.4 android yocto 通过console 数据交互 ....................................................................................... 106
7.10.5 remount挂载方法 ........................................................................................................................106
7.11 cpu配置 ................................................................................................................................................. 107
7.11.1 虚拟机CPU配置 ......................................................................................................................... 107
7.11.2 Nebula CPU调度策略配置 ......................................................................................................... 107
7.12 中断配置 ...............................................................................................................................................108
7.13 STR ....................................................................................................................................................... 111
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 4

4
7.13.1 STR机制概要说明 ...................................................................................................................... 111
7.13.2 STR框架 ..................................................................................................................................... 112
7.13.3 控制guest os suspend/resume方式 .......................................................................................... 116
7.13.4 调试方法 .................................................................................................................................... 117
7.14 OS间内存共享 .......................................................................................................................................121
7.14.1 Vdmabuf ..................................................................................................................................... 121
7.15 OS内进程间内存共享 ............................................................................................................................122
7.15.1 通过Binder机制 ..........................................................................................................................122
7.16 debug入口办法 ..................................................................................................................................... 127
7.16.1 常用debug方式 .......................................................................................................................... 127
7.16.2 串口log入手确认启动时序 ......................................................................................................... 128
7.16.3 从问题种类选择合适debug工具 ................................................................................................ 130
7.16.4 基础器件debug 方式 ................................................................................................................. 131
7.17 dmabuf .................................................................................................................................................. 135
7.17.1 接口介绍 .................................................................................................................................... 135
八、模块 ............................................................................................................................................................... 136
8.1 Display .................................................................................................................................................... 136
8.1.1 Display 总览 .................................................................................................................................136
8.1.2 Configuration / Customization Guideline ..................................................................................... 142
8.1.3 Debug Tips ................................................................................................................................... 149
8.1.4 Troubleshooting ............................................................................................................................153
8.2 Camera ................................................................................................................................................... 154
8.2.1 camera虚拟化概念介绍 ................................................................................................................154
8.2.2 camera虚拟化框架介绍 ................................................................................................................155
8.2.3 camera主要code位置 ................................................................................................................... 155
8.2.4 配置/客制化指南 .......................................................................................................................... 156
8.2.5 Debug手段 ....................................................................................................................................159
8.3 thermal .................................................................................................................................................... 162
8.3.1 Architecture .................................................................................................................................. 162
8.3.2 Thermal sensor ............................................................................................................................ 163
8.3.3 Linux thermal framework ..............................................................................................................163
8.3.4 配置文件 ...................................................................................................................................... 166
8.3.5 thermal debug .............................................................................................................................. 172
8.4 virtio_input ...............................................................................................................................................173
8.4.1 虚拟化框架介绍 ........................................................................................................................... 173
8.4.2 Input数据传输 ............................................................................................................................... 174
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 5

5
8.4.3 input快速开发 ............................................................................................................................... 175
8.4.4 input debug ...................................................................................................................................177
8.5 Audio ....................................................................................................................................................... 177
8.5.1 Audio AFE HW ............................................................................................................................. 177
8.5.2 Audio HAL .................................................................................................................................... 183
8.5.3 Audio Virtualization ...................................................................................................................... 189
8.6 secure boot ............................................................................................................................................. 199
8.6.1 sign flow ........................................................................................................................................199
8.6.2 verify flow ......................................................................................................................................200
8.6.3 key配置 .........................................................................................................................................200
8.6.4 常用的配置 ...................................................................................................................................202
8.7 optee ....................................................................................................................................................... 205
8.7.1 optee简介 ..................................................................................................................................... 205
8.7.2 optee应用开发 .............................................................................................................................. 206
8.8 OTA .........................................................................................................................................................208
8.8.1 OTA简介 ....................................................................................................................................... 208
8.8.2 如何编译Hypervisor(L+L+A) OTA升级包 ....................................................................................210
8.8.3 如何进行Hypervisor OTA升级 .....................................................................................................213
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 6

6
一 、bootloader
1.1 code path
ATF: mt8676/vendor/mediatek/proprietary/trustzone/tf-a-2.8/
LK1： yocto/src/bsp/lk2/
LK2：yocto/src/bsp/lk2/
LK1和LK2 共享一套代码，只是编译选项不一样。
1.2 lk2 log开关
yocto/src/bsp/lk2/top/include/lk/trace.h
12 /* trace routines */
13 #define TRA
CE_ENTRY printf("%s: entry\n", __func__)
14 #define TRACE_EXIT printf("%s: exit\n", __func__)
15 #define TRACE_ENTRY_OBJ printf("%s: entry obj %p\n", __func__, this)
16 #define TRACE_EXIT_OBJ printf("%s: exit obj %p\n", __func__, this)
17 #define TRACE printf("%s:%d\n", __func__, __LINE__)
18 #define TRACEF(str, x...) do { printf("%s:%d: " str, __func__, __LINE__, ## x); } while (0)
19
20 /* trace routines that work if LOCAL_TRACE is set */
21 #define LTRACE_ENTRY do { if (LOCAL_TRACE) { TRACE_ENTRY; } } while (0)
22 #define LTRACE_EXIT do { if (LOCAL_TRACE) { TRACE_EXIT; } } while (0)
23 #define LTRACE do { if (LOCAL_TRACE) { TRACE; } } while (0)
24 #define LTRACEF(x...) do { if (LOCAL_TRACE) { TRACEF(x); } } while (0)
25 #define LTRACEF_LEVEL(level, x...) do { if (LOCAL_TRACE >= (level)) { TRACEF(x);
} } while (0)
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 7

7
可以看到是根据level和LOCAL_TRACE的值确定是否打印log的。这个值都是放到每个模块自己去设定是否打印
的。比如
lk2 init模块
yocto/src/bsp/lk2/top/init.c
#define LOCAL_TRACE 0
将上面的 宏设置为1即可打开init模块的log
#define LOCAL_TRACE 1
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 8

8
1.3 lk to kernel简单时序图
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 9

9
二、yocto kernel
2.1 config & dts
多系统项目config & dts路径：
yocto/src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/configs
yocto/src/kernel/linux/v6.1_mt8676/co_device_module/kernel/configs/
多系统平台dts路径：
yocto/src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/mt6897.dts
yocto/meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/auto8676p1_64_hyp.dts
多系统dws路径：
yocto/src/devtools/dct/dws/mt6897/auto8676p1_64_hyp.dws
导出yocto板端的设备树文件/sys/firmware/fdt可以看到实际所有的dts信息（因为有的是lk阶段动态往dtb文件写的
）
通过命令dtc -f -I dtb -O dts -o ydts fdt反汇编
config overlay：
gki_defconfig as base，merge下面Kernel configs
mgk_64_k61_defconfig， userdebug.config，nebula_hypervisor.config
(nebula_hypervisor.config层级最高，上面merge的configs 是按照merge层级从低到高排列的)
sos 的 config可以从下面文件看到加的是否生效：
yocto/build-sos/tmp/work/auto8676p1_64_hyp-poky-linux/linux-mtk-
extension/6.1/build/common/include/generated/autoconf.h
tbox的config 可以从下面文件看到加的是否生效：
yocto/build-tbox/tmp/work/auto8676p1_64_uos_tbox-poky-linux/linux-mtk-extension-
uos/6.1/build/common/include/generated/autoconf.h
2.2 增加ko driver流程
以添加himax_touch触摸驱动为例，描述如何添加驱动
（1）在config文件中添加配置项，例如： arch/arm64/configs/mgk_64_k66_defconfig中添加
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 10

10
CONFIG_TOUCHSCREEN_HIMAX_CHIPSET=m
CONFIG_TOUCHSCREEN_HIMAX_COMMON=y
CONFIG_TOUCHSCREEN_HIMAX_DEBUG=y
CONFIG_TOUCHSCREEN_HIMAX_INCELL=y
CONFIG_TOUCHSCREEN_HIMAX_IC_HX83193=y
CONFIG_TOUCHSCREEN_HIMAX_SELF_TEST=y
（2）在设备树中添加对应的设备树配置，例如：
arch/arm64/boot/dts/mediatek/cust_mt8676_display_interface.dtsi中添加
hxchipset_ts@48 {
status = "okay";
compatible = "himax,hxcommon";
reg = <0x48>;
interrupt-parent = <&pio>;
interrupts = <183 IRQ_TYPE_LEVEL_LOW>;
himax,TSIX = <&pio 183 0x0>;
himax,panel-coords = <0 2560 0 1440>;
himax,display-coords = <0 2560 0 1440>;
};
（3）在kernel drivers对应目录中添加设备驱动源码和编译Kconfig和Makefile：
config TOUCHSCREEN_HIMAX_CHIPSET
tristate "Himax touchpanel CHIPSET"
depends on I2C
help
Say Y here if you have a Himax CHIPSET touchscreen.
HIMAX controllers are multi touch controllers which can
report 10 touches at a time.
If unsure, say N.
source "$(KCONFIG_EXT_PREFIX)drivers/input/touchscreen/hxchipset/Kconfig"
Makefile中添加：
obj-$(CONFIG_TOUCHSCREEN_HIMAX_CHIPSET) += hxchipset/
（4）如果是编译为ko文件，需要在 kernel/kleaf/mgk_64_k61.bzl中添加对应的ko路径
"drivers/input/touchscreen/hxchipset/himax_mmi.ko",
（5）如果是编译为ko文件，需要在recipe对应路径yocto/meta/meta-mediatek-mt8676-hyp/recipes-
kernel/linux/ko_order_table/ 目录下对应的子目录的ko_order_table.csv文件中添加对应的ko声明，
以便生成的ko文件能被包含到对应的镜像中
himax_mmi.ko,/../kernel_device_modules-
6.1/drivers/input/touchscreen/hxchipset/himax_mmi.ko,vendor,Y,N,user
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 11

11
/userdebug/eng
2.3 增加kernel的命令行启动参数
yocto/src/bsp/lk2/app/blxboot/blxboot.c 的函数update_dtb增加kcmdline_append(""); 添加启动参数
2.3.1 增加 pageowner的命令行启动参数
static void update_dtb(void)
{
....
kcmdline_append("page_owner=on panic_on_taint=20");
....
}
2.3.2 增加 cma的命令行启动参数修改cma内存大小
static void update_dtb(void)
{
....
kcmdline_append("cma=256M");
....
}
三、android kernel
3.1 config&dts
多系统config路径：
android/kernel/kernel_device_modules-6.1/arch/arm64/configs/mgk_64_k61_defconfig
android/kernel/kernel_device_modules-6.1/kernel/configs/
多系统项目dts路径：
android/kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/auto8676p1_64_bsp_vm.dts
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 12

12
多系统dws路径：
android/vendor/mediatek/proprietary/tools/dct/dws/mt6897/auto8676p1_64_bsp_vm.dws
config overlay：
gki_defconfig as base ，merge下面Kernel configs
mgk_64_k61_defconfig auto.config ，wifionly.config ，userdebug.config， nebula_vm.config
(nebula_vm.config层级最高， 上面merge的configs 是按照merge层级从低到高排列的)
编译后可以从下面文件看config有没有生效
android/out/target/product/auto8676p1_64_bsp_vm/obj/KERNEL_OBJ/kernel-6.1/include/generated/autoconf.h
导出Android板端的设备树文件/sys/firmware/fdt可以看到实际所有的dts信息（因为有的是lk阶段动态往dtb文件
写的）
通过命令dtc -f -I dtb -O dts -o ydts fdt反汇编
3.2 增加ko driver流程
android/kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/auto8676p1_64_bsp_vm.dts
android/kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/mt6897.dts
多系统android dws路径,以8676为例：
以添加serdes-dp驱动为例，描述如何添加驱动
（1）在config文件中添加配置项，例如： android/kernel/kernel_device_modules-
6.1/arch/arm64/configs/mgk_64_k61_defconfig中添加
CONFIG_DRM_SERDES_DP=m
（2）在设备树中添加对应的设备树配置，例如： android/kernel/kernel_device_modules-
6.1/arch/arm64/boot/dts/mediatek/mt6897.dts中添加
serdes_dp: serdes_dp {
compatible = "maxiam,serdes-dp";
status = "okay";
};
（3）在kernel drivers对应目录中添加设备驱动源码和编译Kconfig和Makefile：
android/kernel/kernel_device_modules-6.1/drivers/gpu/drm/bridge
config DRM_SERDES_DP
tristate "DRM Serdes DP Support for Platform SoCs"
depends on OF
select SERDES_DP
help
Enable support for the Serdes-based DisplayPort (DP) interface
on Mediatek SoCs. This driver provides the necessary functionality
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 13

13
to initialize and manage the Serdes hardware that handles the
high-speed data lanes used for DisplayPort connections on these
platforms. Enabling this option will allow the DRM subsystem to
communicate with DisplayPort devices via the Serdes interface.
android/kernel/kernel_device_modules-6.1/drivers/gpu/drm/bridge/Makefile中添加：
obj-$(CONFIG_DRM_SERDES_DP) += serdes-dp.o
（4）如果是编译为ko文件，需要在 android/kernel/kernel_device_modules-6.1/kernel/kleaf/mgk_64_k61.bzl中
添加对应的ko路径
mgk_64_k61_device_modules.append("drivers/gpu/drm/bridge/serdes-dp.ko"
（5）如果是编译为ko文件，需要在recipe对应路径
android/device/mediateksample/auto8676p1_64_bsp_vm/ko_order_table.csv中添加对应的ko声明， 以便生成
的ko文件能被包含到对应的镜像中
serdes-dp.ko,/../kernel_device_modules-6.1/drivers/gpu/drm/bridge/serdes-
dp.ko,ramdisk,Y,Y,user/userdebug/eng
3.3 增加kernel的命令行启动参数
yocto/src/bsp/lk2/platform/mediatek/common/aee/debug_cmd_init.c 的函数kernel_mm_cmd_init增加
kcmdline_append(""); 添加启动参数
3.3.1 增加 pageowner的命令行启动参数
static void kernel_mm_cmd_init(void *fdt, int chosen_offset)
{
#if LK_DEBUGLEVEL > 0
....
kcmdline_append("page_owner=on panic_on_taint=20");
#endif
....
}
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 14

14
四、yocto
4.1 增加一个应用流程(包括自启动以及相关属性配置)
(1) 添加recipes-*/[模块]/[模块].bb
如meta/meta-mediatek-mt8676/recipes-support/mcu_messenger/mcu_messenger.bb
#
DESCRIPTION = "pvt mcu messenger"
LICENSE = "MediaTekProprietary"
#
DEPENDS = "platform-libs platform-libs-common"
LICENSE = "BSD-3-Clause & MediaTekProprietary"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/BSD-3-
Clause;md5=550794465ba0ec5312d6919e203a55f9 \
file://${PROPRIETARY_LICENSE_PATH}/MediaTekProprietary;md5=c5d17c6905715d0948a3d6087602d12d
"
PN='mcu_messenger'
# fog systemd
inherit fog systemd
#
SRC_URI= "fog://src/apps/spm-base/mcu_messenger;name=mcu_messenger;prebuilt=none"
SRCREV_mcu_messenger= "${AUTOREV}"
S = "${WORKDIR}/git"
SYSTEMD_PACKAGES = "${PN}"
#
SYSTEMD_SERVICE_${PN} = "mcu_messenger.service"
FILES:${PN}:append = " \
${bindir} \
${systemd_unitdir}/system/mcu_messenger.service \
"
# do_compile
do_compile() {
oe_runmake \
CFLAGS=" -lpthread ${CFLAGS}" \
LDFLAGS="-lstdc++ -lpthread -lm ${LDFLAGS}" \
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 15

15
BOOTDEV_TYPE=${BOOTDEV_TYPE}
}
# do_instal
do_install(){
install -d ${D}/usr/bin/
install -m 0777 ${S}/mcu_messenger_bin ${D}/usr/bin/
if ${@bb.utils.contains('DISTRO_FEATURES','systemd','true','false',d)}; then
install -d ${D}${systemd_unitdir}/system/
install -m 0644 ${B}/mcu_messenger.service ${D}${systemd_unitdir}/system
#/etc/systemd/system/basic.target.wants
install -d ${D}/${sysconfdir}/systemd/system/basic.target.wants/
ln -s /lib/systemd/system/mcu_messenger.service ${D}/${sysconfdir}/systemd/system/basic.target.wants
/mcu_messenger.service
fi
}
编译命令：bitbake -s [模块] && bitbake [模块]
（2）添加源码和service文件
yocto/src/apps/spm-base/mcu_messenger$ tree
├── main.cpp
├── Makefile
├── mcu_messenger.service
#mcu_messenger.service
[Unit]
Description=MCU Messenger Daemon #描述
After=android-tools-adbd.service #设置service依赖，启动顺序
[Service]
ExecStartPre=/bin/sleep 15
ExecStart=/usr/bin/mcu_messenger_bin
Restart=always
#StandardOutput=kmsg+console
Type=simple
StandardOutput=tty
StandardError=tty
[Install]
WantedBy=basic.target
（2）service配置介绍
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 16

16
[Unit]区块通常是配置文件的第一个区块，用来定义 Unit 的元数据，以及配置与其他 Unit 的关系。它的主要字
段如下。
· Description：简短描述
· Documentation：文档地址
· Requires：当前 Unit 依赖的其他 Unit，如果它们没有运行，当前 Unit 会启动失败
· Wants：与当前 Unit 配合的其他 Unit，如果它们没有运行，当前 Unit 不会启动失败
· BindsTo：与Requires类似，它指定的 Unit 如果退出，会导致当前 Unit 停止运行
· Before：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之后启动
· After：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之前启动
· Conflicts：这里指定的 Unit 不能与当前 Unit 同时运行
· Condition...：当前 Unit 运行必须满足的条件，否则不会运行
· Assert...：当前 Unit 运行必须满足的条件，否则会报启动失败
[Install]通常是配置文件的最后一个区块，用来定义如何启动，以及是否开机启动。它的主要字段如下。
· WantedBy：它的值是一个或多个 Target，当前 Unit 激活时（enable）符号链接会放入
/etc/systemd/system目录下面以 Target 名 + .wants后缀 构成的子目录中
· RequiredBy：它的值是一个或多个 Target，当前 Unit 激活时，符号链接会放入/etc/systemd/system目录
下面以 Target 名 + .required后缀构 成的子目录中
· Alias：当前 Unit 可用于启动的别名
· Also：当前 Unit 激活（enable）时，会被同时激活的其他 Unit
[Service]区块用来 Service 的配置，只有 Service 类型的 Unit 才有这个区块。它的主要字段如下。
· Type：定义启动时的进程行为。它有以下几种值。
· Type=simple：默认值，执行ExecStart指定的命令，启动主进程
· Type=forking：以 fork 方式从父进程创建子进程，创建后父进程会立即退出
· Type=oneshot： 一次性进程，Systemd 会等当前服务退出，再继续往下执行
· Type=dbus：当前服务通过D-Bus启动
· Type=notify：当前服务启动完毕，会通知Systemd，再继续往下执行
· Type=idle：若有其他任务执行完毕，当前服务才会运行
· ExecStart：启动当前服务的命令
· ExecStartPre：启动当前服务之前执行的命令
· ExecStartPost：启动当前服务之后执行的命令
· ExecReload：重启当前服务时执行的命令
· ExecStop：停止当前服务时执行的命令
· ExecStopPost：停止当其服务之后执行的命令
· RestartSec：自动重启当前服务间隔的秒数
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 17

17
· Restart：定义何种情况 Systemd 会自动重启当前服务，可能的值包括always（总是重启）、on-success
、on-failure、on-abnormal、on-abort、 on-watchdog
· TimeoutSec：定义 Systemd 停止当前服务之前等待的秒数
· Environment：指定环境变量
（3）Unit 管理
# 立即启动一个服务
$ systemctl start qtdemo.service
# 立即停止一个服务
$ systemctl stop qtdemo.service
# 重启一个服务
$ systemctl restart qtdemo.service
# 杀死一个服务的所有子进程
$ systemctl kill qtdemo.service
# 查看一个服务的状态
$ systemctl status qtdemo.service
# 服务开机自启动
$ systemctl enable qtdemo.service
# 服务开机不自启动
$ systemctl disable qtdemo.service
# 显示服务依赖关系
$systemctl list-dependencies [服务名] [--reverse]
4.2 YOCTO SDK 应用
（1）介绍
在Yocto工程添加软件，整个编译过程还是较麻烦的。如果只编译测试工具，可以通过yocto sdk达到快速编译的
目的，并将编译好工具再加入映像中即可。 以下为SDK生成输出工作流。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 18

18
构建输出的是一组特定形式文件，其中包括SDK自解压安装程序(*.sh)、主机、目标清单文件以及用于SDK测试
的文件。SDK详细介绍可参阅 https://www. yoctoproject.org/docs/2.7/sdk-manual/sdk-manual.html。
（2）SDK构建及安装
a. 执行命令编译构建SDK
针对8676平台的
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-hyp/conf/templates/auto8676p1_64_hyp
source meta/poky/oe-init-build-env
bitbake -c populate_sdk mtk-core-image-auto8676
b.查看编译输出
编译输出位于 build/tmp/deploy/sdk 目录：
其中 *.sh 文件时SDK自解压程序，执行该文件将在指定目录下安装SDK。
c.安装sdk
在任意目录下创建mysdk目录并记录其绝对路径，然后执行build/tmp/deploy/sdk目录下sdk安装脚本并指定安装
目录为[自定义]/mysdk，结果如下：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 19

19
进入/aosp/pvt2/hy8678/yocto_8/mysdk目录查看，结果如下：
SDK是由一个交叉开发工具链、 一组库、头文件以及一个SDK环境设置脚本组成，如上所示sysroots就是最终
打包到映像中的文件系统。
d. 配置QT编译环境
当前sdk的QT环境缺失一些配置info，需要修改。
i、mysdk/sysroots/x86_64-pokysdk-linux/usr/bin/qt.conf 的定义的路径要跟mysdk路径对应
改前
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 20

20
改后
ii、sdk缺mkspecs
复制一个qtdemo的程序下的
yocto\build\tmp\work\aarch64-poky-linux\homeui\1.0\recipe-sysroot\usr\lib64\mkspecs到sdk：
yocto\mysdk\sysroots\aarch64-poky- linux\lib64\mkspecs
(3) SDK使用
进入mysdk目录下，执行 . environment-setup-aarch64-poky-linux命令（注意前面有个 . 号且.号后面有空格）
，结果如下。 注意：每次使用SDK都需要执行一次该脚本（或新打开终端）。
执行 $CC -v 命令查看编译器详情：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 21

21
执行 qmake -v 命令查看qt编译器详情：
编译Makefile
编译qt pro
4.3 ivi-shell 配置
（1）介绍
通过配置文件ivi_shell_cfg.pb.txt的方式，方便配置UI应用的显示信息：显示大小、尺寸、位置和层级。
目录结构：
yocto/meta/meta-mediatek-mt8676/recipes-graphics/wayland/
├── pvtsoft-layer-surfaces
│ ├── add_layer_surface.service //服务
│ ├── ivi_cfg.pb.cpp //protobuf.3.21.5.0生成
│ ├── ivi_cfg.pb.h //protobuf.3.21.5.0
│ ├── ivi_cfg.proto //protobuf数据结构
│ ├── ivi_shell_cfg.pb.txt //配合文件，如上
│ ├── Makefile
│ └── pvtsoft-layer-surfaces.cpp //源码
├── pvtsoft-layer-surfaces.bb //yocto编译脚本
单编：bitbake -c cleansstate pvtsoft-layer-surfaces && bitbake pvtsoft-layer-surfaces
采用protobuf数据结构管理图层配置，服务解析/vendor/etc/hyper_android/ivi_shell_cfg.pb.txt
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 22

22
display_info { #第一个显示屏
connector_name: "DP-1" #必要参数，用于匹配connector_name
screen_width: 1920, #非必要，从weston获取屏参
screen_height: 720, #非必要，从weston获取屏参
layer_count: 6, #非必要，从下面layers个数获取
layers { #第一个layer
layer_id: 90500, #必要参数，用于创建layer
opacity: 1.0, #必要参数，设置layer透明度
sourceX: 0, #可选，截取layer显示区域x，不填为0
sourceY: 0, #可选，截取layer显示区域y，不填为0
source_width:1920, #可选，截取layer显示区域w，不填为screen_width
source_height:720, #可选，截取layer显示区域h，不填为 screen_height
destX: 0, #可选，设置layer显示起始位置x，不填为0
destY: 0, #可选，设置layer显示起始位置y，不填为0
dest_width: 1920, #可选，设置layer显示起始位置w，不填为screen_width
dest_height: 720, #可选，设置layer显示起始位置h，不填为 screen_height
visibility: true, #必要参数，设置layer是否显示
surface_count: 1, #非必要，从下面surfaces个数获取
surfaces { #layer： 90500下的第一个surface
surface_id: 90500500, #必要参数，用于识别surface，大于0时，用于识别ivi_surface client
surface_name: "hmi", #可选，当surface_id为0时，用于识别xdg_surface client
opacity: 1.0, #必要参数，设置surface透明度
sourceX: 0, #可选，截取surface显示区域x，不填为0
sourceY: 0, #可选，截取surface显示区域y，不填为0
source_width:1920, #可选，截取surface显示区域w，不填为client width
source_height:720, #可选，截取surface显示区域h，不填为 client height
destX: 0, #可选，设置surface显示起始位置x，不填为0
destY: 0, #可选，设置surface显示起始位置y，不填为0
dest_width: 1920, #可选，设置surface显示起始位置w，不填为client width
dest_height: 720, #可选，设置surface显示起始位置h，不填为 client height
visibility: true, #必要参数，设置surface是否显示
}
surfaces { #layer： 90500下的第二个surface，层级是往下越高，即显示在上层
surface_id: 90500501,
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 23

23
.......
}
}
layers { #DP-1下的第二个layer，层级是往下越高，即显示在上层
layer_id: 90700,
......
surfaces {
surface_id: 90700700,
.......
}
}
}
display_info { #第二个显示屏
connector_name: "DSI-1"
......
}
ivi_shell_cfg.pb.txt配置说明：
1、动态分配layer， 一个screen上添加几组layer，就分配几组layer，且layer组往后定义的层级越高。
2、同一layer下可以绑定多个surface，surface组往后定义的层级越高。但只能定义ivi_surface。需要通过
surface_id来设置层 级。
3、id可以定义十进制和十六进制（0x）
4、client可以是ivi_surface和xdg_surface。通过surface_id是否为0区分。
5、同一surface可以和多个layer绑定，实现多显。
FAQ：
1、client显示超过屏大小是否会闯屏？
答：在ivi模式下不会，设定layer和surface大小大于screen大小，不会显示到第二屏上。只会显示绑定的screen
上。
也通过ivi可以设定layer和surface大小，严格规定显示范围。
2、ivi-shell是否给出旋转接口
答：否，在ilm_control.h里面没找到到接口，建议在client实现。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 24

24
五、android
较为开源，暂无详细说明
六、谦川SDK
板卡上目录结构：
```bash
sh-3.2# ls -Fl /sys/kernel/debug/nebula_trace/
total 0
-r--r--r-- 1 root root 0 Apr 28 17:42 available_trace # 所有debug trace列表
drwxr-xr-x 2 root root 0 Apr 28 17:42 comcat_link/ # GRT internal
drwxr-xr-x 2 root root 0 Apr 28 17:42 cpu-ipi-delay/ # GRT internal
-r--r--r-- 1 root root 0 Apr 28 17:42 irq-count # 中断数量
drwxr-xr-x 2 root root 0 Apr 28 17:42 irq-delay/ # GRT internal
drwxr-xr-x 2 root root 0 Apr 28 17:42 ktrace/ # Nebula Ktrace, 详情见后续章节
-r--r--r-- 1 root root 0 Apr 28 17:42 pcpu-status # PCPU当前运行状态
drwxr-xr-x 2 root root 0 Apr 28 17:42 top/ # Nebula内部top
-r--r--r-- 1 root root 0 Apr 28 17:42 vcpu-exit-reason # per-VM/per-vcpu退出原因统计
-r--r--r-- 1 root root 0 Apr 28 17:42 vcpu-run-time-accumulate # per-VM总运行时间
drwxr-xr-x 2 root root 0 Apr 28 17:42 vcpu-sched-delay/ # per-VM/per-vcpu调度延迟统计
```
6.1 物理中断统计(irq_count)
如下图，可以和 Linux /proc/interrupts 对照
```bash
sh-3.2# cat irq_count
[Nebula] GIC V3 irq count:
irq-80 : 1
irq-289 : 1104
irq-302 : 10
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 25

25
irq-343 : 828
irq-352 : 432
irq-361 : 11766
irq-362 : 9388
irq-363 : 11082
irq-374 : 8
irq-375 : 7
irq-377 : 11
irq-380 : 6
irq-381 : 2
irq-428 : 1
irq-449 : 15
irq-468 : 1
irq-479 : 1
irq-482 : 482096
irq-483 : 481341
irq-515 : 241080
irq-631 : 1013
irq-636 : 34402
irq-638 : 72280
irq-640 : 6369
irq-716 : 1
irq-717 : 5
irq-722 : 122
irq-742 : 3
irq-744 : 3
irq-821 : 9
irq-822 : 10
irq-823 : 14
irq-825 : 1
irq-845 : 418143
irq-932 : 3
irq-1023 : 6893
```
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 26

26
6.2 各个pCPU上瞬时正在运行的vCPU的信息 (pcpu_attr)
```bash
sh-5.1# cat pcpu_attr
pcpu0 is running on hypervisor
pcpu1 is running on hypervisor
pcpu2, vm0, vcpu2, vcpu_thread_priority:17
pcpu3, vm1, vcpu3, vcpu_thread_priority:16
pcpu4 is running on hypervisor
pcpu5 is running on hypervisor
pcpu6 is running on hypervisor
pcpu7 is running on hypervisor
```
6.3 各个vCPU在一段时间内的负载 (top)
各 VM 对应的 vcpu 线程名：
sos:vcpu-N
uos:vcpu-N
```bash
sh-5.1# cd top/
sh-5.1# echo 1 > enable
sh-5.1# cat top
PID TID TIME% STATE NAME
2349 2705 12.93 block sos:vcpu-0
2349 2813 11.28 block sos:vcpu-1
2349 2823 8.54 block sos:vcpu-2
2349 2833 6.36 block sos:vcpu-3
2985 3746 6.15 block uos:vcpu-0
2985 4020 4.11 block uos:vcpu-1
2985 4030 3.22 block uos:vcpu-2
2985 4041 2.64 block uos:vcpu-3
2349 2873 1.57 block sos:vcpu-7
2985 4051 1.54 block uos:vcpu-4
2349 3649 1.44 block sos:vhm-sos-thread
2985 3654 0.98 block uos:vhm-uos-thread
2349 2863 0.92 block sos:vcpu-6
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 27

27
2985 4061 0.82 block uos:vcpu-5
2349 2843 0.62 block sos:vcpu-4
2349 2853 0.57 block sos:vcpu-5
2985 3189 0.44 block uos:trapbell-handler-0
2985 3194 0.42 block uos:trapbell-handler-1
2985 4071 0.38 block uos:vcpu-6
2985 4081 0.20 block uos:vcpu-7
2349 2715 0. 6 run sos:nbl_loading_show
2349 3724 0. 0 block sos:fastcall-srv
1716 1808 0. 0 block devhost:misc:initial-thread
1044 1047 0. 0 block bin/devmgr:bin/devmgr
1044 1100 0. 0 block bin/devmgr:loader-service
1304 1411 0. 0 block devhost:sys:initial-thread
1439 1536 0. 0 block devhost:test:initial-thread
1557 1688 0. 0 block devhost:root:initial-thread
1716 1967 0. 0 block devhost:misc:debug-reader
1113 1134 0. 0 block fshost:initial-thread
1113 1189 0. 0 block fshost:root-dispatcher
1113 1213 0. 0 block fshost:loader-service
1233 1291 0. 0 block crashlogger:initial-thread
1233 1573 0. 0 block crashlogger:self-dump-thread
1309 1385 0. 0 block netsvc:initial-thread
2720 2771 0. 0 block sh:console:initial-thread
1440 1617 0. 0 block appmgr:initial-thread
2056 2076 0. 0 block sysmgr:initial-thread
2349 2368 0. 0 block sos:initial-thread
2349 2559 0. 0 block sos:io-handler-0
2349 2564 0. 0 block sos:io-handler-1
2349 2569 0. 0 block sos:trapbell-handler-0
2349 2574 0. 0 block sos:trapbell-handler-1
2349 2682 0. 0 block sos:pthread_t:0x4a5a8a493000
2349 2699 0. 0 block sos:thrd_t:0xc67f198bb000/TLS=0x650
2349 2906 0. 0 block sos:thrd_t:0xd400e8387000/TLS=0x650
2985 3004 0. 0 block uos:initial-thread
2985 3179 0. 0 block uos:io-handler-0
2985 3184 0. 0 block uos:io-handler-1
2985 3628 0. 0 block uos:thrd_t:0x62e42c8c3000/TLS=0x660
```
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 28

28
6.4 vcpu 累计运行时间 (vcpu_exec_accum)
vCPU的实际运行时间的累加值，单位秒，精确到ms。
```bash
sh-5.1# cat vcpu_exec_accum
[Nebula] VM execution time:
time elapsed since system boot: 7123.642
PCPU0:
VM0: 838.782
VM1: 466.687
PCPU1:
VM0: 679.307
VM1: 310.521
PCPU2:
VM0: 559.256
VM1: 223.804
PCPU3:
VM0: 453.999
VM1: 169.751
PCPU4:
VM0: 50.562
VM1: 103.563
PCPU5:
VM0: 54.33
VM1: 72.762
PCPU6:
VM0: 63.133
VM1: 42.438
PCPU7:
VM0: 108.358
VM1: 33.726
```
6.5 vmexit原因统计(vcpu_exit_reason)
该值为系统上电后的累计值。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 29

29
```bash
sh-5.1# cat vcpu_exit_reason
[Nebula] VCPU exit reason:
VCPU0:
VM0:
physical-interrupt: 4067174
wfi_wfe_instruction: 9753815
smc_instruction: 1431739
hvc_instruction: 0
system_instruction: 14631183
instruction_abort: 0
data_abort: 219786
unknown: 0
failure: 0
VM1:
physical-interrupt: 1425605
wfi_wfe_instruction: 16490743
smc_instruction: 38869
hvc_instruction: 0
system_instruction: 2227845
instruction_abort: 0
data_abort: 1077634
unknown: 0
failure: 0
VCPU1:
VM0:
physical-interrupt: 2592685
wfi_wfe_instruction: 9365716
smc_instruction: 1536844
hvc_instruction: 0
system_instruction: 9264545
instruction_abort: 0
data_abort: 33467
unknown: 0
failure: 0
VM1:
physical-interrupt: 931260
wfi_wfe_instruction: 15116129
smc_instruction: 8885
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 30

30
hvc_instruction: 0
system_instruction: 1956201
instruction_abort: 0
data_abort: 1119534
unknown: 0
failure: 0
```
七、系统
7.1 bring up流程
7.1.1 开机流程
1.New LK1加载atf, yocto kernel/dtb/ramdisk，Nebula TEE/Hypervisor。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 31

31
2.ATF初始化完成，跳TEE。
3.Nebula TEE初始化完成，回ATF。ATF跳Nebula hypervisor。
4.Nebula hypervisor初始化完成，启动sos进程。
5.sos进程启动sos虚拟机，vcpu0跳yocto kernel。
6.yocto kernel开机，进入userspace，启动nbl_vmm。
7.nbl_vmm启动，加载LK2鏡像到android內存中。发送启动虚拟机命令給sos，启动uos进程。
8.uos进程启动，与sos建立mailbox连线。uos虚拟机启动，vcpu0跳到LK2。
9.LK2加载android kernel/dtb/ramdisk，调用smc接口让uos进程patch device tree
10.uos patch android device tree，加入mailbox咨询
11.lk2启动android kernel
7.1.1.1 启动各个阶段log特征
1. preloader/lk阶段
可以在各个os下面 cat /proc/pl_lk， pl_lk这个里面保存的是preloader跟lk的log
2. nbl阶段
从”welcome to Nebula”开始，一直到yocto Kernel log起来
3. Yocto Kernel
Yocto Kernel的开始log “Booting Linux on physical CPU”
可以从yocto系统的/data/debuglogger/mobilelog/APLog_XX/boot__normal/kernel_log_XX里面看到
4. nbl_vmm
nbl_vmm service的 log可以搜“nbl_vm_srv” 这个target
5. Android Kernel
Android Kernel的开始log “Booting Linux on physical CPU”
可以从android系统的/data/debuglogger/mobilelog/APLog_XX/boot__normal/kernel_log_XX里面看到
6. Android init的log
Android init的log从”/init as init process” 这个开始
7. Android systemserver的log
Android systemserver的log 从”InitBeforeStartServices”这个开始
7.1.2 安全启动流程
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 32

32
1. 上电启动，运行BootRom代码， 校验Yocto LK镜像(bl2.img)，校验通过加载Yocto LK镜像到sram
2. Yocto LK 校验MTK Android Format镜像跟Yocto Format镜像，校验通过后加载到dram，主要有tee，atf
， Yocto boot， Nebula Hypervisor镜像
3. 跳转到ATF，ATF初始化，跳转TEE
4. TEE环境初始化完成，跳回ATF
5. ATF跳转到Nebula Hypervisor，初始化完成后启动SOS进程
6. SOS进程启动SOS虚拟机，vcpu0跳Yocto Kernel
7. Yocto Kernel开机，校验system镜像，
8. 进入userspace，启动nbl_vmm service
9. Nbl_vmm运行，校验LK2镜像，校验成功后加载LK2到Android内存中，发送启动虚拟机命令给SOS，启
动UOS进程
10. UOS进程启动，与SOS建立mailbox连接。UOS虚拟机启动，vcpu0跳到LK2
11. Lk2校验Android Boot镜像，校验成功后加载Android Kernel/dtb/ramdisk，调用smc接口让UOS进程
patch device tree
12. Uos patch Android device tree，加入mailbox资讯
13. LK2启动Android Kernel，Kernel运行校验super镜像
14. Android 启动
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 33

33
7.2 目录结构介绍
7.2.1 代码结构
yocto的代码结构如下图所示
meta目录包含所有yocto元数据。
patch目录包含MediaTek对OSS打的补丁。
prebuilt目录包含预编译好的文件，例如可执行文件，动态库，镜像和工具链等。
src目录包含所有的源代码文件
7.2.1.1 meta layer
8676 yocto meta layers，主要由Yocto core layer，OSS layer，MediaTek feature layer，MediaTek
platform layer 4部分组成，下表详细说明了每个layer包含的内容
Layer Explanation
meta-mediatek-classes-overlay 覆盖Yocto bbclass，自定义bbclass
meta 包含OpenEmbedded的核心元数据，不包含发行版本，
仅提供对模拟器的支持
meta-poky 包含poky发行版本的配置和元数据
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 34

34
meta-yocto-bsp 包含Yocto项目参考硬件的BSP
meta-filesystems 包含文件系统相关的元数据，例如fuse，owfs，ntfs-3g
等
meta-python 包含Python相关的元数据
meta-multimedia 包含多媒体相关的元数据
meta-networking 包含网络相关的元数据
meta-oe 其他共享的OE元数据
meta-clang 包含clang/llvm相关的元数据
meta-qt5 包含qt5相关的元数据
meta-mediatek MediaTek基础Layer，包含MediaTek写的bbclass和与
平台无关的软件包
meta-mediatek-gpl MediaTek gpl Layer， 包含u-boot等软件包
meta-mediatek-gplv2 MediaTek gplv2 layer ，包含grep等软件包的GPLv2版
本
meta-mediatek-gstreamer MediaTek Gstreamer layer
meta-mediatek-ml-np 包含MediaTek NeuroPilot相关的软件包
meta-mediatek-mt8676 MT8676 BSP layer，包含MT8676 BSP配置文件和元数
据
7.2.1.2 src layer
src 主要模块说明如下表所示
layer Explanation
src/bsp/lk
src/bsp/dramk_8676
bootloader源代码
src/kernel/linux/v6.1_mt8676/co_common Linux Kernel 6.1源代码
src/kernel/linux/v6.1_mt8676/co_device_module Mediatek Linux kernel 6.1设备驱动
src/kernel/modules out-of-tree设备驱动
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 35

35
src/apps/spm-base
src/apps/atom-base
应用程序源代码
src/connectivity Wi-Fi 相关的源代码
src/ml/neuropilot NeuroPilot相关的源代码
src/telephony
src/telephonyware
车机tbox（telephony）data/call/sms FW相关的源代码
src/tinysys tinysys相关的源代码
7.2.1.3 常用的文件路径
yocto系统常用的文件路径及应用如下表所示
路径 说明
meta/meta-mediatek-mt8676/conf/machine/auto8676p1_64.conf 项目配置文件
meta/meta-mediatek-mt8676/recipes-
bsp/ptgen/files/auto8676p1_64/partition_table_emmc_ab.csv
分区表
meta/meta-mediatek-mt8676/recipes-
kernel/linux/ko_order_table/auto8676p1_64/ko_order_table.csv
ko table，决定ko 加载顺序
src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediat
ek/auto8676p1_64.dts
kernel dts 文件
src/kernel/linux/v6._
mt8676/co_device_module/arch/arm64/configs/auto8676p1_64_defconfig
kernel defconfig 文件
src/devtools/dct/dws/mt6897/auto8676p1_64.dws dws文件，主要用于配置
GPIO
meta-mediatek-mt8676/recipes-core/base-files/base-
files/auto8676p1_64/fstab
fstab 文件，控制分区挂载
meta-mediatek-mt8676/recipes-auto/images/mtk-core-image-auto8676.bb MT8676 镜像 bb，用于生成
根文件系统
7.2.1.4 android常用的目录介绍
路径 说明
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 36

36
android/vendor/mediatek/proprietary/trustzone/tf-a-2.8/ atf代码
android/vendor/mediatek/proprietary/trustzone/optee/3.18.0/ optee代码
android/kernel-6.1/ linux kernel 6.1源码
android/kernel/kernel_device_modules-6.1/ MediaTek linux kernel 6.1 设备驱动
7.3 编译、下载、烧录
7.3.1 编译环境配置
基于Ubuntu-20.04
7.3.1.1 安卓编译环境配置
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install git gnupg flex bison gperf build-essential zip curl g++-multilib gnulib tofrodos python-markdown
libxml2-utils xsltproc openjdk-8-jdk samba cifs-utils vim git-gui libxml-simple-perl git git-gui gitk gnupg flex bison build-
essential unzip curl libxml-simple-perl libtool libmpc-dev libmpfr-dev libgmp-dev flashplugin-installer tcl tk expect
exuberant-ctags cscope ruby ruby-dev xinetd tftp tftpd gcc g++ binutils patch bzip2 flex make gettext pkg-config unzip
zlib1g-dev lib32z1 libc6-dev subversion libncurses5-dev gawk sharutils curl libxml-parser-perl python-yaml ocaml-nox
ocaml ocaml-findlib libssl-dev u-boot-tools device-tree-compiler libfdt-dev texlive minicom libswitch-perl -y
先安装上边的编译环境然后继续
sudo apt update
安装python2.7
sudo apt install python2-minimal
sudo update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.8 2
sudo update-alternatives --config python
选择 Python 2.7
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 37

37
安装编译环境
sudo apt-get install libx11-dev:i386 libreadline6-dev:i386 libgl1-mesa-dev g++-multilib git flex bison gperf build-
essential libncurses5-dev:i386 tofrodos python-markdown libxml2-utils xsltproc zlib1g-dev:i386 dpkg-dev libsdl1.2-dev
git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 x11proto-core
-dev libx11-dev libgl1-mesa-dev libxml2-utils xsltproc unzip m4 lib32z-dev ccache libswitch-perl libxml2-utils libssl-dev
libncurses5 gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat cpio python3 python3-
pip python3-pexpect xz-utils debianutils iputils-ping python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev pylint3
xterm rpm2cpio zstd qtchooser cppcheck gcovr -y
7.3.1.2 yocto编译环境配置
sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat cpio python3
python3-pip python3-pexpect xz-utils debianutils iputils-ping python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev
pylint3 xterm rpm2cpio
sudo apt install qtchooser
7.3.2 代码下载
共4个部分
内容 形式 必要性 Note
yocto源码 repo仓 必要
android源码 repo仓 必要
downloads 压缩包 建议提前放
置，不然编
译服务器需
可访问外网
Yocto编译时需要在线访问外网拉取的一些依赖库
，可在编译前放于yocto根目录
Hypervisor
SDK
随yocto的源码释放，
客户如果没有谦川【
hypervisor厂商】
必要 Yocto路径：
/prebuilt/hypervisor/grt
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 38

38
SDK授权，需要额外
向谦川申请，否则不
会释放
7.3.3 编译
7.3.3.1 userdebug版本
userdebug版本
Yocto(SOS)
export TEMPLATECONF=${PWD)/meta/meta-mediatek-mt8676-hyp/conf/templates/auto8676p1_64_hyp
source meta/poky/oe-init-build-env build-sos
bitbake mtk-core-image-auto8676 2>&1| tee build.log
Yocto(UOS Tbox)
export TEMPLATECONF=$(PWD}/meta/meta-mediatek-mt8676-
hyp/conf/templates/auto8676p1_64_uos_tbox
source meta/poky/oe-init-build-env build-tbox
bitbake mtk-core-image-auto8676-uos 2>&1| tee build.log
注：yocto和tbox编译生成的文件夹分别是根目录下的build-sos和build-tbox
Android
python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py --run
full_auto8676p1_64_bsp_vm-userdebug 2>&1 | tee build.log
7.3.3.2 user版本
user版本
如需编译user版本，保证Yocto也是编译的User版本
Yocto(SOS)
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-hyp/conf/templates/auto8676p1_64_hyp
export TARGET_BUILD_VARIANT=user
source meta/poky/oe-init-build-env build-sos
bitbake mtk-core-image-auto8676 2>&1 | tee build.log
Yocto(UOS Tbox)
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 39

39
export TEMPLATECONF=${PWD)/meta/meta-mediatek-mt8676-
hyp/conf/templates/auto8676p1_64_uos_tbox
export TARGET_BUILD_VARIANT=user
source meta/poky/oe-init-build-env build-tbox
bitbake mtk-core-image-auto8676-uos 2>&1 | tee build.log
注：yocto和tbox编译生成的文件夹分别是根目录下的build-sos和build-tbox
Android：
python vendor/mediatek/proprietary/scripts/releasetools/splt_build_helperpy --run
full_auto8676p1_64_bsp_vm-user --target -j24 2>&1 l
tee build.og
7.3.4 烧录
分别将Android和Tbox编译生成的部分Img拷贝到yocto路径下面统一烧录，具体img名称如图所示:
Yocto load 路径：build-sos/tmp/deploy/images/auto8676p1_64_hyp
Android load 路径：out/target/product/auto8676p1_64_bsp_vm/merged
Tbox load 路径：build-tbox/tmp/deploy/images/auto8676p1_64_uos_tbox
1、打开SP_flash_V6烧录工具
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 40

40
2、选择XML文件
3、烧录
烧录时，USB线一端连接evb底板的USB口,一端连接PC端USB口
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 41

41
注：烧录新的load,需要对板子进行短接和格式化
①短接方式：使用镊子等工具将COLO和GMD短接
②格式化：选择Format,点击Start,再给板子上电，等底部开始跑进度条的时候再松开短接脚，格式化完成后，
成功后会跳出弹窗提示
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 42

42
③烧录：选择Download,选择Format All+Download模式
④点击Download后，再给板子上电
⑤烧录成功后，有弹窗提示成功，烧录完成，刷机完成后，设备手动断电，再重新上电一次，设备就可以正
常开机
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 43

43
7.4 系统虚拟化框架
名词说明：
硬件：
硬件按照安全级别由高到低的顺序:TEE>Hypervisor>SOS>UOS，划分为4个级别。
ATF：
负责Normal World和Secure World间的切换。
Context Switcher ：
负责Hypervisor、SOS、UOS间的切换。
Hypervisor：
虚拟机监视器，负责执行底层的虚拟化操作，例如映射内存到SOS、UOS，虚拟CPU调度等，还有一些设备
的共享，例如GIC。
SOS：
Service Operating System，特殊的VM，负责将指定的设备共享给UOS使用，共享设备只能在SOS或
Hypervisor中实现。
UOS：
User Operating System，可以使用SOS或Hypervisor共享的设备，还可以以pass-through的方式使用专门分
配给它的设备。
TEE：
可信执行环境，用于执行安全敏感的操作，例如密钥管理、加解密、指纹识别等。
Nebula OS：
谦川基于Google Fuchsia开发的微内核架构的操作系统，目前应用于Hypervisor和TEE中。
VM Process：
负责执行VM的创建、配置、启动、销毁等操作，在VM运行过程中转发UOS的IO请求到SOS进行处理。
nbl-vmm：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 44

44
负责将SOS管理的设备虚拟化成virtio设备共享给UOS使用。虚拟的设备分为两类： 一类是virtio backend仅
使用用户空间接口的虚拟设备，例如virtio- gpu, virtio-video； 一类是virtio vhost backend需要一部分在内核
实现的虚拟设备，例如virtio-iommu,virtio-net。
Vhost Adapter Layer：
Virtio backend在内核中的适配层，用于将内核中实际的设备驱动接口转换为virtio通讯协议支持的的接口。
Virtio MTK：
基于virtio标准扩展的用于MTK专有设备的驱动组件及接口，例如virtio-mbox,virtio-cmdq。
Keymaster：
AndroidKeystore在TEE端的backend。
7.5 内存
7.5.1 OS size控制
8676 pvt lla总体内存信息划分，hyper 128M，SOS 6G， android 9G ,tbox 1G。
修改uos内存size 方式
在文件 yocto/meta/meta-mediatek-mt8676-hyp/conf/common/memory-size.inc中修改和配置SOS,
TBox和UOS Android的DRAM大小。SOS的内存大小由变量SOS_DRAM_SIZE决定，默认是6GB。UOS-
TBox的内存大小由变量UOS_TBOX_DRAM_SIZE决定，默认值是1GB。UOS-Android使用剩余的所有内存
，不受某个变量的控制。需要注意的是，一些模块会在bootloader申请保留内存，这些内存是从
SOS_DRAM_SIZE分配的。为了保证SOS正常运行，SOS_DRAM_SIZE不建议小于2GB。memory关键参数
如下：
# DRAM BASE, is fixed value, don't modify it
DRAM_BASE = "0x40000000"
# SOS Yocto memory size
SOS_DRAM_SIZE = "0x180000000"
# UOS Tbox memory size
# for 2os, no UOS TBox, so value is 0x0
UOS_TBOX_DRAM_SIZE = "0x0"
# for 3os
UOS_TBOX_DRAM_SIZE:auto8676p1_64_hyp_sos = "0x40000000"
7.5.2 内存layout
mt8676_pvt_lla/yocto/src/bsp/lk2/platform/mediatek/mt8678/include/platform/memory_layout.h
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 45

45
nebula会把内存地址全部映射给SOS，所以防止sos踩到其他os内存地址，即需要在SOS端需要对其进行
reserved。
SOS端内存视图
gz_nebula 为hypevisor 内存段
mblock-R[28] 0x7c000000 0x1230000 18624 adsp_image_reserved
mblock-R[42] 0xfa000000 0xe30000 14528 adsp_shared_reserved
mblock-R[6] 0x4d000000 0x10000 64 aee_debug_kinfo
mblock-R[36] 0x8c000000 0x1b60000 28032 ap_md_c_smem
mblock-R[35] 0x8e000000 0x130000 1216 ap_md_nc_smem
mblock-R[30] 0x8ed60000 0x2a0000 2688 apu_apusys-rv_aee-coredum
mblock-R[29] 0x8fa00000 0x600000 6144 apu_apusys-rv_secure
mblock-R[31] 0x8f900000 0x100000 1024 apu_sapu_apurvgzctrlshm
mblock-R[11] 0x48b00000 0x200000 2048 atf-log-reserved
mblock-R[17] 0x48080000 0x200000 2048 BL31-reserved
mblock-R[32] 0xbfff0000 0x10000 64 ccci_tag_mem
mblock-R[46] 0x89e00000 0xd00000 13312 consys_emi_reserved
mblock-R[41] 0x9f17f000 0xc00000 12288 debug_met_res-ram
mblock-R[8] 0x1afff0000 0x2000 8 dramc-rk0
mblock-R[9] 0x43fff0000 0x2000 8 dramc-rk1
mblock-R[15] 0x7d600000 0x800000 8192 emi_isu_buf
mblock-R[12] 0xfd40d000 0x2bf2000 45000 framebuffer
mblock-R[51] 0x1b4c80000 0x2000000 32768 grt_dmabuf_heap
mblock-R[3] 0x1c0000000 0x27ff00000 10484736 gz-guest-rk0
mblock-R[23] 0x53400000 0x8000000 131072 gz_nebula
mblock-R[1] 0x47c00000 0x400000 4096 LK_DT
mblock-R[0] 0x40000000 0x7c00000 126976 LK_KERNEL
mblock-R[2] 0x5b400000 0x4000000 65536 LK_RAMDISK
mblock-R[7] 0x48180000 0x80000 512 log_store_new
mblock-R[27] 0x7d500000 0x100000 1024 MCUPM-reserved
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 46

46
mblock-R[34] 0xd0000000 0x25a0000 38528 md_mem_usage
mblock-R[37] 0xd3000000 0x140000 1280 md_mem_usage
mblock-R[38] 0xd4000000 0x63c0000 102144 md_mem_usage
mblock-R[39] 0xda400000 0x390000 3648 md_mem_usage
mblock-R[40] 0xed000000 0x1000000 16384 md_mem_usage
mblock-R[16] 0x1bff00000 0x100000 1024 me_cmdq_reserved
mblock-R[45] 0x1bfd00000 0x200000 2048 me_GPUEB_SHARED
mblock-R[33] 0x7ba00000 0x600000 6144 me_GPUmputab_PMA
mblock-R[24] 0xbf000000 0x800000 8192 me_vcp_reserved
mblock-R[5] 0x48170000 0x10000 64 minirdump
mblock-R[52] 0x1b4c7f000 0x1000 4 nbl_sched
mblock-R[49] 0x1b6d00000 0x9000000 147456 nbl_trace
mblock-R[50] 0x1b6c80000 0x80000 512 nebulalog_reserved
mblock-R[14] 0xfcc00000 0x280000 2560 platform-debug_dfdmcu_dum
mblock-R[13] 0xfd000000 0x300000 3072 platform-debug_dfdsoc_dum
mblock-R[43] 0xfd3c0000 0x40000 256 platform-debug_slbc_shared
mblock-R[10] 0x7de00000 0x2200000 34816 platform_mtksmmu_protpgd
mblock-R[4] 0x48090000 0xe0000 896 pstore
mblock-R[26] 0x8f000000, 0x898000 8800 reserve-memory-scp_share
mblock-R[53] 0x1b0c7f000 0x4000000 65536 rproc_reserved
mblock-R[55] 0x1a7ff0000 0x4000000 65536 rproc_reserved_sostouos
mblock-R[25] 0xbe700000 0x900000 9216 SCP-reserved
mblock-R[48] 0x8bf00000 0x20000 128 scp_emi_reserved
mblock-R[47] 0x8ab00000 0x1400000 20480 shared-dma-pool_wifi-res
mblock-R[54] 0x1abff0000 0x4000000 65536 sos_tboxuos_rproc_reser
mblock-R[21] 0x50800000 0x100000 1024 spmfw
mblock-R[22] 0x9fd7f000 0x280000 2560 SSPM-reserved
mblock-R[44] 0x9f06f000 0x110000 1088 sspm_ap-shared
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 47

47
mblock-R[18] 0x48a00000 0x100000 1024 system_bl31_dtb
mblock-R[20] 0x71000000 0x3200000 51200 tee-reserved
mblock-R[19] 0xfc600000 0x600000 6144 tee-secmem
Tbox
起始地址 size name
0x1fca00000 0x1400000 shared-dma-pool_wifi-reserve-memory_dma
0x1fbe00000 0xc00000 consys_emi_reserved
0x1fde00000 0x200000 me_GPUEB_SHARED
0x1fec00000 0x1400000 shared-dma-pool_wifi-reserve-memory_dma
0x1fe000000 0xc00000 consys_emi_reserved
0x1e8180000 0x80000 log_store_new
0x1e8080000 0x10000 aee_debug_kinfo
0x1e8170000 0x10000 minirdump
0x1e8090000 0xe0000 pstore
0x89e00000 0xd00000 consys
0x1b4c7f000 0x1000 nbl_sched
0x1b4c80000 0x2000000 grt_dmabuf_heap
0x1b6d00000 0x9000000 nbl_trace
Android
起始地址 size name
0x23de00000 0x200000 me_GPUEB_SHARED
0x23ec00000 0x1400000 shared-dma-pool_wifi-reserve-memory_dma
0x23e000000 0xc00000 consys_emi_reserved
0x228180000 0x80000 log_store_new
0x228080000 0x10000 aee_debug_kinfo
0x228170000 0x10000 minirdump
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 48

48
0x228090000 0xe0000 pstore
0x48b00000 0x200000 atf_log_reserved
0x8ab00000 0x1400000 wifi_vm
0x89e00000 0xd00000 consys
0x1b4c7f000 0x1000 nbl_sched
0x1b4c80000 0x2000000 grt_dmabuf_heap
0x1b6d00000 0x9000000 nbl_trace
7.5.3 查询内存信息
1，cat /proc/meminfo
auto8676p1_64_bsp_vm:/ # cat /proc/meminfo
MemTotal: 9164208 kB
MemFree: 5148124 kB
MemAvailable: 6119552 kB //free+cached
Buffers: 5416 kB
Cached: 1162592 kB
2，Dmabuf
adb shell cat /proc/dma_heap/all_heaps > all_dma_heaps.txt 此文件为MTK平台独有，在MTK平台
debug时推荐优先查看
adb shell /system/bin/dmabuf_dump > dmabuf_dump.txt 此文件会按进程分开列出每个进程的dma
buf持有情况
adb shell dmabuf_dump -a > dmabuf_dump_a.txt 该文件为Android默认节点， 其列表形式比较容易查
看Fd ref/ Map ref count持有情况
adb shell dmabuf_dump -b > dmabuf_dump_b.txt 该文件为Android默认节点， 主要时按per buffer进行
统计汇总
7.5.4 新增reserved 样例
1.kmalloc 不能分配那么大。
2.alloc_pages MAX_ORDER为11，也就是最大分配2的11次方的页。
reserverd memory在最开始时候分配好，这块内存不会再分配给kernel用。主要更改devicetree。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 49

49
reserved-memory {
#address-cells = <2>;
#size-cells = <2>;
ranges;
test_reserved: test@1c000000 {
compatible = "test,test-memory";
reg = <0 0x1d7ff0000 0 0x4000000>; //起始内存，内存大小
no-map; //禁止操作系统做逻辑地址映射,开始我没加这句话，ioremap出错了。
};
};
验证代码：
p_malloc = (char *)ioremap(0x1c000000,0x4000000); //做映射
char *p_tmp = p_malloc;
if(p_malloc == NULL) {
printk("virtual add is error \n");
}else {
for(i = 0; i < 1024; i++) {
*p_tmp++ = i;
}
p_tmp = p_malloc;
for(i = 0; i < 1024; i++) {
printk("%x \n",*p_tmp++);
}
}
7.6 partition
7.6.1 parititon layout
1.分区基本介绍
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 50

50
8676的分区表是一个csv文件，每一列的说明如下图所示
双系统分区表如下图所示， android跟yocto的分区都在下面文件中
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 51

51
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 52

52
LLA分区表如下图所示， android跟yocto的分区都在下面文件中
yocto/meta/meta-mediatek-mt8676-hyp/recipes-
bsp/ptgen/files/auto8676p1_64_hyp/partition_table_emmc_ab_hyp.c
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 53

53
2.yocto启动阶段各个镜像存放分区
image 启动阶段 partition 说明
bl2.img BL2阶段 preloader_a 这个是bootloader（传统的preloader跟lk2阶段合成一
个了）
tee.img
（包括
ATF镜像
tee os镜像）
BL31阶段
BL32阶段
tee_a 跳转ATF，跟初始化TEE OS环境
gz.img
(Nebula hypervisor镜
像)
BL33 gz_a 运行hypervisor os
yocto-boot.img
（包括
yocto kernel镜像
yocto dtb镜像
yocto ramdisk镜像）
yocto kernel阶段 yocto-
boot_a
yocto kernel的启动包括kernel初始化，initramfs初始
化
system.ext4 yocto 根文件系
统
system 挂载根文件系统，运行systemd服务
bl2-an.img android BL33 lk bl2-an 加载android的boot镜像,lk2_an
7.6.2 如何新增一个partition
7.6.2.1 新增一个partition给SOS
1. 新增分区在yocto/meta/meta-mediatek-mt8676-hyp/recipes-
bsp/ptgen/files/auto8676p1_64_hyp/partition_table_emmc_ab_h
yp.csv 这个文件中添加， yocto跟Android的分区都在这个文件中添加
新增分区的格式说明请参考7.6.1中的分区表格式每一列的说明，如果需要配置成A/B分区， partition name后
面需要加上_a/_b
note: 新增分区需要放在sgpt这一行上面，不然编译会报错
2. 怎么挂载这个分区
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 54

54
如果新增的是空的分区没有烧写镜像， ext4格式需要下面脚本里面加给分区Format
在fstab里面配置挂载：
3.启动阶段获取slot信息
启动阶段下面脚本会解析slot信息
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 55

55
7.6.2.2 新增一个partition给uos(android)
1、在分区表新增2G分区
yocto代码目录：meta/meta-mediatek-mt8676-hyp/recipes-
bsp/ptgen/files/auto8676p1_64_hyp/partition_table_emmc_ab_hyp.csv
2、在android端配置file contexts
Android代码目录：device/mediatek/sepolicy/base/vendor/file_contexts
userdata_block_device这个selinux权限是使用data的，也可以根据需要自己创建
3、在android端配置fstab挂载
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 56

56
Android代码目录：vendor/mediatek/proprietary/hardware/fstab/mt6897/fstab.in和
vendor/mediatek/proprietary/hardware/fstab/mt6897/fstab.in.emmc
7.6.2.3 Sos目录作为一个partition共享给Android
1、在pb文件配置backends
yocto代码目录：prebuilt/hypervisor/grt_mt8676/auto8676p1_64_hyp/vm_srv_cfg.pb.txt
参数修改说明：
--socket-path 后面的参数是递增关系，保证和其他的不一样，/tmp/virtiofs_socket0，/tmp/virtiofs_socket1，
...等
--shared-dir 后面的参数是yocto这边需要共享的实际目录，如/mnt/vendor/sos_log
--tag 这个参数是给uos唯一识别的tag号，用于uos系统边mount使用
--其他参数不变
2、在用于android的lua文件配置相应值
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 57

57
yocto代码目录：prebuilt/hypervisor/grt_mt8676/auto8676p1_64_hyp/uos_alps_pv8676.lua
参数修改说明：
setFs前面参数为backends里的tag，后面参数为backends里的socket-path
3、在uos系统android边mount
android代码目录：device/mediateksample/auto8676p1_64_bsp_vm/init.project.rc
先在android边创建一个空目录，再用mount挂载到这个目录
7.6.2.4 Sos目录作为一个partition共享给tbox
1、在pb文件配置给tbox的backends
yocto代码目录：prebuilt/hypervisor/grt_mt8676/auto8676p1_64_hyp/vm_srv_cfg.pb.txt
参数修改说明：
--socket-path 后面的参数是递增关系，保证和其他的不一样，/tmp/virtiofs_tbox_socket0，
/tmp/virtiofs_tbox_socket1，...等，注意virtiofs_tbox_socket值不同于给android的
--shared-dir 后面的参数是yocto这边需要共享的实际目录，如/mnt/vendor/sos_log
--tag 这个参数是给uos唯一识别的tag号，用于uos系统边mount使用
--其他参数不变
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 58

58
2、在用于tbox的lua文件配置相应值
yocto代码目录：prebuilt/hypervisor/grt_mt8676/auto8676p1_64_uos_tbox/uos_tbox_pv8676.lua
setFs前面参数为backends里的tag，后面参数为backends里的socket-path
3、在uos系统tbox边mount
yocto代码目录：meta/meta-mediatek-mt8676-hyp/recipes-core/base-files/base-
files/auto8676p1_64_uos_tbox/fstab
7.6.3 partition debug
(1).分区的start addr跟len信息
可以在生成的MT6897_Android_scatter.xml文件中看到start address跟len，如下图所示
lk中有关分区的信息log如下
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 59

59
(2).dump ufs上分区的原始数据
使用flashtool 可以回读ufs分区的数据， 分区的start address 跟length可以从上面的xml中找到， 最后点击
read
back就可以把分区信息写到后面的路径文件中
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 60

60
(3).lk中关于分区读写接口
lk中使用下图中的接口读ufs分区中的数据
lk中使用下图中的接口写UFS分区中的数据
7.7 OS间通信
本章节主要介绍各个OS间通信机制，以及如何利用通信机制接口实现各个os间应用的通信，达到各个应用场景
的实现。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 61

61
7.7.1 SOS & UOS 间通信
7.7.1.1 vsock 使用方法
1、介绍
virtio-socket（简称vsock）是一种虚拟套接字，用于在不同虚拟机或虚拟机和宿主机之间提供高性能、可靠的通
信。现阶段用在GPS的虚拟化、camera虚拟化、modem虚拟化和android display虚拟化上。
传输速率如下表
方向 A->L A->T L->A L-
>T
T-
>A
T-
>L
吞吐量(Gbps) 3.98 2.54 1.66 2.17 8.33 1.82
应用程序，使用<cid,port>作为套接字地址层，支持套接字APIAF_VSOCK地址族，实现vsock核心传输，在客户
机和主机之间传输数据。传输层是最需要通信
的，其他三个层只需要在内核中实现标准接口。顾名思义，传输用于在客户机和主机之间传输数据，就像网卡在
本地和远程套接字之间传输数据一样。 根据数据的流向有两种传输方式。
G2H: guest->host传输，它们运行在客户机中，客户机vsock网络协议使用它与主机通信;
H2G: host→guest传输，它们运行在主机中，主机vsock网络协议使用它与客户机通信。
指定类型操作：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 62

62
SOCK_STREAM: Provides sequenced, reliable, two-way, connection-based byte streams. An out-of-band data
transmission mechanism may be supported.
SOCK_DGRAM: Supports datagrams (connectionless, unreliable messages of a fixed maximum length).
2、接口介绍
（1）int socket（int af，int type，int protocol）：创建一个vsock socket
（2）int bind（int sock，struct sockaddr *addr, socklen_t addrlen）：将socket绑定到本地地址
（3）int connect（int sock，struct sockaddr *serv_addr，socklen_t addrlen）：将socket连接到远程地址
（4）int listen(int sock,int backlog)：监听进来的连接
（5）int accept（int sock，struct sockaddr *addr，socklen_t *addrlen)：接收来自对端的连接，并获取其文件
描述符
（6）ssize_t send(int fd, const void* buf, size_t n, int flags)：向对端发送信息
（7）ssize_t recv(int fd, void* buf, size_t n, int flags)：接收来自对端的信息
（8）int close(int fd)：关闭socket
3、示例
UOS&SOS 都可以作为server或者client
注：CID值：
sos 2
android 3
tbox 4
（1）server
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 63

63
// Create a vsock socket with stream type and default protocol
int s = socket(AF_VSOCK, SOCK_STREAM, 0); //
// Define a response string to send to the client
const char *response = "This is a custom string from yocto server.";
// Initialize a sockaddr_vm structure with the given port and any CID
sockaddr_vm addr;
memset(&addr, 0, sizeof(struct sockaddr_vm));
addr.svm_family = AF_VSOCK;
addr.svm_port = port; //
addr.svm_cid = VMADDR_CID_ANY;
// Bind the socket to the local address
bind(s, (sockaddr *)&addr, sizeof(struct sockaddr_vm));
// Listen for incoming connections
listen(s, 0); //
// Initialize a sockaddr_vm structure for the peer address
sockaddr_vm peer_addr;
socklen_t peer_addr_size = sizeof(struct sockaddr_vm);
// Accept a connection from the peer and get its file descriptor
int peer_fd = accept(s, (sockaddr *)&peer_addr, &peer_addr_size); //
// Define a buffer to receive the message from the client
char buf[64];
// Receive the message from the client
ssize_t received_len = recv(peer_fd, &buf, 64, 0); //
// Log the received message
GTEST_LOG_ (INFO) << "Server received: " << buf;
// Send the response string to the client
send(peer_fd, response, strlen(response), 0); //
// Log the sent response
GTEST_LOG_ (INFO) << "Server sent: " << response;
// Close the peer socket and the server socket
close(peer_fd);
close(s);
（2）client
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 64

64
int s = socket(AF_VSOCK, SOCK_STREAM, 0); //
sockaddr_vm addr;
memset(&addr, 0, sizeof(struct sockaddr_vm));
addr.svm_family = AF_VSOCK;
addr.svm_port = port; //
addr.svm_cid = cid;
connect(s, (sockaddr*)&addr, sizeof(struct sockaddr_vm)); //server
const char *message = "Hello, world!";
size_t message_len = strlen(message);
send(s, message, message_len, 0); //
char buf[64];
ssize_t received_len = recv(s, &buf, 64, 0); //
close(s);
7.7.1.2 vnet
7.7.1.2.1 名词解释
Virtio： 一种跨虚拟机的通信机制。
Virtio-net协议： 一种基于virtio的协议，可以虚拟出一个以太网卡，让虚拟机间可透过tcp/ip通信。
Virtio-vosck协议： 一种基于virtio的协议，可以用于跨虚拟机通信。
Vhost：可将virtio后端对virtio-queue的控制权转让给内核的机制。让内核模块与前端驱动直接通信。
Socket接口： 一种可用于网路通信的接口。
Tap：layer 2虚拟网路设备，可以虚拟出一个以太网卡，并提供可以注入/接收以太网讯框（ethernet frame）的
接口，供其他模块使用。
SNAT： 一种网络地址转换（NAT）技术，用于修改数据包的源IP地址。SNAT通常用于将内部网络的私有IP地
址转换为公共IP地址，以便在互联网中进行通信
7.7.1.2.2 OS间虚拟化通路搭建
1、概述
虚拟网路设备目的在于提供yocto/android虚拟机沟通的机制，有两种类型vnet与vsock。这两种机制都能让
yocto/android虚拟机通信，差别在vnet会经过 tcp/ip网路堆叠，而vsock不会。因此，vsock更高效（因為没有
protocol overhead），而vnet更通用（因為走tcp/ip，相容于网路应用，也可用来访问外 网）。目前nebula
hypervisor的设计是modem放在yocto端，因此android端是没有网路可用的。因此会使用vnet在android端建立虚
拟以太网卡，然后在yocto端在把收到的讯框转发给modem，间接让android虚拟机也可以透过modem上网。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 65

65
Vsock主要用于内网通信，yocto/android虚拟机上如果有些系统服务想 要共享一些讯息，则可以使用vsock来达
成。
2、架构流程概述
在虚拟网路应用场景，為了效能考量，直接使用了vhost机制，让yocto与android内核可以直接通信。
3、虚拟通路的配置
目前通路的配置可以修改lua文件进行配置，可以根据需要增删通路数量及ip等配置
路径：yocto/prebuilt/hypervisor/grt_mt8676/uos_alps_pv8676_mix.lua
详细配置如下：
-- vmnet
--[[
void setVmnet(std::string id, std::string ip, std::string netmask)
--]]
uos_config:setVmnet("vmnet0", "192.168.1.1", "255.255.255.0");
uos_config:setVmnet("vmnet-vccmni0", "172.17.0.1", "255.255.255.0")
uos_config:setVmnet("vmnet-vccmni1", "172.17.1.1", "255.255.255.0")
uos_config:setVmnet("vmnet-vccmni2", "172.17.2.1", "255.255.255.0")
uos_config:setVmnet("vmnet-vccmni3", "172.17.3.1", "255.255.255.0")
**************************************************************
其中vmnet0这一路是用于以太网虚拟化，vmnet-vccmni0到vmnet-vccmni3是用于modem网络虚拟化（默认配置
），也可根据需要自行配置 vmnet0—eth0能互相ping通ip则说明通路OK
7.7.1.2.3 公网通路搭建
实际的物理网卡接入以后会生成对应的网卡，安卓端需要配置路由网关和DNS确保网络数据的转发能走虚拟通路
送到yocto端
路径：
alps/vendor/mediatek/proprietary/packages/overlay/vendor/ConnectivityOverlay/res_auto/values/config.xml
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 66

66
<resources xmlns:xliff="urn:oasis:names:tc:xliff:document:1.2">
<string-array translatable="false" name="config_ethernet_interfaces">
<! -- for adb, no internet -->
<item>eth0;11,13,14;ip=192.168.1.2/24 gateway=192.168.1.1</item>
<! -- for data share, internet, Override Transport Cellular transport -->
<item>eth1;11,12,13,14,15,28;ip=172.17.0.2/24 gateway=172.17.0.1 dns=8.8.8.8;0</item>
<! -- for xx -->
<item>eth2;11,12,13,14,15,28;ip=172.17.1.2/24 gateway=172.17.1.1</item>
<! -- for xx -->
<item>eth3;11,12,13,14,15,28;ip=172.17.2.2/24 gateway=172.17.2.1</item>
<! -- for xx -->
<item>eth4;11,12,13,14,15,28;ip=172.17.3.2/24 gateway=172.17.3.1</item>
<! -- for xx -->
<item>eth5;11,12,13,14;ip=172.20.1.44/24 gateway=172.20.1.1</item>
</string-array>
</resources>
yocto端需要搭建SNAT把内网IP转换成公网IP，以便在互联网中进行通信。
路径：src/support/mtknetworkmanager/src/Connection.cpp
const char* NAT_CMD[MAX_PDN_NUMBER] = {
"iptables -t nat -%s POSTROUTING -s 172.17.0.0/24 -o %s -j MASQUERADE",
"iptables -t nat -%s POSTROUTING -s 172.17.1.0/24 -o %s -j MASQUERADE",
"iptables -t nat -%s POSTROUTING -s 172.17.2.0/24 -o %s -j MASQUERADE",
"iptables -t nat -%s POSTROUTING -s 172.17.3.0/24 -o %s -j MASQUERADE",
};
里面有关于网络连接的相关配置，感兴趣可以看看
至此，安卓端就能通过虚拟化共享yocto端的网络了
7.7.1.2.4 vhost-net接口
vhost-net在kernel中是miscdevice的形态存在的，在linux驱动中把无法归类的五花八门的设备定义为混杂设备（
用miscdevice结构体表述）。miscdevice共享一个主设备号MISC_MAJOR（即10），但是次设备号不同。所有
的miscdevice设备形成一个链表，对设备访问时内核根据次设备号查找对应的miscdevice设备，然后调用
file_oprations结构中注册的文件操作接口进行操作。
对应vhost-net，其file_oprations为：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 67

67
static const struct file_operations vhost_net_fops = {
.owner = THIS_MODULE,
.release = vhost_net_release,
.read_iter = vhost_net_chr_read_iter,
.write_iter = vhost_net_chr_write_iter,
.poll = vhost_net_chr_poll,
.unlocked_ioctl = vhost_net_ioctl,
.compat_ioctl = compat_ptr_ioctl,
.open = vhost_net_open,
.llseek = noop_llseek,
};
在nbl_vmm中会open(“/dev/vhost-net”, O_RDWR)，此时会调用vhost_net_open初始化vhost_net，使用ioctl
命令可以对vhost-net设备进行配置
常用的配置参数如下：
VHOST_NET_SET_BACKEND //设置后端
VHOST_GET_FEATURES //获取设备支持的特性，并将其复制到用户空间。
VHOST_SET_FEATURES //从用户空间获取特性
VHOST_GET_BACKEND_FEATURES //获取后端支持的特性
VHOST_SET_BACKEND_FEATURES //设置后端特性。
VHOST_RESET_OWNER //重置设备所有者
VHOST_SET_OWNER //设置设备所有者
7.7.1.2.5 Debug
1、yocto端iptables命令
iptables -t nat -A POSTROUTING -s 172.17.0.0/24 -o ccmni1 -j MASQUERADE //手动配置SNAT
iptables -t nat -L -v -n //NAT 表中的规则，并提供详细信息。
2、yocto端modem命令
/usr/bin/mlclient_test --slot_id=0 --gtest_filter=MLClientTest.ML_Sim_GetCardStatus //确认是否识别到
卡 present or absent，正常为present
/usr/bin/mlclient_test --slot_id=0 --gtest_filter=MLClientTest.ML_GetNetState //确认是否驻网成
功 attach or detach， 正常为attach
/usr/bin/mlclient_test --gtest_filter=MLClientTest.ML_DataCallStart_IotPublic //拨号上网
/usr/bin/mlclient_test --slot_id=0 --gtest_filter=MLClientTest.ML_GetCSQ //获取信号质量
3、安卓端查看网卡配置
cmd overlay lookup --verbose com.android.connectivity.resources
com.android.connectivity.resources:array/config_ethernet_interfaces
4、网络配置相关信息
安卓端网络服务信息dump
# 获取 netd 服务信息
adb -e shell dumpsys netd > netd.log
# 获取 network_stack 服务信息
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 68

68
adb -e shell dumpsys network_stack > network_stack.log
# 获取 connectivity 服务信息
adb -e shell dumpsys connectivity > connectivity.log
# 获取 tethering 服务信息
adb -e shell dumpsys tethering > tethering.log
# 获取 ethernet 服务信息
adb -e shell dumpsys ethernet > ethernet.log
# 获取 dnsresolver 服务信息
adb -e shell dumpsys dnsresolver > dnsresolver.log
# 获取系统属性
adb -e shell getprop > prop.log
# 获取 ARP 表
adb -e shell cat /proc/net/arp > arp.log
# 获取 IP 规则
adb -e shell ip rule > rule.log
# 获取所有路由表
adb -e shell ip route show table all > route.log
7.7.1.3 vmctl
此driver提供给 Android 的内核，
· 用于监听Android kernel中的 power-off / restart / panic 事件，然后通知 nbl_vm_srv 做出相应的处理。
· 另外提供 “vmctl_kick_wdt” 函数给其他的driver，可以唤醒 wdt (watchdog timer)，这个wdt是 yocto那
管理的，如果有一段时间没有kick wdt，那么hypervisor 会启动 Android。
采用virtio实现vmctl通信，用下面这种方式实现
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 69

69
vmctl虚拟驱动注册流程：
当kernel 发生power off / reset / panic 时
后端处理：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 70

70
7.7.1.4 cmdq
1、介绍
CMDQ：即command queue，由于Display的driver中涉及大量的寄存器读写操作，如果全部用CPU读写，会占
用大量的CPU资源。所以MTK使用一个硬件来负责此 项工作，cmdq就是辅佐这个硬件工作的软件架构。
Display把需要读、写、和轮询硬件寄存器的一连串命令，打包成命令队列交给cmdq，cmdq会单独去启一个 线
程做这些事情。cmdq的实现依赖gce和IPI中断。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 71

71
display直接向DMA硬件设备发送命令，完成对物理内存的读写操作。
cmdq_handle_flush_async完成硬件寄存器命令的提交，cmdq_handle_pkt_destroy销毁chan，代表本次写操作
结束。
2、流程
dsiplanes
0drm_atomic_helper_commit_planes
1mtk_drm_crtc_atomic_flush
2mtk_crtc_gce_flush
3cmdq_pkt_flush_threaded
4cmdq_pkt_flush_async
5virtio_cmdq_pkt_flush_async
0virtio_cmdq_handle_flush_async
1cmdq module cmdq_pkt_flush_async //api
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 72

72
7.7.1.5 hw-irq
· 基于源生virtio协议vhost机制进行的优化；
· 将物理中断与ioeventfd和irqfd绑定，即收到中断后触发ioeventfd,或者写入irqfd后，会产生物理中断；
· 使用hwirq的模块：vsock、virtio-apu,virtio-gpu
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 73

73
7.7.1.6 mailbox
1、mailbox controller api
文件：kernel/include/linux/mailbox_controller.h
（1）注册、注销控制器
int mbox_controller_register(struct mbox_controller *mbox); /* can sleep */--------probe中调用
void mbox_controller_unregister(struct mbox_controller *mbox); /* can sleep */-------probe中调用
（2）（对外接口）将底层收到的数据回调给上层应用
void mbox_chan_received_data(struct mbox_chan *chan, void *data); /* atomic */
（3）通知上层当前数据已经发送完成
void mbox_chan_txdone(struct mbox_chan *chan, int r); /* atomic */
2、mailbox client api
文件：kernel/include/linux/mailbox_client.h
（1）发送数据前，申请通道
struct mbox_chan *mbox_request_channel_byname(struct mbox_client *cl,const char *name);
struct mbox_chan *mbox_request_channel(struct mbox_client *cl, int index);
（2）数据发送
int mbox_send_message(struct mbox_chan *chan, void *mssg);
void mbox_client_txdone(struct mbox_chan *chan, int r); /* atomic */
（3）数据记录
bool mbox_client_peek_data(struct mbox_chan *chan); /* atomic */
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 74

74
（4）释放通道
void mbox_free_channel(struct mbox_chan *chan); /* may sleep */
7.7.1.7 rproc
Server端:
 结构体sample_device_descriptor 为rproc virtio设备描述符:
struct sample_device_descriptor {
struct fw_rsc_vdev vdev;
struct fw_rsc_vdev_vring vrings[NUM_VRINGS];
} __packed;
static const struct sample_device_descriptor sample_vdev_desc = {
.vdev = {
.type = RSC_VDEV, //设备类型
.id = VIRTIO_ID_SAMPLE, //虚拟设备id，是唯一的，定义在virtio_ids.h文件中
.dfeatures = 0, //指定固件支持的virtio设备功能
.config_len = 0, //此vdev的virtio配置空间的大小
.num_of_vrings = NUM_VRINGS, //vring个数
},
.vrings = { //定义vring的发送和接收参数
[RING_TX] = {
.da = FW_RSC_U32_ADDR_ANY, //设备地址
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 75

75
.align = VRING_ALIGN, //排列方式
.num = VRING_SIZE, //vring大小
},
[RING_RX] = {
.da = FW_RSC_U32_ADDR_ANY,
.align = VRING_ALIGN,
.num = VRING_SIZE,
},
},
};
 nebula_rproc_vdev_ops为rproc virtio设备的文件操作，是系统调用和驱动程序之间的桥梁。用户程序对设
备文件进行操作的操作函数，下面有创建、销毁和重置
static struct nebula_rproc_vdev_ops sample_vdev_ops = {
.on_create = sample_device_create,
.on_destroy = sample_device_destroy,
.on_reset = sample_device_reset,
};
1、int nebula_rproc_register_device(const void *rsc, size_t rsc_size, struct nebula_rproc_vdev_ops *vdev_ops)
函数功能：注册一个rproc设备，并将其与指定的资源表和虚拟设备操作相关联。通过调用此函数，可以初始化
和配置远程处理设备，以便进行跨处理器通信或其他相关操作。
 const void *rsc：虚拟化设备描述符，为结构体，如上面的sample_vdev_desc
 size_t rsc_size：为虚拟化设备描述符结构体大小
 struct nebula_rproc_vdev_ops *vdev_ops：rproc virtio设备的文件操作结构体的指针，如上面
sample_vdev_ops
2、int virtio_create_virtqueues(struct virtio_device *vdev, unsigned int flags, unsigned int nvqs, const char
*names[], vq_callback callbacks[], void *callback_args[])
函数功能：该函数用于为指定的 Virtio 设备创建多个 Virtqueue，并为每个队列设置名称、回调函数及其参数。
Virtio 驱动程序使用这个函数来初始化和配置设备所需的队列，以便进行数据交换。
 struct virtio_device *vdev: 指向 Virtio 设备结构体的指针。
 unsigned int flags: 创建 Virtqueue 时使用的标志。
 unsigned int nvqs: 要创建的 Virtqueue 数量。
 const char *names[]: 每个 Virtqueue 的名称数组。
 vq_callback callbacks[]: 每个 Virtqueue 的回调函数数组。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 76

76
 void *callback_args[]: 每个回调函数的参数数组。
3、void virtqueue_disable_cb(struct virtqueue *vq)
函数功能：该函数禁用指定 Virtqueue 的回调通知。Virtio 驱动程序使用这个函数来停止接收设备发出的中断或
通知，从而避免在不需要时处理不必要的回调。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
4、static inline void virtqueue_set_shmem_io(struct virtqueue *vq, void *io)
函数功能：该函数将共享内存 I/O 操作设置到指定的 Virtqueue 中。Virtio 驱动程序使用这个函数来配置共享
内存操作，以便在主机和设备之间进行高效的数据交换。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
 void *io: 指向共享内存 I/O 操作结构体的指针。
5、void *virtqueue_get_available_buffer(struct virtqueue *vq, uint16_t *avail_idx, uint32_t *len)
函数功能：该函数从指定的 Virtqueue 中获取一个可用的缓冲区，并将其索引和长度存储在提供的参数中。
Virtio 驱动程序使用这个函数来从设备获取数据。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
 uint16_t *avail_idx: 用于存储可用缓冲区在 Virtqueue 中的索引。
 uint32_t *len: 用于存储可用缓冲区的数据长度。
6、int virtqueue_add_consumed_buffer(struct virtqueue *vq, uint16_t head_idx, uint32_t len)
函数功能：该函数将已消耗的缓冲区添加到指定的 Virtqueue 中。Virtio 驱动程序使用这个函数来通知设备某个
缓冲区已经被使用完毕，并且可以被重新利用
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
 uint16_t head_idx: 已消耗缓冲区在 Virtqueue 中的索引。
 uint32_t len: 已消耗缓冲区的数据长度。
7、void virtqueue_kick(struct virtqueue *vq)
函数功能：该函数用于通知 Virtio 设备，Virtqueue 中有新的缓冲区可供处理。Virtio 驱动程序使用这个函数来
触发设备处理已添加到队列中的缓冲区。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
代码实例路径：yocto:src/kernel/modules/mt8676/virt/grt/nebula_rproc/nebula_virtio_sample.c
client端():
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 77

77
 结构体virtio_driver ，是一个用于描述rproc Virtio 驱动程序的结构体。它定义了驱动程序如何与 Virtio 设
备进行交互，包括设备匹配、初始化、移除等操作，具体实例如下：
static struct virtio_driver perftest_driver = {
.feature_table_size = 0,
.driver.name = KBUILD_MODNAME,
.driver.owner = THIS_MODULE,
.id_table = id_table,
.probe = perftest_probe,
.remove = perftest_remove,
};
1、int register_virtio_driver(struct virtio_driver *driver)
函数功能：该函数用于注册一个 Virtio 驱动程序，使其能够与内核中的 Virtio 子系统进行交互。通过调用此函
数，可以将驱动程序添加到内核中，以便处理相应的 Virtio 设备。
 struct virtio_driver *driver: 指向 Virtio 驱动程序结构体的指针。如上面perftest_driver。
2、int virtio_find_vqs(struct virtio_device *vdev, unsigned nvqs,struct virtqueue *vqs[], vq_callback_t
*callbacks[],const char * const names[], struct irq_affinity *desc)
函数功能：该函数用于查找并初始化指定数量的 Virtqueue，并为每个队列设置名称、回调函数及其中断亲和性。
Virtio 驱动程序使用这个函数来配置设备所需的队列，以便进行数据交换。
 struct virtio_device *vdev: 指向 Virtio 设备结构体的指针。
 unsigned nvqs: 要查找和初始化的 Virtqueue 数量。
 struct virtqueue *vqs[]: 用于存储找到的 Virtqueue 的数组。
 vq_callback_t *callbacks[]: 每个 Virtqueue 的回调函数数组。
 const char * const names[]: 每个 Virtqueue 的名称数组。
 struct irq_affinity *desc: 中断亲和性描述符（可选）。
3、unsigned int virtqueue_get_vring_size(struct virtqueue *_vq)
函数功能：该函数用于获取指定 Virtqueue 的 vring 大小。Virtio 驱动程序使用这个函数来查询队列中可用的
描述符数量，以便进行数据交换和管理。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
4、int virtqueue_add_inbuf(struct virtqueue *vq, struct scatterlist *sg, unsigned int num, void *data, gfp_t gfp)
函数功能：该函数用于向指定的 Virtqueue 添加一个输入缓冲区。Virtio 驱动程序使用这个函数来将数据缓冲区
添加到队列中，以便设备可以将数据写入这些缓冲区。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 78

78
 struct scatterlist *sg: 指向散列表（scatter-gather list）的指针，描述输入缓冲区。
 unsigned int num: 散列表中的条目数量。
 void *data: 与该缓冲区关联的数据指针，通常用于在回调中识别该缓冲区。
 gfp_t gfp: 分配内存时使用的标志。
5、void virtqueue_disable_cb(struct virtqueue *vq)
函数功能：该函数禁用指定 Virtqueue 的回调通知。Virtio 驱动程序使用这个函数来停止接收设备发出的中断或
通知，从而避免在不需要时处理不必要的回调。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
6、bool virtqueue_kick_prepare(struct virtqueue *_vq)
函数功能：该函数用于检查指定的 Virtqueue 是否需要通知 Virtio 设备。Virtio 驱动程序使用这个函数来决定
是否应该发送通知，以便设备处理已添加到队列中的缓冲区。这在某些情况下可以避免不必要的中断，提高性能。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
7、void virtio_device_ready(struct virtio_device *dev)
函数功能：该函数用于通知 Virtio 子系统，指定的 Virtio 设备已经完成初始化并且可以开始正常工作。Virtio
驱动程序在完成设备配置和初始化后调用此函数，以便设备可以开始处理队列中的数据。
 struct virtio_device *dev: 指向 Virtio 设备结构体的指针。
8、bool virtqueue_notify(struct virtqueue *_vq)
函数功能：该函数用于通知 Virtio 设备，Virtqueue 中有新的缓冲区可供处理。Virtio 驱动程序使用这个函数来
触发设备处理已添加到队列中的缓冲区。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
9、void *virtqueue_get_buf(struct virtqueue *_vq, unsigned int *len)
函数功能：该函数用于从指定的 Virtqueue 中获取一个已处理完成的缓冲区，并返回该缓冲区的数据指针和长
度。Virtio 驱动程序使用这个函数来检索设备已经处理完毕的数据缓冲区，以便进行进一步处理或释放资源。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
 unsigned int *len: 指向存储缓冲区长度的指针。
10、void virtqueue_kick(struct virtqueue *vq)
函数功能：该函数用于通知 Virtio 设备，Virtqueue 中有新的缓冲区可供处理。Virtio 驱动程序使用这个函数来
触发设备处理已添加到队列中的缓冲区。
 struct virtqueue *vq: 指向 Virtqueue 结构体的指针。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 79

79
代码实例路径：android:vendor/mediatek/kernel_modules/virt/nebula_rproc/nebula_virtio_perftest.c
7.7.2 UOS & UOS间通信
7.7.2.1 vsockx
vsockx 是谦川基于 vsock 开发的 UOS 之间 socket 通信的方式,基于rproc的vsock使用实例如下：
对于 UOS 间 vsock,即 vsockx
tbox CID:4
android CID: 2 //VMADDR_CID_HOST
server 端通讯案例(C++)：
#define AF_VSOCKX AF_DECnet
int main()
{
int s = socket(AF_VSOCKX, SOCK_STREAM, 0);
const struct sockaddr_vm addr = {
.svm_family = AF_VSOCK,
.svm_prot = 9999,
.svm_cid = VMADDR_CID_HOST,
}
bind(s,(const sockaddr *)&addr, sizeof(struct sockaddr_vm));
listen(s, 0);
struct sockaddr_vm peer_addr;
socklen_t peer_addr_size = sizeof(struct sockaddr_vm);
int peer_fd = accept(s,(sockaddr *)&peer_addr,&peer_ddr_size);
char buf[54];
ssize_t msg_len;
while ((msg_len = recv(peer_fd ,&buf, 64, 0)) > 0){
printf("Received %zd bytes: %.*s\n", msg_len, msg_len, buf);
}
return 0;
}
client 端通讯案例(C++):
#define AF_VSOCKX AF_DECnet
int main()
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 80

80
{
int s = socket(AF_VSOCKX, SOCK_STREAM, 0);
struct sockaddr_vm ddr;
memset(&addr, 0,sizeof(struct sockaddr_vm));
addr.svm_family = AF_VSOCK;
addr.svm_prot = 9999;
addr.svm_cid = VMADDR_CID_HOST;
int rc = connect(s, &addr, sizeof(struct sockaddr_vm));
if(rc < 0){
printf("rc = %d %s\n", rc, strerror(errno));
return rv;
}
send(s "Hello,world!", 13, 0);
close(s);
return 0;
}
7.7.3 MCU & CPU间通信
7.7.3.1 单系统uart
1、MT8676和MCU通过UART进行通信协议，使用波特率 115200 bps ，8bit数据 ，1个停止位，无奇偶校验位
。
2、分需要回应ACK和不需要回应NACK的数据。对于需要回应的数据ACK，在100ms内做回应，超过100ms，
重新发送，3次无响应，抛去此帧。
3、传输框图如下：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 81

81
7.7.3.2 单系统spi
SOC作为主机，MCU作为从机，波特率暂定12MHz
接口write是主机发送给从机数组，从机无法将回传的值写入，写入主机读不到。
接口read是主机发起的，从机在spi clk传输过程中将值给主机读取，主机无法写入值。
主机写由于只能发送主机命令，并由主机发起，所以write长度是不定长的，根据主机数据量来定，只需要限制最
大值即可，比如最大500bytes。
Read函数是由主机发起的，不知道从机有多少数据量，所以这个是定长的，比如固定为 200、300 、 500等。
当从机有中断脚送给主机机制后，主机可以省去周期读，主机检测高，表示从机有消息给主机，主机就去read。
7.7.3.2 双系统
1：uart 2：socket 3：vsocket
1、mcu通过uart与Yocto的mcu_messenger进行通讯，实现数据的透传。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 82

82
2、mcu_messenger根据协议帧的type进行分发：mcu_2_yocto、mcu_2_android、yocto_2_mcu、
android_2_mcu、yocto_2_android、android_2_yocto。
7.8 外设通信协议
7.8.1 SPI
7.8.1.1 名词解释
CPHA：CLock Phase时钟相位
CPOL：Clock Polarity时钟极性
CS：Chip Select芯片选择引脚
DMA：Direct Memory Access直接内存访问
FIFO：First In First Out先进先出
MISO：Master In Slave Out,SPI Master输入数据和SPI Slave输出数据
MOSI：Master Out Slave In,SPI Master输出数据和SPI Slave输入数据
7.8.1.2 SPI介绍
1、SPI总线结构 SPI(Serial Peripheral Interface)串行外设接口，是一种高速的，全双工，同步的通信总线。采
用主从模式 （Master Slave）架构，支
持多个slave， 一般仅支持单Master。
SPI接口共有4根信号线，分别是：设备选择线(SS)、 时钟线(SCK)、串行输出数据线(MOSI)、串行输入数据线
(MISO)。 ①、CS/SS，Slave Select/Chip
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 83

83
Select，这个是片选信号线，用于选择需要进行通信的从设备。 I2C 主机是通过发送从机设备地址来选择需要
进行通信的从机设备的，SPI 主机不需要发送从机设备，直接将相应的从机设备片选信号拉低即可。 ②、
SCK，Serial Clock，串行时钟，和 I2C 的 SCL 一样，为 SPI 通信提供时钟。 ③、MOSI /SDO，Master
Out Slave In/Serial Data Output，简称主出从入信号线，这根数据线 只能用于主机向从机发送数据，也就是主
机输出，从机输入。 ④、 MISO/SDI，Master In Slave Out/Serial Data Input，简称主入从出信号线，这根数
据线只 能用户从机向主机发送数据，也就是主机输入，从机输出。
2、数据传输过程
主节点通过MOSI线输出数据，从节点在SIMO处从主节点读取数据。同时，也在通过SOMI输出MSB （最高位
），主节点会在 MISO处读取从节点的数据， 整个
过程将一直持续，直至交换完所有数据。
3、总线时序
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 84

84
CPOL极性：决定时钟空闲时为高电平还是低电平 CPOL=0：CLK空闲时是低电平，CLK有效时是高电平
CPOL=1：CLK空闲时是高电平，CLK有效时是低电平 CPHA
相位：决定何时进行数据采样(数据位读取) CPHA=0：第一个边沿采样 CPHA=1：第二个边沿采样 根据CPOL
和CPHA的不同组合，SPT被分为4种模式
7.8.1.3 SPI虚拟化框架
NBL-VMM:将spi虚拟化features写入pci配置空间中，便于UOS probe。 vhost-spi :spi back-end driver,调用spi
device和建立与front end的通讯通路。
spi-virtio :spi front-end driver,，給Android 上层调用。
7.8.1.4 SPI配置
1、虚拟化配置
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 85

85
//
//spi
&spi1 {
pinctrl-names = "default";
pinctrl-0 = <&ak7709_codec_spi>;
/*pinctrl-1 = <&ak7709_codec_pdn>;*/
status = "okay";
ak7709: ak7709@0 {
status = "okay";
compatible = "akm,ak7709";
#sound-dai-cells = <0>;
reg = <0>;
spi-max-frequency = <1000000>;
/*ak7709,pdn-gpio = <&pio 147 0>;*/
};
};
//pingctrlSPI pinmux
&pio {
ak7709_codec_spi: spimode-default {
pins-cmd-dat {
pinmux = <PINMUX_GPIO53__FUNC_SPI1_MO>,
<PINMUX GPIO52 FUNC SPI1 MI>,
_ __ _ _
<PINMUX GPIO51 FUNC SPI1 CSB>,
_ __ _ _
<PINMUX GPIO50 FUNC SPI1 CLK>;
_ __ _ _
};
};
//
vhost_spi: vhost-spi {
compatible = "grt,vhost-spi";
};
//
spi1_virtio: spi1-virtio {
compatible = "mediatek,virtio-spi";
id = <1>;
status = "ok";
};
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 86

86
2、PAD_SEL
在有些IC上， 一组SPI会有不同的GPSIO可以选择，根据GPIO表格信息确定SPI使用哪组GPIO。此时需要在
dts中添加mediatesk,pad-select=<x>;
spi0: spi0@11010000 {
compatible = "mediatek,mt6985-spi";
mediatek,pad-select = <0>; //x=0 1 2A B C
mediatek,tickdly = <2>, <0>;
reg = <0 0x11010000 0 0x100>;
interrupts = <GIC_SPI 242 IRQ_TYPE_LEVEL_HIGH 0>;
clocks = <&topckgen_clk CLK_TOP_MAINPLL_D6_D2>,
<&topckgen_clk CLK_TOP_SPI0_SEL>,
<&pericfg_ao_clk CLK_PERAOP_SPI0_BCLK>;
clock-names = "parent-clk", "sel-clk", "spi-clk";
clock-source-type = "mainpll";
};
3、频率
SPI控制器支持偶数倍分频，支持的最大频率SPI控制器为52MHz，SPI_SCK 小于等于52 MHz。
可以通过两种方式设置SPI_CLK；
（1）、在设备树中，配置属性spi-max-frequency，例如，spi-max-frequency = <1000000>;设置默认
SPI_CLK=1MHz。
（2）、在设备驱动中，配置结构spi_transfer的字段spedd_hz,例如xfer→speed_hz = 1000000;设置
SPI_CLK=1MHz。
4、SPI模式
可以通过两种方式设置SPI模式
（1）在设备数中设置SPI模式
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 87

87
&spi4{
pinctrl-names = "default","sleep";
pinctrl-0 = <&spi4_pins_default>;
pinctrl-1 = <&spi4_pins_sleep>;
cs-gpios = <&pio 7 GPIO_ACTIVE_HIGH>;
ak4619: ak4619@0 {
compatible = "akm,ak4619";
reg = <0>;
spi-max-frequency = <4000000>;
spi-cpha;
spi-cpol;
ak4619,pdn-gpio = <&pio 223 0>;
ak4619,mute-gpio = <&pio 130 0>;
status = "okay";
};
};
（2）在设备驱动程序中设置SPI模式
int xxx_probe(struce spi_device *spi)
{
...;
spi->mode = SPI_MODE_0; //SPI_MODE_0;SPI_MODE_1;SPI_MODE_2;SPI_MODE_3;
...;
}
5、FIFO和DMA模式
SPI控制器支持DMA模式和FIFO模式传输数据。控制器通过传输数据长度自动选择。FIFO模式的长度小于或等
于32字节，DMA模式的长度大于32字节。
6、支持多个设备
如果要在SPI总线上添加多个设备，可以使用GPIO作为支持SPI_CS。例如，在SPI总线0上添加两个SPI device
，使用GPIO136和GPIO30作为SPI_CS1和 SPI_CS2，如下所示
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 88

88
&spi4{
pinctrl-names = "default","sleep";
pinctrl-0 = <&spi4_pins_default>;
pinctrl-1 = <&spi4_pins_sleep>;
cs-gpios = <&pio 136 GPIO_ACTIVE_HIGH><&pio 30 GPIO_ACTIVE_HIGH>;;
ak4619: ak4619@0 {
compatible = "akm,ak4619";
reg = <0>;
spi-max-frequency = <4000000>;
spi-cpha;
spi-cpol;
ak4619,pdn-gpio = <&pio 223 0>;
ak4619,mute-gpio = <&pio 130 0>;
status = "okay";
};
};
7.8.1.5 SPI 虚拟化配置方法
Yocto配置
CONFIG_DEVICE_MODULES_VHOST_SPI=m
Android配置
CONFIG_VIRTIO_SPI=m
//
//spi
&spi1 {
pinctrl-names = "default";
pinctrl-0 = <&ak7709_codec_spi>;
/*pinctrl-1 = <&ak7709_codec_pdn>;*/
status = "okay";
ak7709: ak7709@0 {
status = "okay";
compatible = "akm,ak7709";
#sound-dai-cells = <0>;
reg = <0>;
spi-max-frequency = <1000000>;
/*ak7709,pdn-gpio = <&pio 147 0>;*/
};
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 89

89
};
//pingctrlSPI pinmux
&pio {
ak7709_codec_spi: spimode-default {
pins-cmd-dat {
pinmux = <PINMUX_GPIO53__FUNC_SPI1_MO>,
<PINMUX GPIO52 FUNC SPI1 MI>,
_ __ _ _
<PINMUX GPIO51 FUNC SPI1 CSB>,
_ __ _ _
<PINMUX GPIO50 FUNC SPI1 CLK>;
_ __ _ _
};
};
//
vhost_spi: vhost-spi {
compatible = "grt,vhost-spi";
};
//
spi1_virtio: spi1-virtio {
compatible = "mediatek,virtio-spi";
id = <1>;
status = "ok";
};
7.8.1.6 SPI passthrough 配置方法
理论当yocto spi adapter正常情况下，以及Android spi adapter驱动已经加载的情况下，只需要把spi
的 中断号配置给Android。以spi1为例 1、yocto disable
&spi1 {
status = "disabled";
}
2、android enable
&spi1 {
status = "ok";
}
3、spi1中断号配置给Android
yocto/prebuilt/hypervisor/grt_mt8676/uos_alps_pv8676_xx.lua
+uos_config:setVgicIrq(275)
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 90

90
spi中断号=设备数interrupts243+32 = 275
7.8.2 I2C
76总共有0~13 14路i2c，速率最高可配3.4Mb/s，默认所有i2c 控制器的中断都配置到sos。
7.8.2.1 I2C 虚拟化配置方法
1, front-driver
dts 中id对应真实i2c bus id。
driver code path
vendor/mediatek/kernel_modules/virt/i2c_virtio
2, backend driver
kernel/modules/mt8678/virt/grt/i2c_vhost：
7.8.2.2 I2C passthrough 配置方法
理论当yocto i2c adapter正常情况下，只需要把i2c 的 中断号配置给Android。
以i2c10直通Android为例
1.1 Android
1，i2c-mt65xx ko
diff --git a/ko_order_table.csv b/ko_order_table.csv
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 91

91
+i2c-mt65xx.ko,/../kernel_device_modules-6.1/drivers/i2c/busses/i2c-
mt65xx.ko,vendor,Y,N,user/userdebug/eng
1.2 yocto
1， i2c10 gpio配置
diff --git a/dws/mt6897/auto8676p1_64_hyp.dws b/dws/mt6897/auto8676p1_64_hyp.dws
+ <gpio157>
+ <eint_mode>false</eint_mode>
+ <def_mode>1</def_mode>
+ <inpull_en>true</inpull_en>
+ <inpull_selhigh>true</inpull_selhigh>
+ <def_dir>IN</def_dir>
+ <out_high>false</out_high>
+ <smt>true</smt>
+ <ies>true</ies>
+ </gpio157>
+ <gpio158>
+ <eint_mode>false</eint_mode>
+ <def_mode>1</def_mode>
+ <inpull_en>true</inpull_en>
+ <inpull_selhigh>true</inpull_selhigh>
+ <def_dir>IN</def_dir>
+ <out_high>false</out_high>
+ <smt>true</smt>
+ <ies>true</ies>
+ </gpio158>
1.3 thyp-sdk
i2c10中断号配置给Android，lua文件配置需要 根据dts中配置的中断号加偏移，+32
i2c10 dts 中断配置如下：
interrupts = <GIC_SPI 196 IRQ_TYPE_LEVEL_HIGH 0>;
uos_alps_pv8676.lua 则需要196+32 = 228
+uos_config:setVgicIrq(228)
编译到版本
cp uos_alps_pv8676.lua yocto/prebuilt/hypervisor/grt_mt8676/uos_alps_pv8676_mix.lua
7.8.3 UART
76总共有0~3 4路uart，速率最高可配3Mb/s，默认所有uart 控制器的中断都配置到sos
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 92

92
7.8.3.1 UART 虚拟化配置方法
采用virtio-console方式
1，front driver
kernel/drivers/char/virtio_console.c
2，backend driver
kernel/modules/mt8676/virt/grt/vhost_uart/uart.c
3，测试前端生成的uart 虚拟节点
find . -name vport*
获取uart数据
cat /dev/vport*
uart发送数据
echo 123 > /dev/vport*
7.8.3.2 UART passthrough 配置方法
理论当yocto 和android 端uart驱动加载正常情况下，只需要把uart 的 中断号配置给Android，uart便
直通到Android。
1，Android
uart dts配置
--- a/arch/arm64/boot/dts/mediatek/auto8676p1_64_bsp_vm.dts
+++ b/arch/arm64/boot/dts/mediatek/auto8676p1_64_bsp_vm.dts
+&pio {
+ uart2_pins_default: uart2-pins-default {
+ pins-rx {
+ pinmux = <PINMUX_GPIO117__FUNC_URXD2>;
+ input-enable;
+ bias-pull-up;
+ };
+ pins-tx {
+ pinmux = <PINMUX_GPIO121__FUNC_UTXD2>;
+ };
+ pins-rts {
+ pinmux = <PINMUX_GPIO162__FUNC_URTS2>;
+ output-enable;
+ };
+ pins-cts {
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 93

93
+ pinmux = <PINMUX_GPIO161__FUNC_UCTS2>;
+ input-enable;
+ };
+ };
+};
+
&uart2 {
- status = "disabled";
+ pinctrl-names = "default";
+ pinctrl-0 = <&uart2_pins_default>;
+ status = "okay";
};
&uarthub {
- status = "disabled";
+ status = "okay";
};
uart驱动ko加入到ko_order_table.csv
--- a/ko_order_table.csv
+++ b/ko_order_table.csv
+mtk-uart-apdma.ko,/../kernel_device_modules-6.1/drivers/dma/mediatek/mtk-uart-
apdma.ko,ramdisk,Y,Y,user/userdebug/eng
+uarthub_drv.ko,/../kernel_device_modules-
6.1/drivers/misc/mediatek/uarthub/uarthub_drv.ko,ramdisk,Y,Y,user/userdebug/eng
+8250_mtk.ko,/../kernel_device_modules-
6.1/drivers/tty/serial/8250/8250_mtk.ko,ramdisk,Y,Y,user/userdebug/eng
2， yocto
disable uart2
--- a/recipes-kernel/linux/files/auto8676p1_64_hyp_sos.dts
+++ b/recipes-kernel/linux/files/auto8676p1_64_hyp_sos.dts
@@ -393,7 +393,7 @@
&uart2 {
pinctrl-names = "default";
pinctrl-0 = <&uart2_pins_default>;
- status = "okay";
+ status = "disabled";
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 94

94
};
uart2 gpio配置成串口 mode
--- a/dws/mt6897/auto8676p1_64_hyp.dws
+++ b/dws/mt6897/auto8676p1_64_hyp.dws
@@ -1,5 +1,5 @@
<?xml version="1.0" encoding="UTF-8"?>
-<!--dct_version="2.5" buid_sn="161102" dws_modification_time="11.12.2024.15:42:26"-->
+<!--dct_version="2.5" buid_sn="161102" dws_modification_time="11.13.2024.14:22:06"-->
<dct_cfg>
<general chip="MT6897">：：：
<proj>Ponsot_Phone</proj>
@@ -1265,10 +1265,10 @@
</gpio116>
<gpio117>
<eint_mode>false</eint_mode>
- <def_mode>0</def_mode>
+ <def_mode>3</def_mode>
<inpull_en>true</inpull_en>
- <inpull_selhigh>false</inpull_selhigh>
- <def_dir>OUT</def_dir>
+ <inpull_selhigh>true</inpull_selhigh>
+ <def_dir>IN</def_dir>
<out_high>false</out_high>
<smt>true</smt>
<ies>true</ies>
@@ -1306,10 +1306,10 @@
</gpio120>
<gpio121>
<eint_mode>false</eint_mode>
- <def_mode>0</def_mode>
- <inpull_en>true</inpull_en>
+ <def_mode>3</def_mode>
+ <inpull_en>false</inpull_en>
<inpull_selhigh>false</inpull_selhigh>
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 95

95
- <def_dir>OUT</def_dir>
+ <def_dir>IN</def_dir>
<out_high>false</out_high>
<smt>true</smt>
<ies>true</ies>
3，thyp-sdk
uart2控制器中断号 284配置给Android，DMA中断255，256也要配置给Android。
uos_alps_pv8676.lua
+uos_config:setVgicIrq(284)
+uos_config:setVgicIrq(255)
+uos_config:setVgicIrq(256)
7.8.4 GPIO
此处介绍下GPIO概况，包括76有多少路GPIO，当前公板配置状态
7.8.4.1 名词解释
DATAIN：pin读到的值，仅在IES = 1时有效
DATAOUT：GPIO mode时设定output High/Low
DIR：GPIO mode时设置Pin input/output
DRV：Pin的普通driving设定
EH：I2C类Pin专有的driving设定
IES：input enable
MODE：Pinmux设定，填入mode number既可
PD：部分pin打开pull down时，PU需为0
PU：部分pin打开pull up时，PD需为0
PUPD：部分内部上下拉阻值可调的Pin的pull up/down设定
R0/R1：上下拉电阻启用（部分Pin可用）
RSEL：部分Pin调整上下拉阻值
SMT：波形过滤功能
7.8.4.2 架构介绍
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 96

96
General-Purpose Input/0utput (GPI0)，意为通用输入/输出。在嵌入式系统中，GPIO是一种用于与外
部设备进行数字信号交互的接口。它可以通过设置为输入或输出模式来读取或控制外部设备的状态。
MediaTek SoC 提供 PIN Controller 硬件单元以实现:
引脚功能配置。例如该 I/o pin 是一个普通的 GPIO 还是一些特殊功能引脚(例如 EMMC 上的 CMD
信号)。
引脚特性配置。例如 pull-up/down 电阻的设定，drive-strength 的设定。
提供 GPIO Controller 硬件单元以实现:
配置 GPIO的方向。
如果是输出，可以配置为 high level 或者 low level.
如果是输入，可以获取 GPIO 引脚上的电平状态。
7.8.4.3 GPIO使用
安卓和yocto中gpio的配置节点都在
路径：/proc/mtk_gpio/soc.pinctrl
如图：
可直接操作该节点手动配置gpio
手动拉高某个gpio口（135）
echo out 135 1 > /proc/mtk_gpio/soc.pinctrl
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 97

97
7.9 保活机制
7.9.1 进程保活
7.9.1.1 设计框图
1，notify_service_demo
notify_service_demo此应用notify system-monitor-demo，实时信号机制，参数是服务id+服务状态（0
：start，1：stop）
2， system-monitor-demo
功能是 监测服务程序 启动和关闭情况，做下记录。
7.9.2 系统保活
介绍下有哪些虚拟化机，如何获取虚拟机状态，如何控制虚拟机，如何保活虚拟机
7.9.2.1 保活机制介绍
虚拟机保活机制主要是监听到虚拟机异常时，重新拉起虚拟机。
VM状态通过vmctl 传递到nbl_vmm。
新增VM状态流转：
1，开机状态
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 98

98
2，关机状态
7.9.2.2 获取虚拟机状态
虚拟机状态是由VM OS vmctl 传递状态到nbl_vmm。
以8676 双系统为例
1，Android vmctl
vendor/mediatek/kernel_modules/virt/vmctl/vmctl.c
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 99

99
==》
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 100

100
2，nbl_vmm vmctl.cc
获取到Android 端状态。
7.9.3 控制虚拟机状态
7.9.3.1 休眠唤醒android方法(L+A)
Android 单独休眠唤醒
echo powerkey > /sys/guest_os/android/pm_state //android 休眠
echo 2 > /sys/guest_os/android/resume //android 唤醒
cat /sys/guest_os/android/pm_state //查看android 状态
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 101

101
7.9.3.2 stop & start 方法 (L+A)
sh-3.2# nbl_vm_ctl -h
Usage: nbl_vm_ctl [options]
shell: attach to virtual machine console
start: stat virtual machine
stop: stop virtual machine
restart: restart vitual machine
dump: dump vcpus state
vminfo: dump vmid ,state information list
option 参数是–vmid (1,2,3...)，shell某个VM指令如下：
nbl_vm_ctl shell --vmid 1 是tbox,
nbl_vm_ctl shell --vmid 0是android
7.10. misc debug
7.10.1 log【抓取，分析】
7.10.1.1 串口log抓取
串口log中包含yocto、android以及nebula log（SDK）
1.其中android log带有nbl_vm_srv为标志的log
如
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 102

102
[20241211_10:13:57438][ 37.119358] nbl_vm_srv[2681]: [ 13.479003][T600335]
modprobe: [touch_boost][name:touch_boost&]
touch_boost_init, cpu_num:3
[20241211_10:13:57438][ 37.128079] nbl_vm_srv[2681]: [ 13.494917][T600335]
modprobe: [touch_boost][name:touch_boost&]
cpu_policy_init, policy[0]: first:0, min:1900000, max:1900000
2.nebula log带有nbl_vmm或者nbl_vm_srv
如
[ 414.533316] nbl_vm_srv[4681]: nbl_vmm E 02-27 17:32:51 4681 4681
guest_config.h:88] setVmid： 0
[ 414.533351] nbl_vm_srv[4681]: nbl_vmm E 02-27 17:32:51 4681 4681
guest_config.h:94] setCpus:
[ 414.533370] nbl_vm_srv[4681]: nbl_vmm E 02-27 17:32:51 4681 4681
guest_config.h:100] setBindcpus: 2
[20241211_10:16:41022][ 18.669227] nbl_vm_srv[2688]: nbl_vm_srv I 11-30 14:06:04 2688
2688 vm_controller.cc:183] nbl vm
controller start vm finish vmid:0
[20241211_10:16:41023][ 18.680110] nbl_vm_srv[2688]: nbl_vm_srv I 11-30 14:06:04 2688
2688 vm_controller.cc:421] VM Controller
parse UOS json vmid:1
3. 不带任何标识的就是yocto log
[20241211_10:16:27462][ 5.101556][T1601003] modprobe:
[name:tcpc_class&]tcpc_class_init (2.0.25_MTK)
[20241211_10:16:27462][ 5.102498][T1601003] modprobe: [name:tcpc_class&]Init Richtek
RegMap 1.2.1_G
[20241211_10:16:27462][ 5.103469][T1601003] modprobe: [name:tcpc_class&]size:0x10
tag:0x41000802 mode:0x0 type:0x2
注：由于安卓端log由vm_console统一管理，所以只有当安卓端vm_console起来之后才有log输出，此前的log
暂时没有
4、Log动态开关
关闭yocto 侧kernel log:
echo 0 > /proc/sys/kernel/printk
关闭android 侧 kernel log：
echo 0 > /proc/sys/kernel/printk
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 103

103
打开串口log
echo 1 >/proc/mtprintk
7.10.1.2 MTK log 抓取
1，Android端
Log保存默认路径是/data/debuglogger/
（1）adb 命令显示DebugLoggerUI主界面
adb shell am start -n com.debug.loggerui/com.debug.loggerui.MainActivity
UI界面控制如下：
2、yocto端
（1）重启后生效启停命令
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 104

104
deep_start/deep_stop 启/停Mobilelog，且启停状态重启后延续：
adb shell mobile_log_d --control deep_stop
adb shell mobile_log_d --control deep_start
（2）只影响此次开机启停命令
adb shell mobile_log_d --control start
adb shell mobile_log_d --control stop
7.10.1.3 MTK AEE log抓取
aee log会默认开启
db 存储路径
/data/aee_exp
/data/vendor/aee_exp
7.10.2 adb【连接，切换】
1.将usb切到安卓(双系统)
adb -d root
adb -d shell sysenv-test write USB_SWITCH A
#adb -d shell sysenv-test read USB_SWITCH //查看是否成功
adb -d reboot //重启
2.将usb重新切回yocto(双系统)
串口中查看yocto adb中/data/network_adb，存在则删除
下载附件的usb_android_to_yocto.rar，双击bat就行
再重启
3.USB切到yocto后，安卓如何使用adb(双系统)
adb forward tcp:7777 tcp:6666
adb connect 127.0.0.1:7777
adb -e shell //android shell
4.USB切到Android后，Yocto如何使用adb(双系统)
在Android adb shell执行：
mkfifo /data/local/tmp/fifo
nc -l -p 6666 0</data/local/tmp/fifo | nc 192.168.1.1 5555 1>/data/local/tmp/fifo &
adb forward tcp:7777 tcp:6666
adb connect 127.0.0.1:7777
adb -e shell //yocto shell
5. 三系统network_adb
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 105

105
虽然USB目前是直通给其中一侧，但也能通过network_adb的方式连接到其他两个系统的adb，以下列出每个
系统进入adb shell的指令，如USB默认在SOS，所 以用第一行指令。
USB SOS UOS Android UOS Tbox
SOS adb -d shell adb -d forward tcp:7666
tcp:6666
adb connect 127.0.0.1:7666
adb -s 127.0.0.1:7666 shell
adb -d forward tcp:7667
tcp:6667
adb connect 127.0.0.1:7667
adb -s 127.0.0.1:7667 shell
UOS
Android
adb -d forward tcp:7665
tcp:6665
adb connect 127.0.0.1:7665
adb -s 127.0.0.1:7665 shell
adb -d shell adb -d forward tcp:7667
tcp:6667
adb connect 127.0.0.1:7667
adb -s 127.0.0.1:7667 shell
UOS Tbox adb -d forward tcp:7665
tcp:6665
adb connect 127.0.0.1:7665
adb -s 127.0.0.1:7665 shell
adb -d forward tcp:7666
tcp:6666
adb connect 127.0.0.1:7666
adb -s 127.0.0.1:7666 shell
adb -d shell
6. 连接usb，利用USB直连方式也可以切换
注：需要切换到哪个系统的 USB，就运行对应的命令
安卓系统执行下方命令给需要 root 权限
命令执行后，重启才能生效
sysenv_test write USB_SWITCH T //Tbox
sysenv_test write USB_SWITCH Y //Yocto
sysenv_test write USB_SWITCH A //android
sysenv_test read USB_SWITCH //查看是否生效
7.10.3 sos uos console 切换
仅支持sos为基准进入uos console
nbl_vm_ctl shell --vmid 0 \\进入安卓console
nbl_vm_ctl shell --vmid 1 \\进入tbox
uos回到sos (使用快捷键ctrl+D)
注：此种方式，无法使用 adb 投屏等功能
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 106

106
7.10.4 android yocto 通过console 数据交互
可以通过virtiofs进行yocto和Android的数据交互
安卓端执行
su
mkdir /mnt/sdcard/yocto_data
mount -t virtiofs media /mnt/sdcard/yocto_data/
目前yocto端可共享的文件夹有/data/share/media和/mnt/vendor/nvdata
安卓端是默认挂载这两个文件夹的
代码路径：device/mediateksample/auto8676p1_64_bsp_vm/init.project.rc
#virtio-fs sample
mkdir /data/vendor/share/
mkdir /data/vendor/share/media/
mount virtiofs media /data/vendor/share/media
restorecon --recursive --cross-filesystems /data/vendor/share/media
mkdir /mnt/vendor/nvdata
mount virtiofs nvdata /mnt/vendor/nvdata
chmod 0771 /mnt/vendor/nvdata
chown root system /mnt/vendor/nvdata
restorecon --recursive --cross-filesystems /mnt/vendor/nvdata
7.10.5 remount挂载方法
三系统remount挂载方法如下：
1、在烧录的时需要替换如下几个文件：
Preloader_a 选择 bl2_sboot_dis.img
Preloader_b 选择 bl2_sboot_dis.img
Bl-an 选择 bl2-an_sboot_dis.img
Boot_a 选择 boot-debug.img
vendor_boot_a 选择 vendor_boot-debug.img
2、android端：adb -d shell remount
3、yocto端：adb -s 127.0.0.1:7665 shell "mount -o remount,rw /"
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 107

107
7.11 cpu配置
7.11.1 虚拟机CPU配置
对于MT8676，它有8个物理核。其中有4个小核，分别是Core0~Core3。有3个中核，分别是Core4~Core6。
有1个大核，是Core7。
对于每一个物理CPU，在hypervisor中，都有一个虚拟的vCPU与之对应。
物理CPU核既可以让一个VM独享，也可以让几个VM共享。如果CPU核为某一个VM 独享，需要在除该VM之
外的所有其他VM的配置文件中，将该CPU设置成 offline。
如果要多个VM共享CPU，则要在相应的VM配置文件中，让该CPU处于onLine。
MT8676设置SOS CPU offline的方法如下：
在编译时修改：
在文件yocto/prebuilt/hypervisor/grt_mt8676/nbl_vm_pre.sh中，添加
echo 0 > /sys/devices/system/cpu/cpux/online //cpux → cpu0, cpu1, cpu2,… cpu7
对于SOS 来说，Core0用于接收中断，不能关闭。该方法是编译时生效。
在系统运行时修改：
通过SOS adb shell进入目录/vendor/etc/hyper_android，修改nbl_vm_pre.sh文件，保存重启。
· MT8676设置UOS(Android) CPU offline的方法如下：
在编译时修改：
在文件alps/devices/mediatek/mt6897/init.mt6897.rc中，添加
write /sys/devices/system/cpu/cpux/online 0 //cpu x → cpu0, cpu1, cpu2, … cpu7
对于UOS(Android)， Core2用于接收中断，不能设置成offline。
在运行时修改：
通过Android adb shell进入目录/vendor/etc/init/hw，修改init.mt8676.rc文件，保存重启。
7.11.2 Nebula CPU调度策略配置
7.11.2.1 Nebula对共享核调度策略
对于VM独享的CPU，nebula不参与VM内部进程调度。由VM的Linux调度程序来调度。
对于VM共享的CPU，nebula参与VM间的进程调度。调度策略为：
1. 将共享的CPU运行时间，以period为单位进行划分。让每个VM中的进程都有机会在period时间内运行，
不会让一个VM独占一个period时间。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 108

108
2. 在period时间单位的基础上，规定每个VM在period的运行时间budget。即每个VM在period内最多只能运
行的时间为budget，时间到了之后，就必须 让出CPU，让其他的VM进行运行。
3. 对VM 内部的进程，nebula将其分4类，分别为IRQ, Spin_Lock, RT_Thread和Normal_Thread。这四种进
程的默认等级优先级为IRQ > Spin_Lock = RT_Thread > Normal_Thread。
4. 对于相同优先级的进程，同时要在共享核上运行，则nebula会通过调度，让其交替运行。这四类进程的时
间片分别是：IRQ(100us), Spin_Lock (200us), RT_Thread(200us), Normal Thread(budget)。例如，如果
SOS和UOS上同时有两个RT Thread进程要在相同的CPU上运行，则RT_Thread (SOS)和RT_Thread(UOS)
交替200us运行。
7.11.2.2 Nebula共享核调度策略参数配置
· 设置共享核period的方法：
在文件yocto/src/hypervisor/grt/thy-sdk/products/mt8676-mix/guest-configs/sos_mt8676.json中， “period”
字段对应的值
为period时间，单位us。8个核，所以有8个值。
· 设置共享核budget的方法：
SOS设置在文件yocto/src/hypervisor/grt/thy-sdk/products/mt8676-mix/guest-configs/sos_mt8676.json中，“
budgets”字段对 应的值为budgets时间，单位us。8个核，所有有8个值。
UOS设置在文件yocto/src/hypervisor/grt/thy-sdk/products/mt8676-mix/guest-configs/uos_alps_pv8676.lua中
， budgets数组
中的值为budgets时间，单位us。8个核，所有有8个值。
· 设置RT_Thread, Spin_Lock和IRQ的优先级和时间片。
在文件yocto/src/hypervisor/grt/thy-sdk/products/mt8676-mix/guest-configs/sos_mt8676.json中。“sched-
priority”对应的 字段为相对于Normal Thread的优先级，分别对应RT_Thread, Spin_Lock和IRQ进程优先级
。“sched-timeslice”对应的字段为RT_Thread, Spin_Lock和IRQ 的时间片，单位us。
7.12 中断配置
以8676 3os为例
涉及中断修改的配置文件如下：
1，分配给sos的中断配置文件：
yocto/prebuilt/hypervisor/grt_mt8676/auto8676p1_64_hyp_sos/sos_mt8676.json
2，rproc os间通信用的中断配置文件
yocto/prebuilt/hypervisor/grt_mt8676/auto8676p1_64_hyp_sos/rproc.pb.txt
3，android 用的中断配置文件
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 109

109
yocto/prebuilt/hypervisor/grt_mt8676/auto8676p1_64_hyp_sos/uos_alps_pv8676.lua
4，tbox 用的中断配置文件
yocto/prebuilt/hypervisor/grt_mt8676/auto8676p1_64_uos_tbox/uos_tbox_pv8676.lua
由于这些配置文件都会配置中断，若超过两个文件同时配置一个中断号，必然会导致冲突或是覆盖。
加载先后顺序
rproc.pb.txt->sos_mt8676.json→uos_alps_pv8676.lua，uos_tbox_pv8676.lua
uos_alps_pv8676.lua，uos_tbox_pv8676.lua 会覆盖sos_mt8676.json配置；
rproc.pb.txt，uos_alps_pv8676.lua，uos_tbox_pv8676.lua 三者之间会形成冲突关系。
案例一：uart2直通Android
uart2涉及中断有3个，255，256，284；在没配置rproc.pb.txt，nebula 默认给rproc占用了255，256中断号。
当Android端使用uart2时，会造成整个系统timeout之后重启。
log如下：
[16:48:36.709]收←◆[ 85.709945] nbl_vm_srv[2975]: console:/ # echo 12341 > /dev/ttyS2
[16:48:55.671]收←◆(5)[00111.185] 02344.03815> ####
[16:48:55.703]收←◆ handle_smc_instruction 506 irq:321 timeout.
(5)[00111.185] 02344.03815> irq pending: vector:321 not recorded
(5)[00111.185] 02344.03815> #### dump_gic_states 950 irq:321
(0)[00111.188] 01751.01981> #### dump_gic_states_task 898 irq:321
(0)[00111.188] 01751.01981> GICD_IROUTER<321>:0x0
(0)[00111.188] 01751.01981> #### irq 321 bind to vcpu: 0, pcpu: 0
(5)[00111.188] 02344.03815> #### handle_smc_instruction 506 irq:322 timeout.
(5)[00111.188] 02344.03815> irq pending: vector:322 not recorded
(5)[00111.188] 02344.03815> #### dump_gic_states 950 irq:322
(0)[00111.192] 01751.01981> #### dump_gic_states_task 898 irq:322
(0)[00111.192] 01751.01981> GICD_IROUTER<322>:0x0
(0)[00111.192] 01751.01981> #### irq 322 bind to vcpu: 0, pcpu: 0
(5)[00111.192] 02344.03815> #### handle_smc_instruction 506 irq:339 timeout.
(5)[00111.192] 02344.03815> irq pending: vector:339 not recorded
(5)[00111.192] 02344.03815> #### dump_gic_states 950 irq:339
(0)[00111.200] 01751.01981> #### dump_gic_states_task 898 irq:339
(0)[00111.200] 01751.01981> GICD_IROUTER<339>:0x0
(0)[00111.200] 01751.01981> #### irq 339 bind to vcpu: 0, pcpu: 0
(5)[00111.200] 02344.03815> #### handle_smc_instruction 506 irq:339 timeout.
(5)[00111.200] 02344.03815> irq pending: vector:339 not recorded
(5)[00111.200] 02344.03815> #### dump_gic_states 950 irq:339
(0)[00111.202] 01751.01981> #### dump_gic_states_task 898 irq:339
(0)[00111.202] 01751.01981> GICD_IROUTER<339>:0x0
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 110

110
(0)[00111.202] 01751.01981> #### irq 339 bind to vcpu: 0, pcpu: 0
[16:49:02.647]收←◆(6)[00118.161] 02344.03825> #### handle_smc_instruction 506 irq:487
timeout.
(6)[00118.161] 02344.03825> irq pending: vector:487 not recorded
(6)[00118.161] 02344.03825> #### dump_gic_states 950 irq:487
(0)[00118.166] 01751.01981> #### dump_gic_states_task 898 irq:487
(0)[00118.166] 01751.01981> GICD_IROUTER<487>:0x0
(0)[00118.166] 01751.01981> #### irq 487 bind to vcpu: 0, pcpu: 0
[16:49:02.856]收←◆(6)[00118.369] 02344.03825> ####
[16:49:02.972]收←◆ handle_smc_instruction 506 irq:487 timeout.
(6)[00118.369] 02344.03825> irq pending: vector:487 not recorded
(6)[00118.369] 02344.03825> #### dump_gic_states 950 irq:487
(0)[00118.372] 01751.01981> #### dump_gic_states_task 898 irq:487
(0)[00118.372] 01751.01981> GICD_IROUTER<487>:0x0
(0)[00118.372] 01751.01981> #### irq 487 bind to vcpu: 0, pcpu: 0
[16:49:03.060]收←◆(6)[00118.573] 02344.03825> #### handle_smc_instruction 506 irq:487
timeout.
(6)[00118.573] 02344.03825> irq pending: vector:487 not recorded
(6)[00118.573] 02344.03825> #### dump_gic_states 950 irq:487
(0)[00118.574] 01751.01981> #### dump_gic_states_task 898 irq:487
(0)[00118.574] 01751.01981> GICD_IROUTER<487>:0x0
(0)[00118.574] 01751.01981> #### irq 487 bind to vcpu: 0, pcpu: 0
[16:49:03.264]收←◆(6)[00118.777] 02344.03825> #### handle_smc_instruction 506 irq:487
timeout.
(6)[00118.777] 02344.03825> irq pending: vector:487 not recorded
(6)[00118.777] 02344.03825> #### dump_gic_states 950 irq:487
(0)[00118.780] 01751.01981> #### dump_gic_states_task 898 irq:487
(0)[00118.780] 01751.01981> GICD_IROUTER<487>:0x0
(0)[00118.780] 01751.01981> #### irq 487 bind to vcpu: 0, pcpu: 0
[16:49:03.468]收←◆(6)[00118.981] 02344.03825> #### handle_smc_instruction 506 irq:487
timeout.
(6)[00118.981] 02344.03825> irq pending: vector:487 not recorded
(6)[00118.981] 02344.03825> #### dump_gic_states 950 irq:487
(0)[00118.982] 01751.01981> #### dump_gic_states_task 898 irq:487
(0)[00118.982] 01751.01981> GICD_IROUTER<487>:0x0
(0)[00118.982] 01751.01981> #### irq 487 bind to vcpu: 0, pcpu: 0
[16:49:03.680]收←◆(6)[00119.193] 02344.03825> #### handle_smc_instruction 506 irq:487
timeout.
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 111

111
(6)[00119.193] 02344.03825> irq pending: vector:487 not recorded
(6)[00119.193] 02344.03825> #### dump_gic_states 950 irq:487
(0)[00119.195] 01751.01981> #### dump_gic_states_task 898 irq:487
(0)[00119.195] 01751.01981> GICD_IROUTER<487>:0x0
(0)[00119.195] 01751.01981> #### irq 487 bind to vcpu: 0, pcpu: 0
[16:49:03.884]收←◆(6)[00119.397] 02344.03825> #### handle_smc_instruction 506 irq:487
timeout.
(6)[00119.397] 02344.03825> irq pending: vector:487 not recorded
(6)[00119.397] 02344.03825> #### dump_gic_states 950 irq:487
(0)[00119.399] 01751.01981> #### dump_gic_states_task 898 irq:487
(0)[00119.399] 01751.01981> GICD_IROUTER<487>:0x0
(0)[00119.399] 01751.01981> #### irq 487 bind to vcpu: 0, pcpu: 0
[16:49:04.088]收←◆(6)[00119.601] 02344.03825> ####
[16:49:04.196]收←◆ handle_smc_instruction 506 irq:487 timeout.
(6)[00119.601] 02344.03825> irq pending: vector:487 not recorded
(6)[00119.601] 02344.03825> #### dump_gic_states 950 irq:487
(0)[00119.603] 01751.01981> #### dump_gic_states_task 898 irq:487
(0)[00119.603] 01751.01981> GICD_IROUTER<487>:0x0
(0)[00119.603] 01751.01981> #### irq 487 bind to vcpu: 0, pcpu: 0
[16:49:04.292]收←◆(6)[00119.805] 02344.03825> #### handle_smc_instruction 506 irq:487
timeout.
(6)[00119.805] 02344.03825> irq pending: vector:487 not recorded
(6)[00119.805] 02344.03825> #### dump_gic_states 950 irq:487
(0)[00119.815] 01751.01981> #### dump_gic_states_task 898 irq:487
(0)[00119.815] 01751.01981> GICD_IROUTER<487>:0x0
(0)[00119.815] 01751.01981> #### irq 487 bind to vcpu: 0, pcpu: 0
[16:49:11.270]收←◆\0€\0€€\0\0\0€\0\0\0€\0\0\0€\0\0\0\0\0\0\0\0\0€\0\0\0\0\0
会有hypevisor irq处理timeout log。
7.13 STR
7.13.1 STR机制概要说明
本章节主要介绍 MT8676 Hypervisor suspend/Resume 流程以及常见问题的处理方法。
在 MT8676 平台上，suspend 即 suspend to RAM，此状态使所有的设备进入低功耗状态，仅保留 RAM
自刷新。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 112

112
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
在 MT8676 Hypervisor（ L+L+A）系统上， Host OS SoS 与 Guest OS Tbox 系统都是 Yocto ， Guest
OS IVI 系统是Android。系统级 Suspend 由 Host OS 发起，触发 Guest OS 运行 Suspend Flow ，
Guest OS 都完成 Suspend Flow 之 后 ， Host OS 可以进入 Suspend ， Host OS Suspend 完成之后整
个系统才能进入省电的深度休眠模式。
7.13.2 STR框架
以EINT触发系统进出休眠为例
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 113

113
7.13.2.1 suspend flow
流程说明：
1. 平台进出休眠主要由 MCU 发起， MCU 通过 GPIO35 (MCU2AP) 的状态控制 SoC进出休眠，GPIO35
被拉低后，会触发中断，该中断会被 Hypervisor 分发给 SoS 系统处理 SoS Kernel 收到中断后，将 Key
Event 上报。
2.在SoS userspace 中，MTK增加了一段控制逻辑SleepManager（state manager），用于管理Guest OS的
电源状态，这层逻辑主要是soc通过 input sub system获取key event来触发的。
3. 当检测到休眠事件后，SoS userspace 写powerkey event 到/sys/guest_os/android/pm_state，向两个
Guest OS（Android/Yocto）发起休眠请求。
4. SoS 的 kernel driver 通过Mailbox 方式将 suspend 请求通知到两个 Guest OS 的 car event driver。
5. 在car event driver中，上报虚拟 Power Key (Keyevent=87)，触发 Guest OS 端完整的休眠流程。
6. Guest OS IVI 由于 Vehicle HAL 没有现成的接口对接 Car EVENT Driver，所以这里增加 Input
subsystem 支持，等待 Kernel 端送来的虚拟 Power Key ，VHAL 收到后会通知 Car Power Management
Service 启动休眠流程。
7. Power Management Service 依然监听 Power Key Event(Keyevent=116)，这里没有执行 PMS Flow。
8. 触发关闭显示相关硬件。
9. CPMS 在没有唤醒锁检查的情况下触发 Suspend Flow，触发 Android Kernel Suspend。 Kernel
Suspend Flow 与原生系统中的流程相同。根据执行顺序，它依次调用设备注册的
Prepare/Suspend/Suspend_late 回调函数， 在休眠阶段为每个 Device driver 完成必要的准备工作。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 114

114
10. 各device 休眠后，送S2idle SMC指令到ATF关闭CPU Core，指令会被Hypevisor拦截，并挂起对应的
vCPU线程。Android的休眠完成，Hypevisor会记录 Android状态，将running改为suspend，方便Host os通过
结点查询。
11. 触发Android端休眠后，会阻塞并等待，直到从节点/sys/guest_os/android (tbox)/pm_state 获取到两个
Guest OS 都为 Suspend 的状态。
12. 待 Guest OS 都 Suspend 后， Host OS 端上报 key code 87 触发关闭显示相关，然后再检查
Wakelock 状态， 如无锁，则触发 Host OS Kernel Suspend Flow (echo mem > /sys/power/state)
13. 执行Yocto kernel suspend，完成Device suspend后，送S2idle SMC指令到ATF关闭CPU core，指令会
被Hypevisor 拦截，并挂起对应的vCPU线程，然后 虚拟机做好backup，Hypevisor将S2idle指令再发送给
ATF，将物理CPU真正关闭。
14. 在 ATF 中，CPU0 执行 WFI 指令前， 先将 GPIO128 (AP2MCU)拉低， 通知 MCU ，SoC 端已经
完成 Host OS 和 Guest OS 的 Suspend Flow。
15. 待Arm相关的硬件被关闭后，SPM（system power manager，用于电源管理的MCU）将接管整个系统的
资源，控制DRAM进入自刷新模式，关闭26M和Vcore， 通知PMIC进入Low power Mode。至此，整个休眠
流程完成，系统处于低功耗状态，等待唤醒事件发生。
7.13.2.2 resume flow
流程说明：
1. MCU 收到唤醒事件后，拉高GPIO35，SPM收到EINT后，依次打开释放的资源，如通知PMIC 离开low
power mode，打开VCORE和26M，发送命令通知DRAM离开自刷新。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 115

115
2. 给CPU0上电,执行CPU Resume流程，再跳到suspend前设定的地址，开始执行系统Resume流程。
3. 拉高GPIO128，将soc已经醒来的消息发送给MCU。（可根据需求调整通知MCU的时间点，如等Android
Resume完成再拉高GPIO128）。
4. Hypevisor 中vCPUx线程恢复后，跳到Host OS Linux kernel，再执行Native kernel Resume Flow，将唤
醒事件通过key event上报。
5. SoS的SleepManager 通过input sub system上报的事件判断后，将 决 定 再 次 休 眠 或 者 继 续 唤 醒 Flow，
像 MCU 拉高 GPIO35 这种就会继续唤醒Flow.
6. 如果是可以唤醒整个系统的 Key Event ，则上报 keyvevent 87 去 resume Weston, 并 hold wakelock，
防止再次休眠。
7. 写节点/sys/guest_os/android(tbox)/resume，触发 Guest OS 唤醒。
8. Hypevisor收到后，恢复vCPU0线程。
9. Enable Non-Boot CPUs，恢复vCPU1~7线程，开始Android kernel Resume Flow
10. IVI 基于 CPMS 架构， 无需判断 keyevent ，默认所有事件都可以触发整个系统 Resume。
11. 在 Host OS 端， 可以通过节点/sys/guest_os/android (tbox)/pm_state，使用 Mailbox 机制查询两个
Guest OS 系统（Android/Tbox）状态，如果 Guest OS 端 kernel Resume 完成则更新状态为 Running。
12. Android 端， Car Power Management Service 收到唤醒事件后， Disable System Suspend ，防止误
触发休眠。 Tbox 端， 由 SleepManager 主动 hold wakelock。
13. 通知打开显示模块，至此，整个唤醒流程完成，可以开始人机交互。
RTC 或 Modem 唤醒流程
RTC 或 Modem ，从实际场景以及节省功耗的角度来说， 它们唤醒的流程有所不同。
参考图 1-2 ，SPM 收到 RTC 或 Modem 唤醒后， 1-6 的流程没有变化。第 7 步，SOS 的
SleepManager 通过 Key Event 的 Device Name ，判断出是 RTC 或 Modem 触发的唤醒，则根据实际
需求做不同的唤醒逻辑，例如仅需要唤醒 Tbox OS。Tbox Resume 后，需要 hold wake_lock 再处理任务
，处理完任务后 release wake_lock。而 Host OS 端，当触发Tbox Resume 后，会持一个临时的
wake_lock，通过节点/sys/guest_os/tbox/pm_state，使用 Mailbox 机制查询Tbox OS 的状态，如果 Tbox
端已完成任务并重新睡下去， Host OS 端则会释放临时的wake_lock。最后，SOS 端监测到没有 hold
wakelock ，会重新睡下去。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 116

116
7.13.2.3 kernel suspend/resume流程
系统休眠
cat /sys/power/wakeup_count
echo mem > /sys/power/state
7.13.3 控制guest os suspend/resume方式
 在 SoS 端检查 IVI (Android) OS 的状态， 显示 running 表示 Android 正在运行，显示 suspend 表
示 Android 已经 挂起。
cat /sys/guest_os/android/pm_state
 在 SoS 端触发 IVI (Android) OS 进入休眠状态。
echo powerkey > /sys/guest_os/android/pm_state
 在 SoS 端触发 IVI (Android) OS 唤醒。
echo 0 > /sys/guest_os/android/resume
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 117

117
 在 SoS 端检查 Tbox OS 的状态，显示 running 表示 Tbox 正在运行，显示 suspend 表示 Tbox 已经挂
起。
cat /sys/guest_os/tbox/pm_state
 在 SoS 端触发 Tbox OS进入休眠状态。
echo powerkey > /sys/guest_os/tbox/pm_state
 在 SoS 端触发 Tbox OS 唤醒。
echo 1 1 > /sys/guest_os/tbox/resume （Tbox Sleepmanager 持锁）
echo 1 2 > /sys/guest_os/tbox/resume （Tbox Sleepmanager 不持锁）
7.13.4 调试方法
7.13.4.1 休眠查询
如何判定系统休眠成功：
屏幕熄灭可能仅表示系统进入浅睡眠，这并不代表系统已经成功进入休眠状态，判定系统是否体眠成功需要査
看 Kernel log，若系统成功进入 suspend，则 Host 0S 端不再打印 Kernel log。
如果需要通过 1og判断休眠是否成功，需要先下这几行命令打开更多的 debug log信息:
echo 8 8 8 8 > /proc/sys/kernel/printk
echo 1 > /sys/module/kernel/parameters/initcall_debug
echo 1 > /proc/mtprintk
kernel log中，关键字”PM: Syncing filesystems ...“ 表示kernel 开始执行suspend流程
kernel log中，关键字“suspend of devices complete after xxx msecs”表示device suspend完成。
kernel log中，关键字“noirq suspend of devices complete after xxx msecs”表示device noirq suspend完成
。
kernel log中，关键字“suspend enter”表示suspend 流程完成，系统已进入suspend状态。
7.13.4.2 唤醒源
如何确认唤醒源
在 Kernel log 中搜索关键字“suspend wake up by”，可以查看唤醒源
如:
Pwrkey,唤醒(及其他 EINT 唤醒):
[SPM] suspend wake up by R12_EINT_EVENT_B, timer out = 207308
如果要看具体是由哪个EINT唤醒，需要先从日志查看
EINT xxx is pending
再通过 cat/proc/interrupts 看 xx 对应的是哪个中断,
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 118

118
Modem 相关唤醒:
[SPM] suspend wake up by R12CCIF0_EVENT_B, timer out = 1825253
定时器(PCM Timer)唤醒
[SPM] suspend wake up by PCM_TIMER, timer_out = 65612
目前MT8676支持的唤醒源列表如下：
您可以按照以下方式禁用列表中可以禁用的唤醒源。但是，请注意，只有在“can it be disabled”列中标注为
可禁用 )的唤醒源才能被禁用:
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 119

119
使用系统提供的调试命令可以快速禁用特定的唤醒源:
① 使用如下命令读取当前系统唤醒源设定:
cat /proc/mtk_lpm/power/suspend_ctrl | grep -i wake_src
② 在表1-1的"Control Bit"栏位中找到您想要禁用唤醒源所对应的的 control bit 位，然后将读出的 wake_src
对应bit写0，最后用下述命令将修改后的 wake_src写进系统(不需要禁用的唤醒源的 control bit 位不进行修
改):
echo wake src 0x******** >/proc/mtk_lpm/power/suspend_ctrl
③ 如果想要再启用某个唤醒源，就将对应的 control bit 再写1即可。
7.13.4.3 分析不能休眠问题
如系统灭屏后无法进入休眠(即没有suspend entry打印)，可以用以下命令判断是哪个wakelock阻止系统进
入休眠：
查看哪些模块持锁：
① cat /sys/kernel/debug/wakeup_sources
观察输出结果的第5列active_since，数字不为0且一直在增大的就是阻止系统进入休眠的wakelock。
② 亦可使用下面的command查看，输出的那些就是阻止进休眠的wakelock
cat /sys/kernel/debug/wakeup_sources | awk -F$'\t' '{ if(NR==1) print $1"\t" $7; else if($10) print $1"\t"$10;}'
③ 查看kernel log,搜索关键字
Pending Wakeup Sources:
如果系统已经进入kernel休眠流程(suspend entry):
1 wakelock
ex：
<6>[ 426.823002]<1>(0)[1895:system server]PM: Wakeup pending, aborting
suspend
<6>[ 426.823021]<1>(0)[1895:system server]active wakeup source:leds wakelock
找申请 leds wakelock 的模块即可，基本上就是这个模块导致。
② dpm suspend阶段，有device suspend fail也会导致休眠失败
ex:
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 120

120
③ 还有很多休眠失败的情形，后续有遇到再进行补充
7.13.4.4 休眠/唤醒各阶段延迟与优化
1.休眠和唤醒可以大致划分为下面几个阶段，在kernel log中搜索下面的关键字，可以大致得到每个阶段的耗
时，针对耗时异常的阶段再进行细化分析
休眠：
suspend entry
Freezing user space processes
Freezing remaining freezable tasks
suspend of devices complete
start suspend of devices complete
late suspend of devices complete
noirq suspend of devices complete
suspend enter
唤醒：
wake up by
noirq resume of devices complete
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 121

121
early resume of devices complete
resume of devices complete
Restarting tasks
suspend exit
2. 可以在各个os中打开下面两个config，
CONFIG_PM_DEBUG=y
CONFIG_PM_SLEEP_DEBUG=y
并输入：
echo 0 > /sys/module/printk/parameters/console_suspend
echo 1 > /sys/module/kernel/parameters/initcall_debug
echo 1 > /sys/power/pm_print_times
echo 8 > /proc/sys/kernel/printk
echo 1 > /sys/power/pm_debug_messages
会把各个device，driver的休眠唤醒耗时打印出来。（打开config后，打印的log会很多，也可能会增加休眠唤
醒的时间，可以重点看下相对耗时较长的阶段，device）
7.14 OS间内存共享
7.14.1 Vdmabuf
7.14.1.1 概述
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 122

122
vdmabuf功能是用来share Android端申请的buffer到yocto端，目前不具备双向能力，只能share从
android端分配的buffer到yocto。vdmabuf本身不具备alloc buffer的能力，使用前需要提前从heap里面分配好
buffer（可使用7.17 dmabuf 章节中介绍的接口）。
android端根据alloc的dmabuf fd export出Buf-ID，结合OS间通信机制（例如vsock，介绍详见
7.7.1.1vsock使用方法），Buf-ID传到yocto端，yocto端根据接收到的Buf-ID import出dmabuf fd后访问共享内
存。
PS：vdmabuf share buffer的最大size是1GB。
7.14.1.2 接口介绍
1、static inline int mtk_vdmabuf_guest_open(const char *name)：打开 guest 端的/dev/virtio-vdmabuf 节
点，获取到 guest 端的 fd
2、static inline int mtk_vdmabuf_guest_export(const int fd, const int dmabuf_fd,virtio_vdmabuf_buf_id_t
*buf_id)：根据 fd 和 dmabuf_fd，解析出 buf_id
3、static inline int mtk_vdmabuf_guest_close(int fd)：关闭 guest 端 fd
4、static inline int mtk_vdmabuf_vhost_open(const char *name)：打开 host 端的/dev/vhost-vdambuf 节点，
获取到 host 端 fd
5、static inline int mtk_vdmabuf_vhost_import(const int fd, virtio_vdmabuf_buf_id_t *buf_id, int/* OUT*/
*dmabuf_fd)：根据 host 端 fd 和 从 guest 端接收到 buf_id，解析出 dmabuf_fd
6、static inline int mtk_vdmabuf_vhost_release(const int fd, virtio_vdmabuf_buf_id_t *buf_id)：释放 buffe
r
7、static inline int mtk_vdmabuf_vhost_close(int fd)：关闭 host 端的 fd
7.15 OS内进程间内存共享
7.15.1 通过Binder机制
Binder 是 Android 操作系统中一种高效、安全的进程间通信机制。它通过共享内存和内核驱动实现高效的通
信，同时通过权限验证和身份认证保证通信的安全性。它允许进程间传递复杂的数据结构，包括文件描述符和
共享内存。
MT8676 yocto端也支持Binder机制。
7.15.1.1 通过 IPC Binder 传递文件描述符
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 123

123
7.15.1.1.1 接口介绍（C++）
1、writeFileDescriptor：服务端或客户端使用Parcel的此方法将文件描述符写入Parcel；
2、readFileDescriptor：客户端或服务端使用Parcel的此方法从Parcel中读取文件描述符；
7.15.1.1.2 伪代码示例（C++）
1、服务端
#include <binder/Parcel.h>
#include <binder/BinderService.h>
#include <binder/IServiceManager.h>
#include <fcntl.h>
#include <unistd.h>
using namespace android;
class MyService : public BBinder {
public:
static void instantiate() {
defaultServiceManager()->addService(String16("MyService"), new MyService());
}
virtual status_t onTransact(uint32_t code, const Parcel& data, Parcel* reply, uint32_t flags = 0)
override {
switch (code) {
case 0: { // getFileDescriptor
int fd = open("/path/to/resource", O_RDWR);
if (fd < 0) {
return UNKNOWN_ERROR;
}
reply->writeFileDescriptor(fd);
//close(fd);
return NO_ERROR;
}
default:
return BBinder::onTransact(code, data, reply, flags);
}
}
};
int main(int argc, char** argv) {
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 124

124
MyService::instantiate();
ProcessState::self()->startThreadPool();
IPCThreadState::self()->joinThreadPool();
return 0;
}
2、客户端
#include <binder/IServiceManager.h>
#include <binder/Parcel.h>
#include <binder/IBinder.h>
#include <fcntl.h>
#include <unistd.h>
#include <iostream>
using namespace android;
int main(int argc, char** argv) {
sp<IServiceManager> sm = defaultServiceManager();
sp<IBinder> binder = sm->getService(String16("MyService"));
if (binder == nullptr) {
std::cerr << "Failed to get MyService" << std::endl;
return -1;
}
Parcel data, reply;
binder->transact(0, data, &reply); // 0 is the code for getFileDescriptor
int fd = reply.readFileDescriptor();
if (fd < 0) {
std::cerr << "Failed to get file descriptor" << std::endl;
return -1;
}
// Use the fd (e.g., read/write data)
char buffer[128];
read(fd, buffer, sizeof(buffer));
std::cout << "Read data: " << buffer << std::endl;
//使用完之后关闭
close(fd);
return 0;
}
7.15.1.2 通过 IPC Binder 传递 native_handle_t 对象
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 125

125
native_handle_t是一个结构体，用于封装多个文件描述符和整数数据。
7.15.1.2.1 接口介绍（C++）
1、writeNativeHandle：服务端或客户端使用Parcel的此方法将native_handle_t对象写入Parcel；
2、readNativeHandle：客户端或服务端使用Parcel的此方法从Parcel中读取native_handle_t对象；
7.15.1.2.2 伪代码示例（C++）
1、服务端
#include <binder/Parcel.h>
#include <binder/BinderService.h>
#include <binder/IServiceManager.h>
#include <hardware/hardware.h>
#include <fcntl.h>
#include <unistd.h>
using namespace android;
class MyService : public BBinder {
public:
static void instantiate() {
defaultServiceManager()->addService(String16("MyService"), new MyService());
}
virtual status_t onTransact(uint32_t code, const Parcel& data, Parcel* reply, uint32_t flags = 0)
override {
switch (code) {
case 0: { // getNativeHandle
int fd = open("/path/to/resource", O_RDWR);
if (fd < 0) {
return UNKNOWN_ERROR;
}
native_handle_t* handle = native_handle_create(1, 0);
handle->data[0] = fd;
reply->writeNativeHandle(handle);
native_handle_delete(handle);
//close(fd);
return NO_ERROR;
}
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 126

126
default:
return BBinder::onTransact(code, data, reply, flags);
}
}
};
int main(int argc, char** argv) {
MyService::instantiate();
ProcessState::self()->startThreadPool();
IPCThreadState::self()->joinThreadPool();
return 0;
}
2、客户端
#include <binder/IServiceManager.h>
#include <binder/Parcel.h>
#include <binder/IBinder.h>
#include <hardware/hardware.h>
#include <fcntl.h>
#include <unistd.h>
#include <iostream>
using namespace android;
int main(int argc, char** argv) {
sp<IServiceManager> sm = defaultServiceManager();
sp<IBinder> binder = sm->getService(String16("MyService"));
if (binder == nullptr) {
std::cerr << "Failed to get MyService" << std::endl;
return -1;
}
Parcel data, reply;
binder->transact(0, data, &reply); // 0 is the code for getNativeHandle
const native_handle_t* handle = reply.readNativeHandle();
if (handle == nullptr) {
std::cerr << "Failed to get native handle" << std::endl;
return -1;
}
int fd = handle->data[0];
// Use the fd (e.g., read/write data)
char buffer[128];
read(fd, buffer, sizeof(buffer));
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 127

127
std::cout << "Read data: " << buffer << std::endl;
//使用完毕后关闭
close(fd);
native_handle_close(handle);
native_handle_delete(const_cast<native_handle_t*>(handle));
return 0;
}
7.16 debug入口办法
7.16.1 常用debug方式
1， android remount方式
需要重新5个分区img，如下：
preloader_a： bl2_sboot_dis.img
preloader_b： bl2_sboot_dis.img
vendor_boot_a：vendor_boot-debug.img
bl2-an: bl2-an_sboot_dis.img
boot_a: boot-debug.img
2，yocto remount
先更新镜像为preloader_a： bl2_sboot_dis.img
preloader_b： bl2_sboot_dis.img
remount指令如下
mount -o remount,rw /
3，yocto抓取ftrace方式
第一步，启动trace
mount -t debugfs nodev /sys/kernel/debug
echo 40960 > /sys/kernel/debug/tracing/buffer_size_kb
echo > /sys/kernel/debug/tracing/trace
echo 1 > /sys/kernel/debug/tracing/events/sched/sched_switch/enable
echo 1 > /sys/kernel/debug/tracing/events/drm/enable
echo 1 > /sys/kernel/debug/tracing/tracing_on
第二步，关闭trace，并导出trace log
echo 0 > /sys/kernel/debug/tracing/tracing_on
echo 0 > /sys/kernel/debug/tracing/events/sched/sched_blocked_reason/enable
echo 0 > /sys/kernel/debug/tracing/events/sched/sched_waking/enable
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 128

128
echo 0 > /sys/kernel/debug/tracing/events/sched/sched_wakeup/enable
echo 0 > /sys/kernel/debug/tracing/events/sched/sched_switch/enable
echo 0 > /sys/kernel/debug/tracing/events/sched/sched_process_fork/enable
echo 0 > /sys/kernel/debug/tracing/events/v4l2/enable
echo 0 > /sys/kernel/debug/tracing/events/vb2/enable
echo 0 > /sys/kernel/debug/tracing/events/drm/enable
dd if=/sys/kernel/debug/tracing/trace of=/tmp/atrace.html bs=2048
4，android 抓取perfetto
指令如下
adb shell perfetto -o /data/misc/perfetto-traces/trace_file.perfetto-trace -t 10s sched freq idle am wm gfx view
binder_driver hal dalvik camera input res memory irq
adb pull /data/misc/perfetto-traces/trace_file.perfetto-trace
7.16.2 串口log入手确认启动时序
多系统所有阶段的 log 都会输出到同一个串口，很容易混淆，可借助 log 关键词进行标识，方便 debug。
先看下启动流程，后对每个阶段 log 关键词确认。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 129

129
7.16.2.1 lk
lk 的每句 log 是没有关键词进行区分的，只能通过 start 和 end log 进行辨识。
起始 log，多系统的 lk 关键词都可以通过
welcome to lk2
进行标识，顺序 sos lk->android uos lk -> tbox uos lk
LLA 会搜索到三次“welcome to lk2”
结束 log，会有所不一样，如下：
1，sos lk 结束 log
Turn off BL31 console
2， android uos lk 结束 log
lk finished --> jump to linux kernel 64Bit
3，tbox uos lk 结束 log
LK run time
7.16.2.2 hypevisor 串口 log
可以确定是 hypevisor log 关键词
ARM boot EL2
通过这句 log，再可以通过关键词
nebula_log_driver
搜索确定周围 hypevisor uart log
7.16.2.3 Android 串口 log
1，Android uos eraly console
Android UOS early console 也会以 hypevisor log 形式输出，所以 log 还是以“nebula:”为开头
2，Android uos early console end
如上图，当看到“init: printk: console [hvc0] enabled” 就表示 early console 已经结束，准备要切换到 virtio-c
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 130

130
onsole
3，Android uos virtio-console
如上图所示，virtio-console 输出的 log 会以“nbl_vm_srv[XXX]”为开头，其中 XXX 是 nbl_vmm 的 pid 号。
3 系统的话可以通过 nbl_vmm 的 pid 号区分 不同的 uos。
7.16.3 从问题种类选择合适debug工具
7.16.2.1 功能问题
从 log 分析入手，会用到以下方式：
1，debuglogger
bootloader, kernel, userspace log 都会存在 mobilelog，modem log 会存在 Mdlogger。
mobilelog 和 Mdlogger log 都存到/data/debuglogger 路径下。
Android 和 yocto debuglogger 路径同样是/data/debuglogger
2，logcat
用于分析 Android userspace 层问题
3，journalctl
用于分析 yocto userspace 层问题
4，dmesg
用于分析 yocto 和 Android kernel 层问题
7.16.3.2 稳定性
7.16.3.2.1 KE，HWT，HW reboot，NE，JE，SWT，EE
当系统出现 KE，HWT，HW reboot，NE，JE，SWT，EE，会在当前 OS /data/aee_exp 生成对应 db 文件，
即会用到以下 debug 工具：
1，GAT
DB 解析 工具
2，SP flash tool
当系统一直触发 KE 无法正常进入系统时，lk kedump 回写 expdb 分区后，关机，再通过 SP flash tool 工具
read back 对应 os expdb 分区。
3，dump expdb 分区解析
python expdb_parser.pyc expdb(db)（需要 GAT 带的 python 和里面的脚本）
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 131

131
7.16.3.2.2 内存泄露
1，Asan
可抓 native 层内存泄露现场 log；
2，使能 page_owner
可抓 kernel 内存泄露问题
3，libmemunreachable+mallocdebug
可抓 Android 端 native 内存泄露现场 log；
7.16.3.2.3 踩内存
1，Hwasan
适用 native 层
2，kasan
适用 kernel
7.16.3.2.4 性能
1，qian_debug-tool
可抓取多系统整个 cpu 状态。
2，ftrace
主要用于内核空间的性能分析，userspace 性能数据也可以抓到。
可用 https://ui.perfetto.dev/ 打开 trace log，进行图形分析。
3，perfetto
抓取单 os cpu 状态数据。
4，top
5，vmstat
7.16.4 基础器件debug 方式
针对以下器件，linux 框架或是平台会向 userspace 层暴露控制节点，通过操作节点方式可以查询、控制器件
的一种 debug 方式。
7.16.3.1 cpu
1，查询 cpu 可设置频点
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 132

132
cat /sys/devices/system/cpu/cpufreq/policy0/scaling_available_frequencies
2，cpu 锁频设置
例如锁频 cpu0 锁频 1.9GHz
echo 1900000 > /sys/devices/system/cpu/cpufreq/policy0/scaling_min_freq
echo 1900000 > /sys/devices/system/cpu/cpufreq/policy0/scaling_max_freq
7.16.3.2 内存
1，系统内存 size
1）linux 通用方式
cat /proc/meminfo
2）android
dumpsys meminfo
2，Android 端 dmabuf 数据
1）查询 dmabuf 使用情况
dmabuf_dump
2）mtk 查询每个 dmabuf node 所持对象
cat /proc/dma_heap/all_heaps
7.16.3.3 中断
cat /proc/interrupts
7.16.3.4 gpio
1，查询 gpio 状态
cat /proc/mtk_gpio/soc.pinctrl
7.16.3.5 i2c
集成 i2c-tools，目前 LLA 三个系统都已经集成
1，i2cdetect
1）列举 i2c bus
i2cdetect -l
2）列举 i2c-1 bus 上面连接所有设备
i2cdetect -y 1
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 133

133
发现 I2C 设备的位置显示为 UU 或者表示设备地址的数值，UU 表示该设备在 driver 中被使用。
2，i2cdump
dump I2C 设备大批量 register 的值
i2cdump -y -f [i2c-bus] [chip addr]
3，i2cget
读取 I2C 设备某个 register 的值
i2cget -y -f [i2c-bus] [chip addr] [register]
4，i2cset
设置 I2C 设备某个 register 的值
i2cget -y -f [i2c-bus] [chip addr] [register] [value]
7.16.3.6 uart
1，设置串口波特率
stty -F /dev/ttyS2 ispeed 921600 ospeed 921600 cs8
2，查询串口设置
stty -F /dev/ttyS2 -a
3，读串口
cat /dev/ttyS2
4，向串口发数据
echo 123 > /dev/ttyS2
发送 16 进制数
echo -ne '\x41\x42\x43' > /dev/ttyS2
7.16.3.7 pmic
首先切换目录，找到 pmic_access 节点：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 134

134
adb root
adb shell
cd /sys/bus/platform/devices/mt-pmic
read 方法：
echo addr > pmic_access
addr 格式: SXXXX (S 是 slave address, XXXX 为想要查的寄存器地址)。
ex.
echo 40008 > pmic_access
cat pmic_access
write 方法：
echo addr val > pmic_access
addr 格式: SXXXX (S 是 slave address, XXXX 为想要查的寄存器地址)。
val 格式：是 16 进制但是不要写 0x。
ex.
echo 5024D 1 > pmic_access
常见的 slave address：
slave 4: MT6363/MT6377
slave 5: MT6373/MT6368/MT6369
slave 6: MT6319/MT6316
slave 7: MT6319/MT6316
slave 8: MT6319/MT6316
slave 3: MT6319
slave-id 查询方法，以 mt6363.dtsi 为例，slave address 即为 4：
main_pmic: pmic@4 {
compatible = “mediatek,mt6363”;
reg = <0x4 SPMIUSID>;
...
};
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 135

135
7.17 dmabuf
DMA-BUF（Direct Memory Access Buffer）是一种内核机制，用于在不同的设备驱动程序之间共享缓冲区。
它主要用于图形和多媒体应用程序中，以实现高效的内存共享和数据传输。DMA-BUF 允许多个设备驱动程
序在不复制数据的情况下共享同一块物理内存，从而提高性能和减少延迟。
7.17.1 接口介绍
1、BufferAllocator* CreateDmabufHeapBufferAllocator()：创建一个新的 BufferAllocator 实例
2、void FreeDmabufHeapBufferAllocator(BufferAllocator* buffer_allocator)：释放一个 BufferAllocator 实例
3、int DmabufHeapAlloc(BufferAllocator* buffer_allocator, const char* heap_name, size_t len, unsigned
int heap_flags, size_t legacy_align)：从指定的 DMA 缓冲区堆中分配内存
4、int DmabufHeapAllocSystem(BufferAllocator* buffer_allocator, bool cpu_access, size_t len, unsigned
int heap_flags, size_t legacy_align)：从系统堆中分配内存，支持 CPU 访问
5、int MapDmabufHeapNameToIonHeap(BufferAllocator* buffer_allocator, const char* heap_name, cons
t char* ion_heap_name, unsigned int ion_heap_flags, unsigned int legacy_ion_heap_mask, unsigned le
gacy_ion_heap_flags)：将 DMA 缓冲区堆名称映射到 ION 堆名称
6、int DmabufHeapCpuSyncStart(BufferAllocator* buffer_allocator, unsigned int dmabuf_fd, SyncType s
ync_type, int (*legacy_ion_cpu_sync)(int, int, void *), void *legacy_ion_custom_data)：开始 DMA 缓冲区
的 CPU 同步
7、int DmabufHeapCpuSyncEnd(BufferAllocator* buffer_allocator, unsigned int dmabuf_fd, SyncType sy
nc_type, int (*legacy_ion_cpu_sync)(int, int, void*), void* legacy_ion_custom_data)：结束 DMA 缓冲区的
CPU 同步
8、bool CheckIonSupport()：检查系统是否支持 ION
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 136

136
八、模块
8.1 Display
8.1.1 Display 总览
8.1.1.1 名词解释
Abbreviation Explanation
DSI Display Serial Interface 显示串行接口
DPI Digital Parallel Interface 数字并行接口
SerDes Serializer/Deserializer 加串器/解串器
LCM Liquid Crystal Display Module 液晶显示模组
DTS Device Tree Source设备树
HWC Hardware Composer 硬件合成器
DP Display Port 数字式视频接口标准
DSC Display Stream Compression 视觉无损显示流压缩标准
CRTC Cathode Ray Tube Controller(阴极射线管控制器)即显示控制器
8.1.1.2 Display Capbility
Display module Capbility
DISP pipeline 10bit pipe *3（MAX 688Mhz at 0.75v）
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 137

137
DSI DSI0 + DSI1
C/D PHY Combo 4-lane * 2
DPHY：2.5Gbps/lane
DP DP1.4，4-lane 8.1Gbps/lane with USB2.0
or
DP1.4，2-lane 8.1Gbps/lane with USB3.0
Panel number 1 - 6
OVL Layers OVL0-OVL7，16 layers
Compression VESA DSC 1.2（2 slice *2）
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 138

138
8.1.1.3 Architecture
8.1.1.3.1 HW Architecture
带宽限制：
DSI0：2880*1800@60fps or 2*1920*1080@60fps
DP：7680*1080@60fps or 2*2560*1600@60fps
DSI1：2880*1800@60fps or 2*1920*1080@60fps
Full PQ和Lite PQ区别
Full PQ：tdshp，all3.0，ccorr，gamma，c3d，all2.0，dither
Lite PQ：tdshp，ccorr，gamma
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 139

139
从上图可以看出MML/MDP主要是功能在于处理图层缩放，PQ，Rotation
8.1.1.3.2 SW Architecture
8.1.1.3.2.1 Hypervisor (Yocto + Android)
当前采用驱动层虚拟化方案，将 disp_pq 和 disp interface(DSI/DP) 虚拟化，ovl 仍是直通控制，兼顾性能
。完整的 CRTC 驱动（包括 ovl, disp_pq, dsi/dp）在 Host OS，Guest OS 采用 Virt-Connector/Encoder，
通过 virtio 去Host OS 的 DRM 驱动获取 display mode 以及开关 CRTC。Guest OS 更新图层则采用直通
方式，直接驱动 OVL，无需和 Host 端通信。
MML/MDP 虚拟化框架如下图所示：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 140

140
8.1.1.3.2.2 Display功能安全CRC
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 141

141
Yocto OS支持一些安全图标的校验功能，包括颜色非预期改变，形状非预期改变，位置非预期改变。实现原理
是利用了Display Pipeline上的chist功能模 块，chist模块可以计算出指定区域的Y-直方图，PQService会拿到
这个Y-直方图，然后利用CRC算法，计算出指定区域的CRC，客户可以拿到这个CRC值和CRC golden值去做
比较，判断图标非预期改变。
当前硬件支持两个chist模块，每个chist支持7 channel，也就是同时可以支持14个区域的安全校验。
sample code：yocto/src/graphics/pq/litepq/test/PQ_Test.cpp
8.1.1.3.2.3 Yocto Display Architecture
Yocto os里面Display对接了两个框架，如下
8.1.1.3.2.3.1 FBSurface
FBSurface是一个简单的显示框架， 一般用于显示animation，仪表图标等。FBSurface会提供一些类似alloc
buffer，显示参数设置，送显等API。FBSurface 依赖MTK DRM私有的ioctl接口用于显示数据。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 142

142
sample code：yocto/src/multimedia/libfbsurface/test/libfbsurface_multi.cpp
yocto/src/multimedia/libfbsurface/test/libfbsurface_ut.cpp
8.1.1.3.2.3.2 weston
开源的显示架构，底层对接MTK DRM。支持显示Cluster仪表，也可以用来显示VBA，仪表图标等
8.1.2 Configuration / Customization Guideline
8.1.2.1 Host Yocto配置
8.1.2.1.1 Display DTS配置
增加serdes请按照示例添加，比如ti983 / max96789。并根据linux component规则设置好endpoint以及remote-
endpoint，能把dsi encoder / dsi phy / dsi serdes / dsi panel 或者 dp encoder / dp phy / dp serdes / dp panel
串起来
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 143

143
8.1.2.1.2 DTS配置开关
dsi/dp encoder以及phy，dsi/dp serdes dts开关在如下路径，根据自己需求设置disabled或者okay
yocto/meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/dtsi/cust_mt8676_display_config_hyp.dtsi
8.1.2.1.3 Display interface归属os配置
yocto/meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/dtsi/cust_mt8676_display_config_hyp.dtsi
interface 归属
DSI0 增加host-os-use属性，表示interface分给yocto
DSI0_VRIT1 增加host-os-use属性，表示interface分给yocto
DSI1 增加host-os-use属性，表示interface分给yocto
DSI1_VRIT1 增加host-os-use属性，表示interface分给yocto
DP 增加host-os-use属性，表示interface分给yocto
DP_VIRT1 增加host-os-use属性，表示interface分给yocto
8.1.2.1.4 Display path配置
yocto/meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/dtsi/cust_mt8676_display_config_hyp.dtsi
设备节点 描述
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 144

144
dsi0
dsi1
dp_intf
host端connector设备节点
根据自己使用场景，打开或者关闭
virt_dsi0_1
virt_dsi1_1
virt_dp_1
开启superframe之后，第二屏的connector设备节点，必须要打开
根据自己使用场景，打开或着关闭
8.1.2.1.5 Display ovl配置（PVT会根据客户使用场景配置好，客户无需自己配置）
8.1.2.1.5.1 Drm Driver默认配置
mtk_drm_drv.c
interface ovl配置
DSI0 DDP_COMPONENT_OVL0_2L
DDP_COMPONENT_OVL1_2L
DDP_COMPONENT_OVLSYS_DLO_ASYNC3
DSI0_VRIT1 DDP_COMPONENT_OVL1_2L
DSI1 DDP_COMPONENT_OVL6_2L
DDP_COMPONENT_OVL7_2L
DDP_COMPONENT_OVLSYS_DLO_ASYNC10
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 145

145
DSI1_VRIT1 DDP_COMPONENT_OVL7_2L
DP DDP_COMPONENT_OVL2_2L
DDP_COMPONENT_OVL3_2L
DDP_COMPONENT_OVLSYS_DLO_ASYNC6
DP_VIRT1 DDP_COMPONENT_OVL3_2L
8.1.2.1.5.2 客户客制化配置
yocto/meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/auto8676p1_64_hyp.dts，在如下节点里配置
display interface的ovl信息。这个DTS 里面的OVL配置会覆盖上一节描述的代码默认配置
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 146

146
8.1.2.2 Guest Android配置
8.1.2.2.1 Display DTS配置
android/kernel/kernel_device_modules-
6.1/arch/arm64/boot/dts/mediatek/cust_mt8676_display_config_vm.dtsi
Android DTS里面dsi encoder / phy / serdes，dp encoder / phy / serdes都不需要配置，必要时还需要手动
disable掉已经打开的。需要配置的是以下虚 拟节点
设备节点 描述
virt_dsi0_0
virt_dsi1_0
virt_dp_0
根据自己使用场景，打开或者关闭
virt_dsi0_1
virt_dsi1_1
virt_dp_1
开启superframe之后，第二屏的connector设备节点，必须要打开
根据自己使用场景，打开或着关闭
8.1.2.2.2 Display ovl配置（PVT会根据客户使用场景配置好，客户无需自己配置）
8.1.2.2.2.1 Drm Driver默认配置
mtk_drm_drv.c
interface ovl配置
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 147

147
DSI0_VRIT0 DDP_COMPONENT_OVL0_2L
DDP_COMPONENT_OVL1_2L
DDP_COMPONENT_OVLSYS_DLO_ASYNC3
DSI0_VRIT1 DDP_COMPONENT_OVL1_2L
DSI1_VRIT0 DDP_COMPONENT_OVL6_2L
DDP_COMPONENT_OVL7_2L
DDP_COMPONENT_OVLSYS_DLO_ASYNC10
DSI1_VRIT1 DDP_COMPONENT_OVL7_2L
DP_VIRT0 DDP_COMPONENT_OVL2_2L
DDP_COMPONENT_OVL3_2L
DDP_COMPONENT_OVLSYS_DLO_ASYNC6
DP_VIRT1 DDP_COMPONENT_OVL3_2L
8.1.2.2.2.2 客户客制化配置
android/kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/auto8676p1_64_bsp_vm.dts，在如
下节点里配置display interface的 ovl信息。这个DTS里面的OVL配置会覆盖上一节描述的代码默认配置
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 148

148
8.1.2.3 OVL配置QA
1. ovl之间比较，比如ovl0和ovl1，zorder是否固定，软件可以调吗？
--> 软件不可调，OVL之间没有zorder的概念，图层的zorder依赖dts里面配置的顺序，比如crtc0顺序配置了
OVL4和OVL5，那就固定了ovl4图层在OVl5下 面。对于anroid和yocto应用，
weston和android hwc可以拿到某个crtc的图层资源数组，如果客户想显示的软件图层zorder比较低，就选择数
组index低的图层
2. ovl的2个layer之间比较，zorder是否固定，软件可以调吗？
-->zorder也是固定的，ovl-layer1比ovl-layer0的zorder高
3. android和yocto各使用一层layer的场景，比如android使用ovl0的其中一层layer，yocto使用ovl0的其中一层
layer。针对这种场景图层怎么配置，软 件里怎么做区分的？
-->这种就需要借助修改中的crtcx_layer_table, 可以规划当前ovl 的两个layer ，哪一个给android 使用，按一个
给yocto 使用
4. async和ovl绑定规则是什么样的？DDP_COMPONENT_OVLSYS_DLO_ASYNCx和
DDP_COMPONENT_OVLx_2L的关系
--> 这里的async 是dsiplay path 上串path的一个连接模块，OVL组合之后会选某个async连接后面path模块，
这是硬件path细节，当前没有可release给客 户的文档
5. 输入到ovl硬件图层的分辨率大小有限制吗？
--> 有，ovl layer 最大support的图层宽度为1920，如果图层宽度超过1920，就需要两个ovl layer，比如ovl0
layer0和ovl0 layer1
6. 修改CRTC的顺序
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 149

149
（1）&dispsys_config {} 顺序
（2）mtk_drm_drv.c crtc_create顺序
（3）arch\arm64\boot\dts\mediatek\mt6897.dts dsi/dp相关节点的定义先后顺序
（4）开superframe 的屏需要保持先后顺序
7. crtc的顺序可以是这样的吗？ android：dp0 dp1 dsi0 dsi1 yocto：dsi0 dsi1 dp0 dp1
--> 不行，android 端是虚拟的屏，需要和yocto 端的物理屏对应，yocto 端的物理顺序和android 端的虚拟顺
序要keep 一致
8.1.3 Debug Tips
8.1.3.1 显示PATH信息
DRM节点
（1）简单查看当前显示path是怎么样的，显示所有的connector以及crtc信息，以及每个connector的timing信息
yocto和android 路径一致：ls /sys/class/drm/card0/
weston debug
（1）查看weston display信息
source data/wayland_env_file
weston-debug -a && ctrl + C
查看输出前面output信息以及有哪些图层显示
8.1.3.2 display pattern（Yocto os）
Interface Encoder pattern
DSI0
打开：adb shell "echo gce_wr:1400d178,c61,ffffffff > /sys/kernel/debug/mtkfb"
关闭：adb shell "echo gce_wr:1400d178,0,ffffffff > /sys/kernel/debug/mtkfb"
DSI1
打开：adb shell "echo gce_wr:1420d178,c61,ffffffff > /sys/kernel/debug/mtkfb"
关闭：adb shell "echo gce_wr:1420d178,0,ffffffff > /sys/kernel/debug/mtkfb"
DP
打开：adb shell "echo gce_wr:1400bf00,41,ffffffff > /sys/kernel/debug/mtkfb"
关闭：adb shell "echo gce_wr:1400bf00,0,ffffffff > /sys/kernel/debug/mtkfb"
blending pattern
None
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 150

150
8.1.3.3 android和yocto 图层测试
modetest刷图
/usr/bin/modetest -M mediatek -D 0 -s 32@69:1920x1080@RG24 -P 46@69:1920x1080@RG24
/usr/bin/modetest -M mediatek -D 0 -s 38@104:1920x1080@RG24 -P 100@104:1920x1080@RG24
/usr/bin/modetest -M mediatek -D 0 -s 40@110:1920x720@RG24 -P 106@110:1920x720@RG24
am start android应用
可以dumpsys display 查看当前android os支持哪些display id
am start --display 0 -a android.settings.INPUT_METHOD_SETTINGS
am start --display 1 -a android.settings.INPUT_METHOD_SETTINGS
am start --display 2 -n com.android.deskclock/.DeskClock
am start --display 3 -a android.intent.action.VIEW -d http://www.baidu.com
gst-launch-1.0 weston刷图
1.找个match 屏幕大小的PNG图片，push 该PNG 图片到yocto 端 /data/
2.播放cmd: yocto 端 adb root -> adb shell 后 下cmd
source /data/wayland_env_file
a.DSI0 显示
gst-launch-1.0 filesrc location=/data/RGB.png ! pngparse ! pngdec ! imagefreeze ! videoconvert ! video/x-
raw,format=BGRA ! waylandsink render-rectangle='<0,0,1920,1080>'
b.DSI1 显示
gst-launch-1.0 filesrc location=/data/RGB.png ! pngparse ! pngdec ! imagefreeze ! videoconvert ! video/x-
raw,format=BGRA ! waylandsink render-rectangle='<1920,0,1920,1080>'
c.DP 显示
gst-launch-1.0 filesrc location=/data/RGB.png ! pngparse ! pngdec ! imagefreeze ! videoconvert ! video/x-
raw,format=BGRA ! waylandsink render-rectangle='<3840,0,1920,1080>'
8.1.3.4 Display pipeline dump（Yocto os / Android os）
adb shell "echo diagnose > /sys/kernel/debug/mtkfb && cat /sys/kernel/debug/mtkfb" > diagnose0810 .log
8.1.3.5 Android强制GPU合成（Android os）
开：adb shell service call SurfaceFlinger 1008 i32 1
关：adb shell service call SurfaceFlinger 1008 i32 0
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 151

151
8.1.3.6 Display模块clk动态调整（Yocto os）
拉到最大（分析闪屏花屏问题的时候使用）
adb shell "echo 0 0 > /sys/module/mtk_mmdvfs_debug/parameters/force_step"
8.1.3.7 PQ关闭
adb shell "echo helper:MTK_DRM_OPT_USE_PQ,0 > /sys/kernel/debug/mtkfb"
执行suspend / resume
8.1.3.8 Buffer DUMP
SurfaceFlinger BufferQueue dump（Android os）（有bug，Hypervisor系统暂时不支持）
hwc buffer dump（Android os）
MML/MDP buffer dump （Android os）
1.请在Android端敲echo 1 > sys/module/mtk_mml/parameters/mtk_mml_msg和echo 1 >
sys/module/mtk_mml/parameters/mml_log_rec，打开mml debug log。（复制到现象时应该会有大量带mml关
键字log输出）
2.在复制到问题时分别dump input 和 output
// dump input 1 frame
adb shell "echo 1 > /sys/module/mtk_mml/parameters/mml_frame_dump"
adb pull /sys/kernel/debug/mml/mml-frame-dump-in frame_dump_in.bin
// dump output 1 frame
adb shell "echo 2 > /sys/module/mtk_mml/parameters/mml_frame_dump"
adb pull /sys/kernel/debug/mml/mml-frame-dump-out frame_dump_out.bin
查看out.bin的时候，从kernel log搜索[mml]out关键字，里面有描述out.bin的参数信息
FBSurface dump(input && output)
FBSurface使用场景是bootanimation，fast display（rvc，avm）等
adb shell setprop vendor.fbsurface.dump.enable 1
dump出的图路径在：/sdcard/fb_dump/
PS：FBSurface当前dump数据是在刷图流程里，如果应用只刷了一帧， 一定要在应用起来之前执行adb shell
setprop vendor.fbsurface.dump.enable 1
8.1.3.9 Display log
hwc log（Android os）
adb shell setprop persist.vendor.debug.hwc.log V && adb shell setprop vendor.debug.hwc.skip_log 0
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 152

152
android display driver log
log通过cat /proc/kmsg或者debuggloger log目录查看
常用display mobile log
实时开关：
adb shell “echo mobile:on > /d/mtkfb”
adb shell "echo detail:on > /d/mtkfb"
开机log：
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c
bool g_mobile_log = 1
bool g_detail_log = 1
android fence log
log通过cat /proc/kmsg或者debuggloger log目录查看
实时开关：
adb shell “echo fence:on > /d/mtkfb”
开机log：
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c
bool g_fence_log = 1
irq log
log通过cat /d/mtkfb > /data/mtkfb.txt 查看IRQ相关log
实时开关：
adb shell “echo irq:on > /d/mtkfb"
开机log：
kernel/kernel_device_modules-6.1/drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c
bool g_irq_log = 1
yocto display driver log
常用display mobile log
实时开关：
adb shell “echo mobile:on > /sys/kernel/debug/mtkfb”
adb shell "echo detail:on > /sys/kernel/debug/mtkfb"
开机log：
drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c
bool g_mobile_log = 1
bool g_detail_log = 1
yocto fence log
实时开关：
adb shell “echo fence:on > /sys/kernel/debug/mtkfb”
开机log：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 153

153
drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c
bool g_fence_log = 1
yocto irq log
实时开关：
adb shell “echo irq:on > /sys/kernel/debug/mtkfb"
开机log：
drivers/gpu/drm/mediatek/mediatek_v2/mtk_debug.c
bool g_irq_log = 1
8.1.4 Troubleshooting
8.1.4.1 黑屏
常规debug顺序以及方法
1.查看背光是否开启
2.如果有bridge ic，查看bridge ic状态是否正常
3.bridge pattern是否正常，soc dp/dsi pattern是否正常
4.android os：vsyor / screencap截图是否正常，yocto os：weston 截图是否正常
如果都ok，要通过详细分析log来定位问题
8.1.4.2 花屏/闪屏
常规debug顺序以及方法
1.bridge ic pattern，dsi / dp pattern是否正常
2.vsyor / android screencap / weston screencap查看原始数据是否正常
3.force GPU 是否正常
4.查看log中是否有DISP_OVL / RDMA underflow / abnormal 异常日志
5.通过driver日志，查看显示参数是否配置错误
6.提升display clk以及dram，查看是否有改善
如果还有问题，想通过详细分析log来定位问题
8.1.4.3 卡顿/冻屏
常规debug顺序以及方法
1.查看android main log里面是否有fence timeout
2.查看driver log是否有underflow/abnormal 异常log
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 154

154
3.开启fence log，看对应fence是否release
4.抓取systrace看耗时位置
config.pbtx附件
adb root
adb push config.pbtx /data/ //将config push到开发板
adb shell
cat /data/config.pbtx | perfetto --txt -c - -o /data/misc/perfetto-traces/trace_xxx //开发板执行此命令,开始复
现问题，复现后ctrl +x 停止抓取trace
adb pull /data/misc/perfetto-traces/trace_xxx //将trace文件拉取到本地
8.2 Camera
8.2.1 camera虚拟化概念介绍
MT8676 camera虚拟化是camera跑在yocto端，android端访问camera通过vsocket方式交互。android端向yocto
端要数据，数据的处理都在yocto端。
8.2.1.1 基本架构介绍
（1）宿主机Yocto：直接访问相机硬件
（2）虚拟机Android：通过 VSOCKET 与宿主机通信
（3）中间层RPC（Remote Procedure Call，远程过程调用）：处理相机操作并通过 VSOCKET 传输数据。是
一种重要的分布式计算技术，允许程序调用另一个地址空间（通常是在网络上的另一台计算机）的子程序，就
像调用本地程序一样。
8.2.1.2 大致实现步骤
（1）Yocto端：
创建一个RpcService，直接与相机硬件交互，使用 VSOCKET 监听来自 Android 的连接
（2）Android端：
创建一个RpcSession，使用 VSOCKET 连接到Yocto服务并获取yocto端的camerahalserver服务
8.2.1.3 数据流
Android -> VSOCKET -> Yocto服务 -> 相机硬件
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 155

155
相机硬件 -> Yocto服务 -> VSOCKET -> Android
8.2.2 camera虚拟化框架介绍
（此图介绍详见7.14.1章节）
8.2.3 camera主要code位置
8.2.3.1 Yocto端
Camera 虚拟化是在 src\multimedia\mtkcam-mt8676\camera_turbo_rpc\service\service.cpp 中 setupRpcServic
e 接口通过 RpcServer 创建 vsock server，将 camerahalserver 服务设置为 root object。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 156

156
8.2.3.2 Android端
Camera 虚拟化的主要实现：vendor\mediatek\proprietary\hardware\mtkcam-turbo-android\mtkcam-turbo\entry
\hypervisor 中的 CameraProvider::initialize 接口通过 RpcSession 创建 vsock client，获取 yocto 端的 root obje
ct 即 camerahalserver 服务，从而访问 yocto 端的 camera。
8.2.4 配置/客制化指南
8.2.4.1 如何添加一个新的sensor
MT8676_Yocto_
Camera_Driver_User_Manual_V1.1.pdf
附件
如上文档是单yocto版本添加一个新的sensor的方法。
Hyper版本camera driver也是在yocto端，添加一个新sensor的方法与上面文档只有一点不同：文档中1.3.1.1和
1.3.1.2提到的config文件不同。
单yocto版本config files：
src\kernel\linux\v6.1_mt8676\co_device_module\arch\arm64\configs\auto8676p1_64_defconfig
hyper版本config files：meta\meta-mediatek-mt8676-hyp\recipes-
kernel\linux\files\auto8676p1_64_hyp_defconfig
8.2.4.2 如何配置某个camera在android端支持多开
android端camera受framework限制，如果想要camera支持多开，需要在yocto端按照需求对某个或某些真实的
cameraID虚拟出虚拟cameraID，这样让android的framework层可以多拿到虚拟的cameraID（实际对应底层开
的还是同一个sensor）。
8.2.4.2.1 修改文件列表
yocto\src\multimedia\mtkcam-mt8676\camera_turbo\custom\include\Customization.h
8.2.4.2.2 如何修改
修改示例：
// for customer to set which camera is needed to support multi-open for android client
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 157

157
// yocto client multi-open use shift bit in custLayer already
const std::unordered_map<std::string, int32_t> CUSTOMER_MULTI_OPEN_DEVICES_MAP =
{
//virtualId is real cameraId + 32, 64, 96, ...
//Due to the t/p limitation of pqdip HW, random operations in the upper layer may result in frame loss
{"SENSOR_DRVNAME_MAX96714_MIPI_YUV", 4},
}
sensor name名字需要与kd_imgsensor.h中定义的sensor name一致。
上述示例表示配置SENSOR_DRVNAME_MAX96714_MIPI_YUV支持四开，即其真实的cameraID在yocto端会
虚拟出三个虚拟的cameraID，虚拟ID分别是：真实cameraID的值+32，真实cameraID+64，真实cameraID+96。
8.2.4.2.3 注意事项
1、由于PQDIP的t/p有上限，8676的大约是960MPixels，由于有硬件限制，不需要多开需求的sensor不要对其
进行配置。如果同时打开太多cameraID或乱操作，可能会导致掉帧等问题。
2、如果只是yocto端想要多开，则不用做上述修改。yocto端可以使用同一个cameraID，然后根据不同的UserId
区分，实现多开（实际对应底层开的还是同一个sensor）。
8.2.4.3 yocto端上层如何取流（一）
基于 camerahal 封装一层接口——适配层，不同的操作系统可以通过调用适配层接口进行 camera 取流。
8.2.4.3.1 code位置
yocto\src\multimedia\mtkcam-mt8676\ipc_adapter\ipcClient
8.2.4.3.2 生成物
libipcclient.so
8.2.4.3.3 yocto端上层对接ipcclient取流参考示例
8.2.4.3.3.1 code位置
yocto\src\multimedia\mtkcam-mt8676\ipc_adapter\test
8.2.4.3.3.2 生成物
bin/ipcclienttest
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 158

158
8.2.4.3.3.3 测试方法
执行命令如下 ipcclienttest <stream> <dumpAll> <dumpFrameNum> <seconds> <cameraid>
测试示例 1：打开 camera 0 的一路流，取流 1s，之后关闭 camera 0。此场景执行命令 ipcclienttest 0 0 -1 1
0 即可，终端正常输出 test done: FPS = xxx，表示测试正常。
测试示例2：测试cameraid 0是否能正常取流且dump camera data查看数据是否正常
（1）创建/data/camera_dump路径；
（2）dump某一指定帧的数据，例如dump帧号为1的数据：执行ipcclienttest 0 0 1 5 0；
（3）dump所有帧数据：执行ipcclienttest 0 1 -1 5 0；
数据放置路径：/data/camera_dump
8.2.4.4 yocto端上层如何取流（二）
Yocto应用基本都是调用源生的gstream，MTK有提供mtkcamsrc插件。
8.2.4.4.1 code位置
src\multimedia\gst-mtkcamsrc
8.2.4.4.2 yocto端app对接gstream mtkcamsrc取流参考示例
8.2.4.4.2.1 code位置
src\multimedia\gst-mtkcamsrc\tests
8.2.4.4.2.2 测试方法
测试示例：执行如下命令，可在屏幕上显示出camid 32的数据
gst-launch-1.0 mtkcamsrc camid=32 ! video/x-
raw,format=YUY2,width=1920,height=1080,framerate=30/1 ! v4l2convert disable-passthrough=true output-io-
mode=dmabuf-import capture-io-mode=dmabuf ! video/x-
raw,format=BGRA, width=640,height=360 ! waylandsink sync=false render-rectangle="<0,400,-1,-1>"
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 159

159
8.2.5 Debug手段
8.2.5.1 log放开方法
8.2.5.1.1 Yocto端log放开方法
1. 如何设置camerahalserver的输出log等级
adb shell mtkcam_setprop persist.mtk.camera.log_level 4
adb shell mtkcam_setprop vendor.debug.camera.log 4
adb shell mtkcam_setprop vendor.debug.camera.rpclog 1
adb shell mtkcam_setprop vendor.debug.camera.ipcclientlog 1
adb shell systemctl restart camerahalserver
注意：重启平台后失效
2.获取native log
adb shell journalctl > journalctl.txt
3.获取kernel log
adb shell dmesg > dmesg.txt
adb shell cat /proc/kmsg > kmsg.txt
4. Yocto debuglogger抓取
adb pull /data/debuglogger/ ./
8.2.5.1.2 Android端log放开方法
1. 如何将kernel log打印在串口上
adb shell “echo 1 > \proc\sys\kernel\printk”（重启失效）
2. 打开libcameraservice中的ALOV和ALOGVV
frameworks/av/services/camera/libcameraservice/Android.bp 作如下修改：
cflags: [
"-Wall",
"-Wextra",
"-Werror",
"-Wno-ignored-qualifiers",
"-DLOG_NDEBUG=0", //增加这行
"-DLOG_NNDEBUG=0",
],
3. android camera log放开命令
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 160

160
（1）放开camerahal log
adb root
adb shell setprop persist.vendor.mtk.camera.log_level 4
adb reboot或者adb shell "pidof camerahalserver | xargs kill"
（2）放开黄标Camera apk的log
adb shell setprop vendor.debug.mtkcam.loglevel 4
（3）比较完整的放开camera各层级的log可以执行下面的命令
adb root
adb shell setprop persist.vendor.mtk.camera.log_level 3
adb shell setenforce 0
adb shell logcat -G 100M
adb shell logcat -c
adb shell setprop vendor.debug.camera.ulog.details 4294963200
adb shell setprop vendor.debug.camera.ulog.level 5
adb shell setprop vendor.debug.mtkcam.loglevel 4
adb shell setprop persist.vendor.mtk.camera.log_level 1
adb shell setprop persist.vendor.debug.camera.log 1
adb shell setprop debug.camera.log 4
adb shell setprop vendor.debug.camera.log 4
adb shell setprop vendor.debug.camera.metadata 4
adb shell setprop persist.log.tag I
adb shell setprop persist.mtk.camera.log_level 4
adb shell setprop vendor.debug.isp 4
adb shell -> echo 8 > /proc/sys/kernel/printk（重启会失效）
adb shell -> echo -n 'file *camera_isp* +tp' > /sys/kernel/debug/dynamic_debug/control（重启会失效）
adb shell "pidof camerahalserver | xargs kill"或者adb reboot（有些重启会失效，所以建议只用第一个）
4. android debuglogger抓取
adb pull /data/debuglogger/ ./
8.2.5.2 dump camera data
yocto端dump p1,p2图片方法：
1. 创建/data/vendor/camera_dump路径
2. 打开camera前执行如下命令：
mtkcam_setprop vendor.debug.camera.coredevice.wpe.dump 2
3. 停止dump：
mtkcam_setprop vendor.debug.camera.coredevice.wpe.dump 0
4. camera data放置路径：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 161

161
/data/vendor/camera_dump
5. 查看yuv数据工具：7yuv附件
7yuv安装包.tar
8.2.5.3 dump meta
android端dump meta的方法：
adb shell dumpsys media.camera > dump_meta.txt
说明：meta中包含所有android用户可见的camera devices。
8.2.5.4 search camera sensor
在yocto端执行：sentest_v4l2命令，即可看到目前search到的sensor信息，示例如下所示：
sh-3.2# sentest_v4l2
[main]sizeof long : 4
debug---[init_sensor_list] ioctl fail, line=300
[show_Sensors]sensorNum 8
[show_Sensors]name:SENSOR_DRVNAME_MAX96714_MIPI_YUV type:1 max_scen: 4
[show_Sensors]index:0, SensorDevIdx:1
...
8.2.5.5 测试验证yocto端camera是否正常的用例
调用 HIDL：yocto\src\multimedia\mtkcam-mt8676\camera_turbo_rpc\include\
8.2.5.5.1 code位置
yocto\src\multimedia\mtkcam-mt8676\camera_turbo_rpc\rpctest\
8.2.5.5.2 测试方法
执行命令如下
rpctest <stream> <dumpAll> <dumpFrameNum> <seconds> <cameraid>
测试示例1：打开camera 0的一路流，取流5s后，关闭camera 0。此场景执行命令rpctest 0 0 -1 5 0即可，终端
正常输出test done: FPS = xxx，表示测试正常。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 162

162
测试示例2：测试cameraid 0是否能正常取流且dump camera data查看数据是否正常
（1）创建/data/camera_dump路径；
（2）dump某一指定帧的数据，例如dump帧号为1的数据：执行rpctest 0 0 1 5 0；
（3）dump所有帧数据：执行rpctest 0 1 -1 5 0；
数据放置路径：/data/camera_dump
8.3 thermal
8.3.1 Architecture
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 163

163
8.3.2 Thermal sensor
8.3.3 Linux thermal framework
1.Linux thermal的整体框架如下图所示
Thermal Core：Thermal Core 作为 Thermal 框架的中枢，提供了一系列注册 Governor、注册 Thermal 类、
基于Device Tree注册Thermal Zone 的一系列 接口；
Thermal Driver/Thermal Sensor：为整个 Thermal 提供读取温度、设置 trip 温度等功能的接口；
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 164

164
Thermal Governor：Thermal Governor 决定了当温度达到某个阈值时，系统应该采取什么措施，常见的
Governor 有：Power Allocator、Step Wise、 User Space、FairShart等；
Thermal Cooling：Thermal Cooling作为温控系统的输出，包含了用于降温的实际硬件或软件方法。 主要通过
降频降压实现降功耗，这些设备可以是 CPU、 GPU等；
可以获取温度的设备抽象为thermal_zone_device， dts配置的thermal zone如下图所示：
Thermal Cooling目前dts没有配置，是通过conf文件来实现的
cooling device 维护一个 cooling 等级，即 state， 一般 state 越高即系统的冷却需求越高。
cooling device 根据不同等级的冷却需求进行冷却行为。cooling device 只根据 state 进行冷却操作，是实施者
，而 state 的计算由 thermal governor 完成。
1).step_wise governor
step_wise 算法在计算 target cooling state 的过程中，除了需要知道是否 throttle，还添加了一个 trend 作为
参考条。
trend 表示温升趋势，Linux Thermal Framework 定义了五种 trend type，见 enum thermal_trend，
即稳定(THERMAL_TREND_STABLE), 上升（THERMAL_TREND_RAISING）, 下降（THERMAL_TREND_D
ROPPING）, 最高温线（THERMAL_TREND_RAISE_FULL）,最低温线（THERMAL_TREND_DROP_FULL
）。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 165

165
step_wise governor 对于 cooling_state 选择的策略：
a. 当 throttle 发生且温升趋势为上升，使用更高一级的 cooling state;
b. 当 throttle 发生且温升趋势为下降，不改变 cooling state;
c. 当 throttle 解除且温升趋势为下降，不改变 cooling state;
d. 当 throttle 解除且温升趋势为上升，使用更低一级的 cooling state;
2).gov_power_allocator
原理：
对于IPA来讲，主要的输入为温度和各个Core的性能需求。温度可以来自SOC，也可以来自板温，IPA把采集温
度与目标控制温度的温差作为控制输入。
各个IP Core的性能需求是通过当前的负载来计算的，然后利用OPP(Operating Performance Point)及
EM(Energy Model)转换为Power Request作为IPA的输 入。
而IPA的输出是PowerGranted，然后再通过OPP及EM转换为性能指标（比如最大运行频率）。如此的循环往复
最终实现对硬件的温度控制。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 166

166
优点：IPA实现了多个IP core之间Power的动态分配，实现资源的优化配置。以小核、大核、GPU为控制对象来
讲，即使温度已经达到目标温度，
但是根据各个小核、大核、GPU的负载情况，最需要性能的处理器仍然有可能跑到最高频率，这种基于负载的
power动态分配策略对性能比较友好
switch_on_temp是IPA策略启动的触发温度
control_temp是IPA策略的目标温度阈值，即是降频的温度
8.3.4 配置文件
1.配置文件介绍
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 167

167
目前thermal的温控管理是放在yocto侧的，
配置策略在source code的路径是src/app/spm-base/thermal-conf/mt8676, 支持加密格式
Thermal 2.0 配置文件可采用文本编辑方式直接修改，不再需要Thermal config Tool。具体格式如下：
[policy_type]
# If permanent= Yes, this policy is still valid after reboot
permanent= Yes
[LTF-disable-throttling]
# If HW_protection= disabled, it will turn off
# SW shutdown protections and LVTS HW reboot protection
HW_protection= enabled
[mtk-skin-control]
sensor= ap_ntc #设定此策略绑定的sensor为ap_ntc(SOC附近NTC)
max_target_tj= 95000 #设定soc_max最大目标温度为95度
min_target_tj= 68000 #设定soc_max最小目标温度为68度
trip_tpcb= 53000 #设定Tpcb1，与soc目标温度下降的斜率有关系
target_tpcb= 56000 #设定目标板温（Tpcb2）为56度，即通过限制CPU/GPU频率核数，将板温控制在56度
cluster0_min_throttle_freq= 1725000 #设定CPU小核可调节的频率下限为1.725G。如不需要设定频率下限
，此行可删除。
cluster1_min_throttle_freq= 1624000 #设定CPU中核可调节的频率下限为1.624G。如不需要设定频率下限
，此行可删除。
cluster2_min_throttle_freq= 1745000 #设定CPU大核可调节的频率下限为1.745G。如不需要设定频率下限
，此行可删除。
gpu_min_throttle_freq= 715000 #设定GPU可调节的频率下限为715M。如不需要设定频率下限，此行
可删除。
[mtk-cpu-table-mapping] #如不需要使用，可以删除
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 168

168
mode= enabled #该策略使能设定。如不使用该策略，则将“enabled”修改为“disabled”或删除此配置单
元
sensor= ap_ntc #设定此策略绑定的sensor为ap_ntc(SOC附近NTC)
cluster= 0 #设定此策略控制的是CPU小核
threshold= [39000, 42000, 44000, 46000, 48000, 50000, 52000] #设定板温(ap_ntc)门限档位，这些档位与
freq中设定的频率档位一一对应
hysteresis= [2000, 2000, 2000, 2000, 2000, 2000, 2000] #设定各档位退出门限，2000代表2度，即板
温降低2度则退出该档CPU频率限制
freq= [2000000, 1800000, 1800000, 1800000, 1800000, 1725000, 1725000] #设定CPU的频率限制档位，
与threshold中设定的板温门限档位一一对应
#举例：当板温达到39度时，CPU频率限制为2G，当板温降低2度至37度时，解除该档位限制
[mtk-cpu-table-mapping] #如不需要使用，可以删除
mode= enabled #该策略使能设定。如不使用该策略，则将“enabled”修改为“disabled”或删除此配置单
元
sensor= ap_ntc #设定此策略绑定的sensor为ap_ntc(SOC附近NTC)
cluster= 1 #设定此策略控制的是CPU中核
threshold= [39000, 42000, 44000, 46000, 48000, 50000, 52000] #设定板温(ap_ntc)门限档位，这些档位与
freq中设定的频率档位一一对应
hysteresis= [2000, 2000, 2000, 2000, 2000, 2000, 2000] #设定各档位退出门限，2000代表2度，即板
温降低2度则退出该档CPU频率限制
freq= [2600000, 2354000, 2200000, 1985000, 1855000, 1624000, 1624000] #设定CPU的频率限制档位，
与threshold中设定的板温门限档位一一对应
#举例：当板温达到39度时，CPU频率限制为2.6G，当板温降低2度至37度时，解除该档位限制
[mtk-cpu-table-mapping] #如不需要使用，可以删除
mode= enabled #该策略使能设定。如不使用该策略，则将“enabled”修改为“disabled”或删除此配置单
元
sensor= ap_ntc #设定此策略绑定的sensor为ap_ntc(SOC附近NTC)
cluster= 2 #设定此策略控制的是CPU大核
threshold= [39000, 42000, 44000, 46000, 48000, 50000, 52000] #设定板温(ap_ntc)门限档位，这些档位与
freq中设定的频率档位一一对应
hysteresis= [2000, 2000, 2000, 2000, 2000, 2000, 2000] #设定各档位退出门限，2000代表2度，即板
温降低2度则退出该档CPU频率限制
freq= [2600000, 2141000, 1820000, 1745000, 1745000, 1745000, 1745000] #设定CPU的频率限制档位，
与threshold中设定的板温门限档位一一对应
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 169

169
#举例：当板温达到39度时，CPU频率限制为2.6G，当板温降低2度至37度时，解除该档位限制
[mtk-cpu-isolate] #如不需要使用，可以删除
mode= enabled #该策略使能设定。如不使用该策略，则将“enabled”修改为“disabled”或删除此配置单
元
sensor= ap_ntc #设定此策略绑定的sensor为ap_ntc(SOC附近NTC)
cpu= [cpu4, cpu5, cpu6, cpu7] #关闭cpu策略。cpu4代表关闭cpu4，其他依此类推
threshold= [52000, 52000, 48000, 48000] #设定板温(ap_ntc)门限档位，与cpu4~cpu7分别对应，即当
板温大于48度，关闭cpu6/cpu7,当板温大于52度，关闭cpu4/cpu5
hysteresis= [2000, 2000, 2000, 2000] #设定各档位退出门限，2000代表2度，即板温降低2度则退出对
应的关闭cpu策略
[mtk-gpu-table-mapping] #如不需要使用，可以删除
mode= enabled #该策略使能设定。如不使用该策略，则将“enabled”修改为“disabled”或删除此配置单
元
sensor= ap_ntc #设定此策略绑定的sensor为ap_ntc(SOC附近NTC)
threshold= [39000, 42000, 44000] #设定板温(ap_ntc)门限档位，与freq中GPU频率档位分别对应
hysteresis= [2000, 2000, 2000] #设定各档位退出门限，2000代表2度，即板温降低2度则退出该档GPU
频率限制
freq= [854000, 815000, 715000] #设定GPU的频率限制档位，与threshold中设定的板温门限档位一一
对应
[charger-cooler]
mode= enabled #该策略使能设定。如不使用该策略，则将“enabled”修改为“disabled”或删除此配置单
元
sensor= ap_ntc #设定此策略绑定的sensor为ap_ntc(SOC附近NTC)
threshold= [43000, 46000, 49000] #设定板温(ap_ntc)门限档位，与current中充电电流(进电池)档位分别对
应
hysteresis= [2000, 2000, 2000] #设定各档位退出门限，2000代表2度，即板温降低2度则退出该档充电
电流限制
current= [1800, 1000, 0] #设定充电电流限制档位，与threshold中设定的板温门限档位一一对应
[thermalhal-threshold]
type= SKIN
sensor= ap_ntc
level= [severe, critical, emergency, shutdown]
threshold= [50000, 56000, 58000, 80000]
#Google定义的thermal HAL，绑定板温（无法通过thermal config修改）。
#定义了severe, critical, emergency, shutdown四个事件，shutdown事件会Trigger Android shutdown，
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 170

170
emergency事件Trigger MTK camera app exit。
[wifi-cooler]
mode= enabled
sensor= ap_ntc #设定此策略绑定的sensor为ap_ntc(SOC附近NTC)
threshold= [55000, 60000, 65000] #设定不同的板温对应不同的wifi chip温度门限
hysteresis= [2000, 2000, 2000] #设定各档位退出门限，2000代表2度。
target_temp= [90000, 85000, 80000] #设定不同的wifi chip温度门限。
#根据不同的板温设定wifi chip的目标温度，通过wifi throttle来守住wifi chip的温度，按2T2R→ 1T2R→ 1T1R→
Duty 50%过程加严控制，2T2R代表2个TX天线和2个接收天线。
[backlight-cooler]
mode= enabled
sensor= ap_ntc #设定此策略绑定的sensor为ap_ntc(SOC附近NTC)
threshold= [43000, 46000, 49000, 53000] #设定板温(ap_ntc)门限档位，与reduce-brightness中不同的背光
档位分别对应
hysteresis= [2000, 2000, 2000, 2000] #设定各档位退出门限，2000代表2度，即ap_ntc温度降低2度则
退出该档背光控制
reduce-brightness= [10, 50, 80, 95] #限制背光亮度为Max亮度的百分比。95代表95%
[flashlight-cooler]
mode= enabled
sensor= ap_ntc #设定此策略绑定的sensor为ap_ntc(SOC附近NTC)
threshold= [43000, 46000, 49000, 53000] #设定板温(ap_ntc)门限档位，与limit-state中不同的电流档位分别
对应
hysteresis= [2000, 2000, 2000, 2000] #设定各档位退出门限，2000代表2度，即ap_ntc温度降低2度则
退出该档电流控制
limit-state= [1, 2, 3, 5] #限制电流档位
Limit-state Flashlight limit current (mA)
0 No limit
1 200
2 150
3 100
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 171

171
4 50
5 25
2.配置文件加解密
解密：
1）解压Thermal config tool后，将要解密的thermal配置文件复制到如下目录。
\Thermal_Config_Tool_exe_v1.1942.1\thermal_config_tool_V1.20.0_dev\decrypt
2）将thermal配置文件重命名为.mtc文件。
3）运行decrypt_all_config.bat，可在该目录下生成.txt文件，打开可查看thermal策略并做修改。
修改完成后，可直接使用.txt文件让修改策略生效。
加密：
1）文本编辑修改好.txt文件并将文件放在如下路径下：
\Thermal_Config_Tool_exe_v1.1942.1\thermal_config_tool_V1.20.0_dev
2）PC CMD界面下运行“encrypt.exe thermal.txt thermal.conf”生成thermal而配置文件，如下图所示
3.thermal_core
thermal_core是一个本地Linux应用程序，解析上面conf文件热管理策略，
CPU/GPU/APU会各自根据thermal_core设置下来的目录温度和检测到的温度做热管理调节。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 172

172
8.3.5 thermal debug
1.配置文件修改生效
2.读温度的接口
yocto侧读各个sensor温度接口如下：
3. thermal log的打开
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 173

173
8.4 virtio_input
8.4.1 虚拟化框架介绍
1、MTK的TP驱动，为了兼容多个不同的TP驱动IC，它会去遍历每一个编译并添加进 tpd_driver_list 中的IC驱
动，直到其中一个初始化成功。具体的TP驱动 文件， 一般由IC厂提供，然后移植到各平台的代码中，主要实
现了对IC的上电和初始化，注册输入设备，获取并上报数据等。
2、virtio_input是input虚拟化设备的接口定义，定义实际设备和虚拟设备event上传协议。完成实际设备到虚拟
设备事件上报，和虚拟设备到实际设备的回 调。
3、整体流程是，yocto端virtio读取event设备，并将input事件通过virtio_input发送到android端（写入虚拟event
设备）。然后android通过虚拟化的
event设备上传到上层应用。整个开发流程yocto跟单系统开发TP是一样的，需要添加新的TP IC。而virtio_input
一般是定义好， 一般不需要更改。1、MTK的 TP驱动，为了兼容多个不同的TP驱动IC，它会去遍历每一个编
译并添加进 tpd_driver_list 中的IC驱动，直到其中一个初始化成功。具体的TP驱动文件， 一 般由IC厂提供，
然后移植到各平台的代码中，主要实现了对IC的上电和初始化，注册输入设备，获取并上报数据等。
2、virtio_input是input虚拟化设备的接口定义，定义实际设备和虚拟设备event上传协议。完成实际设备到虚拟
设备事件上报，和虚拟设备到实际设备的回 调。
3、整体流程是，yocto端virtio读取event设备，并将input事件通过virtio_input发送到android端（写入虚拟event
设备）。然后android通过虚拟化的 event设备上传到上层应用。整个开发流程yocto跟单系统开发TP是一样的
，需要添加新的TP IC。而virtio_input一般是定义好， 一般不需要更改。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 174

174
8.4.2 Input数据传输
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 175

175
8.4.3 input快速开发
1、TP驱动的移植
（1）、首先，将触摸IC厂提供的驱动文件XXX放入路径：
yocto/src/kernel/linux/v6.1_mt8676/co_device_module/drivers/input/touchscreen/gt9xx
（2）、将TP驱动加入编译规则，以 gt9xx为例
obj-$(CONFIG_TOUCHSCREEN_GT9XX) += gt9xx/
上述添加方法使用宏控制的目的是为了方便选择编译触摸IC的驱动，需在Kconfig和项目的xxxdeconfig文件加
入宏 CONFIG_TOUCHSCREEN_GT9XX的配置
（3）、DTS设备树配置
yocto/src/kernel/linux/v6.1_mt8676/co_device_module/arch/arm64/boot/dts/mediatek/cust_mt8676_display_i
nterface.dtsi 配置TP设备信息
（4）、DWS文件配置
修改DWS文件的目的是为了配置系统的中断号、设备树I2C地址和对应的名称等。使用DrvGen.exe工具,配置
yocto/src/devtools/dct/dws/mt6897目录下的dws (如：auto8676p1_64_hyp.dws)文件。
（5）、将ko文件编译进系统
yocto/src/kernel/linux/v6.1_mt8676/co_device_module/kernel/kleaf/mgk_64_k61.bzl
"drivers/input/touchscreen/gt9xx/gt9xx_touch.ko",
yocto/meta/meta-mediatek-mt8676-hyp/recipes-
kernel/linux/ko_order_table/auto8676p1_64_hyp/ko_order_table.csv
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 176

176
gt9xx_touch.ko,/../kernel_device_modules-
6.1/drivers/input/touchscreen/gt9xx/gt9xx_touch.ko,vendor,Y,N,user/userdebug/eng
2 、Hypervisor 配置
启动nbl_vmm时会执行vendor/etc/hyper_android/query_input_event.sh脚本
会识别给定的input设备（DEVICE_ARRAY=("himax-touchscreen" "mtk-tpd" "goodix_ts" "goodix_ts")）并将
其写到vendor/etc/hyper_android/uos_alps_pv8676.lua中input栏。
上面设备分别对应给到android的
devName[0] = "mtk-tpd";
devName[1] = "mtk-tpd1";
devName[2] = "mtk-tpd2";
devName[3] = "mtk-tpd3";
Android shell下getevent -i可以查看input信息
最后android端需要绑定display_id和input设备，touch才能到对应屏幕上
mt8676/device/mediateksample/auto8676p1_64_bsp_vm/input-port-associations.xml最后android端需要绑定
display_id到对应屏幕上 mt8676/device/mediateksample/auto8676p1_64_bsp_vm/input-port-
associations.xml
<ports>
<port display="0" input="virtio3/input0" />
<port display="1" input="virtio4/input0" />
<port display="2" input="virtio5/input0" />
<port display="3" input="virtio6/input0" />
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 177

177
8.4.4 input debug
检查IC引脚电压，此时是否有中断电平输出。查看串口log或使用adb命令：getevent 检查系统是否有接收到
上报的数据。再则可以检测driver 是否初始化 成功 如i2c通路是否有问题。
在android端可以打开触摸显示点，直观地检测touch问题：
settings put system pointer_location 1
1、各模块虚拟化框架
2、各模块快速开发手册
3、各模块快速debug方法
8.5 Audio
8.5.1 Audio AFE HW
1.MTK AFE概述：
· AFE: Audio Front End HW 表示整个音频前端硬件
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 178

178
· AFE MEMIF(FE): PCM DMA,memory read/write 指Audio DMA数据传输通道，audio数据流通过MEM IF
在内存和Audio IF之间传递数据
· Audio interconnection： connection fabric for audio sub module 代表MEM IF与Audio IF之间的连接
矩阵
—— ex：DL MEMIF → Intercon → I2S Out
· DAI (BE): Digital Audio I/F, eTDM/I2S/DMIC，代表系统的数字音频接口，比如I2S，TDM
—— Enhanced TDM：can be configured to I2S or TDM
MISC
—— CM：channel merge，主要用于合并回显数据和Mic输入
—— GASRC：General audio sampling rate convertor，用于采样率转换
—— HW gain：digital gain process，用于增益调节
—— Bus：Soc Top fabric bus，互联总线，音频数据的通路
2.MTK Audio AFE hw：
描述如下图：
1.主要包括24ch的下行，表示MTK Audio AFE的播放通路，其中包括4组2ch I2S out，1组8ch TDM out，1组
8ch Internel DP-TX out和
2.上行通路18ch的上行，表示MTK Audio AFE的录音通道，其中包含5组2ch I2S out, 1组8ch TDM in
3.Audio AFE软件设计：
mt6897-afe-common.h中定义了整个audio子系统支持的audio FE(mem if)和BE(I2S、TDM)硬件ID
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 179

179
enum {
MT6897_MEMIF_DL0,
MT6897_MEMIF_DL1,
MT6897_MEMIF_NUM,
MT6897_DAI_ADDA = MT6897_MEMIF_NUM,
MT6897 DAI ADDA CH34,
_ _ _
MT6897 DAI NUM,
_ _
MT6897 GPIO EXT HP AMP,
_ _ _ _
};
mt6897-mt6368.c中mt6897_mt6368_dai_links定义了audio afe中CPU端到Codec端的链接组件
#define SND_SOC_DAILINK_DEF(name, def...) \
static struct snd_soc_dai_link_component name[] = { def }
#define SND_SOC_DAILINK_DEFS(name, cpu, codec, platform...) \
SND_SOC_DAILINK_DEF(name##_cpus, cpu); \
SND_SOC_DAILINK_DEF(name##_codecs, codec); \
SND_SOC_DAILINK_DEF(name##_platforms, platform)
#define DAILINK_COMP_ARRAY(param...) param
#define COMP_EMPTY() { }
#define COMP_CPU(_dai) { .dai_name = _dai, }
#define COMP_CODEC(_name, _dai) { .name = _name, .dai_name = _dai, }
#define COMP_PLATFORM(_name) { .name = _name }
#define COMP_AUX(_name) { .name = _name }
#define COMP_CODEC_CONF(_name) { .name = _name }
#define COMP_DUMMY() { .name = "snd-soc-dummy", .dai_name = "snd-soc-dummy-dai", }
SND_SOC_DAILINK_DEFS(playback0,
DAILINK COMP ARRAY(COMP_CPU("DL0")),
DAILINK_COMP_ARRAY(COMP_DUMMY()),
DAILINK_COMP_ARRAY(COMP_EMPTY()));
__
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 180

180
#define SND_SOC_DAILINK_REG1(name) SND_SOC_DAILINK_REG3(name##_cpus,
name##_codecs, name##_platforms)
#define SND_SOC_DAILINK_REG2(cpu, codec) SND_SOC_DAILINK_REG3(cpu, codec,
null_dailink_component)
#define SND_SOC_DAILINK_REG3(cpu, codec, platform) \
.cpus = cpu, \
.num_cpus = ARRAY_SIZE(cpu), \
.codecs = codec, \
.num_codecs = ARRAY_SIZE(codec), \
.platforms = platform, \
.num_platforms = ARRAY_SIZE(platform)
#define SND_SOC_DAILINK_REGx(_1, _2, _3, func, ...) func
#define SND_SOC_DAILINK_REG(...) \
SND_SOC_DAILINK_REGx(__VA_ARGS__, \
SND_SOC_DAILINK_REG3, \
SND_SOC_DAILINK_REG2, \
SND SOC DAILINK REG1)( VA_ARGS )
static struct snd_soc_dai_link mt6897_mt6368_dai_links[] = {
/* Front End DAI links */
{
.name = "Playback_1",
.stream_name = "Playback_1",
.trigger = {SND_SOC_DPCM_TRIGGER_PRE,
SND SOC DPCM TRIGGER PRE},
_ _ _ _
.dynamic = 1,
.dpcm_playback = 1,
SND_SOC_DAILINK_REG(playback0),
},
_ __
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 181

181
static struct snd_soc_dai_driver mt6897_memif_dai_driver[] = {
/* FE DAIs: memory intefaces to CPU */
{
.name = "DL0",
.id = MT6897_MEMIF_DL0,
.playback = {
.stream_name = "DL0",
.channels_min = 1,
.channels_max = 2,
.rates = MTK_PCM_RATES,
.formats = MTK_PCM_FORMATS,
},
.ops = &mt6897_memif_dai_ops,
},
mt6897-afe-pcm.c 为每个memif定义了专用的
static const struct mtk_base_memif_data memif_data[MT6897_MEMIF_NUM] = {
[MT6897_MEMIF_DL0] = {
.name = "DL0",
.id = MT6897_MEMIF_DL0,
.reg_ofs_base = AFE_DL0_BASE,
.reg_ofs_cur = AFE_DL0_CUR,
.reg_ofs_end = AFE_DL0_END,
.reg_ofs_base_msb = AFE_DL0_BASE_MSB,
.reg_ofs_cur_msb = AFE_DL0_CUR_MSB,
.reg_ofs_end_msb = AFE_DL0_END_MSB,
.fs_reg = AFE_DL0_CON0,
.fs_shift = DL0_SEL_FS_SFT,
.fs_maskbit = DL0_SEL_FS_MASK,
.mono_reg = AFE_DL0_CON0,
.mono_shift = DL0_MONO_SFT,
.enable_reg = AFE_DL0_CON0,
.enable_shift = DL0_ON_SFT,
.hd_reg = AFE_DL0_CON0,
.hd_mask = DL0_HD_MODE_MASK,
.hd_shift = DL0_HD_MODE_SFT,
.hd_align_reg = AFE_DL0_CON0,
.hd_align_mshift = DL0_HALIGN_SFT,
.agent_disable_reg = -1,
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 182

182
.agent_disable_shift = -1,
.msb_reg = -1,
.msb_shift = -1,
.pbuf_reg = AFE_DL0_CON0,
.pbuf_mask = DL0_PBUF_SIZE_MASK,
.pbuf_shift = DL0_PBUF_SIZE_SFT,
.minlen_reg = AFE_DL0_CON0,
.minlen_mask = DL0_MINLEN_MASK,
.minlen_shift = DL0_MINLEN_SFT,
},
static const int memif_irq_usage[MT6897_MEMIF_NUM] = {
/* TODO: verify each memif & irq */
[MT6897_MEMIF_DL0] = MT6897_IRQ_0,
unsigned int virtio_id_memif_index_mapping[MT6897_MEMIF_NUM] = {
MT6897 MEMIF DL0,
_ _
MT6897 MEMIF DL1,
_ _
MT6897 MEMIF DL2,
_ _
MT6897 MEMIF DL3,
_ _
MT6897 MEMIF DL4,
_ _
MT6897 MEMIF DL5,
_ _
MT6897 MEMIF DL6,
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 183

183
_ _
8.5.2 Audio HAL
Audio HAL软件架构图
AudioALSAStreamManager：管理下面的AudioALSAStreamIn和AudioALSAStreamOut；
AudioALSAStreamOut：管理着AudioALSAPlaybackXXXX；
AudioALSAStreamIn：管理着AudioALSACaptureXXXX；
AudioALSAPlaybackXXXX与AudioALSACaptureXXXX：这两个类里面的主要函数是open()，read()和write()，
主要是负责对PCM buf的读写到Linux 的ALSA里面；
AudioALSASpeechXXXX：是Aduio的一个算法处理；
AudioALSAHardwareResourceManager：这个类主要用于打开和关闭硬件设备，如MIC，喇叭等；
AudioALSAVolumeController：主要用于Audio系统的音量控制，音量补偿，音频参数也在此得到应用，（手
机平台）
HAL 的顶层控制接口是 AudioALSAHardware、AudioALSAStreamOut 和 AudioALSAStreamIn。这些类都
使用AudioALSAStreamManager 来控制音频模式、打开/关闭，输入/输出流。因此
AudioALSAStreamManager 将拥有所有音频环境信息，如模式 路由 音量等信息
Audio HAL数据流图
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 184

184
Audio HAL 播放架构图
AudioALSAStreamOut:执行写入/待机/路由操作的类
不实现细节本身，而是使用Playback Handler执行世界的打开/关闭/路由/写入操作
不同场景使用不同类型的Playback Handler
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 185

185
第一次写入时，StreamOut将调用StreamManager中的createPlaybackHandler()来获取Playback Handler的指
针
在standby()时，destoryPlaybackHandler()
不要在playback handler中设置硬件寄存器，使用tinyalsa库完成调用
pcm_open()/pcm_close() 控制AFE硬件路径和内存设置
mixer_open()/mixer_close() 获取各种类型的混音器控制以控制编解码器的驱动程序
pcm_write() 将PCM数据写入SRAM/DRAM
Audio HAL录音架构图
AudioALSAStreamIn:执行读取/待机/路由操作的类
不实现细节本身，而是使用Capture Handler执行世界的打开/关闭/路由/读取操作
不同场景使用不同类型的CaptureHandler
第一次读取时，StreamIn将调用StreamManager中的createCaptureHandler()来获取Capture Handler的指针
在standby()时，destoryPlaybackHandler()
不要在playback handler中设置硬件寄存器，使用tinyalsa库完成调用
pcm_open()/pcm_close() 控制AFE硬件路径和内存设置
mixer_open()/mixer_close() 获取各种类型的混音器控制以控制编解码器的驱动程序
pcm_read() 将PCM数据读取SRAM/DRAM
以bus播放为例展示播放流程
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 186

186
framework调用到了 AudioALSAStreamOut->open()函数后，由于我们定义了
MTK_AUDIO_AUTO_SUPPORT宏，所以new了AudioALSAPlaybackHandlerBusDsp类，传入了
stream_attribute_source参数，new成功后调用AudioALSAPlaybackHandlerBusDsp->open()函数，对音频流
进行处理，并开始与ADSP通
播放结束后，framework会调用 AudioALSAStreamOut->close()函数，释放
AudioALSAPlaybackHandlerBusDsp类，以上是adsp handler的生命周期。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 187

187
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 188

188
蓝牙hfp功能方案设计框图
公版的hfp功能实现，以hfp_enable为控制接口，该接口通过setparameter设置到audiohal层，而后通过
audiohfpcontro接口控制hfp通道的打开关闭等操作，并控制数据流操作，该操作中包含主要上行下行数据流
读取和写入线程，实现通话功能
蓝牙hfp数据流各节点的数据流
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 189

189
8.5.3 Audio Virtualization
Audio VAFE虚拟化框架图：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 190

190
Audio VAFE BE： nbl vmm中会创建VirtioSound作为AFE的虚拟化后端，在nbl_vm的main.c中有：
主要操作如下
1.解析vm_audio_cfg.pb.txt
ParseAudioCfg(absl::GetFlag(FLAGS_audio_cfg), vmid);
2.解析vm_audio_shared_irq.pb.txt
ParseAudioSharedIrqCfg(absl::GetFlag(FLAGS_audio_shared_irq_cfg));
3.创建虚拟化队列，打开声卡设备
虚拟化队列中主要交互的是pcm的基本操作，还有dapm控件的操作：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 191

191
enum {
/* jack control request types */
VIRTIO_SND R JACK_INFO = 1,
VIRTIO_SND_R_JACK_REMAP,
/* PCM control request types */
VIRTIO_SND R PCM_INFO = 0x0100,
VIRTIO SND R PCM SET PARAMS,
_ _ _ _ _
VIRTIO SND R PCM PREPARE,
_ _ _ _
VIRTIO SND R PCM RELEASE,
_ _ _ _
VIRTIO SND R PCM START,
_ _ _ _
VIRTIO_SND_R_PCM_STOP,
VIRTIO_SND_R_PCM_FREE,
/* channel map control request types */
VIRTIO_SND R CHMAP_INFO = 0x0200,
/* control element request types */
VIRTIO_SND R CTL_INFO = 0x0300,
VIRTIO SND R CTL ENUM ITEMS,
_ _ _ _ _
VIRTIO SND R CTL READ,
_ _ _ _
VIRTIO SND R CTL WRITE,
_ _ _ _
VIRTIO SND R CTL TLV READ,
_ _ _ _ _
VIRTIO SND R CTL TLV WRITE,
_ _ _ _ _
VIRTIO SND R CTL TLV COMMAND,
_ _ _ _ _
/* jack event types */
VIRTIO_SND_EVT_JACK_CONNECTED = 0x1000,
VIRTIO_SND_EVT_JACK_DISCONNECTED,
/* PCM event types */
VIRTIO_SND_EVT_PCM_PERIOD_ELAPSED = 0x1100,
VIRTIO_SND_EVT_PCM_XRUN,
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 192

192
/* control element event types */
VIRTIO_SND_EVT_CTL_NOTIFY = 0x1200,
/* common status codes */
VIRTIO_SND S OK = 0x8000,
VIRTIO_SND_S_BAD_MSG,
VIRTIO SND S NOT SUPP,
_ _ _ _
VIRTIO SND S IO ERR
_ _ _ _
};
amixer用于打开/dev/snd的声卡设备，操作sound驱动中所有的控件
4. 创建虚拟audio_streams_， std::vector<std::shared_ptr<VirtioAudioStream>> audio_streams_，用于接
收fe端对pcm的所有操作并打开真实的pcm设
备
5.查询alsa控件数量，创建控件
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 193

193
Audio VAFE BE： android的android\kernel\kernel_device_modules-6.1\sound\virtio中实现了audio的AFE作
为虚拟化的前端，主要是虚拟了出audio设 备，用于接收hal层audio相关的操作，
主要围绕创建virtio_snd来实现，大致步骤如下：
1.创建虚拟化队列virtqueue，队列与nbl_vmm后端对应
2.创建虚拟化声卡和虚拟化audio设备
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 194

194
查询操作主要是调用virtsnd_ctl_query_info把构建virtio_snd_msg结构体发到后端，根据查询到的信息创建对
应的设备：
VADSP虚拟化：
Audio VADSP框架图：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 195

195
MTK的ADSP是基于两个Xtensa DSP来实现，用于对音频信号进行处理，实现常见的3A算法（AGC、ANC、
AEC);包括常见的音效处理、消回声，降噪等,8676有两 个800Mhz的HIFI3核心，8678有两个800Mhz的HIFI5
核心
· Cadence HiFi ：Cadence Tensilica HiFi DSP 架构，用于音频解码
· Tensilica：嵌入式处理器公司，已被芯片 EDA 巨头 Cadence 收购
· Xtensa：DSP 处理器核心，也是该系列的型号名称，也是该处理器中指令集架构的名称
· HiFi：特指 32 位音频/语音处理数字信号处理 (DSP) 核，基于 Xtensa® 架构
在开机后，lk中会为ADSP保留一个专门的地址空间，用来存放一个基于FreeRTOS的镜像，也就是adsp.img
，adsp镜像主要就是用来负责使用HIFI Core来对 audio数据实现3A算法处理。
audio adsp代码位置：yocto\src\kernel\linux\v6.1_mt8676\co_device_module\drivers\misc\mediatek\adsp
audio ipi代码位置：yocto\src\kernel\linux\v6.1_mt8676\co_device_module\drivers\misc\mediatek\audio_ipi
ipi实现：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 196

196
vhost-adsp实现：
vhost-adsp.c中有实现vhost-adsp驱动程序：
vhost-adsp文件操作接口：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 197

197
vhost_adsp_open接口：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 198

198
nbl_vmm对vhost adsp操作实现：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 199

199
8.6 secure boot
8.6.1 sign flow
1. Android branch 使用case5 对mtk format image进行签名。
Image list: tee.img, dtbo.img。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 200

200
Sign script: vendor/mediatek/proprietary/scripts/sign-image_v2/hsm.py
2. Android branch 使用case6 对google image 进行签名，
image list: vbmeta, vbmeta_system, vbmeta_vendor, boot, vendor_boot, init_boot, super
3. Yocto branch 使用 case5 对android prebuilt image 进行签名
image list: spmfw.img sspm.img dpm.img gz.img pi_img.img mcupm.img audio_dsp.img modem.img
consys_gnss.img consys_bt.img connsys_wifi.img
sign script: meta/meta-mediatek-mt8676/scripts/sign-image_v2/hsm.py
4. Yocto branch 使用 case2 对 yocto format image 进行签名
image list: yocto-boot.img apusys.img gpueb.img scp.img vcp.img logo.img
sign script: meta/meta-mediatek/recipes-bsp/secure-boot/hsm-sign-env/hsmsigntool/hsm_sign_tool.py
5. Yocto branch 使用case3 对yocto system image 进行签名
image list: system.ext4
sign script: meta/meta-mediatek/recipes-bsp/secure-boot/hsm-sign-env/hsmsigntool/hsm_sign_tool.py
6. Yocto branch 使用 case1 对yocto bootloader 进行签名
image list: bl2.img
sign script: meta/meta-mediatek/recipes-bsp/lk/files/pbp/hsm.py
8.6.2 verify flow
1. Brom 通过efuse keyhash校验bl2.img
2. Bl2 通过 android root public key校验case5签名的android image
3. Bl2 通过 yocto image public key 校验 case2签名的yocto image
4. Yocto-boot 通过 yocto image public key校验case3签名的system.ext4
5. Bl2-an 通过 android root public key校验case5签名的android image
6. Bl2-an 通过avb public key校验 avb相关image
7. boot 通过avb public key校验super image
8.6.3 key配置
8.6.3.1 Bootloader keys
适用image：bl2.img
使用私钥：
<yocto branch>/meta/meta-mediatek/conf/machine/keys/sbc_key.pem
<yocto branch>/meta/meta-mediatek/conf/machine/keys/verified_key.pem
使用公钥：
<yocto branch>/meta/meta-mediatek/conf/machine/keys/sbc_key.pem 自动转换
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 201

201
公钥位置：bl2.img 尾部
8.6.3.2 yocto format的key
适用image：logo.img, vcp.img, apusys.img, yocto-boot.img
使用私钥：
<yocto branch>/meta/meta-mediatek/conf/machine/keys/verified_key.pem
使用公钥：
<yocto branch>/meta/meta-mediatek/conf/machine/keys/verified_key.pem自动转换
公钥位置：bl2.img 内部
8.6.3.3 yocto rootfs keys
适用image：system.ext4
使用私钥：
<yocto branch>/meta/meta-mediatek/conf/machine/keys/verified_key.pem
使用公钥：
<yocto branch>/meta/meta-mediatek/conf/machine/keys/verified_key.pem自动转换
公钥位置：yocto-boot.img
8.6.3.4 hypervisor keys
待谦川提供补充
8.6.3.5 mtk android format image keys
适用image： audio_dsp.img, consys_gnss.img, dpm.img, dtbo.img, gpueb.img, gz.img, mcupm.img,
modem.img, mvpu_algo.img, pi_img.img, scp.img, spmfw.img, sspm.img, tee.img
使用私钥：
<android branch>/ vendor/mediatek/proprietary/custom/{Platform}/security/cert_config
使用公钥：
<yocto code>/sbc/bsp/lk2/target/{Project_Name}/include/oemkey.h
<yocto code>/sbc/bsp/lk2/target/{Project_Name}/include/oemkey.h
公钥位置：
bl2.img 和bl2-an.img 内部
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 202

202
8.6.3.6 avb keys
适用image： vbmeta.img, vbmeta_system.img, vbmeta_vendor.img, super.img, boot.img,
vendor_boot.img, init_boot.img
使用私钥：
<android branch>/device/mediatek/system/common/key/rsa2048/oem_prvk.pem
<android branch>/device/mediatek/vendor/common/key/rsa2048/oem_prvk.pem
使用公钥：
<yocto branch>/src/bsp/lk2/target/auto8678p1_64_ufs/include/avbkey.h
公钥位置：
vbmeta.img, vbmeta_system.img, vbmeta_vendor.img内部
8.6.4 常用的配置
8.6.4.1 新增镜像添加校验flow
1.编译签名
新增镜像建议使用FIT镜像格式签名，签名步骤如下，
1).实现基类，可以参考下图bbclass文件，主要实现do_assemble_fitimage ，这是一个常见的任务，用于生成
FIT（Flattened Image Tree）镜像，并签名
2). 新增镜像的bb文件定义这个基类（即上一步的bbclass），然后就会调用do_assemble_fitimage这个函数
可以参考下图的bb文件
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 203

203
按照上面步骤，就可以对新镜像签名了
2.加载校验
在lk阶段加载镜像时候，添加校验流程，.verify这个钩子函数需要指定fit_conf_verify_sig，
如下图所示：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 204

204
8.6.4.2 disable secure boot
1.替换preloader镜像，替换成bl2_sboot_dis.img
2. 替换Android lk镜像，替换成bl2-an_sboot_dis.img
8.6.4.3 disable avb
android/device/mediatek/common/device.mk
BOARD_AVB_ENABLE:= false
8.6.4.4 remount system分区
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 205

205
需要替换bl2_sboot_dis.img，bl2-an_sboot_dis.img，boot-debug.img，vendor_boot-debug.img，bl2-
an_sboot_dis.img这几个镜像
8.7 optee
8.7.1 optee简介
OP-TEE 是一个开源的 Secure os。下图是 OP-TEE 官方提供的架构图。
OP-TEE 内核是运行在S.EL1 和 S.EL0 中的可信应用程序。可信应用程序通过 TEE 内部 AP1与 OP-
TEE 内核通信。TEE内部 API是由 GlobaiPlatfom 组织开发的标准 API。GlobalPlatform 致力于开发标准
API，这些 API不仅支持 OP-TEE,还支持许多不同的 TEE。采用 GP 标准意味着在其他支持 GP 接口的
TEE 应用可以方便地移植到 OP-TEE 上，反之亦然，为 OP-TEE 设计的 TEE 应用也可以方便地移植到其
他支持 GP 接口的 TEE 上。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 206

206
在非安全状态下，内核空间中有一个 OP-TEE 驱动程序。它负责处理与 OP-TEE 内核的低级别通信。
在非安全用户空间(EL0)中，有一个用户空间库 (libopenteec.so)实现了 GlobalPlatfom API。TEE Cient API是
应用程序用来访问 TA(可信应用程序)的接口。
OP-TEE还包括一个称为 tee-supplicant 的组件。tee-supplicant 处理 OP-TEE 需要返回到 REE world
处理的事务，比如从文件系统中加载 UTA，再比如 TEE 安全存储功能需要把加密后的数据保存在 Flash 或
者 RPMB 中，但 TEE 本身无法读写 fash 或 RPMB，需要切回 REE，通过 tee-supplicant 完成读写。
8.7.2 optee应用开发
在Yocto域和Android域都支持OP-TEE，且Yocto域和Android域所需的API都是一样的。这意味着 yocto 域和
Android域的CA/TA代码可以完全一样。
如果您的程序需要运行在Yocto域，需要将CA和TA的执行文件打包进Yocto域的文件系统。Android域同理，若
需要运行于Android域，也需要将执行文件打包进Android域的文件系统。
8.7.2.1 CA文件
CA 部分的开发主要是包括如何初始化上下文，如何打开/关闭会话，以及如何使用不同的参数类型进出 TA。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 207

207
8.7.2.2 TA文件
TA 部分实现了基于不同的命令标识来执行 CA 请求的各种操作，TA 的开发者要定义自己的 UUID，在 CA
调用TEEC_0penSession 时传入。同时该 demo 也在 user_ta header_defines.h中将TA定义为单实例，即
TA的二进制在 OP-TEE 内存中只会存一份，不会多次加载。TA_STACK_SIZE 和 TA_DATA_SIZE 则需要
根据各 TA 的实现自行调整大小。
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 208

208
8.8 OTA
8.8.1 OTA简介
1、Hypervisor OTA Update架构
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 209

209
图3-1描述了Hperisar （L+L+A）整体升级的整体架构，从图中能获取到如下信息：
1 Hypervisor （L+L+A）升级支持两种触发方式：本地升级和网络升级，联发科技只支持本地升级，网络升级
需要客户自行实现，本地升级是指升级包存放在本地环境内，利用升级脚本去触发升级；网络升级是指升级包
存放到远程服务器内，升级时需要OTAAPP通过无线网络远程下载和安装更新包
2 Hypervisor OTA升级全部在Yocto OS （host 0S)上完成，全程不需要Android OS （uest 0S)参与
3.以本地升级为例，Hypervisor OTA升级的大致流程如下
1)将升级包存放到本地PC环境内
2)执行OTA update script调用update_engine_sidedad触发升级
3)对升级包进行完整性与准确性校验
4)将升级包内的升级数据分别更新到对应分区内
5)对已经更新到分区内的数据进行校验，确保数据的准确性
6)更新系统启动控制参数，即Bootctl信息，确保系统下一次启动加载新的slot分区数据
7)切换boot region,确保系统的下一次启动时加载新的preloader分区数据
8)重启设备
2、Hypervisor build otapackage架构
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 210

210
图3-2描述了Hypervisor （L+L+A）OTA编译升级包的架构，从图中能获取到如下信息：
1.Hypervisor （L+L+A）整体升级只需要编译一个OTA升级包
2.Hypervisor （L+L+A）编译升级包必须在Hypervisor Androld的编译环境下进行
3.Hypervisor编译升级包的大致流程如下：
-编译Hypervisor yocto_target_files.zip
-编译Hypervisor uos_tbox_target_files.zip
-编译Hypervisor androd target_fles.zip
-将yocto_targetfiles.zip、uos_tbox_targetfiles.zip和 targetfles.zip合并成最终的hypervisor_target_files.zip
-利用hypervisor_target_files.zip在Android编译环境下编译生成全量升级包和差分升级包
8.8.2 如何编译Hypervisor(L+L+A) OTA升级包
1、编译hypervisor_target_files.zip
a.Build yocto_target_files.zip
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 211

211
Yocto的target_files.zip由Hypervisor_make_yocto_targetfiles.py编译产生，脚本位于meta/meta-mediatek-
mt8676-hyp/recipes-devtools/ota-tools/files。
Hypervisor Yocto编译完成后，在Yocto的编译环境下执行如下指令：
python3 Hypervisor_make_yocto_targetfiles.py <参数1><参数2>
批注：
·Hypervisor_make yocto_targetfiles.py:编译yocto tagetfiles.zip的脚本
·<参数1>:Yocto targetfiles.zip的输出路径
·<参数2>:Project scatter.txt文件
在Yocto OS编译阶段，系统会自动执行该脚本进行打包，最终的yocto_target_files.zip位于:
build-sos/tmp/deploy/images/<project_name>/yocto_target_files.zip
b.Build uos_tbox_target_files.zip
T-box OS (Guest os)的target_files.zip由Hypervisor_make_uos_tbox_targetfiles.py编译产生，脚本位于
meta/meta-mediatek-mt8676-hyp/recipes-devtools/uos-tbox-ota-tools/files。
Hypervisor Yocto编译完成后，在Yocto的编译环境下执行如下指令：
python3 Hypervisor_make_uos_tbox_targetfiles.py <参数1><参数2>
批注：
·Hypervisor_make_uos_tbox_targetfiles.py:编译Tbox tagetfiles.zip的脚本
·<参数1>:Tbox targetfiles.zip的输出路径
·<参数2>:Project scatter.txt文件
在T-box OS编译阶段，系统会自动执行该脚本进行打包，最终的uos_tbox_target_files.zip位于:
build-tbox/tmp/deploy/images/<project_name>/uos_tbox_target_files.zip
c.Build Android target_files.zip
Android的target_files.zip默认在build阶段完成，无需手动编译，其位于
out/target/product/<projectname>/merged/目录下，名称为target_files.zip.
示例：out/target/product/auto8676p1_64_bsp_vm/merged/target_files.zip
d.Build Hypervisor targetfiles.zip
Hypervisor_target_files.zip需要使用Hypervisor_3OS_merge_targetfiles.py脚本对yocto_target_files.zip、
uos_tbox_target_files.zip和targetfiles.zip 进行整合产生，脚本位于device/mediateksample/<project name>。
在获取到yocto_target_files.zip、uos_tbox_target_files.zip和targetfiles.zip后，在Android的编译环境下执行如
下指令：
python3 Hypervisor_3OS_merge_targetfiles.py <参数1> <参数2> <参数3>
批注：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 212

212
·Hypervisor_3OS_mrege_targetfiles.py:编译hypervior targetfiles.zip的脚本
·<参数1>:yocto_target_files.zip的路径
·<参数1>:uos_tbox_target_files.zip的路径
·<参数2>:targetfiles.zip的路径
输出文件：
在当前目录下会产生名称为hypervisor_target_files.zip的文件，这就是Hypervisor的targetfiles.zip包
示例：
python3 device/mediateksample/auto8676p1_64_bsp_vm/Hypervisor_3OS_merge_targetfiles.py
build-sos/tmp/deploy/images/auto8676p1_64_hyp/yocto_target_files.zip
build-tbox/tmp/deploy/images/auto8676p1_64_uos_tbox/uos_tbox_target_files.zip
out/target/product/auto8676p1_64_bsp_vm/merged/target_files.zip
2、编译全包
在参考上面编译hypervisor_target_files.zip小节编译得到hypervisor_target_files.zip后，就可以在Hypervisor
Android的编译环境下编译Hypervisor的全量升级包。
编译指令：
./out_sys/host/linuxe-x86/bin/ota_from_target_files -v --block -p out_sys/host/limux-x86 -k
build/make/target/product/security/testkey --skip_postinstall hypervisor_target_files.zip otapackage_full.zip
批注：
·ota_from_target_files:升级包编译脚本
·build/make/taget/praduct/security_testkey:对升级包进行签名的key路径，联发科技默认使用Google提供的
testkey,贵司可指定其它的key路径，使用-k参数指定，如何更换签名key,请参考：1.6如何修改升级包的签名
·hypervisor_target_files.zip:Hpervisor的targetfiles.zip
· otapachage_full.zip:最终产生的Hypervisor全量升级包，包名可随意指定
· 请务必确保在Hypervisor Android的build环境下编译升级包，并确保编译全包前有执行source & lunch,否则
将导致全包编译失败
3、编译差分包
前捉条件：
编译差分包需要预先准备两份hypervisor_target_files.zip。一份是基底版本(source版本)的
hypervisor_target_files.zip,此处命名为source_hypervisor_target_files.zip;一份是目标版本(target版本)的
hypervisor_target_files.zip,此处命名为target_hypervisor_target_files.zip。
批注：请务必确保平台上烧录的基底版本load和基底版本的target_files.zip是同一次编译得到的，否则将导致
OTA差分升级失败。
编译指令：
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 213

213
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86-
kbuild/make/target/product/security/testkey --skip_postinstall -i source_hypervisor_target_files.zip
target_hypervisor_target_files.zip otapackage_delta.zip
批注：
· ota_from_target_files:升级包编译脚本
· build/make/target/product/security/testkey:对升级包进行签名的key路径，联发科技默认使用Google提供的
testkey,贵司可指定其它的key路径，使用-k参数指定。
· source_hypervisor_target_files.zip: source版本的hypervisor_target_files.zip
· target_hypervisor_target_fles.zip: target版本的hypervisor_target_files.zip
·otapackage_delta.zip:最终产生的Hypervisor差分升级包，包名可随意指定
· 请务必确保在Hypervisor Android的build环境下编译升级包，并确保编译全包前有执行source &lunch,否则
将导致差分包编译失败
8.8.3 如何进行Hypervisor OTA升级
1、全包升级(normal mode)
测试环境
（1）ThePC has Python3 environment
（2）Hash base load in DUT
（3）Get OTA package
测试步骤
（1）Device connection yocto adb environment
（2）Execute the upgrade script:
python3 hypervisor_update.py --file otapackage_delta.zip > update.txt 2&1
-hypervisor_update.py:Update script
-otapackage_delta.zip:OTA package,unlimited package name
- > update.txt 2>&1:Store the upgrade log in update.txt in the current directory
预期结果
（1）Update should be completed,and update.txt prints the following
log:[INFO:update_attempter_android.cc(600)]Update successfully applied,walting to reboot.
（2）The first restart after the upgrade should successfuly enter the HomeScreen
（3）Check whether setting-version has been updated
Note:lf the test upgrade fais,please provide the update log and uart log in CR
2、差分升级(normal mode)
测试环境
（1）The PC has Python3 environment
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

## PDF物理页 214

214
（2）flash base load in DUT,must be consistent with the base version provided to the OTA owner
（3）Get OTA package from OTA owner
测试步骤
（1）Device conmection yocto adb environment
（2）Execute the upgrade script:
python3 hyperisor_update.py --file otapackage_delta.zip > update.tx t2>&1
-hypervisor_update.py Update script
-otapackage_delta.zip:OTA package,unlmited package name
- >update.txt 2>81:Store the upgrade log in update.txt in the current directory
预期结果
（1）Update should be completed,and update.txt prints the following
log:[INFO:update_attempter_android.cc(600)]Update successfully applied,walting to reboot.
（2）The first restart after the upgrade should successfuly enter the HomeScreen
（3）Check whether setting-version has been updated
Note:lf the test upgrade fais,please provide the update log and uart log in CR
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用
仅供PVT内部使用

