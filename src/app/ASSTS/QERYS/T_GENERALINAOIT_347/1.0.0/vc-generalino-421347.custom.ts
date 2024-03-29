import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-generalino-421347.model';
import {
  ASSTSService
} from "src/app/ASSTS/service-modules/ASSTS.service";
import {
  CobisCommonsService,
  ReportParameter
} from 'cobis-commons';
import {
  CobisModelChangeCallbackEventArgs,
  CobisModelChangeEventArgs,
  CobisModelChangeGroupEventsArgs,
  CobisModelChangedGroupCallbackEventsArgs,
  CobisModelCustomValidateEventArgs,
  CobisModelCustomValidationEventArgs,
  CobisModelExecuteCommandEventArgs,
  CobisModelExecuteCommandCallbackEventArgs,
  CobisModelExecuteQueryCallbackEventArgs,
  CobisModelExecuteQueryEventArgs,
  CobisModelExportColumnsExecuteEventArgs,
  CobisModelInitDataCallbackEventArgs,
  CobisModelInitDataEventArgs,
  CobisModelItemGroupInformation,
  CobisModelLoadCatalogCallbackEventArgs,
  CobisModelLoadCatalogEventArgs,
  CobisModelLoadHeaderEventArgs,
  CobisModelOnCloseModalEventArgs,
  CobisModelOnCloseModalCallbackEventArgs,
  CobisModelOnInputButtonEventArgs,
  CobisModelOnTabClosingEventArgs,
  CobisModelRenderEventArgs,
  CobisModelGridAfterLeaveInLineRowEventArgs,
  CobisModelGridAfterCloseDialogEventArgs,
  CobisModelGridBeforeEnterInLineRowEventArgs,
  CobisModelGridBeforeOpenDialogEventArgs,
  CobisModelGridCommandCallbackEventArgs,
  CobisModelGridCommandExecuteEventArgs,
  CobisModelGridInitColumnTemplateEventArgs,
  CobisModelGridInitDetailTemplateEventArgs,
  CobisModelGridInitEditColumnTemplateEventArgs,
  CobisModelGridRowActionEventArgs,
  CobisModelGridRowActionCallbackEventArgs,
  CobisModelGridRowCommandCallbackEventArgs,
  CobisModelGridRowCommandExecuteEventArgs,
  CobisModelGridRowRenderingEventArgs,
  CobisModelGridRowSelectingEventArgs,
  CobisModelGridRowSelectingCallbackEventArgs,
  CobisModelGridShowRowDetailIconEventArgs,
  VisualValidationTypeEnum,
  ICobisCustomValidationsEventArgs,
  CobisDesignerCustomEvent
} from 'cobis-designer';

/* variables locales de T_GENERALINAOIT_347*/

export class VcGeneralino421347Custom extends CobisDesignerCustomEvent {

  task_changeWithError: any = {};

  constructor(public cobis: CobisCommonsService, private ASSTS: ASSTSService) {
    super();
  }




  //*********** COMENTARIOS DE AYUDA **************
  //  Para imprimir mensajes en consola
  //  console.log("executeCommand");

  //  Para enviar mensaje use
  //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

  //  Para evitar que se continue con la validación a nivel de servidor
  //  eventArgs.commons.execServer = false;

  //**********************************************************
  //  Eventos de VISUAL ATTRIBUTES
  //**********************************************************   

  //"TaskId": "T_GENERALINAOIT_347"

  // (Button) 
  task_executeCommand_VA_VABUTTONDDDDEEH_709203 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let nav: any = executeCommandEventArgs.commons.api.navigation;
    nav.label = this.cobis.translate("ASSTS.LBL_ASSTS_INACINFEN_59763");
    nav.address = {
      moduleId: 'BUSIN',
      subModuleId: 'FLCRE',
      taskId: 'T_BUSINDMGDSMDC_905',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_FINANCIAII_971905'
    };
    nav.modalProperties = {
      size: 'lg',
      callFromGrid: false
    };
    nav.queryParameters = {
      mode: executeCommandEventArgs.commons.constants.mode.Query
    };
    nav.customDialogParameters = {
      opNumBank: entities.Loan.loanBankID,
      sourceFrom: 'GD',
      mode: 'Q'
    };
    nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: GeneralInformationForm
  task_initData_VC_GENERALINO_421347 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = true;

  };


  //Start signature to Callback event to VC_GENERALINO_421347
  task_initDataCallback_VC_GENERALINO_421347 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    let api: any = initDataCallbackEventArgs.commons.api;

    (entities.ColumnsDataValue.col30 == null) ? api.vc.viewState.VA_TEXTINPUTBOXYLL_293203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXYLL_293203.visible = true;
    (entities.ColumnsDataValue.col70 == null) ? api.vc.viewState.VA_TEXTINPUTBOXCLV_313203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXCLV_313203.visible = true;
    (entities.ColumnsDataValue.col82 == null) ? api.vc.viewState.VA_TEXTINPUTBOXFHY_331203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXFHY_331203.visible = true;
    (entities.ColumnsDataValue.col91 == null) ? api.vc.viewState.VA_TEXTINPUTBOXXCX_878203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXXCX_878203.visible = true;
    (entities.ColumnsDataValue.col11 == null) ? api.vc.viewState.VA_COL11DMRXFYBTRJ_832203.visible = false: api.vc.viewState.VA_COL11DMRXFYBTRJ_832203.visible = true;
    (entities.ColumnsDataValue.col89 == null) ? api.vc.viewState.VA_TEXTINPUTBOXOZJ_807203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXOZJ_807203.visible = true;
    (entities.ColumnsDataValue.col3 == null || entities.ColumnsDataValue.col1 == undefined) ? api.vc.viewState.VA_TEXTINPUTBOXCEU_727203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXCEU_727203.visible = true;
    (entities.ColumnsDataValue.col74 == null) ? api.vc.viewState.VA_TEXTINPUTBOXZST_196203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXZST_196203.visible = true;
    (entities.ColumnsDataValue.col4 == null) ? api.vc.viewState.VA_TEXTINPUTBOXKKT_290203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXKKT_290203.visible = true;
    (entities.ColumnsDataValue.col63 == null) ? api.vc.viewState.VA_TEXTINPUTBOXQVD_784203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXQVD_784203.visible = true;
    (entities.ColumnsDataValue.col28 == null) ? api.vc.viewState.VA_TEXTINPUTBOXFUR_725203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXFUR_725203.visible = true;
    (entities.ColumnsDataValue.col83 == null) ? api.vc.viewState.VA_TEXTINPUTBOXNLU_276203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXNLU_276203.visible = true;
    (entities.ColumnsDataValue.col127 == null) ? api.vc.viewState.VA_TEXTINPUTBOXXAE_419203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXXAE_419203.visible = true;
    (entities.ColumnsDataValue.col96 == null) ? api.vc.viewState.VA_TEXTINPUTBOXNUC_515203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXNUC_515203.visible = true;
    (entities.ColumnsDataValue.col116 == null) ? api.vc.viewState.VA_TEXTINPUTBOXMIJ_255203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXMIJ_255203.visible = true;
    (entities.ColumnsDataValue.col148 == null) ? api.vc.viewState.VA_COL148YHTMQIFBH_165203.visible = false: api.vc.viewState.VA_COL148YHTMQIFBH_165203.visible = true;
    (entities.ColumnsDataValue.col98 == null) ? api.vc.viewState.VA_COL98VYAYLZCUKZ_984203.visible = false: api.vc.viewState.VA_COL98VYAYLZCUKZ_984203.visible = true;
    (entities.ColumnsDataValue.col149 == null) ? api.vc.viewState.VA_COL149ECRVIIDXJ_360203.visible = false: api.vc.viewState.VA_COL149ECRVIIDXJ_360203.visible = true;
    (entities.ColumnsDataValue.col94 == null) ? api.vc.viewState.VA_TEXTINPUTBOXTXW_844203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXTXW_844203.visible = true;
    (entities.ColumnsDataValue.col150 == null) ? api.vc.viewState.VA_COL150TJUVFKMWM_571203.visible = false: api.vc.viewState.VA_COL150TJUVFKMWM_571203.visible = true;
    //(entities.ColumnsDataValue.col16 == null) ? api.vc.viewState.VA_TEXTINPUTBOXVHS_357203.visible = false :  api.vc.viewState.VA_TEXTINPUTBOXVHS_357203.visible = true;
    (entities.ColumnsDataValue.col151 == null) ? api.vc.viewState.VA_COL151XEUXPLAEA_433203.visible = false: api.vc.viewState.VA_COL151XEUXPLAEA_433203.visible = true;
    (entities.ColumnsDataValue.col17 == null) ? api.vc.viewState.VA_TEXTINPUTBOXVBB_693203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXVBB_693203.visible = true;
    (entities.ColumnsDataValue.col138 == null) ? api.vc.viewState.VA_TEXTINPUTBOXWVS_331203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXWVS_331203.visible = true;
    (entities.ColumnsDataValue.col13 == null) ? api.vc.viewState.VA_TEXTINPUTBOXLAA_716203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXLAA_716203.visible = true;
    (entities.ColumnsDataValue.col139 == null) ? api.vc.viewState.VA_TEXTINPUTBOXEUN_350203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXEUN_350203.visible = true;
    (entities.ColumnsDataValue.col71 == null) ? api.vc.viewState.VA_TEXTINPUTBOXPCU_828203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXPCU_828203.visible = true;
    (entities.ColumnsDataValue.col100 == null) ? api.vc.viewState.VA_TEXTINPUTBOXVBP_896203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXVBP_896203.visible = true;
    (entities.ColumnsDataValue.col102 == null) ? api.vc.viewState.VA_COL102IZHQPGLGQ_823203.visible = false: api.vc.viewState.VA_COL102IZHQPGLGQ_823203.visible = true;
    (entities.ColumnsDataValue.col103 == null) ? api.vc.viewState.VA_TEXTINPUTBOXSFC_390203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXSFC_390203.visible = true;
    (entities.ColumnsDataValue.col88 == null) ? api.vc.viewState.VA_TEXTINPUTBOXZSP_614203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXZSP_614203.visible = true;
    (entities.ColumnsDataValue.col93 == null) ? api.vc.viewState.VA_TEXTINPUTBOXXQS_367203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXXQS_367203.visible = true;
    (entities.ColumnsDataValue.col106 == null) ? api.vc.viewState.VA_TEXTINPUTBOXDFL_233203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXDFL_233203.visible = true;
    (entities.ColumnsDataValue.col10 == null) ? api.vc.viewState.VA_TEXTINPUTBOXLDN_789203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXLDN_789203.visible = true;
    (entities.ColumnsDataValue.col144 == null) ? api.vc.viewState.VA_TEXTINPUTBOXPRC_818203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXPRC_818203.visible = true;
    (entities.ColumnsDataValue.col92 == null) ? api.vc.viewState.VA_TEXTINPUTBOXAYN_905203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXAYN_905203.visible = true;
    (entities.ColumnsDataValue.col146 == null) ? api.vc.viewState.VA_COL146AYXFKCRYI_168203.visible = false: api.vc.viewState.VA_COL146AYXFKCRYI_168203.visible = true;
    (entities.ColumnsDataValue.col128 == null) ? api.vc.viewState.VA_TEXTINPUTBOXHNK_820203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXHNK_820203.visible = true;
    (entities.ColumnsDataValue.col136 == null) ? api.vc.viewState.VA_TEXTINPUTBOXMWQ_662203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXMWQ_662203.visible = true;
    (entities.ColumnsDataValue.col132 == null) ? api.vc.viewState.VA_TEXTINPUTBOXYAE_738203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXYAE_738203.visible = true;
    (entities.ColumnsDataValue.col137 == null) ? api.vc.viewState.VA_TEXTINPUTBOXPRR_754203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXPRR_754203.visible = true;
    (entities.ColumnsDataValue.col14 == null) ? api.vc.viewState.VA_TEXTINPUTBOXFJI_119203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXFJI_119203.visible = true;
    (entities.ColumnsDataValue.col37 == null) ? api.vc.viewState.VA_TEXTINPUTBOXSJD_345203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXSJD_345203.visible = true;
    (entities.ColumnsDataValue.col38 == null) ? api.vc.viewState.VA_TEXTINPUTBOXLZX_625203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXLZX_625203.visible = true;
    (entities.ColumnsDataValue.col140 == null) ? api.vc.viewState.VA_TEXTINPUTBOXZYM_339203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXZYM_339203.visible = true;
    (entities.ColumnsDataValue.col141 == null) ? api.vc.viewState.VA_TEXTINPUTBOXTAU_538203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXTAU_538203.visible = true;
    (entities.ColumnsDataValue.col119 == null) ? api.vc.viewState.VA_TEXTINPUTBOXWQL_188203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXWQL_188203.visible = true;
    (entities.ColumnsDataValue.col133 == null) ? api.vc.viewState.VA_TEXTINPUTBOXQNT_219203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXQNT_219203.visible = true;
    (entities.ColumnsDataValue.col95 == null) ? api.vc.viewState.VA_TEXTINPUTBOXXYN_505203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXXYN_505203.visible = true;
    (entities.ColumnsDataValue.col97 == null) ? api.vc.viewState.VA_TEXTINPUTBOXGBW_313203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXGBW_313203.visible = true;
    (entities.ColumnsDataValue.col134 == null) ? api.vc.viewState.VA_TEXTINPUTBOXKJW_728203.visible = false: api.vc.viewState.VA_TEXTINPUTBOXKJW_728203.visible = true;
    (entities.ColumnsDataValue.col32 == null) ? api.vc.viewState.VA_COL32CDFPUYWBGD_758203.visible = false: api.vc.viewState.VA_COL32CDFPUYWBGD_758203.visible = true;
    (entities.ColumnsDataValue.col46 == null) ? api.vc.viewState.VA_COL46RBGZXOSXUD_578203.visible = false: api.vc.viewState.VA_COL46RBGZXOSXUD_578203.visible = true;
    (entities.ColumnsDataValue.col33 == null) ? api.vc.viewState.VA_COL33GXLNAEOZIW_513203.visible = false: api.vc.viewState.VA_COL33GXLNAEOZIW_513203.visible = true;
    (entities.ColumnsDataValue.col54 == null) ? api.vc.viewState.VA_COL54TKWEEBKVXN_134203.visible = false: api.vc.viewState.VA_COL54TKWEEBKVXN_134203.visible = true;
    (entities.ColumnsDataValue.col44 == null) ? api.vc.viewState.VA_COL44RQKRIFDDCK_361203.visible = false: api.vc.viewState.VA_COL44RQKRIFDDCK_361203.visible = true;
    (entities.ColumnsDataValue.col49 == null) ? api.vc.viewState.VA_COL49ZEUCHXHDSZ_263203.visible = false: api.vc.viewState.VA_COL49ZEUCHXHDSZ_263203.visible = true;
    (entities.ColumnsDataValue.col81 == null) ? api.vc.viewState.VA_COL81JBFTYRSPYI_282203.visible = false: api.vc.viewState.VA_COL81JBFTYRSPYI_282203.visible = true;
    (entities.ColumnsDataValue.col111 == null) ? api.vc.viewState.VA_COL111PZXDZUYUC_787203.visible = false: api.vc.viewState.VA_COL111PZXDZUYUC_787203.visible = true;
    (entities.ColumnsDataValue.col113 == null) ? api.vc.viewState.VA_COL113YQSWHDUHL_890203.visible = false: api.vc.viewState.VA_COL113YQSWHDUHL_890203.visible = true;
    (entities.ColumnsDataValue.col48 == null) ? api.vc.viewState.VA_COL48UDRRPRVRAD_844203.visible = false: api.vc.viewState.VA_COL48UDRRPRVRAD_844203.visible = true;
    (entities.ColumnsDataValue.col53 == null) ? api.vc.viewState.VA_COL53CZDOJNOMFT_346203.visible = false: api.vc.viewState.VA_COL53CZDOJNOMFT_346203.visible = true;
    (entities.ColumnsDataValue.col112 == null) ? api.vc.viewState.VA_COL112OCPGNLXFG_495203.visible = false: api.vc.viewState.VA_COL112OCPGNLXFG_495203.visible = true;
    (entities.ColumnsDataValue.col80 == null) ? api.vc.viewState.VA_COL80ASFOWXJRDC_132203.visible = false: api.vc.viewState.VA_COL80ASFOWXJRDC_132203.visible = true;
    (entities.ColumnsDataValue.col35 == null) ? api.vc.viewState.VA_COL35HREVITBWJO_552203.visible = false: api.vc.viewState.VA_COL35HREVITBWJO_552203.visible = true;
    (entities.ColumnsDataValue.col34 == null) ? api.vc.viewState.VA_COL34HWLCGTUDDY_405203.visible = false: api.vc.viewState.VA_COL34HWLCGTUDDY_405203.visible = true;
    (entities.ColumnsDataValue.col77 == null) ? api.vc.viewState.VA_COL77JLESNGFECP_839203.visible = false: api.vc.viewState.VA_COL77JLESNGFECP_839203.visible = true;
    (entities.ColumnsDataValue.col18 == null) ? api.vc.viewState.VA_COL18MPQAUPJEQF_886203.visible = false: api.vc.viewState.VA_COL18MPQAUPJEQF_886203.visible = true;
    (entities.ColumnsDataValue.col22 == null) ? api.vc.viewState.VA_COL22GPNCCEADAN_455203.visible = false: api.vc.viewState.VA_COL22GPNCCEADAN_455203.visible = true;
    (entities.ColumnsDataValue.col23 == null) ? api.vc.viewState.VA_COL23ZUQVNTSTGF_643203.visible = false: api.vc.viewState.VA_COL23ZUQVNTSTGF_643203.visible = true;
    (entities.ColumnsDataValue.col24 == null) ? api.vc.viewState.VA_COL24NFMYARIPPW_188203.visible = false: api.vc.viewState.VA_COL24NFMYARIPPW_188203.visible = true;
    (entities.ColumnsDataValue.col25 == null) ? api.vc.viewState.VA_COL25RWYMCMPQKL_227203.visible = false: api.vc.viewState.VA_COL25RWYMCMPQKL_227203.visible = true;
    (entities.ColumnsDataValue.col169 == null) ? api.vc.viewState.VA_COL169OXNPIMJZK_188203.visible = false: api.vc.viewState.VA_COL169OXNPIMJZK_188203.visible = true;
    (entities.ColumnsDataValue.col170 == null) ? api.vc.viewState.VA_COL170OEOBJNBNE_695203.visible = false: api.vc.viewState.VA_COL170OEOBJNBNE_695203.visible = true;
    (entities.ColumnsDataValue.sectorDesc == null) ? api.vc.viewState.VA_COL147RUDCEIBHO_731203.visible = false: api.vc.viewState.VA_COL147RUDCEIBHO_731203.visible = true;
    //SI NO EXISTE CATEGORIA ES PORQUE ES UNA INDIVIDUAL POR LO TANTO SE OCULTA EL GRUPO DE DATOS GRUPALES
    api.vc.viewState.G_GENERALINO_434203.visible = (entities.ColumnsDataValue.col154 == null) ? false : true;
    api.vc.viewState.VA_COL155VLXVEOBDY_344203.visible = (entities.ColumnsDataValue.col155 == null) ? false : true;
    api.vc.viewState.VA_COL157AGGZBEULZ_816203.visible = (entities.ColumnsDataValue.col157 == null) ? false : true;
    api.vc.viewState.G_GENERALINO_434203.label = (entities.ColumnsDataValue.col162 == null) ? api.vc.viewState.G_GENERALINO_434203.label : api.viewState.translate(api.vc.viewState.G_GENERALINO_434203.label) + ' ' + entities.ColumnsDataValue.col162;
  };



}