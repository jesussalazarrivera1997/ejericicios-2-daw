/*
4Crea una web con una lista de elementos y un botón que cada vez que pulsemos
introduzca una entrada nueva en la lista.
*/
var listaElemen=[];
function subir() {
    let contenido=document.getElementById("nuevoElemento").value;
    listaElemen.push(contenido);
    document.getElementById("listaelementos").innerHTML=listaElemen;
}