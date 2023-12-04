var ctx;
var canvas;
var smallCircleRadius = 80;
var bigCircleRadius = 200;
var angle = 0;
var centerX;
var centerY;
var speed = 5;

canvas = document.getElementById("gameCanvas");
canvas.width = 1000;
canvas.height = 800
const speeder = document.createElement('input');
speeder.value = 5;
speeder.type = "range";
speeder.min = 0;
speeder.max = 10;
speeder.setAttribute('class', 'slider');
speeder.setAttribute('id', 'speedRange');
const text = document.createElement('p');
text.textContent = 'Velocidad: ';
const span = document.createElement('span');
span.setAttribute('id', 'speedValue');
span.textContent = "5";
text.appendChild(span);
document.body.appendChild(text);
document.body.appendChild(speeder);

if (canvas && canvas.getContext) {
  ctx = canvas.getContext("2d");
  var height = canvas.height;
  var width = canvas.width;
  centerX = width / 2;
  centerY = height / 2;
  animate();
}

function dibujarCirculo(x, y, radio, borderColor, fillStyle) {
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = fillStyle;
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.arc(x, y, radio, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

speeder.addEventListener('input', function () {
  speed = parseInt(this.value);
  document.getElementById('speedValue').textContent = speed;
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var smallCircleX =
    centerX + (bigCircleRadius - smallCircleRadius) * Math.cos(angle);
  var smallCircleY =
    centerY + (bigCircleRadius - smallCircleRadius) * Math.sin(angle);
  dibujarCirculo(centerX, centerY, bigCircleRadius, "#000", "#fff");
  dibujarCirculo(smallCircleX, smallCircleY, smallCircleRadius, "#268540", "#fff");

  angle += 0.01 * speed;
  requestAnimationFrame(animate);
}
