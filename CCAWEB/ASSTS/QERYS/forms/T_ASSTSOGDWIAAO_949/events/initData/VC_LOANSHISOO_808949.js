//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansHistoricForm
task.initData.VC_LOANSHISOO_808949 = function (entities, initDataEventArgs) {

    initDataEventArgs.commons.execServer = true;
    var nav = initDataEventArgs.commons.api.navigation;
    var api = initDataEventArgs.commons.api;
    var parameters = getParams();
    var apiHeader = initDataEventArgs.commons.api.cobisPatterns.header;


    entities.Loan.adjustment = parameters.adjustment;
    entities.Loan.amount = parameters.amount;
    entities.Loan.availableBalance = parameters.availableBalance;
    entities.Loan.categoryGroup = parameters.categoryGroup;
    entities.Loan.clientID = parameters.clientID;
    entities.Loan.clientName = parameters.clientName;
    entities.Loan.codCurrency = parameters.codCurrency;
    entities.Loan.currencyName = parameters.currencyName;
    entities.Loan.customer = parameters.customer;
    entities.Loan.desOperationType = parameters.desOperationType;
    entities.Loan.disbursementDate = new Date(parameters.disbursementDate);
    entities.Loan.expirationDate = new Date(parameters.expirationDate);
    entities.Loan.group = parameters.group;
    entities.Loan.loanBankID = parameters.loanBankID;
    entities.Loan.migratedOper = parameters.migratedOper;
    entities.Loan.numProcedure = parameters.numProcedure;
    entities.Loan.officeID = parameters.officeID;
    entities.Loan.officerID = parameters.officerID;
    entities.Loan.operationNumber = parameters.operationNumber;
    entities.Loan.status = parameters.status;

    apiHeader.visibleSearchOption(false);


    if (entities.Loan.categoryGroup == "INDIVIDUAL") {
        entities.Loan.tipo = "I";
    } else {
        entities.Loan.tipo = "G";
    }

};
