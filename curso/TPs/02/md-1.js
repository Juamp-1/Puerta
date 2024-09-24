/*
Micro-desafío 1:
Instrucciones
1. En Visual Studio Code crear una carpeta de trabajo y dentro de ella crear un archivo
JavaScript (.js).
2. Para llevar un control automatizado en la venta de boletos para ingresar a un partido
de fútbol, el Tech Leader de tu equipo te asigna la responsabilidad de crear y asignar
valor a un conjunto de variables. Recordá tener presente el tipo de dato que contienen.
A continuación te dejamos algunos ejemplos de variables que puedes crear: Nombre -
Apellido - Edad - Número de Teléfono - Socio (Valor booleano) - Fecha del partido - Hora
del partido - Número de silla - Precio del boleto (con valores decimales).
3. Usando el console.log(), muestra al usuario el valor asignado a cada variable.
4. Finalmente, utilizando el console.log() y el typeof, muestra al usuario el tipo de dato de
cada una de las variables utilizadas.
Es muy importante no olvidar que para lograr ejecutar todo nuestro código, debes ejecutar en la
consola de Visual Studio Code, la instrucción:

node nombreDelArchivoCreado.js

Ejemplo de código

let nombre = “Gloria”;
console.log(nombre);
console.log(typeof nombre);
*/

// Crear variables y asignar valor
let nombre = "Gloria";
let apellido = "García";
let edad = 25;
let telefono = 1234567890;
let socio = true;
let fechaPartido = "2024-03-16";
let horaPartido = "15:00";
let numeroSilla = 12;
let precioBoleto = 150.5;
// Mostrar valores de las variables
console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Edad:", edad);
console.log("Teléfono:", telefono);
console.log("Socio:", socio);
console.log("Fecha del partido:", fechaPartido);
console.log("Hora del partido:", horaPartido);
console.log("Número de silla:", numeroSilla);
console.log("Precio del boleto:", precioBoleto);
// Mostrar tipo de dato de cada variable
console.log("Tipo de dato de nombre:", typeof nombre);
console.log("Tipo de dato de apellido:", typeof apellido);
console.log("Tipo de dato de edad:", typeof edad);
console.log("Tipo de dato de telefono:", typeof telefono);
console.log("Tipo de dato de socio:", typeof socio);
console.log("Tipo de dato de fechaPartido:", typeof fechaPartido);
console.log("Tipo de dato de horaPartido:", typeof horaPartido);
console.log("Tipo de dato de numeroSilla:", typeof numeroSilla);
console.log("Tipo de dato de precioBoleto:", typeof precioBoleto);
