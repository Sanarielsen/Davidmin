$(document).ready(function(){

	//DEBUG DO MÉTODO ATUAL
	debugSlider && console.log("custom->resource->"+ nomeScript +" -> is_ready('OK')");
	//INICIA O PAINEL QUE CONTERÁ AS PALESTRAS CADASTRADAS;
	iniciarControlPalestras();
	iniciarPainelPalestra();
	//INICIA O SLIDE SANARIELSEN COM A PRIMEIRA IMAGEM;
	iniciarSlider();
	//DETERMINA O TIMER E EXECUTA A ATUALIZAÇÃO DAS IMAGENS;
	timerSlider = setInterval(alterarSlideAuto, slideTempo);
});

//VARIÁVEIS GLOBAIS = NÃO ALTERE ESTAS;
let nomeScript = "slider.js";
let debugSlider = false;
let timerSlider = null;

let painelNome = "#painel-palestra-";
let painelAtual = 1;

let controlNome = "#slider-control-";
let controlAtual;
let controlIdentificador = 1;

let slideNome = "#palestra-" + painelAtual + "-slide-";
let slideOrigem = slideNome;
let slideTempo = 5000;
let slideAnterior = null;
let slideAtual = 1;
let slideMax = 3;

// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
        
$(document).on('click', '.slide-control', function() {

	//DEBUG DO MÉTODO ATUAL
	debugMenu && console.log("slider.js -> onClick(" + this.id + ")");
	//
	alterarControlPalestras( this.id );
});

// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------

function capturarPainelIdentificador( nomeControl ) {
	
	//DEBUG DO MÉTODO ATUAL
	debugSlider && console.log( nomeScript + "-> capturarPainelIdentificador(" + nomeControl + ")");
	//	
	return nomeControl.substring(15, 16);
}

function iniciarControlPalestras() {

	//DEBUG DO MÉTODO ATUAL
	debugSlider && console.log( nomeScript + "-> iniciarControlPalestras()");	
	//
	controlAtual = controlNome + controlIdentificador;
	//
	$(controlAtual).addClass("slide-control-ativo");	
}

function alterarControlPalestras( nomeControlNovo ) {

	//DEBUG DO MÉTODO ATUAL
	debugSlider && console.log( nomeScript + "-> alterarControlPalestras(" + nomeControlNovo + ")");
	//
	$(controlAtual).removeClass("slide-control-ativo");		
	//
	controlAtual = "#" + nomeControlNovo;
	//
	$(controlAtual).addClass("slide-control-ativo");
	//
	controlIdentificador = capturarPainelIdentificador( nomeControlNovo );
	//
	atualizarPainelPalestra(controlIdentificador);
	//
	
}

// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------

function iniciarPainelPalestra() {

	//DEBUG DO MÉTODO ATUAL
	debugSlider && console.log( nomeScript + "-> alterarControlPalestras()");
	//	
	$(painelNome + painelAtual).removeClass("slide-hidden");
}

function atualizarPainelPalestra( painelIdentificador ) {

	//DEBUG DO MÉTODO ATUAL
	debugSlider && console.log( nomeScript + "-> atualizarPainelPalestra(" + painelIdentificador + ")");	
	//
	$(painelNome + painelAtual).addClass("slide-hidden");
	//
	$(painelNome + painelIdentificador).removeClass("slide-hidden");
	//
	painelAtual = painelIdentificador;
	//
	resetarRepeticaoSlide();
}

// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------

//MÉTODO PARA INICIAR O SLIDER NA PRIMEIRA IMAGEM;
function iniciarSlider() {

	//DEBUG DO MÉTODO ATUAL
	debugSlider && console.log( nomeScript + "-> iniciarSlider()");
	//MOSTRA O PRIMEIRO SLIDE;
	$(slideNome + slideAtual).removeClass("slide-hidden");
}

//MÉTODO PARA ATUALIZAR O SLIDER;
function alterarSlideAuto() {

	//DEBUG DO MÉTODO ATUAL
	debugSlider && console.log( nomeScript + "-> alterarSlideAuto()");	

	//VERIFICA SE ESTAMOS NO ÚLTIMO SLIDE... 
	if ( slideAtual < slideMax  ) {

		slideAnterior = slideNome + slideAtual
		$(slideAnterior).addClass("slide-hidden");
		slideAtual++;
	}
	//CASO ESTEJA NO ÚLTIMO, ESCONDE ESTE E VOLTA A REFERENCIA AO PRIMEIRO;
	else {

		slideAnterior = slideNome + slideAtual
		$(slideAnterior).addClass("slide-hidden");		
		slideAtual = 1;		
	}
	slideNome = "#palestra-" + painelAtual + "-slide-";
	//MOSTRA O SLIDE DO MOMENTO;		
	$(slideNome + slideAtual).removeClass("slide-hidden");
}

function alterarSlideIndex( slideIndex ) {

	//DEBUG DO MÉTODO ATUAL
	debugSlider && console.log( nomeScript + "-> alterarSlideIndex(" + slideIndex + ")");
	//	
	return "#palestra-" + painelAtual + "-slide-";
}

function resetarRepeticaoSlide() {

	//DEBUG DO MÉTODO ATUAL
	debugSlider && console.log( nomeScript + "-> resetarRepeticaoSlide()");
	//
	clearInterval(timerSlider);
	//	
	$(slideNome + slideAtual).addClass("slide-hidden");	
    //
	slideNome = "#palestra-" + painelAtual + "-slide-";	
    //
	iniciarSlider();
	timerSlider = setInterval(alterarSlideAuto, slideTempo);
}

//CRIAR UMA ANIMAÇÃO DE ENTRADA E SAÍDA;

//CRIAR OS BOTÕES DE NAVEGAÇÃO ENTRE AS FOTOS;