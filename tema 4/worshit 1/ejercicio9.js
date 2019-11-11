/*9.
Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón)
*/

function creaTables(ancho, alto, numfilas, numcolum) {
    var totalAcho = ancho * numcolum;
    contador=0;
    document.write("<table border=\"0\" cellspacing=\"0\" bgcolor=\"black\" width\"" + totalAcho + "\" >");
    for (i = 0; i < numfilas; i++) {
        document.write("<tr bgcolor=\"white\" height=\"" + alto + "\" >");
        for (y = 0; y < numcolum; y++) {
            
                document.write("<td bgcolor=\"white\" width=\"50\" id=\""+contador+"\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\" >&nbsp;</td>");
            contador++;
        };
        document.write("</tr>");
        if (numcolum%2==0){contador++;};
    };
    document.write("</table>");
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
creaTables(10, 10, 30, 40);

/*
ball=document.getElementById("mydiv");
ball.onmousedown = function (event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
 
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

    moveAt(event.pageX, event.pageY);

    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (3) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the ball, remove unneeded handlers
    ball.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };

};

ball.ondragstart = function () {
    return false;
};*/