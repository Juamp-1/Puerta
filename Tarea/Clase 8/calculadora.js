let sumar = (a, b) => a + b;
let restar = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
};
let potenciar = (a, b) => {
  if (b < 0 && a < 0) {
    return"No se puede potenciar un número negativo con un exponente negativo";
  }
  return a ** b;
};
let radicar = (a, b) => {
  if (b === 0) {
    return "No se puede radicar con un índice cero";
  }
  if (a < 0 && b % 2 !== 0) {
    return "No se puede radicar un número negativo con un índice impar";
  }
  return a ** (1 / b);
};

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  potenciar,
  radicar
};