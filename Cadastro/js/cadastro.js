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
