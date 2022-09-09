// (Button) 
    task.executeCommand.CM_VALUEDAT_NNN = function(entities, executeCommandEventArgs) {
        executeCommandEventArgs.commons.execServer = false;
    var parameters = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters();
		var msgConfirm = "";
		var showMessage = true;
    if (parameters.parameters.idMenu == 'FECHA') {
			msgConfirm = "ASSTS.MSG_ASSTS_ESTSEGURO_95544";			
    } else if (parameters.parameters.idMenu == 'REVERSOS') {
			msgConfirm = "ASSTS.MSG_ASSTS_ESTSEGURV_19605";			
			var selectedRow = executeCommandEventArgs.commons.api.grid.getSelectedRows('QV_1244_89323'); 
			if (selectedRow.length == 0){
				executeCommandEventArgs.commons.messageHandler.showMessagesInformation(
					"ASSTS.MSG_ASSTS_SELECCINT_52125", false, null, timer);
				showMessage = false;
			}
		}		
		if (showMessage){			
			return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm(msgConfirm).then(function(resp){
				var response = false;
				switch(resp.buttonIndex){
					case 0 : //CANCEL
							executeCommandEventArgs.commons.execServer = false;
							break;
					case 1 : //ACCEPT							
							//COMPARE VALUE DATE  WITH LAST PROCESS DATE
							if (queryDict.menu == Constants.MENU_VALUE_DATE){								
								var dateParts = entities.Loan.lastProcessDate.split("/");
								var d = dateParts[1] + '/' + dateParts[0] + '/' + dateParts[2];								
								var dateLP = new Date(d);		
								if (entities.ValueDateFilter.valueDate > dateLP){
									return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_LAFECHADP_53060").then(function(respAux){										
										switch(respAux.buttonIndex){
                                    case 0:
                                        executeCommandEventArgs.commons.execServer = false;
													 break;
                                    case 1:
                                        executeCommandEventArgs.commons.execServer = true;
													 response = true;
													 break;
										}
										return response;
									});
								}else{
									executeCommandEventArgs.commons.execServer = true;
									response = true;
								}
							}else{							
								executeCommandEventArgs.commons.execServer = true;
								response = true;
							}
							break;
				}
				return response;
			});
		}
        
    };