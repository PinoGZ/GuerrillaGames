const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

window.onload = function () {
    canvas = document.getElementById("canvas1");
    if (canvas && canvas.getContext) {
      ctx = canvas.getContext("2d");
      if (ctx) {
        drawMonkey();
      }
function drawMonkey() {
    // Body
    ctx.beginPath();
    ctx.arc(400, 300, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#8B4513';
    ctx.fill();
    ctx.closePath();

    // Head
    ctx.beginPath();
    ctx.arc(400, 240, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#8B4513';
    ctx.fill();
    ctx.closePath();

    // Eyes
    ctx.beginPath();
    ctx.arc(385, 230, 5, 0, Math.PI * 2);
    ctx.arc(415, 230, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    // Mouth
    ctx.beginPath();
    ctx.arc(400, 245, 10, 0, Math.PI, false);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // Arms
    ctx.beginPath();
    ctx.moveTo(370, 300);
    ctx.lineTo(430, 300);
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 20;
    ctx.stroke();
    ctx.closePath();

    // Tail
    ctx.beginPath();
    ctx.moveTo(450, 300);
    ctx.lineTo(480, 320);
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();
}

function drawHeart() {
    ctx.beginPath();
    ctx.moveTo(400, 340);
    ctx.bezierCurveTo(380, 380, 320, 420, 400, 460);
    ctx.bezierCurveTo(480, 420, 420, 380, 400, 340);
    ctx.fillStyle = '#FF0000';
    ctx.fill();
    ctx.closePath();
}

canvas.addEventListener('click', (event) => {
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;

    if (ctx.isPointInPath(mouseX, mouseY)) {
        drawDeadMonkey();
    }
});

function drawDeadMonkey() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMonkey();
    ctx.font = '30px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText('Monkey Shot!', 320, 50);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMonkey();
    drawHeart();
    requestAnimationFrame(gameLoop);
}
gameLoop();}}
