var ctx;
var canvas;
var encendido = true;
var derecha = false;
window.onload = function () {
    canvas = document.getElementById('canvas01');

    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            luzIzquierda();
            setInterval(parpadeo, 3000);
        }
        else {
            alert('error en el codigo o en ctx');
        }
    }
}

function luzIzquierda() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
    ctx.fillStyle = "blue";
    ctx.roundRect(350, 550, 150, 30, [5]);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "square";
    ctx.fillStyle = "red";
    ctx.moveTo(360, 550);
    ctx.lineTo(490, 550);
    ctx.lineTo(480, 450);
    ctx.lineTo(370, 450);
    ctx.lineTo(360, 550);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(370, 450);
    ctx.lineTo(480, 450);
    ctx.lineTo(470, 350);
    ctx.lineTo(380, 350);
    ctx.lineTo(370, 450);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.moveTo(380, 350);
    ctx.lineTo(470, 350);
    ctx.lineTo(460, 250);
    ctx.lineTo(390, 250);
    ctx.lineTo(380, 350);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(390, 250);
    ctx.lineTo(460, 250);
    ctx.lineTo(450, 150);
    ctx.lineTo(400, 150);
    ctx.lineTo(390, 250);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.roundRect(390, 140, 70, 10, [2.5]);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.moveTo(400, 140);
    ctx.lineTo(450, 140);
    ctx.lineTo(450, 100);
    ctx.lineTo(400, 100);
    ctx.lineTo(400, 140);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.moveTo(390, 100);
    ctx.lineTo(460, 100);
    ctx.lineTo(425, 70);
    ctx.lineTo(390, 100);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    var gradiente = ctx.createLinearGradient(450, 102, 750, 102, 750, 450, 450, 130);
    gradiente.addColorStop(0, 'yellow');
    gradiente.addColorStop(0.80, 'white');
    ctx.fillStyle = gradiente;
    ctx.strokeStyle = "white";
    ctx.moveTo(451, 102);
    ctx.lineTo(750, 102);
    ctx.lineTo(750, 450);
    ctx.lineTo(451, 130);
    ctx.fill();
    ctx.stroke();
}

function sinLuz() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
    ctx.fillStyle = "blue";
    ctx.roundRect(350, 550, 150, 30, [5]);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "square";
    ctx.fillStyle = "red";
    ctx.moveTo(360, 550);
    ctx.lineTo(490, 550);
    ctx.lineTo(480, 450);
    ctx.lineTo(370, 450);
    ctx.lineTo(360, 550);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(370, 450);
    ctx.lineTo(480, 450);
    ctx.lineTo(470, 350);
    ctx.lineTo(380, 350);
    ctx.lineTo(370, 450);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.moveTo(380, 350);
    ctx.lineTo(470, 350);
    ctx.lineTo(460, 250);
    ctx.lineTo(390, 250);
    ctx.lineTo(380, 350);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(390, 250);
    ctx.lineTo(460, 250);
    ctx.lineTo(450, 150);
    ctx.lineTo(400, 150);
    ctx.lineTo(390, 250);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.roundRect(390, 140, 70, 10, [2.5]);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(400, 140);
    ctx.lineTo(450, 140);
    ctx.lineTo(450, 100);
    ctx.lineTo(400, 100);
    ctx.lineTo(400, 140);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.moveTo(390, 100);
    ctx.lineTo(460, 100);
    ctx.lineTo(425, 70);
    ctx.lineTo(390, 100);
    ctx.fill();
    ctx.stroke();
}

function luzDerecha() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
    ctx.fillStyle = "blue";
    ctx.roundRect(350, 550, 150, 30, [5]);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.lineCap = "square";
    ctx.fillStyle = "red";
    ctx.moveTo(360, 550);
    ctx.lineTo(490, 550);
    ctx.lineTo(480, 450);
    ctx.lineTo(370, 450);
    ctx.lineTo(360, 550);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(370, 450);
    ctx.lineTo(480, 450);
    ctx.lineTo(470, 350);
    ctx.lineTo(380, 350);
    ctx.lineTo(370, 450);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.moveTo(380, 350);
    ctx.lineTo(470, 350);
    ctx.lineTo(460, 250);
    ctx.lineTo(390, 250);
    ctx.lineTo(380, 350);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(390, 250);
    ctx.lineTo(460, 250);
    ctx.lineTo(450, 150);
    ctx.lineTo(400, 150);
    ctx.lineTo(390, 250);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.roundRect(390, 140, 70, 10, [2.5]);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.moveTo(400, 140);
    ctx.lineTo(450, 140);
    ctx.lineTo(450, 100);
    ctx.lineTo(400, 100);
    ctx.lineTo(400, 140);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.moveTo(390, 100);
    ctx.lineTo(460, 100);
    ctx.lineTo(425, 70);
    ctx.lineTo(390, 100);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    var gradiente = ctx.createLinearGradient(400, 102, 50, 102, 50, 450, 400, 130);
    gradiente.addColorStop(0, 'yellow');
    gradiente.addColorStop(0.80, 'white');
    ctx.fillStyle = gradiente;
    ctx.strokeStyle = "white";
    ctx.moveTo(399, 102);
    ctx.lineTo(50, 102);
    ctx.lineTo(50, 450);
    ctx.lineTo(399, 130);
    ctx.fill();
    ctx.stroke();
}

function parpadeo() {
    if (encendido) {
        sinLuz();
        encendido = false;
    }
    else {
        if (derecha) {
            luzIzquierda();
            encendido = true;
            derecha = false;
        }
        else {
            luzDerecha();
            encendido = true;
            derecha = true;
        }

    }
}

