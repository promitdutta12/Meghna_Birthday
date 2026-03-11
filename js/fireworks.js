let canvas=document.getElementById("fireworks")
let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

function firework(){
for(let i=0;i<50;i++){

let x=Math.random()*canvas.width
let y=Math.random()*canvas.height

ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)"
ctx.beginPath()
ctx.arc(x,y,3,0,Math.PI*2)
ctx.fill()

}
}

setInterval(()=>{
firework()

setTimeout(()=>{
ctx.clearRect(0,0,canvas.width,canvas.height)
},10000)

},15000)
