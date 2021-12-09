

var analytics = `<div id='conteudoAnalytics'>
                    <div class='spr'>
                        <h2>Analytics</h2>
                    </div>
                    <div class='container'>
                        <div id='cards' class='row d-flex'>
                            <div id='dados' class='col'>
                                <h5 id='num'>Visitas no perfil</h5>
                                <h1>99</h1>
                            </div>
                            <div id='dados' class='col'>
                                <h5 id='num'>Chats</h5>
                                <h1>72</h1>
                            </div>
                            <div id='dados' class='col'>
                                <h5 id='num'>Avaliação</h5>
                                <h1>4.5</h1>
                            </div>
                        </div>
                    </div>
                    <div id='gr_area' class='container'>
                        <div class='row'>
                            <div id='curve_chart' style='width: 900px; height: 500px' class='col'>
                            </div>
                        </div>
                    </div>
                    <div id='p-blue' class='container'>

                        <div class='row'>
                            <div id='blue_a' class='col'>
                            </div>
                        </div>
                    </div>
                </div>`;

var editarPerfil = "<div class='spr'><h2>Editar perfil</h2></div><div class='picture-container'><div class='mb-5 picture' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Adicione uma foto'><img src='img/fotoPerfil.png' class='picture-src' id='preview' title=''><input id='img-input' type='file' name='imagem'></div></div><div class='tab form rounded-3 aln'><div class='mb-3'><label for='nomecompleto' class='texto'>Nome completo</label>  <input type='text' id='nomecompleto' class='form-control' aria-label='Nome completo'></div><div class='mb-3'>  <label for='email' class='texto'>E-mail</label><input type='email' id='email' class='form-control' id='email'></div><div class='mb-3'><label for='numerotelefone' class='texto'>Número telefone</label><input type='tel' id='numerotelefone' class='form-control' id='numero'></div><div class='mb-3'><label for='cpf' class='texto'>CPF</label>  <input type='number' id='cpf' class='form-control' id='cpf'></div><div class='mb-3'><label for='cep' class='texto'>CEP</label><input type='number' id='cep' class='form-control'></div><div class='mb-3'><label for='endereco' class='texto'>Endereço</label><input type='text' id='endereco' class='form-control'></div><div class='mb-4'><label for='categoria' class='texto'>Selecione categoria</label><select class='form-select' id='categoria'><option selected>Categoria</option><option value='1'>One</option><option value='2'>Two</option><option value='3'>Three</option></select></div><div class='mb-5'><label for='FormControlTextarea' class='texto'>Sobre</label><textarea class='form-control' id='FormControlTextarea' rows='3'></textarea></div><div class='mb-5 text-end mt-5 separar'><button class='btn tmn-2' type='submit'>Salvar</button></div></div>";

var chats = `<div class='spr'>
                <h2>Chats</h2>
                </div>
                <div class='container-CardChat'>
                <div class='cardChat'><img src='img/icon1.png'>
                    <p>Obrigado pela confiança e por usar nossos serviços, seu pedido já está a caminho!</p>
                </div>
                <div class='cardChat'><img src='img/icon2.png'>
                    <p>Agradecemos pela utilização de nossos serviço, venha verificar no nosso perfil os lançamentos que acabaram de chegar.</p>
                </div>
                <div class='cardChat'><img src='img/icon3.png'>
                    <p>Seu primeiro pedido já está a caminho! Gostaria de verificar as outras novidades disponíveis? Para isso basta acessar o nosso perfil.</p>
                </div>
                <div class='cardChat'><img src='img/icon4.png'>
                    <p>Boa tarde, vimos que você já é um de nossos clientes, venha acompanhar as novidades que estamos lançando em nosso perfil.</p>
                </div>
                </div>`;

var alterarSenha = `<div class='spr'>
<h2>Alterar senha</h2>  
</div>
<div>
<div class='mb-3'><label for='senhaAtual' class='texto'>Senha Atual</label><input type='password' name='senhaAtual'
        class='form-control' id='senhaAtual'></div>
<div class='mb-3'><label for='novaSenha' class='texto'>Nova senha</label><input type='password' name='novaSenha'
        class='form-control' id='novaSenha'></div>
<div class='mb-3'><label for='confirmarSenha' class='texto'>Confirme a nova senha</label><input type='password'
        name='confirmarSenha' class='form-control' id='confirmarSenha'></div>
<div class='text-end mt-5 separarButton'><button class='btn tmn-2' type='submit'>Salvar</button></div>
</div>`;

var elemento = document.getElementById('conteudo');

function carregarConteudo(conteudo, loadGraph=false) {
    if(!loadGraph){
        elemento.innerHTML = conteudo;
    }else{
        google.charts.load('current', {
            'packages': ['corechart']
            });
             google.charts.setOnLoadCallback(drawChart);
            
             
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Mês', 'Contatos'],
                ['Jan', 5],
                ['Fev', 3],
                ['Mar', 7],
                ['Abr', 5]
            ]);

            var options = {
                title: '',
                curveType: 'function',
                legend: {
                    position: 'bottom'
                }
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
        }
        elemento.innerHTML = conteudo;
    }
}


carregarConteudo(editarPerfil);
carregarConteudo(chats);
carregarConteudo(alterarSenha);
carregarConteudo(analytics);