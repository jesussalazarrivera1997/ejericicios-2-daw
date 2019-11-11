/*
2. Diseña una página web que debe contener texto (mínimo 4 párrafos). Deberás añadir la
siguiente funcionalidad mediante JavaScript:

• Tamaño de fuente. Debe ser posible incrementar o decrementar la fuente usada, así
como volver al tamaño por defecto.

• Alineación del texto: Debe ser posible cambiar la alineación a Justificada o a
Izquierda.

Se valorará el correcto diseño mediante funciones independientes para implementar
cada una de esas funcionalidades.
*/
function cambiarFuente(tammFuente = 16) {
    document.getElementById("texto").style.fontSize=""+tammFuente+"";
}
function cambiarAlinecion(alineaci="left") {
    document.getElementById("texto").style.textAlign=alineaci;
}