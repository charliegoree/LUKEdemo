window.onload = ()=>{

var fondo = document.getElementById("fondo");
var cohete = document.getElementById("cohete");

fondo.style.top = -3 +"px";
fondo.style.left = -3 +"px";
cohete.style.bottom = -100 +"px";
cohete.style.left = -40 +"px";

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

window.addEventListener("mousemove", (e)=>{
  
  var posX = e.clientX;
  var posY = e.clientY;
  //fondo
  var movX = map_range(posX,0,window.innerWidth,-3,3);
  var movY = map_range(posY,0,window.innerHeight,-3,3);
  //cohete
  var movX2 = map_range(posX,0,window.innerWidth,-6,6);
  var movY2 = map_range(posY,0,window.innerHeight,-6,6);
  //fondo
  fondo.style.top = -3 - movY + "px";
  fondo.style.left = -3 - movX + "px";
  //cohete
  cohete.style.bottom = -100 - movY2 + "px";
  cohete.style.left = -40 + movX2 + "px";
});

}