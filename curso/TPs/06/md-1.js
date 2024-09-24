/*
Micro desafío 1:
Instrucciones
1. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
Saldo Bancario
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:
1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.
2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.
3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el
console.log() para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:
Estimada Gloria Medina:
El monto total de los depósitos es de: $5500.
El monto total de los retiros es de: $15000.
Por lo tanto, su saldo actual en la cuenta es de: $40000.
*/
// Crear un array que contenga las operaciones bancarias realizadas por el cliente
let operaciones = [
  { tipo: "deposito", monto: 1000 },
  { tipo: "retiro", monto: 2000 },
  { tipo: "deposito", monto: 1500 },
  { tipo: "retiro", monto: 3000 },
  { tipo: "deposito", monto: 2000 },
];
// Crear una función (Callback) que reciba como parámetro el array creado
function calcularSaldo(operaciones) {
  let saldoDepositos = 0;
  let saldoRetiros = 0;
  operaciones.forEach(function (operacion) {
    if (operacion.tipo === "deposito") {
      saldoDepositos += operacion.monto;
    } else if (operacion.tipo === "retiro") {
      saldoRetiros += operacion.monto;
    }
  });
  return {
    saldoDepositos: saldoDepositos,
    saldoRetiros: saldoRetiros,
    saldoActual: saldoDepositos - saldoRetiros,
  };
}
// Crear otra función que reciba como parámetros el nombre y el apellido del cliente
// así como el array que contiene las operaciones bancarias
function obtenerSaldo(nombre, apellido, operaciones) {
  let saldo = calcularSaldo(operaciones);
  return `Estimada ${nombre} ${apellido},
\nEl monto total de los depósitos es de: $${saldo.saldoDepositos}.
\nEl monto total de los retiros es de: $${saldo.saldoRetiros}.
\nPor lo tanto, su saldo actual en la cuenta es de: $${saldo.saldoActual}.
`;
}
// Invocar a la segunda función, asignar diferentes valores o argumentos
console.log(obtenerSaldo("Gloria", "Medina", operaciones));

