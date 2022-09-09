
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: CompaniesSearchForm
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    var api = renderEventArgs.commons.api;
    api.grid.refresh('QV_ON17_ABV99');
    
    if ( api.parentVc && (
        api.parentVc.id == 'VC_REPAYMENTT_461527' || 
        api.parentVc.id == 'VC_COMPANIECR_302580'
    )) {
        api.viewState.hide('G_COMPANIHER_604223');
    }
};