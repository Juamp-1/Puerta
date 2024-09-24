/*
Resulta que cuando hay que presentar ganancias mayores a $ 1.000 no se 
presentan junto con las rendiciones que veníamos haciendo, por lo cual vamos a 
necesitar darle una vuelta de tuerca mas a nuestra función de Sumatorias.

Escribí la función sumatoriaBajoImporte() la cual recibiendo un array con 
importes nos devuelva el resultado final de la suma de los importes de todos 
los meses que tienen ganancia, a excepción de los que superen un importe de 
$ 1.000
*/
let importes = [1200, 5000, 430, 900, 0, 990];

function sumatoriaBajoImporte(importes = []) {
    let suma = 0;
    for (let i = 0; i < importes.length; i++) {
      if (importes[i] <= 1000) {
        suma += importes[i];
      }
    }
    return suma;
  }
//console.log(importes);

//console.log(`Los importes menores a $1000 son ${sumatoriaBajoImporte(importes)} `);


/*
Cada vez que queremos ir al cine, además de ver si nuestra película está en 
cartelera, debemos verificar si el asiento que buscamos está disponibles. 
Como la cadena de cines MoviesPuerta18 sabe ésto nos está pidiendo una ayuda.

Nos piden que escribamos la función asientosDisponibles(), que tome como 
parámetro un conjunto de asientos disponibles y el asiento que quiere ocupar 
la persona. Nuestra función deberá verificar si el asiento solicitado se 
encuentra disponible y devolverle un mensaje claro y prolijo al cliente como 
en los ejemplos siguientes:

Ejemplo si se encuentra el asiento disponible

asientosDisponibles([15, 28, 44, 45, 70], 15);  

// El resultado debería ser: "Felicitaciones, el asiento número 15 está disponible"

Ejemplo si no se encuentra el asiento disponible

asientosDisponibles([15, 28, 44, 45, 70], 50);  

// El resultado debería ser: "Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos disponibles"
*/

let asientos = [15, 28, 44, 45, 70];
let asiento = 0;

function miIncludes(array = [], valor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      return true;
    }
  }
  return false;
}

function asientosDisponibles(asientos, asiento) {
  if (miIncludes(asientos, asiento)) {
    return `Felicitaciones, el asiento número ${asiento} está disponible`;
  } else {
    return `Lo sentimos, el asiento número ${asiento} está ocupado, pero aún quedan ${asientos.length} asientos disponibles`;
  }
}
//console.log(asientosDisponibles(asientos, 70));

/*
Un tren va desde terminal hasta terminal con algunas estaciones intermedias, 
y la empresa necesita saber cuantos pasajeros lleva luego de la parada en 
cada estación. Para ello nos contrataron a nosotros, quienes somos 
responsables de generar un programa que lo resuelva.

Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual 
cuando reciba la cantidad de estaciones que avanzó el tren nos devuelva un 
reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros 
que lleva el tren. La empresa nos provee los siguientes datos:

El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación central 
es la única donde bajan 80 personas y suben 120.
Teniendo éstos datos ya podemos armar nuestro programa, del cual nos pasan 
los siguientes ejemplos:

// Si ejecutara la función de ésta manera:
reporteDePasajeros(0);  

// La función me retornaría lo siguiente: 
['En la estación 0 hay 200 pasajeros arriba del tren']

Otro ejemplo:

// Si ejecutara la función de ésta manera:
reporteDePasajeros(3);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 
'En la estación 1 hay 220 pasajeros arriba del tren', 
'En la estación 2 hay 240 pasajeros arriba del tren', 
'En la estación 3 hay 260 pasajeros arriba del tren']

Otro ejemplo:

// Si ejecutara la función de ésta manera:
reporteDePasajeros(5);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 
'En la estación 1 hay 220 pasajeros arriba del tren', 
'En la estación 2 hay 240 pasajeros arriba del tren', 
'En la estación 3 hay 260 pasajeros arriba del tren',
'En la estación 4 hay 280 pasajeros arriba del tren', 
'En la estación 5 hay 320 pasajeros arriba del tren']

*/
function reporteDePasajeros(estaciones) {
    let pasajeros = 200;
    let reporte = [];
    for (let i = 0; i <= estaciones; i++) {
        if (i == 5) {
            pasajeros = pasajeros + 120 - 80
        }
            else if(i != 0){
            pasajeros = pasajeros + 50 - 30
        }
        reporte.push(`En la estación ${i} hay ${pasajeros} pasajeros arriba del tren`);
    }
    return reporte;
}

let reporte = reporteDePasajeros(6);
//console.log(reporte);


/*

Resulta que en una sala de escape para finalizar el juego le plantean a un 
grupo un desafío que es descifrar un mensaje oculto que es la clave para salir 
de la habitación.

Nelson, que no es programador, pudo descifrar la lógica de ese mensaje y te 
pasa la data así lo pasas a código.

Con la ayuda de lo que sabe Nelson tenes que realizar una función 
laClaveSecreta(), que tome como parámetro un conjunto de caracteres y te 
pueda devolver el mensaje de manera ordenada.

Por ejemplo: 

// Ejecutando la función con el siguiente parámetro:
laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] );  

// El resultado que nos devuelve la función es el siguiente: 
"El día es lunes";  

Otro ejemplo:

// Ejecutando la función con el siguiente parámetro:
laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  

// El resultado que nos devuelve la función es el siguiente: 
"Clave descifrada";  


function laClaveSecreta(mensaje) {
    let resultado = "";
    for (let i = 0; i < mensaje.length; i++) {
      if (mensaje[i] !== "*") {
        if (i + 1 >= mensaje.length || mensaje[i + 1] !== "*") {
          resultado += mensaje[i];
        }
      }
    }
    return resultado;
}
*/
function laClaveSecreta(array = []) {
    let solucion = "";

    for (let i = array.length -1;i >=0; i--) {
        if(array[i] !== "*"){
            solucion += array[i]
        }
      }
      return solucion;
} 
console.log(laClaveSecreta([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] ));

console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] ));
