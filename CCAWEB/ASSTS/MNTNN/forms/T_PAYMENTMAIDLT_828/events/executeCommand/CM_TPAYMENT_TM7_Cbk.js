//Start signature to callBack event to CM_TPAYMENT_TM7
    task.executeCommandCallback.CM_TPAYMENT_TM7 = function(entities, executeCommandEventArgs) {
        //here your code
    //executeCommandEventArgs.commons.execServer = false;
    if (executeCommandEventArgs.success) {
		var aceptButton = true;
        executeCommandEventArgs.commons.api.navigation.closeModal(aceptButton);
        if (executeCommandEventArgs.commons.api.vc.mode == 2) {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAO_10733", false, null, timer);
        } else {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAS_48950", false, null, timer);
        }
    }


    };