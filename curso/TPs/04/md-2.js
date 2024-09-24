/*
Micro desafío 2:
Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. El teach leader de la empresa nos pide construir un sistema para un local de
venta de comida rápida. Los clientes eligen el tipo de hamburguesa base con un
precio base y, por cada selección que el cliente agregue, se le suma el valor de su
selección al precio.
Por ejemplo, si partiendo de una hamburguesa base carne a la parrilla con un precio “a”,
el cliente les incorpora los adicionales: de queso “b” y tomate “c”, el total a pagar sería
a+b+c. Así sucesivamente con el resto de los ingredientes.
Es importante tener presente que cada uno de estos adicionales estarán representados por
valores booleanos, es decir, true o false, dependiendo de si aceptan o no cada uno de los
adicionales. Así recibiremos un total de ocho valores booleanos, uno por cada adicional.
Tu responsabilidad será la de crear dos funciones:
Primera función - Callback:
● Tendrá la responsabilidad de calcular el total a pagar por el cliente, en base a un
total de nueve parámetros que recibirá la función:
● Un string para el tipo de hamburguesa, teniendo en cuenta las siguientes:
○ Carne a la parrilla: $1800
○ Pollo: $1500
○ Vegetariana: $1200
● Y recibirá los ocho valores booleanos de los adicionales, teniendo en cuenta los
siguientes:
○ Jamón = $30
○ Queso = $25
○ Salsa de tomate = $5
○ Mayonesa = $5
○ Mostaza = $5
○ Tomate = $15
○ Lechuga = $10
○ Cebolla = $10
Segunda función:
● Esta función tendrá la responsabilidad de devolver un mensaje al usuario
donde le indique su nombre, su apellido y el total a pagar en base al tipo de
hamburguesa seleccionado más los adicionales indicados. Tenga en cuenta
que esta función deberá recibir como parámetros: “nombre del usuario”, “apellido
del usuario”, “tipo de hamburguesa” y los ocho valores booleanos en función a los
adicionales que el cliente haya seleccionado.
Una vez creado el programa, ejecutalo. Para probar las diferentes respuestas, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides usar el console.log() para
mostrar los resultados al usuario, de acuerdo al siguiente mensaje:
Estimado Daniel Fuentes, el monto total a pagar es de: $1905

*/
// Primera función - Callback
function calcularTotal(
  hamburguesa,
  jamon,
  queso,
  salsa,
  mayonesa,
  mostaza,
  tomate,
  lechuga,
  cebolla
) {
  let precioBase = 0;
  let adicionales = 0;
  let total = 0;
  // Se calcula el precio base de la hamburguesa
  switch (hamburguesa) {
    case "Carne a la parrilla":
      precioBase = 1800;
      break;
    case "Pollo":
      precioBase = 1500;
      break;
    case "Vegetariana":
      precioBase = 1200;
      break;
    default:
      console.log("Tipo de hamburguesa no válida");
      return;
  }
  // Se calcula el precio de los adicionales
  if (jamon) {
    adicionales += 30;
  }
  if (queso) {
    adicionales += 25;
  }
  if (salsa) {
    adicionales += 5;
  }
  if (mayonesa) {
    adicionales += 10;
  }
  if (mostaza) {
    adicionales += 5;
  }
  if (tomate) {
    adicionales += 20;
  }
  if (lechuga) {
    adicionales += 15;
  }
  if (cebolla) {
    adicionales += 10;
  }
  // Se calcula el total
  total = precioBase + adicionales;
  return total;
}

