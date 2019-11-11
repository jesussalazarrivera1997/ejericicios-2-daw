/*

1)
Diseña una web que hará uso de cookies para guardar el nombre del usuario. 
En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre
del usuario y almacenarlo en una cookie que caducará en 5 minutos. 
Tras esto saludará al usuario mediante un mensaje en pantalla. 
En caso de tener ya creada la cookie deberá leerla y mostrar el mensaje anterior directamente. 
Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').

2) Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar el color de fondo,
de párrafo y el tamaño de la letra.

3) ¿Cómo podemos hacer que la segunda cookie se borre automáticamente al cerrar el navegador? Compruébalo
*/

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays  * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 5);
        }
    }
};
checkCookie();

function delete_cookie( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
function cerrarSesion(){
    delete_cookie("username");
}

function cambiarattributos(){
    function cambiarLetra(){
        let letras = document.getElementById("letras");
        document.body.style.fontSize = document.body.style.fontSize+letras[0];
    }
    function cambiarcolor(){
        let color = document.getElementById("color");
        document.body.style.color = color[0];
    }
    document.getElementById("").addEventListener("click", cambiarLetra);
    document.getElementById("").addEventListener("click", cambiarcolor);
    

}
document.getElementById("cerrarSesion").addEventListener("click",cerrarSesion)