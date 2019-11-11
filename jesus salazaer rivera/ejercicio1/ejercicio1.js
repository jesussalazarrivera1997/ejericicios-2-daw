//funcion que debuelve cada inicial de una cadena en mayusculas
/*


ej1


*/

function ejercicio1(cadena) {
    var separada = cadena.split(" ");
    var respuesta = [];
    for (palabra in separada) {
        var repalab = ""
        for (letra in separada[palabra]) {
            if (repalab == "") {
                repalab = repalab + separada[palabra][letra].toUpperCase();
                console.log(separada[palabra][letra])
            } else {
                repalab = repalab + separada[palabra][letra];
            }
        }
        respuesta.push(repalab);
    }
    return respuesta;
}



/*

ej2


*/


function ejercicio2(fechas) {
    var separada = [];
    for (i in fechas) {
        var ahora = "" + fechas[i].split("/");
        separada.push(ahora)

    }
    var comprobador = separada[0]
    for (i in fechas) {
        if (comprobador[2] > separada[i][2]) {
            comprobador = separada[i];
        } else if (comprobador[1] > separada[i][1]) {
            comprobador = separada[i];
        } else if (comprobador[0] > separada[i][0]) {
            comprobador = separada[i];
        }
    }
    return comprobador;
}
/*


ej3


*/
function ejercicio3(parametro, resul = 0) {
    var x = 0
    if (parametro.length > 1) {
        x = parametro.pop();
        var sumaresPop = x + resul;
        x = x + ejercicio3(parametro, sumaresPop);

    }
    return x
}


/*


ej4*


*/



function ejercicio4(numfilas = 4, numcolum = 4, color1, color2) {
    var ancho = 150
    var alto = 150

    var totalAcho = ancho * numcolum;
    contador = 0;
    document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width\"" + totalAcho + "\" >");
    for (i = 0; i < numfilas; i++) {
        document.write("<tr bgcolor=\"white\" height=\"" + alto + "\" >");
        for (y = 0; y < numcolum; y++) {
            if (contador % 2 == 0) {
                document.write("<td bgcolor=\"" + color2 + "\" width=\"" + ancho + "\" >&nbsp;</td>");
            } else {
                document.write("<td bgcolor=\"" + color1 + "\" width=\"" + ancho + "\" >&nbsp;</td>");
            };
            contador++;
        };
        document.write("</tr>");
        if (numcolum % 2 == 0) { contador++; };
    };
    document.write("</table>");
};
/*


ej5

*/

function cuentaAtras(id) {

    var elem = document.getElementById(id);
    var id = setInterval(frame, 1000);
    var contador=10
    function frame() {
        if (contador>0) {
            elem.style.backgroundColor = "red";
            clearInterval(id);
        } else {
            elem.innerHTML=contador;

        }
        contador=contador-1
    }
}
function ejercicio5(numfilas = 4, numcolum = 4, color1, color2) {

    var ancho = 150
    var alto = 150
    var totalAcho = ancho * numcolum;
    var contador = 0;
    document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width\"" + totalAcho + "\" >");
    for (i = 0; i < numfilas; i++) {
        document.write("<tr bgcolor=\"white\" height=\"" + alto + "\" >");
        for (y = 0; y < numcolum; y++) {
            if (contador % 2 == 0) {
                document.write("<td id=\"" + contador + "\" bgcolor=\"" + color2 + "\" width=\"" + ancho + "\" onclick=\"cuentaAtras(this.id)\"  >&nbsp;</td>");
            } else {
                document.write("<td  id=\"" + contador + "\" bgcolor=\"" + color1 + "\" width=\"" + ancho + "\" onclick=\"cuentaAtras(this.id)\" )>&nbsp;</td>");
            };
            contador++;
        };
        document.write("</tr>");
        if (numcolum % 2 == 0) { contador++; };
    };
    document.write("</table>");
};