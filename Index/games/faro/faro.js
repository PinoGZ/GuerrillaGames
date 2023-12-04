var context;
let lightOn = true;

window.onload = function () {
    canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        context = canvas.getContext('2d');
        if (context) {
            let middleOfcontext = canvas.width / 2;
            context.lineWidth = 5;
            context.fillStyle = 'yellow';
            //linea central
            /*
            context.beginPath();
            context.lineTo(middleOfcontext, 100);
            context.lineTo(middleOfcontext, 500);
            context.stroke();*/

            //BASE
            context.lineWidth = 40;
            context.lineCap = 'round';
            context.strokeStyle = 'blue';

            context.beginPath();
            context.lineTo(middleOfcontext - 100, 500);
            context.lineTo(middleOfcontext + 100, 500);


            context.stroke();

            //Primer poligono
            context.lineWidth = 5;
            context.lineCap = 'square';
            context.strokeStyle = 'black';

            context.beginPath();
            context.lineTo(middleOfcontext - 100, 479);
            context.lineTo(middleOfcontext - 90, 400);
            context.lineTo(middleOfcontext + 90, 400);
            context.lineTo(middleOfcontext + 100, 479);
            context.lineTo(middleOfcontext - 100, 479); //Este finaliza el poligono
            context.fillStyle = 'red';




            context.stroke();
            context.fill();

            //segundo polígono
            context.beginPath();
            context.lineTo(middleOfcontext - 90, 400);
            context.lineTo(middleOfcontext - 80, 320);
            context.lineTo(middleOfcontext + 80, 320);
            context.lineTo(middleOfcontext + 90, 400);
            context.lineTo(middleOfcontext - 90, 400);
            context.stroke();
            context.fillStyle = 'white';
            context.fill();

            //tercer polígono
            context.beginPath();
            context.lineTo(middleOfcontext - 80, 320);
            context.lineTo(middleOfcontext - 70, 240);
            context.lineTo(middleOfcontext + 70, 240);
            context.lineTo(middleOfcontext + 80, 320);
            context.lineTo(middleOfcontext - 80, 320);
            context.stroke();
            context.fillStyle = 'red';
            context.fill();

            //cuarto polígono
            context.beginPath();
            context.lineTo(middleOfcontext - 70, 240);
            context.lineTo(middleOfcontext - 60, 160);
            context.lineTo(middleOfcontext + 60, 160);
            context.lineTo(middleOfcontext + 70, 240);
            context.lineTo(middleOfcontext - 70, 240);
            context.stroke();
            context.fillStyle = 'white';
            context.fill();

            //base foco
            context.lineWidth = 20;
            context.lineCap = 'square';
            context.strokeStyle = 'blue';

            context.beginPath();
            context.lineTo(middleOfcontext - 65, 160);
            context.lineTo(middleOfcontext + 65, 160);
            context.stroke();

            //foco
            context.lineWidth = 5;
            context.lineCap = 'square';
            context.strokeStyle = 'black';

            context.beginPath();
            context.lineTo(middleOfcontext - 60, 150);
            context.lineTo(middleOfcontext + 60, 150);
            context.lineTo(middleOfcontext + 60, 90);
            context.lineTo(middleOfcontext - 60, 90);
            context.lineTo(middleOfcontext - 60, 150);

            context.stroke();
            context.fillStyle = 'yellow';
            context.fill();

            //Tejado


            context.beginPath();
            context.lineTo(middleOfcontext - 70, 90);
            context.lineTo(middleOfcontext + 70, 90);
            context.lineTo(middleOfcontext, 40);
            context.lineTo(middleOfcontext - 70, 90);
            context.lineTo(middleOfcontext + 60, 90);


            context.stroke();
            context.fillStyle = 'blue';
            context.fill();

            //gradiente
            context.lineWidth = 0.001;

            context.beginPath();
            context.moveTo(middleOfcontext + 60, 150);
            context.lineTo(middleOfcontext + 450, 350);
            context.lineTo(middleOfcontext + 450, 90);
            context.lineTo(middleOfcontext + 60, 90);
            context.lineTo(middleOfcontext + 60, 90);

            let gradient = context.createLinearGradient(middleOfcontext + 80, 90, middleOfcontext + 450, 350);
            gradient.addColorStop(0, 'yellow');
            gradient.addColorStop(1, 'white');

            context.fillStyle = gradient;
            context.fill();
            context.stroke();




            //Bucle encendido apagado


            setInterval(lightOnOff, 1000);




        }
        else {
            alert('error en el codigo o en context');
        }
    }
    function lightOnOff() {
        let middleOfcontext = canvas.width / 2;
        console.log(lightOn);
        if (lightOn == true) {
            context.lineWidth = 5;
            context.lineCap = 'square';
            context.strokeStyle = 'black';

            context.beginPath();
            context.lineTo(middleOfcontext - 60, 150);
            context.lineTo(middleOfcontext + 60, 150);
            context.lineTo(middleOfcontext + 60, 90);
            context.lineTo(middleOfcontext - 60, 90);
            context.lineTo(middleOfcontext - 60, 150);

            context.stroke();
            context.fillStyle = 'black';
            context.fill();

            //gradiente
            context.lineWidth = 0.001;

            context.beginPath();
            context.moveTo(middleOfcontext + 60, 150);
            context.lineTo(middleOfcontext + 450, 350);
            context.lineTo(middleOfcontext + 450, 90);
            context.lineTo(middleOfcontext + 60, 90);
            context.lineTo(middleOfcontext + 60, 90);

            let gradient = context.createLinearGradient(middleOfcontext + 80, 90, middleOfcontext + 450, 350);
            gradient.addColorStop(0, 'yellow');
            gradient.addColorStop(1, 'white');

            context.fillStyle = "white";
            context.fill();
            context.stroke();





            //base foco
            context.lineWidth = 20;
            context.lineCap = 'square';
            context.strokeStyle = 'blue';

            context.beginPath();
            context.lineTo(middleOfcontext - 65, 160);
            context.lineTo(middleOfcontext + 65, 160);
            context.stroke();


            lightOn = false;

        } else {
            context.lineWidth = 5;
            context.lineCap = 'square';
            context.strokeStyle = 'black';

            context.beginPath();
            context.lineTo(middleOfcontext - 60, 150);
            context.lineTo(middleOfcontext + 60, 150);
            context.lineTo(middleOfcontext + 60, 90);
            context.lineTo(middleOfcontext - 60, 90);
            context.lineTo(middleOfcontext - 60, 150);

            context.stroke();
            context.fillStyle = 'yellow';
            context.fill();

            //gradiente
            context.lineWidth = 0.001;

            context.beginPath();
            context.moveTo(middleOfcontext + 60, 150);
            context.lineTo(middleOfcontext + 450, 350);
            context.lineTo(middleOfcontext + 450, 90);
            context.lineTo(middleOfcontext + 60, 90);
            context.lineTo(middleOfcontext + 60, 90);

            let gradient = context.createLinearGradient(middleOfcontext + 80, 90, middleOfcontext + 450, 350);
            gradient.addColorStop(0, 'yellow');
            gradient.addColorStop(1, 'white');

            context.fillStyle = gradient;
            context.fill();
            context.stroke();



            context.stroke();

            lightOn = true;
        }

    };


}

