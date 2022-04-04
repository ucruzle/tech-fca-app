sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"../utils",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/UIComponent"
], function(Controller, Filter, utils, JSONModel, UIComponent) {
	"use strict";

	return Controller.extend("sap.ecom.plataforma.controller.Cockpit", {

		onInit: function() {
			// call the init function of the parent
			// UIComponent.prototype.init.apply(this, arguments);
			
			// create the views based on the url/hash
			// this.getRouter().initialize();
		},
		
		onListaVendas: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("listavendas");
		},
		
		onListaParceiros: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("listaparceiros");
		},
		
		onListaProdutos: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("listaprodutos");
		},
		
		onListaStatusPedidosDeVendas: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("listastatuspedidosdevendas");
		}
		
		// onBoleto: function() {
		// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter.navTo("boleto");
		// }

		// validateComboCentroTrabalho: function(oEvent) {
		// 	var oComboBox = {};
		// 	var oCentroTrab = {};
		// 	var fnPreencheCentroTrab = {};
		// 	var codigoCentroTrabalho = "";

		// 	if (utils.validateCombo(oEvent)) {
		// 		oComboBox = oEvent.getSource();
		// 		codigoCentroTrabalho = oComboBox.getSelectedKey();
		// 		oCentroTrab = this.getOwnerComponent().getModel("Ordem").getProperty("/centroDeTrabalho");

		// 		fnPreencheCentroTrab = function(oData, oCentroTrab) {
		// 			oCentroTrab.centroTrabalhoCodigo = oData.Arbpl;
		// 			oCentroTrab.chaveControle = oData.Steus;
		// 			oCentroTrab.centroTrabalhoDescricao = oData.Ktext;
		// 		};

		// 		//buscando por centro de trabalho
		// 		var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 		var sPath = "/Z_LISTA_CENTROS_TRABSet('" + codigoCentroTrabalho + "')";
		// 		var that = this;
		// 		oModel.read(sPath, {
		// 			urlParameters: {

		// 			},
		// 			success: function(oData, oResponse) {
		// 				console.log(oData);
		// 				fnPreencheCentroTrab(oData, oCentroTrab);
		// 			},
		// 			error: function(error) {
		// 				console.log(error);
		// 				that.getView().setBusy(false);
		// 				alert("Não foi possível trazer o centro de trabalho selecionado");
		// 			}
		// 		});
		// 	}
		// },

		// validateCombo: function(oEvent) {
		// 	utils.validateCombo(oEvent);
		// },

		// validaTipoNota: function(oEvent) {
		// 	var clearFields = function(that) {
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/fornecedoresComponentesCodigo", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/fornecedoresComponentesNome", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/revisaoComponentes", "");
		// 	};
		// 	if (this.getOwnerComponent().getModel("Ordem").getProperty("/tipoNota").trim() === "") {
		// 		clearFields(this);

		// 	} else {
		// 		this._validTipoNota = utils.validateCombo(oEvent);
		// 		if (!this._validTipoNota) {
		// 			clearFields(this);
		// 		}
		// 	}
		// },

		// handleTipoOrdemChange: function(oEvent) {

		// 	var oValidatedComboBox = oEvent.getSource(),
		// 		codigoTipoOrdem = oValidatedComboBox.getSelectedKey();

		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	oModel.setSizeLimit(500);
		// 	var sPath = "/Z_LISTA_ATVMNTSet";
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			"$filter": "Auart eq '" + codigoTipoOrdem + "'"
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_ATVMNTSet", oData.results);
		// 			that.getView().setBusy(false);
		// 		},
		// 		error: function(error) {
		// 			that.getView().setBusy(false);
		// 			console.log(error);
		// 			alert("Não foi possível trazer os dados dos tipos de atividade de manutenção");
		// 		}
		// 	});

		// 	var sPath = "/Z_LISTA_STATUSSet";
		// 	oModel.read(sPath, {
		// 		urlParameters: {

		// 			"$filter": "Auart eq '" + codigoTipoOrdem + "'"
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_STATUSSet", oData.results);
		// 			that.getView().setBusy(false);
		// 		},
		// 		error: function(error) {
		// 			that.getView().setBusy(false);
		// 			console.log(error);
		// 			alert("Não foi possível trazer os dados dos tipos de atividade de manutenção");
		// 		}
		// 	});

		// },

		// changeControleCodigo: function(oEvent) {
			
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var controleCodigo = this.getView().byId("controleCodigo").getValue();

		// 	var sPath = "/Z_LISTA_FUNCIONARIOSSet('" + controleCodigo + "')";
		// 	oModel.read(sPath, {
		// 		urlParameters: {

		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/validControle", "None");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/controleNome", oData.Cname);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Funcionário não encontrado");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/validControle", "Error");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/controleNome", "");
		// 		}
		// 	});

		// },

		// changeTipoNota: function(oEvent) {
		// 	this._validTipoNota = utils.validateCombo(oEvent);

		// 	var tipoNota = this.getOwnerComponent().getModel("Ordem").getProperty("/tipoNota");
			
		// 	if (!this._validTipoNota || tipoNota === "") {

		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/dataNota", null);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/horaNota", null);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/dataAvaria", null);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/horaAvaria", null);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/dataDesejado", null);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/horaDesejado", null);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/notificadorNota", null);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/parada", null);
		// 		this.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_PARTE_OBJETOSet", []);

		// 		return;

		// 	}

		// 	//buscando partes objetos
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var sPath = "/Z_LISTA_PARTE_OBJETOSet";
		// 	var filter = "Qmart eq '" + tipoNota + "'";
		// 	var that = this;
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			"$filter": filter
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_PARTE_OBJETOSet", oData.results);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getView().setBusy(false);
		// 			alert("Não foi possível trazer os dados das partes dos objetos");
		// 		}
		// 	});

		// 	//buscando defeitos
		// 	var sValue = oEvent.getParameter("value").toString().toUpperCase();
		// 	if (sValue === "") {
		// 		this.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_DEFEITOSet", []);
		// 		return;
		// 	}
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var sPath = "/Z_LISTA_DEFEITOSet";
		// 	var filter = "Qmart eq '" + tipoNota + "'";
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			"$filter": filter
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_DEFEITOSet", oData.results);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getView().setBusy(false);
		// 			alert("Não foi possível trazer os dados dos defeitos");
		// 		}
		// 	});
			
		// 	//buscando causas
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var sPath = "/Z_LISTA_CAUSASet";
		// 	var filter = "Qmart eq '" + tipoNota + "'";
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			"$filter": filter
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_CAUSASet", oData.results);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getView().setBusy(false);
		// 			alert("Não foi possível trazer os dados das causas");
		// 		}
		// 	});

		// 	//buscando ações
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var sPath = "/Z_LISTA_ACAOSet";
		// 	var filter = "Qmart eq '" + tipoNota + "'";
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			"$filter": filter
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_ACAOSet", oData.results);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getView().setBusy(false);
		// 			alert("Não foi possível trazer os dados das ações");
		// 		}
		// 	});
			
		// },

		// handleValueHelpSearchFrota: function(oEvent) {

		// 	var sValue = oEvent.getParameter("value").toString().toUpperCase();
		// 	if (sValue === "") {
		// 		this.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_FROTASet", []);
		// 		return;
		// 	}
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var sPath = "/Z_LISTA_FROTASet";
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			// "$filter": "Eqktu eq '" + sValue + "'"
		// 			"$filter": "Invnr eq '" + sValue + "'"
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_FROTASet", oData.results);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getView().setBusy(false);
		// 			alert("Não foi possível trazer os dados da frota");
		// 		}
		// 	});
		// },

		// handleValueHelpCloseFrota: function(oEvent) {
		// 	var aContexts = oEvent.getParameter("selectedContexts");
		// 	if (aContexts && aContexts.length) {
		// 		var oContext = aContexts[0];
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/frotaNroTecnico", oContext.getObject().Tidnr);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/frotaCodigo", oContext.getObject().Equnr);
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/frotaDescricao", oContext.getObject().Eqktu);

		// 		this._buscaDadosDaUltimaOrdem(oContext.getObject().Equnr);
		// 		this._buscaOrdensAnteriores(oContext.getObject().Equnr);
		// 		this._buscaNotificacoesLaboratorio(oContext.getObject().Equnr);
		// 	}
			
		// 	// this._validaFrota('Tidnr', oContext.getObject().Tidnr); // MOD - 24.04.2020 - Alteração / Comentado DESENV5
		// 	this._validaFrota("Invnr", oContext.getObject().Invnr);
		// },

		// showOrdensAnteriores: function(oEvent) {
		// 	if (!this.getOwnerComponent().getModel("Ordem").getProperty("/frotaCodigo")) {
		// 		alert("Por favor, digite um valor no campo frota para visualizar ordens anteriores");
		// 		return;
		// 	}

		// 	if (!this._ordensAnteriores) {
		// 		this._ordensAnteriores = sap.ui.xmlfragment(
		// 			"sap.pm.criarordem.view.fragments.OrdensAnteriores",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._ordensAnteriores);
		// 	}

		// 	this._ordensAnteriores.open();
		// },

		// closeOrdensAnteriores: function() {
		// 	this._ordensAnteriores.close();
		// },

		// showNotificacoesLaboratorio: function(oEvent) {
		// 	if (!this.getOwnerComponent().getModel("Ordem").getProperty("/frotaCodigo")) {
		// 		alert("Por favor, digite um valor no campo frota para visualizar notificações do laboratório.");
		// 		return;
		// 	}

		// 	if (!this._notificacoesLaboratorio) {
		// 		this._notificacoesLaboratorio = sap.ui.xmlfragment(
		// 			"sap.pm.criarordem.view.fragments.NotificacoesLaboratorio",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._notificacoesLaboratorio);
		// 	}

		// 	this._notificacoesLaboratorio.open();
		// },

		// closeNotificacoesLaboratorio: function() {
		// 	this._notificacoesLaboratorio.close();
		// },

		// handleValueHelpFornecedores: function(oEvent) {

		// 	this._eventSource = oEvent.getSource().getId();

		// 	this.inputId = oEvent.getSource().getId();
			
		// 	// create value help dialog
		// 	if (!this._valueHelpDialogFornecedores) {
		// 		this._valueHelpDialogFornecedores = sap.ui.xmlfragment(
		// 			"sap.pm.criarordem.view.fragments.valuehelps.Fornecedores",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._valueHelpDialogFornecedores);
		// 	}

		// 	this._valueHelpDialogFornecedores.open();
		// },

		// handleValueHelpSearchFornecedores: function(oEvent) {
			
		// 	var sValue = oEvent.getParameter("value").toString().toUpperCase();
		// 	if (sValue === "") {
		// 		this.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_FORNECEDORESSet", []);
		// 		return;
		// 	}
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var sPath = "/Z_LISTA_FORNECEDORESSet";
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			"$filter": "Name1 eq '" + sValue + "'"
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_FORNECEDORESSet", oData.results);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getView().setBusy(false);
		// 			alert("Não foi possível trazer os dados do fornecedores");
		// 		}
		// 	});

		// },

		// handleValueHelpCloseFornecedores: function(oEvent) {
		// 	var aContexts = oEvent.getParameter("selectedContexts");
		// 	if (aContexts && aContexts.length) {
		// 		var oContext = aContexts[0];

		// 		if (this._eventSource.indexOf("Componentes") === -1) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/fornecedorCodigo", oContext.getObject().Lifnr);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/fornecedorNome", oContext.getObject()
		// 				.Name1);

		// 		} else {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/fornecedorComponentesCodigo", oContext.getObject().Lifnr);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/fornecedorComponentesNome", oContext.getObject().Lifnr + " - " +
		// 				oContext.getObject().Name1);
		// 		}
		// 	}
		// 	this._validaFornecedor();
		// },

		// handleValueHelpRevisoes: function(oEvent) {
		// 	this._eventSource = oEvent.getSource().getId();

		// 	this.inputId = oEvent.getSource().getId();
		// 	// create value help dialog
		// 	if (!this._valueHelpDialogRevisoes) {
		// 		this._valueHelpDialogRevisoes = sap.ui.xmlfragment(
		// 			"sap.pm.criarordem.view.fragments.valuehelps.Revisoes",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._valueHelpDialogRevisoes);
		// 	}

		// 	this._valueHelpDialogRevisoes.open();
		// },

		// handleValueHelpSearchRevisoes: function(oEvent) {

		// 	var sValue = oEvent.getParameter("value").toString().toUpperCase();
		// 	if (sValue === "") {
		// 		this.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_REVISOESSet", []);
		// 		return;
		// 	}
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var sPath = "/Z_LISTA_REVISOESSet";
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			"$filter": "Revtx eq '" + sValue + "'"
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("ListasAuxiliaresLocal").setProperty("/Z_LISTA_REVISOESSet", oData.results);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getView().setBusy(false);
		// 			alert("Não foi possível trazer os dados das revisões");
		// 		}
		// 	});

		// },

		// handleValueHelpCloseRevisoes: function(oEvent) {
		// 	var aContexts = oEvent.getParameter("selectedContexts");
		// 	if (aContexts && aContexts.length) {
		// 		var oContext = aContexts[0];

		// 		if (this._eventSource.indexOf("Componentes") === -1) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/revisaoCodigo", oContext.getObject().Revnr);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/revisaoDescricao", oContext.getObject().Revtx);

		// 		} else {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/revisaoComponentesCodigo", oContext.getObject().Revnr);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/revisaoComponentesDescricao", oContext.getObject().Revtx);
		// 		}
		// 	}
		// 	this.validaRevisao();
		// },

		// _validaFrota: function(sFieldName, sValue) {
		// 	if (!sValue) {
		// 		// var sValue = this.getView().byId("frotaNroTecnico").getValue().trim().toUpperCase();
		// 		sValue = this.getView().byId("frotaNroInventario").getValue().trim().toUpperCase();
		// 	}

		// 	var fnClearFields = function(that) {
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/frotaNroTecnico", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/frotaCodigo", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/frotaNroInventario", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/frotaDescricao", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/garantia", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/kmH", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/ultimaOrdem", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/ultimaOrdemData", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/notificador", "");
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/ordensAnteriores", []);
		// 		that.getOwnerComponent().getModel("Ordem").setProperty("/notificacoesLaboratorio", []);
		// 	};

		// 	if (!sValue) {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/validFrota", "None");
		// 		fnClearFields(this);
		// 		return;
		// 	}

		// 	// INI - 24.04.2020 - Alteração / Comentado DESENV5
		// 	// if (sFieldName === 'Equnr') {
		// 	// 	var pad = "000000000000000000";
		// 	// 	sValue = (pad + sValue).slice(-pad.length);
		// 	// 	var sPath = "/Z_LISTA_FROTASet(Equnr='" + sValue + "',Tidnr='')";
		// 	// } else {
		// 	// 	var sPath = "/Z_LISTA_FROTASet(Equnr='',Tidnr='" + sValue + "')";
		// 	// }
		// 	// FIM - 24.04.2020 - Alteração / Comentado DESENV5
			
		// 	var pad   = "000000000000000000";
		// 	var sPath = "";
			
		// 	switch (sFieldName) {
		// 		case "Equnr":
		// 			sValue = (pad + sValue).slice(-pad.length);
		// 			sPath  = "/Z_LISTA_FROTASet(Equnr='" + sValue + "',Tidnr='')";
		// 			break;
		// 	    case "Tidnr":
		// 	    	sPath = "/Z_LISTA_FROTASet(Equnr='',Tidnr='" + sValue + "')";
		// 			break;
		// 	    case "Invnr":
		// 	    	sPath = "/Z_LISTA_FROTASet(Equnr='',Tidnr='" + sValue + "')";
		// 			break;
		// 	    default:
		// 	    	sPath = "/Z_LISTA_FROTASet(Equnr='',Tidnr='" + sValue + "')";
		// 	}

		// 	var that = this;
		// 	console.log(sPath);

		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	oModel.read(sPath, {
		// 		urlParameters: {},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/validFrota", "None");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/frotaNroTecnico", oData.Tidnr);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/frotaCodigo", oData.Equnr);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/frotaNroInventario", oData.Invnr);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/frotaDescricao", oData.Eqktu);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/denominacao", oData.Eqktu);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/garantia", oData.ExpiryDate);
		// 			that._buscaDadosDaUltimaOrdem(oData.Equnr);
		// 			that._buscaOrdensAnteriores(oData.Equnr);
		// 			that._buscaNotificacoesLaboratorio(oData.Equnr);
		// 			return true;
		// 		},
		// 		error: function(error) {
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/validFrota", "Error");
		// 			console.log(error);
		// 			alert("Veículo não encontrado");
		// 			fnClearFields(that);
		// 			return false;
		// 		}
		// 	});
		// },

		// _buscaDadosDaUltimaOrdem: function(frota) { //busca dados da última ordem
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares"); //***

		// 	var pad = "000000000000000000";
		// 	var frota = (pad + frota).slice(-pad.length);

		// 	var sPath = "/Z_ORDEM_ANTSet('" + frota + "')";
		// 	oModel.read(sPath, {
		// 		urlParameters: {

		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/ultimaOrdemData", oData.Addat);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/kmH", oData.User4);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/ultimaOrdem", oData.Aufnr);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/notificador", oData.Qmnam);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Não foi possível encontrar a última ordem");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/ultimaOrdemData", "");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/kmH", "");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/ultimaOrdem", "");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/notificador", "");
		// 		}
		// 	});
		// },

		// _buscaOrdensAnteriores: function(frota) { //busca dados da última ordem
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares"); //***

		// 	var pad = "000000000000000000";
		// 	var frota = (pad + frota).slice(-pad.length);

		// 	var sPath = "/Z_ORDEM_ANTSet";
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			"$filter": "Equnr eq '" + frota + "'"
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/ordensAnteriores", oData.results);
		// 			console.log(that.getOwnerComponent().getModel("Ordem"));

		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/ordensAnteriores", []);
		// 			alert("Não foi possível consultar ordens anteriores");
		// 		}
		// 	});
		// },

		// _buscaNotificacoesLaboratorio: function(frota) { //busca dados da última ordem
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares"); //***

		// 	var pad = "000000000000000000";
		// 	var frota = (pad + frota).slice(-pad.length);

		// 	var sPath = "/Z_NOTIFICACOES_LABSet";
		// 	oModel.read(sPath, {
		// 		urlParameters: {
		// 			"$filter": "Equnr eq '" + frota + "'"
		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/notificacoesLaboratorio", oData.results);
		// 			console.log(that.getOwnerComponent().getModel("Ordem"));

		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/notificacoesLaboratorio", []);
		// 			alert("Não foi possível consultar notificações do laboratório");
		// 		}
		// 	});
		// },

		// _validaFornecedor: function(oEvent) {
		// 	var evento = oEvent ? oEvent.getSource().getId() : this._eventSource;
		// 	var componentes = evento.indexOf("Componente") !== -1;

		// 	var fornecedorCodigo = componentes ? this.getView().byId("fornecedorComponentesCodigo").getValue().trim().toUpperCase() : this.getView()
		// 		.byId(
		// 			"fornecedorCodigo").getValue().trim().toUpperCase();

		// 	var fnClearFields = function(componentes, that) {
		// 		if (componentes) {
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/fornecedorComponentesNome", "");
		// 		} else {
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/fornecedorNome", "");
		// 		}
		// 	};

		// 	if (!fornecedorCodigo) {
		// 		if (componentes) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/validFornecedorComponentes", "None");
		// 		} else {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/validFornecedor", "None");
		// 		}
		// 		fnClearFields(componentes, this);
		// 		return;
		// 	}

		// 	var pad = "0000000000";
		// 	fornecedorCodigo = (pad + fornecedorCodigo).slice(-pad.length);
		// 	var sPath = "/Z_LISTA_FORNECEDORESSet('" + fornecedorCodigo.trim().toUpperCase() + "')";

		// 	var that = this;
		// 	console.log(sPath);

		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	oModel.read(sPath, {
		// 		urlParameters: {},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			if (componentes) {
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/validFornecedorComponentes", "None");
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/fornecedorComponentesCodigo", oData.Lifnr);
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/fornecedorComponentesNome", oData.Name1);
		// 			} else {
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/validFornecedor", "None");
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/fornecedorCodigo", oData.Lifnr);
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/fornecedorNome", oData.Name1);
		// 			}

		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Fornecedor não encontrado");
		// 			if (componentes) {
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/validFornecedorComponentes", "Error");
		// 			} else {
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/validFornecedor", "Error");
		// 			}
		// 			fnClearFields(componentes, that);

		// 		}
		// 	});
		// },

		// validaRevisao: function(oEvent) {
		// 	var evento = oEvent ? oEvent.getSource().getId() : this._eventSource;
		// 	var componentes = evento.indexOf("Componente") !== -1;
		// 	var revisaoCodigo = componentes ? this.getView().byId("revisaoComponentesCodigo").getValue().trim().toUpperCase() : this.getView().byId(
		// 		"revisaoCodigo").getValue().trim().toUpperCase();
		// 	//	var pad = "0000000000";
		// 	//	fornecedorCodigo = (pad + fornecedorCodigo).slice(-pad.length);

		// 	if (!revisaoCodigo) {
		// 		if (componentes) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/validRevisaoComponentes", "None");
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/revisaoComponentesDescricao", "");
		// 		} else {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/validRevisao", "None");
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/revisaoDescricao", "");
		// 		}
		// 		return;
		// 	}

		// 	var sPath = "/Z_LISTA_REVISOESSet('" + revisaoCodigo.trim() + "')";

		// 	var that = this;
		// 	console.log(sPath);

		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	oModel.read(sPath, {
		// 		urlParameters: {},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			if (componentes) {
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/validRevisaoComponentes", "None");
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/revisaoComponentesCodigo", oData.Revnr);
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/revisaoComponentesDescricao", oData.Revtx);
		// 			} else {
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/validRevisao", "None");
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/revisaoCodigo", oData.Revnr);
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/revisaoDescricao", oData.Revtx);
		// 			}

		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Revisão não encontrada");
		// 			if (componentes) {
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/validRevisaoComponentes", "Error");
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/revisaoComponentesDescricao", "");
		// 			} else {
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/validRevisao", "None");
		// 				that.getOwnerComponent().getModel("Ordem").setProperty("/revisaoDescricao", "");
		// 			}

		// 		}
		// 	});
		// },

		// _buscaChaveControle: function(codigoCentroTrabalho, oCentroTrab) {

		// 	//buscando por centro de trabalho
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
		// 	var sPath = "/Z_LISTA_CENTROS_TRABSet('" + codigoCentroTrabalho + "')";
		// 	var that = this;
		// 	oModel.read(sPath, {
		// 		urlParameters: {

		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			oCentroTrab = oData;
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getView().setBusy(false);
		// 			alert("Não foi possível trazer o centro de trabalho selecionado");
		// 		}
		// 	});

		// },
	
		// handleValueHelpFrota: function(oEvent) {
		// 	var sInputValue = oEvent.getSource().getValue();

		// 	this.inputId = oEvent.getSource().getId();
		// 	// create value help dialog
		// 	if (!this._valueHelpDialogFrota) {
		// 		this._valueHelpDialogFrota = sap.ui.xmlfragment(
		// 			"sap.pm.entrarordem.view.fragments.valuehelps.Frota",
		// 			this
		// 		);
		// 		this.getView().addDependent(this._valueHelpDialogFrota);
		// 	}

		// 	this._valueHelpDialogFrota.open();
		// },
		
		// // INI - Tratativas para DATA / HORA INICIO BASE DA ORDEM
		
		// changeDataDesejado: function() {
			
		// 	var dataDesejado = this.getOwnerComponent().getModel("Ordem").getProperty("/dataDesejado");
			
		// 	if (dataDesejado !== "" || dataDesejado !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataPlanejado", dataDesejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataInicioParadaEquipamento", dataDesejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataAvaria", dataDesejado);
		// 	}
			
		// },
		
		// changeHoraDesejado: function() {
			
		// 	var horaDesejado = this.getOwnerComponent().getModel("Ordem").getProperty("/horaDesejado");
			
		// 	if (horaDesejado !== "" || horaDesejado !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaPlanejado", horaDesejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaInicioParadaEquipamento", horaDesejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaAvaria", horaDesejado);
		// 	}
			
		// },
		
		// // FIM - Tratativas para DATA / HORA INICIO BASE DA ORDEM
		
		// // INI - Tratativas para DATA / HORA FIM BASE DA ORDEM
		
		// changeDataFimDesejado: function() {
			
		// 	var dataFimDesejado = this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimDesejado");
			
		// 	if (dataFimDesejado !== "" || dataFimDesejado !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataFimPlanejado", dataFimDesejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataFimTrabCol", dataFimDesejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataFimAvaria", dataFimDesejado);
		// 	}
			
		// },
		
		// changeHoraFimDesejado: function() {
			
		// 	var horaFimDesejado = this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimDesejado");
			
		// 	if (horaFimDesejado !== "" || horaFimDesejado !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaFimPlanejado", horaFimDesejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaFimTrabCol", horaFimDesejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaFimAvaria", horaFimDesejado);
		// 	}
			
		// }
		
		// // FIM - Tratativas para DATA / HORA FIM BASE DA ORDEM
		
	});

});