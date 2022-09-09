
//Start signature to Callback event to VA_GRIDROWCOMMMNDD_641728
task_gridRowCommandCallback_VA_GRIDROWCOMMMNDD_641728 = (
    entities: Model,
    gridRowCommandCallbackEventArgs: CobisModelGridRowCommandCallbackEventArgs
) => {
    
    if(gridRowCommandCallbackEventArgs.success){
        gridRowCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_TRANSACII_82976", false, null, this.ASSTS.timer);
        gridRowCommandCallbackEventArgs.commons.api.grid.refresh('QV_PJ68_WJJ41');
    }

};