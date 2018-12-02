let d = [];
let a = [];
let t = [];

let circulo1;
let triangulo1;
let circulo2;
let triangulo2;
let circulo3;
let triangulo3;
let circulo4;
let triangulo4;
let quadrado;

function preload(){
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

function setup(){
    var cv = createCanvas(1000,600);
    cv.parent("processingcanvas");

    //inicialização letra d
    d[0] = new Peca (4, 50, 350, 1);
    d[1] = new Peca (2, 50, 400, 1);
    d[2] = new Peca (4, 100, 300, 1);
    d[3] = new Peca (2, 100, 450, 1);
    d[4] = new Peca (4, 150, 250, 1);
    d[5] = new Peca (2, 150, 500, 1);
    d[6] = new Peca (3, 200, 250, 1);
    d[7] = new Peca (1, 200, 500, 1);
    d[8] = new Peca (3, 250, 300, 1);
    d[9] = new Peca (1, 250, 450, 1);
    d[10] = new Peca (3, 300, 50, 1);
    d[11] = new Peca (1, 300, 100, 1);
    d[12] = new Peca (4, 250, 150, 1);
    d[13] = new Peca (2, 250, 200, 1);
    d[14] = new Peca (3, 300, 250, 1);
    d[15] = new Peca (1, 300, 300, 1);
    d[16] = new Peca (3, 300, 350, 1);
    d[17] = new Peca (1, 300, 400, 1);
    d[18] = new Peca (3, 300, 450, 1);
    d[19] = new Peca (2, 300, 500, 1);

    //inicialização letra a
    a[0] = new Peca (4, 400, 350, 2);
    a[1] = new Peca (2, 400, 400, 2);
    a[2] = new Peca (4, 450, 300, 2);
    a[3] = new Peca (2, 450, 450, 2);
    a[4] = new Peca (4, 500, 250, 2);
    a[5] = new Peca (2, 500, 500, 2);
    a[6] = new Peca (3, 550, 250, 2);
    a[7] = new Peca (1, 550, 500, 2);
    a[8] = new Peca (3, 600, 300, 2);
    a[9] = new Peca (1, 600, 450, 2);
    a[10] = new Peca (1, 650, 300, 2);
    a[11] = new Peca (3, 650, 350, 2);
    a[12] = new Peca (1, 650, 400, 2);
    a[13] = new Peca (3, 650, 450, 2);
    a[14] = new Peca (2, 650, 500, 2);
    a[15] = new Peca (1, 700, 500, 2);

    //inicialização letra t
    t[0] = new Peca (2, 750, 250, 3);
    t[1] = new Peca (4, 800, 200, 3);
    t[2] = new Peca (1, 800, 250, 3);
    t[3] = new Peca (4, 800, 350, 3);
    t[4] = new Peca (2, 800, 400, 3);
    t[5] = new Peca (3, 850, 100, 3);
    t[6] = new Peca (1, 850, 150, 3);
    t[7] = new Peca (4, 850, 250, 3);
    t[8] = new Peca (1, 850, 300, 3);
    t[9] = new Peca (3, 850, 450, 3);
    t[10] = new Peca (2, 850, 500, 3);
    t[11] = new Peca (3, 900, 250, 3);
}

function draw(){
    background(255);
    for(let i=0; i<d.length; i++){
        d[i].desenhar();
    }
    for (let i=0; i<a.length; i++){
        a[i].desenhar();
    }
    for(let i=0; i<t.length; i++){
        t[i].desenhar();
    }
}

function mousePressed(){
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


class Peca {
    // 1=superior esquerdo
    // 2=superior direito
    // 3=inferior esquerdo
    // 4=inferior direito

    constructor (f, x, y, n) {
        this.f=f;
        if (f===1) {
            this.circulo = circulo1;
            this.triangulo = triangulo1;
        }
        else if (f===2) {
            this.circulo = circulo2;
            this.triangulo = triangulo2;
        }
        else if (f===3) {
            this.circulo = circulo3;
            this.triangulo = triangulo3;
        }
        else if (f===4) {
            this.circulo = circulo4;
            this.triangulo = triangulo4;
        }
        this.quadrado = quadrado;
        this.x=x;
        this.y=y;
        this.n=n;
    }

    desenhar() {
        if (this.n===1) {
            image(this.triangulo, this.x, this.y);
        } else if (this.n===2) {
            image(this.circulo, this.x, this.y);
        } else if (this.n===3) {
            image(this.quadrado, this.x, this.y);
        }
    }

    clicar() {
        if(this.n===1){
            if (this.f===1) {
                if (mouseX>=this.x && mouseX<=this.x+50 && mouseY>=this.y && mouseY<=this.y+50) {
                    this.n++;
                    if (this.n>3) {
                        this.n=1;
                    }
                }
            }
            else if (this.f===2) {
                if (mouseX>=this.x && mouseX<=this.x+50 && mouseY>=this.y && mouseY<=this.y+50) {
                    this.n++;
                    if (this.n>3) {
                        this.n=1;
                    }
                }
            }
            else if (this.f===3) {
                if (mouseX >= this.x && mouseX<=this.x+50 && mouseY>=this.y && mouseY<=this.y+50) {
                    this.n++;
                    if (this.n>3) {
                        this.n=1;
                    }
                }
            }
            else if (this.f===4) {
                if (mouseX>=this.x && mouseX<=this.x+50 && mouseY>=this.y && mouseY<=this.y+50) {
                    this.n++;
                    if (this.n>3) {
                        this.n=1;
                    }
                }
            }
        }

        else if (this.n===2) {
            if (this.f===1) {
                if (dist(this.x, this.y, mouseX, mouseY)<=50 && mouseX>=this.x && mouseX<=this.x+50 && mouseY>=this.y && mouseY<=this.y+50) {
                    this.n++;
                    if (this.n>3) {
                        this.n=1;
                    }
                }
            }
            else if (this.f===2) {
                if (dist(this.x+50, this.y, mouseX, mouseY)<=50 && mouseX>=this.x && mouseX<=this.x+50 && mouseY>=this.y && mouseY<=this.y+50) {
                    this.n++;
                    if (this.n>3) {
                        this.n=1;
                    }
                }
            }
            else if (this.f===3) {
                if (dist(this.x, this.y+50, mouseX, mouseY)<=50 && mouseX>=this.x && mouseX<=this.x+50 && mouseY>=this.y && mouseY<=this.y+50) {
                    this.n++;
                    if (this.n>3) {
                        this.n=1;
                    }
                }
            }
            else if (this.f===4) {
                if (dist(this.x+50, this.y+50, mouseX, mouseY)<=50 && mouseX>=this.x && mouseX<=this.x+50 && mouseY>=this.y && mouseY<=this.y+50) {
                    this.n++;
                    if (this.n>3) {
                        this.n=1;
                    }
                }
            }
        }

        else if (this.n===3) {
            if (mouseX>=this.x && mouseX<=this.x+50 && mouseY>=this.y && mouseY<=this.y+50) {
                this.n++;
                if (this.n>3) {
                    this.n=1;
                }
            }
        }
    }
}