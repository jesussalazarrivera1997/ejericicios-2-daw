/*tres en  raya */

class tresEnRaya{
	constructor(x=3,y=3){
		this.nuevatabla(x,y)
		this.casillas=this.crearCasilla(x,y);
		this.contTiradas=0
	} 
	 
	nuevatabla(x,y){
		let tabla="<table>"
		let cont1=0
		let cont2=0
		for (let i=0;i<x;i++){
			tabla+="<tr>";
			for (let z=0;z<y;z++){
				tabla+="<td id=\"idenº\""+cont1+""+cont2+"><button onclick=\"tresenralla.jugar("+cont1+","+cont2+")\"></td>";
				cont2++;
			}
			cont1++
			cont2=0
			tabla+="</tr>";
		}
		tabla+="</table>"

		document.getElementById("juego").innerHTML=tabla;
	}
	crearCasilla(x,y){
		var casillas=new Array();
		for (let i=0;i<x;i++){
			casillas.push(new Array())
			for (let z=0;z<y;z++){
				casillas[i].push(new Array(0))
			}
		}
		return casillas;
	}
	
	jugar(corx,xory){
		
		if (this.contTiradas>=8){
			alert("juego terminado,prueba ma suerte la prosima vez");
			return;
		}
		if (this.casillas[corx][xory]>0){
			alert("casilla no valida, lla en uso");
			return  ;
		}else{
			this.casillas[corx][xory]=1;
			this.comprobar();
			this.iaTirada();
		}
		this.contTiradas++;
		this.comprobar();
	}
	
	comprobar(ganador){
		if (((this.casillas[0][0]==2)&&(this.casillas[0][1]==2)&&(this.casillas[0][2]==2))||
((this.casillas[1][0]==2)&&(this.casillas[1][1]==2)&&(this.casillas[1][2]==2))||
((this.casillas[2][0]==2)&&(this.casillas[2][1]==2)&&(this.casillas[2][2]==2))||
((this.casillas[0][0]==2)&&(this.casillas[1][0]==2)&&(this.casillas[2][0]==2))||
((this.casillas[0][1]==2)&&(this.casillas[1][1]==2)&&(this.casillas[2][1]==2))||
((this.casillas[0][2]==2)&&(this.casillas[1][2]==2)&&(this.casillas[2][2]==2))||
((this.casillas[0][0]==2)&&(this.casillas[1][1]==2)&&(this.casillas[2][2]==2))||
((this.casillas[2][0]==2)&&(this.casillas[1][1]==2)&&(this.casillas[0][2]==2))){
			alert("jugador perdiste umillantemente contra la maquina")
			this.contTiradas=8;
		}else if(((this.casillas[0][0]==1)&&(this.casillas[0][1]==1)&&(this.casillas[0][2]==1))||
((this.casillas[1][0]==1)&&(this.casillas[1][1]==1)&&(this.casillas[1][2]==1))||
((this.casillas[2][0]==1)&&(this.casillas[2][1]==1)&&(this.casillas[2][2]==1))||
((this.casillas[0][0]==1)&&(this.casillas[1][0]==1)&&(this.casillas[2][0]==1))||
((this.casillas[0][1]==1)&&(this.casillas[1][1]==1)&&(this.casillas[2][1]==1))||
((this.casillas[0][2]==1)&&(this.casillas[1][2]==1)&&(this.casillas[2][2]==1))||
((this.casillas[0][0]==1)&&(this.casillas[1][1]==1)&&(this.casillas[2][2]==1))||
((this.casillas[2][0]==1)&&(this.casillas[1][1]==1)&&(this.casillas[0][2]==1))){
			alert("!!!!!porfin ganaste contra esta estupida maquina¡¡¡¡¡")
			this.contTiradas=8;
		}
		
	}
	
	iaTirada(){
		var si=1
		
		while(si>0){
		var cor1 = 0
		cor1=Math.round(Math.random()*2);
		var cor2 = 0
		cor2=Math.round(Math.random()*2);
		if (this.casillas[cor1][cor2]==0){
			si=0;
			this.casillas[cor1][cor2]=2;
		}
		} 
	}
}
var tresenralla=new tresEnRaya();