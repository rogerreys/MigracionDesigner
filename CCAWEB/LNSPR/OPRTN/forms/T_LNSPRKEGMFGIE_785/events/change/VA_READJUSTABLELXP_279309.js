//Entity: GeneralParametersQuery
//GeneralParametersQuery.readjustable (RadioButtonList) View: OperationGeneralParametersForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_READJUSTABLELXP_279309 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'N') {
        changedEventArgs.commons.api.viewState.disable('VA_PERIODICITYEHNN_689309');
        entities.GeneralParametersQuery.periodicity = null;
    } else {
        changedEventArgs.commons.api.viewState.enable('VA_PERIODICITYEHNN_689309');
        //entities.GeneralParametersQuery.periodicity=3;
    }
};