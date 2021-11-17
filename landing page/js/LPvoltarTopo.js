
var btn = document.querySelector("#back-to-top");
btn.classList.add('d-none');
let ticking = false;

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});


function visibilidadeBtn(posicaoTela){
    if(posicaoTela<300){
        btn.classList.add('d-none');
    }else{
        btn.classList.remove('d-none')
    }
}

document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        visibilidadeBtn(lastKnownScrollPosition);
        ticking = false;
    });
  
      ticking = true;
    }
  });