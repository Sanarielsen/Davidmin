<div id="referenceCurso" class="py-1"> </div>

<div id="container_inscricoes" class="container-fluid pt-5 px-0"> 

    <div class="container-fluid fundo_inscricao pt-5">        
                        
        <div class="row linha_inscricao align-items-center align-self-center">

            <div class="container">

                <div class="col-12">

                    <p class="h2 mt-5 mt-md-0 font-weight-bold text-center text-white"> INSCRIÇÕES </p>
                </div>

                <div class="col-12 mb-5 mb-md-0 pb-0 pt-md-5 pb-md-5">

                    <div class="row">

                        <div class="col-12 col-md-5 mt-5 my-md-0">
                            
                            <!-- CENTRALIZAÇÃO VERTICAL E HORIZONTAL COM UMA ROW -->
                            <div class="row h-100 justify-content-center align-items-center">   
                                <img src="assets/images/inscricoes/inscricoes_icone_01.png" alt="Icone representativo do curso" /> 
                            </div>
                        </div>

                        <div class="col-12 col-md-7 mt-5 my-md-0">
                            
                            <div class="row h-100 justify-content-center align-items-center"><div class="col-12">

                                <p class="h5 text-white my-3"> <img src="assets/images/cursos/cursos_icone_topicos.png" /> Ficou interessado nesse trabalho? </p>
                                
                                <p class="h5 text-white my-3"> <img src="assets/images/cursos/cursos_icone_topicos.png" /> Gostaria de receber materiais exclusivos sobre as novidades do mercado? </p>
                                
                                <p class="h5 text-white my-3"> <img src="assets/images/cursos/cursos_icone_topicos.png" /> Cadastre-se agora em nossa base para receber em primeira mão todo este conteúdo </p>

                                <p class="h5 text-white my-3"> <img src="assets/images/cursos/cursos_icone_topicos.png" /> Sempre seja notificado sobre quaisquer novidades </p>

                            </div></div>
                        </div>

                        <div class="col-12 text-center pt-5 pb-5">

                            <button class="btn btn-success btn-lg w-50" name="btnAbrirInscricao" id="btnAbrirInscricao"> CADASTRE-SE AGORA MESMO! </button>
                        </div>
                    </div>
                </div>                        
            </div>            
        </div>        
    </div>
</div>

<div class="modal fade" id="modalFormularioInscricao" tabindex="-1" role="dialog" aria-labelledby="lblModalEmpresaUsuarioDetalhe" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">	
	<div class="modal-header border border-light color-primary">			
		<h5 class="modal-title text-white" id="lblModalEmpresaUsuarioDetalhe"> Inscrição: </h5>		
		<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>	
	</div>
	
	<div class="modal-body">
		<div class="container-fluid pt-2">		
			<div class="form-group">				
				<label for="txtInscricaoNome" class="col-form-label"> Nome Completo: </label>
				<input type="text" class="form-control" id="txtInscricaoNome">
			</div>	
			<div class="form-group">				
				<label for="txtInscricaoCidade" class="col-form-label"> Cidade: </label>
				<input type="text" class="form-control" id="txtInscricaoCidade">	
			</div>	
            <div class="form-group">				
				<label for="txtInscricaoEmail" class="col-form-label"> Email: </label>
				<input type="text" class="form-control" id="txtInscricaoEmail">
			</div>  
			<div class="form-group">				
				<label for="txtInscricaoTelefone" class="col-form-label"> Telefone: </label>
				<input type="text" class="form-control" id="txtInscricaoTelefone">
			</div>		                  
            <div class="form-group">
                
                <label class="col-form-label font-weight-bold"> Escolha assuntos do seu interesse: </label>
                <div class="row">
                
                    <div class="col-6 text-center">
                    
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="cbxInscricaoInteresse01" value="option1">
                            <label class="form-check-label" for="cbxInscricaoInteresse01"> Inovação </label>
                        </div>
                    </div>
                    <div class="col-6 text-center">

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="cbxInscricaoInteresse02" value="option1">
                            <label class="form-check-label" for="cbxInscricaoInteresse02"> Criatividade </label>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="cbxInscricaoInteresse03" value="option1">
                            <label class="form-check-label" for="cbxInscricaoInteresse03"> Empreendedorismo </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 text-center">

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="cbxInscricaoInteresse04" value="option1">
                            <label class="form-check-label" for="cbxInscricaoInteresse04"> Liderança </label>
                        </div>                        
                    </div>
                    <div class="col-6 text-center">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="cbxInscricaoInteresse05" value="option1">
                            <label class="form-check-label" for="cbxInscricaoInteresse05"> Protagonismo </label>
                        </div>
                    </div>
                    
                </div>
            </div>
		</div>
	</div>		
	<div class="modal-footer border border-light color-primary">
        <div class="container">
            <div class="row">

                <div class="col-6">

                    <button type="button" class="btn btn-danger w-100" data-dismiss="modal">Cancelar</button>
                </div>
                <div class="col-6">

                    <button id="btnInscricaoCompletar" type="submit" class="btn btn-success w-100"> Inscrever-se </button>
                </div>
            </div>				
        </div>
	</div>
<!-- /.MODAL-CONTENT -->
</div>
<!-- /.MODAL-DIALOG -->
</div>
<!-- /.MODAL -->
</div>