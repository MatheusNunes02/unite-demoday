(async function validate() {
    const api = axios.create({
      baseURL: "http://localhost:3000",
    });
    const content = document.getElementById("containerCardFornecedorId")
    const result = await api.get("/suppliers");

    if(!result.data){
        content.innerHTML = `Erro no servidor :/`
    }else{
        result.data.forEach(element => {
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
              <a href="../Dashboard_comerciante/dashboardComerciante.html?loadChat=true"><button>Entre em contato</button></a>
              <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
    
            `;
        });
    }

     

    content.innerHTML
    console.log(result);
})();