var posBrazos = 190
var posBoca = true
var ctx
var canvas
var animacion
window.onload = () => {
    canvas = document.getElementById('monigote')
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d')

        dibujarMonigote()
    }   
}

document.addEventListener('keypress', (e) => {
    e.preventDefault()
    if(e.key === 32 || e.code === "Space") {

        animacion = !animacion
        if(animacion) {
            mov = setInterval(() => {
                posBrazos -= 100 
                if(posBrazos <= 40) posBrazos = 190
                posBoca = !posBoca
                    animar()
            }, 200)
        } else {
            clearInterval(mov)
        }

    }
})

function dibujarMonigote() {
            //Testa
            ctx.lineWidth = 3
            ctx.fillStyle = 'black'
            ctx.strokeStyle = 'white'
            ctx.beginPath()
            ctx.arc(100,50,30,0,2*Math.PI)
            ctx.stroke()
            ctx.fill()
            // boca
            if(posBoca) {
                ctx.fillStyle = 'red'
                ctx.strokeStyle = 'red'
                ctx.beginPath()
                ctx.arc(100,50,2,0,Math.PI)
                ctx.stroke()
            } else {
                ctx.fillStyle = 'red'
                ctx.strokeStyle = 'red'
                ctx.beginPath()
                ctx.arc(100,60,6,0,Math.PI*2)
                ctx.lineCap = 'rounded';
                ctx.stroke()
                ctx.fill()
            }
            // ojo izq
            ctx.beginPath()
            ctx.arc(90,45,3,0,Math.PI*2)
            ctx.stroke()
            ctx.fill()
            //ojo derecho
            ctx.beginPath()
            ctx.arc(110,45,3,0,Math.PI*2)
            ctx.stroke()
            ctx.fill()
    
            ctx.lineWidth = 7
            ctx.strokeStyle = 'white'
            ctx.fillStyle = 'white'
            // cuerpo
            ctx.beginPath()
            ctx.moveTo(100, 80)
            ctx.lineTo(100, 200)
            ctx.lineCap = 'rounded';
            ctx.stroke()
            //pierna izq
            ctx.beginPath()
            ctx.moveTo(100, 198)
            ctx.lineTo(60, 280)
            ctx.lineCap = 'rounded';
            ctx.stroke()
            //pierna der
            ctx.beginPath()
            ctx.moveTo(100, 198)
            ctx.lineTo(140, 280)
            ctx.lineCap = 'rounded';
            ctx.stroke()
            //brazo izq
            ctx.beginPath()
            ctx.moveTo(100, 110)
            ctx.lineTo(60, posBrazos)
            ctx.stroke()
            //brazo der
            ctx.beginPath()
            ctx.moveTo(100, 110)
            ctx.lineTo(140, posBrazos)
            ctx.lineCap = 'rounded';
            ctx.stroke()
}

function animar () {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        dibujarMonigote() 
}