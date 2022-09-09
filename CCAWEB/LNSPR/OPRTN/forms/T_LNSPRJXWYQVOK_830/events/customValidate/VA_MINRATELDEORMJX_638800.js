//Entity: OperationItemsList
//OperationItemsList.minRate (TextInputBox) View: ModalOperationItems
task.customValidate.VA_MINRATELDEORMJX_638800 = function (entities, customValidateEventArgs) {

    customValidateEventArgs.commons.execServer = false;

    if (((customValidateEventArgs.currentValue || customValidateEventArgs.currentValue == 0) &&
            (entities.OperationItemsList.percentage || entities.OperationItemsList.percentage == 0) && customValidateEventArgs.currentValue > entities.OperationItemsList.percentage)) {
        customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_MNIMODEAB_13294')
        customValidateEventArgs.isValid = false;
    } else {
        customValidateEventArgs.isValid = true;
    }

};
