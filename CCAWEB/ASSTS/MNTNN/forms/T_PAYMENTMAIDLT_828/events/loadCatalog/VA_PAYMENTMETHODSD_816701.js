

//Entity: MethodsRetention
//MethodsRetention.paymentMethods (DropDownList) View: PaymentMaintenanceModal
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_PAYMENTMETHODSD_816701 = function( loadCatalogDataEventArgs ) {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.MethodsRetention = true;

    };