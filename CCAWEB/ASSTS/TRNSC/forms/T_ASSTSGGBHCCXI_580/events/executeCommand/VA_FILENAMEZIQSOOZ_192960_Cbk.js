
//Start signature to Callback event to VA_FILENAMEZIQSOOZ_192960
task.executeCommandCallback.VA_FILENAMEZIQSOOZ_192960 = function(entities, executeCommandCallbackEventArgs) {
    if(executeCommandCallbackEventArgs.success && entities.CompaniesBatch.fileError == 0){
        enableMyCommand(entities,executeCommandCallbackEventArgs.commons.api.viewState)
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11967", false, null, timer);
    }else{
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ERRORENAA_77685", false, null, timer);
        entities.CompaniesBatch.fileError = 0
    }
};
