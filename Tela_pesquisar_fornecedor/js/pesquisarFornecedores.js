async function pesquisarFornecedores(){
    const content = document.getElementById("containerCardFornecedorId")
    content.innerHTML = "";

    let search = document.getElementById("barraPesquisar").value.toLowerCase();

    search = search.split(" ");    

    const api = axios.create({
        baseURL: "http://localhost:3000",
      });
      
    const result = await api.get("/suppliers");
    let foundit = false;


    if(!result.data){
        content.innerHTML = `Erro no servidor :/`
    }else{
        search.forEach(searchItem =>{
            result.data.forEach(element => {

                if(element.nome_empresa.toLowerCase().includes(searchItem) ||
                element.descricao.toLowerCase().includes(searchItem))
                {
                        foundit = true;
                        content.innerHTML += `
                        <div class="cardExemplo"> 
                        <div class="divFotoperfil">
                        <img src="http://localhost:3000/uploads/${element.foto}">
                        </div>
                        <div class="containerNomeCateoria">
                        <h3>${element.nome_empresa}</h3>
                        <div>
                            <p>
                            ${element.descricao}
                            </p>
                        </div>
                        </div>
                        <div class="containerBotaoStar">
                        <a href="../Dashboard_comerciante/chats/chat-Comerciante.html"><button>Entre em contato</button></a>
                        <div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        </div>
                        </div>
                    </div>
                
                        ` 
                }
            })   
        })
    }
    
    if(foundit === false){
        content.innerHTML = "Nada foi encontrado :/";
    }


}