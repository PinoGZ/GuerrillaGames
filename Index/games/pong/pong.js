//PONG BIEN
var ctx;
var bola = new Image();
var canvas;
var raqx = 400;
var radio = 15;
var bolax = 100;
var bolay = 150;
var ancho, alto;
var limiteder, limiteizq, limiteup, limitedown;
var dx = 4;
var dy = 4;
var velo = 25;

var puntos = 0;
window.onload = function () {

    canvas = document.getElementById('canvasPong');
    bola.src = 'media/bola.png';
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            ancho = canvas.width;
            alto = canvas.height;
            limiteder = ancho - radio;
            limiteizq = -3;
            //calcular limites arriba y abajo
            limiteup = -3;
            limitedown = alto - radio;
            ctx.lineWidth = radio;
            ctx.fillStyle = 'red';
            document.addEventListener('keydown', function (e) {
                if (e.key == 'ArrowLeft') {
                    console.log('pulsa iz');
                    if (raqx > 0) {
                        raqx = raqx - 20;
                    }
                }
            });
            document.addEventListener('keydown', function (e) {
                if (e.key == 'ArrowRight') {
                    console.log(raqx);
                    if (raqx < 720) {
                        raqx = raqx + 20;
                        raqueta();
                    }
                }
            });
            beep();
            mueve();
            setInterval(mueve, velo);


        }
        else {
            alert('error en el codigo o en ctx');
        }
    }
}

function mueve() {
    clearInterval();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(bola, bolax, bolay, radio * 2, radio * 2);
    verifica();
    bolax += dx;
    bolay += dy;
    raqueta();
    dibujaPuntos();
}

function beep() {
    var beep = document.getElementById('beepSound');
    //beep.play();
}

function raqueta() {
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(raqx, 550);
    ctx.lineTo(raqx + 80, 550);
    ctx.stroke();

}

function verifica() {
    var nbolax = bolax + dx;
    var nbolay = bolay + dy;

    if (nbolax > limiteder) {
        dx *= -1;
        nbolax = limiteder;
    }
    if (nbolax <= limiteizq) {
        dx *= -1;
        nbolax = limiteizq;
    }
    if (nbolay >= 515 && nbolax >= raqx && nbolax <= raqx + 75) {
        dy *= -1;
        nbolay = 515;
        puntos += 1;
        beep();
    }
    if (nbolay <= limiteup) {

        dy *= -1;

        nbolay = limiteup;
    }
    if (nbolay > limitedown) {
        puntos = 0
    }

    bolax = nbolax;
    bolay = nbolay;

}

function dibujaPuntos() {


    ctx.font = "3em Verdana";
    ctx.fillStyle = "blue";


    ctx.fillText(puntos, 30, 40);
    ctx.strokeText(puntos, 30, 40);







}