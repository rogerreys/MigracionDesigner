
//gridRowDeleting QueryView: QV_PJ68_WJJ41
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_PJ68_WJJ41 = function (entities,gridRowDeletingEventArgs) {
    
    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.NoAppliedPayment = true; 
};




