//Start signature to Callback event to Q_OPEREEOA_SH40
task_executeQueryCallback_Q_OPEREEOA_SH40 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
    let opType: any;
    if (executeQueryCallbackEventArgs.commons.api.vc.mode == executeQueryCallbackEventArgs.commons.constants.mode.Update) {
        for (let i: any = 0; i < entities.ProductLineDistributionList.length; i++) {
            if (entities.ProductLineDistribution.sequential == entities.ProductLineDistributionList[i].sequential) {
                opType = entities.ProductLineDistributionList[i].opType;
                break;
            }
        }
        if (executeQueryCallbackEventArgs.commons.api.vc.model.ProductLineDistribution.nature == "A") {
            entities.ProductLineDistribution.opTypeAc = opType;
        } else {
            entities.ProductLineDistribution.opTypePas = opType;
        }
    }
};
