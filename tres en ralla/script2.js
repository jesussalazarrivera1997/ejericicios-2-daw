/*tres en  raya */
 function cube(x) {
	return x * x * x;
  }
 class tresEnRaya{
	constructor(x=3,y=3){
	//	this.nuevatabla(x,y)
	
		this.casillas=this.crearCasilla(x,y);
		this.contTiradas=0;
	} 
	
	
	posibilidadesGanar(r){
		// devuelve verdadero o falso dependiendo de la comprobacion en caso de verdadero el juego se aganado 
		return (((this.casillas[0][0]==r)&&(this.casillas[0][1]==r)&&(this.casillas[0][2]==r))||
		((this.casillas[1][0]==r)&&(this.casillas[1][1]==r)&&(this.casillas[1][2]==r))||
		((this.casillas[2][0]==r)&&(this.casillas[2][1]==r)&&(this.casillas[2][2]==r))||
		((this.casillas[0][0]==r)&&(this.casillas[1][0]==r)&&(this.casillas[2][0]==r))||
		((this.casillas[0][1]==r)&&(this.casillas[1][1]==r)&&(this.casillas[2][1]==r))||
		((this.casillas[0][2]==r)&&(this.casillas[1][2]==r)&&(this.casillas[2][2]==r))||
		((this.casillas[0][0]==r)&&(this.casillas[1][1]==r)&&(this.casillas[2][2]==r))||
		((this.casillas[2][0]==r)&&(this.casillas[1][1]==r)&&(this.casillas[0][2]==r)));
	}
	
	/*
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
	*/
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
		/*
		este jego esta echo para que se use una funcion en la que 
		se pasen los parametros de las coordenadas x e y en esta funcion para 
		que sea posible el funcionamiento de este . 
		segun el return se entendera que :
		1 ==>juego terminado 
		2 ==>casilla en uso 
		3 ==>juego perdido
		4 ==>juego ganado  
		*/
		if (this.contTiradas>=4){
		//	alert("juego terminado,prueba ma suerte la prosima vez");
			return 1;
		}
		if (this.casillas[corx][xory]>0){
		//	alert("casilla no valida, lla en uso");
			return 2;
		}else{
			this.casillas[corx][xory]=1;
			this.comprobar();
		if (this.contTiradas>=4){
		//	alert("juego terminado,prueba ma suerte la prosima vez");
			return 1;
		}
			this.iaTirada();
		}
		this.contTiradas++;
		return this.comprobar();
	}
		
	comprobar(){
		// compruba si el tablero 
		if (this.posibilidadesGanar(2)){
		//	alert("jugador perdiste umillantemente contra la maquina")
			this.contTiradas=4;
			return 3;
		}else if(this.posibilidadesGanar(1)){
		//	alert("!!!!!porfin ganaste contra esta estupida maquina¡¡¡¡¡")
			this.contTiradas=4;
			return 4;
		}
		
	}
	
	iaTirada(){
		// segun el comprotamiento del jugador se selecciona una opcion para la maquina (ia)
		var si=1
		if (((this.casillas[0][0]==1)&&(this.casillas[0][1]==1)&&(this.casillas[0][2]==0))){
			this.casillas[0][2]=2;
		}else if (((this.casillas[0][0]==0)&&(this.casillas[0][1]==1)&&(this.casillas[0][2]==1))){
			this.casillas[0][0]=2;
		}else if (((this.casillas[0][0]==1)&&(this.casillas[0][1]==0)&&(this.casillas[0][2]==1))){
			this.casillas[0][1]=2;
		}else if (((this.casillas[1][0]==1)&&(this.casillas[1][1]==1)&&(this.casillas[1][2]==0))){
			this.casillas[1][2]=2;
		}else if (((this.casillas[1][0]==0)&&(this.casillas[1][1]==1)&&(this.casillas[1][2]==1))){
			this.casillas[1][0]=2;
		}else if (((this.casillas[1][0]==1)&&(this.casillas[1][1]==0)&&(this.casillas[1][2]==1))){
			this.casillas[1][1]=2;
		}else if (((this.casillas[2][0]==1)&&(this.casillas[2][1]==1)&&(this.casillas[2][2]==0))){
			this.casillas[2][2]=2;
		}else if (((this.casillas[2][0]==0)&&(this.casillas[2][1]==1)&&(this.casillas[2][2]==1))){
			this.casillas[2][0]=2;
		}else if (((this.casillas[2][0]==1)&&(this.casillas[2][1]==0)&&(this.casillas[2][2]==1))){
			this.casillas[2][1]=2;
		}else if (((this.casillas[0][0]==1)&&(this.casillas[1][0]==1)&&(this.casillas[2][0]==0))){
			this.casillas[2][0]=2;
		}else if (((this.casillas[0][0]==1)&&(this.casillas[1][0]==0)&&(this.casillas[2][0]==1))){
			this.casillas[1][0]=2;
		}else if (((this.casillas[0][0]==0)&&(this.casillas[1][0]==1)&&(this.casillas[2][0]==1))){
			this.casillas[0][0]=2;
		}else if (((this.casillas[0][1]==0)&&(this.casillas[1][1]==1)&&(this.casillas[2][1]==1))){
			this.casillas[0][1]=2;
		}else if (((this.casillas[0][1]==1)&&(this.casillas[1][1]==0)&&(this.casillas[2][1]==1))){
			this.casillas[1][1]=2;
		}else if (((this.casillas[0][1]==1)&&(this.casillas[1][1]==1)&&(this.casillas[2][1]==0))){
			this.casillas[2][1]=2;
		}else if (((this.casillas[0][2]==1)&&(this.casillas[1][2]==0)&&(this.casillas[2][2]==1))){
			this.casillas[1][2]=2;
		}else if (((this.casillas[0][2]==0)&&(this.casillas[1][2]==1)&&(this.casillas[2][2]==1))){
			this.casillas[0][2]=2;
		}else if (((this.casillas[0][2]==1)&&(this.casillas[1][2]==1)&&(this.casillas[2][2]==0))){
			this.casillas[2][2]=2;
		}else if((this.casillas[0][0]==0)&&(this.casillas[1][1]==1)&&(this.casillas[2][2]==1)){
			this.casillas[0][0]=2;
		}else if((this.casillas[0][0]==1)&&(this.casillas[1][1]==0)&&(this.casillas[2][2]==1)){
			this.casillas[1][1]=2;
		}else if((this.casillas[0][0]==1)&&(this.casillas[1][1]==1)&&(this.casillas[2][2]==0)){
			this.casillas[2][2]=2;
		}else if((this.casillas[2][0]==0)&&(this.casillas[1][1]==1)&&(this.casillas[0][2]==1)){
			this.casillas[2][0]=2;
		}else if((this.casillas[2][0]==1)&&(this.casillas[1][1]==0)&&(this.casillas[0][2]==1)){
			this.casillas[1][1]=2;
		}else if((this.casillas[2][0]==1)&&(this.casillas[1][1]==1)&&(this.casillas[0][2]==0)){
			this.casillas[0][2]=2;
		}else{
		while(si>0){
			// si no encuentra una posicion dada la maquina asigna una aleatoriamente suempre
			// que la posicion no este
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
} 
var tresenralla=new tresEnRaya();
export {tresEnRaya};