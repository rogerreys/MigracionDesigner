//gridRowDeleting QueryView: QV_5973_48889
    //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
    task.gridRowDeleting.QV_5973_48889 = function (entities, gridRowDeletingEventArgs) {
    if (gridRowDeletingEventArgs.commons.api.parentVc && gridRowDeletingEventArgs.commons.api.parentVc.id == 'VC_LOANPARTIR_265871') {
        if (gridRowDeletingEventArgs.commons.api.parentVc.viewState.CM_TASSTSEF_N17.disabled == false) {
            gridRowDeletingEventArgs.commons.execServer = true;
        } else {
            gridRowDeletingEventArgs.commons.execServer = false;
            gridRowDeletingEventArgs.cancel = true;
        }
    } else {
        if(gridRowDeletingEventArgs.commons.api.vc.viewState.CM_TLOANDIS_S5N.disabled == false){
         gridRowDeletingEventArgs.commons.execServer = true;
      }else{
         gridRowDeletingEventArgs.commons.execServer = false;
         gridRowDeletingEventArgs.cancel=true;
      }
    }

    };