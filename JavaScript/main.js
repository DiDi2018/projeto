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
        sobre.classList.add("bold");
        edicao.classList.remove("bold");
        inter.classList.remove("bold");
        locais.classList.remove("bold");
        contactos.classList.remove("bold");
    }
    else if (rectEdic.top <= altura1 && rectEdic.top >= altura2){
        sobre.classList.remove("bold");
        edicao.classList.add("bold");
        inter.classList.remove("bold");
        locais.classList.remove("bold");
        contactos.classList.remove("bold");
    }
    else if (rectInter.top <= altura1 && rectInter.top >= rectInter.height / 0.75){
        sobre.classList.remove("bold");
        edicao.classList.remove("bold");
        inter.classList.add("bold");
        locais.classList.remove("bold");
        contactos.classList.remove("bold");
    }
    else if (rectLocais.top <= altura1 && rectLocais.top >= altura2){
        sobre.classList.remove("bold");
        edicao.classList.remove("bold");
        inter.classList.remove("bold");
        locais.classList.add("bold");
        contactos.classList.remove("bold");
    }
    else if (rectContactos.top <= altura1 && rectContactos.top >= altura2){
        sobre.classList.remove("bold");
        edicao.classList.remove("bold");
        inter.classList.remove("bold");
        locais.classList.remove("bold");
        contactos.classList.add("bold");
    }
    else {
        sobre.classList.remove("bold");
        edicao.classList.remove("bold");
        inter.classList.remove("bold");
        locais.classList.remove("bold");
        contactos.classList.remove("bold");
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

/*clicar nos tils da secção edição 2018*/

let arrayDeDivTils = document.querySelectorAll("#edicao2018 > div > div");

arrayDeDivTils[0].addEventListener("click",function(){
    abrirTils(0);
});
arrayDeDivTils[1].addEventListener("click",function(){
    abrirTils(1);
});
arrayDeDivTils[2].addEventListener("click",function(){
    abrirTils(2);
});

function abrirTils(x){
    arrayDeDivTils[x].classList.toggle("divAltura");
    if(arrayDeDivTils[x].classList.contains("divTransition")){
        window.setTimeout(function(){
            arrayDeDivTils[x].classList.toggle("divTransition");
        },1000);
    }
    else {
        arrayDeDivTils[x].classList.toggle("divTransition");
    }
}




//LOCAIS

let fundo= document.querySelector(".fundo2");
let museu=document.querySelector(".museu");
let museuinfo= document.querySelector(".museuInfo");

museu.addEventListener("click", aparecermuseu);
function aparecermuseu(){
    fundo.style.display = "block";
    museuinfo.style.display = "block";
    darqinfo.style.display = "none";
    deiinfo.style.display = "none";
}


let dei = document.querySelector(".dei");
let deiinfo=document.querySelector(".deiInfo");

dei.addEventListener("click", aparecerdei);
function aparecerdei(){
    fundo.style.display = "block";
    deiinfo.style.display = "block";
    museuinfo.style.display = "none";
    darqinfo.style.display = "none";
}


let darq = document.querySelector(".darq");
let darqinfo=document.querySelector(".darqInfo");

darq.addEventListener("click", aparecerdarq);
function aparecerdarq(){
    fundo.style.display = "block";
    darqinfo.style.display = "block";
    deiinfo.style.display = "none";
    museuinfo.style.display = "none";

}


let cruz=document.querySelector(".cruz");

cruz.addEventListener("click",sair);
function sair(){
    fundo.style.display ="none";
    darqinfo.style.display = "none";
    deiinfo.style.display = "none";
    museuinfo.style.display = "none";

}



























