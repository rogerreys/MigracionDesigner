//Start signature to Callback event to VA_ARCHIVORFAULKWH_987436
task.executeCommandCallback.VA_ARCHIVORFAULKWH_987436 = function(entities, executeCommandCallbackEventArgs) {
    entities.LoanSearchFilter.category = null;
    if (!executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRWQ_853');
    } else {
        executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRWQ_853');
        numRep = Math.ceil(entities.MassivePayments.data().length / limit);
    }
};