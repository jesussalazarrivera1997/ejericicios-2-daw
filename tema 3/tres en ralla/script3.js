/*
parte grafica 
*/ 

export class entornoGrafico{
    constructor (juego){
        this.nuevatabla(3,3,juego);

    }; 

    
    nuevatabla(x,y){
    let tabla="<table>"
    let cont1=0
    let cont2=0
    for (let i=0;i<x;i++){
        tabla+="<tr>";
        for (let z=0;z<y;z++){
            tabla+="<td id=\"idenº\""+cont1+""+cont2+"><button onclick=\""+juego+".jugar("+cont1+","+cont2+")\"></td>";
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