function obtenerNumerosPares(array) {
  let numerosPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i]);
    }
  }
  return numerosPares;
}

// Ejemplo de uso:
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(obtenerNumerosPares(array));