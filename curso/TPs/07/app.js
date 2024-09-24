// Importamos el módulo peliculas.js
const peliculas = require("./peliculas");

// Utilizamos un ciclo for para recorrer el array de películas
for (let i = 0; i < peliculas.length; i++) {
  const pelicula = peliculas[i];
  console.log(`Título: ${pelicula.id} - ${pelicula.genre}`);
  console.log(`Calificación: ${pelicula.rating}`);
  console.log(`Premios: ${pelicula.awards}`);
  console.log(`Duración: ${pelicula.length} minutos`);
  console.log(`Precio: $${pelicula.price}`);
  console.log("------------------------");
}

const fs = require("fs");
// Asignamos la ruta del archivo mensaje.txt a la variable archivo
const archivo = "./mensaje.txt";
// Leemos el contenido del archivo mensaje.txt
fs.readFile(archivo, "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
