
//ListTransactionQueryQuery Entity: ListTransactionQuery
task.executeQuery.Q_LISTCACN_AT28 = function(executeQueryEventArgs){
      var executeServer = true;
      var transacQueryFilter= executeQueryEventArgs.commons.api.vc.model.FilterTransactionQuery;
      var listTransactionQuery = executeQueryEventArgs.commons.api.vc.model.ListTransactionQuery;
      
        executeQueryEventArgs.parameters.banco= transacQueryFilter.numberLoan ? transacQueryFilter.numberLoan : null;
           
        executeQueryEventArgs.parameters.fechaD= transacQueryFilter.startDate;
        executeQueryEventArgs.parameters.fechaH= transacQueryFilter.endDate;
        executeQueryEventArgs.parameters.estado= transacQueryFilter.state ? transacQueryFilter.state : null;
        executeQueryEventArgs.parameters.tipoTrans= transacQueryFilter.typeTransaction ? transacQueryFilter.typeTransaction : null;
      
        //Paginación
        executeQueryEventArgs.parameters.pagSec = 0;
        executeQueryEventArgs.parameters.pagOpe = 0;
    
        executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_LM28_ZKS23', ['sequential','secOpe'], executeQueryEventArgs);
        if (executeQueryEventArgs.config.appendRecords) {
            
            if(transacQueryFilter.typeTransaction == 'PRV' && listTransactionQuery){
               executeQueryEventArgs.parameters.pagSec = listTransactionQuery.data().length;
               }else{
        executeQueryEventArgs.parameters.pagSec = executeQueryEventArgs.parameters.secOpe;
        executeQueryEventArgs.parameters.pagOpe = executeQueryEventArgs.parameters.sequential;
               }
        }
     
           executeQueryEventArgs.commons.execServer = true;
    
              
     
    
  
    //executeQueryEventArgs.commons.serverParameters.ListTransactionQuery = true;
};