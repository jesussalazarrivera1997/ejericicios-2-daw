/*
1) Diseña una web que hará uso de cookies para guardar el nombre del usuario. 
En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del 
usuario y almacenarlo en una cookie que caducará en 5 minutos. Tras esto saludará 
al usuario mediante un mensaje en pantalla. En caso de tener ya creada la cookie 
deberá leerla y mostrar el mensaje anterior directamente. Deberá proporcionar 
también un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').

Nota: Asegúrate de que tu cookie acepta todo tipo de caracteres 
(como ñ, espacio en blanco, acentos, etc....)

2) Mejora el ejercicio anterior dando al usuario las opciones 
para que pueda configurar el color de fondo, de párrafo y el tamaño de la letra.
*/
//crea una coockie con un tiempo limitado en minutos 
function setCookie(cname, cvalue, minutos) {
    var d = new Date();
    d.setTime(d.getTime() + (minutos * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
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
//comprueba si hay un usuario en la coockie y en caso contrario pregunta al usuario por uno 
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Hola usuario " + user);
    } else {
        user = prompt("entra tu nombre:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 5);
        }
        alert("Hola usuario " + user)
    }
}

function cerrarSesion() {

    document.cookie = "username"     + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
function cambiarBalores(){
    document.body.style.backgroundColor=document.getElementById("color").value;
    document.body.style.color=document.getElementById("colorletra").value;
    console.log(document.getElementById("tam"))
    document.body.style.fontSize=""+document.getElementById("tam").value+"em";
}