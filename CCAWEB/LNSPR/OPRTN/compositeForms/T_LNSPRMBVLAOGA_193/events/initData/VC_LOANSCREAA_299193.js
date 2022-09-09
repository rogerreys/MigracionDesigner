
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansCreateComp
task.initData.VC_LOANSCREAA_299193 = function (entities, initDataEventArgs){

    var viewState = initDataEventArgs.commons.api.viewState;
    var nav = initDataEventArgs.commons.api.navigation;
    var grid = initDataEventArgs.commons.api.grid;
    
    //Beneficio interes
    viewState.disable('VA_4223IMHHOSVYCXY_300309');
    
    //OCULTAR TABS
    //viewState.hide('VC_ZHQUMTXXGR_635193');// información General
    viewState.hide('VC_ZUGXQMZUBQ_554193');// Rubros
    viewState.hide('VC_UQBPHFCKCW_777193');// Parámetros generales
    viewState.hide('VC_BKTCDNSADU_521193');// Amortización

    funcionality = Utils.IsNullOrEmpty(getQueryStrings().funcionality)?'C':getQueryStrings().funcionality;
    
    //entities.OperationEntity.processDate = new Date(2020,4,5);//desarrollo
    entities.OperationEntity.processDate = new Date(cobis.containerScope.preferences.processDate);
    entities.OperationEntity.sector = 1;
    entities.OperationEntity.functionality = funcionality;
    //entities.OperationEntity.amount = 0; //supr 0.0
    //entities.OperationEntity.amountApproved = 0; //supr 0.0
    //entities.OperationEntity.creationDate = new Date(2020,4,5);//desarrollo
    entities.OperationEntity.creationDate = new Date(cobis.containerScope.preferences.processDate);
    entities.OperationEntity.doubleAliquot = 'E';
    entities.AmortizationFormEntity.baseInterestCalculation = 'E'; 
    
    initDataEventArgs.commons.execServer = true;

    viewState.disable('CM_TLNSPRMB_TRO');//T_LNSPRMBVLAOGA_193 = Commando//Transmitir
    
    //Préstamos Sindicados
    initDataEventArgs.commons.api.vc.viewState.G_OPERATIALO_494221.visible = false;
    initDataEventArgs.commons.api.viewState.hide('VA_TYPESYNDICATEEE_795221');
  
  
   
};