//Start signature to Callback event to QV_NW92_QCN40
task.gridRowDeletingCallback.QV_NW92_QCN40 = function(entities, gridRowDeletingCallbackEventArgs) {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, timer);
 gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_NW92_QCN40');
    }

};
