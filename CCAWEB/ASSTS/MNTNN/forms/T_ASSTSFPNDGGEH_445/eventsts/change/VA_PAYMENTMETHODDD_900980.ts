//Entity: LoanItemsList
//LoanItemsList.paymentMethod (DropDownList) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_PAYMENTMETHODDD_900980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'L') {
        changedEventArgs.commons.api.viewState.enable('VA_FINANCEDJTEBFXT_682980');
    } else {
        changedEventArgs.commons.api.viewState.disable('VA_FINANCEDJTEBFXT_682980');
    }

};
