//OperationItemsListQuery Entity: OperationItemsList
task.executeQuery.Q_OPERLSST_KU21 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.vc.model.OperationEntity.operation;
    var parentVc = executeQueryEventArgs.commons.api.parentVc;

    //validacion pantalla actualizacion
    if(parentVc && parentVc.id == 'VC_FSEARCHRUU_598110' ){
       state = executeQueryEventArgs.commons.api.vc.model.GeneralInformation.codState
    //asignacion variable actualizacion prestamos != no vigente
        if(state != stateOp ){
       executeQueryEventArgs.parameters.opActiva = 'S';
    }
    } 
    
    if (parentVc && parentVc.id == 'VC_RESTRUCTEG_166525') {
        executeQueryEventArgs.parameters.reest = 'S';
    }
    
    if (parentVc && parentVc.id == 'VC_LOANPARTIR_265871') {
        executeQueryEventArgs.parameters.operacion = 'P';
    } else {
        executeQueryEventArgs.parameters.operacion = 'S';
    }
    executeQueryEventArgs.commons.execServer = executeQueryEventArgs.parameters.banco ? true : false;
    //executeQueryEventArgs.commons.serverParameters.OperationItemsList = true;
};