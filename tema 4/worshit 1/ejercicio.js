// 1.Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert.
function clickRaton(){
    alert('raton clikecado');
};
document.addEventListener("click",clickRaton);
//2.Captura el movimiento del ratón, para que se muestre la posición en la que se
//encuentra en cada momento.
window.onmousemove = function (){
    var x = window.event.clientX;
    var y = window.event.clientY;
    document.getElementById("raton").innerHTML=" coordenada x"+x+". coordenaday "+y+""
}

function dondeEstaElRaton(){
    document.getElementById("raton").innerHTML=""
}