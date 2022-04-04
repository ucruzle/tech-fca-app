sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"../utils",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function(Controller, Filter, utils, JSONModel, History, UIComponent) {
	"use strict";

	return Controller.extend("sap.ecom.plataforma.controller.ListaTiposDeCondicoes", {

		onInit: function () {
			this._activeScreen = "view";
		},
		
		onNavBack: function () {

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("cockpit", {}, true);
			}

		},

		onAtualizarConsulta: function() {
			// utils.warningDialog("Consulta atualizada com sucesso!!!", "Atualizar Consulta");

			var oView   = this.getView();
			var oModel  = null;
			var Fretes = [];
			var Frete  = {};
			
			oModel = oView.getModel();
			
			if ((oModel === undefined) || (oModel === null)) {
				oModel = new JSONModel();
			}

			Frete = {
				idPedido: "LEO_99000020",
				idOrdemVenda: "456",
				dataProcessamento: "01/09/2021",
				horaProcessamento: "14:41:25",
				usuario: "CRUZ.L",
				mensagem: "Venda E-commerce 456 foi gravado."
			}; 

			Fretes.push(Frete);
			
			Frete = {
				idPedido: "LEO_99000021",
				idOrdemVenda: "457",
				dataProcessamento: "01/09/2021",
				horaProcessamento: "14:43:37",
				usuario: "CRUZ.L",
				mensagem: "Venda E-commerce 456 foi gravado."
			};

			Fretes.push(Frete);

			Frete = {
				idPedido: "LEO_99000022",
				idOrdemVenda: "458",
				dataProcessamento: "01/09/2021",
				horaProcessamento: "15:04:25",
				usuario: "CRUZ.L",
				mensagem: "Venda E-commerce 456 foi gravado."
			};

			Fretes.push(Frete);

			Frete = {
				idPedido: "LEO_99000023",
				idOrdemVenda: "459",
				dataProcessamento: "02/09/2021",
				horaProcessamento: "16:17:31",
				usuario: "CRUZ.L",
				mensagem: "Venda E-commerce 456 foi gravado."
			};

			Fretes.push(Frete);

			var oData = {
				Fretes: Fretes,
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

		onbtnCriarFrete: function() {
			this._showFreteFragment();
		},

		onEditDetalheFrete: function(oEvent) {
			this._showFreteFragment();
		},

		onGravarFrete: function(oEvent) {
			this.onCloseFrete();
		},

		onCloseFrete: function() {
			this._activeScreen = "view";
			this._FreteFragment.close();
		},

		_showFreteFragment: function() {

			if (!this._FreteFragment) {
				this._FreteFragment = sap.ui.xmlfragment("FreteFragment",
					"sap.ecom.plataforma.view.ListaTiposDeCondicoes.fragments.GeraFrete",
					this
				);
				this.getView().addDependent(this._FreteFragment);
			}
			this._FreteFragment.open();
		},

	});
});