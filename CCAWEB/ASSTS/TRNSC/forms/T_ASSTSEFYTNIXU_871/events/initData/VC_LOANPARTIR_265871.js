	//Evento initData : InicializaciÃ³n de datos del formulario, despuÃ©s de este evento se realiza el seguimiento de cambios en los datos
	//ViewContainer: LoanPartialDisbursement

	task.initData.VC_LOANPARTIR_265871 = function (entities, initDataEventArgs) {

	    var nav = initDataEventArgs.commons.api.navigation;
	    var params = nav.getCustomDialogParameters();

	    entities.Loan = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().parameters.loan;
	    //INFORMACION GENERAL
	    nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRSHDBNXGH_268',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANSOPETN_404268'
        };
	    nav.queryParameters = {
	        mode: 2
	    };
	    nav.customDialogParameters = {
	        operation: initDataEventArgs.commons.api.navigation.getCustomDialogParameters().parameters.loan.loanBankID
	    };
	    nav.registerView('G_LOANPARBTT_780369');

	    initDataEventArgs.commons.execServer = true;

	};
