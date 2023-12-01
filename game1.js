var ctx;
var canvas;
var angulo = 0;
var activeBalls = [];
var tanquesEnemigos = [];

    canvas = document.getElementById('gameCanvas');
    if (canvas) {
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
            if (ctx) {
                // Asegúrate de que el canvas tenga un tamaño visible
                canvas.width = 800; // Establece el ancho
                canvas.height = 600; // Establece el alto
                
                dibujarTanque();
                document.addEventListener('keydown', function (e) {
                    if (e.key == 'ArrowRight') {
                        angulo += 0.05;
                        dibujarTanque();
                    }
                    if (e.key == 'ArrowLeft') {
                        angulo -= 0.05;
                        dibujarTanque();
                    }
                    if (e.key == 'c') {
                        dispararBola();
                    }
                });
                animar();
            } else {
                alert('No se pudo obtener el contexto 2D');
            }
        } else {
            alert('getContext no es una función');
        }
    } else {
        alert('No se encontró el canvas');
    }

// Resto del código de dibujo, disparo y animación...


function dibujarTanque() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'darkgreen';

    // Ruedas de arriba
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(300, 330, 100, 20);
    ctx.strokeRect(300, 330, 100, 20);

    // Ruedas de abajo
    ctx.beginPath();
    ctx.fillRect(300, 410, 100, 20);
    ctx.strokeRect(300, 410, 100, 20);

    // Cuerpo del tanque
    ctx.fillStyle = 'darkgreen';
    ctx.beginPath();
    ctx.fillRect(315, 350, 70, 60);
    ctx.strokeRect(315, 350, 70, 60);

    // Dibujar cañón
    dibujarLinea(350, 380, 90, angulo);

    // Dibujar círculo
    ctx.lineWidth = 2;
    ctx.fillStyle = "darkgreen";
    ctx.beginPath();
    ctx.arc(350, 380, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function dibujarLinea(x, y, longitud, angulo) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(x, y);
    var xEnd = x + Math.cos(angulo) * longitud;
    var yEnd = y + Math.sin(angulo) * longitud;
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
    ctx.closePath();
}

function dispararBola() {
    var xEnd = 350 + Math.cos(angulo) * 90;
    var yEnd = 380 + Math.sin(angulo) * 90;
    var bola = {
        x: xEnd,
        y: yEnd,
        vx: 5 * Math.cos(angulo),
        vy: 5 * Math.sin(angulo),
        radio: 12
    };
    activeBalls.push(bola);
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarTanque();

    for (var i = 0; i < activeBalls.length; i++) {
        var bola = activeBalls[i];
        bola.x += bola.vx;
        bola.y += bola.vy;
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(bola.x, bola.y, bola.radio, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    requestAnimationFrame(animar);
}

/*class TanqueEnemigo {
  constructor(x, y, velocidad) {
      this.x = x;
      this.y = y;
      this.velocidad = velocidad;
      this.ancho = 50; // Ancho del tanque enemigo
      this.alto = 30; // Alto del tanque enemigo
  }

  moverHaciaJugador(jugadorX, jugadorY) {
      // Implementa la lógica de movimiento hacia el jugador aquí
  }

  dibujar(ctx) {
      // Dibuja el tanque enemigo en el contexto del lienzo (canvas)
  }
}


function verificarColisiones() {
  for (var i = 0; i < activeBalls.length; i++) {
      var bola = activeBalls[i];

      for (var j = 0; j < tanquesEnemigos.length; j++) {
          var enemigo = tanquesEnemigos[j];

          // Verificar si la bola colisiona con el tanque enemigo
          if (
              bola.x + bola.radio > enemigo.x &&
              bola.x - bola.radio < enemigo.x + enemigo.ancho &&
              bola.y + bola.radio > enemigo.y &&
              bola.y - bola.radio < enemigo.y + enemigo.alto
          ) {
              // Colisión detectada
              // Muestra una animación de explosión
              // Elimina el tanque enemigo de la matriz
              // Elimina la bola de la matriz
          }
      }
  }
}

function mostrarExplosion(x, y) {
  // Dibuja la imagen de la explosión en el contexto del lienzo (canvas)
}



function animar() {
  // Actualiza la posición de los tanques enemigos
  for (var i = 0; i < tanquesEnemigos.length; i++) {
      var enemigo = tanquesEnemigos[i];
      enemigo.moverHaciaJugador(jugadorX, jugadorY);
  }

  // Verifica las colisiones
  verificarColisiones();

  // Limpia el contexto del lienzo y renderiza todo
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujarTanque(); // Dibuja el tanque del jugador
  for (var i = 0; i < tanquesEnemigos.length; i++) {
      tanquesEnemigos[i].dibujar(ctx);
  }

  requestAnimationFrame(animar);
}
*/