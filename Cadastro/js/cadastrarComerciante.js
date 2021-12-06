async function cadastrarComerciante() {
  const formData = new FormData();

  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const name = document.querySelector("#name").value;
  const telefone = document.querySelector("#telefone").value;
  const cpf = document.querySelector("#cpf").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const cep = document.querySelector("#cep").value;
  const bairro = document.querySelector("#bairro").value;
  const endereco = document.querySelector("#endereco").value;
  const img = document.querySelector("#img-input");
  const sobre_mim = document.querySelector("#FormControlTextarea").value;

  formData.append("name", name);
  formData.append("telefone", telefone);
  formData.append("cpf", cpf);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("cep", cep);
  formData.append("bairro", bairro);
  formData.append("endereco", endereco);
  formData.append("sobre_mim", sobre_mim);
  formData.append("file", img.files[0]);

  const result = await api
    .post("/merchants", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    })
    .then((response) => console.log(response));
}
