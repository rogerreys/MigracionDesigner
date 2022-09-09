//Entity: LoanItemsList
//LoanItemsList.maxRate (TextInputBox) View: ModalLoanItemsForm
task_customValidate_VA_MAXRATENAXLOHPN_726980 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
) => {

    customValidateEventArgs.commons.execServer = false;
    if (((customValidateEventArgs.currentValue || customValidateEventArgs.currentValue == 0) && (entities.LoanItemsList.percentage || entities.LoanItemsList.percentage == 0) && customValidateEventArgs.currentValue < entities.LoanItemsList.percentage)) {
        customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_MXIMODEUQ_72863')
        customValidateEventArgs.isValid = false;
    } else {
        customValidateEventArgs.isValid = true;
    }

};