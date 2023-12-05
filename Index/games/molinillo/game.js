window.onload = function () {
    const canvas = document.getElementById("game");
    const context = canvas.getContext("2d");

    const windmill = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        bladeLength: 80,
        bladeWidth: 10,
        supportHeight: 120,
        supportWidth: 20,
        rotation: 0
    };

    drawWindmill(context, windmill);

    function drawWindmill(ctx, windmill) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Soporte del molinillo
        ctx.fillStyle = "#a86";
        ctx.fillRect(windmill.x - windmill.supportWidth / 2, windmill.y, windmill.supportWidth, windmill.supportHeight);

        // Aspas del molinillo
        drawBlade(ctx, windmill.x, windmill.y, windmill.bladeLength, windmill.bladeWidth, windmill.rotation, getRandomColor());
        drawBlade(ctx, windmill.x, windmill.y, windmill.bladeLength, windmill.bladeWidth, windmill.rotation + (Math.PI / 2), getRandomColor());
        drawBlade(ctx, windmill.x, windmill.y, windmill.bladeLength, windmill.bladeWidth, windmill.rotation + Math.PI, getRandomColor());
        drawBlade(ctx, windmill.x, windmill.y, windmill.bladeLength, windmill.bladeWidth, windmill.rotation + (3 * Math.PI / 2), getRandomColor());
    }

    function drawBlade(ctx, x, y, length, width, rotation, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.fillStyle = color;
        ctx.fillRect(-width / 2, 0, width, length);
        ctx.restore();
    }
    
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            
        }
        return color;
        
    }

    function animate() {
        windmill.rotation += 0.02;
        drawWindmill(context, windmill);
        requestAnimationFrame(animate);
    }

    animate();
};
