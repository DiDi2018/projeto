function pageLoading(){
    let pagina = document.querySelector(".loading");
    pagina.remove();
    console.log("loaded");
}

window.addEventListener("load", pageLoading);

let sobre = document.getElementById("sobreID");
let edicao = document.getElementById("edicao2018ID");
let inter = document.getElementById("intervenientesID");
let locais = document.getElementById("locaisID");
let contactos = document.getElementById("contactosID");

let altura1 = window.innerHeight / 4;
let altura2 = - window.innerHeight / 2;

/*cada nome da secção em negrito quando ela está à vista*/
document.addEventListener('scroll', function(){
    let rectSobre = document.getElementById("sobre").getBoundingClientRect();
    let rectEdic = document.getElementById("edicao2018").getBoundingClientRect();
    let rectInter = document.getElementById("intervenientes").getBoundingClientRect();
    let rectLocais = document.getElementById("locais").getBoundingClientRect();
    let rectContactos = document.getElementById("contactos").getBoundingClientRect();

    if(rectSobre.top <= altura1 && rectSobre.top >= altura2){
        sobre.classList.add("active");
        edicao.classList.remove("active");
        inter.classList.remove("active");
        locais.classList.remove("active");
        contactos.classList.remove("active");
    }
    else if (rectEdic.top <= altura1 && rectEdic.top >= altura2){
        sobre.classList.remove("active");
        edicao.classList.add("active");
        inter.classList.remove("active");
        locais.classList.remove("active");
        contactos.classList.remove("active");
    }
    else if (rectInter.top <= altura1 && rectInter.top >= rectInter.height / 0.75){
        sobre.classList.remove("active");
        edicao.classList.remove("active");
        inter.classList.add("active");
        locais.classList.remove("active");
        contactos.classList.remove("active");
    }
    else if (rectLocais.top <= altura1 && rectLocais.top >= altura2){
        sobre.classList.remove("active");
        edicao.classList.remove("active");
        inter.classList.remove("active");
        locais.classList.add("active");
        contactos.classList.remove("active");
    }
    else if (rectContactos.top <= altura1 && rectContactos.top >= altura2){
        sobre.classList.remove("active");
        edicao.classList.remove("active");
        inter.classList.remove("active");
        locais.classList.remove("active");
        contactos.classList.add("active");
    }
    else {
        sobre.classList.remove("active");
        edicao.classList.remove("active");
        inter.classList.remove("active");
        locais.classList.remove("active");
        contactos.classList.remove("active");
    }
});


/*clicar na barra de navegação*/


let sobreDiv = document.getElementById("sobre");
sobre.addEventListener('click',function(){
    sobreDiv.scrollIntoView();
    window.scrollBy(0, -window.innerWidth * 0.07);
});

let edicaoDiv = document.getElementById("edicao2018");
edicao.addEventListener('click',function(){
    edicaoDiv.scrollIntoView();
    window.scrollBy(0, -window.innerWidth * 0.07);
});


let interDiv = document.getElementById("intervenientes");
inter.addEventListener('click',function(){
    interDiv.scrollIntoView();
    window.scrollBy(0, -window.innerWidth * 0.07);
});

let locaisDiv = document.getElementById("locais");
locais.addEventListener('click',function(){
    locaisDiv.scrollIntoView();
    window.scrollBy(0, -window.innerWidth * 0.07);
});

let contactosDiv = document.getElementById("contactos");
contactos.addEventListener('click',function(){
    contactosDiv.scrollIntoView();
});