
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: LoansUpdateForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    var constants = onCloseModalEventArgs.commons.constants;
    var resultArgs = onCloseModalEventArgs.result.resultArgs;
    
    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' && 
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            entities.GeneralParametersQuery.paymentAccount = onCloseModalEventArgs.result.response.code;
        }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_MODALOPERI_484830' && resultArgs) {
        if (onCloseModalEventArgs.dialogCloseType !== constants.dialogCloseType.NonInteractive) {
            if (resultArgs.mode === constants.mode.Insert) {
                onCloseModalEventArgs.commons.api.grid.addRow('OperationItemsList', resultArgs.data.OperationItemsList, true);
            } else if (resultArgs.mode === constants.mode.Update) {
                onCloseModalEventArgs.commons.api.grid.updateRow('OperationItemsList', resultArgs.index, resultArgs.data.OperationItemsList, true);
            }
        }
    }
};