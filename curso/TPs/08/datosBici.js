const fs = require('fs');

function leerBicicletas() {
  const contenido = fs.readFileSync('bicicletas.json', 'utf8');
  const bicicletas = JSON.parse(contenido);
  return bicicletas;
}

module.exports = leerBicicletas;

const arrayBicicletas = Object.values(bicicletas);

console.log(arrayBicicletas);