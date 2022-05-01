<?php include_once("header.php") ?>

<?php include_once("menu.php") ?>

<div id="container_cabecalho" class="container-fluid px-0 pb-5">

    <!-- PAINEL PRINCIPAL DO CABEÇALHO CONTENDO A IMAGEM DE FUNDO DO SITE -->
    <div class="painel_cabecalho fundo_cabecalho">         
        <div class="sessao_cabecalho"> 
            <div class="row align-items-center linha_cabecalho mx-0"> 
                <div class="col-12 col-md-12 mt-5">

                    <div class="d-flex justify-content-center">

                        <div class="panelApresentacaoSite p-5">
                            <p class="h1 mb-0 palestra-font text-center text-white"> David Lima </p>
                            <p class="p palestra-font text-white text-justify txaDescricaoCabecalho"> Sou o David, sonhador e apaixonado pela natureza e tecnologia. Me orgulho muito de chegar ao Mestrado em 
                            Políticas Públicas, fiz especializações nas áreas de Gestão Estratégica de Negócios, Gestão de Projetos e Gestão Pública, 
                            e graduei em Administração de Empresas, e hoje possuo 15 anos de vida profissional, e desejo compartilhar os sonhos, 
                            desejos de mundo melhor, e experiências que possam auxiliar, inspirar outras pessoas ao crescimento pessoal e profissional. </p>
                        </div>
                    </div>
                
                </div>
            </div>                        
        </div>        
    </div>
</div>

<!-- JQUERY PERTENCENTE A PÁGINA PRINCIPAL E SUAS SESSÕES -->
<script src="assets/custom/main.js"> </script>

<!-- CONTEÚDO REFERENTE A SESSÃO DE PALESTRAS -->
<?php include_once("palestras.php") ?>

<!-- CONTEÚDO REFERENTE A SESSÃO DE LIVROS -->
<?php include_once("livros.php") ?>

<!-- CONTEÚDO REFERENTE A SESSÃO DE CURSOS -->
<?php include_once("cursos.php") ?>

<!-- CONTEÚDO REFERENTE A SESSÃO DE INSCRICOES -->
<?php include_once("inscricoes.php") ?>

<br><br>

<!-- CONTEÚDO REFERENTE A SESSÃO DE INSCRICOES -->
<?php include_once("contato.php") ?>

<!-- RODAPÉ DO SITE -->
<?php include_once("footer.php") ?>