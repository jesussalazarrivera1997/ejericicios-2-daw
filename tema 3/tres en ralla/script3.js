/*
parte grafica 
*/

export class entornoGrafico {
    constructor(nomEnt,juego) {
        this.nuevatabla(3, 3, nomEnt);
        this.juego=juego;
    };
    jugada(x, y) {
        //dados los valores del elmento
        var respuesta = this.juego.jugar(x, y);
        switch (respuesta[0]) {
            case 1: alert("juego terminado,prueba ma suerte la prosima vez"); break;
            case 2: alert("casilla no valida, lla en uso"); break;
            case 3: alert("jugador perdiste umillantemente contra la maquina"); break;
            case 4: alert("!!!!!porfin ganaste contra esta estupida maquina¡¡¡¡¡"); break;
        }
        if (respuesta[1] != 10) {
            console.log(respuesta);
            console.log(respuesta[1, 0], respuesta[1, 1])
            document.getElementById("iden" + respuesta[1][0] + "" + respuesta[1][1] + "").style.backgroundColor = "blue";
            document.getElementById("iden" + respuesta[2][0] + "" + respuesta[2][1] + "").style.backgroundColor = "red";
        }
    }

    nuevatabla(x, y, juego) {
        var tabla = document.createElement("TABLE")
        var tblBody = document.createElement("tbody");
        let cont1 = 0
        let cont2 = 0
        for (let i = 0; i < x; i++) {
            var fila = document.createElement("tr");

            /*tabla+="<tr>";*/
            for (let z = 0; z < y; z++) {
            /*tabla+="<td ><button id=\"iden"+cont1+"q"+cont2+"\" onclick=\"entorno.jugada("+cont1+","+cont2+")\"></td>";*/  
                var celda = document.createElement("td");
                var att2 = document.createAttribute("onclick");
                att2.value = ""+juego+".jugada("+cont1+","+cont2+")";
                var att = document.createAttribute("id");
                att.value = "iden"+cont1+""+cont2+"";
                celda.setAttributeNode(att);
                celda.setAttributeNode(att2);
                fila.appendChild(celda);
                cont2++;
            }
            tblBody.appendChild(fila)
            cont1++
            cont2 = 0
            /* tabla+="</tr>";*/
        }
        tabla.appendChild(tblBody);
        document.getElementById("juego").appendChild(tabla)
        /*
        tabla += "</table>"
        document.getElementById("juego").innerHTML = tabla;*/

    }
}