/*5
 Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array
*/

/*7
Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.
*/

/*
8. 
Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.

9. 
Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
bidimensionales).
*/

function lanzamiento() {
    return Math.floor(Math.random() * 6 + 1)
};
function tiradas6000() {
    tiradas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let tir = 0
    for (i = 0; i < 6000; i++) {
        tir = lanzamiento()
        tir = tir + "" + lanzamiento();
        switch (tir) {
            case "11":
                tiradas[0] = tiradas[0] + 1;
                break;
            case "12":
                tiradas[1] = tiradas[1] + 1;
                break;
            case "13":
                tiradas[2] = tiradas[2] + 1;
                break;
            case "14":
                tiradas[3] = tiradas[3] + 1;
                break;
            case "15":
                tiradas[4] = tiradas[4] + 1;
                break;
            case "16":
                tiradas[5] = tiradas[5] + 1;
                break;
            case "21":
                tiradas[6] = tiradas[6] + 1;
                break;
            case "22":
                tiradas[7] = tiradas[7] + 1;
                break;
            case "23":
                tiradas[8] = tiradas[8] + 1;
                break;
            case "24":
                tiradas[9] = tiradas[9] + 1;
                break;
            case "25":
                tiradas[10] = tiradas[10] + 1;
                break;
            case "26":
                tiradas[11] = tiradas[11] + 1;
                break;
            case "31":
                tiradas[12] = tiradas[12] + 1;
                break;
            case "32":
                tiradas[13] = tiradas[13] + 1;
                break;
            case "33":
                tiradas[14] = tiradas[14] + 1;
                break;
            case "34":
                tiradas[15] = tiradas[15] + 1;
                break;
            case "35":
                tiradas[16] = tiradas[16] + 1;
                break;
            case "36":
                tiradas[17] = tiradas[17] + 1;
                break;
            case "41":
                tiradas[18] = tiradas[18] + 1;
                break;
            case "42":
                tiradas[19] = tiradas[19] + 1;
                break;
            case "43":
                tiradas[20] = tiradas[20] + 1;
                break;
            case "44":
                tiradas[21] = tiradas[21] + 1;
                break;
            case "45":
                tiradas[22] = tiradas[22] + 1;
                break;
            case "46":
                tiradas[23] = tiradas[23] + 1;
                break;
            case "51":
                tiradas[24] = tiradas[24] + 1;
                break;
            case "52":
                tiradas[25] = tiradas[25] + 1;
                break;
            case "53":
                tiradas[26] = tiradas[26] + 1;
                break;
            case "54":
                tiradas[27] = tiradas[27] + 1;
                break;
            case "55":
                tiradas[28] = tiradas[28] + 1;
                break;
            case "56":
                tiradas[29] = tiradas[29] + 1;
                break;
            case "61":
                tiradas[30] = tiradas[30] + 1;
                break;
            case "62":
                tiradas[31] = tiradas[31] + 1;
                break;
            case "63":
                tiradas[32] = tiradas[32] + 1;
                break;
            case "64":
                tiradas[33] = tiradas[33] + 1;
                break;
            case "65":
                tiradas[34] = tiradas[34] + 1;
                break;
            case "66":
                tiradas[35] = tiradas[36] + 1;
                break;
        };
    };
    return tiradas;