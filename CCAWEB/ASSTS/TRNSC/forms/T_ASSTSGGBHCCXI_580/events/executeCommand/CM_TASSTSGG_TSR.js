


// (Button) 
task.executeCommand.CM_TASSTSGG_TSR = function(entities, executeCommandEventArgs) {
    var execServer = false;
    if(entities.CompaniesBatch.fileError==0){
        if(entities.CompaniesDiscountsFileList._data.length>0){
            execServer = true;
        }else{
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.LBL_ASSTS_DEBESELCL_95286", false, null, timer);
        }
    }else{
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ERRORENAA_77685", false, null, timer);
    }
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
    executeCommandEventArgs.commons.execServer = execServer;
};