# SRC0207 MT8676_SCP_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Android/English Version/MT8676_SCP_User_Manual_V1.0.pdf

SHA-256：add7ebe4914ce4fb1987b29163d46a3c19aa5cb33180116067dadc3819122c7f

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0207.html)

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
Version History 
Version Date Author Description 
1.0 2024-08-12 Huayu Zong Official release 
 
  
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
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 4 
List of Tables ······································································································································································ 5 
1 SCP Overview ···························································································································································· 6 
1.1 Hardware Architecture ············································································································································· 6 
1.2 Software Architecture ·············································································································································· 8 
1.3 Summary ·································································································································································· 9 
2 Source Tree ······························································································································································ 10 
2.1 Little Kernel Bootloader ········································································································································· 10 
2.2 Linux Kernel Driver ················································································································································· 10 
2.3 FreeRTOS Tree ························································································································································ 10 
3 Build System ···························································································································································· 11 
3.1 Configuration Files ················································································································································· 11 
 Little Kernel Bootloader ······························································································································ 11 
 Linux Kernel ················································································································································· 11 
 FreeRTOS ····················································································································································· 11 
3.2 Build Commands ···················································································································································· 12 
 Standalone ·················································································································································· 12 
 With AOSP Hierarchy ·································································································································· 12 
3.3 Image Layout ·························································································································································· 12 
4 Boot Sequence ························································································································································· 13 
5 Inter Processor Interrupt (IPI) ·································································································································· 14 
5.1 Usage on the SCP Side ············································································································································ 15 
5.2 Usage on the Kernel Side ······································································································································· 22 
6 DRAM Access Procedure ·········································································································································· 25 
6.1 Reserving Memory in Linux Kernel ························································································································· 26 
 Register an User in Shared Memory ··········································································································· 26 
 Extend Shared Memory Size ······················································································································· 27 
6.2 Get Reserved Memory by ID ·································································································································· 28 
6.3 Get Reserved DRAM Region on SCP Side ··············································································································· 28 
6.4 Remap DRAM Address from AP View to SCP View································································································· 29 
6.5 Request System Bus and DRAM ····························································································································· 29 
7 Drivers Guide ··························································································································································· 31 
7.1 Driver Initiation ······················································································································································ 31 
7.2 Add a New Driver ··················································································································································· 31 
7.3 Interrupt ································································································································································· 32 
 IRQ Registration ·········································································································································· 32 
 Enable IRQ ··················································································································································· 33 
 Disable IRQ ·················································································································································· 33 
 Wakeup Source Registration ······················································································································· 34 
7.4 Locks ······································································································································································· 35 
7.5 DMA ······································································································································································· 36 
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
7.6 Hardware Semaphore ············································································································································ 37 
7.7 GPIO & EINT ··························································································································································· 38 
 GPIO Usage ················································································································································· 39 
 EINT Usage ·················································································································································· 40 
8 Debug Methods ······················································································································································· 41 
8.1 PRINTF_* Usage ····················································································································································· 41 
8.2 Mobile Log ······························································································································································ 41 
8.3 UART ······································································································································································· 42 
8.4 ADB Logcat ····························································································································································· 42 
8.5 Exception Log Analysis ··········································································································································· 44 
 Trace Buffer ················································································································································· 46 
8.6 Coredump······························································································································································· 47 
 LLDB Basic Commands ································································································································ 49 
8.7 Performance Evaluation and Flight Record ············································································································ 52 
 Performance Budget ··································································································································· 52 
 Flight Record ··············································································································································· 54 
9 Address Sanitizer ····················································································································································· 60 
 ASAN Usage ················································································································································· 60 
 How to Move Code to DRAM ······················································································································ 62 
10 Appendix ································································································································································· 64 
10.1 Frequently Asked Questions/Troubleshooting ······································································································· 64 
 Malloc Failure ·············································································································································· 64 
 Unaligned Access ········································································································································ 65 
10.2 Code Size Limitation ··············································································································································· 66 
 Code Size Tool Usage ··································································································································· 66 
10.3 Scp_Region_Info Structure ····································································································································· 68 
10.4 SCP Recovery ·························································································································································· 69 
 Recovery Behavior ······································································································································ 69 
 Recovery Notify Flow ·································································································································· 69 
11 Q&A List from Users ················································································································································ 71 
11.1 How to Enlarge DRAM Region Code ······················································································································· 71 
Exhibit 1 Terms and Conditions ········································································································································ 72 
 
List of Figures 
Figure 1-1. MTK 23P SCP architecture ········································································································································ 7 
Figure 1-2. MTK MT6897 SCP software architecture ················································································································· 8 
Figure 4-1. SCP boot up flow overview ···································································································································· 13 
Figure 5-1. Tinysys common IPI architecture ··························································································································· 14 
Figure 8-1. MTKLogger ····························································································································································· 41 
Figure 8-2. UART setting ··························································································································································· 42 
Figure 8-3. Disable SCP Mobile log ··········································································································································· 43 
Figure 8-4. ADB logcat output ·················································································································································· 43 
Figure 8-5. Performance Budget log example ·························································································································· 53 
Figure 8-6. Flight record console mode example ····················································································································· 55 
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
Figure 8-7. Button instruction ·················································································································································· 56 
Figure 8-8. Flight record GUI mode interface ··························································································································· 57 
Figure 8-9. Detailed information ·············································································································································· 57 
Figure 8-10. Task wake up event ·············································································································································· 58 
Figure 8-11. Example of Queue event ······································································································································ 58 
Figure 8-12. Detailed information of queue event ··················································································································· 58 
Figure 8-13. Example of SW timer ············································································································································ 58 
Figure 8-13. Example of critical section ··································································································································· 59 
Figure 8-14. Example of ISR ······················································································································································ 59 
Figure 8-15. Example of OS tick················································································································································ 59 
Figure 9-1. SCP recovery behavior ··········································································································································· 69 
 
List of Tables 
Table 1-1. Hardware specification ·············································································································································· 6 
Table 1-2. Architecture specification ·········································································································································· 9 
Table 6-1. The standard DRAM access flow ····························································································································· 25 
Table 6-2. The default remapping rule table ···························································································································· 29 
Table 7-1. The EINT and GPIO mapping ball name ··················································································································· 38 
Table 7-2. The GPIO control register table ······························································································································· 39 
Table 8-1. PRINTF use scenario ················································································································································ 41 
Table 8-2. UART pin name ························································································································································ 42 
Table 8-3. Compiler options and definitions ···························································································································· 52 
Table 8-4. Compiler options ····················································································································································· 54 
Table 8-5. Definitions of Flight Record ····································································································································· 54 
Table 9-1. Compiler options and definitions ···························································································································· 60 
Table 9-2. Exception type ························································································································································· 60 
 
 
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
1 SCP Overview 
System Companion Processor (SCP) is a sub-system designed to perform always-on tasks even when the system is in low 
power state. 
1.1 Hardware Architecture 
SCP consists of dedicate processor(s), SRAM, DMA, and peripherals, e.g. ,I2C, GPIO. Since MT6853/6885, an internal DSP 
and a new architecture has been introduced, enabling always-on applications to run at lower power and achieve better 
performance. 
• Processor: Embedded MDSP RV55NN x 1 and 2 hardware threads, each core with RISC-V architecture 
– Single precise floating point 
– Compressed instruction  
– DSP ISA for voice acceleration 
– Inside NN engine for vector instruction 
– Individual I cache 32K, D cache 32K for each core 
– OPPs from 266 to 800MHz 
• Memory: 2MB TCM 
• DMA throughput: 
– Data transfer from TCM to DRAM: 63.8 MB/s 
– Data transfer from DRAM to TCM: 39.9 MB/s 
• Peripherals:  
– I2C x 1, I3C x 6 
– SPI x 4 
– UART x 2 
• Details 
Table 1-1. Hardware specification 
  MT6897 
Core RV55NN x 1 (2 HW threads per core) 
Cache 
L1$ I$/ D$: 32KB/32KB 
L2$ 256KB  
TCM 
L1TCM NA 
L2TCM 2MB 
Peripherals • I2C x 1 
• I3C x 6 
• SPI x 4 
• UART x 2 
DMA 8 channels (0&1 reserved for i2c) 
VoW I/F 3-mic 
Operating Frequency 800M Hz@Vscp 0.75V 
Performance 
(CoreMark@Vmin)  TBD 
Power Efficiency  
(CoreMark/mW) TBD 
 
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
 
Figure 1-1. MTK 23P SCP architecture 
  
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
1.2 Software Architecture 
SCP SW is based on AWS FreeRTOS v10.1.010.1.0.1 which is a real time Kernel in MIT v2 license, supporting multi-task, 
mutex, semaphore and software timer.  
The SW package also includes additional middleware such as audio and sensor hub which will not be detailed in this 
document. 
 
SCP communicates with Linux Kernel via IPI (Inter Processor Interrupt) based on OpenAMP rpmsg/remoterproc 
framework. Similarly  mechanisms are provided to enable co-work between AP and SCP: 
• IPI – Chapter 0 
• HW semaphore – Chapter 0 
• Logger – Chapter 8.2 
• Recovery – Chapter 0 
 
 
Figure 1-2. MTK MT6897 SCP software architecture 
 
  
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
1.3 Summary 
Table 1-2. Architecture specification 
Item Value 
Platform MT6897 
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

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 SCP 
User Manual 
Confidential B 
2 Source Tree 
SCP source tree includes bootloader (e.g., LK), Linux Kernel and FreeRTOS, Listed as below: 
2.1 Little Kernel Bootloader 
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/commonError! Bookmark not 
defined./scp 
2.2 Linux Kernel Driver 
• SCP driver path 
kernel/kernel_device_modules-6.1/drivers/misc/mediatek/scp 
• SCP  DTS path 
kernel/kernel_device_modules-6.1/arch/arm64/boot/dts/mediatek/mt6897.dts 
2.3 FreeRTOS Tree 
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

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 SCP 
User Manual 
Confidential B 
3 Build System 
Before programming, developers might want to know how to compile with basic SCP configuration. This chapter will show 
where/how configurations are arranged, and how to produce SCP image by commands. 
3.1 Configuration Files 
 Little Kernel Bootloader 
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/meidatek/mt6897/rules.mk 
• MODULES_DEP += platform/$(PLATFORM)/common/scp/RV 
 Linux Kernel 
Kernel/kernel_device_modules-6.1/arch/arm64/configs/mgk_64_k61_defconfig 
• Enable/disable SCP driver: CONFIG_MTK_TINYSYS_SCP_SUPPORT 
• Features switch, such as Voice Wakeup and Sensor Hub  
 FreeRTOS 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/platform.mk 
• Default configurations of the platform 
• Extra CFLAGS 
• Extra LDFLAGS 
• Driver/middleware C objects and include path 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/project.mk 
• Project-specific configuration 
• Customize project by overriding options in platform.mk 
  
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
3.2 Build Commands 
There are several ways to build SCP images. Two of them are listed in ALPS SW packages. 
 
 Standalone 
This method can build SCP firmware quickly, especially useful during development.   
• The output path:  ./tinysys_out 
• SYNOPSIS: PROJECT=XXX TARGET_BOARD_PLATFORM=XXX$PROJECT BUILD_TYPE=[release, debug] make 
• e.g., 
$ cd vendor/mediatek/proprietary/tinysys/scp 
$ PROJECT=k6897v1_64 TARGET_BOARD_PLATFORM=mt6897 BUILD_TYPE=debug make -j24 
 
 With AOSP Hierarchy 
• The output path: out/target/product/$PROJECT/obj/TINYSYS_OBJ/tinysys-
scp_intermediates/RV55_A/scp 
• e.g.,: 
$ make tinysys-scp -j24 
$ mmm vendor/mediatek/proprietary/tinysys/scp -j24 
$ cd vendor/mediatek/proprietary/tinysys/scp && mm -j24 
$ mmm vendor/mediatek/proprietary/tinysys/scp:tinysys-scp -j24 
 
3.3 Image Layout 
• Partition in EMMC/UFS: scp1/scp2 
– scp1: Main and active partition 
– scp2: Backup for AB system 
• Image: scp.img 
– Consists of: 
▪ tinysys-scp-RV55_A.bin:  firmware/data located in SRAM 
▪ tinysys-scp-RV55_A.elf:  elf with symbol, for debug purpose 
▪ tinysys-scp-RV55_A_DRAM.bin: firmware/data located in DRAM 
 
  
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
4 Boot Sequence  
After the SCP image is ready, you need to know how the image are loaded into SRAM/DRAM and how SCP is initiated to 
run. The whole flow is completed by LK bootloader/Linux kernel/SCP firmware together, as below:  
• LK Bootloader 
(vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/mediatek/common/scp/scp.c) 
– Allocate permanent DRAM memory for SCP image 
– Load/verify SCP image 
– Setting EMI MPU (AP read-only) 
• Kernel 
– Initial setting (mbox/ipi/logger/…) 
– Kick SCP 
• SCP 
– Loader (vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/MT6897/platform/boot55.S) 
▪ Load SCP image to SRAM 
▪ Jump to FreeRTOS 
– FreeRTOS 
(vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/MT6897/platform/src/main.c) 
▪ Driver init 
▪ Setup MPU 
 
Figure 4-1. SCP boot up flow overview 
  
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
5 Inter Processor Interrupt (IPI) 
IPI is a mechanism to pass messages between drivers in Linux and FreeRTOS. It consists of: 
• A piece share memory: To exchange data 
• A set of interrupts: To notify each other 
 
Figure 5-1 shows the Tinysys IPI architecture. The SW architecture consists of four layers  
1. Synchronization layer: Public API for communication between AP and Tinysys 
2. Rpmsg layer: Blocking/non-blocking send functions 
3. Queue layer: Queue operation and management functions 
4. Physical layer: Physical hardware operations 
 
Figure 5-1. Tinysys common IPI architecture 
 
The MailBox are only predefined. Developers use the flowing API to send IPI to Tinysys, including IPI ID and register the call 
back function (ipi_cb). 
  
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
5.1 Usage on the SCP Side 
i. Add a new IPI ID information in ipi_id.h, ipi_table.h, and mbox_pin.h.  Sending and receiving information are 
described by different IPI tables. 
• File Description 
– ipi_id.h: The definition IPI ID (must unique) 
– ipi_table.h: The definition of IPI pin table (The sum of pin slots cannot exceed mbox slots) 
– mbox_ipi.h: The definition of IPI pin slot 
• Path 
vendor/mediatek/proprietary/tinysys/scp/drivers/RV55 _A/mt6897/mbox/ipi_id.h 
vendor/mediatek/proprietary/tinysys/scp/drivers/RV55 _A/mt6897/mbox/ipi_table.h 
vendor/mediatek/proprietary/tinysys/scp/drivers/RV55 _A/mt6897/mbox/mbox_pin.h 
 
• IPI_TABLE (Sender Pin Table Description) 
/* mbox pin structure, this is for send definition, 
 * ipi=endpoint=pin 
 * mbox :           (mbox number)mbox number of the pin, up to 16 
 * offset :           (slot)msg offset in share memory, 4 bytes alignment, up to 
1024*4 KB 
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

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 SCP 
User Manual 
Confidential B 
• IPI_TABLE(Receiver Pin Table Description) 
/* 
* mbox pin structure, this is for receive definition, 
* ipi=endpoint=pin 
* mbox:                    (mbox number)mbox number of the pin, up to 16 
* offset:                    (slot)msg offset in share memory, 4 bytes alignment, 
up to 1024*4 KB 
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
void (*mbox_pin_cb) (unsigned int id, void *prdata, void *data, unsigned int 
len); 
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

## PDF物理页 17

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 17 
MT8676 SCP 
User Manual 
Confidential B 
• Example of adding new IPI ID 
##Add IPI_NEW_ID at ipi_id.h 
enum { 
 . 
 . 
 IPI_NEW_ID =39, 
 IPI_COUNT 
}; 
 
• Example of adding new IPI message size  
##Add PIN_IPI_NEW_ID_SIZE at mbox_pin.h 
 
#define PIN_IPI_NEW_ID_SIZE  2 
 
• Example of adding new IPI pin  
The following guidelines cannot be violated. 
The total msg_size of send_table and recv table in the same mbox must not exceed 64. 
The new ping setting must be buddled with the same mbox number 
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

## PDF物理页 18

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 18 
MT8676 SCP 
User Manual 
Confidential B 
ii. Register an IPI handler 
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
 
• Example 
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

## PDF物理页 19

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 19 
MT8676 SCP 
User Manual 
Confidential B 
iii. Receive an IPI 
int ipi_recv(unsigned int ipi_id) 
    Description 
       API for apps to receive an IPI from AP 
    Parameters 
      id: IPI id declared in ipi_id.h 
    Return values 
DONE: complete successfully 
ERROR: something wrong in lower layer driver, i.e. mbox  
 
• Example: 
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
 
• Example: 
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

## PDF物理页 20

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 20 
MT8676 SCP 
User Manual 
Confidential B 
iv. Send an IPI 
 
• Example 
#include “scp_ipi.h” 
 
ipi_status ret; 
ret = ipi_send (IPI_NEW_ID, (void *)&msg, msg_size, 0, IPI_SCP2AP); 
if (ret != DONE) 
        PRINTF_E(“Send IPI failed\n”); 
  
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

## PDF物理页 21

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 21 
MT8676 SCP 
User Manual 
Confidential B 
v. IPI_STATUS 
• If any problem occurs in run-time using, please check API return value first, the reference of return value is shown 
below. 
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
5.2 Usage on the Kernel Side 
i. Add a new IPI ID and pin table in scp.h and mt6897.dts 
• File Description 
– scp.h: The definition of IPI (ID must sync with SCP side) 
– mt6897.dts: The definition of pin table (pin table must sync with SCP side) 
• Path  
kernel-Error! Reference source not found./drivers/misc/mediatek/scp/include/scp.h 
kernel-Error! Reference source not found./arch/arm64/boot/dts/mediatek/mt6897.dts 
• SCP IPI Description in DTS 
• Example for adding new IPI ID and message size 
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
 
• Example of adding new  IPI pin setting 
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
ii. Register an IPI 
int mtk_ipi_register(struct mtk_ipi_device *ipidev, int ipi_id, mbox_pin_cb_t cb, 
void *prdata, void *msg) 
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
 
 
iii. Send an IPI 
int mtk_ipi_send(struct mtk_ipi_device *ipidev, int ipi_id, int opt, void *data, 
int len, int timeout) 
    Description 
          API for apps to send an IPI to scp 
    Parameters 
         ipidev: ipidev declared in scp.h 
         ipi_id: IPI id declared in scp.h 
         opt: IPI_mode, IPI_SEND_WAIT or IPI_SEND_POLLING, should be sync with 
pin table 
         data: the message which will be sent to SCP 
     len: message size(4 bytes as a unit) 
     timeout: busy wait , as ms per unit 
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
iv. Receive an IPI 
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

## PDF物理页 25

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 25 
MT8676 SCP 
User Manual 
Confidential B 
6 DRAM Access Procedure 
Because DRAM and the system bus could be turned off regardless of SCP’s status, SCP developers MUST follow the 
following procedure to avoid system hang. Overview of sharing the information by DRAM between AP and SCP , is shown 
below. 
• Note: Please refer to Section 6.3 to get reserved DRAM address on SCP side. 
 
 
Table 6-1. The standard DRAM access flow 
# Steps Note 
0 Check/add predefined table in 
scp_reserve_mblock[]  
1 SCP Linux driver gets reserved physical address 
by APIs 
phys_addr_t scp_get_reserve_mem_phys (scp_reserve_mem_id_t id) 
phys_addr_t scp_get_reserve_mem_virt (scp_reserve_mem_id_t id) 
phys_addr_t scp_get_reserve_mem_size (scp_reserve_mem_id_t id) 
2 SCP Linux driver sends the address to SCP via 
IPI  scp_ipi_send (uint32 id, void* buf, uint len) 
3 SCP accesses DRAM via API uint32_t ap_to_scp (uint32_t ap_addr) 
4 Enable DRAM before using void dvfs_enable_DRAM_resource(scp_reserve_mem_id_t dma_id) 
void dvfs_disable_DRAM_resource(scp_reserve_mem_id_t dma_id) 
 
  
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
6.1 Reserving Memory in Linux Kernel 
To reserve a space in DRAM to exchange data between AP and SCP , entries in scp_reserve_mblock[] should be added first. 
The definition can be found here: 
• Path 
{lk2 repo}/platform/mediatek/mt6897/rules.mk 
{kernel repo}/arch/arm64/boot/dts/mediatek/mt6897.dts 
{kernel repo}/drivers/misc/mediatek/scp/include/scp.h 
{kernel repo}/drivers/misc/mediatek/scp/rv/scp_reservedmem_define.h  
 Register an User in Shared Memory 
step1. Add new ID in scp_reserve_mem_id_t 
{kernel repo}/drivers/misc/mediatek/scp/include/scp.h 
enum scp_reserve_mem_id_t { 
SCP_A_SECDUMP_MEM_ID = 0, 
VOW_MEM_ID, 
SENS_MEM_ID, 
… 
USER_MEM_ID,  // add here 
NUMS_MEM_ID, 
} 
 
step2. Add member to data structure in scp_reserve_mblock 
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
 
step3. Add dts node of reserved memory 
{kernel repo}/arch/arm64/boot/dts/mediatek/mt6897.dts 
scp: scp@1cb00000{ 
… 
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
scp_mem_tbl = <0 0x0>, 
<1 0xca700>, /* vow */ 
<2 0x100000>, /* sensor main*/ 
..., 
id, size>;          /*user_mem*/ 
}; 
 
step4. Add memory size increment of SCP shared memory in makefile 
{lk2 repo}/platform/mediatek/mt6897/rules.mk 
SCP_RESERVED_SHARE_DRAM_SIZE:= 0x           //add increment to this variable 
 
 Extend Shared Memory Size 
Take sensor for example, add 1.5MB 
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
6.2 Get Reserved Memory by ID 
Because the AP CPU uses virtual address and SCP uses physical address, both the two types of address are supplied. The 
following APIs are used to get virtual/physical address and size by given IDs which are declared in Section 6.1. 
• API 
phys_addr_t scp_get_reserve_mem_phys(scp_reserve_mem_id_t id) 
phys_addr_t scp_get_reserve_mem_virt(scp_reserve_mem_id_t id) 
phys_addr_t scp_get_reserve_mem_size(scp_reserve_mem_id_t id) 
• Header Path 
kernel-Error! Reference source not found./drivers/misc/mediatek/scp/rvError! Bookmark not 
defined./scp_helper.h 
• Return Value 
– The start address of the reserved memory, or 
– 0x0: Means no mapping 
 
After getting the physical address, developers MUST pass it to SCP via IPI, as mentioned in Section 0. 
6.3 Get Reserved DRAM Region on SCP Side 
To keep security state and avoid malicious IPI messages, SCP_DRAM_REGION i s introduced to provide the information of 
reserved DRAM region on SCP directly. The following APIs are used to get physical address and size by given IDs which are 
declared in Section 6.1. 
• API 
bool scp_get_reserve_mem_by_id(uint32_t id, void **ap_addr, size_t *size) 
• Header Path 
vendor/mediatek/proprietary/tinysys/scp/drivers/common/dram_region_mgmt/scp_dram_region.h 
• Return Value 
– True: the value of *ap_addr and size are updated to start address and size of given ID. 
– False: the *ap_addr and size are not updated. 
 
For the codes which may be common part on different projects, CFG_SCP_DRAM_REGION_MANAGE can help to keep 
compatibility. For example,  
 
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
#else 
// msg.addr and msg.size from ipi message 
set_dram_addr(msg.addr, msg.size); 
#endif 
… 
} 
 
6.4 Remap DRAM Address from AP View to SCP View 
SCP is a 32-bit system and can only access maximum 4G (0xffffffff) address. If SCP applications need to access higher than 
4G, the following APIs should be used to remap address to SCP memory window. Table 6-2 shows the relation between AP 
and SCP . 
Table 6-2. The default remapping rule table 
Name SCP/DMA Size AP side 
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
• Header Path 
vendor/mediatek/proprietary/tinysys/scp/drivers/common/dma/inc/dma_api.h 
• Return Value 
– The mapped address, or 
– 0x0: Means no mapping 
6.5 Request System Bus and DRAM 
Because the system bus and DRAM will enter sleep mode when no data is being transmitted or system suspends, the 
following APIs MUST be invoked to make sure DRAM is ready to access. 
 
• API for task context 
– void dvfs_enable_DRAM_resource(scp_reserve_mem_id_t dma_id): before DRAM access 
– void dvfs_disable_DRAM_resource(scp_reserve_mem_id_t dma_id): after DRAM access 
 
• Note: It will take 5ms to wake up DRAM when 26M clock is gated. 
 
 
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
 
• API for ISR context 
– void dvfs_enable_DRAM_resource_from_isr(scp_reserve_mem_id_t dma_id) 
– void dvfs_disable_DRAM_resource_from_isr(scp_reserve_mem_id_t dma_id) 
 
• Header Path 
vendor/mediatek/proprietary/tinysys/common/drivers/dma/v3/inc/dma.h 
vendor/mediatek/proprietary/tinysys/scp/drivers/RV55_A/MT6897/dvfs/inc/dvfs.h 
 
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
7 Drivers Guide 
7.1 Driver Initiation 
Due to that the multi-thread is not enabled when driver is initiated, developers MUST 
• Put drivers init function in platform_init(). 
• Never use block functions in driver init function because it will be blocked forever. For example: 
– vTaskDelay 
– HW semaphore 
– Busy loop, e.g., polling registers 
7.2 Add a New Driver 
Here are steps to add a new driver to the source tree: 
1. Put the driver body in the appropriate folder (choose one of following folders) 
• Path 
vendor/mediatek/proprietary/tinysys/common/* common drivers for tinysys */ 
vendor/mediatek/proprietary/tinysys/scp/drivers/common/* common drivers for scp */                       
vendor/mediatek/proprietary/tinysys/scp/drivers/RV55_A/mt6897/drivers/* platform drivers */ 
 
2. Add a new compiler option 
• Path 
vendor/mediatek/proprietary/tinysys/scp/project/mt6897/platform/platform.mk 
 
• Example: DMA driver 
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

## PDF物理页 32

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 32 
MT8676 SCP 
User Manual 
Confidential B 
7.3 Interrupt 
MT6897 SCP supports 15 priority levels of interrupt, and the lower-level number with the higher priority. If more than one 
IRQ happen at the same time, CPU will serve the one with highest priority first.  
Never set interrupt priorities higher than 2. Level 0 is for the “watch dog” or “system fail”, level 1 is for “sleep control” 
interrupt. This chapter describes how to use interrupt in SCP . 
• Path 
vendor/mediatek/proprietary/tinysys/common/drivers/irq/v3/inc/irq.h 
 IRQ Registration 
Before an IRQ is served, the driver developer must make an association between the IRQ ID and the corresponding 
handler. The IRQ is defined according to the structure of INTC_IRQ, and the driver developer following API to register 
handlers with IRQ IDs. 
 
• Structure 
struct INTC_IRQ 
{ 
    uint8_t id; 
    uint8_t group; 
    uint8_t pol; 
} 
    id: the irq number 
    group: from INTC_GRP_0 (the highest priority) to INTC_GRP_14 (the lowest priority) 
    pol: the polarity with INTC_POL_HIGH or INTC_POL_LOW 
 
 
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
 
• Example 
struct INTC_IRQ INTC_IRQ_SYSTICK = {0, INTC_GRP_8, INTC_POL_HIGH}; 
 
#include “irq.h” 
 
int ret; 
ret = intc_irq_request(&INTC_IRQ_SYSTICK, test_ist, NULL); 
if (ret != 0) 
        PRINTF_E(“Register irq failed\n”); 
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
 Enable IRQ 
After IRQ handler is registered, SCP is ready to service. The next step is to enable a specific IRQ with the following API. 
• API 
int intc_irq_enable(struct INTC_IRQ *irq) 
   Description 
       Enable specified irq served. 
    Parameters 
       irq: the irq structure which is declared at intc.h  
    Return values 
      0: success 
      -1: request fail 
 
• Example: 
#include “irq.h” 
 
int ret; 
ret = intc_irq_enable(&INTC_IRQ_SYSTICK); 
if (ret != 0) 
        PRINTF_E(“enable irq failed\n”); 
 
 Disable IRQ 
Opposite, when IRQs are not used temporarily, driver developers have to call the following API to make SCP stop service 
the IRQs. 
• API 
int intc_irq_disable(struct INTC_IRQ *irq) 
   Description 
       Disable specified irq served. 
    Parameters 
       irq: the irq structure which is declared at intc.h 
    Return values 
       0: success 
      -1: request fail 
 
• Example 
#include “irq.h” 
 
int ret; 
ret = intc_irq_dsiable(&INTC_IRQ_SYSTICK); 
if (ret != 0) 
        PRINTF_E(“disable irq failed\n”); 
 
 
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
 Wakeup Source Registration 
When SCP is in the sleep state, an IRQ will not be serviced unless it is set as wakeup source. The following API is used to 
register an IRQ as a wakeup source. 
• API 
int intc_irq_wakeup_set(struct INTC_IRQ *irq, unsigned int wake_src) 
   Description 
       Set wakeup source for specified irq. 
    Parameters 
       irq: the irq structure which is declared at intc.h  
       wake_src: 1 for wakeup source, 0 for non-wakeup source 
    Return values 
        0: success 
       -1: request fail 
 
• Example 
#include “irq.h” 
 
int ret; 
ret = intc_irq_wakeup_set(&INTC_IRQ_SYSTICK, 1); 
if (ret != 0) 
        PRINTF_E(“irq wakeup source setup failed\n”); 
 
Note:      
1. ISR execution time must be as SHORT as possible and stack depth as LESS as possible 
2. Never use block APIs, such as 
–  HW semaphore API 
–  Wait for IPI 
–  Any APIs with polling external devices 
3. Never use FreeRTOS API in ISR without FromISR postfix 
      - It is a rewritten version with block-free API and quick implementation 
4. Must use portYIELD_FROM_ISR() if there is a high priority task waken in ISR 
 
  
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
7.4 Locks 
SCP provides a spin lock mechanism for dual-core synchronization. To use the lock, the following configuration item needs 
to be enabled. 
set CFG_ATOMIC_PLAT_SUPPORT  = yes 
 
• Path 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/platform.mk 
 
• API 
spinlock_t SYNC_SECTION lock; 
 
void spinlock_lock(spinlock_t * lock) 
void spinlock_unlock(spinlock_t * lock) 
description 
spin lock for Sync dual core. 
parameters 
lock: variable defined by SYNC_SECTION 
Return values 
NA.  
 
• Header Path 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/inc/mtk_atomic.h 
 
Note: 
1. Never keep spin lock more than 1ms due to preemption is disabled when spin is locked and unlocked. For scenarios that do not 
span both cores, spin locks are not necessary. 
 
 
  
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
7.5 DMA 
Direct Memory Access (DMA) is a hardware feature that allows data to be copied between specified source/destination 
without involving the CPU. SCP DMA supports the following functions: 
1. Burst AXI mode to accelerate memory transfers 
2. 8 channels, meaning the engine can concurrently handle up to 8 transactions 
 
• API 
DMA_RESULT scp_dma_transaction(uint32_t dst_addr, uint32_t src_addr, uint32_t len, int8_t 
scp_dma_id, int32_t ch) 
DMA_RESULT scp_dma_transaction_dram(uint32_t dst_addr, uint32_t src_addr, uint32_t len, 
int8_t scp_dma_id, int32_t ch) 
description 
Copy data from src_addr to dst_addr by specified DMA channel 
parameters 
dst_addr: destination address 
src_addr: source address 
len: length in bytes to copy  
scp_dma_id: DMA ID 
ch: channel ID 
Return values 
DMA_RESULT_DONE (=0) means success start 
DMA_RESULT_NO_FREE_CH (=-1) means DMA hardware busy 
 
 
• Header Path 
vendor/mediatek/proprietary/tinysys/common/drivers/dma/v3/inc/dma.h 
vendor/mediatek/proprietary/tinysys/scp/drivers/common/dma/dma_api.h 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/Error! Reference source not 
found./mt_dma.h 
• scp_dma_id 
– It’s the identity of DMA channel in mt_dma.h. It’s recommended to use different dma_id with which debugging 
channel full issues will be easier. 
• Limitations 
– The maximum data size per transaction is 262140 bytes 
– Use 4byte-aligned address to get the best performance 
•  Example: 
ret = scp_dma_transaction(dst_buf + dst_w_pos, src_buf + src_r_pos, src_len, 
LOGGER_DMA_ID, NO_RESERVED); 
if (ret != DMA_RESULT_DONE) { 
 PRINTF_E("log dma trans fail%u\n", ret); 
 return 0; 
} 
 
  
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
7.6 Hardware Semaphore 
Hardware semaphore is a special hardware which provides mutex-like flow control between Linux driver and FreeRTOS. 
There are 16 sets in SCP . 
The following APIs make Hardware semaphore easy to use. They work on both SCP and Linux driver. Just make sure thatthe 
right header is included and the flags are the same. 
• API 
int semaphore_get(unsigned int flags) 
int semaphore_release(unsigned int flags); 
   description 
        Semaphore between AP and SCP. 
   parameters 
        flag: 0 ~15 for 16 sets in SCP 
   Return values 
       0: get semaphore fail 
       1: get semaphore success 
 
 
• Header 
Kernel/kernel_device_modules -6.1/drivers/misc/mediatek/scp/rv/scp_helper.h 
vendor/mediatek/proprietary/tinysys/common/drivers/sem/v1/inc/sem.h 
• Return 
– 1: Succeed in getting semaphore 
– 0: Fail to get semaphore 
• Examples:   
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

## PDF物理页 38

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 38 
MT8676 SCP 
User Manual 
Confidential B 
7.7 GPIO & EINT 
SCP also provides GPIO an external interrupt so that external components such as gyro sensors can send events to SCP . 
• GPIOs 
– Function set to: TP_GPIO?_AO, support TP_GPIO0_AO~TP_GPIO15_AO 
• EINTs 
– Function set to Aux Func.0 (GPIO), support EINT0~15 
Table 7-1. The EINT and GPIO mapping ball name 
Ball Name GPIO Reset Default 
Mode EINT Aux Func.0 Aux Func.4 Aux Func.6 
EINT0 0 EINT0 B:GPIO0  B0:TP_GPIO0_AO 
EINT1 0 EINT1 B:GPIO1  B0:TP_GPIO1_AO 
EINT2 0 EINT2 B:GPIO2  B0:TP_GPIO2_AO 
EINT3 0 EINT3 B:GPIO3  B0:TP_GPIO3_AO 
EINT4 0 EINT4 B:GPIO4  B0:TP_GPIO4_AO 
EINT5 0 EINT5 B:GPIO5  B0:TP_GPIO5_AO 
EINT6 0 EINT6 B:GPIO6  B0:TP_GPIO6_AO 
EINT7 0 EINT7 B:GPIO7  B0:TP_GPIO7_AO 
EINT8 0 EINT8 B:GPIO8 B0:TP_GPIO8_AO  
EINT9 0 EINT9 B:GPIO9 B0:TP_GPIO9_AO  
EINT10 0 EINT10 B:GPIO10  B0:TP_GPIO10_AO 
EINT11 0 EINT11 B:GPIO11  B0:TP_GPIO11_AO 
EINT12 0 EINT12 B:GPIO12  B0:TP_GPIO12_AO 
EINT13 0 EINT13 B:GPIO13  B0:TP_GPIO13_AO 
EINT14 0 EINT14 B:GPIO14  B0:TP_GPIO14_AO 
EINT15 0 EINT15 B:GPIO15  B0:TP_GPIO15_AO 
  
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
 GPIO Usage 
The GPIO function must be set to TP_GPIO?_AO first. Please refer to GPIO pin mux setting document for details. GPIO 
control register table is shown in Table 7-2. 
Table 7-2. The GPIO control register table 
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
 
The control examples: 
• Pull high GPIO 1 
– Set GPIO_DIR,  0x60525000[1] = 1 
– Set GPIO_OUT , 0x65025004[1] = 1 
• Read GPIO 0 
– Set GPIO_DIR,  0x60525000[0] = 0 
– Read GPIO_IN, 0x60525008[0] 
• Internal pull up GPIO 3 
– Set GPIO_PULL_EN,     0x6052500c[3] = 1 
– Set GPIO_PULL_CTRL, 0x60525010[3] = 1 
  
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
 EINT Usage  
• Path 
tinysys/common/drivers/eint/v02/src 
 
• API: Register EINT call back 
void mt_eint_registration(unsigned int eint_num, unsigned int sens, unsigned int pol, 
                                                 void (EINT_FUNC_PTR) (int), 
                                                 unsigned int unmask, unsigned int 
is_auto_umask) 
  description 
      Register eint interrupt handler. 
   parameters 
       eint num: the EINT number to register 
       sens: LEVEL_SENSITIVE, EDGE_SENSITIVE 
       pol: HIGH_LEVEL_TRIGGER, LOW_LEVEL_TRIGGER 
       EINT_FUNC_PTR: the ISR callback function 
       Unmask: enable this EINT trigger after register 
       Is_auto_unmask: auto reenable EINT trigger after finish a EINT service routine 
   Return values 
      NA. 
 
• Example 
mt_eint_registration(eint_num, LEVEL_SENSITIVE, HIGH_LEVEL_TRIGGER, xxx_Isr,   
EINT_INT_UNMASK, EINT_INT_AUTO_UNMASK_OFF); 
 
– void mt_eint_dis_hw_debounce(unsigned int eint_num): Disable HW debounce 
– void mt_eint_soft_set(unsigned int eint_num): Software trigger to clear specified EINT 
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
8 Debug Methods 
8.1 PRINTF_* Usage 
Please DO NOT use printf in SCP SW, because it could be linked to C library and cause problem. Instead, PRINTF_* is used 
as shown in Table 8-1. Developers MUST include the header file <mt_printf.h> before using PRINTF_*. The log level and 
the use scenario of PRINTF_x is shown in Table 8-1. 
Table 8-1. PRINTF use scenario 
PRINTF_* Level Use Scenario 
 
PRINTF_E <0> Error conditions 
 
PRINTF_W <1> Warning conditions User load 
PRINTF_I <2> Informational 
 
PRINTF_D <3> Debug-level messages Engineer load 
8.2 Mobile Log 
MTK Logger is an APK which records various logs into storage such as SD card. After launching it and enable SCP log, SCP 
log can be gotten in the following path: 
Log path: /mobilelog/APLog_XXXX_XXXX_XXXXXX/scp_log_XXXX.curf  
Figure 8-1. MTKLogger 
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
8.3 UART 
• Output pin 
SCP has two dedicate UART. Please make sure the PC UART port connect to Pin ball name URTD1 and UTXD1 (as shown in 
Table 8-2) and then set the software compiler option as shown below. 
Table 8-2. UART pin name 
Pin name Function 
URXD1 SCP UART RX 
UTXD1 SCP UART TX 
 
• SW compiler option 
– Path: Configure flags  
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/platform.mk 
▪ CFG_UART_SUPPORT                  = yes    /* Uart enable, Default No */ 
▪ CFG_MTK_SCPUART_SUPPORT = yes    /* Use SCP uart, Default Yes*/ 
– UART terminal setting 
▪ Baud rate: 921600 
Figure 8-2. UART setting 
8.4 ADB Logcat 
ADB logcat is able to output SCP log directly from ADB or UART console. 
• Usage: 
– Make sure SCP Log in MTK Logger is disabled (as shown in Figure 8-3.) 
– Enter shell and enter command echo 1 > /sys/class/misc/scp/scp_mobile_log 
– Enter command while true; do cat /dev/scp;done and the log will output directly, as shown in Figure 8-4. 
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
 
Figure 8-3. Disable SCP Mobile log 
Figure 8-4. ADB logcat output 
  
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
8.5 Exception Log Analysis 
When exception happens, SCP will print exception log automatically. Developers can get it from UART or mobile log.  
• FAULT FETCH, FAULT LOAD, and FAULT STORE: Due to the wrong access of a MPU protect address.  
– FAULT FETCH: PC jumps to wrong address 
▪ The system register: mepc will show the incorrect target address. 
– FAULT LOAD, FAULT STORE: Access a protected address 
▪ The system register mepc will show the wrong PC and mtval will show the incorrect address to be accessed. 
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
 
• MISALIGNED FETCH, MISALIGNED LOAD, and MISALIGNED STORE: Usually happen when the integer pointer (4 byte 
aligned) accesses a 1 or 2 bytes aligned address. 
– MISALIGNED FETCH: Jump to misaligned address 
▪ The system register: mepc will show the wrong address 
– MISALIGNED LOAD, MISALIGNED STORE: Access a misaligned address 
▪ The system register mepc will show the wrong PC and mtval will show the access address 
  
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
• ILLEGAL_INSTRUCTION: The error caused by the inability to decode the instruction.  
• For example:  
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
 Trace Buffer 
Trace buffer log can help us to analyze the function call record that CPU have been executed. The log indicates the function 
call address and destination address. There are 32 entries, and could be gotten form the bottom of the exception log.  
For example:  
The address can be translated with tools like lldb or addr2line 
[2.655](0) T Buffer (10) 
[2.656](0) 00 0x0000371a:0x00008fd6 
[2.656](0) 01 0x00008fdc:0x0000371e 
… 
[2.661](0) 28 0x0000f2a4:0x00002eec 
[2.662](0) 29 0x00002eec:0x00006d52 
[2.662](0) 30 0x00006d5c:0x00002ef0 
[2.663](0) 31 0x0000f2a4:0x00003728 
 
After executing SCP_COREDUMP file via coredump_cmd.sh, a readable text file will be generated, analysis.txt. The 
file list the combo of function call address, function name and file path of source file.  
 
 
 
  
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
8.6 Coredump 
If AP is aware that SCP is not responding to IPI or SCP WDT event, the coredump flow will start automatically. Coredump is 
a snapshot of the SCP memory and the processor registers like program counter, stack pointer, return address will be saved 
as well. And much of the system information like system registers, cache contents will be saved as much as possible. This 
information make it possible to restore the status of system before fault happens. 
By default, LLDB is offered to support core dump debug. For LLDB details, please refer to https://lldb.llvm.org/. 
• LLDB path  
– LLDB can be found in alps prebuilts folder, path prebuilts/clang/md32rv/linux-x86/lldbv3. 
• Get Core dump 
– The SCP core dump will be named as “SYS_SCP_DUMP”, which will inside SCP EE DB (e.g., db.00.EE.dbg). 
– If not found, please check the EE DB, confirm the __exp_main.txt, the Exception type should be “scp”. 
$ prebuilts/clang/md32rv/linux-x86/lldb_v3/coredump_cmd.sh mt6897 tinysys-scp-RV55_A.elf 
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
 
Note:  
LLDB version must be compatible with SCP core. 
RV55: lldb_v3 
RV33: lldb 
 
If LLDB tool were launched unexpected, 
1. Please confirm the file structure under prebuilts/clang/md32rv/linux-x86/lldb_v3 has not been modified. 
2. Please check the related log file debug_prosim.log and debug_ocd.log. If the libprofile.so.x.x.x libraries 
were not found, add the following command to coredump_cmd.sh  before PROSIM launches command. 
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

## PDF物理页 48

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 48 
MT8676 SCP 
User Manual 
Confidential B 
 
 
3. There are three tools (LLDB, Openocd, PROSIM) launched when using coredump_cmd.sh and tools communicate 
each other via TCP/IP protocol. If using LLDB-related tools remotely, please ensure that the TCP/IP connection ports 
are not blocked by the firewall.. 
 
  
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
 LLDB Basic Commands 
For the advanced developers or developers who are familiar with GDB, please refer to command map for the details. 
• Back trace: bt 
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

## PDF物理页 50

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 50 
MT8676 SCP 
User Manual 
Confidential B 
• Dump OS tasks information: freertos 
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

## PDF物理页 51

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 51 
MT8676 SCP 
User Manual 
Confidential B 
• Print variable and address: p $(variable name) 
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
 
• Dump memory: x/FMT address 
(lldb) x/32xw 0x1ef08 
0x0001ef08: 0x003a9593 0x093d3533 0x10063667 0x00bb0ab3 
0x0001ef18: 0x01340633 0x016ab5b3 0x00b60c33 0x008c0463 
0x0001ef28: 0x008c35b3 0x01248633 0x0433955e 0x35b300b6 
0x0001ef38: 0x36330096 0x952e00c4 0x00c50bb3 0xd5334d32 
0x0001ef48: 0xc11d094b 0x001ad593 0x001af513 0xfe1c05b3 
0x0001ef58: 0x001c5c13 0xfe140c33 0x84338005 0xdb93fe1b 
0x0001ef68: 0xeab3001b 0x088500a5 0x652144a2 0x09f4a4b3 
0x0001ef78: 0xcf63157d 0x053700a8 0x24237fff 0x8d451001 
 
• Read CPU register: Register read  $REG 
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

## PDF物理页 52

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 52 
MT8676 SCP 
User Manual 
Confidential B 
8.7 Performance Evaluation and Flight Record 
PBFR is a profiling tool which can monitor CPU usage. It can be divided into two sections, performance budget and flight 
record. 
Performance budget contains information with each task loading, cache miss, stall, and the whole system loading. And 
flight record can record CPU trace during a period. 
 Performance Budget 
Here will introduce how to use performance budget to monitor task loading. 
 
• Enable Performance Budget: 
– Set configuration and definitions to enable performance budget. 
▪ Path 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/inc/FreeRTOSConfig.h 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/ mt6897/platform/platform.mk 
Table 8-3. Compiler options and definitions 
# Compiler Options and Definitions Description 
1 CFG_PBFR_SUPPORT 
PBFR main function control option 
Enable: Yes 
Disable: No 
2 #define PBFR_SUPPORT_POLLING Support saving task max loading by polling 
3 #define PBFR_SUPPORT_POLLING_MS 10 Polling task activity per 10ms 
4 #define PBFR_SUPPORT_CACHE_COUNT Support cache miss rate 
5 #define PBFR_SUPPORT_IOSTALL Support IO stall rate 
 
• Usage1: 
– Per 10 sec report Performance Budget  
– CFG_MONITORTASK_ALWAYS_RUN = yes 
• Usage2: 
– Command: (start/report/end) 
$ echo 666 0 1 > sys/class/misc/scp/scpctl 
 
▪ Enter the command 1st time to start recording performance budget information, in a period of time; enter the 
command 2nd time to report the loading information, and enter the command 3rd time to stop recording. 
▪ For some customized requests, these three APIs can be added to specific place for monitoring partial jobs. 
o pbfr_start_loadinfo(0): Start to record loading information 
o pbfr_report_loadinfo(0): Report the loading information 
o pbfr_stop_loadinfo(0): Stop to record loading information 
  
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
• Log interpretation:  
 
 
 
 
 
 
 
 
 
 
 
 
Figure 8-5. Performance Budget log example  
 
  
Task Loading => total_us: 6564492 
[TMon]T01 0: 00.01% max: 06.92% (0)(I$miss=0/0 D$miss=0/0) 
[CHRE]T02 2: 00.45% max: 01.34% (9)(I$miss=0/0 D$miss=0/0) 
[IDLE]T03 0: 15.38% max: 99.58% (2032)(I$miss=0/0 D$miss=0/0) 
[Tmr S]T04 2: 00.08% max: 01.08% (1)(I$miss=0/0 D$miss=0/0) 
CPU Loading: 84.62% max: 91.64%(3424) 
Thread max loading during 60s 
CPU max. Loading 
Task loading, max loading and cache miss rate 
rraratecount/access count 
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
 Flight Record 
Flight Record is a debug tool can record the last events when the system crashes.  Here will introduce how to use flight 
record to monitor CPU traces. 
 
• Enable Flight Record: 
– Set configuration and turn on definitions to get flight record. The configuration in platform.mk is to enable Flight 
Record, and the definitions in FreeRTOSConfig.h means the events which can be recorded. 
 
▪ Path 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/platform.mk 
Table 8-4. Compiler options 
# Compiler Option Description 
1 CFG_PBFR_SUPPORT 
PBFR main function control option 
Enable: Yes 
Disable: No 
 
▪ Path 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/inc/FreeRTOSConfig.h 
Table 8-5. Definitions of Flight Record 
# Definitions Description 
1 #define PBFR_SUPPORT_FLIGHT_REC Support flight record 
2 #define PBFR_MAX_REC_EVENTS 32 Support 32 trace event (maximum: 255) 
3 #define PBFR_SUPPORT_REC_TASK Support task trace events 
4 #define PBFR_SUPPORT_REC_QUEUE Support queue trace events 
5 #define PBFR_SUPPORT_REC_SWTIMER Support SW timer trace events 
6 #define PBFR_SUPPORT_REC_INT Support critical sections trace events 
7 #define 
configTRACE_INT_MASK_TIME_BOUD_NS 
Recording critical section trace event only if duration overs 
time bound 
8 #define PBFR_SUPPORT_REC_ISR Support interrupt service routine trace events 
9 #define PBFR_SUPPORT_REC_OSTICK Support OS tick trace events 
 
• If build failed out of memory size, change the setting in Setting.ini. 
– Log: SCP: {XXX}(size_A>size_B) is out of memory limitation, change the size of XXX (size_B) larger 
than size_A. 
– Path 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/Setting.ini 
 
• Usage: 
– Copy tinysys-scp-RV55_A.elf and SCP coredump to the analysis folder. 
▪ Analysis folder: alps/prebuilts/clang/md32rv/linux-x86/lldb_v3 
– Parsing data with coredump analyzing tool to get SCP_debug.txt and flrec.json. 
– If succussed, it will show the following log.  
 
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
 
Load flrec.json in chrome://tracing/ to get the GUI result.  
 
• Log interpretation: 
– Console Mode: 
▪ Console mode will present in SCP_debug.txt, it shows the recorded events before system crashes, and displays 
events classified by the type. Record[X] indicates that this event is the Xth to last event. 
 
Figure 8-6. Flight record console mode example 
  
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
Timestamp (us) for the event 
Shows critical section events which duration are over than time bound  
Scheduler switches to the task from previous state 
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
– GUI Mode: 
▪ Load step 
1. GUI Website: chrome://tracing/ 
2. Load json: flrec.json (created in the Analysis folder) 
• Instruction of use 
– Use keyboard W/S to room in/out, A/D to move left/right on the Website, or switch button to change mouse mode. 
 
Figure 8-7. Button instruction 
  
 
Select Event 
Move interface 
Zoom in/out 
Select a time frame 
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
• Overall 
– The GUI shows the last events flow, it records six types of events: task, queue event, software timer, critical section, 
ISR event, and OS tick. 
Figure 8-8. Flight record GUI mode interface 
The message on the bottom shows the event’s start time and duration. 
  
Figure 8-9. Detailed information 
  
Event name (Task, Queue, CS…) 
 Record [0] start time 
Realtime = Record [0] + start time 
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
▪ Task 
o The Task event shows the task’s wakeup time and execution time. 
 
Figure 8-10. Task wake up event 
▪ Queue 
o  The Queue event is presented below the task which executs the event and clicking the event, you can see the 
type of queue showing in the information bar. 
 
 
Figure 8-11. Example of Queue event 
 
 
 
 
Figure 8-12. Detailed information of queue event 
▪ Software timer 
o SW timer shows the execution time of callback function. 
 
 
Figure 8-13. Example of SW timer 
▪ Critical Section 
o By moving upward through the corresponding critical section, you can find the tasks running in the critical 
section. 
wake up event 
Task “PRINCIPAL”’s queue event 
Click to get the type of queue event 
SW timer callback function 
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
 
 
Figure 8-14. Example of critical section 
▪ ISR 
o ISR shows the execution time of interrupt service routine and ISR number. 
 
Figure 8-15. Example of ISR 
▪ OS Tick 
o OS tick displays the time of the operating system timer ticks. 
 
 
 
Figure 8-16. Example of OS tick 
 
  
Critical Section when task “PRINCIPAL” is running 
ISR event 
OS tick event 
ISR number 
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
9 Address Sanitizer 
 ASAN Usage 
 
Address Sanitizer (ASAN) is an address sanity checker to find out-of-bounds accesses to heap, stack, and global objects, as 
well as use-after-free bugs. 
 
• Enable ASAN 
– Set configuration and turn on definitions to enable ASAN.  
– Path 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/$Project/project.mk 
vendor/mediatek/proprietary/tinysys/scp/build/config.mk 
Table 9-1. Compiler options and definitions 
# Compiler Options and Definitions Description 
1 CFG_ASAN_SUPPORT Enable: Yes 
Disable: No 
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
 
• Exception 
Table 9-2. Exception type  
# Exception Type Description 
1 ASAN_STACK_LEFT Local variable underflow 
2 ASAN_STACK_MID Local variable underflow/overflow 
3 ASAN_STACK_RIGHT Local variable overflow 
4 ASAN_STACK_PARTIAL Local variable overflow 
5 ASAN_GLOBAL_REDZONE Global variable overflow 
6 ASAN_HEAP_USE_AFTER_FREE Heap use after free 
 
 
 
 
 
 
 
 
 
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
• Issue handling - Stack underflow 
 
 
• Issue handling - Global variable overflow 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
• Issue handling - Heap use after free 
 
 
 
 How to Move Code to DRAM 
After enabling ASAN, the code size will increase about 1.7x. Therefore, the SRAM size might be insufficient. The user can 
move some feature or function to DRAM to reduce the DRAM usage. 
 
• Use attribute 
Use Cache macros defined in cache_internal to specify function/variable on DRAM region. 
Beware, DRAM_REGION_VARIABLE works only on global/static variables because local variables use stack as their storages. 
By default, for the performance concern, stack is preserved in SRAM. 
#define DRAM_REGION_VARIABLE __attribute__ ((section (".dram_region_variable"))) 
#define DRAM_REGION_FUNCTION __attribute__ ((section (".dram_region_func"))) 
 
• Use linker script 
The linker script describes how objects are mapped in the output binary file. 
It provides an easy way to locate objects to DRAM region. 
Here template header and linker script are provided to locate all sections in a C file to DRAM region. 
1. Check cache_ld.h (@project/RV55_A/$platform/$project), here you can see lots of predefined macros with 
style CACHE_***_TEXT& CACHE_***_DATA. You can add one new macro and name it by yourself. The string after 
name is the expected c file path. 
 
• For example:  (The “?*” is wildcards compare) 
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

## PDF物理页 63

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 63 
MT8676 SCP 
User Manual 
Confidential B 
2. Check link.ld, it should have CACHE_***_TEXT & CACHE_***_DATA. 
• You can add the string after CACHE_BARO_TEXT/CACHE_BARO_DATA. 
• For example: 
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

## PDF物理页 64

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 64 
MT8676 SCP 
User Manual 
Confidential B 
10 Appendix 
10.1 Frequently Asked Questions/Troubleshooting 
 Malloc Failure 
Due to the limited and relatively small size of SRAM, the size of the malloc pool is tailored to the functionality. It is common 
for malloc to fail when introducing new features without expanding the pool size. 
 
Note: 
When malloc failure happens, a message will be showed. 
[2.232](0) malloc fail  
[2.232](0) [ASSERT] task: CHRE  
This message indicates which task experienced a malloc failure, followed by a core dump log. 
 
• How to Fix 
1. Modify the scp/project/RV55_A/mt6897/platform/platform.mk, enlarge the heap size, e.g., 80*1024  
ifeq ($(CFG_CHRE_SUPPORT),yes) 
$(eval TOTAL_HEAP_SIZE=$(shell echo $$(($(TOTAL_HEAP_SIZE) + (80 * 1024))))) 
  change 40 
to 80 
endif 
 
2. Modify the scp/drivers/common/scpctl/scp_scpctl.c; enable task monitoring forcibly. 
void scpctl_init(void) 
{ 
… 
 else {  /* monitor task is in suspened state */ 
  scpctl.stat = SCPCTL_STAT_INACTIVE; 
  scpctl.op = SCPCTL_OP_INACTIVE; 
  //vTaskSuspend(xMonitorTask[id]);  
  about line: 244, mark it 
 } 
… 
} 
 
3. Check the remaining heap size and compute the required heap size  
[210.009](0) Heap:free/total:40946/108544 
 
4. Correct the heap size, the remaining heap size is 40946, 40946/1024 = 39.98, the minimum heap size is 41, and 
setting it to 43 or 44 is safer. Please remember to revert the changes in 
scp/drivers/common/scpctl/scp_scpctl.c after the issue is fixed. 
 
ifeq ($(CFG_CHRE_SUPPORT),yes) 
$(eval TOTAL_HEAP_SIZE=$(shell echo $$(($(TOTAL_HEAP_SIZE) + (43 * 1024)))))  
endif 
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
 Unaligned Access 
The SCP MDSP-RV33 processor does not have hardware to handle unaligned access, and the implementation is done by 
software. When an unaligned access occurs, the processor raises an exception and handles it through software in the 
handler. Therefore, there is a significant performance cost. 
 
• Note:  
When unaligned access happens, a warning message will be showed. 
“Warning: MISALIGNED LOAD, pc:0x00001234, addr:0x00042232” 
This message shows the PC with problems and address the processor wants to access. The system may be busy to print this message 
when unaligned access happens continuously and may cause timeout assertion. 
 
• How to Fix 
Most unaligned accesses are due to the use of the packed qualifier in structures. This can be avoided by removing it. 
• Example: 
struct pack_struct { 
    unit32_t size; 
    uint32_t crc; 
    uint8_t type; 
} __attribute__((packed)); 
 
When a structure array is declared, e.g., pack_struct st_array[10], the access of structure member will be 
unaligned. 
Another case is accessing character array with integer pointer. This can be avoided by adding 
__attribute__ ((aligned (4))). The compiler does not guarantee &char_array[0] is 4 byte alignment. 
 
• Example: 
uint8_t char_array[64]; 
test_value = *(uint32_t *)(&char_array[0]) 
 
  
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
10.2 Code Size Limitation 
The total SRAM size of MT6897 is 2MB, and the actual SCP SRAM size can be determined by checking the symbol _end.  
The remaining SRAM size:: 
MT6897: 0x300000 - _end 
 
In MT6897, SRAM region LENGTH can be set to 2MB in project/RV55_A/MT6897/platform/link.ld.c  
• Example:  
sram : ORIGIN = 0x00000000, LENGTH = 0x00200000 
When size exceeds 2MB, this will cause build failure. 
 
The code size checking tool will run at each build and output detailed information. Refer to Error! Reference source not 
found. table below, where the vertical axis represents the project names, and the horizontal axis represents the code size 
for each project. For example, the total size of CHRE is 62985 (sum) bytes, with the .text section accounting for 35598 bytes 
of the total size. 
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
 
 Code Size Tool Usage 
• The tool memoryReport.py is a script which is used to limit code size during builds. If the code size exceeds your 
settings, it will result in a build error. 
– Path  
vendor/mediatek/proprietary/tinysys/common/tools/memoryReport.py 
• Set the path for configuration file  
– Path 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/Setting.ini 
 
•  Configuration file format (setting.ini) 
[TinySys-SCP] 
$File_Name: $Main_feature: $Sub_feature 
[SCP-MT6985] 
$Main_feature: Max_code_size 
$Sub_feature: Max_code_size 
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
* File_name: Full file path or partial file path (e.g., middleware/contexthub/perf) 
* Main feature, (e.g., Sensor, Audio): The main feature that this file belongs to 
* Sub feature, (e.g., gyro, pedometer): The sub feature that this file belongs to 
* Main_feature/Sub_feature (after SCP-MT6985): The maximum size limit of the main or sub 
 
• Memory check fails 
– Example 
SCP: I2C(3958>110) is out of memory limitation 
SCP: SPI(6316>1100) is out of memory limitation 
make: *** [tinysys_out/RV55_A/scp/tinysys-scp-RV55_A.elf] Error 13 
 
 
  
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
10.3 Scp_Region_Info Structure 
The struct scp_region_info_st is a pointer to a fixed address at SCP SRAM. It is used to pass parameter from 
bootloader to SCP before the IPI is ready. Remember to synchronize the bootloader (lk2), kernel (kernel-6.1), and SCP 
repository code. If the structure is not synchronized between repositories, the SCP may fail to start.. 
 
LK header:  
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/mediatek/mt6897/common/scp/scp_
plat_priv.h 
Kernel header: 
kernel/kernel_device_modules-6.1/drivers/misc/mediatek/scp/rv/scp_helper.h 
SCP header: 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897/platform/inc/main.h 
SCP boot: 
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/mt6897 /platform/boot55.S 
 
scp_region_info also defined in boot55.S. 
For example, if a new member called test ID is added in structure scp_region_info, the default value must be added in 
boot55.S.   
scp_region_info: 
.long 0x00000000 /* 0x04 ap_loader_start */ 
.long 0x00000000 /* 0x08 ap_loader_size */ 
... 
.long 0x00100000 /* 0x34 regdump size */ 
.long 0x00000000 /* 0x38 param start address */ 
.long 0x00000000 /* 0x3c ap_params_start  */ 
.long 0x12345678 /* 0x40 a test ID */ 
 
Access scp_region_info_st in SCP side, then it must be assigned to NULLPTR_BASE, for example  
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

## PDF物理页 69

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 69 
MT8676 SCP 
User Manual 
Confidential B 
10.4 SCP Recovery 
The Linux SCP driver will do SCP recovery when SCP crashes or does not respond. After the recovery process, SCP will be 
back to normal.  
 
Note: 
• When SCP is reset, SCP driver will clear the contents of SCP SRAM/DRAM, reset the RV55 processor in ATF, and re-execute the boot 
process. (Clearing all program text, bss, and data segments)  
• SCP only resets the processor but not peripherals (such as sensors, I2C modules, and other devices), so if necessary, peripheral 
drivers should reset themselves in the initial stage.  
• Developers of the Linux SCP driver API MUST follow the Reset notify flow in Section 10.4.2 and ensure that there is no 
communication between Linux driver and SCP during recovery. 
• When SCP restarts, Linux SCP driver will be reinitialized. Drivers related to the SCP driver must ensure that the restart process does 
not affect their functionality. 
 
 Recovery Behavior 
When the SCP is abnormal or unresponsive for a period of time, recovery will start. The SCP Kernel driver and SCP will enter 
a service interrupt state. During this time, the SCP kernel driver will reset the SCP and send SCP_EVENT_STOP to all registered 
notify chain drivers. Once the SCP is back to normal, the SCP Kernel driver will send SCP_EVENT_READY to all drivers. 
 
Figure 10-1. SCP recovery behavior 
 Recovery Notify Flow 
Developers of the Linux SCP driver MUST follow this SCP EVENT notify chain to ensure effective SCP recovery. 
• API: Receives notifications and invokes registered callback functions 
void scp_A_register_notify(struct notifier_block *nb) 
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
description 
To register callback function of notify chain 
parameters 
nb: callback function of notify chain 
callback parameters 
SCP_EVENT_READY:  when SCP initial done, start tasks corresponding to SCP 
SCP_EVENT_STOP: when SCP is going to be reset, stop tasks corresponding to SCP 
 
• Note: All callback functions may be called multiple times and MUST NOT be blocked. 
 
• Example 
– Please include <linux/notifier.h>, <mach/scp_helper.h> 
– Call scp_register_notify () with argument: SCP_EVENT_READY or SCP_EVENT_STOP 
 
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
 
Note: 
• Must register notification chain because the scp_ipi_send() may return error during recovery. 
• An error handling flow must be applied: 
– Stop calling scp_ipi_send() right after receiving SCP_EVENT_READY 
– Resume after receiving SCP_EVENT_READY. 
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
MT8676 SCP 
User Manual 
Confidential B 
11 Q&A List from Users 
11.1 How to Enlarge DRAM Region Code  
By default 1MB DRAM is reserved for storing DRAM code. In special case, if more space is needed for storing code, here is 
the method of modifification. 
1. Modify LK, enlarge 0x100000 
vendor/mediatek/proprietary/bootable/bootloader/lk2/platform/mediatek/common/scp/RV/scp_pl
at_priv.h 
#ifdef MTK_MINIMUM_SCP_DRAM_SIZE 
#define SCP_DRAM_IMG_SIZE       0x080000    // 0.5MB dram image 
#else 
#define SCP_DRAM_IMG_SIZE       0x100000    // 1.0MB dram image 
#endif 
 
2. Modify SCP , enlarge 0x00100000 
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

## PDF物理页 72

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 72 
MT8676 SCP 
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
MT8676 SCP 
User Manual 
Confidential B 
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
# SRC0208 MT8676_DMA_Buffer_Debug_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_DMA_Buffer_Debug_User_Manual_V1.0.pdf

SHA-256：f608befe136c7acb0bc77fad20b2c83974032a5fd53dcd12affbb7cd6dcd73b3

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0208.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2025-07-11 
MT8676 DMA Buffer Debug User Manual 
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
MT8676 DMA Buffer Debug 
 User Manual 
版本记录 
版本 日期 作者 描述 
1.0 2025-07-11 陈征南 正式版 
 
  
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
MT8676 DMA Buffer Debug 
 User Manual 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 概述 ··········································································································································································· 5 
1.1 目的·········································································································································································· 5 
2 缩略词 ······································································································································································· 6 
2.1 缩略词 ······································································································································································ 6 
3 何时需要查看 DMA BUF 信息 ··································································································································· 7 
3.1 系统 OOM 时 ··························································································································································· 7 
3.2 系统 Memory 可用量比较少 ·································································································································· 7 
3.3 系统 IOVA 分配失败 ················································································································································ 7 
4 IOVA 通过 DMA Heap Dump 指令获取 DMA BUF 信息 ····························································································· 8 
4.1 Total Memory Show ················································································································································· 8 
4.2 Heap Statistic···························································································································································· 9 
4.3 Dump Memory Info 以及 Processes Statistics ········································································································· 9 
4.4 Buffer Dump ··························································································································································· 10 
5 通过 DB 来获取 DMA BUF 信息 ······························································································································ 11 
5.1 找到 DMA BUF Info Dump 文件，不同类型 DB 的 DMA Heap Info 的存放 File 如下 ········································ 11 
5.2 找到 Top User 的区域可以看到用量最大的 Module,  需要对应 Module Owner 分析 ····································· 11 
5.3 找到 Process 用量 Top User,  若特定 Process 用量超过 DMA BUF 总量 80%，检查是否存在 leakage 等情况11 
5.4 如果不是以上 Case，则需要 DMA BUF Owner 检查，可能会是以下原因 ······················································ 12 
6 Hypervisor Android uos DMA BUF 信息 ·················································································································· 14 
7 Hypervisor Yocto sos DMA BUF 信息 ······················································································································· 15 
附件一 附加条款 ····························································································································································· 16 
 
 
 
 
 
 
 
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
MT8676 DMA Buffer Debug 
 User Manual 
图片目录 
图 3-1. dumpsys meminfo DMA BUF 占用量 ···························································································································· 7 
图 3-2. IOVA 分配失败示意 ······················································································································································· 7 
图 4-1. DMA BUF 总体信息概览 ··············································································································································· 8 
图 4-2. DMA heap 统计信息说明 ············································································································································· 9 
图 4-3. 进程使用 DMA BUF 状况统计信息说明 ······················································································································ 9 
图 4-4. 使用 DMA BUF 的进程名称统计 ·································································································································· 9 
图 4-5. 具体 DMA BUF 详细信息统计说明 ···························································································································· 10 
图 5-1. Debug name 用量 TOP user 信息统计 ························································································································ 11 
图 5-2. Process 用量 TOP user 信息统计 ································································································································ 12 
图 5-3. Debug name 用量 TOP user 信息统计 ························································································································ 12 
图 5-4. Device attach 信息 ······················································································································································· 13 
图 5-5. Process file count 示意 ················································································································································ 13 
 
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

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
Confidential B 
MT8676 DMA Buffer Debug 
 User Manual 
1 概述 
1.1 目的 
本文档主要介绍 MT8676 DMA BUF 相关 Debug 的方法，包括何时需要查看 DMA BUF 信息、DMA BUF 信息如何获
取、如何查看、如何分析等。 
 
  
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
MT8676 DMA Buffer Debug 
 User Manual 
2 缩略词 
2.1 缩略词 
表 2-1. 缩略词 
缩略词 解释 
DMA Direct Memory Access 
IOVA Input/Output Virtual Address 
PA Physical Address 
IOMMU Input–Output Memory Management Unit 
PID Process ID 
 
  
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
MT8676 DMA Buffer Debug 
 User Manual 
3 何时需要查看 DMA BUF 信息 
3.1 系统 OOM 时 
详细信息可参考小节 5.1。 
 
3.2 系统 Memory 可用量比较少 
例如，for Android，dumpsys meminfo 看到 DMA BUF 占用量较大，需要定位是哪些 modules 占用较大，这可以通过
第 4 章介绍的 CMD 主动抓取 DMA BUF 的详细信息，并参考第 5 章节定位具体 module。 
 
图 3-1. dumpsys meminfo DMA BUF 占用量 
 
3.3 系统 IOVA 分配失败 
当出现如下类似 log 时，表明对应某个 device 的 IOVA region 已不够用，此时有可能是某些 DMA BUF 有 leak 现象，
需要 DMA BUF 详细信息来检查。 
 
 
 
图 3-2. IOVA 分配失败示意 
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
MT8676 DMA Buffer Debug 
 User Manual 
4 IOVA 通过 DMA Heap Dump 指令获取 DMA BUF 信息 
抓取指令：adb root && adb shell cat /proc/dma_heap/all_heaps 
 
4.1 Total Memory Show 
 
图 4-1. DMA BUF 总体信息概览 
 
dma_heap 中的 memory 统计分为 3 类，三个值加起来就是 dma_heap（Buffer） total memory。 
 
• Buffer 占用的，上图的 DMA BUF buffer total 即是。 
• 由于 DMA BUF 的 exporter 不止 DMA 相关的 heap，所以针对 DMA BUF 的 total size 也做了拆分。Normal 
dma_heap 的 memory 统计，上图的 normal DMA heap buffer total 即是。非 dma_heap 生成的 DMA BUF 的 total 
memory， 上图的 non-dma_heap buffer total 即是。 
• Pool 缓存池缓存的 page，上图的 pool size 即是。目前只有 system heap pool 一个 pool (system heap & mtk_mm 
heap 共 pool，都会有加速效果)。 
• 未还给系统，也没给 pool 的待 free 的 pages，上图的 free list 即是，free list 是 GKI 提供，只会有 1 个。 
 
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
MT8676 DMA Buffer Debug 
 User Manual 
4.2 Heap Statistic  
 
图 4-2. DMA heap 统计信息说明 
 
这里展示的是各个 heap 的 buffer 总量，以及 page pool 里面缓存的 memory 的信息。 
4.3 Dump Memory Info 以及 Processes Statistics 
如果 user 没有设定好 debug name，在 leak 的时候比较难查。 我们会根据 rss 信息看哪个 process 能访问的 memory
最大，就 dispatch 给对应的 process owner。请务必设定好 DMA BUF 的 debug name。 
 
图 4-3. 进程使用 DMA BUF 状况统计信息说明 
 
为了更方便的查看此 statistics 数据，下图补上了 PID 名字方便做匹配。 
下图仅仅是示例，与上图对不上，实际情况中一定会对得上的。 
 
图 4-4. 使用 DMA BUF 的进程名称统计 
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
MT8676 DMA Buffer Debug 
 User Manual 
4.4 Buffer Dump 
buf_priv: 开头的是 buffer（heap buffer 结构，非 DMA BUF 结构）的 private 信息，这里面的信息和当前这块 DMA 
BUF 的 attachment 无关。其含义是：在 buffer 创建后，对应的 dom，第一次来分配 IOVA 的 attach info。 
attach[x]: 开头的是当前 DMA BUF 的 attachment 信息，只打印有 IOVA 的 attachment。 如果 attachment 不 unmap，
有可能导致 IOVA leak。 
 
图 4-5. 具体 DMA BUF 详细信息统计说明 
 
 
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
MT8676 DMA Buffer Debug 
 User Manual 
5 通过 DB 来获取 DMA BUF 信息 
当遇到 DMA BUF 用量过大导致的 SWT/HANG/OOM/KE 等 issues 时，系统会自动 cat /proc/dma_heap/all_heaps 抓取
现场 DMA heap 信息，并根据不同状况存放到不同的文件中，可以按照下面的步骤来找出需要优化或存在 leakage
的 module。 
 
5.1 找到 DMA BUF Info Dump 文件，不同类型 DB 的 DMA Heap Info 的存放
File 如下 
Hang: SYS_DMA_HEAP_RAW 
SWT/JE/NE: DMA BUF_HEAP_INFO 
OOM/KE: SYS_KERNEL_LOG(search keyword:"dma_heap: mtk_debug") 
 
5.2  找到 Top User 的区域可以看到用量最大的 Module,  需要对应 Module 
Owner 分析 
找 Debug name 用量 Top user (通常 case)。 多个编号不同的 debug name 会被认为是同一 
User。 用量最多且超过 DMA BUF 总量的 25%, 则需要检查是否存在 leakage 等情况。 
 
图 5-1. Debug name 用量 top user 信息统计 
 
5.3 找到 Process 用量 Top User,  若特定 Process 用量超过 DMA BUF 总量
80%，检查是否存在 leakage 等情况 
（1） 如果是 systemui 用量超限，需要 systemui tracking。 
（2） 如果是 surfaceflinger 用量超限，也没有抓到有效的 debug name， 需要 surface flinger tracking。 
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
MT8676 DMA Buffer Debug 
 User Manual 
 
图 5-2. Process 用量 top user 信息统计 
 
5.4 如果不是以上 Case，则需要 DMA BUF Owner 检查，可能会是以下原因 
（1） DB 没有抓到现场， 需要在完整 mobile log 中或者解析上一份的 DB log 进行检查。 
（2） TOP debug name user 使用 DMA BUF 的用量占比没到 25% 需 double confirm, 例如：Leakage 的 buffer 虽然   
size 都很小，但是数量巨大，top user 区域没有 count 到全部。 
 
图 5-3. Debug name 用量 top user 信息统计 
 
 
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
MT8676 DMA Buffer Debug 
 User Manual 
（3） DMA BUF kernel space leakage 
没有找到用量过大的 debug name or process user, 但是可以看到 kernel space 用量超限，例如： 检查 dump 
file 里的 buffer list 可以看到大多数都是 DISP attach 的，需要 display tracking。 
 
图 5-4. Device attach 信息 
 
（4） DMA BUF FD leakage 
FD leak 会导致该 process 的 file 大幅增加。 
 
 
图 5-5. Process file count 示意 
 
 
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
MT8676 DMA Buffer Debug 
 User Manual 
6 Hypervisor Android uos DMA BUF 信息 
 
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
MT8676 DMA Buffer Debug 
 User Manual 
7 Hypervisor Yocto sos DMA BUF 信息 
 
 
 
 
 
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
MT8676 DMA Buffer Debug 
 User Manual 
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
# SRC0209 MT8676_Hypervisor_AI_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_AI_User_Manual_V1.0.pdf

SHA-256：3e135840f638410cd8449ffc22020d6963e97b211adf4234ce6a145561eddf8d

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0209.html)

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
版本记录 
版本 日期 作者 描述 
1.0 2024-11-13 吴猛 正式版 
 
 
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 AI ··············································································································································································· 4 
 概述·········································································································································································· 4 
 名词解释 ······················································································································································ 4 
 架构/流程概览 ························································································································································ 4 
 APU 虚拟化··················································································································································· 4 
 AI 架构 ·························································································································································· 5 
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
MT8676 Hypervisor AI 
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
 APU 虚拟化 
 
更好的兼容性：APU 虚拟化后对 User 层使用 NeuroPilot 方式，和单系统保持一致。 
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
 AI 架构 
NeuroPilot 是一套由 MediaTek 开发的用于构建高效人工智能应用程序的软件工具和 API 套件；也是 MediaTek 人工
智能生态系统的核心。NeuroPilot 支持“Edge AI”，即把 AI 放在本地设备上执行，而不是在服务器上远程执行。这可
以使得 AI 任务的执行速度更快，同时也可以保护数据和隐私。 
 
 
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
以及每个 target 对模型 OP 的支持和限制条件等。需要访问在线文档的客户可以联系 CPM，以获得申请过程的帮
助。 
 
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
Enable ShowQoSInfo             ：adb shell setprop debug.neuron.runtime.ShowQoSInfo true 
Enable Kernel Log    :   adb shell "echo 15 > /sys/class/misc/apusys/log/klog" 
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
Enable uPLog                          ：adb shell "echo 5 > /proc/apusys_logger/log" 
Enable User Log                      ：adb shell setprop debug.apusys.loglevel 15 
Enable apusys_rv_xfile          ：adb pull /proc/apusys_rv/apusys_rv_xfile (用于解码 apusys_log) 
 
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
 APU Trace 分析示例 
通常使用 MediaTek APU Systrace 抓出并解析得到的 trace 文件有以下三个： 
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
– 对应 Task 执行期间的 MDLA/MVPU Cores 运行频率。 
– 还可以通过在 MDLA Core 上运行具有相同 pid 的 Tasks，以判断该 AI 算法是否是周期性执行的。 
 
 
图 1-5. APU 频率状态 
 
 特定 MediaTek 平台 NPU 支持的算子信息 
 
图 1-6. 支持的算子的集合关系  
 
如图 1-6 所示，MediaTek 平台 NPU 支持的算子，集合由小到大分为 3 个层面: 
 
• Pytorch/TensorFlow Ops -> TFLite Ops: 通过使用 mtk_converter tool 将原本的.pt 或 .pb 模型中的 Ops 转为 TFLite 
Ops。这步映射过程会进行初步的 Ops 过滤，挡住平台 NPU (HW) 不支持的 Ops。关于哪些 Pytorch/TensorFlow 
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
Ops 可以被 converter 工具识别并转为 Tflite Ops，可以参考 Online Document：Developer Tools -> Model 
Development -> Converter -> Converter Tool Supported Operators。 
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
MT8676 Hypervisor AI 
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
# SRC0210 MT8676_Hypervisor_Camera_ISP_Driver_Introduction_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Camera_ISP_Driver_Introduction_V1.0.pdf

SHA-256：7a235c6e676504868dce30bc90cd389de402a75c56e222157b6c17ed76fca6e5

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0210.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2025-07-11
MT8676 Hypervisor  
ISP Driver Introduction 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2025-07-11 宋清华/汪锦航 正式版本 
 
  
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图目录 ··············································································································································································· 3 
1 ISP Driver 概述 ·························································································································································· 5 
2 Camsys (P1) ······························································································································································· 6 
2.1 架构·········································································································································································· 6 
 Camsys Kernel Driver ···································································································································· 6 
 Camsys Userspace ········································································································································· 7 
2.1 Camsys Media Device 拓扑结构 ······························································································································ 8 
2.2 Camsys Userspace 控制流程 ··································································································································· 9 
2.3 Camsys Debug ·························································································································································· 9 
 Camsys 关键 Log ··········································································································································· 9 
 Camsys 常见问题 ······································································································································· 10 
 Camsys 常见 Debug 指令 ··························································································································· 12 
3 Imgsys(P2) ······························································································································································· 14 
3.1 架构········································································································································································ 14 
3.2 Imgsys 用户空间 ···················································································································································· 14 
3.3 Imgsys 内核空间 ···················································································································································· 17 
3.4 Imgsys Debug ························································································································································· 18 
 Imgsys 关键 Log ·········································································································································· 18 
 Imgsys 常见问题 ········································································································································· 19 
附件一 附加条款 ····························································································································································· 21 
 
图目录 
图 1-1. Camera 架构概述 ·························································································································································· 5 
图 2-1. Camsys 架构图 ······························································································································································· 6 
图 2-2. 简化版 Camsys 媒体拓扑 ·············································································································································· 8 
图 2-3. PipeMgr 控制流程 ························································································································································· 9 
图 3-1. Imgsys 软件架构 ·························································································································································· 14 
图 3-2. Imgsys enque/deque 流程 ··········································································································································· 15 
图 3-3. User 使用 imgstream 流程 ·········································································································································· 16 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
图 3-4. Imgsys V4L2 topology ··················································································································································· 17 
 
 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
1 ISP Driver 概述 
 
 
图 1-1. Camera 架构概述 
 
MW core level 包含很多的 Imagenode 与底层 driver 进行交互，与 ISP 相关的 Imagenode，我们根据功能把它们区分
为 P1Node (pass1 node) 和 P2Node (pass2 node)。 
• Camsys 作为 pipeline 中 P1Node 的驱动组件，负责从 Sensor 接收图像，并主要具备 Raw 域的图像处理能力。 
• Imgsys 作为 pipeline 中 P2Node 的驱动组件，负责对从 P1 接收到的图像进行进一步处理，能够在 YUV 域对图像
进行降噪和缩放等操作。 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
2 Camsys (P1) 
2.1 架构 
 
图 2-1. Camsys 架构图 
 Camsys Kernel Driver 
Camsys Kernel Driver 是为 MediaTek 平台上的摄像头系统硬件组件设计的内核级驱动。 它基于 V4L2 和 Media 
Framework 框架实现，并整合了 Linux Kernel Upstream 驱动，向 userspace 提供了标准的 V4L2 接口，确保在不同平
台下驱动的兼容性。 
Platform Drivers 
每个 Camsys 硬件组件都被设计为独立的 Platforma Driver ，包括 sensor interface 、raw、mraw（miniraw）和 camsv
（用来收图的 HW，不对图像进行处理，例如用来收 YUV sensor 数据）。这种模块化设计便于灵活、可扩展地管理
和维护各个组件，确保硬件控制的稳定与高效。 
• 整合 Linux Kernel Upstream 驱动: 为了保证 Camsys 内核驱动与 Linux Kernel 其他组件的交互，camsys 驱动实现
了以下功能： 
– 电源管理：通过 device-link 和运行时电源管理（PM_runtime），实现摄像头系统的高效、可靠电源控制。 
– 内存访问：基于 DMA 框架，支持内存设备操作，包括 SMMU 集成和 SMI 配置，确保数据传输的高效与安
全。 
– Media Framework 和 V4L2：基于 Media Framework 和 V4L2 接口实现 Camsys 驱动，允许上层 MiddleWare
通过这些标准接口与摄像头系统交互。 
• 标准驱动与用户接口：Camsys 内核驱动为媒体操作提供了一套标准的驱动和用户接口：  
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
– 与厂商 Sensor 驱动协同工作，实现从硬件到应用层的无缝集成。 
– 为应用层提供统一接口，便于开发者开发和集成媒体相关应用。  
 Camsys Userspace 
为了便于管理 camera pipeline 并控制从 Sensor 出图，Camsys Userspace 部分主要提供以下功能： 
• 简化 V4L2 操作 
• Pipeline 创建 
• 设定图像格式 
• 控制 Streaming 
 
Camsys Userspace 主要包括两部分： 
• SensorPipe： 
– 一对一关系：每个 Sensor 对应一个 SensorPipe. 
– 流控制：控制 Sensor Stream ON/OFF 
– 读写数据：SensorPipe 负责图像和统计值 enque 和 deque. 
– 事件轮询：支持 Start of Frame (SOF)、ESD Recovery 等事件的轮询，便于同步与时序控制。 
• PipeMgr： 
– 查找设备：发现 camsys 内部设备及 Camsys 驱动的拓扑结构 
– 拓扑建立：通过 V4L2 Media Framework 建立 pipeline 的拓扑结构，用于处理和读取图像数据。 
– 简化应用控制：简化 V4L2 应用控制流程，提升开发效率. 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
2.1 Camsys Media Device 拓扑结构 
 
图 2-2. 简化版 Camsys 媒体拓扑 
 
Camsys 媒体拓扑是  Camsys 框架下 camera pipeline 的结构化表达。它由多个子设备组成，包括  sensor、sensor 
interface、sub-device 和 Video Device。这些组件通过硬件允许的数据流链路互联，简化了 ISP 的控制流程。 
• Sub-Devices：在 Camsys Topology 中，每个 sub-device 在图像数据处理流程中承担特定任务： 
– Sensor Interface：为 Sensor 及各类 Camsys 图像处理引擎提供接口，是 Sensor 与处理单元之间的桥梁，负
责原始图像数据的传递。 
– 图像处理引擎：包括 raw engine、camsv engine 和 mraw engine，各自具备不同的处理能力。 
• Video Device：映射 DMA Port 口，用于硬件读写数据 
– 图像：每个 DMA Port 作为一个 Video Device，读写图像数据，并可进行格式设定，确保每路视频流可按需
配置像素格式和分辨率。 
– 统计值：用于采集和处理统计数据，主要用于 3A（自动曝光、自动对焦、自动白平衡）算法。 
• Link：用于 sub-device 和 video device 之间的连接。 
– 创建：链路由驱动自动创建，反映硬件允许的数据流路径. 
– 配置：用户可根据应用需求启用或禁用已创建的链路，实现灵活的数据流配置。  
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
2.2 Camsys Userspace 控制流程 
Camsys userspace 控制流程是基于标准 V4L2 应用控制流程实现，为简化操作，Camsys 用户空间提供了如图 2-3 所
示的控制流程： 
 
图 2-3. PipeMgr 控制流程 
Pipemgr 关键控制流程说明： 
1. Pre Config 
– 查询 ISP 能力 
– 根据上层带的格式和图像大小构建 camsys 的 Topology 
2. Config 
– 设定 pre config 阶段的 topology 
3. Start 
– 开启 camsys  
4. Enque/Deque 
– 图像/统计值 
– Sensor 设定 
– 切换控制 
5. Stop 
– stream off sensor 和关闭 camsys 
2.3 Camsys Debug 
 Camsys 关键 Log 
User space: 
1. start: 
06-24 04:39:27.636  1148  1343 D MtkCam/PipeMgr: [streamOn] node: |80[mtk-cam camsv-0 
main-stream]|83[mtk-cam camsv-0 main2-stream]|81[mtk-cam camsv-0 ext-stream]|82[mtk-cam 
camsv-0 main1-stream]|84[mtk-cam camsv-0 main3-stream] requestBuf(1) 
 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
2. enque: 
06-24 04:39:27.642  1148  4290 D MtkCam/SensorPipe: [enque] [2]sensorId(15)_m02 
jobId(0)_(-2|0) requestFd(617)_released portSel(0) fs(-) nodeIds( 1:32 ) {scene(NORMAL) 
maxExpNum(0) expNum(0) expOrder(SL) type(NONE) } SensorCtrl{exp_cnt(0) flk(0) fps(0) 
test_ptn(-1,0_-1/-1/-1/-1) SensorScenario(-1) extend(-) awbGain(0) master(0)} mtk-cam 
camsv-0 timeout:19000ms BufInfo{ 32-0_616 } 222 
 
3. deque: 
06-24 04:39:27.718  1148  4424 D MtkCam/SensorPipe: [deque] sensorId(15) jobId(0)_(-2|0) 
requestFd(617) state(DONE) poll(1) hwDebugStatus(0x0) nodeIds( 1:32(NO_ERROR):1 ) 
 
4. sof event: 
06-24 04:39:27.692  1148  4447 D MtkCam/SensorPipe: [waitSof] sensorId (15) frame sync event(0) sof(1) dummy(0) 
 
5. stop: 
06-24 04:39:27.772  1148  1148 D MtkCam/PipeMgr: [streamOff] node: |80[mtk-cam camsv-0 
main-stream]|83[mtk-cam camsv-0 main2-stream]|81[mtk-cam camsv-0 ext-stream]|82[mtk-cam 
camsv-0 main1-stream]|84[mtk-cam camsv-0 main3-stream] releasebuffer(1) 
 
Kernel space: 
1. CTX stream on: 
[ 8625.435751] CTMThread8-00: mtk-cam 
1a000000.camisp:[name:mtk_cam_isp7sp&]mtk_cam_ctx_stream_on:ctx_1 
 
 
2. CSI stream on: 
[ 8625.441963] camsv_worker-0: seninf 1a00e000.seninf-top:seninf-csi-port-14: 
[name:mtk_cam_isp7sp&][seninf_csi_s_stream] enable(1) 
 
3. CTX stream off: 
[ 8625.474812] binder:1118_3: mtk-cam 1a000000.camisp: 
[name:mtk_cam_isp7sp&]mtk_cam_ctx_engine_off: ctx-0 pipe 0x8 engine 0x10 
 
4. CSI stream off: 
[ 8625.475195] binder:1118_3: seninf 1a00e000.seninf-top:seninf-csi-port-2: 
[name:mtk_cam_isp7sp&][seninf_csi_s_stream] enable(0) 
 
 Camsys 常见问题 
vsync timeout 
kernel log: 
06-21 14:15:51.786 <6>[ 1200.191375][T609892] kworker/5:2: mtk-cam 1a000000.camisp: 
[name:mtk_cam_isp7sp&]mtk_cam_watchdog_monitor_vsync: vsync may timeout, last ts = 
1198702038899 
06-21 14:15:55.883 <6>[ 1204.287673][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: [name:mtk_cam_isp7sp&]clk-fmeter-isp(416000) clk-fmeter-csi0(26000) 
clk-fmeter-csi1(0) clk-fmeter-csi2(0) clk-fmeter-csi3(312000) clk-fmeter-csi4(0) clk-
fmeter-csi5(0)  
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
06-21 14:15:55.883 <6>[ 1204.287688][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: 
[name:mtk_cam_isp7sp&]MipiRx_ANA6:CDPHY_RX_ANA_SETTING_1:(0x04340244),CDPHY_RX_ANA_0/_1/_2
/_3/_4/_5/_6/_7/_8:(0x000747d3)/(0x00420844)/(0x44000b0b)/(0x02000c0c)/(0x01010b0b)/(0x700
00044)/(0x04090909)/(0x04090909)/(0x203f0400) 
06-21 14:15:55.883 <6>[ 1204.287699][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: 
[name:mtk_cam_isp7sp&]MipiRx_ANA6:CDPHY_RX_ANA_AD_0/_1:(0x33)/(0x0),AD_HS_0/_1/_2:(0x0)/(0
x0)/(0x0) 
06-21 14:15:55.883 <6>[ 1204.287712][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: 
[name:mtk_cam_isp7sp&]MipiRx_ANA7:CDPHY_RX_ANA_SETTING_1:(0x05530200),CDPHY_RX_ANA_0/_1/_2
/_3/_4/_5/_6/_7/_8:(0x000707d3)/(0x00420844)/(0x44000b0b)/(0x02000b0b)/(0x01010303)/(0x700
00044)/(0x04090909)/(0x04090909)/(0x203f0400) 
06-21 14:15:55.883 <6>[ 1204.287768][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: 
[name:mtk_cam_isp7sp&]MipiRx_ANA7:CDPHY_RX_ANA_AD_0/_1:(0x33)/(0x0),AD_HS_0/_1/_2:(0x0)/(0
x0)/(0x0) 
06-21 14:15:55.883 <6>[ 1204.287781][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: 
[name:mtk_cam_isp7sp&]Csi3_Dphy_Top:LANE_EN/_SELECT:(0xf01)/(0x80403102),CLK_LANE0_HS/1_HS
:(0x10090000)/(0x10090000),DATA_LANE0_HS/1_HS/2_HS/3_HS:(0x30800400)/(0x30800400)/(0x30800
400)/(0x30800400),DPHY_RX_SPARE0:(0xf1) 
06-21 14:15:55.883 <6>[ 1204.287793][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: 
[name:mtk_cam_isp7sp&]Csi3_Dphy_Top:DPHY_RX_DESKEW_CTRL/_TIMING_CTRL/_LANE0_CTRL/_LANE1_CT
RL/_LANE2_CTRL/_LANE3_CTRL:(0x3f000904)/(0x00030000)/(0x00700000)/(0x00700000)/(0x00700000
)/(0x00700000) 
06-21 14:15:55.883 <6>[ 1204.287802][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: 
[name:mtk_cam_isp7sp&]Csi3_Dphy_Top:DPHY_RX_DESKEW_IRQ_EN/_CLR/_STATUS:(0x80000000)/(0x000
00000)/(0x00000000),DPHY_RX_IRQ_EN/_STATUS:(0x0000000f)/(0x00000000) 
06-21 14:15:55.883 <6>[ 1204.287809][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: 
[name:mtk_cam_isp7sp&]Csi3_Cphy_Top:CPHY_RX_CTRL:(0x0),CPHY_RX_DETECT_CTRL_POST:(0x1249241
0),CPHY_RX_IRQ_EN/_STATUS:(0x80000100)/(0x00000000) 
06-21 14:15:55.883 <6>[ 1204.287818][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: 
[name:mtk_cam_isp7sp&]TOP_CTRL2:(0x8),TOP_MUX_CTRL_0/_1/_2/_3/_4/_5:(0x3020106)/(0x7060504
)/(0xb0a0908)/(0xf0e0d0c)/(0x13121110)/(0x1514),debug_vb:1,debug_ft:7 
06-21 14:15:55.883 <6>[ 1204.287827][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: [name:mtk_cam_isp7sp&]before clear cam mux0,recSize = 0x0,irq = 
0x0|0x0 
06-21 14:15:55.883 <6>[ 1204.287836][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: 
[name:mtk_cam_isp7sp&]SENINF6_CSI2_PRBS_EN/_OPT:(0x0)/(0x1f0000),CSIRX_MAC_CSI2_EN/_OPT/_I
RQ_STATUS/_MULTI_ERR_F_STATUS:(0xf)/(0xb6)/(0x0)/(0x0),SENINF_CSI2_IRQ_STATUS:(0x0),CSIRX_
MAC_CSI2_RESYNC_MERGE_CTRL:(0x106) 
06-21 14:15:55.883 <6>[ 1204.287845][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-6: [name:mtk_cam_isp7sp&]total_delay:0ms/7ms,SENINF6_PkCnt:(0x0),ret=0 
06-21 14:15:56.274 <6>[ 1204.679029][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-9: [name:mtk_cam_isp7sp&]total_delay:7ms/7ms,SENINF6_PkCnt:(0x0),ret=-
1 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
06-21 14:15:56.274 <6>[ 1204.679051][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-9: [name:mtk_cam_isp7sp&][sensor9][mtk_cam_seninf_debug] 
CSI_MAC6_CSI2_IRQ_STATUS/_MULTI_ERR_F_STATUS:(0x0)/(0x0),SENINF_CSI2_IRQ_STATUS:(0x0),C/DP
HY_RX_IRQ_STATUS:(0x0)/(0x0) 
06-21 14:15:56.274 <6>[ 1204.679061][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-9: 
[name:mtk_cam_isp7sp&]*SENINF0_MUX_CTRL0/_CTRL1/_IRQ_STATUS/_MUX_SIZE/_ERR_SIZE/_EXP_SIZE:
(0x1)/(0x1f0308)/(0x0)/(0x0)/(0x0)/(0x0) 
06-21 14:15:56.274 <6>[ 1204.679075][T615359] kworker/5:5: seninf 1a00e000.seninf-
top:seninf-csi-port-9: 
[name:mtk_cam_isp7sp&]cam_mux_3_CTRL/RES/ERR/OPT/IRQ:(0x8380)/(0x0)/(0x5a20f00)/(0x0)/(0x2
1009e83)/(0x0),tag03_vc/_dt(0x83000000/0x9e000000),tag47_vc/_dt(0x0/0x0) 
 
以上 log 是发生 vsync timeout 后，Kernel log 里面关于 seninf dump status log，出现 vsync timeout 表示在一段时间里
面，camsys 没有收到 vsync irq，意味着 camsys 无法正常出图，发生这种问题，通常检查上面 log 红色部分： 
1. csi irq status[keyword:_IRQ_STATUS], 正常 csi irq status 为 0x324 结尾，表示有 FS/FE, ECC 校验正确，上面 log csi 
irq status 为 0，表示没有收到任何数据； 
2. 如果 csi irq status 不正常， 
a) 需要再检查 csi clk [keyword: clk-fmeter-csi (使用哪个 csi port，对应看哪个 clk)]，正常是大于等于 312M，
上面 log csi clk 正常； 
b) 如果是 DPHY，需要检查是否有 SOT Error [keyword: DPHY_RX_IRQ_EN/_STATUS], 如果 status 非 0，表示有
SOT Error 出现，可能 clk 和 data 没有正常识别，常见原因是没有检测到 Lpstatus，需要 sensor 端检查信
号是否符合 MIPI-DPHY 规范； 
c) 如果上面 csi clk 正常并且没有 SOT Error，说明 sensor 没有数据或者数据异常，需要进一步分析 sensor
端； 
3. 如果 csi irq status 正常， 
a) 看 seninf 后端 cam mux 是否有正常按照 vc/dt 分离出数据[keyword: recSize =], recSize 应该等于每一路
vc/dt 的数据大小，后面 irq 正常为 0x100，如果这里没有数据，需要检查对应 sensor 端 vc/dt 是否有数
据； 
b) 如果 cam mux 数据也正常，但仍然有 vsync timeout error 出现，则需要进一步分析，常见情况有系统
performance 太差，导致 vsync irq 没有被及时处理，camsys 的 watchdog 也会出现 vsync timeout error。 
 
 Camsys 常见 Debug 指令 
查看 seninf status: 
adb shell cat /sys/devices/platform/soc/1a00e000.seninf-top/status 
 
 
 
 
 
 
 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
以下是 MT8676 seninf status dump： 
 
 
seninf dbg log （打开 seninf dbg level log，可以看到更详细的 seninf 模块 log） 
adb shell "echo 1 > /sys/module/mtk_cam_isp7sp/parameters/seninf_dbg_log" 
 
camsv dbg log （打开 camsv dbg level log，可以看到更详细的 camsv 模块 log，比如 fmt/size 设定等） 
adb shell "echo 1 > /sys/module/mtk_cam_isp7sp/parameters/debug_cam_sv" 
 
detailed dbg log （打开整个 camsys 详细 log，可以看到每个 request 的运行情况以及 hw irq 的信息） 
adb shell "echo 0xffffffff > /sys/module/mtk_cam_isp7sp/parameters/debug_opts" 
 
pipemgr dbg log （打开 camsys userspace 部分详细 log，可以看到详细的上层 V4L2 控制流程） 
adb shell “setprop vendor.debug.pipemgr.loglevel 4” 
 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
3 Imgsys(P2)  
3.1 架构 
 
 
图 3-1. Imgsys 软件架构 
 
imgsys 模块用于控制 P2 hardware(HW)，它的主要功能是进行 ISP 后处理。imgsys 模块包括两个部分：用户空间和
内核空间，用户空间部分命名为 Imgstream，负责与 middware(MW) 和内核通信。ImgStream 支持多用户，MW 可
以创建多个 ImgStream 实例。内核空间部分负责控制 P2 硬件模块，包括用于缩放的 TRAW、用于降噪的 DIP 和用
于调整大小、裁剪和旋转的 PQDIP。用户空间通过 ioctl 与内核空间通信。  
3.2 Imgsys 用户空间 
ImgStream 是硬件抽象层。它是 MW 和硬件之间的交互桥梁。ImgStream 负责为 MW 提供接口来控制硬件， V4L2 
ioctl 并不适合 MW，因此 ImgStream 对此做了封装之后向上提供了同时处理不同硬件的友好界面。Imgsys 是一个
M2M（内存到内存）驱动程序，它通过使用 v4l2 框架负责处理多用户的需求。Imgsys 有许多硬件模块，包括
TRAW，DIP 和 PQDIP，用户可以根据设置同时使用硬件模块的独立和直连模式。用户可以通过使用 Imgstream 实现
不同的硬件组合来做大小调整、旋转、翻转、降噪等操作。  
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
 
图 3-2. Imgsys enque/deque 流程 
 
ImgStream 提供了 init，enque, deque，uninit 接口供 MW 调用来控制 imgsys 的 HW。详细介绍如下： 
 
• Init 头文件：ImgStream.h, 函数原型：virtual MBOOL init(const ImgInitParam& rUserParam); 
init 的接口 API 会 open video device 和 sub-device，创建 frame callback thread 和 request callback thread。当第一
个 user call imgsteam 的 API 时，就会去设置 HW 的 stream on。 
 
• Enque 头文件：ImgStream.h，函数原型：virtual MBOOL enque(const std::shared_ptr<const ImgParams>& 
pParams); 
enque 的接口 API 会把 MW 传入的参数转为 Imgstream 内部的参数，Imgstream 首先 enque buffer 到 Kernel，
Kernel 将会保存这些 enque 进来的 buffer。等到 Imgstream enque request 到 Kernel 的时候，Kernel 就会把
buffer 和 request 一起带给 driver 做 enque。 
 
• Deque 头文件：V4L2VideoDevice.h, 函数原型：int dequeBuffer(); 
deque 依赖 init 阶段创建的 frame callback thread 和 request callback thread，监测从 Kernel 送到 user space 的
frame done callback and request done callback 信号。当 frame done callback thread 接收到信号时，就会 call MW 
注册给 Imgstream 的函数去通知 MW。当 request callback thread 接收到信号后，会 call kernel 的 ioctl 去 deque 
buffer 和 request, 并且 call MW 注册的 callback 函数。 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
 
• Uninit 头文件：ImgStream.h，函数原型：virtual MBOOL uninit(); 
当一个 ImgStream 的 user call uninit 接口 API 时，会去 free 这个 user 申请的 resource buffer，当最后一个 user 
call uninit 接口时，会去设置 HW 的 stream off。 
 
图 3-3. User 使用 imgstream 流程 
 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
Imgsys User 控制 API 流程如图所示，User 只需 call imgstream 提供的简易 API 接口，即可实现使用 imgsys HW 做图
像后处理的功能。 
3.3 Imgsys 内核空间 
 
图 3-4. Imgsys V4L2 topology 
 
Imgsys topology 描述了 Imgsys 框架的 pipeline 结构。它由一个 sub-device 和各种 video device 组成。topology 通过
硬件之间的数据流的链路相互连接。 
 
• Sub-Device 
imgsys 架构包含一个名为 MTK-ISP-DIP-V4L2 的 sub-device，专为图像后处理任务而设计。该 sub-device 作为数字图
像处理（DIP）硬件的接口，利用 V4L2 框架实现对图像处理操作的内核级控制。它支持一系列功能，包括色彩校正，
降噪和图像增强，以产生卓越的图像质量。统一的 sub-device 简化了与用户空间应用程序的集成，简化了开发人员
对于复杂 camera pipeline 的控制。 
 
• Video Device 
在 imgsys 架构中，每个 dma 端口是一个 video device ，用于描述输入和输出端口，如 img2o、TIMGI、Imgi。由于
imgsys 中 dma 端口太多，用户空间单独控制每个 video device 会导致频繁调用 ioctl，MPIS 会比较高。因此设计了
一个描述所有 dma 端口的 video device，命名为 SIGDEVN，它在每个队列中只被用户空间调用一次。 
 
 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
• Links 
链路描述了媒体拓扑中子设备与视频设备之间的连接。在 imgsys 拓扑中，只有一个 sub-device 和几个 video 
device。在 probe 启动阶段，在 sub-device 和 video device 之间建立链路。 
 
3.4 Imgsys Debug 
 Imgsys 关键 Log 
Imgsys 在每个阶段会印出一些关键的 log，便于发生问题时的 debug。 
• Init 
ImgStream: [ImgStream::init] + mMemMode=0 userid=305f33707276(vrp3_0) 
this:0xb400007d86b6fa00 
{ .mMaxNumOfInflightRequests=6 .mSecTag=0 .mBatchNum=0 .mMaxFps=30 .mMaxInOutWidth=1280 .m
MaxInOutHeight=720 .mPriority=-19 .mLowLatency=0 .mInitDLWKBuf=0 .mIsCapture=0 } 
mThisValue(0xb400007d86b6fa00) 
 
• Enque to Kernel 
ImgStreamMgr: [DECKEY][enque] Queue Request End(954us) 
{ vrp3_0   .tid=1476,4424 .track=100000100000000 } .request={ .requestFD=294 .state=2 
#A=05-12 08:11:59.663925#B=05-12 08:11:59.663982#C=05-12 08:11:59.664004#D=05-12 
08:11:59.664008#E=05-12 08:11:59.664920#F=05-12 08:11:59.463050#G=05-12 
08:11:59.463129#H=05-12 08:11:59.463237 }  
ImgParams={ .mRequestNo=0 .mFrameNo=50 .mvFrameParams[2]={ { .mvIn[3] .mvOut[1] .mSyncToke
nNotifyList={ 189 } .mSyncTokenWaitList={ 187 195 } } 
{ .mvIn[6] .mvOut[3] .mSyncTokenNotifyList={ 194 } .mSyncTokenWaitList={ 189 } } } } 
VNDescBuf={ .fd=267 .offset=4951424 .bufsize=309464 .bufva=7d4847dd80 } 
CtrlMetaBuf={ .fd=266 .offset=436224 .bufsize=27264 .bufva=7d60e22800 } 
this=b400007d86b6fa00 
 
• Callback from Kernel 
ImgStream: [DECKEY][handleRequestSuccess] request done 
{ vrp3_0   .tid=1476,4424 .done=0 .track=1050500010b0000 .request={ .requestFD=294 .state=
0 #A=05-12 08:11:59.663925#B=05-12 08:11:59.663982#C=05-12 08:11:59.664004#D=05-12 
08:11:59.664008#E=05-12 08:11:59.664920#F=05-12 08:11:59.666539#G=05-12 
08:11:59.463129#H=05-12 
08:11:59.463237 } .ImgParams={ .mRequestNo=0 .mFrameNo=50 .mvFrameParams[2]={ { .mvIn[3] .
mvOut[1] .mSyncTokenNotifyList={ 189 } .mSyncTokenWaitList={ 187 195 } } 
{ .mvIn[6] .mvOut[3] .mSyncTokenNotifyList={ 194 } .mSyncTokenWaitList={ 189 } } } } } 
 
• Uninit 
ImgStream: [ImgStream::uninit] + userid=305f33707276(vrp3_0) this:0xb400007d86b6fa00 
 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
 Imgsys 常见问题 
下面列出 Imgsys 测试阶段遇到的比较常见的问题： 
 
• ImgStream Requset Guard Timeout 
ImgStream request guard 是 imgsys 内部一个监测器，监测一个 request 从 enque 到 callback 执行结束的整个过程是
否超时，目前一个 request 的超时时间设置为 4s, 超过这个时间就会触发 aee。 
如果发生了 request timeout 要根据关键 log 分析当前超时的 request 卡在哪一个阶段,再去重点看那个阶段的 log。 
比如下面的例子就是卡在从 kernel deque 后，再往上层 MW callback 的阶段。 
imgstream-TimeGuard: [RequestGuard] executed 13094 ms(>=4000) TIMEOUT; FORCE ABORT; {May 
block on callback to wpepq66} track=0x1060600010b0000 suspect=User<wpepq66> 
R={ wpepq66  .tid=31531,20081 .done=0 .track=1060600010b0000 .request={ .requestFD=897 .st
ate=0 #A=05-11 10:15:15.716984#B=05-11 10:15:15.743041#C=05-11 10:15:15.745507#D=05-11 
10:15:15.745515#E=05-11 10:15:15.768573#F=05-11 10:15:15.805129#G=05-11 
10:15:15.819603#H=05-11 10:15:15.742877 } } 
(onTimeout){#346:vendor/mediatek/proprietary/hardware/mtkcam-
core/hw/imgstream/src/utils/guard/RequestTimeGuard.cpp} 
 
• HW Timeout 
HW timeout 也会导致 ImgStream request guard timeout，这是卡在 Imgstream enque kernel 后没有在超时时间内
deque，Kernel log 会 dump 超时的 HW 的 register，从 dump 的 register 分析 HW timeout 的原因： 
 
 
• Translation Fault 
Translation fault 是 iommu 通过虚拟地址转物理地址过程中发生了 error，Kernel log 会印出 SMMU/IOMMU 
translation iova fail 
 
 
 
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
MT8676 Hypervisor 
ISP Driver Introduction 
Confidential B 
解题过程: 
1. 从 smmu/iommu log 确认是哪一个 HW 使用的哪一个 DMA port 口产生了 TF error; 
2. 从 log 里找到出问题的 va 值，确认最接近此 iova 的 buffer 为哪一块； 
3. 定位 buffer 后寻找其异常点（buffer 分配太小/HW 使用前提早释放）。 
 
 
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
MT8676 Hypervisor 
ISP Driver Introduction 
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
# SRC0211 MT8676_Hypervisor_Camera_MW_Introduction_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Camera_MW_Introduction_V1.0.pdf

SHA-256：52452e66baedfe2e6395db8cdb0afdd4c60a306f699d7bab5e84075ac95f2f21

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0211.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2025-07-11
MT8676 Hypervisor Camera 
MV Introduction 
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
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2025-07-11 项健 正式版 
  
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
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 Hypervisor Camera ···················································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 Camera Turbo ··························································································································································· 5 
 架构 ······························································································································································ 5 
 控制流程 ······················································································································································ 6 
1.3 Camera Virtualization ··············································································································································· 8 
 架构 ······························································································································································ 8 
1.4 Debug Share ····························································································································································· 8 
 Log ································································································································································· 8 
 Debug Share ················································································································································ 11 
附件一 附加条款 ····························································································································································· 13 
 
图片目录 
图 1-1.架构概述 ········································································································································································ 4 
图 1-2. Camera MW 架构 ·························································································································································· 5 
图 1-3. MW 类图 ········································································································································································ 6 
图 1-4. MW 类图 ········································································································································································ 7 
图 1-5. Camera Virtualization 架构 ············································································································································ 8 
 
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
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
1 Hypervisor Camera 
1.1 概述 
 
图 1-1.架构概述 
Camera Turbo 主要分为以下几个部分： 
• 入口层（Entry）：是进入 Camera MiddleWare 的入口。不同的操作系统可以通过调用入口层的代码通过适配层
适配 Camera MiddleWare。 
• 定制层（Custom）：通过这一层，客户可以执行定制 3rd plugin, CameraId 等操作。 
• 接口层（IF）：由入口层使用的接口层。在这里生成相机会话和原生相机的逻辑。接口层主要实现请求和配置
open/close/config/request 相关操作的流程框架。 
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
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
• 核心层（Core）：它主要与驱动程序通信，给接口层提供 open/close/config/request 等操作, 发送请求并获取结
果，最后通过接口层 callback 回调 processResult 到 APP。 
 
1.2 Camera Turbo  
 架构 
 
图 1-2. Camera MW 架构 
 
Camera Turbo 的主要架构图包括入口层、接口层和核心层。定制层主要供客户使用。如果不使用，可以直接绕过。  
• 入口层 主要由 Camera 和 CameraProvider 组成。CameraProvider 主要向上层提供相机列表，并获取和控制相机
的属性。Camera 主要提供接口给上层，以控制相机传感器的控制行为。  
• 接口层 主要是管线，它是构建底层节点连接关系的管理器。ImageProc 主要便于回调，为客户提供定制行为。
同时，客户也可以通过 ImageProc 定制管线。 
• 核心层 主要由 ImageNode 的子类组成。这些子类与底层驱动交互，对请求实施不同的操作。例如， FdNode 主
要用于面部识别，captureNode 用于相机功能，MCNRNode 用于图像处理，最终结果将通过 ImageNode 回调传
递到接口层。  
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
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
 控制流程  
 
图 1-3. MW 类图 
 
图 1-3 主要是入口层和定制层之间的 control flow。主要是上层通过 CameraProvider 的 open 接口获取 Camera，
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

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
 
图 1-4. MW 类图 
 
接口层（IF layer）与核心层（Core）之间的交互逻辑主要是上层的 CameraProvider 的 open 接口将调用 
NativeCameraManager。NativeCameraManager 分配可以在底层操作的 NativeCamera。每个 NativeCamera 将具有管
线属性，这决定了每个 NativeCamera 实际运行的流程。Camera 的配置将创建一个新的 CameraSession。
CameraSession 创建自己的 Pipeline。连接的 ImageProc 保存在 Pipeline 中。ImageProc 创建相应的 ImageNode。每个 
CameraSession 都有自己的 ImageProc 列表。用户可以在 ImageProc 中执行定制行为。ImageProc 使用回调接口
MediumHandler。ImageNode 的回调会使用 ImageProc。 
 
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
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
1.3 Camera Virtualization  
 架构 
 
图 1-5. Camera Virtualization 架构 
 
Hypervisor 系统 guest (Android) + host (Yocto) 同时在跑，对 guest 和 host 系统的操作也是单独进行。Android 端有一
个 guest camerahalserver 进程，Yocto 端有一个 host camerahalserver 进程。APP 在 Android 端，camera 底层在 Yocto
端 (mw/sensor/driver)，Android 端的 camerahalserver 以 guest 角色从 Yocto 端 camerahalserver 拿图。Yocto 端的
camerahalserver 要先跑起来，Android 的 camera APP 才能打开。当需要重启 camerahalserver 时，也是 Yocto 先重
启，然后再重启 Android 的 camerahalserver。 
 
1.4 Debug Share  
 Log 
// open/config 阶段 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_CAMERAPROVIDER] [open] open cameraId:0 userId:0 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_ROOTNODE] [0](  52)[RootNode] ator 
camerahalserver:  0x7fa1cc2-0x [2370][RpcCamera] [RpcCamera] Cam::0, userId 0, logEn 0, 
ctor 0x7f44aa5240 
camerahalserver:  0x7fa1cc2-0x [2336][TINY_NATIVECAMERABASE] [operator()] Power On Sensor 
Success 
camerahalserver:  0x7fa1cc2-0x [2370][RpcCamera] [configure] Cam::0, userId 0 + 
 
// raw sensor pipe P1Proc->McnrProc 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_IMAGEPROC] [addMultiCallback] [P1Proc] add 
callback:0x7f4400b8f0 for user:0 
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

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_IMAGEPROC] [addMultiCallback] [McnrProc] add 
callback:0x7f4400b8f0 for user:0 
// raw sensor pipe 对应 MCNRPROC 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_PROCCREATER] [dump_pipe] P1PROC[0]->MCNRPROC[1] 
 
camerahalserver:  0x7fa1cc2-0x [3034][TINY_PIPELINE] ppl::0, active, root 0x7f4400b010 + 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_PIPELINE] ppl::0, init + 
camerahalserver:  0x7fa1cc2-0x [2346][ImageSource] create ImageSource, type:0 
camerahalserver:  0x7fa1cc2-0x [2346][ImageSource] [ImgSrc_256]( 164)[onInit][Cam::0] 
isYuvSensor 0, mBatchNum 1, mInitReq(0_0) 
camerahalserver:  0x7fa1cc2-0x [2347][McnrPipeline] create callback 
camerahalserver:  0x7fa1cc2-0x [2347][McnrPipeline] 
[McnrNode_1]( 494)[configPipelineModel][Cam::0] VideoReprocPipe::registerResultCallback() 
Start 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_PIPELINE] init - 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_NATIVECAMERABASE] [0][configStreams] 
[user::0]curpipe init - 
camerahalserver:  0x7fa1cc2-0x [2370][RpcCamera] [configure] Cam::0, userId 0 - 
camerahalserver:  0x7fa1cc2-0x [3034][TINY_NATIVECAMERA] [operator()] 
[user::0][SWITCH_PIPE]current pipeline active done(1)! poweron(1) 
camerahalserver:  0x7fa1cc2-0x [3034][TINY_ROOTNODE] [0]( 205)[addOutputNodeAsync] 
[user::0][0][SWITCH_PIPE] + 
camerahalserver:  0x7fa1cc2-0x [3034][TINY_PIPELINE] ppl::0, active, root 0x7f4400b010 - 
camerahalserver:  0x7fa1cc2-0x [3034][TINY_NATIVECAMERA] [operator()] 
[user::0][SWITCH_PIPE]current pipeline active done(1)! poweron(1) 
camerahalserver:  0x7fa1cc2-0x [3034][TINY_NATIVECAMERA] [operator()] 
[user::0][SWITCH_PIPE]active_function exit 
 
// request 阶段 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_NATIVECAMERABASE] [0][pushRequest] [user:0 R:0] 
+ 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_NATIVECAMERABASE] [0][pushRequest] [user:0 R:0] 
- 
camerahalserver:  0x7fa1cc2-0x [3032][TINY_ROOTNODE] [0](  69)[enqReqLoop] + 
camerahalserver:  0x7fa1cc2-0x [3032][TinyMW/TinyPolicy] 
[TinyMW/TinyPolicy::onEvaluateRequest] AppRequest: 0 in Device + 
camerahalserver:  0x7fa1cc2-0x [3032][TinyMW/TinyPolicy] 
[TinyMW/TinyPolicy::onEvaluateRequest] ins frame_begin ,ReqNO:0, frameNO:0 
 
camerahalserver:  0x7fa1cc2-0x [3032][TINY_ROOTNODE] [0](  85)[enqReqLoop] [NODEDBG_FRAME 
R:0,F:0] 
camerahalserver:  0x7fa1cc2-0x [3032][TINY_ROOTNODE] [0](  87)[enqReqLoop] user:0 
frameId:0 
// request input P1 
camerahalserver:  0x7fa1cc2-0x [3032][TINY_IMAGENODE] [P1Node_0]( 103)[input][Cam::0] 
[NODEDBG_FRAME R:0,F:0] input 
camerahalserver:  0x7fa1cc2-0x [3032][TINY_IMAGENODE] [ImgSrc_256]( 103)[input][Cam::0] 
[NODEDBG_FRAME R:0,F:0] input 
camerahalserver:  0x7fa1cc2-0x [3032][ImageSource] [ImgSrc_256]( 583)[onInput][Cam::0] R0: 
F0 + 
camerahalserver:  0x7fa1cc2-0x [3068][ImageSource] 
[ImgSrc_256]( 953)[processJobber][Cam::0] deque ready job R0: F0 T:110192794000 take 0 
// p1 完成 
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
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
camerahalserver:  0x7fa1cc2-0x [3068][TINY_IMAGENODE] 
[P1Node_0]( 393)[applyRelease][Cam::0] R0:F0 
camerahalserver:  0x7fa1cc2-0x [3068][TINY_IMAGENODE] 
[P1Node_0]( 252)[applyResult][Cam::0] [NODEDBG_FRAME R:0,F:0] out, result(0), 
#processing(3) 
// request input p2 raw sensor Mcnr 
camerahalserver:  0x7fa1cc2-0x [3026][TINY_IMAGENODE] [McnrNode_1]( 103)[input][Cam::0] 
[NODEDBG_FRAME R:0,F:0] input 
camerahalserver:  0x7fa1cc2-0x [2338][VRP-P2ANODE] [runP2](vrp0) requestNo 0 + 
camerahalserver:  0x7fa1cc2-0x [3053][VRP-P2ANODE] [onImgStreamCallbackAsync](vrp0) 
requestNo 0, phase 1 driver callback, hw time: 5, pack: 1, last pack: 1 
camerahalserver:  0x7fa1cc2-0x [3054][VRP-P2ANODE] [onImgStreamCallbackAsync](vrp0) 
requestNo 0, phase 2 driver callback, hw time: 1, pack: 1, last pack: 1 
camerahalserver:  0x7fa1cc2-0x [3055][VRP-P2ANODE] [onImgStreamCallbackAsync](vrp0) 
requestNo 0, phase 3 driver callback, hw time: 4, pack: 1, last pack: 1 
camerahalserver:  0x7fa1cc2-0x [3055][VRP-P2ANODE] [onPathFinished](vrp0) requestNo 0, 
execution time: 0(sw:0/hw:0), 1(sw:2/hw:5), 2(sw:0/hw:1), 3(sw:5/hw:4), 
camerahalserver:  0x7fa1cc2-0x [2344][McnrPipeline] vrp output callback requestId 0 
// raw sensor p2 mcnr 完成 
camerahalserver:  0x7fa1cc2-0x [2344][TINY_IMAGENODE] 
[McnrNode_1]( 393)[applyRelease][Cam::0] R0:F0 
camerahalserver:  0x7fa1cc2-0x [2344][TINY_IMAGENODE] 
[McnrNode_1]( 252)[applyResult][Cam::0] [NODEDBG_FRAME R:0,F:0] out, result(0), 
#processing(0) 
 
// yuv sensor pipe 对应P1Proc->warpProc 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_CAMERAPROVIDER] [open] open cameraId:1 userId:0 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_IMAGEPROC] [addMultiCallback] [P1Proc] add 
callback:0x7f44019660 for user:0 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_IMAGEPROC] [addMultiCallback] [warpProc] add 
callback:0x7f44019660 for user:0 
camerahalserver:  0x7fa1cc2-0x [2370][TINY_PROCCREATER] [dump_pipe] P1PROC[2]->WPEPROC[3] 
camerahalserver:  0x7fa1cc2-0x [2346][ImageSource] [ImgSrc_257]( 164)[onInit][Cam::1] 
isYuvSensor 1, mBatchNum 1, mInitReq(4_4) 
camerahalserver:  0x7fa1cc2-0x [18586][ImageSource] [ImgSrc_257]( 583)[onInput][Cam::1] 
R0: F0 + 
camerahalserver:  0x7fa1cc2-0x [18597][ImageSource] 
[ImgSrc_257]( 953)[processJobber][Cam::1] deque ready job R0: F0 T:11058773657000 take 0 
camerahalserver:  0x7fa1cc2-0x [18597][TINY_IMAGENODE] 
[P1Node_2]( 393)[applyRelease][Cam::1] R0:F0 
camerahalserver:  0x7fa1cc2-0x [18597][TINY_IMAGENODE] 
[P1Node_2]( 252)[applyResult][Cam::1] [NODEDBG_FRAME R:0,F:0] out, result(0), 
#processing(4) 
// request input p2 yuv sensor WPE 
camerahalserver:  0x7fa1cc2-0x [3030][TINY_IMAGENODE] [WarpPQNode_3]( 103)[input][Cam::1] 
[NODEDBG_FRAME R:0,F:0] input 
camerahalserver:  0x7fa1cc2-0x [18593][MtkCam/CoreDeviceWPE] 
MtkCam/CoreDeviceWPE(18593)[WPEImgStreamCallback] [0] WPEImgStreamCallback, reqNo=0: + 
camerahalserver:  0x7fa1cc2-0x [18593][MtkCam/CoreDeviceWPE] 
MtkCam/CoreDeviceWPE(18593)[WPEImgStreamCallback] performCallback, R0 
// yuv sensor p2 WPE 完成 
camerahalserver:  0x7fa1cc2-0x [18593][TINY_IMAGENODE] 
[WarpPQNode_3]( 393)[applyRelease][Cam::1] R0:F0 
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
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
camerahalserver:  0x7fa1cc2-0x [18593][TINY_IMAGENODE] 
[WarpPQNode_3]( 252)[applyResult][Cam::1] [NODEDBG_FRAME R:0,F:0] out, result(0), 
#processing(0) 
camerahalserver:  0x7fa1cc2-0x [18593][MtkCam/CoreDeviceWPE] 
MtkCam/CoreDeviceWPE(18593)[WPEImgStreamCallback] WPEImgStreamCallback – 
 
 Debug Share 
Hypervisor 系统需要 Android 端和 Yocto 端 log 同时分析，在 Android 端发生 AEE 时先用 GAT 等工具解析出 DB 
callback，然后再分析是否 Android 端异常还是 Yocto 端异常引起的问题，若是 Yocto 端异常则需进一步分析 AEE 发
生时间点前后的 log。 
 
案例分享：monkey 测试出现 getRelatedViewBaselineOffset 一直持锁出现 com.mediatek.mcamcorderdemo ANR 
 
Log 分析 
cam0 和 cam16 对应 avm 的相机, cam16 是 mcam apk 开的，cam0 是 camAP 开的。 
mcam 打开 cam16 的录制退到后台，camAP 开 cam0，拍照后出现拍照帧的 callback 不完全，没有 lastpatial result。 
03-25 02:53:38.527341  6814  6912 D WarpPQNode: 
[WarpPQNode_23]( 258)[updateCropRotationInfo][Cam::0] sid:0xffffff, appId:0xffffff, 
rot[0], crop[0, 0, 0, 0] 
03-25 02:53:38.527342  6814  7490 D mtkcam-cb-recmd: [0][prepareRemoveRequests] checking 
62 
03-25 02:53:38.527368  6814  7289 D mtkcam-cb-recmd: [16][notifyShutters] number=277 
status=0 
03-25 02:53:38.527368  6814  6912 D WarpPQNode: 
[WarpPQNode_23]( 411)[convertToReqParams][Cam::0] no need to set cropRegion 
03-25 02:53:38.527369  6814  6915 D HalIspTemplate: [getImgSysMetaTuning] [idx(0)] 
[user(0)] NG (no caminfo) 
03-25 02:53:38.527374  6814  7490 D mtkcam-cb-recmd: [0][isRemovable] pShutter->status=17 
pResult->status=0 
03-25 02:53:38.527387  6814  7289 D mtkcam-cb-recmd: [16][prepareCallbackShutters] 
number=277 status=1 
03-25 02:53:38.527402  6814  7289 D mtkcam-cb-recmd: [16][prepareCallbackShutters] 
number=278 status=0 
03-25 02:53:38.527402  6814  7490 D mtkcam-cb-recmd: [0][dumpAllAvailable] available 
shutter [62] 
03-25 02:53:38.527397  6814  6916 D TINY_IMAGENODE: [WarpPQNode_25]( 111)[input][Cam::0] 
[NODEDBG_FRAME R:277,F:277] input 
03-25 02:53:38.527413  6814  7289 D mtkcam-cb-recmd: [16][prepareRemoveRequests] checking 
277 
03-25 02:53:38.527417  6814  7490 D mtkcam-cb-recmd: [0][handleAOSPRules] 
availableShutters:62 
03-25 02:53:38.527422  6814  7289 D mtkcam-cb-recmd: [16][isRemovable] pShutter->status=17 
pResult->status=0 
03-25 02:53:38.527442  6814  6912 D MtkCam/ImageBufferOpsImpl: [allocateDmaBuf] allocate 
success...fd:263 240x128-NV21-TinyCam/BufferMana 
03-25 02:53:38.527443  6814  7490 D mtkcam-cb-recmd: [0][handleAOSPRules] results 
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
MT8676 Hypervisor  
Camera MV Introduction 
Confidential B 
frameNumber:62, size:1 
03-25 02:53:38.527444  6814  7289 D mtkcam-cb-recmd: [16][dumpAllAvailable] available 
shutter [277] 
03-25 02:53:38.527465  6814  7289 D mtkcam-cb-recmd: [16][handleAOSPRules] 
availableShutters:277 
03-25 02:53:38.527466  6814  6912 D WarpPQNode: 
[WarpPQNode_23]( 258)[updateCropRotationInfo][Cam::0] sid:0xffffff, appId:0xffffff, 
rot[0], crop[0, 0, 0, 0] 
03-25 02:53:38.527462  6814  6916 D WarpPQNode: 
[WarpPQNode_25]( 258)[updateCropRotationInfo][Cam::0] sid:0x0, appId:0x0, rot[0], crop[0, 
0, 7680, 1280] 
03-25 02:53:38.527472  6814  7490 D mtkcam-cb-aidl: [0][convertNotifyMsgs] 
NotifyMsg{shutter: ShutterMsg{frameNumber: 62, timestamp: 688142546000, readoutTimestamp: 
688152546000}},  
03-25 02:53:38.527475  6814  7289 D mtkcam-cb-recmd: [16][handleAOSPRules] results 
frameNumber:277, size:1 
 
P1 这里只 notify 了 shutter，没有 result 回去。因为此时 P1 不是 lastnode。 
03-25 02:53:38.494432  6814  7289 D mtkcam-cb-recmd: [16][processCaptureResult] 
processCaptureResult frameNumber:276, bufferNo:10 
 
但是 jpegnode 没有办法给 mcam apk 返回 lastpatial 的 callback。所以其实就是多开时候，不同 user，对 lastnode 的
判断是不是应该区分开来。 
mcam 的 lastnode 就是 warppqnode，但是当前代码逻辑，lastnode 是把 warppq 排除掉的，所以等于 mcam 这一路
的 lastpatial result 应该从 P1 就返回上去了。但是 camapk 这个 user1 的 lastnode 其实是 jpegnode，jpegnode 也给
user1 把 result callback 回去了，所以 turkey 的 camera app 的 requeset 没有报错，只是 mcam 的同一次处理的这个
request，没有 result。 
 
解决方法：在 imagenode 计算 lastnode，判断是否需要在 P1 返回 lastpartial result 
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
MT8676 Hypervisor  
Camera MV Introduction 
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
# SRC0212 MT8676_Hypervisor_Clock_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Clock_User_Manual_V1.1.pdf

SHA-256：b71a9b733004c98f63a075c3244c94cbcd7a5c25c69e967f201c47f3387493f6

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0212.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.1 
出版日期：  2024-11-12 
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
版本记录 
版本 日期 作者 描述 
1.0 2024-10-28 王光辉 正式版 
1.1 2024-11-12 王光辉 在章节 1.2.2 SW 架构中增加 Tbox 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 Clock 通用接口 ·························································································································································· 4 
1.1 概述·········································································································································································· 4 
 缩略词 ·························································································································································· 4 
1.2 架构/流程概要 ························································································································································ 4 
 HW 架构 ······················································································································································· 4 
 SW 架构 ························································································································································ 5 
1.3 常见问题/故障排除 ················································································································································ 6 
 Clock Dump 命令 ·········································································································································· 6 
 测量 Clock 频率的命令 ································································································································ 7 
 使用命令开启和关闭 Clock ························································································································· 7 
 Clock 部分访问硬件寄存器时卡住的调试方法 ························································································· 7 
附件一 附加条款 ······························································································································································· 9 
 
图片目录 
图 1-1. HW 架构 ········································································································································································ 4 
图 1-2. Yocto/Android/Tbox 架构 ·············································································································································· 5 
图 1-3. Hypervisor (Yocto + Android + Tbox) 架构 ····················································································································· 6 
 
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
MT8676 Hypervisor Clock 
User Manual 
Confidential B 
1 Clock 通用接口 
1.1 概述 
本章节主要介绍 MT8676 Clock 架构。 
 
 缩略词 
表 1-1. 缩略词 
缩略词 全称及释义 
CCF (Linux) Common Clock Framework Linux 通用时钟框架 
CG Clock Gate 时钟开关， 开启和关闭时钟信号 
Divider Divider 除频器, 降低频率, 输入频率/N = 输出频率 
MUX Multiplexer 多路复用器，用于选择不同的时钟频率 
PLL  Phase-Locked Loop 锁相环，产生一定频率的时钟信号 
 
1.2 架构/流程概要 
 HW 架构 
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
 
图 1-1. HW 架构 
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
 SW 架构 
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
 
图 1-2. Yocto/Android/Tbox 架构 
 
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
 
图 1-3. Hypervisor (Yocto + Android + Tbox) 架构 
 
1.3 常见问题/故障排除 
 Clock Dump 命令 
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; }  
clkdbg dump_clks | grep xxxxx 
 
dump 结果格式如下: 
第一个列是 clock 名字， 第二列表示 On/off， 第三列表示 is_prepared，第四列表示 is_enabled，第五列是 clock 当
前频率， 最后一列是当前 clock 的 parent 名字。 
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
 
 测量 Clock 频率的命令 
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg fmeter | grep xxxxx 
 
测量结果格式如下: 
第一列表示 clock 名字， 第二列是频率值， 0 表示当前处于关闭状态。 
fm_mdp0_ck                   : 0 
fm_mdp1_ck                   : 0 
fm_mdpll1_fs26m_guide        : 26000 
 
 使用命令开启和关闭 Clock  
开启 clock 的命令如下: 
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg prepare_enable xxxxx 
 
例如: 
clkdbg prepare_enable mdp0_sel 
clk_prepare_enable(mdp0_sel): 0 
 
第一行是命令， 第二行是命令执行结果， 0 表示返回 OK， 错误将返回错误码。 
再次 dump 可以看到上面的命令已经将对应的 clock 打开。 
root@auto8676p164:~# clkdbg dump_clks | grep mdp0_sel 
[  topckgen: mdp0_sel             :  ON,   1,   1,  687499969,              mmpll_d4] 
 
关闭 clock 命令如下: 
clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg disable_unprepare xxxxx 
 
 Clock 部分访问硬件寄存器时卡住的调试方法 
Clock 部分最常见的问题就是访问某个相关寄存器时卡住，这通常是 parent clock 或者对应 clock 的 power domain 没
有开导致的。 
 
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
• 如果是 parent clock 没有开，可以使用上面 dump clock 的命令 dump 一下，确认 parent clock 是否正常开启，或
者是否被其他程序关闭了。 
• 如果是 power domain 没有开，可以使用下面的命令 dump power domain 的状态: 
cat clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg dump_genpd | grep xxxxx 
 
例如： 
cat clkdbg() { echo $@ > /proc/clkdbg ; cat /proc/clkdbg ; } 
clkdbg dump_genpd | grep adsp 
 
结果格式如下: 
第一列是 power domain 的名字， 第二列是状态： active 表示已开启， suspended 和 POWER_OFF 表示已关
闭。节点下面的是该 power domain 挂着的 device 的名称和状态。 
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
# SRC0213 MT8676_Hypervisor_GNSS_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_GNSS_User_Manual_V1.0.pdf

SHA-256：73b34cf0a80bae3c86a7b99332676c1d4a8523d8368bd93246ffb6761bfbf27b

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0213.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-11-13
MT8676 Hypervisor GNSS User Manual 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 2

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-11-13 孙澳 正式版 
 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 3

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 3 
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 GNSS ·········································································································································································· 5 
1.1 概述·········································································································································································· 5 
 简单介绍 ······················································································································································ 5 
 GNSS 名词解释 ············································································································································· 5 
1.2 架构/进程概述 ························································································································································ 5 
 GNSS 架构 ····················································································································································· 5 
1.3 配置/客制化指南 ···················································································································································· 6 
 固定速率配置 ·············································································································································· 6 
 多卫星导航系统配置··································································································································· 7 
1.4 GNSS API··································································································································································· 7 
 Code Path ······················································································································································ 7 
 GpsInterface ·················································································································································· 8 
 CallBack ························································································································································· 9 
 Demo Code ··················································································································································· 9 
1.5 常见问题/故障排除 ·············································································································································· 10 
 Log 相关问题 ·············································································································································· 10 
 测试相关问题 ············································································································································ 11 
 GNSS Path ··················································································································································· 11 
附件一 附加条款 ····························································································································································· 12 
  
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 4

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 4 
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
图片目录 
图 1-1. GNSS 架构 ······································································································································································ 6 
图 1-2. 固定速率配置 ································································································································································ 7 
图 1-3. GNSS 配置 ······································································································································································ 7 
图 1-4. Mnld Test ······································································································································································ 11 
 
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

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
1 GNSS 
1.1 概述 
 简单介绍 
本章节介绍 MT8676 GNSS 的基本功能以及常见问题的解决方法。 
 GNSS 名词解释 
表 1-1. 名词解释 
缩略词 全称 释义 
COLD start – 有时间辅助资讯，终端用户不会遇到该场景。 
FULL start – 没有任何的辅助资讯，相当于终端用户第一次买
到手机后使用定位应用的场景。 
GNSS Global Navigation Satellite System 全球导航卫星系统 
Hot start – 有所有的辅助资讯，终端用户此次定位距离上次
定位小于 2～4 小时。 
NMEA National Marine Electronics Association 用于在海洋电子设备之间进行数据交换的通信协
议，广泛应用于 GPS/GNSS 接收器数据输出。 
TTFF Time To First Fix 导航设备从开机到成功获取第一次有效定位数据
所需要的时间。 
UOS User Operating System 用户操作系统 
WARM start – 有时间和位置辅助资讯，终端用户此次定位距离
上次定位超过 2～4 个小时。 
 
1.2 架构/进程概述 
 GNSS 架构 
MT8676 GNSS 架构如下图所示，GNSS 是在 T-box UOS（也叫 Yocto UOS）上： 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 6

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
 
图 1-1. GNSS 架构 
1.3 配置/客制化指南 
 固定速率配置 
固定速率（Fix Rate）是指 GNSS 上报位置信息的速率，目前 MT8676 可以支持的固定速率包括：1Hz、2Hz、5Hz 和
10Hz，默认配置是 1Hz 输出。修改固定速率的方法如下： 
 
方法 1：修改代码，配置 fix_interval 参数。fix_interval = 100 对应 10Hz；fix_interval = 1000 对应 1Hz。 
需要改在 Yocto 端/ src/connectivity/gps/4.0/mtk_mnld/mnld_entity/src/gps_controller.c 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 7

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
 
图 1-2. 固定速率配置 
 
方法 2：动态修改配置文件，重启 GNSS 后生效，在 Yocto 端修改。 
命令：echo fix_interval=1000 >> /data/etc/gnss/mnl.prop    /配置成 1Hz，重启 GPS 后生效。 
 多卫星导航系统配置 
MT8676 支持 GPS + GLONASS + Galileo + BeiDou 多卫星导航定位系统，gnssopmode 默认配置成
MTK_CONFIG_GPS_GLONASS_BEIDOU_GALILEO_NAVIC（默认配置的 GNSS 性能最佳，建议使用默认配置）。 
 
 
图 1-3. GNSS 配置 
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

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
 GpsInterface 
typedef struct { 
    size_t          size;    //设置sizeof(GpsInterface) 
    int   (*init)( GpsCallbacks_ext* callbacks );        //初始化callback 
    int   (*start)( void );                                               //gps start  
    int   (*stop)( void );                                               //gps stop  
    void  (*cleanup)( void );                                      //cleanup gps 
 
    int   (*inject_time)(GpsUtcTime time, int64_t timeReference,int uncertainty);         
//注入utc time 
 
    int  (*inject_location)(double latitude, double longitude, float accuracy); 
//将当前位置从另一个位置提供者注入, Latitude and longitude 以度为单位，精度以米为单位 
 
    void  (*delete_aiding_data)(GpsAidingData flags); 
       //指定下一次调用启动时不会使用在flags 中定义的信息。对于冷启动，会传递 GPS_DELETE_ALL。 
 
int   (*set_position_mode)(GpsPositionMode mode, GpsPositionRecurrence recurrence, 
              uint32_t min_interval, uint32_t preferred_accuracy, uint32_t preferred_time, 
              bool lowPowerMode); 
       //主要是设置nmea 和location 的上报频率：min_interval 
 
    const void* (*get_extension)(const char* name); 
        //get a pointer to extension information 
    
    int  (*inject_fused_location)(double latitude, double longitude, float accuracy); 
        //注入fused location 
  
     int   (*fix_interval)(uint32_t interval); 
       //动态设置上报频率，100:10hz,1000:1hz 
 
     int   (*op_mode)(uint8_t opmode); 
       //动态设置 opmode 
 
     int   (*elevation_angle)(uint8_t angle); 
     //动态设置elevation angle constraint 
    
    int   (*l5_disable)(bool disable); 
     //动态设置L5 enable 或disable 
 
    int   (*gps_start_week_num)(uint32_t week); 
    //动态设置 gps start week num 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
 CallBack 
typedef struct { 
    
    gps_location_ext_callback location_cb;     //上报location 的callback，从这里获取location，比较常用 
    gps_status_callback status_cb;                     //gps status callback，gps 状态如start、stop 
    gps_sv_status_callback sv_status_cb;          //sv status callback 
    gps_nmea_callback nmea_cb;                       //上报nmea 的callback，从这里获取nmea，比较常用 
    gps_set_capabilities set_capabilities_cb;    //capabilities 在xts 认证会用到，获取支持的capabilities 再
去跑特定测项 
    gps_acquire_wakelock acquire_wakelock_cb;      //请求wakelock 的callback 
    gps_release_wakelock release_wakelock_cb;        //是否wakelock 的callback 
    gps_create_thread create_thread_cb;                     //create thread 的callback 
    gps_request_utc_time request_utc_time_cb;         //获取utc time 的callback 
    gnss_set_system_info set_system_info_cb;            //set system info的callback 
    gnss_sv_status_ext_callback gnss_sv_status_cb;   //获取gnss sv_status_ext 的callback 
 
    gnss_set_name_callback set_name_cb;                  //set nmea callback 
     
    gnss_request_location_callback request_location_cb;    //request locktion callback 
gps_location_ext_callback agps_location_cb;       //获取agps location 
 
    gnss_output_rtcm3_callback output_rtcm3_cb;       //获取rtcm 的callback 
    gnss_set_signal_type_capabilities_callback set_signal_type_callback;     //set signal type 
capailities，如carrierfrequency 
 
 Demo Code 
可以参考 mnld_test 的用法来调用 GpsInterface 和 callback 
Mnld_test 路径： src/connectivity/gps/4.0/gnss_test 
例如：调用 GpsInterface 中的 init 和 fix_interval： 
GpsInterface_ext* mnld_test_gpsinfs = NULL; 
GpsCallbacks_ext* mnld_test_cbs = NULL; 
mnld_test_cbs = (GpsCallbacks_ext*)calloc(1, sizeof(GpsCallbacks_ext)); 
 mnld_test_cbs->size = sizeof(GpsCallbacks_ext); 
 struct gps_device_t_ext *gpsdev = NULL; 
 gpsdev = &linux_gps_device;                      //定义变量初始化 
 mnld_test_gpsinfs = (GpsInterface_ext*)gpsdev->get_gps_interface(gpsdev); 
  if(mnld_test_gpsinfs != NULL) 
   { 
         LOGI("mnld_test_gpsinfs is not null");                                                                                                                                                  
mnld_test_gpsinfs->init(mnld_test_cbs); 
          mnld_test_gpsinfs->fix_interval(1000); 
     } 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 10

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 10 
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
Callback 的使用也可以参考 mnld_test、mnld_fm_gps_location_callback、mnld_fm_gps_status_callback，它们都是
callback 的接收函数，例如： 
GpsCallbacks_ext mnld_fm_gps_callbacks = { 
    .size = sizeof(GpsCallbacks_ext), 
    .location_cb = mnld_fm_gps_location_callback, 
    .status_cb = mnld_fm_gps_status_callback, 
…… 
 
建议细看 mnld_test 的 code，有很具体的接口调用和 callback 使用。 
 
1.5 常见问题/故障排除 
 Log 相关问题 
• 联发科技工程师需要哪些 log 用于分析问题？ 
Android 端需要：/data/debuglogger/mobilelog 
T-box UOS (Yocto) 端需要：/data/debuglogger/mobilelog，以及 NMEA log 
T-box UOS (Yocto) 端的 mobilelog 默认会打开，开 NMEA log 需要创建/data/etc/gnss/mnl.prop 文件并在里
面写入： 
debug.dbg2file=1  
debug.filename=/data/debuglogger/gpsdebug.log 
 
保存重启，NMEA log 就会出现在/data/debuglogger/gpsdebug.log 
 
• 如何连接 powergps 
先输入如下命令 
adb shell "echo \"pmtk.serial.port=7000\" > /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug_type=0\" >> /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug.debug_nmea=1\" >> /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug.dbg2file=1\" >> /data/etc/gnss/mnl.prop" 
adb shell "echo \"debug.filename=/data/debuglogger/gpsdebug.log\" >> /data/etc/gnss/mnl.prop" 
 
重启后再输入： 
adb forward  tcp:7000 tcp:7000 
 
并使用 mnld_test 打开 GPS： 
adb shell 
mnld_test start c & 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback

## PDF物理页 11

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 11 
MT8676 Hypervisor GNSS 
User Manual 
Confidential B 
 测试相关问题 
• 测试前需要检查是否有卫星信号，是否处于 open sky 的环境 
测试 GNSS 搜星或定位功能，信号需要 open sky 的环境下，例如空旷的室外或者有信号放大器的实验室。 
 能够定位是有前提条件的 CNR 为 40~43dbm 的卫星要>6 颗。 --->测 GNSS 一定要注意这个，如不确认当前信号
环境是否符合要求，拿一个对比机放在同样的环境做对比。  
 
• 如何测试 FULL start、WARM start、COLD start、HOT start 这几种启动方式的 TTFF？ 
Android 端请使用工程模式下的 YGPS 或使用如下 adb 命令打开 YGPS，通过 FULL、COLD、WARM、HOT 按钮来
测试。 
adb shell am  start com.mediatek.ygps/.YgpsActivity 
 
T-box UOS (Yocto) 端可以使用 mnld_test 
Start test(open gps): mnld_test –h 
 
 
图 1-4. Mnld Test 
  
根据提示，例如您需要测试冷启动，可以用如下命令： 
mnld_test start c & 
 
可以输入如下指令将 log 打在串口，可以看到 TTFF 等信息： 
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

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2022 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Hypervisor GNSS 
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
# SRC0214 MT8676_Hypervisor_GPIO_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_GPIO_User_Manual_V1.0.pdf

SHA-256：183254d73cbdc6354fdbeb70560cacba23b015a870a82ca111eb481be6ffb856

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0214.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit. This document is 
subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-10-28
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
版本记录 
版本 日期 作者 描述 
1.0 2024-10-28 薛磊 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 3 
1 GPIO ·········································································································································································· 4 
1.1 概述·········································································································································································· 4 
 简单概述 ······················································································································································ 4 
 名词解释 ······················································································································································ 4 
1.2 架构/流程概述 ························································································································································ 5 
 GPIO 介绍 ····················································································································································· 5 
 Pinctrl 子系统与 GPIO 子系统 ····················································································································· 5 
1.3 配置/客制指南 ························································································································································ 6 
 Pinctrl 使用 ··················································································································································· 6 
 GPIO 使用 ····················································································································································· 6 
1.4 常见问题/故障排除 ················································································································································ 7 
 在 Kernel 中如何查看以及修改 PIN 的状态 ······························································································· 7 
 开机过程中 Pin 脚电平和 Default Reset Value 不符 ·················································································· 8 
附件一 附加条款 ······························································································································································· 9 
 
 
图片目录 
图 1-1. Pinctrl 子系统与 GPIO 子系统 ······································································································································ 5 
 
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
MT8676 Hypervisor GPIO 
User Manual 
Confidential B 
1 GPIO 
1.1 概述 
 简单概述 
本章节介绍 GPIO 控制器的硬件特性，软件配置和功能，以及常见问题的 调试方法。 
 
 名词解释 
表 1-1. 名词解释 
名词 全称及释义 
DATAIN Pin 读到的值，仅在 IES = 1 时有效 
DATAOUT GPIO mode 时设定 output High/Low 
DIR GPIO mode 时设置 Pin input/output 
DRV Pin 的普通 driving 设定 
EH I2C 类 Pin 专有的 driving 设定 
IES Input enable 
MODE Pinmux 设定，填入 mode number 即可 
PD 部分 pin 打开 pull down 时，PU 需为 0 
PU 部分 pin 打开 pull up 时，PD 需为 0 
PUPD 部分内部上下拉阻值可调的 Pin 的 pull up/down 设定 
R0/R1 上下拉电阻启用（部分 Pin 可用） 
RSEL 部分 Pin 调整上下拉阻值（部分 Pin 可用） 
SMT 波形过滤功能 
 
 
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
1.2 架构/流程概述 
 GPIO 介绍 
General-Purpose Input/Output (GPIO），意为通用输入/输出。在嵌入式系统中，GPIO 是一种用于与外部设备进行数
字信号交互的接口。它可以通过设置为输入或输出模式来读取或控制外部设备的状态。  
MediaTek SoC 提供 PIN Controller 硬件单元以实现: 
 引脚功能配置。例如该 I/O pin 是一个普通的 GPIO 还是一些特殊功能引脚（例如 EMMC 上的 CMD 信号）。 
 引脚特性配置。例如 pull-up/down 电阻的设定，drive-strength 的设定。 
 
提供 GPIO Controller 硬件单元以实现： 
 配置 GPIO 的方向。 
– 如果是输出，可以配置为 high level 或者 low level。 
– 如果是输入，可以获取 GPIO 引脚上的电平状态。 
 
 Pinctrl 子系统与 GPIO 子系统 
 
图 1-1. Pinctrl 子系统与 GPIO 子系统 
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
1.3 配置/客制指南 
 Pinctrl 使用 
Pinctrl 的使用流程如下。 
1. 在 dts pio 节点下做 Pin 的配置。需要关注以下几点： 
(1) 配置的 state 名称（下例中 mmc0_pins_default）。state 名称是 dts 对该设定的索引关键字，注意识别。 
(2) 在 state 下对 pin 作分组（下例中 pin_cmd_dat {…}）。每组 pin 一定具有相同的 pinconf 设定，如果有不同
的设定，可以在一个 state 内写入多组设定。 
(3) 配置 pinmux（下例中 pinmux = <…>）。Pinmux 会说明要设定的 pin，并确定其 function，所引用的定义来
自文件 include/dt-bindings/pinctrl/mt6897-pinfunc.h。 
(4) 配置 pinconf（下例中 input-enable 等）。在配置 pinmux 之后配置 pin config，可以设定上拉下拉状态，输
入高/低，driving 能力，输入使能等。 
2. dts 中各 module 节点下的配置。如下是 dts 中各 module 节点下对 pinctrl 的引用： 
/* dts Sample */ 
pinctrl-names = "default", "state_uhs"; 
pinctrl-0 = <&mmc0_pins_default>; 
pinctrl-1 = <&mmc0_pins_uhs>; 
 
3. driver 中的调用 
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
 
 GPIO 使用 
GPIO 的使用流程如下。 
1. dts module 节点下的配置： 
/* dts Sample */ 
&your_device_node { 
/* xx 代表gpio number, e.g. xx = 155 */ 
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
test-gpios=<&pio xx GPIO_ACTIVE_HIGH>; 
}; 
 
2. driver 中的调用 
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
 
1.4 常见问题/故障排除 
 在 Kernel 中如何查看以及修改 PIN 的状态 
通过 mtk_gpio debug 节点来查看以及修改 PIN 的状态。 
#: cat /proc/mtk_gpio/soc.pinctrl 
PIN: [MODE] [DIR] [DOUT] [DIN] [PULL_EN] [PULL_SEL] [IES] [SMT] [DRIVE] ( [R1] [R0] ) 
   0: 0 0 0 0 1 0 1 0 0 
   1: 0 0 0 0 1 0 1 0 0 
   2: 0 1 1 1 1 0 1 0 0 
   3: 6 0 0 0 1 0 1 0 0 
 
说明： 
 MODE: Aux.Function selection, range: 0~7 
 DIR: 0 for input mode; 1 for output mode (this is register value of MediaTek’s DIR bit)  
 DOUT/DIN: 0 for low; 1 for high 
 DRIVE: Driving current selection, range: 0/1/2/3/4/5/6/7 
 IES/SMT: 0 for disable; 1 for enable 
 PULLEN/R1/R0: 0 for disable; 1/2/3 for enable 
– For pin with 2 pull resistors, R1 and R0 are shown. 
– For pin with 1 pull resistor, R1 and R0 are not shown. 
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
 PULLSEL: 0 for selecting pull-down resistor; 1 for pull-up resistor 
 
 开机过程中 Pin 脚电平和 Default Reset Value 不符 
1. 首先检查 dws 文件是否有将这个 pin 配置成非 reset default 状态。 
2. 然后检查是否有外围电路影响。 
3. 检查 是否有 preloader/lk 主动调用 GPIO 接口进行设置。 
  
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
MT8676 Hypervisor GPIO 
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
# SRC0215 MT8676_Hypervisor_GPU_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_GPU_User_Manual_V1.1.pdf

SHA-256：b17a1b72d94d428bda0821d1e1d48bb08525c8eb7d034673cf25082621989925

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0215.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.2 
出版日期:  2025-07-11
MT8676 Hypervisor GPU User Manual 
 
 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-10-28 Xiaofen Huang 正式版 
1.1 2024-11-08 Xiaofen Huang 
• 在 1.2.1 Hypervisor 图形系统框架中添加 L+A/L+L+A 
• 在表 1-1. Arm Mali-G615 feature support 中添加 API 
Support note 
1.2 2025-07-11 Lingxiao Wang • 添加小节 1.3.1.3 虚拟化 GPU Fence Timeout 问题分析 
 
  
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
MT8676 Hypervisor GPU 
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
 Hypervisor 图形系统框架 ···························································································································· 5 
 Arm Mali-G615 架构及功能 ························································································································· 6 
1.3 常见问题/故障排除 ················································································································································ 8 
 GPU 渲染分析 ·············································································································································· 8 
 GPU 性能分析 ············································································································································ 10 
附件一 附加条款 ····························································································································································· 12 
 
 
图片目录 
图 1-1. Hypervisor 图形框架 ····················································································································································· 5 
图 1-2. Arm Mali-G615 架构 ······················································································································································ 6 
 
表格目录 
表 1-1. Arm Mali-G615 feature support ····································································································································· 7 
 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
1 GPU 
1.1 概述 
本章节主要介绍 MT8676 GPU 的基本知识。 
MT8676 的 GPU 使用的是 Arm Mali-G615。 
 
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

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Hypervisor GPU 
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
 Hypervisor 图形系统框架 
基于 L(w/ GPU)+A 或者 L(w/ GPU)+L(w/o GPU)+A 的 Hypervisor 图形系统框架如下所示： 
 
 
图 1-1. Hypervisor 图形框架 
  
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
 Arm Mali-G615 架构及功能 
Arm Mali-G615 架构请参考下图： 
 
 
图 1-2. Arm Mali-G615 架构 
 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
Arm Malli-G615 Feature Support 请参考表 1-1： 
 
表 1-1. Arm Mali-G615 feature support 
Features Value Description Note 
Anti-Aliasing 
• 4x MSAA 
• 8x MSAA 
• 16x MSAA 
4x Multi-Sampling Anti-
Aliasing (MSAA) with 
minimal performance drop. 
– 
API Support 
• OpenGL® ES 1.1, 2.0, 
3.1, 3.2 
• Vulkan 1.1,1.2,1.3 
• OpenCL™ 1.1, 1.2, 2.0 
Full Profile 
Full support for next-
generation and legacy 
2D/3D graphics applications. 
L+A 或者 L+L+A 架构上，
Android guest 端仅支援
OpenGL® ES 1.1, 2.0, 3.1 
Bus Interface AMBA®4 ACE, ACE-LITE and 
AXI 
Compatible with a wide 
range of bus interconnect 
and peripheral IP . 
– 
L2 Cache Configurable 512KB – 2M 2 or 4 slices of 256K or 512K 
each – 
Scalability 1 to 6 cores 
Configurable from 1 to 6 
cores delivering a specific 
capability for a Mali GPU 
– 
Adaptive Scalable 
Texture Compression 
(ASTC) 
Low Dynamic Range (LDR) 
and High Dynamic Range 
(HDR). 
Supports both 2D and 3D 
images. 
ASTC offers several 
advantages over existing 
texture compression 
schemes by improving 
image quality, reducing 
memory bandwidth and 
thus energy use. 
– 
Arm Frame Buffer 
Compression (AFBC) 
• Version 1.3.2 
• 4x4 pixel block size 
AFBC is a lossless image 
compression format that 
provides random access to 
pixel data to a 4x4 pixel 
block granularity. It is 
employed to reduce 
memory bandwidth both 
internally within the GPU 
and externally throughout 
the SoC. 
– 
 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
1.3 常见问题/故障排除 
 GPU 渲染分析  
1.3.1.1 Android 端问题分析 
出现屏幕绘制异常时，一般可以从三个方面进行分析，分别是 SF/HWC/Display、GPU 和 APK。判断是否为
SF/HWC/Display 问题，首先可以查看 log 中是否有 display 相关错误，根据 log 进行下一步分析；其次平台有两种叠
图方式，可以通过 OVL 或者 GPU 进行叠图，可以通过关闭 HW OVL，强制使用 GPU 进行叠图，查看异常情况；最
后可以使用 screenrecord 命令进行录屏，查看录屏结果是否也为渲染异常。如果判断为 SF/HWC/Display 问题可以
找相关模块负责人进行下一步分析。 
 
GPU 问题在 log 中搜索是否有 Mali/EGL/GLES/HWUI 等关键字相关的错误，根据错误进行下一步分析。也可以使用
一些调试工具，例如 Mali Graphics Debugger、RendorDoc 等，这些工具可以帮助分析问题。也可以一些做有关 GPU
的对比实验。 
 
APK 问题需要请 APK 共同分析，是否绘制时使用 GL 接口的问题，或者传入绘制的纹理不对等情况。 
1.3.1.2 Yocto 端问题分析 
出现屏幕绘制异常时，一般可以从三个方面进行分析，分别是 Weston/Display、GPU 和应用。判断是否为
Weston/Display 问题，首先可以查看 log 中是否有 display 相关错误，根据 log 进行下一步分析；其次平台有两种叠
图方式，可以通过 OVL 或者 GPU 进行叠图，可以使用 screenrecord 工具进行录屏，查看录屏结果是否也为渲染异
常。如果判断为 Weston/Display 问题可以找相关模块负责人进行下一步分析。 
 
GPU 问题在 log 中搜索是否有 Mali/EGL/GLES 等关键字相关的错误，根据错误进行下一步分析。也可以使用一些调
试工具，例如 Mali Graphics Debugger、RendorDoc 等，这些工具可以帮助分析问题。也可以一些做有关 GPU 的对
比实验。 
 
APK 问题需要请 APK 共同分析，是否绘制时使用 GL 接口的问题，或者传入绘制的纹理不对等情况。 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
1.3.1.3 虚拟化 GPU Fence Timeout 问题分析 
由于在 HyperVisor 框架下，Android 的所有 GPU 实际工作都需要在 Yocto 端完成，因此当 Android 出现 virtio_gpu 
fence timeout 导致的问题时，需要结合 Yocto 端 gpu_server 状态进行分析。 
(1) Android virtio_gpu fence timeout 可能导致多种问题，如 ANR、NE、SWT、HANG。其中 ANR、NE 可能是
swapbuffer 时检测到 fence timeout，触发 app 自身的 error handle; SWT、HANG 则是 fence 长时间 timeout，
virtio GPU driver 也阻塞在 fence 相关接口。 
(2) VM Guest virtio_gpu fence timeout Android 端相关定位 log: 
Android log 
• EGL_emulation: swapBuffers waited on display fence 138 for 1000 ms 
• EGL_emulation: Fence fd = 138 
• EGL_emulation:   fence LayerRelease 0 
• EGL_emulation:     pt controlq virtio_gpu status(0) 0.000000 
 
• hwcomposer:  ! [OVL-IN-1] (0) fence 117 didn't signal in 1000 ms   
• hwcomposer:  ! fence(virtio_gpu-controlq72-706658) status(0) 
• hwcomposer:  ! sync point: timeline(controlq) drv(virtio_gpu) status(0) 
 
Kernel log: 
• [drm:virtio_gpu_resource_create_ioctl [virtio_gpu]] *ERROR* failed to wait resource create or attach finish. 
• [drm:virtio_gpu_queue_fenced_ctrl_buffer [virtio_gpu]] *ERROR* failed to wait virtio queue:0 < 3 
 
(3) Host gpu_server status 确认： 
从 Yocto log 中确认 gpu_server 是否检测到 timeout，系统是否存在内存不足，CPU loading 持续高负载，或者系
统其他异常等问题。 
 
最终需要根据 Android、Yocto 端提取到的异常现象综合分析 fence timeout 原因。 
 
1.3.1.4 GPU 相关对比实验 
常见对比实验如下： 
(1) 问题与系统版本是否相关 
(2) 上一代 GPU 框架（Midgard/Bifrost）平台是否可复现 
(3) 问题是否与 GPU Driver Version 有关 
(4) 关掉 AFBC 是否复现 
(5) 强制 glFinish 是否复现 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
(6) 关掉 partial update 是否复现 
(7) 问题是否和 ASTC、MSAA 相关 
(8) RenderEngine backend 切换实验 
(9) 其他方面等 
 GPU 性能分析 
对于 GPU 的性能问题分析，通常有三个方面包括 GPU 问题、应用问题和其他模块或系统相关问题。GPU 问题可以
查看 Main log 和 kernel log 中有没有 Mali/EGL/GLES 关键字的错误 log，根据 log 进行下一步的分析。可以使用工具
抓问题场景的 systrace 或 perferro 进行分析，以及使用 ARM Streamline 检查 HW 执行情况，查看具体是哪一个部分
影响到 GPU 的性能。也可以做一些针对性的对比实验，细分影响性能的部分。 
对于 APK 部分，也可以使用 systrace 或 perferro 进行分析，是否为 APK 原因。其他模块或系统相关问题可以通过
log 和火焰图进行分析。 
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
 
1.3.2.2 性能优化建议 
针对 GPU 的性能优化主要有以下几个建议： 
 
(1) 首先确认性能瓶颈 
明确具体是哪一部分影响到平台的性能，具体可以是 CPU、GPU（vertex 或 fragment）、Bandwith 等。确认性能瓶
颈后，有针对性地进行优化。 
 
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
MT8676 Hypervisor GPU 
 User Manual 
Confidential B 
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

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Hypervisor GPU 
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
# SRC0216 MT8676_Hypervisor_I2C_User_Manual_V1.2.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_I2C_User_Manual_V1.2.pdf

SHA-256：7a3b9551a0d4182a72f2d4f1ac1b88e1aca1e15170ca29efab2fa16379c8eab9

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0216.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.2 
出版日期:  2025-03-13
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
版本记录 
版本 日期 作者 描述 
1.0 2024-11-15 张厚松 正式版 
1.1 2024-12-27 王彧 增加章节 1.3.3 中断配置说明和 1.3.4 虚拟化配置方法 
1.2 2025-03-17 王舜昌 增加章节 1.3.5 节点配置和 1.3.6 特殊应用需求的配置 
 
  
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
 中断配置说明 ·············································································································································· 8 
 虚拟化配置方法 ·········································································································································· 8 
 节点配置 ······················································································································································ 9 
 特殊应用需求的配置··································································································································· 9 
1.4 常见问题/故障排除 ·············································································································································· 10 
 I2C 问题调试方法 ······································································································································ 10 
 DTS 配置 ····················································································································································· 10 
 确认 GPIO 模式 ·········································································································································· 10 
 测量波形 ···················································································································································· 10 
 如何打印 I2C 寄存器信息·························································································································· 11 
 寻求联发科技帮助 ···································································································································· 11 
附件一 附加条款 ····························································································································································· 12 
  
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

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 5 
MT8676 Hypervisor I2C 
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

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 6 
MT8676 Hypervisor I2C 
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
– Multi-transfer with a repeated start condition  
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

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 7 
MT8676 Hypervisor I2C 
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

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
 中断配置说明 
MT8676 Hypervisor I2C 若是以中断 passthrough 的方式使用，则中断默认送到 Yocto 一侧，如果将中断配置到
Android 侧，则 Yocto 侧无法使用中断。如果您希望以这种方式修改 I2C 中断，请向联发科技寻求协助。 
 
 虚拟化配置方法 
源代码路径：src/kernel/linux/v-xx/arch/arm64/boot/dts/mediatek/xxxx.dts 
 
• 虚拟化 I2C 总线节点 
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
 
• 在虚拟化 I2C 总线上添加从设备 
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

## PDF物理页 9

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 9 
MT8676 Hypervisor I2C 
User Manual 
Confidential B 
 节点配置 
默认需要将 master 节点的 status 配置成 “disabled” 
i2cX: i2c@xxxx { 
 compatible = "mediatek,mt6897-i2c"; 
 .... 
 status = "disabled"; 
  }; 
 
使用哪个项目，就将其子节点的 status 配置成 “okay” 
&i2cX { 
 status = "okay"; 
}; 
 
 特殊应用需求的配置 
有功耗需求，需要将 I2C 进 suspend 配置成低电平时相关方法如下： 
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
(此方法只针对使用内部上拉的配置方法，外部上拉需要通过控制外部上拉的供电实现此功能 ) 
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
 如何打印 I2C 寄存器信息 
在driver/i2c/busses/i2C-mt65xx.c 中添加如下内容： 
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

## PDF物理页 12

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 12 
MT8676 Hypervisor I2C 
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
# SRC0217 MT8676_Hypervisor_Log_Introduction_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Log_Introduction_V1.0.pdf

SHA-256：b339a40764b57a904f6139dfbce7fd7e87c72e546829f3bcc96ff88a92f89b62

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0217.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2025-07-11
MT8676 Hypervisor Log Introduction 
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
Hypervisor Log Introduction  
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
MT8676 
Hypervisor Log Introduction  
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
表目录 ··············································································································································································· 3 
1 Log ············································································································································································· 4 
1.1 概述·········································································································································································· 4 
 简单介绍 ······················································································································································ 4 
 名词解释 ······················································································································································ 4 
1.2 框架/流程概述 ························································································································································ 4 
 Log 架构介绍 ················································································································································ 4 
 Nebula Log 介绍 ··········································································································································· 4 
 UOS/T-Box 的早期 Log 会同时存到 SOS ····································································································· 4 
 Mdlog 存在 T-Box ········································································································································· 5 
1.3 配置/客制化指南 ···················································································································································· 5 
 Log 输出到 UART Consol 控制 ····················································································································· 5 
1.4 常见问题/故障排除 ················································································································································ 5 
附件一 附加条款 ······························································································································································· 6 
 
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
MT8676 
Hypervisor Log Introduction  
Confidential B 
1 Log 
1.1 概述 
 简单介绍 
此文主要介绍在 Multi-OS 系统上，MTK log 架构和常用 log 抓取方法。 
 名词解释 
表 1-1. 名词解释 
缩略词 解释 
Kernel log AP 端 Kernel driver 层 log 
Modem log Modem 端的 log 
UART console 通过串口输出 log 
Userspace log AP 端 Userspace 层 log 
 
1.2 框架/流程概述 
 Log 架构介绍 
不同 OS 的完整日志抓取方法请参考各自对应的文档，各自的 log 会存储在各自的文件系统中。下面将介绍在 
multi-os 环境下的特殊情况 
 
 Nebula Log 介绍 
谦川的 Nebula OS 的 log 都存在 SOS 端，在/data/debuglogger/mobilelog 中： 
nebula_tee_log: 表示 Nebula TEE 的 log 
nebula_hypervisor_log: 表示 Nebula OS 的 Hypervisor OS log 
 
 UOS/T-Box 的早期 Log 会同时存到 SOS 
Uos/T-Box 的 earlycon 时期 Kernel log 会存到 SOS 的 mobilelog 中的nebula_hypervisor_log 
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
Hypervisor Log Introduction  
Confidential B 
Uos/T-Box 的 console 时期开到 homscreen 前 Kernel log 会存到 SOS 的 mobilelog 中的main_log 
 Mdlog 存在 T-Box 
Modem 接在 T-Box 端，所以如要抓取 mdlog，请在 T-Box 下参考 Yocto 上抓取 mdlog 的方法。 
 
1.3 配置/客制化指南 
总体来说，各个 OS 的配置请在各个 OS 环境中独立配置。 
但 UART log 控制在 SOS 端有个总控。 
 Log 输出到 UART Consol 控制 
SOS 端对于 console 的控制会影响到所有 OS: 
1. 对于 log level： 
echo 0 > /proc/sys/kernel/printk 
如 SOS 端设 Kernel log level 为 0，则其他 OS 的 log 也将无法输出到 UART. 
 
2. 开机到 homescreen 后 Kernel log 会默认关闭 
->SOS 端 Kernel log 默认关闭后，其他 OS 的 log 也将不会输出 
可通过如下方法再开启：echo 1 > /proc/mtprintk 
如需要重启后， log 仍持续输出，则：setprop persist.vendor.uartconsole.enable 1 
 
3. user 版本 UART log 会默认关闭：如需要开启，请： fastboot oem p2u on 此命令在 SOS fastboot mode 下下
发，可同时影响三个 OS 的 UARTlog。 
 
1.4 常见问题/故障排除 
1. 一般情况下，不同 OS 的 log 请在对应 OS 中获取。 
2. 如果 SOS 起来了，但 UOS/T-Box 起不来，其 Kernel log 可以从 SOS 端 mobilelog 中nebula_hypervisor_log 和
main_log 中获取。 
 
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
Hypervisor Log Introduction  
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
# SRC0218 MT8676_Hypervisor_OP-TEE_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_OP-TEE_User_Manual_V1.0.pdf

SHA-256：1a36c8bd89a487745b75fe94ef1d696751b29991a33c33dc7b2bf6ec7a3c1cee

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0218.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.0 
出版日期：  2024-12-20
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
版本记录 
版本 日期 作者 描述 
1.0 2024-12-20 闫飞 正式版 
 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 概述 ··········································································································································································· 5 
1.1 TrustZone 功能简介 ················································································································································· 5 
1.2 OP-TEE 简介 ····························································································································································· 7 
2 OP-TEE 框架和功能 ··················································································································································· 9 
2.1 开启虚拟化后 OP-TEE 核心组件 ···························································································································· 9 
2.2 MediaTek 平台 OP-TEE 开启方式 ························································································································· 12 
 Yocto Branch ··············································································································································· 12 
 Android Branch ··········································································································································· 13 
2.3 安全存储机制 ························································································································································ 14 
 REE 文件系统 ············································································································································· 14 
 RPMB 文件系统 ·········································································································································· 15 
2.4 CA 和 TA 介绍 ························································································································································ 16 
3 基于 OP-TEE 的应用开发 ········································································································································ 18 
3.1 编写 CA 和 TA 所依赖的 GP API···························································································································· 18 
3.2 示例程序 ································································································································································ 19 
 CA 文件 ······················································································································································· 19 
 TA 文件 ······················································································································································· 21 
3.3 编译和运行 ···························································································································································· 22 
 Yocto 域 ······················································································································································ 22 
 Android 域 ·················································································································································· 25 
4 OP-TEE 的测试与调试 ············································································································································· 28 
4.1 OP-TEE 的自测方式 ··············································································································································· 28 
4.2 OP-TEE 相关 Log 介绍 ··········································································································································· 29 
 User Space ·················································································································································· 29 
 Linux Kernel ················································································································································· 30 
 Secure World ··············································································································································· 30 
4.3 OP-TEE 常见异常与分析 ······································································································································· 31 
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
5 附录 ········································································································································································· 33 
5.1 参考文档 ································································································································································ 33 
附件一 附加条款 ····························································································································································· 34 
 
 
图片目录 
图 1-1. 普通世界和可信世界 ···················································································································································· 5 
图 1-2. Arm 异常等级划分 ························································································································································ 6 
图 1-3. 预留的 TEE OS memory ················································································································································· 7 
图 1-4. OP-TEE 架构 ··································································································································································· 8 
图 2-1. 非虚拟化下 OP-TEE 的组成 ········································································································································ 10 
图 2-2. 虚拟化下 OP-TEE 的构成 ············································································································································ 11 
图 2-3. 基于 OP-TEE 的安全存储 ············································································································································ 14 
图 4-1. OP-TEE log 示例 ··························································································································································· 31 
 
 
表格目录 
表 4-1. xtest 测项 ····································································································································································· 28 
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
1 概述 
该文档介绍了 OP-TEE 的功能、结构设计、各组件的组成、如何编写 CA 和 TA，以及如果自测，如何 Debug。 
本文档的章节安排为： 
第 1 章为概述，介绍 TrustZone 的 OP-TEE 的基本概念。 
第 2 章介绍 OP-TEE 的框架和功能。 
第 3 章介绍如何开发基于 OP-TEE 的应用。 
第 4 章为测试和调试，包含 OP-TEE OS 本身，以及 TA 的调试方式。 
第 5 章为附录，列举了参考文件。 
 
1.1 TrustZone 功能简介 
TrustZone 是 Arm A-profile 架构中的安全架构名称。TrustZone 提供了两个执行环境，并在它们之间通过系统范围的
硬件强制隔离，如图 1-1 所示： 
 
图 1-1 为普通世界和可信世界的示意图。普通世界运行一个丰富的软件栈。这个软件栈通常包括大量的应用程序
集、一个复杂的操作系统（如 Linux），以及一个可能的虚拟机监控器。这样的软件栈庞大且复杂。尽管可以采取
措施提高其安全性，但由于攻击面较大，它们更容易受到攻击。可信世界运行一个更小且更简单的软件栈，称为
可信执行环境（TEE）。通常，TEE 包括由轻量级内核托管的几个可信服务。可信服务提供诸如密钥管理等功能。
这个软件栈的攻击面显著较小，由于这个软件栈的攻击面显著较小，因此其脆弱性也大大减少。  
 
图 1-1. 普通世界和可信世界 
 
 
 
      
      
       
       
          
                
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
Armv8 和 v9 将 CPU 分为 4 种异常等级，分别是 EL0，EL1，EL2 和 EL3。 
在 EL0、EL1 和 EL2 级别，处理器可以处于安全状态或非安全状态，这由 SCR_EL3.NS 位控制。通常会看到如下写
法： 
NS-EL1: 非安全状态，异常级别 1 
S-EL1: 安全状态，异常级别 1 
EL3 始终处于安全状态，无论 SCR_EL3.NS 位的值如何。 
 
安全状态和异常级别的安排如图 1-2 所示： 
 
 
图 1-2. Arm 异常等级划分 
 
Arm 为了保证 TrustZone 的安全性，提供了一些列的硬件隔离技术，包含中断隔离，片上 RAM/ROM 隔离，片外
RAM/ROM 隔离，外围设备的硬件隔离，外部 RAM 和 ROM 的隔离等。Arm 提供的隔离技术可以参阅 Arm 的技术
文档，在此不再赘述。 
MediaTek 提供了功能更加强大的内存保护单元 (SMPU) 保证 TrustZone 所在的内存区域只能被安全的 CPU 访问，阻
止非安全的 CPU，以及各种外设通过各种方式访问 TrustZone 所在的内存区间。 
 
          
             
      
             
   
   
   
      
       
      
       
          
                            
                
          
                        
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
 
图 1-3. 预留的 TEE OS memory 
 
图 1-3 是预留的 TEE memory 和 SMPU 保护这段 reserverd memory 的示例图。这段 memory 只允许 Secure CPU 访
问，即对应前文，只有 CPU 处在 S-EL0，S-EL1 或 EL3 时才可以访问;其他场景，例如 user space 程序，Linux Kernel
程序，hypervisor 程序都无权访问此段 memory。 
 
1.2 OP-TEE 简介 
OP-TEE 是一个开源的 Secure OS。图 1-4 是 OP-TEE 官方提供的架构图。 
OP-TEE 内核是运行在 S.EL1 和 S.EL0 中的可信应用程序。可信应用程序通过 TEE 内部 API 与 OP-TEE 内核通信。TEE 
内部 API 是由 GlobalPlatform 组织开发的标准 API。GlobalPlatform 致力于开发标准 API，这些 API 不仅支持 OP-TEE，
还支持许多不同的 TEE。采用 GP 标准意味着在其他支持 GP 接口的 TEE 应用可以方便地移植到 OP-TEE 上，反之亦
然，为 OP-TEE 设计的 TEE 应用也可以方便地移植到其他支持 GP 接口的 TEE 上。 
 
在非安全状态下，内核空间中有一个 OP-TEE 驱动程序。它负责处理与 OP-TEE 内核的低级别通信。 
在非安全用户空间（EL0）中，有一个用户空间库 (libopenteec.so) 实现了 GlobalPlatform API。TEE Client API 是应用
程序用来访问 TA（可信应用程序）的接口。 
OP-TEE 还包括一个称为 tee-supplicant 的组件。tee-supplicant 处理 OP-TEE 需要返回到 REE world 处理的事务，比如
从文件系统中加载 UTA，再比如 TEE 安全存储功能需要把加密后的数据保存在 Flash 或者 RPMB 中，但 TEE 本身无
法读写 flash 或 RPMB，需要切回 REE，通过 tee-supplicant 完成读写。 
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

## PDF物理页 8

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 8 
MT8676 Hypervisor OP-TEE 
User Manual 
Confidential B 
 
图 1-4. OP-TEE 架构 
 
 
 
 
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
2 OP-TEE 框架和功能 
2.1 开启虚拟化后 OP-TEE 核心组件 
在章节 1.2 中我们简单提到了 OP-TEE 的构成，本章主要介绍开启虚拟化后 OP-TEE 的构成。 
 
图 2-1 是未开启虚拟化时 OP-TEE 的组成，各组件分别为： 
• Tee-supplicant：TEE 守护进程处理 load UTA，secure storage 读写等需要切回 REE 执行的事务 
• libopenteec.so：提供 Client 端 GP API，CA 与 TA 通讯时使用 
• OP-TEE Linux Driver：提供 shared memory 等 API，执行 SMC，与 Secure World 通讯 
• OP-TEE OS：OPTEE Kernel 层提供的所有功能 
• PTA（Pseudo Trusted Applications）：提供 CA 或 UTA 可以调用的 API，一些系统服务会以 PTA 的方式提供，PTA
运行在 OP-TEE Kernel 层，与 OP-TEE OS 打包在一起 
 
基于 OP-TEE 的应用： 
CA & TA 为运行在 OP-TEE 上的应用 
• CA（Client Agent）：运行在 REE（非安全世界） 
• TA（Trusted App）：运行在 TEE（安全世界），需要受保护的操作和密钥可以放于 TA 中 
 
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
 
图 2-1. 非虚拟化下 OP-TEE 的组成 
 
未开启虚拟化时，OP-TEE 的初始化在 ATF 跳转 BL32 时进行。 
 
当开启 OP-TEE 虚拟化之后，OP-TEE 会在 TEE 内，为每一个 Host VM，创建一个对应的 OP-TEE 的 VM。 
如图 2-2 所示，我们的 L+L+A 架构包含两个 Linux 的虚拟机和一个 Android 的虚拟机，分别为 
• SOS（Linux 虚拟机） 
• UOS（Android 虚拟机） 
• UOS（Linux 虚拟机，又称为 T-Box 域） 
 
开启虚拟化后，ATF 跳转 BL32 做初始化时，只会初始化 OP-TEE nexus core 层。 
在每个虚拟机创建之前，Hypervisor 层会发送 SMC command（OPTEE_SMC_VM_CREATED）至 OP-TEE，创建出对应
的 OP-TEE 虚拟机，并在预先分配好的安全内存中初始化 OP-TEE VM 所需的数据结构。 
REE 
Tee-supplicant 
OP-TEE Linux Driver 
OP-TEE OS 
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
SOS（Linux 虚拟机）的 TEE 请求会进入到 OP-TEE-VM1 中，OP-TEE-VM1 通过 RPC 或者 RET 返回到 REE 时，也会回
到 SOS 域 
UOS（Android 虚拟机）同理，请求会进入到 OP-TEE-VM2，从 TEE 返回时返回到 UOS（A） 
UOS（Linux 虚拟机，又称为 T-Box 域）同理。 
OP-TEE-VM1/VM2/VM3 在物理内存上是完全隔离的，互不影响。 
 
 
图 2-2. 虚拟化下 OP-TEE 的构成 
 
 
 
 
Hypervisor 
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
2.2 MediaTek 平台 OP-TEE 开启方式 
若需要开启或关闭 OP-TEE，需同时修改 Yocto 和 Android branch。下面分别介绍 Yocto branch 和 Android branch 需
要做哪些改动。 
 Yocto Branch 
请先检查如下目录存在；若如下目录不存在，则表示 release 不完全，需联系 MediaTek 处理。 
• src/bsp/trustzone/optee/3.18.0/optee_client 
• prebuilt/bsp/trustzone/optee/3.18.0/optee_os 
• prebuilt/bsp/trustzone/optee/3.18.0/source 
• prebuilt/bsp/trustzone/optee/3.18.0/ta/pkcs11 
 
确认一下目录都存在后，下面是 OP-TEE 的 config 配置方法： 
Yocto branch 与 OP-TEE 相关的 Config 有两个，功能分别是： 
TEE_SUPPORT：表示支援哪种 TEE，填入“optee”表示开启 OP-TEE。 
TEE_TEST_SUPPORT：表示是否需要在编译时打包 OP-TEE 测试工具 xtest，此 config 只针对 OP-TEE 有效。 
 
定义的位置在 Yocto 的 conf 文件，公版参考的路径为 
meta/meta-mediatek-mt8676-hyp/conf/machine/auto8676p1_64_hyp.conf 
请客户根据自己的 project，选择对应的位置修改。 
 
若需要开启 OP-TEE，请将 config 设定为： 
TEE_SUPPORT = "optee" 
TEE_TEST_SUPPORT = "yes" 
 
若需要关闭 OP-TEE，请将 config 设定为： 
TEE_SUPPORT = "none" 
TEE_TEST_SUPPORT = "no" 
 
Kernel 的部分所需修改如下 
a. Kernel 中需要开启如下两个 config 
CONFIG_MTK_OPTEE_SUPPORT=m 
CONFIG_OPTEE_REE_CONSOLE=y 
 
在新的版本中，若将 TEE_SUPPORT 设置为 "optee"，会自动 enable 这两个 Kernel config。 
若您拿到的版本较旧，未采用这种机制的话，则需要自己在对应的 Kernel config 中打开这两个 config 
 
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
b. 在 KO Table 中将 OP-TEE 所需的 KO 加入 Table 中 
• tee.ko,/../kernel_device_modules-
6.1/drivers/tee/optee/tee/tee.ko,ramdisk,Y,Y,user/userdebug/eng 
• optee.ko,/../kernel_device_modules-
6.1/drivers/tee/optee/tee/optee.ko,ramdisk,Y,Y,user/userdebug/eng 
 
c. 在 dts 中添加如下描述 
&firmware { 
 optee { 
  compatible = "linaro,optee-tz"; 
  method = "smc"; 
 }; 
}; 
 
 Android Branch 
请先检查如下目录存在；若如下目录不存在，则表示 release 不完全，需联系 MediaTek 处理 
• vendor/mediatek/proprietary/trustzone/optee/3.18.0/optee_client 
• vendor/mediatek/proprietary/trustzone/optee/3.18.0/secure_spmlib 
 
Android branch 与 OP-TEE 相关的 config 有两个，分别的功能是 
MTK_OPTEE_SUPPORT：Vendor 层是否打开 OP-TEE，若打开，则会把 OP-TEE 的 binary 打包进 tee.img。 
MGVI_MTK_OPTEE_SUPPORT：HAL 层 config，此 config 不会影响 OP-TEE 的开启或关闭，但 Android 域基于 OP-TEE
的 feature 可能会基于这个 config 判断自身的开启和关闭，故建议一并开启。 
开启的位置为： 
MTK_OPTEE_SUPPORT 在 ProjectConfig.mk 中 
MediaTek 公版示例文件路径为： 
device/mediateksample/auto8676p1_64_bsp_vm/ProjectConfig.mk 
MGVI_MTK_OPTEE_SUPPORT 定义在 VendorConfig.mk 中， 
MediaTek 公版示例文件路径为: 
device/mediatek/vendor/mgvi_spm_64_armv82_tbox/VendorConfig.mk 
若开启 OP-TEE，则将这两个 config 值为 yes 
MTK_OPTEE_SUPPORT = yes 
MGVI_MTK_OPTEE_SUPPORT = yes 
 
若需要关闭 OP-TEE，将这两个 config 置为 no，或者直接删除这两个 config 的定义皆可。 
Kernel 的部分所需修改与 Yocto 相同，请参考上节内容， 用同样的方法打开 Android 域 Kernel 层 OP-TEE config。 
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
2.3 安全存储机制 
在 OP-TEE 中，安全存储是根据 GlobalPlatform 的 TEE Core API 定义实现的。该规范要求必须能够存储通用数据和密
钥材料，并保证存储数据的机密性和完整性，以及修改存储的操作的原子性（这里的原子性意味着整个操作要么
成功完成，要么不进行任何写入）。 
 
目前在 OP-TEE 中有两种安全存储实现。 
 REE 文件系统 
使用外部（非安全）文件系统来存储加密的数据。这种方式依赖于正常世界（ Normal World）的文件系统，但所有
的敏感操作（如加密和解密）都在安全世界（Secure World）内完成。其实现原理请参阅图 2-3。 
 
图 2-3. 基于 OP-TEE 的安全存储 
OP-TEE 默认支持此种方式的安全存储。 
注意： 
• 使用 REE FS 形式的安全存储保存的数据，会保存在对应 VM 的文件系统中，用户或程序无法在 REE 测读取到文件的内容，
但有读写权限的用户或程序可能篡改或删除此文件。 
 
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
Yocto 域默认存储位置为：/var/lib/tee 或/data/vendor/tee 
若想修改此路径，方式为： 
Yocto branch 上找到 
meta/meta-mediatek/recipes-bsp/trustzone/optee-client_3.18.0.bb 
修改 CFG_TEE_FS_PARENT_PATH的定义。 
 
Android 域默认存储路径为：/data/vendor/tee 
若想修改此路径，方式为： 
Android branch 上找到 
vendor/mediatek/proprietary/trustzone/optee/3.18.0/optee_clent/Android.bp 
修改 -DTEE_FS_PARENT_PATH的定义。 
 
注意： 
• 请读者根据需求修改此目录，修改时请留意 tee-supplicant 是否有权限创建目录；目录所在分区是否会因重启或者恢复出厂
设置而被重置。 
 
 RPMB 文件系统 
基于 RPMB 的安全存储，数据加解密方式与 REE FS 方式类似，只是存储介质由普通文件系统变为存储在 UFS（或
eMMC）附带的 RPMB 区域，利用 RPMB 的防篡改和防重放特性，提供更高的安全性。存储原理与图 2-3 类似，只
是将左下角的 “Linux File System” 替换成 RPMB 的 driver。 
若想在虚拟化的项目上支持基于 RPMB 的安全存储，需要 UFS 硬件支持多个 RPMB region（例如需要 UFS3.0 及以上
版本，eMMC 不支持），因此此种存储方式并不是默认支持的，需联系 MediaTek 确认此方式在您的硬件上是否支
持。 
 
在编写 TA 程序时，需通过参数指定，将数据存储与 REE 文件系统和 RPMB 文件系统实现。 
定义了两个 OP-TEE 特定的存储标识符：TEE_STORAGE_PRIVATE_REE 和 TEE_STORAGE_PRIVATE_RPMB。 
TEE_STORAGE_PRIVATE_REE 表示将数据保存于 REE 文件系统； 
TEE_STORAGE_PRIVATE_RPMB 表示将数据保存于 RPMB 文件系统。 
 
注意： 
• 无论是 REE FS 还是 RPMB 存储方式，各个 VM 存储的数据不互通；即由哪个域写入，就只能从哪个域读取。 
 
 
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
在平台上执行 xtest 6001 测项，可以判断中平台上安全存储功能是否正常。 
* regression_6001 Test TEE_CreatePersistentObject 
 o regression_6001.1 Storage id: 00000001 
   regression_6001.1 OK 
 o regression_6001.2 Storage id: 80000000  -> REE FS 方式的安全存储 
   regression_6001.2 OK 
 o regression_6001.3 Storage id: 80000100  -> RPMB 方式的安全存储 
   regression_6001.3 OK 
   regression_6001 OK 
 
若执行 xtest 6001 测试时，没有执行 regression_6001.3 测项，则说明当前设备并不支持 RPMB，不支持的原因可能
是 RPMB key 未烧录，或软硬件环境不满足需求；若确定有 RPMB 需求，请联系 MediaTek 做进一步排查。 
有关 xtest 如何执行，可以参阅本文章节 4.1。 
 
2.4 CA 和 TA 介绍 
在 OP-TEE 中，CA 通常指的是"Client Application"（客户端应用程序）。CA 是运行在普通世界（REE，Rich Execution 
Environment）中的应用程序，它与运行在受信世界（TEE，Trusted Execution Environment）中的受信应用程序
（TA，Trusted Application）进行通信。CA 通过调用 TEE API 来请求 TA 执行安全操作。 
 
以下是 CA 和 TA 之间的基本交互流程： 
1. CA 启动：客户端应用程序在普通世界中启动。 
2. 初始化 TEE 会话：CA 通过 TEE API 初始化与 TA 的会话。 
3. 发送命令：CA 向 TA 发送命令请求，要求 TA 执行特定的安全操作。 
4. TA 处理请求：TA 在受信世界中处理请求，并返回结果。 
5. 接收结果：CA 接收 TA 返回的结果，并根据需要进行处理。 
6. 关闭会话：操作完成后，CA 关闭与 TA 的会话。 
 
用户可根据需求，在 user space 或 Kernel space 编写 CA。 
 
在 OP-TEE 中，TA 指 “Trusted Application”(可信应用)。OP-TEE 支持三种类型的可信应用（TA），分别是用户模式
可信应用（UTA）、静态可信应用（PTA，也称为 Pseudo TA）和早期用户模式可信应用（Early UTA）。这些应用类
型在功能、执行时机和运行环境方面有所不同。下面是它们的主要区别：  
1. 用户模式可信应用（UTA） 
• 运行环境：UTA 在用户模式下运行，与操作系统的内核模式相对立。这意味着它们在一个隔离的环境中执行，
提供了更高的安全性。 
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
• 部署方式：UTA 通常作为单独的应用程序部署，可以通过安全存储进行加载和管理。 
• 用途：UTA 适用于处理高度敏感的数据或执行安全关键的任务，如加密操作、密钥管理等。  
 
2. 静态可信应用（PTA） 
• 运行环境：PTA 在 TEE 内核模式下运行，与 UTA 相比，它们有更高的权限和更直接的访问 TEE 核心服务的能
力。 
• 部署方式：PTA 通常是在 TEE 操作系统构建时静态集成的，不是作为独立应用程序加载的。 
• 用途：PTA 用于实现一些需要更高权限访问 TEE 资源的功能，如管理和控制 TEE 内部的其他组件或服务。 
 
3. 早期用户模式可信应用（Early UTA） 
• 运行环境：Early UTA 也在用户模式下运行，但它们在系统启动的早期阶段被加载和执行。  
• 部署方式：与普通的 UTA 相似，但它们在 TEE 初始化过程中较早启动，用于处理启动早期阶段的安全任务。  
• 用途：Early UTA 通常用于执行系统启动过程中的安全检查或配置，如验证启动配置的完整性或早期硬件资源的
安全配置。 
 
注意： 
• 目前基于 MediaTek 平台的 OP-TEE 只支持开发 UTA，若有 PTA 或 Early UTA 的开发需求，请联系 MediaTek。 
 
UTA 会放置在文件系统上， 
Yocto 域的路径是/lib/optee_armtz/。 
Android 域的路径是/vendor/lib/optee_armtz/。 
若一个 TA 在 Yocto 域和 Android 域都需要，您需要在两个域的文件系统上都放置一份。 
 
 
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
3 基于 OP-TEE 的应用开发 
在 Yocto 域和 Android 域都支持 OP-TEE，且 Yocto 域和 Android 域所需的 API 都是一样的。 
这意味着 Yocto 域和 Android 域的 CA/TA 代码可以完全一样。 
如果您的程序需要运行在 Yocto 域，需要将 CA 和 TA 的执行文件打包进 Yocto 域的文件系统， 
Android 域同理，若需要运行于 Android 域，也需要将执行文件打包进 Android 域的文件系统。 
 
3.1 编写 CA 和 TA 所依赖的 GP API 
OP-TEE 支持 GP (GlobalPlatform) API，意味着您的 CA/TA 程序可以方便的在其他支持 GP API 的 TEE OS 上进行快速移
植。关于 GP API 的资料，您可以自行查阅互联网上的资料。 
 
CA 侧使用的 GP API 以 TEEC 开头，您可以在如下头文件中找到相关定义
${PATH}/optee/3.18.0/optee_client/public/tee_client_api_extensions.h 
其中，Yocto branch 上的路径为：src/bsp/trustzone 
Android branch 上的路径为：vendor/mediatek/proprietary/trustzone 
 
CA 端负责与 TEE 通讯的 API 主要是以下五个 API： 
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
CA 端与共享内存操作有关的 API 是如下三个： 
1. TEEC_Result TEEC_RegisterSharedMemory(TEEC_Context *context, 
TEEC_SharedMemory *sharedMem); 
 
2. TEEC_Result TEEC_AllocateSharedMemory(TEEC_Context *context, 
TEEC_SharedMemory *sharedMem); 
 
3. void TEEC_ReleaseSharedMemory(TEEC_SharedMemory *sharedMemory); 
 
GP 在 TEE 内的 API 以 “TEE_“ 开头，涉及到 TEE 内的各种操作，例如加解密操作，安全文件读写等，请参阅 GP
相关文档，这里不再赘述。 
编写一个 TA，必须实现以下五个 API。 
1. TEE_Result TA_CreateEntryPoint(void) 
 
2. void TA_DestroyEntryPoint(void) 
 
3. _Result TA_OpenSessionEntryPoint(uint32_t param_types, 
  TEE_Param __maybe_unused params[4], 
       void __maybe_unused **sess_ctx) 
 
4. void TA_CloseSessionEntryPoint(void __maybe_unused *sess_ctx) 
 
5. TEE_Result TA_InvokeCommandEntryPoint(void __maybe_unused *sess_ctx, 
uint32_t cmd_id, 
          uint32_t param_types, TEE_Param params[4]) 
 
接下来我们结合一个示例程序讲解如何编写一个最简单的 CA 和 TA。 
 
3.2 示例程序 
MediaTek 撰写了一份 sample code，讲解如何写一个简单的 demo 程序，这份 sample code 可同时用于 Yocto 域和
Android 域。如果有需要全部源码文件，可联系 MediaTek 获取。 
本章会基于 MediaTek 的 demo code 做讲解。 
 CA 文件 
CA 部分的开发主要是对章节 3.1 介绍的 TEE Client API 的使用，包括如何初始化上下文，如何打开/关闭会话，以及
如何使用不同的参数类型进出 TA。可参考该 demo 的调用流程进行 CA 的开发。 
 
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
如下是初始化、销毁 TEE 上下文和打开、关闭会话的流程，如果没有多实例 TA 并发的需求，建议参考 demo，使
用全局变量控制上下文和会话数量为单个。 
static TEEC_Session g_stTeecSession = {0}; 
static TEEC_Context g_stTeecContext = {0}; 
static bool g_bIsTeecInitialized = false; 
 
TEEC_Result initTzContext() 
{ 
const       TEEC_UUID stTeecUuid = {0xa60589fd, 0x0158, 0x40eb, {0xa7, 0x74, 0xa3, 0x98, 
0xb1, 0xd6, 0x98, 0x32}}; 
TEEC_Result u32TeecResult        = TEEC_ERROR_GENERIC; 
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
 
TEEC_CloseSession(&g_stTeecSession); 
TEEC_FinalizeContext(&g_stTeecContext); 
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
 
u32TeecResult = TEEC_SUCCESS; 
g_bIsTeecInitialized = false; 
 
exit: 
return u32TeecResult; 
} 
 
当 CA 发送命令到 TA 时，需要使用 TEEC_InvokeCommand 函数，该函数支持 CA 带不同类型的参数到 TA，如下以值
类型为例展示该函数的使用方法。 
TEEC_Result testValueParameter() 
{ 
TEEC_Result    u32TeecResult   = TEEC_ERROR_GENERIC; 
uint32_t       u32RetOrig      = 0; 
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
 
 TA 文件 
TA 部分实现了基于不同的命令标识来执行 CA 请求的各种操作，TA 的开发者要定义自己的 UUID，在 CA 调用
TEEC_OpenSession 时传入。同时该 demo 也在user_ta_header_defines.h 中将 TA 定义为单实例，即 TA 的二进
制在 OP-TEE 内存中只会存一份，不会多次加载。TA_STACK_SIZE 和 TA_DATA_SIZE则需要根据各 TA 的实现自行调整
大小。 
#define TA_UUID { 0xa60589fd, 0x0158, 0x40eb, {0xa7, 0x74, 0xa3, 0x98, 0xb1, 0xd6, 0x98, 
0x32} } 
 
TEE_Result TA_CreateEntryPoint(void) 
 
#define TA_FLAGS (TA_FLAG_SINGLE_INSTANCE | \ 
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
TA_FLAG_MULTI_SESSION \ 
) 
 
#define TA_STACK_SIZE  (2 * 1024) 
#define TA_DATA_SIZE  (32 * 1024) 
 
当 TA 收到 CA 发送的命令时，即可根据命令标识来进行参数检查，并进行相应的功能实现。  
TEE_Result TA_InvokeCommandEntryPoint(void *pSessionContext, uint32_t nCommandID, uint32_t 
nParamTypes, TEE_Param pParams[4]) 
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
 
3.3 编译和运行 
CA 的编译需要依赖库文件 libopenteec.so；TA 的编译需要依赖 MediaTek 提供的开发包。 
Android 域的开发包会放在 vendor/mediatek/proprietary/trustzone/optee/3.18.0/secure_spmlib 路径。 
Yocto 域的开发包放在 prebuilt/bsp/trustzone/optee/3.18.0/optee_os 路径。 
 Yocto 域 
Yocto 域 CA/TA 的编译建议通过 Yocto 原生方式，可以参考如下写法： 
inherit fog 
inherit deploy 
 
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
DESCRIPTION = "demo_tz_app" 
LICENSE = "MediaTekProprietary" 
LIC_FILES_CHKSUM = 
"file://${PROPRIETARY_LICENSE_PATH}/MediaTekProprietary;md5=c5d17c6905715d0948a3d6087602d12d
" 
 
SRC_URI = "fog://src/bsp/tzapp2/demo_tz_app;name=demo_tz_app" 
PACKAGES = "${PN}" 
INHIBIT_PACKAGE_DEBUG_SPLIT = "1" 
 
SRCREV_demo_tz_app = "${AUTOREV}" 
S = "${WORKDIR}/git" 
 
DEPENDS += "optee-client" 
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
} 
 
在src/bsp/tzapp2/demo_tz_app 中，提供 makefile 来给 bb 文件调用 
.PHONY: all clean install 
 
all: 
$(MAKE) -C demoCA setup 
$(MAKE) -C demoCA build BUILD_FROM_YOCTO=${BUILD_FROM_YOCTO} 
$(MAKE) -C demoTA TA_DEV_KIT_DIR=${TA_DEV_KIT_DIR} 
LIBGCC_LOCATE_CFLAGS=${LIBGCC_LOCATE_CFLAGS} 
 
clean: 
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
 
CA 的 makefile 参考如下 
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
 
$(OBJS): %.o:%.c 
$(CC) $(CPPFLAGS) $(CFLAGS) -o $(OBJ_PATH)/$(notdir $@) -c $< 
 
$(OBJS_S): %.o:%.S 
$(CC) $(CPPFLAGS) $(CFLAGS) -o $(OBJ_PATH)/$(notdir $@) -c $< 
 
clean: 
 @rm -rf $(OBJ_PATH) 
 
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
TA 的编译需要同时提供 makefile 和 sub.mk，makefile 参考如下 
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
 
sub.mk 参考如下 
global-incdirs-y += include 
srcs-y += src/demo_ta_entry.c 
srcs-y += src/demo_ta_commands.c 
 
编译命令参考： 
source meta/poky/oe-init-build-env && bitbake demo-tz-app -c cleansstate; bitbake demo-tz-
app 2>&1 | tee mtk_demo.log 
 
该命令会同时编译出 CA & TA 档案。 
可于如下路径查看编译产物： 
Yocto CA: 
• build/tmp/work/aarch64-poky-linux/demo-tz-app/1.0/git/demoCA/out/demoTzApp 
Yocto TA： 
• build/tmp/work/aarch64-poky-linux/demo-tz-app/1.0/git/demoTA/out/a60589fd-0158-40eb-a774-
a398b1d69832.ta 
 
将 TA (a60589fd-0158-40eb-a774-a398b1d69832.ta) push 进平台的/lib/optee_armtz/路径下； 
将 CA (demoTzApp) push 进平台的任意可写路径，修改权限为可执行后，即可执行 demo 程序。 
 Android 域 
Android 域的 CA 建议使用 Android 自带的编译系统，Android.bp 写法参考如下： 
cc_binary { 
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
 
以 MT8676 平台为例，编译命令为： 
source build/envsetup.sh && export OUT_DIR=out_demo && lunch vext_auto8676p1_64_bsp_vm_tbox-
userdebug && mmm vendor/mediatek/proprietary/trustzone/demo_tz_app/demoCA | tee 
make_demoCA.log 
 
Android 域 TA 编译使用脚本，参考如下： 
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
 
将 MediaTek 提供的 Android OP-TEE TA 开发包和章节 3.3.1 小节提供的 TA 编译的 makefile 和 sub.mk 放到同一级路
径下即可进行编译。 
 
注意： 
• 使用该脚本前，需要自行设定 ANDROID_TOP 值为 MediaTek Android 基线的路径 
 
可于如下路径查看编译产物： 
Android CA: 
• out_demo/target/product/auto8676p1_64_bsp_vm_tbox/vendor/bin/demoTzApp 
Android TA: 
• vendor/mediatek/proprietary/trustzone/demo_tz_app/demoTA/out/a60589fd-0158-40eb-a774-
a398b1d69832.ta 
 
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
将 TA (a60589fd-0158-40eb-a774-a398b1d69832.ta) push 进平台的/vendor/lib/optee_armtz/路径下； 
将 CA (demoTzApp) push 进平台的任意可写路径，修改权限为可执行后，即可执行 demo 程序。 
 
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
4 OP-TEE 的测试与调试 
4.1 OP-TEE 的自测方式 
OP-TEE 官方有搭配自测工具，名为 xtest。 
在 Yocto 域，MediaTek 会释放 xtest 代码，可编译 xtest 并打包进 load 中；在 Android 域，因 release policy 的原
因，MediaTek 未提供 xtest 源码，需要 push binary 文件进平台中进行测试。 
 
xtest 可以通过查阅源码观察测项内容，这里简单整理如 表 4-1 所示： 
表 4-1. xtest 测项 
Xtest 测项 测试目的简介 
xtest_1 OP-TEE 基本功能测试，如进出 TEE 的测试，TA 的 panic 测试等 
xtest_2 socket 相关测试 
xtest_4 加解密算法测试 
xtest_5 Share memory 测试 
xtest_6 安全存储相关测试 
xtest_8 KDF，Mbed 等杂项测试 
Pkcs11 PKCS11 相关组件测试 
 
在 Yocto 域 xtest 由如下文件组成： 
/usr/bin/xtest -> xtest 的可执行程序 
/lib/optee_armtz/*.ta  -> xtest 测试依赖的 UTA   
在串口或 adb shell 中输入“xtest” 即可开始执行 xtest 测试 
 
在 Android 域 xtest 由如下文件组成： 
/vendor/bin/xtest -> xtest 的可执行程序 
/vendor/lib/optee_armtz/*.ta -> xtest 测试依赖的 UTA 
 
Android 域执行 xtest 前需要用 “su” 切换到管理员权限，然后 setenforce 0 关闭 selinux，然后执行 xtest 
# su 
# setenforce 0 
# xtest 
 
待 xtest 执行完毕后，会打印出有多少测项 pass 和 fail。 
若 xtest 无法执行，则说明当前环境 OP-TEE 异常，请先按照如下方式自查： 
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
1. 查看 optee.ko 和 tee.ko 是否有正确 insmod 进去 
# lsmod | grep tee 
正常情况下，应看到 TEE 和 OP-TEE driver 被正确加载。 
 
2. 查看 tee-supplicant 进程是否有运行起来 
通过 adb 或串口进入 shell，输入以下命令 
# ps -A | grep tee 
查看 tee-supplicant 进程是否存在 
正常情况下，tee-supplicant 进程在后台运行，例如 
sh-3.2# ps -A | grep tee 
   2250 ?        00:00:00 tee-supplicant 
 
auto8676p1_64_bsp_vm_tbox:/ $ ps -A | grep tee 
nobody         451     1    2452248  13708 0                   0 S 
android.hardware.security.keymint@3.0-service.tee 
system         803     1    2191704  10548 0                   0 S 
android.hardware.gatekeeper-service.tee 
root          1125     1    2176420  10168 0                   0 S tee-supplicant 
 
4.2 OP-TEE 相关 Log 介绍 
通过前面的介绍，函数从 CA 跳转入 TA，一般需要通过如下几个部分 
CA -> libopenteec.so -> linux kernel -> ATF -> optee os -> TA 
我们介绍 log 的时候，也会分别介绍这几个模块中的 log 会如何打印。 
Libopenteec.so/linux kernel/ATF 中的逻辑较为简单，一般不会遇到问题，最常见的问题出现在 CA、TA 以及
OP-TEE OS 中。 
 
 User Space 
User space 包含 CA 和 libopenteec.so。 
CA 端的 log 由应用开发者自己编写和维护，例如，如果是 Yocto 域的应用，则可以用 printf 打印，如果是 Android
域的应用，则由 ALOG 等 Android 指定的 log 方式输出。 
注：TEEC_OpenSession 和 TEEC_InvokeCommand 这两个 API 的最后一个参数 err_origin 可以表示错误发生在哪个
阶段，强烈建议应用开发者打印出此值，例如： 
res = TEEC_OpenSession(&ctx, &sess, &uuid, 
TEEC_LOGIN_PUBLIC, NULL, NULL, &err_origin); 
if (res != TEEC_SUCCESS) 
errx(1, "TEEC_Opensession failed with code 0x%x origin 0x%x", res, err_origin); 
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
 
res = TEEC_InvokeCommand(&sess, TA_HELLO_WORLD_CMD_INC_VALUE, &op,  &err_origin); 
if (res != TEEC_SUCCESS) 
errx(1, "TEEC_InvokeCommand failed with code 0x%x origin 0x%x", res, err_origin); 
 
origin 的值为 1-4，其意义分别为，在 user space 层出错；Linux/atf 通讯出错；OP-TEE Kernel 层出错；TA 层出错。 
#define TEEC_ORIGIN_API          0x00000001 
#define TEEC_ORIGIN_COMMS        0x00000002 
#define TEEC_ORIGIN_TEE          0x00000003 
#define TEEC_ORIGIN_TRUSTED_APP  0x00000004 
libopenteec.so 与开发者编写的 CA code 链接在一起，打印方式与 CA 的打印方式相同。 
 
 Linux Kernel 
OP-TEE Linux Kernel 中的 error log 由 pr_err 输出，打印在 dmesg 中。 
 
 Secure World 
Secure World 包含 OP-TEE OS 和 TA 两部分。 
OP-TEE OS 有定义四种 log level，分别是 FMSG/DMSG/IMSG/EMSG。 
OP-TEE OS 层的 log level 默认设置为 1，即只允许 EMSG 的 log 输出。 
处于安全设计，OP-TEE log level 不允许动态调整，若需要调整 log level，需要修改 OP-TEE 的配置并重新编译 OP-
TEE。修改位置为： 
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
 
注意： 
• MediaTek 是以二进制形式释放 OP-TEE 镜像，log 等级默认设置为 1，如需调整 TEE OS 的 log 等级，请联系 MediaTek。 
 
OP-TEE OS 层新增加 Guest ID 表达当前 code 执行在哪个 VM，例如： 
 
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
 
图 4-1. OP-TEE log 示例 
 
TA 的 log 与 OP-TEE OS 设计类似，有定义四种 log level，分别是 FMSG/DMSG/IMSG/EMSG。 
默认设置为 1，即只允许 EMSG 的 log 输出。 
如希望调整 TA 的 log 等级，可由 TA 开发者自由完成。在 TA 的makefile 中定义 CFG_TEE_TA_LOG_LEVEL 的值即
可设定 TA 的 log level，默认为 1。 
 
注意： 
• S-EL0(TA)和 S-EL1(OPTEE)在 Secure World 的 log 会传回对应域的 Kernel 层，在 Linux Kernel 进行输出，输出等级为 pr_info。可
以通过 dmesg 等方式抓取 Kernel 的 log，其中会包含 OP-TEE 在 S-EL0/1 的 LOG。 
例如： 
adb shell dmesg -w > log.txt 
 
4.3 OP-TEE 常见异常与分析 
开源社区有文档介绍 OP-TEE 的 abort dump 和 call stack 如何分析和处理，请参阅：
https://optee.readthedocs.io/en/latest/debug/abort_dumps.html 
本章节基于此链接内容做简单描述。 
当 TEE OS 或 TA 发生 abort 或 panic 时，会打印 panic 的 log 
 
当 log 中出现“TEE load address”和“call stack”时，表示异常出现在 OP-TEE OS 中。 
E/TC:2 1 TEE load address @ 0x6cc30000    
E/TC:2 1 Call stack: 
E/TC:2 1  0x6ccb5fe0 
 
OP-TEE OS 的 panic 信息会由 MediaTek 分析。 
当异常出现在开发者编写的 TA 中时，需要有开发者自行分析错误原因。 
这里我们直接拿开源社区文档中的例子做说明，当 call stack 中出现 Status of TA”时，表明异常是发生在 TA 中。 
E/TC:1 5 0 xxxxx 
 
 Guest ID，即 VM ID 
Core ID，如果中断未关，则打印成”？” 
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
E/TC:0 TA panicked with code 0x0 
E/TC:0 Status of TA 484d4143-2d53-4841-3120-4a6f636b6542 (0xe07ba50) (active) 
E/TC:0 arch: arm  load address: 0x101000 ctx-idr: 1 
E/TC:0 stack: 0x100000 4096 
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
 
第一种分析方式为采用开源社区提供的脚本直接做解析，推荐优先使用这种方式  
$ cat dump.txt | ./optee_os/scripts/symbolize.py -d ./optee_examples/*/ta 
 
若第一种方式解析不出问题所在，也可以尝试手动解析，解析方式为： 
找到此 TA 对应的 {uuid}.dmp 文件， 
如果是基于 Yocto 环境编译，dmp 文件在 build/tmp/work/xxxx 下面 
如果是基于 Android 环境编译，dmp 文件在out 下面 
 
第一步，计算 offset，方式为 crash 是的地址，减去 TA 的 load address，例如 
offset = 0x001044a8 - 0x101000  = 34A8 
 
第二步，使用文本工具打开 {uuid}.dmp 
在{uuid}.dmp 中找到 34A8 对应的位置，即可知道大致发生 panic 的位置 
 
 
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
5 附录 
5.1 参考文档 
1. OP-TEE 开源社区文档：https://optee.readthedocs.io/en/latest/index.html 
2. Arm 开发者文档关于 TrustZone 的部分： 
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
# SRC0219 MT8676_Hypervisor_OTA_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_OTA_User_Manual_V1.0.pdf

SHA-256：17db370a32288f1b0daebc16c1a79a97b858aeb1dd1ef32826f035700dc5330f

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0219.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:              2024-12-27
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
版本记录 
版本 日期 作者 描述 
1.0 2024-12-27 Ming Ji 正式版 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 5 
表格目录 ··········································································································································································· 6 
1 Hypervisor (L+L+A) OTA 方案说明 ····························································································································· 7 
2 Hypervisor OTA 名词解释 ·········································································································································· 8 
3 Hypervisor (L+L+A) 整体集中升级 ····························································································································· 9 
3.1 启用整体集中升级方案 ·········································································································································· 9 
3.2 方案概述 ·································································································································································· 9 
 基础功能 ······················································································································································ 9 
3.3 架构/进程概述 ······················································································································································ 10 
 Hypervisor (L+L+A) OTA 升级架构 ·············································································································· 10 
 Hypervisor (L+L+A) 升级包编译架构 ········································································································· 11 
3.4 如何编译 Hypervisor (L+L+A) OTA 升级包 ············································································································ 12 
 编译 hypervisor_target_files.zip ················································································································· 12 
 编译 Hypervisor (L+L+A) 全量升级包 ········································································································ 13 
 编译 Hypervisor (L+L+A) 差分升级包 ········································································································ 13 
3.5 升级包结构解析 ···················································································································································· 14 
3.6 如何进行 Hypervisor (L+L+A) OTA 升级 ················································································································ 16 
 全包升级（normal mode） ······················································································································· 16 
 差分升级（normal mode） ······················································································································· 16 
3.7 如何修改升级包的签名 ········································································································································ 17 
3.8 如何删减/新增 OTA 升级分区 ······························································································································ 17 
 OTA 升级分区的来源 ································································································································· 17 
 删减 OTA 升级分区 ···································································································································· 18 
 新增 OTA 升级分区 ···································································································································· 19 
3.9 AB 系统的镜像加载选择 ······································································································································ 22 
 Boot Control 信息说明 ······························································································································· 22 
 镜像加载选择流程 ···································································································································· 23 
3.10 手动设定启动 slot ················································································································································· 24 
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
3.11 系统回滚 ································································································································································ 24 
 系统回滚的基本原则································································································································· 24 
 系统回滚的检测流程································································································································· 26 
 系统回滚的 Boot Control 参数变化 ·········································································································· 26 
 系统回滚测试用例 ···································································································································· 28 
3.12 断电升级保护 ························································································································································ 30 
 升级状态信息 ············································································································································ 30 
 Resume 升级检查流程 ······························································································································· 31 
4 Hypervisor (L+L+A) 部分集中升级 ··························································································································· 33 
4.1 启用部分集中升级方案 ········································································································································ 33 
4.2 方案概述 ································································································································································ 33 
 基础功能 ···················································································································································· 33 
4.3 架构/进程概述 ······················································································································································ 34 
 Hypervisor (L+L+A) OTA 升级架构 ·············································································································· 34 
 Hypervisor (L+L+A) 升级包编译架构 ········································································································· 35 
4.4 如何编译 Hypervisor OTA 升级包 ························································································································· 37 
 编译 Hypervisor Linux OS (L+L) OTA 升级包 ······························································································ 37 
 编译 Hypervisor Android OS 升级包 ·········································································································· 39 
4.5 升级包结构解析 ···················································································································································· 40 
4.6 如何进行 Hypervisor (L+L+A) OTA 升级 ················································································································ 41 
 全包升级（normal mode） ······················································································································· 41 
 差分升级（normal mode） ······················································································································· 42 
4.7 如何修改 Hypervisor Linux OS (L+L) 升级包的签名 ····························································································· 44 
4.8 如何删减/新增 OTA 升级分区 ······························································································································ 44 
 OTA 升级分区的来源 ································································································································· 44 
 删减 OTA 升级分区 ···································································································································· 45 
 新增 OTA 升级分区 ···································································································································· 46 
4.9 Boot Slot 的选择 ···················································································································································· 49 
 Boot Control 信息说明 ······························································································································· 49 
 Boot slot 选择机制 ····································································································································· 51 
4.10 Android Merge ······················································································································································· 52 
4.11 系统回滚 ································································································································································ 53 
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
 系统回滚的基本原则································································································································· 53 
 系统回滚流程 ············································································································································ 55 
 系统测试用例 ············································································································································ 55 
4.12 断电升级保护 ························································································································································ 57 
 升级状态信息 ············································································································································ 57 
 Resume 升级检查流程 ······························································································································· 58 
附件一 附加条款 ····························································································································································· 59 
 
图片目录 
图 3-1. Hypervisor (L+L+A) OTA Update 架构 ·························································································································· 10 
图 3-2. Hypervisor (L+L+A) build otapackage 架构 ·················································································································· 11 
图 3-3. Hypervisor (L+L+A) otapackage 结构 ··························································································································· 14 
图 3-4. payload.bin 组成结构 ·················································································································································· 15 
图 3-5. OTA 升级分区来源 ······················································································································································ 17 
图 3-6. Hypervisor (L+L+A) Boot Control 参数 ························································································································· 22 
图 3-7. Hypervisor (L+L+A) 镜像加载流程 ······························································································································ 23 
图 3-8. OTA 升级后 Yocto 启动失败场景 ······························································································································· 24 
图 3-9. OTA 升级后 Android 启动失败场景 ··························································································································· 25 
图 3-10. OTA 升级后 T-box 启动失败场景 ····························································································································· 25 
图 3-11. Hypervisor (L+L+A) 回滚检测流程 ···························································································································· 26 
图 3-12. Yocto & Android & T-box 启动状态 ··························································································································· 26 
图 3-13. Yocto & Android & T-box 启动状态 ··························································································································· 27 
图 3-14. Yocto & Android & T-box 启动状态 ··························································································································· 27 
图 3-15. Yocto & Android & T-box 启动状态 ··························································································································· 28 
图 3-16. 升级状态信息 ···························································································································································· 30 
图 3-17. Hypervisor resume update 流程 ································································································································ 31 
图 3-18. Hypervisor check resume update 流程······················································································································ 32 
图 4-1. Hypervisor (L+L+A) OTA Update 架构 ·························································································································· 34 
图 4-2. Hypervisor L+L (Yocto + T-box) 编译升级包架构 ········································································································ 36 
图 4-3. Hypervisor Android 编译升级包架构 ························································································································· 37 
图 4-4. OTA 升级分区来源 ······················································································································································ 44 
图 4-5.Hypervisor (L+L+A) Boot Control 参数 ························································································································· 50 
图 4-6. Hypervisor (L+L+A) Boot Slot 选择机制 ······················································································································ 51 
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
图 4-7. Android merge 机制 ···················································································································································· 52 
图 4-8. OTA 升级后 Yocto 启动失败场景 ······························································································································· 53 
图 4-9. OTA 升级后 Android 启动失败场景 ··························································································································· 54 
图 4-10. OTA 升级后 T-box 启动失败场景····························································································································· 54 
图 4-11. Hypervisor rollback 流程 ··········································································································································· 55 
图 4-12 升级状态信息 ····························································································································································· 57 
 
表格目录 
表 2-1. 名词解释······································································································································································· 8 
表 3-1. 升级包组件描述 ·························································································································································· 14 
表 3-2. payload.bin 组件描述 ·················································································································································· 15 
表 3-3. Hypervisor (L+L+A) Boot Control 参数说明 ················································································································· 23 
表 3-4. 升级状态信息说明 ······················································································································································ 31 
表 4-1. Boot Control 参数说明 ················································································································································ 50 
表 4-2. 升级状态信息说明 ······················································································································································ 57 
 
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
1 Hypervisor (L+L+A) OTA 方案说明 
批注：L+L+A 是指 Yocto (Linux OS) + T-box (Linux OS) + Android (Android OS) 
 
对于 Hypervisor (L+L+A) 的 OTA 升级，MediaTek 支持如下两种升级方案： 
• 方案一：整体集中升级，即 Yocto 作为 Host OS 去统一升级 Yocto + T-box + Android，详细介绍请参考章节 3 
Hypervisor (L+L+A) 整体集中升级。 
 
• 方案二：部分集中升级，即 Yocto 作为 Host OS 去统一升级 Yocto + T-box，Android 则单独使用 Android Update 
Engine 升级，详细介绍请参考章节 4 Hypervisor (L+L+A) 部分集中升级。 
 
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
2 Hypervisor OTA 名词解释 
表 2-1. 名词解释 
缩略词 全称 释义 
Bootctl Boot Control A/B slot 标识结构体，存储在 misc 分区中 
LK2 Little Kernel 2 微型内核 
OTA Over-The-Air 空中下载升级，一种远程更新技术 
 
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
3 Hypervisor (L+L+A) 整体集中升级 
本章节主要介绍 Hypervisor (L+L+A) OTA Update 整体集中升级方案，包括启用该方案的 config 配置、方案架构概
述、升级包编译和系统回滚，此方案为公版默认启用方案。 
3.1 启用整体集中升级方案 
如果需要启用集中升级方案，请设定如下 config： 
1. 在 LK2 的<yocto_project_name>.mk 和<tbox_project_name>.mk 内添加 SUPPORT_BOOTCTRL_V3 := yes 
例如： 
 
src/bsp/lk2/project/auto8676p1_64_hyp.mk 
SUPPORT_BOOTCTRL_V3 := yes 
src/bsp/lk2/project/auto8676p1_64_uos_tbox.mk 
SUPPORT_BOOTCTRL_V3 := yes 
 
2. 在 meta 的< yocto_project_name >.conf 和< tbox_project_name >.conf 内添加 SUPPORT_BOOTCTRL = “3” 
例如： 
 
meta/meta-mediatek-mt8676-hyp/conf/machine/auto8676p1_64_hyp.conf 
SUPPORT_BOOTCTRL = “3” 
meta/meta-mediatek-mt8676-hyp/conf/machine /auto8676p1_64_uos_tbox.conf 
SUPPORT_BOOTCTRL = “3” 
 
批注：请不要在单个 project.mk 或 project.conf 内同时支持不同类型的 OTA 升级方案。 
3.2 方案概述 
 基础功能 
Hypervisor (L+L+A) 整体集中升级方案支持如下功能： 
• 支持在设备后台无缝更新 
• 支持系统回滚，避免升级失败后系统变砖 
• 支持对升级包的完整性与准确性校验 
• 支持一次升级多个 OS 系统 
• 支持全包升级和差分升级 
• 支持手动切换 A/B 
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
• 支持断电接力升级 
 
但它同时也具备如下限制： 
• 不支持更新分区布局，即升级前后版本的分区布局必须保持一致，后续无法通过 OTA 修改分区布局 
• 不支持 AB 分区 & non-AB 分区之间相互升级 
• 需要升级的分区镜像必须是 xxx.img 格式，例如：boot.img，不支持其它格式的文件 
• 需要升级的分区类型必须为只读 (ro) 分区 
• 不支持 Android Virtual AB (安卓虚拟 AB) 
• 不支持 OS 单独升级 
3.3 架构/进程概述 
 Hypervisor (L+L+A) OTA 升级架构 
 
图 3-1. Hypervisor (L+L+A) OTA Update 架构 
 
图 3-1 描述了 Hypervisor (L+L+A) 整体集中升级的方案架构，从图中能获取到如下信息： 
1. Hypervisor (L+L+A) OTA 的升级包支持从 OTA Server 或者本地存储空间获取。MediaTek 目前仅支持通过本地升级
包进行 OTA 升级，从 OTA Server 端利用网络下载升级包需要 OEM 自行实现。 
2. Hypervisor OTA 升级全部在 Yocto OS (Host OS) 上完成，其它 Guest OS (Android OS + T-box OS) 不参与升级操作。 
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
3. 以通过本地升级包完成 OTA 升级为例，Hypervisor (L+L+A) OTA 升级的大致流程如下： 
1) 将升级包存放到本地平台存储环境内。 
2) 执行 OTA update script 调用 update_engine sideload 触发升级。 
3) 利用 Package Security Verify 对升级包进行完整性与准确性校验。 
4) 利用 Partition Write 将升级包内的数据通过 UFS Driver 写入到对应分区存储空间内。 
5) 利用 Partition Verify 对更新写入到分区内的数据进行准确性校验，确保实际写入数据的准确性。 
6) 利用 Switch Next Boot Slot 设定下一次系统的启动插槽，确保系统下一次从更新后的插槽启动。 
 Hypervisor (L+L+A) 升级包编译架构 
 
图 3-2. Hypervisor (L+L+A) build otapackage 架构 
 
图 3-2 描述了 Hypervisor (L+L+A) OTA 整体集中升级方案编译升级包的架构，从图中能获取到如下信息： 
1. Hypervisor (L+L+A) 整体集中升级只需要编译一个 OTA 升级包。 
2. Hypervisor (L+L+A) 编译升级包必须在 Hypervisor Android 的编译环境下进行。 
3. Hypervisor 编译升级包的大致流程如下： 
– 编译 Hypervisor yocto_target_files.zip 
– 编译 Hypervisor uos_tbox_target_files.zip 
– 编译 Hypervisor android target_files.zip 
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
– 将 yocto_target_files.zip、uos_tbox_target_files.zip 和 targetfiles.zip 合并成最终的 hypervisor_target_files.zip 
– 利用在 hypervisor_target_files.zip 在 Android 编译环境下编译生成全量升级包和差分升级包 
批注：关于编译 Hypervisor OTA 升级包的详细说明，请参考章节 3.4 如何编译 Hypervisor (L+L+A) OTA 升级包。 
3.4 如何编译 Hypervisor (L+L+A) OTA 升级包 
 编译 hypervisor_target_files.zip 
1. Build yocto_target_files.zip 
Yocto OS (Host OS) 的 target_files.zip 由 Hypervisor_make_yocto_targetfiles.py 编译产生，脚本位于： 
meta/meta-mediatek-mt8676-hyp/recipes-devtools/ota-tools/files 
 
在 Yocto OS 编译阶段，系统会自动执行该脚本进行打包，最终的 yocto_target_files.zip 位于： 
build/tmp/deploy/images/<project_name>/yocto_target_files.zip 
 
2. Build uos_tbox_target_files.zip 
T-box OS (Guest OS) 的 target_files.zip 由 Hypervisor_make_uos_tbox_targetfiles.py 编译产生，脚本位于： 
meta/meta-mediatek-mt8676-hyp/recipes-devtools/uos-tbox-ota-tools/files 
 
在 T-box OS 编译阶段，系统会自动执行该脚本进行打包，最终的 uos_tbox_target_files.zip 位于： 
build/tmp/deploy/images/<project_name>/uos_tbox_target_files.zip 
 
3. Build Android target_files.zip 
Android 的 target_files.zip 在 build Android OS 阶段自动编译产生，最终的 target_files.zip 位于： 
out/target/product/<project name>/merged/ target_files.zip 
 
4. Build hypervisor_target_files.zip 
hypervisor_target_files.zip 需要使用 Hypervisor_3OS_merge_targetfiles.py 脚本去合并 yocto_target_files.zip、
uos_tbox_target_files.zip 和 target_files.zip 后产生，Hypervisor_3OS_merge_targetfiles.py 位于： 
device/mediateksample/<project name>/Hypervisor_3OS_merge_targetfiles.py 
 
在获取到 yocto_target_files.zip、uos_tbox_target_files.zip 和 target_files.zip 后，在 Android 的编译环境下执行如下指
令去获取 hypervisor_target_files.zip： 
python3 Hypervisor_3OS_merge_targetfiles.py <参数1> <参数2> <参数3> 
批注： 
• Hypervisor_3OS_merge_targetfiles.py：编译 hypervisor_target_files.zip 的脚本 
• <参数 1> ：yocto_target_files.zip 的路径 
• <参数 2> ：uos_tbox_target_files.zip 的路径 
• <参数 3> ：target_files.zip 的路径 
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
 
输出文件： 
在当前目录下会产生名称为 hypervisor_target_files.zip 的文件，这就是 Hypervisor (L+L+A) 的 target_files.zip 包。 
示例： 
Python3 device/mediateksample/auto8676p1_64_bsp_vm/Hypervisor_3OS_merge_targetfiles.py 
3OS_target_files/yocto_target_files.zip 3OS_target_files/uos_tbox_target_files.zip 
3OS_target_files/target_files.zip 
 
 编译 Hypervisor (L+L+A) 全量升级包 
在参考章节 3.4.1 编译 hypervisor_target_files.zip 编译得到 hypervisor_target_files.zip 后，就可以在 Hypervisor 
(L+L+A) Android OS 的编译环境下去编译 Hypervisor (L+L+A) 的全量升级包。 
编译指令： 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall hypervisor_target_files.zip 
otapackage_full.zip 
批注： 
• ota_from_target_files：升级包编译脚本 
• build/make/target/product/security/testkey：对升级包进行签名的 key 路径，MediaTek 默认使用 Google 提供的 testkey，贵
司可指定其它的 key 路径，使用-k 参数指定。如何更换升级包签名 key，请参考章节 3.7 如何修改升级包的签名 
• hypervisor_target_files.zip：Hypervisor (L+L+A) 的 targetfiles.zip 
• otapackage_full.zip：最终产生的 Hypervisor 全量升级包，包名可随意指定 
• 请务必确保在 Hypervisor (L+L+A) Android OS 的编译环境下编译升级包，并确保编译全量升级包前有执行 source & lunch，否
则将导致全包编译失败 
 编译 Hypervisor (L+L+A) 差分升级包 
前提条件： 
编译差分升级包需要预先准备两份 hypervisor_target_files.zip。一份是基底版本（source 版本）的
hypervisor_target_files.zip，此处命名为 source_hypervisor_target_files.zip；一份是目标版本（target 版本）的
hypervisor_target_files.zip，此处命名为 target_hypervisor_target_files.zip。 
批注：请务必确保平台上烧录的基底版本 load 和基底版本的 hypervisor_target_files.zip 是同一次编译得到的，否则将导致 OTA
差分升级失败。 
 
编译指令： 
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
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall -i 
source_hypervisor_target_files.zip target_hypervisor_target_files.zip otapackage_delta.zip 
批注： 
• ota_from_target_files：升级包编译脚本 
• build/make/target/product/security/testkey：对升级包进行签名的 key 路径，MediaTek 默认使用 Google 提供的 testkey，贵
司可指定其它的 key 路径，使用-k 参数指定。如何更换升级包签名 key，请参考章节 3.7 如何修改升级包的签名  
• source_hypervisor_target_files.zip：source 版本的 hypervisor_target_files.zip 
• target_hypervisor_target_files.zip：target 版本的 hypervisor_target_files.zip 
• otapackage_delta.zip：最终产生的 Hypervisor (L+L+A)差分升级包，包名可随意指定 
• 请务必确保在 Hypervisor Android 的 build 环境下编译升级包，并确保编译全包前有执行 source & lunch，否则将导致差分包
编译失败 
3.5 升级包结构解析 
Hypervisor (L+L+A) OTA 升级包是一个被压缩的 zip 包，其主要组成部分如下： 
 
图 3-3. Hypervisor (L+L+A) otapackage 结构 
 
图 3-3 中 Hypervisor (L+L+A) otapackage 的各个组成部分描述如下表所示： 
表 3-1. 升级包组件描述 
名称 描述 
metadata 存储升级包的 metadata 信息，包括升级版本、升级类型等 
metadata.pb 存储升级包的 metadata 信息，包括升级版本、升级类型等 
otacert 升级包进行签名验证信息 
apex_info.pb Android apex 模块配置信息 
care_map.pb 系统 fingerprint 信息 
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
名称 描述 
payload.bin 升级镜像信息 
payload_properties.txt payload.bin 和 metadata 的 size 和 hash 信息 
 
从表 3-1 内可以看出，系统的升级信息都存储在 payload.bin 内，其组成结构如下： 
 
图 3-4. payload.bin 组成结构 
 
从图 3-4 中可以看出，payload.bin 的主要组成部分如表 3-2 所示： 
表 3-2. payload.bin 组件描述 
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
3.6 如何进行 Hypervisor (L+L+A) OTA 升级 
 全包升级（normal mode） 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package 
 
测试步骤 
1. Device connection yocto adb environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_delta.zip > update.txt 2>&1 
– hypervisor_update.py: Update script 
– otapackage_delta.zip: OTA package, unlimited package name 
– > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The first restart after the upgrade should successfully enter the HomeScreen 
3. Check whether setting-version has been updated 
Note: If the test upgrade fails, please provide the update log and UART log in CR 
 差分升级（normal mode） 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT, must be consistent with the base version provided to the OTA owner 
3. Get OTA package from OTA owner 
 
测试步骤 
1. Device connection Yocto adb environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_delta.zip > update.txt 2>&1 
– hypervisor_update.py: Update script 
– otapackage_delta.zip: OTA package, unlimited package name 
– > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
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
2. The first restart after the upgrade should successfully enter the HomeScreen 
3. Check whether setting-version has been updated 
Note: If the test upgrade fails, please provide the update log and UART log in CR 
3.7 如何修改升级包的签名 
OTA 升级过程中分别会使用到两把 key：xxx.pk8 和 xxx.x509.pem，其中 xxx.pk8 格式的 key 用于在编译升级包时对
升级包进行签名，xxx.x509.pem 格式的 key 则用于在 OTA 升级过程中对升级包进行校验。 
 
如果您需要使用客制化的 key，请按照如下步骤操作： 
1. 将章节 3.4.2 编译 Hypervisor (L+L+A) 全量升级包和 3.4.3 编译 Hypervisor (L+L+A) 差分升级包中升级包编译指令 -
k 参数的指定路径替换为实际使用的 xxx.pk8 和 xxx.x509.pem 路径。 
2. 将meta/meta-mediatek/recipes-support/update-engine-sideload-u/files/ota/ otacerts.zip 内
更换实际使用的 xxx.x509.pem 文件。 
3.8 如何删减/新增 OTA 升级分区 
 OTA 升级分区的来源 
 
图 3-5. OTA 升级分区来源 
OTA 升级分区的确认步骤如下： 
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
1. 编译阶段将分区表内的信息打包转化为 MTXXX_Android_scatter.txt，例如： MT6897_Android_scatter.txt。 
2. 将 MT6897_Android_scatter.txtn 内 is_upgradable 为 true 的分区记录到 ab_partitions.txt。 
3. 将 ab_partitions.txt 打包到各个 OS 的 target_files.zip。 
4. 编译升级包时将 ab_partitions.txt 内记录的分区镜像打包到升级包内。 
批注：检查分区 is_upgradable 状态时会优先判断 _a 分区的 is_upgradable，例如：当 xxxx_a 分区的 is_upgradable 为 true，xxx_b
的 is_upgradable 为 false 时，系统仍会记录该分区为 OTA 升级分区。 
 删减 OTA 升级分区 
批注：删减 OTA 升级分区只会关闭特定 AB 分区的 OTA 升级，并不会将关闭 AB 升级的分区修改为单分区。 
 
Hypervisor (L+L+A) 包含三个不同的 OS project，其镜像组成包括：Yocto 分区镜像 + Android 分区镜像 + T-box 分区镜
像。Hypervisor (L+L+A) 也包含两份分区表，一份分区表位于 Yocto codebase 内，分区表内包含 Yocto + Android + T-
box 的所有分区信息，该分区表在编译 Yocto 和 T-box 阶段被使用；另一份分区表位于 Android codebase 内，分区
表内仅包含 Android 分区信息，该分区表仅在编译 Android 阶段被使用。 
 
• Yocto & T-box 分区表： 
meta/meta-mediatek-mt8676-hyp/recipes-
bsp/ptgen/files/<project_name>/partition_table_emmc_hyp_ab.csv 
 
• Android 分区表： 
device/mediateksample/<project_name>/partition_table_emmc_hyp_ab.csv 
 
如下为各个 OS 删减 OTA 升级分区的方法： 
1. Yocto OS (Host OS) 
将 Yocto 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 Y 改成 N。 
例如： 
• 修改前： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
 
• 修改后： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
 
2. Android OS (Guest OS) 
将 Yocto 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 Y 改成 N，Android 分区表无需修改。 
例如： 
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
• 修改前： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,Y,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• 修改后： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,N,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
3. T-box OS (Guest OS) 
将 T-box 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 Y 改成 N。 
例如： 
• 修改前： 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,Y,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
• 修改后： 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,N,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
 新增 OTA 升级分区 
新增的 OTA 升级分区必须满足如下前提条件： 
1. 分区必须同时包含<partition_name>_a & <partition_name>_b，例如：boot_a & boot_b。 
2. 分区必须为只读分区。 
3. 分区镜像格式和镜像名称必须为<partition_name>.img，例如：boot.img。 
3.8.3.1 设定已存在的 AB 分区为 OTA 分区 
各个 OS 将分区表内已经存在的 AB 分区设定为 OTA 分区的步骤如下： 
1. Yocto OS (Host OS) 
将 Yocto 分区表内需要打开 OTA 升级分区一栏的 OTA_Update 状态从 N 改成 Y。 
例如： 
• 修改前： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
 
• 修改后： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
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
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
 
2. Android OS (Guest OS) 
将 Yocto 分区表 & Android 分区表内需要打开 OTA 升级分区一栏的 OTA_Update 状态从 N 改成 Y。 
例如： 
• 修改前： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,N,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• 修改后： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,Y,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
在 Hypervisor_make_yocto_targetfiles.py 的 ignored_partitions 内添加新增的 Android OTA 分区名，用于编译
yocto_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误。 
例如： 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor', 'tee', 'bl2-tbox', 'boot_uos_tbox'}   >> 将新增的
分区添加到列表 
 
3. T-box OS (Guest OS) 
将 T-box 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 N 改成 Y。 
例如： 
• 修改前： 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,N,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• 修改后： 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,Y,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
在 Hypervisor_make_yocto_targetfiles.py 的 ignored_partitions 内添加新增的 T-box OTA 分区名，用于编译
yocto_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 。 
例如： 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor', 'tee', 'bl2-tbox', 'boot_uos_tbox'}   >> 将新增的
分区添加到列表 
 
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
在 Hypervisor_make_uos_tbox_targetfiles.py 的 partitions 内添加新增的 T-box OTA 分区名，确保 T-box 编译阶段将分
区镜像打包到 uos_tbox_target_files.zip。 
例如： 
if __name__ == "__main__": 
    target_path = "sos_tbox_images" 
    partitions = ['bl2-tbox', 'boot_uos_tbox']   >>将新增的分区添加到列表 
 
3.8.3.2 新增不存在的 AB 分区为 OTA 分区 
各个 OS 新增分区表内不存在的 AB 分区为 OTA 分区的步骤如下： 
1. Yocto OS (Host OS) 
在 Yocto 分区表内新增对应 AB 分区，并确保分区镜像为<partition_name>.img，以新增 customer 分区为例： 
• 修改后 (分区大小设定为 8MB)： 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
分区添加完毕后，请在 customer 分区的启动加载阶段添加 AB 分区逻辑判断，保证系统加载到正确的分区。 
 
2. Android OS (Guest OS) 
在 Yocto 分区表和 Android 分区表内新增对应 AB 分区，并确保分区镜像为<partition_name>.img，以新增 customer
分区为例： 
• 修改后 (分区大小设定为 8MB)： 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
在 Hypervisor_make_yocto_targetfiles.py 的 ignored_partitions 内添加新增的 Android OTA 分区名，用于编译
yocto_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 。 
例如： 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor',  'customer', 'tee', 'bl2-tbox', 
'boot_uos_tbox'}   >> 将新增的分区添加到列表 
 
3. T-box OS (Guest OS) 
在 Yocto 分区表内新增对应 AB 分区，并确保分区镜像为<partition_name>.img，以新增 customer 分区为例： 
• 修改后 (分区大小设定为 8MB)： 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
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
在 Hypervisor_make_yocto_targetfiles.py 的 ignored_partitions 内添加新增的 Android OTA 分区名，用于编译
yocto_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 。 
例如： 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor',  'tee', 'bl2-tbox', 'boot_uos_tbox', 
'customer'}   >> 将新增的分区添加到列表 
 
在 Hypervisor_make_uos_tbox_targetfiles.py 的 partitions 内添加新增的 T-box OTA 分区名，确保 T-box 编译阶段将分
区镜像打包到 uos_tbox_target_files.zip。 
例如： 
if __name__ == "__main__": 
    target_path = "sos_tbox_images" 
    partitions = ['bl2-tbox', 'boot_uos_tbox', ‘customer’]   >>将新增的分区添加到列表 
 
批注： 
1. 新增不存在的 AB 分区为 OTA 分区时，请确保新增分区挂载成只读分区。 
2. 新增不存在的 AB 分区为 OTA 分区时，请确保新增分区后系统烧录能正常加载启动，然后再验证 OTA 升级。 
3.9 AB 系统的镜像加载选择 
 Boot Control 信息说明 
AB 系统包含两个启动 slot：slot_a 和 slot_b，每个 slot 有自己独立的一份 Boot Control metadata。系统启动会根据
存储在 misc 分区的 Boot Control 信息来选择加载 slot_a 或 slot_b 的分区镜像，其中 Boot Control 包含的关键信息如
下： 
 
图 3-6. Hypervisor (L+L+A) Boot Control 参数 
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
 
图 3-6 中各个 Boot Control 参数的说明如表 3-3 所示： 
表 3-3. Hypervisor (L+L+A) Boot Control 参数说明 
名称 描述 
priority Slot 的启动优先级，初始值默认为 15，系统选择从优先级高的 slot 启动，优先级
相同则从 slot_a 启动 
tries_remaining 当前 slot Android 的剩余可重启次数，初始值默认为 7，值为 0 时会触发系统回滚 
successful_boot Android 启动成功标志位， 1：启动成功，0：启动失败 
yocto_tries_remaining 当前 slot Yocto 的剩余可重启次数，初始值默认为 3，值为 0 时会触发系统回滚 
yocto_successful_boot Yocto 启动成功标志位，1：启动成功，0：启动失败 
tbox_tries_remaining 当前 slot T-box 的剩余可重启次数，初始值默认为 3，值为 0 时会触发系统回滚 
tbox_successful_boot T-box 启动成功标志位，1：启动成功，0：启动失败 
 
批注：Boot Control Source Code 位于：src/bsp/lk2/platform/mediatek/common/bootctrl/bootctrl_v3 
 镜像加载选择流程 
 
图 3-7. Hypervisor (L+L+A) 镜像加载流程 
 
AB 系统启动的镜像加载流程如图 3-7 所示： 
① 系统启动进入 Boot ROM 阶段。 
② Boot ROM 会读取 UFS/eMMC 上特定寄存器的值来决定 load preloader_a 或 preloader_b 分区镜像。 
③ 系统启动进入 preloader 阶段。 
④ 系统去读取 Boot Control 信息内的 slot_a 与 slot_b 的 priority 值。 
⑤ 当 slot_a 的 priority 值大于等于 slot_b 的 priority 值时，系统判断当前启动 slot 为 slot_a，后续启动过程中会加
载 A 分区内的镜像；当 slot_a 的 priority 值小于 slot_b 的 priority 值时，系统判断当前启动 slot 为 slot_b，后续
启动过程中会加载 B 分区内的镜像。 
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
批注：preloader 分区的 AB 加载选择由 UFS/eMMC 上特定寄存器的值来决定，不由 boot control metadata 的 slot 
priority 决定，详细信息请咨询 Boot ROM & preloader owner。 
3.10 手动设定启动 slot 
Hypervisor (L+L+A) 支持在 Yocto 端利用 command 手动设定启动 slot。 
 
前提条件： 
系统至少成功执行一次 OTA 升级， 确保 AB 分区内均存在可用的镜像信息，避免切换启动 slot 后系统启动失败。 
 
切换指令： 
Shell Domain 设定 slot_a 为启动 slot 设定 slot_b 为启动 slot 
Yocto shell update_engine_sideload --switch_slot=0 update_engine_sideload --switch_slot=1 
 
3.11 系统回滚 
本节主要介绍 Hypervisor (L+L+A) OTA 升级完成后，当系统首次从新版本启动失败时，系统如何回滚到升级前的旧
版本启动，避免设备变砖。 
 系统回滚的基本原则 
由于 Hypervisor (L+L+A) Project 涉及到多个 OS，因此 MediaTek 采用的整体回滚方案遵循如下原则： 
• Linux OS (Yocto + T-box) & Android OS 整体 rollback，即当有任意一个 OS 首次从新版本启动失败时，所有 OS 都
要回滚到旧系统启动，保证所有 OS 的 AB 启动 slot 一致。 
• 只有在 OTA 升级成功后首次从新系统启动失败的场景下才会触发回滚机制，常规启动失败不会触发回滚机
制。 
 
以 Yocto、T-box 和 Android 的 3 OS (L+L+A) OTA 为例，系统会存在如下三种 rollback 场景： 
场景一：Yocto OS 从新版本启动失败 
 
图 3-8. OTA 升级后 Yocto 启动失败场景 
 
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
图 3-8 描述 Hypervisor (L+L+A) OTA 升级后，当 Yocto 从新版本启动失败触发 rollback 时，Yocto 与 Android 的版本切
换状态，场景描述如下： 
• Yocto & Android & T-box 都从 V1 版本启动。 
• 系统执行 OTA 升级到 V2 版本，并将 V2 版本设定为下一次启动的版本。 
• Yocto 从 V2 版本启动失败，此时 Android 和 T-box 都还未启动。 
• 触发回滚，Yocto & Android & T-box 都切换到 V1 版本启动。 
 
场景二：Android OS 从新版本启动失败 
 
图 3-9. OTA 升级后 Android 启动失败场景 
 
图 3-9 描述了 Hypervisor (L+L+A) 从 V1 -> V2 OTA 升级后，当 Yocto 从新版本 V2 启动成功，Android 从新版本 V2 启
动失败触发 rollback 时，Yocto、Android 和 T-box 的版本切换状态，场景描述如下： 
• Yocto & Android & T-box 都从 V1 版本启动。 
• 系统执行 OTA 升级到 V2 版本，并将 V2 版本设定为下一次启动的版本。 
• Yocto 从 V2 版本启动成功，Android 从 V2 版本启动失败，T-box 启动状态未知。 
• 触发回滚，Yocto & Android & T-box 都切换到 V1 版本启动。 
 
场景三：T-box OS 从新版本启动失败 
 
 
 
图 3-10. OTA 升级后 T-box 启动失败场景 
 
图 3-10 描述了 Hypervisor (L+L+A) 从 V1 -> V2 OTA 升级后，当 Yocto 和 Android 从新版本 V2 启动成功，T-box 从新版
本启动失败触发 rollback 时，Yocto、Android 和 T-box 的版本切换状态，场景描述如下： 
• Yocto & Android & T-box 都从 V1 版本启动。 
• 系统执行 OTA 升级到 V2 版本，并将 V2 版本设定为下一次启动的版本。 
• Yocto 和 Android 从 V2 版本启动成功，T-box 从 V2 版本启动失败。 
• 触发回滚，Yocto & Android & T-box 都切换到 V1 版本启动。 
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
 系统回滚的检测流程 
Hypervisor (L+L+A) 的系统回滚检测流程设定在各个 OS 的 LK2 阶段，其详细流程如图 3-11 所示： 
 
 
图 3-11. Hypervisor (L+L+A) 回滚检测流程 
 系统回滚的 Boot Control 参数变化 
由图 3-11 可知，系统回滚机制的本质就是通过反复的判断和调整 Boot Control 信息，且只有触发系统的反复重启
让某个系统的 tries_remaining 值减少到 0 才能触发系统整体回滚。Hypervisor (L+L+A) 3OS 的启动可分为如下四种场
景： 
场景一：Yocto & Android & T-box 都启动成功（OTA 升级后重启） 
 
图 3-12. Yocto & Android & T-box 启动状态 
 
各个阶段的 Boot Control 参数值变化如下所示： 
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
 
 
场景二：Yocto & Android 启动成功，T-box 启动失败（OTA 升级后重启） 
 
图 3-13. Yocto & Android & T-box 启动状态 
 
各个阶段的 Boot Control 参数值变化如下所示： 
 
 
场景三：Yocto & T-box 启动成功，Android 启动失败（OTA 升级后重启） 
 
图 3-14. Yocto & Android & T-box 启动状态 
 
各个阶段的 Boot Control 参数值变化如下所示： 
 
 
场景四：Yocto 启动失败，Android & T-box 还未启动（OTA 升级后重启） 
slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 14 15 14 15
yocto_tries_remaining 3 3 1 3 1 1 1 1 1 1
yocto_successful_boot 1 0 1 0 1 1 1 1 1 1
tries_remaining 7 7 1 7 1 7 1 1 1 1
successful_boot 1 0 1 0 1 0 1 1 1 1
tbox_tries_remaining 3 3 1 3 1 3 1 3 1 1
tbox_successful_boot 1 0 1 0 1 0 1 0 1 1
OTA升级后Tbox重
启成功
OTA升级后Android
重启成功
yocto
android
tbox
正常刷机 OTA升级未重启 OTA升级后Yocto重
启成功
slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b slot a slot b
priority 15 15 14 15 14 15 14 15 14 15 15 14
yocto_tries_remaining 3 3 1 3 1 1 1 1 1 1 1 0
yocto_successful_boot 1 0 1 0 1 1 1 1 1 1 1 0
tries_remaining 7 7 1 7 1 7 1 1 1 1 1 0
successful_boot 1 0 1 0 1 0 1 1 1 1 1 0
tbox_tries_remaining 3 3 1 3 1 3 1 3 1 0 1 0
tbox_successful_boot 1 0 1 0 1 0 1 0 1 0 1 0
yocto
OTA升级后Tbox重
启失败
OTA升级后Android
重启成功
android
tbox
触发整体系统回滚OTA升级后Yocto重
启成功正常刷机 OTA升级未重启
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
触发整体系统回滚正常刷机 OTA升级未重启 OTA升级后Yocto重
启成功
OTA升级后Tbox重
启成功
OTA升级后Android
重启失败
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
 
图 3-15. Yocto & Android & T-box 启动状态 
 
各个阶段的 Boot Control 参数值变化如下所示： 
 
 
 系统回滚测试用例 
3.11.4.1 Yocto OS 启动失败 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package from OTA owner 
 
测试步骤 
1. Device connection Yocto adb environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_full.zip > update.txt 2>&1 
3. Check whether the upgrade is completed successfully, update.txt contains:  
[INFO:update_attempter_android.cc(600)] Update successfully applied, waiting to reboot. 
4. Execute in Yocto adb environment: 
– adb shell 
– blockdev --setrw /dev/disk/by-partlabel/yocto-boot_b 
– dd if=/dev/urandom of=/dev/disk/by-partlabel/yocto-boot_b bs=1M count=1 
– reboot 
Note: 
• hypervisor_update.py: Update script 
• otapackage_full.zip: OTA package, unlimited package name 
• > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
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
触发整体系统回滚正常刷机 OTA升级未重启 OTA升级后Yocto重
启失败
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
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The system triggers the rollback mechanism and boots to the HomeScreen 
3. Setting-version should be the same as before the upgrade 
Note: If the test upgrade fails, please provide the update log and UART log in CR 
3.11.4.2 Android OS 启动失败 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package from OTA owner 
 
测试步骤 
1. Device connection Yocto adb environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_full.zip > update.txt 2>&1 
3. Check whether the upgrade is completed successfully, update.txt contains:  
[INFO:update_attempter_android.cc(600)] Update successfully applied, waiting to reboot. 
4. Execute in Yocto adb environment: 
– adb shell 
– blockdev --setrw /dev/disk/by-partlabel/init_boot_b 
– dd if=/dev/urandom of=/dev/disk/by-partlabel/init_boot_b bs=1M count=1 
– reboot 
Note: 
• hypervisor_update.py: Update script 
• otapackage_full.zip: OTA package, unlimited package name 
• > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The system triggers the rollback mechanism and boots to the HomeScreen 
3. Setting-version should be the same as before the upgrade 
Note: If the test upgrade fails, please provide the update log and uart log in CR 
3.11.4.3 T-box OS 启动失败 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package from OTA owner 
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
测试步骤 
1. Device connection Yocto adb environment 
2. Execute the upgrade script:  
python3 hypervisor_update.py --file otapackage_full.zip > update.txt 2>&1 
3. Check whether the upgrade is completed successfully, update.txt contains:  
[INFO:update_attempter_android.cc(600)] Update successfully applied, waiting to reboot. 
4. Execute in Yocto adb environment: 
– adb shell 
– blockdev --setrw /dev/disk/by-partlabel/boot_uos_tbox_b 
– dd if=/dev/urandom of=/dev/disk/by-partlabel/boot_uos_tbox_b bs=1M count=1 
– reboot 
Note: 
• hypervisor_update.py: Update script 
• otapackage_full.zip: OTA package, unlimited package name 
• > update.txt 2>&1: Store the upgrade log in update.txt in the current directory 
 
预期结果 
1. Update should be completed, and update.txt prints the following log: [INFO:update_attempter_android.cc(600)] 
Update successfully applied, waiting to reboot. 
2. The system triggers the rollback mechanism and boots to the HomeScreen 
3. Setting-version should be the same as before the upgrade 
Note: If the test upgrade fails, please provide the update log and UART log in CR. 
3.12 断电升级保护 
 升级状态信息 
由于设备在 OTA 升级过程中存在异常断电导致升级中断的场景，为了保证设备在 OTA 升级过程中断电重启后能从
中断点继续完成升级，系统需要实时保存升级状态信息，Hypervisor (L+L+A) 整体集中升级方案默认将升级状态信息
保存在 yocto-userdata 分区的data/misc/update_engine/prefs 目录，存储的信息如图 3-16 所示： 
 
图 3-16. 升级状态信息  
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
 
prefs 目录下各个升级状态信息的说明如表 3-4 所示： 
表 3-4. 升级状态信息说明 
Prefs 名称 Prefs 值 描述 
kPrefsUpdateStateNextOperation update-state-next-operation 记录下一次需要操作的 operation 
kPrefsUpdateCheckResponseHash update-check-response-hash 记录上一次升级包的 hash 值 
kPrefsResumedUpdateFailures resumed-update-failures 
记录升级被中断的次数 ，默认一次升级最多被
中断 10 次，如果超过 10 次，系统将强制全部
重新升级 
kPrefsUpdateStateNextDataOffset update-state-next-data-offset 记录下一次从升级包内下载数据的偏移地址 
kPrefsUpdateStateSHA256Context update-state-sha-256-context 记录升级状态信息的 hash 值 
kPrefsManifestMetadataSize manifest-metadata-size 记录 metadata 数据 size 
kPrefsManifestSignatureSize manifest-signature-size 记录签名数据的 size 
 
 Resume 升级检查流程 
OTA 升级前，系统会去判断当前升级是一次 new update 还是 resume update，其检测的信息来源于 prefs 目录内保
存的信息，检测流程如图 3-17 所示： 
 
图 3-17. Hypervisor resume update 流程 
 
其中检查 prefs 目录内存储的信息是否满足 resume 升级条件的详细流程如图 3-18 所示： 
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
 
图 3-18. Hypervisor check resume update 流程 
 
从图 3-18 可知，只有当 prefs 信息满足所有条件时，系统才会认得此次升级为 resume update；如果有任意条件不
满足，系统都将全部重新开始升级并清除之前保存的升级状态信息。 
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
4 Hypervisor (L+L+A) 部分集中升级 
本章节主要介绍 Hypervisor (L+L+A) OTA Update 部分集中升级方案 ，包括启用改方案的 config 配置、方案架构概
述、升级包编译和系统回滚，此方案公版默认不支持，仅供客户参考选择。 
4.1 启用部分集中升级方案 
如果需要启用集中升级方案，请设定如下 config： 
1. 在 LK2 的<yocto_project_name>.mk 和<tbox_project_name>.mk 内添加 SUPPORT_BOOTCTRL_V1 := yes 
例如： 
src/bsp/lk2/project/auto8676p1_64_hyp_sos.mk 
SUPPORT_BOOTCTRL_V1 := yes 
src/bsp/lk2/project/auto8676p1_64_uos_tbox.mk 
SUPPORT_BOOTCTRL_V1 := yes 
 
2. 在 meta 的< yocto_project_name >.conf 和< tbox_project_name >.conf 内添加 SUPPORT_BOOTCTRL = “1” 
例如： 
meta/meta-mediatek-mt8676-hyp/conf/machine/auto8676p1_64_hyp_sos.conf 
SUPPORT_BOOTCTRL = “1” 
meta/meta-mediatek-mt8676-hyp/conf/machine /auto8676p1_64_uos_tbox.conf 
SUPPORT_BOOTCTRL = “1” 
 
批注：请不要在单个 project.mk 或 project.conf 内同时支持不同类型的 OTA 升级方案 
 
4.2 方案概述 
 基础功能 
Hypervisor (L+L+A) 部分集中升级方案支持如下功能： 
• 支持在设备后台无缝更新 
• 支持系统回滚，避免升级失败后系统变砖 
• 支持对升级包的完整性与准确性校验 
• 支持 Android & Linux 独立升级，即 Yocto 升级 Yocto 和 T-box，Android 升级 Android 
• 支持全包升级和差分升级 
• 支持 Android Virtual AB (安卓虚拟 AB) 
• 支持断电接力升级 
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
但它同时也具备如下限制： 
• 不支持更新分区布局，即升级前后版本的分区布局必须保持一致，后续无法通过 OTA 修改分区布局 
• 不支持 AB 分区 & non-AB 分区之间相互升级 
• 需要升级的分区镜像必须是 xxx.img 格式，例如：boot.img，不支持其它格式的文件 
• 需要升级的分区类型必须为只读 (RO) 分区 
• 不支持手动切换 A/B 
• 不支持 OS 单独升级 
4.3 架构/进程概述 
 Hypervisor (L+L+A) OTA 升级架构 
 
图 4-1. Hypervisor (L+L+A) OTA Update 架构 
 
图 4-1 描述了 Hypervisor (L+L+A) 部分集中升级的方案架构，从图中能获取到如下信息： 
1. Hypervisor (L+L+A) OTA 的升级包支持从 OTA Server 或者本地存储空间获取。MediaTek 目前仅支持通过本地升级
包进行 OTA 升级，从 OTA Server 端利用网络下载升级包需要 OEM 自行实现。 
2. Hypervisor (L+L+A) OTA 升级分为 Linux 和 Android 两部分，其中 Linux OS 的升级全部在 Yocto OS (Host OS) 上完
成，T-box (Guest OS)不参与升级操作；Android OS (Guest OS)的升级则由 Android OS 完成。Linux 与 Android 独立
升级的目的在于支持 Android Virtual AB (VAB)功能。 
3. 由于 Linux OS & Android OS 的升级相互独立，以本地升级为例，Hypervisor (L+L+A) OTA 升级的大致流程如下： 
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
Linux OS 升级： 
1) 将升级包存放到本地平台存储环境内。 
2) 执行 OTA update script 调用 update_engine sideload 触发升级。 
3) 利用 Package Security Verify 对升级包进行完整性与准确性校验。 
4) 利用 Partition Write 将升级包内的数据通过 UFS Driver 写入到对应分区存储空间内。 
5) 利用 Partition Verify 对更新写入到分区内的数据进行准确性校验，确保实际写入数据的准确性 。 
6) 利用 Switch Next Boot Slot 设定下一次系统的启动插槽，确保系统下一次从更新后的插槽启动。  
 
Android OS 升级： 
1) 将升级包存放到本地平台存储环境内。 
2) 执行 OTA update script 调用 android update_engine 触发升级。 
3) 利用 Package Security Verify 对升级包进行完整性与准确性校验。 
4) 利用 Partition Write 将升级包内的数据通过 UFS Driver 写入到对应分区存储空间内。 
5) 利用 Partition Verify 对更新写入到分区内的数据进行准确性校验，确保实际写入数据的准确性 。 
6) 利用 Switch Next Boot Slot 设定下一次系统的启动插槽，确保系统下一次从更新后的插槽启动。  
 Hypervisor (L+L+A) 升级包编译架构 
Hypervisor (L+L+A) 升级需要编译两个升级包，分别用来升级 L+L (Yocto + T-box) 和 A (Android)，两个升级包的编译都
需要在 Android 环境下完成。 
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
4.3.2.1 Hypervisor L+L (Yocto + T-box) 升级包编译 
 
图 4-2. Hypervisor L+L (Yocto + T-box) 编译升级包架构 
 
图 4-2 描述了 Hypervisor L+L (Yocto + T-box) OTA 编译升级包的架构，从图中能获取到如下信息： 
1. 各个 Linux OS 在编译阶段都会产生一个 target_files.zip，用于打包各自 OS 需要升级的分区镜像文件； 
2. Android OS 编译环境下提前准备了一个 yocto_target_base.zip，用于保证最终的 hypervisor_yocto_target_files.zip
符合 Android 原生编译脚本 ota_form_target_files.py 的输入 target_files.zip 的目录结构； 
3. Hypervisor L+L (Yocto + T-box) 的升级包必须在 Hypervisor Android 的编译环境下进行，因为需要使用 Android 的
相关编译工具； 
4. Hypervisor L+L (Yocto + T-box) 编译升级包的大致流程如下： 
– 编译各个 Linux OS 项目得到各自 OS 的 targe_tfiles.zip 
例如：yocto_target_files.zip (Yocto OS), uos_tbox_target_files.zip (T-box OS) 
– 将所有的 Linux OS target_files.zip 和 yocto_target_base.zip 合并成最终的 hypervisor_yocto_target_files.zip 
– 利用 hypervisor_yocto_target_files.zip 在 Android 编译环境下编译生成 Linux  OS 的全量升级包和差分升级包 
批注：关于编译 Hypervisor L+L (Yocto + T-box) OTA 升级包的详细说明，请参考章节 4.4.1 编译 Hypervisor Linux OS (L+L) OTA 升级
包。 
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
4.3.2.2 Hypervisor Android 升级包编译 
 
图 4-3. Hypervisor Android 编译升级包架构 
 
图 4-3 描述了 Hypervisor Android OTA 编译升级包的架构，从图中能获取到如下信息： 
1. Android OS 在编译阶段都会产升级一个 target_files.zip，用于打包 Android OS 需要升级的分区镜像 
2. Hypervisor Android 编译升级包的大致流程如下： 
– 编译 Android OS 项目得到 Android OS 的 target_files.zip 
例如：target_file.zip (Android OS) 
– 利用 Android target_files.zip 在 Android 编译环境下编译生成 Android OS 的全量升级包和差分升级包 
批注：关于编译 Hypervisor Android OTA 升级包的详细说明，请参考章节 4.4.2 编译 Hypervisor Android OS 升级包。 
 
4.4 如何编译 Hypervisor OTA 升级包 
 编译 Hypervisor Linux OS (L+L) OTA 升级包 
4.4.1.1 编译 Linux OS (L+L) target_files.zip 
1. Build Yocto OS target_files.zip 
Yocto OS (Host OS) 的 target_files.zip 由 Hypervisor_make_yocto_targetfiles.py 编译产生，脚本位于： 
meta/meta-mediatek-mt8676-hyp/recipes-devtools/ota-tools/files 
 
在编译 Yocto OS 阶段，系统会自动执行该脚本进行打包，最终的 yocto_targetfile.zip 位于： 
build/tmp/deploy/images/<project_name>/yocto_target_files.zip 
 
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
2. Build T-box OS target_files.zip 
T-box OS (Guest OS) 的 target_files.zip 由 Hypervisor_make_uos_tbox_targetfiles.py 编译产生，脚本位于： 
meta/meta-mediatek-mt8676-hyp/recipes-devtools/uos-tbox-ota-tools/files 
 
在编译 T-box OS 阶段，系统会自动执行该脚本进行打包，最终的 uos_tbox_target_files.zip 位于： 
build/tmp/deploy/images/<project_name>/uos_tbox_target_files.zip 
 
3. Build hypervisor_yocto_target_files.zip 
当编译得到 Yocto OS target_files.zip 和 T-box OS target_files.zip 后，请在 Android 的编译环境下执行如下指令： 
python3 Hypervisor_yocto_merge_targetfiles.py <参数1> <参数2> <参数3> 
 
批注： 
• Hypervisor_yocto_merge_targetfiles.py：编译 hypervisor_yocto_target_files.zip 的脚本 
• <参数 1> ：Yocto OS target_files.zip 的路径 
• <参数 2> ：T-box OS target_files.zip 的路径 
• <参数 3> ：yocto_target_base.zip 的路径 
 
输出文件： 
在当前路径下会产生名称为 hypervisor_yocto_target_files.zip 的文件，这就是 Linux OS 最终的 target_files.zip 包 
示例： 
python3 
device/mediateksample/auto8676p1_64_bsp_vm_tbox/Hypervisor_yocto_merge_targetfiles.py 
tbox_target_file/yocto_target_files.zip  
tbox_target_file/uos_tbox_target_files.zip 
device/mediateksample/auto8676p1_64_bsp_vm_tbox/yocto_target_base.zip  
 
4.4.1.2 编译 Linux OS (L+L) OTA 升级包 
在参考章节 4.4.1.1 编译 Linux OS (L+L) target_files.zip 编译得到 hypervisor_yocto_target_files.zip 后，就可以在
Hypervisor Android OS 的编译环境下去编译 Linux OS (L+L) 的升级包。 
 
1. Build full otapackage 
编译指令： 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall 
hypervisor_yocto_target_files.zip otapackage_yocto_full.zip 
批注： 
• ota_from_target_files：升级包编译脚本 
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
• build/make/target/product/security/testkey：对升级包进行签名的 key 路径，MediaTek 默认使用 Google 提供的 testkey，贵
司可指定其它的 key 路径，使用 -k 参数指定 
• hypervisor_yocto_target_files.zip：Hypervisor Linux OS (L+L) 的 target_files.zip 
• otapackage_yocto_full.zip：最终产生的 Hypervisor Linux OS (L+L) 全量升级包，包名可任意指定 
• 请务必确保在 Hypervisor Android 的 build 环境下编译升级包，并确保编译全包前有执行 source & lunch，否则将导致全包编
译失败 
 
2. Build incremental otapackage 
前提条件： 
编译差分包需要预先准备两份 hypervisor_yocto_target_files.zip。一份是基底版本（source 版本）的
hypervisor_yocto_target_files.zip，此处命名为 source_hypervisor_yocto_target_files.zip；一份是目标版本（target 版
本）的 hypervisor_yocto_target_files.zip，此处命名为 target_hypervisor_yocto_target_files.zip。 
批注：请务必确保平台上烧录的基底版本 load 和基底版本的 hypervisor_yocto_target_files.zip 是同一次编译得到的，否则将导致
OTA 差分升级失败。 
 
编译指令： 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -k 
build/make/target/product/security/testkey --skip_postinstall -i 
source_hypervisor_yocto_target_files.zip target_hypervisor_yocto_target_files.zip 
otapackage_yocto_delta.zip 
批注： 
• ota_from_target_files：升级包编译脚本 
• build/make/target/product/security/testkey：对升级包进行签名的 key 路径，MediaTek 默认使用 Google 提供的 testkey，贵
司可指定其它的 key 路径，使用-k 参数指定 
• source_hypervisor_yocto_target_files.zip：source 版本的 hypervisor_yocto_target_files.zip 
• target_hypervisor_yocto_target_files.zip：target 版本的 hypervisor_yocto_target_files.zip 
• otapackage_yocto_delta.zip：最终产生的 Hypervisor Linux OS (L+L) 差分升级包，包名可随意指定 
• 请务必确保在 Hypervisor Android 的 build 环境下编译升级包，并确保编译全包前有执行 source & lunch，否则将导致差分包
编译失败 
 
 编译 Hypervisor Android OS 升级包 
4.4.2.1 编译 Android OS target_files.zip 
Android OS 的 target_files.zip 在利用 split build 编译 Android project 时自动产生，其位于： 
out/target/product/<project_name>/merged/target_files.zip 
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
4.4.2.2 编译 Android OS 升级包 
在参考章节 4.4.2.1 编译 Android OS target_files.zip 编译得到 Android target_files.zip 后，就可以在 Hypervisor Android 
OS 的编译环境下去编译 Android OS 的升级包。 
 
1. Build full otapackage 
编译指令： 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 
target_files.zip otapackage_android_full.zip 
批注： 
• ota_from_target_files：升级包编译脚本 
• target_files.zip：Hypervisor Android OS 的 target_files.zip 
• otapackage_android_full.zip：最终产生的 Hypervisor Android OS (L+L)全量升级包，包名可任意指定 
• 请务必确保在 Hypervisor Android 的 build 环境下编译升级包，并确保编译全包前有执行 source & lunch，否则将导致全包编
译失败 
 
2. Build incremental otapackage 
前提条件： 
编译差分包需要预先准备两份 Android OS 的 target_files.zip。一份是基底版本（source 版本）的 target_files.zip，此
处命名为 source _target_files.zip；一份是目标版本（target 版本）的 target_files.zip，此处命名为
target_target_files.zip。 
批注：请务必确保平台上烧录的基底版本 load 和基底版本的 target_files.zip 是同一次编译得到的，否则将导致 OTA 差分升级失
败。 
 
编译指令： 
./out_sys/host/linux-x86/bin/ota_from_target_files -v --block -p out_sys/host/linux-x86 -i 
source_target_files.zip target_target_files.zip otapackage_android_delta.zip 
批注： 
• ota_from_target_files：升级包编译脚本 
• source_target_files.zip：source 版本的 Android target_files.zip 
• target_target_files.zip：target 版本的 Android target_files.zip 
• otapackage_android_delta.zip：最终产生的 Android OS 差分升级包，包名可任意指定 
 
4.5 升级包结构解析 
请参考章节 3.5 升级包结构解析的描述。 
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
4.6 如何进行 Hypervisor (L+L+A) OTA 升级 
 全包升级（normal mode） 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package (include Android OS package and Linux OS package) 
 
测试步骤 
批注：请先完成 Android OS 升级，再进行 Linux OS 升级，避免某个 OS 升级完成后平台断电重启时各个 OS 的 slot 不匹配导致系
统启动失败。 
Update Android OS： 
1. 设备连接 adb 环境，默认连接 Android adb 
2. 执行如下指令连接 Yocto adb 
─ adb forward tcp:7777 tcp:6666 
─ adb connect 127.0.0.1:7777 
3. 执行 adb devices 检查 adb 是否连接成功，正确连接如下： 
List of devices attached 
0123456789ABCDEF        device               >> Android device 
127.0.0.1:7777  device                               >> Yocto device 
4. 执行 Android OS 升级脚本: python3 hypervisor_android_update.py -s 0123456789ABCDEF --file 
otapakcage_android_full.zip > update_android_full.txt 2>&1 
– hypervisor_android_update.py: Android OS 升级脚本 
– 0123456789ABCDEF: Android OS 设备 adb 编号 
– otapakcage_android_full.zip: Android OS OTA 全量升级包，不限制升级包名称 
– update_android_full.txt: Android OS 升级日志 
 
Update Linux OS： 
1. 设备连接 adb 环境，默认连接 Android adb 
2. 检查 Linux adb 是否有被连接，如果没有连接，请执行如下指令连接 Yocto adb 
– adb forward tcp:7777 tcp:6666 
– adb connect 127.0.0.1:7777 
3. 执行 adb devices 检查 adb 是否连接成功，正确连接如下： 
List of devices attached 
0123456789ABCDEF        device               >> Android device 
127.0.0.1:7777  device                               >> Yocto device 
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
4. 执行 Linux OS 升级脚本: python3 hypervisor_yocto_update.py -s 127.0.0.1:7777 --file 
otapakcage_yocto_full.zip > update_yocto_full.txt 2>&1 
– hypervisor_yocto_update.py: Linux OS 升级脚本 
– 127.0.0.1:7777: Linux OS 设备 adb 编号 
– otapakcage_yocto_full.zip: Linux OS OTA 全量升级包, 不限制升级包名称 
– update_yocto_full.txt: Linux OS 升级日志 
5. 当 Android OS 和 Linux OS 都升级完成后，重启设备（Yocto shell 环境下执行 reboot） 
 
预期结果 
1. Android OS & Linux OS 都升级完成，并且 update_android_full.txt 内打印升级成功日志：
[INFO:update_engine_client_android.cc(103)] onPayloadApplicationComplete(ErrorCode::kSuccess (0)) 
update_yocto_full.txt 内打印升级成功日志: [INFO:update_attempter_android.cc(600)] Update successfully applied, 
waiting to reboot. 
2. 如果 update_android_full.txt 内未打印升级成功日志，请执行 adb -s 0123456789ABCDEF pull 
data/misc/update_engine_log 抓取 update_engine 日志提供给 RD 分析 
3. 如果升级成功，请重启设备，且升级后第一次重启应该可以成功进入 HomeScreen 
4. 重启成功后检查系统版本号是否更新 
批注：如果升级失败，请提供 update_android_full.txt、update_engine_log 和 update_yocto_full.txt 给对应 OTA owner；如果是升
级后重启失败，请再提供一份升级后重启串口日志。 
 差分升级（normal mode） 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package (include Android OS package and Linux OS package) 
 
测试步骤 
批注：请先完成 Android OS 升级，再进行 Linux OS 升级，避免某个 OS 升级完成后平台断电重启时各个 OS 的 slot 不匹配导致系
统启动失败。 
Update Android OS： 
1. 设备连接 adb 环境，默认连接 Android adb 
2. 执行如下指令连接 Yocto adb 
– adb forward tcp:7777 tcp:6666 
– adb connect 127.0.0.1:7777 
3. 执行 adb devices 检查 adb 是否连接成功，正确连接如下： 
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
List of devices attached 
0123456789ABCDEF        device               >> Android device 
127.0.0.1:7777  device                               >> Yocto device 
4. 执行 Android OS 升级脚本: python3 hypervisor_android_update.py -s 0123456789ABCDEF --file 
otapakcage_android_delta.zip > update_android_delta.txt 2>&1 
– hypervisor_android_update.py: Android OS 升级脚本 
– 0123456789ABCDEF: Android OS 设备 adb 编号 
– otapakcage_android_delta.zip: Android OS OTA 全量升级包，不限制升级包名称 
– update_android_delta.txt: Android OS 升级日志 
 
Update Linux OS： 
1. 设备连接 adb 环境，默认连接 android adb 
2. 检查 Linux adb 是否有被连接，如果没有连接，请执行如下指令连接 Yocto SOS adb 
─ adb forward tcp:7777 tcp:6666 
─ adb connect 127.0.0.1:7777 
3. 执行 adb devices 检查 adb 是否连接成功，正确连接如下： 
List of devices attached 
0123456789ABCDEF        device               >> Android device 
127.0.0.1:7777  device                               >> Yocto device 
4. 执行 Linux OS 升级脚本: python3 hypervisor_yocto_update.py -s 127.0.0.1:7777 --file 
otapakcage_yocto_delta.zip > update_yocto_delta.txt 2>&1 
─ hypervisor_yocto_update.py: Linux OS 升级脚本 
─ 127.0.0.1:7777: Linux OS 设备 adb 编号 
─ otapakcage_yocto_delta.zip: Linux OS OTA 全量升级包, 不限制升级包名称 
─ update_yocto_delta.txt: Linux OS 升级日志 
5. 当 Android OS 和 Linux OS 都升级完成后，重启设备（Yocto shell 环境下执行 reboot） 
 
预期结果 
1. Android OS & Linux OS 都升级完成，并且 update_android_delta.txt 内打印升级成功日志：
[INFO:update_engine_client_android.cc(103)] onPayloadApplicationComplete(ErrorCode::kSuccess (0)) 
update_yocto_delta.txt 内打印升级成功日志: [INFO:update_attempter_android.cc(600)] Update successfully 
applied, waiting to reboot. 
2. 如果 update_android_full.txt 内未打印升级成功日志，请执行 adb -s 0123456789ABCDEF pull 
data/misc/update_engine_log 抓取 update_engine 日志提供给 RD 分析 
3. 如果升级成功，请重启设备，且升级后第一次重启应该可以成功进入 HomeScreen 
4. 重启成功后检查系统版本号是否更新 
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
批注：如果升级失败，请提供 update_android_full.txt、update_engine_log 和 update_yocto_full.txt 给对应 OTA owner；如果是升
级后重启失败，请再提供一份升级后重启串口日志。 
4.7 如何修改 Hypervisor Linux OS (L+L) 升级包的签名 
OTA 升级过程中分别会使用到两把 key：xxx.pk8 和 xxx.x509.pem，其中 xxx.pk8 格式的 key 用于在编译升级包时对
升级包进行签名，xxx.x509.pem 格式的 key 则用于在 OTA 升级过程中对升级包进行校验。 
 
如果您需要使用客制化的 key，请按照如下步骤操作： 
1. 将章节 4.4.1.2 编译 Linux OS (L+L) OTA 升级包中升级包编译指令 -k 参数的指定路径替换为实际使用的 xxx.pk8 和
xxx.x509.pem 路径。 
2. 将meta/meta-mediatek/recipes-support/update-engine-sideload-u/files/ota/ otacerts.zip 内
更换实际使用的 xxx.x509.pem 文件。 
4.8 如何删减/新增 OTA 升级分区 
 OTA 升级分区的来源 
 
图 4-4. OTA 升级分区来源 
 
OTA 升级分区的确认步骤如下： 
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
1. 编译阶段将分区表内的信息打包转化为 MTXXX_Android_scatter.txt，例如: MT6897_Android_scatter.txt。 
2. 将 MT6897_Android_scatter.txtn 内 is_upgradable 为 true 的分区记录到 ab_partitions.txt。 
3. 将 ab_partitions.txt 打包到各个 OS 的 target_files.zip。 
4. 编译升级包时将 ab_partitions.txt 内记录的分区镜像打包到升级包内。 
批注：检查分区 is_upgradable 状态时会优先判断 _a 分区的 is_upgradable，例如：当 xxxx_a 分区的 is_upgradable 为 true，xxx_b
的 is_upgradable 为 false 时，系统仍会记录该分区为 OTA 升级分区。 
 删减 OTA 升级分区 
批注：删减 OTA 升级分区只会关闭特定 AB 分区的 OTA 升级，并不会将关闭 AB 升级的分区修改为单分区。 
Hypervisor (L+L+A) 包含三个不同的 OS project，其镜像组成包括：Yocto 分区镜像+ Android 分区镜像 + T-box 分区镜
像。Hypervisor (L+L+A) 也包含两份分区表，一份分区表位于 Yocto codebase 内，分区表内包含 Yocto + Android + T-
box 的所有分区信息，该分区表在编译 Yocto 和 T-box 阶段被使用；另一份分区表位于 Android codebase 内，分区
表内仅包含 Android 分区信息，该分区表仅在编译 Android 阶段被使用。 
• Yocto & T-box 分区表： 
meta/meta-mediatek-mt8676-hyp/recipes-
bsp/ptgen/files/<project_name>/partition_table_emmc_hyp_ab.csv 
 
• Android 分区表： 
device/mediateksample/<project_name>/partition_table_emmc_hyp_ab.csv 
 
如下为各个 OS 删减 OTA 升级分区的方法： 
1. Yocto OS (Host OS) 
将 Yocto 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 Y 改成 N。 
例如： 
• 修改前： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
 
• 修改后： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
 
2. Android OS (Guest OS) 
将 Android & Yocto 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 Y 改成 N。  
例如： 
• 修改前： 
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
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,Y,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• 修改后： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,N,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
3. T-box OS (Guest OS) 
将 T-box 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 Y 改成 N。 
例如： 
• 修改前： 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,Y,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
• 修改后： 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,N,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
 新增 OTA 升级分区 
新增的 OTA 升级分区必须满足如下前提条件： 
1. 分区必须同时包含<partition_name>_a & <partition_name>_b，例如：boot_a & boot_b 
2. 分区必须为只读分区 
3. 分区镜像格式和镜像名称必须为<partition_name>.img，例如：boot.img 
4.8.3.1 设定已存在的 AB 分区为 OTA 分区 
各个 OS 将分区表内已经存在的 AB 分区设定为 OTA 分区的步骤如下： 
1. Yocto OS (Host OS) 
将 Yocto 分区表内需要打开 OTA 升级分区一栏的 OTA_Update 状态从 N 改成 Y。 
例如： 
• 修改前： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,N,N,BOOTLOADERS,Y 
 
• 修改后： 
preloader_a,Raw data,1024,EMMC_BOOT1,UFS_LU0,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
preloader_b,Raw data,1024,EMMC_BOOT2,UFS_LU1,N,Y,bl2.img,Y,N,BOOTLOADERS,Y 
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
 
2. Android OS (Guest OS) 
将 Yocto 分区表 & Android 分区表内需要打开 OTA 升级分区一栏的 OTA_Update 状态从 N 改成 Y。 
例如： 
• 修改前： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,N,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• 修改后： 
init_boot_a,Raw data,8192,EMMC_USER,UFS_LU2,N,Y,init_boot.img,Y,N,AUTO,Y 
init_boot_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
 
在 Hypervisor_make_yocto_targetfiles.py 的 ignored_partitions 内添加新增的 Android OTA 分区名，用于编译
yocto_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 。 
例如： 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor', 'tee', 'bl2-tbox', 'boot_uos_tbox'}   >> 将新增的
分区添加到列表 
 
3. T-box OS (Guest OS) 
将 T-box 分区表内需要关闭 OTA 升级分区一栏的 OTA_Update 状态从 N 改成 Y。 
例如： 
• 修改前： 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,N,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,N,N,AUTO,Y 
 
• 修改后： 
bl2-tbox_a,Raw data,1024,EMMC_USER,UFS_LU2,N,Y,bl2-tbox.img,Y,N,AUTO,Y 
bl2-tbox_b,Raw data,1024,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
在 Hypervisor_make_yocto_targetfiles.py 的 ignored_partitions 内添加新增的 T-box OTA 分区名，用于编译
yocto_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 。 
例如： 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor', 'tee', 'bl2-tbox', 'boot_uos_tbox'}   >> 将新增的
分区添加到列表 
 
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
在 Hypervisor_make_uos_tbox_targetfiles.py 的 partitions 内添加新增的 T-box OTA 分区名，确保 T-box 编译阶段将分
区镜像打包到 uos_tbox_target_files.zip。 
例如： 
if __name__ == "__main__": 
    target_path = "sos_tbox_images" 
    partitions = ['bl2-tbox', 'boot_uos_tbox']   >>将新增的分区添加到列表 
 
4.8.3.2 新增不存在的 AB 分区为 OTA 分区 
各个 OS 新增分区表内不存在的 AB 分区为 OTA 分区的步骤如下： 
1. Yocto OS (Host OS) 
在 Yocto 分区表内新增对应 AB 分区，并确保分区镜像为<partition_name>.img，以新增 customer 分区为例： 
• 修改后 (分区大小设定为 8MB)： 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
分区添加完毕后，请在 customer 分区的启动加载阶段添加 AB 分区逻辑判断，保证系统加载到正确的分区。 
 
2. Android OS (Guest OS) 
在 Yocto 分区表和 Android 分区表内新增对应 AB 分区，并确保分区镜像为<partition_name>.img，以新增 customer
分区为例： 
• 修改后 (分区大小设定为 8MB)： 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
在 Hypervisor_make_yocto_targetfiles.py 的 ignored_partitions 内添加新增的 Android OTA 分区名，用于编译
yocto_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 。 
例如： 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor',  'customer', 'tee', 'bl2-tbox', 
'boot_uos_tbox'}   >> 将新增的分区添加到列表 
 
3. T-box OS (Guest OS) 
在 Yocto 分区表内新增对应 AB 分区，并确保分区镜像为<partition_name>.img，以新增 customer 分区为例： 
• 修改后 (分区大小设定为 8MB)： 
customer_a,Raw data,8192 ,EMMC_USER,UFS_LU2,N,Y,customer.img,Y,N,AUTO,Y 
customer_b,Raw data,8192,EMMC_USER,UFS_LU2,N,N,NONE,Y,N,AUTO,Y 
 
 
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
在 Hypervisor_make_yocto_targetfiles.py 的 ignored_partitions 内添加新增的 Android OTA 分区名，用于编译
yocto_target_files.zip 时跳过该分区，避免编译阶段报错分区镜像不存在的错误 。 
例如： 
ignored_partitions = {'dtbo', 'boot', 'vendor_boot', 'init_boot', 'userdata', 'super', 
'vbmeta', 'vbmeta_system', 'vbmeta_vendor',  'tee', 'bl2-tbox', 'boot_uos_tbox', 
'customer'}   >> 将新增的分区添加到列表 
 
在 Hypervisor_make_uos_tbox_targetfiles.py 的 partitions 内添加新增的 T-box OTA 分区名，确保 T-box 编译阶段将分
区镜像打包到 uos_tbox_target_files.zip。 
例如： 
if __name__ == "__main__": 
    target_path = "sos_tbox_images" 
    partitions = ['bl2-tbox', 'boot_uos_tbox', ‘customer’]   >>将新增的分区添加到列表 
 
批注： 
1. 新增不存在的 AB 分区为 OTA 分区时，请确保新增分区挂载成只读分区。 
2. 新增不存在的 AB 分区为 OTA 分区时，请确保新增分区后系统烧录能正常加载启动，然后再验证 OTA 升级。 
4.9 Boot Slot 的选择 
 Boot Control 信息说明 
由于 Hypervisor (L+L+A) 部分集中升级方案中的 Linux OS 和 Android OS 是独立升级，为了便于管理各个 OS 的启动
slot，Hypervisor (L+L+A) 的 Boot Control 参数也包含独立的两份，分别用于控制 Linux OS 和 Android OS 的启动 slot
选择。各个 Boot Control 参数的存放位置和关键信息如下： 
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
 
图 4-5.Hypervisor (L+L+A) Boot Control 参数 
 
图 4-5 中各个 Boot Control 参数的说明如表 4-1 所示： 
表 4-1. Boot Control 参数说明 
系统类型 名称 描述 
Android 
priority 
表示 Android UOS Slot 的优先级，初始值为 15，系统默认选择从
优先级高的 slot 启动 
tries_remaining 
表示 Android UOS  Android slot 的可重启次数，默认值为 7，0 代
表需要触发 rollback 
successful_boot Android UOS 启动成功标志位， 1：启动成功，0：启动失败 
Linux 
priority 
表示 Linux Slot 的优先级，初始值为 15，系统默认选择从优先级
高的 slot 启动 
sos_tries_remaining 表示 Linux SOS slot 的可重启次数，默认值为 7，0 代表需要触发
rollback 
sos_successful_boot Linux SOS 启动成功标志位， 1：启动成功，0：启动失败 
uos_tbox_tries_remaining 表示 T-box UOS slot 的可重启次数，默认值为 7，0 代表需要触发
rollback 
uos_tbox_successful_boot Linux T-box UOS 启动成功标志位， 1：启动成功，0：启动失败 
 
批注：Boot Control Source Code 位于：src/bsp/lk2/platform/mediatek/common/bootctrl/bootctrl_v1 
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
 Boot slot 选择机制 
由于 Hypervisor (L+L+A) 有两份独立的 Boot Control 信息，为避免 Linux OS 和 Android OS 启动 slot 不一致，
Hypervisor (L+L+A) 在 Linux SOS LK2 内添加了 boot slot 选择机制，保证 Linux OS 和 Android OS 始终从相同的 slot 启
动。选择机制的流程如图 4-6 所示： 
 
 
图 4-6. Hypervisor (L+L+A) Boot Slot 选择机制 
 
图 4-6 所示的 Boot slot 选择机制流程说明如下： 
① 启动 Linux Host OS。 
② Linux Host OS 进入 LK2 阶段，检查 Linux OS 与 Android OS 的当前启动 slot 是否一致。 
③ 如果 Linux OS 与 Android OS 的当前启动 slot 一致，则直接从该 slot 启动。 
④ 如果 Linux OS 与 Android OS 的当前启动 slot 不一致，则继续检查当前 Linux OS 启动 slot 下的 Linux Host OS 和
Linux Guest OS 的 successful_boot 是否都为 1。 
⑤ 如果当前 Linux OS 启动 slot 下的 Linux Host OS 和 Linux Guest OS 的 successful_boot 都为 1，则将 Android OS 的
priority 修改为与 Linux OS 一致，并将 boot region 设定为与当前 Linux OS 启动 slot 一致，最后重启 Linux SOS 保
证 Linux OS 和 Android OS 启动 slot 一致。 
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
⑥ 如果当前 Linux OS 启动 slot 下的 Linux Host OS 和 Linux Guest OS 的 successful_boot 不都为 1，则继续检查当前
Android OS 的 successful_boot 是否为 1。 
⑦ 如果当前 Android OS 的 successful_boot 为 1，则将 Linux OS 的 priority 修改为与 Android OS 一致，并将 boot 
region 设定为与当前 Android OS 启动 slot 一致，最后重启 Linux SOS 保证 Linux OS 和 Android OS 启动 slot 一
致。 
⑧ 如果所有 OS 的 success_boot 值都不为 1，则认定当前无法可用启动 slot，系统启动失败。 
批注：Rollback 相关 Source Code 位于：src/bsp/lk2/platform/mediatek/common/bootctrl/bootctrl_v1 
4.10 Android Merge  
Hypervisor (L+L+A) 的 Android OS 支持虚拟 AB (Virtual AB)，当 Android OS 升级完成后首次从新 slot 启动成功后，
Android OS 会将存放在 super 分区或者 userdata 分区的新 slot super 分区镜像 merge 覆盖 super 分区旧 slot super 
镜像数据，此时 Android OS 只会存在一份可用的 super 镜像。因此当 Android OS 启动 merge flow 前，必须保证所
有 Linux OS 和 Android OS 都已经启动成功，避免出现 Android OS 启动 merge 后某个 OS 启动失败触发 rollback 机制
导致 Android OS rollback 启动失败的场景。 
 
 
图 4-7. Android merge 机制 
 
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
图 4-7 描述了 Android OS 启动 merge 的前提条件，流程说明如下： 
① 启动 Yocto OS，检测 Yocto OS 是否启动成功，即 sos_successful_boot 是否被置为 1。 
② 如果 sos_successful_boot 在 sos_tries_remaining 值减少到 0 前没被置为 1，则 Yocto OS 被判定为启动失败，触
发 rollback 机制。 
③ 如果 Yocto OS 启动成功，系统会将 sos_successful_boot 置为 1，并启动 Android OS 和 T-box OS。 
④ 如果 uos_tbox_successful_boot 在 uos_tbox _tries_remaining 值减少到 0 前没被置为 1，则 T-box OS 被判定为启
动失败，触发 rollback 机制。 
⑤ 如果 successful_boot 在 tries_remaining 值减少到 0 前没被置为 1，则 Android OS 被判定为启动失败，触发
rollback 机制。 
⑥ 如果 Android UOS 启动成功，successful_boot 的值被置为 1，此时 Android UOS 会去监测 Yocto OS 与 T-box OS
的启动状态。 
⑦ 如果 Yocto OS 与 T-box OS 的 successful_boot 都被置为 1，即启动成功，Android OS 此时会启动 merge 流程。 
⑧ 如果 Yocto OS 与 T-box OS 的 successful_boot 不都为 1，则 Android OS 循环监测。 
4.11 系统回滚 
本节主要介绍 Hypervisor (L+L+A) OTA 升级完成后，当系统首次从新版本启动失败时，系统如何 回滚到升级前的旧
版本启动，避免设备变砖。 
 系统回滚的基本原则 
由于 Hypervisor (L+L+A) Project 涉及到多个 OS，且 Android OS 需要支持 Virtual AB，因此 MediaTek 采用的 rollback
遵循如下原则： 
• Linux OS & Android OS 整体 rollback，即当有任意一个 OS 从首次新版本启动失败时，所有 OS 都要回滚到旧系
统启动，保证所有 OS 的 AB slot 一致 
• 只有在 OTA 升级成功后首次从新系统启动失败的场景下才会触发回滚机制，常规启动失败不会触发回滚机制  
 
以 Yocto、T-box 和 Android 的 3 OS (L+L+A) OTA 为例，系统会存在如下三种 rollback 场景： 
场景一：Yocto OS 从新版本启动失败 
 
图 4-8. OTA 升级后 Yocto 启动失败场景 
 
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
图 4-8 描述了 Hypervisor (L+L+A) 从 V1 -> V2 OTA 升级完成后，当 Yocto OS 从新版本 V2 启动失败触发 rollback 时，
Yocto、T-box 和 Android 的版本切换状态，场景描述如下： 
• Yocto & Android & T-box 都从 V1 版本启动。 
• 系统执行 OTA 升级到 V2 版本，并将 V2 版本设定为下一次启动的版本。 
• Yocto 从 V2 版本启动失败，此时 Android 和 T-box 都还未被启动。 
• 触发回滚，Yocto & Android & T-box 都切换到 V1 版本启动。 
 
场景二：Android OS 从新版本启动失败 
 
图 4-9. OTA 升级后 Android 启动失败场景 
 
图 4-9 描述了 Hypervisor (L+L+A) 从 V1 -> V2 OTA 升级后，当 Yocto OS 从新版本 V2 启动成功，Android OS 从新版本
V2 启动失败触发 rollback 时，Yocto、Android 和 T-box 的版本切换状态，场景描述如下： 
• Yocto & Android & T-box 都从 V1 版本启动。 
• 系统执行 OTA 升级到 V2 版本，并将 V2 版本设定为下一次启动的版本。 
• Yocto 从 V2 版本启动成功，Android 从 V2 版本启动失败，T-box 启动状态未知。 
• 触发回滚，Yocto & Android & T-box 都切换到 V1 版本启动。 
 
场景三：T-box OS 从新版本启动失败 
 
图 4-10. OTA 升级后 T-box 启动失败场景 
 
图 4-10 描述了 Hypervisor (L+L+A) 从 V1 -> V2 OTA 升级后，当 Yocto OS 和 Android OS 从新版本 V2 启动成功，T-box 
OS 从新版本启动失败触发 rollback 时，Yocto、Android 和 T-box 的版本切换状态，场景描述如下： 
• Yocto & Android & T-box 都从 V1 版本启动。 
• 系统执行 OTA 升级到 V2 版本，并将 V2 版本设定为下一次启动的版本。 
• Yocto 和 Android 从 V2 版本启动成功，T-box 从 V2 版本启动失败。 
• 触发回滚，Yocto & Android & T-box 都切换到 V1 版本启动。 
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
 系统回滚流程 
Hypervisor (L+L+A) 的系统机制设定在各个 OS 的 LK2 启动阶段，其详细流程如图 4-11 所示： 
 
 
图 4-11. Hypervisor rollback 流程 
 系统测试用例 
4.11.3.1 Yocto OS 启动失败 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package from OTA owner 
 
测试步骤 
1. 参考章节 4.6 如何进行 Hypervisor (L+L+A) OTA 升级执行 Hypervisor (L+L+A) OTA 升级，升级后不要重启设备 
2. 在 Yocto OS shell 环境下执行如下指令: 
─ adb -s 127.0.0.1:7777 shell 
─ blockdev --setrw /dev/disk/by-partlabel/yocto-boot_b 
─ dd if=/dev/urandom of=/dev/disk/by-partlabel/yocto-boot_b bs=1M count=1 
─ reboot 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
 
预期结果 
1. Yocto SOS 系统启动失败并触发 rollback 机制从升级前的系统启动成功。 
2. 系统版本号与升级前版本保持一致。 
4.11.3.2 Android OS 启动失败 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package from OTA owner 
 
测试步骤 
1. 参考章节 4.6 如何进行 Hypervisor (L+L+A) OTA 升级执行 Hypervisor (L+L+A) OTA 升级，升级后不要重启设备 
2. 在 Android SOS 环境下执行如下指令: 
─ adb -s 127.0.0.1:7777 shell 
─ blockdev --setrw /dev/disk/by-partlabel/init_boot_b 
─ dd if=/dev/urandom of=/dev/disk/by-partlabel/init_boot_b bs=1M count=1 
─ reboot 
 
预期结果 
1. Android UOS 系统启动失败并触发 rollback 机制从升级前的系统启动成功。 
2. 系统版本号与升级前版本保持一致。 
4.11.3.3 T-box OS 启动失败 
测试环境 
1. The PC has Python 3 environment 
2. Flash base load in DUT 
3. Get OTA package from OTA owner 
 
测试步骤 
1. 参考章节 4.6 如何进行 Hypervisor (L+L+A) OTA 升级执行 Hypervisor (L+L+A) OTA 升级，升级后不要重启设备 
2. 在 Android SOS 环境下执行如下指令: 
─ adb -s 127.0.0.1:7777 shell 
─ blockdev --setrw /dev/disk/by-partlabel/boot_uos_tbox_b 
─ dd if=/dev/urandom of=/dev/disk/by-partlabel/ boot_uos_tbox_b bs=1M count=1 
─ reboot 
 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
预期结果 
1. T-box UOS 系统启动失败并触发 rollback 机制从升级前的系统启动成功。 
2. 系统版本号与升级前版本保持一致。 
4.12 断电升级保护 
由于设备在 OTA 升级过程中存在异常断电导致升级中断的场景，为了保证设备在 OTA 升级过程中断电重启后能从
中断点继续完成升级，系统需要实时保存升级状态信息，其中 Linux OS 升级状态信息默认存放在 Yocto SOS 的
yocto-userdata 分区的data/misc/update_engine/prefs 目录，Android OS 升级状态信息默认存放在 Android UOS
的 userdata 分区的data/misc/update_engine/prefs 目录。 
 升级状态信息 
Hypervisor (L+L+A ) Linux OS 和 Android OS 在 OTA 升级过程中保存的升级状态信息一致，主要包括如下信息：  
 
图 4-12 升级状态信息 
 
表 4-2 描述了各个升级状态信息的功能： 
表 4-2. 升级状态信息说明 
Prefs 名称 Prefs 值 描述 
kPrefsUpdateStateNextOperation update-state-next-operation 记录下一次需要操作的 operation 
kPrefsUpdateCheckResponseHash update-check-response-hash 记录上一次升级包的 hash 值 
kPrefsResumedUpdateFailures resumed-update-failures 
记录升级被中断的次数，默认一次升级最多被
中断 10 次，如果超过 10 次，系统将强制全部
重新升级 
kPrefsUpdateStateNextDataOffset update-state-next-data-offset 记录下一次从升级包内下载数据的偏移地址 
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
MT8676 Hypervisor OTA  
User Manual 
Confidential B 
Prefs 名称 Prefs 值 描述 
kPrefsUpdateStateSHA256Context update-state-sha-256-context 记录升级状态信息的 hash 值 
kPrefsManifestMetadataSize manifest-metadata-size 记录 metadata 数据 size 
kPrefsManifestSignatureSize manifest-signature-size 记录签名数据 size 
 
 Resume 升级检查流程 
请参考章节 3.12.2 Resume 升级检查流程的描述。 
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
MT8676 Hypervisor OTA  
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
# SRC0220 MT8676_Hypervisor_Reserved_Memory_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Reserved_Memory_User_Manual_V1.1.pdf

SHA-256：7f22bbdfff2f6f0655fcdc3b24a5ee86e04364cadb802e14563b8ab370cfa8f7

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0220.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.1 
出版日期:  2024-11-12 
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
版本记录 
版本 日期 作者 描述 
1.0 2024-10-28 李新 • 正式版 
1.1 2024-11-12 李新 • 在章节 1.1 添加文档适用架构 
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
1 Reserved Memory ····················································································································································· 4 
 如何在 Kernel dts 中增加一个新的 Reserved Memory 节点？ ································································· 5 
 如何使用 mblock 来 Reserve Memory？ ···································································································· 5 
附件一 附加条款 ····························································································································································· 10 
 
 
图片目录 
图 1-1. Reserved Memory 与 Memtotal 关系示意图 ··············································································································· 4 
图 1-2. mblock_alloc 使用示例 ················································································································································· 6 
图 1-3. mblock_query_reserved_by_name 使用示例 ·············································································································· 7 
图 1-4. mblock_query_reserved_by_name 使用示例 ·············································································································· 8 
图 1-5. mblock_free 使用示例 ·················································································································································· 9 
图 1-6. free_reserved_page 使用示例 ······································································································································ 9 
 
 
  
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
1.1 什么是 Reserved Memory？ 
对于 Yocto 和 Android 来说，reserved memory 的意义和使用方法基本相同。此文档适用于 LA/LLA 架构。 
简单来说，它主要是针对 Kernel 管理的内存资源，其中一部分会预留给 Kernel 系统自身运行或其他模块功能使
用。预留的内存可以由特定模块独立使用，不受其他模块的影响。然而，这也会导致系统整体可动态分配的内存
减少。
 
图 1-1. Reserved Memory 与 Memtotal 关系示意图 
 
HW Dram size = MemTotal + HW Reserved Memory + Kernel Reserved Memory 
Reserved Memory 主要包括 HW Module Reserved Memory 和 Kernel Reserved Memory 两部分： 
 
1. HW Module Reserved Memory：这是为平台上的某些硬件或功能（如 TEE、SCP、显示等）预留的一部分内存，
供其独立使用。 
2. Kernel Reserved Memory：这是 Kernel 为存放其代码、数据以及关键功能的数据结构（如 struct page）和缓冲
区而预留的内存。 
 
1.2 如何新增一块 Reserved Memory？ 
当前，新增一块 reserved memory，有两种方法： 
 
1. 在 Kernel dts 文件中增加一个新的 reserved memory 节点； 
2. 在 LK2 中调用 mblock 的 API 来新增一块 reserved memory（推荐）。 
 
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
 如何在 Kernel dts 中增加一个新的 Reserved Memory 节点？ 
在 Kernel dts 中找到 reserved memory 节点，在这下面添加自己的 reserved memory 的子节点。 
reserved-memory { 
    xxx-reserved-memory { 
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
 
• 蓝色字体：reserved memory 的 start address； 
• 红色字体：size； 
• alignment：对齐大小；  
• compatible：关联相应的驱动程序，在 Kernel 启动流程阶段执行相应的驱动程序对这块 reserved memory 进
行特殊处理； 
• no-map：加上该属性意味着这块内存不会做 PA → VA 的线性映射，Kernel 也不会管理到这块 memory. 
 
这种是 Kernel 原生提供的方法，更多节点含义可以参考 
https://android.googlesource.com/kernel/msm/+/android-7.1.0_r0.2/Documentation/devicetree/bindings/reserved-
memory/reserved-memory.txt 
 
 如何使用 mblock 来 Reserve Memory？ 
mblock 是 MediaTek 开发在 LK2 阶段管理 reserved memory 的机制，新增一块 reserved memory 所使用的 API 为
mblock_alloc 和mblock_alloc_range。 
使用时需要指定以下参数： 
参数 释义 
reserved_size 预留的内存大小 
align 预留内存的对齐大小 
lower_bound 预留内存的地址下限 
limit 预留内存的地址上限 
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
参数 释义 
expected_address 
指定期望的 start address，如果是 free 的，则会分到这
个 start address；如果已经被占用了会报错。不指定
expected_address 的话，会根据地址上下限动态地去找
一块符合 size 要求的区间 
mapping 
预留内存的 mapping 类型，0 为 no-map，1 为
mapping，2 为 reusable 
name 预留内存的名称 
mblock alloc 的方向 
默认会在 lower_bound~limit 范围内，从 limit 往前寻
找，找到一块 free 的满足要求的 address 返回；如果
找不到满足要求的，则会 fail. 
 
使用示例如下： 
 
图 1-2. mblock_alloc 使用示例 
 
alloc 成功会显示如下 log，start: 0x8fa00000 为 alloc 的 start address。 
mblock_alloc_range_no_lock:535: start: 0x8fa00000, sz: 0x600000 lower_bound: 0x0, limit: 
0x90000000,mblock_alloc_range_no_lock:537: map:0 name:apu_apusys-rv_secure 
 
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
补充： 
1. 调用mblock_alloc 分配 reserved memory 的原理与 dts 中的 reserved memory 是相同的。LK2 在结束时会将 
mblock_alloc 分配的 reserved memory 信息以 dts 节点的形式写入 fdt 中，对应的 log 为： 
mblock_fdt_reserved_append:1595: mblock-reserved-memory is appended successfully 
 
2. 在 LK2 其他文件中，如果需要查询前面已经 reserved memory，可以使用
mblock_query_reserved_by_name(xxx,0)，参数 xxx 是 reserved memory 的 name，返回结构体 reserved，
其中 reserved->size 是查询到对应的 size，reserved->size 是查询到对应的 start address。  
 
举例如下: 
 
图 1-3. mblock_query_reserved_by_name 使用示例 
 
1.3 Kernel Driver 如何获取 Reserved Memory 使用？ 
在 Kernel driver 中通过 compatible 名称找到指定 node，解析出对应 reserved memory 的 start phys address 和 size，
再映射成 virt address，后续就可以使用这段 memory 了。举例如下： 
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
 
图 1-4. mblock_query_reserved_by_name 使用示例 
 
1.4 如何 Free 一块 Reserved Memory？ 
在 LK2 阶段 free 一块 reserved memory 所使用的 API 为mblock_free 和mblock_free_partial。 
 
• int mblock_free(u64 addr);// 以addr 起始的整块 reserved memory 全部 free 
• int mblock_free_partial(u64 addr, u64 size);// free 起始地址为addr，大小为size 的部分的
reserved memory 
 
使用时需要指定以下参数： 
参数 释义 
addr 
整块 free 的话，这里填 alloc 时返回的 reserved 
memory 的 start address；部分 free 的话，这里填希望
被 free 的部分 reserved memory 的 start address 
size 要 free 的大小 
 
 
 
 
 
 
 
 
 
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
 
使用示例如下： 
 
图 1-5. mblock_free 使用示例 
free 成功有如下 log： 
mblock_free_with_size:970: start 0x1c0000000 size: 0x7c00000, name: LK_KERNEL 
 
注意： 
当前，mblock 相关的函数mblock_alloc 和mblock_free 目前仅支持在 LK2 阶段调用。如果在 LK 阶段使用完 reserved 
memory，可以使用mblock_free 来 free；如果需要保留到 Kernel 阶段使用一段时间再释放，可以在 Kernel 启动后调用 
free_reserved_page 接口来 free。 
 
举例如下： 
 
图 1-6. free_reserved_page 使用示例 
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
MT8676 Reserved Memory  
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
# SRC0221 MT8676_Hypervisor_SDCard_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_SDCard_User_Manual_V1.1.pdf

SHA-256：6252ad36211480a2791bbebfe9da8e90cbb0cb1be998cdbe1ecd158c80a4e6c0

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0221.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本：  1.1 
出版日期：  2024-11-18
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
版本记录 
版本 日期 作者 描述 
1.0 2024-10-28 卢东 正式版 
1.1 2024-11-18 卢东 增加对 Yocto-tbox UOS 的支持 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 4 
表格目录 ··········································································································································································· 4 
1 SDCard ······································································································································································· 5 
1.1 概述·········································································································································································· 5 
 基本概述 ······················································································································································ 5 
 缩略词 ·························································································································································· 5 
1.2 架构/流程概述 ························································································································································ 5 
 SDCard 介绍 ·················································································································································· 5 
 MT8676 SDCard 特性 ··································································································································· 6 
1.3 配置/客制指南 ························································································································································ 7 
 Yocto SOS Passthrough ·································································································································· 7 
 UOS Passthrough ··········································································································································· 9 
1.4 常见问题/故障排除 ·············································································································································· 11 
 SD 卡不识别，量测不到 VDD 电压 ·········································································································· 11 
 插 SD 卡开机可以识别，热插拔不识别 ·································································································· 11 
附件一 附加条款 ····························································································································································· 13 
 
  
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
图片目录 
图 1-1. UHS-I 卡初始化流程 ····················································································································································· 6 
图 1-2. SDCard 的 DTS 节点 ······················································································································································· 7 
图 1-3. SDR104 模式的 pinctrl 节点 ·········································································································································· 8 
图 1-4. SDCard 电源在 Yocto SOS 端 DTS 配置 ······················································································································· 10 
图 1-5. SDCard 电源在 UOS 端 DTS 配置 ································································································································ 10 
图 1-6. SOS 删除相应中断号 ·················································································································································· 11 
图 1-7. UOS 增加相应中断号 ·················································································································································· 11 
图 1-8. 用于检测引脚的 dws 设置 ········································································································································· 12 
 
表格目录 
表 1-1. 缩略词 ··········································································································································································· 5 
 
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
1 SDCard 
1.1 概述 
 基本概述 
本章节介绍 SDCard 控制器的硬件特性，软件配置和功能，以及常见问题的 debug 方法。 
 
 缩略词 
表 1-1. 缩略词 
缩略词 全称 
DDR50 Double Data Rate up to 50MB/s@50MHz 
MMC MultiMedia Card 
SDR104 Signal Data Rate up to 104MB/s@208MHz 
SDR12 Signal Data Rate up to 12.5MB/s@25MHz 
SDR25 Signal Data Rate up to 25MB/s@50MHz 
SDR50 Signal Data Rate up to 50MB/s@100MHz 
UHS-I Ultra High Speed Phase I card 
 
1.2 架构/流程概述 
 SDCard 介绍 
SDCard 是一种基于半导体快闪存储器的新一代高速存储设备，是从 MMC 卡 (MultiMedia Card) 格式上发展而来，具
有高记忆容量、快速数据传输率、极大的移动灵活性和很好安全性，被广泛应用于便携装置上。在 SD3.0 协议中，
SD 卡的理论最大容量可达 2TB，理论最大读写速度可达 104MB/s。 
 
SD 卡主要引脚和功能描述如下： 
(1) CLK: 时钟信号，控制器或 SD 卡在每个时钟周期传输一个 cmd/data bit，在 UHS-I 速度模式下，最高可达
208MHz； 
(2) CMD: 命令和响应复用引脚，命令是由控制器发给 SD 卡，响应是 SD 卡对控制器发送的应答； 
(3) DAT0~3: 数据线，数据可以从 SD 卡传向控制器 (read)，也可以从控制器传向 SD 卡 (write)； 
(4) VDD: SD 卡的供电脚，通常配置 3.3V 电压，协议规定的范围 2.7V~3.6V； 
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
(5) CD: SD 卡插入检测，通常借由 SD 卡座机械结构实现有卡/无卡时 GPIO 电平变化。 
 
 
图 1-1. UHS-I 卡初始化流程 
 
 MT8676 SDCard 特性 
(1) 兼容 SD3.0 协议标准 
(2) 支持 Basic DMA 和 Descriptor DMA 模式 
(3) 支持 Bus speed mode: Default Speed/High Speed/SDR12/SDR25/SDR50/SDR104/DDR50  
(4) 支持 1/4bits bus width 
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
1.3 配置/客制指南 
 Yocto SOS Passthrough 
1.3.1.1 内核配置 
配置文件位置： 
meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/files/auto8676p1_64_hyp_defconfig 
 
(1) 启用 SDCard 支持 
CONFIG_MMC = y 
(2) 启用联发科主机驱动程序支持 
CONFIG_MMC_MTK_PRO = m 
 
1.3.1.2 DTS 节点 
 
图 1-2. SDCard 的 DTS 节点 
 
(1) SD2.0 卡支持配置 “cap-sd-highspeed”，SD3.0 高速卡 mode 配置 “sd-uhs-xxx”； 
(2) SD driving strength 可以在对应 mode 的 pinctrl 节点配置，比如下面 SDR104 mode； 
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
 
 
图 1-3. SDR104 模式的 pinctrl 节点  
 
(3) SD 卡检测脚通过 “cd-gpios”配置 GPIO pin，GPIO_ACTIVE_LOW 表示插卡时低电平，GPIO_ACTIVE_HIGH 则表示
插卡时高电平； 
(4) 根据实际使用的 SD 卡端 VDD 以及 Host 端 IO 供电配置 “vmmc-supply”和 “vqmmc-supply”。如果需要使用 fast 
power off （拔卡时 VMCH 硬件下电）功能，“vmmc-supply”配置节点&mt6373_vmch_eint_high（对应“cd-gpios”
的 GPIO_ACTIVE_LOW）或&mt6373_vmch_low（对应“cd-gpios”的 GPIO_ACTIVE_HIGH）；如果不需要使用 fast 
power off 功能，“vmmc-supply”配置节点&mt6373_vmch。 
 
1.3.1.3 KO 表 
添加 host driver ko 到如下路径的 ko table，第三列配置 “ramdisk”会安装到 initramfs。 
meta/meta-mediatek-mt8676-hyp/recipes-
kernel/linux/ko_order_table/auto8676p1_64_hyp/ko_order_table.csv: 
 
 
1.3.1.4 设备挂载 
SDCard 在 Yocto SOS 端挂载到 share folder，通过 virtio-fs 实现多系统访问。例如为了在 Android-IVI UOS 端实现双系
统访问，挂载命令参考如下： 
mkdir -p /data/share/media/sdcard 
mount -t ext4 /dev/mmcblk0p1 /data/share/media/sdcard 
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
在 Android-IVI UOS 端对应的访问路径为/data/vendor/share/media/sdcard。 
 
 UOS Passthrough 
如果只需要在 Android-IVI 或者 Yocto-tbox UOS 端访问 SDCard，请先 disable Yocto SOS 端 SDCard dts 节点，然后进行
以下配置。 
 
1.3.2.1 内核配置 
配置方式与章节 1.3.1.1 相同，Android-IVI 默认已配置。 
Yocto-tbox 位置：meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/linux-mtk-extension-
uos/auto8676p1_64_uos_tbox_defconfig 
 
1.3.2.2 DTS 节点 
配置方式与章节 1.3.1.2 相同。 
 
1.3.2.3 KO 表 
添加 host driver ko 到 ko table 文件。 
Android-IVI 位置：device/mediateksample/auto8676p1_64_bsp_vm/ko_order_table.csv 
Yocto-tbox 位置：meta/meta-mediatek-mt8676-hyp/recipes-kernel/linux/ko_order_table/ 
auto8676p1_64_uos_tbox/ko_order_table.csv 
 
 
1.3.2.4 其它相关资源配置 
(1) 电源虚拟化支持 
– 在 Yocto SOS 端 dts 文件meta/meta-mediatek-mt8676-hyp/recipes-
kernel/linux/files/auto8676p1_64_hyp.dts 中的“hyp_regulator_host”添加对 SDCard 两路电源的支持 
 
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
 
图 1-4. SDCard 电源在 Yocto SOS 端 DTS 配置 
 
– 在 Android-IVI 或者 Yocto-tbox UOS 端 dts 中删除 SDCard 两路电源的设定 
 
图 1-5. SDCard 电源在 UOS 端 DTS 配置 
 
(2) 中断虚拟化支持 
在 thyp-sdk 中修改配置增加对 UOS 端 SDCard host 中断号 166 （需要加 32 后等于 198）的支持。 
– sos_mt8676.json 中删除中断号 
 
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
 
图 1-6. SOS 删除相应中断号 
 
– uos_alps_pv8676.lua(Android-IVI)或者 uos_tbox_pv8676.lua(Yocto-tbox)中增加中断号 
 
图 1-7. UOS 增加相应中断号 
 
1.4 常见问题/故障排除 
 SD 卡不识别，量测不到 VDD 电压 
(1) 按照章节 1.3 检查 Kernel config 和 DTS 配置是否正确； 
(2) 如果 VDD 供电 power 用的是 MT6373，并且 detect pin 有接到 MT6373 的 SD_DET 脚，请检查 DTS 中 “vmmc-
supply”配置的 power 节点与 detect pin 的极性是否匹配； 
(3) 如果步骤(2)检查结果匹配，请将“vmmc-supply”配置&mt6373_vmch 看 VDD 是否可以上电，可以上电表示 fast 
power off 功能有问题，提 PMIC issue 到 MediaTeK； 
(4) 如果步骤(3)不可以上电，抓取 Kernel log 并提 SDCard issue 到 MediaTeK。 
 
 插 SD 卡开机可以识别，热插拔不识别 
(1) 按照章节 1.3.1.2 检查 DTS 中 “cd-gpios”的配置是否正确； 
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
MT8676 Hypervisor SDCard 
User Manual 
Confidential B 
(2) 如果 DTS 配置没有问题，检查 src/devtools/dct/dws/mt6897/${PROJECT}.dws （Yocto 路径）或者
vendor/mediatek/proprietary/tools/dct/dws/mt6897/${PROJECT}.dws （Android 路径）中 detect pin
对应的 GPIO 配置是否正确，参考如下配置： 
 
图 1-8. 用于检测引脚的 dws 设置 
 
(3) 如果配置检查正确但是热插拔还是无法识别，请再硬件量测下 detect pin 在插/拔卡状态下的电平是否符合预
期，符合预期的话请提 SDCard issue 到 MediaTeK。 
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
MT8676 Hypervisor SDCard 
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
# SRC0222 MT8676_Hypervisor_Secure_Boot_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Secure_Boot_User_Manual_V1.0.pdf

SHA-256：2b1a7d97f0a2e98635779efa15c6cd8a1c58b03d9a29d85f22b53e7b2b601d3c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0222.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.0 
出版日期:  2024-11-14
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
版本记录 
版本 日期 作者 描述 
1.0 2024-11-14 高峰 正式版 
 
  
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
 签名 Yocto 文件系统镜像 ·························································································································· 12 
 签名 MTK 安卓格式镜像 ··························································································································· 13 
1.5 签名 DA ·································································································································································· 13 
1.6 Authfile 生成 ·························································································································································· 14 
附件一 附加条款 ····························································································································································· 15 
 
图片目录 
图 1-1. 安全启动检查流程 ························································································································································ 7 
图 1-2. dakey.h ········································································································································································· 10 
 
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
MT8676 Hypervisor Secure Boot 
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
4. Yocto LK2 从 NVM 把 FIT 镜像（比如 yocto 内核等 FIT 镜像）加载程序加载到非安全的 DRAM 区域并验证。它使
用嵌入在 LK2 中的 VERIFIED 公钥来认证校验 FIT 镜像的 FIT 签名，并检测 FIT 镜像中各个子镜像的 HASH 值。验
证方法使用 SHA256 计算 HASH 值，RSA（2048 位）和 MTK 或 PSS 填充进行验证 
 
5. Yocto LK2 还从 NVM 加载 MTK 签名格式的镜像（比如 TEE，Hypervisor 镜像）到安全的 DRAM 区域并验证。它
使用嵌入在 LK2 程序内的 ROOT 公钥来认证镜像的 CERT1，并使用从 CERT1 中提取的 IMAGE 公钥来认证镜像的
CERT2。如果 CERT2 验证成功，会认为此镜像合法，会继续跑后面的流程。验证方法使用 SHA256 计算 HASH
值，RSA（2048 位）和 MTK 或 PSS 进行验证。 
 
6. Yocto LK2 在校验完上述 4 和 5 所需要校验的镜像后，会跳转到 TEE, TEE 会启动 Hypervisor 镜像 gz.img，Hypervisor
会先启动 Yocto 内核，然后再校验启动安卓 LK2 镜像和 Tbox LK2 镜像。 
 
7. Yocto 内核执行后，可以通过 Yocto 内核中，提供的 root_check 功能来实现对只读系统的抽样校验。 
 
8. Hypervisor 校验安卓 LK2 和 Tbox LK2 的方法需要 Hypervisor 的厂商来提供。目前是谦川。 
 
9. 安卓 LK2 会通过 AVB 校验安卓内核，在安卓 Linux 系统执行后，可以通过 Linux 内核中的 dm-verity（在块设备
上）来验证只读镜像。 
注意： 
• 目前 dm-verity 仅支持 Linux 中的块设备（eMMC 上的 EXT4）。 
 
10. Tbox LK2 会加载 Tbox 内核镜像到 DRAM 区域进行验证，Tbox 内核镜像是 FIT 格式的镜像。Tbox LK2 会使用嵌入
在 Tbox LK2 的 VERIFIED 公钥来认证校验 FIT 镜像的 FIT 签名，并检测 FIT 镜像中各个子镜像的 HASH 值。验证方
法使用 SHA256 计算 HASH 值，RSA（2048 位）和 MTK 或 PSS 填充进行验证。 
 
11. Tbox 内核执行后，可以通过 Yocto 内核中，MediaTek 提供的 root_check 功能来实现对只读系统的抽样校验。 
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
 
图 1-1. 安全启动检查流程 
  
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
Android DA: $DA_Kit/Raphael-da/custom/$PLATFORM/oemkey.h 
Yocto LK2: $LK/target/$PROJECT/inc/oemkey.h 
命令: 
chmod 777 der_extractor 
./der_extractor root_pubk.der oemkey.h ANDROID_SBC 
 
1.4.1.2 生成 dakey.h 
dakey.h 包含用于由 LK2 验证 DA_BR.bin 的 DA_BR 公钥。并使用相应的 DA 私钥对 DA_BR.bin 进行签名。 
命令: 
chmod 777 der_extractor 
./der_extractor da_pubk.der dakey.h ANDROID_SBC 
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
1. 签名 first-loader（本项目是 Yocto LK2）会用到 verified_key.pem 这把 key 
2. Key 放置的目录： 
<yocto branch>/meta/meta-mediatek/conf/machine/keys/ 
3. 编译各 FIT 镜像时，开起安全配置会自动对相应的镜像进行签名。 
4. 签名过程：FIT 镜像时开源标准格式的镜像，所以会使用 uboot-mkimage 工具对镜像进行签名，主要是对原始
计算 HASH 存入 HASH 节点，并使用verified priv key 对 FIT 镜像中除 data 节点以外的节点拼接后进行签
名，将签名的结果保存在 Signature 节点。 
 
 签名 Yocto 文件系统镜像 
1. 签名 Yocto 文件系统也会用到会用到 verified_key.pem 这把 key 
2. Key 放置的目录： 
<yocto branch>/meta/meta-mediatek/conf/machine/keys/ 
3. 编译各文件系统镜像时，开起安全配置会自动对相应的镜像进行签名。 
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
4. 签名过程：MediaTek 会提供文件系统的签名工具 mtd_verify。此工具会根据输入的参数，从文件系统原始镜
像中抽出 N 份数据，每份固定 size 和固定间隔；将抽出的部分拼接在一起计算 HASH，使用 verified 私钥对
HASH 进行签名；将输入参数的信息和 Signature 保存在原始镜像尾部。 
 
 签名 MTK 安卓格式镜像 
1.4.7.1 生成 cert1 和 cert2 密钥 
1. 使用 root_prvk.pem 和 img_prvk.pem 生成 cert1 和 cert2_key。 
2. 运行以下命令。  
python ./vendor/mediatek/proprietary/scripts/sign-image_v2/img_key_deploy.py mt6897  
cert1_key_path=${KEY_PATH}/root_prvk.pem cert2_key_path=${KEY_PATH}/img_prvk.pem 
root_key_padding=pss 2>&1 | tee  SecureGen.log 
 
注意:  
• 请不要进入 ./vendor/mediatek/proprietary/scripts/sign-image_v2/ 目录执行 img_key_deploy.py。请在代码库
的根目录下执行该命令。 
• 请检查所有镜像的 cert1 和 cert2_key 是否已在以下位置更新 
vendor\mediatek\proprietary\custom\mt6897\security\cert_config\cert1\ 
vendor\mediatek\proprietary\custom\mt6897\security\cert_config\cert2_key\ 
 
1.4.7.2 签名镜像 
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
MT8676 Hypervisor Secure Boot 
User Manual 
Confidential B 
将 DA 公钥 (da_prvk.pem)导出，放置到 Android 路径
vendor/mediatek/proprietary/scripts/secure_chip_tool/custom_keys 目录下 
 
2. 将需要签名的 DA 放置在 prebuilt/resignda/ 目录下，并执行以下命令来签名 DA： 
cd vendor/mediatek/proprietary/scripts/secure_chip_tool/ 
python MTK/resign_da.py prebuilt/resignda/DA_BR.bin MT6897 
settings/Legacy/da/bbchips_pss.ini all out/resignda/DA_BR-resing.bin 
 
1.6 Authfile 生成 
DA 的公钥包含在 authfile 中，BROM 使用它来验证 DA。因此，如果启用了 DAA，在使用 flashtool 下载镜像时需要 
authfile。所有位于以下位置的 .ini 文件，已经为本项目配置好了。 
./vendor/mediatek/proprietary/scripts/secure_chip_tools/settings/Legacy/authfile/ 
 
您只需要替换位于以下位置的 DA、和根私钥的 .pem 文件。 
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

## PDF物理页 15

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 15 
MT8676 Hypervisor Secure Boot 
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
# SRC0223 MT8676_Hypervisor_Suspend_Resume_User_Manual_V1.3.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Suspend_Resume_User_Manual_V1.3.pdf

SHA-256：e8cfe763d37479350adb15d332225918bee8875a50fd878278d834e00e80d073

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0223.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.3 
出版日期:  2025-07-11
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

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 2 
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-10-28 郑孝俊 正式版 
1.1 2024-11-13 郑孝俊 更新 L+L+A 
1.2 2025-02-21 陈杰 更新 Modem 和 RTC 唤醒 
1.3 2025-07-11 陈杰 
更新 Android STR Debug 方式 
更新如何分析休眠功耗大的问题 
 
  
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
 如何分析 Android uos 无法 Suspend 问题 ······························································································· 11 
 Hypervisor Debug 命令 ······························································································································ 11 
附件一 附加条款 ····························································································································································· 13 
 
图片目录 
图 1-1. Hypervisor suspend 流程 ··············································································································································· 5 
图 1-2. Hypervisor resume 流程 ················································································································································ 6 
图 1-3. Wakelock dump 示意图 ··············································································································································· 10 
 
表格目录 
表 1-1. MT8676 唤醒源列表 ····················································································································································· 9 
 
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
 
图 1-1. Hypervisor suspend 流程 
 
主要的流程说明: 
 
1. 平台进出休眠主要由 MCU 发起，MCU 通过 GPIO35 (MCU2AP) 的状态控制 SoC 进出休眠，GPIO35 被拉低后，
会触发中断，该中断会被 Hypervisor 分发给 SoS 系统处理，SoS Kernel 收到中断后，将 Key Event 上报。 
2. 在 SoS UserSpace 中，MediaTek 添加了一段控制逻辑 SleepManager (State Manager)，用于管理 Guest OS 的电源
状态，这层逻辑主要是 SoC 通过 Input Sub System 获取 Key Event 来触发的。 
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
Resume Flow 与 Suspend 相反，可以参考图 1-2： 
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
 
图 1-2. Hypervisor resume 流程 
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
参考图 1-2，SPM 收到 RTC 或 Modem 唤醒后，1- 6 的流程没有变化。第 7 步，SOS 的 SleepManager 通过 Key Event  
的 Device Name，判断出是 RTC 或 Modem 触发的唤醒，则根据实际需求做不同的唤醒逻辑，例如仅需要唤醒 Tbox  
OS。Tbox Resume 后，需要 hold wake_lock 再处理任务，处理完任务后 release wake_lock。而 Host OS 端，当触发 
Tbox Resume 后，会持一个临时的 wake_lock，通过节点/sys/guest_os/tbox/pm_state，使用 Mailbox 机制查询 
Tbox OS 的状态，如果 Tbox 端已完成任务并重新休眠，Host OS 端则会释放临时的 wake_lock。最后，SOS 端监测 
到没有 hold wakelock，会重新休眠。 
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
Kernel log 中， 关键字 “late suspend of devices complete after xxx msecs” 表示 device late suspend 完
成。 
Kernel log 中， 关键字 “noirq suspend of devices complete after xxx msecs” 表示 device noirq suspend 完
成。 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
定时器（PCM_Timer）唤醒： 
[SPM] suspend wake up by PCM_TIMER, timer_out = 65612 
 
 唤醒源梳理 
目前 MT8676 支持的唤醒源列表如下： 
表 1-1. MT8676 唤醒源列表 
Name Control Bit Description Can It be Disabled 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
Name Control Bit Description Can It be Disabled 
R12_MSDC_WAKEUP_EVENT_B 31 MSDC 相关唤醒源 Y 
 
您可以按照以下方式禁用列表中可以禁用的唤醒源。但是，请注意，只有在“ Can It be Disabled”列中标注为可禁
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
 如何分析休眠功耗大的问题 
• 首先看是否有频繁唤醒问题，如果有，请参考 1.3.3 章节确认唤醒源，也可以通过如下 log 关键字确认唤醒
源。 
log keywords:  [SPM] suspend wake up by 
 
• 如果成功进入休眠状态但功耗偏大，请先检查是否有未关闭的外设耗电。 可以提供相关 log 给 Lower Power 
Module 进行分析定位。 
log keywords:  26M_off_pct = 
log keywords:  vcore_off_pct = 
 
• 如果定位到是 MediaTek SoC 造成的功耗偏大，请提供日志给 MediaTek 进行分析。抓取日志前需要开通相关
mtk kernel log，打开方式如下： 
open log cmd:  echo 1 > /proc/mtprintk 
               echo 1 > /proc/mtk_lpm/spm/block_threshold 
 
 如何分析 Android uos 无法 Suspend 问题 
• 首先看是否有触发 Android Suspend，主要看 SoS 是否触发 IVI 进入休眠。 
echo powerkey > /sys/guest_os/android/pm_state  
 
• 如果有触发休眠，再通过 Android 端 Kernel log 确认是否有发送 Powerkey，开通 mtk kernel log 方式以及 log 关
键字如下。 
open log cmd:  echo 1 > /proc/mtprintk 
log keywords:  [name:hyp_power_client&]host_request_suspend cmd = 0  
 
• 如果确认有发送 powerkey，再看 kernel log 是否有触发 kernel suspend，关键 log 如下。 
log keywords:  suspend entry (s2idle) 
 
• 如果没有触发 kernel suspend ，则需要去 Check Android CPMS。 
• 最后如果有触发 kernel suspend，再通过 1.3.1 中的方式判断是否成功进入 suspend。 
 
 Hypervisor Debug 命令 
• 在 SoS 端检查 IVI (Android) OS 的状态，显示 running 表示 Android 正在运行，显示 suspend 表示 Android 已经挂
起。 
cat /sys/guest_os/android/pm_state  
 
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
MT8676 Hypervisor Suspend & Resume 
User Manual 
Confidential B 
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
 
 
MediaTek Confidential
 For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
MediaTek Confidential
For hlzhang@ pvetec.com Use Only
Document Feedback


---
# SRC0224 MT8676_Hypervisor_System_User_Manual_V1.2.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_System_User_Manual_V1.2.pdf

SHA-256：0ee3f30c7a2cf4a6396cda919dda94091db46dcf3af61cb09299b71ff7cca025

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0224.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.2 
Release date:  2025-07-11
MT8676 Hypervisor System  
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
版本记录 
版本 日期 作者 描述 
1.0 2024-11-04 彭凯 • 正式版 
1.1 2024-11-19 彭凯 
• 增加全虚拟化 L+A+L 相关描述。 
• 增加章节 1.2.3 Thyp sdk 预编译文件、章节 0  
• 添加共享文件夹、章节 1.5.1 切换 USB。 
1.2 2025-07-11 彭凯 
• 完善章节 1.1 名词解释、章节 1.4.1 调整虚拟机内
存。 
• 增加章节 1.6 开机流程、章节 1.7 关机流程。 
  
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
图片目录 ··········································································································································································· 3 
表格目录 ··········································································································································································· 4 
1 Hypervisor System ····················································································································································· 5 
1.1 名词解释 ·································································································································································· 5 
1.2 系统架构 ·································································································································································· 5 
 project 说明 ·················································································································································· 7 
 代码结构 ······················································································································································ 7 
 Thyp sdk 预编译文件 ··································································································································· 8 
1.3 编译与烧录 ······························································································································································ 9 
 Build Server ··················································································································································· 9 
 编译指令 ···················································································································································· 10 
 软件构成 ···················································································································································· 12 
 烧录软件 ···················································································································································· 14 
1.4 客制化 ···································································································································································· 16 
 调整虚拟机内存 ········································································································································ 16 
 调整虚拟机 CPU ········································································································································· 16 
 添加共享文件夹 ········································································································································ 17 
1.5 调试技巧 ································································································································································ 18 
 切换 USB ····················································································································································· 18 
 ADB ····························································································································································· 19 
 查询虚拟机状态 ········································································································································ 19 
1.6 开机流程 ································································································································································ 19 
1.7 关机流程 ································································································································································ 21 
 UOS 关机 ···················································································································································· 21 
 SOS 关机 ····················································································································································· 22 
 reboot soc ··················································································································································· 24 
附件一 附加条款 ····························································································································································· 25 
 
图片目录 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
图 1-1.全虚拟化 L+A+L 系统架构 ············································································································································· 6 
图 1-2. 部分虚拟化 L+A+L 系统架构 ········································································································································ 6 
图 1-3 Thyp sdk 预编译文件目录结构 ······································································································································ 8 
图 1-4. 下载 SP_Flash_Tool ······················································································································································ 14 
图 1-5. 加载 flash.xml ······························································································································································ 15 
图 1-6. 软件烧录······································································································································································ 15 
图 1-7. L+A+L 内存布局 ··························································································································································· 16 
图 1-8. 开机流程······································································································································································ 20 
图 1-9. UOS 关机流程 ····························································································································································· 22 
图 1-10. SOS 关机流程 ···························································································································································· 23 
图 1-11. reboot soc 流程 ························································································································································· 24 
 
表格目录 
表 1-1. 名词解释········································································································································································ 5 
表 1-2. Yocto Hypervisor Project ················································································································································ 7 
表 1-3. Hypervisor 代码 ····························································································································································· 7 
表 1-4 Thyp sdk 预编译文件说明·············································································································································· 8 
表 1-5. Yocto build server 要求 ················································································································································ 10 
表 1-6. Android build server 要求 ············································································································································ 10 
表 1-7. SOS 镜像文件 ······························································································································································ 12 
表 1-8. UOS Android 镜像文件 ················································································································································ 13 
表 1-9. UOS T-Box 镜像文件 ···················································································································································· 13 
表 1-10. adb shell 指令 ···························································································································································· 19 
 
  
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
1 Hypervisor System 
MT8676 Hypervisor SDK 由 Yocto、Android 和 Thyp SDK 三大部分组成。本章节主要介绍 Yocto 和 Android 与
Hypervisor 相关的系统内容。Yocto 单系统的介绍请参考文档 MT8676_Yocto_System_User_Manual，Android 单系统
的介绍请参考文档 MT8676_Android_System_User_Manual。本章节包括系统架构、编译与烧录、客制化、调试工具
与技巧等内容。 
 
1.1 名词解释 
表 1-1. 名词解释 
缩略词 全称及释义 
SOS Service OS。包含了虚拟机管理程序和虚拟化后端的操作系统。 
UOS User OS。包含了虚拟化前端的操作系统。 
Nebula 谦川 Hypervisor 的微内核。 
全虚拟化 除 WiFi、BT、GPS、Tbox、GPIO、USB 外，其余模块全部虚拟化。 
部分虚拟化 与全虚拟化相比，APU、GPU、Camera、Codec 等模块不虚拟化，直通 Android。 
 
1.2 系统架构 
MT8676 Hypervisor 支持两种架构，一种是全虚拟化 L+A+L 架构，如图 1-1 所示。一种是部分虚拟化 L+A+L 架构，如
图 1-2 所示。这两种架构都由四大块组成。第一个是谦川的 Hypervisor 和 Nebula 微内核。第二个是 SOS，作为主
机，主要运行虚拟机管理程序和虚拟化后端驱动。第三个是 UOS Android，作为客户机，主要运行虚拟化前端驱动
和部分直通硬件的驱动。第四个是 UOS T-Box，作为客户机，主要运行 T-Box 和 GPS 的驱动。其中 SOS 和 UOS T-Box
是 Linux 系统，通过 Yocto 构建框架编译。UOS Android 是 Android 系统。 
 
对比全虚拟化架构和部分虚拟化架构，主要区别在于 APU、GPU、Camera、Codec 等模块，由虚拟化变为 UOS 
Android 直通。 
 
MT8676 只有一个 USB 硬件，所以某一时刻只能直通到某一个操作系统。对于全虚拟化架构，默认直通到 SOS。对
于部分虚拟化架构，默认直通到 UOS Android。切换 USB 的方法请参考 1.5.1 小节。 
 
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
USB* 只有一个系统可以使用USB。默认直通到SOS。
GPS
conninfr
a
GPIO
 
图 1-1.全虚拟化 L+A+L 系统架构 
 
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
USB* 只有一个系统可以使用USB。默认直通到UOS Android。
GPS
conninfr
a
GPIO
 
图 1-2. 部分虚拟化 L+A+L 系统架构 
 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
 project 说明 
表 1-2 列出了 MT8676 Hypervisor SDK 提供的 Yocto project 和 Android project，总共两组。请按表格所列搭配使用，
不可混搭。 
在下文中，SOS 指 auto8676p1_64_hyp 或 auto8676p1_64_hyp_sos。UOS Android 指 auto8676p1_64_bsp_vm 或
auto8676p1_64_bsp_vm_tbox。UOS T-Box 指 auto8676p1_64_uos_tbox。 
 
表 1-2. Yocto Hypervisor Project 
Yocto (SOS) Yocto (UOS T-Box) Android (UOS Android) 说明 
auto8676p1_64_hyp auto8676p1_64_uos_tbox auto8676p1_64_bsp_vm 全虚拟化。 
auto8676p1_64_hyp_sos  auto8676p1_64_uos_tbox auto8676p1_64_bsp_vm_tbox 部分虚拟化。 
 
 代码结构 
MT8676 Hypervisor 代码结构与 Yocto 单系统和 Android 单系统基本一致，只是在单系统基础上增加了一些
Hypervisor 相关的代码。单系统的代码结构请参考文档 MT8676_Yocto_System_User_Manual 和
MT8676_Android_System_User_Manual。全虚拟化架构和部分虚拟化架构共用同一份代码，SOS 和 UOS T-Box 共用
同一份 Yocto 代码。 
 
表 1-3. Hypervisor 代码 
代码库 路径 说明 
Yocto meta/meta-mediatek-mt8676-hyp 
MT8676 Yocto 虚拟化层，包含了与虚拟化相关的一些配
置文件和 bb。 
Yocto src/kernel/modules/mt8676/virt/grt Yocto 端的虚拟化驱动。 
Yocto prebuilt/hypervisor/grt_mt8676 存放谦川的 Thyp sdk 预编译文件。 
Android vendor/mediatek/kernel_modules/virt Android 端的虚拟化驱动。 
Android device/mediateksample/auto8676p1_64_bsp
_vm Android auto8676p1_64_bsp_vm 项目的配置文件。 
Android device/mediateksample/auto8676p1_64_bsp
_vm_tbox Android auto8676p1_64_bsp_vm_tbox 项目的配置文件。 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
 Thyp sdk 预编译文件 
Thyp sdk 预编译文件存放在 Yocto 代码库的prebuilt/hypervisor/grt_mt8676 目录，主要包含谦川虚拟机镜
像、虚拟机管理程序和虚拟化配置文件等。目录结构如 图 1-3 所示。auto8676p1_64_hyp 目录存放了全虚拟化架
构相关的文件，auto8676p1_64_hyp_sos 目录存放了部分虚拟化架构相关的文件，auto8676p1_64_uos_tbox 目
录存放了 UOS T-Box 的配置文件。关于每个文件的作用及其说明，请参考 表 1-4。除 gz.img 外，其余文件都是安装
到 SOS 的根文件系统。 
 
图 1-3 Thyp sdk 预编译文件目录结构 
 
 
表 1-4 Thyp sdk 预编译文件说明 
文件或目录 说明 路径 
gz.img 
谦川 nebula 虚拟机固件。SOS 的配置文件打包在
gz.img 中。 
gz_a 分区 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
文件或目录 说明 路径 
nbl_vmm 
虚拟机管理程序。对 SOS 而言，一个 UOS 就是一
个 nbl_vmm 进程。 
/usr/bin 
vm_srv_cfg.pb.txt 虚拟机服务配置文件。 /vendor/etc/hyper_android 
nbl_vm_srv 
虚拟机服务程序。读取 vm_srv_cfg_8676.pb.txt 文
件的配置，并根据配置启动 nbl_vmm 进程。 
/usr/bin 
nbl_vm_srv.service systemd 服务，用于启动 nbl_vm_srv 进程。 /usr/lib/systemd/system 
nbl_vm_pre.sh 用于在虚拟机启动之前执行一些任务。 /vendor/etc/hyper_android 
nbl_vm_srv_post.service 
systemd 服务，用于在虚拟机启动完成后执行一些
任务。 
/usr/lib/systemd/system 
nbl_vm_post_android.sh 用于 UOS Android 启动后执行一些任务。 /vendor/etc/hyper_android 
nbl_vm_post_tbox.sh 用于 UOS T-Box 启动后执行一些任务。 /vendor/etc/hyper_tbox 
nbl_vm_ctl 
虚拟机控制程序。可以启动、停止虚拟机，也可以
查询一些虚拟机的基本信息。 
/usr/bin 
uos_alps_bootloader_lk2.pb.txt 
UOS Android 的 bootloader 文件。用于配置
bootloader 相关信息。 
/vendor/etc/hyper_android 
uos_alps_pv8676.lua 
UOS Android 虚拟机的配置文件。用于配置虚拟机
的 CPU、内存、中断等。 
/vendor/etc/hyper_android 
uos_tbox_bootloader_lk2.pb.txt UOS T-Box 的 bootloader 文件。 /vendor/etc/hyper_tbox 
uos_tbox_pv8676.lua UOS T-Box 虚拟机的配置文件。 /vendor/etc/hyper_tbox 
gpu_server GPU 虚拟化 host 端处理程序。 /usr/bin 
video_server vcodec 虚拟化 host 端处理程序。 /usr/bin 
virtiofsd virtio 文件系统后端程序。 /usr/bin 
symbols 
存放 nbl_vmm、nbl_vm_srv、nbl_vm_ctl 等文件的
符号文件，用于调试。 
N/A 
 
1.3 编译与烧录 
 Build Server 
表 1-5 列出了编译 MT8676 Yocto5.0 对编译主机的要求。表 1-6 列出了编译 MT8676 Android 对编译主机的要求。 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
表 1-5. Yocto build server 要求 
项目 要求 
磁盘空间 不小于 300GB 
内存 不小于 32GB 
发行版本 Ubuntu 20.04, 22.04 等，具体参考 Supported Linux Distributions[1]。 
编译主机需要安装的工具 参考 Required Packages for the Build Host[2]。 
Git 1.8.3.1 或更高版本 
tar 1.28 或更高版本 
Python 3.8.0 或更高版本 
GNU Make 4.0 或更高版本 
 
表 1-6. Android build server 要求 
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
 
 编译指令 
对于全虚拟化架构，需要编译 Yocto（SOS） auto8676p1_64_hyp、Yocto（UOS T-Box） auto8676p1_64_uos_tbox 和
Android（UOS Android） auto8676p1_64_bsp_vm。编译指令如下。由于编译过程中会设置一些环境变量，为了避免
                                                                 
 
[1]  https://docs.yoctoproject.org/ref-manual/system-requirements.html#supported-linux-distributions  
[2] https://docs.yoctoproject.org/ref-manual/system-requirements.html#required-packages-for-the-build-host  
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
互相干扰，建议使用三个不同的终端分别编译两个 Yocto 和 Android。为了在同一份 codebase 编译两个不同的
yocto project，给 oe-init-build-env 脚本传递了一个参数，用于指定编译目录的名字。另外，
auto8676p1_64_hyp_uos_tbox 的编译目标是 mtk-core-image-auto8676-uos。 
 
SOS 的编译产物在build-sos/tmp/deploy/images/auto8676p1_64_hyp 目录下。UOS T-Box 的编译产物在
build-uos/tmp/deploy/images/auto8676p1_64_uos_tbox 目录下。Android 的编译产物在
out/target/product/auto8676p1_64_bsp_vm/merged 目录下。 
 
编译完成后，请将表 1-8 和表 1-9 列出的镜像文件，拷贝到 SOS 的编译目录。 
 
# 终端1，Yocto（SOS） auto8676p1_64_hyp 
cd path/to/yocto-codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-hyp/conf/templates/auto8676p1_64_hyp 
source meta/poky/oe-init-build-env build-sos 
bitbake mtk-core-image-auto8676 
 
# 终端2，Yocto（UOS Tbox） auto8676p1_64_uos_tbox 
cd path/to/yocto-codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-
hyp/conf/templates/auto8676p1_64_uos_tbox 
source meta/poky/oe-init-build-env build-tbox 
bitbake mtk-core-image-auto8676-uos 
 
# 终端3，Android auto8676p1_64_bsp_vm 
cd path/to/android-codebase 
python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py --run 
full_auto8676p1_64_bsp_vm-userdebug 
 
 
对于部分虚拟化架构，需要编译 Yocto（SOS） auto8676p1_64_hyp_sos、Yocto（UOS T-Box） 
auto8676p1_64_uos_tbox 和 Android（UOS Android） auto8676p1_64_bsp_vm_tbox。编译指令如下。 
 
SOS 的编译产物在build-sos/tmp/deploy/images/auto8676p1_64_hyp_sos 目录下。UOS T-Box 的编译产物在
build-uos/tmp/deploy/images/auto8676p1_64_uos_tbox 目录下。Android 的编译产物在
out/target/product/auto8676p1_64_bsp_vm_tbox/merged 目录下。 
 
编译完成后，请将表 1-8 和表 1-9 列出的镜像文件，拷贝到 SOS 的编译目录。 
# 终端1，Yocto（SOS） auto8676p1_64_hyp_sos 
cd path/to/yocto-codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-
hyp/conf/templates/auto8676p1_64_hyp_sos 
source meta/poky/oe-init-build-env build-sos 
bitbake mtk-core-image-auto8676 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
 
# 终端2，Yocto（UOS Tbox） auto8676p1_64_uos_tbox 
cd path/to/yocto-codebase 
export TEMPLATECONF=${PWD}/meta/meta-mediatek-mt8676-
hyp/conf/templates/auto8676p1_64_uos_tbox 
source meta/poky/oe-init-build-env build-tbox 
bitbake mtk-core-image-auto8676-uos 
 
# 终端3，Android auto8676p1_64_bsp_vm_tbox 
cd path/to/android-codebase 
python vendor/mediatek/proprietary/scripts/releasetools/split_build_helper.py --run 
full_auto8676p1_64_bsp_vm_tbox-userdebug 
 
 软件构成 
表 1-7 列出 SOS 的镜像文件，表 1-8 列出了 UOS Android 的镜像文件，表 1-9 列出了 UOS T-Box 的镜像文件。 
 
表 1-7. SOS 镜像文件 
文件名 分区 说明 
MT6897_Android_scatter.xml N/A 分区表，由 Yocto ptgen-v2.bb 编译出来。 
download_agent/DA_BR.bin N/A download agent，用于烧录。由 collect.bb 编译出来。 
bl2.img preloader_a 
preloader_b Yocto bootloader，由 Yocto lk2.bb 编译出来。 
modem.img modem_a modem 固件，由 Yocto modem.bb 编译出来。 
spmfw.img spmfw_a System Power Management 固件，由 collect.bb 编译出来。 
mcf_ota.img mcf_ota_a 由 Yocto collect.bb 编译出来。 
pi_img.img pi_img_a 由 Yocto collect.bb 编译出来。 
dpm.img dpm_a 由 Yocto collect.bb 编译出来。 
scp.img scp_a 
System Companion Processor 固件，由 Yocto tinysys-scp.bb 编译出
来。 
ccu.img ccu_a Camera Control Unit 固件，由 collect.bb 编译出来。 
vcp.img vcp_a vcp firmware，由 tinysys-vcp.bb 编译出来。 
sspm.img sspm_a Secure System Power Manager 固件，由 collect.bb 编译出来。 
mcupm.img mcupm_a power/performance manager 固件，由 collect.bb 编译出来。 
gpueb.img gpueb_a GPU firmware，由 tinysys-gpueb.bb 编译出来。 
apusys.img apusys_a APU firmware，由 tinysys-apusys.bb 编译出来。 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
文件名 分区 说明 
gz.img gz_a 谦川 nebula 虚拟机固件，由 nbl-vmm-hyp.bb 编译出来。 
connsys_bt.img connsys_bt_a BT 固件，由 collect.bb 编译出来。 
connsys_wifi.img connsys_wifi_a WIFI 固件，由 collect.bb 编译出来。 
connsys_gnss.img connsys_gnss_a GNSS 固件，由 gps-fw_1.0.0.bb 编译出来。 
logo.img logo_a logo，由 makelogo.bb 编译出来。 
audio_dsp.img audio_dsp_a audio DSP 固件，由 collect.bb 编译出来。 
system.ext4 system Yocto 根文件系统，由 mtk-core-image-auto8676.bb 编译出来。 
userdata.ext4 yocto-userdata Yocto /data 分区，由 mkusrdata.bbclass 编译出来。 
bl2-an.img bl2-an Android bootloader，由 lk2-an.bb 编译出来。 
yocto-boot.img yocto-boot_a 
Yocto Linux kernel，fit 格式，包含 kernel img、dtb 和 initramfs。
由 linux-mtk-extension_6.1.bb 编译出来。其中 initramfs 由 core-
image-minimal-initramfs.bb 编译出来。 
 
表 1-8. UOS Android 镜像文件 
文件名 分区 说明 
vbmeta.img vbmeta_a system 和 vendor layer 一起的 meta data，由 Android 编译出来。 
vbmeta_system.img vbmeta_system_a system layer 的 meta data，由 Android 编译出来。 
vbmeta_vendor.img vbmeta_vendor_a vendor system layer 的 meta data，由 Android 编译出来。 
boot.img boot_a Android kernel 镜像，由 Android 编译出来。 
vendor_boot.img vendor_boot_a Android ramdisk ko 镜像，由 Android 编译出来。 
init_boot.img init_boot_a Andrioid init 镜像，由 Android 编译出来。 
dtbo.img dtbo_a Android dtb overlay 镜像，由 Android 编译出来。 
tee.img tee_a ATF，由 Android 编译出来。 
super.img super Android super 镜像，由 Android 编译出来。 
userdata.img userdata Android userdata 分区，由 Android 编译出来。 
 
表 1-9. UOS T-Box 镜像文件 
文件名 分区 说明 
bl2-tbox.img bl2-tbox_a UOS T-Box bootloader，由 Yocto lk2.bb 编译出来。 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
文件名 分区 说明 
boot_uos_tbox.img boot_uos_tbox_a 
UOS T-Box Linux kernel，fit 格式，包含 kernel img 和 dtb。由 linux-
mtk-extension-uos_6.1.bb 编译出来。 
system_uos_tbox.ext4 system_uos_tbox 
UOS T-Box 根文件系统，由 Yocto mtk-core-image-auto8676-uos.bb 
编译出来。 
userdata_uos_tbox.ext4 userdata_uos_tbox UOS T-Box/data 分区，由 Yocto mkusrdata.bbclass 编译出来。 
 
 烧录软件 
烧录软件需要用到 Type-C 线和 SP_Flash_Tool 工具。如果没有 SP_Flash_Tool 工具，请访问 Online[3]网站下载。打开
网页后，搜索 SP_Flash_Tool，下载最新版本，如图 1-4 所示。下载完成后解压下载的压缩包。 
 
 
图 1-4. 下载 SP_Flash_Tool 
 
首先用 Type-C 线将平台与电脑连接起来。然后双击 SP_Flash_Tool_V6/SPFlashToolV6.exe 打开烧录工具。第一步选
择 Download-XML 文件，点击右上角的 choose 按钮，选择软件包下面的 download_agent/flash.xml 文件。第二步在
Download 按钮下方的下拉框中选择 Format All + Download。效果如图 1-5 所示。第三步，确保平台处于断电状态。
第四步，点击 Download 按钮。第五步，按住 download key（KPCOL0，SW907）不松手，平台上电，这时会自动开
始烧录，如图 1-6 所示。此时可以松开按键。 
如果有遇到错误弹窗，请先将平台断电，点击 Stop 按钮退出下载模式。确保平台掉电完毕后，再尝试烧录。  
                                                                 
 
[3]  https://online.mediatek.com/apps/tool/  
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
MT8676 Hypervisor System 
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

## PDF物理页 16

MediaTek Proprietary and Confidential. © 2025 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 16 
MT8676 Hypervisor System 
User Manual 
Confidential B 
1.4 客制化 
 调整虚拟机内存 
 
图 1-7 展示了 L+A+L 架构的内存布局。Yocto 代码库的配置文件 meta/meta-mediatek-mt8676-
hyp/conf/common/memory-size.inc 决定了每个操作系统的内存大小。变量 SOS_DRAM_SIZE 和
UOS_TBOX_DRAM_SIZE 分别决定了 SOS 和 UOS Tbox 的内存大小。UOS Android 使用剩余的所有内存，不受某个变
量的控制。在公版平台，SOS 默认 6GB，UOS TBox 默认 1GB，UOS Android 默认 9GB。为了保证 SOS 正常运行，全
虚拟化方案 SOS_DRAM_SIZE 不建议小于 6GB，部分虚拟化方案不建议小于 4GB。 
 
另外，modem、GPS 最大寻址 32bit，Wi-Fi 最大寻址 34bit。目前 modem 和 GPS 是在 SOS 申请内存，可以满足
32bit 的要求。Wi-Fi 是在 UOS Android 申请内存，为了确保 Wi-Fi 能申请到 32bit 的内存，SOS 和 UOS Tbox 的总内
存必须小于等于 14GB。关于寻址限制的更多说明，请参考对应模块的文档。 
 
# SOS Yocto memory size 
SOS_DRAM_SIZE = "0x180000000" 
 
# UOS Tbox memory size 
UOS_TBOX_DRAM_SIZE = "0x40000000" 
 
SOS UOS Android
SOS_DRAM_SIZE uos android dram size
UOS Tbox
UOS_TBOX_DRAM_SIZE
I/O register
0x0 0x4000 0000
 
图 1-7. L+A+L 内存布局 
 
 调整虚拟机 CPU 
虚拟机的 CPU 数量以及和物理 CPU 的绑定关系是由虚拟机的配置文件来决定的。虚拟机的配置文件路径请参考表 
1-4。以下面的配置为例，总共给虚拟机分配了 8 个 vCPU。数组 Pcpus 决定物理 CPU 和虚拟 CPU 的绑定关系。下
标表示 vCPU，值表示 pCPU。即 vCPU0 绑定了 pCPU3，vCPU1 绑定了 pCPU1，vCPU2 绑定了 pCPU2，vCPU3 绑定了
pCPU0，以此类推。请务必确保 CPU 数量等于 Pcpus 数组长度，如果两者不一致，会导致虚拟机无法启动。在
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
MT8676 平台，总共有三个 CPU 簇，pCPU0~pCPU3 属于同一簇，pCPU4~pCPU6 属于同一簇，pCPU7 属于第三个
簇。请不要跨 CPU 簇绑定 CPU，这样无法发挥出 CPU 的所有性能。 
 
--  cpus 
uos_config:setCpus(8) 
--************************************************************** 
 
--  physical-cpus 
Pcpus = {3, 1, 2, 0, 4, 5, 6, 7} 
for i = 1, #Pcpus do 
    uos_config:setBindcpus(Pcpus[i]) 
end 
--************************************************************** 
 
 添加共享文件夹 
如果想把 SOS 的一个文件夹共享给 UOS，可以通过 virtio 文件系统实现，以下是实现步骤。下面提到的配置文件路
径，请参考表 1-4。 
 
第一步，修改 vm_srv_cfg.pb.txt，为目标 UOS 添加 virtiofsd 后端程序。例如下方的示例代码，给 UOS T-Box 添加了
一个 virtiofsd 后端程序。shared-dir 参数用于指定共享的文件夹，socket-path 和 tag 参数后面会用到。 
 
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
 
 
第二步，修改 UOS 配置文件，添加如下代码，第一个参数是 tag，第二个参数是 socket 路径。这两个参数的值请
参考第一步。这里以 UOS T-Box 为例，所以需要修改 uos_tbox_pv8676.lua 文件。 
 
uos_config:setFs("tbox_nvdata", "/tmp/virtiofs_tbox_socket0") 
 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
第三步，断电重启整个系统，待 UOS 启动完成后，进入 UOS 的 shell。执行如下命令测试挂载。第三个参数
tbox_nvdata 是第一步设置的 tag 参数。如果挂载成功，表示文件夹共享成功。如果失败，返回检查第一步和第二
步。 
mkdir -p /tmp/test_mount 
mount -t virtiofs tbox_nvdata /tmp/test_mount 
第四步，设置开机挂载。对于 UOS Android，请修改device/mediateksample/<project>/init.project.rc 文
件。示例如下。 
on post-fs-data 
...... 
#virtio-fs sample 
    mkdir /data/vendor/share/ 
    mkdir /data/vendor/share/media/ 
    mount virtiofs media /data/vendor/share/media 
 
对于 UOS T-Box，请修改meta/meta-mediatek-mt8676-hyp/recipes-core/base-files/base-
files/auto8676p1_64_uos_tbox/fstab 文件。示例如下。 
 
tbox_nvdata                       /mnt/vendor/nvdata     virtiofs defaults  0  0 
 
1.5 调试技巧 
关于 Yocto 的调试技巧，请参考文档 MT8676_Yocto_System_User_Manual，关于 Android 的调试技巧，请参考文档
MT8676_Android_System_User_Manual。这里只介绍 Hypervisor 相关的调试技巧。 
 切换 USB 
MT8676 只有一个 USB 硬件，所以只有一个操作系统能够使用 USB。对于全虚拟化架构，USB 默认在 SOS，对于部
分虚拟化架构，USB 默认在 UOS Android。可以执行如下指令中的一条指令，将 USB 切换到指定系统。指令可以在
任何一个系统执行。如果在 UOS Android 执行，请切换到 root 用户执行。指令执行之后，需断电重启系统，设置
才会生效。 
# 切换到SOS 
sysenv_test write USB_SWITCH Y 
 
# 切换到 UOS Android 
sysenv_test write USB_SWITCH A 
 
# 切换到 UOS Tbox 
sysenv_test write USB_SWITCH T 
 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
 ADB 
USB 所在的操作系统，使用物理 adb。其他两个系统使用网络 adb。表 1-10 列出了每个系统进入 adb shell 的指
令。例如全虚拟化架构，USB 默认在 SOS，所以需要用第一行的指令。 
 
表 1-10. adb shell 指令 
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
 
 查询虚拟机状态 
在 SOS 中执行命令cat /sys/guest_os/android/pm_state 查询 UOS Android 的状态，执行命令cat 
/sys/guest_os/tbox/pm_state 查询 UOS T-Box 的状态。 
1.6 开机流程 
MT8676 的开机流程如图 1-8 所示。 
1. 当平台上电之后，Boot ROM 会加载并跳转到 SOS LK2。SOS LK2 会完成一些基本的硬件初始化，加载 kernel、
tinysys、tee、gz 等镜像，最后通过 TF-A 跳转到 nebula，开始初始化虚拟机。虚拟机在完成自身的一些初始化
之后，会启动一个名为 SOS 的任务，根据相关配置文件，启动 SOS 虚拟机。 
2. SOS 虚拟机按照 kernel、initramfs、systemd 的顺序依次完成初始化，关于这些模块初始化的详细说明，请参考
文档 MT8676_Yocto_System_User_Manual。 
systemd 初始化完成之后，会启动各种用户层服务，其中一个是虚拟机服务进程 nbl_vm_srv。nbl_vm_srv 会解
析配置文件 vm_srv_cfg.pb.txt，根据相应的配置启动 UOS 虚拟机。关于此配置文件的说明，请参考表 1-4。 
3. 对于每一个 UOS 虚拟机， nbl_vm_srv 进程会启动一个对应的虚拟机管理进程 nbl_vmm。nbl_vmm 进程会读取
虚拟机配置文件 uos_alps_pv8676.lua（或 uos_tbox_pv8676.lua），根据配置创建 bootloader、初始化后端驱
动，并序列化 CPU、内存、irq 等配置，传递给 nebula 启动 UOS。 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
4. nebula 创建好 UOS 虚拟机后，跳转到 UOS LK2，开始启动 UOS。最后，UOS 开始自己的启动流程。对于 UOS 
Android 的启动流程说明，请参考文档 MT8676_Android_System_User_Manual。对于 UOS Tbox，请参考文档
MT8676_Yocto_System_User_Manual。 
SOS 启动完成之后，服务 nbl_yocto_cpu_offline.service 会按 CPU 分配策略关闭 SOS 的 vCPU。UOS Android 启动完成
后，init.project.rc 会按 CPU 分配策略关闭 UOS Android 的 vCPU。UOS Tbox 启动完成后，会在 initramfs 阶段的
uos_earlyinit 脚本、systemd 阶段的 uos_init.service 按 CPU 分配策略关闭 UOS Tbox 的 CPU。具体分核策略请参考谦
川文档：虚拟机开机-CPU 开关优化。 
 
INTERNAL USE
4
Bootloader Boot ROM SOS LK2
nebula OS nebulaSOS
kernel
systemd
systemd service
TF-A
nbl_vm_srv
initramfs
SOS
kernel
UOS Android UOS TBox
UOS UOS
kernel
Android LK2
nbl_vmmnbl_vmm
Tbox LK2
①
②
③
④
initramfs
systemd
systemd
service
init
zygote
system server
apps
 
图 1-8. 开机流程 
 
主要的开机日志如下。 
 
(250613_13:18:11.624)Pll init start... 
(250613_13:18:18.671)[    0.000000][    T0] swapper: [name:setup&]Booting Linux on physical 
CPU 0x0000000000 [0x411fd461] 
(250613_13:18:24.312)[    5.034945][T1700001] systemd: systemd[1]: systemd 255.4^ running in 
system mode (+PAM -AUDIT -SELINUX -APPARMOR +IMA -SMACK +SECCOMP -GCRYPT -GNUTLS -OPENSSL 
+ACL +BLKID -CURL -ELFUTILS -FIDO2 -IDN2 -IDN -IPTC +KMOD -LIBCRYPTSETUP +LIBFDISK -PCRE2 -
PWQUALITY -P11KIT -QRENCODE -TPM2 -BZIP2 -LZ4 -XZ -ZLIB +ZSTD -BPF_FRAMEWORK -XKBCOMMON 
+UTMP +SYSVINIT default-hierarchy=unified) 
(250613_13:18:35.383)         Starting Nebula VM server... 
(250613_13:18:35.452)[  OK  ] Started Nebula VM server. 
(250613_13:18:35.618)[   16.320448] nbl_vm_srv[2341]: nbl_vm_srv I 06-11 21:36:53  2341  
2341 vm_controller.cc:195] [vmid:0] StartVm enter 
(250613_13:18:35.702)[   16.344367] nbl_vm_srv[2341]: nbl_vm_srv I 06-11 21:36:53  2341  
2341 vm_controller.cc:92] [vmid:0] ForkAndExec start 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
(250613_13:18:35.790)[   16.433583] nbl_vm_srv[2378]: nbl_vmm E 06-11 21:36:53  2378  2378 
main.cc:428] config file : /vendor/etc/hyper_android/uos_alps_pv8676.lua 
(250613_13:18:36.024)[   16.692737] nbl_vm_srv[2378]: nbl_vmm vmid:0 E 06-11 21:36:53  2378  
2378 guest_config.h:125] setMemsize M: 9439M 
……… 
(250613_13:18:36.336)[   17.033775] nbl_vm_srv[2378]: nbl_vmm vmid:0 I 06-11 21:36:53  2378  
2378 main.cc:551] Success to attach vhost blk 
(250613_13:18:36.336)[   17.044333] nbl_vm_srv[2378]: nbl_vmm vmid:0 I 06-11 21:36:53  2378  
2378 main.cc:571] Success to attach vhost user gpu device 
……… 
(250613_13:18:37.118)[   17.796357] nbl_vm_srv[2378]: nbl_vmm vmid:0 E 06-11 21:36:53  2378  
2378 main.cc:936] vm_ctl_svc start status 0 
 
1.7 关机流程 
本小节介绍了 SOS 和 UOS 的关机流程，以及 UOS 重启整个 SOC 的流程。 
 
 UOS 关机 
UOS 关机流程如图 1-9 所示。当 UOS 用户空间触发关机或重启后，init 进程会收到相关信号，开始停止用户层服
务、卸载文件系统等。这个过程取决于 init 进程的实现。 
init 进程处理完成之后，调用 reboot()系统调用进入内核空间。vmctl 内核模块用于处理虚拟机的关机。内核经过一
系列的调用后，最终会调用到 vmctl 前端 注册的处理函数。 
对于关机，reboot()系统调用会依次调用__arm64_sys_reboot() -> kernel_power_off() -> 
machine_power_off() -> do_kernel_power_off()，最终调用到 vmctl 的sys_poweroff()，给 SOS 发送
VMCTL_POWER_OFF 消息。 
对于重启，reboot()系统调用会依次调用__arm64_sys_reboot() -> kernel_restart() -> machine_restart() -> 
do_kernel_restart()，最终会调用到 vmctl 的sys_restart()，给 SOS 发送VMCTL_RESTART 消息。 
vmctl 后端位于 SOS 的虚拟机管理进程 nbl_vmm。当 vmctl 后端收到消息后，会转发消息给虚拟机服务进程
nbl_vm_srv。如果收到了VMCTL_POWER_OFF 消息，nbl_vm_srv 会直接关闭对应的 nbl_vmm 进程；如果收到了
VMCTL_RESTART 消息，会重启nbl_vmm 进程，再次拉起 UOS。 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
2020 Copyright © MediaTek Inc. All rights reserved.
INTERNAL USE
UOS Tbox
init(pid=1)
vmctl FE
reboot/shutdown
kernel space
reboot()
user space
①
②
SOS
5
UOS 关机或重启
UOS Android
init(pid=1)
vmctl FE
reboot/shutdown
kernel space
reboot()
user space
①
②
init(pid=1)
nbl_vm_srv.service
nbl_vm_srv
nbl_vmm
vmctl BE
nbl_vmm
vmctl BE
③
④
⑤ ⑥
kernel space
user space
 
图 1-9. UOS 关机流程 
 
以 UOS Android 重启为例，主要日志如下。 
(250613_16:08:54.186)[ 9970.951718] nbl_vm_srv[3907]: [vmid:0]console:/ $ reboot 
(250613_16:09:00.889)[ 9977.619800] nbl_vm_srv[3907]: nbl_vmm vmid:0 I 06-12 00:27:17  3907  
3953 vmctl.cc:73] Host vmm recieve VMCTL_RESTART 
(250613_16:09:00.889)[ 9977.620433] nbl_vm_srv[2334]: nbl_vm_srv I 06-12 00:27:17  2334  
3965 vm_controller.cc:584] [vmid:0] received VmState: RESTART 
(250613_16:09:00.889)[ 9977.620952] nbl_vm_srv[2334]: nbl_vm_srv I 06-12 00:27:17  2334  
2363 vm_controller.cc:259] [vmid:0] send SIGTERM to pid 3907 
(250613_16:09:17.702)[ 9994.438314] nbl_vm_srv[2334]: nbl_vm_srv I 06-12 00:27:34  2334  
2363 vm_controller.cc:280] [vmid:0] nbl vm controller stop vm finish. 
(250613_16:09:17.702)[ 9994.438558] nbl_vm_srv[2334]: nbl_vm_srv I 06-12 00:27:34  2334  
2363 vm_controller.cc:286] [vmid:0] RestartVm --- StartVm 
(250613_16:09:17.702)[ 9994.438683] nbl_vm_srv[2334]: nbl_vm_srv I 06-12 00:27:34  2334  
2363 vm_controller.cc:195] [vmid:0] StartVm enter 
(250613_16:09:17.702)[ 9994.468310] nbl_vm_srv[10533]: nbl_vmm E 06-12 00:27:34 10533 10533 
main.cc:428] config file : /vendor/etc/hyper_android/uos_alps_pv8676.lua 
 
 SOS 关机 
SOS 关机流程如图 1-10 所示。当 SOS 用户空间触发关机或重启后，init 进程会收到相关信号，开始停止用户层服
务、卸载文件系统等。SOS 的 init 进程是 systemd，关于 systemd 的关闭流程，请参考 System Manager 
Shutdown[4]。 
当 nbl_vm_srv.service 收到关闭的消息后，会检查 UOS 的电源状态，如果是开机状态，则会给 UOS 发送一个关机消
息，触发 UOS 的关机流程。关于 UOS 的关机流程说明，请参考 1.7.1 小节。nbl_vm_srv.service 会每隔 1s 检查一次
                                                                 
 
[4]  https://www.freedesktop.org/software/systemd/man/latest/bootup.html#System%20Manager%20Shutdown 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
UOS 的电源状态，如果是开机状态，会再次发送关机消息，直到 UOS 关机完成。为了避免 UOS 关机异常阻塞 SOS
关机，nbl_vm_srv.service 最多会发送 15 次关机消息，如果超过 15 次 UOS 还没有关机完成，则 nbl_vm_srv.service
会强制关闭 UOS。 
当用户空间服务关闭完成后，init 进程调用 reboot()系统调用进入内核空间。内核空间的关闭流程与 UOS 类似，不
同的是，SOS 会 smc 到 ATF，关闭或重启 soc。 
 
2020 Copyright © MediaTek Inc. All rights reserved.
INTERNAL USE
UOS Tbox
init(pid=1)
vmctl FE
reboot/shutdown
kernel space
reboot()
user space
①
②
SOS
6
SOS整机重启
UOS Android
init(pid=1)
vmctl FE
shutdown
kernel space
reboot()
user space
① ②
init(pid=1)
nbl_vm_srv.service
nbl_vm_srv
nbl_vmm
vmctl BE
nbl_vmm
vmctl BE
③
④
⑧
kernel space
user space
reboot
ATF
reboot()
⑤
⑦
⑥
 
图 1-10. SOS 关机流程 
 
SOS 关机的主要日志如下。 
(250613_13:22:24.173)reboot  
(250613_13:22:24.439)         Stopping Nebula VM server... 
(250613_13:22:24.517)[  245.148570] nbl_vm_srv[2341]: nbl_vm_srv I 06-11 21:40:41  2341  
2595 server.cc:102] nbl_vm_srv dump vm info: 
(250613_13:22:24.524)[  245.160522] nbl_vm_srv[2341]: nbl_vm_srv I 06-11 21:40:41  2341  
2595 server.cc:116] [{"vmid":"0","state":"Started"},{"vmid":"1","state":"Started"}] 
(250613_13:22:24.524)[  245.185579] nbl_stop_vm[4139]: stop vm 0 
(250613_13:22:24.605)[  245.255717] nbl_stop_vm[4193]: shutdown command sent to vm with CID 
3 
(250613_13:22:24.605)[  245.289480] nbl_stop_vm[4139]: Waiting for vm 0 to stop... (0/30) 
(250613_13:22:24.833)[  245.557440] nbl_stop_vm[4195]: shutdown command sent to vm with CID 
4 
(250613_13:22:24.913)[  245.625417] nbl_stop_vm[4140]: Waiting for vm 1 to stop... (0/30) 
………… 
(250613_13:22:31.751)[  252.448385] nbl_stop_vm[4139]: vm 0 has stopped. 
(250613_13:22:33.882)[  254.564758] nbl_stop_vm[4140]: vm 1 has stopped. 
(250613_13:22:33.882)[  254.576510] nbl_stop_vm[4138]: all vm has stopped 
(250613_13:22:33.882)[  OK  ] Stopped Nebula VM server. 
(250613_13:22:34.831)[  OK  ] Reached target System Reboot. 
 
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
MT8676 Hypervisor System 
User Manual 
Confidential B 
 reboot soc 
rebooc soc 功能用于在 UOS 重启整个系统。此功能默认关闭。修改/vendor/etc/hyper_android/vm_srv_cfg.pb.txt 文
件，将对应 UOS 的 reboot_yocto 设置为 true，可以打开此 UOS 的 reboot soc 功能。在 UOS 执行“reboot soc”命
令，即可使用此功能。如果 reboot_yocto 是 false，则只会重启 UOS。 
reboot soc 流程如图 1-11 所示。以 UOS Android 执行 reboot soc 为例，当重启的流程执行到 vmctl 前端时，vmctl 判
断 reboot 指令的参数是 soc 后，会给 vmctl 后端发送 VMCTL_REBOOT_YOCTO 消息。 
当虚拟机服务进程 nbl_vm_srv 收到 VMCTL_REBOOT_YOCTO，且 reboot_yocto 为 true 时，会执行 reboot 指令，触
发 SOS 的重启流程，相关流程说明请参考 1.7.2 小节。有点不同的是，此时只有 UOS Tbox 处于开机状态，
nbl_vm_srv.service 只会通知 UOS Tbox 关机。 
 
2020 Copyright © MediaTek Inc. All rights reserved.
INTERNAL USE
UOS Tbox
init(pid=1)
vmctl FE
reboot/shutdown
kernel space
reboot()
user space
①
②
SOS
7
UOS整机重启
UOS Android
init(pid=1)
vmctl FE
reboot soc
kernel space
reboot()
user space
⑥
init(pid=1)
nbl_vm_srv.service
nbl_vm_srv
nbl_vmm
vmctl BE
nbl_vmm
vmctl BE
⑦
⑧
kernel space
user space
reboot
ATF
①
②
③
④
⑤
reboot()
 
图 1-11. reboot soc 流程 
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
MT8676 Hypervisor System 
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
# SRC0225 MT8676_Hypervisor_T-Box_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_T-Box_User_Manual_V1.1.pdf

SHA-256：eb1ea503dfd4ee0021b8c6cd5e0001975b032d3de7b307061872cb02ef91056c

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0225.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本:  1.1 
出版日期:  2024-12-06
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
版本记录 
版本 日期 作者 描述 
1.0 2024-11-13 Yali Wu 正式版 
1.1 2024-12-06 Yali Wu 更新图 1-1. T-Box 架构 
 
  
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
1.3 常见问题/故障排除 ·············································································································································· 28 
 SIM/CALL/SMS/Telephony 驻网相关 ········································································································· 28 
 Data 相关 ···················································································································································· 28 
 网络相关 ···················································································································································· 28 
 IMS 相关 ····················································································································································· 29 
附件一 附加条款 ····························································································································································· 30 
 
 
图片目录 
图 1-1. T-Box 架构 ······································································································································································ 6 
 
表格目录 
表 1-1.缩略词 ············································································································································································ 5 
表 1-2. Modem 状态及 IMEI 接口说明 ····································································································································· 6 
表 1-3. SIM 接口说明 ································································································································································ 7 
表 1-4. Telephony 网路接口说明 ············································································································································ 10 
表 1-5. 数据接口说明 ······························································································································································ 14 
表 1-6. 电话接口说明 ······························································································································································ 20 
表 1-7. 短信接口说明 ······························································································································································ 22 
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
表 1-8. IMS 接口说明 ······························································································································································ 23 
表 1-9. Ecall control 接口说明 ················································································································································· 24 
表 1-10. AT 黑名单接口说明 ··················································································································································· 27 
表 1-11. MIPC keep alive 接口说明 ········································································································································· 27 
 
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
1 T-Box 
1.1 概述 
 简单介绍 
本文介绍 Hypervisor T-Box 架构、API 使用及注意事项。 
 
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
MT8676 Hypervisor T-Box 
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
Int ML_GetModemStat(char *stat, uint32_t statlen) 获取 modem 状态，stat 返回字串“ready”表示 modem 已正常启动成功 
Int ML_GetImei(char* imei, size_t imeiLen) 获取平台 IMEI 
int 返回值。成功时返回 0; 错误时返回 -1 
 
1.2.2.2 SIM 接口及调用时序说明 
SIM 接口除 ML_Sim_GetCardStatus，其他均需要基于 SIM present 的情况下才能正常获取到值。 
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
SIM 卡状态结构体。 主要关注 PRESENT  为卡已识
别，ABSENT 为没有识别到 SIM 卡。 
Int32_t ML_Sim_GetCardStatus(ML_SIM_CARD_STATUS_INFO_T 
*pvsSimStatus) 
获取 SIM 状态。pvsSimStatus 返回 “present” 表示 SIM 
卡在位。 
int 返回值。成功时返回 0; 错误时返回 -1 
Int ML_SIM_GetICCID(char *iccid, size_t iccidLen) 获取 SIM 卡 ICCID。ICCID（Integrated Circuit Card 
Identifier，集成电路卡识别码）是用于唯一标识每张
SIM 卡的编号。 
int 返回值。成功时返回 0; 错误时返回 -1 
Int ML_SIM_GetMsisdn(char *msisdn, size_t msisdnLen) 获取 SIM 卡 Msisdn。这里指电话号码。 
int 返回值。成功时返回 0; 错误时返回 -1 
Int ML_SIM_GetImsi(char *imsi, size_t imsilen) 获取 SIM 卡 IMSI。IMSI（International Mobile 
Subscriber Identity，国际移动用户识别码）是用于唯
一标识移动网络中的用户的编号。 
int 返回值。成功时返回 0; 错误时返回 -1 
Int ML_SIM_GetMccMnc(char *mcc, size_t mccLen, char*mnc, size_t 
mncLen) 
获取 SIM 卡 mccmnc。MCCMNC（Mobile Country 
Code and Mobile Network Code，移动国家代码和移
动网络代码）是用于唯一标识移动网络运营商的编
号。MCCMNC 由两个部分组成：MCC（移动国家代
码）和 MNC（移动网络代码）。 
int 返回值。成功时返回 0; 错误时返回 -1 
int32_t ML_Sim_GetCardFullStatus  
( ML_SIM_CARD_FULL_STATUS_INFO_T *  pvsSimStatus ) 
获取完整的 SIM 卡信息。  
返回的结构体中包含卡状态、pin 状态、SIM app 信
息等。  
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
接口/结构体 描述 
int 返回值。成功时返回 0; 错误时返回 -1 
typedef struct  
{  
  E_ML_CardState card_state;  
  E_ML_PinState  universal_pin_state;             /* applicable to USIM and 
CSIM: E_ML_PINSTATE_xxx */  
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
 
SIM 卡 详细信息结构体。  
int ML_SIM_ChangePin  ( int32_t  slotIndex,   
  const char *  oldPin,   
  const char *  newPin,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
PIN1：用于保护 SIM 卡，防止未经授权的使用。 
PIN2：用于保护特定的 SIM 卡功能，如固定拨号号
码。 
PUK：用于解锁被 PIN1 锁定的 SIM 卡。 
PUK2：用于解锁被 PIN2 锁定的功能。 
 
修改 pin 值。 
注意：需要上锁之后才能 change pin  
int 返回值 On success, 0 is returned. On error, -1 is 
returned.  
出参： errorCode;  On error, errorCode is returned。 
errorCode 可参考 ril.h 中的 RIL_Errno 枚举。  
出参： retryTimes 可尝试次数、默认为 3，pin 输入
错误时返回-1. 
int ML_SIM_ChangePin2  ( int32_t  slotIndex,   
  const char *  oldPin2,   
  const char *  newPin2,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 )    
修改 pin2 值。 
注意：需要上锁之后才能 change pin2  
int 返回值。成功时返回 0; 错误时返回 -1  
出参： errorCode; On error, errorCode is returned。 
errorCode 可参考 ril.h 中的 RIL_Errno 枚举。  
出参： retryTimes 可尝试次数、默认为 3，pin 输入
错误时返回-1. 
int ML_SIM_EnterPin  ( int32_t  slotIndex,   
  const char *  pin,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
解锁 pin。  
注意：需要上锁之后才能解锁 pin 
int 返回值。成功时返回 0; 错误时返回 -1 
出参： errorCode; On error, errorCode is returned。 
errorCode 可参考 ril.h 中的 RIL_Errno 枚举。  
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
接口/结构体 描述 
出参： retryTimes 可尝试次数、默认为 3，pin 输入
错误时返回-1. 
int ML_SIM_EnterPin2  ( int32_t  slotIndex,   
  const char *  pin2,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
解锁 pin2。  
注意：需要上锁之后才能解锁 pin2 
int 返回值。成功时返回 0; 错误时返回 -1 
出参： errorCode; On error, errorCode is returned。 
errorCode 可参考 ril.h 中的 RIL_Errno 枚举。  
出参： retryTimes 可尝试次数、默认为 3，pin2 输入
错误时返回-1. 
int ML_SIM_EnterPuk  ( int32_t  slotIndex,   
  const char *  puk,   
  const char *  pin,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
解锁 PUK。用于解锁被 PIN1 锁定的 SIM 卡。当用户
连续输入错误的 PIN1 超过一定次数后，SIM 卡会被
锁定，此时需要输入 PUK 码才能解锁并重置 PIN1。  
注意：需要上锁之后才能解锁 puk 
int 返回值。成功时返回 0; 错误时返回 -1  
出参： errorCode;  On error, errorCode is returned。 
errorCode 可参考 ril.h 中的 RIL_Errno 枚举。  
出参： retryTimes 可尝试次数、默认为 3，puk 输入
错误时返回-1. 
int ML_SIM_EnterPuk2  ( int32_t  slotIndex,   
  const char *  puk2,   
  const char *  pin2,   
  const char *  aid,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
解锁 PUK2。用于解锁被 PIN2 锁定的 SIM 卡。当用
户连续输入错误的 PIN2 超过一定次数后，SIM 卡会
被锁定，此时需要输入 PUK 码才能解锁并重置
PIN2。  
注意：需要上锁之后才能解锁 puk 
int 返回值。成功时返回 0; 错误时返回 -1  
出参： errorCode;  On error, errorCode is returned。 
errorCode 可参考 ril.h 中的 RIL_Errno 枚举。  
出参： retryTimes 可尝试次数、默认为 3，puk2 输
入错误时返回-1. 
int ML_SIM_SetFacilityLock  ( int32_t  slotIndex,   
  const char *  facility,   
  int32_t  lockState,   
  const char *  password,   
  int32_t  serviceClass,   
  const char *  appId,   
  int32_t *  errorCode,   
  int32_t *  retryTimes   
 ) 
设置 pin 锁状态。  
注意：没有上锁的时候才能设置，如果在上锁的情
况下调用本函数会返回 error。 
入参： 
facility：设备类型 
lockState：1：上锁 0：解锁 
int 返回值。成功时返回 0; 错误时返回 -1 
int ML_SIM_IccCloseLogicalChannelBySlot  ( int32_t  slotIndex,   
  int32_t  channel   
 )   ) 
关闭 IO 逻辑通道。  
int 返回值。成功时返回 0; 错误时返回 -1 
int ML_SIM_IccOpenLogicalChannelBySlot  ( int32_t  slotIndex,   
  const char *  aid,   
  int32_t  p2,   
  int32_t  channel   
打开 IO 逻辑通道。  
int 返回值。成功时返回 0; 错误时返回 -1 
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
接口/结构体 描述 
 )    
int ML_SIM_IccTransmitApduLogicalChannelBySlot  ( int32_t  slotIndex,   
  int32_t  channel,   
  int32_t  cla,   
  int32_t  instruction,   
  int32_t  p1,   
  int32_t  p2,   
  int32_t  p3,   
  const char *  data   
 ) 
发送 apdu 命令。  
入参: 
  int32_t  channel: 逻辑通道 
  int32_t  cla: APDU 命令的类字节（Class byte） 
  int32_t  instruction:  APDU 命令的指令字节
（Instruction byte）。 
  int32_t  p1,   
  int32_t  p2,   
  int32_t  p3,   
指 APDU 命令的参数。用于进一步指定命令的操作 
  const char *  data  APDU 命令的数据字段 
 
int 返回值。成功时返回 0; 错误时返回 -1 
int ML_SIM_SetCardPower  ( int32_t  CardPowerState ) 设置 SIM 卡 Power 状态，也就是 SIM 卡复位。  
入参： 
int32_t  CardPowerState 0: power off 1: power on 2: 透
传模式 
int 返回值。成功时返回 0; 错误时返回 -1 
 
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
int 返回值。成功时返回 0; 错误时返回 -1 
注意：此接口需在识卡后调用 
int32_t ML_GetOperatorCode ( 
uint8_t * op_code 
) 
获取运营商名称信息. op_code 为 1 表示 SIM 运营商是中国联通, 
为 0 表示中国移动。 
int 返回值。成功时返回 0; 错误时返回 -1 
注意：此接口需在识卡后调用 
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
接口/结构体 描述 
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
网络制式类型结构体。 
int ML_GetRadioAccessType ( 
E_ML_NW_RADIO_ACCESS_TYPE_T * access_type 
) 
获取驻上网络的制式类型。 
int 返回值。成功时返回 0; 错误时返回 -1 
注意：此接口需在识卡后调用 
int ML_GetSignalStrength ( 
int8_t * sig_level 
) 
 
获取信号强度等级。 sig_level: 0~4, 信号等级阈值参考 AOSP 
default 划分。 
int 返回值。成功时返回 0; 错误时返回 -1 
注意：此接口需在识卡后调用 
int ML_SetAirplaneMode ( 
uint8_t on_off 
) 
 
设置开关飞行模式。on_off 为 1 表示开飞行模式， on_off 为 0 表
示关飞行模式。 
int 返回值。成功时返回 0; 错误时返回 -1 
注意：此接口需在识卡后调用 
typedef void (*ml_signal_strength_cb_t)(ML_SignalStrength 
*state); 
信号强度回调函数。 
int ML_SignalStregthInit ( 
ml_signal_strength_cb_t evt_cb 
) 
注册信号强度回调。 
int 返回值。成功时返回 0; 错误时返回 -1 
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
int 返回值。成功时返回 0; 错误时返回 -1 
int ML_GetNetMode ( 
ml_nw_net_mode_e * mode 
) 
获取网络模式。 
int 返回值。成功时返回 0; 错误时返回 -1 
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
接口/结构体 描述 
int ML_GetFullSignalStrength  ( int  slot_id,   
  ML_SignalStrength *  fullMsg   
 ) 
获取所有信号强度信息。 
函数返回值为 int 类型。成功时返回 0; 错误时返回-1。 
int getAvailableNetworksWithActAsync  ( int  slot_id ) 扫描可用网络 响应函数为 
ML_InitAvailableNetworksWithActResponseCb() 
函数返回值为 int 类型，成功则返回 0; 错误则返回 -1。 
int getCellInfoListAsync  ( int  slot_id ) 请求无线电已知的所有当前小区信息。无线电必须返回所有当前
小区的列表，包括邻近小区。如果不知道特定小区的信息，则将
返回相应的未知值。响应函数是 ML_getCellInfoListResponseCb() 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int ML_getCellInfoListResponseCb  ( int32_t  slot_id,   
  ml_get_cell_info_list_response  response   
 ) 
getCellInfoListAsync 的响应函数 ML_getCellInfoListResponseCb 
int32_t getDataRegistrationState  ( int32_t  slot_id ) 请求当前数据注册状态，响应函数为
ML_getDataRegistrationStateResponseCb() 
函数返回值为 int 类型，成功则返回 0; 错误则返回-1。 
int ML_getDataRegistrationStateResponseCb  ( int32_t  
slot_id,   
  ml_get_data_registration_state_response  response   
 ) 
getDataRegistrationState 的响应函数 
getDataRegistrationStateResponseCb 
int32_t getNetworkSelectionMode  ( int32_t  slot_id,   
  ML_NetworkSelectionMode *  mode   
 ) 
查询当前网络选择模式。 
函数返回值为 int 类型，成功则返回 0; 错误则返回-1。 
int32_t getNitzTime  ( int32_t  slot_id,   
  char **  nitzTime,   
  int32_t  tz_valid   
 ) 
获取 NITZ 信息（UTC 时间和时区）。使用 asprintf(&nitzTime, 
"%02d/%02d/%02d,%02d:%02d:%02d%+03d,%d", pNitzInfo->year % 
100, pNitzInfo->month, pNitzInfo->day, pNitzInfo->hour, 
pNitzInfo->minute, pNitzInfo->second, 
pNitzInfo->time_zone_offset_minutes / 15, 
pNitzInfo->daylight_saving_offset_minutes / 60);后需要释放
nitzTime。 
函数返回值为 int 类型。成功时返回 0; 错误时返回-1。 
int getOperatorSync  ( int  slot_id,   
  char **  longName,   
  char **  shortName,   
  char **  numeric   
 ) 
请求当前操作员 ONS 或 EONS。 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int setUsageSetting  ( int  slot_id,   
  int  usageSeting   
 )   
设置 UE 使用设置，用于数据/语音中心使用。 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int getUsageSetting  ( int  slot_id,   
  int *  usageSetting   
 )   
获取以数据/语音为中心的 UE 使用设置。 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int32_t getVoiceRegistrationState  ( int32_t  slot_id ) 请求当前语音注册状态，响应函数为
ML_getVoiceRegistrationStateResponseCb() 
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
接口/结构体 描述 
函数返回值为 int 类型，成功则返回 0; 错误则返回-1。 
int ML_getVoiceRegistrationStateResponseCb  ( int32_t  
slot_id,   
  ml_get_voice_registration_state_response  response   
 ) 
getVoiceRegistrationState 响应函数 
int ML_CsNetworkInit  ( int32_t  slot_id,   
  ml_cs_network_change_cb_t  evt_cb   
 )   
初始化网络模块，并注册回调函数。 
函数返回值为 int 类型，成功则返回 0; 错误则返回-1。 
int ML_PsNetworkInit  ( int32_t  slot_id,   
  ml_ps_network_change_cb_t  evt_cb   
 ) 
初始化 ps 网络模块，并注册回调函数。 
函数返回值为 int 类型，成功则返回 0; 错误则返回-1。 
int ML_imsNetworkStateChangedInit  ( int32_t  slot_id,   
  ml_ims_network_state_changed_cb_t  evt_cb   
 ) 
指示 IMS 注册状态何时发生变化。要获取  IMS 注册状态和  IMS 
SMS 格式，被叫方需要调用 getImsRegState()。 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。指示语音
或数据网络状态何时发生变化。被叫方必须调用  getOperator()、
getVoiceRegistrationState()、getDataRegistrationState() 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
 int ML_networkStateChangedInit  ( int32_t  slot_id,   
  ml_network_state_changed_cb_t  evt_cb   
 ) 
指示语音或数据网络状态何时发生变化。被叫方必须调用  
getOperator()、getVoiceRegistrationState()、
getDataRegistrationState() 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int ML_nitzTimeReceivedInit  ( int32_t  slot_id,   
  ml_nitz_time_received_t  evt_cb   
 ) 
初始化 nitz 时间变化，并注册回调函数。 
函数返回值为 int 类型。成功时返回 0; 错误时返回-1。 
int32_t setNetworkSelectionModeAutomatic  ( int32_t  
slot_id ) 
指定必须自动选择网络。响应函数为
ML_setNetworkSelectionModeAutomaticResponseCb() 
函数返回值为 int 类型。成功时返回 0; 错误时返回-1。 
int ML_setNetworkSelectionModeAutomaticResponseCb  
( int32_t  slot_id,   
  ml_set_network_selection_mode_automatic_response  
response   
 )    
setNetworkSelectionModeAutomatic 响应函数 
int32_t setNetworkSelectionModeManual  ( int32_t  slot_id,   
  const char *  operatorNumeric,   
  ML_AccessNetwork  ran   
 ) 
手动选择指定网络。此请求必须在选择并注册新运营商之前不响
应。根据 TS 23.122，RAN 只是初始建议值。如果注册失败、之后 
RAN 不可用，或者 RAN 不在 
IRadioNetwork::setAllowedNetworkTypeBitmap 指定的网络类型
内，则调制解调器将需要选择下一个最佳 RAN 进行网络注册。
响应函数为 ML_setNetworkSelectionModeManualResponseCb() 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int ML_setNetworkSelectionModeManualResponseCb  
( int32_t  slot_id,   
  ml_set_network_selection_mode_manual_response  
setNetworkSelectionModeManual 响应函数 
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
接口/结构体 描述 
response   
 ) 
  
 
1.2.2.4 数据接口及调用时序说明 
表 1-5. 数据接口说明 
接口/结构体 描述 
typedef enum { 
    ML_DATA_CALL_TYPE_IPV4 = 0, 
    ML_DATA_CALL_TYPE_IPV6, 
    ML_DATA_CALL_TYPE_IPV4V6, 
} ml_data_call_ip_family_e; 
IP 类型枚举定义。 
typedef enum { 
    ML_APN_PDP_TYPE_IPV4 = 0, 
    ML_APN_PDP_TYPE_PPP , 
    ML_APN_PDP_TYPE_IPV6, 
    ML_APN_PDP_TYPE_IPV4V6, 
} ml_apn_pdp_type_e; 
APN PDP 类型枚举定义。 
typedef enum { 
    ML_APN_AUTH_PROTO_DEFAULT = 0, 
    ML_APN_AUTH_PROTO_NONE, 
    ML_APN_AUTH_PROTO_PAP , 
    ML_APN_AUTH_PROTO_CHAP , 
    ML_APN_AUTH_PROTO_PAP_CHAP , 
} ml_apn_auth_proto_e; 
APN 认证协议类型枚举定义。 
typedef struct { 
unsigned char profile_idx; 
ml_apn_pdp_type_e pdp_type; 
ml_apn_auth_proto_e auth_proto; 
char apn_name[ML_APN_NAME_SIZE]; 
char username[ML_APN_USERNAME_SIZE]; 
char password[ML_APN_PASSWORD_SIZE]; 
}ml_apn_info_s 
APN 信息结构体  
profile_idx: 1 – 8 (1: 公网 ID; 2-8: 私网 ID，至多支持 7
路私网 APN) 
pdp_type: IPV4/IPV6/IPV4V6, 详情参考 
ml_apn_pdp_type_e enum 
auth_proto: default/none/pap/chap/pap_chap  
apn_name: APN 名字 
typedef enum { 
    ML_DATA_CALL_ERROR_NONE = 0, 
    ML_DATA_CALL_ERROR_INVALID_PARAMS, 
} ml_data_call_error_e; 
Data 数据连接返回错误码枚举定义。 
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
Data 数据连接状态枚举定义。 
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
接口/结构体 描述 
struct ml_v4_address_status { 
    struct in_addr ip; 
    struct in_addr gateway;  
    struct in_addr pri_dns; 
    struct in_addr sec_dns; 
}; 
IPV4 地址信息结构体。 
struct ml_v6_address_status { 
    struct in6_addr ip; 
    struct in6_addr gateway; 
    struct in6_addr pri_dns; 
    struct in6_addr sec_dns; 
}; 
IPV6 地址信息结构体。 
struct ml_pkt_stats { 
    unsigned long pkts_tx; 
    unsigned long pkts_rx; 
    long long bytes_tx; 
    long long bytes_rx;  
    unsigned long pkts_dropped_tx; 
    unsigned long pkts_dropped_rx; 
}; 
数据包状态结构体。 
struct ml_v4_info { 
    char name[16];  
    ml_data_call_state_e state; 
    bool reconnect;  
    struct ml_v4_address_status addr;  
    struct ml_pkt_stats stats;  
}; 
IPV4 信息结构体  
name: APN 名字 
state: 数据连接状态 
reconnect: 重拨标志位 
addr: IPV4 地址信息 
stats: IPV4 数据包状态 
struct ml_v6_info { 
    char name[16];  
    ml_data_call_state_e state; 
    bool reconnect; 
    struct ml_v6_address_status addr; 
    struct ml_pkt_stats stats; 
}; 
IPV6 信息结构体  
name: APN 名字 
state: 数据连接状态 
reconnect: 重拨标志位 
addr: IPV6 地址信息 
stats: IPV6 数据包状态 
typedef struct { 
    char profile_idx;                        /*!< UMTS/CDMA profile ID. */ 
    ml_data_call_ip_family_e ip_family;      /*!< IP version. */ 
    struct ml_v4_info v4;                       /*!< IPv4 information */ 
    struct ml_v6_info v6;                       /*!< IPv6 information */ 
} ml_data_call_info_s; 
Data 数据连接信息结构体。 
typedef struct { 
    char profile_idx; 
    char name[16]; 
    ml_data_call_ip_family_e ip_family; 
    ml_data_call_state_e state; 
    ml_data_call_error_e err; 
    struct ml_v4_address_status v4; 
    struct ml_v6_address_status v6; 
} ml_data_call_state_s; 
Data 数据连接状态结构体。 
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
接口/结构体 描述 
typedef void (*ml_data_call_evt_cb_t)(ml_data_call_state_s *state); Data 回调函数定义。 
参数： 
    输入：ml_data_call_state_s *state 
typedef enum { 
    PDP_FAIL_NONE = 0, 
    /* an integer cause code defined in TS 24.008 
       section 6.1.3.1.3 or TS 24.301 Release 8+ Annex B. 
       If the implementation does not have access to the exact cause codes, 
       then it should return one of the following values, 
       as the UI layer needs to distinguish these 
       cases for error notification and potential retries. */ 
    PDP_FAIL_OPERATOR_BARRED = 0x08, 
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
    PDP_FAIL_MULTI_CONN_TO_SAME_PDN_NOT_ALLOWED = 0x37, 
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
Data 数据连接失败原因枚举定义。 
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
接口/结构体 描述 
    PDP_FAIL_UNKNOWN_INFO_ELEMENT = 0x63, 
    PDP_FAIL_CONDITIONAL_IE_ERROR = 0x64, 
    PDP_FAIL_MSG_AND_PROTOCOL_STATE_UNCOMPATIBLE = 0x65, 
    PDP_FAIL_PROTOCOL_ERRORS = 0x6F,             /* no retry */ 
    PDP_FAIL_APN_TYPE_CONFLICT = 0x70, 
    PDP_FAIL_INVALID_PCSCF_ADDR = 0x71, 
    PDP_FAIL_INTERNAL_CALL_PREEMPT_BY_HIGH_PRIO_APN = 0x72, 
    PDP_FAIL_EMM_ACCESS_BARRED = 0x73, 
    PDP_FAIL_EMERGENCY_IFACE_ONLY = 0x74, 
    PDP_FAIL_IFACE_MISMATCH = 0x75, 
    PDP_FAIL_COMPANION_IFACE_IN_USE = 0x76, 
    PDP_FAIL_IP_ADDRESS_MISMATCH = 0x77, 
    PDP_FAIL_IFACE_AND_POL_FAMILY_MISMATCH = 0x78, 
    PDP_FAIL_EMM_ACCESS_BARRED_INFINITE_RETRY = 0x79, 
    PDP_FAIL_AUTH_FAILURE_ON_EMERGENCY_CALL = 0x7A, 
    PDP_FAIL_LOCAL_REJECT_ACT_REQ_DUE_TO_REACH_RETRY_COUNTER 
= 0x0E0F, 
    PDP_FAIL_TCM_ESM_TIMER_TIMEOUT = 0x0F46, 
    PDP_FAIL_PAM_ATT_PDN_ACCESS_REJECT_IMS_PDN_BLOCK_TEMP = 
0x1402, 
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
接口/结构体 描述 
开机识别到卡后, mtktelephonyservice 判断
/data/vendor/telephony/apn.db 是否存在，若不存在
则根据/vendor/etc/apns_conf.xml 生成
/data/vendor/telephony/apn.db。再通过卡的
mccmnc 从 apn.db 里获取 SIM 卡的 APN，设定 APN
到 modem。 
注意： 
此接口需在识卡后调用，即 ML_Sim_GetCardStatus() 
返回 present 后。 
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
注册 data call 状态变化 callback 函数，当 data call 状
态发生变化时回调 evt_cb 函数。 
参数:  
输入： ml_data_call_evt_cb_t evt_cb 
int ML_DataCallStart ( 
int32_t profile_idx, 
ml_data_call_error_e * err ) 
建立公网/私网 PDN 连接。 
同步接口，下发建立 PDN 命令到 modem，modem 
返回后，此接口才返回。profile_idx：1, 公网; 2, 私
网(rcs 类型); 3: 私网(bip 类型); 
参数： 
输入： int32_t profile_idx 
    输出： ml_data_call_error_e * err  
int ML_DataCallStop ( 
int32_t profile_idx, 
ml_data_call_error_e * err ) 
断开公网/私网 PDN 连接。 
同步接口，下发建立 PDN 命令到 modem，modem 
返回后，此接口才返回。 
参数： 
输入： int32_t profile_idx 
输入： ml_data_call_ip_family_e ip_family  
输出： ml_data_call_error_e * err  
int ML_DataCallStart_Ext ( 
int32_t profile_idx,  
ml_data_call_error_e * err ) 
建立公网/私网 PDN 连接。 
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
接口/结构体 描述 
异步接口，下发建立 PDN 命令后直接返回，不等
modem 执行结果。建立 PDN 的状态通过
ML_DataCallInit 注册的 callback 函数回调给 APP。 
参数： 
输入： const ml_data_call_s * data_call 
输出： ml_data_call_error_e * err  
int ML_DataCallStop_Ext ( 
int32_t profile_idx,  
ml_data_call_error_e * err ) 
 
断开公网/私网 PDN 连接。 
异步接口，下发断开 PDN 命令后直接返回，不等
modem 执行结果。断开 PDN 的状态通过
ML_DataCallInit 注册的 callback 函数回调给 APP。 
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
输出： reason   
int ML_getLastDataCallReason ( 
ML_DataCallFailCause * reason ) 
 
获取上一次 PDN 建立失败的 failcause。 
参数： 
    输出： reason   
Int ML_DataCallInfoGet( 
char profile_idx, 
ml_data_call_ip_family_e ip_family, 
ml_data_call_info_s *info, 
ml_data_call_error_e *err 
) 
根据 profile_idx, ip_family 获取 data call 信息。 
参数: 
输入： char profile_idx 
输入：ml_data_call_ip_family_e ip_family 
输出： ml_data_call_info_s *info 
输出： ml_data_call_error_e *err 
int ML_SetDataDefaultSim  ( int32_t  slotId ) 双卡情况下，切换数据主卡。 
切换数据主卡前，比如从 slot0 切到 slot1，需先断
掉 slot0 上左右的 PDN 连接，调用
ML_SetDataDefaultSim(1),  再建立 slot1 上的 PDN 数
据连接。 
参数: 
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
接口/结构体 描述 
输入： int32_t  slotId 
int ML_GetDataDefaultSim () 双卡情况下，获取数据主卡 slot。返回值是获取到
的主卡 slot 值。 
  
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
Int32_t ML_VcallInit(ML_VCALL_MSGCB_T cb_func) 注册电话回调函数。 
来电时触发回调函数，来电信息通过回调函数返回。 
参数： 
输出： ML_VCALL_MSGCB_T cb_func; 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
Int ML_VcallStart(const char *PhoneNumber) 拨出电话。 
参数： 
输入： const char *PhoneNumber; 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
Int ML_VcallAnswer(void) 接听电话。 
只 有 来 电 状 态 时 才 能 接 听 电 话 ， 其 他 状 态 无 法 接 听 ， 会return 
error。 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
Int ML_VcallEnd (void) 挂断电话。  
只 有 通 话 状 态 时 才 能 挂 断 电 话 ， 其 他 状 态 无 法 挂 断 ， 会return 
error。 
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
接口/结构体 描述 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int32_t ML_VcallCancel  ( void   ) 取消电话回调函数 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int32_t ML_VcallCliStart  ( const char *  PhoneNumber,   
  int32_t  cli   
 )   
播出电话，并设置对端是否显示。  
参数：  
输入： const char *PhoneNumber;  
              int32_t  cli  0：默认 1： 禁止显示 2： 允许显示  
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int32_t ML_VcallControl  ( int32_t  controlType,   
  int32_t  call_id   
 )   
挂起和恢复电话。  
参数：  
    输入： int32_t  controlType  0：挂起电话 1：恢复电话  
                   int32_t  call_id    
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
void ML_SetAutoAnswerMode  ( bool  onoff ) 设置自动接听。  
参数：  
    输入： bool  onoff  
int32_t ML_VcallDtmfStart  ( const char *  Number ) 菜单导航拨号开始 
参数：  
    输入： const char *   Number 拨号号码 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int32_t ML_VcallDtmfStop  ( void   ) 菜单导航拨号结束 
注意，此 API 需要搭配 VcallDtmfStart 使用，Start 之后按 Stop 结束 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int32_t ML_VcallGetCallWaiting  ( int32_t  serviceClass,   
  bool *  enable,   
  int32_t *  serviceClassReturn   
 ) 
查询呼叫等待状态。  
参数：  
1：语音（Voice） 
2：数据（Data，指所有承载服务） 
8：短消息服务（SMS） 
16：数据电路同步（Data Circuit Sync） 
32：数据电路异步（Data Circuit Async） 
64：专用分组接入（Dedicated Packet Access） 
128：专用 PAD 接入（Dedicated PAD Access） 
    输入： int32_t  serviceClass  指定服务类别 
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
接口/结构体 描述 
     输出： bool *  enable   
                   int32_t *  serviceClassReturn 
int32_t ML_VcallSetCallWaiting  ( bool  enable,   
  int32_t  serviceClass   
 )   
设置呼叫等待状态。  
参数：  
    输入： int32_t  serviceClass  指定服务类别 
                   bool *  enable  
int32_t ML_VcallStopCallId  ( int32_t  call_id )   挂断指定 id 电话。  
参数：  
    输入： int32_t call_id  
 
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
短信格式枚举定义 
typedef struct { 
    E_ML_SMS_FORMAT_T       format; 
    char                    PhoneNum[ML_SMS_MAX_ADDR_LENGTH];  
    int32_t                   SmsDataLen; 
    char                    SmsData[ML_SMS_MAX_MT_MSG_LENGTH]; 
} ML_SMS_INFO_T; 
短信信息结构体 
typedef void (*ML_SMS_RXMSGCB_T) ( 
    ML_SMS_INFO_T       *pvsMsg 
); 
短信回调函数 
Int ML_SmsInit(ML_SMS_RXMSGCB_T cb_func) 注册短信回调函数 
接收短信时触发回调函数，短信信息通过回调函数返
回。 
参数： 
输出： ML_SMS_RXMSGCB_T cb_func; 
Int32_t ML_Sms_Sent(const ML_SMS_INFO_T *pvsSms) 发送短信. 
异步接口，发送短信请求发送后会异步等待 modem 返
回响应信息，不会卡住线程。 
参数： 
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
接口/结构体 描述 
输入： const ML_SMS_INFO_T *pvsSms; 
int32_t ML_SmsInitWithSlot  ( int32_t  slot_id,   
  ML_SMS_RXMSGCB_T  cb_func   
 ) 
初始化短信模块，并注册槽位 id 和回调函数。 
函数返回值为 int 类型，成功则返回 0，失败则返回-1。 
int32_t ML_SmsInitNoDecoder  ( int32_t  slot_id,   
  ML_SMS_IND_T  cb_func   
 ) 
收到新短信时显示，默认关闭，若要开启此功能请打
开：meta/meta-mediatek-
mtxxxxx/conf/machine/autoxxxx.conf 然后修改 
MTK_SMS_CODEC_SUPPORT = "no" => 
MTK_SMS_CODEC_SUPPORT = "yes"。 
函数返回值为 int 类型，成功则返回 0; 错误则返回-1。 
int sendSmsNoEncoderAsync  ( int  slot_id,   
  char *  smscPdu,   
  char *  pdu   
 )   
发送短信。根据返回的错误，如果发送短信失败，呼叫
者决定重新发送。RadioError:SMS_SEND_FAIL_RETRY 表
示重试（即错误原因是 332）而 
RadioError:GENERIC_FAILURE 表示不重试（即错误原因是 
500）默认为禁用。启用此功能，请打开：meta/meta-
mediatek-mtxxxxx/conf/machine/autoxxxx.conf 然后修改 
MTK_SMS_CODEC_SUPPORT = "no" => 
MTK_SMS_CODEC_SUPPORT = "yes"。 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int ML_sendSmsNoEncoderResponseCb  ( int32_t  slot_id,   
  ml_send_sms_no_encoder_async_response  response   
 ) 
sendSmsNoEncoderAsync 响应函数 
 
1.2.2.7 IMS 接口及调用时序说明 
表 1-8. IMS 接口说明 
接口/结构体 描述 
Int ML_EnableIms(uint8_t on_off) 开启/关闭 IMS 功能 
传入参数： on_off 为 1 表示开启 IMS 功能。 
On_off 为 0，表示关闭 IMS 功能。 
Int ML_GetImsRegState(int8_t *reg_state ) 获取 IMS 注册状态 
传出参数 reg_state 值为 1，表示 IMS 注册上，reg_state 值为 0 则表示
IMS 没有注册上。 
int ML_EnableVolte  ( uint8_t  on_off ) 为 volte 启用 ims。 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
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
接口/结构体 描述 
int ML_EnableVonr  ( uint8_t  on_off ) 为 vonr 启用 ims，如果需要禁用 volte 和 vonr，请使用 
ML_EnableIms(0)。 
此 API 仅支持 slot0。 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int32_t setVoNrEnabled  ( int32_t  slot_id,   
  bool  enable   
 )   
设置语音降噪启用状态。 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
int32_t isVoNrEnabled  ( int32_t  slot_id,   
  bool *  enable   
 )   
查询当前 Voice NR 启用状态。 
函数返回值为 int 类型。成功时返回 0; 错误时返回 -1。 
 
1.2.2.8 Ecall 接口及调用时序说明 
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
设置 test number 及 reconfig number 时传入结构体参数定义。 
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
typedef enum{ 
    ML_DOMAIN_AUTO = 0,      /* Automatic mode - 
LTE(IMS), WG(CS), 1x(C2K) */ 
    ML_DOMAIN_CS_ONLY = 1,   /* CS domain only - 
WG(CS) */ 
Ecall 通话的网络制式结构体。 
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
接口/结构体 描述 
    ML_DOMAIN_3GPP_ONLY = 2, /* 3GPP only - 
LTE(IMS), WG(CS) */ 
    ML_DOMAIN_3GPP2 = 3,     /* 3GPP2 only - 1x(C2K)) 
*/ 
    ML_DOMAIN_IMS_1xCS = 4,  /* IMS and 1x CS only - 
LTE(IMS), 1x(C2K) */ 
    ML_DOMAIN_CS_1x = 5,     /* WG CS and 1x CS only 
- WG(CS), 1x(C2K) */ 
    ML_DOMAIN_IMS_ONLY = 6,  /* only IMS call 
allowed */ 
}ml_ecall_domain; 
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
Ecall 优先级参数结构体。 data1>data2>data3>data4。传入参数应为 1 2 
3 4，含义分别为:  
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
    E_ML_ECALL_DISCONNECTED = 12, 
    E_ML_ECALL_IMS_ACTIVE = 13, 
    E_ML_ECALL_IMS_DISCONNECTED = 14, 
    E_ML_ECALL_ABNORMAL_HANGUP=15, 
    E_ML_ECALL_IMS_MSD_ACK = 20, 
    E_ML_ECALL_IMS_UPDATE_MSD = 21, 
    E_ML_ECALL_IMS_IN_BAND_TRANSFER = 22, 
    E_ML_ECALL_IMS_MSD_NACK = 23, 
    E_ML_ECALL_IMS_SRVCC = 24, 
Ecall 上报状态的消息类型枚举定义。 
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
接口/结构体 描述 
    E_ML_ECALL_ONLY_DEREGISTRATION = 31, 
    E_ML_ECALL_MAY_DEREGISTER = 32, 
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
Ecall 上报状态的消息结构体。 
typedef void (*ML_ECALL_MSGCB_T)( 
    ML_ECALL_IND_T       *pvsMsg 
); 
Ecall 上报状态消息的回调函数。 
int32_t ML_EcallIndicationInit( 
ML_ECALL_MSGCB_T cb_func); 
注册 Ecall 状态变化 callback 函数，当 Ecall 状态发生变化时回调
cb_func 函数。 
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
 
1.2.2.9 休眠唤醒 Modem 相关接口及调用时序说明 
表 1-10. AT 黑名单接口说明 
接口/结构体 描述 
Int ML_SendAT(const char* atCmd, char* finalRsp, uint32_t 
resp_len, int64_t timout_ms); 
Int ML_SetUnsolResponseFilter(ML_UnsolResponseFilter 
filter) 
进入 IPO 前，开启 AT URC 黑名单过滤功能： 
1. 调用 ML_SendAT 函数下发 AT 命令：AT+EURCFLT=1 
2. 调用 ML_SetUnsolResponseFilter(0)  
退出 IPO 后，关闭 AT URC 黑名单过滤功能： 
1. 调用 ML_SendAT 函数下发 AT 命令：AT+EURCFLT=0 
2. 调用 ML_SetUnsolResponseFilter(0xFF)  
 
表 1-11. MIPC keep alive 接口说明 
接口/结构体 描述 
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
通过发送数据包来保持互联网 PDN/PDU 会话处于连接模
式，而不唤醒 AP 处理器。 
流程： 
1. AP 调用 ML_StartKeepalive。回调 keepaliveStatus 状态
为 pending，表示等待 AP 发送第一个 UL packet。 
2. 等 modem 收到 AP 发送的第一个 UL packet 后，回调
keepaliveStatus 状态为 active，表示 MD 能发送 keep-
alive 封包了。 
3. 若出现异常，当 modem 最终收不到网络 keep-alive 响
应信息后，回调 keepaliveStatus 为 inactive。 
 
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
apn.db 路径: /data/vendor/telephony/apn.db 
 
 网络相关 
网络建立成功的检查： 
1） 网络接口 up 并且 IP 地址存在，透过 ifconfig 命令确认。 
2） 网络 IP rule & IP route & DNS 设置，透过ip rule/ip route/dumpsys netd/dumpsys dnsresolver 命令确
认。 
 
网络连通性的检查： 
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
手动 ping 某 IP 或某网址是否能 ping 通。 
 
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

## PDF物理页 30

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved. Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited.  
 30 
MT8676 Hypervisor T-Box 
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
# SRC0226 MT8676_Hypervisor_Touch_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Hypervisor/Chinese Version/MT8676_Hypervisor_Touch_User_Manual_V1.1.pdf

SHA-256：318e6af558f566e235d27c798023e812c620c39ae92aae395d4dee5c79e110d2

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0226.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
版本号:  1.1 
出版日期:  2024-11-22
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
版本记录 
版本 日期 作者 描述 
1.0 2024-11-04 Pavel.Xu 正式版 
1.1 2024-11-22 Pavel.Xu 修改 1.1 概述章中的 Hypervisor 描述 
 
 
  
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
目录 
版本记录 ··········································································································································································· 2 
目录 ··················································································································································································· 3 
1 Touch ········································································································································································· 4 
1.1 概述·········································································································································································· 4 
1.2 Touch Driver Porting ················································································································································· 4 
 Porting Source Code ······································································································································ 4 
 调试 Touch ···················································································································································· 5 
1.3 Touch 直通配置 ······················································································································································· 6 
1.4 Touch 虚拟化配置 ··················································································································································· 6 
 Touch 虚拟化传输 ········································································································································ 6 
 Touch 虚拟化 Code 配置 ······························································································································ 7 
1.5 虚拟化 Touch 常见问题 ·········································································································································· 8 
1.6 虚拟化 Touch 与 Panel 绑定 ··································································································································· 9 
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
MT8676 Hypervisor Touch 
User Manual 
Confidential B 
1 Touch 
1.1 概述 
源 Touch driver 的移植一般按照厂商提供的规格进行调试即可，其主要关注的是 I2C 和 GPIO 的配置。对于接
SerDes 的 panel，需关注 SerDes 透传配置。若涉及 Hypervisor 系统，则需要在源 driver 基础上通过虚拟化方式实现
Touch 功能 MT8676 主要有两类移植方案，即 Touch 虚拟化方案及 Touch 直通方案，以下做详细介绍。 
 
1.2 Touch Driver Porting  
 Porting Source Code  
从联发科技或第三方厂商拿到 Touch Vendor source code 后，一般需如下步骤，确保 Touch driver 本身可以正常工
作： 
1. 拿到 source code 时，可能存在 kernel 版本升级情况，这时需先移植到对应版本，确保可以编译成功。主要更
改文件 Touch driver file、deconfig、 DTS、ko_table，若具体平台需要配置其他文件，请咨询系统工程师帮助。 
2. 依据原理图，确认好对应 Touch 所使用的 interrupt/reset pin 的 GPIO，将所使用的 GPIO 号对应配置到 DTS 文
件中。 
3. 依据 Touch driver 中 compatible 字符，将其 对应写到 DTS Touch 节点中。 
 
参考 DTS 配置如下：  
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
其中， 
• i2c 0: Touch 挂载的节点位置 
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
• clock-frequency = <100000>;   i2c clk 大小，一般设置为 100k 到 400k 
• compatible = "ilitek,touch";     Touch 匹配字符 
• interrupts = <9 0x0>;  Touch 中断 GPIO   
• ilitek,reset-gpio = <&pio 60 0x0>;  Touch reset GPIO   
 
 调试 Touch 
常用调试命令：  
1. 显示 Touch 轨迹线：  
settings put system pointer_location 1 
settings put system show_touches 1 
 
2. 查看 log： 
echo 1 > /proc/mtprintk 
 
3. 查看 GPIO 引脚状态： 
find -name  soc.pinctrl 
cd /proc/mtk_gpio 
cat soc.pinctrl 
 
4. 查看 ko 是否正常加载： 
Lsmod |grep touch_name 
 
在将 Touch source code 移植到平台并可以编译成功后，如平台启动后，Touch 未生效，一般需要注意如下点： 
1. Touch 驱动 probe 流程 是否有跑完，一般驱动无法跑完有如下几种类型错误 
– DTS 未匹配，此问题需检查 DTS 中是否有 enable 此 Touch 节点，compatible 字符是否匹配 
– I2C 返回 -6，此错误表明未能识别 Touch 设备，需检查硬件线路是否连接正常， 是否供电正常， 如检查无
误后需要量测 I2C 波形进一步理清 
– I2C 返回 -110，需检查 I2C 部分是否已正常工作 
2. 概率性 Touch 不生效，一般 Touch 的供电电压有具体的限制，可以在 Touch driver probe 时，打印电压值来理清
问题 
3. Touch 位置存在偏差，需根据 display size 进行适配 Touch  
4. Touch 模块存在漏电问题，判断 Touch 在 suspend 时候是否有主动断电，及拉低对应 GPIO 
5. 检查 interrupt 和 reset pin 上电时序， 特定的 Touch driver 对两者的时序有具体要求，需按规格配置 
6. 配置 SerDes，查询 SerDes 手册，联发科技的公版现已可按如下方式支持 6 panel Touch 
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
 
 
参考 SerDes 配置如下，需参考 96789 及 96752 手册对应配置： 
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
 
1.3 Touch 直通配置 
Touch 直通配置，即将 Touch driver 分别按需求在 Yocto 和 Android 端配置，此项依赖 GPIO、I2C、EINT 虚拟化已完
成，在底层依赖虚拟化完成后，Touch driver 可以不用顾虑虚拟化部分，重复在单系统配置 Touch 的步骤配置即
可。 
1.4 Touch 虚拟化配置 
 Touch 虚拟化传输  
为 Touch 安全性，有将 Touch 放置在 Yocto 端，这种情况就需要 Touch 虚拟化来完成， 公版 Touch 虚拟化流程概图
如下所示：  
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
 
 
1. Yocto 作为 host 端，Touch driver 放在 Yocto 端，在 Yocto 端注册生成 Touch input device 节点“mtk-tpd-yocto” 
2. Hypervisor SDK 启动 services 来轮询监控“mtk-tpd-yocto” 是否有 event，获取“mtk-tpd-yocto” event，并将
event 通过 virtio-input 传输给 Android 端 
3. Android 端将传输来的 Touch event 上报给上层 framework 处理 
 
 Touch 虚拟化 Code 配置 
在 Yocto 端 Touch driver 已配置完成的情况下，需添加如下配置设定 Touch 虚拟化： 
1． Enable Touch 虚拟化功能 
– 更改文件路径：  
*\src\hypervisor\grt_mt8676\thyp-sdk\vmm\nbl_vmm\BUILD.bazel 
 
– 更改位置：  
cc_binary( 
    name = "nbl_vmm_mix", 
    srcs = [ 
        "main.cc", 
    ], 
    deps = [ 
      ":input", 
] 
 
2． 依据 Yocto 端的 Touch 节点信息，配置需要转发的 Touch 节点 
– 更改文件路径：  
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
*\src\hypervisor\grt_mt8676\thyp-sdk\products\mt8676-mix\guest-
configs\uos_alps_pv8676.lua 
 
– 更改位置：  
--  input 
uos_config:setInput("/dev/input/event2") 
 
3． 配置虚拟化 Touch 的 raw touch size  
– 更改文件路径：  
*\src\hypervisor\grt_mt8676\thyp-sdk\products\mt8676-mix\guest-
configs\uos_alps_pv8676.lua 
 
– 更改位置：  
--  display 
--[[ 
void setDisplayParam(int id, int x, int y,int has_touch, int type) 
type: VIRTIO_INPUT_MOUSE:1; VIRTIO_INPUT_SINGLE_TOUCH:2; VIRTIO_INPUT_MULTI_TOUCH:3 
--]] 
uos_config:setDisplayParam(0,720,800,1,2) 
 
4． 需要注意：  
– 目前 Touch 虚拟化最多可以支持 4 个虚拟节点 
– 目前 Touch 虚拟化传输仅支持 Type A 协议 
 
1.5 虚拟化 Touch 常见问题 
1. Touch 虚拟化端未生效 
在 Yocto 和 Android 端分别输入getevent -l , 触摸屏幕，如： 
– Yocto 端无报点数据产生， 需检查源 Touch driver 配置 
– Android 端无报点数据产生，检查 Touch 虚拟化是否有 enable、是否有设置了对应的 Touch 节点名字 
 
2. 报点位置与 display 存在偏差  
在 Android 端输入如下命令，会显示出 Touch 的轨迹线，看是否有偏差及偏差规律。 
settings put system pointer_location 1 
settings put system show_touches 1 
 
在 Android 端输入getevent -I, 查看 Touch raw_size 是否和 display size 对应，如不对应，需调整 NBL 中的
display_size 信息。 
 
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
3. 有多个需要虚拟化的 Touch 时，Touch raw_size 应用到错误的数据 
需要注意在配置 uos_alps_pv8676.lua 时，display_size 的配置顺序与 Touch driver 加载的顺序一致。 
 
1.6 虚拟化 Touch 与 Panel 绑定 
如下图，input 模块通过节点的 location 信息将 Touch 节点与 panel 进行绑定，当有其他节点生成在 Touch 节点前
时，会出现 location num 变化导致绑定失效的问题，需通过 ko_table 保证如下事项，如后续有新加载驱动，并此驱
动有生成节点，则此新驱动需放置在 Touch 节点后，避免绑定异常。 
 
 
 
 
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

