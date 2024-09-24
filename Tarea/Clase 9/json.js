
/*
const PI = 3.14159;
let numeros = [2, 5, 54, 57, 7, 498];

let elDoble = numeros.map(function(numeros) {
    
    return numeros * 2;
    
});


const elDobleManual = [];

for (let i = 0; i < numeros.length; i++) {
    elDobleManual = numeros[i] *2;
    
}
console.log(elDobleManual);


let datosJson = '{"club": "Independiente","barrio": "Avellaneda"}';
let datosConvertidos = JSON.parse(datosJson);
console.log(datosConvertidos);
// Se verá en consola un objeto literal
// { club: 'Independiente', barrio:'Avellaneda' }
*/

/* app.js*/


const fs = require('fs') // módulo nativo de node: File System
const miObjeto = require('./objeto.js'); // requiriendo un módulo propio
const objetoJSON = fs.readFileSync('./objetoJSON.json','utf-8') //leyendo un archivo en formato JSON

console.log(typeof miObjeto); //object
console.log(typeof objetoJSON); //string

const JSONParseado = JSON.parse(objetoJSON); //JSON parseado

console.log(objetoJSON);
console.log(JSONParseado);

const arrayJSON = fs.readFileSync('./arrayJSON.json', 'utf-8')
const arrayJSONParseado = JSON.parse(arrayJSON);

console.log(arrayJSONParseado);


console.log(objetoJSON.texto); //undefined
console.log(JSONParseado.texto); //Mi texto

JSONParseado.texto = "El texto ha sido modificado!"
console.log(JSONParseado.texto);

const objetoStringificado = JSON.stringify(JSONParseado,null,3);

console.log(objetoStringificado);


fs.writeFileSync('./objetoJSON.json',objetoStringificado,'utf-8')







