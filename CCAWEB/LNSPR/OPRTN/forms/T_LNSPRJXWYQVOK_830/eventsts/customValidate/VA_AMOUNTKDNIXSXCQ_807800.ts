//Entity: OperationItemsList
//OperationItemsList.amount (TextInputBox) View: ModalOperationItems
task_customValidate_VA_AMOUNTKDNIXSXCQ_807800 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
) => {

    customValidateEventArgs.commons.execServer = false;
    if (customValidateEventArgs.commons.api.vc.mode == customValidateEventArgs.commons.constants.mode.Update && valor != undefined && valor != null && valor > 0) {

        if (customValidateEventArgs.currentValue > valor) {
            customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.LBL_LNSPR_VALORINRO_94797')
            customValidateEventArgs.isValid = false;
        } else {
            customValidateEventArgs.isValid = true;
        }
    }

};