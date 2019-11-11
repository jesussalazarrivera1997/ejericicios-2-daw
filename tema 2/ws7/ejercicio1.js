/*
 Develop a web app in which:
    1 Test if geolocation is available.
    2 If it's available, show the current position (latitude and longitude)
    3 If it isn't available, show a message for each and everyone of the possible errors.
    4 Improve your code so you show the position continuously (although the user could be in moving, so it could change)
    5 Find the way to meassure the distance traveled.
*/
//1  
// chequear si funciona la geolocalizacion 
function geoBien(){
    if ("geolocation" in navigator){
        /*geolocaluizacion funciona */
        return true
    }else{
        console.log('error en geolocation')
        return false
    }
}
//2 
//conprobamos las coordenadas en el navegador 
//3
//mostrar errores 
var lat 
var lon
function vercoordenadas(posicion){
    //cogemos las coordenadas que nos da el elemento navigatos 
    lat = position.coords.latitude 
    lon = position.coords.longitude;
}
function coordenadas(){
    if (geoBien){
        navigator.geolocation.getCurrentPosition(vercoordenadas);
    }else{
        alert('fallo en geolocalizacion')   
    }
}
//4 
// ahora aremos que se puedan ver continuamente la geocode en tiempo real 
function geoAhora(){
    setInterval(pintarCoordenadas,200);

}
function pintarCoordenadas(){
    coordenadas()
    document.getElementById("coordenadas").innerHTML='latitud : '+lat+' longitud : '+lon;
}
//5
//guardamos el recorrido que hacemos 
var listaCoordenadas=new Array();
function guardar (){
    coordenadas()
    listaCoordenadas.push('latitud : '+lat+' longitud : '+lon);
}
function guardarCoordenadas(){
    setInterval(guardar,2000);
}

