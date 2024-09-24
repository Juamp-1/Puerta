/*Micro desafío 2:
Instrucciones
1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
2. En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador, para
ello debes declarar las siguientes variables y almacenar en ellas los siguientes datos del
trabajador: nombre , apellido, sueldoActual, porcentajeAumento
3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la
operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100). 4. En
otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo sueldo.
4. Usando el console.log() y concatenando string, muestra en la consola de Visual Studio
Code los contenidos de cada una de las variables:
Ejemplo de código
Hola, estimad@ Gloria Medina
En base a su sueldo actual:
$20000
Ha recibido un aumento del 25%:
$5000
y su nuevo sueldo es de: $25000
*/
// Declarar variables y almacenar datos del trabajador
var nombre = "Gloria";
var apellido = "Medina";
var sueldoActual = 20000;
var porcentajeAumento = 25;
// Calcular el aumento del trabajador
var calculoAumento = (sueldoActual * porcentajeAumento) / 100;
// Calcular el nuevo sueldo
var nuevoSueldo = sueldoActual + calculoAumento;
// Mostrar en la consola los contenidos de cada variable
console.log("Hola, estimad@" + nombre + " " + apellido);
console.log("En base a su sueldo actual: $" + sueldoActual);
console.log("Ha recibido un aumento del " + porcentajeAumento + "%: $" + calculoAumento);
console.log("y su nuevo sueldo es de: $" + nuevoSueldo);
