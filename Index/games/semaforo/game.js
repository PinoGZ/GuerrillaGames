let context;
let red = false;
let yellow = false;
let green = false;

    const canvas = document.getElementById("game");
    if (canvas && canvas.getContext('2d')) {
        context = canvas.getContext("2d");
        if (context) {
            canvas.width = 800;
            canvas.height = 600;
            //semaforo
            context.lineJoin = 'round';
            context.strokeStyle = 'black';
            context.fillStyle = 'black';
            context.lineWidth = 5;
            context.beginPath();
            context.rect(350, 200, 100, 200);
            context.fill();
            context.stroke();

            // soporte semaforo

            context.strokeStyle = 'black';
            context.fillStyle = 'black';
            context.lineWidth = 5;
            context.beginPath();
            context.rect(390, 400, 25, 80);
            context.fill();
            context.stroke();
            red = true;


            setInterval(animate, 1000);



        }



    }

    function rojo() {

        // rojo
        context.strokeStyle = 'red';
        context.fillStyle = 'red';
        context.lineWidth = 5;
        context.beginPath();
        context.arc(400, 230, 20, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }


    function amarillo() {

        // amarillo
        context.strokeStyle = 'yellow';
        context.fillStyle = 'yellow';
        context.lineWidth = 5;
        context.beginPath();
        context.arc(400, 290, 20, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }


    function verde() {
        //verde
        context.strokeStyle = 'green';
        context.fillStyle = 'green';
        context.lineWidth = 5;
        context.beginPath();
        context.arc(400, 350, 20, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }

    function animate() {
        console.log("animate");
        context.clearRect(0, 0, canvas.width, canvas.height);
        //semaforo
        context.lineJoin = 'round';
        context.strokeStyle = 'black';
        context.fillStyle = 'black';
        context.lineWidth = 5;
        context.beginPath();
        context.rect(350, 200, 100, 200);
        context.fill();
        context.stroke();

        // soporte semaforo

        context.strokeStyle = 'black';
        context.fillStyle = 'black';
        context.lineWidth = 5;
        context.beginPath();
        context.rect(390, 400, 25, 80);
        context.fill();
        context.stroke();

        if (red) {

            let intervalRed = setInterval(rojo, 1000);
            setTimeout(function () {
                clearInterval(intervalRed);
                red = false;
                green = true;
            }, 2000);
            console.log("entro timeout");

        } else if (green) {
            console.log("entro verde");

            let intervalGreen = setInterval(verde, 1000);
            setTimeout(function () {
                clearInterval(intervalGreen);
                yellow=true;
                green = false;
                console.log("entro timeout");
            }, 2000);


        } else if (yellow) {
            console.log("yellow");
            let intervalYellow = setInterval(amarillo, 1000);
            setTimeout(function(){
                clearInterval(intervalYellow);
                red = true;
                yellow=false;
            },2000);

        }

    }
