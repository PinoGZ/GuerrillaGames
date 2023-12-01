let ctx;
let canvas;
let counter = 0;

function brazosAbajo() {
  //Borramos todo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Ajustes de las lineas
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  ctx.lineWidth = 5;

  //Cabeza
  ctx.beginPath();
  ctx.arc(100, 50, 30, 0, 2 * Math.PI);
  ctx.stroke();

  //Mas ajustes de las lineas
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";

  //Ojos
  ctx.beginPath();
  ctx.arc(90, 45, 3, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(110, 45, 3, 0, 2 * Math.PI);
  ctx.stroke();

  ///Sonrisa
  ctx.beginPath();
  ctx.arc(100, 50, 20, 1 * Math.PI, 2 * Math.PI, true);
  ctx.stroke();

  //Ajustes de las lineas
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  ctx.lineWidth = 5;

  //Cuerpo
  ctx.beginPath();
  ctx.lineTo(100, 80);
  ctx.lineTo(100, 200);
  ctx.stroke();

  //Brazos
  ctx.beginPath();
  ctx.lineTo(100, 120);
  ctx.lineTo(150, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineTo(100, 120);
  ctx.lineTo(50, 150);
  ctx.stroke();

  //Piernas
  ctx.beginPath();
  ctx.lineTo(100, 200);
  ctx.lineTo(150, 250);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineTo(100, 200);
  ctx.lineTo(50, 250);
  ctx.stroke();
}

function brazosArriba() {
  //Borramos todo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  console.log("Espacio pulsado");
  //volvemos a crear todo pero con los cambios hechos

  //Ajustes de las lineas
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  ctx.lineWidth = 5;

  //Cabeza
  ctx.beginPath();
  ctx.arc(100, 50, 30, 0, 2 * Math.PI);
  ctx.stroke();

  //Mas ajustes de las lineas
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";

  //Ojos
  ctx.beginPath();
  ctx.arc(90, 45, 3, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(110, 45, 3, 0, 2 * Math.PI);
  ctx.stroke();

  ///Sonrisa
  ctx.beginPath();
  ctx.arc(100, 60, 4, 0, 2 * Math.PI, true);
  ctx.stroke();

  //Ajustes de las lineas
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  ctx.lineWidth = 5;

  //Cuerpo
  ctx.beginPath();
  ctx.lineTo(100, 80);
  ctx.lineTo(100, 200);
  ctx.stroke();

  //Brazos
  ctx.beginPath();
  ctx.lineTo(100, 120);
  ctx.lineTo(150, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineTo(100, 120);
  ctx.lineTo(50, 100);
  ctx.stroke();

  //Piernas
  ctx.beginPath();
  ctx.lineTo(100, 200);
  ctx.lineTo(150, 250);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineTo(100, 200);
  ctx.lineTo(50, 250);
  ctx.stroke();

  //Brazos
  ctx.beginPath();
  ctx.lineTo(100, 120);
  ctx.lineTo(150, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineTo(100, 120);
  ctx.lineTo(50, 100);
  ctx.stroke();
}

canvas = document.getElementById("gameCanvas");

if (canvas && canvas.getContext) {
  ctx = canvas.getContext("2d");
  if (ctx) {
    canvas.height = 300;
    canvas. width = 250;
    brazosArriba();
    document.addEventListener("keydown", function (event) {
      counter++;
      if (event.key === "c") {
        if (counter % 2 == 0) {
          brazosArriba();
        } else {
          brazosAbajo();
        }
      }
    });

    let bajaBrazosAutomatico;
    let subeBrazosAutomatico;
    document.addEventListener("keydown", function (event) {
      if (event.key === "p") {
        bajaBrazosAutomatico = setInterval(brazosAbajo, 250);
        subeBrazosAutomatico = setInterval(brazosArriba, 500);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "o") {
        console.log("hola");
        clearInterval(bajaBrazosAutomatico);
        clearInterval(bajaBrazosAutomatico);
        //bajaBrazosAutomatico=setInterval(brazosAbajo,true);
        //subeBrazosAutomatico=setInterval(brazosArriba,true);
      }
    });
  } else {
    alert("error en el codigo o en ctx");
  }
}
