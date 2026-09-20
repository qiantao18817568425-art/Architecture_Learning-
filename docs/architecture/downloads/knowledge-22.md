# SRC0298 MT8676_Yocto_T-Box_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_T-Box_User_Manual_V1.0.pdf

SHA-256：0bcc7a720a9d7977288ea975eecb6c0e2e07a4a9ff3a4d80111cb35ac08f35b6

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0298.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
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
Version History 
Version Date Author Description 
1.0 2024-08-12 Liuyutian Liu Official release 
 
  
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
Table of Contents 
Version History ·································································································································································· 2 
Table of Contents ······························································································································································· 3 
List of Figures ····································································································································································· 3 
List of Tables ······································································································································································ 3 
1 T-Box ·········································································································································································· 4 
1.1 Overview ·································································································································································· 4 
 Brief Introduction ·········································································································································· 4 
 T-Box Abbreviations ······································································································································ 4 
1.2 Architecture/Process Overview ································································································································ 5 
 T-Box Architecture ········································································································································· 5 
 T-Box API Usage ············································································································································· 5 
1.3 Frequently asked question/Troubleshoot ·············································································································· 16 
 SIM/CALL/SMS/Telephony Network Tips ···································································································· 16 
 Data Tips ····················································································································································· 16 
 Network Tips ··············································································································································· 16 
 IMS Tips ······················································································································································· 17 
Exhibit 1 Terms and Conditions ········································································································································ 18 
 
 
List of Figures 
Figure 1-1. Yocto T-Box architecture ·········································································································································· 5 
 
List of Tables 
Table 1-1. Abbreviations ····························································································································································· 4 
Table 1-2. Modem state and IMEI interface description ············································································································ 5 
Table 1-3. SIM interface description ·········································································································································· 6 
Table 1-4. Telephony NW interface description ························································································································· 7 
Table 1-5. Data interface description ········································································································································· 8 
Table 1-6. Call module interface description ···························································································································· 10 
Table 1-7. Call interface description ········································································································································· 11 
Table 1-8. IMS interface description ········································································································································ 12 
Table 1-9. eCall control interface description ··························································································································· 12 
Table 1-10. AT blacklist interface description ··························································································································· 15 
Table 1-11. MIPC Keep alive interface description ··················································································································· 15 
 
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
1 T-Box 
1.1 Overview 
 Brief Introduction 
This section introduces the Yocto T-Box architecture, API usage and precautions. 
 
 T-Box Abbreviations 
Table 1-1. Abbreviations 
Abbreviation Explanation 
API Application Programming Interface 
APN Access Point Name 
T-Box Telematics-BOX 
 
 
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
1.2 Architecture/Process Overview 
 T-Box Architecture 
 
Figure 1-1. Yocto T-Box architecture 
 
 T-Box API Usage 
1.2.2.1 Modem State/IMEI Interface and Call Sequence Description 
All other T-Box APIs require modem ready to work properly except ML_GetModemStat. 
 
Table 1-2. Modem state and IMEI interface description 
Interface/Struct Description 
Int ML_GetModemStat(char *stat, uint32_t 
statlen) 
Get modem state, stat will return “ready” if modem has boot up 
success. 
Int ML_GetImei(char* imei, size_t imeiLen) Get IMEI of device. 
On success, 0 is returned. On error, -1 is returned.  
 
1.2.2.2 SIM Interface and Call Sequence Description 
All other SIM APIs require SIM present to work properly except ML_GetCardStatus. 
 
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
Table 1-3. SIM interface description 
Interface/Struct Description 
typedef enum 
{ 
    E_ML_SIM_CARD_STATE_UNKNOWN                     = 
0xB01,    /**< Card state unknown. */ 
    E_ML_SIM_CARD_STATE_ABSENT                      = 0xB02,    /**< 
Card is absent. */ 
    E_ML_SIM_CARD_STATE_PRESENT                     = 0xB03,    /**< 
Card is present. */ 
    E_ML_SIM_CARD_STATE_ERROR_UNKNOWN               = 
0xB04,    /**< Unknown error state. */ 
    E_ML_SIM_CARD_STATE_ERROR_POWER_DOWN            = 
0xB05,    /**< Power down. */ 
    E_ML_SIM_CARD_STATE_ERROR_POLL_ERROR            = 
0xB06,    /**< Poll error. */ 
    E_ML_SIM_CARD_STATE_ERROR_NO_ATR_RECEIVED       = 
0xB07,    /**<  Failed to receive an answer to reset.  */ 
    E_ML_SIM_CARD_STATE_ERROR_VOLT_MISMATCH         = 
0xB08,    /**< Voltage mismatch. */ 
    E_ML_SIM_CARD_STATE_ERROR_PARITY_ERROR          = 
0xB09,    /**< Parity error. */ 
    E_ML_SIM_CARD_STATE_ERROR_SIM_TECHNICAL_PROBLEMS= 
0xB0A,    /**< Card returned technical problems. */ 
}E_ML_SIM_CARD_STATE_TYPE_T;  /**< Card state. */ 
SIM card state struct. 
Int32_t ML_Sim_GetCardStatus(ML_SIM_CARD_STATUS_INFO_T 
*pvsSimStatus) 
Get SIM state. The value of pvsSimStatus will 
return “present” when SIM card is present. 
Function return value is int type. On success, 0 is 
returned. On error, -1 is returned. 
Int ML_SIM_GetICCID(char *iccid, size_t iccidLen) Get ICCID of SIM card. 
Function return value is int type. On success, 0 is 
returned. On error, -1 is returned. 
Int ML_SIM_GetMsisdn(char *msisdn, size_t msisdnLen) Get MSISDN of SIM card. 
Function return value is int type. On success, 0 is 
returned. On error, -1 is returned. 
Int ML_SIM_GetImsi(char *imsi, size_t imsilen) Get IMSI of SIM card. 
Function return value is int type. On success, 0 is 
returned. On error, -1 is returned. 
Int ML_SIM_GetMccMnc(char *mcc, size_t mccLen, char*mnc, 
size_t mncLen) 
Get MCCMNC of SIM card. 
Function return value is int type. On success, 0 is 
returned. On error, -1 is returned. 
  
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
1.2.2.3 Telephony NW Interface and Call Sequence Description 
Table 1-4. Telephony NW interface description 
Interface/Struct Description 
typedef enum 
{ 
    E_ML_NW_PS_UNKNOWN          = 0x00, 
    E_ML_NW_PS_ATTACHED         = 0x01, 
    E_ML_NW_PS_DETACHED         = 0x02, 
}E_ML_NW_PS_REG_STATE_TYPE_T; 
Struct of PS registration state. 
typedef enum 
{ 
    E_ML_NW_CS_UNKNOWN          = 0x00, 
    E_ML_NW_CS_ATTACHED         = 0x01, 
    E_ML_NW_CS_DETACHED         = 0x02, 
}E_ML_NW_CS_REG_STATE_TYPE_T; 
Struct of CS registration state. 
int ML_GetNetState( 
E_ML_NW_PS_REG_STATE_TYPE_T * ps,  
E_ML_NW_CS_REG_STATE_TYPE_T * cs  
) 
Get CS/PS registration state. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
Notice: This interface should be used after SIM present. 
int32_t ML_GetOperatorCode ( 
uint8_t * op_code 
) 
Get operator name. Value of op_code is “1” when sim 
operator is CU. Value of op_code is “0” when SIM operator is 
CMCC. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
Notice: This interface should be used after SIM present. 
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
Struct of radio access type. 
int ML_GetRadioAccessType ( 
E_ML_NW_RADIO_ACCESS_TYPE_T * access_type 
) 
Get radio access type of network registered. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
Notice: This interface should be used after SIM present. 
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
Interface/Struct Description 
int ML_GetSignalStrength ( 
int8_t * sig_level 
) 
 
Get signal strength level. Sig_level: 0~4. For signal level 
thresholds, refer to AOSP default classification. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
Notice: This interface should be used after SIM present. 
int ML_SetAirplaneMode ( 
uint8_t on_off 
) 
 
Set airplane mode. Input value “on_off” will be set to 1 if 
airplane on. Input value “on_off” will be set to 0 if airplane off. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
Notice: This interface should be used after SIM present. 
typedef void 
(*ml_signal_strength_cb_t)(ML_SignalStrength 
*state); 
Signal strength call back function. 
int ML_SignalStregthInit ( 
ml_signal_strength_cb_t evt_cb 
) 
Init signal strength call back function. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
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
Struct of network mode. 
int ML_SetNetMode ( 
ml_nw_net_mode_e mode 
) 
Set network mode. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
int ML_GetNetMode ( 
ml_nw_net_mode_e * mode 
) 
Get network mode. 
Function return value is int type. On success, 0 is returned. On 
error, -1 is returned. 
 
1.2.2.4 Data Interface and Call Sequence Description 
Table 1-5. Data interface description 
Interface/Struct Description 
typedef struct { 
unsigned char profile_idx; 
ml_apn_pdp_type_e pdp_type; 
Struct of APN info  
profile_idx: 1 – 8 (1: Public profile ID; 2-8: Private profile ID, support 
up to 7 private APNs) 
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
Interface/Struct Description 
ml_apn_auth_proto_e auth_proto; 
char apn_name[ML_APN_NAME_SIZE]; 
char username[ML_APN_USERNAME_SIZE]; 
char password[ML_APN_PASSWORD_SIZE]; 
}ml_apn_info_s 
pdp_type: IPV4/IPV6/IPV4V6; for details, refer to 
ml_apn_pdp_type_e enum 
auth_proto: default/none/pap/chap/pap_chap  
apn_name: APN name 
int ML_APN_Get ( 
unsigned char profile_idx, 
ml_apn_info_s * apn  
) 
Get APN info from input value “profile_idx”. 
Parameters: 
in: unsigned char profile_idx  
out: ml_apn_info_s *apn 
APN initial flow:   
After the card is recognized at startup, mtktelephonyservice will 
determine whether /data/vendor/telephony/apn.db exists. If not, it 
generates /data/vendor/telephony/apn.db according to 
/vendor/etc/apns_conf.xml. Then it obtains the APN of the SIM card 
from apn.db through the card’s mccmnc and sets the APN to the 
modem. 
Notice: 
    This interface needs to be called after the card is recognized, that 
is, after ML_Sim_GetCardStatus() returns present. 
int ML_APN_Set ( 
const ml_apn_info_s * apn 
) 
Set APN to modem and apn 
database(/data/vendor/telephony/apn.db) 
Parameters: 
in: const ml_apn_info_s * apn 
Notice: 
    This interface needs to be called after the card is recognized  
int ML_DataCallInit ( 
ml_data_call_evt_cb_t evt_cb 
) 
Register the data call status change callback function, and call back 
the evt_cb function when the data call status changes. 
Parameters: 
 in: ml_data_call_evt_cb_t evt_cb 
int ML_DataCallStart ( 
const ml_data_call_s * data_call,  
ml_data_call_error_e * err ) 
Establish public/private PDN connection. 
This is synchronous interface. It sends PDN establishment command 
to modem, and this interface returns after modem returns. 
Parameters: 
    in: const ml_data_call_s * data_call 
    out: ml_data_call_error_e * err  
int ML_DataCallStop ( 
char profile_idx,  
ml_data_call_ip_family_e ip_family,  
ml_data_call_error_e * err ) 
 
Disconnect the public/private PDN connection. 
This is synchronous interface. It sends the PDN establishment 
command to the modem, and this interface will return only after the 
modem returns. 
Parameters: 
    in: char profile_idx 
    in: ml_data_call_ip_family_e ip_family  
    out: ml_data_call_error_e * err  
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
Interface/Struct Description 
int ML_DataCallStart_Ext ( 
const ml_data_call_s * data_call,  
ml_data_call_error_e * err ) 
Establish public/private PDN connection. 
This asynchronous interface, returns directly after issuing the PDN 
establishment command, without waiting for the modem execution 
result. The status of establishing PDN is called back to the APP 
through the callback function registered by ML_DataCallInit. 
Parameters: 
    in: const ml_data_call_s * data_call 
    out: ml_data_call_error_e * err  
int ML_DataCallStop_Ext ( 
char profile_idx,  
ml_data_call_ip_family_e ip_family,  
ml_data_call_error_e * err ) 
 
Disconnect public/private PDN connection 
Asynchronous interface, returns directly after issuing the disconnect 
PDN command, without waiting for the modem execution result. The 
disconnect PDN status is called back to the APP through the callback 
function registered by ML_DataCallInit. 
Parameters: 
    in: char profile_idx 
    in: ml_data_call_ip_family_e ip_family  
    out: ml_data_call_error_e * err  
int ML_getDataCallReason ( 
int32_t profile_idx,  
ML_DataCallFailCause * reason ) 
 
When PDN establishment fails, get failcause. 
Parameters: 
    in: profile_idx 
    in/out: reason   
Int ML_DataCallInfoGet( 
char profile_idx, 
ml_data_call_ip_family_e ip_family, 
ml_data_call_info_s *info, 
ml_data_call_error_e *err 
) 
Get data call information according to profile_idx and ip_family. 
Parameters: 
    in: char profile_idx 
    in: ml_data_call_ip_family_e ip_family 
    out: ml_data_call_info_s *info 
  out: ml_data_call_error_e *err 
  
1.2.2.5 Call Interface and Call Sequence Description 
All call module interfaces need to be called based on network registration. 
Table 1-6. Call module interface description 
Interface/Struct Description 
typedef struct { 
    int32_t                       CallId; 
    char                        PhoneNum[32]; 
    E_ML_VCALL_STATE_TYPE_T     State; 
    int32_t             call_end_reason; 
} ML_VCALL_INFO_T; 
Struct of call message information. 
CallId: Current call index; 
PhoneNum[32]: The opponent's phone number; 
State: Call state; 
call_end_reason: The reason of call end; 
typedef void (*ML_VCALL_MSGCB_T) ( 
    ML_VCALL_INFO_T       *pvsMsg); 
Call state callback function. 
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
Interface/Struct Description 
Int32_t 
ML_VcallInit(ML_VCALL_MSGCB_T 
cb_func) 
Register the call state callback function. 
The callback function is triggered when a call comes in, and the call 
information is returned through the callback function. 
Parameters: 
    out: ML_VCALL_MSGCB_T cb_func; 
Int ML_VcallStart(const char 
*PhoneNumber) 
Dial a call. 
Parameters: 
    in: const char *PhoneNumber; 
Int ML_VcallAnswer(void) Answer a call. 
Int ML_VcallEnd (void) Hang up a call. 
 
1.2.2.6 SMS Interface and Call Sequence Description  
The SMS interfaces must be called based on the network registration. 
Table 1-7. Call interface description 
Interface/Struct Description 
typedef enum { 
    E_ML_SMS_FORMAT_GSM_7BIT        = 0, 
    E_ML_SMS_FORMAT_BINARY_DATA     = 1, 
    E_ML_SMS_FORMAT_UCS2            = 2, 
    E_ML_SMS_FORMAT_IRA             = 3, 
   }E_ML_SMS_FORMAT_T; 
Enum of SMS format type. 
typedef struct { 
    E_ML_SMS_FORMAT_T       format; 
    char                    PhoneNum[ML_SMS_MAX_ADDR_LENGTH];  
    int32_t                   SmsDataLen; 
    char                    SmsData[ML_SMS_MAX_MT_MSG_LENGTH]; 
} ML_SMS_INFO_T; 
Struct of SMS information. 
typedef void (*ML_SMS_RXMSGCB_T) ( 
    ML_SMS_INFO_T       *pvsMsg 
); 
SMS callback function. 
Int ML_SmsInit(ML_SMS_RXMSGCB_T cb_func) Register SMS callback function. 
The callback function is triggered when receiving 
SMS, and the SMS information is returned through 
the callback function. 
Parameters: 
    out: ML_SMS_RXMSGCB_T cb_func; 
Int32_t ML_Sms_Sent(const ML_SMS_INFO_T *pvsSms) Send SMS. 
This is an asynchronous interface. After sending SMS 
request, it will asynchronously wait for md to return 
response, and will not block the thread. 
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
Interface/Struct Description 
Parameters: 
    in: const ML_SMS_INFO_T *pvsSms; 
 
 
1.2.2.7 IMS Interface and Call Sequence Description 
Table 1-8. IMS interface description 
Interface/Struct Description 
Int ML_EnableIms(uint8_t on_off) Enable/disable the IMS registration. 
Input parameter: On_off is 1, which means the IMS function is enabled. 
On_off is 0, which means the IMS function is disabled. 
Int ML_GetImsRegState(int8_t 
*reg_state ) 
Get the IMS registration status. 
Output parameter: Reg_state value is 1, which means IMS is registered. 
Reg_state value is 0, which means IMS is not registered. 
 
1.2.2.8 Ecall Interface and Call Sequence Description 
The following APIs are planned to be added in MT8676, based on the ECALL-related RIL Request in the ecall overall 
sequence in the Ecall Overview document.  
Table 1-9. eCall control interface description 
Interface/Struct Description 
typedef struct { 
    int32_t call_id; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
}ml_ecall_set_msd; 
Struct of MSD information. 
typedef struct { 
    int32_t arg_num; 
    int32_t type; 
    char address[128]; 
}ml_ecall_set_num; 
Struct of test number/reconfiguration number information. 
typedef enum { 
    ML_EMER_CAT_MANUAL_ECALL = 1, 
    ML_EMER_CAT_AUTO_ECALL   = 2, 
}ml_ecall_category; 
Enum of ecall category. 
typedef enum { 
    ML_ECALL_TEST        = 1, 
    ML_ECALL_EMERGENCY   = 2, 
    ML_ECALL_RECONFIG    = 3, 
Enum of ecall variant. 
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
Interface/Struct Description 
}ml_ecall_variant; 
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
Enum of radio domain when make ecall. 
typedef struct{ 
    ml_ecall_category   ecall_cat; 
    ml_ecall_variant   ecall_variant; 
    char address[20]; 
    uint32_t length; 
    unsigned char 
msd_data[ML_ECALL_MSD_MAX_LENGTH]; 
    ml_ecall_domain domain; 
}ml_ecall_req_msg; 
Struct of input parameter when requesting to make an ecall. 
typedef struct{ 
    int32_t data1; 
    int32_t data2; 
    int32_t data3; 
    int32_t data4; 
}ml_ecall_pri; 
Ecall priority parameter structure. data1>data2>data3>data4. 
The input parameters should be 1 2 3 4, which means:  
1 - eCall URI set by the customer; 
2 - eCall URI saved by USIM; 
3 - eCall number set by the customer; 
4 - eCall number saved by USIM; 
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
Enum of ecall indication type. 
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
Interface/Struct Description 
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
Struct of ecall indication. 
typedef void (*ML_ECALL_MSGCB_T)( 
    ML_ECALL_IND_T       *pvsMsg 
); 
Callback function for reporting ecall indication. 
int32_t ML_EcallIndicationInit( 
ML_ECALL_MSGCB_T cb_func); 
Register the ecall indication callback function, and call back the 
cb_func function when the ecall status changes. 
Parameters: 
In: ML_ECALL_MSGCB_T cb_func 
int32_t ML_ResetIvs(void); Reset ecall state in modem and reconnect audio channel. 
int32_t ML_SetMSD(ml_ecall_set_msd* msd); Set MSD. 
Parameters: 
    In: ml_ecall_set_msd* msd 
int32_t ML_SetTestNumber( 
  ml_ecall_set_num* test_num); 
Set test number or URI. 
Parameters: 
    In: ml_ecall_set_num* test_num 
int32_t ML_SetReconfNumber( 
  ml_ecall_set_num* reconf_num); 
Set reconfig number or URI. 
Parameters: 
    In: ml_ecall_set_num* test_num 
int32_t ML_MakeFastEcall( 
  ml_ecall_req_msg* msg); 
Trigger an ecall and transmit MSD data in one command. 
Parameters: 
    In: ml_ecall_req_msg* msg 
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
Interface/Struct Description 
int32_t ML_SetEmsdpri(ml_ecall_pri* pri); Set priority of test/reconfiguration eCall number/URI 
The default priority is “1>3>2>4”. 
Parameters: 
    In: ml_ecall_pri* pri 
 
1.2.2.9 Suspend of Modem Interface and Call Sequence Description 
Table 1-10. AT blacklist interface description 
Interface/Struct Description 
Int ML_SendAT(const char* atCmd, char* finalRsp, uint32_t resp_len, 
int64_t timout_ms); 
Int ML_SetUnsolResponseFilter(ML_UnsolResponseFilter filter) 
Before entering IPO, enable the AT URC 
blacklist filtering function: 
1. Call ML_SendAT function to send AT 
command: AT+EURCFLT=1. 
2. Call ML_SetUnsolResponseFilter(0) 
After exiting IPO, disable the AT URC blacklist 
filtering function: 
1. Call ML_SendAT function to send AT 
command: AT+EURCFLT=0 
2. Call ML_SetUnsolResponseFilter(0xFF) 
 
Table 1-11. MIPC Keep alive interface description 
Interface/Struct Description 
ML interface: Plan to encapsulate ML layer API based on MIPC 
interface. 
struct keepaliveRequest { 
keepaliveType type; 
uint32_t sourcePort; 
uint32_t desinationPort; 
uint32_t cid; 
char sourceAddress[68]; 
char desinationAddress[68]; 
} 
struct keepaliveStatus{ 
ACTIVE = 0, 
INACTIVE, 
PENDING 
} 
ML_StartKeepalive(keepaliveRequest * keepalive) 
ML_StopKeepalive(int cid) 
ML_InitKeepaliveStatusCb(ml_keepalive_evt_cb_t evt_cb 
) 
To keep Internet PDN/PDU session in connected mode 
by sending a dummy packet without waking up AP 
processor. 
Flow： 
 
1. AP calls ML_StartKeepalive. The callback 
keepaliveStatus status is pending, indicating that it 
is waiting for the AP to send the first UL packet. 
2. After the MD receives the first UL packet sent by 
the AP , the callback keepaliveStatus status is 
active, indicating that the MD can send keep-alive 
packets. 
3. If an exception occurs, the callback 
keepaliveStatus status is inactive when the 
modem finally fails to receive the network keep-
alive response. 
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
Interface/Struct Description 
MIPC interface: 
MIPC_DATA_KEEPALIVE_REQ/CNF 
MIPC_DATA_KEEPALIVE_STATUS_IND  
 
1.3 Frequently asked question/Troubleshoot 
 SIM/CALL/SMS/Telephony Network Tips 
1. How to turn off/on a specific network type, refer to “[FAQ17447] [NW] Turn off a specific network type”. 
2. SIM test failure pre-debug: 
(1) The initial value of IMEI is empty and needs to be burned before it can be obtained. 
(2) If SIM recognition is abnormal, capture the test scene mtklog including the boot process to assist in further 
analysis. 
3. Network test failure pre-debug:  
(1) Confirm that the platform has burned RF/IMEI, the antenna is correctly installed, and the SIM card is correctly 
inserted and has no outstanding fees. 
(2) If (1) still fails to attach network after confirmation, capture the test scene mtklog including the boot process to 
assist in further analysis. 
4. CALL/SMS test failure pre-debug: 
(1) Use the following command to confirm whether the platform has successfully attached network. If not, solve the 
network problem first. 
adb shell /usr/bin/mlclient_test --gtest_filter=MLClientTest.ML_GetNetState 
(2) If step (1) has been successfully attached to the network. Capture the test scene mtklog to assist in further 
analysis. 
 
 Data Tips 
Modification of APN configuration file, refer to “[FAQ21414] MTK apns-conf.xml configuration guide”. 
The configuration file used by T-Box is named apns-conf.xml, code path: src/telephonyware/3.1/libvendor-
ril/apn/resource/apns-conf.xml, install path in the platform /system/etc/tele/apns-
conf-.xml. 
 
If you modify /system/etc/tele/apns-conf.xml directly, you need to delete apn.db and restart to take effect. 
 
 Network Tips 
1. Checking for successful network establishment: 
(1) The network interface is up and the IP address exists, confirmed by the ifconfig command. 
(2) Network IP rule & IP route & DNS settings, confirmed by the IP rule/IP route/dumpsys netd/dumpsys 
dnsresolver commands. 
2. Checking for network connectivity: 
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
Manually ping a certain IP or URL to see if it can be pinged. 
 
 IMS Tips 
1. How to enable or disable IMS automatically when the device is powered on by default? 
(1) The current system automatically enables IMS when the device is powered on by default. 
(2) You can change whether IMS is supported by changing MTK_VOLTE_SUPPORT to yes or no in ProjectConfig.mk. 
 
 
 
 
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
# SRC0299 MT8676_Yocto_Thermal_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_Thermal_User_Manual_V1.0.pdf

SHA-256：41ce1e67fadb6fc896b854d387d590c8efa88766b2db3fc74ff491040319b2ad

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0299.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto Thermal 
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
MT8676 Yocto Thermal 
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
MT8676 Yocto Thermal 
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
1.3 Configuration/Customization Guideline ··················································································································· 5 
 Thermal Policy ··············································································································································· 5 
1.3.1.1 Thermal Policy Commands·············································································································· 5 
1.3.1.2 Thermal Policy Format ···················································································································· 5 
1.4 Frequently Asked Questions/Troubleshooting ········································································································· 7 
Exhibit 1 Terms and Conditions ·········································································································································· 8 
 
 
List of Figures 
Figure 1-1. Thermal 2.0 software architecture··························································································································· 4 
 
List of Tables 
Table 1-1. Available thermal policies on device (under/data/thermal/) ···················································································· 5 
 
  
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
MT8676 Yocto Thermal 
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
dissipation control can be achieved by adding various thermal solutions such as TIM, copper foil, tube, etc to efficiently 
spread the heat to the whole product and to the air or contact surface. Power consumption control can be achieved by 
reducing/limiting power consumption based on temperature which is the focus of this document. 
 
1.2 Architecture/Process Overview 
 
Figure 1-1. Thermal 2.0 software architecture 
 
thermal_core is a native Linux application. Its main function is to parse a thermal policy of the .conf format. 
 
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
MT8676 Yocto Thermal 
User Manual 
Confidential B 
1.3 Configuration/Customization Guideline 
 Thermal Policy 
Policy path in codebase is src/apps/spm-base/thermal-conf/mt8676, supporting encrypted format. 
 
Table 1-1. Available thermal policies on device (under/data/thermal/) 
Thermal policy Permanent? Encrypted? Description 
thermal.conf Yes Yes Default thermal policy 
disable_thermal.conf Yes Yes Disable thermal throttling and thermal protection 
disable_thermal_temp.conf No Yes Same as the above, except it needs to re-apply after 
device rebooted. 
disable_throttling.conf No Yes Disable thermal throttling 
disable_skin_control.conf No Yes 
Disable MTK skin control close loop (always keep 
Target  Tj to 95℃) 
Thermal_policy_XX.conf 
(XX = 00~19 except 00, 02, 
08) 
On demand Yes Can add your own policy setting and switch via power 
HAL 
thermal_policy_08.conf No Yes Thermal policy for benchmark 
 
1.3.1.1 Thermal Policy Commands 
Apply a thermal policy: 
adb shell "thermal-int apply [policy_name]" 
E.g., adb shell "thermal-int apply disable_throttling.conf" 
 
1.3.1.2 Thermal Policy Format 
• Permanent policy 
 
 
• Linux thermal framework (LTF) 
–  “policy”: Support power_allocator and step_wise. 
 
 
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
MT8676 Yocto Thermal 
User Manual 
Confidential B 
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
 
 
• GPU frequency table mapping 
 
 
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
MT8676 Yocto Thermal 
User Manual 
Confidential B 
1.4 Frequently Asked Questions/Troubleshooting 
Turn on more thermal_core log: 
adb shell "thermal-int debug_log 1" 
 
How to decrypt or encrypt thermal configuration files: 
https://online.mediatek.com/apps/faq/detail?list=HW&faqid=FAQ27718 
 
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
MT8676 Yocto Thermal 
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
# SRC0300 MT8676_Yocto_UART_User_Manual_V1.1.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_UART_User_Manual_V1.1.pdf

SHA-256：60ac08ad314307c155401eec4309ab6c6a32b234e924a263dea8a6be85e25704

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0300.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2024-2025 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.1 
Release date:  2025-03-12
MT8676 Yocto UART 
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
MT8676 Yocto UART 
User Manual 
Confidential B 
Version History 
Version Date Author Description 
1.0 2024-08-12 Liliang Chen Official release 
1.1 2025-03-12 Liliang Chen Modified Section 1.3.4 Add GPIO Setting 
 
  
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
MT8676 Yocto UART 
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
MT8676 Yocto UART 
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
MT8676 Yocto UART 
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
MT8676 Yocto UART 
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
MT8676 Yocto UART 
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
• Configure GPIO and set it to on by default: 
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
MT8676 Yocto UART 
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
 
4. Use the following command to let UART1 send a string "123” 
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
MT8676 Yocto UART 
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
MT8676 Yocto UART 
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
# SRC0301 MT8676_Yocto_USB_User_Manual_V1.0.pdf

来源：8676/MT8676软件资料/User Manual/Yocto/English Version/MT8676_Yocto_USB_User_Manual_V1.0.pdf

SHA-256：45d28fd50a95d0b496cf73f3624d39b7da89d1b1c885ac6ab5f841208ecd4cfb

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0301.html)

## PDF物理页 1

MediaTek Proprietary and Confidential. © 2023 MediaTek Inc. All rights reserved.  
Unauthorized reproduction or disclosure of this document, in whole or in part, is strictly prohibited. 
Use of this document and any information contained therein is subject to the terms and conditions set forth in Exhibit 1. This document 
is subject to change without notice. 
Confidential B 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Version:  1.0 
Release date:  2024-08-12
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
 ·· Don't Forget to Send USB Engineer These Suitable Value of These Parameter Registers Tied in Eye-pattern 
Report·····································································································································································  17 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
MT8676 Yocto USB 
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
# SRC0302 Aurisys_exe_V1.2620.01.rar

来源：8676/MT8676软件资料/User Manual/其他/Aurisys_exe_V1.2620.01.rar

SHA-256：5a70e60b5e6d45d783c8ccbdd540841df9ef68bb59bdecd6829d18b69b1e1d02

范围：清点/提取，未作为本次核心结论直接引用

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0302.html)

## 压缩包目录

- TOOL\ADSP_FTRACE\adspTrace_v1.2.zip（9493811 字节）
- TOOL\ADSP_FTRACE\adspTrace_v2.4.zip（1359443 字节）
- TOOL\ADSP_FTRACE\adspTrace_v2.5.zip（1382195 字节）
- TOOL\GDB_DEBUG\GDB Tool for ADSP Guide.pptx（2604993 字节）
- TOOL\GDB_DEBUG\hifi_debug_v5p1.tar.xz（31066008 字节）
- TOOL\GDB_DEBUG\hifi_debug_v5p2.tar.xz（31517880 字节）
- TOOL\GDB_DEBUG\hifi_debug_v5p3.tar.xz（40381612 字节）
- TOOL\GDB_DEBUG\ReleaseNote.xlsx（23790 字节）
- README（2197 字节）
- ReleaseNote_Aurisys_W1.2620.01.xls（65536 字节）
- API\ReleaseNote_AurisysAPI.xlsx（24105 字节）
- API\V1.0.0.rar（11155 字节）
- API\V1.2.2.rar（1855074 字节）
- API\V1.3.0.rar（467188 字节）
- API\V1.4.0.rar（468996 字节）
- API\V1.5.0.rar（469695 字节）
- API\V1.6.0.rar（471362 字节）
- API\V1.7.0.rar（574745 字节）
- API\V1.8.0.rar（3749448 字节）
- API\V1.9.0.rar（487190 字节）
- CONFIG\HiFi3\Linux\RG-2017.6-linux\v1\RG-2017.6-linux.rar（12924206 字节）
- CONFIG\HiFi3\Linux\RI-2018.0-linux\v1\RI-2018.0-linux.rar（10405316 字节）
- CONFIG\HiFi3\Linux\RI-2018.0-linux\v2\hifi3_prod_v2_linux_redist.tgz（28599734 字节）
- CONFIG\HiFi3\Linux\RI-2018.0-linux\v2\patch\libhal.a（829124 字节）
- CONFIG\HiFi3\Linux\RI-2018.0-linux\v2\patch\mt6779-params（13617 字节）
- CONFIG\HiFi3\Linux\RI-2018.0-linux\v2\patch\mt6785-params（13617 字节）
- CONFIG\HiFi3\Linux\RI-2018.0-linux\v2\patch\mt6873-params（13617 字节）
- CONFIG\HiFi3\Linux\RI-2018.0-linux\v2\patch\mt6885-params（13617 字节）
- CONFIG\HiFi3\Linux\RI-2018.0-linux\v2\patch\mt6893-params（13617 字节）
- CONFIG\HiFi3\Linux\RI-2019.1-linux\v1\RI-2019.1-linux.rar（13179474 字节）
- CONFIG\HiFi3\Linux\RI-2019.1-linux\v2\hifi3_prod_v5_RI_2019_1_linux_redist.tgz（30600744 字节）
- CONFIG\HiFi3\Linux\RI-2019.1-linux\v2\patch\libhal.a（811396 字节）
- CONFIG\HiFi3\Linux\RI-2019.1-linux\v2\patch\mt6879-params（13686 字节）
- CONFIG\HiFi3\Linux\RI-2019.1-linux\v2\patch\mt6895-params（13686 字节）
- CONFIG\HiFi3\Linux\RI-2019.1-linux\v2\patch\mt6983-params（13686 字节）
- CONFIG\HiFi3\Linux\RI-2021.8-linux\v1\hifi3_prod_v5_RI_2021_8_linux.tgz（34678705 字节）
- CONFIG\HiFi3\Linux\RI-2021.8-linux\v1\patch\libhal.a（901826 字节）
- CONFIG\HiFi3\Linux\RI-2021.8-linux\v1\patch\mt6886-params（14552 字节）
- CONFIG\HiFi3\Linux\RI-2021.8-linux\v2\hifi3_prod_v6_1_linux.tgz（34735738 字节）
- CONFIG\HiFi3\Linux\RI-2021.8-linux\v2\patch\libhal.a（888358 字节）
- CONFIG\HiFi3\Linux\RI-2021.8-linux\v2\patch\mt6897-params（14553 字节）
- CONFIG\HiFi3\Linux\RI-2021.8-linux\v2\patch\mt6899-params（15102 字节）
- CONFIG\HiFi3\Windows\RG-2017.6-win32\v1\hifi3_prod_v2_win32_redist.tgz（27579065 字节）
- CONFIG\HiFi3\Windows\RI-2018.0-win32\v1\hifi3_prod_v2_win32.tgz（29946862 字节）
- CONFIG\HiFi3\Windows\RI-2019.1-win32\v1\hifi3_prod_v3_win32.tgz（31927286 字节）
- CONFIG\HiFi3\Windows\RI-2019.1-win32\v2\hifi3_prod_v5_RI_2019_1_win32_redist.tgz（31991402 字节）
- CONFIG\HiFi3\Windows\RI-2021.8-win32\v1\hifi3_prod_v5_RI_2021_8_win32.tgz（35939120 字节）
- CONFIG\HiFi3\Windows\RI-2021.8-win32\v2\hifi3_prod_v6_1_win32.tgz（36038025 字节）
- CONFIG\HiFi5\Linux\RI-2021.8-linux\v1\hifi5_prod_v1_RI_2021_8_linux.tgz（73636516 字节）
- CONFIG\HiFi5\Linux\RI-2021.8-linux\v1\patch\libhal.a（902894 字节）
- CONFIG\HiFi5\Linux\RI-2021.8-linux\v1\patch\mt6985-params（14583 字节）
- CONFIG\HiFi5\Linux\RI-2023.11-linux\v1\HiFi5_MPU_lock_2023_11_linux.tgz（73750548 字节）
- CONFIG\HiFi5\Linux\RI-2023.11-linux\v1\HiFi5_NNE_2023_11_linux.tgz（74614021 字节）
- CONFIG\HiFi5\Linux\RI-2023.11-linux\v1\patch_MPU_lock\libhal.a（884080 字节）
- CONFIG\HiFi5\Linux\RI-2023.11-linux\v1\patch_MPU_lock\mt6989_a-params（15260 字节）
- CONFIG\HiFi5\Linux\RI-2023.11-linux\v1\patch_MPU_lock\mt6991_a-params（15827 字节）
- CONFIG\HiFi5\Linux\RI-2023.11-linux\v1\patch_NNE\libhal.a（889778 字节）
- CONFIG\HiFi5\Linux\RI-2023.11-linux\v1\patch_NNE\mt6989_b-params（15529 字节）
- CONFIG\HiFi5\Linux\RI-2023.11-linux\v1\patch_NNE\mt6991_b-params（16111 字节）
- CONFIG\HiFi5\Windows\RI-2021.8-win32\v1\hifi5_prod_v1_RI_2021_8_win32.tgz（76400349 字节）
- CONFIG\HiFi5\Windows\RI-2023.11-win32\v1\HiFi5_MPU_lock_2023_11_win32.tgz（76852081 字节）
- CONFIG\HiFi5\Windows\RI-2023.11-win32\v1\HiFi5_NNE_2023_11_win32.tgz（77711853 字节）
- CONFIG\Readme.xlsx（26890 字节）
- CONFIG\RV55\Porting_lib_verifier_to_PDK_patches.zip（21822 字节）
- DOC\ADSP_Debugging_Guideline.docx（5006682 字节）
- DOC\adsp_lib_guideline\Audio_DSP_SWIP_Build_Cpp_lib.pptx（384634 字节）
- DOC\adsp_lib_guideline\Audio_DSP_SWIP_Build_lib_w_IDE.pptx（751487 字节）
- DOC\adsp_lib_guideline\democpp.rar（9010 字节）
- DOC\ADSP_Profiling_Guideline.docx（1851804 字节）
- DOC\Audio DSP - HiFi3 Debug Tools_V1.1.0.pptx（6379846 字节）
- DOC\AudioDSP_Capability.docx（642831 字节）
- DOC\AudioDSP_Development_Tutorial.docx（3520781 字节）
- DOC\Aurisys_Introduction_V1.9.0.pptx（1502772 字节）
- DOC\Aurisys_Tuning_Guide_V1.9.0.pptx（1153711 字节）
- DOC\Lib_Verifier_User_Guide_V1.9.0.pptx（2665037 字节）
- DOC\mtk_nne_framework_introduction.pptx（2075103 字节）
- DOC\X20\Aurisys_Capability_X20.docx（264682 字节）
- DOC\X20\Brief_FAQ_X20_OpenDSPv1.1.pptx（271582 字节）
- DOC\X20\CS6797-XXX-UMD-V1.0EN_Aurisys_Development_Tutorial.docx（1334061 字节）
- DOC\X30\CS6799-XXX-UMD-V1.0EN_Aurisys_Development_Tutorial.docx（2353417 字节）
- IDE\CortexM4\GnuArmEclipseIDE_1229.pptx（5847380 字节）
- IDE\CortexM4\GNUARMEclipse_1229.docx（3003017 字节）


---
# SRC0303 GDB Tool for ADSP Guide.pptx

来源：TOOL\GDB_DEBUG\GDB Tool for ADSP Guide.pptx

SHA-256：001cf630cbfcc6e741840bd4ce330df262838fc81d75569ecf0f93d16594530b

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0303.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1


GDB  T ool for ADSP Guide

## 幻灯片 2

Agenda
Environment Setting
User Guide
[Options] SYS_ADSP_DUMP Memory Layout
Trouble Shooting

## 幻灯片 3

Agenda
Environment Setting
User Guide
[Options] SYS_ADSP_DUMP Memory Layout
Trouble Shooting

## 幻灯片 4

Environment Setting
Requirement: 
You  “ MUST ”  install Python 3 on Linux server,  otherwise the python script would be fail.
You  “ MUST ”  get the  XtensaTool  which download from cadence.
You  “ MUST ”  get the license key for using  XtensaTool  
You “ MUST ” copy  TOOL/GDB_DEBUG/ hifi_debug_v X p X .tar.xz  to your Linux Server from  Aurisys  package


## 幻灯片 5

Download  XtensaTools  from IDE

## 幻灯片 6

Set License Key
Please export the License Server Address before using the tool
export XTENSAD_LICENSE_FILE=‘<port>@<server>'


## 幻灯片 7

Tar  hifi_debug_vXpX.tar.xz  on server
Decompress the Tool to  linux  server
tar  Jxvf   hifi_debug_tool_v X p X .tar.xz



     !!!  copy  XtensaTool  which download from cadence !!!

## 幻灯片 8

Auto setup by tool_setup.sh
./tool_setup.sh
Show tools support information
./tool_setup.sh RI-2021.8
Ex: mt6985 is RI-2021.8, tool setup to RI-2021.8
Create soft link as previous folder structure
Fast-switch different  xtensatools  version by the script




## 幻灯片 9

Folder Structure (after tool_setup.sh)



    Tool script for  adsp  debug
     Hwcfg  copy from  aurisys  package
     XtensaTool  from  cadance
Soft link to  XtensaTools  path
Soft link to  hwcfg  path

## 幻灯片 10

Copy  params  files to  XtensaTools / config




Copy   params  files to  related version  of  XtensaTools / config
Copy   params  files to  related version  of  XtensaTools / config
“Auto copy after hifi_debug_ v5p3 ”

## 幻灯片 11

Agenda
Environment Setting
User Guide
[Options] SYS_ADSP_DUMP Memory Layout
Trouble Shooting

## 幻灯片 12

Simple usage
cd  hifi_debug / adsp_debug_tool
Put the correspond  hifi X _ X .elf  and SYS_ADSP_DUMP
./debug_adsp.sh ${platform} ${ elf_path }
Ex
./debug_adsp.sh mt6983 hifi3_a.elf            ;# debug mt6983  hifi  a
./debug_adsp.sh mt6983 hifi3_b.elf            ;# debug mt6983  hifi  b
./debug_adsp.sh mt6985 hifi5_a.elf            ;# debug mt6985  hifi  a
./debug_adsp.sh mt6985 hifi5_b.elf            ;# debug mt6985  hifi  b



## 幻灯片 13

Simple usage

## 幻灯片 14

Examining the Stack

## 幻灯片 15

Examining the Data

## 幻灯片 16

Examining the Memory

## 幻灯片 17

Examining Source Files or Assemble code

## 幻灯片 18

Switch to other task and show  backtrace
18


## 幻灯片 19

Agenda
Environment Setting
User Guide
[Options] SYS_ADSP_DUMP Memory Layout
Trouble Shooting

## 幻灯片 20

[Options] SYS_ADSP_DUMP layout
Mt6985, Mt6886 :
Parse by dump header & elf 
Others legacy platform
Parse by Config.ini
Need to update “config.ini” if memory  relayout  

## 幻灯片 21

[Options 1] Parse by dump header 

Magic: 0xAD5BAD5B
Size:  0x6000
Name:   cfg
Mem  dump


Magic: 0xAD5BAD5B
Size:  0x5000
Name:   cfg2
Mem  dump


Magic: 0xAD5BAD5B
Size:  0x9000
Name:   itcm
Mem  dump


Magic: 0xAD5BAD5B
Size:  0x8000
Name:   dtcm
Mem  dump


Magic: 0xAD5BAD5B
Size:  0x900000
Name:   sysram
Mem  dump


……
SYS_ADSP_DUMP Binary Layout

## 幻灯片 22

[Options 1] Parse by dump header (2)
gdb_cmd.txt

Parse section address by reading specific symbol from elf file

## 幻灯片 23

[Options 2] Parse by Config.ini

Mem  dump
Mem  dump
Mem  dump
Mem  dump
Mem  dump
……
SYS_ADSP_DUMP Binary Layout
./debug_adsp.sh  mt6885   hifi3_a.elf

SYS_ADSP_DUMP 
sequence
File: ./python3/Config.ini

CFG_HIFI3_SRAM_SIZE = SYS_DRAM : should be the same configuration  at  platform.mk

[Remind] Generally if Memory optimization or increase heap, you must change the debug layout

## 幻灯片 24

(cont.)[Options 2] SYS_ADSP_DUMP Layout
Version
V1

V2

V3

V4

Platform [Android Version]
mt6779 mt6785 [Q]

mt6885 mt6873
mt6893

mt6853
mt6877

mt6785 [R] mt 6781

File Size (Around)
14 MB

8 MB

10 MB

8 MB

Layout
Segment
Size
Segment
Size
Segment
Size
Segment
Size

ELF Header
8 KB
CFG_REG
24 KB
CFG_REG
24 KB
CFG_REG
64 KB

ITCM
36 KB
ITCM
36 KB
ITCM
36 KB
ITCM
36 KB

DTCM
32 KB
DTCM
32 KB
DTCM
32 KB
DTCM
32 KB

Temp
288 B
SYS_DRAM
7 MB
SYS_DRAM
9 MB
SYS_DRAM
7 MB

CFG_REG
64 KB
CoreDump
1 KB
CoreDump
1 KB
CoreDump
1 KB

SYS_DRAM
7 MB
LOG_A
512 KB
LOG_A
512 KB
LOG_A
512 KB

CoreDump
1 KB
LOG_B
512 KB
LOG_B
512 KB
LOG_B
512 KB

IPI_Buffer
5 MB
 

 

 


LOG
2 MB







Reserved Memory *mt6779 only
9 MB






…….

## 幻灯片 25

Agenda
Environment Setting
User Guide
[Options] SYS_ADSP_DUMP Memory Layout
Trouble Shooting

## 幻灯片 26

Error:  param  file not in  config  folder
Ans  :  Copy  params  files to  XtensaTools / config  

## 幻灯片 27

Error:  Configparser.NoSectionError
Ans :  [Options 2] Parse by Config.ini 

Need add the platform layout of  mt xxxx _ x

## 幻灯片 28

Error: could not load ISA
The  mtxxxx-params  path setting is wrong 

## 幻灯片 29

(cont.) Error: could not load ISA
Example:  mtXXXX-params
Fix   hwcfg  relative paths to the location of this file ( XtensaTools / config / mtxxxx-params )


Correct
Wrong

## 幻灯片 30

Error: could not load ISA – port error
Ping Specific Port using telnet:
$ telnet < ip_address > < port_number >
$ telnet < domain_name > < port_number >

If can’t ping the license server, please check the firewall setting or contact to IT for help  

Ref: Set License Key

## 幻灯片 31




---
# SRC0304 ReleaseNote.xlsx

来源：TOOL\GDB_DEBUG\ReleaseNote.xlsx

SHA-256：22d7dfcb9cddb91247164d07870b4a0f9dee34f40360e9acbf18943db42edc42

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0304.html)

单元格原值与公式文本按行提取；格式、合并单元格、图形及公式计算结果以原工作簿为准。

## 工作表 1

Release Note of hifi_debug tool	
	
Version	Description
v5p3 (latest)	1. add support hwcfg version
  -  RI-2023.11-linux_hifi5
2. add support hwcfg platform
   - RI-2021.8-linux_hifi3: mt6983, mt6899
   - RI-2021.8-linux_hifi5: mt6989, mt6991(fake-param)
   - RI-2023.11-linux_hifi5: mt6991
3. Update tool_setup swich
  - show more of support information
  - add more error message
  - Auto copy params file to XtensaTool/config if version is match to hwcfg
v5p2	1. new feature: 
   - add autogen binary_compare.sh after splitcoredump, check elf binary of text/rodata are same as coredump file
2. add support hwcfg
   - RI-2021.8-linux_hifi3: mt6897
3. bug fix
  - fix gdb_command mtk_adsp_heap process too long issue.
  - fix parsing symbol error when find sram address from elf file
v5p1	1. new feature: 
   - add parsing restore address from elf file, instead of config.ini file
2. bug fix
   - fix mt6886 parsing error, because of empty dump header
v5	1. re-write tool guide document: GDB Tool for ADSP Guide.pptx
2. new feature: 
    - parsing the by header in SYS_ADSP_DUMP (support after mt6985, mt6886)
    - add tool_setup.sh script to easily setup the tool
3. default include the hwcfg folder and mtxxxx-params files in tool
   - RI-2019.1-linux: mt6781,mt6853,mt6873,mt6877,mt6879,mt6885,mt6895,mt6983
   - RI-2021.8-linux_hifi3: mt6886
   - RI-2021.8-linux_hifi5: mt6985
v4p14_220413	1. update python3/Config.ini
  - modify memory layout of support mt6985/mt6886 to align the release version of dump format.
v4p13_211029	1. update python3/Config.ini
  - modify memory layout of support mt6895 to align the release version of dump format.
v4p12_210806	1. update python3/Config.ini
  - modify memory layout of support mt6983/mt6879 to align the release version of dump format.
2. update heap parser in adsp_gdb_commands.py script
v4p11_210611	1. update python3/Config.ini
  - fix wrong configuration in v4p10_210514.
  - add memory layout to support mt6983/mt6879. (draft version) 
v4p10_210514	1. update python3/Config.ini
  - add memory layout to support mt6781, which is the same as mt6785.
v4p9_210219	1. update python3/Config.ini
  - add memory layout to support mt6877, which is the same as mt6853.
v4p8_201002	1. update python3/Config.ini
  - add memory layout to support mt6785_a in Android R, which CFG_REG size is set to 64KB.
  - add memory layout to support mt6893, which is the same as mt6885.
2. Update Hifi3 debug tool Guide_v1p2.pptx page 5, 6, 12, 14.
  - update recommand paths of toolchain and hwcfg
  - update example snapshot
v4p6_200710	1. update python3/Config.ini
  - fix legacy project naming from mtXXXX to mtXXXX_a in Config.ini to align tool naming rule
  - update mt6853_a layout to version 3, which enlarge SYS_DRAM size from 7MB to 9MB.
2. update guide for environment setting
v4p5_200417	1. ADSP GDB command support
  mtk_adsp_heap: gen trace_raw file -> adsp trace tool
  mtk_adsp_trace: gen heap information
2. update python3/Config.ini
  platfrom support mt6853_a with toolchain version RI-2019.1
  layout v2 for mt6853_a
3. support xtensaTools version select: RI-2018.0/RI-2019.1
4. update guide for environment setting
v4p4_200213	1. fix gdb cmd "info threads" can't extract the threads in the SYS_ADSP_DUMP problem
2. update preparation steps in hifi3_debug_tool readme
v4p3_200203	1. modify debug_adsp.sh to support different dual-core projects
2. update python3/Config.ini: 
   platform support mt6873_a/mt6873_b
3. add note in hifi3_debug_tool readme
v4p2_diff_200122	CMD: tar Jxvf hifi3_debug_tool_v4p1_190923.tar.xz
support platform mt6873 from v4p2_191107

## 工作表 2




---
# SRC0305 ReleaseNote_AurisysAPI.xlsx

来源：API\ReleaseNote_AurisysAPI.xlsx

SHA-256：8761b5ca3083773eadebc1d185220db8758362bcf50b2560e6a1efa7f24ed9b1

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0305.html)

单元格原值与公式文本按行提取；格式、合并单元格、图形及公式计算结果以原工作簿为准。

## 工作表 1

Chip Support Summary																					
																					
																					
SP						 															
BB Chip Support Version																					
MT6797	MT6799																				
V1.0.0	V1.2.2
																				
																					
																					
																					
																					
																					
																					

## 工作表 2

Release Note	
	
Version	Description
V1.0.0	First MP version to integrate with 3rd-party speech enhancement algorithms on OpenDSP(CM4).
The Aurisys framework uses the speech processing APIs in arsi_api.h to enhance the quality of phone sound.
Follow these APIs, the 3rd-party is able to integrate their own algorithms into Aurisys framework and focus on the speech enhancement itself, but have no need to worry about how data is collected.
The detail of the APIs is described in arsi_api.h.
V1.2.2	There might be multiple libraries implemented by different 3rd-party algorithms to support different scenarios, like phone call, record, and VoIP.
However, the original implementation of APIs will leads to a redefinition of the APIs.
The new version of the APIs is encapsulated in a data structure and each function is accessed by the function pointer which defined in arsi_api.h.
The Aurisys framework creates different objects of AurisysLibInterface and then initialize its function pointers by the entry points defined in arsi_library_entry_points.h.
The details of how function pointer is linking could be found in ReadMe.pptx.
Also, we add new APIs like:
    arsi_get_lib_version(): get library's version
    arsi_query_max_debug_dump_buf_size(): Query the max size of debug dump buffer in processing
and also change some function field of the APIs.
The detail of the APIs is described in arsi_api.h.
To see how Aurisys framework works, you can execute run.sh to link the demo library and run its process(memcpy).
The 3rd-party can implement their own library to replace the folder "only_change_lib_code_here."
V1.3.0 (Android P)	We add new API allowing 3rd-party lib to load the parameter file content into memory once when device boot up. 3rd-party lib can retrieve the parameter buffer from memory without any file I/O afterward.
Also we provide new APIs for lib to use customize information for parameter parsing. 

Add new APIs:
    arsi_load_param
    arsi_query_param_buf_size_by_custom_info (replace phased out API arsi_query_param_buf_size)
    arsi_parsing_param_file_by_custom_info (replace phased out API arsi_parsing_param_file)
    arsi_query_process_unit_bytes
Phase out APIs:
    API arsi_query_param_buf_size
    arsi_parsing_param_file
The detail of the APIs is described in arsi_api.h.
V1.4.0 (Android Q)	sync aurisys wrapped_audio with Q

* Audio: sync aurisys wrapped_audio with Q
* Add arsi_set_buf/arsi_set_buf API to set/get buffer for lib
* Update Aurisys version to 1.4.0
V1.5.0 (Android R)	sync aurisys wrapped_audio with R

* Audio: sync aurisys wrapped_audio with R
* Add arsi_get_arsi_api API to get arsi version
  The detail of the API is described in arsi_api.h.
V1.6.0 (Android S)	sync aurisys wrapped_audio with S

* Audio: sync aurisys wrapped_audio with S
* Add new call type for VILTE
* Add new aurisys API for SLB support and 2 core process sync for v1.6.0


V1.7.0 (Android T)	sync aurisys wrapped_audio with T
* Audio: sync aurisys wrapped_audio with T
* Update Aurisys version to 1.7.0
V1.8.0 (Android U, V)	Three changes have been made in this version of Aurisys.
For more detailed information, please refer to "Aurisys interface on U".pptx

First, the existing API has been modified to allow 3rd-party libraries to use SLB/L2SRAM/DRAM as a working buffer. These memories can requested by 3rd-pary lib within an integrated interface.

Modified APIs:
   arsi_query_working_buf_size
   arsi_create_handler
Phase out APIs:
   arsi_query_working_buf_size_with_slb
   arsi_create_handler_with_slb
   arsi_is_support_slb

Second, the 'devices' variable in the audio_device_info_t struct has been changed to an array with the length of 2 to support the change in Android device type.

Lastly, compile flags have been added for compatibility on RV platforms.
V1.9.0 (Android W)	sync aurisys wrapped_audio with W
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


---
# SRC0306 Readme.xlsx

来源：CONFIG\Readme.xlsx

SHA-256：0a0443a87dbf38255373f007ca3c8392355221bac5a725c8931bb395baa8bcb7

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0306.html)

单元格原值与公式文本按行提取；格式、合并单元格、图形及公式计算结果以原工作簿为准。

## 工作表 1

Release Note of Config	
	
Version	Description
V.1.2216.01	1. HIFI5 update Project Mapping Tab and configure path for DX-2
  (1) Linux/RI-2021.8/v1
  (2) Windows/RI-2021.8/v1
2. HIFI3 update Project Mapping Tab and configure path for 22H
  (1) Linux/RI-2021.8/v1
  (2) Windows/RI-2021.8/v1
V1.2236.01	1. Both HiFi3/HiFi5 add Linux full version config for simulation
V1.2316.01	1. HIFI3 update Project Mapping Tab and configure path for 23P
  (1) Linux/RI-2021.8/v2
  (2) Windows/RI-2021.8/v2
V1.2428.01	1. HIFI5 update Project Mapping Tab and configure path for DX-4
  (1) Linux/RI-2023.11/v2
  (2) Windows/RI-2023.11/v2
2. HIFI3 update Project Mapping Tab and configure path for 24P
  (1) Linux/RI-2021.8/v2
  (2) Windows/RI-2021.8/v2
	
	
	

## 工作表 2

								
								
								
								
								
	MT6779	MT6885	MT6781	MT6883	MT6885	MT6889	MT6873	MT6853
	P90	G90	G96	5G-L	5G-H	5G-H+	5G-A	5G-B
								
	MT6891	MT6893	MT6877	MT6879				
	Next-D	Next-D+	Next-A	Next-A2				
								
	MT6983	MT6895	MT6985	MT6989	MT6991			
	DX-1	DX-P	DX-2	DX-3	DX-4			
								
	MT6886							
	22H							
								
	MT6897	MT6899						
	23P	24P						
								
	MT6878							
	24M							

## 工作表 3

								
	Folder		Purpose	Toolchain Version	Version	Project	Hwcfg path	Param path
	CONFIG/HIFI3/	Linux	On Target/ Simulation	RG-2017.6-linux	v1	P90(Android P)	/vendor/mediatek/proprietary/tinysys/freertos/source/project/HIFI3_A/mt6779/platform/hwcfg/RG-2017.6-linux/	/prebuilts/xcc/linux-x86/xtensa/RG-2017.6-linux/XtensaTools/config/
				RI-2018.0-linux	v1	P90 (Android Q)
G90 (Android Q)	/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2018.0-linux/	/prebuilts/xcc/linux-x86/xtensa/RG-2017.6-linux/RI-2018.0-linux/XtensaTools/config/
					v2	P90 (Android R)
G90 (Android R)
G96
5G-L/H/H+
5G-A/A+
Next-D/D+	/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2018.0-linux/	/prebuilts/xcc/linux-x86/xtensa/RI-2018.0-linux/XtensaTools/config/
				RI-2019.1-linux	v1	5G-B
Next-A	/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2019.1-linux/	/prebuilts/xcc/linux-x86/xtensa/RI-2019.1-linux/XtensaTools/config/
					v2	DX-1
Next-A2
DX-P	/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2019.1-linux-H/	
				RI-2021.8-linux	v1	22H	/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2021.8-linux/	/prebuilts/clang/xtensa/linux-x86/RI-2021.8-linux/XtensaTools/config/
					v2	23P, 24P	/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2021.8-linux-H/	
		Windows	Simulation	RG-2017.6-win32	v1	P90(Android P)	N/A	N/A
				RI-2018.0-win32	v1	P90(Android Q)
G90
G96
5G-L/H/H+
5G-A/A+
Next-D/D+		
				RI-2019.1-win32	v1	5G_B
Next-A		
					v2	DX-1
Next-A2
DX-P		
				RI-2021.8-win32	v1	22H		
					v2	23P, 24P		
	CONFIG/HIFI5/	Linux	On Target/ Simulation	RI-2021.8-linux	v1	DX-2	/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/hwcfg/RI-2021.8-linux/	/prebuilts/clang/xtensa/linux-x86/RI-2021.8-linux/XtensaTools/config/
				core A:
RI-2023.11-linux-H	v1	DX-3, DX-4	(HiFi5_MPU_lock_2023_11_linux)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/hwcfg/RI-2023.11-linux-H/	/prebuilts/clang/xtensa/linux-x86/RI-2023.11-linux/XtensaTools/config/
				core B:
RI-2023.11-linux-E	v1	DX-3, DX-4	(HiFi5_NNE_2023_11_linux)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/hwcfg/RI-2023.11-linux-E/	/prebuilts/clang/xtensa/linux-x86/RI-2023.11-linux/XtensaTools/config/
		Windows	Simulation	RI-2021.8-win32	v1	DX-2	N/A	N/A
				RI-2023.11-win32	v1	DX-3, DX-4	N/A	N/A


---
# SRC0307 ADSP_Debugging_Guideline.docx

来源：DOC\ADSP_Debugging_Guideline.docx

SHA-256：41bbeaf028ead70adb60b87fb1ae3d7ec2dd77c7ebbc686645342ef71f872d91

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0307.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 正文（不对应打印页码） 1


























A DSP  D ebugging Guideline A DSP  D ebugging Guideline
A DSP  D ebugging Guideline
A DSP  D ebugging Guideline


Version: 1. 2
Release date: 2025-04-23










MediaTek Confidential A MediaTek Confidential A
MediaTek Confidential A
MediaTek Confidential A


Version  History
Version
Date
Description
1.0
2022-06- 1 6
O fficial release
1 .1
2 023-0 6-12
A dd case study part for common issues and debug method reference
1.2
2025-04-23
Add RV debug information at  5. Exception dump extractor
Add Task Monitor/Heap Memory Usage phase out information 
MediaTek Confidential A MediaTek Confidential A
MediaTek Confidential A
MediaTek Confidential A

Table of Contents
Version History 2
Table of Contents 3
1 Preface 6
2 Logging 7
2.1 Overview 7
3 Task Monitor 8
3.1 DSP Loading Profiling and SW Activities 8
3.2 Task Status Monitor by Logging 8
4 Heap Memory Usage 9
4.1 Monitor Heap Memory along with Task Monitor Log 9
4.2 Detailed Information of Allocated Memory 9
5 Exception Dump Extractor 10
5.1 ADSP EE log 10
5.2 Exception Dump Analysis  (Hifi) 12
5.2.1 Exception Vector 12
5.2.2 Exception Cause Table 13
5.2.3 Exception Register 14
5.2.4 Exception Flow and Assertion Implementation 14
5.3 Exception Dump Analysis (RV) 16
5.3.1 Exception Cause Table (RV) 16
5.3.2 Exception Register (RV) 17
6 Case Study 18
6.1 Performance Issue Overview 18
6.2 Heap Malloc Fail 18
6.3 ADSP MPU Exception 20
6.4 IPI Message Queue Overflow 22
6.5 WDT ISR Trigger EE 24
6.6 Stack Overflow 25
6.7 Device APC Violation 27
6.8 EMIMPU Violation 28
6.9 DMA Transfer Timeout 29
6.10 ADSP EE Trigger HAL Lock Timeout 30
6.11 Insufficient ADSP System Ram Size 30
7 Issue Feedback to MTK 33


L ist  of  F igures
MediaTek Confidential A MediaTek Confidential A Figure 3 1.  Example of Task Status Monitor 9
MediaTek Confidential A
MediaTek Confidential A
Figure 4 1.  Example Task Heap Memory Usage Monitor 10
Figure 4 2.  Example of Detailed Information of Allocated Memory 10
Figure 5 1.  Example of ADSP Dump Extraction Result 11
Figure 5 2 -2  Example of ADSP Dump Extraction Result (RV) 12
Figure 5 3.  Example of ADSP Exception in adsp log 13
Figure 5 4.  Exception Cause Procedure 14
Figure 5 5.  Exception Flow - ADSP 15
Figure 5 6.  Exception Flow – ADSP Core A Exception Example 16
Figure 5 7 .   Assertion implementation 16
Figure 5 8   Example of ADSP(RV) Exception in adsp log 17
Figure 6 1. Heap Malloc Fail Example Log 19
Figure 6 2 .  Malloc Fail Debug reference 20
Figure 6 3. Example of Memory Selection Algorithm 20
Figure 6 4. GDB Tool for Heap Analysis 20
Figure 6 5. Memory Leakage Example Log 21
Figure 6 6. ADSP MPU Exception Example Log 21
Figure 6 7. ADSP MPU Violation Debug reference 22
Figure 6 8. GDB Tool for Backtrace 22
Figure 6 9. ADSP MPU Table Dump Example 23
Figure 6 10. Message Queue Overflow Example Log 23
Figure 6 11 .  Queue Overflow Debug reference 24
Figure 6 12 .  Phone Call Scenario Runtime Profile by Ftrace 24
Figure 6 13. WDT Timeout Example Log - 1 25
Figure 6 14. WDT Timeout Example Log - 2 25
Figure 6 15. WDT Timeout Debug reference 25
Figure 6 16. Stack Overflow Example Log 26
Figure 6 17. Stack Overflow Issue Debug reference 26
Figure 6 18. GDB Tool for Stack Overflow Analysis 27
Figure 6 19. Example of adsp_analysis.txt 27
Figure 6 20 .  Example of adsp_heap_info.txt 27
Figure 6 21 .  Example of pxStack 27
Figure 6 22. Device APC Violation Example Log 28
Figure 6 23. Device APC Violation Debug reference 28
Figure 6 24. EMIMPU Violation Example Log 29
Figure 6 25. Example of EMIMPU Backtrace in out.json 29
Figure 6 26. Example of emi_mpu_output 29
Figure 6 27. DMA Transfer Timeout Example Log 30
Figure 6 28. HAL Lock Timeout Example Log 31
Figure 6 29. HAL Lock Timeout Root Cause Reference 31
Figure 6 30. Example of HAL Query ADSP State 31
Figure 6 31. Insufficient ADSP Sysram Size Example Log 32
Figure 6 32. Reference Solution of Insufficient ADSP Sysram 32
Figure 6 33. ADSP Image Size Example Log 32


List of Tables

Table 2 1. Log Level 8
Table 5 1. Exception Vector 14
Table 5 2. Exception Cause Table 14
Table 5 3. Exception Register Table 15
Table 5 4  Exception Cause Table (RV) 17
Table 5 5  Exception Register Table (RV) 18
Table 6 1. ADSP Secure Region Permission and AID Reference 30


Preface
To enable the functionality for detailed debug info, we need to enable some configurations, they’re usually located in
project\mt6xxx\HIFI3_A\platform\platform.mk       ## HiFi3  DSP A
project\mt6xxx\HIFI3_B\platform\platform.mk       ## HiFi3  DSP B
project\mt6xxx\HIFI3_A\platform\platform.mk       ## HiFi5  DSP A
project\mt6xxx\HIFI3_B\platform\platform.mk       ## HiFi5  DSP B
project\mt6 x xx\HIFI3_A\platform\inc\FreeRTOSConfig.h        ## HiFi3  DSP
project\mt6xxx\HIFI5_A\platform\inc\FreeRTOSConfig.h        ## HiFi5  DSP
project\mt6xxx\RV55_A\platform\platform.mk        ## RV5 5 DSP  A
project\mt6xxx\RV55_ B \platform\platform.mk        ## RV5 5 DSP  B
project\mt6xxx\ RV55_A \platform\inc\FreeRTOSConfig.h       ## RV55  DSP
Please remember to enable all DSP core configurations if you want to enable the debug function in all DSP cores



Logging
Overview
UART  log
Port
23P: please use UART3
Other platforms: please use UART2
Baudrate :  921600 
Configuration
CFG_UART_SUPPORT = yes
HIFI Series
project\mt6xxx\HIFI x _A\platform\platform.mk       ##   DSP  A
project\mt6xxx\HIFIx_B\platform\platform.mk       ##   DSP B
RV Series
project\mt6xxx\ RV x_A\platform\platform.mk            ##   DSP A
project\mt6xxx\ RV x_B\platform\platform.mk            ##   DSP B
default  disable  for performance  concern
N otice that if you want to enable UART log in all DSP cores in a multiple DSP Core platform, please remember to set the config in  all  cores
  Runtime  Enable/Disable ADSP UART   log   (ADSP should be active to received command)
ADSP Core  A   Enable
adb shell "echo  1  > /sys/class/misc/adsp_ 0 /ipi_test"
ADSP Core  A   Disable
  adb shell "echo  0  > /sys/class/misc/adsp_ 0 /ipi_test"  
ADSP Core  B   Enable
adb shell "echo  1  > /sys/class/misc/adsp_ 1 /ipi_test"
ADSP Core  B   Disable
adb shell "echo  0  > /sys/class/misc/adsp_ 1 /ipi_test"
Mobile log
Integrated in MTK logger
Path: /sdcard/mtklog/mobilelog/adsp_log_xxx
Log Level
With printf function,  AUD_LOG_V will not print log
Table  2 1 .  Log Level
System print
Audio Feature print
PRINTF_D
AUD_LOG_D
PRINTF_I
A UD_LOG_I
PRINTF_W
A UD_LOG_W
P RINTF_E
A UD_LOG_E



T ask Monitor
DSP Loading Profiling and SW Activities
Please refer to  ADSP_Profiling_Guideline.docx
Task Status Monitor by Logging
Phase out starting from DX 1
Enable
Set  CFG_TASK_MONITOR=yes
Notice that if you want to  log task status in all  DSP cores  in a multiple DSP platform , please remember to set the config in  all  cores
Task Status
The log will show the following task status: [name] [state] [priority] [stack usage] [id]
State
B – Blocked
R – Ready
D – Detected (waiting clean up)
S - Suspended, or Blocked without a timeout
Stack
Available stack size ,  The lower number the less free space.

Figure  3 1 .  Example of  Task Status Monitor


Heap  Memory Usage
Monitor Heap Memory along with Task Monitor Log
Phase out starting from DX1
Enable
Set  CFG_TASK_MONITOR=yes  in  platform.mk
#define configUSE_MALLOC_MEMORY_USAGE  in   FreeRTOSConfig.h
Notice that if you want to  monitor   heap usage in  task status in all DSP cores in a multiple DSP platform, please remember to set the config in all cores

Figure  4 1 .  Example  Task Heap Memory Usage Monitor
Detailed Information of Allocated Memory
Enable
#define configUSE_MALLOC_MEMORY_USAGE  in   FreeRTOSConfig.h
#define configUSE_MALLOC_DEBUG_MSG_LEN    32      in   FreeRTOSConfig.h
T hen we can get   the detailed heap memory information (size, by which task, program position)

Figure  4 2 .  Example of  Detailed Information of Allocated Memory
Exception Dump Extractor
ADSP EE log
Hifi Series  
Trigger Exception by user command
echo  238 > sys/class/misc/adsp_0/ipi_test
When system exception happens (EE   & Kernel API)
Assertion
If the exception is caused by ASSERT, the filename and line information will be shown in aee screen and  __exp_main.txt  in db.
Other cause
S etup the exception dump extraction tool first, 
[HIFI]  please refer to    TOOL\GDB_DUMP\GDB  Tool for ADSP Guide of aurisys package
F ind  SYS_ADSP_DUMP   and the elf file of your current codebase
cd hifi_debug/adsp_debug_tool
Put the correspond  hifiX_X.elf  and  SYS_ADSP_DUMP
./debug_adsp.sh ${platform} ${elf_path}
Ex
./debug_adsp.sh mt6983 hifi3_a.elf           ;# debug mt6983 hifi a
./debug_adsp.sh mt6983 hifi3_b.elf           ;# debug mt6983 hifi b
./debug_adsp.sh mt6985 hifi5_a.elf           ;# debug mt6985 hifi a
./debug_adsp.sh mt6985 hifi5_b.elf           ;# debug mt6985 hifi b
Then you can get backtrace information like this

Figure  5 1 .  Example of ADSP  Dump Extraction Result

RV Series
Trigger Exception by user command
echo 238 > sys/class/misc/adsp_0/ipi_test
Preparation : Put these to the "${alps}/prebuilts/clang/md32rv/linux-x86/lldb_ v4 /" folder
SYS_ADSP_DUMP : 
decompress the db.EE file, copy out the "SYS_ADSP_DUMP"
Matches ELF file : 
${alps}\out_vext\target\product\${project}\obj\TINYSYS_OBJ\tinysys-adsp_intermediates\RV55_A\rv55_a.elf
${alps}\out_vext\target\product\${project}\obj\TINYSYS_OBJ\tinysys-adsp_intermediates\RV55_ B \rv55_ b .elf
For MDSP_PDK, please refer to MDSP toolchain  release.  
How-to-Use
On  “ linux ”  server and cd "${alps}/prebuilts/clang/md32rv/linux-x86/lldb_v4/"
E xample for platform mt6993
$module load MDSP_PDK/1.16.0
$ ./coredump_cmd_adsp.sh mt6993 rv55_a.elf SYS_ADSP_DUMP cmd;     # debug of rv55 (core 0)
$ ./coredump_cmd_adsp.sh mt6993 rv55_b.elf SYS_ADSP_DUMP cmd;     # debug of rv55 (core 1)


Figure  5 2 -2  Example of ADSP Dump Extraction Result  (RV)

For checking backtrace, you need to check the freertos  awareness  report of the last running task.


Exception Dump Analysis  (Hifi)


Figure  5 3 .  Example of ADSP Exception in adsp log
Exception Vector
     Similar  to the interrupt, when DSP encounters error behaviors during executing, there would be exception happens. Then the program would jump to the Exception Vector. 
Table  5 1 .  Exception Vector
Vector
M ain Cause
Description
UserExceptionVector
EXCCAUSE
operating modes: user vector mode
KernelExceptionVector
EXCCAUSE
operating modes: kernel vector mode
DoubleExceptionVector
EXCCAUSE
exception when handling exceptional condition
PS   –   Process Status Register, it’s used to record the process status (please find isa_rm.pdf in xtensa tools to get more information).
EXCCAUSE  register is used to record the exception id, we can check the exception cause table in next section to find what issue happened.


Figure  5 4 .  Exception Cause  Procedure
Exception Cause Table
Common exception cause are listed in  the  following table. You can find more information in  isa_rm.pdf  in xtensa tools.
Table  5 2 .  Exception Cause Table
E XCAUSE
Cause Name
Cause Description
E xample
0
IllegalInstructionCause
Illegal instruction
The Instruction on behalf of the execution does not exist, there may be a problem with the fetch instruction
1
SyscallCause
SYSCALL instruction

4
Level1InterruptCause
Level-1 interrupt as indicated by set level-1 bits in the INTERRUPT register
Level 1 interrupt is treated as an exception, which will lead to the subsequent Interrupt handler [ it’s a  normal behavior]
6
IntegerDivideByZeroCause
QUOS, QUOU, REMS, or REMU divisor operand is zero
division by zero exception
This is also currently used as a  m ethod to  trigger  the a ssert ion  forcibly  by developer.
9
LoadStoreAlignmentCause
Load or store to an unaligned address
This happens when the pointer is set to a certain data but in the MPU, because the value does not have address align, an exception will be triggered
2 0 (0x14)
InstFetchProhibitedCause
An instruction fetch referenced a page mapped   with an attribute that does not permit instruction fetch
Execute a non-MPU protected space instruction, usually a null function pointer will trigger
2 8 (0x1c)
LoadProhibitedCause
A load referenced a page mapped with an   attribute that does not permit loads
Read a non-MPU protected space, usually triggered by using a Null pointer
2 9 (0x1d)
StoreProhibitedCause
A store referenced a page mapped with an   attribute that does not permit stores
Read a non-MPU protected space, usually triggered by using a Null pointer

Exception Register
Table  5 3 .  Exception  Register  Table
Register
W idth  ( bits)
R egister Name
Comment
E PC[1]
3 2
Exception program counter
P rogram Counter of Exception
EXCCAUSE
3
Cause of last exception
C ause of Exception
EXCVADDR
3 2
Virtual address that caused last fetch, load, or store exception
The Address position that is being operated when Exception occurs, usually a Memory-related Exception
EXCSAVE[1]
3 2
Save location for last exception
The temporary storage location  to reserve information  w hen exception happens
DEPC
3 2
Double exception PC
U sed to reserve the PC value when double exception happens

Exception Flow and Assertion Implementation  

Figure  5 5 .  Exception  Flow  - ADSP


Figure  5 6 .  Exception Flow –  ADSP   Co re A Exception Example


Figure  5 7 .   Assertion  implementation








Exception  Dump  Analysis  (RV)


Figure  5 8   Example of ADSP (RV)  Exception in adsp log
Exception Cause Table (RV)
Common exception cause is listed in the following table.
Table  5 4  Exception Cause Table (RV)
EXCAUSE
Cause Name
Cause Description
Example
0 x0
CAUSE_MISALIGNED_FETCH
I nstruction address misaligned

0x 1
CAUSE_FAULT_FETCH
Instruction access fault
Run the address without write permission ( non- cache)
0x2
CAUSE_ILLEGAL_INSTRUCTION
Illegal instruction

0x4
CAUSE_MISALIGNED_LOAD
Load address misaligned

0x5
CAUSE_FAULT_LOAD
Load access fault
Read the address without write permission (non-cache)
0x6
CAUSE_MISALIGNED_STORE      
Store address misaligned

0x7
CAUSE_FAULT_STORE
Store access fault
Write the address without write permission (non-cache)
0xb
CAUSE_MACHINE_ECALL   
Environment call from M-mode
Assertion  happens  by user
0xc
CAUSE_FETCH_PAGE_FAULT  
Instruction page fault
Run  the address without write permission  (cache)
0xd
CAUSE_LOAD_PAGE_FAULT       
Load page fault
Read  the address without write permission   (cache)
0xf
CAUSE_STORE_PAGE_FAULT  
Store page fault
W rite the address without write permission  (cache)

Exception Register (RV)
Table  5 5   Exception  Register  Table (RV)
Register
Register  Name
Comment
mepc
Machine Exception Program Counter
Program Counter of Exception
mcause
Machine Cause Register
Cause of Exception , check by table
mtval
Machine Trap Value Register
The Address position that is being operated when Exception occurs, usually a Memory-related Exception

Case Study
P erformance Issue Overview
If there is  a  performance issue   (underflow, timeout, etc.) ,   p lease check the following items :
Check adsp log
Check adsp log first to check if there is blocking events.
Mtk log path:   adb pull /storage/sdcard0/debuglogger/
Exception db path:  adb pull /data/vendor/aee_exp
Raise the DSP clock rate
Just modify the feature MCPS table with a bigger value so that the DSP would run in a higher clock rate.
If it works in a higher clock rate, we need to check if there is unexpected blocking or high loading tasks.
Task  runtime   profile
Use task runtime profile to check the overall task runtime .
For detailed usage, please refer to TOOL/ADSP_FTRACE
Cycle Counter
Use cycle counter to check how many cycles consumed in a specified region
Heap  M alloc Fail
As shown in  Figure  6 1 . Heap Malloc Fail Example Log , i f there is  a  heap  malloc fail  issue ,  y ou can see the word  “malloc fail”  directly  in  ADSP  log.  Once malloc fail issue happens, p lease check the following items :
E xample log

Figure  6 1 .  Heap Malloc Fail Example Log
Debug reference
T he remaining  free  heap size  and total size  should be checked first , and you can find this information in ADSP log  as shown in  Figure  6 1 . Heap Malloc Fail Example Log .  In most malloc fail cases, the requested size is larger than the remaining free size.

Figure  6 2 .  Malloc  F ail  Debug reference
I ssue back to MTK: please refer to  D MA Transfer Timeout
As shown in  Figure  6 27 . DMA Transfer Timeout Example Log , i f there is  a   DMA timeout  issue , y ou can see the word  "DMA transfer timeout"  directly  in adsp log. Once a DMA timeout  issue  happens, p lease check the following items :
E xample log

Figure  6 27 . DMA Transfer Timeout Example Log
Debug reference
C heck  which  task  caused exception
I n most DMA timeout cases, the task is  aud_a2d  which is related to UART.  If you confirm that this is not a problem caused by your changes, please seek assistance from DRI for uart  / bt  owner ’s help.
ADSP EE Trigger HAL Lock Timeout
As shown in  Figure  6 28 . HAL Lock Timeout Example LogFigure  6 24 . EMIMPU Violation Example Log , i f there is  a HAL lock timeout  issue , y ou can see the word  “ AUD_WARNING(lock timeout!!) ”  directly  in main log. HAL lock timeout will trigger system API dump. Once a HAL lock timeout  issue  happens, p lease check the following items :
E xample log

Figure  6 28 . HAL Lock Timeout Example Log
D ebug reference
As shown in  Figure  6 29 . HAL Lock Timeout Root Cause Reference , t here are many reasons for  HAL lock  timeout, and ADSP  EE  is just one of them . ADSP EE may cause PCM open fail, thus result in HAL lock timeout.  This chapter only discusses the situation caused by ADSP EE .  Therefore, once there is a HAL lock timeout issue, please check whether there is any ADSP EE recently.  If yes, please debug from this  ADSP EE  direction  (ex. GDB tool).


Figure  6 29 . HAL Lock Timeout Root Cause Reference

F rom  Figure  6 30 . Example of HAL Query ADSP State , in this PCM open fail case, we can infer that the reason is ADSP system not ready. Please turn to ADSP log and DB for more debug information.

Figure  6 30 . Example of HAL Query ADSP State
As for the recovery detail, p lease refer to   Figure  5 6 .  Exception Flow – ADSP  Co re A Exception Example .
Insufficient  ADS P System Ram Size
At  software development stage, because the librar ies  used by MTK  may be  different from that of the customer s , customer s  may encounter the problem of insufficient ADSP ram . As shown in  Figure  6 31 . Insufficient ADSP Sysram Size Example LogFigure  6 24 . EMIMPU Violation Example Log , i f  ADSP system ram size is not enough, y ou can see  “sramx_reg overflowed by xx bytes”  directly  at build time. Once ADSP system ram size is not enough, p lease check the following items :
E xample log

Figure  6 31 . Insufficient ADSP Sysram Size Example Log
Debug reference

Figure  6 32 .  Reference  S olution  of Insufficient ADSP Sysram
Enlarge ADSP sysram size
P lease refer to  DOC\AudioDSP_Development_Tutorial.docx – Memory Configuration  part for detail.
Get current sysram size from   lk log at bootup stage
Take  Figure  6 33 . ADSP Image Size Example Log  as an example, this size includes ADSP dual core itcm, dtcm and sysram
For each core
Itcm: 256 KB (0x40000 bytes)
Dtcm: 32 KB (0x8000 bytes)
S ysram: 10 MB (0xa00000 bytes)
T otal = 2 * (0x40000 + 0x8000 + 0xa00000) = 0x1490000

Figure  6 33 . ADSP Image Size Example Log

M ay encounter ADSP image partition size not enough
Such issue may cause bootup fail problem.
P lease feedback to MTK DRI and seek for partition’s help.

I ssue Feedback to MTK
C heck memory algorithm:  SELECT_MEMBLOCK_BY_ALGORITHM
I f  SELECT_MEMBLOCK_BY_ALGORITHM   is defined as  BEST_FIT_ALGO , then it will choose the best fit memory block ; otherwise, it will use first fit algorithm.
First-fit:  more efficiently  but may result in memory fragmentation
B est-fit:  better use of  the whole  memory
F ile: project/mtxxxx/HIFIX_A/platform/inc/FreeRTOSConfig.h


Figure  6 3 .  Example of  Memory Selection Algorithm
Us e GDB tool to check heap usage by task:
Usage:
Command:  (xt-gdb) mtk_adsp_heap
O utput:  adsp_heap_info.txt
Example:

Figure  6 4 . GDB Tool for Heap Analysis
O ptimization: check if there is unused memory.
E nlarge sys tem  ram / heap  size:  
If all tasks request memory normally, you may consider  increasing   the  heap size.
For detailed SOP,  please refer to  Memory Configurations  part in  AudioDSP_Development_Tutorial.docx
M emory leak:
Memory leak occurs when programmers create a memory in heap and forget to delete it. 
As shown in  Figure  6 5 . Memory Leakage Example Log , i n this malloc fail case, memory leakage issue happens in callsub task. If similar log  pattern  appears  in  adsp_heap_info.txt  (the same task keep s  requesting memory repeatedly  as you can see the cycle between   audio_messenger_ipi.c   and   audio_task_phone_call.c ) ,  we suggest that  you can check whether memory is free successfully when process end.

Figure  6 5 .  Memory Leakage Example Log
ADSP  M PU  Exception
Xtensa processor configurations enabling the Memory Protection Unit (MPU), for example,
have the ability to restrict the access rights of arbitrary memory regions .  If there is  a ADSP MPU exception  issue , the  exccause  may be 0x1c (load prohibited) or 0x1d (store prohibited).  Once such issue happens, p lease check the following items :
E xample log

Figure  6 6 . ADSP MPU  Exception  Example Log
Debug reference

Figure  6 7 . ADSP MPU Violation  Debug reference

Use  GDB tool  to get backtrace information
T o check the violation scenario
Command:  (xt-gdb) bt
E xample :
D ouble confirmed the last pc by using command :  (xt-gdb) list   *$pc .

Figure  6 8 . GDB Tool for Backtrace
D ump MPU table to check memory region permission
C ommand:  adb shell "echo mpu_dump > sys/kernel/debug/audiodsp X ; cat sys/kernel/debug/audiodsp X "
Result :
T he MPU table dump format:  address/access right/memory type
As shown in  Figure  6 9 . ADSP MPU Table Dump Example , here we t ake  address 0x1e0000c4 for an example . The desired address is located between entry#12 0x1e00000 0 & entry#13 0x4d000000. Thus, 0x1e0000c4 has the same access right and memory type as entry#12  0x1e00000 0.
For detailed access right and memory type, please refer to Xtensa document.

Figure  6 9 . ADSP MPU Table Dump Example
For most cases, the address you would like to access has read and write permission. However, i f the address  h as no permission, please use MPU API in  mpu.c  to set region permission.  
mpu_set_region_attribute(void *vaddr, 
uint32_t size,
int32_t accessRights, 
int32_t memoryType)

IPI Message  Qu eue Overflow
If there is  a queue overflow  issue , p lease check the following items :
E xample log

Figure  6 10 .  Message Queue Overflow Example Log
Debug reference

Figure  6 11 .  Qu eue  O verflow  Debug reference

If m essage received too fast :
C heck the message source first because it may not belong to ADSP system issue.
If m essage processed too slow :
To check whether the task is executed properly or not, you can use Ftrace tool.



Figure  6 12 .  Phone Call Scenario Runtime Profile by Ftrace  
W DT ISR Trigger EE
The general WDT  is  trigge red in purpose  to notify AP that ADSP has an exception.   However ,  if the WDT is triggered without a n y  exception,  probably  it’s  because the tick cannot update ( xPortSysTickHandler ) for some reason .   T hen  it  cannot kick the WDT, and finally  results in  WDT timeout .  If there is  a WDT  issue , p lease check the following items :
E xample log

Figure  6 13 . WDT Timeout Example Log -   1

Figure  6 14 . WDT Timeout Example Log -   2

Debug reference

Figure  6 15 . WDT Timeout  Debug reference
Other IRQ keep s  triggering :
If other  IRQ with higher  priority  than tick keep s  triggering, the tick handler won’t be served and finally results in WDT timeout.
Example log is shown in  Figure  6 13 . WDT Timeout Example Log - 1 . The  exccause  is the return address of pxCurrentTCB; while the  excvaddr  is the stack point of pxCurrentTCB. Also, the irq status may be shown if the irq is not successfully cleared.
D isable IRQ for a long time:
B ecause IRQ is disabled in such case, WDT handler can’t be executed .  Thus, t here is no such  coredump  information to refer to .
E xample log is shown in  Figure  6 14 . WDT Timeout Example Log - 2 .  You can check config register WDT latch data and IRQ status register.
S tack Overflow
As shown in  Figure  6 16 . Stack Overflow Example Log , i f there is  a stack overflow  issue , y ou can see the word  “stack overflow”  directly  in ADSP log.  If  stack overflow  issue  happens , p lease check the following items :
E xample log

Figure  6 16 . Stack Overflow Example Log
Debug reference

Figure  6 17 . Stack Overflow Issue  Debug reference
U se GDB tool to check stack size
You can confirm how much the current stack exceeds the stack during the  context switch .   However,  it does not mean that you can confirm how much the current stack exceeds during  execution .  As for the solution, please refer to the next step.
Usage:
C ommand:  (xt-gdb)  mtk_adsp_debug
O utput:  adsp_analysis.txt 
F rom  Figure  6 19 . Example of adsp_analysis.txt ,  we can infer to this result :
pxTopOfStack – pxStack = -16  (b ytes)

Figure  6 18 . GDB Tool for Stack Overflow Analysis


Figure  6 19 . Example of adsp_analysis.txt
U se GDB tool to check  heap  size
A   s tack  o verflow  issue  usually  results in  memory corruption  issues.   Thus,  you can use the heap info rmation  to confirm how much  memory  has been  corrupted.
Usage:
C ommand:  (xt-gdb)  mtk_adsp_heap
O utput: adsp_heap_info.txt 
F rom  Figure  6 20 .   Example  of adsp_heap_info.txt , 
Calculate the minimum memory added for stack
From the information in  Figure  6 20 .   Example  of adsp_heap_info.txt  and  Figure  6 21 .  Example  of pxStack , it can be  observed  that the stack has stepped over from the original  address  0x55dd2380 to at least 0x55dd2200 ,   b ecause 0x55dd2200 can not  correctly point to the next memory block .   Therefore,  a conservative estimate is to increase 0x55dd2380 - 0x55dd2100 = 640 bytes
Note that the FreeRTOS stack unit is 4   byte s , so the increased stack size should be  640/4 =  160 . T h e  number is  just  the minimum space that should be increased , and you  can increase  more  to ensure that  s tack  o verflow will not  happen frequently .
The amount of stack is usually affected by the flow of the algorithm, and  we suggest that you can reserve a larger stack size i n the early stage of development .  U ntil the later stage ,   you can  use watermark to evaluate the overall space used  and check  whether there is a possibility of reduction .


Figure  6 20 .   Example  of adsp_heap_info.txt


Figure  6 21 .  Example  of pxStack
D evice APC  Violation
Each sub - system has its own DEVice Access Permission Control  (DEVAPC/DAPC)  to handle the security and data protection scheme of its own modules .  As shown in  Figure  6 22 . Device APC Violation Example Log , i f there is  a   devapc violation  issue , y ou can see the word  “ [DEVAPC] Violation ”  directly  in  SYS_KERNEL_LOG from DB . Devapc violation will trigger Kernel Exception (KE) , thus no ADSP core dump for GDB tool . Once a devapc violation  issue  happens, p lease check the following items :
E xample log

Figure  6 22 . Device APC Violation Example Log
Dev apc violation  scope
Permission denied
Power/clock is not enabled
Unalignment / out of bound / way_en
Decode / slave error
Debug reference

Figure  6 23 . Device APC Violation  Debug reference
Check master / violation address
Conf irm that this address is the  one  you expect ed  to access
C heck the violation address belongs to the slave (it does in most cases)
Check p ower/clock
O nce the devapc violation triggers, devapc mechanism will check slave pwr/clk.
Check p ermission
P ermissions are set in devapc_adsp.h, devapc_infra, devapc_peri, … in TF-A
In most cases, the  addresses   that are expected  to be used ha ve  already been authorized
C heck scenario
Please  check   where to   access  th e address  accidently from the  s cenarios
E MIMPU  Vi olation
Although  ADSP  MPU cannot block  invalid  DMA transactions, it can  still  be protected by EMIMPU .  As shown in  Figure  6 24 . EMIMPU Violation Example Log , i f there is  an   EMIMPU violation  issue , y ou can see the word  “ EMI_MPU_Violation ”  directly  in out.json and emi_mpu_output file  from  DB.  EMIMPU violation will trigger kernel API dump.  Once  a n  EMIMPU violation  issue  happens , p lease check the following items :
E xample log

Figure  6 24 . EMIMPU Violation Example Log


Figure  6 25 . Example of EMIMPU  Backtrace in  out.json

Figure  6 26 . Example of  emi_mpu_output
Debug reference
C heck AID  from  emi_mpu_output
A ID means the master who accesses the violation address.
F or t he same master, secure and non-secure access  are  separate AID .
P lease refer to  Table  6 1 .  A DSP Secure Region Permission and AID Reference  f or detailed AID description .  
C heck  the  violation address from emi_mpu_output
C heck  whether  the address is as expected or not  (the address you want to access) as well as the permission .
C heck violation scenario
T o narrow down where the transaction happens .
C heck ADSP behaviors from ADSP log
Table  6 1 .  A DSP Secure Region Permission and AID Reference
Module
ADSP ROM (SR 28)
ADSP share (SR 29)
AID permission
secure ADSP-HiFi0 & DMA0
AID = 29*2+0 = 58
permission=RW
non-secure ADSP-HiFi0 & DMA0
AID = 29*2+1 = 59
permission=RW
secure ADSP-HiFi1 & DMA1
AID = 30*2+0 = 60
permission=RW
non-secure ADSP-HiFi1 & DMA1
AID = 30*2+1 = 61
permission=RW
secure CPU
AID=120*2+0=240
permission=RW
non-secure CPU
AID=120*2+1=241
permission=R
secure ADSP-Audio
AID = 26*2+0 = 52
AID = 27*2+0 = 54
AID = 28*2+0 = 56
permission=RW
non-secure ADSP-Audio
AID = 26*2+1 = 53
AID = 27*2+1 = 55
AID = 28*2+1 = 57
permission=RW 
secure ADSP-HiFi0 & DMA0
AID = 29*2+0 = 58
permission=RW
non-secure ADSP-HiFi0 & DMA0
AID = 29*2+1 = 59
permission=RW
secure ADSP-HiFi1 & DMA1
AID = 30*2+0 = 60
permission=RW
non-secure ADSP-HiFi1 & DMA1
AID = 30*2+1 = 61
permission=RW
secure CPU
AID=120*2+0=240
permission=RW
non-secure CPU
AID=120*2+1=241
permission=RW

D MA Transfer Timeout
As shown in  Figure  6 27 . DMA Transfer Timeout Example Log , i f there is  a   DMA timeout  issue , y ou can see the word  "DMA transfer timeout"  directly  in adsp log. Once a DMA timeout  issue  happens, p lease check the following items :
E xample log

Figure  6 27 . DMA Transfer Timeout Example Log
Debug reference
C heck  which  task  caused exception
I n most DMA timeout cases, the task is  aud_a2d   which  is related to UART.  If you confirm that this is not a problem caused by your changes, please seek assistance from DRI for uart  / bt  owner ’s help.
ADSP EE Trigger HAL Lock Timeout
As shown in  Figure  6 28 . HAL Lock Timeout Example Log Figure  6 24 . EMIMPU Violation Example Log , i f there is  a  HAL lock timeout  issue , y ou can see the word  “ AUD_WARNING(lock timeout!!) ”  directly  in  main log .  HAL lock timeout  will trigger  system  API dump. Once a  HAL lock timeout  issue  happens, p lease check the following items :
E xample log

Figure  6 28 . HAL Lock Timeout Example Log
D ebug reference
As shown in  Figure  6 29 . HAL Lock Timeout Root Cause Reference , t here are many reasons for  HAL lock  timeout, and ADSP  EE  is just one of them .   ADSP EE may cause PCM open fail, thus result in HAL lock timeout.  This chapter only discusses the situation caused by ADSP EE .  Therefore, once there is a HAL lock timeout issue, please check whether there is any ADSP EE recently.   If yes, please debug from this  ADSP EE  direction  (ex. GDB tool).


Figure  6 29 . HAL Lock Timeout Root Cause Reference

F rom  Figure  6 30 . Example of HAL Query ADSP State , in this PCM open fail case, we can infer that the reason is ADSP system not ready. Please turn to ADSP log and DB for more debug information.

Figure  6 30 . Example of HAL Query ADSP State
As for  the  recovery detail, p lease refer to   Figure  5 6 .  Exception Flow – ADSP  Co re A Exception Example .
Insufficient  ADS P Sys tem R am  Size
At  software development stage, because the librar ies  used by MTK  may be  different from that of the customer s , customer s  may encounter the problem of insufficient ADSP ram .  As shown in  Figure  6 31 . Insufficient ADSP Sysram Size Example Log Figure  6 24 . EMIMPU Violation Example Log , i f  ADSP system ram size is not enough, y ou can see  “sramx_reg overflowed by xx bytes”  directly   at  build  time . Once ADSP system ram size is not enough, p lease check the following items :
E xample log

Figure  6 31 . Insufficient ADSP Sysram Size Example Log
Debug reference

Figure  6 32 .  Reference  S olution  of Insufficient ADSP Sysram
Enlarge ADSP sysram size
P lease refer to  DOC\AudioDSP_Development_Tutorial.docx – Memory Configuration  part for detail.
Get current sysram size from   lk log at boo t up stage
Take  Figure  6 33 . ADSP Image Size Example Log  as an example, this size includes ADSP dual core itcm, dtcm and sysram
For each core
Itcm: 256 KB (0x40000 bytes)
Dtcm: 32 KB (0x8000 bytes)
S ysram: 10 MB (0xa00000 bytes)
T otal = 2 * (0x40000 + 0x8000 + 0xa00000) = 0x1490000

Figure  6 33 . ADSP Image Size Example Log

M ay encounter ADSP image partition size not enough
S uch issue may  cause  bootup fail problem.
P lease feedback to MTK DRI and seek for partition’s help.

I ssue Feedback to MTK
Please provide the following debug information once issue happens:
Issue basic information
Platform
L oad version
R epeat ratio
S cenario
Feature side: p hone call / VoIP /  p layback / …
S ystem side: bootup / suspend / resume / …
P atch
Pl ease confirm whether the issue happens only  if you add  your  patch
M tk log including  adsp   log  (Audio DSP has an independent logging file)
DSP coredump
Please refer to  \TOOL\GDB_DEBUG  of the released Aurisys_exe_xx.xxxx.xx. You can extract the dump by xt-gdb to check the exception cause.
Memory map file  ( hifi3_a.elf ) to decode coredump. Its location:
A0 Structure
If using default image: / vendor / mediatek / proprietary / ti nysys / freertos / adsp_lib
If local build: / vendor / mediatek / prop rietary / tinysys / freertos / source / tinysys-scp_out
B0 Structure
If using default image:  /vendor/ me diatek/proprietary/tinysys/adsp/ adsp_imgs
If local build:  /vendor/mediate/proprietary/tinysys/adsp/HIFI3/ tinysys_out
Configurations
HiFi3 A0 Structure
tinysys_config.h  (Auto generated file to log the configurations of the specified project)
default image: / vendor / mediatek / proprietary / ti nysys / freertos / adsp_lib
local build: / vendor / mediatek / prop rietary / tinysys / freertos / source / tinysys-scp_out
platform.mk
vendor / mediatek / proprietary / tinysys / freertos / source / project / HIFI3_A /[platform]
ProjectConfig.mk
vendor / mediatek / proprietary / tinysys / freertos / source / project / HIFI3_A /[platform]/[project]
HiFi3  B0 Structure
tinysys_config.h  (Auto generated file to log the configurations of the specified project)
default image:  /vendor/ me diatek/proprietary/tinysys/adsp/ adsp_imgs
local build:  /vendor/mediate/proprietary/tinysys/adsp/HIFI3/ tinysys_out
platform.mk
vendor/mediate/proprietary/ ti nysys/adsp/HIFI3/project/[platform]/ HIFI3_ X/platform
Project.mk
vendor/mediate/proprietary/ ti nysys/adsp/HIFI3/project/[platform]/ HIFI3_ X/platform/[project]
HiFi5  Structure
tinysys_config.h  (Auto generated file to log the configurations of the specified project)
default image:  /vendor/ me diatek/proprietary/tinysys/adsp/ adsp_imgs
local build:  /vendor/mediate/proprietary/tinysys/adsp/HIFI5/ tinysys_out
platform.mk
vendor/mediate/proprietary/ ti nysys/adsp/HIFI5/project/[platform]/ HIFI 5 _ X/platform
Project.mk
vendor/mediate/proprietary/ ti nysys/adsp/HIFI5/project/[platform]/ HIFI 5 _ X/platform/[project]



---
# SRC0308 Audio_DSP_SWIP_Build_Cpp_lib.pptx

来源：DOC\adsp_lib_guideline\Audio_DSP_SWIP_Build_Cpp_lib.pptx

SHA-256：d4fd3ca54248d868c26cdfe93ef58526f2442249aeebb5ef3d66b1280a13376b

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0308.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1

AudioDSP C++ Library Guideline
MediaTek

## 幻灯片 2

2
Local build C++ lib
How-to build-in in ADSP image
Add library to scenario
Limitation and notes
Appendix
ARSI-PROC APIs
ARSI-PAR APIs
C++ demo lib

Outline

## 幻灯片 3


3
Flow
By IDE
By linux cmd
Local prebuild library
(choose either one)
HWCFG
Toolchain
Source code
Preparation
.a file
Add to scenarios
Output library file
Build-in in ADSP image


## 幻灯片 4

Path:  /vendor/mediatek/proprietary/tinysys/common/drivers/audio/aurisys/lib/democpp/

Local build C++ lib – Environment Settings
File Name
Description
DemoCpp.cpp
Your cpp source code
DemoCpp.h
Your header file
democpp_wrapper.cpp
ARSI-PROC APIs.   Please   rename  function prefix to your library name! 
(ex.  democpp _arsi_query_working_buf_size to  xxx _arsi_query_working_buf_size)
democpp_wrapper_private_type.h
Define API related struct 
Makefile













README
-
Var
Description
Example
Platform
platform
mt6989_a
XT_TOOLS_VERSION
toolchain version
RI-2023.11-linux
XT_TOOLS_BIN_DIR
toolchain path
$(ALPS_PATH)/prebuilts/clang/xtensa/linux-x86/$(XT_TOOLS_VERSION)/XtensaTools/bin
INSTALLDIR
the actual path where the library is called
$(ALPS_PATH)/vendor/mediatek/proprietary/tinysys/adsp/HIFI5_SP/middleware/lib/$(XT_TOOLS_VERSION)/libdemocpp
CC
compiler (xcc/clang)
$(ADSP_CROSS_COMPILE) xt -clang++
OUT_FILES
output library name
libdemocpp.a
libdemocpp.a
modify  $(OBJ_FILES) target to your library name

4
For API details, please refer to Aurisys API -  arsi_api.h

## 幻灯片 5

5
Command:  $make clean; make

Output: 
The output library will be in the same   folder path
Ex. /vendor/mediatek/proprietary/tinysys/common/drivers/audio/aurisys/lib/democpp/ libdemocpp.a






Makefile will help copy library to the actual path where the library is called
Ex. /vendor/mediatek/proprietary/tinysys/adsp/HIFI5_SP/middleware/lib/RI-2023.11-linux/libdemocpp/ libdemocpp.a

Local build C++ lib – Command & Output




copy

## 幻灯片 6

6
Check  Link scripts:
*lib: -lc - lgloss  - lminrt  -lc - lhandler -reset - lhandlers -board - lminrt  - lhal  -lc  - lstdc ++
Path: /vendor/ mediatek /proprietary/ tinysys / adsp /HIFIX_SP/project/mt6xxx/HIFIX_A/platform/ lnk-hifiX /RI-20XX.X-linux/specs
Config  (under platform.mk)
Library entry config
Example
CFLAGS += -D AURISYS_CPP_SUPPORT
LIBFLAGS
Assume the prebuilt library is  lib xxx .a
LIBFLAGS += - Wl ,-L$(ADSP_MIDDLEWARE_DIR)/lib/$(XT_INTERNAL_LIB_DIR)/ lib_folder_name   -l xxx  
Example
LIBFLAGS += - Wl ,-L$(ADSP_MIDDLEWARE_DIR)/lib/$(XT_INTERNAL_LIB_DIR)/ libdemocpp  - l democpp

How-to build-in in ADSP image

To distinguish this
arsi_library_entry_points.h

## 幻灯片 7

7
Please refer to  AudioDSP_Development_Tutorial.doc - New Aurisys Scenario   for details!!!
Example:
Add library to scenario
Check adsp log









1
2
3
Add library to: 
- Scenario  (as shown in 
     the picture on the right)
- DVFS 
- Aurisys library entry
Confirm the query 
result is as expected
Scenario
Lib name
Lib version

## 幻灯片 8

8
There are some functions (APIs) must be implemented 
Please check  ARSI-PROC APIs  &  ARSI-PAR APIs  (the  red  ones in Appendix)
ARSI-PROC APIs:  demolib  examples are in  democpp_wrapper.cpp
Limitation and notes

## 幻灯片 9

9
Functions
Description 
arsi_query_working_buf_size
Query the size of the working buffer
arsi_query_process_unit_bytes
Query the basic data consumption for uplink/downlink processing
arsi_create_handler
Create handler and initialize it
arsi_process_ul_buf
Processing microphone/uplink data
arsi_process_dl_buf
Processing playback/downlink data
arsi_destroy_handler
De - initialize handler and destroy it (no need to free the working buffer)
arsi_update_device
Update task device info
arsi_update_param
Update enhancement parameters
arsi_set_ul_digital_gain
Set uplink digital gain
arsi_set_dl_digital_gain
Set downlink digital gain
arsi_set_ul_mute
Mute/ unmute  uplink
arsi_set_dl_mute
Mute/ unmute  downlink
arsi_set_ul_enhance
Enable/disable uplink enhancement function
arsi_set_dl_enhance
Enable/disable downlink enhancement function
arsi_set_debug_log_fp
Set debug log print callback function
arsi_query_max_debug_dump_buf_size
Query the size of dump  buf  file for each  downlink/uplink processing
arsi_set_addr_value
Set value at a specified address
arsi_get_addr_value
Get value from the specified address
arsi_set_key_value_pair
set  key_value  string to library
arsi_get_key_value_pair
get  key_value  string from library
[Appendix] ARSI-PROC APIs

## 幻灯片 10

10
   Functions
Description 
arsi_load_param
This  function  will only called once when device boot up.
Load the parameter file content  into memory
Library can retrieve the parameter buffer from memory without any file I/O afterward
Implemented in AP side only, but not in DSP.
arsi_query_param_buf_size_by_custom_info
Query the buffer size to keep speech enhancement parameters
Implemented in AP side only
arsi_parsing_param_file_by_custom_info
Parsing param file to get parameters into  p_param_buf
Implemented in AP side only
[Appendix]  ARSI-PAR APIs

## 幻灯片 11

11
Find cpp demo lib under  Aurisys package  or  ALPS codebase
Aurisys path:  Aurisys_exe_V1.XXXX.01\DOC\ adsp_lib_guideline  
ALPS path: alps/vendor/mediatek/proprietary/tinysys/common/drivers/audio/aurisys/lib/democpp/



C++ Demo Lib

## 幻灯片 12

Thank  you 
Question s and Discussions

## 幻灯片 13

13



---
# SRC0309 Audio_DSP_SWIP_Build_lib_w_IDE.pptx

来源：DOC\adsp_lib_guideline\Audio_DSP_SWIP_Build_lib_w_IDE.pptx

SHA-256：95df24f3bf25669d4188f6aa5e68bdf61f1e4aca0e5db7912f119f60980c47b4

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0309.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1

Audio DSP SWIP
Build Library with  Xtensa   Xplorer  IDE
Mediatek  Audio Team

## 幻灯片 2

2
Create Project
Add Source Codes
Compiler Options
Build Library
Appendix
How to find config version


Outline

## 幻灯片 3

3
Mouse right click in empty area of the project explorer.
Choose New   Xtensa C/C++ Project
Create Project

## 幻灯片 4

4
Name your project as your library name.
Project Type: Create a static library
Create   Project


## 幻灯片 5

5
Put your source codes (all .h & .c files) in the project workspace directory.
For example:  demo_exp.h  &  demo_main.c
Add Source Codes

## 幻灯片 6

6
Choose the project and press F5 to refresh for new added source codes.
Mouse right click on the project to choose build properties.
Build Properties

## 幻灯片 7

7
Target can choose “Debug”, “Release”, “ ReleaseSize ”, “ CommonTarget ” or add your own target for different compiler options.
Current audio HiFi3 compiler options in general: -O3  -Wall  - mcoproc   - Werror   - mlongcalls   - LNO:simd   - ffunction -sections  - fdata -sections  - Wno -error=format
Press “Apply”
Compiler Options

## 幻灯片 8

8
Compiler Options: Optimization Tab

## 幻灯片 9

9
Compiler Options: Warnings Tab

## 幻灯片 10

10
Compiler Options: Addl compiler Tab

## 幻灯片 11

11
Compiler Options: Compiler Variant
Choose compiler type
xt -clang is recommended for security concern

## 幻灯片 12

Choose P (Project), C (Configuration), T (Target), and then press “Build Active”
For example, P:libdemo, C:hifi3_prod_v5_RI_2019_1, T:Debug
If you want to rebuild the library, you can “Clean Active” and then “Build Active”, or just “Rebuild Active”.
Console will show if this build is “successful” or not.
Start to Build Library


12

## 幻灯片 13

13
Get Your Library

## 幻灯片 14

Find Readme under  Aurisys_exe_V1.21XX.01\CONFIG\ HiFiX

Appendix – H ow to find config version
14

## 幻灯片 15




---
# SRC0310 ADSP_Profiling_Guideline.docx

来源：DOC\ADSP_Profiling_Guideline.docx

SHA-256：90b2c4a7857eb889f580ea9275949ad562ef484ade3ea2b1b5662568423d772d

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0310.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 正文（不对应打印页码） 1


























A DSP Profiling Guideline A DSP Profiling Guideline
A DSP Profiling Guideline
A DSP Profiling Guideline


Version: 1. 2
Release date: 2026-05-21










MediaTek Confidential A MediaTek Confidential A
MediaTek Confidential A
MediaTek Confidential A


Version  History
Version
Date
Description
1.0
2022-06-06
O fficial release
1.1
2 024-01-23
A dd Task loading Important note. (2.1)
Add  Compatibility  information  o f (2.2), (2.3 )
1 .2
2 024-08-07
U pdate Ftrace sections (2.2)
1.3
2026-05-21
Update  DX-3/4/5  platform information in Table 1.1   DSP Clock Rate and Suggested Memory Latency Settings
MediaTek Confidential A MediaTek Confidential A
MediaTek Confidential A
MediaTek Confidential A

Table of Contents
Version History 2
Table of Contents 3
1 SW Lib Profiling on Simulator (Xtensa Tool) 4
1.1 Overview 4
1.2 Settings 4
1.2.1 Memory Latency 4
1.2.2 DSP Clock Rate and Suggested Memory Latency Settings 5
1.3 Pre-Fetch Options 5
1.4 Profile Output 6
1.4.1 MCPS 6
1.4.2 Memory Profile 6
2 Profiling on Target 8
2.1 Task Loading Monitor 8
2.1.1 Command and Step 8
2.2 FTrace 9
2.2.1 Environment Requirement 9
2.2.2 Trace & Parse data 9
2.2.3 Tool of Visualization 10
2.2.4 How to profile 12
2.3 Cycle Counter 14


List  of  F igures
MediaTek Confidential A MediaTek Confidential A Figure 1.2.1 1.  Profile Configurations 4
MediaTek Confidential A
MediaTek Confidential A
Figure 2.1.1 1.  Task Loading Profiling Result 8
Figure 2.2.3 1 Navigation of Perfetto 10
Figure 2.2.3 2 Visualization by Perfetto 11
Figure 2.2.3 3 Visualization by Gtkwave 11
Figure 2.2.3 4 The State of waveform 11
Figure 2.2.4 1 Sheet of Result All 13
Figure 2.2.4 2 Sheet of Result by 100ms 13
Figure 2.2.4 3 the profile result show in adsp_profile UI 14


List of Tables

Table 1 1. DSP Clock Rate and Suggested Memory Latency Settings 5


SW Lib Profiling on  S imulator  (X tensa   Tool )
Overview
     T o better allocate DSP resources and choose configurations, we need to learn the resource requirements of each program executes on the DSP. Such as how much time spent and how many data transferred during the executions.
    Tensilica provides Xtensa instruction set simulator (ISS)  which can directly generate the profile data.  I n this document, we’ll provide memory settings (including memory access latency and pre-sfetch options) on the Xtensa ISS. Please follow the setting and provide the results to MTK so that we can analyze the profiling data and then find the best configurations.
    The detailed information of the Xtensa ISS can be found in the reference document provided by Tensilica: “gnu_profiler_ug.pdf”.
Settings

Figure  1.2.1 1 .  Profile Configurations
Memory Latency
     In out DSP system, if the program is executed on DDR, there would be an access latency when cache miss happens: 
The memory waitstate cycles in the figure above  
When  cache miss happens, the DSP would issue a request to the Bus to get the desired data
The memory waitstate cycles means how many DSP cycles it needs to wait until it can get the first data into cache from the Bus. 
The repeat block waitstate in the figure above
When the 1 st  data starts to be transmitted, there still a memory latency during the transmission
I t is due to  the DSP clock rate is higher than the Bus clock, the latency is repeat block waitstate
     Generally, if the clock rate is M MHz, and the average cache miss latency is N us, then the  memory waitstate cycles  would be M x N DSP cycles . We usually want to know the ZWS   and w/ memory latency condition. The ZWS (Zero-Wait-State) means there is not any memory latency, it indicates how many computing resource required by the algorithm itself.
Zero-Wait - State
1. Setting:
Memory Waitstates: both read & write: 0
Repeat Block Waitstates: both read & write: 0
2. Command line Mode: 
--mem_model --mlatency=0 --blockrepeat=0 --write_delay=0 --write_repeat=0
With Memory Latency
1. Setting:
Memory Waitstates: both read & write:  DSP clock rate(M MHz) * memory latency (N us)
Repeat Block Waitstates: both read & write:  4
2. Command line Mode: 
--mem_model --mlatency= MxN  --blockrepeat= 4  --write_delay= MxN  --write_repeat= 4
DSP Clock Rate and Suggested Memory Latency Settings
T able  1 1 . DSP Clock Rate and Suggested Memory Latency Settings
Platform
Clock Rate
Memory Latency
DX-1, DX-2, DX-P , DX-3, DX-4
800 MHz
0.75 us
DX-5
800   MHz
0.8 us
D1200, NextA2, 22H
750 MHz
0.75 us
NextA, NextD
750 MHz
1 us
Pre-Fetch Options
    Tensilica DSP provides prefetch aggressiveness options. The more aggressive, the more memory bandwidth.  O n the contrary , we can reduce the computation resources. 
Setting
As the above figure, use additional argument (such as command line mode)
--mem_model  --prefetch=0x4 8
The first number  “ 4 ”  is aggressiveness of ICache, while  the 2nd number “ 8” is aggressiveness of DCache; 
The default aggressiveness value is 4, and the max value is 8
To Profile
Default (0x44)
--prefetch=0x48
--prefetch=0x84
--prefetch=0x88
Profile Output
Please provide the following information based on the configurations above or provide the complete logs.
MCPS
Required Information
Average MCPS
Peak MCPS
Total Frames
Frames per Second
Example: 

Memory Profile
By the memory access profile logs, we can calculate the total memory bandwidth required by the algorithms.  The total bandwidth would be total PIFs x 8 bytes.  Then you can calculate the memory bandwidth (MB/s) according how many frames you sampled. For example, if we profile a decoder with 5 frames which is 20ms per frame, and the total data transferred is 100MB. Then the memory access bandwidth would be 100/(5*0.020) = 1000 MB/s


Profiling on Target
Task Loading Monitor
To monitor the loading of each task.
IMPORTANT NOTE:   it is  normal if it causes pop noise when call “runtime_status_stop” command  because  this command parse information to memory .  I t may  block  the others  task and   generate pop noise .
Command and Step
Enable the scenario you want to profile
For example, if you want to profile the phone call scenario, just setup a phone call and starts to talk.
Configurations :  Set the period per profiling sample (50ms~10000ms)
adb shell "echo runtime_status_ set_period   1000  > sys/kernel/debug/audiodsp0"
period 1000 means 1000ms per sample
audiodsp0 means the DSP of single DSP platform   or t he DSP 0 of multiple DSP platform
adb shell "echo runtime_status_ set_period   1000  > sys/kernel/debug/audiodsp 1 "
a udiodsp1 means the DSP 1 of multiple DSP platform
Configurations :  Set the samples (5 samples~200 samples)
adb shell "echo runtime_status_ set_samples   100  > sys/kernel/debug/audiodsp0"
samples 100 means total profiling samples is 100
adb shell "echo runtime_status_ set_samples   100  > sys/kernel/debug/audiodsp 1 "
Start to profile
adb shell "echo runtime_status_start > sys/kernel/debug/audiodsp0"
adb shell "echo runtime_status_start > sys/kernel/debug/audiodsp1"
S top recording
adb shell "echo runtime_status_stop > sys/kernel/debug/audiodsp0”
adb shell "echo runtime_status_stop > sys/kernel/debug/audiodsp1
Showing the profiling results
adb shell “cat sys/kernel/debug/audiodsp0"
adb shell “cat sys/kernel/debug/audiodsp1"
T he result would be:

Figure  2.1.1 1 .   Task Loading Profiling Result
FTrace
Ftrace is a highly recommended tool for performance analysis, it records complete CPU scheduling and logs the current state of each task.   There are currently two versions available.  The new  version  ( V er. 2)  primarily supports platforms after DX4. For earlier platforms, please use the older V er. 1 version.

The main difference between the two is that the new version uses Google's Perfetto tool for  visual  representation and can record files up to 1GB in size, allowing for over a minute of recording. The old version uses the gtkwave tool for visualization and can record up to a maximum of 10 seconds.

L imitation:  The debug feature is only  enabled in  engineering  and  user-debug  builds . It is not enabled by default in user builds due to security reasons.

Compatibility :  This tool only for ADSP(HIFI) series.   The V e r. 2 is supported on  “ Android V (vendor) + kernel 6.6 ” .

Environment Requirement
Python 3.X  ( https://www.python.org/downloads/ )
Python  P ackage
V1: pyvcd ( https://pypi.org/project/pyvcd/ )
V 2: pandas
Trace & Parse  data
Note:  The tool includes an 'ADSP Tracer & Profile Quick Guide.pptx' file that provides a Quick Guide.

General Step-By-Step
Insert the USB and ensure adb is usable.
Run  start_adsp_tracer.bat .  (Run  start_adsp1_tracer.bat  , if another core1)
Execute the scenario that needs profiling.
Follow the command prompt to stop tracing.
For the  old  version: Generates adsp_trace.vcd and  automatically opens  gtkwave.  For the  new  version: Generates  adsp_ f trace.json , which needs to be imported into the Perfetto UI tool for analysis.

Figure   2.2.2 1 .  Run start_adsp_tracer.bat  
For ADSP Another Core, please use the corresponding other batch file within the tool.
The  V e r. 2  includes a batch file specifically for the 'unplug USB' scenario.
Tool of  V isualization
Perfetto UI (V er. 2)
O pen url by Brower ( https://ui.perfetto.dev/ )
O pen Trace File of “ adsp_ f trace.json ”   which generated from previous step.

Figure  2.2.3 1  Navigation of Perfetto
Use keyboard “W” / “ S ”   to zoom in / out, and keyboard “A” / “D” to pan left/right
U se keyboard “?” to get help for more Perfetto keyboard shortcuts.

Figure  2.2.3 2   Visualization by Perfetto
Gt kwave (V er. 1)
A utomatically opens  after parsing data

Figure  2.2.3 3  V isualization by  Gtkwave

Figure  2.2.3 4  The State of waveform
H ow to profile
Perfetto UI (V er. 2)
Get the  start time  &  end time  from Perfetto.

Replace the time in  Peffetto_SQC.txt  and copy to Perfetto SQC command.
Keyboard “Ctrl + Enter” to run query and show in Query  r esult.









P ython Script (V er. 2 )
T his script needs ” adsp_trace.txt”  file  which generate from  previous step.
Run start_adsp_profile_by_tracetxt.bat (or drag adsp_trace.txt to batch)
O utput file is  “profile_result.xlsx”
The "Result All" sheet shows the percentage of occupancy and MCPS over the entire period.
The "Result_by_100ms" sheet displays the percentage of each task at every 100ms interval.
You can use Excel tools to create various types of charts for presentation.

Figure  2.2.4 1  Sheet of Result All

Figure  2.2.4 2  Sheet of Result by 100ms





P ython Script (V er. 1)
This script needs ”adsp_trace.txt” file which generate from previous step.
Run start_adsp_profile_by_tracetxt.bat (or drag adsp_trace.txt to batch)
It will open the ADSP Profile UI, where you can enter the time segment you want to observe and press GO. The results will be displayed in the UI and automatically copied to the clipboard.  

Figure  2.2.4 3   the profile result show in  adsp_profile UI
Cycle Counter
Compatibility : This tool only for ADSP(HIFI) series

Use cycle counter to check how many cycles consumped in a specified region. Note that if there is context witch happens, the counter is still accumulated. If possible, use critical section to avoid context switch so that the cycle count would be precise.
start_ccount = xthal_get_ccount();   (get the cycle count in beginning of the region)
stop_ccount = xthal_get_ccount();   (get the cycle count in end of the region)
Print stop_ccount – start_ccount in adsp log


---
# SRC0311 Audio DSP - HiFi3 Debug Tools_V1.1.0.pptx

来源：DOC\Audio DSP - HiFi3 Debug Tools_V1.1.0.pptx

SHA-256：73017e080213282a99eab3dbd6544c9342d37e8d34a140efa74a2ed463fe1924

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0311.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1

2019/1/7
Hifi3 Debugging Tools

## 幻灯片 2

Debug Items
2
Basic function
UART   (useful!)
Logger   (useful!)
CFGREG Dump
ADSP JTAG
System SW debug
Monitor
Task monitor   (useful!)
Heap Management Tool
Timestamps
Assert
Exception Handler   (useful!)
Stack overflow /  Malloc  failed hook
Dump
TRAX
XT-GDB Dump  (useful!)
Debug Dump  type   (useful !)
Debug  Command  (useful!)
System  img  debug
xt-objdump
Audio Related
Audio PCM Dump   (useful!)
Audio Utilities
HEAP : AUDIO_CHECK( ptr )
LOCK : MTK_AUDIO_LOCK_ENABLE_TRACE
AUDIO IPI :  print_msg_info
IPI DMA :  DUMP_REGION
RINGBUF SW: DUMP_RINGBUG
RINGBUF HW dump function

## 幻灯片 3

Basic function
3
Uart
uart2 : 921600
CFG_UART_SUPPORT = yes (default =no for performance)
align kernel timestamp 
  CFG_KERNEL_TIMESTAMP_SUPPORT =yes
print AP suspend info 
use  freeRTOS  tick to continue timestamp, timestamp will retrograde after AP resume.

## 幻灯片 4

4
Uart
With  printf  function,  AUD_LOG_V will not print log








  Runtime disable/enable  uart  output  (ADSP should be active to received command)
	 adb  shell "echo 1 > /sys/class/misc/ adsp / adsp_uart_switch "  
	 adb  shell "echo 0 > /sys/class/misc/ adsp / adsp_uart_switch "  


System print
Audio Feature print
PRINTF_D
AUD_LOG_D
PRINTF_I
AUD_LOG_I
PRINTF_W
AUD_LOG_W
PRINTF_E
AUD_LOG_E

## 幻灯片 5

5
ADSP Logger
Linked in  MTKlogger
/ sdcard / mtklog / mobilelog / adsp_log_xxx _

ADSP   EE   log
Triggered by user  cmd  
/sys/class/misc/ adsp  #  cat  adsp_A_db_test  
Triggered by system exception ( EE & Kernel API )
SYS_ADSP_DUMP in db file
ELF header
ITCM
DTCM
reserved
hifi3  cfgreg
dram(system)
hifi3 core  reg
Dram
( shared  mem )
SYS_ADSP_DUMP composition 

## 幻灯片 6

6
ADSP   EE   Format

" aud_pla ":  the name of Hifi3 task in which exception is happened.  
If the exception is caused by ASSERT, the filename and line information will be shown in  aee  screen and __ exp_main.txt  in db.
  SYS_ADSP_DUMP can see the ADSP Last Log

## 幻灯片 7

7
ADSP CFGREG dump
Runtime check Hifi3  config  register
adb  shell cat /sys/class/misc/ adsp / adsp_A_reg_status
All the Hifi3  config  register will be dumped
	to SYS_ADSP_DUMP in  aee  db file when
	 AEE exception is triggered by Hifi3 WDT.



## 幻灯片 8

8
ADSP JTAG (Currently only available at EVB board )
JTAG HW setup (Use Flyswatter2 as ADSP JTAG)
EVB need Rework, please find corresponding SA
Set GPIO to ADSP_JTAG Mode for JTAG 


## 幻灯片 9

9
JTAG SW setup
Xplorer   Download  and installed  Xtensa  OCD Daemon 12.0.6
Set Debug Target Configuration


## 幻灯片 10

10
Set Debug Configuration


## 幻灯片 11

11
Debug window





## 幻灯片 12

System SW debug
12
TASK Monitor
Total Heap status
Task status
State
'B' - Blocked
'R' - Ready
'D' - Deleted (waiting clean up)
'S' - Suspended, or Blocked without a timeout
Stack
The lower number the less free space.





## 幻灯片 13

Heap Memory Management Tool
Extend from  FreeRTOS  (heap_4.c  only)
Feature 1:  Monitor heap memory  usage
Combine Task Monitor, Monitor each time slice memory usage.

Feature 2 : Detail information of allocate  memory
Command, dump detail information of each allocate block 



## 幻灯片 14

Feature 1: Monitor heap memory  usage
#define  configUSE_MALLOC_MEMORY_USAGE   ( FreeRTOSConfig.h )
Audio is playing
Audio stop (idle)


Heap usage by each task

## 幻灯片 15

Feature  2 : Detail information of allocate memory
Triggered in  vApplicationMallocFailedHook
 Need combined with Feature 1  (both set in  FreeRTOSConfig.h )
# define  configUSE_MALLOC_DEBUG_MSG_LEN      32
Memory header point
size
task
File : line

## 幻灯片 16

16
TimeStamps
IPI
CFG_IPI_STAMP_SUPPORT
Record each  ipi  id send/ recv  success count
IRQ
set_irq_limit (1)   default  3 ms,  if over threshold, print error  msg
Task function process
Audio_task_utility
init_time_interval ( int  id , unsigned long  long   thresholdns )
record_time_interval ( int   id );   warning if the function process time over  thresholdns .
stop_time_interval ( int   id );







## 幻灯片 17

17
Exception Handler
Through ADSP  Uart
Dump stack register
Feed in  Xt-gdb  to trace 
Exception cause and address
  epc
exccause
excvaddr



## 幻灯片 18

18
Malloc  Failed
vApplicationMallocFailedHook (void)
Stack overflow
vApplicationStackOverflowHook ( xTaskHandle   pxTask , char * pcTaskName )
Check when  Task context switch
Can reference on  Task Monitor Stack  status

Above Errors will trigger system Assert (WDT) to info AP


## 幻灯片 19

19
TRAX 
Xtensa  provided, record  function execution  flow (no data info)
TRAX enable  method :
adb   cmd
  AP   sends  IPI_TRAX_ENABLE to trigger DSP enable/disable TRAX.
  cd  sys/class/misc/ adsp
 echo 1 >  adsp_A_trax .   (start record)
 echo 0 >  adsp_A_trax .   (stop record)
cat  adsp_A_trax



## 幻灯片 20

20

Analyze trace data by  Xplorer  (0)

## 幻灯片 21

21

## 幻灯片 22

22

## 幻灯片 23

23
GDB DUMP  (Useful to debug!)
Use AEE db file to show more debug info

Get Tools:  (version 3.0 , for mt6779 only )
Aurisys_exe_Vxxxxxxx \TOOL\HiFi3
decompress the tools to the  linux  server
tar - jxv  -f hifi3_debug_tool_v3_181217.tar.bz2
add tools path to the  bashrc
vim . bashrc
export PATH=$PATH:/ proj / mtkxxxx /hifi3_debug_tool/ XtensaTools /bin


## 幻灯片 24

24
Preparation : Put  files into the hifi3_debug_tool folder

SYS_ADSP_DUMP  : decompress the db file, copy out the "SYS_ADSP_DUMP"
ex: TagLog_2010_0101_001217_EE\db.01.EE\20180511_172021_386\db.01.EE.dbg.DEC\SYS_ADSP_DUMP
hifi3_a.elf  : which is in the out folder, copy it out too.
partial_build  : 
	 $(alps)\vendor\ mediatek \proprietary\ tinysys \ freertos \source\ tinysys-scp_out \ freertos \source\HIFI3_A\hifi3_a.elf
full_build  : 
	 $(alps)\ out \target\product\$(project)\ obj \TINYSYS_OBJ\ tinysys-adsp_intermediates \ freertos \source\HIFI3_A\hifi3_a.elf

Official load :
	\ ALPS_symbols \{branch name}\ {branch tag}\{project}. out.symbols \alps\out\target\product\{project}\ obj \TINYSYS_OBJ


## 幻灯片 25

25
Basic CMD
python  XtensaTools /bin/ split_coredump   SYS_ADSP_DUMP
xt-gdb
( xt-gdb ) source script.txt

(Optional) ADSP Boot up exception
Check the stack address:  (0x4ffb0d70 is just example here)
Log or  Uart  :
Key word : "[8.342](A)  Stack Dump address : 0x4ffb0d70"
Xt-gdb
( xt-gdb ) print  pExceptionContext
$1 = ( ExceptionContext  *) 0x4ffb0d70 <exceptionContext_109>
Use  split_coredump  with parameter of address at register file
split_coredump  SYS_ADSP_DUMP  0x4ffb0d70

GDB Split contents
DTCM :  Internal data memory
ITCM:  Internal code memory
CFG_REG :  Config  register dump
Log :   last log for debug
Register : hifi3 core registers.
SYS_Dram  : for system memory




## 幻灯片 26

26

Basic GDB  cmd  for back trace, other  gdb   cmd  please  use help to check 
$ python  split_coredump  SYS_ADSP_DUMP
$  xt-gdb
$ ( xt-gdb ) source script.txt
$ ( xt-gdb ) Info threads
$ ( xt-gdb ) thread n
$ ( xt-gdb )  bt

[Customer Notice]
Thread-info supported after  RG-2018.9 
If the version before RG-2018.9  ,  do the below flow.[N1]

## 幻灯片 27

GDB Dump
27


## 幻灯片 28

Debug Dump  type
28
Dump type
Hifi3  in Exception  (EE)
Kernel API
KE reboot
HW reboot
CFG  reg
Y
Y
Y
N
I/D TCM
Y
Y
Y
Y
Core  Register
Y
?
N
N
Dram
Y
Y
N
N
Debug Tool
Xt-gdb
Xt-gdb
Check CFG  reg
Check ITCM
Check DTCM
Check ITCM
Check DTCM
Version
Legacy
Legacy
From  p0.mp3.p60
From p0.mp3.p74
FileName
SYS_ADSP_DUMP
SYS_ADSP_DUMP
SYS_EXTRA_ADSP_RAW
SYS_ADSP_COREDUMP

## 幻灯片 29

Debug method
29
Xt-gdb : (with  split_coredump )
Backtrace (if no core register dump, useless),  View all data ,  adsp   log
Check CFG  reg
PC & SP & IRQ &  Internal CLK  CG & exception  addr  &  cause &  BUS monitor info .
Check  ITCM
Check the instruction memory whether occur memory corruption? 
Check  DTCM
ADSP_A_OSTIMER_BUFFER ( ADSP_A_DTCM_SHARE_BASE - 0x0040)     
Check current  Ostimer  time
ADSP_A_IPC_BUFFER              (ADSP_A_DTCM_SHARE_BASE - 0x0280 )
Check  ipi  last send/ recv  to share buffer
ADSP_A_SYS_STATUS              (ADSP_A_DTCM_SHARE_BASE - 0x0688 )
Check  hifi  status (reset, sleep, suspend, active)  USEFUL!
ADSP_BUS_MON_BACKUP_BASE (ADSP_A_DTCM_SHARE_BASE - 0x0744 )
Check whether occur bus hang & latched R/W  addr
ADSP_INFRA_BUS_DUMP_BASE  ( ADSP_A_DTCM_SHARE_BASE - 0x07E4 )
Check whether occur infra bus hang    

## 幻灯片 30

Debug  Command
30
These command can help you to dump some  adsp  system message or do some  profiling
Before use debug command, you need to check the  "CFG_DEBUG_COMMAND_SUPPORT = yes "  in  adsp   platform.mk

Write the command to  adsp  
adb   shell "echo  %command%   %variable%  > sys/kernel/debug/ audiodsp “
Ex:
         adb   shell "echo  cmds  > sys/kernel/debug/ audiodsp “

Read the result in the memory and show it on user  space 
adb   shell "cat sys/kernel/debug/ audiodsp ”



## 幻灯片 31

31
Class
%command%
%variable%
Help
Result in memory
help
cmds
N
show the support commands (some of command isn't support with compile option)
Y
dvfs
dvfs_dump
N
show the system feature/ swip   mcps  information show the  dvfs  ( vore ,  ddr_rate ,  cpu   freq ) information
Y
Task
monitor
task_monitor_start
[option]  time_ms
start or re-start task monitor with  time_ms , it can change the task monitor period (>=50ms)
N

task_monitor_stop
N
stop task monitor
N

task_monitor_dump
N
show the task monitor result in user space
Y
Trace
trace_start
N
start trace the event when task context switch
N

trace_stop
N
stop trace function and show the result
Y

## 幻灯片 32

System  img  debug
32
Get HiFi3 Assembly Code From Object File
Use the "xt-objdump.exe" tool.
Tool path: D:\usr\xtensa\XtDevTools\install\tools\RG-2017.6-win32\XtensaTools\bin
Command  : (you can try other flag to gain more info from  obj  file,  xt-objdump  --help  )
xt-objdump.exe -- xtensa -core= hifi3_xxx   -d   "object file name"  >  "assembly code file name"
example: xt-objdump.exe -- xtensa -core=hifi3 -d bqriirf_df1_hifi3.o > bqriirf_df1_hifi3_asm.txt









## 幻灯片 33

Audio Related   Debug
33
Audio   PCM   DUMP
Enable/Disable method
adb  shell  setprop   vendor.streamout.dsp.dump   1
adb  shell  setprop   vendor.streamout.dsp.dump   0
Use IPI +  dma  to transfer data back








Dump file position
/ data/vendor/ audiohal / audio_dump /
driver implement code

## 幻灯片 34

34
HEAP :
AUDIO_MALLOC( sz )
AUDIO_CHECK( ptr )
AUDIO_FREE( ptr )

LOCK :
MTK_AUDIO_LOCK_ENABLE_TRACE    (Local  config )








 













size
0x55
0x66

pxNextFreeBlock
p_head
p_tail
Check head & tail value 
[132.141](A) [E][ALOCK] 0x6a088700: lock(( mAurisysLibManagerLock ), 1000),  audio_task_audplayback.c ,  CreateAurisysLibManager (),  691L  FAIL!!  retval : 4294966221, try to lock when [131.141]
[132.143](A) [E][ALOCK] 0x6a088700: 
========================= dump(+) =========================
[132.144](A) [E][ALOCK] 0x6a088700: time [131.141], lock(( mAurisysLibManagerLock )),  audio_task_audplayback.c ,  CreateAurisysLibManager (),  688L    
[132.145](A) [E][ALOCK] 0x6a088700: 
========================= dump(-) =========================
[132.146](A) AUD_WARNING(lock timeout!!): "drivers/common/audio/tasks/ audplayback / audio_task_audplayback.c ", 691L
[132.147](A) [ASSERT] task:aud_pla,file:drivers /common/audio/tasks/ audplayback /audio_task_audplayback.c,line:691

First place to acquire lock

## 幻灯片 35

35
AUDIO IPI  : 
void  print_msg_info (const char * func_name ,  const char * description , const  struct   ipi_msg_t  * p_ipi_msg );

audio_send_ipi_msg_to_kernel ()
Print  ipi   msg  when send fail



## 幻灯片 36

36
RINGBUF SW: 
DUMP_RINGBUG(LOG_F, description,  rb , count)
DUMP_RINGBUG( AUD_LOG_W , " underflow ",  rb , count);
RINGBUF HW 
Check  funcion


dump function










## 幻灯片 37

37
IPI DMA : 
AUD_DMA_READ( scp_buf ,  dram_addr , size)
AUD_DMA_WRITE( dram_addr ,  scp_buf , size)
Check if in ISR
Check  scp_buf  address should be 128byte aligned
 DUMP_REGION(LOG_F, description,  p_region , count)
 DUMP_REGION( pr_notice , " read_idx  fail ",  region , count);
Dump region info as  ringbuf  



---
# SRC0312 AudioDSP_Capability.docx

来源：DOC\AudioDSP_Capability.docx

SHA-256：061674ce0b10243e0aa7f266c3a090efb0275977d26e788c4004063c60ce83e1

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0312.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 正文（不对应打印页码） 1















Audio DSP Capability
Audio DSP Capability













Version: 1 . 0
Release date: 2026-05-22

©  2014  -  2026 MediaTek Inc.
This document contains information that is proprietary to MediaTek Inc.
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.

Specifications are subject to change without notice.


Document  Revision History

Date
Author
Description
2018/8/20
Doug Wang
Add P 9 0 Audio DSP Capability
2019/02/26
Doug Wang
Rename P80 to P90 and Add G90
2019/08/25
Doug Wang
Add 5G-L /H  Audio DSP Capability
2019/10/31
Doug Wang
Update available MCPS
2019/12/20
Doug Wang
Add  the  suggested feature set of each project
Add 5G-A/A+ Audio DSP Capability
2019/03/19
Doug Wang
Add 5G-B Audio DSP Capability
20 20 /10/07
Celine Liu
Add Next-D/D+ Audio DSP Capability
2021/ 0 5/21
Doug Wang
Add  G96 DSP Capability
202 1/06/14
Doug Wang
Add  DX-1 and Next A2 DSP Capabilities
2021/10/29
Celine Liu
Add DX-P Capability
2 022/11/18
Y uying Lin
Add DX-2 Capability  and update toolchain version
2023/03/01
Y uying Lin
Up date 22H  Capability
2 023/11/0 7
J ung-wei Chen
U pdate   23P and DX-3 Capability
2 024/05/20
Jung-wei Chen
Update  24M and  DX- 4  Capability
2024/07/ 16
J ung-wei Chen
U pdate DX-4 MCPS spec
2025/ 04/16
Wei-Hau Chen
Update DX-4 MCPS spec
2025 / 05 / 1 9
J ung-wei Chen
U pdate DX-5 Capability
2 025/07/07
Wei-Hau Chen
Update DX-5 MCPS spec
2026/05/19
Celine Liu
Add 24Ms and 26M Capability
2026/05/ 21
Jung-wei Chen
Update 26M MCPS spec


Table of Contents
Document Revision History 2
Table of Contents 2
1 Overview 5
1.1 Hardware Classification 5
1.2 Memory Config (per Core) 6
1.3 Software Feature Capability 7
1.4 HW IP Capability 7
2 Cadence HiFi Series 8
2.1 Overview 8
2.2 P90 9
2.2.1 Structure 9
2.2.2 Hardware Spec 9
2.2.3 Software Capability 10
2.3 G90/G96 11
2.4 5G-L / 5G-H / 5G-H+ / Next-D / Next-D+ 12
2.4.1 Structure 12
2.4.2 Hardware Spec 13
2.4.3 Software Capability 13
2.5 5G-A / 5G-A+ 14
2.6 5G-B / Next-A / Next-A2 / 22H 15
2.7 23P / 24P 16
2.8 DX-1/ DX-P 16
2.9 DX-2 / DX-3 / DX-4 16
2.9.1 Structure 19
3 MTK In-house RV Series 21
3.1 DX-5 21
3.1.1 Structure 21
3.1.2 Hardware Spec 21
3.1.3 Software Capability 22
3.2 24M 24
3.2.1 Structure 24
3.2.2 Hardware Spec 25
3.2.3 Software Capability 25
3.2.1 Hardware Spec 28
3.2.2 Software Capability 28
3.3 25Ms/ 26M 31
Structure 31
3.3.1 31
3.3.2 Hardware Spec 31
3.3.3 Software Capability 32




Lists of Tables and Figures

找不到圖表目錄。
Figure 2 1. P90 HiFi3 DSP Structure 7
Figure 2 2. 5G-L/H HiFi3 DSP Structure 11
Figure 2 3. DX-2 HiFi5 DSP Structure 19
Figure 2 4. DX-4 HiFi5 DSP Structure with NNE 19
Figure 3 1 DX-5 RV DSP Structure with TinyDLA 23

Overview
Hardware Classification
DSP
Core Number
Power Domain
Project
HiFi3
Single Core
VCore
(If the DSP is not under low power mode, the voltage of  VCore  would be raised; since there’re other modules also locate in  VCore , the power loss would be considerable)
P90
G90
G96
HiFi3
Single Core
Independent Power Domain
5G-B
Next-A , Next-A2
2 2H
HiFi3
Dual Core
(not support SMP, only AMP)
Independent Power Domain
5G-L / 5G-H / 5G-H+
5G-A / 5G-A+
Next-D   / Next -D+
2 3P
DX-1/ DX-P
H iFi5
Dual Core
(not support SMP,  only AMP)
Independent Power Domain
DX-2  /  DX-3  / DX-4
RV55 V
Dual Core
(not support SMP, only AMP)
Independent Power Domain
DX-5
RV55
Single Core
VLP , under the same  subsys  with SCP
24M
RV55
Single  Core ( Dual-core  SMP affinity with SCP)
VSCP
25Ms, 26M
Memory Config (per Core)
I-Cache (KB)
D-Cache (KB)
L 2Cache (KB)
I-TCM (KB)
D-TCM (KB)
L2TCM (KB)
Project
32
64
N/A
36
32
N/A
P90 / G90 
5G-A / 5G-A+ / 5G- B  /  5G-L /5G-H / 5G-H+
Next-D / Next-D+ / Next-A
16
64
N/A
36
32
N/A
G96
64
128
N/A
36
32
N/A
Next-A2/ DX-P / 22H / 23P
64
128
N/A
256
32
N/A
DX-1
64
128
N/A
36
32
512
DX-2
64
128
N/A
36
64 (32 for NNE)
768
DX-3 / DX-4
64
64
512
N/A
N/A
896
DX-5
32
32
128
N/A
N/A
1024
24M
32
32
256 (shared with SCP)
N/A
N/A
1024
25Ms, 26M

Software Feature Capability
Project
Speech Enhancement
SmartPA
Audio Effect
Concurrency
5G-L/H/H+
5G-A/A+
Next-D/D+
DX-1/DX-P/DX-2/DX-3/DX-4/DX-5
3-mic Speech Enhancement
2 x  SmartPA
Yes
Concurrency of speech and Audio Effect
P90/G90/G96
5G-B
Next-A/Next-A2
23P
2-mic Speech Enhancement
1 x  SmartPA
Yes
No concurrency of speech and Audio Effect
24M / 25Ms / 26M
2-mic Speech Enhancement
1 x  SmartPA
No
No concurrency of speech and Audio Effect

HW IP Capability
T he following table only lists the HW capability for  the  Cadence HiFi series. For  the  HW c a pability of MTK In-house RV s e ries, please contact MTK MDSP RV team for  details .

H iFi3
H iFi5
L oad/Store
S ingle 64bit
D ual 128bit
V LIW Slots
3
5
F ixed Point  MAcs
3 2x32
2
8

3 2x16
4
1 6

1 6x16
4
1 6
F ixed Point NN MACs
16x16
N one
1 6

16x8, 16x4, 16x2, 8x8
None
32
F loating-Point  MAcs
Single Pre cisi on
2 -way
D ual 4-way

Half Precision
N one
D ual 8-way

Cadence HiFi  Series
Overview
The HiFi  Series  Audio DSP featu res improved DSP performance  on post /pre-processing  kernels . The  3-issue architecture is very e fficient, using the three  slots only  when necessary and avoidin g the bloat of traditional  VLIW architectures .  It  s upports standard 32-bit C code an d direct support for common  ITU operations  for even simpler programming .
4 MAC 24 and dual  32 bit  architecture
Four MACs operate as four 24x24, four 32x 16,two  32x32, or two 32x24 depending on that’s required for  thealgorithm
64-bit load/store unit
3 VLIW slots
Integrated 2- way SIMD VFPU
P 90
Structure

Figure  2 1 .  P 9 0 HiFi3 DSP Structure
Hardware Spec
The  basic information   about   the  P 9 0 Audio DSP  is  summarized as follows:
TCM (Tight-Coupled Memory, Internal Memory)  
I-TCM (Instruction):  36KB
D-TCM (Data):  32KB
The TCM is used for RTOS and system service.  So  it is not allowed for the use of Audio/Voice algorithm.
Cache
I-Cache:  32KB , 2-way  Associativity
D-Cache:  64KB , 4-way  Associativity
Cache Line Size:  128 Bytes
Clock Rate
Low Power Mode:  466 MHz
Normal Mode:  700 MHz
Programmable DMA (burst of 16-bit) for DSP supported to transfer data to/from external memory
Support 4  DMA  channels , that we can start 4 DMA transactions  simultaneously
We ’ ve provided an API to trigge r DMA
External Memory and Devices
DRAM: it can access data on DRAM by DMA or by  CPU  directly  (through Cache) .
AudioSys : it is through a dedicated BUS, which don ’ t need to go through EMI . The DSP can access hardware registers and S RAM of the  AudioSys  without  constrain s .
Software Capability
RTOS and System Services
RTOS  
Free-RTOS
DVFS
Scenario Based. We ’ ve established a MCPS table for each feature, once a feature is enabled, the required  MCPS  will  be added. Then we ’ ll choose a suitable  DSP frequency  to execute the features.
Debug  Tools
Logging  –  UART log, and MTK Logger
Coredump  Extractor
Audio Dump –  capture  PCM dump before/after processing. (we ’ ve provided  an  API to add  a  PCM dump in the  designated  position
PMU
Performance Monitor Unit. It can  be used to  monitor the information cache miss rate, cache hit rate, and pipeline relay,  etc ,.
Number of Performance Counters –  8
Heap Monitor  –  To  monitor  current heap usage by each task
Cadence Xtensa
Tool Chain Version -  RG2017.6 (An droid  P);  RI.2018.0  (Android Q and later version)
C Libraries  -  Xtensa C Library
Audio Features
Supported Audio Features:
Speech/Voice
Speech enhancement during VOIP call (8k~48k)
Speech enhancement during Voice call ( 8k/16k/32k )
Recording enhancement
Audio  Playback
Audio Effect
SmartPA
MCPS :
   Generally, we  need to reserve at least 10% headroom for buffer copy, system overhead, access external devices, and interaction between APMCU.  Besides, in voice call  case , t he voice codec is processed in M odem side and the speech enhancement is processed in the Audio DSP. The timing should be aligned to avoid  increasing round trip delay , so we need to reserve more headroom in voice call case.  However,  If the library can ’ t meet the requirement,  there is two solutions: 
W e need to delay 1 frame to process the data. There would be 20ms increment in the  round trip  delay.
Increase the clock rate of Audio DSP or Modem, it would have more power consumption.
Other  than voice call
Low Power Mode: 419MHz
Normal Mode:  630  Mhz
Voice call
If we add 20ms round trip latency; the available MCPS (for  total MCPS of  UL+ DL)would  be the same as other applications
Codec
Scenario
Uplink available MCPS
DL available MCPS


Low Power Mode
Normal Mode
Low Power Mode
Normal Mode
EVRCB
C2K
169.45
254.55
31.77
47.73
AMR
3G
254.18
381.82
42.36
63.64
AMR-WB
3G
254.18
381.82
42.36
63.64
AMR-WB
VoLTE
307.14
461.36
116.50
175.00
EVS-SWB
VoLTE
264.77
397.73
158.86
238.64

Since we have a hard real time constrain, if there is  other task being executed at the same time, the available MCPS of speech enhancement would be reduced. For example, in hand-free mode, if we also support  SmartPA . The available MCPS would be:


Codec
Scenario
Uplink available MCPS
DL available MCPS


Low Power Mode
Normal Mode
Low Power Mode
Normal Mode
EVRCB
C2K
169.45  - 0.5X
254.55  - 0.5X
31.77  - 0.25X
47.73  - 0.25X
AMR
3G
254.18  - 0.75X
381.82  - 0.5X
42.36  - 0.25X
63.64  - 0.25X
AMR-WB
3G
254.18  - 0.75X
381.82  - 0.5X
42.36  - 0.25X
63.64  - 0.25X
AMR-WB
VoLTE
307.14  - 0.75X 
461.36  - 0.5X
116.50  - 0.5X
175.00  - 0.5X
EVS-SWB
VoLTE
264.77  - 0.75X
397.73  - 0.5X
158.86  - 0.5X
238.64  - 0.5X
Note: 
X = MCPS of  SmartPA
We assume it’s 5ms per frame of  SmartPA , and speech enhancement is 20ms per frame. If we encounter one  SmartPA  frame during speech enhancement, the available MCPS should be reduced by 0.25 x  SmartPA  MCPS. 
G90 /G96
    The specification of G90 /G96  is the same with P90. The only difference is the toolchain version. We upgrade the toolchain because RG2017.6 does not support 64-bit build environment .
Cadence Xtensa
Tool Chain Version -  R I 201 8 . 0
C Libraries  -  Xtensa C Library
5G-L / 5G-H  / 5G-H+  / Next-D / Next-D+
Structure

Figure  2 2 .  5G-L /H  HiFi3 DSP Structure
    In 5G-L /H , we have two HiFi3 DSP  inside, thus  we can support rich feature set s .  However, we don’t support SMP structure so that we need to pre-define which feature should be executed in which DSP core.  Generally, the audio features are in one DSP core while speech features are in the other one. For example, speech noise reduction maybe in one DSP core, and speaker  protecion  is executed in the other. In this condition, there is data exchange between the two DSP:
There is core to core IPC support
Both of the DSP  can access external DDR, so they can exchange data through the EMI
The DSP can access the TCM of the other DSP
Hardware Spec
The basic information  of  each  Audio DSP is summarized as follows:
TCM (Tight-Coupled Memory, Internal Memory)  
I-TCM (Instruction):  36KB
D-TCM (Data):  32KB
The TCM is used for RTOS and system service.  So  it is not allowed for the use of Audio/Voice algorithm.
Cache
I-Cache:  32KB , 2-way  Associativity
D-Cache:  64KB , 4-way  Associativity
Cache Line Size:  128 Bytes
Clock Rate
Fix  700  MHz
Programmable DMA (burst of 16-bit) for DSP supported to transfer data to/from external memory
Support 4 DMA channels, that we can start 4 DMA transactions  simultaneously
We ’ ve provided an API to trigger DMA
The 4  ch  DMA are shared by the dual DSP cores
External Memory and Devices
DRAM: it can access data on DRAM by DMA or by CPU directly (through Cache).
AudioSys : it is through a dedicated BUS, which don ’ t need to go through EMI. The DSP can access hardware registers and SRAM of the  AudioSys  without constrains.
Software Capability
RTOS and System Services
Note that the toolchain version is  RI.2018.0
Audio Features
    The supported audio features are the same with P90/G90. The dual core structure allows us to support more features at the same time and make it possible to support 3-mic noise reduction.
MCPS  Available :  (10%  for system and  data overhead)
Other  than voice call
630  Mhz  of each DSP core
Voice call
If we add 20ms round trip latency; the available MCPS (for total MCPS of UL+ DL)would  be the same as other applications
Codec
Scenario
No Delay 20ms
Modem Side Normal Power
No Delay 20ms
Modem Side High Power MODE
Delay 20ms


UL Available MCPS
DL Available MCPS
UL Available MCPS UL
DL Available MCPS
UL Available MCPS
DL Available MCPS
EVRCB
C2K
239.4
44.1
302.4
81.9
585.9
44.1
AMR
3G
365.4
59.85
412.65
66.15
570.15
59.85
AMR-WB
3G
318.15
96.65
365.4
113.4
570.15
59.85
AMR-WB
VoLTE  (1cc)
444.15
160.65
507.15
96.65
532.25
97.65
EVS-WB
VoLTE (1cc)
365.4
239.4
381.15
223.65
532.25
97.65
EVS-SWB
VoLTE (1cc)
381.15
223.65
343.35
286.65
500.85
129.15
EVS-SWB
VoLTE  (4cc)
381.15
223.65
343.35
286.65
500.85
129.15

Note: 
Modem side high power mode means to use higher voltage so that the Modem DSP can be executed in a faster clock rate. Thus, the execution time of decoding/encoding of speech codec would be reduced. Then we can get more budget to execute speech enhancement in the Audio DSP.  However, the power consumption would be higher.
In delay 20ms case, the  proportion of  available MCPS  for  UL/DL  is  adjustable.
Since we have dual core, we assume that there is no task would be  excuted  with phone call enhancement at the same time in a core.
5G- A / 5G-A+
The specification of 5G-A is the same with 5G-L/H/H + . The only difference is  that the clock rate can be  up to 750MHz.
Clock Rate
Fix  750  MHz
Memory Config
I-Cache 32KB, D-Cache 64KB, I-TCM 36KB, D-TCM 32KB: 5G-A / 5G-A+
MCPS  Available :
Other  than voice call
675  Mhz  of each DSP core
Voice call
Codec
Scenario
No Delay 20ms
Modem Side Normal Power
No Delay 20ms
Modem Side High Power MODE
Delay 20ms


UL Available MCPS
DL Available MCPS
UL Available MCPS UL
DL Available MCPS
UL Available MCPS
DL Available MCPS
EVRCB
C2K
256.50
47.25
324.00
87.75
627.75
47.25
AMR
3G
391.50
64.13
442.13
70.88
610.88
64.13
AMR-WB
3G
340.88
103.55
391.50
121.50
610.88
64.13
AMR-WB
VoLTE  (1cc)
475.88
172.13
543.38
103.55
570.27
104.63
EVS-WB
VoLTE (1cc)
391.50
256.50
408.38
239.63
570.27
104.63
EVS-SWB
VoLTE (1cc)
408.38
239.63
367.88
307.13
536.63
138.38
EVS-SWB
VoLTE  (4cc)
408.38
239.63
367.88
307.13
536.63
138.38

5G-B  / Next-A  / Next-A2  / 22H
     The structure is the same with 5G-A, however, there is only one dsp core. (You can treat  it as remove one DSP core from 5G-A) .
Toolchain Version
5 G-B / Next-A / Next-A2
the toolchain version is  RI.2019.1  
2 2H
the toolchain version is  RI.2021.8  
Clock Rate
5 G-B / Next-A / Next-A2
Fix 750  MHz
22H
Fix  80 0  MHz
Memory Config :
I-Cache 32KB, D-Cache 64KB: 5G-B / Next-A
I-Cache 64KB, D-Cache 128KB: Next-A2  / 22H
Generally, due to cache size increase in Next-A2, the performance would be around 7% better than Next-A (the same IP requires fewer MCPS in Next-A2)
MCPS  Available :
Other  than voice call
675  Mhz  of each DSP core
Voice call
Codec
Scenario
No Delay 20ms
Modem Side Normal Power
No Delay 20ms
Modem Side High Power MODE
Delay 20ms


UL Available MCPS
DL Available MCPS
UL Available MCPS UL
DL Available MCPS
UL Available MCPS
DL Available MCPS
EVRCB
C2K
256.50  -0.5X
47.25  - 0.25X
324.00  – 0.5X
87.75  – 0.25X
627.75
47.25
AMR
3G
391.50  – 0.75X
64.13  – 0.25X
442.13  – 0.75X
70.88  – 0.25X
610.88
64.13
AMR-WB
3G
340.88  – 0.5X
103.55  – 0.25X
391.50  – 0.75X
121.50  – 0.25X
610.88
64.13
AMR-WB
VoLTE  (1cc)
475.88  – 
0.75X
172.13  – 0.25X
543.38  – 0.75X
103.55  – 0.25X
570.27
104.63
EVS-WB
VoLTE (1cc)
391.50  – 075X
256.50  – 0.5X
408.38  – 0.75X
239.63  – 0.5X
570.27
104.63
EVS-SWB
VoLTE (1cc)
408.38  – 0.75X
239.63  – 0.5X
367.88  – 0.5X
307.13  – 0.5X
536.63
138.38
EVS-SWB
VoLTE  (4cc)
408.38  – 0.75X
239.63  – 0.5X
367.88  – 0.5X
307.13  – 0.5X
536.63
138.38
X = MCPS of  SmartPA
We assume it’s 5ms per frame of  SmartPA , and speech enhancement is 20ms per frame. If we encounter one  SmartPA  frame during speech enhancement, the available MCPS should be reduced by 0.25 x  SmartPA  MCPS. 
In delay 20ms case, the proportion of available MCPS for UL/DL is adjustable;  total MCPS of  UL+DL +S martPA  should be less than 675
2 3P / 24P
The structure is the same with 5G-A,  but   the clock rate is 800M, and it has a larger I-Cache and D-Cache .
Toolchain Version  
23P / 24P
the toolchain version is  RI.2021.8  
Clock Rate
23P / 24P
Fix 800 MHz
Memory Config:
I-Cache 64KB, D-Cache 128KB: 23P / 24P
Generally, due to cache size increase in  23P/24P , the performance would be around 7% better than Next-A (the same IP requires fewer MCPS in  23P/24P )
DX-1 / DX-P
The specification of  DX-1/ DX-P   is  the same with 5G-L/H/H + . The difference is  memory  config  and  the clock rate can be  up to  800 MHz.
Toolchain Version
the toolchain version is  RI.2019.1
Clock Rate
Fix  80 0  MHz
Memory Config
I-Cache 64KB, D-Cache 128KB, I-TCM 256KB, D-TCM 32KB: DX-1
I-Cache 64KB, D-Cache 128KB, I-TCM 36KB, D-TCM 32KB: DX-P
Generally, due to cache size increase in DX-1 /DX-P , the performance would be around 7% better than 5G-A (the same IP requires fewer MCPS in  DX-1/DX-P ); besides, the 256KB I-TCM  in DX-1  can be used for reduc ing  dram access and can be used for critical functions .
DX-2  / DX-3  / DX-4
The platform  use  dual HiFi5 DSP core which has 32 8x8 NNMACs capability so that  it can support advanced NN algorithm techniques.
Toolchain Version
DX-2
the toolchain version is  RI. 2021 . 8
DX-3  / DX-4
the toolchain version is  RI.2023.11
Clock Rate
DX-2 / DX-3  / DX-4
Fix 800  MHz
Memory Config
D X-2
I-Cache 64KB, D-Cache 128KB, I-TCM  36 KB, D-TCM 32KB ,  L2-TCM 512KB
DX-3  / DX-4
I-Cache 64KB, D-Cache 128KB, I-TCM 36KB, D-TCM 32KB,  L2-TCM 768KB
MCPS Available:
Voice call
D X-2
Codec
Scenario
Normal Mode
Delay 20ms
 









UL Available MCPS
DL Available MCPS
UL Available MCPS
DL Available MCPS


EVRCB
C2K
273.6 -0.5X
50.4 - 0.25X
720
50.4 - 0.25X


AMR
3G
417.6 – 0.75X
68.4 – 0.25X
720
68.4 – 0.25X


AMR-WB
3G
363.6 – 0.5X
111.6– 0.25X
720
111.6– 0.25X


AMR-WB
VoLTE (1cc)
507.6– 0.75X
183.6– 0.25X
720
183.6– 0.25X


EVS-WB
VoLTE (1cc)
417.6 – 075X
273.6 – 0.5X
720
273.6 – 0.5X


EVS-SWB
VoLTE (1cc)
435.6 – 0.75X
255.6 – 0.5X
720
255.6 – 0.5X


EVS-SWB
VoLTE (4cc)
435.6 – 0.75X
255.6 – 0.5X
720
255.6 – 0.5X



D X- 3

RCV

MCPS SPEC (W/o  SmartPA )
MCPS SPEC (W/o  SmartPA )
MCPS SPEC (W/o  SmartPA )


UL Delay One Frame
DL Delay One Frame

UL
DL
UL
DL
UL
DL
NB (8K)
280.8
50.4
669.6
50.4
280.8
439.2
WB (16K)
385.2
68.4
651.6
68.4
385.2
334.8
SWB (32K)
446.4
190.8
529.2
190.8
446.4
273.6

SPK

MCPS SPEC (With  SmartPA )
MCPS SPEC (With  SmartPA )
MCPS SPEC (With  SmartPA )


UL Delay One Frame
DL Delay One Frame

UL
DL
UL
DL
UL
DL
NB (8K)
280.8 - 0.50x
50.4 - 0.25x
669.6 - x
50.4 - 0.25x
280.8 - 0.50x
439.2 - x
WB (16K)
385.2 - 0.50x
68.4 - 0.25x
651.6 - x
68.4 - 0.25x
385.2 - 0.50x
334.8 - x
SWB (32K)
446.4 - 0.75x
190.8 - 0.25x
529.2 - x
190.8 - 0.25x
446.4 - 0.75x
446.4 - 0.75x
Implementation of the 'Delay one frame' feature requires  Phonecall  Driver support and incurs an additional round-trip delay (RTD) of 20ms.

DX-4
MTK DX-4 Phone Call MCPS SPEC (for Customer)
Release Version: v1. 1 , Date: 202 5 /0 4 / 16
Release  note :
Normal case: handset, 3.5mm earphone, Classic  BT( CVSD,  mSBC )
Different output device: Smart PA, USB offload and BLE cases
Must consider the concurrency scenario
Variable “X” is the MCPS of a specific concurrency 
USB (245) and BLE ( 170 ) numbers belongs to MTK driver profiling
Include system driver MCPS
SmartPA :   
Algorithm  MCPS :  N (depends on customer decision) 
Driver :  10
UL delay-one-frame:
More available MCPS compared to “Default”
Requires extra 20ms delay in UL
DL delay-one-frame:
More available MCPS compared to “Default”
Requires extra 20ms delay in DL







Structure
In DX-2  / DX-3 , we have dual HiFi5 DSP inside, it supports 4x MACs compared with HiFi3 and support 32 8x8 NN MACs. Thus, to support advanced NN algorithms is possible in DX-2  / DX-3 . 
Besides, there is a L2TCM can be used for algorithms to reduce memory access latency and data bandwidth to DRAM. The MCPS and power consumption would be reduced if the L2TCM is used  p roperly.


Figure  2 3 .  DX-2 HiFi5  DSP Structure
In DX-4, there is  an   NNE (Neural Network Engine)   connected with the UL processing core ,   it supports  accelerat ion to  Neural Network computations . With the NNE,  the performance of NN algorithms  can  be  further improve d   in DX-4 .

Figure  2 4 . DX-4 HiFi5 DSP Structure  with NNE
M TK In-house RV Series
DX-5
St ructure
In DX-5, we have dual RV55 cores inside, it supports thirty-two 8*8, sixteen 16*16, or eight 32*32 NN MACs. Thus, to support advanced NN algorithms is possible in DX-5. In addition, DX-5 also supports the  TinyDLA  which can further accelerate NN computations.
Besides, there is a L2TCM can be used for algorithms to reduce memory access latency and data bandwidth to DRAM. The MCPS and power consumption would be reduced if the L2TCM is used properly.

Figure  3 1  DX-5 RV DSP St ructure with  TinyDLA
H ardware Spec
The basic information about Audio DSP is as below,
Processor:
MTK in-house  RV55  cores   with RISC-V architecture
Single-precision  floating point
Compressed instruction 
DSP ISA for voice acceleration
TCM ( Tight-Coupled Memory, Internal Memory)
896KB for both Program and data
The TCM is used for RTOS  a nd system service. So, it only has 736KB left for the use of Audio/Voice algorithm.
Cache
L1 Cache
I-Cache:  64 KB , 2-way Associativity
D-Cache:  64 KB , 2-way Associativity
Cache Line Size:  128 Bytes
L2 cache:  512 KB ,  8 -way Associativity
Clock Rate
DVFS OPP 400MHz and 800MHz
Programmable DMA (burst of 16-bit) for DSP supported to transfer data to/from external memory
Support 4 DMA channels, that we can start 4 DMA transactions simultaneously
We’ve provided an API to trigger DMA
External Memory and Devices
DRAM: it can access data on DRAM by DMA or by CPU directly (through Cache).
AudioSys :  ADSP can access  AudioSys  through the internal bus without going through the infra bus .  So, ADSP cores  can access hardware registers and SRAM of the  AudioSys  without constrains.
S oftware Capability
R TOS and System Services
RTOS 
Free-RTOS
DVFS
Scenario
4 00MHz
8 00MHz
Screen On  +
S ingal  stream offload or Deep +
S ingal  output device SPK or A2 DP( sbc / aac ) or Headphone
O
X
O ther audio scenes
X
O
Debug Tools
Please refer to the  ADSP_Debugging_Guideline.docx  for more detail about ADSP debug tools.
MDSP PDK
CoreTracer  – MDSP IDE for development
C Libraries - Standard C Library
A udio Features
    The supported audio features are the same with DX-4. The dual core structure allows us to support more features at the same time and make it possible to support 3-mic noise reduction.
MCP S :
MTK DX-5 Phone Call MCPS SPEC (for Customer)
Release Version: v1.0, Date: 2025/07/07
Release  note :
Normal  case :  handset, 3.5mm earphone, Classic BT(CVSD,  mSBC )
Different output device: Smart PA, USB offload and BLE cases
Must consider the concurrency scenario
Variable “X” is the MCPS of a specific concurrency 
USB (133) and BLE (181) numbers belongs to MTK driver profiling
Include system driver MCPS
SmartPA :   
Algorithm  MCPS :  N (depends on customer decision) 
Driver :  20
UL delay-one-frame:
More available MCPS compared to “Default”
Requires extra 20ms delay in UL
DL delay-one-frame:
More available MCPS compared to “Default”
Requires extra 20ms delay in DL







2 4M
S tructure
Figure  3 2  24M  RV DSP Structure    In 24M,  the  SCP subsystem has 2 RV55 cores, one is for SCP legacy  features , such as sensor/  VoW / Ultrasound, and another one is for  the  audio feature ,  which used to be executed on  a  standalone ADSP subsystem. For Audio offload, we can support both DL/UL feature  sets  in  a  single core.
Figure  3 2  24M  RV DSP Structure

H ardware Spec
In this section, we focus on the spec of 24M Audio DSP, instead of the whole SCP  subsys . If you are interested in the capability  of the  whole SCP subsystem, please find the document  MT6878_SCP_Development_Guide.docx  via DMS release.
The basic information about the 24M Audio DSP is as  follows ,
Processor:
MTK  in-house  RV55  single core   with RISC-V architecture
Single-precision  floating point
Compressed instruction 
DSP ISA for voice acceleration
TCM ( Tight-Coupled Memory, Internal Memory)
1MB for both  the program  and data
The TCM is shared between SCP and Audio DSP, but used for RTOS, system service and SCP always on feature (Sensor,  VoW , and Ultrasound).  So  it is not allowed for the use of Audio/Voice algorithm.
Cache
L1 Cache
I-Cache:  32 KB , 4-way Associativity
D-Cache:  32KB , 4-way Associativity
Cache Line Size:  128 Bytes
L2 cache:  128KB  only for Audio DSP
Clock Rate
DVFS OPP from 200MHz to 800MHz
Programmable DMA (burst of 16-bit) for DSP supported to transfer data to/from external memory
Support 8 DMA channels, that we can start 4 DMA transactions simultaneously
We’ve provided an API to trigger DMA
External Memory and Devices
DRAM: it can access data on DRAM by DMA or by CPU directly (through Cache).
AudioSys : there is no dedicated BUS on 24M. The DSP can access hardware registers and SRAM of the  AudioSys  without constrains.
S oftware Capability
RTOS and System Services
RTOS 
Free-RTOS
DVFS
Fixed DSP frequency 800MHz is selected when any audio feature on Audio DSP.
Debug Tools
Logging – UART log, and MTK Logger
Coredump  Extractor
Audio Dump– capture PCM dump before/after processing. (we’ve provided an API to add a PCM dump in the designated position
PMU
Performance Monitor Unit. It can be used to monitor the information cache miss rate, cache hit rate, and  iostall  rate etc.
Number of Performance Counters– 5
PBFR flight recorder – to provide task/ ISR/ event trace
MDSP PDK
CoreTracer  – MDSP IDE for development
C Libraries - C Library
Audio Features
Supported Audio Features:
Speech/Voice
Speech enhancement during VOIP call (8k/16k/32k)
Speech enhancement during Voice call ( 8k/16k/32k )
Recording enhancement
Audio Playback
SmartPA
MCPS:
  Generally, we need to reserve at least 10% headroom for buffer copy, system overhead, access external devices, and interaction between APMCU. Besides, in voice call case, the voice codec is processed in Modem side and the speech enhancement is processed in the Audio DSP. The timing should be aligned to avoid increasing round trip delay, so we need to reserve more headroom in voice call case. However, If the library can’t meet the requirement, there is two solutions: 
We need to delay 1 frame to process the data. There would be 20ms increment in the  round trip  delay.
Increase the clock rate of Audio DSP or Modem, it would have more power consumption.

24M
Normal








Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
EVRCB
C2K
282
51
639
51
282
75

AMR
3G
381
69
601
69
381
113
WB (16K)
AMR
3G
379
67
599
67
379
111

AMR
VoLTE
456
193
467
193
456
221

EVS
VoLTE
427
234
462
234
427
249
SWB (32K)
EVS
VoLTE
441
185
485
185
441
226

EVS
VoLTE
441
185
485
185
441
226


SmartPA
　 SmartPA  :  X = N (algorithm) + 20 (driver)
Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
EVRCB
C2K
282 - 0.5x
51 - 0.5x
639 - x
51 - 0.5x
282 - 0.5x
75 - 0.5x

AMR
3G
381 - x
69 - 0.5x
601 - x
69 - 0.5x
381 - x
113 - 0.5x
WB (16K)
AMR-WB
3G
379 - x
67 - 0.5x
599 - x
67 - 0.5x
379 - x
111 - 0.5x

AMR-WB
VoLTE
456 - x
193 - 0.5x
467 - x
193 - 0.5x
456 - x
221 - 0.5x

EVS-WB
VoLTE
427 - x
234 - 0.5x
462 - x
234 - 0.5x
427 - x
249 - 0.5x
SWB (32K)
EVS-SWB
VoLTE
441 - x
185 - 0.5x
485 - x
185 - 0.5x
441 - x
226 - 0.5x

EVS-SWB
VoLTE
441 - x
185 - 0.5x
485 - x
185 - 0.5x
441 - x
226 - 0.5x


USB
USB format
FS, interval 0
HS, interval 0
HS, interval 1
HS, interval 2
HS, interval 3
MCPS 
157
277
152
N/A
158
USB  Offload :  X = 17 ~ 277
Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
EVRCB
C2K
282 - 0.5x
51 - 0.25x
639 - x
51 - 0.25x
282 - 0.5x
75 - 0.25x

AMR
3G
381 - 0.75x
69 - 0.25x
601 - x
69 - 0.25x
381 - 0.75x
113 - 0.25x
WB (16K)
AMR-WB
3G
379 - 0.75x
67 - 0.25x
599 - x
67 - 0.25x
379 - 0.75x
111 - 0.25x

AMR-WB
VoLTE
456 - x
193 - 0.5x
467 - x
193 - 0.5x
456 - x
221 - 0.5x

EVS-WB
VoLTE
427 - 0.75x
234 - 0.5x
462 - x
234 - 0.5x
427 - 0.75x
249 - 0.5x
SWB (32K)
EVS-SWB
VoLTE
441 - 0.75x
185 - 0.5x
485 - x
185 - 0.5x
441 - 0.75x
226 - 0.5x

EVS-SWB
VoLTE
441 - 0.75x
185 - 0.5x
485 - x
185 - 0.5x
441 - 0.75x
226 - 0.5x

BLE
BLE :  X = 120 (driver + LC3 codec)

Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
EVRCB
C2K
282 - 0.5x
51 - 0.5x
639 - x
51 - 0.5x
282 - 0.5x
75 - 0.5x

AMR
3G
381 - x
69 - 0.5x
601 - x
69 - 0.5x
381 - x
113 - 0.5x
WB (16K)
AMR-WB
3G
379 - x
67 - 0.5x
599 - x
67 - 0.5x
379 - x
111 - 0.5x

AMR-WB
VoLTE
456 - x
193 - 0.5x
467 - x
193 - 0.5x
456 - x
221 - 0.5x

EVS-WB
VoLTE
427 - x
234 - 0.5x
462 - x
234 - 0.5x
427 - x
249 - 0.5x
SWB (32K)
EVS-SWB
VoLTE
441 - x
185 - 0.5x
485 - x
185 - 0.5x
441 - x
226 - 0.5x

EVS-SWB
VoLTE
441 - x
185 - 0.5x
485 - x
185 - 0.5x
441 - x
226 - 0.5x

25Ms/ 26M
Structure
In 25Ms and 26M, the SCP and ADSP are merged into a single RV55 Dual-Core subsystem. The core affinity strategy for Audio and SCP features remains the same as it was for the 24M platform. One is for SCP legacy features, such as sensor/  VoW / Ultrasound, and another one is for audio feature s . The only change is the transition from a dual-core AMP architecture to a dual-core SMP   (Symmetric Multi-Processing) architecture, which provides greater flexibility for future load balancing.

Figure  3 3  25Ms&26M  RV DSP Structure
Hardware Spec
The basic information about the 25Ms/26M Audio DSP/SCP subsystem is listed below,
Processor:
MTK in-house  RV55   Dual-C ore  (SMP)  with RISC-V architecture
Single-precision floating point
Compressed instruction
DSP ISA for voice acceleration
TCM (Tight-Coupled Memory, Internal Memory)
1 .25 MB for both the program and data
The TCM is shared between SCP and Audio DSP, but used for RTOS, system service and SCP always on feature (Sensor,  VoW , and Ultrasound).  So  it is not allowed for the use of Audio/Voice algorithm.
Cache
L1 Cache
I-Cache: 32KB, 4-way Associativity
D-Cache: 32KB, 4-way Associativity
Cache Line Size: 128 Bytes
L2 cache:  256 KB  unified across Audio DSP and SCP
Clock Rate
25Ms
DVFS OPP  supports  200MHz,  400MHz, 800MHz and 1GHz
Audio DSP is restricted to 800MHz and 1GHz only. 
26M
DVFS OPP supports 200MHz, 400MHz, 800MHz and 1.092GHz
Audio DSP is restricted to 800MHz and 1.092GHz only.
Programmable DMA (burst of 16-bit) for DSP to transfer data to/from external memory
Support 8 DMA channels,  so  that we can start 4 DMA transactions simultaneously
We’ve provided an API to trigger DMA
External Memory and Devices
DRAM:  I t can access data on DRAM by DMA or by CPU directly (through Cache).
AudioSys :  There is no  dedicated BUS  between DSP subsystem and  AudioSys . The DSP can access  the  hardware registers and SRAM of the  AudioSys  without  constraints .
Software Capability
RTOS and System Services
RTOS 
FreeRTOS  11.0.0 (from 10.1.0.1)
Scheduling
SMP Affinity to support audio feature on a dedicated core for performance stability.
DVFS
Support distinct DVFS gears at  audio basic   and  high frequencies  to optimize audio feature execution speed vs. power consumption.
Basic f requency  is 800MHz for both 25Ms and 26M
High frequency is 1GHz for 25Ms, and 1.092GHz for 26M
Scenario
B asic  Frequency
High Frequency

Single scenario, such as playback/ VoIP/ Phone call
O
X
Cascaded scenario, which is  customer-definable
X
O

Debug Tools
Logging – UART log, and MTK Logger
Coredump  Extractor
Audio Dump– capture PCM dump before/after processing. (we’ve provided an API to add a PCM dump in the designated position
PMU
Performance Monitor Unit. It can be used to monitor the information cache miss rate, cache hit rate, and  iostall  rate etc.
Number of Performance Counters– 5
ADSP tracer  – provide task/ ISR/ event trace
MDSP PDK
CoreTracer  – MDSP IDE for development
C Libraries - C Library
Audio Features
25Ms and 26M ADSP roughly align with 24M ADSP in audio  features, but  support additional BT codec offloads.
Speech/Voice
Speech enhancement during VOIP call (8k/16k/32k /48k )
Speech enhancement during Voice call (8k/16k/32k)
Recording enhancement
Audio Playback
SmartPA
MCPS:
  Generally, we need to reserve at least 10% headroom for buffer copy, system overhead,  accessing  external devices, and interaction between APMCU. Besides, in voice call case, the voice codec is processed in Modem side and the speech enhancement is processed in the Audio DSP. The timing should be aligned to avoid increasing  round-trip  delay, so we need to reserve more headroom in voice call case. However, If the library can’t meet the requirement, there  are  two solutions: 
We need to delay 1 frame to process the data. There would be 20ms increment in the  round-trip  delay.
Increase the clock rate of Audio DSP or Modem, it would  result in  more power consumption.

25Ms
All data is standardized to the DSP’s maximum frequency of 1 GHz. For scenarios requiring 800 MHz, values can be converted by  dividing by a factor of 1.25.
Normal








Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
AMR-NB
3G
477
124
752
124
477
142

AMR-WB
3G
474
121
749
121
474
139
WB (16K)
AMR-WB
VoLTE
570
293
584
293
570
305

EVS-WB
VoLTE
564
293
577
293
564
311

EVS-SWB
VoLTE
593
264
606
264
593
282
SWB (32K)
EVS-SWB
VoLTE
593
264
606
264
593
282

AMR-NB
3G
477
124
752
124
477
142


SmartPA
　 SmartPA  :  X = N (algorithm) + 20 (driver)
Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
AMR
3G
477 - 0.5x
124 - 0.5x
752 - x
124 - 0.5x
477 - 0.5x
142 - 0.5x
WB (16K)
AMR-WB
3G
474 - 0.5x
121 - 0.5x
749 - x
121 - 0.5x
474 - 0.5x
139 - 0.5x

AMR-WB
VoLTE
570 - x
293 - 0.5x
584 - x
293 - 0.5x
570 - x
305 - 0.5x

EVS-WB
VoLTE
564 - x
293 - 0.5x
577 - x
293 - 0.5x
564 - x
311 - 0.5x
SWB (32K)
EVS-SWB
VoLTE
593 - x
264 - 0.5x
606 - x
264 - 0.5x
593 - x
282 - 0.5x

EVS-SWB
VoLTE
593 - x
264 - 0.5x
606 - x
264 - 0.5x
593 - x
282 - 0.5x

USB
USB Offload: X =  200
Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB(8K)
AMR
3G
477 - 0.5x
124 - 0.25x
752 - 0.75x
124 - 0.25x
477 - 0.5x
142 - 0.25x
WB (16K)
AMR-WB
3G
474 - 0.5x
121 - 0.25x
749 - 0.75x
121 - 0.25x
474 - 0.5x
139 - 0.25x

AMR-WB
VoLTE
570 - 0.75x
293 - 0.5x
584 - 0.75x
293 - 0.5x
570 - 0.75x
305 - 0.5x

EVS-WB
VoLTE
564 - 0.75x
293 - 0.5x
577 - 0.75x
293 - 0.5x
564 - 0.75x
311 - 0.5x
SWB (32K)
EVS-SWB
VoLTE
593 - 0.75x
264 - 0.5x
606 - 0.75x
264 - 0.5x
593 - 0.75x
282 - 0.5x

EVS-SWB
VoLTE
593 - 0.75x
264 - 0.5x
606 - 0.75x
264 - 0.5x
593 - 0.75x
282 - 0.5x

BLE
BLE :  X = 1 6 0 (driver + LC3 codec)

Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
AMR
3G
477 - 0.5x
124 - 0.5x
752 - x
124 - 0.5x
477 - 0.5x
142 - 0.5x
WB (16K)
AMR-WB
3G
474 - 0.5x
121 - 0.5x
749 - x
121 - 0.5x
474 - x
139 - 0.5x

AMR-WB
VoLTE
570 - x
293 - 0.5x
584 - x
293 - 0.5x
570 - x
305 - 0.5x

EVS-WB
VoLTE
564 - x
293 - 0.5x
577 - x
293 - 0.5x
564 - x
311 - 0.5x
SWB (32K)
EVS-SWB
VoLTE
593 - x
264 - 0.5x
606 - x
264 - 0.5x
593 - x
282 - 0.5x

EVS-SWB
VoLTE
593 - x
264 - 0.5x
606 - x
264 - 0.5x
593 - x
282 - 0.5x

26M
All data is standardized to the DSP’s maximum frequency of 1 .092  GHz. For scenarios requiring 800 MHz, values can be converted by  dividing by a factor of 1. 365 .
Normal








Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
AMR-NB
3G
520
135
821
135
520
155
WB (16K)
AMR-WB
3G
517
132
818
132
517
152

AMR-WB
VoLTE
623
320
637
320
623
333

EVS-WB
VoLTE
616
320
630
320
616
340
SWB (32K)
EVS-SWB
VoLTE
647
288
662
288
647
308

EVS-SWB
VoLTE
647
288
662
288
647
308

SmartPA
SmartPA:X  = N(algorithm) + 20(Driver)




Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
AMR-NB
3G
520 - x
135- 0.5x
821 - x
135 – 0.5x
520 – x
155 – 0.5x
WB (16K)
AMR-WB
3G
517- x
132- 0.5x
818 – x
132 – 0.5x
517 – x
152 – 0.5x

AMR-WB
VoLTE
623- x
320- 0.5x
637 – x
320 – 0.5x
623 – x
333 – 0.5x

EVS-WB
VoLTE
616- x
320- 0.5x
630 – x
320 – 0.5x
616 – x
340 – 0.5x
SWB (32K)
EVS-SWB
VoLTE
647- x
288- 0.5x
662 – x
288 – 0.5x
647 – x
308 – 0.5x

EVS-SWB
VoLTE
647- x
288- 0.5x
662 - x
288 – 0.5x
647 – x
308 – 0.5x

USB
USB: X = 200






Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
AMR
3G
520 – 0.75x
135 – 0.25x
821 - x
135 – 0.25x
520 – 0.75x
155 – 0.25x
WB (16K)
AMR-WB
3G
517 – 0.75x
132 – 0.25x
818 – x
132 – 0.25x
517 – 0.75x
152 – 0.25x

AMR-WB
VoLTE
623 – 0.75x
320 – 0. 5x
637 – 0.75x
320 – 0. 5x
623 – 0.75x
333 – 0.5x

EVS-WB
VoLTE
616 – 0.75x
320 – 0. 5x
630 – 0.75x
320 – 0. 5x
616 – 0.75x
340 – 0.5x
SWB (32K)
EVS-SWB
VoLTE
647 – 0.75x
288 – 0. 5x
662 – 0.75x
288 – 0. 5x
647 – 0.75x
308 – 0.5x

EVS-SWB
VoLTE
647 – 0.75x
288 – 0. 5x
662 – 0.75x
288 – 0. 5x
647 – 0.75x
308 – 0.5x

BLE
BLE: X = 160






Band
Codec
Scenario
Default
Delay UL 20ms
Delay DL 20ms



UL
DL
UL
DL
UL
DL
NB (8K)
AMR
3G
520 –x
135 – 0.5x
821 - x
135 – 0.5x
520 –x
155 – 0.5x
WB (16K)
AMR-WB
3G
517 –x
132 – 0.5x
818 – x
132 – 0.5x
517 –x
152 – 0.5x

AMR-WB
VoLTE
623 –x
320 – 0.5x
637 – x
320 – 0.5x
623 –x
333 – 0.5x

EVS-WB
VoLTE
616 –x
320 – 0.5x
630 – x
320 – 0.5x
616 –x
340 – 0.5x
SWB (32K)
EVS-SWB
VoLTE
647 –x
288 – 0.5x
662 – x
288 – 0.5x
647 –x
308 – 0.5x

EVS-SWB
VoLTE
647 –x
288 – 0.5x
662 - x
288 – 0.5x
647 –x
308 – 0.5x



---
# SRC0313 AudioDSP_Development_Tutorial.docx

来源：DOC\AudioDSP_Development_Tutorial.docx

SHA-256：205e6be3fb328bf7b5b7f78537895b102b14aa94d382e2ab796908c2665ff6cf

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0313.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 正文（不对应打印页码） 1










Audio DSP Development Tutorial
User Manual
Customer Support



N/A
V1. 2 7
20 2 6 - 0 5 - 11

Doc No:
Version:
Release date:
Classification:


©  2016  -  2026 MediaTek Inc.
This document contains information that is proprietary to MediaTek Inc.
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.

Specifications are subject to change without notice.



Keywords
User Manual


MediaTek Inc.
Postal address
No. 1, Dusing 1st Rd. , Hsinchu Science Park, Hsinchu City, Taiwan 30078
MTK  support office address
No. 1, Dusing 1st Rd. , Hsinchu Science Park, Hsinchu City, Taiwan 30078
Internet
http://www. mediatek.com/










Document Revision History
Revision
Date
Author
Description
V0. 8
2018/08/31
Doug Wang
Initial Draft
V0.9
2019/01/08
Doug Wang
Danny Hung
Add Debug and MCPS measurement method
b) Add Audio Effect
V1.0
2019/11/04
Doug Wang
a) Refine description of hwcfg and config
V1.1 0
2020/01/22
Doug Wang
Add b0 file structure
b) Add aurisys development flow
V1.11
2020/2/22
Doug Wang
Add enable UART method
b)Add b0 structure description for debug sop
V1.12
2020/4/20
Doug Wang
Danny Hung
Celine
Add Integration Guideline Chapter
Aurisys Porting Guideline
Reserved Memory Configurations
V1.13
2021/01/06
Danny
Add guideline to add Aurisys scenario
V 1.14
2 022/09/06
Y uying Lin
a) A dd note for aurisys_config_hifi3.xml  
b)  U pdate tool chain part:
-  M odify DX-2 & 22H param /hwcfg  file path
-  A dd libhal description for on target building HiFiX
V1.15
2022/10/13
R ui-yang Weng
a)  How to allocate working buffer for library?
- aurisys allocate buffer control flow - a urisys API usage
V 1.16
2 022/12/21
R ui-yang Weng
a)  How to allocate working buffer for library?   (aurisys interface after V1.8.0)
V 1.1 7
2 023/0 4 / 18
Y uying Lin
Jung-wei chen
a )  Add note for re-building link scripts 
b ) U pdate tool chain part:
- M odify 23P param/hwcfg /libhal.a  file path
V1.18
2023/05/12
Y uying Lin
Chipeng chang
a )   U pdate compiler part 1.2.5
b) A dd  DX -3 param/hwcfg/libhal file path
V1.19
2023/08/11
Da nny Hun g
Add SCP Aurisys porting guide
V1.20
2 024/01/26
Celine Liu
a) Add file structure for RV55 platform
b) Updat for m  description for 24M RV55 platform
V1.21
2024/05/17
Jung-wei chen
a)  Update DX-3 libhal.a for NNE
b)  Add DX-4 param/hwcfg/libhal .a  file path
V1.22
2024/0 7 /1 6
Ju ng-wei chen
a)  Add  24P  param/hwcfg/libhal.a file path
V 1.23
2 024/11/05
Jung-wei chen
a) Add ADSP system DTS description
V1.24
202 5 / 02/2 7
Rui-yang Weng
a)  Up date Aurisys bypass lib process
V 1.25
2 025/05/16
J ung-wei Chen
a)  Add DX-5 configurations
V1.26
2025 / 09/05
J ung-wei Chen
a ) Update 3 rd -party library recommended build flags
V1.27
2026/05/11
Jung-wei Chen
a) Add 26M configurations
V1.27
2026/05/ 21
Celine Liu
a) Add  25Ms  configurations


Table of Contents
Document Revision History 3
Table of Contents 4
Lists of Tables 7
Lists of Figures 8
1 Getting Start 9
1.1 File Structure 9
1.1.1 A0 and B0 structure 9
1.1.2 DSP Source Code 9
1.1.3 APMCU 12
1.2 Compile Cadence DSP/HiFi3 & /HiFi5 13
1.2.1 Configurations 13
1.2.2 Default Image 14
1.2.3 Tool Chain 14
1.2.4 Tool Chain Version 21
1.2.5 Compiler 21
1.2.6 Build Command 21
1.2.7 Suggested Library Build Flags 22
1.2.8 3 rd  Party Libraries 22
1.3 Compile MTK In-house DSP/RV55 – shared SCP software 23
1.3.1 Configuration 23
1.3.2 Default Image 24
1.3.3 Tool Chain 24
1.3.4 Build Command 24
1.3.5 Suggested Library Build Flags 24
1.3.6 3 rd  Party Libraries 25
1.4 Compile MTK In-house DSP/RV55V & /RV55 – Standalone ADSP software 25
1.4.1 Configuration 25
1.4.2 Default Image 26
1.4.3 Tool Chain 26
1.4.4 Build Command 26
1.4.5 Suggested Library Build Flags 27
1.4.6 3 rd  Party Libraies 27
1.5 Download by Flashtool 27
2 Software Architecture 29
2.1 Free-RTOS 29
2.1.1 Heap Size 29
2.2 Audio Framework 30
2.3 Aurisys 31
2.3.1 Abstract 31
2.3.2 Aurisys Aims 31
2.3.3 Development Flow 32
3 Software Development Guidance 33
3.1 Scenario Based DVFS 33
3.2 Audio Effects 35
3.2.1 ACF Working Flow on DSP 35
3.2.2 Audio Loudness Working Flow on DSP 40
4 Debug SOP 43
4.1 Issue Feedback to MTK 43
4.2 Performance Issue 43
4.3 Enable UART log 43
5 Integration Guideline 44
5.1 Get the Development Tools 44
5.1.1 Apply for an Account 44
5.1.2 Download the Released Software to the Device 45
5.2 Integration 47
5.2.1 Environment 47
5.2.2 Feature Distribution 48
5.3 Aurisys Porting Guide 49
5.3.1 AP Side Parsing Library 49
5.3.2 DSP/SCP Side Process Library 49
5.3.3 Aurisys Config 51
5.3.4 New Aurisys Scenario 53
5.3.5 How to allocate working buffer for library? (aurisys interface before V1.8.0) 56
5.3.6 How to allocate working buffer for library? (aurisys interface after V1.8.0) 60
5.3.7 Bypass the Aurisys process by configuring the xml 63
5.3.8 Aurisys Q&A 65
5.4 Memory Configurations 66
5.4.1 Memory Profile 66
5.4.2 Approach 66
5.5 ADSP system DTS Properties 72
5.5.1 ADSP system DTS property description 72


Lists of Tables
找不到圖表目錄。

Lists of Figures
Figure 1 1. HiFiX Tool Chain Path 12
Figure 1 2. Example of  Makefile Non-support 17
Figure 1 3. Example of  Makefile Non-support – Replace by User 17
Figure 1 4. Example of  Makefile Support – Replace by Makefile 17
Figure 2 1. Audio Framework 22
Figure 2 2. Concept of Aurisys 23
Figure 2 3. Aurisys Development Flow 23
Figure 3 1. Scenario Based DVFS flow (P80 as example) 24
Figure 3 2. MCPS Lookup Flow 24
Figure 3 3. Register a callback function 25
Figure 3 4. MCPS Look up Callback Function Example 26
Figure 3 5. DRC Working at HIFI3 overview 32
Figure 3 6.  DRC Working at HIFI3Flow 33
Figure 5 1. Account Application Guilde Step 1 36
Figure 5 2. Account Application Guilde Step 2 37
Figure 5 3. Account Application Guilde Step 3 37
Figure 5 4. MOL Example 37
Figure 5 5. Modem Image Description in Scatter File 38
Figure 5 6. Aurisys Control Flow 48
Figure 5 7. Aurisys Control Flow 52




Getting Start
File Structure
A0 and B0 structure
    Currently, we have two file structures in DSP: A0 and B0. The file structure of P90/G90 is called A0 structure, and the structure of other projects is called B0 structure. We’ve reorganized the file structure of SCP and Audio DSP in B0 and created independent repo for SCP, Audio DSP, and common modules. After P90/G90, we’ll adopt B0 for all projects.
Projects
Structure
P90/G90
A0 structure
Other projects
B0 structure
DSP Source Code
A0 Structure
Repo Structure
Repo
Release Policy
Description
vendor/mediatek/proprietary/tinysys/freertos/source
Release
DSP Source code
vendor/mediatek/proprietary/tinysys/freertos/adsp_3rd_party_lib
Remove
DSP default images with 3rd party functionality (internal QC use)
vendor/mediatek/proprietary/tinysys/freertos/adsp_lib
Release
DSP Default Image without 3rd party functionality (release to customers)
vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party
Remove
3rd party libraries
(please license them from 3rd party lib and place them here)
prebuilts/xcc/linux-x86/xtensa/RG-2017.6-linux
Remove
Cadence HiFi DSP toolchain (Please license it from Cadence and place it here)

File Structure
    The DSP source code is located at  alps/vendor/mediatek/proprietary/tinysys/freertos .
Directory
Sub Directory
Files
Description
/
-
Android.mk
Makefile and Project Config


Makefile

/build
-
clear_vars.mk
Build script


config_common.mk



config_hifi3.mk



definitions.mk



env_hifi3.mk



main.mk

/drivers/HIFI3_A
  -
*
Audio HW Driver code
/drivers/common/
/audio
 
 
 *
 
 
Audio Framework

/dma/v03

Common peripheral driver code with SCP

/sem/v02



/uart/v01



/ipi/common

IPI Driver
/kernel/service/HIFI3
  -
*
kernel service (wakelock, printf functions)
/kernel/FreeRTOS/Source
  -
croutine.c
FreeRTOS Source


event_groups.c



list.c



queue.c



tasks.c



timers.c



readme.txt

/kernel/FreeRTOS/Source/include
  -
*
FreeRTOS header
/kernel/FreeRTOS/Source/portable
/XCC
*
FreeRTOS, porting layer for HiFi3 DSP

/MemMang


/middleware/lib/audio
/hifi3
*
Audio libraries and wrapper

/common


/project/HIFI3_A
  -
*
Platform.mk of HiFi3 DSP
/middleware/lib/
/audio_utility
*
Audio framework utility funcitons and aurisys

/aurisys


B0 Structure
We categorize the DSPs on the MTK platform into two types:  Cadence HiFi DSP  and  MTK in-house RV DSP . The MTK in-house  R V DSP can be further divided into two types based on whether the ADSP is in the same subsystem as the SCP, namely  SCP /ADSP  Co-subsys  and  Standalone ADSP .   Hence, t here are  four   different DSP  architectures   used in MTK platforms, please refer to the following table:

Projects
DSP  T ype
DSP  Architecture
DX-2, DX-3, DX-4
Cadence  DSP/ HiFi 5
Standalone ADSP Software
5G-L/H/H+, 5G-A, 5G-B, 5G-C,
Next D, Next A, Next A2, 22H, 23P ,   24P,
DX-1 DX-1 Pro, DX-P
Cadenc e  DSP /HiFi3
Standalone ADSP Software
2 4M ,  25Ms,  26M
MTK in-house  DSP/RV55
Shared SCP Software
DX-5 , DX-6
MTK in-house  DSP /RV55V
Standalone ADSP Software

Both HiFi3 and HiFi5 repo structures are listed as below:
HiFi3 Repo Structure
Repo
Release Policy
Description
alps/vendor/mediatek/proprietary/tinysys/adsp/HIFI3
Release
DSP  HiFi3 s ource code
alps/vendor/mediatek/proprietary/tinysys/adsp/common
Release
DSP HiFi series common source code
alps/vendor/mediatek/proprietary/tinysys/adsp/adsp_imgs_3rd_party
Remove
DSP default images with 3rd party functionality (internal QC use)
alps/vendor/mediatek/proprietary/tinysys/adsp/adsp_imgs/HIFI3
Release
DSP Default Image without 3rd party functionality (release to customers)
alps/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party
Remove
3rd party libraries
(please license  them  from 3rd party lib and place  them  here)
alps/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/lc3
Remove
lc3 licensed libraries
(Please license it from mediatek and place them here)
alps/prebuilts/xcc/linux-x86/xtensa
Remove
Cadence HiFi DSP toolchain (Please license it from Cadence and place it here)
alps/prebuilts/clang/xtensa/linux-x86
Remove
Cadence HiFi DSP toolchain (Please license it from Cadence and place it here)
alps/vendor/mediatek/proprietary/common
Release
Common code with  tinysys  SCP  
alps/vendor/mediatek/proprietary/kernel
Release
FreeRTOS

HiFi3 File Structure
The file structure of DSP source code is the same with A0 structure. The only difference is that the DSP source code is located at   alps/vendor/mediatek/proprietary/tinysys/adsp/HIFI3.
HiFi5 Repo Structure
Repo
Release Policy
Description
alps/vendor/mediatek/proprietary/tinysys/adsp/HIFI5_SP
Release
DSP HiFi5 source code
alps/vendor/mediatek/proprietary/tinysys/adsp/common
Release
DSP HiFi series common source code
alps/vendor/mediatek/proprietary/tinysys/adsp/adsp_imgs_3rd_party
Remove
DSP default images with 3rd party functionality (internal QC use)
alps/vendor/mediatek/proprietary/tinysys/adsp/adsp_imgs/HIFI5
Release
DSP Default Image without 3rd party functionality (release to customers)
alps/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party
Remove
3rd party libraries
(please license them from 3rd party lib and place them here)
alps/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/lc3
Remove
lc3 licensed libraries
(Please license it from mediatek and place them here)
alps/prebuilts/xcc/linux-x86/xtensa
Remove
Cadence HiFi DSP toolchain (Please license it from Cadence and place it here)
alps/prebuilts/clang/xtensa/linux-x86
Remove
Cadence HiFi DSP toolchain (Please license it from Cadence and place it here)
alps/vendor/mediatek/proprietary/ tinysys/ common
Release
Common code with  tinysys  SCP
alps/vendor/mediatek/proprietary/ tinysys/ kernel / FreeRTOS_v10.1.0
Release
FreeRTOS

HiFi5 File Structure
The file structure of DSP source code is the same with A0 structure. The only difference is that the DSP source code is located at   alps/vendor/mediatek/proprietary/tinysys/adsp/HIFI5_SP.
RV55  SCP/ADSP Co-subsys  Repo Structure
Repo
Release Policy
Description
alps/vendor/mediatek/proprietary/tinysys/scp
Release
DSP RV55 source code
alps/vendor/mediatek/proprietary/tinysys/ adsp/license/prebuilt/RV55 /3rd_party
Remove
3rd party libraries
(please license them from 3rd party lib and place them here)
alps/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/RV55/lc3
Remove
lc3 licensed libraries
(Please license it from mediatek and place them here)
alps/prebuilts/clang/md32rv/linux-x86
Release
RV DSP toolchain
alps/vendor/mediatek/proprietary/tinysys/common
Release
Common code for both tinysys ADSP and tinysys SCP
alps/vendor/mediatek/proprietary/tinysys/kernel/ [ FreeRTOS_v10.1.0.1 |FreeRTOS_v11.0.0]
Release
FreeRTOS

RV55  Standalone ADSP  Repo Structure
Repo
Release Policy
Description
alps/vendor/mediatek/proprietary/tinysys/adsp/riscv
Release
DSP RV55 source code
alps/vendor/mediatek/proprietary/tinysys/ adsp/license/prebuilt/RV55 /3rd_party
Remove
3rd party libraries
(please license them from 3rd party lib and place them here)
alps/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/RV55/lc3
Remove
lc3 licensed libraries
(Please license it from mediatek and place them here)
alps/prebuilts/clang/md32rv/linux-x86
Release
RV DSP toolchain
alps/vendor/mediatek/proprietary/tinysys/common
Release
Common code for both tinysys ADSP and tinysys SCP
alps/vendor/mediatek/proprietary/tinysys/kernel/FreeRTOS_v11.0.0
Release
FreeRTOS

APMCU
Directory
Description
kernel- x . xx \ drivers \ misc \ mediatek \ adsp
Kernel Drivers for  standalone Audio DSP  
kernel- x . xx \drivers\misc\mediatek\audio_ipi
IPI means  I nter- P rocessor- I nterrupt,  and  it is used to do handshake with the DSP. The audio_ipi is designed with a message queue
Kernel-x.xx\sound\soc\mediatek\audio_scp
K ernel Drivers for  platforms shared SCP software.
kernel-x.xx \sound\soc\mediatek\audio_dsp
ALSA Kernerl Driver to read/write PCM data to Audio DSP
Compile  Cadence  DSP /HiFi3 & /HiFi5
Configurations
Feature
Option
Location
Audio DSP (main switch of DSP)
MTK_AUDIODSP_SUPPORT
ProjectConfig.mk
Offload Codec
MTK_AUDIO_TUNNELING_SUPPORT
ProjectConfig.mk
Voice Call Speech Enhancement in Audio DSP
MTK_AURISYS_PHONE_CALL_SUPPORT
ProjectConfig.mk
Offload VOIP/Record
VIR_VOIP_RECORD_AUDIODSP_SUPPORT


Build Server
Cadence  recommended to use  Red Hat Enterprise  (officially supported platform), if you don’t have RHEL, you can use CentOS instead.
While  they  do not officially support  U buntu, we are able to install Xtensa tools on  Ubuntu  Linux14.04  without issues.
Makefile Locations:
Android:  device\mediatekprojects
Kernel:
HifI3
A0:  vendor\mediatek\proprietary\tinysys\freertos\source\project\HIFI3_(X)
B0:   vendor\mediatek\proprietary\tinysys\adsp\HiFi3\project\HIFI3_(X)
HifI5:   vendor\mediatek\proprietary\tinysys\adsp\HiFi5\project\HIFI5_SP_(X)
Audio DSP (The main switch of Audio DSP)
Configuration Check
We have an inspection mechanism that the configurations of Android, Kernel, and DSP should be matched.
AP Configuration:  MTK_AUDIODSP_SUPPORT
Kernel Configuration:  CONFIG_MTK_AUDIODSP_SUPPORT
DSP Configuration:  CFG_MTK_AUDIODSP_SUPPORT
Voice Call Speech Enhanement
Note
An Inspection mechanism to check consistency of Android, Kernel, and DSP configurations
The speech enhancement would be executed in the Modem side if we disable the option.
AP Configuration:  MTK_AURISYS_PHONE_CALL_SUPPORT
Kernel Configuration:  CONFIG_MTK_AURISYS_PHONE_CALL_SUPPORT
DSP Configuration:  CFG_MTK_AURISYS_PHONE_CALL_SUPPORT
VOIP/Recording
Note
DSP option is always on
Use  VIR_VOIP_RECORD_AUDIODSP_SUPPORT  defined in the XML to enable/disable the DSP feature
3 rd  party Library
Note
The 3rd party library should be released by the 3rd party. MTK will verify 3rd party library internally and remove them before release
To enable the functionalities the 3 rd  party library, the user should add the 3 rd  party library to a specified folder and enable the related option. 
DSP Configuration:  CFG_3RDPARTY_PROJECT
Default Image
Building ADSP image requires a license. To support developers and customers without ADSP toolchain use platform-based default ADSP image instead of build from source, we provide ADSP default images with all supported features enabled so that customers can still use DSP features. You can still disable the DSP path and use APMCU solution by disable APMCU configurations.
The default image path are listed as below:
HiFi3 (A0):  alps/vendor/mediatek/proprietary/tinysys/freertos/adsp_lib
HiFi3 (B0):  alps/vendor/mediatek/proprietary/tinysys/adsp/adsp_imgs/HIFI3
HiFi5 (B0):  alps/vendor/mediatek/proprietary/tinysys/adsp/adsp_imgs/HIFI5
Tool Chain
    P90, G90
RG-2017.6
The licensed tool chain path:  alps/prebuilts/xcc/linux-x86/xtensa/RG-2017.6-linux
After licensing, please place the tool chain in the path above.

Figure  1 1 .  HiFi X  Tool Chain Path
RI-2018.0
For RI-2018.0, please place your toolchain in the following path:
A0:  alps/prebuilts/xcc/linux-x86/xtensa/RG-2017.6-linux/RI-2018.0-linux/XtensaTools
B0:  alps/prebuilts/xcc/linux-x86/xtensa/RI-2018.0-linux/XtensaTools



Hwcfg
The hwcfg would be released with our codebase in Android P Version. In Android Q and later version, the hwcfg won’t be released with our codebase. It will be released by file exchange server / aurisys package, and please copy the hwcfg to the following path.
Due to license issue, the folder  vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFIX/3rd_party  is removed when you receive the codebase. Please create the folder yourself.
RG-2017.6-linux (P90, Android P)
vendor/mediatek/proprietary/tinysys/freertos/source/project/HIFI3_A/mt6779/platform/hwcfg/RG-2017.6-linux/
RI-2018.0-linux
v1 (P90, Android Q and after; G90)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2018.0-linux/
v2 (5G L/H/H+/A/A+)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2018.0-linux/
RI-2019.1-linux
v1 (5G B/Next-A)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2019.1-linux/
v2 (DX-1/Next-A2/DX-P)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2019.1-linux-H/
RI-2021.8-linux
v1 HiFi5 (DX-2)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/hwcfg/RI-2021.8-linux/  
v1 HiFi3 (22H)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2021.8-linux/
v2 HiFi3 (23P)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2021.8-linux-H/
v2 HiFi3 (24P)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2021.8-linux-H/
RI-2023.11-linux
v1 HiFi5 (DX-3 /DX-4 )
NNE (HiFi5_NNE_2023_11_linux)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/hwcfg/RI-2023.11-linux-E/  
Non-NNE (HiFi5_MPU_lock_2023_11_linux)
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI 5 /3rd_party/hwcfg/RI-2023.11-linux-H/
Config
To build HiFiX on target, you need to add  mtxxxx-param  and update the  libhal.a  file. However, since Android T version, which DX-2, DX-3 , DX-4 ,  & 22H are included, the above action is done in makefile. 
Makefile not support (before Android T)
There are parameter files in aurisys_exe, and the source path is listed below. Please copy the corresponding param file into the toolchain. For example, if you are using G90, please copy mt6785-params to  XtensaTools/config . If you are using DX-P, please copy mt6895-params to  XtensaTools/config . The detailed project mapping and file path is described in  CONFIG/Readme . 

Makefile support (since Android T)
To build DX-2, DX-3 , DX-4 , 22H and later projects, users don't need to copy  mtxxxx-param  and  libhal.a  file by themselves. The  mtxxxx-param  and  libhal.a  are released in  /vendor/mediatek/proprietary/tinysys/adsp/HIFIX/build/patch/mtxxxx , and makefile will help to copy these files to destination before building mtxxxx project. To confirm whether your codebase contains this change, you can check:
Patch folder exists in this path:  
/vendor/mediatek/proprietary/tinysys/adsp/HIFIX/build/patch/mtxxxx 
Target  ADSP_TOOLCHAIN_UPDATE  exists in makefile:  
/vendor/mediatek/proprietary/tinysys/adsp/HIFIX/build/Makefile  
If your codebase doesn't contain this change, please consult with DRI.
RG-2017.6-linux (P90, Android P)
Source:  /CONFIG/HiFi3/Linux/RG-2017.6-linux/v1/RG-2017.6-linux
Destination:  /prebuilts/xcc/linux-x86/xtensa/RG-2017.6-linux/XtensaTools/config/
RI-2018.0-linux
v1 (P90, Android Q and after; G90)
Source:  /CONFIG/HiFi3/Linux/RI-2018.0-linux/v1/RI-2018.0-linux
Destination:  /prebuilts/xcc/linux-x86/xtensa/RG-2017.6-linux/RI-2018.0-linux/XtensaTools/config
v2 (5G L/H/H+/A/A+)
Source:  /CONFIG/HiFi3/Linux/RI-2018.0-linux/v2/patch/
Destination:  /prebuilts/xcc/linux-x86/xtensa/RI-2018.0-linux/XtensaTools/config/
RI-2019.1-linux
v1 (5G B/Next-A)
Source:  /CONFIG/HiFi3/Linux/RI-2019.1-linux/v1/RI-2019.1-linux
Destination:  /prebuilts/xcc/linux-x86/xtensa/RI-2019.1-linux/XtensaTools/config/  
v2 (DX-1/Next-A2/DX-P)
Source:  /CONFIG/HiFi3/Linux/RI-2019.1-linux/v2/patch/
Destination:  /prebuilts/xcc/linux-x86/xtensa/RI-2019.1-linux/XtensaTools/config/
RI-2021.8-linux
v1 (DX-2)
Source:  /CONFIG/HiFi5/Linux/RI-2021.8-linux/v1/patch/
Destination:  /prebuilts/clang/xtensa/linux-x86/RI-2021.8-linux/XtensaTools/config/ 
v1 (22H)
Source:  /CONFIG/HiFi3/Linux/RI-2021.8-linux/v1/patch/
Destination:  /prebuilts/clang/xtensa/linux-x86/RI-2021.8-linux/XtensaTools/config/ 
v2 (23P)
Source:  /CONFIG/HiFi3/Linux/RI-2021.8-linux/v2/patch/
Destination:  /prebuilts/clang/xtensa/linux-x86/RI-2021.8-linux/XtensaTools/config/  
v2 (24P)
Source:  /CONFIG/HiFi3/Linux/RI-2021.8-linux/v2/patch/
Destination:  /prebuilts/clang/xtensa/linux-x86/RI-2021.8-linux/XtensaTools/config/
RI-2023.11-linux
v1 (DX-3 /DX-4 )
Source:  /CONFIG/HiFi5/Linux/RI-2023.11-linux/v1/patch/
Destination:  /prebuilts/clang/xtensa/linux-x86/RI-2023.11-linux/XtensaTools/config/ 
Libhal.a
To support low power feature, hal library  libhal.a  needs to be replaced. As mentioned in  Config  part, before Android T version, users need to replace  libhal.a  by themselves. 
Makefile not support (before Android T)
The new  libhal.a  is released under  CONFIG\{HIFIX}\Linux\{Toolchain Version}-linux\{Sub Version}\patch . Please replace the corresponding  libhal.a  file under the destination path shown as below by the new one released in patch folder. 
Makefile support (since Android T)
Since Android T version, which DX-2, DX-3 , DX-4,  & 22H are included, the above action is done in makefile. Users who want to build DX-2, DX-3,  DX-4,  22H and later projects don't need to update  mtxxxx-param  &  libhal.a  by themselves. The libhal.a are released in  /vendor/mediatek/proprietary/tinysys/adsp/HIFIX/build/patch/mtxxxx , and makefile will help to copy file to destination before building HiFiX. To check whether your codebase version already includes this patch or not, you can refer to  Config  part first or consult with DRI.
RG-2017.6-linux (P90, Android P)
No need to update. The  libhal.a  in tool chain is already updated.
RI-2018.0-linux
v1 (P90, Android Q and after; G90)
No need to update. The  libhal.a  in tool chain is already updated.
v2 (5G L/H/H+/A/A+)
Source:  /CONFIG/HiFi3/Linux/RI-2018.0-linux/v2/patch/libhal.a
Destination:  /vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2018.0-linux/xtensa-elf/arch/lib/libhal.a
RI-2019.1-linux
v1 (5G B/Next-A)
No need to update. The  libhal.a  in tool chain is already updated.
v2 (DX-1/Next-A2/DX-P)
Source:  /CONFIG/HiFi3/Linux/RI-2019.1-linux/v2/patch/libhal.a
Destination:  /vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2019.1-linux-H/xtensa-elf/arch/lib/libhal.a
RI-2021.8-linux
v1 HiFi5 (DX-2)
Source:  /vendor/mediatek/proprietary/tinysys/adsp/HIFI5_SP/build/patch/mt6985/ libhal.a
Destination:  /vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/hwcfg/RI-2021.8-linux/xtensa-elf/arch/lib/libhal.a
v1 HiFi3 (22H)
Source: /vendor/mediatek/proprietary/tinysys/adsp/HIFI3/build/patch/mt6886/libhal.a
Destination:  /vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2021.8-linux/xtensa-elf/arch/lib/libhal.a
v2 HiFi3 (23P)
Source:  /vendor/mediatek/proprietary/tinysys/adsp/HIFI3/build/patch/mt6897/libhal.a
Destination:  /vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2021.8-linux-H/xtensa-elf/arch/lib/libhal.a
v2 HiFi3 (24P)
Source:  /vendor/mediatek/proprietary/tinysys/adsp/HIFI3/build/patch/mt6899/libhal.a
Destination:  /vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2021.8-linux-H/xtensa-elf/arch/lib/libhal.a
RI-2023.11-linux
v1 HiFi5 (DX-3)
NNE 
Source:  /vendor/mediatek/proprietary/tinysys/adsp/HIFI5_SP/build/patch/mt6989 _b / libhal.a
Destination:  /vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/hwcfg/RI-2023.11-linux-E/xtensa-elf/arch/lib/libhal.a
NON-NNE 
Source:  /vendor/mediatek/proprietary/tinysys/adsp/HIFI5_SP/build/patch/mt6989 _a / libhal.a
Destination:  /vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/hwcfg/RI-2023.11-linux-H/xtensa-elf/arch/lib/libhal.a
v1 HiFi5 (DX-4)
The libhal.a for DX-3 and DX-4 are the same. If the destination path already has DX-3's libhal.a, there is no need to move DX-4's libhal.a.
NNE 
Source:  /vendor/mediatek/proprietary/tinysys/adsp/HIFI5_SP/build/patch/mt6991_b/ libhal.a
Destination:  /vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/hwcfg/RI-2023.11-linux-E/xtensa-elf/arch/lib/libhal.a
NON-NNE 
Source:  /vendor/mediatek/proprietary/tinysys/adsp/HIFI5_SP/build/patch/mt6991_a/ libhal.a
Destination:  /vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/hwcfg/RI-2023.11-linux-H/xtensa-elf/arch/lib/libhal.a



Figure  1 2 . Example of  Makefile Non - support


Figure  1 3 . Example of  Makefile Non-support  – Replace by User


Figure  1 4 . Example of  Makefile Support  – Replace  by  Makefile
Tool Chain Version
Toolchain  Ver .
Platform
RG-2017.6
P90  (AndroidP)
RI-2018.0
P90(Android Q~), G90 , 5G_L/H/H+, 5G_A/A+
RI-2019.1
5G_B/Next-A/DX-1/Next-A2/DX-P
RI - 2021.8
DX-2 / 22H /23P /24P
RI - 2023.11
D X- 3 /DX-4
Compiler
    The compiler version are listed by toolchain and shown as below:
Toolchain Ver.
Compiler
RG-2017.6 / RI-2018.0 / RI-2019.1
XCC
RI - 2021.8 /RI.2023.11
XT-CLANG

The RI-2021.8 release does not include the legacy Xtensa C/C++ compiler (XCC). As Cadence previously announced, new versions of XCC won’t be released in the future, and Xtensa Software Tools will not include XCC. Cadence will develop new compiler features and support for new language standards exclusively on the XT-CLANG compiler. 
For the optimization policy, XT-CLANG tends to apply function inlining more aggressively than XCC according to Cadence’s statement. Programs with many small, non-static functions may see a performance boost, but more aggressive inlining may also lead to an increase in code size.
Build Command
    The Android full build command will bypass building the HiFiX DSP. We can build the HiFiX DSP by the following commands:
Android Full Build with HiFiX DSP
BUILD_WITH_XTENSA=yes   mosesq make -j40 -k 2>&1 | tee b.log    (remove mosesq if you don’t support this command)
output folder:  {out}/target/product/{project_name}/
Bulid Tinysys (Both HiFiX and SCP) (A0 structure only)
BUILD_WITH_XTENSA=yes   vendor/mediatek/proprietary/tinysys/freertos/source/tools/build_tinysys.sh -j24 2>&1 | tee adsp.log
output folder:  {out}/target/product/{project_name}/
Build ADSP only
Path
HiFi3 A0: $cd vendor/mediatek/proprietary/tinysys/freertos/source
HiFi3 B0: $cd vendor/mediatek/proprietary/tinysys/adsp/HIFI3
HiFi5: $cd vendor/mediatek/proprietary/tinysys/adsp/HIFI5_SP
PROJECT={project_name} make clean;  BUILD_WITH_XTENSA=yes  PROJECT={project_name} make adsp -j24 2>&1 | tee adsp.log
output folder: 
HiFi3 A0:  vendor/mediatek/proprietary/ tinysys / freertos /source/ tinysys-scp_out /
HiFi3 B0:  vendor/mediatek/proprietary/ tinysys / adsp /HIFI3/ tinysys_out
HiFi5:  vendor/mediatek/proprietary/ tinysys / adsp /HIFI5_SP/ tinysys_out
Suggested Library Build Flags
-O3  -Wall  -mcoproc  -Werror  -mlongcalls  -LNO:simd  -ffunction-sections  -Wno-error=format -fdata-sections
3 rd  Party Libraries

Figure  1 3 .  3 rd  party  library  configurations
    To enable 3 rd  party library functionalities, please set CFG_3RDPARTY_PROJECT as “yes”, and add a 3 rd  party library to a specified path. Otherwise, it will use a dummy library (just bypass the sound processing). Besides, It will also use dummy lib if the specified path doesn’t exist even if the option is enabled.
    There is no limitation on the folder path. You can decide the path by yourself and just modify the specified path on the Makefile:
INCLUDES, C_FILES, and LIBFLAGS
Folder existence check command:  ifeq ($(shell test -e $(LICENSE_PREBUILD_DIR) && echo -n yes),yes)
    Or you can just follow our folder structure, create a folder as the following: (this repo will be removed before release to customer, which is used to place 3rd party libraries.) 
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/aurisys
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI5/3rd_party/aurisys
    The CFG_3RDPARTY_PROJECT is only set as yes in MTK's Internal test. The default released dsp image will be compiled without setting CFG_3RDPARTY_PROJECT. This is because MTK doesn't have the rights to release 3rd party library to customers directly. You don't need to follow MTK's rule. You can  just set CFG_3RDPARTY_PROJECT as no and modify the platform.mk to assign the library path directly. However, we suggest to follow the same folder structure so that you don't need to modify platform.mk everytime when there's a new patch release which contains the platform.mk.
Compile  MTK In-house  DSP /RV55  –  share d  SCP  software
Config uration
F or  platforms   shared  SCP software , there is no standalone ADSP subsystem ;  the option MTK_AUDIODSP_SUPPORT is  configured  to  n o. But configure adsp_type to RV55 in kernel DTS and  CFG_SCP_AUDIO_FW_SUPPORT in tinysys SCP to indicate that  audio offload is supported on  the  SCP subsystem .
Feature
Option
Location
Audio DSP merged in SCP sub sys
CFG_SCP_AUDIO_FW_SUPPORT
platform.mk in SCP
Offload Codec
MTK_AUDIO_TUNNELING_SUPPORT
ProjectConfig.mk
Voice Call Speech Enhancement in Audio DSP
MTK_AURISYS_PHONE_CALL_SUPPORT
ProjectConfig.mk
Offload VOIP/Record
VIR_VOIP_RECORD_AUDIODSP_SUPPORT


Build Server
Cadence  recommended to use  Red Hat Enterprise  (officially supported platform), if you don’t have RHEL, you can use CentOS instead.
While  they  do not officially support  U buntu, we are able to install Xtensa tools on  Ubuntu  Linux14.04  without issues.
Makefile Locations:
Android:  device\mediatekprojects
Kernel: N/A
RV55:   vendor\mediatek\proprietary\tinysys\scp
Audio DSP 
AP Configuration:  MTK_TINYSYS_SCP_SUPPORT
Kernel Configuration:  CONFIG_   MTK_TINYSYS_SCP_SUPPORT
DSP Configuration:  CFG_SCP_AUDIO_FW_SUPPORT
Note:
DSP configuration is the main switch of Audio DSP on  platforms  shared SCP software.
Voice Call Speech Enhanement
Note
An Inspection mechanism to check consistency of Android, Kernel, and DSP configurations
The speech enhancement would be executed in the Modem side if we disable the option.
AP Configuration:  MTK_AURISYS_PHONE_CALL_SUPPORT
Kernel Configuration:  CONFIG_MTK_AURISYS_PHONE_CALL_SUPPORT
DSP Configuration:  CFG_MTK_AURISYS_PHONE_CALL_SUPPORT
VOIP/Recording
Note
DSP option is always on
Use  VIR_VOIP_RECORD_AUDIODSP_SUPPORT  defined in the XML to enable/disable the DSP feature
3 rd  party Library
Note
The 3rd party library should be released by the 3rd party. MTK will verify 3rd party library internally and remove them before release
Compare to  Cadence  HiFi series, n o  DSP configuration  is needed  for  MTK In-house  RV DSP platform  t o enable the functionalities the 3 rd  party library. 
Default Image
Compare to Cadence HiFi series, no additional license is required to build DSP images on MTK In-house RV DSP platform. DSP source code is built along with alps project build.
Tool Chai n
MDSP PDK version v1.10.0 and later for  platforms  shared SCP software . Please contact MTK MDSP team to get the suitable version of PDK for the product line.
Build Command
The Android full build and SCP partial build are both available to build  MTK In-house  RV DSP image from source code.   For SCP partial build, you can use the following commands,
Build SCP only
Path
$cd vendor/mediatek/ proprietary/tinysys /scp
PROJECT= {project_name}   TARGET_BOARD_PLATFORM= {platform }  BUILD_TYPE=debug make -j 36 2>&1 | tee  scp .log
Output folder :
vendor/mediatek/proprietary/tinysys/scp/tinysys_out
Suggested Library Build Flags
-O3  -Wall  -mcoproc  -Werror  -mlongcalls  -LNO:simd  -ffunction-sections  -Wno-error=format -fdata-sections   -funwind-tables
-funwind-tables  tells the compiler to generate .eh_frame which is used in runtime backtrace. It starts to  be supported from CodeLine version 300.
Please note that if the build flag does not include the  -funwind-tables  flag, it will not be possible to resolve the backtrace within the library at runtime. However, if only the  -g  flag is added, although the backtrace cannot be resolved at runtime, it can still be analyzed in lldb.
3 rd  Party Libraries
There is no limitation on the folder path. You can decide the path by yourself and just modify the specified path on the Makefile:
INCLUDES, C_FILES, and LIBFLAGS
Folder existence check command:  ifeq ($(shell test -e $(LICENSE_PREBUILD_DIR) && echo -n yes),yes)
    Or you can just follow our folder structure, create a folder as the following: (this repo will be removed before release to customer, which is used to place 3rd party libraries.) 
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/RV55/3rd_party/aurisys
C ompile  MTK In-house  DSP /RV55V & /RV55  – Standalone ADSP  software
C onfiguration
F or platforms  using   MTK In-house  RV  DSP ( standalone ADSP ) ,  features and options are the same as the platforms using Cadence Hifi DSP.
Feature
Option
Location
Audio DSP (main switch of DSP)
MTK_AUDIODSP_SUPPORT
ProjectConfig.mk
Offload Codec
MTK_AUDIO_TUNNELING_SUPPORT
ProjectConfig.mk
Voice Call Speech Enhancement in Audio DSP
MTK_AURISYS_PHONE_CALL_SUPPORT
ProjectConfig.mk
Offload VOIP/Record
VIR_VOIP_RECORD_AUDIODSP_SUPPORT


Build Server
The Ubuntu 16.04 is recommended for MTK In-house RV SDK tools. Other environment requirements please refer to the document  Mediatek DSP – MRV Platform SDK User Manual.pdf   from DMS release.
Makefile Locations:
Android:  device\mediatekprojects
Kernel:
RV55:   vendor\mediatek\proprietary\tinysys\adsp\riscv
Audio DSP (The main switch of Audio DSP)
Configuration Check
We have an inspection mechanism that the configurations of Android, Kernel, and DSP should be matched.
AP Configuration:  MTK_AUDIODSP_SUPPORT
Kernel Configuration:  CONFIG_MTK_AUDIODSP_SUPPORT
DSP Configuration:  CFG_MTK_AUDIODSP_SUPPORT
Voice Call Speech Enhanement
Note
An Inspection mechanism to check consistency of Android, Kernel, and DSP configurations
The speech enhancement would be executed in the Modem side if we disable the option.
AP Configuration:  MTK_AURISYS_PHONE_CALL_SUPPORT
Kernel Configuration:  CONFIG_MTK_AURISYS_PHONE_CALL_SUPPORT
DSP Configuration:  CFG_MTK_AURISYS_PHONE_CALL_SUPPORT
VOIP/Recording
Note
DSP option is always on
Use  VIR_VOIP_RECORD_AUDIODSP_SUPPORT  defined in the XML to enable/disable the DSP feature
3 rd  party Library
Note
The 3rd party library should be released by the 3rd party. MTK will verify 3rd party library internally and remove them before release
Compare to Cadence HiFi series, no DSP configuration is needed for MTK In-house RV DSP platform to enable the functionalities the 3 rd  party library . 
Default Image
Compare to Cadence HiFi series, no additional license is required to build DSP images on MTK In-house RV DSP platform. DSP source code is built along with alps project build.
Tool Chain
Please contact MTK MDSP team to get the suitable version of PDK for the product line.
B uild Command
The Android full build and ADSP partial build are both available to build MTK In-house RV DSP image from source code. For ADSP partial build, you can use the following commands,
Build ADSP only
Path
$cd vendor/mediatek/proprietary/tinysys/adsp/riscv
PROJECT={project_name} TARGET_BOARD_PLATFORM={platform} BUILD_TYPE=debug make -j 36 2>&1 | tee adsp.log
Output folder:  
vendor/mediatek/proprietary/tinysys/adsp/riscv/tinysys_out
S uggested Library Build Flags
Please refer to  Mediatek DSP – MRV Platform SDK User Manual.pdf  from DMS release. 
3 rd  Party  Libraries
There is no limitation on the folder path. You can decide the path by yourself and just modify the specified path on the Makefile:
INCLUDES, C_FILES, and LIBFLAGS
Folder existence check command:  ifeq ($(shell test -e $(LICENSE_PREBUILD_DIR) && echo -n yes),yes)
    Or you can just follow our folder structure, create a folder as  follows : (this repo will be removed before release to customer, which is used to place 3rd party libraries.) 
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/RV55/3rd_party/aurisys
Download by Flashtool
    The DSP image can be downloaded to the MTK devices  using Flashtool, as shown in  the following figure.   For  the Cadence HiFi series platform and the MTK In-house RV DSP (standalone ADSP), please select the partition  name  audio_dsp.img. For platform s  share d  SCP  software ,  for example, 24M , please select scp.img .
     In addition to replacing the adsp image, the preloader image also needs to be replaced with the DIS_SBOOT version, such as preloader_$PROJECT_DIS_SBOOT.bin. If there are two preloader images, preloader_a and preloader_b, on the  F lashtool, please replace both with the DIS_SBOOT version of the image.  

Figure  1 4 .  Flashtool to update Audio DSP Image

Figure  1 5  Flashtool to Update Preloader Image
Software Architecture
Free-RTOS
The current FreeRTOS version  for all   projects  is shown in the below table . Generally, the user of Audio DSP doesn’t need to modify the code of the RTOS.
Projects
FreeRTOS version
5G-L/H/H+, 5G-A, 5G-B, 5G-C,
Next D, Next A, Next A2, 22H, 23P, 24P,
DX-1, DX-1 Pro, DX-P, DX-2, DX-3, DX-4
10.1.0
24M
10.1.0.1
DX-5 ,  25Ms,  26M
11.0.0

Heap Size
    The heap size of  Cadence HiFi  DSP  and  MTK In-house  RV  DSP ( standalone ADSP )   is defined in:
A0 structure:
\vendor\mediatek\proprietary\tinysys\freertos\source\project\HIFIx_A\mtxxxx\platform\platform.mk
###################################################################
# Heap size config
###################################################################
# default heap size
CFLAGS += -DconfigTOTAL_HEAP_SIZE='( ( size_t ) ( 2 * 1024 * 1024 ) )'

\vendor\mediatek\proprietary\tinysys\freertos\source\project\HIFIx_A\mtxxxx\platform\inc\FreeRTOSConfig.h
/* Minimal heap size to make sure examples can run on memory limited
   configs. Adjust this to suit your system. */
#ifndef configTOTAL_HEAP_SIZE
#define configTOTAL_HEAP_SIZE           ( ( size_t ) (256 * 1024) )
#endif



B 0 structure  for Cadence HiFi DSP :
\vendor\mediatek\proprietary\tinysys\adsp\HIFI3\project\mtxxxx\HIFI 3 _ x  \platform\platform.mk \vendor\mediatek\proprietary\tinysys\adsp\HIFI5_SP\project\mtxxxx\HIFI5_x \platform\platform.mk
###################################################################
# Heap size config
###################################################################
# default heap size
CFLAGS += -DconfigTOTAL_HEAP_SIZE='( ( size_t ) ( 2 * 1024 * 1024 ) )'



\vendor\mediatek\proprietary\tinysys\ adsp\HIFI3 \project\mtxxxx \HIFI3_x  \platform\inc\FreeRTOSConfig.h \vendor\mediatek\proprietary\tinysys\adsp\HIFI5_SP\project \mtxxxx \HIFI5_x   \platform\inc\FreeRTOSConfig.h
/* Minimal heap size to make sure examples can run on memory limited
   configs. Adjust this to suit your system. */
#ifndef configTOTAL_HEAP_SIZE
#define configTOTAL_HEAP_SIZE           ( ( size_t ) (256 * 1024) )
#endif



B 0 structure for  MTK In-house  RV  s tandalone ADSP
\vendor\mediatek\proprietary\tinysys\adsp\riscv\project\mtxxxx\RV55_X \platform\platform.mk
###################################################################
# Heap size config
###################################################################
# default heap size
CFLAGS += -DconfigTOTAL_HEAP_SIZE='( ( size_t ) (  4.5  * 1024 * 1024 ) )'



\ vendor\mediatek\proprietary\tinysys\adsp\ riscv \project \mtxxxx \ RV5 5_x   \platform\inc\FreeRTOSConfig.h
/* Minimal heap size to make sure examples can run on memory limited
   configs. Adjust this to suit your system. */
#ifndef configTOTAL_HEAP_SIZE
#define configTOTAL_HEAP_SIZE           ( ( size_t ) (256 * 1024) )
#endif



The heap size of SCP is defined in:
\vendor\mediatek\proprietary\tinysys\scp\project\RV55_A\mtxxxx\platform\platform.mk
ifeq ($(CFG_MTK_AURISYS_PHONE_CALL_SUPPORT),yes)
$(eval TOTAL_HEAP_SIZE=$(shell echo $$(($(TOTAL_HEAP_SIZE) +  (2 * 1024) ))))
endif


    You can modify the heapsize if needed. If the heap size is defined both in platform.mk and FreeRTOSConfig.h, the value of platform.mk will be adopted.
Audio Framework
    As the following figure depicts, the data path of each scenario is already defined, and the required task will be created. What the user need to do is to add or replace your audio/voice effect upon the created tasks. For example, the user can add more supported offload codec in the offload task, and add audio effect (please refer  to the  Aurisys Introduction.pptx )in the primary task, etc. Please contact Mediatek if you need to create a new scenario or an application with different data flow.


Figure  2 1 .  Audio Framework
Aurisys
Abstract
The requirement for sound quality enhancements that add listening pleasure has been increasing. To enrich the listening experience of using mobile devices, there is an increasing number of sound processing solutions provided by vendors.
Aurisys is introduced to facilitate the sound processing solution development and use of MTK platforms. Aurisys is a framework constructed upon Android Audio Framework. It includes standardized interfaces for sound processing and tuning, integrated DSP sound subsystem, and software debug interface.
Aurisys Aims
  As the following figure depicts, our target  is to make the replacement/integration of vendor IPs as convenient as possible. We defined a standardized interface to which is platform-independent, so that the software can be re-used. By following the user interface standards we create a more consistent experience for the developers. Please refer to the following document to get more detailed information:  Aurisys_Introduction, Aurisys_Tuning_Guide,  and Lib_Verifier_User_Guide .

Figure  2 2 .  Concept of Aurisys

Development Flow

Figure  2 3 .  Aurisys Development Flow
Software Development Guidance
Scenario Based DVFS
We don’t have an automatic DVFS mechanism to detect current DSP loading and adjust the DSP clock rate automatically. What we do is to register a clock rate requirement table for a specified application. When the application starts, a provided API would be called to notify the system. Then the system will adjust the clock rate, according to the sum of clock rate requirement for active applications.
    The clock rate requirement change would happen when an application is active, the sampling rate is changed, or the device is changed. The clock registered API should be called when these events happen.

Figure  3 1 .  Scenario Based DVFS flow (P80 as example)
A clock rate requirement callback function should be implemented. This function is used to look up the MCPS under a specified parameter. For customization, what we need to do is to modify the MCPS table. Note that we can register several libraries to one application. For example, a playback application can have SRC, DC removal, shifter, and playback effects. Once a playback application is activated, the clock rate requirements of all libraries registered in this application would be counted.
Figure  3 2 .  MCPS Lookup Flow
The following are the related files: 
Path  (HIFI3/HIFI5)
File
Description
drivers/HIFIX_A/[project]/feature_manager/inc/
feature_manager.h
Feature ID and SWIP ID definition
drivers/HIFIX_A/[project]/feature_manager/src
feature_manager.c
Feature management; feature enable/disable API; update total MCPS information API
drivers/HIFIX_A/[project]/dvfs/inc
dvfs_config_parser.h
Declare MCPS lookup callback function and dvfs_swip_config_t

dvfs_swip_table.h
MCPS lookup callback function required definitions

dvfs.h, dvfs_common.h
DVFS driver required definitions
drivers/HIFIX_A/[project]/dvfs/src
dvfs_config_parser.c
MCPS lookup callback function implementation

dvfs.c, dvfs_common.c
DVFS driver
    If you want to create a new library by yourself, you need to register a callback function first as the following example. Note that the look up callback function should be registered by each library. Then we can use this API  dvfs_add_swip(Feature_ID, SWIP_ID, adsp_dvfs_swip_config)  to link the library (SWIP ID) and the application (Feature ID). It is allowed to link multiple libraries to an application.

Figure  3 3 .  Register a callback function
    Then the second step is to implement a look up callback function as follows:

Figure  3 4 .  MCPS Look up Callback Function Example

Audio Effects
ACF Working Flow on DSP
Audio Compensation Filter (ACF) is used for compensating the audio quality according to physical case. ACF is applied on audio stream during audio playback.  For ACF on HIFI3, ACF related configurations and control flow are controlled by AP side (e.g. IIR coefficient, ACF switch and Loudness switch), and process is on HIFI3 side .
Android
File Name
Path
Related Customizaiton
aurisys_config_hifi3.xml
aurisys_config_rv.xml
a urisys_config_adsp.xml
\vendor\mediatek\proprietary\external\aurisys
(phone path :) system\vendor\etc\
Depicts the library’s capability and using scenario.
PlaybackACF_AudioParam.xml
\device\mediatek\common\audio_param\
(phone path :) system\vendor\etc\audio_param
High-pass IIR coefficient
Band-pass IIR coefficient
Low-pass IIR coefficient
audio_custom_exp.h
\vendor\mediatek\proprietary\custom\(%porj)\hal\audioflinger\audio
Turn on/off ACF (ENABLE_AUDIO_COMPENSATI ON_FILTER)
MtkAudioLoudc.c
\vendor\mediatek\proprietary\external\aurisys\libaudio
loud\
(phone path :) system\vendor\lib\libaudioloudc.so
ACF/DRC/HCF  aurisys parsing library wrapper  implementation
MtkAudioLoudc.h
\vendor\mediatek\proprietary\external\aurisys\libaudioloud \
ACF/DRC/HCF  aurisys parsing library wrapper header file
AudioCompFltCustParamc.c
\vendor\mediatek\proprietary\external\AudioCompensationFilter\
Interact with AudioParamParser ,getting parameters from XML 
AudioCompFltCustParamc.h
\vendor\mediatek\proprietary\external\AudioCompensationFilter\
C code implementation header file for param related function.
AudioCompensationFilterc.h
\vendor\mediatek\proprietary\external\AudioCompensationFilter\3
C code implementation header file, define audio compensation type and mode.
arsi_besloudness.c
\vendor\mediatek\proprietary\tinysys\freertos\source\middleware\lib\aurisys\lib\common\libbesloudness
ACF/DRC/HCF  aurisys prosessing library wrapper  implementation
arsi_besloudness.h
\vendor\mediatek\proprietary\tinysys\freertos\source\middleware\lib\aurisys\lib\common\libbesloudness
ACF/DRC/HCF  aurisys prosessing library wrapper header file
libbesloudness.a
\vendor\mediatek\proprietary\tinysys\freertos\source\middleware\lib\audio\hifi3\libbesloudness
ACF/DRC/HCF library on HIFI3
We separate ACF working folw for two parts: paring part on AP side, and processing part on DSP side. The
post process will be triggered and done through the ARSI standard interface. Belows are the changes in our design. 
In  aurisys_config_ adsp .xml   in  vendor\mediatek\proprietary\external\aurisys
Add BesSound libarary description on DSP
In  vendor\mediatek\proprietary\external\aurisys\libaudioloud   add below files for parameter parsing
MtkAudioLoudc.c
MtkAudioLoudc.h
In  vendor\mediatek\proprietary\external\AudioCompensationFilter  b add
AudioCompFltCustParamc.c
AudioCompFltCustParamc.h
In vendor\mediatek\proprietary\tinysys\freertos\source\middleware\lib\aurisys\lib\common\ libbesloudness add below files for processing
arsi_besloudness.c
arsi_besloudness.h
In  audio hal, vendor\mediatek\proprietary\hardware\audio, we use
  #define MTK_AUDIODSP_SUPPORT  and  MTK_AURISYS_FRAMEWORK_SUPPORT   to identify the new process method. 
The compile option is set in  device\mediatek\{project}\ProjectConfig.mk      
At the bootup stage, the ARSI framework init ialize  and reads  the content of  aurisys_config_ adsp .xml , establishing the framework function links and libraries’ function links. When first running ACF, the AudioParamParser reads back the paramenters in  PlaybackACF_AudioParam.xml  and stores in the structure.  The processing starts from AudioDspStreamManager, which send playback data to DSP for processing. Through the aurisys framework, we use the generic interface  aurisys_process_dl_only  on DSP  as the process entry.
1. Record current scenario, output configs and library lists 2. The input buffer for library processing 3. The output buffer after library processing  aurisys_process_dl_only ( mAurisysLibManager, mAudioPoolBufDlIn,  mAudioPoolBufDlOut );
1. Record current scenario, output configs and library lists
2. The input buffer for library processing
3. The output buffer after library processing

 aurisys_process_dl_only (
mAurisysLibManager, mAudioPoolBufDlIn,  mAudioPoolBufDlOut );




    The working  flow is depicted as below, there are five functional blocks.  Application UI, Framework, Audio HAL, Device and External hal. The Aurisys Framewok is implemented in Audio Hal and related ARSI general API and  aurisys_config.xml  are defined in external block.
( 3 ) ( 5 ) ( 4 ) ( 2 ) ( 2 ) (1)
( 3 )
( 5 )
( 4 )
( 2 )
( 2 )
(1)
The aurisys framework is initialized by AudioALSAHardware when audioserver start.
During  the initialization stage, the aurisys controller parse  aurisys_config_ adsp .xml , establishing the function callback between library and framework, and dlopen audiofmtconvlibraries (bit converter, samplerate converter.) and pass the library configuration to DSP .
For ACF library, we  parse the  ACF_param.xml  and store  the parameters into the structure. These  parameters set the processing frequency and generate corresponding filtercoefficients. 
When normal or fast playback starts, we create AudioDspStreamManager to handle the mixed playback stream, and create libmanager and libhandler to handle the processing flow under this scenario. As we can retrieve the stream and hardware info, we store these information and provide to the aurisys framework. Library could use those info to parse libaray parameter.
After parsing library parameter, aurisys framework will pass the parameter form AP to DSP.
The post-processing is done by calling   aurisys_process_dl_only()   . The framework handles the data transformation and operates with libraries through ARSI generic interface. If the playback setting is not compatible to the library setting, the Aurisys Framework  will trigger samplerate converter or bit converter to do the transformation. This ensure the process can be done without library modification.
There are two key points for the libray  porting on DSP .
One is to depicts the library configuration in  aurisys_config_ adsp .xml .
Anothor one is to implement the wrapper between ARSI interface and library functions.
    In  aurisys_config_ adsp .xml , we first indicate the using scenario and list the library component used. We depict the library’s attribute, such as file path, library supported samplerate, processing format, frame size,  data buffer type (uplink or downlink), channel number, and debug level….etc. These attributes are compared to the input pcm data and indicate the library setting  during processing. The user can change the library setting by simply modify the xml file. This enlarge the flexibility and reduce the coding effort.


To implement the wrapper between library and ARSI interface, we comparing and mapping their functionality as the table shows. 

mapping the interface between ARSI and Effect
Dynamic turn on/off library log using adb command
Besides setting xml, user can runtime key in adb debug command to enable/disable library processing log in mobile log.
ON
adb shell "AudioSetParam AURISYS_SET_PARAM, DSP,PLAYBACK ,MTKBESSOUND,ENABLE_LOG, 1 =SET"
OFF
adb shell "AudioSetParam AURISYS_SET_PARAM, DSP,PLAYBACK ,MTKBESSOUND,ENABLE_LOG, 0 =SET"


Audio Loudness  Working Flow on DSP
Loudness (DRC)  is  an audio post-processing technique to improve the loudness of audio signal and ringtone playback by using dynamic range control and frequency component manipulation 

Android
File Name
Path
Related Customizaiton
PlaybackDRC_AudioParam.xml
\ device\mediatek\common\audio_param \
DRC related coefficient  for audio and ringtone




ProjectConfig.mk




device\ mediatekprojects \(%proj)\
Is the platform support  Loudness  MTK_BESLOUDNESS_SUPPORT


Is the platform support  Loudness  processing on HAL layer
MTK_BESLOUDNESS_ RUN_WITH_HAL
( Trun on need to  combine  with MTK_AURISYS_FRAMEWORK_SUPPORT=yes)
DRC in HAL path
MtkAudioLoudc.c
\vendor\mediatek\proprietary\external\aurisys\libaudioloud \
(phone path :) system\vendor\lib\libaudioloudc.so
ACF/DRC/HCF  aurisys wrapper  implementation  for library parameter parsing
MtkAudioLoudc.h
\vendor\mediatek\proprietary\external\aurisys\libaudioloud \
ACF/DRC/HCF  aurisys wrapper header file
Android.mk
\vendor\mediatek\proprietary\external\aurisys\libaudioloud \
Check ProjectConfig MTK_BESLOUDNESS_SUPPORT&MTK_BESLOUDNESS_RUN_WITH_H AL.
Turn on DRC apply into HAL  layer
DRC in HIFI3 path
arsi_besloudness.c
\vendor\mediatek\proprietary\tinysys\freertos\source\middleware\lib\aurisys\lib\common\libbesloudness
ACF/DRC/HCF  aurisys prosessing library wrapper  implementation
arsi_besloudness.h
\vendor\mediatek\proprietary\tinysys\freertos\source\middleware\lib\aurisys\lib\common\libbesloudness
ACF/DRC/HCF  aurisys prosessing library wrapper header file
libbesloudness.a
\vendor\mediatek\proprietary\tinysys\freertos\source\middleware\lib\audio\hifi3\libbesloudness
ACF/DRC/HCF library on HIFI3
Generally, the  Loudness (DRC)  parameters are stored in  XML .
In the case, when the first time of  Loudness (DRC)  processing, the  Loudness (DRC)  parameters will be applied as the default  Loudness (DRC)  parameter listed in  PlaybackDRC_AudioParam.xml .
Then users can modify some parameters in Audio Tool if needed.
If  config  MTK_BESLOUDNESS_SUPPORT  = yes   and  MTK_BESLOUDNESS_ RUN_WITH_HAL = yes  and  MTK_AUDIODSP_SUPPORT = yes
The  HAL  working flow of Loudness (DRC) will be show as the figure below:

Figure  3 5 . DRC Working  at  DSP  overview
Config DRC enable
Config DRC enable
Figure  3 6 .  DRC Working  at  DSP  Flow
Debug SOP
Issue Feedback to MTK
     For  Cadence  HiFi series  and MTK In-house RV  ( standalone ADSP )  series ,  p lease refer to  DOC\ADSP_Debugging_Guideline.docx  for detail.
For  platforms  share d  SCP  software , please find   document  MTxxxx_SCP_Development_Guide.docx   from DMS release.
Performance Issue
    If  a  performance issue happens (underflow, timeout, etc,.). Please  refer to  DOC\ADSP_Profiling_Guideline.docx  for  details .
Enable UART log
Port
23P /24P : please use  UART3
Other platforms: please use  UART2
Configurations
CFG_UART_SUPPORT = yes
For Cadence HiFi DSP
project\mt6xxx\HIFIx_A\platform\platform.mk       ##DSP A
project\mt6xxx\HIFIx_B\platform\platform.mk       ##DSP B
For MTK In-house RV DSP (Standalone ADSP)
project\mt6xxx\RV55_A\platform\platform.mk       ##DSP A
project\mt6xxx\RV55_B\platform\platform.mk       ##DSP B
Adb command
adb shell "echo uart_en 1 > sys/kernel/debug/audiodsp0"          ##DSP A
adb shell "echo uart_en 1 > sys/kernel/debug/audiodsp1"         ##DSP B
Integration Guideline
Get the Development Tools
Apply for an Account
    Please make sure you’ve sign the NDA first.
https://online.mediatek.com/_layouts/15/mol/accountprofile/account_only_for_user.aspx

Figure  5 1 .  Account Application Guilde Step 1

Figure  5 2 .  Account Application Guilde  Step  2

Figure  5 3 .  Account Application Guilde Step 3
    Note that what you need is FEX (so that we can send the software release by e-mail to your account), and MOL (so that you can download the required tools on the website). Please also  indicate that you need the authority  of WCX SP Tool in the application form.
Download the Released Software to the Device
    Then you’re allowed to search and download tools from MOL website:  https://online.mediatek.com/
    To downloadthe software to the device, please download flashtool in the website. You can also find the latest aurisys here.

Figure  5 4 .  MOL Example

Scatter File
    You can find the  MT XXXX _Android_scatter  in  out_[project]/target/product/[project]  folder. If you didn’t get the modem image in the software release, you need to remove the following Modem description of the scatter file:

Figure  5 5 . Modem Image Description in  Scatter File
     If it doesn’t work, please try to modify the description as follows:
File_name: NONE
Is_download: false
Download Whole Software Load
     Please refer to  Download by Flashtool . Please select “format all + download” in the first use of the device.
Download Step
Load the scatter file
Press the download button
Plugin USB cable to the device (w/o battery, then the flash tool will start the download process. 
Another way is plugin the USB cable to the device first, and then press download button; finally, reboot the device.
Update DSP Only
    After the full software is downloaded to the device, then you can update dsp binary when needed. Please just select and update audio_dsp, and then select download only. 
   To download audio dsp only, you need to disable verify boot   and re-compile the android load.
Disable Verify boot
vendor/mediatek/proprietary/bootable/bootloader/preloader/custom/[project_name]/[project_name].mk
MTK_SEC_USBDL=ATTR_SUSBDL_DISABLE
MTK_SEC_BOOT=ATTR_SBOOT_DISABLE
Integration
Environment
Toolchain
The toolchain for  MTK In-house RV DSP platforms  (both SCP / ADSP Co-subsys and Standalone ADSP) is built in the alps project , so t here is no need to create a path to place the toolchain.
MTK won’t release toolchain  for Cadence HiFi DSP platforms , so the toolchain folder will be removed before we release the codebase, please create the folder and license the toolchain from Cadence .
Please create a folder in the following path: 
/prebuilts/xcc/linux-x86/xtensa/[version]-linux/XtensaTools 
/prebuilts/clang/xtensa/linux-x86/[version]-linux/XtensaTools 
For example, If the toolchain version is RI-2019.1, please create a folder in the following path:  /prebuilts/xcc/linux-x86/xtensa/RI-2019.1-linux/XtensaTools
Then please copy the licensed toolchain into this created folder.
Hwcfg
The hwcfg for  MTK In-house RV DSP platforms  (both SCP / ADSP Co-subsys and Standalone ADSP) is built in the alps project, so there is no need to create a path to place the hwcfg.
Please refer to  Aurisys_exe_Vx.xxxx.xx\CONFIG\Readme  to check which version of hwcfg you should use
For example, if you use 5G_B, then create a folder in the following path: 
/vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/HIFI3/3rd_party/hwcfg/RI-2019.1-linux/
Then you can find xtensa-elf, misc, and config folder in RI-2019.1-linux.rar (from Aurisys_exe_Vx.xxxx.xx\CONFIG\HiFi3\Linux\RI-2019.1-linux\v1), please copy them to the folder you just created.

Param
The param file for  MTK In-house RV DSP platforms  (both SCP / ADSP Co-subsys and Standalone ADSP) is built in the alps project, so there is no need to copy a param file.
If you use 5G_B, from   Aurisys_exe_Vx.xxxx.xx\CONFIG\Readme , you should use RI-2019.1-linux. You can find mt6853.params in v1\RI-2019.1-linux.rar
Copy the mt6853.params to the following path:  (create the folder if it doesn’t exit)
/prebuilts/xcc/linux-x86/xtensa/RI-2019.1-linux/XtensaTools/config/

DSP Library
The vendor library would also be removed before we release the codebase
The library path is not limited, as long as you add the specified path  in  the makefile.
The library path in MTK codebase is (please create it if it doesn’t exist)  vendor/mediate/proprietary/tinysys/adsp/license/prebuilt/HIFIX/3rd_party/aurisys  (for Cadence HiFi DSP) vendor/mediate/proprietary/tinysys/adsp/license/prebuilt/RV55/3rd_party/aurisys (for MTK In-house RV DSP)
Please create your lib folder in above path

Then modify the makefile so that we can link to your lib; the makefile path s are shown below.  M akefile path for MTK In-house RV DSP (SCP/ADSP Co-subsys) platforms please refer to  MTxxxx_SCP_Development_Guide.docx :
HIFI3 A0: /tinysys/freertos/source/project/HIFI3_A/mtxxxx/platform/platform.mk
HIFI3 B0: /tinysys/adsp/HIFI3/project/mtxxxx/[HIFI3_X]/platform/platform.mk
HIFI5 B0: /tinysys/adsp/HIFI5_SP/project/mtxxxx/[HIFI5_X]/platform/platform.mk
riscv:  /tinysys/adsp/riscv/project/mtxxxx/[ RV55 _X]/platform/platform.mk
Note that $(THIRDPARTY_LIB_DIR) indicates to tinysys/adsp/license/prebuilt/HIFIX/3rd_party
The macro is not applicable to MTK In-house RV DSP platforms.
Feature Distribution
    If there is dual core, the feature distributions are pre-defined as follows:
    DSP Core
Feature
Core  A
DL (Codec/ Audio Effect/ SmartPA/ VOIP DL)
Core  B
UL (VOIP UL/ Phone Call/ Record/ Ear Return)
Aurisys Porting Guide
A tipical aurisys library on ADSP has following three parts:
AP  side  parser library
DSP/SCP side process library
Aurisys config
AP Side Parsing Library
Use  foobar  as example, need add or modify below files for AP side parsing library

Path
File
Description
vendor/mediatek/proprietary/external/aurisys/ libfoobar
aurisys_foo_bar_parsing_lib.c
Aurisys AP parser library

aurisys_foo_bar_lib _private_type.h


Android.mk
Make file for libfoobar.so
device/mediatek/vendor/common
device.mk
For product packages
In  vendor/mediatek/proprietary/external/aurisys/ libfoobar
Put library parsing code (for example  aurisys_foo_bar_parsing_lib.c  and  aurisys_ foo_bar_lib _private_type.h ) in this folder  
In  device/mediatek/vendor/common
Add below line to add to package share library to vendor image (for example  libfoobar ).
PRODUCT_PACKAGES   += libfoobar
DSP/SCP Side Process Library
Path
File
Description
vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/ ( HIFI 3  or HIFI5  or RV55 )  /3rd_party/aurisys/ libfoobar
aurisys_foo_bar_processing_lib.c
Aurisys DSP process lib

aurisys_foo_bar_lib _private_type.h

vendor/mediatek/proprietary/tinysys/private/middleware/aurisys/ libfoobar

Aurisys SCP process lib

foo_bar_lib.a

vendor/mediatek/proprietary/tinysys/freertos/source/middleware/lib/aurisys/interface
arsi_library_entry_points.h
For A0 structure static library link
vendor/mediatek/proprietary/tinysys/common/drivers/audio/aurisys/interface

For B0 structure  and SCP  static library link
vendor/mediatek/proprietary/tinysys/freertos/source/project/HIFI3_A/$platform/platform
platform.mk
For A0 structure adsp makefile
vendor/mediatek/proprietary/tinysys/adsp/(HIFI3 or HIFI5_SP)   /project/$platform/HIFI3_A/platform

For B0 structure adsp core A makefile
vendor/mediatek/proprietary/tinysys/adsp/(HIFI3 or HIFI5_SP)   /project/$platform/HIFI3_B/platform
v endor/mediatek/proprietary/tinysys/adsp/riscv/project/$platform/RV55_A/platform
v endor/mediatek/proprietary/tinysys/adsp/riscv/project/$platform/RV55_B/platform

For B0 structure adsp core B makefile
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/$platform/platform

For SCP makefile
vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/$platform/$project/inc
cache_ld.h
SCP lib DRAM registration (SCP only)
For  ADSP  in  vendor/mediatek/proprietary/tinysys/adsp/license/prebuilt/(HIFI3 or HIFI5  or RV55 )/3rd_party/aurisys/
And for  SCP  in vendor/mediatek/proprietary/tinysys/private/middleware/aurisys/
Put library processing code and static library here
In
vendor/mediatek/proprietary/tinysys/freertos/source/middleware/lib/aurisys/interface
vendor/mediatek/ proprietary/tinysys/common/drivers/audio/aurisys/interface
Add below code in  arsi_library_entry_points.h
void foobar_arsi_assign_lib_fp(AurisysLibInterface *lib); //for declaration
In  AURISYS_LINK_LIB_NAME_TO_API  add:
} else if (!strcmp(name, "foo_bar")) {\
foobar_arsi_assign_lib_fp(api); \
} /
For  Cadence HiFi DSP  and  MTK In-house RV DSP (Standalone ADSP)  In  platform.mk , add
INCLUDES += $(THIRDPARTY_LIB_DIR)/aurisys/ libfoobar /
C_FILES += $(THIRDPARTY_LIB_DIR)/aurisys/ l ibfoobar / aurisys_foo_bar_processing_lib.c
LIBFLAGS += -Wl,-L$(THIRDPARTY_LIB_DIR)/aurisys/ libfoobar  -l foobar

And for   MTK In-house RV DSP (SCP/ADSP Co-subsys)  in  platform.mk , add
INCLUDES += $(PRIVATE_DIR)/middleware/aurisys/ libfoobar /
C_FILES += $(PRIVATE_DIR)/middleware/aurisys/ l ibfoobar / aurisys_foo_bar_processing_lib.c
LIBFLAGS += -L$(PRIVATE_DIR)/middleware/aurisys/ libfoobar  -l foobar
( MTK In-house RV DSP (SCP/ADSP Co-subsys) only ) For SCP in cache_ld.h, add
#define  CACHE_FOOENH_TEXT  \
         ?*/../private/middleware/aurisys/libfooobar/libfoobar_processing.a :*.o$(ENH_TEXT_SECTIONS)
#define CACHE_FOOENH_DATA \
         ?*/../private/middleware/aurisys/libfooobar/libfoobar_processing.a :*.o$(ENH_DATA_SECTIONS)
Aurisys Config
Before Android W:
Path
File
Description
device/mediateksample/ $project
aurisys_config_hifi3.xml
Aurisys config xml  for  ADSP
device/mediatekprojects/ $project


device/mediatek/ $platform
aurisys_config_rv.xml
Aurisys config xml for  SCP
vendor/mediatek/proprietary/external/aurisys


After Android W (start from DX5 platform):
Path
File
Description
device/mediateksample/ $project
aurisys_config_adsp.xml
Aurisys config xml for  ADSP/SCP
device/mediatekprojects/ $project


device/mediatek/ $platform


vendor/mediatek/proprietary/external/aurisys


Aurisys  config hierarchy: 
device/mediatekprojects/ $project  > device/mediateksample/ $project  > device/mediatek/ $platform  > vendor/mediatek/proprietary/external/aurisys
If any higher hierarchy folder contain aurisys   config  x ml  files , vendor image will use  it  as final config file.
In aurisys _config_adsp .xml
Choose wanted scenario to put your library:
enum {     /* playback */     AURISYS_SCENARIO_DSP_PRIMARY            = 0,   /* for primary output */     AURISYS_SCENARIO_DSP_OFFLOAD            = 1,   /* for mp3/aac... offload output */     AURISYS_SCENARIO_DSP_DEEP_BUF           = 2, /* for deep output */     AURISYS_SCENARIO_DSP_FAST               = 3, /* for fast output (need 5ms process) */     AURISYS_SCENARIO_DSP_PLAYBACK           = 4, /* last module before hardware if no samrtPA */     /* record */     AURISYS_SCENARIO_DSP_RECORD             = 5,  /* for record (normal record/camcorder …) */     AURISYS_SCENARIO_DSP_RECORD_FAST        = 6,  /* for fast record (need 5 or 10ms process) */     /* call & voip */     AURISYS_SCENARIO_DSP_PHONE_CALL         = 7,  /* for phone call */     AURISYS_SCENARIO_DSP_VOIP               = 8,  /* for VoIP call */     AURISYS_SCENARIO_DSP_CALL_FINAL         = 9,  /* for phone call speaker smartPA process */     AURISYS_SCENARIO_DSP_PLAYBACK_SMARTPA   = 10,  /* for smartPA process */     AURISYS_SCENARIO_DSP_MUSIC              = 11,  /* for deep + primary + offload mix stream */     AURISYS_SCENARIO_DSP_KTV                  = 12,  /* for in-ear monitor */     AURISYS_SCENARIO_DSP_HDR_RECORD   = 13,  /* for HDR record */      AURISYS_SCENARIO_DSP_GAMING           = 14, /* for gam e  mode */     /* control */     AURISYS_SCENARIO_DSP_SIZE,     AURISYS_SCENARIO_DSP_ALL,     AURISYS_SCENARIO_DSP_INVALID = 0xFFFFFFFF };
enum {
    /* playback */
    AURISYS_SCENARIO_DSP_PRIMARY            = 0,   /* for primary output */
    AURISYS_SCENARIO_DSP_OFFLOAD            = 1,   /* for mp3/aac... offload output */
    AURISYS_SCENARIO_DSP_DEEP_BUF           = 2, /* for deep output */
    AURISYS_SCENARIO_DSP_FAST               = 3, /* for fast output (need 5ms process) */
    AURISYS_SCENARIO_DSP_PLAYBACK           = 4, /* last module before hardware if no samrtPA */
    /* record */
    AURISYS_SCENARIO_DSP_RECORD             = 5,  /* for record (normal record/camcorder …) */
    AURISYS_SCENARIO_DSP_RECORD_FAST        = 6,  /* for fast record (need 5 or 10ms process) */
    /* call & voip */
    AURISYS_SCENARIO_DSP_PHONE_CALL         = 7,  /* for phone call */
    AURISYS_SCENARIO_DSP_VOIP               = 8,  /* for VoIP call */
    AURISYS_SCENARIO_DSP_CALL_FINAL         = 9,  /* for phone call speaker smartPA process */
    AURISYS_SCENARIO_DSP_PLAYBACK_SMARTPA   = 10,  /* for smartPA process */
    AURISYS_SCENARIO_DSP_MUSIC              = 11,  /* for deep + primary + offload mix stream */
    AURISYS_SCENARIO_DSP_KTV                  = 12,  /* for in-ear monitor */
    AURISYS_SCENARIO_DSP_HDR_RECORD   = 13,  /* for HDR record */
     AURISYS_SCENARIO_DSP_GAMING           = 14, /* for gam e  mode */
    /* control */
    AURISYS_SCENARIO_DSP_SIZE,
    AURISYS_SCENARIO_DSP_ALL,
    AURISYS_SCENARIO_DSP_INVALID = 0xFFFFFFFF
};
For example, if want add library for AURISYS_SCENARIO_RECORD, need to add below cofnig in  aurisys_config_ adsp .xml
In  <aurisys_scenarios> :
library name in aurisys_scenarios must be same as  lib_name  in  hal_librarys , digital_gain_lib_name must be one of the lib_name in that aurisys scenario. Lib define in  digital_gain_lib_name  means lib  can apply digital gain from aurisys   arsi_set_dl_digital_gain  / arsi_set_u l_digital_gain  APIs <aurisys_scenario aurisys_scenario="AURISYS_SCENARIO_DSP_RECORD"> <uplink_library_name_list digital_gain_lib_name=" foo_bar "> <library name=" foo_bar "/> </uplink_library_name_list> </aurisys_scenario>
library name in aurisys_scenarios must be same as  lib_name  in  hal_librarys , digital_gain_lib_name must be one of the lib_name in that aurisys scenario. Lib define in  digital_gain_lib_name  means lib  can apply digital gain from aurisys   arsi_set_dl_digital_gain  / arsi_set_u l_digital_gain  APIs
<aurisys_scenario aurisys_scenario="AURISYS_SCENARIO_DSP_RECORD">
<uplink_library_name_list digital_gain_lib_name=" foo_bar ">
<library name=" foo_bar "/>
</uplink_library_name_list>
</aurisys_scenario>


In  <hal_librarys> :
Enable library log Lib rary   s upported samle  rate  and format Define library name/ share library path/ parameter file path / adb_cmd_key here, library name must be the same with lib name defined in  aurisys_demo_lib_private_type.h Lib supported in/out ul process channels Only set frame_size_ms when b_interleve = “0” Else set frame_size_ms = “0”         <library name="   foo_bar  "                  lib_path=" /vendor/lib/lib foobar .so "                  lib64_path=" /vendor/lib64/lib foobar .so   "                  param_path=" /vendor/etc/lib foobar _param.bin "                  lib_dump_path="AUTO"                  adb_cmd_key=" LIB_CMD_KEY ">             <components>                 <!-- for aurisys_scene record streamin normal -->                 <component aurisys_scenario="AURISYS_SCENARIO_DSP_RECORD"                            sample_rate="48000"                              audio_format="AUDIO_FORMAT_PCM_16_BIT,AUDIO_FORMAT_PCM_32_BIT"                            frame_size_ms="20"                            b_interleave="0"                            enable_log="0"                            enable_raw_dump="0"                            enable_lib_dump="0"                            enhancement_mode="0">                     <uplink_process>                         <buf_in  data_buf_type="DATA_BUF_UPLINK_IN"                                  num_channels="1,2"/>                         <buf_out data_buf_type="DATA_BUF_UPLINK_OUT"                                  num_channels="1,2"/>                     </uplink_process>                 </component>             </components>         </library>
Enable library log
Lib rary   s upported samle  rate  and format
Define library name/ share library path/ parameter file path / adb_cmd_key here, library name must be the same with lib name defined in  aurisys_demo_lib_private_type.h
Lib supported in/out ul process channels
Only set frame_size_ms when b_interleve = “0”
Else set frame_size_ms = “0”
        <library name="   foo_bar  "
                 lib_path=" /vendor/lib/lib foobar .so "
                 lib64_path=" /vendor/lib64/lib foobar .so   "
                 param_path=" /vendor/etc/lib foobar _param.bin "
                 lib_dump_path="AUTO"
                 adb_cmd_key=" LIB_CMD_KEY ">
            <components>
                <!-- for aurisys_scene record streamin normal -->
                <component aurisys_scenario="AURISYS_SCENARIO_DSP_RECORD"
                           sample_rate="48000"  
                           audio_format="AUDIO_FORMAT_PCM_16_BIT,AUDIO_FORMAT_PCM_32_BIT"
                           frame_size_ms="20"
                           b_interleave="0"
                           enable_log="0"
                           enable_raw_dump="0"
                           enable_lib_dump="0"
                           enhancement_mode="0">
                    <uplink_process>
                        <buf_in  data_buf_type="DATA_BUF_UPLINK_IN"
                                 num_channels="1,2"/>
                        <buf_out data_buf_type="DATA_BUF_UPLINK_OUT"
                                 num_channels="1,2"/>
                    </uplink_process>
                </component>
            </components>
        </library>
Note:  The maximum number of library that can be set in aurisys_config_ adsp .xml is 8 . The limit could be change by revising macro  MAX_TOTAL_LIB_NUM  in both following files. /vendor/mediatek/proprietary/hardware/audio/common/aurisys/framework/aurisys_config.h /vendor/mediatek/proprietary/tinysys/common/drivers/audio/aurisys/framework/aurisys_config.h
New Aurisys Scenario
Predefined aurisys scenario may not fit your requirement (for example: gaming), below are the guidelnes to add a new aurisys scenario in ADSP. We use  AURISYS_SCENARIO_DSP_GAMING  as example.
Path
File
Description
vendor/mediatek/proprietary/hardware/audio/common/aurisys/framework
aurisys_scenario_dsp.h
Add AP side new scenario enum
vendor/mediatek/proprietary/tinysys/common /drivers/audio/aurisys/framework/

Add DSP B0 side new scenario enum
vendor/mediatek/proprietary/tinysys/freertos/source/middleware/lib/aurisys/framework/

Add DSP B0 side new scenario enum
vendor/mediatek/proprietary/hardware/audio/common/aurisys/utility
aurisys_utility.c
Add string and map scenario to task scene
vendor/mediatek/proprietary/external/aurisys
aurisys_config_hifi3.xml
aurisys_config_rv.xml
a urisys_config_adsp.xml
Add new scenario to configuration xml file
In   vendor/mediatek/proprietary/hardware/audio/common/aurisys/framework/ aurisys_scenario_dsp.h ,  vendor/mediatek/proprietary/tinysys/common/drivers/audio/aurisys/framework/ aurisys_scenario_dsp.h , and  vendor/mediatek/proprietary/tinysys/freertos/source/middleware/lib/aurisys/framework/  aurisys_scenario_dsp.h   , 
add new scenario. enum { …     AURISYS_SCENARIO_DSP_PLAYBACK_SMARTPA   = 10,  /* for smartPA process */     AURISYS_SCENARIO_DSP_MUSIC              = 11,  /* for deep + primary + offload mix stream */     AURISYS_SCENARIO_DSP_KTV                = 12,  /* for in-ear monitor */      AURISYS_SCENARIO_DSP_GAMING             = 13, /* for gaming */     /* control */     AURISYS_SCENARIO_DSP_SIZE,     AURISYS_SCENARIO_DSP_ALL,     AURISYS_SCENARIO_DSP_INVALID = 0xFFFFFFFF };
enum {
…
    AURISYS_SCENARIO_DSP_PLAYBACK_SMARTPA   = 10,  /* for smartPA process */
    AURISYS_SCENARIO_DSP_MUSIC              = 11,  /* for deep + primary + offload mix stream */
    AURISYS_SCENARIO_DSP_KTV                = 12,  /* for in-ear monitor */
     AURISYS_SCENARIO_DSP_GAMING             = 13, /* for gaming */
    /* control */
    AURISYS_SCENARIO_DSP_SIZE,
    AURISYS_SCENARIO_DSP_ALL,
    AURISYS_SCENARIO_DSP_INVALID = 0xFFFFFFFF
};

AP side and DSP side’s aurisys_scenario_dsp.h  must sync , or will cause  ADSP crash  or  Aurisys abnormal .
In  vendor/mediatek/proprietary/hardware/audio/common/aurisys/utility/aurisys_utility.c , add new string for new enum and mapping to task.  static const string_to_enum_pair_t  g_s2e_aurisys_scenario_dsp [] = { …      STRING_TO_ENUM("AURISYS_SCENARIO_DSP_PLAYBACK_SMARTPA", AURISYS_SCENARIO_DSP_PLAYBACK_SMARTPA),      STRING_TO_ENUM("AURISYS_SCENARIO_DSP_MUSIC", AURISYS_SCENARIO_DSP_MUSIC),      STRING_TO_ENUM("AURISYS_SCENARIO_DSP_KTV", AURISYS_SCENARIO_DSP_KTV),      STRING_TO_ENUM("AURISYS_SCENARIO_DSP_GAMING", AURISYS_SCENARIO_DSP_GAMING),      STRING_TO_ENUM("AURISYS_SCENARIO_DSP_ALL", AURISYS_SCENARIO_DSP_ALL) }; uint8_t  map_aurisys_scenario_to_task_scene ( …     if (core_type == AURISYS_CORE_HAL) { …     } else if (core_type == AURISYS_CORE_HIFI3) { …         case AURISYS_SCENARIO_DSP_VOIP:         case AURISYS_SCENARIO_DSP_GAMING: /* map to voip task for gaming */              task_scene =  TASK_SCENE_VOIP ;             break; …     } … }
static const string_to_enum_pair_t  g_s2e_aurisys_scenario_dsp [] = {
…
     STRING_TO_ENUM("AURISYS_SCENARIO_DSP_PLAYBACK_SMARTPA", AURISYS_SCENARIO_DSP_PLAYBACK_SMARTPA),      STRING_TO_ENUM("AURISYS_SCENARIO_DSP_MUSIC", AURISYS_SCENARIO_DSP_MUSIC),      STRING_TO_ENUM("AURISYS_SCENARIO_DSP_KTV", AURISYS_SCENARIO_DSP_KTV),      STRING_TO_ENUM("AURISYS_SCENARIO_DSP_GAMING", AURISYS_SCENARIO_DSP_GAMING),      STRING_TO_ENUM("AURISYS_SCENARIO_DSP_ALL", AURISYS_SCENARIO_DSP_ALL) };
uint8_t  map_aurisys_scenario_to_task_scene ( …     if (core_type == AURISYS_CORE_HAL) { …     } else if (core_type == AURISYS_CORE_HIFI3) { …         case AURISYS_SCENARIO_DSP_VOIP:         case AURISYS_SCENARIO_DSP_GAMING: /* map to voip task for gaming */              task_scene =  TASK_SCENE_VOIP ;             break; …     } … }
In  vendor/mediatek/proprietary/external/aurisys/aurisys _config_ adsp .xml , add lib to scenario. Below example is for both UL and DL process, if only need UL or DL process, can remove redundant down/uplink_library_name_list.      <aurisys_scenarios> …         <!-- for aurisys_scene ktv for headphone feedback process -->         <aurisys_scenario aurisys_scenario="AURISYS_SCENARIO_DSP_KTV">             <downlink_library_name_list digital_gain_lib_name="">                 <library name="aurisys_demo"/>             </downlink_library_name_list>         </aurisys_scenario>          <!-- for aurisys_scene  gaming  for gaming process -->         <aurisys_scenario aurisys_scenario="AURISYS_SCENARIO_DSP_GAMING">             <downlink_library_name_list digital_gain_lib_name="">                 <library name="aurisys_demo"/>   <!-- add your lib here -->             </downlink_library_name_list>             <uplink_library_name_list digital_gain_lib_name="" >                 <library name="aurisys_demo"/>   <!-- add your lib here -->             </uplink_library_name_list>         </aurisys_scenario>     </aurisys_scenarios> …
     <aurisys_scenarios> …         <!-- for aurisys_scene ktv for headphone feedback process -->         <aurisys_scenario aurisys_scenario="AURISYS_SCENARIO_DSP_KTV">             <downlink_library_name_list digital_gain_lib_name="">                 <library name="aurisys_demo"/>             </downlink_library_name_list>         </aurisys_scenario>          <!-- for aurisys_scene  gaming  for gaming process -->         <aurisys_scenario aurisys_scenario="AURISYS_SCENARIO_DSP_GAMING">             <downlink_library_name_list digital_gain_lib_name="">                 <library name="aurisys_demo"/>   <!-- add your lib here -->             </downlink_library_name_list>             <uplink_library_name_list digital_gain_lib_name="" >                 <library name="aurisys_demo"/>   <!-- add your lib here -->             </uplink_library_name_list>         </aurisys_scenario>     </aurisys_scenarios> …
To  use  this new scenario in ADSP, need also modify audio HAL by below steps. We also use  AURISYS_SCENARIO_DSP_GAMING  as example.
Path
File
Description
vendor/mediatek/proprietary/hardware/audio/common/V3/aud_drv
AudioALSAPlaybackHandlerDsp.cpp
DL / UL aurisys user

AudioALSACaptureDataProviderDsp.cpp

In  AudioALSAPlaybackHandlerDsp.cpp , add  AURISYS_SCENARIO_DSP_GAMING  for corresponded  DL  scenario. (If only need UL process, need skip this step) status_t  AudioALSAPlaybackHandlerDsp::open () { …     } else if (mStreamAttributeSource->mAudioOutputFlags & AUDIO_OUTPUT_FLAG_VOIP_RX) {         mTaskScene = TASK_SCENE_VOIP; #ifdef MTK_AURISYS_FRAMEWORK_SUPPORT         if ( is_gaming_sc e nario ) {   // need implement judgement for gaming scenario             aurisys_scenario = AURISYS_SCENARIO_DSP_GAMING;  // assuming gaming run on voip         } else {             aurisys_scenario = AURISYS_SCENARIO_DSP_VOIP;         }         arsi_process_type = ARSI_PROCESS_TYPE_DL_ONLY; //ARSI_PROCESS_TYPE_UL_AND_DL; #endif …
status_t  AudioALSAPlaybackHandlerDsp::open () { …     } else if (mStreamAttributeSource->mAudioOutputFlags & AUDIO_OUTPUT_FLAG_VOIP_RX) {         mTaskScene = TASK_SCENE_VOIP; #ifdef MTK_AURISYS_FRAMEWORK_SUPPORT         if ( is_gaming_sc e nario ) {   // need implement judgement for gaming scenario             aurisys_scenario = AURISYS_SCENARIO_DSP_GAMING;  // assuming gaming run on voip         } else {             aurisys_scenario = AURISYS_SCENARIO_DSP_VOIP;         }         arsi_process_type = ARSI_PROCESS_TYPE_DL_ONLY; //ARSI_PROCESS_TYPE_UL_AND_DL; #endif …

In  AudioALSACaptureDataProviderDsp.cpp , add  AURISYS_SCENARIO_DSP_GAMING  for  corresponded  UL  scenario.  (If only need DL process, need skip this step) status_t  AudioALSACaptureDataProviderDsp::open () { …          if (mStreamAttributeSource.mVoIPEnable || (mStreamAttributeSource.input_source == AUDIO_SOURCE_CUSTOMIZATION2)) {              //streamAttributeEchoRef = &mStreamAttributeSource;             memcpy(&mstreamAttributeEchoRef, &mStreamAttributeTargetDSP, sizeof(struct stream_attribute_t));             mstreamAttributeEchoRef.num_channels = mDsphwRefConfig.channels;             mstreamAttributeEchoRef.audio_format = AUDIO_FORMAT_PCM_8_24_BIT;             mstreamAttributeEchoRef.audio_channel_mask = AUDIO_CHANNEL_IN_STEREO;             mstreamAttributeEchoRef.sample_rate = mDsphwRefConfig.rate;             streamAttributeEchoRef = &mstreamAttributeEchoRef;             if ( is_gaming_scenario ) {   // need implement judgement for gaming scenario                  aurisys_scenario = AURISYS_SCENARIO_DSP_GAMING;  // assuming gaming run on voip             } else {                 aurisys_scenario = AURISYS_SCENARIO_DSP_VOIP;             }             arsi_process_type = ARSI_PROCESS_TYPE_UL_ONLY; //ARSI_PROCESS_TYPE_UL_AND_DL; …
status_t  AudioALSACaptureDataProviderDsp::open () { …          if (mStreamAttributeSource.mVoIPEnable || (mStreamAttributeSource.input_source == AUDIO_SOURCE_CUSTOMIZATION2)) {              //streamAttributeEchoRef = &mStreamAttributeSource;             memcpy(&mstreamAttributeEchoRef, &mStreamAttributeTargetDSP, sizeof(struct stream_attribute_t));             mstreamAttributeEchoRef.num_channels = mDsphwRefConfig.channels;             mstreamAttributeEchoRef.audio_format = AUDIO_FORMAT_PCM_8_24_BIT;             mstreamAttributeEchoRef.audio_channel_mask = AUDIO_CHANNEL_IN_STEREO;             mstreamAttributeEchoRef.sample_rate = mDsphwRefConfig.rate;             streamAttributeEchoRef = &mstreamAttributeEchoRef;             if ( is_gaming_scenario ) {   // need implement judgement for gaming scenario                  aurisys_scenario = AURISYS_SCENARIO_DSP_GAMING;  // assuming gaming run on voip             } else {                 aurisys_scenario = AURISYS_SCENARIO_DSP_VOIP;             }             arsi_process_type = ARSI_PROCESS_TYPE_UL_ONLY; //ARSI_PROCESS_TYPE_UL_AND_DL;
…

To verify your scenario is added and correctly used, you can check below log in ADSP log files.
[D]CreateAurisysLibManager(), manager config: aurisys_scenario  13 , core_type 1,  arsi_process_type 1 , frame_size_ms 20, num_channels_ul 2, num_channels_dl 2, audio_format 4, sample_rate 48000   //process type 0 is for UL, 1 is for DL [D][AURI][HDL] aurisys_arsi_create_handler(), lib_name  lib_gaming _name , memory_size  xxx  //should show your lib_name  in  AURISYS_SCENARIO_DSP_GAMING  defined in aurisys_config _adsp .xml
[D]CreateAurisysLibManager(), manager config: aurisys_scenario  13 , core_type 1,  arsi_process_type 1 , frame_size_ms 20, num_channels_ul 2, num_channels_dl 2, audio_format 4, sample_rate 48000   //process type 0 is for UL, 1 is for DL
[D][AURI][HDL] aurisys_arsi_create_handler(), lib_name  lib_gaming _name , memory_size  xxx  //should show your lib_name  in  AURISYS_SCENARIO_DSP_GAMING  defined in aurisys_config _adsp .xml
How to allocate working buffer for library? (aurisys interface before V1.8.0)
The library can allocate a working buffer through ARSI-PROC APIs, which the library must implement its implementation. Aurisys supports DRAM only and DRAM+SLB mode to allocate a working buffer. For the aurisys interface version after V1.8.0, please refer to chapter 5.3.5.
Allocate working buffer for DSP side library
Allocate working buffer for DSP side library

Figure  5 6 .  Aurisys  Control Flow
Use DRAM as working buffer
arsi_query_working_buffer() : This API function queries the size of the working buffer needed by the library. The desired working buffer size can be specified by assigning a value to  p_working_buf_size   (bytes). Aurisys framework will allocate memory on  DRAM  according to the chosen size.
/**  * =========================================================================  *  @brief Query the size of the working buffer  *  *  @param  input       p_arsi_task_config the task configure  *  @param  input     p_arsi_lib_config the lib configure  *  @param  output  p_working_buf_size the working buffer size  *  @param  input     debug_log_fp debug print function pointer  *  *  @return status_t  * =========================================================================  */ status_t  (* arsi_query_working_buf_size )  ( const arsi_task_config_t *p_arsi_task_config, const arsi_lib_config_t      *p_arsi_lib_config, uint32_t                             *p_working_buf_size , const debug_log_fp_t      debug_log_fp)
/**  * =========================================================================  *  @brief Query the size of the working buffer  *  *  @param  input       p_arsi_task_config the task configure  *  @param  input     p_arsi_lib_config the lib configure  *  @param  output  p_working_buf_size the working buffer size  *  @param  input     debug_log_fp debug print function pointer  *  *  @return status_t  * =========================================================================  */ status_t  (* arsi_query_working_buf_size )  ( const arsi_task_config_t *p_arsi_task_config, const arsi_lib_config_t      *p_arsi_lib_config, uint32_t                             *p_working_buf_size , const debug_log_fp_t      debug_log_fp)
When the aurisys framework calls  arsi_create_handler()   API, the working buffer requested by the library will be passed to the library as an input parameter, namely  p_working_buf .
/**  * =========================================================================  *  @brief Create handler and initialize it  *  *  @param  input       p_arsi_task_config the task configure  *  @param  input       p_arsi_lib_config the lib configure  *  @param  input       p_param_buf the enhancement parameters and lib related configure settings  *  @param  input       p_working_buf the allocated buffer and the size is from arsi_create_handler()   *  @param  output  pp_handler the handler of speech enhancement    *  @param  input       debug_log_fp debug print function pointer   *  *  @return status_t  * =========================================================================   */   status_t  (* arsi_create_handler )  (                   const arsi_task_config_t *p_arsi_task_config,                    const arsi_lib_config_t      *p_arsi_lib_config,                    const data_buf_t                *p_param_buf,                    data_buf_t                         *p_working_buf ,                    void                                       **pp_handler,                    const debug_log_fp_t      debug_log_fp);
/**  * =========================================================================  *  @brief Create handler and initialize it  *  *  @param  input       p_arsi_task_config the task configure  *  @param  input       p_arsi_lib_config the lib configure  *  @param  input       p_param_buf the enhancement parameters and lib related configure settings  *  @param  input       p_working_buf the allocated buffer and the size is from arsi_create_handler()   *  @param  output  pp_handler the handler of speech enhancement    *  @param  input       debug_log_fp debug print function pointer   *  *  @return status_t  * =========================================================================   */   status_t  (* arsi_create_handler )  (                   const arsi_task_config_t *p_arsi_task_config,                    const arsi_lib_config_t      *p_arsi_lib_config,                    const data_buf_t                *p_param_buf,                    data_buf_t                         *p_working_buf ,                    void                                       **pp_handler,                    const debug_log_fp_t      debug_log_fp);
Use SLB and DRAM as working buffer
To use System Level Buffer (SLB) as a library working buffer, one must finish the following setup:
CFG_SLB_SUPPORT = yes  (SLB must be supported on the platform, please consult MTK if not sure)
The library needs to implement  arsi_is_support_slb()  API, which is meant to query whether the library wants to use slb as a working buffer, and return  true  through this API.
When the setting is done correctly, aurisys will allocate a working buffer through API with the suffix  _with_slb . The library can then assign the preferred size of working buffer on SLB and DRAM.

arsi_is_support_slb() :  T he library must return  true  with this API  to use SLB memory as a working buffer .
/**  * =========================================================================  *  @brief Query lib slb support, return ture if lib support slb.  *         This is a OpenDSP only api.  *  *  @return bool  * =========================================================================  */ bool  (* arsi_is_support_slb )  (void)
/**  * =========================================================================  *  @brief Query lib slb support, return ture if lib support slb.  *         This is a OpenDSP only api.  *  *  @return bool  * =========================================================================  */ bool  (* arsi_is_support_slb )  (void)
arsi_query_working_buf_size_with_slb() : Through this API, the library can get the SLB address ( p_arsi_slb_buf->p_buffer ) and available size ( p_arsi_slb_buf->memory_size ). Also, the library needs to decide the working buffer size to place on DRAM by assigning a value to  p_working_buf_size .
/**  * =========================================================================  *  @brief Query the size of the working buffer with slb support.  *         This is a OpenDSP only api.  *  *  @param  input       p_arsi_task_config the task configure  *  @param  output  p_arsi_lib_config the lib configure  *  @param  input       p_arsi_slb_buf the slb buffer  *  @param  output  p_working_buf_size the working buffer size  *  @param  input       debug_log_fp debug print function pointer  *  *  @return status_t  * =========================================================================  */ status_t (* arsi_query_working_buf_size_with_slb )( const arsi_task_config_t *p_arsi_task_config, const arsi_lib_config_t      *p_arsi_lib_config, data_buf_t                          *p_arsi_slb_buf , uint32_t                               *p_working_buf_size , const debug_log_fp_t     debug_log_fp);
/**  * =========================================================================  *  @brief Query the size of the working buffer with slb support.  *         This is a OpenDSP only api.  *  *  @param  input       p_arsi_task_config the task configure  *  @param  output  p_arsi_lib_config the lib configure  *  @param  input       p_arsi_slb_buf the slb buffer  *  @param  output  p_working_buf_size the working buffer size  *  @param  input       debug_log_fp debug print function pointer  *  *  @return status_t  * =========================================================================  */ status_t (* arsi_query_working_buf_size_with_slb )( const arsi_task_config_t *p_arsi_task_config, const arsi_lib_config_t      *p_arsi_lib_config, data_buf_t                          *p_arsi_slb_buf , uint32_t                               *p_working_buf_size , const debug_log_fp_t     debug_log_fp);
When the library chooses to use SLB, aurisys will create a handler with  arsi_create_handler_with_slb () . The API input parameters contain  p_working_buf  and  p_arsi_slb_buf , which consist of the working buffer allocated on DRAM and SLB, respectively.
/**  * =========================================================================  *  @brief Create handler with slb and initialize it. This is a OpenDSP only api.  *  *  @param  input     p_arsi_task_config the task configure  *  @param  input     p_arsi_lib_config the lib configure  *  @param  input     p_param_buf the enhancement parameters and lib related configure settings  *  @param  input     p_working_buf the allocated buffer and the size is from arsi_create_handler()  *  @param  input     p_arsi_slb_buf the slb buffer  *  @param  output  pp_handler the handler of speech enhancement  *  @param  input     debug_log_fp debug print function pointer  *  *  @return status_t  * =========================================================================  */ status_t  (* arsi_create_handler_with_slb )  ( const arsi_task_config_t *p_arsi_task_config, const arsi_lib_config_t      *p_arsi_lib_config, const data_buf_t                *p_param_buf, data_buf_t                           *p_working_buf , data_buf_t                           *p_arsi_slb_buf , void                                       **pp_handler, const debug_log_fp_t      debug_log_fp);
/**  * =========================================================================  *  @brief Create handler with slb and initialize it. This is a OpenDSP only api.  *  *  @param  input     p_arsi_task_config the task configure  *  @param  input     p_arsi_lib_config the lib configure  *  @param  input     p_param_buf the enhancement parameters and lib related configure settings  *  @param  input     p_working_buf the allocated buffer and the size is from arsi_create_handler()  *  @param  input     p_arsi_slb_buf the slb buffer  *  @param  output  pp_handler the handler of speech enhancement  *  @param  input     debug_log_fp debug print function pointer  *  *  @return status_t  * =========================================================================  */ status_t  (* arsi_create_handler_with_slb )  ( const arsi_task_config_t *p_arsi_task_config, const arsi_lib_config_t      *p_arsi_lib_config, const data_buf_t                *p_param_buf, data_buf_t                           *p_working_buf , data_buf_t                           *p_arsi_slb_buf , void                                       **pp_handler, const debug_log_fp_t      debug_log_fp);
The demo API implementation in this chapter can be found in  /API/V1.x.x/libaurisysdemo/aurisys_demo_processing_lib.c
How to allocate working buffer for library? (aurisys interface after V1.8.0)
On aurisys V1.8.0, MTK proposes a new working flow for the library to query the working buffer. In this version, we add support to L2SRAM, a lower latency memory relative to DRAM. For the aurisys interface version before V1.8.0, please refer to  chapter 5.3.5 .
Use SLB/L2SRAM/DRAM as working buffer
The library can allocate a working buffer through ARSI-PROC APIs, which the library must implement its implementation. Aurisys supports an integrated interface with which the library can appoint desired working buffer sizes on SLB, L2SRAM, and DRAM.
Provide buffers as library request  (support  SLB/L2SRAM/DRAM   on DSP side) Query  SLB/L2SRAM/DRAM  size on DSP side
Provide buffers as library request 
(support  SLB/L2SRAM/DRAM   on DSP side)

Query  SLB/L2SRAM/DRAM  size
on DSP side

Figure  5 7 .  Aurisys Control Flow
The following legacy API functions are removed because MTK integrates them into  arsi_query_working_buf_size()   and  arsi_create_handler() .
arsi_is_support_slb()
arsi_query_working_buf_size_with_slb()
arsi_create_handler_with_slb()

arsi_query_working_buffer() : This API function queries the size of the working buffer on SLB/L2SRAM/DRAM needed by the library. The expected working buffer size can be specified by designating values to the  p_work_buf_size  array (in bytes), in which the element represents to corresponding memory. When choosing  the working buffers’ size, the library must check the  p_avail_memory_size  array, which provides the available size of each memory at the point.
The library  must not  return a size larger than provided available size, and the default value of SLB/L2SRAM size is 0 if the library does not determine the preferred size. Aurisys framework will then allocate memory according to the chosen size.
/**  * =========================================================================     *  @brief Query the size of the working buffer   *   *  @param[in]  p_arsi_task_config the task configure  *  @param[in]  p_arsi_lib_config the lib configure  *  @param[out] p_work_buf should specify preferred working buffer size with this structure  *                           support SLB/L2SRAM/DRAM on DSP side!  *  @param[in]  p_avail_memory_size available size for working buffer on each memory  *  @param[in]  debug_log_fp debug print function pointer  *  *  @return status_t  * =========================================================================  */ status_t (* arsi_query_working_buf_size )( const arsi_task_config_t *p_arsi_task_config, const arsi_lib_config_t      *p_arsi_lib_config, uint32_t                               *p_work_buf_size , const uint32_t                    *p_avail_memory_size , const debug_log_fp_t         debug_log_fp);
/**  * =========================================================================     *  @brief Query the size of the working buffer   *   *  @param[in]  p_arsi_task_config the task configure  *  @param[in]  p_arsi_lib_config the lib configure  *  @param[out] p_work_buf should specify preferred working buffer size with this structure  *                           support SLB/L2SRAM/DRAM on DSP side!  *  @param[in]  p_avail_memory_size available size for working buffer on each memory  *  @param[in]  debug_log_fp debug print function pointer  *  *  @return status_t  * =========================================================================  */ status_t (* arsi_query_working_buf_size )( const arsi_task_config_t *p_arsi_task_config, const arsi_lib_config_t      *p_arsi_lib_config, uint32_t                               *p_work_buf_size , const uint32_t                    *p_avail_memory_size , const debug_log_fp_t         debug_log_fp);
When the aurisys framework calls  arsi_create_handler()   API, the working buffers requested by the library will pass to the library as an input parameter, namely  p_work_buf , which is an array containing the working buffer of each memory.
/**  * =========================================================================  *  @brief Create handler and initialize it  *  *  @param[in]  p_arsi_task_config the task configure  *  @param[in]  p_arsi_lib_config the lib configure  *  @param[in]  p_param_buf the enhancement parameters and lib related configure settings  *  @param[out] p_work_buf the allocated buffer and the size is from arsi_query_working_buf_size()  *                         support SLB/L2SRAM/DRAM on DSP side!  *  @param[out] pp_handler the handler of speech enhancement  *  @param[in]  debug_log_fp debug print function pointer  *  *  @return status_t  * =========================================================================  */ status_t (* arsi_create_handler )( const arsi_task_config_t *p_arsi_task_config, const arsi_lib_config_t      *p_arsi_lib_config, const data_buf_t                *p_param_buf, data_buf_t                           *p_work_buf , void                                       **pp_handler, const debug_log_fp_t         debug_log_fp);
/**  * =========================================================================  *  @brief Create handler and initialize it  *  *  @param[in]  p_arsi_task_config the task configure  *  @param[in]  p_arsi_lib_config the lib configure  *  @param[in]  p_param_buf the enhancement parameters and lib related configure settings  *  @param[out] p_work_buf the allocated buffer and the size is from arsi_query_working_buf_size()  *                         support SLB/L2SRAM/DRAM on DSP side!  *  @param[out] pp_handler the handler of speech enhancement  *  @param[in]  debug_log_fp debug print function pointer  *  *  @return status_t  * =========================================================================  */ status_t (* arsi_create_handler )( const arsi_task_config_t *p_arsi_task_config, const arsi_lib_config_t      *p_arsi_lib_config, const data_buf_t                *p_param_buf, data_buf_t                           *p_work_buf , void                                       **pp_handler, const debug_log_fp_t         debug_log_fp);
The demo API implementation in this chapter can be found in  /API/V1.x.x/libaurisysdemo/aurisys_demo_processing_lib.c

  Bypass the Aurisys process by configuring the xml
Purpose
In the past, when library processing was unnecessary in specific scenarios, we used the “aurisys_demo” library, which simlpy copied the input data to output. However, this still incurred additional MCPS due to the Aurisys framework’s overhead.
Starting with the DX5 platform in Android W, we introduced a new mechanism to bypass the aurisys process on ADSP. This allows us to completely avoid library processing through the Aurisys framwork, thereby optimizing  ADSP MCPS usage.

How does bypass aurisys mechanism works?
When an ADSP task uses Aurisys and no library processing is needed, you can bypass the Aurisys process by configuring the aurisys_config_adsp.xml file as follows:
Method 1. Configure the library name to ”none”
For example, to bypass the library processing of the primary task, set the library name to “none”.
<aurisys_scenario aurisys_scenario="AURISYS_SCENARIO_DSP_PRIMARY"> <downlink_library_name_list digital_gain_lib_name=""> <library name=" none "/> </downlink_library_name_list> </aurisys_scenario>
<aurisys_scenario aurisys_scenario="AURISYS_SCENARIO_DSP_PRIMARY">
<downlink_library_name_list digital_gain_lib_name="">
<library name=" none "/>
</downlink_library_name_list>
</aurisys_scenario>



Method 2. Remove the specific scenario that is desired to bypass  
For example, to bypass the library processing in the aud_playback task, remove AURISYS_SCNEARIO_DSP_PLAYBACK from the aurisys_scenario section. Any scenario not defined in the aurisys_scneario section will be bypassed by default.
<aurisys_scenario aurisys_scenario=" AURISYS_SCENARIO_DSP_PLAYBACK_SMARTPA "> <downlink_library_name_list digital_gain_lib_name=""> <library name=" aurisys_demo "/> </downlink_library_name_list> </aurisys_scenario>
<aurisys_scenario aurisys_scenario=" AURISYS_SCENARIO_DSP_PLAYBACK_SMARTPA ">
<downlink_library_name_list digital_gain_lib_name="">
<library name=" aurisys_demo "/>
</downlink_library_name_list>
</aurisys_scenario>




We recommend using Method 1 . Setting the library name to “none” clearly indicates that library processing is not needed, which is helpful when debugging.
Please note that the bypass mechanism is only support on ADSP, not on AP . In other words, you can only configure the bypass aurisys process in the aurisys_config_adsp.xml file, not in the aurisys_config.xml file.
How to check whether a specific scenario is bypassed?
In this section, we will compare two scenarios: playback_smartpa and deep_buf, which are bypassed and not bypassed, respectively. By analyzing the HAL and ADSP logs, we could highlight the differences between both scenarios.
HAL log:
PLAYBACK_SMARTPA (with bypass)
If the scenario is bypassed , the key word “bypass aurisys” can be found in the log.
10-23 10:38:06.157961   942  1381 D AudioDspStreamManager:  CreateAurisysLibManager(), scene: 10, bypass aurisys
10-23 10:38:06.157961   942  1381 D AudioDspStreamManager:  CreateAurisysLibManager(), scene: 10, bypass aurisys




DEEP_BUF (without bypass)
For normal Aurisys process, you can find that “CreateAurisysLibManager() ” is processed.
10-23 10:37:36.464070   942  1381 D  AudioDspStreamManager: CreateAurisysLibManager(), custom_info = SetAudioCustomScene=;, voip = 0, scene = 2 10-23 10:37:36.464125   942  1381 D aurisys_utility: lib, working fs: 48000, fmt: 0x3, frame = 0, b_interleave = 1, num_ul_ref_buf_array = 0, num_dl_ref_buf_array = 0 10-23 10:37:36.464149   942  1381 D aurisys_utility: dl in[type:2], ch: 2, ch_mask: 0x3, buf fs: 48000, buf content fs: 48000, fmt: 0x3; dl out[type:3], ch: 2, ch_mask: 0x3, buf fs: 48000, buf content fs: 48000, fmt: 0x3
10-23 10:37:36.464070   942  1381 D  AudioDspStreamManager: CreateAurisysLibManager(), custom_info = SetAudioCustomScene=;, voip = 0, scene = 2 10-23 10:37:36.464125   942  1381 D aurisys_utility: lib, working fs: 48000, fmt: 0x3, frame = 0, b_interleave = 1, num_ul_ref_buf_array = 0, num_dl_ref_buf_array = 0 10-23 10:37:36.464149   942  1381 D aurisys_utility: dl in[type:2], ch: 2, ch_mask: 0x3, buf fs: 48000, buf content fs: 48000, fmt: 0x3; dl out[type:3], ch: 2, ch_mask: 0x3, buf fs: 48000, buf content fs: 48000, fmt: 0x3


ADSP log:
PLAYBACK_SMARTPA (with bypass)
If the scenario is bypassed, you will not found any “CreateAurisysLibManager()” related logs.

DEEP_BUF (without bypass)
For normal Aurisys process, you can find the key word “CreateAurisysLibManager()” in the logs.
[133.511]<A-8>[D] CreateAurisysLibManager(), manager config: aurisys_scenario 2 , core_type 1, arsi_process_type 1, frame_size_ms 20, num_channels_ul 2, num_channels_dl 2, audio_format 3, sample_rate 48000 [133.511]<A-8>[D][AURI] input dev: 0x80000004 0x0, fmt = 0x3, fs: 48000, max fs: 48000, ch: 2, max ch: 3, ch maks: 0x3, hw_info_mask: 0x0; output dev: 0x2 0x0, fmt = 0x3, fs: 48000, max fs: 48000, ch: 2, max ch: 4, ch maks: 0x3, hw_info_mask: 0xc [133.511]<A-8>[D][AURI] task_scene: 8, audio_mode: 0, stream_type: 3 output_flags: 0x8, input_source: 0, input_flags: 0x8; enhancement_feature_mask: 0x0 [133.511]<A-8>[D][AURI][CTRL] create_aurisys_lib_manager(+), aurisys_scenario 2, heap(3940480/5033164)
[133.511]<A-8>[D] CreateAurisysLibManager(), manager config: aurisys_scenario 2 , core_type 1, arsi_process_type 1, frame_size_ms 20, num_channels_ul 2, num_channels_dl 2, audio_format 3, sample_rate 48000 [133.511]<A-8>[D][AURI] input dev: 0x80000004 0x0, fmt = 0x3, fs: 48000, max fs: 48000, ch: 2, max ch: 3, ch maks: 0x3, hw_info_mask: 0x0; output dev: 0x2 0x0, fmt = 0x3, fs: 48000, max fs: 48000, ch: 2, max ch: 4, ch maks: 0x3, hw_info_mask: 0xc [133.511]<A-8>[D][AURI] task_scene: 8, audio_mode: 0, stream_type: 3 output_flags: 0x8, input_source: 0, input_flags: 0x8; enhancement_feature_mask: 0x0 [133.511]<A-8>[D][AURI][CTRL] create_aurisys_lib_manager(+), aurisys_scenario 2, heap(3940480/5033164)


Benefit profile of the bypass mechanism
We compared the MCPS uasage of the deep_pl task during 48k WAV playback between using “aurisys_demo” and bypassing the Aurisys process in the AURISYS_DSP_PLAYBACK_SMARTPA scenario. Normally, 48k WAV playback costs 70 MCPS for the deep_pl task. Bypassing  PLAYBACK_SMATPA  reduces this to 50 MCPS, saving  approximately 20 MCPS.
Additionally, the bypass mechanism reduces heap memory usage. Normal 48k WAV playback uses 1.66MB of memory, while bypassing PLAYBACK_SMATPA uses 1.55MB. This results in a saving of 0.11MB of heap memory.

Aurisys Q&A
Q ： What APIs must be implemented?
A ： Please find demo code in this development package  aurisys_demo_parsing_lib.c  and  aurisys_demo_processing_lib.c , for APIs must be implemented, we labled in code with comment   “[TODO][MUST]” . Parser library must implement  “[TODO][MUST]”  APIs in  aurisys_demo_parsing_lib.c  and likewise  process library must implement “[TODO][MUST]” APIs in  aurisys_demo_parsing_lib.c . There are API labeled with  “[TODO][MUST] 3rd party must implement on both parsing and processing lib” , pleae implement these APIs in  both  parser and process library.

Q ： How to get driver information like: audio_mode, input/output flags, input_source, input/output device?
A ： You can get those information form  arsi_task_config_t

Q ： How to know library process sample reate, format and in/out channel numbers?
A ： For now, library process sample reate, format and in/out channel numbers are choosed by Aurisys framework automatically to fit closest to device. Sample rate and format can be found in  arsi_lib_config_t , and in/out channel numbers can be found in  p_ul(dl)_buf_in(out)-> num_channels .

Q ： How DSP side process library can get parameter parsed form AP side parser library?
A ： Aurisys framework will automatically pass the parameter buffer get form  p_param_buf  through  arsi_parsing_param_file_by_custom_info  API to DSP, and DSP side parser library can get parsed parameter from  arsi_create_handler.

Q ： What is the deference between  sample_rate_buffer/sample_rate_content  in  audio_buf_t  and  sample_rate  in  arsi_lib_config_t ?
A ： For now, it’s the same.

Q ： What is  lib dump  and how to implement it?
A ： lib dump is 3 rd  party proprietary dump. Through lib dump, 3 rd  party can dump there parameter/ lib in/out buffer/etc. 3 rd  party also should implement a parser to parse lib dump. To implement lib dump, please follow below instructions:
Implement API  arsi_query_max_debug_dump_buf_size ,  and return max debug dump size in one process
In  arsi_process_ul_buf/arsi_process_dl_buf   fill debug dump in  p_debug_dump_buf

Memory Configurations
Memory size configured in DSP is mainly reserved for full-feature support. Refer to  Feature Distribution  in dual-core project, memory can also be optimized according to the feature configured. For example, if there is no uplink feature configured in DSP, the size of program and heap in  c ore  B can shrink greatly for only system usage.
Memory Profile
To profiling the memory usage, you can find the tool  memory-layout-parser-release  on  MOL website , and get the memory layout on device. Audio DSP has two parts of reserved memory, 1) ADSP image with working memory, 2) share memory between APMCU and ADSP, which can be found from type as below,  
Detail
Type
Usage
Name
Start Address
End Address
Size (KB)
adsp
image
mblock-25-mediatek,reserve-memory-adsp
0x7a000000
0x7adfffff
14336
adsp
share memory
reserve-memory-adsp_share
0x0
0x0
9728
adsp-total

 
 
 
24064
Approa ch
Memory configured approach is described for  Cadence HiFi DSP   and MTK-In-house RV (Standalone ADSP)  series, for  platforms shared SCP software , for example,  24M ,  please find SCP development document  MT xxxx _SCP_Development_Guide.docx
Cadence HiFi DSP  Image
Heap Size
Path:  alps/vendor/mediatek/proprietary/tinysys/adsp/[HIFI3 or HIFI5]/project/[platform]/[core]/platform/
File:  platform.mk
Example:

System RAM Size
Since ADSP build the image with static linking, all the memory layout should be pre-defined in file in advance, and keep consistent with the description in kernel dts for memory allocation.
Please be cautious to make the memory layout consistent if the modification is needed.
Path: alps/kernel-x.x/arch/arm64/boot/dts/mediatek
File:  [project].dts
Format: system of each core = 64-bit base address, 64-bit size
Example: k6873v1_64.dts
 
Path:  alps/vendor/mediatek/proprietary/tinysys/adsp/[HIFI3 or HIFI5]/project/[platform]/[core]/platform/
File:  platform.mk
Base address of each core: CFG_HIFI3_SRAM_ADDRESS
Size of each core:  CFG_HIFI3_SRAM_SIZE  
Example: 

Path:  alps/vendor/mediatek/proprietary/tinysys/adsp/[HIFI3 or HIFI5]/project/[platform]/[core]/platform/[lnk-hifi3 or lnk-hifi5]/[Toolchain-Version ] -linux
File:  memmap.xmm
Format:
 <32-bit base address>:sysram: sram: <32-bit size>
  sram_0: C : <32-bit base address> - <32-bit end address>: ……
Example:
 
Generate new link script
If ADSP sysram size increased, the link scripts must be modified. Either generate by linux script or directly edit link script is acceptable.
By linux script
Excute  adsp_genldscript.sh  under  adsp/HIFIX  path to generate link script with modified memory layout. Output file will be generated in  ./ldscripts
Preparation:
P atch perl into toolchain (directly provided by Cadence, excluded from MTK codebase due to license issue)​ 
xcc compiler: prebuilts/xcc/linux-x86/xtensa/RI-20XX.X-linux/XtensaTools/Tools/bin/*
clang compiler: prebuilts/clang/xtensa/linux-x86/RI-20XX.X-linux/XtensaTools/Tools/bin/*
Modify memory layout file (memmap.xmm) under lnk-hifiX folder.
Example:
$ cd vendor/mediatek/proprietary/tinysys/adsp/HIFI3
$  ./tool/adsp_genldscripts.sh PLATFORM=mt6873 TOOLCHAIN=RI-2018.0
Output :
New linker scripts generated in project/mt6873/HIFI3_A/platform/lnk-hifi3/RI-2018.0-linux/ldscripts
New linker scripts generated in project/mt6873/HIFI3_B/platform/lnk-hifi3/RI-2018.0-linux/ldscripts
Directly edit link script
Files Under  project/ [$platform] /HIFI X _ [$core] /platform/lnk-hifi X / [$toolchain_version] /ldscripts/  need to be updates: 
elf32xtensa.x  &  elf32xtensa.xbn  &  elf32xtensa.xn
sram0_seg
_memmap_mem_sram_start  
if core A enlarge size, the start address of core B will be affected
_memmap_mem_sram_end   
_memmap_seg_sram0_star t
if core A enlarge size, the start address of core B will be affected
_memmap_seg_sram0_max   
_heap_sentry
Example: enlarge core A sysram size from 9M to 10M & core B from 9M to 12M
project/mt6985/HIFI5_A/platform/lnk-hifi5/RI-2021.8-linux/ldscripts/
elf32xtensa.x  &  elf32xtensa.xbn  &  elf32xtensa.xn

project/mt6985/HIFI5_B/platform/lnk-hifi5/RI-2021.8-linux/ldscripts/
elf32xtensa.x  &  elf32xtensa.xbn  &  elf32xtensa.xn

MTK In-house RV DSP (SCP/ADSP Co-subsys)  imge
DRAM Config
Path :  vendor/mediate/proprietary/bootable/bootloader/lk2/platform/mediatek/common/scp/RV/scp_plat_priv.h
#if defined(MTK_MINIMUM_SCP_DRAM_SIZE) #define SCP_DRAM_IMG_SIZE               0x080000    // 0.5MB dram image #elif defined(PHONE_CALL_ON_SCP) #define SCP_DRAM_IMG_SIZE                0x300000     // 3.0MB dram image -> please modify this value #else #define SCP_DRAM_IMG_SIZE               0x100000    // 1.0MB dram image #endif
#if defined(MTK_MINIMUM_SCP_DRAM_SIZE)
#define SCP_DRAM_IMG_SIZE               0x080000    // 0.5MB dram image
#elif defined(PHONE_CALL_ON_SCP)
#define SCP_DRAM_IMG_SIZE                0x300000     // 3.0MB dram image -> please modify this value
#else
#define SCP_DRAM_IMG_SIZE               0x100000    // 1.0MB dram image
#endif
Path:  vendor/mediatek/proprietary/tinysys/scp/project/RV55_A/$platform/platform/platform.mk
CFG_L1C_DRAM_SIZE :=  0x300000  -> need to sync with upper value
CFG_L1C_DRAM_SIZE :=  0x300000  -> need to sync with upper value
For more SCP image/dram releated detail, please refer to  MTxxxx_SCP_Development_Guide .


M TK In-house RV DSP (Standalone ADSP) Image
Heap Size
Path:  alps/vendor/mediatek/proprietary/tinysys/adsp/ riscv /project/[platform]/[core]/platform/
File:  platform.mk
Example:

System RAM Size
Since ADSP build the image with static linking, all the memory layout should be pre-defined in file in advance, and keep consistent with the description in kernel dts for memory allocation.
Please be cautious to make the memory layout consistent if the modification is needed.
Please note that the starting address of core1's system RAM needs to be connected to the end of core0's system RAM, which means  core1 system RAM address = core0 system RAM address + core0 system RAM size .
Path: alps/kernel-x.x/arch/arm64/boot/dts/mediatek
File:  [project].dts
Format: system of each core = 64-bit base address, 64-bit size
Example: k 6993 v1_64.dts
 
Path:  alps/vendor/mediatek/proprietary/tinysys/adsp/ riscv /project/[platform]/[core]/platform/
File:  platform.mk
Base address of each core: CFG_ ADSP_X _ D RAM_ADDRESS
Size of each core:  CFG_ ADSP_X _ D RAM_SIZE  
Example: 
 
Path:  alps/vendor/mediatek/proprietary/tinysys/adsp/ riscv /project/[platform]/[core]/platform/ link.ld
File:  link.ld
Format:
   dram  :  ORIGIN   =  <32-bit base address>  , LENGTH =  <32-bit  size >
   _memmap_mem_dram_start =  <32-bit base address>;
Example:
 
Shared memory
Shared memory is mainly used for communication between APMCU and ADSP. For system usage, the memory size is configured and we do not recommend to modify it. For audio feature usage, the total size of audio would be calculated during initial stage according to the feature configuration in dts. You only need to configure the feature via enable element, instead of the size in array.
Path:  alps/kernel-x.x/arch/arm64/boot/dts/mediatek
File:  [project].dts
Format:  feature = <  $enable  $dl_mem $ul_mem $ref_mem  $size  >
Example: k6873v1_64.dts
/* feature :  $enable  $dl_mem $ul_mem $ref_mem  $size  */
& snd_audio_dsp  {
mtk_dsp_voip = < 0x1f  0x1 0xffffffff 0xffffffff  0x30000 >;
mtk_dsp_primary = < 0x1f  0x0 0xffffffff 0xffffffff  0x30000 >;
mtk_dsp_offload = < 0x0  0x6 0xffffffff 0xffffffff  0x400000 >;
mtk_dsp_deep = < 0x5  0x3 0xffffffff 0xffffffff  0x30000 >;
mtk_dsp_playback = < 0x1  0x4 0x10 0x14  0x30000 >;
mtk_dsp_music = < 0x1  0xffffffff 0xffffffff 0xffffffff  0x0 >;
mtk_dsp_capture1 = < 0x0  0xffffffff 0xd 0x13  0x20000 >;
mtk_dsp_a2dp = < 0x0  0xffffffff 0xffffffff 0xffffffff  0x40000 >;
mtk_dsp_dataprovider = < 0x0  0xffffffff 0xf 0xffffffff  0x30000 >;
mtk_dsp_call_final = < 0x1  0x4 0x10 0x14  0x18000 >;
mtk_dsp_fast = < 0x5  0x2 0xffffffff 0xffffffff  0x5000 >;
mtk_dsp_ktv = < 0x0  0x8 0x12 0xffffffff  0x10000 >;
mtk_dsp_ver = <0x1>;
swdsp_smartpa_process_enable = <0x1>;
mtk_dsp_mem_afe = <0x1 0x40000>; /* always enable */
};


ADSP system DTS Properties
The ADSP system DTS is mainly defined in the platform’s DTS file. If you want to make modifications, you can directly edit mtXXXX.dts. However, if you only want to modify the ADSP DTS definition for a specific project on a particular platform, you can edit the project’s DTS file, such as kXXXXv1_64.dts. Any modifications or additions made in this file will only take effect for the kXXXXv1_64 project and will not affect other projects.
Before Kernel 6.1
Platform’s DTS file path: alps/kernel-x.x/arch/arm64/boot/dts/mediatek/ mtXXXX.dts
Project’s DTS file path: alps/kernel-x.x/arch/arm64/boot/dts/mediatek/ [project].dts
Kernel 6.1 and later versions
Platform’s DTS file path: alps/kernel/kernel_device_modules-x.x/arch/arm64/boot/dts/mediatek/ mtXXXX.dts
Project’s DTS file path: alps/kernel/kernel_device_modules-x.x/arch/arm64/boot/dts/mediatek/ [project].dts
ADSP system DTS property description

Property
Modifiable
Support kernrel version
Description
adspsys
reg
X
Supported by all kernel versions
This property defines registers that would be used in the ADSP kernel driver.

reg-names
X
Supported by all  kernel versions
Names of registers.

interrupts
X
Supported by all kernel versions
This property defines the interrupts that APMCU can receive from ADSP.

interrupt-names
X
Supported by all kernel versions
Names of interrupts.

hrt-ctrl-bits
X
From Kernel 6.1
This property defines the required value for ADSP to become a HRT master.

power-domains
X
Supported by all kernel versions
This property defines the power domains required to enable ADSP.

clocks
X
Supported by all kernel versions
This property defines the required clock sourcse for ADSP.

clock-names
X
Supported by all kernel versions
Names of clocks.

slp-prot-ctrl
X
From Kernel 6.1
This property indicates whether the ADSP kernel driver needs to control ADSP sleep protect.
A value of “1” indicates that it is required, while “0” indicates that it is not required.

interconnects
X
From Kernel 6.1
This property is used to register ADSP as an HRT master to the dvfsrc kernel driver.

interconnect-names
X
From Kernel 6.1
Names of intersections.

system-l2sram
X
From Kernel 6.1
This property indicates whether ADSP uses a portion of L2SRAM for system purposes.

core-num
X
Supported by all kernel versions
This property indicates the number of cores in ADSP.

adsp-rsv-ipidma-a
O
Supported by all kernel versions
This property defines the IPI DMA buffer size used by ADSP core 0.  It is recommended to increase this property value only , decreasing it may lead to issues in high load scenarios.

adsp-rsv-ipidma-b
O
Supported by all kernel versions, but is  only used on dual-core ADSP
This property defines the IPI DMA buffer size used by ADSP core 0.  It is recommended to increase this property value only , decreasing it may lead to issues in high load scenarios.

adsp-rsv-logger-a
X
Supported by all kernel versions
This property defines the ADSP core 0 logger buffer size.

adsp-rsv-logger-b
X
Supported by all kernel versions, but is  only used  on dual-core ADSP
This property defines the ADSP core 1 logger buffer size.

adsp-rsv-c2c
X
Only supported in Kernel with dual cores ADSP
This property defines the ADSP C2C DRAM buffer size.

adsp-rsv-dbg-dump-a
X
Supported by all kernel versions
This property shows the ADSP core 0 debug buffer size.

adsp-rsv-dbg-dump-b
X
Supported by all kernel versions, but is  only used on dual-core ADSP
This property shows the ADSP core 1 debug buffer size.

adsp-rsv-core-dump-a
X
Supported by all kernel versions
This property shows the ADSP core 0 core dump size.

adsp-rsv-core-dump-b
X
Supported by all kernel versions, but is  only used on dual-core ADSP
This property shows the ADSP core 1 core dump size.

adsp-rsv-pcie
X
From Kernel 5.15
Not in use

adsp-rsv-l2sram
X
From Kernel 6.1
This property shows the size of the ADSP L2SRAM control buffer.

adsp-rsv-xhci
X
From Kernel 6.1
This property shows the buffer size shared between ADSP and USB.

adsp-rsv-audio
X
Supported by all kernel versions
This property shows the buffer size shared between ADSP and Audio.

adsp-slc-enable
O
From Kernel 6.12
T his property controls   whether the adsp should use  SLC . SLC is similar to cache on DRAM and allows the  ADSP  to fetch DRAM data faster. When the value is 1, the  ADSP  will use SLC.  
adsp_core0
reg
X
Supported by all kernel versions
This property lists the sizes of ITCM, DTCM, and L2SRAM (system usage) for ADSP core 0.

system
O
Supported by all kernel versions
This property shows the system RAM address and size used by the ADSP core 0. Only the size can be modified, and the method for modifying the size can be found in  DSP Image

interrupts
X
Supported by all kernel versions
This property defines the interrupts that APMCU can receive from ADSP core 0.

mboxes
X
Supported by all  kernel versions
This property lists the mailboxes used by ADSP  core 0. There are two sets in total. The first set of mailboxes is used for messages sent from APMCU to ADSP core 0, while the second set is used for messages sent in the opposite direction.

feature-control
X
Supported by all kernel versions
This property lists the features supported by ADSP core 0. It is 64 bits in length, with each bit representing a feature. A bit value of 1 indicates that ADSP core 0 will activate when that feature is in operation, while a value of 0 means it will enter suspend mode. It is not recommended to modify this property as it may unnecessarily activate ADSP core 0, increasing power consumption.
adsp_core1
reg
X
Supported by all kernel versions
This property lists the sizes of ITCM, DTCM, and L2SRAM (system usage) for ADSP core 1.

system
O
Supported by all kernel versions
This property shows the system RAM address and size used by the ADSP core 1. Only the size can be modified, and the method for modifying the size can be found in  DSP Image

interrupts
X
Supported by all kernel versions
This property defines the interrupts that APMCU can receive from ADSP core 1.

mboxes
X
Supported by all kernel versions
This property lists the mailboxes used by ADSP core 1. There are two sets in total. The first set of mailboxes is used for messages sent from APMCU to ADSP core 1, while the second set is used for messages sent in the opposite direction.

feature-control
X
Supported by all kernel versions
This property lists the features supported by ADSP core 1. It is 64 bits in length, with each bit representing a feature. A bit value of 1 indicates that ADSP core 1 will activate when that feature is in operation, while a value of 0 means it will enter suspend mode. It is not recommended to modify this property as it may unnecessarily activate ADSP core 1, increasing power consumption.
adsp_slp_prot
power-domains
X
From Kernel 6.1
This property defines the power domain that needs to control ADSP slpprot.
audio_dsp_hrt_bw
adsp-qos-scene-phone
X
From Kernel 6.1
This property specifies the bandwidth that needs to be communicated to the dvfsrc kernel  driver for the phone call scenario, with a default value of 500 Mbps.




---
# SRC0314 Aurisys_Introduction_V1.9.0.pptx

来源：DOC\Aurisys_Introduction_V1.9.0.pptx

SHA-256：d32e2b31d9a4b0d73d1623d037ba3396b8943ff452ade2002b0e272c2e2f3718

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0314.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1


Aurisys  Introduction

## 幻灯片 2

Agenda
Introduction
Aurisys  Framework and Interface
System Level  Aurisys  Structure
Tuning Architecture
Debug
Lib verifier
2

## 幻灯片 3

Introduction
Aurisys  is a framework to facilitate the sound processing solution development on MTK platforms.
includes standardized and platform independent  interfaces for 
sound processing
Tuning
Software debug
The software can be re-used and create a more consistent experience for the developers.  

3
Aurisys  library
Sources
Library A for AP
Library B for MCU
Library C for DSP

Library A for AP

Library B for MCU

Library C for DSP
AP
MCU
DSP



Compile



Deploy
Not processor instruction dependent

## 幻灯片 4

Aurisys  Framework & ARSI
Aurisys  framework
Adapt variant running environment. (e.g. AP/DSP/MCU)
Aurisys  library has same control flow/data flow/tuning flow
Adapt variant library processing capability (ex: working sample rate/bit format…)
Aurisys  framework can convert input/output data format automatically
ARSI( Aurisys  Software Interface) include two type APIs
ARSI-PROC: Sound processing interface
ARSI-PAR: Parameter parsing interface
3 rd  Party  Aurisys
Sound processing library
ARSI


ARSI-PROC call
ARSI-PAR call
Aurisys  Framework
Aurisys_config.xml
3 rd  Party  Aurisys
Parameter Parsing Library
Running on AP side to do the  paramter  file parsing
Running on  AP/DSP/MCU side to do the sound processing
4

## 幻灯片 5

System Level  Aurisys  Structure
Aurisys  library can be easy to porting to AP/DSP/MCU of MTK platform
Support  aurisys  framework
Support  aurisys  framework
Vendor’s  aurisys  library
Vendor’s  aurisys  library
5

## 幻灯片 6

Tuning Architecture
ARSI-PROC :  aurisys  sound processing interface 
ARSI-PAR :  aurisys  parameter parsing interface 
adb  interface
(android debug bridge)
Aurisys  framework
6

## 幻灯片 7

Debugging Interface
ARSI also provide debugging interface
Log:
Dynamic enable/disable library log through ADB command
Debugging dump:
Aurisys  library can write proprietary data to a file for issue debugging
Dynamic enable/disable debugging dump through ADB command
7

## 幻灯片 8

Lib Verifier
Lib verifier provide a simple test program to verify your  Aurisys  lib’s implementation which is pass  API level test  or not
Easy to compile & run in variant environment   and simulator
It only contain 1 main source file and 3 header files
You also can check the source to know the  aurisys  library’s
Control sequence
Simple implementation

“3 rd  Party  Aurisys  lib” or “reference implementation”
ARSI

ARSI testing
Lib Verifier
8

## 幻灯片 9

Q&A

9

## 幻灯片 10

Android HAL Block Diagram (Record)
10

## 幻灯片 11

aurisys_config.xml

Record
VoIP UL
VoIP DL
Playback
library
mtk_speech_enh
mtk_speech_enh
mtk_speech_enh
mtk_bessound
aurisys_scenario
RECORD_WITHOUT_AEC
VOIP
VOIP_WITHOUT_AEC
PLAYBACK_NORMAL
sample_rate
48000/16000
16000
16000
8000/11025/12000/16000/22050/24000/32000/44100/48000/64000/88200/96000/128000/176400/192000
audio_format
16bit
16bit
16bit
32bit
frame_size_ms
20
20
20
0 (not specified)
UL  buf  channels
In:1/2/3 Out:1/2
In:1/2/3 Out:1/2 Ref: 1
In:1/2/3 Out:1/2 
X
DL   buf  channels
X
In:1 Out:1
In:1 Out:1
In:2  Out:2
11

## 幻灯片 12

aurisys_config.xml
Consist of  aurisys_scenarios  and  hal_librarys
aurisys_scenarios  describe what 3 rd  party library would be used for certain scenario (e.g., VoIP, Record, Playback …)
hal_librarys  describe the SWIP capability (e.g., sample rate, format, channel number, frame size …) for certain scenario
aurisys_scenario
hal_library
Can add more than 1 lib to the  Aurisys  structure 
12

## 幻灯片 13

Debug ADB CMDs
Enable  Aurisys  log:
adb  shell " AudioSetParam  AURISYS_SET_PARAM,HAL,ALL,MTKSE,ENABLE_LOG,1=SET“

Enable  Aurisys  Raw and EPL dump:
adb  shell " AudioSetParam  AURISYS_SET_PARAM,HAL,ALL,MTKSE,ENABLE_RAW_DUMP,1=SET“
/ sdcard / mtklog / audio_dump / mtk_speech_enh.X.XXX.XXXX.ul_in.pcm
/ sdcard / mtklog / audio_dump / mtk_speech_enh.X.XXX.XXXX.ul_out.pcm
/ sdcard / mtklog / audio_dump / mtk_speech_enh.X.XXX.XXXX.aec.pcm
adb  shell “ AudioSetParam  AURISYS_SET_PARAM,HAL,ALL,MTKSE,ENABLE_LIB_DUMP,1=SET“
/ sdcard / mtklog / audio_dump / mtk_speech_enh.X.XXXX.XXXX.lib_dump.bin

13
For now, we don’t support DSP side raw dump.
Therefore, we strongly recommend implement lib dump for debug

## 幻灯片 14

Get   ADB result from console
Out put  adb  command result to a file:
adb  shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL,AURISYS_DEMO,KEY_VALUE,HAHA,on =SET " >List.ini

Some of the commands may output as  stderr , use below command instead:
adb  shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL,AURISYS_DEMO,KEY_VALUE,HAHA,on =SET  2>&1 " >List.ini


14

## 幻灯片 15

Aurisys  Control Flow
Aurisys  Control Flow on AP
Aurisys   Cotnrol  Flow on DSP

15

## 幻灯片 16

Aurisys  Control Flow on AP

Processing loop
16
arsi_load_param   would only called ones when device boot up. This function is optional, but implement this function may reduce lots of time form file IO.

## 幻灯片 17

Aurisys  Control Flow on DSP
Since lib on DSP  cannot  access parameter file on AP, 3 rd  party lib should provide  AP side lib  for parameter parsing
Aurisys  will provide parsed parameter buffer from AP to DSP for DSP side lib to create lib handler


Processing loop
17



## 幻灯片 18

  requirements for  Aurisys  initialization.
18


Because the  Aurisys  create will be performed on the first read/write operation, due to some latency considerations, during initialization(red box), the total execution time of these APIs should not exceed one frame size as much as possible (for example, processing data for 20ms at once, the execution time of these APIs should ideally be within 20ms)

During simulation, the corresponding API's response time should be checked.

## 幻灯片 19

VoIP VS Phone Call Control Flow
VoIP DL/UL task use  different  lib handler for processing, phone call use same lib handler.
For VoIP task, UL/DL lib handler is independent, UL task  cannot  access to DL task voice data, vice versa.


arsi_process_dl_buf
arsi_create_handler
arsi_destroy_handler
VoIP DL task

Processing Loop

arsi_process_ul_buf
arsi_create_handler
arsi_destroy_handler
VoIP UL task

Processing Loop

arsi_process_dl_buf
arsi_create_handler
arsi_destroy_handler
Phone call task
Processing Loop
arsi_process_ul_buf

VoIP task
Phone call task
19

## 幻灯片 20

Voice Recognition + AEC Support
MTK has implement voice recognition + AEC scene with MTK proprietary  input_source   81  (only need it when customer required)
3 rd  party Lib could use  input_source   81  to determine is voice recognition + AEC scene or not
task_config  will be provided in  arsi_query_param_buf_size_by_custom_info  and  arsi_parsing_param_file_by_custom_info  API
20

## 幻灯片 21

enhancement_feature_mask
3 rd  party should use  enhancement_feature_mask  to on/off corresponded enhancement feature in  task_config .
For example, AEC function can be turned on/off by controlling the  ENHANCEMENT_FEATURE_EC  flag.
21
Only  ENHANCEMENT_FEATURE_EC  is mandatory, other are optional.

## 幻灯片 22

Aurisys  API list
ARSI-PROC APIs
ARSI-PAR APIs
22

## 幻灯片 23

ARSI-PROC APIs
Functions
Description 
arsi_query_working_buf_size
Query the size of the working buffer
arsi_query_process_unit_bytes
Query the basic data consumption for uplink/downlink processing
arsi_create_handler
Create handler and initialize it
arsi_process_ul_buf
Processing microphone/uplink data
arsi_process_dl_buf
Processing playback/downlink data
arsi_destroy_handler
Deinitialize  handler and destroy it (no need to free the working buffer)
arsi_update_device
Update task device info
arsi_update_param
Update enhancement parameters
arsi_set_ul_digital_gain
Set uplink digital gain
arsi_set_dl_digital_gain
Set downlink digital gain
arsi_set_ul_mute
Mute/ unmute  uplink
arsi_set_dl_mute
Mute/ unmute  downlink
arsi_set_ul_enhance
Enable/disable uplink enhancement function
arsi_set_dl_enhance
Enable/disable downlink enhancement function
arsi_set_debug_log_fp
Set debug log print callback function
arsi_query_max_debug_dump_buf_size
Query the size of dump  buf  file for each  downlink/uplink processing
arsi_set_addr_value
Set value at a specified address
arsi_get_addr_value
Get value from the specified address
arsi_set_key_value_pair
set  key_value  string to library
arsi_get_key_value_pair
get  key_value  string from library
23

## 幻灯片 24

ARSI-PAR APIs
   Functions
Description 
arsi_load_param
This  function  will only called once when device boot up.
Load the parameter file content  into memory
Library can retrieve the parameter buffer from memory without any file I/O afterward
Implemented in AP side only, but not in DSP.
arsi_query_param_buf_size_by_custom_info
Query the buffer size to keep speech enhancement parameters
Implemented in AP side only
arsi_parsing_param_file_by_custom_info
Parsing param file to get parameters into  p_param_buf
Implemented in AP side only
24


---
# SRC0315 Aurisys_Tuning_Guide_V1.9.0.pptx

来源：DOC\Aurisys_Tuning_Guide_V1.9.0.pptx

SHA-256：68f4aa4579512c5b3b6b9db7510a647145364badc5c87b5f76c05391fab192b2

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0315.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1

Mediatek
Aurisys  Tuning Guide

## 幻灯片 2

Outline
Aurisys  Tuning Overview
Interfaces
Aurisys  Static and Dynamic Tuning
2

## 幻灯片 3

Outline
Aurisys  Tuning Overview
Interfaces
Aurisys  Static and  Dynamic  Tuning
3

## 幻灯片 4

Overview
Aurisys  define  a series of  adb  commands which include transmitting the whole parameter file to the device, receiving whole parameter file from the device, transmitting specific data to the  3rd party sound processing library ,  and receiving specific data from the 3 rd   party  library.
This document will introduce  Aurisys  tuning  adb  commands and show the tuning steps under  Audrisys  structure.
AudioFlinger
3 rd  Party Tuning Tool
AudioSystem
Audio HAL
3 rd  party  library




adb   cmd
Aurisys
arsi
( aurisys  SW interface)
Db/xml/bin…
Library  param :
Addr /Key
4

## 幻灯片 5

Outline
Aurisys  Tuning Overview
Tuning Interfaces
Set parameter
Get parameter
Aurisys  Static and  Dynamic  Tuning
5

## 幻灯片 6

Tuning Interface - Set Parameter
adb  shell " AudioSetParam   AURISYS_SET_PARAM , $target , $scene , $lib , $ cmd =SET“


 

    
6
Argument
Example
Comments
$target
HAL, DSP
The processing API in AP (HAL) or in DSP
$scene
PLAYBACK_NORMAL, RECORD_WITHOUT_AEC,
VOIP…
Specific scene for   library  tuning, “ALL” is for all scenes that  library  supported. Please refer to scene table page (p.8)
$lib
library name
Library  name which need tuning, defined as  adb_cmd_key  in aurisys_config_hifi3.xml
$ cmd
PARAM_FILE, your_param_path
APPLY_PARAM, enhancement_mode
ADDR_VALUE, 0XAA,0XBB
KEY_VALUE, your_key,your_value
Please refer to send  CMD summary page (p.9)

## 幻灯片 7

Tuning Interface - Get  Parameter
7
adb  shell " AudioSetParam   AURISYS_GET_PARAM , $target , $scene , $lib , $ cmd "




 

    
Argument
Example
Comments
$target
HAL, DSP
The processing API in AP (HAL) or in DSP
$scene
PLAYBACK_NORMAL, RECORD_WITHOUT_AEC,
VOIP…
Specific scene for   library  tuning, “ALL” is for all scenes that  library  supported. Please refer to scene table page (p.8)
$lib
library name
Library  name which need tuning, defined as  adb_cmd_key  in aurisys_config_hifi3.xml
$ cmd
PARAM_FILE
APPLY_PARAM
ADDR_VALUE, 0XAA
KEY_VALUE, your_key
Please refer to get  CMD  summary page (p.10)


## 幻灯片 8

Scene  Table
8
Aurisys  defines series of scenes for HAL and DSP
HAL
DSP

## 幻灯片 9

Tuning Interface -  Set Parameter CMD Summary
CMDs
ARSI   Function  Calls
Usage
CMD type
PARAM_FILE, param_path

set parameter file path
Static
APPLY_PARAM, mode
arsi_query_param_buf_size_by_custom_info
arsi_parsing_param_file_by_custom_info
arsi_update_param
apply new  customize  information   to   library,  and change its enhancement parameter.  IP provider can provide different  custom_info  for user to select.   The  custom_info  should be an  string .
Dynamic
ADDR_VALUE, addr,value
arsi_set_addr_value
set “ value”  at the “ addr ”  in library, “ addr ” should be defined by the library itself
Dynamic

KEY_VALUE, key,value
arsi_set_key_value_pair
set " value " of the " key " in library, “ key ” should be defined by the library itself
Dynamic

Aurisys  contains two types of tuning CMD:
Static : CMD  should be sent before  library open
Dynamic :  only works when library running
9

## 幻灯片 10

Tuning Interface -  Get Parameter CMD Summary
CMDs
ARSI   Function  Calls
Usage
CMD type
PARAM_FILE

get parameter file path
Static
APPLY_PARAM

get   customize  information  form  library
Dynamic
ADDR_VALUE, addr
arsi_get_addr_value
get value at the “ addr ”  in library, “ addr ” should be defined by the library itself
Dynamic

KEY_VALUE, key
arsi_get_key_value_pair
get  value  of the " key " in library, “ key ” should be defined by the library itself
Dynamic

Aurisys  contains two types of tuning CMD:
Static : CMD  should be sent before library open
Dynamic :  only works when library running
10

## 幻灯片 11

API For Set/Get Parameter
Alternatively, can use below JAVA API for set/get tuning parameter
AudioManager.setParameters ( "AURISYS_SET_PARAM ,$target,$scene,$lib,$ cmd =SET");
AudioManager.setParameters ( "AURISYS_GET_PARAM,$target,$scene,$lib,$ cmd ");

11

## 幻灯片 12

Outline
Aurisys  Tuning Overview
Interfaces
Tuning example
Static tuning
Dynamic tuning
12

## 幻灯片 13

Static Tuning - PARAM_FILE
For applying another parameter file, can be done by below tuning steps.

Tuning steps:
adb   shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL, AURISYS_DEMO , PARAM_FILE , / data/d.dat =SET“
Run  playback process  with  AURISYS_DEMO  lib.  ( CMD should be sent before library open )

Before  AURISYS_DEMO  open, set this command will replace  AURISYS_DEMO  parameter file to the  / data/d.dat . This CMD will take effect till sending another  PARAM_FILE  CMD or killing  audioserver  (by killing  audioserver , the parameter file will reset to  param_path  as  defined in  aurisys_config.xml ). 

13

## 幻灯片 14

Static Tuning - PARAM_FILE
14
CMD1 :  adb  shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL, AURISYS_DEMO , PARAM_FILE , / data/d.dat =SET"
CMD1

## 幻灯片 15

Dynamic Tuning - ADDR_VALUE/ KEY_VALUE
For dynamically applying another address value or key value, can be done by below tuning steps.

Tuning steps:
Run playback process with  AURISYS_DEMO  lib.  (below C MD  only works when library running )
adb   shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL, AURISYS_DEMO , ADDR_VALUE , 0x1234,0x5566 =SET "
adb   shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL, AURISYS_DEMO , KEY_VALUE , HAHA,on =SET "

First run playback process with  AURISYS_DEMO   lib, then set these commands  will replace  AURISYS_DEMO  address  0x1234  value to  0x5566 , and replace  key_value   HAHA  to  on .  These  commands  will  take effect till  playback end, and will  not  effect next playback round.
AURISYS_DEMO   is defined as  adb_cmd_key  in aurisys_config.xml/aurisys_config_hifi3.xml, key value (e.g.   HAHA,on ) and address value (e.g.  0x1234,0x5566 ) sh ould  be defined by the library  itself.


15

## 幻灯片 16

Dynamic Tuning -  ADDR_VALUE/KEY_VALUE
16
CMD1 :  adb   shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL, AURISYS_DEMO , ADDR_VALUE , 0x1234,0x5566 =SET "
CMD2 :  adb   shell  " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL, AURISYS_DEMO , KEY_VALUE , HAHA,on =SET"

CMD1
CMD2

## 幻灯片 17

Dynamic Tuning  - APPLY_PARAM
APPLY_PARAM can work both statically and dynamically.

Dynamic  tuning steps  :
Run playback process  with  AURISYS_DEMO  lib.
( adb  shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL, AURISYS_DEMO , PARAM_FILE , /data/d.dat =SET “)
adb  shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL, AURISYS_DEMO , APPLY_PARAM , SetAudioCustomScene,app1 =SET "

First  run playback process to  open  AURISYS_DEMO  lib,  then set  APPLY_PARAM  command  will set  AURISYS_DEMO   custom info  to  SetAudioCustomScene =app1 .   If set  PARAM_FILE  command before  APPLY_PARAM , will dynamically  replace  AURISYS_DEMO   parameter  file to the  / data/d.dat  and  update parameter.  PARAM_FILE  command  will  take effect till sending another  PARAM_FILE   command  or killing  audioserver  (by killing  audioserver , the  parameter  file  will  reset to  param_path   as defined  in  aurisys_config.xml/aurisys_config_hifi3.xml). 

17

## 幻灯片 18

CMD1 :  adb  shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL, AURISYS_DEMO , PARAM_FILE , / data/d.dat =SET"
CMD2 :  adb  shell " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL, AURISYS_DEMO , APPLY_PARAM , SetAudioCustomScene,app1 =SET "

Dynamic Tuning - APPLY_PARAM
18
CMD1
CMD2
Set by CMD2
Set by CMD1

## 幻灯片 19

How to check set result?
Check set CMD result :
After setting CMD, console will  show  “ SET_PASS ”, if CMD successfully transfer to  library . Otherwise it  will show  “ SET_FAIL ”.

Check CMD take effect in  library :
adb   shell " AudioSetParam   AURISYS_GET_PARAM,DSP,PRIMARY, AURISYS_DEMO , PARAM_FILE “

Below CMDs can only send  after  open  AURISYS_DEMO  lib ,  or will get “ GET_FAIL ”  in console.
adb  shell " AudioSetParam   AURISYS_GET_PARAM,DSP,PRIMARY, AURISYS_DEMO , ADDR_VALUE , 0x1234 "
adb  shell " AudioSetParam   AURISYS_GET_PARAM,DSP,PRIMARY, AURISYS_DEMO , KEY_VALUE , HAHA “
adb  shell " AudioSetParam  AURISYS_GET_PARAM,DSP,PRIMARY, AURISYS_DEMO , APPLY_PARAM “



19

## 幻灯片 20

appendix

20

## 幻灯片 21

Aurisys  ARSI  functions
   Functions
Description 
arsi_query_param_buf_size_by_custom_info
Query the buffer size to  keep  library  parameters
arsi_parsing_param_file_by_custom_info
Parsing  param  file to get parameters into  p_param_buf
arsi_update_param
Update  param  and  enhancement mode
arsi_set_addr_value
Set value at a specified address
arsi_get_addr_value
Get value from the specified address
arsi_set_key_value_pair
set key_value string to library
arsi_get_key_value_pair
get  key_value  string from library
21

## 幻灯片 22

Get   ADB result from console
Out put  adb  command result to a file:
adb  shell  " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL,AURISYS_DEMO,KEY_VALUE,HAHA,on =SET" > List.ini

Some of the commands may output as  stderr , use below command instead:
adb  shell  " AudioSetParam   AURISYS_SET_PARAM,DSP,ALL,AURISYS_DEMO ,KEY_VALUE,HAHA,on =SET  2>&1 " >List.ini


22

## 幻灯片 23

aurisys_config_hifi3.xml
23
adb  shell " AudioSetParam  AURISYS_SET_PARAM,$target, $scene , $lib , $ cmd =SET  "


## 幻灯片 24




---
# SRC0316 Lib_Verifier_User_Guide_V1.9.0.pptx

来源：DOC\Lib_Verifier_User_Guide_V1.9.0.pptx

SHA-256：35d50ada4b608faa96bb3b6312b9c946c68ffc127af172ee20e216fe48099a04

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0316.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1

Aurisys Lib Verifier User Guide

## 幻灯片 2

Lib verifier introduction
Aurisys interface version
File/Folder structure description
Build/run the demo lib & lib verifier
For x86 Linux environment
For Android
For Xplorer simulator
For MRV PDK
Outline
3 rd  party lib verification
Verification flow
Test Config Structure
Update makefile/Android.mk
Check test result
Lib dump parser
3 rd  party release package to mtk
2

## 幻灯片 3

Aurisys lib verifier package include
A reference implementation of aurisys library
Simple test environment to
Development & test 3 rd  party aurisys wrapper on  simulator of DSP
Help 3 rd  party to do unit test before release to MTK 
Aurisys Lib Verifier Introduction

Lib verifier on simulator

Aurisys framework on device
3 rd  party  MUST   do the library verification before release

Release to MTK
MTK integrate the 3 rd  party on device

Demo
Aurisys Library
Lib verifier on simulator

3 rd  party implement
Aurisys library
MTK provide demo library & lib verifier
Aurisys Library Development Flow
3 rd  party
Aurisys Library
3 rd  party
Aurisys Library
3

## 幻灯片 4

Lib Verifier Version
4
Aurisys  API Version
Support  Anrdroid  Version
1.3.0
P
1.4.0
Q
1.5.0
R
1.6.0
S
1.7.0
T
1.8.0
U, V
1.9.0
W


The following table describes which  Aurisys  API version is used in each Android version.

## 幻灯片 5

Folder/File name
Allow 3 rd  party  modfiy  it
Description
Interface/
No
aurisys lib interface header files 
[Except] Only allow 3 rd  party to add  library entry point to  arsi_library_entry_points.h
libaurisysdemo /
Yes
3 rd  party aurisys lib reference implementation
lib_dump_parser /
Yes
3 rd  party lib dump parser reference implementation
lib_verifier / pcm /
Yes
Input/output pcm folder
lib_verifier /vendor/
Yes
3 rd  party parameter files
lib_verifier/*.c & .h
No
Lib verifier implementation
lib_verifier / device_config.h
3 rd  party can extend it
Define the device’s configuration
lib_verifier / test_case_config.h
Yes
Define the test case which is depends on aurisys  lib’s capability
lib_verifier /Android.mk
Yes
Makefile  for Android build system
lib_verifier/ makefile
Yes
GNU  makefile  for linux
.settings
Bin
. cproject
.project
Xxproject
Makefile
Yes
Xplorer simulator project  files
src /
test/
Yes
MRV PDK project files
File/Folder Structure Description
5

## 幻灯片 6

Build demo lib & lib verifier
cd  API/V1.x.x/ lib_verifier
make



Run lib verifier & output test result to test_result.txt
./ aurisys_lib_verifier  > test_result.txt
You can check the test_result.txt to know the failure case & related debug message


x86 linux environment  -Build/Run Demo Lib & Lib Verifier
6

## 幻灯片 7

Build demo lib & lib verifier on Android BSP
Copy API/V1.x.x to $ANDROID_ROOT/vendor/ mediatek /proprietary/external/ lib_verifier
cd  $ANDROID_ROOT
Build demo library
make  libaurisysdemo
Build lib verifier
make  aurisys_lib_verifier
Push demo lib & lib verifier to device
adb  root &  adb  remount
adb  push out/target/product/$PROJECT/vendor/lib/ libaurisysdemo.so  /vendor/lib/
adb  push out/target/product/$PROJECT/vendor/bin/ aurisys_lib_verifier  /vendor/bin/
adb  shell  chmod  777 /vendor/bin/ aurisys_lib_verifier
Run lib verifier & output log to lib_verifier_test_result.txt
adb  shell " aurisys_lib_verifier  > / sdcard /lib_verifier_test_result.txt"
You can check the lib_verifier_test_result.txt to know the failure case & related debug message
Android environment  –  Build/Run Demo Lib & Lib Verifier
7

## 幻灯片 8

Put  CONFIG\HiFi3 \ hifi3_eiger_win32.tgz  under {install root}\ XtDevTools \downloads\RG-2016.4\builds 
IDE open XPG View and install  hifi3_eiger_win32.tgz & RG-2017-6 package









After installation done, you can find the hifi3_eiger HW configure 

	

Xplorer Simulator  –   Build/Run Demo Lib & Lib Verifier   –   Install MTK HW Configuration
1
2
3
4
5

6
7
The config file is hw dependent, please contact the MTK  adsp  window
8

## 幻灯片 9

9

Xplorer Simulator - Import Lib Verifier Workspace
1
2
3
4
Select the lib verifier workspace folder

Workspace imported

## 幻灯片 10

10
Select the target project with  LibVerifier  
Configure HW configuration with hifi3_eiger
build project
Run or debug
Xplorer Simulator - Build & Run Lib Verifier
1
2
3
4
4

## 幻灯片 11

11
Please install RV PDK first
Add  LibVerifier  to MRV PDK workspace
Create “ LibVerifier ” folder in {PDK_ROOT}/ sdk /Demo folder
Copy lib verifier sources to the  “ LibVerifier ” folder
Generate  makefiles
Run configure.py in  {PDK_ROOT}/ sdk /
Open MRV PDK IDE
Run runIDE.sh in  {PDK_ROOT}/ sdk /Demo
MRV PDK - Import PDK Lib Verifier Projects
Aurisys dev packages
1
Create  LibVerifier  folder


Copy files
2
Choose what Lib Verifier version you want
Ex: For U OS: 1.8.0
RV PDK Demo project folder


## 幻灯片 12

12
Import the generated project -  LibVerifier
File -> Import
Existing Projects into Workspace -> Next
Click the Browse  button of Select root directory
Select the “build” folder of RV PDK and click OK button
Select the Projects of “ LibVerifier ”
Click “Finish” button
MRV PDK - Import PDK  Lib Verifier  Projects
1
2
2
3
4
5
6
4

## 幻灯片 13

13
Double click the “Build Targets” you want (ex: [exe]RV55.elf)





Check build pass log
MRV PDK - Build

## 幻灯片 14

14
Run projects
Click the run button
Click the “Run Configuration” item
Double click the “Hardware Debugging” item to new configuration
Select the elf file of  LibVerifier  project to run
Ex: XXX/Demo/ build / LibVerifier /test/ MRV55.elf
Select the Configuration you want
“RV55 Moderate Simulation” : For profiling the cycle count of RV55
Click the “Run” button
MRV PDK - Run
1
2
3
5
4
6
The log of running result

## 幻灯片 15

15
If you got build error message like below





CFLAG follow the recommended setting
-Wall  - mcoproc   - Werror    - mlongcalls    - LNO:simd   - ffunction -sections  - Wno -error=format - fdata -sections
Trouble Shooting

## 幻灯片 16

3 rd  party lib verification

16

## 幻灯片 17

17
3 rd  party library source code integration
Replace the demo lib implementation in  libaurisysdemo / with yours
Add 3 rd  party library entry function declaration to interface/ arsi_library_entry_points.h



Configure the test case in  lib_verifier / test_case_config.h
Playback:  mtk_playback_test_case_list
Record:  mtk_record_test_case_list
VoIP:  mtk_voip_test_case_list
Phone call:  mtk_phone_call_test_case_list
Update  makefile
Update  makefile  or Android.mk if you add new source files
Compile & Run
Check the test result 
Verification Flow
Add 3 rd  party library’s declaration here

## 幻灯片 18

18
Config  the test case with 3rd party library's capability
Test_case_config.h
Note: 
1. Add l2sram size test list since V1.8.0, and 3 rd  party can extend it.

## 幻灯片 19

19

Playback Test Config Structure
struct   playback_test_case_config_t

Member
Description
const char * test_case_name
This  string is used to show in test result
NULL string imply it’s end of test case list
void (* arsi_assign_lib_fp )(AurisysLibInterface *lib)
Configure the entry  function of test case
string_buf_t   param_file_path
The  library’s parameter file path
task_scene_t   task_scene
Define the working  scene of test case
uint32_t  frame_size
Define the frame size of  test case
You can define many frame size which library supported
Ex: {5,20}
uint32_t  working_sample_rate
Define the sample rate of test case
You can define many sample rate which library supported
Ex: {8000, 16000}
uint32_t  audio_format
Define the audio format of test case
You can define many  audio format  which library supported
Ex: {AUDIO_FORMAT_PCM_16_BIT,AUDIO_FORMAT_PCM_32_BIT}
uint8_t interleave
Define the pcm is interleave  or not
Lib verifier only support non-interleave format now
Will support interleave format soon
uint8_t  dl_in_ch
Define  the number of downlink input channel of test case
uint8_t  dl_out_ch
Define  the number of downlink output channel of test case
profile_config_t   profile_config
Define  the profiles of test case
int8_t  audio_mode
Define  the  audio_mode  of test case
audio_source_t   input_source
Define  the input   source  of test case
int32_t mem_l2sram_size      (since V1.8.0)
Define the available l2sram memory size of the test case

## 幻灯片 20

20

Record Test Config Structure
struct   record_call_test_case_config_t

Member
Description
const char * test_case_name
This  string is used to show in test result
NULL string imply it’s end of test case list
void (* arsi_assign_lib_fp )(AurisysLibInterface *lib)
Configure the entry  function of test case
string_buf_t   param_file_path
The  library’s parameter file path
task_scene_t   task_scene
Define the working  scene of test case
uint32_t  frame_size
Define the frame size of  test case
You can define many frame size which library supported
Ex: {5,20}
uint32_t  working_sample_rate
Define the sample rate of test case
You can define many sample rate which library supported
Ex: {8000, 16000}
uint32_t  audio_format
Define the audio format of test case
You can define many  audio format  which library supported
Ex: {AUDIO_FORMAT_PCM_16_BIT,AUDIO_FORMAT_PCM_32_BIT}
uint8_t interleave
Define the pcm is interleave  or not
Lib verifier only support non-interleave format now
Will support interleave format soon
uint8_t  ul_in_ch
Define  the number of uplink input channel of test case
uint8_t  ul_ref_in_ch
Define  the number of uplink reference input channel of test case
uint8_t  ul_out_ch
Define  the number of uplink output channel of test case
profile_config_t   profile_config
Define  the profiles of test case
int8_t  audio_mode
Define  the  audio_mode  of test case
audio_source_t   input_source
Define  the input   source  of test case
int32_t  mem_slb_size
Define the available  slb  memory size of the test case
int32_t mem_l2sram_size     (since V1.8.0)
Define the available l2sram memory size of the test case

## 幻灯片 21

21

Phone Call/VoIP Test Config Structure
struct   phone_call_test_case_config_t  /  struct   voip_test_case_config_t

Member
Description
const char * test_case_name
This  string is used to show in test result
NULL string imply it’s end of test case list
void (* arsi_assign_lib_fp )(AurisysLibInterface *lib)
Configure the entry  function of test case
string_buf_t   param_file_path
The  library’s parameter file path
task_scene_t   task_scene
Define the working  scene of test case
uint32_t  frame_size
Define the frame size of  test case
You can define many frame size which library supported, Ex: {5,20}
uint32_t  working_sample_rate
Define the sample rate of test case
You can define many sample rate which library supported, Ex: {8000, 16000}
uint32_t  audio_format
Define the audio format of test case
You can define many  audio format  which library supported
Ex: {AUDIO_FORMAT_PCM_16_BIT,AUDIO_FORMAT_PCM_32_BIT}
uint8_t interleave
Define the pcm is interleave  or not
Lib verifier only support non-interleave format now
Will support interleave format soon
uint8_t  ul_in_ch
Define  the number of uplink input channel of test case
uint8_t  ul_ref_in_ch
Define  the number of uplink reference input channel of test case
uint8_t  ul_out_ch
Define  the number of uplink output channel of test case
uint8_t  dl_in_ch
Define  the number of downlink input channel of test case
uint8_t  dl_ref_in_ch
Define  the number of downlink reference input channel of test case
uint8_t  dl_out_ch
Define  the number of downlink output channel of test case
profile_config_t   profile_config
Define  the profiles of test case
int8_t  audio_mode
Define  the  audio_mode  of test case
audio_source_t   input_source
Define  the input   source  of test case
int32_t  mem_slb_size
Define the available  slb  memory size of the test case
Int32_t mem_l2sram_size     (since V1.8.0)
Define the available l2sram memory size of the test case

## 幻灯片 22

22
Config the test case with 3rd party library's capability.
If the library supports multiple input/output devices, 3rd party should extend the config list.
Mind that since V1.8.0,  audio_device_t  changed to an array type, and each array item represents only one device.
device_config.h


## 幻灯片 23

23
Update  Makefile
If you add new source files, please update OBJECTS variable
If the target environment support file I/O,
You can specify the pcm input/output path
If you add new header files, please update HEADERS variable
API/V1.x.x/ lib_verifier / makefile

## 幻灯片 24

24
Update Android.mk
If you add new source file, please update LOCAL_SRC_FILES variable
If the target environment support file I/O,
You can specify the pcm input/output path
API/V1.X.X/ lib_verifier /Android.mk
API/V1.X.X/ libaurisysdemo /Android.mk
If you add new source file, please update LOCAL_SRC_FILES variable

## 幻灯片 25

25
Below are the test result example
Check Test Result – Pass Case

Test case information

3 rd  party lib log

Test result: PASS
It’s 23 th  VOIP test case
It’s 533 th  total test case

## 幻灯片 26

Lib_verifier.h
26

Check Test Result – Failure Case

Error message


demo_lib.c

Root cause
Test result: Fail

## 幻灯片 27

Lib dump parser

27

## 幻灯片 28

28
Lib dump is designed for 3 rd  party dumping their debug information while signal processing
Customer can provide the lib dump file to 3 rd  party for trouble shooting
Strongly recommend 3 rd  party implement it
Lib dump parser is a reference implementation for parsing the lib dump file on Linux
Compile
cd  API/ Vx.x.x / lib_dump_parser
make
Run
./ demo_decode_dump  ../lib_verifier/pcm/Lib_dump.dat
Compile & Run Lib Dump Parser

## 幻灯片 29

3 rd  party release to mtk

29

## 幻灯片 30

30
3 rd  party release aurisys lib to MTK MUST contain below files
The 3 rd  party library & aurisys wrapper
The parameter file that library needed
aurisys_config.xml
Please refer to the “XML Descriptor for Aurisys” section in Aurisys_Development_Tutorial.doc
This xml configuration must match the test case configuration of lib verifier
The lib verifier package which 3 rd  party used
MTK have to review if there is any invalid modification
The output log of lib verifier
Confirm that 3 rd  party lib can pass all verifier test
Release Packages

## 幻灯片 31

appendix

31

## 幻灯片 32

32
DO NOT  edit files in interface/
arsi_api.h
arsi_api_version.h
arsi_call_type.h
arsi_type.h
audio_task.h
wrapped_audio.h
wrapped_errors.h
except
arsi_library_entry_points.h






Please notify  MediaTek  SWRD if you want to change this file

NEVER Change API Files!!

## 幻灯片 33

33
Entry points – Dynamic Link (HAL)
dynamic_link_arsi_assign_lib_fp
lib_demo.so
API
3 rd  party libraries
libfvaudio.so
lib_iir.so
user
dlopen ()

## 幻灯片 34

Entry points - Static Link( FreeRTOS )
arsi_library_entry_points.h
demo_arsi_assign_lib_fp
FV_arsi_assign_lib_fp
iir_arsi_assign_lib_fp
API
3 rd  party libraries
user
lib_demo.a
libfvaudio.a
lib_iir.a
34

## 幻灯片 35

35
Dump for processing (VM/EPL/…)
Get  max  dump  buf  size of one frame
Audio
Driver
Lib
arsi_query_max_debug_dump_buf_size
arsi_process_ul_buf
dump  bufs
dump  bufs
sdcard
Lib decode program



PCM / time info / gain / …

## 幻灯片 36


Any string you want
36
Lib Version

## 幻灯片 37

New Parsing API
Before V1.3.0
// phase out after V1.3.0
After V1.3.0
Ex: "   SetAudioCustomScene =app1,aa= bb,cc = dd ”

demo_arsi_assign_lib_fp
// phase out after V1.3.0
new
37

## 幻灯片 38

Thank  you 
Question s and Discussions


---
# SRC0317 mtk_nne_framework_introduction.pptx

来源：DOC\mtk_nne_framework_introduction.pptx

SHA-256：ea0d7120325d0bf3cb4ba4b0f0b33d1e5de593e2efc3fc6f2baebb56cc99c1ab

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0317.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1

MTK NNE framework introduction
MTK audio team

## 幻灯片 2

2
Introduction 
MTK NNE framework and Interface
Model deployment
Test with MTK NNE framework
Troubleshooting
Agenda






## 幻灯片 3

3
The MTK NNE framework is used to simplify the steps of testing and developing an NNE application on MTK platforms.
Up to 4 models can be deployed on MTK NNE framework.
The MTK NNE framework is developed with  Xtensa  NNE SDK V1.4p2 .
Introduction

## 幻灯片 4

4
NNE   related folder structure
ADSP_PATH
HIFI5_SP
api
middleware
nne_model
model
sample
common
drivers
V1.4p2
nne

  Place the
   tflite  model

  Place the model
  test code

  NNE APIs supported
  by MTK

## 幻灯片 5




5
HiFi5 Structure with NNE
NNE
I-Cache
64 KB
D-Cache
128 KB
D-Cache
128 KB
I-Cache
64 KB
L2TCM
768 KB
HiFi5 DSP  CoreA
HiFi5 DSP  Core B
NN:
32 8x8
NN:
32 8x8
I-TCM
32 KB
I-TCM
32 KB
D-TCM
36 KB
D-TCM
64  KB
Bus Interconnect
UBUF
128 KB
Int bus
Int bus
interrupt

## 幻灯片 6

6
NNE inference flow

## 幻灯片 7

7
NNE inference flow (2)

## 幻灯片 8

8
Please enable the option “ CFG_NNE_SUPPORT ”   by modifying the default value from  no  to  yes  and rebuild the ADSP image.
Path: ${ADSP_PATH}/HIFI5_SP/project/${PLATFORM}/HIFI5_ B /platform/platform.mk
To test models, please enable the option  “ CFG_NNE_SAMPLE_SUPPORT ” as well
The  CFG_NNE_SAMPLE_SUPPORT  only takes effect when  CFG_NNE_SUPPORT  is enabled.
There is a sample project demonstrating the way to enable MTK NNE framework. Please refer to the project  ${PLATFORM}-sample-project- nne .
Path: Path: ${ADSP_PATH}/HIFI5_SP/project/${PLATFORM}/HIFI5_B/${PLATFORM}-sample-project-nne/project.mk
Enable MTK NNE framework in HiFi5 DSP

Not enabled
enabled
Enable MTK NNE framework




Test models
(MTK NNE framework must be enabled)





## 幻灯片 9

9
To develop an algorithm/application for NNE, the following c flags are necessary. Please add these  C flags  in the  library’s build script .
Makefile  example:
 ${ADSP_PATH}/middleware/nne_model/sample/makefile_nne_sample.mk
Developer note – C flags
CFLAGS += \ -DTF_LITE_STATIC_MEMORY \ -DTF_LITE_DISABLE_X86_NEON \ -DXTENSA \ -DTF_LITE_MCU_DEBUG_LOG \ -DTF_LITE_USE_CTIME \ -DMAX_RFFT_PWR=9 \ -DMIN_RFFT_PWR=MAX_RFFT_PWR \ -DHIFI5 \ -DNNLIB_HIFI5 \ -DDMA=1

## 幻灯片 10

10
Developer note – NNE op resolver
If developers want to use NNE to accelerate Neural Network computations. The  op_resolver  ( MicroMutableOpResolver ) should  call  AddNneCustom ()  to enable the NNE op resolver.

## 幻灯片 11

11
Please refer to the sample code in the following paths to develop NNE applications
${ADSP_PATH}/HIFI5_SP/middleware/nne_model/sample/src/nne_sample_person_detect.cc
${ADSP_PATH}/HIFI5_SP/middleware/nne_model/sample/src/nne_sample_micro_speech_lstm.cc
Developer note – NNE sample code

## 幻灯片 12

12
These APIs are helper functions to run an NNE inference simply. They can be used not only in test functions but also applications. 
These APIs are defined in the  nne_test_helper.h
NNE test helper APIs
APIs
Description 
mtk_interpreter_init
The function is a helper function to create a  tflite :: MicroInterpreter
mtk_interpreter_release
The function is a helper function to destruct a  tflite :: MicroInterpreter
mtk_interpreter_invoke_test
The function is a helper function to call the  tflite :: MicroInterpreter ->Invoke()

## 幻灯片 13

13
NNE test helper APIs (1)
API
arguments
return
mtk_interpreter_init
char * network_name
void * interpreter
void * tensor_arena
size_t   tensor_arena_size
void * p_op_resolver
int  kNumResourceVariables
Return type: void *
Return: the address of interpreter (the same as the input argument  interpreter  )                NULL if initialization for the interpreter failed.

Description


Defined in  nne_test_helper.h
The function is a helper function to create a  tflite :: MicroInterpreter .
The function does not allocate memory. The arguments  interpreter ,  tensor_arena , and  p_op_resolver   should be allocated  through  Aurisys  ( arsi_query_wroking_buf_size ())  before calling this function. 
Moreover, the argument  p_op_resolver   should be added required  op_resolvers   before calling this function (please see this  page ).
If developer needs an interpreter other than a  tflite :: MicroInterpreter , this function is not applicable to the usage. Please follows the constructor of the desired Interpreter to create an instance.

API
arguments
return
mtk_interpreter_release
void *interpreter
Return type: void
Return: no return

Description  


Defined in  nne_test_helper.h
The function is a helper function to destruct a  tflite :: MicroInterpreter .
The function does not free the memory. It only call the destructor of  tflite :: MicroInterpreter , so  developers should free the memory space of interpreter after calling this function . 


## 幻灯片 14

14
NNE test helper APIs (2)
API
arguments
return
mtk_interpreter_invoke_test
char * network_name
void * p_interpreter
void * input_buf
size_t   input_buf_size
void * output_buf
size_t   output_buf_size
Return type: int
Return: the result of interpreter invoke test. This function will return the following values. 0: finish interpreter invoke -1: argument is NULL -2: arguments  input_buf_size  or  output_buf_size  are 0 -3: input  buf  size is smaller than the model input size       output  buf  size is smaller than the model output size -4: error encountered when processing interpreter->Invoke();

Description  


Defined in  nne_test_helper.h
The function is a helper function to call the  tflite :: MicroInterpreter ->Invoke().
The function does not allocate memory, so the arguments interpreter,  input_buf , and  output_buf  should be allocated a memory space first.
Moreover, the argument interpreter should be initialized first before calling this function. Developers can use  mtk_interpreter_init () to create a  tflite :: MicroInterpreter  for the test.


## 幻灯片 15

15
If developers want to further improve the performance of NNE inference, please used the  MTK NNE framework APIs  described in the next page to implement the interpreter initialization and invocation.
NNE test helper APIs (3)

## 幻灯片 16

16
The MTK NNE framework APIs are used to obtain necessary materials for the NNE infrastructure, such as model data and network context.
If the model is built in the ADSP image, there is a network name corresponding to the model. Developers can get the network info through the network name.
After obtaining the network info, developers can use it to create an TFLM interpreter, and call interpreter->invoke() to run NNE inference.
These APIs are defined in the  xa_network_api.h
MTK NNE framework APIs
APIs
Description 
mtk_network_info_get
The function is used to get the  network_info  prebuilt in  adsp  image.
mtk_network_get_model
The function is used to get the buffer of the model stored in the  network_info .
mtk_network_get_external_context
This function is used to get the address of TNNE external context.
is_nne_enabled
The function is used to check if NNE is initialized in the ADSP system.

## 幻灯片 17

17
API
arguments
return
mtk_network_info_get
char * network_name
Return type:  network_info_t  *
Return: address of the instance of  network_info_t  or NULL if no network is found for the given name.

Description  


Defined in  xa_network_api.h
The function is used to get the  network_info  prebuilt in  adsp  image.
The argument  network_name   is the ‘ name ’ entry defined  in the model config . About the model config, please see the  page .

API
arguments
Return
mtk_network_info_get
network_info_t *nw_info
Return type: unsigned char *
Return: the address of the model or NULL if no network is found for the given name.

Description  


Defined in  xa_network_api.h
The function is used to get the buffer of the model stored in the  network_info . 

MTK NNE framework APIs (1)

## 幻灯片 18

18
API
arguments
return
mtk_network_get_external_context

network_info_t *nw_info
Return type: Struct  XaTnneNetworkContext  *
Return: the address of the struct  XaTnneNetworkContext

Description  


Defined in  xa_network_api.h
This function is used to get the address of TNNE external context.

API
arguments
Return
is_nne_enabled
void (no argument)
Return type: bool
Return: true if NNE is enabled and initialized. Otherwise, return false.

Description  


Defined in  xa_network_api.h
The function is used to check if NNE is initialized in the ADSP system.

MTK NNE framework APIs (2)

## 幻灯片 19

19
The model configuration needs to be set according to the hardware specifications
xtensa_core  = ${PLATFORM}_b
If using DX-4, please set as mt6991_b
Read/ write_delay  = 560 cycles
Dram access worst latency: 700 ns
700 ns = 560 cycles in 800M
maxAxiBurstLen  = 256
xnnefreq  = 800
dspfreq  = 800
Model deployment - Model config

## 幻灯片 20

20
There are 2 ways to deploy models to ADSP. Use one of the following to add models:
Copy  all  models from the NNE SDK
Please note that the way  replaces   all the previous models . If developers want to add models without replacing old ones, please use the next way.
Add models manually
Ways to deploy models to ADSP

## 幻灯片 21

21
Steps
Place models into the NNE SDK
Run NNE SDK build
Copy the produced models from the NNE SDK
#1 Copy all models from the NNE SDK

## 幻灯片 22

22
Place the model (. tflite  file) in the following path
${NNE_SDK_PATH}/networks/ tflite /
Add the model to the  nw_list : 
File: ${NNE_SDK_PATH}/networks/ nw_in /nw_list.txt
Add model example
networkName  =  person_detect_int8 , priority =  0 , instances = 1


#1 Copy all models from the NNE SDK  Step1. Place models into the NNE SDK
The file name of the model excluding  . tflite   file extension
The priority of the model.
0 has the highest priority, multiple model can have same priority
Instances is optional.

## 幻灯片 23

23
Command
$ cd ${NNE_SDK_PATH}/build
$ ./nne110.sh -- test_app   tflm  --clean --core hifi5
The above commands would trigger NNE SDK build flow, and the corresponding NNE custom  tflite  files are placed in the following path
${NNE_SDK_PATH}/networks/ nw_out /${MODEL_NAME}_files/ ${MODEL_NAME}_ nne_custom.tflite
After finishing NNE SDK build flow, the NNE custom  tflite  files will be converted to C headers. Please check the following path.
${NNE_SDK_PATH}/test/ tflm /include /${MODEL_NAME}_ model_data.h

#1 Copy all models from the NNE SDK  Step2. Run NNE SDK build

## 幻灯片 24

24
Copy all the model headers ( Note 1 ) to the following path. The model headers are inside the path  $(NNE_SDK)/test/ tflm / inc
${ADSP_PATH}/HIFI5_SP/middleware/ nne_model /model/v1.4p2/ inc
Copy the  $(NNE_SDK)/test/ tflm / inc / xa_network_model_data.h   to the following path
${ADSP_PATH}/HIFI5_SP/middleware/ nne_model /model/v1.4p2/ inc
Copy  $(NNE_SDK)/test/tflm/src/xa_network_model_data.cc  to the following path and rename to  xa_network_model_data.c   ( Note 2 )
${ADSP_PATH}/HIFI5_SP/middleware/ nne_model /model/v1.4p2/ src
Rebuild ADSP image
Note
If there are multiple models defined in the nw_list.txt, the NNE SDK would generate a model header for each model. The model header name is suffixed with  _ model_data.h .
Please note that the  xa_network_model_data.cc  must be renamed to  C  file because the ADSP build script does not support  CC  file currently.
#1 Copy all models from the NNE SDK Step3. Copy the produced models from the NNE SDK

## 幻灯片 25

25
Steps
Place models into the NNE SDK (same as the 1 st  way)
Run NNE SDK build (same as the 1 st  way)
Modify the  xa_network_model_data.c /.h manually

The step 1 and 2 are the same for both the 1 st  and 2 nd  methods.
#2 Add models manually

## 幻灯片 26

26
Copy all the model headers to the following path. The model headers are inside the path  $(NNE_SDK)/test/ tflm / inc
${ADSP_PATH}/HIFI5_SP/middleware/ nne_model /model/v1.4p2/ inc
modify
${ADSP_PATH}/HIFI5_SP/middleware/ nne_model /model/v1.4p2/ inc / xa_network_model_data.h
“#define NETWORKS_COUNT 2” ,   Please modify the number following NETWORKS_COUNT to the desired number of models to be run on the ADSP.
${ADSP_PATH}/HIFI5_SP/middleware/ nne_model /model/v1.4p2/ src / xa_network_model_data.c
Include “${MODEL_NAME}_ model_data.h ”
xa_nw_models  adds ${MODEL_NAME}_ nne_custom_tflite
xa_nw_priorities  adds priorities for models (0 has the largest priority)
xa_nw_name  adds  model names

#2 Add models manually Step3. Modify the  xa_network_model_data.c /.h manually

## 幻灯片 27





27
Here is a sample adding 2 models  new_test_network1  and  new_test_network2 .
#2 Add models manually Step3. Modify the  xa_network_model_data.c /.h manually example
The model number you want to
run on  adsp . In this sample, the
Number is  4
Add the model headers 
created by NNE SDK
Add the binary data of models
to  xa_nw_models
Define the priority of models
to  xa_nw_priorities . 0 has the largest priority.
Add the name of models
to  xa_nw_name .
The name of model is the 
same as the name attribute
written in the model’s  cfg  file
xa_network_model_data.h
xa_network_model_data.c

## 幻灯片 28

28
NNE sample is a small framework to test models with NNE. To use NNE sample, developers should create and register a  nne_sample_handler  for their model. Here is the steps to test the models.
Create a  nne_sample_handler , the members are shown in the following table. Implement the  init ,  start , and  deinit  callbacks of the NNE sample code
Developers can leverage the NNE test helper APIs to implement the start callback, please see the next page for example.
Register the  nne_sample_handler  
Modify the file: ${ADSP_PATH}/middleware/ nne_model /sample/ src / nne_sample_registration.c
use  register_sample_handler (struct  nne_sample_handler  *) to register the  nne  sample handler
For example:  register_sample_handler (& sample_handler_pd );
Build  libmtnne_sample.a
Rebuilt ADSP image
NNE sample
Member 
Type 
Descrption  
nw_name
char *
Model name
init
void (*)(void)
a callback to initialize the NNE sample code
start
void (*)(void)
a callback to start the NNE sample code, this is the major part to run the NNE inference
deinit
void (*)(void)
a callback to  deinitialize  the NNE sample code

## 幻灯片 29

29
Please see the sample code in the following path
${ADSP_PATH}/middleware/nne_model/sample/src/nne_sample_person_detect.cc
The start callback can be simply implemented by the NNE test helper functions (please see the  page  for detail)
NNE sample (1) - Create a  nne_sample_handler

## 幻灯片 30

30
Modify the following file to register the  nne  sample handler
 ${ADSP_PATH}/middleware/ nne_model /sample/ src / nne_sample_registration.c
NNE sample (2) - Register the  nne_sample_handler

## 幻灯片 31

31
NNE sample (3) - Build  libmtnne_sample.a
Build
command: 
make -f makefile_nne_sample.mk all  ADSP_PROJECT= mtXXXX XTENSA_TOOLS_VERSION=RI-2023.11-linux TFLM_BASE=${LOCAL_TFLM_PATH} 
Example (DX-4): make -f makefile_nne_sample.mk all ADSP_PROJECT=mt6991 XTENSA_TOOLS_VERSION=RI-2023.11-linux TFLM_BASE=../v1_4_2/ dsp / tflm / tflite -micro 
Path: ${ADSP_PATH}/middleware/ nne_model /sample
Output lib:  ${ADSP_PATH}/middleware/ nne_model /sample/ libmtnne_sample.a

## 幻灯片 32

32
After registering the  nne  sample handler, developers can test models with the following APIs
NNE sample – Test 
API
arguments
return
run_all_nne_sample
void (no argument)
Return type: void
Return: no return

Description  


Defined in  nne_sample.h
This API runs all the registered  nne_sample_handlers .

API
arguments
Return
run_nne_sample
char * nw_name
Return type: void
Return: no return

Description  


Defined in  nne_sample.h
This API runs specific  nne_sample_handlers  that have the same  nw_name  as the argument  nw_name   (the  nw_ name   is the same as the name defined in the model config) .


## 幻灯片 33

33
Take Person Detect INT8 model as example:
Memory usage
item
description

Memory (Byte)
Memory (MB)
1
NNE Driver
Fix size
410624
0.3916 MB
2
Model (person_detect_int8 _nne_custom .tflite)
Size depends on the model
357344 
(person_detect_int8.tflite size: 300568)
0.3407 MB
3
Tensor arena
(TensorFlow Lite Micro 的 working buffer)
Size depends on the model

406528
0.3876 MB

Total

1174496
1.12 MB

## 幻灯片 34

34
How long does the initialization take?
The model initialization will be completed during ADSP boot time, and retrieving the initialized models using the MTK APIs will not take much time.
Does the model need to allocate another memory block to store?
TFLite  model is built in the ADSP   image, so developers do not need to allocate memory for models
How to check if the NNE is active ？
If the following 2 lines are shown in the ADSP log, that means the NNE is active.       [ wake_lock_FromISR ] lock by  nne  /  [ wake_unlock_FromISR ] unlock by  nne
Q&A   (1)

## 幻灯片 35

35
In the sample code, the initialization is done by obtaining the model through its name. How is this name configured?
The model name needs to match the 'name' field in the model's  cfg  file. For example, for the model 'person_detect_int8', its model name can be found in the 'name' field within the file networks/ nw_in /configs/person_detect_int8.cfg.
Q&A   (2)

## 幻灯片 36

36
The NNE simulation experiment has a slow inference speed, taking 14 minutes for a single sample.
The cache setting in HWCFG HiFi5_NNE_2023_11 bypasses the address range from 0x4000_0000 to 0x6000_0000, so the NNE simulation is run without caching and gets a worse performance.
The solution is to add the following settings to FDFLAGS in ${NNE_SDK}/test/ tflm / makefile_network_test , which will set 0x4000_0000 to 0x6000_0000 as cacheable.
- Wl ,-- defsym =_ memmap_cacheattr_reset =0x41111 1 40
NNE   simulation runs slowly

## 幻灯片 37

37
ADSP encounters exception when copies data to input tensor.
This may be caused by missing C flags. Please check if the C flags in this  page  are defined in the library build script.
Alternatively, developers can print the size of tensor using the following code
printf ("%s  sizeof ( TfLiteTensor ):%d\n", __ func __,  sizeof ( TfLiteTensor ));
The correct size of  TfLiteTensor  is 40 bytes, If the size shown is 60 bytes, it means the C flags are not correctly added in the build script.
ADSP exception when copy data to tensor

## 幻灯片 38

38
Build Error: header not found
The TFLM headers can not be found.
Please refer to ${NNE_SDK_PATH}/test/ tflm / makefile_network_test  to include the TensorFlow headers in the build script. Add the following snippet and include $(INCLUDES) in the build command.
Note:  TFLM_BASE  is the local TFLM path, which, in the case of the NNE SDK, will point to the path ${NNE_SDK_PATH}/ dsp / tflm / tflite -micro.

## 幻灯片 39

39
Encountered linker error while building HIFI5_SP
Error message:   error   adding   symbols: file in wrong format.
If look at the generated .o files, you will find that they are not normal binaries but LLVM IR  bitcode .
Root cause: The reason is that the build script includes " - flto " in CFLAGS, which is a flag for linker to perform image optimization. Therefore, the compiled .o files will be in LLVM IR (Intermediate Representation).
Solution: remove the "- flto " flag in the library build script.
Link error with – flto  flag



## 幻灯片 40

Thank  you


---
# SRC0318 Aurisys_Capability_X20.docx

来源：DOC\X20\Aurisys_Capability_X20.docx

SHA-256：24275a1baa669b1bd611710ca899e4314742349764dce6e4ade71c441324af28

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0318.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 正文（不对应打印页码） 1















Aurisys  Features and Capability  Helio X20
Aurisys  Features and Capability 
Helio X20













Version: 0. 9
Release date: 2015-12-08

©  2014  -  2016   MediaTek Inc.
This document contains information that is proprietary to MediaTek Inc.
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.

Specifications are subject to change without notice.


Document  Revision History

Revision
Date
Author
Description
0.9
2015/12/8
Doug Wang
Initial Draft
1.0
2016/2/22
Doug Wang
Revise Feature support table






















Table of Contents
Document Revision History 2
Table of Contents 3
1 Aurisys Capability 4
1.1 Overview 4
1.2 DSP Capability 4
1.2.1 DSP Basics 4
1.2.2 DSP Feature Packages 4
1.3 Hardware Capability 5
1.4 Aurisys Features in X20 7
2 Aurisys Features 8
2.1 Voice Call 8
2.2 Recording 9


Lists of Tables and Figures

No table of figures entries found.
Figure 1 1. Possible DSP Software Packages of MTK Built-in Features 5
Figure 1 2. Aurisys Features in X20 7
Figure 2 1. Voice Call Data Path 8

Aurisys   Capability
Overview
    In this document, we provide the specification of Aurisys in X20  to assist with the user ’ s understanding of developing audio features by Aurisys .  In addition to the  DSP  specifications , we also provide notable information   on  each feature .
DSP Capability
DSP Basics
The  basic information   about  DSP  is  summarized as follows:
Integrated open DSP support.  The  embedded processor is  ARM Cortex™-M4  processor  
Floating-Point-Unit supported
The internal SRAM of DSP is 512 KB
Maximum clock rate reaches 354 MHz
No cache  support
Programmable DMA (burst of 4 by 16-bit) for DSP supported to transfer data to/from external memory
Not suggest to access external memory by the processor directly, it may cause unexpected problems. Please use DMA for large quantity of data transfer and just use IPI (inter-processor-interrupt) for the  transfers of small data volumes.
The DSP can access audio registers, internal memory of audio hardware, and voice data from  the  modem side during  a  voice call.
We ’ ve provided an API to trigger DMA, please use polling mode, not to use interrupt mode in X20
FreeRTOS has been adopted as the supported operating
Communicate  with Application processor by  IPI (inter-processor-interrupt); There are 48 bytes data can be transferred by share memory by one IPI.
Dynamic loading of code  is not supported
Clock rate can be switched between 110/224/354 MHz according to requirements of applications  
DSP  Feature Packages
  S ince we don ’ t support  cache or dynamic loading of code, the fe ature sets supported in DSP may be  limited.  In X20, we provide the following built-in features: sensor hub  (in X20, we use single DSP for both sensor hub and audio features) , MP3 decoder, sampling rate converter, and sound trigger. Besides, the sound enhancement for voice calls  is driver ready and properly maintained . Customers can add sound enhancement library of 3 rd  party easily.  
  However, the customer  should select what they really want in CortexM4 since the memory size is no t  enough  for all features. For example, t he sensor feature and MP3  decoder  have an application processor version. Thus, if the  customer  wants to add a vendor’s algorithm for voice call, they can select the application processor version of sensor/MP3 to release  the  memory of  the  DSP.   B esides, even the 3 rd  party voice call enhancement is not adopted, we still have a MTK built-in version in modem side.
  The following table shows possible feature packages of the DSP: 

Figure  1 1 .  Possible DSP Software Packages of MTK Built-in Features

Hardware Capability
MT6797 (X20)
Mediatek Proprietary audio interface connect to PMIC MT6351
Audio Playback with MTK PMIC – MT6351
Support 8k, 11.025k, 12k, 16k, 22.05k, 24k, 32k, 44.1k, 48k, 96kHz sample rate 
Audio Recording with MTK PMIC – MT6351
Support 8k, 16k, 32k, 48k, 96kHz sample rate
Internal high resolution , high flexible HW gain in AFE interconnection…………………..(1)
3 set Inter IC sound interface (I 2 S)
Master Output *2…………………………………………………………………………………………(2)(5)
Master Input * 1 ………………………………………………………………………………………….(3)
Master/Slave input(with SRC) ……………………………………………………………………..(4)
Master Mode supports 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48, 88, 96, 176, and 192KHz sampling rate 
Slave Mode supports 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48KHz sampling rate 
16/32 bit bus width support
Philip standard and Left just
Master Output with 8ch TDM *1 …………….…………………………………………………..(11)
2 set Pulse coded modulation interface(PCM)
Slave PCM for internal Modem*1………………………………………………………………..(6)
Master/Slave PCM interface for external modem * 1……………………………….…(7)
1 set PCM/I2S merged interface (BTPCM + FM RX/TX I2S)..……………………………….…(8)
4-pin interface for concurrently supporting I2S and PCM 
PCM supports 8k/16k Hz sampling rate 
I2S supports 32, 44.1, and 48 kHz sampling rate 
BT CVSD-Removal non-RF HW in AP-side………………………...……………………………….…(9)
16/24bit stereo data format support 
Audio codecs
MP3, AAC, AAC+, AMR-NB, AMR-WB, OGG, WAV, APE
Audio Post-Processing
BesLoudness
BesSurround
ACF/HCF
3 rd  support (need contact with 3 rd  by customer)
Dolby mobile
SRS Wow
Low power audio in MP3 playback, FM playback, FM record.
Integrated Cortex-M4 DSP, open for development………………….………………………..(10)
MT6351
Mediatek proprietary audio interface connect to MT6755
RX processing feature
4 analog output; earpiece, left and right headphone, lineout
Stereo DAC
Differential earpiece driver up to 50mW in 32ohm, 88mW in 16ohm
Differential SPK amplifier up to 700mW in 8ohm 3.7V  VBAT
Stereo single-ended headphone driver up to 11.25mA in 32ohm
Adjustable earpiece, headphone and SPK Amp gain setting
Sample rate of 8K,16K,44.1K,48K
Best 109dB SNR in headphone output
Best -95dB THD
TX processing feature
SPK Amp integrated with 5V boost

Aurisys  Features in X20
  The following features are  supported in X20 Aurisys. Note that the word  “ supported ”  means it would be driver-ready. Other features can also be implemented by utility functions, such as Proximity.

Figure  1 2 .  Aurisys Features in X20

    
Aurisys   Features
  We  won ’ t introduce Aurisys features further detail here. We  just  focus on  available resource and notable information to implement the feature.
   Voice Call

Figure  2 1 .  Voice Call Data Path
The voice codec is processed in modem side. We only apply voice enhancement in open DSP. Notable information is listed as follows:
We support NB/WB.
20ms per frame and DL/UL  separated . Modem side interrupts open DSP every  20ms to notify open DSP to receive voice UL data. For voice DL data, the interrupt period is also 20ms, and there is a shift between UL data.

To avoid increasing round trip delay, UL enhancement should be processed no more than 1 0 ms and DL enhancement should be processed no more than 3ms. If the library can ’ t meet the requirement, we need to delay 1 frame to process the data.  T here would be 20ms increment in the round trip delay (because of 20ms per frame) .


Available MCPS
Latency
DL Enhancement
53
No delay
UL Enhancement
177
No delay
DL+UL Enhancement
354
20ms delay  increment

The group delay (processing buffer delay) of the library is  suggested to not more than 40ms.
Dual mic supported in X20
   Recording
   Audio Recording with MTK PMIC – MT6351
Support 8k, 16k, 32k, 48k, 96kHz sample rate
   Currently, we only support recording enhancement in  the A pplication  P rocessor. This is because the power savings in DSP won ’ t be   significant  unless the encoder and storage driver  are  also implemented in DSP.
  This is on-going and the patch would be released later


---
# SRC0319 Brief_FAQ_X20_OpenDSPv1.1.pptx

来源：DOC\X20\Brief_FAQ_X20_OpenDSPv1.1.pptx

SHA-256：a2e18c8514befa9c27dded2d81c46d9c027b4efe3ccd4dce0882cb90fa623412

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0319.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1

X20 DSP FAQ Cortex-M4 Processor  as open DSP v1.1


## 幻灯片 2

System Information


## 幻灯片 3

Platform and Development Environment
Internal Memory
512 KB SRAM, access with zero wait state
No separate for PMEM/DMEM
Tool Chain
gcc-arm-none-eabi-4_8-2014q3
Operating System
FreeRTOS
Clock Rate
Maximum clock rate reaches 354 MHz
Compile Option / MTK Built-in Features
We have sensor hub/sound trigger/MP3 decoder in DSP which can be disabled in compile time by compile options to release more memory for vendor’s usage
Other Features
We don’t provide cache or dynamic switch binaries for DSP, there is only 512 KB for all features
We have Floating Point Units (FPU)

Getting Start

## 幻灯片 4

DVFS
Clock Rate Selection
We have three DSP clock rate, if your application can be run at 110MHz, there is large power savings for the whole system
We don’t have automatic DVFS to detect current DSP loading and adjust the voltage automatically
What we do is to register a frequency requirement of the specified application. When the application starts, a provided API should be called to notify the system. Besides, it also needs to call another API to notify the system when it is stopped. The system will adjust the voltage according current applications.
Clock Rate
Low Power Mode
110 MHz
Ultra Low Power

Always-on features
0.8V
Normal Mode
Turbo Mode
224 MHz
354 MHz
Normal applications
High Sampling Rate applications

High Complexity algorithm
0.9 V
1.0 V

## 幻灯片 5

MTK Built-in Features Resource Requirement
Internal Memory
Sensor Hub – around 324KB (RO 172KB, RW 112KB) 
Sound Trigger – 142KB  (RO 30KB, RW 112KB)
MP3 + SRC – 130KB (RO 65KB, RW 65KB)
Operating System – 30KB
Principle
Tradeoff
OEM should select what they really want in CortexM4 since the memory size  is  not  enough
The sensor feature and MP3 have an application processor version. Thus, if the OEM wants to add a vendor’s algorithm for voice call, they can select the application processor version of sensor/MP3 to release memory of the DSP.
The DSP codebase is source release. The OEM/vendor can compile by themselves
Future Plan
We plan to development dynamic swap in the future. For example, when a voice call comes, we don’t need sound trigger in this scenario, we can swap out the sound trigger and swap in algorithms of voice call.
 Sensor features should be divided into small pieces so that the OEM can pick what they really want
Compromise  with limited resources

## 幻灯片 6

Debug Facilities
ICE
Debug tools such as Trace32 or  Codeviser  debugger is allowed
Trace
DSP system trace
The DSP traces can be logged through UART
The DSP traces can also be collected as a file stored in the device storage 
Vendor IP
We provide an API for the developer to check the correctness  of their program by logging. The API is consistent and can be used in different systems. The provided API would call the function pointer passed in the initialization. The called function is responsible for logging the required statements by calling the system-specific logging API. It can also be disabled easily by bypassing the requirements. It’s helpful for the developer which doesn’t need to remove and insert logging code anymore.
Development  Debug Facilities

## 幻灯片 7

Feature Packages  w/o dynamic loading for DSP
Possible  Packages of  MTK  Built-in Features in Open DSP





 
MP3 + SRC
Voice Call Enhancement 
(3 rd  Party Solution)
Voice Call Enhancement 
(MTK Built-In)
Sound  Trigger
Sensor  Feature
Feature Package A
Open DSP
No t Support
Modem Side
Not Support
AP
Feature Package  B
AP
Open DSP
No t Support
No t Support
AP
Feature  Package C
AP
No t Support
Modem Side
Open DSP
AP
Feature Package D
AP
No t Support
Modem Side
No t Support
Open DSP
Feature Package E
Open DSP
Open DSP
No t Support
No t Support
AP
Feature Package F
Open DSP
No t Support
Modem Side
Open DSP
AP
Feature  Package G
AP
Open DSP
No t Support
Open DSP
AP
Feature Package H
AP
No t Support
Modem Side
Open DSP
Open DSP
AP VS DSP    Power consumptions
Open DSP VS MTK Inside Modem   quality

## 幻灯片 8

Audio Development


## 幻灯片 9

Communications
Application Processor
The communication between AP and DSP is by an interrupt. There is  a shared  memory can be passed along with the interrupt. The size can be used is 48 bytes. 
If we need to transmit a quantity of data, we can just transmit the data address through the interrupt and start to move the data by a DMA HW.
Modem
The DSP can access voice data to/from modem side. The vendors don’t need to take care with the communications between modem. 
Audio Routing
HW path setting
The HW path and audio routing settings are done by application processor
Current input/output device, gain setting, and other required information will be transferred to the vendor IP (vendor IP should follow our API)
Development  Audio Routing / Inter-processor-communications

## 幻灯片 10

Spec
Sample Rage
In X20, we only have  NB or WB.
No matter it’s NB or WB, we’ll send WB data to the vendor IP
Frame period
20ms per frame 
Round Trip Delay
MTK already has 140ms delay
Process time
RX task needs to be processed less than 3ms per frame
TX task needs to be processed less than 12ms per frame
Otherwise, we’ll need to delay one more frame, the delay will become 160ms (not include IP group delay)
Standard Interface
Interface for sound enhancement
We’ve defined generic interfaces for processing sounds which is portable to MTK platforms
Development  Voice Call

## 幻灯片 11

Parameter Management  Function Block

## 幻灯片 12

Parameter Management  Description
ARSI-PAR
Overview
ARSI-PAR defines API for parsing parameters. It provides programming interface to parse and transmit parameters between PC tool, APMCU, and DSP. Tuning and applying parameters by scenarios can also be achieved.
Usage
For a software IP, the parameters may be differ in different scenarios or situations. To ease of reference, The parameters are gathered into a file. To get the maximum flexibility of use, the format of the parameter file is defined by the 3rd Parties themselves. The ARSI-PAR is designed for parsing parameters for specified scenarios. It provides  the interface to transfer parameter file to the 3rd party library.
During parameters tuning, the PC tool updates the parameter file to the mobile device and then the parameter files are parsed by the 3rd party parameter parsing library to get required parameters. The parameters will then be transferred to the 3rd party processing library for processing sounds. Besides, when the mode changes (for example, the output device changes from headphone to speaker), we need to extract the parameters of the specified mode and the parsing library will be called.

## 幻灯片 13


Parameter Management  Tool Development
Tool Development
Overview
The connection between the PC tool and the mobile device is through USB and the communication is based on  adb  commands. We define a series of  adb  commands which include transmitting the whole parameter file to the device, receiving whole parameter file from the device, transmitting specific data to the device, and receiving specific data from the device.  The software IP providers can design their own PC tools which can communicate with the mobile devices without making changes to the legacy code of the MTK platforms
ADB Command Block



Argument Table
Command
Comments
adb  shell " AudioSetParam   AURISYS_SET_PARAM,$target,$scene,$lib,$cmd  $mode = SET ”
Used to update parameter file and apply parameters to the library
adb shell “AudioSetParam AURISYS_GET_PARAM,$target,$scene,$lib,$cmd”
Used to query current parameter setting. Query the value of a specified address and query the whole parameter file are allowed.
Argument
Example
Comments
$target
DSP, HAL
The processing API maybe either in AP or in DSP
$scene
PHONE_CALL, PLAYBACK, RECORD
Specify a scenario, the information will be used as an argument of the parser function
$lib
library name
The library should be specified since there maybe several libraries added to the Aurisys
$mode
Enhancement mode
Enhancement mode. IP provider can provide different enhancement for user to select what they want. The mode should be an integer. Only used in APPLY_PARAM command
$cmd 
( for  URISYS_SET_PARAM)
PARAM_FILE, param_path
set parameter file path

APPLY_PARAM
apply new param during playback/phone call/...

ADDR_VALUE, addr,value
set “ value ”  at the “ addr ”  in library

KEY_VALUE, key,value
set " value " of the " key " in library, “ key ” can be defined by the library itself
$cmd 
( for  URISYS_GET_PARAM)
PARAM_FILE
return param_path

ADDR_VALUE, addr
return the value at the address “ addr ” in library

KEY _VALUE, key
return the value at the “ key ” in library

## 幻灯片 14

Parameter Management  Tool Development cont’d
Example
adb  shell " AudioSetParam   AURISYS_SET_PARAM,DSP,RECORD,MyLib,PARAM_FILE ,/data/d.dat=SET“
set parameter file path: /data/d.dat and establish the connection between  MyLib  and the parameter file
adb shell "AudioSetParam AURISYS_SET_PARAM,DSP,PHONE_CALL,MyLib,APPLY_PARAM,2=SET“
apply new parameters for record scenario, the enhancement mode is 2
adb shell "AudioSetParam AURISYS_SET_PARAM,DSP,RECORD,MyLib,ADDR_VALUE,0x1234,0x5678=SET" 
set value 0x5678 at the address 0x1234 in  MyLib
adb shell "AudioSetParam AURISYS_SET_PARAM,DSP,RECORD,MyLib,KEY_VALUE,MyKey,MyVauel=SET“
set value " MyValue " to the key " MyKey " in  MyLib
adb shell "AudioSetParam AURISYS_GET_PARAM,DSP,PHONE_CALL,MyLib,PARAM_FILE“
return  param_path  of  MyLib
adb shell "AudioSetParam AURISYS_GET_PARAM,DSP,PHONE_CALL,MyLi,ADDR_VALUE,0x1234“
return the value at the address 0x1234 in  Mylib
adb shell "AudioSetParam AURISYS_GET_PARAM,DSP,PHONE_CALL,MyLib,KEY_VALUE,MyKey“
return the value of the key " MyKey " in  Mylib

## 幻灯片 15

END



---
# SRC0320 CS6797-XXX-UMD-V1.0EN_Aurisys_Development_Tutorial.docx

来源：DOC\X20\CS6797-XXX-UMD-V1.0EN_Aurisys_Development_Tutorial.docx

SHA-256：edc44c18cc58da22507862ca2a72c63243bc805dd1175cfe07ef3c215206c207

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0320.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 正文（不对应打印页码） 1










Aurisys Development Tutorial
User Manual
Customer  Support
MT6797



C S 6 797 - XXX - UMD - V1. 0 EN
V1. 0
2016-0 8 - 2 9
Internal
Doc No:
Version:
Release date:
Classification:


©  2016   MediaTek Inc.
This document contains information that is proprietary to MediaTek Inc.
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.

Specifications are subject to change without notice.



Keywords
User Manual


MediaTek Inc.
Postal address
No. 1, Dusing 1st Rd. , Hsinchu Science Park, Hsinchu City, Taiwan 30078
MTK  support office address
No. 1, Dusing 1st Rd. , Hsinchu Science Park, Hsinchu City, Taiwan 30078
Internet
http://www. mediatek.com/










Document  Revision History
Revision
Date
Author
Description
V0.8
2015/12/31
Doug Wang
First Release
V 0.9
2016/1/21
Doug Wang
Add code release partand modify dsp build command
V0.9a
2016/3/28
Doug Wang
Add Software patch table
V 1.0
2016/08/09
Doug Wang
Add Library integration guidance in Application Processor; Record & VOIP Applications; XML Descriptor














Table of Contents
Document Revision History 3
Table of Contents 4
Lists of Tables 7
Lists of Figures 8
1 Overview 9
1.1 Abstract 9
1.2 Aurisys Aims 9
1.3 Aurisys Structure 10
1.4 DSP Capability 11
1.4.1 DSP Basics 11
1.4.2 DSP Feature Packages 11
2 Getting Start with Aurisys 13
2.1 Comments 13
2.2 File Structure 13
2.2.1 DSP 13
2.2.2 Application Processor 14
2.3 Step by Step Integration Guide 14
2.3.1 Integrate Software IP in DSP 14
2.3.2 Integrate Software IP in Application Processor 17
3 Software Development Guidance 20
3.1 Software Interface Overview 20
3.2 Sound Processing Task Integration Guidance 20
3.2.1 ARSI-PROC 20
3.2.2 ARSI-PROC Functions 20
3.2.3 Example 22
3.3 Parameter Tuning Guidance 23
3.3.1 ARSI-PAR Usage 23
3.3.2 Communication based on Android Debug Bridge(adb) 24
3.3.3 ARSI-PAR Functions 25
3.3.4 Example 26
4 XML Descriptor for Aurisys 28
4.1.1 Example 28
4.1.2 Elements 29
4.1.3 Deployment 33
5 Debugging 34
5.1 Logging 34
5.1.1 Inside Software IP 34
6 Applications 35
6.1 Voice Call 35
6.1.1 Data Path 35
6.1.2 Basic Information 36
6.1.3 Limitations 37
6.1.4 Configurations 37
6.1.5 Software Frameworks 38
6.2 Playback 39
6.2.1 Data Path 39
6.2.2 Configurations 40
6.2.3 Behavior 40
6.2.4 Functional Blocks 40
6.3 Sound Trigger 41
6.4 SmartPA 41
6.5 Record & VOIP 42
6.5.1 Data Path 42
6.5.2 Configurations 42
6.5.3 Application Processor Only 43
6.5.4 Class Diagram 43
6.5.5 Device Information 43
7 Appendix: Platform and Development Environments 46
7.1 Scenario Based DVFS 46
7.1.1 Implementation 46
7.2 DSP Binary (Build Command and Download) 47
7.2.1 Configuration 47
7.2.2 Build Command 48
7.2.3 Built Binary 48
7.3 Code Release 49
7.4 Aurisys Framework Class Diagram 50
7.5 Software Patch Note 50
7.6 FAQ 51


Lists of Tables
Table 3 1. Adb command table 24
Table 3 2.Command argument table 24


Lists of Figures
Figure 1 1. Concept of Aurisys 9
Figure 1 2. Aurisys Structure 10
Figure 1 3. Possible DSP Software Packages of MTK Built-in Features 12
Figure 3 1. Parameter Path 23
Figure 4 1. Relationship between Scene Handler, Scenario Descriptor, and Library Descriptor 33
Figure 6 1. Hand-Held Mode Voice Call Data Path 35
Figure 6 2. Hand-Free Mode Voice Call Data Path 36
Figure 6 3. Software Frameworks of Voice Call 38
Figure 6 4. Offload Audio Playback 39
Figure 6 5. Functional Blocks of Offload Playback 41
Figure 6 6. Record & VOIP 42
Figure 6 7. Aurisys Class Diagram for Record & VOIP 43
Figure 7 1. MT6797 DSP Dynamic Voltage Table 46
Figure 7 2. Update DSP Binary by Flashtool 49
Figure 7 3. Aurisys Framework Class Diagram 50




Overview
Abstract
   The requirement for sound quality enhancements that add listening pleasure has been increasing. To enrich the listening experience of using mobile devices, there is an increasing number of sound processing solutions provided by vendors.  
   Aurisys is introduced to facilitate the sound processing solution development and use of MTK platforms. Aurisys is a framework constructed upon Android Audio Framework. It includes standardized interfaces for sound processing and tuning, integrated DSP sound subsystem, and software debug interface.  This concept of Aurisys  will be  briefly described in this document.
Aurisys Aims
     As the following figure depicts, our target  is to make the replacement/integration of vendor IPs  as convenient as possible . We defined a standardized interface to which is platform-independent, so that the software can be re-used.  By following the user interface standards we crea te a more consistent experience  for the developers.  

Figure  1 1 .  Concept of Aurisys

Aurisys Structure
 
Figure  1 2 .  Aurisys Structure
  As depicted in above figure, the Aurisys structure contains Scene Handler, Library Manager,  integrated DSP  framework, Modem/Audio HW subsystems, and  standardized  software interfaces:
Aurisys Scene Handler (ARSH)
The Aurisys  Scene Handler  is created as the middleware between the audio system and the sound processing IPs.  It  is created scene by scene. For example, the Aurisys Playback Handler is served for playback effects in the scene of  playback .  It provides interfaces to call the corresponding IPs  and manages the IPs.
Aurisys  Library Manager  (ARLM)
The Aurisys Library Manager maintains the  library  information of  each Aurisys  Scene Handler. It contains the list and status of sound IPs.
Aurisys Software Interface ( ARSI )
ARSI is the a bbreviation  of Aurisys Software Interface. It  is provided for interfacing with sound enhancing tasks . To process sounds, a unified interface which is portable between MTK  platforms  is provided. The interface to parse and transmit parameters between PC tool, APMCU, and DSP is also included.  The interface is designed for ease of use while being general enough so that new algorithms can be easily added to the existing frameworks. The difference between ARSI and ARSH is that ARSI provides interface between ARSH and sound IPs; while ARSH provides interface for Android Audio HAL to request for processing sounds. 
Modem
The modem means the modem IC. The MTK internal chipset contains a DSP to process voice enhancement and voice codec. In Aurisys structure, we disable the voice enhancement, but reserve codec in modem IC so that we can just add algorithms in the integrated open DSP in the Application side.
Audio HW
It refers to the interface between processors and HW devices to transfer sound data. The devices  include speakers , microphones, earphones, BT devices, USB devices,  etc. 
DSP Capability
DSP Basics
The basic information about DSP is summarized as follows:
Integrated open DSP support.  The  embedded processor is  ARM Cortex™-M4  processor  
Floating-Point-Unit supported
The internal SRAM of DSP is 512 KB
Maximum clock rate reaches 354 MHz
No cache support
Programmable DMA (burst of 4 by 16-bit) for DSP supported to transfer data to/from external memory
Not suggest to access external memory by the processor directly, it may cause unexpected problems. Please use DMA for large quantity of data transfer and just use IPI (inter-processor-interrupt) for the  transfers of small data volumes.
The DSP can access audio registers, internal memory of audio hardware, and voice data from the modem side during a voice call.
We ’ ve provided an API to trigger DMA, please use polling mode, not to use interrupt mode in  MT6797
FreeRTOS has been adopted as the supported operating
Communicate with Application processor by IPI (inter-processor-interrupt); There are 48 bytes data can be transferred by share memory by one IPI.
Dynamic loading of code is not supported
Clock rate can be switched between 110/224/354 MHz according to requirements of applications 
DSP Feature Packages
  Since we don ’ t support cache or dynamic loading of code, the feature sets supported in DSP may be limited. In  MT6797 , we provide the following built-in features: sensor hub (in  MT6797 , we use single DSP for both sensor hub and audio features), MP3 decoder, sampling rate converter, and sound trigger. Besides, the sound  enhancement for voice calls  is driver ready and properly maintained . Customers can add sound enhancement library of 3 rd  party easily. 
  However, the customer  should select what they really want in CortexM4 since the memory size is no t  enough  for all features. For example, t he sensor feature and MP3  decoder  have an application processor version. Thus, if the  customer  wants to add a vendor’s algorithm for voice call, they can select the application processor version of sensor/MP3 to release  the  memory of  the  DSP.   B esides, even the 3 rd  party voice call enhancement is not adopted, we still have a MTK built-in version in modem side.
  The following table shows possible feature packages of the DSP: 

Figure  1 3 .  Possible DSP Software Packages of MTK Built-in Features

Getting Start with Aurisys
Comments
  We  annotate  our code with  Doxygen style comments  which  are used to provide documentation in-line .  Before each function , we  put a comment block giving at  least :
@brief:  a brief description
@param:  descri be all of the parameters to  the  function
@return: return value
After the return information, there is a  detailed description of the function (optional).
Example: 
/**
******************************************************************************
 *  @brief Query the size of the working buffer
 *
 *  @param p_arsi_task_config the task configure
 *  @param p_working_buf_size the working buffer size.
 *
 *  @return lib_status_t
******************************************************************************
 */
  T h is  function is used to get the working buffer size  for a Software IP. p_arsi_task_config contains a particular  configuration for the algorithm; p_working_buf_size updated by the Software IP indicates the required memory size under the specified configuration. The return information indicates if there is any unexpected error occurs.
File Structure
DSP
   The root folder of DSP is located at  vendor/mediatek/proprietary/tinysys/freertos/source .
Path
File
D escription
project / CM4_A / mt6797 / platform
platform.mk
Project configurations (common)
p roject / CM4_A / mt6 797 /[project]
ProjectConfig.mk
Project configurations (specific project)

CompilerOption.mk
Project specific compile options
m iddleware / lib / aurisys
arsi_api.c  /  arsi_api. h
Aurisys Software Interface
drivers/CM4_A/mt6797/audio/src
audio_task_phone_call.c
Aurisys phone call driver

audio_task_factory.c
Audio task service

audio_messenger_ipi.c
I nterrupt handler to handle message from AP

audio_irq.c
Interrupt handler of audio hw irq

audio.c
Audio init/de-init entry functions
Application Processor
Path
File
description
d evice / mediatek /[project]
ProjectConfig.mk
Project configurations of AP
/device/mediatek/ [project] /aurisys_param
*.dat
Parameter file
/vendor/mediatek/proprietary/external/aurisys
*.so, *.xml
Parser library and Processing library (if in Application processor); XML Descriptor file
vendor/mediatek/proprietary/hardware/audio / common/V3
AudioAurisysCommon.cpp /  AudioAurisysConfigParser.cpp /  AudioAurisysLibManager.cpp /
Aurisys services

AudioAurisysXXXHandler.cpp
Aurisys scene handler
Step by Step Integration Guide
  Before looking deep into Aurisys,  we provide step-by-step guidance on how to  integrate your program into Aurisys. It can be  separated  into two conditions: 1) Add or replace a SWIP in DSP; 2) Add or replace a SWIP in Application processor. We ’ ll take the integration of a voice call SWIP as an example of adding a SWIP in DSP. Note that the addition or replacement of a SWIP is based on an existing driver-ready scene of Aurisys. 
Integrate Software IP in DSP
Integration of a Voice Call SWIP (as example)
  Configurations
DSP Configurations 
Common Configurations
The platform Makefile path:  / project / CM4_A /[project]/ platform /platform.mk
The  CFG_AUDIO_SUPPORT  is a compile option for audio framework, it will be enabled if there is at least one audio application is enabled.
Project Specific Configurations
The file  “ / project / CM4_A /[project]/[project]/ ProjectConfig.mk ”  is used to enable or disable a feature for a specified project.  CFG_MTK_AURISYS_PHONE_CALL_SUPPORT  should be set as  “ yes ”  to enable voice call application in DSP. Besides,  CompilerOption.mk  is used for adding project specific compile options.
Heapsize Adjustment
The data memory can be managed by malloc functions. However, we need to define a  appropriate  heap size first. The default heap size for all projects is defined in the following file  / project / CM4_A /[project]/ platform / inc / FreeRTOSConfig.h . Then find the follow definition  “ #define configTOTAL_HEAP_SIZE ( ( size_t ) ( 120 * 1024 ) ) ” . We can also override the definition for a specific project in CompilerOption.mk mentioned above. Use the following definition to override the default heap size:  CFLAGS += -DconfigTOTAL_HEAP_SIZE='( ( size_t ) ( 180 * 1024 ) )' .
AP Configurations
Projet Configurations
The file  “ d evice / mediatek /[project]/ ProjectConfig.mk ”  is used to enable or disable a feature for a specified project of application processor. Set MTK_AURISYS_PHONE_CALL_SUPPORT as  “ yes ” . Notice that there is an automatic compile dependency check between  “ PROJECT_CONFIG ”  of AP and  “ CFG_PROJECT_CONFIG ”  of DSP. They should be the same value.
Clock rate  requirement  
We don’t have automatic DVFS to detect current DSP loading and adjust the voltage automatically .  What we do is to register a frequency requirement  table for   a  specified application. When the application starts, a provided API should be called to notify the system. Besides, it also needs to call another API to notify the system when it is stopped. The system will adjust the voltage according  to the sum of clock rate requirement for active  applications . The value of clock rate requirement should be  estimated  precisely and then modify the corresponding valuethe following file:  kernel-3.18  /  drivers/misc/mediatek/scp/ [project] /scp_helper.c .  Note that the  feature  ID: OPEN_DSP_FEATURE_ID is for voice call of Aurisys.
static scp_feature_table_t feature_table[] = {
    {
……
……
    {
        .feature    = OPEN_DSP_FEATURE_ID,
        .freq            =  270 ,
        .enable     = 0,
    },
…….
…….
};
Software IP Development 
Delveop with ARSI
Follow ARSI and implement the functions defined in  arsi_api. h . The detailed description of ARSI is in the next chapter.
DSP Binary
Build Command
Notice that the Android build environment is required. The build commands is listed as follows:
$ . build/envsetup.sh
$ lunch full_<PROJECT>-eng
$ mosesq make -j24      (full Android Build)
$ mosesq make tinysys-scp -j24    (build DSP only)
$ vendor/mediatek/proprietary/tinysys/freertos/source/tools/build_ts.sh  -j24    (fast DSP build)
Built DSP Binary Location
The built DSP binary is located in the following path:
  out\target\product\ [project] \obj\TINYSYS_OBJ\tinysys - scp_intermediates\freertos\source\CM4_A\tinysys-scp-CM4_A.bin  
Push DSP Image to the Device
MTK Flashtool can be used to download a full load or update DSP  binary  only.  There is also an open source tool  “ Fastboot ”  can be used to update DSP binary only. The command is:
$  adb reboot bootloader     (put the device in fastboot mode)
$  flashboot.exe scp1 tinysys-scp.bin   (update scp1 from local tinysys-scp.bin)
$  flashboot.exe scp2 tinysys-scp.bin  
Parameter Management
Parameter File
The parameters of different modes are gathered into a file. To get the maximum flexibility of use, the format of the parameter file is defined by the 3 rd  Parties  themselves . The file should be placed in the following path:  /vendor/mediatek/proprietary/external/aurisys / .  Then the parameter files are parsed by the 3 rd  Party parameter parsing library to get required parameters
Parser Library
Development
Follow ARSI and implement the functions defined in  arsi_api. h  to develop the parser library.  Notice that both 32-bit library and 64-bit library are required. The built *.so would be placed in  vendor/mediatek/proprietary/external/aurisys /phone_call
Configuration
The  /vendor/mediatek/proprietary/external/aurisys / aurisys_ device.mk   should also be modified as follows  to add the parser library and parameter file:
ifeq ($(MTK_AURISYS_PHONE_CALL_SUPPORT),yes)
   PRODUCT_PACKAGES += lib _xxx
   PRODUCT_COPY_FILES += vendor/mediatek/proprietary/external/aurisys/ [vendor] / vendor .dat:system/etc/aurisys_param/ vendor .dat
endif

Tool Development
The connection between the PC tool and the mobile device is through USB and the communication is based on adb commands.   We ’ ve defined a series of adb commands. The software IP providers can design their own PC tools which can communicate with the mobile devices without  making changes to the legacy code  of the MTK platforms. The detail information can be found in the next chapter.
Brief Summary
1. Configurations
a) Enable Aurisys phone call supporting configurations in both Application processor and DSP.
b) Adjust heapsize of DSP
b) Estimate clock rate requirement and modify the value …… ………… . .reference to [ 7.1 ]
2. Software IP Development
a) Implement the functions in ARSI …… ………… . .reference to [ 3.2 ]
b) Build DSP binary only or build full load (include application processor)   … reference to [  7.2 ]
c) Update DSP binary by Fastboot or Flashtool, or update full Anroid load by Flashtool … reference to [  7.2 ]
3. Parameter Management …… ………… . .reference to [ 3.3.3 ]
a) Define own parameter file format
b) Implement Parameter Parser Library
4. Tool Development …… ………… . . reference to  [ 3.3.2 ]
a) Develop a PC tool. The communication between the device is based on adb commands
Integrate Software IP in Application Processor
Integration of a Record SWIP (as example)
Configurations
AP  Configurations 
As mentioned above,   t he file  “ d evice / mediatek /[project]/ ProjectConfig.mk ”  is used to enable or disable a feature for a specified project of application processor.  To enable Auisys framework in the  application  processor, please set  MTK_AURISYS_FRAMEWORK_SUPPORT   as  “ yes ” .  If this configuration is set as “no”,   we still support MTK  proprietary library in the original framework. However, it doesn ’ t support the XML descriptor mentioned later or support aurisys interface. It will be hard to replace the proprietary library with vendor ’ s library.
Processing and Parser Library
Please refer to the parser library part of integrating software IP in DSP mentioned above. The only difference is that the processing library also exists in the application processor and you can merge processing and parser capabilities in the same library.
Besides, even the integration  is complete,  you may still need to do some experiments. By using the adb command  “ adb push xxx.lib /system/lib ” , It is allowed to replace the library without re-compiling the image.
XML Description File
File Path:   /vendor/mediatek/proprietary/external/aurisys / aurisys_config .xml
The Aurisys XML Descriptor is a simple XML-file that specifies the library version number, attribute, parameter path, and optionally other information.  It contains the library descriptor and  scenario  descriptor. The library descriptor is used to describe the library name, path, attributes. The scenario  descriptor  is used to specify which libraries would be applied in that scenario. The detailed description of XML  descriptor  is shown in the  “ XML Descriptor for Aurisys ”  chapter.
Besides, i t is worth to be mentioned  that you can also replace the XML descriptor by a adb command during development stage. The command is  “ adb push aurisys_config.xml /system/etc ”
Aurisys Framework Modifications
Assign a Scenario to the Scene Handler
As mentioned above, a scenario  descriptor  in XML is used to describe which libraries will be applied in that scenario. Moreover, a scene handler  is created as the middleware between the audio system and the sound processing IPs.  For example, t he record handler is served for a record scene . We need to assign a scenario to the record scene handler that the specified scenario will be applied during recording. To specify a scenario to the record scene handler, please find the following file:  “ vendor/mediatek/proprietary/hardware/audio/common/V3/aud_drv /  AudioALSACaptureDataClientNormal .cpp ” . Then modify the scenario in the constructor:
AudioALSACaptureDataClientNormal::AudioALSACaptureDataClientNormal( …… )
{
    char *scenario = " xxx_record_scenario ";    //the scenario name
}
Link library
All libr ar ies should be linked first.  It is required to let the system be aware of which libraries would be linked. First, declare a function pointer assignment interface in the following file:  “ external / aurisys / interface /Arsi_libary_entry_points.h ” . Add an unique interface here and implement it in your library so that we can add multiple libraries at the same time.
void iir_arsi_assign_lib_fp(AurisysLibInterface *lib);
void audioloud_arsi_assign_lib_fp(AurisysLibInterface *lib);
The second step is to link the library by calling the unique function defined. Please find the file: ”   / vendor/mediatek/proprietary/hardware/audio/common/aurisys/framework/AudioAurisysLibDescriptorc.c ” .  And then add a section to link the specified library.
static int LinkLibFunction(struct AurisysLibDescriptorc *self)
{
    string_buf_t lib_version;
    status_t ret = NO_ERROR;
    if (strncmp(self->mName, "mtk_iir", strlen(self->mName)) == 0) {
        memset(&self->mAuriInterface, 0, sizeof(AurisysLibInterface));
        iir_arsi_assign_lib_fp(&self->mAuriInterface);

        // check entry point
        AUD_ASSERT(self->mAuriInterface.arsi_query_working_buf_size != NULL);

        // get api
        lib_version.memory_size = 128;
        lib_version.string_size = 0;
        lib_version.p_string = (char *)AUDIO_MALLOC(lib_version.memory_size);
        memset(lib_version.p_string, 0, sizeof(lib_version.memory_size));

        ret = self->mAuriInterface.arsi_get_lib_version(&lib_version);
        if (ret == NO_ERROR) {
            if (lib_version.string_size == 0 ||
                lib_version.string_size >= lib_version.memory_size) {
                AUD_LOG_W("lib_version bug, string_size = %u, memory_size = %u",
                          lib_version.string_size, lib_version.memory_size);
            }
            else {
                AUD_LOG_D("lib_version: %s", lib_version.p_string);
            }
        }
        AUDIO_FREE(lib_version.p_string);
    }
}

Set a Keyword for Set/Get Parameters
As mentioned, we ’ ve defined a series of adb commands for tuning and updating parameters. It needs to be aware of which libraries should be called to update the parameters. Thus, we need to define the keyword first (the adb commands will be described later). Please find the file  “ aurisys_lib_manager.c ”  located at the path:  “ vendor/mediatek/proprietary/hardware/audio/common/aurisys/framwork ” . And then add the keyword to the following functions:
static status_t set_parameter(AurisysLibManager *self, const char *key_value_pair)
static char *get_parameter(AurisysLibManager *self, const char *key)
Brief Summary
1. Configurations
a) Enable  MTK_AURISYS_FRAMEWORK_SUPPORT  configurations in  the project configuration file .
2. Software IP Development  and Parameter Management
a) Implement the functions in ARSI …… ………… . .reference to [ 3.2 ]
b ) Define own parameter file format   …… ………… . .reference to [ 3.3.3 ]

c ) Implement Parameter Parser Library
         d )  Place the library in  vendor/mediatek/proprietary/external/aurisys   and modify  the related M akefile
3 .  XML Descriptor …… ………… . . reference to [ 4 ]
a )  Add a library descriptor about the specified library
b )  Add a scenario descriptor to apply the library in that scenario
4. Aurisys Framework Modifications …… ………… . . reference to [ 2.3.2.1 ]
a )  Assign a scenario defined in the XML descriptor to the specified scene handler
b) Declare and implement a unique API(for the Aurisys framework to invoke the library functions)
c) Define a keyword to  represent  a specified library so that the Aurisys framework can be aware of 
      which library should be called. (When there is an adb command applied to set/get parameters)
5 . Tool Development …… ………… . . reference to  [ 3.3.2 ]
a) Develop a PC tool. The communication between the device is based on adb commands
Software  Development  Guidance
Software Interface Overview
  ARSI consists of the following components: ARSI-PROC and ARSI-PPAR. ARSI-PROC  defines generic interfaces for processing sounds which is portable to MTK platforms, regardless of DSP or MCU.  ARSI-PAR defines  API for parsing parameters. It provides programming interface to parse and transmit parameters between PC tool, APMCU, and DSP. Tuning and applying parameters by scen e s can also be achieved.
Sound Processing Task Integration Guidance
ARSI-PROC
  It  defines generic interface s  for processing sounds which is portable to MTK platforms, regardless of DSP or MCU.   The  interfaces include: Updating parameters and device information; Querying IP information (such as memory usage); Changing mode; Processing sounds. The interfaces are consistent among different processors. The software could be portable to reduce the design effort significantly. They are also consistent among different activities so that they can be widely used in many applications, such as playing, recording, voice call, and sound enhancing.
ARSI-PROC Functions
Functions
Description  
arsi_query_working_buf_size
Query the size of the working buffer
arsi_create_handler
Create handler and initialize it
arsi_process_ul_buf
Processing microphone/uplink data
arsi_process_dl_buf
Processing playback/downlink data
arsi_destroy_handler
D einitialize handler and destroy it (no need to free the working buffer)
arsi_update_device
Update task device info
arsi_update_param
Update speech enhancement parameters
arsi_set_ul_digital_gain
S et uplink digital gain
arsi_set_dl_digital_gain
S et downlink digital gain
arsi_set_ul_mute
M ute/unmute uplink
arsi_set_dl_mute
M ute/unmute downlink
arsi_set_ul_enhance
E nable/disable uplink enhancement function
arsi_set_dl_enhance
E nable/disable downlink enhancement function
arsi_set_debug_log_fp
S et debug log print callback function
  We ’ ll introduce ARSI-PROC functions here and provide examples. Notice that we won ’ t provide detailed descriptions of all ARSI-PROC functions. Please refer to the interface document generated by doxygen.
arsi_process_ul_buf
   Processing microphone/  voice  uplink data
Prototype:
lib_status_t  arsi_process_ul_buf (audio_buf_t   *p_ul_buf_in ,    audio_buf_t     *p_ul_buf_out ,    audio_buf_t     *p_aec_buf_in ,   const uint32_t   delay_ms , void *p_handler, void   *arg );
Parameters:
Parameters
Description  
*p_ul_buf_in
microphone/uplink data to be processed   buffer arrangement: chunks of audio destined for different channels => mic1(1 frame sz) + ... + micN (1 frame sz)
*p_ul_buf_out
the processed microphone/uplink data
*p_aec_buf_in
the AEC reference data
delay_ms
delay time(ms) for AEC
*p_handler
handler of speech enhancement
*arg
reserved field  (can be used for extension)
Return value:
lib_status_t , the status of library
arsi_process_dl_buf
Processing playback/ voice  downlink data
Prototype:
lib_status_t  arsi_process_dl_buf (audio_buf_t   *p_dl_buf_in ,   audio_buf_t   *p_dl_buf_out ,    void  *p_handler , void   *arg );
Parameters:
Parameters
Description  
*p_dl_buf_in
the playback/downlink data to be Processed
*p_dl_buf_out
the processed playback/downlink data
*p_handler
handler of speech enhancement
*arg
reserved field  (can be used for extension)
Return value:
lib_status_t , the status of library
Example
I nit()
{
……
    arsi_create_handler(&arsi_task_config, NULL/*&param_buf*/, &working_buf,
                        &arsi_handler);
    arsi_set_debug_log_fp(myprint, arsi_handler);

    arsi_set_ul_digital_gain(0, 0, arsi_handler);
    arsi_set_dl_digital_gain(0, 0, arsi_handler);
    arsi_set_ul_mute(0, arsi_handler); // no bool.... 0: false, 1: true
    arsi_set_dl_mute(0, arsi_handler); // no bool.... 0: false, 1: true
    arsi_set_ul_enhance(1, arsi_handler); // no bool.... 0: false, 1: true
    arsi_set_dl_enhance(1, arsi_handler); // no bool.... 0: false, 1: true
……
}

P rocess()
{
……
    const uint32_t aec_delay_ms = 40;
    if (modem_data_handshake == MODEM_UL_DATA) {
       arsi_process_ul_buf(   &ul_buf_in,    &ul_buf_out,    &aec_buf_in,    aec_delay_ms,    
                                              arsi_handler,    (void *)&extra_call_arg);
   }
    else if (modem_data_handshake == MODEM_DL_DATA) {
       arsi_process_dl_buf(   &dl_buf_in,    &dl_buf_out,    arsi_handler,    (void *)&extra_call_arg);
   }
……
}
Parameter Tuning Guidance

Figure  3 1 .  Parameter Path
ARSI-PAR Usage
  For a software IP, the parameters may be variant in different scenes or situations.  To ease of reference ,   The parameters are gathered into a file. To get the maximum flexibility of use, the format of the parameter file is defined by the 3 rd  Parties  themselves . The ARSI-PAR is designed  for parsing parameters  for specified scenes. It provides  the interface to transfer parameter file to the 3 rd  party library.
   Tool Development /  Connection
The connection between the PC tool and the mobile device is through USB and the communication is based on adb commands. We define a series of adb commands which include transmitting the whole parameter file to the device, receiving whole parameter file from the device, transmitting specific data to the device, and receiving specific data from the device. The software IP providers can design their own PC tools which can communicate with the mobile devices without  making changes to the legacy code  of the MTK platforms.

Parsing
To get the maximum flexibility of use, the format of the parameter file is also defined by the 3 rd  Parties  themselves . We only provide the interface to transfer parameter file to the 3 rd  Party Library. Thus, the 3 rd  Parties need to implement the parameter parsing library. 

Tuning/ Extraction
During  parameters  tuning, the PC tool updates the parameter file to the mobile device and then the parameter files are parsed by the 3 rd  Party parameter parsing library to get required parameters. The parameters will then be transferred to the 3 rd  Party processing library for processing sounds. Besides, when the mode changes (for example, the output device changes from headphone to speaker), we need to extract the parameters of the specified mode and the parsing library will be called.
Communication based on  Android Debug Bridge (adb)
Table  3 1 .  Adb command table
Command
Comments
adb shell "AudioSetParam AURISYS_SET_P ARAM,$target,$scene,$lib,$cmd  $mode = SET ”
Used to update parameter file and apply parameters to the library
adb shell  “ AudioSetParam AURISYS_GET_PARAM,$target,$scene,$lib,$cmd ”
Used to query current parameter setting. Query the value of a specified address and query the whole parameter file are allowed.

Table  3 2 . Command argument table
Argument
Example
Comments
$target
DSP, HAL
The processing API maybe either in AP or in DSP
$scene
PHONE_CALL, PLAYBACK, RECORD
Specify a scene, the information will be used as an argument of the parser function
$lib
library name
The library should be specified since there maybe several libraries added to the Aurisys
$mode
Enhancement  mode
Enhancement mode. IP provider can provide different  enhancement  for user to select what they want. The mode should be an integer. Only used in APPLY_PARAM command
$cmd  
( for  URISYS_SET_PARAM )
PARAM_FILE, param_path
set  parameter file path

APPLY_PARAM
apply new param during playback/phone call/...

ADDR_VALUE, addr,value
set “ value”  at the  “ addr”  in library

KEY_VALUE, key,value
set " value " of the " key " in library ,  “ key ”  can be defined by the library itself
$cmd  
( for  URISYS_ G ET_PARAM )
PARAM_FILE
return param_path

ADDR_VALUE, addr
return the value at the address  “ addr ”  in library

KEY _VALUE, key
return the value at the  “ key ”  in library
  The examples are listed as follows:
adb shell "AudioSetParam AURISYS_SET_PARAM,DSP, RECORD , M yLib ,PARAM_FILE,/ data / d .dat =SET"
set param eter file  path: /data/ d .dat  and establish the connection between MyLib and the parameter file
adb shell "AudioSetParam AURISYS_SET_PARAM,DSP,PHONE_CALL, MyLib ,APPLY_PARAM ,2 =SET"
apply new param eters   for record scene, the enhancement mode is 2
adb shell "AudioSetParam AURISYS_SET_PARAM,DSP, RECORD , MyLib ,ADDR_VALUE,0x1234,0x5678=SET"   set value 0x5678  at the address 0x1234 in  MyLib
adb shell "AudioSetParam AURISYS_SET_PARAM,DSP, RECORD , MyLib ,KEY_VALUE, MyKey , M y V a ue l=SET"
set value " MyValue "  to  the key " MyK ey" in  MyL i b
adb shell "AudioSetParam AURISYS_GET_PARAM,DSP,PHONE_CALL, MyLib ,PARAM_FILE"
return param_path  of MyLib
adb shell "AudioSetParam AURISYS_GET_PARAM,DSP,PHONE_CALL, MyLi ,ADDR_VALUE,0x1234"
return the value at the address 0x1234 in  My lib
adb  shell "AudioSetParam AURISYS_GET_PARAM,DSP,PHONE_CALL, MyLib ,KEY_VALUE, MyK ey"
return  the value of the key " M y Key " in  My lib
ARSI-PAR Functions
   Functions
Description  
arsi_query_param_buf_size
Query the buffer size to keep speech enhancement parameters(single mode), Implemented in HAL only
arsi_parsing_param_file
Parsing param file to get parameters into p_param_buf(single mode), Implemented in HAL only
arsi_set_addr_value
Set value at a specified address
arsi_get_addr_value
Get value from the specified address
arsi_set_key_value_pair
set key_value string to library
arsi_get_key_value_pair
get key_value string from library
  We ’ ll introduce ARSI-PAR functions here and provide examples. Notice that we won ’ t provide detailed descriptions of all ARSI-PAR functions. Please refer to the interface document generated by doxygen.
arsi_query_param_buf_size
  Query the buffer size to keep speech enhancement parameters(single mode), Implemented in HAL  only
Prototype:
lib_status_t  arsi_query_param_buf_size (   const arsi_task_config_t  *p_arsi_task_config ,   const string_buf_t        *platform_name ,   const string_buf_t   *param_file_path ,   const int   enhancement_mode ,   uint32_t   *p_param_buf_size );
Parameters:
Parameters
Description  
*p_arsi_task_config
the task configure
*platform_name
the platform name by "adb shell getprop ro.product.model"
*param_file_path
the speech enhancement param file (fullset)
enhancement_mode
the speech enhancement mode by apk
*p_param_buf_size
H ow much memory size  required  to keep the enhancement   parameters for the specific device/mode
Return value:
lib_status_t , the status of library
arsi_parsing_param_file
   Parsing param file to get parameters into p_param_buf(single mode) ,  Implemented in HAL  only
Prototype:
   lib_status_t  arsi_parsing_param_file (   const arsi_task_config_t  *p_arsi_task_config ,   const string_buf_t   *platform_name ,    const string_buf_t   *param_file_path ,    const int   enhancement_mode ,    data_buf_t   *p_param_buf );
Parameters:
Parameters
Description  
*p_arsi_task_config
the task configure
*platform_name
the platform name by "adb shell getprop ro.product.model"
*param_file_path
the speech enhancement param file (fullset)
enhancement_mode
the speech enhancement mode by apk
*  p_param_buf
the buffer pointer   of  the parameters for the specific device/mode
Return value:
lib_status_t , the status of library
Example
void *handle = dlopen(lname, RTLD_NOW);
……
    arsi_query_param_buf_size_t fvsoft_arsi_query_param_buf_size =
        (arsi_query_param_buf_size_t)dlsym(handle, "arsi_query_param_buf_size");
……
    arsi_parsing_param_file_t fvsoft_arsi_parsing_param_file =
        (arsi_parsing_param_file_t)dlsym(handle, "arsi_parsing_param_file");
……
    fvsoft_arsi_query_param_buf_size(&mArsiTaskConfig, &platform_name, &file_path,
                                                                     0, &param_buf_size);

    memset(param_buf.p_buffer, 0, param_buf.memory_size);
    fvsoft_arsi_parsing_param_file(&mArsiTaskConfig, &platform_name, &file_path, 
                                                              0,   &param_buf);
    ……
    /* set speech param to SCP */
    pIPI->sendIpiMsg(TASK_SCENE_PHONE_CALL,
                     AUDIO_IPI_DMA, AUDIO_IPI_MSG_NEED_ACK,
                     IPI_MSG_A2D_SPH_PARAM, param_buf.data_size, 0, (char *)param_buf.p_buffer);

    dlclose(handle);
XML Descriptor for Aurisys
Example
  The Aurisys XML Descriptor is a simple XML-file that specifies the library version number, attribute, parameter path, and optionally other information. We provide an example, in the following demonstrates how to describe a library and a scenario. The attributes of the MTK IIR filter library and the MTK record library are packaged in the library descriptor by < aurisyslibdescriptor > tag. Then we can use < aurisysscenario > tag to describe which library (can be multiple  libraries )  will be  applied in this scenario.
<aurisysconfig>
    < versioncontrol  value= " 1.01 ">
    </versioncontrol>
     <!--  mtk   iir  lib descriptor -->
    <aurisyslibdescriptor  name= " library _iir" >
        < aurisyslibAttribute  name= "AurisysLibPath"         value= "/system/lib/lib_iir.so" / >
        <aurisyslibAttribute  name= "AurisysParamPath"       value= "" /system/etc/aurisys_param/ iir.dat   >
        <aurisyslibAttribute  name= "AurisysLibVersion"      value= "001" / >
        <aurisyslibAttribute  name= "AurisysLibLayer"        value= "AP" / >
        <aurisyslibAttribute  name= "AurisysLibScenario"     value= "TASK_SCENE_PHONE_CALL|TASK_SCENE_RECORD|TASK_SCENE_VOIP" / >
        <aurisyslibAttribute  name= "AurisysLibKeyFrameMs"     value= "5|20" / >
        <aurisyslibAttribute  name= "AurisysLibKeyparam"     value= " iir " / >
        <aurisyslibAttribute  name= "AurisysLibBufferbase"   value= "FRAMEBASE" / >
        <aurisyslibAttribute  name= "AurisysLibCapability"   value= "UPLINK" / >
     <! — stream  descriptor  for mtk   iir  lib -->
        <aurisysStreamdescriptor>
            <aurisysStreamAttribute  name= "AurisysLibULDevice"   value= "AUDIO_DEVICE_IN_BUILTIN_MIC|AUDIO_DEVICE_IN_WIRED_HEADSET|AUDIO_DEVICE_IN_BLUETOOTH_SCO_HEADSET" / >
            <aurisysStreamAttribute  name= "AurisysLibULDeviceExt"   value= "rec_mic" / >
            <aurisysStreamAttribute  name= "AurisysLibULFormatInput"   value= "AUDIO_FORMAT_PCM_16_BIT|AUDIO_FORMAT_PCM_8_24_BIT|AUDIO_FORMAT_PCM_32_BIT" / >
            <aurisysStreamAttribute  name= "AurisysLibULSamplerateInput"   value= "16000|32000|48000|96000|192000" / >
            <aurisysStreamAttribute  name= "AurisysLibULChannelInput"   value= "1|2" / >
            <aurisysStreamAttribute  name= "AurisysLibULFormatOutput"   value= "AUDIO_FORMAT_PCM_16_BIT|AUDIO_FORMAT_PCM_8_24_BIT|AUDIO_FORMAT_PCM_32_BIT" / >
            <aurisysStreamAttribute  name= "AurisysLibULSamplerateOutput"   value= "16000|32000|48000|96000|192000" / >
            <aurisysStreamAttribute  name= "AurisysLibULChannelOutput"   value= "1|2" / >
        </aurisysStreamdescriptor>
    </aurisyslibdescriptor>
     <!--  mtk   record  lib descriptor -->
     <aurisyslibdescriptor  name= " library _record" >
          <aurisyslibAttribute  name= "AurisysLibPath"         value= "/system/lib/libspeech_enh_lib.so" />
         <aurisyslibAttribute  name= "AurisysParamPath"       value= " /system/etc/aurisys_param/ mtk_record.dat  " / >
          <aurisyslibAttribute  name= "AurisysLibVersion"      value= "001" / >
          <aurisyslibAttribute  name= "AurisysLibLayer"        value= "AP" / >
        <aurisyslibAttribute  name= "AurisysLibScenario"     value= "TASK_SCENE_RECORD" />
        <aurisyslibAttribute  name= "AurisysLibKeyFrameMs"     value= "1|3|5|10|20" />
        <aurisyslibAttribute  name= "AurisysLibKeyparam"     value ="record" />
        <aurisyslibAttribute  name= "AurisysLibBufferbase"   value= "FRAMEBASE" />
        <aurisyslibAttribute  name= "AurisysLibCapability"   value= "UPLINK" />
     <! — stream  descriptor  for mtk   record  lib -->
        <aurisysStreamdescriptor>         
            <aurisysStreamAttribute  name= "AurisysLibULDevice"   value= "AUDIO_DEVICE_IN_BUILTIN_MIC|AUDIO_DEVICE_IN_WIRED_HEADSET|AUDIO_DEVICE_IN_BLUETOOTH_SCO_HEADSET" />
            <aurisysStreamAttribute  name= "AurisysLibULDeviceExt"   value= "rec_mic" />
            <aurisysStreamAttribute  name= "AurisysLibULFormatInput"   value= "AUDIO_FORMAT_PCM_16_BIT" />
            <aurisysStreamAttribute  name= "AurisysLibULSamplerateInput"   value= "48000" />
            <aurisysStreamAttribute  name= "AurisysLibULChannelInput"   value= "1|2" />        
            <aurisysStreamAttribute  name= "AurisysLibULFormatOutput"   value= "AUDIO_FORMAT_PCM_16_BIT" />
            <aurisysStreamAttribute  name= "AurisysLibULSamplerateOutput"   value= "48000" />
            <aurisysStreamAttribute  name= "AurisysLibULChannelOutput"   value= "1|2" />
        </aurisysStreamdescriptor>
    </aurisyslibdescriptor>

     <! — scenario descriptor, record scenario, use mtk record library  -->
    <aurisysscenario  name= " inhouse_ record" >
        <aurisysscenariolib  name= " library _record" />
         <aurisysscenariolib  name= " library _ iir " />
    </aurisysscenario>
</aurisysconfig>
Elements
Version Control
  The <versioncontrol> tag is used to describes the Aurisys XML format version.
        < versioncontrol  value= " 1.01 ">
L ibrary Descriptor
Library Name
The library descriptor is used to describe the information of a library, such as library version, library path, and processing approaches. You can create a library  descriptor  by a  <aurisyslibdescriptor > tag with an  appropriate  name which represents the library.
        <aurisyslibdescriptor  name= " library _iir" >
Library Path
Specify the library path.
        < aurisyslibAttribute  name= "AurisysLibPath"         value= "/system/lib/lib_iir.so" / >
Parameter Path
Specify the library parameter file path. The usage of library parameter has been demonstrated in the chatper  “ Software Development Guidance ”
        <aurisyslibAttribute  name= "AurisysParamPath"       value= "" /system/etc/aurisys_param/ iir.dat   >
Library Version Control
Version of the library. There is no  definition  of the value range, however, it should be an integer.
        <aurisyslibAttribute  name= "AurisysLibVersion"      value= "001" / >
Library Layer
As mentioned above, the library can be processed in both DSP and AP. This tag is used to specify it  is processed in AP or in DSP.
Range of Values: AP/DSP
        <aurisyslibAttribute  name= "AurisysLibLayer"        value= "AP" / >
Library Applied Scenario
Specify the library can be applied in which scenario.
Range of values:  TASK_SCENE_PHONE_CALL,TASK_SCENE_VOW , TASK_SCENE_PLAYBACK_MP3 , TASK_SCENE_PLAYBACK,TASK_SCENE_RECORD,TASK_SCENE_VOIP, TASK_SCENE_SPEAKER_PROTECTION
        <aurisyslibAttribute  name= "AurisysLibScenario"     value= "TASK_SCENE_PHONE_CALL|TASK_SCENE_RECORD|TASK_SCENE_VOIP" / >
Frame Period
The supported frame period of the library. For example, 5|20 means the library support both 5ms and 20ms.
Range of values:  an integer value
        <aurisyslibAttribute  name= "AurisysLibKeyFrameMs"     value= "5|20" / >
Key Parameter
When we want to modify the parameters (ex. by a tuning tool), the audio system needs a specified key to recognize which library should be applied. The key can be any string value that is unique.
        <aurisyslibAttribute  name= "AurisysLibKeyparam"     value= " iir " / >
Processing Approach
The l ib rary  can be interleave and framebase, frame base need to assign AurisysLibKeyFrameMs

Range of values:   SAMPLEBASE , FRAMEBASE
        <aurisyslibAttribute  name= "AurisysLibBufferbase"   value= "FRAMEBASE" / >
Capability
Specify which types of data buffer should be provided to the library. For example, UPLINK|DLREFERENCE mean the library requires the uplink data and downlink as reference buffer.
Range of values:   DOWNLINK, UPLINK , DLREFERNENCE , ECHOREF
        <aurisyslibAttribute  name= "AurisysLibCapability"   value= "UPLINK" / >
Stream Descriptor
   The stream descriptor  is used to specify the supported stream format (bit resolution, sampling rate, etc.,.). There are downlink, uplink, and reference stream types. You don ’ t need to fill downlink stream information if the library doesn ’ t support a downlink stream. The tags < aurisysStreamdescriptor >, < / aurisysStreamdescriptor > is used to define the start and end of the stream descriptor section.
Primary Sections
Device
To specify the supported output devices for a downlink stream and the supported input devices for a uplink stream.
Range of values  for DL :   AUDIO_DEVICE_OUT_EARPIECE ,  AUDIO_DEVICE_OUT_SPEAKER ,  AUDIO_DEVICE_OUT_WIRED_HEADSET ,  AUDIO_DEVICE_OUT_WIRED_HEADPHONE ,  AUDIO_DEVICE_OUT_BLUETOOTH_SCO
Range of values  for UL:   AUDIO_DEVICE_IN_BLUETOOTH_SCO_HEADSET ,  AUDIO_DEVICE_IN_WIRED_HEADSET ,  AUDIO_DEVICE_IN_BUILTIN_MIC
        <aurisysStreamAttribute  name= "AurisysLibULDevice"   value= "AUDIO_DEVICE_IN_BUILTIN_MIC|AUDIO_DEVICE_IN_WIRED_HEADSET|AUDIO_DEVICE_IN_BLUETOOTH_SCO_HEADSET" / >
         <aurisysStreamAttribute  name= "AurisysLibDLDevice"  value= "DeviceOutReceiver|AUDIO_DEVICE_OUT_SPEAKER|DeviceOutHeadphone|AUDIO_DEVICE_OUT_BLUETOOTH_SCO"/>
Physical Device
The physical intput/output devices. However, the property is not used currently.
Range of values:
        <aurisysStreamAttribute  name= "AurisysLibULDeviceExt"   value= "rec_mic" / >
        <aurisysStreamAttribute  name= "AurisysLib D LDeviceExt"   value= " voip_spk " / >
Input Data Format
Specify the supported bit resolution of the input data to the library. The range of values is the same for DL and UL stream.
Range of values:   AUDIO_FORMAT_PCM_16_BIT,   AUDIO_FORMAT_PCM_24_BIT , AUDIO_FORMAT_PCM_32_BIT
        <aurisysStreamAttribute  name= "AurisysLibULFormatInput"   value= "AUDIO_FORMAT_PCM_16_BIT|AUDIO_FORMAT_PCM_8_24_BIT|AUDIO_FORMAT_PCM_32_BIT" / >
         <aurisysStreamAttribute  name= "AurisysLibDLFormatInput"  value= "AUDIO_FORMAT_PCM_16_BIT" />
Input Sample Rate
Specify the supported sample rate of the input data to the library. The range of values is the same for DL and UL stream.
Range of values:  8000 ,  16000 ,  32000 ,  44100 ,  48000 ,  88200 ,  96000 ,  176400 ,  192000
        <aurisysStreamAttribute  name= "AurisysLibULSamplerateInput"   value= "16000|32000|48000|96000|192000" / >
         <aurisysStreamAttribute  name= "AurisysLibDLSamplerateInput"  value= "48000"/>
Input Channel Number
Specify the supported channel number of the input data to the library. The range of values is the same for DL and UL stream.
Range of values:  1, 2
        <aurisysStreamAttribute  name= "AurisysLibULChannelInput"   value= "1|2" / >
         <aurisysStreamAttribute  name= "AurisysLibDLChannelInput"  value= "1"/>
Output Data Format
Specify the supported bit resolution of the output data to the library. The range of values is the same for DL and UL stream.
Range of values:   AUDIO_FORMAT_PCM_16_BIT,   AUDIO_FORMAT_PCM_24_BIT , AUDIO_FORMAT_PCM_32_BIT
         <aurisysStreamAttribute  name= "AurisysLibULFormatOutput"   value= "AUDIO_FORMAT_PCM_16_BIT|AUDIO_FORMAT_PCM_8_24_BIT|AUDIO_FORMAT_PCM_32_BIT" / >
         <aurisysStreamAttribute  name= "AurisysLibDLFormatOutput"  value= "AUDIO_FORMAT_PCM_16_BIT"/>
Output Sample Rate
Specify the supported sample rate of the output data to the library. The range of values is the same for DL and UL stream.
Range of values:   8000 ,  16000 ,  32000 ,  44100 ,  48000 ,  88200 ,  96000 ,  176400 ,  192000
         <aurisysStreamAttribute  name= "AurisysLibULSamplerateOutput"   value= "16000|32000|48000|96000|192000" / >
         <aurisysStreamAttribute  name= "AurisysLibDLSamplerateOutput"  value= "48000"/>
Output Channel Number
Specify the supported channel number of the input data to the library. The range of values is the same for DL and UL stream.
Range of values:   AUDIO_FORMAT_PCM_16_BIT,   AUDIO_FORMAT_PCM_24_BIT , AUDIO_FORMAT_PCM_32_BIT
         <aurisysStreamAttribute  name= "AurisysLibULChannelOutput"   value= "1|2" / >
         <aurisysStreamAttribute  name= "AurisysLibDLChannelOutput"  value= "1"/>
Optional Sections
Reference Stream Data Format
Specify the supported bit resolution of the reference stream to the library. The range of values is the same for DL and UL reference stream.
Range of values:   AUDIO_FORMAT_PCM_16_BIT,   AUDIO_FORMAT_PCM_24_BIT , AUDIO_FORMAT_PCM_32_BIT
        <aurisysStreamAttribute  name= " AurisysLibDLFormatRef "   value= "1|2" / >
         <aurisysStreamAttribute  name= " AurisysLib U LFormatRef "   value= "1|2" / >
Reference Stream Data Sample Rate
Specify the supported sample rate of the reference stream to the library. The range of values is the same for DL and UL reference stream.
Range of values:   8000 ,  16000 ,  32000 ,  44100 ,  48000 ,  88200 ,  96000 ,  176400 ,  192000
        <aurisysStreamAttribute  name= " AurisysLibDLSamplerateRef "   value= "" / >
         <aurisysStreamAttribute  name= " AurisysLib U LSamplerateRef "   value= " " / >
Reference Stream Data Channel Number
Specify the supported channel number of the reference stream to the library. The range of values is the same for DL and UL reference stream.
Range of values: 1, 2
           < aurisysStreamAttribute  name= " AurisysLibDLChannelRef "   value= "" / >
        <aurisysStreamAttribute  name= " AurisysLib U LChannelRef "   value= "" / >
Scenario Descriptor
  The scenario  descriptor  is used to specify which library would be applied in the scenario. The tags <   aurisysscenario >, < / aurisysscenario > is used to define the start and end of the scenario descriptor section. The following example shows that an inhouse_record scenario is created and there are two libraries will be applied  in the scenario. Then we should assign the inhouse_record scenario to be applied in the record scene. There is a detailed description later.
      <aurisysscenario  name= "  inhouse_ record" >
        <aurisysscenariolib  name= " library _record" />
         <aurisysscenariolib  name= " library _ iir " />
    </aurisysscenario>
Deployment

Figure  4 1 .  Relationship between Scene Handler, Scenario Descriptor, and Library Descriptor
   Library Descriptor   is  used to describe the information of a library. Every applied library should be described by a library descriptor. 
  Scenario Descriptor  is used  to define which libraries would be applied in the specified scenario. Multiple libraries can be applied in one scenario. Besides, as the diagram above, a library can be applied in different scenarios. 
  Scene Handler , as mentioned above,   is created as the middleware between the audio system and the sound processing IPs . The record handler is served for a record scene and we can assign a scenario to the record handler. If we assign the  scenario  A to the record handler, the library A and library B will be applied in the record scene. We can also assign scenario B or scenario C to the recording scene. However, the assignment is  achieved  in the program of scene handler, not in the XML descriptor.

Debugging
Logging
  Programmers are used to debug by logging the execution of the program. However, it is not convenient for a binary release IP. During developing an IP, the programmer writes logging codes to check the correctness of the program. However, the logging code may be removed when it ’ s time to release. Moreover, the programmer may want to refine the program due to issues or improvement works. He needs to insert the logging code and recompile the code. This brings lots of work for the developer, especially when the program is binary released.
  Thus, we provide an API for the developer to check the correctness  of their program by logging. The API is consistent and can be used in different systems. The provided API would call the  function  pointer passed in the  initializ ation. The called function is responsible for logging the required statements by calling the system-specific logging API. It can also be disabled easily by bypassing the requirements. It ’ s helpful for the developer which doesn ’ t need to remove and insert logging code anymore.
Inside Software IP
  The following blocks are the statement of the information about the provided logging API:
API
/**
******************************************************************************
 *  @brief set debug log print callback function
 *
 *  @param debug_log log print function pointer
 *
 *  @param p_handler the handler of speech enhancement
 *
 *  @return lib_status_t
******************************************************************************
 */
lib_status_t arsi_set_debug_log_fp(const debug_log_fp_t debug_log,
                                   void *p_handler);
Prototype
typedef void (*debug_log_fp_t)(const char *message, ...);
Data Structure
typedef struct arsi_task_config_t {
     …
    debug_log_fp_t debug_log;
     …
} arsi_task_config_t;

Applications
Voice Call
Data Path
   Hand-Held Mode
( 6 ) ( 5 ) ( 1 ) ( 4 ) ( 3 ) ( 2 )
( 6 )
( 5 )
( 1 )
( 4 )
( 3 )
( 2 )
Figure  6 1 .  Hand-Held Mode Voice Call Data Path
Downlink data. The data from the far-end is received in Modem IC and decoded. After decoding the codec, the Modem IC notifies the Open DSP to move the voice data to the internal memory of Open DSP. Then the vendor ’ s DL enhancement solution will be applied and the processed data would be moved back to Modem IC.  
The Modem IC write DL data to Audio HW.
The voice uplink data are also received from the Modem IC.
The Open DSP moves the data to its internal memory. After applying the vendor ’ s UL enhancement solution, the data will be transferred to Modem IC. The Modem IC will then encode the data and send to far end.
The background sound is transferred to Modem IC and mixed with voice data before output to the audio hardware
The voice data during a voice call can be saved. The DL/UL data can be saved  separately .

Hand-Free Mode
Programmers are used to debug by logging the execution of the program. However, it is not convenient for 
( 3 ) ( 2 ) ( 1 )
( 3 )
( 2 )
( 1 )
Figure  6 2 .  Hand-Free Mode Voice Call Data Path
If there is no smartPA, the DL data is written to the Audio HW  and output to speaker Amp directly. If there is a smartPA, the output data will be routed to the application processor first
The smartPA algorithm will be applied. Notice that we only support smartPA algorithm by default in  MT6797 .
Finally, the data will be written to the Audio HW and then output to the speaker Amp.
Basic Information
We support NB/WB. No matter NB or WB, the  data will be up-sampled to 16k sampling rate for the vendor ’ s IP. We ’ ll notify the vendor ’ s IP whether it ’ s WB or not.
20ms per frame and DL/UL  separated . Modem side interrupts open DSP every  20ms to notify open DSP to receive voice UL data. For voice DL data, the interrupt period is also 20ms, and there is a shift between UL data.

To avoid increasing round trip delay, UL enhancement should be processed no more than 1 0 ms and DL enhancement should be processed no more than 3ms. If the library can ’ t meet the requirement, we need to delay 1 frame to process the data.  T here would be 20ms increment in the round trip delay (because of 20ms per frame) .


Available MCPS
Latency
DL Enhancement
53
No delay
UL Enhancement
177
No delay
DL+UL Enhancement
354
20ms delay  increment

The group delay (processing buffer delay) of the library is suggested to not more than 40ms.
Dual mic supported in  MT6797

Limitations
  The timing is critical for voice call, so the voice call enhancements should be run at 354 MHz. It will keep the voltage at 1.0V in  MT6797 . Compared with MTK  proprietary  voice call enhancement solution which is executed in the Modem IC, the power consumption of executing voice call enhancement executed in the Open DSP will be higher. However, the proportion of power increase would be small in the view of total power consumption of whole chip and daily of use.
Configurations
   AP  --  MTK_AURISYS_PHONE_CALL_SUPPORT
   DSP  --  CFG_  MTK_AURISYS_PHONE_CALL_SUPPORT
  Notice that there is a compile dependency check. The configurations of AP and DSP should be the same or there will be a build error occurs.
Software Frameworks
( 3 ) ( 6 ) ( 5 ) ( 4 ) ( 2 ) ( 1 )
( 3 )
( 6 )
( 5 )
( 4 )
( 2 )
( 1 )
Figure  6 3 .  Software Frameworks of Voice Call
UL  ……… ……………………………… .. … …………………………………………………… . … (1)
The diagram shows the path how UL data received from the hardware input and sends to the Modem IC
DL ……… ……………………………………………………………………………………… .. …… ( 2 )
The path from the Modem IC to the audio hardware output
Data between Modem IC and CortexM4 (Open DSP)  ……… …………… .. ( 3 )
The voice data exchange between the Modem IC and CM4 is by the BUS. The DMA of CM4 can help to reduce the period of data exchange
Source code structure
Audio --  / source / drivers / CM4_A / mt6797 / audio
Aurisys Interface --  / source / middleware / lib / aurisys
IPI --  / source / drivers / CM4_A / mt6797 / ipi /
Task Voice   ……… ……………………………… .. … ………………………………………… … ( 4 )
The initial function is placed in  audio.c  to initialize the IPI message handler and create the Voice Task
The Voice Task main  function s are placed in  audio_task_phone_call.c
IPI   ……… ……………………………… .. … …………………………………………………… .. … ( 5 )
Inter Processor Interrupt.  The communication between the application processor and the DSP is through the IPI message. Each task has its unique IPI ID and should have implemented an IPI handler.
The IPI ID is defined in  scp_ipi.h
The IPI message handler and related information can be found in  audio _messenger_ipi.c ,  audio_speech_msg_id.h
Notice that the IPI message handler is in ISR level. Thus, we can ’ t execute enhancement directly in the IPI message handler. It is just used to signal the task Voice.
(6) Process APIs ……… ……………………………… .. … ……………………………… … ( 6 )
The software interface defined in  arsi_api.h . The process APIs implemented by the vendor will be executed in the Task Voice.
Playback
Data Path
( 3 ) ( 4 ) ( 1 ) ( 2 ) ( 5 )
( 3 )
( 4 )
( 1 )
( 2 )
( 5 )
Figure  6 4 .  Offload Audio Playback
O ffload stream. The audio bitstream will be decoded to DSP and the decoded PCM data will be output to the audio hardware directly. 
The normal playback stream. The audio is decoded in the application processor.
Fast track, audio playback with lower latency.
The decoder implemented in DSP. Currently, we only support MP3 decoder in  MT6797 .
The multiple streams can be mixed in the hardware directly. However, the sampling rate should be the same, so the sampling rate converter would be executed first if needed.
Configurations
   AP  --  MTK_AUDIO_TUNNELING_SUPPORT
   DSP  --  CFG_MTK_AUDIO_TUNNELING_SUPPORT
   audio_policy.conf  --
compress_offload {        
         sampling_rates  8000|11025|16000|22050|32000|44100|48000 
         channel_masks  AUDIO_CHANNEL_OUT_MONO|AUDIO_CHANNEL_OUT_STEREO        formats AUDIO_FORMAT_MP3       
devices  AUDIO_DEVICE_OUT_WIRED_HEADSET|AUDIO_DEVICE_OUT_WIRED_HEADPHONE|AUDIO_DEVICE_OUT_ANLG_DOCK_HEADSET|AUDIO_DEVICE_OUT_DGTL_DOCK_HEADSET 
         flags  AUDIO_OUTPUT_FLAG_COMPRESS_OFFLOAD|AUDIO_OUTPUT_FLAG_NON_BLOCKING 
      }

Behavior
  In  MT6797 , We didn ’ t implement offloadable playback effects on DSP by default. If the playback effect is enabled, the playback will be switched to a normal stream playback. Users can implement the playback effect in DSP by themselves currently. The default package with playback effect supported in DSP will be released later.
Functional Blocks

( 8 ) ( 7 ) ( 6 ) ( 4 ) ( 5 ) ( 3 ) ( 2 ) ( 1 )
( 8 )
( 7 )
( 6 )
( 4 )
( 5 )
( 3 )
( 2 )
( 1 )
Figure  6 5 .  Functional Blocks of Offload Playback
The communications between the application processor and DSP is by the IPI driver.
The parsed MP3 bistream is reserved in DRAM. The application processor can enter sleep mode if there is sufficient MP3 bistrem stored in DRAM.
DSP will move the MP3 bitstream to its internal memory by DMA
The mp3 bistream will be decoded by the decoder
The decoder is executed in the Task MP3
The output PCM data will be transferred to the audio hardware by DMA
We need to monitor the data amount of mp3 bistream buffer
Once the amount of mp3 bitstream is not enough for decoding, we ’ ll interrupt the application processor by IPI message to fill the bitstream buffer

Sound Trigger
   To be released later
SmartPA
   To be released later
Record & VOIP
  Currently, we only support recording and VOIP enhancement in the Application Processor. This is because the power savings in DSP won ’ t be   significant  unless the encoder and storage driver are also implemented in DSP. Besides, the computing and memory resource of the DSP are  insufficient   for these applications.
Data Path  
( 4 ) ( 5 ) ( 1 ) ( 2 ) ( 3 )
( 4 )
( 5 )
( 1 )
( 2 )
( 3 )
Figure  6 6 .  Record & VOIP
The record(uplink) stream which contains sound data from microphones.
We also support direct input without any processing.
Before processing the uplink data with the recording or VOIP UL library. We provide an IIR filter ahead to do DC removal and reduce possible hardware defects. It can be bypassed by XML config if you don ’ t need it.
The downlink stream which is processed with a playback or VOIP DL library.
The DL output data will be looped back as the downlink reference stream and provided to the record or VOIP UL library.
Configurations
   MTK_AURISYS_FRAMEWORK_SUPPORT
  This project configuration should be set as  “ yes ”  if you want to support recording and VOIP effect in Aurisys framework. If this configuration is set as  “ no ” , we still support MTK inside record and VOIP effect. However, we  don ’ t support the XML  descriptor mentioned above. If you want to replace the MTK library with vendor ’ s library, it ’ s suggested to set this configuration as  “ yes ” . We can also support MTK library in Aurisys framework in the future and set this option as true by default.
Application Processor Only
  Due to the lack of DSP resources (computing power and internal memory size). The recording and VOIP libraries are only allowed to be processed in the application processor.
Class Diagram
  The class diagram of Aurisys record and VOIP framework is depicted as follows. It provides a reference to the actual code. 

Figure  6 7 .  Aurisys Class Diagram for Record & VOIP
Device Information
  It may be confused with the relationship between the input/output device and arguments sent to the library. We provide a comparison table in the following as a reference to implement library.
VOIP
   task_scene = TASK_SCENE_VOIP
   Device
  Device Detail  
Arguments  
Handset
w/ dual-mic NR
input_device_info = AUDIO_DEVICE_IN_BUILTIN_MIC
output_device_info = AUDIO_DEVICE_OUT_EARPIECE
VIR_VOIP_NORMAL_DMNR_SUPPORT enabled

w/o dual-mic NR
input_device_info = AUDIO_DEVICE_IN_BUILTIN_MIC
output_device_info = AUDIO_DEVICE_OUT_EARPIECE
VIR_VOIP_NORMAL_DMNR_SUPPORT disabled
Headset
3 pole headset
input_device_info.devices = AUDIO_DEVICE_IN_BUILTIN_MIC
output_device_info.devices = AUDIO_DEVICE_OUT_WIRED_HEADPHONE

4 pole headset
input_device_info.devices = AUDIO_DEVICE_IN_WIRED_HEADSET
output_device_info.devices = AUDIO_DEVICE_OUT_WIRED_HEADSET
input_device_info.num_channels = 1

5 pole headset
input_device_info.devices = AUDIO_DEVICE_IN_WIRED_HEADSET
output_device_info.devices = AUDIO_DEVICE_OUT_WIRED_HEADSET
input_device_info.num_channels = 2
5_POLE_HS_SUPPORT enabled
MTK_HEADSET_ACTIVE_NOISE_CANCELLATION_SUPPORT disabled 

5 pole + ANC
input_device_info.devices = AUDIO_DEVICE_IN_WIRED_HEADSET
output_device_info.devices = AUDIO_DEVICE_OUT_WIRED_HEADSET
input_device_info.num_channels = 2
MTK_HEADSET_ACTIVE_NOISE_CANCELLATION_SUPPORT enabled 
Hand-Free
w/ NR
output_device_info = AUDIO_DEVICE_OUT_SPEAKER
VIR_VOIP_HANDSFREE_DMNR_SUPPORT enabled 

w/o NR
output_device_info = AUDIO_DEVICE_OUT_SPEAKER
VIR_VOIP_HANDSFREE_DMNR_SUPPORT disabled 
BT earphone
BT earphone
input_device_info = AUDIO_DEVICE_IN_BLUETOOTH_SCO_HEADSET 

Record
   task_scene = TASK_SCENE_RECORD 
  The information of input device used in recording is the same with what used in VOIP. However, the library may need to be aware of which  application  is processed and apply different effect according to the application. The following table lists the arguments provided to the library in each  application . 
  Application  
Input Source  
  Notes 
Sound Recording
input_source = AUDIO_SOURCE_MIC
Modes:  Normal  /  Lecture  /  Meeting  
  ( Reserve2 = 0 ,  1 ,  2  respectively )
Camera Recording
input_source = AUDIO_SOURCE_MIC
 Modes:  Normal  /  Meeting  
  ( Reserve2 =  3, 4  respectively )
Customization1
input_source = AUDIO_SOURCE_MIC_AEC
   MagiASR need AEC   (VR + AEC)
Voice Recognition & CTS
input_source = AUDIO_SOURCE_VOICE_RECOGNITION

Voice Unlock
input_source = AUDIO_SOURCE_VOICE_UNLOCK
  
Customization2
input_source = AUDIO_SOURCE_VOICE_RECOGNITION_AEC
   Normal record + AEC
Fast Record
A ccording current application
   frame_size_ms = 5  ms

Appendix:  Platform and Development Environment s
Scenario Based DVFS
Low Power Mode 110 MHz Ultra Low Power Always-on features 0.8V Normal Mode Turbo Mode 224 MHz 354 MHz Normal applications High Sampling Rate applications High Complexity algorithm 0.9 V 1.0 V
Low Power Mode
110 MHz
Ultra Low Power

Always-on features
0.8V
Normal Mode
Turbo Mode
224 MHz
354 MHz
Normal applications
High Sampling Rate applications

High Complexity algorithm
0.9 V
1.0 V
Figure  7 1 .  MT6797  DSP Dynamic Voltage Table
   We have three DSP clock rate  in  MT6797 , if your application can be run at 110MHz, there is  a  large power savings for the whole system .  We don’t have automatic DVFS to detect current DSP loading and adjust the voltage automatically .  What we do is to register a frequency requirement  table for   a  specified application. When the application starts, a provided API should be called to notify the system. Besides, it also needs to call another API to notify the system when it is stopped. The system will adjust the voltage according  to the sum of clock rate requirement for active  applications.  
  Since the enable and  disable  of a function is triggered from the application processor, the judgement of what clock rate is more suitable for current scenario is done by the application processor.
Implementation
R egistration
kernel-3.18 / drivers/misc/mediatek/scp/ [project] /scp_helper. h.
kernel-3.18 / drivers/misc/mediatek/scp/ [project] /scp_helper. c
typedef enum {
    VOW_FEATURE_ID= 0,
    OPEN_DSP_FEATURE_ID,
    SENS_FEATURE_ID,
    MP3_FEATURE_ID,
    FLP_FEATURE_ID,
    RTOS_FEATURE_ID,
    NUM_FEATURE_ID,
} feature_id_t;

static scp_feature_table_t feature_table[] = {
    {
        .feature    = VOW_FEATURE_ID,
        .freq            = 80,
        .enable     = 0,
    },
    {
        .feature    = OPEN_DSP_FEATURE_ID,
        .freq            =  270 ,
        .enable     = 0,
    },
    {
        .feature    = SENS_FEATURE_ID,
        .freq            = 84,
        .enable     = 0,
    },
…….
…….
};

First, the feature ID should be added to the feature id table. Then the clock rate requirement of the specified application should also be provided.

Function Prototype
void register_feature(feature_id_t id);
void deregister_feature(feature_id_t id);
When an application is enabled to run, it must call resiger_feature function first to notify the system. The clock rate of the application will be added to the current total clock rate requirement. The system will then adjust the frequency of CPU. When the application is disabled, the deregister_feature should be called so that the system won ’ t consume unnecessary power.
DSP Binary (Build Command and Download)
Configuration
   There is an automatic compile dependency check between  “ PROJECT_CONFIG ”  of AP and  “ CFG_PROJECT_CONFIG ”  of DSP. They should be the same value. If there is a global configuration named  “ FOO ” , and there is a dsp configuration named  “ CFG_FOO ” , only the following three conditions are allowed.
tinysys_config.h entry
Global ProjectConfig.mk
#define CFG_FOO
FOO = yes
/* CFG_FOO is not set */
FOO = no
#define CFG_FOO VAL
FOO = VAL
Build Command
Environment Initialzation
$ . build/envsetup.s h ………………………………… required only once
$ lunch full_<PROJECT>-eng ……………………… re-run this command to switch to other projects.
Full Android Build
$ mosesq make -j24
Module Build for DSP
$ mosesq make  tinysys-scp  -j24
Fast Module Build for DSP
$ vendor/mediatek/proprietary/tinysys/freertos/source/tools/build_ts.sh    
Built Binary
Built DSP Binary Location
out\target\product\ [project] \obj\TINYSYS_OBJ\tinysys-scp_intermediates\freertos\source\CM4_A\tinysys-scp-CM4_A.bin
Check the  modified  time of the binary if you wanna make sure the binary is updated
Update DSP binary  by Fastboot
$  adb reboot bootloader   …………………..  Put the device in fastboot mode
$  flashboot.exe scp1 tinysys-scp.bin   ……………… ..Update scp1 from local tinysys-scp.bin
$  flashboot.exe scp2 tinysys-scp.bin   ………… scp2 is only for backup, same with scp1 in  MT6797
Update DSP binary by MTK Flashtool
Flashtool  can be used to download Android full load or update DSP binaries only. The following figure shows how to update DSP binaries only. The SCP2 is just a backup of SCP1, they are the same in  MT6797 .


Figure  7 2 .  Update DSP Binary by Flashtool
Code Release
Get Full Codebase
1. C ontact PM and sign an agreement
2. Get a FEX account (contact with the PM)
3. Request the code release
Special Modem Image Request
If you want to use the vendor ’ s voice call speech enhancement, we need to disable the MTK ’ s speech enhancement in the Modem Image. Since the modem image is binary released.  The customers need to request a modem image with the compile option:  “ OPEN_DSP_SPEECH_SUPPORT ”  first.
Aurisys Framework Class Diagram

Figure  7 3 .  Aurisys Framework Class Diagram
Software Patch Note
  The following table lists the issues and possible impacts. Please make sure you ’ ve applied the following patches.
Feature
ID
D escription
Voice Call
ALPS02562964
[Impact without patch] 
Sometimes there is no sound during a voice call
[Reproduced ratio] 
less than 1%
Voice Call
ALPS02739463
[Impact without patch] 
When the system is very busy (such as a VT call), sometime, it may cause a time out assertion.
Record and Aurisys AP side framework
ALPS02695374
Support Aurisys AP side framework and recording library

FAQ
SCP
A bbreviation  of System Control Processor. It is because there is some system control tasks are run in this DSP.
TinySys  
Our DSP system and peripherals.



---
# SRC0321 CS6799-XXX-UMD-V1.0EN_Aurisys_Development_Tutorial.docx

来源：DOC\X30\CS6799-XXX-UMD-V1.0EN_Aurisys_Development_Tutorial.docx

SHA-256：5bb980f423aa801a6b53353d9bae8df48508ddf7e9a7b7572a685966782c8037

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0321.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 正文（不对应打印页码） 1










Aurisys  Development Tutorial
User Manual
Customer  Support
MT6799



C S 6 79 9 - XXX - UMD - V1. 0 EN
V1. 0
2016-0 8 - 2 9
Internal
Doc No:
Version:
Release date:
Classification:


©  2016   MediaTek  Inc.
This document contains information that is proprietary to  MediaTek  Inc.
Unauthorized reproduction or disclosure of this information in whole or in part is strictly prohibited.

Specifications are subject to change without notice.



Keywords
User Manual


MediaTek  Inc.
Postal address
No. 1,  Dusing  1st Rd . ,   Hsinchu  Science Park,  Hsinchu  City, Taiwan 30078
MTK  support office  address
No. 1,  Dusing  1st Rd . ,  Hsinchu Science Park, Hsinchu City, Taiwan 30078
Internet
http://www. mediatek.com/










Document  Revision History
Revision
Date
Author
Description
V0.8
2015/12/31
Doug Wang
First Release
V 0.9
2016/1/21
Doug Wang
Add code release  partand  modify  dsp  build command
V0.9a
2016/3/28
Doug Wang
Add Software patch table
V 1.0
2016/08/09
Doug Wang
Add Library integration guidance in Application Processor; Record & VOIP Applications; XML Descriptor
V 1. 1
2017/03/15
HY
Add offload playback file  sturcture










Table of Contents
Document Revision History 3
Table of Contents 4
Lists of Tables 7
Lists of Figures 8
1 Overview 9
1.1 Abstract 9
1.2 Aurisys Aims 9
1.3 Aurisys Structure 10
1.4 DSP Capability 11
1.4.1 DSP Basics 11
1.4.2 Defalut DSP Feature Packages 12
1.4.3 DSP TCM 12
2 Getting Start with Aurisys 14
2.1 Comments 14
2.2 File Structure 14
2.2.1 DSP 14
2.2.2 Application Processor 15
2.3 Step by Step Integration Guide 15
2.3.1 Integrate Software IP in DSP 15
2.3.2 Integrate Software IP in Application Processor 18
3 Software Development Guidance 21
3.1 Software Interface Overview 21
3.2 Sound Processing Task Integration Guidance 21
3.2.1 ARSI-PROC 21
3.2.2 ARSI-PROC Functions 21
3.2.3 Example 23
3.3 Parameter Tuning Guidance 24
3.3.1 ARSI-PAR Usage 24
3.3.2 Communication based on Android Debug Bridge(adb) 25
3.3.3 ARSI-PAR Functions 26
3.3.4 Example 27
4 XML Descriptor for Aurisys 29
4.1.1 Example 29
4.1.2 Elements 31
4.1.3 Deployment 34
5 Debugging 36
5.1 Logging 36
5.1.1 Inside Software IP 36
6 Applications 37
6.1 Aurisys Features in MT6799 37
6.2 Voice Call 37
6.2.1 Data Path 37
6.2.2 Basic Information 39
6.2.3 Limitations 40
6.2.4 Configurations 40
6.2.5 Software Frameworks 41
6.3 Playback 42
6.3.1 Data Path 42
6.3.2 Scenarios 43
6.3.3 AP playback with post-processing 43
6.3.4 Configurations 44
6.3.5 DSP  offload playback 46
6.3.6 File Str u cture 47
6.3.7 Behavior 48
6.3.8 Functional Blocks 49
6.4 Sound Trigger 50
6.5 SmartPA 50
6.6 Record & VOIP 50
6.6.1 Data Path 50
6.6.2 Configurations 51
6.6.3 Application Processor Only 51
6.6.4 Class Diagram 51
6.6.5 Device Information 52
7 Appendix: Platform and Development Environments 54
7.1 Scenario Based DVFS 54
7.1.1 Implementation 54
7.2 Dynamic Objects Loading 56
7.3 DSP Binary (Build Command and Download) 57
7.3.1 Configuration 57
7.3.2 Build Command 57
7.3.3 Built Binary 57
7.4 Code Release 58
7.5 Aurisys Framework Class Diagram 59
7.6 Software Patch Note 59
7.7 FAQ 60


Lists of Tables
Table 3 1. Adb command table 25
Table 3 2.Command argument table 25


Lists of Figures
Figure 1 1. Concept of Aurisys 9
Figure 1 2. Aurisys Structure 10
Figure 1 3. MT6799 DSP Overview 12
Figure 1 4. MT6799 DSP TCM Size Configurations 13
Figure 3 1. Parameter Path 24
Figure 4 1. Relationship between Scene Handler, Scenario Descriptor, and Library Descriptor 34
Figure 6 1. Aurisys Default Features in MT6799 36
Figure 6 2. Hand-Held Mode Voice Call Data Path 37
Figure 6 3. Hand-Free Mode Voice Call Data Path 38
Figure 6 4. Software Frameworks of Voice Call 40
Figure 6 5. Offload Audio Playback 41
Figure 6 6. Functional Blocks of Offload Playback 43
Figure 6 7. Record & VOIP 44
Figure 6 8. Aurisys Class Diagram for Record & VOIP 45
Figure 7 1. MT6799 DSP Dynamic Voltage Table 48
Figure 7 2. MT6799 DSP Dynamic Loading Concept 50
Figure 7 3. Update DSP Binary by Flashtool 52
Figure 7 4. Aurisys Framework Class Diagram 53




Overview
Abstract
   The requirement for sound quality enhancements that add listening pleasure has been increasing. To enrich the listening experience of using mobile devices, there  is  an increasing number of sound processing solutions provided by vendors.  
   Aurisys  is introduced to facilitate the sound processing solution development and use of MTK platforms.  Aurisys  is a framework constructed upon Android Audio Framework. It includes standardized interfaces for sound processing and tuning, integrated DSP sound subsystem, and software debug interface.  This concept of  Aurisys   will be  briefly described in this document.
Aurisys  Aims
     As the following figure depicts, our  target  is  to make the replacement/integration of vendor IPs  as convenient as possible . We defined a standardized interface to which is platform-independent, so that the software can be re-used.  By following the user interface standards we crea te a more consistent experience  for the developers.  

Figure  1 1 .   Concept of  Aurisys

Aurisys  Structure
 
Figure  1 2 .   Aurisys  Structure
  As depicted in above figure, the  Aurisys  structure contains Scene Handler, Library Manager,  integrated DSP  framework, Modem/Audio HW subsystems, and  standardized  software interfaces:
Aurisys  Scene Handler (ARSH)
The  Aurisys   Scene Handler  is created as the middleware between the audio system and the sound processing IPs.   It  is  created scene by scene. For example, the  Aurisys  Playback Handler is served for playback effects in the scene of  playback .  It provides interfaces to call the corresponding IPs  and manages the IPs.
Aurisys   Library Manager  (ARLM)
The  Aurisys  Library Manager maintains the  library  information of  each  Aurisys   Scene Handler. It contains the list and status of sound IPs.
Aurisys  Software Interface ( ARSI )
ARSI is the a bbreviation  of  Aurisys  Software Interface. It  is provided for interfacing with sound enhancing tasks . To process sounds, a unified interface which is portable between MTK  platforms  is provided. The interface to parse and transmit parameters between PC tool, APMCU, and DSP is also included.  The interface is designed for ease of use while being general enough so that new algorithms can be easily added to the existing frameworks. The difference between ARSI and ARSH is that ARSI provides interface between ARSH and sound IPs; while ARSH provides interface for Android Audio HAL to request for processing sounds. 
Modem
The modem means the modem IC. The MTK internal chipset contains a DSP to process voice enhancement and voice codec. In  Aurisys  structure, we disable the voice enhancement, but reserve codec in modem IC so that we can just add algorithms in the integrated open DSP in the Application side.
Audio HW
It refers to the interface between processors and HW devices to transfer sound data. The devices  include speakers , microphones, earphones, BT devices, USB devices,  etc. 
DSP Capability
DSP Basics
The basic information about DSP is summarized as follows:
Integrated open DSP support.  The  embedded processor is  ARM Cortex™-M4  processor  
Dual CortexM4 DSPs, one is for sensor hub, and the other is for audio
Floating-Point-Unit supported
The internal SRAM of DSP is 768 KB
Share with sensor hub DSP. The memory allocation should be  terminated  in compile time. For example, it we allocate 256KB for CM4_A, and 512KB for CM4_B. CM4_B can ’ t use the 256KB of CM4. The allocation can ’ t be changed run-time.
T he memory are divided into 128KB per unit
CM4_A is sensor hub DSP and CM4_B is audio DSP
Maximum clock rate reaches 416 MHz
No cache support
Programmable DMA (burst of 4 by 16-bit) for DSP supported to transfer data to/from external memory
Not suggest to access external memory by the processor directly, it may cause unexpected problems. Please use DMA for large quantity of data transfer and just use IPI (inter-processor-interrupt) for  the  transfers  of small data volumes.
The DSP can access audio registers, internal memory of audio hardware, and voice data from the modem side during a voice call.
We ’ ve provided an API to trigger DMA, please use polling mode, not to use interrupt mode in MT6799
FreeRTOS  has been adopted as the supported operating
Communicate with Application processor by IPI (inter-processor-interrupt);  There  are 48 bytes data can be transferred by share memory by one IPI.
Dynamic loading of code is not supported
Clock rate can be switched between 82/165/330/416 MHz according to requirements of applications 
Notice that the Free-RTOS exists in both Sensor and Audio DSPs

Figure  1 3 .   MT6799 DSP Overview
Defalut  DSP Feature Packages
  We don ’ t support cache in the DSP, so the features support in DSP may be limited due to lack of  TCM( tightly coupled memory ) of DSP. To reuse the TCM, we support dynamic loading of code. It adds the ability to  exclusively    support  features. For example, the sound trigger wouldn ’ t be enabled during a phone call. So we can download speech enhancement to DSP TCM during a call, and download sound trigger when the call ends. However, due to the downloading spends more than  100ms,  we don ’ t suggest to support two features in one scene and dynamic download each feature frequently.
  We support mp3 decoder, sound trigger, and speech enhancement during a phone call by default. The sum of these features already exceeds the DSP TCM size. So we treat speech enhancement as one dynamic object, and mp3+sound trigger as another dynamic object (because sound trigger can be supported during mp3 playback). We download the speech enhancement object to DSP when a phone call happens and download the mp3+sound trigger object when the call ends. Customers can also replace the mp3 decoder, sound trigger library, and the speech enhancement with their own SWIPs.
     DSP TCM
   There's 768KB SRAM shared by the DSPs.   However, the memory can't be dynamic ally  allocate d  to the DSP in the run time .  It must be decided in the  sytem  boot up time.  The following table  shows    that   the memory are divided into 128KB per unit.  Besides,  due to the HW limitation, the maximum is 640 KB and the minimum is 128KB for each DSP.   Without sensor hub and deduct the usage of  RTOS ( around 50KB) , we have only around 590KB for audio.

Figure  1 4 .   MT6799 DSP TCM Size Configurations

Getting Start with  Aurisys
Comments
  We  annotate  our code with  Doxygen  style comments  which  are used to provide documentation in-line .  Before each function , we  put a comment block giving at  least :
@brief:  a brief description
@ param :  descri be all of the parameters to  the  function
@return: return value
After the return information, there is a  detailed description of the function (optional).
Example: 
/**
******************************************************************************
 *  @brief Query the size of the working buffer
 *
 *  @ param   p_arsi_task_config  the task configure
  *  @ param   p_working_buf_size  the working buffer size.
 *
 *  @return  lib_status_t
******************************************************************************
 */
  T h is  function is used to get the working buffer size  for a Software IP.  p_arsi_task_config  contains a particular  configuration for the algorithm;  p_working_buf_size  updated by the Software IP indicates the required memory size under the specified configuration. The return information indicates if there is any unexpected error occurs.
File Structure
DSP
   The root folder of DSP is located at  vendor/ mediatek /proprietary/ tinysys / freertos /source .
Path
File
D escription
project/CM4_ B / mt6799 /platform
platform.mk
Project configurations (common)
project/CM4_ B /mt679 9 /[project]
ProjectConfig.mk
Project configurations (specific project)

CompilerOption.mk
Project specific compile options
middleware/lib/ aurisys / interface
  arsi_api. h
Aurisys  Software Interface

arsi_api_version.h


arsi_call_type.h


arsi_library_entry_points.h


arsi_type.h


audio_task.h


wrapped_audio.h


wrapped_errors.h

drivers/common/audio/task/ 
audio_task_interface.h
Define audio task structure and status 

call/   audio_do_call.c


Aurisys  phone call common driver

call/   audio_shared_tcm.c


call/   audio_shared_tcm. h


call/   audio_speech_msg_id.h


call/   audio_task_phone_call.h

drivers/common/audio/hardware
audio_irq.h
H eader file of  audio_irq.c

audio_hw.h
H eader file of   Audio hw operating function s
drivers/common/audio/framework
audio_task_factory.c
Audio task service

audio_messenger_ipi.c
I nterrupt handler to handle message from AP

audio.c
Audio init/de-init entry functions
drivers/CM4_B/mt6799/audio/ tasks
call  /   audio_task_phone_call.c
Audio  phonecall  platform driver
drivers/CM4_B/mt6799/audio/ hardware
audio_irq .c
Register  irq  handler and request  irq

audio_hw.c
Audio hw operating functions

audio_hw_reg.h
Define platform related audio hw register
Application Processor
Path
File
description
d evice / mediatek /[project]
ProjectConfig.mk
Project configurations of AP
/device/ mediatek / [project] / aurisys_param
*.dat
Parameter file
/vendor/ mediatek /proprietary/external/ aurisys
*.so, *.xml
Parser library and Processing library (if in Application processor); XML Descriptor file
Vendor / mediatek / proprietary / hardware / audio / common / aurisys
aurisys_config_parser.c /  aurisys_controller.c /  aurisys_lib_handler.c /
aurisys_lib_manager.c
Aurisys  services
/v endor / mediatek / proprietary / hardware / audio / common / V3 / aud_drv
AudioA LSA XXXHandler.cpp
Scene Handler 
Step by Step Integration Guide
  Before looking deep into  Aurisys ,  we provide step-by-step guidance on how to  integrate your program into  Aurisys . It can be  separated  into two conditions: 1) Add or replace a SWIP in DSP; 2) Add or replace a SWIP in Application processor. We ’ ll take the integration of a voice call SWIP as an example of adding a SWIP in DSP. Note that the addition or replacement of a SWIP is based on an existing driver-ready scene of  Aurisys . 
Integrate Software IP in DSP
Integration of a Voice Call SWIP (as example)
  Configurations
DSP Configurations 
Common Configurations
The platform  Makefile  path:  / project / CM4_ B /[project]/ platform /platform.mk
The  CFG_AUDIO_SUPPORT  is a compile option for audio  framework,  it will be enabled if there is at least one audio application is enabled.
Project Specific Configurations
The file  “ / project / CM4_ B /[ project]/[project]/ ProjectConfig.mk ”  is used to enable or disable a feature for a specified project.  CFG_MTK_AURISYS_PHONE_CALL_SUPPORT  should be set as  “ yes ”  to enable voice call application in DSP. Besides,  CompilerOption.mk  is used for adding project specific compile options.
Heapsize  Adjustment
The data memory can be managed by  malloc  functions. However, we need to define  a   appropriate  heap size first. The default heap size for all projects is defined in the following file  / project / CM4_ B /[ project]/ platform /   platform.mk . Then find the follow definition 
ifeq  ($(CFG_MTK_AURISYS_PHONE_CALL_SUPPORT),yes)
CFLAGS += - DconfigTOTAL_HEAP_SIZE ='( (  size_t  ) ( 275 * 1024 ) )'
else  ifeq  ($(CFG_MTK_AUDIO_TUNNELING_SUPPORT),yes)
CFLAGS += - DconfigTOTAL_HEAP_SIZE ='( (  size_t  ) ( 165 * 1024 ) )'
else  ifeq  ($(CFG_MTK_SPEAKER_PROTECTION_SUPPORT),yes)
CFLAGS += - DconfigTOTAL_HEAP_SIZE ='( (  size_t  ) ( 165 * 1024 ) )'
else
# default heap size
CFLAGS += - DconfigTOTAL_HEAP_SIZE ='( (  size_t  ) ( 60 * 1024 ) )'
endif
We can also override the definition for a specific project in CompilerOption.mk mentioned above. Use the following definition to override the default heap size:  CFLAGS += - DconfigTOTAL_HEAP_SIZE =' ( (   size_t  ) ( 180 * 1024 ) )' .
AP Configurations
Projet  Configurations
The file  “ d evice / mediatek /[ project]/ ProjectConfig.mk ”  is used to enable or disable a feature for a specified project of application processor. Set MTK_AURISYS_PHONE_CALL_SUPPORT as  “ yes ” . Notice that there is an automatic compile dependency check between  “ PROJECT_CONFIG ”  of AP and  “ CFG_PROJECT_CONFIG ”  of DSP. They should be the same value.
Clock rate  requirement  
We don’t have automatic DVFS to detect current DSP loading and adjust the voltage automatically .  What we do is to register a frequency requirement  table for   a  specified application. When the application starts, a provided API should be called to notify the system. Besides, it also needs to call another API to notify the system when it is stopped. The system will adjust the voltage according  to the sum of clock rate requirement for active  applications . The value of clock rate requirement should be  estimated  precisely and then modify the corresponding  valuethe  following file: 
kernel- 4 . 4 / drivers/misc/ mediatek / scp / v02 / scp_feature_table.c .  Note that the  feature  ID: OPEN_DSP_FEATURE_ID is for voice call of  Aurisys .
static  scp_feature_table_t   feature_table [] = {
    {
……
……
    {
        .feature    = OPEN_DSP_FEATURE_ID,
        .freq            =  356 ,
       .core          = SCP_B_ID ,
        .enable     = 0,
    },
…….
…….
};
Software IP Development 
Delveop  with ARSI
Follow ARSI and implement the functions defined in  arsi_api. h . The detailed description of ARSI is in the next chapter.
DSP Binary
Build Command
Notice that the Android build environment is required. The build  commands is  listed as follows:
$ . build/envsetup.sh
$ lunch full_<PROJECT>-eng
$  mosesq  make -j24      (full Android Build)
$  mosesq  make  tinysys-scp  -j24    (build DSP only)
$ vendor/mediatek/proprietary/tinysys/freertos/source/tools/build_tinysys.sh clean   ( clean )
vendor/mediatek/proprietary/tinysys/freertos/source/tools/build_tinysys. sh     (clean build DSP)
Built DSP Binary Location
The built DSP binary is located in the following path:
o ut / target / product / [project] / tinysys-scp.bin
If build CM4_A or CM4_B individually, you can find the binary in the path:
out\target\product \[ project]\obj\TINYSYS_OBJ\tinysys-scp_intermediates\freertos\source\CM4_B\
Push DSP Image to the Device
MTK  Flashtool  can be used to download a full load or update DSP  binary  only.  There is also an open source tool  “ Fastboot ”  can be used to update DSP binary only. The command is:
$  adb  reboot  bootloader     (put the device in  fastboot  mode)
$  flashboot.exe scp1 tinysys-scp.bin   (update scp1 from local tinysys-scp.bin)
$  flashboot.exe scp2 tinysys-scp.bin  
Parameter Management
Parameter File
The parameters of different modes are gathered into a file. To get the maximum flexibility of use, the format of the parameter file is defined by the 3 rd  Parties  themselves . The file should be placed in the following path:  /vendor/ mediatek /proprietary/external/ aurisys / .  Then the parameter files are parsed by the 3 rd  Party parameter parsing library to get required parameters
Parser Library
Development
Follow ARSI and implement the functions defined in  arsi_api. h  to develop the parser library.  Notice that both 32-bit library and 64-bit library are required. The built *.so would be placed in  vendor/ mediatek /proprietary/external/ aurisys / lib_speech_enh
Tool Development
The connection between the PC tool and the mobile device is through USB and the communication is based on  adb  commands.   We ’ ve defined a series of  adb  commands. The software IP providers can design their own PC tools which can communicate with the mobile devices without  making changes to the legacy code  of the MTK platforms. The detail information can be found in the next chapter.
Brief Summary
1. Configurations
a) Enable  Aurisys  phone call supporting configurations in both Application processor and DSP.
b) Adjust  heapsize  of DSP
b) Estimate clock rate requirement and modify the value …… ………… . .reference to [ 7.1 ]
2. Software IP Development
a) Implement the functions in ARSI …… ………… . .reference to [ 3.2 ]
b) Build DSP binary only or build full load (include application processor)   … reference to  [  7.3 ]
c) Update DSP binary by  Fastboot  or  Flashtool , or update full  Anroid  load by  Flashtool … reference to  [  7.3 ]
3. Parameter Management …… ………… . .reference to [ 3.3.3 ]
a ) Define own parameter file format
b) Implement Parameter Parser Library
4. Tool Development …… ………… . . reference to  [ 3.3.2 ]
a) Develop a PC tool. The communication between the  device  is based on  adb  commands
Integrate Software IP in Application Processor
Integration of a Record SWIP (as example)
Configurations
AP  Configurations 
As mentioned above,   t he file  “ d evice / mediatek /[ project]/ ProjectConfig.mk ”  is used to enable or disable a feature for a specified project of application processor.  To enable  Auisys  framework in the  application  processor, please set  MTK_AURISYS_FRAMEWORK_SUPPORT   as  “ yes ” .  If this configuration is set as “no”,   we still support MTK  proprietary library in the original framework. However, it doesn ’ t support the XML descriptor mentioned later or support  aurisys  interface. It will be hard to replace the proprietary library with vendor ’ s library.
Processing and Parser Library
Please refer to the parser library part of integrating software IP in DSP mentioned above. The only difference is that the processing library also exists in the application processor and you can merge processing and parser capabilities in the same library.
Besides, even the integration  is  complete,   you may still need to do some experiments. By using the  adb  command  “ adb  push xxx.lib /system/lib ” ,  It  is allowed to replace the library without re-compiling the image.
XML Description File
File Path:   /vendor/ mediatek /proprietary/external/ aurisys / aurisys_config .xml
The  Aurisys  XML Descriptor is a simple XML-file that specifies the library version number, attribute, parameter path, and optionally other information.  It contains the library descriptor and  scenario  descriptor. The library descriptor is used to describe the library name, path, attributes. The scenario  descriptor  is used to specify which libraries would be applied in that scenario. The detailed description of XML  descriptor  is shown in the  “ XML Descriptor for  Aurisys ”  chapter.
Besides, i t is worth to be mentioned  that you can also replace the XML descriptor by  a   adb  command during development stage. The command is  “ adb  push aurisys_config.xml /system/etc ”
Aurisys  Framework Modifications
Assign a Scenario to the Scene Handler
As mentioned above, a scenario  descriptor  in XML is used to describe which libraries will be applied in that scenario. Moreover, a scene handler  is created as the middleware between the audio system and the sound processing IPs.  For example, t he record handler is served for a record scene . We need to assign a scenario to the record scene handler that the specified scenario will be applied during recording. To specify a scenario to the record scene handler, please find the following file:  “ vendor/ mediatek /proprietary/hardware/audio/common/V3/ aud_drv /  AudioALSACaptureDataClientNormal .cpp ” . Then modify the scenario in the constructor:
AudioALSACaptureDataClientNormal:: AudioALSACaptureDataClientNormal( …… )
{
    char *scenario = " xxx_record_scenario ";    //the scenario name
}
Link library
All libraries should be linked first. It is required to let the system be aware of which libraries would be linked. Here used dynamic linking for separating the dependency between  framewok  and libraries.   The library should implement the declared    function pointer assignment interface in the following file: “external/ aurisys /interface/ a rsi_libary_entry_points.h ”
void  dynamic_link_arsi_assign_lib_fp ( AurisysLibInterface  *lib);
To l ink the library by calling the unique fun ction defined. Please  depict your implemented library path in  /vendor/ mediatek /proprietary/external/ aurisys /aurisys_config.xml
The framework will dynamically open library and link the  arsi   library  callback function during initialization stage. The function implementation in  library  look s like below   example  :  
void  dynamic_link_arsi_assign_lib_fp ( AurisysLibInterface  *lib)
{
    lib-> arsi_get_lib_version  =  audioloud_arsi_get_lib_version ;
    lib-> arsi_query_working_buf_size  =  audioloud_arsi_query_working_buf_size ;
    lib-> arsi_create_handler  =  audioloud_arsi_create_handler ;
    …
}

Set a Keyword for Set/Get Parameters
As mentioned, we’ve defined a series of  adb  commands for tuning and updating parameters. It needs to be aware of which libraries should be called to update the parameters. Thus, we need to define the keyword  first,  we define the keyword in xml file,  libray   config  part. The  xml  field “ adb_cmd_key  = XXX” indicates the using keyword for the library
Brief Summary
1. Configurations
a) Enable  MTK_AURISYS_FRAMEWORK_SUPPORT  configurations in  the project configuration file .
2. Software IP Development  and Parameter Management
a) Implement the functions in ARSI …… ………… . .reference to [ 3.2 ]
b ) Define own parameter file format   …… ………… . .reference to [ 3.3.3 ]
c ) Implement Parameter Parser Library
         d )  Place the library in  vendor/ mediatek /proprietary/external/ aurisys   and modify  the related  M akefile
3 .  XML Descriptor …… ………… . . reference to [ 4 ]
a )  Add a library descriptor about the specified library
b )  Add a scenario descriptor to apply the library in that scenario
4.  Aurisys  Framework Modifications …… ………… . . reference to [ 2.3.2.1 ]
a )  Assign a scenario defined in the XML descriptor to the specified scene handler
5 . Tool Development …… ………… . . reference to  [ 3.3.2 ]
a) Develop a PC tool. The communication between the  device  is based on  adb  commands
Software  Development  Guidance
Software Interface Overview
  ARSI consists of the following components: ARSI-PROC and ARSI-PPAR. ARSI-PROC  defines generic interfaces for processing sounds which is portable to MTK platforms, regardless of DSP or MCU.  ARSI-PAR defines  API for parsing parameters. It provides programming interface to parse and transmit parameters between PC tool, APMCU, and DSP. Tuning and applying parameters by scen e s can also be achieved.
Sound Processing Task Integration Guidance
ARSI-PROC
  It  defines generic interface s  for processing sounds which is portable to MTK platforms, regardless of DSP or MCU.   The  interfaces include: Updating parameters and device information; Querying IP information (such as memory usage);  Changing  mode; Processing sounds. The interfaces are consistent among different processors. The software could be portable to reduce the design effort significantly. They are also consistent among different activities so that they can be widely used in many applications, such as playing, recording, voice call, and sound enhancing.
ARSI-PROC Functions
Functions
Description  
arsi_query_working_buf_size
Query the size of the working buffer
arsi_create_handler
Create handler and initialize it
arsi_process_ul_buf
Processing microphone/uplink data
arsi_process_dl_buf
Processing playback/downlink data
arsi_destroy_handler
D einitialize  handler and destroy it (no need to free the working buffer)
arsi_reset_handler
R eset handler to init state
arsi_update_device
Update task device info
arsi_update_param
Update speech enhancement parameters
arsi_set_ul_digital_gain
S et uplink digital gain
arsi_set_dl_digital_gain
S et downlink digital gain
arsi_set_ul_mute
M ute/ unmute  uplink
arsi_set_dl_mute
M ute/ unmute  downlink
arsi_set_ul_enhance
E nable/disable uplink enhancement function
arsi_set_dl_enhance
E nable/disable downlink enhancement function
arsi_set_debug_log_fp
S et debug log print callback function
  We ’ ll introduce ARSI-PROC functions here and provide examples. Notice that we won ’ t provide detailed descriptions of all ARSI-PROC functions. Please refer to the interface document generated by  doxygen .
arsi_process_ul_buf
   Processing microphone/  voice  uplink data
Prototype:
lib_status_t   arsi_process_ul_ buf ( audio_buf_t    * p_ul_buf_in ,     audio_buf_t      * p_ul_buf_out ,     audio_buf_t      * p_aec_buf_in ,   const uint32_t   delay_ms , void * p_handler , void   * arg );
Parameters:
Parameters
Description  
* p_ul_buf_in
microphone/uplink data to be processed   buffer arrangement: chunks of audio destined for different channels => mic1(1 frame  sz ) + ... +  micN  (1 frame  sz )
* p_ul_buf_out
the processed microphone/uplink data
* p_aec_buf_in
the AEC reference data
delay_ms
delay time(ms) for AEC
* p_handler
handler of speech enhancement
* arg
reserved field  (can be used for extension)
Return value:
lib_status_t , the status of library
arsi_process_dl_buf
Processing playback/ voice  downlink data
Prototype:
lib_status_t   arsi_process_dl_ buf ( audio_buf_t   * p_dl_buf_in ,   audio_buf_t   * p_dl_buf_out ,    void  * p_handler , void   * arg );
Parameters:
Parameters
Description  
* p_dl_buf_in
the playback/downlink data to be Processed
* p_dl_buf_out
the processed playback/downlink data
* p_handler
handler of speech enhancement
* arg
reserved field  (can be used for extension)
Return value:
lib_status_t , the status of library
Example
I nit ()
{
……
    arsi_create_handler (& arsi_task_config , NULL/*& param_buf */, & working_buf ,
                        & arsi_handler );
     arsi_set_debug_log_fp ( myprint ,  arsi_handler );

     arsi_set_ul_digital_gain (0, 0,  arsi_handler );
     arsi_set_dl_digital_gain (0, 0,  arsi_handler );
     arsi_set_ul_mute (0,  arsi_handler ); // no  bool .... 0: false, 1: true
     arsi_set_dl_mute (0,  arsi_handler ); // no  bool .... 0: false, 1: true
     arsi_set_ul_enhance (1,  arsi_handler ); // no  bool .... 0: false, 1: true
     arsi_set_dl_enhance (1,  arsi_handler ); // no  bool .... 0: false, 1: true
……
}

P rocess()
{
……
    const uint32_t  aec_delay_ms  = 40;
    if ( modem_data_handshake  == MODEM_UL_DATA) {
       arsi_process_ul_buf (   & ul_buf_in ,    & ul_buf_out ,    & aec_buf_in ,     aec_delay_ms ,    
                                              arsi_handler ,    (void *)& extra_call_arg );
   }
    else if ( modem_data_handshake  == MODEM_DL_DATA) {
       arsi_process_dl_buf (   & dl_buf_in ,    & dl_buf_out ,     arsi_handler ,    (void *)& extra_call_arg );
   }
……
}
Parameter Tuning Guidance

Figure  3 1 .   Parameter Path
ARSI-PAR Usage
  For  a software  IP, the parameters may be variant in different scenes or situations.  To ease of reference ,   The  parameters are gathered into a file. To get the maximum flexibility of use, the format of the parameter file is defined by the 3 rd  Parties  themselves . The ARSI-PAR is designed  for parsing parameters  for specified scenes. It  provides  the  interface to transfer parameter file to the 3 rd  party library.
   Tool Development /  Connection
The connection between the PC tool and the mobile device is through USB and the communication is based on  adb  commands. We define a series of  adb  commands which include transmitting the whole parameter file to the device, receiving whole parameter file from the device, transmitting specific data to the device, and receiving specific data from the device. The software IP providers can design their own PC tools which can communicate with the mobile devices without  making changes to the legacy code  of the MTK platforms.

Parsing
To get the maximum flexibility of use, the format of the parameter file is also defined by the 3 rd  Parties  themselves . We only provide the interface to transfer parameter file to the 3 rd  Party Library. Thus, the 3 rd  Parties need to implement the parameter parsing library. 

Tuning/ Extraction
During  parameters  tuning, the PC tool updates the parameter file to the mobile device and then the parameter files are parsed by the 3 rd  Party parameter parsing library to get required parameters. The parameters will then be transferred to the 3 rd  Party processing library for processing sounds.  Besides, when the mode changes (for example, the output device changes from headphone to speaker), we need to extract the parameters of the specified mode and the parsing library will be called.
Communication based on  Android Debug  Bridge ( adb )
Table  3 1 .   Adb  command table
Command
Comments
adb  shell " AudioSetParam   AURISYS_SET_P ARAM,$target,$scene,$lib,$cmd  $mode = SET ”
Used to update parameter file and apply parameters to the library
adb  shell  “ AudioSetParam   AURISYS_GET_PARAM,$target,$scene,$lib,$cmd ”
Used to query current parameter setting. Query the value of a specified address and query the whole parameter file are allowed.

Table  3 2 . Command argument table
Argument
Example
Comments
$target
DSP, HAL
The processing API maybe either in AP or in DSP
$scene
PHONE_CALL, PLAYBACK, RECORD
Specify a scene, the information will be used as an argument of the parser function
$lib
library name
The library should be specified since there  maybe  several libraries added to the  Aurisys
$mode
Enhancement  mode
Enhancement mode. IP provider can provide different  enhancement  for user to select what they want. The mode should be an integer. Only used in APPLY_PARAM command
$ cmd  
( for  URISYS_SET_PARAM )
PARAM_FILE, param_path
set  parameter file path

APPLY_PARAM
apply  new  param  during playback/phone call/...

ADDR_VALUE, addr,value
set “ value”  at the  “ addr ”  in library

KEY_VALUE, key,value
set " value " of the " key " in library ,  “ key ”  can be defined by the library itself
$ cmd  
( for  URISYS_ G ET_PARAM )
PARAM_FILE
return  param_path

ADDR_VALUE, addr
return the value at the address  “ addr ”  in library

KEY _VALUE, key
return the value at the  “ key ”  in library
  The examples are listed as follows:
adb  shell " AudioSetParam   AURISYS_SET_PARAM,DSP, RECORD , M yLib ,PARAM_FILE ,/ data / d .dat =SET"
set  param eter file  path: /data/ d .dat  and establish the connection between  MyLib  and the parameter file
adb  shell " AudioSetParam  AURISYS_SET_PARAM,DSP,PHONE_CALL, MyLib ,APPLY_PARAM ,2 =SET"
apply  new param eters   for record scene, the enhancement mode is 2
adb  shell " AudioSetParam  AURISYS_SET_PARAM,DSP, RECORD , MyLib ,ADDR_VALUE,0x1234,0x5678=SET"   set value 0x5678  at the address 0x1234 in  MyLib
adb  shell " AudioSetParam   AURISYS_SET_PARAM,DSP, RECORD , MyLib ,KEY_VALUE, MyKey , M y V a ue l =SET"
set  value " MyValue "  to  the key " MyK ey " in  MyL i b
adb  shell " AudioSetParam   AURISYS_GET_PARAM,DSP,PHONE_CALL, MyLib ,PARAM_FILE "
return   param_path  of  MyLib
adb  shell " AudioSetParam  AURISYS_GET_PARAM,DSP,PHONE_CALL, MyLi ,ADDR_VALUE,0x1234"
return  the value at the address 0x1234 in  My lib
adb   shell " AudioSetParam   AURISYS_GET_PARAM,DSP,PHONE_CALL, MyLib ,KEY_VALUE, MyK ey "
return   the value of the key " M y Key " in  My lib
ARSI-PAR Functions
   Functions
Description  
arsi_query_param_buf_size
Query the buffer size to keep speech enhancement parameters(single mode), Implemented in HAL only
arsi_parsing_param_file
Parsing  param  file to get parameters into  p_param_buf (single mode), Implemented in HAL only
arsi_set_addr_value
Set value at a specified address
arsi_get_addr_value
Get value from the specified address
arsi_set_key_value_pair
set  key_value  string to library
arsi_get_key_value_pair
get  key_value  string from library
arsi_get_lib_version
G et the library version 
  We ’ ll introduce ARSI-PAR functions here and provide examples. Notice that we won ’ t provide detailed descriptions of all ARSI-PAR functions. Please refer to the interface document generated by  doxygen .
arsi_query_param_buf_size
  Query the buffer size to keep speech enhancement  parameters( single mode), Implemented in HAL  only
Prototype:
lib_status_t   arsi_query_param_buf_ size (   const  arsi_task_config_t   * p_arsi_task_config ,   const  string_buf_t         * platform_name ,   const  string_buf_t   * param_file_path ,   const  int   enhancement_mode ,   uint32_t   * p_param_buf_size );
Parameters:
Parameters
Description  
* p_arsi_task_config
the task configure
* platform_name
the platform name by " adb  shell  getprop   ro.product.model "
* param_file_path
the speech enhancement  param  file ( fullset )
enhancement_mode
the speech enhancement mode by  apk
* p_param_buf_size
H ow much memory size  required  to keep the enhancement   parameters for the specific device/mode
Return value:
lib_status_t , the status of library
arsi_parsing_param_file
   Parsing  param  file to get parameters into  p_param_ buf ( single mode) ,  Implemented in HAL  only
Prototype:
   lib_status_t   arsi_parsing_param_ file (   const  arsi_task_config_t   * p_arsi_task_config ,   const  string_buf_t   * platform_name ,    const  string_buf_t   * param_file_path ,    const  int   enhancement_mode ,     data_buf_t   * p_param_buf );
Parameters:
Parameters
Description  
* p_arsi_task_config
the task configure
* platform_name
the platform name by " adb  shell  getprop   ro.product.model "
* param_file_path
the speech enhancement  param  file ( fullset )
enhancement_mode
the speech enhancement mode by  apk
*   p_param_buf
the buffer pointer   of  the parameters for the specific device/mode
Return value:
lib_status_t , the status of library
Example
void *handle =  dlopen ( lname , RTLD_NOW);
……
     arsi_query_param_buf_size_t   fvsoft_arsi_query_param_buf_size  =
        ( arsi_query_param_buf_size_t ) dlsym (handle, " arsi_query_param_buf_size ");
……
     arsi_parsing_param_file_t   fvsoft_arsi_parsing_param_file  =
        ( arsi_parsing_param_file_t ) dlsym (handle, " arsi_parsing_param_file ");
……
     fvsoft_arsi_query_param_buf_size (& mArsiTaskConfig , & platform_name , & file_path ,
                                                                     0, & param_buf_size );

     memset ( param_buf.p_buffer , 0,  param_buf.memory_size );
     fvsoft_arsi_parsing_param_file (& mArsiTaskConfig , & platform_name , & file_path , 
                                                              0,   & param_buf );
    ……
    /* set speech  param  to SCP */
     pIPI -> sendIpiMsg (TASK_SCENE_PHONE_CALL,
                     AUDIO_IPI_DMA, AUDIO_IPI_MSG_NEED_ACK,
                     IPI_MSG_A2D_SPH_PARAM,  param_buf.data_size , 0, (char *) param_buf.p_buffer );

     dlclose (handle);
XML Descriptor for  Aurisys
Example
  The  Aurisys  XML Descriptor is a simple XML-file that specifies the library version number, attribute, parameter path, and optionally other information. We provide an example, in the following demonstrates how to describe a library and a scenario. The attributes of the MTK IIR filter library and the MTK record library are packaged in the library descriptor by < aurisyslibdescriptor > tag. Then we can use < aurisysscenario > tag to describe which library (can be multiple  libraries )  will be  applied in this scenario.
<?xml   version="1.0" encoding= "UTF-8"  ?>
< aurisys_config >
    <!--
     * =========================================================================
     *   table of uplink/downlink library mapping for each scenario
     * =========================================================================
    -->
     < aurisys_scenarios >
         <!-- for  aurisys_scene  playback normal -->
         < aurisys_scenario   aurisys_scenario = "AURISYS_SCENARIO_PLAYBACK_NORMAL " >
             < downlink_library_name_list   digital_gain_lib_name = " " >
                 <library   name =" mtk_bessound " />
             </ downlink_library_name_list >
        </ aurisys_scenario >
         <!-- for  aurisys_scene  low latency record -->
         < aurisys_scenario   aurisys_scenario = "AURISYS_SCENARIO_RECORD_LOW_LATENCY " >
             < uplink_library_name_list   digital_gain_lib_name = " mtk_speech_enh " >
                 <library  name= " mtk_speech_enh " />
            </ uplink_library_name_list >
        </ aurisys_scenario >
     <!--
     * =========================================================================
     *   HAL  Librarys
     * =========================================================================
    -->
     < hal_librarys >
         <!--
         * =====================================================================
         *    MediaTek   Bessound
         * =====================================================================
        -->
         <library  name=" mtk_bessound "
                  lib_path ="/vendor/lib/ libaudioloudc.so "
                 lib64_path="/vendor/lib64/ libaudioloudc.so "
                  param_path =""
                  lib_dump_path ="AUTO"
                  adb_cmd_key ="MTKBESSOUND">
             <components>
                 <!-- for  aurisys_scene  playback normal -->
                 <component   aurisys_scenario = "AURISYS_SCENARIO_PLAYBACK_NORMAL"
                           sample_rate = "8000,11025,12000,16000,22050,24000,32000,44100,48000,96000,192000"
                            audio_format = "AUDIO_FORMAT_PCM_32_BIT"
                            frame_size_ms = "0"
                            b_interleave = "1"
                            enable_log = "0"
                            enable_raw_dump = "0"
                            enable_lib_dump = "0"
                            enhancement_mode = "0" >
                     < downlink_process >
                         < buf_in    data_buf_type ="DATA_BUF_DOWNLINK_IN"
                                  num_channels = "2" />
                         < buf_out   data_buf_type ="DATA_BUF_DOWNLINK_OUT"
                                  num_channels = "2" />
                     </ downlink_process >
                </component>
            </components>
        </library>
         <!--
         * =====================================================================
         *    MediaTek  IIR
         * =====================================================================
        -->
         <library   name= " mtk_iir "
                  lib_path = "/vendor/lib/lib_iir.so"
                 lib64_path = "/vendor/lib64/lib_iir.so"
                  param_path = ""
                  lib_dump_path = "AUTO"
                  adb_cmd_key = "MTKIIR" >
             <components>
                 <!-- for  aurisys_scene  low latency record -->
                 <component   aurisys_scenario ="AURISYS_SCENARIO_RECORD_LOW_LATENCY"
                            sample_rate = "16000,32000,48000,96000,192000"
                            audio_format = "AUDIO_FORMAT_PCM_16_BIT"
                            frame_size_ms = "1"
                            b_interleave = "0"
                            enable_log = "0"
                            enable_raw_dump = "0"
                            enable_lib_dump = "0"
                            enhancement_mode = "0" >
                     < uplink_process >
                         < buf_in    data_buf_type ="DATA_BUF_UPLINK_IN"
                                  num_channels = "2" />
                         < buf_out   data_buf_type ="DATA_BUF_UPLINK_OUT"
                                  num_channels = "2" />
                    </ uplink_process >
                </component>
                 <!-- for  aurisys_scene  record w/o AEC -->
                 <component   aurisys_scenario = "AURISYS_SCENARIO_RECORD_WITHOUT_AEC"
                            sample_rate = "16000,32000,48000,96000,192000"
                            audio_format = "AUDIO_FORMAT_PCM_16_BIT"
                            frame_size_ms = "20"
                            b_interleave = "0"
                            enable_log = "0"
                            enable_raw_dump = "0"
                            enable_lib_dump = "0"
                            enhancement_mode = "0" >
                     < uplink_process >
                         < buf_in    data_buf_type ="DATA_BUF_UPLINK_IN"
                                  num_channels = "2" />
                         < buf_out   data_buf_type ="DATA_BUF_UPLINK_OUT"
                                  num_channels = "2" />
                     </ uplink_process >
                </component>
                <!-- for  other  aurisys_scene s  -->
                 ……………………………………………………………………… .
                 ……………………………………………………………………… .
                 ……………………………………………………………………… .
             </components>
        </library>
    </ hal_librarys >
</ aurisys_config >
Elements
Version Control
  The  < versioncontrol >  tag is used to  describes  the  Aurisys  XML format version.
         < versioncontrol   value= " 1.01 " >
L ibrary Descriptor
L ibrary Information
HAL Library
The  <HAL library>  tag is used to specify th e  description of libraries executed in application processor.  C urrently, we only support XML descriptor of librarie s in the application processor.
    < hal_librarys >
Library Name
The library descriptor is used to describe the information of a library, such as library version, library path, and processing approaches. You can create a library  descriptor  by a  < aurisyslibdescriptor > tag with an  appropriate  name which represents the library.
        < aurisyslibdescriptor   name= " library _iir " >
Library Path
Specify the library path.
         lib_path = "/vendor/lib/ libaudioloudc.so "    
         lib64_path = "/vendor/lib64/ libaudioloudc.so "
Parameter Path
Specify the library parameter file path. The usage of library parameter has been demonstrated in the  chatper   “ Software Development Guidance ”
         param_path = "/vendor/etc/ aurisys_param /Speech_AudioParam.xml"
Key Parameter
When we want to modify the parameters (ex. by a tuning tool), the audio system needs a specified key to recognize which library should be applied. The key can be any string value that is unique.
         adb_cmd_key = "MTKBESSOUND">
Dump Path
The  lib_dump_path  is used to specify the dump path of the library. If you don ’ t want to assign a specific path, just set it as  “ AUTO ”  and the dump will be placed in  sdcard / mtklog / audio_dump
         lib_dump_path = "AUTO"
Attribute of Each Scene

Library Applied Scene
Specify the library can be applied in which scenario.   The attribute of the library in different scenes may be different. So we should define the attributes to be applied in each scene. The  <component>  tag is used to specify a scene.
Range of values: 
AURISYS_SCENARIO_PLAYBACK_NORMAL,
AURISYS_SCENARIO_PLAYBACK_LOW_LATENCY,
AURISYS_SCENARIO_RECORD_LOW_LATENCY,  
AURISYS_SCENARIO_RECORD_WITHOUT_AEC,  
AURISYS_SCENARIO_RECORD_WITH_AEC,     
AURISYS_SCENARIO_VOIP,                
AURISYS_SCENARIO_VOIP_WITHOUT_AEC,  
AURISYS_SCENARIO_PHONE_CALL,
         <component   aurisys_scenario = "AURISYS_SCENARIO_PLAYBACK_NORMAL"   </component>
Frame Period
The supported frame period of the library.  For example, 5|20 means the library support both 5ms and 20ms.  
Range of values:  an integer value
         frame_size_ms = "20"
If filled     frame_size_ms =  “ 0 ” , means we do not specify the  frame   buf   size , thus the   framework will use  MAX_LIB_BUF_SIZE  (128K) as the buffer size to pass the data to library, the library should handle the process data quantity itself.
Processing Approach
The l ib rary  can be interleave and  framebase , frame base need to assign  AurisysLibKeyFrameMs

Range of values:   0, 1
         b_interleave = " 0 "
Format
To specify the supported format
Range of values:  
AUDIO_FORMAT_PCM_16_BIT ,  AUDIO_FORMAT_PCM_8_BIT , 
AUDIO_FORMAT_PCM_32_BIT ,  AUDIO_FORMAT_PCM_8_24_BIT
         audio_format = "AUDIO_FORMAT_PCM_32_BIT"
sample_rate
To specify the supported sampling rate
         sample_rate = " 8000 , 11025 , 12000 , 16000 , 22050 , 24000 , 32000 , 44100 , 48000 , 96000 , 192000 "
Enhancement M ode
The default value of enhancement mode is  “ 0 ” . If the library has different enhancement mode, it can be sued to specify which enhancement mode would be applied in the scenario.
         enhancement_mode =" 0 "
Debug
To specify the  debugging information.   “ enable_log ”  is used to control the debug logging of the library;  “ enable_raw_dump ”  is used  to enable the dump of  an  input/output buffer of the library;  “ enable_lib_dump ”  is used to enable the dump generated by the library itself  (if  it  has).
                            enable_log =" 0 "
                            enable_raw_dump =" 0 "
                            enable_lib_dump =" 0 "
Optional Sections
Uplink Process
T he  < uplink_process >  tag is used to create the attribute  describution  of uplink process. You don ’ t need to describe the uplink process attribute if the library won ’ t be applied in uplink process in the scenario.
 The  < buf_in >  tag is used to specify the input buffer type and channel number to the library in the scenario.
The  < buf_out >  tag is used to specify the output buffer type and channel number from the library in the scenario.  
Range of  buffer type  values:
  DATA_BUF_UPLINK_I N,  DATA_BUF_UPLINK_OU T,  DATA_BUF_DOWNLINK_I N,
DATA_BUF_DOWNLINK_OU T,  DATA_BUF_ECHO_REF ,  DATA_BUF_IV_BUFFER ,  DATA_BUF_CALL_INFO
                     < uplink_process >
                         < buf_in    data_buf_type = "DATA_BUF_UPLINK_IN"
                                  num_channels = " 2 " />
                         < buf_out   data_buf_type = "DATA_BUF_UPLINK_OUT"
                                  num_channels = " 2 " />
                     </ uplink_process >
Downlink Process
As the < uplink_process , the  < downlink_process >  tag is used to create the attribute  describution  of downlink process.  You don ’ t need to describe the downlink process attribute if the library won ’ t be applied  in  downlink  process  in the scenario.  
                     < downlink_process >
                         < buf_in    data_buf_type = "DATA_BUF_DOWNLINK_IN"
                                  num_channels = " 2 " />
                         < buf_out   data_buf_type = "DATA_BUF_DOWNLINK_OUT"
                                  num_channels = " 2 " />
                     </ downlink_process >
Scen ario  Descriptor
  The scenario  descriptor  is used to specify which library would be applied in the scenario. 
The  tags  < aurisysscenario > ,  < / aurisysscenario >  is  used to define the start and end of the scenario descriptor section. The following example shows that an  MTK  inhouse  VOIP scenario is created. 
The  < uplink_library_name_list >  is u sed to specify the library in the uplink process, and the  < downlink_libary_name_list >  is used to specify the  library  in the downlink process.
The tag  <library name>  is used to specify the processing library.  Both the downlink and uplink library are set as  mtk_speech_enh  library. It also allows  to assign  multiple libraries to the downlink/uplink path.  For example,    <library   name= " mtk_speech_enh _A " />   <library   name= " mtk_speech_enh _B " /> .
Since the library to do data processing and the library to handle the gain settings may be different. The tag  < digital_gain_lib_name >  can be used to specify the library to handle the gain settings. The data processing library and gain setting library can be the same one.
          < aurisys_scenario   aurisys_scenario = "AURISYS_SCENARIO_VOIP" >
             < uplink_library_name_list   digital_gain_lib_name = " mtk_speech_enh " >
                 <library name = " mtk_speech_enh "/>
             </ uplink_library_name_list >
             < downlink_library_name_list   digital_gain_lib_name = " mtk_speech_enh " >
                 <library   name= " mtk_speech_enh " />
             </ downlink_library_name_list >
         </ aurisys_scenario >
Deployment

Figure  4 1 .   Relationship between Scene Handler, Scenario Descriptor, and Library Descriptor
   Library Descriptor   is  used to describe the information of a library. Every applied library should be described by a library descriptor. 
  Scenario Descriptor  is used  to define which libraries would be applied in the specified scenario. Multiple libraries can be applied in one scenario. Besides, as the diagram above, a library can be applied in different scenarios. 
  Scene Handler , as mentioned above,   is created as the middleware between the audio system and the sound processing IPs . The record handler is served for a record scene and we can assign a scenario to the record handler. If we assign the  scenario  A to the record handler, the library A and library B will be applied in the  record scene. We can also assign scenario B or scenario C to the recording scene. However, the assignment is  achieved  in the program of scene handler, not in the XML descriptor.

Debugging
Logging
  Programmers are used to debug by logging the execution of the program. However, it is not convenient for a binary release IP. During developing an IP, the programmer writes logging codes to check the correctness of the program. However, the logging code may be removed when it ’ s time to release. Moreover, the programmer may want to refine the program due to issues or improvement works. He needs to insert the logging code and recompile the code. This brings lots of work for the developer, especially when the program is binary released.
  Thus, we provide an API for the developer to check the  correctness  of  their program by logging. The API is consistent and can be used in different systems. The provided API would call the  function  pointer passed in the  initializ ation. The called function is responsible for logging the required statements by calling the system-specific logging API. It can also be disabled easily by bypassing the requirements. It ’ s helpful for the developer which doesn ’ t need to remove and insert logging code anymore.
Inside Software IP
  The following blocks are the statement of the information about the provided logging API:
API
/**
******************************************************************************
 *  @brief set debug log print callback function
 *
 *  @ param   debug_log  log print function pointer
 *
 *  @ param   p_handler  the handler of speech enhancement
 *
 *  @return  lib_status_t
******************************************************************************
 */
lib_status_t   arsi_set_debug_log_fp (const  debug_log_fp_t   debug_log ,
                                   void * p_handler );
Prototype
typedef  void (* debug_log_fp_t )(const char *message, ...);
Data Structure
typedef   struct   arsi_task_config_t  {
     …
     debug_log_fp_t   debug_log ;
     …
}  arsi_task_config_t ;

Applications
Aurisys  Features in  MT6799
  The following features are supported in MT6799  Aurisys . Note that the word  “ supported ”  means it would be driver-ready. Other features can also be implemented by utility functions, such as Proximity.

Aurisys  Features in  MT6799

Application Processor
DSP
Record Enhancement
Yes
-
Voice Call Enhancement
-
Yes
Sound Trigger
-
Yes
VOIP
Yes
-
Speaker Protection
Yes
-
MP3 Decoder
Yes
Yes
Playback Effect
Yes
-
Figure  6 1 .   Aurisys  Default Features in MT6799
Voice Call
Data Path
   Hand-Held Mode
( 6 ) ( 5 ) ( 1 ) ( 4 ) ( 3 ) ( 2 )
( 6 )
( 5 )
( 1 )
( 4 )
( 3 )
( 2 )
Figure  6 2 .   Hand-Held Mode Voice Call Data Path
Downlink data. The data from the far-end is received in Modem IC and decoded. After decoding the codec, the Modem IC notifies the Open DSP to move the voice data to the internal memory of Open DSP. Then the vendor ’ s DL enhancement solution will be applied and the processed data would be moved back to Modem IC.  
The Modem IC  write  DL data to Audio HW.
The voice uplink data are also received from the Modem IC.
The Open DSP moves the data to its internal memory. After applying the vendor ’ s UL enhancement solution, the data will be transferred to Modem IC. The Modem IC will then encode the data and send to far end.
The background sound is transferred to Modem IC and mixed with voice data before output to the audio hardware
The voice data during a voice call can be saved. The DL/UL data can be saved  separately .

Hand-Free Mode
Programmers are used to debug by logging the execution of the program. However, it is not convenient for 
( 3 ) ( 2 ) ( 1 )
( 3 )
( 2 )
( 1 )
Figure  6 3 .   Hand-Free Mode Voice Call Data Path
If there is no  smartPA , the DL data is written to the Audio  HW  and  output to speaker Amp directly. If there is a  smartPA , the output data will be routed to the application processor first
The  smartPA  algorithm will be applied. Notice that we only support  smartPA  algorithm by default in  MT6799 .
Finally, the data will be written to the Audio HW and then output to the speaker Amp.
Basic Information
We support NB/WB. No matter NB or WB, the  data will be up-sampled to 16k sampling rate for the vendor ’ s IP. We ’ ll notify the vendor ’ s IP whether it ’ s WB or not.
20ms per frame and DL/UL  separated . Modem side interrupts open DSP  every  20ms  to notify open DSP to receive voice UL data. For voice DL data, the interrupt period is also 20ms, and there is a shift between UL data.


To avoid increasing round trip delay, UL enhancement should be processed no more than 1 0 ms and DL enhancement should be processed no more than 3ms. If the library can ’ t meet the requirement, we need to delay 1 frame to process the data.  T here would be 20ms increment in the round trip delay (because of 20ms per frame) .




Available MCPS
Latency
DL Enhancement
62
No delay
UL Enhancement
208
No delay
DL+UL Enhancement
416
20ms delay  increment

The group delay (processing buffer delay) of the library is suggested to not more than 40ms.
3   mic  supported in  MT6799

Limitations
  The timing is critical for voice call, so the voice call enhancements should be run at  416   MHz.  It will keep the voltage at  0.84 V in  MT6799 . Compared with MTK  proprietary  voice call enhancement solution which is executed in the Modem IC, the power consumption of executing voice call enhancement executed in the Open DSP will be higher. However, the proportion of power increase would be small in the view of total power consumption of whole chip and daily of use.
Configurations
   AP  --  MTK_AURISYS_PHONE_CALL_SUPPORT
   DSP  --  CFG_  MTK_AURISYS_PHONE_CALL_SUPPORT
  Notice that there is a compile dependency check. The configurations of AP and DSP should be the same or there will be a build error occurs.
Software Frameworks
( 3 ) ( 6 ) ( 5 ) ( 4 ) ( 2 ) ( 1 )
( 3 )
( 6 )
( 5 )
( 4 )
( 2 )
( 1 )
Figure  6 4 .  Software Frameworks of Voice Call
UL  ……… ……………………………… .. … …………………………………………………… . … (1)
The diagram shows the path how UL data received from the hardware input and sends to the Modem IC
DL ……… ……………………………………………………………………………………… .. …… ( 2 )
The path from the Modem IC to the audio hardware output
Data between Modem IC and CortexM4 (Open DSP)  ……… …………… .. ( 3 )
The voice data exchange between the Modem IC and CM4 is by the BUS. The DMA of CM4 can help to reduce the period of data exchange
Source code structure
Audio --  / source / drivers / CM4_ B / mt679 9 / audio
Aurisys  Interface --  / source / middleware / lib / aurisys
IPI --  / source / drivers / CM4_ b / mt679 9 / ipi /
Task Voice   ……… ……………………………… .. … ………………………………………… … ( 4 )
The initial function is placed in  audio.c  to initialize the IPI message handler and create the Voice Task
The Voice Task main  function s are placed in  audio_task_phone_call.c
IPI   ……… ……………………………… .. … …………………………………………………… .. … ( 5 )
Inter Processor Interrupt.  The communication between the application processor and the DSP is through the IPI message. Each task has its unique IPI ID and should have implemented an IPI handler.
The IPI ID is defined in  scp_ipi.h
The IPI message handler and related information can be found in  audio _messenger_ipi.c ,  audio_speech_msg_id.h
Notice that the IPI message handler is in ISR level. Thus, we can ’ t execute enhancement directly in the IPI message handler. It is just used to signal the task Voice.
(6) Process APIs ……… ……………………………… .. … ……………………………… … ( 6 )
The software interface defined in  arsi_api.h . The process APIs implemented by the vendor will be executed in the Task Voice.
Playback
Data Path

Figure  5 4 .   Audio Playback  with  Aurisys  data path
O ffload stream. The audio  bitstream  will be decoded to DSP and the decoded PCM data will be output to the audio hardware directly. 
The normal playback stream. The audio is decoded in the application processor, and the post-processing effects applied through  Aurisys  Framework.
Fast track, audio playback with lower latency.
The decoder implemented in DSP. Currently, we only support MP3 decoder in  MT799 .
The multiple streams can be mixed in the hardware directly. However, the sampling rate should be the same, so the sampling rate converter would be executed first if needed.
Scenarios
Currently, we have implemented  Aurisys  playback scenarios on  the  AP  side and the DSP side.
On AP side, we implement the post-processing effect Audio compensation Filter (ACF/HCF) applied through  Aurisys  Framework.  The user can compose the libraries under different playback scenarios by simply setting different xml configurations.
On DSP side as offload audio case, we put the mp3 decoder on DSP and write down a large amount of  bitstream  data into Dram to achieve lower power consuming.  With the  centrol  control of  aurisys  task manager.   The  communications  between AP driver and DSP task becomes safer and easier.
We will introduce the data and control path under  this  two scenarios.
AP playback with post-processing
The  working  flow  is depicted as below, there are five functional blocks.   Application UI, Framework, Audio HAL, Device and External  hal .  The  Aurisys   Framewok  is implemented in Audio Hal and related ARSI general API and aurisys_ config.xml  are  defined in external block.
   ( 5 )    ( 4 )    ( 3 ) ( 2 ) ( 2 ) (1)
   ( 5 )
   ( 4 )
   ( 3 )
( 2 )
( 2 )
(1)
Figure  5 5 .   Functional Blocks  of  Normal  Playback with ACF library
The  aurisys  framework  is   initialized   by  AudioALSAHardware  when  audioserver  start.
During  the   initialization  stage,  the  aurisys  controller   parse  aurisys_config.xml , establishing the function callback between library and framework, and  dlopen   AudioComponentEngine   libraries (bit converter,  samplerate  converter.)
For ACF library,  we  parse  the ACF_param.xml and store  the parameters into the structure. These parameters set the processing frequency and  generate  corresponding   filter  coefficients . 
When normal playback start, we create  libmanager  and  libhandler  to handle the processing  flow  under  this scenario.  As we can  retrieve  the  stream and hardware  info, we store these information and provide to  the framework.
If the playback  setting  is  not compatible to the library setting, the  Aurisys  Framework  will trigger  samplerate  converter or bit converter to do the transformation.  This ensure  the process can be done without library modification.
The post-processing is done by  calling   aurisys _process_dl_only ()  . The framework handles the data transformation  and operates with libraries   through ARSI generic  interface
The  applicarion   can  be enabled through  setparameter  function.
Configurations
   AP project  config  --  MTK_AURISYS_FRAMEWORK_SUPPOR T
Aurisys  related  files
vendor\ mediatek \proprietary\hardware\audio\common\ aurisys  
Framework (framework related core files) 
Utility  ( src / bitconvert / ringbuf /formatter,  adb   cmd ,  pcmdump …utility functions)
vendor\ mediatek \proprietary\external\ aurisys  
aurisys_config.xml  (defines all exist scenarios with corresponding libraries )
Interface  ( aurisys  common interface for custom library to reference)
Libraries (the existed libraries with  aurisys  interface ex:  libfvaudio ,  lib_iir …)
ACF related  files
vendor\ mediatek \proprietary\external\ aurisys \ libaudioloud  
ACF  with  Aurisys  wrapper implementation
vendor\ mediatek \proprietary\external\ AudioCompensationFilter  
 C version file for xml parsing
device\ mediatek \common\ audio_param \
PlaybackACF_AudioParam.xml  parameters  for Audio  Tunning  Tool to adjust
\vendor\mediatek\proprietary\custom\(%porj)\hal\audioflinger\audio
For customer Turn on/off ACF ( ENABLE_AUDIO_COMPENSATION_FILTER )
\vendor\ mediatek \proprietary\external\ bessound_HD

There are two key points for the  libray   porting .  
One is to  depicts  the library configuration in aurisys_config.xml. 
Anothor  one is to implement the wrapper between ARSI interface and library functions.
In aurisys_config.xml, we first indicate the using scenario and list the library component used.
We depict the library ’ s attribute, such as file path, library supported  samplerate , processing format, frame size,  data buffer type (uplink or downlink), channel number, and debug level … .etc. These attributes are compared to the input  pcm  data and indicate the library  setting  during  processing. The user can change the library setting by simply modify the xml file.  This enlarge  the flexibility and reduce the coding effort.


Figure  5 6 . aurisys_config.   xml  depicts the library configurations
To implement the wrapper between library and ARSI interface, we comparing and mapping their functionality as the table shows. ARSI interface supports various library control settings which depict in section  3.2.2 . 

Figure  5 7 . mapping the interface between ARSI and Effect
Comparing to the original post- processing  path , the  Aurisys  path will not new the instance for every pre-defined scenario at the first loading stage. Instead, it checks the current device info by task  config  and create corresponding library instance. The calling interfaces changed in  PlaybackHandlerNormal  and uses the  aurisys_process_dl_ only ( ) as  the unified entry for every post-processing  libray . 
This means the users do not need to do extra judge or control coding when adding a new library .Once you have done the aurisys_config.xml description and implemented the wrapper. The library components can be  sequential ly processed.
                   Figure  5 8 . comparing the processing path 
DSP   offload   playback
   AP  project  config  --  MTK_AUDIO_TUNNELING_SUPPORT
   AP kernel  config   --  CFG_ MTK_AUDIO_TUNNELING_SUPPORT
   DSP  --  CFG_MTK_AUDIO_TUNNELING_SUPPORT
  audio_policy_configuration.xml   –  
< mixPort  name=" compress_offload " role="source" flags="AUDIO_OUTPUT_FLAG_COMPRESS_OFFLOAD|AUDIO_OUTPUT_FLAG_NON_BLOCKING">
<profile name="" format="AUDIO_FORMAT_MP3"
    samplingRates ="8000,11025,16000,22050,32000,44100,48000"
    channelMasks ="AUDIO_CHANNEL_OUT_STEREO"/>
 < / mixPort >
<route type="mix" sink="Wired Headset"
                       sources="primary  output,fast,FM  Tuner  In,compress_offload "/>
<route type="mix" sink="Wired Headphones"
                       sources="primary  output,fast,FM  Tuner  In,compress_offload "/>
<route type="mix" sink="Analog Dock Headset"
                       sources="primary  output,compress_offload "/>
                <route type="mix" sink="Digital Dock Headset"
                       sources="primary  output,compress_offload "/>
   audio_policy.conf   (below android N version) --
compress_offload  {        
         sampling_rates  8000|11025|16000|22050|32000|44100|48000 
         channel_masks  AUDIO_CHANNEL_OUT_STEREO        
         formats  AUDIO_FORMAT_MP3       
         devices  AUDIO_DEVICE_OUT_WIRED_HEADSET|AUDIO_DEVICE_OUT_WIRED_HEADPHONE|AUDIO_DEVICE_OUT_ANLG_DOCK_HEADSET|AUDIO_DEVICE_OUT_DGTL_DOCK_HEADSET 
         flags  AUDIO_OUTPUT_FLAG_COMPRESS_OFFLOAD|AUDIO_OUTPUT_FLAG_NON_BLOCKING 
      }
File Structure
Path
File
D escription
Framework layer
frameworks\ av \include\media
AudioParameter.h
D eclare  parameter keys   for  O ffload 
frameworks\ av \media\ libmedia
AudioParameter.cpp
W e can ’ t attach effect on offload  stream ,  handle effect enable flow.

AudioTrack.cpp


AudioTrackShared.cpp

frameworks\ av \include\private\media
AudioTrackShared.h

frameworks\ av \services\ audioflinger
Threads.cpp


Threads.h


Track.cpp

frameworks\ av \services\ audiopolicy \ managerdefault
AudioPolicyManager.cpp

frameworks\ av \media\ libmediaplayerservice \ nuplayer
NuPlayerRenderer.cpp
O ffload retry mechanism

NuPlayer.cpp

Kernel & Hal
Kernel-4.4\sound\soc\ mediatek \ common_int
mtk-auddrv-offloadcommon.h
O ffload kernel code

mt_soc_offload_common.c

kernel-4.4\drivers\misc\ mediatek \ audio_ipi \common\framework
audio_ipi_driver.c
T he communication driver between AP and SCP.

audio_messenger_ipi.c


audio_ipi_queue.c


audio_task_manager.c


audio_ipi_message.c

kernel-4.4\drivers\misc\ mediatek \ scp \v02
scp_ipi.c

vendor\ mediatek \proprietary\hardware\audio\common\V3\ aud_drv
AudioALSAPlaybackHandlerOffload.cpp
O ffload driver main program

AudioALSAHardware.cpp

vendor\ mediatek \proprietary\hardware\au dio\common\V3\include
AudioALSAPlaybackHandlerOffload.h

vendor\ mediatek \proprietary\hardware\audio\mt6799\ aud_drv
AudioALSAStreamOut.cpp 

vendor\ mediatek \proprietary\hardware\audio\mt6799\ aud_drv
AudioALSAStreamManager.cpp
W here create  AudioALSAPlaybackHandlerOffload  class
DSP
project/CM4_B/mt6799/platform
platform.mk
Project configurations (common)
project/CM4_B/mt6799/[project]
ProjectConfig.mk
Project configurations (specific project)

CompilerOption.mk
Project specific compile options
middleware/lib/ aurisys / interface
  arsi_api. h
Aurisys  Software Interface

arsi_api_version.h


arsi_call_type.h


arsi_library_entry_points.h


arsi_type.h


audio_task.h


wrapped_audio.h


wrapped_errors.h

middleware/lib/
audio_utility /
A udio utility API

m3offload /
M p3 library

Blisrc /
SRC library
drivers/common/audio/task/ 
audio_task_interface.h
Define audio task structure and status 

mp3 / audio_task_offload_mp3.c  


MP3   DSP main program

mp3 / audio_task_offload_mp3_params.h


mp3 / audio_task_offload_mp3.h

drivers/common/audio/hardware
audio_irq.h
H eader file of  audio_irq.c

audio_hw.h
H eader file of  Audio hw operating functions
drivers/common/audio/framework
audio_task_factory.c
Audio task service

audio_messenger_ipi.c
I nterrupt handler to handle message from AP

audio.c
Audio init/de-init entry functions
drivers/CM4_B/mt6799/audio/ tasks
mp3 /   audio_dma_mp3.c
Audio  mp3  dma  platform driver
drivers/CM4_B/mt6799/audio/ hardware
audio_irq .c
Register  irq  handler and request  irq

audio_hw.c
Audio hw operating functions

audio_hw_reg.h
Define platform related audio hw register
Behavior
  In  MT6799 , We didn ’ t implement  offloadable  playback effects on DSP by default. If the playback effect is enabled, the playback will be switched to a normal stream playback. Users can implement the playback effect in DSP by themselves currently. The default package with playback effect supported in DSP will be released later.


Functional Blocks


 
Figure  5 9 .  Functional Blocks of Offload Playback
The communications between the application processor and DSP is by the IPI driver.
The parsed MP3  bistream  is reserved in DRAM. The application processor can enter sleep mode if there is sufficient MP3  bistream  stored in DRAM.
DSP will move the MP3  bitstream  to its internal memory by DMA
The mp3  bistream  will be decoded by the decoder
The decoder is executed in the Task MP3
The output PCM data will be transferred to the audio hardware by DMA
We need to monitor the data amount of mp3  bistream  buffer
Once the amount of mp3  bitstream  is not enough for decoding, we ’ ll interrupt the application processor by IPI message to fill the  bitstream  buffer

Sound Trigger
   To be released later
SmartPA
   To be released later
Record & VOIP
  Currently, we only support recording enhancement in the application processor. This is because the power savings in DSP won ’ t  be   significant  unless the encoder and storage driver are also implemented in DSP. However, we don ’ t have enough memory to support encoder. Besides, the computing power is not sufficient for recording features.
  As the recording case, we only support VOIP in the application processor.  T he power savings in DSP won ’ t be significant since the codec is still implemented in application processor and DDR can ’ t be turned off during VOIP. The computing power and memory are not sufficient for us to implement all audio scenes to the DSP.
Data Path  
( 4 ) ( 5 ) ( 1 ) ( 2 ) ( 3 )
( 4 )
( 5 )
( 1 )
( 2 )
( 3 )
Figure  6 7 .   Record & VOIP
The  record( uplink) stream which contains sound data from microphones.
We also support direct input without any processing.
Before processing the uplink data with the recording or VOIP UL library. We provide an IIR filter ahead to do DC removal and reduce possible hardware defects. It can be bypassed by XML  config  if you don ’ t need it.
The downlink stream which is processed with a playback or VOIP DL library.
The DL output data will be looped back as the downlink reference stream and provided to the record or VOIP UL library.
Configurations
   MTK_AURISYS_FRAMEWORK_SUPPORT
  This project configuration should be set as  “ yes ”  if you want to support recording and VOIP effect in  Aurisys  framework. If this configuration is set as  “ no ” , we still support MTK inside record and VOIP effect. However, we don ’ t support the  XML  descriptor  mentioned above. If you want to replace the MTK library with vendor ’ s library, it ’ s suggested to set this configuration as  “ yes ” . We can also support MTK library in  Aurisys  framework in the future and set this option as true by default.
Application Processor Only
   Due to the lack of DSP resources (computing power and internal memory size).  The recording and VOIP libraries are only allowed to be processed in the application processor.
Class Diagram
  The class diagram of  Aurisys  record and VOIP framework is depicted as follows. It provides a reference to the actual code. 

Figure  6 8 .   Aurisys  Class Diagram for Record & VOIP
Device Information
  It may be confused with the relationship between the input/output device and arguments sent to the library. We provide a comparison table in the following as a reference to implement library.
VOIP
   task_scene  = TASK_SCENE_VOIP
   Device
  Device Detail  
Arguments  
Handset
w/ dual- mic  NR
input_device_info  = AUDIO_DEVICE_IN_BUILTIN_MIC
output_device_info  = AUDIO_DEVICE_OUT_EARPIECE
VIR_VOIP_NORMAL_DMNR_SUPPORT enabled

w/o dual- mic  NR
input_device_info  = AUDIO_DEVICE_IN_BUILTIN_MIC
output_device_info  = AUDIO_DEVICE_OUT_EARPIECE
VIR_VOIP_NORMAL_DMNR_SUPPORT disabled
Headset
3 pole headset
input_device_info.devices  = AUDIO_DEVICE_IN_BUILTIN_MIC
output_device_info.devices  = AUDIO_DEVICE_OUT_WIRED_HEADPHONE

4 pole headset
input_device_info.devices  = AUDIO_DEVICE_IN_WIRED_HEADSET
output_device_info.devices  = AUDIO_DEVICE_OUT_WIRED_HEADSET
input_device_info.num_channels  = 1

5 pole headset
input_device_info.devices  = AUDIO_DEVICE_IN_WIRED_HEADSET
output_device_info.devices  = AUDIO_DEVICE_OUT_WIRED_HEADSET
input_device_info.num_channels  = 2
5_POLE_HS_SUPPORT enabled
MTK_HEADSET_ACTIVE_NOISE_CANCELLATION_SUPPORT disabled 

5 pole + ANC
input_device_info.devices  = AUDIO_DEVICE_IN_WIRED_HEADSET
output_device_info.devices  = AUDIO_DEVICE_OUT_WIRED_HEADSET
input_device_info.num_channels  = 2
MTK_HEADSET_ACTIVE_NOISE_CANCELLATION_SUPPORT enabled 
Hand-Free
w/ NR
output_device_info  = AUDIO_DEVICE_OUT_SPEAKER
VIR_VOIP_HANDSFREE_DMNR_SUPPORT enabled 

w/o NR
output_device_info  = AUDIO_DEVICE_OUT_SPEAKER
VIR_VOIP_HANDSFREE_DMNR_SUPPORT disabled 
BT earphone
BT earphone
input_device_info  = AUDIO_DEVICE_IN_BLUETOOTH_SCO_HEADSET 

Record
   task_scene  = TASK_SCENE_RECORD 
  The information of input device used in recording is the same with what used in VOIP. However, the library may need to be aware of which  application  is processed and apply different effect according to the application. The following table lists the arguments provided to the library in each  application . 
  Application  
Input Source  
  Notes 
Sound Recording
input_source  = AUDIO_SOURCE_MIC
Modes:  Normal  /  Lecture  /  Meeting  
  ( Reserve2 = 0 ,  1 ,  2  respectively )
Camera Recording
input_source  = AUDIO_SOURCE_MIC
 Modes:  Normal  /  Meeting  
  ( Reserve2 =  3, 4  respectively )
Customization1
input_source  = AUDIO_SOURCE_MIC_AEC
   MagiASR  need AEC   (VR + AEC)
Voice Recognition & CTS
input_source  = AUDIO_SOURCE_VOICE_RECOGNITION

Voice Unlock
input_source  = AUDIO_SOURCE_VOICE_UNLOCK
  
Customization2
input_source  = AUDIO_SOURCE_VOICE_RECOGNITION_AEC
   Normal record + AEC
Fast Record
A ccording current application
   frame_size_ms  = 5  ms

Appendix:  Platform and Development Environment s
Scenario Based DVFS
Ultra  Low  Power Mode 82   MHz Ultra Low Power Always-on features 0.568V Normal Mode Turbo Mode 330  MHz 416  MHz Normal applications High Sampling Rate applications High Complexity algorithm 0.74  V 0.84  V Low Power Mode 165  MHz Low Power Features 0.69V
Ultra  Low  Power Mode
82   MHz
Ultra Low Power

Always-on features
0.568V
Normal Mode
Turbo Mode
330  MHz
416  MHz
Normal applications
High Sampling Rate applications

High Complexity algorithm
0.74  V
0.84  V
Low Power Mode
165  MHz

Low Power Features
0.69V
Figure  7 1 .   MT6799  DSP Dynamic Voltage Table
   We have three DSP clock rate  in  MT6799 , if your application can be run at  82 MHz, there is  a  large power savings for the whole system .  We don’t have automatic DVFS to detect current DSP loading and adjust the voltage automatically .  What we do is to register a frequency requirement  table for   a  specified application. When the application starts, a provided API should be called to notify the system. Besides, it also needs to call another API to notify the system when it is stopped. The system will adjust the voltage according  to the sum of clock rate requirement for active  applications.  
  Since the enable and  disable  of a function is triggered from the application processor, the  judgement  of what clock rate is more suitable for current scenario is done by the application processor.
Implementation
R egistration
kernel- 4 . 4 / drivers/misc/ mediatek / scp / [project] /   scp_feature_define.h
kernel- 4 . 4 / drivers/misc/mediatek/scp / [project] / scp_feature_table.c
typedef   enum  {
    VOW_FEATURE_ID= 0,
    OPEN_DSP_FEATURE_ID,
    SENS_FEATURE_ID,
    MP3_FEATURE_ID,
    FLP_FEATURE_ID,
    RTOS_FEATURE_ID,
    NUM_FEATURE_ID,
}  feature_id_t ;

static  scp_feature_table_t   feature_table [] = {
    {
        .feature    = VOW_FEATURE_ID,
        .freq            =  75 ,
         .core           = SCP_B_ID,
        .enable     = 0,
    },
    {
        .feature    = OPEN_DSP_FEATURE_ID,
        .freq            =  356 ,
         .core           = SCP_B_ID,
        .enable     = 0,
    },
    {
        .feature    = SENS_FEATURE_ID,
        .freq            = 84,
         .core           = SCP_ A _ID,
        .enable     = 0,
    },
…….
…….
};

First, the feature ID should be added to the feature id table. Then the clock rate requirement of the specified application should also be provided.

Function Prototype
void  register_feature ( feature_id_t  id);
void  deregister_feature ( feature_id_t  id);
When an application is enabled to run, it must call  resiger_feature  function first to notify the system. The clock rate of the application will be added to the current total clock rate requirement. The system will then adjust the frequency of CPU. When the application is disabled, the  deregister_feature  should be called so that the system won ’ t consume unnecessary power.
Dynamic Objects Loading

Figure  7 2 .   MT6799 DSP Dynamic Loading Concept
  We support 3 audio features (MP3 decoder, voice wake up, and phone call speech enhancement) by default in MT6799. However, the total size required by the features has exceeded the memory size of the DSP. So we apply a dynamic download mechanism. The dynamic download is possible only when the features happen in different scenes. It is not allowed to do dynamic download frequently since the downloading requires more than 100ms. The MP3 decoder and voice wake up are grouped into a  DO( dynamic objects) due to they are allowed to be executed simultaneously in the defined behavior. Besides, the total memory size of MP3 and VOW is allowed to be downloaded at the same time. In  implementation , the speech enhancement is downloaded when a phone call happens. The MP3 decoder and voice wake up are downloaded when the call ends.
  Since  the define  and  arrangement  of DOs is complicated. We suggest calling for ACS ’ s help if there is requirement of dynamic object loading.

DSP Binary (Build Command and Download)
Configuration
   There is an automatic compile dependency check between  “ PROJECT_CONFIG ”  of AP and  “ CFG_PROJECT_CONFIG ”  of DSP. They should be the same value. If there is a global configuration named  “ FOO ” , and there is a  dsp  configuration named  “ CFG_FOO ” , only the following three conditions are allowed.
tinysys_config.h  entry
Global ProjectConfig.mk
#define CFG_FOO
FOO = yes
/* CFG_FOO is not set */
FOO = no
#define CFG_FOO VAL
FOO = VAL
Build Command
Environment  Initialzation
$ . build/envsetup.s h ………………………………… required only once
$ lunch full_<PROJECT>-eng ……………………… re-run this command to switch to other projects.
Full Android Build
$  mosesq  make -j24
Module Build for DSP
$  mosesq  make  tinysys-scp  -j24
Fast Module Build for DSP
$ vendor/mediatek/proprietary/tinysys/freertos/source/tools/build_ts.sh    
Built Binary
Built DSP Binary Location
out\target\product\ [project] \obj\TINYSYS_OBJ\tinysys-scp_int ermediates\freertos\source\CM4_ B \tinysys-scp-CM4_ B .bin
Check the  modified  time of the binary if you  wanna  make sure the binary is updated
Update DSP binary  by  Fastboot
$  adb  reboot  bootloader   …………………..  Put the device in  fastboot  mode
$  flashboot.exe scp1 tinysys-scp.bin   ……………… ..Update scp1 from local tinysys-scp.bin
$  flashboot.exe scp2 tinysys-scp.bin   …… … … … …   Update  scp 2  from local tinysys-scp.bin
Update DSP binary by MTK  Flashtool
Flashtool  can be used to download Android full load or update DSP binaries only. The following figure shows how to update DSP binaries only. 


Figure  7 3 .   Update DSP Binary by  Flashtool
Code Release
Get Full Codebase
1. C ontact PM and sign an agreement
2. Get a FEX account (contact with the PM)
3. Request the code release
Special Modem Image Request
In MT6797, if you want to use the vendor ’ s voice call speech enhancement, we need to disable the MTK ’ s speech enhancement in the Modem Image. Since the modem image is binary released.  The customers need to request a modem image with the compile option:  “OPEN_DSP_SPEECH_SUPPORT”  first.  In MT6799, the modem image can support both 3 rd  party ’ s speech enhancement in the open  dsp  and MTK ’ s speech  enhancement  in modem side without changing the modem image.
Aurisys  Framework Class Diagram

Figure  7 4 .   Aurisys  Framework Class Diagram
Software Patch Note
  The following table lists the issues and possible impacts. Please make sure you ’ ve applied the following patches.
Feature
ID
D escription










FAQ
SCP
A bbreviation  of System Control Processor. It is because there is some system control tasks are run in this DSP.
TinySys  
Our DSP system and peripherals.



---
# SRC0322 GnuArmEclipseIDE_1229.pptx

来源：IDE\CortexM4\GnuArmEclipseIDE_1229.pptx

SHA-256：9d8777477cc9540d54229110832b73005e0573986d10810b89780c388e40c2b5

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0322.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 幻灯片 1

HY Chang
GNU ARM Eclipse Guide 

## 幻灯片 2

Outline
GNU ARM Eclipse IDE
Target board
IDE Install Step
New Project
Import project
Environment Settings
Project Settings
Debug Settings
Run Project at Target
Appendix
Makefile  setting
Semihosting
Board Purchase Info
2

## 幻灯片 3

GNU ARM Eclipse
GNU ARM Eclipse plug-ins allow to  create ,  build ,  debug  and in general to  manage ARM and AArch64 projects  (executables and static/shared libraries, in both 32 and 64-bit versions) with the Eclipse framework.
Latest to Eclipse 4.4 Luna. 
The plug-ins run on Windows, GNU/Linux and Mac OS X

3

## 幻灯片 4

Target board
Target board:
STM32F401RE
512K Flash
96K RAM
84Mhz
Target board:
STM32F429I-DISCO
2M Flash
256K RAM
180Mhz
8M external SDRAM




4

## 幻灯片 5

Target board

ST-Link USB Driver :
  STSW-LINK008 for Win vista & Win 7 & Win 8 
http://www.st.com/web/en/catalog/tools/PF260218
  STSW-LINK009 for Win XP
http://www.st.com/web/catalog/tools/FM147/SC1887/PF260219

5

## 幻灯片 6

IDE Install Step
6
Download Eclipse CDT
Need to Download Eclipse CDT First :  Here
Current Latest Version: Luna Service Release 2 (4.4.2)
Install  Eclipse plug-ins
one or more cross build  toolchain (s)
Toolchain  version:  here
the optional  build tools  (make &  rm ) for Windows
Build Tool:  here
the  debugging  tools
OpenOCD  :  here



## 幻灯片 7

Install plug-in – Step1
7
(IDE navigation bar) Help  Install New Software

## 幻灯片 8

Install plug-in – Step2
8
Select necessary components

## 幻灯片 9

Install plug-in – Step3
9
After installing plug-in, you will see ARM plug-in icon
Help   About Eclipse



## 幻灯片 10

New  Project
10
Project for stm32F401RE 
Use  FreeRTOS_F401_122815  as  the template  project.
Project for stm32F429Discovery 
Use  FreeRTOS_F429_122815  as  the  template project.




Unachieved the file and import into your workspace

## 幻灯片 11

Import Project
11
File   Import Select root directory select template




## 幻灯片 12

Import Project
12
Select Projects and copy into workspace

## 幻灯片 13

Environment Settings
13
Set Tool Chain & Build Tool Path
Window   Preferences C/C++  Build  Global Tools Paths

## 幻灯片 14

Environment Settings
14
Set  OpenOCD  Path
Window   Preferences Run/Debug  OpenOCD

## 幻灯片 15

Project  Settings –  ToolCahin
15
Project   Properties C/C++ Build  Tools Path
You can set in Window Preference global path or here by project

## 幻灯片 16

Debug Setting
16
Run  Debug Configurations  OpenOCD  Debugging
Select your workspace project


## 幻灯片 17

Debug Setting
17
Debugger  Config  options: set current  openocd   config  board script
Project for stm32F401RE 
-f board/st_nucleo_f4.cfg
Project for stm32F429Disco 
-f board/stm32f429discovery.cfg



## 幻灯片 18

Build Project
18





## 幻灯片 19

Run Project
19
Debug   FreeRTOS_DEMO


## 幻灯片 20

Run Project – Debug mode
20

4.  Semihost   printf  message

3.Disassembly View

1.Debug Actions

5.Switch View

2.Source code View

## 幻灯片 21

Appendix
21

## 幻灯片 22

Project  Settings -  Makefile
22
Project   Properties  Settings
Set Compiler flag
Set Linker flag


## 幻灯片 23

Project  Settings – enable  Semihosting
23
Print message in IDE console not in serial  Uart  port
ADD in Linker
--specs= rdimon.specs  – lrdimon






ADD in Compiler define
DEBUG_IO


## 幻灯片 24

Project  Settings –  enable  Semihosting  print
24
Exclude  syscalls.c  from  building, make  printf   avaliable  in workspace.







## 幻灯片 25

Board Purchase Info
25
STMicroelectronics STM32F429I-DISCO
STMicroelectronics NUCLEO-F401RE

## 幻灯片 26




---
# SRC0323 GNUARMEclipse_1229.docx

来源：IDE\CortexM4\GNUARMEclipse_1229.docx

SHA-256：5efbb311ebf134f3c75efc4a4cdf6213e7cfafe07c592d00f82115923283b4ca

范围：原材料可查阅；未逐页作项目结论验证

[站内原文与原件](https://qiantao18817568425-art.github.io/Architecture_Learning-/architecture/source-SRC0323.html)

文字按文档结构提取，图片按包内顺序列出；布局、连线和图文对应关系以原文件为准。

## 正文（不对应打印页码） 1























IDE Setup Guide — with GNU ARM Eclipse 
IDE Setup Guide
— with GNU ARM Eclipse 






Version: 1 . 0
Release date: 2015-12-28












Specifications are subject to change without notice.

MediaTek Confidential A
MediaTek Confidential A

Document  Revision History
Revision
Date
Author
Description
0.1
yyyy - mm - dd
Full Name
Initial  d raft
0.2
2015-10-28
Hsin-Yi Chang
Add Cycle count debug
0.3
2015-12-29
Hsin-Yi Chang
Revise the API name, and code flow pic
MediaTek Confidential A
MediaTek Confidential A
Table of Contents
Document Revision History 2
Table of Contents 3
1 About GNU ARM Eclipse 5
2 Install Steps 7
2.1 Download Eclipse CDT 7
2.2 Install Eclipse plug-ins 8
2.3 Install build toolchain(s) 10
2.4 Install the optional build tools (make & rm) for Windows 10
2.5 Install the debugging tools 11
3 New Project 12
3.1 Import Example project 12
3.2 Eclipse Tools Environmental Settings 14
3.3 Project Build Flag Settings 18
4 Build and Run on Target 20
4.1 Setup Target Board 20
4.2 Build Project 21
4.3 Debug on the Target 22
5 Example code 23
5.1 Structure and flow 23
5.2 Code Configurations 26










Lists of Tables and Figures

Figure 1.1. create a c++ project with ARM toolchain. 6
Figure 2.1. Version info  in Help → Installation Details . 7
Figure 2.2. Add Repository. 8
Figure 2.3. Select required packages. 9
Figure 2.4. Select required packages. 10
Figure 2.5. Build Tools install view. 11
Figure 3.1. Import existing project. 12
Figure 3.2. Select the project and copy into the workspace. 13
Figure 3.3. Set Global Tools Path for Build Tools and Toolchain. 14
Figure 3.4. Set OpenOCD path. 15
Figure 3.5. Setup GDB openOCD Debug project file. 16
Figure 3.6. Setup GDB OpenOCD Debug project file. 17
Figure 3.7.  The processor configuration menu. 18
Figure 3.8. Set Compile flag. 19
Figure 3.9. Linker flag options. 19
Figure 4.1. Board spec comparison. 20
Figure 4.2. Build project. 21
Figure 4.3. The binary files will build in the workspace/project/Debug folder. 21
Figure 4.4. Click Debug icon and select the debug name. 22
Figure 4.5. Click Debug icon and select the debug name. 22
Figure 5.1. Folder structure of our example project (compiled). 24
Figure 5.2. Example code flow. 25


About GNU  ARM  Eclipse  
     GNU ARM Eclipse plug-ins provide Eclipse CDT (C/C++ Development Tooling) extensions for 
GNU ARM toolchains like GNU Tools for ARM Embedded Processors, Linaro, Mentor Sourcery CodeBench Lite, etc.  

     With the  help of  this  plug-ins, we can  create, build, debug and in general to manage ARM and AArch64 projects (executables and static/shared libraries, in both 32 and 64-bit versions) with the Eclipse framework .  The plug-ins run on Windows, GNU/Linux and Mac OS X.  In this document, we set up   the IDE in Windows XP/7 . 
    
     The reason s  to choose  GNU  ARM Eclipse  as our developing IDE  are :
The  plug-ins  provides  a free ARM  developing  environment based on  EPL (Eclipse Public License ) .
T he  providing  functionalities are   sufficient  for   our  developing  requirement. 
 The official  website  works  actively  and  updates  frequently .    

    Below lists the features supported in GNU ARM  Eclipse:      

Features
simplify project management (no need to create makefiles)
support major ARM32/64 toolchains (GNU Tools for ARM Embedded, Linaro, Sourcery Lite)
runs on Windows, GNU/Linux, Mac OS X
peripheral registers view in debug
ready to run STM32Fx project templates
ready to run Kinetis KLxx project templates
create Freescale Processor Expert projects
full integration for J-Link JTAG/SWD probe
SWO trace console for J-Link
full integration for OpenOCD

Figure  1 . 1 .  create a c++ project with ARM toolc h ain .



Install Step s
     To setup IDE,  we arrange the  install  steps as below.

Download Eclipse CDT
Need to Download Eclipse CDT First :  Here  
Current Latest Version: Luna Service Release 2 (4.4.2)
Windows 32bit version can work normally both in XP / Win7 (64bit version ok)

Eclipse & CDT
     The oldest Eclipse supported by the plug-ins is Eclipse 4.3 Kepler (CDT 8.3), and the recommended version is  4.4 SR2 . Do not try to install them on Juno, Indigo, or older versions, since the install will fail.

Compatibility issues
     Please note that  Eclipse plug-ins  starting with 1.1.x, compatibility with Eclipses previous than 4.3 Kepler was no longer possible. If, for any reasons, you need a solution for older Eclipse versions, you can try the GNU ARM Eclipse Plug-in version 0.5.5, but please keep in mind that this old version is no longer maintained.
 
 Here shows the version information used in our current project, the combination works normally.

Figure  2 . 1 . Version info  in Help→Installation Details .


















Install  Eclipse plug-ins  
The detail step   in official site tutorial   :  Here
 
  Step1.  Go to eclipse  IDE navigation bar ,  Help   →   Install New Software
     Step2. At  Work with  option , select Add and type the Name /Location   (see Figure 2- 2 )
 
   Name:                   

GNU ARM Eclipse Plug-ins

Location:   

http://gnuarmeclipse.sourceforge.net/updates



  Step3.  P ress OK

        
Figure  2 . 2 .  Add Repository.








Step4. You will get GNU ARM C/C++ Cross Development Tools , selecting  need components.


Figure  2 . 3 . Select required package s .
(Here  we select Cross Compiler/ Documentation/ Cortex-M project templates/ 
OpenOCD Debugging/ Packs/ STM32Fx project Templates )














Step5. After installing plug-ins, you can check  About Eclipse   to  find  ARM plug-in icon .


Figure  2 . 4 . Select required packages.

Install  build  toolchain (s)  
The detail step   in official site tutorial   :  Here
Toolchain version:   gcc-arm-none-eabi-4_8-2014q3-20140805-win32
Can be download :  H ere  

Install  the optional  build tools  (make & rm) for Windows
If your development platform is Windows, you need to install two additional command line programs,  make  and  rm , required by the Eclipse external builder.
The detail step   in official site tutorial   :  Here
Download  B uild Tool:  H ere  

Figure  2 . 5 . Build Tools install view.


Install  the  debugging  tools
The detail step   in official site tutorial   :  Here
Download  OpenOCD :  H ere  


New  P roject
     After installing all the tools needed in  IDE , we  can start to build up the project.

Import Example project
To reduce the  integrating  and developing time, we provide  the  example project which is based on  ST Microelectronics   ST M32 F401RE   /   ST M32 F4 29DISCO  development  board. In the example project , the compile,  link  flags , and related board settings  ha ve  set  done.  User s  only need  to  modify  the tool paths to  their install  folder.

File   →  Import  →  Select root directory   →  select template  (FreeRTOS_Test)

Figure  3 . 1 . Import existing project.






Figure  3 . 2 . Select the project and copy into the workspace.
The selection  of “ Copy projects into workspace ”  is optional, but it  makes  project management more centralize to a specific  workspace  folder.












Eclipse Tools Environmental   Settings

Build Tools (make & rm) and  Toolchain  path

Once installed the GNU ARM Eclipse plug-ins, users will find the  Global Tools Paths  Configuration page  in  Window  →  Preferences   →   Build .  Here we  fill up  the correct   tool install ing  path .


Figure  3 . 3 . Se t Global Tools Path for Build Tools and Toolchain .

Users can also set  the configuration for  specific  project. Right click on the project and select  Properties   →  C/C++ Build   →  Tools Paths . 



OpenOCD path

  Window  →  Preferences  →   Run/Debug . Here we fill up the  OpenOCD install path .

Figure  3 . 4 . Set  OpenOCD path .


Debug Settings

Here we use GDB OpenOCD   as the debugging method. To setup the debugger,   users  can click  on the  arrow  besides debug icon and select  Debug Configurations .

The first time to configure the GDB OpenOCD Debugging, we have to double click on this option, and a new debug  page will show as below.  

 
Figure  3 . 5 . Setup GDB openOCD Debug  project file .
At the Main Page, filling up the  debugger  name and  which project  file to be downloaded into the target board . 

At the Debugger Page,  select  “ Start OpenOCD locally ”  and  set  Config options  which will change by different target boards   (Corresponding  board scripts  can be found  at   OpenOCD\scripts\ board ) .  

Here we set for  ST M32 F401RE   as  -f board/ st_nucleo_f4.cfg
F or  ST M32 F4 29DISCO  board, use         -f board/stm32f429discovery.cfg


Figure  3 . 6 . Setup GDB OpenOCD Debug project file.
After all the debug settings  have  done , click   Apply   to  save the current  configurations .  


Project Build Flag Settings
In our example project, we have  already set done the  Tool Settings  part.  
Users  don ’ t have  to spend time on these processor/compile/linker settings only if  they  have extra setting requirement.

T he project  settings can  be configured in  the path list below.
  Project     Properties       C/C++ Build    Settings     Tool Settings

Figure  3 . 7 .    The p rocessor configuration menu .



If you create C project, click on  Cross ARM C Compiler     Preprocessor ,   and  press  add  icon  to   add   Compile symbols here.  Include files path can be  indicated in   Includes   folder .


Figure  3 . 8 . Set Compile flag .

C lick on  Cross ARM C  Linker    General  to add Script files  in  ldscripts  folder .
Cross ARM C  Linker    Miscellaneous   to add  other linker flags .



Figure  3 . 9 .  L inker flag  options .
Build and  Run on Target
Setup Target Board
We provide two popular  evaluation  boards:

STM32F401RE  is  with  lower RAM and Flash  size .  If the  application  costs small memory size, this board is a good choice for development.  

STM32F429 -DISCO   is the higher level board in STM32F4 series.  High er  CPU rate with l arge  RAM and Flash  size ,   which is  suitable for a completely application  develop  and verif y .

The USB Driver can be downloaded  from:

STSW-LINK008 for Win vista & Win 7 & Win 8   :  Here
STSW-LINK009 for Win XP  :   Here


STM32F401RE
STM32F429-DISCO


512K Flash
2M Flash
96K RAM
256K RAM
84Mhz
180Mhz
None
8M external SDRAM
~ $ 15  USD
~ $24 USD

Figure  4 . 1 .  Board spec compariso n .


Build Project
After  set Toolchain and Build Tool path ,  now  we can  simply build the project by clicking on the hammer icon  a s the below  figure shows.
If the  building process is successfully, users will  see the  Finished Building words  and  the  binary file ’ s  name  show on  the  build console .


Figure  4 . 2 .   Build project .

Figure  4 . 3 . The binary file s  will build in  the  workspace/project/ Debug folder.


Debug on the Target
Since we have set the debug configurations done  in chapter 3.3, now we can run  the program  on Target board.  



Figure  4 . 4 . Click Debug icon and select the debug name.

Once in the Debug mode, it will switch to the debug view. Users can compare source code and  d isassembly  by step-by-step debug ging. With using  semi - hosting  retarget print ,   t he program running result will show in the OpeOCD console  view  instead of Uart serial port.


Figure  4 . 5 . Click Debug icon and select the debug name.
Example code  
  Structure and flow
In this  chapter , we explain t he code flow of the provided example .   The example code is based on  FreeRTOS  structure and runs on  STM32F401RE /   STM32F4 29DISCO   evb  board.  Users can  develop their library and framework wrapper, and  verify the integration correctness with our framework  through  the  example . 

After importing and build ing  the  project,  you can see the folder structure as figure 5.1.
         We highlight the mainly-used files here   :

Debug : 
The file s after building step  will  be generated in this folder, binary file as   P roject _name .elf .
include:
arsi _api.h  :  Audio  framework  interface  header file.
src:
arsi _api.c :   Audio  framework  interface  source file.  
3 rd  party can implement the content  as the wrapper to operate  with  their library.
main.c  :   The   main  entry code for the example project. 
system:
freertos/cmsis/chip  related code are put here.
input/output pcm files
To verify the  API implementation correctness   and the  process result,  users can create their input file   from  a   test  PCM  file, and store the result to an output  PCM  file.  Both files are put under the project root folder.
To use read/write file function, please enable  #define  USE_FILE .
ld script
The  chip   Memory setting  file  will put here.

    
Figure  5 . 1 .   Folder  structure  of our example project (compiled) .






The key  API  in  main.c     include:
init_task_config  : 
This function filled the basic  information  for the audio framework and the uplink/downlink stream.  
arsi_query_working_buf_size
Query the size of the working buffer .
arsi_create_handler
  Create handler and initialize it .
arsi_set_debug_log_fp
Since the library should not call the print function itself , we  provide the log api for 3 rd  to use for debug  .
arsi_process_ul_buf
Processing microphone/uplink data /aec  data .
arsi_process_dl_buf
Processing playback/downlink data.
arsi_destroy_handler
D e - initialize handler and destroy it .

In our main function, we create a  t ask called  vTestTask () .  This function will simulate  the processing  method with our  a udio framework. 


Figure  5 . 2 . Example code flow.


     As the Figure 5 .2  shows, our audio framework will query 3rd party’s library, feeding the stream parameters in to get the  library needed  buffer size  by   arsi_query_working_buf_size .  A llocat e  a working buffer  and  get  handler address  by  arsi_create_handler .  Register  handler with  the debug function by  arsi_set_debug_log_fp .  After creating related input/output buffers  for uplink and downlink  processing , the task will enter a  for -loop which  process es  500 frames .

     In the loop we execute the main UL/DL buffer processing API.  The input buffer reads data from a test wav file  sequentially   and sends to audio library  via   arsi_process_ul_buf   /  arsi_ process_dl_buf   function s . After processing done, the result will be saved as another wav file.  Users can verified the result by  examine  the  content of   the  file. 

     Once  exit the  processing loop, calling  arsi_destroy_handler   function   to  close  the han d ler.

     In our example code, you can enable  #ifdef   USE_FILE   to put your  own  pcm data file s , currently we have to put UL_Left/UL_Right /DL_IN/AEC_IN files  in ,  and a fter processing, there should create DL_Out/UL_Out   files.
     Another   config  option is   #ifdef  USE_LIB_PARAM ,  here  show s  the  API using  example for Tuning   library  parameter s .    This  API will  not be  used in  DSP   side,  so we    just bypass it  here .  
Code  Configurations

Heap  Memory  S ettings

system/include/freertos/ FreeRTOSConfig.h

Modified     #define   configTOTAL_HEAP_SIZE  ( ( size_t ) (  SIZE  * 1024 )  
SIZE:  the required heap size in example project.

M emory  size that can be delcared in program will reference from the HW SRAM ability. The memory info is set in  ldscripts/stm32_flash.ld .  For example, the maximum SRAM size of STM32F401RE is 96K, th us  the  configTOTAL_HEAP_SIZE +  global var   size  should below  96K .

During the compilation, you will  see the below information, and the  bss  indicate s  the used RAM size, if  the declared  heap size  was over  t he limits , an  build error   occurred .

     text           data        bss              dec             hex           filename
    23036       120       93816       116972       1c8ec         FreeRTOS_Test.elf

Stack     Memory  S ettings

S rc/ m ain.c

Modified  xTaskCreate( vTestTask, "Test",  usStackDepth , (void*)idx, 3, NULL );

usStackDepth  :  The size of the task stack specified as the number of    variables the stack can hold - not the number of bytes.  For example, if    the stack is 16 bits wide and usStackDepth is defined as 100, 200 bytes    will be allocated for stack storage.

Calculate MCPS on ARM CortexM

     If your Cortex M microcontroller  have DWT  (Data Watchpoint and Trace) unit, you can use its register to count the number of cycles in which some code is executed. This could be useful for performance measuring.  

#include <stdint.h>
volatile int * DWT_CONTROL  = (int *)0xE0001000; volatile int * DWT_CYCCNT  = (int *)0xE0001004; volatile int * DEMCR  = (int *)0xE000EDFC; #define  CPU_RESET_CYCLECOUNTER  do { *DEMCR = *DEMCR | 0x01000000; \ *DWT_CYCCNT = 0; \ *DWT_CONTROL = *DWT_CONTROL | 1 ; } while(0)

void main() {
volatile uint32_t count = 0; CPU_RESET_CYCLECOUNTER; for(idx=0; idx < 100 ; idx++) {          __asm volatile("nop"); } count = *DWT_CYCCNT; printf("\n\r 1 Cycle count %d", count) ;
}


