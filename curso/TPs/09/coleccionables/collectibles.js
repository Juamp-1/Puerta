const fs = require('fs');
const path = require('path');

function importar(marca) {
  const archivo = `figuras${marca}.json`;
  const ruta = path.join(__dirname, 'datos', archivo);
  const data = fs.readFileSync(ruta, 'utf8');
  const figuras = JSON.parse(data);
  return figuras.filter((figura) => figura.marca === marca);
}

module.exports = importar;

/*
La última línea del archivo es module.exports = importar;, que exporta la función importar como un módulo propio.
*/