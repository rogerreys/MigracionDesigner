

//Entity: LoansLinesHeader
//LoansLinesHeader.fechaAprobacion (DateField) View: LoanLineCreation
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_FECHAAPROBACIOO_814412 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    
    if ((changedEventArgs.newValue && entities.LoanLinesCreation.dueDate)) {
        entities.LoanLinesCreation.daysNumber = null;
        changedEventArgs.commons.execServer = true;
    } else if (changedEventArgs.newValue && entities.LoanLinesCreation.daysNumber) {
        entities.LoanLinesCreation.dueDate = null;
        changedEventArgs.commons.execServer = true;
    } else {
        changedEventArgs.commons.execServer = false;
        calcular=true;
    }

    //changedEventArgs.commons.serverParameters.LoansLinesHeader = true;

};