/*const numeros = [5, 7, 16];

const suma = numeros.reduce(function(acum, num){
    console.log("acum", acum, "num", num);
    
	   return acum + num;
},0);

console.log(suma); // 28



Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos 
momentos para una maratón.
Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, 
usando el método reduce.
*/

const vueltas = [5, 8, 12, 3, 22]
const totalVueltas = vueltas.reduce((acum,num) => acum + num, 0);

console.log(totalVueltas);
