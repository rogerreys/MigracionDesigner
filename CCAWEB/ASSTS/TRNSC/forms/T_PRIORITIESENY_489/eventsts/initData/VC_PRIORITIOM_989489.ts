//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: PrioritiesPaymentsModal
    task_initData_VC_PRIORITIOM_989489 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = false;
        entities.Priorities = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().priorities;
        //initDataEventArgs.commons.api.grid.addAllRows("Priorities", initDataEventArgs.commons.api.navigation.getCustomDialogParameters().priorities, false);
        //initDataEventArgs.commons.serverParameters.entityName = true;
    };