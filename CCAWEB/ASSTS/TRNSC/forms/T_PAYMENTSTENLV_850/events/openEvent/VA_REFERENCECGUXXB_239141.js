//Entity: Payment
    //Payment.reference (TextInputButton) View: PaymentsForm
    
    task.textInputButtonEvent.VA_REFERENCECGUXXB_239141 = function(textInputButtonEventArgs ) {
        textInputButtonEventArgs.commons.execServer = false;
        
    if (textInputButtonEventArgs.commons.api.vc.model.Payment.customer) {
        //Open Modal
        var nav = textInputButtonEventArgs.commons.api.navigation;

        nav.label = cobis.translate('ASSTS.LBL_ASSTS_CUENTASAT_41675'); //Cuentas 
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_BANKACCOUNTIS_944',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_BANKACCOTT_940944'
        };
        nav.queryParameters = {
            mode: 1
        };
        nav.modalProperties = {
            size: 'md',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            customerID: textInputButtonEventArgs.model.Payment.customerID,
            paymentType: textInputButtonEventArgs.model.Payment.paymentType
        };
    } else {
        textInputButtonEventArgs.cancel = true;
        textInputButtonEventArgs.commons.messageHandler.showMessagesSuccess("ASSTS.MSG_ASSTS_DIGITELEC_98771", false, null, 3000);
    }

    };