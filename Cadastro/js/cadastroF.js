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
    let name = document.querySelector("#nome_empresa");
    let cnpj = document.querySelector("#cnpj");
    let telefone = document.querySelector("#telefone");

    if (!name.value) {
      name.setAttribute("placeholder", "Insira um nome válido");
      name.classList.add("invalid");
      valid = false;
    }

    if (!cnpj.value) {
      cnpj.setAttribute("placeholder", "Insira um cnpj válido");
      cnpj.classList.add("invalid");
      valid = false;
    }

    if (telefone.value.length != 11) {
      telefone.value = "";
      telefone.classList.add("invalid");
      telefone.setAttribute("placeholder", "Insira um telefone válido");
      valid = false;
    }
  } else if (currentTab == 1) {
    let cep = document.querySelector("#cep");
    let bairro = document.querySelector("#bairro");
    let numero_endereco = document.querySelector("#numero_endereco");
    let endereco = document.querySelector("#endereco");

    if (cep.value.length != 8) {
      cep.classList.add("invalid");
      cep.value = "";
      cep.setAttribute("placeholder", "Insira um cep válido");
      valid = false;
    }

    if (!bairro.value) {
      bairro.classList.add("invalid");

      bairro.setAttribute("placeholder", "Insira um bairro válido");
      valid = false;
    }

    if (!numero_endereco.value) {
      numero_endereco.classList.add("invalid");
      numero_endereco.setAttribute(
        "placeholder",
        "Insira um numero de endereço válido"
      );
      valid = false;
    }

    if (!endereco.value) {
      endereco.classList.add("invalid");
      endereco.setAttribute("placeholder", "Insira um endereço válido");
      valid = false;
    }
  } else if (currentTab == 2) {
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1) {
      email.classList.add("invalid");
      email.value = "";
      email.setAttribute("placeholder", "Insira um email válido");
      valid = false;
    }

    if (!password) {
      password.classList.add("invalid");
      password.setAttribute("placeholder", "Insira uma senha válida");
      valid = false;
    }
  } else {
    let sobre_mim = document.querySelector("#FormControlTextarea");

    if (!sobre_mim) {
      sobre_mim.classList.add("invalid");
      sobre_mim.setAttribute(
        "placeholder",
        "Insira alguma informação sobre o fornecimento"
      );
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
