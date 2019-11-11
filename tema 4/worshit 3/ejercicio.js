/*
Crea un formulario típico de registro para tu web. Debe contener al menos campos para
 introducir nombre, apellidos, DNI, Teléfono, email y nombre de usuario. Todos los 
 campos son obligatorios, y debes validar el mayor número posible de ellos haciendo
  uso de expresiones regulares. El nombre de usuario debe estar formado por al menos 
  8 caracteres, entre los cuales debe aparecer obligatoriamente algún número y algún 
  signo de puntuación.

Conforme sale el foco de cada input, deberás validar el contenido de éste y mostrar
 información al usuario que le indique si está correcto o no.
*/
function comprobar(x) {
    let texto = "";
    switch (x.id) {
        case "nombre":
            if (x.value == "") {
                texto = "Nombre vacio intentalo otra vez"
            } else {
                texto = "nombre valido"
            }
            break;

        case "apellido":
            if (x.value == "") {
                texto = "apelido vacio intentalo otra vez";
            } else {
                texto = "apellido valido"
            }
            break;

        case "telefono":
            if (/\d{9}/.test(x.value)){
                texto="telefono valido "
            }else{
                texto="telefono incorrecto"
            }
            break;

        case "correo":
            if (/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(x.value)) {
                texto = "correo correcto";

            } else {
                texto = "correo no valido intentalo de nuevo"
            }
            break;
            
        case "dni":
            if (/^\d{8}[a-zA-Z]$/.test(x.value)) {
                texto = "DNI correcto";   
            }else{
                texto = "Dni incorrecto intentalo de nuevo";
            }
            break;
        case "nombreUsuario":
            if(/(\d\w\b){8,}/.test(x.value)){
                texto="nombre de usuario valido";
            }else{
                texto="nombre de usuario no valido";
            }
            break;
    }
    document.getElementById("ayuda").innerHTML = texto;
}

function borrar() {
    document.getElementById("ayuda").innerHTML = '';
}