//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: LoanDisbursementMain
    task.render = function (entities, renderEventArgs){
        renderEventArgs.commons.execServer = false;



    angular.element(document).injector().get('container.containerInfoService').getProcessDate().then(function (processDate) {
        //se asume fecha de proceso MM/dd/yyyy caso contrario falla
        var parts = processDate.split('/');
        // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
        // January - 0, February - 1, etc.
        entities.LoanAdditionalInformation.dateToDisburse = new Date(parts[2], parts[0] - 1, parts[1]);

    });
    entities.LoanAdditionalInformation.dateToDisburse = kendo.toString(kendo.parseDate(entities.LoanAdditionalInformation.dateToDisburse), JSON.parse(sessionStorage.dateFormat));

    renderEventArgs.commons.api.viewState.hide('VA_9687YKSEJAICISC_489405');

    renderEventArgs.commons.api.viewState.disable('VA_CURRENCYOPUEQVI_819405');
    renderEventArgs.commons.api.viewState.disable('VA_QUOTATIONRUCNOK_902405');
    renderEventArgs.commons.api.viewState.disable('VA_QUOTETYPEOPVPYS_926405');

    };