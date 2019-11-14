/*
parte grafica 
*/ 

export class entornoGrafico{
    constructor (juego){
        this.nuevatabla(3,3,juego);

    }; 
    jugada(x,y){
        var respuesta=tresenralla.jugar(x,y);
        switch (respuesta[0]){
            case 1 :	alert("juego terminado,prueba ma suerte la prosima vez");break;
            case 2 :	alert("casilla no valida, lla en uso");break;
            case 3 :	alert("jugador perdiste umillantemente contra la maquina");break;
            case 4 :    alert("!!!!!porfin ganaste contra esta estupida maquina¡¡¡¡¡");break;
        }
        if (respuesta[1]!=10){
            console.log(respuesta)
            document.getElementById("iden"+respuesta[1][0]+""+respuesta[1][0]+"").style.backgroundColor="blue";
            document.getElementById("iden"+respuesta[2][0]+""+respuesta[2][0]+"").style.backgroundColor="red";
        }
    }
    
    nuevatabla(x,y){
    let tabla="<table>"
    let cont1=0
    let cont2=0
    for (let i=0;i<x;i++){
        tabla+="<tr>";
        for (let z=0;z<y;z++){
            tabla+="<td ><button id=\"iden\""+cont1+""+cont2+" onclick=\"entorno.jugada("+cont1+","+cont2+")\"></td>";
            cont2++;
        }
        cont1++
        cont2=0
        tabla+="</tr>";
    }
    tabla+="</table>"
    document.getElementById("juego").innerHTML=tabla;
}
}