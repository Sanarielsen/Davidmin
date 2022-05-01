$(document).ready(function(){

	debugMenu && console.log("custom->resorce->menu.js -> is_ready('OK')");

	$("a.scrollLink").on('click', function(e) {
		
		e.preventDefault();

		var containerAtual = $(this).attr('href'),
			targetOffset = $(containerAtual).offset().top;			

		let difTelaPrincipal = telaAltura / 2;
		let difTelaContainer = (($(containerAtual).height()) / 2);
		let difPontas = difTelaPrincipal - difTelaContainer;

		if ( telaAltura > ($(containerAtual).height() + 100) ) {
			
			console.log("SLIDE DESKTOP");
			$('html, body').animate({

				scrollTop: targetOffset - (difPontas - 62)
			},1000);
		}
		else {
			
			console.log("SLIDE MOBILE");
			$('html, body').animate({

				scrollTop: targetOffset - 58
			},1000);	
		}

		//
		atualizarMenuModo();
	});	
});

//VARIÁVEIS GLOBAIS;
let debugMenu = true;
let menuAtivo = "#" + "menuOpcaoPalestras";
let menuRequisitado = "";

let telaLargura = window.screen.availWidth;
let telaAltura = window.screen.availHeight;

let posContainer;

// ========================================================================================================
// SESSÃO DE DECLAÇÕES DE MÉTODOS DE AÇÃO==================================================================
// ========================================================================================================
$(document).on('click', '.nav-control', function() {

	//DEBUG
	debugMenu && console.log("menu.js -> onClick(" + this.id + ")");
	//
	atualizarMenuPrincipal( this.id );
});

$( "a.scrollLink" ).click(function( event ) {

	event.preventDefault();
	$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
});

// ========================================================================================================
// SESSÃO DE DECLARAÇÕES DE FUNÇÕES =======================================================================
// ========================================================================================================

//FUNÇÃO PARA ATUALIZAR A OPÇÃO DO MENU MEDIANTE A ATIVAÇÃO AO CLIQUE;
function atualizarMenuPrincipal( $opcao ) {

	//DEBUG
	debugMenu && console.log("menu.js -> atualizarOpcaoMenu(" + $opcao + ")");

	menuRequisitado = "#" + $opcao;
	if ( $(menuRequisitado).hasClass( "active" ) !== true ) {

		$(menuAtivo).removeClass("active");
		$(menuRequisitado).addClass("active");
		menuAtivo = menuRequisitado;		
	}
}

//FUNÇÃO PARA ATUALIZAR O MENU AO SER CLIKADO NO MOBILE;
function atualizarMenuModo() {

	//DEBUG
	debugMenu && console.log("menu.js -> atualizarMenuModo()");

	$("#"+"btnNavbarControl").addClass("collapsed")
	$("#"+"navbarNav").removeClass("show");
}
