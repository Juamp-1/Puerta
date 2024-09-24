/*
Probá y experimenta en la consola las siguientes consultas realizando 
distintas impresiones por pantalla:

seriesFavoritasDeAna
seriesFavoritasDeHector
["hola","mundo!"]
["hola","hola!"]

Este ejercicio requiere de que muestres por consola las variables y los arrays 
mencionados anteriormente.
*/

let seriesFavoritasAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
let seriesFavoritasHector = ["En Terapia", "Recordando el show de Alejandro Molina"];

let nuevaSerie = seriesFavoritasAna.push("Sherlock Holmes");
seriesFavoritasHector.push("El Chavo del 8", "Gran Hermano");
seriesFavoritasHector.pop();
seriesFavoritasHector.shift();
seriesFavoritasHector.unshift("Los Simuladores")
let guion = seriesFavoritasAna.join(" - ");

console.log(seriesFavoritasAna.indexOf("Breaking Bad"));
console.log(seriesFavoritasAna[2]);
console.log(seriesFavoritasAna.length);
console.log(seriesFavoritasAna.indexOf("The Sopranos"));
console.log(seriesFavoritasAna.includes("The Sopranos"));
console.log(seriesFavoritasAna.slice(0, 2));
console.log(seriesFavoritasAna.lastIndexOf("House of Cards"));
console.log(seriesFavoritasAna.lastIndexOf("Game of Thrones"));
console.log(seriesFavoritasAna.concat(seriesFavoritasHector));

console.log(guion);
console.log(seriesFavoritasAna);
console.log(seriesFavoritasHector);