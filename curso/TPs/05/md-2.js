/*Micro desafío 2:
Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
El Tech Leader de la empresa Movies-Puerta18 requiere conocer la estructura de datos del
nuevo proyecto, para ello debes tener presente lo siguiente:
2. Crear una estructura para almacenar un conjunto de películas, tales como: ‘Turno de
día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick',
‘Elvis’,‘Thor: amor y trueno’.
3. Más tarde desde la producción indicaron que la película más vendida era: ‘Thor:
amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha
película y con letras en mayúsculas. Para ello el tech leader, te solicita que crees
una función, la cual recibirá por parámetro la película indicada y deberá retornar la
misma pero en mayúscula. Para ello sería bueno que investigues sobre el método
.toUpperCase(). Con ese valor recibido, deberás colocarla primera en la estructura
creada.
● Una vez terminada la actividad, nos indican que debemos crear una cadena de texto
para las siguientes películas próximas a estrenar:
○ Counter-Strike
○ NOP
○ Vértigo
○ Nick
○ Avatar.
Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en
cuenta que cada elemento debe estar separado por una coma.
● Una vez creada la estructura, una de las programadoras del equipo indica que la
primera película incorporada a la estructura no es una película sino un video
juego. Por tal motivo, te encomiendan la tarea de excluir dicho elemento de la
estructura.
4. Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro
ambas estructuras creadas y debe devolver un nueva nueva estructura con todas las
películas, para ello te recomendamos que investigues lo que hace el método
.concat().
*/
// Crear una estructura para almacenar un conjunto de películas
let peliculas = [
  "Turno de día",
  "30 noches con mi ex",
  "Bestia",
  "El monte",
  "Top gun maverick",
  "Elvis",
  "Thor: amor y trueno",
];
// Crear una función para recibir por parámetro la película indicada y retornar la misma
// pero en mayúscula
function peliculaMayuscula(pelicula) {
  return pelicula.toUpperCase();
}
// Llamar a la función con la película indicada
let peliculaElegida = peliculaMayuscula("Thor: amor y trueno");
// Colocar la película en mayúscula en la estructura creada
peliculas.unshift(peliculaElegida);
// Crear una estructura para almacenar películas próximas a estrenar
let proximasPeliculas = [
    "Counter-Strike", 
    "NOP", 
    "Vértigo", 
    "Nick", "Avatar"];
// Crear una estructura con todas las películas
let todasLasPeliculas = peliculas.concat(proximasPeliculas);
// Excluir el videojuego de la estructura
console.log("no es una película, sino un videojuego.", todasLasPeliculas.splice(0, 1));

// Crear una función para recibir por parámetro ambas estructuras y devolver una nueva estructura con todas las películas
function todasLasPeliculasFuncion(peliculas, proximasPeliculas) {
    return peliculas.concat(proximasPeliculas);
}





/*
peliculas.js

const peliculas = [
    'Turno de día',
    '30 noches con mi ex',
    'Bestia',
    'El monte',
    'Top gun maverick',
    'Elvis',
    'Thor: amor y trueno'
  ];
  
  function convertirAMayusculas(pelicula) {
    return pelicula.toUpperCase();
  }
  
  const peliculaMasVendida = 'Thor: amor y trueno';
  const peliculaMasVendidaMayusculas = convertirAMayusculas(peliculaMasVendida);
  
  peliculas.unshift(peliculaMasVendidaMayusculas);
  
  const proximasPeliculas = [
    'Counter-Strike',
    'NOP',
    'Vértigo',
    'Nick',
    'Avatar'
  ];
  
  const cadenaProximasPeliculas = proximasPeliculas.join(', ');
  console.log(cadenaProximasPeliculas);
  
  proximasPeliculas.shift();
  
  function combinarPeliculas(peliculas1, peliculas2) {
    return peliculas1.concat(peliculas2);
  }
  
  const todasLasPeliculas = combinarPeliculas(peliculas, proximasPeliculas);
  console.log(todasLasPeliculas);

  */