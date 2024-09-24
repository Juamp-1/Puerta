/*

Micro desafío 4:
Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa mi primera calculadora. Queremos que, usando estructura
switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
hará en base a dos valores suministrados y al tipo de operación indicada: “sumar”,
“restar”, “multiplicar”, “dividir”.
Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle un
mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar -
restar- multiplicar- dividir”.
A continuación te dejamos un diagrama de flujo, para que te des una idea de la lógica que
podemos encontrar en una calculadora. Recordá igualmente que en tu caso debes usar la
estructura switch

*/

// Definimos la función calculadora que recibirá los valores y la operación a realizar
function calculadora(num1, num2, operacion) {
  // Usamos la estructura switch para evaluar la operación a realizar
  switch (operacion) {
    case "sumar":
      // Si la operación es sumar, calculamos el resultado y lo mostramos
      console.log(`El resultado de sumar ${num1} + ${num2} es ${num1 + num2}`);
      break;
    case "restar":
      // Si la operación es restar, calculamos el resultado y lo mostramos
      console.log(`El resultado de restar ${num1} - ${num2} es $
                        ${num1 - num2}
                        `);
      break;
    case "multiplicar":
      // Si la operación es multiplicar, calculamos el resultado y lo mostramos
      console.log(
        `El resultado de multiplicar ${num1} * ${num2} es ${num1 * num2}`
      );
      break;
    case "dividir":
      // Si la operación es dividir, calculamos el resultado y lo mostramos
      if (num2 != 0) {
        console.log(`El resultado de dividir ${num1} / ${num2} es $
                                            ${num1 / num2}
                                            `);
      } else {
        console.log("No se puede dividir por cero");
      }
      break;
    default:
      // Si la operación no es ninguna de las anteriores, mostramos un mensaje de
      error;
      console.log(
        "Las operaciones aceptadas son: sumar - restar - multiplicar - dividir"
      );
      break;
  }
  // Llamamos a la función calculadora con los valores y la operación a realizar
  calculadora(10, 2, "sumar");
  calculadora(10, 2, "restar");
  calculadora(10, 2, "multiplicar");
  calculadora(10, 2, "dividir");
  calculadora(10, 0, "dividir");


}
