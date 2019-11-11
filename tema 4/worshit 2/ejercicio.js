/*
Se trata de la misma página con 2 estilos diferentes (tema normal y tema minimalista).
Haciendo sólo uso de JavaScript consigue que se pueda cambiar el estilo (pulsando los
enlaces de la parte superior) para que quede tal cual puedes ver. Deberás hacerlo con dos
versiones:
a) Modificando el estilo desde JavaScript (las hojas de estilo no estan creadas, sino
que se establece mediante atributos del objeto style).
*/
function cambionormal(){
    document.getElementById("elemnt").style.padding="20px"
    document.getElementById("elemnt").style.borderStyle="solid";
    document.getElementById("elemnt").style.borderWidth ="0px 0px 0px 40px";
    document.getElementById("elemnt").style.borderColor ="blue";
    document.getElementById("elemnt").style.backgroundColor="#F1EA5B";
    document.getElementById("oculto").style.display="inline";
    document.getElementById("enlac").style.borderStyle="solid";
    document.getElementById("enlac").style.borderWidth="2px";
    document.getElementById("enlac").style.backgroundColor="#A5E8FF"
    document.getElementById("marco").style.borderStyle="solid";
    document.getElementById("marco").stile.borderWidth="2px";
    document.getElementById("marco").style.backgroundColor="FBFF00"
}
function cambiomini(){
    document.getElementById("elemnt").style.padding=""
    document.getElementById("elemnt").style.borderStyle="";
    document.getElementById("elemnt").style.borderWidth ="";
    document.getElementById("elemnt").style.borderColor ="";
    document.getElementById("elemnt").style.backgroundColor="";
    document.getElementById("oculto").style.display="none";
    document.getElementById("enlac").style.borderStyle="";
    document.getElementById("enlac").style.borderWidth="";
    document.getElementById("enlac").style.backgroundColor=""
    document.getElementById("marco").style.borderStyle="";
    document.getElementById("marco").stile.borderWidth="";
    document.getElementById("marco").style.backgroundColor=""
}

cambionormal();