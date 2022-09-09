//Start signature to Callback event to CM_TLNSPRWQ_853
task_executeCommandCallback_CM_TLNSPRWQ_853 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRWQ_853');
    if (executeCommandCallbackEventArgs.success) {
        numRep = numRep - 1;
        for (let i: any = 0; i < entities.Payment.length; i++) {
            entities.MassivePayments[i + (count * limit)].sequentialPM = entities.Payment[i].sequentialPM;
            entities.MassivePayments[i + (count * limit)].lotePM = entities.Payment[i].lotePM;
        }

        if (numRep > 0) {
            executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_BLOQUEPOR_62315', false, [count + 1], timer);
            count++;
            executeCommandCallbackEventArgs.commons.api.vc.executeCommand('CM_TLNSPRWQ_853', 'MassivePayments', undefined, true, false, 'VC_BATCHMASSS_336618', false);
            return;
        }

        if (entities.ErrorMassivePayments.length >= 2) {
            executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASER_66108", false, null, timer);

        } else {
            executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSMION_38404", false, null, timer);
        }

    }
};