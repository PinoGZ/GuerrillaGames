window.onload = function () {
  // Get the canvas element and its context
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  // Define the initial position of the monkey
  let monkeyX = 100;
  let monkeyY = 200;

  // Define the initial position of the heart
  let heartX = 125;
  let heartY = 225;

  // Define the speed and direction of the monkey
  let monkeySpeedX = 2;
  let monkeySpeedY = 2;

  // Load the image
  var img = new Image();
  img.src = 'path_to_your_image.png'; // replace with the path to your image

  img.onload = function() {
      // Draw the image when it's loaded
      ctx.drawImage(img, monkeyX + 60, monkeyY + 40, 100, 100); // adjust the position and size as needed
  }

  // Draw the monkey
  function drawGorilla(x, y) {
      // Body
      ctx.fillStyle = 'gray';
      ctx.fillRect(x, y, 150, 150);

      // Belly
      ctx.beginPath();
      ctx.ellipse(x + 80, y + 70, 40, 60, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#8B4513";
      ctx.fill();
      ctx.closePath();

      // Head
      var img = new Image();
      img.src = './media/Logo.svg'; // replace with the path to your image
      img.onload = function() {
          ctx.drawImage(img, x + 15, y - 90, 130, 130); // adjust the position and size as needed
      }

      // Arms
      ctx.fillStyle = 'gray';
      ctx.beginPath();
      ctx.lineWidth = 40;
      ctx.strokeStyle = 'gray'; 

      // Left arm
      ctx.moveTo(x + 15, y + 15);
      ctx.lineTo(x - 50, y + 100);
      ctx.lineTo(x - 50, y + 200);
      ctx.stroke();

      // Right arm
      ctx.moveTo(x + 135, y + 15);
      ctx.lineTo(x + 210, y + 100);
      ctx.lineTo(x + 210, y + 200);
      ctx.stroke();

      // Legs
      ctx.fillStyle = 'gray';
      ctx.fillRect(x, y + 150, 40, 50);
      ctx.fillRect(x + 110, y + 150, 40, 50);
  }

  function drawHeart(x, y) {
      ctx.beginPath();
      ctx.moveTo(x, y); // use the passed x and y coordinates
      ctx.bezierCurveTo(x - 12.5, y - 22.5, x - 22.5, y - 22.5, x - 22.5, y - 13.75); // use the passed x and y coordinates
      ctx.bezierCurveTo(x - 22.5, y - 2.5, x - 12.5, y + 22.5, x, y + 42.5); // use the passed x and y coordinates
      ctx.bezierCurveTo(x + 12.5, y + 22.5, x + 22.5, y - 2.5, x + 22.5, y - 13.75); // use the passed x and y coordinates
      ctx.bezierCurveTo(x + 22.5, y - 22.5, x + 12.5, y - 22.5, x, y); // use the passed x and y coordinates
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.closePath();
  }

  // Define the animation loop
  function animate() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update the monkey's position
      monkeyX += monkeySpeedX;
      monkeyY += monkeySpeedY;

      // Check if the monkey is outside the canvas boundaries
      if (monkeyX < 0) {
          monkeyX = 0;
          monkeySpeedX = -monkeySpeedX;
      } else if (monkeyX > canvas.width - 150) {
          monkeyX = canvas.width - 150;
          monkeySpeedX = -monkeySpeedX;
      }
      if (monkeyY < 0) {
          monkeyY = 0;
          monkeySpeedY = -monkeySpeedY;
      } else if (monkeyY > canvas.height - 150) {
          monkeyY = canvas.height - 150;
          monkeySpeedY = -monkeySpeedY;
      }

      // Update the heart's position
      heartX = monkeyX + 65;
      heartY = monkeyY + 85;

      // Draw the monkey at its new position
      drawGorilla(monkeyX, monkeyY);

      // Draw the heart at its new position
      drawHeart(heartX, heartY);

      // Request the next frame of the animation
      requestAnimationFrame(animate);
  }
  // Start the animation loop
  animate();
};

  // Start the animation loop
  animate();

  // Get the canvas element and its context
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  // Define the initial position of the monkey
  let monkeyX = 100;
  let monkeyY = 200;

  // Load the image
  var img = new Image();
  img.src = 'path_to_your_image.png'; // replace with the path to your image

  img.onload = function() {
      // Draw the image when it's loaded
      ctx.drawImage(img, monkeyX + 60, monkeyY + 40, 100, 100); // adjust the position and size as needed
  }

  // Draw the monkey
  function drawGorilla(x, y) {
      // Body
      ctx.fillStyle = 'gray';
      ctx.fillRect(x, y, 150, 150);

      // Belly
      ctx.beginPath();
      ctx.ellipse(x + 80, y + 70, 40, 60, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#8B4513";
      ctx.fill();
      ctx.closePath();

      // Head
      var img = new Image();
      img.src = './media/Logo.svg'; // replace with the path to your image
      img.onload = function() {
          ctx.drawImage(img, x + 15, y - 90, 130, 130); // adjust the position and size as needed
      }

      // Arms
      ctx.fillStyle = 'gray';
      ctx.beginPath();
      ctx.lineWidth = 40;
      ctx.strokeStyle = 'gray'; 

      // Left arm
      ctx.moveTo(x + 15, y + 15);
      ctx.lineTo(x - 50, y + 100);
      ctx.lineTo(x - 50, y + 200);
      ctx.stroke();

      // Right arm
      ctx.moveTo(x + 135, y + 15);
      ctx.lineTo(x + 210, y + 100);
      ctx.lineTo(x + 210, y + 200);
      ctx.stroke();

      // Legs
      ctx.fillStyle = 'gray';
      ctx.fillRect(x, y + 150, 40, 50);
      ctx.fillRect(x + 110, y + 150, 40, 50);
  }

  function drawHeart() {
      ctx.beginPath();
      ctx.moveTo(125, 225); // increased y-coordinate
      ctx.bezierCurveTo(112.5, 202.5, 102.5, 202.5, 102.5, 211.25); // increased y-coordinates
      ctx.bezierCurveTo(102.5, 222.5, 112.5, 247.5, 125, 267.5); // increased y-coordinates
      ctx.bezierCurveTo(137.5, 247.5, 147.5, 222.5, 147.5, 211.25); // increased y-coordinates
      ctx.bezierCurveTo(147.5, 202.5, 137.5, 202.5, 125, 225); // increased y-coordinate
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.closePath();
  }

  // Define the animation loop
  function animate() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update the monkey's position
      monkeyX += 2;
      monkeyY += 2;

      // Draw the monkey at its new position
      drawGorilla(monkeyX, monkeyY);

      // Draw the heart
      drawHeart();

      // Request the next frame of the animation
      requestAnimationFrame(animate);
  }

  // Start the animation loop
  animate();
;


  // Load the image
var img = new Image();
img.src = 'path_to_your_image.png'; // replace with the path to your image

img.onload = function() {
    // Draw the image when it's loaded
    ctx.drawImage(img, 160, 140, 220, 220); // adjust the position and size as needed
}
  if (ctx) {
    drawGorilla();

    drawHeart();
  }
    

    
  // Draw the monkey

  function drawGorilla() {
    // Body
    ctx.fillStyle = 'gray';
    ctx.fillRect(100, 200, 150, 150);

    // Belly
    ctx.beginPath();
    ctx.ellipse(180, 270, 40, 60, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#8B4513";
    ctx.fill();
    ctx.closePath();

    // Head
    var img = new Image();
    img.src = './media/Logo.svg'; // replace with the path to your image
    img.onload = function() {
        ctx.drawImage(img, 115, 110, 130, 130); // adjust the position and size as needed
    }

    
    // Arms
    
    ctx.fillStyle = 'gray';
    ctx.beginPath();
    ctx.lineWidth = 40;
    ctx.strokeStyle = 'gray'; 

    // Left arm
    ctx.moveTo(115, 215);
    ctx.lineTo(50, 300);
    ctx.lineTo(50, 400);
    ctx.stroke();
    
    // Right arm
    ctx.moveTo(235, 215);
    ctx.lineTo(310, 300);
    ctx.lineTo(310, 400);
    ctx.stroke();

    // Legs
    ctx.fillStyle = 'gray';
    ctx.fillRect(100, 350, 40, 50);
    ctx.fillRect(210, 350, 40, 50);
}

function drawHeart() {
    ctx.beginPath();
    ctx.moveTo(125, 225); // increased y-coordinate
    ctx.bezierCurveTo(112.5, 202.5, 102.5, 202.5, 102.5, 211.25); // increased y-coordinates
    ctx.bezierCurveTo(102.5, 222.5, 112.5, 247.5, 125, 267.5); // increased y-coordinates
    ctx.bezierCurveTo(137.5, 247.5, 147.5, 222.5, 147.5, 211.25); // increased y-coordinates
    ctx.bezierCurveTo(147.5, 202.5, 137.5, 202.5, 125, 225); // increased y-coordinate
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
};