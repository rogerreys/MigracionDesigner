//gridRowSelecting QueryView: QV_1244_89323
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_1244_89323 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;
        task.sequential =  gridRowSelectingEventArgs.rowData.secuential;
entities.ValueDateFilter.indexTrn = gridRowSelectingEventArgs.rowIndex;
    };