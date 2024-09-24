/*
for (let vuelta = 1; vuelta <= 5; vuelta++) {
    console.log('Dando la vuelta número ' + vuelta);
    };


En Javascript existe varias formas de decir "quiero que estos comandos se repitan 
esta cantidad de veces". Una de ellas es a traves del ciclo for

Entonces, cuando es necesario repetir un comando un cierto número de veces, 
por ejemplo un console.log, en lugar de copiar y pegar como veníamos haciendo 
hasta ahora, podemos utilizar el ciclo for.

Por ejemplo, si queremos imprimir "Hola!" por pantalla 4 veces, podríamos 
escribir lo siguiente:

for (let i = 1; i == 1; i++) {

    console.log("Hola!", i);
    
}

function multFor(params) {
    for (let i = 0; i <= 12; i++) {
       console.log(params + " * " + i + " = " + params * i);
        
    }
}

multFor(1)


function imprimirAzul4() {
    for (let i = 1; i < 5; i++) {
        console.log("Azul" * i);
        
    }
    
}



Realizar una función llamada imprimirAzul4() que muestre por consola 4 veces 
la palabra Azul.


function imprimirAzul4() {
    for (let i = 1; i <= 4; i++) {
        console.log("Azul");
 }
 }

imprimirAzul4(1)

/*
Nuestra tarea es completar la función noParesDeContarImparesHasta. 
Esta función recibe un número X por parámetro y cuenta la cantidad de números 
impares que hay desde el número 0 hasta el número que la función recibe por
parámetro (inclusive) y luego retorna ese valor.

Escribí una función llamada pasandoPorI() (la última letra es una i latina 
mayúscula) que muestre por consola "acá i tiene el valor de x" donde x 
va a ser el valor de la variable i en cada iteración, por cada valor 
que va tomando i desde 0 hasta el numero 4 inclusive.

function pasandoPorI() {
    for (let i = 0; i <= 4; i++) {
    console.log(`acá i tiene el valor de ${i}`)
 }
}

pasandoPorI()


/*
Nuestra tarea es completar la función noParesDeContarImparesHasta. 
Esta función recibe un número X por parámetro y cuenta la cantidad de números 
impares que hay desde el número 0 hasta el número que la función recibe por
parámetro (inclusive) y luego retorna ese valor.

function noParesDeContarImparesHasta(x) {
    let contador = 0;

    for (let i = 0; i <= x; i++) {
        if (i % 2 !== 0) {
            contador++;
            }
        }
        return`Los numeros impares de ${x} son en total ${contador}`
}


console.log(noParesDeContarImparesHasta(10));





Ana, contadora de una conocida empresa, guarda las ganancias de cada mes en 
un array. Por ejemplo, para el último semestre del año pasado registró las 
siguientes:
*/

var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0]; //En Julio ganó $50, en Agosto perdió $12, etc

/*
Y nos pregunta recientemente: "¿puedo saber la ganancia de todo un semestre?"
"Obvio", dijimos, y escribimos el siguiente código:
*/

/*function sumatoriaGananciasSemestre(unSemestre) {
    let suma = 0;
   
    for (let i = 0; i < unSemestre.length; i++) {
        suma += unSemestre[i];
        }
        return suma;

        
}

function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
        }

let resultado = sumatoriaGananciasSemestre(gananciasUltimoSemestre)


Y nos preguntó: "¿Podría usar esta función que me dieron para calcular las 
ganancias del primer trimestre?" Por ejemplo, para calcular lo siguiente:

*/
var gananciasPrimerTrimestre = [80, 453, 1000]; //En Enero la empresa ganó $80, en Febrero, $453, en Marzo $1000
/*
function calcularGanancias(periodo = []) {
    for (let i = 0; i < periodo.length; i++) {
        console.log(`La ganancia del mes ${i} es: $${periodo[i]}`, i)
        
    }  
}
calcularGanancias(gananciasPrimerTrimestre)


Y nos quedamos pensando. ¿Tiene algún problema la función 
sumatoriaGananciasSemestre() que escribimos anteriormente? 
¿Funcionará con trimestres? ¿Y con cuatrimestres?

¡Probala en la consola realizando distintas impresiones por pantalla!




function gananciaTotal(unPeriodo) {
    var sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++){
        sumatoria = sumatoria + unPeriodo[i];
    }
    return sumatoria;
}

resultado1 = calcularGanancias()

console.log()
console.log(gananciaTotal([100]))
console.log(gananciaTotal([100, 2]))
console.log(gananciaTotal([2, 10, -20]))
console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]))






"Ah, pero esto no termina acá" - dijo Ana - "Quiero saber en cuántos meses 
hubo ganancia, es decir, que el saldo fue mayor a cero".
Completá la función cantidadDeMesesConGanancia() para dar solución al desafío

function cantidadDeMesesConGanancia(unPeriodo) {
  let sumatoria = ????;
  for (let i = 0; i < unPeriodo.???;i++) {
    ????
  }
  return sumatoria;
}
*/
function cantidadDeMesesConGanancia(unPeriodo) {
  let sumatoria1 = 0;
  for (let i = 0; i < unPeriodo.length; i++) {
    if (unPeriodo[i] > 0) {
      sumatoria1++;
    }
  }
  return sumatoria1;
}
let cantidadMeses= cantidadDeMesesConGanancia(gananciasUltimoSemestre);

console.log(cantidadMeses);


/*
Ya sobre la hora, Ana nos dejó con un problema más interesante: quiere saber 
los saldos de los meses que hubo ganancia. Por ejemplo:
*/

let saldosDeMesesConGanancia1 = [100, -20, 0, -10, 10] //[100, 20, 10]

/*

Creá la función saldosDeMesesConGanancia(). Seguramente tiene una estructura 
similar a los problemas anteriores, pero, ¡ojo! esta función tiene que devolver
un array.
*
function saldosDeMesesConGanancia(unPeriodo) {
    let saldos = [];
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo[i] > 0) {
            saldos.push(unPeriodo[i]);
            }
            }
            return saldos;
            }
            let saldos = saldosDeMesesConGanancia(saldosDeMesesConGanancia1);
            console.log(saldos);
         




Ana, viendo que somos tan productivos, nos pidió algo más: ahora quiere saber 
en cuántos meses de un período hubo pérdida.

Decimos que hay pérdida en un período cuando el saldo es menor a cero.

Escribí la función cantidadDeMesesConPerdida(). La estructura de la función 
es parecida a las que venimos haciendo, ¡animate!
/
function cantidadDeMesesConPerdida(unPeriodo) {
    let sumatoria2 = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo[i] < 0) {
            sumatoria2++;
            }
            }
            return sumatoria2;
            }
            let cantidad = cantidadDeMesesConPerdida(saldosDeMesesConGanancia1)
            console.log(cantidad);






Vamos a crear una función y asignarla a una variable!.

Para este ejercicio te damos la función tablaDeMultiplicar ya definida, 
la cual recibe un número como parámetro. Queremos que al ejecutarse 
la función muestre por consola la tabla de multiplicar del 1 al 10 del número 
que reciba.

Por ejemplo si el número que pasamos por parámetro es 5, la función deberá 
imprimir:

5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
...

hasta llegar a multiplicarlo por 10.
*/

function tablaDeMultiplicar(n){

    let factor = 1;

    while (n <= 10){
        console.log(`${n} * ${factor} = ${n * factor}`);
        factor++

    }
return `esa es la tabla del ${n}`
}

tablaDeMultiplicar(1);