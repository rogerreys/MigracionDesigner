//Entity: RefinanceLoanFilter
    //RefinanceLoanFilter.preventionProgram (ComboBox) View: RefinanceLoansFilter
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    //designer-hint: 2304: Cannot find name 'task_loadCatalog_VA_PREVENTIONPRRAM_747515'.
    //designer-hint: 2304: Cannot find name 'CobisModelLoadCatalogEventArgs'.
    task_loadCatalog_VA_PREVENTIONPRRAM_747515 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    
        //loadCatalogDataEventArgs.commons.serverParameters.RefinanceLoanFilter = true;
    };