//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ProjectOtherCharges
    task.initData.VC_PROJECTORC_636575 = function (entities, initDataEventArgs){
        entities.OtherCharges.baseCalculation = 0;
        initDataEventArgs.commons.api.viewState.hide('VA_INIDIVYCRRTXBCX_837696');
        initDataEventArgs.commons.api.viewState.hide('VA_DIVUPYMACQXCZMH_148696');
        initDataEventArgs.commons.api.viewState.hide('VA_BASECALCULATOII_165696');
        initDataEventArgs.commons.execServer = false;
    };