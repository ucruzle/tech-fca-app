sap.ui.define([], function() {
	"use strict";

	return {

		navegaEtapaCarregamento: function(oThis, oEvent, etapaCarregamento) {

			var tiposProdutos = {
				"ACUCAR": "1",
				"ETANOL": "2",
				"OLEOFUSEL": "3",
				"BAGACO": "4"
			};
			
			var etapasCarregamento = {
				"CHECKLIST": 1,
				"FATURAMENTO": 2
			};

			var oRouter       = null;
			var sPath         = null;
			var oPendente     = null;
			var idTipoProduto = null;
			var oContext      = null;
			var that          = null;

			that = oThis;
			oRouter  = sap.ui.core.UIComponent.getRouterFor(that);
			oContext = oEvent.getSource().getBindingContext();

			if (oContext !== undefined) {

				// Recuperar o link do click na lista
				var sPath = oEvent.getSource().getBindingContext().getPath();

				if (sPath !== undefined) {
				
					oPendente = that.getView().getModel().getProperty(sPath);

					if (oPendente !== undefined) {

						idTipoProduto = oPendente.idTipoProduto;

						if (idTipoProduto !== undefined) {
						
							switch (idTipoProduto) {
								case tiposProdutos.ACUCAR:

									switch (etapaCarregamento) {
										case etapasCarregamento.CHECKLIST:
											oRouter.navTo("checklistacucar");		
											break;
										case etapasCarregamento.FATURAMENTO:
											oRouter.navTo("faturamentodeacucar");
											break;
										default:
											break;
									}

									break;
								case tiposProdutos.ETANOL:

									switch (etapaCarregamento) {
										case etapasCarregamento.CHECKLIST:
											oRouter.navTo("checklistetanol");
											break;
										case etapasCarregamento.FATURAMENTO:
											oRouter.navTo("faturamentodeetanol");
											break;
										default:
											break;
									}

									break;
								case tiposProdutos.OLEOFUSEL:
									
									switch (etapaCarregamento) {
										case etapasCarregamento.CHECKLIST:
											oRouter.navTo("checklistoleofusel");
											break;
										case etapasCarregamento.FATURAMENTO:
											oRouter.navTo("faturamentodeoleofusel");
											break;
										default:
											break;
									}

									break;
								case tiposProdutos.BAGACO:

									switch (etapaCarregamento) {
										case etapasCarregamento.CHECKLIST:
											oRouter.navTo("checklistbagacocana");
											break;
										case etapasCarregamento.FATURAMENTO:
											oRouter.navTo("faturamentodebagacocana");
											break;
										default:
											break;
									}
								
									break;
								default:
									break;
							}
						}
					
					}
				
				}
			}

		},

		confirmDialog: function(message, onConfirm) {
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(message, {
				icon: sap.m.MessageBox.Icon.QUESTION,
				title: "Confirmar",
				actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
				onClose: function(oAction) {
					if (oAction === sap.m.MessageBox.Action.YES) {
						onConfirm();
					}
				}
			});
		},
		
		executedProcessDialog: function(message, onCallBack) {
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(message, {
				icon: sap.m.MessageBox.Icon.QUESTION,
				title: "Processamento Realizado",
				actions: sap.m.MessageBox.Action.OK,
				onClose: function(oAction) {
					if (oAction === sap.m.MessageBox.Action.OK) {
						onCallBack();
					}
				}
			});
		},
		
		warningDialog: function(message, warningTitle) {
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.warning(message, {
				title: warningTitle
			});
		},

		infoDialog: function(message, informationTitle) {
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.information(message, {
				title: informationTitle
			});
		},

		validateCombo: function(oEvent) {
			var oValidatedComboBox = oEvent.getSource(),
				sSelectedKey = oValidatedComboBox.getSelectedKey(),
				sValue = oValidatedComboBox.getValue();

			if (!sSelectedKey && sValue) {
				oValidatedComboBox.setValueState("Error");
				oValidatedComboBox.setValueStateText("Valor inválido. Por favor, escolha um valor da lista apresentada.");
				alert("Valor inválido. Por favor, escolha um valor da lista apresentada.");
				oValidatedComboBox.focus();
				return false;
			} else {
				oValidatedComboBox.setValueState("None");
				return true;
			}

		},

		formatTimestamp: function(date) {
			//2019-07-15T14:08:32

			return (
				date.getFullYear() + "-" +
				("0" + (date.getMonth() + 1)).slice(-2) + "-" +
				("0" + date.getUTCDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + (
					"0" + date.getSeconds()).slice(-2));

		},
		
		formatTime: function(time) {
			//2019-07-15T14:08:32
			//time = time.toString();
			//	return "PT" + time.substring(0,2) + "H" + time.substring(2,4) + "M" + time.substring(4,6) + "S";
			return ("PT" + ("0" + time.getHours()).slice(-2) + "H" + ("0" + time.getMinutes()).slice(-2) + "M" + ("0" + time.getSeconds()).slice(-2) + "S");
		},

		formatHour: function(sHour) {
			if (sHour) {

				var date = new Date(sHour.ms);
				var timeinmiliseconds = date.getTime();
				// var oTimeFormat = sap.ui.core.format.DateFormat.getTimeInstance({
				// 	pattern: "HH:mm"
				// });
				var TZOffsetMs = new Date(date).getTimezoneOffset() * 60 * 1000;
				// var timeStr = oTimeFormat.format(new Date(timeinmiliseconds + TZOffsetMs));
				return new Date(timeinmiliseconds + TZOffsetMs);

			}
		},

		focusNextComponent: function(currentComponent, tableOfComponents) {
			// var nextComponent = tableOfComponents.filter((component) {
			// 	return component.id eq currentComponent.id
			// });
			return tableOfComponents.filter(function(component) {
				return component.id === currentComponent.id;
			});

		},
		
		calculaHoraParada: function(dataIni, horaIni, dataFim, horaFim) {
			
			var difDataHora = null;
			var calcHrParada = null;
			
			var dataHoraIni = new Date(
				dataIni.getFullYear(), 
            	("0" + dataIni.getMonth()).slice(-2), 
            	("0" + dataIni.getUTCDate()).slice(-2), 
            	("0" + horaIni.getHours()).slice(-2), 
            	("0" + horaIni.getMinutes()).slice(-2), 
            	("0" + horaIni.getSeconds()).slice(-2)
            );
			                          
            var dataHoraFim = new Date(
				dataFim.getFullYear(), 
            	("0" + dataFim.getMonth()).slice(-2), 
            	("0" + dataFim.getUTCDate()).slice(-2), 
            	("0" + horaFim.getHours()).slice(-2), 
            	("0" + horaFim.getMinutes()).slice(-2), 
            	("0" + horaFim.getSeconds()).slice(-2)
        	);			                          
			
			if (dataHoraFim > dataHoraIni) {
				difDataHora = Math.abs(dataHoraFim.getTime() - dataHoraIni.getTime());
			}
			
			calcHrParada = difDataHora ? (((difDataHora / 1000) /60) /60).toFixed(2) : 0;
			
			return calcHrParada;
		},
		
		calculaParadaApontamento: function(dataIniTrabCol, horaIniTrabCol, dataFimTrabCol, horaFimTrabCol) {
			
			var calculaHoraParada = null;
			
			if ((dataIniTrabCol !== "" || dataIniTrabCol !== undefined) ||
				(horaIniTrabCol !== "" || horaIniTrabCol !== undefined) ||
				(dataFimTrabCol !== "" || dataFimTrabCol !== undefined) ||
				(horaFimTrabCol !== "" || horaFimTrabCol !== undefined)) {
				calculaHoraParada = this.calculaHoraParada(dataIniTrabCol, horaIniTrabCol, dataFimTrabCol, horaFimTrabCol);
			}
			
			return calculaHoraParada ? calculaHoraParada : 0;
		}

	};

});