function Background() {
	
	var canvas = null;
	var ctx = null;
	
	var COLOR = "#1f1f1f";
	
	this.render = function() {
		canvas = document.createElement("canvas");
		canvas.width = WIDTH;
		canvas.height = HEIGHT;
		ctx = canvas.getContext("2d");
		
		ctx.fillStyle = COLOR;
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
	};
	this.paint = function() {
		CTX_BUF.drawImage(canvas, 0, 0);
	};
};