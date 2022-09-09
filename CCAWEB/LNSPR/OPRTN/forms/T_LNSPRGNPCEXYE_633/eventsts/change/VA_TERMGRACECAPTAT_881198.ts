//Entity: AmortizationFormEntity
//AmortizationFormEntity.termGraceCapital (TextInputBox) View: OperationPaymentDayUpdateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_TERMGRACECAPTAT_881198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;

    if (entities.AmortizationFormEntity.termGraceInterest != null && entities.AmortizationFormEntity.termGraceInterest > 0 || (entities.AmortizationFormEntity.termGraceCapital != null && entities.AmortizationFormEntity.termGraceCapital > 0 )) {
        if(changedEventArgs.oldValue == null || changedEventArgs.oldValue == 0){
            viewState.enable('VA_TYPEGRACEBHAAVJ_350198');
            entities.AmortizationFormEntity.typeGrace = 'N';
            entities.AmortizationFormEntity.randomGrace = null;  
        }
    } else {
        viewState.disable('VA_TYPEGRACEBHAAVJ_350198');
        //entities.AmortizationFormEntity.typeGrace = null;
    }
};