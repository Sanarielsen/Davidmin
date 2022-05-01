$(document).ready(function(){

    debugServer && console.log("custom->resorce->"+nameDocumentServer+" -> is_ready('OK')");
    
    atribuirNamespaces(
        "http://localhost/ProjetoDavidmin/"
    );
});

//VARIÁVEIS GLOBAIS;
let debugServer = false;
let nameDocumentServer = "server.js";

//VARIÁVEIS DE CONFIGURAÇÃO DE SERVIDOR;
let enderecoServer;
let nomeServer;
let codigoServer;

function atribuirNamespaces( site ) {

    //DEBUG DA FUNÇÃO;
    debugServer && console.log("["+nameDocumentServer+"].atribuirNamespaces( "+site+" )");
    //
    enderecoServer = site;
    //
}