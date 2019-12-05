class Circulo {
    constructor(id, x = 56, y = 40, tamannor = 20, coolor = "red", velx = 4, vely = 5) {


        // CIRCULO 
        this.elemento = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        this.elemento.setAttribute("cx", x);
        this.elemento.setAttribute("cy", y);
        this.elemento.setAttribute("r", tamannor);
        this.elemento.setAttribute("id", id);
        this.alturac = document.getElementById("lienzo").getAttribute("height")
        this.anchurac = document.getElementById("lienzo").getAttribute("width")
        this.elemento.setAttribute("fill", coolor);
        document.getElementById("lienzo").appendChild(this.elemento);
        this.id = id;
        this.radio = tamannor;
        this.y = y;
        this.x = x;
        this.velx = velx;
        this.vely = vely;
        //<rect x="400" y="50" width="400" height="300" fill="black" stroke="red" stroke-width="20" />



    }
    mover() {

        setInterval(() => {
            if (this.x >= this.alturac - 20) {
                this.velx = -this.velx;
            }
            if (this.x <= 20) {

                this.velx = -this.velx;
            }
            if (this.y >= this.anchurac - 20) {
                this.vely = -this.vely;
            }
            if (this.y <= 20) {

                this.vely = -this.vely;
            }
            this.x = this.x + this.velx;
            this.y = this.y + this.vely;
            var circulo = document.getElementById(this.id)
            circulo.setAttribute("cx", this.x);
            circulo.setAttribute("cy", this.y);

        }, 20)

    }
}
class Cuadrado {
    
    constructor(id, x = 20, y = 20, eventoss = ["ArrowDown", "ArrowUp"]) {
        //CUADRADO 
        this.elementoCuadrado = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.elementoCuadrado.setAttribute("id", id);
        this.eventos = eventoss;
        this.carid = id
        this.elementoCuadrado.setAttribute("x", x);
        this.carx = x;
        this.elementoCuadrado.setAttribute("y", y);
        this.cary = y;
        this.elementoCuadrado.setAttribute("width", 5);
        this.acho = 5
        this.elementoCuadrado.setAttribute("height", 60);
        this.alto = 60
        this.elementoCuadrado.setAttribute("fill", "black");
        this.accion = "parar";
        //this.elementoCuadrado.setAttribute("stroke","black");
        //this.elementoCuadrado.setAttribute("stroke-width",20);
        document.getElementById("lienzo").appendChild(this.elementoCuadrado);
        window.addEventListener("keydown", () => {
            if (window.event.key == this.eventos[0]) {
                this.accion = "abajo";
            }
            if (window.event.key == this.eventos[1]) {
                this.accion = "arriba";
            }
        });
        window.addEventListener("keyup", () => { this.accion = "parar" });
        this.mover()
    }

    mover() {
        setInterval(() => {
            if (this.accion == "arriba") {
                if (this.cary <= 0) {
                    this.accion = "parar";
                } else {
                    this.cary = this.cary - 5;
                    document.getElementById(this.carid).setAttribute("y", this.cary)
                }
            }
            if (this.accion == "abajo") {
                if (this.cary >= 440) {
                    this.accion = "parar";
                } else {
                    this.cary = this.cary + 5;
                    document.getElementById(this.carid).setAttribute("y", this.cary)
                }
            }
        }, 20)
    }
    parar() {
        this.accion = "parar";
    }
}

class Juego {
    constructor() {
        this.circulo = new Circulo("cir1");
        this.circulo.mover()
        this.cuad1 = new Cuadrado("cua1");
        this.cuad2 = new Cuadrado("cua2", 480,30,["s","w"]);
        this.puntos=[0,0];
       this.jugar();
    }
    jugar() {
        setInterval(() => {
            this.chocar();
        }, 20)
    }
    chocar() {
        var puntos = [[(this.circulo.y - this.circulo.radio),this.circulo.x],[ (this.circulo.y + this.circulo.radio),this.circulo.x], [this.circulo.y,(this.circulo.x - this.circulo.radio)],[this.circulo.y, (this.circulo.x + this.circulo.radio)]]
        for (var punto of puntos) {
            if ((punto[0] >= this.cuad1.cary && punto[0] <= (this.cuad1.cary + this.cuad1.alto))&&(punto[1] >= this.cuad1.carx && punto[1] <= (this.cuad1.carx + this.cuad1.acho))){
                this.circulo.velx=(-this.circulo.velx);
                this.circulo.vely=(-this.circulo.vely);
            }
            if ((punto[0] >= this.cuad2.cary && punto[0] <= (this.cuad2.cary + this.cuad2.alto))&&(punto[1] >= this.cuad2.carx && punto[1] <= (this.cuad2.carx + this.cuad2.acho))){
                this.circulo.velx=(-this.circulo.velx);
                this.circulo.vely=(-this.circulo.vely);
            }
            if(punto[1]<=0){
                this.puntos[0]++
            }
            if(punto[1]>=500){
                this.puntos[1]++
            }
        }
    }
}
var juego = new Juego()

//var cuadrado1 = new Cuadrado();