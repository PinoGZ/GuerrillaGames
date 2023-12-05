var ctx;
var canvas;
var smallCircleRadius = 80;
var bigCircleRadius = 200;
var angle = 0;
var centerX;
var centerY;
var speed = 5;



window.onload = function () {
canvas = document.getElementById("game");
canvas.width = 1000;
canvas.height = 800
const speeder = document.createElement('input');
speeder.value = 5;
speeder.type = "range";
speeder.min = 0;
speeder.max = 10;


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

speeder.addEventListener('slider', function () {
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
}