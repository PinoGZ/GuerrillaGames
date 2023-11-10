var gravity = 0.1;

$(document).ready(function(){
	gameLoop();
});

function fire(fireObj){
	
	
	var fireItem = $(fireObj.selector);
	var position = fireItem.position();

	var tempCounter = 7;
	var upSpeed = 0;
	var downSpeed = 0;
	var distance = 5 + (fireObj.damage / 10);
	var timer = setInterval(function(){
		if($("#player2").length > 0 && collision(fireItem, $("#player2"))){
			$("#player2").remove();
			clearInterval(timer);
			BOOOOOM(fireObj);
			respawnPlayer("player2");
			return;
		}
		if($("#player1").length > 0 && collision(fireItem, $("#player1"))){
			$("#player1").remove();
			clearInterval(timer);
			BOOOOOM(fireObj);
			respawnPlayer("player1");
			return;
		}
		position = fireItem.position();
		
		if(distance > 0){
			upSpeed = (fireObj.speed * distance) / 30;
			fireItem.css("top", (position.top - upSpeed) + "px");
			distance --;
		}
		else{
			if(tempCounter > 0){
				tempCounter--;
			}
			else{
				if(!collision(fireItem, $(".ground"))){
					downSpeed += upSpeed + gravity;
					fireItem.css("top", (position.top + downSpeed) + "px");
				}
				else{
					clearInterval(timer);
					BOOOOOM(fireObj);
				}
			}
		}
		
		if(fireObj.direction == "l"){
			if(position.left > 0){
				fireItem.css("left", (position.left - fireObj.speed) + "px");
			}
			else{
				clearInterval(timer);
				BOOOOOM(fireObj);
			}
		}
		else if(fireObj.direction == "r"){
			if(position.left < 780){
				fireItem.css("left", (position.left + fireObj.speed) + "px");
			}
			else{
				clearInterval(timer);
				BOOOOOM(fireObj);
			}
		}
	},30);
	
}

function BOOOOOM(fireObj){
	var fireItem = $(fireObj.selector);
	var timer = setInterval(function(){
		var width = fireItem.width();
		var height = fireItem.height()
		fireItem.width(width + 8);
		fireItem.height(height + 8);
		if(width > fireObj.radius ){
			clearInterval(timer);
			setTimeout(function(){
				fireItem.remove();
			},500)
		}

	},1);
	
}

var fireID = 0;
var p1Direction = "r";
var p1Power = 10;
var p2Direction = "r";
var p2Power = 10;
function gameLoop() {
	
	var moveSpeed = 10;

	if (keyPressed["65"]) {
		p1Direction = "l";
		move("#player1" , ((moveSpeed) - moveSpeed * 2) , 0);
    } 
	if (keyPressed["68"]) {
		p1Direction = "r";
		move("#player1" , moveSpeed , 0);
    }
	
	if(keyPressed["81"]){
		
		if(p1Power < 100){
			p1Power += 3;
			$("#player1 .power").css("width", (p1Power) + "%");
		}
		
	}
	
	if (keyPressed["37"]) {
		p2Direction = "l";
		move("#player2" , ((moveSpeed) - moveSpeed * 2) , 0);
    } 
	if (keyPressed["39"]) {
		p2Direction = "r";
		move("#player2" , moveSpeed , 0);
    }
	
	if(keyPressed["75"]){
		
		if(p2Power < 100){
			p2Power += 3;
			$("#player2 .power").css("width", (p2Power) + "%");
		}
		
	}

  
	
	setTimeout(gameLoop, 24);
 };
 
function move(item,x,y){
	 position = $(item).position();
	 $(item).css("left", (position.left + x) + "px")
	 $(item).css("top", (position.top + y) + "px")
 }
 
 
 
// General functions -----------------------------------------------------
function collision($div1, $div2) {
	var x1 = $div1.offset().left;
	var y1 = $div1.offset().top;
	var h1 = $div1.outerHeight(true);
	var w1 = $div1.outerWidth(true);
	var b1 = y1 + h1;
	var r1 = x1 + w1;
	var x2 = $div2.offset().left;
	var y2 = $div2.offset().top;
	var h2 = $div2.outerHeight(true);
	var w2 = $div2.outerWidth(true);
	var b2 = y2 + h2;
	var r2 = x2 + w2;

	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	return true;
}

function timeToMMSS(time){
	var min = 0
	var sec = time;
	
	if(sec > 59){
		min = Math.floor(sec / 60);
		sec = Math.floor(sec % 60);
	}
	
	if(min < 10)
		min = "0" + min;
	
	if(sec < 10)
		sec = "0" + sec;
	
	
	return min + ":" + sec;
}

 function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


var keyPressed = {};

document.addEventListener('keydown', function(e) {
   keyPressed[e.keyCode] = true;
}, false);
document.addEventListener('keyup', function(e) {

	if(e.keyCode == 81){
		var speed = p1Power / 10;
		if(speed < 5){
			speed = 5;
		}
		fireID++;;
		var position = $("#player1").position();
		console.log(position);
		$("#board").append('<span id="fire' + fireID + '"class="fire" style="background:' + getRandomColor() + '; left:'+ (position.left + 7) +'px; top:' + (position.top - 20) + 'px;"></span>');
		$("#fire" + fireID);

		var fireObj = new Object();
		fireObj.selector = "#fire" + fireID;
		fireObj.direction = p1Direction;
		fireObj.damage = p1Power; 
		fireObj.radius = p1Power / 3;
		fireObj.speed = speed;
		fire(fireObj);
		$("#player1 .power").css("width", "0%");
		p1Power = 10;
	}
	
	if(e.keyCode == 75){
		var speed = p2Power / 10;
		if(speed < 5){
			speed = 5;
		}
		fireID++;;
		var position = $("#player2").position();
		$("#board").append('<span id="fire' + fireID + '"class="fire" style="background:' + getRandomColor() + '; left:'+ (position.left + 7) +'px; top:' + (position.top - 20) + 'px;"></span>');
		$("#fire" + fireID);

		var fireObj = new Object();
		fireObj.selector = "#fire" + fireID;
		fireObj.direction = p2Direction;
		fireObj.damage = p2Power; 
		fireObj.radius = p2Power / 3;
		fireObj.speed = speed;
		fire(fireObj);
		$("#player2 .power").css("width", "0%");
		p2Power = 10;
	}
   keyPressed[e.keyCode] = false;
}, false);

function respawnPlayer(player){
	setTimeout(function(){
		$("#board").append('<div id="' + player + '" class="player"><span class="power"></span></div>');
	}, 3000);
	
}

