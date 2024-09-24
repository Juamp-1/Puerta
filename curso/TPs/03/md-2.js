/*

Micro desafío 2:
Instrucciones
1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrolla el programa Ajuste tarifario de energía eléctrica. Utilizando el
operador condicional ternario, queremos determinar cuánto va a pagar un hogar
según su consumo. Veamos los pasos a seguir…
a. Crear una variable “pagoMes” y asignarle un pago actual de energía
eléctrica por mes.
b. Crear otra variable “consumoKWH” y asignarle un consumo mensual de
Kilovatios hora de consumo mensual por el hogar.
c. Si en el hogar se consumen más de 300 kwh por mes, entonces al pago
actual se le incrementará un 20%.
d. En el caso contrario se le mantendrá el subsidio, es decir que no tendrá
ningún aumento.
e. Una vez obtenido el monto del pago por consumo mostrar al usuario este
mensaje: “Debido a que su hogar tuvo un consumo de 450kwh, en
base al ajuste tarifario (hogares con consumo mayor a 300kwh por
mes tendrán un aumento del 20%), cumplimos con informarle que se
ha ajustado el total a pagar, que será de $14400”

*/
// Crear una variable “pagoMes” y asignarle un pago actual de energía
// eléctrica por mes.
let pagoMes = 12000;
// Crear otra variable “consumoKWH” y asignarle un consumo mensual de
// Kilovatios hora de consumo mensual por el hogar.
let consumoKWH = 450;
// Si en el hogar se consumen más de 300 kwh por mes, entonces al
// pago actual se le incrementará un 20%.
if (consumoKWH > 300) {
  pagoMes = pagoMes + pagoMes * 0.2;
  console.log(
    "Debido a que su hogar tuvo un consumo de " +
      consumo +
      "kwh, en base al ajuste tarifario (hogares con consumo mayor a 300 kwh por mes tendrán un aumento del 20%), cumplimos con informar" +
      "que se ha ajustado el total a pagar, que será de $" +
      pagoMes
  );
} else {
  console.log("El pago mensual es de $" + pagoMes);
  console.log("El consumo de energía es de " + consumoKWH + "kwh");
  console.log("El pago mensual es de $" + pagoMes);
  console.log("El consumo de energía es de " + consumoKWH + "kwh");
  console.log("El pago mensual es de $" + pagoMes);
  console.log("El consumo de energía es de " + consumoKWH + "kwh");
  console.log("El pago mensual es de $" + pagoMes);
  console.log("El consumo de energía es de " + consumoKWH + "kwh ");
}


