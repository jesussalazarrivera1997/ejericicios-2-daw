/*

        5. Crea una web que funcione como un cliente de correo electrónico. Para ello
        supongamos que en tu servidor dispones de un script que conforme se recibe un
        correo, éste se escribe en un fichero XML. Por tanto:

    • Define el formato de fichero XML que te permita simular esta situación (correos
    electrónicos).

    • Crea la web con la interfaz necesaria para que periodicamente actualice la lista de
    correos.
*/



function maquetarCorreos(xml) {
    var xmlObjeto= xml.responseXML;
    var correos = xmlObjeto.getElementsByTagName("CD");
    
    var correosss = document.createElement("table")
    var contador=0
    //document.getElementById("centro").innerHTML
    for (var correo of correos){
        var elemeto = document.createElement("tr")
        elemeto.setAttribute("class","celemtoCorreo")
        elemeto.setAttribute("id",contador+"id")
        elemeto.setAttribute("click",dibujarCorreo(contador+"id"))

        var titulo =correo.getElementsByTagName("TITLE")
        var textnode = document.createTextNode(titulo[0].innerHTML); 

        //console.log(titulo[0].innerHTML ,textnode,correo)
        
        elemeto.appendChild(textnode)
        correosss.appendChild(elemeto)

        contador++
    }
    document.getElementById("centro").appendChild(correosss)
}


function dibujarCorreo(id) {
    
}



function ajax() {

        //coje los datos del sevidor 
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET", "./ejercicio5.xml", true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 0 && this.status == 200) {
                
            }
            if (this.readyState == 4 && this.status == 200) {
                maquetarCorreos(this)
            }
        }
}

function recargar() {
    
}

function crearpagina() {
    document.getElementById("recargar").addEventListener("click",recargar)
}
ajax()