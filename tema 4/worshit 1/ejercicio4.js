/*Eventos onMouseMove y onLoad. +
Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.
*/
var coordenadasRaton = [];

function canvasGrafivoDeTablas() {
    let tabla = "";
    let contador = 0;
    tabla = tabla + "<table bgcolor='black' >";
    for (i = 0; i < 100; i++) {
        tabla = tabla + "<tr bgcolor='white'>";
        for (x = 0; x < 100; x++) {
            tabla = tabla + "<td id='" + contador + "' width='15' height = '10' bgcolor ='white'></td>";
            contador++;
        };
        tabla = tabla + "</tr>"
    }
    tabla = tabla + "</table>";
    document.getElementById("myCanvas").innerHTML = tabla
}

function sobreElCuadro(contador) {
    if (event.ctrlKey == 1) {
        document.getElementById( contador ).setAttribute("color","red");

    } else if (event.shiftKey == 1) {
        document.getElementById( contador ).setAttribute("color","blue");

    } 
}
function noEnelCuadro(contador) {
    document.getElementById( contador ).setAttribute("color","");
    
}

var posicionx = [];

function annadirEventos() {
    contador = 0;
    posicionx.push(contador);
    for (i = 0; i < 100; i++) {
        for (x = 0; x < 100; x++) {
            document.getElementById("" + contador + "").addEventListener("mouseover", function () { sobreElCuadro(""+contador+"")});
            document.getElementById("" + contador + "").addEventListener("mouseout", function () { noEnelCuadro(""+contador+"")});
            posicionx.push(contador);
            contador++;

        }
    }
}

canvasGrafivoDeTablas();
annadirEventos();