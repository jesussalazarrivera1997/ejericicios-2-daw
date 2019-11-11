/*
Let's try to use the geolocation information with the API of Google Maps.
    1 Use a map to show your location
    2 Draw a marker in your location
    3 Find a way to know the address of your location (reverse geocoding).
*/
//1
//usar mapa para mostrar localizacion actual
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
vercoordenadas();
var mymap = L.map('mapid').setView([lat, lon], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
//2
//poner un marcador 
var marker = L.marker([lat, lon]).addTo(mymap)
//3
//geolocalizacion inversa
