/*

Micro desafío 1:
Instrucciones
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
2. Crea una función que permita calcular el monto a pagar por el alquiler de un
vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y
“silla para bebe”.
3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta
las siguientes consideraciones:
a. De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
i. Compacto: $14000
ii. Mediano: $17000
iii. Camioneta: $28000
b. Si adicionalmente el cliente requiere la silla para niños, se le cobra un
adicional por día de $1200
4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
5. Para probar las diferentes respuestas invoca a la función, asigna diferentes
valores o argumentos. Usando el console.log(), muestra los resultados al
usuario:
“Estimado cliente: en base al tipo de vehículo compacto alquilado,
considerando los 3 días utilizados, el monto total a pagar es de $42000”
Recuerda que si el cliente pidió la silla para niños debe también indicarlo en el
mensaje final.

*/

// Definimos la función calcularAlquiler
function calcularAlquiler(tipoVehiculo, diasAlquiler, sillaBebe) {
  // Definimos los montos por día según el tipo de vehículo
  const montosPorDia = {
    compacto: 14000,
    mediano: 17000,
    camioneta: 28000,
  };

  // Definimos el adicional por día por la silla para niños
  const adicionalSillaBebe = 1200;

  // Calculamos el monto total a pagar
  let montoTotal = montosPorDia[tipoVehiculo] * diasAlquiler;

  // Si el cliente requiere la silla para niños, agregamos el adicional
  if (sillaBebe) {
    montoTotal += adicionalSillaBebe * diasAlquiler;
  }

  // Devolvemos el monto total a pagar
  return montoTotal;
}

// Probamos la función con diferentes valores
console.log(
  `Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días utilizados, el monto total a pagar es de $${calcularAlquiler(
    "compacto",
    3,
    false
  )}`
);
console.log(
  `Estimado cliente: en base al tipo de vehículo mediano alquilado, considerando los 5 días utilizados, el monto total a pagar es de $${calcularAlquiler(
    "mediano",
    5,
    true
  )}`
);
console.log(
  `Estimado cliente: en base al tipo de vehículo camioneta alquilado, considerando los 2 días utilizados, el monto total a pagar es de $${calcularAlquiler(
    "camioneta",
    2,
    false
  )}`
);
console.log(
  `Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días utilizados, con silla para niños, el monto total a pagar es de $${calcularAlquiler(
    "compacto",
    3,
    true
  )}`
);
