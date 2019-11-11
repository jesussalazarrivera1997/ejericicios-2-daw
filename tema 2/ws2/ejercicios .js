



function ejercicio5(cadena) {
    //se comprueba que no halla ninguna letra repetida solo
    //debuelve las no repetidas
    auxiliar = cadena
    resultado = ""
    for (i of auxiliar) {
        let c = 0;
        for (x of auxiliar) {
            if (i == x) {
                c += 1
            } if (c > 1) {
                break;
            }
        }
        if (c == 1) {
            resultado += i;
        }
    }
    console.log(resultado)
}









