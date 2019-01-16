function pageLoading() {
    let pagina = document.querySelector(".loading");
    pagina.remove();
    console.log("loaded");
}

window.addEventListener("load", pageLoading);

let sobre = document.getElementById("sobreID");
let edicao = document.getElementById("edicao2019ID");
let inter = document.getElementById("intervenientesID");
let locais = document.getElementById("locaisID");
let contactos = document.getElementById("contactosID");

let altura1 = window.innerHeight / 2;
let cont = [0,0,0];

/*cada nome da secção em negrito quando ela está à vista*/

function headerScroll(){
    let rectSobre = document.getElementById("sobre").getBoundingClientRect();
    let rectEdic = document.getElementById("edicao2019").getBoundingClientRect();
    let rectInter = document.getElementById("intervenientes").getBoundingClientRect();
    let rectLocais = document.getElementById("locais").getBoundingClientRect();
    let rectContactos = document.getElementById("contactos").getBoundingClientRect();

    if (rectSobre.top <= altura1 && rectSobre.bottom >= altura1) {
        sobre.classList.add("bold");
        edicao.classList.remove("bold");
        inter.classList.remove("bold");
        locais.classList.remove("bold");
        contactos.classList.remove("bold");
    }
    else if (rectEdic.top <= altura1 && rectEdic.bottom >= altura1) {
        sobre.classList.remove("bold");
        edicao.classList.add("bold");
        inter.classList.remove("bold");
        locais.classList.remove("bold");
        contactos.classList.remove("bold");
    }
    else if (rectInter.top <= altura1 && rectInter.bottom >= altura1) {
        sobre.classList.remove("bold");
        edicao.classList.remove("bold");
        inter.classList.add("bold");
        locais.classList.remove("bold");
        contactos.classList.remove("bold");
    }
    else if (rectLocais.top <= altura1 && rectLocais.bottom >= altura1) {
        sobre.classList.remove("bold");
        edicao.classList.remove("bold");
        inter.classList.remove("bold");
        locais.classList.add("bold");
        contactos.classList.remove("bold");
    }
    else if (rectContactos.top <= altura1 && rectContactos.bottom >= altura1) {
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

    /*nomes dos intervenientes em video a fazer play*/
    let videos = document.querySelectorAll('.pessoaNome > video');
    let videoPos = [];
    for (let i = 0; i < videos.length; i++){
        if(cont[i]===0){
            videoPos[i] = videos[i].getBoundingClientRect();
            if(videoPos[i].top <= window.innerHeight/4*3 && videoPos[i].top >= window.innerWidth*0.06){
                videos[i].play();
                cont[i]=cont[i]+1;
            }
        }
    }
    /*animação final*/

    let animacao = document.querySelector(".animacao");
    let videoPos2 = animacao.getBoundingClientRect();
    if (videoPos2.top <= window.innerHeight / 4 * 3 && videoPos2.top >= window.innerWidth * 0.06) {
        animacao.play();
    }

}

headerScroll();

/*atualizar quando é feito scroll*/
document.addEventListener('scroll', headerScroll);


/*clicar na barra de navegação*/

let sobreDiv = document.getElementById("sobre");
sobre.addEventListener('click', function () {
    sobreDiv.scrollIntoView();
    window.scrollBy(0, -window.innerWidth * 0.07);
});

let edicaoDiv = document.getElementById("edicao2019");
edicao.addEventListener('click', function () {
    edicaoDiv.scrollIntoView();
    window.scrollBy(0, -window.innerWidth * 0.07);
});

let interDiv = document.getElementById("intervenientes");
inter.addEventListener('click', function () {
    interDiv.scrollIntoView();
    window.scrollBy(0, -window.innerWidth * 0.07);
    headerScroll();
});

let locaisDiv = document.getElementById("locais");
locais.addEventListener('click', function () {
    locaisDiv.scrollIntoView();
    window.scrollBy(0, -window.innerWidth * 0.07);
});

let contactosDiv = document.getElementById("contactos");
contactos.addEventListener('click', function () {
    contactosDiv.scrollIntoView();
});

/*clicar nos tils da secção edição 2019*/

let arrayDeDivTils = document.querySelectorAll("#edicao2019flex > div > div:nth-child(4)");
let divsAgenda = document.querySelectorAll(".agenda");
let textoData = document.querySelectorAll("#edicao2019flex > div > p");

arrayDeDivTils[0].addEventListener("click", function () {
    abrirTils(0, 0, 1);
});
arrayDeDivTils[1].addEventListener("click", function () {
    abrirTils(1, 2, 3);
});
arrayDeDivTils[2].addEventListener("click", function () {
    abrirTils(2, 4, 5);
});

function abrirTils(x, y, z) {
    if (arrayDeDivTils[x].classList.contains("divTransition")) {
        divsAgenda[x].style.opacity = 0;
        window.setTimeout(function () {
            textoData[y].style.removeProperty('bottom');
            textoData[z].style.bottom = 'calc(100vw / 10 * 125 / 250 + (100vw / 10 * 125 / 250 - 4vw))';
            arrayDeDivTils[x].classList.toggle("divAltura");
        }, 250);
        window.setTimeout(function () {
            arrayDeDivTils[x].classList.toggle("divTransition");
            arrayDeDivTils[x].classList.toggle("divHover");
            textoData[z].style.removeProperty('bottom');
        }, 1250);
    }
    else {
        textoData[z].style.bottom = 'calc(100vw / 8 * 125 / 250 + (100vw / 8 * 125 / 250 - 5vw))';
        window.setTimeout(function () {
            textoData[y].style.bottom = 'calc((23.75vw + (100vw / 8 * 125 / 250 * 2)) - (100vw / 8 * 125 / 250) - 1.75vw - 4vw)';
            textoData[z].style.bottom = 'calc((23.75vw + (100vw / 8 * 125 / 250 * 2)) - (100vw / 8 * 125 / 250) - 1.75vw - 4vw)';
            arrayDeDivTils[x].classList.toggle("divAltura");
            arrayDeDivTils[x].classList.toggle("divTransition");
            arrayDeDivTils[x].classList.toggle("divHover");
        }, 1);
        window.setTimeout(function () {
            divsAgenda[x].style.opacity = 1;
        }, 501);
    }
}

//texto a aumentar quando é feito hover no sobre

arrayDeDivTils[0].addEventListener('mousemove', function () {
    data(0, 0, 1);
});
arrayDeDivTils[0].addEventListener('mouseleave', function () {
    data2(0, 1);
});
arrayDeDivTils[1].addEventListener('mousemove', function () {
    data(1, 2, 3);
});
arrayDeDivTils[1].addEventListener('mouseleave', function () {
    data2(2, 3);
});
arrayDeDivTils[2].addEventListener('mousemove', function () {
    data(2, 4, 5);
});
arrayDeDivTils[2].addEventListener('mouseleave', function () {
    data2(4, 5);
});

function data(x, y, z) {
    if (arrayDeDivTils[x].classList.contains("divHover")) {
        textoData[y].style.fontSize = '5vw';
        textoData[y].style.lineHeight = '5vw';
        textoData[z].style.fontSize = '5vw';
        textoData[z].style.lineHeight = '5vw';
    }
    else {
        textoData[y].style.fontSize = '4vw';
        textoData[y].style.lineHeight = '4vw';
        textoData[z].style.fontSize = '4vw';
        textoData[z].style.lineHeight = '4vw';
    }
}

function data2(x, y) {
    textoData[x].style.fontSize = '4vw';
    textoData[x].style.lineHeight = '4vw';
    textoData[y].style.fontSize = '4vw';
    textoData[y].style.lineHeight = '4vw';
}

//texto na classe agenda

let profi = ['Type Designer', 'Artista Plástico', 'Engenheiro Informático', 'ArtEZ Institute of the Arts',
    'Artes Sonoras', 'Designer Gráfico', 'Designer', 'Designer de Interação', 'Designer de Som'];

function nomes(string, x, y) {
    let array = '';
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === ' ') {
            array += '<span class="circulos"> </span>';
        }
        else {
            let r = Math.floor(Math.random() * (3));
            if (r === 1) {
                array += '<span class="triangulos">' + string.charAt(i) + '</span>';
            } else if (r === 2) {
                array += '<span class="circulos">' + string.charAt(i) + '</span>';
            } else {
                array += '<span class="quadrados">' + string.charAt(i) + '</span>';
            }
        }
    }
    if (y !== 0 && y !== 3 && y !== 6) {
        divsAgenda[x].insertAdjacentHTML('beforeend', '<p style="font-size: 0.5vw; line-height: 0.5vw;"><br></p>');
    }
    divsAgenda[x].insertAdjacentHTML('beforeend', '<p>' + profi[y] + '</p>');
    divsAgenda[x].insertAdjacentHTML('beforeend', array);
}

nomes('mário feliciano', 0, 0);
nomes('joao sousa', 0, 1);
nomes('andré freitas', 0, 2);
nomes('thomas castro', 1, 3);
nomes('diana combo', 1, 4);
nomes('frederico luís', 1, 5);
nomes('luna maurer', 2, 6);
nomes('rui pereira', 2, 7);
nomes('antónio louro', 2, 8);


//LOCAIS

let fundo = document.querySelector(".fundo2");
let sombra = document.querySelector("#locais");

let museu = document.querySelector(".museu");
let museuinfo = document.querySelector(".museuInfo");
let dei = document.querySelector(".dei");
let deiinfo = document.querySelector(".deiInfo");
let darq = document.querySelector(".darq");
let darqinfo = document.querySelector(".darqInfo");


museu.addEventListener("click", aparecermuseu);

function aparecermuseu() {
    fundo.style.display = "block";
    sombra.style.backgroundColor = "rgb(0,0,0,0.8)";
    sombra.style.transition = "1s";
    museuinfo.style.display = "block";
    darqinfo.style.display = "none";
    deiinfo.style.display = "none";
}


dei.addEventListener("click", aparecerdei);

function aparecerdei() {
    fundo.style.display = "block";
    sombra.style.backgroundColor = "rgb(0,0,0,0.8)";
    sombra.style.transition = "1s";
    deiinfo.style.display = "block";
    museuinfo.style.display = "none";
    darqinfo.style.display = "none";
}


darq.addEventListener("click", aparecerdarq);

function aparecerdarq() {
    fundo.style.display = "block";
    sombra.style.backgroundColor = "rgb(0,0,0,0.8)";
    sombra.style.transition = "1s";
    darqinfo.style.display = "block";
    deiinfo.style.display = "none";
    museuinfo.style.display = "none";

}

let cruz = document.querySelector(".cruz");

cruz.addEventListener("click", sair);


function sair() {
    sombra.style.backgroundColor = "";
    fundo.style.display = "none";
    darqinfo.style.display = "none";
    deiinfo.style.display = "none";
    museuinfo.style.display = "none";
}

document.addEventListener("click", function (evt) {
    let dentrodarq = darq.contains(evt.target);
    let dentrodei = dei.contains(evt.target);
    let dentromuseu = museu.contains(evt.target);
    let dentro2 = fundo.contains(evt.target);

    if (!dentrodarq && !dentrodei && !dentromuseu && !dentro2) {
        return sair();
    }
});

let localtipo=document.querySelectorAll(".localtipo");

function titulolocal(string, x) {
    let array = '';
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === ' ') {
            array += '<span class="circulos"> </span>';
        }
        else {
            let r = Math.floor(Math.random() * (3));
            if (r === 1) {
                array += '<span class="triangulos">' + string.charAt(i) + '</span>';
            } else if (r === 2) {
                array += '<span class="circulos">' + string.charAt(i) + '</span>';
            } else {
                array += '<span class="quadrados">' + string.charAt(i) + '</span>';
            }
        }
    }
    localtipo[x].insertAdjacentHTML('beforeend', array);
}
titulolocal('museu da ciência', 0);
titulolocal('darq', 1);
titulolocal('dei', 2);






