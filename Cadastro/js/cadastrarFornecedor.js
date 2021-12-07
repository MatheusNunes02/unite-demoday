async function cadastrarFornecedor() {
  const formData = new FormData();

  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const name = document.querySelector("#nome_empresa").value;
  const telefone = document.querySelector("#telefone").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const cep = document.querySelector("#cep").value;
  const cnpj = document.querySelector("#cnpj").value;
  const bairro = document.querySelector("#bairro").value;
  const numero_endereco = document.querySelector("#numero_endereco").value;
  const endereco = document.querySelector("#endereco").value;
  const img = document.querySelector("#img-input");
  const sobre_mim = document.querySelector("#FormControlTextarea").value;

  formData.append("nome_empresa", name);
  formData.append("email", email);
  formData.append("bairro", bairro);
  formData.append("cep", cep);
  formData.append("cnpj", cnpj);
  formData.append("numero_endereco", numero_endereco);
  formData.append("endereco", endereco);
  formData.append("descricao", sobre_mim);
  formData.append("password", password);
  formData.append("telefone", telefone);
  formData.append("file", img.files[0]);

  const result = await api
    .post("/suppliers", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    })
    .then((response) => console.log(response));
}
