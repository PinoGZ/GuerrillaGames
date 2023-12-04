const colors = ["rgba(255,0,0,0.4)", "rgba(0,0,255,0.4)", "rgba(0,128,0,0.4)", "rgba(255,255,0,0.4)", "rgba(128,0,128,0.4)", "rgba(255,165,0,0.4)", "rgba(255,192,203,0.4)", "rgba(139,69,19,0.4)", "rgba(0,128,128,0.4)", "rgba(128,128,128,0.4)", "rgba(0,255,0,0.4)", "rgba(0,255,255,0.4)", "rgba(75,0,130,0.4)", "rgba(255,0,255,0.4)", "rgba(238,130,238,0.4)", "rgba(0,206,209,0.4)", "rgba(230,230,250,0.4)", "rgba(128,0,0,0.4)", "rgba(128,128,0,0.4)", "rgba(255,127,80,0.4)", "rgba(0,0,128,0.4)", "rgba(192,192,192,0.4)", "rgba(255,215,0,0.4)", "rgba(221,160,221,0.4)", "rgba(0,128,128,0.4)", "rgba(112,128,144,0.4)", "rgba(205,92,92,0.4)", "rgba(34,139,34,0.4)", "rgba(70,130,180,0.4)", "rgba(160,82,45,0.4)", "rgba(189,183,107,0.4)", "rgba(220,20,60,0.4)", "rgba(255,20,147,0.4)", "rgba(30,144,255,0.4)", "rgba(178,34,34,0.4)", "rgba(255,105,180,0.4)", "rgba(0,255,127,0.4)", "rgba(70,130,180,0.4)", "rgba(178,34,34,0.4)", "rgba(255,99,71,0.4)"];
let speed = 1000;
let context;
const canvas = document.getElementById('gameCanvas');

function dibujatoh() {
    // Ajustes de las lineas
    context.lineWidth = 5;
    context.strokeStyle = 'black';

    let color = colors[Math.floor(Math.random() * colors.length)];

    //Cuadrao 1
    context.fillStyle = color;
    context.beginPath();
    context.rect(0, 0, 150, 150);
    context.fill();
    context.stroke();
    //Cuadrao 2

    color = colors[Math.floor(Math.random() * colors.length)]
    context.fillStyle = color;
    context.beginPath();
    context.rect(75, 75, 150, 150);
    context.fill();
    context.stroke();
    //Cuadrao 3
    color = colors[Math.floor(Math.random() * colors.length)]
    context.fillStyle = color;
    context.beginPath();
    context.rect(150, 150, 150, 150);
    context.fill();
    context.stroke();
    //Cuadrao 4
    color = colors[Math.floor(Math.random() * colors.length)]
    context.fillStyle = color;
    context.beginPath();
    context.rect(225, 225, 150, 150);
    context.fill();
    context.stroke();
    //Cuadrao 5
    color = colors[Math.floor(Math.random() * colors.length)]
    context.fillStyle = color;
    context.beginPath();
    context.rect(300, 300, 150, 150);
    context.fill();
    context.stroke();
    //Cuadrao 6
    color = colors[Math.floor(Math.random() * colors.length)]
    context.fillStyle = color;
    context.beginPath();
    context.rect(375, 375, 150, 150);
    context.fill();
    context.stroke();
    //Cuadrao 7
    color = colors[Math.floor(Math.random() * colors.length)]
    context.fillStyle = color;
    context.beginPath();
    context.rect(450, 450, 150, 150);
    context.fill();
    context.stroke();
}

let caca = setInterval(dibujatoh, speed);

    if (canvas && canvas.getContext('2d')) {
        context = canvas.getContext('2d');

        if (context) {
            // Listen for changes in the slider value
            document.getElementById("velocidad").addEventListener("input", function () {
                // Clear the previous interval
                clearInterval(caca);
                // Update the speed based on the slider value
                speed = parseInt(this.value);
                console.log(speed);
                // Set a new interval
                caca = setInterval(dibujatoh, speed);
            });
        }
    }

