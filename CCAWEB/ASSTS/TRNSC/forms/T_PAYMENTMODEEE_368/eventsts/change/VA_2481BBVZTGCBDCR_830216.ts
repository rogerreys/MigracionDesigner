//Entity: PaymentForm
    //PaymentForm.accountNumber (TextInputButton) View: PaymentModeForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_2481BBVZTGCBDCR_830216 = (entities: Model, changeEventArgs: any) => {
        //changeEventArgs.commons.execServer = true;
    if (changeEventArgs.newValue && changeEventArgs.commons.api.viewState.getDataItem("Spacer2675").pCobis == 4) {
        changeEventArgs.commons.execServer = true;
     }else{
         changeEventArgs.commons.execServer = false;
        }
    };