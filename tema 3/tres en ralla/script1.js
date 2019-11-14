import {tresEnRaya} from './script2.js';
import {entornoGrafico} from './script3.js'
//console.log(cube(3)); 
window.tresenralla=new tresEnRaya();
//alert ('funciona')
window.entorno = new entornoGrafico(tresenralla); 
console.log(tresenralla.casillas);
console.log(tresenralla.jugar(2,2));
    