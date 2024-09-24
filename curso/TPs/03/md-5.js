/*
Desafío extra:
Instrucciones
Si llegaste hasta acá, estás avanzando muy bien. ¡Felicitaciones!
Si querés seguir practicando, te proponemos este otro ejercicio. Ten en cuenta que este
ejercicio puede escalar en dificultad.
Paciencia, trata de resolverlo con las herramientas que tengas a tu disposición. Te
recomendamos que busques información extra en Google o documentaciones que conozcas.
1. En la carpeta ya creada, crear un nuevo archivo JavaScript (.js).
2. Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para iniciar el
aterrizaje o no. Considerará para ello la altura y la velocidad del vuelo, teniendo en cuenta
que:
a. La velocidad debe estar comprendida entre 268 a 278 km/hr.
b. La altura debe estar comprendida entre 150 m a 300 m.

¡ Éxitos !
*/
// Crear un objeto para almacenar las variables
var avion = {
  altura: 0,
  velocidad: 0,
};
// Función para verificar si el avión está listo para aterrizar
function aterrizarAvion() {
  // Verificar si la velocidad está dentro del rango permitido
  if (avion.velocidad >= 268 && avion.velocidad <= 278 &&
    // Verificar si la altura está dentro del rango permitido
    avion.altura >= 150 && avion.altura <= 300
  ) {
    console.log("El avión está listo para aterrizar");
  } else {
    console.log("El avión no está listo para aterrizar");
  }




  
}
// Función para obtener la velocidad del avión
function getVelocidad() {
  // Preguntar al usuario por la velocidad del avión
  var velocidad = prompt("Ingrese la velocidad del avión en km/hr:");
  // Convertir la velocidad a número
  avion.velocidad = parseFloat(velocidad);
  // Llamar a la función aterrizarAvion
  aterrizarAvion();
}
// Función para obtener la altura del avión
function getAltura() {
  // Preguntar al usuario por la altura del avión
  var altura = prompt("Ingrese la altura del avión en metros:");
  // Convertir la altura a número
  avion.altura = parseFloat(altura);
  // Llamar a la función aterrizarAvion
}
