function drawMonkey() {
    // Head
    ctx.beginPath();
    ctx.arc(200, 200, 80, 0, Math.PI * 2);
    ctx.fillStyle = '#8B4513';
    ctx.fill();
    ctx.closePath();

    // Eyes
    ctx.beginPath();
    ctx.arc(170, 180, 15, 0, Math.PI * 2);
    ctx.arc(230, 180, 15, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    // Pupils
    ctx.beginPath();
    ctx.arc(170, 180, 5, 0, Math.PI * 2);
    ctx.arc(230, 180, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    // Nose
    ctx.beginPath();
    ctx.arc(200, 200, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#FF4500';
    ctx.fill();
    ctx.closePath();

    // Mouth
    ctx.beginPath();
    ctx.arc(200, 220, 40, 0, Math.PI, false);
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();

    // Body
    ctx.beginPath();
    ctx.arc(200, 340, 100, 0, Math.PI * 2);
    ctx.fillStyle = '#8B4513';
    ctx.fill();
    ctx.closePath();

    // Arms
    ctx.beginPath();
    ctx.moveTo(100, 340);
    ctx.lineTo(300, 340);
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 30;
    ctx.stroke();
    ctx.closePath();
}
