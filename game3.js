var ctx;
var canvas;
var raqx = 400;
var radio = 10; // Radio del círculo
var bolax = 100;
var bolay = 150;
var ancho, alto;
var limiteder, limiteizq, limiteup, limitedown;
var dx = 3;
var dy = 3;
var velo = 25;
var puntos = 0;
var id;

canvas = document.getElementById('gameCanvas');
if (canvas && canvas.getContext){
    ctx = canvas.getContext('2d');
    if (ctx){
        gameCanvas.height = 600;
        ancho = canvas.width;
        alto = canvas.height;
        limiteder = ancho - radio;
        limiteizq = radio; // Se cambia el límite izquierdo para que no rebote fuera del canvas
        limiteup = radio;
        limitedown = alto - radio;
        ctx.lineWidth = radio;
        ctx.fillStyle = 'black'; // Color del círculo
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && raqx > 0) {
                raqx -= 20;
            }
            if (e.key === 'ArrowRight' && raqx < canvas.width - 80) {
                raqx += 20;
            }
        });
        beep();
        mueve();
        id = setInterval(mueve, velo);
    } else {
        alert('Error en el código o en ctx');
    }
}

function mueve() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath(); // Iniciar trazado para el círculo
  ctx.arc(bolax, bolay, radio, 0, Math.PI * 2); // Dibujar el círculo
  ctx.fill(); // Rellenar el círculo
  raqueta();
  dibujapuntos();
  verifica();
  bolax += dx;
  bolay += dy;
}

function beep() {
  var beep = document.getElementById("beepSound");
  // beep.play();
}

function raqueta() {
  ctx.lineWidth = 10;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(raqx, 550);
  ctx.lineTo(raqx + 80, 550);
  ctx.stroke();
}

function verifica() {
  var nbolax = bolax + dx;
  var nbolay = bolay + dy;

  if (nbolax + radio > limiteder || nbolax - radio < limiteizq) {
    dx *= -1;
  }

    if (nbolay - radio < limiteup) {
        dy *= -1;
    } else if (nbolay + radio >= 550 && nbolay + radio <= 560 && nbolax + radio >= raqx && nbolax - radio <= raqx + 80) {
        dy *= -1;
        puntos++;
    } else if (nbolay + radio > limitedown) {
        
        window.alert("GAME OVER. Puntos: " + puntos);
        clearInterval(id);
        bolax = 100;
        bolay = 150;
        puntos = 0;
        raqx = 400;
        location.reload();
        
    }

  bolax += dx;
  bolay += dy;

  if (bolax + radio > limiteder) bolax = limiteder - radio;
  if (bolax - radio < limiteizq) bolax = limiteizq + radio;
}

function dibujapuntos() {
  ctx.fillText("Puntuación: " + puntos, 10, 10);
}
