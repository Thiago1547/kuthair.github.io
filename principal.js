var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function (){
    var sidbar = document.querySelector(".sidbar").classList.toggle("show-menu");
});