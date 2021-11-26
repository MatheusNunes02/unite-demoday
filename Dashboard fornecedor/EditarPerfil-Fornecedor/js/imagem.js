// Adicionar Imagem
function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}
document.getElementById("img-input").addEventListener("change", readImage, false);

// Imagens Lado a Lado 

// Imagem Um
function rodarImagemUm() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("ver").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}

document.getElementById("imagem-input").addEventListener("change", rodarImagemUm, false);

// Imagem Dois
function rodarImagemDois() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("verDois").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}

document.getElementById("imagemDois-input").addEventListener("change", rodarImagemDois, false);

// Imagem Tres
function rodarImagemTres() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("verTres").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}

document.getElementById("imagemTres-input").addEventListener("change", rodarImagemTres, false);