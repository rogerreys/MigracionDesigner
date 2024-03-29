import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-refinancsl-902781.model';
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

/* variables locales de T_REFINANCELISS_781*/
let totalBalance: any = 0;
let totalOther: any = 0;
let totalAdicional: any = 0;

export class VcRefinancsl902781Custom extends CobisDesignerCustomEvent {

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

  cleanElements: any = (entities: Model) => {
    entities.RefinanceLoanFilter.totalRefinance = 0;
    entities.RefinanceLoanFilter.totalToRenew = entities.RefinanceLoanFilter.totalRefinance;
    entities.RefinanceLoanFilter.newLoanTerm = 0;
    // entities.RefinanceLoanFilter.periodicity = 'MES(ES)';
    //entities.RefinanceLoanFilter.newLoanCurrency = 'MX';
    entities.RefinanceLoanFilter.overDue = 'NO';
    entities.RefinanceLoanFilter.capitalBalance = 0;
    entities.RefinanceLoanFilter.interestBalance = 0;
    entities.RefinanceLoanFilter.arrearsBalance = 0;
    entities.RefinanceLoanFilter.otherBalance = 0;
    entities.RefinanceLoanFilter.aditionalBalance = 0;

    entities.RefinanceLoanFilter.capitalBalanceNew = 0;
    entities.RefinanceLoanFilter.interestBalanceNew = 0;
    entities.RefinanceLoanFilter.otherBalanceNew = 0;
    entities.RefinanceLoanFilter.aditionalBalanceNew = 0;

    entities.RefinanceLoanFilter.capitalBalanceLocal = 0;
    entities.RefinanceLoanFilter.interestBalanceLocal = 0;
    entities.RefinanceLoanFilter.otherBalanceLocal = 0;
    entities.RefinanceLoanFilter.aditionalBalanceLocal = 0;
    entities.RefinanceLoanFilter.valuePay = 0;
    entities.RefinanceLoanFilter.graceDividend = 0;

    entities.RefinanceLoanFilter.additionalValue = 0;
    entities.RefinanceLoanFilter.fixedPayDay = false;
    entities.RefinanceLoanFilter.periodicity = "M";
    entities.RefinanceLoanFilter.newLoanTerm = 12;
    entities.RefinanceLoanFilter.termInterest = 1;
    entities.RefinanceLoanFilter.termCapital = 1;
    entities.RefinanceLoanFilter.paymentDay = 0;
    entities.RefinanceLoanFilter.termGraceInt = 0;
    entities.RefinanceLoanFilter.termGraceCap = 0;
    entities.RefinanceLoanFilter.typeGrace = "S";
    entities.RefinanceLoanFilter.typeFee = "M";


    entities.RefinanceLoanFilter.basicInsurance = false;

  };



  task_gridRowCommand_VA_CHECKBOXKZZRISM_582515 = (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
  ) => {

    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('RefinanceLoans', gridRowCommandEventArgs.rowIndex, {
      selected: (gridRowCommandEventArgs.rowData.selected !== true)
    });

  };




  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.graceDividend (TextInputBox) View: RefinanceLoansFilter
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_5032SUOKWXIJNUR_934515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;

    let grace: any = (entities.RefinanceLoanFilter.termGraceInt) ? entities.RefinanceLoanFilter.termGraceInt : 0;
    let numDividend: any = (entities.RefinanceLoanFilter.graceDividend) ? entities.RefinanceLoanFilter.graceDividend : 0;
    let totalTerm: any = grace + numDividend;

    if (entities.RefinanceLoanFilter.typeGrace == 'S' && totalTerm > entities.RefinanceLoanFilter.newLoanTerm!) {

      changedEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELNUMDEDS_61097', false, null, this.ASSTS.timer);

      entities.RefinanceLoanFilter.graceDividend = 0;

    } else if (entities.RefinanceLoanFilter.typeGrace == 'S' && entities.RefinanceLoanFilter.graceDividend! < 0) {
      changedEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELNUMDEER_90307', false, null, this.ASSTS.timer);

      entities.RefinanceLoanFilter.graceDividend = 0;
    }
  };

  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.addicionalPayMethod (DropDownList) View: RefinanceLoansFilter
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_ADDICIONALPAYOH_649515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    if (changedEventArgs.commons.api.viewState.getDataItem("VA_ADDICIONALPAYOH_649515").pCobis == 4) {
      changedEventArgs.commons.api.viewState.show('VA_ACCOUNTYATVYIRL_740515');
    } else {
      changedEventArgs.commons.api.viewState.hide('VA_ACCOUNTYATVYIRL_740515');
    }
  };


  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.additionalValue (TextInputBox) View: RefinanceLoansFilter
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_ADDITIONALVAUUU_896515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    if (changedEventArgs.newValue != null) {
      changedEventArgs.commons.execServer = true;
    } else {
      changedEventArgs.commons.execServer = false;
      entities.RefinanceLoanFilter.additionalValue = 0.00;
    }

    /*entities.RefinanceLoanFilter.capitalBalance = 0;
        entities.RefinanceLoanFilter.interestBalance = "";        
        entities.RefinanceLoanFilter.otherBalance = 0;
        entities.RefinanceLoanFilter.aditionalBalance = 0;
        var additionalValue = entities.RefinanceLoanFilter.additionalValue;
        var totalRefinance  = 0;
        
        for (var i = 0; i < entities.RefinanceLoans.length; i++) {
            entities.RefinanceLoanFilter.capitalBalance = entities.RefinanceLoanFilter.capitalBalance + entities.RefinanceLoans[i].capitalBalance
            totalRefinance = totalRefinance + entities.RefinanceLoans[i].capitalBalance;            
            entities.RefinanceLoanFilter.otherBalance = entities.RefinanceLoanFilter.otherBalance + entities.RefinanceLoans[i].interestBalance;
            totalRefinance = totalRefinance + entities.RefinanceLoans[i].interestBalance;
            entities.RefinanceLoanFilter.otherBalance = entities.RefinanceLoanFilter.otherBalance + entities.RefinanceLoans[i].defaultBalance
            totalRefinance = totalRefinance + entities.RefinanceLoans[i].defaultBalance;
            entities.RefinanceLoanFilter.otherBalance = entities.RefinanceLoanFilter.otherBalance + entities.RefinanceLoans[i].otherConceptsBalance
            totalRefinance = totalRefinance + entities.RefinanceLoans[i].otherConceptsBalance;
            
        }
        totalRefinance  = totalRefinance + additionalValue;
   // totalRefinance = kendo.toString(totalRefinance, "n2");
   // additionalValue = kendo.toString(additionalValue, "n2");
        entities.RefinanceLoanFilter.aditionalBalance = additionalValue;
        entities.RefinanceLoanFilter.totalRefinance = totalRefinance
    entities.RefinanceLoanFilter.totalToRenew = entities.RefinanceLoanFilter.totalRefinance*/

  };


  //Start signature to Callback event to VA_ADDITIONALVAUUU_896515
  task_changeCallback_VA_ADDITIONALVAUUU_896515 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
  };




  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.capitalizeBalance (RadioButtonList) View: RefinanceLoansFilter
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CAPITALIZEBANNE_580515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;
    //changedEventArgs.commons.serverParameters.RefinanceLoanFilter = true;

  };


  //Start signature to Callback event to VA_CAPITALIZEBANNE_580515
  task_changeCallback_VA_CAPITALIZEBANNE_580515 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
  };


  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.clientName (TextInputButton) View: RefinanceLoansFilter
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CLIENTNAMEBGXWU_198515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('RefinanceLoans');
    this.cleanElements(entities);

  };



  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.newLoanCurrency (DropDownList) View: RefinanceLoansFilter
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NEWLOANCURRENNN_364515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;
    //changedEventArgs.commons.serverParameters.RefinanceLoanFilter = true;

  };


  //Start signature to Callback event to VA_NEWLOANCURRENNN_364515
  task_changeCallback_VA_NEWLOANCURRENNN_364515 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    if (changeCallbackEventArgs.success) {
      /*changeCallbackEventArgs.commons.api.viewState.label("VA_VASIMPLELABELLL_416515", cobis.translate("ASSTS.LBL_ASSTS_TOTALAREE_10091") + " " + "(" +
        changeCallbackEventArgs.commons.api.viewState.getDataItem("VA_NEWLOANCURRENNN_364515").value + ")");*/
    }
  };


  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.payMethodCurrency (DropDownList) View: RefinanceLoansFilter
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PAYMETHODCURCYE_344515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = true;

    changedEventArgs.commons.api.viewState.hide('VA_ACCOUNTYATVYIRL_740515');
  };



  //Start signature to Callback event to VA_PAYMETHODCURCYE_344515
  task_changeCallback_VA_PAYMETHODCURCYE_344515 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
  };


  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.preventionProgram (ComboBox) View: RefinanceLoansFilter
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PREVENTIONPRRAM_747515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (String(entities.RefinanceLoanFilter.totalRefinance).indexOf(",") != -1) {
      entities.RefinanceLoanFilter.totalRefinance = Number(String(entities.RefinanceLoanFilter.totalRefinance).replace(',', ''));

    }

    changedEventArgs.commons.serverParameters.RefinanceLoanFilter = true;
    changedEventArgs.commons.serverParameters.RulerData = true;
    changedEventArgs.commons.serverParameters.RulerResult = true;
    if (entities.RefinanceLoanFilter.preventionProgram == "NAP") {
      entities.RefinanceLoanFilter.totalToRenew = entities.RefinanceLoanFilter.totalRefinance;
      changedEventArgs.commons.execServer = false;
    } else {
      let operType: any = entities.RefinanceLoanFilter.operationType;
      if (this.cobis.utils.isUndefined(operType) || operType == null || operType == '') {
        changedEventArgs.commons.execServer = false;
        changedEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_DEBESELTA_29044', false, null, this.ASSTS.timer);
        entities.RefinanceLoanFilter.preventionProgram = "NAP";
        changedEventArgs.commons.api.viewState.focus("VA_OPERATIONTYPEEE_619515");
      } else {
        changedEventArgs.commons.execServer = true;
      }
    }
  };

  //Start signature to Callback event to VA_PREVENTIONPRRAM_747515
  task_changeCallback_VA_PREVENTIONPRRAM_747515 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
    let result: any = 0;

    if (this.cobis.utils.isDefined(entities.RulerResult.returnResults)) {
      result = parseInt(entities.RulerResult.returnResults?.match(/(\d+)/g));
    }
    let valueAmount: any = entities.RefinanceLoanFilter.totalRefinance;
    if (valueAmount > 150000) {
      entities.RefinanceLoanFilter.totalToRenew = valueAmount;
    } else {
      let amoutCalculator: any = parseFloat(result) + entities.RefinanceLoanFilter.totalRefinance!;
      if (amoutCalculator > 150000) {
        entities.RefinanceLoanFilter.totalToRenew = 150000;
      } else {
        entities.RefinanceLoanFilter.totalToRenew = amoutCalculator;
      }
    }
  };



  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.termGraceInt (TextInputBox) View: RefinanceLoansFilter
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TERMGRACEINTJNV_305515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    if (entities.RefinanceLoanFilter.termGraceInt == 0 && entities.RefinanceLoanFilter.typeGrace == 'S') {
      entities.RefinanceLoanFilter.graceDividend = 0;
    }

  };



  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.typeGrace (DropDownList) View: RefinanceLoansFilter
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TYPEGRACECCQFCY_562515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    let viewState: any = changedEventArgs.commons.api.viewState;
    changedEventArgs.commons.execServer = false;

    if (changedEventArgs.newValue == 'S') {
      viewState.show('VA_5032SUOKWXIJNUR_934515');
    } else {
      viewState.hide('VA_5032SUOKWXIJNUR_934515');
      entities.RefinanceLoanFilter.graceDividend = 0;
    }
  };

  // (Button) 
  task_executeCommand_CM_TREFINAN_4A_ = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = this.cobis.translate("ASSTS.LBL_ASSTS_RENOVACMA_67253");

    this.ASSTS.container.changeCurrentTab(idAux, urlAux, nameAux, true);
  };


  // (Button) 
  task_executeCommand_CM_TREFINAN_9NC = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let msgResourceID: any = "";
    let hasError: any = false;

    if (entities.RefinanceLoanFilter.additionalValue == null)
      entities.RefinanceLoanFilter.additionalValue = 0;

    if (entities.RefinanceLoans.length == 0) {
      hasError = true;
      msgResourceID = "ASSTS.MSG_ASSTS_NOEXISTRI_36661";
    }

    if (!hasError && !entities.RefinanceLoanFilter.operationType) {
      hasError = true;
      msgResourceID = "ASSTS.MSG_ASSTS_ELCAMPOOR_72789";
    }

    if (!hasError && entities.RefinanceLoanFilter.totalRefinance! <= 0) {
      hasError = true;
      msgResourceID = "ASSTS.MSG_ASSTS_ELSALDOAU_44947";
    }

    if (!hasError && entities.RefinanceLoanFilter.additionalValue < 0) {
      hasError = true;
      msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18739";
    }

    if (entities.RefinanceLoanFilter.additionalValue > 0) {
      if (!hasError && !entities.RefinanceLoanFilter.addicionalPayMethod) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_ELCAMPOLR_45229";
      }

    }

    if (entities.RefinanceLoanFilter.capitalizeBalance == "N" && entities.RefinanceLoanFilter.valuePay != 0) {
      hasError = true;
      msgResourceID = "ASSTS.MSG_ASSTS_DEBEPAGUS_92215";
    }


    if (!hasError) {
      let response: any = await firstValueFrom(
        executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_ESTSEGUAL_93590")
      );

      switch (response.buttonIndex) {
        case 0: //cancel
          executeCommandEventArgs.commons.execServer = false;
          return false;
        case 1: //accept
          executeCommandEventArgs.commons.execServer = true;
          return true;

      }
    }


    if (hasError) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation(msgResourceID, false, null, this.ASSTS.timer);
    } else {
      executeCommandEventArgs.commons.execServer = true;
    }
  };

  //Start signature to Callback event to CM_TREFINAN_9NC
  task_executeCommandCallback_CM_TREFINAN_9NC = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;
    if (executeCommandCallbackEventArgs.success) {
      viewState.disable('CM_TREFINAN_9NC', true)
      viewState.show("G_REFINANERL_686515");
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess("ASSTS.LBL_ASSTS_SALDOOTOR_36723", true);
    } else {
      //Se inhabilitan los botones
      viewState.enable('CM_TREFINAN_9NC', true)
      viewState.hide("G_REFINANERL_686515");
    }
  };


  //ListaFormaPagoQuery Entity: ListaFormaPago
  task_executeQuery_Q_LISTOOGA_DP31 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.moneda = executeQueryEventArgs.commons.api.viewState.getDataItem("VA_PAYMETHODCURCYE_344515").code;
    executeQueryEventArgs.parameters.tipo = 1;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaFormaPago = true;
  };


  //Start signature to Callback event to Q_LISTOOGA_DP31
  task_executeQueryCallback_Q_LISTOOGA_DP31 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //RenewableOperationsQuery Entity: 
  task_executeQuery_Q_REFINAAA_3375 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.client = executeQueryEventArgs.commons.api.vc.model.RefinanceLoanFilter.clientID;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };


  //Start signature to Callback event to Q_REFINAAA_3375
  task_executeQueryCallback_Q_REFINAAA_3375 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  task_gridInitColumnTemplate_QV_3375_11342 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {
    //if(idColumn === 'NombreColumna'){
    //  return "<span></span>";
    //}
    //if(idColumn === 'NombreColumna'){
    //  return  "#=nombreColumna#" ;
    //}

    /* if (idColumn === 'selected') {
         return "<div><input type='checkbox' ng-click='vc.grids.QV_3375_11342.events.customRowClick($event,\"VA_CHECKBOXKZZRISM_582515\",\"RefinanceLoans\",\"QV_3375_11342\")' /></div>";

     }*/

    if (idColumn === 'selected') {
      return "<input name='selected' type='checkbox' value='#=selected#' #=selected?checked='checked':''# data-bind='value:uno' ng-click='vc.grids.QV_3375_11342.events.customRowClick($event,\"VA_CHECKBOXKZZRISM_582515\",\"EntidadPadre\",\"QV_3375_11342\")'/>";

    }
  };



  task_gridInitEditColumnTemplate_QV_3375_11342 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {
    //if(idColumn === 'NombreColumna'){
    //  return "<span></span>";
    //}
    //if(idColumn === 'NombreColumna'){
    //  return  "<span data-bind='text:nombreColumna'><span>" ;
    //}
  };






  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: RefinanceLoansFilter
  task_initData_VC_REFINANCSL_902781 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let viewState: any = initDataEventArgs.commons.api.viewState;
    viewState.hide("G_REFINANERL_686515");
    viewState.hide("VA_ACCOUNTYATVYIRL_740515");
    entities.RefinanceLoanFilter.typeRenovation = "R";
    entities.RefinanceLoanFilter.preventionProgram = "NAP";
    viewState.hide("VA_PREVENTIONPRRAM_747515");
    viewState.hide("VA_BASICINSURANCEC_861515");
    viewState.disable("CM_TREFINAN_9NC");
    this.cleanElements(entities);
    initDataEventArgs.commons.execServer = true;
  };

  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.basicInsurance (RadioButtonList) View: RefinanceLoansFilter
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_BASICINSURANCEC_861515 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = false;

    let catalog: any = [

      {
        code: true,
        value: 'SI'
      },

      {
        code: false,
        value: 'NO'
      },

    ];

    return catalog;
  };

  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.preventionProgram (ComboBox) View: RefinanceLoansFilter
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_PREVENTIONPRRAM_747515 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;

    //loadCatalogDataEventArgs.commons.serverParameters.RefinanceLoanFilter = true;
  };

  //Start signature to Callback event to VA_PREVENTIONPRRAM_747515
  task_loadCatalogCallback_VA_PREVENTIONPRRAM_747515 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
  ) => {
    //here your code
  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: RefinanceLoansFilter
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.result.code != null) {
      entities.RefinanceLoanFilter.account = onCloseModalEventArgs.result.code.trim();
    }
  };

  task_closeModalEvent_findCustomer = (args: any) => {
    let resp: any = args.commons.api.vc.dialogParameters;
    let customerCode: any = args.commons.api.vc.dialogParameters.CodeReceive;
    let CustomerName: any = args.commons.api.vc.dialogParameters.name;
    let identification: any = args.commons.api.vc.dialogParameters.documentId;

    args.model.RefinanceLoanFilter.clientName = customerCode + "-" + CustomerName;
    args.model.RefinanceLoanFilter.clientID = customerCode;
  };

  task_textInputButtonEvent_VA_ACCOUNTYATVYIRL_740515 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    /*if (textInputButtonEventArgs.model.RefinanceLoanFilter.clientName != null && textInputButtonEventArgs.model.RefinanceLoanFilter.currencyType != null){
         var nav = textInputButtonEventArgs.commons.api.navigation;
nav.address = {
moduleId: "BUSIN",
subModuleId: 'FLCRE',
taskId: 'T_FLCRE_94_BYLET28',
taskVersion: "1.0.0",
viewContainerId: 'VC_BYLET28_DTBCT_453'
};
nav.queryParameters = { mode: textInputButtonEventArgs.commons.args.mode };
         nav.label = cobis.translate('BUSIN.LBL_BUSIN_CUENTAARH_14595');
         nav.modalProperties = {
               size: 'lg'
         };
         nav.queryParameters = {
               mode: textInputButtonEventArgs.commons.constants.mode.Insert
         };
         var customerSearch = []
         customerSearch[0] = {Customer: textInputButtonEventArgs.model.RefinanceLoanFilter.clientName, CustomerId:textInputButtonEventArgs.model.RefinanceLoanFilter.clientID};
         nav.customDialogParameters = {
            customerSearch,
            warrantyGeneral:{currency:textInputButtonEventArgs.model.RefinanceLoanFilter.currencyType},
            warrantyType: "AHORRO",
            currencyCode: textInputButtonEventArgs.model.RefinanceLoanFilter.currencyType
         }; 
      }else{
         textInputButtonEventArgs.commons.messageHandler.showMessagesError("ASSTS.LBL_ASSTS_CLIENTEWV_22562",true);
      }*/


    if (textInputButtonEventArgs.commons.api.vc.model.RefinanceLoanFilter.clientID) {
      //Open Modal
      let nav: any = textInputButtonEventArgs.commons.api.navigation;

      nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_CUENTASAT_41675'); //Cuentas 
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_BANKACCOUNTIS_944',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_BANKACCOTT_940944'
      };
      nav.queryParameters = {
        mode: 1
      };
      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };
      nav.customDialogParameters = {
        customerID: textInputButtonEventArgs.model.RefinanceLoanFilter.clientID,
        paymentType: textInputButtonEventArgs.model.RefinanceLoanFilter.payMethodCurrency
      };
    } else {
      textInputButtonEventArgs.cancel = true;
      textInputButtonEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_DEDESELCA_14854", false, null, this.ASSTS.timer);
    }
  };

  //Entity: RefinanceLoanFilter
  //RefinanceLoanFilter.clientName (TextInputButton) View: RefinanceLoansFilter

  task_textInputButtonEvent_VA_CLIENTNAMEBGXWU_198515 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_BSQUEDAEC_38534');
    nav.customAddress = {
      id: "findCustomer",
      url: "customer/templates/find-customers-tpl.html"
    };
    nav.modalProperties = {
      size: 'lg'
    };
    nav.scripts = [{
      module: this.cobis.modules.CUSTOMER,
      files: ["/customer/services/find-customers-srv.js",
        "/customer/controllers/find-customers-ctrl.js"
      ]
    }];
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: RefinanceLoansFilter
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    entities.RefinanceLoanFilter.capitalizeBalance = 'S';

  };


  //gridRowDeleting QueryView: QV_3375_11342
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_3375_11342 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    gridRowDeletingEventArgs.commons.execServer = false;
    if (!entities.RefinanceLoanFilter.refreshData) {
      entities.RefinanceLoanFilter.refreshData = true;
    } else {
      entities.RefinanceLoanFilter.refreshData = false;
    }
  };

  //gridRowSelecting QueryView: QV_3375_11342
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_3375_11342 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    entities.RefinanceLoanFilter.operation = gridRowSelectingEventArgs.rowData.loan;


  };

  //gridRowUpdating QueryView: QV_3375_11342
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_3375_11342 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    let op: any = false;
    for (let i: any = 0; i < entities.RefinanceLoans.length; i++) {
      if (entities.RefinanceLoans[i].selected) {
        op = true;
        break;
      }
    }
    //VALIDA QUE EXISTA POR LO MENOS UNA OPERACION
    if (!op) {
      gridRowUpdatingEventArgs.commons.api.viewState.disable('CM_TREFINAN_9NC');
    } else {
      gridRowUpdatingEventArgs.commons.api.viewState.enable('CM_TREFINAN_9NC');
    }

    gridRowUpdatingEventArgs.commons.execServer = true;
    //gridRowUpdatingEventArgs.commons.serverParameters.RefinanceLoans = true;
  };



  //Start signature to Callback event to QV_3375_11342
  task_gridRowUpdatingCallback_QV_3375_11342 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    //here your code
  };



}