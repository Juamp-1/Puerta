/*
Micro desafío 3:
Instrucciones
1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa traductor condicional. La idea es que si el usuario
ingresa una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le
devuelva la misma palabra traducida al idioma inglés. Te recomendamos usar la
estructura switch. Puedes ayudarte con Google Traductor.
En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario
un mensaje que le informe que “La palabra ingresada es incorrecta”.

*/
// Crear un objeto con las traducciones
let traducciones = {
  perro: "dog",
  gato: "cat",
  puerta: "door",
  ventana: "window",
  mesa: "table",
};

// Función para traducir la palabra
function traducirPalabra(palabra) {
  // Usar la estructura switch para comparar la palabra ingresada con las traducciones
  switch (palabra) {
    case "perro":
    case "gato":
    case "puerta":
    case "ventana":
    case "mesa":
      return traducciones[palabra];
    default:
      return "La palabra ingresada es incorrecta";
  }
}
// Llamar a la función con la palabra ingresada por el usuario
let palabra = prompt("Ingrese una palabra");
let resultado = traducirPalabra(palabra);
console.log(resultado);
