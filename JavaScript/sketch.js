let altura;
let largura;
let marginX,marginY;

let d = [];
let a = [];
let t = [];

let c=0,j=1;

let circulo1;
let triangulo1;
let circulo2;
let triangulo2;
let circulo3;
let triangulo3;
let circulo4;
let triangulo4;
let quadrado;

function preload() {
    circulo1 = loadImage("images/data/circulo_superior_esquerdo.png");
    triangulo1 = loadImage("images/data/triangulo_superior_esquerdo.png");

    circulo2 = loadImage("images/data/circulo_superior_direito.png");
    triangulo2 = loadImage("images/data/triangulo_superior_direito.png");

    circulo3 = loadImage("images/data/circulo_inferior_esquerdo.png");
    triangulo3 = loadImage("images/data/triangulo_inferior_esquerdo.png");

    circulo4 = loadImage("images/data/circulo_inferior_direito.png");
    triangulo4 = loadImage("images/data/triangulo_inferior_direito.png");

    quadrado = loadImage("images/data/quadrado.png");
}

function setup() {
    altura = windowHeight - windowWidth*0.07;
    largura = altura/12*20;
    marginX = (windowWidth - windowWidth*0.02 - largura)/2;
    marginY = 0;
    if(largura >= windowWidth){
        largura = windowWidth-windowWidth*0.02;
        altura = largura/20*12;
        marginX = 0;
        marginY = (windowHeight - windowWidth*0.07 - altura)/2;
    }
    let cv = createCanvas(largura+marginX, altura+marginY);
    cv.parent("processingcanvas");

    //inicialização letra d
    d[0] = new Peca(4, largura/20 + marginX, altura/12*7 + marginY, 1);
    d[1] = new Peca(2, largura/20 + marginX, altura/12*8 + marginY, 1);
    d[2] = new Peca(4, largura/20*2 + marginX, altura/12*6 + marginY, 1);
    d[3] = new Peca(2, largura/20*2 + marginX, altura/12*9 + marginY, 1);
    d[4] = new Peca(4, largura/20*3 + marginX, altura/12*5 + marginY, 1);
    d[5] = new Peca(2, largura/20*3 + marginX, altura/12*10 + marginY, 1);
    d[6] = new Peca(3, largura/20*4 + marginX, altura/12*5 + marginY, 1);
    d[7] = new Peca(1, largura/20*4 + marginX, altura/12*10 + marginY, 1);
    d[8] = new Peca(3, largura/20*5 + marginX, altura/12*6 + marginY, 1);
    d[9] = new Peca(1, largura/20*5 + marginX, altura/12*9 + marginY, 1);
    d[10] = new Peca(3, largura/20*6 + marginX, altura/12 + marginY, 1);
    d[11] = new Peca(1, largura/20*6 + marginX, altura/12*2 + marginY, 1);
    d[12] = new Peca(4, largura/20*5 + marginX, altura/12*3 + marginY, 1);
    d[13] = new Peca(2, largura/20*5 + marginX, altura/12*4 + marginY, 1);
    d[14] = new Peca(3, largura/20*6 + marginX, altura/12*5 + marginY, 1);
    d[15] = new Peca(1, largura/20*6 + marginX, altura/12*6 + marginY, 1);
    d[16] = new Peca(3, largura/20*6 + marginX, altura/12*7 + marginY, 1);
    d[17] = new Peca(1, largura/20*6 + marginX, altura/12*8 + marginY, 1);
    d[18] = new Peca(3, largura/20*6 + marginX, altura/12*9 + marginY, 1);
    d[19] = new Peca(2, largura/20*6 + marginX, altura/12*10 + marginY, 1);

    //inicialização letra a
    a[0] = new Peca(4, largura/20*8 + marginX, altura/12*7 + marginY, 2);
    a[1] = new Peca(2, largura/20*8 + marginX, altura/12*8 + marginY, 2);
    a[2] = new Peca(4, largura/20*9 + marginX, altura/12*6 + marginY, 2);
    a[3] = new Peca(2, largura/20*9 + marginX, altura/12*9 + marginY, 2);
    a[4] = new Peca(4, largura/20*10 + marginX, altura/12*5 + marginY, 2);
    a[5] = new Peca(2, largura/20*10 + marginX, altura/12*10 + marginY, 2);
    a[6] = new Peca(3, largura/20*11 + marginX, altura/12*5 + marginY, 2);
    a[7] = new Peca(1, largura/20*11 + marginX, altura/12*10 + marginY, 2);
    a[8] = new Peca(3, largura/20*12 + marginX, altura/12*6 + marginY, 2);
    a[9] = new Peca(1, largura/20*12 + marginX, altura/12*9 + marginY, 2);
    a[10] = new Peca(1, largura/20*13 + marginX, altura/12*6 + marginY, 2);
    a[11] = new Peca(3, largura/20*13 + marginX, altura/12*7 + marginY, 2);
    a[12] = new Peca(1, largura/20*13 + marginX, altura/12*8 + marginY, 2);
    a[13] = new Peca(3, largura/20*13 + marginX, altura/12*9 + marginY, 2);
    a[14] = new Peca(2, largura/20*13 + marginX, altura/12*10 + marginY, 2);
    a[15] = new Peca(1, largura/20*14 + marginX, altura/12*10 + marginY, 2);

    //inicialização letra t
    t[0] = new Peca(2, largura/20*15 + marginX, altura/12*5 + marginY, 3);
    t[1] = new Peca(4, largura/20*16 + marginX, altura/12*4 + marginY, 3);
    t[2] = new Peca(1, largura/20*16 + marginX, altura/12*5 + marginY, 3);
    t[3] = new Peca(4, largura/20*16 + marginX, altura/12*7 + marginY, 3);
    t[4] = new Peca(2, largura/20*16 + marginX, altura/12*8 + marginY, 3);
    t[5] = new Peca(3, largura/20*17 + marginX, altura/12*2 + marginY, 3);
    t[6] = new Peca(1, largura/20*17 + marginX, altura/12*3 + marginY, 3);
    t[7] = new Peca(4, largura/20*17 + marginX, altura/12*5 + marginY, 3);
    t[8] = new Peca(1, largura/20*17 + marginX, altura/12*6 + marginY, 3);
    t[9] = new Peca(3, largura/20*17 + marginX, altura/12*9 + marginY, 3);
    t[10] = new Peca(2, largura/20*17 + marginX, altura/12*10 + marginY, 3);
    t[11] = new Peca(3, largura/20*18 + marginX, altura/12*5 + marginY, 3);
}

function draw() {
    background(color(250,250,250));
    for (let i = 0; i < d.length; i++) {
        d[i].desenhar();
    }
    for (let i = 0; i < a.length; i++) {
        a[i].desenhar();
    }
    for (let i = 0; i < t.length; i++) {
        t[i].desenhar();
    }

    c++;
    if (c===15*j){
        j++;
        for(let i=0; i<d.length; i++){
            d[i].clicar();
        }
        for(let i=0; i<a.length; i++){
            a[i].clicar();
        }
        for(let i=0; i<t.length; i++){
            t[i].clicar();
        }
    }
}

function windowResized() {
    altura = windowHeight - windowWidth*0.07;
    largura = altura/12*20;
    marginX = (windowWidth - windowWidth*0.02 - largura)/2;
    marginY = 0;
    if(largura >= windowWidth){
        largura = windowWidth-windowWidth*0.02;
        altura = largura/20*12;
        marginX = 0;
        marginY = (windowHeight - windowWidth*0.07 - altura)/2;
    }
    resizeCanvas(largura+marginX, altura+marginY);
    d[0].mudarCoord(largura/20 + marginX, altura/12*7 + marginY);
    d[1].mudarCoord(largura/20 + marginX, altura/12*8 + marginY);
    d[2].mudarCoord(largura/20*2 + marginX, altura/12*6 + marginY);
    d[3].mudarCoord(largura/20*2 + marginX, altura/12*9 + marginY);
    d[4].mudarCoord(largura/20*3 + marginX, altura/12*5 + marginY);
    d[5].mudarCoord(largura/20*3 + marginX, altura/12*10 + marginY);
    d[6].mudarCoord(largura/20*4 + marginX, altura/12*5 + marginY);
    d[7].mudarCoord(largura/20*4 + marginX, altura/12*10 + marginY);
    d[8].mudarCoord(largura/20*5 + marginX, altura/12*6 + marginY);
    d[9].mudarCoord(largura/20*5 + marginX, altura/12*9 + marginY);
    d[10].mudarCoord(largura/20*6 + marginX, altura/12 + marginY);
    d[11].mudarCoord(largura/20*6 + marginX, altura/12*2 + marginY);
    d[12].mudarCoord(largura/20*5 + marginX, altura/12*3 + marginY);
    d[13].mudarCoord(largura/20*5 + marginX, altura/12*4 + marginY);
    d[14].mudarCoord(largura/20*6 + marginX, altura/12*5 + marginY);
    d[15].mudarCoord(largura/20*6 + marginX, altura/12*6 + marginY);
    d[16].mudarCoord(largura/20*6 + marginX, altura/12*7 + marginY);
    d[17].mudarCoord(largura/20*6 + marginX, altura/12*8 + marginY);
    d[18].mudarCoord(largura/20*6 + marginX, altura/12*9 + marginY);
    d[19].mudarCoord(largura/20*6 + marginX, altura/12*10 + marginY);

    a[0].mudarCoord(largura/20*8 + marginX, altura/12*7 + marginY);
    a[1].mudarCoord(largura/20*8 + marginX, altura/12*8 + marginY);
    a[2].mudarCoord(largura/20*9 + marginX, altura/12*6 + marginY);
    a[3].mudarCoord(largura/20*9 + marginX, altura/12*9 + marginY);
    a[4].mudarCoord(largura/20*10 + marginX, altura/12*5 + marginY);
    a[5].mudarCoord(largura/20*10 + marginX, altura/12*10 + marginY);
    a[6].mudarCoord(largura/20*11 + marginX, altura/12*5 + marginY);
    a[7].mudarCoord(largura/20*11 + marginX, altura/12*10 + marginY);
    a[8].mudarCoord(largura/20*12 + marginX, altura/12*6 + marginY);
    a[9].mudarCoord(largura/20*12 + marginX, altura/12*9 + marginY);
    a[10].mudarCoord(largura/20*13 + marginX, altura/12*6 + marginY);
    a[11].mudarCoord(largura/20*13 + marginX, altura/12*7 + marginY);
    a[12].mudarCoord(largura/20*13 + marginX, altura/12*8 + marginY);
    a[13].mudarCoord(largura/20*13 + marginX, altura/12*9 + marginY);
    a[14].mudarCoord(largura/20*13 + marginX, altura/12*10 + marginY);
    a[15].mudarCoord(largura/20*14 + marginX, altura/12*10 + marginY);

    t[0].mudarCoord(largura/20*15 + marginX, altura/12*5 + marginY);
    t[1].mudarCoord(largura/20*16 + marginX, altura/12*4 + marginY);
    t[2].mudarCoord(largura/20*16 + marginX, altura/12*5 + marginY);
    t[3].mudarCoord(largura/20*16 + marginX, altura/12*7 + marginY);
    t[4].mudarCoord(largura/20*16 + marginX, altura/12*8 + marginY);
    t[5].mudarCoord(largura/20*17 + marginX, altura/12*2 + marginY);
    t[6].mudarCoord(largura/20*17 + marginX, altura/12*3 + marginY);
    t[7].mudarCoord(largura/20*17 + marginX, altura/12*5 + marginY);
    t[8].mudarCoord(largura/20*17 + marginX, altura/12*6 + marginY);
    t[9].mudarCoord(largura/20*17 + marginX, altura/12*9 + marginY);
    t[10].mudarCoord(largura/20*17 + marginX, altura/12*10 + marginY);
    t[11].mudarCoord(largura/20*18 + marginX, altura/12*5 + marginY);
}


class Peca {
    // 1=superior esquerdo
    // 2=superior direito
    // 3=inferior esquerdo
    // 4=inferior direito

    constructor(f, x, y, n) {
        this.f = f;
        if (f === 1) {
            this.circulo = circulo1;
            this.triangulo = triangulo1;
        } else if (f === 2) {
            this.circulo = circulo2;
            this.triangulo = triangulo2;
        } else if (f === 3) {
            this.circulo = circulo3;
            this.triangulo = triangulo3;
        } else if (f === 4) {
            this.circulo = circulo4;
            this.triangulo = triangulo4;
        }
        this.quadrado = quadrado;
        this.x = x;
        this.y = y;
        this.n = n;
    }

    desenhar() {
        if (this.n === 1) {
            image(this.triangulo, this.x, this.y, largura/20, altura/12);
        }
        else if (this.n === 2) {
            image(this.circulo, this.x, this.y, largura/20, altura/12);
        }
        else if (this.n === 3) {
            image(this.quadrado, this.x, this.y, largura/20, altura/12);
        }
    }

    mudarCoord(x,y){
        this.x=x;
        this.y=y;
    }

    clicar() {
        if (this.n === 2) {
            if (this.f === 1) {
                if (dist(this.x, this.y, mouseX, mouseY) <= largura/20+20 && mouseX >= this.x-20 && mouseX <= this.x + largura/20+20 && mouseY >= this.y-20 && mouseY <= this.y + largura/20+20) {
                    this.n++;
                    if (this.n > 3) {
                        this.n = 1;
                    }
                }
            }
            else if (this.f === 2) {
                if (dist(this.x + 50, this.y, mouseX, mouseY) <= largura/20+20 && mouseX >= this.x-20 && mouseX <= this.x + largura/20+20 && mouseY >= this.y-20 && mouseY <= this.y + largura/20+20) {
                    this.n++;
                    if (this.n > 3) {
                        this.n = 1;
                    }
                }
            }
            else if (this.f === 3) {
                if (dist(this.x, this.y + 50, mouseX, mouseY) <= largura/20+20 && mouseX >= this.x-20 && mouseX <= this.x + largura/20+20 && mouseY >= this.y-20 && mouseY <= this.y + largura/20+20) {
                    this.n++;
                    if (this.n > 3) {
                        this.n = 1;
                    }
                }
            }
            else if (this.f === 4) {
                if (dist(this.x + 50, this.y + 50, mouseX, mouseY) <= largura/20+20 && mouseX >= this.x-20 && mouseX <= this.x + largura/20+20 && mouseY >= this.y-20 && mouseY <= this.y + largura/20+20) {
                    this.n++;
                    if (this.n > 3) {
                        this.n = 1;
                    }
                }
            }
        }
        else if (this.n === 3 || this.n === 1) {
            if (mouseX >= this.x-20 && mouseX <= this.x + largura/20+20 && mouseY >= this.y-20 && mouseY <= this.y + largura/20+20) {
                this.n++;
                if (this.n > 3) {
                    this.n = 1;
                }
            }
        }
    }
}