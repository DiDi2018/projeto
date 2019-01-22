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

    if (rectSobre.top <=altura1 && rectSobre.bottom >= altura1) {
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

    /*contactos animações*/
    let contactosAnimacao = document.querySelectorAll(".animacaoContactos > div");
    let animPos = contactosAnimacao[0].getBoundingClientRect();
    if (animPos.top <= window.innerHeight/4*3 && animPos.top >=window.innerWidth*0.06){
        for(let i=0; i<contactosAnimacao.length; i++){
            contactosAnimacao[i].style.animationName = "animacao";
        }
    }


}

headerScroll();

/*atualizar quando é feito scroll*/
document.querySelector('main').addEventListener('scroll', headerScroll);

/*menu no mobile*/

let imagemMenu = document.querySelector("nav > img");
let lista = document.querySelector("nav > ul");

function menuMobile() {
    if (lista.classList.contains("show")) {
        lista.removeAttribute("style");
        window.setTimeout(function () {
            lista.classList.toggle("show");
        }, 1000)
    }
    else {
        lista.classList.toggle("show");
        lista.style.opacity = "1";
    }
}

imagemMenu.addEventListener("click", menuMobile);

window.addEventListener('resize', function(){
    if(window.matchMedia('(min-width: 769px').matches){
        lista.removeAttribute("style");
        lista.classList.remove("show");
    }
});

/*clicar na barra de navegação*/

let sobreDiv = document.getElementById("sobre");
sobre.addEventListener('click', function () {
    sobreDiv.scrollIntoView();
    if (lista.classList.contains("show")) {
        lista.classList.remove("show");
    }
});

let edicaoDiv = document.getElementById("edicao2019");
edicao.addEventListener('click', function () {
    edicaoDiv.scrollIntoView();
    if (lista.classList.contains("show")) {
        lista.classList.remove("show");
    }
});

let interDiv = document.getElementById("intervenientes");
inter.addEventListener('click', function () {
    interDiv.scrollIntoView();
    if (lista.classList.contains("show")) {
        lista.classList.remove("show");
    }
});

let locaisDiv = document.getElementById("locais");
locais.addEventListener('click', function () {
    locaisDiv.scrollIntoView();
    if (lista.classList.contains("show")) {
        lista.classList.remove("show");
    }
});

let contactosDiv = document.getElementById("contactos");
contactos.addEventListener('click', function () {
    contactosDiv.scrollIntoView();
    if (lista.classList.contains("show")) {
        lista.classList.remove("show");
    }
});

/*ANIMAÇÃO DOS TILS DA EDIÇÃO 2019*/

let arrayDeDivTils = document.querySelectorAll("#edicao2019flex > div > div:last-child");
let divsAgenda = document.querySelectorAll(".agenda");
let arraySvg = document.querySelectorAll("#edicao2019flex > div > div:last-child > svg");

//elementos das animações
let animForm1 = document.createElementNS("http://www.w3.org/2000/svg","svg");
let animForm2 = document.createElementNS("http://www.w3.org/2000/svg","svg");
let animNum1 = document.createElementNS("http://www.w3.org/2000/svg","svg");
let animNum2 = document.createElementNS("http://www.w3.org/2000/svg","svg");

let fechado = [true, true, true];

let tablet = window.matchMedia('(max-width: 1024px').matches;
let dispositivo = tablet;

if(tablet === false){  //se for desktop adiciona o eventlistener
    clickAbrirTils();
}
else {  //se for telemovel ou tablet retira o .divHover e abre os tils
    for(let i=0; i<arraySvg.length; i++){
        abrirTil(i);
    }
}

//funções para o eventListener de clicar para abrir e fechar os tils
function abrirTil0(){
    animacaoTils(0);
}
function abrirTil1(){
    animacaoTils(1);
}
function abrirTil2(){
    animacaoTils(2);
}

window.addEventListener('resize', function(){
    tablet = window.matchMedia('(max-width: 1024px').matches;
    if(tablet){
        if(tablet !== dispositivo){
            //se houve mudança de dispositivo de desktop para tablet
            dispositivo = tablet;

            //remover o eventListener de clicar no til
            arrayDeDivTils[0].removeEventListener("click", abrirTil0);
            arrayDeDivTils[1].removeEventListener("click", abrirTil1);
            arrayDeDivTils[2].removeEventListener("click", abrirTil2);

            //abrir os tils que estão fechados
            for(let i=0; i<arraySvg.length; i++){
                if(fechado[i] === true){
                    abrirTil(i);
                }
            }
        }
    }
    else {
        if(tablet !== dispositivo){
            //se houve mudança de dispositivo de tablet para desktop
            dispositivo = tablet;
            for(let i=0; i<arrayDeDivTils.length; i++) {
                fecharTil(i);
            }
            clickAbrirTils();
        }
    }
});

function clickAbrirTils(){
    arrayDeDivTils[0].addEventListener("click", abrirTil0);
    arrayDeDivTils[1].addEventListener("click", abrirTil1);
    arrayDeDivTils[2].addEventListener("click", abrirTil2);
}

function animacaoTils(x) {
    if (fechado[x]) {
        abrirTil(x);
    }
    else {
        fecharTil(x);
    }
}

function abrirTil(x){
    let x1 = x + 1;
    let child = document.querySelectorAll(`#edicao2019flex > div:nth-child(${x1}) svg > animateTransform`);

    animForm1.innerHTML = `<animateTransform attributeName='transform' href='#esquerdo${x}' ` +
        `attributeType='XML' type='translate' to='0 -300' dur='1s' begin='' repeatCount='1' fill='freeze' calcMode='spline' keyTimes='0;1' keySplines='.42 0 .58 1'></animateTransform>` +
        `<animateTransform href='#direito${x}' attributeName='transform' attributeType='XML' type='translate' ` +
        `to='0 300' dur='1s' begin='' repeatCount='1' fill='freeze' calcMode='spline' keyTimes='0;1' keySplines='.42 0 .58 1'></animateTransform>`;

    animNum1.innerHTML = `<animateTransform href='#numero${x}' attributeName='transform' ` +
        `attributeType='XML' type='translate' to='-150 -275' dur='1.5s' begin='' repeatCount='1' ` +
        `fill='freeze' calcMode='spline' keyTimes='0;0.66;1' keySplines='.42 0 .58 1; 0 0 0 0' values='0 0; 0 -275; -150 -275'></animateTransform>` +
        `<animateTransform href='#mes${x}' attributeName='transform' attributeType='XML' type='translate' to='-150 -160' dur='1.5s' ` +
        `begin='' repeatCount='1' fill='freeze' keyTimes='0;0.66;1' keySplines='.42 0 .58 1; 0 0 0 0' values='0 0; 0 -160; -150 -160'></animateTransform>`;

    fechado[x] = false;

    //tirar hover e mudar opacidade quando a animação estiver quase acabada
    arrayDeDivTils[x].classList.remove("divHover");
    window.setTimeout(function () {
        divsAgenda[x].style.opacity = 1;
    }, 750);

    //animacao svg

    if(child.length > 0){
        for(let i=0;i<child.length;i++){
            arraySvg[x].removeChild(child[i]);
        }
    }
    arraySvg[x].setAttribute("viewBox","0 0 515 850");
    arraySvg[x].style.top = "calc(-100vw / 48 * 10 * 425 / 515)";

    let text1 = animForm1.childNodes[0];
    let text2 = animForm1.childNodes[1];
    let textData1 = animNum1.childNodes[0];
    let textData2 = animNum1.childNodes[1];
    arraySvg[x].appendChild(text1);
    arraySvg[x].appendChild(text2);
    arraySvg[x].appendChild(textData1);
    arraySvg[x].appendChild(textData2);
    text1.beginElement();
    text2.beginElement();
    textData1.beginElement();
    textData2.beginElement();
}

function fecharTil(x){
    let x1 = x + 1;
    let child = document.querySelectorAll(`#edicao2019flex > div:nth-child(${x1}) svg > animateTransform`);

    animForm2.innerHTML = `<animateTransform href='#esquerdo${x}' attributeName='transform' ` +
        `attributeType='XML' type='translate' from='0 -300' to='0 0' dur='1s' begin='' repeatCount='1' fill='freeze' calcMode='spline' keyTimes='0;1' keySplines='.42 0 .58 1'></animateTransform>` +
        `<animateTransform href='#direito${x}' attributeName='transform' attributeType='XML' type='translate' ` +
        `from='0 300' to='0 0' dur='1s' begin='' repeatCount='1' fill='freeze' calcMode='spline' keyTimes='0;1' keySplines='.42 0 .58 1'></animateTransform>`;

    animNum2.innerHTML = `<animateTransform href='#numero${x}' attributeName='transform' ` +
        `attributeType='XML' type='translate' from='-150 -275' to='0 0' dur='1.5s' begin='' repeatCount='1' ` +
        `fill='freeze' calcMode='spline' keyTimes='0;0.33;1' keySplines='0 0 0 0; .42 0 .58 1' values='-150 -275; 0 -275; 0 0'></animateTransform>` +
        `<animateTransform href='#mes${x}' attributeName='transform' attributeType='XML' type='translate' from='-150 -160' to='0 0' dur='1.5s' ` +
        `begin='' repeatCount='1' fill='freeze' keyTimes='0;0.33;1' keySplines='0 0 0 0; .42 0 .58 1' values='-150 -160; 0 -160; 0 0'></animateTransform>`;

    fechado[x] = true;

    //retirar opacidade
    divsAgenda[x].style.opacity = 0;

    //quando acabar a animação, adicionar a classe para o hover e mudar o viewBox do svg e a sua posição
    window.setTimeout(function () {
        arrayDeDivTils[x].classList.add("divHover");
        arraySvg[x].setAttribute("viewBox","0 300 515 250");
        arraySvg[x].style.top = "calc(-100vw / 48 * 10 * 125 / 515)";
    }, 1500);

    //animacao svg

    let text1 = animForm2.childNodes[0];
    let text2 = animForm2.childNodes[1];
    let textData1 = animNum2.childNodes[0];
    let textData2 = animNum2.childNodes[1];

    window.setTimeout(function(){
        for(let i=0;i<child.length-2;i++){
            arraySvg[x].removeChild(child[i]);
            arraySvg[x].appendChild(text1);
            arraySvg[x].appendChild(text2);
            text1.beginElement();
            text2.beginElement();
        }
    },500);
    for(let i=2;i<child.length;i++){
        arraySvg[x].removeChild(child[i]);
    }
    arraySvg[x].appendChild(textData1);
    arraySvg[x].appendChild(textData2);
    textData1.beginElement();
    textData2.beginElement();
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

function sair() {
    sombra.style.backgroundColor = "";
    fundo.style.display = "none";
    darqinfo.style.display = "none";
    deiinfo.style.display = "none";
    museuinfo.style.display = "none";
}

let telemovel1 = window.matchMedia('(max-width: 768px').matches;

if(!telemovel1){
    document.addEventListener("click", teste);
    cruz.addEventListener("click", sair);
}

function teste(evt) {
    let dentrodarq = darq.contains(evt.target);
    let dentrodei = dei.contains(evt.target);
    let dentromuseu = museu.contains(evt.target);
    let dentro2 = fundo.contains(evt.target);

    if (!dentrodarq && !dentrodei && !dentromuseu && !dentro2) {
        return sair();
    }
}

window.addEventListener('resize', function () {
    let telemovel = window.matchMedia('(max-width: 768px').matches;
    if (!telemovel) {

        museu.addEventListener("click", aparecermuseu);
        dei.addEventListener("click", aparecerdei);
        darq.addEventListener("click", aparecerdarq);
        cruz.addEventListener("click", sair);
        document.addEventListener("click", teste);
    } else {
        sombra.style.backgroundColor = "";
        fundo.style.display = "";
        darqinfo.style.display = "";
        deiinfo.style.display = "";
        museuinfo.style.display = "";
        document.removeEventListener("click", sair);
        document.removeEventListener("click", teste);

    }

});

let localtipo = document.querySelectorAll(".localtipo");

function titulolocal(string, x) {
    let array = '';
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === ' ') {
            array += '<span class="circulos"> </span>';
        } else {
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

/*CONTACTOS*/

let contactosAnim = document.querySelectorAll(".animacaoContactos > p");

function nomeContacto(string,x){
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
    contactosAnim[x].insertAdjacentHTML('afterbegin', array);
}

nomeContacto('nuno coelho',0);
nomeContacto('pedro martins',1);