async function cadastrarComerciante() {
  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const name = document.querySelector("#name").value;
  const telefone = document.querySelector("telefone").value;
  const cpf = document.querySelector("#cpf").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const cep = document.querySelector("#cep").value;
  const bairro = document.querySelector("bairro").value;
  const endereco = document.querySelector("endereco").value;
  const img = document.querySelector("#img-input").value;

  console.log(result.data);
}
