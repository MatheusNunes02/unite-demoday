var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Voltar";
  } else {
    document.getElementById("nextBtn").innerHTML = "Avançar";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";

  currentTab = currentTab + n;

  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    } else {
      y[i].classList.remove("invalid");
    }
  }

  if (currentTab == 0) {
    let name = document.querySelector("#name").value;
    let telefone = document.querySelector("#telefone").value;
    let cpf = document.querySelector("#cpf").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if (!name) {
      document
        .querySelector("#name")
        .setAttribute("placeholder", "Insira um nome válido");

      document.querySelector("#name").classList.add("invalid");
      valid = false;
    }

    if (telefone.length != 11) {
      document
        .querySelector("#telefone")
        .setAttribute("placeholder", "Telefone inválido, Ex:11999990000");
      document.querySelector("#telefone").classList.add("invalid");
      document.querySelector("#telefone").value = "";
      valid = false;
    }

    if (cpf.length != 11) {
      document
        .querySelector("#cpf")
        .setAttribute("placeholder", "Cpf inválido, Ex:99933355500");
      document.querySelector("#cpf").classList.add("invalid");
      document.querySelector("#cpf").value = "";
      valid = false;
    }

    if (!email || email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
      document
        .querySelector("#email")
        .setAttribute("placeholder", "Email inválido");
      document.querySelector("#email").classList.add("invalid");
      document.querySelector("#email").value = "";
      valid = false;
    }

    if (!password) {
      document
        .querySelector("#password")
        .setAttribute("placeholder", "Senha vazia");
      document.querySelector("#password").classList.add("invalid");
      valid = false;
    }
  } else if (currentTab == 1) {
    let cep = document.querySelector("#cep").value;
    let bairro = document.querySelector("#bairro").value;
    let endereco = document.querySelector("#endereco").value;

    if (!cep) {
      document
        .querySelector("#cep")
        .setAttribute("placeholder", "Cep inválido");
      document.querySelector("#cep").classList.add("invalid");
      document.querySelector("#cep").value = "";
      valid = false;
    }

    if (!bairro) {
      document
        .querySelector("#bairro")
        .setAttribute("placeholder", "Bairro inválido");
      document.querySelector("#bairro").classList.add("invalid");
      document.querySelector("#bairro").value = "";
      valid = false;
    }

    if (!endereco) {
      document
        .querySelector("#endereco")
        .setAttribute("placeholder", "Endereço inválido");
      document.querySelector("#endereco").classList.add("invalid");
      document.querySelector("#endereco").value = "";
      valid = false;
    }
  } else {
    let img = document.querySelector("#img-input").value;
    let sobrenos = document.querySelector("#FormControlTextarea").value;

    if (!sobrenos) {
      document
        .querySelector("#FormControlTextarea")
        .setAttribute("placeholder", "Insira alguma informação");
      document.querySelector("#FormControlTextarea").classList.add("invalid");
      document.querySelector("#FormControlTextarea").value = "";
      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  } else {
    document
      .getElementsByClassName("step")
      [currentTab].classList.remove("finish");
  }
  return valid;
}

function fixStepIndicator(n) {
  console.log(n);
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    x[i].classList.remove("finish");
  }

  for (i = 0; i <= n; i++) {
    x[i].classList.add("active");
  }
}
// Adicionar Imagem
function readImage() {
  if (this.files && this.files[0]) {
    var file = new FileReader();
    file.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}
document
  .getElementById("img-input")
  .addEventListener("change", readImage, false);
