//Entity: MethodsRetention
//MethodsRetention.paymentAut (DropDownList) View: PaymentMaintenanceModal
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_PAYMENTAUTLPCHV_485701 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let api: any = changedEventArgs.commons.api;
    let desembolso: any  = entities.MethodsRetention.disbursement;
    let pagos: any     = entities.MethodsRetention.payment;
    let pagoAutomatico: any  = entities.MethodsRetention.paymentAut;
    let pagoCaja: any  = entities.MethodsRetention.paymentATX;
    this.validarCampos(api, desembolso, pagos, pagoAutomatico, pagoCaja);
};