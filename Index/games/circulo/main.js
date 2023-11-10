let radiog;
let radiop;
let ancho;
let alto;
let centroalto;
let centroancho;
let ctx;
let peqx;
let peqy;
let canvas;
let angle = 0;
var speedValue;



window.onload = function() {
  canvas = document.getElementById('canvas1');
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext('2d');
    angle = Math.random() * (10 - 1) + 1;
    speedValue = Math.random() * (10 - 1) + 1;
    if(ctx){
      animacion();
    }
  }
}

function circuloBig() {
  alto = canvas.height;
  centroalto = alto / 2;
  ancho = canvas.width;
  centroancho = ancho / 2;
  radiog = ancho / 3;
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(centroancho, centroalto, radiog, 0, 2 * Math.PI, true);
  ctx.stroke();
}

function circuloLittle() {
  radiop = ancho / 10; 
  peqx = (centroancho + 185 * Math.cos(angle)); 
  peqy = (centroalto + 185 * Math.sin(angle));
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'red';
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(peqx, peqy, radiop, 0, 2 * Math.PI);
  ctx.stroke();
}

function animacion() {
  speedValue = document.getElementById("velochidadedefranchesco").value;
  angle += 0.01 * speedValue;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circuloBig();
  circuloLittle();
  requestAnimationFrame(animacion);
}
