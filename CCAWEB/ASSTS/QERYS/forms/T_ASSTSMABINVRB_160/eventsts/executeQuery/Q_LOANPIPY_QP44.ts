
//LoanPolicyQuery Entity: LoanPolicy
task_executeQuery_Q_LOANPIPY_QP44 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
   executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
    
    executeQueryEventArgs.parameters.pagPoliza = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_CB44_DOX52', ['policy'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
     executeQueryEventArgs.parameters.pagPoliza = executeQueryEventArgs.parameters.policy;
    }
    
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LoanPolicy = true;
};