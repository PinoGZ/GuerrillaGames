var ctx;
var bicho = new Image();
var canvas;
var ancho;
var alto;
var posx;
var posy;
var puntos = 0;

canvas = document.getElementById("gameCanvas");
bicho.src = "img/bicho.ico";
bicho.addEventListener("load", nuevoBicho);
if (canvas && canvas.getContext) {
    ctx = canvas.getContext('2d');
    if (ctx) {
        gameCanvas.width = 1000;
        gameCanvas.height = 870;
        ancho = canvas.width;
        alto = canvas.height;
        canvas.addEventListener('click', clickEnCanvas); // Detectar clics en el canvas
    } else {
        alert('Error en el código');
    }
}

function nuevoBicho() {
  posx = getRandomNumber(0, ancho - bicho.width); // Ajustar para que el bicho no se salga del canvas
  posy = getRandomNumber(0, alto - bicho.height); // Ajustar para que el bicho no se salga del canvas
  ctx.clearRect(0, 0, ancho, alto); // Limpiar el canvas antes de dibujar el nuevo bicho
  ctx.drawImage(bicho, posx, posy);
}

function clickEnCanvas(event) {
  var x = event.clientX - canvas.getBoundingClientRect().left;
  var y = event.clientY - canvas.getBoundingClientRect().top;

  // Comprobar si el clic está dentro de los límites del bicho
  if (
    x > posx &&
    x < posx + bicho.width &&
    y > posy &&
    y < posy + bicho.height
  ) {
    puntos++;
    nuevoBicho(); // Dibujar un nuevo bicho cuando se haga clic en el actual
  }
  actualizarPuntos();
}

function actualizarPuntos() {
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Puntos: " + puntos, 10, 20);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
