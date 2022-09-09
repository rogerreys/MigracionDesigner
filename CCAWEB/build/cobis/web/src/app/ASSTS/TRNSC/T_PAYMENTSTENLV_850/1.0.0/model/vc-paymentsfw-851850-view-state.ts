//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022

import { CobisDesignerUtil, ConstantsApi, VisualValidationTypeEnum } from "cobis-designer";
import { CobisCommonsService } from 'cobis-commons';
import {FormBuilder, FormGroup,ValidatorFn, Validators} from "@angular/forms";
import { of } from 'rxjs';
import {
CobisGroupBoxModel,
CobisCheckBoxModel,
CobisDateFieldModel,
CobisDateTimeFieldModel,
CobisMaskedTextBoxModel,
CobisNumericInputBoxModel,
CobisNumericInputButtonModel,
CobisRadioButtonListModel,
CobisTextAreaModel,
CobisSpacerModel,
CobisSeparatorModel,
CobisCompositevaModel,
CobisTextInputBoxModel,
CobisTextInputButtonModel,
CobisTimePickerModel,
CobisDropDownListModel,
CobisFileUploadModel,
CobisGridModel,
CobisButtonModel,
CobisCollapsibleContainerModel,
CobisCollapsibleItemModel,
CobisTabbedLayoutContainerModel,
CobisTabbedLayoutTabModel,
CobisControlModel,
CobisTextLabelModel,
LayoutConstants,
DropDownListValidators,
CobisMultiSelectModel,
CustomValidators,
ComplexConstants,
FilterData,
FilterType,
Util,
CommonsConstants,
PositionTab,
CustomValidatorOperator,
TextCaseOptions,
ControlType
} from "cobis-designer-controls";
export class ViewState {
public T_PAYMENTSTENLV_850!:FormGroup;
public VC_PAYMENTSFW_851850:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTSSS_299141 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTSSS_270141 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTSSS_157141 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTSSS_827141 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_2540_50573: CobisGridModel = new CobisGridModel();
public G_PAYMENTSSS_377141 : CobisCollapsibleContainerModel = new CobisCollapsibleContainerModel();
public G_PAYMENTSSS_443141_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_PAYMENTSSS_443141 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_QG32_ZBS32: CobisGridModel = new CobisGridModel();
public G_PAYMENTSSS_505141 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_3510_91785: CobisGridModel = new CobisGridModel();
public G_PAYMENTSSS_563141 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_1156_30060: CobisGridModel = new CobisGridModel();
public VA_DATEGYMPIXSZGYL_543141: CobisDateFieldModel = new CobisDateFieldModel();
public VA_CURRENCYSPEYFQA_285141: CobisDropDownListModel = new CobisDropDownListModel();
public VA_QUOTATIONEPFTUZ_479141: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TYPEQUOTATIOTNN_114141: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TEXTINPUTBOXCFY_310141: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TEXTINPUTBOXHQX_290141: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_REFERENCECGUXXB_239141: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_VALUEEFNQCTRLMP_628141: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_VASIMPLELABELLL_923141: CobisTextLabelModel = new CobisTextLabelModel();
public VA_NUMCHECKQLTBIOX_669141: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TEXTINPUTBOXSJQ_831141: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TEXTINPUTBOXPMM_746141: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_NEGOTIATEDHPDLB_812141: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_CHECKBOXIPQLEBS_550141: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_TEXTINPUTBOXIKP_805141: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_OPERATIONCURYEE_868141: CobisDropDownListModel = new CobisDropDownListModel();
public VA_QUOTATIONVALUEE_804141: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TYPEQUOTATIOPNO_482141: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_AMOUNTGSUZWEZJK_997141: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_FINEPREPAYMETTT_628141: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_AMOUNTPREPAYTME_876141: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_AMOUNTPAYMENTTT_215141: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PAYMENTSFW_851850.id="VC_PAYMENTSFW_851850";
this.VC_PAYMENTSFW_851850.name="PaymentsForm";
this.VC_PAYMENTSFW_851850.colSpan=1;
this.VC_PAYMENTSFW_851850.columns=1;
this.VC_PAYMENTSFW_851850.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_299141.id="G_PAYMENTSSS_299141";
this.G_PAYMENTSSS_299141.name="GroupLayout1193";
this.G_PAYMENTSSS_299141.columns=3;
this.G_PAYMENTSSS_299141.childrenGroups = ["G_PAYMENTSSS_270141","G_PAYMENTSSS_157141","G_PAYMENTSSS_827141","G_PAYMENTSSS_377141","G_PAYMENTSSS_505141","G_PAYMENTSSS_563141"];
this.G_PAYMENTSSS_299141.colSpan=1;
this.G_PAYMENTSSS_299141.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_299141.visible=ConstantsApi.mode.All;
this.G_PAYMENTSSS_270141.id="G_PAYMENTSSS_270141";
this.G_PAYMENTSSS_270141.label=cobis.translate("ASSTS.LBL_ASSTS_INGRESOLL_37785");
this.G_PAYMENTSSS_270141.name="Group2407";
this.G_PAYMENTSSS_270141.columns=6;
this.G_PAYMENTSSS_270141.labelOrientation="Top";
this.G_PAYMENTSSS_270141.colSpan=1;
this.G_PAYMENTSSS_270141.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_270141.visible=ConstantsApi.mode.All;
this.G_PAYMENTSSS_270141.attList = ["date","currencyType","quotation","typeQuotationTr","paymentType","customer","reference","value","numCheck","bank","retention","negotiated","onLine","note"];
this.G_PAYMENTSSS_157141.id="G_PAYMENTSSS_157141";
this.G_PAYMENTSSS_157141.label=cobis.translate("ASSTS.LBL_ASSTS_VALORAPAA_99910");
this.G_PAYMENTSSS_157141.name="Group1735";
this.G_PAYMENTSSS_157141.columns=6;
this.G_PAYMENTSSS_157141.labelOrientation="Top";
this.G_PAYMENTSSS_157141.colSpan=2;
this.G_PAYMENTSSS_157141.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_157141.visible=ConstantsApi.mode.All;
this.G_PAYMENTSSS_157141.attList = ["operationCurrencyType","quotationValue","typeQuotationOp","amount","finePrepayment","amountPrepayment","amountPayment"];
this.G_PAYMENTSSS_827141.id="G_PAYMENTSSS_827141";
this.G_PAYMENTSSS_827141.name="Group2717";
this.G_PAYMENTSSS_827141.columns=1;
this.G_PAYMENTSSS_827141.labelOrientation="Top";
this.G_PAYMENTSSS_827141.colSpan=2;
this.G_PAYMENTSSS_827141.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_827141.visible=ConstantsApi.mode.All;
this.G_PAYMENTSSS_827141.attList = ["description","expired","active","inactive","total"];
this.G_PAYMENTSSS_377141.id="G_PAYMENTSSS_377141";
this.G_PAYMENTSSS_377141.name="PaymentsForm";
this.G_PAYMENTSSS_377141.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_377141.controlType = ControlType.COLLAPSIBLE;
this.G_PAYMENTSSS_377141.colSpan=1;
this.G_PAYMENTSSS_377141.childrenGroups = ["G_PAYMENTSSS_443141_item"];
this.G_PAYMENTSSS_443141_item.id="G_PAYMENTSSS_443141_item";
this.G_PAYMENTSSS_443141_item.label=cobis.translate("ASSTS.LBL_ASSTS_DEVOLUCBO_36197");
this.G_PAYMENTSSS_443141_item.childrenGroups = ['G_PAYMENTSSS_443141'];
this.G_PAYMENTSSS_443141_item.colSpan=2;
this.G_PAYMENTSSS_443141_item.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_443141_item.visible=ConstantsApi.mode.All;
this.G_PAYMENTSSS_443141.id="G_PAYMENTSSS_443141";
this.G_PAYMENTSSS_443141.name="Group2327";
this.G_PAYMENTSSS_443141.columns=2;
this.G_PAYMENTSSS_443141.labelOrientation="Top";
this.G_PAYMENTSSS_443141.colSpan=2;
this.G_PAYMENTSSS_443141.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_443141.visible=ConstantsApi.mode.All;
this.G_PAYMENTSSS_443141.attList = ["item","value","ingress"];
this.G_PAYMENTSSS_443141.className = "bg-primary";
this.G_PAYMENTSSS_505141.id="G_PAYMENTSSS_505141";
this.G_PAYMENTSSS_505141.name="Group1756";
this.G_PAYMENTSSS_505141.columns=1;
this.G_PAYMENTSSS_505141.labelOrientation="Top";
this.G_PAYMENTSSS_505141.colSpan=1;
this.G_PAYMENTSSS_505141.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_505141.visible=ConstantsApi.mode.None;
this.G_PAYMENTSSS_505141.attList = ["item","priority"];
this.G_PAYMENTSSS_563141.id="G_PAYMENTSSS_563141";
this.G_PAYMENTSSS_563141.name="Group1105";
this.G_PAYMENTSSS_563141.columns=1;
this.G_PAYMENTSSS_563141.labelOrientation="Top";
this.G_PAYMENTSSS_563141.colSpan=1;
this.G_PAYMENTSSS_563141.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_563141.visible=ConstantsApi.mode.None;
this.G_PAYMENTSSS_563141.attList = ["currencyType","date","value","result"];
this.VA_DATEGYMPIXSZGYL_543141.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAQWBP_23514");
this.VA_DATEGYMPIXSZGYL_543141.entity = "Payment";
this.VA_DATEGYMPIXSZGYL_543141.attribute = "date";
this.VA_DATEGYMPIXSZGYL_543141.name="date";
this.VA_DATEGYMPIXSZGYL_543141.id="VA_DATEGYMPIXSZGYL_543141";
this.VA_DATEGYMPIXSZGYL_543141.colSpan=6;
this.VA_DATEGYMPIXSZGYL_543141.withoutLabel = false;
this.VA_DATEGYMPIXSZGYL_543141.readOnly = ConstantsApi.mode.Query;
this.VA_DATEGYMPIXSZGYL_543141.enabled = ConstantsApi.mode.All;
this.VA_DATEGYMPIXSZGYL_543141.visible= ConstantsApi.mode.All;
this.VA_DATEGYMPIXSZGYL_543141.required = true;
this.VA_DATEGYMPIXSZGYL_543141.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_DATEGYMPIXSZGYL_543141.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_CURRENCYSPEYFQA_285141.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDADPO_82566");
this.VA_CURRENCYSPEYFQA_285141.blankOption=true;
this.VA_CURRENCYSPEYFQA_285141.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_CURRENCYSPEYFQA_285141.entity = "Payment";
this.VA_CURRENCYSPEYFQA_285141.attribute = "currencyType";
this.VA_CURRENCYSPEYFQA_285141.textField = "value";
this.VA_CURRENCYSPEYFQA_285141.valueField = "code";
this.VA_CURRENCYSPEYFQA_285141.showId= true;
this.VA_CURRENCYSPEYFQA_285141.name="currency";
this.VA_CURRENCYSPEYFQA_285141.id="VA_CURRENCYSPEYFQA_285141";
this.VA_CURRENCYSPEYFQA_285141.colSpan=6;
this.VA_CURRENCYSPEYFQA_285141.withoutLabel = false;
this.VA_CURRENCYSPEYFQA_285141.readOnly = ConstantsApi.mode.Query;
this.VA_CURRENCYSPEYFQA_285141.enabled = ConstantsApi.mode.All;
this.VA_CURRENCYSPEYFQA_285141.visible= ConstantsApi.mode.All;
this.VA_CURRENCYSPEYFQA_285141.required = true;
this.VA_CURRENCYSPEYFQA_285141.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CURRENCYSPEYFQA_285141.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_QUOTATIONEPFTUZ_479141.label = cobis.translate("ASSTS.LBL_ASSTS_COTIZACNN_31924");
this.VA_QUOTATIONEPFTUZ_479141.entity = "Payment";
this.VA_QUOTATIONEPFTUZ_479141.attribute = "quotation";
this.VA_QUOTATIONEPFTUZ_479141.textCase= TextCaseOptions.NONE;
this.VA_QUOTATIONEPFTUZ_479141.format= "#,######0.000000";
this.VA_QUOTATIONEPFTUZ_479141.name="quotation";
this.VA_QUOTATIONEPFTUZ_479141.id="VA_QUOTATIONEPFTUZ_479141";
this.VA_QUOTATIONEPFTUZ_479141.colSpan=3;
this.VA_QUOTATIONEPFTUZ_479141.withoutLabel = false;
this.VA_QUOTATIONEPFTUZ_479141.readOnly = ConstantsApi.mode.Query;
this.VA_QUOTATIONEPFTUZ_479141.enabled = ConstantsApi.mode.All;
this.VA_QUOTATIONEPFTUZ_479141.visible= ConstantsApi.mode.All;
this.VA_TYPEQUOTATIOTNN_114141.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOCOTAA_28357");
this.VA_TYPEQUOTATIOTNN_114141.entity = "Payment";
this.VA_TYPEQUOTATIOTNN_114141.attribute = "typeQuotationTr";
this.VA_TYPEQUOTATIOTNN_114141.textCase= TextCaseOptions.NONE;
this.VA_TYPEQUOTATIOTNN_114141.name="typeQuotationTr";
this.VA_TYPEQUOTATIOTNN_114141.id="VA_TYPEQUOTATIOTNN_114141";
this.VA_TYPEQUOTATIOTNN_114141.colSpan=3;
this.VA_TYPEQUOTATIOTNN_114141.withoutLabel = false;
this.VA_TYPEQUOTATIOTNN_114141.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEQUOTATIOTNN_114141.enabled = ConstantsApi.mode.All;
this.VA_TYPEQUOTATIOTNN_114141.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXCFY_310141.label = cobis.translate("ASSTS.LBL_ASSTS_APAGOPQXA_89595");
this.VA_TEXTINPUTBOXCFY_310141.blankOption=true;
this.VA_TEXTINPUTBOXCFY_310141.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_TEXTINPUTBOXCFY_310141.entity = "Payment";
this.VA_TEXTINPUTBOXCFY_310141.attribute = "paymentType";
this.VA_TEXTINPUTBOXCFY_310141.cascadeFrom = "VA_CURRENCYSPEYFQA_285141";
this.VA_CURRENCYSPEYFQA_285141.isCascadeParent = true;
this.VA_TEXTINPUTBOXCFY_310141.textField = "descripcion";
this.VA_TEXTINPUTBOXCFY_310141.valueField = "producto";
this.VA_TEXTINPUTBOXCFY_310141.showId= true;
this.VA_TEXTINPUTBOXCFY_310141.name="paymentsTypes";
this.VA_TEXTINPUTBOXCFY_310141.id="VA_TEXTINPUTBOXCFY_310141";
this.VA_TEXTINPUTBOXCFY_310141.colSpan=6;
this.VA_TEXTINPUTBOXCFY_310141.withoutLabel = false;
this.VA_TEXTINPUTBOXCFY_310141.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXCFY_310141.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXCFY_310141.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXCFY_310141.required = true;
this.VA_TEXTINPUTBOXCFY_310141.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TEXTINPUTBOXCFY_310141.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_TEXTINPUTBOXHQX_290141.id = "VA_TEXTINPUTBOXHQX_290141";
this.VA_TEXTINPUTBOXHQX_290141.name = "customer";
this.VA_TEXTINPUTBOXHQX_290141.label = cobis.translate("ASSTS.LBL_ASSTS_COBRARAFT_16046");
this.VA_TEXTINPUTBOXHQX_290141.entity = "Payment";
this.VA_TEXTINPUTBOXHQX_290141.attribute = "customer";
this.VA_TEXTINPUTBOXHQX_290141.colSpan = 6;
this.VA_TEXTINPUTBOXHQX_290141.format = "";
this.VA_TEXTINPUTBOXHQX_290141.maxlength= 254;
this.VA_TEXTINPUTBOXHQX_290141.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXHQX_290141.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXHQX_290141.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXHQX_290141.textLocked = true;
this.VA_TEXTINPUTBOXHQX_290141.required = true;
this.VA_TEXTINPUTBOXHQX_290141.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TEXTINPUTBOXHQX_290141.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_REFERENCECGUXXB_239141.id = "VA_REFERENCECGUXXB_239141";
this.VA_REFERENCECGUXXB_239141.name = "reference";
this.VA_REFERENCECGUXXB_239141.label = cobis.translate("ASSTS.LBL_ASSTS_REFERENCI_47355");
this.VA_REFERENCECGUXXB_239141.entity = "Payment";
this.VA_REFERENCECGUXXB_239141.attribute = "reference";
this.VA_REFERENCECGUXXB_239141.colSpan = 6;
this.VA_REFERENCECGUXXB_239141.format = "";
this.VA_REFERENCECGUXXB_239141.maxlength= 24;
this.VA_REFERENCECGUXXB_239141.readOnly = ConstantsApi.mode.Query;
this.VA_REFERENCECGUXXB_239141.enabled = ConstantsApi.mode.All;
this.VA_REFERENCECGUXXB_239141.visible= ConstantsApi.mode.All;
this.VA_REFERENCECGUXXB_239141.inputRestrictionValidators = { onlyNumbers: true};
this.VA_REFERENCECGUXXB_239141.required = true;
this.VA_REFERENCECGUXXB_239141.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_REFERENCECGUXXB_239141.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_VALUEEFNQCTRLMP_628141.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOEMFX_52083");
this.VA_VALUEEFNQCTRLMP_628141.entity = "Payment";
this.VA_VALUEEFNQCTRLMP_628141.attribute = "value";
this.VA_VALUEEFNQCTRLMP_628141.textCase= TextCaseOptions.NONE;
this.VA_VALUEEFNQCTRLMP_628141.name="value";
this.VA_VALUEEFNQCTRLMP_628141.id="VA_VALUEEFNQCTRLMP_628141";
this.VA_VALUEEFNQCTRLMP_628141.colSpan=6;
this.VA_VALUEEFNQCTRLMP_628141.withoutLabel = false;
this.VA_VALUEEFNQCTRLMP_628141.readOnly = ConstantsApi.mode.Query;
this.VA_VALUEEFNQCTRLMP_628141.enabled = ConstantsApi.mode.All;
this.VA_VALUEEFNQCTRLMP_628141.visible= ConstantsApi.mode.All;
this.VA_VALUEEFNQCTRLMP_628141.required = true;
this.VA_VALUEEFNQCTRLMP_628141.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN)],[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_VALUEEFNQCTRLMP_628141.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_ELVALOROO_17736'),fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_VALORFURN_83073')
};
this.VA_VASIMPLELABELLL_923141.id = "VA_VASIMPLELABELLL_923141";
this.VA_VASIMPLELABELLL_923141.name = "quotation";
this.VA_VASIMPLELABELLL_923141.label = cobis.translate("ASSTS.LBL_ASSTS_CONVERSSN_95041");
this.VA_VASIMPLELABELLL_923141.colSpan = 3;
this.VA_VASIMPLELABELLL_923141.withoutLabel = false;
this.VA_VASIMPLELABELLL_923141.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_923141.visible= ConstantsApi.mode.All;
this.VA_NUMCHECKQLTBIOX_669141.label = cobis.translate("ASSTS.LBL_ASSTS_CHEQUEBCI_27043");
this.VA_NUMCHECKQLTBIOX_669141.entity = "Payment";
this.VA_NUMCHECKQLTBIOX_669141.attribute = "numCheck";
this.VA_NUMCHECKQLTBIOX_669141.maxlength= 9;
this.VA_NUMCHECKQLTBIOX_669141.textCase= TextCaseOptions.NONE;
this.VA_NUMCHECKQLTBIOX_669141.name="numCheck";
this.VA_NUMCHECKQLTBIOX_669141.id="VA_NUMCHECKQLTBIOX_669141";
this.VA_NUMCHECKQLTBIOX_669141.colSpan=6;
this.VA_NUMCHECKQLTBIOX_669141.withoutLabel = false;
this.VA_NUMCHECKQLTBIOX_669141.readOnly = ConstantsApi.mode.Query;
this.VA_NUMCHECKQLTBIOX_669141.enabled = ConstantsApi.mode.All;
this.VA_NUMCHECKQLTBIOX_669141.visible= ConstantsApi.mode.All;
this.VA_NUMCHECKQLTBIOX_669141.inputRestrictionValidators = { onlyNumbers: true};
this.VA_TEXTINPUTBOXSJQ_831141.label = cobis.translate("ASSTS.LBL_ASSTS_BANCOPEGT_42609");
this.VA_TEXTINPUTBOXSJQ_831141.entity = "Payment";
this.VA_TEXTINPUTBOXSJQ_831141.attribute = "bank";
this.VA_TEXTINPUTBOXSJQ_831141.textField = "value";
this.VA_TEXTINPUTBOXSJQ_831141.valueField = "code";
this.VA_TEXTINPUTBOXSJQ_831141.showId= true;
this.VA_TEXTINPUTBOXSJQ_831141.name="bank";
this.VA_TEXTINPUTBOXSJQ_831141.id="VA_TEXTINPUTBOXSJQ_831141";
this.VA_TEXTINPUTBOXSJQ_831141.colSpan=6;
this.VA_TEXTINPUTBOXSJQ_831141.withoutLabel = false;
this.VA_TEXTINPUTBOXSJQ_831141.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXSJQ_831141.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXSJQ_831141.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXPMM_746141.label = cobis.translate("ASSTS.LBL_ASSTS_RETENCINN_79250");
this.VA_TEXTINPUTBOXPMM_746141.entity = "Payment";
this.VA_TEXTINPUTBOXPMM_746141.attribute = "retention";
this.VA_TEXTINPUTBOXPMM_746141.textCase= TextCaseOptions.NONE;
this.VA_TEXTINPUTBOXPMM_746141.name="retention";
this.VA_TEXTINPUTBOXPMM_746141.id="VA_TEXTINPUTBOXPMM_746141";
this.VA_TEXTINPUTBOXPMM_746141.colSpan=6;
this.VA_TEXTINPUTBOXPMM_746141.withoutLabel = false;
this.VA_TEXTINPUTBOXPMM_746141.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXPMM_746141.enabled = ConstantsApi.mode.None;
this.VA_TEXTINPUTBOXPMM_746141.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXPMM_746141.required = true;
this.VA_TEXTINPUTBOXPMM_746141.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TEXTINPUTBOXPMM_746141.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_SEDEBERZE_11978')
};
this.VA_NEGOTIATEDHPDLB_812141.id = "VA_NEGOTIATEDHPDLB_812141";
this.VA_NEGOTIATEDHPDLB_812141.name = "negotiated";
this.VA_NEGOTIATEDHPDLB_812141.label = cobis.translate("ASSTS.LBL_ASSTS_NEGOCIAOD_40984");
this.VA_NEGOTIATEDHPDLB_812141.entity = "Payment";
this.VA_NEGOTIATEDHPDLB_812141.attribute = "negotiated";
this.VA_NEGOTIATEDHPDLB_812141.colSpan = 3;
this.VA_NEGOTIATEDHPDLB_812141.withoutLabel = false;
this.VA_NEGOTIATEDHPDLB_812141.readOnly =ConstantsApi.mode.Query;
this.VA_NEGOTIATEDHPDLB_812141.enabled = ConstantsApi.mode.All;
this.VA_NEGOTIATEDHPDLB_812141.visible= ConstantsApi.mode.All;
this.VA_NEGOTIATEDHPDLB_812141.trueValue ="S";
this.VA_NEGOTIATEDHPDLB_812141.falseValue ="N";
this.VA_CHECKBOXIPQLEBS_550141.id = "VA_CHECKBOXIPQLEBS_550141";
this.VA_CHECKBOXIPQLEBS_550141.name = "onLine";
this.VA_CHECKBOXIPQLEBS_550141.label = cobis.translate("ASSTS.LBL_ASSTS_APLICAELN_71517");
this.VA_CHECKBOXIPQLEBS_550141.entity = "Payment";
this.VA_CHECKBOXIPQLEBS_550141.attribute = "onLine";
this.VA_CHECKBOXIPQLEBS_550141.colSpan = 3;
this.VA_CHECKBOXIPQLEBS_550141.withoutLabel = false;
this.VA_CHECKBOXIPQLEBS_550141.readOnly =ConstantsApi.mode.Query;
this.VA_CHECKBOXIPQLEBS_550141.enabled = ConstantsApi.mode.All;
this.VA_CHECKBOXIPQLEBS_550141.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXIKP_805141.label = cobis.translate("ASSTS.LBL_ASSTS_DESCRIPNI_65857");
this.VA_TEXTINPUTBOXIKP_805141.entity = "Payment";
this.VA_TEXTINPUTBOXIKP_805141.attribute = "note";
this.VA_TEXTINPUTBOXIKP_805141.maxlength= 64;
this.VA_TEXTINPUTBOXIKP_805141.textCase= TextCaseOptions.UPPER_CASE;
this.VA_TEXTINPUTBOXIKP_805141.name="notes";
this.VA_TEXTINPUTBOXIKP_805141.id="VA_TEXTINPUTBOXIKP_805141";
this.VA_TEXTINPUTBOXIKP_805141.colSpan=6;
this.VA_TEXTINPUTBOXIKP_805141.withoutLabel = false;
this.VA_TEXTINPUTBOXIKP_805141.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXIKP_805141.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXIKP_805141.visible= ConstantsApi.mode.All;
this.VA_OPERATIONCURYEE_868141.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDAOAA_82257");
this.VA_OPERATIONCURYEE_868141.entity = "Payment";
this.VA_OPERATIONCURYEE_868141.attribute = "operationCurrencyType";
this.VA_OPERATIONCURYEE_868141.textField = "value";
this.VA_OPERATIONCURYEE_868141.valueField = "code";
this.VA_OPERATIONCURYEE_868141.showId= true;
this.VA_OPERATIONCURYEE_868141.name="operationCurrencyType";
this.VA_OPERATIONCURYEE_868141.id="VA_OPERATIONCURYEE_868141";
this.VA_OPERATIONCURYEE_868141.colSpan=3;
this.VA_OPERATIONCURYEE_868141.withoutLabel = false;
this.VA_OPERATIONCURYEE_868141.readOnly = ConstantsApi.mode.Query;
this.VA_OPERATIONCURYEE_868141.enabled = ConstantsApi.mode.All;
this.VA_OPERATIONCURYEE_868141.visible= ConstantsApi.mode.All;
this.VA_QUOTATIONVALUEE_804141.label = cobis.translate("ASSTS.LBL_ASSTS_COTIZACNN_31924");
this.VA_QUOTATIONVALUEE_804141.entity = "Payment";
this.VA_QUOTATIONVALUEE_804141.attribute = "quotationValue";
this.VA_QUOTATIONVALUEE_804141.textCase= TextCaseOptions.NONE;
this.VA_QUOTATIONVALUEE_804141.format= "#,######0.000000";
this.VA_QUOTATIONVALUEE_804141.name="quotationValue";
this.VA_QUOTATIONVALUEE_804141.id="VA_QUOTATIONVALUEE_804141";
this.VA_QUOTATIONVALUEE_804141.colSpan=2;
this.VA_QUOTATIONVALUEE_804141.withoutLabel = false;
this.VA_QUOTATIONVALUEE_804141.readOnly = ConstantsApi.mode.Query;
this.VA_QUOTATIONVALUEE_804141.enabled = ConstantsApi.mode.All;
this.VA_QUOTATIONVALUEE_804141.visible= ConstantsApi.mode.All;
this.VA_TYPEQUOTATIOPNO_482141.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOCOTRJ_94945");
this.VA_TYPEQUOTATIOPNO_482141.entity = "Payment";
this.VA_TYPEQUOTATIOPNO_482141.attribute = "typeQuotationOp";
this.VA_TYPEQUOTATIOPNO_482141.textCase= TextCaseOptions.NONE;
this.VA_TYPEQUOTATIOPNO_482141.name="typeQuotationOp";
this.VA_TYPEQUOTATIOPNO_482141.id="VA_TYPEQUOTATIOPNO_482141";
this.VA_TYPEQUOTATIOPNO_482141.colSpan=1;
this.VA_TYPEQUOTATIOPNO_482141.withoutLabel = false;
this.VA_TYPEQUOTATIOPNO_482141.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEQUOTATIOPNO_482141.enabled = ConstantsApi.mode.All;
this.VA_TYPEQUOTATIOPNO_482141.visible= ConstantsApi.mode.All;
this.VA_AMOUNTGSUZWEZJK_997141.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOOPII_56896");
this.VA_AMOUNTGSUZWEZJK_997141.entity = "Payment";
this.VA_AMOUNTGSUZWEZJK_997141.attribute = "amount";
this.VA_AMOUNTGSUZWEZJK_997141.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTGSUZWEZJK_997141.format= "c";
this.VA_AMOUNTGSUZWEZJK_997141.name="amount";
this.VA_AMOUNTGSUZWEZJK_997141.id="VA_AMOUNTGSUZWEZJK_997141";
this.VA_AMOUNTGSUZWEZJK_997141.colSpan=3;
this.VA_AMOUNTGSUZWEZJK_997141.withoutLabel = false;
this.VA_AMOUNTGSUZWEZJK_997141.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTGSUZWEZJK_997141.enabled = ConstantsApi.mode.None;
this.VA_AMOUNTGSUZWEZJK_997141.visible= ConstantsApi.mode.All;
this.VA_FINEPREPAYMETTT_628141.label = cobis.translate("ASSTS.LBL_ASSTS_MULTAPRCI_95892");
this.VA_FINEPREPAYMETTT_628141.entity = "Payment";
this.VA_FINEPREPAYMETTT_628141.attribute = "finePrepayment";
this.VA_FINEPREPAYMETTT_628141.textCase= TextCaseOptions.NONE;
this.VA_FINEPREPAYMETTT_628141.format= "c";
this.VA_FINEPREPAYMETTT_628141.name="finePrepayment";
this.VA_FINEPREPAYMETTT_628141.id="VA_FINEPREPAYMETTT_628141";
this.VA_FINEPREPAYMETTT_628141.colSpan=3;
this.VA_FINEPREPAYMETTT_628141.withoutLabel = false;
this.VA_FINEPREPAYMETTT_628141.readOnly = ConstantsApi.mode.Query;
this.VA_FINEPREPAYMETTT_628141.enabled = ConstantsApi.mode.None;
this.VA_FINEPREPAYMETTT_628141.visible= ConstantsApi.mode.All;
this.VA_AMOUNTPREPAYTME_876141.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOPRCN_87630");
this.VA_AMOUNTPREPAYTME_876141.entity = "Payment";
this.VA_AMOUNTPREPAYTME_876141.attribute = "amountPrepayment";
this.VA_AMOUNTPREPAYTME_876141.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTPREPAYTME_876141.format= "c";
this.VA_AMOUNTPREPAYTME_876141.name="amountPrepayment";
this.VA_AMOUNTPREPAYTME_876141.id="VA_AMOUNTPREPAYTME_876141";
this.VA_AMOUNTPREPAYTME_876141.colSpan=3;
this.VA_AMOUNTPREPAYTME_876141.withoutLabel = false;
this.VA_AMOUNTPREPAYTME_876141.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTPREPAYTME_876141.enabled = ConstantsApi.mode.None;
this.VA_AMOUNTPREPAYTME_876141.visible= ConstantsApi.mode.All;
this.VA_AMOUNTPAYMENTTT_215141.label = cobis.translate("ASSTS.LBL_ASSTS_VALORAPAA_99910");
this.VA_AMOUNTPAYMENTTT_215141.entity = "Payment";
this.VA_AMOUNTPAYMENTTT_215141.attribute = "amountPayment";
this.VA_AMOUNTPAYMENTTT_215141.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTPAYMENTTT_215141.format= "c";
this.VA_AMOUNTPAYMENTTT_215141.name="amountPayment";
this.VA_AMOUNTPAYMENTTT_215141.id="VA_AMOUNTPAYMENTTT_215141";
this.VA_AMOUNTPAYMENTTT_215141.colSpan=3;
this.VA_AMOUNTPAYMENTTT_215141.withoutLabel = false;
this.VA_AMOUNTPAYMENTTT_215141.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTPAYMENTTT_215141.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTPAYMENTTT_215141.visible= ConstantsApi.mode.All;
this.QV_2540_50573.id='QV_2540_50573';
this.QV_2540_50573.name='QV_2540_50573';
this.QV_2540_50573.pageable=false;
this.QV_2540_50573.sortable=false;
this.QV_2540_50573.resizable=false;
this.QV_2540_50573.scrollable=false
this.QV_2540_50573.confirmRowDeletion=false;
this.QV_2540_50573.exportToExcel=false;
this.QV_2540_50573.exportToPdf=false;
this.QV_2540_50573.height=0;
this.QV_2540_50573.filterableColumns=false;
this.QV_2540_50573.entityName='QuoteDetails';
this.QV_2540_50573.appendRecords=false;
this.QV_2540_50573.rowDetail=false;
this.QV_2540_50573.columnMenu = true;
this.QV_2540_50573.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_2540_50573.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
this.QV_2540_50573.commandsButton=[
{
id : 'CEQV_201QV_2540_50573_362',
image:'',
label: cobis.translate('ASSTS.LBL_ASSTS_DETALLECT_10474'),
name : 'GridCommand',
tooltip:'',
setFocus:false,
userControl:'Button',
enabled:true,
visible:true
},
];
//RowCommands:
//Creacion de columnas del Grid
this.QV_2540_50573.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXEYP_949141",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPNI_65857'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_TEXTINPUTBOXEYP_949141',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXVNN_469141",
label : cobis.translate('ASSTS.LBL_ASSTS_VENCIDOUG_82584'),
field : 'expired',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_TEXTINPUTBOXVNN_469141',
name :'expired',
withoutLabel : true,
attribute : 'expired',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXJHA_669141",
label : cobis.translate('ASSTS.LBL_ASSTS_VIGENTEON_55349'),
field : 'active',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_TEXTINPUTBOXJHA_669141',
name :'active',
withoutLabel : true,
attribute : 'active',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXBDE_877141",
label : cobis.translate('ASSTS.LBL_ASSTS_NOVIGENTT_94041'),
field : 'inactive',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_TEXTINPUTBOXBDE_877141',
name :'inactive',
withoutLabel : true,
attribute : 'inactive',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
{
id : "VA_TEXTINPUTBOXQVI_445141",
label : cobis.translate('ASSTS.LBL_ASSTS_TOTALAOJT_55920'),
field : 'total',
visible : ConstantsApi.mode.All,
type : 'textlabel',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_TEXTINPUTBOXQVI_445141',
name :'total',
withoutLabel : true,
attribute : 'total',
entity : 'QuoteDetails',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
}
},
]);
this.QV_QG32_ZBS32.pageSize=5;
this.QV_QG32_ZBS32.id='QV_QG32_ZBS32';
this.QV_QG32_ZBS32.name='QV_QG32_ZBS32';
this.QV_QG32_ZBS32.pageable=true;
this.QV_QG32_ZBS32.sortable=false;
this.QV_QG32_ZBS32.resizable=false;
this.QV_QG32_ZBS32.scrollable=false
this.QV_QG32_ZBS32.confirmRowDeletion=false;
this.QV_QG32_ZBS32.exportToExcel=false;
this.QV_QG32_ZBS32.exportToPdf=false;
this.QV_QG32_ZBS32.height=0;
this.QV_QG32_ZBS32.filterableColumns=false;
this.QV_QG32_ZBS32.entityName='DeferredRefundList';
this.QV_QG32_ZBS32.appendRecords=false;
this.QV_QG32_ZBS32.rowDetail=false;
this.QV_QG32_ZBS32.columnMenu = true;
this.QV_QG32_ZBS32.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_QG32_ZBS32.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_QG32_ZBS32.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXGTG_989141",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPIN_18186'),
field : 'item',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXGTG_989141',
name :'item',
withoutLabel : true,
attribute : 'item',
entity : 'DeferredRefundList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXHII_669141",
label : cobis.translate('ASSTS.LBL_ASSTS_DEVOLVERR_24242'),
field : 'value',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXHII_669141',
name :'value',
withoutLabel : true,
attribute : 'value',
entity : 'DeferredRefundList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXOEB_684141",
label : cobis.translate('ASSTS.LBL_ASSTS_INGRESOHM_26023'),
field : 'ingress',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXOEB_684141',
name :'ingress',
withoutLabel : true,
attribute : 'ingress',
entity : 'DeferredRefundList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
]);
this.QV_3510_91785.id='QV_3510_91785';
this.QV_3510_91785.name='QV_3510_91785';
this.QV_3510_91785.pageable=false;
this.QV_3510_91785.sortable=false;
this.QV_3510_91785.resizable=false;
this.QV_3510_91785.scrollable=false
this.QV_3510_91785.confirmRowDeletion=false;
this.QV_3510_91785.exportToExcel=false;
this.QV_3510_91785.exportToPdf=false;
this.QV_3510_91785.height=0;
this.QV_3510_91785.filterableColumns=false;
this.QV_3510_91785.entityName='Priorities';
this.QV_3510_91785.appendRecords=false;
this.QV_3510_91785.rowDetail=false;
this.QV_3510_91785.columnMenu = true;
this.QV_3510_91785.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_3510_91785.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_3510_91785.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXRNV_593141",
field : 'item',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXRNV_593141',
name :'item',
withoutLabel : true,
attribute : 'item',
entity : 'Priorities',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXPSA_455141",
field : 'priority',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXPSA_455141',
name :'priority',
withoutLabel : true,
attribute : 'priority',
entity : 'Priorities',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
]);
this.QV_1156_30060.id='QV_1156_30060';
this.QV_1156_30060.name='QV_1156_30060';
this.QV_1156_30060.pageable=false;
this.QV_1156_30060.sortable=false;
this.QV_1156_30060.resizable=false;
this.QV_1156_30060.scrollable=false
this.QV_1156_30060.confirmRowDeletion=false;
this.QV_1156_30060.exportToExcel=false;
this.QV_1156_30060.exportToPdf=false;
this.QV_1156_30060.height=0;
this.QV_1156_30060.filterableColumns=false;
this.QV_1156_30060.entityName='QuotationCurrency';
this.QV_1156_30060.appendRecords=false;
this.QV_1156_30060.rowDetail=false;
this.QV_1156_30060.columnMenu = true;
this.QV_1156_30060.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_1156_30060.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_1156_30060.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXZKD_152141",
field : 'currencyType',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXZKD_152141',
name :'currencyType',
withoutLabel : true,
attribute : 'currencyType',
entity : 'QuotationCurrency',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_DATEFIELDMQBLSD_801141",
field : 'date',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_DATEFIELDMQBLSD_801141',
name :'date',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'date',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'QuotationCurrency',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXUVG_286141",
field : 'value',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXUVG_286141',
name :'value',
withoutLabel : true,
attribute : 'value',
entity : 'QuotationCurrency',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXBHX_855141",
field : 'result',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXBHX_855141',
name :'result',
withoutLabel : true,
attribute : 'result',
entity : 'QuotationCurrency',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
]);
this.T_PAYMENTSTENLV_850 = this.formBuilder.group({
Payment: this.formBuilder.group({
date:[{value: null, disabled: !this.VA_DATEGYMPIXSZGYL_543141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DATEGYMPIXSZGYL_543141.validationFunctions!)],
currencyType:[{value: null, disabled: !this.VA_CURRENCYSPEYFQA_285141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CURRENCYSPEYFQA_285141.validationFunctions!)],
quotation:[{value: null, disabled: !this.VA_QUOTATIONEPFTUZ_479141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_QUOTATIONEPFTUZ_479141.validationFunctions!)],
typeQuotationTr:[{value: null, disabled: !this.VA_TYPEQUOTATIOTNN_114141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEQUOTATIOTNN_114141.validationFunctions!)],
paymentType:[{value: null, disabled: !this.VA_TEXTINPUTBOXCFY_310141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXCFY_310141.validationFunctions!)],
customer:[{value: null, disabled: !this.VA_TEXTINPUTBOXHQX_290141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXHQX_290141.validationFunctions!)],
reference:[{value: null, disabled: !this.VA_REFERENCECGUXXB_239141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REFERENCECGUXXB_239141.validationFunctions!)],
value:[{value: null, disabled: !this.VA_VALUEEFNQCTRLMP_628141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_VALUEEFNQCTRLMP_628141.validationFunctions!)],
numCheck:[{value: null, disabled: !this.VA_NUMCHECKQLTBIOX_669141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMCHECKQLTBIOX_669141.validationFunctions!)],
bank:[{value: null, disabled: !this.VA_TEXTINPUTBOXSJQ_831141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXSJQ_831141.validationFunctions!)],
retention:[{value: null, disabled: !this.VA_TEXTINPUTBOXPMM_746141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXPMM_746141.validationFunctions!)],
negotiated:[{value: false, disabled: !this.VA_NEGOTIATEDHPDLB_812141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NEGOTIATEDHPDLB_812141.validationFunctions!)],
onLine:[{value: false, disabled: !this.VA_CHECKBOXIPQLEBS_550141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CHECKBOXIPQLEBS_550141.validationFunctions!)],
note:[{value: null, disabled: !this.VA_TEXTINPUTBOXIKP_805141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXIKP_805141.validationFunctions!)],
operationCurrencyType:[{value: null, disabled: !this.VA_OPERATIONCURYEE_868141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OPERATIONCURYEE_868141.validationFunctions!)],
quotationValue:[{value: null, disabled: !this.VA_QUOTATIONVALUEE_804141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_QUOTATIONVALUEE_804141.validationFunctions!)],
typeQuotationOp:[{value: null, disabled: !this.VA_TYPEQUOTATIOPNO_482141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEQUOTATIOPNO_482141.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_AMOUNTGSUZWEZJK_997141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTGSUZWEZJK_997141.validationFunctions!)],
finePrepayment:[{value: null, disabled: !this.VA_FINEPREPAYMETTT_628141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FINEPREPAYMETTT_628141.validationFunctions!)],
amountPrepayment:[{value: null, disabled: !this.VA_AMOUNTPREPAYTME_876141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTPREPAYTME_876141.validationFunctions!)],
amountPayment:[{value: null, disabled: !this.VA_AMOUNTPAYMENTTT_215141.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTPAYMENTTT_215141.validationFunctions!)],
referencedAccount:[null],
amountPayAux:[null],
customerID:[null],
reductionType:[null],
user:[null],
category:[null],
collectionType:[null],
entireFee:[null],
payQuotationValue:[null],
continuePayment:[null],
operationTypeId:[null],
datePay:[null],
querySequential:[null],
prePaymentAux:[null],
advance:[null],
sequential:[null],
amountPay:[null],
unappliedPayments:[null],
sequentialPay:[null],
status:[null],
processDate:[null],
regional:[null],
billTo:[null],
unappliedAmount:[null],
prepayRate:[null],
}
),
QuoteDetails: this.formBuilder.group({
description:null,
expired:null,
active:null,
inactive:null,
total:null,
}
),
Priorities: this.formBuilder.group({
item:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3510_91785.columns,'VA_TEXTINPUTBOXRNV_593141')],
priority:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_3510_91785.columns,'VA_TEXTINPUTBOXPSA_455141')],
}
),
QuotationCurrency: this.formBuilder.group({
currencyType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1156_30060.columns,'VA_TEXTINPUTBOXZKD_152141')],
date:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1156_30060.columns,'VA_DATEFIELDMQBLSD_801141')],
value:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1156_30060.columns,'VA_TEXTINPUTBOXUVG_286141')],
result:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1156_30060.columns,'VA_TEXTINPUTBOXBHX_855141')],
}
),
DeferredRefundList: this.formBuilder.group({
item:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QG32_ZBS32.columns,'VA_TEXTINPUTBOXGTG_989141')],
value:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QG32_ZBS32.columns,'VA_TEXTINPUTBOXHII_669141')],
ingress:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QG32_ZBS32.columns,'VA_TEXTINPUTBOXOEB_684141')],
}
),
});
}
}