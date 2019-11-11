/*
7. Eventos onFocus y onBlur. Diseña un formulario de contacto. En él deben aparecer
campos para introducir el nombre, correo y el comentario que se desee mandar, así
como dos botones para enviar o resetear. Haciendo uso de los eventos anteriores
debes mostrar un mensaje de ayuda (o descriptivo) de la caja o botón en el que se
encuentre el foco. Igualmente debe desaparecer al cambiar el foco a otro elemento.
*/
function comentario(x){
    let texto="";
    if (x.id=="nm"){
        texto="introduce aque el nombre del usuario"
    }else if(x.id=="em"){
        texto="introduzca el correo electronico"
    }else if(x.id=="cr"){
        texto="introduzca el comentario que desea escribir"
    }
    document.getElementById("ayuda").innerHTML=texto;
}

function borrar(){
    document.getElementById("ayuda").innerHTML='';
}