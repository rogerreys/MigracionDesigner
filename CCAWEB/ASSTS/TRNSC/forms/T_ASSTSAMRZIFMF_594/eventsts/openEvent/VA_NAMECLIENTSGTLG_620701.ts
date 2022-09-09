//Entity: RestructuringFilter
//RestructuringFilter.nameClient (TextInputButton) View: LoansRestructuring
task_textInputButtonEvent_VA_NAMECLIENTSGTLG_620701 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_BSQUEDAEC_38534');
    nav.customAddress = {
        id: "findCustomer",
        url: "customer/templates/find-customers-tpl.html"
    };
    nav.modalProperties = {
        size: 'lg'
    };
    nav.scripts = [{
        module: this.cobis.modules.CUSTOMER,
        files: ["/customer/services/find-customers-srv.js"
                                           , "/customer/controllers/find-customers-ctrl.js"]
        }];
};