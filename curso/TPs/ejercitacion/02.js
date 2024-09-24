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

function miIncludes(array = [], valor) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === valor) {
        return true;
      }
    }
    return false;
  }
  
  //console.log(miIncludes([15, 28, 44, 45, 70], 15));
  
  function asientosDisponiblesIfTradicional(array = [], lugar) {
    if (array.includes(lugar)) {
      return `Felicitaciones, el asiento número ${lugar} está disponible`;
    }
    return `Lo sentimos, el asiento número ${lugar} está ocupado, pero aún quedan ${array.length} asientos disponibles`;
  }
  
  function asientosDisponibles(array = [], lugar) {
    return array.includes(lugar)
      ? `Felicitaciones, el asiento número ${lugar} está disponible`
      : `Lo sentimos, el asiento número ${lugar} está ocupado, pero aún quedan ${array.length} asientos disponibles`;
  }
  
  console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));
  console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));
  