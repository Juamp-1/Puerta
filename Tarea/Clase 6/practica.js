/*

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

let operaciones = [-1000, 2000, -500, 3000, -1000, 4000, -2000, 5000, -3000];

// Crear una función (Callback) que reciba como parámetro el array creado
function calcularSaldo(operaciones) {
  // Inicializar variables para almacenar el saldo total de depósitos y retiros
  let saldoDepositos = 0;
  let saldoRetiros = 0;
  // Recorrer el array de operaciones
  operaciones.forEach(function (operacion) {
    // Si la operación es un depósito, sumarla al saldo de depósitos
    if (operacion > 0) {
      saldoDepositos += operacion;
    }
    // Si la operación es un retiro, sumarla al saldo de retiros
    else {
      saldoRetiros += Math.abs(operacion);
    }
  });
  // Devolver el saldo total de depósitos, el saldo actual de retiros y el
  // saldo actual del cliente
  return [saldoDepositos, saldoRetiros, saldoDepositos - saldoRetiros];
}
// Crear otra función que reciba como parámetros el nombre y el apellido del cliente
// así como el array que contiene las operaciones bancarias
function mostrarSaldo(nombre, apellido, operaciones) {
  // Invocar a la función calcularSaldo con el array de operaciones
  let [saldoDepositos, saldoRetiros, saldoActual] = calcularSaldo(operaciones);
  // Mostrar los resultados al usuario
  console.log(`Estimada ${nombre} ${apellido}:`);
  console.log(`El monto total de los depósitos es de: $${saldoDepositos}.`);
  console.log(`El monto total de los retiros es de: $${saldoRetiros}
                                        `);
  console.log(
    `Por lo tanto, su saldo actual en la cuenta es de: $${saldoActual}.`
  );
  // Invocar a la función mostrarSaldo con los parámetros
  // correspondientes
  mostrarSaldo("Juan", "Pérez", operaciones);
}


/*
Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde se
pueda visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes usar
algunos de los ciclos o bucles aprendidos: for - while o do while,
Para ayudar al equipo de desarrollo, tu responsabilidad será:
1. Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad
de generar de manera automática la tabla de multiplicar del 1 al 10.
2. Lo ideal es que función muestre al usuario algo así:
Tabla de multiplicar
--------------------
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
1 * 6 = 6
1 * 7 = 7
1 * 8 = 8
1 * 9 = 9
1 * 10 = 10
*/
function tablaMultiplicar() {
    console.log("Tabla de multiplicar");
   
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${i} = ${i * i}`);
    }
}
  
