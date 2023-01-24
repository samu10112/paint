var canvas=document.getElementById("myCanvas");
var contexto=canvas.getContext("2d");
var evento_mouse=" ";
var raio=1;
var cor="grey";
var largura=1;

canvas.addEventListener("mousedown", mouseParaBaixo);
function mouseParaBaixo(){
    cor=document.getElementById("cor").value;
    largura=document.getElementById("largura").value;
    raio=document.getElementById("raio").value;
    evento_mouse="mouse down";
}
canvas.addEventListener("mouseup", mouseParaCima);
function mouseParaCima(){
    evento_mouse="mouse up";
}
canvas.addEventListener("mouseleave", mouseSai);
function mouseSai(){
    evento_mouse="mouse leave";
}
canvas.addEventListener("mousemove", mouseMove);
function mouseMove(evento){
    var posicaoX=evento.clientX - canvas.offsetLeft;
    var posicaoY=evento.clientY - canvas.offsetTop;
    if(evento_mouse=="mouse down"){
        contexto.beginPath();
        contexto.strokeStyle=cor;
        contexto.lineWidth=largura;
        contexto.arc(posicaoX, posicaoY, raio, 0, 360)
        contexto.stroke();
    }
}
function limpar(){
    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);
}
