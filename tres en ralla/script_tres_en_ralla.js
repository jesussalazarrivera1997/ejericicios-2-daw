/*tres en  raya */
/*
class tresEnRaya{
	constructor(x=3,y=3){
		this.nuebatabla(x,y)
		this.casillas=crearCasilla;
		this.contTiradas=0
	} 
	
	nuebatabla(x,y){
		let tabla="<table>"
		let cont1=0
		let cont2=0
		for (i=0;i<x;i++){
			tabla+="<tr>";
			for (z=0;z<y;z++){
				tabla+="<td id=\"iden"+cont1+""+cont2+"><button onclick=\"tresenralla.jugar("+con1+","+con2+")\""></td>";
				cont++;
			}
			tabla+="</tr>";
		}
		tabla+="</table>"
		document.body.innerHTML=tabla;
	}
	crearCasilla(x,y){
		var casillas=new array()
		for (i=0;i<x;i++){
			casillas.push(new array())
			for (z=0;z<y;z++){
				casillas[i].push(new array(0))
			}
		}
		return casillas;
	}
	
	jugar(corx,xory){
		contTiradas++;
		if (this.casillas[corx][cory]>0){
			alert("casilla no valida, lla en uso");
			return ;
		}else{
			this.iaTirada();
		}
		if (contTiradas>=9){
			alert("juego terminado,prueba ma suerte la prosima vez(empate)");
			return;
		}
		this.comprobar();
	}
	
	comprobar(ganador){
		if ((this.casillas[0][0]&&this.casillas[0][1]&&this.casillas[0][2])==2||
(this.casillas[1][0]&&this.casillas[1][1]&&this.casillas[1][2])==2||
(this.casillas[2][0]&&this.casillas[2][1]&&this.casillas[2][2])==2||
(this.casillas[0][0]&&this.casillas[1][0]&&this.casillas[2][0])==2||
(this.casillas[0][1]&&this.casillas[1][1]&&this.casillas[2][2])==2||
(this.casillas[0][2]&&this.casillas[1][2]&&this.casillas[2][2])==2||
(this.casillas[0][0]&&this.casillas[1][1]&&this.casillas[2][2])==2||
(this.casillas[2][0]&&this.casillas[1][1]&&this.casillas[0][2])==2){
			alert("jugador perdiste umillantemente contra la maquina")
		}else if((this.casillas[0][0]&&this.casillas[0][1]&&this.casillas[0][2])==1||
(this.casillas[1][0]&&this.casillas[1][1]&&this.casillas[1][2])==1||
(this.casillas[2][0]&&this.casillas[2][1]&&this.casillas[2][2])==1||
(this.casillas[0][0]&&this.casillas[1][0]&&this.casillas[2][0])==1||
(this.casillas[0][1]&&this.casillas[1][1]&&this.casillas[2][2])==1||
(this.casillas[0][2]&&this.casillas[1][2]&&this.casillas[2][2])==1||
(this.casillas[0][0]&&this.casillas[1][1]&&this.casillas[2][2])==1||
(this.casillas[2][0]&&this.casillas[1][1]&&this.casillas[0][2])==1){
			alert("!!!!!porfin ganaste contra esta estupida maquina¡¡¡¡¡")
		}
		
	}
	
	iaTirada(){
		si=1
		while(si){
		cor1 = Math.round(Math.random()*2);
		cor2 = Math.round(Math.random()*2);
		if (this.casillas[cor1][cor2]=0){
			si=0;
			this.casillas[cor1][cor2]=2;
		}
		} 
	}
}
var tresenralla=new tresEnRaya();
*/ 