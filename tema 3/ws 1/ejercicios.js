/*
6. Crea una función para calcular potencias de un modo recursivo.
*/

//m=resultado de potencia , x numero original , n =numero de veces que se multiplica
function a(m,n,x=m){
    if (n>1){
        m=m*x;
        n=n-1;
        m=a(m,n,x);
    }
    return m
};

/*
7. Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.
*/

function factorial(x){
    let resul=1;
    while (x>0){
        resul=resul*x;
        x=x-1;
    }
    return resul;
}
function dibujarTabla(){
    resul="";
    resul+="<table><tr><th>numero</th><th>factorial</th></tr>";
    for(let i=1;i<=10;i++){
        resul=resul+"<tr><th>numero ="+i+"</th><th>factorial="+factorial(i)+"</th></tr>";
    }
    resul=resul+"</table>";
    document.getElementById("tabla").innerHTML=resul;
}   



