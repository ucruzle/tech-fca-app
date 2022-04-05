sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	'sap/m/Popover',
	'sap/m/Button',
	"../utils"
], function (Controller, JSONModel, Popover, Button, utils) {
	"use strict";

	return Controller.extend("sap.ecom.plataforma.controller.Home", {

		onInit: function () {
			// var that = this;
			// var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");
			// this._getCentroEDivisao(that, oModel);
			this._activeScreen = "view";

			var oView = this.getView();
			var oModel = null;

			oModel = oView.getModel();

			if ((oModel === undefined) || (oModel === null)) {
				oModel = new JSONModel();
			}

			var oData = {
				Pedidos: [],
				Status: [],
				navigation: [
					{
						title: 'Início',
						icon: 'sap-icon://home',
						key: 'cockpit',
						message: 'Menu incial do aplicativo'
					},
					{
						title: 'Vendas',
						icon: 'sap-icon://sales-order',
						expanded: false,
						key: null,
						message: 'Consulta e cria, pedidos de vendas',
						items: [
							{
								title: 'Consultas',
								key: 'listavendas',
								message: 'Consulta pedidos de vendas gerados',
							}, {
								title: 'Novo',
								key: 'gerapedidodevenda',
								message: 'Cria novos pedidos de vendas',
							}, {
								title: 'Status',
								key: 'listastatuspedidosdevendas',
								message: 'Consulta status dos pedidos de vendas',
							}
						]
					},
					{
						title: 'Parceiros',
						icon: 'sap-icon://account',
						key: 'listaparceiros',
						message: 'Consulta e cria, parceiros (Recebedor / Emissor)'
					},
					{
						title: 'Produtos',
						icon: 'sap-icon://product',
						key: 'listaprodutos',
						message: 'Consulta e cria, produtos para os pedidos de vendas'
					},
					{
						title: 'Parâmetros',
						icon: 'sap-icon://action-settings',
						expanded: false,
						key: null,
						message: 'Consulta e cria, tipos e condições para os pedidos de vendas',
						items: [
							{
								title: 'Centro',
								key: 'listacentros',
								message: 'Consulta e cria, centros comerciais para os pedidos de vendas'
							}, {
								title: 'Tipo de Ordem',
								key: 'listatiposdeordensvendas',
								message: 'Consulta e cria, tipos de ordens comerciais para os pedidos de vendas'
							}, {
								title: 'Organização de Vendas',
								key: 'listaorganizacoesdevendas',
								message: 'Consulta e cria, organizações comerciais para os pedidos de vendas'
							}, {
								title: 'Canal de Distribuição',
								key: 'listacanaisdedistribuicao',
								message: 'Consulta e cria, canais de distribuições comerciais para os pedidos de vendas'
							}, {
								title: 'Setor de Atividades',
								key: 'listasetoresdeatividades',
								message: 'Consulta e cria, setores de atividades comerciais para os pedidos de vendas'
							}, {
								title: 'Pagamento',
								key: 'listacondicoesdepagamentos',
								message: 'Consulta e cria, condições de pagamentos comerciais para os pedidos de vendas'
							}, {
								title: 'Frete',
								key: 'listatiposdecondicoes',
								message: 'Consulta e cria, tipos de condições de fretes comerciais para os pedidos de vendas'
							}, {
								title: 'Preço',
								key: 'listacategoriadoitem',
								message: 'Consulta e cria, tipos de categorias de preços comerciais para os itnes dos pedidos de vendas'
							}
						]
					},
					{
						title: 'Controle de Acesso',
						icon: 'sap-icon://user-settings',
						expanded: false,
						key: null,
						message: 'Consulta e cria, usuário, perfil, permissões e concessões de funcionalidades',
						items: [
							{
								title: 'Perfis',
								key: 'listaperfisdeacesso',
								message: 'Consulta e cria, perfins de acesso ao app',
							}, {
								title: 'Acessos',
								key: 'concessoesdeacessos',
								message: 'Cria novas concessões de acesso, por usuários x perfis',
							}, {
								title: 'Usuários',
								key: 'listausuarios',
								message: 'Consulta e cria, usuários do app gerados',
							}
						]
					}
				],
				fixedNavigation: [
					{
						title: 'Sobre',
						icon: 'sap-icon://information',
						key: 'sobre',
						message: 'Informações em detalhes do aplicativo'
					}, {
						title: 'Login',
						icon: 'sap-icon://visits',
						key: 'login',
						message: 'Entrar com usuário no aplicativo'
					}, {
						title: 'Logout',
						icon: 'sap-icon://log',
						key: 'logout',
						message: 'Sair com usuário no aplicativo'
					}
				]
			};

			oModel.setData(oData);
			oView.setModel(oModel);

		},

		onItemSelect: function (oEvent) {

			var tiposMenuFixo = {
				"SOBRE": "sobre",
				"LOGIN": "login",
				"LOGOUT": "logout"
			};

			var oRouter = {};
			var item = oEvent.getParameter('item');
			var path = item.getKey();

			if (path !== "") {
				if ((path === "sobre") || (path === "login") || (path === "logout")) {

					switch (path) {
						case tiposMenuFixo.SOBRE:
							utils.infoDialog("\rZE-Com: \n\nGestão de Comércio Eletrônico", "Informações sobre o sistema");
							break;
						case tiposMenuFixo.LOGIN:
							this._showLoginFragment();
							break;
						case tiposMenuFixo.LOGOUT:
							utils.confirmDialog("Sair com o usuário do aplicativo?", function () {
								null;
							});
							break;
						default:
							break;
					}

				} else {
					oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo(path);
				}
			}
			// this._SideNavButtonPress(false);
		},

		onSideNavButtonPress: function () {
			// this._SideNavButtonPress(true);
			this._SideNavButtonPress();
		},

		_SideNavButtonPress: function () {
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},

		// _SideNavButtonPress: function (menu) {
		// 	var viewId = this.getView().getId();
		// 	var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");

		// 	if (menu) {
		// 		toolPage.setSideExpanded(!toolPage.getSideExpanded());
		// 	} else {
		// 		toolPage.setSideExpanded(false);
		// 	}
		// },

		handleUserNamePress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content: [
					new Button({
						text: 'Detalhes',
						type: sap.m.ButtonType.Transparent,
						icon: 'sap-icon://display',
						tooltip: 'Detalhes do Usuário',
						press: () => {
							utils.warningDialog("Exibe Dados dos Usuário", "Dados do Usuário");
						}
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		},

		_showLoginFragment: function () {

			if (!this._LoginFragment) {
				this._LoginFragment = sap.ui.xmlfragment("LoginFragment",
					"sap.ecom.plataforma.view.Home.fragments.Login",
					this
				);
				this.getView().addDependent(this._LoginFragment);
			}
			this._LoginFragment.open();
		},

		onLoginNoApp: function (oEvent) {
			this.onCloseLoginApp();
		},

		onCloseLoginApp: function () {
			this._activeScreen = "view";
			this._LoginFragment.close();
		},

		// onPrint: function() {
		// 	alert("Funcionalidade ainda não implementada");
		// },

		// onSave: function() {

		// 	var ordem = this.getView().getModel("Ordem").getProperty("/");
		// 	if (
		// 		!ordem.frotaCodigo ||
		// 		!ordem.tipoOrdem ||
		// 		!ordem.prioridade ||
		// 		!ordem.centroTrabalho ||
		// 		!ordem.dataDesejado ||
		// 		!ordem.horaDesejado ||
		// 		!ordem.dataFimDesejado ||
		// 		!ordem.horaFimDesejado ||
		// 		!ordem.notificador || 
		// 		!ordem.tipoAtividadeManutencao// ||
		// 	) {
		// 		alert("Por favor, preencha todos os campos marcados com *");
		// 		return;
		// 	}

		// 	if (
		// 		ordem.validFrota !== "None" ||
		// 		ordem.validFornecedor !== "None" ||
		// 		ordem.validFornecedorComponentes !== "None" ||
		// 		ordem.validRevisao !== "None" ||
		// 		ordem.validRevisaoComponentes !== "None"

		// 	) {
		// 		alert("Há valores inválidos na ordem.");
		// 		return;
		// 	}

		// 	if (ordem.operacoes.length === 0) {
		// 		alert("Insira pelo menos uma operação para salvar a ordem");
		// 		return;
		// 	}

		// 	if ((ordem.denominacao === "") || (ordem.denominacao === undefined)) {
		// 		alert("Entrar com texto livre para denominição da ordem");
		// 		return;
		// 	}

		// 	this.getView().setBusyIndicatorDelay(0);
		// 	this.getView().setBusy(true);

		// 	this.gerarOrdemDeConsumo(this);
		// },

		// _getCentroEDivisao: function(that, oModel) {

		// 	var sPath = "/Z_USUARIO_RAPSet('')";
		// 	oModel.read(sPath, {
		// 		urlParameters: {

		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log("CentroEDivisao");
		// 			console.log(oData);
		// 			if (!oData.Iwk || !oData.Gsb) {
		// 				alert("Centro de planejamento e/ou divisão não parametrizados para o usuário.");
		// 				return;
		// 			}
		// 			that._centroPlanejamento = oData.Iwk; //"3160"
		// 			that._divisao = oData.Gsb;
		// 			that._sysStatus = oData.SysStatus;
		// 			that._pernr = oData.Pernr;
		// 			that._lgort = oData.Lgort;
		// 			that._resetObjectModel();
		// 			that.getView().setBusy(false);

		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			alert("Não foi possível encontrar centro de planejamento e divisão do usuário.");
		// 			that._centroPlanejamento = "";
		// 			that._divisao = "";
		// 			that._sysStatus = "ERRO - Status não Atribuído";
		// 			that._pernr = "";
		// 			that._lgort = "";
		// 		}
		// 	});

		// },

		// _resetObjectModel: function() {
		// 	//2019-07-15T14:08:32
		// 	var formattedDate = utils.formatTimestamp(new Date());

		// 	this._orderidTimestamp = formattedDate;
		// 	var oData = {
		// 		centroPlanejamento: this._centroPlanejamento,
		// 		divisao: this._divisao,
		// 		OrderidTimestamp: this._orderidTimestamp,
		// 		mode: "",
		// 		controleCodigo: "",
		// 		controleNome: "",
		// 		frotaNroTecnico: "",
		// 		frotaCodigo: "",
		// 		frotaNome: "",
		// 		tipoNota: "",
		// 		sysStatus: this._sysStatus,
		// 		lgort: this._lgort,
		// 		operacoes: [],
		// 		materiais: [],
		// 		controleOperacao: 1,
		// 		validControle: "None",
		// 		validFrota: "None",
		// 		validFornecedor: "None",
		// 		validFornecedorComponentes: "None",
		// 		validRevisao: "None",
		// 		validRevisaoComponentes: "None",
		// 		ordensAnteriores: [],
		// 		notificacoesLaboratorio: [],
		// 		centroDeTrabalho: {}
		// 	};
		// 	console.log(oData);
		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/", oData);
		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/orderid", "%00000000001");
		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/nota", "%00000000001");
		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/parada", true);
		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/dataDesejado", new Date());
		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/horaDesejado", new Date());

		// 	var dataDesejado = this.getOwnerComponent().getModel("Ordem").getProperty("/dataDesejado");
		// 	var horaDesejado = this.getOwnerComponent().getModel("Ordem").getProperty("/horaDesejado");

		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/dataPlanejado", dataDesejado);
		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/horaPlanejado", horaDesejado);

		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/dataInicioParadaEquipamento", dataDesejado);
		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/horaInicioParadaEquipamento", horaDesejado);

		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/dataAvaria", dataDesejado);
		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/horaAvaria", horaDesejado);

		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", "0");
		// 	this.getOwnerComponent().getModel("Ordem").setProperty("/unidadeParada", "H");
		// },

		// _buscaCodigoControle: function() {
		// 	var that = this;
		// 	var oModel = this.getOwnerComponent().getModel("ListasAuxiliares");

		// 	var sPath = "/Z_LISTA_FUNCIONARIOSSet('')";
		// 	oModel.read(sPath, {
		// 		urlParameters: {

		// 		},
		// 		success: function(oData, oResponse) {
		// 			console.log(oData);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/validControle", "None");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/controleCodigo", oData.Pernr);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/controleNome", oData.Cname);
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/validControle", "None");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/controleCodigo", "");
		// 			that.getOwnerComponent().getModel("Ordem").setProperty("/controleNome", "");
		// 		}

		// 	});

		// },

		// // INI - Tratativas para DATA / HORA PLANEJADO DA NOTA

		// changeDataPlanejado: function() {

		// 	var dataPlanejado = this.getOwnerComponent().getModel("Ordem").getProperty("/dataPlanejado");

		// 	if (dataPlanejado !== "" || dataPlanejado !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataDesejado", dataPlanejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataInicioParadaEquipamento", dataPlanejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataAvaria", dataPlanejado);
		// 	}

		// },

		// changeHoraPlanejado: function() {

		// 	var horaPlanejado = this.getOwnerComponent().getModel("Ordem").getProperty("/horaPlanejado");

		// 	if (horaPlanejado !== "" || horaPlanejado !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaDesejado", horaPlanejado); 
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaInicioParadaEquipamento", horaPlanejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaAvaria", horaPlanejado);
		// 	}

		// },

		// // FIM - Tratativas para DATA / HORA PLANEJADO DA NOTA

		// // INI - Tratativas para DATA / HORA CONCLUSÃO DESEJADA DA NOTA

		// changeDataFimPlanejado: function() {

		// 	var dataFimPlanejado = this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimPlanejado");

		// 	if (dataFimPlanejado !== "" || dataFimPlanejado !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataFimDesejado", dataFimPlanejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataFimTrabCol", dataFimPlanejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/dataFimAvaria", dataFimPlanejado);
		// 	}

		// },

		// changeHoraFimPlanejado: function() {

		// 	var horaFimPlanejado = this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimPlanejado");

		// 	if (horaFimPlanejado !== "" || horaFimPlanejado !== undefined) {
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaFimDesejado", horaFimPlanejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaFimTrabCol", horaFimPlanejado);
		// 			this.getOwnerComponent().getModel("Ordem").setProperty("/horaFimAvaria", horaFimPlanejado);
		// 	}

		// },

		// // FIM - Tratativas para DATA / HORA CONCLUSÃO DESEJADA DA NOTA

		// // INI - Tratativas para DATA / HORA INICIO AVARIA

		// changeDataAvariaCalcParada: function() {

		// 	var duracaoParadaAvaria = utils.calculaParadaApontamento(
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimAvaria")
		// 	);

		// 	if (duracaoParadaAvaria !== "" || duracaoParadaAvaria !== undefined) {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", duracaoParadaAvaria);					
		// 	} else {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", "0");
		// 	}

		// },

		// changeHoraAvariaCalcParada: function() {

		// 	var duracaoParadaAvaria = utils.calculaParadaApontamento(
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimAvaria")
		// 	);

		// 	if (duracaoParadaAvaria !== "" || duracaoParadaAvaria !== undefined) {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", duracaoParadaAvaria);					
		// 	} else {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", "0");
		// 	}

		// },

		// // FIM - Tratativas para DATA / HORA INICIO AVARIA

		// // INI - Tratativas para DATA / HORA FIM AVARIA

		// changeDataFimAvariaCalcParada: function() {

		// 	var duracaoParadaAvaria = utils.calculaParadaApontamento(
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimAvaria")
		// 	);

		// 	if (duracaoParadaAvaria !== "" || duracaoParadaAvaria !== undefined) {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", duracaoParadaAvaria);					
		// 	} else {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", "0");
		// 	}

		// },

		// changeHoraFimAvariaCalcParada: function() {

		// 	var duracaoParadaAvaria = utils.calculaParadaApontamento(
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/dataFimAvaria"),
		// 		this.getOwnerComponent().getModel("Ordem").getProperty("/horaFimAvaria")
		// 	);

		// 	if (duracaoParadaAvaria !== "" || duracaoParadaAvaria !== undefined) {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", duracaoParadaAvaria);					
		// 	} else {
		// 		this.getOwnerComponent().getModel("Ordem").setProperty("/duracaoParada", "0");
		// 	}

		// },

		// // FIM - Tratativas para DATA / HORA FIM AVARIA

		// gerarOrdemDeConsumo: function(that) {

		// 	that.getView().setBusyIndicatorDelay(0);
		// 	that.getView().setBusy(true);

		// 	var sPath = "/CabecalhoSet";
		// 	var createData = {};
		// 	var oModel = that.getOwnerComponent().getModel("OrdemConsumoService");
		// 	oModel.setUseBatch(false);

		// 	var ordem = that.getOwnerComponent().getModel("Ordem").getProperty("/");
		// 	var operacoes = this.getOwnerComponent().getModel("Ordem").getProperty("/operacoes");
		// 	var materiais = this.getOwnerComponent().getModel("Ordem").getProperty("/materiais");

		// 	// ********** ATENÇÃO **********
		// 	//  O NOME DOS ARRAYS QUE SÃO AS ASSOCIOAÇÕES DOS ENTITYSETs DEVEM SER
		// 	//  OS MESMOS NOMES OBEDECENDO A DESCRIÇÃO DE LETRAS MAÚSCULAS OU MINÚSCULAS
		// 	//  DAS PROPRIEDADES DE NAVEGAÇÃO CRIADAS NO DATA MODEL "BINDING" NO SAO GATEWAY
		// 	//  PARA QUE O POST SEJA REALIZADO O SERVIÇO DO SAP GATEWAY, BUSCA A TABELA INTERNA
		// 	//  POR ESTE NOME DE PROPRIEDADE

		// 	var FromCabecalhoToCabecalho = [];
		// 	var FromCabecalhoToApontamento = [];
		// 	var FromCabecalhoToComponente = [];
		// 	var FromCabecalhoToNota = [];
		// 	var FromCabecalhoToRetorno = [];

		// 	// ********** ATENÇÃO **********

		// 	var cabecalho = {
		// 		"OrderId": ordem.orderid, 
		// 		"OrderType": ordem.tipoOrdem,
		// 		"Equipment" : ordem.frotaCodigo,
		// 		"ShortText": ordem.denominacao,
		// 		"MnWkCtr": ordem.centroTrabalho,
		// 		"Pmacttype": ordem.tipoAtividadeManutencao,
		// 		"Plangroup": "",
		// 		"Priority": ordem.prioridade,
		// 		"NotifType": ordem.tipoNota,
		// 		"UserStText": "ENCE", // Encerrado
		// 		"StartDate": ordem.dataDesejado ? utils.formatTimestamp(ordem.dataDesejado) : null,
		// 		"Basicstart": ordem.horaDesejado ? utils.formatTime(ordem.horaDesejado) : null,
		// 		"FinishDate": ordem.dataFimDesejado ? utils.formatTimestamp(ordem.dataFimDesejado) : null,
		// 		"BasicFin": ordem.horaFimDesejado ? utils.formatTime(ordem.horaFimDesejado) : null
		// 	};
		// 	FromCabecalhoToCabecalho.push(cabecalho);

		// 	for (var i = 0; i < operacoes.length; i++) {
		// 		var apontamento = {
		// 			OrderId: ordem.orderid, 
		// 			Activity: operacoes[i].operacao,
		// 			ControlKey: operacoes[i].chaveControle,
		// 			StandardTextKey: operacoes[i].chaveModelo,
		// 			Description: operacoes[i].textoOperacao,
		// 			Pernr: operacoes[i].controleCodigo,
		// 			Aueru: operacoes[i].confFinal ? "X" : " ",
		// 			Ausor: operacoes[i].darBaixaRes ? "X" : " ", 
		// 			Isdd: operacoes[i].DataIniTrabCol ? utils.formatTimestamp(operacoes[i].DataIniTrabCol) : null,
		// 			Isdz: operacoes[i].horaIniTrabCol ? utils.formatTime(operacoes[i].horaIniTrabCol) : null,
		// 			Iedd: operacoes[i].dataFimTrabCol ? utils.formatTimestamp(operacoes[i].dataFimTrabCol) : null,
		// 			Iedz: operacoes[i].horaFimTrabCol ? utils.formatTime(operacoes[i].horaFimTrabCol) : null,
		// 			Otgrp: operacoes[i].parteObjetoGrupo,
		// 			Oteil: operacoes[i].parteObjetoCodigo,
		// 			Otkurztext: operacoes[i].parteObjetoDescricao,
		// 			Fegrp: operacoes[i].defeitoGrupo,
		// 			Fecod: operacoes[i].defeitoCodigo,
		// 			Fekurztext: operacoes[i].defeitoDescricao,
		// 			Urgrp: operacoes[i].causaGrupo,
		// 			Urcod: operacoes[i].causaCodigo,
		// 			Urkurztext: operacoes[i].causaDescricao,
		// 			Mngrp: operacoes[i].acaoGrupo,
		// 			Mncod: operacoes[i].acaoCodigo,
		// 			Mnkurztext: operacoes[i].acaoDescricao
		// 		};
		// 		FromCabecalhoToApontamento.push(apontamento);
		// 	}

		// 	for (var i = 0; i < materiais.length; i++) {
		// 		var material = {
		// 			"OrderId": ordem.orderid,
		// 			"Activity": materiais[i].operacao,
		// 			"Material": materiais[i].codigoMaterial,
		// 			"RequerementQuantity": materiais[i].quantidade.toString(),
		// 			"RequerementQuantityUnit": materiais[i].unidadeMedida,
		// 			"GrRcpt": materiais[i].recebedor,
		// 			"StgeLoc": materiais[i].codigoDeposito
		// 		};
		// 		FromCabecalhoToComponente.push(material);	
		// 	}

		// 	var nota = {
		// 		"NotifNo": ordem.nota,
		// 		"OrderId": ordem.orderid,
		// 		"Strmn": ordem.dataPlanejado ? utils.formatTimestamp(ordem.dataPlanejado) : null,
		// 		"Strur": ordem.horaPlanejado ? utils.formatTime(ordem.horaPlanejado) : null,
		// 		"Ltrmn": ordem.dataFimPlanejado ? utils.formatTimestamp(ordem.dataFimPlanejado) : null,
		// 		"Ltrur": ordem.horaFimPlanejado ? utils.formatTime(ordem.horaFimPlanejado) : null,
		// 		"Qmnam": ordem.notificador,
		// 		"Ausvn": ordem.dataAvaria ? utils.formatTimestamp(ordem.dataAvaria) : null,
		// 		"Auztv": ordem.horaAvaria ? utils.formatTime(ordem.horaAvaria) : null,
		// 		"Ausbs": ordem.dataFimAvaria ? utils.formatTimestamp(ordem.dataFimAvaria) : null,
		// 		"Auztb": ordem.horaFimAvaria ? utils.formatTime(ordem.horaFimAvaria) : null,
		// 		"Msaus": ordem.parada ? "X" : " ",
		// 		"Auszt": ordem.duracaoParada,
		// 		"Maueh": ordem.unidadeParada
		// 	};
		// 	FromCabecalhoToNota.push(nota);

		// 	createData.FromCabecalhoToCabecalho   = FromCabecalhoToCabecalho;
		// 	createData.FromCabecalhoToApontamento = FromCabecalhoToApontamento;
		// 	createData.FromCabecalhoToComponente  = FromCabecalhoToComponente;
		// 	createData.FromCabecalhoToNota        = FromCabecalhoToNota;
		// 	createData.FromCabecalhoToRetorno     = FromCabecalhoToRetorno;

		// 	// var oDeepEntity = JSON.stringify(createData);

		// 	oModel.create(sPath, createData, {
		// 		success: function(oData, oResponse) {
		// 			that.getView().setBusy(false);
		// 			console.log("OK");
		// 			console.log(oResponse);

		// 			var OrderId     = "";
		// 			var notifNo     = "";
		// 			var showMessage = "";
		// 			var error       = "";
		// 			var message     = "";

		// 			if (oData.FromCabecalhoToRetorno.results !== undefined) {
		// 				OrderId = oData.FromCabecalhoToRetorno.results[0].OrderId ? oData.FromCabecalhoToRetorno.results[0].OrderId : "%00000000001";
		// 				notifNo = oData.FromCabecalhoToRetorno.results[0].NotifNo ? oData.FromCabecalhoToRetorno.results[0].NotifNo : "%00000000001";
		// 				error   = oData.FromCabecalhoToRetorno.results[0].Error ? oData.FromCabecalhoToRetorno.results[0].Error : "";
		// 				message = oData.FromCabecalhoToRetorno.results[0].Message ? oData.FromCabecalhoToRetorno.results[0].Message : "";
		// 			} else {
		// 				OrderId = "%00000000001";
		// 				notifNo = "%00000000001";
		// 			}

		// 			if (notifNo !== "%00000000001") {
		// 				if (error !== "") {
		// 					showMessage = "Ordem PM " + OrderId + " e Nota PM " + notifNo + " processados com erro: " + message;
		// 				} else {
		// 					showMessage = "Ordem PM " + OrderId + " e Nota PM " + notifNo + " processados. Maiores detalhes acesse a transação ZPMOSLOG do SAP GUI";
		// 				}
		// 			} else {
		// 				if (error !== "") {
		// 					showMessage = "Ordem PM " + OrderId + " processada com erro: " + message;
		// 				} else {
		// 					showMessage = "Ordem PM " + OrderId + " processada. Maiores detalhes acesse a transação ZPMOSLOG do SAP GUI";
		// 				}
		// 			}

		// 			utils.executedProcessDialog(showMessage, function() { 
		// 				that._resetObjectModel();
		// 			});
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 			that.getView().setBusy(false);
		// 			alert("Não foi possível salvar a ordem");
		// 		}
		// 	});

		// }

	});

});