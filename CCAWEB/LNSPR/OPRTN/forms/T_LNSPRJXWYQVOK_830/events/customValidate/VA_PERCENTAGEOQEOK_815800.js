//Entity: OperationItemsList
//OperationItemsList.percentage (TextInputBox) View: ModalOperationItems
task.customValidate.VA_PERCENTAGEOQEOK_815800 = function (entities, customValidateEventArgs) {

    customValidateEventArgs.commons.execServer = false;

    if (((entities.OperationItemsList.minRate || entities.OperationItemsList.minRate == 0) && customValidateEventArgs.currentValue < entities.OperationItemsList.minRate) || ((entities.OperationItemsList.maxRate || entities.OperationItemsList.maxRate == 0) && customValidateEventArgs.currentValue > entities.OperationItemsList.maxRate)) {
        customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_TASADEBIQ_21023')
        customValidateEventArgs.isValid = false;
    } else {
        customValidateEventArgs.isValid = true;
    }

};
