
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: LoanLineCreation
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    
    renderEventArgs.commons.execServer = false;

};